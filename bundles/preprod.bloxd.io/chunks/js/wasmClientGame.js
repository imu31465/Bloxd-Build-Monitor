export const id = 68;
export const ids = [68];
export const modules = {
  53669: (UU, XU, zU) => {
    var cU = {
      "./bedwars/bedwarsClient": [40137, 9],
      "./bridgeBattle/bridgeBattleClient": [40143, 10],
      "./buildAFactory2/buildAFactory2Client": [39269, 87, 85, 244, 263, 11],
      "./classic/classicClient": [40147, 12],
      "./classic/smp2Client": [40151, 13],
      "./clutch/clutchClient": [40155, 14],
      "./containmentBreach/containmentBreachClient": [40158, 239, 15],
      "./cooking/cookingClient": [40264, 16],
      "./defusal/defusalClient": [40271, 17],
      "./frontline/frontlineClient": [40275, 87, 85, 18],
      "./goalRush/goalRushClient": [40288, 19],
      "./greenville/greenvilleClient": [40296, 170, 269, 20],
      "./hideseek/hideseekClient": [40324, 21],
      "./luckyBedwars/luckyBedwarsClient": [40328, 22],
      "./murderMystery/murderMysteryClient": [40333, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40338, 24],
      "./oneBlock/oneBlockClient": [40342, 25],
      "./plots/plotsClient": [40349, 261, 239, 26],
      "./pvpCiv/pvpCivClient": [40416, 27],
      "./secretSanta/secretSantaClient": [40422, 28],
      "./skyIslands/skyIslandsClient": [40427, 29],
      "./skyblock/skyblockClient": [39303, 87, 253, 244, 170, 232, 30],
      "./tsunami/tsunamiClient": [40435, 31]
    };

    function yU(UU) {
      if (!zU.o(cU, UU)) return Promise.resolve().then((() => {
        var XU = new Error("Cannot find module '" + UU + "'");
        throw XU.code = "MODULE_NOT_FOUND", XU
      }));
      var XU = cU[UU],
        yU = XU[0];
      return Promise.all(XU.slice(1).map(zU.e)).then((() => zU(yU)))
    }
    yU.keys = () => Object.keys(cU), yU.id = 53669, UU.exports = yU
  },
  39858: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => yU
    });
    var cU = zU(31);

    function yU(UU) {
      return "refetchCode" === UU || "devDownloadJson" === UU || UU.startsWith("Plugin")
    }

    function QU(UU, XU) {
      "refetchCode" !== UU ? "Plugin|MobAiPlugin|ShowPetUi" !== UU ? Promise.all([zU.e(120), zU.e(121), zU.e(116), zU.e(118), zU.e(231)]).then((() => zU(44426))).then((zU => {
        let {
          runClientGameMessage: cU
        } = zU;
        cU(UU, XU)
      })).catch((XU => {
        console.error(`Game message ${UU} failed`, XU)
      })) : cU.k.UY("showPetUi", XU) : cU.k.UY("refetchCode")
    }
  },
  53645: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      f: () => yU
    });
    const cU = ["recording", "freecam", "keyframe"];

    function yU() {
      const UU = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(UU[1]) << 32n | BigInt(UU[0])
    }
  },
  34791: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => oU
    });
    var cU = zU(27);
    const yU = 24,
      QU = "farNametags",
      AU = 1e5;

    function FU() {
      var UU;
      return null === (UU = cU.e.get("showDistantNametags")) || void 0 === UU || UU
    }

    function oU() {
      var UU;
      return null !== (UU = function() {
        const UU = new URLSearchParams(window.location.search).get(QU),
          XU = null === UU || "" === UU ? NaN : Number(UU);
        return Number.isFinite(XU) && XU >= 0 ? Math.min(XU, AU) : null
      }()) && void 0 !== UU ? UU : FU() ? 0 : yU
    }
  },
  45247: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      blockIdOf: () => oD.c,
      clearWasmCameraScreen: () => ty,
      creativeItemIds: () => ac.creativeItemIds,
      decodeMapSettings: () => YD,
      drainTextRerasters: () => hF.e,
      enchantmentPerksOf: () => ac.enchantmentPerksOf,
      endGameHost: () => RD,
      followCursorAim: () => ED,
      followMenuPrefs: () => aQ,
      loadAudio: () => gD,
      loadClientGame: () => tD,
      loadTextIcons: () => hF.h,
      rasterText: () => TF.e,
      readBoardToEdit: () => FD,
      readDrawCensus: () => ND.h,
      setTextHost: () => hF.m,
      setTextLocalPlayer: () => hF.n,
      showInCreativeInvenOf: () => ac.showInCreativeInvenOf,
      startGameHost: () => ZD,
      startShellAnalytics: () => yD,
      startSkyFeed: () => Zo,
      textChanged: () => hF.s,
      warmText: () => TF.f,
      wasmCameraScreen: () => ay
    });
    zU(37215);
    var cU = zU(27),
      yU = zU(37540),
      QU = zU(40012),
      AU = zU(31),
      FU = zU(3791),
      oU = zU(37538),
      DU = zU(1310),
      EU = zU(633),
      YU = zU(39002),
      NU = zU(5318),
      IU = zU(41699),
      pU = zU(41652);
    const aU = pU.Mb / 4,
      tU = pU.p.PlaySound,
      gU = pU.p.SoundReset,
      kU = NU.W.ReplayFailed,
      GU = NU.W.RecorderEvent;
    class BU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = UU, this.memory = XU, this.audio = zU, this.serverIds = new Int32Array(256).fill(pU.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(pU.w.BYTES)), this.renderPtr = 0, this.xY = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new pU.$(UU, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.oQU(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(UU, XU) {
        const zU = this.eventView();
        return new Uint8Array(zU.buffer, zU.byteOffset + UU, XU)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return pU.w.localId(this.apiView, 0)
      }
      localDeaths() {
        return pU.w.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const UU = this.apiView,
          XU = pU.w.entRenderPtr(UU, 0),
          zU = pU.w.entVisPtr(UU, 0),
          cU = pU.w.entCapacity(UU, 0);
        if (XU !== this.renderPtr || zU !== this.visPtr || cU !== this.xY || this.renderBuffer !== this.buffer) {
          this.renderPtr = XU, this.visPtr = zU, this.xY = cU, this.renderBuffer = this.buffer;
          const UU = this.memoryView(Float32Array, XU, cU * aU, "the render array"),
            yU = this.memoryView(Uint8Array, zU, cU, "the visibility array");
          this.renderCapacity = UU && yU ? cU : 0, this.render = UU && yU ? UU : new Float32Array(0), this.vis = UU && yU ? yU : new Uint8Array(0)
        }
      }
      memoryView(UU, XU, zU, cU) {
        try {
          return (0, IU.t)(UU, this.memory().buffer, XU, zU, cU)
        } catch (yU) {
          return this.keepCorruption(yU), null
        }
      }
      memoryData(UU, XU, zU, cU) {
        try {
          return (0, IU.e)(this.memory().buffer, UU, XU, zU, cU)
        } catch (yU) {
          return this.keepCorruption(yU), null
        }
      }
      scratchData(UU, XU) {
        const zU = this.scratch(),
          cU = this.scratchView;
        return (null === cU || void 0 === cU ? void 0 : cU.buffer) === this.memory().buffer && cU.byteOffset === zU && cU.byteLength >= UU ? cU : (this.scratchView = this.memoryData(zU, UU, 8, XU), this.scratchView)
      }
      reportCorruption(UU) {
        this.keepCorruption(new IU.c(UU))
      }
      keepCorruption(UU) {
        if (!(UU instanceof IU.c)) throw UU;
        this.corruption ??= UU
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(UU, XU, zU) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: cU,
          len: yU
        } = UU;
        this.eventsPtr = cU, this.eventsLen = yU, this.eventsBuffer = null;
        const QU = this.eventView();
        for (let DU = 0; DU < yU;) {
          const UU = QU.getUint32(DU, !0),
            zU = 65535 & UU,
            cU = UU >>> 16,
            yU = DU + NU.V;
          if (zU === pU.p.EntitySpawned) {
            var AU;
            if (cU !== pU.Rb.BYTES) throw dU(zU, DU, cU);
            const UU = pU.Rb.serverId(QU, yU);
            this.spawned(UU, pU.Rb.index(QU, yU), pU.Rb.kind(QU, yU)), null === (AU = XU.entityAdded) || void 0 === AU || AU.call(XU, UU)
          } else if ((zU === pU.p.ChunkSlot || zU === pU.p.EntityInfoChanged) && !(0, pU.pe)(zU, QU, yU, cU, XU)) throw dU(zU, DU, cU);
          DU = yU + (0, NU.De)(cU)
        }
        try {
          var FU;
          null === (FU = XU.afterPrescan) || void 0 === FU || FU.call(XU), this.throwCorruption(), !zU() && this.dispatch(UU, XU, zU) && (this.throwCorruption(), this.applyListener(), XU.afterWalk(UU.kind)), this.throwCorruption()
        } catch (oU) {
          throw oU instanceof IU.c && (this.corruption ??= oU), oU
        } finally {
          zU() || null !== this.corruption || this.applyDespawns(yU, XU)
        }
      }
      applyDespawns(UU, XU) {
        const zU = this.eventView();
        for (let yU = 0; yU < UU;) {
          const UU = zU.getUint32(yU, !0),
            QU = yU + NU.V;
          if ((65535 & UU) === pU.p.EntityDespawned && UU >>> 16 === pU.Rb.BYTES) {
            const UU = pU.Rb.serverId(zU, QU);
            var cU;
            if (this.despawned(UU, pU.Rb.index(zU, QU))) null === (cU = XU.entityRemoved) || void 0 === cU || cU.call(XU, UU)
          }
          yU = QU + (0, NU.De)(UU >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(UU, XU, zU) {
        const {
          len: cU,
          net: yU,
          netOffsets: QU
        } = UU;
        let AU = this.eventView(),
          FU = 0;
        for (let PU = 0; PU < cU;) {
          const UU = AU.getUint32(PU, !0),
            cU = 65535 & UU,
            LU = UU >>> 16,
            eU = PU + NU.V;
          let CU = !1;
          if (FU < yU.length && QU[FU] === PU) XU.netEvent(yU[FU]), FU++, CU = !0;
          else if (cU === NU.W.LocalPlayerBound) {
            var oU;
            if (LU !== NU.Nb) throw dU(cU, PU, LU);
            null === (oU = XU.localPlayerBound) || void 0 === oU || oU.call(XU, AU.getInt32(eU, !0)), CU = !0
          } else if (cU === NU.W.LocalHurt) {
            var DU;
            if (LU !== NU.Lb) throw dU(cU, PU, LU);
            null === (DU = XU.localHurt) || void 0 === DU || DU.call(XU, AU.getInt32(eU, !0), AU.getFloat32(eU + 4, !0), AU.getUint32(eU + 8, !0)), CU = !0
          } else if (cU === NU.W.AttackHit) {
            var EU;
            if (LU !== NU.c) throw dU(cU, PU, LU);
            const UU = AU.getFloat32(eU, !0),
              zU = AU.getFloat32(eU + 4, !0),
              yU = AU.getFloat32(eU + 8, !0),
              QU = AU.getUint32(eU + 12, !0);
            null === (EU = XU.attackHit) || void 0 === EU || EU.call(XU, UU, zU, yU, 0 !== (QU & NU.h.Crit), 0 !== (QU & NU.h.HitSelf))
          } else if (cU === NU.W.PhysicsType) {
            var YU;
            if (LU !== NU.fc) throw dU(cU, PU, LU);
            null === (YU = XU.physicsType) || void 0 === YU || YU.call(XU, AU.getUint32(eU, !0), AU.getInt32(eU + 4, !0)), CU = !0
          } else if (cU === NU.W.VehicleEffect) {
            var IU;
            const UU = WU(AU, eU, LU);
            if (null === UU) throw dU(cU, PU, LU);
            null === (IU = XU.vehicleEffect) || void 0 === IU || IU.call(XU, UU.op, UU.name, UU.icon, UU.level, UU.durationMs), CU = !0
          } else if (cU === NU.W.ZoomChanged) {
            var aU;
            if (LU !== NU.ge) throw dU(cU, PU, LU);
            null === (aU = XU.zoomChanged) || void 0 === aU || aU.call(XU, AU.getFloat32(eU, !0), AU.getUint8(eU + 4)), CU = !0
          } else if (cU === NU.W.ZoomDisabled) {
            var BU;
            if (0 !== LU) throw dU(cU, PU, LU);
            null === (BU = XU.zoomDisabled) || void 0 === BU || BU.call(XU), CU = !0
          } else if (cU === NU.W.BhopDisabled) {
            var ZU;
            if (0 !== LU) throw dU(cU, PU, LU);
            null === (ZU = XU.bhopDisabled) || void 0 === ZU || ZU.call(XU), CU = !0
          } else if (cU === NU.W.GameCamera) {
            var RU;
            null === (RU = XU.gameCamera) || void 0 === RU || RU.call(XU, new Uint8Array(AU.buffer, AU.byteOffset + eU, LU).slice()), CU = !0
          } else if (cU === pU.p.ChunkSlot || cU === pU.p.EntityInfoChanged);
          else if (cU >= tU && cU <= gU) {
            if (this.audio && !this.audio.onAudioEvent(cU, AU, eU, LU)) throw dU(cU, PU, LU)
          } else if (cU >= kU && cU <= GU) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(cU, AU, eU, LU)) throw dU(cU, PU, LU);
              CU = !0
            }
          } else if (cU >= pU.ud && cU <= pU.vd && cU !== NU.W.EnvLighting) {
            if (!(0, pU.pe)(cU, AU, eU, LU, XU)) throw dU(cU, PU, LU);
            CU = !0
          }
          if (CU) {
            if (zU()) return !1;
            AU = this.eventView()
          }
          PU = eU + (0, NU.De)(LU)
        }
        return !zU()
      }
      applyListener() {
        var UU;
        if (!this.audio) return;
        const XU = pU.w.audioViewPtr(this.apiView, 0),
          zU = this.memory().buffer;
        let cU = this.audioView;
        (null === (UU = cU) || void 0 === UU ? void 0 : UU.buffer) === zU && cU.byteOffset === XU || (cU = (0, IU.e)(zU, XU, pU.z.BYTES, 8, "the audio view"), this.audioView = cU), cU && this.audio.applyListener(cU)
      }
      indexOf(UU) {
        return this.indexById.get("number" === typeof UU ? UU : +UU)
      }
      isLocal(UU) {
        return UU !== pU.ad && UU === pU.w.localId(this.apiView, 0)
      }
      wG(UU) {
        const XU = [0, 0, 0];
        return this.readPosition("number" === typeof UU ? UU : +UU, XU) ? XU : null
      }
      readPosition(UU, XU) {
        const zU = this.apiView;
        if (void 0 !== this.indexById.get(UU) && this.isLocal(UU)) {
          for (let UU = 0; UU < 3; UU++) XU[UU] = pU.w.localPos(zU, 0, UU);
          return !0
        }
        return this.readDrawnPosition(UU, XU)
      }
      readDrawnPosition(UU, XU) {
        const zU = this.apiView,
          cU = this.indexById.get(UU);
        if (void 0 === cU || cU >= this.renderCapacity) return XU[0] = XU[1] = XU[2] = NaN, !1;
        const yU = cU * aU;
        for (let QU = 0; QU < 3; QU++) XU[QU] = this.render[yU + QU] + pU.w.origin(zU, 0, QU);
        return !0
      }
      checkValid(UU) {
        return void 0 !== this.indexOf(UU)
      }
      isAlive(UU) {
        const XU = this.indexOf(UU);
        if (void 0 === XU) return null;
        if (this.ensureViews(), XU >= this.renderCapacity) return null;
        const zU = this.vis[XU];
        return 0 === zU ? null : 0 !== (zU & pU.oe.Alive)
      }
      getEntityType(UU) {
        const XU = this.indexOf(UU);
        return void 0 === XU ? this.isLocal("number" === typeof UU ? UU : +UU) ? "Player" : null : RU(this.kinds[XU])
      }
      spawned(UU, XU, zU) {
        if (XU >= 1048576) throw new IU.c(`entity ${UU} spawned at index ${XU}`);
        this.ensureIndex(XU), this.serverIds[XU] === UU && null !== this.idStr[XU] || (this.idStr[XU] = String(UU)), this.serverIds[XU] = UU, this.kinds[XU] = zU, this.indexById.set(UU, XU)
      }
      despawned(UU, XU) {
        let zU = !1;
        return this.indexById.get(UU) === XU && (this.indexById.delete(UU), zU = !0), XU < this.serverIds.length && this.serverIds[XU] === UU && (this.serverIds[XU] = pU.ad, this.kinds[XU] = 0, this.idStr[XU] = null), zU
      }
      ensureIndex(UU) {
        const XU = this.serverIds.length;
        if (UU < XU) return;
        let zU = 2 * XU;
        for (; zU <= UU;) zU *= 2;
        const cU = new Int32Array(zU).fill(pU.ad);
        cU.set(this.serverIds), this.serverIds = cU;
        const yU = new Uint16Array(zU);
        yU.set(this.kinds), this.kinds = yU;
        for (let QU = XU; QU < zU; QU++) this.idStr.push(null)
      }
      eventView() {
        const UU = this.memory().buffer;
        return UU !== this.eventsBuffer && (this.eventsBuffer = UU, this.events = new DataView(UU, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const UU = this.memory().buffer;
        this.buffer = UU, this.viewPtr < 0 && (this.viewPtr = this.core.DQU()), this.view = new DataView(UU, this.viewPtr, pU.w.BYTES), this.rereadDirectory()
      }
    }

    function ZU(UU) {
      return UU >>> pU.d === pU.s.Item
    }

    function RU(UU) {
      var XU, zU;
      const cU = UU & pU.f;
      switch (UU >>> pU.d) {
        case pU.s.Lifeform:
          return null !== (XU = EU.h[cU]) && void 0 !== XU ? XU : null;
        case pU.s.Throwable:
          return null !== (zU = YU.j[cU]) && void 0 !== zU ? zU : null;
        case pU.s.Mesh:
          return "Mesh";
        case pU.s.Audio:
          return "AudioEntity";
        case pU.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const PU = new TextDecoder;

    function WU(UU, XU, zU) {
      if (zU < NU.Jd.HEAD_BYTES) return null;
      const cU = UU.getUint32(XU, !0),
        yU = UU.getUint32(XU + 20, !0),
        QU = UU.getUint32(XU + 24, !0),
        AU = NU.Jd.HEAD_BYTES + (0, NU.De)(yU);
      if (cU !== NU.Jd.UPDATE && cU !== NU.Jd.REMOVE || yU > zU || AU + QU > zU) return null;
      const FU = (zU, cU) => PU.decode(new Uint8Array(UU.buffer, UU.byteOffset + XU + zU, cU)),
        oU = UU.getFloat64(XU + 12, !0);
      return {
        op: cU,
        level: UU.getFloat64(XU + 4, !0),
        durationMs: Number.isNaN(oU) ? null : oU,
        name: FU(NU.Jd.HEAD_BYTES, yU),
        icon: FU(AU, QU)
      }
    }

    function dU(UU, XU, zU) {
      return new IU.c(`event ${UU} at ${XU} of ${zU} bytes`)
    }
    var LU = zU(7056),
      eU = zU(344),
      CU = zU(1236),
      wU = zU(40007),
      qU = zU(39858),
      OU = zU(2023),
      SU = zU(42121),
      rU = zU(1974),
      uU = zU(40032),
      fU = zU(40060),
      iU = zU(40048),
      HU = zU(41685),
      MU = zU(2588),
      vU = zU(40023),
      VU = zU(40058);

    function sU(UU) {
      if (!(0, VU.g)(UU)) return null;
      const XU = Number(UU);
      return (0 | XU) === XU ? XU : null
    }
    class nU {
      constructor(UU) {
        this.api = UU, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, vU.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.FX = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = pU.ad, this.localName = String(pU.ad)
      }
      readView() {
        this.defaultPoseRead = !1, this.FX = null;
        const UU = this.api.queries.directorView() >= pU.Ab.BYTES ? this.api.scratchData(pU.Ab.BYTES, "the director's view") : null;
        null !== UU && (this.defaultFov = (0, rU.D)(pU.Ab.fov(UU, 0)), this.baseFov = (0, rU.D)(pU.Ab.baseFov(UU, 0)), this.aspect = pU.Ab.aspect(UU, 0), this.bodyHeading = pU.Ab.bodyHeading(UU, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(UU) {
        this.viewHeading = UU
      }
      get localPlayerId() {
        const UU = pU.w.localId(this.api.apiView, 0);
        return UU !== this.localId && (this.localId = UU, this.localName = String(UU)), this.localName
      }
      getEntityPosition(UU) {
        return this.readEntity(UU) ? this.entityFeet : null
      }
      getEntityAimPoint(UU) {
        return this.readEntity(UU) ? this.entityAim : null
      }
      getEntityHeading(UU) {
        const XU = sU(UU);
        if (null === XU) return null;
        const zU = pU.w.localId(this.api.apiView, 0);
        return XU === zU && zU !== pU.ad ? this.viewHeading : this.readEntity(UU) ? this.entityHeading : null
      }
      getEntityPitch(UU) {
        return this.readEntity(UU) ? this.entityPitch : null
      }
      getEntityLookHeading(UU) {
        return this.readEntity(UU) ? this.entityLookHeading : null
      }
      raycastTerrain(UU, XU, zU) {
        const cU = this.api.queries.cameraSweep(UU[0], UU[1], UU[2], XU[0], XU[1], XU[2], zU);
        return cU < zU - 1e-6 ? cU : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const UU = this.defaultPose;
        UU.fov = this.defaultFov;
        const XU = this.api.queries.directorDefaultPose() >= pU.sb.BYTES ? this.api.scratchData(pU.sb.BYTES, "the director's default pose") : null;
        if (null === XU) return UU;
        for (let zU = 0; zU < 3; zU++) UU.position[zU] = pU.sb.eye(XU, 0, zU);
        return UU.heading = pU.sb.heading(XU, 0), UU.pitch = pU.sb.pitch(XU, 0), UU
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
      readEntity(UU) {
        const XU = sU(UU);
        if (null === XU) return !1;
        if (XU === this.FX) return this.entityLive;
        this.FX = XU;
        const zU = this.api.queries.directorEntity(XU) >= pU.wb.BYTES ? this.api.scratchData(pU.wb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== zU, null === zU) return !1;
        for (let QU = 0; QU < 3; QU++) this.entityFeet[QU] = pU.wb.feet(zU, 0, QU), this.entityAim[QU] = this.entityFeet[QU];
        this.entityAim[1] += pU.wb.eyeHeight(zU, 0), this.entityHeading = pU.wb.heading(zU, 0);
        const cU = pU.wb.pitch(zU, 0);
        this.entityPitch = Number.isNaN(cU) ? null : cU;
        const yU = pU.wb.lookHeading(zU, 0);
        return this.entityLookHeading = Number.isNaN(yU) ? null : yU, !0
      }
    }
    const mU = {
        mode: "default"
      },
      lU = {
        show: () => {},
        clear: () => {}
      };

    function xU() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class JU {
      constructor(UU) {
        this.options = UU, this.qY = void 0, this.director = void 0, this.latest = mU, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          zq: 0,
          Qq: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Ut = new Int32Array(3 * pU.Xd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * pU.Xd), this.qY = new nU(UU.api), this.director = new iU.e(this.qY)
      }
      settingsChanged(UU) {
        let XU = mU;
        if (UU.length > 0) try {
          XU = (0, HU.d)(UU)
        } catch {}
        this.latest = XU, this.pending = XU
      }
      call(UU, XU, zU, cU, yU, QU) {
        var AU, FU;
        let oU;
        this.holding = !1;
        try {
          oU = this.answer(UU, XU, zU, cU, yU, QU)
        } catch (NU) {
          var DU, EU;
          throw this.answeredPose = !1, null === (DU = (EU = this.options).showFacing) || void 0 === DU || DU.call(EU, null), NU
        }
        const YU = this.answeredPose && 0 === (cU & pU.zb.Held);
        return this.answeredPose = oU !== pU.qb.None, this.holding = this.answeredPose && !YU, null === (AU = (FU = this.options).showFacing) || void 0 === AU || AU.call(FU, this.holding ? this.facing : null), oU
      }
      holdsView() {
        return this.holding
      }
      answer(UU, XU, zU, cU, yU, QU) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          qY: AU
        } = this;
        AU.readView();
        if (0 !== (cU & pU.zb.Held) || AU.setViewHeading((0, uU.z)(AU.bodyHeading)), void 0 !== this.pending) {
          const UU = this.pending;
          this.pending = void 0, this.director.setSettings(UU), this.syncShownSettings()
        }
        this.readLook((0, MU.f)(XU), (0, MU.f)(zU), cU, (0, MU.f)(yU), (0, MU.f)(QU));
        const FU = this.director.update(UU / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !FU) return pU.qb.None;
        const [oU, DU, EU] = FU.position;
        if (0 === this.options.api.queries.directorPose(oU, DU, EU, (0, uU.z)(FU.heading), (0, uU.j)(FU.pitch), (0, rU.l)(FU.fov))) return pU.qb.None;
        if ("default" === this.director.getSettings().mode) return pU.qb.Pose;
        switch (this.facing) {
          case "camera":
            return pU.qb.FaceCamera;
          case "cursor":
            return pU.qb.FaceCursor;
          default:
            return pU.qb.FaceMovement
        }
      }
      afterFrame(UU) {
        UU ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = mU, this.idle()
      }
      restart() {
        const UU = this.holding;
        this.idle(), this.holding = UU
      }
      idle() {
        var UU, XU;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new iU.e(this.qY), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (UU = (XU = this.options).showFacing) || void 0 === UU || UU.call(XU, null), this.setCentres(0)
      }
      syncShownSettings() {
        const UU = this.director.getSettings();
        if (UU === this.shownSettings) return;
        this.shownSettings = UU;
        const XU = (0, fU.d)(UU);
        this.facing = XU.facing, this.mouseTurns = XU.mouseTurns
      }
      readLook(UU, XU, zU, cU, yU) {
        const QU = this.look,
          AU = 0 !== (zU & pU.zb.LookPointed);
        if (null === this.mouseTurns && !AU) return QU.zq = 0, QU.Qq = 0, void(QU.pointedAt = void 0);
        let FU;
        AU && (this.pointedAt.heading = cU, this.pointedAt.pitch = yU, FU = this.pointedAt);
        const {
          qY: oU
        } = this;
        oU.setViewHeading((0, fU.b)(oU.getViewHeading(), UU, XU, FU, "look" === this.mouseTurns, QU))
      }
      writeCentres(UU) {
        const XU = this.next,
          zU = Math.min(UU.length, pU.Xd);
        for (let cU = 0; cU < zU; cU++)
          for (let zU = 0; zU < 3; zU++) XU[3 * cU + zU] = Math.floor(UU[cU][zU] / pU.E);
        this.setCentres(zU)
      }
      setCentres(UU) {
        const {
          Ut: XU,
          next: zU
        } = this;
        let cU = UU === this.centresLen;
        for (let yU = 0; cU && yU < 3 * UU; yU++) cU = XU[yU] === zU[yU];
        cU || (XU.fill(0), XU.set(zU.subarray(0, 3 * UU)), this.centresLen = UU, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const UU = this.options.cmd();
        null !== UU && (0, pU.Mf)(UU, 0, this.Ut, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var UU, XU, zU;
        return null !== (UU = null === (XU = (zU = this.options).screen) || void 0 === XU ? void 0 : XU.call(zU)) && void 0 !== UU ? UU : lU
      }
      hidden() {
        var UU;
        return (null !== (UU = this.options.isPageHidden) && void 0 !== UU ? UU : xU)()
      }
      now() {
        var UU, XU, zU;
        return null !== (UU = null === (XU = (zU = this.options).now) || void 0 === XU ? void 0 : XU.call(zU)) && void 0 !== UU ? UU : performance.now()
      }
    }
    var jU = zU(39936),
      KU = zU(41867);
    const bU = pU.E * pU.E * pU.E,
      TU = Math.log2(pU.E),
      hU = pU.E - 1,
      UX = 65535,
      XX = pU.U.BYTES / 4,
      zX = new Uint16Array(bU);

    function cX(UU, XU, zU) {
      return UU * pU.E * pU.E + XU * pU.E + zU
    }
    class yX {
      constructor(UU) {
        this.chunk = UU
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(UU, XU, zU) {
        return cX(UU, XU, zU)
      }
    }
    class QX {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class AX {
      constructor(UU, XU, zU, cU) {
        this.table = UU, this.slot = XU, this.generation = zU, this.epoch = cU, this.lN = new yX(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = zX, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Kp() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get MI() {
        const UU = this.gameVoxels(),
          XU = this.layers ??= new Uint16Array(pU.E);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let zU = 0; 0 !== this.staleLayers; zU++) {
          const cU = 1 << zU;
          0 !== (this.staleLayers & cU) && (this.staleLayers &= ~cU, XU[zU] = FX(UU, zU))
        }
        return XU
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const UU = this.voxelData(),
          XU = this.writes;
        if (null === XU || 0 === XU.ids.size) return UU;
        if (XU.from !== UU) {
          const zU = XU.patched ??= new Uint16Array(bU);
          zU.set(UU);
          for (const [UU, cU] of XU.ids) zU[UU] = cU;
          XU.from = UU
        }
        return XU.patched
      }
      written(UU) {
        var XU;
        return null === (XU = this.writes) || void 0 === XU ? void 0 : XU.ids.get(UU)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(UU, XU, zU) {
        const cU = this.writes ??= new QX;
        cU.ids.set(UU, XU), zU && cU.cleared.add(UU), null !== cU.from && (cU.patched[UU] = XU);
        const yU = 1 << (UU >> TU & hU);
        cU.layers |= yU, this.staleLayers |= yU, this.writeCount++
      }
      clearWrites() {
        const UU = this.writes;
        null !== UU && (this.staleLayers |= UU.layers, UU.ids.clear(), UU.cleared.clear(), UU.layers = 0, UU.from = null)
      }
      dataCleared(UU) {
        var XU;
        return !0 === (null === (XU = this.writes) || void 0 === XU ? void 0 : XU.cleared.has(UU))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const UU = this.table.slotWords(),
          XU = this.slot * XX;
        if (this.epoch !== this.table.epoch || XU + XX > UU.length || 0 === UU[XU + 3] || UU[XU + 2] !== this.generation) return this.data = zX, this.dataPtr = 0, zX;
        this.version = UU[XU + 1];
        const zU = UU[XU + 0],
          cU = UU.buffer;
        return zU === this.dataPtr && cU === this.dataBuffer || (this.dataPtr = zU, this.dataBuffer = cU, this.data = this.table.voxelsAt(cU, zU)), this.data
      }
    }

    function FX(UU, XU) {
      const zU = UU[XU * pU.E];
      for (let cU = 0; cU < pU.E; cU++) {
        const yU = cX(cU, XU, 0);
        for (let XU = 0; XU < pU.E; XU++)
          if (UU[yU + XU] !== zU) return UX
      }
      return zU
    }
    const oX = new Uint32Array(0);

    function DX(UU, XU, zU) {
      return cX(UU & hU, XU & hU, zU & hU)
    }
    class EX {
      constructor(UU, XU) {
        this.memory = UU, this.apiView = XU, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = oX, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = oX, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(UU, XU, zU, cU, yU, QU) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, QU === pU.X.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (QU !== pU.X.Stored && QU !== pU.X.Unloaded) throw new IU.c(`ChunkSlot flags ${QU}`);
        const AU = (0, KU.b)(UU, XU, zU);
        if (AU < 0) return;
        if (QU === pU.X.Unloaded) return void this.chunks.delete(AU);
        const FU = this.chunks.get(AU);
        (null === FU || void 0 === FU ? void 0 : FU.slot) === cU && FU.generation === yU || this.chunks.set(AU, new AX(this, cU, yU, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const UU = this.apiView(),
          XU = pU.w.chunkSlotsPtr(UU, 0),
          zU = pU.w.chunkSlotsLen(UU, 0);
        XU === this.slotsPtr && zU === this.slotsLen || (this.slotsPtr = XU, this.slotsLen = zU, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const UU = this.apiView(),
          XU = pU.w.walkThroughPtr(UU, 0),
          zU = pU.w.walkThroughLen(UU, 0);
        XU === this.walkPtr && zU === this.walkLen || (this.walkPtr = XU, this.walkLen = zU, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const UU of this.written) UU.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const UU = this.memory().buffer;
        var XU;
        UU !== this.slotsBuffer && (this.slotsBuffer = UU, this.slots = null !== (XU = (0, IU.t)(Uint32Array, UU, this.slotsPtr, this.slotsLen * XX, "the chunk directory")) && void 0 !== XU ? XU : oX);
        return this.slots
      }
      voxelsAt(UU, XU) {
        try {
          var zU;
          return null !== (zU = (0, IU.t)(Uint16Array, UU, XU, bU, "a chunk's voxels")) && void 0 !== zU ? zU : zX
        } catch (cU) {
          if (!(cU instanceof IU.c)) throw cU;
          return this.corruption ??= cU, zX
        }
      }
      chunk(UU, XU, zU) {
        var cU;
        return null !== (cU = this.chunks.get((0, KU.b)(UU, XU, zU))) && void 0 !== cU ? cU : null
      }
      isLoaded(UU, XU, zU) {
        return void 0 !== this.chunkAt(Math.floor(UU), Math.floor(XU), Math.floor(zU))
      }
      yF(UU, XU, zU) {
        var cU;
        const yU = Math.floor(UU),
          QU = Math.floor(XU),
          AU = Math.floor(zU),
          FU = this.chunkAt(yU, QU, AU);
        if (!FU) return 0;
        const oU = DX(yU, QU, AU);
        return null !== (cU = FU.written(oU)) && void 0 !== cU ? cU : FU.voxelData()[oU]
      }
      setOverlay(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const QU = this.chunkAt(UU, XU, zU);
        return !!QU && (QU.hasWrites() || this.written.push(QU), QU.write(DX(UU, XU, zU), cU, yU), !0)
      }
      version(UU, XU, zU) {
        var cU, yU;
        return null !== (cU = null === (yU = this.chunks.get((0, KU.b)(UU, XU, zU))) || void 0 === yU ? void 0 : yU.Kp) && void 0 !== cU ? cU : null
      }
      scan(UU, XU, zU, cU, yU, QU, AU, FU) {
        const oU = pU.E;
        let DU = 0;
        for (let EU = Math.floor(XU / oU); EU * oU < yU; EU++) {
          const YU = EU * oU,
            NU = Math.min(yU - YU, oU);
          for (let yU = Math.floor(UU / oU); yU * oU < cU; yU++) {
            const IU = yU * oU,
              pU = Math.min(cU - IU, oU);
            for (let cU = Math.floor(zU / oU); cU * oU < QU; cU++) {
              const aU = this.chunks.get((0, KU.b)(yU, EU, cU));
              if (!aU) continue;
              const tU = cU * oU,
                gU = Math.max(zU - tU, 0),
                kU = Math.min(QU - tU, oU),
                GU = aU.MI,
                BU = aU.gameVoxels();
              for (let zU = Math.max(XU - YU, 0); zU < NU; zU++) {
                const XU = GU[zU];
                if (XU === UX || 0 !== AU[XU]) {
                  DU++;
                  for (let XU = Math.max(UU - IU, 0); XU < pU; XU++) {
                    const UU = cX(XU, zU, 0);
                    for (let cU = gU; cU < kU; cU++) {
                      const yU = BU[UU + cU];
                      0 !== AU[yU] && FU.push(IU + XU, YU + zU, tU + cU, yU)
                    }
                  }
                }
              }
            }
          }
        }
        return DU
      }
      columnTops(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        (0, jU.e)(((UU, XU, zU) => {
          var cU;
          return null !== (cU = this.chunks.get((0, KU.b)(UU, XU, zU))) && void 0 !== cU ? cU : null
        }), UX, UU, XU, zU, cU, yU, QU, AU, FU, oU)
      }
      dataCleared(UU, XU, zU) {
        var cU;
        const yU = Math.floor(UU),
          QU = Math.floor(XU),
          AU = Math.floor(zU);
        return !0 === (null === (cU = this.chunkAt(yU, QU, AU)) || void 0 === cU ? void 0 : cU.dataCleared(DX(yU, QU, AU)))
      }
      isWalkThrough(UU) {
        if (!Number.isInteger(UU) || UU < 0 || UU > 65535) return !1;
        const XU = this.walkWords(),
          zU = UU >>> 5;
        return zU < XU.length && 1 === (XU[zU] >>> (31 & UU) & 1)
      }
      walkWords() {
        const UU = this.memory().buffer;
        var XU;
        UU !== this.walkBuffer && (this.walkBuffer = UU, this.walk = null !== (XU = (0, IU.t)(Uint32Array, UU, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== XU ? XU : oX);
        return this.walk
      }
      chunkAt(UU, XU, zU) {
        if ((0 | UU) !== UU || (0 | XU) !== XU || (0 | zU) !== zU) return;
        const cU = (0, KU.b)(UU >> TU, XU >> TU, zU >> TU);
        return cU !== this.lastKey && (this.lastKey = cU, this.lastChunk = this.chunks.get(cU)), this.lastChunk
      }
    }
    var YX = zU(39293),
      NX = zU(38557),
      IX = zU(38981),
      pX = zU(37523),
      aX = zU(37345),
      tX = zU(34824),
      gX = zU(39942),
      kX = zU(212);
    const GX = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      BX = [
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
      ZX = BX.map((UU => {
        let [XU] = UU;
        return XU
      })),
      RX = Uint8Array.from(BX, (UU => {
        let [, XU] = UU;
        return XU
      })),
      PX = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      WX = 8,
      dX = [
        [20, 3],
        [23, 3],
        [26, 2],
        [30, 3],
        [57, 4],
        [83, 2],
        [86, 2],
        [115, 3],
        [125, 4],
        [129, 4],
        [137, 4],
        [192, 4],
        [196, 3],
        [199, 3],
        [202, 5],
        [219, 2],
        [221, 3],
        [224, 3],
        [227, 4],
        [284, 4],
        [289, 5],
        [295, 5],
        [300, 4],
        [304, 8],
        [319, 5],
        [324, 8],
        [332, 4],
        [344, 4],
        [354, 4],
        [358, 5],
        [363, 4],
        [367, 4],
        [371, 4],
        [375, 6],
        [381, 6],
        [387, 4],
        [392, 4],
        [397, 4],
        [401, 3],
        [404, 9],
        [434, 4]
      ];
    var LX = zU(37484),
      eX = zU(37495),
      CX = zU(37492),
      wX = zU(264);
    class qX {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wX.b;
        this.sound = UU, this.onError = XU, this.idle = zU, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = UU => {
          this.cancelIdle = null;
          try {
            if (UU.timeRemaining() >= 1) {
              let UU = this.queue.shift();
              for (; void 0 !== UU && !this.load(UU);) UU = this.queue.shift()
            }
          } catch (XU) {
            this.onError(XU)
          } finally {
            this.schedule()
          }
        }
      }
      preload(UU) {
        const XU = [...UU].sort(((UU, XU) => UU - XU));
        for (const zU of XU) this.asked.has(zU) || (this.asked.add(zU), this.queue.push(zU));
        this.schedule()
      }
      cancel() {
        var UU;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (UU = this.cancelIdle) || void 0 === UU || UU.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(UU) {
        const XU = this.sound(UU, !1),
          zU = this.sound(UU, !0),
          [cU, yU] = "unloaded" === XU.state() && "unloaded" !== zU.state() ? [zU, XU] : [XU, zU],
          QU = this.gen,
          AU = () => {
            try {
              QU === this.gen && "unloaded" === yU.state() && yU.load()
            } catch (UU) {
              this.onError(UU)
            }
          },
          FU = cU.state();
        return "unloaded" === FU ? (cU.once("load", AU), cU.load(), !0) : "unloaded" === yU.state() && ("loading" === FU ? (cU.once("load", AU), !1) : (yU.load(), !0))
      }
    }
    var OX = zU(41987);

    function SX(UU) {
      var XU;
      const zU = function(UU) {
        let XU = 0,
          zU = ZX.length;
        for (; XU < zU;) {
          const cU = XU + zU >>> 1;
          ZX[cU] < UU ? XU = cU + 1 : zU = cU
        }
        return XU
      }(UU);
      if ("" === UU || null === (XU = ZX[zU]) || void 0 === XU || !XU.startsWith(UU)) return null;
      if (ZX[zU] === UU) return [zU, 1];
      let cU = zU + 1;
      for (; cU < ZX.length && ZX[cU].startsWith(UU);) cU++;
      return [zU, cU - zU]
    }

    function rX(UU) {
      let [XU, zU] = UU, cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === zU ? XU : XU + Math.floor(cU() * zU)
    }

    function uX(UU) {
      for (const XU of dX)
        if (XU[0] <= UU && UU < XU[0] + XU[1]) return XU;
      return null
    }

    function fX(UU) {
      const XU = [];
      for (let zU = 0; zU < RX.length; zU++) RX[zU] === UU && XU.push(zU);
      return XU
    }
    const iX = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      HX = kX.f.cg * kX.f.playerEyeToHeightRatio,
      MX = [0, 0, -1, 0, 1, 0],
      vX = GX.indexOf("note");

    function VX(UU) {
      return UU >= 0 ? Math.min(1, UU) : 0
    }
    class sX {
      constructor(UU, XU, zU, cU, yU) {
        this.group = UU, this.loudness = XU, this.startMs = zU, this.howl = cU, this.host = yU, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const UU = this.host.alive(this.id);
        return UU ? 1e3 * this.howl.duration(this.id) / UU.rate : 0
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
    class nX {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          cU = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = UU, this.listener = XU, this.now = zU, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new CX.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: UU => this.aliveVoice(UU),
          started: UU => this.started.has(UU),
          drop: UU => {
            var XU;
            null === (XU = this.live.get(UU)) || void 0 === XU || XU.howl.stop(UU), this.forget(UU)
          }
        }, this.handlers = {
          playSound: (UU, XU, zU, cU, yU, QU, AU, FU, oU) => {
            if (cU >= ZX.length) return;
            const DU = 0 !== (yU & pU.ge.Loop);
            yU & pU.ge.TwoD ? this.start(cU, !1, AU, QU, FU, DU, uX(cU)) : this.startSpatial(cU, AU, QU, FU, DU, UU, XU, zU, oU, this.earDistSq(UU, XU, zU), uX(cU))
          },
          soundPos: (UU, XU, zU, cU) => {
            const yU = this.core.get(cU);
            var QU;
            void 0 !== yU && (null === (QU = this.live.get(yU)) || void 0 === QU || QU.howl.pos(zU, XU, UU, yU))
          },
          soundSet: (UU, XU, zU, cU) => {
            const yU = this.core.get(UU),
              QU = void 0 === yU ? void 0 : this.live.get(yU);
            void 0 !== yU && QU && (this.setRel(yU, XU), QU.rate = zU, QU.howl.rate(zU, yU), QU.spatial && QU.howl.pannerAttr({
              refDistance: cU
            }, yU))
          },
          soundFade: (UU, XU, zU, cU) => {
            const yU = this.core.get(UU);
            void 0 !== yU && this.fade(yU, XU, zU, 0 !== (cU & pU.de.StopAfter))
          },
          soundStop: UU => {
            const XU = this.core.get(UU);
            var zU;
            void 0 !== XU && (null === (zU = this.live.get(XU)) || void 0 === zU || zU.howl.stop(XU), this.forget(XU))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new qX(((UU, XU) => this.howl(UU, XU)), (UU => {
          this.errors++, console.error("Audio preload failed", UU)
        }), cU)
      }
      preload(UU) {
        this.loader.preload(UU)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let UU = 0; UU < ZX.length; UU++) {
          if (eX.d.has(GX[RX[UU]])) continue;
          const XU = [];
          for (const zU of [!1, !0]) {
            const cU = mX(UU, zU),
              yU = this.howls.get(cU);
            void 0 !== yU && "loading" !== yU.state() && XU.push({
              key: cU,
              howl: yU
            })
          }
          if (XU.some((UU => {
              let {
                howl: XU
              } = UU;
              return "loaded" === XU.state()
            })))
            for (const {
                key: UU,
                howl: zU
              }
              of XU) this.howls.delete(UU), "loaded" === zU.state() ? (0, LX.h)(zU) : zU.unload()
        }
      }
      onAudioEvent(UU, XU, zU, cU) {
        if (UU < pU.p.PlaySound || UU > pU.p.SoundReset) return !1;
        try {
          return (0, pU.pe)(UU, XU, zU, cU, this.handlers)
        } catch (yU) {
          return this.errors++, console.error("Audio event failed", yU), !0
        }
      }
      applyListener(UU) {
        const XU = this.nextPose;
        for (let cU = 0; cU < 3; cU++) XU[2 - cU] = pU.z.listener(UU, 0, cU), XU[5 - cU] = pU.z.forward(UU, 0, cU), XU[8 - cU] = pU.z.up(UU, 0, cU);
        0 === XU[3] && 0 === XU[4] && 0 === XU[5] && XU.set(this.posed ? this.pose.subarray(3) : MX, 3);
        for (let cU = 0; cU < 9; cU++)
          if (!Number.isFinite(XU[cU])) return;
        const zU = this.pose;
        if (this.posed) {
          let UU = !0;
          for (let cU = 0; cU < 9 && UU; cU++) UU = XU[cU] === zU[cU];
          if (UU) return
        }
        this.listener.apply(XU) && (zU.set(XU), this.posed = !0)
      }
      playGame(UU, XU, zU, cU, yU, QU, AU) {
        const FU = SX(UU);
        if (null === FU) return OX.d;
        const oU = rX(FU),
          DU = FU[1] > 1 ? FU : null;
        if (!zU) {
          const {
            howl: UU,
            id: zU
          } = this.start(oU, !1, XU, 0, 1, AU, DU);
          return this.gameSound(UU, zU, !1)
        }
        const EU = zU[0],
          YU = zU[1] + HX,
          NU = zU[2];
        if (!Number.isFinite(EU) || !Number.isFinite(YU) || !Number.isFinite(NU)) return OX.d;
        let IU;
        if (cU) {
          const UU = EU - cU[0],
            XU = YU - cU[1],
            zU = NU - cU[2];
          if (IU = UU * UU + XU * XU + zU * zU, IU > yU * yU) return OX.d
        } else IU = this.earDistSq(EU, YU, NU);
        const pU = this.startSpatial(oU, XU, 0, 1, AU, EU, YU, NU, QU, IU, DU);
        return pU ? this.gameSound(pU.howl, pU.id, !0) : OX.d
      }
      setMaster(UU, XU) {
        this.level = VX(UU);
        const zU = XU ? this.level : 0;
        if (zU !== this.master) {
          this.master = zU;
          for (const [UU, XU] of this.live) XU.fadeMs = 0, XU.gain = XU.rel * this.master, XU.howl.volume(XU.gain, UU)
        }
      }
      stopCore() {
        for (const XU of [...this.core.values()]) {
          var UU;
          null === (UU = this.live.get(XU)) || void 0 === UU || UU.howl.stop(XU)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [UU, XU] of [...this.live]) XU.howl.stop(UU), this.forget(UU);
        this.core.clear()
      }
      gameSound(UU, XU, zU) {
        const cU = {
          stop: () => (this.live.has(XU) && UU.stop(XU), cU),
          fade: (UU, zU, yU) => {
            var QU, AU;
            const FU = this.level > 0 ? zU / this.level : zU > 0 && null !== (QU = null === (AU = this.live.get(XU)) || void 0 === AU ? void 0 : AU.rel) && void 0 !== QU ? QU : 0;
            return this.fade(XU, FU, yU, !1), cU
          },
          rate: zU => {
            const yU = this.live.get(XU);
            return yU && (yU.rate = function(UU) {
              return UU > 0 && UU < 1 / 0 ? UU : 1
            }(zU), UU.rate(yU.rate, XU)), cU
          },
          getVolume: () => {
            var UU, zU;
            return (null !== (UU = null === (zU = this.live.get(XU)) || void 0 === zU ? void 0 : zU.rel) && void 0 !== UU ? UU : 0) * this.level
          },
          getRelativeVolume: () => {
            var UU, zU;
            return null !== (UU = null === (zU = this.live.get(XU)) || void 0 === zU ? void 0 : zU.rel) && void 0 !== UU ? UU : 0
          },
          setRelativeVolume: UU => (this.setRel(XU, UU), cU),
          setPannerAttr: yU => {
            if (zU && this.live.has(XU)) {
              const zU = {
                ...iX,
                refDistance: pX.g
              };
              for (const [UU, XU] of Object.entries(yU)) "number" !== typeof XU && "string" !== typeof XU || (zU[UU] = XU);
              UU.pannerAttr({
                coneOuterAngle: zU.coneOuterAngle
              }, XU), UU.pannerAttr(zU, XU)
            }
            return cU
          },
          setPosition: yU => (zU && this.live.has(XU) && Number.isFinite(yU[0] + yU[1] + yU[2]) && UU.pos(yU[2], yU[1], yU[0], XU), cU)
        };
        return cU
      }
      startSpatial(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        const YU = this.howl(UU, !0);
        let NU = null;
        if (!yU) {
          if (this.failed.has(YU)) return null;
          const zU = RX[UU] === vX ? null : (0, CX.e)(ZX[UU]),
            cU = (0, CX.d)(VX(XU), Math.sqrt(DU), oU);
          if (NU = new sX(zU, cU, this.now(), YU, this.voiceHost), !this.voices.admit(NU)) return null
        }
        const IU = this.start(UU, !0, XU, zU, cU, yU, EU);
        return NU && (NU.id = IU.id, NU.direct = "loaded" === YU.state() && !YU._playLock), YU.pannerAttr({
          coneOuterAngle: 360
        }, IU.id), YU.pannerAttr({
          ...iX,
          refDistance: oU
        }, IU.id), YU.pos(FU, AU, QU, IU.id), IU
      }
      aliveVoice(UU) {
        const XU = this.live.get(UU);
        if (!XU) return;
        const zU = XU.howl._soundById(UU);
        if (zU && !zU._ended) return XU;
        this.forget(UU)
      }
      earDistSq(UU, XU, zU) {
        if (!this.posed) return 0;
        const cU = UU - this.pose[2],
          yU = XU - this.pose[1],
          QU = zU - this.pose[0];
        return cU * cU + yU * yU + QU * QU
      }
      start(UU, XU, zU, cU, yU, QU, AU) {
        const FU = VX(zU),
          oU = this.howl(UU, XU);
        "unloaded" === oU.state() && (oU.load(), null !== AU && this.loadPick(AU, XU));
        const DU = oU.play(LX.d),
          EU = FU * this.master;
        return oU.volume(EU, DU), this.live.set(DU, {
          howl: oU,
          rel: FU,
          gain: EU,
          fadeFrom: EU,
          fadeAt: 0,
          fadeMs: 0,
          rate: yU,
          handle: cU,
          spatial: XU,
          stopTimer: void 0
        }), 0 !== cU && this.core.set(cU, DU), 1 !== yU && oU.rate(yU, DU), QU && oU.loop(!0, DU), {
          howl: oU,
          id: DU
        }
      }
      loadPick(UU, XU) {
        let [zU, cU] = UU;
        for (let QU = zU; QU < zU + cU; QU++) {
          var yU;
          const UU = this.howl(QU, XU);
          "unloaded" === UU.state() && "loading" !== (null === (yU = this.howls.get(mX(QU, !XU))) || void 0 === yU ? void 0 : yU.state()) && UU.load()
        }
      }
      howl(UU, XU) {
        const zU = mX(UU, XU);
        let cU = this.howls.get(zU);
        if (!cU) {
          const yU = this.createHowl(ZX[UU], XU);
          yU.on("end", (UU => {
            yU.loop(UU) || this.forget(UU)
          })), yU.on("stop", (UU => {
            this.forget(UU)
          })), yU.on("play", (UU => {
            this.live.has(UU) && this.started.add(UU)
          })), yU.on("loaderror", (UU => {
            if ("loaded" !== yU.state()) {
              this.failed.add(yU);
              for (const [UU, XU] of this.live) XU.howl === yU && this.forget(UU)
            } else "number" === typeof UU && this.forget(UU)
          })), this.howls.set(zU, yU), cU = yU
        }
        return cU
      }
      setRel(UU, XU) {
        const zU = this.live.get(UU);
        zU && (lX(zU), zU.fadeMs = 0, zU.rel = VX(XU), zU.gain = zU.rel * this.master, zU.howl.volume(zU.gain, UU))
      }
      fade(UU, XU, zU, cU) {
        const yU = this.live.get(UU);
        if (!yU) return;
        lX(yU);
        const {
          howl: QU
        } = yU, AU = this.gainNow(yU);
        yU.rel = VX(XU), yU.gain = yU.rel * this.master;
        const FU = zU > 0 ? Math.min(zU, 65535) : 0,
          oU = 0 === FU || AU === yU.gain;
        yU.fadeMs = oU ? 0 : FU, oU ? QU.volume(yU.gain, UU) : (yU.fadeFrom = AU, yU.fadeAt = this.now(), QU.fade(AU, yU.gain, FU, UU)), cU && (oU ? QU.stop(UU) : yU.stopTimer = setTimeout((() => {
          yU.stopTimer = void 0, QU.stop(UU)
        }), FU))
      }
      gainNow(UU) {
        if (UU.fadeMs > 0) {
          const XU = (this.now() - UU.fadeAt) / UU.fadeMs;
          if (XU < 1) return UU.fadeFrom + (UU.gain - UU.fadeFrom) * Math.max(0, XU);
          UU.fadeMs = 0
        }
        return UU.gain
      }
      forget(UU) {
        this.started.delete(UU);
        const XU = this.live.get(UU);
        XU && (lX(XU), this.live.delete(UU), 0 !== XU.handle && this.core.get(XU.handle) === UU && this.core.delete(XU.handle))
      }
    }

    function mX(UU, XU) {
      return 2 * UU + (XU ? 1 : 0)
    }

    function lX(UU) {
      void 0 !== UU.stopTimer && (clearTimeout(UU.stopTimer), UU.stopTimer = void 0)
    }
    var xX = zU(41674),
      JX = zU(39948);
    class jX {
      constructor(UU, XU, zU, cU) {
        this.key = UU, this.model = XU, this.host = cU, this.xY = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.aQU = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.kp = !1, this.xY = Math.max(1, Math.ceil(zU)), this.records = new Float32Array(this.xY * YX.e), this.isDirty = new Uint8Array(this.xY), this.tail = new Uint8Array(this.xY * pU.yc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(cU.cmd())
      }
      setOrigin(UU, XU, zU) {
        this.origin[0] = UU, this.origin[1] = XU, this.origin[2] = zU
      }
      markDirty(UU) {
        !this.kp && UU >= 0 && UU < this.xY && UU < pU.yc.Max && this.vp(UU, UU + 1)
      }
      commit(UU) {
        if (this.kp) return;
        (UU = Math.min(Math.max(Math.floor(UU), 0), this.xY, pU.yc.Max)) > this.count && this.vp(this.count, UU), this.count = UU;
        const {
          origin: XU,
          sentOrigin: zU,
          dirtyList: cU
        } = this, yU = this.aQU !== UU, QU = zU[0] !== XU[0] || zU[1] !== XU[1] || zU[2] !== XU[2];
        if (0 === cU.length && !yU && !QU) return;
        const AU = this.host.cmd();
        if (!AU || !this.make(AU)) return;
        const FU = cU.length,
          {
            records: oU,
            tailView: DU
          } = this;
        for (let EU = 0; EU < FU; EU++) {
          const UU = cU[EU],
            XU = UU * YX.e,
            zU = EU * pU.yc.Bytes,
            yU = 0 !== oU[XU + YX.h] ? pU.yc.Hidden : 0;
          DU.setUint32(zU, (UU | yU) >>> 0, !0), DU.setFloat32(zU + 4, oU[XU], !0), DU.setFloat32(zU + 8, oU[XU + 1], !0), DU.setFloat32(zU + 12, oU[XU + 2], !0)
        }
        if ((0, pU.Xe)(AU, 0, this.key, UU, XU, FU, this.tailOf(FU))) {
          for (let UU = 0; UU < FU; UU++) this.isDirty[cU[UU]] = 0;
          cU.length = 0, this.aQU = UU, zU[0] = XU[0], zU[1] = XU[1], zU[2] = XU[2]
        }
      }
      grow(UU) {
        (UU = Math.ceil(UU)) <= this.xY || this.kp || (this.records = (0, JX.e)(this.records, new Float32Array(UU * YX.e)), this.isDirty = (0, JX.e)(this.isDirty, new Uint8Array(UU)), this.tail = new Uint8Array(UU * pU.yc.Bytes), this.tailView = new DataView(this.tail.buffer), this.xY = UU)
      }
      dispose() {
        this.kp || (this.kp = !0, this.host.kp(this, this.made ? this.key : null))
      }
      make(UU) {
        if (!this.made && UU) {
          const {
            item: XU,
            scale: zU,
            yaw: cU
          } = this.model;
          this.made = (0, pU.Ze)(UU, 0, this.key, XU, zU, cU)
        }
        return this.made
      }
      tailOf(UU) {
        const XU = UU * pU.yc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === XU || (this.tailCut = this.tail.subarray(0, XU)), this.tailCut
      }
      vp(UU, XU) {
        const {
          dirtyList: zU,
          isDirty: cU
        } = this;
        for (let yU = UU; yU < XU; yU++) 0 === cU[yU] && (cU[yU] = 1, zU.push(yU))
      }
    }
    var KX = zU(638),
      bX = zU(45253);
    const TX = new TextEncoder,
      hX = new Uint8Array(0),
      Uz = [0, 0, 0];
    class Xz {
      constructor(UU, XU) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: UU,
          serverId: XU,
          owes: UU => {
            this.owing.add(UU)
          },
          settled: (UU, XU) => {
            this.owing.delete(UU), XU && this.live.delete(UU)
          }
        }
      }
      create(UU, XU) {
        return zU = UU, KX.o.includes(zU) ? this.add({
          lifeform: EU.h.indexOf(UU)
        }, XU) : null;
        var zU
      }
      createCosmetic(UU, XU) {
        const zU = bX.COSMETIC_MODEL_KEYS.get(UU);
        return void 0 === zU ? null : this.add({
          attachment: zU
        }, XU)
      }
      add(UU, XU) {
        const zU = new zz(++this.keys, UU, XU, this.host);
        return this.live.add(zU), zU
      }
      disposeAll() {
        for (const UU of [...this.live]) UU.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const UU = this.host.cmd();
        for (const XU of this.owing)
          if (!XU.sync(UU)) return
      }
    }
    class zz {
      constructor(UU, XU, zU, cU) {
        this.key = UU, this.source = XU, this.scale = zU, this.host = cU, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = hX, this.perch = null, this.owed = 1, this.kp = !1, this.sync()
      }
      setPose(UU, XU) {
        this.kp || (this.feet[0] = UU[0], this.feet[1] = UU[1], this.feet[2] = UU[2], this.yaw = XU, this.owed |= 2, this.sync())
      }
      setVisible(UU) {
        this.kp || UU === this.visible || (this.visible = UU, this.owed |= 4, this.sync())
      }
      setClip(UU) {
        this.kp || UU === this.clip || (this.clip = UU, this.clipBytes = null === UU ? hX : TX.encode(UU), this.owed |= 16, this.sync())
      }
      setPerch(UU) {
        this.kp || (this.perch = UU, this.owed |= 32, this.sync())
      }
      dispose() {
        this.kp || (this.kp = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(UU) ? (this.host.settled(this, this.kp), !0) : (this.host.owes(this), !1)
      }
      write(UU) {
        if (!UU) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, pU.ef)(UU, 0, this.key, this.source.lifeform, this.scale) : (0, pU.Be)(UU, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: XU,
          perch: zU
        } = this, cU = (2 & XU ? pU.Tc.Pose : 0) | (4 & XU ? pU.Tc.Visible : 0) | (16 & XU ? pU.Tc.Clip : 0) | (32 & XU ? pU.Tc.Perch : 0);
        if (0 !== cU) {
          var yU, QU;
          if (!(0, pU.af)(UU, 0, this.key, cU, this.visible ? 1 : 0, zU ? 1 : 0, this.feet, this.yaw, zU ? this.host.serverId(zU.FX) : 0, null !== (yU = null === zU || void 0 === zU ? void 0 : zU.offset) && void 0 !== yU ? yU : Uz, null !== (QU = null === zU || void 0 === zU ? void 0 : zU.yaw) && void 0 !== QU ? QU : 0, 16 & XU ? this.clipBytes : hX)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, pU._e)(UU, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var cz = zU(42102);

    function yz(UU, XU, zU, cU) {
      return (0, cz.e)(), (0, pU.Nf)(UU, XU, zU, cU)
    }
    var Qz = zU(39969),
      Az = zU(41667),
      Fz = zU(42112);
    const oz = [0, 0, 0],
      Dz = [0, 0, 0],
      Ez = [0, 0, 0],
      Yz = [0, 0, 0],
      Nz = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Iz = [0, 0, 0],
      pz = [0, 0],
      az = [1, 1, 1],
      tz = 1 / 3;
    const gz = NX.f;

    function kz(UU) {
      const XU = NX.c[UU],
        zU = XU && NX.f[XU.mainMultiblock];
      return zU && {
        main: zU,
        x: XU.compX,
        y: XU.compY,
        z: XU.compZ
      }
    }

    function Gz(UU) {
      if (null === UU || void 0 === UU) return pU.ad;
      const XU = +UU;
      return Number.isInteger(XU) && XU >= -2147483648 && XU <= 2147483647 && String(XU) === String(UU) ? XU : pU.ad
    }

    function Bz(UU, XU, zU) {
      return (0, pU.Vf)(UU, 0, XU, null !== zU && void 0 !== zU ? zU : Number.NaN)
    }
    class Zz {
      constructor(UU) {
        this.deps = UU, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Qz.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (UU => {
          var XU, zU;
          null === (XU = (zU = this.deps).setLocalOptions) || void 0 === XU || XU.call(zU, UU)
        })), this.mobModels = new Xz((() => this.deps.cmd()), Gz), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          kp: (UU, XU) => {
            this.livePools.delete(UU), null !== XU && (this.owedFrees.push(XU), this.flushOwed())
          }
        }, this.api = UU.api, this.live = UU.live, this.chunks = UU.chunks, this.items = UU.items, this.tables = UU.tables
      }
      isLocal(UU) {
        return null !== UU && void 0 !== UU && +UU === this.api.localId
      }
      assertLocal(UU, XU) {
        if (!this.isLocal(UU)) throw new Error(`Attempted to ${XU} for a player that is not the local player`)
      }
      wG(UU) {
        const XU = this.api.wG(UU);
        if (!XU) throw new Error(`Entity ${UU} has no replicated position`);
        return XU
      }
      checkValid(UU) {
        return !!this.deps.isSessionLive() && (null === UU || void 0 === UU || this.api.checkValid(UU))
      }
      isAlive(UU) {
        return !1 !== this.api.isAlive(UU)
      }
      getItemStat(UU, XU, zU) {
        return this.isLocal(UU) || null !== UU && "Player" === this.api.getEntityType(UU) ? this.tables.getItemStat(XU, zU) : this.tables.getDefaultItemStat(XU, zU)
      }
      getClientOption(UU, XU) {
        return this.assertLocal(UU, "get a client option"), this.tables.getClientOption(XU)
      }
      openShop(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(UU, "open shop"), AU.k.UY("showShopFromServer", {
          toggle: XU,
          Hc: zU
        }, !0)
      }
      sendMessage(UU, XU, zU) {
        this.assertLocal(UU, "send a message");
        const cU = "string" === typeof XU ? [{
          str: XU,
          style: zU
        }] : XU;
        AU.k.UY("chat", {
          content: cU
        }, !0)
      }
      getEntityType(UU) {
        return this.api.getEntityType(UU)
      }
      getEntityName(UU) {
        const XU = Gz(UU);
        return XU === pU.ad ? void 0 : (0, xX.h)(this.api, XU)
      }
      hasEffect(UU, XU) {
        const zU = Gz(UU);
        return zU !== pU.ad && (0, xX.e)(this.api, zU, XU)
      }
      getMetaInfo(UU) {
        return this.tables.getMetaInfo(UU)
      }
      getPlayerDbId(UU) {
        return this.assertLocal(UU, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(UU, XU, zU) {
        if (!this.chunks.dataCleared(UU, XU, zU)) return (0, xX.c)(this.api, UU, XU, zU)
      }
      Jw(UU, XU, zU, cU) {
        this.setBlockId(UU, XU, zU, this.tables.getItemId(cU))
      }
      setOtherEntitySetting(UU, XU, zU, cU) {
        if (!this.isLocal(UU)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(pU.rd, zU)) throw new Error(`Unknown other-entity setting ${zU}`);
        const yU = pU.rd[zU],
          QU = Gz(XU);
        if (QU === pU.ad || !this.deps.beforeWrite()) return;
        const AU = (0, HU.e)(cU);
        if (AU.length > 16384) throw new Error(`The other-entity setting ${zU}'s value is over 16384 bytes`);
        const FU = this.api.memoryView(Uint8Array, this.api.scratch(), AU.length, "set_other_entity_setting's value");
        FU && (FU.set(AU), this.api.queries.setOtherEntitySetting(QU, yU, AU.length))
      }
      getPositionView(UU) {
        return this.live.position(+UU)
      }
      readDrawnPosition(UU, XU) {
        return this.api.readDrawnPosition(Gz(UU), XU)
      }
      getDrawnHeading(UU) {
        const XU = this.drawnEntity(UU);
        if (!XU) return null;
        if (1 === pU.wb.headingIsDrawn(XU, 0)) return pU.wb.heading(XU, 0);
        const zU = this.api.apiView;
        return this.isLocal(UU) && 0 === (pU.w.playerFlags(zU, 0) & pU.Od.FreeCam) ? pU.w.heading(zU, 0) : null
      }
      getDrawnEyeHeight(UU) {
        const XU = this.drawnEntity(UU),
          zU = XU ? pU.wb.eyeHeight(XU, 0) : 0;
        return zU > 0 ? zU : null
      }
      drawnEntity(UU) {
        const XU = Gz(UU);
        return XU === pU.ad || this.api.queries.directorEntity(XU) < pU.wb.BYTES ? null : this.api.scratchData(pU.wb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(UU) {
        const XU = Gz(UU);
        return XU !== pU.ad && 1 === this.api.queries.entityDrawn(XU)
      }
      getPlayerIds() {
        return Fz.d.ids()
      }
      getPlayerCosmetics(UU) {
        var XU;
        return null !== (XU = (0, Fz.g)(UU)) && void 0 !== XU ? XU : null
      }
      getLocalPlayerMovement() {
        const UU = pU.w.playerFlags(this.api.apiView, 0);
        return 0 === (UU & pU.Od.Replay) && this.api.readDrawnPosition(this.api.localId, Ez) ? {
          onGround: 0 !== (UU & pU.Od.OnGround),
          jumpHeld: 0 !== (UU & pU.Od.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, IX.x)(this.deps.localPhysicsType())
      }
      HzU(UU) {
        return this.isLocal(UU) ? this.items.uD() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var UU, XU;
        return "Gun" === (null === (UU = this.aliveHeld()) || void 0 === UU || null === (XU = UU.typeObj) || void 0 === XU ? void 0 : XU.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.uD()
      }
      isCrosshairShown() {
        var UU, XU;
        const zU = (0, aX.c)(cU.e.get("crosshairGameView"), cU.e.get("crosshairShownOverride"));
        if (null !== zU) return zU;
        const yU = null === (UU = this.aliveHeld()) || void 0 === UU ? void 0 : UU.typeObj,
          QU = "Gun" === (null === yU || void 0 === yU ? void 0 : yU.type),
          AU = QU || !0 === (null === yU || void 0 === yU ? void 0 : yU.showsAimingUi),
          FU = 0 === (pU.w.playerFlags(this.api.apiView, 0) & pU.Od.ZoomFirstPerson),
          oU = null !== (XU = this.tables.getClientOption("gunshotOrigin")) && void 0 !== XU ? XU : null;
        return (0, aX.h)({
          gun: QU,
          aimable: AU
        }, FU, (0, tX.e)(), oU)
      }
      setCrosshairShown(UU) {
        cU.e.set({
          crosshairShownOverride: UU
        })
      }
      getInventoryFreeSlotCount(UU) {
        return this.isLocal(UU) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(UU) {
        return this.isLocal(UU) ? this.items.selectedSlot : null
      }
      getItemSlot(UU, XU) {
        return this.isLocal(UU) ? this.items.slot(XU) : null
      }
      swapInventorySlots(UU, XU) {
        return this.items.swap(UU, XU)
      }
      isPlayerCrouching(UU) {
        if (this.isLocal(UU)) return 0 !== (pU.w.playerFlags(this.api.apiView, 0) & pU.Od.Crouching);
        const XU = Gz(UU);
        return XU !== pU.ad && 1 === this.api.queries.entityCrouching(XU)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (pU.w.playerFlags(this.api.apiView, 0) & pU.Od.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.gXU()
      }
      getActionRay() {
        const UU = this.api.apiView;
        for (let XU = 0; XU < 3; XU++) Nz.origin[XU] = pU.w.rXU(UU, 0, XU), Nz.direction[XU] = pU.w.actionDir(UU, 0, XU);
        return Nz
      }
      canModifyBlockAt(UU, XU, zU) {
        return 1 === this.api.queries.canModify(UU, XU, zU)
      }
      isSolidToPlayerBlockId(UU) {
        return this.tables.isSolidBlockId(UU) && !this.chunks.isWalkThrough(UU)
      }
      blockNameToBlockId(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(UU, XU)
      }
      blockIdToBlockName(UU) {
        return this.tables.nameOfId(UU)
      }
      AzU(UU, XU, zU, cU, yU) {
        return 1 === this.api.queries.terrainBlocked(cU, UU, XU, zU, Gz(null !== yU && void 0 !== yU ? yU : null))
      }
      getChunkVersion(UU, XU, zU) {
        return this.chunks.version(UU, XU, zU)
      }
      scanBlocks(UU, XU, zU, cU, yU, QU, AU, FU) {
        return this.chunks.scan(UU, XU, zU, cU, yU, QU, AU, FU)
      }
      readColumnTops(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        this.chunks.columnTops(UU, XU, zU, cU, yU, QU, AU, FU, oU)
      }
      isBlockInLoadedChunk(UU, XU, zU) {
        return this.chunks.isLoaded(UU, XU, zU)
      }
      getBlockId(UU, XU, zU) {
        return this.chunks.yF(UU, XU, zU)
      }
      playSound(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(UU)) return null;
        const AU = this.playSoundFrom(XU, zU, yU, QU);
        return 1 === cU ? AU : AU.rate(cU)
      }
      preloadSounds(UU) {
        var XU, zU;
        null === (XU = (zU = this.deps).preloadSounds) || void 0 === XU || XU.call(zU, UU)
      }
      playSoundFrom(UU, XU, zU, cU) {
        var yU, QU;
        const AU = this.deps.playSound;
        if (!AU) return OX.d;
        const FU = null === zU || void 0 === zU ? void 0 : zU.qy,
          oU = null !== (yU = null === zU || void 0 === zU ? void 0 : zU.maxHearDist) && void 0 !== yU ? yU : pX.f,
          DU = null !== (QU = null === zU || void 0 === zU ? void 0 : zU.refDistance) && void 0 !== QU ? QU : pX.g;
        let EU = null;
        if (Array.isArray(FU)) oz[0] = FU[0], oz[1] = FU[1], oz[2] = FU[2], EU = oz;
        else if (void 0 !== FU && null !== FU) {
          const UU = Gz(FU);
          if (!this.api.isLocal(UU)) {
            if (!this.api.readPosition(UU, oz)) return OX.d;
            EU = oz
          }
        }
        return AU(UU, XU, EU, EU && this.ear(), oU, DU, cU)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Dz)) Dz[1] += HX;
        else {
          const UU = this.api.apiView;
          if (0 === pU.w.viewProj(UU, 0, 3) && 0 === pU.w.viewProj(UU, 0, 7) && 0 === pU.w.viewProj(UU, 0, 11)) return null;
          for (let XU = 0; XU < 3; XU++) Dz[XU] = pU.w.eye(UU, 0, XU)
        }
        return Number.isFinite(Dz[0] + Dz[1] + Dz[2]) ? Dz : null
      }
      setBlockId(UU, XU, zU, cU) {
        if (!Number.isInteger(cU) || cU < 0 || cU > 65535) throw new Error(`Invalid block id ${cU}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(UU, XU, zU)) return;
        const yU = Math.floor(UU),
          QU = Math.floor(XU),
          AU = Math.floor(zU),
          FU = this.predictedCells(yU, QU, AU, cU);
        if (1 === this.api.queries.Jw(yU, QU, AU, cU)) {
          for (let UU = 0; UU < FU.length; UU += 5) this.chunks.setOverlay(FU[UU], FU[UU + 1], FU[UU + 2], FU[UU + 3], 1 === FU[UU + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(UU, XU) {
        return this.deps.particles.create(UU, XU)
      }
      playParticleEffect(UU) {
        this.deps.particles.playEffect(UU)
      }
      burstParticlePreset(UU, XU, zU) {
        this.deps.particles.burstPreset(UU, XU, zU)
      }
      createGameMesh(UU, XU, zU) {
        const cU = ++this.meshKeys,
          yU = this.deps.cmd();
        if (!yU) return cU;
        const {
          look: QU,
          colour: AU
        } = function(UU) {
          switch (UU.kind) {
            case void 0:
            case "flatEmissive":
              return UU.onTop ? {
                look: pU.dc.FlatOnTop,
                colour: [...UU.rgb, UU.alpha]
              } : UU.opaque ? {
                look: pU.dc.FlatOpaque,
                colour: [...UU.rgb, 1]
              } : {
                look: pU.dc.Flat,
                colour: [...UU.rgb, UU.alpha]
              };
            case "chevronPath":
              return {
                look: pU.dc.Chevrons, colour: [...(0, gX.d)(UU.colour), UU.alpha]
              };
            case "furnaceFire":
              return {
                look: pU.dc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(XU), FU = Math.floor(UU.positions.length / 3), oU = function(UU, XU) {
          const zU = Math.floor(UU.positions.length / 3),
            cU = UU.indices.length,
            yU = zU * (XU ? 5 : 3),
            QU = new Uint8Array(4 * (yU + cU)),
            AU = new DataView(QU.buffer);
          for (let DU = 0; DU < 3 * zU; DU++) AU.setFloat32(4 * DU, UU.positions[DU], !0);
          if (XU) {
            var FU;
            const XU = null !== (FU = UU.uvs) && void 0 !== FU ? FU : [];
            for (let UU = 0; UU < 2 * zU; UU++) {
              var oU;
              AU.setFloat32(4 * (3 * zU + UU), null !== (oU = XU[UU]) && void 0 !== oU ? oU : 0, !0)
            }
          }
          for (let DU = 0; DU < cU; DU++) AU.setUint32(4 * (yU + DU), UU.indices[DU], !0);
          return QU
        }(UU, (0, YX.l)(XU));
        return (0, pU.Ne)(yU, 0, cU, QU, AU, zU, FU, UU.indices.length, oU) && this.liveMeshes.add(cU), cU
      }
      setGameMesh(UU, XU) {
        var zU;
        const cU = this.deps.cmd();
        if (!cU) return;
        let yU = 0;
        XU.anchor && (yU |= pU.fc.Anchor, Iz[0] = XU.anchor[0], Iz[1] = XU.anchor[1], Iz[2] = XU.anchor[2]), void 0 !== XU.visible && (yU |= pU.fc.Visible), XU.uvOffset && (yU |= pU.fc.UvOffset, pz[0] = XU.uvOffset[0], pz[1] = XU.uvOffset[1]);
        const QU = null !== (zU = XU.visibility) && void 0 !== zU ? zU : 1;
        void 0 !== XU.visibility && (yU |= pU.fc.Visibility), XU.scale && (yU |= pU.fc.Scale, az[0] = XU.scale[0], az[1] = XU.scale[1], az[2] = XU.scale[2]), 0 !== yU && (0, pU.Qe)(cU, 0, UU, yU, XU.visible ? 1 : 0, Iz, pz, QU, az)
      }
      disposeGameMesh(UU) {
        const XU = this.deps.cmd();
        XU && !(0, pU.Pe)(XU, 0, UU) || this.liveMeshes.delete(UU)
      }
      hasPackModel(UU) {
        var XU, zU, cU;
        return null !== (XU = null === (zU = (cU = this.deps).hasPackModel) || void 0 === zU ? void 0 : zU.call(cU, UU)) && void 0 !== XU && XU
      }
      disposeGameOutput() {
        const UU = UU => {
          try {
            UU()
          } catch (XU) {
            console.error("Error freeing client game output", XU)
          }
        };
        for (const XU of [...this.liveMeshes]) UU((() => {
          this.disposeGameMesh(XU)
        }));
        for (const XU of [...this.livePools]) UU((() => {
          XU.dispose()
        }));
        UU((() => {
          this.mobModels.disposeAll()
        })), UU((() => {
          this.setGroundArrowStyle(null)
        })), UU((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), UU((() => {
          this.setCrosshairShown(null)
        })), UU((() => {
          this.cameraTurn.dispose()
        })), UU((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(UU, XU) {
        const zU = this.tables.idOf(UU.item);
        if (void 0 === zU) return null;
        const cU = new jX(++this.poolKeys, {
          item: zU,
          scale: UU.scale,
          yaw: UU.yaw
        }, XU, this.poolHost);
        return this.livePools.add(cU), cU
      }
      createMobModel(UU, XU) {
        return this.mobModels.create(UU, XU)
      }
      createCosmeticModel(UU, XU) {
        return this.mobModels.createCosmetic(UU, XU)
      }
      setRouteChevrons(UU) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !UU || 0 === UU.cells.length) return;
        const XU = `${UU.colour} ${UU.alpha}`;
        XU !== this.routeLook && (this.routeLook = XU, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(UU) {
          const [XU, zU, cU] = UU[0].pos, yU = [], QU = [], AU = [];
          return UU.forEach(((UU, FU) => {
            let {
              pos: oU,
              way: [DU, EU]
            } = UU;
            const YU = oU[0] - XU + .5,
              NU = oU[1] - zU + .04,
              IU = oU[2] - cU + .5,
              [pU, aU] = [.35 * -EU, .35 * DU],
              [tU, gU] = [FU * tz, (FU + 1) * tz],
              kU = yU.length / 3;
            yU.push(YU - .5 * DU + pU, NU, IU - .5 * EU + aU), yU.push(YU - .5 * DU - pU, NU, IU - .5 * EU - aU), yU.push(YU + .5 * DU + pU, NU, IU + .5 * EU + aU), yU.push(YU + .5 * DU - pU, NU, IU + .5 * EU - aU), QU.push(0, tU, 1, tU, 0, gU, 1, gU), AU.push(kU, kU + 1, kU + 2, kU + 1, kU + 3, kU + 2)
          })), {
            positions: yU,
            uvs: QU,
            indices: AU
          }
        }(UU.cells), {
          kind: "chevronPath",
          colour: UU.colour,
          alpha: UU.alpha
        }, UU.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(UU) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(UU, 250) / 1e3 * 1.2 * tz) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(UU) {
        this.pendingStyle = UU, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const UU = this.owedFrees;
        if (0 === UU.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const XU = this.deps.cmd();
        if (!XU) return UU.length = 0, void(this.pendingFar = void 0);
        let zU = 0;
        for (; zU < UU.length && (0, pU.Ye)(XU, 0, UU[zU]);) zU++;
        UU.splice(0, zU);
        const cU = this.pendingStyle;
        if (void 0 !== cU) {
          (cU ? (0, pU.Xf)(XU, 0, cU.width, cU.alpha, 1, cU.endAtSolidFace ? 1 : 0) : (0, pU.Xf)(XU, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const yU = this.pendingFar;
        void 0 !== yU && (0, pU.Uf)(XU, 0, null !== yU && void 0 !== yU ? yU : 0, null === yU ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(UU, XU) {
        const zU = this.deps.cmd(),
          cU = Gz(UU);
        zU && cU !== pU.ad && (0, pU.$f)(zU, 0, cU, XU)
      }
      setFacingTolerance(UU, XU) {
        const zU = this.deps.cmd(),
          cU = Gz(UU);
        zU && cU !== pU.ad && Bz(zU, cU, XU)
      }
      forEachEntity(UU) {
        const {
          api: XU
        } = this;
        for (let zU = 0; zU < XU.idStr.length; zU++) {
          const cU = XU.idStr[zU];
          null === cU || ZU(XU.kinds[zU]) || UU(cU)
        }
      }
      getEntityInfo(UU) {
        return this.deps.entityInfo.get(UU)
      }
      isEntityInteractable(UU) {
        const XU = Gz(UU);
        return XU !== pU.ad && 1 === this.api.queries.entityInteractable(XU)
      }
      isLocalPlayer(UU) {
        return this.isLocal(UU)
      }
      getLineOwner(UU) {
        var XU;
        const zU = null === (XU = this.deps.entityInfo.get(UU)) || void 0 === XU ? void 0 : XU.meshOpts;
        if (!zU) return null;
        try {
          const {
            lineToEId: UU
          } = JSON.parse(zU);
          return null !== UU && void 0 !== UU ? UU : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const UU = this.api.apiView;
        return Yz[0] = pU.w.eye(UU, 0, 0), Yz[1] = pU.w.eye(UU, 0, 1), Yz[2] = pU.w.eye(UU, 0, 2), Yz
      }
      getCameraFar() {
        return pU.w.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(UU) {
        null !== UU && (this.farSet = !0), this.pendingFar = UU, this.flushOwed()
      }
      turnCamera(UU, XU) {
        this.cameraTurn.turn(UU, XU)
      }
      clearPickupDelay(UU) {
        const XU = this.deps.cmd(),
          zU = Gz(UU);
        XU && zU !== pU.ad && (0, pU.we)(XU, 0, zU)
      }
      sendChat(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = this.deps.sendCmd();
        return null !== zU && yz(zU, 0, Az.b.Chat, (0, HU.e)((0, Az.i)({
          TE: UU,
          hE: XU
        })))
      }
      sendCommand(UU) {
        UU.length <= 119 && this.sendChat(`/${UU}`)
      }
      predictedCells(UU, XU, zU, cU) {
        const yU = this.chunks,
          QU = [],
          AU = (UU, XU, zU, cU, yU) => {
            QU.push(UU, XU, zU, cU, this.tables.blockRootId(yU) === this.tables.blockRootId(cU) ? 0 : 1)
          },
          FU = yU.yF(UU, XU, zU),
          oU = kz(FU);
        if (oU) {
          const [cU, QU, DU] = [UU - oU.x, XU - oU.y, zU - oU.z], EU = gz[yU.yF(cU, QU, DU)], YU = null === EU || void 0 === EU ? void 0 : EU.positions.some((UU => UU.id === FU && UU.x === oU.x && UU.y === oU.y && UU.z === oU.z));
          for (const UU of (YU && EU ? EU : oU.main).positions) yU.yF(cU + UU.x, QU + UU.y, DU + UU.z) === UU.id && AU(cU + UU.x, QU + UU.y, DU + UU.z, 0, UU.id)
        }
        const DU = kz(cU);
        if (DU)
          for (const YU of DU.main.positions) {
            const [cU, QU, FU] = [UU + YU.x - DU.x, XU + YU.y - DU.y, zU + YU.z - DU.z];
            AU(cU, QU, FU, YU.id, yU.yF(cU, QU, FU))
          } else AU(UU, XU, zU, cU, FU);
        const EU = this.tables;
        if ((0 !== EU.attachedTopOf(FU) || 0 !== EU.attachedTopOf(cU)) && yU.isLoaded(UU, XU + 1, zU)) {
          let oU = yU.yF(UU, XU + 1, zU);
          for (let cU = 0; cU < QU.length; cU += 5) QU[cU] === UU && QU[cU + 1] === XU + 1 && QU[cU + 2] === zU && (oU = QU[cU + 3]);
          const DU = this.attachedTopWrite(FU, cU, oU);
          void 0 !== DU && AU(UU, XU + 1, zU, DU, oU)
        }
        return QU
      }
      attachedTopWrite(UU, XU, zU) {
        const cU = this.tables,
          yU = cU.attachedTopOf(UU),
          QU = cU.attachedTopOf(XU),
          AU = 0 !== yU && 0 !== zU && cU.blockRootId(zU) === cU.blockRootId(yU);
        return 0 !== yU && 0 !== QU && cU.blockRootId(UU) === cU.blockRootId(XU) ? AU && zU !== QU ? QU : void 0 : 0 === QU || !AU && 0 !== zU ? AU ? 0 : void 0 : QU
      }
    }
    const Rz = pU.sc + pU.wc * pU.Bc.BYTES,
      Pz = 2147483647,
      Wz = new TextDecoder,
      dz = new TextEncoder,
      Lz = Object.freeze({
        NA: 0,
        DE: null,
        amountAddedToSlot: 0
      }),
      ez = new Proxy({}, {
        get: () => () => pU.nd
      });

    function Cz(UU) {
      return Number.isInteger(UU) && UU >= 0 && UU <= 65535
    }

    function wz(UU) {
      return Number.isInteger(UU) && UU >= 0 && UU <= 4294967295
    }
    class qz {
      constructor(UU) {
        this.deps = UU, this.jU = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(pU.wc), this.ids = new Uint16Array(pU.wc), this.amounts = new Uint16Array(pU.wc), this.attrRead = new Float64Array(pU.wc).fill(-1), this.stale = new Uint16Array(pU.wc), this.staleVersion = new Uint32Array(pU.wc), this.instances = new Uint32Array(pU.wc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(UU) {
        var XU;
        return Number.isInteger(UU) && UU >= 0 && UU < this.len && 0 !== this.ids[UU] && null !== (XU = this.facades[UU]) && void 0 !== XU ? XU : null
      }
      uD() {
        return this.slot(this.selected)
      }
      playerItems() {
        const UU = [];
        for (let XU = 0; XU < Math.min(pU.yd, this.len); XU++) UU.push(this.slot(XU));
        return UU
      }
      freeSlots() {
        let UU = 0;
        for (let XU = 0; XU < Math.min(pU.yd - pU.g, this.len); XU++) 0 === this.ids[XU] && UU++;
        return UU
      }
      amountOf(UU) {
        let XU = 0;
        for (let cU = 0; cU < Math.min(pU.yd, this.len); cU++) {
          const yU = this.slot(cU);
          var zU;
          if ((null === yU || void 0 === yU ? void 0 : yU.name) === UU) XU += null !== (zU = yU.amount) && void 0 !== zU ? zU : 1
        }
        return XU
      }
      instance(UU) {
        var XU;
        return null !== (XU = this.instances[UU]) && void 0 !== XU ? XU : 0
      }
      watch(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      touch() {
        this.version++
      }
      flush(UU) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const zU of [...this.listeners]) try {
            zU()
          } catch (XU) {
            UU(XU)
          }
        }
      }
      chestOpened(UU, XU, zU) {
        this.jU[0] = UU, this.jU[1] = XU, this.jU[2] = zU, this.version++
      }
      refresh() {
        const UU = this.deps.api.apiView,
          XU = pU.w.inventoryViewPtr(UU, 0),
          zU = pU.w.inventoryVersion(UU, 0),
          cU = pU.w.selectedSlot(UU, 0);
        cU !== this.selected && (this.selected = cU, this.version++);
        const yU = pU.w.slotIcon(UU, 0);
        if (yU !== this.slotIconId && (this.slotIconId = yU, this.iconChanged = !0), XU === this.viewPtr && zU === this.viewVersion) return;
        this.viewPtr = XU, this.viewVersion = zU;
        const QU = this.deps.api.memoryData(XU, Rz, 4, "the inventory view"),
          AU = QU ? Math.min(QU.getUint32(0, !0), pU.wc) : 0;
        AU !== this.len && (this.len = AU, this.version++);
        let FU = 0;
        for (let oU = 0; oU < pU.wc; oU++) {
          const UU = pU.sc + oU * pU.Bc.BYTES,
            XU = null !== QU && oU < AU ? pU.Bc.item(QU, UU) : 0;
          if (0 === XU || null === QU) {
            0 !== this.ids[oU] && (this.ids[oU] = 0, this.attrRead[oU] = -1, this.instances[oU]++, this.version++);
            continue
          }
          const zU = pU.Bc.amount(QU, UU),
            cU = pU.Bc.attrVersion(QU, UU);
          XU === this.ids[oU] && zU === this.amounts[oU] || this.fill(oU, XU, zU), cU !== this.attrRead[oU] && (this.stale[FU] = oU, this.staleVersion[FU] = cU, FU++)
        }
        FU > 0 && this.fetchAttributes(FU)
      }
      fill(UU, XU, zU) {
        const {
          tables: cU
        } = this.deps, yU = XU !== this.ids[UU];
        let QU = this.facades[UU];
        QU || (QU = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[UU] = QU), yU && (QU.name = cU.nameOfId(XU), QU.typeObj = cU.itemType(XU), QU.attributes = {
          customAttributes: {}
        }, this.attrRead[UU] = -1, this.instances[UU]++), QU.amount = 0 === zU ? null : zU, this.ids[UU] = XU, this.amounts[UU] = zU, this.version++
      }
      fetchAttributes(UU) {
        const {
          api: XU,
          onError: zU
        } = this.deps, cU = XU.memoryView(Uint16Array, XU.scratch(), UU, "item_attributes_batch's slots");
        if (!cU) return void this.markRead(UU);
        cU.set(this.stale.subarray(0, UU));
        const yU = XU.queries.itemAttributesBatch(UU),
          QU = 4294967295 === yU ? null : XU.memoryData(XU.scratch(), yU, 4, "item_attributes_batch's answer");
        if (!QU) return void this.markRead(UU);
        const AU = new Uint8Array(QU.buffer, QU.byteOffset, yU);
        for (let oU = 0; oU + 8 <= yU;) {
          const UU = QU.getUint16(oU, !0),
            XU = QU.getUint32(oU + 4, !0),
            cU = AU.subarray(oU + 8, oU + 8 + XU);
          oU += 8 + (0, NU.De)(XU);
          const yU = this.facades[UU];
          if (yU && 0 !== this.ids[UU] && 0 !== XU) {
            try {
              yU.attributes = JSON.parse(Wz.decode(cU))
            } catch (FU) {
              zU(FU)
            }
            this.version++
          }
        }
        this.markRead(UU)
      }
      markRead(UU) {
        for (let XU = 0; XU < UU; XU++) this.attrRead[this.stale[XU]] = this.staleVersion[XU]
      }
      swap(UU, XU) {
        return Cz(UU) && Cz(XU) && this.settle(this.queries().invSwap(UU, XU))
      }
      move(UU, XU, zU) {
        return Cz(UU) && Cz(XU) && wz(zU) && this.settle(this.queries().invMove(UU, XU, zU))
      }
      quickMove(UU, XU, zU, cU) {
        var yU, QU;
        if (!Cz(UU) || !Cz(XU) || !Cz(zU) || null !== cU && !wz(cU)) return null;
        const AU = this.queries().invQuickMove(UU, XU, zU, null === cU ? -1 : Math.min(cU, Pz)),
          FU = AU === pU.nd ? pU.Nb : null !== (yU = null === (QU = this.extras()) || void 0 === QU ? void 0 : QU[1]) && void 0 !== yU ? yU : pU.Nb;
        return this.settle(AU), FU === pU.Nb ? null : FU
      }
      remove(UU, XU, zU) {
        return Cz(UU) && wz(XU) && this.settle(this.queries().invRemove(UU, XU, zU ? 1 : 0))
      }
      selectSlot(UU) {
        return Cz(UU) && this.settle(this.queries().selectSlot(UU))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(UU, XU, zU) {
        if (!Cz(UU) || !Number.isInteger(XU)) return !1;
        const [cU, yU, QU] = zU;
        return this.settle(this.queries().invEnchant(UU, XU, Math.floor(cU), Math.floor(yU), Math.floor(QU)))
      }
      craft(UU, XU, zU) {
        let cU;
        try {
          cU = this.deps.tables.getItemId(UU)
        } catch {
          return Lz
        }
        if (!Cz(XU) || null !== zU && (Number.isNaN(zU) || zU < 0)) return Lz;
        const yU = null === zU || zU > Pz ? -1 : Math.floor(zU),
          QU = this.queries().craft(cU, XU, yU);
        let AU = Lz;
        const FU = QU === pU.nd ? null : this.extras();
        if (FU) {
          const [UU, XU, zU] = FU;
          AU = {
            NA: UU,
            DE: XU === pU.Nb ? null : XU,
            amountAddedToSlot: zU
          }
        }
        return this.settle(QU), AU
      }
      salvage(UU, XU, zU) {
        let cU;
        try {
          cU = this.deps.tables.getItemId(XU)
        } catch {
          return !1
        }
        return Cz(UU) && Number.isInteger(zU) && this.settle(this.queries().salvage(UU, cU, Math.max(Math.min(zU, Pz), -Pz)))
      }
      craftingView(UU, XU, zU) {
        var cU;
        if (this.stopped) return null;
        const {
          api: yU,
          onError: QU
        } = this.deps, AU = UU ? dz.encode(UU) : null;
        if (null !== AU) {
          if (AU.length > 1024) return QU(new Error(`The crafting station ${UU}'s name is over 1024 bytes`)), null;
          const XU = yU.memoryView(Uint8Array, yU.scratch(), AU.length, "crafting_view's station");
          if (!XU) return null;
          XU.set(AU)
        }
        const FU = Cz(XU) && Cz(zU),
          oU = yU.queries.craftingView(null !== (cU = null === AU || void 0 === AU ? void 0 : AU.length) && void 0 !== cU ? cU : 0, FU ? XU : 0, FU ? zU : 0);
        return oU < pU.mb.BYTES ? (yU.reportCorruption(`crafting_view's answer of ${oU} bytes`), null) : yU.memoryData(yU.scratch(), oU, 1, "crafting_view's answer")
      }
      queries() {
        var UU, XU;
        return !1 === (null === (UU = (XU = this.deps).beforeOp) || void 0 === UU ? void 0 : UU.call(XU)) ? (this.stopped = !0, ez) : this.deps.api.queries
      }
      extras() {
        const {
          api: UU
        } = this.deps;
        return UU.memoryView(Uint32Array, UU.scratch(), 3, "a sync query's extra words")
      }
      settle(UU) {
        if (UU === pU.kd)(0, cz.e)();
        else if (UU !== pU.nd) {
          const XU = this.deps.cmd();
          XU && function(UU, XU, zU) {
            return (0, cz.e)(), (0, pU.jg)(UU, XU, zU)
          }(XU, 0, UU) || this.deps.onError(new Error(`Sync op ${UU}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), UU !== pU.nd
      }
    }
    const Oz = 1 / .6,
      Sz = [0, 1, 0],
      rz = [0, 0, 0],
      uz = new Uint8Array(0),
      fz = 1.2 * kX.f.zg,
      iz = new TextEncoder,
      Hz = [0, 0, 0],
      Mz = [0, 0, 0],
      vz = new Map;

    function Vz(UU) {
      let XU = vz.get(UU);
      return XU || (vz.size >= 64 && vz.clear(), XU = iz.encode(`{"emitRate":${UU}}`), vz.set(UU, XU)), XU
    }

    function sz(UU) {
      return Number.isFinite(UU) && UU > 0 ? UU : 0
    }

    function nz(UU, XU) {
      for (let zU = 0; zU < 3; zU++) {
        const cU = Math.abs(XU[zU]);
        Hz[zU] = UU[zU] - cU, Mz[zU] = 2 * cU
      }
      return Number.isFinite(Hz[0] + Hz[1] + Hz[2] + Mz[0] + Mz[1] + Mz[2])
    }

    function mz(UU, XU) {
      return "pos1" === UU || "pos2" === UU ? void 0 : XU
    }

    function lz(UU, XU, zU) {
      return UU.length > pU.Ld.MaxOpts ? (zU(new Error(`${XU}'s particle opts are over ${pU.Ld.MaxOpts} bytes of JSON`)), null) : UU
    }
    const xz = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Jz {
      constructor(UU) {
        this.deps = UU, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(UU, XU) {
        var zU;
        const cU = this.sink(),
          yU = null !== (zU = XU.half) && void 0 !== zU ? zU : rz;
        if (!cU || this.live >= pU.Ld.MaxLiveKeys || this.nextKey > pU.Ld.MaxKey || !nz(XU.pos, yU)) return xz;
        const QU = this.nextKey,
          AU = lz(function(UU) {
            var XU, zU, cU;
            const yU = JSON.stringify({
              texture: "string" === typeof UU.texture ? UU.texture : "smokePuff",
              xY: UU.xY,
              minLifeTime: UU.minLifeTime,
              maxLifeTime: UU.maxLifeTime,
              minSize: UU.minSize,
              maxSize: UU.maxSize,
              minEmitPower: UU.minEmitPower,
              maxEmitPower: UU.maxEmitPower,
              emitRate: sz(UU.emitRate),
              gravity: null !== (XU = UU.gravity) && void 0 !== XU ? XU : rz,
              dir1: null !== (zU = UU.dir1) && void 0 !== zU ? zU : Sz,
              dir2: null !== (cU = UU.dir2) && void 0 !== cU ? cU : Sz,
              colorGradients: UU.colorGradients,
              blendMode: UU.blendMode
            });
            return iz.encode(yU)
          }(UU), "createParticles", this.deps.onError);
        return AU && (0, pU.nf)(cU, 0, QU, 0, pU.Ld.PresetNone, 0, Hz, Mz, AU) ? (this.nextKey++, this.live++, this.started = !0, new jz(this, this.session, QU, UU, yU)) : xz
      }
      playEffect(UU) {
        const XU = this.sink(),
          {
            pos1: zU,
            pos2: cU
          } = UU;
        if (!XU || !zU || !cU) return;
        for (let QU = 0; QU < 3; QU++) Hz[QU] = Math.min(zU[QU], cU[QU]), Mz[QU] = Math.abs(cU[QU] - zU[QU]);
        if (!Number.isFinite(Hz[0] + Hz[1] + Hz[2] + Mz[0] + Mz[1] + Mz[2])) return;
        const yU = lz(iz.encode(JSON.stringify(UU, mz)), "playParticleEffect", this.deps.onError);
        yU && (0, pU.kf)(XU, 0, 0, pU.Ld.PresetNone, pU.Ld.HasBox, 0, Hz, Mz, yU)
      }
      burstPreset(UU, XU, zU) {
        const cU = this.sink(),
          yU = Math.min(Math.floor(zU), pU.Ld.MaxBurst);
        if (!cU || !Object.hasOwn(pU.ic, UU) || !(yU > 0)) return;
        const QU = fz;
        for (let AU = 0; AU < 3; AU++) Hz[AU] = XU[AU] - QU / 2, Mz[AU] = QU;
        Number.isFinite(Hz[0] + Hz[1] + Hz[2]) && (0, pU.kf)(cU, 0, 0, pU.ic[UU], pU.Ld.HasBox, yU, Hz, Mz, uz)
      }
      sessionEnded() {
        this.session++;
        const UU = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !UU || (0, pU.qf)(UU, 0)
      }
      sinkFor(UU) {
        return UU === this.session ? this.deps.cmd() : null
      }
      stop(UU, XU) {
        const zU = this.sinkFor(UU);
        zU && (0, pU.uf)(zU, 0, XU) && this.live--
      }
    }
    class jz {
      constructor(UU, XU, zU, cU, yU) {
        this.owner = UU, this.session = XU, this.key = zU, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(yU[0]), Math.abs(yU[1]), Math.abs(yU[2])], this.rate = sz(cU.emitRate), this.emitted = this.rate > 0;
        const QU = cU.maxLifeTime * Oz * 1e3 + 250;
        this.stopDelayMs = QU >= 0 ? Math.min(QU, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(UU, XU) {
        const zU = this.sink();
        if (zU) {
          if (XU)
            for (let UU = 0; UU < 3; UU++) this.half[UU] = Math.abs(XU[UU]);
          nz(UU, this.half) && (0, pU.vf)(zU, 0, this.key, pU.Ld.HasBox, Hz, Mz, uz)
        }
      }
      setEmitRate(UU) {
        const XU = this.sink(),
          zU = sz(UU);
        XU && zU !== this.rate && (0, pU.vf)(XU, 0, this.key, 0, rz, rz, Vz(zU)) && (this.rate = zU, this.emitted ||= zU > 0)
      }
      emit(UU) {
        const XU = this.sink(),
          zU = Math.min(Math.floor(UU), pU.Ld.MaxBurst);
        XU && zU > 0 && (0, pU.kf)(XU, 0, this.key, pU.Ld.PresetNone, 0, zU, rz, rz, uz) && (this.emitted = !0)
      }
      emitPoints(UU, XU, zU) {
        const cU = this.sink(),
          yU = Math.min(Math.floor(zU), pU.Ld.MaxPoints, Math.floor(XU.length / 4));
        if (!cU || !(yU > 0) || !Number.isFinite(UU[0] + UU[1] + UU[2])) return;
        const QU = new Uint8Array(XU.buffer, XU.byteOffset, yU * pU.Ld.PointBytes);
        (0, pU.mf)(cU, 0, this.key, yU, UU, QU) && (this.emitted = !0)
      }
      setDirections(UU, XU) {
        const zU = this.sink();
        if (!zU || !Number.isFinite(UU[0] + UU[1] + UU[2] + XU[0] + XU[1] + XU[2])) return;
        const cU = iz.encode(JSON.stringify({
          dir1: [UU[0], UU[1], UU[2]],
          dir2: [XU[0], XU[1], XU[2]]
        }));
        (0, pU.vf)(zU, 0, this.key, 0, rz, rz, cU)
      }
      stop() {
        const UU = this.sink();
        this.stopped = !0, UU && (this.emitted ? (this.rate > 0 && (0, pU.vf)(UU, 0, this.key, 0, rz, rz, Vz(0)), setTimeout((() => {
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
    const Kz = KX.q,
      bz = new TextDecoder;

    function Tz(UU, XU) {
      const {
        serverIds: zU,
        kinds: cU
      } = UU;
      let yU = 0;
      for (let QU = 0; QU < zU.length; QU++) {
        const UU = zU[QU];
        if (UU !== pU.ad && !ZU(cU[QU])) {
          if (yU === XU.length) {
            const UU = new Int32Array(Math.max(64, 2 * yU));
            UU.set(XU), XU = UU
          }
          XU[yU++] = UU
        }
      }
      return {
        ids: XU,
        count: yU
      }
    }

    function hz(UU, XU) {
      return UU.length >= XU ? UU : new Int32Array(Math.max(XU, 2 * UU.length))
    }

    function Uc(UU, XU, zU, cU) {
      for (let yU = 0; yU < zU; yU += 4096) {
        const QU = Math.min(4096, zU - yU),
          AU = UU.memoryView(Int32Array, UU.scratch(), QU, "entity_info_batch's ids");
        if (!AU) return !1;
        AU.set(XU.subarray(yU, yU + QU));
        const FU = UU.queries.entityInfoBatch(QU),
          oU = 4294967295 === FU ? null : UU.memoryData(UU.scratch(), FU, 4, "entity_info_batch's records");
        if (!oU) return !1;
        for (let UU = 0; UU + pU.Yb.BYTES <= FU;) {
          const XU = pU.Yb.len(oU, UU);
          cU(pU.Yb.serverId(oU, UU), Xc(oU, UU, XU)), UU += pU.Yb.BYTES + (0, NU.De)(XU)
        }
      }
      return !0
    }

    function Xc(UU, XU, zU) {
      var cU, yU, QU;
      const AU = pU.Yb.kind(UU, XU),
        FU = 0 === AU ? null : RU(AU);
      if (null === FU) return null;
      const oU = pU.Yb.variation(UU, XU),
        DU = pU.Yb.pose(UU, XU),
        EU = pU.Yb.meta(UU, XU),
        YU = pU.Yb.mesh(UU, XU),
        NU = 0 !== (pU.Yb.flags(UU, XU) & pU.Vb.HasOpts),
        IU = Kz[FU];
      return Object.freeze({
        type: FU,
        variation: oU === pU.gd ? void 0 : null !== (cU = null !== (yU = null === IU || void 0 === IU ? void 0 : IU[oU]) && void 0 !== yU ? yU : null === IU || void 0 === IU ? void 0 : IU[0]) && void 0 !== cU ? cU : "default",
        pose: DU === pU.qc ? void 0 : null !== (QU = pU.Kb[DU]) && void 0 !== QU ? QU : pU.Kb[0],
        metaInfo: EU === pU.qc ? void 0 : pU.Sc[EU],
        meshKind: YU === pU.qc ? void 0 : pU.Rc[YU],
        meshOpts: NU ? bz.decode(new Uint8Array(UU.buffer, UU.byteOffset + XU + pU.Yb.BYTES, zU)) : void 0
      })
    }
    const zc = 1,
      cc = 2;
    class yc {
      constructor(UU) {
        this.deps = UU, this.wanted = 0, this.uD = !1, this.refused = !1
      }
      get on() {
        return this.uD
      }
      want(UU, XU) {
        this.wanted = XU ? this.wanted | UU : this.wanted & ~UU;
        const zU = 0 !== this.wanted;
        if (zU === this.uD) return;
        const cU = this.deps.cmd();
        null !== cU ? (0, pU.lg)(cU, 0, zU ? 1 : 0) ? (this.uD = zU, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.uD = !1
      }
    }
    class Qc {
      constructor(UU) {
        this.deps = UU, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(UU) {
        var XU;
        return this.complete || this.fill(), null !== (XU = this.entries.get("string" === typeof UU ? UU : String(UU))) && void 0 !== XU ? XU : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(UU) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const UU = new Int32Array(2 * this.pending.length);
            UU.set(this.pending), this.pending = UU
          }
          this.pending[this.pendingCount++] = UU
        }
      }
      removed(UU) {
        this.entries.size > 0 && this.entries.delete(String(UU))
      }
      refresh() {
        const UU = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (UU > 0 && this.complete) {
          const {
            api: XU
          } = this.deps;
          let zU = 0;
          const cU = this.ids = hz(this.ids, UU);
          for (let yU = 0; yU < UU; yU++) {
            const UU = this.pending[yU],
              QU = XU.indexById.get(UU);
            void 0 === QU || ZU(XU.kinds[QU]) ? this.entries.delete(String(UU)) : cU[zU++] = UU
          }
          zU > 0 && !this.batch(cU, zU) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(zc, !1)
      }
      fill() {
        const {
          api: UU
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: UU
          } = this.deps, XU = UU.on;
          UU.want(zc, !0), !XU && UU.on && (this.refill = this.midFrame)
        }
        const {
          ids: XU,
          count: zU
        } = Tz(UU, this.ids);
        this.ids = XU, zU > 0 && !this.batch(XU, zU) && (this.refill = !0)
      }
      batch(UU, XU) {
        return Uc(this.deps.api, UU, XU, ((UU, XU) => {
          null === XU ? this.entries.delete(String(UU)) : this.entries.set(String(UU), XU)
        }))
      }
    }
    var Ac = zU(5326);

    function Fc(UU) {
      if ("message" !== UU.type || UU.TE !== Ac.oc.NewClientOptions || UU.payloadKind !== NU.jc.Msgpack) return null;
      const XU = (0, HU.d)(UU.payload);
      if (null === XU || "object" !== typeof XU || Array.isArray(XU)) throw new Error("NewClientOptions whose body isn't an object of options");
      return XU
    }
    var oc = zU(1258),
      Dc = zU(37354);

    function Ec(UU, XU, zU, cU, yU, QU, FU) {
      var oU, DU, EU;
      switch (UU) {
        case pU.ke.ToggleMenu: {
          const UU = pU.L[XU];
          AU.k.UY("toggleMenu", void 0 === UU ? "inventory" : `inventory|${UU}`);
          break
        }
        case pU.ke.EditBoard:
          AU.k.UY("EditBoard", {
            pos: 0 === XU ? null : zU
          });
          break;
        case pU.ke.EditCodeBlock:
        case pU.ke.ViewCodeBlock:
          AU.k.UY("EditCodeBlock", {
            pos: zU,
            canChangePos: UU === pU.ke.EditCodeBlock
          });
          break;
        case pU.ke.EditCustomLobbyBlock:
          AU.k.UY("EditCustomLobbyBlock", {
            pos: zU
          });
          break;
        case pU.ke.OpenIronChest:
          AU.k.UY("OpenIronChest", {
            pos: zU
          });
          break;
        case pU.ke.EditNameTag:
          AU.k.UY("EditNameTag", null !== (oU = null === (DU = yU.uD()) || void 0 === DU || null === (EU = DU.attributes.customAttributes) || void 0 === EU ? void 0 : EU.text) && void 0 !== oU ? oU : "");
          break;
        case pU.ke.EditBook: {
          var YU, NU, aU;
          const UU = null === (YU = yU.uD()) || void 0 === YU ? void 0 : YU.attributes;
          AU.k.UY("EditBook", {
            pages: (0, oc.N)(null === UU || void 0 === UU || null === (NU = UU.customAttributes) || void 0 === NU ? void 0 : NU.pages),
            title: null !== (aU = null === UU || void 0 === UU ? void 0 : UU.customDisplayName) && void 0 !== aU ? aU : "Title",
            isPublished: !(null === UU || void 0 === UU || !UU.customDescription)
          });
          break
        }
        case pU.ke.CantChangeBlock:
          ! function(UU, XU) {
            const zU = XU.getClientOption("cantChangeError"),
              cU = XU.getClientOption(UU ? "cantBuildError" : "cantBreakError"),
              yU = UU ? zU : cU;
            (XU.getClientOption("canChange") || yU || "You cannot modify this block" !== zU) && AU.k.UY("showBottomMessage", {
              message: cU || zU,
              type: "Error"
            })
          }(1 === XU, QU);
          break;
        case pU.ke.MiddleBarStart:
          AU.k.UY("middleScreenBarInitiate", {
            duration: cU,
            vc: 1 === zU[0],
            horizBarRemOffset: XU
          });
          break;
        case pU.ke.MiddleBarStop:
          AU.k.UY("middleScreenBarRemove");
          break;
        case pU.ke.Hitmarker:
          AU.k.UY("localGunHitmarker", {
            yX: 1 === XU
          });
          break;
        case pU.ke.ShotsLeft:
          AU.k.UY("localPlayerNewShotsLeft", cU);
          break;
        case pU.ke.AimingOverlay:
          AU.k.UY("aimingOverlay", 3 === (3 & XU) ? "sniper" : "none");
          break;
        case pU.ke.BottomMessage:
          AU.k.UY("showBottomMessage", JSON.parse(FU()));
          break;
        case pU.ke.Crosshair:
          yU.inaccuracy = (0, MU.f)(cU), (0, Dc.c)().crosshairAccuracy(yU.inaccuracy);
          break;
        case pU.ke.ChargeStage:
          break;
        case pU.ke.EmoteWheelClose:
          AU.k.UY("requestEmoteWheelClose");
          break;
        case pU.ke.BlockMined:
          AU.k.UY("localBlockMined");
          break;
        default:
          throw new IU.c(`UiEvent of no kind: what ${UU}`)
      }
    }
    var Yc = zU(38743),
      Nc = zU(34875),
      Ic = zU(2044),
      pc = zU(37535),
      ac = zU(34884),
      tc = zU(5312);
    const gc = 10,
      kc = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      Gc = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Bc = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Zc(UU, XU) {
      let zU, cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const QU = () => (zU = (0, Ic.q)(zU, XU()), zU);
      return {
        current: QU,
        watch(XU) {
          const zU = () => {
              XU(QU())
            },
            AU = [UU.watch(zU)];
          return null !== cU && AU.push((0, Ic.s)((UU => {
            UU.some(cU) && zU()
          }))), null !== yU && AU.push(yU(zU)), () => {
            for (const UU of AU) UU()
          }
        }
      }
    }

    function Rc(UU) {
      return UU && {
        name: UU.name,
        amount: UU.amount,
        attributes: UU.attributes
      }
    }
    const Pc = new WeakMap;

    function Wc(UU) {
      let XU = Pc.get(UU);
      return void 0 === XU && (XU = (0, ac.creativeItemIds)().map((XU => ({
        name: UU.nameOfId(XU),
        amount: UU.isStackableId(XU) ? 1 : null,
        attributes: (0, Yc.e)("Gun" === (0, ac.itemTypeOf)(XU) ? {
          type: "Gun",
          clipSize: (0, ac.clipSizeOf)(XU)
        } : void 0)
      }))), Pc.set(UU, XU)), XU
    }

    function dc(UU, XU, zU, cU) {
      const yU = XU => (UU.flush(cU), XU),
        QU = zU => {
          var cU, yU, QU, AU, FU, oU, DU;
          const EU = UU.slot(zU);
          if (!EU) return null;
          const {
            rootName: YU,
            metaStr: NU
          } = XU.getMetaInfo(EU.name);
          return {
            name: EU.name,
            amount: EU.amount,
            attributes: EU.attributes,
            instance: UU.instance(zU),
            displayName: null !== (cU = EU.attributes.customDisplayName) && void 0 !== cU ? cU : XU.getDisplayName(YU),
            requiresAmmo: "RequiresAmmo" === NU,
            clipSize: null !== (yU = null !== (QU = null === (AU = EU.attributes.customAttributes) || void 0 === AU || null === (FU = AU.gunStats) || void 0 === FU ? void 0 : FU.clipSize) && void 0 !== QU ? QU : null === (oU = XU.getGunStats(YU)) || void 0 === oU ? void 0 : oU.clipSize) && void 0 !== yU ? yU : null === (DU = EU.typeObj) || void 0 === DU ? void 0 : DU.clipSize
          }
        },
        FU = function(UU, XU) {
          let zU = null,
            cU = {
              focus: null,
              recipes: [],
              detail: null
            },
            yU = -1;
          const QU = new Set;
          return {
            read() {
              var QU, AU;
              if (null === zU) return null !== cU.focus && (cU = {
                ...cU,
                focus: null
              }), cU;
              if (cU.focus === zU && yU === UU.changes) return cU;
              if (yU = UU.changes, 0 === UU.length) return cU = {
                focus: zU,
                recipes: [],
                detail: null
              }, cU;
              let FU = 0;
              if (null !== zU.recipe) try {
                FU = XU.getItemId(zU.recipe.name)
              } catch {}
              const oU = UU.craftingView(zU.station, FU, null !== (QU = null === (AU = zU.recipe) || void 0 === AU ? void 0 : AU.YA) && void 0 !== QU ? QU : 0);
              return cU = null === oU ? {
                focus: zU,
                recipes: [],
                detail: null
              } : function(UU, XU, zU) {
                let cU = pU.mb.BYTES;
                const yU = [];
                for (let EU = pU.mb.recipes(UU, 0); EU > 0; EU--) {
                  const zU = pU.eb.flags(UU, cU),
                    QU = {
                      name: XU.nameOfId(pU.eb.item(UU, cU)),
                      YA: pU.eb.recipe(UU, cU),
                      requires: [],
                      produces: pU.eb.produces(UU, cU),
                      haveIngredients: 0 !== (zU & pU.db.HaveIngredients),
                      listed: 0 !== (zU & pU.db.Listed)
                    };
                  let AU = pU.eb.requires(UU, cU);
                  for (cU += pU.eb.BYTES; AU > 0; AU--) {
                    const zU = pU.ib.items(UU, cU);
                    QU.requires.push({
                      items: Cc(UU, cU + pU.ib.BYTES, zU, XU),
                      amt: pU.ib.amount(UU, cU)
                    }), cU += pU.ib.BYTES + 2 * zU
                  }
                  yU.push(QU)
                }
                const QU = pU.mb.flags(UU, 0);
                if (null === zU.recipe || 0 === (QU & pU.jb.Detail)) return {
                  focus: zU,
                  recipes: yU,
                  detail: null
                };
                const AU = {},
                  FU = {};
                for (let EU = pU.mb.ingredients(UU, 0); EU > 0; EU--) {
                  const zU = pU.ab.item(UU, cU),
                    yU = pU.ab.from(UU, cU),
                    QU = pU.ab.amount(UU, cU);
                  cU += pU.ab.BYTES;
                  const oU = yU === pU.H ? null : Cc(UU, cU, yU, XU);
                  if (null !== oU && (cU += 2 * yU), 0 === zU) continue;
                  const DU = XU.nameOfId(zU);
                  AU[DU] = QU, null !== oU && (FU[DU] = oU)
                }
                const {
                  name: oU,
                  YA: DU
                } = zU.recipe;
                return {
                  focus: zU,
                  recipes: yU,
                  detail: {
                    name: oU,
                    YA: DU,
                    craftAllTimes: pU.mb.craftAllTimes(UU, 0),
                    roomForOne: 0 !== (QU & pU.jb.RoomForOne),
                    resultStackable: Boolean(XU.getItemStat(oU, "stackable")),
                    amounts: AU,
                    ingredientsCraftedFrom: FU
                  }
                }
              }(oU, XU, zU), cU
            },
            setFocus(UU) {
              zU = UU;
              for (const XU of [...QU]) XU()
            },
            watchFocus: UU => (QU.add(UU), () => {
              QU.delete(UU)
            })
          }
        }(UU, XU);
      return {
        states: {
          inventory: Zc(UU, (() => {
            const zU = UU.length;
            if (0 === zU) return kc;
            const cU = [];
            for (let XU = 0; XU < pU.yd; XU++) cU.push(Rc(UU.slot(XU)));
            const yU = UU.slotIcon,
              QU = cU[UU.selectedSlot];
            0 !== yU && QU && (cU[UU.selectedSlot] = {
              ...QU,
              icon: XU.nameOfId(yU)
            });
            const AU = !0 === XU.getClientOption("creative");
            let FU = [],
              oU = null;
            if (zU > pU.yd) {
              for (let XU = pU.yd; XU < zU; XU++) FU.push(Rc(UU.slot(XU)));
              oU = {
                type: null,
                pos: [...UU.jU],
                numSlots: zU - pU.yd,
                ironChest: null
              }
            } else AU && (FU = Wc(XU));
            return {
              player: cU,
              chestOrCreative: FU,
              chest: oU,
              creative: AU,
              selectedSlot: UU.selectedSlot,
              freeSlots: UU.freeSlots()
            }
          }), (0, Ic.o)("creative")),
          hotbar: Zc(UU, (() => {
            if (0 === UU.length) return Gc;
            const XU = [];
            for (let UU = 0; UU < gc; UU++) XU.push(QU(UU));
            return {
              items: XU,
              ammo: UU.amountOf("Ammo"),
              selectedSlot: UU.selectedSlot
            }
          }), (0, Ic.m)("DisplayName", "GunStats")),
          crafting: Zc(UU, FU.read, null, FU.watchFocus),
          heldItemAim: Zc(UU, (() => {
            var XU;
            if (!zU()) return Bc;
            const cU = null === (XU = UU.uD()) || void 0 === XU ? void 0 : XU.typeObj,
              yU = "Gun" === (null === cU || void 0 === cU ? void 0 : cU.type);
            return {
              gun: yU,
              aimable: yU || !0 === (null === cU || void 0 === cU ? void 0 : cU.showsAimingUi),
              chargeName: "Chargeable" === (null === cU || void 0 === cU ? void 0 : cU.type) ? cU.name : null
            }
          }), null, (UU => function(UU, XU) {
            let zU = UU();
            return (0, tc.t)((() => {
              const cU = UU();
              cU !== zU && (zU = cU, XU(cU))
            }))
          }(zU, UU)))
        },
        events: {
          hotbarSlotRequested: (0, Ic.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Ic.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, Ic.e)("numkeyPressed"),
          inventoryDropRequested: (0, Ic.e)("DropInvenItem"),
          chestToggled: (0, Ic.e)("chestToggleFromServer"),
          chestRefreshed: (0, Ic.e)("chestRefreshedFromServer", ec),
          inventorySynced: (0, Ic.e)("syncedInvenFromServer", ec),
          enchantingTableOpened: (0, Ic.e)("enchantingTable", (UU => {
            let {
              position: zU,
              yF: cU
            } = UU;
            return {
              position: [...zU],
              blockName: XU.getMetaInfo(cU).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(XU) {
            UU.selectSlot(XU), UU.flush(cU)
          },
          removeInventoryItem(XU) {
            let {
              slot: zU,
              amount: cU,
              drop: QU
            } = XU;
            return yU(UU.remove(zU, cU, QU))
          },
          swapInventorySlots(XU) {
            let {
              a: zU,
              b: cU
            } = XU;
            return yU(UU.swap(zU, cU))
          },
          moveInventoryItem(XU) {
            let {
              from: zU,
              to: cU,
              amount: QU
            } = XU;
            return yU(UU.move(zU, cU, QU))
          },
          quickMoveInventoryItem(XU) {
            let {
              slot: zU,
              start: cU,
              end: QU,
              amount: AU
            } = XU;
            return yU(UU.quickMove(zU, cU, QU, AU))
          },
          closeChest() {
            UU.closeChest(), UU.flush(cU), AU.k.UY("chestClosedByPlayer")
          },
          focusCrafting(UU) {
            FU.setFocus(UU)
          },
          craftRecipe(XU) {
            let {
              name: zU,
              YA: cU,
              times: QU
            } = XU;
            return yU(UU.craft(zU, cU, QU))
          },
          salvageItem(XU) {
            let {
              slot: zU,
              name: cU,
              amount: QU
            } = XU;
            return yU(UU.salvage(zU, cU, QU))
          },
          enchantItem(XU) {
            let {
              slot: zU,
              level: cU,
              tablePos: yU
            } = XU;
            UU.enchant(zU, cU, yU)
          }
        },
        queries: {
          enchantingOffer(zU) {
            let {
              slot: cU,
              blockName: yU
            } = zU;
            return function(UU, XU, zU, cU) {
              const yU = UU.slot(zU);
              if (!yU || !XU.getClientOption("canCraft") || !(0, Nc.s)(cU) || (0, Nc.q)(yU.attributes)) return Lc;
              const QU = (0, ac.enchantmentPerksOf)(XU.getItemId(yU.name));
              if (0 === QU.length) return Lc;
              const AU = [];
              for (let FU = 0; FU < pc.f; FU++) {
                const {
                  commonProb: UU,
                  uncommonProb: XU,
                  rareProb: zU,
                  epicProb: yU,
                  legendaryProb: QU,
                  level: oU
                } = (0, Nc.g)(cU, FU);
                AU.push({
                  level: oU,
                  odds: [UU, XU, zU, yU, QU].map((UU => 100 * UU))
                })
              }
              return {
                perks: [...QU],
                options: AU
              }
            }(UU, XU, cU, yU)
          }
        }
      }
    }
    const Lc = Object.freeze({
      perks: [],
      options: []
    });

    function ec() {
      return null
    }

    function Cc(UU, XU, zU, cU) {
      const yU = [];
      for (let QU = 0; QU < zU; QU++) {
        const zU = UU.getUint16(XU + 2 * QU, !0);
        0 !== zU && yU.push(cU.nameOfId(zU))
      }
      return yU
    }
    class wc {
      constructor(UU) {
        this.api = UU, this.positions = new Map, this.targeted = {
          O4: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          yt: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(UU) {
        let XU = this.positions.get(UU);
        return XU || (this.api.checkValid(UU) || this.api.isLocal(UU) ? (XU = [NaN, NaN, NaN], this.api.readPosition(UU, XU), this.positions.set(UU, XU), XU) : null)
      }
      gXU() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [XU, zU] of this.positions) this.api.readPosition(XU, zU) || this.api.checkValid(XU) || this.api.isLocal(XU) || this.positions.delete(XU);
        const UU = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (pU.w.playerFlags(UU, 0) & pU.Od.Breaking) && pU.w.breakingProgress(UU, 0) >= 0, this.isBreaking)
          for (let XU = 0; XU < 3; XU++) this.breaking[XU] = pU.w.breakingPos(UU, 0, XU)
      }
      refreshTarget() {
        const UU = this.api.apiView,
          XU = pU.w.targetBlockId(UU, 0);
        if (this.hasTarget = XU !== pU.cd, this.hasTarget) {
          const zU = this.targeted;
          zU.O4 = XU;
          for (let XU = 0; XU < 3; XU++) zU.position[XU] = pU.w.targetBlock(UU, 0, XU), zU.normal[XU] = pU.w.targetNormal(UU, 0, XU), zU.yt[XU] = pU.w.targetAdjacent(UU, 0, XU)
        }
      }
      despawned(UU) {
        const XU = this.positions.get(UU);
        XU && !this.api.isLocal(UU) && (XU.fill(NaN), this.positions.delete(UU))
      }
    }
    var qc = zU(41692),
      Oc = zU(41676),
      Sc = zU(37083),
      rc = zU(37532);
    const uc = 1,
      fc = 2;
    class ic {
      constructor() {
        this.game = new rc.g, this.client = new rc.g, this.uD = 0, this.movesFly = null
      }
      setGame(UU) {
        if (null === UU || "object" !== typeof UU) return !1;
        const {
          key: XU,
          value: zU
        } = UU;
        return "string" === typeof XU && (this.game.setBooleanType(XU, Boolean(zU)), !0)
      }
      setClient(UU, XU) {
        this.client.setBooleanType(UU, XU)
      }
      clearGame() {
        this.game = new rc.g, this.movesFly = null
      }
      setMovesFly(UU) {
        this.movesFly = UU
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? uc : 0) | (this.client._getTotalBooleanVal() ? fc : 0)
      }
      write(UU) {
        const XU = this.perms(),
          {
            movesFly: zU
          } = this;
        if (XU === this.uD && null === zU) return !0;
        let cU = pU.$b.Keep;
        return null !== zU && (cU = zU ? pU.$b.On : pU.$b.Off), !(!UU || !(0, pU.Ie)(UU, 0, cU, XU, zU ? 1 : 0)) && (this.uD = XU, this.movesFly = null, !0)
      }
    }
    class Hc {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = UU, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: FU.d,
          get y() {
            return XU()
          }
        }
      }
      get hasView() {
        const UU = this.api.apiView,
          XU = pU.w.viewProj;
        return 0 !== XU(UU, 0, 3) || 0 !== XU(UU, 0, 7) || 0 !== XU(UU, 0, 11) || 0 !== XU(UU, 0, 15)
      }
      get cameraPosition() {
        const UU = this.api.apiView,
          {
            eye: XU
          } = this;
        for (let zU = 0; zU < 3; zU++) XU[zU] = pU.w.eye(UU, 0, zU);
        return XU
      }
      get cameraDirection() {
        const UU = this.api.apiView,
          XU = pU.w.viewProj,
          zU = XU(UU, 0, 3),
          cU = XU(UU, 0, 7),
          yU = XU(UU, 0, 11),
          QU = Math.hypot(zU, cU, yU),
          {
            forward: AU
          } = this;
        return QU > 0 && (AU[0] = zU / QU, AU[1] = cU / QU, AU[2] = yU / QU), AU
      }
      get cameraHeading() {
        return pU.w.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return pU.w.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return pU.w.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return pU.w.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(UU) {
        this.clip(UU);
        const {
          clipX: XU,
          clipY: zU,
          clipW: cU
        } = this;
        if (cU > 0) {
          const UU = XU / cU * 50,
            yU = -zU / cU * 50;
          return Math.abs(UU) <= this.screenBandPct.x && Math.abs(yU) <= this.screenBandPct.y ? {
            x: 50 + UU,
            y: 50 + yU
          } : this.clampToBand(UU, yU)
        }
        const yU = this.cameraPosition,
          QU = Math.hypot(UU[0] - yU[0], UU[1] - yU[1], UU[2] - yU[2]),
          AU = this.api.apiView,
          FU = pU.w.viewProj,
          oU = QU > 0 ? XU / QU : 0,
          DU = QU > 0 ? -zU / QU : 0,
          EU = Math.hypot(FU(AU, 0, 1), FU(AU, 0, 5), FU(AU, 0, 9)),
          YU = oU / Math.hypot(FU(AU, 0, 0), FU(AU, 0, 4), FU(AU, 0, 8)),
          NU = DU / EU,
          IU = !(Math.abs(YU) >= .001 || Math.abs(NU) >= .001);
        return this.clampToBand(oU, IU ? -(EU || 1) : DU)
      }
      projectDirectionToScreenPos(UU) {
        if (!this.hasView) return;
        const XU = this.cameraPosition,
          zU = this.along;
        for (let cU = 0; cU < 3; cU++) zU[cU] = XU[cU] + 10 * UU[cU];
        return this.projectWorldPosToScreenPos(zU)
      }
      projectWorldPosToViewport(UU) {
        this.clip(UU);
        const {
          clipX: XU,
          clipY: zU,
          clipW: cU
        } = this;
        return cU > 0 ? {
          x: 50 + XU / cU * 50,
          y: 50 - zU / cU * 50
        } : null
      }
      clip(UU) {
        const XU = this.api.apiView,
          zU = UU[0] - pU.w.origin(XU, 0, 0),
          cU = UU[1] - pU.w.origin(XU, 0, 1),
          yU = UU[2] - pU.w.origin(XU, 0, 2),
          QU = pU.w.viewProj;
        this.clipX = QU(XU, 0, 0) * zU + QU(XU, 0, 4) * cU + QU(XU, 0, 8) * yU + QU(XU, 0, 12), this.clipY = QU(XU, 0, 1) * zU + QU(XU, 0, 5) * cU + QU(XU, 0, 9) * yU + QU(XU, 0, 13), this.clipW = QU(XU, 0, 3) * zU + QU(XU, 0, 7) * cU + QU(XU, 0, 11) * yU + QU(XU, 0, 15)
      }
      clampToBand(UU, XU) {
        return (0, FU.f)(UU, XU, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Mc = zU(5336);
    const vc = new TextEncoder,
      Vc = new Uint8Array(pU.R * pU.O);
    class sc {
      constructor() {
        this.buttons = [], this.uD = !0
      }
      set(UU) {
        this.buttons = UU, this.uD = !1
      }
      attached() {
        this.uD = 0 === this.buttons.length
      }
      write(UU) {
        if (this.uD) return;
        const XU = new Uint8Array(pU.R),
          zU = new Uint8Array(pU.R);
        let cU = 0,
          yU = 0;
        for (const {
            id: QU,
            keycode: AU
          }
          of this.buttons) {
          if (cU === pU.R) break;
          const {
            read: UU,
            written: FU
          } = vc.encodeInto(QU, Vc.subarray(yU, yU + pU.O));
          if (UU < QU.length) continue;
          const oU = Mc.j[AU];
          XU[cU] = "number" === typeof oU ? oU : 0, zU[cU] = FU, cU++, yU += FU
        }
        this.uD = (0, pU.se)(UU, 0, cU, XU, zU, Vc.subarray(0, yU))
      }
    }

    function nc(UU, XU, zU) {
      const cU = vc.encode(XU);
      return cU.length <= pU.O && function(UU, XU, zU, cU) {
        return (0, cz.e)(), (0, pU.xf)(UU, XU, zU, cU)
      }(UU, 0, zU ? 1 : 0, cU)
    }
    var mc = zU(40081);
    const lc = new TextDecoder,
      xc = new TextEncoder,
      Jc = new Uint8Array(0),
      jc = [0, 0, 0],
      Kc = {
        off: pU.Rd.Off,
        key: pU.Rd.Key,
        touch: pU.Rd.Touch
      };
    class bc {
      constructor(UU) {
        var XU;
        this.options = UU, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new sc, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = LU.o.DEFAULT, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new ic, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.oY = UU => {
          if ((0, IU.h)(UU)) throw UU;
          this.onError(UU)
        }, this.api = UU.api, this.tables = UU.tables, this.onError = null !== (XU = UU.onError) && void 0 !== XU ? XU : UU => {
          console.error("Error in client game callback", UU)
        }, this.renderFrame = new Hc(this.api, UU.screenBandY), this.live = new wc(this.api), this.chunks = new EX(this.api.memory, (() => this.api.apiView)), this.items = new qz({
          api: this.api,
          tables: UU.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: UU.beforeOp
        });
        const zU = () => this.stopped() ? null : this.cmd,
          cU = () => this.sessionLive;
        this.entityInfoWatch = new yc({
          cmd: zU,
          onError: this.onError
        }), this.entityInfo = new Qc({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: cU
        }), this.particles = new Jz({
          cmd: zU,
          isSessionLive: cU,
          onError: this.onError
        }), this.clientApi = new Zz({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: UU.tables,
          cmd: zU,
          sendCmd: () => this.sendCmd(),
          isSessionLive: cU,
          beforeWrite: () => {
            var XU;
            if (this.stopped()) return !1;
            const zU = this.generation;
            return !1 !== (null === (XU = UU.beforeWrite) || void 0 === XU ? void 0 : XU.call(UU)) && zU === this.generation
          },
          playerDbId: () => {
            const UU = this.session;
            if (null === UU) throw new Error("No game session has started, so the local player has no DB id");
            return UU.playerDbId
          },
          playSound: UU.playSound,
          preloadSounds: UU.preloadSounds,
          setLocalOptions: UU.setLocalOptions,
          hasPackModel: UU.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new JU({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: UU.cameraScreen,
          showFacing: UU.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= dc(this.items, this.tables, (() => this.localPlayerAlive()), this.oY), this.itemSources
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
      clickCodeBlock(UU) {
        const XU = this.sessionLive ? this.sendCmd() : null;
        return null !== XU && (zU = XU, cU = 0, yU = UU[0], QU = UU[1], AU = UU[2], (0, cz.e)(), (0, pU.xe)(zU, cU, yU, QU, AU));
        var zU, cU, yU, QU, AU
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(UU) {
        const XU = this.liveCmd();
        return null === XU ? (this.pendingZoom = UU, !1) : (this.pendingZoom = null, (0, pU.hg)(XU, 0, UU, 1))
      }
      nC(UU) {
        const XU = this.stopped() ? null : this.cmd;
        return null !== XU && (0, pU.ag)(XU, 0, UU ? 1 : 0)
      }
      respawn() {
        const UU = this.sessionLive ? this.sendCmd() : null;
        return null !== UU && (XU = UU, zU = 0, (0, cz.e)(), (0, pU.Jf)(XU, zU));
        var XU, zU
      }
      bindCustomButtonKeys(UU) {
        this.customButtons.set(UU)
      }
      pressCustomButton(UU, XU) {
        const zU = this.sessionLive ? this.sendCmd() : null;
        return null !== zU && nc(zU, UU, XU)
      }
      padMove(UU, XU, zU, cU, yU, QU) {
        const AU = this.liveCmd();
        return null !== AU && (0, pU.hf)(AU, 0, UU, XU, zU, cU, yU, QU)
      }
      thirdPersonFor(UU) {
        const XU = this.liveCmd();
        return null !== XU && (0, pU.kg)(XU, 0, null !== UU && void 0 !== UU ? UU : 1 / 0)
      }
      send(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== cU && yz(cU, zU ? NU.ud : 0, UU, (0, HU.e)(XU))
      }
      socketAttached(UU) {
        this.openSocket = UU, this.socketLeftSinceAttach = !1
      }
      socketDetached(UU) {
        this.openSocket === UU && (this.openSocket = 0)
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
      attach(UU) {
        const XU = () => UU.isStopped;
        this.stopped = XU, this.cmd = UU.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const zU = this.api.apiView;
        this.overflowGen = pU.w.eventOverflowGen(zU, 0), this.resyncOwed = 0 !== pU.w.eventOverflowMask(zU, 0), UU.setGameHost(this), UU.setEventWalker((UU => {
          this.api.walk(UU, this, XU)
        }))
      }
      watchPromptPick(UU) {
        this.promptWatch = UU, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Tc(pU.w.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? pU.zc.None : pU.w.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : pU.w.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === UU || UU >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, UU, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(UU) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(UU)
      }
      netEvent(UU) {
        "connection" === UU.type ? UU.phase === NU.E.Activated && UU.conn !== this.activeConn && UU.conn > this.closedThrough ? (this.endSession(), this.activeConn = UU.conn, this.endGameGrants(), this.dropGameCamera()) : UU.phase !== NU.E.Left && UU.phase !== NU.E.Closed || UU.conn !== this.activeConn ? UU.phase === NU.E.Resumed && 0 !== this.activeConn && UU.conn > this.closedThrough && (this.activeConn = UU.conn) : this.closeGame() : UU.conn === this.activeConn && 0 !== UU.conn && (UU.TE === Oc.w ? this.gunHit(UU.payload) : UU.TE === Ac.oc.EditItemCraftingRecipes || UU.TE === Oc.S ? this.items.touch() : (this.serverOptions(UU), this.gameMessage(UU)));
        const XU = this.options.onNetEvent;
        XU && this.guard((() => {
          XU(UU)
        }))
      }
      serverOptions(UU) {
        const XU = this.options.serverOptions,
          zU = XU ? this.decoded(Fc, UU) : null;
        XU && zU && this.guard((() => {
          XU.applyNewClientOptions(zU)
        }))
      }
      gameMessage(UU) {
        let XU = null;
        try {
          XU = function(UU) {
            if ("message" !== UU.type || UU.TE !== Ac.oc.GameCodeMessage || UU.payloadKind !== NU.jc.Msgpack) return null;
            const XU = (0, HU.d)(UU.payload);
            if (null === XU || "object" !== typeof XU || "string" !== typeof XU.messageType) throw new Error("GameCodeMessage without a messageType");
            return XU
          }(UU)
        } catch (zU) {
          this.sessionLive && this.onError(zU)
        }
        if (XU) {
          const {
            messageType: UU,
            data: zU
          } = XU;
          if ((0, qU.h)(UU)) return void this.guard((() => {
            (0, qU.d)(UU, zU)
          }));
          "freeCamPerms" === UU && this.freeCam.setGame(zU) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (XU => {
            XU.onReceivedMessageFromServer(UU, zU)
          }))
        }
      }
      decoded(UU, XU) {
        try {
          return UU(XU)
        } catch (zU) {
          return this.onError(zU), null
        }
      }
      setClientFreeCameraGrant(UU, XU) {
        this.freeCam.setClient(UU, XU), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(UU) {
        this.freeCam.setMovesFly(UU), this.writeFreeCam()
      }
      setBlockHighlight(UU) {
        this.highlight = UU, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const UU = this.liveCmd();
        if (null === UU || !this.highlightOwed) return;
        const XU = this.highlight;
        this.highlightOwed = null === XU ? !(0, pU.Ue)(UU, 0, jc, jc, 0) : !(0, pU.Ue)(UU, 0, XU.pos, XU.normal, 1)
      }
      localPlayerBound(UU) {
        var XU, zU;
        if (0 === this.activeConn || this.sessionLive && UU === this.boundId) return;
        const cU = this.sessionLive;
        let yU, QU, AU, FU;
        this.endSession(), cU && this.restartGameCamera();
        try {
          var oU;
          this.session = null;
          const UU = this.options.sessionInfo(this.activeConn);
          if (this.session = UU, !UU) return;
          yU = UU.gameNameWithVariation, QU = null !== (oU = (0, eU.Nb)(yU)) && void 0 !== oU ? oU : void 0, AU = (0, CU.s)(UU.lobbyName), FU = (0, CU.G)(UU.lobbyName)
        } catch (kU) {
          return void this.onError(kU)
        }
        const DU = {
          localPlayerId: String(UU)
        };
        let EU = {},
          YU = [];
        try {
          var NU, IU;
          EU = null !== (NU = null === (IU = this.options.gameFactory((0, eU.Tb)(yU))) || void 0 === IU ? void 0 : IU(FU, AU, QU, DU)) && void 0 !== NU ? NU : {}
        } catch (kU) {
          this.oY(kU)
        }
        try {
          var pU, aU;
          YU = (0, wU.e)(null === (pU = (aU = this.options).defaultPlugins) || void 0 === pU ? void 0 : pU.call(aU, FU, AU, QU, DU), EU.plugins)
        } catch (kU) {
          this.oY(kU)
        }
        const tU = [EU, ...YU];
        this.owners = tU, this.tickers = tU.filter((UU => void 0 !== UU.LY)), this.renderers = tU.filter((UU => void 0 !== UU.onAfterRender)), this.receivers = tU.filter((UU => void 0 !== UU.onReceivedMessageFromServer)), this.writeAltVeto(tU), this.writeHooks(tU), this.writePublicLobby(FU), this.writeLocalDbId(null !== (XU = null === (zU = this.session) || void 0 === zU ? void 0 : zU.playerDbId) && void 0 !== XU ? XU : null), this.boundId = UU, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(tU, (UU => {
          var XU;
          null === (XU = UU.onCreate) || void 0 === XU || XU.call(UU, this.clientApi)
        }));
        const gU = this.generation;
        setTimeout((() => {
          gU === this.generation && !0 === this.tables.getClientOption("creative") && Wc(this.tables)
        }), 0)
      }
      chunkSlot(UU, XU, zU, cU, yU, QU) {
        this.chunks.apply(UU, XU, zU, cU, yU, QU)
      }
      entityAdded(UU) {
        var XU;
        this.entityInfo.stale(UU), null === (XU = this.options.replayEntities) || void 0 === XU || XU.entityAdded(UU)
      }
      entityInfoChanged(UU) {
        var XU;
        this.entityInfo.stale(UU), null === (XU = this.options.replayEntities) || void 0 === XU || XU.entityInfoChanged(UU)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const UU = performance.now();
          this.round(this.tickers, hc), (0, tc.b)(performance.now() - UU)
        }
      }
      afterWalk(UU) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const XU = this.options.replayEntities;
        XU && this.guard((() => {
          this.entityInfoWatch.want(cc, XU.wantsWatch), XU.flush(this.entityInfoWatch.on)
        }));
        const zU = this.api.apiView,
          cU = pU.w.frameMs(zU, 0);
        Sc.q.frame(cU, pU.w.heading(zU, 0), pU.w.pitch(zU, 0), Sc.l[UU]);
        const yU = (0, tc.h)(UU, cU);
        if (null !== yU) {
          const UU = this.renderFrame;
          this.guard((() => {
            (0, Dc.c)().turnDamageIndicators(UU.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(yU)
          })), this.round(this.renderers, (XU => {
            XU.onAfterRender(yU, UU)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== yU)
        } catch (AU) {
          this.oY(AU)
        }
        this.showZoom(), this.items.flush(this.oY), this.writePromptWatch(), this.writeCustomButtons();
        const QU = this.ticks;
        this.ticks = 0, (0, tc.f)(QU, UU, yU, this.oY)
      }
      entityRemoved(UU) {
        this.live.despawned(UU), this.entityInfo.removed(UU)
      }
      ackEventOverflow() {
        const UU = this.api.apiView,
          XU = pU.w.eventOverflowGen(UU, 0),
          zU = XU - this.overflowGen >>> 0;
        if (0 === zU && !this.resyncOwed) return;
        this.overflowGen = XU;
        const cU = pU.w.eventOverflowMask(UU, 0),
          yU = this.cmd;
        0 === cU || null === yU || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, pU.Fe)(yU, 0, cU);
        const QU = this.options.onEventOverflow;
        0 !== zU && QU && this.guard((() => {
          QU(cU, zU)
        }))
      }
      gameCall(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        if (UU === pU.oc.Director) try {
          return this.scriptedCamera.call(XU, zU, cU, yU, QU, AU)
        } catch (DU) {
          return this.oY(DU), pU.qb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return UU === pU.oc.AltVeto ? pU.j.Allow : 0;
        try {
          return this.callGames(UU, XU, zU, cU, yU, QU, AU, FU)
        } catch (DU) {
          throw (0, IU.h)(DU) && (this.fault = DU), DU
        }
      }
      takeFault() {
        const UU = this.fault;
        return this.fault = void 0, UU
      }
      callGames(UU, XU, zU, cU, yU, QU, AU, FU) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: oU
        } = this.options, DU = String(this.boundId);
        switch (UU) {
          case pU.oc.AltVeto:
          case pU.oc.AltAction: {
            const FU = 0 !== AU,
              [EU, YU, NU] = FU ? [XU, zU, cU] : [void 0, void 0, void 0],
              IU = FU ? oU.nameOfId(yU) : "Air",
              aU = Tc(QU);
            if (UU === pU.oc.AltAction) return this.first((UU => {
              var XU;
              return null === (XU = UU.onPlayerAltAction) || void 0 === XU ? void 0 : XU.call(UU, DU, EU, YU, NU, IU, aU)
            })), 0;
            const tU = this.first((UU => {
              var XU;
              return null === (XU = UU.onPlayerAttemptAltAction) || void 0 === XU ? void 0 : XU.call(UU, DU, EU, YU, NU, IU, aU)
            }));
            return "preventAction" === tU ? pU.j.Prevent : "preventPlacement" === tU ? pU.j.PreventPlacement : pU.j.Allow
          }
          case pU.oc.Click: {
            const UU = FU,
              EU = 0 !== (UU & pU._.Alt),
              YU = 0 !== (UU & pU._.HasPos),
              NU = YU ? oU.nameOfId(yU) : "Air",
              [IU, aU, tU] = YU ? [XU, zU, cU] : [null, null, null],
              gU = Tc(QU),
              kU = 0 !== (UU & pU._.Up),
              GU = Tc(AU);
            if (0 === (UU & pU._.AttackOnly) && this.first((UU => {
                var XU, zU;
                return kU ? null === (XU = UU.onPlayerClickUp) || void 0 === XU ? void 0 : XU.call(UU, DU, EU, IU, aU, tU, NU, gU) : null === (zU = UU.onPlayerClick) || void 0 === zU ? void 0 : zU.call(UU, DU, EU, IU, aU, tU, NU, gU)
              })), !kU && !EU && null !== GU) {
              const UU = this.clientApi.getPositionView(GU),
                XU = UU ? [UU[0], UU[1], UU[2]] : [0, 0, 0];
              this.first((UU => {
                var zU;
                return null === (zU = UU.onPlayerAttackEntity) || void 0 === zU ? void 0 : zU.call(UU, DU, GU, XU)
              }))
            }
            return 0
          }
          case pU.oc.ChangeBlock: {
            const UU = oU.nameOfId(yU),
              AU = oU.nameOfId(QU);
            return this.first((yU => {
              var QU;
              return null === (QU = yU.onPlayerChangeBlock) || void 0 === QU ? void 0 : QU.call(yU, DU, XU, zU, cU, UU, AU)
            })), 0
          }
          case pU.oc.DropItem: {
            const UU = oU.nameOfId(XU);
            return this.first((XU => {
              var yU;
              return null === (yU = XU.onPlayerDropItem) || void 0 === yU ? void 0 : yU.call(XU, DU, UU, zU, cU)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${UU}`)), 0
        }
      }
      changeBlockFail(UU, XU, zU, cU, yU, QU, AU) {
        const FU = yU === pU.Vc ? null : lc.decode(this.api.eventBytes(QU, Math.min(yU, AU)));
        this.failures.push({
          wc: [UU, XU, zU],
          qc: cU,
          Oc: FU
        })
      }
      changeBlockFailEnd() {
        const UU = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (XU => {
          var zU;
          null === (zU = XU.onChangeBlockFail) || void 0 === zU || zU.call(XU, UU)
        })), this.UY("blockChangeRefused", null), this.UY("EditBoard", {
          pos: null
        }), this.UY("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(UU, XU, zU, cU, yU, QU) {
        UU === pU.Cc.ChestOpened ? this.items.chestOpened(zU, cU, yU) : UU !== pU.Cc.Synced && UU !== pU.Cc.ChestClosed && UU !== pU.Cc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(UU, XU, zU, cU) {
            switch (UU) {
              case pU.Cc.Synced:
                AU.k.UY("syncedInvenFromServer");
                break;
              case pU.Cc.ChestOpened:
              case pU.Cc.ChestClosed:
                AU.k.UY("chestToggleFromServer", UU === pU.Cc.ChestOpened, !0);
                break;
              case pU.Cc.ChestRefreshed:
                AU.k.UY("chestRefreshedFromServer");
                break;
              case pU.Cc.EnchantingTable:
                AU.k.UY("enchantingTable", {
                  yF: cU,
                  position: zU
                });
                break;
              case pU.Cc.HotbarRequest:
                AU.k.UY("setSelectedInventorySlotI", XU, !0);
                break;
              case pU.Cc.Scrolled:
                AU.k.UY("ScrollInventorySlot", XU);
                break;
              case pU.Cc.NumberKey:
                AU.k.UY("numkeyPressed", XU + 1);
                break;
              case pU.Cc.DropRequested:
                AU.k.UY("DropInvenItem", 0 !== XU);
                break;
              default:
                throw new IU.c(`InventoryEvent of no kind: what ${UU}`)
            }
          }(UU, XU, [zU, cU, yU], QU)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(UU, XU, zU, cU) {
        this.UY("shotPlayer", {
          playerId: String(UU),
          damage: XU,
          wasCrit: 0 !== cU,
          distance: zU
        })
      }
      localHurt(UU, XU) {
        this.UY("closeShopOnDamaged", null), this.guard((() => {
          AU.k.UY("damagedByOtherPlayer", {
            fQ: null,
            direction: Number.isNaN(XU) ? null : XU,
            vU: UU
          })
        }))
      }
      attackHit(UU, XU, zU, cU, yU) {
        this.guard((() => {
          AU.k.UY("yourAttackHit", {
            yX: cU,
            screenPos: this.renderFrame.projectDirectionToScreenPos([UU, XU, zU]),
            hitSelf: yU
          })
        }))
      }
      physicsType(UU) {
        this.localPhysicsType = UU, this.UY("PlayerPhysicsTypeUpdate", UU)
      }
      vehicleEffect(UU, XU, zU, cU, yU) {
        this.guard((() => {
          UU === NU.Jd.UPDATE ? (0, SU.j)(XU, {
            icon: zU,
            level: cU,
            displayName: null,
            durationMs: yU
          }) : OU.b.remove(XU)
        }))
      }
      zoomChanged(UU) {
        this.zoom = UU, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.UY("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.UY("showBottomMessage", mc.b)
      }
      showZoom() {
        const UU = this.scriptedCamera.holdsView();
        !this.zoomUnshown || UU && this.zoomHeld || (this.zoomUnshown = !1, this.UY("cameraZoomSet", this.zoom)), this.zoomHeld = UU
      }
      gunHit(UU) {
        this.guard((() => {
          const {
            fQ: XU,
            iQ: zU
          } = (0, qc.d)(Oc.w, UU);
          AU.k.UY("damagedByOtherPlayer", {
            fQ: XU,
            direction: zU
          })
        }))
      }
      uiEvent(UU, XU, zU, cU, yU, QU, AU, FU) {
        this.guard((() => {
          Ec(UU, XU, [zU, cU, yU], QU, this.items, this.options.tables, (() => lc.decode(this.api.eventBytes(AU, FU))))
        }))
      }
      writeAltVeto(UU) {
        const XU = this.cmd;
        if (!XU) return;
        let zU;
        try {
          zU = function(UU, XU) {
            const zU = new Set;
            let cU = !1;
            for (const yU of UU)
              if (yU.onPlayerAttemptAltAction) {
                if (cU = !0, !yU.altVetoBlocks) return {
                  mode: pU.le.All,
                  roots: []
                };
                for (const UU of yU.altVetoBlocks) zU.add(XU.getMetaInfo(UU).rootId)
              } return cU ? zU.size > pU.Oc ? {
              mode: pU.le.All,
              roots: []
            } : {
              mode: pU.le.Filter,
              roots: [...zU]
            } : {
              mode: pU.le.Off,
              roots: []
            }
          }(UU, this.options.tables)
        } catch (yU) {
          this.onError(yU), zU = {
            mode: pU.le.All,
            roots: []
          }
        }
        if (zU.mode === pU.le.Off && !this.vetoSet) return;
        const cU = new Uint8Array(new Uint32Array(zU.roots).buffer);
        (0, pU.Qf)(XU, 0, zU.mode, zU.roots.length, cU) ? this.vetoSet = zU.mode !== pU.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(UU) {
        const XU = this.cmd;
        if (!XU) return;
        const zU = function(UU) {
          let XU = 0;
          for (const zU of UU) zU.onPlayerAltAction && (XU |= 1 << pU.oc.AltAction), (zU.onPlayerClick || zU.onPlayerClickUp || zU.onPlayerAttackEntity) && (XU |= 1 << pU.oc.Click), zU.onPlayerChangeBlock && (XU |= 1 << pU.oc.ChangeBlock), zU.onPlayerDropItem && (XU |= 1 << pU.oc.DropItem);
          return XU
        }(UU);
        (0 !== zU || this.hooksSet) && ((0, pU.Zf)(XU, 0, zU) ? this.hooksSet = 0 !== zU : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const UU = this.cmd;
        UU && !this.stopped() && this.customButtons.write(UU)
      }
      writePromptWatch() {
        const UU = this.cmd,
          XU = this.promptWatch;
        XU !== this.promptWatchSent && UU && !this.stopped() && (0, pU.mg)(UU, 0, Kc[XU]) && (this.promptWatchSent = XU)
      }
      writePublicLobby(UU) {
        const XU = this.cmd;
        XU && UU !== this.writtenPublicLobby && ((0, pU.eg)(XU, 0, UU ? 1 : 0) ? this.writtenPublicLobby = UU : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(UU) {
        const XU = this.cmd;
        XU && ((0, pU._f)(XU, 0, null === UU ? 0 : 1, null === UU ? Jc : xc.encode(UU)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(UU) {
        const XU = this.generation;
        for (const cU of this.owners) {
          if (XU !== this.generation) break;
          try {
            const XU = UU(cU);
            if (void 0 !== XU) return XU
          } catch (zU) {
            this.oY(zU)
          }
        }
      }
      UY(UU, XU) {
        this.guard((() => {
          AU.k.UY(UU, XU)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (UU) {
          this.oY(UU)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (UU) {
          this.oY(UU)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = LU.o.DEFAULT;
        const UU = this.owners;
        let XU;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (cU) {
          XU = cU
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (cU) {
          XU ??= cU
        }
        this.round(UU, Uy, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (cU) {
          XU ??= cU
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (cU) {
          XU ??= cU
        }
        const zU = this.options.onSessionEnd;
        if (zU) try {
          zU()
        } catch (cU) {
          this.onError(cU)
        }
        void 0 !== XU && this.oY(XU)
      }
      round(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = this.generation;
        for (const QU of UU) {
          if (cU !== this.generation) break;
          try {
            XU(QU)
          } catch (yU) {
            zU ? this.onError(yU) : this.oY(yU)
          }
        }
      }
      guard(UU) {
        try {
          UU()
        } catch (XU) {
          this.oY(XU)
        }
      }
    }

    function Tc(UU) {
      return UU === pU.Zc ? null : String(UU)
    }

    function hc(UU) {
      UU.LY(NU.yd)
    }

    function Uy(UU) {
      var XU;
      null === (XU = UU.onClose) || void 0 === XU || XU.call(UU)
    }

    function Xy(UU, XU) {
      UU.watch((() => {
        const zU = function(UU) {
          const XU = [],
            zU = Math.min(gc, UU.length);
          for (let yU = 0; yU < zU; yU++) {
            var cU;
            const zU = null === (cU = UU.slot(yU)) || void 0 === cU ? void 0 : cU.typeObj,
              QU = zU ? (0, ac.gunTypeOf)(zU.id) : void 0;
            void 0 !== QU && XU.push(PX[QU])
          }
          return XU
        }(UU);
        zU.length > 0 && (XU.preload(zU.flatMap((UU => fX(UU)))), XU.preload(fX(WX)))
      }))
    }
    var zy = zU(37148),
      cy = zU(5378),
      yy = zU(37480),
      Qy = zU(37507);

    function Ay(UU) {
      const XU = (0, zy.countDecodesAs)(new cy.Howl({
          src: [...(0, yy.y)(UU).src],
          pool: 15,
          preload: !1
        }), "sound"),
        zU = XU.load.bind(XU);
      return XU.load = () => (XU._preload = !0, (0, Qy.e)(UU), zU()), XU
    }

    function Fy(UU, XU, zU) {
      const cU = UU.listener;
      if (cU.positionX) oy(cU.positionX, XU, zU, 0), oy(cU.positionY, XU, zU, 1), oy(cU.positionZ, XU, zU, 2), oy(cU.forwardX, XU, zU, 3), oy(cU.forwardY, XU, zU, 4), oy(cU.forwardZ, XU, zU, 5), oy(cU.upX, XU, zU, 6), oy(cU.upY, XU, zU, 7), oy(cU.upZ, XU, zU, 8);
      else {
        let UU = !1;
        for (let cU = 0; cU < 9; cU++) UU ||= XU[cU] !== zU[cU];
        UU && (cU.setPosition(XU[0], XU[1], XU[2]), cU.setOrientation(XU[3], XU[4], XU[5], XU[6], XU[7], XU[8]), zU.set(XU))
      }
    }

    function oy(UU, XU, zU, cU) {
      XU[cU] !== zU[cU] && (UU.value = XU[cU], zU[cU] = XU[cU])
    }
    class Dy {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(UU) {
        this.pose.set(UU);
        const XU = cy.Howler.ctx;
        return !!XU && (XU !== this.watchedCtx && (this.watchedCtx = XU, this.written.fill(Number.NaN), XU.addEventListener("statechange", (() => {
          "running" === XU.state && Fy(XU, this.pose, this.written)
        }))), "running" === XU.state && Fy(XU, UU, this.written), !0)
      }
    }
    var Ey = zU(37281),
      Yy = zU(40063);
    let Ny = null,
      Iy = null;

    function py() {
      return null === Ny && (Ny = document.createElement("div"), Ny.className = "WasmCameraLayer", Ny.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(Ny)), Ny
    }

    function ay() {
      return Iy ??= new Yy.c(new Ey.i(py)), Iy
    }

    function ty() {
      var UU;
      null === (UU = Iy) || void 0 === UU || UU.clear(), gy(null)
    }

    function gy(UU) {
      cU.e.get("scriptedCameraFacing") !== UU && cU.e.set({
        scriptedCameraFacing: UU
      })
    }
    var ky = zU(9894),
      Gy = zU(9834),
      By = zU(40101),
      Zy = zU(42138),
      Ry = zU(3660);
    const Py = Object.entries(pU.lc).reduce(((UU, XU) => {
      let [zU, cU] = XU;
      return UU[cU] = zU, UU
    }), []);

    function Wy(UU, XU) {
      var zU;
      return 0 !== ((null !== (zU = UU.itemFlags[XU]) && void 0 !== zU ? zU : 0) & pU.Gc.Stackable)
    }
    const dy = /^(0|[1-9][0-9]*)$/,
      Ly = {
        displayName: (UU, XU) => (0, ac.displayNameOf)(XU),
        description: (UU, XU) => (0, ac.descriptionOf)(XU),
        type: (UU, XU) => (0, ac.itemTypeOf)(XU),
        clipSize: (UU, XU) => (0, ac.clipSizeOf)(XU),
        armourReduction: (UU, XU) => (0, ac.armourReductionOf)(XU),
        scopeType: (UU, XU) => (0, ac.scopeTypeOf)(XU),
        stackable: Wy,
        harvestType: (UU, XU) => Py[UU.blockHarvestTypes[XU]],
        harvestLevel: (UU, XU) => {
          const zU = UU.blockHarvestLevels[XU];
          return zU === pU.Kc ? void 0 : zU
        },
        harvests: (UU, XU) => {
          var zU;
          const cU = null !== (zU = UU.itemHarvests[XU]) && void 0 !== zU ? zU : 0;
          return 0 !== cU ? Py[cU] : void 0 === (0, ac.harvestsNullLevelOf)(XU) ? void 0 : null
        },
        level: (UU, XU) => {
          var zU, cU;
          const yU = null !== (zU = UU.itemLevels[XU]) && void 0 !== zU ? zU : pU.Kc;
          return yU !== pU.Kc ? yU : null !== (cU = (0, ac.harvestsNullLevelOf)(XU)) && void 0 !== cU ? cU : void 0
        }
      };

    function ey(UU, XU, zU) {
      return wy(new Uint8Array(Math.floor(UU.length / XU)), UU, XU, zU)
    }

    function Cy(UU, XU, zU) {
      return wy(new Uint16Array(Math.floor(UU.length / XU)), UU, XU, zU)
    }

    function wy(UU, XU, zU, cU) {
      const yU = new DataView(XU.buffer, XU.byteOffset, XU.byteLength);
      for (let QU = 0; QU < UU.length; QU++) UU[QU] = cU(yU, QU * zU);
      return UU
    }
    class qy {
      constructor(UU, XU) {
        this.options = XU, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = UU => {
          const XU = this.idOf(UU);
          if (void 0 === XU) throw new Error(`No item is named ${UU}, an item's root`);
          return XU
        };
        const zU = XU => {
            const zU = XU();
            return new Uint8Array(UU.memory().buffer, UU.scratch(), zU).slice()
          },
          cU = (new TextDecoder).decode(zU((() => UU.queries.itemNames()))).split("\n"),
          yU = zU((() => UU.queries.blockProps())),
          QU = zU((() => UU.queries.itemProps()));
        this.props = {
          blockFlags: ey(yU, pU.D.BYTES, pU.D.flags),
          blockHarvestTypes: ey(yU, pU.D.BYTES, pU.D.harvestType),
          blockHarvestLevels: ey(yU, pU.D.BYTES, pU.D.harvestLevel),
          blockAttachedTops: Cy(yU, pU.D.BYTES, pU.D.attachedTop),
          itemFlags: ey(QU, pU.Ic.BYTES, pU.Ic.flags),
          itemHarvests: ey(QU, pU.Ic.BYTES, pU.Ic.harvests),
          itemLevels: ey(QU, pU.Ic.BYTES, pU.Ic.level)
        }, (0, Ry.k)(Object.freeze(cU)), (0, Zy.f)()
      }
      idOf(UU) {
        if ("number" === typeof UU) return void 0 === (0, Ry.f)(UU) ? void 0 : UU;
        const XU = (0, Ry.c)(UU);
        return void 0 === XU && dy.test(UU) ? void 0 === (0, Ry.f)(+UU) ? void 0 : +UU : XU
      }
      getMetaInfo(UU) {
        if (!UU || UU === ky.c) return ky.f;
        const XU = this.idOf(UU);
        if (void 0 === XU) throw new Error(`Item ${UU} not found in registry`);
        return this.metaOf(XU)
      }
      blockRootId(UU) {
        return 0 !== UU && void 0 !== (0, Ry.f)(UU) ? this.metaOf(UU).rootId : UU
      }
      metaOf(UU) {
        return this.metas[UU] ??= (0, Gy.l)((0, Ry.f)(UU), UU, this.rootIdOf, (0, ac.rootMetaDescOf)(UU))
      }
      getItemId(UU) {
        if (!UU || UU === ky.c) return 0;
        const XU = this.idOf(UU);
        if (void 0 === XU) throw new Error(`Invalid block name. You sent ${UU}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return XU
      }
      getItemName(UU) {
        if (!UU || UU === ky.c) return ky.c;
        const XU = this.idOf(UU);
        if (void 0 === XU) throw new Error(`Item ${UU} not found in registry`);
        return (0, Ry.f)(XU)
      }
      blockNameToBlockId(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (UU === ky.c) return 0;
        let zU = this.idOf(UU);
        if (void 0 === zU || !this.isBlockId(zU)) {
          const XU = UU.indexOf("|"),
            cU = XU > 0 ? (0, Ry.c)(UU.slice(0, XU)) : void 0;
          zU = void 0 !== cU && this.isBlockId(cU) && (0, ac.rootMetaDescOf)(cU) === UU ? cU : void 0
        }
        if (void 0 !== zU) return zU;
        if (!XU) throw new Error(`Invalid block name. You sent ${UU}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(UU) {
        return UU > 0 && UU < this.props.blockFlags.length
      }
      nameOfId(UU) {
        return 0 !== UU && (0, Ry.f)(UU) || ky.c
      }
      itemType(UU) {
        const XU = UU ? this.idOf(UU) : void 0;
        if (!XU) return null;
        let zU = this.types.get(XU);
        return void 0 === zU && (zU = Object.freeze({
          id: XU,
          name: (0, Ry.f)(XU),
          meta: this.getMetaInfo(XU),
          stackable: Wy(this.props, XU),
          type: (0, ac.itemTypeNameOf)(XU),
          clipSize: (0, ac.clipSizeOf)(XU),
          scopeType: (0, ac.scopeTypeOf)(XU),
          showsAimingUi: (0, ac.showsAimingUi)(XU)
        }), this.types.set(XU, zU)), zU
      }
      getItemStat(UU, XU) {
        if (By.b.has(XU)) {
          const zU = "minChargeStateToUse" === XU ? this.getMetaInfo(UU).rootName : this.getItemName(UU),
            cU = this.options.get((0, By.e)(zU, XU));
          if (null !== cU && void 0 !== cU) return cU
        }
        return this.defaultStat(UU, XU, this.statOf(XU))
      }
      getDisplayName(UU) {
        return this.getItemStat(UU, "displayName")
      }
      getDefaultItemStat(UU, XU) {
        return this.defaultStat(UU, XU, this.statOf(XU))
      }
      statOf(UU) {
        const XU = Ly[UU];
        return void 0 === XU && function(UU, XU) {
          throw new Error(`ClientApi.${UU} is not available yet in the wasm client (${XU})`)
        }(`getItemStat("${UU}")`, `a table of the stat: the wasm client answers ${Object.keys(Ly).join(", ")}`), XU
      }
      defaultStat(UU, XU, zU) {
        const cU = this.idOf(UU),
          yU = void 0 === cU ? void 0 : zU(this.props, cU);
        return null !== yU && void 0 !== yU || "displayName" !== XU ? yU : this.getItemName(UU)
      }
      getClientOption(UU) {
        return this.options.get(UU)
      }
      getGunStats(UU) {
        return this.getClientOption(`${UU}GunStats`)
      }
      watchClientOption(UU, XU) {
        return this.options.subscribe(UU, XU)
      }
      isSolidBlockId(UU) {
        var XU;
        return 0 !== ((null !== (XU = this.props.blockFlags[UU]) && void 0 !== XU ? XU : 0) & pU.A.Solid)
      }
      isStackableId(UU) {
        return Wy(this.props, UU)
      }
      isFluidBlockId(UU) {
        var XU;
        return 0 !== ((null !== (XU = this.props.blockFlags[UU]) && void 0 !== XU ? XU : 0) & pU.A.Fluid)
      }
      canPlaceOverBlockId(UU) {
        var XU;
        return 0 !== ((null !== (XU = this.props.blockFlags[UU]) && void 0 !== XU ? XU : 0) & pU.A.PlaceOver)
      }
      attachedTopOf(UU) {
        var XU;
        return null !== (XU = this.props.blockAttachedTops[UU]) && void 0 !== XU ? XU : 0
      }
      isDroplessBlockId(UU) {
        return (0, ac.dropsNothing)(UU)
      }
    }

    function Oy(UU, XU) {
      const zU = new Map;
      return (cU, yU) => {
        const QU = XU.idOf(cU),
          AU = void 0 === QU ? null : (cU => {
            let yU = zU.get(cU);
            if (void 0 === yU) {
              const QU = UU.queries.salvageRecipe(cU),
                AU = new DataView(UU.memory().buffer, UU.scratch(), QU),
                FU = [];
              for (let UU = 0; UU + pU.ae.BYTES <= QU; UU += pU.ae.BYTES) FU.push(Object.freeze({
                item: XU.nameOfId(pU.ae.item(AU, UU)),
                amt: pU.ae.amount(AU, UU)
              }));
              yU = 0 === FU.length ? null : Object.freeze(FU), zU.set(cU, yU)
            }
            return yU
          })(QU);
        if (null === AU || void 0 === yU) return AU;
        const FU = yU <= 0 ? 1 : yU;
        return AU.map((UU => {
          let {
            item: XU,
            amt: zU
          } = UU;
          return {
            item: XU,
            amt: zU * FU
          }
        }))
      }
    }
    var Sy = zU(41863),
      ry = zU(37685),
      uy = zU(37669),
      fy = zU(37674),
      iy = zU(37211),
      Hy = zU(41742),
      My = zU(53645);
    const vy = -1,
      Vy = new Uint8Array(0),
      sy = new TextEncoder;

    function ny(UU) {
      if (null === UU) return null;
      const XU = sy.encode(UU);
      return XU.byteLength < NU.Cc ? XU : XU.subarray(0, NU.Cc - 1)
    }
    class my {
      constructor(UU) {
        this.deps = UU, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = vy, this.keyframesSettled = !1, this.reloadFrom = vy
      }
      reloadKeyframes() {
        var UU, XU;
        this.keyframesVersion = vy, this.reloadFrom = null !== (UU = null === (XU = this.view()) || void 0 === XU ? void 0 : XU.version) && void 0 !== UU ? UU : vy
      }
      setPlayback(UU) {
        const XU = 1 === this.deps.core.PQU(UU);
        return XU && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = vy, this.reloadFrom = vy), XU
      }
      async open(UU, XU) {
        const zU = await this.deps.replay.open(UU, XU);
        return "opening" === zU && (this.reloadKeyframes(), this.deps.recorder.prefetch()), zU
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(UU)), XU)
      }
      setSpeed(UU) {
        this.deps.replay.setSpeed(UU)
      }
      setCameraMode(UU) {
        this.deps.replay.setCameraMode(My.d.indexOf(UU))
      }
      view() {
        var UU;
        const XU = pU.w.replayViewPtr(this.deps.apiView(), 0);
        if (0 === XU) return this.lastView = null, null;
        const zU = new DataView(this.deps.buffer(), XU, pU.Ud.BYTES),
          cU = pU.Ud.version(zU, 0),
          yU = this.lastView;
        if (null !== yU && yU.version === cU) return yU;
        const QU = pU.Ud.markIn(zU, 0),
          AU = {
            version: cU,
            state: pU.Ud.state(zU, 0),
            cameraMode: null !== (UU = My.d[pU.Ud.cameraMode(zU, 0)]) && void 0 !== UU ? UU : "recording",
            LY: pU.Ud.LY(zU, 0),
            totalTicks: pU.Ud.totalTicks(zU, 0),
            speed: pU.Ud.speed(zU, 0),
            mark: QU === pU.Sd ? null : {
              inTick: QU,
              outTick: pU.Ud.markOut(zU, 0)
            },
            editVersion: pU.Ud.editVersion(zU, 0)
          };
        return this.lastView = AU, AU
      }
      keyframes() {
        const UU = this.view();
        if (null === UU) return [];
        UU.version !== this.reloadFrom && (this.reloadFrom = vy);
        const XU = this.reloadFrom === vy && UU.state !== NU.od.Cropping && UU.state !== NU.od.None,
          zU = XU ? UU.editVersion : UU.version;
        if (zU === this.keyframesVersion && XU === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: cU
        } = this.deps, yU = cU.WQU(), QU = cU.Kt(), AU = [];
        if (0 !== QU && yU > 0) {
          const UU = new DataView(this.deps.buffer(), QU, yU * NU.sc);
          for (let XU = 0; XU < yU; XU++) {
            const zU = XU * NU.sc,
              cU = XU => UU.getFloat64(zU + XU, !0);
            AU.push({
              LY: UU.getUint32(zU + NU.Bc, !0),
              position: [cU(NU.Ac), cU(NU.Ac + 8), cU(NU.Ac + 16)],
              direction: [cU(NU.uc), cU(NU.uc + 8), cU(NU.uc + 16)],
              easing: [cU(NU.wc), cU(NU.wc + 8), cU(NU.wc + 16), cU(NU.wc + 24)]
            })
          }
        }
        return this.keyframesVersion = zU, this.keyframesSettled = XU, this.lastKeyframes = AU, AU
      }
      addKeyframe() {
        const UU = this.deps.apiView(),
          XU = [pU.w.eye(UU, 0, 0), pU.w.eye(UU, 0, 1), pU.w.eye(UU, 0, 2)];
        return this.deps.replay.addKeyframe(XU, function(UU, XU) {
          const zU = Math.cos(XU);
          return [zU * Math.sin(UU), -Math.sin(XU), zU * Math.cos(UU)]
        }(pU.w.heading(UU, 0), pU.w.pitch(UU, 0)))
      }
      setKeyframe(UU) {
        return this.deps.replay.setKeyframe(UU.LY, Float64Array.from([...UU.position, ...UU.direction, ...UU.easing]))
      }
      moveKeyframe(UU, XU) {
        return this.deps.replay.moveKeyframe(UU, XU)
      }
      deleteKeyframes(UU, XU) {
        return this.deps.replay.deleteKeyframes(UU, XU)
      }
      setMark(UU) {
        var XU, zU;
        return this.deps.replay.setMark(null !== (XU = null === UU || void 0 === UU ? void 0 : UU.inTick) && void 0 !== XU ? XU : -1, null !== (zU = null === UU || void 0 === UU ? void 0 : UU.outTick) && void 0 !== zU ? zU : -1)
      }
      crop(UU, XU) {
        const zU = this.deps.replay.crop(UU, XU);
        return zU && this.reloadKeyframes(), zU
      }
      save(UU) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(UU)
      }
      recorderControl(UU) {
        this.deps.recorder.control(UU)
      }
      recorderPrefs(UU, XU) {
        this.deps.recorder.prefs(UU, XU)
      }
      recorderOption(UU, XU) {
        const zU = this.deps.cmd();
        return null !== zU && (0, pU.Cf)(zU, 0, UU, null === XU ? Vy : sy.encode(XU))
      }
      recordFlyingText(UU, XU, zU, cU) {
        const yU = this.deps.cmd(),
          QU = Math.max(0, Math.min(4294967295, Math.round(cU)));
        return null !== yU && (0, pU.yf)(yU, 0, XU, zU, QU, sy.encode(UU))
      }
      recordPlayerKilled(UU, XU, zU, cU) {
        const yU = this.deps.cmd();
        return null !== yU && (0, pU.Gf)(yU, 0, UU, XU, Math.max(0, zU), sy.encode(cU))
      }
      recordKillfeed(UU, XU, zU) {
        var cU, yU;
        const QU = this.deps.cmd(),
          AU = function(UU) {
            const XU = UU.reduce(((UU, XU) => {
                var zU;
                return UU + Ac.zb + (null !== (zU = null === XU || void 0 === XU ? void 0 : XU.byteLength) && void 0 !== zU ? zU : 0)
              }), 0),
              zU = new Uint8Array(XU),
              cU = new DataView(zU.buffer);
            let yU = 0;
            for (const AU of UU) {
              var QU;
              cU.setUint16(yU, null !== (QU = null === AU || void 0 === AU ? void 0 : AU.byteLength) && void 0 !== QU ? QU : NU.Cc, !0), yU += Ac.zb, null !== AU && (zU.set(AU, yU), yU += AU.byteLength)
            }
            return zU
          }([ny(UU.name), ny(UU.colour), ny(XU.name), ny(XU.colour), ny(zU)]);
        return null !== QU && (0, pU.Af)(QU, 0, null !== (cU = UU.id) && void 0 !== cU ? cU : pU.ad, null !== (yU = XU.id) && void 0 !== yU ? yU : pU.ad, AU)
      }
      recorderSession(UU, XU) {
        this.deps.recorder.session({
          session: XU,
          lobbyType: UU.lobbyType,
          game: UU.gameNameWithVariation,
          lobby: UU.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.dQU()
      }
      filePartDone(UU, XU) {
        this.deps.recorder.filePartDone(UU, XU)
      }
      fileDone(UU) {
        this.deps.recorder.fileDone(UU)
      }
    }
    const ly = -2147483648;
    class xy {
      constructor(UU) {
        var XU;
        this.deps = UU, this.state = pc.e, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (XU = UU.now) && void 0 !== XU ? XU : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var UU, XU, zU;
        return null === (UU = null === (XU = (zU = this.deps).live) || void 0 === XU ? void 0 : XU.call(zU)) || void 0 === UU || UU
      }
      activated(UU) {
        var XU, zU;
        this.live && (this.viewerShown(!0 === (null === (XU = (zU = this.deps).viewerOpen) || void 0 === XU ? void 0 : XU.call(zU))), this.deps.client.recorderSession(UU, (0, My.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var UU, XU;
        this.live && (this.state.recording || !0 !== (null === (UU = (XU = this.deps).viewerOpen) || void 0 === UU ? void 0 : UU.call(XU))) ? this.deps.client.recorderControl(NU.Xc.ToggleRecording) : this.deps.notify(fy.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(NU.Xc.SaveClip) : this.deps.notify(fy.e.clippingNotOn)
      }
      viewerShown(UU) {
        this.live && this.deps.client.recorderControl(UU ? NU.Xc.ViewerOpened : NU.Xc.ViewerClosed)
      }
      setPrefs(UU, XU) {
        this.live && this.deps.client.recorderPrefs(UU, XU)
      }
      setOption(UU, XU) {
        this.live && this.deps.client.recorderOption(UU, XU)
      }
      recordFlyingText(UU, XU, zU, cU) {
        this.live && this.deps.client.recordFlyingText(UU, XU, zU, cU)
      }
      recordPlayerKilled(UU, XU, zU, cU) {
        this.live && this.deps.client.recordPlayerKilled(UU, XU, zU, cU)
      }
      recordKillfeed(UU, XU, zU) {
        this.live && this.deps.client.recordKillfeed(UU, XU, zU)
      }
      LY() {
        let UU = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, UU = {
            ...UU,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const XU = Math.floor((this.now() - this.recordingSince) / 1e3);
          XU !== UU.seconds && (UU = {
            ...UU,
            seconds: XU
          })
        }
        this.set(UU)
      }
      onEvent(UU) {
        var XU, zU;
        const {
          notify: cU
        } = this.deps, yU = fy.e;
        switch (UU.what) {
          case NU.Tc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), cU(yU.recordingStarted);
            break;
          case NU.Tc.RecordingStopped:
            this.stopRecording(), cU(yU.recordingStopped), this.saveState(NU.ed.Recording, "saving");
            break;
          case NU.Tc.RecordingDiscarded:
            this.stopRecording(), cU(yU.recordingDiscarded);
            break;
          case NU.Tc.RecordingTurnedOff:
            this.stopRecording(), cU(yU.recordingTurnedOff);
            break;
          case NU.Tc.LimitReached:
            cU(yU.limitReached);
            break;
          case NU.Tc.ClipSaved:
            this.saveState(NU.ed.Clip, "saving");
            break;
          case NU.Tc.ClipEmpty:
            cU(yU.clipEmpty);
            break;
          case NU.Tc.ClippingNotOn:
            cU(yU.clippingNotOn);
            break;
          case NU.Tc.Disallowed:
            cU(yU.disallowed);
            break;
          case NU.Tc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case NU.Tc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case NU.Tc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case NU.Tc.SaveBusy:
            null === (XU = (zU = this.deps).onSaveState) || void 0 === XU || XU.call(zU, UU.kind, "busy"), cU(yU.saveBusy);
            break;
          case NU.Tc.CloseViewerFirst:
            cU(yU.closeViewerFirst)
        }
      }
      fileReady(UU, XU) {
        this.deps.download(XU), this.saveState(UU, "done"), this.deps.notify(UU === NU.ed.Clip ? fy.e.clipSaved : fy.e.recordingSaved)
      }
      failed(UU) {
        this.saveState(UU, "failed"), this.deps.notify(UU === NU.ed.Clip ? fy.e.clipFailed : fy.e.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(pc.e)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(UU, XU) {
        var zU, cU;
        null === (zU = (cU = this.deps).onSaveState) || void 0 === zU || zU.call(cU, UU, XU)
      }
      set(UU) {
        UU !== this.state && (this.state = UU, this.deps.onState(UU))
      }
    }
    const Jy = new TextDecoder;

    function jy(UU, XU, zU, cU) {
      const yU = [];
      for (let QU = 0; QU < cU; QU++) {
        if (XU + Ac.zb > zU) return null;
        const cU = UU.getUint16(XU, !0);
        if (XU += Ac.zb, cU !== NU.Cc) {
          if (XU + cU > zU) return null;
          yU.push(Jy.decode(new Uint8Array(UU.buffer, UU.byteOffset + XU, cU))), XU += cU
        } else yU.push(null)
      }
      return XU === zU ? yU : null
    }

    function Ky(UU, XU) {
      let zU = new DataView(new ArrayBuffer(0)),
        cU = !0;
      const yU = {
        replayFailed: (XU, zU, cU) => {
          UU.replayFailed({
            reason: XU,
            code: zU,
            version: cU
          })
        },
        replayOption: (XU, yU, QU, AU) => {
          const FU = function(UU, XU, zU, cU) {
            switch (XU) {
              case NU.id.Cleared:
                return 0 === cU ? null : void 0;
              case NU.id.Text:
                return Jy.decode(new Uint8Array(UU.buffer, UU.byteOffset + zU, cU));
              case NU.id.Int:
                return cU === Int32Array.BYTES_PER_ELEMENT ? UU.getInt32(zU, !0) : void 0;
              case NU.id.Double:
                return cU === Float64Array.BYTES_PER_ELEMENT ? UU.getFloat64(zU, !0) : void 0;
              default:
                return
            }
          }(zU, yU, QU, AU);
          void 0 !== FU ? UU.replayOption({
            key: XU,
            value: FU
          }) : cU = !1
        },
        replayUiEvent: (XU, yU, QU, AU, FU, oU) => {
          const DU = function(UU, XU, zU, cU, yU, QU, AU) {
            const FU = QU + AU;
            switch (XU) {
              case NU.md.FlyingText: {
                const AU = jy(UU, QU, FU, 1);
                return null !== AU && null !== AU[0] ? {
                  what: XU,
                  mX: zU,
                  nX: cU,
                  angle: yU,
                  contentJson: AU[0]
                } : null
              }
              case NU.md.PlayerKilled: {
                const cU = jy(UU, QU, FU, 3);
                return cU ? {
                  what: XU,
                  killstreak: zU,
                  dead: cU[0],
                  killer: cU[1],
                  withItem: cU[2]
                } : null
              }
              case NU.md.Killfeed: {
                const zU = jy(UU, QU, FU, 7);
                return zU ? {
                  what: XU,
                  killerId: zU[0],
                  killerName: zU[1],
                  killerColour: zU[2],
                  victimId: zU[3],
                  victimName: zU[4],
                  victimColour: zU[5],
                  withItem: zU[6]
                } : null
              }
              default:
                return null
            }
          }(zU, XU, yU, QU, AU, FU, oU);
          null !== DU ? UU.replayUiEvent(DU) : cU = !1
        },
        replayFilePart: (zU, yU, QU, AU) => {
          const FU = XU();
          QU + AU > FU.byteLength ? cU = !1 : UU.filePart(zU, yU, new Uint8Array(FU, QU, AU).slice())
        },
        replayFileReady: (XU, zU, cU, yU) => {
          UU.fileReady({
            save: XU,
            kind: zU,
            parts: cU,
            bytes: yU
          })
        },
        recorderEvent: (XU, zU, cU) => {
          UU.recorderEvent({
            what: XU,
            kind: zU,
            save: cU
          })
        },
        replayOpened: (XU, cU, yU) => {
          UU.replayOpened(Jy.decode(new Uint8Array(zU.buffer, zU.byteOffset + cU, yU)))
        }
      };
      return (UU, XU, QU, AU) => !(UU < NU.W.ReplayFailed || UU > NU.W.RecorderEvent) && (zU = XU, cU = !0, (0, pU.pe)(UU, XU, QU, AU, yU) && cU)
    }

    function by(UU) {
      let XU = null;
      const zU = Ky(UU, (() => {
        if (null === XU) throw new Error("a recorder event read outside recorderEventReader's call");
        return XU.buffer
      }));
      return (UU, cU) => {
        XU = cU;
        try {
          ! function(UU, XU) {
            const zU = UU.slice(),
              cU = new DataView(zU.buffer);
            for (let yU = 0; yU < zU.byteLength;) {
              if (yU + NU.V > zU.byteLength) throw new Error(`the recorder module's events end mid-head at ${yU}`);
              const UU = cU.getUint32(yU, !0),
                QU = 65535 & UU,
                AU = UU >>> 16,
                FU = yU + NU.V;
              if (FU + AU > zU.byteLength || !XU(QU, cU, FU, AU)) throw new Error(`the recorder module wrote a malformed event ${QU} (${AU} bytes) at ${yU}`);
              yU = FU + (0, NU.De)(AU)
            }
          }(UU, zU)
        } finally {
          XU = null
        }
      }
    }
    class Ty {
      constructor(UU, XU) {
        this.acks = UU, this.handlers = XU, this.parts = new Map
      }
      onPart(UU, XU, zU) {
        let cU = this.parts.get(UU);
        cU || (cU = [], this.parts.set(UU, cU)), cU[XU] = zU, this.acks.filePartDone(UU, XU)
      }
      onReady(UU) {
        var XU;
        const zU = null !== (XU = this.parts.get(UU.save)) && void 0 !== XU ? XU : [];
        this.parts.delete(UU.save);
        const cU = function(UU, XU, zU) {
          if (UU.length !== XU) return null;
          let cU = 0;
          for (let AU = 0; AU < XU; AU++) {
            if (void 0 === UU[AU]) return null;
            cU += UU[AU].byteLength
          }
          if (cU !== zU) return null;
          if (1 === XU) return UU[0];
          const yU = new Uint8Array(zU);
          let QU = 0;
          for (const AU of UU) yU.set(AU, QU), QU += AU.byteLength;
          return yU
        }(zU, UU.parts, UU.bytes);
        this.acks.fileDone(UU.save), null === cU ? this.handlers.fileIncomplete(UU.save, UU.kind) : this.handlers.fileReady(UU.save, UU.kind, cU)
      }
      onDiscarded(UU) {
        this.parts.delete(UU)
      }
    }

    function hy() {
      return zU.e(72).then((() => zU(63283)))
    }
    class UQ {
      constructor(UU) {
        this.deps = UU, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: XU
        } = UU;
        this.recorder = new xy({
          client: XU,
          live: () => {
            var UU;
            return !0 !== (null === (UU = this.viewer) || void 0 === UU ? void 0 : UU.inPlayback)
          },
          viewerOpen: UU.viewerOpen,
          notify: UU.notify,
          download: XU => {
            var zU;
            null === (zU = UU.download) || void 0 === zU || zU.call(UU, XU)
          },
          onState: UU.onRecorderState,
          onSaveState: UU.onSaveState
        }), this.parts = new Ty(XU, {
          fileReady: (UU, XU, zU) => {
            var cU;
            XU === NU.ed.Edited ? null === (cU = this.viewer) || void 0 === cU || cU.saveDone(zU) : this.recorder.fileReady(XU, zU)
          },
          fileIncomplete: (UU, XU) => {
            this.saveFailed(XU)
          }
        });
        const zU = {
          replayFailed: UU => {
            var XU;
            null === (XU = this.viewer) || void 0 === XU || XU.onFailed(UU)
          },
          replayOption: XU => {
            var zU;
            null === (zU = UU.onReplayOption) || void 0 === zU || zU.call(UU, XU)
          },
          replayUiEvent: XU => {
            var zU;
            null === (zU = UU.onReplayUiEvent) || void 0 === zU || zU.call(UU, XU)
          },
          filePart: (UU, XU, zU) => {
            this.parts.onPart(UU, XU, zU)
          },
          fileReady: UU => {
            this.parts.onReady(UU)
          },
          replayOpened: XU => {
            var zU;
            null === (zU = UU.onReplayOpened) || void 0 === zU || zU.call(UU, XU)
          },
          recorderEvent: UU => {
            var XU;
            switch (UU.what) {
              case NU.Tc.FileDiscarded:
                this.parts.onDiscarded(UU.save);
                break;
              case NU.Tc.SaveFailed:
                this.saveFailed(UU.kind);
                break;
              case NU.Tc.SaveBusy:
                if (null !== (XU = this.viewer) && void 0 !== XU && XU.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(UU);
                break;
              default:
                this.recorder.onEvent(UU)
            }
          }
        };
        this.sink = function(UU, XU) {
          return {
            onReplayEvent: Ky(UU, XU)
          }
        }(zU, UU.buffer), this.recorderEvents = by(zU)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var UU;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (UU = this.deps.loadViewer) && void 0 !== UU ? UU : hy)().catch((UU => {
          throw this.viewerChunk = null, UU
        })), this.viewerChunk.then((UU => (this.viewer ??= new UU.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var UU, XU;
            null === (UU = (XU = this.deps).onViewerChange) || void 0 === UU || UU.call(XU)
          }
        }), this.viewer))))
      }
      activated(UU) {
        this.recorder.activated(UU)
      }
      afterFrame(UU) {
        try {
          UU > 0 && this.recorder.LY()
        } finally {
          var XU;
          null === (XU = this.viewer) || void 0 === XU || XU.afterFrame()
        }
      }
      end() {
        var UU;
        null === (UU = this.viewer) || void 0 === UU || UU.end()
      }
      saveFailed(UU) {
        var XU;
        UU === NU.ed.Edited ? null === (XU = this.viewer) || void 0 === XU || XU.saveFailed(!1) : this.recorder.failed(UU)
      }
    }
    var XQ = zU(41680),
      zQ = zU(41695),
      cQ = zU(5329),
      yQ = zU(42018);
    class QQ {
      constructor(UU) {
        this.deps = UU, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(UU, XU) {
        if (!this.deps.live() || 0 === UU && 0 === XU) return;
        const zU = (0, MU.v)(0, performance.now()),
          cU = this.deps.dragScale();
        (0, yQ.g)((() => {
          (0, MU.C)(NU.tb.MouseDown, 0, 0, 0, zU), (0, MU.C)(NU.tb.MouseMove, 0, UU * cU, XU * cU, 0), (0, MU.C)(NU.tb.MouseUp, 0, 0, 0, zU)
        }))
      }
      move(UU) {
        var XU, zU;
        this.analogue[0] = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.x) && void 0 !== XU ? XU : 0, this.analogue[1] = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.y) && void 0 !== zU ? zU : 0, this.send()
      }
      holdVertical(UU, XU) {
        const zU = "freeCamUp" === UU ? pU.bc.Up : pU.bc.Down;
        this.keys = XU ? this.keys | zU : this.keys & ~zU, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const UU = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== UU && !(0, pU.Ke)(UU, 0, this.analogue, this.keys)
      }
    }
    var AQ = zU(3958),
      FQ = zU(781),
      oQ = zU(287),
      DQ = zU(97),
      EQ = zU(34791),
      YQ = zU(762),
      NQ = zU(37311);

    function IQ() {
      const UU = cU.e.get("clientEscMenuOptions"),
        XU = (0, FQ.s)(UU);
      return {
        mouse: (0, DQ.isMobile)() ? XU : UU.mouseSensitivity,
        touch: XU,
        fovPercent: UU.cameraFOV
      }
    }

    function pQ() {
      const UU = cU.e.get("clientEscMenuOptions"),
        XU = cU.e.get("isTouchScreen") ? (0, FQ.s)(UU) : UU.mouseSensitivity,
        zU = IQ().mouse;
      return zU > 0 ? XU / zU : 1
    }

    function aQ(UU) {
      const XU = () => {
        UU.setSoundPrefs(cU.e.get("soundVolume"), cU.e.get("soundOnFromAd"))
      };
      let zU = null;
      const yU = () => {
        const {
          showFog: XU,
          enableLighting: yU,
          fogChunkDistance: QU,
          chunkFadeIn: AU
        } = cU.e.get("clientEscMenuOptions"), FU = {
          showFog: XU,
          lighting: yU,
          fogChunks: QU,
          chunkFade: AU,
          cellLight: (0, AQ.j)("cellLight") ? (0, AQ.j)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        zU && (0, NU.le)(zU) === (0, NU.le)(FU) && zU.fogChunks === QU || (zU = FU, UU.setEnvPrefs(zU))
      };
      let QU = null;
      const FU = () => {
        const XU = function() {
          const UU = cU.e.get("clientEscMenuOptions");
          return {
            nametagsHidden: cU.e.get("areNametagsHidden"),
            crouchToggle: UU.crouchIsToggle,
            bhopDisabled: UU.disableBunnyHopping,
            disableBobbing: UU.disableBobbing,
            ezTowering: UU.ezTowering ? (0, oQ.f)() : null,
            ezBridging: UU.ezBridging,
            showChunkBorders: UU.showChunkBorders,
            touchWalk: !(0, NQ.g)(),
            edgeGuard: UU.touchEdgeGuard,
            edgeGuardLong: (0, YQ.d)(),
            nametagCutDistance: (0, EQ.h)()
          }
        }();
        (0, eU.oe)(QU, XU) || (QU = XU, UU.setUiPrefs(XU))
      };
      let oU = null;
      const DU = () => {
        const XU = IQ();
        (0, eU.oe)(oU, XU) || (oU = XU, UU.setLookPrefs(XU))
      };
      XU(), yU(), FU(), DU();
      const EU = [(0, AU.n)("appManagerUpdated|soundVolume", XU), (0, AU.n)("appManagerUpdated|soundOnFromAd", XU), (0, AU.n)("appManagerUpdated|clientEscMenuOptions", (() => {
        yU(), FU(), DU()
      })), (0, AU.n)(NQ.c, FU), (0, AU.n)("appManagerUpdated|enabledDebugFeatures", yU), (0, AU.n)("appManagerUpdated|areNametagsHidden", FU), (0, AU.n)("appManagerUpdated|showDistantNametags", FU)];
      return () => {
        for (const UU of EU) UU()
      }
    }
    var tQ = zU(41990),
      gQ = zU(41999);
    var kQ = (0, gQ.e)("lend"),
      GQ = (0, gQ.e)("starting"),
      BQ = (0, gQ.e)("generation"),
      ZQ = (0, gQ.e)("end");
    class RQ {
      constructor(UU) {
        this.deps = UU, Object.defineProperty(this, ZQ, {
          value: PQ
        }), Object.defineProperty(this, kQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, BQ, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, tQ.d)(this, kQ)[kQ] || (0, tQ.d)(this, GQ)[GQ]
      }
      async start(UU) {
        if (this.active) return "busy";
        const XU = (0, tQ.d)(this, BQ)[BQ];
        (0, tQ.d)(this, GQ)[GQ] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, tQ.d)(this, GQ)[GQ] = !1
        }
        if (XU !== (0, tQ.d)(this, BQ)[BQ]) return "refused";
        const zU = this.deps.beginSave();
        if (!zU) return "refused";
        const cU = Number(BigInt.asUintN(32, UU)),
          yU = Number(BigInt.asUintN(32, UU >> 32n));
        let QU = "refused";
        return this.deps.recorderCall(((UU, XU) => {
          const AU = zU.editState,
            FU = UU.stage(AU.length);
          0 !== FU ? (new Uint8Array(XU.buffer, FU, AU.length).set(AU), UU.LQU(zU.headLen, cU, yU) && (QU = "sealing")) : QU = "tooLarge"
        }), !0), "sealing" !== QU ? (zU.end(), QU) : ((0, tQ.d)(this, kQ)[kQ] = zU, "sealing")
      }
      beforeRecorderStep() {
        const UU = (0, tQ.d)(this, kQ)[kQ];
        if (!UU) return null;
        let XU = -1,
          zU = 0;
        if (!this.deps.recorderCall((UU => {
            XU = UU.eQU(), XU > 0 && (zU = UU.CQU())
          }))) return (0, tQ.d)(this, ZQ)[ZQ](UU, "stopped");
        if (XU < 0) return (0, tQ.d)(this, ZQ)[ZQ](UU, "read");
        if (0 === XU) return null;
        const cU = UU.head(zU, XU);
        let yU = !1;
        if (cU && this.deps.recorderCall(((UU, zU) => {
            const QU = UU.stage(XU);
            0 !== QU && (new Uint8Array(zU.buffer, QU, XU).set(cU), yU = !0)
          }), !0), yU) return null;
        const QU = UU.givenUp();
        this.deps.recorderCall((UU => {
          UU.wQU()
        }));
        const AU = (0, tQ.d)(this, ZQ)[ZQ](UU, QU ? "givenUp" : "stopped");
        return QU && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), AU
      }
      stop() {
        (0, tQ.d)(this, BQ)[BQ]++;
        const UU = (0, tQ.d)(this, kQ)[kQ];
        UU && (this.deps.recorderCall((UU => {
          UU.wQU()
        })), (0, tQ.d)(this, ZQ)[ZQ](UU, "stopped"))
      }
    }

    function PQ(UU, XU) {
      return (0, tQ.d)(this, kQ)[kQ] = null, UU.end(), XU
    }

    function WQ(UU, XU) {
      const zU = new Uint8Array(4),
        cU = new DataView(zU.buffer);
      return cU.setUint8(0, UU ? 1 : 0), cU.setUint16(2, Math.max(0, Math.min(65535, Math.round(XU))), !0), zU
    }

    function dQ(UU, XU) {
      return UU > function(UU) {
        return 16777216 + 314572.8 * Math.max(0, UU)
      }(XU) + 33554432
    }
    let LQ = null;

    function eQ(UU) {
      return LQ ??= async function(UU) {
        const XU = UU.loadInFlight();
        XU && await XU.catch((() => {}));
        if (UU.trapped()) return "trapped";
        if (UU.busy() || !dQ(UU.memoryBytes(), UU.clipSeconds())) return "cY";
        UU.unload();
        let zU = !1;
        try {
          zU = await UU.load()
        } catch {
          zU = !1
        }
        if (!zU) return UU.trapped() ? "trapped" : UU.kp() ? "kp" : "failed";
        return "recycled"
      }(UU).finally((() => {
        LQ = null
      })), LQ
    }
    const CQ = "Replay recording couldn't load, so try again.",
      wQ = "Replay recording stopped working, so reload the page to record replays again.",
      qQ = new Set([NU.Xc.ToggleRecording, NU.Xc.SaveClip]);
    var OQ = (0, gQ.e)("bindings"),
      SQ = (0, gQ.e)("module"),
      rQ = (0, gQ.e)("memory"),
      uQ = (0, gQ.e)("trapped"),
      fQ = (0, gQ.e)("kp"),
      iQ = (0, gQ.e)("recycleDue"),
      HQ = (0, gQ.e)("loading"),
      MQ = (0, gQ.e)("generation"),
      vQ = (0, gQ.e)("viewDrawn"),
      VQ = (0, gQ.e)("clip"),
      sQ = (0, gQ.e)("session"),
      nQ = (0, gQ.e)("control"),
      mQ = (0, gQ.e)("deferred"),
      lQ = (0, gQ.e)("coreU8"),
      xQ = (0, gQ.e)("coreU32"),
      JQ = (0, gQ.e)("moduleU8"),
      jQ = (0, gQ.e)("edited"),
      KQ = (0, gQ.e)("sendSession"),
      bQ = (0, gQ.e)("checkNotInEvents"),
      TQ = (0, gQ.e)("clipping"),
      hQ = (0, gQ.e)("busy"),
      UA = (0, gQ.e)("use"),
      XA = (0, gQ.e)("ensureLoaded"),
      zA = (0, gQ.e)("loadOnce"),
      cA = (0, gQ.e)("recycleAfterStep"),
      yA = (0, gQ.e)("settleRecycle"),
      QA = (0, gQ.e)("load"),
      AA = (0, gQ.e)("attach"),
      FA = (0, gQ.e)("resendHeld"),
      oA = (0, gQ.e)("recycle"),
      DA = (0, gQ.e)("send"),
      EA = (0, gQ.e)("unload"),
      YA = (0, gQ.e)("dropModule"),
      NA = (0, gQ.e)("coreBytes"),
      IA = (0, gQ.e)("coreWords"),
      pA = (0, gQ.e)("moduleBytes"),
      aA = (0, gQ.e)("loadFailed"),
      tA = (0, gQ.e)("call"),
      gA = (0, gQ.e)("guard"),
      kA = (0, gQ.e)("trapOn");
    class GA {
      constructor(UU) {
        this.deps = UU, Object.defineProperty(this, kA, {
          value: nA
        }), Object.defineProperty(this, gA, {
          value: sA
        }), Object.defineProperty(this, tA, {
          value: VA
        }), Object.defineProperty(this, aA, {
          value: vA
        }), Object.defineProperty(this, pA, {
          value: MA
        }), Object.defineProperty(this, IA, {
          value: HA
        }), Object.defineProperty(this, NA, {
          value: iA
        }), Object.defineProperty(this, YA, {
          value: fA
        }), Object.defineProperty(this, EA, {
          value: uA
        }), Object.defineProperty(this, DA, {
          value: rA
        }), Object.defineProperty(this, oA, {
          value: SA
        }), Object.defineProperty(this, FA, {
          value: OA
        }), Object.defineProperty(this, AA, {
          value: qA
        }), Object.defineProperty(this, QA, {
          value: wA
        }), Object.defineProperty(this, yA, {
          value: CA
        }), Object.defineProperty(this, cA, {
          value: eA
        }), Object.defineProperty(this, zA, {
          value: LA
        }), Object.defineProperty(this, XA, {
          value: dA
        }), Object.defineProperty(this, UA, {
          value: WA
        }), Object.defineProperty(this, hQ, {
          value: PA
        }), Object.defineProperty(this, TQ, {
          value: RA
        }), Object.defineProperty(this, bQ, {
          value: ZA
        }), Object.defineProperty(this, KQ, {
          value: BA
        }), Object.defineProperty(this, OQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, fQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, iQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MQ, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, vQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, VQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jQ, {
          writable: !0,
          value: void 0
        }), (0, tQ.d)(this, jQ)[jQ] = new RQ({
          ensureLoaded: () => (0, tQ.d)(this, XA)[XA](),
          recorderCall: (UU, XU) => {
            XU && (0, tQ.d)(this, bQ)[bQ]("an edited save's stage");
            const zU = (0, tQ.d)(this, tA)[tA](((XU, zU) => (UU(XU, zU), !0)));
            return null !== zU && void 0 !== zU && zU
          },
          beginSave: UU.beginSave,
          givenUp: UU.givenUp
        })
      }
      get active() {
        return null !== (0, tQ.d)(this, SQ)[SQ]
      }
      get trapped() {
        return (0, tQ.d)(this, uQ)[uQ]
      }
      get loading() {
        return null !== (0, tQ.d)(this, HQ)[HQ]
      }
      prefetch() {
        (0, tQ.d)(this, fQ)[fQ] || (0, tQ.d)(this, uQ)[uQ] || (0, tQ.d)(this, SQ)[SQ] || (0, tQ.d)(this, HQ)[HQ] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, tQ.d)(this, vQ)[vQ] = !0, (0, tQ.d)(this, TQ)[TQ]() && (0, tQ.d)(this, UA)[UA]()
      }
      prefs(UU, XU) {
        (0, tQ.d)(this, VQ)[VQ] = {
          on: UU,
          seconds: XU
        }, (0, tQ.d)(this, DA)[DA](NU.Rc.Prefs, WQ(UU, XU)), UU && (0, tQ.d)(this, vQ)[vQ] && (0, tQ.d)(this, UA)[UA]()
      }
      control(UU) {
        const XU = function(UU) {
          return new Uint8Array([UU, 0, 0, 0])
        }(UU);
        if (qQ.has(UU)) {
          if (!(0, tQ.d)(this, uQ)[uQ]) return (0, tQ.d)(this, SQ)[SQ] ? void(0, tQ.d)(this, DA)[DA](NU.Rc.Control, XU) : ((0, tQ.d)(this, nQ)[nQ] = XU, void(0, tQ.d)(this, UA)[UA]());
          this.deps.failed(wQ)
        } else(0, tQ.d)(this, fQ)[fQ] || this.deps.coreCommand(NU.Rc.Control, XU)
      }
      session(UU) {
        (0, tQ.d)(this, sQ)[sQ] = UU, (0, tQ.d)(this, KQ)[KQ](UU)
      }
      filePartDone(UU, XU) {
        (0, tQ.d)(this, DA)[DA](NU.Rc.FilePartDone, function(UU, XU) {
          const zU = new Uint8Array(8),
            cU = new DataView(zU.buffer);
          return cU.setUint32(0, UU, !0), cU.setUint32(4, XU, !0), zU
        }(UU, XU))
      }
      fileDone(UU) {
        return (0, tQ.d)(this, DA)[DA](NU.Rc.FileDone, function(UU) {
          const XU = new Uint8Array(4);
          return new DataView(XU.buffer).setUint32(0, UU, !0), XU
        }(UU)), (0, tQ.d)(this, cA)[cA]()
      }
      saveEdited(UU) {
        return (0, tQ.d)(this, bQ)[bQ]("saveEdited"), (0, tQ.d)(this, jQ)[jQ].start(UU)
      }
      afterFrame() {
        if (!(0, tQ.d)(this, SQ)[SQ]) return;
        "read" === (0, tQ.d)(this, jQ)[jQ].beforeRecorderStep() && (0, tQ.d)(this, cA)[cA]();
        const UU = (0, tQ.d)(this, iQ)[iQ];
        (0, tQ.d)(this, iQ)[iQ] = null;
        const XU = (0, tQ.d)(this, SQ)[SQ],
          zU = (0, tQ.d)(this, rQ)[rQ];
        if (!XU || !zU) return void(null === UU || void 0 === UU || UU.resolve((0, tQ.d)(this, uQ)[uQ] ? "trapped" : "cY"));
        const {
          core: cU
        } = this.deps, yU = cU.SQU(2);
        let QU, AU, FU, oU, DU = 0,
          EU = 0;
        if (0 !== yU) {
          var YU, NU;
          const UU = (0, tQ.d)(this, IA)[IA]();
          DU = null !== (YU = UU[yU >>> 2]) && void 0 !== YU ? YU : 0, EU = null !== (NU = UU[1 + (yU >>> 2)]) && void 0 !== NU ? NU : 0
        }
        try {
          if (EU > 0) {
            const UU = XU.feed(EU);
            0 !== UU && (0, tQ.d)(this, pA)[pA](zU).set((0, tQ.d)(this, NA)[NA]().subarray(DU, DU + EU), UU)
          }
          QU = XU.step(), AU = XU.rQU(), FU = XU.uQU(), oU = XU.fQU()
        } catch (IU) {
          if (!(0, tQ.d)(this, kA)[kA](IU)) throw null === UU || void 0 === UU || UU.resolve("cY"), IU;
          return void(null === UU || void 0 === UU || UU.resolve("trapped"))
        }
        if (QU > 0) {
          const UU = cU.iQU(2, QU);
          0 !== UU && (0, tQ.d)(this, NA)[NA]().set((0, tQ.d)(this, pA)[pA](zU).subarray(AU, AU + QU), UU)
        }
        if (FU > 0) {
          (0, tQ.d)(this, mQ)[mQ] = [];
          try {
            this.deps.events(new Uint8Array(zU.buffer, oU, FU), zU)
          } catch (IU) {
            throw null === UU || void 0 === UU || UU.resolve("cY"), IU
          } finally {
            const UU = (0, tQ.d)(this, mQ)[mQ];
            (0, tQ.d)(this, mQ)[mQ] = null;
            for (const [XU, zU] of UU)(0, tQ.d)(this, DA)[DA](XU, zU)
          }
        }
        if (!(0, tQ.d)(this, TQ)[TQ]() && !(0, tQ.d)(this, hQ)[hQ]()) return (0, tQ.d)(this, EA)[EA](), void(null === UU || void 0 === UU || UU.resolve("cY"));
        null === UU || void 0 === UU || UU.resolve((0, tQ.d)(this, oA)[oA]())
      }
      dispose() {
        (0, tQ.d)(this, fQ)[fQ] = !0, (0, tQ.d)(this, EA)[EA]()
      }
    }

    function BA(UU) {
      (0, tQ.d)(this, DA)[DA](NU.Rc.Session, function(UU) {
        const XU = new TextEncoder,
          zU = XU.encode(UU.game).subarray(0, 65535),
          cU = XU.encode(UU.lobby).subarray(0, 65535),
          yU = new Uint8Array(22 + zU.length + 2 + cU.length),
          QU = new DataView(yU.buffer);
        QU.setFloat64(0, UU.unixMs, !0), QU.setBigUint64(8, BigInt.asUintN(64, UU.session), !0), QU.setUint8(16, UU.lobbyType);
        let AU = 20;
        for (const FU of [zU, cU]) QU.setUint16(AU, FU.length, !0), yU.set(FU, AU + 2), AU += 2 + FU.length;
        return yU
      }({
        ...UU,
        unixMs: this.deps.unixNow()
      }))
    }

    function ZA(UU) {
      false
    }

    function RA() {
      var UU, XU;
      return null !== (UU = null === (XU = (0, tQ.d)(this, VQ)[VQ]) || void 0 === XU ? void 0 : XU.on) && void 0 !== UU && UU
    }

    function PA() {
      const UU = (0, tQ.d)(this, SQ)[SQ];
      let XU = !0;
      if (UU) try {
        XU = UU.busy()
      } catch (zU) {
        if (!(0, tQ.d)(this, kA)[kA](zU)) throw zU
      }
      return XU || (0, tQ.d)(this, jQ)[jQ].active
    }
    async function WA() {
      !(0, tQ.d)(this, fQ)[fQ] && this.deps.allowed() ? await (0, tQ.d)(this, XA)[XA]() : (0, tQ.d)(this, nQ)[nQ] = null
    }

    function dA() {
      return (0, tQ.d)(this, uQ)[uQ] || (0, tQ.d)(this, fQ)[fQ] ? Promise.resolve(!1) : (0, tQ.d)(this, SQ)[SQ] ? Promise.resolve(!0) : ((0, tQ.d)(this, HQ)[HQ] ??= (0, tQ.d)(this, zA)[zA](), (0, tQ.d)(this, HQ)[HQ])
    }
    async function LA() {
      let UU = !1;
      try {
        return UU = await (0, tQ.d)(this, QA)[QA](), UU
      } finally {
        UU || ((0, tQ.d)(this, nQ)[nQ] = null), (0, tQ.d)(this, HQ)[HQ] = null
      }
    }

    function eA() {
      if (!(0, tQ.d)(this, SQ)[SQ]) return Promise.resolve((0, tQ.d)(this, uQ)[uQ] ? "trapped" : "cY");
      if (!(0, tQ.d)(this, iQ)[iQ]) {
        let UU = () => {};
        const XU = new Promise((XU => {
          UU = XU
        }));
        (0, tQ.d)(this, iQ)[iQ] = {
          promise: XU,
          resolve: UU
        }
      }
      return (0, tQ.d)(this, iQ)[iQ].promise
    }

    function CA(UU) {
      const XU = (0, tQ.d)(this, iQ)[iQ];
      (0, tQ.d)(this, iQ)[iQ] = null, null === XU || void 0 === XU || XU.resolve(UU)
    }
    async function wA() {
      let UU = (0, tQ.d)(this, OQ)[OQ];
      if (!UU) {
        const XU = (0, tQ.d)(this, MQ)[MQ];
        try {
          UU = await this.deps.load()
        } catch (zU) {
          return XU === (0, tQ.d)(this, MQ)[MQ] && await (0, tQ.d)(this, aA)[aA](zU), !1
        }
        if (XU !== (0, tQ.d)(this, MQ)[MQ]) return this.deps.unload(), !1;
        const cU = UU,
          yU = (0, tQ.d)(this, gA)[gA]((() => cU.HQU()));
        if (void 0 === yU) return !1;
        const QU = this.deps.core.MQU();
        if (yU !== QU) return await (0, tQ.d)(this, aA)[aA](new Error(`recorder port version ${yU}, the core's ${QU}`)), !1;
        (0, tQ.d)(this, OQ)[OQ] = UU
      }
      const XU = UU;
      try {
        if (!(0, tQ.d)(this, gA)[gA]((() => ((0, tQ.d)(this, SQ)[SQ] = new XU.vQU, (0, tQ.d)(this, rQ)[rQ] = XU.qQU(), !0)))) return !1;
        (0, tQ.d)(this, FA)[FA]();
        const UU = (0, tQ.d)(this, nQ)[nQ];
        return (0, tQ.d)(this, nQ)[nQ] = null, UU && (0, tQ.d)(this, DA)[DA](NU.Rc.Control, UU), (0, tQ.d)(this, AA)[AA]()
      } catch (zU) {
        return (0, tQ.d)(this, EA)[EA](), await (0, tQ.d)(this, aA)[aA](zU), !1
      }
    }

    function qA() {
      return this.deps.core.VQU(0), 1 === this.deps.core.VQU(1) || ((0, tQ.d)(this, EA)[EA](), this.deps.failed(CQ), !1)
    }

    function OA() {
      (0, tQ.d)(this, VQ)[VQ] && (0, tQ.d)(this, DA)[DA](NU.Rc.Prefs, WQ((0, tQ.d)(this, VQ)[VQ].on, (0, tQ.d)(this, VQ)[VQ].seconds)), (0, tQ.d)(this, sQ)[sQ] && (0, tQ.d)(this, KQ)[KQ]((0, tQ.d)(this, sQ)[sQ])
    }

    function SA() {
      return eQ({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var UU, XU;
          return null !== (UU = null === (XU = (0, tQ.d)(this, VQ)[VQ]) || void 0 === XU ? void 0 : XU.seconds) && void 0 !== UU ? UU : 0
        },
        trapped: () => (0, tQ.d)(this, uQ)[uQ],
        busy: () => (0, tQ.d)(this, hQ)[hQ](),
        loadInFlight: () => (0, tQ.d)(this, HQ)[HQ],
        kp: () => (0, tQ.d)(this, fQ)[fQ],
        unload: () => {
          (0, tQ.d)(this, EA)[EA]()
        },
        load: () => (0, tQ.d)(this, XA)[XA]()
      })
    }

    function rA(UU, XU) {
      (0, tQ.d)(this, mQ)[mQ] ? (0, tQ.d)(this, mQ)[mQ].push([UU, XU]): (0, tQ.d)(this, tA)[tA](((zU, cU) => {
        const yU = zU.OQU(XU.length);
        0 !== yU && (new Uint8Array(cU.buffer, yU, XU.length).set(XU), zU.command(UU, XU.length))
      }))
    }

    function uA() {
      (0, tQ.d)(this, MQ)[MQ]++, (0, tQ.d)(this, yA)[yA]("cY"), (0, tQ.d)(this, jQ)[jQ].stop(), this.deps.core.VQU(0), (0, tQ.d)(this, YA)[YA](), (0, tQ.d)(this, uQ)[uQ] || ((0, tQ.d)(this, OQ)[OQ] = null, this.deps.unload())
    }

    function fA() {
      (0, tQ.d)(this, tA)[tA]((UU => {
        UU.free()
      })), (0, tQ.d)(this, SQ)[SQ] = null, (0, tQ.d)(this, rQ)[rQ] = null, (0, tQ.d)(this, JQ)[JQ] = null
    }

    function iA() {
      var UU;
      const XU = this.deps.coreBuffer();
      return (null === (UU = (0, tQ.d)(this, lQ)[lQ]) || void 0 === UU ? void 0 : UU.buffer) !== XU && ((0, tQ.d)(this, lQ)[lQ] = new Uint8Array(XU)), (0, tQ.d)(this, lQ)[lQ]
    }

    function HA() {
      var UU;
      const XU = this.deps.coreBuffer();
      return (null === (UU = (0, tQ.d)(this, xQ)[xQ]) || void 0 === UU ? void 0 : UU.buffer) !== XU && ((0, tQ.d)(this, xQ)[xQ] = new Uint32Array(XU, 0, XU.byteLength >>> 2)), (0, tQ.d)(this, xQ)[xQ]
    }

    function MA(UU) {
      var XU;
      const zU = UU.buffer;
      return (null === (XU = (0, tQ.d)(this, JQ)[JQ]) || void 0 === XU ? void 0 : XU.buffer) !== zU && ((0, tQ.d)(this, JQ)[JQ] = new Uint8Array(zU)), (0, tQ.d)(this, JQ)[JQ]
    }
    async function vA(UU) {
      await this.deps.staleOr(UU, (() => {
        this.deps.failed(CQ)
      }))
    }

    function VA(UU) {
      const XU = (0, tQ.d)(this, SQ)[SQ],
        zU = (0, tQ.d)(this, rQ)[rQ];
      if (XU && zU) return (0, tQ.d)(this, gA)[gA]((() => UU(XU, zU)))
    }

    function sA(UU) {
      if (!(0, tQ.d)(this, uQ)[uQ]) try {
        return UU()
      } catch (XU) {
        if (!(0, tQ.d)(this, kA)[kA](XU)) throw XU;
        return
      }
    }

    function nA(UU) {
      return UU instanceof WebAssembly.RuntimeError && ((0, tQ.d)(this, uQ)[uQ] = !0, (0, tQ.d)(this, SQ)[SQ] = null, (0, tQ.d)(this, rQ)[rQ] = null, (0, tQ.d)(this, JQ)[JQ] = null, (0, tQ.d)(this, OQ)[OQ] = null, (0, tQ.d)(this, nQ)[nQ] = null, (0, tQ.d)(this, yA)[yA]("trapped"), this.deps.core.VQU(0), (0, tQ.d)(this, jQ)[jQ].stop(), this.deps.crash(this.deps.markTrapped(UU)), this.deps.failed(wQ), !0)
    }
    var mA = zU(39462);
    const lA = new Map([
      ["skyblock", () => zU.e(59).then((() => zU(39455)))]
    ]);

    function xA(UU) {
      const XU = lA.get(UU);
      return XU ? XU().then((() => {
        const XU = (0, mA.e)(UU);
        if (!XU) throw new Error(`${UU}'s replay hook module registered no hook`);
        return XU
      })) : null
    }
    class JA {
      constructor(UU) {
        this.deps = UU, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(UU) {
        if (this.pending.clear(), UU === this.game && null !== this.hook) return void(this.all = !0);
        const XU = ++this.generation;
        this.game = UU, this.hook = null, this.all = !1;
        const zU = this.deps.loadHook(UU);
        null === zU || void 0 === zU || zU.then((UU => {
          XU === this.generation && (this.hook = UU, this.all = !0)
        }), (UU => {
          XU === this.generation && this.deps.onError(UU)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(UU) {
        null === this.hook || this.all || this.pending.set(UU, !0)
      }
      entityInfoChanged(UU) {
        null === this.hook || this.all || this.pending.has(UU) || this.pending.set(UU, !1)
      }
      flush(UU) {
        const {
          hook: XU
        } = this;
        if (null === XU || !UU || !this.all && 0 === this.pending.size) return;
        const zU = this.deps.cmd();
        if (null === zU) return;
        const {
          api: cU
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: UU,
            count: XU
          } = Tz(cU, this.ids);
          this.ids = UU;
          for (let zU = 0; zU < XU; zU++) this.pending.set(UU[zU], !0)
        }
        const yU = this.ids = hz(this.ids, this.pending.size);
        let QU = 0;
        for (const DU of this.pending.keys()) yU[QU++] = DU;
        const AU = [],
          FU = Uc(cU, yU, QU, ((UU, XU) => {
            null !== XU && AU.push({
              serverId: UU,
              info: XU,
              spawned: !0 === this.pending.get(UU)
            })
          }));
        if (FU) {
          this.pending.clear();
          for (const {
              serverId: UU,
              info: cU,
              spawned: yU
            }
            of AU) try {
            XU(cU, {
              setFacingTolerance: XU => {
                null === XU && yU || Bz(zU, UU, XU) || this.pending.set(UU, yU)
              }
            })
          } catch (oU) {
            this.deps.onError(oU)
          }
        }
      }
    }
    var jA = (0, gQ.e)("bindings"),
      KA = (0, gQ.e)("module"),
      bA = (0, gQ.e)("memory"),
      TA = (0, gQ.e)("trapped"),
      hA = (0, gQ.e)("generation"),
      UF = (0, gQ.e)("loading"),
      XF = (0, gQ.e)("lend"),
      zF = (0, gQ.e)("givenUp"),
      cF = (0, gQ.e)("afterSave"),
      yF = (0, gQ.e)("opens"),
      QF = (0, gQ.e)("saveAskedAt"),
      AF = (0, gQ.e)("unload"),
      FF = (0, gQ.e)("dropModule"),
      oF = (0, gQ.e)("loadFailed"),
      DF = (0, gQ.e)("saveReadsBody"),
      EF = (0, gQ.e)("command"),
      YF = (0, gQ.e)("call"),
      NF = (0, gQ.e)("guard"),
      IF = (0, gQ.e)("trapOn");
    class pF {
      constructor(UU) {
        this.deps = UU, Object.defineProperty(this, IF, {
          value: RF
        }), Object.defineProperty(this, NF, {
          value: ZF
        }), Object.defineProperty(this, YF, {
          value: BF
        }), Object.defineProperty(this, EF, {
          value: GF
        }), Object.defineProperty(this, DF, {
          get: kF,
          set: void 0
        }), Object.defineProperty(this, oF, {
          value: gF
        }), Object.defineProperty(this, FF, {
          value: tF
        }), Object.defineProperty(this, AF, {
          value: aF
        }), Object.defineProperty(this, jA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TA, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, hA, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, UF, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, XF, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zF, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cF, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yF, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, QF, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, tQ.d)(this, KA)[KA] && null === (0, tQ.d)(this, cF)[cF]
      }
      async open(UU, XU) {
        if ((0, tQ.d)(this, TA)[TA]) return NU.bd.ModuleTrap;
        let zU = (0, tQ.d)(this, jA)[jA];
        if (!zU) {
          const UU = (0, tQ.d)(this, hA)[hA];
          (0, tQ.d)(this, UF)[UF]++;
          try {
            zU = await this.deps.load()
          } catch (yU) {
            return (0, tQ.d)(this, UF)[UF]--, UU !== (0, tQ.d)(this, hA)[hA] ? "stopped" : (0, tQ.d)(this, oF)[oF](yU, XU)
          }
          if ((0, tQ.d)(this, UF)[UF]--, UU !== (0, tQ.d)(this, hA)[hA]) return (0, tQ.d)(this, jA)[jA] || 0 !== (0, tQ.d)(this, UF)[UF] || (0, tQ.d)(this, TA)[TA] || this.deps.unload(), "stopped";
          if ((0, tQ.d)(this, TA)[TA]) return NU.bd.ModuleTrap;
          const cU = zU.HQU(),
            QU = this.deps.core.MQU();
          if (cU !== QU) return (0, tQ.d)(this, oF)[oF](new Error(`replay port version ${cU}, the core's ${QU}`), XU);
          (0, tQ.d)(this, jA)[jA] = zU
        }
        if (!(0, tQ.d)(this, KA)[KA]) {
          const UU = zU;
          if (!(0, tQ.d)(this, NF)[NF]((() => {
              (0, tQ.d)(this, KA)[KA] = new UU.sQU, (0, tQ.d)(this, bA)[bA] = UU.nQU()
            }))) return NU.bd.ModuleTrap
        }
        let cU = !1;
        return (0, tQ.d)(this, YF)[YF](((XU, zU) => {
          null !== (0, tQ.d)(this, cF)[cF] && XU.step(0, 0);
          const yU = XU.stage(UU.length);
          0 !== yU && (new Uint8Array(zU.buffer, yU, UU.length).set(UU), XU.open(), (0, tQ.d)(this, zF)[zF] = (0, tQ.d)(this, XF)[XF], (0, tQ.d)(this, cF)[cF] = null, (0, tQ.d)(this, yF)[yF]++, cU = !0)
        })) ? cU ? "opening" : NU.bd.TooLarge : NU.bd.ModuleTrap
      }
      beforeFrame(UU) {
        const XU = (0, tQ.d)(this, KA)[KA],
          zU = (0, tQ.d)(this, bA)[bA];
        if (!XU || !zU || null !== (0, tQ.d)(this, cF)[cF]) return;
        const {
          core: cU
        } = this.deps, yU = cU.mQU(UU);
        if (yU < 0) return;
        const QU = Math.floor(yU);
        let AU, FU;
        try {
          AU = XU.step(QU, yU - QU), FU = XU.rQU()
        } catch (DU) {
          return void(0, tQ.d)(this, IF)[IF](DU)
        }
        const oU = cU.iQU(1, AU);
        if (0 === oU) {
          const UU = (0, tQ.d)(this, YF)[YF]((UU => {
            UU.close()
          }));
          if (!UU) return;
          return (0, tQ.d)(this, DF)[DF] ? (0, tQ.d)(this, cF)[cF] = "drop" : (0, tQ.d)(this, FF)[FF](), void cU.lQU(NU.bd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), oU, AU).set(new Uint8Array(zU.buffer, FU, AU))
      }
      play() {
        (0, tQ.d)(this, EF)[EF]((UU => {
          UU.play()
        }))
      }
      pause() {
        (0, tQ.d)(this, EF)[EF]((UU => {
          UU.pause()
        }))
      }
      seek(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, tQ.d)(this, EF)[EF]((zU => {
          zU.seek(UU, XU)
        }))
      }
      setMark(UU, XU) {
        return (0, tQ.d)(this, EF)[EF]((zU => {
          zU.xQU(UU, XU)
        }))
      }
      addKeyframe(UU, XU) {
        return (0, tQ.d)(this, EF)[EF]((zU => {
          zU.JQU(UU[0], UU[1], UU[2], XU[0], XU[1], XU[2])
        }))
      }
      setKeyframe(UU, XU) {
        return (0, tQ.d)(this, EF)[EF]((zU => {
          zU.KQU(UU, XU)
        }))
      }
      moveKeyframe(UU, XU) {
        return (0, tQ.d)(this, EF)[EF]((zU => {
          zU.bQU(UU, XU)
        }))
      }
      deleteKeyframes(UU, XU) {
        return (0, tQ.d)(this, EF)[EF]((zU => {
          zU.TQU(UU, XU)
        }))
      }
      crop(UU, XU) {
        return null === (0, tQ.d)(this, XF)[XF] && (0, tQ.d)(this, EF)[EF]((zU => {
          zU.crop(UU, XU)
        }))
      }
      beginSave() {
        const UU = (0, tQ.d)(this, QF)[QF];
        if ((0, tQ.d)(this, QF)[QF] = null, null !== UU && UU !== (0, tQ.d)(this, yF)[yF]) return null;
        let XU = 0,
          zU = null;
        if ((0, tQ.d)(this, YF)[YF](((UU, cU) => {
            XU = UU.save(), 0 !== XU && (zU = new Uint8Array(cU.buffer, UU.hQU(), UU.UAU()).slice())
          })), 0 === XU || !zU) return null;
        const cU = {
          headLen: XU,
          editState: zU,
          givenUp: () => (0, tQ.d)(this, zF)[zF] === cU,
          head: (UU, XU) => {
            if ((0, tQ.d)(this, XF)[XF] !== cU || !(0, tQ.d)(this, DF)[DF]) return null;
            let zU = null;
            return (0, tQ.d)(this, YF)[YF](((cU, yU) => {
              const QU = cU.zAU();
              0 !== QU && UU >= 0 && XU >= 0 && UU + XU <= QU && (zU = new Uint8Array(yU.buffer, cU.cAU() + UU, XU))
            })), zU
          },
          end: () => {
            if ((0, tQ.d)(this, XF)[XF] !== cU) return;
            (0, tQ.d)(this, XF)[XF] = null, (0, tQ.d)(this, zF)[zF] = null, (0, tQ.d)(this, YF)[YF]((UU => {
              UU.yAU()
            }));
            const UU = (0, tQ.d)(this, cF)[cF];
            (0, tQ.d)(this, cF)[cF] = null, "unload" === UU ? (0, tQ.d)(this, AF)[AF]() : "drop" === UU && (0, tQ.d)(this, FF)[FF]()
          }
        };
        return (0, tQ.d)(this, XF)[XF] = cU, cU
      }
      askSave() {
        (0, tQ.d)(this, QF)[QF] = (0, tQ.d)(this, yF)[yF]
      }
      setSpeed(UU) {
        (0, tQ.d)(this, EF)[EF]((XU => {
          XU.QAU(UU)
        }))
      }
      setCameraMode(UU) {
        (0, tQ.d)(this, EF)[EF]((XU => {
          XU.AAU(UU)
        }))
      }
      close() {
        (0, tQ.d)(this, EF)[EF]((UU => {
          UU.close()
        }))
      }
      stop() {
        (0, tQ.d)(this, hA)[hA]++, (0, tQ.d)(this, DF)[DF] && ((0, tQ.d)(this, YF)[YF]((UU => {
          UU.close()
        })), (0, tQ.d)(this, KA)[KA]) ? (0, tQ.d)(this, cF)[cF] = "unload" : (0, tQ.d)(this, AF)[AF]()
      }
    }

    function aF() {
      (0, tQ.d)(this, FF)[FF](), (0, tQ.d)(this, TA)[TA] || ((0, tQ.d)(this, jA)[jA] = null, this.deps.unload())
    }

    function tF() {
      (0, tQ.d)(this, YF)[YF]((UU => {
        UU.free()
      })), (0, tQ.d)(this, KA)[KA] = null, (0, tQ.d)(this, bA)[bA] = null
    }
    async function gF(UU, XU) {
      return await this.deps.staleOr(UU, (() => {}), {
        beforeReload: XU
      }) ? "reloading" : NU.bd.ModuleLoad
    }

    function kF() {
      return null !== (0, tQ.d)(this, XF)[XF] && (0, tQ.d)(this, zF)[zF] !== (0, tQ.d)(this, XF)[XF]
    }

    function GF(UU) {
      return null === (0, tQ.d)(this, cF)[cF] && (0, tQ.d)(this, YF)[YF](UU)
    }

    function BF(UU) {
      const XU = (0, tQ.d)(this, KA)[KA],
        zU = (0, tQ.d)(this, bA)[bA];
      return !(!XU || !zU) && (0, tQ.d)(this, NF)[NF]((() => {
        UU(XU, zU)
      }))
    }

    function ZF(UU) {
      if ((0, tQ.d)(this, TA)[TA]) return !1;
      try {
        return UU(), !0
      } catch (XU) {
        return (0, tQ.d)(this, IF)[IF](XU), !1
      }
    }

    function RF(UU) {
      if (!(UU instanceof WebAssembly.RuntimeError)) throw UU;
      (0, tQ.d)(this, TA)[TA] = !0, (0, tQ.d)(this, KA)[KA] = null, (0, tQ.d)(this, bA)[bA] = null, (0, tQ.d)(this, jA)[jA] = null, this.deps.crash(this.deps.markTrapped(UU)), this.deps.core.lQU(NU.bd.ModuleTrap)
    }
    var PF = zU(7062),
      WF = zU(42127);
    const dF = "[bloxd-wasm-client]";
    const LF = String(ly);

    function eF(UU) {
      return null === UU || UU === LF ? void 0 : UU
    }

    function CF(UU) {
      var XU, zU, cU, yU, QU, FU, oU;
      switch (UU.what) {
        case NU.md.FlyingText: {
          let XU;
          try {
            XU = JSON.parse(UU.contentJson)
          } catch (DU) {
            return void console.warn(`${dF} a replay's flying text isn't JSON`, DU)
          }
          AU.k.UY("forceFlyingMiddleMessage", {
            content: XU,
            nX: UU.nX,
            angle: UU.angle,
            mX: UU.mX
          });
          break
        }
        case NU.md.PlayerKilled:
          (0, WF.c)({
            kind: "killed",
            body: {
              deadEId: null !== (XU = eF(UU.dead)) && void 0 !== XU ? XU : "",
              killerEId: eF(UU.killer),
              withItem: null !== (zU = UU.withItem) && void 0 !== zU ? zU : "",
              killstreak: UU.killstreak
            }
          });
          break;
        case NU.md.Killfeed:
          (0, WF.c)({
            kind: "custom",
            body: {
              killer: {
                eId: eF(UU.killerId),
                name: null !== (cU = UU.killerName) && void 0 !== cU ? cU : void 0,
                colour: null !== (yU = UU.killerColour) && void 0 !== yU ? yU : void 0
              },
              victim: {
                eId: eF(UU.victimId),
                name: null !== (QU = UU.victimName) && void 0 !== QU ? QU : void 0,
                colour: null !== (FU = UU.victimColour) && void 0 !== FU ? FU : void 0
              },
              withItem: null !== (oU = UU.withItem) && void 0 !== oU ? oU : ""
            }
          })
      }
    }
    const wF = "[bloxd-wasm-client]";

    function qF(UU) {
      if (void 0 === UU || null === UU || "" === UU) return null;
      const XU = Number(UU);
      return Number.isInteger(XU) && XU > ly && XU <= 2147483647 ? XU : null
    }

    function OF(UU) {
      return {
        id: qF(UU.eId),
        name: "string" === typeof UU.name ? UU.name : null,
        colour: "string" === typeof UU.colour ? UU.colour : null
      }
    }

    function SF(UU) {
      const XU = (0, zQ.m)(Ac.oc.PlayerKilled, (XU => {
          var zU, cU;
          const yU = (0, XQ.f)(XU);
          if (!(0, XQ.b)(yU)) return;
          const {
            deadEId: QU,
            killerEId: AU,
            withItem: FU,
            killstreak: oU
          } = yU;
          UU.recordPlayerKilled(null !== (zU = qF(QU)) && void 0 !== zU ? zU : ly, null !== (cU = qF(AU)) && void 0 !== cU ? cU : ly, "number" === typeof oU ? oU : 0, "string" === typeof FU ? FU : "")
        })),
        zU = (0, zQ.m)(Ac.oc.CustomKillfeed, (XU => {
          const zU = (0, XQ.f)(XU);
          if (!(0, XQ.b)(zU) || !(0, XQ.b)(zU.killer) || !(0, XQ.b)(zU.victim)) return;
          const {
            killer: cU,
            victim: yU,
            withItem: QU
          } = zU;
          UU.recordKillfeed(OF(cU), OF(yU), "string" === typeof QU ? QU : null)
        }));
      return () => {
        XU(), zU()
      }
    }

    function rF(UU) {
      var XU;
      return void 0 === UU || null === UU ? null : null !== (XU = JSON.stringify(UU)) && void 0 !== XU ? XU : null
    }

    function uF(UU) {
      let XU = null;
      const zU = () => {
        const {
          enableClipping: zU,
          clipDurationSeconds: yU
        } = cU.e.get("clientEscMenuOptions"), QU = `${zU}:${yU}`;
        QU !== XU && (XU = QU, UU.recorder.setPrefs(zU, yU))
      };
      return zU(), (0, AU.n)("appManagerUpdated|clientEscMenuOptions", zU)
    }
    const fF = "replayModule",
      iF = "recorderModule";

    function HF(UU, XU, zU) {
      return function() {
        return UU.isStopped ? zU : XU(...arguments)
      }
    }
    const MF = {
      open: () => Promise.reject(new Error(fy.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function vF() {
      return zU.e(76).then((() => zU(64133)))
    }

    function VF(UU) {
      (0, fy.i)({
        text: UU,
        type: "Error"
      })
    }
    class sF {
      constructor(UU) {
        this.deps = UU, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: XU,
          api: cU,
          core: yU
        } = UU, QU = () => UU.memory().buffer, AU = () => XU.isStopped ? null : XU.rings.cmd, FU = HF(XU, ((UU, XU) => yU.iQU(UU, XU)), 0), oU = () => yU.MQU();
        let DU = null;
        this.replay = new pF({
          core: {
            mQU: HF(XU, (UU => yU.mQU(UU)), -1),
            iQU: FU,
            MQU: oU,
            lQU: HF(XU, (UU => {
              yU.lQU(UU)
            }), void 0)
          },
          coreBuffer: QU,
          load: async () => (DU = await zU.e(77).then((() => zU(64142))), DU.loadReplayModule()),
          unload: () => {
            var UU;
            null === (UU = DU) || void 0 === UU || UU.unloadReplayModule()
          },
          markTrapped: UU => DU ? DU.markReplayTrapped(UU) : new Error(String(UU)),
          staleOr: (XU, zU, cU) => UU.staleOr(fF, XU, zU, cU),
          crash: XU => {
            UU.reportFault(fF, XU)
          }
        });
        let EU = null;
        this.recorder = new GA({
          core: {
            VQU: HF(XU, (UU => yU.VQU(UU)), 0),
            SQU: HF(XU, (UU => yU.SQU(UU)), 0),
            iQU: FU,
            MQU: oU
          },
          coreCommand: (UU, XU) => {
            var zU, cU;
            return null !== (zU = null === (cU = AU()) || void 0 === cU ? void 0 : cU.writeCmd(UU, 0, XU)) && void 0 !== zU && zU
          },
          coreBuffer: QU,
          load: async () => (EU = await vF(), EU.loadRecorderModule()),
          prefetch: () => {
            vF().then((UU => UU.prefetchRecorderModule())).catch((UU => {
              console.warn(`${wF} the recorder module didn't prefetch, so a save loads it:`, UU)
            }))
          },
          unload: () => {
            var UU;
            null === (UU = EU) || void 0 === UU || UU.unloadRecorderModule()
          },
          markTrapped: UU => EU ? EU.markRecorderTrapped(UU) : new Error(String(UU)),
          memoryBytes: () => {
            var UU, XU;
            return null !== (UU = null === (XU = EU) || void 0 === XU ? void 0 : XU.recorderMemoryBytes()) && void 0 !== UU ? UU : 0
          },
          staleOr: (XU, zU) => UU.staleOr(iF, XU, zU),
          crash: XU => {
            UU.reportFault(iF, XU)
          },
          allowed: () => !0 === UU.options.get("canRecordReplays"),
          failed: UU => {
            this.runtime.recorder.stopped(), VF(UU)
          },
          events: (UU, XU) => {
            this.runtime.recorderEvents(UU, XU)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: VF,
          unixNow: () => Date.now()
        });
        const YU = new my({
          core: {
            PQU: HF(XU, (UU => yU.PQU(UU)), 0),
            dQU: HF(XU, (() => {
              yU.dQU()
            }), void 0),
            Kt: HF(XU, (() => yU.Kt()), 0),
            WQU: HF(XU, (() => yU.WQU()), 0)
          },
          buffer: QU,
          apiView: () => cU.apiView,
          cmd: AU,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new JA({
          api: cU,
          cmd: AU,
          loadHook: xA,
          onError: UU => {
            console.warn(`${wF} the recorded game's replay hooks:`, UU)
          }
        });
        const NU = new UQ({
          client: YU,
          buffer: QU,
          setHoldDraws: UU => {
            XU.setHoldDraws(UU)
          },
          notify: fy.i,
          onRecorderState: () => {
            var UU;
            null === (UU = (0, Hy.f)()) || void 0 === UU || UU.recorderChanged()
          },
          onViewerChange: () => {
            var UU;
            null === (UU = (0, Hy.f)()) || void 0 === UU || UU.viewerChanged()
          },
          onReplayOption: XU => {
            ! function(UU, XU) {
              var zU, cU;
              const yU = Ac.yb[XU.key];
              if (void 0 === yU) return;
              let QU = null !== (zU = XU.value) && void 0 !== zU ? zU : JSON.parse(JSON.stringify(null !== (cU = PF.b[yU]) && void 0 !== cU ? cU : null));
              if (null !== XU.value && XU.key < Ac.Xb.Environment && "string" === typeof QU) try {
                QU = JSON.parse(QU)
              } catch (AU) {
                return void console.warn(`${dF} a replay's ${yU} isn't JSON`, AU)
              }
              UU.applyNewClientOptions({
                [yU]: QU
              })
            }(UU.options, XU)
          },
          onReplayUiEvent: CF,
          onReplayOpened: XU => {
            this.entityHooks.opened((0, eU.Tb)(XU)), UU.replayShaderPack(XU)
          },
          meshPending: () => {
            var UU, zU;
            return null !== (UU = null === (zU = XU.lastHeader) || void 0 === zU ? void 0 : zU.renderPending) && void 0 !== UU ? UU : 0
          },
          viewerOpen: iy.e,
          download: UU => {
            (0, ry.d)(UU)
          }
        });
        this.runtime = NU, cU.replay = NU.sink, (0, Hy.r)(NU);
        const IU = new QQ({
          live: () => {
            var UU;
            return !XU.isStopped && !0 === (null === (UU = NU.currentViewer) || void 0 === UU ? void 0 : UU.inPlayback)
          },
          cmd: AU,
          dragScale: pQ
        });
        this.freecam = IU, (0, Hy.o)(IU), this.recordedOptions = function(UU, XU) {
          const zU = Ac.yb,
            cU = zU.map(((zU, cU) => XU.subscribe(zU, (XU => {
              UU.setOption(cU, rF(XU))
            }))));
          return {
            sendAll() {
              zU.forEach(((zU, cU) => {
                UU.setOption(cU, rF(XU.get(zU)))
              }))
            },
            stop() {
              for (const UU of cU) UU()
            }
          }
        }(NU.recorder, UU.options), this.stops = [(0, tc.j)((UU => {
          IU.flush();
          try {
            this.replay.beforeFrame(UU)
          } catch (XU) {
            this.deps.reportFault("replayFrame", XU)
          }
        })), (0, tc.x)(((UU, XU) => {
          try {
            this.recorder.afterFrame(), XU && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (zU) {
            this.deps.reportFault("recorderFrame", zU)
          }
          try {
            NU.afterFrame(UU)
          } catch (zU) {
            this.deps.reportFault("replayRuntime", zU)
          }
        })), uF(NU), () => {
          this.recordedOptions.stop()
        }, SF(NU.recorder), (0, cQ.k)((UU => {
          let {
            action: XU,
            down: zU
          } = UU;
          var cU;
          zU && (null === (cU = (0, Hy.f)()) || void 0 === cU || cU.keyDown(XU))
        }))];
        const pU = () => {
          const UU = NU.currentViewer;
          return !0 === (null === UU || void 0 === UU ? void 0 : UU.isOpen) ? UU : null
        };
        (0, uy.h)({
          open: (UU, XU) => this.open(UU, XU),
          replayKey: () => {
            var UU, XU;
            return null !== (UU = null === (XU = pU()) || void 0 === XU ? void 0 : XU.id) && void 0 !== UU ? UU : null
          },
          saveRefusal: () => {
            var UU, XU;
            return null !== (UU = null === (XU = pU()) || void 0 === XU ? void 0 : XU.saveRefusal) && void 0 !== UU ? UU : null
          },
          encode: () => {
            var UU, XU;
            return null !== (UU = null === (XU = pU()) || void 0 === XU ? void 0 : XU.save()) && void 0 !== UU ? UU : Promise.resolve(null)
          },
          fileHandle: () => {
            var UU, XU;
            return null !== (UU = null === (XU = NU.currentViewer) || void 0 === XU ? void 0 : XU.fileHandle) && void 0 !== UU ? UU : null
          },
          markSaved: (UU, XU) => {
            var zU;
            null === (zU = NU.currentViewer) || void 0 === zU || zU.markSaved(UU, XU)
          }
        })
      }
      netEvent(UU) {
        if ("connection" === UU.type)
          if (UU.phase === NU.E.Activated) {
            this.activeConn = UU.conn;
            const XU = this.deps.sessionInfo(UU.conn);
            null !== XU && (this.runtime.activated({
              lobbyType: (0, CU.s)(XU.lobbyName),
              gameNameWithVariation: XU.gameNameWithVariation,
              lobbyName: XU.lobbyName
            }), this.recordedOptions.sendAll())
          } else UU.phase !== NU.E.Left && UU.phase !== NU.E.Closed || UU.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const UU of this.stops) UU();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Hy.l)() === this.runtime && (0, Hy.r)(null), (0, Hy.h)() === this.freecam && (0, Hy.o)(null), (0, uy.h)(MF), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(UU, XU) {
        const {
          running: zU
        } = this.deps;
        if (zU.isStopped) throw new Error(fy.e.coreStopped.text);
        if (UU.byteLength > 67108864) throw new Error(fy.e.cantOpen.text);
        let cU;
        try {
          cU = await async function(UU) {
            const XU = await UU.loadViewer();
            return XU.inPlayback || (0, tc.H)().leaveGame(null), XU
          }(this.runtime)
        } catch (yU) {
          throw console.warn(`${wF} the replay viewer didn't load`, yU), new Error(fy.e.viewerLoadFailed.text)
        }
        if (zU.isStopped) throw new Error(fy.e.coreStopped.text);
        await cU.open(UU, XU)
      }
    }
    var nF = zU(2032);

    function mF(UU, XU) {
      const {
        aux: zU,
        payload: cU
      } = function(UU) {
        return {
          aux: UU.reset ? NU.dc.ResetFirst : 0,
          payload: xF(UU.changes)
        }
      }(XU);
      UU.queueOptions(zU, cU) && (XU.reset && nF.d.reset(), nF.d.apply(XU.changes))
    }
    const lF = new TextEncoder;

    function xF(UU) {
      const XU = new JF;
      return KF(XU, UU), XU.bytes()
    }
    class JF {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(UU) {
        if (this.len + UU <= this.buf.length) return;
        const XU = new Uint8Array(Math.max(2 * this.buf.length, this.len + UU));
        XU.set(this.buf.subarray(0, this.len)), this.buf = XU, this.view = new DataView(XU.buffer)
      }
      u8(UU) {
        this.room(1), this.buf[this.len++] = UU
      }
      tagged(UU, XU, zU) {
        this.room(1 + XU), this.buf[this.len++] = UU, 1 === XU ? this.view.setUint8(this.len, zU) : 2 === XU ? this.view.setUint16(this.len, zU) : this.view.setUint32(this.len, zU), this.len += XU
      }
      signed(UU, XU, zU) {
        this.room(1 + XU), this.buf[this.len++] = UU, 1 === XU ? this.view.setInt8(this.len, zU) : 2 === XU ? this.view.setInt16(this.len, zU) : this.view.setInt32(this.len, zU), this.len += XU
      }
      f64(UU) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, UU), this.len += 8
      }
      raw(UU) {
        this.room(UU.length), this.buf.set(UU, this.len), this.len += UU.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function jF(UU, XU, zU, cU, yU, QU, AU) {
      XU < cU ? UU.u8(zU | XU) : null !== yU && XU < 256 ? UU.tagged(yU, 1, XU) : XU < 65536 ? UU.tagged(QU, 2, XU) : UU.tagged(AU, 4, XU)
    }

    function KF(UU, XU) {
      switch (typeof XU) {
        case "undefined":
          return void UU.raw(bF);
        case "boolean":
          return void UU.u8(XU ? 195 : 194);
        case "number":
          return void
          function(UU, XU) {
            XU >>> 0 === XU ? XU < 128 ? UU.u8(XU) : XU < 256 ? UU.tagged(204, 1, XU) : XU < 65536 ? UU.tagged(205, 2, XU) : UU.tagged(206, 4, XU) : (XU | 0) === XU ? XU >= -32 ? UU.u8(255 & XU) : XU >= -128 ? UU.signed(208, 1, XU) : XU >= -32768 ? UU.signed(209, 2, XU) : UU.signed(210, 4, XU) : UU.f64(XU)
          }(UU, XU);
        case "string": {
          const zU = lF.encode(XU);
          return jF(UU, zU.length, 160, 32, 217, 218, 219), void UU.raw(zU)
        }
        case "object":
          break;
        default:
          return void UU.u8(192)
      }
      if (null === XU) UU.u8(192);
      else if (Array.isArray(XU)) {
        jF(UU, XU.length, 144, 16, null, 220, 221);
        for (const zU of XU) KF(UU, zU)
      } else if (XU instanceof Uint8Array) jF(UU, XU.length, 0, 0, 196, 197, 198), UU.raw(XU);
      else {
        const zU = Object.keys(XU);
        jF(UU, zU.length, 128, 0, null, 222, 223);
        for (const cU of zU) KF(UU, cU), KF(UU, XU[cU])
      }
    }
    const bF = new Uint8Array([212, 0, 0]);
    var TF = zU(53654),
      hF = zU(53661),
      Uo = zU(42053),
      Xo = zU(42098),
      zo = zU(3176);
    const co = [1e3, 3e3, 9e3];
    class yo {
      constructor(UU) {
        this.host = UU, this.sets = new Map, this.table = [], this.generation = 0, this.kp = !1
      }
      onEvent(UU) {
        const XU = function(UU) {
          if (UU.byteLength !== NU.vd) return null;
          const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
          return {
            want: XU.getUint16(0, !0),
            release: XU.getUint16(2, !0)
          }
        }(UU);
        XU && !this.kp && (XU.release !== NU.wd && this.release(XU.release), XU.want !== NU.wd && this.want(XU.want))
      }
      reset(UU) {
        if (!this.kp) {
          for (const [UU, XU] of this.sets) "ready" === XU.state && this.releaseAll(XU.distinct), this.sets.delete(UU);
          this.table = UU, this.generation++
        }
      }
      dispose() {
        if (this.kp) return;
        this.kp = !0, this.generation++, this.table = [];
        const UU = [...this.sets.values()];
        this.sets.clear();
        let XU = null;
        for (const cU of UU)
          for (const UU of "ready" === cU.state ? cU.distinct : []) try {
            this.host.xcU(UU)
          } catch (zU) {
            XU ??= {
              error: zU
            }
          }
        if (XU) throw XU.error
      }
      isReady(UU) {
        var XU;
        return "ready" === (null === (XU = this.sets.get(UU)) || void 0 === XU ? void 0 : XU.state)
      }
      want(UU) {
        const XU = this.sets.get(UU);
        if ("loading" === (null === XU || void 0 === XU ? void 0 : XU.state)) return XU.wanted = !0, void this.capAnswer(UU, XU);
        if ("ready" === (null === XU || void 0 === XU ? void 0 : XU.state)) return void this.host.sendReady(Ao(UU, XU.images, XU.size));
        const zU = this.table[UU];
        if (!zU || 1 !== zU.urls.length && zU.urls.length !== Ac.ic.CubeFaces) return this.host.sendReady(Fo(UU)), void this.host.onLoadFailed(UU, "", new Error(`no image set ${UU}`));
        const cU = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(UU, cU), this.load(UU, zU, cU, this.generation, 0), this.capAnswer(UU, cU)
      }
      capAnswer(UU, XU) {
        this.host.wait(4e3, (() => {
          this.sets.get(UU) === XU && XU.wanted && this.host.sendReady(Fo(UU))
        }))
      }
      load(UU, XU, zU, cU, yU) {
        const QU = [...new Set(XU.urls)];
        Promise.allSettled(QU.map((UU => this.host.loadImage(UU, XU.orientation)))).then((AU => {
          const FU = AU.flatMap((UU => "fulfilled" === UU.status ? [UU.value] : [])),
            oU = cU === this.generation && this.sets.get(UU) === zU,
            DU = AU.findIndex((UU => "rejected" === UU.status));
          if (!oU || !zU.wanted) return this.kp ? void this.releaseAfterDispose(FU.map(Qo)) : (this.releaseAll(FU.map(Qo)), void(oU && this.sets.delete(UU)));
          DU < 0 ? this.loaded(UU, XU, QU, FU) : (this.releaseAll(FU.map(Qo)), this.host.sendReady(Fo(UU)), yU < co.length ? this.host.wait(co[yU], (() => {
            cU === this.generation && this.sets.get(UU) === zU && (zU.wanted ? this.load(UU, XU, zU, cU, yU + 1) : this.sets.delete(UU))
          })) : (this.sets.delete(UU), this.host.onLoadFailed(UU, QU[DU], AU[DU].reason)))
        }))
      }
      loaded(UU, XU, zU, cU) {
        const [yU] = cU, QU = [yU.width, yU.height], AU = cU.every((UU => UU.width === QU[0] && UU.height === QU[1])), FU = XU.urls.length === Ac.ic.CubeFaces;
        if (!AU || QU[0] <= 0 || QU[1] <= 0 || QU[0] > 65535 || QU[1] > 65535 || FU && QU[0] !== QU[1]) {
          this.releaseAll(cU.map(Qo)), this.sets.delete(UU), this.host.sendReady(Fo(UU));
          const zU = cU.map((UU => `${UU.width}x${UU.height}`));
          return void this.host.onLoadFailed(UU, XU.urls[0], new Error(`set ${UU}'s images can't make its texture: ${zU.join(", ")}`))
        }
        const oU = XU.urls.map((UU => cU[zU.indexOf(UU)].id)),
          DU = cU.map(Qo);
        this.sets.set(UU, {
          state: "ready",
          images: oU,
          distinct: DU,
          size: QU
        }), this.host.sendReady(Ao(UU, oU, QU))
      }
      release(UU) {
        const XU = this.sets.get(UU);
        "loading" === (null === XU || void 0 === XU ? void 0 : XU.state) ? XU.wanted = !1: "ready" === (null === XU || void 0 === XU ? void 0 : XU.state) && (this.releaseAll(XU.distinct), this.sets.delete(UU))
      }
      releaseAll(UU) {
        for (const XU of UU) this.host.xcU(XU)
      }
      releaseAfterDispose(UU) {
        for (const XU of UU) try {
          this.host.xcU(XU)
        } catch {}
      }
    }

    function Qo(UU) {
      return UU.id
    }

    function Ao(UU, XU, zU) {
      const cU = new Uint8Array(Ac.ic.SkyImagesReadyBytes),
        yU = new DataView(cU.buffer);
      return yU.setUint16(0, UU, !0), yU.setUint16(2, XU.length, !0), yU.setUint16(4, zU[0], !0), yU.setUint16(6, zU[1], !0), XU.slice(0, Ac.ic.CubeFaces).forEach(((UU, XU) => {
        yU.setUint32(8 + 4 * XU, UU, !0)
      })), cU
    }

    function Fo(UU) {
      const XU = new Uint8Array(Ac.ic.SkyImagesReadyBytes),
        zU = new DataView(XU.buffer);
      return zU.setUint16(0, UU, !0), zU.setUint16(2, Ac.ic.Failed, !0), XU
    }
    let oo = Promise.resolve();
    async function Do(UU, XU) {
      let zU;
      try {
        zU = await (0, zo.Q)(UU)
      } catch (QU) {
        throw new Uo.e("fetch", UU, {
          cause: QU
        })
      }
      const cU = oo.then((() => async function(UU, XU) {
        const zU = new Blob([UU.slice()]);
        let cU = await createImageBitmap(zU, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: XU
        });
        const yU = 1024 / Math.max(cU.width, cU.height);
        if (yU < 1) {
          const UU = cU;
          try {
            cU = await createImageBitmap(UU, {
              resizeWidth: Math.max(1, Math.round(UU.width * yU)),
              resizeHeight: Math.max(1, Math.round(UU.height * yU)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            UU.close()
          }
        }
        return cU
      }(zU, XU)));
      let yU;
      oo = cU.catch((() => {}));
      try {
        yU = await cU
      } catch (QU) {
        throw new Uo.e("decode", UU, {
          cause: QU
        })
      }
      return {
        id: (0, Uo.r)(yU),
        width: yU.width,
        height: yU.height
      }
    }
    var Eo = zU(2219),
      Yo = zU(34686),
      No = zU(40074);
    const Io = Eo.d.length,
      po = new Set([...Eo.d, "earth"]);

    function ao(UU) {
      const XU = [],
        zU = [],
        cU = (UU, cU) => {
          if ("custom" === cU.type) {
            zU.push({
              id: UU,
              kind: Ac.ic.KindCustom,
              set: XU.length,
              earth: null
            });
            const yU = [cU.px, cU.py, cU.pz, cU.nx, cU.ny, cU.nz];
            XU.push({
              urls: (0, No.i)(yU),
              orientation: "none"
            })
          } else zU.push({
            id: UU,
            kind: Ac.ic.KindEarth,
            set: 0,
            earth: cU
          })
        };
      Eo.d.forEach(((XU, zU) => {
        var yU;
        cU(zU, null !== (yU = to(UU[XU])) && void 0 !== yU ? yU : Yo.o[XU])
      }));
      const yU = to(UU.earth);
      "earth" === (null === yU || void 0 === yU ? void 0 : yU.type) && cU(Io, yU);
      const QU = new TextEncoder,
        AU = [],
        FU = [];
      for (const [IU, pU] of Object.entries(UU)) {
        const UU = po.has(IU) ? null : to(pU);
        if (null === UU) continue;
        const XU = QU.encode(IU);
        XU.length > 255 ? FU.push(`Ignoring texture pack skybox ${IU}, whose name is over 255 bytes`) : AU.length === Ac.ic.MaxAdded ? FU.push(`Ignoring texture pack skybox ${IU}, past the ${Ac.ic.MaxAdded} skies a pack can add`) : (AU.push(XU), cU(Ac.ic.AddedId, UU))
      }
      const oU = XU.length;
      XU.push({
        urls: Yo.g.map((UU => Yo.k + UU)),
        orientation: "none"
      }), XU.push({
        urls: [Yo.n],
        orientation: "flipY"
      }), XU.push({
        urls: [Yo.e],
        orientation: "flipY"
      });
      const DU = Ac.ic.SkyTableHeaderBytes + zU.length * Ac.ic.SkyTableEntryBytes,
        EU = new Uint8Array(DU + AU.reduce(((UU, XU) => UU + 1 + XU.length), 0)),
        YU = new DataView(EU.buffer);
      YU.setUint16(0, oU, !0), YU.setUint16(2, oU + 1, !0), YU.setUint16(4, oU + 2, !0), YU.setUint16(6, zU.length, !0), zU.forEach(((UU, XU) => {
        const zU = Ac.ic.SkyTableHeaderBytes + XU * Ac.ic.SkyTableEntryBytes;
        YU.setUint16(zU, UU.id, !0), YU.setUint8(zU + 2, UU.kind);
        const cU = zU + 4;
        UU.earth ? function(UU, XU, zU) {
          const cU = UU;
          let yU = 0,
            QU = 0;
          for (const [AU, FU] of go) {
            const UU = cU[AU];
            "number" === typeof UU && Number.isFinite(UU) && (XU.setFloat32(zU + 4 * FU, UU, !0), yU |= 1 << FU)
          }
          for (const [AU, FU, oU] of ko) {
            const UU = cU[AU];
            Array.isArray(UU) && 3 === UU.length && UU.every((UU => "number" === typeof UU && Number.isFinite(UU))) && (UU.forEach(((UU, cU) => {
              XU.setFloat32(zU + oU + 4 * cU, UU, !0)
            })), yU |= FU)
          }
          Go.forEach(((UU, QU) => {
            let [AU, FU] = UU;
            const oU = cU[AU];
            "number" === typeof oU && Number.isFinite(oU) && (XU.setFloat32(zU + Ac.s.CameraOffsetAt + 4 * QU, oU, !0), yU |= FU)
          }));
          for (const [AU, FU] of Bo) {
            const UU = cU[AU];
            null !== UU && void 0 !== UU && (yU |= FU, UU && (QU |= FU >>> 14))
          }
          XU.setUint32(zU + Ac.s.PresentAt, yU, !0), XU.setUint8(zU + Ac.s.FlagsAt, QU)
        }(UU.earth, YU, cU) : YU.setUint16(cU, UU.set, !0)
      }));
      let NU = DU;
      for (const IU of AU) EU[NU] = IU.length, EU.set(IU, NU + 1), NU += 1 + IU.length;
      return {
        payload: EU,
        sets: XU,
        leftOut: FU
      }
    }

    function to(UU) {
      if ("object" !== typeof UU || null === UU) return null;
      const XU = UU;
      if ("earth" === XU.type) return UU;
      return "custom" === XU.type && ["px", "py", "pz", "nx", "ny", "nz"].every((UU => {
        const zU = XU[UU];
        return "string" === typeof zU && zU.length > 0
      })) ? UU : null
    }
    const go = [
        ["inclination", Ac.s.Inclination],
        ["turbidity", Ac.s.Turbidity],
        ["luminance", Ac.s.Luminance],
        ["rayleigh", Ac.s.Rayleigh],
        ["mieCoefficient", Ac.s.MieCoefficient],
        ["mieDirectionalG", Ac.s.MieDirectionalG],
        ["distance", Ac.s.Distance],
        ["azimuth", Ac.s.Azimuth]
      ],
      ko = [
        ["sunPosition", Ac.s.SunPosition, Ac.s.SunPositionAt],
        ["up", Ac.s.Up, Ac.s.UpAt],
        ["vertexTint", Ac.s.VertexTint, Ac.s.VertexTintAt]
      ],
      Go = [
        ["xCameraOffset", Ac.s.CameraOffsetX],
        ["yCameraOffset", Ac.s.CameraOffsetY],
        ["zCameraOffset", Ac.s.CameraOffsetZ]
      ],
      Bo = [
        ["useSunPosition", Ac.s.UseSunPosition],
        ["dithering", Ac.s.Dithering],
        ["infiniteDistance", Ac.s.InfiniteDistance]
      ];

    function Zo(UU, XU, zU) {
      const cU = new Po({
        writeCmd: UU,
        warn: XU,
        followPack: Ro(zU, XU)
      });
      return cU.start(), cU
    }

    function Ro(UU, XU) {
      return zU => {
        let cU = () => {};
        const yU = UU((UU => {
          cU(), cU = () => {}, null !== UU ? cU = UU.subscribe((UU => {
            zU(function(UU, XU, zU) {
              if ("object" !== typeof UU || null === UU) return null;
              const cU = UU.skyBoxes;
              if ("object" !== typeof cU || null === cU) return null;
              if ("player" === XU) return cU;
              return Object.fromEntries(Object.entries(cU).filter((UU => {
                let [XU, cU] = UU;
                return !! function(UU) {
                  if ("object" !== typeof UU || null === UU) return !1;
                  return "earth" === UU.type || Object.entries(UU).every((UU => {
                    let [XU, zU] = UU;
                    return "type" === XU || ("" === (cU = zU) || null !== function(UU) {
                      var XU, zU, cU;
                      return "string" !== typeof UU ? null : null !== (XU = null === (zU = Wo.exec(UU)) || void 0 === zU || null === (cU = zU.groups) || void 0 === cU ? void 0 : cU.base64) && void 0 !== XU ? XU : null
                    }(cU));
                    var cU
                  }))
                }(cU) || (zU(`Ignoring texture pack skybox ${XU}, whose faces are not all data URLs`, null), !1)
              })))
            }(UU.pack, null === UU.gameSource ? "player" : "customGame", XU))
          })) : zU(null)
        }));
        return () => {
          yU(), cU()
        }
      }
    }
    class Po {
      constructor(UU) {
        var XU, zU, cU;
        this.host = UU, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.kp = !1, this.wait = null !== (XU = UU.wait) && void 0 !== XU ? XU : (UU, XU) => {
          setTimeout(XU, UU)
        }, this.loader = new yo({
          loadImage: null !== (zU = UU.loadImage) && void 0 !== zU ? zU : Do,
          xcU: null !== (cU = UU.xcU) && void 0 !== cU ? cU : Uo.v,
          sendReady: UU => {
            this.queue.push({
              kind: Ac.ic.SkyImagesReady,
              payload: UU
            })
          },
          onLoadFailed: (XU, zU, cU) => {
            UU.warn(`sky image set ${XU} (${zU}) didn't load: the last sky stays`, cU)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Xo.c, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((UU => {
          this.write(null !== UU && void 0 !== UU ? UU : {})
        }))
      }
      onEvent(UU) {
        this.loader.onEvent(UU)
      }
      drain() {
        if (0 === this.queue.length) return;
        let UU = 0;
        for (; UU < this.queue.length && this.host.writeCmd(this.queue[UU].kind, 0, this.queue[UU].payload);) UU++;
        UU > 0 && this.queue.splice(0, UU)
      }
      dispose() {
        this.kp = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(UU) {
        if (this.kp) return;
        const XU = ao(UU);
        if (!(this.written && (zU = this.written, cU = XU, zU.payload.length === cU.payload.length && zU.payload.every(((UU, XU) => UU === cU.payload[XU])) && zU.sets.length === cU.sets.length && zU.sets.every(((UU, XU) => {
            const zU = cU.sets[XU];
            return UU.orientation === zU.orientation && UU.urls.length === zU.urls.length && UU.urls.every(((UU, XU) => UU === zU.urls[XU]))
          }))))) {
          var zU, cU;
          for (const UU of XU.leftOut) this.host.warn(UU, null);
          this.written = XU, this.loader.reset(XU.sets), this.queue = this.queue.filter((UU => UU.kind !== Ac.ic.SkyImagesReady)), this.queue.push({
            kind: Ac.ic.SkyTable,
            payload: XU.payload
          })
        }
      }
    }
    const Wo = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Lo = zU(3076),
      eo = zU(3318),
      Co = zU(295),
      wo = zU(193),
      qo = zU(3080),
      Oo = zU(3094),
      So = zU(274),
      ro = zU(281),
      uo = zU(3198),
      fo = zU(3231),
      io = zU(3242),
      Ho = zU(114),
      Mo = zU(3286),
      vo = zU(3280),
      Vo = zU(316),
      so = zU(41927);
    class no {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, zQ.m)(Oc.L, (UU => {
          this.onReply((0, XQ.d)(Oc.L, UU), performance.now())
        }))
      }
      onFrame(UU, XU) {
        null === this.id ? this.id = UU : UU !== this.id && (this.id = UU, this.sentMs = document.hidden ? null : XU)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(UU, XU) {
        UU === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(XU - this.sentMs), this.sentMs = null)
      }
      take() {
        const UU = this.roundTripMs;
        return this.roundTripMs = null, UU
      }
      stop() {
        this.stopReplies()
      }
    }
    class mo {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(UU, XU, zU, cU) {
        const yU = UU - this.sampled >>> 0,
          QU = XU - this.timed >>> 0,
          AU = zU - this.frameUs >>> 0,
          FU = this.primed;
        return this.sampled = UU, this.timed = XU, this.frameUs = zU, this.primed = !0, !(!FU || yU > 64 || QU > 64) && (cU && AU <= 1e6 * QU && (this.windowTimed += QU, this.windowUs += AU), cU && yU > 0)
      }
      reset() {}
      snapshotAndReset() {
        const UU = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: UU,
          submitToDoneMs: null
        }
      }
    }
    const xo = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Jo {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(UU, XU) {
        const zU = Math.min(4096, this.count + XU);
        this.samples.fill(UU, this.count, zU), this.count = zU
      }
      clear() {
        this.count = 0
      }
      take() {
        const UU = this.count;
        if (this.count = 0, UU < 30) return xo;
        const XU = this.samples.subarray(0, UU).sort(),
          zU = zU => XU[Math.min(UU - 1, Math.floor(zU * UU))];
        return {
          lagP50Ms: zU(.5),
          lagP90Ms: zU(.9)
        }
      }
    }
    class jo {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Jo
      }
      onFrame(UU, XU) {
        const zU = UU.headerWord(Ac.I.Pacing),
          cU = UU.headerWord(Ac.I.PacingLagUs),
          yU = (zU >>> Ac.cb.LagsShift) - (this.word >>> Ac.cb.LagsShift) & Ac.cb.CountMask,
          QU = yU > 0 ? (cU - this.lagUs >>> 0) / yU / 1e3 : 0,
          AU = this.primed && yU <= 64 && QU <= 6e4;
        this.word = zU, this.lagUs = cU, this.primed = !0, AU && XU && yU > 0 && 0 !== (zU & Ac.cb.Defaulted) && this.lags.add(QU, yU)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(UU) {
        return UU ? this.lags.take() : (this.lags.clear(), xo)
      }
    }
    var Ko = zU(3194),
      bo = zU(34807),
      To = zU(3203),
      ho = zU(41979),
      UD = zU(34798),
      XD = zU(3096),
      zD = zU(3212);
    const cD = {
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
      compatibility_held: !0,
      software_adapter: !0,
      adapter_error: !0,
      load_failed: !0,
      start_no_adapter: !0,
      device_failed: !0,
      start_failed: !0,
      _unloaded: null
    };

    function yD(UU) {
      return new QD(UU)
    }
    class QD {
      constructor(UU) {
        this.shell = UU, this.tracker = new Oo.c, this.gpu = new mo, this.pacing = new jo, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new no, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new Ko.c(this.tracker, ((UU, XU, zU, cU) => {
          this.shell.mainStalled(UU, XU, zU, cU)
        }), (UU => this.shell.RL(UU))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, bo.c)(UU.backend, UU.canvas, UU.adapterVendor), this.tracker.start((() => !UU.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, XD.d)("wasm", (() => {
          const {
            n: XU,
            sampleCount: zU
          } = (0, ho.d)();
          return `${UU.backend}, quality steps aim at up to ${zD.b.target.maxFps} fps, pixel n ${XU}, msaa ${zU}`
        }), (XU => {
          XU.setLoadCounts(UU.readLoadCounts), this.frameDebug = XU
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(UU) {
        var XU;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(UU), null === (XU = this.frameDebug) || void 0 === XU || XU.animationFrame()
      }
      sendsWent(UU, XU, zU) {
        this.ping.onFrame(UU.headerWord(Ac.I.PingSent), XU), this.sendsStartMs = XU, this.sendsEndMs = zU
      }
      frameRan(UU, XU, zU, cU) {
        var yU;
        this.ping.onFrame(UU.headerWord(Ac.I.PingSent), zU);
        const QU = this.tracker;
        this.pacing.onFrame(UU, QU.isSampling());
        const AU = UU.headerWord(Ac.I.TickUs) / 1e3 + (0, tc.L)();
        var FU;
        (QU.aG(AU), null === (yU = this.frameDebug) || void 0 === yU || yU.wasmFrame(UU, XU, zU, cU, QU.isSampling(), AU), null !== this.game) && (null === (FU = this.frameDebug) || void 0 === FU || FU.inGame());
        const oU = this.sendsStartMs >= XU ? this.sendsEndMs - this.sendsStartMs : 0,
          DU = Math.max(0, zU - XU - AU - oU);
        if ("drawn" !== cU) return void("paced" === cU ? (this.pacedCpuMs += DU, this.mainStall.paced()) : "skipped" === cU && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(XU), QU.onFrameStart(XU);
        this.gpu.onFrame(UU.headerWord(Ac.I.GpuSampled), UU.headerWord(Ac.I.GpuTimed), UU.headerWord(Ac.I.GpuFrameUs), QU.isSampling()) && QU.onGpuSampleStarted(), QU.onFrameCpu(DU + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(XU)
      }
      framePaced() {
        var UU;
        this.mainStall.paced(), null === (UU = this.frameDebug) || void 0 === UU || UU.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const UU of this.timers) clearInterval(UU);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const UU = this.shell.joinedGame();
        if (UU !== this.game) {
          var XU;
          if (this.game = UU, null !== UU) null === (XU = this.frameDebug) || void 0 === XU || XU.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== UU
      }
      countFpsFrame(UU) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = UU
        }
        this.fpsFrames++;
        const XU = UU - this.fpsSpanStartMs;
        if (!(XU < io.c)) {
          if (!document.hidden) {
            const UU = 1e3 * this.fpsFrames / XU;
            this.firstSpanFps ??= UU, this.initialFps = this.firstSpanFps, this.fpsOverTime = UU
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = UU
        }
      }
      flush() {
        const UU = this.followGame(),
          {
            cpuFrameMs: XU,
            refreshHz: zU,
            cpuBottleneck: yU,
            frameIntervalCv: QU,
            ...AU
          } = this.tracker.snapshotAndReset(),
          FU = this.shell.inGame(),
          oU = FU && this.inGameAtLastFlush,
          DU = oU ? AU : (0, qo.e)(AU),
          EU = this.pacing.snapshotAndReset(oU);
        if (this.inGameAtLastFlush = FU, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !UU || !this.shell.canSend()) return;
        const YU = performance.now(),
          IU = (0, fo.r)((0, fo.n)(YU), this.unsentPage),
          aU = function(UU, XU, zU, yU, QU, AU, FU, oU) {
            var DU, EU, YU, NU, IU;
            const pU = {},
              {
                canvas: aU
              } = UU,
              tU = (0, uo.i)({
                refreshHz: XU.refreshHz,
                msaa: UU.msaa(),
                autoMsaaOff: (0, UD.e)()
              });
            for (const gU of (0, eo.d)()) {
              const kU = gU.name;
              let GU;
              if ((0, Co.B)(kU)) GU = (0, fo.b)(kU);
              else if ((0, fo.f)(kU)) GU = oU[kU];
              else if ((0, uo.j)(kU)) GU = tU[kU];
              else switch (kU) {
                case "fps":
                  GU = yU;
                  break;
                case "QF":
                  GU = QU;
                  break;
                case "EF":
                  GU = (0, To.z)((0, ho.d)().n);
                  break;
                case "YF":
                  GU = Math.max(aU.width, aU.height);
                  break;
                case "NF":
                  GU = Math.min(aU.width, aU.height);
                  break;
                case "IF":
                  GU = navigator.hardwareConcurrency || null;
                  break;
                case "pF":
                  GU = (0, DQ.getWebGpuSupported)();
                  break;
                case "aF":
                  GU = null === UU.fallbackReason ? null : cD[UU.fallbackReason];
                  break;
                case "tF":
                  GU = XU.cpuFrameMs;
                  break;
                case "gF":
                  GU = XU.refreshHz;
                  break;
                case "kF":
                  GU = XU.cpuBottleneck;
                  break;
                case "GF":
                  GU = XU.frameIntervalCv;
                  break;
                case "BF":
                  GU = XU.frameMs;
                  break;
                case "ZF":
                  GU = XU.tickMs;
                  break;
                case "dF":
                  GU = XU.mainBusyShare;
                  break;
                case "LF":
                  GU = XU.mainProbeDelayMs;
                  break;
                case "RF":
                  GU = XU.longAnimationFramesPerMin;
                  break;
                case "PF":
                  GU = XU.longAnimationFrameTimeShare;
                  break;
                case "WF":
                  GU = XU.longAnimationFrameScriptShare;
                  break;
                case "eF":
                  GU = XU.gpuPassMs;
                  break;
                case "CF":
                  GU = XU.gpuSubmitToDoneMs;
                  break;
                case "wF":
                  GU = zU.lagP50Ms;
                  break;
                case "qF":
                  GU = zU.lagP90Ms;
                  break;
                case "mF":
                  GU = (0, Lo.j)(AU);
                  break;
                case "DF":
                  GU = FU;
                  break;
                case "SF":
                case "rF":
                case "uF":
                case "fF":
                case "iF":
                case "HF":
                case "MF":
                case "vF":
                case "VF":
                case "sF":
                case "nF":
                case "lF":
                case "xF":
                case "JF":
                case "jF":
                  GU = null;
                  break;
                case "Eo":
                  GU = (0, DQ.getPlatformType)();
                  break;
                case "Yo":
                  GU = (0, DQ.getGpuVendor)();
                  break;
                case "Io":
                  GU = so.e[UU.backend];
                  break;
                case "po":
                  GU = (0, Ho.c)();
                  break;
                case "ao":
                  GU = (0, DQ.getOperatingSystem)();
                  break;
                case "ko":
                  GU = (0, DQ.getTrafficSource)();
                  break;
                case "Go":
                  GU = null !== (DU = cU.e.get("gameEntrySource")) && void 0 !== DU ? DU : wo.h;
                  break;
                case "Bo":
                  GU = null !== (EU = XU.frameLimiter) && void 0 !== EU ? EU : wo.h;
                  break;
                case "Zo":
                  GU = (0, So.i)();
                  break;
                case "Ro":
                  GU = null !== (YU = (0, ro.b)()) && void 0 !== YU ? YU : wo.h;
                  break;
                case "Po":
                  GU = (0, So.b)(aU.width, aU.height);
                  break;
                case "Wo":
                  GU = (0, eo.g)(-(new Date).getTimezoneOffset());
                  break;
                case "ro":
                  GU = null !== (NU = UU.fallbackReason) && void 0 !== NU ? NU : wo.h;
                  break;
                case "Ho":
                  GU = "ready";
                  break;
                case "Mo":
                  GU = (0, DQ.getSoftwareRenderer)();
                  break;
                case "Co":
                  GU = (0, Mo.e)();
                  break;
                case "wo":
                  GU = (0, vo.g)().replayState;
                  break;
                case "qo":
                  GU = (0, vo.g)().replaySelection;
                  break;
                case "Oo":
                  GU = null !== UU.shaderPackReach() ? "true" : "false";
                  break;
                case "vo":
                  GU = null !== (IU = UU.shaderPackReach()) && void 0 !== IU && IU.sceneDepth ? "true" : "false";
                  break;
                case "Vo": {
                  const XU = UU.shaderPackReach();
                  GU = null !== XU && void 0 !== XU && XU.sunShadow ? "all" : null !== XU && void 0 !== XU && XU.airShadow ? "air" : "none";
                  break
                }
                case "mo":
                  GU = Vo.F;
                  break;
                case "UD":
                  GU = (0, fo.i)();
                  break;
                case "eo": {
                  const XU = UU.ia();
                  GU = null === XU ? wo.h : String(XU);
                  break
                }
                case "uo":
                case "fo":
                  GU = wo.h;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${kU}`)
              }
              if (void 0 === GU) throw new Error(`Metric ${kU} has no value`);
              pU[kU] = GU
            }
            return pU
          }(this.shell, {
            cpuFrameMs: XU,
            refreshHz: zU,
            cpuBottleneck: yU,
            frameIntervalCv: QU,
            ...DU
          }, EU, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), IU);
        if (! function(UU, XU, zU) {
            return (0, cz.e)(), UU(pU.l.Send, XU, zU)
          }(this.shell.writeCmd, NU.ud, function(UU) {
            const XU = (0, HU.e)((0, Az.c)(UU)),
              zU = new Uint8Array(pU.be.BYTES + XU.length);
            return new DataView(zU.buffer).setUint16(0, Az.b.AnalyticsUpdate, !0), zU.set(XU, pU.be.BYTES), zU
          }(aU))) return this.unsentPage = IU, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Lo.g), (0, fo.m)(aU, "wasm", YU)
      }
    }
    var AD = zU(40504);

    function FD(UU, XU, zU) {
      const cU = new Map;
      return (0, AD.c)(((UU, zU, cU) => XU.yF(UU, zU, cU)), ((XU, zU, yU) => {
        const QU = `${XU},${zU},${yU}`;
        return cU.has(QU) || cU.set(QU, (0, xX.c)(UU, XU, zU, yU)), cU.get(QU)
      }), zU)
    }
    var oD = zU(40510),
      DD = zU(41976);

    function ED(UU) {
      const XU = null !== UU && 0 !== (pU.w.playerFlags(UU.api.apiView, 0) & pU.Od.CursorAim);
      XU !== (0, DD.k)() && (0, DD.F)(XU, null !== UU)
    }

    function YD(UU) {
      return (0, qc.d)(Oc.G, UU)
    }
    var ND = zU(42133);
    const ID = new QU.f((UU => zU(53669)(`./${UU}/${UU}Client`)));
    let pD = null,
      aD = null;
    async function tD(UU) {
      pD ??= zU.e(32).then((() => zU(39983))).then((UU => {
        aD = UU.createDefaultClientPlugins
      }), (UU => {
        throw pD = null, UU
      })), await Promise.all([ID.load(UU), pD])
    }

    function gD(UU) {
      UU.load(new nX(Ay, new Dy))
    }
    let kD = !1;
    const GD = new WeakMap;

    function BD(UU) {
      try {
        UU()
      } catch (XU) {
        console.error("[bloxd-wasm-client] a session-end step failed", XU)
      }
    }

    function ZD(UU, XU) {
      ! function() {
        var UU, XU;
        cy.Howler.volume();
        const zU = cy.Howler;
        null === (UU = zU._autoResume) || void 0 === UU || UU.call(zU), null === (XU = zU._autoSuspend) || void 0 === XU || XU.call(zU)
      }();
      const zU = new BU(XU.core, XU.memory, XU.audio);
      let QU;
      try {
        QU = new qy(zU, XU.options)
      } catch (NU) {
        return UU.crash(Sy.C, NU), null
      }(0, oU.f)(Oy(zU, QU));
      const EU = new sF({
        running: UU,
        api: zU,
        core: XU.core,
        memory: XU.memory,
        staleOr: XU.staleOr,
        reportFault: XU.reportReplayFault,
        options: XU.options,
        sessionInfo: XU.sessionInfo,
        replayShaderPack: XU.replayShaderPack
      });
      (0, tc.y)();
      const YU = new bc({
        api: zU,
        tables: QU,
        sessionInfo: XU.sessionInfo,
        gameFactory: UU => ID.loadedFactory(UU),
        defaultPlugins: (UU, XU, zU, cU) => {
          if (null === aD) throw new Error("The default plugins started before they loaded");
          return aD(UU, XU, zU, cU)
        },
        serverOptions: XU.options,
        onNetEvent: UU => {
          EU.netEvent(UU), XU.onNetEvent(UU)
        },
        setLocalOptions: XU => {
          mF(UU, {
            changes: XU,
            reset: !1
          })
        },
        playSound: (UU, zU, cU, yU, QU, AU, FU) => XU.audio.playGame(UU, zU, cU, yU, QU, AU, FU),
        preloadSounds: UU => {
          XU.audio.preload(function(UU) {
            const XU = [];
            for (const zU of UU) {
              const UU = SX(zU);
              if (null !== UU)
                for (let zU = UU[0]; zU < UU[0] + UU[1]; zU++) XU.push(zU)
            }
            return XU
          }(UU))
        },
        onSessionEnd: () => {
          BD(yU.m), BD(ty), BD((() => {
            cU.e.set({
              openInGameMenuName: null
            })
          })), BD((() => {
            XU.audio.endSession()
          }))
        },
        beforeWrite: XU.beforeWrite,
        beforeOp: XU.beforeOp,
        cameraScreen: ay,
        showCameraFacing: gy,
        onEventOverflow: XU.onEventOverflow,
        screenBandY: FU.l,
        replayEntities: EU.entityHooks,
        hasPackModel: XU.hasPackModel
      });
      return YU.attach(UU), GD.set(YU, EU), Xy(YU.items, XU.audio),
        function(UU) {
          UU.setClientFreeCameraGrant("isDev", !1);
          const XU = XU => {
            UU.setClientFreeCameraGrant("hasDeveloperRank", XU.playerHasRank("developer"))
          };
          (0, AU.n)("userContextUpdated", XU)
        }(YU), kD || (kD = !0, (0, AU.n)("appManagerUpdated|openInGameMenuName", (UU => {
          !UU && (0, DU.p)().includes(DU.c) && (0, DU.s)(DU.c)
        }))), YU
    }

    function RD(UU) {
      try {
        UU.closeGame()
      } finally {
        var XU;
        null === (XU = GD.get(UU)) || void 0 === XU || XU.stop(), GD.delete(UU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);