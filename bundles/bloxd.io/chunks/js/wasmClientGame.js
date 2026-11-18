export const id = 49;
export const ids = [49];
export const modules = {
  41293: (BB, TB, dB) => {
    var VB = {
      "./bedwars/bedwarsClient": [38203, 9],
      "./bridgeBattle/bridgeBattleClient": [38206, 10],
      "./buildAFactory2/buildAFactory2Client": [37439, 67, 66, 65, 207, 224, 11],
      "./classic/classicClient": [38208, 12],
      "./clutch/clutchClient": [38216, 13],
      "./containmentBreach/containmentBreachClient": [38224, 14],
      "./cooking/cookingClient": [38345, 15],
      "./defusal/defusalClient": [38348, 16],
      "./frontline/frontlineClient": [38352, 67, 66, 65, 17],
      "./goalRush/goalRushClient": [38354, 18],
      "./luckyBedwars/luckyBedwarsClient": [38359, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38368, 20],
      "./oneBlock/oneBlockClient": [38371, 21],
      "./plots/plotsClient": [38377, 205, 227, 22],
      "./pvpCiv/pvpCivClient": [38446, 23],
      "./skyIslands/skyIslandsClient": [38450, 24],
      "./skyblock/skyblockClient": [37474, 67, 207, 178, 25],
      "./tsunami/tsunamiClient": [38457, 26]
    };

    function yB(BB) {
      if (!dB.o(VB, BB)) return Promise.resolve().then((() => {
        var TB = new Error("Cannot find module '" + BB + "'");
        throw TB.code = "MODULE_NOT_FOUND", TB
      }));
      var TB = VB[BB],
        yB = TB[0];
      return Promise.all(TB.slice(1).map(dB.e)).then((() => dB(yB)))
    }
    yB.keys = () => Object.keys(VB), yB.id = 41293, BB.exports = yB
  },
  37943: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      h: () => yB
    });
    var VB = dB(24);

    function yB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function pB(BB, TB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([dB.e(99), dB.e(100), dB.e(95), dB.e(97), dB.e(195)]).then((() => dB(40448))).then((dB => {
        let {
          runClientGameMessage: VB
        } = dB;
        VB(BB, TB)
      })).catch((TB => {
        console.error(`Game message ${BB} failed`, TB)
      })) : VB.h.yH("showPetUi", TB) : VB.h.yH("refetchCode")
    }
  },
  41274: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      d: () => yB
    });
    const VB = ["recording", "freecam", "keyframe"];

    function yB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  8547: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => JB,
      d: () => YB
    });
    var VB = dB(21);
    const yB = 24,
      pB = "farNametags",
      lB = 1e5;

    function JB() {
      var BB;
      return null === (BB = VB.d.get("showDistantNametags")) || void 0 === BB || BB
    }

    function YB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(pB),
          TB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(TB) && TB >= 0 ? Math.min(TB, lB) : null
      }()) && void 0 !== BB ? BB : JB() ? 0 : yB
    }
  },
  41265: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      blockIdOf: () => rY.b,
      clearWasmCameraScreen: () => eV,
      creativeItemIds: () => VV.creativeItemIds,
      decodeMapSettings: () => SY,
      drainTextRerasters: () => IJ.c,
      enchantmentPerksOf: () => VV.enchantmentPerksOf,
      endGameHost: () => GY,
      followCursorAim: () => cY,
      followMenuPrefs: () => Ay,
      loadAudio: () => ZY,
      loadClientGame: () => aY,
      loadTextIcons: () => IJ.e,
      rasterText: () => rJ.d,
      readBoardToEdit: () => KY,
      setTextHost: () => IJ.i,
      setTextLocalPlayer: () => IJ.l,
      showInCreativeInvenOf: () => VV.showInCreativeInvenOf,
      startGameHost: () => CY,
      startShellAnalytics: () => wY,
      startSkyFeed: () => BY,
      textChanged: () => IJ.o,
      warmText: () => rJ.f,
      wasmCameraScreen: () => nV
    });
    dB(35502);
    var VB = dB(21),
      yB = dB(35780),
      pB = dB(38093),
      lB = dB(24),
      JB = dB(2876),
      YB = dB(35772),
      gB = dB(1173),
      oB = dB(560),
      kB = dB(37169),
      LB = dB(4186),
      OB = dB(39376),
      DB = dB(39310);
    const uB = DB.Kb / 4,
      HB = DB.u.PlaySound,
      EB = DB.u.SoundReset,
      vB = LB.K.ReplayFailed,
      mB = LB.K.RecorderEvent;
    class iB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = BB, this.memory = TB, this.audio = dB, this.serverIds = new Int32Array(256).fill(DB.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(DB.B.BYTES)), this.renderPtr = 0, this.Kk = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new DB.cb(BB, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.IyB(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(BB, TB) {
        const dB = this.eventView();
        return new Uint8Array(dB.buffer, dB.byteOffset + BB, TB)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return DB.B.localId(this.apiView, 0)
      }
      localDeaths() {
        return DB.B.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const BB = this.apiView,
          TB = DB.B.entRenderPtr(BB, 0),
          dB = DB.B.entVisPtr(BB, 0),
          VB = DB.B.entCapacity(BB, 0);
        if (TB !== this.renderPtr || dB !== this.visPtr || VB !== this.Kk || this.renderBuffer !== this.buffer) {
          this.renderPtr = TB, this.visPtr = dB, this.Kk = VB, this.renderBuffer = this.buffer;
          const BB = this.memoryView(Float32Array, TB, VB * uB, "the render array"),
            yB = this.memoryView(Uint8Array, dB, VB, "the visibility array");
          this.renderCapacity = BB && yB ? VB : 0, this.render = BB && yB ? BB : new Float32Array(0), this.vis = BB && yB ? yB : new Uint8Array(0)
        }
      }
      memoryView(BB, TB, dB, VB) {
        try {
          return (0, OB.p)(BB, this.memory().buffer, TB, dB, VB)
        } catch (yB) {
          return this.keepCorruption(yB), null
        }
      }
      memoryData(BB, TB, dB, VB) {
        try {
          return (0, OB.c)(this.memory().buffer, BB, TB, dB, VB)
        } catch (yB) {
          return this.keepCorruption(yB), null
        }
      }
      reportCorruption(BB) {
        this.keepCorruption(new OB.b(BB))
      }
      keepCorruption(BB) {
        if (!(BB instanceof OB.b)) throw BB;
        this.corruption ??= BB
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(BB, TB, dB) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: VB,
          len: yB
        } = BB;
        this.eventsPtr = VB, this.eventsLen = yB, this.eventsBuffer = null;
        const pB = this.eventView();
        for (let gB = 0; gB < yB;) {
          const BB = pB.getUint32(gB, !0),
            dB = 65535 & BB,
            VB = BB >>> 16,
            yB = gB + LB.I;
          if (dB === DB.u.EntitySpawned) {
            var lB;
            if (VB !== DB.Pb.BYTES) throw MB(dB, gB, VB);
            const BB = DB.Pb.serverId(pB, yB);
            this.spawned(BB, DB.Pb.index(pB, yB), DB.Pb.kind(pB, yB)), null === (lB = TB.entityAdded) || void 0 === lB || lB.call(TB, BB)
          } else if ((dB === DB.u.ChunkSlot || dB === DB.u.EntityInfoChanged) && !(0, DB.fe)(dB, pB, yB, VB, TB)) throw MB(dB, gB, VB);
          gB = yB + (0, LB.je)(VB)
        }
        try {
          var JB;
          null === (JB = TB.afterPrescan) || void 0 === JB || JB.call(TB), this.throwCorruption(), !dB() && this.dispatch(BB, TB, dB) && (this.throwCorruption(), this.applyListener(), TB.afterWalk(BB.kind)), this.throwCorruption()
        } catch (YB) {
          throw YB instanceof OB.b && (this.corruption ??= YB), YB
        } finally {
          dB() || null !== this.corruption || this.applyDespawns(yB, TB)
        }
      }
      applyDespawns(BB, TB) {
        const dB = this.eventView();
        for (let yB = 0; yB < BB;) {
          const BB = dB.getUint32(yB, !0),
            pB = yB + LB.I;
          if ((65535 & BB) === DB.u.EntityDespawned && BB >>> 16 === DB.Pb.BYTES) {
            const BB = DB.Pb.serverId(dB, pB);
            var VB;
            if (this.despawned(BB, DB.Pb.index(dB, pB))) null === (VB = TB.entityRemoved) || void 0 === VB || VB.call(TB, BB)
          }
          yB = pB + (0, LB.je)(BB >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(BB, TB, dB) {
        const {
          len: VB,
          net: yB,
          netOffsets: pB
        } = BB;
        let lB = this.eventView(),
          JB = 0;
        for (let tB = 0; tB < VB;) {
          const BB = lB.getUint32(tB, !0),
            VB = 65535 & BB,
            fB = BB >>> 16,
            zB = tB + LB.I;
          let wB = !1;
          if (JB < yB.length && pB[JB] === tB) TB.netEvent(yB[JB]), JB++, wB = !0;
          else if (VB === LB.K.LocalPlayerBound) {
            var YB;
            if (fB !== LB.Bb) throw MB(VB, tB, fB);
            null === (YB = TB.localPlayerBound) || void 0 === YB || YB.call(TB, lB.getInt32(zB, !0)), wB = !0
          } else if (VB === LB.K.LocalHurt) {
            var gB;
            if (fB !== LB.yb) throw MB(VB, tB, fB);
            null === (gB = TB.localHurt) || void 0 === gB || gB.call(TB, lB.getInt32(zB, !0), lB.getFloat32(zB + 4, !0), lB.getUint32(zB + 8, !0)), wB = !0
          } else if (VB === LB.K.AttackHit) {
            var oB;
            if (fB !== LB.b) throw MB(VB, tB, fB);
            const BB = lB.getFloat32(zB, !0),
              dB = lB.getFloat32(zB + 4, !0),
              yB = lB.getFloat32(zB + 8, !0),
              pB = lB.getUint32(zB + 12, !0);
            null === (oB = TB.attackHit) || void 0 === oB || oB.call(TB, BB, dB, yB, 0 !== (pB & LB.i.Crit), 0 !== (pB & LB.i.HitSelf))
          } else if (VB === LB.K.PhysicsType) {
            var kB;
            if (fB !== LB.Yb) throw MB(VB, tB, fB);
            null === (kB = TB.physicsType) || void 0 === kB || kB.call(TB, lB.getUint32(zB, !0), lB.getInt32(zB + 4, !0)), wB = !0
          } else if (VB === LB.K.VehicleEffect) {
            var OB;
            const BB = sB(lB, zB, fB);
            if (null === BB) throw MB(VB, tB, fB);
            null === (OB = TB.vehicleEffect) || void 0 === OB || OB.call(TB, BB.op, BB.name, BB.icon, BB.level, BB.durationMs), wB = !0
          } else if (VB === LB.K.ZoomChanged) {
            var uB;
            if (fB !== LB.Pd) throw MB(VB, tB, fB);
            null === (uB = TB.zoomChanged) || void 0 === uB || uB.call(TB, lB.getFloat32(zB, !0), lB.getUint8(zB + 4)), wB = !0
          } else if (VB === LB.K.ZoomDisabled) {
            var iB;
            if (0 !== fB) throw MB(VB, tB, fB);
            null === (iB = TB.zoomDisabled) || void 0 === iB || iB.call(TB), wB = !0
          } else if (VB === LB.K.GameCamera) {
            var NB;
            null === (NB = TB.gameCamera) || void 0 === NB || NB.call(TB, new Uint8Array(lB.buffer, lB.byteOffset + zB, fB).slice()), wB = !0
          } else if (VB === DB.u.ChunkSlot || VB === DB.u.EntityInfoChanged);
          else if (VB >= HB && VB <= EB) {
            if (this.audio && !this.audio.onAudioEvent(VB, lB, zB, fB)) throw MB(VB, tB, fB)
          } else if (VB >= vB && VB <= mB) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(VB, lB, zB, fB)) throw MB(VB, tB, fB);
              wB = !0
            }
          } else if (VB >= DB.kd && VB <= DB.ld && VB !== LB.K.EnvLighting) {
            if (!(0, DB.fe)(VB, lB, zB, fB, TB)) throw MB(VB, tB, fB);
            wB = !0
          }
          if (wB) {
            if (dB()) return !1;
            lB = this.eventView()
          }
          tB = zB + (0, LB.je)(fB)
        }
        return !dB()
      }
      applyListener() {
        var BB;
        if (!this.audio) return;
        const TB = DB.B.audioViewPtr(this.apiView, 0),
          dB = this.memory().buffer;
        let VB = this.audioView;
        (null === (BB = VB) || void 0 === BB ? void 0 : BB.buffer) === dB && VB.byteOffset === TB || (VB = (0, OB.c)(dB, TB, DB.D.BYTES, 8, "the audio view"), this.audioView = VB), VB && this.audio.applyListener(VB)
      }
      indexOf(BB) {
        return this.indexById.get("number" === typeof BB ? BB : +BB)
      }
      isLocal(BB) {
        return BB !== DB.ad && BB === DB.B.localId(this.apiView, 0)
      }
      Dv(BB) {
        const TB = [0, 0, 0];
        return this.readPosition("number" === typeof BB ? BB : +BB, TB) ? TB : null
      }
      readPosition(BB, TB) {
        const dB = this.apiView;
        if (void 0 !== this.indexById.get(BB) && this.isLocal(BB)) {
          for (let BB = 0; BB < 3; BB++) TB[BB] = DB.B.localPos(dB, 0, BB);
          return !0
        }
        return this.readDrawnPosition(BB, TB)
      }
      readDrawnPosition(BB, TB) {
        const dB = this.apiView,
          VB = this.indexById.get(BB);
        if (void 0 === VB || VB >= this.renderCapacity) return TB[0] = TB[1] = TB[2] = NaN, !1;
        const yB = VB * uB;
        for (let pB = 0; pB < 3; pB++) TB[pB] = this.render[yB + pB] + DB.B.origin(dB, 0, pB);
        return !0
      }
      checkValid(BB) {
        return void 0 !== this.indexOf(BB)
      }
      isAlive(BB) {
        const TB = this.indexOf(BB);
        if (void 0 === TB) return null;
        if (this.ensureViews(), TB >= this.renderCapacity) return null;
        const dB = this.vis[TB];
        return 0 === dB ? null : 0 !== (dB & DB.de.Alive)
      }
      getEntityType(BB) {
        const TB = this.indexOf(BB);
        return void 0 === TB ? this.isLocal("number" === typeof BB ? BB : +BB) ? "Player" : null : tB(this.kinds[TB])
      }
      spawned(BB, TB, dB) {
        if (TB >= 1048576) throw new OB.b(`entity ${BB} spawned at index ${TB}`);
        this.ensureIndex(TB), this.serverIds[TB] === BB && null !== this.idStr[TB] || (this.idStr[TB] = String(BB)), this.serverIds[TB] = BB, this.kinds[TB] = dB, this.indexById.set(BB, TB)
      }
      despawned(BB, TB) {
        let dB = !1;
        return this.indexById.get(BB) === TB && (this.indexById.delete(BB), dB = !0), TB < this.serverIds.length && this.serverIds[TB] === BB && (this.serverIds[TB] = DB.ad, this.kinds[TB] = 0, this.idStr[TB] = null), dB
      }
      ensureIndex(BB) {
        const TB = this.serverIds.length;
        if (BB < TB) return;
        let dB = 2 * TB;
        for (; dB <= BB;) dB *= 2;
        const VB = new Int32Array(dB).fill(DB.ad);
        VB.set(this.serverIds), this.serverIds = VB;
        const yB = new Uint16Array(dB);
        yB.set(this.kinds), this.kinds = yB;
        for (let pB = TB; pB < dB; pB++) this.idStr.push(null)
      }
      eventView() {
        const BB = this.memory().buffer;
        return BB !== this.eventsBuffer && (this.eventsBuffer = BB, this.events = new DataView(BB, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const BB = this.memory().buffer;
        this.buffer = BB, this.viewPtr < 0 && (this.viewPtr = this.core.cyB()), this.view = new DataView(BB, this.viewPtr, DB.B.BYTES), this.rereadDirectory()
      }
    }

    function NB(BB) {
      return BB >>> DB.c === DB.y.Item
    }

    function tB(BB) {
      var TB, dB;
      const VB = BB & DB.g;
      switch (BB >>> DB.c) {
        case DB.y.Lifeform:
          return null !== (TB = oB.l[VB]) && void 0 !== TB ? TB : null;
        case DB.y.Throwable:
          return null !== (dB = kB.i[VB]) && void 0 !== dB ? dB : null;
        case DB.y.Mesh:
          return "Mesh";
        case DB.y.Audio:
          return "AudioEntity";
        case DB.y.Item:
          return "Item";
        default:
          return null
      }
    }
    const fB = new TextDecoder;

    function sB(BB, TB, dB) {
      if (dB < LB.xd.HEAD_BYTES) return null;
      const VB = BB.getUint32(TB, !0),
        yB = BB.getUint32(TB + 20, !0),
        pB = BB.getUint32(TB + 24, !0),
        lB = LB.xd.HEAD_BYTES + (0, LB.je)(yB);
      if (VB !== LB.xd.UPDATE && VB !== LB.xd.REMOVE || yB > dB || lB + pB > dB) return null;
      const JB = (dB, VB) => fB.decode(new Uint8Array(BB.buffer, BB.byteOffset + TB + dB, VB)),
        YB = BB.getFloat64(TB + 12, !0);
      return {
        op: VB,
        level: BB.getFloat64(TB + 4, !0),
        durationMs: Number.isNaN(YB) ? null : YB,
        name: JB(LB.xd.HEAD_BYTES, yB),
        icon: JB(lB, pB)
      }
    }

    function MB(BB, TB, dB) {
      return new OB.b(`event ${BB} at ${TB} of ${dB} bytes`)
    }
    var zB = dB(279),
      wB = dB(1105),
      UB = dB(37943),
      FB = dB(1703),
      KB = dB(39428),
      rB = dB(1652),
      IB = dB(38106),
      cB = dB(38140),
      SB = dB(38117),
      PB = dB(39356),
      QB = dB(2109),
      RB = dB(38102),
      aB = dB(38134);
    const ZB = Math.max(DB.Db.BYTES, DB.ub.BYTES, DB.xb.BYTES);

    function XB(BB) {
      if (!(0, aB.f)(BB)) return null;
      const TB = Number(BB);
      return (0 | TB) === TB ? TB : null
    }
    class WB {
      constructor(BB) {
        this.api = BB, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, RB.l)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.My = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = DB.ad, this.localName = String(DB.ad), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.My = null;
        const BB = this.api.queries.directorView() >= DB.Db.BYTES ? this.scratchView() : null;
        null !== BB && (this.defaultFov = (0, rB.x)(DB.Db.fov(BB, 0)), this.baseFov = (0, rB.x)(DB.Db.baseFov(BB, 0)), this.aspect = DB.Db.aspect(BB, 0), this.bodyHeading = DB.Db.bodyHeading(BB, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(BB) {
        this.viewHeading = BB
      }
      get localPlayerId() {
        const BB = DB.B.localId(this.api.apiView, 0);
        return BB !== this.localId && (this.localId = BB, this.localName = String(BB)), this.localName
      }
      getEntityPosition(BB) {
        return this.readEntity(BB) ? this.entityFeet : null
      }
      getEntityAimPoint(BB) {
        return this.readEntity(BB) ? this.entityAim : null
      }
      getEntityHeading(BB) {
        const TB = XB(BB);
        if (null === TB) return null;
        const dB = DB.B.localId(this.api.apiView, 0);
        return TB === dB && dB !== DB.ad ? this.viewHeading : this.readEntity(BB) ? this.entityHeading : null
      }
      raycastTerrain(BB, TB, dB) {
        const VB = this.api.queries.cameraSweep(BB[0], BB[1], BB[2], TB[0], TB[1], TB[2], dB);
        return VB < dB - 1e-6 ? VB : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const BB = this.defaultPose;
        BB.fov = this.defaultFov;
        const TB = this.api.queries.directorDefaultPose() >= DB.ub.BYTES ? this.scratchView() : null;
        if (null === TB) return BB;
        for (let dB = 0; dB < 3; dB++) BB.position[dB] = DB.ub.eye(TB, 0, dB);
        return BB.heading = DB.ub.heading(TB, 0), BB.pitch = DB.ub.pitch(TB, 0), BB
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
        const TB = XB(BB);
        if (null === TB) return !1;
        if (TB === this.My) return this.entityLive;
        this.My = TB;
        const dB = this.api.queries.directorEntity(TB) >= DB.xb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== dB, null === dB) return !1;
        for (let VB = 0; VB < 3; VB++) this.entityFeet[VB] = DB.xb.feet(dB, 0, VB), this.entityAim[VB] = this.entityFeet[VB];
        return this.entityAim[1] += DB.xb.eyeHeight(dB, 0), this.entityHeading = DB.xb.heading(dB, 0), !0
      }
      scratchView() {
        const BB = this.api.scratch(),
          TB = this.api.memory().buffer,
          dB = this.scratch;
        return null !== dB && dB.buffer === TB && dB.byteOffset === BB ? dB : (this.scratch = this.api.memoryData(BB, ZB, 8, "the director's record"), this.scratch)
      }
    }
    const hB = {
        mode: "default"
      },
      CB = {
        show: () => {},
        clear: () => {}
      };

    function GB() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class qB {
      constructor(BB) {
        this.options = BB, this.JL = void 0, this.director = void 0, this.latest = hB, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          pU: 0,
          kU: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.nY = new Int32Array(3 * DB.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * DB.Md), this.JL = new WB(BB.api), this.director = new SB.b(this.JL)
      }
      settingsChanged(BB) {
        let TB = hB;
        if (BB.length > 0) try {
          TB = (0, PB.c)(BB)
        } catch {}
        this.latest = TB, this.pending = TB
      }
      call(BB, TB, dB, VB, yB, pB) {
        var lB, JB;
        let YB;
        this.holding = !1;
        try {
          YB = this.answer(BB, TB, dB, VB, yB, pB)
        } catch (LB) {
          var gB, oB;
          throw this.answeredPose = !1, null === (gB = (oB = this.options).showFacing) || void 0 === gB || gB.call(oB, null), LB
        }
        const kB = this.answeredPose && 0 === (VB & DB.Bb.Held);
        return this.answeredPose = YB !== DB.qb.None, this.holding = this.answeredPose && !kB, null === (lB = (JB = this.options).showFacing) || void 0 === lB || lB.call(JB, this.holding ? this.facing : null), YB
      }
      holdsView() {
        return this.holding
      }
      answer(BB, TB, dB, VB, yB, pB) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          JL: lB
        } = this;
        lB.readView();
        if (0 !== (VB & DB.Bb.Held) || lB.setViewHeading((0, IB.A)(lB.bodyHeading)), void 0 !== this.pending) {
          const BB = this.pending;
          this.pending = void 0, this.director.setSettings(BB), this.syncShownSettings()
        }
        this.readLook((0, QB.h)(TB), (0, QB.h)(dB), VB, (0, QB.h)(yB), (0, QB.h)(pB));
        const JB = this.director.update(BB / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !JB) return DB.qb.None;
        const [YB, gB, oB] = JB.position;
        if (0 === this.options.api.queries.directorPose(YB, gB, oB, (0, IB.A)(JB.heading), (0, IB.j)(JB.pitch), (0, rB.j)(JB.fov))) return DB.qb.None;
        if ("default" === this.director.getSettings().mode) return DB.qb.Pose;
        switch (this.facing) {
          case "camera":
            return DB.qb.FaceCamera;
          case "cursor":
            return DB.qb.FaceCursor;
          default:
            return DB.qb.FaceMovement
        }
      }
      afterFrame(BB) {
        BB ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = hB, this.idle()
      }
      restart() {
        const BB = this.holding;
        this.idle(), this.holding = BB
      }
      idle() {
        var BB, TB;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new SB.b(this.JL), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (BB = (TB = this.options).showFacing) || void 0 === BB || BB.call(TB, null), this.setCentres(0)
      }
      syncShownSettings() {
        const BB = this.director.getSettings();
        if (BB === this.shownSettings) return;
        this.shownSettings = BB;
        const TB = (0, cB.c)(BB);
        this.facing = TB.facing, this.mouseTurns = TB.mouseTurns
      }
      readLook(BB, TB, dB, VB, yB) {
        const pB = this.look,
          lB = 0 !== (dB & DB.Bb.LookPointed);
        if (null === this.mouseTurns && !lB) return pB.pU = 0, pB.kU = 0, void(pB.pointedAt = void 0);
        let JB;
        lB && (this.pointedAt.heading = VB, this.pointedAt.pitch = yB, JB = this.pointedAt);
        const {
          JL: YB
        } = this;
        YB.setViewHeading((0, cB.b)(YB.getViewHeading(), BB, TB, JB, "look" === this.mouseTurns, pB))
      }
      writeCentres(BB) {
        const TB = this.next,
          dB = Math.min(BB.length, DB.Md);
        for (let VB = 0; VB < dB; VB++)
          for (let dB = 0; dB < 3; dB++) TB[3 * VB + dB] = Math.floor(BB[VB][dB] / DB.P);
        this.setCentres(dB)
      }
      setCentres(BB) {
        const {
          nY: TB,
          next: dB
        } = this;
        let VB = BB === this.centresLen;
        for (let yB = 0; VB && yB < 3 * BB; yB++) VB = TB[yB] === dB[yB];
        VB || (TB.fill(0), TB.set(dB.subarray(0, 3 * BB)), this.centresLen = BB, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const BB = this.options.cmd();
        null !== BB && (0, DB.Jf)(BB, 0, this.nY, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var BB, TB, dB;
        return null !== (BB = null === (TB = (dB = this.options).screen) || void 0 === TB ? void 0 : TB.call(dB)) && void 0 !== BB ? BB : CB
      }
      hidden() {
        var BB;
        return (null !== (BB = this.options.isPageHidden) && void 0 !== BB ? BB : GB)()
      }
      now() {
        var BB, TB, dB;
        return null !== (BB = null === (TB = (dB = this.options).now) || void 0 === TB ? void 0 : TB.call(dB)) && void 0 !== BB ? BB : performance.now()
      }
    }
    const xB = DB.P * DB.P * DB.P,
      jB = Math.log2(DB.P),
      AB = DB.P - 1,
      bB = DB.Z.BYTES / 4,
      nB = new Uint16Array(xB);

    function eB(BB, TB, dB) {
      return BB * DB.P * DB.P + TB * DB.P + dB
    }
    class BT {
      constructor(BB) {
        this.chunk = BB
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(BB, TB, dB) {
        return eB(BB, TB, dB)
      }
    }
    class TT {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class dT {
      constructor(BB, TB, dB, VB) {
        this.table = BB, this.slot = TB, this.generation = dB, this.epoch = VB, this.SL = new BT(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = nB, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get eD() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get cO() {
        const BB = this.gameVoxels(),
          TB = this.layers ??= new Uint16Array(DB.P);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let dB = 0; 0 !== this.staleLayers; dB++) {
          const VB = 1 << dB;
          0 !== (this.staleLayers & VB) && (this.staleLayers &= ~VB, TB[dB] = VT(BB, dB))
        }
        return TB
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const BB = this.voxelData(),
          TB = this.writes;
        if (null === TB || 0 === TB.ids.size) return BB;
        if (TB.from !== BB) {
          const dB = TB.patched ??= new Uint16Array(xB);
          dB.set(BB);
          for (const [BB, VB] of TB.ids) dB[BB] = VB;
          TB.from = BB
        }
        return TB.patched
      }
      written(BB) {
        var TB;
        return null === (TB = this.writes) || void 0 === TB ? void 0 : TB.ids.get(BB)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(BB, TB, dB) {
        const VB = this.writes ??= new TT;
        VB.ids.set(BB, TB), dB && VB.cleared.add(BB), null !== VB.from && (VB.patched[BB] = TB);
        const yB = 1 << (BB >> jB & AB);
        VB.layers |= yB, this.staleLayers |= yB, this.writeCount++
      }
      clearWrites() {
        const BB = this.writes;
        null !== BB && (this.staleLayers |= BB.layers, BB.ids.clear(), BB.cleared.clear(), BB.layers = 0, BB.from = null)
      }
      dataCleared(BB) {
        var TB;
        return !0 === (null === (TB = this.writes) || void 0 === TB ? void 0 : TB.cleared.has(BB))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const BB = this.table.slotWords(),
          TB = this.slot * bB;
        if (this.epoch !== this.table.epoch || TB + bB > BB.length || 0 === BB[TB + 3] || BB[TB + 2] !== this.generation) return this.data = nB, this.dataPtr = 0, nB;
        this.version = BB[TB + 1];
        const dB = BB[TB + 0],
          VB = BB.buffer;
        return dB === this.dataPtr && VB === this.dataBuffer || (this.dataPtr = dB, this.dataBuffer = VB, this.data = this.table.voxelsAt(VB, dB)), this.data
      }
    }

    function VT(BB, TB) {
      const dB = BB[TB * DB.P];
      for (let VB = 0; VB < DB.P; VB++) {
        const yB = eB(VB, TB, 0);
        for (let TB = 0; TB < DB.P; TB++)
          if (BB[yB + TB] !== dB) return 65535
      }
      return dB
    }
    const yT = new Uint32Array(0),
      pT = 1 << 20,
      lT = 1 << 21;

    function JT(BB, TB, dB) {
      const VB = BB + pT,
        yB = TB + 1024,
        pB = dB + pT;
      return VB < 0 || VB >= lT || pB < 0 || pB >= lT || yB < 0 || yB >= 2048 ? -1 : 2048 * (VB * lT + pB) + yB
    }

    function YT(BB, TB, dB) {
      return eB(BB & AB, TB & AB, dB & AB)
    }
    class gT {
      constructor(BB, TB) {
        this.memory = BB, this.apiView = TB, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = yT, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = yT, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(BB, TB, dB, VB, yB, pB) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, pB === DB.$.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (pB !== DB.$.Stored && pB !== DB.$.Unloaded) throw new OB.b(`ChunkSlot flags ${pB}`);
        const lB = JT(BB, TB, dB);
        if (lB < 0) return;
        if (pB === DB.$.Unloaded) return void this.chunks.delete(lB);
        const JB = this.chunks.get(lB);
        (null === JB || void 0 === JB ? void 0 : JB.slot) === VB && JB.generation === yB || this.chunks.set(lB, new dT(this, VB, yB, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const BB = this.apiView(),
          TB = DB.B.chunkSlotsPtr(BB, 0),
          dB = DB.B.chunkSlotsLen(BB, 0);
        TB === this.slotsPtr && dB === this.slotsLen || (this.slotsPtr = TB, this.slotsLen = dB, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const BB = this.apiView(),
          TB = DB.B.walkThroughPtr(BB, 0),
          dB = DB.B.walkThroughLen(BB, 0);
        TB === this.walkPtr && dB === this.walkLen || (this.walkPtr = TB, this.walkLen = dB, this.walkBuffer = null, this.walkWords())
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
        var TB;
        BB !== this.slotsBuffer && (this.slotsBuffer = BB, this.slots = null !== (TB = (0, OB.p)(Uint32Array, BB, this.slotsPtr, this.slotsLen * bB, "the chunk directory")) && void 0 !== TB ? TB : yT);
        return this.slots
      }
      voxelsAt(BB, TB) {
        try {
          var dB;
          return null !== (dB = (0, OB.p)(Uint16Array, BB, TB, xB, "a chunk's voxels")) && void 0 !== dB ? dB : nB
        } catch (VB) {
          if (!(VB instanceof OB.b)) throw VB;
          return this.corruption ??= VB, nB
        }
      }
      chunk(BB, TB, dB) {
        var VB;
        return null !== (VB = this.chunks.get(JT(BB, TB, dB))) && void 0 !== VB ? VB : null
      }
      isLoaded(BB, TB, dB) {
        return void 0 !== this.chunkAt(Math.floor(BB), Math.floor(TB), Math.floor(dB))
      }
      rY(BB, TB, dB) {
        var VB;
        const yB = Math.floor(BB),
          pB = Math.floor(TB),
          lB = Math.floor(dB),
          JB = this.chunkAt(yB, pB, lB);
        if (!JB) return 0;
        const YB = YT(yB, pB, lB);
        return null !== (VB = JB.written(YB)) && void 0 !== VB ? VB : JB.voxelData()[YB]
      }
      setOverlay(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pB = this.chunkAt(BB, TB, dB);
        return !!pB && (pB.hasWrites() || this.written.push(pB), pB.write(YT(BB, TB, dB), VB, yB), !0)
      }
      version(BB, TB, dB) {
        var VB, yB;
        return null !== (VB = null === (yB = this.chunks.get(JT(BB, TB, dB))) || void 0 === yB ? void 0 : yB.eD) && void 0 !== VB ? VB : null
      }
      scan(BB, TB, dB, VB, yB, pB, lB, JB) {
        const YB = DB.P;
        let gB = 0;
        for (let oB = Math.floor(TB / YB); oB * YB < yB; oB++) {
          const kB = oB * YB,
            LB = Math.min(yB - kB, YB);
          for (let yB = Math.floor(BB / YB); yB * YB < VB; yB++) {
            const OB = yB * YB,
              DB = Math.min(VB - OB, YB);
            for (let VB = Math.floor(dB / YB); VB * YB < pB; VB++) {
              const uB = this.chunks.get(JT(yB, oB, VB));
              if (!uB) continue;
              const HB = VB * YB,
                EB = Math.max(dB - HB, 0),
                vB = Math.min(pB - HB, YB),
                mB = uB.cO,
                iB = uB.gameVoxels();
              for (let dB = Math.max(TB - kB, 0); dB < LB; dB++) {
                const TB = mB[dB];
                if (65535 === TB || 0 !== lB[TB]) {
                  gB++;
                  for (let TB = Math.max(BB - OB, 0); TB < DB; TB++) {
                    const BB = eB(TB, dB, 0);
                    for (let VB = EB; VB < vB; VB++) {
                      const yB = iB[BB + VB];
                      0 !== lB[yB] && JB.push(OB + TB, kB + dB, HB + VB, yB)
                    }
                  }
                }
              }
            }
          }
        }
        return gB
      }
      dataCleared(BB, TB, dB) {
        var VB;
        const yB = Math.floor(BB),
          pB = Math.floor(TB),
          lB = Math.floor(dB);
        return !0 === (null === (VB = this.chunkAt(yB, pB, lB)) || void 0 === VB ? void 0 : VB.dataCleared(YT(yB, pB, lB)))
      }
      isWalkThrough(BB) {
        if (!Number.isInteger(BB) || BB < 0 || BB > 65535) return !1;
        const TB = this.walkWords(),
          dB = BB >>> 5;
        return dB < TB.length && 1 === (TB[dB] >>> (31 & BB) & 1)
      }
      walkWords() {
        const BB = this.memory().buffer;
        var TB;
        BB !== this.walkBuffer && (this.walkBuffer = BB, this.walk = null !== (TB = (0, OB.p)(Uint32Array, BB, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== TB ? TB : yT);
        return this.walk
      }
      chunkAt(BB, TB, dB) {
        if ((0 | BB) !== BB || (0 | TB) !== TB || (0 | dB) !== dB) return;
        const VB = JT(BB >> jB, TB >> jB, dB >> jB);
        return VB !== this.lastKey && (this.lastKey = VB, this.lastChunk = this.chunks.get(VB)), this.lastChunk
      }
    }
    var oT = dB(37458),
      kT = dB(36727),
      LT = dB(35755),
      OT = dB(35616),
      DT = dB(35628),
      uT = dB(38056),
      HT = dB(184);
    const ET = ["ambient", "crowd", "customGame_horror", "dig", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "random", "rpg", "step", "survivalFactory"],
      vT = [
        ["ZombieGrunt1", 12],
        ["ZombieGrunt2", 12],
        ["ZombieGrunt3", 12],
        ["ZombieHurt1", 12],
        ["ZombieHurt2", 12],
        ["ZombieHurt3", 12],
        ["ZombieHurt4", 12],
        ["bass", 13],
        ["bassattack", 13],
        ["bd", 13],
        ["bearRoar1", 12],
        ["bearRoar2", 12],
        ["bearRoar3", 12],
        ["bearRoar4", 12],
        ["bearRoar5", 12],
        ["beep", 14],
        ["bigDrumSwish1", 13],
        ["bigDrumSwish2", 13],
        ["bigDrumSwish3", 13],
        ["bow", 14],
        ["bucketEmpty1", 14],
        ["bucketEmpty2", 14],
        ["bucketEmpty3", 14],
        ["bucketFill1", 14],
        ["bucketFill2", 14],
        ["bucketFill3", 14],
        ["bullet_shell_bounce_general_07", 6],
        ["bullet_shell_bounce_general_08", 6],
        ["burp", 14],
        ["cannonFire1", 14],
        ["cannonFire2", 14],
        ["cannonFire3", 14],
        ["cashRegister", 14],
        ["catHiss1", 12],
        ["catHiss2", 12],
        ["catHiss3", 12],
        ["catHiss4", 12],
        ["catHurt1", 12],
        ["catHurt2", 12],
        ["catHurt3", 12],
        ["catMeow1", 12],
        ["catMeow2", 12],
        ["catMeow3", 12],
        ["catMeow4", 12],
        ["catMeow5", 12],
        ["caughtFish", 4],
        ["chestClose", 14],
        ["chestOpen", 14],
        ["cloth1", 3],
        ["cloth2", 3],
        ["cloth3", 3],
        ["cloth4", 3],
        ["cowHurt1", 12],
        ["cowMoo1", 12],
        ["cowMoo2", 12],
        ["cowMoo3", 12],
        ["croneAttack1", 12],
        ["croneHurt1", 12],
        ["croneIdle1", 12],
        ["crowdAmbience", 1],
        ["crowdCheer", 1],
        ["cryptWhoosh", 2],
        ["deerGrunt1", 12],
        ["deerHurt1", 12],
        ["dogBark1", 12],
        ["dogBark2", 12],
        ["dogBark3", 12],
        ["dogGrowl1", 12],
        ["dogGrowl2", 12],
        ["dogGrowl3", 12],
        ["dogHurt1", 12],
        ["dogHurt2", 12],
        ["doorClose", 14],
        ["doorClose2", 14],
        ["doorKnock", 2],
        ["doorOpen-bloxd1", 14],
        ["doorOpen-bloxd2", 14],
        ["drink", 14],
        ["drumSwish1", 13],
        ["drumSwish2", 13],
        ["eat1", 14],
        ["equip_leather1", 14],
        ["exp_collect", 14],
        ["exp_levelup", 14],
        ["fallsmall", 14],
        ["fennecYip1", 12],
        ["fennecYip2", 12],
        ["fennecYip3", 12],
        ["fireBurn", 14],
        ["firecracker1", 14],
        ["firecracker2", 14],
        ["firecracker3", 14],
        ["firecracker4", 14],
        ["futureStrangePulse", 2],
        ["game_start_countdown_01", 5],
        ["game_start_countdown_02", 5],
        ["game_start_countdown_03", 5],
        ["game_start_countdown_final", 5],
        ["glass1", 3],
        ["glass2", 3],
        ["glass3", 3],
        ["golemGrunt1", 12],
        ["golemGrunt2", 12],
        ["gorillaIdle1", 12],
        ["gorillaIdle2", 12],
        ["gorillaIdle3", 12],
        ["gorillaIdle4", 12],
        ["gorillaRoar1", 12],
        ["grass1", 3],
        ["grass2", 3],
        ["grass3", 3],
        ["grass4", 3],
        ["gravel1", 3],
        ["gravel2", 3],
        ["gravel3", 3],
        ["gravel4", 3],
        ["harp_pling", 13],
        ["hat", 13],
        ["hauntedHorrorImpact", 2],
        ["headshot_04", 6],
        ["headshot_06", 6],
        ["headshot_08", 6],
        ["headshot_11", 6],
        ["hit1", 16],
        ["hit2", 16],
        ["hit3", 16],
        ["hoeTill1", 14],
        ["hoeTill2", 14],
        ["hoeTill3", 14],
        ["hoeTill4", 14],
        ["horrorAccent1", 2],
        ["horrorFright", 2],
        ["horrorMaleDrone", 2],
        ["horseHurt1", 12],
        ["horseHurt2", 12],
        ["horseIdle1", 12],
        ["horseIdle2", 12],
        ["horseIdle3", 12],
        ["intensiveRainLoop", 2],
        ["knightGrunt1", 12],
        ["knightGrunt2", 12],
        ["knightGrunt3", 12],
        ["laugh1", 14],
        ["laugh2", 14],
        ["laugh3", 14],
        ["lavaFlow", 0],
        ["levelup", 13],
        ["lowDrum1", 13],
        ["lowDrum2", 13],
        ["lowDrum3", 13],
        ["magicAccent1", 14],
        ["magicAccent2", 14],
        ["magicAccent3", 14],
        ["magicAccent4", 14],
        ["metalDoorKnock", 2],
        ["ominousBellHit", 2],
        ["pickUp", 3],
        ["pigHurt1", 12],
        ["pigHurt2", 12],
        ["pigHurt3", 12],
        ["pigOink1", 12],
        ["pigOink2", 12],
        ["pigOink3", 12],
        ["pigOink4", 12],
        ["pigOink5", 12],
        ["pistol_cock_01", 7],
        ["pistol_cock_02", 7],
        ["pistol_cock_03", 7],
        ["pistol_cock_06", 7],
        ["pistol_magazine_load_01", 7],
        ["pistol_magazine_load_02", 7],
        ["pistol_magazine_load_03", 7],
        ["pistol_magazine_unload_01", 7],
        ["pistol_magazine_unload_02", 7],
        ["pistol_magazine_unload_03", 7],
        ["pistol_shot_01", 7],
        ["pistol_shot_02", 7],
        ["pistol_shot_03", 7],
        ["pistol_shot_04", 7],
        ["pistol_shot_05", 7],
        ["pulseFromTheDark", 2],
        ["reaverAttack1", 12],
        ["reaverAttack2", 12],
        ["reaverAttack3", 12],
        ["reaverGrunt1", 12],
        ["reaverGrunt2", 12],
        ["reaverGrunt3", 12],
        ["reel", 4],
        ["refereeWhistle", 1],
        ["rifle_cock_01", 8],
        ["rifle_cock_02", 8],
        ["rifle_magazine_load_01", 8],
        ["rifle_magazine_load_02", 8],
        ["rifle_magazine_load_03", 8],
        ["rifle_magazine_unload_01", 8],
        ["rifle_magazine_unload_02", 8],
        ["rifle_magazine_unload_04", 8],
        ["rifle_shot_01", 8],
        ["rifle_shot_02", 8],
        ["rifle_shot_03", 8],
        ["rifle_shot_04", 8],
        ["rocketEngineLoop", 17],
        ["rpgBeltCloth1", 15],
        ["rpgBeltCloth2", 15],
        ["rpgBeltHandle1", 15],
        ["rpgBeltHandle2", 15],
        ["rpgBookClose", 15],
        ["rpgBookFlip1", 15],
        ["rpgBookFlip2", 15],
        ["rpgBookFlip3", 15],
        ["rpgBookOpen", 15],
        ["rpgBookPlace1", 15],
        ["rpgBookPlace2", 15],
        ["rpgBookPlace3", 15],
        ["rpgChop", 15],
        ["rpgCloth1", 15],
        ["rpgCloth2", 15],
        ["rpgCloth3", 15],
        ["rpgCloth4", 15],
        ["rpgCreak1", 15],
        ["rpgCreak2", 15],
        ["rpgCreak3", 15],
        ["rpgDoorClose1", 15],
        ["rpgDoorClose2", 15],
        ["rpgDoorClose3", 15],
        ["rpgDoorClose4", 15],
        ["rpgDoorOpen1", 15],
        ["rpgDoorOpen2", 15],
        ["rpgDrawKnife1", 15],
        ["rpgDrawKnife2", 15],
        ["rpgDrawKnife3", 15],
        ["rpgDropLeather", 15],
        ["rpgFootstep00", 15],
        ["rpgFootstep01", 15],
        ["rpgFootstep02", 15],
        ["rpgFootstep03", 15],
        ["rpgFootstep04", 15],
        ["rpgFootstep05", 15],
        ["rpgFootstep06", 15],
        ["rpgFootstep07", 15],
        ["rpgFootstep08", 15],
        ["rpgFootstep09", 15],
        ["rpgHandleCoins1", 15],
        ["rpgHandleCoins2", 15],
        ["rpgHandleSmallLeather1", 15],
        ["rpgHandleSmallLeather2", 15],
        ["rpgKnifeSlice1", 15],
        ["rpgKnifeSlice2", 15],
        ["rpgMetalClick", 15],
        ["rpgMetalLatch", 15],
        ["rpgMetalPot1", 15],
        ["rpgMetalPot2", 15],
        ["rpgMetalPot3", 15],
        ["sand1", 3],
        ["sand2", 3],
        ["sand3", 3],
        ["sand4", 3],
        ["semiAuto_cock_01", 9],
        ["semiAuto_cock_02", 9],
        ["semiAuto_cock_03", 9],
        ["semiAuto_cock_04", 9],
        ["semiAuto_cock_05", 9],
        ["semiAuto_first_shot_01", 9],
        ["semiAuto_magazine_load_01", 9],
        ["semiAuto_magazine_load_02", 9],
        ["semiAuto_magazine_load_03", 9],
        ["semiAuto_magazine_load_04", 9],
        ["semiAuto_magazine_load_05", 9],
        ["semiAuto_magazine_unload_01", 9],
        ["semiAuto_magazine_unload_02", 9],
        ["semiAuto_magazine_unload_03", 9],
        ["semiAuto_magazine_unload_04", 9],
        ["semiAuto_shot_01", 9],
        ["semiAuto_shot_02", 9],
        ["semiAuto_shot_03", 9],
        ["semiAuto_shot_04", 9],
        ["semiAuto_shot_05", 9],
        ["semiAuto_shot_06", 9],
        ["semiAuto_shot_07", 9],
        ["semiAuto_shot_08", 9],
        ["semiAuto_tail_only_shot_01", 9],
        ["sheepBaa1", 12],
        ["sheepBaa2", 12],
        ["sheepBaa3", 12],
        ["sheepBaa4", 12],
        ["sheepHurt1", 12],
        ["shotgun_cock_01", 10],
        ["shotgun_cock_02", 10],
        ["shotgun_cock_03", 10],
        ["shotgun_cock_04", 10],
        ["shotgun_cock_05", 10],
        ["shotgun_load_bullet_01", 10],
        ["shotgun_load_bullet_02", 10],
        ["shotgun_load_bullet_03", 10],
        ["shotgun_load_bullet_04", 10],
        ["shotgun_load_bullet_05", 10],
        ["shotgun_load_bullet_06", 10],
        ["shotgun_load_bullet_07", 10],
        ["shotgun_load_bullet_08", 10],
        ["shotgun_shot_01", 10],
        ["shotgun_shot_02", 10],
        ["shotgun_shot_03", 10],
        ["shotgun_shot_04", 10],
        ["skeletonRattle1", 12],
        ["skeletonRattle2", 12],
        ["skeletonRattle3", 12],
        ["skeletonRattle4", 12],
        ["snare", 13],
        ["snow1", 3],
        ["snow2", 3],
        ["snow3", 3],
        ["snow4", 3],
        ["sonarBeep", 13],
        ["splash1", 14],
        ["stagGrunt1", 12],
        ["stagHurt1", 12],
        ["stalkerAttack1", 12],
        ["stalkerIdle1", 12],
        ["step_cloth1", 16],
        ["step_cloth2", 16],
        ["step_cloth3", 16],
        ["step_cloth4", 16],
        ["step_grass1", 16],
        ["step_grass2", 16],
        ["step_grass3", 16],
        ["step_grass4", 16],
        ["step_grass5", 16],
        ["step_gravel1", 16],
        ["step_gravel2", 16],
        ["step_gravel3", 16],
        ["step_gravel4", 16],
        ["step_sand2", 16],
        ["step_sand3", 16],
        ["step_sand4", 16],
        ["step_sand5", 16],
        ["step_snow1", 16],
        ["step_snow2", 16],
        ["step_snow3", 16],
        ["step_snow4", 16],
        ["step_stone1", 16],
        ["step_stone2", 16],
        ["step_stone3", 16],
        ["step_stone4", 16],
        ["step_stone5", 16],
        ["step_stone6", 16],
        ["step_wood1", 16],
        ["step_wood2", 16],
        ["step_wood3", 16],
        ["step_wood4", 16],
        ["step_wood5", 16],
        ["step_wood6", 16],
        ["stone1", 3],
        ["stone2", 3],
        ["stone3", 3],
        ["stone4", 3],
        ["submachine_cock_01", 11],
        ["submachine_cock_02", 11],
        ["submachine_cock_03", 11],
        ["submachine_cock_04", 11],
        ["submachine_first_shot_01", 11],
        ["submachine_magazine_load_01", 11],
        ["submachine_magazine_load_02", 11],
        ["submachine_magazine_load_03", 11],
        ["submachine_magazine_load_04", 11],
        ["submachine_magazine_unload_01", 11],
        ["submachine_magazine_unload_02", 11],
        ["submachine_magazine_unload_03", 11],
        ["submachine_shot_01", 11],
        ["submachine_shot_02", 11],
        ["submachine_shot_03", 11],
        ["submachine_shot_04", 11],
        ["submachine_shot_05", 11],
        ["submachine_shot_06", 11],
        ["submachine_shot_07", 11],
        ["submachine_shot_08", 11],
        ["submachine_shot_09", 11],
        ["submachine_tail_only_shot_01", 11],
        ["successfulBowHit", 14],
        ["suspenseRiser", 2],
        ["sweep6", 16],
        ["thunderRain", 2],
        ["trapdoorOpen", 14],
        ["trumpetFlare", 13],
        ["trumpetNote1", 13],
        ["trumpetNote2", 13],
        ["trumpetNote3", 13],
        ["warperGrunt1", 12],
        ["warperGrunt2", 12],
        ["warperGrunt3", 12],
        ["warperGrunt4", 12],
        ["warperGrunt5", 12],
        ["warperPhase1", 12],
        ["warperPhase2", 12],
        ["wood1", 3],
        ["wood2", 3],
        ["wood3", 3],
        ["wood4", 3],
        ["wraithGrunt1", 12],
        ["wraithGrunt2", 12],
        ["wraithHurt", 12],
        ["zapAccent1", 2],
        ["zapAccent2", 2]
      ],
      mT = vT.map((BB => {
        let [TB] = BB;
        return TB
      })),
      iT = Uint8Array.from(vT, (BB => {
        let [, TB] = BB;
        return TB
      })),
      NT = {
        semi_automatic: 9,
        submachine: 11,
        rifle: 8,
        pistol: 7,
        shotgun: 10
      },
      tT = 6;
    var fT = dB(35746),
      sT = dB(232);
    const MT = 2 ** ET.length - 1;
    class zT {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sT.e;
        this.sheet = BB, this.onError = TB, this.idle = dB, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = BB => {
          this.cancelIdle = null;
          try {
            if (BB.timeRemaining() >= 1) {
              let BB = this.queue.shift();
              for (; void 0 !== BB && !this.load(BB);) BB = this.queue.shift()
            }
          } catch (TB) {
            this.onError(TB)
          } finally {
            this.schedule()
          }
        }
      }
      preload(BB) {
        const TB = BB & MT & ~this.asked;
        if (0 !== TB) {
          this.asked |= TB;
          for (let BB = 0; BB < ET.length; BB++) TB & 1 << BB && this.queue.push(BB);
          this.schedule()
        }
      }
      cancel() {
        var BB;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(BB) {
        const TB = this.sheet(BB, !1),
          dB = this.sheet(BB, !0),
          [VB, yB] = "unloaded" === TB.state() && "unloaded" !== dB.state() ? [dB, TB] : [TB, dB],
          pB = this.gen,
          lB = () => {
            try {
              pB === this.gen && "unloaded" === yB.state() && yB.load()
            } catch (BB) {
              this.onError(BB)
            }
          },
          JB = VB.state();
        return "unloaded" === JB ? (VB.once("load", lB), VB.load(), !0) : "unloaded" === yB.state() && ("loading" === JB ? (VB.once("load", lB), !1) : (yB.load(), !0))
      }
    }
    var wT = dB(39635);
    const UT = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      FT = HT.c.kE * HT.c.playerEyeToHeightRatio,
      KT = [0, 0, -1, 0, 1, 0],
      rT = ET.indexOf("note");

    function IT(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }

    function cT(BB) {
      var TB;
      let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const VB = function(BB) {
        let TB = 0,
          dB = mT.length;
        for (; TB < dB;) {
          const VB = TB + dB >>> 1;
          mT[VB] < BB ? TB = VB + 1 : dB = VB
        }
        return TB
      }(BB);
      if ("" === BB || null === (TB = mT[VB]) || void 0 === TB || !TB.startsWith(BB)) return -1;
      if (mT[VB] === BB) return VB;
      let yB = VB + 1;
      for (; yB < mT.length && mT[yB].startsWith(BB);) yB++;
      return VB + Math.floor(dB() * (yB - VB))
    }
    class ST {
      constructor(BB, TB, dB, VB, yB) {
        this.group = BB, this.loudness = TB, this.startMs = dB, this.howl = VB, this.host = yB, this.id = 0, this.direct = !1
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
    class PT {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          VB = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = BB, this.listener = TB, this.now = dB, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new fT.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: BB => this.aliveVoice(BB),
          started: BB => this.started.has(BB),
          drop: BB => {
            var TB;
            null === (TB = this.live.get(BB)) || void 0 === TB || TB.howl.stop(BB), this.forget(BB)
          }
        }, this.handlers = {
          playSound: (BB, TB, dB, VB, yB, pB, lB, JB, YB) => {
            if (VB >= mT.length) return;
            const gB = 0 !== (yB & DB.Wd.Loop);
            yB & DB.Wd.TwoD ? this.start(VB, !1, lB, pB, JB, gB) : this.startSpatial(VB, lB, pB, JB, gB, BB, TB, dB, YB, this.earDistSq(BB, TB, dB))
          },
          soundPos: (BB, TB, dB, VB) => {
            const yB = this.core.get(VB);
            var pB;
            void 0 !== yB && (null === (pB = this.live.get(yB)) || void 0 === pB || pB.howl.pos(dB, TB, BB, yB))
          },
          soundSet: (BB, TB, dB, VB) => {
            const yB = this.core.get(BB),
              pB = void 0 === yB ? void 0 : this.live.get(yB);
            void 0 !== yB && pB && (this.setRel(yB, TB), pB.rate = dB, pB.howl.rate(dB, yB), pB.spatial && pB.howl.pannerAttr({
              refDistance: VB
            }, yB))
          },
          soundFade: (BB, TB, dB, VB) => {
            const yB = this.core.get(BB);
            void 0 !== yB && this.fade(yB, TB, dB, 0 !== (VB & DB.Vd.StopAfter))
          },
          soundStop: BB => {
            const TB = this.core.get(BB);
            var dB;
            void 0 !== TB && (null === (dB = this.live.get(TB)) || void 0 === dB || dB.howl.stop(TB), this.forget(TB))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new zT(((BB, TB) => this.sheet(BB, TB)), (BB => {
          this.errors++, console.error("Audio preload failed", BB)
        }), VB)
      }
      prepare() {
        for (let BB = 0; BB < ET.length; BB++) this.sheet(BB, !1), this.sheet(BB, !0)
      }
      preload(BB) {
        this.loader.preload(BB)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(BB, TB, dB, VB) {
        if (BB < DB.u.PlaySound || BB > DB.u.SoundReset) return !1;
        try {
          return (0, DB.fe)(BB, TB, dB, VB, this.handlers)
        } catch (yB) {
          return this.errors++, console.error("Audio event failed", yB), !0
        }
      }
      applyListener(BB) {
        const TB = this.nextPose;
        for (let VB = 0; VB < 3; VB++) TB[2 - VB] = DB.D.listener(BB, 0, VB), TB[5 - VB] = DB.D.forward(BB, 0, VB), TB[8 - VB] = DB.D.up(BB, 0, VB);
        0 === TB[3] && 0 === TB[4] && 0 === TB[5] && TB.set(this.posed ? this.pose.subarray(3) : KT, 3);
        for (let VB = 0; VB < 9; VB++)
          if (!Number.isFinite(TB[VB])) return;
        const dB = this.pose;
        if (this.posed) {
          let BB = !0;
          for (let VB = 0; VB < 9 && BB; VB++) BB = TB[VB] === dB[VB];
          if (BB) return
        }
        this.listener.apply(TB) && (dB.set(TB), this.posed = !0)
      }
      playGame(BB, TB, dB, VB, yB, pB, lB) {
        const JB = cT(BB);
        if (JB < 0) return wT.e;
        if (!dB) {
          const {
            howl: BB,
            id: dB
          } = this.start(JB, !1, TB, 0, 1, lB);
          return this.gameSound(BB, dB, !1)
        }
        const YB = dB[0],
          gB = dB[1] + FT,
          oB = dB[2];
        if (!Number.isFinite(YB) || !Number.isFinite(gB) || !Number.isFinite(oB)) return wT.e;
        let kB;
        if (VB) {
          const BB = YB - VB[0],
            TB = gB - VB[1],
            dB = oB - VB[2];
          if (kB = BB * BB + TB * TB + dB * dB, kB > yB * yB) return wT.e
        } else kB = this.earDistSq(YB, gB, oB);
        const LB = this.startSpatial(JB, TB, 0, 1, lB, YB, gB, oB, pB, kB);
        return LB ? this.gameSound(LB.howl, LB.id, !0) : wT.e
      }
      setMaster(BB, TB) {
        this.level = IT(BB);
        const dB = TB ? this.level : 0;
        if (dB !== this.master) {
          this.master = dB;
          for (const [BB, TB] of this.live) TB.fadeMs = 0, TB.gain = TB.rel * this.master, TB.howl.volume(TB.gain, BB)
        }
      }
      stopCore() {
        for (const TB of [...this.core.values()]) {
          var BB;
          null === (BB = this.live.get(TB)) || void 0 === BB || BB.howl.stop(TB)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [BB, TB] of [...this.live]) TB.howl.stop(BB), this.forget(BB);
        this.core.clear()
      }
      gameSound(BB, TB, dB) {
        const VB = {
          stop: () => (this.live.has(TB) && BB.stop(TB), VB),
          fade: (BB, dB, yB) => {
            var pB, lB;
            const JB = this.level > 0 ? dB / this.level : dB > 0 && null !== (pB = null === (lB = this.live.get(TB)) || void 0 === lB ? void 0 : lB.rel) && void 0 !== pB ? pB : 0;
            return this.fade(TB, JB, yB, !1), VB
          },
          rate: dB => {
            const yB = this.live.get(TB);
            return yB && (yB.rate = function(BB) {
              return BB > 0 && BB < 1 / 0 ? BB : 1
            }(dB), BB.rate(yB.rate, TB)), VB
          },
          getVolume: () => {
            var BB, dB;
            return (null !== (BB = null === (dB = this.live.get(TB)) || void 0 === dB ? void 0 : dB.rel) && void 0 !== BB ? BB : 0) * this.level
          },
          getRelativeVolume: () => {
            var BB, dB;
            return null !== (BB = null === (dB = this.live.get(TB)) || void 0 === dB ? void 0 : dB.rel) && void 0 !== BB ? BB : 0
          },
          setRelativeVolume: BB => (this.setRel(TB, BB), VB),
          setPannerAttr: yB => {
            if (dB && this.live.has(TB)) {
              const dB = {
                ...UT,
                refDistance: LT.f
              };
              for (const [BB, TB] of Object.entries(yB)) "number" !== typeof TB && "string" !== typeof TB || (dB[BB] = TB);
              BB.pannerAttr({
                coneOuterAngle: dB.coneOuterAngle
              }, TB), BB.pannerAttr(dB, TB)
            }
            return VB
          },
          setPosition: yB => (dB && this.live.has(TB) && Number.isFinite(yB[0] + yB[1] + yB[2]) && BB.pos(yB[2], yB[1], yB[0], TB), VB)
        };
        return VB
      }
      startSpatial(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        const oB = this.sheet(iT[BB], !0);
        let kB = null;
        if (!yB) {
          if (this.failed.has(oB)) return null;
          const dB = iT[BB] === rT ? null : (0, fT.k)(mT[BB]),
            VB = (0, fT.h)(IT(TB), Math.sqrt(gB), YB);
          if (kB = new ST(dB, VB, this.now(), oB, this.voiceHost), !this.voices.admit(kB)) return null
        }
        const LB = this.start(BB, !0, TB, dB, VB, yB);
        return kB && (kB.id = LB.id, kB.direct = "loaded" === oB.state() && !oB._playLock), oB.pannerAttr({
          coneOuterAngle: 360
        }, LB.id), oB.pannerAttr({
          ...UT,
          refDistance: YB
        }, LB.id), oB.pos(JB, lB, pB, LB.id), LB
      }
      aliveVoice(BB) {
        const TB = this.live.get(BB);
        if (!TB) return;
        const dB = TB.howl._soundById(BB);
        if (dB && !dB._ended) return TB;
        this.forget(BB)
      }
      earDistSq(BB, TB, dB) {
        if (!this.posed) return 0;
        const VB = BB - this.pose[2],
          yB = TB - this.pose[1],
          pB = dB - this.pose[0];
        return VB * VB + yB * yB + pB * pB
      }
      start(BB, TB, dB, VB, yB, pB) {
        const lB = IT(dB),
          JB = this.sheet(iT[BB], TB);
        "unloaded" === JB.state() && JB.load();
        const YB = JB.play(mT[BB]),
          gB = lB * this.master;
        return JB.volume(gB, YB), this.live.set(YB, {
          howl: JB,
          rel: lB,
          gain: gB,
          fadeFrom: gB,
          fadeAt: 0,
          fadeMs: 0,
          rate: yB,
          handle: VB,
          spatial: TB,
          stopTimer: void 0
        }), 0 !== VB && this.core.set(VB, YB), 1 !== yB && JB.rate(yB, YB), pB && JB.loop(!0, YB), {
          howl: JB,
          id: YB
        }
      }
      sheet(BB, TB) {
        const dB = 2 * BB + (TB ? 1 : 0);
        let VB = this.sheets.get(dB);
        if (!VB) {
          const yB = this.createHowl(ET[BB], TB);
          yB.on("end", (BB => {
            yB.loop(BB) || this.forget(BB)
          })), yB.on("stop", (BB => {
            this.forget(BB)
          })), yB.on("play", (BB => {
            this.live.has(BB) && this.started.add(BB)
          })), yB.on("loaderror", (BB => {
            if ("loaded" !== yB.state()) {
              this.failed.add(yB);
              for (const [BB, TB] of this.live) TB.howl === yB && this.forget(BB)
            } else "number" === typeof BB && this.forget(BB)
          })), this.sheets.set(dB, yB), VB = yB
        }
        return VB
      }
      setRel(BB, TB) {
        const dB = this.live.get(BB);
        dB && (QT(dB), dB.fadeMs = 0, dB.rel = IT(TB), dB.gain = dB.rel * this.master, dB.howl.volume(dB.gain, BB))
      }
      fade(BB, TB, dB, VB) {
        const yB = this.live.get(BB);
        if (!yB) return;
        QT(yB);
        const {
          howl: pB
        } = yB, lB = this.gainNow(yB);
        yB.rel = IT(TB), yB.gain = yB.rel * this.master;
        const JB = dB > 0 ? Math.min(dB, 65535) : 0,
          YB = 0 === JB || lB === yB.gain;
        yB.fadeMs = YB ? 0 : JB, YB ? pB.volume(yB.gain, BB) : (yB.fadeFrom = lB, yB.fadeAt = this.now(), pB.fade(lB, yB.gain, JB, BB)), VB && (YB ? pB.stop(BB) : yB.stopTimer = setTimeout((() => {
          yB.stopTimer = void 0, pB.stop(BB)
        }), JB))
      }
      gainNow(BB) {
        if (BB.fadeMs > 0) {
          const TB = (this.now() - BB.fadeAt) / BB.fadeMs;
          if (TB < 1) return BB.fadeFrom + (BB.gain - BB.fadeFrom) * Math.max(0, TB);
          BB.fadeMs = 0
        }
        return BB.gain
      }
      forget(BB) {
        this.started.delete(BB);
        const TB = this.live.get(BB);
        TB && (QT(TB), this.live.delete(BB), 0 !== TB.handle && this.core.get(TB.handle) === BB && this.core.delete(TB.handle))
      }
    }

    function QT(BB) {
      void 0 !== BB.stopTimer && (clearTimeout(BB.stopTimer), BB.stopTimer = void 0)
    }
    var RT = dB(39341),
      aT = dB(38061);
    class ZT {
      constructor(BB, TB, dB, VB) {
        this.key = BB, this.model = TB, this.host = VB, this.Kk = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.ZyB = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.ND = !1, this.Kk = Math.max(1, Math.ceil(dB)), this.records = new Float32Array(this.Kk * oT.e), this.isDirty = new Uint8Array(this.Kk), this.tail = new Uint8Array(this.Kk * DB.xc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(VB.cmd())
      }
      setOrigin(BB, TB, dB) {
        this.origin[0] = BB, this.origin[1] = TB, this.origin[2] = dB
      }
      markDirty(BB) {
        !this.ND && BB >= 0 && BB < this.Kk && BB < DB.xc.Max && this.hD(BB, BB + 1)
      }
      commit(BB) {
        if (this.ND) return;
        (BB = Math.min(Math.max(Math.floor(BB), 0), this.Kk, DB.xc.Max)) > this.count && this.hD(this.count, BB), this.count = BB;
        const {
          origin: TB,
          sentOrigin: dB,
          dirtyList: VB
        } = this, yB = this.ZyB !== BB, pB = dB[0] !== TB[0] || dB[1] !== TB[1] || dB[2] !== TB[2];
        if (0 === VB.length && !yB && !pB) return;
        const lB = this.host.cmd();
        if (!lB || !this.make(lB)) return;
        const JB = VB.length,
          {
            records: YB,
            tailView: gB
          } = this;
        for (let oB = 0; oB < JB; oB++) {
          const BB = VB[oB],
            TB = BB * oT.e,
            dB = oB * DB.xc.Bytes,
            yB = 0 !== YB[TB + oT.h] ? DB.xc.Hidden : 0;
          gB.setUint32(dB, (BB | yB) >>> 0, !0), gB.setFloat32(dB + 4, YB[TB], !0), gB.setFloat32(dB + 8, YB[TB + 1], !0), gB.setFloat32(dB + 12, YB[TB + 2], !0)
        }
        if ((0, DB.Ge)(lB, 0, this.key, BB, TB, JB, this.tailOf(JB))) {
          for (let BB = 0; BB < JB; BB++) this.isDirty[VB[BB]] = 0;
          VB.length = 0, this.ZyB = BB, dB[0] = TB[0], dB[1] = TB[1], dB[2] = TB[2]
        }
      }
      grow(BB) {
        (BB = Math.ceil(BB)) <= this.Kk || this.ND || (this.records = (0, aT.d)(this.records, new Float32Array(BB * oT.e)), this.isDirty = (0, aT.d)(this.isDirty, new Uint8Array(BB)), this.tail = new Uint8Array(BB * DB.xc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Kk = BB)
      }
      dispose() {
        this.ND || (this.ND = !0, this.host.ND(this, this.made ? this.key : null))
      }
      make(BB) {
        if (!this.made && BB) {
          const {
            item: TB,
            scale: dB,
            yaw: VB
          } = this.model;
          this.made = (0, DB.Me)(BB, 0, this.key, TB, dB, VB)
        }
        return this.made
      }
      tailOf(BB) {
        const TB = BB * DB.xc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === TB || (this.tailCut = this.tail.subarray(0, TB)), this.tailCut
      }
      hD(BB, TB) {
        const {
          dirtyList: dB,
          isDirty: VB
        } = this;
        for (let yB = BB; yB < TB; yB++) 0 === VB[yB] && (VB[yB] = 1, dB.push(yB))
      }
    }
    var XT = dB(568);
    class WT {
      constructor(BB) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: BB,
          owes: BB => {
            this.owing.add(BB)
          },
          settled: (BB, TB) => {
            this.owing.delete(BB), TB && this.live.delete(BB)
          }
        }
      }
      create(BB, TB) {
        if (dB = BB, !XT.j.includes(dB)) return null;
        var dB;
        const VB = new hT(++this.keys, oB.l.indexOf(BB), TB, this.host);
        return this.live.add(VB), VB
      }
      disposeAll() {
        for (const BB of [...this.live]) BB.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const BB = this.host.cmd();
        for (const TB of this.owing)
          if (!TB.sync(BB)) return
      }
    }
    class hT {
      constructor(BB, TB, dB, VB) {
        this.key = BB, this.lifeform = TB, this.scale = dB, this.host = VB, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.ND = !1, this.sync()
      }
      setPose(BB, TB) {
        this.ND || (this.feet[0] = BB[0], this.feet[1] = BB[1], this.feet[2] = BB[2], this.yaw = TB, this.owed |= 2, this.sync())
      }
      setVisible(BB) {
        this.ND || BB === this.visible || (this.visible = BB, this.owed |= 4, this.sync())
      }
      dispose() {
        this.ND || (this.ND = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(BB) ? (this.host.settled(this, this.ND), !0) : (this.host.owes(this), !1)
      }
      write(BB) {
        if (!BB) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, DB.We)(BB, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const TB = (2 & this.owed ? DB.Xc.Pose : 0) | (4 & this.owed ? DB.Xc.Visible : 0);
        if (0 !== TB) {
          if (!(0, DB.Se)(BB, 0, this.key, TB, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, DB.Pe)(BB, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var CT = dB(39781);

    function GT(BB, TB, dB, VB) {
      return (0, CT.c)(), (0, DB.Lf)(BB, TB, dB, VB)
    }
    var qT = dB(38065),
      xT = dB(39330);
    const jT = [0, 0, 0],
      AT = [0, 0, 0],
      bT = [0, 0, 0],
      nT = [0, 0, 0],
      eT = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Bd = [0, 0, 0],
      Td = [0, 0],
      dd = [1, 1, 1],
      Vd = 1 / 3;
    const yd = kT.f;

    function pd(BB) {
      const TB = kT.d[BB],
        dB = TB && kT.f[TB.mainMultiblock];
      return dB && {
        main: dB,
        x: TB.compX,
        y: TB.compY,
        z: TB.compZ
      }
    }

    function ld(BB) {
      if (null === BB || void 0 === BB) return DB.ad;
      const TB = +BB;
      return Number.isInteger(TB) && TB >= -2147483648 && TB <= 2147483647 && String(TB) === String(BB) ? TB : DB.ad
    }

    function Jd(BB, TB, dB) {
      return (0, DB.Qf)(BB, 0, TB, null !== dB && void 0 !== dB ? dB : Number.NaN)
    }
    class Yd {
      constructor(BB) {
        this.deps = BB, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new qT.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (BB => {
          var TB, dB;
          null === (TB = (dB = this.deps).setLocalOptions) || void 0 === TB || TB.call(dB, BB)
        })), this.mobModels = new WT((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          ND: (BB, TB) => {
            this.livePools.delete(BB), null !== TB && (this.owedFrees.push(TB), this.flushOwed())
          }
        }, this.api = BB.api, this.live = BB.live, this.chunks = BB.chunks, this.items = BB.items, this.tables = BB.tables
      }
      isLocal(BB) {
        return null !== BB && void 0 !== BB && +BB === this.api.localId
      }
      assertLocal(BB, TB) {
        if (!this.isLocal(BB)) throw new Error(`Attempted to ${TB} for a player that is not the local player`)
      }
      Dv(BB) {
        const TB = this.api.Dv(BB);
        if (!TB) throw new Error(`Entity ${BB} has no replicated position`);
        return TB
      }
      checkValid(BB) {
        return !!this.deps.isSessionLive() && (null === BB || void 0 === BB || this.api.checkValid(BB))
      }
      isAlive(BB) {
        return !1 !== this.api.isAlive(BB)
      }
      getItemStat(BB, TB, dB) {
        return this.isLocal(BB) || null !== BB && "Player" === this.api.getEntityType(BB) ? this.tables.getItemStat(TB, dB) : this.tables.getDefaultItemStat(TB, dB)
      }
      getClientOption(BB, TB) {
        return this.assertLocal(BB, "get a client option"), this.tables.getClientOption(TB)
      }
      openShop(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(BB, "open shop"), lB.h.yH("showShopFromServer", {
          toggle: TB,
          kd: dB
        }, !0)
      }
      sendMessage(BB, TB, dB) {
        this.assertLocal(BB, "send a message");
        const VB = "string" === typeof TB ? [{
          str: TB,
          style: dB
        }] : TB;
        lB.h.yH("chat", {
          content: VB
        }, !0)
      }
      getEntityType(BB) {
        return this.api.getEntityType(BB)
      }
      getEntityName(BB) {
        const TB = ld(BB);
        return TB === DB.ad ? void 0 : (0, RT.l)(this.api, TB)
      }
      hasEffect(BB, TB) {
        const dB = ld(BB);
        return dB !== DB.ad && (0, RT.h)(this.api, dB, TB)
      }
      getMetaInfo(BB) {
        return this.tables.getMetaInfo(BB)
      }
      getPlayerDbId(BB) {
        return this.assertLocal(BB, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(BB, TB, dB) {
        if (!this.chunks.dataCleared(BB, TB, dB)) return (0, RT.e)(this.api, BB, TB, dB)
      }
      Cw(BB, TB, dB, VB) {
        this.setBlockId(BB, TB, dB, this.tables.getItemId(VB))
      }
      setOtherEntitySetting(BB, TB, dB, VB) {
        if (!this.isLocal(BB)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(DB.jd, dB)) throw new Error(`Unknown other-entity setting ${dB}`);
        const yB = DB.jd[dB],
          pB = ld(TB);
        if (pB === DB.ad || !this.deps.beforeWrite()) return;
        const lB = (0, PB.e)(VB);
        if (lB.length > 16384) throw new Error(`The other-entity setting ${dB}'s value is over 16384 bytes`);
        const JB = this.api.memoryView(Uint8Array, this.api.scratch(), lB.length, "set_other_entity_setting's value");
        JB && (JB.set(lB), this.api.queries.setOtherEntitySetting(pB, yB, lB.length))
      }
      getPositionView(BB) {
        return this.live.position(+BB)
      }
      readDrawnPosition(BB, TB) {
        return this.api.readDrawnPosition(ld(BB), TB)
      }
      getDrawnHeading(BB) {
        const TB = ld(BB),
          dB = (TB === DB.ad ? 0 : this.api.queries.directorEntity(TB)) >= DB.xb.BYTES ? this.api.memoryData(this.api.scratch(), DB.xb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!dB) return null;
        if (1 === DB.xb.headingIsDrawn(dB, 0)) return DB.xb.heading(dB, 0);
        const VB = this.api.apiView;
        return this.isLocal(BB) && 0 === (DB.B.playerFlags(VB, 0) & DB.Bd.FreeCam) ? DB.B.heading(VB, 0) : null
      }
      getLocalPlayerMovement() {
        const BB = DB.B.playerFlags(this.api.apiView, 0);
        return 0 === (BB & DB.Bd.Replay) && this.api.readDrawnPosition(this.api.localId, bT) ? {
          onGround: 0 !== (BB & DB.Bd.OnGround),
          jumpHeld: 0 !== (BB & DB.Bd.JumpHeld)
        } : null
      }
      gdB(BB) {
        return this.isLocal(BB) ? this.items.Dg() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var BB, TB;
        return "Gun" === (null === (BB = this.aliveHeld()) || void 0 === BB || null === (TB = BB.typeObj) || void 0 === TB ? void 0 : TB.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Dg()
      }
      isCrosshairShown() {
        var BB, TB;
        const dB = VB.d.get("crosshairShownOverride");
        if (null !== dB) return dB;
        const yB = null === (BB = this.aliveHeld()) || void 0 === BB ? void 0 : BB.typeObj,
          pB = "Gun" === (null === yB || void 0 === yB ? void 0 : yB.type),
          lB = pB || !0 === (null === yB || void 0 === yB ? void 0 : yB.showsAimingUi),
          JB = 0 === (DB.B.playerFlags(this.api.apiView, 0) & DB.Bd.ZoomFirstPerson),
          YB = null !== (TB = this.tables.getClientOption("gunshotOrigin")) && void 0 !== TB ? TB : null;
        return (0, OT.f)({
          gun: pB,
          aimable: lB
        }, JB, (0, DT.e)(), YB)
      }
      setCrosshairShown(BB) {
        VB.d.set({
          crosshairShownOverride: BB
        })
      }
      getInventoryFreeSlotCount(BB) {
        return this.isLocal(BB) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(BB) {
        return this.isLocal(BB) ? this.items.selectedSlot : null
      }
      getItemSlot(BB, TB) {
        return this.isLocal(BB) ? this.items.slot(TB) : null
      }
      swapInventorySlots(BB, TB) {
        return this.items.swap(BB, TB)
      }
      isPlayerCrouching(BB) {
        if (this.isLocal(BB)) return 0 !== (DB.B.playerFlags(this.api.apiView, 0) & DB.Bd.Crouching);
        const TB = ld(BB);
        return TB !== DB.ad && 1 === this.api.queries.entityCrouching(TB)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (DB.B.playerFlags(this.api.apiView, 0) & DB.Bd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.qBB()
      }
      getActionRay() {
        const BB = this.api.apiView;
        for (let TB = 0; TB < 3; TB++) eT.origin[TB] = DB.B.pTB(BB, 0, TB), eT.direction[TB] = DB.B.actionDir(BB, 0, TB);
        return eT
      }
      canModifyBlockAt(BB, TB, dB) {
        return 1 === this.api.queries.canModify(BB, TB, dB)
      }
      isSolidToPlayerBlockId(BB) {
        return this.tables.isSolidBlockId(BB) && !this.chunks.isWalkThrough(BB)
      }
      blockNameToBlockId(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(BB, TB)
      }
      blockIdToBlockName(BB) {
        return this.tables.nameOfId(BB)
      }
      FTB(BB, TB, dB, VB, yB) {
        return 1 === this.api.queries.terrainBlocked(VB, BB, TB, dB, ld(null !== yB && void 0 !== yB ? yB : null))
      }
      getChunkVersion(BB, TB, dB) {
        return this.chunks.version(BB, TB, dB)
      }
      scanBlocks(BB, TB, dB, VB, yB, pB, lB, JB) {
        return this.chunks.scan(BB, TB, dB, VB, yB, pB, lB, JB)
      }
      isBlockInLoadedChunk(BB, TB, dB) {
        return this.chunks.isLoaded(BB, TB, dB)
      }
      getBlockId(BB, TB, dB) {
        return this.chunks.rY(BB, TB, dB)
      }
      playSound(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(BB)) return null;
        const lB = this.playSoundFrom(TB, dB, yB, pB);
        return 1 === VB ? lB : lB.rate(VB)
      }
      playSoundFrom(BB, TB, dB, VB) {
        var yB, pB;
        const lB = this.deps.playSound;
        if (!lB) return wT.e;
        const JB = null === dB || void 0 === dB ? void 0 : dB.xp,
          YB = null !== (yB = null === dB || void 0 === dB ? void 0 : dB.maxHearDist) && void 0 !== yB ? yB : LT.c,
          gB = null !== (pB = null === dB || void 0 === dB ? void 0 : dB.refDistance) && void 0 !== pB ? pB : LT.f;
        let oB = null;
        if (Array.isArray(JB)) jT[0] = JB[0], jT[1] = JB[1], jT[2] = JB[2], oB = jT;
        else if (void 0 !== JB && null !== JB) {
          const BB = ld(JB);
          if (!this.api.isLocal(BB)) {
            if (!this.api.readPosition(BB, jT)) return wT.e;
            oB = jT
          }
        }
        return lB(BB, TB, oB, oB && this.ear(), YB, gB, VB)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, AT)) AT[1] += FT;
        else {
          const BB = this.api.apiView;
          if (0 === DB.B.viewProj(BB, 0, 3) && 0 === DB.B.viewProj(BB, 0, 7) && 0 === DB.B.viewProj(BB, 0, 11)) return null;
          for (let TB = 0; TB < 3; TB++) AT[TB] = DB.B.eye(BB, 0, TB)
        }
        return Number.isFinite(AT[0] + AT[1] + AT[2]) ? AT : null
      }
      setBlockId(BB, TB, dB, VB) {
        if (!Number.isInteger(VB) || VB < 0 || VB > 65535) throw new Error(`Invalid block id ${VB}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(BB, TB, dB)) return;
        const yB = Math.floor(BB),
          pB = Math.floor(TB),
          lB = Math.floor(dB),
          JB = this.predictedCells(yB, pB, lB, VB);
        if (1 === this.api.queries.Cw(yB, pB, lB, VB)) {
          for (let BB = 0; BB < JB.length; BB += 5) this.chunks.setOverlay(JB[BB], JB[BB + 1], JB[BB + 2], JB[BB + 3], 1 === JB[BB + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(BB, TB) {
        return this.deps.particles.create(BB, TB)
      }
      playParticleEffect(BB) {
        this.deps.particles.playEffect(BB)
      }
      burstParticlePreset(BB, TB, dB) {
        this.deps.particles.burstPreset(BB, TB, dB)
      }
      createGameMesh(BB, TB, dB) {
        const VB = ++this.meshKeys,
          yB = this.deps.cmd();
        if (!yB) return VB;
        const {
          look: pB,
          colour: lB
        } = function(BB) {
          switch (BB.kind) {
            case void 0:
            case "flatEmissive":
              return BB.onTop ? {
                look: DB.ec.FlatOnTop,
                colour: [...BB.rgb, BB.alpha]
              } : BB.opaque ? {
                look: DB.ec.FlatOpaque,
                colour: [...BB.rgb, 1]
              } : {
                look: DB.ec.Flat,
                colour: [...BB.rgb, BB.alpha]
              };
            case "chevronPath":
              return {
                look: DB.ec.Chevrons, colour: [...(0, uT.b)(BB.colour), BB.alpha]
              };
            case "furnaceFire":
              return {
                look: DB.ec.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(TB), JB = Math.floor(BB.positions.length / 3), YB = function(BB, TB) {
          const dB = Math.floor(BB.positions.length / 3),
            VB = BB.indices.length,
            yB = dB * (TB ? 5 : 3),
            pB = new Uint8Array(4 * (yB + VB)),
            lB = new DataView(pB.buffer);
          for (let gB = 0; gB < 3 * dB; gB++) lB.setFloat32(4 * gB, BB.positions[gB], !0);
          if (TB) {
            var JB;
            const TB = null !== (JB = BB.uvs) && void 0 !== JB ? JB : [];
            for (let BB = 0; BB < 2 * dB; BB++) {
              var YB;
              lB.setFloat32(4 * (3 * dB + BB), null !== (YB = TB[BB]) && void 0 !== YB ? YB : 0, !0)
            }
          }
          for (let gB = 0; gB < VB; gB++) lB.setUint32(4 * (yB + gB), BB.indices[gB], !0);
          return pB
        }(BB, (0, oT.k)(TB));
        return (0, DB.Ae)(yB, 0, VB, pB, lB, dB, JB, BB.indices.length, YB) && this.liveMeshes.add(VB), VB
      }
      setGameMesh(BB, TB) {
        var dB;
        const VB = this.deps.cmd();
        if (!VB) return;
        let yB = 0;
        TB.anchor && (yB |= DB.ic.Anchor, Bd[0] = TB.anchor[0], Bd[1] = TB.anchor[1], Bd[2] = TB.anchor[2]), void 0 !== TB.visible && (yB |= DB.ic.Visible), TB.uvOffset && (yB |= DB.ic.UvOffset, Td[0] = TB.uvOffset[0], Td[1] = TB.uvOffset[1]);
        const pB = null !== (dB = TB.visibility) && void 0 !== dB ? dB : 1;
        void 0 !== TB.visibility && (yB |= DB.ic.Visibility), TB.scale && (yB |= DB.ic.Scale, dd[0] = TB.scale[0], dd[1] = TB.scale[1], dd[2] = TB.scale[2]), 0 !== yB && (0, DB.Ee)(VB, 0, BB, yB, TB.visible ? 1 : 0, Bd, Td, pB, dd)
      }
      disposeGameMesh(BB) {
        const TB = this.deps.cmd();
        TB && !(0, DB.De)(TB, 0, BB) || this.liveMeshes.delete(BB)
      }
      hasPackModel(BB) {
        var TB, dB, VB;
        return null !== (TB = null === (dB = (VB = this.deps).hasPackModel) || void 0 === dB ? void 0 : dB.call(VB, BB)) && void 0 !== TB && TB
      }
      disposeGameOutput() {
        const BB = BB => {
          try {
            BB()
          } catch (TB) {
            console.error("Error freeing client game output", TB)
          }
        };
        for (const TB of [...this.liveMeshes]) BB((() => {
          this.disposeGameMesh(TB)
        }));
        for (const TB of [...this.livePools]) BB((() => {
          TB.dispose()
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
      createInstancePool(BB, TB) {
        const dB = this.tables.idOf(BB.item);
        if (void 0 === dB) return null;
        const VB = new ZT(++this.poolKeys, {
          item: dB,
          scale: BB.scale,
          yaw: BB.yaw
        }, TB, this.poolHost);
        return this.livePools.add(VB), VB
      }
      createMobModel(BB, TB) {
        return this.mobModels.create(BB, TB)
      }
      setRouteChevrons(BB) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !BB || 0 === BB.cells.length) return;
        const TB = `${BB.colour} ${BB.alpha}`;
        TB !== this.routeLook && (this.routeLook = TB, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(BB) {
          const [TB, dB, VB] = BB[0].pos, yB = [], pB = [], lB = [];
          return BB.forEach(((BB, JB) => {
            let {
              pos: YB,
              way: [gB, oB]
            } = BB;
            const kB = YB[0] - TB + .5,
              LB = YB[1] - dB + .04,
              OB = YB[2] - VB + .5,
              [DB, uB] = [.35 * -oB, .35 * gB],
              [HB, EB] = [JB * Vd, (JB + 1) * Vd],
              vB = yB.length / 3;
            yB.push(kB - .5 * gB + DB, LB, OB - .5 * oB + uB), yB.push(kB - .5 * gB - DB, LB, OB - .5 * oB - uB), yB.push(kB + .5 * gB + DB, LB, OB + .5 * oB + uB), yB.push(kB + .5 * gB - DB, LB, OB + .5 * oB - uB), pB.push(0, HB, 1, HB, 0, EB, 1, EB), lB.push(vB, vB + 1, vB + 2, vB + 1, vB + 3, vB + 2)
          })), {
            positions: yB,
            uvs: pB,
            indices: lB
          }
        }(BB.cells), {
          kind: "chevronPath",
          colour: BB.colour,
          alpha: BB.alpha
        }, BB.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(BB) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(BB, 250) / 1e3 * 1.2 * Vd) % 1, this.setRouteSlide())
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
        const TB = this.deps.cmd();
        if (!TB) return BB.length = 0, void(this.pendingFar = void 0);
        let dB = 0;
        for (; dB < BB.length && (0, DB.Ke)(TB, 0, BB[dB]);) dB++;
        BB.splice(0, dB);
        const VB = this.pendingStyle;
        if (void 0 !== VB) {
          (VB ? (0, DB.Uf)(TB, 0, VB.width, VB.alpha, 1, VB.endAtSolidFace ? 1 : 0) : (0, DB.Uf)(TB, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const yB = this.pendingFar;
        void 0 !== yB && (0, DB.Pf)(TB, 0, null !== yB && void 0 !== yB ? yB : 0, null === yB ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(BB, TB) {
        const dB = this.deps.cmd(),
          VB = ld(BB);
        dB && VB !== DB.ad && (0, DB.$f)(dB, 0, VB, TB)
      }
      setFacingTolerance(BB, TB) {
        const dB = this.deps.cmd(),
          VB = ld(BB);
        dB && VB !== DB.ad && Jd(dB, VB, TB)
      }
      forEachEntity(BB) {
        const {
          api: TB
        } = this;
        for (let dB = 0; dB < TB.idStr.length; dB++) {
          const VB = TB.idStr[dB];
          null === VB || NB(TB.kinds[dB]) || BB(VB)
        }
      }
      getEntityInfo(BB) {
        return this.deps.entityInfo.get(BB)
      }
      isEntityInteractable(BB) {
        const TB = ld(BB);
        return TB !== DB.ad && 1 === this.api.queries.entityInteractable(TB)
      }
      isLocalPlayer(BB) {
        return this.isLocal(BB)
      }
      getLineOwner(BB) {
        var TB;
        const dB = null === (TB = this.deps.entityInfo.get(BB)) || void 0 === TB ? void 0 : TB.meshOpts;
        if (!dB) return null;
        try {
          const {
            lineToEId: BB
          } = JSON.parse(dB);
          return null !== BB && void 0 !== BB ? BB : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const BB = this.api.apiView;
        return nT[0] = DB.B.eye(BB, 0, 0), nT[1] = DB.B.eye(BB, 0, 1), nT[2] = DB.B.eye(BB, 0, 2), nT
      }
      getCameraFar() {
        return DB.B.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(BB) {
        null !== BB && (this.farSet = !0), this.pendingFar = BB, this.flushOwed()
      }
      turnCamera(BB, TB) {
        this.cameraTurn.turn(BB, TB)
      }
      clearPickupDelay(BB) {
        const TB = this.deps.cmd(),
          dB = ld(BB);
        TB && dB !== DB.ad && (0, DB.ke)(TB, 0, dB)
      }
      sendChat(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = this.deps.sendCmd();
        dB && GT(dB, 0, xT.c.Chat, (0, PB.e)((0, xT.j)({
          Jo: BB,
          Yo: TB
        })))
      }
      sendCommand(BB) {
        BB.length <= 119 && this.sendChat(`/${BB}`)
      }
      predictedCells(BB, TB, dB, VB) {
        const yB = this.chunks,
          pB = [],
          lB = (BB, TB, dB, VB, yB) => {
            pB.push(BB, TB, dB, VB, this.tables.blockRootId(yB) === this.tables.blockRootId(VB) ? 0 : 1)
          },
          JB = yB.rY(BB, TB, dB),
          YB = pd(JB);
        if (YB) {
          const [VB, pB, gB] = [BB - YB.x, TB - YB.y, dB - YB.z], oB = yd[yB.rY(VB, pB, gB)], kB = null === oB || void 0 === oB ? void 0 : oB.positions.some((BB => BB.id === JB && BB.x === YB.x && BB.y === YB.y && BB.z === YB.z));
          for (const BB of (kB && oB ? oB : YB.main).positions) yB.rY(VB + BB.x, pB + BB.y, gB + BB.z) === BB.id && lB(VB + BB.x, pB + BB.y, gB + BB.z, 0, BB.id)
        }
        const gB = pd(VB);
        if (gB)
          for (const kB of gB.main.positions) {
            const [VB, pB, JB] = [BB + kB.x - gB.x, TB + kB.y - gB.y, dB + kB.z - gB.z];
            lB(VB, pB, JB, kB.id, yB.rY(VB, pB, JB))
          } else lB(BB, TB, dB, VB, JB);
        const oB = this.tables;
        if ((0 !== oB.attachedTopOf(JB) || 0 !== oB.attachedTopOf(VB)) && yB.isLoaded(BB, TB + 1, dB)) {
          let YB = yB.rY(BB, TB + 1, dB);
          for (let VB = 0; VB < pB.length; VB += 5) pB[VB] === BB && pB[VB + 1] === TB + 1 && pB[VB + 2] === dB && (YB = pB[VB + 3]);
          const gB = this.attachedTopWrite(JB, VB, YB);
          void 0 !== gB && lB(BB, TB + 1, dB, gB, YB)
        }
        return pB
      }
      attachedTopWrite(BB, TB, dB) {
        const VB = this.tables,
          yB = VB.attachedTopOf(BB),
          pB = VB.attachedTopOf(TB),
          lB = 0 !== yB && 0 !== dB && VB.blockRootId(dB) === VB.blockRootId(yB);
        return 0 !== yB && 0 !== pB && VB.blockRootId(BB) === VB.blockRootId(TB) ? lB && dB !== pB ? pB : void 0 : 0 === pB || !lB && 0 !== dB ? lB ? 0 : void 0 : pB
      }
    }
    const gd = DB.sc + DB.tc * DB.Cc.BYTES,
      od = 2147483647,
      kd = new TextDecoder,
      Ld = new TextEncoder,
      Od = Object.freeze({
        Uo: 0,
        jg: null,
        amountAddedToSlot: 0
      }),
      Dd = new Proxy({}, {
        get: () => () => DB.id
      });

    function ud(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 65535
    }

    function Hd(BB) {
      return Number.isInteger(BB) && BB >= 0 && BB <= 4294967295
    }
    class Ed {
      constructor(BB) {
        this.deps = BB, this.ad = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(DB.tc), this.ids = new Uint16Array(DB.tc), this.amounts = new Uint16Array(DB.tc), this.attrRead = new Float64Array(DB.tc).fill(-1), this.stale = new Uint16Array(DB.tc), this.staleVersion = new Uint32Array(DB.tc), this.instances = new Uint32Array(DB.tc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var TB;
        return Number.isInteger(BB) && BB >= 0 && BB < this.len && 0 !== this.ids[BB] && null !== (TB = this.facades[BB]) && void 0 !== TB ? TB : null
      }
      Dg() {
        return this.slot(this.selected)
      }
      playerItems() {
        const BB = [];
        for (let TB = 0; TB < Math.min(DB.nd, this.len); TB++) BB.push(this.slot(TB));
        return BB
      }
      freeSlots() {
        let BB = 0;
        for (let TB = 0; TB < Math.min(DB.nd - DB.k, this.len); TB++) 0 === this.ids[TB] && BB++;
        return BB
      }
      amountOf(BB) {
        let TB = 0;
        for (let VB = 0; VB < Math.min(DB.nd, this.len); VB++) {
          const yB = this.slot(VB);
          var dB;
          if ((null === yB || void 0 === yB ? void 0 : yB.name) === BB) TB += null !== (dB = yB.amount) && void 0 !== dB ? dB : 1
        }
        return TB
      }
      instance(BB) {
        var TB;
        return null !== (TB = this.instances[BB]) && void 0 !== TB ? TB : 0
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
          for (const dB of [...this.listeners]) try {
            dB()
          } catch (TB) {
            BB(TB)
          }
        }
      }
      chestOpened(BB, TB, dB) {
        this.ad[0] = BB, this.ad[1] = TB, this.ad[2] = dB, this.version++
      }
      refresh() {
        const BB = this.deps.api.apiView,
          TB = DB.B.inventoryViewPtr(BB, 0),
          dB = DB.B.inventoryVersion(BB, 0),
          VB = DB.B.selectedSlot(BB, 0);
        VB !== this.selected && (this.selected = VB, this.version++);
        const yB = DB.B.slotIcon(BB, 0);
        if (yB !== this.slotIconId && (this.slotIconId = yB, this.iconChanged = !0), TB === this.viewPtr && dB === this.viewVersion) return;
        this.viewPtr = TB, this.viewVersion = dB;
        const pB = this.deps.api.memoryData(TB, gd, 4, "the inventory view"),
          lB = pB ? Math.min(pB.getUint32(0, !0), DB.tc) : 0;
        lB !== this.len && (this.len = lB, this.version++);
        let JB = 0;
        for (let YB = 0; YB < DB.tc; YB++) {
          const BB = DB.sc + YB * DB.Cc.BYTES,
            TB = null !== pB && YB < lB ? DB.Cc.item(pB, BB) : 0;
          if (0 === TB || null === pB) {
            0 !== this.ids[YB] && (this.ids[YB] = 0, this.attrRead[YB] = -1, this.instances[YB]++, this.version++);
            continue
          }
          const dB = DB.Cc.amount(pB, BB),
            VB = DB.Cc.attrVersion(pB, BB);
          TB === this.ids[YB] && dB === this.amounts[YB] || this.fill(YB, TB, dB), VB !== this.attrRead[YB] && (this.stale[JB] = YB, this.staleVersion[JB] = VB, JB++)
        }
        JB > 0 && this.fetchAttributes(JB)
      }
      fill(BB, TB, dB) {
        const {
          tables: VB
        } = this.deps, yB = TB !== this.ids[BB];
        let pB = this.facades[BB];
        pB || (pB = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[BB] = pB), yB && (pB.name = VB.nameOfId(TB), pB.typeObj = VB.itemType(TB), pB.attributes = {
          customAttributes: {}
        }, this.attrRead[BB] = -1, this.instances[BB]++), pB.amount = 0 === dB ? null : dB, this.ids[BB] = TB, this.amounts[BB] = dB, this.version++
      }
      fetchAttributes(BB) {
        const {
          api: TB,
          onError: dB
        } = this.deps, VB = TB.memoryView(Uint16Array, TB.scratch(), BB, "item_attributes_batch's slots");
        if (!VB) return void this.markRead(BB);
        VB.set(this.stale.subarray(0, BB));
        const yB = TB.queries.itemAttributesBatch(BB),
          pB = 4294967295 === yB ? null : TB.memoryData(TB.scratch(), yB, 4, "item_attributes_batch's answer");
        if (!pB) return void this.markRead(BB);
        const lB = new Uint8Array(pB.buffer, pB.byteOffset, yB);
        for (let YB = 0; YB + 8 <= yB;) {
          const BB = pB.getUint16(YB, !0),
            TB = pB.getUint32(YB + 4, !0),
            VB = lB.subarray(YB + 8, YB + 8 + TB);
          YB += 8 + (0, LB.je)(TB);
          const yB = this.facades[BB];
          if (yB && 0 !== this.ids[BB] && 0 !== TB) {
            try {
              yB.attributes = JSON.parse(kd.decode(VB))
            } catch (JB) {
              dB(JB)
            }
            this.version++
          }
        }
        this.markRead(BB)
      }
      markRead(BB) {
        for (let TB = 0; TB < BB; TB++) this.attrRead[this.stale[TB]] = this.staleVersion[TB]
      }
      swap(BB, TB) {
        return ud(BB) && ud(TB) && this.settle(this.queries().invSwap(BB, TB))
      }
      move(BB, TB, dB) {
        return ud(BB) && ud(TB) && Hd(dB) && this.settle(this.queries().invMove(BB, TB, dB))
      }
      quickMove(BB, TB, dB, VB) {
        var yB, pB;
        if (!ud(BB) || !ud(TB) || !ud(dB) || null !== VB && !Hd(VB)) return null;
        const lB = this.queries().invQuickMove(BB, TB, dB, null === VB ? -1 : Math.min(VB, od)),
          JB = lB === DB.id ? DB.Ob : null !== (yB = null === (pB = this.extras()) || void 0 === pB ? void 0 : pB[1]) && void 0 !== yB ? yB : DB.Ob;
        return this.settle(lB), JB === DB.Ob ? null : JB
      }
      remove(BB, TB, dB) {
        return ud(BB) && Hd(TB) && this.settle(this.queries().invRemove(BB, TB, dB ? 1 : 0))
      }
      selectSlot(BB) {
        return ud(BB) && this.settle(this.queries().selectSlot(BB))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(BB, TB, dB) {
        if (!ud(BB) || !Number.isInteger(TB)) return !1;
        const [VB, yB, pB] = dB;
        return this.settle(this.queries().invEnchant(BB, TB, Math.floor(VB), Math.floor(yB), Math.floor(pB)))
      }
      craft(BB, TB, dB) {
        let VB;
        try {
          VB = this.deps.tables.getItemId(BB)
        } catch {
          return Od
        }
        if (!ud(TB) || null !== dB && (Number.isNaN(dB) || dB < 0)) return Od;
        const yB = null === dB || dB > od ? -1 : Math.floor(dB),
          pB = this.queries().craft(VB, TB, yB);
        let lB = Od;
        const JB = pB === DB.id ? null : this.extras();
        if (JB) {
          const [BB, TB, dB] = JB;
          lB = {
            Uo: BB,
            jg: TB === DB.Ob ? null : TB,
            amountAddedToSlot: dB
          }
        }
        return this.settle(pB), lB
      }
      salvage(BB, TB, dB) {
        let VB;
        try {
          VB = this.deps.tables.getItemId(TB)
        } catch {
          return !1
        }
        return ud(BB) && Number.isInteger(dB) && this.settle(this.queries().salvage(BB, VB, Math.max(Math.min(dB, od), -od)))
      }
      craftingView(BB, TB, dB) {
        var VB;
        if (this.stopped) return null;
        const {
          api: yB,
          onError: pB
        } = this.deps, lB = BB ? Ld.encode(BB) : null;
        if (null !== lB) {
          if (lB.length > 1024) return pB(new Error(`The crafting station ${BB}'s name is over 1024 bytes`)), null;
          const TB = yB.memoryView(Uint8Array, yB.scratch(), lB.length, "crafting_view's station");
          if (!TB) return null;
          TB.set(lB)
        }
        const JB = ud(TB) && ud(dB),
          YB = yB.queries.craftingView(null !== (VB = null === lB || void 0 === lB ? void 0 : lB.length) && void 0 !== VB ? VB : 0, JB ? TB : 0, JB ? dB : 0);
        return YB < DB.pb.BYTES ? (yB.reportCorruption(`crafting_view's answer of ${YB} bytes`), null) : yB.memoryData(yB.scratch(), YB, 1, "crafting_view's answer")
      }
      queries() {
        var BB, TB;
        return !1 === (null === (BB = (TB = this.deps).beforeOp) || void 0 === BB ? void 0 : BB.call(TB)) ? (this.stopped = !0, Dd) : this.deps.api.queries
      }
      extras() {
        const {
          api: BB
        } = this.deps;
        return BB.memoryView(Uint32Array, BB.scratch(), 3, "a sync query's extra words")
      }
      settle(BB) {
        if (BB === DB.hd)(0, CT.c)();
        else if (BB !== DB.id) {
          const TB = this.deps.cmd();
          TB && function(BB, TB, dB) {
            return (0, CT.c)(), (0, DB.ng)(BB, TB, dB)
          }(TB, 0, BB) || this.deps.onError(new Error(`Sync op ${BB}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), BB !== DB.id
      }
    }
    const vd = 1 / .6,
      md = [0, 1, 0],
      Nd = [0, 0, 0],
      td = new Uint8Array(0),
      fd = 1.2 * HT.c.lE,
      sd = new TextEncoder,
      Md = [0, 0, 0],
      zd = [0, 0, 0],
      wd = new Map;

    function Ud(BB) {
      let TB = wd.get(BB);
      return TB || (wd.size >= 64 && wd.clear(), TB = sd.encode(`{"emitRate":${BB}}`), wd.set(BB, TB)), TB
    }

    function Fd(BB) {
      return Number.isFinite(BB) && BB > 0 ? BB : 0
    }

    function Kd(BB, TB) {
      for (let dB = 0; dB < 3; dB++) {
        const VB = Math.abs(TB[dB]);
        Md[dB] = BB[dB] - VB, zd[dB] = 2 * VB
      }
      return Number.isFinite(Md[0] + Md[1] + Md[2] + zd[0] + zd[1] + zd[2])
    }

    function rd(BB, TB) {
      return "pos1" === BB || "pos2" === BB ? void 0 : TB
    }

    function Id(BB, TB, dB) {
      return BB.length > DB.xd.MaxOpts ? (dB(new Error(`${TB}'s particle opts are over ${DB.xd.MaxOpts} bytes of JSON`)), null) : BB
    }
    const cd = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Sd {
      constructor(BB) {
        this.deps = BB, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(BB, TB) {
        var dB;
        const VB = this.sink(),
          yB = null !== (dB = TB.half) && void 0 !== dB ? dB : Nd;
        if (!VB || this.live >= DB.xd.MaxLiveKeys || this.nextKey > DB.xd.MaxKey || !Kd(TB.pos, yB)) return cd;
        const pB = this.nextKey,
          lB = Id(function(BB) {
            var TB, dB, VB;
            const yB = JSON.stringify({
              texture: "string" === typeof BB.texture ? BB.texture : "smokePuff",
              Kk: BB.Kk,
              minLifeTime: BB.minLifeTime,
              maxLifeTime: BB.maxLifeTime,
              minSize: BB.minSize,
              maxSize: BB.maxSize,
              minEmitPower: BB.minEmitPower,
              maxEmitPower: BB.maxEmitPower,
              emitRate: Fd(BB.emitRate),
              gravity: null !== (TB = BB.gravity) && void 0 !== TB ? TB : Nd,
              dir1: null !== (dB = BB.dir1) && void 0 !== dB ? dB : md,
              dir2: null !== (VB = BB.dir2) && void 0 !== VB ? VB : md,
              colorGradients: BB.colorGradients,
              blendMode: BB.blendMode
            });
            return sd.encode(yB)
          }(BB), "createParticles", this.deps.onError);
        return lB && (0, DB.ff)(VB, 0, pB, 0, DB.xd.PresetNone, 0, Md, zd, lB) ? (this.nextKey++, this.live++, this.started = !0, new Pd(this, this.session, pB, BB, yB)) : cd
      }
      playEffect(BB) {
        const TB = this.sink(),
          {
            pos1: dB,
            pos2: VB
          } = BB;
        if (!TB || !dB || !VB) return;
        for (let pB = 0; pB < 3; pB++) Md[pB] = Math.min(dB[pB], VB[pB]), zd[pB] = Math.abs(VB[pB] - dB[pB]);
        if (!Number.isFinite(Md[0] + Md[1] + Md[2] + zd[0] + zd[1] + zd[2])) return;
        const yB = Id(sd.encode(JSON.stringify(BB, rd)), "playParticleEffect", this.deps.onError);
        yB && (0, DB.$e)(TB, 0, 0, DB.xd.PresetNone, DB.xd.HasBox, 0, Md, zd, yB)
      }
      burstPreset(BB, TB, dB) {
        const VB = this.sink(),
          yB = Math.min(Math.floor(dB), DB.xd.MaxBurst);
        if (!VB || !Object.hasOwn(DB.kc, BB) || !(yB > 0)) return;
        const pB = fd;
        for (let lB = 0; lB < 3; lB++) Md[lB] = TB[lB] - pB / 2, zd[lB] = pB;
        Number.isFinite(Md[0] + Md[1] + Md[2]) && (0, DB.$e)(VB, 0, 0, DB.kc[BB], DB.xd.HasBox, yB, Md, zd, td)
      }
      sessionEnded() {
        this.session++;
        const BB = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !BB || (0, DB.if)(BB, 0)
      }
      sinkFor(BB) {
        return BB === this.session ? this.deps.cmd() : null
      }
      stop(BB, TB) {
        const dB = this.sinkFor(BB);
        dB && (0, DB.lf)(dB, 0, TB) && this.live--
      }
    }
    class Pd {
      constructor(BB, TB, dB, VB, yB) {
        this.owner = BB, this.session = TB, this.key = dB, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(yB[0]), Math.abs(yB[1]), Math.abs(yB[2])], this.rate = Fd(VB.emitRate), this.emitted = this.rate > 0;
        const pB = VB.maxLifeTime * vd * 1e3 + 250;
        this.stopDelayMs = pB >= 0 ? Math.min(pB, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(BB, TB) {
        const dB = this.sink();
        if (dB) {
          if (TB)
            for (let BB = 0; BB < 3; BB++) this.half[BB] = Math.abs(TB[BB]);
          Kd(BB, this.half) && (0, DB.mf)(dB, 0, this.key, DB.xd.HasBox, Md, zd, td)
        }
      }
      setEmitRate(BB) {
        const TB = this.sink(),
          dB = Fd(BB);
        TB && dB !== this.rate && (0, DB.mf)(TB, 0, this.key, 0, Nd, Nd, Ud(dB)) && (this.rate = dB, this.emitted ||= dB > 0)
      }
      emit(BB) {
        const TB = this.sink(),
          dB = Math.min(Math.floor(BB), DB.xd.MaxBurst);
        TB && dB > 0 && (0, DB.$e)(TB, 0, this.key, DB.xd.PresetNone, 0, dB, Nd, Nd, td) && (this.emitted = !0)
      }
      emitPoints(BB, TB, dB) {
        const VB = this.sink(),
          yB = Math.min(Math.floor(dB), DB.xd.MaxPoints, Math.floor(TB.length / 4));
        if (!VB || !(yB > 0) || !Number.isFinite(BB[0] + BB[1] + BB[2])) return;
        const pB = new Uint8Array(TB.buffer, TB.byteOffset, yB * DB.xd.PointBytes);
        (0, DB.bf)(VB, 0, this.key, yB, BB, pB) && (this.emitted = !0)
      }
      setDirections(BB, TB) {
        const dB = this.sink();
        if (!dB || !Number.isFinite(BB[0] + BB[1] + BB[2] + TB[0] + TB[1] + TB[2])) return;
        const VB = sd.encode(JSON.stringify({
          dir1: [BB[0], BB[1], BB[2]],
          dir2: [TB[0], TB[1], TB[2]]
        }));
        (0, DB.mf)(dB, 0, this.key, 0, Nd, Nd, VB)
      }
      stop() {
        const BB = this.sink();
        this.stopped = !0, BB && (this.emitted ? (this.rate > 0 && (0, DB.mf)(BB, 0, this.key, 0, Nd, Nd, Ud(0)), setTimeout((() => {
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
    const Qd = XT.l,
      Rd = new TextDecoder;

    function ad(BB, TB) {
      const {
        serverIds: dB,
        kinds: VB
      } = BB;
      let yB = 0;
      for (let pB = 0; pB < dB.length; pB++) {
        const BB = dB[pB];
        if (BB !== DB.ad && !NB(VB[pB])) {
          if (yB === TB.length) {
            const BB = new Int32Array(Math.max(64, 2 * yB));
            BB.set(TB), TB = BB
          }
          TB[yB++] = BB
        }
      }
      return {
        ids: TB,
        count: yB
      }
    }

    function Zd(BB, TB) {
      return BB.length >= TB ? BB : new Int32Array(Math.max(TB, 2 * BB.length))
    }

    function Xd(BB, TB, dB, VB) {
      for (let yB = 0; yB < dB; yB += 4096) {
        const pB = Math.min(4096, dB - yB),
          lB = BB.memoryView(Int32Array, BB.scratch(), pB, "entity_info_batch's ids");
        if (!lB) return !1;
        lB.set(TB.subarray(yB, yB + pB));
        const JB = BB.queries.entityInfoBatch(pB),
          YB = 4294967295 === JB ? null : BB.memoryData(BB.scratch(), JB, 4, "entity_info_batch's records");
        if (!YB) return !1;
        for (let BB = 0; BB + DB.Wb.BYTES <= JB;) {
          const TB = DB.Wb.len(YB, BB);
          VB(DB.Wb.serverId(YB, BB), Wd(YB, BB, TB)), BB += DB.Wb.BYTES + (0, LB.je)(TB)
        }
      }
      return !0
    }

    function Wd(BB, TB, dB) {
      var VB, yB, pB;
      const lB = DB.Wb.kind(BB, TB),
        JB = 0 === lB ? null : tB(lB);
      if (null === JB) return null;
      const YB = DB.Wb.variation(BB, TB),
        gB = DB.Wb.pose(BB, TB),
        oB = DB.Wb.meta(BB, TB),
        kB = DB.Wb.mesh(BB, TB),
        LB = 0 !== (DB.Wb.flags(BB, TB) & DB.Sb.HasOpts),
        OB = Qd[JB];
      return Object.freeze({
        type: JB,
        variation: YB === DB.gd ? void 0 : null !== (VB = null !== (yB = null === OB || void 0 === OB ? void 0 : OB[YB]) && void 0 !== yB ? yB : null === OB || void 0 === OB ? void 0 : OB[0]) && void 0 !== VB ? VB : "default",
        pose: gB === DB.pc ? void 0 : null !== (pB = DB.Jb[gB]) && void 0 !== pB ? pB : DB.Jb[0],
        metaInfo: oB === DB.pc ? void 0 : DB.Vc[oB],
        meshKind: kB === DB.pc ? void 0 : DB.Rc[kB],
        meshOpts: LB ? Rd.decode(new Uint8Array(BB.buffer, BB.byteOffset + TB + DB.Wb.BYTES, dB)) : void 0
      })
    }
    const hd = 1,
      Cd = 2;
    class Gd {
      constructor(BB) {
        this.deps = BB, this.wanted = 0, this.Dg = !1, this.refused = !1
      }
      get on() {
        return this.Dg
      }
      want(BB, TB) {
        this.wanted = TB ? this.wanted | BB : this.wanted & ~BB;
        const dB = 0 !== this.wanted;
        if (dB === this.Dg) return;
        const VB = this.deps.cmd();
        null !== VB ? (0, DB.sg)(VB, 0, dB ? 1 : 0) ? (this.Dg = dB, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Dg = !1
      }
    }
    class qd {
      constructor(BB) {
        this.deps = BB, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(BB) {
        var TB;
        return this.complete || this.fill(), null !== (TB = this.entries.get("string" === typeof BB ? BB : String(BB))) && void 0 !== TB ? TB : null
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
            api: TB
          } = this.deps;
          let dB = 0;
          const VB = this.ids = Zd(this.ids, BB);
          for (let yB = 0; yB < BB; yB++) {
            const BB = this.pending[yB],
              pB = TB.indexById.get(BB);
            void 0 === pB || NB(TB.kinds[pB]) ? this.entries.delete(String(BB)) : VB[dB++] = BB
          }
          dB > 0 && !this.batch(VB, dB) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(hd, !1)
      }
      fill() {
        const {
          api: BB
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: BB
          } = this.deps, TB = BB.on;
          BB.want(hd, !0), !TB && BB.on && (this.refill = this.midFrame)
        }
        const {
          ids: TB,
          count: dB
        } = ad(BB, this.ids);
        this.ids = TB, dB > 0 && !this.batch(TB, dB) && (this.refill = !0)
      }
      batch(BB, TB) {
        return Xd(this.deps.api, BB, TB, ((BB, TB) => {
          null === TB ? this.entries.delete(String(BB)) : this.entries.set(String(BB), TB)
        }))
      }
    }
    var xd = dB(4192);

    function jd(BB) {
      if ("message" !== BB.type || BB.Jo !== xd.Jb.NewClientOptions || BB.payloadKind !== LB.ac.Msgpack) return null;
      const TB = (0, PB.c)(BB.payload);
      if (null === TB || "object" !== typeof TB || Array.isArray(TB)) throw new Error("NewClientOptions whose body isn't an object of options");
      return TB
    }
    var Ad = dB(1117),
      bd = dB(35624);

    function nd(BB, TB, dB, VB, yB, pB, JB) {
      var YB, gB, oB;
      switch (BB) {
        case DB.Yd.ToggleMenu: {
          const BB = DB.V[TB];
          lB.h.yH("toggleMenu", void 0 === BB ? "inventory" : `inventory|${BB}`);
          break
        }
        case DB.Yd.EditBoard:
          lB.h.yH("EditBoard", {
            pos: 0 === TB ? null : dB
          });
          break;
        case DB.Yd.EditCodeBlock:
        case DB.Yd.ViewCodeBlock:
          lB.h.yH("EditCodeBlock", {
            pos: dB,
            canChangePos: BB === DB.Yd.EditCodeBlock
          });
          break;
        case DB.Yd.EditCustomLobbyBlock:
          lB.h.yH("EditCustomLobbyBlock", {
            pos: dB
          });
          break;
        case DB.Yd.OpenIronChest:
          lB.h.yH("OpenIronChest", {
            pos: dB
          });
          break;
        case DB.Yd.EditNameTag:
          lB.h.yH("EditNameTag", null !== (YB = null === (gB = yB.Dg()) || void 0 === gB || null === (oB = gB.attributes.customAttributes) || void 0 === oB ? void 0 : oB.text) && void 0 !== YB ? YB : "");
          break;
        case DB.Yd.EditBook: {
          var kB, LB, uB;
          const BB = null === (kB = yB.Dg()) || void 0 === kB ? void 0 : kB.attributes;
          lB.h.yH("EditBook", {
            pages: (0, Ad.J)(null === BB || void 0 === BB || null === (LB = BB.customAttributes) || void 0 === LB ? void 0 : LB.pages),
            title: null !== (uB = null === BB || void 0 === BB ? void 0 : BB.customDisplayName) && void 0 !== uB ? uB : "Title",
            isPublished: !(null === BB || void 0 === BB || !BB.customDescription)
          });
          break
        }
        case DB.Yd.CantChangeBlock:
          ! function(BB, TB) {
            const dB = TB.getClientOption("cantChangeError"),
              VB = TB.getClientOption(BB ? "cantBuildError" : "cantBreakError"),
              yB = BB ? dB : VB;
            (TB.getClientOption("canChange") || yB || "You cannot modify this block" !== dB) && lB.h.yH("showBottomMessage", {
              message: VB || dB,
              type: "Error"
            })
          }(1 === TB, pB);
          break;
        case DB.Yd.MiddleBarStart:
          lB.h.yH("middleScreenBarInitiate", {
            duration: VB,
            Xp: 1 === dB[0],
            horizBarRemOffset: TB
          });
          break;
        case DB.Yd.MiddleBarStop:
          lB.h.yH("middleScreenBarRemove");
          break;
        case DB.Yd.Hitmarker:
          lB.h.yH("localGunHitmarker", {
            jT: 1 === TB
          });
          break;
        case DB.Yd.ShotsLeft:
          lB.h.yH("localPlayerNewShotsLeft", VB);
          break;
        case DB.Yd.AimingOverlay:
          lB.h.yH("aimingOverlay", 3 === (3 & TB) ? "sniper" : "none");
          break;
        case DB.Yd.BottomMessage:
          lB.h.yH("showBottomMessage", JSON.parse(JB()));
          break;
        case DB.Yd.Crosshair:
          yB.inaccuracy = (0, QB.h)(VB), (0, bd.d)().crosshairAccuracy(yB.inaccuracy);
          break;
        case DB.Yd.ChargeStage:
          break;
        case DB.Yd.EmoteWheelClose:
          lB.h.yH("requestEmoteWheelClose");
          break;
        case DB.Yd.BlockMined:
          lB.h.yH("localBlockMined");
          break;
        default:
          throw new OB.b(`UiEvent of no kind: what ${BB}`)
      }
    }
    var ed = dB(36899),
      BV = dB(8584),
      TV = dB(1719),
      dV = dB(35768),
      VV = dB(35681),
      yV = dB(4169);
    const pV = 10,
      lV = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      JV = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      YV = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function gV(BB, TB) {
      let dB, VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const pB = () => (dB = (0, TV.r)(dB, TB()), dB);
      return {
        current: pB,
        watch(TB) {
          const dB = () => {
              TB(pB())
            },
            lB = [BB.watch(dB)];
          return null !== VB && lB.push((0, TV.v)((BB => {
            BB.some(VB) && dB()
          }))), null !== yB && lB.push(yB(dB)), () => {
            for (const BB of lB) BB()
          }
        }
      }
    }

    function oV(BB) {
      return BB && {
        name: BB.name,
        amount: BB.amount,
        attributes: BB.attributes
      }
    }
    const kV = new WeakMap;

    function LV(BB) {
      let TB = kV.get(BB);
      return void 0 === TB && (TB = (0, VV.creativeItemIds)().map((TB => ({
        name: BB.nameOfId(TB),
        amount: BB.isStackableId(TB) ? 1 : null,
        attributes: (0, ed.d)("Gun" === (0, VV.itemTypeOf)(TB) ? {
          type: "Gun",
          clipSize: (0, VV.clipSizeOf)(TB)
        } : void 0)
      }))), kV.set(BB, TB)), TB
    }

    function OV(BB, TB, dB, VB) {
      const yB = TB => (BB.flush(VB), TB),
        pB = dB => {
          var VB, yB, pB, lB, JB, YB, gB;
          const oB = BB.slot(dB);
          if (!oB) return null;
          const {
            rootName: kB,
            metaStr: LB
          } = TB.getMetaInfo(oB.name);
          return {
            name: oB.name,
            amount: oB.amount,
            attributes: oB.attributes,
            instance: BB.instance(dB),
            displayName: null !== (VB = oB.attributes.customDisplayName) && void 0 !== VB ? VB : TB.getDisplayName(kB),
            requiresAmmo: "RequiresAmmo" === LB,
            clipSize: null !== (yB = null !== (pB = null === (lB = oB.attributes.customAttributes) || void 0 === lB || null === (JB = lB.gunStats) || void 0 === JB ? void 0 : JB.clipSize) && void 0 !== pB ? pB : null === (YB = TB.getGunStats(kB)) || void 0 === YB ? void 0 : YB.clipSize) && void 0 !== yB ? yB : null === (gB = oB.typeObj) || void 0 === gB ? void 0 : gB.clipSize
          }
        },
        JB = function(BB, TB) {
          let dB = null,
            VB = {
              focus: null,
              recipes: [],
              detail: null
            },
            yB = -1;
          const pB = new Set;
          return {
            read() {
              var pB, lB;
              if (null === dB) return null !== VB.focus && (VB = {
                ...VB,
                focus: null
              }), VB;
              if (VB.focus === dB && yB === BB.changes) return VB;
              if (yB = BB.changes, 0 === BB.length) return VB = {
                focus: dB,
                recipes: [],
                detail: null
              }, VB;
              let JB = 0;
              if (null !== dB.recipe) try {
                JB = TB.getItemId(dB.recipe.name)
              } catch {}
              const YB = BB.craftingView(dB.station, JB, null !== (pB = null === (lB = dB.recipe) || void 0 === lB ? void 0 : lB.wo) && void 0 !== pB ? pB : 0);
              return VB = null === YB ? {
                focus: dB,
                recipes: [],
                detail: null
              } : function(BB, TB, dB) {
                let VB = DB.pb.BYTES;
                const yB = [];
                for (let oB = DB.pb.recipes(BB, 0); oB > 0; oB--) {
                  const dB = DB.hb.flags(BB, VB),
                    pB = {
                      name: TB.nameOfId(DB.hb.item(BB, VB)),
                      wo: DB.hb.recipe(BB, VB),
                      requires: [],
                      produces: DB.hb.produces(BB, VB),
                      haveIngredients: 0 !== (dB & DB.fb.HaveIngredients),
                      listed: 0 !== (dB & DB.fb.Listed)
                    };
                  let lB = DB.hb.requires(BB, VB);
                  for (VB += DB.hb.BYTES; lB > 0; lB--) {
                    const dB = DB.kb.items(BB, VB);
                    pB.requires.push({
                      items: HV(BB, VB + DB.kb.BYTES, dB, TB),
                      amt: DB.kb.amount(BB, VB)
                    }), VB += DB.kb.BYTES + 2 * dB
                  }
                  yB.push(pB)
                }
                const pB = DB.pb.flags(BB, 0);
                if (null === dB.recipe || 0 === (pB & DB.mb.Detail)) return {
                  focus: dB,
                  recipes: yB,
                  detail: null
                };
                const lB = {},
                  JB = {};
                for (let oB = DB.pb.ingredients(BB, 0); oB > 0; oB--) {
                  const dB = DB.eb.item(BB, VB),
                    yB = DB.eb.from(BB, VB),
                    pB = DB.eb.amount(BB, VB);
                  VB += DB.eb.BYTES;
                  const YB = yB === DB.S ? null : HV(BB, VB, yB, TB);
                  if (null !== YB && (VB += 2 * yB), 0 === dB) continue;
                  const gB = TB.nameOfId(dB);
                  lB[gB] = pB, null !== YB && (JB[gB] = YB)
                }
                const {
                  name: YB,
                  wo: gB
                } = dB.recipe;
                return {
                  focus: dB,
                  recipes: yB,
                  detail: {
                    name: YB,
                    wo: gB,
                    craftAllTimes: DB.pb.craftAllTimes(BB, 0),
                    roomForOne: 0 !== (pB & DB.mb.RoomForOne),
                    resultStackable: Boolean(TB.getItemStat(YB, "stackable")),
                    amounts: lB,
                    ingredientsCraftedFrom: JB
                  }
                }
              }(YB, TB, dB), VB
            },
            setFocus(BB) {
              dB = BB;
              for (const TB of [...pB]) TB()
            },
            watchFocus: BB => (pB.add(BB), () => {
              pB.delete(BB)
            })
          }
        }(BB, TB);
      return {
        states: {
          inventory: gV(BB, (() => {
            const dB = BB.length;
            if (0 === dB) return lV;
            const VB = [];
            for (let TB = 0; TB < DB.nd; TB++) VB.push(oV(BB.slot(TB)));
            const yB = BB.slotIcon,
              pB = VB[BB.selectedSlot];
            0 !== yB && pB && (VB[BB.selectedSlot] = {
              ...pB,
              icon: TB.nameOfId(yB)
            });
            const lB = !0 === TB.getClientOption("creative");
            let JB = [],
              YB = null;
            if (dB > DB.nd) {
              for (let TB = DB.nd; TB < dB; TB++) JB.push(oV(BB.slot(TB)));
              YB = {
                type: null,
                pos: [...BB.ad],
                numSlots: dB - DB.nd,
                ironChest: null
              }
            } else lB && (JB = LV(TB));
            return {
              player: VB,
              chestOrCreative: JB,
              chest: YB,
              creative: lB,
              selectedSlot: BB.selectedSlot,
              freeSlots: BB.freeSlots()
            }
          }), (0, TV.j)("creative")),
          hotbar: gV(BB, (() => {
            if (0 === BB.length) return JV;
            const TB = [];
            for (let BB = 0; BB < pV; BB++) TB.push(pB(BB));
            return {
              items: TB,
              ammo: BB.amountOf("Ammo"),
              selectedSlot: BB.selectedSlot
            }
          }), (0, TV.i)("DisplayName", "GunStats")),
          crafting: gV(BB, JB.read, null, JB.watchFocus),
          heldItemAim: gV(BB, (() => {
            var TB;
            if (!dB()) return YV;
            const VB = null === (TB = BB.Dg()) || void 0 === TB ? void 0 : TB.typeObj,
              yB = "Gun" === (null === VB || void 0 === VB ? void 0 : VB.type);
            return {
              gun: yB,
              aimable: yB || !0 === (null === VB || void 0 === VB ? void 0 : VB.showsAimingUi),
              chargeName: "Chargeable" === (null === VB || void 0 === VB ? void 0 : VB.type) ? VB.name : null
            }
          }), null, (BB => function(BB, TB) {
            let dB = BB();
            return (0, yV.w)((() => {
              const VB = BB();
              VB !== dB && (dB = VB, TB(VB))
            }))
          }(dB, BB)))
        },
        events: {
          hotbarSlotRequested: (0, TV.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, TV.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, TV.c)("numkeyPressed"),
          inventoryDropRequested: (0, TV.c)("DropInvenItem"),
          chestToggled: (0, TV.c)("chestToggleFromServer"),
          chestRefreshed: (0, TV.c)("chestRefreshedFromServer", uV),
          inventorySynced: (0, TV.c)("syncedInvenFromServer", uV),
          enchantingTableOpened: (0, TV.c)("enchantingTable", (BB => {
            let {
              position: dB,
              rY: VB
            } = BB;
            return {
              position: [...dB],
              blockName: TB.getMetaInfo(VB).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(TB) {
            BB.selectSlot(TB), BB.flush(VB)
          },
          removeInventoryItem(TB) {
            let {
              slot: dB,
              amount: VB,
              drop: pB
            } = TB;
            return yB(BB.remove(dB, VB, pB))
          },
          swapInventorySlots(TB) {
            let {
              a: dB,
              b: VB
            } = TB;
            return yB(BB.swap(dB, VB))
          },
          moveInventoryItem(TB) {
            let {
              from: dB,
              to: VB,
              amount: pB
            } = TB;
            return yB(BB.move(dB, VB, pB))
          },
          quickMoveInventoryItem(TB) {
            let {
              slot: dB,
              start: VB,
              end: pB,
              amount: lB
            } = TB;
            return yB(BB.quickMove(dB, VB, pB, lB))
          },
          closeChest() {
            BB.closeChest(), BB.flush(VB), lB.h.yH("chestClosedByPlayer")
          },
          focusCrafting(BB) {
            JB.setFocus(BB)
          },
          craftRecipe(TB) {
            let {
              name: dB,
              wo: VB,
              times: pB
            } = TB;
            return yB(BB.craft(dB, VB, pB))
          },
          salvageItem(TB) {
            let {
              slot: dB,
              name: VB,
              amount: pB
            } = TB;
            return yB(BB.salvage(dB, VB, pB))
          },
          enchantItem(TB) {
            let {
              slot: dB,
              level: VB,
              tablePos: yB
            } = TB;
            BB.enchant(dB, VB, yB)
          }
        },
        queries: {
          enchantingOffer(dB) {
            let {
              slot: VB,
              blockName: yB
            } = dB;
            return function(BB, TB, dB, VB) {
              const yB = BB.slot(dB);
              if (!yB || !TB.getClientOption("canCraft") || !(0, BV.o)(VB) || (0, BV.k)(yB.attributes)) return DV;
              const pB = (0, VV.enchantmentPerksOf)(TB.getItemId(yB.name));
              if (0 === pB.length) return DV;
              const lB = [];
              for (let JB = 0; JB < dV.e; JB++) {
                const {
                  commonProb: BB,
                  uncommonProb: TB,
                  rareProb: dB,
                  epicProb: yB,
                  legendaryProb: pB,
                  level: YB
                } = (0, BV.c)(VB, JB);
                lB.push({
                  level: YB,
                  odds: [BB, TB, dB, yB, pB].map((BB => 100 * BB))
                })
              }
              return {
                perks: [...pB],
                options: lB
              }
            }(BB, TB, VB, yB)
          }
        }
      }
    }
    const DV = Object.freeze({
      perks: [],
      options: []
    });

    function uV() {
      return null
    }

    function HV(BB, TB, dB, VB) {
      const yB = [];
      for (let pB = 0; pB < dB; pB++) {
        const dB = BB.getUint16(TB + 2 * pB, !0);
        0 !== dB && yB.push(VB.nameOfId(dB))
      }
      return yB
    }
    class EV {
      constructor(BB) {
        this.api = BB, this.positions = new Map, this.targeted = {
          E_: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          ck: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(BB) {
        let TB = this.positions.get(BB);
        return TB || (this.api.checkValid(BB) || this.api.isLocal(BB) ? (TB = [NaN, NaN, NaN], this.api.readPosition(BB, TB), this.positions.set(BB, TB), TB) : null)
      }
      qBB() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [TB, dB] of this.positions) this.api.readPosition(TB, dB) || this.api.checkValid(TB) || this.api.isLocal(TB) || this.positions.delete(TB);
        const BB = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (DB.B.playerFlags(BB, 0) & DB.Bd.Breaking) && DB.B.breakingProgress(BB, 0) >= 0, this.isBreaking)
          for (let TB = 0; TB < 3; TB++) this.breaking[TB] = DB.B.breakingPos(BB, 0, TB)
      }
      refreshTarget() {
        const BB = this.api.apiView,
          TB = DB.B.targetBlockId(BB, 0);
        if (this.hasTarget = TB !== DB.dd, this.hasTarget) {
          const dB = this.targeted;
          dB.E_ = TB;
          for (let TB = 0; TB < 3; TB++) dB.position[TB] = DB.B.targetBlock(BB, 0, TB), dB.normal[TB] = DB.B.targetNormal(BB, 0, TB), dB.ck[TB] = DB.B.targetAdjacent(BB, 0, TB)
        }
      }
      despawned(BB) {
        const TB = this.positions.get(BB);
        TB && !this.api.isLocal(BB) && (TB.fill(NaN), this.positions.delete(BB))
      }
    }
    var vV = dB(39364),
      mV = dB(39346),
      iV = dB(35764);
    const NV = 1,
      tV = 2;
    class fV {
      constructor() {
        this.game = new iV.f, this.client = new iV.f, this.Dg = 0
      }
      setGame(BB) {
        if (null === BB || "object" !== typeof BB) return !1;
        const {
          key: TB,
          value: dB
        } = BB;
        return "string" === typeof TB && (this.game.setBooleanType(TB, Boolean(dB)), !0)
      }
      setClient(BB, TB) {
        this.client.setBooleanType(BB, TB)
      }
      clearGame() {
        this.game = new iV.f
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? NV : 0) | (this.client._getTotalBooleanVal() ? tV : 0)
      }
      write(BB) {
        const TB = this.perms();
        return TB === this.Dg || !(!BB || !(0, DB.ue)(BB, 0, DB._b.Keep, TB)) && (this.Dg = TB, !0)
      }
    }
    class sV {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = BB, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: JB.d,
          get y() {
            return TB()
          }
        }
      }
      get hasView() {
        const BB = this.api.apiView,
          TB = DB.B.viewProj;
        return 0 !== TB(BB, 0, 3) || 0 !== TB(BB, 0, 7) || 0 !== TB(BB, 0, 11) || 0 !== TB(BB, 0, 15)
      }
      get cameraPosition() {
        const BB = this.api.apiView,
          {
            eye: TB
          } = this;
        for (let dB = 0; dB < 3; dB++) TB[dB] = DB.B.eye(BB, 0, dB);
        return TB
      }
      get cameraDirection() {
        const BB = this.api.apiView,
          TB = DB.B.viewProj,
          dB = TB(BB, 0, 3),
          VB = TB(BB, 0, 7),
          yB = TB(BB, 0, 11),
          pB = Math.hypot(dB, VB, yB),
          {
            forward: lB
          } = this;
        return pB > 0 && (lB[0] = dB / pB, lB[1] = VB / pB, lB[2] = yB / pB), lB
      }
      get cameraHeading() {
        return DB.B.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return DB.B.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return DB.B.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return DB.B.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(BB) {
        this.clip(BB);
        const {
          clipX: TB,
          clipY: dB,
          clipW: VB
        } = this;
        if (VB > 0) {
          const BB = TB / VB * 50,
            yB = -dB / VB * 50;
          return Math.abs(BB) <= this.screenBandPct.x && Math.abs(yB) <= this.screenBandPct.y ? {
            x: 50 + BB,
            y: 50 + yB
          } : this.clampToBand(BB, yB)
        }
        const yB = this.cameraPosition,
          pB = Math.hypot(BB[0] - yB[0], BB[1] - yB[1], BB[2] - yB[2]),
          lB = this.api.apiView,
          JB = DB.B.viewProj,
          YB = pB > 0 ? TB / pB : 0,
          gB = pB > 0 ? -dB / pB : 0,
          oB = Math.hypot(JB(lB, 0, 1), JB(lB, 0, 5), JB(lB, 0, 9)),
          kB = YB / Math.hypot(JB(lB, 0, 0), JB(lB, 0, 4), JB(lB, 0, 8)),
          LB = gB / oB,
          OB = !(Math.abs(kB) >= .001 || Math.abs(LB) >= .001);
        return this.clampToBand(YB, OB ? -(oB || 1) : gB)
      }
      projectDirectionToScreenPos(BB) {
        if (!this.hasView) return;
        const TB = this.cameraPosition,
          dB = this.along;
        for (let VB = 0; VB < 3; VB++) dB[VB] = TB[VB] + 10 * BB[VB];
        return this.projectWorldPosToScreenPos(dB)
      }
      projectWorldPosToViewport(BB) {
        this.clip(BB);
        const {
          clipX: TB,
          clipY: dB,
          clipW: VB
        } = this;
        return VB > 0 ? {
          x: 50 + TB / VB * 50,
          y: 50 - dB / VB * 50
        } : null
      }
      clip(BB) {
        const TB = this.api.apiView,
          dB = BB[0] - DB.B.origin(TB, 0, 0),
          VB = BB[1] - DB.B.origin(TB, 0, 1),
          yB = BB[2] - DB.B.origin(TB, 0, 2),
          pB = DB.B.viewProj;
        this.clipX = pB(TB, 0, 0) * dB + pB(TB, 0, 4) * VB + pB(TB, 0, 8) * yB + pB(TB, 0, 12), this.clipY = pB(TB, 0, 1) * dB + pB(TB, 0, 5) * VB + pB(TB, 0, 9) * yB + pB(TB, 0, 13), this.clipW = pB(TB, 0, 3) * dB + pB(TB, 0, 7) * VB + pB(TB, 0, 11) * yB + pB(TB, 0, 15)
      }
      clampToBand(BB, TB) {
        return (0, JB.g)(BB, TB, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var MV = dB(4206);
    const zV = new TextEncoder,
      wV = new Uint8Array(DB.Y * DB.W);
    class UV {
      constructor() {
        this.buttons = [], this.Dg = !0
      }
      set(BB) {
        this.buttons = BB, this.Dg = !1
      }
      attached() {
        this.Dg = 0 === this.buttons.length
      }
      write(BB) {
        if (this.Dg) return;
        const TB = new Uint8Array(DB.Y),
          dB = new Uint8Array(DB.Y);
        let VB = 0,
          yB = 0;
        for (const {
            id: pB,
            keycode: lB
          }
          of this.buttons) {
          if (VB === DB.Y) break;
          const {
            read: BB,
            written: JB
          } = zV.encodeInto(pB, wV.subarray(yB, yB + DB.W));
          if (BB < pB.length) continue;
          const YB = MV.n[lB];
          TB[VB] = "number" === typeof YB ? YB : 0, dB[VB] = JB, VB++, yB += JB
        }
        this.Dg = (0, DB.je)(BB, 0, VB, TB, dB, wV.subarray(0, yB))
      }
    }

    function FV(BB, TB, dB) {
      const VB = zV.encode(TB);
      return VB.length <= DB.W && function(BB, TB, dB, VB) {
        return (0, CT.c)(), (0, DB.qf)(BB, TB, dB, VB)
      }(BB, 0, dB ? 1 : 0, VB)
    }
    const KV = new TextDecoder,
      rV = new TextEncoder,
      IV = new Uint8Array(0),
      cV = {
        off: DB.Ed.Off,
        key: DB.Ed.Key,
        touch: DB.Ed.Touch
      };
    class SV {
      constructor(BB) {
        var TB;
        this.options = BB, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new UV, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.cmd = null, this.freeCam = new fV, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.yD = BB => {
          if ((0, OB.g)(BB)) throw BB;
          this.onError(BB)
        }, this.api = BB.api, this.tables = BB.tables, this.onError = null !== (TB = BB.onError) && void 0 !== TB ? TB : BB => {
          console.error("Error in client game callback", BB)
        }, this.renderFrame = new sV(this.api, BB.screenBandY), this.live = new EV(this.api), this.chunks = new gT(this.api.memory, (() => this.api.apiView)), this.items = new Ed({
          api: this.api,
          tables: BB.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: BB.beforeOp
        });
        const dB = () => this.stopped() ? null : this.cmd,
          VB = () => this.sessionLive;
        this.entityInfoWatch = new Gd({
          cmd: dB,
          onError: this.onError
        }), this.entityInfo = new qd({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: VB
        }), this.particles = new Sd({
          cmd: dB,
          isSessionLive: VB,
          onError: this.onError
        }), this.clientApi = new Yd({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: BB.tables,
          cmd: dB,
          sendCmd: () => this.sendCmd(),
          isSessionLive: VB,
          beforeWrite: () => {
            var TB;
            if (this.stopped()) return !1;
            const dB = this.generation;
            return !1 !== (null === (TB = BB.beforeWrite) || void 0 === TB ? void 0 : TB.call(BB)) && dB === this.generation
          },
          playerDbId: () => {
            const BB = this.session;
            if (null === BB) throw new Error("No game session has started, so the local player has no DB id");
            return BB.playerDbId
          },
          playSound: BB.playSound,
          setLocalOptions: BB.setLocalOptions,
          hasPackModel: BB.hasPackModel
        }), this.scriptedCamera = new qB({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: BB.cameraScreen,
          showFacing: BB.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= OV(this.items, this.tables, (() => this.localPlayerAlive()), this.yD), this.itemSources
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
        const TB = this.sessionLive ? this.sendCmd() : null;
        return null !== TB && (dB = TB, VB = 0, yB = BB[0], pB = BB[1], lB = BB[2], (0, CT.c)(), (0, DB.ne)(dB, VB, yB, pB, lB));
        var dB, VB, yB, pB, lB
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(BB) {
        const TB = this.liveCmd();
        return null === TB ? (this.pendingZoom = BB, !1) : (this.pendingZoom = null, (0, DB.kg)(TB, 0, BB, 1))
      }
      XM(BB) {
        const TB = this.stopped() ? null : this.cmd;
        return null !== TB && (0, DB.dg)(TB, 0, BB ? 1 : 0)
      }
      respawn() {
        const BB = this.sessionLive ? this.sendCmd() : null;
        return null !== BB && (TB = BB, dB = 0, (0, CT.c)(), (0, DB.Hf)(TB, dB));
        var TB, dB
      }
      bindCustomButtonKeys(BB) {
        this.customButtons.set(BB)
      }
      pressCustomButton(BB, TB) {
        const dB = this.sessionLive ? this.sendCmd() : null;
        return null !== dB && FV(dB, BB, TB)
      }
      padMove(BB, TB, dB, VB, yB, pB) {
        const lB = this.liveCmd();
        return null !== lB && (0, DB._e)(lB, 0, BB, TB, dB, VB, yB, pB)
      }
      thirdPersonFor(BB) {
        const TB = this.liveCmd();
        return null !== TB && (0, DB.rg)(TB, 0, null !== BB && void 0 !== BB ? BB : 1 / 0)
      }
      send(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== VB && GT(VB, dB ? LB.kd : 0, BB, (0, PB.e)(TB))
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
        const TB = () => BB.isStopped;
        this.stopped = TB, this.cmd = BB.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const dB = this.api.apiView;
        this.overflowGen = DB.B.eventOverflowGen(dB, 0), this.resyncOwed = 0 !== DB.B.eventOverflowMask(dB, 0), BB.setGameHost(this), BB.setEventWalker((BB => {
          this.api.walk(BB, this, TB)
        }))
      }
      watchPromptPick(BB) {
        this.promptWatch = BB, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : PV(DB.B.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? DB.Bc.None : DB.B.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : DB.B.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === BB || BB >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, BB, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(BB) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(BB)
      }
      netEvent(BB) {
        "connection" === BB.type ? BB.phase === LB.v.Activated && BB.conn !== this.activeConn && BB.conn > this.closedThrough ? (this.endSession(), this.activeConn = BB.conn, this.endGameGrants(), this.dropGameCamera()) : BB.phase !== LB.v.Left && BB.phase !== LB.v.Closed || BB.conn !== this.activeConn ? BB.phase === LB.v.Resumed && 0 !== this.activeConn && BB.conn > this.closedThrough && (this.activeConn = BB.conn) : this.closeGame() : BB.conn === this.activeConn && 0 !== BB.conn && (BB.Jo === mV.s ? this.gunHit(BB.payload) : BB.Jo === xd.Jb.EditItemCraftingRecipes || BB.Jo === mV.T ? this.items.touch() : (this.serverOptions(BB), this.gameMessage(BB)));
        const TB = this.options.onNetEvent;
        TB && this.guard((() => {
          TB(BB)
        }))
      }
      serverOptions(BB) {
        const TB = this.options.serverOptions,
          dB = TB ? this.decoded(jd, BB) : null;
        TB && dB && this.guard((() => {
          TB.applyNewClientOptions(dB)
        }))
      }
      gameMessage(BB) {
        let TB = null;
        try {
          TB = function(BB) {
            if ("message" !== BB.type || BB.Jo !== xd.Jb.GameCodeMessage || BB.payloadKind !== LB.ac.Msgpack) return null;
            const TB = (0, PB.c)(BB.payload);
            if (null === TB || "object" !== typeof TB || "string" !== typeof TB.messageType) throw new Error("GameCodeMessage without a messageType");
            return TB
          }(BB)
        } catch (dB) {
          this.sessionLive && this.onError(dB)
        }
        if (TB) {
          const {
            messageType: BB,
            data: dB
          } = TB;
          if ((0, UB.h)(BB)) return void this.guard((() => {
            (0, UB.e)(BB, dB)
          }));
          "freeCamPerms" === BB && this.freeCam.setGame(dB) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (TB => {
            TB.onReceivedMessageFromServer(BB, dB)
          }))
        }
      }
      decoded(BB, TB) {
        try {
          return BB(TB)
        } catch (dB) {
          return this.onError(dB), null
        }
      }
      setClientFreeCameraGrant(BB, TB) {
        this.freeCam.setClient(BB, TB), this.writeFreeCam()
      }
      localPlayerBound(BB) {
        var TB, dB;
        if (0 === this.activeConn || this.sessionLive && BB === this.boundId) return;
        const VB = this.sessionLive;
        let yB, pB, lB, JB;
        this.endSession(), VB && this.restartGameCamera();
        try {
          var YB;
          this.session = null;
          const BB = this.options.sessionInfo(this.activeConn);
          if (this.session = BB, !BB) return;
          yB = BB.gameNameWithVariation, pB = null !== (YB = (0, zB.Qb)(yB)) && void 0 !== YB ? YB : void 0, lB = (0, wB.C)(BB.lobbyName), JB = (0, wB.O)(BB.lobbyName)
        } catch (vB) {
          return void this.onError(vB)
        }
        const gB = {
          localPlayerId: String(BB)
        };
        let oB = {},
          kB = {};
        try {
          var LB, OB;
          oB = null !== (LB = null === (OB = this.options.gameFactory((0, zB.Vb)(yB))) || void 0 === OB ? void 0 : OB(JB, lB, pB, gB)) && void 0 !== LB ? LB : {}
        } catch (vB) {
          this.yD(vB)
        }
        try {
          var DB, uB;
          kB = {
            ...null === (DB = (uB = this.options).defaultPlugins) || void 0 === DB ? void 0 : DB.call(uB, JB, lB, pB, gB),
            ...oB.plugins
          }
        } catch (vB) {
          this.yD(vB)
        }
        const HB = [oB, ...Object.values(kB)];
        this.owners = HB, this.tickers = HB.filter((BB => void 0 !== BB.dL)), this.renderers = HB.filter((BB => void 0 !== BB.onAfterRender)), this.receivers = HB.filter((BB => void 0 !== BB.onReceivedMessageFromServer)), this.writeAltVeto(HB), this.writeHooks(HB), this.writePublicLobby(JB), this.writeLocalDbId(null !== (TB = null === (dB = this.session) || void 0 === dB ? void 0 : dB.playerDbId) && void 0 !== TB ? TB : null), this.boundId = BB, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.round(HB, (BB => {
          var TB;
          null === (TB = BB.onCreate) || void 0 === TB || TB.call(BB, this.clientApi)
        }));
        const EB = this.generation;
        setTimeout((() => {
          EB === this.generation && !0 === this.tables.getClientOption("creative") && LV(this.tables)
        }), 0)
      }
      chunkSlot(BB, TB, dB, VB, yB, pB) {
        this.chunks.apply(BB, TB, dB, VB, yB, pB)
      }
      entityAdded(BB) {
        var TB;
        this.entityInfo.stale(BB), null === (TB = this.options.replayEntities) || void 0 === TB || TB.entityAdded(BB)
      }
      entityInfoChanged(BB) {
        var TB;
        this.entityInfo.stale(BB), null === (TB = this.options.replayEntities) || void 0 === TB || TB.entityInfoChanged(BB)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const BB = performance.now();
          this.round(this.tickers, QV), (0, yV.e)(performance.now() - BB)
        }
      }
      afterWalk(BB) {
        this.ackEventOverflow(), this.clientApi.flushOwed();
        const TB = this.options.replayEntities;
        TB && this.guard((() => {
          this.entityInfoWatch.want(Cd, TB.wantsWatch), TB.flush(this.entityInfoWatch.on)
        }));
        const dB = (0, yV.n)(BB, DB.B.frameMs(this.api.apiView, 0));
        if (null !== dB) {
          const BB = this.renderFrame;
          this.guard((() => {
            (0, bd.d)().turnDamageIndicators(BB.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(dB)
          })), this.round(this.renderers, (TB => {
            TB.onAfterRender(dB, BB)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== dB)
        } catch (yB) {
          this.yD(yB)
        }
        this.showZoom(), this.items.flush(this.yD), this.writePromptWatch(), this.writeCustomButtons();
        const VB = this.ticks;
        this.ticks = 0, (0, yV.j)(VB, BB, dB, this.yD)
      }
      entityRemoved(BB) {
        this.live.despawned(BB), this.entityInfo.removed(BB)
      }
      ackEventOverflow() {
        const BB = this.api.apiView,
          TB = DB.B.eventOverflowGen(BB, 0),
          dB = TB - this.overflowGen >>> 0;
        if (0 === dB && !this.resyncOwed) return;
        this.overflowGen = TB;
        const VB = DB.B.eventOverflowMask(BB, 0),
          yB = this.cmd;
        0 === VB || null === yB || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, DB.qe)(yB, 0, VB);
        const pB = this.options.onEventOverflow;
        0 !== dB && pB && this.guard((() => {
          pB(VB, dB)
        }))
      }
      gameCall(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        if (BB === DB.oc.Director) try {
          return this.scriptedCamera.call(TB, dB, VB, yB, pB, lB)
        } catch (gB) {
          return this.yD(gB), DB.qb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return BB === DB.oc.AltVeto ? DB.n.Allow : 0;
        try {
          return this.callGames(BB, TB, dB, VB, yB, pB, lB, JB)
        } catch (gB) {
          throw (0, OB.g)(gB) && (this.fault = gB), gB
        }
      }
      takeFault() {
        const BB = this.fault;
        return this.fault = void 0, BB
      }
      callGames(BB, TB, dB, VB, yB, pB, lB, JB) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: YB
        } = this.options, gB = String(this.boundId);
        switch (BB) {
          case DB.oc.AltVeto:
          case DB.oc.AltAction: {
            const JB = 0 !== lB,
              [oB, kB, LB] = JB ? [TB, dB, VB] : [void 0, void 0, void 0],
              OB = JB ? YB.nameOfId(yB) : "Air",
              uB = PV(pB);
            if (BB === DB.oc.AltAction) return this.first((BB => {
              var TB;
              return null === (TB = BB.onPlayerAltAction) || void 0 === TB ? void 0 : TB.call(BB, gB, oB, kB, LB, OB, uB)
            })), 0;
            const HB = this.first((BB => {
              var TB;
              return null === (TB = BB.onPlayerAttemptAltAction) || void 0 === TB ? void 0 : TB.call(BB, gB, oB, kB, LB, OB, uB)
            }));
            return "preventAction" === HB ? DB.n.Prevent : "preventPlacement" === HB ? DB.n.PreventPlacement : DB.n.Allow
          }
          case DB.oc.Click: {
            const BB = JB,
              oB = 0 !== (BB & DB.ab.Alt),
              kB = 0 !== (BB & DB.ab.HasPos),
              LB = kB ? YB.nameOfId(yB) : "Air",
              [OB, uB, HB] = kB ? [TB, dB, VB] : [null, null, null],
              EB = PV(pB),
              vB = 0 !== (BB & DB.ab.Up),
              mB = PV(lB);
            if (0 === (BB & DB.ab.AttackOnly) && this.first((BB => {
                var TB, dB;
                return vB ? null === (TB = BB.onPlayerClickUp) || void 0 === TB ? void 0 : TB.call(BB, gB, oB, OB, uB, HB, LB, EB) : null === (dB = BB.onPlayerClick) || void 0 === dB ? void 0 : dB.call(BB, gB, oB, OB, uB, HB, LB, EB)
              })), !vB && !oB && null !== mB) {
              const BB = this.clientApi.getPositionView(mB),
                TB = BB ? [BB[0], BB[1], BB[2]] : [0, 0, 0];
              this.first((BB => {
                var dB;
                return null === (dB = BB.onPlayerAttackEntity) || void 0 === dB ? void 0 : dB.call(BB, gB, mB, TB)
              }))
            }
            return 0
          }
          case DB.oc.ChangeBlock: {
            const BB = YB.nameOfId(yB),
              lB = YB.nameOfId(pB);
            return this.first((yB => {
              var pB;
              return null === (pB = yB.onPlayerChangeBlock) || void 0 === pB ? void 0 : pB.call(yB, gB, TB, dB, VB, BB, lB)
            })), 0
          }
          case DB.oc.DropItem: {
            const BB = YB.nameOfId(TB);
            return this.first((TB => {
              var yB;
              return null === (yB = TB.onPlayerDropItem) || void 0 === yB ? void 0 : yB.call(TB, gB, BB, dB, VB)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${BB}`)), 0
        }
      }
      changeBlockFail(BB, TB, dB, VB, yB, pB, lB) {
        const JB = yB === DB.Zc ? null : KV.decode(this.api.eventBytes(pB, Math.min(yB, lB)));
        this.failures.push({
          BB: [BB, TB, dB],
          TB: VB,
          dB: JB
        })
      }
      changeBlockFailEnd() {
        const BB = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (TB => {
          var dB;
          null === (dB = TB.onChangeBlockFail) || void 0 === dB || dB.call(TB, BB)
        })), this.yH("EditBoard", {
          pos: null
        }), this.yH("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(BB, TB, dB, VB, yB, pB) {
        BB === DB.Fc.ChestOpened ? this.items.chestOpened(dB, VB, yB) : BB !== DB.Fc.Synced && BB !== DB.Fc.ChestClosed && BB !== DB.Fc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(BB, TB, dB, VB) {
            switch (BB) {
              case DB.Fc.Synced:
                lB.h.yH("syncedInvenFromServer");
                break;
              case DB.Fc.ChestOpened:
              case DB.Fc.ChestClosed:
                lB.h.yH("chestToggleFromServer", BB === DB.Fc.ChestOpened, !0);
                break;
              case DB.Fc.ChestRefreshed:
                lB.h.yH("chestRefreshedFromServer");
                break;
              case DB.Fc.EnchantingTable:
                lB.h.yH("enchantingTable", {
                  rY: VB,
                  position: dB
                });
                break;
              case DB.Fc.HotbarRequest:
                lB.h.yH("setSelectedInventorySlotI", TB, !0);
                break;
              case DB.Fc.Scrolled:
                lB.h.yH("ScrollInventorySlot", TB);
                break;
              case DB.Fc.NumberKey:
                lB.h.yH("numkeyPressed", TB + 1);
                break;
              case DB.Fc.DropRequested:
                lB.h.yH("DropInvenItem", 0 !== TB);
                break;
              default:
                throw new OB.b(`InventoryEvent of no kind: what ${BB}`)
            }
          }(BB, TB, [dB, VB, yB], pB)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(BB, TB, dB, VB) {
        this.yH("shotPlayer", {
          playerId: String(BB),
          damage: TB,
          wasCrit: 0 !== VB,
          distance: dB
        })
      }
      localHurt(BB, TB) {
        this.yH("closeShopOnDamaged", null), this.guard((() => {
          lB.h.yH("damagedByOtherPlayer", {
            uT: null,
            direction: Number.isNaN(TB) ? null : TB,
            kB: BB
          })
        }))
      }
      attackHit(BB, TB, dB, VB, yB) {
        this.guard((() => {
          lB.h.yH("yourAttackHit", {
            jT: VB,
            screenPos: this.renderFrame.projectDirectionToScreenPos([BB, TB, dB]),
            hitSelf: yB
          })
        }))
      }
      physicsType(BB) {
        this.yH("PlayerPhysicsTypeUpdate", BB)
      }
      vehicleEffect(BB, TB, dB, VB, yB) {
        this.guard((() => {
          BB === LB.xd.UPDATE ? (0, KB.h)(TB, {
            icon: dB,
            level: VB,
            displayName: null,
            durationMs: yB
          }) : FB.b.remove(TB)
        }))
      }
      zoomChanged(BB) {
        this.zoom = BB, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.yH("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const BB = this.scriptedCamera.holdsView();
        !this.zoomUnshown || BB && this.zoomHeld || (this.zoomUnshown = !1, this.yH("cameraZoomSet", this.zoom)), this.zoomHeld = BB
      }
      gunHit(BB) {
        this.guard((() => {
          const {
            uT: TB,
            HT: dB
          } = (0, vV.e)(mV.s, BB);
          lB.h.yH("damagedByOtherPlayer", {
            uT: TB,
            direction: dB
          })
        }))
      }
      uiEvent(BB, TB, dB, VB, yB, pB, lB, JB) {
        this.guard((() => {
          nd(BB, TB, [dB, VB, yB], pB, this.items, this.options.tables, (() => KV.decode(this.api.eventBytes(lB, JB))))
        }))
      }
      writeAltVeto(BB) {
        const TB = this.cmd;
        if (!TB) return;
        let dB;
        try {
          dB = function(BB, TB) {
            const dB = new Set;
            let VB = !1;
            for (const yB of BB)
              if (yB.onPlayerAttemptAltAction) {
                if (VB = !0, !yB.altVetoBlocks) return {
                  mode: DB.$d.All,
                  roots: []
                };
                for (const BB of yB.altVetoBlocks) dB.add(TB.getMetaInfo(BB).rootId)
              } return VB ? dB.size > DB.Pc ? {
              mode: DB.$d.All,
              roots: []
            } : {
              mode: DB.$d.Filter,
              roots: [...dB]
            } : {
              mode: DB.$d.Off,
              roots: []
            }
          }(BB, this.options.tables)
        } catch (yB) {
          this.onError(yB), dB = {
            mode: DB.$d.All,
            roots: []
          }
        }
        if (dB.mode === DB.$d.Off && !this.vetoSet) return;
        const VB = new Uint8Array(new Uint32Array(dB.roots).buffer);
        (0, DB.Mf)(TB, 0, dB.mode, dB.roots.length, VB) ? this.vetoSet = dB.mode !== DB.$d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(BB) {
        const TB = this.cmd;
        if (!TB) return;
        const dB = function(BB) {
          let TB = 0;
          for (const dB of BB) dB.onPlayerAltAction && (TB |= 1 << DB.oc.AltAction), (dB.onPlayerClick || dB.onPlayerClickUp || dB.onPlayerAttackEntity) && (TB |= 1 << DB.oc.Click), dB.onPlayerChangeBlock && (TB |= 1 << DB.oc.ChangeBlock), dB.onPlayerDropItem && (TB |= 1 << DB.oc.DropItem);
          return TB
        }(BB);
        (0 !== dB || this.hooksSet) && ((0, DB.Vf)(TB, 0, dB) ? this.hooksSet = 0 !== dB : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const BB = this.cmd;
        BB && !this.stopped() && this.customButtons.write(BB)
      }
      writePromptWatch() {
        const BB = this.cmd,
          TB = this.promptWatch;
        TB !== this.promptWatchSent && BB && !this.stopped() && (0, DB.tg)(BB, 0, cV[TB]) && (this.promptWatchSent = TB)
      }
      writePublicLobby(BB) {
        const TB = this.cmd;
        TB && BB !== this.writtenPublicLobby && ((0, DB.gg)(TB, 0, BB ? 1 : 0) ? this.writtenPublicLobby = BB : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(BB) {
        const TB = this.cmd;
        TB && ((0, DB.Yf)(TB, 0, null === BB ? 0 : 1, null === BB ? IV : rV.encode(BB)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(BB) {
        const TB = this.generation;
        for (const VB of this.owners) {
          if (TB !== this.generation) break;
          try {
            const TB = BB(VB);
            if (void 0 !== TB) return TB
          } catch (dB) {
            this.yD(dB)
          }
        }
      }
      yH(BB, TB) {
        this.guard((() => {
          lB.h.yH(BB, TB)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (BB) {
          this.yD(BB)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (BB) {
          this.yD(BB)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const BB = this.owners;
        let TB;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (VB) {
          TB = VB
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (VB) {
          TB ??= VB
        }
        this.round(BB, RV, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (VB) {
          TB ??= VB
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (VB) {
          TB ??= VB
        }
        const dB = this.options.onSessionEnd;
        if (dB) try {
          dB()
        } catch (VB) {
          this.onError(VB)
        }
        void 0 !== TB && this.yD(TB)
      }
      round(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = this.generation;
        for (const pB of BB) {
          if (VB !== this.generation) break;
          try {
            TB(pB)
          } catch (yB) {
            dB ? this.onError(yB) : this.yD(yB)
          }
        }
      }
      guard(BB) {
        try {
          BB()
        } catch (TB) {
          this.yD(TB)
        }
      }
    }

    function PV(BB) {
      return BB === DB._c ? null : String(BB)
    }

    function QV(BB) {
      BB.dL(LB.sd)
    }

    function RV(BB) {
      var TB;
      null === (TB = BB.onClose) || void 0 === TB || TB.call(BB)
    }

    function aV(BB, TB) {
      BB.watch((() => {
        const dB = function(BB) {
          let TB = 0;
          const dB = Math.min(pV, BB.length);
          for (let yB = 0; yB < dB; yB++) {
            var VB;
            const dB = null === (VB = BB.slot(yB)) || void 0 === VB ? void 0 : VB.typeObj,
              pB = dB ? (0, VV.gunTypeOf)(dB.id) : void 0;
            void 0 !== pB && (TB |= 1 << NT[pB])
          }
          return TB
        }(BB);
        0 !== dB && (TB.preload(dB), TB.preload(1 << tT))
      }))
    }
    var ZV = dB(4258),
      XV = dB(35732);

    function WV(BB) {
      const TB = new ZV.Howl({
          ...(0, XV.g)(BB),
          pool: 15,
          preload: !1
        }),
        dB = TB.load.bind(TB);
      return TB.load = () => (TB._preload = !0, dB()), TB
    }

    function hV(BB, TB, dB) {
      const VB = BB.listener;
      if (VB.positionX) CV(VB.positionX, TB, dB, 0), CV(VB.positionY, TB, dB, 1), CV(VB.positionZ, TB, dB, 2), CV(VB.forwardX, TB, dB, 3), CV(VB.forwardY, TB, dB, 4), CV(VB.forwardZ, TB, dB, 5), CV(VB.upX, TB, dB, 6), CV(VB.upY, TB, dB, 7), CV(VB.upZ, TB, dB, 8);
      else {
        let BB = !1;
        for (let VB = 0; VB < 9; VB++) BB ||= TB[VB] !== dB[VB];
        BB && (VB.setPosition(TB[0], TB[1], TB[2]), VB.setOrientation(TB[3], TB[4], TB[5], TB[6], TB[7], TB[8]), dB.set(TB))
      }
    }

    function CV(BB, TB, dB, VB) {
      TB[VB] !== dB[VB] && (BB.value = TB[VB], dB[VB] = TB[VB])
    }
    class GV {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(BB) {
        this.pose.set(BB);
        const TB = ZV.b.ctx;
        return !!TB && (TB !== this.watchedCtx && (this.watchedCtx = TB, this.written.fill(Number.NaN), TB.addEventListener("statechange", (() => {
          "running" === TB.state && hV(TB, this.pose, this.written)
        }))), "running" === TB.state && hV(TB, BB, this.written), !0)
      }
    }
    var qV = dB(35561),
      xV = dB(38149);
    let jV = null,
      AV = null;

    function bV() {
      return null === jV && (jV = document.createElement("div"), jV.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(jV)), jV
    }

    function nV() {
      return AV ??= new xV.b(new qV.b(bV)), AV
    }

    function eV() {
      var BB;
      null === (BB = AV) || void 0 === BB || BB.clear(), By(null)
    }

    function By(BB) {
      VB.d.get("scriptedCameraFacing") !== BB && VB.d.set({
        scriptedCameraFacing: BB
      })
    }
    var Ty = dB(8746),
      dy = dB(8698),
      Vy = dB(38169),
      yy = dB(39459),
      py = dB(2760);
    const ly = Object.entries(DB.lc).reduce(((BB, TB) => {
      let [dB, VB] = TB;
      return BB[VB] = dB, BB
    }), []);

    function Jy(BB, TB) {
      var dB;
      return 0 !== ((null !== (dB = BB.itemFlags[TB]) && void 0 !== dB ? dB : 0) & DB.Gc.Stackable)
    }
    const Yy = /^(0|[1-9][0-9]*)$/,
      gy = {
        displayName: (BB, TB) => (0, VV.displayNameOf)(TB),
        description: (BB, TB) => (0, VV.descriptionOf)(TB),
        type: (BB, TB) => (0, VV.itemTypeOf)(TB),
        clipSize: (BB, TB) => (0, VV.clipSizeOf)(TB),
        armourReduction: (BB, TB) => (0, VV.armourReductionOf)(TB),
        scopeType: (BB, TB) => (0, VV.scopeTypeOf)(TB),
        stackable: Jy,
        harvestType: (BB, TB) => ly[BB.blockHarvestTypes[TB]],
        harvestLevel: (BB, TB) => {
          const dB = BB.blockHarvestLevels[TB];
          return dB === DB.Kc ? void 0 : dB
        },
        harvests: (BB, TB) => {
          var dB;
          const VB = null !== (dB = BB.itemHarvests[TB]) && void 0 !== dB ? dB : 0;
          return 0 !== VB ? ly[VB] : void 0 === (0, VV.harvestsNullLevelOf)(TB) ? void 0 : null
        },
        level: (BB, TB) => {
          var dB, VB;
          const yB = null !== (dB = BB.itemLevels[TB]) && void 0 !== dB ? dB : DB.Kc;
          return yB !== DB.Kc ? yB : null !== (VB = (0, VV.harvestsNullLevelOf)(TB)) && void 0 !== VB ? VB : void 0
        }
      };

    function oy(BB, TB, dB) {
      return Ly(new Uint8Array(Math.floor(BB.length / TB)), BB, TB, dB)
    }

    function ky(BB, TB, dB) {
      return Ly(new Uint16Array(Math.floor(BB.length / TB)), BB, TB, dB)
    }

    function Ly(BB, TB, dB, VB) {
      const yB = new DataView(TB.buffer, TB.byteOffset, TB.byteLength);
      for (let pB = 0; pB < BB.length; pB++) BB[pB] = VB(yB, pB * dB);
      return BB
    }
    class Oy {
      constructor(BB, TB) {
        this.options = TB, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = BB => {
          const TB = this.idOf(BB);
          if (void 0 === TB) throw new Error(`No item is named ${BB}, an item's root`);
          return TB
        };
        const dB = TB => {
            const dB = TB();
            return new Uint8Array(BB.memory().buffer, BB.scratch(), dB).slice()
          },
          VB = (new TextDecoder).decode(dB((() => BB.queries.itemNames()))).split("\n"),
          yB = dB((() => BB.queries.blockProps())),
          pB = dB((() => BB.queries.itemProps()));
        this.props = {
          blockFlags: oy(yB, DB.L.BYTES, DB.L.flags),
          blockHarvestTypes: oy(yB, DB.L.BYTES, DB.L.harvestType),
          blockHarvestLevels: oy(yB, DB.L.BYTES, DB.L.harvestLevel),
          blockAttachedTops: ky(yB, DB.L.BYTES, DB.L.attachedTop),
          itemFlags: oy(pB, DB.Ic.BYTES, DB.Ic.flags),
          itemHarvests: oy(pB, DB.Ic.BYTES, DB.Ic.harvests),
          itemLevels: oy(pB, DB.Ic.BYTES, DB.Ic.level)
        }, (0, py.g)(Object.freeze(VB)), (0, yy.h)()
      }
      idOf(BB) {
        if ("number" === typeof BB) return void 0 === (0, py.c)(BB) ? void 0 : BB;
        const TB = (0, py.b)(BB);
        return void 0 === TB && Yy.test(BB) ? void 0 === (0, py.c)(+BB) ? void 0 : +BB : TB
      }
      getMetaInfo(BB) {
        if (!BB || BB === Ty.c) return Ty.d;
        const TB = this.idOf(BB);
        if (void 0 === TB) throw new Error(`Item ${BB} not found in registry`);
        return this.metaOf(TB)
      }
      blockRootId(BB) {
        return 0 !== BB && void 0 !== (0, py.c)(BB) ? this.metaOf(BB).rootId : BB
      }
      metaOf(BB) {
        return this.metas[BB] ??= (0, dy.l)((0, py.c)(BB), BB, this.rootIdOf, (0, VV.rootMetaDescOf)(BB))
      }
      getItemId(BB) {
        if (!BB || BB === Ty.c) return 0;
        const TB = this.idOf(BB);
        if (void 0 === TB) throw new Error(`Invalid block name. You sent ${BB}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return TB
      }
      getItemName(BB) {
        if (!BB || BB === Ty.c) return Ty.c;
        const TB = this.idOf(BB);
        if (void 0 === TB) throw new Error(`Item ${BB} not found in registry`);
        return (0, py.c)(TB)
      }
      blockNameToBlockId(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (BB === Ty.c) return 0;
        let dB = this.idOf(BB);
        if (void 0 === dB || !this.isBlockId(dB)) {
          const TB = BB.indexOf("|"),
            VB = TB > 0 ? (0, py.b)(BB.slice(0, TB)) : void 0;
          dB = void 0 !== VB && this.isBlockId(VB) && (0, VV.rootMetaDescOf)(VB) === BB ? VB : void 0
        }
        if (void 0 !== dB) return dB;
        if (!TB) throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(BB) {
        return BB > 0 && BB < this.props.blockFlags.length
      }
      nameOfId(BB) {
        return 0 !== BB && (0, py.c)(BB) || Ty.c
      }
      itemType(BB) {
        const TB = BB ? this.idOf(BB) : void 0;
        if (!TB) return null;
        let dB = this.types.get(TB);
        return void 0 === dB && (dB = Object.freeze({
          id: TB,
          name: (0, py.c)(TB),
          meta: this.getMetaInfo(TB),
          stackable: Jy(this.props, TB),
          type: (0, VV.itemTypeNameOf)(TB),
          clipSize: (0, VV.clipSizeOf)(TB),
          scopeType: (0, VV.scopeTypeOf)(TB),
          showsAimingUi: (0, VV.showsAimingUi)(TB)
        }), this.types.set(TB, dB)), dB
      }
      getItemStat(BB, TB) {
        if (Vy.b.has(TB)) {
          const dB = "minChargeStateToUse" === TB ? this.getMetaInfo(BB).rootName : this.getItemName(BB),
            VB = this.options.get((0, Vy.f)(dB, TB));
          if (null !== VB && void 0 !== VB) return VB
        }
        return this.defaultStat(BB, TB, this.statOf(TB))
      }
      getDisplayName(BB) {
        return this.getItemStat(BB, "displayName")
      }
      getDefaultItemStat(BB, TB) {
        return this.defaultStat(BB, TB, this.statOf(TB))
      }
      statOf(BB) {
        const TB = gy[BB];
        return void 0 === TB && function(BB, TB) {
          throw new Error(`ClientApi.${BB} is not available yet in the wasm client (${TB})`)
        }(`getItemStat("${BB}")`, `a table of the stat: the wasm client answers ${Object.keys(gy).join(", ")}`), TB
      }
      defaultStat(BB, TB, dB) {
        const VB = this.idOf(BB),
          yB = void 0 === VB ? void 0 : dB(this.props, VB);
        return null !== yB && void 0 !== yB || "displayName" !== TB ? yB : this.getItemName(BB)
      }
      getClientOption(BB) {
        return this.options.get(BB)
      }
      getGunStats(BB) {
        return this.getClientOption(`${BB}GunStats`)
      }
      watchClientOption(BB, TB) {
        return this.options.subscribe(BB, TB)
      }
      isSolidBlockId(BB) {
        var TB;
        return 0 !== ((null !== (TB = this.props.blockFlags[BB]) && void 0 !== TB ? TB : 0) & DB.H.Solid)
      }
      isStackableId(BB) {
        return Jy(this.props, BB)
      }
      isFluidBlockId(BB) {
        var TB;
        return 0 !== ((null !== (TB = this.props.blockFlags[BB]) && void 0 !== TB ? TB : 0) & DB.H.Fluid)
      }
      canPlaceOverBlockId(BB) {
        var TB;
        return 0 !== ((null !== (TB = this.props.blockFlags[BB]) && void 0 !== TB ? TB : 0) & DB.H.PlaceOver)
      }
      attachedTopOf(BB) {
        var TB;
        return null !== (TB = this.props.blockAttachedTops[BB]) && void 0 !== TB ? TB : 0
      }
      isDroplessBlockId(BB) {
        return (0, VV.dropsNothing)(BB)
      }
    }

    function Dy(BB, TB) {
      const dB = new Map;
      return (VB, yB) => {
        const pB = TB.idOf(VB),
          lB = void 0 === pB ? null : (VB => {
            let yB = dB.get(VB);
            if (void 0 === yB) {
              const pB = BB.queries.salvageRecipe(VB),
                lB = new DataView(BB.memory().buffer, BB.scratch(), pB),
                JB = [];
              for (let BB = 0; BB + DB.Pd.BYTES <= pB; BB += DB.Pd.BYTES) JB.push(Object.freeze({
                item: TB.nameOfId(DB.Pd.item(lB, BB)),
                amt: DB.Pd.amount(lB, BB)
              }));
              yB = 0 === JB.length ? null : Object.freeze(JB), dB.set(VB, yB)
            }
            return yB
          })(pB);
        if (null === lB || void 0 === yB) return lB;
        const JB = yB <= 0 ? 1 : yB;
        return lB.map((BB => {
          let {
            item: TB,
            amt: dB
          } = BB;
          return {
            item: TB,
            amt: dB * JB
          }
        }))
      }
    }
    var uy = dB(39645),
      Hy = dB(35913),
      Ey = dB(35899),
      vy = dB(35941),
      my = dB(35497),
      iy = dB(39412),
      Ny = dB(41274);
    const ty = -1,
      fy = new Uint8Array(0),
      sy = new TextEncoder;

    function My(BB) {
      if (null === BB) return null;
      const TB = sy.encode(BB);
      return TB.byteLength < LB.xc ? TB : TB.subarray(0, LB.xc - 1)
    }
    class zy {
      constructor(BB) {
        this.deps = BB, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ty, this.keyframesSettled = !1, this.reloadFrom = ty
      }
      reloadKeyframes() {
        var BB, TB;
        this.keyframesVersion = ty, this.reloadFrom = null !== (BB = null === (TB = this.view()) || void 0 === TB ? void 0 : TB.version) && void 0 !== BB ? BB : ty
      }
      setPlayback(BB) {
        const TB = 1 === this.deps.core.xyB(BB);
        return TB && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ty, this.reloadFrom = ty), TB
      }
      async open(BB) {
        const TB = await this.deps.replay.open(BB);
        return "opening" === TB && (this.reloadKeyframes(), this.deps.recorder.prefetch()), TB
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(BB)), TB)
      }
      setSpeed(BB) {
        this.deps.replay.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.replay.setCameraMode(Ny.b.indexOf(BB))
      }
      view() {
        var BB;
        const TB = DB.B.replayViewPtr(this.deps.apiView(), 0);
        if (0 === TB) return this.lastView = null, null;
        const dB = new DataView(this.deps.buffer(), TB, DB.Id.BYTES),
          VB = DB.Id.version(dB, 0),
          yB = this.lastView;
        if (null !== yB && yB.version === VB) return yB;
        const pB = DB.Id.markIn(dB, 0),
          lB = {
            version: VB,
            state: DB.Id.state(dB, 0),
            cameraMode: null !== (BB = Ny.b[DB.Id.cameraMode(dB, 0)]) && void 0 !== BB ? BB : "recording",
            dL: DB.Id.dL(dB, 0),
            totalTicks: DB.Id.totalTicks(dB, 0),
            speed: DB.Id.speed(dB, 0),
            mark: pB === DB.Hd ? null : {
              inTick: pB,
              outTick: DB.Id.markOut(dB, 0)
            },
            editVersion: DB.Id.editVersion(dB, 0)
          };
        return this.lastView = lB, lB
      }
      keyframes() {
        const BB = this.view();
        if (null === BB) return [];
        BB.version !== this.reloadFrom && (this.reloadFrom = ty);
        const TB = this.reloadFrom === ty && BB.state !== LB.hd.Cropping && BB.state !== LB.hd.None,
          dB = TB ? BB.editVersion : BB.version;
        if (dB === this.keyframesVersion && TB === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: VB
        } = this.deps, yB = VB.jyB(), pB = VB.NH(), lB = [];
        if (0 !== pB && yB > 0) {
          const BB = new DataView(this.deps.buffer(), pB, yB * LB.ic);
          for (let TB = 0; TB < yB; TB++) {
            const dB = TB * LB.ic,
              VB = TB => BB.getFloat64(dB + TB, !0);
            lB.push({
              dL: BB.getUint32(dB + LB.tc, !0),
              position: [VB(LB.pc), VB(LB.pc + 8), VB(LB.pc + 16)],
              direction: [VB(LB.kc), VB(LB.kc + 8), VB(LB.kc + 16)],
              easing: [VB(LB.mc), VB(LB.mc + 8), VB(LB.mc + 16), VB(LB.mc + 24)]
            })
          }
        }
        return this.keyframesVersion = dB, this.keyframesSettled = TB, this.lastKeyframes = lB, lB
      }
      addKeyframe() {
        const BB = this.deps.apiView(),
          TB = [DB.B.eye(BB, 0, 0), DB.B.eye(BB, 0, 1), DB.B.eye(BB, 0, 2)];
        return this.deps.replay.addKeyframe(TB, function(BB, TB) {
          const dB = Math.cos(TB);
          return [dB * Math.sin(BB), -Math.sin(TB), dB * Math.cos(BB)]
        }(DB.B.heading(BB, 0), DB.B.pitch(BB, 0)))
      }
      setKeyframe(BB) {
        return this.deps.replay.setKeyframe(BB.dL, Float64Array.from([...BB.position, ...BB.direction, ...BB.easing]))
      }
      moveKeyframe(BB, TB) {
        return this.deps.replay.moveKeyframe(BB, TB)
      }
      deleteKeyframes(BB, TB) {
        return this.deps.replay.deleteKeyframes(BB, TB)
      }
      setMark(BB) {
        var TB, dB;
        return this.deps.replay.setMark(null !== (TB = null === BB || void 0 === BB ? void 0 : BB.inTick) && void 0 !== TB ? TB : -1, null !== (dB = null === BB || void 0 === BB ? void 0 : BB.outTick) && void 0 !== dB ? dB : -1)
      }
      crop(BB, TB) {
        const dB = this.deps.replay.crop(BB, TB);
        return dB && this.reloadKeyframes(), dB
      }
      save(BB) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(BB)
      }
      recorderControl(BB) {
        this.deps.recorder.control(BB)
      }
      recorderPrefs(BB, TB) {
        this.deps.recorder.prefs(BB, TB)
      }
      recorderOption(BB, TB) {
        const dB = this.deps.cmd();
        return null !== dB && (0, DB.Bf)(dB, 0, BB, null === TB ? fy : sy.encode(TB))
      }
      recordFlyingText(BB, TB, dB, VB) {
        const yB = this.deps.cmd(),
          pB = Math.max(0, Math.min(4294967295, Math.round(VB)));
        return null !== yB && (0, DB.tf)(yB, 0, TB, dB, pB, sy.encode(BB))
      }
      recordPlayerKilled(BB, TB, dB, VB) {
        const yB = this.deps.cmd();
        return null !== yB && (0, DB.Ff)(yB, 0, BB, TB, Math.max(0, dB), sy.encode(VB))
      }
      recordKillfeed(BB, TB, dB) {
        var VB, yB;
        const pB = this.deps.cmd(),
          lB = function(BB) {
            const TB = BB.reduce(((BB, TB) => {
                var dB;
                return BB + xd._ + (null !== (dB = null === TB || void 0 === TB ? void 0 : TB.byteLength) && void 0 !== dB ? dB : 0)
              }), 0),
              dB = new Uint8Array(TB),
              VB = new DataView(dB.buffer);
            let yB = 0;
            for (const lB of BB) {
              var pB;
              VB.setUint16(yB, null !== (pB = null === lB || void 0 === lB ? void 0 : lB.byteLength) && void 0 !== pB ? pB : LB.xc, !0), yB += xd._, null !== lB && (dB.set(lB, yB), yB += lB.byteLength)
            }
            return dB
          }([My(BB.name), My(BB.colour), My(TB.name), My(TB.colour), My(dB)]);
        return null !== pB && (0, DB.xf)(pB, 0, null !== (VB = BB.id) && void 0 !== VB ? VB : DB.ad, null !== (yB = TB.id) && void 0 !== yB ? yB : DB.ad, lB)
      }
      recorderSession(BB, TB) {
        this.deps.recorder.session({
          session: TB,
          lobbyType: BB.lobbyType,
          game: BB.gameNameWithVariation,
          lobby: BB.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.AyB()
      }
      filePartDone(BB, TB) {
        this.deps.recorder.filePartDone(BB, TB)
      }
      fileDone(BB) {
        this.deps.recorder.fileDone(BB)
      }
    }
    const wy = -2147483648;
    class Uy {
      constructor(BB) {
        var TB;
        this.deps = BB, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (TB = BB.now) && void 0 !== TB ? TB : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var BB, TB, dB;
        return null === (BB = null === (TB = (dB = this.deps).live) || void 0 === TB ? void 0 : TB.call(dB)) || void 0 === BB || BB
      }
      activated(BB) {
        var TB, dB;
        this.live && (this.viewerShown(!0 === (null === (TB = (dB = this.deps).viewerOpen) || void 0 === TB ? void 0 : TB.call(dB))), this.deps.client.recorderSession(BB, (0, Ny.d)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var BB, TB;
        this.live && (this.state.recording || !0 !== (null === (BB = (TB = this.deps).viewerOpen) || void 0 === BB ? void 0 : BB.call(TB))) ? this.deps.client.recorderControl(LB.Nc.ToggleRecording) : this.deps.notify(vy.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(LB.Nc.SaveClip) : this.deps.notify(vy.d.clippingNotOn)
      }
      viewerShown(BB) {
        this.live && this.deps.client.recorderControl(BB ? LB.Nc.ViewerOpened : LB.Nc.ViewerClosed)
      }
      setPrefs(BB, TB) {
        this.live && this.deps.client.recorderPrefs(BB, TB)
      }
      setOption(BB, TB) {
        this.live && this.deps.client.recorderOption(BB, TB)
      }
      recordFlyingText(BB, TB, dB, VB) {
        this.live && this.deps.client.recordFlyingText(BB, TB, dB, VB)
      }
      recordPlayerKilled(BB, TB, dB, VB) {
        this.live && this.deps.client.recordPlayerKilled(BB, TB, dB, VB)
      }
      recordKillfeed(BB, TB, dB) {
        this.live && this.deps.client.recordKillfeed(BB, TB, dB)
      }
      dL() {
        let BB = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, BB = {
            ...BB,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const TB = Math.floor((this.now() - this.recordingSince) / 1e3);
          TB !== BB.seconds && (BB = {
            ...BB,
            seconds: TB
          })
        }
        this.set(BB)
      }
      onEvent(BB) {
        var TB, dB;
        const {
          notify: VB
        } = this.deps, yB = vy.d;
        switch (BB.what) {
          case LB.Mc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), VB(yB.recordingStarted);
            break;
          case LB.Mc.RecordingStopped:
            this.stopRecording(), VB(yB.recordingStopped), this.saveState(LB.Yc.Recording, "saving");
            break;
          case LB.Mc.RecordingDiscarded:
            this.stopRecording(), VB(yB.recordingDiscarded);
            break;
          case LB.Mc.RecordingTurnedOff:
            this.stopRecording(), VB(yB.recordingTurnedOff);
            break;
          case LB.Mc.LimitReached:
            VB(yB.limitReached);
            break;
          case LB.Mc.ClipSaved:
            this.saveState(LB.Yc.Clip, "saving");
            break;
          case LB.Mc.ClipEmpty:
            VB(yB.clipEmpty);
            break;
          case LB.Mc.ClippingNotOn:
            VB(yB.clippingNotOn);
            break;
          case LB.Mc.Disallowed:
            VB(yB.disallowed);
            break;
          case LB.Mc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case LB.Mc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case LB.Mc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case LB.Mc.SaveBusy:
            null === (TB = (dB = this.deps).onSaveState) || void 0 === TB || TB.call(dB, BB.kind, "busy"), VB(yB.saveBusy);
            break;
          case LB.Mc.CloseViewerFirst:
            VB(yB.closeViewerFirst)
        }
      }
      fileReady(BB, TB) {
        this.deps.download(TB), this.saveState(BB, "done"), this.deps.notify(BB === LB.Yc.Clip ? vy.d.clipSaved : vy.d.recordingSaved)
      }
      failed(BB) {
        this.saveState(BB, "failed"), this.deps.notify(BB === LB.Yc.Clip ? vy.d.clipFailed : vy.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(BB, TB) {
        var dB, VB;
        null === (dB = (VB = this.deps).onSaveState) || void 0 === dB || dB.call(VB, BB, TB)
      }
      set(BB) {
        BB !== this.state && (this.state = BB, this.deps.onState(BB))
      }
    }
    const Fy = new TextDecoder;

    function Ky(BB, TB, dB, VB) {
      const yB = [];
      for (let pB = 0; pB < VB; pB++) {
        if (TB + xd._ > dB) return null;
        const VB = BB.getUint16(TB, !0);
        if (TB += xd._, VB !== LB.xc) {
          if (TB + VB > dB) return null;
          yB.push(Fy.decode(new Uint8Array(BB.buffer, BB.byteOffset + TB, VB))), TB += VB
        } else yB.push(null)
      }
      return TB === dB ? yB : null
    }

    function ry(BB, TB) {
      let dB = new DataView(new ArrayBuffer(0)),
        VB = !0;
      const yB = {
        replayFailed: (TB, dB) => {
          BB.replayFailed({
            reason: TB,
            code: dB
          })
        },
        replayOption: (TB, yB, pB, lB) => {
          const JB = function(BB, TB, dB, VB) {
            switch (TB) {
              case LB.$c.Cleared:
                return 0 === VB ? null : void 0;
              case LB.$c.Text:
                return Fy.decode(new Uint8Array(BB.buffer, BB.byteOffset + dB, VB));
              case LB.$c.Int:
                return VB === Int32Array.BYTES_PER_ELEMENT ? BB.getInt32(dB, !0) : void 0;
              case LB.$c.Double:
                return VB === Float64Array.BYTES_PER_ELEMENT ? BB.getFloat64(dB, !0) : void 0;
              default:
                return
            }
          }(dB, yB, pB, lB);
          void 0 !== JB ? BB.replayOption({
            key: TB,
            value: JB
          }) : VB = !1
        },
        replayUiEvent: (TB, yB, pB, lB, JB, YB) => {
          const gB = function(BB, TB, dB, VB, yB, pB, lB) {
            const JB = pB + lB;
            switch (TB) {
              case LB.dd.FlyingText: {
                const lB = Ky(BB, pB, JB, 1);
                return null !== lB && null !== lB[0] ? {
                  what: TB,
                  td: dB,
                  Nd: VB,
                  angle: yB,
                  contentJson: lB[0]
                } : null
              }
              case LB.dd.PlayerKilled: {
                const VB = Ky(BB, pB, JB, 3);
                return VB ? {
                  what: TB,
                  killstreak: dB,
                  dead: VB[0],
                  killer: VB[1],
                  withItem: VB[2]
                } : null
              }
              case LB.dd.Killfeed: {
                const dB = Ky(BB, pB, JB, 7);
                return dB ? {
                  what: TB,
                  killerId: dB[0],
                  killerName: dB[1],
                  killerColour: dB[2],
                  victimId: dB[3],
                  victimName: dB[4],
                  victimColour: dB[5],
                  withItem: dB[6]
                } : null
              }
              default:
                return null
            }
          }(dB, TB, yB, pB, lB, JB, YB);
          null !== gB ? BB.replayUiEvent(gB) : VB = !1
        },
        replayFilePart: (dB, yB, pB, lB) => {
          const JB = TB();
          pB + lB > JB.byteLength ? VB = !1 : BB.filePart(dB, yB, new Uint8Array(JB, pB, lB).slice())
        },
        replayFileReady: (TB, dB, VB, yB) => {
          BB.fileReady({
            save: TB,
            kind: dB,
            parts: VB,
            bytes: yB
          })
        },
        recorderEvent: (TB, dB, VB) => {
          BB.recorderEvent({
            what: TB,
            kind: dB,
            save: VB
          })
        },
        replayOpened: (TB, VB, yB) => {
          BB.replayOpened(Fy.decode(new Uint8Array(dB.buffer, dB.byteOffset + VB, yB)))
        }
      };
      return (BB, TB, pB, lB) => !(BB < LB.K.ReplayFailed || BB > LB.K.RecorderEvent) && (dB = TB, VB = !0, (0, DB.fe)(BB, TB, pB, lB, yB) && VB)
    }

    function Iy(BB) {
      let TB = null;
      const dB = ry(BB, (() => {
        if (null === TB) throw new Error("a recorder event read outside recorderEventReader's call");
        return TB.buffer
      }));
      return (BB, VB) => {
        TB = VB;
        try {
          ! function(BB, TB) {
            const dB = BB.slice(),
              VB = new DataView(dB.buffer);
            for (let yB = 0; yB < dB.byteLength;) {
              if (yB + LB.I > dB.byteLength) throw new Error(`the recorder module's events end mid-head at ${yB}`);
              const BB = VB.getUint32(yB, !0),
                pB = 65535 & BB,
                lB = BB >>> 16,
                JB = yB + LB.I;
              if (JB + lB > dB.byteLength || !TB(pB, VB, JB, lB)) throw new Error(`the recorder module wrote a malformed event ${pB} (${lB} bytes) at ${yB}`);
              yB = JB + (0, LB.je)(lB)
            }
          }(BB, dB)
        } finally {
          TB = null
        }
      }
    }
    class cy {
      constructor(BB, TB) {
        this.acks = BB, this.handlers = TB, this.parts = new Map
      }
      onPart(BB, TB, dB) {
        let VB = this.parts.get(BB);
        VB || (VB = [], this.parts.set(BB, VB)), VB[TB] = dB, this.acks.filePartDone(BB, TB)
      }
      onReady(BB) {
        var TB;
        const dB = null !== (TB = this.parts.get(BB.save)) && void 0 !== TB ? TB : [];
        this.parts.delete(BB.save);
        const VB = function(BB, TB, dB) {
          if (BB.length !== TB) return null;
          let VB = 0;
          for (let lB = 0; lB < TB; lB++) {
            if (void 0 === BB[lB]) return null;
            VB += BB[lB].byteLength
          }
          if (VB !== dB) return null;
          if (1 === TB) return BB[0];
          const yB = new Uint8Array(dB);
          let pB = 0;
          for (const lB of BB) yB.set(lB, pB), pB += lB.byteLength;
          return yB
        }(dB, BB.parts, BB.bytes);
        this.acks.fileDone(BB.save), null === VB ? this.handlers.fileIncomplete(BB.save, BB.kind) : this.handlers.fileReady(BB.save, BB.kind, VB)
      }
      onDiscarded(BB) {
        this.parts.delete(BB)
      }
    }

    function Sy() {
      return dB.e(53).then((() => dB(41304)))
    }
    class Py {
      constructor(BB) {
        this.deps = BB, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: TB
        } = BB;
        this.recorder = new Uy({
          client: TB,
          live: () => {
            var BB;
            return !0 !== (null === (BB = this.viewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          viewerOpen: BB.viewerOpen,
          notify: BB.notify,
          download: TB => {
            var dB;
            null === (dB = BB.download) || void 0 === dB || dB.call(BB, TB)
          },
          onState: BB.onRecorderState,
          onSaveState: BB.onSaveState
        }), this.parts = new cy(TB, {
          fileReady: (BB, TB, dB) => {
            var VB;
            TB === LB.Yc.Edited ? null === (VB = this.viewer) || void 0 === VB || VB.saveDone(dB) : this.recorder.fileReady(TB, dB)
          },
          fileIncomplete: (BB, TB) => {
            this.saveFailed(TB)
          }
        });
        const dB = {
          replayFailed: BB => {
            var TB;
            null === (TB = this.viewer) || void 0 === TB || TB.onFailed(BB)
          },
          replayOption: TB => {
            var dB;
            null === (dB = BB.onReplayOption) || void 0 === dB || dB.call(BB, TB)
          },
          replayUiEvent: TB => {
            var dB;
            null === (dB = BB.onReplayUiEvent) || void 0 === dB || dB.call(BB, TB)
          },
          filePart: (BB, TB, dB) => {
            this.parts.onPart(BB, TB, dB)
          },
          fileReady: BB => {
            this.parts.onReady(BB)
          },
          replayOpened: TB => {
            var dB;
            null === (dB = BB.onReplayOpened) || void 0 === dB || dB.call(BB, TB)
          },
          recorderEvent: BB => {
            var TB;
            switch (BB.what) {
              case LB.Mc.FileDiscarded:
                this.parts.onDiscarded(BB.save);
                break;
              case LB.Mc.SaveFailed:
                this.saveFailed(BB.kind);
                break;
              case LB.Mc.SaveBusy:
                if (null !== (TB = this.viewer) && void 0 !== TB && TB.savePending) {
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
        this.sink = function(BB, TB) {
          return {
            onReplayEvent: ry(BB, TB)
          }
        }(dB, BB.buffer), this.recorderEvents = Iy(dB)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var BB;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (BB = this.deps.loadViewer) && void 0 !== BB ? BB : Sy)().catch((BB => {
          throw this.viewerChunk = null, BB
        })), this.viewerChunk.then((BB => (this.viewer ??= new BB.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var BB, TB;
            null === (BB = (TB = this.deps).onViewerChange) || void 0 === BB || BB.call(TB)
          }
        }), this.viewer))))
      }
      activated(BB) {
        this.recorder.activated(BB)
      }
      afterFrame(BB) {
        try {
          BB > 0 && this.recorder.dL()
        } finally {
          var TB;
          null === (TB = this.viewer) || void 0 === TB || TB.afterFrame()
        }
      }
      end() {
        var BB;
        null === (BB = this.viewer) || void 0 === BB || BB.end()
      }
      saveFailed(BB) {
        var TB;
        BB === LB.Yc.Edited ? null === (TB = this.viewer) || void 0 === TB || TB.saveFailed(!1) : this.recorder.failed(BB)
      }
    }
    var Qy = dB(39348),
      Ry = dB(39372),
      ay = dB(4199),
      Zy = dB(39743);
    class Xy {
      constructor(BB) {
        this.deps = BB, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(BB, TB) {
        if (!this.deps.live() || 0 === BB && 0 === TB) return;
        const dB = (0, QB.p)(0, performance.now()),
          VB = this.deps.dragScale();
        (0, Zy.h)((() => {
          (0, QB.t)(LB.pb.MouseDown, 0, 0, 0, dB), (0, QB.t)(LB.pb.MouseMove, 0, BB * VB, TB * VB, 0), (0, QB.t)(LB.pb.MouseUp, 0, 0, 0, dB)
        }))
      }
      move(BB) {
        var TB, dB;
        this.analogue[0] = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.x) && void 0 !== TB ? TB : 0, this.analogue[1] = null !== (dB = null === BB || void 0 === BB ? void 0 : BB.y) && void 0 !== dB ? dB : 0, this.send()
      }
      holdVertical(BB, TB) {
        const dB = "freeCamUp" === BB ? DB.cc.Up : DB.cc.Down;
        this.keys = TB ? this.keys | dB : this.keys & ~dB, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const BB = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== BB && !(0, DB.ye)(BB, 0, this.analogue, this.keys)
      }
    }
    var Wy = dB(35586),
      hy = dB(615),
      Cy = dB(127),
      Gy = dB(95),
      qy = dB(8547);

    function xy() {
      const BB = VB.d.get("clientEscMenuOptions"),
        TB = (0, hy.k)(BB);
      return {
        mouse: (0, Gy.isMobile)() ? TB : BB.mouseSensitivity,
        touch: TB,
        fovPercent: BB.cameraFOV
      }
    }

    function jy() {
      const BB = VB.d.get("clientEscMenuOptions"),
        TB = VB.d.get("isTouchScreen") ? (0, hy.k)(BB) : BB.mouseSensitivity,
        dB = xy().mouse;
      return dB > 0 ? TB / dB : 1
    }

    function Ay(BB) {
      const TB = () => {
        BB.setSoundPrefs(VB.d.get("soundVolume"), VB.d.get("soundOnFromAd"))
      };
      let dB = null;
      const yB = () => {
        const {
          showFog: TB,
          enableLighting: yB,
          fogChunkDistance: pB,
          chunkFadeIn: lB
        } = VB.d.get("clientEscMenuOptions"), JB = {
          showFog: TB,
          lighting: yB,
          fogChunks: pB,
          chunkFade: lB
        };
        dB && (0, LB.Ud)(dB) === (0, LB.Ud)(JB) && dB.fogChunks === pB || (dB = JB, BB.setEnvPrefs(dB))
      };
      let pB = null;
      const JB = () => {
        const TB = function() {
          const BB = VB.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: VB.d.get("areNametagsHidden"),
            crouchToggle: BB.crouchIsToggle,
            bhopDisabled: BB.disableBunnyHopping,
            disableBobbing: BB.disableBobbing,
            ezTowering: BB.ezTowering && (0, Cy.h)(),
            ezBridging: BB.ezBridging,
            showChunkBorders: BB.showChunkBorders,
            edgeGuard: (0, Wy.h)(BB),
            nametagCutDistance: (0, qy.d)()
          }
        }();
        (0, zB.ae)(pB, TB) || (pB = TB, BB.setUiPrefs(TB))
      };
      let YB = null;
      const gB = () => {
        const TB = xy();
        (0, zB.ae)(YB, TB) || (YB = TB, BB.setLookPrefs(TB))
      };
      TB(), yB(), JB(), gB();
      const oB = [(0, lB.i)("appManagerUpdated|soundVolume", TB), (0, lB.i)("appManagerUpdated|soundOnFromAd", TB), (0, lB.i)("appManagerUpdated|clientEscMenuOptions", (() => {
        yB(), JB(), gB()
      })), (0, lB.i)("appManagerUpdated|areNametagsHidden", JB), (0, lB.i)("appManagerUpdated|showDistantNametags", JB)];
      return () => {
        for (const BB of oB) BB()
      }
    }
    var by = dB(39661),
      ny = dB(39664);
    var ey = (0, ny.d)("lend"),
      Bp = (0, ny.d)("starting"),
      Tp = (0, ny.d)("generation"),
      dp = (0, ny.d)("end");
    class Vp {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, dp, {
          value: yp
        }), Object.defineProperty(this, ey, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Bp, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Tp, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, by.e)(this, ey)[ey] || (0, by.e)(this, Bp)[Bp]
      }
      async start(BB) {
        if (this.active) return "busy";
        const TB = (0, by.e)(this, Tp)[Tp];
        (0, by.e)(this, Bp)[Bp] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, by.e)(this, Bp)[Bp] = !1
        }
        if (TB !== (0, by.e)(this, Tp)[Tp]) return "refused";
        const dB = this.deps.beginSave();
        if (!dB) return "refused";
        const VB = Number(BigInt.asUintN(32, BB)),
          yB = Number(BigInt.asUintN(32, BB >> 32n));
        let pB = "refused";
        return this.deps.recorderCall(((BB, TB) => {
          const lB = dB.editState,
            JB = BB.stage(lB.length);
          0 !== JB ? (new Uint8Array(TB.buffer, JB, lB.length).set(lB), BB.byB(dB.headLen, VB, yB) && (pB = "sealing")) : pB = "tooLarge"
        }), !0), "sealing" !== pB ? (dB.end(), pB) : ((0, by.e)(this, ey)[ey] = dB, "sealing")
      }
      beforeRecorderStep() {
        const BB = (0, by.e)(this, ey)[ey];
        if (!BB) return null;
        let TB = -1,
          dB = 0;
        if (!this.deps.recorderCall((BB => {
            TB = BB.nyB(), TB > 0 && (dB = BB.eyB())
          }))) return (0, by.e)(this, dp)[dp](BB, "stopped");
        if (TB < 0) return (0, by.e)(this, dp)[dp](BB, "read");
        if (0 === TB) return null;
        const VB = BB.head(dB, TB);
        let yB = !1;
        if (VB && this.deps.recorderCall(((BB, dB) => {
            const pB = BB.stage(TB);
            0 !== pB && (new Uint8Array(dB.buffer, pB, TB).set(VB), yB = !0)
          }), !0), yB) return null;
        const pB = BB.givenUp();
        this.deps.recorderCall((BB => {
          BB.BpB()
        }));
        const lB = (0, by.e)(this, dp)[dp](BB, pB ? "givenUp" : "stopped");
        return pB && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), lB
      }
      stop() {
        (0, by.e)(this, Tp)[Tp]++;
        const BB = (0, by.e)(this, ey)[ey];
        BB && (this.deps.recorderCall((BB => {
          BB.BpB()
        })), (0, by.e)(this, dp)[dp](BB, "stopped"))
      }
    }

    function yp(BB, TB) {
      return (0, by.e)(this, ey)[ey] = null, BB.end(), TB
    }

    function pp(BB, TB) {
      const dB = new Uint8Array(4),
        VB = new DataView(dB.buffer);
      return VB.setUint8(0, BB ? 1 : 0), VB.setUint16(2, Math.max(0, Math.min(65535, Math.round(TB))), !0), dB
    }

    function lp(BB, TB) {
      return BB > function(BB) {
        return 16777216 + 314572.8 * Math.max(0, BB)
      }(TB) + 33554432
    }
    let Jp = null;

    function Yp(BB) {
      return Jp ??= async function(BB) {
        const TB = BB.loadInFlight();
        TB && await TB.catch((() => {}));
        if (BB.trapped()) return "trapped";
        if (BB.busy() || !lp(BB.memoryBytes(), BB.clipSeconds())) return "RO";
        BB.unload();
        let dB = !1;
        try {
          dB = await BB.load()
        } catch {
          dB = !1
        }
        if (!dB) return BB.trapped() ? "trapped" : BB.ND() ? "ND" : "failed";
        return "recycled"
      }(BB).finally((() => {
        Jp = null
      })), Jp
    }
    const gp = "Replay recording couldn't load, so try again.",
      op = new Set([LB.Nc.ToggleRecording, LB.Nc.SaveClip]);
    var kp = (0, ny.d)("JD"),
      Lp = (0, ny.d)("module"),
      Op = (0, ny.d)("memory"),
      Dp = (0, ny.d)("trapped"),
      Hp = (0, ny.d)("ND"),
      Ep = (0, ny.d)("recycleDue"),
      vp = (0, ny.d)("loading"),
      mp = (0, ny.d)("generation"),
      ip = (0, ny.d)("viewDrawn"),
      Np = (0, ny.d)("clip"),
      tp = (0, ny.d)("session"),
      fp = (0, ny.d)("control"),
      sp = (0, ny.d)("deferred"),
      Mp = (0, ny.d)("coreU8"),
      zp = (0, ny.d)("coreU32"),
      wp = (0, ny.d)("moduleU8"),
      Up = (0, ny.d)("edited"),
      Fp = (0, ny.d)("sendSession"),
      Kp = (0, ny.d)("checkNotInEvents"),
      rp = (0, ny.d)("clipping"),
      Ip = (0, ny.d)("busy"),
      cp = (0, ny.d)("use"),
      Sp = (0, ny.d)("ensureLoaded"),
      Pp = (0, ny.d)("loadOnce"),
      Qp = (0, ny.d)("recycleAfterStep"),
      Rp = (0, ny.d)("settleRecycle"),
      ap = (0, ny.d)("load"),
      Zp = (0, ny.d)("attach"),
      Xp = (0, ny.d)("resendHeld"),
      Wp = (0, ny.d)("recycle"),
      hp = (0, ny.d)("send"),
      Cp = (0, ny.d)("unload"),
      Gp = (0, ny.d)("dropModule"),
      qp = (0, ny.d)("coreBytes"),
      xp = (0, ny.d)("coreWords"),
      jp = (0, ny.d)("moduleBytes"),
      Ap = (0, ny.d)("loadFailed"),
      bp = (0, ny.d)("call"),
      np = (0, ny.d)("guard"),
      ep = (0, ny.d)("trapOn");
    class Bl {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, ep, {
          value: fl
        }), Object.defineProperty(this, np, {
          value: tl
        }), Object.defineProperty(this, bp, {
          value: Nl
        }), Object.defineProperty(this, Ap, {
          value: il
        }), Object.defineProperty(this, jp, {
          value: ml
        }), Object.defineProperty(this, xp, {
          value: vl
        }), Object.defineProperty(this, qp, {
          value: El
        }), Object.defineProperty(this, Gp, {
          value: Hl
        }), Object.defineProperty(this, Cp, {
          value: ul
        }), Object.defineProperty(this, hp, {
          value: Dl
        }), Object.defineProperty(this, Wp, {
          value: Ol
        }), Object.defineProperty(this, Xp, {
          value: Ll
        }), Object.defineProperty(this, Zp, {
          value: kl
        }), Object.defineProperty(this, ap, {
          value: ol
        }), Object.defineProperty(this, Rp, {
          value: gl
        }), Object.defineProperty(this, Qp, {
          value: Yl
        }), Object.defineProperty(this, Pp, {
          value: Jl
        }), Object.defineProperty(this, Sp, {
          value: ll
        }), Object.defineProperty(this, cp, {
          value: pl
        }), Object.defineProperty(this, Ip, {
          value: yl
        }), Object.defineProperty(this, rp, {
          value: Vl
        }), Object.defineProperty(this, Kp, {
          value: dl
        }), Object.defineProperty(this, Fp, {
          value: Tl
        }), Object.defineProperty(this, kp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Op, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Dp, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Hp, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ep, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mp, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ip, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Np, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Mp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Up, {
          writable: !0,
          value: void 0
        }), (0, by.e)(this, Up)[Up] = new Vp({
          ensureLoaded: () => (0, by.e)(this, Sp)[Sp](),
          recorderCall: (BB, TB) => {
            TB && (0, by.e)(this, Kp)[Kp]("an edited save's stage");
            const dB = (0, by.e)(this, bp)[bp](((TB, dB) => (BB(TB, dB), !0)));
            return null !== dB && void 0 !== dB && dB
          },
          beginSave: BB.beginSave,
          givenUp: BB.givenUp
        })
      }
      get active() {
        return null !== (0, by.e)(this, Lp)[Lp]
      }
      get trapped() {
        return (0, by.e)(this, Dp)[Dp]
      }
      get loading() {
        return null !== (0, by.e)(this, vp)[vp]
      }
      prefetch() {
        (0, by.e)(this, Hp)[Hp] || (0, by.e)(this, Dp)[Dp] || (0, by.e)(this, Lp)[Lp] || (0, by.e)(this, vp)[vp] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, by.e)(this, ip)[ip] = !0, (0, by.e)(this, rp)[rp]() && (0, by.e)(this, cp)[cp]()
      }
      prefs(BB, TB) {
        (0, by.e)(this, Np)[Np] = {
          on: BB,
          seconds: TB
        }, (0, by.e)(this, hp)[hp](LB.Kc.Prefs, pp(BB, TB)), BB && (0, by.e)(this, ip)[ip] && (0, by.e)(this, cp)[cp]()
      }
      control(BB) {
        const TB = function(BB) {
          return new Uint8Array([BB, 0, 0, 0])
        }(BB);
        if (op.has(BB)) return (0, by.e)(this, Lp)[Lp] ? void(0, by.e)(this, hp)[hp](LB.Kc.Control, TB) : ((0, by.e)(this, fp)[fp] = TB, void(0, by.e)(this, cp)[cp]());
        (0, by.e)(this, Hp)[Hp] || this.deps.coreCommand(LB.Kc.Control, TB)
      }
      session(BB) {
        (0, by.e)(this, tp)[tp] = BB, (0, by.e)(this, Fp)[Fp](BB)
      }
      filePartDone(BB, TB) {
        (0, by.e)(this, hp)[hp](LB.Kc.FilePartDone, function(BB, TB) {
          const dB = new Uint8Array(8),
            VB = new DataView(dB.buffer);
          return VB.setUint32(0, BB, !0), VB.setUint32(4, TB, !0), dB
        }(BB, TB))
      }
      fileDone(BB) {
        return (0, by.e)(this, hp)[hp](LB.Kc.FileDone, function(BB) {
          const TB = new Uint8Array(4);
          return new DataView(TB.buffer).setUint32(0, BB, !0), TB
        }(BB)), (0, by.e)(this, Qp)[Qp]()
      }
      saveEdited(BB) {
        return (0, by.e)(this, Kp)[Kp]("saveEdited"), (0, by.e)(this, Up)[Up].start(BB)
      }
      afterFrame() {
        if (!(0, by.e)(this, Lp)[Lp]) return;
        "read" === (0, by.e)(this, Up)[Up].beforeRecorderStep() && (0, by.e)(this, Qp)[Qp]();
        const BB = (0, by.e)(this, Ep)[Ep];
        (0, by.e)(this, Ep)[Ep] = null;
        const TB = (0, by.e)(this, Lp)[Lp],
          dB = (0, by.e)(this, Op)[Op];
        if (!TB || !dB) return void(null === BB || void 0 === BB || BB.resolve((0, by.e)(this, Dp)[Dp] ? "trapped" : "RO"));
        const {
          core: VB
        } = this.deps, yB = VB.VpB(2);
        let pB, lB, JB, YB, gB = 0,
          oB = 0;
        if (0 !== yB) {
          var kB, LB;
          const BB = (0, by.e)(this, xp)[xp]();
          gB = null !== (kB = BB[yB >>> 2]) && void 0 !== kB ? kB : 0, oB = null !== (LB = BB[1 + (yB >>> 2)]) && void 0 !== LB ? LB : 0
        }
        try {
          if (oB > 0) {
            const BB = TB.feed(oB);
            0 !== BB && (0, by.e)(this, jp)[jp](dB).set((0, by.e)(this, qp)[qp]().subarray(gB, gB + oB), BB)
          }
          pB = TB.step(), lB = TB.ppB(), JB = TB.lpB(), YB = TB.JpB()
        } catch (OB) {
          if (!(0, by.e)(this, ep)[ep](OB)) throw null === BB || void 0 === BB || BB.resolve("RO"), OB;
          return void(null === BB || void 0 === BB || BB.resolve("trapped"))
        }
        if (pB > 0) {
          const BB = VB.YpB(2, pB);
          0 !== BB && (0, by.e)(this, qp)[qp]().set((0, by.e)(this, jp)[jp](dB).subarray(lB, lB + pB), BB)
        }
        if (JB > 0) {
          (0, by.e)(this, sp)[sp] = [];
          try {
            this.deps.events(new Uint8Array(dB.buffer, YB, JB), dB)
          } catch (OB) {
            throw null === BB || void 0 === BB || BB.resolve("RO"), OB
          } finally {
            const BB = (0, by.e)(this, sp)[sp];
            (0, by.e)(this, sp)[sp] = null;
            for (const [TB, dB] of BB)(0, by.e)(this, hp)[hp](TB, dB)
          }
        }
        if (!(0, by.e)(this, rp)[rp]() && !(0, by.e)(this, Ip)[Ip]()) return (0, by.e)(this, Cp)[Cp](), void(null === BB || void 0 === BB || BB.resolve("RO"));
        null === BB || void 0 === BB || BB.resolve((0, by.e)(this, Wp)[Wp]())
      }
      dispose() {
        (0, by.e)(this, Hp)[Hp] = !0, (0, by.e)(this, Cp)[Cp]()
      }
    }

    function Tl(BB) {
      (0, by.e)(this, hp)[hp](LB.Kc.Session, function(BB) {
        const TB = new TextEncoder,
          dB = TB.encode(BB.game).subarray(0, 65535),
          VB = TB.encode(BB.lobby).subarray(0, 65535),
          yB = new Uint8Array(22 + dB.length + 2 + VB.length),
          pB = new DataView(yB.buffer);
        pB.setFloat64(0, BB.unixMs, !0), pB.setBigUint64(8, BigInt.asUintN(64, BB.session), !0), pB.setUint8(16, BB.lobbyType);
        let lB = 20;
        for (const JB of [dB, VB]) pB.setUint16(lB, JB.length, !0), yB.set(JB, lB + 2), lB += 2 + JB.length;
        return yB
      }({
        ...BB,
        unixMs: this.deps.unixNow()
      }))
    }

    function dl(BB) {
      false
    }

    function Vl() {
      var BB, TB;
      return null !== (BB = null === (TB = (0, by.e)(this, Np)[Np]) || void 0 === TB ? void 0 : TB.on) && void 0 !== BB && BB
    }

    function yl() {
      const BB = (0, by.e)(this, Lp)[Lp];
      let TB = !0;
      if (BB) try {
        TB = BB.busy()
      } catch (dB) {
        if (!(0, by.e)(this, ep)[ep](dB)) throw dB
      }
      return TB || (0, by.e)(this, Up)[Up].active
    }
    async function pl() {
      !(0, by.e)(this, Hp)[Hp] && this.deps.allowed() ? await (0, by.e)(this, Sp)[Sp]() : (0, by.e)(this, fp)[fp] = null
    }

    function ll() {
      return (0, by.e)(this, Dp)[Dp] || (0, by.e)(this, Hp)[Hp] ? Promise.resolve(!1) : (0, by.e)(this, Lp)[Lp] ? Promise.resolve(!0) : ((0, by.e)(this, vp)[vp] ??= (0, by.e)(this, Pp)[Pp](), (0, by.e)(this, vp)[vp])
    }
    async function Jl() {
      let BB = !1;
      try {
        return BB = await (0, by.e)(this, ap)[ap](), BB
      } finally {
        BB || ((0, by.e)(this, fp)[fp] = null), (0, by.e)(this, vp)[vp] = null
      }
    }

    function Yl() {
      if (!(0, by.e)(this, Lp)[Lp]) return Promise.resolve((0, by.e)(this, Dp)[Dp] ? "trapped" : "RO");
      if (!(0, by.e)(this, Ep)[Ep]) {
        let BB = () => {};
        const TB = new Promise((TB => {
          BB = TB
        }));
        (0, by.e)(this, Ep)[Ep] = {
          promise: TB,
          resolve: BB
        }
      }
      return (0, by.e)(this, Ep)[Ep].promise
    }

    function gl(BB) {
      const TB = (0, by.e)(this, Ep)[Ep];
      (0, by.e)(this, Ep)[Ep] = null, null === TB || void 0 === TB || TB.resolve(BB)
    }
    async function ol() {
      let BB = (0, by.e)(this, kp)[kp];
      if (!BB) {
        const TB = (0, by.e)(this, mp)[mp];
        try {
          BB = await this.deps.load()
        } catch (dB) {
          return TB === (0, by.e)(this, mp)[mp] && await (0, by.e)(this, Ap)[Ap](dB), !1
        }
        if (TB !== (0, by.e)(this, mp)[mp]) return this.deps.unload(), !1;
        const VB = BB,
          yB = (0, by.e)(this, np)[np]((() => VB.gpB()));
        if (void 0 === yB) return !1;
        const pB = this.deps.core.opB();
        if (yB !== pB) return await (0, by.e)(this, Ap)[Ap](new Error(`recorder port version ${yB}, the core's ${pB}`)), !1;
        (0, by.e)(this, kp)[kp] = BB
      }
      const TB = BB;
      try {
        if (!(0, by.e)(this, np)[np]((() => ((0, by.e)(this, Lp)[Lp] = new TB.kpB, (0, by.e)(this, Op)[Op] = TB.TpB(), !0)))) return !1;
        (0, by.e)(this, Xp)[Xp]();
        const BB = (0, by.e)(this, fp)[fp];
        return (0, by.e)(this, fp)[fp] = null, BB && (0, by.e)(this, hp)[hp](LB.Kc.Control, BB), (0, by.e)(this, Zp)[Zp]()
      } catch (dB) {
        return (0, by.e)(this, Cp)[Cp](), await (0, by.e)(this, Ap)[Ap](dB), !1
      }
    }

    function kl() {
      return this.deps.core.LpB(0), 1 === this.deps.core.LpB(1) || ((0, by.e)(this, Cp)[Cp](), this.deps.failed(gp), !1)
    }

    function Ll() {
      (0, by.e)(this, Np)[Np] && (0, by.e)(this, hp)[hp](LB.Kc.Prefs, pp((0, by.e)(this, Np)[Np].on, (0, by.e)(this, Np)[Np].seconds)), (0, by.e)(this, tp)[tp] && (0, by.e)(this, Fp)[Fp]((0, by.e)(this, tp)[tp])
    }

    function Ol() {
      return Yp({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var BB, TB;
          return null !== (BB = null === (TB = (0, by.e)(this, Np)[Np]) || void 0 === TB ? void 0 : TB.seconds) && void 0 !== BB ? BB : 0
        },
        trapped: () => (0, by.e)(this, Dp)[Dp],
        busy: () => (0, by.e)(this, Ip)[Ip](),
        loadInFlight: () => (0, by.e)(this, vp)[vp],
        ND: () => (0, by.e)(this, Hp)[Hp],
        unload: () => {
          (0, by.e)(this, Cp)[Cp]()
        },
        load: () => (0, by.e)(this, Sp)[Sp]()
      })
    }

    function Dl(BB, TB) {
      (0, by.e)(this, sp)[sp] ? (0, by.e)(this, sp)[sp].push([BB, TB]): (0, by.e)(this, bp)[bp](((dB, VB) => {
        const yB = dB.dpB(TB.length);
        0 !== yB && (new Uint8Array(VB.buffer, yB, TB.length).set(TB), dB.command(BB, TB.length))
      }))
    }

    function ul() {
      (0, by.e)(this, mp)[mp]++, (0, by.e)(this, Rp)[Rp]("RO"), (0, by.e)(this, Up)[Up].stop(), this.deps.core.LpB(0), (0, by.e)(this, Gp)[Gp](), (0, by.e)(this, Dp)[Dp] || ((0, by.e)(this, kp)[kp] = null, this.deps.unload())
    }

    function Hl() {
      (0, by.e)(this, bp)[bp]((BB => {
        BB.free()
      })), (0, by.e)(this, Lp)[Lp] = null, (0, by.e)(this, Op)[Op] = null, (0, by.e)(this, wp)[wp] = null
    }

    function El() {
      var BB;
      const TB = this.deps.coreBuffer();
      return (null === (BB = (0, by.e)(this, Mp)[Mp]) || void 0 === BB ? void 0 : BB.buffer) !== TB && ((0, by.e)(this, Mp)[Mp] = new Uint8Array(TB)), (0, by.e)(this, Mp)[Mp]
    }

    function vl() {
      var BB;
      const TB = this.deps.coreBuffer();
      return (null === (BB = (0, by.e)(this, zp)[zp]) || void 0 === BB ? void 0 : BB.buffer) !== TB && ((0, by.e)(this, zp)[zp] = new Uint32Array(TB, 0, TB.byteLength >>> 2)), (0, by.e)(this, zp)[zp]
    }

    function ml(BB) {
      var TB;
      const dB = BB.buffer;
      return (null === (TB = (0, by.e)(this, wp)[wp]) || void 0 === TB ? void 0 : TB.buffer) !== dB && ((0, by.e)(this, wp)[wp] = new Uint8Array(dB)), (0, by.e)(this, wp)[wp]
    }
    async function il(BB) {
      await this.deps.staleOr(BB, (() => {
        this.deps.failed(gp)
      }))
    }

    function Nl(BB) {
      const TB = (0, by.e)(this, Lp)[Lp],
        dB = (0, by.e)(this, Op)[Op];
      if (TB && dB) return (0, by.e)(this, np)[np]((() => BB(TB, dB)))
    }

    function tl(BB) {
      if (!(0, by.e)(this, Dp)[Dp]) try {
        return BB()
      } catch (TB) {
        if (!(0, by.e)(this, ep)[ep](TB)) throw TB;
        return
      }
    }

    function fl(BB) {
      return BB instanceof WebAssembly.RuntimeError && ((0, by.e)(this, Dp)[Dp] = !0, (0, by.e)(this, Lp)[Lp] = null, (0, by.e)(this, Op)[Op] = null, (0, by.e)(this, wp)[wp] = null, (0, by.e)(this, kp)[kp] = null, (0, by.e)(this, fp)[fp] = null, (0, by.e)(this, Rp)[Rp]("trapped"), this.deps.core.LpB(0), (0, by.e)(this, Up)[Up].stop(), this.deps.crash(this.deps.markTrapped(BB)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var sl = dB(37614);
    const Ml = new Map([
      ["skyblock", () => dB.e(45).then((() => dB(37605)))]
    ]);

    function zl(BB) {
      const TB = Ml.get(BB);
      return TB ? TB().then((() => {
        const TB = (0, sl.c)(BB);
        if (!TB) throw new Error(`${BB}'s replay hook module registered no hook`);
        return TB
      })) : null
    }
    class wl {
      constructor(BB) {
        this.deps = BB, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(BB) {
        if (this.pending.clear(), BB === this.game && null !== this.hook) return void(this.all = !0);
        const TB = ++this.generation;
        this.game = BB, this.hook = null, this.all = !1;
        const dB = this.deps.loadHook(BB);
        null === dB || void 0 === dB || dB.then((BB => {
          TB === this.generation && (this.hook = BB, this.all = !0)
        }), (BB => {
          TB === this.generation && this.deps.onError(BB)
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
          hook: TB
        } = this;
        if (null === TB || !BB || !this.all && 0 === this.pending.size) return;
        const dB = this.deps.cmd();
        if (null === dB) return;
        const {
          api: VB
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: BB,
            count: TB
          } = ad(VB, this.ids);
          this.ids = BB;
          for (let dB = 0; dB < TB; dB++) this.pending.set(BB[dB], !0)
        }
        const yB = this.ids = Zd(this.ids, this.pending.size);
        let pB = 0;
        for (const gB of this.pending.keys()) yB[pB++] = gB;
        const lB = [],
          JB = Xd(VB, yB, pB, ((BB, TB) => {
            null !== TB && lB.push({
              serverId: BB,
              info: TB,
              spawned: !0 === this.pending.get(BB)
            })
          }));
        if (JB) {
          this.pending.clear();
          for (const {
              serverId: BB,
              info: VB,
              spawned: yB
            }
            of lB) try {
            TB(VB, {
              setFacingTolerance: TB => {
                null === TB && yB || Jd(dB, BB, TB) || this.pending.set(BB, yB)
              }
            })
          } catch (YB) {
            this.deps.onError(YB)
          }
        }
      }
    }
    var Ul = (0, ny.d)("JD"),
      Fl = (0, ny.d)("module"),
      Kl = (0, ny.d)("memory"),
      rl = (0, ny.d)("trapped"),
      Il = (0, ny.d)("generation"),
      cl = (0, ny.d)("loading"),
      Sl = (0, ny.d)("lend"),
      Pl = (0, ny.d)("givenUp"),
      Ql = (0, ny.d)("afterSave"),
      Rl = (0, ny.d)("opens"),
      al = (0, ny.d)("saveAskedAt"),
      Zl = (0, ny.d)("unload"),
      Xl = (0, ny.d)("dropModule"),
      Wl = (0, ny.d)("loadFailed"),
      hl = (0, ny.d)("saveReadsBody"),
      Cl = (0, ny.d)("command"),
      Gl = (0, ny.d)("call"),
      ql = (0, ny.d)("guard"),
      xl = (0, ny.d)("trapOn");
    class jl {
      constructor(BB) {
        this.deps = BB, Object.defineProperty(this, xl, {
          value: VJ
        }), Object.defineProperty(this, ql, {
          value: dJ
        }), Object.defineProperty(this, Gl, {
          value: TJ
        }), Object.defineProperty(this, Cl, {
          value: BJ
        }), Object.defineProperty(this, hl, {
          get: el,
          set: void 0
        }), Object.defineProperty(this, Wl, {
          value: nl
        }), Object.defineProperty(this, Xl, {
          value: bl
        }), Object.defineProperty(this, Zl, {
          value: Al
        }), Object.defineProperty(this, Ul, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fl, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Kl, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rl, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Il, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, cl, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Sl, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pl, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ql, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Rl, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, al, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, by.e)(this, Fl)[Fl] && null === (0, by.e)(this, Ql)[Ql]
      }
      async open(BB) {
        if ((0, by.e)(this, rl)[rl]) return LB.Wc.ModuleTrap;
        let TB = (0, by.e)(this, Ul)[Ul];
        if (!TB) {
          const BB = (0, by.e)(this, Il)[Il];
          (0, by.e)(this, cl)[cl]++;
          try {
            TB = await this.deps.load()
          } catch (VB) {
            return (0, by.e)(this, cl)[cl]--, BB !== (0, by.e)(this, Il)[Il] ? "stopped" : (0, by.e)(this, Wl)[Wl](VB)
          }
          if ((0, by.e)(this, cl)[cl]--, BB !== (0, by.e)(this, Il)[Il]) return (0, by.e)(this, Ul)[Ul] || 0 !== (0, by.e)(this, cl)[cl] || (0, by.e)(this, rl)[rl] || this.deps.unload(), "stopped";
          if ((0, by.e)(this, rl)[rl]) return LB.Wc.ModuleTrap;
          const dB = TB.gpB(),
            yB = this.deps.core.opB();
          if (dB !== yB) return (0, by.e)(this, Wl)[Wl](new Error(`replay port version ${dB}, the core's ${yB}`));
          (0, by.e)(this, Ul)[Ul] = TB
        }
        if (!(0, by.e)(this, Fl)[Fl]) {
          const BB = TB;
          if (!(0, by.e)(this, ql)[ql]((() => {
              (0, by.e)(this, Fl)[Fl] = new BB.OpB, (0, by.e)(this, Kl)[Kl] = BB.DpB()
            }))) return LB.Wc.ModuleTrap
        }
        let dB = !1;
        return (0, by.e)(this, Gl)[Gl](((TB, VB) => {
          null !== (0, by.e)(this, Ql)[Ql] && TB.step(0, 0);
          const yB = TB.stage(BB.length);
          0 !== yB && (new Uint8Array(VB.buffer, yB, BB.length).set(BB), TB.open(), (0, by.e)(this, Pl)[Pl] = (0, by.e)(this, Sl)[Sl], (0, by.e)(this, Ql)[Ql] = null, (0, by.e)(this, Rl)[Rl]++, dB = !0)
        })) ? dB ? "opening" : LB.Wc.TooLarge : LB.Wc.ModuleTrap
      }
      beforeFrame(BB) {
        const TB = (0, by.e)(this, Fl)[Fl],
          dB = (0, by.e)(this, Kl)[Kl];
        if (!TB || !dB || null !== (0, by.e)(this, Ql)[Ql]) return;
        const {
          core: VB
        } = this.deps, yB = VB.upB(BB);
        if (yB < 0) return;
        const pB = Math.floor(yB);
        let lB, JB;
        try {
          lB = TB.step(pB, yB - pB), JB = TB.ppB()
        } catch (gB) {
          return void(0, by.e)(this, xl)[xl](gB)
        }
        const YB = VB.YpB(1, lB);
        if (0 === YB) {
          const BB = (0, by.e)(this, Gl)[Gl]((BB => {
            BB.close()
          }));
          if (!BB) return;
          return (0, by.e)(this, hl)[hl] ? (0, by.e)(this, Ql)[Ql] = "drop" : (0, by.e)(this, Xl)[Xl](), void VB.HpB(LB.Wc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), YB, lB).set(new Uint8Array(dB.buffer, JB, lB))
      }
      play() {
        (0, by.e)(this, Cl)[Cl]((BB => {
          BB.play()
        }))
      }
      pause() {
        (0, by.e)(this, Cl)[Cl]((BB => {
          BB.pause()
        }))
      }
      seek(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, by.e)(this, Cl)[Cl]((dB => {
          dB.seek(BB, TB)
        }))
      }
      setMark(BB, TB) {
        return (0, by.e)(this, Cl)[Cl]((dB => {
          dB.EpB(BB, TB)
        }))
      }
      addKeyframe(BB, TB) {
        return (0, by.e)(this, Cl)[Cl]((dB => {
          dB.mpB(BB[0], BB[1], BB[2], TB[0], TB[1], TB[2])
        }))
      }
      setKeyframe(BB, TB) {
        return (0, by.e)(this, Cl)[Cl]((dB => {
          dB.ipB(BB, TB)
        }))
      }
      moveKeyframe(BB, TB) {
        return (0, by.e)(this, Cl)[Cl]((dB => {
          dB.NpB(BB, TB)
        }))
      }
      deleteKeyframes(BB, TB) {
        return (0, by.e)(this, Cl)[Cl]((dB => {
          dB.tpB(BB, TB)
        }))
      }
      crop(BB, TB) {
        return null === (0, by.e)(this, Sl)[Sl] && (0, by.e)(this, Cl)[Cl]((dB => {
          dB.crop(BB, TB)
        }))
      }
      beginSave() {
        const BB = (0, by.e)(this, al)[al];
        if ((0, by.e)(this, al)[al] = null, null !== BB && BB !== (0, by.e)(this, Rl)[Rl]) return null;
        let TB = 0,
          dB = null;
        if ((0, by.e)(this, Gl)[Gl](((BB, VB) => {
            TB = BB.save(), 0 !== TB && (dB = new Uint8Array(VB.buffer, BB.fpB(), BB.spB()).slice())
          })), 0 === TB || !dB) return null;
        const VB = {
          headLen: TB,
          editState: dB,
          givenUp: () => (0, by.e)(this, Pl)[Pl] === VB,
          head: (BB, TB) => {
            if ((0, by.e)(this, Sl)[Sl] !== VB || !(0, by.e)(this, hl)[hl]) return null;
            let dB = null;
            return (0, by.e)(this, Gl)[Gl](((VB, yB) => {
              const pB = VB.MpB();
              0 !== pB && BB >= 0 && TB >= 0 && BB + TB <= pB && (dB = new Uint8Array(yB.buffer, VB.zpB() + BB, TB))
            })), dB
          },
          end: () => {
            if ((0, by.e)(this, Sl)[Sl] !== VB) return;
            (0, by.e)(this, Sl)[Sl] = null, (0, by.e)(this, Pl)[Pl] = null, (0, by.e)(this, Gl)[Gl]((BB => {
              BB.wpB()
            }));
            const BB = (0, by.e)(this, Ql)[Ql];
            (0, by.e)(this, Ql)[Ql] = null, "unload" === BB ? (0, by.e)(this, Zl)[Zl]() : "drop" === BB && (0, by.e)(this, Xl)[Xl]()
          }
        };
        return (0, by.e)(this, Sl)[Sl] = VB, VB
      }
      askSave() {
        (0, by.e)(this, al)[al] = (0, by.e)(this, Rl)[Rl]
      }
      setSpeed(BB) {
        (0, by.e)(this, Cl)[Cl]((TB => {
          TB.UpB(BB)
        }))
      }
      setCameraMode(BB) {
        (0, by.e)(this, Cl)[Cl]((TB => {
          TB.FpB(BB)
        }))
      }
      close() {
        (0, by.e)(this, Cl)[Cl]((BB => {
          BB.close()
        }))
      }
      stop() {
        (0, by.e)(this, Il)[Il]++, (0, by.e)(this, hl)[hl] && ((0, by.e)(this, Gl)[Gl]((BB => {
          BB.close()
        })), (0, by.e)(this, Fl)[Fl]) ? (0, by.e)(this, Ql)[Ql] = "unload" : (0, by.e)(this, Zl)[Zl]()
      }
    }

    function Al() {
      (0, by.e)(this, Xl)[Xl](), (0, by.e)(this, rl)[rl] || ((0, by.e)(this, Ul)[Ul] = null, this.deps.unload())
    }

    function bl() {
      (0, by.e)(this, Gl)[Gl]((BB => {
        BB.free()
      })), (0, by.e)(this, Fl)[Fl] = null, (0, by.e)(this, Kl)[Kl] = null
    }
    async function nl(BB) {
      return await this.deps.staleOr(BB, (() => {})) ? "reloading" : LB.Wc.ModuleLoad
    }

    function el() {
      return null !== (0, by.e)(this, Sl)[Sl] && (0, by.e)(this, Pl)[Pl] !== (0, by.e)(this, Sl)[Sl]
    }

    function BJ(BB) {
      return null === (0, by.e)(this, Ql)[Ql] && (0, by.e)(this, Gl)[Gl](BB)
    }

    function TJ(BB) {
      const TB = (0, by.e)(this, Fl)[Fl],
        dB = (0, by.e)(this, Kl)[Kl];
      return !(!TB || !dB) && (0, by.e)(this, ql)[ql]((() => {
        BB(TB, dB)
      }))
    }

    function dJ(BB) {
      if ((0, by.e)(this, rl)[rl]) return !1;
      try {
        return BB(), !0
      } catch (TB) {
        return (0, by.e)(this, xl)[xl](TB), !1
      }
    }

    function VJ(BB) {
      if (!(BB instanceof WebAssembly.RuntimeError)) throw BB;
      (0, by.e)(this, rl)[rl] = !0, (0, by.e)(this, Fl)[Fl] = null, (0, by.e)(this, Kl)[Kl] = null, (0, by.e)(this, Ul)[Ul] = null, this.deps.crash(this.deps.markTrapped(BB)), this.deps.core.HpB(LB.Wc.ModuleTrap)
    }
    var yJ = dB(5841),
      pJ = dB(39445);
    const lJ = "[bloxd-wasm-client]";
    const JJ = String(wy);

    function YJ(BB) {
      return null === BB || BB === JJ ? void 0 : BB
    }

    function gJ(BB) {
      var TB, dB, VB, yB, pB, JB, YB;
      switch (BB.what) {
        case LB.dd.FlyingText: {
          let TB;
          try {
            TB = JSON.parse(BB.contentJson)
          } catch (gB) {
            return void console.warn(`${lJ} a replay's flying text isn't JSON`, gB)
          }
          lB.h.yH("forceFlyingMiddleMessage", {
            content: TB,
            Nd: BB.Nd,
            angle: BB.angle,
            td: BB.td
          });
          break
        }
        case LB.dd.PlayerKilled:
          (0, pJ.h)({
            kind: "killed",
            body: {
              deadEId: null !== (TB = YJ(BB.dead)) && void 0 !== TB ? TB : "",
              killerEId: YJ(BB.killer),
              withItem: null !== (dB = BB.withItem) && void 0 !== dB ? dB : "",
              killstreak: BB.killstreak
            }
          });
          break;
        case LB.dd.Killfeed:
          (0, pJ.h)({
            kind: "custom",
            body: {
              killer: {
                eId: YJ(BB.killerId),
                name: null !== (VB = BB.killerName) && void 0 !== VB ? VB : void 0,
                colour: null !== (yB = BB.killerColour) && void 0 !== yB ? yB : void 0
              },
              victim: {
                eId: YJ(BB.victimId),
                name: null !== (pB = BB.victimName) && void 0 !== pB ? pB : void 0,
                colour: null !== (JB = BB.victimColour) && void 0 !== JB ? JB : void 0
              },
              withItem: null !== (YB = BB.withItem) && void 0 !== YB ? YB : ""
            }
          })
      }
    }
    const oJ = "[bloxd-wasm-client]";

    function kJ(BB) {
      if (void 0 === BB || null === BB || "" === BB) return null;
      const TB = Number(BB);
      return Number.isInteger(TB) && TB > wy && TB <= 2147483647 ? TB : null
    }

    function LJ(BB) {
      return {
        id: kJ(BB.eId),
        name: "string" === typeof BB.name ? BB.name : null,
        colour: "string" === typeof BB.colour ? BB.colour : null
      }
    }

    function OJ(BB) {
      const TB = (0, Ry.n)(xd.Jb.PlayerKilled, (TB => {
          var dB, VB;
          const yB = (0, Qy.h)(TB);
          if (!(0, Qy.e)(yB)) return;
          const {
            deadEId: pB,
            killerEId: lB,
            withItem: JB,
            killstreak: YB
          } = yB;
          BB.recordPlayerKilled(null !== (dB = kJ(pB)) && void 0 !== dB ? dB : wy, null !== (VB = kJ(lB)) && void 0 !== VB ? VB : wy, "number" === typeof YB ? YB : 0, "string" === typeof JB ? JB : "")
        })),
        dB = (0, Ry.n)(xd.Jb.CustomKillfeed, (TB => {
          const dB = (0, Qy.h)(TB);
          if (!(0, Qy.e)(dB) || !(0, Qy.e)(dB.killer) || !(0, Qy.e)(dB.victim)) return;
          const {
            killer: VB,
            victim: yB,
            withItem: pB
          } = dB;
          BB.recordKillfeed(LJ(VB), LJ(yB), "string" === typeof pB ? pB : null)
        }));
      return () => {
        TB(), dB()
      }
    }

    function DJ(BB) {
      var TB;
      return void 0 === BB || null === BB ? null : null !== (TB = JSON.stringify(BB)) && void 0 !== TB ? TB : null
    }

    function uJ(BB) {
      let TB = null;
      const dB = () => {
        const {
          enableClipping: dB,
          clipDurationSeconds: yB
        } = VB.d.get("clientEscMenuOptions"), pB = `${dB}:${yB}`;
        pB !== TB && (TB = pB, BB.recorder.setPrefs(dB, yB))
      };
      return dB(), (0, lB.i)("appManagerUpdated|clientEscMenuOptions", dB)
    }
    const HJ = "replayModule",
      EJ = "recorderModule";

    function vJ(BB, TB, dB) {
      return function() {
        return BB.isStopped ? dB : TB(...arguments)
      }
    }
    const mJ = {
      open: () => Promise.reject(new Error(vy.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function iJ() {
      return dB.e(57).then((() => dB(60027)))
    }

    function NJ(BB) {
      (0, vy.h)({
        text: BB,
        type: "Error"
      })
    }
    class tJ {
      constructor(BB) {
        this.deps = BB, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: TB,
          api: VB,
          core: yB
        } = BB, pB = () => BB.memory().buffer, lB = () => TB.isStopped ? null : TB.rings.cmd, JB = vJ(TB, ((BB, TB) => yB.YpB(BB, TB)), 0), YB = () => yB.opB();
        let gB = null;
        this.replay = new jl({
          core: {
            upB: vJ(TB, (BB => yB.upB(BB)), -1),
            YpB: JB,
            opB: YB,
            HpB: vJ(TB, (BB => {
              yB.HpB(BB)
            }), void 0)
          },
          coreBuffer: pB,
          load: async () => (gB = await dB.e(58).then((() => dB(60035))), gB.loadReplayModule()),
          unload: () => {
            var BB;
            null === (BB = gB) || void 0 === BB || BB.unloadReplayModule()
          },
          markTrapped: BB => gB ? gB.markReplayTrapped(BB) : new Error(String(BB)),
          staleOr: (TB, dB) => BB.staleOr(HJ, TB, dB),
          crash: TB => {
            BB.reportFault(HJ, TB)
          }
        });
        let oB = null;
        this.recorder = new Bl({
          core: {
            LpB: vJ(TB, (BB => yB.LpB(BB)), 0),
            VpB: vJ(TB, (BB => yB.VpB(BB)), 0),
            YpB: JB,
            opB: YB
          },
          coreCommand: (BB, TB) => {
            var dB, VB;
            return null !== (dB = null === (VB = lB()) || void 0 === VB ? void 0 : VB.writeCmd(BB, 0, TB)) && void 0 !== dB && dB
          },
          coreBuffer: pB,
          load: async () => (oB = await iJ(), oB.loadRecorderModule()),
          prefetch: () => {
            iJ().then((BB => BB.prefetchRecorderModule())).catch((BB => {
              console.warn(`${oJ} the recorder module didn't prefetch, so a save loads it:`, BB)
            }))
          },
          unload: () => {
            var BB;
            null === (BB = oB) || void 0 === BB || BB.unloadRecorderModule()
          },
          markTrapped: BB => oB ? oB.markRecorderTrapped(BB) : new Error(String(BB)),
          memoryBytes: () => {
            var BB, TB;
            return null !== (BB = null === (TB = oB) || void 0 === TB ? void 0 : TB.recorderMemoryBytes()) && void 0 !== BB ? BB : 0
          },
          staleOr: (TB, dB) => BB.staleOr(EJ, TB, dB),
          crash: TB => {
            BB.reportFault(EJ, TB)
          },
          allowed: () => !0 === BB.options.get("canRecordReplays"),
          failed: NJ,
          events: (BB, TB) => {
            this.runtime.recorderEvents(BB, TB)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: NJ,
          unixNow: () => Date.now()
        });
        const kB = new zy({
          core: {
            xyB: vJ(TB, (BB => yB.xyB(BB)), 0),
            AyB: vJ(TB, (() => {
              yB.AyB()
            }), void 0),
            NH: vJ(TB, (() => yB.NH()), 0),
            jyB: vJ(TB, (() => yB.jyB()), 0)
          },
          buffer: pB,
          apiView: () => VB.apiView,
          cmd: lB,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new wl({
          api: VB,
          cmd: lB,
          loadHook: zl,
          onError: BB => {
            console.warn(`${oJ} the recorded game's replay hooks:`, BB)
          }
        });
        const LB = new Py({
          client: kB,
          buffer: pB,
          setHoldDraws: BB => {
            TB.setHoldDraws(BB)
          },
          notify: vy.h,
          onRecorderState: () => {
            var BB;
            null === (BB = (0, iy.c)()) || void 0 === BB || BB.recorderChanged()
          },
          onViewerChange: () => {
            var BB;
            null === (BB = (0, iy.c)()) || void 0 === BB || BB.viewerChanged()
          },
          onReplayOption: TB => {
            ! function(BB, TB) {
              var dB, VB;
              const yB = xd.X[TB.key];
              if (void 0 === yB) return;
              let pB = null !== (dB = TB.value) && void 0 !== dB ? dB : JSON.parse(JSON.stringify(null !== (VB = yJ.b[yB]) && void 0 !== VB ? VB : null));
              if (null !== TB.value && TB.key < xd.pb.Environment && "string" === typeof pB) try {
                pB = JSON.parse(pB)
              } catch (lB) {
                return void console.warn(`${lJ} a replay's ${yB} isn't JSON`, lB)
              }
              BB.applyNewClientOptions({
                [yB]: pB
              })
            }(BB.options, TB)
          },
          onReplayUiEvent: gJ,
          onReplayOpened: TB => {
            this.entityHooks.opened((0, zB.Vb)(TB)), BB.replayShaderPack(TB)
          },
          meshPending: () => {
            var BB, dB;
            return null !== (BB = null === (dB = TB.lastHeader) || void 0 === dB ? void 0 : dB.renderPending) && void 0 !== BB ? BB : 0
          },
          viewerOpen: my.d,
          download: BB => {
            (0, Hy.i)(BB)
          }
        });
        this.runtime = LB, VB.replay = LB.sink, (0, iy.o)(LB);
        const OB = new Xy({
          live: () => {
            var BB;
            return !TB.isStopped && !0 === (null === (BB = LB.currentViewer) || void 0 === BB ? void 0 : BB.inPlayback)
          },
          cmd: lB,
          dragScale: jy
        });
        this.freecam = OB, (0, iy.l)(OB), this.recordedOptions = function(BB, TB) {
          const dB = xd.X,
            VB = dB.map(((dB, VB) => TB.subscribe(dB, (TB => {
              BB.setOption(VB, DJ(TB))
            }))));
          return {
            sendAll() {
              dB.forEach(((dB, VB) => {
                BB.setOption(VB, DJ(TB.get(dB)))
              }))
            },
            stop() {
              for (const BB of VB) BB()
            }
          }
        }(LB.recorder, BB.options), this.stops = [(0, yV.p)((BB => {
          OB.flush();
          try {
            this.replay.beforeFrame(BB)
          } catch (TB) {
            this.deps.reportFault("replayFrame", TB)
          }
        })), (0, yV.A)(((BB, TB) => {
          try {
            this.recorder.afterFrame(), TB && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (dB) {
            this.deps.reportFault("recorderFrame", dB)
          }
          try {
            LB.afterFrame(BB)
          } catch (dB) {
            this.deps.reportFault("replayRuntime", dB)
          }
        })), uJ(LB), () => {
          this.recordedOptions.stop()
        }, OJ(LB.recorder), (0, ay.f)((BB => {
          let {
            action: TB,
            down: dB
          } = BB;
          var VB;
          dB && (null === (VB = (0, iy.c)()) || void 0 === VB || VB.keyDown(TB))
        }))];
        const DB = () => {
          const BB = LB.currentViewer;
          return !0 === (null === BB || void 0 === BB ? void 0 : BB.isOpen) ? BB : null
        };
        (0, Ey.f)({
          open: (BB, TB) => this.open(BB, TB),
          replayKey: () => {
            var BB, TB;
            return null !== (BB = null === (TB = DB()) || void 0 === TB ? void 0 : TB.id) && void 0 !== BB ? BB : null
          },
          saveRefusal: () => {
            var BB, TB;
            return null !== (BB = null === (TB = DB()) || void 0 === TB ? void 0 : TB.saveRefusal) && void 0 !== BB ? BB : null
          },
          encode: () => {
            var BB, TB;
            return null !== (BB = null === (TB = DB()) || void 0 === TB ? void 0 : TB.save()) && void 0 !== BB ? BB : Promise.resolve(null)
          },
          fileHandle: () => {
            var BB, TB;
            return null !== (BB = null === (TB = LB.currentViewer) || void 0 === TB ? void 0 : TB.fileHandle) && void 0 !== BB ? BB : null
          },
          markSaved: (BB, TB) => {
            var dB;
            null === (dB = LB.currentViewer) || void 0 === dB || dB.markSaved(BB, TB)
          }
        })
      }
      netEvent(BB) {
        if ("connection" === BB.type)
          if (BB.phase === LB.v.Activated) {
            this.activeConn = BB.conn;
            const TB = this.deps.sessionInfo(BB.conn);
            null !== TB && (this.runtime.activated({
              lobbyType: (0, wB.C)(TB.lobbyName),
              gameNameWithVariation: TB.gameNameWithVariation,
              lobbyName: TB.lobbyName
            }), this.recordedOptions.sendAll())
          } else BB.phase !== LB.v.Left && BB.phase !== LB.v.Closed || BB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const BB of this.stops) BB();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, iy.f)() === this.runtime && (0, iy.o)(null), (0, iy.e)() === this.freecam && (0, iy.l)(null), (0, Ey.f)(mJ), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(BB, TB) {
        const {
          running: dB
        } = this.deps;
        if (dB.isStopped) throw new Error(vy.d.coreStopped.text);
        if (BB.byteLength > 67108864) throw new Error(vy.d.cantOpen.text);
        let VB;
        try {
          VB = await async function(BB) {
            const TB = await BB.loadViewer();
            return TB.inPlayback || (0, yV.N)().leaveGame(null), TB
          }(this.runtime)
        } catch (yB) {
          throw console.warn(`${oJ} the replay viewer didn't load`, yB), new Error(vy.d.viewerLoadFailed.text)
        }
        if (dB.isStopped) throw new Error(vy.d.coreStopped.text);
        await VB.open(BB, TB)
      }
    }
    var fJ = dB(1708);

    function sJ(BB, TB) {
      const {
        aux: dB,
        payload: VB
      } = function(BB) {
        return {
          aux: BB.reset ? LB.Wb.ResetFirst : 0,
          payload: zJ(BB.changes)
        }
      }(TB);
      BB.queueOptions(dB, VB) && (TB.reset && fJ.c.reset(), fJ.c.apply(TB.changes))
    }
    const MJ = new TextEncoder;

    function zJ(BB) {
      const TB = new wJ;
      return FJ(TB, BB), TB.bytes()
    }
    class wJ {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(BB) {
        if (this.len + BB <= this.buf.length) return;
        const TB = new Uint8Array(Math.max(2 * this.buf.length, this.len + BB));
        TB.set(this.buf.subarray(0, this.len)), this.buf = TB, this.view = new DataView(TB.buffer)
      }
      u8(BB) {
        this.room(1), this.buf[this.len++] = BB
      }
      tagged(BB, TB, dB) {
        this.room(1 + TB), this.buf[this.len++] = BB, 1 === TB ? this.view.setUint8(this.len, dB) : 2 === TB ? this.view.setUint16(this.len, dB) : this.view.setUint32(this.len, dB), this.len += TB
      }
      signed(BB, TB, dB) {
        this.room(1 + TB), this.buf[this.len++] = BB, 1 === TB ? this.view.setInt8(this.len, dB) : 2 === TB ? this.view.setInt16(this.len, dB) : this.view.setInt32(this.len, dB), this.len += TB
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

    function UJ(BB, TB, dB, VB, yB, pB, lB) {
      TB < VB ? BB.u8(dB | TB) : null !== yB && TB < 256 ? BB.tagged(yB, 1, TB) : TB < 65536 ? BB.tagged(pB, 2, TB) : BB.tagged(lB, 4, TB)
    }

    function FJ(BB, TB) {
      switch (typeof TB) {
        case "undefined":
          return void BB.raw(KJ);
        case "boolean":
          return void BB.u8(TB ? 195 : 194);
        case "number":
          return void
          function(BB, TB) {
            TB >>> 0 === TB ? TB < 128 ? BB.u8(TB) : TB < 256 ? BB.tagged(204, 1, TB) : TB < 65536 ? BB.tagged(205, 2, TB) : BB.tagged(206, 4, TB) : (TB | 0) === TB ? TB >= -32 ? BB.u8(255 & TB) : TB >= -128 ? BB.signed(208, 1, TB) : TB >= -32768 ? BB.signed(209, 2, TB) : BB.signed(210, 4, TB) : BB.f64(TB)
          }(BB, TB);
        case "string": {
          const dB = MJ.encode(TB);
          return UJ(BB, dB.length, 160, 32, 217, 218, 219), void BB.raw(dB)
        }
        case "object":
          break;
        default:
          return void BB.u8(192)
      }
      if (null === TB) BB.u8(192);
      else if (Array.isArray(TB)) {
        UJ(BB, TB.length, 144, 16, null, 220, 221);
        for (const dB of TB) FJ(BB, dB)
      } else if (TB instanceof Uint8Array) UJ(BB, TB.length, 0, 0, 196, 197, 198), BB.raw(TB);
      else {
        const dB = Object.keys(TB);
        UJ(BB, dB.length, 128, 0, null, 222, 223);
        for (const VB of dB) FJ(BB, VB), FJ(BB, TB[VB])
      }
    }
    const KJ = new Uint8Array([212, 0, 0]);
    var rJ = dB(41278),
      IJ = dB(41287),
      cJ = dB(39753),
      SJ = dB(39779),
      PJ = dB(3216);
    const QJ = [1e3, 3e3, 9e3];
    class RJ {
      constructor(BB) {
        this.host = BB, this.sets = new Map, this.table = [], this.generation = 0, this.ND = !1
      }
      onEvent(BB) {
        const TB = function(BB) {
          if (BB.byteLength !== LB.nd) return null;
          const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
          return {
            want: TB.getUint16(0, !0),
            release: TB.getUint16(2, !0)
          }
        }(BB);
        TB && !this.ND && (TB.release !== LB.od && this.release(TB.release), TB.want !== LB.od && this.want(TB.want))
      }
      reset(BB) {
        if (!this.ND) {
          for (const [BB, TB] of this.sets) "ready" === TB.state && this.releaseAll(TB.distinct), this.sets.delete(BB);
          this.table = BB, this.generation++
        }
      }
      dispose() {
        if (this.ND) return;
        this.ND = !0, this.generation++, this.table = [];
        const BB = [...this.sets.values()];
        this.sets.clear();
        let TB = null;
        for (const VB of BB)
          for (const BB of "ready" === VB.state ? VB.distinct : []) try {
            this.host.uVB(BB)
          } catch (dB) {
            TB ??= {
              error: dB
            }
          }
        if (TB) throw TB.error
      }
      isReady(BB) {
        var TB;
        return "ready" === (null === (TB = this.sets.get(BB)) || void 0 === TB ? void 0 : TB.state)
      }
      want(BB) {
        const TB = this.sets.get(BB);
        if ("loading" === (null === TB || void 0 === TB ? void 0 : TB.state)) return TB.wanted = !0, void this.capAnswer(BB, TB);
        if ("ready" === (null === TB || void 0 === TB ? void 0 : TB.state)) return void this.host.sendReady(ZJ(BB, TB.images, TB.size));
        const dB = this.table[BB];
        if (!dB || 1 !== dB.urls.length && dB.urls.length !== xd.Db.CubeFaces) return this.host.sendReady(XJ(BB)), void this.host.onLoadFailed(BB, "", new Error(`no image set ${BB}`));
        const VB = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(BB, VB), this.load(BB, dB, VB, this.generation, 0), this.capAnswer(BB, VB)
      }
      capAnswer(BB, TB) {
        this.host.wait(4e3, (() => {
          this.sets.get(BB) === TB && TB.wanted && this.host.sendReady(XJ(BB))
        }))
      }
      load(BB, TB, dB, VB, yB) {
        const pB = [...new Set(TB.urls)];
        Promise.allSettled(pB.map((BB => this.host.loadImage(BB, TB.orientation)))).then((lB => {
          const JB = lB.flatMap((BB => "fulfilled" === BB.status ? [BB.value] : [])),
            YB = VB === this.generation && this.sets.get(BB) === dB,
            gB = lB.findIndex((BB => "rejected" === BB.status));
          if (!YB || !dB.wanted) return this.ND ? void this.releaseAfterDispose(JB.map(aJ)) : (this.releaseAll(JB.map(aJ)), void(YB && this.sets.delete(BB)));
          gB < 0 ? this.loaded(BB, TB, pB, JB) : (this.releaseAll(JB.map(aJ)), this.host.sendReady(XJ(BB)), yB < QJ.length ? this.host.wait(QJ[yB], (() => {
            VB === this.generation && this.sets.get(BB) === dB && (dB.wanted ? this.load(BB, TB, dB, VB, yB + 1) : this.sets.delete(BB))
          })) : (this.sets.delete(BB), this.host.onLoadFailed(BB, pB[gB], lB[gB].reason)))
        }))
      }
      loaded(BB, TB, dB, VB) {
        const [yB] = VB, pB = [yB.width, yB.height], lB = VB.every((BB => BB.width === pB[0] && BB.height === pB[1])), JB = TB.urls.length === xd.Db.CubeFaces;
        if (!lB || pB[0] <= 0 || pB[1] <= 0 || pB[0] > 65535 || pB[1] > 65535 || JB && pB[0] !== pB[1]) {
          this.releaseAll(VB.map(aJ)), this.sets.delete(BB), this.host.sendReady(XJ(BB));
          const dB = VB.map((BB => `${BB.width}x${BB.height}`));
          return void this.host.onLoadFailed(BB, TB.urls[0], new Error(`set ${BB}'s images can't make its texture: ${dB.join(", ")}`))
        }
        const YB = TB.urls.map((BB => VB[dB.indexOf(BB)].id)),
          gB = VB.map(aJ);
        this.sets.set(BB, {
          state: "ready",
          images: YB,
          distinct: gB,
          size: pB
        }), this.host.sendReady(ZJ(BB, YB, pB))
      }
      release(BB) {
        const TB = this.sets.get(BB);
        "loading" === (null === TB || void 0 === TB ? void 0 : TB.state) ? TB.wanted = !1: "ready" === (null === TB || void 0 === TB ? void 0 : TB.state) && (this.releaseAll(TB.distinct), this.sets.delete(BB))
      }
      releaseAll(BB) {
        for (const TB of BB) this.host.uVB(TB)
      }
      releaseAfterDispose(BB) {
        for (const TB of BB) try {
          this.host.uVB(TB)
        } catch {}
      }
    }

    function aJ(BB) {
      return BB.id
    }

    function ZJ(BB, TB, dB) {
      const VB = new Uint8Array(xd.Db.SkyImagesReadyBytes),
        yB = new DataView(VB.buffer);
      return yB.setUint16(0, BB, !0), yB.setUint16(2, TB.length, !0), yB.setUint16(4, dB[0], !0), yB.setUint16(6, dB[1], !0), TB.slice(0, xd.Db.CubeFaces).forEach(((BB, TB) => {
        yB.setUint32(8 + 4 * TB, BB, !0)
      })), VB
    }

    function XJ(BB) {
      const TB = new Uint8Array(xd.Db.SkyImagesReadyBytes),
        dB = new DataView(TB.buffer);
      return dB.setUint16(0, BB, !0), dB.setUint16(2, xd.Db.Failed, !0), TB
    }
    let WJ = Promise.resolve();
    async function hJ(BB, TB) {
      let dB;
      try {
        dB = await (0, PJ.K)(BB)
      } catch (pB) {
        throw new cJ.c("fetch", BB, {
          cause: pB
        })
      }
      const VB = WJ.then((() => async function(BB, TB) {
        const dB = new Blob([BB.slice()]);
        let VB = await createImageBitmap(dB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: TB
        });
        const yB = 1024 / Math.max(VB.width, VB.height);
        if (yB < 1) {
          const BB = VB;
          try {
            VB = await createImageBitmap(BB, {
              resizeWidth: Math.max(1, Math.round(BB.width * yB)),
              resizeHeight: Math.max(1, Math.round(BB.height * yB)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            BB.close()
          }
        }
        return VB
      }(dB, TB)));
      let yB;
      WJ = VB.catch((() => {}));
      try {
        yB = await VB
      } catch (pB) {
        throw new cJ.c("decode", BB, {
          cause: pB
        })
      }
      return {
        id: (0, cJ.o)(yB),
        width: yB.width,
        height: yB.height
      }
    }
    var CJ = dB(2626),
      GJ = dB(33435);
    const qJ = CJ.h.length;

    function xJ(BB) {
      const TB = [],
        dB = [];
      CJ.h.forEach(((VB, yB) => {
        var pB;
        const lB = null !== (pB = jJ(BB[VB])) && void 0 !== pB ? pB : GJ.n[VB];
        "custom" === lB.type ? (dB.push({
          id: yB,
          kind: xd.Db.KindCustom,
          set: TB.length,
          earth: null
        }), TB.push({
          urls: [lB.px, lB.py, lB.pz, lB.nx, lB.ny, lB.nz],
          orientation: "none"
        })) : dB.push({
          id: yB,
          kind: xd.Db.KindEarth,
          set: 0,
          earth: lB
        })
      }));
      const VB = jJ(BB.earth);
      "earth" === (null === VB || void 0 === VB ? void 0 : VB.type) && dB.push({
        id: qJ,
        kind: xd.Db.KindEarth,
        set: 0,
        earth: VB
      });
      const yB = TB.length;
      TB.push({
        urls: GJ.f.map((BB => GJ.h + BB)),
        orientation: "none"
      }), TB.push({
        urls: [GJ.l],
        orientation: "flipY"
      }), TB.push({
        urls: [GJ.e],
        orientation: "flipY"
      });
      const pB = new Uint8Array(xd.Db.SkyTableHeaderBytes + dB.length * xd.Db.SkyTableEntryBytes),
        lB = new DataView(pB.buffer);
      return lB.setUint16(0, yB, !0), lB.setUint16(2, yB + 1, !0), lB.setUint16(4, yB + 2, !0), lB.setUint16(6, dB.length, !0), dB.forEach(((BB, TB) => {
        const dB = xd.Db.SkyTableHeaderBytes + TB * xd.Db.SkyTableEntryBytes;
        lB.setUint16(dB, BB.id, !0), lB.setUint8(dB + 2, BB.kind);
        const VB = dB + 4;
        BB.earth ? function(BB, TB, dB) {
          const VB = BB;
          let yB = 0,
            pB = 0;
          for (const [lB, JB] of AJ) {
            const BB = VB[lB];
            "number" === typeof BB && Number.isFinite(BB) && (TB.setFloat32(dB + 4 * JB, BB, !0), yB |= 1 << JB)
          }
          for (const [lB, JB, YB] of bJ) {
            const BB = VB[lB];
            Array.isArray(BB) && 3 === BB.length && BB.every((BB => "number" === typeof BB && Number.isFinite(BB))) && (BB.forEach(((BB, VB) => {
              TB.setFloat32(dB + YB + 4 * VB, BB, !0)
            })), yB |= JB)
          }
          nJ.forEach(((BB, pB) => {
            let [lB, JB] = BB;
            const YB = VB[lB];
            "number" === typeof YB && Number.isFinite(YB) && (TB.setFloat32(dB + xd.i.CameraOffsetAt + 4 * pB, YB, !0), yB |= JB)
          }));
          for (const [lB, JB] of eJ) {
            const BB = VB[lB];
            null !== BB && void 0 !== BB && (yB |= JB, BB && (pB |= JB >>> 14))
          }
          TB.setUint32(dB + xd.i.PresentAt, yB, !0), TB.setUint8(dB + xd.i.FlagsAt, pB)
        }(BB.earth, lB, VB) : lB.setUint16(VB, BB.set, !0)
      })), {
        payload: pB,
        sets: TB
      }
    }

    function jJ(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const TB = BB;
      if ("earth" === TB.type) return BB;
      return "custom" === TB.type && ["px", "py", "pz", "nx", "ny", "nz"].every((BB => {
        const dB = TB[BB];
        return "string" === typeof dB && dB.length > 0
      })) ? BB : null
    }
    const AJ = [
        ["inclination", xd.i.Inclination],
        ["turbidity", xd.i.Turbidity],
        ["luminance", xd.i.Luminance],
        ["rayleigh", xd.i.Rayleigh],
        ["mieCoefficient", xd.i.MieCoefficient],
        ["mieDirectionalG", xd.i.MieDirectionalG],
        ["distance", xd.i.Distance],
        ["azimuth", xd.i.Azimuth]
      ],
      bJ = [
        ["sunPosition", xd.i.SunPosition, xd.i.SunPositionAt],
        ["up", xd.i.Up, xd.i.UpAt],
        ["vertexTint", xd.i.VertexTint, xd.i.VertexTintAt]
      ],
      nJ = [
        ["xCameraOffset", xd.i.CameraOffsetX],
        ["yCameraOffset", xd.i.CameraOffsetY],
        ["zCameraOffset", xd.i.CameraOffsetZ]
      ],
      eJ = [
        ["useSunPosition", xd.i.UseSunPosition],
        ["dithering", xd.i.Dithering],
        ["infiniteDistance", xd.i.InfiniteDistance]
      ];

    function BY(BB, TB, dB) {
      const VB = new dY({
        writeCmd: BB,
        warn: TB,
        followPack: TY(dB, TB)
      });
      return VB.start(), VB
    }

    function TY(BB, TB) {
      return dB => {
        let VB = () => {};
        const yB = BB((BB => {
          VB(), VB = () => {}, null !== BB ? VB = BB.subscribe((BB => {
            dB(function(BB, TB, dB) {
              if ("object" !== typeof BB || null === BB) return null;
              const VB = BB.skyBoxes;
              if ("object" !== typeof VB || null === VB) return null;
              if ("player" === TB) return VB;
              return Object.fromEntries(Object.entries(VB).filter((BB => {
                let [TB, VB] = BB;
                return !! function(BB) {
                  if ("object" !== typeof BB || null === BB) return !1;
                  return "earth" === BB.type || Object.entries(BB).every((BB => {
                    let [TB, dB] = BB;
                    return "type" === TB || ("" === (VB = dB) || null !== function(BB) {
                      var TB, dB, VB;
                      return "string" !== typeof BB ? null : null !== (TB = null === (dB = VY.exec(BB)) || void 0 === dB || null === (VB = dB.groups) || void 0 === VB ? void 0 : VB.base64) && void 0 !== TB ? TB : null
                    }(VB));
                    var VB
                  }))
                }(VB) || (dB(`Ignoring texture pack skybox ${TB}, whose faces are not all data URLs`, null), !1)
              })))
            }(BB.pack, null === BB.gameSource ? "player" : "customGame", TB))
          })) : dB(null)
        }));
        return () => {
          yB(), VB()
        }
      }
    }
    class dY {
      constructor(BB) {
        var TB, dB, VB;
        this.host = BB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.ND = !1, this.wait = null !== (TB = BB.wait) && void 0 !== TB ? TB : (BB, TB) => {
          setTimeout(TB, BB)
        }, this.loader = new RJ({
          loadImage: null !== (dB = BB.loadImage) && void 0 !== dB ? dB : hJ,
          uVB: null !== (VB = BB.uVB) && void 0 !== VB ? VB : cJ.q,
          sendReady: BB => {
            this.queue.push({
              kind: xd.Db.SkyImagesReady,
              payload: BB
            })
          },
          onLoadFailed: (TB, dB, VB) => {
            BB.warn(`sky image set ${TB} (${dB}) didn't load: the last sky stays`, VB)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(SJ.b, (() => {
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
        this.ND = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(BB) {
        if (this.ND) return;
        const TB = xJ(BB);
        var dB, VB;
        this.written && (dB = this.written, VB = TB, dB.payload.length === VB.payload.length && dB.payload.every(((BB, TB) => BB === VB.payload[TB])) && dB.sets.length === VB.sets.length && dB.sets.every(((BB, TB) => {
          const dB = VB.sets[TB];
          return BB.orientation === dB.orientation && BB.urls.length === dB.urls.length && BB.urls.every(((BB, TB) => BB === dB.urls[TB]))
        }))) || (this.written = TB, this.loader.reset(TB.sets), this.queue = this.queue.filter((BB => BB.kind !== xd.Db.SkyImagesReady)), this.queue.push({
          kind: xd.Db.SkyTable,
          payload: TB.payload
        }))
      }
    }
    const VY = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var yY = dB(2431),
      pY = dB(2482),
      lY = dB(130),
      JY = dB(178),
      YY = dB(2440),
      gY = dB(2446),
      oY = dB(244),
      kY = dB(252),
      LY = dB(2450),
      OY = dB(2467),
      DY = dB(105),
      uY = dB(256),
      HY = dB(39531);
    class EY {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Ry.n)(mV.M, (BB => {
          this.onReply((0, Qy.f)(mV.M, BB), performance.now())
        }))
      }
      onFrame(BB, TB) {
        null === this.id ? this.id = BB : BB !== this.id && (this.id = BB, this.sentMs = document.hidden ? null : TB)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(BB, TB) {
        BB === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(TB - this.sentMs), this.sentMs = null)
      }
      take() {
        const BB = this.roundTripMs;
        return this.roundTripMs = null, BB
      }
      stop() {
        this.stopReplies()
      }
    }
    class vY {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(BB, TB, dB, VB) {
        const yB = BB - this.sampled >>> 0,
          pB = TB - this.timed >>> 0,
          lB = dB - this.frameUs >>> 0,
          JB = this.primed;
        return this.sampled = BB, this.timed = TB, this.frameUs = dB, this.primed = !0, !(!JB || yB > 64 || pB > 64) && (VB && lB <= 1e6 * pB && (this.windowTimed += pB, this.windowUs += lB), VB && yB > 0)
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
    const mY = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class iY {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(BB, TB) {
        const dB = Math.min(4096, this.count + TB);
        this.samples.fill(BB, this.count, dB), this.count = dB
      }
      clear() {
        this.count = 0
      }
      take(BB) {
        const TB = this.count;
        if (this.count = 0, TB < 30) return null;
        const dB = this.samples.subarray(0, TB).sort();
        return BB.map((BB => dB[Math.min(TB - 1, Math.floor(BB * TB))]))
      }
    }
    class NY {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new iY, this.inJoin = !1, this.rose = !1, this.joinLags = new iY, this.joinLagP90Ms = null
      }
      onFrame(BB, TB, dB, VB, yB) {
        const pB = BB.headerWord(xd.A.Pacing),
          lB = BB.headerWord(xd.A.PacingLagUs),
          JB = (pB >>> xd.L.LagsShift) - (this.word >>> xd.L.LagsShift) & xd.L.CountMask,
          YB = (pB >>> xd.L.SwitchesShift) - (this.word >>> xd.L.SwitchesShift) & xd.L.CountMask,
          gB = JB > 0 ? (lB - this.lagUs >>> 0) / JB / 1e3 : 0,
          oB = this.primed && JB <= 64 && YB <= 2 && gB <= 6e4;
        if (this.rose = 0 !== (pB & ~this.word & xd.L.Joining), this.word = pB, this.lagUs = lB, this.primed = !0, 0 !== (pB & xd.L.Tiered)) {
          if (0 !== (pB & xd.L.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && oB && VB && JB > 0 && this.joinLags.add(gB, JB);
          else if (this.inJoin) {
            var kB, LB;
            this.inJoin = !1, this.joinLagP90Ms = null !== (kB = null === (LB = this.joinLags.take([.9])) || void 0 === LB ? void 0 : LB[0]) && void 0 !== kB ? kB : null
          }
          if (yB) {
            if (oB && (this.switches += YB, JB > 0 && this.lags.add(gB, JB)), dB) {
              if (this.lastDrawnMs >= 0 && TB - this.lastDrawnMs <= 250) {
                const BB = TB - this.lastDrawnMs;
                this.tieredMs += BB, (pB & xd.L.AheadMask) > 0 && (this.pacedMs += BB)
              }
              this.lastDrawnMs = TB
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(BB) {
        const TB = this.takeWindow(),
          dB = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, BB ? {
          ...TB,
          joinLagP90Ms: dB
        } : {
          ...mY,
          joinLagP90Ms: dB
        }
      }
      unsent(BB) {
        this.joinLagP90Ms ??= BB.joinLagP90Ms
      }
      takeWindow() {
        var BB, TB;
        const dB = this.tieredMs >= 2e3,
          VB = this.lags.take([.5, .9]),
          yB = {
            pacedShare: dB ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: dB ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (BB = null === VB || void 0 === VB ? void 0 : VB[0]) && void 0 !== BB ? BB : null,
            lagP90Ms: null !== (TB = null === VB || void 0 === VB ? void 0 : VB[1]) && void 0 !== TB ? TB : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, yB
      }
    }
    var tY = dB(8554),
      fY = dB(2409),
      sY = dB(39740),
      MY = dB(8552);
    const zY = {
      none: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
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

    function wY(BB) {
      return new UY(BB)
    }
    class UY {
      constructor(BB) {
        this.shell = BB, this.tracker = new gY.d, this.gpu = new vY, this.pacing = new NY, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new EY, this.pacedCpuMs = 0, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, tY.d)(BB.backend, BB.canvas, BB.adapterVendor), this.tracker.start((() => !BB.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(BB) {
        this.tracker.onAnimationFrame(BB)
      }
      frameRan(BB, TB, dB, VB) {
        this.ping.onFrame(BB.headerWord(xd.A.PingSent), dB);
        const yB = this.tracker;
        this.pacing.onFrame(BB, TB, "drawn" === VB, !document.hidden, yB.isSampling());
        const pB = BB.headerWord(xd.A.TickUs) / 1e3 + (0, yV.P)();
        yB.WE(pB);
        const lB = Math.max(0, dB - TB - pB);
        if ("drawn" !== VB) return void("paced" === VB && (this.pacedCpuMs += lB));
        this.followGame(), yB.onFrameStart(TB);
        this.gpu.onFrame(BB.headerWord(xd.A.GpuSampled), BB.headerWord(xd.A.GpuTimed), BB.headerWord(xd.A.GpuFrameUs), yB.isSampling()) && yB.onGpuSampleStarted(), yB.onFrameCpu(lB + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(TB)
      }
      stop() {
        for (const BB of this.timers) clearInterval(BB);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const BB = this.shell.joinedGame();
        return BB !== this.game && (this.game = BB, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== BB
      }
      countFpsFrame(BB) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = BB
        }
        this.fpsFrames++;
        const TB = BB - this.fpsSpanStartMs;
        if (!(TB < 15e3)) {
          if (!document.hidden) {
            const BB = 1e3 * this.fpsFrames / TB;
            this.firstSpanFps ??= BB, this.initialFps = this.firstSpanFps, this.fpsOverTime = BB
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = BB
        }
      }
      flush() {
        const BB = this.followGame(),
          {
            cpuFrameMs: TB,
            refreshHz: dB,
            cpuBottleneck: yB,
            frameIntervalCv: pB,
            ...lB
          } = this.tracker.snapshotAndReset(),
          JB = this.shell.inGame(),
          YB = JB && this.inGameAtLastFlush,
          gB = YB ? lB : YY.g,
          oB = this.pacing.snapshotAndReset(YB);
        if (this.inGameAtLastFlush = JB, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !BB) return void this.pacing.unsent(oB);
        const kB = performance.now(),
          OB = (0, OY.r)((0, OY.n)(kB), this.unsentPage),
          uB = function(BB, TB, dB, yB, pB, lB, JB, YB) {
            var gB, oB, kB;
            const LB = {},
              {
                canvas: OB
              } = BB,
              DB = (0, LY.c)({
                refreshHz: TB.refreshHz,
                msaa: BB.msaa(),
                autoMsaaOff: (0, MY.c)()
              });
            for (const uB of (0, pY.e)()) {
              const HB = uB.name;
              let EB;
              if ((0, lY.h)(HB)) EB = (0, OY.c)(HB);
              else if ((0, OY.g)(HB)) EB = YB[HB];
              else if ((0, LY.f)(HB)) EB = DB[HB];
              else switch (HB) {
                case "fps":
                  EB = yB;
                  break;
                case "Al":
                  EB = pB;
                  break;
                case "dJ":
                  EB = (0, fY.y)((0, sY.f)().n);
                  break;
                case "VJ":
                  EB = Math.max(OB.width, OB.height);
                  break;
                case "yJ":
                  EB = Math.min(OB.width, OB.height);
                  break;
                case "pJ":
                  EB = navigator.hardwareConcurrency || null;
                  break;
                case "lJ":
                  EB = (0, Gy.getWebGpuSupported)();
                  break;
                case "JJ":
                  EB = null === BB.fallbackReason ? null : zY[BB.fallbackReason];
                  break;
                case "YJ":
                  EB = TB.cpuFrameMs;
                  break;
                case "gJ":
                  EB = TB.refreshHz;
                  break;
                case "oJ":
                  EB = TB.cpuBottleneck;
                  break;
                case "kJ":
                  EB = TB.frameIntervalCv;
                  break;
                case "LJ":
                  EB = TB.frameMs;
                  break;
                case "OJ":
                  EB = TB.tickMs;
                  break;
                case "EJ":
                  EB = TB.mainBusyShare;
                  break;
                case "vJ":
                  EB = TB.mainProbeDelayMs;
                  break;
                case "DJ":
                  EB = TB.longAnimationFramesPerMin;
                  break;
                case "uJ":
                  EB = TB.longAnimationFrameTimeShare;
                  break;
                case "HJ":
                  EB = TB.longAnimationFrameScriptShare;
                  break;
                case "mJ":
                  EB = TB.gpuPassMs;
                  break;
                case "iJ":
                  EB = TB.gpuSubmitToDoneMs;
                  break;
                case "NJ":
                  EB = dB.pacedShare;
                  break;
                case "tJ":
                  EB = dB.switchesPerHour;
                  break;
                case "fJ":
                  EB = dB.lagP50Ms;
                  break;
                case "sJ":
                  EB = dB.lagP90Ms;
                  break;
                case "MJ":
                  EB = dB.joinLagP90Ms;
                  break;
                case "RJ":
                  EB = (0, yY.h)(lB);
                  break;
                case "TJ":
                  EB = JB;
                  break;
                case "zJ":
                case "wJ":
                case "UJ":
                case "FJ":
                case "KJ":
                case "rJ":
                case "IJ":
                case "cJ":
                case "SJ":
                case "PJ":
                case "QJ":
                case "aJ":
                case "ZJ":
                case "XJ":
                case "WJ":
                  EB = null;
                  break;
                case "dY":
                  EB = (0, Gy.getPlatformType)();
                  break;
                case "VY":
                  EB = (0, Gy.getGpuVendor)();
                  break;
                case "yY":
                  EB = HY.b[BB.backend];
                  break;
                case "pY":
                  EB = (0, DY.e)();
                  break;
                case "lY":
                  EB = (0, Gy.getOperatingSystem)();
                  break;
                case "JY":
                  EB = (0, Gy.getTrafficSource)();
                  break;
                case "YY":
                  EB = null !== (gB = VB.d.get("gameEntrySource")) && void 0 !== gB ? gB : JY.h;
                  break;
                case "gY":
                  EB = TB.frameLimiter;
                  break;
                case "oY":
                  EB = (0, oY.j)();
                  break;
                case "kY":
                  EB = null !== (oB = (0, kY.b)()) && void 0 !== oB ? oB : JY.h;
                  break;
                case "LY":
                  EB = (0, oY.d)(OB.width, OB.height);
                  break;
                case "OY":
                  EB = (0, pY.g)(-(new Date).getTimezoneOffset());
                  break;
                case "HY":
                  EB = null !== (kB = BB.fallbackReason) && void 0 !== kB ? kB : JY.h;
                  break;
                case "mY":
                  EB = "ready";
                  break;
                case "iY":
                  EB = (0, Gy.getSoftwareRenderer)();
                  break;
                case "uY":
                  EB = BB.shaderPackRuns() ? "true" : "false";
                  break;
                case "fY":
                  EB = uY.v;
                  break;
                case "DY":
                case "NY":
                case "tY":
                case "EY":
                case "vY":
                  EB = JY.h;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${HB}`)
              }
              if (void 0 === EB) throw new Error(`Metric ${HB} has no value`);
              LB[HB] = EB
            }
            return LB
          }(this.shell, {
            cpuFrameMs: TB,
            refreshHz: dB,
            cpuBottleneck: yB,
            frameIntervalCv: pB,
            ...gB
          }, oB, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), OB);
        if (! function(BB, TB, dB) {
            return (0, CT.c)(), BB(DB.q.Send, TB, dB)
          }(this.shell.writeCmd, LB.kd, function(BB) {
            const TB = (0, PB.e)((0, xT.g)(BB)),
              dB = new Uint8Array(DB.Sd.BYTES + TB.length);
            return new DataView(dB.buffer).setUint16(0, xT.c.AnalyticsUpdate, !0), dB.set(TB, DB.Sd.BYTES), dB
          }(uB))) return this.unsentPage = OB, this.pacing.unsent(oB), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, yY.d), (0, OY.j)(this.fpsOverTime, this.initialFps, uB, kB)
      }
    }
    var FY = dB(38509);

    function KY(BB, TB, dB) {
      const VB = new Map;
      return (0, FY.b)(((BB, dB, VB) => TB.rY(BB, dB, VB)), ((TB, dB, yB) => {
        const pB = `${TB},${dB},${yB}`;
        return VB.has(pB) || VB.set(pB, (0, RT.e)(BB, TB, dB, yB)), VB.get(pB)
      }), dB)
    }
    var rY = dB(38518),
      IY = dB(39434);

    function cY(BB) {
      const TB = null !== BB && 0 !== (DB.B.playerFlags(BB.api.apiView, 0) & DB.Bd.CursorAim);
      TB !== (0, IY.l)() && (0, IY.K)(TB, null !== BB)
    }

    function SY(BB) {
      return (0, vV.e)(mV.C, BB)
    }
    const PY = new pB.e((BB => dB(41293)(`./${BB}/${BB}Client`)));
    let QY = null,
      RY = null;
    async function aY(BB) {
      QY ??= dB.e(27).then((() => dB(38078))).then((BB => {
        RY = BB.createDefaultClientPlugins
      }), (BB => {
        throw QY = null, BB
      })), await Promise.all([PY.load(BB), QY])
    }

    function ZY(BB) {
      BB.load(new PT(WV, new GV))
    }
    let XY = !1;
    const WY = new WeakMap;

    function hY(BB) {
      try {
        BB()
      } catch (TB) {
        console.error("[bloxd-wasm-client] a session-end step failed", TB)
      }
    }

    function CY(BB, TB) {
      ! function() {
        var BB, TB;
        ZV.b.volume();
        const dB = ZV.b;
        null === (BB = dB._autoResume) || void 0 === BB || BB.call(dB), null === (TB = dB._autoSuspend) || void 0 === TB || TB.call(dB)
      }(), TB.audio.prepare();
      const dB = new iB(TB.core, TB.memory, TB.audio);
      let pB;
      try {
        pB = new Oy(dB, TB.options)
      } catch (LB) {
        return BB.crash(uy.z, LB), null
      }(0, YB.h)(Dy(dB, pB));
      const oB = new tJ({
        running: BB,
        api: dB,
        core: TB.core,
        memory: TB.memory,
        staleOr: TB.staleOr,
        reportFault: TB.reportReplayFault,
        options: TB.options,
        sessionInfo: TB.sessionInfo,
        replayShaderPack: TB.replayShaderPack
      });
      (0, yV.D)();
      const kB = new SV({
        api: dB,
        tables: pB,
        sessionInfo: TB.sessionInfo,
        gameFactory: BB => PY.loadedFactory(BB),
        defaultPlugins: (BB, TB, dB, VB) => {
          if (null === RY) throw new Error("The default plugins started before they loaded");
          return RY(BB, TB, dB, VB)
        },
        serverOptions: TB.options,
        onNetEvent: BB => {
          oB.netEvent(BB), TB.onNetEvent(BB)
        },
        setLocalOptions: TB => {
          sJ(BB, {
            changes: TB,
            reset: !1
          })
        },
        playSound: (BB, dB, VB, yB, pB, lB, JB) => TB.audio.playGame(BB, dB, VB, yB, pB, lB, JB),
        onSessionEnd: () => {
          hY(yB.k), hY(eV), hY((() => {
            VB.d.set({
              openInGameMenuName: null
            })
          })), hY((() => {
            TB.audio.cancelPreload()
          }))
        },
        beforeWrite: TB.beforeWrite,
        beforeOp: TB.beforeOp,
        cameraScreen: nV,
        showCameraFacing: By,
        onEventOverflow: TB.onEventOverflow,
        screenBandY: JB.m,
        replayEntities: oB.entityHooks,
        hasPackModel: TB.hasPackModel
      });
      return kB.attach(BB), WY.set(kB, oB), aV(kB.items, TB.audio),
        function(BB) {
          BB.setClientFreeCameraGrant("isDev", !1);
          const TB = TB => {
            BB.setClientFreeCameraGrant("hasDeveloperRank", TB.playerHasRank("developer"))
          };
          (0, lB.i)("userContextUpdated", TB)
        }(kB), XY || (XY = !0, (0, lB.i)("appManagerUpdated|openInGameMenuName", (BB => {
          !BB && (0, gB.i)().includes("InGameMenu") && (0, gB.l)("InGameMenu")
        }))), kB
    }

    function GY(BB) {
      try {
        BB.closeGame()
      } finally {
        var TB;
        null === (TB = WY.get(BB)) || void 0 === TB || TB.stop(), WY.delete(BB)
      }
    }
  },
  39531: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    const VB = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39550: (BB, TB, dB) => {
    function VB() {
      return dB(39554)
    }

    function yB() {
      return dB(39560)
    }

    function pB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    dB.d(TB, {
      c: () => pB,
      g: () => VB,
      i: () => yB
    })
  },
  39517: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      f: () => lB
    });
    const VB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function yB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const TB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof TB && VB.test(TB)
    }
    const pB = 500;

    function lB(BB) {
      let TB = "[object Object]";
      try {
        TB = String(BB)
      } catch {}
      if ("[object Object]" !== TB) return TB;
      try {
        var dB, VB;
        return null !== (dB = null === (VB = JSON.stringify(BB)) || void 0 === VB ? void 0 : VB.slice(0, pB)) && void 0 !== dB ? dB : TB
      } catch {
        return TB
      }
    }
  },
  39554: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39560: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);