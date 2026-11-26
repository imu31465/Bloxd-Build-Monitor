export const id = 68;
export const ids = [68];
export const modules = {
  53997: (BB, OB, GB) => {
    var YB = {
      "./bedwars/bedwarsClient": [39987, 9],
      "./bridgeBattle/bridgeBattleClient": [39993, 10],
      "./buildAFactory2/buildAFactory2Client": [39142, 87, 85, 252, 270, 11],
      "./classic/classicClient": [40001, 12],
      "./classic/smp2Client": [40007, 13],
      "./clutch/clutchClient": [40014, 14],
      "./containmentBreach/containmentBreachClient": [40020, 247, 15],
      "./cooking/cookingClient": [40147, 16],
      "./defusal/defusalClient": [40152, 17],
      "./frontline/frontlineClient": [40161, 87, 85, 18],
      "./goalRush/goalRushClient": [40177, 19],
      "./greenville/greenvilleClient": [40181, 172, 275, 20],
      "./hideseek/hideseekClient": [40213, 21],
      "./luckyBedwars/luckyBedwarsClient": [40220, 22],
      "./murderMystery/murderMysteryClient": [40226, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40232, 24],
      "./oneBlock/oneBlockClient": [40235, 25],
      "./plots/plotsClient": [40237, 269, 247, 26],
      "./pvpCiv/pvpCivClient": [40308, 27],
      "./secretSanta/secretSantaClient": [40312, 28],
      "./skyIslands/skyIslandsClient": [40319, 29],
      "./skyblock/skyblockClient": [39184, 87, 261, 252, 172, 241, 30],
      "./tsunami/tsunamiClient": [40322, 31]
    };

    function DB(BB) {
      if (!GB.o(YB, BB)) return Promise.resolve().then((() => {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }));
      var OB = YB[BB],
        DB = OB[0];
      return Promise.all(OB.slice(1).map(GB.e)).then((() => GB(DB)))
    }
    DB.keys = () => Object.keys(YB), DB.id = 53997, BB.exports = DB
  },
  39732: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      g: () => DB
    });
    var YB = GB(25);

    function DB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function QB(BB, OB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([GB.e(120), GB.e(121), GB.e(116), GB.e(118), GB.e(240)]).then((() => GB(44867))).then((GB => {
        let {
          runClientGameMessage: YB
        } = GB;
        YB(BB, OB)
      })).catch((OB => {
        console.error(`Game message ${BB} failed`, OB)
      })) : YB.o.tM("showPetUi", OB) : YB.o.tM("refetchCode")
    }
  },
  53993: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      d: () => DB
    });
    const YB = ["recording", "freecam", "keyframe"];

    function DB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  34722: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      e: () => yB
    });
    var YB = GB(16);
    const DB = 24,
      QB = "farNametags",
      oB = 1e5;

    function jB() {
      var BB;
      return null === (BB = YB.c.get("showDistantNametags")) || void 0 === BB || BB
    }

    function yB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(QB),
          OB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(OB) && OB >= 0 ? Math.min(OB, oB) : null
      }()) && void 0 !== BB ? BB : jB() ? 0 : DB
    }
  },
  45727: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      blockIdOf: () => yJ.d,
      clearWasmCameraScreen: () => ZD,
      creativeItemIds: () => qY.creativeItemIds,
      decodeMapSettings: () => PJ,
      drainTextRerasters: () => Oy.c,
      enchantmentPerksOf: () => qY.enchantmentPerksOf,
      endGameHost: () => SJ,
      followCursorAim: () => MJ,
      followMenuPrefs: () => qQ,
      loadAudio: () => NJ,
      loadClientGame: () => ZJ,
      loadTextIcons: () => Oy.e,
      rasterText: () => By.f,
      readBoardToEdit: () => jJ,
      readDrawCensus: () => zJ.e,
      setTextHost: () => Oy.o,
      setTextLocalPlayer: () => Oy.q,
      showInCreativeInvenOf: () => qY.showInCreativeInvenOf,
      startGameHost: () => VJ,
      startShellAnalytics: () => DJ,
      startSkyFeed: () => ny,
      textChanged: () => Oy.w,
      warmText: () => By.i,
      wasmCameraScreen: () => qD
    });
    GB(37173);
    var YB = GB(16),
      DB = GB(37508),
      QB = GB(39879),
      oB = GB(25),
      jB = GB(3824),
      yB = GB(37500),
      JB = GB(1293),
      MB = GB(633),
      PB = GB(38894),
      zB = GB(5281),
      lB = GB(41646),
      pB = GB(41579);
    const qB = pB.Kb / 4,
      ZB = pB.r.PlaySound,
      NB = pB.r.SoundReset,
      RB = zB.Y.ReplayFailed,
      WB = zB.Y.RecorderEvent;
    class AB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = BB, this.memory = OB, this.audio = GB, this.serverIds = new Int32Array(256).fill(pB.cd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(pB.u.BYTES)), this.renderPtr = 0, this.CP = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new pB.Z(BB, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.FQB(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(BB, OB) {
        const GB = this.eventView();
        return new Uint8Array(GB.buffer, GB.byteOffset + BB, OB)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return pB.u.localId(this.apiView, 0)
      }
      localDeaths() {
        return pB.u.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const BB = this.apiView,
          OB = pB.u.entRenderPtr(BB, 0),
          GB = pB.u.entVisPtr(BB, 0),
          YB = pB.u.entCapacity(BB, 0);
        if (OB !== this.renderPtr || GB !== this.visPtr || YB !== this.CP || this.renderBuffer !== this.buffer) {
          this.renderPtr = OB, this.visPtr = GB, this.CP = YB, this.renderBuffer = this.buffer;
          const BB = this.memoryView(Float32Array, OB, YB * qB, "the render array"),
            DB = this.memoryView(Uint8Array, GB, YB, "the visibility array");
          this.renderCapacity = BB && DB ? YB : 0, this.render = BB && DB ? BB : new Float32Array(0), this.vis = BB && DB ? DB : new Uint8Array(0)
        }
      }
      memoryView(BB, OB, GB, YB) {
        try {
          return (0, lB.k)(BB, this.memory().buffer, OB, GB, YB)
        } catch (DB) {
          return this.keepCorruption(DB), null
        }
      }
      memoryData(BB, OB, GB, YB) {
        try {
          return (0, lB.c)(this.memory().buffer, BB, OB, GB, YB)
        } catch (DB) {
          return this.keepCorruption(DB), null
        }
      }
      scratchData(BB, OB) {
        const GB = this.scratch(),
          YB = this.scratchView;
        return (null === YB || void 0 === YB ? void 0 : YB.buffer) === this.memory().buffer && YB.byteOffset === GB && YB.byteLength >= BB ? YB : (this.scratchView = this.memoryData(GB, BB, 8, OB), this.scratchView)
      }
      reportCorruption(BB) {
        this.keepCorruption(new lB.b(BB))
      }
      keepCorruption(BB) {
        if (!(BB instanceof lB.b)) throw BB;
        this.corruption ??= BB
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(BB, OB, GB) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: YB,
          len: DB
        } = BB;
        this.eventsPtr = YB, this.eventsLen = DB, this.eventsBuffer = null;
        const QB = this.eventView();
        for (let JB = 0; JB < DB;) {
          const BB = QB.getUint32(JB, !0),
            GB = 65535 & BB,
            YB = BB >>> 16,
            DB = JB + zB.V;
          if (GB === pB.r.EntitySpawned) {
            var oB;
            if (YB !== pB.Pb.BYTES) throw fB(GB, JB, YB);
            const BB = pB.Pb.serverId(QB, DB);
            this.spawned(BB, pB.Pb.index(QB, DB), pB.Pb.kind(QB, DB)), null === (oB = OB.entityAdded) || void 0 === oB || oB.call(OB, BB)
          } else if ((GB === pB.r.ChunkSlot || GB === pB.r.EntityInfoChanged) && !(0, pB.ne)(GB, QB, DB, YB, OB)) throw fB(GB, JB, YB);
          JB = DB + (0, zB.qe)(YB)
        }
        try {
          var jB;
          null === (jB = OB.afterPrescan) || void 0 === jB || jB.call(OB), this.throwCorruption(), !GB() && this.dispatch(BB, OB, GB) && (this.throwCorruption(), this.applyListener(), OB.afterWalk(BB.kind)), this.throwCorruption()
        } catch (yB) {
          throw yB instanceof lB.b && (this.corruption ??= yB), yB
        } finally {
          GB() || null !== this.corruption || this.applyDespawns(DB, OB)
        }
      }
      applyDespawns(BB, OB) {
        const GB = this.eventView();
        for (let DB = 0; DB < BB;) {
          const BB = GB.getUint32(DB, !0),
            QB = DB + zB.V;
          if ((65535 & BB) === pB.r.EntityDespawned && BB >>> 16 === pB.Pb.BYTES) {
            const BB = pB.Pb.serverId(GB, QB);
            var YB;
            if (this.despawned(BB, pB.Pb.index(GB, QB))) null === (YB = OB.entityRemoved) || void 0 === YB || YB.call(OB, BB)
          }
          DB = QB + (0, zB.qe)(BB >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(BB, OB, GB) {
        const {
          len: YB,
          net: DB,
          netOffsets: QB
        } = BB;
        let oB = this.eventView(),
          jB = 0;
        for (let nB = 0; nB < YB;) {
          const BB = oB.getUint32(nB, !0),
            YB = 65535 & BB,
            kB = BB >>> 16,
            dB = nB + zB.V;
          let KB = !1;
          if (jB < DB.length && QB[jB] === nB) OB.netEvent(DB[jB]), jB++, KB = !0;
          else if (YB === zB.Y.LocalPlayerBound) {
            var yB;
            if (kB !== zB.Qb) throw fB(YB, nB, kB);
            null === (yB = OB.localPlayerBound) || void 0 === yB || yB.call(OB, oB.getInt32(dB, !0)), KB = !0
          } else if (YB === zB.Y.LocalHurt) {
            var JB;
            if (kB !== zB.Mb) throw fB(YB, nB, kB);
            null === (JB = OB.localHurt) || void 0 === JB || JB.call(OB, oB.getInt32(dB, !0), oB.getFloat32(dB + 4, !0), oB.getUint32(dB + 8, !0)), KB = !0
          } else if (YB === zB.Y.AttackHit) {
            var MB;
            if (kB !== zB.b) throw fB(YB, nB, kB);
            const BB = oB.getFloat32(dB, !0),
              GB = oB.getFloat32(dB + 4, !0),
              DB = oB.getFloat32(dB + 8, !0),
              QB = oB.getUint32(dB + 12, !0);
            null === (MB = OB.attackHit) || void 0 === MB || MB.call(OB, BB, GB, DB, 0 !== (QB & zB.j.Crit), 0 !== (QB & zB.j.HitSelf))
          } else if (YB === zB.Y.PhysicsType) {
            var PB;
            if (kB !== zB.nc) throw fB(YB, nB, kB);
            null === (PB = OB.physicsType) || void 0 === PB || PB.call(OB, oB.getUint32(dB, !0), oB.getInt32(dB + 4, !0)), KB = !0
          } else if (YB === zB.Y.VehicleEffect) {
            var lB;
            const BB = UB(oB, dB, kB);
            if (null === BB) throw fB(YB, nB, kB);
            null === (lB = OB.vehicleEffect) || void 0 === lB || lB.call(OB, BB.op, BB.name, BB.icon, BB.level, BB.durationMs), KB = !0
          } else if (YB === zB.Y.ZoomChanged) {
            var qB;
            if (kB !== zB.Zd) throw fB(YB, nB, kB);
            null === (qB = OB.zoomChanged) || void 0 === qB || qB.call(OB, oB.getFloat32(dB, !0), oB.getUint8(dB + 4)), KB = !0
          } else if (YB === zB.Y.ZoomDisabled) {
            var AB;
            if (0 !== kB) throw fB(YB, nB, kB);
            null === (AB = OB.zoomDisabled) || void 0 === AB || AB.call(OB), KB = !0
          } else if (YB === zB.Y.BhopDisabled) {
            var VB;
            if (0 !== kB) throw fB(YB, nB, kB);
            null === (VB = OB.bhopDisabled) || void 0 === VB || VB.call(OB), KB = !0
          } else if (YB === zB.Y.GameCamera) {
            var SB;
            null === (SB = OB.gameCamera) || void 0 === SB || SB.call(OB, new Uint8Array(oB.buffer, oB.byteOffset + dB, kB).slice()), KB = !0
          } else if (YB === pB.r.ChunkSlot || YB === pB.r.EntityInfoChanged);
          else if (YB >= ZB && YB <= NB) {
            if (this.audio && !this.audio.onAudioEvent(YB, oB, dB, kB)) throw fB(YB, nB, kB)
          } else if (YB >= RB && YB <= WB) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(YB, oB, dB, kB)) throw fB(YB, nB, kB);
              KB = !0
            }
          } else if (YB >= pB.qd && YB <= pB.td && YB !== zB.Y.EnvLighting) {
            if (!(0, pB.ne)(YB, oB, dB, kB, OB)) throw fB(YB, nB, kB);
            KB = !0
          }
          if (KB) {
            if (GB()) return !1;
            oB = this.eventView()
          }
          nB = dB + (0, zB.qe)(kB)
        }
        return !GB()
      }
      applyListener() {
        var BB;
        if (!this.audio) return;
        const OB = pB.u.audioViewPtr(this.apiView, 0),
          GB = this.memory().buffer;
        let YB = this.audioView;
        (null === (BB = YB) || void 0 === BB ? void 0 : BB.buffer) === GB && YB.byteOffset === OB || (YB = (0, lB.c)(GB, OB, pB.v.BYTES, 8, "the audio view"), this.audioView = YB), YB && this.audio.applyListener(YB)
      }
      indexOf(BB) {
        return this.indexById.get("number" === typeof BB ? BB : +BB)
      }
      isLocal(BB) {
        return BB !== pB.cd && BB === pB.u.localId(this.apiView, 0)
      }
      pR(BB) {
        const OB = [0, 0, 0];
        return this.readPosition("number" === typeof BB ? BB : +BB, OB) ? OB : null
      }
      readPosition(BB, OB) {
        const GB = this.apiView;
        if (void 0 !== this.indexById.get(BB) && this.isLocal(BB)) {
          for (let BB = 0; BB < 3; BB++) OB[BB] = pB.u.localPos(GB, 0, BB);
          return !0
        }
        return this.readDrawnPosition(BB, OB)
      }
      readDrawnPosition(BB, OB) {
        const GB = this.apiView,
          YB = this.indexById.get(BB);
        if (void 0 === YB || YB >= this.renderCapacity) return OB[0] = OB[1] = OB[2] = NaN, !1;
        const DB = YB * qB;
        for (let QB = 0; QB < 3; QB++) OB[QB] = this.render[DB + QB] + pB.u.origin(GB, 0, QB);
        return !0
      }
      checkValid(BB) {
        return void 0 !== this.indexOf(BB)
      }
      isAlive(BB) {
        const OB = this.indexOf(BB);
        if (void 0 === OB) return null;
        if (this.ensureViews(), OB >= this.renderCapacity) return null;
        const GB = this.vis[OB];
        return 0 === GB ? null : 0 !== (GB & pB.me.Alive)
      }
      getEntityType(BB) {
        const OB = this.indexOf(BB);
        return void 0 === OB ? this.isLocal("number" === typeof BB ? BB : +BB) ? "Player" : null : SB(this.kinds[OB])
      }
      spawned(BB, OB, GB) {
        if (OB >= 1048576) throw new lB.b(`entity ${BB} spawned at index ${OB}`);
        this.ensureIndex(OB), this.serverIds[OB] === BB && null !== this.idStr[OB] || (this.idStr[OB] = String(BB)), this.serverIds[OB] = BB, this.kinds[OB] = GB, this.indexById.set(BB, OB)
      }
      despawned(BB, OB) {
        let GB = !1;
        return this.indexById.get(BB) === OB && (this.indexById.delete(BB), GB = !0), OB < this.serverIds.length && this.serverIds[OB] === BB && (this.serverIds[OB] = pB.cd, this.kinds[OB] = 0, this.idStr[OB] = null), GB
      }
      ensureIndex(BB) {
        const OB = this.serverIds.length;
        if (BB < OB) return;
        let GB = 2 * OB;
        for (; GB <= BB;) GB *= 2;
        const YB = new Int32Array(GB).fill(pB.cd);
        YB.set(this.serverIds), this.serverIds = YB;
        const DB = new Uint16Array(GB);
        DB.set(this.kinds), this.kinds = DB;
        for (let QB = OB; QB < GB; QB++) this.idStr.push(null)
      }
      eventView() {
        const BB = this.memory().buffer;
        return BB !== this.eventsBuffer && (this.eventsBuffer = BB, this.events = new DataView(BB, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const BB = this.memory().buffer;
        this.buffer = BB, this.viewPtr < 0 && (this.viewPtr = this.core.iQB()), this.view = new DataView(BB, this.viewPtr, pB.u.BYTES), this.rereadDirectory()
      }
    }

    function VB(BB) {
      return BB >>> pB.c === pB.t.Item
    }

    function SB(BB) {
      var OB, GB;
      const YB = BB & pB.g;
      switch (BB >>> pB.c) {
        case pB.t.Lifeform:
          return null !== (OB = MB.j[YB]) && void 0 !== OB ? OB : null;
        case pB.t.Throwable:
          return null !== (GB = PB.n[YB]) && void 0 !== GB ? GB : null;
        case pB.t.Mesh:
          return "Mesh";
        case pB.t.Audio:
          return "AudioEntity";
        case pB.t.Item:
          return "Item";
        default:
          return null
      }
    }
    const nB = new TextDecoder;

    function UB(BB, OB, GB) {
      if (GB < zB.Gd.HEAD_BYTES) return null;
      const YB = BB.getUint32(OB, !0),
        DB = BB.getUint32(OB + 20, !0),
        QB = BB.getUint32(OB + 24, !0),
        oB = zB.Gd.HEAD_BYTES + (0, zB.qe)(DB);
      if (YB !== zB.Gd.UPDATE && YB !== zB.Gd.REMOVE || DB > GB || oB + QB > GB) return null;
      const jB = (GB, YB) => nB.decode(new Uint8Array(BB.buffer, BB.byteOffset + OB + GB, YB)),
        yB = BB.getFloat64(OB + 12, !0);
      return {
        op: YB,
        level: BB.getFloat64(OB + 4, !0),
        durationMs: Number.isNaN(yB) ? null : yB,
        name: jB(zB.Gd.HEAD_BYTES, DB),
        icon: jB(oB, QB)
      }
    }

    function fB(BB, OB, GB) {
      return new lB.b(`event ${BB} at ${OB} of ${GB} bytes`)
    }
    var kB = GB(6991),
      dB = GB(353),
      KB = GB(1217),
      uB = GB(39876),
      mB = GB(39732),
      IB = GB(2038),
      FB = GB(42031),
      iB = GB(1998),
      LB = GB(39892),
      gB = GB(39913),
      rB = GB(39898),
      XB = GB(39889),
      wB = GB(41630),
      EB = GB(2619),
      cB = GB(39910);

    function hB(BB) {
      if (!(0, cB.f)(BB)) return null;
      const OB = Number(BB);
      return (0 | OB) === OB ? OB : null
    }
    class aB {
      constructor(BB) {
        this.api = BB, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, XB.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.MG = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = pB.cd, this.localName = String(pB.cd)
      }
      readView() {
        this.defaultPoseRead = !1, this.MG = null;
        const BB = this.api.queries.directorView() >= pB.zb.BYTES ? this.api.scratchData(pB.zb.BYTES, "the director's view") : null;
        null !== BB && (this.defaultFov = (0, iB.B)(pB.zb.fov(BB, 0)), this.baseFov = (0, iB.B)(pB.zb.baseFov(BB, 0)), this.aspect = pB.zb.aspect(BB, 0), this.bodyHeading = pB.zb.bodyHeading(BB, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(BB) {
        this.viewHeading = BB
      }
      get localPlayerId() {
        const BB = pB.u.localId(this.api.apiView, 0);
        return BB !== this.localId && (this.localId = BB, this.localName = String(BB)), this.localName
      }
      getEntityPosition(BB) {
        return this.readEntity(BB) ? this.entityFeet : null
      }
      getEntityAimPoint(BB) {
        return this.readEntity(BB) ? this.entityAim : null
      }
      getEntityHeading(BB) {
        const OB = hB(BB);
        if (null === OB) return null;
        const GB = pB.u.localId(this.api.apiView, 0);
        return OB === GB && GB !== pB.cd ? this.viewHeading : this.readEntity(BB) ? this.entityHeading : null
      }
      getEntityPitch(BB) {
        return this.readEntity(BB) ? this.entityPitch : null
      }
      getEntityLookHeading(BB) {
        return this.readEntity(BB) ? this.entityLookHeading : null
      }
      raycastTerrain(BB, OB, GB) {
        const YB = this.api.queries.cameraSweep(BB[0], BB[1], BB[2], OB[0], OB[1], OB[2], GB);
        return YB < GB - 1e-6 ? YB : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const BB = this.defaultPose;
        BB.fov = this.defaultFov;
        const OB = this.api.queries.directorDefaultPose() >= pB.vb.BYTES ? this.api.scratchData(pB.vb.BYTES, "the director's default pose") : null;
        if (null === OB) return BB;
        for (let GB = 0; GB < 3; GB++) BB.position[GB] = pB.vb.eye(OB, 0, GB);
        return BB.heading = pB.vb.heading(OB, 0), BB.pitch = pB.vb.pitch(OB, 0), BB
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
      readEntity(BB) {
        const OB = hB(BB);
        if (null === OB) return !1;
        if (OB === this.MG) return this.entityLive;
        this.MG = OB;
        const GB = this.api.queries.directorEntity(OB) >= pB.xb.BYTES ? this.api.scratchData(pB.xb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== GB, null === GB) return !1;
        for (let QB = 0; QB < 3; QB++) this.entityFeet[QB] = pB.xb.feet(GB, 0, QB), this.entityAim[QB] = this.entityFeet[QB];
        this.entityAim[1] += pB.xb.eyeHeight(GB, 0), this.entityHeading = pB.xb.heading(GB, 0);
        const YB = pB.xb.pitch(GB, 0);
        this.entityPitch = Number.isNaN(YB) ? null : YB;
        const DB = pB.xb.lookHeading(GB, 0);
        return this.entityLookHeading = Number.isNaN(DB) ? null : DB, !0
      }
    }
    const eB = {
        mode: "default"
      },
      TB = {
        show: () => {},
        clear: () => {}
      };

    function bB() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class CB {
      constructor(BB) {
        this.options = BB, this.mP = void 0, this.director = void 0, this.latest = eB, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          Rm: 0,
          Wm: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = pB.tb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.DZ = new Int32Array(3 * pB.Rd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * pB.Rd), this.mP = new aB(BB.api), this.director = new rB.e(this.mP)
      }
      settingsChanged(BB) {
        let OB = eB;
        if (BB.length > 0) try {
          OB = (0, wB.b)(BB)
        } catch {}
        this.latest = OB, this.pending = OB
      }
      call(BB, OB, GB, YB, DB, QB) {
        var oB, jB;
        this.holding = !1;
        const yB = this.answeredPose && 0 === (YB & pB.yb.Held);
        let JB;
        try {
          JB = this.answer(BB, OB, GB, YB, DB, QB), this.threw = !1
        } catch (MB) {
          this.options.reportError(MB);
          JB = !this.threw && this.answeredPose && !yB ? this.sendLastPose() : pB.tb.None, this.threw = !0
        }
        return this.answeredPose = JB !== pB.tb.None, this.holding = this.answeredPose && !yB, null === (oB = (jB = this.options).showFacing) || void 0 === oB || oB.call(jB, this.holding ? this.facing : null), JB
      }
      holdsView() {
        return this.holding
      }
      answer(BB, OB, GB, YB, DB, QB) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          mP: oB
        } = this;
        oB.readView();
        if (0 !== (YB & pB.yb.Held) || oB.setViewHeading((0, LB.x)(oB.bodyHeading)), void 0 !== this.pending) {
          const BB = this.pending;
          this.pending = void 0, this.director.setSettings(BB), this.syncShownSettings()
        }
        this.readLook((0, EB.d)(OB), (0, EB.d)(GB), YB, (0, EB.d)(DB), (0, EB.d)(QB));
        const jB = this.director.update(BB / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !jB) return pB.tb.None;
        const yB = this.lastPose;
        return (0, XB.h)(jB.position, yB.position), yB.heading = (0, LB.x)(jB.heading), yB.pitch = (0, LB.e)(jB.pitch), yB.fovRadians = (0, iB.h)(jB.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return pB.tb.Pose;
        switch (this.facing) {
          case "camera":
            return pB.tb.FaceCamera;
          case "cursor":
            return pB.tb.FaceCursor;
          default:
            return pB.tb.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: BB,
          heading: OB,
          pitch: GB,
          fovRadians: YB
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(BB[0], BB[1], BB[2], OB, GB, YB) ? pB.tb.None : this.lastAnswer
      }
      afterFrame(BB) {
        BB ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = eB, this.idle()
      }
      restart() {
        const BB = this.holding;
        this.idle(), this.holding = BB
      }
      idle() {
        var BB, OB;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new rB.e(this.mP), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (BB = (OB = this.options).showFacing) || void 0 === BB || BB.call(OB, null), this.setCentres(0)
      }
      syncShownSettings() {
        const BB = this.director.getSettings();
        if (BB === this.shownSettings) return;
        this.shownSettings = BB;
        const OB = (0, gB.h)(BB);
        this.facing = OB.facing, this.mouseTurns = OB.mouseTurns
      }
      readLook(BB, OB, GB, YB, DB) {
        const QB = this.look,
          oB = 0 !== (GB & pB.yb.LookPointed);
        if (null === this.mouseTurns && !oB) return QB.Rm = 0, QB.Wm = 0, void(QB.pointedAt = void 0);
        let jB;
        oB && (this.pointedAt.heading = YB, this.pointedAt.pitch = DB, jB = this.pointedAt);
        const {
          mP: yB
        } = this;
        yB.setViewHeading((0, gB.e)(yB.getViewHeading(), BB, OB, jB, "look" === this.mouseTurns, QB))
      }
      writeCentres(BB) {
        const OB = this.next,
          GB = Math.min(BB.length, pB.Rd);
        for (let YB = 0; YB < GB; YB++)
          for (let GB = 0; GB < 3; GB++) OB[3 * YB + GB] = Math.floor(BB[YB][GB] / pB.E);
        this.setCentres(GB)
      }
      setCentres(BB) {
        const {
          DZ: OB,
          next: GB
        } = this;
        let YB = BB === this.centresLen;
        for (let DB = 0; YB && DB < 3 * BB; DB++) YB = OB[DB] === GB[DB];
        YB || (OB.fill(0), OB.set(GB.subarray(0, 3 * BB)), this.centresLen = BB, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const BB = this.options.cmd();
        null !== BB && (0, pB.Kf)(BB, 0, this.DZ, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var BB, OB, GB;
        return null !== (BB = null === (OB = (GB = this.options).screen) || void 0 === OB ? void 0 : OB.call(GB)) && void 0 !== BB ? BB : TB
      }
      hidden() {
        var BB;
        return (null !== (BB = this.options.isPageHidden) && void 0 !== BB ? BB : bB)()
      }
      now() {
        var BB, OB, GB;
        return null !== (BB = null === (OB = (GB = this.options).now) || void 0 === OB ? void 0 : OB.call(GB)) && void 0 !== BB ? BB : performance.now()
      }
    }
    var HB = GB(39824),
      vB = GB(41812);
    const sB = pB.E * pB.E * pB.E,
      xB = Math.log2(pB.E),
      tB = pB.E - 1,
      BO = 65535,
      OO = pB.O.BYTES / 4,
      GO = new Uint16Array(sB);

    function YO(BB, OB, GB) {
      return BB * pB.E * pB.E + OB * pB.E + GB
    }
    class DO {
      constructor(BB) {
        this.chunk = BB
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(BB, OB, GB) {
        return YO(BB, OB, GB)
      }
    }
    class QO {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class oO {
      constructor(BB, OB, GB, YB) {
        this.table = BB, this.slot = OB, this.generation = GB, this.epoch = YB, this.sz = new DO(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = GO, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Bq() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get al() {
        const BB = this.gameVoxels(),
          OB = this.layers ??= new Uint16Array(pB.E);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let GB = 0; 0 !== this.staleLayers; GB++) {
          const YB = 1 << GB;
          0 !== (this.staleLayers & YB) && (this.staleLayers &= ~YB, OB[GB] = jO(BB, GB))
        }
        return OB
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const BB = this.voxelData(),
          OB = this.writes;
        if (null === OB || 0 === OB.ids.size) return BB;
        if (OB.from !== BB) {
          const GB = OB.patched ??= new Uint16Array(sB);
          GB.set(BB);
          for (const [BB, YB] of OB.ids) GB[BB] = YB;
          OB.from = BB
        }
        return OB.patched
      }
      written(BB) {
        var OB;
        return null === (OB = this.writes) || void 0 === OB ? void 0 : OB.ids.get(BB)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(BB, OB, GB) {
        const YB = this.writes ??= new QO;
        YB.ids.set(BB, OB), GB && YB.cleared.add(BB), null !== YB.from && (YB.patched[BB] = OB);
        const DB = 1 << (BB >> xB & tB);
        YB.layers |= DB, this.staleLayers |= DB, this.writeCount++
      }
      clearWrites() {
        const BB = this.writes;
        null !== BB && (this.staleLayers |= BB.layers, BB.ids.clear(), BB.cleared.clear(), BB.layers = 0, BB.from = null)
      }
      dataCleared(BB) {
        var OB;
        return !0 === (null === (OB = this.writes) || void 0 === OB ? void 0 : OB.cleared.has(BB))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const BB = this.table.slotWords(),
          OB = this.slot * OO;
        if (this.epoch !== this.table.epoch || OB + OO > BB.length || 0 === BB[OB + 3] || BB[OB + 2] !== this.generation) return this.data = GO, this.dataPtr = 0, GO;
        this.version = BB[OB + 1];
        const GB = BB[OB + 0],
          YB = BB.buffer;
        return GB === this.dataPtr && YB === this.dataBuffer || (this.dataPtr = GB, this.dataBuffer = YB, this.data = this.table.voxelsAt(YB, GB)), this.data
      }
    }

    function jO(BB, OB) {
      const GB = BB[OB * pB.E];
      for (let YB = 0; YB < pB.E; YB++) {
        const DB = YO(YB, OB, 0);
        for (let OB = 0; OB < pB.E; OB++)
          if (BB[DB + OB] !== GB) return BO
      }
      return GB
    }
    const yO = new Uint32Array(0);

    function JO(BB, OB, GB) {
      return YO(BB & tB, OB & tB, GB & tB)
    }
    class MO {
      constructor(BB, OB) {
        this.memory = BB, this.apiView = OB, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = yO, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = yO, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(BB, OB, GB, YB, DB, QB) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, QB === pB.R.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (QB !== pB.R.Stored && QB !== pB.R.Unloaded) throw new lB.b(`ChunkSlot flags ${QB}`);
        const oB = (0, vB.e)(BB, OB, GB);
        if (oB < 0) return;
        if (QB === pB.R.Unloaded) return void this.chunks.delete(oB);
        const jB = this.chunks.get(oB);
        (null === jB || void 0 === jB ? void 0 : jB.slot) === YB && jB.generation === DB || this.chunks.set(oB, new oO(this, YB, DB, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const BB = this.apiView(),
          OB = pB.u.chunkSlotsPtr(BB, 0),
          GB = pB.u.chunkSlotsLen(BB, 0);
        OB === this.slotsPtr && GB === this.slotsLen || (this.slotsPtr = OB, this.slotsLen = GB, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const BB = this.apiView(),
          OB = pB.u.walkThroughPtr(BB, 0),
          GB = pB.u.walkThroughLen(BB, 0);
        OB === this.walkPtr && GB === this.walkLen || (this.walkPtr = OB, this.walkLen = GB, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const BB of this.written) BB.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const BB = this.memory().buffer;
        var OB;
        BB !== this.slotsBuffer && (this.slotsBuffer = BB, this.slots = null !== (OB = (0, lB.k)(Uint32Array, BB, this.slotsPtr, this.slotsLen * OO, "the chunk directory")) && void 0 !== OB ? OB : yO);
        return this.slots
      }
      voxelsAt(BB, OB) {
        try {
          var GB;
          return null !== (GB = (0, lB.k)(Uint16Array, BB, OB, sB, "a chunk's voxels")) && void 0 !== GB ? GB : GO
        } catch (YB) {
          if (!(YB instanceof lB.b)) throw YB;
          return this.corruption ??= YB, GO
        }
      }
      chunk(BB, OB, GB) {
        var YB;
        return null !== (YB = this.chunks.get((0, vB.e)(BB, OB, GB))) && void 0 !== YB ? YB : null
      }
      isLoaded(BB, OB, GB) {
        return void 0 !== this.chunkAt(Math.floor(BB), Math.floor(OB), Math.floor(GB))
      }
      SM(BB, OB, GB) {
        var YB;
        const DB = Math.floor(BB),
          QB = Math.floor(OB),
          oB = Math.floor(GB),
          jB = this.chunkAt(DB, QB, oB);
        if (!jB) return 0;
        const yB = JO(DB, QB, oB);
        return null !== (YB = jB.written(yB)) && void 0 !== YB ? YB : jB.voxelData()[yB]
      }
      setOverlay(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const QB = this.chunkAt(BB, OB, GB);
        return !!QB && (QB.hasWrites() || this.written.push(QB), QB.write(JO(BB, OB, GB), YB, DB), !0)
      }
      version(BB, OB, GB) {
        var YB, DB;
        return null !== (YB = null === (DB = this.chunks.get((0, vB.e)(BB, OB, GB))) || void 0 === DB ? void 0 : DB.Bq) && void 0 !== YB ? YB : null
      }
      scan(BB, OB, GB, YB, DB, QB, oB, jB) {
        const yB = pB.E;
        let JB = 0;
        for (let MB = Math.floor(OB / yB); MB * yB < DB; MB++) {
          const PB = MB * yB,
            zB = Math.min(DB - PB, yB);
          for (let DB = Math.floor(BB / yB); DB * yB < YB; DB++) {
            const lB = DB * yB,
              pB = Math.min(YB - lB, yB);
            for (let YB = Math.floor(GB / yB); YB * yB < QB; YB++) {
              const qB = this.chunks.get((0, vB.e)(DB, MB, YB));
              if (!qB) continue;
              const ZB = YB * yB,
                NB = Math.max(GB - ZB, 0),
                RB = Math.min(QB - ZB, yB),
                WB = qB.al,
                AB = qB.gameVoxels();
              for (let GB = Math.max(OB - PB, 0); GB < zB; GB++) {
                const OB = WB[GB];
                if (OB === BO || 0 !== oB[OB]) {
                  JB++;
                  for (let OB = Math.max(BB - lB, 0); OB < pB; OB++) {
                    const BB = YO(OB, GB, 0);
                    for (let YB = NB; YB < RB; YB++) {
                      const DB = AB[BB + YB];
                      0 !== oB[DB] && jB.push(lB + OB, PB + GB, ZB + YB, DB)
                    }
                  }
                }
              }
            }
          }
        }
        return JB
      }
      columnTops(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        (0, HB.b)(((BB, OB, GB) => {
          var YB;
          return null !== (YB = this.chunks.get((0, vB.e)(BB, OB, GB))) && void 0 !== YB ? YB : null
        }), BO, BB, OB, GB, YB, DB, QB, oB, jB, yB)
      }
      dataCleared(BB, OB, GB) {
        var YB;
        const DB = Math.floor(BB),
          QB = Math.floor(OB),
          oB = Math.floor(GB);
        return !0 === (null === (YB = this.chunkAt(DB, QB, oB)) || void 0 === YB ? void 0 : YB.dataCleared(JO(DB, QB, oB)))
      }
      isWalkThrough(BB) {
        if (!Number.isInteger(BB) || BB < 0 || BB > 65535) return !1;
        const OB = this.walkWords(),
          GB = BB >>> 5;
        return GB < OB.length && 1 === (OB[GB] >>> (31 & BB) & 1)
      }
      walkWords() {
        const BB = this.memory().buffer;
        var OB;
        BB !== this.walkBuffer && (this.walkBuffer = BB, this.walk = null !== (OB = (0, lB.k)(Uint32Array, BB, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== OB ? OB : yO);
        return this.walk
      }
      chunkAt(BB, OB, GB) {
        if ((0 | BB) !== BB || (0 | OB) !== OB || (0 | GB) !== GB) return;
        const YB = (0, vB.e)(BB >> xB, OB >> xB, GB >> xB);
        return YB !== this.lastKey && (this.lastKey = YB, this.lastChunk = this.chunks.get(YB)), this.lastChunk
      }
    }
    var PO = GB(39167),
      zO = GB(38488),
      lO = GB(38879),
      pO = GB(37486),
      qO = GB(37288),
      ZO = GB(34755),
      NO = GB(39827),
      RO = GB(192);
    const WO = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      AO = [
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
      VO = AO.map((BB => {
        let [OB] = BB;
        return OB
      })),
      SO = Uint8Array.from(AO, (BB => {
        let [, OB] = BB;
        return OB
      })),
      nO = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      UO = 8,
      fO = [
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
    var kO = GB(37443),
      dO = GB(37466),
      KO = GB(37461),
      uO = GB(244);
    class mO {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uO.b;
        this.sound = BB, this.onError = OB, this.idle = GB, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = BB => {
          this.cancelIdle = null;
          try {
            if (BB.timeRemaining() >= 1) {
              let BB = this.queue.shift();
              for (; void 0 !== BB && !this.load(BB);) BB = this.queue.shift()
            }
          } catch (OB) {
            this.onError(OB)
          } finally {
            this.schedule()
          }
        }
      }
      preload(BB) {
        const OB = [...BB].sort(((BB, OB) => BB - OB));
        for (const GB of OB) this.asked.has(GB) || (this.asked.add(GB), this.queue.push(GB));
        this.schedule()
      }
      cancel() {
        var BB;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(BB) {
        const OB = this.sound(BB, !1),
          GB = this.sound(BB, !0),
          [YB, DB] = "unloaded" === OB.state() && "unloaded" !== GB.state() ? [GB, OB] : [OB, GB],
          QB = this.gen,
          oB = () => {
            try {
              QB === this.gen && "unloaded" === DB.state() && DB.load()
            } catch (BB) {
              this.onError(BB)
            }
          },
          jB = YB.state();
        return "unloaded" === jB ? (YB.once("load", oB), YB.load(), !0) : "unloaded" === DB.state() && ("loading" === jB ? (YB.once("load", oB), !1) : (DB.load(), !0))
      }
    }
    var IO = GB(41907);

    function FO(BB) {
      var OB;
      const GB = function(BB) {
        let OB = 0,
          GB = VO.length;
        for (; OB < GB;) {
          const YB = OB + GB >>> 1;
          VO[YB] < BB ? OB = YB + 1 : GB = YB
        }
        return OB
      }(BB);
      if ("" === BB || null === (OB = VO[GB]) || void 0 === OB || !OB.startsWith(BB)) return null;
      if (VO[GB] === BB) return [GB, 1];
      let YB = GB + 1;
      for (; YB < VO.length && VO[YB].startsWith(BB);) YB++;
      return [GB, YB - GB]
    }

    function iO(BB) {
      let [OB, GB] = BB, YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === GB ? OB : OB + Math.floor(YB() * GB)
    }

    function LO(BB) {
      for (const OB of fO)
        if (OB[0] <= BB && BB < OB[0] + OB[1]) return OB;
      return null
    }

    function gO(BB) {
      const OB = [];
      for (let GB = 0; GB < SO.length; GB++) SO[GB] === BB && OB.push(GB);
      return OB
    }
    const rO = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      XO = RO.f.xZ * RO.f.playerEyeToHeightRatio,
      wO = [0, 0, -1, 0, 1, 0],
      EO = WO.indexOf("note");

    function cO(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }
    class hO {
      constructor(BB, OB, GB, YB, DB) {
        this.group = BB, this.loudness = OB, this.startMs = GB, this.howl = YB, this.host = DB, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const BB = this.host.alive(this.id);
        return BB ? 1e3 * this.howl.duration(this.id) / BB.rate : 0
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
    class aO {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          YB = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = BB, this.listener = OB, this.now = GB, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new KO.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: BB => this.aliveVoice(BB),
          started: BB => this.started.has(BB),
          drop: BB => {
            var OB;
            null === (OB = this.live.get(BB)) || void 0 === OB || OB.howl.stop(BB), this.forget(BB)
          }
        }, this.handlers = {
          playSound: (BB, OB, GB, YB, DB, QB, oB, jB, yB) => {
            if (YB >= VO.length) return;
            const JB = 0 !== (DB & pB.ce.Loop);
            DB & pB.ce.TwoD ? this.start(YB, !1, oB, QB, jB, JB, LO(YB)) : this.startSpatial(YB, oB, QB, jB, JB, BB, OB, GB, yB, this.earDistSq(BB, OB, GB), LO(YB))
          },
          soundPos: (BB, OB, GB, YB) => {
            const DB = this.core.get(YB);
            var QB;
            void 0 !== DB && (null === (QB = this.live.get(DB)) || void 0 === QB || QB.howl.pos(GB, OB, BB, DB))
          },
          soundSet: (BB, OB, GB, YB) => {
            const DB = this.core.get(BB),
              QB = void 0 === DB ? void 0 : this.live.get(DB);
            void 0 !== DB && QB && (this.setRel(DB, OB), QB.rate = GB, QB.howl.rate(GB, DB), QB.spatial && QB.howl.pannerAttr({
              refDistance: YB
            }, DB))
          },
          soundFade: (BB, OB, GB, YB) => {
            const DB = this.core.get(BB);
            void 0 !== DB && this.fade(DB, OB, GB, 0 !== (YB & pB.$d.StopAfter))
          },
          soundStop: BB => {
            const OB = this.core.get(BB);
            var GB;
            void 0 !== OB && (null === (GB = this.live.get(OB)) || void 0 === GB || GB.howl.stop(OB), this.forget(OB))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new mO(((BB, OB) => this.howl(BB, OB)), (BB => {
          this.errors++, console.error("Audio preload failed", BB)
        }), YB)
      }
      preload(BB) {
        this.loader.preload(BB)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let BB = 0; BB < VO.length; BB++) {
          if (dO.b.has(WO[SO[BB]])) continue;
          const OB = [];
          for (const GB of [!1, !0]) {
            const YB = eO(BB, GB),
              DB = this.howls.get(YB);
            void 0 !== DB && "loading" !== DB.state() && OB.push({
              key: YB,
              howl: DB
            })
          }
          if (OB.some((BB => {
              let {
                howl: OB
              } = BB;
              return "loaded" === OB.state()
            })))
            for (const {
                key: BB,
                howl: GB
              }
              of OB) this.howls.delete(BB), "loaded" === GB.state() ? (0, kO.e)(GB) : GB.unload()
        }
      }
      onAudioEvent(BB, OB, GB, YB) {
        if (BB < pB.r.PlaySound || BB > pB.r.SoundReset) return !1;
        try {
          return (0, pB.ne)(BB, OB, GB, YB, this.handlers)
        } catch (DB) {
          return this.errors++, console.error("Audio event failed", DB), !0
        }
      }
      applyListener(BB) {
        const OB = this.nextPose;
        for (let YB = 0; YB < 3; YB++) OB[2 - YB] = pB.v.listener(BB, 0, YB), OB[5 - YB] = pB.v.forward(BB, 0, YB), OB[8 - YB] = pB.v.up(BB, 0, YB);
        0 === OB[3] && 0 === OB[4] && 0 === OB[5] && OB.set(this.posed ? this.pose.subarray(3) : wO, 3);
        for (let YB = 0; YB < 9; YB++)
          if (!Number.isFinite(OB[YB])) return;
        const GB = this.pose;
        if (this.posed) {
          let BB = !0;
          for (let YB = 0; YB < 9 && BB; YB++) BB = OB[YB] === GB[YB];
          if (BB) return
        }
        this.listener.apply(OB) && (GB.set(OB), this.posed = !0)
      }
      playGame(BB, OB, GB, YB, DB, QB, oB) {
        const jB = FO(BB);
        if (null === jB) return IO.e;
        const yB = iO(jB),
          JB = jB[1] > 1 ? jB : null;
        if (!GB) {
          const {
            howl: BB,
            id: GB
          } = this.start(yB, !1, OB, 0, 1, oB, JB);
          return this.gameSound(BB, GB, !1)
        }
        const MB = GB[0],
          PB = GB[1] + XO,
          zB = GB[2];
        if (!Number.isFinite(MB) || !Number.isFinite(PB) || !Number.isFinite(zB)) return IO.e;
        let lB;
        if (YB) {
          const BB = MB - YB[0],
            OB = PB - YB[1],
            GB = zB - YB[2];
          if (lB = BB * BB + OB * OB + GB * GB, lB > DB * DB) return IO.e
        } else lB = this.earDistSq(MB, PB, zB);
        const pB = this.startSpatial(yB, OB, 0, 1, oB, MB, PB, zB, QB, lB, JB);
        return pB ? this.gameSound(pB.howl, pB.id, !0) : IO.e
      }
      setMaster(BB, OB) {
        this.level = cO(BB);
        const GB = OB ? this.level : 0;
        if (GB !== this.master) {
          this.master = GB;
          for (const [BB, OB] of this.live) OB.fadeMs = 0, OB.gain = OB.rel * this.master, OB.howl.volume(OB.gain, BB)
        }
      }
      stopCore() {
        for (const OB of [...this.core.values()]) {
          var BB;
          null === (BB = this.live.get(OB)) || void 0 === BB || BB.howl.stop(OB)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [BB, OB] of [...this.live]) OB.howl.stop(BB), this.forget(BB);
        this.core.clear()
      }
      gameSound(BB, OB, GB) {
        const YB = {
          stop: () => (this.live.has(OB) && BB.stop(OB), YB),
          fade: (BB, GB, DB) => {
            var QB, oB;
            const jB = this.level > 0 ? GB / this.level : GB > 0 && null !== (QB = null === (oB = this.live.get(OB)) || void 0 === oB ? void 0 : oB.rel) && void 0 !== QB ? QB : 0;
            return this.fade(OB, jB, DB, !1), YB
          },
          rate: GB => {
            const DB = this.live.get(OB);
            return DB && (DB.rate = function(BB) {
              return BB > 0 && BB < 1 / 0 ? BB : 1
            }(GB), BB.rate(DB.rate, OB)), YB
          },
          getVolume: () => {
            var BB, GB;
            return (null !== (BB = null === (GB = this.live.get(OB)) || void 0 === GB ? void 0 : GB.rel) && void 0 !== BB ? BB : 0) * this.level
          },
          getRelativeVolume: () => {
            var BB, GB;
            return null !== (BB = null === (GB = this.live.get(OB)) || void 0 === GB ? void 0 : GB.rel) && void 0 !== BB ? BB : 0
          },
          setRelativeVolume: BB => (this.setRel(OB, BB), YB),
          setPannerAttr: DB => {
            if (GB && this.live.has(OB)) {
              const GB = {
                ...rO,
                refDistance: pO.g
              };
              for (const [BB, OB] of Object.entries(DB)) "number" !== typeof OB && "string" !== typeof OB || (GB[BB] = OB);
              BB.pannerAttr({
                coneOuterAngle: GB.coneOuterAngle
              }, OB), BB.pannerAttr(GB, OB)
            }
            return YB
          },
          setPosition: DB => (GB && this.live.has(OB) && Number.isFinite(DB[0] + DB[1] + DB[2]) && BB.pos(DB[2], DB[1], DB[0], OB), YB)
        };
        return YB
      }
      startSpatial(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        const PB = this.howl(BB, !0);
        let zB = null;
        if (!DB) {
          if (this.failed.has(PB)) return null;
          const GB = SO[BB] === EO ? null : (0, KO.j)(VO[BB]),
            YB = (0, KO.f)(cO(OB), Math.sqrt(JB), yB);
          if (zB = new hO(GB, YB, this.now(), PB, this.voiceHost), !this.voices.admit(zB)) return null
        }
        const lB = this.start(BB, !0, OB, GB, YB, DB, MB);
        return zB && (zB.id = lB.id, zB.direct = "loaded" === PB.state() && !PB._playLock), PB.pannerAttr({
          coneOuterAngle: 360
        }, lB.id), PB.pannerAttr({
          ...rO,
          refDistance: yB
        }, lB.id), PB.pos(jB, oB, QB, lB.id), lB
      }
      aliveVoice(BB) {
        const OB = this.live.get(BB);
        if (!OB) return;
        const GB = OB.howl._soundById(BB);
        if (GB && !GB._ended) return OB;
        this.forget(BB)
      }
      earDistSq(BB, OB, GB) {
        if (!this.posed) return 0;
        const YB = BB - this.pose[2],
          DB = OB - this.pose[1],
          QB = GB - this.pose[0];
        return YB * YB + DB * DB + QB * QB
      }
      start(BB, OB, GB, YB, DB, QB, oB) {
        const jB = cO(GB),
          yB = this.howl(BB, OB);
        "unloaded" === yB.state() && (yB.load(), null !== oB && this.loadPick(oB, OB));
        const JB = yB.play(kO.d),
          MB = jB * this.master;
        return yB.volume(MB, JB), this.live.set(JB, {
          howl: yB,
          rel: jB,
          gain: MB,
          fadeFrom: MB,
          fadeAt: 0,
          fadeMs: 0,
          rate: DB,
          handle: YB,
          spatial: OB,
          stopTimer: void 0
        }), 0 !== YB && this.core.set(YB, JB), 1 !== DB && yB.rate(DB, JB), QB && yB.loop(!0, JB), {
          howl: yB,
          id: JB
        }
      }
      loadPick(BB, OB) {
        let [GB, YB] = BB;
        for (let QB = GB; QB < GB + YB; QB++) {
          var DB;
          const BB = this.howl(QB, OB);
          "unloaded" === BB.state() && "loading" !== (null === (DB = this.howls.get(eO(QB, !OB))) || void 0 === DB ? void 0 : DB.state()) && BB.load()
        }
      }
      howl(BB, OB) {
        const GB = eO(BB, OB);
        let YB = this.howls.get(GB);
        if (!YB) {
          const DB = this.createHowl(VO[BB], OB);
          DB.on("end", (BB => {
            DB.loop(BB) || this.forget(BB)
          })), DB.on("stop", (BB => {
            this.forget(BB)
          })), DB.on("play", (BB => {
            this.live.has(BB) && this.started.add(BB)
          })), DB.on("loaderror", (BB => {
            if ("loaded" !== DB.state()) {
              this.failed.add(DB);
              for (const [BB, OB] of this.live) OB.howl === DB && this.forget(BB)
            } else "number" === typeof BB && this.forget(BB)
          })), this.howls.set(GB, DB), YB = DB
        }
        return YB
      }
      setRel(BB, OB) {
        const GB = this.live.get(BB);
        GB && (TO(GB), GB.fadeMs = 0, GB.rel = cO(OB), GB.gain = GB.rel * this.master, GB.howl.volume(GB.gain, BB))
      }
      fade(BB, OB, GB, YB) {
        const DB = this.live.get(BB);
        if (!DB) return;
        TO(DB);
        const {
          howl: QB
        } = DB, oB = this.gainNow(DB);
        DB.rel = cO(OB), DB.gain = DB.rel * this.master;
        const jB = GB > 0 ? Math.min(GB, 65535) : 0,
          yB = 0 === jB || oB === DB.gain;
        DB.fadeMs = yB ? 0 : jB, yB ? QB.volume(DB.gain, BB) : (DB.fadeFrom = oB, DB.fadeAt = this.now(), QB.fade(oB, DB.gain, jB, BB)), YB && (yB ? QB.stop(BB) : DB.stopTimer = setTimeout((() => {
          DB.stopTimer = void 0, QB.stop(BB)
        }), jB))
      }
      gainNow(BB) {
        if (BB.fadeMs > 0) {
          const OB = (this.now() - BB.fadeAt) / BB.fadeMs;
          if (OB < 1) return BB.fadeFrom + (BB.gain - BB.fadeFrom) * Math.max(0, OB);
          BB.fadeMs = 0
        }
        return BB.gain
      }
      forget(BB) {
        this.started.delete(BB);
        const OB = this.live.get(BB);
        OB && (TO(OB), this.live.delete(BB), 0 !== OB.handle && this.core.get(OB.handle) === BB && this.core.delete(OB.handle))
      }
    }

    function eO(BB, OB) {
      return 2 * BB + (OB ? 1 : 0)
    }

    function TO(BB) {
      void 0 !== BB.stopTimer && (clearTimeout(BB.stopTimer), BB.stopTimer = void 0)
    }
    var bO = GB(41611),
      CO = GB(39830);
    class HO {
      constructor(BB, OB, GB, YB) {
        this.key = BB, this.model = OB, this.host = YB, this.CP = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.EQB = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Vp = !1, this.CP = Math.max(1, Math.ceil(GB)), this.records = new Float32Array(this.CP * PO.b), this.isDirty = new Uint8Array(this.CP), this.tail = new Uint8Array(this.CP * pB.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(YB.cmd())
      }
      setOrigin(BB, OB, GB) {
        this.origin[0] = BB, this.origin[1] = OB, this.origin[2] = GB
      }
      markDirty(BB) {
        !this.Vp && BB >= 0 && BB < this.CP && BB < pB.uc.Max && this.ap(BB, BB + 1)
      }
      commit(BB) {
        if (this.Vp) return;
        (BB = Math.min(Math.max(Math.floor(BB), 0), this.CP, pB.uc.Max)) > this.count && this.ap(this.count, BB), this.count = BB;
        const {
          origin: OB,
          sentOrigin: GB,
          dirtyList: YB
        } = this, DB = this.EQB !== BB, QB = GB[0] !== OB[0] || GB[1] !== OB[1] || GB[2] !== OB[2];
        if (0 === YB.length && !DB && !QB) return;
        const oB = this.host.cmd();
        if (!oB || !this.make(oB)) return;
        const jB = YB.length,
          {
            records: yB,
            tailView: JB
          } = this;
        for (let MB = 0; MB < jB; MB++) {
          const BB = YB[MB],
            OB = BB * PO.b,
            GB = MB * pB.uc.Bytes,
            DB = 0 !== yB[OB + PO.e] ? pB.uc.Hidden : 0;
          JB.setUint32(GB, (BB | DB) >>> 0, !0), JB.setFloat32(GB + 4, yB[OB], !0), JB.setFloat32(GB + 8, yB[OB + 1], !0), JB.setFloat32(GB + 12, yB[OB + 2], !0)
        }
        if ((0, pB.Qe)(oB, 0, this.key, BB, OB, jB, this.tailOf(jB))) {
          for (let BB = 0; BB < jB; BB++) this.isDirty[YB[BB]] = 0;
          YB.length = 0, this.EQB = BB, GB[0] = OB[0], GB[1] = OB[1], GB[2] = OB[2]
        }
      }
      grow(BB) {
        (BB = Math.ceil(BB)) <= this.CP || this.Vp || (this.records = (0, CO.d)(this.records, new Float32Array(BB * PO.b)), this.isDirty = (0, CO.d)(this.isDirty, new Uint8Array(BB)), this.tail = new Uint8Array(BB * pB.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.CP = BB)
      }
      dispose() {
        this.Vp || (this.Vp = !0, this.host.Vp(this, this.made ? this.key : null))
      }
      make(BB) {
        if (!this.made && BB) {
          const {
            item: OB,
            scale: GB,
            yaw: YB
          } = this.model;
          this.made = (0, pB.Ve)(BB, 0, this.key, OB, GB, YB)
        }
        return this.made
      }
      tailOf(BB) {
        const OB = BB * pB.uc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === OB || (this.tailCut = this.tail.subarray(0, OB)), this.tailCut
      }
      ap(BB, OB) {
        const {
          dirtyList: GB,
          isDirty: YB
        } = this;
        for (let DB = BB; DB < OB; DB++) 0 === YB[DB] && (YB[DB] = 1, GB.push(DB))
      }
    }
    var vO = GB(635),
      sO = GB(45733);
    const xO = new TextEncoder,
      tO = new Uint8Array(0),
      BG = [0, 0, 0];
    class OG {
      constructor(BB, OB) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: BB,
          serverId: OB,
          owes: BB => {
            this.owing.add(BB)
          },
          settled: (BB, OB) => {
            this.owing.delete(BB), OB && this.live.delete(BB)
          }
        }
      }
      create(BB, OB) {
        return GB = BB, vO.o.includes(GB) ? this.add({
          lifeform: MB.j.indexOf(BB)
        }, OB) : null;
        var GB
      }
      createCosmetic(BB, OB) {
        const GB = sO.COSMETIC_MODEL_KEYS.get(BB);
        return void 0 === GB ? null : this.add({
          attachment: GB
        }, OB)
      }
      add(BB, OB) {
        const GB = new GG(++this.keys, BB, OB, this.host);
        return this.live.add(GB), GB
      }
      disposeAll() {
        for (const BB of [...this.live]) BB.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const BB = this.host.cmd();
        for (const OB of this.owing)
          if (!OB.sync(BB)) return
      }
    }
    class GG {
      constructor(BB, OB, GB, YB) {
        this.key = BB, this.source = OB, this.scale = GB, this.host = YB, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = tO, this.perch = null, this.owed = 1, this.Vp = !1, this.sync()
      }
      setPose(BB, OB) {
        this.Vp || (this.feet[0] = BB[0], this.feet[1] = BB[1], this.feet[2] = BB[2], this.yaw = OB, this.owed |= 2, this.sync())
      }
      setVisible(BB) {
        this.Vp || BB === this.visible || (this.visible = BB, this.owed |= 4, this.sync())
      }
      setClip(BB) {
        this.Vp || BB === this.clip || (this.clip = BB, this.clipBytes = null === BB ? tO : xO.encode(BB), this.owed |= 16, this.sync())
      }
      setPerch(BB) {
        this.Vp || (this.perch = BB, this.owed |= 32, this.sync())
      }
      dispose() {
        this.Vp || (this.Vp = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(BB) ? (this.host.settled(this, this.Vp), !0) : (this.host.owes(this), !1)
      }
      write(BB) {
        if (!BB) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, pB.bf)(BB, 0, this.key, this.source.lifeform, this.scale) : (0, pB.ye)(BB, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: OB,
          perch: GB
        } = this, YB = (2 & OB ? pB.Wc.Pose : 0) | (4 & OB ? pB.Wc.Visible : 0) | (16 & OB ? pB.Wc.Clip : 0) | (32 & OB ? pB.Wc.Perch : 0);
        if (0 !== YB) {
          var DB, QB;
          if (!(0, pB._e)(BB, 0, this.key, YB, this.visible ? 1 : 0, GB ? 1 : 0, this.feet, this.yaw, GB ? this.host.serverId(GB.MG) : 0, null !== (DB = null === GB || void 0 === GB ? void 0 : GB.offset) && void 0 !== DB ? DB : BG, null !== (QB = null === GB || void 0 === GB ? void 0 : GB.yaw) && void 0 !== QB ? QB : 0, 16 & OB ? this.clipBytes : tO)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, pB.Xe)(BB, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var YG = GB(42011);

    function DG(BB, OB, GB, YB) {
      return (0, YG.b)(), (0, pB.Nf)(BB, OB, GB, YB)
    }
    var QG = GB(39843),
      oG = GB(41600),
      jG = GB(42023);
    const yG = [0, 0, 0],
      JG = [0, 0, 0],
      MG = [0, 0, 0],
      PG = [0, 0, 0],
      zG = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      lG = [0, 0, 0],
      pG = [0, 0],
      qG = [1, 1, 1],
      ZG = 1 / 3;
    const NG = zO.f;

    function RG(BB) {
      const OB = zO.c[BB],
        GB = OB && zO.f[OB.mainMultiblock];
      return GB && {
        main: GB,
        x: OB.compX,
        y: OB.compY,
        z: OB.compZ
      }
    }

    function WG(BB) {
      if (null === BB || void 0 === BB) return pB.cd;
      const OB = +BB;
      return Number.isInteger(OB) && OB >= -2147483648 && OB <= 2147483647 && String(OB) === String(BB) ? OB : pB.cd
    }

    function AG(BB, OB, GB) {
      return (0, pB.Wf)(BB, 0, OB, null !== GB && void 0 !== GB ? GB : Number.NaN)
    }
    class VG {
      constructor(BB) {
        this.deps = BB, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new QG.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (BB => {
          var OB, GB;
          null === (OB = (GB = this.deps).setLocalOptions) || void 0 === OB || OB.call(GB, BB)
        })), this.mobModels = new OG((() => this.deps.cmd()), WG), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Vp: (BB, OB) => {
            this.livePools.delete(BB), null !== OB && (this.owedFrees.push(OB), this.flushOwed())
          }
        }, this.api = BB.api, this.live = BB.live, this.chunks = BB.chunks, this.items = BB.items, this.tables = BB.tables
      }
      isLocal(BB) {
        return null !== BB && void 0 !== BB && +BB === this.api.localId
      }
      assertLocal(BB, OB) {
        if (!this.isLocal(BB)) throw new Error(`Attempted to ${OB} for a player that is not the local player`)
      }
      pR(BB) {
        const OB = this.api.pR(BB);
        if (!OB) throw new Error(`Entity ${BB} has no replicated position`);
        return OB
      }
      checkValid(BB) {
        return !!this.deps.isSessionLive() && (null === BB || void 0 === BB || this.api.checkValid(BB))
      }
      isAlive(BB) {
        return !1 !== this.api.isAlive(BB)
      }
      getItemStat(BB, OB, GB) {
        return this.isLocal(BB) || null !== BB && "Player" === this.api.getEntityType(BB) ? this.tables.getItemStat(OB, GB) : this.tables.getDefaultItemStat(OB, GB)
      }
      getClientOption(BB, OB) {
        return this.assertLocal(BB, "get a client option"), this.tables.getClientOption(OB)
      }
      openShop(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(BB, "open shop"), oB.o.tM("showShopFromServer", {
          toggle: OB,
          kO: GB
        }, !0)
      }
      sendMessage(BB, OB, GB) {
        this.assertLocal(BB, "send a message");
        const YB = "string" === typeof OB ? [{
          str: OB,
          style: GB
        }] : OB;
        oB.o.tM("chat", {
          content: YB
        }, !0)
      }
      getEntityType(BB) {
        return this.api.getEntityType(BB)
      }
      getEntityName(BB) {
        const OB = WG(BB);
        return OB === pB.cd ? void 0 : (0, bO.j)(this.api, OB)
      }
      hasEffect(BB, OB) {
        const GB = WG(BB);
        return GB !== pB.cd && (0, bO.f)(this.api, GB, OB)
      }
      getMetaInfo(BB) {
        return this.tables.getMetaInfo(BB)
      }
      getPlayerDbId(BB) {
        return this.assertLocal(BB, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(BB, OB, GB) {
        if (!this.chunks.dataCleared(BB, OB, GB)) return (0, bO.c)(this.api, BB, OB, GB)
      }
      qm(BB, OB, GB, YB) {
        this.setBlockId(BB, OB, GB, this.tables.getItemId(YB))
      }
      setOtherEntitySetting(BB, OB, GB, YB) {
        if (!this.isLocal(BB)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(pB.od, GB)) throw new Error(`Unknown other-entity setting ${GB}`);
        const DB = pB.od[GB],
          QB = WG(OB);
        if (QB === pB.cd || !this.deps.beforeWrite()) return;
        const oB = (0, wB.e)(YB);
        if (oB.length > 16384) throw new Error(`The other-entity setting ${GB}'s value is over 16384 bytes`);
        const jB = this.api.memoryView(Uint8Array, this.api.scratch(), oB.length, "set_other_entity_setting's value");
        jB && (jB.set(oB), this.api.queries.setOtherEntitySetting(QB, DB, oB.length))
      }
      getPositionView(BB) {
        return this.live.position(+BB)
      }
      readDrawnPosition(BB, OB) {
        return this.api.readDrawnPosition(WG(BB), OB)
      }
      getDrawnHeading(BB) {
        const OB = this.drawnEntity(BB);
        if (!OB) return null;
        if (1 === pB.xb.headingIsDrawn(OB, 0)) return pB.xb.heading(OB, 0);
        const GB = this.api.apiView;
        return this.isLocal(BB) && 0 === (pB.u.playerFlags(GB, 0) & pB.Id.FreeCam) ? pB.u.heading(GB, 0) : null
      }
      getDrawnEyeHeight(BB) {
        const OB = this.drawnEntity(BB),
          GB = OB ? pB.xb.eyeHeight(OB, 0) : 0;
        return GB > 0 ? GB : null
      }
      drawnEntity(BB) {
        const OB = WG(BB);
        return OB === pB.cd || this.api.queries.directorEntity(OB) < pB.xb.BYTES ? null : this.api.scratchData(pB.xb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(BB) {
        const OB = WG(BB);
        return OB !== pB.cd && 1 === this.api.queries.entityDrawn(OB)
      }
      getPlayerIds() {
        return jG.d.ids()
      }
      getPlayerCosmetics(BB) {
        var OB;
        return null !== (OB = (0, jG.f)(BB)) && void 0 !== OB ? OB : null
      }
      getLocalPlayerMovement() {
        const BB = pB.u.playerFlags(this.api.apiView, 0);
        return 0 === (BB & pB.Id.Replay) && this.api.readDrawnPosition(this.api.localId, MG) ? {
          onGround: 0 !== (BB & pB.Id.OnGround),
          jumpHeld: 0 !== (BB & pB.Id.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, lO.z)(this.deps.localPhysicsType())
      }
      MYB(BB) {
        return this.isLocal(BB) ? this.items.sJ() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var BB, OB;
        return "Gun" === (null === (BB = this.aliveHeld()) || void 0 === BB || null === (OB = BB.typeObj) || void 0 === OB ? void 0 : OB.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.sJ()
      }
      isCrosshairShown() {
        var BB, OB;
        const GB = (0, qO.e)(YB.c.get("crosshairGameView"), YB.c.get("crosshairShownOverride"));
        if (null !== GB) return GB;
        const DB = null === (BB = this.aliveHeld()) || void 0 === BB ? void 0 : BB.typeObj,
          QB = "Gun" === (null === DB || void 0 === DB ? void 0 : DB.type),
          oB = QB || !0 === (null === DB || void 0 === DB ? void 0 : DB.showsAimingUi),
          jB = 0 === (pB.u.playerFlags(this.api.apiView, 0) & pB.Id.ZoomFirstPerson),
          yB = null !== (OB = this.tables.getClientOption("gunshotOrigin")) && void 0 !== OB ? OB : null;
        return (0, qO.h)({
          gun: QB,
          aimable: oB
        }, jB, (0, ZO.d)(), yB)
      }
      setCrosshairShown(BB) {
        YB.c.set({
          crosshairShownOverride: BB
        })
      }
      getInventoryFreeSlotCount(BB) {
        return this.isLocal(BB) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(BB) {
        return this.isLocal(BB) ? this.items.selectedSlot : null
      }
      getItemSlot(BB, OB) {
        return this.isLocal(BB) ? this.items.slot(OB) : null
      }
      swapInventorySlots(BB, OB) {
        return this.items.swap(BB, OB)
      }
      isPlayerCrouching(BB) {
        if (this.isLocal(BB)) return 0 !== (pB.u.playerFlags(this.api.apiView, 0) & pB.Id.Crouching);
        const OB = WG(BB);
        return OB !== pB.cd && 1 === this.api.queries.entityCrouching(OB)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (pB.u.playerFlags(this.api.apiView, 0) & pB.Id.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.hOB()
      }
      getActionRay() {
        const BB = this.api.apiView;
        for (let OB = 0; OB < 3; OB++) zG.origin[OB] = pB.u.oGB(BB, 0, OB), zG.direction[OB] = pB.u.actionDir(BB, 0, OB);
        return zG
      }
      canModifyBlockAt(BB, OB, GB) {
        return 1 === this.api.queries.canModify(BB, OB, GB)
      }
      isSolidToPlayerBlockId(BB) {
        return this.tables.isSolidBlockId(BB) && !this.chunks.isWalkThrough(BB)
      }
      blockNameToBlockId(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(BB, OB)
      }
      blockIdToBlockName(BB) {
        return this.tables.nameOfId(BB)
      }
      mGB(BB, OB, GB, YB, DB) {
        return 1 === this.api.queries.terrainBlocked(YB, BB, OB, GB, WG(null !== DB && void 0 !== DB ? DB : null))
      }
      getChunkVersion(BB, OB, GB) {
        return this.chunks.version(BB, OB, GB)
      }
      scanBlocks(BB, OB, GB, YB, DB, QB, oB, jB) {
        return this.chunks.scan(BB, OB, GB, YB, DB, QB, oB, jB)
      }
      readColumnTops(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        this.chunks.columnTops(BB, OB, GB, YB, DB, QB, oB, jB, yB)
      }
      isBlockInLoadedChunk(BB, OB, GB) {
        return this.chunks.isLoaded(BB, OB, GB)
      }
      getBlockId(BB, OB, GB) {
        return this.chunks.SM(BB, OB, GB)
      }
      playSound(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(BB)) return null;
        const oB = this.playSoundFrom(OB, GB, DB, QB);
        return 1 === YB ? oB : oB.rate(YB)
      }
      preloadSounds(BB) {
        var OB, GB;
        null === (OB = (GB = this.deps).preloadSounds) || void 0 === OB || OB.call(GB, BB)
      }
      playSoundFrom(BB, OB, GB, YB) {
        var DB, QB;
        const oB = this.deps.playSound;
        if (!oB) return IO.e;
        const jB = null === GB || void 0 === GB ? void 0 : GB.fD,
          yB = null !== (DB = null === GB || void 0 === GB ? void 0 : GB.maxHearDist) && void 0 !== DB ? DB : pO.f,
          JB = null !== (QB = null === GB || void 0 === GB ? void 0 : GB.refDistance) && void 0 !== QB ? QB : pO.g;
        let MB = null;
        if (Array.isArray(jB)) yG[0] = jB[0], yG[1] = jB[1], yG[2] = jB[2], MB = yG;
        else if (void 0 !== jB && null !== jB) {
          const BB = WG(jB);
          if (!this.api.isLocal(BB)) {
            if (!this.api.readPosition(BB, yG)) return IO.e;
            MB = yG
          }
        }
        return oB(BB, OB, MB, MB && this.ear(), yB, JB, YB)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, JG)) JG[1] += XO;
        else {
          const BB = this.api.apiView;
          if (0 === pB.u.viewProj(BB, 0, 3) && 0 === pB.u.viewProj(BB, 0, 7) && 0 === pB.u.viewProj(BB, 0, 11)) return null;
          for (let OB = 0; OB < 3; OB++) JG[OB] = pB.u.eye(BB, 0, OB)
        }
        return Number.isFinite(JG[0] + JG[1] + JG[2]) ? JG : null
      }
      setBlockId(BB, OB, GB, YB) {
        if (!Number.isInteger(YB) || YB < 0 || YB > 65535) throw new Error(`Invalid block id ${YB}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(BB, OB, GB)) return;
        const DB = Math.floor(BB),
          QB = Math.floor(OB),
          oB = Math.floor(GB),
          jB = this.predictedCells(DB, QB, oB, YB);
        if (1 === this.api.queries.qm(DB, QB, oB, YB)) {
          for (let BB = 0; BB < jB.length; BB += 5) this.chunks.setOverlay(jB[BB], jB[BB + 1], jB[BB + 2], jB[BB + 3], 1 === jB[BB + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(BB, OB) {
        return this.deps.particles.create(BB, OB)
      }
      playParticleEffect(BB) {
        this.deps.particles.playEffect(BB)
      }
      burstParticlePreset(BB, OB, GB) {
        this.deps.particles.burstPreset(BB, OB, GB)
      }
      createGameMesh(BB, OB, GB) {
        const YB = ++this.meshKeys,
          DB = this.deps.cmd();
        if (!DB) return YB;
        const {
          look: QB,
          colour: oB
        } = function(BB) {
          switch (BB.kind) {
            case void 0:
            case "flatEmissive":
              return BB.onTop ? {
                look: pB.bc.FlatOnTop,
                colour: [...BB.rgb, BB.alpha]
              } : BB.opaque ? {
                look: pB.bc.FlatOpaque,
                colour: [...BB.rgb, 1]
              } : {
                look: pB.bc.Flat,
                colour: [...BB.rgb, BB.alpha]
              };
            case "chevronPath":
              return {
                look: pB.bc.Chevrons, colour: [...(0, NO.c)(BB.colour), BB.alpha]
              };
            case "furnaceFire":
              return {
                look: pB.bc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(OB), jB = Math.floor(BB.positions.length / 3), yB = function(BB, OB) {
          const GB = Math.floor(BB.positions.length / 3),
            YB = BB.indices.length,
            DB = GB * (OB ? 5 : 3),
            QB = new Uint8Array(4 * (DB + YB)),
            oB = new DataView(QB.buffer);
          for (let JB = 0; JB < 3 * GB; JB++) oB.setFloat32(4 * JB, BB.positions[JB], !0);
          if (OB) {
            var jB;
            const OB = null !== (jB = BB.uvs) && void 0 !== jB ? jB : [];
            for (let BB = 0; BB < 2 * GB; BB++) {
              var yB;
              oB.setFloat32(4 * (3 * GB + BB), null !== (yB = OB[BB]) && void 0 !== yB ? yB : 0, !0)
            }
          }
          for (let JB = 0; JB < YB; JB++) oB.setUint32(4 * (DB + JB), BB.indices[JB], !0);
          return QB
        }(BB, (0, PO.g)(OB));
        return (0, pB.He)(DB, 0, YB, QB, oB, GB, jB, BB.indices.length, yB) && this.liveMeshes.add(YB), YB
      }
      setGameMesh(BB, OB) {
        var GB;
        const YB = this.deps.cmd();
        if (!YB) return;
        let DB = 0;
        OB.anchor && (DB |= pB.ec.Anchor, lG[0] = OB.anchor[0], lG[1] = OB.anchor[1], lG[2] = OB.anchor[2]), void 0 !== OB.visible && (DB |= pB.ec.Visible), OB.uvOffset && (DB |= pB.ec.UvOffset, pG[0] = OB.uvOffset[0], pG[1] = OB.uvOffset[1]);
        const QB = null !== (GB = OB.visibility) && void 0 !== GB ? GB : 1;
        void 0 !== OB.visibility && (DB |= pB.ec.Visibility), OB.scale && (DB |= pB.ec.Scale, qG[0] = OB.scale[0], qG[1] = OB.scale[1], qG[2] = OB.scale[2]), 0 !== DB && (0, pB.Ke)(YB, 0, BB, DB, OB.visible ? 1 : 0, lG, pG, QB, qG)
      }
      disposeGameMesh(BB) {
        const OB = this.deps.cmd();
        OB && !(0, pB.Je)(OB, 0, BB) || this.liveMeshes.delete(BB)
      }
      hasPackModel(BB) {
        var OB, GB, YB;
        return null !== (OB = null === (GB = (YB = this.deps).hasPackModel) || void 0 === GB ? void 0 : GB.call(YB, BB)) && void 0 !== OB && OB
      }
      disposeGameOutput() {
        const BB = BB => {
          try {
            BB()
          } catch (OB) {
            console.error("Error freeing client game output", OB)
          }
        };
        for (const OB of [...this.liveMeshes]) BB((() => {
          this.disposeGameMesh(OB)
        }));
        for (const OB of [...this.livePools]) BB((() => {
          OB.dispose()
        }));
        BB((() => {
          this.mobModels.disposeAll()
        })), BB((() => {
          this.setGroundArrowStyle(null)
        })), BB((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), BB((() => {
          this.setCrosshairShown(null)
        })), BB((() => {
          this.cameraTurn.dispose()
        })), BB((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(BB, OB) {
        const GB = this.tables.idOf(BB.item);
        if (void 0 === GB) return null;
        const YB = new HO(++this.poolKeys, {
          item: GB,
          scale: BB.scale,
          yaw: BB.yaw
        }, OB, this.poolHost);
        return this.livePools.add(YB), YB
      }
      createMobModel(BB, OB) {
        return this.mobModels.create(BB, OB)
      }
      createCosmeticModel(BB, OB) {
        return this.mobModels.createCosmetic(BB, OB)
      }
      setRouteChevrons(BB) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !BB || 0 === BB.cells.length) return;
        const OB = `${BB.colour} ${BB.alpha}`;
        OB !== this.routeLook && (this.routeLook = OB, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(BB) {
          const [OB, GB, YB] = BB[0].pos, DB = [], QB = [], oB = [];
          return BB.forEach(((BB, jB) => {
            let {
              pos: yB,
              way: [JB, MB]
            } = BB;
            const PB = yB[0] - OB + .5,
              zB = yB[1] - GB + .04,
              lB = yB[2] - YB + .5,
              [pB, qB] = [.35 * -MB, .35 * JB],
              [ZB, NB] = [jB * ZG, (jB + 1) * ZG],
              RB = DB.length / 3;
            DB.push(PB - .5 * JB + pB, zB, lB - .5 * MB + qB), DB.push(PB - .5 * JB - pB, zB, lB - .5 * MB - qB), DB.push(PB + .5 * JB + pB, zB, lB + .5 * MB + qB), DB.push(PB + .5 * JB - pB, zB, lB + .5 * MB - qB), QB.push(0, ZB, 1, ZB, 0, NB, 1, NB), oB.push(RB, RB + 1, RB + 2, RB + 1, RB + 3, RB + 2)
          })), {
            positions: DB,
            uvs: QB,
            indices: oB
          }
        }(BB.cells), {
          kind: "chevronPath",
          colour: BB.colour,
          alpha: BB.alpha
        }, BB.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(BB) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(BB, 250) / 1e3 * 1.2 * ZG) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(BB) {
        this.pendingStyle = BB, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const BB = this.owedFrees;
        if (0 === BB.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const OB = this.deps.cmd();
        if (!OB) return BB.length = 0, void(this.pendingFar = void 0);
        let GB = 0;
        for (; GB < BB.length && (0, pB.Te)(OB, 0, BB[GB]);) GB++;
        BB.splice(0, GB);
        const YB = this.pendingStyle;
        if (void 0 !== YB) {
          (YB ? (0, pB.Yf)(OB, 0, YB.width, YB.alpha, 1, YB.endAtSolidFace ? 1 : 0) : (0, pB.Yf)(OB, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const DB = this.pendingFar;
        void 0 !== DB && (0, pB.Tf)(OB, 0, null !== DB && void 0 !== DB ? DB : 0, null === DB ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(BB, OB) {
        const GB = this.deps.cmd(),
          YB = WG(BB);
        GB && YB !== pB.cd && (0, pB.dg)(GB, 0, YB, OB)
      }
      setFacingTolerance(BB, OB) {
        const GB = this.deps.cmd(),
          YB = WG(BB);
        GB && YB !== pB.cd && AG(GB, YB, OB)
      }
      forEachEntity(BB) {
        const {
          api: OB
        } = this;
        for (let GB = 0; GB < OB.idStr.length; GB++) {
          const YB = OB.idStr[GB];
          null === YB || VB(OB.kinds[GB]) || BB(YB)
        }
      }
      getEntityInfo(BB) {
        return this.deps.entityInfo.get(BB)
      }
      isEntityInteractable(BB) {
        const OB = WG(BB);
        return OB !== pB.cd && 1 === this.api.queries.entityInteractable(OB)
      }
      isLocalPlayer(BB) {
        return this.isLocal(BB)
      }
      getLineOwner(BB) {
        var OB;
        const GB = null === (OB = this.deps.entityInfo.get(BB)) || void 0 === OB ? void 0 : OB.meshOpts;
        if (!GB) return null;
        try {
          const {
            lineToEId: BB
          } = JSON.parse(GB);
          return null !== BB && void 0 !== BB ? BB : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const BB = this.api.apiView;
        return PG[0] = pB.u.eye(BB, 0, 0), PG[1] = pB.u.eye(BB, 0, 1), PG[2] = pB.u.eye(BB, 0, 2), PG
      }
      getCameraFar() {
        return pB.u.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(BB) {
        null !== BB && (this.farSet = !0), this.pendingFar = BB, this.flushOwed()
      }
      turnCamera(BB, OB) {
        this.cameraTurn.turn(BB, OB)
      }
      clearPickupDelay(BB) {
        const OB = this.deps.cmd(),
          GB = WG(BB);
        OB && GB !== pB.cd && (0, pB.se)(OB, 0, GB)
      }
      sendChat(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = this.deps.sendCmd();
        return null !== GB && DG(GB, 0, oG.c.Chat, (0, wB.e)((0, oG.i)({
          ty: BB,
          BJ: OB
        })))
      }
      sendCommand(BB) {
        BB.length <= 119 && this.sendChat(`/${BB}`)
      }
      predictedCells(BB, OB, GB, YB) {
        const DB = this.chunks,
          QB = [],
          oB = (BB, OB, GB, YB, DB) => {
            QB.push(BB, OB, GB, YB, this.tables.blockRootId(DB) === this.tables.blockRootId(YB) ? 0 : 1)
          },
          jB = DB.SM(BB, OB, GB),
          yB = RG(jB);
        if (yB) {
          const [YB, QB, JB] = [BB - yB.x, OB - yB.y, GB - yB.z], MB = NG[DB.SM(YB, QB, JB)], PB = null === MB || void 0 === MB ? void 0 : MB.positions.some((BB => BB.id === jB && BB.x === yB.x && BB.y === yB.y && BB.z === yB.z));
          for (const BB of (PB && MB ? MB : yB.main).positions) DB.SM(YB + BB.x, QB + BB.y, JB + BB.z) === BB.id && oB(YB + BB.x, QB + BB.y, JB + BB.z, 0, BB.id)
        }
        const JB = RG(YB);
        if (JB)
          for (const PB of JB.main.positions) {
            const [YB, QB, jB] = [BB + PB.x - JB.x, OB + PB.y - JB.y, GB + PB.z - JB.z];
            oB(YB, QB, jB, PB.id, DB.SM(YB, QB, jB))
          } else oB(BB, OB, GB, YB, jB);
        const MB = this.tables;
        if ((0 !== MB.attachedTopOf(jB) || 0 !== MB.attachedTopOf(YB)) && DB.isLoaded(BB, OB + 1, GB)) {
          let yB = DB.SM(BB, OB + 1, GB);
          for (let YB = 0; YB < QB.length; YB += 5) QB[YB] === BB && QB[YB + 1] === OB + 1 && QB[YB + 2] === GB && (yB = QB[YB + 3]);
          const JB = this.attachedTopWrite(jB, YB, yB);
          void 0 !== JB && oB(BB, OB + 1, GB, JB, yB)
        }
        return QB
      }
      attachedTopWrite(BB, OB, GB) {
        const YB = this.tables,
          DB = YB.attachedTopOf(BB),
          QB = YB.attachedTopOf(OB),
          oB = 0 !== DB && 0 !== GB && YB.blockRootId(GB) === YB.blockRootId(DB);
        return 0 !== DB && 0 !== QB && YB.blockRootId(BB) === YB.blockRootId(OB) ? oB && GB !== QB ? QB : void 0 : 0 === QB || !oB && 0 !== GB ? oB ? 0 : void 0 : QB
      }
    }
    const SG = pB.oc + pB.sc * pB.yc.BYTES,
      nG = 2147483647,
      UG = new TextDecoder,
      fG = new TextEncoder,
      kG = Object.freeze({
        vM: 0,
        WJ: null,
        amountAddedToSlot: 0
      }),
      dG = new Proxy({}, {
        get: () => () => pB.md
      });

    function KG(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 65535
    }

    function uG(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 4294967295
    }
    class mG {
      constructor(BB) {
        this.deps = BB, this.ZO = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(pB.sc), this.ids = new Uint16Array(pB.sc), this.amounts = new Uint16Array(pB.sc), this.attrRead = new Float64Array(pB.sc).fill(-1), this.stale = new Uint16Array(pB.sc), this.staleVersion = new Uint32Array(pB.sc), this.instances = new Uint32Array(pB.sc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(BB) {
        var OB;
        return Number.isInteger(BB) && BB >= 0 && BB < this.len && 0 !== this.ids[BB] && null !== (OB = this.facades[BB]) && void 0 !== OB ? OB : null
      }
      sJ() {
        return this.slot(this.selected)
      }
      playerItems() {
        const BB = [];
        for (let OB = 0; OB < Math.min(pB.wd, this.len); OB++) BB.push(this.slot(OB));
        return BB
      }
      freeSlots() {
        let BB = 0;
        for (let OB = 0; OB < Math.min(pB.wd - pB.j, this.len); OB++) 0 === this.ids[OB] && BB++;
        return BB
      }
      amountOf(BB) {
        let OB = 0;
        for (let YB = 0; YB < Math.min(pB.wd, this.len); YB++) {
          const DB = this.slot(YB);
          var GB;
          if ((null === DB || void 0 === DB ? void 0 : DB.name) === BB) OB += null !== (GB = DB.amount) && void 0 !== GB ? GB : 1
        }
        return OB
      }
      instance(BB) {
        var OB;
        return null !== (OB = this.instances[BB]) && void 0 !== OB ? OB : 0
      }
      watch(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      touch() {
        this.version++
      }
      flush(BB) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const GB of [...this.listeners]) try {
            GB()
          } catch (OB) {
            BB(OB)
          }
        }
      }
      chestOpened(BB, OB, GB) {
        this.ZO[0] = BB, this.ZO[1] = OB, this.ZO[2] = GB, this.version++
      }
      refresh() {
        const BB = this.deps.api.apiView,
          OB = pB.u.inventoryViewPtr(BB, 0),
          GB = pB.u.inventoryVersion(BB, 0),
          YB = pB.u.selectedSlot(BB, 0);
        YB !== this.selected && (this.selected = YB, this.version++);
        const DB = pB.u.slotIcon(BB, 0);
        if (DB !== this.slotIconId && (this.slotIconId = DB, this.iconChanged = !0), OB === this.viewPtr && GB === this.viewVersion) return;
        this.viewPtr = OB, this.viewVersion = GB;
        const QB = this.deps.api.memoryData(OB, SG, 4, "the inventory view"),
          oB = QB ? Math.min(QB.getUint32(0, !0), pB.sc) : 0;
        oB !== this.len && (this.len = oB, this.version++);
        let jB = 0;
        for (let yB = 0; yB < pB.sc; yB++) {
          const BB = pB.oc + yB * pB.yc.BYTES,
            OB = null !== QB && yB < oB ? pB.yc.item(QB, BB) : 0;
          if (0 === OB || null === QB) {
            0 !== this.ids[yB] && (this.ids[yB] = 0, this.attrRead[yB] = -1, this.instances[yB]++, this.version++);
            continue
          }
          const GB = pB.yc.amount(QB, BB),
            YB = pB.yc.attrVersion(QB, BB);
          OB === this.ids[yB] && GB === this.amounts[yB] || this.fill(yB, OB, GB), YB !== this.attrRead[yB] && (this.stale[jB] = yB, this.staleVersion[jB] = YB, jB++)
        }
        jB > 0 && this.fetchAttributes(jB)
      }
      fill(BB, OB, GB) {
        const {
          tables: YB
        } = this.deps, DB = OB !== this.ids[BB];
        let QB = this.facades[BB];
        QB || (QB = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[BB] = QB), DB && (QB.name = YB.nameOfId(OB), QB.typeObj = YB.itemType(OB), QB.attributes = {
          customAttributes: {}
        }, this.attrRead[BB] = -1, this.instances[BB]++), QB.amount = 0 === GB ? null : GB, this.ids[BB] = OB, this.amounts[BB] = GB, this.version++
      }
      fetchAttributes(BB) {
        const {
          api: OB,
          onError: GB
        } = this.deps, YB = OB.memoryView(Uint16Array, OB.scratch(), BB, "item_attributes_batch's slots");
        if (!YB) return void this.markRead(BB);
        YB.set(this.stale.subarray(0, BB));
        const DB = OB.queries.itemAttributesBatch(BB),
          QB = 4294967295 === DB ? null : OB.memoryData(OB.scratch(), DB, 4, "item_attributes_batch's answer");
        if (!QB) return void this.markRead(BB);
        const oB = new Uint8Array(QB.buffer, QB.byteOffset, DB);
        for (let yB = 0; yB + 8 <= DB;) {
          const BB = QB.getUint16(yB, !0),
            OB = QB.getUint32(yB + 4, !0),
            YB = oB.subarray(yB + 8, yB + 8 + OB);
          yB += 8 + (0, zB.qe)(OB);
          const DB = this.facades[BB];
          if (DB && 0 !== this.ids[BB] && 0 !== OB) {
            try {
              DB.attributes = JSON.parse(UG.decode(YB))
            } catch (jB) {
              GB(jB)
            }
            this.version++
          }
        }
        this.markRead(BB)
      }
      markRead(BB) {
        for (let OB = 0; OB < BB; OB++) this.attrRead[this.stale[OB]] = this.staleVersion[OB]
      }
      swap(BB, OB) {
        return KG(BB) && KG(OB) && this.settle(this.queries().invSwap(BB, OB))
      }
      move(BB, OB, GB) {
        return KG(BB) && KG(OB) && uG(GB) && this.settle(this.queries().invMove(BB, OB, GB))
      }
      quickMove(BB, OB, GB, YB) {
        var DB, QB;
        if (!KG(BB) || !KG(OB) || !KG(GB) || null !== YB && !uG(YB)) return null;
        const oB = this.queries().invQuickMove(BB, OB, GB, null === YB ? -1 : Math.min(YB, nG)),
          jB = oB === pB.md ? pB.Nb : null !== (DB = null === (QB = this.extras()) || void 0 === QB ? void 0 : QB[1]) && void 0 !== DB ? DB : pB.Nb;
        return this.settle(oB), jB === pB.Nb ? null : jB
      }
      remove(BB, OB, GB) {
        return KG(BB) && uG(OB) && this.settle(this.queries().invRemove(BB, OB, GB ? 1 : 0))
      }
      selectSlot(BB) {
        return KG(BB) && this.settle(this.queries().selectSlot(BB))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(BB, OB, GB) {
        if (!KG(BB) || !Number.isInteger(OB)) return !1;
        const [YB, DB, QB] = GB;
        return this.settle(this.queries().invEnchant(BB, OB, Math.floor(YB), Math.floor(DB), Math.floor(QB)))
      }
      craft(BB, OB, GB) {
        let YB;
        try {
          YB = this.deps.tables.getItemId(BB)
        } catch {
          return kG
        }
        if (!KG(OB) || null !== GB && (Number.isNaN(GB) || GB < 0)) return kG;
        const DB = null === GB || GB > nG ? -1 : Math.floor(GB),
          QB = this.queries().craft(YB, OB, DB);
        let oB = kG;
        const jB = QB === pB.md ? null : this.extras();
        if (jB) {
          const [BB, OB, GB] = jB;
          oB = {
            vM: BB,
            WJ: OB === pB.Nb ? null : OB,
            amountAddedToSlot: GB
          }
        }
        return this.settle(QB), oB
      }
      salvage(BB, OB, GB) {
        let YB;
        try {
          YB = this.deps.tables.getItemId(OB)
        } catch {
          return !1
        }
        return KG(BB) && Number.isInteger(GB) && this.settle(this.queries().salvage(BB, YB, Math.max(Math.min(GB, nG), -nG)))
      }
      craftingView(BB, OB, GB) {
        var YB;
        if (this.stopped) return null;
        const {
          api: DB,
          onError: QB
        } = this.deps, oB = BB ? fG.encode(BB) : null;
        if (null !== oB) {
          if (oB.length > 1024) return QB(new Error(`The crafting station ${BB}'s name is over 1024 bytes`)), null;
          const OB = DB.memoryView(Uint8Array, DB.scratch(), oB.length, "crafting_view's station");
          if (!OB) return null;
          OB.set(oB)
        }
        const jB = KG(OB) && KG(GB),
          yB = DB.queries.craftingView(null !== (YB = null === oB || void 0 === oB ? void 0 : oB.length) && void 0 !== YB ? YB : 0, jB ? OB : 0, jB ? GB : 0);
        return yB < pB.rb.BYTES ? (DB.reportCorruption(`crafting_view's answer of ${yB} bytes`), null) : DB.memoryData(DB.scratch(), yB, 1, "crafting_view's answer")
      }
      queries() {
        var BB, OB;
        return !1 === (null === (BB = (OB = this.deps).beforeOp) || void 0 === BB ? void 0 : BB.call(OB)) ? (this.stopped = !0, dG) : this.deps.api.queries
      }
      extras() {
        const {
          api: BB
        } = this.deps;
        return BB.memoryView(Uint32Array, BB.scratch(), 3, "a sync query's extra words")
      }
      settle(BB) {
        if (BB === pB.kd)(0, YG.b)();
        else if (BB !== pB.md) {
          const OB = this.deps.cmd();
          OB && function(BB, OB, GB) {
            return (0, YG.b)(), (0, pB.lg)(BB, OB, GB)
          }(OB, 0, BB) || this.deps.onError(new Error(`Sync op ${BB}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), BB !== pB.md
      }
    }
    const IG = 1 / .6,
      FG = [0, 1, 0],
      iG = [0, 0, 0],
      LG = new Uint8Array(0),
      gG = 1.2 * RO.f.sZ,
      rG = new TextEncoder,
      XG = [0, 0, 0],
      wG = [0, 0, 0],
      EG = new Map;

    function cG(BB) {
      let OB = EG.get(BB);
      return OB || (EG.size >= 64 && EG.clear(), OB = rG.encode(`{"emitRate":${BB}}`), EG.set(BB, OB)), OB
    }

    function hG(BB) {
      return Number.isFinite(BB) && BB > 0 ? BB : 0
    }

    function aG(BB, OB) {
      for (let GB = 0; GB < 3; GB++) {
        const YB = Math.abs(OB[GB]);
        XG[GB] = BB[GB] - YB, wG[GB] = 2 * YB
      }
      return Number.isFinite(XG[0] + XG[1] + XG[2] + wG[0] + wG[1] + wG[2])
    }

    function eG(BB, OB) {
      return "pos1" === BB || "pos2" === BB ? void 0 : OB
    }

    function TG(BB, OB, GB) {
      return BB.length > pB.Gd.MaxOpts ? (GB(new Error(`${OB}'s particle opts are over ${pB.Gd.MaxOpts} bytes of JSON`)), null) : BB
    }
    const bG = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class CG {
      constructor(BB) {
        this.deps = BB, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(BB, OB) {
        var GB;
        const YB = this.sink(),
          DB = null !== (GB = OB.half) && void 0 !== GB ? GB : iG;
        if (!YB || this.live >= pB.Gd.MaxLiveKeys || this.nextKey > pB.Gd.MaxKey || !aG(OB.pos, DB)) return bG;
        const QB = this.nextKey,
          oB = TG(function(BB) {
            var OB, GB, YB;
            const DB = JSON.stringify({
              texture: "string" === typeof BB.texture ? BB.texture : "smokePuff",
              CP: BB.CP,
              minLifeTime: BB.minLifeTime,
              maxLifeTime: BB.maxLifeTime,
              minSize: BB.minSize,
              maxSize: BB.maxSize,
              minEmitPower: BB.minEmitPower,
              maxEmitPower: BB.maxEmitPower,
              emitRate: hG(BB.emitRate),
              gravity: null !== (OB = BB.gravity) && void 0 !== OB ? OB : iG,
              dir1: null !== (GB = BB.dir1) && void 0 !== GB ? GB : FG,
              dir2: null !== (YB = BB.dir2) && void 0 !== YB ? YB : FG,
              colorGradients: BB.colorGradients,
              blendMode: BB.blendMode
            });
            return rG.encode(DB)
          }(BB), "createParticles", this.deps.onError);
        return oB && (0, pB.kf)(YB, 0, QB, 0, pB.Gd.PresetNone, 0, XG, wG, oB) ? (this.nextKey++, this.live++, this.started = !0, new HG(this, this.session, QB, BB, DB)) : bG
      }
      playEffect(BB) {
        const OB = this.sink(),
          {
            pos1: GB,
            pos2: YB
          } = BB;
        if (!OB || !GB || !YB) return;
        for (let QB = 0; QB < 3; QB++) XG[QB] = Math.min(GB[QB], YB[QB]), wG[QB] = Math.abs(YB[QB] - GB[QB]);
        if (!Number.isFinite(XG[0] + XG[1] + XG[2] + wG[0] + wG[1] + wG[2])) return;
        const DB = TG(rG.encode(JSON.stringify(BB, eG)), "playParticleEffect", this.deps.onError);
        DB && (0, pB.gf)(OB, 0, 0, pB.Gd.PresetNone, pB.Gd.HasBox, 0, XG, wG, DB)
      }
      burstPreset(BB, OB, GB) {
        const YB = this.sink(),
          DB = Math.min(Math.floor(GB), pB.Gd.MaxBurst);
        if (!YB || !Object.hasOwn(pB.hc, BB) || !(DB > 0)) return;
        const QB = gG;
        for (let oB = 0; oB < 3; oB++) XG[oB] = OB[oB] - QB / 2, wG[oB] = QB;
        Number.isFinite(XG[0] + XG[1] + XG[2]) && (0, pB.gf)(YB, 0, 0, pB.hc[BB], pB.Gd.HasBox, DB, XG, wG, LG)
      }
      sessionEnded() {
        this.session++;
        const BB = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !BB || (0, pB.nf)(BB, 0)
      }
      sinkFor(BB) {
        return BB === this.session ? this.deps.cmd() : null
      }
      stop(BB, OB) {
        const GB = this.sinkFor(BB);
        GB && (0, pB.of)(GB, 0, OB) && this.live--
      }
    }
    class HG {
      constructor(BB, OB, GB, YB, DB) {
        this.owner = BB, this.session = OB, this.key = GB, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(DB[0]), Math.abs(DB[1]), Math.abs(DB[2])], this.rate = hG(YB.emitRate), this.emitted = this.rate > 0;
        const QB = YB.maxLifeTime * IG * 1e3 + 250;
        this.stopDelayMs = QB >= 0 ? Math.min(QB, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(BB, OB) {
        const GB = this.sink();
        if (GB) {
          if (OB)
            for (let BB = 0; BB < 3; BB++) this.half[BB] = Math.abs(OB[BB]);
          aG(BB, this.half) && (0, pB.rf)(GB, 0, this.key, pB.Gd.HasBox, XG, wG, LG)
        }
      }
      setEmitRate(BB) {
        const OB = this.sink(),
          GB = hG(BB);
        OB && GB !== this.rate && (0, pB.rf)(OB, 0, this.key, 0, iG, iG, cG(GB)) && (this.rate = GB, this.emitted ||= GB > 0)
      }
      emit(BB) {
        const OB = this.sink(),
          GB = Math.min(Math.floor(BB), pB.Gd.MaxBurst);
        OB && GB > 0 && (0, pB.gf)(OB, 0, this.key, pB.Gd.PresetNone, 0, GB, iG, iG, LG) && (this.emitted = !0)
      }
      emitPoints(BB, OB, GB) {
        const YB = this.sink(),
          DB = Math.min(Math.floor(GB), pB.Gd.MaxPoints, Math.floor(OB.length / 4));
        if (!YB || !(DB > 0) || !Number.isFinite(BB[0] + BB[1] + BB[2])) return;
        const QB = new Uint8Array(OB.buffer, OB.byteOffset, DB * pB.Gd.PointBytes);
        (0, pB.if)(YB, 0, this.key, DB, BB, QB) && (this.emitted = !0)
      }
      setDirections(BB, OB) {
        const GB = this.sink();
        if (!GB || !Number.isFinite(BB[0] + BB[1] + BB[2] + OB[0] + OB[1] + OB[2])) return;
        const YB = rG.encode(JSON.stringify({
          dir1: [BB[0], BB[1], BB[2]],
          dir2: [OB[0], OB[1], OB[2]]
        }));
        (0, pB.rf)(GB, 0, this.key, 0, iG, iG, YB)
      }
      stop() {
        const BB = this.sink();
        this.stopped = !0, BB && (this.emitted ? (this.rate > 0 && (0, pB.rf)(BB, 0, this.key, 0, iG, iG, cG(0)), setTimeout((() => {
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
    const vG = vO.p,
      sG = new TextDecoder;

    function xG(BB, OB) {
      const {
        serverIds: GB,
        kinds: YB
      } = BB;
      let DB = 0;
      for (let QB = 0; QB < GB.length; QB++) {
        const BB = GB[QB];
        if (BB !== pB.cd && !VB(YB[QB])) {
          if (DB === OB.length) {
            const BB = new Int32Array(Math.max(64, 2 * DB));
            BB.set(OB), OB = BB
          }
          OB[DB++] = BB
        }
      }
      return {
        ids: OB,
        count: DB
      }
    }

    function tG(BB, OB) {
      return BB.length >= OB ? BB : new Int32Array(Math.max(OB, 2 * BB.length))
    }

    function BY(BB, OB, GB, YB) {
      for (let DB = 0; DB < GB; DB += 4096) {
        const QB = Math.min(4096, GB - DB),
          oB = BB.memoryView(Int32Array, BB.scratch(), QB, "entity_info_batch's ids");
        if (!oB) return !1;
        oB.set(OB.subarray(DB, DB + QB));
        const jB = BB.queries.entityInfoBatch(QB),
          yB = 4294967295 === jB ? null : BB.memoryData(BB.scratch(), jB, 4, "entity_info_batch's records");
        if (!yB) return !1;
        for (let BB = 0; BB + pB.Ub.BYTES <= jB;) {
          const OB = pB.Ub.len(yB, BB);
          YB(pB.Ub.serverId(yB, BB), OY(yB, BB, OB)), BB += pB.Ub.BYTES + (0, zB.qe)(OB)
        }
      }
      return !0
    }

    function OY(BB, OB, GB) {
      var YB, DB, QB;
      const oB = pB.Ub.kind(BB, OB),
        jB = 0 === oB ? null : SB(oB);
      if (null === jB) return null;
      const yB = pB.Ub.variation(BB, OB),
        JB = pB.Ub.pose(BB, OB),
        MB = pB.Ub.meta(BB, OB),
        PB = pB.Ub.mesh(BB, OB),
        zB = 0 !== (pB.Ub.flags(BB, OB) & pB.Rb.HasOpts),
        lB = vG[jB];
      return Object.freeze({
        type: jB,
        variation: yB === pB.jd ? void 0 : null !== (YB = null !== (DB = null === lB || void 0 === lB ? void 0 : lB[yB]) && void 0 !== DB ? DB : null === lB || void 0 === lB ? void 0 : lB[0]) && void 0 !== YB ? YB : "default",
        pose: JB === pB.nc ? void 0 : null !== (QB = pB.Jb[JB]) && void 0 !== QB ? QB : pB.Jb[0],
        metaInfo: MB === pB.nc ? void 0 : pB.Sc[MB],
        meshKind: PB === pB.nc ? void 0 : pB.Pc[PB],
        meshOpts: zB ? sG.decode(new Uint8Array(BB.buffer, BB.byteOffset + OB + pB.Ub.BYTES, GB)) : void 0
      })
    }
    const GY = 1,
      YY = 2;
    class DY {
      constructor(BB) {
        this.deps = BB, this.wanted = 0, this.sJ = !1, this.refused = !1
      }
      get on() {
        return this.sJ
      }
      want(BB, OB) {
        this.wanted = OB ? this.wanted | BB : this.wanted & ~BB;
        const GB = 0 !== this.wanted;
        if (GB === this.sJ) return;
        const YB = this.deps.cmd();
        null !== YB ? (0, pB.sg)(YB, 0, GB ? 1 : 0) ? (this.sJ = GB, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.sJ = !1
      }
    }
    class QY {
      constructor(BB) {
        this.deps = BB, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(BB) {
        var OB;
        return this.complete || this.fill(), null !== (OB = this.entries.get("string" === typeof BB ? BB : String(BB))) && void 0 !== OB ? OB : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(BB) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const BB = new Int32Array(2 * this.pending.length);
            BB.set(this.pending), this.pending = BB
          }
          this.pending[this.pendingCount++] = BB
        }
      }
      removed(BB) {
        this.entries.size > 0 && this.entries.delete(String(BB))
      }
      refresh() {
        const BB = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (BB > 0 && this.complete) {
          const {
            api: OB
          } = this.deps;
          let GB = 0;
          const YB = this.ids = tG(this.ids, BB);
          for (let DB = 0; DB < BB; DB++) {
            const BB = this.pending[DB],
              QB = OB.indexById.get(BB);
            void 0 === QB || VB(OB.kinds[QB]) ? this.entries.delete(String(BB)) : YB[GB++] = BB
          }
          GB > 0 && !this.batch(YB, GB) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(GY, !1)
      }
      fill() {
        const {
          api: BB
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: BB
          } = this.deps, OB = BB.on;
          BB.want(GY, !0), !OB && BB.on && (this.refill = this.midFrame)
        }
        const {
          ids: OB,
          count: GB
        } = xG(BB, this.ids);
        this.ids = OB, GB > 0 && !this.batch(OB, GB) && (this.refill = !0)
      }
      batch(BB, OB) {
        return BY(this.deps.api, BB, OB, ((BB, OB) => {
          null === OB ? this.entries.delete(String(BB)) : this.entries.set(String(BB), OB)
        }))
      }
    }
    var oY = GB(5287);

    function jY(BB) {
      if ("message" !== BB.type || BB.ty !== oY.oc.NewClientOptions || BB.payloadKind !== zB.sc.Msgpack) return null;
      const OB = (0, wB.b)(BB.payload);
      if (null === OB || "object" !== typeof OB || Array.isArray(OB)) throw new Error("NewClientOptions whose body isn't an object of options");
      return OB
    }
    var yY = GB(1238),
      JY = GB(37292);

    function MY(BB, OB, GB, YB, DB, QB, jB) {
      var yB, JB, MB;
      switch (BB) {
        case pB.ee.ToggleMenu: {
          const BB = pB.H[OB];
          oB.o.tM("toggleMenu", void 0 === BB ? "inventory" : `inventory|${BB}`);
          break
        }
        case pB.ee.EditBoard:
          oB.o.tM("EditBoard", {
            pos: 0 === OB ? null : GB
          });
          break;
        case pB.ee.EditCodeBlock:
        case pB.ee.ViewCodeBlock:
          oB.o.tM("EditCodeBlock", {
            pos: GB,
            canChangePos: BB === pB.ee.EditCodeBlock
          });
          break;
        case pB.ee.EditCustomLobbyBlock:
          oB.o.tM("EditCustomLobbyBlock", {
            pos: GB
          });
          break;
        case pB.ee.OpenIronChest:
          oB.o.tM("OpenIronChest", {
            pos: GB
          });
          break;
        case pB.ee.EditNameTag:
          oB.o.tM("EditNameTag", null !== (yB = null === (JB = DB.sJ()) || void 0 === JB || null === (MB = JB.attributes.customAttributes) || void 0 === MB ? void 0 : MB.text) && void 0 !== yB ? yB : "");
          break;
        case pB.ee.EditBook: {
          var PB, zB, qB;
          const BB = null === (PB = DB.sJ()) || void 0 === PB ? void 0 : PB.attributes;
          oB.o.tM("EditBook", {
            pages: (0, yY.Q)(null === BB || void 0 === BB || null === (zB = BB.customAttributes) || void 0 === zB ? void 0 : zB.pages),
            title: null !== (qB = null === BB || void 0 === BB ? void 0 : BB.customDisplayName) && void 0 !== qB ? qB : "Title",
            isPublished: !(null === BB || void 0 === BB || !BB.customDescription)
          });
          break
        }
        case pB.ee.CantChangeBlock:
          ! function(BB, OB) {
            const GB = OB.getClientOption("cantChangeError"),
              YB = OB.getClientOption(BB ? "cantBuildError" : "cantBreakError"),
              DB = BB ? GB : YB;
            (OB.getClientOption("canChange") || DB || "You cannot modify this block" !== GB) && oB.o.tM("showBottomMessage", {
              message: YB || GB,
              type: "Error"
            })
          }(1 === OB, QB);
          break;
        case pB.ee.MiddleBarStart:
          oB.o.tM("middleScreenBarInitiate", {
            duration: YB,
            BY: 1 === GB[0],
            horizBarRemOffset: OB
          });
          break;
        case pB.ee.MiddleBarStop:
          oB.o.tM("middleScreenBarRemove");
          break;
        case pB.ee.Hitmarker:
          oB.o.tM("localGunHitmarker", {
            GD: 1 === OB
          });
          break;
        case pB.ee.ShotsLeft:
          oB.o.tM("localPlayerNewShotsLeft", YB);
          break;
        case pB.ee.AimingOverlay:
          oB.o.tM("aimingOverlay", 3 === (3 & OB) ? "sniper" : "none");
          break;
        case pB.ee.BottomMessage:
          oB.o.tM("showBottomMessage", JSON.parse(jB()));
          break;
        case pB.ee.Crosshair:
          DB.inaccuracy = (0, EB.d)(YB), (0, JY.c)().crosshairAccuracy(DB.inaccuracy);
          break;
        case pB.ee.ChargeStage:
          break;
        case pB.ee.EmoteWheelClose:
          oB.o.tM("requestEmoteWheelClose");
          break;
        case pB.ee.BlockMined:
          oB.o.tM("localBlockMined");
          break;
        default:
          throw new lB.b(`UiEvent of no kind: what ${BB}`)
      }
    }
    var PY = GB(38675),
      zY = GB(34799),
      lY = GB(2059),
      pY = GB(37495),
      qY = GB(34813),
      ZY = GB(5274);
    const NY = 10,
      RY = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      WY = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      AY = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function VY(BB, OB) {
      let GB, YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const QB = () => (GB = (0, lY.k)(GB, OB()), GB);
      return {
        current: QB,
        watch(OB) {
          const GB = () => {
              OB(QB())
            },
            oB = [BB.watch(GB)];
          return null !== YB && oB.push((0, lY.n)((BB => {
            BB.some(YB) && GB()
          }))), null !== DB && oB.push(DB(GB)), () => {
            for (const BB of oB) BB()
          }
        }
      }
    }

    function SY(BB) {
      return BB && {
        name: BB.name,
        amount: BB.amount,
        attributes: BB.attributes
      }
    }
    const nY = new WeakMap;

    function UY(BB) {
      let OB = nY.get(BB);
      return void 0 === OB && (OB = (0, qY.creativeItemIds)().map((OB => ({
        name: BB.nameOfId(OB),
        amount: BB.isStackableId(OB) ? 1 : null,
        attributes: (0, PY.b)("Gun" === (0, qY.itemTypeOf)(OB) ? {
          type: "Gun",
          clipSize: (0, qY.clipSizeOf)(OB)
        } : void 0)
      }))), nY.set(BB, OB)), OB
    }

    function fY(BB, OB, GB, YB) {
      const DB = OB => (BB.flush(YB), OB),
        QB = GB => {
          var YB, DB, QB, oB, jB, yB, JB;
          const MB = BB.slot(GB);
          if (!MB) return null;
          const {
            rootName: PB,
            metaStr: zB
          } = OB.getMetaInfo(MB.name);
          return {
            name: MB.name,
            amount: MB.amount,
            attributes: MB.attributes,
            instance: BB.instance(GB),
            displayName: null !== (YB = MB.attributes.customDisplayName) && void 0 !== YB ? YB : OB.getDisplayName(PB),
            requiresAmmo: "RequiresAmmo" === zB,
            clipSize: null !== (DB = null !== (QB = null === (oB = MB.attributes.customAttributes) || void 0 === oB || null === (jB = oB.gunStats) || void 0 === jB ? void 0 : jB.clipSize) && void 0 !== QB ? QB : null === (yB = OB.getGunStats(PB)) || void 0 === yB ? void 0 : yB.clipSize) && void 0 !== DB ? DB : null === (JB = MB.typeObj) || void 0 === JB ? void 0 : JB.clipSize
          }
        },
        jB = function(BB, OB) {
          let GB = null,
            YB = {
              focus: null,
              recipes: [],
              detail: null
            },
            DB = -1;
          const QB = new Set;
          return {
            read() {
              var QB, oB;
              if (null === GB) return null !== YB.focus && (YB = {
                ...YB,
                focus: null
              }), YB;
              if (YB.focus === GB && DB === BB.changes) return YB;
              if (DB = BB.changes, 0 === BB.length) return YB = {
                focus: GB,
                recipes: [],
                detail: null
              }, YB;
              let jB = 0;
              if (null !== GB.recipe) try {
                jB = OB.getItemId(GB.recipe.name)
              } catch {}
              const yB = BB.craftingView(GB.station, jB, null !== (QB = null === (oB = GB.recipe) || void 0 === oB ? void 0 : oB.HM) && void 0 !== QB ? QB : 0);
              return YB = null === yB ? {
                focus: GB,
                recipes: [],
                detail: null
              } : function(BB, OB, GB) {
                let YB = pB.rb.BYTES;
                const DB = [];
                for (let MB = pB.rb.recipes(BB, 0); MB > 0; MB--) {
                  const GB = pB.fb.flags(BB, YB),
                    QB = {
                      name: OB.nameOfId(pB.fb.item(BB, YB)),
                      HM: pB.fb.recipe(BB, YB),
                      requires: [],
                      produces: pB.fb.produces(BB, YB),
                      haveIngredients: 0 !== (GB & pB.bb.HaveIngredients),
                      listed: 0 !== (GB & pB.bb.Listed)
                    };
                  let oB = pB.fb.requires(BB, YB);
                  for (YB += pB.fb.BYTES; oB > 0; oB--) {
                    const GB = pB.jb.items(BB, YB);
                    QB.requires.push({
                      items: KY(BB, YB + pB.jb.BYTES, GB, OB),
                      amt: pB.jb.amount(BB, YB)
                    }), YB += pB.jb.BYTES + 2 * GB
                  }
                  DB.push(QB)
                }
                const QB = pB.rb.flags(BB, 0);
                if (null === GB.recipe || 0 === (QB & pB.nb.Detail)) return {
                  focus: GB,
                  recipes: DB,
                  detail: null
                };
                const oB = {},
                  jB = {};
                for (let MB = pB.rb.ingredients(BB, 0); MB > 0; MB--) {
                  const GB = pB.$.item(BB, YB),
                    DB = pB.$.from(BB, YB),
                    QB = pB.$.amount(BB, YB);
                  YB += pB.$.BYTES;
                  const yB = DB === pB.G ? null : KY(BB, YB, DB, OB);
                  if (null !== yB && (YB += 2 * DB), 0 === GB) continue;
                  const JB = OB.nameOfId(GB);
                  oB[JB] = QB, null !== yB && (jB[JB] = yB)
                }
                const {
                  name: yB,
                  HM: JB
                } = GB.recipe;
                return {
                  focus: GB,
                  recipes: DB,
                  detail: {
                    name: yB,
                    HM: JB,
                    craftAllTimes: pB.rb.craftAllTimes(BB, 0),
                    roomForOne: 0 !== (QB & pB.nb.RoomForOne),
                    resultStackable: Boolean(OB.getItemStat(yB, "stackable")),
                    amounts: oB,
                    ingredientsCraftedFrom: jB
                  }
                }
              }(yB, OB, GB), YB
            },
            setFocus(BB) {
              GB = BB;
              for (const OB of [...QB]) OB()
            },
            watchFocus: BB => (QB.add(BB), () => {
              QB.delete(BB)
            })
          }
        }(BB, OB);
      return {
        states: {
          inventory: VY(BB, (() => {
            const GB = BB.length;
            if (0 === GB) return RY;
            const YB = [];
            for (let OB = 0; OB < pB.wd; OB++) YB.push(SY(BB.slot(OB)));
            const DB = BB.slotIcon,
              QB = YB[BB.selectedSlot];
            0 !== DB && QB && (YB[BB.selectedSlot] = {
              ...QB,
              icon: OB.nameOfId(DB)
            });
            const oB = !0 === OB.getClientOption("creative");
            let jB = [],
              yB = null;
            if (GB > pB.wd) {
              for (let OB = pB.wd; OB < GB; OB++) jB.push(SY(BB.slot(OB)));
              yB = {
                type: null,
                pos: [...BB.ZO],
                numSlots: GB - pB.wd,
                ironChest: null
              }
            } else oB && (jB = UY(OB));
            return {
              player: YB,
              chestOrCreative: jB,
              chest: yB,
              creative: oB,
              selectedSlot: BB.selectedSlot,
              freeSlots: BB.freeSlots()
            }
          }), (0, lY.h)("creative")),
          hotbar: VY(BB, (() => {
            if (0 === BB.length) return WY;
            const OB = [];
            for (let BB = 0; BB < NY; BB++) OB.push(QB(BB));
            return {
              items: OB,
              ammo: BB.amountOf("Ammo"),
              selectedSlot: BB.selectedSlot
            }
          }), (0, lY.g)("DisplayName", "GunStats")),
          crafting: VY(BB, jB.read, null, jB.watchFocus),
          heldItemAim: VY(BB, (() => {
            var OB;
            if (!GB()) return AY;
            const YB = null === (OB = BB.sJ()) || void 0 === OB ? void 0 : OB.typeObj,
              DB = "Gun" === (null === YB || void 0 === YB ? void 0 : YB.type);
            return {
              gun: DB,
              aimable: DB || !0 === (null === YB || void 0 === YB ? void 0 : YB.showsAimingUi),
              chargeName: "Chargeable" === (null === YB || void 0 === YB ? void 0 : YB.type) ? YB.name : null
            }
          }), null, (BB => function(BB, OB) {
            let GB = BB();
            return (0, ZY.z)((() => {
              const YB = BB();
              YB !== GB && (GB = YB, OB(YB))
            }))
          }(GB, BB)))
        },
        events: {
          hotbarSlotRequested: (0, lY.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, lY.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, lY.b)("numkeyPressed"),
          inventoryDropRequested: (0, lY.b)("DropInvenItem"),
          chestToggled: (0, lY.b)("chestToggleFromServer"),
          chestRefreshed: (0, lY.b)("chestRefreshedFromServer", dY),
          inventorySynced: (0, lY.b)("syncedInvenFromServer", dY),
          enchantingTableOpened: (0, lY.b)("enchantingTable", (BB => {
            let {
              position: GB,
              SM: YB
            } = BB;
            return {
              position: [...GB],
              blockName: OB.getMetaInfo(YB).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(OB) {
            BB.selectSlot(OB), BB.flush(YB)
          },
          removeInventoryItem(OB) {
            let {
              slot: GB,
              amount: YB,
              drop: QB
            } = OB;
            return DB(BB.remove(GB, YB, QB))
          },
          swapInventorySlots(OB) {
            let {
              a: GB,
              b: YB
            } = OB;
            return DB(BB.swap(GB, YB))
          },
          moveInventoryItem(OB) {
            let {
              from: GB,
              to: YB,
              amount: QB
            } = OB;
            return DB(BB.move(GB, YB, QB))
          },
          quickMoveInventoryItem(OB) {
            let {
              slot: GB,
              start: YB,
              end: QB,
              amount: oB
            } = OB;
            return DB(BB.quickMove(GB, YB, QB, oB))
          },
          closeChest() {
            BB.closeChest(), BB.flush(YB), oB.o.tM("chestClosedByPlayer")
          },
          focusCrafting(BB) {
            jB.setFocus(BB)
          },
          craftRecipe(OB) {
            let {
              name: GB,
              HM: YB,
              times: QB
            } = OB;
            return DB(BB.craft(GB, YB, QB))
          },
          salvageItem(OB) {
            let {
              slot: GB,
              name: YB,
              amount: QB
            } = OB;
            return DB(BB.salvage(GB, YB, QB))
          },
          enchantItem(OB) {
            let {
              slot: GB,
              level: YB,
              tablePos: DB
            } = OB;
            BB.enchant(GB, YB, DB)
          }
        },
        queries: {
          enchantingOffer(GB) {
            let {
              slot: YB,
              blockName: DB
            } = GB;
            return function(BB, OB, GB, YB) {
              const DB = BB.slot(GB);
              if (!DB || !OB.getClientOption("canCraft") || !(0, zY.m)(YB) || (0, zY.i)(DB.attributes)) return kY;
              const QB = (0, qY.enchantmentPerksOf)(OB.getItemId(DB.name));
              if (0 === QB.length) return kY;
              const oB = [];
              for (let jB = 0; jB < pY.f; jB++) {
                const {
                  commonProb: BB,
                  uncommonProb: OB,
                  rareProb: GB,
                  epicProb: DB,
                  legendaryProb: QB,
                  level: yB
                } = (0, zY.f)(YB, jB);
                oB.push({
                  level: yB,
                  odds: [BB, OB, GB, DB, QB].map((BB => 100 * BB))
                })
              }
              return {
                perks: [...QB],
                options: oB
              }
            }(BB, OB, YB, DB)
          }
        }
      }
    }
    const kY = Object.freeze({
      perks: [],
      options: []
    });

    function dY() {
      return null
    }

    function KY(BB, OB, GB, YB) {
      const DB = [];
      for (let QB = 0; QB < GB; QB++) {
        const GB = BB.getUint16(OB + 2 * QB, !0);
        0 !== GB && DB.push(YB.nameOfId(GB))
      }
      return DB
    }
    class uY {
      constructor(BB) {
        this.api = BB, this.positions = new Map, this.targeted = {
          r_: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          yZ: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(BB) {
        let OB = this.positions.get(BB);
        return OB || (this.api.checkValid(BB) || this.api.isLocal(BB) ? (OB = [NaN, NaN, NaN], this.api.readPosition(BB, OB), this.positions.set(BB, OB), OB) : null)
      }
      hOB() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [OB, GB] of this.positions) this.api.readPosition(OB, GB) || this.api.checkValid(OB) || this.api.isLocal(OB) || this.positions.delete(OB);
        const BB = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (pB.u.playerFlags(BB, 0) & pB.Id.Breaking) && pB.u.breakingProgress(BB, 0) >= 0, this.isBreaking)
          for (let OB = 0; OB < 3; OB++) this.breaking[OB] = pB.u.breakingPos(BB, 0, OB)
      }
      refreshTarget() {
        const BB = this.api.apiView,
          OB = pB.u.targetBlockId(BB, 0);
        if (this.hasTarget = OB !== pB.fd, this.hasTarget) {
          const GB = this.targeted;
          GB.r_ = OB;
          for (let OB = 0; OB < 3; OB++) GB.position[OB] = pB.u.targetBlock(BB, 0, OB), GB.normal[OB] = pB.u.targetNormal(BB, 0, OB), GB.yZ[OB] = pB.u.targetAdjacent(BB, 0, OB)
        }
      }
      despawned(BB) {
        const OB = this.positions.get(BB);
        OB && !this.api.isLocal(BB) && (OB.fill(NaN), this.positions.delete(BB))
      }
    }
    var mY = GB(41635),
      IY = GB(41616),
      FY = GB(37058),
      iY = GB(37490);
    const LY = 1,
      gY = 2;
    class rY {
      constructor() {
        this.game = new iY.e, this.client = new iY.e, this.sJ = 0, this.movesFly = null
      }
      setGame(BB) {
        if (null === BB || "object" !== typeof BB) return !1;
        const {
          key: OB,
          value: GB
        } = BB;
        return "string" === typeof OB && (this.game.setBooleanType(OB, Boolean(GB)), !0)
      }
      setClient(BB, OB) {
        this.client.setBooleanType(BB, OB)
      }
      clearGame() {
        this.game = new iY.e, this.movesFly = null
      }
      setMovesFly(BB) {
        this.movesFly = BB
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? LY : 0) | (this.client._getTotalBooleanVal() ? gY : 0)
      }
      write(BB) {
        const OB = this.perms(),
          {
            movesFly: GB
          } = this;
        if (OB === this.sJ && null === GB) return !0;
        let YB = pB.Wb.Keep;
        return null !== GB && (YB = GB ? pB.Wb.On : pB.Wb.Off), !(!BB || !(0, pB.Be)(BB, 0, YB, OB, GB ? 1 : 0)) && (this.sJ = OB, this.movesFly = null, !0)
      }
    }
    class XY {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = BB, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: jB.b,
          get y() {
            return OB()
          }
        }
      }
      get hasView() {
        const BB = this.api.apiView,
          OB = pB.u.viewProj;
        return 0 !== OB(BB, 0, 3) || 0 !== OB(BB, 0, 7) || 0 !== OB(BB, 0, 11) || 0 !== OB(BB, 0, 15)
      }
      get cameraPosition() {
        const BB = this.api.apiView,
          {
            eye: OB
          } = this;
        for (let GB = 0; GB < 3; GB++) OB[GB] = pB.u.eye(BB, 0, GB);
        return OB
      }
      get cameraDirection() {
        const BB = this.api.apiView,
          OB = pB.u.viewProj,
          GB = OB(BB, 0, 3),
          YB = OB(BB, 0, 7),
          DB = OB(BB, 0, 11),
          QB = Math.hypot(GB, YB, DB),
          {
            forward: oB
          } = this;
        return QB > 0 && (oB[0] = GB / QB, oB[1] = YB / QB, oB[2] = DB / QB), oB
      }
      get cameraHeading() {
        return pB.u.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return pB.u.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return pB.u.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return pB.u.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(BB) {
        this.clip(BB);
        const {
          clipX: OB,
          clipY: GB,
          clipW: YB
        } = this;
        if (YB > 0) {
          const BB = OB / YB * 50,
            DB = -GB / YB * 50;
          return Math.abs(BB) <= this.screenBandPct.x && Math.abs(DB) <= this.screenBandPct.y ? {
            x: 50 + BB,
            y: 50 + DB
          } : this.clampToBand(BB, DB)
        }
        const DB = this.cameraPosition,
          QB = Math.hypot(BB[0] - DB[0], BB[1] - DB[1], BB[2] - DB[2]),
          oB = this.api.apiView,
          jB = pB.u.viewProj,
          yB = QB > 0 ? OB / QB : 0,
          JB = QB > 0 ? -GB / QB : 0,
          MB = Math.hypot(jB(oB, 0, 1), jB(oB, 0, 5), jB(oB, 0, 9)),
          PB = yB / Math.hypot(jB(oB, 0, 0), jB(oB, 0, 4), jB(oB, 0, 8)),
          zB = JB / MB,
          lB = !(Math.abs(PB) >= .001 || Math.abs(zB) >= .001);
        return this.clampToBand(yB, lB ? -(MB || 1) : JB)
      }
      projectDirectionToScreenPos(BB) {
        if (!this.hasView) return;
        const OB = this.cameraPosition,
          GB = this.along;
        for (let YB = 0; YB < 3; YB++) GB[YB] = OB[YB] + 10 * BB[YB];
        return this.projectWorldPosToScreenPos(GB)
      }
      projectWorldPosToViewport(BB) {
        this.clip(BB);
        const {
          clipX: OB,
          clipY: GB,
          clipW: YB
        } = this;
        return YB > 0 ? {
          x: 50 + OB / YB * 50,
          y: 50 - GB / YB * 50
        } : null
      }
      clip(BB) {
        const OB = this.api.apiView,
          GB = BB[0] - pB.u.origin(OB, 0, 0),
          YB = BB[1] - pB.u.origin(OB, 0, 1),
          DB = BB[2] - pB.u.origin(OB, 0, 2),
          QB = pB.u.viewProj;
        this.clipX = QB(OB, 0, 0) * GB + QB(OB, 0, 4) * YB + QB(OB, 0, 8) * DB + QB(OB, 0, 12), this.clipY = QB(OB, 0, 1) * GB + QB(OB, 0, 5) * YB + QB(OB, 0, 9) * DB + QB(OB, 0, 13), this.clipW = QB(OB, 0, 3) * GB + QB(OB, 0, 7) * YB + QB(OB, 0, 11) * DB + QB(OB, 0, 15)
      }
      clampToBand(BB, OB) {
        return (0, jB.c)(BB, OB, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var wY = GB(5305);
    const EY = new TextEncoder,
      cY = new Uint8Array(pB.L * pB.I);
    class hY {
      constructor() {
        this.buttons = [], this.sJ = !0
      }
      set(BB) {
        this.buttons = BB, this.sJ = !1
      }
      attached() {
        this.sJ = 0 === this.buttons.length
      }
      write(BB) {
        if (this.sJ) return;
        const OB = new Uint8Array(pB.L),
          GB = new Uint8Array(pB.L);
        let YB = 0,
          DB = 0;
        for (const {
            id: QB,
            keycode: oB
          }
          of this.buttons) {
          if (YB === pB.L) break;
          const {
            read: BB,
            written: jB
          } = EY.encodeInto(QB, cY.subarray(DB, DB + pB.I));
          if (BB < QB.length) continue;
          const yB = wY.i[oB];
          OB[YB] = "number" === typeof yB ? yB : 0, GB[YB] = jB, YB++, DB += jB
        }
        this.sJ = (0, pB.re)(BB, 0, YB, OB, GB, cY.subarray(0, DB))
      }
    }

    function aY(BB, OB, GB) {
      const YB = EY.encode(OB);
      return YB.length <= pB.I && function(BB, OB, GB, YB) {
        return (0, YG.b)(), (0, pB.uf)(BB, OB, GB, YB)
      }(BB, 0, GB ? 1 : 0, YB)
    }
    var eY = GB(39933);
    const TY = new TextDecoder,
      bY = new TextEncoder,
      CY = new Uint8Array(0),
      HY = [0, 0, 0],
      vY = {
        off: pB.Ld.Off,
        key: pB.Ld.Key,
        touch: pB.Ld.Touch
      };
    class sY {
      constructor(BB) {
        var OB;
        this.options = BB, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new hY, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = kB.o.DEFAULT, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new rY, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.jP = BB => {
          if ((0, lB.d)(BB)) throw BB;
          this.onError(BB)
        }, this.api = BB.api, this.tables = BB.tables, this.onError = null !== (OB = BB.onError) && void 0 !== OB ? OB : BB => {
          console.error("Error in client game callback", BB)
        }, this.renderFrame = new XY(this.api, BB.screenBandY), this.live = new uY(this.api), this.chunks = new MO(this.api.memory, (() => this.api.apiView)), this.items = new mG({
          api: this.api,
          tables: BB.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: BB.beforeOp
        });
        const GB = () => this.stopped() ? null : this.cmd,
          YB = () => this.sessionLive;
        this.entityInfoWatch = new DY({
          cmd: GB,
          onError: this.onError
        }), this.entityInfo = new QY({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: YB
        }), this.particles = new CG({
          cmd: GB,
          isSessionLive: YB,
          onError: this.onError
        }), this.clientApi = new VG({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: BB.tables,
          cmd: GB,
          sendCmd: () => this.sendCmd(),
          isSessionLive: YB,
          beforeWrite: () => {
            var OB;
            if (this.stopped()) return !1;
            const GB = this.generation;
            return !1 !== (null === (OB = BB.beforeWrite) || void 0 === OB ? void 0 : OB.call(BB)) && GB === this.generation
          },
          playerDbId: () => {
            const BB = this.session;
            if (null === BB) throw new Error("No game session has started, so the local player has no DB id");
            return BB.playerDbId
          },
          playSound: BB.playSound,
          preloadSounds: BB.preloadSounds,
          setLocalOptions: BB.setLocalOptions,
          hasPackModel: BB.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new CB({
          api: this.api,
          reportError: OB => {
            var GB;
            this.jP(OB), null === (GB = BB.reportCameraFault) || void 0 === GB || GB.call(BB, OB)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: BB.cameraScreen,
          showFacing: BB.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= fY(this.items, this.tables, (() => this.localPlayerAlive()), this.jP), this.itemSources
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
      clickCodeBlock(BB) {
        const OB = this.sessionLive ? this.sendCmd() : null;
        return null !== OB && (GB = OB, YB = 0, DB = BB[0], QB = BB[1], oB = BB[2], (0, YG.b)(), (0, pB.ve)(GB, YB, DB, QB, oB));
        var GB, YB, DB, QB, oB
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(BB) {
        const OB = this.liveCmd();
        return null === OB ? (this.pendingZoom = BB, !1) : (this.pendingZoom = null, (0, pB.kg)(OB, 0, BB, 1))
      }
      NK(BB) {
        const OB = this.stopped() ? null : this.cmd;
        return null !== OB && (0, pB.gg)(OB, 0, BB ? 1 : 0)
      }
      respawn() {
        const BB = this.sessionLive ? this.sendCmd() : null;
        return null !== BB && (OB = BB, GB = 0, (0, YG.b)(), (0, pB.Jf)(OB, GB));
        var OB, GB
      }
      bindCustomButtonKeys(BB) {
        this.customButtons.set(BB)
      }
      pressCustomButton(BB, OB) {
        const GB = this.sessionLive ? this.sendCmd() : null;
        return null !== GB && aY(GB, BB, OB)
      }
      padMove(BB, OB, GB, YB, DB, QB) {
        const oB = this.liveCmd();
        return null !== oB && (0, pB.cf)(oB, 0, BB, OB, GB, YB, DB, QB)
      }
      thirdPersonFor(BB) {
        const OB = this.liveCmd();
        return null !== OB && (0, pB.pg)(OB, 0, null !== BB && void 0 !== BB ? BB : 1 / 0)
      }
      send(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== YB && DG(YB, GB ? zB.ud : 0, BB, (0, wB.e)(OB))
      }
      socketAttached(BB) {
        this.openSocket = BB, this.socketLeftSinceAttach = !1
      }
      socketDetached(BB) {
        this.openSocket === BB && (this.openSocket = 0)
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
      attach(BB) {
        const OB = () => BB.isStopped;
        this.stopped = OB, this.cmd = BB.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const GB = this.api.apiView;
        this.overflowGen = pB.u.eventOverflowGen(GB, 0), this.resyncOwed = 0 !== pB.u.eventOverflowMask(GB, 0), BB.setGameHost(this), BB.setEventWalker((BB => {
          this.api.walk(BB, this, OB)
        }))
      }
      watchPromptPick(BB) {
        this.promptWatch = BB, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : xY(pB.u.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? pB.vc.None : pB.u.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : pB.u.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === BB || BB >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, BB, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(BB) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(BB)
      }
      netEvent(BB) {
        "connection" === BB.type ? BB.phase === zB.E.Activated && BB.conn !== this.activeConn && BB.conn > this.closedThrough ? (this.endSession(), this.activeConn = BB.conn, this.endGameGrants(), this.dropGameCamera()) : BB.phase !== zB.E.Left && BB.phase !== zB.E.Closed || BB.conn !== this.activeConn ? BB.phase === zB.E.Resumed && 0 !== this.activeConn && BB.conn > this.closedThrough && (this.activeConn = BB.conn) : this.closeGame() : BB.conn === this.activeConn && 0 !== BB.conn && (BB.ty === IY.w ? this.gunHit(BB.payload) : BB.ty === oY.oc.EditItemCraftingRecipes || BB.ty === IY.Q ? this.items.touch() : (this.serverOptions(BB), this.gameMessage(BB)));
        const OB = this.options.onNetEvent;
        OB && this.guard((() => {
          OB(BB)
        }))
      }
      serverOptions(BB) {
        const OB = this.options.serverOptions,
          GB = OB ? this.decoded(jY, BB) : null;
        OB && GB && this.guard((() => {
          OB.applyNewClientOptions(GB)
        }))
      }
      gameMessage(BB) {
        let OB = null;
        try {
          OB = function(BB) {
            if ("message" !== BB.type || BB.ty !== oY.oc.GameCodeMessage || BB.payloadKind !== zB.sc.Msgpack) return null;
            const OB = (0, wB.b)(BB.payload);
            if (null === OB || "object" !== typeof OB || "string" !== typeof OB.messageType) throw new Error("GameCodeMessage without a messageType");
            return OB
          }(BB)
        } catch (GB) {
          this.sessionLive && this.onError(GB)
        }
        if (OB) {
          const {
            messageType: BB,
            data: GB
          } = OB;
          if ((0, mB.g)(BB)) return void this.guard((() => {
            (0, mB.c)(BB, GB)
          }));
          "freeCamPerms" === BB && this.freeCam.setGame(GB) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (OB => {
            OB.onReceivedMessageFromServer(BB, GB)
          }))
        }
      }
      decoded(BB, OB) {
        try {
          return BB(OB)
        } catch (GB) {
          return this.onError(GB), null
        }
      }
      setClientFreeCameraGrant(BB, OB) {
        this.freeCam.setClient(BB, OB), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(BB) {
        this.freeCam.setMovesFly(BB), this.writeFreeCam()
      }
      setBlockHighlight(BB) {
        this.highlight = BB, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const BB = this.liveCmd();
        if (null === BB || !this.highlightOwed) return;
        const OB = this.highlight;
        this.highlightOwed = null === OB ? !(0, pB.Oe)(BB, 0, HY, HY, 0) : !(0, pB.Oe)(BB, 0, OB.pos, OB.normal, 1)
      }
      localPlayerBound(BB) {
        var OB, GB;
        if (0 === this.activeConn || this.sessionLive && BB === this.boundId) return;
        const YB = this.sessionLive;
        let DB, QB, oB, jB;
        this.endSession(), YB && this.restartGameCamera();
        try {
          var yB;
          this.session = null;
          const BB = this.options.sessionInfo(this.activeConn);
          if (this.session = BB, !BB) return;
          DB = BB.gameNameWithVariation, QB = null !== (yB = (0, dB.Xb)(DB)) && void 0 !== yB ? yB : void 0, oB = (0, KB.B)(BB.lobbyName), jB = (0, KB.Q)(BB.lobbyName)
        } catch (RB) {
          return void this.onError(RB)
        }
        const JB = {
          localPlayerId: String(BB)
        };
        let MB = {},
          PB = [];
        try {
          var zB, lB;
          MB = null !== (zB = null === (lB = this.options.gameFactory((0, dB.ac)(DB))) || void 0 === lB ? void 0 : lB(jB, oB, QB, JB)) && void 0 !== zB ? zB : {}
        } catch (RB) {
          this.jP(RB)
        }
        try {
          var pB, qB;
          PB = (0, uB.d)(null === (pB = (qB = this.options).defaultPlugins) || void 0 === pB ? void 0 : pB.call(qB, jB, oB, QB, JB), MB.plugins)
        } catch (RB) {
          this.jP(RB)
        }
        const ZB = [MB, ...PB];
        this.owners = ZB, this.tickers = ZB.filter((BB => void 0 !== BB.kP)), this.renderers = ZB.filter((BB => void 0 !== BB.onAfterRender)), this.receivers = ZB.filter((BB => void 0 !== BB.onReceivedMessageFromServer)), this.writeAltVeto(ZB), this.writeHooks(ZB), this.writePublicLobby(jB), this.writeLocalDbId(null !== (OB = null === (GB = this.session) || void 0 === GB ? void 0 : GB.playerDbId) && void 0 !== OB ? OB : null), this.boundId = BB, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(ZB, (BB => {
          var OB;
          null === (OB = BB.onCreate) || void 0 === OB || OB.call(BB, this.clientApi)
        }));
        const NB = this.generation;
        setTimeout((() => {
          NB === this.generation && !0 === this.tables.getClientOption("creative") && UY(this.tables)
        }), 0)
      }
      chunkSlot(BB, OB, GB, YB, DB, QB) {
        this.chunks.apply(BB, OB, GB, YB, DB, QB)
      }
      entityAdded(BB) {
        var OB;
        this.entityInfo.stale(BB), null === (OB = this.options.replayEntities) || void 0 === OB || OB.entityAdded(BB)
      }
      entityInfoChanged(BB) {
        var OB;
        this.entityInfo.stale(BB), null === (OB = this.options.replayEntities) || void 0 === OB || OB.entityInfoChanged(BB)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const BB = performance.now();
          this.round(this.tickers, tY), (0, ZY.d)(performance.now() - BB)
        }
      }
      afterWalk(BB) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const OB = this.options.replayEntities;
        OB && this.guard((() => {
          this.entityInfoWatch.want(YY, OB.wantsWatch), OB.flush(this.entityInfoWatch.on)
        }));
        const GB = this.api.apiView,
          YB = pB.u.frameMs(GB, 0);
        FY.k.frame(YB, pB.u.heading(GB, 0), pB.u.pitch(GB, 0), FY.g[BB]);
        const DB = (0, ZY.m)(BB, YB);
        if (null !== DB) {
          const BB = this.renderFrame;
          this.guard((() => {
            (0, JY.c)().turnDamageIndicators(BB.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(DB)
          })), this.round(this.renderers, (OB => {
            OB.onAfterRender(DB, BB)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== DB)
        } catch (oB) {
          this.jP(oB)
        }
        this.showZoom(), this.items.flush(this.jP), this.writePromptWatch(), this.writeCustomButtons();
        const QB = this.ticks;
        this.ticks = 0, (0, ZY.i)(QB, BB, DB, this.jP)
      }
      entityRemoved(BB) {
        this.live.despawned(BB), this.entityInfo.removed(BB)
      }
      ackEventOverflow() {
        const BB = this.api.apiView,
          OB = pB.u.eventOverflowGen(BB, 0),
          GB = OB - this.overflowGen >>> 0;
        if (0 === GB && !this.resyncOwed) return;
        this.overflowGen = OB;
        const YB = pB.u.eventOverflowMask(BB, 0),
          DB = this.cmd;
        0 === YB || null === DB || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, pB.Ae)(DB, 0, YB);
        const QB = this.options.onEventOverflow;
        0 !== GB && QB && this.guard((() => {
          QB(YB, GB)
        }))
      }
      gameCall(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        if (BB === pB.lc.Director) try {
          return this.scriptedCamera.call(OB, GB, YB, DB, QB, oB)
        } catch (JB) {
          return this.jP(JB), pB.tb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return BB === pB.lc.AltVeto ? pB.m.Allow : 0;
        try {
          return this.callGames(BB, OB, GB, YB, DB, QB, oB, jB)
        } catch (JB) {
          throw (0, lB.d)(JB) && (this.fault = JB), JB
        }
      }
      takeFault() {
        const BB = this.fault;
        return this.fault = void 0, BB
      }
      callGames(BB, OB, GB, YB, DB, QB, oB, jB) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: yB
        } = this.options, JB = String(this.boundId);
        switch (BB) {
          case pB.lc.AltVeto:
          case pB.lc.AltAction: {
            const jB = 0 !== oB,
              [MB, PB, zB] = jB ? [OB, GB, YB] : [void 0, void 0, void 0],
              lB = jB ? yB.nameOfId(DB) : "Air",
              qB = xY(QB);
            if (BB === pB.lc.AltAction) return this.first((BB => {
              var OB;
              return null === (OB = BB.onPlayerAltAction) || void 0 === OB ? void 0 : OB.call(BB, JB, MB, PB, zB, lB, qB)
            })), 0;
            const ZB = this.first((BB => {
              var OB;
              return null === (OB = BB.onPlayerAttemptAltAction) || void 0 === OB ? void 0 : OB.call(BB, JB, MB, PB, zB, lB, qB)
            }));
            return "preventAction" === ZB ? pB.m.Prevent : "preventPlacement" === ZB ? pB.m.PreventPlacement : pB.m.Allow
          }
          case pB.lc.Click: {
            const BB = jB,
              MB = 0 !== (BB & pB.V.Alt),
              PB = 0 !== (BB & pB.V.HasPos),
              zB = PB ? yB.nameOfId(DB) : "Air",
              [lB, qB, ZB] = PB ? [OB, GB, YB] : [null, null, null],
              NB = xY(QB),
              RB = 0 !== (BB & pB.V.Up),
              WB = xY(oB);
            if (0 === (BB & pB.V.AttackOnly) && this.first((BB => {
                var OB, GB;
                return RB ? null === (OB = BB.onPlayerClickUp) || void 0 === OB ? void 0 : OB.call(BB, JB, MB, lB, qB, ZB, zB, NB) : null === (GB = BB.onPlayerClick) || void 0 === GB ? void 0 : GB.call(BB, JB, MB, lB, qB, ZB, zB, NB)
              })), !RB && !MB && null !== WB) {
              const BB = this.clientApi.getPositionView(WB),
                OB = BB ? [BB[0], BB[1], BB[2]] : [0, 0, 0];
              this.first((BB => {
                var GB;
                return null === (GB = BB.onPlayerAttackEntity) || void 0 === GB ? void 0 : GB.call(BB, JB, WB, OB)
              }))
            }
            return 0
          }
          case pB.lc.ChangeBlock: {
            const BB = yB.nameOfId(DB),
              oB = yB.nameOfId(QB);
            return this.first((DB => {
              var QB;
              return null === (QB = DB.onPlayerChangeBlock) || void 0 === QB ? void 0 : QB.call(DB, JB, OB, GB, YB, BB, oB)
            })), 0
          }
          case pB.lc.DropItem: {
            const BB = yB.nameOfId(OB);
            return this.first((OB => {
              var DB;
              return null === (DB = OB.onPlayerDropItem) || void 0 === DB ? void 0 : DB.call(OB, JB, BB, GB, YB)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${BB}`)), 0
        }
      }
      changeBlockFail(BB, OB, GB, YB, DB, QB, oB) {
        const jB = DB === pB.Xc ? null : TY.decode(this.api.eventBytes(QB, Math.min(DB, oB)));
        this.failures.push({
          wQ: [BB, OB, GB],
          EQ: YB,
          cQ: jB
        })
      }
      changeBlockFailEnd() {
        const BB = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (OB => {
          var GB;
          null === (GB = OB.onChangeBlockFail) || void 0 === GB || GB.call(OB, BB)
        })), this.tM("blockChangeRefused", null), this.tM("EditBoard", {
          pos: null
        }), this.tM("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(BB, OB, GB, YB, DB, QB) {
        BB === pB.Cc.ChestOpened ? this.items.chestOpened(GB, YB, DB) : BB !== pB.Cc.Synced && BB !== pB.Cc.ChestClosed && BB !== pB.Cc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(BB, OB, GB, YB) {
            switch (BB) {
              case pB.Cc.Synced:
                oB.o.tM("syncedInvenFromServer");
                break;
              case pB.Cc.ChestOpened:
              case pB.Cc.ChestClosed:
                oB.o.tM("chestToggleFromServer", BB === pB.Cc.ChestOpened, !0);
                break;
              case pB.Cc.ChestRefreshed:
                oB.o.tM("chestRefreshedFromServer");
                break;
              case pB.Cc.EnchantingTable:
                oB.o.tM("enchantingTable", {
                  SM: YB,
                  position: GB
                });
                break;
              case pB.Cc.HotbarRequest:
                oB.o.tM("setSelectedInventorySlotI", OB, !0);
                break;
              case pB.Cc.Scrolled:
                oB.o.tM("ScrollInventorySlot", OB);
                break;
              case pB.Cc.NumberKey:
                oB.o.tM("numkeyPressed", OB + 1);
                break;
              case pB.Cc.DropRequested:
                oB.o.tM("DropInvenItem", 0 !== OB);
                break;
              default:
                throw new lB.b(`InventoryEvent of no kind: what ${BB}`)
            }
          }(BB, OB, [GB, YB, DB], QB)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(BB, OB, GB, YB) {
        this.tM("shotPlayer", {
          playerId: String(BB),
          damage: OB,
          wasCrit: 0 !== YB,
          distance: GB
        })
      }
      localHurt(BB, OB) {
        this.tM("closeShopOnDamaged", null), this.guard((() => {
          oB.o.tM("damagedByOtherPlayer", {
            kY: null,
            direction: Number.isNaN(OB) ? null : OB,
            vG: BB
          })
        }))
      }
      attackHit(BB, OB, GB, YB, DB) {
        this.guard((() => {
          oB.o.tM("yourAttackHit", {
            GD: YB,
            screenPos: this.renderFrame.projectDirectionToScreenPos([BB, OB, GB]),
            hitSelf: DB
          })
        }))
      }
      physicsType(BB) {
        this.localPhysicsType = BB, this.tM("PlayerPhysicsTypeUpdate", BB)
      }
      vehicleEffect(BB, OB, GB, YB, DB) {
        this.guard((() => {
          BB === zB.Gd.UPDATE ? (0, FB.k)(OB, {
            icon: GB,
            level: YB,
            displayName: null,
            durationMs: DB
          }) : IB.c.remove(OB)
        }))
      }
      zoomChanged(BB) {
        this.zoom = BB, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.tM("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.tM("showBottomMessage", eY.d)
      }
      showZoom() {
        const BB = this.scriptedCamera.holdsView();
        !this.zoomUnshown || BB && this.zoomHeld || (this.zoomUnshown = !1, this.tM("cameraZoomSet", this.zoom)), this.zoomHeld = BB
      }
      gunHit(BB) {
        this.guard((() => {
          const {
            kY: OB,
            dY: GB
          } = (0, mY.e)(IY.w, BB);
          oB.o.tM("damagedByOtherPlayer", {
            kY: OB,
            direction: GB
          })
        }))
      }
      uiEvent(BB, OB, GB, YB, DB, QB, oB, jB) {
        this.guard((() => {
          MY(BB, OB, [GB, YB, DB], QB, this.items, this.options.tables, (() => TY.decode(this.api.eventBytes(oB, jB))))
        }))
      }
      writeAltVeto(BB) {
        const OB = this.cmd;
        if (!OB) return;
        let GB;
        try {
          GB = function(BB, OB) {
            const GB = new Set;
            let YB = !1;
            for (const DB of BB)
              if (DB.onPlayerAttemptAltAction) {
                if (YB = !0, !DB.altVetoBlocks) return {
                  mode: pB.ie.All,
                  roots: []
                };
                for (const BB of DB.altVetoBlocks) GB.add(OB.getMetaInfo(BB).rootId)
              } return YB ? GB.size > pB.Nc ? {
              mode: pB.ie.All,
              roots: []
            } : {
              mode: pB.ie.Filter,
              roots: [...GB]
            } : {
              mode: pB.ie.Off,
              roots: []
            }
          }(BB, this.options.tables)
        } catch (DB) {
          this.onError(DB), GB = {
            mode: pB.ie.All,
            roots: []
          }
        }
        if (GB.mode === pB.ie.Off && !this.vetoSet) return;
        const YB = new Uint8Array(new Uint32Array(GB.roots).buffer);
        (0, pB.Pf)(OB, 0, GB.mode, GB.roots.length, YB) ? this.vetoSet = GB.mode !== pB.ie.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(BB) {
        const OB = this.cmd;
        if (!OB) return;
        const GB = function(BB) {
          let OB = 0;
          for (const GB of BB) GB.onPlayerAltAction && (OB |= 1 << pB.lc.AltAction), (GB.onPlayerClick || GB.onPlayerClickUp || GB.onPlayerAttackEntity) && (OB |= 1 << pB.lc.Click), GB.onPlayerChangeBlock && (OB |= 1 << pB.lc.ChangeBlock), GB.onPlayerDropItem && (OB |= 1 << pB.lc.DropItem);
          return OB
        }(BB);
        (0 !== GB || this.hooksSet) && ((0, pB.Zf)(OB, 0, GB) ? this.hooksSet = 0 !== GB : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const BB = this.cmd;
        BB && !this.stopped() && this.customButtons.write(BB)
      }
      writePromptWatch() {
        const BB = this.cmd,
          OB = this.promptWatch;
        OB !== this.promptWatchSent && BB && !this.stopped() && (0, pB.vg)(BB, 0, vY[OB]) && (this.promptWatchSent = OB)
      }
      writePublicLobby(BB) {
        const OB = this.cmd;
        OB && BB !== this.writtenPublicLobby && ((0, pB.hg)(OB, 0, BB ? 1 : 0) ? this.writtenPublicLobby = BB : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(BB) {
        const OB = this.cmd;
        OB && ((0, pB.$f)(OB, 0, null === BB ? 0 : 1, null === BB ? CY : bY.encode(BB)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(BB) {
        const OB = this.generation;
        for (const YB of this.owners) {
          if (OB !== this.generation) break;
          try {
            const OB = BB(YB);
            if (void 0 !== OB) return OB
          } catch (GB) {
            this.jP(GB)
          }
        }
      }
      tM(BB, OB) {
        this.guard((() => {
          oB.o.tM(BB, OB)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (BB) {
          this.jP(BB)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (BB) {
          this.jP(BB)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = kB.o.DEFAULT;
        const BB = this.owners;
        let OB;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (YB) {
          OB = YB
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (YB) {
          OB ??= YB
        }
        this.round(BB, BD, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (YB) {
          OB ??= YB
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (YB) {
          OB ??= YB
        }
        const GB = this.options.onSessionEnd;
        if (GB) try {
          GB()
        } catch (YB) {
          this.onError(YB)
        }
        void 0 !== OB && this.jP(OB)
      }
      round(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = this.generation;
        for (const QB of BB) {
          if (YB !== this.generation) break;
          try {
            OB(QB)
          } catch (DB) {
            GB ? this.onError(DB) : this.jP(DB)
          }
        }
      }
      guard(BB) {
        try {
          BB()
        } catch (OB) {
          this.jP(OB)
        }
      }
    }

    function xY(BB) {
      return BB === pB.$c ? null : String(BB)
    }

    function tY(BB) {
      BB.kP(zB.Ad)
    }

    function BD(BB) {
      var OB;
      null === (OB = BB.onClose) || void 0 === OB || OB.call(BB)
    }

    function OD(BB, OB) {
      BB.watch((() => {
        const GB = function(BB) {
          const OB = [],
            GB = Math.min(NY, BB.length);
          for (let DB = 0; DB < GB; DB++) {
            var YB;
            const GB = null === (YB = BB.slot(DB)) || void 0 === YB ? void 0 : YB.typeObj,
              QB = GB ? (0, qY.gunTypeOf)(GB.id) : void 0;
            void 0 !== QB && OB.push(nO[QB])
          }
          return OB
        }(BB);
        GB.length > 0 && (OB.preload(GB.flatMap((BB => gO(BB)))), OB.preload(gO(UO)))
      }))
    }
    var GD = GB(37113),
      YD = GB(5353),
      DD = GB(37436),
      QD = GB(37477);

    function oD(BB) {
      const OB = (0, GD.countDecodesAs)(new YD.Howl({
          src: [...(0, DD.t)(BB).src],
          pool: 15,
          preload: !1
        }), "sound"),
        GB = OB.load.bind(OB);
      return OB.load = () => (OB._preload = !0, (0, QD.e)(BB), GB()), OB
    }

    function jD(BB, OB, GB) {
      const YB = BB.listener;
      if (YB.positionX) yD(YB.positionX, OB, GB, 0), yD(YB.positionY, OB, GB, 1), yD(YB.positionZ, OB, GB, 2), yD(YB.forwardX, OB, GB, 3), yD(YB.forwardY, OB, GB, 4), yD(YB.forwardZ, OB, GB, 5), yD(YB.upX, OB, GB, 6), yD(YB.upY, OB, GB, 7), yD(YB.upZ, OB, GB, 8);
      else {
        let BB = !1;
        for (let YB = 0; YB < 9; YB++) BB ||= OB[YB] !== GB[YB];
        BB && (YB.setPosition(OB[0], OB[1], OB[2]), YB.setOrientation(OB[3], OB[4], OB[5], OB[6], OB[7], OB[8]), GB.set(OB))
      }
    }

    function yD(BB, OB, GB, YB) {
      OB[YB] !== GB[YB] && (BB.value = OB[YB], GB[YB] = OB[YB])
    }
    class JD {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(BB) {
        this.pose.set(BB);
        const OB = YD.Howler.ctx;
        return !!OB && (OB !== this.watchedCtx && (this.watchedCtx = OB, this.written.fill(Number.NaN), OB.addEventListener("statechange", (() => {
          "running" === OB.state && jD(OB, this.pose, this.written)
        }))), "running" === OB.state && jD(OB, BB, this.written), !0)
      }
    }
    var MD = GB(37233),
      PD = GB(39922);
    let zD = null,
      lD = null;

    function pD() {
      return null === zD && (zD = document.createElement("div"), zD.className = "WasmCameraLayer", zD.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(zD)), zD
    }

    function qD() {
      return lD ??= new PD.c(new MD.c(pD)), lD
    }

    function ZD() {
      var BB;
      null === (BB = lD) || void 0 === BB || BB.clear(), ND(null)
    }

    function ND(BB) {
      YB.c.get("scriptedCameraFacing") !== BB && YB.c.set({
        scriptedCameraFacing: BB
      })
    }
    var RD = GB(10027),
      WD = GB(9974),
      AD = GB(39954),
      VD = GB(42048),
      SD = GB(3708);
    const nD = Object.entries(pB.kc).reduce(((BB, OB) => {
      let [GB, YB] = OB;
      return BB[YB] = GB, BB
    }), []);

    function UD(BB, OB) {
      var GB;
      return 0 !== ((null !== (GB = BB.itemFlags[OB]) && void 0 !== GB ? GB : 0) & pB.Dc.Stackable)
    }
    const fD = /^(0|[1-9][0-9]*)$/,
      kD = {
        displayName: (BB, OB) => (0, qY.displayNameOf)(OB),
        description: (BB, OB) => (0, qY.descriptionOf)(OB),
        type: (BB, OB) => (0, qY.itemTypeOf)(OB),
        clipSize: (BB, OB) => (0, qY.clipSizeOf)(OB),
        armourReduction: (BB, OB) => (0, qY.armourReductionOf)(OB),
        scopeType: (BB, OB) => (0, qY.scopeTypeOf)(OB),
        stackable: UD,
        harvestType: (BB, OB) => nD[BB.blockHarvestTypes[OB]],
        harvestLevel: (BB, OB) => {
          const GB = BB.blockHarvestLevels[OB];
          return GB === pB.Jc ? void 0 : GB
        },
        harvests: (BB, OB) => {
          var GB;
          const YB = null !== (GB = BB.itemHarvests[OB]) && void 0 !== GB ? GB : 0;
          return 0 !== YB ? nD[YB] : void 0 === (0, qY.harvestsNullLevelOf)(OB) ? void 0 : null
        },
        level: (BB, OB) => {
          var GB, YB;
          const DB = null !== (GB = BB.itemLevels[OB]) && void 0 !== GB ? GB : pB.Jc;
          return DB !== pB.Jc ? DB : null !== (YB = (0, qY.harvestsNullLevelOf)(OB)) && void 0 !== YB ? YB : void 0
        }
      };

    function dD(BB, OB, GB) {
      return uD(new Uint8Array(Math.floor(BB.length / OB)), BB, OB, GB)
    }

    function KD(BB, OB, GB) {
      return uD(new Uint16Array(Math.floor(BB.length / OB)), BB, OB, GB)
    }

    function uD(BB, OB, GB, YB) {
      const DB = new DataView(OB.buffer, OB.byteOffset, OB.byteLength);
      for (let QB = 0; QB < BB.length; QB++) BB[QB] = YB(DB, QB * GB);
      return BB
    }
    class mD {
      constructor(BB, OB) {
        this.options = OB, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = BB => {
          const OB = this.idOf(BB);
          if (void 0 === OB) throw new Error(`No item is named ${BB}, an item's root`);
          return OB
        };
        const GB = OB => {
            const GB = OB();
            return new Uint8Array(BB.memory().buffer, BB.scratch(), GB).slice()
          },
          YB = (new TextDecoder).decode(GB((() => BB.queries.itemNames()))).split("\n"),
          DB = GB((() => BB.queries.blockProps())),
          QB = GB((() => BB.queries.itemProps()));
        this.props = {
          blockFlags: dD(DB, pB.A.BYTES, pB.A.flags),
          blockHarvestTypes: dD(DB, pB.A.BYTES, pB.A.harvestType),
          blockHarvestLevels: dD(DB, pB.A.BYTES, pB.A.harvestLevel),
          blockAttachedTops: KD(DB, pB.A.BYTES, pB.A.attachedTop),
          itemFlags: dD(QB, pB.Fc.BYTES, pB.Fc.flags),
          itemHarvests: dD(QB, pB.Fc.BYTES, pB.Fc.harvests),
          itemLevels: dD(QB, pB.Fc.BYTES, pB.Fc.level)
        }, (0, SD.l)(Object.freeze(YB)), (0, VD.e)()
      }
      idOf(BB) {
        if ("number" === typeof BB) return void 0 === (0, SD.g)(BB) ? void 0 : BB;
        const OB = (0, SD.c)(BB);
        return void 0 === OB && fD.test(BB) ? void 0 === (0, SD.g)(+BB) ? void 0 : +BB : OB
      }
      getMetaInfo(BB) {
        if (!BB || BB === RD.c) return RD.g;
        const OB = this.idOf(BB);
        if (void 0 === OB) throw new Error(`Item ${BB} not found in registry`);
        return this.metaOf(OB)
      }
      blockRootId(BB) {
        return 0 !== BB && void 0 !== (0, SD.g)(BB) ? this.metaOf(BB).rootId : BB
      }
      metaOf(BB) {
        return this.metas[BB] ??= (0, WD.k)((0, SD.g)(BB), BB, this.rootIdOf, (0, qY.rootMetaDescOf)(BB))
      }
      getItemId(BB) {
        if (!BB || BB === RD.c) return 0;
        const OB = this.idOf(BB);
        if (void 0 === OB) throw new Error(`Invalid block name. You sent ${BB}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return OB
      }
      getItemName(BB) {
        if (!BB || BB === RD.c) return RD.c;
        const OB = this.idOf(BB);
        if (void 0 === OB) throw new Error(`Item ${BB} not found in registry`);
        return (0, SD.g)(OB)
      }
      blockNameToBlockId(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (BB === RD.c) return 0;
        let GB = this.idOf(BB);
        if (void 0 === GB || !this.isBlockId(GB)) {
          const OB = BB.indexOf("|"),
            YB = OB > 0 ? (0, SD.c)(BB.slice(0, OB)) : void 0;
          GB = void 0 !== YB && this.isBlockId(YB) && (0, qY.rootMetaDescOf)(YB) === BB ? YB : void 0
        }
        if (void 0 !== GB) return GB;
        if (!OB) throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(BB) {
        return BB > 0 && BB < this.props.blockFlags.length
      }
      nameOfId(BB) {
        return 0 !== BB && (0, SD.g)(BB) || RD.c
      }
      itemType(BB) {
        const OB = BB ? this.idOf(BB) : void 0;
        if (!OB) return null;
        let GB = this.types.get(OB);
        return void 0 === GB && (GB = Object.freeze({
          id: OB,
          name: (0, SD.g)(OB),
          meta: this.getMetaInfo(OB),
          stackable: UD(this.props, OB),
          type: (0, qY.itemTypeNameOf)(OB),
          clipSize: (0, qY.clipSizeOf)(OB),
          scopeType: (0, qY.scopeTypeOf)(OB),
          showsAimingUi: (0, qY.showsAimingUi)(OB)
        }), this.types.set(OB, GB)), GB
      }
      getItemStat(BB, OB) {
        if (AD.d.has(OB)) {
          const GB = "minChargeStateToUse" === OB ? this.getMetaInfo(BB).rootName : this.getItemName(BB),
            YB = this.options.get((0, AD.f)(GB, OB));
          if (null !== YB && void 0 !== YB) return YB
        }
        return this.defaultStat(BB, OB, this.statOf(OB))
      }
      getDisplayName(BB) {
        return this.getItemStat(BB, "displayName")
      }
      getDefaultItemStat(BB, OB) {
        return this.defaultStat(BB, OB, this.statOf(OB))
      }
      statOf(BB) {
        const OB = kD[BB];
        return void 0 === OB && function(BB, OB) {
          throw new Error(`ClientApi.${BB} is not available yet in the wasm client (${OB})`)
        }(`getItemStat("${BB}")`, `a table of the stat: the wasm client answers ${Object.keys(kD).join(", ")}`), OB
      }
      defaultStat(BB, OB, GB) {
        const YB = this.idOf(BB),
          DB = void 0 === YB ? void 0 : GB(this.props, YB);
        return null !== DB && void 0 !== DB || "displayName" !== OB ? DB : this.getItemName(BB)
      }
      getClientOption(BB) {
        return this.options.get(BB)
      }
      getGunStats(BB) {
        return this.getClientOption(`${BB}GunStats`)
      }
      watchClientOption(BB, OB) {
        return this.options.subscribe(BB, OB)
      }
      isSolidBlockId(BB) {
        var OB;
        return 0 !== ((null !== (OB = this.props.blockFlags[BB]) && void 0 !== OB ? OB : 0) & pB.y.Solid)
      }
      isStackableId(BB) {
        return UD(this.props, BB)
      }
      isFluidBlockId(BB) {
        var OB;
        return 0 !== ((null !== (OB = this.props.blockFlags[BB]) && void 0 !== OB ? OB : 0) & pB.y.Fluid)
      }
      canPlaceOverBlockId(BB) {
        var OB;
        return 0 !== ((null !== (OB = this.props.blockFlags[BB]) && void 0 !== OB ? OB : 0) & pB.y.PlaceOver)
      }
      attachedTopOf(BB) {
        var OB;
        return null !== (OB = this.props.blockAttachedTops[BB]) && void 0 !== OB ? OB : 0
      }
      isDroplessBlockId(BB) {
        return (0, qY.dropsNothing)(BB)
      }
    }

    function ID(BB, OB) {
      const GB = new Map;
      return (YB, DB) => {
        const QB = OB.idOf(YB),
          oB = void 0 === QB ? null : (YB => {
            let DB = GB.get(YB);
            if (void 0 === DB) {
              const QB = BB.queries.salvageRecipe(YB),
                oB = new DataView(BB.memory().buffer, BB.scratch(), QB),
                jB = [];
              for (let BB = 0; BB + pB.Vd.BYTES <= QB; BB += pB.Vd.BYTES) jB.push(Object.freeze({
                item: OB.nameOfId(pB.Vd.item(oB, BB)),
                amt: pB.Vd.amount(oB, BB)
              }));
              DB = 0 === jB.length ? null : Object.freeze(jB), GB.set(YB, DB)
            }
            return DB
          })(QB);
        if (null === oB || void 0 === DB) return oB;
        const jB = DB <= 0 ? 1 : DB;
        return oB.map((BB => {
          let {
            item: OB,
            amt: GB
          } = BB;
          return {
            item: OB,
            amt: GB * jB
          }
        }))
      }
    }
    var FD = GB(41797),
      iD = GB(37655),
      LD = GB(37638),
      gD = GB(37641),
      rD = GB(37166),
      XD = GB(41688),
      wD = GB(53993);
    const ED = -1,
      cD = new Uint8Array(0),
      hD = new TextEncoder;

    function aD(BB) {
      if (null === BB) return null;
      const OB = hD.encode(BB);
      return OB.byteLength < zB.Rc ? OB : OB.subarray(0, zB.Rc - 1)
    }
    class eD {
      constructor(BB) {
        this.deps = BB, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ED, this.keyframesSettled = !1, this.reloadFrom = ED
      }
      reloadKeyframes() {
        var BB, OB;
        this.keyframesVersion = ED, this.reloadFrom = null !== (BB = null === (OB = this.view()) || void 0 === OB ? void 0 : OB.version) && void 0 !== BB ? BB : ED
      }
      setPlayback(BB) {
        const OB = 1 === this.deps.core.HQB(BB);
        return OB && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ED, this.reloadFrom = ED), OB
      }
      async open(BB, OB) {
        const GB = await this.deps.replay.open(BB, OB);
        return "opening" === GB && (this.reloadKeyframes(), this.deps.recorder.prefetch()), GB
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(BB)), OB)
      }
      setSpeed(BB) {
        this.deps.replay.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.replay.setCameraMode(wD.b.indexOf(BB))
      }
      view() {
        var BB;
        const OB = pB.u.replayViewPtr(this.deps.apiView(), 0);
        if (0 === OB) return this.lastView = null, null;
        const GB = new DataView(this.deps.buffer(), OB, pB.Qd.BYTES),
          YB = pB.Qd.version(GB, 0),
          DB = this.lastView;
        if (null !== DB && DB.version === YB) return DB;
        const QB = pB.Qd.markIn(GB, 0),
          oB = {
            version: YB,
            state: pB.Qd.state(GB, 0),
            cameraMode: null !== (BB = wD.b[pB.Qd.cameraMode(GB, 0)]) && void 0 !== BB ? BB : "recording",
            kP: pB.Qd.kP(GB, 0),
            totalTicks: pB.Qd.totalTicks(GB, 0),
            speed: pB.Qd.speed(GB, 0),
            mark: QB === pB.Nd ? null : {
              inTick: QB,
              outTick: pB.Qd.markOut(GB, 0)
            },
            editVersion: pB.Qd.editVersion(GB, 0)
          };
        return this.lastView = oB, oB
      }
      keyframes() {
        const BB = this.view();
        if (null === BB) return [];
        BB.version !== this.reloadFrom && (this.reloadFrom = ED);
        const OB = this.reloadFrom === ED && BB.state !== zB.sd.Cropping && BB.state !== zB.sd.None,
          GB = OB ? BB.editVersion : BB.version;
        if (GB === this.keyframesVersion && OB === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: YB
        } = this.deps, DB = YB.vQB(), QB = YB.eZ(), oB = [];
        if (0 !== QB && DB > 0) {
          const BB = new DataView(this.deps.buffer(), QB, DB * zB.Ec);
          for (let OB = 0; OB < DB; OB++) {
            const GB = OB * zB.Ec,
              YB = OB => BB.getFloat64(GB + OB, !0);
            oB.push({
              kP: BB.getUint32(GB + zB.Pc, !0),
              position: [YB(zB.Nc), YB(zB.Nc + 8), YB(zB.Nc + 16)],
              direction: [YB(zB.Gc), YB(zB.Gc + 8), YB(zB.Gc + 16)],
              easing: [YB(zB.Kc), YB(zB.Kc + 8), YB(zB.Kc + 16), YB(zB.Kc + 24)]
            })
          }
        }
        return this.keyframesVersion = GB, this.keyframesSettled = OB, this.lastKeyframes = oB, oB
      }
      addKeyframe() {
        const BB = this.deps.apiView(),
          OB = [pB.u.eye(BB, 0, 0), pB.u.eye(BB, 0, 1), pB.u.eye(BB, 0, 2)];
        return this.deps.replay.addKeyframe(OB, function(BB, OB) {
          const GB = Math.cos(OB);
          return [GB * Math.sin(BB), -Math.sin(OB), GB * Math.cos(BB)]
        }(pB.u.heading(BB, 0), pB.u.pitch(BB, 0)))
      }
      setKeyframe(BB) {
        return this.deps.replay.setKeyframe(BB.kP, Float64Array.from([...BB.position, ...BB.direction, ...BB.easing]))
      }
      moveKeyframe(BB, OB) {
        return this.deps.replay.moveKeyframe(BB, OB)
      }
      deleteKeyframes(BB, OB) {
        return this.deps.replay.deleteKeyframes(BB, OB)
      }
      setMark(BB) {
        var OB, GB;
        return this.deps.replay.setMark(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.inTick) && void 0 !== OB ? OB : -1, null !== (GB = null === BB || void 0 === BB ? void 0 : BB.outTick) && void 0 !== GB ? GB : -1)
      }
      crop(BB, OB) {
        const GB = this.deps.replay.crop(BB, OB);
        return GB && this.reloadKeyframes(), GB
      }
      save(BB) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(BB)
      }
      recorderControl(BB) {
        this.deps.recorder.control(BB)
      }
      recorderPrefs(BB, OB) {
        this.deps.recorder.prefs(BB, OB)
      }
      recorderOption(BB, OB) {
        const GB = this.deps.cmd();
        return null !== GB && (0, pB.Df)(GB, 0, BB, null === OB ? cD : hD.encode(OB))
      }
      recordFlyingText(BB, OB, GB, YB) {
        const DB = this.deps.cmd(),
          QB = Math.max(0, Math.min(4294967295, Math.round(YB)));
        return null !== DB && (0, pB.wf)(DB, 0, OB, GB, QB, hD.encode(BB))
      }
      recordPlayerKilled(BB, OB, GB, YB) {
        const DB = this.deps.cmd();
        return null !== DB && (0, pB.Hf)(DB, 0, BB, OB, Math.max(0, GB), hD.encode(YB))
      }
      recordKillfeed(BB, OB, GB) {
        var YB, DB;
        const QB = this.deps.cmd(),
          oB = function(BB) {
            const OB = BB.reduce(((BB, OB) => {
                var GB;
                return BB + oY.Eb + (null !== (GB = null === OB || void 0 === OB ? void 0 : OB.byteLength) && void 0 !== GB ? GB : 0)
              }), 0),
              GB = new Uint8Array(OB),
              YB = new DataView(GB.buffer);
            let DB = 0;
            for (const oB of BB) {
              var QB;
              YB.setUint16(DB, null !== (QB = null === oB || void 0 === oB ? void 0 : oB.byteLength) && void 0 !== QB ? QB : zB.Rc, !0), DB += oY.Eb, null !== oB && (GB.set(oB, DB), DB += oB.byteLength)
            }
            return GB
          }([aD(BB.name), aD(BB.colour), aD(OB.name), aD(OB.colour), aD(GB)]);
        return null !== QB && (0, pB.zf)(QB, 0, null !== (YB = BB.id) && void 0 !== YB ? YB : pB.cd, null !== (DB = OB.id) && void 0 !== DB ? DB : pB.cd, oB)
      }
      recorderSession(BB, OB) {
        this.deps.recorder.session({
          session: OB,
          lobbyType: BB.lobbyType,
          game: BB.gameNameWithVariation,
          lobby: BB.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.sQB()
      }
      filePartDone(BB, OB) {
        this.deps.recorder.filePartDone(BB, OB)
      }
      fileDone(BB) {
        this.deps.recorder.fileDone(BB)
      }
    }
    const TD = -2147483648;
    class bD {
      constructor(BB) {
        var OB;
        this.deps = BB, this.state = pY.e, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (OB = BB.now) && void 0 !== OB ? OB : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var BB, OB, GB;
        return null === (BB = null === (OB = (GB = this.deps).live) || void 0 === OB ? void 0 : OB.call(GB)) || void 0 === BB || BB
      }
      activated(BB) {
        var OB, GB;
        this.live && (this.viewerShown(!0 === (null === (OB = (GB = this.deps).viewerOpen) || void 0 === OB ? void 0 : OB.call(GB))), this.deps.client.recorderSession(BB, (0, wD.d)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var BB, OB;
        this.live && (this.state.recording || !0 !== (null === (BB = (OB = this.deps).viewerOpen) || void 0 === BB ? void 0 : BB.call(OB))) ? this.deps.client.recorderControl(zB.ad.ToggleRecording) : this.deps.notify(gD.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(zB.ad.SaveClip) : this.deps.notify(gD.e.clippingNotOn)
      }
      viewerShown(BB) {
        this.live && this.deps.client.recorderControl(BB ? zB.ad.ViewerOpened : zB.ad.ViewerClosed)
      }
      setPrefs(BB, OB) {
        this.live && this.deps.client.recorderPrefs(BB, OB)
      }
      setOption(BB, OB) {
        this.live && this.deps.client.recorderOption(BB, OB)
      }
      recordFlyingText(BB, OB, GB, YB) {
        this.live && this.deps.client.recordFlyingText(BB, OB, GB, YB)
      }
      recordPlayerKilled(BB, OB, GB, YB) {
        this.live && this.deps.client.recordPlayerKilled(BB, OB, GB, YB)
      }
      recordKillfeed(BB, OB, GB) {
        this.live && this.deps.client.recordKillfeed(BB, OB, GB)
      }
      kP() {
        let BB = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, BB = {
            ...BB,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const OB = Math.floor((this.now() - this.recordingSince) / 1e3);
          OB !== BB.seconds && (BB = {
            ...BB,
            seconds: OB
          })
        }
        this.set(BB)
      }
      onEvent(BB) {
        var OB, GB;
        const {
          notify: YB
        } = this.deps, DB = gD.e;
        switch (BB.what) {
          case zB.Zc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), YB(DB.recordingStarted);
            break;
          case zB.Zc.RecordingStopped:
            this.stopRecording(), YB(DB.recordingStopped), this.saveState(zB.ld.Recording, "saving");
            break;
          case zB.Zc.RecordingDiscarded:
            this.stopRecording(), YB(DB.recordingDiscarded);
            break;
          case zB.Zc.RecordingTurnedOff:
            this.stopRecording(), YB(DB.recordingTurnedOff);
            break;
          case zB.Zc.LimitReached:
            YB(DB.limitReached);
            break;
          case zB.Zc.ClipSaved:
            this.saveState(zB.ld.Clip, "saving");
            break;
          case zB.Zc.ClipEmpty:
            YB(DB.clipEmpty);
            break;
          case zB.Zc.ClippingNotOn:
            YB(DB.clippingNotOn);
            break;
          case zB.Zc.Disallowed:
            YB(DB.disallowed);
            break;
          case zB.Zc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case zB.Zc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case zB.Zc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case zB.Zc.SaveBusy:
            null === (OB = (GB = this.deps).onSaveState) || void 0 === OB || OB.call(GB, BB.kind, "busy"), YB(DB.saveBusy);
            break;
          case zB.Zc.CloseViewerFirst:
            YB(DB.closeViewerFirst)
        }
      }
      fileReady(BB, OB) {
        this.deps.download(OB), this.saveState(BB, "done"), this.deps.notify(BB === zB.ld.Clip ? gD.e.clipSaved : gD.e.recordingSaved)
      }
      failed(BB) {
        this.saveState(BB, "failed"), this.deps.notify(BB === zB.ld.Clip ? gD.e.clipFailed : gD.e.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(pY.e)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(BB, OB) {
        var GB, YB;
        null === (GB = (YB = this.deps).onSaveState) || void 0 === GB || GB.call(YB, BB, OB)
      }
      set(BB) {
        BB !== this.state && (this.state = BB, this.deps.onState(BB))
      }
    }
    const CD = new TextDecoder;

    function HD(BB, OB, GB, YB) {
      const DB = [];
      for (let QB = 0; QB < YB; QB++) {
        if (OB + oY.Eb > GB) return null;
        const YB = BB.getUint16(OB, !0);
        if (OB += oY.Eb, YB !== zB.Rc) {
          if (OB + YB > GB) return null;
          DB.push(CD.decode(new Uint8Array(BB.buffer, BB.byteOffset + OB, YB))), OB += YB
        } else DB.push(null)
      }
      return OB === GB ? DB : null
    }

    function vD(BB, OB) {
      let GB = new DataView(new ArrayBuffer(0)),
        YB = !0;
      const DB = {
        replayFailed: (OB, GB, YB) => {
          BB.replayFailed({
            reason: OB,
            code: GB,
            version: YB
          })
        },
        replayOption: (OB, DB, QB, oB) => {
          const jB = function(BB, OB, GB, YB) {
            switch (OB) {
              case zB.od.Cleared:
                return 0 === YB ? null : void 0;
              case zB.od.Text:
                return CD.decode(new Uint8Array(BB.buffer, BB.byteOffset + GB, YB));
              case zB.od.Int:
                return YB === Int32Array.BYTES_PER_ELEMENT ? BB.getInt32(GB, !0) : void 0;
              case zB.od.Double:
                return YB === Float64Array.BYTES_PER_ELEMENT ? BB.getFloat64(GB, !0) : void 0;
              default:
                return
            }
          }(GB, DB, QB, oB);
          void 0 !== jB ? BB.replayOption({
            key: OB,
            value: jB
          }) : YB = !1
        },
        replayUiEvent: (OB, DB, QB, oB, jB, yB) => {
          const JB = function(BB, OB, GB, YB, DB, QB, oB) {
            const jB = QB + oB;
            switch (OB) {
              case zB.qd.FlyingText: {
                const oB = HD(BB, QB, jB, 1);
                return null !== oB && null !== oB[0] ? {
                  what: OB,
                  SB: GB,
                  VB: YB,
                  angle: DB,
                  contentJson: oB[0]
                } : null
              }
              case zB.qd.PlayerKilled: {
                const YB = HD(BB, QB, jB, 3);
                return YB ? {
                  what: OB,
                  killstreak: GB,
                  dead: YB[0],
                  killer: YB[1],
                  withItem: YB[2]
                } : null
              }
              case zB.qd.Killfeed: {
                const GB = HD(BB, QB, jB, 7);
                return GB ? {
                  what: OB,
                  killerId: GB[0],
                  killerName: GB[1],
                  killerColour: GB[2],
                  victimId: GB[3],
                  victimName: GB[4],
                  victimColour: GB[5],
                  withItem: GB[6]
                } : null
              }
              default:
                return null
            }
          }(GB, OB, DB, QB, oB, jB, yB);
          null !== JB ? BB.replayUiEvent(JB) : YB = !1
        },
        replayFilePart: (GB, DB, QB, oB) => {
          const jB = OB();
          QB + oB > jB.byteLength ? YB = !1 : BB.filePart(GB, DB, new Uint8Array(jB, QB, oB).slice())
        },
        replayFileReady: (OB, GB, YB, DB) => {
          BB.fileReady({
            save: OB,
            kind: GB,
            parts: YB,
            bytes: DB
          })
        },
        recorderEvent: (OB, GB, YB) => {
          BB.recorderEvent({
            what: OB,
            kind: GB,
            save: YB
          })
        },
        replayOpened: (OB, YB, DB) => {
          BB.replayOpened(CD.decode(new Uint8Array(GB.buffer, GB.byteOffset + YB, DB)))
        }
      };
      return (BB, OB, QB, oB) => !(BB < zB.Y.ReplayFailed || BB > zB.Y.RecorderEvent) && (GB = OB, YB = !0, (0, pB.ne)(BB, OB, QB, oB, DB) && YB)
    }

    function sD(BB) {
      let OB = null;
      const GB = vD(BB, (() => {
        if (null === OB) throw new Error("a recorder event read outside recorderEventReader's call");
        return OB.buffer
      }));
      return (BB, YB) => {
        OB = YB;
        try {
          ! function(BB, OB) {
            const GB = BB.slice(),
              YB = new DataView(GB.buffer);
            for (let DB = 0; DB < GB.byteLength;) {
              if (DB + zB.V > GB.byteLength) throw new Error(`the recorder module's events end mid-head at ${DB}`);
              const BB = YB.getUint32(DB, !0),
                QB = 65535 & BB,
                oB = BB >>> 16,
                jB = DB + zB.V;
              if (jB + oB > GB.byteLength || !OB(QB, YB, jB, oB)) throw new Error(`the recorder module wrote a malformed event ${QB} (${oB} bytes) at ${DB}`);
              DB = jB + (0, zB.qe)(oB)
            }
          }(BB, GB)
        } finally {
          OB = null
        }
      }
    }
    class xD {
      constructor(BB, OB) {
        this.acks = BB, this.handlers = OB, this.parts = new Map
      }
      onPart(BB, OB, GB) {
        let YB = this.parts.get(BB);
        YB || (YB = [], this.parts.set(BB, YB)), YB[OB] = GB, this.acks.filePartDone(BB, OB)
      }
      onReady(BB) {
        var OB;
        const GB = null !== (OB = this.parts.get(BB.save)) && void 0 !== OB ? OB : [];
        this.parts.delete(BB.save);
        const YB = function(BB, OB, GB) {
          if (BB.length !== OB) return null;
          let YB = 0;
          for (let oB = 0; oB < OB; oB++) {
            if (void 0 === BB[oB]) return null;
            YB += BB[oB].byteLength
          }
          if (YB !== GB) return null;
          if (1 === OB) return BB[0];
          const DB = new Uint8Array(GB);
          let QB = 0;
          for (const oB of BB) DB.set(oB, QB), QB += oB.byteLength;
          return DB
        }(GB, BB.parts, BB.bytes);
        this.acks.fileDone(BB.save), null === YB ? this.handlers.fileIncomplete(BB.save, BB.kind) : this.handlers.fileReady(BB.save, BB.kind, YB)
      }
      onDiscarded(BB) {
        this.parts.delete(BB)
      }
    }

    function tD() {
      return GB.e(72).then((() => GB(63857)))
    }
    class BQ {
      constructor(BB) {
        this.deps = BB, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: OB
        } = BB;
        this.recorder = new bD({
          client: OB,
          live: () => {
            var BB;
            return !0 !== (null === (BB = this.viewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          viewerOpen: BB.viewerOpen,
          notify: BB.notify,
          download: OB => {
            var GB;
            null === (GB = BB.download) || void 0 === GB || GB.call(BB, OB)
          },
          onState: BB.onRecorderState,
          onSaveState: BB.onSaveState
        }), this.parts = new xD(OB, {
          fileReady: (BB, OB, GB) => {
            var YB;
            OB === zB.ld.Edited ? null === (YB = this.viewer) || void 0 === YB || YB.saveDone(GB) : this.recorder.fileReady(OB, GB)
          },
          fileIncomplete: (BB, OB) => {
            this.saveFailed(OB)
          }
        });
        const GB = {
          replayFailed: BB => {
            var OB;
            null === (OB = this.viewer) || void 0 === OB || OB.onFailed(BB)
          },
          replayOption: OB => {
            var GB;
            null === (GB = BB.onReplayOption) || void 0 === GB || GB.call(BB, OB)
          },
          replayUiEvent: OB => {
            var GB;
            null === (GB = BB.onReplayUiEvent) || void 0 === GB || GB.call(BB, OB)
          },
          filePart: (BB, OB, GB) => {
            this.parts.onPart(BB, OB, GB)
          },
          fileReady: BB => {
            this.parts.onReady(BB)
          },
          replayOpened: OB => {
            var GB;
            null === (GB = BB.onReplayOpened) || void 0 === GB || GB.call(BB, OB)
          },
          recorderEvent: BB => {
            var OB;
            switch (BB.what) {
              case zB.Zc.FileDiscarded:
                this.parts.onDiscarded(BB.save);
                break;
              case zB.Zc.SaveFailed:
                this.saveFailed(BB.kind);
                break;
              case zB.Zc.SaveBusy:
                if (null !== (OB = this.viewer) && void 0 !== OB && OB.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(BB);
                break;
              default:
                this.recorder.onEvent(BB)
            }
          }
        };
        this.sink = function(BB, OB) {
          return {
            onReplayEvent: vD(BB, OB)
          }
        }(GB, BB.buffer), this.recorderEvents = sD(GB)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var BB;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (BB = this.deps.loadViewer) && void 0 !== BB ? BB : tD)().catch((BB => {
          throw this.viewerChunk = null, BB
        })), this.viewerChunk.then((BB => (this.viewer ??= new BB.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var BB, OB;
            null === (BB = (OB = this.deps).onViewerChange) || void 0 === BB || BB.call(OB)
          }
        }), this.viewer))))
      }
      activated(BB) {
        this.recorder.activated(BB)
      }
      afterFrame(BB) {
        try {
          BB > 0 && this.recorder.kP()
        } finally {
          var OB;
          null === (OB = this.viewer) || void 0 === OB || OB.afterFrame()
        }
      }
      end() {
        var BB;
        null === (BB = this.viewer) || void 0 === BB || BB.end()
      }
      saveFailed(BB) {
        var OB;
        BB === zB.ld.Edited ? null === (OB = this.viewer) || void 0 === OB || OB.saveFailed(!1) : this.recorder.failed(BB)
      }
    }
    var OQ = GB(41624),
      GQ = GB(41637),
      YQ = GB(5296),
      DQ = GB(41933);
    class QQ {
      constructor(BB) {
        this.deps = BB, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(BB, OB) {
        if (!this.deps.live() || 0 === BB && 0 === OB) return;
        const GB = (0, EB.m)(0, performance.now()),
          YB = this.deps.dragScale();
        (0, DQ.i)((() => {
          (0, EB.r)(zB.ub.MouseDown, 0, 0, 0, GB), (0, EB.r)(zB.ub.MouseMove, 0, BB * YB, OB * YB, 0), (0, EB.r)(zB.ub.MouseUp, 0, 0, 0, GB)
        }))
      }
      move(BB) {
        var OB, GB;
        this.analogue[0] = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.x) && void 0 !== OB ? OB : 0, this.analogue[1] = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.y) && void 0 !== GB ? GB : 0, this.send()
      }
      holdVertical(BB, OB) {
        const GB = "freeCamUp" === BB ? pB._b.Up : pB._b.Down;
        this.keys = OB ? this.keys | GB : this.keys & ~GB, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const BB = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== BB && !(0, pB.De)(BB, 0, this.analogue, this.keys)
      }
    }
    var oQ = GB(4004),
      jQ = GB(756),
      yQ = GB(271),
      JQ = GB(92),
      MQ = GB(34722),
      PQ = GB(747),
      zQ = GB(37254);

    function lQ() {
      const BB = YB.c.get("clientEscMenuOptions"),
        OB = (0, jQ.q)(BB);
      return {
        mouse: (0, JQ.isMobile)() ? OB : BB.mouseSensitivity,
        touch: OB,
        fovPercent: BB.cameraFOV
      }
    }

    function pQ() {
      const BB = YB.c.get("clientEscMenuOptions"),
        OB = YB.c.get("isTouchScreen") ? (0, jQ.q)(BB) : BB.mouseSensitivity,
        GB = lQ().mouse;
      return GB > 0 ? OB / GB : 1
    }

    function qQ(BB) {
      const OB = () => {
        BB.setSoundPrefs(YB.c.get("soundVolume"), YB.c.get("soundOnFromAd"))
      };
      let GB = null;
      const DB = () => {
        const {
          showFog: OB,
          enableLighting: DB,
          fogChunkDistance: QB,
          chunkFadeIn: oB
        } = YB.c.get("clientEscMenuOptions"), jB = {
          showFog: OB,
          lighting: DB,
          fogChunks: QB,
          chunkFade: oB,
          cellLight: (0, oQ.k)("cellLight") ? (0, oQ.k)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        GB && (0, zB.be)(GB) === (0, zB.be)(jB) && GB.fogChunks === QB || (GB = jB, BB.setEnvPrefs(GB))
      };
      let QB = null;
      const jB = () => {
        const OB = function() {
          const BB = YB.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: YB.c.get("areNametagsHidden"),
            crouchToggle: BB.crouchIsToggle,
            bhopDisabled: BB.disableBunnyHopping,
            disableBobbing: BB.disableBobbing,
            ezTowering: BB.ezTowering ? (0, yQ.c)() : null,
            ezBridging: BB.ezBridging,
            showChunkBorders: BB.showChunkBorders,
            touchWalk: !(0, zQ.i)(),
            edgeGuard: BB.touchEdgeGuard,
            edgeGuardLong: (0, PQ.c)(),
            nametagCutDistance: (0, MQ.e)()
          }
        }();
        (0, dB.Fe)(QB, OB) || (QB = OB, BB.setUiPrefs(OB))
      };
      let yB = null;
      const JB = () => {
        const OB = lQ();
        (0, dB.Fe)(yB, OB) || (yB = OB, BB.setLookPrefs(OB))
      };
      OB(), DB(), jB(), JB();
      const MB = [(0, oB.p)("appManagerUpdated|soundVolume", OB), (0, oB.p)("appManagerUpdated|soundOnFromAd", OB), (0, oB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
        DB(), jB(), JB()
      })), (0, oB.p)(zQ.e, jB), (0, oB.p)("appManagerUpdated|enabledDebugFeatures", DB), (0, oB.p)("appManagerUpdated|areNametagsHidden", jB), (0, oB.p)("appManagerUpdated|showDistantNametags", jB)];
      return () => {
        for (const BB of MB) BB()
      }
    }
    var ZQ = GB(41911),
      NQ = GB(41913);
    var RQ = (0, NQ.c)("lend"),
      WQ = (0, NQ.c)("starting"),
      AQ = (0, NQ.c)("generation"),
      VQ = (0, NQ.c)("end");
    class SQ {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, VQ, {
          value: nQ
        }), Object.defineProperty(this, RQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, WQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, AQ, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, ZQ.e)(this, RQ)[RQ] || (0, ZQ.e)(this, WQ)[WQ]
      }
      async start(BB) {
        if (this.active) return "busy";
        const OB = (0, ZQ.e)(this, AQ)[AQ];
        (0, ZQ.e)(this, WQ)[WQ] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, ZQ.e)(this, WQ)[WQ] = !1
        }
        if (OB !== (0, ZQ.e)(this, AQ)[AQ]) return "refused";
        const GB = this.deps.beginSave();
        if (!GB) return "refused";
        const YB = Number(BigInt.asUintN(32, BB)),
          DB = Number(BigInt.asUintN(32, BB >> 32n));
        let QB = "refused";
        return this.deps.recorderCall(((BB, OB) => {
          const oB = GB.editState,
            jB = BB.stage(oB.length);
          0 !== jB ? (new Uint8Array(OB.buffer, jB, oB.length).set(oB), BB.xQB(GB.headLen, YB, DB) && (QB = "sealing")) : QB = "tooLarge"
        }), !0), "sealing" !== QB ? (GB.end(), QB) : ((0, ZQ.e)(this, RQ)[RQ] = GB, "sealing")
      }
      beforeRecorderStep() {
        const BB = (0, ZQ.e)(this, RQ)[RQ];
        if (!BB) return null;
        let OB = -1,
          GB = 0;
        if (!this.deps.recorderCall((BB => {
            OB = BB.tQB(), OB > 0 && (GB = BB.BoB())
          }))) return (0, ZQ.e)(this, VQ)[VQ](BB, "stopped");
        if (OB < 0) return (0, ZQ.e)(this, VQ)[VQ](BB, "read");
        if (0 === OB) return null;
        const YB = BB.head(GB, OB);
        let DB = !1;
        if (YB && this.deps.recorderCall(((BB, GB) => {
            const QB = BB.stage(OB);
            0 !== QB && (new Uint8Array(GB.buffer, QB, OB).set(YB), DB = !0)
          }), !0), DB) return null;
        const QB = BB.givenUp();
        this.deps.recorderCall((BB => {
          BB.OoB()
        }));
        const oB = (0, ZQ.e)(this, VQ)[VQ](BB, QB ? "givenUp" : "stopped");
        return QB && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), oB
      }
      stop() {
        (0, ZQ.e)(this, AQ)[AQ]++;
        const BB = (0, ZQ.e)(this, RQ)[RQ];
        BB && (this.deps.recorderCall((BB => {
          BB.OoB()
        })), (0, ZQ.e)(this, VQ)[VQ](BB, "stopped"))
      }
    }

    function nQ(BB, OB) {
      return (0, ZQ.e)(this, RQ)[RQ] = null, BB.end(), OB
    }

    function UQ(BB, OB) {
      const GB = new Uint8Array(4),
        YB = new DataView(GB.buffer);
      return YB.setUint8(0, BB ? 1 : 0), YB.setUint16(2, Math.max(0, Math.min(65535, Math.round(OB))), !0), GB
    }

    function fQ(BB, OB) {
      return BB > function(BB) {
        return 16777216 + 314572.8 * Math.max(0, BB)
      }(OB) + 33554432
    }
    let kQ = null;

    function dQ(BB) {
      return kQ ??= async function(BB) {
        const OB = BB.loadInFlight();
        OB && await OB.catch((() => {}));
        if (BB.trapped()) return "trapped";
        if (BB.busy() || !fQ(BB.memoryBytes(), BB.clipSeconds())) return "GP";
        BB.unload();
        let GB = !1;
        try {
          GB = await BB.load()
        } catch {
          GB = !1
        }
        if (!GB) return BB.trapped() ? "trapped" : BB.Vp() ? "Vp" : "failed";
        return "recycled"
      }(BB).finally((() => {
        kQ = null
      })), kQ
    }
    const KQ = "Replay recording couldn't load, so try again.",
      uQ = "Replay recording stopped working, so reload the page to record replays again.",
      mQ = new Set([zB.ad.ToggleRecording, zB.ad.SaveClip]);
    var IQ = (0, NQ.c)("bindings"),
      FQ = (0, NQ.c)("module"),
      iQ = (0, NQ.c)("memory"),
      LQ = (0, NQ.c)("trapped"),
      gQ = (0, NQ.c)("Vp"),
      rQ = (0, NQ.c)("recycleDue"),
      XQ = (0, NQ.c)("loading"),
      wQ = (0, NQ.c)("generation"),
      EQ = (0, NQ.c)("viewDrawn"),
      cQ = (0, NQ.c)("clip"),
      hQ = (0, NQ.c)("session"),
      aQ = (0, NQ.c)("control"),
      eQ = (0, NQ.c)("deferred"),
      TQ = (0, NQ.c)("coreU8"),
      bQ = (0, NQ.c)("coreU32"),
      CQ = (0, NQ.c)("moduleU8"),
      HQ = (0, NQ.c)("edited"),
      vQ = (0, NQ.c)("sendSession"),
      sQ = (0, NQ.c)("checkNotInEvents"),
      xQ = (0, NQ.c)("clipping"),
      tQ = (0, NQ.c)("busy"),
      Bo = (0, NQ.c)("use"),
      Oo = (0, NQ.c)("ensureLoaded"),
      Go = (0, NQ.c)("loadOnce"),
      Yo = (0, NQ.c)("recycleAfterStep"),
      Do = (0, NQ.c)("settleRecycle"),
      Qo = (0, NQ.c)("load"),
      oo = (0, NQ.c)("attach"),
      jo = (0, NQ.c)("resendHeld"),
      yo = (0, NQ.c)("recycle"),
      Jo = (0, NQ.c)("send"),
      Mo = (0, NQ.c)("unload"),
      Po = (0, NQ.c)("dropModule"),
      zo = (0, NQ.c)("coreBytes"),
      po = (0, NQ.c)("coreWords"),
      qo = (0, NQ.c)("moduleBytes"),
      Zo = (0, NQ.c)("loadFailed"),
      No = (0, NQ.c)("call"),
      Ro = (0, NQ.c)("guard"),
      Wo = (0, NQ.c)("trapOn");
    class Ao {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, Wo, {
          value: To
        }), Object.defineProperty(this, Ro, {
          value: eo
        }), Object.defineProperty(this, No, {
          value: ao
        }), Object.defineProperty(this, Zo, {
          value: ho
        }), Object.defineProperty(this, qo, {
          value: co
        }), Object.defineProperty(this, po, {
          value: Eo
        }), Object.defineProperty(this, zo, {
          value: wo
        }), Object.defineProperty(this, Po, {
          value: Xo
        }), Object.defineProperty(this, Mo, {
          value: ro
        }), Object.defineProperty(this, Jo, {
          value: go
        }), Object.defineProperty(this, yo, {
          value: Lo
        }), Object.defineProperty(this, jo, {
          value: io
        }), Object.defineProperty(this, oo, {
          value: Fo
        }), Object.defineProperty(this, Qo, {
          value: Io
        }), Object.defineProperty(this, Do, {
          value: mo
        }), Object.defineProperty(this, Yo, {
          value: uo
        }), Object.defineProperty(this, Go, {
          value: Ko
        }), Object.defineProperty(this, Oo, {
          value: ko
        }), Object.defineProperty(this, Bo, {
          value: fo
        }), Object.defineProperty(this, tQ, {
          value: Uo
        }), Object.defineProperty(this, xQ, {
          value: no
        }), Object.defineProperty(this, sQ, {
          value: So
        }), Object.defineProperty(this, vQ, {
          value: Vo
        }), Object.defineProperty(this, IQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, FQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, LQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, gQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, rQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wQ, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, EQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, cQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HQ, {
          writable: !0,
          value: void 0
        }), (0, ZQ.e)(this, HQ)[HQ] = new SQ({
          ensureLoaded: () => (0, ZQ.e)(this, Oo)[Oo](),
          recorderCall: (BB, OB) => {
            OB && (0, ZQ.e)(this, sQ)[sQ]("an edited save's stage");
            const GB = (0, ZQ.e)(this, No)[No](((OB, GB) => (BB(OB, GB), !0)));
            return null !== GB && void 0 !== GB && GB
          },
          beginSave: BB.beginSave,
          givenUp: BB.givenUp
        })
      }
      get active() {
        return null !== (0, ZQ.e)(this, FQ)[FQ]
      }
      get trapped() {
        return (0, ZQ.e)(this, LQ)[LQ]
      }
      get loading() {
        return null !== (0, ZQ.e)(this, XQ)[XQ]
      }
      prefetch() {
        (0, ZQ.e)(this, gQ)[gQ] || (0, ZQ.e)(this, LQ)[LQ] || (0, ZQ.e)(this, FQ)[FQ] || (0, ZQ.e)(this, XQ)[XQ] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, ZQ.e)(this, EQ)[EQ] = !0, (0, ZQ.e)(this, xQ)[xQ]() && (0, ZQ.e)(this, Bo)[Bo]()
      }
      prefs(BB, OB) {
        (0, ZQ.e)(this, cQ)[cQ] = {
          on: BB,
          seconds: OB
        }, (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Prefs, UQ(BB, OB)), BB && (0, ZQ.e)(this, EQ)[EQ] && (0, ZQ.e)(this, Bo)[Bo]()
      }
      control(BB) {
        const OB = function(BB) {
          return new Uint8Array([BB, 0, 0, 0])
        }(BB);
        if (mQ.has(BB)) {
          if (!(0, ZQ.e)(this, LQ)[LQ]) return (0, ZQ.e)(this, FQ)[FQ] ? void(0, ZQ.e)(this, Jo)[Jo](zB.Xc.Control, OB) : ((0, ZQ.e)(this, aQ)[aQ] = OB, void(0, ZQ.e)(this, Bo)[Bo]());
          this.deps.failed(uQ)
        } else(0, ZQ.e)(this, gQ)[gQ] || this.deps.coreCommand(zB.Xc.Control, OB)
      }
      session(BB) {
        (0, ZQ.e)(this, hQ)[hQ] = BB, (0, ZQ.e)(this, vQ)[vQ](BB)
      }
      filePartDone(BB, OB) {
        (0, ZQ.e)(this, Jo)[Jo](zB.Xc.FilePartDone, function(BB, OB) {
          const GB = new Uint8Array(8),
            YB = new DataView(GB.buffer);
          return YB.setUint32(0, BB, !0), YB.setUint32(4, OB, !0), GB
        }(BB, OB))
      }
      fileDone(BB) {
        return (0, ZQ.e)(this, Jo)[Jo](zB.Xc.FileDone, function(BB) {
          const OB = new Uint8Array(4);
          return new DataView(OB.buffer).setUint32(0, BB, !0), OB
        }(BB)), (0, ZQ.e)(this, Yo)[Yo]()
      }
      saveEdited(BB) {
        return (0, ZQ.e)(this, sQ)[sQ]("saveEdited"), (0, ZQ.e)(this, HQ)[HQ].start(BB)
      }
      afterFrame() {
        if (!(0, ZQ.e)(this, FQ)[FQ]) return;
        "read" === (0, ZQ.e)(this, HQ)[HQ].beforeRecorderStep() && (0, ZQ.e)(this, Yo)[Yo]();
        const BB = (0, ZQ.e)(this, rQ)[rQ];
        (0, ZQ.e)(this, rQ)[rQ] = null;
        const OB = (0, ZQ.e)(this, FQ)[FQ],
          GB = (0, ZQ.e)(this, iQ)[iQ];
        if (!OB || !GB) return void(null === BB || void 0 === BB || BB.resolve((0, ZQ.e)(this, LQ)[LQ] ? "trapped" : "GP"));
        const {
          core: YB
        } = this.deps, DB = YB.DoB(2);
        let QB, oB, jB, yB, JB = 0,
          MB = 0;
        if (0 !== DB) {
          var PB, zB;
          const BB = (0, ZQ.e)(this, po)[po]();
          JB = null !== (PB = BB[DB >>> 2]) && void 0 !== PB ? PB : 0, MB = null !== (zB = BB[1 + (DB >>> 2)]) && void 0 !== zB ? zB : 0
        }
        try {
          if (MB > 0) {
            const BB = OB.feed(MB);
            0 !== BB && (0, ZQ.e)(this, qo)[qo](GB).set((0, ZQ.e)(this, zo)[zo]().subarray(JB, JB + MB), BB)
          }
          QB = OB.step(), oB = OB.QoB(), jB = OB.ooB(), yB = OB.joB()
        } catch (lB) {
          if (!(0, ZQ.e)(this, Wo)[Wo](lB)) throw null === BB || void 0 === BB || BB.resolve("GP"), lB;
          return void(null === BB || void 0 === BB || BB.resolve("trapped"))
        }
        if (QB > 0) {
          const BB = YB.yoB(2, QB);
          0 !== BB && (0, ZQ.e)(this, zo)[zo]().set((0, ZQ.e)(this, qo)[qo](GB).subarray(oB, oB + QB), BB)
        }
        if (jB > 0) {
          (0, ZQ.e)(this, eQ)[eQ] = [];
          try {
            this.deps.events(new Uint8Array(GB.buffer, yB, jB), GB)
          } catch (lB) {
            throw null === BB || void 0 === BB || BB.resolve("GP"), lB
          } finally {
            const BB = (0, ZQ.e)(this, eQ)[eQ];
            (0, ZQ.e)(this, eQ)[eQ] = null;
            for (const [OB, GB] of BB)(0, ZQ.e)(this, Jo)[Jo](OB, GB)
          }
        }
        if (!(0, ZQ.e)(this, xQ)[xQ]() && !(0, ZQ.e)(this, tQ)[tQ]()) return (0, ZQ.e)(this, Mo)[Mo](), void(null === BB || void 0 === BB || BB.resolve("GP"));
        null === BB || void 0 === BB || BB.resolve((0, ZQ.e)(this, yo)[yo]())
      }
      dispose() {
        (0, ZQ.e)(this, gQ)[gQ] = !0, (0, ZQ.e)(this, Mo)[Mo]()
      }
    }

    function Vo(BB) {
      (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Session, function(BB) {
        const OB = new TextEncoder,
          GB = OB.encode(BB.game).subarray(0, 65535),
          YB = OB.encode(BB.lobby).subarray(0, 65535),
          DB = new Uint8Array(22 + GB.length + 2 + YB.length),
          QB = new DataView(DB.buffer);
        QB.setFloat64(0, BB.unixMs, !0), QB.setBigUint64(8, BigInt.asUintN(64, BB.session), !0), QB.setUint8(16, BB.lobbyType);
        let oB = 20;
        for (const jB of [GB, YB]) QB.setUint16(oB, jB.length, !0), DB.set(jB, oB + 2), oB += 2 + jB.length;
        return DB
      }({
        ...BB,
        unixMs: this.deps.unixNow()
      }))
    }

    function So(BB) {
      false
    }

    function no() {
      var BB, OB;
      return null !== (BB = null === (OB = (0, ZQ.e)(this, cQ)[cQ]) || void 0 === OB ? void 0 : OB.on) && void 0 !== BB && BB
    }

    function Uo() {
      const BB = (0, ZQ.e)(this, FQ)[FQ];
      let OB = !0;
      if (BB) try {
        OB = BB.busy()
      } catch (GB) {
        if (!(0, ZQ.e)(this, Wo)[Wo](GB)) throw GB
      }
      return OB || (0, ZQ.e)(this, HQ)[HQ].active
    }
    async function fo() {
      !(0, ZQ.e)(this, gQ)[gQ] && this.deps.allowed() ? await (0, ZQ.e)(this, Oo)[Oo]() : (0, ZQ.e)(this, aQ)[aQ] = null
    }

    function ko() {
      return (0, ZQ.e)(this, LQ)[LQ] || (0, ZQ.e)(this, gQ)[gQ] ? Promise.resolve(!1) : (0, ZQ.e)(this, FQ)[FQ] ? Promise.resolve(!0) : ((0, ZQ.e)(this, XQ)[XQ] ??= (0, ZQ.e)(this, Go)[Go](), (0, ZQ.e)(this, XQ)[XQ])
    }
    async function Ko() {
      let BB = !1;
      try {
        return BB = await (0, ZQ.e)(this, Qo)[Qo](), BB
      } finally {
        BB || ((0, ZQ.e)(this, aQ)[aQ] = null), (0, ZQ.e)(this, XQ)[XQ] = null
      }
    }

    function uo() {
      if (!(0, ZQ.e)(this, FQ)[FQ]) return Promise.resolve((0, ZQ.e)(this, LQ)[LQ] ? "trapped" : "GP");
      if (!(0, ZQ.e)(this, rQ)[rQ]) {
        let BB = () => {};
        const OB = new Promise((OB => {
          BB = OB
        }));
        (0, ZQ.e)(this, rQ)[rQ] = {
          promise: OB,
          resolve: BB
        }
      }
      return (0, ZQ.e)(this, rQ)[rQ].promise
    }

    function mo(BB) {
      const OB = (0, ZQ.e)(this, rQ)[rQ];
      (0, ZQ.e)(this, rQ)[rQ] = null, null === OB || void 0 === OB || OB.resolve(BB)
    }
    async function Io() {
      let BB = (0, ZQ.e)(this, IQ)[IQ];
      if (!BB) {
        const OB = (0, ZQ.e)(this, wQ)[wQ];
        try {
          BB = await this.deps.load()
        } catch (GB) {
          return OB === (0, ZQ.e)(this, wQ)[wQ] && await (0, ZQ.e)(this, Zo)[Zo](GB), !1
        }
        if (OB !== (0, ZQ.e)(this, wQ)[wQ]) return this.deps.unload(), !1;
        const YB = BB,
          DB = (0, ZQ.e)(this, Ro)[Ro]((() => YB.JoB()));
        if (void 0 === DB) return !1;
        const QB = this.deps.core.MoB();
        if (DB !== QB) return await (0, ZQ.e)(this, Zo)[Zo](new Error(`recorder port version ${DB}, the core's ${QB}`)), !1;
        (0, ZQ.e)(this, IQ)[IQ] = BB
      }
      const OB = BB;
      try {
        if (!(0, ZQ.e)(this, Ro)[Ro]((() => ((0, ZQ.e)(this, FQ)[FQ] = new OB.PoB, (0, ZQ.e)(this, iQ)[iQ] = OB.GoB(), !0)))) return !1;
        (0, ZQ.e)(this, jo)[jo]();
        const BB = (0, ZQ.e)(this, aQ)[aQ];
        return (0, ZQ.e)(this, aQ)[aQ] = null, BB && (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Control, BB), (0, ZQ.e)(this, oo)[oo]()
      } catch (GB) {
        return (0, ZQ.e)(this, Mo)[Mo](), await (0, ZQ.e)(this, Zo)[Zo](GB), !1
      }
    }

    function Fo() {
      return this.deps.core.zoB(0), 1 === this.deps.core.zoB(1) || ((0, ZQ.e)(this, Mo)[Mo](), this.deps.failed(KQ), !1)
    }

    function io() {
      (0, ZQ.e)(this, cQ)[cQ] && (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Prefs, UQ((0, ZQ.e)(this, cQ)[cQ].on, (0, ZQ.e)(this, cQ)[cQ].seconds)), (0, ZQ.e)(this, hQ)[hQ] && (0, ZQ.e)(this, vQ)[vQ]((0, ZQ.e)(this, hQ)[hQ])
    }

    function Lo() {
      return dQ({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var BB, OB;
          return null !== (BB = null === (OB = (0, ZQ.e)(this, cQ)[cQ]) || void 0 === OB ? void 0 : OB.seconds) && void 0 !== BB ? BB : 0
        },
        trapped: () => (0, ZQ.e)(this, LQ)[LQ],
        busy: () => (0, ZQ.e)(this, tQ)[tQ](),
        loadInFlight: () => (0, ZQ.e)(this, XQ)[XQ],
        Vp: () => (0, ZQ.e)(this, gQ)[gQ],
        unload: () => {
          (0, ZQ.e)(this, Mo)[Mo]()
        },
        load: () => (0, ZQ.e)(this, Oo)[Oo]()
      })
    }

    function go(BB, OB) {
      (0, ZQ.e)(this, eQ)[eQ] ? (0, ZQ.e)(this, eQ)[eQ].push([BB, OB]): (0, ZQ.e)(this, No)[No](((GB, YB) => {
        const DB = GB.YoB(OB.length);
        0 !== DB && (new Uint8Array(YB.buffer, DB, OB.length).set(OB), GB.command(BB, OB.length))
      }))
    }

    function ro() {
      (0, ZQ.e)(this, wQ)[wQ]++, (0, ZQ.e)(this, Do)[Do]("GP"), (0, ZQ.e)(this, HQ)[HQ].stop(), this.deps.core.zoB(0), (0, ZQ.e)(this, Po)[Po](), (0, ZQ.e)(this, LQ)[LQ] || ((0, ZQ.e)(this, IQ)[IQ] = null, this.deps.unload())
    }

    function Xo() {
      (0, ZQ.e)(this, No)[No]((BB => {
        BB.free()
      })), (0, ZQ.e)(this, FQ)[FQ] = null, (0, ZQ.e)(this, iQ)[iQ] = null, (0, ZQ.e)(this, CQ)[CQ] = null
    }

    function wo() {
      var BB;
      const OB = this.deps.coreBuffer();
      return (null === (BB = (0, ZQ.e)(this, TQ)[TQ]) || void 0 === BB ? void 0 : BB.buffer) !== OB && ((0, ZQ.e)(this, TQ)[TQ] = new Uint8Array(OB)), (0, ZQ.e)(this, TQ)[TQ]
    }

    function Eo() {
      var BB;
      const OB = this.deps.coreBuffer();
      return (null === (BB = (0, ZQ.e)(this, bQ)[bQ]) || void 0 === BB ? void 0 : BB.buffer) !== OB && ((0, ZQ.e)(this, bQ)[bQ] = new Uint32Array(OB, 0, OB.byteLength >>> 2)), (0, ZQ.e)(this, bQ)[bQ]
    }

    function co(BB) {
      var OB;
      const GB = BB.buffer;
      return (null === (OB = (0, ZQ.e)(this, CQ)[CQ]) || void 0 === OB ? void 0 : OB.buffer) !== GB && ((0, ZQ.e)(this, CQ)[CQ] = new Uint8Array(GB)), (0, ZQ.e)(this, CQ)[CQ]
    }
    async function ho(BB) {
      await this.deps.staleOr(BB, (() => {
        this.deps.failed(KQ)
      }))
    }

    function ao(BB) {
      const OB = (0, ZQ.e)(this, FQ)[FQ],
        GB = (0, ZQ.e)(this, iQ)[iQ];
      if (OB && GB) return (0, ZQ.e)(this, Ro)[Ro]((() => BB(OB, GB)))
    }

    function eo(BB) {
      if (!(0, ZQ.e)(this, LQ)[LQ]) try {
        return BB()
      } catch (OB) {
        if (!(0, ZQ.e)(this, Wo)[Wo](OB)) throw OB;
        return
      }
    }

    function To(BB) {
      return BB instanceof WebAssembly.RuntimeError && ((0, ZQ.e)(this, LQ)[LQ] = !0, (0, ZQ.e)(this, FQ)[FQ] = null, (0, ZQ.e)(this, iQ)[iQ] = null, (0, ZQ.e)(this, CQ)[CQ] = null, (0, ZQ.e)(this, IQ)[IQ] = null, (0, ZQ.e)(this, aQ)[aQ] = null, (0, ZQ.e)(this, Do)[Do]("trapped"), this.deps.core.zoB(0), (0, ZQ.e)(this, HQ)[HQ].stop(), this.deps.crash(this.deps.markTrapped(BB)), this.deps.failed(uQ), !0)
    }
    var bo = GB(39342);
    const Co = new Map([
      ["skyblock", () => GB.e(59).then((() => GB(39338)))]
    ]);

    function Ho(BB) {
      const OB = Co.get(BB);
      return OB ? OB().then((() => {
        const OB = (0, bo.b)(BB);
        if (!OB) throw new Error(`${BB}'s replay hook module registered no hook`);
        return OB
      })) : null
    }
    class vo {
      constructor(BB) {
        this.deps = BB, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(BB) {
        if (this.pending.clear(), BB === this.game && null !== this.hook) return void(this.all = !0);
        const OB = ++this.generation;
        this.game = BB, this.hook = null, this.all = !1;
        const GB = this.deps.loadHook(BB);
        null === GB || void 0 === GB || GB.then((BB => {
          OB === this.generation && (this.hook = BB, this.all = !0)
        }), (BB => {
          OB === this.generation && this.deps.onError(BB)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(BB) {
        null === this.hook || this.all || this.pending.set(BB, !0)
      }
      entityInfoChanged(BB) {
        null === this.hook || this.all || this.pending.has(BB) || this.pending.set(BB, !1)
      }
      flush(BB) {
        const {
          hook: OB
        } = this;
        if (null === OB || !BB || !this.all && 0 === this.pending.size) return;
        const GB = this.deps.cmd();
        if (null === GB) return;
        const {
          api: YB
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: BB,
            count: OB
          } = xG(YB, this.ids);
          this.ids = BB;
          for (let GB = 0; GB < OB; GB++) this.pending.set(BB[GB], !0)
        }
        const DB = this.ids = tG(this.ids, this.pending.size);
        let QB = 0;
        for (const JB of this.pending.keys()) DB[QB++] = JB;
        const oB = [],
          jB = BY(YB, DB, QB, ((BB, OB) => {
            null !== OB && oB.push({
              serverId: BB,
              info: OB,
              spawned: !0 === this.pending.get(BB)
            })
          }));
        if (jB) {
          this.pending.clear();
          for (const {
              serverId: BB,
              info: YB,
              spawned: DB
            }
            of oB) try {
            OB(YB, {
              setFacingTolerance: OB => {
                null === OB && DB || AG(GB, BB, OB) || this.pending.set(BB, DB)
              }
            })
          } catch (yB) {
            this.deps.onError(yB)
          }
        }
      }
    }
    var so = (0, NQ.c)("bindings"),
      xo = (0, NQ.c)("module"),
      to = (0, NQ.c)("memory"),
      Bj = (0, NQ.c)("trapped"),
      Oj = (0, NQ.c)("generation"),
      Gj = (0, NQ.c)("loading"),
      Yj = (0, NQ.c)("lend"),
      Dj = (0, NQ.c)("givenUp"),
      Qj = (0, NQ.c)("afterSave"),
      oj = (0, NQ.c)("opens"),
      jj = (0, NQ.c)("saveAskedAt"),
      yj = (0, NQ.c)("unload"),
      Jj = (0, NQ.c)("dropModule"),
      Mj = (0, NQ.c)("loadFailed"),
      Pj = (0, NQ.c)("saveReadsBody"),
      zj = (0, NQ.c)("command"),
      lj = (0, NQ.c)("call"),
      pj = (0, NQ.c)("guard"),
      qj = (0, NQ.c)("trapOn");
    class Zj {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, qj, {
          value: Uj
        }), Object.defineProperty(this, pj, {
          value: nj
        }), Object.defineProperty(this, lj, {
          value: Sj
        }), Object.defineProperty(this, zj, {
          value: Vj
        }), Object.defineProperty(this, Pj, {
          get: Aj,
          set: void 0
        }), Object.defineProperty(this, Mj, {
          value: Wj
        }), Object.defineProperty(this, Jj, {
          value: Rj
        }), Object.defineProperty(this, yj, {
          value: Nj
        }), Object.defineProperty(this, so, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xo, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, to, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Bj, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Oj, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Gj, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Yj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Dj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oj, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jj, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, ZQ.e)(this, xo)[xo] && null === (0, ZQ.e)(this, Qj)[Qj]
      }
      async open(BB, OB) {
        if ((0, ZQ.e)(this, Bj)[Bj]) return zB.jd.ModuleTrap;
        let GB = (0, ZQ.e)(this, so)[so];
        if (!GB) {
          const BB = (0, ZQ.e)(this, Oj)[Oj];
          (0, ZQ.e)(this, Gj)[Gj]++;
          try {
            GB = await this.deps.load()
          } catch (DB) {
            return (0, ZQ.e)(this, Gj)[Gj]--, BB !== (0, ZQ.e)(this, Oj)[Oj] ? "stopped" : (0, ZQ.e)(this, Mj)[Mj](DB, OB)
          }
          if ((0, ZQ.e)(this, Gj)[Gj]--, BB !== (0, ZQ.e)(this, Oj)[Oj]) return (0, ZQ.e)(this, so)[so] || 0 !== (0, ZQ.e)(this, Gj)[Gj] || (0, ZQ.e)(this, Bj)[Bj] || this.deps.unload(), "stopped";
          if ((0, ZQ.e)(this, Bj)[Bj]) return zB.jd.ModuleTrap;
          const YB = GB.JoB(),
            QB = this.deps.core.MoB();
          if (YB !== QB) return (0, ZQ.e)(this, Mj)[Mj](new Error(`replay port version ${YB}, the core's ${QB}`), OB);
          (0, ZQ.e)(this, so)[so] = GB
        }
        if (!(0, ZQ.e)(this, xo)[xo]) {
          const BB = GB;
          if (!(0, ZQ.e)(this, pj)[pj]((() => {
              (0, ZQ.e)(this, xo)[xo] = new BB.poB, (0, ZQ.e)(this, to)[to] = BB.qoB()
            }))) return zB.jd.ModuleTrap
        }
        let YB = !1;
        return (0, ZQ.e)(this, lj)[lj](((OB, GB) => {
          null !== (0, ZQ.e)(this, Qj)[Qj] && OB.step(0, 0);
          const DB = OB.stage(BB.length);
          0 !== DB && (new Uint8Array(GB.buffer, DB, BB.length).set(BB), OB.open(), (0, ZQ.e)(this, Dj)[Dj] = (0, ZQ.e)(this, Yj)[Yj], (0, ZQ.e)(this, Qj)[Qj] = null, (0, ZQ.e)(this, oj)[oj]++, YB = !0)
        })) ? YB ? "opening" : zB.jd.TooLarge : zB.jd.ModuleTrap
      }
      beforeFrame(BB) {
        const OB = (0, ZQ.e)(this, xo)[xo],
          GB = (0, ZQ.e)(this, to)[to];
        if (!OB || !GB || null !== (0, ZQ.e)(this, Qj)[Qj]) return;
        const {
          core: YB
        } = this.deps, DB = YB.ZoB(BB);
        if (DB < 0) return;
        const QB = Math.floor(DB);
        let oB, jB;
        try {
          oB = OB.step(QB, DB - QB), jB = OB.QoB()
        } catch (JB) {
          return void(0, ZQ.e)(this, qj)[qj](JB)
        }
        const yB = YB.yoB(1, oB);
        if (0 === yB) {
          const BB = (0, ZQ.e)(this, lj)[lj]((BB => {
            BB.close()
          }));
          if (!BB) return;
          return (0, ZQ.e)(this, Pj)[Pj] ? (0, ZQ.e)(this, Qj)[Qj] = "drop" : (0, ZQ.e)(this, Jj)[Jj](), void YB.NoB(zB.jd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), yB, oB).set(new Uint8Array(GB.buffer, jB, oB))
      }
      play() {
        (0, ZQ.e)(this, zj)[zj]((BB => {
          BB.play()
        }))
      }
      pause() {
        (0, ZQ.e)(this, zj)[zj]((BB => {
          BB.pause()
        }))
      }
      seek(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, ZQ.e)(this, zj)[zj]((GB => {
          GB.seek(BB, OB)
        }))
      }
      setMark(BB, OB) {
        return (0, ZQ.e)(this, zj)[zj]((GB => {
          GB.RoB(BB, OB)
        }))
      }
      addKeyframe(BB, OB) {
        return (0, ZQ.e)(this, zj)[zj]((GB => {
          GB.WoB(BB[0], BB[1], BB[2], OB[0], OB[1], OB[2])
        }))
      }
      setKeyframe(BB, OB) {
        return (0, ZQ.e)(this, zj)[zj]((GB => {
          GB.VoB(BB, OB)
        }))
      }
      moveKeyframe(BB, OB) {
        return (0, ZQ.e)(this, zj)[zj]((GB => {
          GB.SoB(BB, OB)
        }))
      }
      deleteKeyframes(BB, OB) {
        return (0, ZQ.e)(this, zj)[zj]((GB => {
          GB.noB(BB, OB)
        }))
      }
      crop(BB, OB) {
        return null === (0, ZQ.e)(this, Yj)[Yj] && (0, ZQ.e)(this, zj)[zj]((GB => {
          GB.crop(BB, OB)
        }))
      }
      beginSave() {
        const BB = (0, ZQ.e)(this, jj)[jj];
        if ((0, ZQ.e)(this, jj)[jj] = null, null !== BB && BB !== (0, ZQ.e)(this, oj)[oj]) return null;
        let OB = 0,
          GB = null;
        if ((0, ZQ.e)(this, lj)[lj](((BB, YB) => {
            OB = BB.save(), 0 !== OB && (GB = new Uint8Array(YB.buffer, BB.UoB(), BB.foB()).slice())
          })), 0 === OB || !GB) return null;
        const YB = {
          headLen: OB,
          editState: GB,
          givenUp: () => (0, ZQ.e)(this, Dj)[Dj] === YB,
          head: (BB, OB) => {
            if ((0, ZQ.e)(this, Yj)[Yj] !== YB || !(0, ZQ.e)(this, Pj)[Pj]) return null;
            let GB = null;
            return (0, ZQ.e)(this, lj)[lj](((YB, DB) => {
              const QB = YB.koB();
              0 !== QB && BB >= 0 && OB >= 0 && BB + OB <= QB && (GB = new Uint8Array(DB.buffer, YB.doB() + BB, OB))
            })), GB
          },
          end: () => {
            if ((0, ZQ.e)(this, Yj)[Yj] !== YB) return;
            (0, ZQ.e)(this, Yj)[Yj] = null, (0, ZQ.e)(this, Dj)[Dj] = null, (0, ZQ.e)(this, lj)[lj]((BB => {
              BB.KoB()
            }));
            const BB = (0, ZQ.e)(this, Qj)[Qj];
            (0, ZQ.e)(this, Qj)[Qj] = null, "unload" === BB ? (0, ZQ.e)(this, yj)[yj]() : "drop" === BB && (0, ZQ.e)(this, Jj)[Jj]()
          }
        };
        return (0, ZQ.e)(this, Yj)[Yj] = YB, YB
      }
      askSave() {
        (0, ZQ.e)(this, jj)[jj] = (0, ZQ.e)(this, oj)[oj]
      }
      setSpeed(BB) {
        (0, ZQ.e)(this, zj)[zj]((OB => {
          OB.uoB(BB)
        }))
      }
      setCameraMode(BB) {
        (0, ZQ.e)(this, zj)[zj]((OB => {
          OB.moB(BB)
        }))
      }
      close() {
        (0, ZQ.e)(this, zj)[zj]((BB => {
          BB.close()
        }))
      }
      stop() {
        (0, ZQ.e)(this, Oj)[Oj]++, (0, ZQ.e)(this, Pj)[Pj] && ((0, ZQ.e)(this, lj)[lj]((BB => {
          BB.close()
        })), (0, ZQ.e)(this, xo)[xo]) ? (0, ZQ.e)(this, Qj)[Qj] = "unload" : (0, ZQ.e)(this, yj)[yj]()
      }
    }

    function Nj() {
      (0, ZQ.e)(this, Jj)[Jj](), (0, ZQ.e)(this, Bj)[Bj] || ((0, ZQ.e)(this, so)[so] = null, this.deps.unload())
    }

    function Rj() {
      (0, ZQ.e)(this, lj)[lj]((BB => {
        BB.free()
      })), (0, ZQ.e)(this, xo)[xo] = null, (0, ZQ.e)(this, to)[to] = null
    }
    async function Wj(BB, OB) {
      return await this.deps.staleOr(BB, (() => {}), {
        beforeReload: OB
      }) ? "reloading" : zB.jd.ModuleLoad
    }

    function Aj() {
      return null !== (0, ZQ.e)(this, Yj)[Yj] && (0, ZQ.e)(this, Dj)[Dj] !== (0, ZQ.e)(this, Yj)[Yj]
    }

    function Vj(BB) {
      return null === (0, ZQ.e)(this, Qj)[Qj] && (0, ZQ.e)(this, lj)[lj](BB)
    }

    function Sj(BB) {
      const OB = (0, ZQ.e)(this, xo)[xo],
        GB = (0, ZQ.e)(this, to)[to];
      return !(!OB || !GB) && (0, ZQ.e)(this, pj)[pj]((() => {
        BB(OB, GB)
      }))
    }

    function nj(BB) {
      if ((0, ZQ.e)(this, Bj)[Bj]) return !1;
      try {
        return BB(), !0
      } catch (OB) {
        return (0, ZQ.e)(this, qj)[qj](OB), !1
      }
    }

    function Uj(BB) {
      if (!(BB instanceof WebAssembly.RuntimeError)) throw BB;
      (0, ZQ.e)(this, Bj)[Bj] = !0, (0, ZQ.e)(this, xo)[xo] = null, (0, ZQ.e)(this, to)[to] = null, (0, ZQ.e)(this, so)[so] = null, this.deps.crash(this.deps.markTrapped(BB)), this.deps.core.NoB(zB.jd.ModuleTrap)
    }
    var fj = GB(6997),
      kj = GB(42042);
    const dj = "[bloxd-wasm-client]";
    const Kj = String(TD);

    function uj(BB) {
      return null === BB || BB === Kj ? void 0 : BB
    }

    function mj(BB) {
      var OB, GB, YB, DB, QB, jB, yB;
      switch (BB.what) {
        case zB.qd.FlyingText: {
          let OB;
          try {
            OB = JSON.parse(BB.contentJson)
          } catch (JB) {
            return void console.warn(`${dj} a replay's flying text isn't JSON`, JB)
          }
          oB.o.tM("forceFlyingMiddleMessage", {
            content: OB,
            VB: BB.VB,
            angle: BB.angle,
            SB: BB.SB
          });
          break
        }
        case zB.qd.PlayerKilled:
          (0, kj.f)({
            kind: "killed",
            body: {
              deadEId: null !== (OB = uj(BB.dead)) && void 0 !== OB ? OB : "",
              killerEId: uj(BB.killer),
              withItem: null !== (GB = BB.withItem) && void 0 !== GB ? GB : "",
              killstreak: BB.killstreak
            }
          });
          break;
        case zB.qd.Killfeed:
          (0, kj.f)({
            kind: "custom",
            body: {
              killer: {
                eId: uj(BB.killerId),
                name: null !== (YB = BB.killerName) && void 0 !== YB ? YB : void 0,
                colour: null !== (DB = BB.killerColour) && void 0 !== DB ? DB : void 0
              },
              victim: {
                eId: uj(BB.victimId),
                name: null !== (QB = BB.victimName) && void 0 !== QB ? QB : void 0,
                colour: null !== (jB = BB.victimColour) && void 0 !== jB ? jB : void 0
              },
              withItem: null !== (yB = BB.withItem) && void 0 !== yB ? yB : ""
            }
          })
      }
    }
    const Ij = "[bloxd-wasm-client]";

    function Fj(BB) {
      if (void 0 === BB || null === BB || "" === BB) return null;
      const OB = Number(BB);
      return Number.isInteger(OB) && OB > TD && OB <= 2147483647 ? OB : null
    }

    function ij(BB) {
      return {
        id: Fj(BB.eId),
        name: "string" === typeof BB.name ? BB.name : null,
        colour: "string" === typeof BB.colour ? BB.colour : null
      }
    }

    function Lj(BB) {
      const OB = (0, GQ.g)(oY.oc.PlayerKilled, (OB => {
          var GB, YB;
          const DB = (0, OQ.l)(OB);
          if (!(0, OQ.e)(DB)) return;
          const {
            deadEId: QB,
            killerEId: oB,
            withItem: jB,
            killstreak: yB
          } = DB;
          BB.recordPlayerKilled(null !== (GB = Fj(QB)) && void 0 !== GB ? GB : TD, null !== (YB = Fj(oB)) && void 0 !== YB ? YB : TD, "number" === typeof yB ? yB : 0, "string" === typeof jB ? jB : "")
        })),
        GB = (0, GQ.g)(oY.oc.CustomKillfeed, (OB => {
          const GB = (0, OQ.l)(OB);
          if (!(0, OQ.e)(GB) || !(0, OQ.e)(GB.killer) || !(0, OQ.e)(GB.victim)) return;
          const {
            killer: YB,
            victim: DB,
            withItem: QB
          } = GB;
          BB.recordKillfeed(ij(YB), ij(DB), "string" === typeof QB ? QB : null)
        }));
      return () => {
        OB(), GB()
      }
    }

    function gj(BB) {
      var OB;
      return void 0 === BB || null === BB ? null : null !== (OB = JSON.stringify(BB)) && void 0 !== OB ? OB : null
    }

    function rj(BB) {
      let OB = null;
      const GB = () => {
        const {
          enableClipping: GB,
          clipDurationSeconds: DB
        } = YB.c.get("clientEscMenuOptions"), QB = `${GB}:${DB}`;
        QB !== OB && (OB = QB, BB.recorder.setPrefs(GB, DB))
      };
      return GB(), (0, oB.p)("appManagerUpdated|clientEscMenuOptions", GB)
    }
    const Xj = "replayModule",
      wj = "recorderModule";

    function Ej(BB, OB, GB) {
      return function() {
        return BB.isStopped ? GB : OB(...arguments)
      }
    }
    const cj = {
      open: () => Promise.reject(new Error(gD.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function hj() {
      return GB.e(76).then((() => GB(64058)))
    }

    function aj(BB) {
      (0, gD.h)({
        text: BB,
        type: "Error"
      })
    }
    class ej {
      constructor(BB) {
        this.deps = BB, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: OB,
          api: YB,
          core: DB
        } = BB, QB = () => BB.memory().buffer, oB = () => OB.isStopped ? null : OB.rings.cmd, jB = Ej(OB, ((BB, OB) => DB.yoB(BB, OB)), 0), yB = () => DB.MoB();
        let JB = null;
        this.replay = new Zj({
          core: {
            ZoB: Ej(OB, (BB => DB.ZoB(BB)), -1),
            yoB: jB,
            MoB: yB,
            NoB: Ej(OB, (BB => {
              DB.NoB(BB)
            }), void 0)
          },
          coreBuffer: QB,
          load: async () => (JB = await GB.e(77).then((() => GB(64066))), JB.loadReplayModule()),
          unload: () => {
            var BB;
            null === (BB = JB) || void 0 === BB || BB.unloadReplayModule()
          },
          markTrapped: BB => JB ? JB.markReplayTrapped(BB) : new Error(String(BB)),
          staleOr: (OB, GB, YB) => BB.staleOr(Xj, OB, GB, YB),
          crash: OB => {
            BB.reportFault(Xj, OB)
          }
        });
        let MB = null;
        this.recorder = new Ao({
          core: {
            zoB: Ej(OB, (BB => DB.zoB(BB)), 0),
            DoB: Ej(OB, (BB => DB.DoB(BB)), 0),
            yoB: jB,
            MoB: yB
          },
          coreCommand: (BB, OB) => {
            var GB, YB;
            return null !== (GB = null === (YB = oB()) || void 0 === YB ? void 0 : YB.writeCmd(BB, 0, OB)) && void 0 !== GB && GB
          },
          coreBuffer: QB,
          load: async () => (MB = await hj(), MB.loadRecorderModule()),
          prefetch: () => {
            hj().then((BB => BB.prefetchRecorderModule())).catch((BB => {
              console.warn(`${Ij} the recorder module didn't prefetch, so a save loads it:`, BB)
            }))
          },
          unload: () => {
            var BB;
            null === (BB = MB) || void 0 === BB || BB.unloadRecorderModule()
          },
          markTrapped: BB => MB ? MB.markRecorderTrapped(BB) : new Error(String(BB)),
          memoryBytes: () => {
            var BB, OB;
            return null !== (BB = null === (OB = MB) || void 0 === OB ? void 0 : OB.recorderMemoryBytes()) && void 0 !== BB ? BB : 0
          },
          staleOr: (OB, GB) => BB.staleOr(wj, OB, GB),
          crash: OB => {
            BB.reportFault(wj, OB)
          },
          allowed: () => !0 === BB.options.get("canRecordReplays"),
          failed: BB => {
            this.runtime.recorder.stopped(), aj(BB)
          },
          events: (BB, OB) => {
            this.runtime.recorderEvents(BB, OB)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: aj,
          unixNow: () => Date.now()
        });
        const PB = new eD({
          core: {
            HQB: Ej(OB, (BB => DB.HQB(BB)), 0),
            sQB: Ej(OB, (() => {
              DB.sQB()
            }), void 0),
            eZ: Ej(OB, (() => DB.eZ()), 0),
            vQB: Ej(OB, (() => DB.vQB()), 0)
          },
          buffer: QB,
          apiView: () => YB.apiView,
          cmd: oB,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new vo({
          api: YB,
          cmd: oB,
          loadHook: Ho,
          onError: BB => {
            console.warn(`${Ij} the recorded game's replay hooks:`, BB)
          }
        });
        const zB = new BQ({
          client: PB,
          buffer: QB,
          setHoldDraws: BB => {
            OB.setHoldDraws(BB)
          },
          notify: gD.h,
          onRecorderState: () => {
            var BB;
            null === (BB = (0, XD.g)()) || void 0 === BB || BB.recorderChanged()
          },
          onViewerChange: () => {
            var BB;
            null === (BB = (0, XD.g)()) || void 0 === BB || BB.viewerChanged()
          },
          onReplayOption: OB => {
            ! function(BB, OB) {
              var GB, YB;
              const DB = oY.Cb[OB.key];
              if (void 0 === DB) return;
              let QB = null !== (GB = OB.value) && void 0 !== GB ? GB : JSON.parse(JSON.stringify(null !== (YB = fj.b[DB]) && void 0 !== YB ? YB : null));
              if (null !== OB.value && OB.key < oY.$b.Environment && "string" === typeof QB) try {
                QB = JSON.parse(QB)
              } catch (oB) {
                return void console.warn(`${dj} a replay's ${DB} isn't JSON`, oB)
              }
              BB.applyNewClientOptions({
                [DB]: QB
              })
            }(BB.options, OB)
          },
          onReplayUiEvent: mj,
          onReplayOpened: OB => {
            this.entityHooks.opened((0, dB.ac)(OB)), BB.replayShaderPack(OB)
          },
          meshPending: () => {
            var BB, GB;
            return null !== (BB = null === (GB = OB.lastHeader) || void 0 === GB ? void 0 : GB.renderPending) && void 0 !== BB ? BB : 0
          },
          viewerOpen: rD.b,
          download: BB => {
            (0, iD.i)(BB)
          }
        });
        this.runtime = zB, YB.replay = zB.sink, (0, XD.s)(zB);
        const lB = new QQ({
          live: () => {
            var BB;
            return !OB.isStopped && !0 === (null === (BB = zB.currentViewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          cmd: oB,
          dragScale: pQ
        });
        this.freecam = lB, (0, XD.p)(lB), this.recordedOptions = function(BB, OB) {
          const GB = oY.Cb,
            YB = GB.map(((GB, YB) => OB.subscribe(GB, (OB => {
              BB.setOption(YB, gj(OB))
            }))));
          return {
            sendAll() {
              GB.forEach(((GB, YB) => {
                BB.setOption(YB, gj(OB.get(GB)))
              }))
            },
            stop() {
              for (const BB of YB) BB()
            }
          }
        }(zB.recorder, BB.options), this.stops = [(0, ZY.o)((BB => {
          lB.flush();
          try {
            this.replay.beforeFrame(BB)
          } catch (OB) {
            this.deps.reportFault("replayFrame", OB)
          }
        })), (0, ZY.C)(((BB, OB) => {
          try {
            this.recorder.afterFrame(), OB && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (GB) {
            this.deps.reportFault("recorderFrame", GB)
          }
          try {
            zB.afterFrame(BB)
          } catch (GB) {
            this.deps.reportFault("replayRuntime", GB)
          }
        })), rj(zB), () => {
          this.recordedOptions.stop()
        }, Lj(zB.recorder), (0, YQ.g)((BB => {
          let {
            action: OB,
            down: GB
          } = BB;
          var YB;
          GB && (null === (YB = (0, XD.g)()) || void 0 === YB || YB.keyDown(OB))
        }))];
        const pB = () => {
          const BB = zB.currentViewer;
          return !0 === (null === BB || void 0 === BB ? void 0 : BB.isOpen) ? BB : null
        };
        (0, LD.g)({
          open: (BB, OB) => this.open(BB, OB),
          replayKey: () => {
            var BB, OB;
            return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.id) && void 0 !== BB ? BB : null
          },
          saveRefusal: () => {
            var BB, OB;
            return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.saveRefusal) && void 0 !== BB ? BB : null
          },
          encode: () => {
            var BB, OB;
            return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.save()) && void 0 !== BB ? BB : Promise.resolve(null)
          },
          fileHandle: () => {
            var BB, OB;
            return null !== (BB = null === (OB = zB.currentViewer) || void 0 === OB ? void 0 : OB.fileHandle) && void 0 !== BB ? BB : null
          },
          markSaved: (BB, OB) => {
            var GB;
            null === (GB = zB.currentViewer) || void 0 === GB || GB.markSaved(BB, OB)
          }
        })
      }
      netEvent(BB) {
        if ("connection" === BB.type)
          if (BB.phase === zB.E.Activated) {
            this.activeConn = BB.conn;
            const OB = this.deps.sessionInfo(BB.conn);
            null !== OB && (this.runtime.activated({
              lobbyType: (0, KB.B)(OB.lobbyName),
              gameNameWithVariation: OB.gameNameWithVariation,
              lobbyName: OB.lobbyName
            }), this.recordedOptions.sendAll())
          } else BB.phase !== zB.E.Left && BB.phase !== zB.E.Closed || BB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const BB of this.stops) BB();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, XD.l)() === this.runtime && (0, XD.s)(null), (0, XD.i)() === this.freecam && (0, XD.p)(null), (0, LD.g)(cj), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(BB, OB) {
        const {
          running: GB
        } = this.deps;
        if (GB.isStopped) throw new Error(gD.e.coreStopped.text);
        if (BB.byteLength > 67108864) throw new Error(gD.e.cantOpen.text);
        let YB;
        try {
          YB = await async function(BB) {
            const OB = await BB.loadViewer();
            return OB.inPlayback || (0, ZY.O)().leaveGame(null), OB
          }(this.runtime)
        } catch (DB) {
          throw console.warn(`${Ij} the replay viewer didn't load`, DB), new Error(gD.e.viewerLoadFailed.text)
        }
        if (GB.isStopped) throw new Error(gD.e.coreStopped.text);
        await YB.open(BB, OB)
      }
    }
    var Tj = GB(2050);

    function bj(BB, OB) {
      const {
        aux: GB,
        payload: YB
      } = function(BB) {
        return {
          aux: BB.reset ? zB.kc.ResetFirst : 0,
          payload: Hj(BB.changes)
        }
      }(OB);
      BB.queueOptions(GB, YB) && (OB.reset && Tj.e.reset(), Tj.e.apply(OB.changes))
    }
    const Cj = new TextEncoder;

    function Hj(BB) {
      const OB = new vj;
      return xj(OB, BB), OB.bytes()
    }
    class vj {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(BB) {
        if (this.len + BB <= this.buf.length) return;
        const OB = new Uint8Array(Math.max(2 * this.buf.length, this.len + BB));
        OB.set(this.buf.subarray(0, this.len)), this.buf = OB, this.view = new DataView(OB.buffer)
      }
      u8(BB) {
        this.room(1), this.buf[this.len++] = BB
      }
      tagged(BB, OB, GB) {
        this.room(1 + OB), this.buf[this.len++] = BB, 1 === OB ? this.view.setUint8(this.len, GB) : 2 === OB ? this.view.setUint16(this.len, GB) : this.view.setUint32(this.len, GB), this.len += OB
      }
      signed(BB, OB, GB) {
        this.room(1 + OB), this.buf[this.len++] = BB, 1 === OB ? this.view.setInt8(this.len, GB) : 2 === OB ? this.view.setInt16(this.len, GB) : this.view.setInt32(this.len, GB), this.len += OB
      }
      f64(BB) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, BB), this.len += 8
      }
      raw(BB) {
        this.room(BB.length), this.buf.set(BB, this.len), this.len += BB.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function sj(BB, OB, GB, YB, DB, QB, oB) {
      OB < YB ? BB.u8(GB | OB) : null !== DB && OB < 256 ? BB.tagged(DB, 1, OB) : OB < 65536 ? BB.tagged(QB, 2, OB) : BB.tagged(oB, 4, OB)
    }

    function xj(BB, OB) {
      switch (typeof OB) {
        case "undefined":
          return void BB.raw(tj);
        case "boolean":
          return void BB.u8(OB ? 195 : 194);
        case "number":
          return void
          function(BB, OB) {
            OB >>> 0 === OB ? OB < 128 ? BB.u8(OB) : OB < 256 ? BB.tagged(204, 1, OB) : OB < 65536 ? BB.tagged(205, 2, OB) : BB.tagged(206, 4, OB) : (OB | 0) === OB ? OB >= -32 ? BB.u8(255 & OB) : OB >= -128 ? BB.signed(208, 1, OB) : OB >= -32768 ? BB.signed(209, 2, OB) : BB.signed(210, 4, OB) : BB.f64(OB)
          }(BB, OB);
        case "string": {
          const GB = Cj.encode(OB);
          return sj(BB, GB.length, 160, 32, 217, 218, 219), void BB.raw(GB)
        }
        case "object":
          break;
        default:
          return void BB.u8(192)
      }
      if (null === OB) BB.u8(192);
      else if (Array.isArray(OB)) {
        sj(BB, OB.length, 144, 16, null, 220, 221);
        for (const GB of OB) xj(BB, GB)
      } else if (OB instanceof Uint8Array) sj(BB, OB.length, 0, 0, 196, 197, 198), BB.raw(OB);
      else {
        const GB = Object.keys(OB);
        sj(BB, GB.length, 128, 0, null, 222, 223);
        for (const YB of GB) xj(BB, YB), xj(BB, OB[YB])
      }
    }
    const tj = new Uint8Array([212, 0, 0]);
    var By = GB(36945),
      Oy = GB(36991),
      Gy = GB(41964),
      Yy = GB(42006),
      Dy = GB(3210);
    const Qy = [1e3, 3e3, 9e3];
    class oy {
      constructor(BB) {
        this.host = BB, this.sets = new Map, this.table = [], this.generation = 0, this.Vp = !1
      }
      onEvent(BB) {
        const OB = function(BB) {
          if (BB.byteLength !== zB.vd) return null;
          const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
          return {
            want: OB.getUint16(0, !0),
            release: OB.getUint16(2, !0)
          }
        }(BB);
        OB && !this.Vp && (OB.release !== zB.xd && this.release(OB.release), OB.want !== zB.xd && this.want(OB.want))
      }
      reset(BB) {
        if (!this.Vp) {
          for (const [BB, OB] of this.sets) "ready" === OB.state && this.releaseAll(OB.distinct), this.sets.delete(BB);
          this.table = BB, this.generation++
        }
      }
      dispose() {
        if (this.Vp) return;
        this.Vp = !0, this.generation++, this.table = [];
        const BB = [...this.sets.values()];
        this.sets.clear();
        let OB = null;
        for (const YB of BB)
          for (const BB of "ready" === YB.state ? YB.distinct : []) try {
            this.host.NDB(BB)
          } catch (GB) {
            OB ??= {
              error: GB
            }
          }
        if (OB) throw OB.error
      }
      isReady(BB) {
        var OB;
        return "ready" === (null === (OB = this.sets.get(BB)) || void 0 === OB ? void 0 : OB.state)
      }
      want(BB) {
        const OB = this.sets.get(BB);
        if ("loading" === (null === OB || void 0 === OB ? void 0 : OB.state)) return OB.wanted = !0, void this.capAnswer(BB, OB);
        if ("ready" === (null === OB || void 0 === OB ? void 0 : OB.state)) return void this.host.sendReady(yy(BB, OB.images, OB.size));
        const GB = this.table[BB];
        if (!GB || 1 !== GB.urls.length && GB.urls.length !== oY.lc.CubeFaces) return this.host.sendReady(Jy(BB)), void this.host.onLoadFailed(BB, "", new Error(`no image set ${BB}`));
        const YB = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(BB, YB), this.load(BB, GB, YB, this.generation, 0), this.capAnswer(BB, YB)
      }
      capAnswer(BB, OB) {
        this.host.wait(4e3, (() => {
          this.sets.get(BB) === OB && OB.wanted && this.host.sendReady(Jy(BB))
        }))
      }
      load(BB, OB, GB, YB, DB) {
        const QB = [...new Set(OB.urls)];
        Promise.allSettled(QB.map((BB => this.host.loadImage(BB, OB.orientation)))).then((oB => {
          const jB = oB.flatMap((BB => "fulfilled" === BB.status ? [BB.value] : [])),
            yB = YB === this.generation && this.sets.get(BB) === GB,
            JB = oB.findIndex((BB => "rejected" === BB.status));
          if (!yB || !GB.wanted) return this.Vp ? void this.releaseAfterDispose(jB.map(jy)) : (this.releaseAll(jB.map(jy)), void(yB && this.sets.delete(BB)));
          JB < 0 ? this.loaded(BB, OB, QB, jB) : (this.releaseAll(jB.map(jy)), this.host.sendReady(Jy(BB)), DB < Qy.length ? this.host.wait(Qy[DB], (() => {
            YB === this.generation && this.sets.get(BB) === GB && (GB.wanted ? this.load(BB, OB, GB, YB, DB + 1) : this.sets.delete(BB))
          })) : (this.sets.delete(BB), this.host.onLoadFailed(BB, QB[JB], oB[JB].reason)))
        }))
      }
      loaded(BB, OB, GB, YB) {
        const [DB] = YB, QB = [DB.width, DB.height], oB = YB.every((BB => BB.width === QB[0] && BB.height === QB[1])), jB = OB.urls.length === oY.lc.CubeFaces;
        if (!oB || QB[0] <= 0 || QB[1] <= 0 || QB[0] > 65535 || QB[1] > 65535 || jB && QB[0] !== QB[1]) {
          this.releaseAll(YB.map(jy)), this.sets.delete(BB), this.host.sendReady(Jy(BB));
          const GB = YB.map((BB => `${BB.width}x${BB.height}`));
          return void this.host.onLoadFailed(BB, OB.urls[0], new Error(`set ${BB}'s images can't make its texture: ${GB.join(", ")}`))
        }
        const yB = OB.urls.map((BB => YB[GB.indexOf(BB)].id)),
          JB = YB.map(jy);
        this.sets.set(BB, {
          state: "ready",
          images: yB,
          distinct: JB,
          size: QB
        }), this.host.sendReady(yy(BB, yB, QB))
      }
      release(BB) {
        const OB = this.sets.get(BB);
        "loading" === (null === OB || void 0 === OB ? void 0 : OB.state) ? OB.wanted = !1: "ready" === (null === OB || void 0 === OB ? void 0 : OB.state) && (this.releaseAll(OB.distinct), this.sets.delete(BB))
      }
      releaseAll(BB) {
        for (const OB of BB) this.host.NDB(OB)
      }
      releaseAfterDispose(BB) {
        for (const OB of BB) try {
          this.host.NDB(OB)
        } catch {}
      }
    }

    function jy(BB) {
      return BB.id
    }

    function yy(BB, OB, GB) {
      const YB = new Uint8Array(oY.lc.SkyImagesReadyBytes),
        DB = new DataView(YB.buffer);
      return DB.setUint16(0, BB, !0), DB.setUint16(2, OB.length, !0), DB.setUint16(4, GB[0], !0), DB.setUint16(6, GB[1], !0), OB.slice(0, oY.lc.CubeFaces).forEach(((BB, OB) => {
        DB.setUint32(8 + 4 * OB, BB, !0)
      })), YB
    }

    function Jy(BB) {
      const OB = new Uint8Array(oY.lc.SkyImagesReadyBytes),
        GB = new DataView(OB.buffer);
      return GB.setUint16(0, BB, !0), GB.setUint16(2, oY.lc.Failed, !0), OB
    }
    let My = Promise.resolve();
    async function Py(BB, OB) {
      let GB;
      try {
        GB = await (0, Dy.I)(BB)
      } catch (QB) {
        throw new Gy.d("fetch", BB, {
          cause: QB
        })
      }
      const YB = My.then((() => async function(BB, OB) {
        const GB = new Blob([BB.slice()]);
        let YB = await createImageBitmap(GB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: OB
        });
        const DB = 1024 / Math.max(YB.width, YB.height);
        if (DB < 1) {
          const BB = YB;
          try {
            YB = await createImageBitmap(BB, {
              resizeWidth: Math.max(1, Math.round(BB.width * DB)),
              resizeHeight: Math.max(1, Math.round(BB.height * DB)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            BB.close()
          }
        }
        return YB
      }(GB, OB)));
      let DB;
      My = YB.catch((() => {}));
      try {
        DB = await YB
      } catch (QB) {
        throw new Gy.d("decode", BB, {
          cause: QB
        })
      }
      return {
        id: (0, Gy.q)(DB),
        width: DB.width,
        height: DB.height
      }
    }
    var zy = GB(2272),
      ly = GB(34612),
      py = GB(39930);
    const qy = zy.i.length,
      Zy = new Set([...zy.i, "earth"]);

    function Ny(BB) {
      const OB = [],
        GB = [],
        YB = (BB, YB) => {
          if ("custom" === YB.type) {
            GB.push({
              id: BB,
              kind: oY.lc.KindCustom,
              set: OB.length,
              earth: null
            });
            const DB = [YB.px, YB.py, YB.pz, YB.nx, YB.ny, YB.nz];
            OB.push({
              urls: (0, py.e)(DB),
              orientation: "none"
            })
          } else GB.push({
            id: BB,
            kind: oY.lc.KindEarth,
            set: 0,
            earth: YB
          })
        };
      zy.i.forEach(((OB, GB) => {
        var DB;
        YB(GB, null !== (DB = Ry(BB[OB])) && void 0 !== DB ? DB : ly.p[OB])
      }));
      const DB = Ry(BB.earth);
      "earth" === (null === DB || void 0 === DB ? void 0 : DB.type) && YB(qy, DB);
      const QB = new TextEncoder,
        oB = [],
        jB = [];
      for (const [lB, pB] of Object.entries(BB)) {
        const BB = Zy.has(lB) ? null : Ry(pB);
        if (null === BB) continue;
        const OB = QB.encode(lB);
        OB.length > 255 ? jB.push(`Ignoring texture pack skybox ${lB}, whose name is over 255 bytes`) : oB.length === oY.lc.MaxAdded ? jB.push(`Ignoring texture pack skybox ${lB}, past the ${oY.lc.MaxAdded} skies a pack can add`) : (oB.push(OB), YB(oY.lc.AddedId, BB))
      }
      const yB = OB.length;
      OB.push({
        urls: ly.g.map((BB => ly.i + BB)),
        orientation: "none"
      }), OB.push({
        urls: [ly.l],
        orientation: "flipY"
      }), OB.push({
        urls: [ly.e],
        orientation: "flipY"
      });
      const JB = oY.lc.SkyTableHeaderBytes + GB.length * oY.lc.SkyTableEntryBytes,
        MB = new Uint8Array(JB + oB.reduce(((BB, OB) => BB + 1 + OB.length), 0)),
        PB = new DataView(MB.buffer);
      PB.setUint16(0, yB, !0), PB.setUint16(2, yB + 1, !0), PB.setUint16(4, yB + 2, !0), PB.setUint16(6, GB.length, !0), GB.forEach(((BB, OB) => {
        const GB = oY.lc.SkyTableHeaderBytes + OB * oY.lc.SkyTableEntryBytes;
        PB.setUint16(GB, BB.id, !0), PB.setUint8(GB + 2, BB.kind);
        const YB = GB + 4;
        BB.earth ? function(BB, OB, GB) {
          const YB = BB;
          let DB = 0,
            QB = 0;
          for (const [oB, jB] of Wy) {
            const BB = YB[oB];
            "number" === typeof BB && Number.isFinite(BB) && (OB.setFloat32(GB + 4 * jB, BB, !0), DB |= 1 << jB)
          }
          for (const [oB, jB, yB] of Ay) {
            const BB = YB[oB];
            Array.isArray(BB) && 3 === BB.length && BB.every((BB => "number" === typeof BB && Number.isFinite(BB))) && (BB.forEach(((BB, YB) => {
              OB.setFloat32(GB + yB + 4 * YB, BB, !0)
            })), DB |= jB)
          }
          Vy.forEach(((BB, QB) => {
            let [oB, jB] = BB;
            const yB = YB[oB];
            "number" === typeof yB && Number.isFinite(yB) && (OB.setFloat32(GB + oY.w.CameraOffsetAt + 4 * QB, yB, !0), DB |= jB)
          }));
          for (const [oB, jB] of Sy) {
            const BB = YB[oB];
            null !== BB && void 0 !== BB && (DB |= jB, BB && (QB |= jB >>> 14))
          }
          OB.setUint32(GB + oY.w.PresentAt, DB, !0), OB.setUint8(GB + oY.w.FlagsAt, QB)
        }(BB.earth, PB, YB) : PB.setUint16(YB, BB.set, !0)
      }));
      let zB = JB;
      for (const lB of oB) MB[zB] = lB.length, MB.set(lB, zB + 1), zB += 1 + lB.length;
      return {
        payload: MB,
        sets: OB,
        leftOut: jB
      }
    }

    function Ry(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const OB = BB;
      if ("earth" === OB.type) return BB;
      return "custom" === OB.type && ["px", "py", "pz", "nx", "ny", "nz"].every((BB => {
        const GB = OB[BB];
        return "string" === typeof GB && GB.length > 0
      })) ? BB : null
    }
    const Wy = [
        ["inclination", oY.w.Inclination],
        ["turbidity", oY.w.Turbidity],
        ["luminance", oY.w.Luminance],
        ["rayleigh", oY.w.Rayleigh],
        ["mieCoefficient", oY.w.MieCoefficient],
        ["mieDirectionalG", oY.w.MieDirectionalG],
        ["distance", oY.w.Distance],
        ["azimuth", oY.w.Azimuth]
      ],
      Ay = [
        ["sunPosition", oY.w.SunPosition, oY.w.SunPositionAt],
        ["up", oY.w.Up, oY.w.UpAt],
        ["vertexTint", oY.w.VertexTint, oY.w.VertexTintAt]
      ],
      Vy = [
        ["xCameraOffset", oY.w.CameraOffsetX],
        ["yCameraOffset", oY.w.CameraOffsetY],
        ["zCameraOffset", oY.w.CameraOffsetZ]
      ],
      Sy = [
        ["useSunPosition", oY.w.UseSunPosition],
        ["dithering", oY.w.Dithering],
        ["infiniteDistance", oY.w.InfiniteDistance]
      ];

    function ny(BB, OB, GB) {
      const YB = new fy({
        writeCmd: BB,
        warn: OB,
        followPack: Uy(GB, OB)
      });
      return YB.start(), YB
    }

    function Uy(BB, OB) {
      return GB => {
        let YB = () => {};
        const DB = BB((BB => {
          YB(), YB = () => {}, null !== BB ? YB = BB.subscribe((BB => {
            GB(function(BB, OB, GB) {
              if ("object" !== typeof BB || null === BB) return null;
              const YB = BB.skyBoxes;
              if ("object" !== typeof YB || null === YB) return null;
              if ("player" === OB) return YB;
              return Object.fromEntries(Object.entries(YB).filter((BB => {
                let [OB, YB] = BB;
                return !! function(BB) {
                  if ("object" !== typeof BB || null === BB) return !1;
                  return "earth" === BB.type || Object.entries(BB).every((BB => {
                    let [OB, GB] = BB;
                    return "type" === OB || ("" === (YB = GB) || null !== function(BB) {
                      var OB, GB, YB;
                      return "string" !== typeof BB ? null : null !== (OB = null === (GB = ky.exec(BB)) || void 0 === GB || null === (YB = GB.groups) || void 0 === YB ? void 0 : YB.base64) && void 0 !== OB ? OB : null
                    }(YB));
                    var YB
                  }))
                }(YB) || (GB(`Ignoring texture pack skybox ${OB}, whose faces are not all data URLs`, null), !1)
              })))
            }(BB.pack, null === BB.gameSource ? "player" : "customGame", OB))
          })) : GB(null)
        }));
        return () => {
          DB(), YB()
        }
      }
    }
    class fy {
      constructor(BB) {
        var OB, GB, YB;
        this.host = BB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Vp = !1, this.wait = null !== (OB = BB.wait) && void 0 !== OB ? OB : (BB, OB) => {
          setTimeout(OB, BB)
        }, this.loader = new oy({
          loadImage: null !== (GB = BB.loadImage) && void 0 !== GB ? GB : Py,
          NDB: null !== (YB = BB.NDB) && void 0 !== YB ? YB : Gy.s,
          sendReady: BB => {
            this.queue.push({
              kind: oY.lc.SkyImagesReady,
              payload: BB
            })
          },
          onLoadFailed: (OB, GB, YB) => {
            BB.warn(`sky image set ${OB} (${GB}) didn't load: the last sky stays`, YB)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Yy.e, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((BB => {
          this.write(null !== BB && void 0 !== BB ? BB : {})
        }))
      }
      onEvent(BB) {
        this.loader.onEvent(BB)
      }
      drain() {
        if (0 === this.queue.length) return;
        let BB = 0;
        for (; BB < this.queue.length && this.host.writeCmd(this.queue[BB].kind, 0, this.queue[BB].payload);) BB++;
        BB > 0 && this.queue.splice(0, BB)
      }
      dispose() {
        this.Vp = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(BB) {
        if (this.Vp) return;
        const OB = Ny(BB);
        if (!(this.written && (GB = this.written, YB = OB, GB.payload.length === YB.payload.length && GB.payload.every(((BB, OB) => BB === YB.payload[OB])) && GB.sets.length === YB.sets.length && GB.sets.every(((BB, OB) => {
            const GB = YB.sets[OB];
            return BB.orientation === GB.orientation && BB.urls.length === GB.urls.length && BB.urls.every(((BB, OB) => BB === GB.urls[OB]))
          }))))) {
          var GB, YB;
          for (const BB of OB.leftOut) this.host.warn(BB, null);
          this.written = OB, this.loader.reset(OB.sets), this.queue = this.queue.filter((BB => BB.kind !== oY.lc.SkyImagesReady)), this.queue.push({
            kind: oY.lc.SkyTable,
            payload: OB.payload
          })
        }
      }
    }
    const ky = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var dy = GB(3116),
      Ky = GB(3362),
      uy = GB(283),
      my = GB(182),
      Iy = GB(3121),
      Fy = GB(3125),
      iy = GB(254),
      Ly = GB(258),
      gy = GB(3244),
      ry = GB(3272),
      Xy = GB(3279),
      wy = GB(104),
      Ey = GB(3349),
      cy = GB(3347),
      hy = GB(320),
      ay = GB(41864);
    class ey {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, GQ.g)(IY.I, (BB => {
          this.onReply((0, OQ.h)(IY.I, BB), performance.now())
        }))
      }
      onFrame(BB, OB) {
        null === this.id ? this.id = BB : BB !== this.id && (this.id = BB, this.sentMs = document.hidden ? null : OB)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(BB, OB) {
        BB === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(OB - this.sentMs), this.sentMs = null)
      }
      take() {
        const BB = this.roundTripMs;
        return this.roundTripMs = null, BB
      }
      stop() {
        this.stopReplies()
      }
    }
    class Ty {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(BB, OB, GB, YB) {
        const DB = BB - this.sampled >>> 0,
          QB = OB - this.timed >>> 0,
          oB = GB - this.frameUs >>> 0,
          jB = this.primed;
        return this.sampled = BB, this.timed = OB, this.frameUs = GB, this.primed = !0, !(!jB || DB > 64 || QB > 64) && (YB && oB <= 1e6 * QB && (this.windowTimed += QB, this.windowUs += oB), YB && DB > 0)
      }
      reset() {}
      snapshotAndReset() {
        const BB = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: BB,
          submitToDoneMs: null
        }
      }
    }
    const by = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Cy {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(BB, OB) {
        const GB = Math.min(4096, this.count + OB);
        this.samples.fill(BB, this.count, GB), this.count = GB
      }
      clear() {
        this.count = 0
      }
      take() {
        const BB = this.count;
        if (this.count = 0, BB < 30) return by;
        const OB = this.samples.subarray(0, BB).sort(),
          GB = GB => OB[Math.min(BB - 1, Math.floor(GB * BB))];
        return {
          lagP50Ms: GB(.5),
          lagP90Ms: GB(.9)
        }
      }
    }
    class Hy {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Cy
      }
      onFrame(BB, OB) {
        const GB = BB.headerWord(oY.O.Pacing),
          YB = BB.headerWord(oY.O.PacingLagUs),
          DB = (GB >>> oY.fb.LagsShift) - (this.word >>> oY.fb.LagsShift) & oY.fb.CountMask,
          QB = DB > 0 ? (YB - this.lagUs >>> 0) / DB / 1e3 : 0,
          oB = this.primed && DB <= 64 && QB <= 6e4;
        this.word = GB, this.lagUs = YB, this.primed = !0, oB && OB && DB > 0 && 0 !== (GB & oY.fb.Defaulted) && this.lags.add(QB, DB)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(BB) {
        return BB ? this.lags.take() : (this.lags.clear(), by)
      }
    }
    var vy = GB(3235),
      sy = GB(34732),
      xy = GB(3249),
      ty = GB(41900),
      BJ = GB(34725),
      OJ = GB(3134),
      GJ = GB(3255);
    const YJ = {
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
      safari_27: !1,
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

    function DJ(BB) {
      return new QJ(BB)
    }
    class QJ {
      constructor(BB) {
        this.shell = BB, this.tracker = new Fy.c, this.gpu = new Ty, this.pacing = new Hy, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new ey, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new vy.e(this.tracker, ((BB, OB, GB, YB) => {
          this.shell.mainStalled(BB, OB, GB, YB)
        }), (BB => this.shell.hU(BB))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, sy.b)(BB.backend, BB.canvas, BB.adapterVendor), this.tracker.start((() => !BB.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OJ.e)("wasm", (() => {
          const {
            n: OB,
            sampleCount: GB
          } = (0, ty.i)();
          return `${BB.backend}, quality steps aim at up to ${GJ.d.target.maxFps} fps, pixel n ${OB}, msaa ${GB}`
        }), (OB => {
          OB.setLoadCounts(BB.readLoadCounts), this.frameDebug = OB
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(BB) {
        var OB;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(BB), null === (OB = this.frameDebug) || void 0 === OB || OB.animationFrame()
      }
      sendsWent(BB, OB, GB) {
        this.ping.onFrame(BB.headerWord(oY.O.PingSent), OB), this.sendsStartMs = OB, this.sendsEndMs = GB
      }
      frameRan(BB, OB, GB, YB) {
        var DB;
        this.ping.onFrame(BB.headerWord(oY.O.PingSent), GB);
        const QB = this.tracker;
        this.pacing.onFrame(BB, QB.isSampling());
        const oB = BB.headerWord(oY.O.TickUs) / 1e3 + (0, ZY.P)();
        var jB;
        (QB.yR(oB), null === (DB = this.frameDebug) || void 0 === DB || DB.wasmFrame(BB, OB, GB, YB, QB.isSampling(), oB), null !== this.game) && (null === (jB = this.frameDebug) || void 0 === jB || jB.inGame());
        const yB = this.sendsStartMs >= OB ? this.sendsEndMs - this.sendsStartMs : 0,
          JB = Math.max(0, GB - OB - oB - yB);
        if ("drawn" !== YB) return void("paced" === YB ? (this.pacedCpuMs += JB, this.mainStall.paced()) : "skipped" === YB && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(OB), QB.onFrameStart(OB);
        this.gpu.onFrame(BB.headerWord(oY.O.GpuSampled), BB.headerWord(oY.O.GpuTimed), BB.headerWord(oY.O.GpuFrameUs), QB.isSampling()) && QB.onGpuSampleStarted(), QB.onFrameCpu(JB + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(OB)
      }
      framePaced() {
        var BB;
        this.mainStall.paced(), null === (BB = this.frameDebug) || void 0 === BB || BB.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const BB of this.timers) clearInterval(BB);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const BB = this.shell.joinedGame();
        if (BB !== this.game) {
          var OB;
          if (this.game = BB, null !== BB) null === (OB = this.frameDebug) || void 0 === OB || OB.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== BB
      }
      countFpsFrame(BB) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = BB
        }
        this.fpsFrames++;
        const OB = BB - this.fpsSpanStartMs;
        if (!(OB < Xy.b)) {
          if (!document.hidden) {
            const BB = 1e3 * this.fpsFrames / OB;
            this.firstSpanFps ??= BB, this.initialFps = this.firstSpanFps, this.fpsOverTime = BB
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = BB
        }
      }
      flush() {
        const BB = this.followGame(),
          {
            cpuFrameMs: OB,
            refreshHz: GB,
            cpuBottleneck: DB,
            frameIntervalCv: QB,
            ...oB
          } = this.tracker.snapshotAndReset(),
          jB = this.shell.inGame(),
          yB = jB && this.inGameAtLastFlush,
          JB = yB ? oB : (0, Iy.e)(oB),
          MB = this.pacing.snapshotAndReset(yB);
        if (this.inGameAtLastFlush = jB, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !BB || !this.shell.canSend()) return;
        const PB = performance.now(),
          lB = (0, ry.t)((0, ry.q)(PB), this.unsentPage),
          qB = function(BB, OB, GB, DB, QB, oB, jB, yB) {
            var JB, MB, PB, zB, lB;
            const pB = {},
              {
                canvas: qB
              } = BB,
              ZB = (0, gy.i)({
                refreshHz: OB.refreshHz,
                msaa: BB.msaa(),
                autoMsaaOff: (0, BJ.d)()
              });
            for (const NB of (0, Ky.h)()) {
              const RB = NB.name;
              let WB;
              if ((0, uy.C)(RB)) WB = (0, ry.b)(RB);
              else if ((0, ry.h)(RB)) WB = yB[RB];
              else if ((0, gy.m)(RB)) WB = ZB[RB];
              else switch (RB) {
                case "fps":
                  WB = DB;
                  break;
                case "jo":
                  WB = QB;
                  break;
                case "zo":
                  WB = (0, xy.E)((0, ty.i)().n);
                  break;
                case "po":
                  WB = Math.max(qB.width, qB.height);
                  break;
                case "qo":
                  WB = Math.min(qB.width, qB.height);
                  break;
                case "Zo":
                  WB = navigator.hardwareConcurrency || null;
                  break;
                case "Ro":
                  WB = (0, JQ.getWebGpuSupported)();
                  break;
                case "Wo":
                  WB = null === BB.fallbackReason ? null : YJ[BB.fallbackReason];
                  break;
                case "Ao":
                  WB = OB.cpuFrameMs;
                  break;
                case "Vo":
                  WB = OB.refreshHz;
                  break;
                case "Uo":
                  WB = OB.cpuBottleneck;
                  break;
                case "fo":
                  WB = OB.frameIntervalCv;
                  break;
                case "ko":
                  WB = OB.frameMs;
                  break;
                case "Ko":
                  WB = OB.tickMs;
                  break;
                case "Xo":
                  WB = OB.mainBusyShare;
                  break;
                case "wo":
                  WB = OB.mainProbeDelayMs;
                  break;
                case "uo":
                  WB = OB.longAnimationFramesPerMin;
                  break;
                case "mo":
                  WB = OB.longAnimationFrameTimeShare;
                  break;
                case "Io":
                  WB = OB.longAnimationFrameScriptShare;
                  break;
                case "Fo":
                  WB = OB.framesOver50msPerMin;
                  break;
                case "ro":
                  WB = OB.framesOver100msPerMin;
                  break;
                case "Eo":
                  WB = OB.gpuPassMs;
                  break;
                case "co":
                  WB = OB.gpuSubmitToDoneMs;
                  break;
                case "ho":
                  WB = GB.lagP50Ms;
                  break;
                case "ao":
                  WB = GB.lagP90Ms;
                  break;
                case "Qj":
                  WB = (0, dy.j)(oB);
                  break;
                case "Po":
                  WB = jB;
                  break;
                case "eo":
                case "bo":
                case "Co":
                case "Ho":
                case "vo":
                case "xo":
                case "Bj":
                case "Oj":
                case "Gj":
                case "Yj":
                case "Dj":
                case "oj":
                case "jj":
                case "yj":
                case "Jj":
                  WB = null;
                  break;
                case "nj":
                  WB = (0, JQ.getPlatformType)();
                  break;
                case "Uj":
                  WB = (0, JQ.getGpuVendor)();
                  break;
                case "fj":
                  WB = ay.e[BB.backend];
                  break;
                case "kj":
                  WB = (0, wy.d)();
                  break;
                case "dj":
                  WB = (0, JQ.getOperatingSystem)();
                  break;
                case "Kj":
                  WB = (0, JQ.getTrafficSource)();
                  break;
                case "uj":
                  WB = null !== (JB = YB.c.get("gameEntrySource")) && void 0 !== JB ? JB : my.e;
                  break;
                case "mj":
                  WB = null !== (MB = OB.frameLimiter) && void 0 !== MB ? MB : my.e;
                  break;
                case "Ij":
                  WB = (0, iy.l)();
                  break;
                case "Fj":
                  WB = null !== (PB = (0, Ly.c)()) && void 0 !== PB ? PB : my.e;
                  break;
                case "ij":
                  WB = (0, iy.d)(qB.width, qB.height);
                  break;
                case "Lj":
                  WB = (0, Ky.i)(-(new Date).getTimezoneOffset());
                  break;
                case "cj":
                  WB = null !== (zB = BB.fallbackReason) && void 0 !== zB ? zB : my.e;
                  break;
                case "ej":
                  WB = "ready";
                  break;
                case "Tj":
                  WB = (0, JQ.getSoftwareRenderer)();
                  break;
                case "rj":
                  WB = (0, Ey.d)();
                  break;
                case "Xj":
                  WB = (0, cy.e)().replayState;
                  break;
                case "wj":
                  WB = (0, cy.e)().replaySelection;
                  break;
                case "Ej":
                  WB = null !== BB.shaderPackReach() ? "true" : "false";
                  break;
                case "bj":
                  WB = null !== (lB = BB.shaderPackReach()) && void 0 !== lB && lB.sceneDepth ? "true" : "false";
                  break;
                case "Cj": {
                  const OB = BB.shaderPackReach();
                  WB = null !== OB && void 0 !== OB && OB.sunShadow ? "all" : null !== OB && void 0 !== OB && OB.airShadow ? "air" : "none";
                  break
                }
                case "Hj":
                  WB = hy.B;
                  break;
                case "Gy":
                  WB = (0, ry.j)();
                  break;
                case "gj": {
                  const OB = BB.wq();
                  WB = null === OB ? my.e : String(OB);
                  break
                }
                case "hj":
                case "aj":
                  WB = my.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${RB}`)
              }
              if (void 0 === WB) throw new Error(`Metric ${RB} has no value`);
              pB[RB] = WB
            }
            return pB
          }(this.shell, {
            cpuFrameMs: OB,
            refreshHz: GB,
            cpuBottleneck: DB,
            frameIntervalCv: QB,
            ...JB
          }, MB, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), lB);
        if (! function(BB, OB, GB) {
            return (0, YG.b)(), BB(pB.n.Send, OB, GB)
          }(this.shell.writeCmd, zB.ud, function(BB) {
            const OB = (0, wB.e)((0, oG.g)(BB)),
              GB = new Uint8Array(pB.Zd.BYTES + OB.length);
            return new DataView(GB.buffer).setUint16(0, oG.c.AnalyticsUpdate, !0), GB.set(OB, pB.Zd.BYTES), GB
          }(qB))) return this.unsentPage = lB, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, dy.f), (0, ry.p)(qB, "wasm", PB)
      }
    }
    var oJ = GB(40390);

    function jJ(BB, OB, GB) {
      const YB = new Map;
      return (0, oJ.b)(((BB, GB, YB) => OB.SM(BB, GB, YB)), ((OB, GB, DB) => {
        const QB = `${OB},${GB},${DB}`;
        return YB.has(QB) || YB.set(QB, (0, bO.c)(BB, OB, GB, DB)), YB.get(QB)
      }), GB)
    }
    var yJ = GB(40396),
      JJ = GB(41897);

    function MJ(BB) {
      const OB = null !== BB && 0 !== (pB.u.playerFlags(BB.api.apiView, 0) & pB.Id.CursorAim);
      OB !== (0, JJ.k)() && (0, JJ.B)(OB, null !== BB)
    }

    function PJ(BB) {
      return (0, mY.e)(IY.C, BB)
    }
    var zJ = GB(42045);
    const lJ = new QB.e((BB => GB(53997)(`./${BB}/${BB}Client`)));
    let pJ = null,
      qJ = null;
    async function ZJ(BB) {
      pJ ??= GB.e(32).then((() => GB(39849))).then((BB => {
        qJ = BB.createDefaultClientPlugins
      }), (BB => {
        throw pJ = null, BB
      })), await Promise.all([lJ.load(BB), pJ])
    }

    function NJ(BB) {
      BB.load(new aO(oD, new JD))
    }
    let RJ = !1;
    const WJ = new WeakMap;

    function AJ(BB) {
      try {
        BB()
      } catch (OB) {
        console.error("[bloxd-wasm-client] a session-end step failed", OB)
      }
    }

    function VJ(BB, OB) {
      ! function() {
        var BB, OB;
        YD.Howler.volume();
        const GB = YD.Howler;
        null === (BB = GB._autoResume) || void 0 === BB || BB.call(GB), null === (OB = GB._autoSuspend) || void 0 === OB || OB.call(GB)
      }();
      const GB = new AB(OB.core, OB.memory, OB.audio);
      let QB;
      try {
        QB = new mD(GB, OB.options)
      } catch (zB) {
        return BB.crash(FD.x, zB), null
      }(0, yB.h)(ID(GB, QB));
      const MB = new ej({
        running: BB,
        api: GB,
        core: OB.core,
        memory: OB.memory,
        staleOr: OB.staleOr,
        reportFault: OB.reportReplayFault,
        options: OB.options,
        sessionInfo: OB.sessionInfo,
        replayShaderPack: OB.replayShaderPack
      });
      (0, ZY.E)();
      const PB = new sY({
        api: GB,
        tables: QB,
        sessionInfo: OB.sessionInfo,
        gameFactory: BB => lJ.loadedFactory(BB),
        defaultPlugins: (BB, OB, GB, YB) => {
          if (null === qJ) throw new Error("The default plugins started before they loaded");
          return qJ(BB, OB, GB, YB)
        },
        serverOptions: OB.options,
        onNetEvent: BB => {
          MB.netEvent(BB), OB.onNetEvent(BB)
        },
        setLocalOptions: OB => {
          bj(BB, {
            changes: OB,
            reset: !1
          })
        },
        playSound: (BB, GB, YB, DB, QB, oB, jB) => OB.audio.playGame(BB, GB, YB, DB, QB, oB, jB),
        preloadSounds: BB => {
          OB.audio.preload(function(BB) {
            const OB = [];
            for (const GB of BB) {
              const BB = FO(GB);
              if (null !== BB)
                for (let GB = BB[0]; GB < BB[0] + BB[1]; GB++) OB.push(GB)
            }
            return OB
          }(BB))
        },
        onSessionEnd: () => {
          AJ(DB.o), AJ(ZD), AJ((() => {
            YB.c.set({
              openInGameMenuName: null
            })
          })), AJ((() => {
            OB.audio.endSession()
          }))
        },
        beforeWrite: OB.beforeWrite,
        beforeOp: OB.beforeOp,
        cameraScreen: qD,
        showCameraFacing: ND,
        reportCameraFault: OB.reportCameraFault,
        onEventOverflow: OB.onEventOverflow,
        screenBandY: jB.g,
        replayEntities: MB.entityHooks,
        hasPackModel: OB.hasPackModel
      });
      return PB.attach(BB), WJ.set(PB, MB), OD(PB.items, OB.audio),
        function(BB) {
          BB.setClientFreeCameraGrant("isDev", !1);
          const OB = OB => {
            BB.setClientFreeCameraGrant("hasDeveloperRank", OB.playerHasRank("developer"))
          };
          (0, oB.p)("userContextUpdated", OB)
        }(PB), RJ || (RJ = !0, (0, oB.p)("appManagerUpdated|openInGameMenuName", (BB => {
          !BB && (0, JB.n)().includes(JB.b) && (0, JB.o)(JB.b)
        }))), PB
    }

    function SJ(BB) {
      try {
        BB.closeGame()
      } finally {
        var OB;
        null === (OB = WJ.get(BB)) || void 0 === OB || OB.stop(), WJ.delete(BB)
      }
    }
  },
  36945: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => ZB,
      f: () => EB,
      h: () => uB,
      i: () => FB
    });
    var YB = GB(36977),
      DB = GB(36948),
      QB = GB(36954),
      oB = GB(36961);

    function jB(BB, OB, GB) {
      const YB = "object" === typeof BB && null !== BB ? BB : {},
        DB = function(BB, OB, GB) {
          if (!Array.isArray(BB) || 0 === BB.length) return [];
          const YB = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const jB of (0, oB.h)(BB, oB.d.DEFAULT_FONT_SIZE, GB)) {
            if ("text" !== jB.kind) {
              YB[YB.length - 1].items.push({
                content: jB,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === jB.text.length) continue;
            const BB = YB[YB.length - 1].items.reduce(((BB, OB) => BB + ("text" === OB.content.kind ? (0, QB.c)(OB.content.text) : OB.chars)), 0);
            (0, QB.d)(jB.text, BB).forEach(((BB, OB) => {
              OB > 0 && YB.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), BB.length > 0 && YB[YB.length - 1].items.push({
                content: {
                  ...jB,
                  text: BB
                },
                chars: BB.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let DB = oB.d.VERTICAL_PADDING / 2;
          for (const QB of YB) {
            if (0 === QB.items.length) continue;
            const {
              width: BB,
              height: YB,
              sizes: jB
            } = (0, oB.f)(QB.items.map((BB => BB.content)), OB, GB);
            QB.items.forEach(((BB, OB) => {
              BB.size = jB[OB]
            })), QB.width = BB, QB.height = YB, QB.y = DB, DB += YB + oB.d.LINE_SPACING
          }
          return YB
        }(YB.content, OB, GB);
      let jB = 0,
        yB = oB.d.VERTICAL_PADDING,
        JB = 0;
      for (const QB of DB) {
        jB = Math.max(jB, QB.width + 2 * oB.d.HORIZONTAL_PADDING), yB += QB.height + oB.d.LINE_SPACING;
        for (const BB of QB.items) JB += BB.chars
      }
      const MB = "string" === typeof YB.backgroundColor ? YB.backgroundColor : "#22283b";
      return {
        width: jB,
        height: yB,
        chars: JB,
        draw: (BB, OB) => {
          const YB = [];
          if (BB.fillStyle = MB, BB.fillRect(0, 0, jB, yB), null === OB)
            for (const QB of DB) QB.items.length > 0 && (0, oB.p)(QB.items.map((BB => BB.content)), 0, QB.y, QB.height, BB, GB, YB);
          else {
            let QB = 0;
            for (const jB of DB)
              for (const DB of jB.items) {
                if (QB >= OB) break;
                const yB = "text" === DB.content.kind ? {
                  ...DB.content,
                  text: DB.content.text.substring(0, OB - QB)
                } : DB.content;
                (0, oB.m)(yB, DB.size.x, jB.y, jB.height, BB, GB, YB, DB.size.width), QB += DB.chars
              }
          }(0, oB.l)(YB, BB)
        }
      }
    }
    var yB = GB(36963),
      JB = GB(36972);
    const MB = 256,
      PB = 1024,
      zB = {
        width: 1,
        height: 7 / 8
      };
    var lB = GB(36985);
    const pB = {
      leaderboard: ""
    };
    var qB = GB(36991);
    const ZB = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      NB = 2048,
      RB = 256,
      WB = 10,
      AB = 4,
      VB = 65536,
      SB = new TextDecoder;
    let nB = qB.s,
      UB = -1;
    const fB = new Map,
      kB = new Map;
    let dB = 0;
    const KB = new TextEncoder;

    function uB(BB, OB) {
      const GB = KB.encode(JSON.stringify(OB)),
        YB = new Uint8Array(GB.length + 1);
      return YB[0] = BB, YB.set(GB, 1), YB
    }
    const mB = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        IM: null,
        hideNameSeed: null
      },
      IB = [uB(ZB.Nametag, mB), uB(ZB.Nametag, {
        ...mB,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), uB(ZB.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...YB.b.map(((BB, OB) => uB(ZB.Board, {
        shared: {
          text: "Ag",
          textSize: OB
        },
        w: 0,
        h: 0
      })))];

    function FB(BB) {
      qB.k.load().then((() => {
        if (BB()) return;
        const OB = (0, DB.f)(1, 1, {
          willReadFrequently: !0
        });
        var GB;
        OB && (GB = OB.canvas, IB.map((BB => EB(BB, GB))))
      }))
    }
    let iB = qB.y;

    function LB() {
      fB.clear(), kB.clear()
    }

    function gB(BB, OB) {
      const GB = BB.get(OB);
      return void 0 !== GB && (BB.delete(OB), BB.set(OB, GB)), GB
    }

    function rB(BB, OB, GB) {
      BB.set(OB, GB), BB.size > RB && BB.delete(BB.keys().next().value)
    }

    function XB(BB, OB, GB) {
      if (BB === ZB.Nametag) {
        let BB = gB(fB, OB);
        return void 0 === BB && (BB = (0, yB.d)(JSON.parse(OB), GB, nB), rB(fB, OB, BB)), BB
      }
      if (BB === ZB.MultilineText) {
        var DB;
        const BB = JSON.parse(OB),
          YB = JSON.stringify(null !== (DB = BB.box) && void 0 !== DB ? DB : null),
          QB = "number" === typeof BB.shown ? BB.shown : null;
        let oB = gB(kB, YB);
        void 0 === oB && (oB = jB(BB.box, GB, nB), rB(kB, YB, oB));
        const yB = null === QB ? null : Math.min(Math.max(0, Math.floor(QB)), oB.chars),
          JB = oB;
        return {
          width: JB.width,
          height: JB.height,
          draw: BB => {
            JB.draw(BB, yB)
          }
        }
      }
      if (BB === ZB.Board) return function(BB, OB) {
        var GB;
        if (!OB.canSeePlayerWrittenText) return null;
        const {
          shared: DB,
          w: QB = 0,
          h: oB = 0
        } = BB, jB = !QB;
        let yB;
        if (jB) {
          var lB, pB;
          yB = null !== (lB = null === DB || void 0 === DB || null === (pB = DB.text) || void 0 === pB ? void 0 : pB.toString()) && void 0 !== lB ? lB : ""
        } else {
          if ("string" !== typeof(null === DB || void 0 === DB ? void 0 : DB.text)) return null;
          yB = DB.text
        }
        if ("" === yB.trim()) return null;
        const qB = null !== (GB = null === DB || void 0 === DB ? void 0 : DB.textSize) && void 0 !== GB ? GB : 0,
          ZB = YB.b[qB].ingameFontSize;
        let NB = zB,
          RB = MB;
        jB || (yB = (0, YB.m)(yB, qB, QB, oB), NB = (0, YB.t)(QB, oB), RB = Math.min(MB, PB / Math.max(NB.width, NB.height)));
        const WB = Math.round(RB * NB.width),
          AB = Math.round(RB * NB.height),
          VB = RB / MB;
        return {
          width: WB,
          height: AB,
          draw: BB => {
            JB.c.fontSize = ZB * VB, JB.c.fontWeight = "bold", JB.c.font = "'Jetbrains Mono', monospace", JB.c.drawText(BB, yB, 0, (-10 - 7 * qB) * VB, WB, AB)
          }
        }
      }(JSON.parse(OB), nB);
      if (BB === ZB.Leaderboard) return function(BB, OB, GB) {
        var YB;
        const DB = (0, lB.i)(BB.opts, pB),
          QB = (0, lB.f)(DB, GB),
          oB = {
            top: (0, lB.h)(DB, (0, lB.l)(BB.top)),
            around: null !== (YB = BB.around) && void 0 !== YB ? YB : null,
            showPlayerText: OB.canSeePlayerWrittenText,
            localPlayerDbId: OB.localPlayerDbId
          };
        return {
          width: QB.pixelWidth,
          height: QB.pixelHeight,
          draw: BB => {
            const {
              a: OB,
              d: GB
            } = BB.getTransform();
            (0, lB.d)(BB, Math.round(QB.pixelWidth * OB), Math.round(QB.pixelHeight * GB), QB, DB, oB)
          }
        }
      }(JSON.parse(OB), nB, NB);
      throw new Error(`unknown text plane kind ${BB}`)
    }
    const wB = 2 ** Math.floor(Math.log2(NB));

    function EB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (BB.length < 2) return [0, 0];
        const QB = (0, DB.e)(OB);
        if (!QB) return [0, 0];
        const oB = iB();
        oB !== UB && (UB = oB, LB());
        const [jB] = BB, yB = SB.decode(BB.subarray(1));
        let JB;
        jB !== ZB.Board && jB !== ZB.Leaderboard || !nB.canSeePlayerWrittenText || nB.glyphsShown(yB), QB.save();
        try {
          JB = XB(jB, yB, QB)
        } finally {
          QB.restore()
        }
        if (null === JB || !(JB.width > 0 && JB.height > 0)) return [0, 0];
        const MB = Math.min(1, NB / JB.width, NB / JB.height),
          PB = BB => YB ? function(BB) {
            const OB = 2 ** Math.ceil(Math.log2(BB));
            return Math.min(wB, OB - BB > BB - OB / 2 ? OB / 2 : OB)
          }(BB) : Math.min(NB, Math.ceil(BB * MB)),
          [zB, lB] = [PB(JB.width), PB(JB.height)];
        ! function(BB, OB, GB, YB, DB) {
          const QB = Math.max(BB.width, GB),
            oB = Math.max(BB.height, YB),
            jB = DB || QB * oB > Math.max(AB * GB * YB, VB),
            [yB, JB] = jB ? [GB, YB] : [QB, oB];
          yB === BB.width && JB === BB.height ? OB.clearRect(0, 0, yB, JB) : (BB.width = yB, BB.height = JB)
        }(OB, QB, zB, lB, GB), QB.save();
        try {
          const [BB, OB] = YB ? [zB / JB.width, lB / JB.height] : [MB, MB];
          1 === BB && 1 === OB || QB.scale(BB, OB), JB.draw(QB)
        } finally {
          QB.restore()
        }
        return [zB, lB]
      } catch (QB) {
        ! function(BB, OB) {
          dB < WB && (dB++, console.warn(`[bloxd-wasm-client] ${BB}`, OB))
        }("could not raster a text plane", QB);
        try {
          OB.width = 1
        } catch {}
        return [0, 0]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);