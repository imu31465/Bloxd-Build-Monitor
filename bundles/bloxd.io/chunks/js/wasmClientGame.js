export const id = 49;
export const ids = [49];
export const modules = {
  41253: (JJ, cJ, ZJ) => {
    var FJ = {
      "./bedwars/bedwarsClient": [38214, 9],
      "./bridgeBattle/bridgeBattleClient": [38216, 10],
      "./buildAFactory2/buildAFactory2Client": [37478, 67, 66, 65, 207, 224, 11],
      "./classic/classicClient": [38221, 12],
      "./clutch/clutchClient": [38223, 13],
      "./containmentBreach/containmentBreachClient": [38226, 14],
      "./cooking/cookingClient": [38372, 15],
      "./defusal/defusalClient": [38380, 16],
      "./frontline/frontlineClient": [38389, 67, 66, 65, 17],
      "./goalRush/goalRushClient": [38394, 18],
      "./luckyBedwars/luckyBedwarsClient": [38402, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38407, 20],
      "./oneBlock/oneBlockClient": [38412, 21],
      "./plots/plotsClient": [38416, 205, 227, 22],
      "./pvpCiv/pvpCivClient": [38490, 23],
      "./skyIslands/skyIslandsClient": [38496, 24],
      "./skyblock/skyblockClient": [37508, 67, 207, 178, 25],
      "./tsunami/tsunamiClient": [38500, 26]
    };

    function UJ(JJ) {
      if (!ZJ.o(FJ, JJ)) return Promise.resolve().then((() => {
        var cJ = new Error("Cannot find module '" + JJ + "'");
        throw cJ.code = "MODULE_NOT_FOUND", cJ
      }));
      var cJ = FJ[JJ],
        UJ = cJ[0];
      return Promise.all(cJ.slice(1).map(ZJ.e)).then((() => ZJ(UJ)))
    }
    UJ.keys = () => Object.keys(FJ), UJ.id = 41253, JJ.exports = UJ
  },
  37945: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      d: () => UJ
    });
    var FJ = ZJ(17);

    function UJ(JJ) {
      return "refetchCode" === JJ || "devDownloadJson" === JJ || JJ.startsWith("Plugin")
    }

    function eJ(JJ, cJ) {
      "refetchCode" !== JJ ? "Plugin|MobAiPlugin|ShowPetUi" !== JJ ? Promise.all([ZJ.e(99), ZJ.e(100), ZJ.e(95), ZJ.e(97), ZJ.e(195)]).then((() => ZJ(40455))).then((ZJ => {
        let {
          runClientGameMessage: FJ
        } = ZJ;
        FJ(JJ, cJ)
      })).catch((cJ => {
        console.error(`Game message ${JJ} failed`, cJ)
      })) : FJ.i.Uf("showPetUi", cJ) : FJ.i.Uf("refetchCode")
    }
  },
  41240: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      d: () => UJ
    });
    const FJ = ["recording", "freecam", "keyframe"];

    function UJ() {
      const JJ = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(JJ[1]) << 32n | BigInt(JJ[0])
    }
  },
  8517: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      d: () => qJ
    });
    var FJ = ZJ(13);
    const UJ = 24,
      eJ = "farNametags",
      XJ = 1e5;

    function AJ() {
      var JJ;
      return null === (JJ = FJ.d.get("showDistantNametags")) || void 0 === JJ || JJ
    }

    function qJ() {
      var JJ;
      return null !== (JJ = function() {
        const JJ = new URLSearchParams(window.location.search).get(eJ),
          cJ = null === JJ || "" === JJ ? NaN : Number(JJ);
        return Number.isFinite(cJ) && cJ >= 0 ? Math.min(cJ, XJ) : null
      }()) && void 0 !== JJ ? JJ : AJ() ? 0 : UJ
    }
  },
  41236: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      blockIdOf: () => bq.c,
      clearWasmCameraScreen: () => oF,
      creativeItemIds: () => ZF.creativeItemIds,
      decodeMapSettings: () => gq,
      drainTextRerasters: () => wA.c,
      enchantmentPerksOf: () => ZF.enchantmentPerksOf,
      endGameHost: () => Cq,
      followCursorAim: () => Wq,
      followMenuPrefs: () => aU,
      loadAudio: () => dq,
      loadClientGame: () => pq,
      loadTextIcons: () => wA.e,
      rasterText: () => bA.c,
      readBoardToEdit: () => Mq,
      setTextHost: () => wA.l,
      setTextLocalPlayer: () => wA.m,
      showInCreativeInvenOf: () => ZF.showInCreativeInvenOf,
      startGameHost: () => Tq,
      startShellAnalytics: () => yq,
      startSkyFeed: () => oA,
      textChanged: () => wA.p,
      warmText: () => bA.e,
      wasmCameraScreen: () => tF
    });
    ZJ(35578);
    var FJ = ZJ(13),
      UJ = ZJ(35828),
      eJ = ZJ(38103),
      XJ = ZJ(17),
      AJ = ZJ(2893),
      qJ = ZJ(35822),
      jJ = ZJ(1184),
      YJ = ZJ(523),
      hJ = ZJ(37214),
      DJ = ZJ(4189),
      sJ = ZJ(39417),
      nJ = ZJ(39354);
    const GJ = nJ.Fb / 4,
      fJ = nJ.p.PlaySound,
      xJ = nJ.p.SoundReset,
      rJ = DJ.T.ReplayFailed,
      vJ = DJ.T.RecorderEvent;
    class mJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = JJ, this.memory = cJ, this.audio = ZJ, this.serverIds = new Int32Array(256).fill(nJ.Tc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(nJ.s.BYTES)), this.renderPtr = 0, this.qh = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new nJ.V(JJ, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.UUJ(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(JJ, cJ) {
        const ZJ = this.eventView();
        return new Uint8Array(ZJ.buffer, ZJ.byteOffset + JJ, cJ)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return nJ.s.localId(this.apiView, 0)
      }
      localDeaths() {
        return nJ.s.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const JJ = this.apiView,
          cJ = nJ.s.entRenderPtr(JJ, 0),
          ZJ = nJ.s.entVisPtr(JJ, 0),
          FJ = nJ.s.entCapacity(JJ, 0);
        if (cJ !== this.renderPtr || ZJ !== this.visPtr || FJ !== this.qh || this.renderBuffer !== this.buffer) {
          this.renderPtr = cJ, this.visPtr = ZJ, this.qh = FJ, this.renderBuffer = this.buffer;
          const JJ = this.memoryView(Float32Array, cJ, FJ * GJ, "the render array"),
            UJ = this.memoryView(Uint8Array, ZJ, FJ, "the visibility array");
          this.renderCapacity = JJ && UJ ? FJ : 0, this.render = JJ && UJ ? JJ : new Float32Array(0), this.vis = JJ && UJ ? UJ : new Uint8Array(0)
        }
      }
      memoryView(JJ, cJ, ZJ, FJ) {
        try {
          return (0, sJ.v)(JJ, this.memory().buffer, cJ, ZJ, FJ)
        } catch (UJ) {
          return this.keepCorruption(UJ), null
        }
      }
      memoryData(JJ, cJ, ZJ, FJ) {
        try {
          return (0, sJ.i)(this.memory().buffer, JJ, cJ, ZJ, FJ)
        } catch (UJ) {
          return this.keepCorruption(UJ), null
        }
      }
      reportCorruption(JJ) {
        this.keepCorruption(new sJ.e(JJ))
      }
      keepCorruption(JJ) {
        if (!(JJ instanceof sJ.e)) throw JJ;
        this.corruption ??= JJ
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(JJ, cJ, ZJ) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: FJ,
          len: UJ
        } = JJ;
        this.eventsPtr = FJ, this.eventsLen = UJ, this.eventsBuffer = null;
        const eJ = this.eventView();
        for (let jJ = 0; jJ < UJ;) {
          const JJ = eJ.getUint32(jJ, !0),
            ZJ = 65535 & JJ,
            FJ = JJ >>> 16,
            UJ = jJ + DJ.R;
          if (ZJ === nJ.p.EntitySpawned) {
            var XJ;
            if (FJ !== nJ.Mb.BYTES) throw yJ(ZJ, jJ, FJ);
            const JJ = nJ.Mb.serverId(eJ, UJ);
            this.spawned(JJ, nJ.Mb.index(eJ, UJ), nJ.Mb.kind(eJ, UJ)), null === (XJ = cJ.entityAdded) || void 0 === XJ || XJ.call(cJ, JJ)
          } else if ((ZJ === nJ.p.ChunkSlot || ZJ === nJ.p.EntityInfoChanged) && !(0, nJ.me)(ZJ, eJ, UJ, FJ, cJ)) throw yJ(ZJ, jJ, FJ);
          jJ = UJ + (0, DJ.he)(FJ)
        }
        try {
          var AJ;
          null === (AJ = cJ.afterPrescan) || void 0 === AJ || AJ.call(cJ), this.throwCorruption(), !ZJ() && this.dispatch(JJ, cJ, ZJ) && (this.throwCorruption(), this.applyListener(), cJ.afterWalk(JJ.kind)), this.throwCorruption()
        } catch (qJ) {
          throw qJ instanceof sJ.e && (this.corruption ??= qJ), qJ
        } finally {
          ZJ() || null !== this.corruption || this.applyDespawns(UJ, cJ)
        }
      }
      applyDespawns(JJ, cJ) {
        const ZJ = this.eventView();
        for (let UJ = 0; UJ < JJ;) {
          const JJ = ZJ.getUint32(UJ, !0),
            eJ = UJ + DJ.R;
          if ((65535 & JJ) === nJ.p.EntityDespawned && JJ >>> 16 === nJ.Mb.BYTES) {
            const JJ = nJ.Mb.serverId(ZJ, eJ);
            var FJ;
            if (this.despawned(JJ, nJ.Mb.index(ZJ, eJ))) null === (FJ = cJ.entityRemoved) || void 0 === FJ || FJ.call(cJ, JJ)
          }
          UJ = eJ + (0, DJ.he)(JJ >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(JJ, cJ, ZJ) {
        const {
          len: FJ,
          net: UJ,
          netOffsets: eJ
        } = JJ;
        let XJ = this.eventView(),
          AJ = 0;
        for (let EJ = 0; EJ < FJ;) {
          const JJ = XJ.getUint32(EJ, !0),
            FJ = 65535 & JJ,
            VJ = JJ >>> 16,
            SJ = EJ + DJ.R;
          let IJ = !1;
          if (AJ < UJ.length && eJ[AJ] === EJ) cJ.netEvent(UJ[AJ]), AJ++, IJ = !0;
          else if (FJ === DJ.T.LocalPlayerBound) {
            var qJ;
            if (VJ !== DJ.zb) throw yJ(FJ, EJ, VJ);
            null === (qJ = cJ.localPlayerBound) || void 0 === qJ || qJ.call(cJ, XJ.getInt32(SJ, !0)), IJ = !0
          } else if (FJ === DJ.T.LocalHurt) {
            var jJ;
            if (VJ !== DJ.wb) throw yJ(FJ, EJ, VJ);
            null === (jJ = cJ.localHurt) || void 0 === jJ || jJ.call(cJ, XJ.getInt32(SJ, !0), XJ.getFloat32(SJ + 4, !0), XJ.getUint32(SJ + 8, !0)), IJ = !0
          } else if (FJ === DJ.T.AttackHit) {
            var YJ;
            if (VJ !== DJ.b) throw yJ(FJ, EJ, VJ);
            const JJ = XJ.getFloat32(SJ, !0),
              ZJ = XJ.getFloat32(SJ + 4, !0),
              UJ = XJ.getFloat32(SJ + 8, !0),
              eJ = XJ.getUint32(SJ + 12, !0);
            null === (YJ = cJ.attackHit) || void 0 === YJ || YJ.call(cJ, JJ, ZJ, UJ, 0 !== (eJ & DJ.j.Crit), 0 !== (eJ & DJ.j.HitSelf))
          } else if (FJ === DJ.T.PhysicsType) {
            var hJ;
            if (VJ !== DJ.Vb) throw yJ(FJ, EJ, VJ);
            null === (hJ = cJ.physicsType) || void 0 === hJ || hJ.call(cJ, XJ.getUint32(SJ, !0), XJ.getInt32(SJ + 4, !0)), IJ = !0
          } else if (FJ === DJ.T.VehicleEffect) {
            var sJ;
            const JJ = KJ(XJ, SJ, VJ);
            if (null === JJ) throw yJ(FJ, EJ, VJ);
            null === (sJ = cJ.vehicleEffect) || void 0 === sJ || sJ.call(cJ, JJ.op, JJ.name, JJ.icon, JJ.level, JJ.durationMs), IJ = !0
          } else if (FJ === DJ.T.ZoomChanged) {
            var GJ;
            if (VJ !== DJ.Pd) throw yJ(FJ, EJ, VJ);
            null === (GJ = cJ.zoomChanged) || void 0 === GJ || GJ.call(cJ, XJ.getFloat32(SJ, !0), XJ.getUint8(SJ + 4)), IJ = !0
          } else if (FJ === DJ.T.ZoomDisabled) {
            var mJ;
            if (0 !== VJ) throw yJ(FJ, EJ, VJ);
            null === (mJ = cJ.zoomDisabled) || void 0 === mJ || mJ.call(cJ), IJ = !0
          } else if (FJ === DJ.T.GameCamera) {
            var QJ;
            null === (QJ = cJ.gameCamera) || void 0 === QJ || QJ.call(cJ, new Uint8Array(XJ.buffer, XJ.byteOffset + SJ, VJ).slice()), IJ = !0
          } else if (FJ === nJ.p.ChunkSlot || FJ === nJ.p.EntityInfoChanged);
          else if (FJ >= fJ && FJ <= xJ) {
            if (this.audio && !this.audio.onAudioEvent(FJ, XJ, SJ, VJ)) throw yJ(FJ, EJ, VJ)
          } else if (FJ >= rJ && FJ <= vJ) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(FJ, XJ, SJ, VJ)) throw yJ(FJ, EJ, VJ);
              IJ = !0
            }
          } else if (FJ >= nJ.ed && FJ <= nJ.fd && FJ !== DJ.T.EnvLighting) {
            if (!(0, nJ.me)(FJ, XJ, SJ, VJ, cJ)) throw yJ(FJ, EJ, VJ);
            IJ = !0
          }
          if (IJ) {
            if (ZJ()) return !1;
            XJ = this.eventView()
          }
          EJ = SJ + (0, DJ.he)(VJ)
        }
        return !ZJ()
      }
      applyListener() {
        var JJ;
        if (!this.audio) return;
        const cJ = nJ.s.audioViewPtr(this.apiView, 0),
          ZJ = this.memory().buffer;
        let FJ = this.audioView;
        (null === (JJ = FJ) || void 0 === JJ ? void 0 : JJ.buffer) === ZJ && FJ.byteOffset === cJ || (FJ = (0, sJ.i)(ZJ, cJ, nJ.v.BYTES, 8, "the audio view"), this.audioView = FJ), FJ && this.audio.applyListener(FJ)
      }
      indexOf(JJ) {
        return this.indexById.get("number" === typeof JJ ? JJ : +JJ)
      }
      isLocal(JJ) {
        return JJ !== nJ.Tc && JJ === nJ.s.localId(this.apiView, 0)
      }
      Om(JJ) {
        const cJ = [0, 0, 0];
        return this.readPosition("number" === typeof JJ ? JJ : +JJ, cJ) ? cJ : null
      }
      readPosition(JJ, cJ) {
        const ZJ = this.apiView;
        if (void 0 !== this.indexById.get(JJ) && this.isLocal(JJ)) {
          for (let JJ = 0; JJ < 3; JJ++) cJ[JJ] = nJ.s.localPos(ZJ, 0, JJ);
          return !0
        }
        return this.readDrawnPosition(JJ, cJ)
      }
      readDrawnPosition(JJ, cJ) {
        const ZJ = this.apiView,
          FJ = this.indexById.get(JJ);
        if (void 0 === FJ || FJ >= this.renderCapacity) return cJ[0] = cJ[1] = cJ[2] = NaN, !1;
        const UJ = FJ * GJ;
        for (let eJ = 0; eJ < 3; eJ++) cJ[eJ] = this.render[UJ + eJ] + nJ.s.origin(ZJ, 0, eJ);
        return !0
      }
      checkValid(JJ) {
        return void 0 !== this.indexOf(JJ)
      }
      isAlive(JJ) {
        const cJ = this.indexOf(JJ);
        if (void 0 === cJ) return null;
        if (this.ensureViews(), cJ >= this.renderCapacity) return null;
        const ZJ = this.vis[cJ];
        return 0 === ZJ ? null : 0 !== (ZJ & nJ.ke.Alive)
      }
      getEntityType(JJ) {
        const cJ = this.indexOf(JJ);
        return void 0 === cJ ? this.isLocal("number" === typeof JJ ? JJ : +JJ) ? "Player" : null : EJ(this.kinds[cJ])
      }
      spawned(JJ, cJ, ZJ) {
        if (cJ >= 1048576) throw new sJ.e(`entity ${JJ} spawned at index ${cJ}`);
        this.ensureIndex(cJ), this.serverIds[cJ] === JJ && null !== this.idStr[cJ] || (this.idStr[cJ] = String(JJ)), this.serverIds[cJ] = JJ, this.kinds[cJ] = ZJ, this.indexById.set(JJ, cJ)
      }
      despawned(JJ, cJ) {
        let ZJ = !1;
        return this.indexById.get(JJ) === cJ && (this.indexById.delete(JJ), ZJ = !0), cJ < this.serverIds.length && this.serverIds[cJ] === JJ && (this.serverIds[cJ] = nJ.Tc, this.kinds[cJ] = 0, this.idStr[cJ] = null), ZJ
      }
      ensureIndex(JJ) {
        const cJ = this.serverIds.length;
        if (JJ < cJ) return;
        let ZJ = 2 * cJ;
        for (; ZJ <= JJ;) ZJ *= 2;
        const FJ = new Int32Array(ZJ).fill(nJ.Tc);
        FJ.set(this.serverIds), this.serverIds = FJ;
        const UJ = new Uint16Array(ZJ);
        UJ.set(this.kinds), this.kinds = UJ;
        for (let eJ = cJ; eJ < ZJ; eJ++) this.idStr.push(null)
      }
      eventView() {
        const JJ = this.memory().buffer;
        return JJ !== this.eventsBuffer && (this.eventsBuffer = JJ, this.events = new DataView(JJ, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const JJ = this.memory().buffer;
        this.buffer = JJ, this.viewPtr < 0 && (this.viewPtr = this.core.eUJ()), this.view = new DataView(JJ, this.viewPtr, nJ.s.BYTES), this.rereadDirectory()
      }
    }

    function QJ(JJ) {
      return JJ >>> nJ.d === nJ.r.Item
    }

    function EJ(JJ) {
      var cJ, ZJ;
      const FJ = JJ & nJ.h;
      switch (JJ >>> nJ.d) {
        case nJ.r.Lifeform:
          return null !== (cJ = YJ.p[FJ]) && void 0 !== cJ ? cJ : null;
        case nJ.r.Throwable:
          return null !== (ZJ = hJ.j[FJ]) && void 0 !== ZJ ? ZJ : null;
        case nJ.r.Mesh:
          return "Mesh";
        case nJ.r.Audio:
          return "AudioEntity";
        case nJ.r.Item:
          return "Item";
        default:
          return null
      }
    }
    const VJ = new TextDecoder;

    function KJ(JJ, cJ, ZJ) {
      if (ZJ < DJ.vd.HEAD_BYTES) return null;
      const FJ = JJ.getUint32(cJ, !0),
        UJ = JJ.getUint32(cJ + 20, !0),
        eJ = JJ.getUint32(cJ + 24, !0),
        XJ = DJ.vd.HEAD_BYTES + (0, DJ.he)(UJ);
      if (FJ !== DJ.vd.UPDATE && FJ !== DJ.vd.REMOVE || UJ > ZJ || XJ + eJ > ZJ) return null;
      const AJ = (ZJ, FJ) => VJ.decode(new Uint8Array(JJ.buffer, JJ.byteOffset + cJ + ZJ, FJ)),
        qJ = JJ.getFloat64(cJ + 12, !0);
      return {
        op: FJ,
        level: JJ.getFloat64(cJ + 4, !0),
        durationMs: Number.isNaN(qJ) ? null : qJ,
        name: AJ(DJ.vd.HEAD_BYTES, UJ),
        icon: AJ(XJ, eJ)
      }
    }

    function yJ(JJ, cJ, ZJ) {
      return new sJ.e(`event ${JJ} at ${cJ} of ${ZJ} bytes`)
    }
    var SJ = ZJ(235),
      IJ = ZJ(1122),
      MJ = ZJ(37945),
      bJ = ZJ(1722),
      wJ = ZJ(39470),
      WJ = ZJ(1671),
      gJ = ZJ(38120),
      HJ = ZJ(38157),
      PJ = ZJ(38134),
      kJ = ZJ(39401),
      pJ = ZJ(2153),
      dJ = ZJ(38117),
      zJ = ZJ(38148);
    const NJ = Math.max(nJ.sb.BYTES, nJ.kb.BYTES, nJ.mb.BYTES);

    function OJ(JJ) {
      if (!(0, zJ.c)(JJ)) return null;
      const cJ = Number(JJ);
      return (0 | cJ) === cJ ? cJ : null
    }
    class TJ {
      constructor(JJ) {
        this.api = JJ, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, dJ.n)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.mc = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = nJ.Tc, this.localName = String(nJ.Tc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.mc = null;
        const JJ = this.api.queries.directorView() >= nJ.sb.BYTES ? this.scratchView() : null;
        null !== JJ && (this.defaultFov = (0, WJ.z)(nJ.sb.fov(JJ, 0)), this.baseFov = (0, WJ.z)(nJ.sb.baseFov(JJ, 0)), this.aspect = nJ.sb.aspect(JJ, 0), this.bodyHeading = nJ.sb.bodyHeading(JJ, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(JJ) {
        this.viewHeading = JJ
      }
      get localPlayerId() {
        const JJ = nJ.s.localId(this.api.apiView, 0);
        return JJ !== this.localId && (this.localId = JJ, this.localName = String(JJ)), this.localName
      }
      getEntityPosition(JJ) {
        return this.readEntity(JJ) ? this.entityFeet : null
      }
      getEntityAimPoint(JJ) {
        return this.readEntity(JJ) ? this.entityAim : null
      }
      getEntityHeading(JJ) {
        const cJ = OJ(JJ);
        if (null === cJ) return null;
        const ZJ = nJ.s.localId(this.api.apiView, 0);
        return cJ === ZJ && ZJ !== nJ.Tc ? this.viewHeading : this.readEntity(JJ) ? this.entityHeading : null
      }
      raycastTerrain(JJ, cJ, ZJ) {
        const FJ = this.api.queries.cameraSweep(JJ[0], JJ[1], JJ[2], cJ[0], cJ[1], cJ[2], ZJ);
        return FJ < ZJ - 1e-6 ? FJ : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const JJ = this.defaultPose;
        JJ.fov = this.defaultFov;
        const cJ = this.api.queries.directorDefaultPose() >= nJ.kb.BYTES ? this.scratchView() : null;
        if (null === cJ) return JJ;
        for (let ZJ = 0; ZJ < 3; ZJ++) JJ.position[ZJ] = nJ.kb.eye(cJ, 0, ZJ);
        return JJ.heading = nJ.kb.heading(cJ, 0), JJ.pitch = nJ.kb.pitch(cJ, 0), JJ
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
      readEntity(JJ) {
        const cJ = OJ(JJ);
        if (null === cJ) return !1;
        if (cJ === this.mc) return this.entityLive;
        this.mc = cJ;
        const ZJ = this.api.queries.directorEntity(cJ) >= nJ.mb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== ZJ, null === ZJ) return !1;
        for (let FJ = 0; FJ < 3; FJ++) this.entityFeet[FJ] = nJ.mb.feet(ZJ, 0, FJ), this.entityAim[FJ] = this.entityFeet[FJ];
        return this.entityAim[1] += nJ.mb.eyeHeight(ZJ, 0), this.entityHeading = nJ.mb.heading(ZJ, 0), !0
      }
      scratchView() {
        const JJ = this.api.scratch(),
          cJ = this.api.memory().buffer,
          ZJ = this.scratch;
        return null !== ZJ && ZJ.buffer === cJ && ZJ.byteOffset === JJ ? ZJ : (this.scratch = this.api.memoryData(JJ, NJ, 8, "the director's record"), this.scratch)
      }
    }
    const CJ = {
        mode: "default"
      },
      uJ = {
        show: () => {},
        clear: () => {}
      };

    function iJ() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class RJ {
      constructor(JJ) {
        this.options = JJ, this.zh = void 0, this.director = void 0, this.latest = CJ, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          bK: 0,
          zK: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.gq = new Int32Array(3 * nJ.Ld), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * nJ.Ld), this.zh = new TJ(JJ.api), this.director = new PJ.d(this.zh)
      }
      settingsChanged(JJ) {
        let cJ = CJ;
        if (JJ.length > 0) try {
          cJ = (0, kJ.b)(JJ)
        } catch {}
        this.latest = cJ, this.pending = cJ
      }
      call(JJ, cJ, ZJ, FJ, UJ, eJ) {
        var XJ, AJ;
        let qJ;
        this.holding = !1;
        try {
          qJ = this.answer(JJ, cJ, ZJ, FJ, UJ, eJ)
        } catch (DJ) {
          var jJ, YJ;
          throw this.answeredPose = !1, null === (jJ = (YJ = this.options).showFacing) || void 0 === jJ || jJ.call(YJ, null), DJ
        }
        const hJ = this.answeredPose && 0 === (FJ & nJ.pb.Held);
        return this.answeredPose = qJ !== nJ.jb.None, this.holding = this.answeredPose && !hJ, null === (XJ = (AJ = this.options).showFacing) || void 0 === XJ || XJ.call(AJ, this.holding ? this.facing : null), qJ
      }
      holdsView() {
        return this.holding
      }
      answer(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          zh: XJ
        } = this;
        XJ.readView();
        if (0 !== (FJ & nJ.pb.Held) || XJ.setViewHeading((0, gJ.t)(XJ.bodyHeading)), void 0 !== this.pending) {
          const JJ = this.pending;
          this.pending = void 0, this.director.setSettings(JJ), this.syncShownSettings()
        }
        this.readLook((0, pJ.h)(cJ), (0, pJ.h)(ZJ), FJ, (0, pJ.h)(UJ), (0, pJ.h)(eJ));
        const AJ = this.director.update(JJ / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !AJ) return nJ.jb.None;
        const [qJ, jJ, YJ] = AJ.position;
        if (0 === this.options.api.queries.directorPose(qJ, jJ, YJ, (0, gJ.t)(AJ.heading), (0, gJ.i)(AJ.pitch), (0, WJ.k)(AJ.fov))) return nJ.jb.None;
        if ("default" === this.director.getSettings().mode) return nJ.jb.Pose;
        switch (this.facing) {
          case "camera":
            return nJ.jb.FaceCamera;
          case "cursor":
            return nJ.jb.FaceCursor;
          default:
            return nJ.jb.FaceMovement
        }
      }
      afterFrame(JJ) {
        JJ ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = CJ, this.idle()
      }
      restart() {
        const JJ = this.holding;
        this.idle(), this.holding = JJ
      }
      idle() {
        var JJ, cJ;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new PJ.d(this.zh), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (JJ = (cJ = this.options).showFacing) || void 0 === JJ || JJ.call(cJ, null), this.setCentres(0)
      }
      syncShownSettings() {
        const JJ = this.director.getSettings();
        if (JJ === this.shownSettings) return;
        this.shownSettings = JJ;
        const cJ = (0, HJ.f)(JJ);
        this.facing = cJ.facing, this.mouseTurns = cJ.mouseTurns
      }
      readLook(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.look,
          XJ = 0 !== (ZJ & nJ.pb.LookPointed);
        if (null === this.mouseTurns && !XJ) return eJ.bK = 0, eJ.zK = 0, void(eJ.pointedAt = void 0);
        let AJ;
        XJ && (this.pointedAt.heading = FJ, this.pointedAt.pitch = UJ, AJ = this.pointedAt);
        const {
          zh: qJ
        } = this;
        qJ.setViewHeading((0, HJ.c)(qJ.getViewHeading(), JJ, cJ, AJ, "look" === this.mouseTurns, eJ))
      }
      writeCentres(JJ) {
        const cJ = this.next,
          ZJ = Math.min(JJ.length, nJ.Ld);
        for (let FJ = 0; FJ < ZJ; FJ++)
          for (let ZJ = 0; ZJ < 3; ZJ++) cJ[3 * FJ + ZJ] = Math.floor(JJ[FJ][ZJ] / nJ.E);
        this.setCentres(ZJ)
      }
      setCentres(JJ) {
        const {
          gq: cJ,
          next: ZJ
        } = this;
        let FJ = JJ === this.centresLen;
        for (let UJ = 0; FJ && UJ < 3 * JJ; UJ++) FJ = cJ[UJ] === ZJ[UJ];
        FJ || (cJ.fill(0), cJ.set(ZJ.subarray(0, 3 * JJ)), this.centresLen = JJ, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const JJ = this.options.cmd();
        null !== JJ && (0, nJ.zf)(JJ, 0, this.gq, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var JJ, cJ, ZJ;
        return null !== (JJ = null === (cJ = (ZJ = this.options).screen) || void 0 === cJ ? void 0 : cJ.call(ZJ)) && void 0 !== JJ ? JJ : uJ
      }
      hidden() {
        var JJ;
        return (null !== (JJ = this.options.isPageHidden) && void 0 !== JJ ? JJ : iJ)()
      }
      now() {
        var JJ, cJ, ZJ;
        return null !== (JJ = null === (cJ = (ZJ = this.options).now) || void 0 === cJ ? void 0 : cJ.call(ZJ)) && void 0 !== JJ ? JJ : performance.now()
      }
    }
    const LJ = nJ.E * nJ.E * nJ.E,
      aJ = Math.log2(nJ.E),
      BJ = nJ.E - 1,
      tJ = nJ.Q.BYTES / 4,
      oJ = new Uint16Array(LJ);

    function lJ(JJ, cJ, ZJ) {
      return JJ * nJ.E * nJ.E + cJ * nJ.E + ZJ
    }
    class Jc {
      constructor(JJ) {
        this.chunk = JJ
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(JJ, cJ, ZJ) {
        return lJ(JJ, cJ, ZJ)
      }
    }
    class cc {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Zc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.table = JJ, this.slot = cJ, this.generation = ZJ, this.epoch = FJ, this.GD = new Jc(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = oJ, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get ZG() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get Qs() {
        const JJ = this.gameVoxels(),
          cJ = this.layers ??= new Uint16Array(nJ.E);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let ZJ = 0; 0 !== this.staleLayers; ZJ++) {
          const FJ = 1 << ZJ;
          0 !== (this.staleLayers & FJ) && (this.staleLayers &= ~FJ, cJ[ZJ] = Fc(JJ, ZJ))
        }
        return cJ
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const JJ = this.voxelData(),
          cJ = this.writes;
        if (null === cJ || 0 === cJ.ids.size) return JJ;
        if (cJ.from !== JJ) {
          const ZJ = cJ.patched ??= new Uint16Array(LJ);
          ZJ.set(JJ);
          for (const [JJ, FJ] of cJ.ids) ZJ[JJ] = FJ;
          cJ.from = JJ
        }
        return cJ.patched
      }
      written(JJ) {
        var cJ;
        return null === (cJ = this.writes) || void 0 === cJ ? void 0 : cJ.ids.get(JJ)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(JJ, cJ, ZJ) {
        const FJ = this.writes ??= new cc;
        FJ.ids.set(JJ, cJ), ZJ && FJ.cleared.add(JJ), null !== FJ.from && (FJ.patched[JJ] = cJ);
        const UJ = 1 << (JJ >> aJ & BJ);
        FJ.layers |= UJ, this.staleLayers |= UJ, this.writeCount++
      }
      clearWrites() {
        const JJ = this.writes;
        null !== JJ && (this.staleLayers |= JJ.layers, JJ.ids.clear(), JJ.cleared.clear(), JJ.layers = 0, JJ.from = null)
      }
      dataCleared(JJ) {
        var cJ;
        return !0 === (null === (cJ = this.writes) || void 0 === cJ ? void 0 : cJ.cleared.has(JJ))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const JJ = this.table.slotWords(),
          cJ = this.slot * tJ;
        if (this.epoch !== this.table.epoch || cJ + tJ > JJ.length || 0 === JJ[cJ + 3] || JJ[cJ + 2] !== this.generation) return this.data = oJ, this.dataPtr = 0, oJ;
        this.version = JJ[cJ + 1];
        const ZJ = JJ[cJ + 0],
          FJ = JJ.buffer;
        return ZJ === this.dataPtr && FJ === this.dataBuffer || (this.dataPtr = ZJ, this.dataBuffer = FJ, this.data = this.table.voxelsAt(FJ, ZJ)), this.data
      }
    }

    function Fc(JJ, cJ) {
      const ZJ = JJ[cJ * nJ.E];
      for (let FJ = 0; FJ < nJ.E; FJ++) {
        const UJ = lJ(FJ, cJ, 0);
        for (let cJ = 0; cJ < nJ.E; cJ++)
          if (JJ[UJ + cJ] !== ZJ) return 65535
      }
      return ZJ
    }
    const Uc = new Uint32Array(0),
      ec = 1 << 20,
      Xc = 1 << 21;

    function Ac(JJ, cJ, ZJ) {
      const FJ = JJ + ec,
        UJ = cJ + 1024,
        eJ = ZJ + ec;
      return FJ < 0 || FJ >= Xc || eJ < 0 || eJ >= Xc || UJ < 0 || UJ >= 2048 ? -1 : 2048 * (FJ * Xc + eJ) + UJ
    }

    function qc(JJ, cJ, ZJ) {
      return lJ(JJ & BJ, cJ & BJ, ZJ & BJ)
    }
    class jc {
      constructor(JJ, cJ) {
        this.memory = JJ, this.apiView = cJ, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Uc, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Uc, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(JJ, cJ, ZJ, FJ, UJ, eJ) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, eJ === nJ.S.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (eJ !== nJ.S.Stored && eJ !== nJ.S.Unloaded) throw new sJ.e(`ChunkSlot flags ${eJ}`);
        const XJ = Ac(JJ, cJ, ZJ);
        if (XJ < 0) return;
        if (eJ === nJ.S.Unloaded) return void this.chunks.delete(XJ);
        const AJ = this.chunks.get(XJ);
        (null === AJ || void 0 === AJ ? void 0 : AJ.slot) === FJ && AJ.generation === UJ || this.chunks.set(XJ, new Zc(this, FJ, UJ, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const JJ = this.apiView(),
          cJ = nJ.s.chunkSlotsPtr(JJ, 0),
          ZJ = nJ.s.chunkSlotsLen(JJ, 0);
        cJ === this.slotsPtr && ZJ === this.slotsLen || (this.slotsPtr = cJ, this.slotsLen = ZJ, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const JJ = this.apiView(),
          cJ = nJ.s.walkThroughPtr(JJ, 0),
          ZJ = nJ.s.walkThroughLen(JJ, 0);
        cJ === this.walkPtr && ZJ === this.walkLen || (this.walkPtr = cJ, this.walkLen = ZJ, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const JJ of this.written) JJ.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const JJ = this.memory().buffer;
        var cJ;
        JJ !== this.slotsBuffer && (this.slotsBuffer = JJ, this.slots = null !== (cJ = (0, sJ.v)(Uint32Array, JJ, this.slotsPtr, this.slotsLen * tJ, "the chunk directory")) && void 0 !== cJ ? cJ : Uc);
        return this.slots
      }
      voxelsAt(JJ, cJ) {
        try {
          var ZJ;
          return null !== (ZJ = (0, sJ.v)(Uint16Array, JJ, cJ, LJ, "a chunk's voxels")) && void 0 !== ZJ ? ZJ : oJ
        } catch (FJ) {
          if (!(FJ instanceof sJ.e)) throw FJ;
          return this.corruption ??= FJ, oJ
        }
      }
      chunk(JJ, cJ, ZJ) {
        var FJ;
        return null !== (FJ = this.chunks.get(Ac(JJ, cJ, ZJ))) && void 0 !== FJ ? FJ : null
      }
      isLoaded(JJ, cJ, ZJ) {
        return void 0 !== this.chunkAt(Math.floor(JJ), Math.floor(cJ), Math.floor(ZJ))
      }
      EA(JJ, cJ, ZJ) {
        var FJ;
        const UJ = Math.floor(JJ),
          eJ = Math.floor(cJ),
          XJ = Math.floor(ZJ),
          AJ = this.chunkAt(UJ, eJ, XJ);
        if (!AJ) return 0;
        const qJ = qc(UJ, eJ, XJ);
        return null !== (FJ = AJ.written(qJ)) && void 0 !== FJ ? FJ : AJ.voxelData()[qJ]
      }
      setOverlay(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const eJ = this.chunkAt(JJ, cJ, ZJ);
        return !!eJ && (eJ.hasWrites() || this.written.push(eJ), eJ.write(qc(JJ, cJ, ZJ), FJ, UJ), !0)
      }
      version(JJ, cJ, ZJ) {
        var FJ, UJ;
        return null !== (FJ = null === (UJ = this.chunks.get(Ac(JJ, cJ, ZJ))) || void 0 === UJ ? void 0 : UJ.ZG) && void 0 !== FJ ? FJ : null
      }
      scan(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        const qJ = nJ.E;
        let jJ = 0;
        for (let YJ = Math.floor(cJ / qJ); YJ * qJ < UJ; YJ++) {
          const hJ = YJ * qJ,
            DJ = Math.min(UJ - hJ, qJ);
          for (let UJ = Math.floor(JJ / qJ); UJ * qJ < FJ; UJ++) {
            const sJ = UJ * qJ,
              nJ = Math.min(FJ - sJ, qJ);
            for (let FJ = Math.floor(ZJ / qJ); FJ * qJ < eJ; FJ++) {
              const GJ = this.chunks.get(Ac(UJ, YJ, FJ));
              if (!GJ) continue;
              const fJ = FJ * qJ,
                xJ = Math.max(ZJ - fJ, 0),
                rJ = Math.min(eJ - fJ, qJ),
                vJ = GJ.Qs,
                mJ = GJ.gameVoxels();
              for (let ZJ = Math.max(cJ - hJ, 0); ZJ < DJ; ZJ++) {
                const cJ = vJ[ZJ];
                if (65535 === cJ || 0 !== XJ[cJ]) {
                  jJ++;
                  for (let cJ = Math.max(JJ - sJ, 0); cJ < nJ; cJ++) {
                    const JJ = lJ(cJ, ZJ, 0);
                    for (let FJ = xJ; FJ < rJ; FJ++) {
                      const UJ = mJ[JJ + FJ];
                      0 !== XJ[UJ] && AJ.push(sJ + cJ, hJ + ZJ, fJ + FJ, UJ)
                    }
                  }
                }
              }
            }
          }
        }
        return jJ
      }
      dataCleared(JJ, cJ, ZJ) {
        var FJ;
        const UJ = Math.floor(JJ),
          eJ = Math.floor(cJ),
          XJ = Math.floor(ZJ);
        return !0 === (null === (FJ = this.chunkAt(UJ, eJ, XJ)) || void 0 === FJ ? void 0 : FJ.dataCleared(qc(UJ, eJ, XJ)))
      }
      isWalkThrough(JJ) {
        if (!Number.isInteger(JJ) || JJ < 0 || JJ > 65535) return !1;
        const cJ = this.walkWords(),
          ZJ = JJ >>> 5;
        return ZJ < cJ.length && 1 === (cJ[ZJ] >>> (31 & JJ) & 1)
      }
      walkWords() {
        const JJ = this.memory().buffer;
        var cJ;
        JJ !== this.walkBuffer && (this.walkBuffer = JJ, this.walk = null !== (cJ = (0, sJ.v)(Uint32Array, JJ, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== cJ ? cJ : Uc);
        return this.walk
      }
      chunkAt(JJ, cJ, ZJ) {
        if ((0 | JJ) !== JJ || (0 | cJ) !== cJ || (0 | ZJ) !== ZJ) return;
        const FJ = Ac(JJ >> aJ, cJ >> aJ, ZJ >> aJ);
        return FJ !== this.lastKey && (this.lastKey = FJ, this.lastChunk = this.chunks.get(FJ)), this.lastChunk
      }
    }
    var Yc = ZJ(37496),
      hc = ZJ(36775),
      Dc = ZJ(35813),
      sc = ZJ(35676),
      nc = ZJ(35683),
      Gc = ZJ(38062),
      fc = ZJ(157);
    const xc = ["ambient", "crowd", "customGame_horror", "dig", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "random", "rpg", "step", "survivalFactory"],
      rc = [
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
      vc = rc.map((JJ => {
        let [cJ] = JJ;
        return cJ
      })),
      mc = Uint8Array.from(rc, (JJ => {
        let [, cJ] = JJ;
        return cJ
      })),
      Qc = {
        semi_automatic: 9,
        submachine: 11,
        rifle: 8,
        pistol: 7,
        shotgun: 10
      },
      Ec = 6;
    var Vc = ZJ(35806),
      Kc = ZJ(2595);
    const yc = 2 ** xc.length - 1;
    class Sc {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kc.e;
        this.sheet = JJ, this.onError = cJ, this.idle = ZJ, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = JJ => {
          this.cancelIdle = null;
          try {
            if (JJ.timeRemaining() >= 1) {
              let JJ = this.queue.shift();
              for (; void 0 !== JJ && !this.load(JJ);) JJ = this.queue.shift()
            }
          } catch (cJ) {
            this.onError(cJ)
          } finally {
            this.schedule()
          }
        }
      }
      preload(JJ) {
        const cJ = JJ & yc & ~this.asked;
        if (0 !== cJ) {
          this.asked |= cJ;
          for (let JJ = 0; JJ < xc.length; JJ++) cJ & 1 << JJ && this.queue.push(JJ);
          this.schedule()
        }
      }
      cancel() {
        var JJ;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (JJ = this.cancelIdle) || void 0 === JJ || JJ.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(JJ) {
        const cJ = this.sheet(JJ, !1),
          ZJ = this.sheet(JJ, !0),
          [FJ, UJ] = "unloaded" === cJ.state() && "unloaded" !== ZJ.state() ? [ZJ, cJ] : [cJ, ZJ],
          eJ = this.gen,
          XJ = () => {
            try {
              eJ === this.gen && "unloaded" === UJ.state() && UJ.load()
            } catch (JJ) {
              this.onError(JJ)
            }
          },
          AJ = FJ.state();
        return "unloaded" === AJ ? (FJ.once("load", XJ), FJ.load(), !0) : "unloaded" === UJ.state() && ("loading" === AJ ? (FJ.once("load", XJ), !1) : (UJ.load(), !0))
      }
    }
    var Ic = ZJ(39659);
    const Mc = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      bc = fc.c.Dv * fc.c.playerEyeToHeightRatio,
      wc = [0, 0, -1, 0, 1, 0],
      Wc = xc.indexOf("note");

    function gc(JJ) {
      return JJ >= 0 ? Math.min(1, JJ) : 0
    }

    function Hc(JJ) {
      var cJ;
      let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const FJ = function(JJ) {
        let cJ = 0,
          ZJ = vc.length;
        for (; cJ < ZJ;) {
          const FJ = cJ + ZJ >>> 1;
          vc[FJ] < JJ ? cJ = FJ + 1 : ZJ = FJ
        }
        return cJ
      }(JJ);
      if ("" === JJ || null === (cJ = vc[FJ]) || void 0 === cJ || !cJ.startsWith(JJ)) return -1;
      if (vc[FJ] === JJ) return FJ;
      let UJ = FJ + 1;
      for (; UJ < vc.length && vc[UJ].startsWith(JJ);) UJ++;
      return FJ + Math.floor(ZJ() * (UJ - FJ))
    }
    class Pc {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.group = JJ, this.loudness = cJ, this.startMs = ZJ, this.howl = FJ, this.host = UJ, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const JJ = this.host.alive(this.id);
        return JJ ? 1e3 * this.howl.duration(this.id) / JJ.rate : 0
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
    class kc {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = JJ, this.listener = cJ, this.now = ZJ, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Vc.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: JJ => this.aliveVoice(JJ),
          started: JJ => this.started.has(JJ),
          drop: JJ => {
            var cJ;
            null === (cJ = this.live.get(JJ)) || void 0 === cJ || cJ.howl.stop(JJ), this.forget(JJ)
          }
        }, this.handlers = {
          playSound: (JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) => {
            if (FJ >= vc.length) return;
            const jJ = 0 !== (UJ & nJ.be.Loop);
            UJ & nJ.be.TwoD ? this.start(FJ, !1, XJ, eJ, AJ, jJ) : this.startSpatial(FJ, XJ, eJ, AJ, jJ, JJ, cJ, ZJ, qJ, this.earDistSq(JJ, cJ, ZJ))
          },
          soundPos: (JJ, cJ, ZJ, FJ) => {
            const UJ = this.core.get(FJ);
            var eJ;
            void 0 !== UJ && (null === (eJ = this.live.get(UJ)) || void 0 === eJ || eJ.howl.pos(ZJ, cJ, JJ, UJ))
          },
          soundSet: (JJ, cJ, ZJ, FJ) => {
            const UJ = this.core.get(JJ),
              eJ = void 0 === UJ ? void 0 : this.live.get(UJ);
            void 0 !== UJ && eJ && (this.setRel(UJ, cJ), eJ.rate = ZJ, eJ.howl.rate(ZJ, UJ), eJ.spatial && eJ.howl.pannerAttr({
              refDistance: FJ
            }, UJ))
          },
          soundFade: (JJ, cJ, ZJ, FJ) => {
            const UJ = this.core.get(JJ);
            void 0 !== UJ && this.fade(UJ, cJ, ZJ, 0 !== (FJ & nJ._d.StopAfter))
          },
          soundStop: JJ => {
            const cJ = this.core.get(JJ);
            var ZJ;
            void 0 !== cJ && (null === (ZJ = this.live.get(cJ)) || void 0 === ZJ || ZJ.howl.stop(cJ), this.forget(cJ))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new Sc(((JJ, cJ) => this.sheet(JJ, cJ)), (JJ => {
          this.errors++, console.error("Audio preload failed", JJ)
        }), FJ)
      }
      prepare() {
        for (let JJ = 0; JJ < xc.length; JJ++) this.sheet(JJ, !1), this.sheet(JJ, !0)
      }
      preload(JJ) {
        this.loader.preload(JJ)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(JJ, cJ, ZJ, FJ) {
        if (JJ < nJ.p.PlaySound || JJ > nJ.p.SoundReset) return !1;
        try {
          return (0, nJ.me)(JJ, cJ, ZJ, FJ, this.handlers)
        } catch (UJ) {
          return this.errors++, console.error("Audio event failed", UJ), !0
        }
      }
      applyListener(JJ) {
        const cJ = this.nextPose;
        for (let FJ = 0; FJ < 3; FJ++) cJ[2 - FJ] = nJ.v.listener(JJ, 0, FJ), cJ[5 - FJ] = nJ.v.forward(JJ, 0, FJ), cJ[8 - FJ] = nJ.v.up(JJ, 0, FJ);
        0 === cJ[3] && 0 === cJ[4] && 0 === cJ[5] && cJ.set(this.posed ? this.pose.subarray(3) : wc, 3);
        for (let FJ = 0; FJ < 9; FJ++)
          if (!Number.isFinite(cJ[FJ])) return;
        const ZJ = this.pose;
        if (this.posed) {
          let JJ = !0;
          for (let FJ = 0; FJ < 9 && JJ; FJ++) JJ = cJ[FJ] === ZJ[FJ];
          if (JJ) return
        }
        this.listener.apply(cJ) && (ZJ.set(cJ), this.posed = !0)
      }
      playGame(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = Hc(JJ);
        if (AJ < 0) return Ic.c;
        if (!ZJ) {
          const {
            howl: JJ,
            id: ZJ
          } = this.start(AJ, !1, cJ, 0, 1, XJ);
          return this.gameSound(JJ, ZJ, !1)
        }
        const qJ = ZJ[0],
          jJ = ZJ[1] + bc,
          YJ = ZJ[2];
        if (!Number.isFinite(qJ) || !Number.isFinite(jJ) || !Number.isFinite(YJ)) return Ic.c;
        let hJ;
        if (FJ) {
          const JJ = qJ - FJ[0],
            cJ = jJ - FJ[1],
            ZJ = YJ - FJ[2];
          if (hJ = JJ * JJ + cJ * cJ + ZJ * ZJ, hJ > UJ * UJ) return Ic.c
        } else hJ = this.earDistSq(qJ, jJ, YJ);
        const DJ = this.startSpatial(AJ, cJ, 0, 1, XJ, qJ, jJ, YJ, eJ, hJ);
        return DJ ? this.gameSound(DJ.howl, DJ.id, !0) : Ic.c
      }
      setMaster(JJ, cJ) {
        this.level = gc(JJ);
        const ZJ = cJ ? this.level : 0;
        if (ZJ !== this.master) {
          this.master = ZJ;
          for (const [JJ, cJ] of this.live) cJ.fadeMs = 0, cJ.gain = cJ.rel * this.master, cJ.howl.volume(cJ.gain, JJ)
        }
      }
      stopCore() {
        for (const cJ of [...this.core.values()]) {
          var JJ;
          null === (JJ = this.live.get(cJ)) || void 0 === JJ || JJ.howl.stop(cJ)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [JJ, cJ] of [...this.live]) cJ.howl.stop(JJ), this.forget(JJ);
        this.core.clear()
      }
      gameSound(JJ, cJ, ZJ) {
        const FJ = {
          stop: () => (this.live.has(cJ) && JJ.stop(cJ), FJ),
          fade: (JJ, ZJ, UJ) => {
            var eJ, XJ;
            const AJ = this.level > 0 ? ZJ / this.level : ZJ > 0 && null !== (eJ = null === (XJ = this.live.get(cJ)) || void 0 === XJ ? void 0 : XJ.rel) && void 0 !== eJ ? eJ : 0;
            return this.fade(cJ, AJ, UJ, !1), FJ
          },
          rate: ZJ => {
            const UJ = this.live.get(cJ);
            return UJ && (UJ.rate = function(JJ) {
              return JJ > 0 && JJ < 1 / 0 ? JJ : 1
            }(ZJ), JJ.rate(UJ.rate, cJ)), FJ
          },
          getVolume: () => {
            var JJ, ZJ;
            return (null !== (JJ = null === (ZJ = this.live.get(cJ)) || void 0 === ZJ ? void 0 : ZJ.rel) && void 0 !== JJ ? JJ : 0) * this.level
          },
          getRelativeVolume: () => {
            var JJ, ZJ;
            return null !== (JJ = null === (ZJ = this.live.get(cJ)) || void 0 === ZJ ? void 0 : ZJ.rel) && void 0 !== JJ ? JJ : 0
          },
          setRelativeVolume: JJ => (this.setRel(cJ, JJ), FJ),
          setPannerAttr: UJ => {
            if (ZJ && this.live.has(cJ)) {
              const ZJ = {
                ...Mc,
                refDistance: Dc.k
              };
              for (const [JJ, cJ] of Object.entries(UJ)) "number" !== typeof cJ && "string" !== typeof cJ || (ZJ[JJ] = cJ);
              JJ.pannerAttr({
                coneOuterAngle: ZJ.coneOuterAngle
              }, cJ), JJ.pannerAttr(ZJ, cJ)
            }
            return FJ
          },
          setPosition: UJ => (ZJ && this.live.has(cJ) && Number.isFinite(UJ[0] + UJ[1] + UJ[2]) && JJ.pos(UJ[2], UJ[1], UJ[0], cJ), FJ)
        };
        return FJ
      }
      startSpatial(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        const YJ = this.sheet(mc[JJ], !0);
        let hJ = null;
        if (!UJ) {
          if (this.failed.has(YJ)) return null;
          const ZJ = mc[JJ] === Wc ? null : (0, Vc.j)(vc[JJ]),
            FJ = (0, Vc.h)(gc(cJ), Math.sqrt(jJ), qJ);
          if (hJ = new Pc(ZJ, FJ, this.now(), YJ, this.voiceHost), !this.voices.admit(hJ)) return null
        }
        const DJ = this.start(JJ, !0, cJ, ZJ, FJ, UJ);
        return hJ && (hJ.id = DJ.id, hJ.direct = "loaded" === YJ.state() && !YJ._playLock), YJ.pannerAttr({
          coneOuterAngle: 360
        }, DJ.id), YJ.pannerAttr({
          ...Mc,
          refDistance: qJ
        }, DJ.id), YJ.pos(AJ, XJ, eJ, DJ.id), DJ
      }
      aliveVoice(JJ) {
        const cJ = this.live.get(JJ);
        if (!cJ) return;
        const ZJ = cJ.howl._soundById(JJ);
        if (ZJ && !ZJ._ended) return cJ;
        this.forget(JJ)
      }
      earDistSq(JJ, cJ, ZJ) {
        if (!this.posed) return 0;
        const FJ = JJ - this.pose[2],
          UJ = cJ - this.pose[1],
          eJ = ZJ - this.pose[0];
        return FJ * FJ + UJ * UJ + eJ * eJ
      }
      start(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = gc(ZJ),
          AJ = this.sheet(mc[JJ], cJ);
        "unloaded" === AJ.state() && AJ.load();
        const qJ = AJ.play(vc[JJ]),
          jJ = XJ * this.master;
        return AJ.volume(jJ, qJ), this.live.set(qJ, {
          howl: AJ,
          rel: XJ,
          gain: jJ,
          fadeFrom: jJ,
          fadeAt: 0,
          fadeMs: 0,
          rate: UJ,
          handle: FJ,
          spatial: cJ,
          stopTimer: void 0
        }), 0 !== FJ && this.core.set(FJ, qJ), 1 !== UJ && AJ.rate(UJ, qJ), eJ && AJ.loop(!0, qJ), {
          howl: AJ,
          id: qJ
        }
      }
      sheet(JJ, cJ) {
        const ZJ = 2 * JJ + (cJ ? 1 : 0);
        let FJ = this.sheets.get(ZJ);
        if (!FJ) {
          const UJ = this.createHowl(xc[JJ], cJ);
          UJ.on("end", (JJ => {
            UJ.loop(JJ) || this.forget(JJ)
          })), UJ.on("stop", (JJ => {
            this.forget(JJ)
          })), UJ.on("play", (JJ => {
            this.live.has(JJ) && this.started.add(JJ)
          })), UJ.on("loaderror", (JJ => {
            if ("loaded" !== UJ.state()) {
              this.failed.add(UJ);
              for (const [JJ, cJ] of this.live) cJ.howl === UJ && this.forget(JJ)
            } else "number" === typeof JJ && this.forget(JJ)
          })), this.sheets.set(ZJ, UJ), FJ = UJ
        }
        return FJ
      }
      setRel(JJ, cJ) {
        const ZJ = this.live.get(JJ);
        ZJ && (pc(ZJ), ZJ.fadeMs = 0, ZJ.rel = gc(cJ), ZJ.gain = ZJ.rel * this.master, ZJ.howl.volume(ZJ.gain, JJ))
      }
      fade(JJ, cJ, ZJ, FJ) {
        const UJ = this.live.get(JJ);
        if (!UJ) return;
        pc(UJ);
        const {
          howl: eJ
        } = UJ, XJ = this.gainNow(UJ);
        UJ.rel = gc(cJ), UJ.gain = UJ.rel * this.master;
        const AJ = ZJ > 0 ? Math.min(ZJ, 65535) : 0,
          qJ = 0 === AJ || XJ === UJ.gain;
        UJ.fadeMs = qJ ? 0 : AJ, qJ ? eJ.volume(UJ.gain, JJ) : (UJ.fadeFrom = XJ, UJ.fadeAt = this.now(), eJ.fade(XJ, UJ.gain, AJ, JJ)), FJ && (qJ ? eJ.stop(JJ) : UJ.stopTimer = setTimeout((() => {
          UJ.stopTimer = void 0, eJ.stop(JJ)
        }), AJ))
      }
      gainNow(JJ) {
        if (JJ.fadeMs > 0) {
          const cJ = (this.now() - JJ.fadeAt) / JJ.fadeMs;
          if (cJ < 1) return JJ.fadeFrom + (JJ.gain - JJ.fadeFrom) * Math.max(0, cJ);
          JJ.fadeMs = 0
        }
        return JJ.gain
      }
      forget(JJ) {
        this.started.delete(JJ);
        const cJ = this.live.get(JJ);
        cJ && (pc(cJ), this.live.delete(JJ), 0 !== cJ.handle && this.core.get(cJ.handle) === JJ && this.core.delete(cJ.handle))
      }
    }

    function pc(JJ) {
      void 0 !== JJ.stopTimer && (clearTimeout(JJ.stopTimer), JJ.stopTimer = void 0)
    }
    var dc = ZJ(39385),
      zc = ZJ(38071);
    class Nc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.key = JJ, this.model = cJ, this.host = FJ, this.qh = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.hUJ = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.xn = !1, this.qh = Math.max(1, Math.ceil(ZJ)), this.records = new Float32Array(this.qh * Yc.e), this.isDirty = new Uint8Array(this.qh), this.tail = new Uint8Array(this.qh * nJ.rc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(FJ.cmd())
      }
      setOrigin(JJ, cJ, ZJ) {
        this.origin[0] = JJ, this.origin[1] = cJ, this.origin[2] = ZJ
      }
      markDirty(JJ) {
        !this.xn && JJ >= 0 && JJ < this.qh && JJ < nJ.rc.Max && this.Nn(JJ, JJ + 1)
      }
      commit(JJ) {
        if (this.xn) return;
        (JJ = Math.min(Math.max(Math.floor(JJ), 0), this.qh, nJ.rc.Max)) > this.count && this.Nn(this.count, JJ), this.count = JJ;
        const {
          origin: cJ,
          sentOrigin: ZJ,
          dirtyList: FJ
        } = this, UJ = this.hUJ !== JJ, eJ = ZJ[0] !== cJ[0] || ZJ[1] !== cJ[1] || ZJ[2] !== cJ[2];
        if (0 === FJ.length && !UJ && !eJ) return;
        const XJ = this.host.cmd();
        if (!XJ || !this.make(XJ)) return;
        const AJ = FJ.length,
          {
            records: qJ,
            tailView: jJ
          } = this;
        for (let YJ = 0; YJ < AJ; YJ++) {
          const JJ = FJ[YJ],
            cJ = JJ * Yc.e,
            ZJ = YJ * nJ.rc.Bytes,
            UJ = 0 !== qJ[cJ + Yc.f] ? nJ.rc.Hidden : 0;
          jJ.setUint32(ZJ, (JJ | UJ) >>> 0, !0), jJ.setFloat32(ZJ + 4, qJ[cJ], !0), jJ.setFloat32(ZJ + 8, qJ[cJ + 1], !0), jJ.setFloat32(ZJ + 12, qJ[cJ + 2], !0)
        }
        if ((0, nJ.He)(XJ, 0, this.key, JJ, cJ, AJ, this.tailOf(AJ))) {
          for (let JJ = 0; JJ < AJ; JJ++) this.isDirty[FJ[JJ]] = 0;
          FJ.length = 0, this.hUJ = JJ, ZJ[0] = cJ[0], ZJ[1] = cJ[1], ZJ[2] = cJ[2]
        }
      }
      grow(JJ) {
        (JJ = Math.ceil(JJ)) <= this.qh || this.xn || (this.records = (0, zc.e)(this.records, new Float32Array(JJ * Yc.e)), this.isDirty = (0, zc.e)(this.isDirty, new Uint8Array(JJ)), this.tail = new Uint8Array(JJ * nJ.rc.Bytes), this.tailView = new DataView(this.tail.buffer), this.qh = JJ)
      }
      dispose() {
        this.xn || (this.xn = !0, this.host.xn(this, this.made ? this.key : null))
      }
      make(JJ) {
        if (!this.made && JJ) {
          const {
            item: cJ,
            scale: ZJ,
            yaw: FJ
          } = this.model;
          this.made = (0, nJ.Oe)(JJ, 0, this.key, cJ, ZJ, FJ)
        }
        return this.made
      }
      tailOf(JJ) {
        const cJ = JJ * nJ.rc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === cJ || (this.tailCut = this.tail.subarray(0, cJ)), this.tailCut
      }
      Nn(JJ, cJ) {
        const {
          dirtyList: ZJ,
          isDirty: FJ
        } = this;
        for (let UJ = JJ; UJ < cJ; UJ++) 0 === FJ[UJ] && (FJ[UJ] = 1, ZJ.push(UJ))
      }
    }
    var Oc = ZJ(528);
    class Tc {
      constructor(JJ) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: JJ,
          owes: JJ => {
            this.owing.add(JJ)
          },
          settled: (JJ, cJ) => {
            this.owing.delete(JJ), cJ && this.live.delete(JJ)
          }
        }
      }
      create(JJ, cJ) {
        if (ZJ = JJ, !Oc.g.includes(ZJ)) return null;
        var ZJ;
        const FJ = new Cc(++this.keys, YJ.p.indexOf(JJ), cJ, this.host);
        return this.live.add(FJ), FJ
      }
      disposeAll() {
        for (const JJ of [...this.live]) JJ.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const JJ = this.host.cmd();
        for (const cJ of this.owing)
          if (!cJ.sync(JJ)) return
      }
    }
    class Cc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.key = JJ, this.lifeform = cJ, this.scale = ZJ, this.host = FJ, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.xn = !1, this.sync()
      }
      setPose(JJ, cJ) {
        this.xn || (this.feet[0] = JJ[0], this.feet[1] = JJ[1], this.feet[2] = JJ[2], this.yaw = cJ, this.owed |= 2, this.sync())
      }
      setVisible(JJ) {
        this.xn || JJ === this.visible || (this.visible = JJ, this.owed |= 4, this.sync())
      }
      dispose() {
        this.xn || (this.xn = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(JJ) ? (this.host.settled(this, this.xn), !0) : (this.host.owes(this), !1)
      }
      write(JJ) {
        if (!JJ) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, nJ.Xe)(JJ, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const cJ = (2 & this.owed ? nJ.Mc.Pose : 0) | (4 & this.owed ? nJ.Mc.Visible : 0);
        if (0 !== cJ) {
          if (!(0, nJ.Te)(JJ, 0, this.key, cJ, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, nJ.Pe)(JJ, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var uc = ZJ(39839);

    function ic(JJ, cJ, ZJ, FJ) {
      return (0, uc.c)(), (0, nJ.Af)(JJ, cJ, ZJ, FJ)
    }
    var Rc = ZJ(38076),
      Lc = ZJ(39368);
    const ac = [0, 0, 0],
      Bc = [0, 0, 0],
      tc = [0, 0, 0],
      oc = [0, 0, 0],
      lc = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      JZ = [0, 0, 0],
      cZ = [0, 0],
      ZZ = [1, 1, 1],
      FZ = 1 / 3;
    const UZ = hc.h;

    function eZ(JJ) {
      const cJ = hc.d[JJ],
        ZJ = cJ && hc.h[cJ.mainMultiblock];
      return ZJ && {
        main: ZJ,
        x: cJ.compX,
        y: cJ.compY,
        z: cJ.compZ
      }
    }

    function XZ(JJ) {
      if (null === JJ || void 0 === JJ) return nJ.Tc;
      const cJ = +JJ;
      return Number.isInteger(cJ) && cJ >= -2147483648 && cJ <= 2147483647 && String(cJ) === String(JJ) ? cJ : nJ.Tc
    }

    function AZ(JJ, cJ, ZJ) {
      return (0, nJ.Hf)(JJ, 0, cJ, null !== ZJ && void 0 !== ZJ ? ZJ : Number.NaN)
    }
    class qZ {
      constructor(JJ) {
        this.deps = JJ, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Rc.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (JJ => {
          var cJ, ZJ;
          null === (cJ = (ZJ = this.deps).setLocalOptions) || void 0 === cJ || cJ.call(ZJ, JJ)
        })), this.mobModels = new Tc((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          xn: (JJ, cJ) => {
            this.livePools.delete(JJ), null !== cJ && (this.owedFrees.push(cJ), this.flushOwed())
          }
        }, this.api = JJ.api, this.live = JJ.live, this.chunks = JJ.chunks, this.items = JJ.items, this.tables = JJ.tables
      }
      isLocal(JJ) {
        return null !== JJ && void 0 !== JJ && +JJ === this.api.localId
      }
      assertLocal(JJ, cJ) {
        if (!this.isLocal(JJ)) throw new Error(`Attempted to ${cJ} for a player that is not the local player`)
      }
      Om(JJ) {
        const cJ = this.api.Om(JJ);
        if (!cJ) throw new Error(`Entity ${JJ} has no replicated position`);
        return cJ
      }
      checkValid(JJ) {
        return !!this.deps.isSessionLive() && (null === JJ || void 0 === JJ || this.api.checkValid(JJ))
      }
      isAlive(JJ) {
        return !1 !== this.api.isAlive(JJ)
      }
      getItemStat(JJ, cJ, ZJ) {
        return this.isLocal(JJ) || null !== JJ && "Player" === this.api.getEntityType(JJ) ? this.tables.getItemStat(cJ, ZJ) : this.tables.getDefaultItemStat(cJ, ZJ)
      }
      getClientOption(JJ, cJ) {
        return this.assertLocal(JJ, "get a client option"), this.tables.getClientOption(cJ)
      }
      openShop(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(JJ, "open shop"), XJ.i.Uf("showShopFromServer", {
          toggle: cJ,
          WZ: ZJ
        }, !0)
      }
      sendMessage(JJ, cJ, ZJ) {
        this.assertLocal(JJ, "send a message");
        const FJ = "string" === typeof cJ ? [{
          str: cJ,
          style: ZJ
        }] : cJ;
        XJ.i.Uf("chat", {
          content: FJ
        }, !0)
      }
      getEntityType(JJ) {
        return this.api.getEntityType(JJ)
      }
      getEntityName(JJ) {
        const cJ = XZ(JJ);
        return cJ === nJ.Tc ? void 0 : (0, dc.d)(this.api, cJ)
      }
      hasEffect(JJ, cJ) {
        const ZJ = XZ(JJ);
        return ZJ !== nJ.Tc && (0, dc.c)(this.api, ZJ, cJ)
      }
      getMetaInfo(JJ) {
        return this.tables.getMetaInfo(JJ)
      }
      getPlayerDbId(JJ) {
        return this.assertLocal(JJ, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(JJ, cJ, ZJ) {
        if (!this.chunks.dataCleared(JJ, cJ, ZJ)) return (0, dc.b)(this.api, JJ, cJ, ZJ)
      }
      fK(JJ, cJ, ZJ, FJ) {
        this.setBlockId(JJ, cJ, ZJ, this.tables.getItemId(FJ))
      }
      setOtherEntitySetting(JJ, cJ, ZJ, FJ) {
        if (!this.isLocal(JJ)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(nJ.cd, ZJ)) throw new Error(`Unknown other-entity setting ${ZJ}`);
        const UJ = nJ.cd[ZJ],
          eJ = XZ(cJ);
        if (eJ === nJ.Tc || !this.deps.beforeWrite()) return;
        const XJ = (0, kJ.e)(FJ);
        if (XJ.length > 16384) throw new Error(`The other-entity setting ${ZJ}'s value is over 16384 bytes`);
        const AJ = this.api.memoryView(Uint8Array, this.api.scratch(), XJ.length, "set_other_entity_setting's value");
        AJ && (AJ.set(XJ), this.api.queries.setOtherEntitySetting(eJ, UJ, XJ.length))
      }
      getPositionView(JJ) {
        return this.live.position(+JJ)
      }
      readDrawnPosition(JJ, cJ) {
        return this.api.readDrawnPosition(XZ(JJ), cJ)
      }
      getDrawnHeading(JJ) {
        const cJ = XZ(JJ),
          ZJ = (cJ === nJ.Tc ? 0 : this.api.queries.directorEntity(cJ)) >= nJ.mb.BYTES ? this.api.memoryData(this.api.scratch(), nJ.mb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!ZJ) return null;
        if (1 === nJ.mb.headingIsDrawn(ZJ, 0)) return nJ.mb.heading(ZJ, 0);
        const FJ = this.api.apiView;
        return this.isLocal(JJ) && 0 === (nJ.s.playerFlags(FJ, 0) & nJ.Ad.FreeCam) ? nJ.s.heading(FJ, 0) : null
      }
      getLocalPlayerMovement() {
        const JJ = nJ.s.playerFlags(this.api.apiView, 0);
        return 0 === (JJ & nJ.Ad.Replay) && this.api.readDrawnPosition(this.api.localId, tc) ? {
          onGround: 0 !== (JJ & nJ.Ad.OnGround),
          jumpHeld: 0 !== (JJ & nJ.Ad.JumpHeld)
        } : null
      }
      WcJ(JJ) {
        return this.isLocal(JJ) ? this.items.hj() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var JJ, cJ;
        return "Gun" === (null === (JJ = this.aliveHeld()) || void 0 === JJ || null === (cJ = JJ.typeObj) || void 0 === cJ ? void 0 : cJ.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.hj()
      }
      isCrosshairShown() {
        var JJ, cJ;
        const ZJ = FJ.d.get("crosshairShownOverride");
        if (null !== ZJ) return ZJ;
        const UJ = null === (JJ = this.aliveHeld()) || void 0 === JJ ? void 0 : JJ.typeObj,
          eJ = "Gun" === (null === UJ || void 0 === UJ ? void 0 : UJ.type),
          XJ = eJ || !0 === (null === UJ || void 0 === UJ ? void 0 : UJ.showsAimingUi),
          AJ = 0 === (nJ.s.playerFlags(this.api.apiView, 0) & nJ.Ad.ZoomFirstPerson),
          qJ = null !== (cJ = this.tables.getClientOption("gunshotOrigin")) && void 0 !== cJ ? cJ : null;
        return (0, sc.d)({
          gun: eJ,
          aimable: XJ
        }, AJ, (0, nc.e)(), qJ)
      }
      setCrosshairShown(JJ) {
        FJ.d.set({
          crosshairShownOverride: JJ
        })
      }
      getInventoryFreeSlotCount(JJ) {
        return this.isLocal(JJ) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(JJ) {
        return this.isLocal(JJ) ? this.items.selectedSlot : null
      }
      getItemSlot(JJ, cJ) {
        return this.isLocal(JJ) ? this.items.slot(cJ) : null
      }
      swapInventorySlots(JJ, cJ) {
        return this.items.swap(JJ, cJ)
      }
      isPlayerCrouching(JJ) {
        if (this.isLocal(JJ)) return 0 !== (nJ.s.playerFlags(this.api.apiView, 0) & nJ.Ad.Crouching);
        const cJ = XZ(JJ);
        return cJ !== nJ.Tc && 1 === this.api.queries.entityCrouching(cJ)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (nJ.s.playerFlags(this.api.apiView, 0) & nJ.Ad.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.fJJ()
      }
      getActionRay() {
        const JJ = this.api.apiView;
        for (let cJ = 0; cJ < 3; cJ++) lc.origin[cJ] = nJ.s.MJJ(JJ, 0, cJ), lc.direction[cJ] = nJ.s.actionDir(JJ, 0, cJ);
        return lc
      }
      canModifyBlockAt(JJ, cJ, ZJ) {
        return 1 === this.api.queries.canModify(JJ, cJ, ZJ)
      }
      isSolidToPlayerBlockId(JJ) {
        return this.tables.isSolidBlockId(JJ) && !this.chunks.isWalkThrough(JJ)
      }
      blockNameToBlockId(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(JJ, cJ)
      }
      blockIdToBlockName(JJ) {
        return this.tables.nameOfId(JJ)
      }
      lJJ(JJ, cJ, ZJ, FJ, UJ) {
        return 1 === this.api.queries.terrainBlocked(FJ, JJ, cJ, ZJ, XZ(null !== UJ && void 0 !== UJ ? UJ : null))
      }
      getChunkVersion(JJ, cJ, ZJ) {
        return this.chunks.version(JJ, cJ, ZJ)
      }
      scanBlocks(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        return this.chunks.scan(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ)
      }
      isBlockInLoadedChunk(JJ, cJ, ZJ) {
        return this.chunks.isLoaded(JJ, cJ, ZJ)
      }
      getBlockId(JJ, cJ, ZJ) {
        return this.chunks.EA(JJ, cJ, ZJ)
      }
      playSound(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(JJ)) return null;
        const XJ = this.playSoundFrom(cJ, ZJ, UJ, eJ);
        return 1 === FJ ? XJ : XJ.rate(FJ)
      }
      playSoundFrom(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        const XJ = this.deps.playSound;
        if (!XJ) return Ic.c;
        const AJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.lF,
          qJ = null !== (UJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.maxHearDist) && void 0 !== UJ ? UJ : Dc.g,
          jJ = null !== (eJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.refDistance) && void 0 !== eJ ? eJ : Dc.k;
        let YJ = null;
        if (Array.isArray(AJ)) ac[0] = AJ[0], ac[1] = AJ[1], ac[2] = AJ[2], YJ = ac;
        else if (void 0 !== AJ && null !== AJ) {
          const JJ = XZ(AJ);
          if (!this.api.isLocal(JJ)) {
            if (!this.api.readPosition(JJ, ac)) return Ic.c;
            YJ = ac
          }
        }
        return XJ(JJ, cJ, YJ, YJ && this.ear(), qJ, jJ, FJ)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Bc)) Bc[1] += bc;
        else {
          const JJ = this.api.apiView;
          if (0 === nJ.s.viewProj(JJ, 0, 3) && 0 === nJ.s.viewProj(JJ, 0, 7) && 0 === nJ.s.viewProj(JJ, 0, 11)) return null;
          for (let cJ = 0; cJ < 3; cJ++) Bc[cJ] = nJ.s.eye(JJ, 0, cJ)
        }
        return Number.isFinite(Bc[0] + Bc[1] + Bc[2]) ? Bc : null
      }
      setBlockId(JJ, cJ, ZJ, FJ) {
        if (!Number.isInteger(FJ) || FJ < 0 || FJ > 65535) throw new Error(`Invalid block id ${FJ}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(JJ, cJ, ZJ)) return;
        const UJ = Math.floor(JJ),
          eJ = Math.floor(cJ),
          XJ = Math.floor(ZJ),
          AJ = this.predictedCells(UJ, eJ, XJ, FJ);
        if (1 === this.api.queries.fK(UJ, eJ, XJ, FJ)) {
          for (let JJ = 0; JJ < AJ.length; JJ += 5) this.chunks.setOverlay(AJ[JJ], AJ[JJ + 1], AJ[JJ + 2], AJ[JJ + 3], 1 === AJ[JJ + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(JJ, cJ) {
        return this.deps.particles.create(JJ, cJ)
      }
      playParticleEffect(JJ) {
        this.deps.particles.playEffect(JJ)
      }
      burstParticlePreset(JJ, cJ, ZJ) {
        this.deps.particles.burstPreset(JJ, cJ, ZJ)
      }
      createGameMesh(JJ, cJ, ZJ) {
        const FJ = ++this.meshKeys,
          UJ = this.deps.cmd();
        if (!UJ) return FJ;
        const {
          look: eJ,
          colour: XJ
        } = function(JJ) {
          switch (JJ.kind) {
            case void 0:
            case "flatEmissive":
              return JJ.onTop ? {
                look: nJ.Xb.FlatOnTop,
                colour: [...JJ.rgb, JJ.alpha]
              } : JJ.opaque ? {
                look: nJ.Xb.FlatOpaque,
                colour: [...JJ.rgb, 1]
              } : {
                look: nJ.Xb.Flat,
                colour: [...JJ.rgb, JJ.alpha]
              };
            case "chevronPath":
              return {
                look: nJ.Xb.Chevrons, colour: [...(0, Gc.d)(JJ.colour), JJ.alpha]
              };
            case "furnaceFire":
              return {
                look: nJ.Xb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(cJ), AJ = Math.floor(JJ.positions.length / 3), qJ = function(JJ, cJ) {
          const ZJ = Math.floor(JJ.positions.length / 3),
            FJ = JJ.indices.length,
            UJ = ZJ * (cJ ? 5 : 3),
            eJ = new Uint8Array(4 * (UJ + FJ)),
            XJ = new DataView(eJ.buffer);
          for (let jJ = 0; jJ < 3 * ZJ; jJ++) XJ.setFloat32(4 * jJ, JJ.positions[jJ], !0);
          if (cJ) {
            var AJ;
            const cJ = null !== (AJ = JJ.uvs) && void 0 !== AJ ? AJ : [];
            for (let JJ = 0; JJ < 2 * ZJ; JJ++) {
              var qJ;
              XJ.setFloat32(4 * (3 * ZJ + JJ), null !== (qJ = cJ[JJ]) && void 0 !== qJ ? qJ : 0, !0)
            }
          }
          for (let jJ = 0; jJ < FJ; jJ++) XJ.setUint32(4 * (UJ + jJ), JJ.indices[jJ], !0);
          return eJ
        }(JJ, (0, Yc.j)(cJ));
        return (0, nJ.De)(UJ, 0, FJ, eJ, XJ, ZJ, AJ, JJ.indices.length, qJ) && this.liveMeshes.add(FJ), FJ
      }
      setGameMesh(JJ, cJ) {
        var ZJ;
        const FJ = this.deps.cmd();
        if (!FJ) return;
        let UJ = 0;
        cJ.anchor && (UJ |= nJ.Zb.Anchor, JZ[0] = cJ.anchor[0], JZ[1] = cJ.anchor[1], JZ[2] = cJ.anchor[2]), void 0 !== cJ.visible && (UJ |= nJ.Zb.Visible), cJ.uvOffset && (UJ |= nJ.Zb.UvOffset, cZ[0] = cJ.uvOffset[0], cZ[1] = cJ.uvOffset[1]);
        const eJ = null !== (ZJ = cJ.visibility) && void 0 !== ZJ ? ZJ : 1;
        void 0 !== cJ.visibility && (UJ |= nJ.Zb.Visibility), cJ.scale && (UJ |= nJ.Zb.Scale, ZZ[0] = cJ.scale[0], ZZ[1] = cJ.scale[1], ZZ[2] = cJ.scale[2]), 0 !== UJ && (0, nJ.Ge)(FJ, 0, JJ, UJ, cJ.visible ? 1 : 0, JZ, cZ, eJ, ZZ)
      }
      disposeGameMesh(JJ) {
        const cJ = this.deps.cmd();
        cJ && !(0, nJ.Ee)(cJ, 0, JJ) || this.liveMeshes.delete(JJ)
      }
      hasPackModel(JJ) {
        var cJ, ZJ, FJ;
        return null !== (cJ = null === (ZJ = (FJ = this.deps).hasPackModel) || void 0 === ZJ ? void 0 : ZJ.call(FJ, JJ)) && void 0 !== cJ && cJ
      }
      disposeGameOutput() {
        const JJ = JJ => {
          try {
            JJ()
          } catch (cJ) {
            console.error("Error freeing client game output", cJ)
          }
        };
        for (const cJ of [...this.liveMeshes]) JJ((() => {
          this.disposeGameMesh(cJ)
        }));
        for (const cJ of [...this.livePools]) JJ((() => {
          cJ.dispose()
        }));
        JJ((() => {
          this.mobModels.disposeAll()
        })), JJ((() => {
          this.setGroundArrowStyle(null)
        })), JJ((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), JJ((() => {
          this.setCrosshairShown(null)
        })), JJ((() => {
          this.cameraTurn.dispose()
        })), JJ((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(JJ, cJ) {
        const ZJ = this.tables.idOf(JJ.item);
        if (void 0 === ZJ) return null;
        const FJ = new Nc(++this.poolKeys, {
          item: ZJ,
          scale: JJ.scale,
          yaw: JJ.yaw
        }, cJ, this.poolHost);
        return this.livePools.add(FJ), FJ
      }
      createMobModel(JJ, cJ) {
        return this.mobModels.create(JJ, cJ)
      }
      setRouteChevrons(JJ) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !JJ || 0 === JJ.cells.length) return;
        const cJ = `${JJ.colour} ${JJ.alpha}`;
        cJ !== this.routeLook && (this.routeLook = cJ, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(JJ) {
          const [cJ, ZJ, FJ] = JJ[0].pos, UJ = [], eJ = [], XJ = [];
          return JJ.forEach(((JJ, AJ) => {
            let {
              pos: qJ,
              way: [jJ, YJ]
            } = JJ;
            const hJ = qJ[0] - cJ + .5,
              DJ = qJ[1] - ZJ + .04,
              sJ = qJ[2] - FJ + .5,
              [nJ, GJ] = [.35 * -YJ, .35 * jJ],
              [fJ, xJ] = [AJ * FZ, (AJ + 1) * FZ],
              rJ = UJ.length / 3;
            UJ.push(hJ - .5 * jJ + nJ, DJ, sJ - .5 * YJ + GJ), UJ.push(hJ - .5 * jJ - nJ, DJ, sJ - .5 * YJ - GJ), UJ.push(hJ + .5 * jJ + nJ, DJ, sJ + .5 * YJ + GJ), UJ.push(hJ + .5 * jJ - nJ, DJ, sJ + .5 * YJ - GJ), eJ.push(0, fJ, 1, fJ, 0, xJ, 1, xJ), XJ.push(rJ, rJ + 1, rJ + 2, rJ + 1, rJ + 3, rJ + 2)
          })), {
            positions: UJ,
            uvs: eJ,
            indices: XJ
          }
        }(JJ.cells), {
          kind: "chevronPath",
          colour: JJ.colour,
          alpha: JJ.alpha
        }, JJ.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(JJ) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(JJ, 250) / 1e3 * 1.2 * FZ) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(JJ) {
        this.pendingStyle = JJ, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const JJ = this.owedFrees;
        if (0 === JJ.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const cJ = this.deps.cmd();
        if (!cJ) return JJ.length = 0, void(this.pendingFar = void 0);
        let ZJ = 0;
        for (; ZJ < JJ.length && (0, nJ.Le)(cJ, 0, JJ[ZJ]);) ZJ++;
        JJ.splice(0, ZJ);
        const FJ = this.pendingStyle;
        if (void 0 !== FJ) {
          (FJ ? (0, nJ.Lf)(cJ, 0, FJ.width, FJ.alpha, 1, FJ.endAtSolidFace ? 1 : 0) : (0, nJ.Lf)(cJ, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const UJ = this.pendingFar;
        void 0 !== UJ && (0, nJ.Ff)(cJ, 0, null !== UJ && void 0 !== UJ ? UJ : 0, null === UJ ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(JJ, cJ) {
        const ZJ = this.deps.cmd(),
          FJ = XZ(JJ);
        ZJ && FJ !== nJ.Tc && (0, nJ.Uf)(ZJ, 0, FJ, cJ)
      }
      setFacingTolerance(JJ, cJ) {
        const ZJ = this.deps.cmd(),
          FJ = XZ(JJ);
        ZJ && FJ !== nJ.Tc && AZ(ZJ, FJ, cJ)
      }
      forEachEntity(JJ) {
        const {
          api: cJ
        } = this;
        for (let ZJ = 0; ZJ < cJ.idStr.length; ZJ++) {
          const FJ = cJ.idStr[ZJ];
          null === FJ || QJ(cJ.kinds[ZJ]) || JJ(FJ)
        }
      }
      getEntityInfo(JJ) {
        return this.deps.entityInfo.get(JJ)
      }
      isEntityInteractable(JJ) {
        const cJ = XZ(JJ);
        return cJ !== nJ.Tc && 1 === this.api.queries.entityInteractable(cJ)
      }
      isLocalPlayer(JJ) {
        return this.isLocal(JJ)
      }
      getLineOwner(JJ) {
        var cJ;
        const ZJ = null === (cJ = this.deps.entityInfo.get(JJ)) || void 0 === cJ ? void 0 : cJ.meshOpts;
        if (!ZJ) return null;
        try {
          const {
            lineToEId: JJ
          } = JSON.parse(ZJ);
          return null !== JJ && void 0 !== JJ ? JJ : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const JJ = this.api.apiView;
        return oc[0] = nJ.s.eye(JJ, 0, 0), oc[1] = nJ.s.eye(JJ, 0, 1), oc[2] = nJ.s.eye(JJ, 0, 2), oc
      }
      getCameraFar() {
        return nJ.s.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(JJ) {
        null !== JJ && (this.farSet = !0), this.pendingFar = JJ, this.flushOwed()
      }
      turnCamera(JJ, cJ) {
        this.cameraTurn.turn(JJ, cJ)
      }
      clearPickupDelay(JJ) {
        const cJ = this.deps.cmd(),
          ZJ = XZ(JJ);
        cJ && ZJ !== nJ.Tc && (0, nJ.se)(cJ, 0, ZJ)
      }
      sendChat(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = this.deps.sendCmd();
        ZJ && ic(ZJ, 0, Lc.d.Chat, (0, kJ.e)((0, Lc.k)({
          JY: JJ,
          cY: cJ
        })))
      }
      sendCommand(JJ) {
        JJ.length <= 119 && this.sendChat(`/${JJ}`)
      }
      predictedCells(JJ, cJ, ZJ, FJ) {
        const UJ = this.chunks,
          eJ = [],
          XJ = (JJ, cJ, ZJ, FJ, UJ) => {
            eJ.push(JJ, cJ, ZJ, FJ, this.tables.blockRootId(UJ) === this.tables.blockRootId(FJ) ? 0 : 1)
          },
          AJ = UJ.EA(JJ, cJ, ZJ),
          qJ = eZ(AJ);
        if (qJ) {
          const [FJ, eJ, jJ] = [JJ - qJ.x, cJ - qJ.y, ZJ - qJ.z], YJ = UZ[UJ.EA(FJ, eJ, jJ)], hJ = null === YJ || void 0 === YJ ? void 0 : YJ.positions.some((JJ => JJ.id === AJ && JJ.x === qJ.x && JJ.y === qJ.y && JJ.z === qJ.z));
          for (const JJ of (hJ && YJ ? YJ : qJ.main).positions) UJ.EA(FJ + JJ.x, eJ + JJ.y, jJ + JJ.z) === JJ.id && XJ(FJ + JJ.x, eJ + JJ.y, jJ + JJ.z, 0, JJ.id)
        }
        const jJ = eZ(FJ);
        if (jJ)
          for (const hJ of jJ.main.positions) {
            const [FJ, eJ, AJ] = [JJ + hJ.x - jJ.x, cJ + hJ.y - jJ.y, ZJ + hJ.z - jJ.z];
            XJ(FJ, eJ, AJ, hJ.id, UJ.EA(FJ, eJ, AJ))
          } else XJ(JJ, cJ, ZJ, FJ, AJ);
        const YJ = this.tables;
        if ((0 !== YJ.attachedTopOf(AJ) || 0 !== YJ.attachedTopOf(FJ)) && UJ.isLoaded(JJ, cJ + 1, ZJ)) {
          let qJ = UJ.EA(JJ, cJ + 1, ZJ);
          for (let FJ = 0; FJ < eJ.length; FJ += 5) eJ[FJ] === JJ && eJ[FJ + 1] === cJ + 1 && eJ[FJ + 2] === ZJ && (qJ = eJ[FJ + 3]);
          const jJ = this.attachedTopWrite(AJ, FJ, qJ);
          void 0 !== jJ && XJ(JJ, cJ + 1, ZJ, jJ, qJ)
        }
        return eJ
      }
      attachedTopWrite(JJ, cJ, ZJ) {
        const FJ = this.tables,
          UJ = FJ.attachedTopOf(JJ),
          eJ = FJ.attachedTopOf(cJ),
          XJ = 0 !== UJ && 0 !== ZJ && FJ.blockRootId(ZJ) === FJ.blockRootId(UJ);
        return 0 !== UJ && 0 !== eJ && FJ.blockRootId(JJ) === FJ.blockRootId(cJ) ? XJ && ZJ !== eJ ? eJ : void 0 : 0 === eJ || !XJ && 0 !== ZJ ? XJ ? 0 : void 0 : eJ
      }
    }
    const jZ = nJ.nc + nJ.pc * nJ.wc.BYTES,
      YZ = 2147483647,
      hZ = new TextDecoder,
      DZ = new TextEncoder,
      sZ = Object.freeze({
        jj: 0,
        fA: null,
        amountAddedToSlot: 0
      }),
      nZ = new Proxy({}, {
        get: () => () => nJ.bd
      });

    function GZ(JJ) {
      return Number.isInteger(JJ) && JJ >= 0 && JJ <= 65535
    }

    function fZ(JJ) {
      return Number.isInteger(JJ) && JJ >= 0 && JJ <= 4294967295
    }
    class xZ {
      constructor(JJ) {
        this.deps = JJ, this.JZ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(nJ.pc), this.ids = new Uint16Array(nJ.pc), this.amounts = new Uint16Array(nJ.pc), this.attrRead = new Float64Array(nJ.pc).fill(-1), this.stale = new Uint16Array(nJ.pc), this.staleVersion = new Uint32Array(nJ.pc), this.instances = new Uint32Array(nJ.pc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(JJ) {
        var cJ;
        return Number.isInteger(JJ) && JJ >= 0 && JJ < this.len && 0 !== this.ids[JJ] && null !== (cJ = this.facades[JJ]) && void 0 !== cJ ? cJ : null
      }
      hj() {
        return this.slot(this.selected)
      }
      playerItems() {
        const JJ = [];
        for (let cJ = 0; cJ < Math.min(nJ.hd, this.len); cJ++) JJ.push(this.slot(cJ));
        return JJ
      }
      freeSlots() {
        let JJ = 0;
        for (let cJ = 0; cJ < Math.min(nJ.hd - nJ.j, this.len); cJ++) 0 === this.ids[cJ] && JJ++;
        return JJ
      }
      amountOf(JJ) {
        let cJ = 0;
        for (let FJ = 0; FJ < Math.min(nJ.hd, this.len); FJ++) {
          const UJ = this.slot(FJ);
          var ZJ;
          if ((null === UJ || void 0 === UJ ? void 0 : UJ.name) === JJ) cJ += null !== (ZJ = UJ.amount) && void 0 !== ZJ ? ZJ : 1
        }
        return cJ
      }
      instance(JJ) {
        var cJ;
        return null !== (cJ = this.instances[JJ]) && void 0 !== cJ ? cJ : 0
      }
      watch(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      touch() {
        this.version++
      }
      flush(JJ) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const ZJ of [...this.listeners]) try {
            ZJ()
          } catch (cJ) {
            JJ(cJ)
          }
        }
      }
      chestOpened(JJ, cJ, ZJ) {
        this.JZ[0] = JJ, this.JZ[1] = cJ, this.JZ[2] = ZJ, this.version++
      }
      refresh() {
        const JJ = this.deps.api.apiView,
          cJ = nJ.s.inventoryViewPtr(JJ, 0),
          ZJ = nJ.s.inventoryVersion(JJ, 0),
          FJ = nJ.s.selectedSlot(JJ, 0);
        FJ !== this.selected && (this.selected = FJ, this.version++);
        const UJ = nJ.s.slotIcon(JJ, 0);
        if (UJ !== this.slotIconId && (this.slotIconId = UJ, this.iconChanged = !0), cJ === this.viewPtr && ZJ === this.viewVersion) return;
        this.viewPtr = cJ, this.viewVersion = ZJ;
        const eJ = this.deps.api.memoryData(cJ, jZ, 4, "the inventory view"),
          XJ = eJ ? Math.min(eJ.getUint32(0, !0), nJ.pc) : 0;
        XJ !== this.len && (this.len = XJ, this.version++);
        let AJ = 0;
        for (let qJ = 0; qJ < nJ.pc; qJ++) {
          const JJ = nJ.nc + qJ * nJ.wc.BYTES,
            cJ = null !== eJ && qJ < XJ ? nJ.wc.item(eJ, JJ) : 0;
          if (0 === cJ || null === eJ) {
            0 !== this.ids[qJ] && (this.ids[qJ] = 0, this.attrRead[qJ] = -1, this.instances[qJ]++, this.version++);
            continue
          }
          const ZJ = nJ.wc.amount(eJ, JJ),
            FJ = nJ.wc.attrVersion(eJ, JJ);
          cJ === this.ids[qJ] && ZJ === this.amounts[qJ] || this.fill(qJ, cJ, ZJ), FJ !== this.attrRead[qJ] && (this.stale[AJ] = qJ, this.staleVersion[AJ] = FJ, AJ++)
        }
        AJ > 0 && this.fetchAttributes(AJ)
      }
      fill(JJ, cJ, ZJ) {
        const {
          tables: FJ
        } = this.deps, UJ = cJ !== this.ids[JJ];
        let eJ = this.facades[JJ];
        eJ || (eJ = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[JJ] = eJ), UJ && (eJ.name = FJ.nameOfId(cJ), eJ.typeObj = FJ.itemType(cJ), eJ.attributes = {
          customAttributes: {}
        }, this.attrRead[JJ] = -1, this.instances[JJ]++), eJ.amount = 0 === ZJ ? null : ZJ, this.ids[JJ] = cJ, this.amounts[JJ] = ZJ, this.version++
      }
      fetchAttributes(JJ) {
        const {
          api: cJ,
          onError: ZJ
        } = this.deps, FJ = cJ.memoryView(Uint16Array, cJ.scratch(), JJ, "item_attributes_batch's slots");
        if (!FJ) return void this.markRead(JJ);
        FJ.set(this.stale.subarray(0, JJ));
        const UJ = cJ.queries.itemAttributesBatch(JJ),
          eJ = 4294967295 === UJ ? null : cJ.memoryData(cJ.scratch(), UJ, 4, "item_attributes_batch's answer");
        if (!eJ) return void this.markRead(JJ);
        const XJ = new Uint8Array(eJ.buffer, eJ.byteOffset, UJ);
        for (let qJ = 0; qJ + 8 <= UJ;) {
          const JJ = eJ.getUint16(qJ, !0),
            cJ = eJ.getUint32(qJ + 4, !0),
            FJ = XJ.subarray(qJ + 8, qJ + 8 + cJ);
          qJ += 8 + (0, DJ.he)(cJ);
          const UJ = this.facades[JJ];
          if (UJ && 0 !== this.ids[JJ] && 0 !== cJ) {
            try {
              UJ.attributes = JSON.parse(hZ.decode(FJ))
            } catch (AJ) {
              ZJ(AJ)
            }
            this.version++
          }
        }
        this.markRead(JJ)
      }
      markRead(JJ) {
        for (let cJ = 0; cJ < JJ; cJ++) this.attrRead[this.stale[cJ]] = this.staleVersion[cJ]
      }
      swap(JJ, cJ) {
        return GZ(JJ) && GZ(cJ) && this.settle(this.queries().invSwap(JJ, cJ))
      }
      move(JJ, cJ, ZJ) {
        return GZ(JJ) && GZ(cJ) && fZ(ZJ) && this.settle(this.queries().invMove(JJ, cJ, ZJ))
      }
      quickMove(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        if (!GZ(JJ) || !GZ(cJ) || !GZ(ZJ) || null !== FJ && !fZ(FJ)) return null;
        const XJ = this.queries().invQuickMove(JJ, cJ, ZJ, null === FJ ? -1 : Math.min(FJ, YZ)),
          AJ = XJ === nJ.bd ? nJ.Ib : null !== (UJ = null === (eJ = this.extras()) || void 0 === eJ ? void 0 : eJ[1]) && void 0 !== UJ ? UJ : nJ.Ib;
        return this.settle(XJ), AJ === nJ.Ib ? null : AJ
      }
      remove(JJ, cJ, ZJ) {
        return GZ(JJ) && fZ(cJ) && this.settle(this.queries().invRemove(JJ, cJ, ZJ ? 1 : 0))
      }
      selectSlot(JJ) {
        return GZ(JJ) && this.settle(this.queries().selectSlot(JJ))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(JJ, cJ, ZJ) {
        if (!GZ(JJ) || !Number.isInteger(cJ)) return !1;
        const [FJ, UJ, eJ] = ZJ;
        return this.settle(this.queries().invEnchant(JJ, cJ, Math.floor(FJ), Math.floor(UJ), Math.floor(eJ)))
      }
      craft(JJ, cJ, ZJ) {
        let FJ;
        try {
          FJ = this.deps.tables.getItemId(JJ)
        } catch {
          return sZ
        }
        if (!GZ(cJ) || null !== ZJ && (Number.isNaN(ZJ) || ZJ < 0)) return sZ;
        const UJ = null === ZJ || ZJ > YZ ? -1 : Math.floor(ZJ),
          eJ = this.queries().craft(FJ, cJ, UJ);
        let XJ = sZ;
        const AJ = eJ === nJ.bd ? null : this.extras();
        if (AJ) {
          const [JJ, cJ, ZJ] = AJ;
          XJ = {
            jj: JJ,
            fA: cJ === nJ.Ib ? null : cJ,
            amountAddedToSlot: ZJ
          }
        }
        return this.settle(eJ), XJ
      }
      salvage(JJ, cJ, ZJ) {
        let FJ;
        try {
          FJ = this.deps.tables.getItemId(cJ)
        } catch {
          return !1
        }
        return GZ(JJ) && Number.isInteger(ZJ) && this.settle(this.queries().salvage(JJ, FJ, Math.max(Math.min(ZJ, YZ), -YZ)))
      }
      craftingView(JJ, cJ, ZJ) {
        var FJ;
        if (this.stopped) return null;
        const {
          api: UJ,
          onError: eJ
        } = this.deps, XJ = JJ ? DZ.encode(JJ) : null;
        if (null !== XJ) {
          if (XJ.length > 1024) return eJ(new Error(`The crafting station ${JJ}'s name is over 1024 bytes`)), null;
          const cJ = UJ.memoryView(Uint8Array, UJ.scratch(), XJ.length, "crafting_view's station");
          if (!cJ) return null;
          cJ.set(XJ)
        }
        const AJ = GZ(cJ) && GZ(ZJ),
          qJ = UJ.queries.craftingView(null !== (FJ = null === XJ || void 0 === XJ ? void 0 : XJ.length) && void 0 !== FJ ? FJ : 0, AJ ? cJ : 0, AJ ? ZJ : 0);
        return qJ < nJ.hb.BYTES ? (UJ.reportCorruption(`crafting_view's answer of ${qJ} bytes`), null) : UJ.memoryData(UJ.scratch(), qJ, 1, "crafting_view's answer")
      }
      queries() {
        var JJ, cJ;
        return !1 === (null === (JJ = (cJ = this.deps).beforeOp) || void 0 === JJ ? void 0 : JJ.call(cJ)) ? (this.stopped = !0, nZ) : this.deps.api.queries
      }
      extras() {
        const {
          api: JJ
        } = this.deps;
        return JJ.memoryView(Uint32Array, JJ.scratch(), 3, "a sync query's extra words")
      }
      settle(JJ) {
        if (JJ === nJ._c)(0, uc.c)();
        else if (JJ !== nJ.bd) {
          const cJ = this.deps.cmd();
          cJ && function(JJ, cJ, ZJ) {
            return (0, uc.c)(), (0, nJ.cg)(JJ, cJ, ZJ)
          }(cJ, 0, JJ) || this.deps.onError(new Error(`Sync op ${JJ}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), JJ !== nJ.bd
      }
    }
    const rZ = 1 / .6,
      vZ = [0, 1, 0],
      mZ = [0, 0, 0],
      QZ = new Uint8Array(0),
      EZ = 1.2 * fc.c.Av,
      VZ = new TextEncoder,
      KZ = [0, 0, 0],
      yZ = [0, 0, 0],
      SZ = new Map;

    function IZ(JJ) {
      let cJ = SZ.get(JJ);
      return cJ || (SZ.size >= 64 && SZ.clear(), cJ = VZ.encode(`{"emitRate":${JJ}}`), SZ.set(JJ, cJ)), cJ
    }

    function MZ(JJ) {
      return Number.isFinite(JJ) && JJ > 0 ? JJ : 0
    }

    function bZ(JJ, cJ) {
      for (let ZJ = 0; ZJ < 3; ZJ++) {
        const FJ = Math.abs(cJ[ZJ]);
        KZ[ZJ] = JJ[ZJ] - FJ, yZ[ZJ] = 2 * FJ
      }
      return Number.isFinite(KZ[0] + KZ[1] + KZ[2] + yZ[0] + yZ[1] + yZ[2])
    }

    function wZ(JJ, cJ) {
      return "pos1" === JJ || "pos2" === JJ ? void 0 : cJ
    }

    function WZ(JJ, cJ, ZJ) {
      return JJ.length > nJ.xd.MaxOpts ? (ZJ(new Error(`${cJ}'s particle opts are over ${nJ.xd.MaxOpts} bytes of JSON`)), null) : JJ
    }
    const gZ = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class HZ {
      constructor(JJ) {
        this.deps = JJ, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(JJ, cJ) {
        var ZJ;
        const FJ = this.sink(),
          UJ = null !== (ZJ = cJ.half) && void 0 !== ZJ ? ZJ : mZ;
        if (!FJ || this.live >= nJ.xd.MaxLiveKeys || this.nextKey > nJ.xd.MaxKey || !bZ(cJ.pos, UJ)) return gZ;
        const eJ = this.nextKey,
          XJ = WZ(function(JJ) {
            var cJ, ZJ, FJ;
            const UJ = JSON.stringify({
              texture: "string" === typeof JJ.texture ? JJ.texture : "smokePuff",
              qh: JJ.qh,
              minLifeTime: JJ.minLifeTime,
              maxLifeTime: JJ.maxLifeTime,
              minSize: JJ.minSize,
              maxSize: JJ.maxSize,
              minEmitPower: JJ.minEmitPower,
              maxEmitPower: JJ.maxEmitPower,
              emitRate: MZ(JJ.emitRate),
              gravity: null !== (cJ = JJ.gravity) && void 0 !== cJ ? cJ : mZ,
              dir1: null !== (ZJ = JJ.dir1) && void 0 !== ZJ ? ZJ : vZ,
              dir2: null !== (FJ = JJ.dir2) && void 0 !== FJ ? FJ : vZ,
              colorGradients: JJ.colorGradients,
              blendMode: JJ.blendMode
            });
            return VZ.encode(UJ)
          }(JJ), "createParticles", this.deps.onError);
        return XJ && (0, nJ.bf)(FJ, 0, eJ, 0, nJ.xd.PresetNone, 0, KZ, yZ, XJ) ? (this.nextKey++, this.live++, this.started = !0, new PZ(this, this.session, eJ, JJ, UJ)) : gZ
      }
      playEffect(JJ) {
        const cJ = this.sink(),
          {
            pos1: ZJ,
            pos2: FJ
          } = JJ;
        if (!cJ || !ZJ || !FJ) return;
        for (let eJ = 0; eJ < 3; eJ++) KZ[eJ] = Math.min(ZJ[eJ], FJ[eJ]), yZ[eJ] = Math.abs(FJ[eJ] - ZJ[eJ]);
        if (!Number.isFinite(KZ[0] + KZ[1] + KZ[2] + yZ[0] + yZ[1] + yZ[2])) return;
        const UJ = WZ(VZ.encode(JSON.stringify(JJ, wZ)), "playParticleEffect", this.deps.onError);
        UJ && (0, nJ.Ze)(cJ, 0, 0, nJ.xd.PresetNone, nJ.xd.HasBox, 0, KZ, yZ, UJ)
      }
      burstPreset(JJ, cJ, ZJ) {
        const FJ = this.sink(),
          UJ = Math.min(Math.floor(ZJ), nJ.xd.MaxBurst);
        if (!FJ || !Object.hasOwn(nJ.bc, JJ) || !(UJ > 0)) return;
        const eJ = EZ;
        for (let XJ = 0; XJ < 3; XJ++) KZ[XJ] = cJ[XJ] - eJ / 2, yZ[XJ] = eJ;
        Number.isFinite(KZ[0] + KZ[1] + KZ[2]) && (0, nJ.Ze)(FJ, 0, 0, nJ.bc[JJ], nJ.xd.HasBox, UJ, KZ, yZ, QZ)
      }
      sessionEnded() {
        this.session++;
        const JJ = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !JJ || (0, nJ.ef)(JJ, 0)
      }
      sinkFor(JJ) {
        return JJ === this.session ? this.deps.cmd() : null
      }
      stop(JJ, cJ) {
        const ZJ = this.sinkFor(JJ);
        ZJ && (0, nJ.gf)(ZJ, 0, cJ) && this.live--
      }
    }
    class PZ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.owner = JJ, this.session = cJ, this.key = ZJ, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(UJ[0]), Math.abs(UJ[1]), Math.abs(UJ[2])], this.rate = MZ(FJ.emitRate), this.emitted = this.rate > 0;
        const eJ = FJ.maxLifeTime * rZ * 1e3 + 250;
        this.stopDelayMs = eJ >= 0 ? Math.min(eJ, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(JJ, cJ) {
        const ZJ = this.sink();
        if (ZJ) {
          if (cJ)
            for (let JJ = 0; JJ < 3; JJ++) this.half[JJ] = Math.abs(cJ[JJ]);
          bZ(JJ, this.half) && (0, nJ.jf)(ZJ, 0, this.key, nJ.xd.HasBox, KZ, yZ, QZ)
        }
      }
      setEmitRate(JJ) {
        const cJ = this.sink(),
          ZJ = MZ(JJ);
        cJ && ZJ !== this.rate && (0, nJ.jf)(cJ, 0, this.key, 0, mZ, mZ, IZ(ZJ)) && (this.rate = ZJ, this.emitted ||= ZJ > 0)
      }
      emit(JJ) {
        const cJ = this.sink(),
          ZJ = Math.min(Math.floor(JJ), nJ.xd.MaxBurst);
        cJ && ZJ > 0 && (0, nJ.Ze)(cJ, 0, this.key, nJ.xd.PresetNone, 0, ZJ, mZ, mZ, QZ) && (this.emitted = !0)
      }
      emitPoints(JJ, cJ, ZJ) {
        const FJ = this.sink(),
          UJ = Math.min(Math.floor(ZJ), nJ.xd.MaxPoints, Math.floor(cJ.length / 4));
        if (!FJ || !(UJ > 0) || !Number.isFinite(JJ[0] + JJ[1] + JJ[2])) return;
        const eJ = new Uint8Array(cJ.buffer, cJ.byteOffset, UJ * nJ.xd.PointBytes);
        (0, nJ.af)(FJ, 0, this.key, UJ, JJ, eJ) && (this.emitted = !0)
      }
      setDirections(JJ, cJ) {
        const ZJ = this.sink();
        if (!ZJ || !Number.isFinite(JJ[0] + JJ[1] + JJ[2] + cJ[0] + cJ[1] + cJ[2])) return;
        const FJ = VZ.encode(JSON.stringify({
          dir1: [JJ[0], JJ[1], JJ[2]],
          dir2: [cJ[0], cJ[1], cJ[2]]
        }));
        (0, nJ.jf)(ZJ, 0, this.key, 0, mZ, mZ, FJ)
      }
      stop() {
        const JJ = this.sink();
        this.stopped = !0, JJ && (this.emitted ? (this.rate > 0 && (0, nJ.jf)(JJ, 0, this.key, 0, mZ, mZ, IZ(0)), setTimeout((() => {
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
    const kZ = Oc.j,
      pZ = new TextDecoder;

    function dZ(JJ, cJ) {
      const {
        serverIds: ZJ,
        kinds: FJ
      } = JJ;
      let UJ = 0;
      for (let eJ = 0; eJ < ZJ.length; eJ++) {
        const JJ = ZJ[eJ];
        if (JJ !== nJ.Tc && !QJ(FJ[eJ])) {
          if (UJ === cJ.length) {
            const JJ = new Int32Array(Math.max(64, 2 * UJ));
            JJ.set(cJ), cJ = JJ
          }
          cJ[UJ++] = JJ
        }
      }
      return {
        ids: cJ,
        count: UJ
      }
    }

    function zZ(JJ, cJ) {
      return JJ.length >= cJ ? JJ : new Int32Array(Math.max(cJ, 2 * JJ.length))
    }

    function NZ(JJ, cJ, ZJ, FJ) {
      for (let UJ = 0; UJ < ZJ; UJ += 4096) {
        const eJ = Math.min(4096, ZJ - UJ),
          XJ = JJ.memoryView(Int32Array, JJ.scratch(), eJ, "entity_info_batch's ids");
        if (!XJ) return !1;
        XJ.set(cJ.subarray(UJ, UJ + eJ));
        const AJ = JJ.queries.entityInfoBatch(eJ),
          qJ = 4294967295 === AJ ? null : JJ.memoryData(JJ.scratch(), AJ, 4, "entity_info_batch's records");
        if (!qJ) return !1;
        for (let JJ = 0; JJ + nJ.Pb.BYTES <= AJ;) {
          const cJ = nJ.Pb.len(qJ, JJ);
          FJ(nJ.Pb.serverId(qJ, JJ), OZ(qJ, JJ, cJ)), JJ += nJ.Pb.BYTES + (0, DJ.he)(cJ)
        }
      }
      return !0
    }

    function OZ(JJ, cJ, ZJ) {
      var FJ, UJ, eJ;
      const XJ = nJ.Pb.kind(JJ, cJ),
        AJ = 0 === XJ ? null : EJ(XJ);
      if (null === AJ) return null;
      const qJ = nJ.Pb.variation(JJ, cJ),
        jJ = nJ.Pb.pose(JJ, cJ),
        YJ = nJ.Pb.meta(JJ, cJ),
        hJ = nJ.Pb.mesh(JJ, cJ),
        DJ = 0 !== (nJ.Pb.flags(JJ, cJ) & nJ.Ob.HasOpts),
        sJ = kZ[AJ];
      return Object.freeze({
        type: AJ,
        variation: qJ === nJ.Yc ? void 0 : null !== (FJ = null !== (UJ = null === sJ || void 0 === sJ ? void 0 : sJ[qJ]) && void 0 !== UJ ? UJ : null === sJ || void 0 === sJ ? void 0 : sJ[0]) && void 0 !== FJ ? FJ : "default",
        pose: jJ === nJ.jc ? void 0 : null !== (eJ = nJ.Db[jJ]) && void 0 !== eJ ? eJ : nJ.Db[0],
        metaInfo: YJ === nJ.jc ? void 0 : nJ.Lc[YJ],
        meshKind: hJ === nJ.jc ? void 0 : nJ.Kc[hJ],
        meshOpts: DJ ? pZ.decode(new Uint8Array(JJ.buffer, JJ.byteOffset + cJ + nJ.Pb.BYTES, ZJ)) : void 0
      })
    }
    const TZ = 1,
      CZ = 2;
    class uZ {
      constructor(JJ) {
        this.deps = JJ, this.wanted = 0, this.hj = !1, this.refused = !1
      }
      get on() {
        return this.hj
      }
      want(JJ, cJ) {
        this.wanted = cJ ? this.wanted | JJ : this.wanted & ~JJ;
        const ZJ = 0 !== this.wanted;
        if (ZJ === this.hj) return;
        const FJ = this.deps.cmd();
        null !== FJ ? (0, nJ.gg)(FJ, 0, ZJ ? 1 : 0) ? (this.hj = ZJ, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.hj = !1
      }
    }
    class iZ {
      constructor(JJ) {
        this.deps = JJ, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(JJ) {
        var cJ;
        return this.complete || this.fill(), null !== (cJ = this.entries.get("string" === typeof JJ ? JJ : String(JJ))) && void 0 !== cJ ? cJ : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(JJ) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const JJ = new Int32Array(2 * this.pending.length);
            JJ.set(this.pending), this.pending = JJ
          }
          this.pending[this.pendingCount++] = JJ
        }
      }
      removed(JJ) {
        this.entries.size > 0 && this.entries.delete(String(JJ))
      }
      refresh() {
        const JJ = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (JJ > 0 && this.complete) {
          const {
            api: cJ
          } = this.deps;
          let ZJ = 0;
          const FJ = this.ids = zZ(this.ids, JJ);
          for (let UJ = 0; UJ < JJ; UJ++) {
            const JJ = this.pending[UJ],
              eJ = cJ.indexById.get(JJ);
            void 0 === eJ || QJ(cJ.kinds[eJ]) ? this.entries.delete(String(JJ)) : FJ[ZJ++] = JJ
          }
          ZJ > 0 && !this.batch(FJ, ZJ) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(TZ, !1)
      }
      fill() {
        const {
          api: JJ
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: JJ
          } = this.deps, cJ = JJ.on;
          JJ.want(TZ, !0), !cJ && JJ.on && (this.refill = this.midFrame)
        }
        const {
          ids: cJ,
          count: ZJ
        } = dZ(JJ, this.ids);
        this.ids = cJ, ZJ > 0 && !this.batch(cJ, ZJ) && (this.refill = !0)
      }
      batch(JJ, cJ) {
        return NZ(this.deps.api, JJ, cJ, ((JJ, cJ) => {
          null === cJ ? this.entries.delete(String(JJ)) : this.entries.set(String(JJ), cJ)
        }))
      }
    }
    var RZ = ZJ(4198);

    function LZ(JJ) {
      if ("message" !== JJ.type || JJ.JY !== RZ.Lb.NewClientOptions || JJ.payloadKind !== DJ.bc.Msgpack) return null;
      const cJ = (0, kJ.b)(JJ.payload);
      if (null === cJ || "object" !== typeof cJ || Array.isArray(cJ)) throw new Error("NewClientOptions whose body isn't an object of options");
      return cJ
    }
    var aZ = ZJ(1137),
      BZ = ZJ(35678);

    function tZ(JJ, cJ, ZJ, FJ, UJ, eJ, AJ) {
      var qJ, jJ, YJ;
      switch (JJ) {
        case nJ.fe.ToggleMenu: {
          const JJ = nJ.J[cJ];
          XJ.i.Uf("toggleMenu", void 0 === JJ ? "inventory" : `inventory|${JJ}`);
          break
        }
        case nJ.fe.EditBoard:
          XJ.i.Uf("EditBoard", {
            pos: 0 === cJ ? null : ZJ
          });
          break;
        case nJ.fe.EditCodeBlock:
        case nJ.fe.ViewCodeBlock:
          XJ.i.Uf("EditCodeBlock", {
            pos: ZJ,
            canChangePos: JJ === nJ.fe.EditCodeBlock
          });
          break;
        case nJ.fe.EditCustomLobbyBlock:
          XJ.i.Uf("EditCustomLobbyBlock", {
            pos: ZJ
          });
          break;
        case nJ.fe.OpenIronChest:
          XJ.i.Uf("OpenIronChest", {
            pos: ZJ
          });
          break;
        case nJ.fe.EditNameTag:
          XJ.i.Uf("EditNameTag", null !== (qJ = null === (jJ = UJ.hj()) || void 0 === jJ || null === (YJ = jJ.attributes.customAttributes) || void 0 === YJ ? void 0 : YJ.text) && void 0 !== qJ ? qJ : "");
          break;
        case nJ.fe.EditBook: {
          var hJ, DJ, GJ;
          const JJ = null === (hJ = UJ.hj()) || void 0 === hJ ? void 0 : hJ.attributes;
          XJ.i.Uf("EditBook", {
            pages: (0, aZ.N)(null === JJ || void 0 === JJ || null === (DJ = JJ.customAttributes) || void 0 === DJ ? void 0 : DJ.pages),
            title: null !== (GJ = null === JJ || void 0 === JJ ? void 0 : JJ.customDisplayName) && void 0 !== GJ ? GJ : "Title",
            isPublished: !(null === JJ || void 0 === JJ || !JJ.customDescription)
          });
          break
        }
        case nJ.fe.CantChangeBlock:
          ! function(JJ, cJ) {
            const ZJ = cJ.getClientOption("cantChangeError"),
              FJ = cJ.getClientOption(JJ ? "cantBuildError" : "cantBreakError"),
              UJ = JJ ? ZJ : FJ;
            (cJ.getClientOption("canChange") || UJ || "You cannot modify this block" !== ZJ) && XJ.i.Uf("showBottomMessage", {
              message: FJ || ZJ,
              type: "Error"
            })
          }(1 === cJ, eJ);
          break;
        case nJ.fe.MiddleBarStart:
          XJ.i.Uf("middleScreenBarInitiate", {
            duration: FJ,
            GJ: 1 === ZJ[0],
            horizBarRemOffset: cJ
          });
          break;
        case nJ.fe.MiddleBarStop:
          XJ.i.Uf("middleScreenBarRemove");
          break;
        case nJ.fe.Hitmarker:
          XJ.i.Uf("localGunHitmarker", {
            hU: 1 === cJ
          });
          break;
        case nJ.fe.ShotsLeft:
          XJ.i.Uf("localPlayerNewShotsLeft", FJ);
          break;
        case nJ.fe.AimingOverlay:
          XJ.i.Uf("aimingOverlay", 3 === (3 & cJ) ? "sniper" : "none");
          break;
        case nJ.fe.BottomMessage:
          XJ.i.Uf("showBottomMessage", JSON.parse(AJ()));
          break;
        case nJ.fe.Crosshair:
          UJ.inaccuracy = (0, pJ.h)(FJ), (0, BZ.c)().crosshairAccuracy(UJ.inaccuracy);
          break;
        case nJ.fe.ChargeStage:
          break;
        case nJ.fe.EmoteWheelClose:
          XJ.i.Uf("requestEmoteWheelClose");
          break;
        case nJ.fe.BlockMined:
          XJ.i.Uf("localBlockMined");
          break;
        default:
          throw new sJ.e(`UiEvent of no kind: what ${JJ}`)
      }
    }
    var oZ = ZJ(36964),
      lZ = ZJ(8565),
      JF = ZJ(1739),
      cF = ZJ(35818),
      ZF = ZJ(35740),
      FF = ZJ(4176);
    const UF = 10,
      eF = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      XF = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      AF = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function qF(JJ, cJ) {
      let ZJ, FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const eJ = () => (ZJ = (0, JF.u)(ZJ, cJ()), ZJ);
      return {
        current: eJ,
        watch(cJ) {
          const ZJ = () => {
              cJ(eJ())
            },
            XJ = [JJ.watch(ZJ)];
          return null !== FJ && XJ.push((0, JF.v)((JJ => {
            JJ.some(FJ) && ZJ()
          }))), null !== UJ && XJ.push(UJ(ZJ)), () => {
            for (const JJ of XJ) JJ()
          }
        }
      }
    }

    function jF(JJ) {
      return JJ && {
        name: JJ.name,
        amount: JJ.amount,
        attributes: JJ.attributes
      }
    }
    const YF = new WeakMap;

    function hF(JJ) {
      let cJ = YF.get(JJ);
      return void 0 === cJ && (cJ = (0, ZF.creativeItemIds)().map((cJ => ({
        name: JJ.nameOfId(cJ),
        amount: JJ.isStackableId(cJ) ? 1 : null,
        attributes: (0, oZ.d)("Gun" === (0, ZF.itemTypeOf)(cJ) ? {
          type: "Gun",
          clipSize: (0, ZF.clipSizeOf)(cJ)
        } : void 0)
      }))), YF.set(JJ, cJ)), cJ
    }

    function DF(JJ, cJ, ZJ, FJ) {
      const UJ = cJ => (JJ.flush(FJ), cJ),
        eJ = ZJ => {
          var FJ, UJ, eJ, XJ, AJ, qJ, jJ;
          const YJ = JJ.slot(ZJ);
          if (!YJ) return null;
          const {
            rootName: hJ,
            metaStr: DJ
          } = cJ.getMetaInfo(YJ.name);
          return {
            name: YJ.name,
            amount: YJ.amount,
            attributes: YJ.attributes,
            instance: JJ.instance(ZJ),
            displayName: null !== (FJ = YJ.attributes.customDisplayName) && void 0 !== FJ ? FJ : cJ.getDisplayName(hJ),
            requiresAmmo: "RequiresAmmo" === DJ,
            clipSize: null !== (UJ = null !== (eJ = null === (XJ = YJ.attributes.customAttributes) || void 0 === XJ || null === (AJ = XJ.gunStats) || void 0 === AJ ? void 0 : AJ.clipSize) && void 0 !== eJ ? eJ : null === (qJ = cJ.getGunStats(hJ)) || void 0 === qJ ? void 0 : qJ.clipSize) && void 0 !== UJ ? UJ : null === (jJ = YJ.typeObj) || void 0 === jJ ? void 0 : jJ.clipSize
          }
        },
        AJ = function(JJ, cJ) {
          let ZJ = null,
            FJ = {
              focus: null,
              recipes: [],
              detail: null
            },
            UJ = -1;
          const eJ = new Set;
          return {
            read() {
              var eJ, XJ;
              if (null === ZJ) return null !== FJ.focus && (FJ = {
                ...FJ,
                focus: null
              }), FJ;
              if (FJ.focus === ZJ && UJ === JJ.changes) return FJ;
              if (UJ = JJ.changes, 0 === JJ.length) return FJ = {
                focus: ZJ,
                recipes: [],
                detail: null
              }, FJ;
              let AJ = 0;
              if (null !== ZJ.recipe) try {
                AJ = cJ.getItemId(ZJ.recipe.name)
              } catch {}
              const qJ = JJ.craftingView(ZJ.station, AJ, null !== (eJ = null === (XJ = ZJ.recipe) || void 0 === XJ ? void 0 : XJ.qj) && void 0 !== eJ ? eJ : 0);
              return FJ = null === qJ ? {
                focus: ZJ,
                recipes: [],
                detail: null
              } : function(JJ, cJ, ZJ) {
                let FJ = nJ.hb.BYTES;
                const UJ = [];
                for (let YJ = nJ.hb.recipes(JJ, 0); YJ > 0; YJ--) {
                  const ZJ = nJ.db.flags(JJ, FJ),
                    eJ = {
                      name: cJ.nameOfId(nJ.db.item(JJ, FJ)),
                      qj: nJ.db.recipe(JJ, FJ),
                      requires: [],
                      produces: nJ.db.produces(JJ, FJ),
                      haveIngredients: 0 !== (ZJ & nJ.bb.HaveIngredients),
                      listed: 0 !== (ZJ & nJ.bb.Listed)
                    };
                  let XJ = nJ.db.requires(JJ, FJ);
                  for (FJ += nJ.db.BYTES; XJ > 0; XJ--) {
                    const ZJ = nJ.fb.items(JJ, FJ);
                    eJ.requires.push({
                      items: GF(JJ, FJ + nJ.fb.BYTES, ZJ, cJ),
                      amt: nJ.fb.amount(JJ, FJ)
                    }), FJ += nJ.fb.BYTES + 2 * ZJ
                  }
                  UJ.push(eJ)
                }
                const eJ = nJ.hb.flags(JJ, 0);
                if (null === ZJ.recipe || 0 === (eJ & nJ.gb.Detail)) return {
                  focus: ZJ,
                  recipes: UJ,
                  detail: null
                };
                const XJ = {},
                  AJ = {};
                for (let YJ = nJ.hb.ingredients(JJ, 0); YJ > 0; YJ--) {
                  const ZJ = nJ.Z.item(JJ, FJ),
                    UJ = nJ.Z.from(JJ, FJ),
                    eJ = nJ.Z.amount(JJ, FJ);
                  FJ += nJ.Z.BYTES;
                  const qJ = UJ === nJ.H ? null : GF(JJ, FJ, UJ, cJ);
                  if (null !== qJ && (FJ += 2 * UJ), 0 === ZJ) continue;
                  const jJ = cJ.nameOfId(ZJ);
                  XJ[jJ] = eJ, null !== qJ && (AJ[jJ] = qJ)
                }
                const {
                  name: qJ,
                  qj: jJ
                } = ZJ.recipe;
                return {
                  focus: ZJ,
                  recipes: UJ,
                  detail: {
                    name: qJ,
                    qj: jJ,
                    craftAllTimes: nJ.hb.craftAllTimes(JJ, 0),
                    roomForOne: 0 !== (eJ & nJ.gb.RoomForOne),
                    resultStackable: Boolean(cJ.getItemStat(qJ, "stackable")),
                    amounts: XJ,
                    ingredientsCraftedFrom: AJ
                  }
                }
              }(qJ, cJ, ZJ), FJ
            },
            setFocus(JJ) {
              ZJ = JJ;
              for (const cJ of [...eJ]) cJ()
            },
            watchFocus: JJ => (eJ.add(JJ), () => {
              eJ.delete(JJ)
            })
          }
        }(JJ, cJ);
      return {
        states: {
          inventory: qF(JJ, (() => {
            const ZJ = JJ.length;
            if (0 === ZJ) return eF;
            const FJ = [];
            for (let cJ = 0; cJ < nJ.hd; cJ++) FJ.push(jF(JJ.slot(cJ)));
            const UJ = JJ.slotIcon,
              eJ = FJ[JJ.selectedSlot];
            0 !== UJ && eJ && (FJ[JJ.selectedSlot] = {
              ...eJ,
              icon: cJ.nameOfId(UJ)
            });
            const XJ = !0 === cJ.getClientOption("creative");
            let AJ = [],
              qJ = null;
            if (ZJ > nJ.hd) {
              for (let cJ = nJ.hd; cJ < ZJ; cJ++) AJ.push(jF(JJ.slot(cJ)));
              qJ = {
                type: null,
                pos: [...JJ.JZ],
                numSlots: ZJ - nJ.hd,
                ironChest: null
              }
            } else XJ && (AJ = hF(cJ));
            return {
              player: FJ,
              chestOrCreative: AJ,
              chest: qJ,
              creative: XJ,
              selectedSlot: JJ.selectedSlot,
              freeSlots: JJ.freeSlots()
            }
          }), (0, JF.n)("creative")),
          hotbar: qF(JJ, (() => {
            if (0 === JJ.length) return XF;
            const cJ = [];
            for (let JJ = 0; JJ < UF; JJ++) cJ.push(eJ(JJ));
            return {
              items: cJ,
              ammo: JJ.amountOf("Ammo"),
              selectedSlot: JJ.selectedSlot
            }
          }), (0, JF.l)("DisplayName", "GunStats")),
          crafting: qF(JJ, AJ.read, null, AJ.watchFocus),
          heldItemAim: qF(JJ, (() => {
            var cJ;
            if (!ZJ()) return AF;
            const FJ = null === (cJ = JJ.hj()) || void 0 === cJ ? void 0 : cJ.typeObj,
              UJ = "Gun" === (null === FJ || void 0 === FJ ? void 0 : FJ.type);
            return {
              gun: UJ,
              aimable: UJ || !0 === (null === FJ || void 0 === FJ ? void 0 : FJ.showsAimingUi),
              chargeName: "Chargeable" === (null === FJ || void 0 === FJ ? void 0 : FJ.type) ? FJ.name : null
            }
          }), null, (JJ => function(JJ, cJ) {
            let ZJ = JJ();
            return (0, FF.w)((() => {
              const FJ = JJ();
              FJ !== ZJ && (ZJ = FJ, cJ(FJ))
            }))
          }(ZJ, JJ)))
        },
        events: {
          hotbarSlotRequested: (0, JF.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, JF.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, JF.d)("numkeyPressed"),
          inventoryDropRequested: (0, JF.d)("DropInvenItem"),
          chestToggled: (0, JF.d)("chestToggleFromServer"),
          chestRefreshed: (0, JF.d)("chestRefreshedFromServer", nF),
          inventorySynced: (0, JF.d)("syncedInvenFromServer", nF),
          enchantingTableOpened: (0, JF.d)("enchantingTable", (JJ => {
            let {
              position: ZJ,
              EA: FJ
            } = JJ;
            return {
              position: [...ZJ],
              blockName: cJ.getMetaInfo(FJ).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(cJ) {
            JJ.selectSlot(cJ), JJ.flush(FJ)
          },
          removeInventoryItem(cJ) {
            let {
              slot: ZJ,
              amount: FJ,
              drop: eJ
            } = cJ;
            return UJ(JJ.remove(ZJ, FJ, eJ))
          },
          swapInventorySlots(cJ) {
            let {
              a: ZJ,
              b: FJ
            } = cJ;
            return UJ(JJ.swap(ZJ, FJ))
          },
          moveInventoryItem(cJ) {
            let {
              from: ZJ,
              to: FJ,
              amount: eJ
            } = cJ;
            return UJ(JJ.move(ZJ, FJ, eJ))
          },
          quickMoveInventoryItem(cJ) {
            let {
              slot: ZJ,
              start: FJ,
              end: eJ,
              amount: XJ
            } = cJ;
            return UJ(JJ.quickMove(ZJ, FJ, eJ, XJ))
          },
          closeChest() {
            JJ.closeChest(), JJ.flush(FJ), XJ.i.Uf("chestClosedByPlayer")
          },
          focusCrafting(JJ) {
            AJ.setFocus(JJ)
          },
          craftRecipe(cJ) {
            let {
              name: ZJ,
              qj: FJ,
              times: eJ
            } = cJ;
            return UJ(JJ.craft(ZJ, FJ, eJ))
          },
          salvageItem(cJ) {
            let {
              slot: ZJ,
              name: FJ,
              amount: eJ
            } = cJ;
            return UJ(JJ.salvage(ZJ, FJ, eJ))
          },
          enchantItem(cJ) {
            let {
              slot: ZJ,
              level: FJ,
              tablePos: UJ
            } = cJ;
            JJ.enchant(ZJ, FJ, UJ)
          }
        },
        queries: {
          enchantingOffer(ZJ) {
            let {
              slot: FJ,
              blockName: UJ
            } = ZJ;
            return function(JJ, cJ, ZJ, FJ) {
              const UJ = JJ.slot(ZJ);
              if (!UJ || !cJ.getClientOption("canCraft") || !(0, lZ.p)(FJ) || (0, lZ.n)(UJ.attributes)) return sF;
              const eJ = (0, ZF.enchantmentPerksOf)(cJ.getItemId(UJ.name));
              if (0 === eJ.length) return sF;
              const XJ = [];
              for (let AJ = 0; AJ < cF.d; AJ++) {
                const {
                  commonProb: JJ,
                  uncommonProb: cJ,
                  rareProb: ZJ,
                  epicProb: UJ,
                  legendaryProb: eJ,
                  level: qJ
                } = (0, lZ.e)(FJ, AJ);
                XJ.push({
                  level: qJ,
                  odds: [JJ, cJ, ZJ, UJ, eJ].map((JJ => 100 * JJ))
                })
              }
              return {
                perks: [...eJ],
                options: XJ
              }
            }(JJ, cJ, FJ, UJ)
          }
        }
      }
    }
    const sF = Object.freeze({
      perks: [],
      options: []
    });

    function nF() {
      return null
    }

    function GF(JJ, cJ, ZJ, FJ) {
      const UJ = [];
      for (let eJ = 0; eJ < ZJ; eJ++) {
        const ZJ = JJ.getUint16(cJ + 2 * eJ, !0);
        0 !== ZJ && UJ.push(FJ.nameOfId(ZJ))
      }
      return UJ
    }
    class fF {
      constructor(JJ) {
        this.api = JJ, this.positions = new Map, this.targeted = {
          yB: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          bs: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(JJ) {
        let cJ = this.positions.get(JJ);
        return cJ || (this.api.checkValid(JJ) || this.api.isLocal(JJ) ? (cJ = [NaN, NaN, NaN], this.api.readPosition(JJ, cJ), this.positions.set(JJ, cJ), cJ) : null)
      }
      fJJ() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [cJ, ZJ] of this.positions) this.api.readPosition(cJ, ZJ) || this.api.checkValid(cJ) || this.api.isLocal(cJ) || this.positions.delete(cJ);
        const JJ = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (nJ.s.playerFlags(JJ, 0) & nJ.Ad.Breaking) && nJ.s.breakingProgress(JJ, 0) >= 0, this.isBreaking)
          for (let cJ = 0; cJ < 3; cJ++) this.breaking[cJ] = nJ.s.breakingPos(JJ, 0, cJ)
      }
      refreshTarget() {
        const JJ = this.api.apiView,
          cJ = nJ.s.targetBlockId(JJ, 0);
        if (this.hasTarget = cJ !== nJ.Wc, this.hasTarget) {
          const ZJ = this.targeted;
          ZJ.yB = cJ;
          for (let cJ = 0; cJ < 3; cJ++) ZJ.position[cJ] = nJ.s.targetBlock(JJ, 0, cJ), ZJ.normal[cJ] = nJ.s.targetNormal(JJ, 0, cJ), ZJ.bs[cJ] = nJ.s.targetAdjacent(JJ, 0, cJ)
        }
      }
      despawned(JJ) {
        const cJ = this.positions.get(JJ);
        cJ && !this.api.isLocal(JJ) && (cJ.fill(NaN), this.positions.delete(JJ))
      }
    }
    var xF = ZJ(39406),
      rF = ZJ(39394),
      vF = ZJ(35815);
    const mF = 1,
      QF = 2;
    class EF {
      constructor() {
        this.game = new vF.h, this.client = new vF.h, this.hj = 0
      }
      setGame(JJ) {
        if (null === JJ || "object" !== typeof JJ) return !1;
        const {
          key: cJ,
          value: ZJ
        } = JJ;
        return "string" === typeof cJ && (this.game.setBooleanType(cJ, Boolean(ZJ)), !0)
      }
      setClient(JJ, cJ) {
        this.client.setBooleanType(JJ, cJ)
      }
      clearGame() {
        this.game = new vF.h
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? mF : 0) | (this.client._getTotalBooleanVal() ? QF : 0)
      }
      write(JJ) {
        const cJ = this.perms();
        return cJ === this.hj || !(!JJ || !(0, nJ.ze)(JJ, 0, nJ.Tb.Keep, cJ)) && (this.hj = cJ, !0)
      }
    }
    class VF {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = JJ, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: AJ.e,
          get y() {
            return cJ()
          }
        }
      }
      get hasView() {
        const JJ = this.api.apiView,
          cJ = nJ.s.viewProj;
        return 0 !== cJ(JJ, 0, 3) || 0 !== cJ(JJ, 0, 7) || 0 !== cJ(JJ, 0, 11) || 0 !== cJ(JJ, 0, 15)
      }
      get cameraPosition() {
        const JJ = this.api.apiView,
          {
            eye: cJ
          } = this;
        for (let ZJ = 0; ZJ < 3; ZJ++) cJ[ZJ] = nJ.s.eye(JJ, 0, ZJ);
        return cJ
      }
      get cameraDirection() {
        const JJ = this.api.apiView,
          cJ = nJ.s.viewProj,
          ZJ = cJ(JJ, 0, 3),
          FJ = cJ(JJ, 0, 7),
          UJ = cJ(JJ, 0, 11),
          eJ = Math.hypot(ZJ, FJ, UJ),
          {
            forward: XJ
          } = this;
        return eJ > 0 && (XJ[0] = ZJ / eJ, XJ[1] = FJ / eJ, XJ[2] = UJ / eJ), XJ
      }
      get cameraHeading() {
        return nJ.s.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return nJ.s.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return nJ.s.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return nJ.s.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(JJ) {
        this.clip(JJ);
        const {
          clipX: cJ,
          clipY: ZJ,
          clipW: FJ
        } = this;
        if (FJ > 0) {
          const JJ = cJ / FJ * 50,
            UJ = -ZJ / FJ * 50;
          return Math.abs(JJ) <= this.screenBandPct.x && Math.abs(UJ) <= this.screenBandPct.y ? {
            x: 50 + JJ,
            y: 50 + UJ
          } : this.clampToBand(JJ, UJ)
        }
        const UJ = this.cameraPosition,
          eJ = Math.hypot(JJ[0] - UJ[0], JJ[1] - UJ[1], JJ[2] - UJ[2]),
          XJ = this.api.apiView,
          AJ = nJ.s.viewProj,
          qJ = eJ > 0 ? cJ / eJ : 0,
          jJ = eJ > 0 ? -ZJ / eJ : 0,
          YJ = Math.hypot(AJ(XJ, 0, 1), AJ(XJ, 0, 5), AJ(XJ, 0, 9)),
          hJ = qJ / Math.hypot(AJ(XJ, 0, 0), AJ(XJ, 0, 4), AJ(XJ, 0, 8)),
          DJ = jJ / YJ,
          sJ = !(Math.abs(hJ) >= .001 || Math.abs(DJ) >= .001);
        return this.clampToBand(qJ, sJ ? -(YJ || 1) : jJ)
      }
      projectDirectionToScreenPos(JJ) {
        if (!this.hasView) return;
        const cJ = this.cameraPosition,
          ZJ = this.along;
        for (let FJ = 0; FJ < 3; FJ++) ZJ[FJ] = cJ[FJ] + 10 * JJ[FJ];
        return this.projectWorldPosToScreenPos(ZJ)
      }
      projectWorldPosToViewport(JJ) {
        this.clip(JJ);
        const {
          clipX: cJ,
          clipY: ZJ,
          clipW: FJ
        } = this;
        return FJ > 0 ? {
          x: 50 + cJ / FJ * 50,
          y: 50 - ZJ / FJ * 50
        } : null
      }
      clip(JJ) {
        const cJ = this.api.apiView,
          ZJ = JJ[0] - nJ.s.origin(cJ, 0, 0),
          FJ = JJ[1] - nJ.s.origin(cJ, 0, 1),
          UJ = JJ[2] - nJ.s.origin(cJ, 0, 2),
          eJ = nJ.s.viewProj;
        this.clipX = eJ(cJ, 0, 0) * ZJ + eJ(cJ, 0, 4) * FJ + eJ(cJ, 0, 8) * UJ + eJ(cJ, 0, 12), this.clipY = eJ(cJ, 0, 1) * ZJ + eJ(cJ, 0, 5) * FJ + eJ(cJ, 0, 9) * UJ + eJ(cJ, 0, 13), this.clipW = eJ(cJ, 0, 3) * ZJ + eJ(cJ, 0, 7) * FJ + eJ(cJ, 0, 11) * UJ + eJ(cJ, 0, 15)
      }
      clampToBand(JJ, cJ) {
        return (0, AJ.i)(JJ, cJ, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var KF = ZJ(4210);
    const yF = new TextEncoder,
      SF = new Uint8Array(nJ.O * nJ.K);
    class IF {
      constructor() {
        this.buttons = [], this.hj = !0
      }
      set(JJ) {
        this.buttons = JJ, this.hj = !1
      }
      attached() {
        this.hj = 0 === this.buttons.length
      }
      write(JJ) {
        if (this.hj) return;
        const cJ = new Uint8Array(nJ.O),
          ZJ = new Uint8Array(nJ.O);
        let FJ = 0,
          UJ = 0;
        for (const {
            id: eJ,
            keycode: XJ
          }
          of this.buttons) {
          if (FJ === nJ.O) break;
          const {
            read: JJ,
            written: AJ
          } = yF.encodeInto(eJ, SF.subarray(UJ, UJ + nJ.K));
          if (JJ < eJ.length) continue;
          const qJ = KF.l[XJ];
          cJ[FJ] = "number" === typeof qJ ? qJ : 0, ZJ[FJ] = AJ, FJ++, UJ += AJ
        }
        this.hj = (0, nJ.pe)(JJ, 0, FJ, cJ, ZJ, SF.subarray(0, UJ))
      }
    }

    function MF(JJ, cJ, ZJ) {
      const FJ = yF.encode(cJ);
      return FJ.length <= nJ.K && function(JJ, cJ, ZJ, FJ) {
        return (0, uc.c)(), (0, nJ.nf)(JJ, cJ, ZJ, FJ)
      }(JJ, 0, ZJ ? 1 : 0, FJ)
    }
    const bF = new TextDecoder,
      wF = new TextEncoder,
      WF = new Uint8Array(0),
      gF = {
        off: nJ.Ed.Off,
        key: nJ.Ed.Key,
        touch: nJ.Ed.Touch
      };
    class HF {
      constructor(JJ) {
        var cJ;
        this.options = JJ, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new IF, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.cmd = null, this.freeCam = new EF, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.ls = JJ => {
          if ((0, sJ.l)(JJ)) throw JJ;
          this.onError(JJ)
        }, this.api = JJ.api, this.tables = JJ.tables, this.onError = null !== (cJ = JJ.onError) && void 0 !== cJ ? cJ : JJ => {
          console.error("Error in client game callback", JJ)
        }, this.renderFrame = new VF(this.api, JJ.screenBandY), this.live = new fF(this.api), this.chunks = new jc(this.api.memory, (() => this.api.apiView)), this.items = new xZ({
          api: this.api,
          tables: JJ.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: JJ.beforeOp
        });
        const ZJ = () => this.stopped() ? null : this.cmd,
          FJ = () => this.sessionLive;
        this.entityInfoWatch = new uZ({
          cmd: ZJ,
          onError: this.onError
        }), this.entityInfo = new iZ({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: FJ
        }), this.particles = new HZ({
          cmd: ZJ,
          isSessionLive: FJ,
          onError: this.onError
        }), this.clientApi = new qZ({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: JJ.tables,
          cmd: ZJ,
          sendCmd: () => this.sendCmd(),
          isSessionLive: FJ,
          beforeWrite: () => {
            var cJ;
            if (this.stopped()) return !1;
            const ZJ = this.generation;
            return !1 !== (null === (cJ = JJ.beforeWrite) || void 0 === cJ ? void 0 : cJ.call(JJ)) && ZJ === this.generation
          },
          playerDbId: () => {
            const JJ = this.session;
            if (null === JJ) throw new Error("No game session has started, so the local player has no DB id");
            return JJ.playerDbId
          },
          playSound: JJ.playSound,
          setLocalOptions: JJ.setLocalOptions,
          hasPackModel: JJ.hasPackModel
        }), this.scriptedCamera = new RJ({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: JJ.cameraScreen,
          showFacing: JJ.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= DF(this.items, this.tables, (() => this.localPlayerAlive()), this.ls), this.itemSources
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
      clickCodeBlock(JJ) {
        const cJ = this.sessionLive ? this.sendCmd() : null;
        return null !== cJ && (ZJ = cJ, FJ = 0, UJ = JJ[0], eJ = JJ[1], XJ = JJ[2], (0, uc.c)(), (0, nJ.te)(ZJ, FJ, UJ, eJ, XJ));
        var ZJ, FJ, UJ, eJ, XJ
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(JJ) {
        const cJ = this.liveCmd();
        return null === cJ ? (this.pendingZoom = JJ, !1) : (this.pendingZoom = null, (0, nJ.$f)(cJ, 0, JJ, 1))
      }
      HV(JJ) {
        const cJ = this.stopped() ? null : this.cmd;
        return null !== cJ && (0, nJ.Yf)(cJ, 0, JJ ? 1 : 0)
      }
      respawn() {
        const JJ = this.sessionLive ? this.sendCmd() : null;
        return null !== JJ && (cJ = JJ, ZJ = 0, (0, uc.c)(), (0, nJ.yf)(cJ, ZJ));
        var cJ, ZJ
      }
      bindCustomButtonKeys(JJ) {
        this.customButtons.set(JJ)
      }
      pressCustomButton(JJ, cJ) {
        const ZJ = this.sessionLive ? this.sendCmd() : null;
        return null !== ZJ && MF(ZJ, JJ, cJ)
      }
      padMove(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = this.liveCmd();
        return null !== XJ && (0, nJ.Ye)(XJ, 0, JJ, cJ, ZJ, FJ, UJ, eJ)
      }
      thirdPersonFor(JJ) {
        const cJ = this.liveCmd();
        return null !== cJ && (0, nJ.dg)(cJ, 0, null !== JJ && void 0 !== JJ ? JJ : 1 / 0)
      }
      send(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== FJ && ic(FJ, ZJ ? DJ.fd : 0, JJ, (0, kJ.e)(cJ))
      }
      socketAttached(JJ) {
        this.openSocket = JJ, this.socketLeftSinceAttach = !1
      }
      socketDetached(JJ) {
        this.openSocket === JJ && (this.openSocket = 0)
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
      attach(JJ) {
        const cJ = () => JJ.isStopped;
        this.stopped = cJ, this.cmd = JJ.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const ZJ = this.api.apiView;
        this.overflowGen = nJ.s.eventOverflowGen(ZJ, 0), this.resyncOwed = 0 !== nJ.s.eventOverflowMask(ZJ, 0), JJ.setGameHost(this), JJ.setEventWalker((JJ => {
          this.api.walk(JJ, this, cJ)
        }))
      }
      watchPromptPick(JJ) {
        this.promptWatch = JJ, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : PF(nJ.s.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? nJ.sc.None : nJ.s.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : nJ.s.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === JJ || JJ >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, JJ, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(JJ) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(JJ)
      }
      netEvent(JJ) {
        "connection" === JJ.type ? JJ.phase === DJ.G.Activated && JJ.conn !== this.activeConn && JJ.conn > this.closedThrough ? (this.endSession(), this.activeConn = JJ.conn, this.endGameGrants(), this.dropGameCamera()) : JJ.phase !== DJ.G.Left && JJ.phase !== DJ.G.Closed || JJ.conn !== this.activeConn ? JJ.phase === DJ.G.Resumed && 0 !== this.activeConn && JJ.conn > this.closedThrough && (this.activeConn = JJ.conn) : this.closeGame() : JJ.conn === this.activeConn && 0 !== JJ.conn && (JJ.JY === rF.u ? this.gunHit(JJ.payload) : JJ.JY === RZ.Lb.EditItemCraftingRecipes || JJ.JY === rF.U ? this.items.touch() : (this.serverOptions(JJ), this.gameMessage(JJ)));
        const cJ = this.options.onNetEvent;
        cJ && this.guard((() => {
          cJ(JJ)
        }))
      }
      serverOptions(JJ) {
        const cJ = this.options.serverOptions,
          ZJ = cJ ? this.decoded(LZ, JJ) : null;
        cJ && ZJ && this.guard((() => {
          cJ.applyNewClientOptions(ZJ)
        }))
      }
      gameMessage(JJ) {
        let cJ = null;
        try {
          cJ = function(JJ) {
            if ("message" !== JJ.type || JJ.JY !== RZ.Lb.GameCodeMessage || JJ.payloadKind !== DJ.bc.Msgpack) return null;
            const cJ = (0, kJ.b)(JJ.payload);
            if (null === cJ || "object" !== typeof cJ || "string" !== typeof cJ.messageType) throw new Error("GameCodeMessage without a messageType");
            return cJ
          }(JJ)
        } catch (ZJ) {
          this.sessionLive && this.onError(ZJ)
        }
        if (cJ) {
          const {
            messageType: JJ,
            data: ZJ
          } = cJ;
          if ((0, MJ.d)(JJ)) return void this.guard((() => {
            (0, MJ.b)(JJ, ZJ)
          }));
          "freeCamPerms" === JJ && this.freeCam.setGame(ZJ) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (cJ => {
            cJ.onReceivedMessageFromServer(JJ, ZJ)
          }))
        }
      }
      decoded(JJ, cJ) {
        try {
          return JJ(cJ)
        } catch (ZJ) {
          return this.onError(ZJ), null
        }
      }
      setClientFreeCameraGrant(JJ, cJ) {
        this.freeCam.setClient(JJ, cJ), this.writeFreeCam()
      }
      localPlayerBound(JJ) {
        var cJ, ZJ;
        if (0 === this.activeConn || this.sessionLive && JJ === this.boundId) return;
        const FJ = this.sessionLive;
        let UJ, eJ, XJ, AJ;
        this.endSession(), FJ && this.restartGameCamera();
        try {
          var qJ;
          this.session = null;
          const JJ = this.options.sessionInfo(this.activeConn);
          if (this.session = JJ, !JJ) return;
          UJ = JJ.gameNameWithVariation, eJ = null !== (qJ = (0, SJ.Hb)(UJ)) && void 0 !== qJ ? qJ : void 0, XJ = (0, IJ.r)(JJ.lobbyName), AJ = (0, IJ.N)(JJ.lobbyName)
        } catch (rJ) {
          return void this.onError(rJ)
        }
        const jJ = {
          localPlayerId: String(JJ)
        };
        let YJ = {},
          hJ = {};
        try {
          var DJ, sJ;
          YJ = null !== (DJ = null === (sJ = this.options.gameFactory((0, SJ.Jb)(UJ))) || void 0 === sJ ? void 0 : sJ(AJ, XJ, eJ, jJ)) && void 0 !== DJ ? DJ : {}
        } catch (rJ) {
          this.ls(rJ)
        }
        try {
          var nJ, GJ;
          hJ = {
            ...null === (nJ = (GJ = this.options).defaultPlugins) || void 0 === nJ ? void 0 : nJ.call(GJ, AJ, XJ, eJ, jJ),
            ...YJ.plugins
          }
        } catch (rJ) {
          this.ls(rJ)
        }
        const fJ = [YJ, ...Object.values(hJ)];
        this.owners = fJ, this.tickers = fJ.filter((JJ => void 0 !== JJ.Hh)), this.renderers = fJ.filter((JJ => void 0 !== JJ.onAfterRender)), this.receivers = fJ.filter((JJ => void 0 !== JJ.onReceivedMessageFromServer)), this.writeAltVeto(fJ), this.writeHooks(fJ), this.writePublicLobby(AJ), this.writeLocalDbId(null !== (cJ = null === (ZJ = this.session) || void 0 === ZJ ? void 0 : ZJ.playerDbId) && void 0 !== cJ ? cJ : null), this.boundId = JJ, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.round(fJ, (JJ => {
          var cJ;
          null === (cJ = JJ.onCreate) || void 0 === cJ || cJ.call(JJ, this.clientApi)
        }));
        const xJ = this.generation;
        setTimeout((() => {
          xJ === this.generation && !0 === this.tables.getClientOption("creative") && hF(this.tables)
        }), 0)
      }
      chunkSlot(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.chunks.apply(JJ, cJ, ZJ, FJ, UJ, eJ)
      }
      entityAdded(JJ) {
        var cJ;
        this.entityInfo.stale(JJ), null === (cJ = this.options.replayEntities) || void 0 === cJ || cJ.entityAdded(JJ)
      }
      entityInfoChanged(JJ) {
        var cJ;
        this.entityInfo.stale(JJ), null === (cJ = this.options.replayEntities) || void 0 === cJ || cJ.entityInfoChanged(JJ)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const JJ = performance.now();
          this.round(this.tickers, kF), (0, FF.c)(performance.now() - JJ)
        }
      }
      afterWalk(JJ) {
        this.ackEventOverflow(), this.clientApi.flushOwed();
        const cJ = this.options.replayEntities;
        cJ && this.guard((() => {
          this.entityInfoWatch.want(CZ, cJ.wantsWatch), cJ.flush(this.entityInfoWatch.on)
        }));
        const ZJ = (0, FF.i)(JJ, nJ.s.frameMs(this.api.apiView, 0));
        if (null !== ZJ) {
          const JJ = this.renderFrame;
          this.guard((() => {
            (0, BZ.c)().turnDamageIndicators(JJ.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(ZJ)
          })), this.round(this.renderers, (cJ => {
            cJ.onAfterRender(ZJ, JJ)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== ZJ)
        } catch (UJ) {
          this.ls(UJ)
        }
        this.showZoom(), this.items.flush(this.ls), this.writePromptWatch(), this.writeCustomButtons();
        const FJ = this.ticks;
        this.ticks = 0, (0, FF.f)(FJ, JJ, ZJ, this.ls)
      }
      entityRemoved(JJ) {
        this.live.despawned(JJ), this.entityInfo.removed(JJ)
      }
      ackEventOverflow() {
        const JJ = this.api.apiView,
          cJ = nJ.s.eventOverflowGen(JJ, 0),
          ZJ = cJ - this.overflowGen >>> 0;
        if (0 === ZJ && !this.resyncOwed) return;
        this.overflowGen = cJ;
        const FJ = nJ.s.eventOverflowMask(JJ, 0),
          UJ = this.cmd;
        0 === FJ || null === UJ || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, nJ.xe)(UJ, 0, FJ);
        const eJ = this.options.onEventOverflow;
        0 !== ZJ && eJ && this.guard((() => {
          eJ(FJ, ZJ)
        }))
      }
      gameCall(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        if (JJ === nJ.ic.Director) try {
          return this.scriptedCamera.call(cJ, ZJ, FJ, UJ, eJ, XJ)
        } catch (jJ) {
          return this.ls(jJ), nJ.jb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return JJ === nJ.ic.AltVeto ? nJ.l.Allow : 0;
        try {
          return this.callGames(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ)
        } catch (jJ) {
          throw (0, sJ.l)(jJ) && (this.fault = jJ), jJ
        }
      }
      takeFault() {
        const JJ = this.fault;
        return this.fault = void 0, JJ
      }
      callGames(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: qJ
        } = this.options, jJ = String(this.boundId);
        switch (JJ) {
          case nJ.ic.AltVeto:
          case nJ.ic.AltAction: {
            const AJ = 0 !== XJ,
              [YJ, hJ, DJ] = AJ ? [cJ, ZJ, FJ] : [void 0, void 0, void 0],
              sJ = AJ ? qJ.nameOfId(UJ) : "Air",
              GJ = PF(eJ);
            if (JJ === nJ.ic.AltAction) return this.first((JJ => {
              var cJ;
              return null === (cJ = JJ.onPlayerAltAction) || void 0 === cJ ? void 0 : cJ.call(JJ, jJ, YJ, hJ, DJ, sJ, GJ)
            })), 0;
            const fJ = this.first((JJ => {
              var cJ;
              return null === (cJ = JJ.onPlayerAttemptAltAction) || void 0 === cJ ? void 0 : cJ.call(JJ, jJ, YJ, hJ, DJ, sJ, GJ)
            }));
            return "preventAction" === fJ ? nJ.l.Prevent : "preventPlacement" === fJ ? nJ.l.PreventPlacement : nJ.l.Allow
          }
          case nJ.ic.Click: {
            const JJ = AJ,
              YJ = 0 !== (JJ & nJ.T.Alt),
              hJ = 0 !== (JJ & nJ.T.HasPos),
              DJ = hJ ? qJ.nameOfId(UJ) : "Air",
              [sJ, GJ, fJ] = hJ ? [cJ, ZJ, FJ] : [null, null, null],
              xJ = PF(eJ),
              rJ = 0 !== (JJ & nJ.T.Up),
              vJ = PF(XJ);
            if (0 === (JJ & nJ.T.AttackOnly) && this.first((JJ => {
                var cJ, ZJ;
                return rJ ? null === (cJ = JJ.onPlayerClickUp) || void 0 === cJ ? void 0 : cJ.call(JJ, jJ, YJ, sJ, GJ, fJ, DJ, xJ) : null === (ZJ = JJ.onPlayerClick) || void 0 === ZJ ? void 0 : ZJ.call(JJ, jJ, YJ, sJ, GJ, fJ, DJ, xJ)
              })), !rJ && !YJ && null !== vJ) {
              const JJ = this.clientApi.getPositionView(vJ),
                cJ = JJ ? [JJ[0], JJ[1], JJ[2]] : [0, 0, 0];
              this.first((JJ => {
                var ZJ;
                return null === (ZJ = JJ.onPlayerAttackEntity) || void 0 === ZJ ? void 0 : ZJ.call(JJ, jJ, vJ, cJ)
              }))
            }
            return 0
          }
          case nJ.ic.ChangeBlock: {
            const JJ = qJ.nameOfId(UJ),
              XJ = qJ.nameOfId(eJ);
            return this.first((UJ => {
              var eJ;
              return null === (eJ = UJ.onPlayerChangeBlock) || void 0 === eJ ? void 0 : eJ.call(UJ, jJ, cJ, ZJ, FJ, JJ, XJ)
            })), 0
          }
          case nJ.ic.DropItem: {
            const JJ = qJ.nameOfId(cJ);
            return this.first((cJ => {
              var UJ;
              return null === (UJ = cJ.onPlayerDropItem) || void 0 === UJ ? void 0 : UJ.call(cJ, jJ, JJ, ZJ, FJ)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${JJ}`)), 0
        }
      }
      changeBlockFail(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = UJ === nJ.Oc ? null : bF.decode(this.api.eventBytes(eJ, Math.min(UJ, XJ)));
        this.failures.push({
          iF: [JJ, cJ, ZJ],
          RF: FJ,
          LF: AJ
        })
      }
      changeBlockFailEnd() {
        const JJ = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (cJ => {
          var ZJ;
          null === (ZJ = cJ.onChangeBlockFail) || void 0 === ZJ || ZJ.call(cJ, JJ)
        })), this.Uf("EditBoard", {
          pos: null
        }), this.Uf("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(JJ, cJ, ZJ, FJ, UJ, eJ) {
        JJ === nJ.xc.ChestOpened ? this.items.chestOpened(ZJ, FJ, UJ) : JJ !== nJ.xc.Synced && JJ !== nJ.xc.ChestClosed && JJ !== nJ.xc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(JJ, cJ, ZJ, FJ) {
            switch (JJ) {
              case nJ.xc.Synced:
                XJ.i.Uf("syncedInvenFromServer");
                break;
              case nJ.xc.ChestOpened:
              case nJ.xc.ChestClosed:
                XJ.i.Uf("chestToggleFromServer", JJ === nJ.xc.ChestOpened, !0);
                break;
              case nJ.xc.ChestRefreshed:
                XJ.i.Uf("chestRefreshedFromServer");
                break;
              case nJ.xc.EnchantingTable:
                XJ.i.Uf("enchantingTable", {
                  EA: FJ,
                  position: ZJ
                });
                break;
              case nJ.xc.HotbarRequest:
                XJ.i.Uf("setSelectedInventorySlotI", cJ, !0);
                break;
              case nJ.xc.Scrolled:
                XJ.i.Uf("ScrollInventorySlot", cJ);
                break;
              case nJ.xc.NumberKey:
                XJ.i.Uf("numkeyPressed", cJ + 1);
                break;
              case nJ.xc.DropRequested:
                XJ.i.Uf("DropInvenItem", 0 !== cJ);
                break;
              default:
                throw new sJ.e(`InventoryEvent of no kind: what ${JJ}`)
            }
          }(JJ, cJ, [ZJ, FJ, UJ], eJ)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(JJ, cJ, ZJ, FJ) {
        this.Uf("shotPlayer", {
          playerId: String(JJ),
          damage: cJ,
          wasCrit: 0 !== FJ,
          distance: ZJ
        })
      }
      localHurt(JJ, cJ) {
        this.Uf("closeShopOnDamaged", null), this.guard((() => {
          XJ.i.Uf("damagedByOtherPlayer", {
            ac: null,
            direction: Number.isNaN(cJ) ? null : cJ,
            aJ: JJ
          })
        }))
      }
      attackHit(JJ, cJ, ZJ, FJ, UJ) {
        this.guard((() => {
          XJ.i.Uf("yourAttackHit", {
            hU: FJ,
            screenPos: this.renderFrame.projectDirectionToScreenPos([JJ, cJ, ZJ]),
            hitSelf: UJ
          })
        }))
      }
      physicsType(JJ) {
        this.Uf("PlayerPhysicsTypeUpdate", JJ)
      }
      vehicleEffect(JJ, cJ, ZJ, FJ, UJ) {
        this.guard((() => {
          JJ === DJ.vd.UPDATE ? (0, wJ.g)(cJ, {
            icon: ZJ,
            level: FJ,
            displayName: null,
            durationMs: UJ
          }) : bJ.c.remove(cJ)
        }))
      }
      zoomChanged(JJ) {
        this.zoom = JJ, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Uf("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const JJ = this.scriptedCamera.holdsView();
        !this.zoomUnshown || JJ && this.zoomHeld || (this.zoomUnshown = !1, this.Uf("cameraZoomSet", this.zoom)), this.zoomHeld = JJ
      }
      gunHit(JJ) {
        this.guard((() => {
          const {
            ac: cJ,
            Bc: ZJ
          } = (0, xF.e)(rF.u, JJ);
          XJ.i.Uf("damagedByOtherPlayer", {
            ac: cJ,
            direction: ZJ
          })
        }))
      }
      uiEvent(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        this.guard((() => {
          tZ(JJ, cJ, [ZJ, FJ, UJ], eJ, this.items, this.options.tables, (() => bF.decode(this.api.eventBytes(XJ, AJ))))
        }))
      }
      writeAltVeto(JJ) {
        const cJ = this.cmd;
        if (!cJ) return;
        let ZJ;
        try {
          ZJ = function(JJ, cJ) {
            const ZJ = new Set;
            let FJ = !1;
            for (const UJ of JJ)
              if (UJ.onPlayerAttemptAltAction) {
                if (FJ = !0, !UJ.altVetoBlocks) return {
                  mode: nJ.he.All,
                  roots: []
                };
                for (const JJ of UJ.altVetoBlocks) ZJ.add(cJ.getMetaInfo(JJ).rootId)
              } return FJ ? ZJ.size > nJ.Jc ? {
              mode: nJ.he.All,
              roots: []
            } : {
              mode: nJ.he.Filter,
              roots: [...ZJ]
            } : {
              mode: nJ.he.Off,
              roots: []
            }
          }(JJ, this.options.tables)
        } catch (UJ) {
          this.onError(UJ), ZJ = {
            mode: nJ.he.All,
            roots: []
          }
        }
        if (ZJ.mode === nJ.he.Off && !this.vetoSet) return;
        const FJ = new Uint8Array(new Uint32Array(ZJ.roots).buffer);
        (0, nJ.Ef)(cJ, 0, ZJ.mode, ZJ.roots.length, FJ) ? this.vetoSet = ZJ.mode !== nJ.he.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(JJ) {
        const cJ = this.cmd;
        if (!cJ) return;
        const ZJ = function(JJ) {
          let cJ = 0;
          for (const ZJ of JJ) ZJ.onPlayerAltAction && (cJ |= 1 << nJ.ic.AltAction), (ZJ.onPlayerClick || ZJ.onPlayerClickUp || ZJ.onPlayerAttackEntity) && (cJ |= 1 << nJ.ic.Click), ZJ.onPlayerChangeBlock && (cJ |= 1 << nJ.ic.ChangeBlock), ZJ.onPlayerDropItem && (cJ |= 1 << nJ.ic.DropItem);
          return cJ
        }(JJ);
        (0 !== ZJ || this.hooksSet) && ((0, nJ.Nf)(cJ, 0, ZJ) ? this.hooksSet = 0 !== ZJ : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const JJ = this.cmd;
        JJ && !this.stopped() && this.customButtons.write(JJ)
      }
      writePromptWatch() {
        const JJ = this.cmd,
          cJ = this.promptWatch;
        cJ !== this.promptWatchSent && JJ && !this.stopped() && (0, nJ.ig)(JJ, 0, gF[cJ]) && (this.promptWatchSent = cJ)
      }
      writePublicLobby(JJ) {
        const cJ = this.cmd;
        cJ && JJ !== this.writtenPublicLobby && ((0, nJ.Zf)(cJ, 0, JJ ? 1 : 0) ? this.writtenPublicLobby = JJ : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(JJ) {
        const cJ = this.cmd;
        cJ && ((0, nJ.Rf)(cJ, 0, null === JJ ? 0 : 1, null === JJ ? WF : wF.encode(JJ)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(JJ) {
        const cJ = this.generation;
        for (const FJ of this.owners) {
          if (cJ !== this.generation) break;
          try {
            const cJ = JJ(FJ);
            if (void 0 !== cJ) return cJ
          } catch (ZJ) {
            this.ls(ZJ)
          }
        }
      }
      Uf(JJ, cJ) {
        this.guard((() => {
          XJ.i.Uf(JJ, cJ)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (JJ) {
          this.ls(JJ)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (JJ) {
          this.ls(JJ)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const JJ = this.owners;
        let cJ;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (FJ) {
          cJ = FJ
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (FJ) {
          cJ ??= FJ
        }
        this.round(JJ, pF, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (FJ) {
          cJ ??= FJ
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (FJ) {
          cJ ??= FJ
        }
        const ZJ = this.options.onSessionEnd;
        if (ZJ) try {
          ZJ()
        } catch (FJ) {
          this.onError(FJ)
        }
        void 0 !== cJ && this.ls(cJ)
      }
      round(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = this.generation;
        for (const eJ of JJ) {
          if (FJ !== this.generation) break;
          try {
            cJ(eJ)
          } catch (UJ) {
            ZJ ? this.onError(UJ) : this.ls(UJ)
          }
        }
      }
      guard(JJ) {
        try {
          JJ()
        } catch (cJ) {
          this.ls(cJ)
        }
      }
    }

    function PF(JJ) {
      return JJ === nJ.Pc ? null : String(JJ)
    }

    function kF(JJ) {
      JJ.Hh(DJ.nd)
    }

    function pF(JJ) {
      var cJ;
      null === (cJ = JJ.onClose) || void 0 === cJ || cJ.call(JJ)
    }

    function dF(JJ, cJ) {
      JJ.watch((() => {
        const ZJ = function(JJ) {
          let cJ = 0;
          const ZJ = Math.min(UF, JJ.length);
          for (let UJ = 0; UJ < ZJ; UJ++) {
            var FJ;
            const ZJ = null === (FJ = JJ.slot(UJ)) || void 0 === FJ ? void 0 : FJ.typeObj,
              eJ = ZJ ? (0, ZF.gunTypeOf)(ZJ.id) : void 0;
            void 0 !== eJ && (cJ |= 1 << Qc[eJ])
          }
          return cJ
        }(JJ);
        0 !== ZJ && (cJ.preload(ZJ), cJ.preload(1 << Ec))
      }))
    }
    var zF = ZJ(4259),
      NF = ZJ(35789);

    function OF(JJ) {
      const cJ = new zF.Howl({
          ...(0, NF.g)(JJ),
          pool: 15,
          preload: !1
        }),
        ZJ = cJ.load.bind(cJ);
      return cJ.load = () => (cJ._preload = !0, ZJ()), cJ
    }

    function TF(JJ, cJ, ZJ) {
      const FJ = JJ.listener;
      if (FJ.positionX) CF(FJ.positionX, cJ, ZJ, 0), CF(FJ.positionY, cJ, ZJ, 1), CF(FJ.positionZ, cJ, ZJ, 2), CF(FJ.forwardX, cJ, ZJ, 3), CF(FJ.forwardY, cJ, ZJ, 4), CF(FJ.forwardZ, cJ, ZJ, 5), CF(FJ.upX, cJ, ZJ, 6), CF(FJ.upY, cJ, ZJ, 7), CF(FJ.upZ, cJ, ZJ, 8);
      else {
        let JJ = !1;
        for (let FJ = 0; FJ < 9; FJ++) JJ ||= cJ[FJ] !== ZJ[FJ];
        JJ && (FJ.setPosition(cJ[0], cJ[1], cJ[2]), FJ.setOrientation(cJ[3], cJ[4], cJ[5], cJ[6], cJ[7], cJ[8]), ZJ.set(cJ))
      }
    }

    function CF(JJ, cJ, ZJ, FJ) {
      cJ[FJ] !== ZJ[FJ] && (JJ.value = cJ[FJ], ZJ[FJ] = cJ[FJ])
    }
    class uF {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(JJ) {
        this.pose.set(JJ);
        const cJ = zF.b.ctx;
        return !!cJ && (cJ !== this.watchedCtx && (this.watchedCtx = cJ, this.written.fill(Number.NaN), cJ.addEventListener("statechange", (() => {
          "running" === cJ.state && TF(cJ, this.pose, this.written)
        }))), "running" === cJ.state && TF(cJ, JJ, this.written), !0)
      }
    }
    var iF = ZJ(35635),
      RF = ZJ(38162);
    let LF = null,
      aF = null;

    function BF() {
      return null === LF && (LF = document.createElement("div"), LF.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(LF)), LF
    }

    function tF() {
      return aF ??= new RF.e(new iF.c(BF)), aF
    }

    function oF() {
      var JJ;
      null === (JJ = aF) || void 0 === JJ || JJ.clear(), lF(null)
    }

    function lF(JJ) {
      FJ.d.get("scriptedCameraFacing") !== JJ && FJ.d.set({
        scriptedCameraFacing: JJ
      })
    }
    var JU = ZJ(8719),
      cU = ZJ(8687),
      ZU = ZJ(38186),
      FU = ZJ(39494),
      UU = ZJ(2778);
    const eU = Object.entries(nJ.ec).reduce(((JJ, cJ) => {
      let [ZJ, FJ] = cJ;
      return JJ[FJ] = ZJ, JJ
    }), []);

    function XU(JJ, cJ) {
      var ZJ;
      return 0 !== ((null !== (ZJ = JJ.itemFlags[cJ]) && void 0 !== ZJ ? ZJ : 0) & nJ.Ac.Stackable)
    }
    const AU = /^(0|[1-9][0-9]*)$/,
      qU = {
        displayName: (JJ, cJ) => (0, ZF.displayNameOf)(cJ),
        description: (JJ, cJ) => (0, ZF.descriptionOf)(cJ),
        type: (JJ, cJ) => (0, ZF.itemTypeOf)(cJ),
        clipSize: (JJ, cJ) => (0, ZF.clipSizeOf)(cJ),
        armourReduction: (JJ, cJ) => (0, ZF.armourReductionOf)(cJ),
        scopeType: (JJ, cJ) => (0, ZF.scopeTypeOf)(cJ),
        stackable: XU,
        harvestType: (JJ, cJ) => eU[JJ.blockHarvestTypes[cJ]],
        harvestLevel: (JJ, cJ) => {
          const ZJ = JJ.blockHarvestLevels[cJ];
          return ZJ === nJ.Fc ? void 0 : ZJ
        },
        harvests: (JJ, cJ) => {
          var ZJ;
          const FJ = null !== (ZJ = JJ.itemHarvests[cJ]) && void 0 !== ZJ ? ZJ : 0;
          return 0 !== FJ ? eU[FJ] : void 0 === (0, ZF.harvestsNullLevelOf)(cJ) ? void 0 : null
        },
        level: (JJ, cJ) => {
          var ZJ, FJ;
          const UJ = null !== (ZJ = JJ.itemLevels[cJ]) && void 0 !== ZJ ? ZJ : nJ.Fc;
          return UJ !== nJ.Fc ? UJ : null !== (FJ = (0, ZF.harvestsNullLevelOf)(cJ)) && void 0 !== FJ ? FJ : void 0
        }
      };

    function jU(JJ, cJ, ZJ) {
      return hU(new Uint8Array(Math.floor(JJ.length / cJ)), JJ, cJ, ZJ)
    }

    function YU(JJ, cJ, ZJ) {
      return hU(new Uint16Array(Math.floor(JJ.length / cJ)), JJ, cJ, ZJ)
    }

    function hU(JJ, cJ, ZJ, FJ) {
      const UJ = new DataView(cJ.buffer, cJ.byteOffset, cJ.byteLength);
      for (let eJ = 0; eJ < JJ.length; eJ++) JJ[eJ] = FJ(UJ, eJ * ZJ);
      return JJ
    }
    class DU {
      constructor(JJ, cJ) {
        this.options = cJ, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = JJ => {
          const cJ = this.idOf(JJ);
          if (void 0 === cJ) throw new Error(`No item is named ${JJ}, an item's root`);
          return cJ
        };
        const ZJ = cJ => {
            const ZJ = cJ();
            return new Uint8Array(JJ.memory().buffer, JJ.scratch(), ZJ).slice()
          },
          FJ = (new TextDecoder).decode(ZJ((() => JJ.queries.itemNames()))).split("\n"),
          UJ = ZJ((() => JJ.queries.blockProps())),
          eJ = ZJ((() => JJ.queries.itemProps()));
        this.props = {
          blockFlags: jU(UJ, nJ.C.BYTES, nJ.C.flags),
          blockHarvestTypes: jU(UJ, nJ.C.BYTES, nJ.C.harvestType),
          blockHarvestLevels: jU(UJ, nJ.C.BYTES, nJ.C.harvestLevel),
          blockAttachedTops: YU(UJ, nJ.C.BYTES, nJ.C.attachedTop),
          itemFlags: jU(eJ, nJ.Cc.BYTES, nJ.Cc.flags),
          itemHarvests: jU(eJ, nJ.Cc.BYTES, nJ.Cc.harvests),
          itemLevels: jU(eJ, nJ.Cc.BYTES, nJ.Cc.level)
        }, (0, UU.j)(Object.freeze(FJ)), (0, FU.c)()
      }
      idOf(JJ) {
        if ("number" === typeof JJ) return void 0 === (0, UU.e)(JJ) ? void 0 : JJ;
        const cJ = (0, UU.c)(JJ);
        return void 0 === cJ && AU.test(JJ) ? void 0 === (0, UU.e)(+JJ) ? void 0 : +JJ : cJ
      }
      getMetaInfo(JJ) {
        if (!JJ || JJ === JU.e) return JU.h;
        const cJ = this.idOf(JJ);
        if (void 0 === cJ) throw new Error(`Item ${JJ} not found in registry`);
        return this.metaOf(cJ)
      }
      blockRootId(JJ) {
        return 0 !== JJ && void 0 !== (0, UU.e)(JJ) ? this.metaOf(JJ).rootId : JJ
      }
      metaOf(JJ) {
        return this.metas[JJ] ??= (0, cU.p)((0, UU.e)(JJ), JJ, this.rootIdOf, (0, ZF.rootMetaDescOf)(JJ))
      }
      getItemId(JJ) {
        if (!JJ || JJ === JU.e) return 0;
        const cJ = this.idOf(JJ);
        if (void 0 === cJ) throw new Error(`Invalid block name. You sent ${JJ}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return cJ
      }
      getItemName(JJ) {
        if (!JJ || JJ === JU.e) return JU.e;
        const cJ = this.idOf(JJ);
        if (void 0 === cJ) throw new Error(`Item ${JJ} not found in registry`);
        return (0, UU.e)(cJ)
      }
      blockNameToBlockId(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (JJ === JU.e) return 0;
        let ZJ = this.idOf(JJ);
        if (void 0 === ZJ || !this.isBlockId(ZJ)) {
          const cJ = JJ.indexOf("|"),
            FJ = cJ > 0 ? (0, UU.c)(JJ.slice(0, cJ)) : void 0;
          ZJ = void 0 !== FJ && this.isBlockId(FJ) && (0, ZF.rootMetaDescOf)(FJ) === JJ ? FJ : void 0
        }
        if (void 0 !== ZJ) return ZJ;
        if (!cJ) throw new Error(`Invalid block name. You sent ${JJ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(JJ) {
        return JJ > 0 && JJ < this.props.blockFlags.length
      }
      nameOfId(JJ) {
        return 0 !== JJ && (0, UU.e)(JJ) || JU.e
      }
      itemType(JJ) {
        const cJ = JJ ? this.idOf(JJ) : void 0;
        if (!cJ) return null;
        let ZJ = this.types.get(cJ);
        return void 0 === ZJ && (ZJ = Object.freeze({
          id: cJ,
          name: (0, UU.e)(cJ),
          meta: this.getMetaInfo(cJ),
          stackable: XU(this.props, cJ),
          type: (0, ZF.itemTypeNameOf)(cJ),
          clipSize: (0, ZF.clipSizeOf)(cJ),
          scopeType: (0, ZF.scopeTypeOf)(cJ),
          showsAimingUi: (0, ZF.showsAimingUi)(cJ)
        }), this.types.set(cJ, ZJ)), ZJ
      }
      getItemStat(JJ, cJ) {
        if (ZU.c.has(cJ)) {
          const ZJ = "minChargeStateToUse" === cJ ? this.getMetaInfo(JJ).rootName : this.getItemName(JJ),
            FJ = this.options.get((0, ZU.e)(ZJ, cJ));
          if (null !== FJ && void 0 !== FJ) return FJ
        }
        return this.defaultStat(JJ, cJ, this.statOf(cJ))
      }
      getDisplayName(JJ) {
        return this.getItemStat(JJ, "displayName")
      }
      getDefaultItemStat(JJ, cJ) {
        return this.defaultStat(JJ, cJ, this.statOf(cJ))
      }
      statOf(JJ) {
        const cJ = qU[JJ];
        return void 0 === cJ && function(JJ, cJ) {
          throw new Error(`ClientApi.${JJ} is not available yet in the wasm client (${cJ})`)
        }(`getItemStat("${JJ}")`, `a table of the stat: the wasm client answers ${Object.keys(qU).join(", ")}`), cJ
      }
      defaultStat(JJ, cJ, ZJ) {
        const FJ = this.idOf(JJ),
          UJ = void 0 === FJ ? void 0 : ZJ(this.props, FJ);
        return null !== UJ && void 0 !== UJ || "displayName" !== cJ ? UJ : this.getItemName(JJ)
      }
      getClientOption(JJ) {
        return this.options.get(JJ)
      }
      getGunStats(JJ) {
        return this.getClientOption(`${JJ}GunStats`)
      }
      watchClientOption(JJ, cJ) {
        return this.options.subscribe(JJ, cJ)
      }
      isSolidBlockId(JJ) {
        var cJ;
        return 0 !== ((null !== (cJ = this.props.blockFlags[JJ]) && void 0 !== cJ ? cJ : 0) & nJ.y.Solid)
      }
      isStackableId(JJ) {
        return XU(this.props, JJ)
      }
      isFluidBlockId(JJ) {
        var cJ;
        return 0 !== ((null !== (cJ = this.props.blockFlags[JJ]) && void 0 !== cJ ? cJ : 0) & nJ.y.Fluid)
      }
      canPlaceOverBlockId(JJ) {
        var cJ;
        return 0 !== ((null !== (cJ = this.props.blockFlags[JJ]) && void 0 !== cJ ? cJ : 0) & nJ.y.PlaceOver)
      }
      attachedTopOf(JJ) {
        var cJ;
        return null !== (cJ = this.props.blockAttachedTops[JJ]) && void 0 !== cJ ? cJ : 0
      }
      isDroplessBlockId(JJ) {
        return (0, ZF.dropsNothing)(JJ)
      }
    }

    function sU(JJ, cJ) {
      const ZJ = new Map;
      return (FJ, UJ) => {
        const eJ = cJ.idOf(FJ),
          XJ = void 0 === eJ ? null : (FJ => {
            let UJ = ZJ.get(FJ);
            if (void 0 === UJ) {
              const eJ = JJ.queries.salvageRecipe(FJ),
                XJ = new DataView(JJ.memory().buffer, JJ.scratch(), eJ),
                AJ = [];
              for (let JJ = 0; JJ + nJ.Td.BYTES <= eJ; JJ += nJ.Td.BYTES) AJ.push(Object.freeze({
                item: cJ.nameOfId(nJ.Td.item(XJ, JJ)),
                amt: nJ.Td.amount(XJ, JJ)
              }));
              UJ = 0 === AJ.length ? null : Object.freeze(AJ), ZJ.set(FJ, UJ)
            }
            return UJ
          })(eJ);
        if (null === XJ || void 0 === UJ) return XJ;
        const AJ = UJ <= 0 ? 1 : UJ;
        return XJ.map((JJ => {
          let {
            item: cJ,
            amt: ZJ
          } = JJ;
          return {
            item: cJ,
            amt: ZJ * AJ
          }
        }))
      }
    }
    var nU = ZJ(39672),
      GU = ZJ(35969),
      fU = ZJ(35957),
      xU = ZJ(35998),
      rU = ZJ(35562),
      vU = ZJ(39452),
      mU = ZJ(41240);
    const QU = -1,
      EU = new Uint8Array(0),
      VU = new TextEncoder;

    function KU(JJ) {
      if (null === JJ) return null;
      const cJ = VU.encode(JJ);
      return cJ.byteLength < DJ.vc ? cJ : cJ.subarray(0, DJ.vc - 1)
    }
    class yU {
      constructor(JJ) {
        this.deps = JJ, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = QU, this.keyframesSettled = !1, this.reloadFrom = QU
      }
      reloadKeyframes() {
        var JJ, cJ;
        this.keyframesVersion = QU, this.reloadFrom = null !== (JJ = null === (cJ = this.view()) || void 0 === cJ ? void 0 : cJ.version) && void 0 !== JJ ? JJ : QU
      }
      setPlayback(JJ) {
        const cJ = 1 === this.deps.core.rUJ(JJ);
        return cJ && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = QU, this.reloadFrom = QU), cJ
      }
      async open(JJ) {
        const cJ = await this.deps.replay.open(JJ);
        return "opening" === cJ && (this.reloadKeyframes(), this.deps.recorder.prefetch()), cJ
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(JJ)), cJ)
      }
      setSpeed(JJ) {
        this.deps.replay.setSpeed(JJ)
      }
      setCameraMode(JJ) {
        this.deps.replay.setCameraMode(mU.b.indexOf(JJ))
      }
      view() {
        var JJ;
        const cJ = nJ.s.replayViewPtr(this.deps.apiView(), 0);
        if (0 === cJ) return this.lastView = null, null;
        const ZJ = new DataView(this.deps.buffer(), cJ, nJ.Kd.BYTES),
          FJ = nJ.Kd.version(ZJ, 0),
          UJ = this.lastView;
        if (null !== UJ && UJ.version === FJ) return UJ;
        const eJ = nJ.Kd.markIn(ZJ, 0),
          XJ = {
            version: FJ,
            state: nJ.Kd.state(ZJ, 0),
            cameraMode: null !== (JJ = mU.b[nJ.Kd.cameraMode(ZJ, 0)]) && void 0 !== JJ ? JJ : "recording",
            Hh: nJ.Kd.Hh(ZJ, 0),
            totalTicks: nJ.Kd.totalTicks(ZJ, 0),
            speed: nJ.Kd.speed(ZJ, 0),
            mark: eJ === nJ.Hd ? null : {
              inTick: eJ,
              outTick: nJ.Kd.markOut(ZJ, 0)
            },
            editVersion: nJ.Kd.editVersion(ZJ, 0)
          };
        return this.lastView = XJ, XJ
      }
      keyframes() {
        const JJ = this.view();
        if (null === JJ) return [];
        JJ.version !== this.reloadFrom && (this.reloadFrom = QU);
        const cJ = this.reloadFrom === QU && JJ.state !== DJ.cd.Cropping && JJ.state !== DJ.cd.None,
          ZJ = cJ ? JJ.editVersion : JJ.version;
        if (ZJ === this.keyframesVersion && cJ === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: FJ
        } = this.deps, UJ = FJ.vUJ(), eJ = FJ.Kf(), XJ = [];
        if (0 !== eJ && UJ > 0) {
          const JJ = new DataView(this.deps.buffer(), eJ, UJ * DJ.ic);
          for (let cJ = 0; cJ < UJ; cJ++) {
            const ZJ = cJ * DJ.ic,
              FJ = cJ => JJ.getFloat64(ZJ + cJ, !0);
            XJ.push({
              Hh: JJ.getUint32(ZJ + DJ.rc, !0),
              position: [FJ(DJ.nc), FJ(DJ.nc + 8), FJ(DJ.nc + 16)],
              direction: [FJ(DJ.kc), FJ(DJ.kc + 8), FJ(DJ.kc + 16)],
              easing: [FJ(DJ.lc), FJ(DJ.lc + 8), FJ(DJ.lc + 16), FJ(DJ.lc + 24)]
            })
          }
        }
        return this.keyframesVersion = ZJ, this.keyframesSettled = cJ, this.lastKeyframes = XJ, XJ
      }
      addKeyframe() {
        const JJ = this.deps.apiView(),
          cJ = [nJ.s.eye(JJ, 0, 0), nJ.s.eye(JJ, 0, 1), nJ.s.eye(JJ, 0, 2)];
        return this.deps.replay.addKeyframe(cJ, function(JJ, cJ) {
          const ZJ = Math.cos(cJ);
          return [ZJ * Math.sin(JJ), -Math.sin(cJ), ZJ * Math.cos(JJ)]
        }(nJ.s.heading(JJ, 0), nJ.s.pitch(JJ, 0)))
      }
      setKeyframe(JJ) {
        return this.deps.replay.setKeyframe(JJ.Hh, Float64Array.from([...JJ.position, ...JJ.direction, ...JJ.easing]))
      }
      moveKeyframe(JJ, cJ) {
        return this.deps.replay.moveKeyframe(JJ, cJ)
      }
      deleteKeyframes(JJ, cJ) {
        return this.deps.replay.deleteKeyframes(JJ, cJ)
      }
      setMark(JJ) {
        var cJ, ZJ;
        return this.deps.replay.setMark(null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.inTick) && void 0 !== cJ ? cJ : -1, null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.outTick) && void 0 !== ZJ ? ZJ : -1)
      }
      crop(JJ, cJ) {
        const ZJ = this.deps.replay.crop(JJ, cJ);
        return ZJ && this.reloadKeyframes(), ZJ
      }
      save(JJ) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(JJ)
      }
      recorderControl(JJ) {
        this.deps.recorder.control(JJ)
      }
      recorderPrefs(JJ, cJ) {
        this.deps.recorder.prefs(JJ, cJ)
      }
      recorderOption(JJ, cJ) {
        const ZJ = this.deps.cmd();
        return null !== ZJ && (0, nJ.tf)(ZJ, 0, JJ, null === cJ ? EU : VU.encode(cJ))
      }
      recordFlyingText(JJ, cJ, ZJ, FJ) {
        const UJ = this.deps.cmd(),
          eJ = Math.max(0, Math.min(4294967295, Math.round(FJ)));
        return null !== UJ && (0, nJ.qf)(UJ, 0, cJ, ZJ, eJ, VU.encode(JJ))
      }
      recordPlayerKilled(JJ, cJ, ZJ, FJ) {
        const UJ = this.deps.cmd();
        return null !== UJ && (0, nJ.vf)(UJ, 0, JJ, cJ, Math.max(0, ZJ), VU.encode(FJ))
      }
      recordKillfeed(JJ, cJ, ZJ) {
        var FJ, UJ;
        const eJ = this.deps.cmd(),
          XJ = function(JJ) {
            const cJ = JJ.reduce(((JJ, cJ) => {
                var ZJ;
                return JJ + RZ._ + (null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.byteLength) && void 0 !== ZJ ? ZJ : 0)
              }), 0),
              ZJ = new Uint8Array(cJ),
              FJ = new DataView(ZJ.buffer);
            let UJ = 0;
            for (const XJ of JJ) {
              var eJ;
              FJ.setUint16(UJ, null !== (eJ = null === XJ || void 0 === XJ ? void 0 : XJ.byteLength) && void 0 !== eJ ? eJ : DJ.vc, !0), UJ += RZ._, null !== XJ && (ZJ.set(XJ, UJ), UJ += XJ.byteLength)
            }
            return ZJ
          }([KU(JJ.name), KU(JJ.colour), KU(cJ.name), KU(cJ.colour), KU(ZJ)]);
        return null !== eJ && (0, nJ.rf)(eJ, 0, null !== (FJ = JJ.id) && void 0 !== FJ ? FJ : nJ.Tc, null !== (UJ = cJ.id) && void 0 !== UJ ? UJ : nJ.Tc, XJ)
      }
      recorderSession(JJ, cJ) {
        this.deps.recorder.session({
          session: cJ,
          lobbyType: JJ.lobbyType,
          game: JJ.gameNameWithVariation,
          lobby: JJ.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.mUJ()
      }
      filePartDone(JJ, cJ) {
        this.deps.recorder.filePartDone(JJ, cJ)
      }
      fileDone(JJ) {
        this.deps.recorder.fileDone(JJ)
      }
    }
    const SU = -2147483648;
    class IU {
      constructor(JJ) {
        var cJ;
        this.deps = JJ, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (cJ = JJ.now) && void 0 !== cJ ? cJ : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var JJ, cJ, ZJ;
        return null === (JJ = null === (cJ = (ZJ = this.deps).live) || void 0 === cJ ? void 0 : cJ.call(ZJ)) || void 0 === JJ || JJ
      }
      activated(JJ) {
        var cJ, ZJ;
        this.live && (this.viewerShown(!0 === (null === (cJ = (ZJ = this.deps).viewerOpen) || void 0 === cJ ? void 0 : cJ.call(ZJ))), this.deps.client.recorderSession(JJ, (0, mU.d)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var JJ, cJ;
        this.live && (this.state.recording || !0 !== (null === (JJ = (cJ = this.deps).viewerOpen) || void 0 === JJ ? void 0 : JJ.call(cJ))) ? this.deps.client.recorderControl(DJ.Lc.ToggleRecording) : this.deps.notify(xU.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(DJ.Lc.SaveClip) : this.deps.notify(xU.d.clippingNotOn)
      }
      viewerShown(JJ) {
        this.live && this.deps.client.recorderControl(JJ ? DJ.Lc.ViewerOpened : DJ.Lc.ViewerClosed)
      }
      setPrefs(JJ, cJ) {
        this.live && this.deps.client.recorderPrefs(JJ, cJ)
      }
      setOption(JJ, cJ) {
        this.live && this.deps.client.recorderOption(JJ, cJ)
      }
      recordFlyingText(JJ, cJ, ZJ, FJ) {
        this.live && this.deps.client.recordFlyingText(JJ, cJ, ZJ, FJ)
      }
      recordPlayerKilled(JJ, cJ, ZJ, FJ) {
        this.live && this.deps.client.recordPlayerKilled(JJ, cJ, ZJ, FJ)
      }
      recordKillfeed(JJ, cJ, ZJ) {
        this.live && this.deps.client.recordKillfeed(JJ, cJ, ZJ)
      }
      Hh() {
        let JJ = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, JJ = {
            ...JJ,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const cJ = Math.floor((this.now() - this.recordingSince) / 1e3);
          cJ !== JJ.seconds && (JJ = {
            ...JJ,
            seconds: cJ
          })
        }
        this.set(JJ)
      }
      onEvent(JJ) {
        var cJ, ZJ;
        const {
          notify: FJ
        } = this.deps, UJ = xU.d;
        switch (JJ.what) {
          case DJ.Ic.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), FJ(UJ.recordingStarted);
            break;
          case DJ.Ic.RecordingStopped:
            this.stopRecording(), FJ(UJ.recordingStopped), this.saveState(DJ.Uc.Recording, "saving");
            break;
          case DJ.Ic.RecordingDiscarded:
            this.stopRecording(), FJ(UJ.recordingDiscarded);
            break;
          case DJ.Ic.RecordingTurnedOff:
            this.stopRecording(), FJ(UJ.recordingTurnedOff);
            break;
          case DJ.Ic.LimitReached:
            FJ(UJ.limitReached);
            break;
          case DJ.Ic.ClipSaved:
            this.saveState(DJ.Uc.Clip, "saving");
            break;
          case DJ.Ic.ClipEmpty:
            FJ(UJ.clipEmpty);
            break;
          case DJ.Ic.ClippingNotOn:
            FJ(UJ.clippingNotOn);
            break;
          case DJ.Ic.Disallowed:
            FJ(UJ.disallowed);
            break;
          case DJ.Ic.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case DJ.Ic.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case DJ.Ic.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case DJ.Ic.SaveBusy:
            null === (cJ = (ZJ = this.deps).onSaveState) || void 0 === cJ || cJ.call(ZJ, JJ.kind, "busy"), FJ(UJ.saveBusy);
            break;
          case DJ.Ic.CloseViewerFirst:
            FJ(UJ.closeViewerFirst)
        }
      }
      fileReady(JJ, cJ) {
        this.deps.download(cJ), this.saveState(JJ, "done"), this.deps.notify(JJ === DJ.Uc.Clip ? xU.d.clipSaved : xU.d.recordingSaved)
      }
      failed(JJ) {
        this.saveState(JJ, "failed"), this.deps.notify(JJ === DJ.Uc.Clip ? xU.d.clipFailed : xU.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(JJ, cJ) {
        var ZJ, FJ;
        null === (ZJ = (FJ = this.deps).onSaveState) || void 0 === ZJ || ZJ.call(FJ, JJ, cJ)
      }
      set(JJ) {
        JJ !== this.state && (this.state = JJ, this.deps.onState(JJ))
      }
    }
    const MU = new TextDecoder;

    function bU(JJ, cJ, ZJ, FJ) {
      const UJ = [];
      for (let eJ = 0; eJ < FJ; eJ++) {
        if (cJ + RZ._ > ZJ) return null;
        const FJ = JJ.getUint16(cJ, !0);
        if (cJ += RZ._, FJ !== DJ.vc) {
          if (cJ + FJ > ZJ) return null;
          UJ.push(MU.decode(new Uint8Array(JJ.buffer, JJ.byteOffset + cJ, FJ))), cJ += FJ
        } else UJ.push(null)
      }
      return cJ === ZJ ? UJ : null
    }

    function wU(JJ, cJ) {
      let ZJ = new DataView(new ArrayBuffer(0)),
        FJ = !0;
      const UJ = {
        replayFailed: (cJ, ZJ) => {
          JJ.replayFailed({
            reason: cJ,
            code: ZJ
          })
        },
        replayOption: (cJ, UJ, eJ, XJ) => {
          const AJ = function(JJ, cJ, ZJ, FJ) {
            switch (cJ) {
              case DJ.Yc.Cleared:
                return 0 === FJ ? null : void 0;
              case DJ.Yc.Text:
                return MU.decode(new Uint8Array(JJ.buffer, JJ.byteOffset + ZJ, FJ));
              case DJ.Yc.Int:
                return FJ === Int32Array.BYTES_PER_ELEMENT ? JJ.getInt32(ZJ, !0) : void 0;
              case DJ.Yc.Double:
                return FJ === Float64Array.BYTES_PER_ELEMENT ? JJ.getFloat64(ZJ, !0) : void 0;
              default:
                return
            }
          }(ZJ, UJ, eJ, XJ);
          void 0 !== AJ ? JJ.replayOption({
            key: cJ,
            value: AJ
          }) : FJ = !1
        },
        replayUiEvent: (cJ, UJ, eJ, XJ, AJ, qJ) => {
          const jJ = function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
            const AJ = eJ + XJ;
            switch (cJ) {
              case DJ.ad.FlyingText: {
                const XJ = bU(JJ, eJ, AJ, 1);
                return null !== XJ && null !== XJ[0] ? {
                  what: cJ,
                  TF: ZJ,
                  NF: FJ,
                  angle: UJ,
                  contentJson: XJ[0]
                } : null
              }
              case DJ.ad.PlayerKilled: {
                const FJ = bU(JJ, eJ, AJ, 3);
                return FJ ? {
                  what: cJ,
                  killstreak: ZJ,
                  dead: FJ[0],
                  killer: FJ[1],
                  withItem: FJ[2]
                } : null
              }
              case DJ.ad.Killfeed: {
                const ZJ = bU(JJ, eJ, AJ, 7);
                return ZJ ? {
                  what: cJ,
                  killerId: ZJ[0],
                  killerName: ZJ[1],
                  killerColour: ZJ[2],
                  victimId: ZJ[3],
                  victimName: ZJ[4],
                  victimColour: ZJ[5],
                  withItem: ZJ[6]
                } : null
              }
              default:
                return null
            }
          }(ZJ, cJ, UJ, eJ, XJ, AJ, qJ);
          null !== jJ ? JJ.replayUiEvent(jJ) : FJ = !1
        },
        replayFilePart: (ZJ, UJ, eJ, XJ) => {
          const AJ = cJ();
          eJ + XJ > AJ.byteLength ? FJ = !1 : JJ.filePart(ZJ, UJ, new Uint8Array(AJ, eJ, XJ).slice())
        },
        replayFileReady: (cJ, ZJ, FJ, UJ) => {
          JJ.fileReady({
            save: cJ,
            kind: ZJ,
            parts: FJ,
            bytes: UJ
          })
        },
        recorderEvent: (cJ, ZJ, FJ) => {
          JJ.recorderEvent({
            what: cJ,
            kind: ZJ,
            save: FJ
          })
        },
        replayOpened: (cJ, FJ, UJ) => {
          JJ.replayOpened(MU.decode(new Uint8Array(ZJ.buffer, ZJ.byteOffset + FJ, UJ)))
        }
      };
      return (JJ, cJ, eJ, XJ) => !(JJ < DJ.T.ReplayFailed || JJ > DJ.T.RecorderEvent) && (ZJ = cJ, FJ = !0, (0, nJ.me)(JJ, cJ, eJ, XJ, UJ) && FJ)
    }

    function WU(JJ) {
      let cJ = null;
      const ZJ = wU(JJ, (() => {
        if (null === cJ) throw new Error("a recorder event read outside recorderEventReader's call");
        return cJ.buffer
      }));
      return (JJ, FJ) => {
        cJ = FJ;
        try {
          ! function(JJ, cJ) {
            const ZJ = JJ.slice(),
              FJ = new DataView(ZJ.buffer);
            for (let UJ = 0; UJ < ZJ.byteLength;) {
              if (UJ + DJ.R > ZJ.byteLength) throw new Error(`the recorder module's events end mid-head at ${UJ}`);
              const JJ = FJ.getUint32(UJ, !0),
                eJ = 65535 & JJ,
                XJ = JJ >>> 16,
                AJ = UJ + DJ.R;
              if (AJ + XJ > ZJ.byteLength || !cJ(eJ, FJ, AJ, XJ)) throw new Error(`the recorder module wrote a malformed event ${eJ} (${XJ} bytes) at ${UJ}`);
              UJ = AJ + (0, DJ.he)(XJ)
            }
          }(JJ, ZJ)
        } finally {
          cJ = null
        }
      }
    }
    class gU {
      constructor(JJ, cJ) {
        this.acks = JJ, this.handlers = cJ, this.parts = new Map
      }
      onPart(JJ, cJ, ZJ) {
        let FJ = this.parts.get(JJ);
        FJ || (FJ = [], this.parts.set(JJ, FJ)), FJ[cJ] = ZJ, this.acks.filePartDone(JJ, cJ)
      }
      onReady(JJ) {
        var cJ;
        const ZJ = null !== (cJ = this.parts.get(JJ.save)) && void 0 !== cJ ? cJ : [];
        this.parts.delete(JJ.save);
        const FJ = function(JJ, cJ, ZJ) {
          if (JJ.length !== cJ) return null;
          let FJ = 0;
          for (let XJ = 0; XJ < cJ; XJ++) {
            if (void 0 === JJ[XJ]) return null;
            FJ += JJ[XJ].byteLength
          }
          if (FJ !== ZJ) return null;
          if (1 === cJ) return JJ[0];
          const UJ = new Uint8Array(ZJ);
          let eJ = 0;
          for (const XJ of JJ) UJ.set(XJ, eJ), eJ += XJ.byteLength;
          return UJ
        }(ZJ, JJ.parts, JJ.bytes);
        this.acks.fileDone(JJ.save), null === FJ ? this.handlers.fileIncomplete(JJ.save, JJ.kind) : this.handlers.fileReady(JJ.save, JJ.kind, FJ)
      }
      onDiscarded(JJ) {
        this.parts.delete(JJ)
      }
    }

    function HU() {
      return ZJ.e(53).then((() => ZJ(41272)))
    }
    class PU {
      constructor(JJ) {
        this.deps = JJ, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: cJ
        } = JJ;
        this.recorder = new IU({
          client: cJ,
          live: () => {
            var JJ;
            return !0 !== (null === (JJ = this.viewer) || void 0 === JJ ? void 0 : JJ.inPlayback)
          },
          viewerOpen: JJ.viewerOpen,
          notify: JJ.notify,
          download: cJ => {
            var ZJ;
            null === (ZJ = JJ.download) || void 0 === ZJ || ZJ.call(JJ, cJ)
          },
          onState: JJ.onRecorderState,
          onSaveState: JJ.onSaveState
        }), this.parts = new gU(cJ, {
          fileReady: (JJ, cJ, ZJ) => {
            var FJ;
            cJ === DJ.Uc.Edited ? null === (FJ = this.viewer) || void 0 === FJ || FJ.saveDone(ZJ) : this.recorder.fileReady(cJ, ZJ)
          },
          fileIncomplete: (JJ, cJ) => {
            this.saveFailed(cJ)
          }
        });
        const ZJ = {
          replayFailed: JJ => {
            var cJ;
            null === (cJ = this.viewer) || void 0 === cJ || cJ.onFailed(JJ)
          },
          replayOption: cJ => {
            var ZJ;
            null === (ZJ = JJ.onReplayOption) || void 0 === ZJ || ZJ.call(JJ, cJ)
          },
          replayUiEvent: cJ => {
            var ZJ;
            null === (ZJ = JJ.onReplayUiEvent) || void 0 === ZJ || ZJ.call(JJ, cJ)
          },
          filePart: (JJ, cJ, ZJ) => {
            this.parts.onPart(JJ, cJ, ZJ)
          },
          fileReady: JJ => {
            this.parts.onReady(JJ)
          },
          replayOpened: cJ => {
            var ZJ;
            null === (ZJ = JJ.onReplayOpened) || void 0 === ZJ || ZJ.call(JJ, cJ)
          },
          recorderEvent: JJ => {
            var cJ;
            switch (JJ.what) {
              case DJ.Ic.FileDiscarded:
                this.parts.onDiscarded(JJ.save);
                break;
              case DJ.Ic.SaveFailed:
                this.saveFailed(JJ.kind);
                break;
              case DJ.Ic.SaveBusy:
                if (null !== (cJ = this.viewer) && void 0 !== cJ && cJ.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(JJ);
                break;
              default:
                this.recorder.onEvent(JJ)
            }
          }
        };
        this.sink = function(JJ, cJ) {
          return {
            onReplayEvent: wU(JJ, cJ)
          }
        }(ZJ, JJ.buffer), this.recorderEvents = WU(ZJ)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var JJ;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (JJ = this.deps.loadViewer) && void 0 !== JJ ? JJ : HU)().catch((JJ => {
          throw this.viewerChunk = null, JJ
        })), this.viewerChunk.then((JJ => (this.viewer ??= new JJ.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var JJ, cJ;
            null === (JJ = (cJ = this.deps).onViewerChange) || void 0 === JJ || JJ.call(cJ)
          }
        }), this.viewer))))
      }
      activated(JJ) {
        this.recorder.activated(JJ)
      }
      afterFrame(JJ) {
        try {
          JJ > 0 && this.recorder.Hh()
        } finally {
          var cJ;
          null === (cJ = this.viewer) || void 0 === cJ || cJ.afterFrame()
        }
      }
      end() {
        var JJ;
        null === (JJ = this.viewer) || void 0 === JJ || JJ.end()
      }
      saveFailed(JJ) {
        var cJ;
        JJ === DJ.Uc.Edited ? null === (cJ = this.viewer) || void 0 === cJ || cJ.saveFailed(!1) : this.recorder.failed(JJ)
      }
    }
    var kU = ZJ(39399),
      pU = ZJ(39410),
      dU = ZJ(4207),
      zU = ZJ(39775);
    class NU {
      constructor(JJ) {
        this.deps = JJ, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(JJ, cJ) {
        if (!this.deps.live() || 0 === JJ && 0 === cJ) return;
        const ZJ = (0, pJ.u)(0, performance.now()),
          FJ = this.deps.dragScale();
        (0, zU.g)((() => {
          (0, pJ.z)(DJ.sb.MouseDown, 0, 0, 0, ZJ), (0, pJ.z)(DJ.sb.MouseMove, 0, JJ * FJ, cJ * FJ, 0), (0, pJ.z)(DJ.sb.MouseUp, 0, 0, 0, ZJ)
        }))
      }
      move(JJ) {
        var cJ, ZJ;
        this.analogue[0] = null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.x) && void 0 !== cJ ? cJ : 0, this.analogue[1] = null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.y) && void 0 !== ZJ ? ZJ : 0, this.send()
      }
      holdVertical(JJ, cJ) {
        const ZJ = "freeCamUp" === JJ ? nJ.Wb.Up : nJ.Wb.Down;
        this.keys = cJ ? this.keys | ZJ : this.keys & ~ZJ, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const JJ = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== JJ && !(0, nJ.Be)(JJ, 0, this.analogue, this.keys)
      }
    }
    var OU = ZJ(35650),
      TU = ZJ(572),
      CU = ZJ(105),
      uU = ZJ(80),
      iU = ZJ(8517);

    function RU() {
      const JJ = FJ.d.get("clientEscMenuOptions"),
        cJ = (0, TU.m)(JJ);
      return {
        mouse: (0, uU.isMobile)() ? cJ : JJ.mouseSensitivity,
        touch: cJ,
        fovPercent: JJ.cameraFOV
      }
    }

    function LU() {
      const JJ = FJ.d.get("clientEscMenuOptions"),
        cJ = FJ.d.get("isTouchScreen") ? (0, TU.m)(JJ) : JJ.mouseSensitivity,
        ZJ = RU().mouse;
      return ZJ > 0 ? cJ / ZJ : 1
    }

    function aU(JJ) {
      const cJ = () => {
        JJ.setSoundPrefs(FJ.d.get("soundVolume"), FJ.d.get("soundOnFromAd"))
      };
      let ZJ = null;
      const UJ = () => {
        const {
          showFog: cJ,
          enableLighting: UJ,
          fogChunkDistance: eJ,
          chunkFadeIn: XJ
        } = FJ.d.get("clientEscMenuOptions"), AJ = {
          showFog: cJ,
          lighting: UJ,
          fogChunks: eJ,
          chunkFade: XJ
        };
        ZJ && (0, DJ.Ud)(ZJ) === (0, DJ.Ud)(AJ) && ZJ.fogChunks === eJ || (ZJ = AJ, JJ.setEnvPrefs(ZJ))
      };
      let eJ = null;
      const AJ = () => {
        const cJ = function() {
          const JJ = FJ.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: FJ.d.get("areNametagsHidden"),
            crouchToggle: JJ.crouchIsToggle,
            bhopDisabled: JJ.disableBunnyHopping,
            disableBobbing: JJ.disableBobbing,
            ezTowering: JJ.ezTowering && (0, CU.e)(),
            ezBridging: JJ.ezBridging,
            showChunkBorders: JJ.showChunkBorders,
            edgeGuard: (0, OU.g)(JJ),
            nametagCutDistance: (0, iU.d)()
          }
        }();
        (0, SJ.Md)(eJ, cJ) || (eJ = cJ, JJ.setUiPrefs(cJ))
      };
      let qJ = null;
      const jJ = () => {
        const cJ = RU();
        (0, SJ.Md)(qJ, cJ) || (qJ = cJ, JJ.setLookPrefs(cJ))
      };
      cJ(), UJ(), AJ(), jJ();
      const YJ = [(0, XJ.j)("appManagerUpdated|soundVolume", cJ), (0, XJ.j)("appManagerUpdated|soundOnFromAd", cJ), (0, XJ.j)("appManagerUpdated|clientEscMenuOptions", (() => {
        UJ(), AJ(), jJ()
      })), (0, XJ.j)("appManagerUpdated|areNametagsHidden", AJ), (0, XJ.j)("appManagerUpdated|showDistantNametags", AJ)];
      return () => {
        for (const JJ of YJ) JJ()
      }
    }
    var BU = ZJ(39682),
      tU = ZJ(39688);
    var oU = (0, tU.b)("lend"),
      lU = (0, tU.b)("starting"),
      Je = (0, tU.b)("generation"),
      ce = (0, tU.b)("end");
    class Ze {
      constructor(JJ) {
        this.deps = JJ, Object.defineProperty(this, ce, {
          value: Fe
        }), Object.defineProperty(this, oU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lU, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Je, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, BU.d)(this, oU)[oU] || (0, BU.d)(this, lU)[lU]
      }
      async start(JJ) {
        if (this.active) return "busy";
        const cJ = (0, BU.d)(this, Je)[Je];
        (0, BU.d)(this, lU)[lU] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, BU.d)(this, lU)[lU] = !1
        }
        if (cJ !== (0, BU.d)(this, Je)[Je]) return "refused";
        const ZJ = this.deps.beginSave();
        if (!ZJ) return "refused";
        const FJ = Number(BigInt.asUintN(32, JJ)),
          UJ = Number(BigInt.asUintN(32, JJ >> 32n));
        let eJ = "refused";
        return this.deps.recorderCall(((JJ, cJ) => {
          const XJ = ZJ.editState,
            AJ = JJ.stage(XJ.length);
          0 !== AJ ? (new Uint8Array(cJ.buffer, AJ, XJ.length).set(XJ), JJ.QUJ(ZJ.headLen, FJ, UJ) && (eJ = "sealing")) : eJ = "tooLarge"
        }), !0), "sealing" !== eJ ? (ZJ.end(), eJ) : ((0, BU.d)(this, oU)[oU] = ZJ, "sealing")
      }
      beforeRecorderStep() {
        const JJ = (0, BU.d)(this, oU)[oU];
        if (!JJ) return null;
        let cJ = -1,
          ZJ = 0;
        if (!this.deps.recorderCall((JJ => {
            cJ = JJ.EUJ(), cJ > 0 && (ZJ = JJ.VUJ())
          }))) return (0, BU.d)(this, ce)[ce](JJ, "stopped");
        if (cJ < 0) return (0, BU.d)(this, ce)[ce](JJ, "read");
        if (0 === cJ) return null;
        const FJ = JJ.head(ZJ, cJ);
        let UJ = !1;
        if (FJ && this.deps.recorderCall(((JJ, ZJ) => {
            const eJ = JJ.stage(cJ);
            0 !== eJ && (new Uint8Array(ZJ.buffer, eJ, cJ).set(FJ), UJ = !0)
          }), !0), UJ) return null;
        const eJ = JJ.givenUp();
        this.deps.recorderCall((JJ => {
          JJ.KUJ()
        }));
        const XJ = (0, BU.d)(this, ce)[ce](JJ, eJ ? "givenUp" : "stopped");
        return eJ && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), XJ
      }
      stop() {
        (0, BU.d)(this, Je)[Je]++;
        const JJ = (0, BU.d)(this, oU)[oU];
        JJ && (this.deps.recorderCall((JJ => {
          JJ.KUJ()
        })), (0, BU.d)(this, ce)[ce](JJ, "stopped"))
      }
    }

    function Fe(JJ, cJ) {
      return (0, BU.d)(this, oU)[oU] = null, JJ.end(), cJ
    }

    function Ue(JJ, cJ) {
      const ZJ = new Uint8Array(4),
        FJ = new DataView(ZJ.buffer);
      return FJ.setUint8(0, JJ ? 1 : 0), FJ.setUint16(2, Math.max(0, Math.min(65535, Math.round(cJ))), !0), ZJ
    }

    function ee(JJ, cJ) {
      return JJ > function(JJ) {
        return 16777216 + 314572.8 * Math.max(0, JJ)
      }(cJ) + 33554432
    }
    let Xe = null;

    function Ae(JJ) {
      return Xe ??= async function(JJ) {
        const cJ = JJ.loadInFlight();
        cJ && await cJ.catch((() => {}));
        if (JJ.trapped()) return "trapped";
        if (JJ.busy() || !ee(JJ.memoryBytes(), JJ.clipSeconds())) return "ys";
        JJ.unload();
        let ZJ = !1;
        try {
          ZJ = await JJ.load()
        } catch {
          ZJ = !1
        }
        if (!ZJ) return JJ.trapped() ? "trapped" : JJ.xn() ? "xn" : "failed";
        return "recycled"
      }(JJ).finally((() => {
        Xe = null
      })), Xe
    }
    const qe = "Replay recording couldn't load, so try again.",
      je = new Set([DJ.Lc.ToggleRecording, DJ.Lc.SaveClip]);
    var Ye = (0, tU.b)("Zn"),
      he = (0, tU.b)("module"),
      De = (0, tU.b)("memory"),
      se = (0, tU.b)("trapped"),
      ne = (0, tU.b)("xn"),
      Ge = (0, tU.b)("recycleDue"),
      fe = (0, tU.b)("loading"),
      xe = (0, tU.b)("generation"),
      re = (0, tU.b)("viewDrawn"),
      ve = (0, tU.b)("clip"),
      me = (0, tU.b)("session"),
      Qe = (0, tU.b)("control"),
      Ee = (0, tU.b)("deferred"),
      Ve = (0, tU.b)("coreU8"),
      Ke = (0, tU.b)("coreU32"),
      ye = (0, tU.b)("moduleU8"),
      Se = (0, tU.b)("edited"),
      Ie = (0, tU.b)("sendSession"),
      Me = (0, tU.b)("checkNotInEvents"),
      be = (0, tU.b)("clipping"),
      we = (0, tU.b)("busy"),
      We = (0, tU.b)("use"),
      ge = (0, tU.b)("ensureLoaded"),
      He = (0, tU.b)("loadOnce"),
      Pe = (0, tU.b)("recycleAfterStep"),
      ke = (0, tU.b)("settleRecycle"),
      pe = (0, tU.b)("load"),
      de = (0, tU.b)("attach"),
      ze = (0, tU.b)("resendHeld"),
      Ne = (0, tU.b)("recycle"),
      Oe = (0, tU.b)("send"),
      Te = (0, tU.b)("unload"),
      Ce = (0, tU.b)("dropModule"),
      ue = (0, tU.b)("coreBytes"),
      ie = (0, tU.b)("coreWords"),
      Re = (0, tU.b)("moduleBytes"),
      Le = (0, tU.b)("loadFailed"),
      ae = (0, tU.b)("call"),
      Be = (0, tU.b)("guard"),
      te = (0, tU.b)("trapOn");
    class oe {
      constructor(JJ) {
        this.deps = JJ, Object.defineProperty(this, te, {
          value: QX
        }), Object.defineProperty(this, Be, {
          value: mX
        }), Object.defineProperty(this, ae, {
          value: vX
        }), Object.defineProperty(this, Le, {
          value: rX
        }), Object.defineProperty(this, Re, {
          value: xX
        }), Object.defineProperty(this, ie, {
          value: fX
        }), Object.defineProperty(this, ue, {
          value: GX
        }), Object.defineProperty(this, Ce, {
          value: nX
        }), Object.defineProperty(this, Te, {
          value: sX
        }), Object.defineProperty(this, Oe, {
          value: DX
        }), Object.defineProperty(this, Ne, {
          value: hX
        }), Object.defineProperty(this, ze, {
          value: YX
        }), Object.defineProperty(this, de, {
          value: jX
        }), Object.defineProperty(this, pe, {
          value: qX
        }), Object.defineProperty(this, ke, {
          value: AX
        }), Object.defineProperty(this, Pe, {
          value: XX
        }), Object.defineProperty(this, He, {
          value: eX
        }), Object.defineProperty(this, ge, {
          value: UX
        }), Object.defineProperty(this, We, {
          value: FX
        }), Object.defineProperty(this, we, {
          value: ZX
        }), Object.defineProperty(this, be, {
          value: cX
        }), Object.defineProperty(this, Me, {
          value: JX
        }), Object.defineProperty(this, Ie, {
          value: le
        }), Object.defineProperty(this, Ye, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, he, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, De, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, se, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ne, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ge, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fe, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xe, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, re, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ve, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, me, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qe, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ee, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ve, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ke, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ye, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Se, {
          writable: !0,
          value: void 0
        }), (0, BU.d)(this, Se)[Se] = new Ze({
          ensureLoaded: () => (0, BU.d)(this, ge)[ge](),
          recorderCall: (JJ, cJ) => {
            cJ && (0, BU.d)(this, Me)[Me]("an edited save's stage");
            const ZJ = (0, BU.d)(this, ae)[ae](((cJ, ZJ) => (JJ(cJ, ZJ), !0)));
            return null !== ZJ && void 0 !== ZJ && ZJ
          },
          beginSave: JJ.beginSave,
          givenUp: JJ.givenUp
        })
      }
      get active() {
        return null !== (0, BU.d)(this, he)[he]
      }
      get trapped() {
        return (0, BU.d)(this, se)[se]
      }
      get loading() {
        return null !== (0, BU.d)(this, fe)[fe]
      }
      prefetch() {
        (0, BU.d)(this, ne)[ne] || (0, BU.d)(this, se)[se] || (0, BU.d)(this, he)[he] || (0, BU.d)(this, fe)[fe] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, BU.d)(this, re)[re] = !0, (0, BU.d)(this, be)[be]() && (0, BU.d)(this, We)[We]()
      }
      prefs(JJ, cJ) {
        (0, BU.d)(this, ve)[ve] = {
          on: JJ,
          seconds: cJ
        }, (0, BU.d)(this, Oe)[Oe](DJ.Ec.Prefs, Ue(JJ, cJ)), JJ && (0, BU.d)(this, re)[re] && (0, BU.d)(this, We)[We]()
      }
      control(JJ) {
        const cJ = function(JJ) {
          return new Uint8Array([JJ, 0, 0, 0])
        }(JJ);
        if (je.has(JJ)) return (0, BU.d)(this, he)[he] ? void(0, BU.d)(this, Oe)[Oe](DJ.Ec.Control, cJ) : ((0, BU.d)(this, Qe)[Qe] = cJ, void(0, BU.d)(this, We)[We]());
        (0, BU.d)(this, ne)[ne] || this.deps.coreCommand(DJ.Ec.Control, cJ)
      }
      session(JJ) {
        (0, BU.d)(this, me)[me] = JJ, (0, BU.d)(this, Ie)[Ie](JJ)
      }
      filePartDone(JJ, cJ) {
        (0, BU.d)(this, Oe)[Oe](DJ.Ec.FilePartDone, function(JJ, cJ) {
          const ZJ = new Uint8Array(8),
            FJ = new DataView(ZJ.buffer);
          return FJ.setUint32(0, JJ, !0), FJ.setUint32(4, cJ, !0), ZJ
        }(JJ, cJ))
      }
      fileDone(JJ) {
        return (0, BU.d)(this, Oe)[Oe](DJ.Ec.FileDone, function(JJ) {
          const cJ = new Uint8Array(4);
          return new DataView(cJ.buffer).setUint32(0, JJ, !0), cJ
        }(JJ)), (0, BU.d)(this, Pe)[Pe]()
      }
      saveEdited(JJ) {
        return (0, BU.d)(this, Me)[Me]("saveEdited"), (0, BU.d)(this, Se)[Se].start(JJ)
      }
      afterFrame() {
        if (!(0, BU.d)(this, he)[he]) return;
        "read" === (0, BU.d)(this, Se)[Se].beforeRecorderStep() && (0, BU.d)(this, Pe)[Pe]();
        const JJ = (0, BU.d)(this, Ge)[Ge];
        (0, BU.d)(this, Ge)[Ge] = null;
        const cJ = (0, BU.d)(this, he)[he],
          ZJ = (0, BU.d)(this, De)[De];
        if (!cJ || !ZJ) return void(null === JJ || void 0 === JJ || JJ.resolve((0, BU.d)(this, se)[se] ? "trapped" : "ys"));
        const {
          core: FJ
        } = this.deps, UJ = FJ.IUJ(2);
        let eJ, XJ, AJ, qJ, jJ = 0,
          YJ = 0;
        if (0 !== UJ) {
          var hJ, DJ;
          const JJ = (0, BU.d)(this, ie)[ie]();
          jJ = null !== (hJ = JJ[UJ >>> 2]) && void 0 !== hJ ? hJ : 0, YJ = null !== (DJ = JJ[1 + (UJ >>> 2)]) && void 0 !== DJ ? DJ : 0
        }
        try {
          if (YJ > 0) {
            const JJ = cJ.feed(YJ);
            0 !== JJ && (0, BU.d)(this, Re)[Re](ZJ).set((0, BU.d)(this, ue)[ue]().subarray(jJ, jJ + YJ), JJ)
          }
          eJ = cJ.step(), XJ = cJ.bUJ(), AJ = cJ.wUJ(), qJ = cJ.WUJ()
        } catch (sJ) {
          if (!(0, BU.d)(this, te)[te](sJ)) throw null === JJ || void 0 === JJ || JJ.resolve("ys"), sJ;
          return void(null === JJ || void 0 === JJ || JJ.resolve("trapped"))
        }
        if (eJ > 0) {
          const JJ = FJ.gUJ(2, eJ);
          0 !== JJ && (0, BU.d)(this, ue)[ue]().set((0, BU.d)(this, Re)[Re](ZJ).subarray(XJ, XJ + eJ), JJ)
        }
        if (AJ > 0) {
          (0, BU.d)(this, Ee)[Ee] = [];
          try {
            this.deps.events(new Uint8Array(ZJ.buffer, qJ, AJ), ZJ)
          } catch (sJ) {
            throw null === JJ || void 0 === JJ || JJ.resolve("ys"), sJ
          } finally {
            const JJ = (0, BU.d)(this, Ee)[Ee];
            (0, BU.d)(this, Ee)[Ee] = null;
            for (const [cJ, ZJ] of JJ)(0, BU.d)(this, Oe)[Oe](cJ, ZJ)
          }
        }
        if (!(0, BU.d)(this, be)[be]() && !(0, BU.d)(this, we)[we]()) return (0, BU.d)(this, Te)[Te](), void(null === JJ || void 0 === JJ || JJ.resolve("ys"));
        null === JJ || void 0 === JJ || JJ.resolve((0, BU.d)(this, Ne)[Ne]())
      }
      dispose() {
        (0, BU.d)(this, ne)[ne] = !0, (0, BU.d)(this, Te)[Te]()
      }
    }

    function le(JJ) {
      (0, BU.d)(this, Oe)[Oe](DJ.Ec.Session, function(JJ) {
        const cJ = new TextEncoder,
          ZJ = cJ.encode(JJ.game).subarray(0, 65535),
          FJ = cJ.encode(JJ.lobby).subarray(0, 65535),
          UJ = new Uint8Array(22 + ZJ.length + 2 + FJ.length),
          eJ = new DataView(UJ.buffer);
        eJ.setFloat64(0, JJ.unixMs, !0), eJ.setBigUint64(8, BigInt.asUintN(64, JJ.session), !0), eJ.setUint8(16, JJ.lobbyType);
        let XJ = 20;
        for (const AJ of [ZJ, FJ]) eJ.setUint16(XJ, AJ.length, !0), UJ.set(AJ, XJ + 2), XJ += 2 + AJ.length;
        return UJ
      }({
        ...JJ,
        unixMs: this.deps.unixNow()
      }))
    }

    function JX(JJ) {
      false
    }

    function cX() {
      var JJ, cJ;
      return null !== (JJ = null === (cJ = (0, BU.d)(this, ve)[ve]) || void 0 === cJ ? void 0 : cJ.on) && void 0 !== JJ && JJ
    }

    function ZX() {
      const JJ = (0, BU.d)(this, he)[he];
      let cJ = !0;
      if (JJ) try {
        cJ = JJ.busy()
      } catch (ZJ) {
        if (!(0, BU.d)(this, te)[te](ZJ)) throw ZJ
      }
      return cJ || (0, BU.d)(this, Se)[Se].active
    }
    async function FX() {
      !(0, BU.d)(this, ne)[ne] && this.deps.allowed() ? await (0, BU.d)(this, ge)[ge]() : (0, BU.d)(this, Qe)[Qe] = null
    }

    function UX() {
      return (0, BU.d)(this, se)[se] || (0, BU.d)(this, ne)[ne] ? Promise.resolve(!1) : (0, BU.d)(this, he)[he] ? Promise.resolve(!0) : ((0, BU.d)(this, fe)[fe] ??= (0, BU.d)(this, He)[He](), (0, BU.d)(this, fe)[fe])
    }
    async function eX() {
      let JJ = !1;
      try {
        return JJ = await (0, BU.d)(this, pe)[pe](), JJ
      } finally {
        JJ || ((0, BU.d)(this, Qe)[Qe] = null), (0, BU.d)(this, fe)[fe] = null
      }
    }

    function XX() {
      if (!(0, BU.d)(this, he)[he]) return Promise.resolve((0, BU.d)(this, se)[se] ? "trapped" : "ys");
      if (!(0, BU.d)(this, Ge)[Ge]) {
        let JJ = () => {};
        const cJ = new Promise((cJ => {
          JJ = cJ
        }));
        (0, BU.d)(this, Ge)[Ge] = {
          promise: cJ,
          resolve: JJ
        }
      }
      return (0, BU.d)(this, Ge)[Ge].promise
    }

    function AX(JJ) {
      const cJ = (0, BU.d)(this, Ge)[Ge];
      (0, BU.d)(this, Ge)[Ge] = null, null === cJ || void 0 === cJ || cJ.resolve(JJ)
    }
    async function qX() {
      let JJ = (0, BU.d)(this, Ye)[Ye];
      if (!JJ) {
        const cJ = (0, BU.d)(this, xe)[xe];
        try {
          JJ = await this.deps.load()
        } catch (ZJ) {
          return cJ === (0, BU.d)(this, xe)[xe] && await (0, BU.d)(this, Le)[Le](ZJ), !1
        }
        if (cJ !== (0, BU.d)(this, xe)[xe]) return this.deps.unload(), !1;
        const FJ = JJ,
          UJ = (0, BU.d)(this, Be)[Be]((() => FJ.HUJ()));
        if (void 0 === UJ) return !1;
        const eJ = this.deps.core.PUJ();
        if (UJ !== eJ) return await (0, BU.d)(this, Le)[Le](new Error(`recorder port version ${UJ}, the core's ${eJ}`)), !1;
        (0, BU.d)(this, Ye)[Ye] = JJ
      }
      const cJ = JJ;
      try {
        if (!(0, BU.d)(this, Be)[Be]((() => ((0, BU.d)(this, he)[he] = new cJ.kUJ, (0, BU.d)(this, De)[De] = cJ.yUJ(), !0)))) return !1;
        (0, BU.d)(this, ze)[ze]();
        const JJ = (0, BU.d)(this, Qe)[Qe];
        return (0, BU.d)(this, Qe)[Qe] = null, JJ && (0, BU.d)(this, Oe)[Oe](DJ.Ec.Control, JJ), (0, BU.d)(this, de)[de]()
      } catch (ZJ) {
        return (0, BU.d)(this, Te)[Te](), await (0, BU.d)(this, Le)[Le](ZJ), !1
      }
    }

    function jX() {
      return this.deps.core.pUJ(0), 1 === this.deps.core.pUJ(1) || ((0, BU.d)(this, Te)[Te](), this.deps.failed(qe), !1)
    }

    function YX() {
      (0, BU.d)(this, ve)[ve] && (0, BU.d)(this, Oe)[Oe](DJ.Ec.Prefs, Ue((0, BU.d)(this, ve)[ve].on, (0, BU.d)(this, ve)[ve].seconds)), (0, BU.d)(this, me)[me] && (0, BU.d)(this, Ie)[Ie]((0, BU.d)(this, me)[me])
    }

    function hX() {
      return Ae({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var JJ, cJ;
          return null !== (JJ = null === (cJ = (0, BU.d)(this, ve)[ve]) || void 0 === cJ ? void 0 : cJ.seconds) && void 0 !== JJ ? JJ : 0
        },
        trapped: () => (0, BU.d)(this, se)[se],
        busy: () => (0, BU.d)(this, we)[we](),
        loadInFlight: () => (0, BU.d)(this, fe)[fe],
        xn: () => (0, BU.d)(this, ne)[ne],
        unload: () => {
          (0, BU.d)(this, Te)[Te]()
        },
        load: () => (0, BU.d)(this, ge)[ge]()
      })
    }

    function DX(JJ, cJ) {
      (0, BU.d)(this, Ee)[Ee] ? (0, BU.d)(this, Ee)[Ee].push([JJ, cJ]): (0, BU.d)(this, ae)[ae](((ZJ, FJ) => {
        const UJ = ZJ.SUJ(cJ.length);
        0 !== UJ && (new Uint8Array(FJ.buffer, UJ, cJ.length).set(cJ), ZJ.command(JJ, cJ.length))
      }))
    }

    function sX() {
      (0, BU.d)(this, xe)[xe]++, (0, BU.d)(this, ke)[ke]("ys"), (0, BU.d)(this, Se)[Se].stop(), this.deps.core.pUJ(0), (0, BU.d)(this, Ce)[Ce](), (0, BU.d)(this, se)[se] || ((0, BU.d)(this, Ye)[Ye] = null, this.deps.unload())
    }

    function nX() {
      (0, BU.d)(this, ae)[ae]((JJ => {
        JJ.free()
      })), (0, BU.d)(this, he)[he] = null, (0, BU.d)(this, De)[De] = null, (0, BU.d)(this, ye)[ye] = null
    }

    function GX() {
      var JJ;
      const cJ = this.deps.coreBuffer();
      return (null === (JJ = (0, BU.d)(this, Ve)[Ve]) || void 0 === JJ ? void 0 : JJ.buffer) !== cJ && ((0, BU.d)(this, Ve)[Ve] = new Uint8Array(cJ)), (0, BU.d)(this, Ve)[Ve]
    }

    function fX() {
      var JJ;
      const cJ = this.deps.coreBuffer();
      return (null === (JJ = (0, BU.d)(this, Ke)[Ke]) || void 0 === JJ ? void 0 : JJ.buffer) !== cJ && ((0, BU.d)(this, Ke)[Ke] = new Uint32Array(cJ, 0, cJ.byteLength >>> 2)), (0, BU.d)(this, Ke)[Ke]
    }

    function xX(JJ) {
      var cJ;
      const ZJ = JJ.buffer;
      return (null === (cJ = (0, BU.d)(this, ye)[ye]) || void 0 === cJ ? void 0 : cJ.buffer) !== ZJ && ((0, BU.d)(this, ye)[ye] = new Uint8Array(ZJ)), (0, BU.d)(this, ye)[ye]
    }
    async function rX(JJ) {
      await this.deps.staleOr(JJ, (() => {
        this.deps.failed(qe)
      }))
    }

    function vX(JJ) {
      const cJ = (0, BU.d)(this, he)[he],
        ZJ = (0, BU.d)(this, De)[De];
      if (cJ && ZJ) return (0, BU.d)(this, Be)[Be]((() => JJ(cJ, ZJ)))
    }

    function mX(JJ) {
      if (!(0, BU.d)(this, se)[se]) try {
        return JJ()
      } catch (cJ) {
        if (!(0, BU.d)(this, te)[te](cJ)) throw cJ;
        return
      }
    }

    function QX(JJ) {
      return JJ instanceof WebAssembly.RuntimeError && ((0, BU.d)(this, se)[se] = !0, (0, BU.d)(this, he)[he] = null, (0, BU.d)(this, De)[De] = null, (0, BU.d)(this, ye)[ye] = null, (0, BU.d)(this, Ye)[Ye] = null, (0, BU.d)(this, Qe)[Qe] = null, (0, BU.d)(this, ke)[ke]("trapped"), this.deps.core.pUJ(0), (0, BU.d)(this, Se)[Se].stop(), this.deps.crash(this.deps.markTrapped(JJ)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var EX = ZJ(37633);
    const VX = new Map([
      ["skyblock", () => ZJ.e(45).then((() => ZJ(37626)))]
    ]);

    function KX(JJ) {
      const cJ = VX.get(JJ);
      return cJ ? cJ().then((() => {
        const cJ = (0, EX.e)(JJ);
        if (!cJ) throw new Error(`${JJ}'s replay hook module registered no hook`);
        return cJ
      })) : null
    }
    class yX {
      constructor(JJ) {
        this.deps = JJ, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(JJ) {
        if (this.pending.clear(), JJ === this.game && null !== this.hook) return void(this.all = !0);
        const cJ = ++this.generation;
        this.game = JJ, this.hook = null, this.all = !1;
        const ZJ = this.deps.loadHook(JJ);
        null === ZJ || void 0 === ZJ || ZJ.then((JJ => {
          cJ === this.generation && (this.hook = JJ, this.all = !0)
        }), (JJ => {
          cJ === this.generation && this.deps.onError(JJ)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(JJ) {
        null === this.hook || this.all || this.pending.set(JJ, !0)
      }
      entityInfoChanged(JJ) {
        null === this.hook || this.all || this.pending.has(JJ) || this.pending.set(JJ, !1)
      }
      flush(JJ) {
        const {
          hook: cJ
        } = this;
        if (null === cJ || !JJ || !this.all && 0 === this.pending.size) return;
        const ZJ = this.deps.cmd();
        if (null === ZJ) return;
        const {
          api: FJ
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: JJ,
            count: cJ
          } = dZ(FJ, this.ids);
          this.ids = JJ;
          for (let ZJ = 0; ZJ < cJ; ZJ++) this.pending.set(JJ[ZJ], !0)
        }
        const UJ = this.ids = zZ(this.ids, this.pending.size);
        let eJ = 0;
        for (const jJ of this.pending.keys()) UJ[eJ++] = jJ;
        const XJ = [],
          AJ = NZ(FJ, UJ, eJ, ((JJ, cJ) => {
            null !== cJ && XJ.push({
              serverId: JJ,
              info: cJ,
              spawned: !0 === this.pending.get(JJ)
            })
          }));
        if (AJ) {
          this.pending.clear();
          for (const {
              serverId: JJ,
              info: FJ,
              spawned: UJ
            }
            of XJ) try {
            cJ(FJ, {
              setFacingTolerance: cJ => {
                null === cJ && UJ || AZ(ZJ, JJ, cJ) || this.pending.set(JJ, UJ)
              }
            })
          } catch (qJ) {
            this.deps.onError(qJ)
          }
        }
      }
    }
    var SX = (0, tU.b)("Zn"),
      IX = (0, tU.b)("module"),
      MX = (0, tU.b)("memory"),
      bX = (0, tU.b)("trapped"),
      wX = (0, tU.b)("generation"),
      WX = (0, tU.b)("loading"),
      gX = (0, tU.b)("lend"),
      HX = (0, tU.b)("givenUp"),
      PX = (0, tU.b)("afterSave"),
      kX = (0, tU.b)("opens"),
      pX = (0, tU.b)("saveAskedAt"),
      dX = (0, tU.b)("unload"),
      zX = (0, tU.b)("dropModule"),
      NX = (0, tU.b)("loadFailed"),
      OX = (0, tU.b)("saveReadsBody"),
      TX = (0, tU.b)("command"),
      CX = (0, tU.b)("call"),
      uX = (0, tU.b)("guard"),
      iX = (0, tU.b)("trapOn");
    class RX {
      constructor(JJ) {
        this.deps = JJ, Object.defineProperty(this, iX, {
          value: cA
        }), Object.defineProperty(this, uX, {
          value: JA
        }), Object.defineProperty(this, CX, {
          value: lX
        }), Object.defineProperty(this, TX, {
          value: oX
        }), Object.defineProperty(this, OX, {
          get: tX,
          set: void 0
        }), Object.defineProperty(this, NX, {
          value: BX
        }), Object.defineProperty(this, zX, {
          value: aX
        }), Object.defineProperty(this, dX, {
          value: LX
        }), Object.defineProperty(this, SX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, wX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, WX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, gX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, PX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, pX, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, BU.d)(this, IX)[IX] && null === (0, BU.d)(this, PX)[PX]
      }
      async open(JJ) {
        if ((0, BU.d)(this, bX)[bX]) return DJ.Sc.ModuleTrap;
        let cJ = (0, BU.d)(this, SX)[SX];
        if (!cJ) {
          const JJ = (0, BU.d)(this, wX)[wX];
          (0, BU.d)(this, WX)[WX]++;
          try {
            cJ = await this.deps.load()
          } catch (FJ) {
            return (0, BU.d)(this, WX)[WX]--, JJ !== (0, BU.d)(this, wX)[wX] ? "stopped" : (0, BU.d)(this, NX)[NX](FJ)
          }
          if ((0, BU.d)(this, WX)[WX]--, JJ !== (0, BU.d)(this, wX)[wX]) return (0, BU.d)(this, SX)[SX] || 0 !== (0, BU.d)(this, WX)[WX] || (0, BU.d)(this, bX)[bX] || this.deps.unload(), "stopped";
          if ((0, BU.d)(this, bX)[bX]) return DJ.Sc.ModuleTrap;
          const ZJ = cJ.HUJ(),
            UJ = this.deps.core.PUJ();
          if (ZJ !== UJ) return (0, BU.d)(this, NX)[NX](new Error(`replay port version ${ZJ}, the core's ${UJ}`));
          (0, BU.d)(this, SX)[SX] = cJ
        }
        if (!(0, BU.d)(this, IX)[IX]) {
          const JJ = cJ;
          if (!(0, BU.d)(this, uX)[uX]((() => {
              (0, BU.d)(this, IX)[IX] = new JJ.dUJ, (0, BU.d)(this, MX)[MX] = JJ.zUJ()
            }))) return DJ.Sc.ModuleTrap
        }
        let ZJ = !1;
        return (0, BU.d)(this, CX)[CX](((cJ, FJ) => {
          null !== (0, BU.d)(this, PX)[PX] && cJ.step(0, 0);
          const UJ = cJ.stage(JJ.length);
          0 !== UJ && (new Uint8Array(FJ.buffer, UJ, JJ.length).set(JJ), cJ.open(), (0, BU.d)(this, HX)[HX] = (0, BU.d)(this, gX)[gX], (0, BU.d)(this, PX)[PX] = null, (0, BU.d)(this, kX)[kX]++, ZJ = !0)
        })) ? ZJ ? "opening" : DJ.Sc.TooLarge : DJ.Sc.ModuleTrap
      }
      beforeFrame(JJ) {
        const cJ = (0, BU.d)(this, IX)[IX],
          ZJ = (0, BU.d)(this, MX)[MX];
        if (!cJ || !ZJ || null !== (0, BU.d)(this, PX)[PX]) return;
        const {
          core: FJ
        } = this.deps, UJ = FJ.NUJ(JJ);
        if (UJ < 0) return;
        const eJ = Math.floor(UJ);
        let XJ, AJ;
        try {
          XJ = cJ.step(eJ, UJ - eJ), AJ = cJ.bUJ()
        } catch (jJ) {
          return void(0, BU.d)(this, iX)[iX](jJ)
        }
        const qJ = FJ.gUJ(1, XJ);
        if (0 === qJ) {
          const JJ = (0, BU.d)(this, CX)[CX]((JJ => {
            JJ.close()
          }));
          if (!JJ) return;
          return (0, BU.d)(this, OX)[OX] ? (0, BU.d)(this, PX)[PX] = "drop" : (0, BU.d)(this, zX)[zX](), void FJ.OUJ(DJ.Sc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), qJ, XJ).set(new Uint8Array(ZJ.buffer, AJ, XJ))
      }
      play() {
        (0, BU.d)(this, TX)[TX]((JJ => {
          JJ.play()
        }))
      }
      pause() {
        (0, BU.d)(this, TX)[TX]((JJ => {
          JJ.pause()
        }))
      }
      seek(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, BU.d)(this, TX)[TX]((ZJ => {
          ZJ.seek(JJ, cJ)
        }))
      }
      setMark(JJ, cJ) {
        return (0, BU.d)(this, TX)[TX]((ZJ => {
          ZJ.TUJ(JJ, cJ)
        }))
      }
      addKeyframe(JJ, cJ) {
        return (0, BU.d)(this, TX)[TX]((ZJ => {
          ZJ.CUJ(JJ[0], JJ[1], JJ[2], cJ[0], cJ[1], cJ[2])
        }))
      }
      setKeyframe(JJ, cJ) {
        return (0, BU.d)(this, TX)[TX]((ZJ => {
          ZJ.uUJ(JJ, cJ)
        }))
      }
      moveKeyframe(JJ, cJ) {
        return (0, BU.d)(this, TX)[TX]((ZJ => {
          ZJ.iUJ(JJ, cJ)
        }))
      }
      deleteKeyframes(JJ, cJ) {
        return (0, BU.d)(this, TX)[TX]((ZJ => {
          ZJ.RUJ(JJ, cJ)
        }))
      }
      crop(JJ, cJ) {
        return null === (0, BU.d)(this, gX)[gX] && (0, BU.d)(this, TX)[TX]((ZJ => {
          ZJ.crop(JJ, cJ)
        }))
      }
      beginSave() {
        const JJ = (0, BU.d)(this, pX)[pX];
        if ((0, BU.d)(this, pX)[pX] = null, null !== JJ && JJ !== (0, BU.d)(this, kX)[kX]) return null;
        let cJ = 0,
          ZJ = null;
        if ((0, BU.d)(this, CX)[CX](((JJ, FJ) => {
            cJ = JJ.save(), 0 !== cJ && (ZJ = new Uint8Array(FJ.buffer, JJ.LUJ(), JJ.aUJ()).slice())
          })), 0 === cJ || !ZJ) return null;
        const FJ = {
          headLen: cJ,
          editState: ZJ,
          givenUp: () => (0, BU.d)(this, HX)[HX] === FJ,
          head: (JJ, cJ) => {
            if ((0, BU.d)(this, gX)[gX] !== FJ || !(0, BU.d)(this, OX)[OX]) return null;
            let ZJ = null;
            return (0, BU.d)(this, CX)[CX](((FJ, UJ) => {
              const eJ = FJ.BUJ();
              0 !== eJ && JJ >= 0 && cJ >= 0 && JJ + cJ <= eJ && (ZJ = new Uint8Array(UJ.buffer, FJ.tUJ() + JJ, cJ))
            })), ZJ
          },
          end: () => {
            if ((0, BU.d)(this, gX)[gX] !== FJ) return;
            (0, BU.d)(this, gX)[gX] = null, (0, BU.d)(this, HX)[HX] = null, (0, BU.d)(this, CX)[CX]((JJ => {
              JJ.oUJ()
            }));
            const JJ = (0, BU.d)(this, PX)[PX];
            (0, BU.d)(this, PX)[PX] = null, "unload" === JJ ? (0, BU.d)(this, dX)[dX]() : "drop" === JJ && (0, BU.d)(this, zX)[zX]()
          }
        };
        return (0, BU.d)(this, gX)[gX] = FJ, FJ
      }
      askSave() {
        (0, BU.d)(this, pX)[pX] = (0, BU.d)(this, kX)[kX]
      }
      setSpeed(JJ) {
        (0, BU.d)(this, TX)[TX]((cJ => {
          cJ.lUJ(JJ)
        }))
      }
      setCameraMode(JJ) {
        (0, BU.d)(this, TX)[TX]((cJ => {
          cJ.JeJ(JJ)
        }))
      }
      close() {
        (0, BU.d)(this, TX)[TX]((JJ => {
          JJ.close()
        }))
      }
      stop() {
        (0, BU.d)(this, wX)[wX]++, (0, BU.d)(this, OX)[OX] && ((0, BU.d)(this, CX)[CX]((JJ => {
          JJ.close()
        })), (0, BU.d)(this, IX)[IX]) ? (0, BU.d)(this, PX)[PX] = "unload" : (0, BU.d)(this, dX)[dX]()
      }
    }

    function LX() {
      (0, BU.d)(this, zX)[zX](), (0, BU.d)(this, bX)[bX] || ((0, BU.d)(this, SX)[SX] = null, this.deps.unload())
    }

    function aX() {
      (0, BU.d)(this, CX)[CX]((JJ => {
        JJ.free()
      })), (0, BU.d)(this, IX)[IX] = null, (0, BU.d)(this, MX)[MX] = null
    }
    async function BX(JJ) {
      return await this.deps.staleOr(JJ, (() => {})) ? "reloading" : DJ.Sc.ModuleLoad
    }

    function tX() {
      return null !== (0, BU.d)(this, gX)[gX] && (0, BU.d)(this, HX)[HX] !== (0, BU.d)(this, gX)[gX]
    }

    function oX(JJ) {
      return null === (0, BU.d)(this, PX)[PX] && (0, BU.d)(this, CX)[CX](JJ)
    }

    function lX(JJ) {
      const cJ = (0, BU.d)(this, IX)[IX],
        ZJ = (0, BU.d)(this, MX)[MX];
      return !(!cJ || !ZJ) && (0, BU.d)(this, uX)[uX]((() => {
        JJ(cJ, ZJ)
      }))
    }

    function JA(JJ) {
      if ((0, BU.d)(this, bX)[bX]) return !1;
      try {
        return JJ(), !0
      } catch (cJ) {
        return (0, BU.d)(this, iX)[iX](cJ), !1
      }
    }

    function cA(JJ) {
      if (!(JJ instanceof WebAssembly.RuntimeError)) throw JJ;
      (0, BU.d)(this, bX)[bX] = !0, (0, BU.d)(this, IX)[IX] = null, (0, BU.d)(this, MX)[MX] = null, (0, BU.d)(this, SX)[SX] = null, this.deps.crash(this.deps.markTrapped(JJ)), this.deps.core.OUJ(DJ.Sc.ModuleTrap)
    }
    var ZA = ZJ(5822),
      FA = ZJ(39484);
    const UA = "[bloxd-wasm-client]";
    const eA = String(SU);

    function XA(JJ) {
      return null === JJ || JJ === eA ? void 0 : JJ
    }

    function AA(JJ) {
      var cJ, ZJ, FJ, UJ, eJ, AJ, qJ;
      switch (JJ.what) {
        case DJ.ad.FlyingText: {
          let cJ;
          try {
            cJ = JSON.parse(JJ.contentJson)
          } catch (jJ) {
            return void console.warn(`${UA} a replay's flying text isn't JSON`, jJ)
          }
          XJ.i.Uf("forceFlyingMiddleMessage", {
            content: cJ,
            NF: JJ.NF,
            angle: JJ.angle,
            TF: JJ.TF
          });
          break
        }
        case DJ.ad.PlayerKilled:
          (0, FA.e)({
            kind: "killed",
            body: {
              deadEId: null !== (cJ = XA(JJ.dead)) && void 0 !== cJ ? cJ : "",
              killerEId: XA(JJ.killer),
              withItem: null !== (ZJ = JJ.withItem) && void 0 !== ZJ ? ZJ : "",
              killstreak: JJ.killstreak
            }
          });
          break;
        case DJ.ad.Killfeed:
          (0, FA.e)({
            kind: "custom",
            body: {
              killer: {
                eId: XA(JJ.killerId),
                name: null !== (FJ = JJ.killerName) && void 0 !== FJ ? FJ : void 0,
                colour: null !== (UJ = JJ.killerColour) && void 0 !== UJ ? UJ : void 0
              },
              victim: {
                eId: XA(JJ.victimId),
                name: null !== (eJ = JJ.victimName) && void 0 !== eJ ? eJ : void 0,
                colour: null !== (AJ = JJ.victimColour) && void 0 !== AJ ? AJ : void 0
              },
              withItem: null !== (qJ = JJ.withItem) && void 0 !== qJ ? qJ : ""
            }
          })
      }
    }
    const qA = "[bloxd-wasm-client]";

    function jA(JJ) {
      if (void 0 === JJ || null === JJ || "" === JJ) return null;
      const cJ = Number(JJ);
      return Number.isInteger(cJ) && cJ > SU && cJ <= 2147483647 ? cJ : null
    }

    function YA(JJ) {
      return {
        id: jA(JJ.eId),
        name: "string" === typeof JJ.name ? JJ.name : null,
        colour: "string" === typeof JJ.colour ? JJ.colour : null
      }
    }

    function hA(JJ) {
      const cJ = (0, pU.k)(RZ.Lb.PlayerKilled, (cJ => {
          var ZJ, FJ;
          const UJ = (0, kU.g)(cJ);
          if (!(0, kU.c)(UJ)) return;
          const {
            deadEId: eJ,
            killerEId: XJ,
            withItem: AJ,
            killstreak: qJ
          } = UJ;
          JJ.recordPlayerKilled(null !== (ZJ = jA(eJ)) && void 0 !== ZJ ? ZJ : SU, null !== (FJ = jA(XJ)) && void 0 !== FJ ? FJ : SU, "number" === typeof qJ ? qJ : 0, "string" === typeof AJ ? AJ : "")
        })),
        ZJ = (0, pU.k)(RZ.Lb.CustomKillfeed, (cJ => {
          const ZJ = (0, kU.g)(cJ);
          if (!(0, kU.c)(ZJ) || !(0, kU.c)(ZJ.killer) || !(0, kU.c)(ZJ.victim)) return;
          const {
            killer: FJ,
            victim: UJ,
            withItem: eJ
          } = ZJ;
          JJ.recordKillfeed(YA(FJ), YA(UJ), "string" === typeof eJ ? eJ : null)
        }));
      return () => {
        cJ(), ZJ()
      }
    }

    function DA(JJ) {
      var cJ;
      return void 0 === JJ || null === JJ ? null : null !== (cJ = JSON.stringify(JJ)) && void 0 !== cJ ? cJ : null
    }

    function sA(JJ) {
      let cJ = null;
      const ZJ = () => {
        const {
          enableClipping: ZJ,
          clipDurationSeconds: UJ
        } = FJ.d.get("clientEscMenuOptions"), eJ = `${ZJ}:${UJ}`;
        eJ !== cJ && (cJ = eJ, JJ.recorder.setPrefs(ZJ, UJ))
      };
      return ZJ(), (0, XJ.j)("appManagerUpdated|clientEscMenuOptions", ZJ)
    }
    const nA = "replayModule",
      GA = "recorderModule";

    function fA(JJ, cJ, ZJ) {
      return function() {
        return JJ.isStopped ? ZJ : cJ(...arguments)
      }
    }
    const xA = {
      open: () => Promise.reject(new Error(xU.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function rA() {
      return ZJ.e(57).then((() => ZJ(59722)))
    }

    function vA(JJ) {
      (0, xU.f)({
        text: JJ,
        type: "Error"
      })
    }
    class mA {
      constructor(JJ) {
        this.deps = JJ, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: cJ,
          api: FJ,
          core: UJ
        } = JJ, eJ = () => JJ.memory().buffer, XJ = () => cJ.isStopped ? null : cJ.rings.cmd, AJ = fA(cJ, ((JJ, cJ) => UJ.gUJ(JJ, cJ)), 0), qJ = () => UJ.PUJ();
        let jJ = null;
        this.replay = new RX({
          core: {
            NUJ: fA(cJ, (JJ => UJ.NUJ(JJ)), -1),
            gUJ: AJ,
            PUJ: qJ,
            OUJ: fA(cJ, (JJ => {
              UJ.OUJ(JJ)
            }), void 0)
          },
          coreBuffer: eJ,
          load: async () => (jJ = await ZJ.e(58).then((() => ZJ(59735))), jJ.loadReplayModule()),
          unload: () => {
            var JJ;
            null === (JJ = jJ) || void 0 === JJ || JJ.unloadReplayModule()
          },
          markTrapped: JJ => jJ ? jJ.markReplayTrapped(JJ) : new Error(String(JJ)),
          staleOr: (cJ, ZJ) => JJ.staleOr(nA, cJ, ZJ),
          crash: cJ => {
            JJ.reportFault(nA, cJ)
          }
        });
        let YJ = null;
        this.recorder = new oe({
          core: {
            pUJ: fA(cJ, (JJ => UJ.pUJ(JJ)), 0),
            IUJ: fA(cJ, (JJ => UJ.IUJ(JJ)), 0),
            gUJ: AJ,
            PUJ: qJ
          },
          coreCommand: (JJ, cJ) => {
            var ZJ, FJ;
            return null !== (ZJ = null === (FJ = XJ()) || void 0 === FJ ? void 0 : FJ.writeCmd(JJ, 0, cJ)) && void 0 !== ZJ && ZJ
          },
          coreBuffer: eJ,
          load: async () => (YJ = await rA(), YJ.loadRecorderModule()),
          prefetch: () => {
            rA().then((JJ => JJ.prefetchRecorderModule())).catch((JJ => {
              console.warn(`${qA} the recorder module didn't prefetch, so a save loads it:`, JJ)
            }))
          },
          unload: () => {
            var JJ;
            null === (JJ = YJ) || void 0 === JJ || JJ.unloadRecorderModule()
          },
          markTrapped: JJ => YJ ? YJ.markRecorderTrapped(JJ) : new Error(String(JJ)),
          memoryBytes: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = YJ) || void 0 === cJ ? void 0 : cJ.recorderMemoryBytes()) && void 0 !== JJ ? JJ : 0
          },
          staleOr: (cJ, ZJ) => JJ.staleOr(GA, cJ, ZJ),
          crash: cJ => {
            JJ.reportFault(GA, cJ)
          },
          allowed: () => !0 === JJ.options.get("canRecordReplays"),
          failed: vA,
          events: (JJ, cJ) => {
            this.runtime.recorderEvents(JJ, cJ)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: vA,
          unixNow: () => Date.now()
        });
        const hJ = new yU({
          core: {
            rUJ: fA(cJ, (JJ => UJ.rUJ(JJ)), 0),
            mUJ: fA(cJ, (() => {
              UJ.mUJ()
            }), void 0),
            Kf: fA(cJ, (() => UJ.Kf()), 0),
            vUJ: fA(cJ, (() => UJ.vUJ()), 0)
          },
          buffer: eJ,
          apiView: () => FJ.apiView,
          cmd: XJ,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new yX({
          api: FJ,
          cmd: XJ,
          loadHook: KX,
          onError: JJ => {
            console.warn(`${qA} the recorded game's replay hooks:`, JJ)
          }
        });
        const DJ = new PU({
          client: hJ,
          buffer: eJ,
          setHoldDraws: JJ => {
            cJ.setHoldDraws(JJ)
          },
          notify: xU.f,
          onRecorderState: () => {
            var JJ;
            null === (JJ = (0, vU.f)()) || void 0 === JJ || JJ.recorderChanged()
          },
          onViewerChange: () => {
            var JJ;
            null === (JJ = (0, vU.f)()) || void 0 === JJ || JJ.viewerChanged()
          },
          onReplayOption: cJ => {
            ! function(JJ, cJ) {
              var ZJ, FJ;
              const UJ = RZ.Z[cJ.key];
              if (void 0 === UJ) return;
              let eJ = null !== (ZJ = cJ.value) && void 0 !== ZJ ? ZJ : JSON.parse(JSON.stringify(null !== (FJ = ZA.b[UJ]) && void 0 !== FJ ? FJ : null));
              if (null !== cJ.value && cJ.key < RZ.pb.Environment && "string" === typeof eJ) try {
                eJ = JSON.parse(eJ)
              } catch (XJ) {
                return void console.warn(`${UA} a replay's ${UJ} isn't JSON`, XJ)
              }
              JJ.applyNewClientOptions({
                [UJ]: eJ
              })
            }(JJ.options, cJ)
          },
          onReplayUiEvent: AA,
          onReplayOpened: cJ => {
            this.entityHooks.opened((0, SJ.Jb)(cJ)), JJ.replayShaderPack(cJ)
          },
          meshPending: () => {
            var JJ, ZJ;
            return null !== (JJ = null === (ZJ = cJ.lastHeader) || void 0 === ZJ ? void 0 : ZJ.renderPending) && void 0 !== JJ ? JJ : 0
          },
          viewerOpen: rU.b,
          download: JJ => {
            (0, GU.j)(JJ)
          }
        });
        this.runtime = DJ, FJ.replay = DJ.sink, (0, vU.v)(DJ);
        const sJ = new NU({
          live: () => {
            var JJ;
            return !cJ.isStopped && !0 === (null === (JJ = DJ.currentViewer) || void 0 === JJ ? void 0 : JJ.inPlayback)
          },
          cmd: XJ,
          dragScale: LU
        });
        this.freecam = sJ, (0, vU.r)(sJ), this.recordedOptions = function(JJ, cJ) {
          const ZJ = RZ.Z,
            FJ = ZJ.map(((ZJ, FJ) => cJ.subscribe(ZJ, (cJ => {
              JJ.setOption(FJ, DA(cJ))
            }))));
          return {
            sendAll() {
              ZJ.forEach(((ZJ, FJ) => {
                JJ.setOption(FJ, DA(cJ.get(ZJ)))
              }))
            },
            stop() {
              for (const JJ of FJ) JJ()
            }
          }
        }(DJ.recorder, JJ.options), this.stops = [(0, FF.m)((JJ => {
          sJ.flush();
          try {
            this.replay.beforeFrame(JJ)
          } catch (cJ) {
            this.deps.reportFault("replayFrame", cJ)
          }
        })), (0, FF.y)(((JJ, cJ) => {
          try {
            this.recorder.afterFrame(), cJ && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (ZJ) {
            this.deps.reportFault("recorderFrame", ZJ)
          }
          try {
            DJ.afterFrame(JJ)
          } catch (ZJ) {
            this.deps.reportFault("replayRuntime", ZJ)
          }
        })), sA(DJ), () => {
          this.recordedOptions.stop()
        }, hA(DJ.recorder), (0, dU.g)((JJ => {
          let {
            action: cJ,
            down: ZJ
          } = JJ;
          var FJ;
          ZJ && (null === (FJ = (0, vU.f)()) || void 0 === FJ || FJ.keyDown(cJ))
        }))];
        const nJ = () => {
          const JJ = DJ.currentViewer;
          return !0 === (null === JJ || void 0 === JJ ? void 0 : JJ.isOpen) ? JJ : null
        };
        (0, fU.e)({
          open: (JJ, cJ) => this.open(JJ, cJ),
          replayKey: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = nJ()) || void 0 === cJ ? void 0 : cJ.id) && void 0 !== JJ ? JJ : null
          },
          saveRefusal: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = nJ()) || void 0 === cJ ? void 0 : cJ.saveRefusal) && void 0 !== JJ ? JJ : null
          },
          encode: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = nJ()) || void 0 === cJ ? void 0 : cJ.save()) && void 0 !== JJ ? JJ : Promise.resolve(null)
          },
          fileHandle: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = DJ.currentViewer) || void 0 === cJ ? void 0 : cJ.fileHandle) && void 0 !== JJ ? JJ : null
          },
          markSaved: (JJ, cJ) => {
            var ZJ;
            null === (ZJ = DJ.currentViewer) || void 0 === ZJ || ZJ.markSaved(JJ, cJ)
          }
        })
      }
      netEvent(JJ) {
        if ("connection" === JJ.type)
          if (JJ.phase === DJ.G.Activated) {
            this.activeConn = JJ.conn;
            const cJ = this.deps.sessionInfo(JJ.conn);
            null !== cJ && (this.runtime.activated({
              lobbyType: (0, IJ.r)(cJ.lobbyName),
              gameNameWithVariation: cJ.gameNameWithVariation,
              lobbyName: cJ.lobbyName
            }), this.recordedOptions.sendAll())
          } else JJ.phase !== DJ.G.Left && JJ.phase !== DJ.G.Closed || JJ.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const JJ of this.stops) JJ();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, vU.n)() === this.runtime && (0, vU.v)(null), (0, vU.j)() === this.freecam && (0, vU.r)(null), (0, fU.e)(xA), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(JJ, cJ) {
        const {
          running: ZJ
        } = this.deps;
        if (ZJ.isStopped) throw new Error(xU.d.coreStopped.text);
        if (JJ.byteLength > 67108864) throw new Error(xU.d.cantOpen.text);
        let FJ;
        try {
          FJ = await async function(JJ) {
            const cJ = await JJ.loadViewer();
            return cJ.inPlayback || (0, FF.F)().leaveGame(null), cJ
          }(this.runtime)
        } catch (UJ) {
          throw console.warn(`${qA} the replay viewer didn't load`, UJ), new Error(xU.d.viewerLoadFailed.text)
        }
        if (ZJ.isStopped) throw new Error(xU.d.coreStopped.text);
        await FJ.open(JJ, cJ)
      }
    }
    var QA = ZJ(1725);

    function EA(JJ, cJ) {
      const {
        aux: ZJ,
        payload: FJ
      } = function(JJ) {
        return {
          aux: JJ.reset ? DJ.Tb.ResetFirst : 0,
          payload: KA(JJ.changes)
        }
      }(cJ);
      JJ.queueOptions(ZJ, FJ) && (cJ.reset && QA.b.reset(), QA.b.apply(cJ.changes))
    }
    const VA = new TextEncoder;

    function KA(JJ) {
      const cJ = new yA;
      return IA(cJ, JJ), cJ.bytes()
    }
    class yA {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(JJ) {
        if (this.len + JJ <= this.buf.length) return;
        const cJ = new Uint8Array(Math.max(2 * this.buf.length, this.len + JJ));
        cJ.set(this.buf.subarray(0, this.len)), this.buf = cJ, this.view = new DataView(cJ.buffer)
      }
      u8(JJ) {
        this.room(1), this.buf[this.len++] = JJ
      }
      tagged(JJ, cJ, ZJ) {
        this.room(1 + cJ), this.buf[this.len++] = JJ, 1 === cJ ? this.view.setUint8(this.len, ZJ) : 2 === cJ ? this.view.setUint16(this.len, ZJ) : this.view.setUint32(this.len, ZJ), this.len += cJ
      }
      signed(JJ, cJ, ZJ) {
        this.room(1 + cJ), this.buf[this.len++] = JJ, 1 === cJ ? this.view.setInt8(this.len, ZJ) : 2 === cJ ? this.view.setInt16(this.len, ZJ) : this.view.setInt32(this.len, ZJ), this.len += cJ
      }
      f64(JJ) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, JJ), this.len += 8
      }
      raw(JJ) {
        this.room(JJ.length), this.buf.set(JJ, this.len), this.len += JJ.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function SA(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      cJ < FJ ? JJ.u8(ZJ | cJ) : null !== UJ && cJ < 256 ? JJ.tagged(UJ, 1, cJ) : cJ < 65536 ? JJ.tagged(eJ, 2, cJ) : JJ.tagged(XJ, 4, cJ)
    }

    function IA(JJ, cJ) {
      switch (typeof cJ) {
        case "undefined":
          return void JJ.raw(MA);
        case "boolean":
          return void JJ.u8(cJ ? 195 : 194);
        case "number":
          return void
          function(JJ, cJ) {
            cJ >>> 0 === cJ ? cJ < 128 ? JJ.u8(cJ) : cJ < 256 ? JJ.tagged(204, 1, cJ) : cJ < 65536 ? JJ.tagged(205, 2, cJ) : JJ.tagged(206, 4, cJ) : (cJ | 0) === cJ ? cJ >= -32 ? JJ.u8(255 & cJ) : cJ >= -128 ? JJ.signed(208, 1, cJ) : cJ >= -32768 ? JJ.signed(209, 2, cJ) : JJ.signed(210, 4, cJ) : JJ.f64(cJ)
          }(JJ, cJ);
        case "string": {
          const ZJ = VA.encode(cJ);
          return SA(JJ, ZJ.length, 160, 32, 217, 218, 219), void JJ.raw(ZJ)
        }
        case "object":
          break;
        default:
          return void JJ.u8(192)
      }
      if (null === cJ) JJ.u8(192);
      else if (Array.isArray(cJ)) {
        SA(JJ, cJ.length, 144, 16, null, 220, 221);
        for (const ZJ of cJ) IA(JJ, ZJ)
      } else if (cJ instanceof Uint8Array) SA(JJ, cJ.length, 0, 0, 196, 197, 198), JJ.raw(cJ);
      else {
        const ZJ = Object.keys(cJ);
        SA(JJ, ZJ.length, 128, 0, null, 222, 223);
        for (const FJ of ZJ) IA(JJ, FJ), IA(JJ, cJ[FJ])
      }
    }
    const MA = new Uint8Array([212, 0, 0]);
    var bA = ZJ(41242),
      wA = ZJ(41244),
      WA = ZJ(39798),
      gA = ZJ(39831),
      HA = ZJ(3183);
    const PA = [1e3, 3e3, 9e3];
    class kA {
      constructor(JJ) {
        this.host = JJ, this.sets = new Map, this.table = [], this.generation = 0, this.xn = !1
      }
      onEvent(JJ) {
        const cJ = function(JJ) {
          if (JJ.byteLength !== DJ.id) return null;
          const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
          return {
            want: cJ.getUint16(0, !0),
            release: cJ.getUint16(2, !0)
          }
        }(JJ);
        cJ && !this.xn && (cJ.release !== DJ.kd && this.release(cJ.release), cJ.want !== DJ.kd && this.want(cJ.want))
      }
      reset(JJ) {
        if (!this.xn) {
          for (const [JJ, cJ] of this.sets) "ready" === cJ.state && this.releaseAll(cJ.distinct), this.sets.delete(JJ);
          this.table = JJ, this.generation++
        }
      }
      dispose() {
        if (this.xn) return;
        this.xn = !0, this.generation++, this.table = [];
        const JJ = [...this.sets.values()];
        this.sets.clear();
        let cJ = null;
        for (const FJ of JJ)
          for (const JJ of "ready" === FJ.state ? FJ.distinct : []) try {
            this.host.zZJ(JJ)
          } catch (ZJ) {
            cJ ??= {
              error: ZJ
            }
          }
        if (cJ) throw cJ.error
      }
      isReady(JJ) {
        var cJ;
        return "ready" === (null === (cJ = this.sets.get(JJ)) || void 0 === cJ ? void 0 : cJ.state)
      }
      want(JJ) {
        const cJ = this.sets.get(JJ);
        if ("loading" === (null === cJ || void 0 === cJ ? void 0 : cJ.state)) return cJ.wanted = !0, void this.capAnswer(JJ, cJ);
        if ("ready" === (null === cJ || void 0 === cJ ? void 0 : cJ.state)) return void this.host.sendReady(dA(JJ, cJ.images, cJ.size));
        const ZJ = this.table[JJ];
        if (!ZJ || 1 !== ZJ.urls.length && ZJ.urls.length !== RZ.Db.CubeFaces) return this.host.sendReady(zA(JJ)), void this.host.onLoadFailed(JJ, "", new Error(`no image set ${JJ}`));
        const FJ = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(JJ, FJ), this.load(JJ, ZJ, FJ, this.generation, 0), this.capAnswer(JJ, FJ)
      }
      capAnswer(JJ, cJ) {
        this.host.wait(4e3, (() => {
          this.sets.get(JJ) === cJ && cJ.wanted && this.host.sendReady(zA(JJ))
        }))
      }
      load(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = [...new Set(cJ.urls)];
        Promise.allSettled(eJ.map((JJ => this.host.loadImage(JJ, cJ.orientation)))).then((XJ => {
          const AJ = XJ.flatMap((JJ => "fulfilled" === JJ.status ? [JJ.value] : [])),
            qJ = FJ === this.generation && this.sets.get(JJ) === ZJ,
            jJ = XJ.findIndex((JJ => "rejected" === JJ.status));
          if (!qJ || !ZJ.wanted) return this.xn ? void this.releaseAfterDispose(AJ.map(pA)) : (this.releaseAll(AJ.map(pA)), void(qJ && this.sets.delete(JJ)));
          jJ < 0 ? this.loaded(JJ, cJ, eJ, AJ) : (this.releaseAll(AJ.map(pA)), this.host.sendReady(zA(JJ)), UJ < PA.length ? this.host.wait(PA[UJ], (() => {
            FJ === this.generation && this.sets.get(JJ) === ZJ && (ZJ.wanted ? this.load(JJ, cJ, ZJ, FJ, UJ + 1) : this.sets.delete(JJ))
          })) : (this.sets.delete(JJ), this.host.onLoadFailed(JJ, eJ[jJ], XJ[jJ].reason)))
        }))
      }
      loaded(JJ, cJ, ZJ, FJ) {
        const [UJ] = FJ, eJ = [UJ.width, UJ.height], XJ = FJ.every((JJ => JJ.width === eJ[0] && JJ.height === eJ[1])), AJ = cJ.urls.length === RZ.Db.CubeFaces;
        if (!XJ || eJ[0] <= 0 || eJ[1] <= 0 || eJ[0] > 65535 || eJ[1] > 65535 || AJ && eJ[0] !== eJ[1]) {
          this.releaseAll(FJ.map(pA)), this.sets.delete(JJ), this.host.sendReady(zA(JJ));
          const ZJ = FJ.map((JJ => `${JJ.width}x${JJ.height}`));
          return void this.host.onLoadFailed(JJ, cJ.urls[0], new Error(`set ${JJ}'s images can't make its texture: ${ZJ.join(", ")}`))
        }
        const qJ = cJ.urls.map((JJ => FJ[ZJ.indexOf(JJ)].id)),
          jJ = FJ.map(pA);
        this.sets.set(JJ, {
          state: "ready",
          images: qJ,
          distinct: jJ,
          size: eJ
        }), this.host.sendReady(dA(JJ, qJ, eJ))
      }
      release(JJ) {
        const cJ = this.sets.get(JJ);
        "loading" === (null === cJ || void 0 === cJ ? void 0 : cJ.state) ? cJ.wanted = !1: "ready" === (null === cJ || void 0 === cJ ? void 0 : cJ.state) && (this.releaseAll(cJ.distinct), this.sets.delete(JJ))
      }
      releaseAll(JJ) {
        for (const cJ of JJ) this.host.zZJ(cJ)
      }
      releaseAfterDispose(JJ) {
        for (const cJ of JJ) try {
          this.host.zZJ(cJ)
        } catch {}
      }
    }

    function pA(JJ) {
      return JJ.id
    }

    function dA(JJ, cJ, ZJ) {
      const FJ = new Uint8Array(RZ.Db.SkyImagesReadyBytes),
        UJ = new DataView(FJ.buffer);
      return UJ.setUint16(0, JJ, !0), UJ.setUint16(2, cJ.length, !0), UJ.setUint16(4, ZJ[0], !0), UJ.setUint16(6, ZJ[1], !0), cJ.slice(0, RZ.Db.CubeFaces).forEach(((JJ, cJ) => {
        UJ.setUint32(8 + 4 * cJ, JJ, !0)
      })), FJ
    }

    function zA(JJ) {
      const cJ = new Uint8Array(RZ.Db.SkyImagesReadyBytes),
        ZJ = new DataView(cJ.buffer);
      return ZJ.setUint16(0, JJ, !0), ZJ.setUint16(2, RZ.Db.Failed, !0), cJ
    }
    let NA = Promise.resolve();
    async function OA(JJ, cJ) {
      let ZJ;
      try {
        ZJ = await (0, HA.L)(JJ)
      } catch (eJ) {
        throw new WA.d("fetch", JJ, {
          cause: eJ
        })
      }
      const FJ = NA.then((() => async function(JJ, cJ) {
        const ZJ = new Blob([JJ.slice()]);
        let FJ = await createImageBitmap(ZJ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: cJ
        });
        const UJ = 1024 / Math.max(FJ.width, FJ.height);
        if (UJ < 1) {
          const JJ = FJ;
          try {
            FJ = await createImageBitmap(JJ, {
              resizeWidth: Math.max(1, Math.round(JJ.width * UJ)),
              resizeHeight: Math.max(1, Math.round(JJ.height * UJ)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            JJ.close()
          }
        }
        return FJ
      }(ZJ, cJ)));
      let UJ;
      NA = FJ.catch((() => {}));
      try {
        UJ = await FJ
      } catch (eJ) {
        throw new WA.d("decode", JJ, {
          cause: eJ
        })
      }
      return {
        id: (0, WA.l)(UJ),
        width: UJ.width,
        height: UJ.height
      }
    }
    var TA = ZJ(2651),
      CA = ZJ(33431);
    const uA = TA.g.length;

    function iA(JJ) {
      const cJ = [],
        ZJ = [];
      TA.g.forEach(((FJ, UJ) => {
        var eJ;
        const XJ = null !== (eJ = RA(JJ[FJ])) && void 0 !== eJ ? eJ : CA.l[FJ];
        "custom" === XJ.type ? (ZJ.push({
          id: UJ,
          kind: RZ.Db.KindCustom,
          set: cJ.length,
          earth: null
        }), cJ.push({
          urls: [XJ.px, XJ.py, XJ.pz, XJ.nx, XJ.ny, XJ.nz],
          orientation: "none"
        })) : ZJ.push({
          id: UJ,
          kind: RZ.Db.KindEarth,
          set: 0,
          earth: XJ
        })
      }));
      const FJ = RA(JJ.earth);
      "earth" === (null === FJ || void 0 === FJ ? void 0 : FJ.type) && ZJ.push({
        id: uA,
        kind: RZ.Db.KindEarth,
        set: 0,
        earth: FJ
      });
      const UJ = cJ.length;
      cJ.push({
        urls: CA.c.map((JJ => CA.g + JJ)),
        orientation: "none"
      }), cJ.push({
        urls: [CA.h],
        orientation: "flipY"
      }), cJ.push({
        urls: [CA.b],
        orientation: "flipY"
      });
      const eJ = new Uint8Array(RZ.Db.SkyTableHeaderBytes + ZJ.length * RZ.Db.SkyTableEntryBytes),
        XJ = new DataView(eJ.buffer);
      return XJ.setUint16(0, UJ, !0), XJ.setUint16(2, UJ + 1, !0), XJ.setUint16(4, UJ + 2, !0), XJ.setUint16(6, ZJ.length, !0), ZJ.forEach(((JJ, cJ) => {
        const ZJ = RZ.Db.SkyTableHeaderBytes + cJ * RZ.Db.SkyTableEntryBytes;
        XJ.setUint16(ZJ, JJ.id, !0), XJ.setUint8(ZJ + 2, JJ.kind);
        const FJ = ZJ + 4;
        JJ.earth ? function(JJ, cJ, ZJ) {
          const FJ = JJ;
          let UJ = 0,
            eJ = 0;
          for (const [XJ, AJ] of LA) {
            const JJ = FJ[XJ];
            "number" === typeof JJ && Number.isFinite(JJ) && (cJ.setFloat32(ZJ + 4 * AJ, JJ, !0), UJ |= 1 << AJ)
          }
          for (const [XJ, AJ, qJ] of aA) {
            const JJ = FJ[XJ];
            Array.isArray(JJ) && 3 === JJ.length && JJ.every((JJ => "number" === typeof JJ && Number.isFinite(JJ))) && (JJ.forEach(((JJ, FJ) => {
              cJ.setFloat32(ZJ + qJ + 4 * FJ, JJ, !0)
            })), UJ |= AJ)
          }
          BA.forEach(((JJ, eJ) => {
            let [XJ, AJ] = JJ;
            const qJ = FJ[XJ];
            "number" === typeof qJ && Number.isFinite(qJ) && (cJ.setFloat32(ZJ + RZ.l.CameraOffsetAt + 4 * eJ, qJ, !0), UJ |= AJ)
          }));
          for (const [XJ, AJ] of tA) {
            const JJ = FJ[XJ];
            null !== JJ && void 0 !== JJ && (UJ |= AJ, JJ && (eJ |= AJ >>> 14))
          }
          cJ.setUint32(ZJ + RZ.l.PresentAt, UJ, !0), cJ.setUint8(ZJ + RZ.l.FlagsAt, eJ)
        }(JJ.earth, XJ, FJ) : XJ.setUint16(FJ, JJ.set, !0)
      })), {
        payload: eJ,
        sets: cJ
      }
    }

    function RA(JJ) {
      if ("object" !== typeof JJ || null === JJ) return null;
      const cJ = JJ;
      if ("earth" === cJ.type) return JJ;
      return "custom" === cJ.type && ["px", "py", "pz", "nx", "ny", "nz"].every((JJ => {
        const ZJ = cJ[JJ];
        return "string" === typeof ZJ && ZJ.length > 0
      })) ? JJ : null
    }
    const LA = [
        ["inclination", RZ.l.Inclination],
        ["turbidity", RZ.l.Turbidity],
        ["luminance", RZ.l.Luminance],
        ["rayleigh", RZ.l.Rayleigh],
        ["mieCoefficient", RZ.l.MieCoefficient],
        ["mieDirectionalG", RZ.l.MieDirectionalG],
        ["distance", RZ.l.Distance],
        ["azimuth", RZ.l.Azimuth]
      ],
      aA = [
        ["sunPosition", RZ.l.SunPosition, RZ.l.SunPositionAt],
        ["up", RZ.l.Up, RZ.l.UpAt],
        ["vertexTint", RZ.l.VertexTint, RZ.l.VertexTintAt]
      ],
      BA = [
        ["xCameraOffset", RZ.l.CameraOffsetX],
        ["yCameraOffset", RZ.l.CameraOffsetY],
        ["zCameraOffset", RZ.l.CameraOffsetZ]
      ],
      tA = [
        ["useSunPosition", RZ.l.UseSunPosition],
        ["dithering", RZ.l.Dithering],
        ["infiniteDistance", RZ.l.InfiniteDistance]
      ];

    function oA(JJ, cJ, ZJ) {
      const FJ = new Jq({
        writeCmd: JJ,
        warn: cJ,
        followPack: lA(ZJ, cJ)
      });
      return FJ.start(), FJ
    }

    function lA(JJ, cJ) {
      return ZJ => {
        let FJ = () => {};
        const UJ = JJ((JJ => {
          FJ(), FJ = () => {}, null !== JJ ? FJ = JJ.subscribe((JJ => {
            ZJ(function(JJ, cJ, ZJ) {
              if ("object" !== typeof JJ || null === JJ) return null;
              const FJ = JJ.skyBoxes;
              if ("object" !== typeof FJ || null === FJ) return null;
              if ("player" === cJ) return FJ;
              return Object.fromEntries(Object.entries(FJ).filter((JJ => {
                let [cJ, FJ] = JJ;
                return !! function(JJ) {
                  if ("object" !== typeof JJ || null === JJ) return !1;
                  return "earth" === JJ.type || Object.entries(JJ).every((JJ => {
                    let [cJ, ZJ] = JJ;
                    return "type" === cJ || ("" === (FJ = ZJ) || null !== function(JJ) {
                      var cJ, ZJ, FJ;
                      return "string" !== typeof JJ ? null : null !== (cJ = null === (ZJ = cq.exec(JJ)) || void 0 === ZJ || null === (FJ = ZJ.groups) || void 0 === FJ ? void 0 : FJ.base64) && void 0 !== cJ ? cJ : null
                    }(FJ));
                    var FJ
                  }))
                }(FJ) || (ZJ(`Ignoring texture pack skybox ${cJ}, whose faces are not all data URLs`, null), !1)
              })))
            }(JJ.pack, null === JJ.gameSource ? "player" : "customGame", cJ))
          })) : ZJ(null)
        }));
        return () => {
          UJ(), FJ()
        }
      }
    }
    class Jq {
      constructor(JJ) {
        var cJ, ZJ, FJ;
        this.host = JJ, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.xn = !1, this.wait = null !== (cJ = JJ.wait) && void 0 !== cJ ? cJ : (JJ, cJ) => {
          setTimeout(cJ, JJ)
        }, this.loader = new kA({
          loadImage: null !== (ZJ = JJ.loadImage) && void 0 !== ZJ ? ZJ : OA,
          zZJ: null !== (FJ = JJ.zZJ) && void 0 !== FJ ? FJ : WA.m,
          sendReady: JJ => {
            this.queue.push({
              kind: RZ.Db.SkyImagesReady,
              payload: JJ
            })
          },
          onLoadFailed: (cJ, ZJ, FJ) => {
            JJ.warn(`sky image set ${cJ} (${ZJ}) didn't load: the last sky stays`, FJ)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(gA.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((JJ => {
          this.write(null !== JJ && void 0 !== JJ ? JJ : {})
        }))
      }
      onEvent(JJ) {
        this.loader.onEvent(JJ)
      }
      drain() {
        if (0 === this.queue.length) return;
        let JJ = 0;
        for (; JJ < this.queue.length && this.host.writeCmd(this.queue[JJ].kind, 0, this.queue[JJ].payload);) JJ++;
        JJ > 0 && this.queue.splice(0, JJ)
      }
      dispose() {
        this.xn = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(JJ) {
        if (this.xn) return;
        const cJ = iA(JJ);
        var ZJ, FJ;
        this.written && (ZJ = this.written, FJ = cJ, ZJ.payload.length === FJ.payload.length && ZJ.payload.every(((JJ, cJ) => JJ === FJ.payload[cJ])) && ZJ.sets.length === FJ.sets.length && ZJ.sets.every(((JJ, cJ) => {
          const ZJ = FJ.sets[cJ];
          return JJ.orientation === ZJ.orientation && JJ.urls.length === ZJ.urls.length && JJ.urls.every(((JJ, cJ) => JJ === ZJ.urls[cJ]))
        }))) || (this.written = cJ, this.loader.reset(cJ.sets), this.queue = this.queue.filter((JJ => JJ.kind !== RZ.Db.SkyImagesReady)), this.queue.push({
          kind: RZ.Db.SkyTable,
          payload: cJ.payload
        }))
      }
    }
    const cq = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Zq = ZJ(2445),
      Fq = ZJ(2505),
      Uq = ZJ(107),
      eq = ZJ(155),
      Xq = ZJ(2450),
      Aq = ZJ(2459),
      qq = ZJ(211),
      jq = ZJ(218),
      Yq = ZJ(2464),
      hq = ZJ(2475),
      Dq = ZJ(93),
      sq = ZJ(223),
      nq = ZJ(39561);
    class Gq {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, pU.k)(rF.R, (JJ => {
          this.onReply((0, kU.d)(rF.R, JJ), performance.now())
        }))
      }
      onFrame(JJ, cJ) {
        null === this.id ? this.id = JJ : JJ !== this.id && (this.id = JJ, this.sentMs = document.hidden ? null : cJ)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(JJ, cJ) {
        JJ === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(cJ - this.sentMs), this.sentMs = null)
      }
      take() {
        const JJ = this.roundTripMs;
        return this.roundTripMs = null, JJ
      }
      stop() {
        this.stopReplies()
      }
    }
    class fq {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(JJ, cJ, ZJ, FJ) {
        const UJ = JJ - this.sampled >>> 0,
          eJ = cJ - this.timed >>> 0,
          XJ = ZJ - this.frameUs >>> 0,
          AJ = this.primed;
        return this.sampled = JJ, this.timed = cJ, this.frameUs = ZJ, this.primed = !0, !(!AJ || UJ > 64 || eJ > 64) && (FJ && XJ <= 1e6 * eJ && (this.windowTimed += eJ, this.windowUs += XJ), FJ && UJ > 0)
      }
      reset() {}
      snapshotAndReset() {
        const JJ = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: JJ,
          submitToDoneMs: null
        }
      }
    }
    const xq = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class rq {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(JJ, cJ) {
        const ZJ = Math.min(4096, this.count + cJ);
        this.samples.fill(JJ, this.count, ZJ), this.count = ZJ
      }
      clear() {
        this.count = 0
      }
      take(JJ) {
        const cJ = this.count;
        if (this.count = 0, cJ < 30) return null;
        const ZJ = this.samples.subarray(0, cJ).sort();
        return JJ.map((JJ => ZJ[Math.min(cJ - 1, Math.floor(JJ * cJ))]))
      }
    }
    class vq {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new rq, this.inJoin = !1, this.rose = !1, this.joinLags = new rq, this.joinLagP90Ms = null
      }
      onFrame(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = JJ.headerWord(RZ.D.Pacing),
          XJ = JJ.headerWord(RZ.D.PacingLagUs),
          AJ = (eJ >>> RZ.K.LagsShift) - (this.word >>> RZ.K.LagsShift) & RZ.K.CountMask,
          qJ = (eJ >>> RZ.K.SwitchesShift) - (this.word >>> RZ.K.SwitchesShift) & RZ.K.CountMask,
          jJ = AJ > 0 ? (XJ - this.lagUs >>> 0) / AJ / 1e3 : 0,
          YJ = this.primed && AJ <= 64 && qJ <= 2 && jJ <= 6e4;
        if (this.rose = 0 !== (eJ & ~this.word & RZ.K.Joining), this.word = eJ, this.lagUs = XJ, this.primed = !0, 0 !== (eJ & RZ.K.Tiered)) {
          if (0 !== (eJ & RZ.K.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && YJ && FJ && AJ > 0 && this.joinLags.add(jJ, AJ);
          else if (this.inJoin) {
            var hJ, DJ;
            this.inJoin = !1, this.joinLagP90Ms = null !== (hJ = null === (DJ = this.joinLags.take([.9])) || void 0 === DJ ? void 0 : DJ[0]) && void 0 !== hJ ? hJ : null
          }
          if (UJ) {
            if (YJ && (this.switches += qJ, AJ > 0 && this.lags.add(jJ, AJ)), ZJ) {
              if (this.lastDrawnMs >= 0 && cJ - this.lastDrawnMs <= 250) {
                const JJ = cJ - this.lastDrawnMs;
                this.tieredMs += JJ, (eJ & RZ.K.AheadMask) > 0 && (this.pacedMs += JJ)
              }
              this.lastDrawnMs = cJ
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(JJ) {
        const cJ = this.takeWindow(),
          ZJ = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, JJ ? {
          ...cJ,
          joinLagP90Ms: ZJ
        } : {
          ...xq,
          joinLagP90Ms: ZJ
        }
      }
      unsent(JJ) {
        this.joinLagP90Ms ??= JJ.joinLagP90Ms
      }
      takeWindow() {
        var JJ, cJ;
        const ZJ = this.tieredMs >= 2e3,
          FJ = this.lags.take([.5, .9]),
          UJ = {
            pacedShare: ZJ ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: ZJ ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (JJ = null === FJ || void 0 === FJ ? void 0 : FJ[0]) && void 0 !== JJ ? JJ : null,
            lagP90Ms: null !== (cJ = null === FJ || void 0 === FJ ? void 0 : FJ[1]) && void 0 !== cJ ? cJ : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, UJ
      }
    }
    var mq = ZJ(8532),
      Qq = ZJ(2431),
      Eq = ZJ(39767),
      Vq = ZJ(8526);
    const Kq = {
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

    function yq(JJ) {
      return new Sq(JJ)
    }
    class Sq {
      constructor(JJ) {
        this.shell = JJ, this.tracker = new Aq.b, this.gpu = new fq, this.pacing = new vq, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Gq, this.pacedCpuMs = 0, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, mq.b)(JJ.backend, JJ.canvas, JJ.adapterVendor), this.tracker.start((() => !JJ.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(JJ) {
        this.tracker.onAnimationFrame(JJ)
      }
      frameRan(JJ, cJ, ZJ, FJ) {
        this.ping.onFrame(JJ.headerWord(RZ.D.PingSent), ZJ);
        const UJ = this.tracker;
        this.pacing.onFrame(JJ, cJ, "drawn" === FJ, !document.hidden, UJ.isSampling());
        const eJ = JJ.headerWord(RZ.D.TickUs) / 1e3 + (0, FF.H)();
        UJ.Km(eJ);
        const XJ = Math.max(0, ZJ - cJ - eJ);
        if ("drawn" !== FJ) return void("paced" === FJ && (this.pacedCpuMs += XJ));
        this.followGame(), UJ.onFrameStart(cJ);
        this.gpu.onFrame(JJ.headerWord(RZ.D.GpuSampled), JJ.headerWord(RZ.D.GpuTimed), JJ.headerWord(RZ.D.GpuFrameUs), UJ.isSampling()) && UJ.onGpuSampleStarted(), UJ.onFrameCpu(XJ + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(cJ)
      }
      stop() {
        for (const JJ of this.timers) clearInterval(JJ);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const JJ = this.shell.joinedGame();
        return JJ !== this.game && (this.game = JJ, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== JJ
      }
      countFpsFrame(JJ) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = JJ
        }
        this.fpsFrames++;
        const cJ = JJ - this.fpsSpanStartMs;
        if (!(cJ < 15e3)) {
          if (!document.hidden) {
            const JJ = 1e3 * this.fpsFrames / cJ;
            this.firstSpanFps ??= JJ, this.initialFps = this.firstSpanFps, this.fpsOverTime = JJ
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = JJ
        }
      }
      flush() {
        const JJ = this.followGame(),
          {
            cpuFrameMs: cJ,
            refreshHz: ZJ,
            cpuBottleneck: UJ,
            frameIntervalCv: eJ,
            ...XJ
          } = this.tracker.snapshotAndReset(),
          AJ = this.shell.inGame(),
          qJ = AJ && this.inGameAtLastFlush,
          jJ = qJ ? XJ : Xq.i,
          YJ = this.pacing.snapshotAndReset(qJ);
        if (this.inGameAtLastFlush = AJ, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !JJ) return void this.pacing.unsent(YJ);
        const hJ = performance.now(),
          sJ = (0, hq.p)((0, hq.l)(hJ), this.unsentPage),
          GJ = function(JJ, cJ, ZJ, UJ, eJ, XJ, AJ, qJ) {
            var jJ, YJ, hJ;
            const DJ = {},
              {
                canvas: sJ
              } = JJ,
              nJ = (0, Yq.d)({
                refreshHz: cJ.refreshHz,
                msaa: JJ.msaa(),
                autoMsaaOff: (0, Vq.d)()
              });
            for (const GJ of (0, Fq.b)()) {
              const fJ = GJ.name;
              let xJ;
              if ((0, Uq.h)(fJ)) xJ = (0, hq.d)(fJ);
              else if ((0, hq.i)(fJ)) xJ = qJ[fJ];
              else if ((0, Yq.h)(fJ)) xJ = nJ[fJ];
              else switch (fJ) {
                case "fps":
                  xJ = UJ;
                  break;
                case "VA":
                  xJ = eJ;
                  break;
                case "MA":
                  xJ = (0, Qq.v)((0, Eq.i)().n);
                  break;
                case "bA":
                  xJ = Math.max(sJ.width, sJ.height);
                  break;
                case "wA":
                  xJ = Math.min(sJ.width, sJ.height);
                  break;
                case "WA":
                  xJ = navigator.hardwareConcurrency || null;
                  break;
                case "gA":
                  xJ = (0, uU.getWebGpuSupported)();
                  break;
                case "HA":
                  xJ = null === JJ.fallbackReason ? null : Kq[JJ.fallbackReason];
                  break;
                case "PA":
                  xJ = cJ.cpuFrameMs;
                  break;
                case "kA":
                  xJ = cJ.refreshHz;
                  break;
                case "pA":
                  xJ = cJ.cpuBottleneck;
                  break;
                case "dA":
                  xJ = cJ.frameIntervalCv;
                  break;
                case "zA":
                  xJ = cJ.frameMs;
                  break;
                case "NA":
                  xJ = cJ.tickMs;
                  break;
                case "uA":
                  xJ = cJ.mainBusyShare;
                  break;
                case "iA":
                  xJ = cJ.mainProbeDelayMs;
                  break;
                case "OA":
                  xJ = cJ.longAnimationFramesPerMin;
                  break;
                case "TA":
                  xJ = cJ.longAnimationFrameTimeShare;
                  break;
                case "CA":
                  xJ = cJ.longAnimationFrameScriptShare;
                  break;
                case "RA":
                  xJ = cJ.gpuPassMs;
                  break;
                case "LA":
                  xJ = cJ.gpuSubmitToDoneMs;
                  break;
                case "aA":
                  xJ = ZJ.pacedShare;
                  break;
                case "BA":
                  xJ = ZJ.switchesPerHour;
                  break;
                case "tA":
                  xJ = ZJ.lagP50Ms;
                  break;
                case "oA":
                  xJ = ZJ.lagP90Ms;
                  break;
                case "lA":
                  xJ = ZJ.joinLagP90Ms;
                  break;
                case "hq":
                  xJ = (0, Zq.k)(XJ);
                  break;
                case "IA":
                  xJ = AJ;
                  break;
                case "Jq":
                case "cq":
                case "Zq":
                case "Fq":
                case "Uq":
                case "eq":
                case "Xq":
                case "Aq":
                case "qq":
                case "jq":
                case "Yq":
                case "Dq":
                case "nq":
                case "Gq":
                case "fq":
                  xJ = null;
                  break;
                case "bq":
                  xJ = (0, uU.getPlatformType)();
                  break;
                case "wq":
                  xJ = (0, uU.getGpuVendor)();
                  break;
                case "Wq":
                  xJ = nq.b[JJ.backend];
                  break;
                case "Hq":
                  xJ = (0, Dq.e)();
                  break;
                case "Pq":
                  xJ = (0, uU.getOperatingSystem)();
                  break;
                case "kq":
                  xJ = (0, uU.getTrafficSource)();
                  break;
                case "pq":
                  xJ = null !== (jJ = FJ.d.get("gameEntrySource")) && void 0 !== jJ ? jJ : eq.f;
                  break;
                case "dq":
                  xJ = cJ.frameLimiter;
                  break;
                case "zq":
                  xJ = (0, qq.j)();
                  break;
                case "Nq":
                  xJ = null !== (YJ = (0, jq.c)()) && void 0 !== YJ ? YJ : eq.f;
                  break;
                case "Oq":
                  xJ = (0, qq.b)(sJ.width, sJ.height);
                  break;
                case "Tq":
                  xJ = (0, Fq.c)(-(new Date).getTimezoneOffset());
                  break;
                case "iq":
                  xJ = null !== (hJ = JJ.fallbackReason) && void 0 !== hJ ? hJ : eq.f;
                  break;
                case "aq":
                  xJ = "ready";
                  break;
                case "Bq":
                  xJ = (0, uU.getSoftwareRenderer)();
                  break;
                case "uq":
                  xJ = JJ.shaderPackRuns() ? "true" : "false";
                  break;
                case "lq":
                  xJ = sq.m;
                  break;
                case "Cq":
                case "tq":
                case "oq":
                case "Rq":
                case "Lq":
                  xJ = eq.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${fJ}`)
              }
              if (void 0 === xJ) throw new Error(`Metric ${fJ} has no value`);
              DJ[fJ] = xJ
            }
            return DJ
          }(this.shell, {
            cpuFrameMs: cJ,
            refreshHz: ZJ,
            cpuBottleneck: UJ,
            frameIntervalCv: eJ,
            ...jJ
          }, YJ, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), sJ);
        if (! function(JJ, cJ, ZJ) {
            return (0, uc.c)(), JJ(nJ.m.Send, cJ, ZJ)
          }(this.shell.writeCmd, DJ.fd, function(JJ) {
            const cJ = (0, kJ.e)((0, Lc.g)(JJ)),
              ZJ = new Uint8Array(nJ.Xd.BYTES + cJ.length);
            return new DataView(ZJ.buffer).setUint16(0, Lc.d.AnalyticsUpdate, !0), ZJ.set(cJ, nJ.Xd.BYTES), ZJ
          }(GJ))) return this.unsentPage = sJ, this.pacing.unsent(YJ), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Zq.h), (0, hq.j)(this.fpsOverTime, this.initialFps, GJ, hJ)
      }
    }
    var Iq = ZJ(38566);

    function Mq(JJ, cJ, ZJ) {
      const FJ = new Map;
      return (0, Iq.b)(((JJ, ZJ, FJ) => cJ.EA(JJ, ZJ, FJ)), ((cJ, ZJ, UJ) => {
        const eJ = `${cJ},${ZJ},${UJ}`;
        return FJ.has(eJ) || FJ.set(eJ, (0, dc.b)(JJ, cJ, ZJ, UJ)), FJ.get(eJ)
      }), ZJ)
    }
    var bq = ZJ(38573),
      wq = ZJ(39478);

    function Wq(JJ) {
      const cJ = null !== JJ && 0 !== (nJ.s.playerFlags(JJ.api.apiView, 0) & nJ.Ad.CursorAim);
      cJ !== (0, wq.p)() && (0, wq.G)(cJ, null !== JJ)
    }

    function gq(JJ) {
      return (0, xF.e)(rF.H, JJ)
    }
    const Hq = new eJ.f((JJ => ZJ(41253)(`./${JJ}/${JJ}Client`)));
    let Pq = null,
      kq = null;
    async function pq(JJ) {
      Pq ??= ZJ.e(27).then((() => ZJ(38089))).then((JJ => {
        kq = JJ.createDefaultClientPlugins
      }), (JJ => {
        throw Pq = null, JJ
      })), await Promise.all([Hq.load(JJ), Pq])
    }

    function dq(JJ) {
      JJ.load(new kc(OF, new uF))
    }
    let zq = !1;
    const Nq = new WeakMap;

    function Oq(JJ) {
      try {
        JJ()
      } catch (cJ) {
        console.error("[bloxd-wasm-client] a session-end step failed", cJ)
      }
    }

    function Tq(JJ, cJ) {
      ! function() {
        var JJ, cJ;
        zF.b.volume();
        const ZJ = zF.b;
        null === (JJ = ZJ._autoResume) || void 0 === JJ || JJ.call(ZJ), null === (cJ = ZJ._autoSuspend) || void 0 === cJ || cJ.call(ZJ)
      }(), cJ.audio.prepare();
      const ZJ = new mJ(cJ.core, cJ.memory, cJ.audio);
      let eJ;
      try {
        eJ = new DU(ZJ, cJ.options)
      } catch (DJ) {
        return JJ.crash(nU.x, DJ), null
      }(0, qJ.d)(sU(ZJ, eJ));
      const YJ = new mA({
        running: JJ,
        api: ZJ,
        core: cJ.core,
        memory: cJ.memory,
        staleOr: cJ.staleOr,
        reportFault: cJ.reportReplayFault,
        options: cJ.options,
        sessionInfo: cJ.sessionInfo,
        replayShaderPack: cJ.replayShaderPack
      });
      (0, FF.A)();
      const hJ = new HF({
        api: ZJ,
        tables: eJ,
        sessionInfo: cJ.sessionInfo,
        gameFactory: JJ => Hq.loadedFactory(JJ),
        defaultPlugins: (JJ, cJ, ZJ, FJ) => {
          if (null === kq) throw new Error("The default plugins started before they loaded");
          return kq(JJ, cJ, ZJ, FJ)
        },
        serverOptions: cJ.options,
        onNetEvent: JJ => {
          YJ.netEvent(JJ), cJ.onNetEvent(JJ)
        },
        setLocalOptions: cJ => {
          EA(JJ, {
            changes: cJ,
            reset: !1
          })
        },
        playSound: (JJ, ZJ, FJ, UJ, eJ, XJ, AJ) => cJ.audio.playGame(JJ, ZJ, FJ, UJ, eJ, XJ, AJ),
        onSessionEnd: () => {
          Oq(UJ.i), Oq(oF), Oq((() => {
            FJ.d.set({
              openInGameMenuName: null
            })
          })), Oq((() => {
            cJ.audio.cancelPreload()
          }))
        },
        beforeWrite: cJ.beforeWrite,
        beforeOp: cJ.beforeOp,
        cameraScreen: tF,
        showCameraFacing: lF,
        onEventOverflow: cJ.onEventOverflow,
        screenBandY: AJ.n,
        replayEntities: YJ.entityHooks,
        hasPackModel: cJ.hasPackModel
      });
      return hJ.attach(JJ), Nq.set(hJ, YJ), dF(hJ.items, cJ.audio),
        function(JJ) {
          JJ.setClientFreeCameraGrant("isDev", !1);
          const cJ = cJ => {
            JJ.setClientFreeCameraGrant("hasDeveloperRank", cJ.playerHasRank("developer"))
          };
          (0, XJ.j)("userContextUpdated", cJ)
        }(hJ), zq || (zq = !0, (0, XJ.j)("appManagerUpdated|openInGameMenuName", (JJ => {
          !JJ && (0, jJ.d)().includes("InGameMenu") && (0, jJ.e)("InGameMenu")
        }))), hJ
    }

    function Cq(JJ) {
      try {
        JJ.closeGame()
      } finally {
        var cJ;
        null === (cJ = Nq.get(JJ)) || void 0 === cJ || cJ.stop(), Nq.delete(JJ)
      }
    }
  },
  39561: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    const FJ = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39580: (JJ, cJ, ZJ) => {
    function FJ() {
      return ZJ(39583)
    }

    function UJ() {
      return ZJ(39590)
    }

    function eJ(JJ) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(JJ)
    }
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => FJ,
      e: () => UJ
    })
  },
  39543: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      d: () => XJ
    });
    const FJ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function UJ(JJ) {
      if (JJ instanceof WebAssembly.RuntimeError) return !0;
      const cJ = JJ instanceof Error ? JJ.stack : void 0;
      return "string" === typeof cJ && FJ.test(cJ)
    }
    const eJ = 500;

    function XJ(JJ) {
      let cJ = "[object Object]";
      try {
        cJ = String(JJ)
      } catch {}
      if ("[object Object]" !== cJ) return cJ;
      try {
        var ZJ, FJ;
        return null !== (ZJ = null === (FJ = JSON.stringify(JJ)) || void 0 === FJ ? void 0 : FJ.slice(0, eJ)) && void 0 !== ZJ ? ZJ : cJ
      } catch {
        return cJ
      }
    }
  },
  39583: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39590: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);