export const id = 56;
export const ids = [56];
export const modules = {
  42396: (CC, zC, ZC) => {
    var QC = {
      "./bedwars/bedwarsClient": [39110, 9],
      "./bridgeBattle/bridgeBattleClient": [39114, 10],
      "./buildAFactory2/buildAFactory2Client": [38316, 75, 74, 73, 225, 243, 11],
      "./classic/classicClient": [39120, 12],
      "./clutch/clutchClient": [39122, 13],
      "./containmentBreach/containmentBreachClient": [39124, 14],
      "./cooking/cookingClient": [39246, 15],
      "./defusal/defusalClient": [39252, 16],
      "./frontline/frontlineClient": [39259, 75, 74, 73, 17],
      "./goalRush/goalRushClient": [39262, 18],
      "./luckyBedwars/luckyBedwarsClient": [39269, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39275, 20],
      "./oneBlock/oneBlockClient": [39284, 21],
      "./plots/plotsClient": [39288, 241, 248, 22],
      "./pvpCiv/pvpCivClient": [39356, 23],
      "./skyIslands/skyIslandsClient": [39360, 24],
      "./skyblock/skyblockClient": [38353, 75, 225, 190, 25],
      "./tsunami/tsunamiClient": [39367, 26]
    };

    function wC(CC) {
      if (!ZC.o(QC, CC)) return Promise.resolve().then((() => {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }));
      var zC = QC[CC],
        wC = zC[0];
      return Promise.all(zC.slice(1).map(ZC.e)).then((() => ZC(wC)))
    }
    wC.keys = () => Object.keys(QC), wC.id = 42396, CC.exports = wC
  },
  38865: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      e: () => wC
    });
    var QC = ZC(28);

    function wC(CC) {
      return "refetchCode" === CC || "devDownloadJson" === CC || CC.startsWith("Plugin")
    }

    function bC(CC, zC) {
      "refetchCode" !== CC ? "Plugin|MobAiPlugin|ShowPetUi" !== CC ? Promise.all([ZC.e(107), ZC.e(108), ZC.e(103), ZC.e(105), ZC.e(214)]).then((() => ZC(41552))).then((ZC => {
        let {
          runClientGameMessage: QC
        } = ZC;
        QC(CC, zC)
      })).catch((zC => {
        console.error(`Game message ${CC} failed`, zC)
      })) : QC.o.bp("showPetUi", zC) : QC.o.bp("refetchCode")
    }
  },
  42382: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => wC
    });
    const QC = ["recording", "freecam", "keyframe"];

    function wC() {
      const CC = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(CC[1]) << 32n | BigInt(CC[0])
    }
  },
  34082: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      d: () => oC
    });
    var QC = ZC(20);
    const wC = 24,
      bC = "farNametags",
      nC = 1e5;

    function fC() {
      var CC;
      return null === (CC = QC.b.get("showDistantNametags")) || void 0 === CC || CC
    }

    function oC() {
      var CC;
      return null !== (CC = function() {
        const CC = new URLSearchParams(window.location.search).get(bC),
          zC = null === CC || "" === CC ? NaN : Number(CC);
        return Number.isFinite(zC) && zC >= 0 ? Math.min(zC, nC) : null
      }()) && void 0 !== CC ? CC : fC() ? 0 : wC
    }
  },
  42374: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      blockIdOf: () => Bo.d,
      clearWasmCameraScreen: () => zw,
      creativeItemIds: () => ZQ.creativeItemIds,
      decodeMapSettings: () => Vo,
      drainTextRerasters: () => sf.b,
      enchantmentPerksOf: () => ZQ.enchantmentPerksOf,
      endGameHost: () => Fq,
      followCursorAim: () => ko,
      followMenuPrefs: () => Vw,
      loadAudio: () => bq,
      loadClientGame: () => wq,
      loadTextIcons: () => sf.f,
      rasterText: () => rf.c,
      readBoardToEdit: () => Uo,
      readDrawCensus: () => Cq.d,
      setTextHost: () => sf.j,
      setTextLocalPlayer: () => sf.m,
      showInCreativeInvenOf: () => ZQ.showInCreativeInvenOf,
      startGameHost: () => qq,
      startShellAnalytics: () => jo,
      startSkyFeed: () => qo,
      textChanged: () => sf.r,
      warmText: () => rf.g,
      wasmCameraScreen: () => Cw
    });
    ZC(36387);
    var QC = ZC(20),
      wC = ZC(36687),
      bC = ZC(38986),
      nC = ZC(28),
      fC = ZC(3392),
      oC = ZC(36685),
      qC = ZC(1240),
      FC = ZC(590),
      WC = ZC(38055),
      NC = ZC(4727),
      MC = ZC(40476),
      gC = ZC(40412);
    const SC = gC.Rb / 4,
      pC = gC.p.PlaySound,
      PC = gC.p.SoundReset,
      GC = NC.ab.ReplayFailed,
      RC = NC.ab.RecorderEvent;
    class AC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = CC, this.memory = zC, this.audio = ZC, this.serverIds = new Int32Array(256).fill(gC.qd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(gC.w.BYTES)), this.renderPtr = 0, this.HW = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new gC.Z(CC, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.FwC(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(CC, zC) {
        const ZC = this.eventView();
        return new Uint8Array(ZC.buffer, ZC.byteOffset + CC, zC)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return gC.w.localId(this.apiView, 0)
      }
      localDeaths() {
        return gC.w.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const CC = this.apiView,
          zC = gC.w.entRenderPtr(CC, 0),
          ZC = gC.w.entVisPtr(CC, 0),
          QC = gC.w.entCapacity(CC, 0);
        if (zC !== this.renderPtr || ZC !== this.visPtr || QC !== this.HW || this.renderBuffer !== this.buffer) {
          this.renderPtr = zC, this.visPtr = ZC, this.HW = QC, this.renderBuffer = this.buffer;
          const CC = this.memoryView(Float32Array, zC, QC * SC, "the render array"),
            wC = this.memoryView(Uint8Array, ZC, QC, "the visibility array");
          this.renderCapacity = CC && wC ? QC : 0, this.render = CC && wC ? CC : new Float32Array(0), this.vis = CC && wC ? wC : new Uint8Array(0)
        }
      }
      memoryView(CC, zC, ZC, QC) {
        try {
          return (0, MC.m)(CC, this.memory().buffer, zC, ZC, QC)
        } catch (wC) {
          return this.keepCorruption(wC), null
        }
      }
      memoryData(CC, zC, ZC, QC) {
        try {
          return (0, MC.d)(this.memory().buffer, CC, zC, ZC, QC)
        } catch (wC) {
          return this.keepCorruption(wC), null
        }
      }
      reportCorruption(CC) {
        this.keepCorruption(new MC.b(CC))
      }
      keepCorruption(CC) {
        if (!(CC instanceof MC.b)) throw CC;
        this.corruption ??= CC
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(CC, zC, ZC) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: QC,
          len: wC
        } = CC;
        this.eventsPtr = QC, this.eventsLen = wC, this.eventsBuffer = null;
        const bC = this.eventView();
        for (let qC = 0; qC < wC;) {
          const CC = bC.getUint32(qC, !0),
            ZC = 65535 & CC,
            QC = CC >>> 16,
            wC = qC + NC.$;
          if (ZC === gC.p.EntitySpawned) {
            var nC;
            if (QC !== gC.Wb.BYTES) throw vC(ZC, qC, QC);
            const CC = gC.Wb.serverId(bC, wC);
            this.spawned(CC, gC.Wb.index(bC, wC), gC.Wb.kind(bC, wC)), null === (nC = zC.entityAdded) || void 0 === nC || nC.call(zC, CC)
          } else if ((ZC === gC.p.ChunkSlot || ZC === gC.p.EntityInfoChanged) && !(0, gC.xe)(ZC, bC, wC, QC, zC)) throw vC(ZC, qC, QC);
          qC = wC + (0, NC.pe)(QC)
        }
        try {
          var fC;
          null === (fC = zC.afterPrescan) || void 0 === fC || fC.call(zC), this.throwCorruption(), !ZC() && this.dispatch(CC, zC, ZC) && (this.throwCorruption(), this.applyListener(), zC.afterWalk(CC.kind)), this.throwCorruption()
        } catch (oC) {
          throw oC instanceof MC.b && (this.corruption ??= oC), oC
        } finally {
          ZC() || null !== this.corruption || this.applyDespawns(wC, zC)
        }
      }
      applyDespawns(CC, zC) {
        const ZC = this.eventView();
        for (let wC = 0; wC < CC;) {
          const CC = ZC.getUint32(wC, !0),
            bC = wC + NC.$;
          if ((65535 & CC) === gC.p.EntityDespawned && CC >>> 16 === gC.Wb.BYTES) {
            const CC = gC.Wb.serverId(ZC, bC);
            var QC;
            if (this.despawned(CC, gC.Wb.index(ZC, bC))) null === (QC = zC.entityRemoved) || void 0 === QC || QC.call(zC, CC)
          }
          wC = bC + (0, NC.pe)(CC >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(CC, zC, ZC) {
        const {
          len: QC,
          net: wC,
          netOffsets: bC
        } = CC;
        let nC = this.eventView(),
          fC = 0;
        for (let JC = 0; JC < QC;) {
          const CC = nC.getUint32(JC, !0),
            QC = 65535 & CC,
            IC = CC >>> 16,
            eC = JC + NC.$;
          let hC = !1;
          if (fC < wC.length && bC[fC] === JC) zC.netEvent(wC[fC]), fC++, hC = !0;
          else if (QC === NC.ab.LocalPlayerBound) {
            var oC;
            if (IC !== NC.Hb) throw vC(QC, JC, IC);
            null === (oC = zC.localPlayerBound) || void 0 === oC || oC.call(zC, nC.getInt32(eC, !0)), hC = !0
          } else if (QC === NC.ab.LocalHurt) {
            var qC;
            if (IC !== NC.Fb) throw vC(QC, JC, IC);
            null === (qC = zC.localHurt) || void 0 === qC || qC.call(zC, nC.getInt32(eC, !0), nC.getFloat32(eC + 4, !0), nC.getUint32(eC + 8, !0)), hC = !0
          } else if (QC === NC.ab.AttackHit) {
            var FC;
            if (IC !== NC.d) throw vC(QC, JC, IC);
            const CC = nC.getFloat32(eC, !0),
              ZC = nC.getFloat32(eC + 4, !0),
              wC = nC.getFloat32(eC + 8, !0),
              bC = nC.getUint32(eC + 12, !0);
            null === (FC = zC.attackHit) || void 0 === FC || FC.call(zC, CC, ZC, wC, 0 !== (bC & NC.m.Crit), 0 !== (bC & NC.m.HitSelf))
          } else if (QC === NC.ab.PhysicsType) {
            var WC;
            if (IC !== NC.ec) throw vC(QC, JC, IC);
            null === (WC = zC.physicsType) || void 0 === WC || WC.call(zC, nC.getUint32(eC, !0), nC.getInt32(eC + 4, !0)), hC = !0
          } else if (QC === NC.ab.VehicleEffect) {
            var MC;
            const CC = iC(nC, eC, IC);
            if (null === CC) throw vC(QC, JC, IC);
            null === (MC = zC.vehicleEffect) || void 0 === MC || MC.call(zC, CC.op, CC.name, CC.icon, CC.level, CC.durationMs), hC = !0
          } else if (QC === NC.ab.ZoomChanged) {
            var SC;
            if (IC !== NC.Xd) throw vC(QC, JC, IC);
            null === (SC = zC.zoomChanged) || void 0 === SC || SC.call(zC, nC.getFloat32(eC, !0), nC.getUint8(eC + 4)), hC = !0
          } else if (QC === NC.ab.ZoomDisabled) {
            var AC;
            if (0 !== IC) throw vC(QC, JC, IC);
            null === (AC = zC.zoomDisabled) || void 0 === AC || AC.call(zC), hC = !0
          } else if (QC === NC.ab.GameCamera) {
            var xC;
            null === (xC = zC.gameCamera) || void 0 === xC || xC.call(zC, new Uint8Array(nC.buffer, nC.byteOffset + eC, IC).slice()), hC = !0
          } else if (QC === gC.p.ChunkSlot || QC === gC.p.EntityInfoChanged);
          else if (QC >= pC && QC <= PC) {
            if (this.audio && !this.audio.onAudioEvent(QC, nC, eC, IC)) throw vC(QC, JC, IC)
          } else if (QC >= GC && QC <= RC) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(QC, nC, eC, IC)) throw vC(QC, JC, IC);
              hC = !0
            }
          } else if (QC >= gC.Fd && QC <= gC.Jd && QC !== NC.ab.EnvLighting) {
            if (!(0, gC.xe)(QC, nC, eC, IC, zC)) throw vC(QC, JC, IC);
            hC = !0
          }
          if (hC) {
            if (ZC()) return !1;
            nC = this.eventView()
          }
          JC = eC + (0, NC.pe)(IC)
        }
        return !ZC()
      }
      applyListener() {
        var CC;
        if (!this.audio) return;
        const zC = gC.w.audioViewPtr(this.apiView, 0),
          ZC = this.memory().buffer;
        let QC = this.audioView;
        (null === (CC = QC) || void 0 === CC ? void 0 : CC.buffer) === ZC && QC.byteOffset === zC || (QC = (0, MC.d)(ZC, zC, gC.z.BYTES, 8, "the audio view"), this.audioView = QC), QC && this.audio.applyListener(QC)
      }
      indexOf(CC) {
        return this.indexById.get("number" === typeof CC ? CC : +CC)
      }
      isLocal(CC) {
        return CC !== gC.qd && CC === gC.w.localId(this.apiView, 0)
      }
      yG(CC) {
        const zC = [0, 0, 0];
        return this.readPosition("number" === typeof CC ? CC : +CC, zC) ? zC : null
      }
      readPosition(CC, zC) {
        const ZC = this.apiView;
        if (void 0 !== this.indexById.get(CC) && this.isLocal(CC)) {
          for (let CC = 0; CC < 3; CC++) zC[CC] = gC.w.localPos(ZC, 0, CC);
          return !0
        }
        return this.readDrawnPosition(CC, zC)
      }
      readDrawnPosition(CC, zC) {
        const ZC = this.apiView,
          QC = this.indexById.get(CC);
        if (void 0 === QC || QC >= this.renderCapacity) return zC[0] = zC[1] = zC[2] = NaN, !1;
        const wC = QC * SC;
        for (let bC = 0; bC < 3; bC++) zC[bC] = this.render[wC + bC] + gC.w.origin(ZC, 0, bC);
        return !0
      }
      checkValid(CC) {
        return void 0 !== this.indexOf(CC)
      }
      isAlive(CC) {
        const zC = this.indexOf(CC);
        if (void 0 === zC) return null;
        if (this.ensureViews(), zC >= this.renderCapacity) return null;
        const ZC = this.vis[zC];
        return 0 === ZC ? null : 0 !== (ZC & gC.ve.Alive)
      }
      getEntityType(CC) {
        const zC = this.indexOf(CC);
        return void 0 === zC ? this.isLocal("number" === typeof CC ? CC : +CC) ? "Player" : null : JC(this.kinds[zC])
      }
      spawned(CC, zC, ZC) {
        if (zC >= 1048576) throw new MC.b(`entity ${CC} spawned at index ${zC}`);
        this.ensureIndex(zC), this.serverIds[zC] === CC && null !== this.idStr[zC] || (this.idStr[zC] = String(CC)), this.serverIds[zC] = CC, this.kinds[zC] = ZC, this.indexById.set(CC, zC)
      }
      despawned(CC, zC) {
        let ZC = !1;
        return this.indexById.get(CC) === zC && (this.indexById.delete(CC), ZC = !0), zC < this.serverIds.length && this.serverIds[zC] === CC && (this.serverIds[zC] = gC.qd, this.kinds[zC] = 0, this.idStr[zC] = null), ZC
      }
      ensureIndex(CC) {
        const zC = this.serverIds.length;
        if (CC < zC) return;
        let ZC = 2 * zC;
        for (; ZC <= CC;) ZC *= 2;
        const QC = new Int32Array(ZC).fill(gC.qd);
        QC.set(this.serverIds), this.serverIds = QC;
        const wC = new Uint16Array(ZC);
        wC.set(this.kinds), this.kinds = wC;
        for (let bC = zC; bC < ZC; bC++) this.idStr.push(null)
      }
      eventView() {
        const CC = this.memory().buffer;
        return CC !== this.eventsBuffer && (this.eventsBuffer = CC, this.events = new DataView(CC, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const CC = this.memory().buffer;
        this.buffer = CC, this.viewPtr < 0 && (this.viewPtr = this.core.WwC()), this.view = new DataView(CC, this.viewPtr, gC.w.BYTES), this.rereadDirectory()
      }
    }

    function xC(CC) {
      return CC >>> gC.b === gC.s.Item
    }

    function JC(CC) {
      var zC, ZC;
      const QC = CC & gC.f;
      switch (CC >>> gC.b) {
        case gC.s.Lifeform:
          return null !== (zC = FC.i[QC]) && void 0 !== zC ? zC : null;
        case gC.s.Throwable:
          return null !== (ZC = WC.l[QC]) && void 0 !== ZC ? ZC : null;
        case gC.s.Mesh:
          return "Mesh";
        case gC.s.Audio:
          return "AudioEntity";
        case gC.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const IC = new TextDecoder;

    function iC(CC, zC, ZC) {
      if (ZC < NC.Cd.HEAD_BYTES) return null;
      const QC = CC.getUint32(zC, !0),
        wC = CC.getUint32(zC + 20, !0),
        bC = CC.getUint32(zC + 24, !0),
        nC = NC.Cd.HEAD_BYTES + (0, NC.pe)(wC);
      if (QC !== NC.Cd.UPDATE && QC !== NC.Cd.REMOVE || wC > ZC || nC + bC > ZC) return null;
      const fC = (ZC, QC) => IC.decode(new Uint8Array(CC.buffer, CC.byteOffset + zC + ZC, QC)),
        oC = CC.getFloat64(zC + 12, !0);
      return {
        op: QC,
        level: CC.getFloat64(zC + 4, !0),
        durationMs: Number.isNaN(oC) ? null : oC,
        name: fC(NC.Cd.HEAD_BYTES, wC),
        icon: fC(nC, bC)
      }
    }

    function vC(CC, zC, ZC) {
      return new MC.b(`event ${CC} at ${zC} of ${ZC} bytes`)
    }
    var eC = ZC(326),
      hC = ZC(1169),
      KC = ZC(38865),
      YC = ZC(1858),
      dC = ZC(40842),
      mC = ZC(1806),
      HC = ZC(39005),
      EC = ZC(39036),
      lC = ZC(39015),
      XC = ZC(40457),
      cC = ZC(2351),
      uC = ZC(39e3),
      rC = ZC(39028);
    const sC = Math.max(gC.Eb.BYTES, gC.tb.BYTES, gC.xb.BYTES);

    function TC(CC) {
      if (!(0, rC.e)(CC)) return null;
      const zC = Number(CC);
      return (0 | zC) === zC ? zC : null
    }
    class aC {
      constructor(CC) {
        this.api = CC, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, uC.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.yw = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = gC.qd, this.localName = String(gC.qd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.yw = null;
        const CC = this.api.queries.directorView() >= gC.Eb.BYTES ? this.scratchView() : null;
        null !== CC && (this.defaultFov = (0, mC.w)(gC.Eb.fov(CC, 0)), this.baseFov = (0, mC.w)(gC.Eb.baseFov(CC, 0)), this.aspect = gC.Eb.aspect(CC, 0), this.bodyHeading = gC.Eb.bodyHeading(CC, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(CC) {
        this.viewHeading = CC
      }
      get localPlayerId() {
        const CC = gC.w.localId(this.api.apiView, 0);
        return CC !== this.localId && (this.localId = CC, this.localName = String(CC)), this.localName
      }
      getEntityPosition(CC) {
        return this.readEntity(CC) ? this.entityFeet : null
      }
      getEntityAimPoint(CC) {
        return this.readEntity(CC) ? this.entityAim : null
      }
      getEntityHeading(CC) {
        const zC = TC(CC);
        if (null === zC) return null;
        const ZC = gC.w.localId(this.api.apiView, 0);
        return zC === ZC && ZC !== gC.qd ? this.viewHeading : this.readEntity(CC) ? this.entityHeading : null
      }
      raycastTerrain(CC, zC, ZC) {
        const QC = this.api.queries.cameraSweep(CC[0], CC[1], CC[2], zC[0], zC[1], zC[2], ZC);
        return QC < ZC - 1e-6 ? QC : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const CC = this.defaultPose;
        CC.fov = this.defaultFov;
        const zC = this.api.queries.directorDefaultPose() >= gC.tb.BYTES ? this.scratchView() : null;
        if (null === zC) return CC;
        for (let ZC = 0; ZC < 3; ZC++) CC.position[ZC] = gC.tb.eye(zC, 0, ZC);
        return CC.heading = gC.tb.heading(zC, 0), CC.pitch = gC.tb.pitch(zC, 0), CC
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
      readEntity(CC) {
        const zC = TC(CC);
        if (null === zC) return !1;
        if (zC === this.yw) return this.entityLive;
        this.yw = zC;
        const ZC = this.api.queries.directorEntity(zC) >= gC.xb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== ZC, null === ZC) return !1;
        for (let QC = 0; QC < 3; QC++) this.entityFeet[QC] = gC.xb.feet(ZC, 0, QC), this.entityAim[QC] = this.entityFeet[QC];
        return this.entityAim[1] += gC.xb.eyeHeight(ZC, 0), this.entityHeading = gC.xb.heading(ZC, 0), !0
      }
      scratchView() {
        const CC = this.api.scratch(),
          zC = this.api.memory().buffer,
          ZC = this.scratch;
        return null !== ZC && ZC.buffer === zC && ZC.byteOffset === CC ? ZC : (this.scratch = this.api.memoryData(CC, sC, 8, "the director's record"), this.scratch)
      }
    }
    const tC = {
        mode: "default"
      },
      DC = {
        show: () => {},
        clear: () => {}
      };

    function jC() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class yC {
      constructor(CC) {
        this.options = CC, this.fN = void 0, this.director = void 0, this.latest = tC, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          VY: 0,
          Zm: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.VS = new Int32Array(3 * gC.ie), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * gC.ie), this.fN = new aC(CC.api), this.director = new lC.e(this.fN)
      }
      settingsChanged(CC) {
        let zC = tC;
        if (CC.length > 0) try {
          zC = (0, XC.c)(CC)
        } catch {}
        this.latest = zC, this.pending = zC
      }
      call(CC, zC, ZC, QC, wC, bC) {
        var nC, fC;
        let oC;
        this.holding = !1;
        try {
          oC = this.answer(CC, zC, ZC, QC, wC, bC)
        } catch (NC) {
          var qC, FC;
          throw this.answeredPose = !1, null === (qC = (FC = this.options).showFacing) || void 0 === qC || qC.call(FC, null), NC
        }
        const WC = this.answeredPose && 0 === (QC & gC.Ab.Held);
        return this.answeredPose = oC !== gC.qb.None, this.holding = this.answeredPose && !WC, null === (nC = (fC = this.options).showFacing) || void 0 === nC || nC.call(fC, this.holding ? this.facing : null), oC
      }
      holdsView() {
        return this.holding
      }
      answer(CC, zC, ZC, QC, wC, bC) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          fN: nC
        } = this;
        nC.readView();
        if (0 !== (QC & gC.Ab.Held) || nC.setViewHeading((0, HC.s)(nC.bodyHeading)), void 0 !== this.pending) {
          const CC = this.pending;
          this.pending = void 0, this.director.setSettings(CC), this.syncShownSettings()
        }
        this.readLook((0, cC.f)(zC), (0, cC.f)(ZC), QC, (0, cC.f)(wC), (0, cC.f)(bC));
        const fC = this.director.update(CC / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !fC) return gC.qb.None;
        const [oC, qC, FC] = fC.position;
        if (0 === this.options.api.queries.directorPose(oC, qC, FC, (0, HC.s)(fC.heading), (0, HC.g)(fC.pitch), (0, mC.j)(fC.fov))) return gC.qb.None;
        if ("default" === this.director.getSettings().mode) return gC.qb.Pose;
        switch (this.facing) {
          case "camera":
            return gC.qb.FaceCamera;
          case "cursor":
            return gC.qb.FaceCursor;
          default:
            return gC.qb.FaceMovement
        }
      }
      afterFrame(CC) {
        CC ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = tC, this.idle()
      }
      restart() {
        const CC = this.holding;
        this.idle(), this.holding = CC
      }
      idle() {
        var CC, zC;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new lC.e(this.fN), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (CC = (zC = this.options).showFacing) || void 0 === CC || CC.call(zC, null), this.setCentres(0)
      }
      syncShownSettings() {
        const CC = this.director.getSettings();
        if (CC === this.shownSettings) return;
        this.shownSettings = CC;
        const zC = (0, EC.d)(CC);
        this.facing = zC.facing, this.mouseTurns = zC.mouseTurns
      }
      readLook(CC, zC, ZC, QC, wC) {
        const bC = this.look,
          nC = 0 !== (ZC & gC.Ab.LookPointed);
        if (null === this.mouseTurns && !nC) return bC.VY = 0, bC.Zm = 0, void(bC.pointedAt = void 0);
        let fC;
        nC && (this.pointedAt.heading = QC, this.pointedAt.pitch = wC, fC = this.pointedAt);
        const {
          fN: oC
        } = this;
        oC.setViewHeading((0, EC.b)(oC.getViewHeading(), CC, zC, fC, "look" === this.mouseTurns, bC))
      }
      writeCentres(CC) {
        const zC = this.next,
          ZC = Math.min(CC.length, gC.ie);
        for (let QC = 0; QC < ZC; QC++)
          for (let ZC = 0; ZC < 3; ZC++) zC[3 * QC + ZC] = Math.floor(CC[QC][ZC] / gC.K);
        this.setCentres(ZC)
      }
      setCentres(CC) {
        const {
          VS: zC,
          next: ZC
        } = this;
        let QC = CC === this.centresLen;
        for (let wC = 0; QC && wC < 3 * CC; wC++) QC = zC[wC] === ZC[wC];
        QC || (zC.fill(0), zC.set(ZC.subarray(0, 3 * CC)), this.centresLen = CC, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const CC = this.options.cmd();
        null !== CC && (0, gC.Qf)(CC, 0, this.VS, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var CC, zC, ZC;
        return null !== (CC = null === (zC = (ZC = this.options).screen) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : DC
      }
      hidden() {
        var CC;
        return (null !== (CC = this.options.isPageHidden) && void 0 !== CC ? CC : jC)()
      }
      now() {
        var CC, zC, ZC;
        return null !== (CC = null === (zC = (ZC = this.options).now) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : performance.now()
      }
    }
    var LC = ZC(40606);
    const UC = gC.K * gC.K * gC.K,
      BC = Math.log2(gC.K),
      OC = gC.K - 1,
      kC = gC.S.BYTES / 4,
      VC = new Uint16Array(UC);

    function Cz(CC, zC, ZC) {
      return CC * gC.K * gC.K + zC * gC.K + ZC
    }
    class zz {
      constructor(CC) {
        this.chunk = CC
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(CC, zC, ZC) {
        return Cz(CC, zC, ZC)
      }
    }
    class Zz {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Qz {
      constructor(CC, zC, ZC, QC) {
        this.table = CC, this.slot = zC, this.generation = ZC, this.epoch = QC, this.lN = new zz(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = VC, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Ug() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get dM() {
        const CC = this.gameVoxels(),
          zC = this.layers ??= new Uint16Array(gC.K);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let ZC = 0; 0 !== this.staleLayers; ZC++) {
          const QC = 1 << ZC;
          0 !== (this.staleLayers & QC) && (this.staleLayers &= ~QC, zC[ZC] = wz(CC, ZC))
        }
        return zC
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const CC = this.voxelData(),
          zC = this.writes;
        if (null === zC || 0 === zC.ids.size) return CC;
        if (zC.from !== CC) {
          const ZC = zC.patched ??= new Uint16Array(UC);
          ZC.set(CC);
          for (const [CC, QC] of zC.ids) ZC[CC] = QC;
          zC.from = CC
        }
        return zC.patched
      }
      written(CC) {
        var zC;
        return null === (zC = this.writes) || void 0 === zC ? void 0 : zC.ids.get(CC)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(CC, zC, ZC) {
        const QC = this.writes ??= new Zz;
        QC.ids.set(CC, zC), ZC && QC.cleared.add(CC), null !== QC.from && (QC.patched[CC] = zC);
        const wC = 1 << (CC >> BC & OC);
        QC.layers |= wC, this.staleLayers |= wC, this.writeCount++
      }
      clearWrites() {
        const CC = this.writes;
        null !== CC && (this.staleLayers |= CC.layers, CC.ids.clear(), CC.cleared.clear(), CC.layers = 0, CC.from = null)
      }
      dataCleared(CC) {
        var zC;
        return !0 === (null === (zC = this.writes) || void 0 === zC ? void 0 : zC.cleared.has(CC))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const CC = this.table.slotWords(),
          zC = this.slot * kC;
        if (this.epoch !== this.table.epoch || zC + kC > CC.length || 0 === CC[zC + 3] || CC[zC + 2] !== this.generation) return this.data = VC, this.dataPtr = 0, VC;
        this.version = CC[zC + 1];
        const ZC = CC[zC + 0],
          QC = CC.buffer;
        return ZC === this.dataPtr && QC === this.dataBuffer || (this.dataPtr = ZC, this.dataBuffer = QC, this.data = this.table.voxelsAt(QC, ZC)), this.data
      }
    }

    function wz(CC, zC) {
      const ZC = CC[zC * gC.K];
      for (let QC = 0; QC < gC.K; QC++) {
        const wC = Cz(QC, zC, 0);
        for (let zC = 0; zC < gC.K; zC++)
          if (CC[wC + zC] !== ZC) return 65535
      }
      return ZC
    }
    const bz = new Uint32Array(0);

    function nz(CC, zC, ZC) {
      return Cz(CC & OC, zC & OC, ZC & OC)
    }
    class fz {
      constructor(CC, zC) {
        this.memory = CC, this.apiView = zC, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = bz, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = bz, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(CC, zC, ZC, QC, wC, bC) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, bC === gC.U.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (bC !== gC.U.Stored && bC !== gC.U.Unloaded) throw new MC.b(`ChunkSlot flags ${bC}`);
        const nC = (0, LC.e)(CC, zC, ZC);
        if (nC < 0) return;
        if (bC === gC.U.Unloaded) return void this.chunks.delete(nC);
        const fC = this.chunks.get(nC);
        (null === fC || void 0 === fC ? void 0 : fC.slot) === QC && fC.generation === wC || this.chunks.set(nC, new Qz(this, QC, wC, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const CC = this.apiView(),
          zC = gC.w.chunkSlotsPtr(CC, 0),
          ZC = gC.w.chunkSlotsLen(CC, 0);
        zC === this.slotsPtr && ZC === this.slotsLen || (this.slotsPtr = zC, this.slotsLen = ZC, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const CC = this.apiView(),
          zC = gC.w.walkThroughPtr(CC, 0),
          ZC = gC.w.walkThroughLen(CC, 0);
        zC === this.walkPtr && ZC === this.walkLen || (this.walkPtr = zC, this.walkLen = ZC, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const CC of this.written) CC.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const CC = this.memory().buffer;
        var zC;
        CC !== this.slotsBuffer && (this.slotsBuffer = CC, this.slots = null !== (zC = (0, MC.m)(Uint32Array, CC, this.slotsPtr, this.slotsLen * kC, "the chunk directory")) && void 0 !== zC ? zC : bz);
        return this.slots
      }
      voxelsAt(CC, zC) {
        try {
          var ZC;
          return null !== (ZC = (0, MC.m)(Uint16Array, CC, zC, UC, "a chunk's voxels")) && void 0 !== ZC ? ZC : VC
        } catch (QC) {
          if (!(QC instanceof MC.b)) throw QC;
          return this.corruption ??= QC, VC
        }
      }
      chunk(CC, zC, ZC) {
        var QC;
        return null !== (QC = this.chunks.get((0, LC.e)(CC, zC, ZC))) && void 0 !== QC ? QC : null
      }
      isLoaded(CC, zC, ZC) {
        return void 0 !== this.chunkAt(Math.floor(CC), Math.floor(zC), Math.floor(ZC))
      }
      SF(CC, zC, ZC) {
        var QC;
        const wC = Math.floor(CC),
          bC = Math.floor(zC),
          nC = Math.floor(ZC),
          fC = this.chunkAt(wC, bC, nC);
        if (!fC) return 0;
        const oC = nz(wC, bC, nC);
        return null !== (QC = fC.written(oC)) && void 0 !== QC ? QC : fC.voxelData()[oC]
      }
      setOverlay(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bC = this.chunkAt(CC, zC, ZC);
        return !!bC && (bC.hasWrites() || this.written.push(bC), bC.write(nz(CC, zC, ZC), QC, wC), !0)
      }
      version(CC, zC, ZC) {
        var QC, wC;
        return null !== (QC = null === (wC = this.chunks.get((0, LC.e)(CC, zC, ZC))) || void 0 === wC ? void 0 : wC.Ug) && void 0 !== QC ? QC : null
      }
      scan(CC, zC, ZC, QC, wC, bC, nC, fC) {
        const oC = gC.K;
        let qC = 0;
        for (let FC = Math.floor(zC / oC); FC * oC < wC; FC++) {
          const WC = FC * oC,
            NC = Math.min(wC - WC, oC);
          for (let wC = Math.floor(CC / oC); wC * oC < QC; wC++) {
            const MC = wC * oC,
              gC = Math.min(QC - MC, oC);
            for (let QC = Math.floor(ZC / oC); QC * oC < bC; QC++) {
              const SC = this.chunks.get((0, LC.e)(wC, FC, QC));
              if (!SC) continue;
              const pC = QC * oC,
                PC = Math.max(ZC - pC, 0),
                GC = Math.min(bC - pC, oC),
                RC = SC.dM,
                AC = SC.gameVoxels();
              for (let ZC = Math.max(zC - WC, 0); ZC < NC; ZC++) {
                const zC = RC[ZC];
                if (65535 === zC || 0 !== nC[zC]) {
                  qC++;
                  for (let zC = Math.max(CC - MC, 0); zC < gC; zC++) {
                    const CC = Cz(zC, ZC, 0);
                    for (let QC = PC; QC < GC; QC++) {
                      const wC = AC[CC + QC];
                      0 !== nC[wC] && fC.push(MC + zC, WC + ZC, pC + QC, wC)
                    }
                  }
                }
              }
            }
          }
        }
        return qC
      }
      dataCleared(CC, zC, ZC) {
        var QC;
        const wC = Math.floor(CC),
          bC = Math.floor(zC),
          nC = Math.floor(ZC);
        return !0 === (null === (QC = this.chunkAt(wC, bC, nC)) || void 0 === QC ? void 0 : QC.dataCleared(nz(wC, bC, nC)))
      }
      isWalkThrough(CC) {
        if (!Number.isInteger(CC) || CC < 0 || CC > 65535) return !1;
        const zC = this.walkWords(),
          ZC = CC >>> 5;
        return ZC < zC.length && 1 === (zC[ZC] >>> (31 & CC) & 1)
      }
      walkWords() {
        const CC = this.memory().buffer;
        var zC;
        CC !== this.walkBuffer && (this.walkBuffer = CC, this.walk = null !== (zC = (0, MC.m)(Uint32Array, CC, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== zC ? zC : bz);
        return this.walk
      }
      chunkAt(CC, zC, ZC) {
        if ((0 | CC) !== CC || (0 | zC) !== zC || (0 | ZC) !== ZC) return;
        const QC = (0, LC.e)(CC >> BC, zC >> BC, ZC >> BC);
        return QC !== this.lastKey && (this.lastKey = QC, this.lastChunk = this.chunks.get(QC)), this.lastChunk
      }
    }
    var oz = ZC(38334),
      qz = ZC(37640),
      Fz = ZC(36667),
      Wz = ZC(36502),
      Nz = ZC(34107),
      Mz = ZC(38961),
      gz = ZC(184);
    const Sz = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      pz = [
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
      Pz = pz.map((CC => {
        let [zC] = CC;
        return zC
      })),
      Gz = Uint8Array.from(pz, (CC => {
        let [, zC] = CC;
        return zC
      })),
      Rz = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Az = 8;
    var xz = ZC(36643),
      Jz = ZC(36657),
      Iz = ZC(36650),
      iz = ZC(239);
    class vz {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iz.e;
        this.sheet = CC, this.onError = zC, this.idle = ZC, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = CC => {
          this.cancelIdle = null;
          try {
            if (CC.timeRemaining() >= 1) {
              let CC = this.queue.shift();
              for (; void 0 !== CC && !this.load(CC);) CC = this.queue.shift()
            }
          } catch (zC) {
            this.onError(zC)
          } finally {
            this.schedule()
          }
        }
      }
      preload(CC) {
        const zC = [...CC].sort(((CC, zC) => CC - zC));
        for (const ZC of zC) this.asked.has(ZC) || (this.asked.add(ZC), this.queue.push(ZC));
        this.schedule()
      }
      cancel() {
        var CC;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (CC = this.cancelIdle) || void 0 === CC || CC.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(CC) {
        const zC = this.sheet(CC, !1),
          ZC = this.sheet(CC, !0),
          [QC, wC] = "unloaded" === zC.state() && "unloaded" !== ZC.state() ? [ZC, zC] : [zC, ZC],
          bC = this.gen,
          nC = () => {
            try {
              bC === this.gen && "unloaded" === wC.state() && wC.load()
            } catch (CC) {
              this.onError(CC)
            }
          },
          fC = QC.state();
        return "unloaded" === fC ? (QC.once("load", nC), QC.load(), !0) : "unloaded" === wC.state() && ("loading" === fC ? (QC.once("load", nC), !1) : (wC.load(), !0))
      }
    }
    var ez = ZC(40729);
    const hz = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Kz = gz.f.Dp * gz.f.playerEyeToHeightRatio,
      Yz = [0, 0, -1, 0, 1, 0],
      dz = Sz.indexOf("note");

    function mz(CC) {
      return CC >= 0 ? Math.min(1, CC) : 0
    }

    function Hz(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const QC = function(CC) {
        let zC = 0,
          ZC = Pz.length;
        for (; zC < ZC;) {
          const QC = zC + ZC >>> 1;
          Pz[QC] < CC ? zC = QC + 1 : ZC = QC
        }
        return zC
      }(CC);
      if ("" === CC || null === (zC = Pz[QC]) || void 0 === zC || !zC.startsWith(CC)) return -1;
      if (Pz[QC] === CC) return QC;
      let wC = QC + 1;
      for (; wC < Pz.length && Pz[wC].startsWith(CC);) wC++;
      return QC + Math.floor(ZC() * (wC - QC))
    }
    class Ez {
      constructor(CC, zC, ZC, QC, wC) {
        this.group = CC, this.loudness = zC, this.startMs = ZC, this.howl = QC, this.host = wC, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const CC = this.host.alive(this.id);
        return CC ? 1e3 * this.howl.duration(this.id) / CC.rate : 0
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
    class lz {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          QC = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = CC, this.listener = zC, this.now = ZC, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(Sz.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Iz.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: CC => this.aliveVoice(CC),
          started: CC => this.started.has(CC),
          drop: CC => {
            var zC;
            null === (zC = this.live.get(CC)) || void 0 === zC || zC.howl.stop(CC), this.forget(CC)
          }
        }, this.handlers = {
          playSound: (CC, zC, ZC, QC, wC, bC, nC, fC, oC) => {
            if (QC >= Pz.length) return;
            const qC = 0 !== (wC & gC.re.Loop);
            wC & gC.re.TwoD ? this.start(QC, !1, nC, bC, fC, qC) : this.startSpatial(QC, nC, bC, fC, qC, CC, zC, ZC, oC, this.earDistSq(CC, zC, ZC))
          },
          soundPos: (CC, zC, ZC, QC) => {
            const wC = this.core.get(QC);
            var bC;
            void 0 !== wC && (null === (bC = this.live.get(wC)) || void 0 === bC || bC.howl.pos(ZC, zC, CC, wC))
          },
          soundSet: (CC, zC, ZC, QC) => {
            const wC = this.core.get(CC),
              bC = void 0 === wC ? void 0 : this.live.get(wC);
            void 0 !== wC && bC && (this.setRel(wC, zC), bC.rate = ZC, bC.howl.rate(ZC, wC), bC.spatial && bC.howl.pannerAttr({
              refDistance: QC
            }, wC))
          },
          soundFade: (CC, zC, ZC, QC) => {
            const wC = this.core.get(CC);
            void 0 !== wC && this.fade(wC, zC, ZC, 0 !== (QC & gC.oe.StopAfter))
          },
          soundStop: CC => {
            const zC = this.core.get(CC);
            var ZC;
            void 0 !== zC && (null === (ZC = this.live.get(zC)) || void 0 === ZC || ZC.howl.stop(zC), this.forget(zC))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new vz(((CC, zC) => this.sheet(CC, zC)), (CC => {
          this.errors++, console.error("Audio preload failed", CC)
        }), QC)
      }
      prepare() {
        for (let CC = 0; CC < Sz.length; CC++) this.prepareSheet(CC)
      }
      prepareSheet(CC) {
        this.sheet(CC, !1), this.sheet(CC, !0)
      }
      preload(CC) {
        this.loader.preload(CC)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let CC = 0; CC < Sz.length; CC++) {
          if (Jz.c.has(Sz[CC])) continue;
          const zC = [];
          for (const QC of [!1, !0]) {
            const ZC = Xz(CC, QC),
              wC = this.sheets.get(ZC);
            void 0 !== wC && "loading" !== wC.state() && zC.push({
              key: ZC,
              howl: wC
            })
          }
          if (!zC.some((CC => {
              let {
                howl: zC
              } = CC;
              return "loaded" === zC.state()
            }))) continue;
          this.unloading[CC] += zC.length;
          const ZC = () => {
            this.unloading[CC]--, 0 === this.unloading[CC] && this.prepareSheet(CC)
          };
          for (const {
              key: CC,
              howl: QC
            }
            of zC) this.sheets.delete(CC), "loaded" === QC.state() ? (0, xz.b)(QC, ZC) : (QC.unload(), ZC())
        }
      }
      onAudioEvent(CC, zC, ZC, QC) {
        if (CC < gC.p.PlaySound || CC > gC.p.SoundReset) return !1;
        try {
          return (0, gC.xe)(CC, zC, ZC, QC, this.handlers)
        } catch (wC) {
          return this.errors++, console.error("Audio event failed", wC), !0
        }
      }
      applyListener(CC) {
        const zC = this.nextPose;
        for (let QC = 0; QC < 3; QC++) zC[2 - QC] = gC.z.listener(CC, 0, QC), zC[5 - QC] = gC.z.forward(CC, 0, QC), zC[8 - QC] = gC.z.up(CC, 0, QC);
        0 === zC[3] && 0 === zC[4] && 0 === zC[5] && zC.set(this.posed ? this.pose.subarray(3) : Yz, 3);
        for (let QC = 0; QC < 9; QC++)
          if (!Number.isFinite(zC[QC])) return;
        const ZC = this.pose;
        if (this.posed) {
          let CC = !0;
          for (let QC = 0; QC < 9 && CC; QC++) CC = zC[QC] === ZC[QC];
          if (CC) return
        }
        this.listener.apply(zC) && (ZC.set(zC), this.posed = !0)
      }
      playGame(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = Hz(CC);
        if (fC < 0) return ez.e;
        if (!ZC) {
          const {
            howl: CC,
            id: ZC
          } = this.start(fC, !1, zC, 0, 1, nC);
          return this.gameSound(CC, ZC, !1)
        }
        const oC = ZC[0],
          qC = ZC[1] + Kz,
          FC = ZC[2];
        if (!Number.isFinite(oC) || !Number.isFinite(qC) || !Number.isFinite(FC)) return ez.e;
        let WC;
        if (QC) {
          const CC = oC - QC[0],
            zC = qC - QC[1],
            ZC = FC - QC[2];
          if (WC = CC * CC + zC * zC + ZC * ZC, WC > wC * wC) return ez.e
        } else WC = this.earDistSq(oC, qC, FC);
        const NC = this.startSpatial(fC, zC, 0, 1, nC, oC, qC, FC, bC, WC);
        return NC ? this.gameSound(NC.howl, NC.id, !0) : ez.e
      }
      setMaster(CC, zC) {
        this.level = mz(CC);
        const ZC = zC ? this.level : 0;
        if (ZC !== this.master) {
          this.master = ZC;
          for (const [CC, zC] of this.live) zC.fadeMs = 0, zC.gain = zC.rel * this.master, zC.howl.volume(zC.gain, CC)
        }
      }
      stopCore() {
        for (const zC of [...this.core.values()]) {
          var CC;
          null === (CC = this.live.get(zC)) || void 0 === CC || CC.howl.stop(zC)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [CC, zC] of [...this.live]) zC.howl.stop(CC), this.forget(CC);
        this.core.clear()
      }
      gameSound(CC, zC, ZC) {
        const QC = {
          stop: () => (this.live.has(zC) && CC.stop(zC), QC),
          fade: (CC, ZC, wC) => {
            var bC, nC;
            const fC = this.level > 0 ? ZC / this.level : ZC > 0 && null !== (bC = null === (nC = this.live.get(zC)) || void 0 === nC ? void 0 : nC.rel) && void 0 !== bC ? bC : 0;
            return this.fade(zC, fC, wC, !1), QC
          },
          rate: ZC => {
            const wC = this.live.get(zC);
            return wC && (wC.rate = function(CC) {
              return CC > 0 && CC < 1 / 0 ? CC : 1
            }(ZC), CC.rate(wC.rate, zC)), QC
          },
          getVolume: () => {
            var CC, ZC;
            return (null !== (CC = null === (ZC = this.live.get(zC)) || void 0 === ZC ? void 0 : ZC.rel) && void 0 !== CC ? CC : 0) * this.level
          },
          getRelativeVolume: () => {
            var CC, ZC;
            return null !== (CC = null === (ZC = this.live.get(zC)) || void 0 === ZC ? void 0 : ZC.rel) && void 0 !== CC ? CC : 0
          },
          setRelativeVolume: CC => (this.setRel(zC, CC), QC),
          setPannerAttr: wC => {
            if (ZC && this.live.has(zC)) {
              const ZC = {
                ...hz,
                refDistance: Fz.j
              };
              for (const [CC, zC] of Object.entries(wC)) "number" !== typeof zC && "string" !== typeof zC || (ZC[CC] = zC);
              CC.pannerAttr({
                coneOuterAngle: ZC.coneOuterAngle
              }, zC), CC.pannerAttr(ZC, zC)
            }
            return QC
          },
          setPosition: wC => (ZC && this.live.has(zC) && Number.isFinite(wC[0] + wC[1] + wC[2]) && CC.pos(wC[2], wC[1], wC[0], zC), QC)
        };
        return QC
      }
      startSpatial(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        const FC = this.sheet(Gz[CC], !0);
        let WC = null;
        if (!wC) {
          if (this.failed.has(FC)) return null;
          const ZC = Gz[CC] === dz ? null : (0, Iz.g)(Pz[CC]),
            QC = (0, Iz.d)(mz(zC), Math.sqrt(qC), oC);
          if (WC = new Ez(ZC, QC, this.now(), FC, this.voiceHost), !this.voices.admit(WC)) return null
        }
        const NC = this.start(CC, !0, zC, ZC, QC, wC);
        return WC && (WC.id = NC.id, WC.direct = "loaded" === FC.state() && !FC._playLock), FC.pannerAttr({
          coneOuterAngle: 360
        }, NC.id), FC.pannerAttr({
          ...hz,
          refDistance: oC
        }, NC.id), FC.pos(fC, nC, bC, NC.id), NC
      }
      aliveVoice(CC) {
        const zC = this.live.get(CC);
        if (!zC) return;
        const ZC = zC.howl._soundById(CC);
        if (ZC && !ZC._ended) return zC;
        this.forget(CC)
      }
      earDistSq(CC, zC, ZC) {
        if (!this.posed) return 0;
        const QC = CC - this.pose[2],
          wC = zC - this.pose[1],
          bC = ZC - this.pose[0];
        return QC * QC + wC * wC + bC * bC
      }
      start(CC, zC, ZC, QC, wC, bC) {
        const nC = mz(ZC),
          fC = this.sheet(Gz[CC], zC);
        "unloaded" === fC.state() && fC.load();
        const oC = fC.play(Pz[CC]),
          qC = nC * this.master;
        return fC.volume(qC, oC), this.live.set(oC, {
          howl: fC,
          rel: nC,
          gain: qC,
          fadeFrom: qC,
          fadeAt: 0,
          fadeMs: 0,
          rate: wC,
          handle: QC,
          spatial: zC,
          stopTimer: void 0
        }), 0 !== QC && this.core.set(QC, oC), 1 !== wC && fC.rate(wC, oC), bC && fC.loop(!0, oC), {
          howl: fC,
          id: oC
        }
      }
      sheet(CC, zC) {
        const ZC = Xz(CC, zC);
        let QC = this.sheets.get(ZC);
        if (!QC) {
          const wC = this.createHowl(Sz[CC], zC);
          wC.on("end", (CC => {
            wC.loop(CC) || this.forget(CC)
          })), wC.on("stop", (CC => {
            this.forget(CC)
          })), wC.on("play", (CC => {
            this.live.has(CC) && this.started.add(CC)
          })), wC.on("loaderror", (CC => {
            if ("loaded" !== wC.state()) {
              this.failed.add(wC);
              for (const [CC, zC] of this.live) zC.howl === wC && this.forget(CC)
            } else "number" === typeof CC && this.forget(CC)
          })), this.sheets.set(ZC, wC), QC = wC
        }
        return QC
      }
      setRel(CC, zC) {
        const ZC = this.live.get(CC);
        ZC && (cz(ZC), ZC.fadeMs = 0, ZC.rel = mz(zC), ZC.gain = ZC.rel * this.master, ZC.howl.volume(ZC.gain, CC))
      }
      fade(CC, zC, ZC, QC) {
        const wC = this.live.get(CC);
        if (!wC) return;
        cz(wC);
        const {
          howl: bC
        } = wC, nC = this.gainNow(wC);
        wC.rel = mz(zC), wC.gain = wC.rel * this.master;
        const fC = ZC > 0 ? Math.min(ZC, 65535) : 0,
          oC = 0 === fC || nC === wC.gain;
        wC.fadeMs = oC ? 0 : fC, oC ? bC.volume(wC.gain, CC) : (wC.fadeFrom = nC, wC.fadeAt = this.now(), bC.fade(nC, wC.gain, fC, CC)), QC && (oC ? bC.stop(CC) : wC.stopTimer = setTimeout((() => {
          wC.stopTimer = void 0, bC.stop(CC)
        }), fC))
      }
      gainNow(CC) {
        if (CC.fadeMs > 0) {
          const zC = (this.now() - CC.fadeAt) / CC.fadeMs;
          if (zC < 1) return CC.fadeFrom + (CC.gain - CC.fadeFrom) * Math.max(0, zC);
          CC.fadeMs = 0
        }
        return CC.gain
      }
      forget(CC) {
        this.started.delete(CC);
        const zC = this.live.get(CC);
        zC && (cz(zC), this.live.delete(CC), 0 !== zC.handle && this.core.get(zC.handle) === CC && this.core.delete(zC.handle))
      }
    }

    function Xz(CC, zC) {
      return 2 * CC + (zC ? 1 : 0)
    }

    function cz(CC) {
      void 0 !== CC.stopTimer && (clearTimeout(CC.stopTimer), CC.stopTimer = void 0)
    }
    var uz = ZC(40440),
      rz = ZC(38964);
    class sz {
      constructor(CC, zC, ZC, QC) {
        this.key = CC, this.model = zC, this.host = QC, this.HW = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.PwC = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Sg = !1, this.HW = Math.max(1, Math.ceil(ZC)), this.records = new Float32Array(this.HW * oz.d), this.isDirty = new Uint8Array(this.HW), this.tail = new Uint8Array(this.HW * gC.Cc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(QC.cmd())
      }
      setOrigin(CC, zC, ZC) {
        this.origin[0] = CC, this.origin[1] = zC, this.origin[2] = ZC
      }
      markDirty(CC) {
        !this.Sg && CC >= 0 && CC < this.HW && CC < gC.Cc.Max && this.rg(CC, CC + 1)
      }
      commit(CC) {
        if (this.Sg) return;
        (CC = Math.min(Math.max(Math.floor(CC), 0), this.HW, gC.Cc.Max)) > this.count && this.rg(this.count, CC), this.count = CC;
        const {
          origin: zC,
          sentOrigin: ZC,
          dirtyList: QC
        } = this, wC = this.PwC !== CC, bC = ZC[0] !== zC[0] || ZC[1] !== zC[1] || ZC[2] !== zC[2];
        if (0 === QC.length && !wC && !bC) return;
        const nC = this.host.cmd();
        if (!nC || !this.make(nC)) return;
        const fC = QC.length,
          {
            records: oC,
            tailView: qC
          } = this;
        for (let FC = 0; FC < fC; FC++) {
          const CC = QC[FC],
            zC = CC * oz.d,
            ZC = FC * gC.Cc.Bytes,
            wC = 0 !== oC[zC + oz.g] ? gC.Cc.Hidden : 0;
          qC.setUint32(ZC, (CC | wC) >>> 0, !0), qC.setFloat32(ZC + 4, oC[zC], !0), qC.setFloat32(ZC + 8, oC[zC + 1], !0), qC.setFloat32(ZC + 12, oC[zC + 2], !0)
        }
        if ((0, gC.df)(nC, 0, this.key, CC, zC, fC, this.tailOf(fC))) {
          for (let CC = 0; CC < fC; CC++) this.isDirty[QC[CC]] = 0;
          QC.length = 0, this.PwC = CC, ZC[0] = zC[0], ZC[1] = zC[1], ZC[2] = zC[2]
        }
      }
      grow(CC) {
        (CC = Math.ceil(CC)) <= this.HW || this.Sg || (this.records = (0, rz.b)(this.records, new Float32Array(CC * oz.d)), this.isDirty = (0, rz.b)(this.isDirty, new Uint8Array(CC)), this.tail = new Uint8Array(CC * gC.Cc.Bytes), this.tailView = new DataView(this.tail.buffer), this.HW = CC)
      }
      dispose() {
        this.Sg || (this.Sg = !0, this.host.Sg(this, this.made ? this.key : null))
      }
      make(CC) {
        if (!this.made && CC) {
          const {
            item: zC,
            scale: ZC,
            yaw: QC
          } = this.model;
          this.made = (0, gC.kf)(CC, 0, this.key, zC, ZC, QC)
        }
        return this.made
      }
      tailOf(CC) {
        const zC = CC * gC.Cc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === zC || (this.tailCut = this.tail.subarray(0, zC)), this.tailCut
      }
      rg(CC, zC) {
        const {
          dirtyList: ZC,
          isDirty: QC
        } = this;
        for (let wC = CC; wC < zC; wC++) 0 === QC[wC] && (QC[wC] = 1, ZC.push(wC))
      }
    }
    var Tz = ZC(597);
    class az {
      constructor(CC) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: CC,
          owes: CC => {
            this.owing.add(CC)
          },
          settled: (CC, zC) => {
            this.owing.delete(CC), zC && this.live.delete(CC)
          }
        }
      }
      create(CC, zC) {
        if (ZC = CC, !Tz.p.includes(ZC)) return null;
        var ZC;
        const QC = new tz(++this.keys, FC.i.indexOf(CC), zC, this.host);
        return this.live.add(QC), QC
      }
      disposeAll() {
        for (const CC of [...this.live]) CC.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const CC = this.host.cmd();
        for (const zC of this.owing)
          if (!zC.sync(CC)) return
      }
    }
    class tz {
      constructor(CC, zC, ZC, QC) {
        this.key = CC, this.lifeform = zC, this.scale = ZC, this.host = QC, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Sg = !1, this.sync()
      }
      setPose(CC, zC) {
        this.Sg || (this.feet[0] = CC[0], this.feet[1] = CC[1], this.feet[2] = CC[2], this.yaw = zC, this.owed |= 2, this.sync())
      }
      setVisible(CC) {
        this.Sg || CC === this.visible || (this.visible = CC, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Sg || (this.Sg = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(CC) ? (this.host.settled(this, this.Sg), !0) : (this.host.owes(this), !1)
      }
      write(CC) {
        if (!CC) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, gC.pf)(CC, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const zC = (2 & this.owed ? gC.kd.Pose : 0) | (4 & this.owed ? gC.kd.Visible : 0);
        if (0 !== zC) {
          if (!(0, gC.of)(CC, 0, this.key, zC, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, gC.mf)(CC, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Dz = ZC(40827);

    function jz(CC, zC, ZC, QC) {
      return (0, Dz.b)(), (0, gC.Uf)(CC, zC, ZC, QC)
    }
    var yz = ZC(38967),
      Lz = ZC(40427);
    const Uz = [0, 0, 0],
      Bz = [0, 0, 0],
      Oz = [0, 0, 0],
      kz = [0, 0, 0],
      Vz = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      CZ = [0, 0, 0],
      zZ = [0, 0],
      ZZ = [1, 1, 1],
      QZ = 1 / 3;
    const wZ = qz.f;

    function bZ(CC) {
      const zC = qz.b[CC],
        ZC = zC && qz.f[zC.mainMultiblock];
      return ZC && {
        main: ZC,
        x: zC.compX,
        y: zC.compY,
        z: zC.compZ
      }
    }

    function nZ(CC) {
      if (null === CC || void 0 === CC) return gC.qd;
      const zC = +CC;
      return Number.isInteger(zC) && zC >= -2147483648 && zC <= 2147483647 && String(zC) === String(CC) ? zC : gC.qd
    }

    function fZ(CC, zC, ZC) {
      return (0, gC.$f)(CC, 0, zC, null !== ZC && void 0 !== ZC ? ZC : Number.NaN)
    }
    class oZ {
      constructor(CC) {
        this.deps = CC, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new yz.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (CC => {
          var zC, ZC;
          null === (zC = (ZC = this.deps).setLocalOptions) || void 0 === zC || zC.call(ZC, CC)
        })), this.mobModels = new az((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Sg: (CC, zC) => {
            this.livePools.delete(CC), null !== zC && (this.owedFrees.push(zC), this.flushOwed())
          }
        }, this.api = CC.api, this.live = CC.live, this.chunks = CC.chunks, this.items = CC.items, this.tables = CC.tables
      }
      isLocal(CC) {
        return null !== CC && void 0 !== CC && +CC === this.api.localId
      }
      assertLocal(CC, zC) {
        if (!this.isLocal(CC)) throw new Error(`Attempted to ${zC} for a player that is not the local player`)
      }
      yG(CC) {
        const zC = this.api.yG(CC);
        if (!zC) throw new Error(`Entity ${CC} has no replicated position`);
        return zC
      }
      checkValid(CC) {
        return !!this.deps.isSessionLive() && (null === CC || void 0 === CC || this.api.checkValid(CC))
      }
      isAlive(CC) {
        return !1 !== this.api.isAlive(CC)
      }
      getItemStat(CC, zC, ZC) {
        return this.isLocal(CC) || null !== CC && "Player" === this.api.getEntityType(CC) ? this.tables.getItemStat(zC, ZC) : this.tables.getDefaultItemStat(zC, ZC)
      }
      getClientOption(CC, zC) {
        return this.assertLocal(CC, "get a client option"), this.tables.getClientOption(zC)
      }
      openShop(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(CC, "open shop"), nC.o.bp("showShopFromServer", {
          toggle: zC,
          hw: ZC
        }, !0)
      }
      sendMessage(CC, zC, ZC) {
        this.assertLocal(CC, "send a message");
        const QC = "string" === typeof zC ? [{
          str: zC,
          style: ZC
        }] : zC;
        nC.o.bp("chat", {
          content: QC
        }, !0)
      }
      getEntityType(CC) {
        return this.api.getEntityType(CC)
      }
      getEntityName(CC) {
        const zC = nZ(CC);
        return zC === gC.qd ? void 0 : (0, uz.j)(this.api, zC)
      }
      hasEffect(CC, zC) {
        const ZC = nZ(CC);
        return ZC !== gC.qd && (0, uz.g)(this.api, ZC, zC)
      }
      getMetaInfo(CC) {
        return this.tables.getMetaInfo(CC)
      }
      getPlayerDbId(CC) {
        return this.assertLocal(CC, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(CC, zC, ZC) {
        if (!this.chunks.dataCleared(CC, zC, ZC)) return (0, uz.e)(this.api, CC, zC, ZC)
      }
      TY(CC, zC, ZC, QC) {
        this.setBlockId(CC, zC, ZC, this.tables.getItemId(QC))
      }
      setOtherEntitySetting(CC, zC, ZC, QC) {
        if (!this.isLocal(CC)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(gC.Dd, ZC)) throw new Error(`Unknown other-entity setting ${ZC}`);
        const wC = gC.Dd[ZC],
          bC = nZ(zC);
        if (bC === gC.qd || !this.deps.beforeWrite()) return;
        const nC = (0, XC.f)(QC);
        if (nC.length > 16384) throw new Error(`The other-entity setting ${ZC}'s value is over 16384 bytes`);
        const fC = this.api.memoryView(Uint8Array, this.api.scratch(), nC.length, "set_other_entity_setting's value");
        fC && (fC.set(nC), this.api.queries.setOtherEntitySetting(bC, wC, nC.length))
      }
      getPositionView(CC) {
        return this.live.position(+CC)
      }
      readDrawnPosition(CC, zC) {
        return this.api.readDrawnPosition(nZ(CC), zC)
      }
      getDrawnHeading(CC) {
        const zC = nZ(CC),
          ZC = (zC === gC.qd ? 0 : this.api.queries.directorEntity(zC)) >= gC.xb.BYTES ? this.api.memoryData(this.api.scratch(), gC.xb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!ZC) return null;
        if (1 === gC.xb.headingIsDrawn(ZC, 0)) return gC.xb.heading(ZC, 0);
        const QC = this.api.apiView;
        return this.isLocal(CC) && 0 === (gC.w.playerFlags(QC, 0) & gC.ce.FreeCam) ? gC.w.heading(QC, 0) : null
      }
      getLocalPlayerMovement() {
        const CC = gC.w.playerFlags(this.api.apiView, 0);
        return 0 === (CC & gC.ce.Replay) && this.api.readDrawnPosition(this.api.localId, Oz) ? {
          onGround: 0 !== (CC & gC.ce.OnGround),
          jumpHeld: 0 !== (CC & gC.ce.JumpHeld)
        } : null
      }
      XzC(CC) {
        return this.isLocal(CC) ? this.items.vq() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var CC, zC;
        return "Gun" === (null === (CC = this.aliveHeld()) || void 0 === CC || null === (zC = CC.typeObj) || void 0 === zC ? void 0 : zC.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.vq()
      }
      isCrosshairShown() {
        var CC, zC;
        const ZC = (0, Wz.c)(QC.b.get("crosshairGameView"), QC.b.get("crosshairShownOverride"));
        if (null !== ZC) return ZC;
        const wC = null === (CC = this.aliveHeld()) || void 0 === CC ? void 0 : CC.typeObj,
          bC = "Gun" === (null === wC || void 0 === wC ? void 0 : wC.type),
          nC = bC || !0 === (null === wC || void 0 === wC ? void 0 : wC.showsAimingUi),
          fC = 0 === (gC.w.playerFlags(this.api.apiView, 0) & gC.ce.ZoomFirstPerson),
          oC = null !== (zC = this.tables.getClientOption("gunshotOrigin")) && void 0 !== zC ? zC : null;
        return (0, Wz.g)({
          gun: bC,
          aimable: nC
        }, fC, (0, Nz.e)(), oC)
      }
      setCrosshairShown(CC) {
        QC.b.set({
          crosshairShownOverride: CC
        })
      }
      getInventoryFreeSlotCount(CC) {
        return this.isLocal(CC) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(CC) {
        return this.isLocal(CC) ? this.items.selectedSlot : null
      }
      getItemSlot(CC, zC) {
        return this.isLocal(CC) ? this.items.slot(zC) : null
      }
      swapInventorySlots(CC, zC) {
        return this.items.swap(CC, zC)
      }
      isPlayerCrouching(CC) {
        if (this.isLocal(CC)) return 0 !== (gC.w.playerFlags(this.api.apiView, 0) & gC.ce.Crouching);
        const zC = nZ(CC);
        return zC !== gC.qd && 1 === this.api.queries.entityCrouching(zC)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (gC.w.playerFlags(this.api.apiView, 0) & gC.ce.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.pCC()
      }
      getActionRay() {
        const CC = this.api.apiView;
        for (let zC = 0; zC < 3; zC++) Vz.origin[zC] = gC.w.HCC(CC, 0, zC), Vz.direction[zC] = gC.w.actionDir(CC, 0, zC);
        return Vz
      }
      canModifyBlockAt(CC, zC, ZC) {
        return 1 === this.api.queries.canModify(CC, zC, ZC)
      }
      isSolidToPlayerBlockId(CC) {
        return this.tables.isSolidBlockId(CC) && !this.chunks.isWalkThrough(CC)
      }
      blockNameToBlockId(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(CC, zC)
      }
      blockIdToBlockName(CC) {
        return this.tables.nameOfId(CC)
      }
      QzC(CC, zC, ZC, QC, wC) {
        return 1 === this.api.queries.terrainBlocked(QC, CC, zC, ZC, nZ(null !== wC && void 0 !== wC ? wC : null))
      }
      getChunkVersion(CC, zC, ZC) {
        return this.chunks.version(CC, zC, ZC)
      }
      scanBlocks(CC, zC, ZC, QC, wC, bC, nC, fC) {
        return this.chunks.scan(CC, zC, ZC, QC, wC, bC, nC, fC)
      }
      isBlockInLoadedChunk(CC, zC, ZC) {
        return this.chunks.isLoaded(CC, zC, ZC)
      }
      getBlockId(CC, zC, ZC) {
        return this.chunks.SF(CC, zC, ZC)
      }
      playSound(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(CC)) return null;
        const nC = this.playSoundFrom(zC, ZC, wC, bC);
        return 1 === QC ? nC : nC.rate(QC)
      }
      preloadSounds(CC) {
        var zC, ZC;
        null === (zC = (ZC = this.deps).preloadSounds) || void 0 === zC || zC.call(ZC, CC)
      }
      playSoundFrom(CC, zC, ZC, QC) {
        var wC, bC;
        const nC = this.deps.playSound;
        if (!nC) return ez.e;
        const fC = null === ZC || void 0 === ZC ? void 0 : ZC.UQ,
          oC = null !== (wC = null === ZC || void 0 === ZC ? void 0 : ZC.maxHearDist) && void 0 !== wC ? wC : Fz.g,
          qC = null !== (bC = null === ZC || void 0 === ZC ? void 0 : ZC.refDistance) && void 0 !== bC ? bC : Fz.j;
        let FC = null;
        if (Array.isArray(fC)) Uz[0] = fC[0], Uz[1] = fC[1], Uz[2] = fC[2], FC = Uz;
        else if (void 0 !== fC && null !== fC) {
          const CC = nZ(fC);
          if (!this.api.isLocal(CC)) {
            if (!this.api.readPosition(CC, Uz)) return ez.e;
            FC = Uz
          }
        }
        return nC(CC, zC, FC, FC && this.ear(), oC, qC, QC)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Bz)) Bz[1] += Kz;
        else {
          const CC = this.api.apiView;
          if (0 === gC.w.viewProj(CC, 0, 3) && 0 === gC.w.viewProj(CC, 0, 7) && 0 === gC.w.viewProj(CC, 0, 11)) return null;
          for (let zC = 0; zC < 3; zC++) Bz[zC] = gC.w.eye(CC, 0, zC)
        }
        return Number.isFinite(Bz[0] + Bz[1] + Bz[2]) ? Bz : null
      }
      setBlockId(CC, zC, ZC, QC) {
        if (!Number.isInteger(QC) || QC < 0 || QC > 65535) throw new Error(`Invalid block id ${QC}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(CC, zC, ZC)) return;
        const wC = Math.floor(CC),
          bC = Math.floor(zC),
          nC = Math.floor(ZC),
          fC = this.predictedCells(wC, bC, nC, QC);
        if (1 === this.api.queries.TY(wC, bC, nC, QC)) {
          for (let CC = 0; CC < fC.length; CC += 5) this.chunks.setOverlay(fC[CC], fC[CC + 1], fC[CC + 2], fC[CC + 3], 1 === fC[CC + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(CC, zC) {
        return this.deps.particles.create(CC, zC)
      }
      playParticleEffect(CC) {
        this.deps.particles.playEffect(CC)
      }
      burstParticlePreset(CC, zC, ZC) {
        this.deps.particles.burstPreset(CC, zC, ZC)
      }
      createGameMesh(CC, zC, ZC) {
        const QC = ++this.meshKeys,
          wC = this.deps.cmd();
        if (!wC) return QC;
        const {
          look: bC,
          colour: nC
        } = function(CC) {
          switch (CC.kind) {
            case void 0:
            case "flatEmissive":
              return CC.onTop ? {
                look: gC.hc.FlatOnTop,
                colour: [...CC.rgb, CC.alpha]
              } : CC.opaque ? {
                look: gC.hc.FlatOpaque,
                colour: [...CC.rgb, 1]
              } : {
                look: gC.hc.Flat,
                colour: [...CC.rgb, CC.alpha]
              };
            case "chevronPath":
              return {
                look: gC.hc.Chevrons, colour: [...(0, Mz.c)(CC.colour), CC.alpha]
              };
            case "furnaceFire":
              return {
                look: gC.hc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(zC), fC = Math.floor(CC.positions.length / 3), oC = function(CC, zC) {
          const ZC = Math.floor(CC.positions.length / 3),
            QC = CC.indices.length,
            wC = ZC * (zC ? 5 : 3),
            bC = new Uint8Array(4 * (wC + QC)),
            nC = new DataView(bC.buffer);
          for (let qC = 0; qC < 3 * ZC; qC++) nC.setFloat32(4 * qC, CC.positions[qC], !0);
          if (zC) {
            var fC;
            const zC = null !== (fC = CC.uvs) && void 0 !== fC ? fC : [];
            for (let CC = 0; CC < 2 * ZC; CC++) {
              var oC;
              nC.setFloat32(4 * (3 * ZC + CC), null !== (oC = zC[CC]) && void 0 !== oC ? oC : 0, !0)
            }
          }
          for (let qC = 0; qC < QC; qC++) nC.setUint32(4 * (wC + qC), CC.indices[qC], !0);
          return bC
        }(CC, (0, oz.j)(zC));
        return (0, gC.Ve)(wC, 0, QC, bC, nC, ZC, fC, CC.indices.length, oC) && this.liveMeshes.add(QC), QC
      }
      setGameMesh(CC, zC) {
        var ZC;
        const QC = this.deps.cmd();
        if (!QC) return;
        let wC = 0;
        zC.anchor && (wC |= gC.kc.Anchor, CZ[0] = zC.anchor[0], CZ[1] = zC.anchor[1], CZ[2] = zC.anchor[2]), void 0 !== zC.visible && (wC |= gC.kc.Visible), zC.uvOffset && (wC |= gC.kc.UvOffset, zZ[0] = zC.uvOffset[0], zZ[1] = zC.uvOffset[1]);
        const bC = null !== (ZC = zC.visibility) && void 0 !== ZC ? ZC : 1;
        void 0 !== zC.visibility && (wC |= gC.kc.Visibility), zC.scale && (wC |= gC.kc.Scale, ZZ[0] = zC.scale[0], ZZ[1] = zC.scale[1], ZZ[2] = zC.scale[2]), 0 !== wC && (0, gC.Xe)(QC, 0, CC, wC, zC.visible ? 1 : 0, CZ, zZ, bC, ZZ)
      }
      disposeGameMesh(CC) {
        const zC = this.deps.cmd();
        zC && !(0, gC.We)(zC, 0, CC) || this.liveMeshes.delete(CC)
      }
      hasPackModel(CC) {
        var zC, ZC, QC;
        return null !== (zC = null === (ZC = (QC = this.deps).hasPackModel) || void 0 === ZC ? void 0 : ZC.call(QC, CC)) && void 0 !== zC && zC
      }
      disposeGameOutput() {
        const CC = CC => {
          try {
            CC()
          } catch (zC) {
            console.error("Error freeing client game output", zC)
          }
        };
        for (const zC of [...this.liveMeshes]) CC((() => {
          this.disposeGameMesh(zC)
        }));
        for (const zC of [...this.livePools]) CC((() => {
          zC.dispose()
        }));
        CC((() => {
          this.mobModels.disposeAll()
        })), CC((() => {
          this.setGroundArrowStyle(null)
        })), CC((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), CC((() => {
          this.setCrosshairShown(null)
        })), CC((() => {
          this.cameraTurn.dispose()
        })), CC((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(CC, zC) {
        const ZC = this.tables.idOf(CC.item);
        if (void 0 === ZC) return null;
        const QC = new sz(++this.poolKeys, {
          item: ZC,
          scale: CC.scale,
          yaw: CC.yaw
        }, zC, this.poolHost);
        return this.livePools.add(QC), QC
      }
      createMobModel(CC, zC) {
        return this.mobModels.create(CC, zC)
      }
      setRouteChevrons(CC) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !CC || 0 === CC.cells.length) return;
        const zC = `${CC.colour} ${CC.alpha}`;
        zC !== this.routeLook && (this.routeLook = zC, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(CC) {
          const [zC, ZC, QC] = CC[0].pos, wC = [], bC = [], nC = [];
          return CC.forEach(((CC, fC) => {
            let {
              pos: oC,
              way: [qC, FC]
            } = CC;
            const WC = oC[0] - zC + .5,
              NC = oC[1] - ZC + .04,
              MC = oC[2] - QC + .5,
              [gC, SC] = [.35 * -FC, .35 * qC],
              [pC, PC] = [fC * QZ, (fC + 1) * QZ],
              GC = wC.length / 3;
            wC.push(WC - .5 * qC + gC, NC, MC - .5 * FC + SC), wC.push(WC - .5 * qC - gC, NC, MC - .5 * FC - SC), wC.push(WC + .5 * qC + gC, NC, MC + .5 * FC + SC), wC.push(WC + .5 * qC - gC, NC, MC + .5 * FC - SC), bC.push(0, pC, 1, pC, 0, PC, 1, PC), nC.push(GC, GC + 1, GC + 2, GC + 1, GC + 3, GC + 2)
          })), {
            positions: wC,
            uvs: bC,
            indices: nC
          }
        }(CC.cells), {
          kind: "chevronPath",
          colour: CC.colour,
          alpha: CC.alpha
        }, CC.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(CC) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(CC, 250) / 1e3 * 1.2 * QZ) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(CC) {
        this.pendingStyle = CC, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const CC = this.owedFrees;
        if (0 === CC.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const zC = this.deps.cmd();
        if (!zC) return CC.length = 0, void(this.pendingFar = void 0);
        let ZC = 0;
        for (; ZC < CC.length && (0, gC.hf)(zC, 0, CC[ZC]);) ZC++;
        CC.splice(0, ZC);
        const QC = this.pendingStyle;
        if (void 0 !== QC) {
          (QC ? (0, gC.dg)(zC, 0, QC.width, QC.alpha, 1, QC.endAtSolidFace ? 1 : 0) : (0, gC.dg)(zC, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const wC = this.pendingFar;
        void 0 !== wC && (0, gC.Xf)(zC, 0, null !== wC && void 0 !== wC ? wC : 0, null === wC ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(CC, zC) {
        const ZC = this.deps.cmd(),
          QC = nZ(CC);
        ZC && QC !== gC.qd && (0, gC.kg)(ZC, 0, QC, zC)
      }
      setFacingTolerance(CC, zC) {
        const ZC = this.deps.cmd(),
          QC = nZ(CC);
        ZC && QC !== gC.qd && fZ(ZC, QC, zC)
      }
      forEachEntity(CC) {
        const {
          api: zC
        } = this;
        for (let ZC = 0; ZC < zC.idStr.length; ZC++) {
          const QC = zC.idStr[ZC];
          null === QC || xC(zC.kinds[ZC]) || CC(QC)
        }
      }
      getEntityInfo(CC) {
        return this.deps.entityInfo.get(CC)
      }
      isEntityInteractable(CC) {
        const zC = nZ(CC);
        return zC !== gC.qd && 1 === this.api.queries.entityInteractable(zC)
      }
      isLocalPlayer(CC) {
        return this.isLocal(CC)
      }
      getLineOwner(CC) {
        var zC;
        const ZC = null === (zC = this.deps.entityInfo.get(CC)) || void 0 === zC ? void 0 : zC.meshOpts;
        if (!ZC) return null;
        try {
          const {
            lineToEId: CC
          } = JSON.parse(ZC);
          return null !== CC && void 0 !== CC ? CC : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const CC = this.api.apiView;
        return kz[0] = gC.w.eye(CC, 0, 0), kz[1] = gC.w.eye(CC, 0, 1), kz[2] = gC.w.eye(CC, 0, 2), kz
      }
      getCameraFar() {
        return gC.w.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(CC) {
        null !== CC && (this.farSet = !0), this.pendingFar = CC, this.flushOwed()
      }
      turnCamera(CC, zC) {
        this.cameraTurn.turn(CC, zC)
      }
      clearPickupDelay(CC) {
        const zC = this.deps.cmd(),
          ZC = nZ(CC);
        zC && ZC !== gC.qd && (0, gC.Ee)(zC, 0, ZC)
      }
      sendChat(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = this.deps.sendCmd();
        ZC && jz(ZC, 0, Lz.b.Chat, (0, XC.f)((0, Lz.k)({
          cq: CC,
          uq: zC
        })))
      }
      sendCommand(CC) {
        CC.length <= 119 && this.sendChat(`/${CC}`)
      }
      predictedCells(CC, zC, ZC, QC) {
        const wC = this.chunks,
          bC = [],
          nC = (CC, zC, ZC, QC, wC) => {
            bC.push(CC, zC, ZC, QC, this.tables.blockRootId(wC) === this.tables.blockRootId(QC) ? 0 : 1)
          },
          fC = wC.SF(CC, zC, ZC),
          oC = bZ(fC);
        if (oC) {
          const [QC, bC, qC] = [CC - oC.x, zC - oC.y, ZC - oC.z], FC = wZ[wC.SF(QC, bC, qC)], WC = null === FC || void 0 === FC ? void 0 : FC.positions.some((CC => CC.id === fC && CC.x === oC.x && CC.y === oC.y && CC.z === oC.z));
          for (const CC of (WC && FC ? FC : oC.main).positions) wC.SF(QC + CC.x, bC + CC.y, qC + CC.z) === CC.id && nC(QC + CC.x, bC + CC.y, qC + CC.z, 0, CC.id)
        }
        const qC = bZ(QC);
        if (qC)
          for (const WC of qC.main.positions) {
            const [QC, bC, fC] = [CC + WC.x - qC.x, zC + WC.y - qC.y, ZC + WC.z - qC.z];
            nC(QC, bC, fC, WC.id, wC.SF(QC, bC, fC))
          } else nC(CC, zC, ZC, QC, fC);
        const FC = this.tables;
        if ((0 !== FC.attachedTopOf(fC) || 0 !== FC.attachedTopOf(QC)) && wC.isLoaded(CC, zC + 1, ZC)) {
          let oC = wC.SF(CC, zC + 1, ZC);
          for (let QC = 0; QC < bC.length; QC += 5) bC[QC] === CC && bC[QC + 1] === zC + 1 && bC[QC + 2] === ZC && (oC = bC[QC + 3]);
          const qC = this.attachedTopWrite(fC, QC, oC);
          void 0 !== qC && nC(CC, zC + 1, ZC, qC, oC)
        }
        return bC
      }
      attachedTopWrite(CC, zC, ZC) {
        const QC = this.tables,
          wC = QC.attachedTopOf(CC),
          bC = QC.attachedTopOf(zC),
          nC = 0 !== wC && 0 !== ZC && QC.blockRootId(ZC) === QC.blockRootId(wC);
        return 0 !== wC && 0 !== bC && QC.blockRootId(CC) === QC.blockRootId(zC) ? nC && ZC !== bC ? bC : void 0 : 0 === bC || !nC && 0 !== ZC ? nC ? 0 : void 0 : bC
      }
    }
    const qZ = gC.xc + gC.Ac * gC.Kc.BYTES,
      FZ = 2147483647,
      WZ = new TextDecoder,
      NZ = new TextEncoder,
      MZ = Object.freeze({
        Cf: 0,
        qn: null,
        amountAddedToSlot: 0
      }),
      gZ = new Proxy({}, {
        get: () => () => gC.Ad
      });

    function SZ(CC) {
      return Number.isInteger(CC) && CC >= 0 && CC <= 65535
    }

    function pZ(CC) {
      return Number.isInteger(CC) && CC >= 0 && CC <= 4294967295
    }
    class PZ {
      constructor(CC) {
        this.deps = CC, this.hQ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(gC.Ac), this.ids = new Uint16Array(gC.Ac), this.amounts = new Uint16Array(gC.Ac), this.attrRead = new Float64Array(gC.Ac).fill(-1), this.stale = new Uint16Array(gC.Ac), this.staleVersion = new Uint32Array(gC.Ac), this.instances = new Uint32Array(gC.Ac), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(CC) {
        var zC;
        return Number.isInteger(CC) && CC >= 0 && CC < this.len && 0 !== this.ids[CC] && null !== (zC = this.facades[CC]) && void 0 !== zC ? zC : null
      }
      vq() {
        return this.slot(this.selected)
      }
      playerItems() {
        const CC = [];
        for (let zC = 0; zC < Math.min(gC.Nd, this.len); zC++) CC.push(this.slot(zC));
        return CC
      }
      freeSlots() {
        let CC = 0;
        for (let zC = 0; zC < Math.min(gC.Nd - gC.g, this.len); zC++) 0 === this.ids[zC] && CC++;
        return CC
      }
      amountOf(CC) {
        let zC = 0;
        for (let QC = 0; QC < Math.min(gC.Nd, this.len); QC++) {
          const wC = this.slot(QC);
          var ZC;
          if ((null === wC || void 0 === wC ? void 0 : wC.name) === CC) zC += null !== (ZC = wC.amount) && void 0 !== ZC ? ZC : 1
        }
        return zC
      }
      instance(CC) {
        var zC;
        return null !== (zC = this.instances[CC]) && void 0 !== zC ? zC : 0
      }
      watch(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      touch() {
        this.version++
      }
      flush(CC) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const ZC of [...this.listeners]) try {
            ZC()
          } catch (zC) {
            CC(zC)
          }
        }
      }
      chestOpened(CC, zC, ZC) {
        this.hQ[0] = CC, this.hQ[1] = zC, this.hQ[2] = ZC, this.version++
      }
      refresh() {
        const CC = this.deps.api.apiView,
          zC = gC.w.inventoryViewPtr(CC, 0),
          ZC = gC.w.inventoryVersion(CC, 0),
          QC = gC.w.selectedSlot(CC, 0);
        QC !== this.selected && (this.selected = QC, this.version++);
        const wC = gC.w.slotIcon(CC, 0);
        if (wC !== this.slotIconId && (this.slotIconId = wC, this.iconChanged = !0), zC === this.viewPtr && ZC === this.viewVersion) return;
        this.viewPtr = zC, this.viewVersion = ZC;
        const bC = this.deps.api.memoryData(zC, qZ, 4, "the inventory view"),
          nC = bC ? Math.min(bC.getUint32(0, !0), gC.Ac) : 0;
        nC !== this.len && (this.len = nC, this.version++);
        let fC = 0;
        for (let oC = 0; oC < gC.Ac; oC++) {
          const CC = gC.xc + oC * gC.Kc.BYTES,
            zC = null !== bC && oC < nC ? gC.Kc.item(bC, CC) : 0;
          if (0 === zC || null === bC) {
            0 !== this.ids[oC] && (this.ids[oC] = 0, this.attrRead[oC] = -1, this.instances[oC]++, this.version++);
            continue
          }
          const ZC = gC.Kc.amount(bC, CC),
            QC = gC.Kc.attrVersion(bC, CC);
          zC === this.ids[oC] && ZC === this.amounts[oC] || this.fill(oC, zC, ZC), QC !== this.attrRead[oC] && (this.stale[fC] = oC, this.staleVersion[fC] = QC, fC++)
        }
        fC > 0 && this.fetchAttributes(fC)
      }
      fill(CC, zC, ZC) {
        const {
          tables: QC
        } = this.deps, wC = zC !== this.ids[CC];
        let bC = this.facades[CC];
        bC || (bC = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[CC] = bC), wC && (bC.name = QC.nameOfId(zC), bC.typeObj = QC.itemType(zC), bC.attributes = {
          customAttributes: {}
        }, this.attrRead[CC] = -1, this.instances[CC]++), bC.amount = 0 === ZC ? null : ZC, this.ids[CC] = zC, this.amounts[CC] = ZC, this.version++
      }
      fetchAttributes(CC) {
        const {
          api: zC,
          onError: ZC
        } = this.deps, QC = zC.memoryView(Uint16Array, zC.scratch(), CC, "item_attributes_batch's slots");
        if (!QC) return void this.markRead(CC);
        QC.set(this.stale.subarray(0, CC));
        const wC = zC.queries.itemAttributesBatch(CC),
          bC = 4294967295 === wC ? null : zC.memoryData(zC.scratch(), wC, 4, "item_attributes_batch's answer");
        if (!bC) return void this.markRead(CC);
        const nC = new Uint8Array(bC.buffer, bC.byteOffset, wC);
        for (let oC = 0; oC + 8 <= wC;) {
          const CC = bC.getUint16(oC, !0),
            zC = bC.getUint32(oC + 4, !0),
            QC = nC.subarray(oC + 8, oC + 8 + zC);
          oC += 8 + (0, NC.pe)(zC);
          const wC = this.facades[CC];
          if (wC && 0 !== this.ids[CC] && 0 !== zC) {
            try {
              wC.attributes = JSON.parse(WZ.decode(QC))
            } catch (fC) {
              ZC(fC)
            }
            this.version++
          }
        }
        this.markRead(CC)
      }
      markRead(CC) {
        for (let zC = 0; zC < CC; zC++) this.attrRead[this.stale[zC]] = this.staleVersion[zC]
      }
      swap(CC, zC) {
        return SZ(CC) && SZ(zC) && this.settle(this.queries().invSwap(CC, zC))
      }
      move(CC, zC, ZC) {
        return SZ(CC) && SZ(zC) && pZ(ZC) && this.settle(this.queries().invMove(CC, zC, ZC))
      }
      quickMove(CC, zC, ZC, QC) {
        var wC, bC;
        if (!SZ(CC) || !SZ(zC) || !SZ(ZC) || null !== QC && !pZ(QC)) return null;
        const nC = this.queries().invQuickMove(CC, zC, ZC, null === QC ? -1 : Math.min(QC, FZ)),
          fC = nC === gC.Ad ? gC.Sb : null !== (wC = null === (bC = this.extras()) || void 0 === bC ? void 0 : bC[1]) && void 0 !== wC ? wC : gC.Sb;
        return this.settle(nC), fC === gC.Sb ? null : fC
      }
      remove(CC, zC, ZC) {
        return SZ(CC) && pZ(zC) && this.settle(this.queries().invRemove(CC, zC, ZC ? 1 : 0))
      }
      selectSlot(CC) {
        return SZ(CC) && this.settle(this.queries().selectSlot(CC))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(CC, zC, ZC) {
        if (!SZ(CC) || !Number.isInteger(zC)) return !1;
        const [QC, wC, bC] = ZC;
        return this.settle(this.queries().invEnchant(CC, zC, Math.floor(QC), Math.floor(wC), Math.floor(bC)))
      }
      craft(CC, zC, ZC) {
        let QC;
        try {
          QC = this.deps.tables.getItemId(CC)
        } catch {
          return MZ
        }
        if (!SZ(zC) || null !== ZC && (Number.isNaN(ZC) || ZC < 0)) return MZ;
        const wC = null === ZC || ZC > FZ ? -1 : Math.floor(ZC),
          bC = this.queries().craft(QC, zC, wC);
        let nC = MZ;
        const fC = bC === gC.Ad ? null : this.extras();
        if (fC) {
          const [CC, zC, ZC] = fC;
          nC = {
            Cf: CC,
            qn: zC === gC.Sb ? null : zC,
            amountAddedToSlot: ZC
          }
        }
        return this.settle(bC), nC
      }
      salvage(CC, zC, ZC) {
        let QC;
        try {
          QC = this.deps.tables.getItemId(zC)
        } catch {
          return !1
        }
        return SZ(CC) && Number.isInteger(ZC) && this.settle(this.queries().salvage(CC, QC, Math.max(Math.min(ZC, FZ), -FZ)))
      }
      craftingView(CC, zC, ZC) {
        var QC;
        if (this.stopped) return null;
        const {
          api: wC,
          onError: bC
        } = this.deps, nC = CC ? NZ.encode(CC) : null;
        if (null !== nC) {
          if (nC.length > 1024) return bC(new Error(`The crafting station ${CC}'s name is over 1024 bytes`)), null;
          const zC = wC.memoryView(Uint8Array, wC.scratch(), nC.length, "crafting_view's station");
          if (!zC) return null;
          zC.set(nC)
        }
        const fC = SZ(zC) && SZ(ZC),
          oC = wC.queries.craftingView(null !== (QC = null === nC || void 0 === nC ? void 0 : nC.length) && void 0 !== QC ? QC : 0, fC ? zC : 0, fC ? ZC : 0);
        return oC < gC.mb.BYTES ? (wC.reportCorruption(`crafting_view's answer of ${oC} bytes`), null) : wC.memoryData(wC.scratch(), oC, 1, "crafting_view's answer")
      }
      queries() {
        var CC, zC;
        return !1 === (null === (CC = (zC = this.deps).beforeOp) || void 0 === CC ? void 0 : CC.call(zC)) ? (this.stopped = !0, gZ) : this.deps.api.queries
      }
      extras() {
        const {
          api: CC
        } = this.deps;
        return CC.memoryView(Uint32Array, CC.scratch(), 3, "a sync query's extra words")
      }
      settle(CC) {
        if (CC === gC.xd)(0, Dz.b)();
        else if (CC !== gC.Ad) {
          const zC = this.deps.cmd();
          zC && function(CC, zC, ZC) {
            return (0, Dz.b)(), (0, gC.yg)(CC, zC, ZC)
          }(zC, 0, CC) || this.deps.onError(new Error(`Sync op ${CC}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), CC !== gC.Ad
      }
    }
    const GZ = 1 / .6,
      RZ = [0, 1, 0],
      AZ = [0, 0, 0],
      xZ = new Uint8Array(0),
      JZ = 1.2 * gz.f.tp,
      IZ = new TextEncoder,
      iZ = [0, 0, 0],
      vZ = [0, 0, 0],
      eZ = new Map;

    function hZ(CC) {
      let zC = eZ.get(CC);
      return zC || (eZ.size >= 64 && eZ.clear(), zC = IZ.encode(`{"emitRate":${CC}}`), eZ.set(CC, zC)), zC
    }

    function KZ(CC) {
      return Number.isFinite(CC) && CC > 0 ? CC : 0
    }

    function YZ(CC, zC) {
      for (let ZC = 0; ZC < 3; ZC++) {
        const QC = Math.abs(zC[ZC]);
        iZ[ZC] = CC[ZC] - QC, vZ[ZC] = 2 * QC
      }
      return Number.isFinite(iZ[0] + iZ[1] + iZ[2] + vZ[0] + vZ[1] + vZ[2])
    }

    function dZ(CC, zC) {
      return "pos1" === CC || "pos2" === CC ? void 0 : zC
    }

    function mZ(CC, zC, ZC) {
      return CC.length > gC.$d.MaxOpts ? (ZC(new Error(`${zC}'s particle opts are over ${gC.$d.MaxOpts} bytes of JSON`)), null) : CC
    }
    const HZ = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class EZ {
      constructor(CC) {
        this.deps = CC, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(CC, zC) {
        var ZC;
        const QC = this.sink(),
          wC = null !== (ZC = zC.half) && void 0 !== ZC ? ZC : AZ;
        if (!QC || this.live >= gC.$d.MaxLiveKeys || this.nextKey > gC.$d.MaxKey || !YZ(zC.pos, wC)) return HZ;
        const bC = this.nextKey,
          nC = mZ(function(CC) {
            var zC, ZC, QC;
            const wC = JSON.stringify({
              texture: "string" === typeof CC.texture ? CC.texture : "smokePuff",
              HW: CC.HW,
              minLifeTime: CC.minLifeTime,
              maxLifeTime: CC.maxLifeTime,
              minSize: CC.minSize,
              maxSize: CC.maxSize,
              minEmitPower: CC.minEmitPower,
              maxEmitPower: CC.maxEmitPower,
              emitRate: KZ(CC.emitRate),
              gravity: null !== (zC = CC.gravity) && void 0 !== zC ? zC : AZ,
              dir1: null !== (ZC = CC.dir1) && void 0 !== ZC ? ZC : RZ,
              dir2: null !== (QC = CC.dir2) && void 0 !== QC ? QC : RZ,
              colorGradients: CC.colorGradients,
              blendMode: CC.blendMode
            });
            return IZ.encode(wC)
          }(CC), "createParticles", this.deps.onError);
        return nC && (0, gC.yf)(QC, 0, bC, 0, gC.$d.PresetNone, 0, iZ, vZ, nC) ? (this.nextKey++, this.live++, this.started = !0, new lZ(this, this.session, bC, CC, wC)) : HZ
      }
      playEffect(CC) {
        const zC = this.sink(),
          {
            pos1: ZC,
            pos2: QC
          } = CC;
        if (!zC || !ZC || !QC) return;
        for (let bC = 0; bC < 3; bC++) iZ[bC] = Math.min(ZC[bC], QC[bC]), vZ[bC] = Math.abs(QC[bC] - ZC[bC]);
        if (!Number.isFinite(iZ[0] + iZ[1] + iZ[2] + vZ[0] + vZ[1] + vZ[2])) return;
        const wC = mZ(IZ.encode(JSON.stringify(CC, dZ)), "playParticleEffect", this.deps.onError);
        wC && (0, gC.uf)(zC, 0, 0, gC.$d.PresetNone, gC.$d.HasBox, 0, iZ, vZ, wC)
      }
      burstPreset(CC, zC, ZC) {
        const QC = this.sink(),
          wC = Math.min(Math.floor(ZC), gC.$d.MaxBurst);
        if (!QC || !Object.hasOwn(gC.nc, CC) || !(wC > 0)) return;
        const bC = JZ;
        for (let nC = 0; nC < 3; nC++) iZ[nC] = zC[nC] - bC / 2, vZ[nC] = bC;
        Number.isFinite(iZ[0] + iZ[1] + iZ[2]) && (0, gC.uf)(QC, 0, 0, gC.nc[CC], gC.$d.HasBox, wC, iZ, vZ, xZ)
      }
      sessionEnded() {
        this.session++;
        const CC = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !CC || (0, gC.zf)(CC, 0)
      }
      sinkFor(CC) {
        return CC === this.session ? this.deps.cmd() : null
      }
      stop(CC, zC) {
        const ZC = this.sinkFor(CC);
        ZC && (0, gC.Bf)(ZC, 0, zC) && this.live--
      }
    }
    class lZ {
      constructor(CC, zC, ZC, QC, wC) {
        this.owner = CC, this.session = zC, this.key = ZC, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(wC[0]), Math.abs(wC[1]), Math.abs(wC[2])], this.rate = KZ(QC.emitRate), this.emitted = this.rate > 0;
        const bC = QC.maxLifeTime * GZ * 1e3 + 250;
        this.stopDelayMs = bC >= 0 ? Math.min(bC, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(CC, zC) {
        const ZC = this.sink();
        if (ZC) {
          if (zC)
            for (let CC = 0; CC < 3; CC++) this.half[CC] = Math.abs(zC[CC]);
          YZ(CC, this.half) && (0, gC.Ef)(ZC, 0, this.key, gC.$d.HasBox, iZ, vZ, xZ)
        }
      }
      setEmitRate(CC) {
        const zC = this.sink(),
          ZC = KZ(CC);
        zC && ZC !== this.rate && (0, gC.Ef)(zC, 0, this.key, 0, AZ, AZ, hZ(ZC)) && (this.rate = ZC, this.emitted ||= ZC > 0)
      }
      emit(CC) {
        const zC = this.sink(),
          ZC = Math.min(Math.floor(CC), gC.$d.MaxBurst);
        zC && ZC > 0 && (0, gC.uf)(zC, 0, this.key, gC.$d.PresetNone, 0, ZC, AZ, AZ, xZ) && (this.emitted = !0)
      }
      emitPoints(CC, zC, ZC) {
        const QC = this.sink(),
          wC = Math.min(Math.floor(ZC), gC.$d.MaxPoints, Math.floor(zC.length / 4));
        if (!QC || !(wC > 0) || !Number.isFinite(CC[0] + CC[1] + CC[2])) return;
        const bC = new Uint8Array(zC.buffer, zC.byteOffset, wC * gC.$d.PointBytes);
        (0, gC.wf)(QC, 0, this.key, wC, CC, bC) && (this.emitted = !0)
      }
      setDirections(CC, zC) {
        const ZC = this.sink();
        if (!ZC || !Number.isFinite(CC[0] + CC[1] + CC[2] + zC[0] + zC[1] + zC[2])) return;
        const QC = IZ.encode(JSON.stringify({
          dir1: [CC[0], CC[1], CC[2]],
          dir2: [zC[0], zC[1], zC[2]]
        }));
        (0, gC.Ef)(ZC, 0, this.key, 0, AZ, AZ, QC)
      }
      stop() {
        const CC = this.sink();
        this.stopped = !0, CC && (this.emitted ? (this.rate > 0 && (0, gC.Ef)(CC, 0, this.key, 0, AZ, AZ, hZ(0)), setTimeout((() => {
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
    const XZ = Tz.t,
      cZ = new TextDecoder;

    function uZ(CC, zC) {
      const {
        serverIds: ZC,
        kinds: QC
      } = CC;
      let wC = 0;
      for (let bC = 0; bC < ZC.length; bC++) {
        const CC = ZC[bC];
        if (CC !== gC.qd && !xC(QC[bC])) {
          if (wC === zC.length) {
            const CC = new Int32Array(Math.max(64, 2 * wC));
            CC.set(zC), zC = CC
          }
          zC[wC++] = CC
        }
      }
      return {
        ids: zC,
        count: wC
      }
    }

    function rZ(CC, zC) {
      return CC.length >= zC ? CC : new Int32Array(Math.max(zC, 2 * CC.length))
    }

    function sZ(CC, zC, ZC, QC) {
      for (let wC = 0; wC < ZC; wC += 4096) {
        const bC = Math.min(4096, ZC - wC),
          nC = CC.memoryView(Int32Array, CC.scratch(), bC, "entity_info_batch's ids");
        if (!nC) return !1;
        nC.set(zC.subarray(wC, wC + bC));
        const fC = CC.queries.entityInfoBatch(bC),
          oC = 4294967295 === fC ? null : CC.memoryData(CC.scratch(), fC, 4, "entity_info_batch's records");
        if (!oC) return !1;
        for (let CC = 0; CC + gC.ac.BYTES <= fC;) {
          const zC = gC.ac.len(oC, CC);
          QC(gC.ac.serverId(oC, CC), TZ(oC, CC, zC)), CC += gC.ac.BYTES + (0, NC.pe)(zC)
        }
      }
      return !0
    }

    function TZ(CC, zC, ZC) {
      var QC, wC, bC;
      const nC = gC.ac.kind(CC, zC),
        fC = 0 === nC ? null : JC(nC);
      if (null === fC) return null;
      const oC = gC.ac.variation(CC, zC),
        qC = gC.ac.pose(CC, zC),
        FC = gC.ac.meta(CC, zC),
        WC = gC.ac.mesh(CC, zC),
        NC = 0 !== (gC.ac.flags(CC, zC) & gC._b.HasOpts),
        MC = XZ[fC];
      return Object.freeze({
        type: fC,
        variation: oC === gC.td ? void 0 : null !== (QC = null !== (wC = null === MC || void 0 === MC ? void 0 : MC[oC]) && void 0 !== wC ? wC : null === MC || void 0 === MC ? void 0 : MC[0]) && void 0 !== QC ? QC : "default",
        pose: qC === gC.vc ? void 0 : null !== (bC = gC.Ob[qC]) && void 0 !== bC ? bC : gC.Ob[0],
        metaInfo: FC === gC.vc ? void 0 : gC.gd[FC],
        meshKind: WC === gC.vc ? void 0 : gC.cd[WC],
        meshOpts: NC ? cZ.decode(new Uint8Array(CC.buffer, CC.byteOffset + zC + gC.ac.BYTES, ZC)) : void 0
      })
    }
    const aZ = 1,
      tZ = 2;
    class DZ {
      constructor(CC) {
        this.deps = CC, this.wanted = 0, this.vq = !1, this.refused = !1
      }
      get on() {
        return this.vq
      }
      want(CC, zC) {
        this.wanted = zC ? this.wanted | CC : this.wanted & ~CC;
        const ZC = 0 !== this.wanted;
        if (ZC === this.vq) return;
        const QC = this.deps.cmd();
        null !== QC ? (0, gC.Cg)(QC, 0, ZC ? 1 : 0) ? (this.vq = ZC, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.vq = !1
      }
    }
    class jZ {
      constructor(CC) {
        this.deps = CC, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(CC) {
        var zC;
        return this.complete || this.fill(), null !== (zC = this.entries.get("string" === typeof CC ? CC : String(CC))) && void 0 !== zC ? zC : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(CC) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const CC = new Int32Array(2 * this.pending.length);
            CC.set(this.pending), this.pending = CC
          }
          this.pending[this.pendingCount++] = CC
        }
      }
      removed(CC) {
        this.entries.size > 0 && this.entries.delete(String(CC))
      }
      refresh() {
        const CC = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (CC > 0 && this.complete) {
          const {
            api: zC
          } = this.deps;
          let ZC = 0;
          const QC = this.ids = rZ(this.ids, CC);
          for (let wC = 0; wC < CC; wC++) {
            const CC = this.pending[wC],
              bC = zC.indexById.get(CC);
            void 0 === bC || xC(zC.kinds[bC]) ? this.entries.delete(String(CC)) : QC[ZC++] = CC
          }
          ZC > 0 && !this.batch(QC, ZC) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(aZ, !1)
      }
      fill() {
        const {
          api: CC
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: CC
          } = this.deps, zC = CC.on;
          CC.want(aZ, !0), !zC && CC.on && (this.refill = this.midFrame)
        }
        const {
          ids: zC,
          count: ZC
        } = uZ(CC, this.ids);
        this.ids = zC, ZC > 0 && !this.batch(zC, ZC) && (this.refill = !0)
      }
      batch(CC, zC) {
        return sZ(this.deps.api, CC, zC, ((CC, zC) => {
          null === zC ? this.entries.delete(String(CC)) : this.entries.set(String(CC), zC)
        }))
      }
    }
    var yZ = ZC(4733);

    function LZ(CC) {
      if ("message" !== CC.type || CC.cq !== yZ.Bc.NewClientOptions || CC.payloadKind !== NC.hc.Msgpack) return null;
      const zC = (0, XC.c)(CC.payload);
      if (null === zC || "object" !== typeof zC || Array.isArray(zC)) throw new Error("NewClientOptions whose body isn't an object of options");
      return zC
    }
    var UZ = ZC(1183),
      BZ = ZC(36508);

    function OZ(CC, zC, ZC, QC, wC, bC, fC) {
      var oC, qC, FC;
      switch (CC) {
        case gC.te.ToggleMenu: {
          const CC = gC.N[zC];
          nC.o.bp("toggleMenu", void 0 === CC ? "inventory" : `inventory|${CC}`);
          break
        }
        case gC.te.EditBoard:
          nC.o.bp("EditBoard", {
            pos: 0 === zC ? null : ZC
          });
          break;
        case gC.te.EditCodeBlock:
        case gC.te.ViewCodeBlock:
          nC.o.bp("EditCodeBlock", {
            pos: ZC,
            canChangePos: CC === gC.te.EditCodeBlock
          });
          break;
        case gC.te.EditCustomLobbyBlock:
          nC.o.bp("EditCustomLobbyBlock", {
            pos: ZC
          });
          break;
        case gC.te.OpenIronChest:
          nC.o.bp("OpenIronChest", {
            pos: ZC
          });
          break;
        case gC.te.EditNameTag:
          nC.o.bp("EditNameTag", null !== (oC = null === (qC = wC.vq()) || void 0 === qC || null === (FC = qC.attributes.customAttributes) || void 0 === FC ? void 0 : FC.text) && void 0 !== oC ? oC : "");
          break;
        case gC.te.EditBook: {
          var WC, NC, SC;
          const CC = null === (WC = wC.vq()) || void 0 === WC ? void 0 : WC.attributes;
          nC.o.bp("EditBook", {
            pages: (0, UZ.U)(null === CC || void 0 === CC || null === (NC = CC.customAttributes) || void 0 === NC ? void 0 : NC.pages),
            title: null !== (SC = null === CC || void 0 === CC ? void 0 : CC.customDisplayName) && void 0 !== SC ? SC : "Title",
            isPublished: !(null === CC || void 0 === CC || !CC.customDescription)
          });
          break
        }
        case gC.te.CantChangeBlock:
          ! function(CC, zC) {
            const ZC = zC.getClientOption("cantChangeError"),
              QC = zC.getClientOption(CC ? "cantBuildError" : "cantBreakError"),
              wC = CC ? ZC : QC;
            (zC.getClientOption("canChange") || wC || "You cannot modify this block" !== ZC) && nC.o.bp("showBottomMessage", {
              message: QC || ZC,
              type: "Error"
            })
          }(1 === zC, bC);
          break;
        case gC.te.MiddleBarStart:
          nC.o.bp("middleScreenBarInitiate", {
            duration: QC,
            sQ: 1 === ZC[0],
            horizBarRemOffset: zC
          });
          break;
        case gC.te.MiddleBarStop:
          nC.o.bp("middleScreenBarRemove");
          break;
        case gC.te.Hitmarker:
          nC.o.bp("localGunHitmarker", {
            RQ: 1 === zC
          });
          break;
        case gC.te.ShotsLeft:
          nC.o.bp("localPlayerNewShotsLeft", QC);
          break;
        case gC.te.AimingOverlay:
          nC.o.bp("aimingOverlay", 3 === (3 & zC) ? "sniper" : "none");
          break;
        case gC.te.BottomMessage:
          nC.o.bp("showBottomMessage", JSON.parse(fC()));
          break;
        case gC.te.Crosshair:
          wC.inaccuracy = (0, cC.f)(QC), (0, BZ.c)().crosshairAccuracy(wC.inaccuracy);
          break;
        case gC.te.ChargeStage:
          break;
        case gC.te.EmoteWheelClose:
          nC.o.bp("requestEmoteWheelClose");
          break;
        case gC.te.BlockMined:
          nC.o.bp("localBlockMined");
          break;
        default:
          throw new MC.b(`UiEvent of no kind: what ${CC}`)
      }
    }
    var kZ = ZC(37834),
      VZ = ZC(34162),
      CQ = ZC(1872),
      zQ = ZC(36676),
      ZQ = ZC(34171),
      QQ = ZC(4711);
    const wQ = 10,
      bQ = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      nQ = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      fQ = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function oQ(CC, zC) {
      let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const bC = () => (ZC = (0, CQ.n)(ZC, zC()), ZC);
      return {
        current: bC,
        watch(zC) {
          const ZC = () => {
              zC(bC())
            },
            nC = [CC.watch(ZC)];
          return null !== QC && nC.push((0, CQ.p)((CC => {
            CC.some(QC) && ZC()
          }))), null !== wC && nC.push(wC(ZC)), () => {
            for (const CC of nC) CC()
          }
        }
      }
    }

    function qQ(CC) {
      return CC && {
        name: CC.name,
        amount: CC.amount,
        attributes: CC.attributes
      }
    }
    const FQ = new WeakMap;

    function WQ(CC) {
      let zC = FQ.get(CC);
      return void 0 === zC && (zC = (0, ZQ.creativeItemIds)().map((zC => ({
        name: CC.nameOfId(zC),
        amount: CC.isStackableId(zC) ? 1 : null,
        attributes: (0, kZ.d)("Gun" === (0, ZQ.itemTypeOf)(zC) ? {
          type: "Gun",
          clipSize: (0, ZQ.clipSizeOf)(zC)
        } : void 0)
      }))), FQ.set(CC, zC)), zC
    }

    function NQ(CC, zC, ZC, QC) {
      const wC = zC => (CC.flush(QC), zC),
        bC = ZC => {
          var QC, wC, bC, nC, fC, oC, qC;
          const FC = CC.slot(ZC);
          if (!FC) return null;
          const {
            rootName: WC,
            metaStr: NC
          } = zC.getMetaInfo(FC.name);
          return {
            name: FC.name,
            amount: FC.amount,
            attributes: FC.attributes,
            instance: CC.instance(ZC),
            displayName: null !== (QC = FC.attributes.customDisplayName) && void 0 !== QC ? QC : zC.getDisplayName(WC),
            requiresAmmo: "RequiresAmmo" === NC,
            clipSize: null !== (wC = null !== (bC = null === (nC = FC.attributes.customAttributes) || void 0 === nC || null === (fC = nC.gunStats) || void 0 === fC ? void 0 : fC.clipSize) && void 0 !== bC ? bC : null === (oC = zC.getGunStats(WC)) || void 0 === oC ? void 0 : oC.clipSize) && void 0 !== wC ? wC : null === (qC = FC.typeObj) || void 0 === qC ? void 0 : qC.clipSize
          }
        },
        fC = function(CC, zC) {
          let ZC = null,
            QC = {
              focus: null,
              recipes: [],
              detail: null
            },
            wC = -1;
          const bC = new Set;
          return {
            read() {
              var bC, nC;
              if (null === ZC) return null !== QC.focus && (QC = {
                ...QC,
                focus: null
              }), QC;
              if (QC.focus === ZC && wC === CC.changes) return QC;
              if (wC = CC.changes, 0 === CC.length) return QC = {
                focus: ZC,
                recipes: [],
                detail: null
              }, QC;
              let fC = 0;
              if (null !== ZC.recipe) try {
                fC = zC.getItemId(ZC.recipe.name)
              } catch {}
              const oC = CC.craftingView(ZC.station, fC, null !== (bC = null === (nC = ZC.recipe) || void 0 === nC ? void 0 : nC.Vn) && void 0 !== bC ? bC : 0);
              return QC = null === oC ? {
                focus: ZC,
                recipes: [],
                detail: null
              } : function(CC, zC, ZC) {
                let QC = gC.mb.BYTES;
                const wC = [];
                for (let FC = gC.mb.recipes(CC, 0); FC > 0; FC--) {
                  const ZC = gC.eb.flags(CC, QC),
                    bC = {
                      name: zC.nameOfId(gC.eb.item(CC, QC)),
                      Vn: gC.eb.recipe(CC, QC),
                      requires: [],
                      produces: gC.eb.produces(CC, QC),
                      haveIngredients: 0 !== (ZC & gC.cb.HaveIngredients),
                      listed: 0 !== (ZC & gC.cb.Listed)
                    };
                  let nC = gC.eb.requires(CC, QC);
                  for (QC += gC.eb.BYTES; nC > 0; nC--) {
                    const ZC = gC.hb.items(CC, QC);
                    bC.requires.push({
                      items: SQ(CC, QC + gC.hb.BYTES, ZC, zC),
                      amt: gC.hb.amount(CC, QC)
                    }), QC += gC.hb.BYTES + 2 * ZC
                  }
                  wC.push(bC)
                }
                const bC = gC.mb.flags(CC, 0);
                if (null === ZC.recipe || 0 === (bC & gC.lb.Detail)) return {
                  focus: ZC,
                  recipes: wC,
                  detail: null
                };
                const nC = {},
                  fC = {};
                for (let FC = gC.mb.ingredients(CC, 0); FC > 0; FC--) {
                  const ZC = gC.$.item(CC, QC),
                    wC = gC.$.from(CC, QC),
                    bC = gC.$.amount(CC, QC);
                  QC += gC.$.BYTES;
                  const oC = wC === gC.L ? null : SQ(CC, QC, wC, zC);
                  if (null !== oC && (QC += 2 * wC), 0 === ZC) continue;
                  const qC = zC.nameOfId(ZC);
                  nC[qC] = bC, null !== oC && (fC[qC] = oC)
                }
                const {
                  name: oC,
                  Vn: qC
                } = ZC.recipe;
                return {
                  focus: ZC,
                  recipes: wC,
                  detail: {
                    name: oC,
                    Vn: qC,
                    craftAllTimes: gC.mb.craftAllTimes(CC, 0),
                    roomForOne: 0 !== (bC & gC.lb.RoomForOne),
                    resultStackable: Boolean(zC.getItemStat(oC, "stackable")),
                    amounts: nC,
                    ingredientsCraftedFrom: fC
                  }
                }
              }(oC, zC, ZC), QC
            },
            setFocus(CC) {
              ZC = CC;
              for (const zC of [...bC]) zC()
            },
            watchFocus: CC => (bC.add(CC), () => {
              bC.delete(CC)
            })
          }
        }(CC, zC);
      return {
        states: {
          inventory: oQ(CC, (() => {
            const ZC = CC.length;
            if (0 === ZC) return bQ;
            const QC = [];
            for (let zC = 0; zC < gC.Nd; zC++) QC.push(qQ(CC.slot(zC)));
            const wC = CC.slotIcon,
              bC = QC[CC.selectedSlot];
            0 !== wC && bC && (QC[CC.selectedSlot] = {
              ...bC,
              icon: zC.nameOfId(wC)
            });
            const nC = !0 === zC.getClientOption("creative");
            let fC = [],
              oC = null;
            if (ZC > gC.Nd) {
              for (let zC = gC.Nd; zC < ZC; zC++) fC.push(qQ(CC.slot(zC)));
              oC = {
                type: null,
                pos: [...CC.hQ],
                numSlots: ZC - gC.Nd,
                ironChest: null
              }
            } else nC && (fC = WQ(zC));
            return {
              player: QC,
              chestOrCreative: fC,
              chest: oC,
              creative: nC,
              selectedSlot: CC.selectedSlot,
              freeSlots: CC.freeSlots()
            }
          }), (0, CQ.j)("creative")),
          hotbar: oQ(CC, (() => {
            if (0 === CC.length) return nQ;
            const zC = [];
            for (let CC = 0; CC < wQ; CC++) zC.push(bC(CC));
            return {
              items: zC,
              ammo: CC.amountOf("Ammo"),
              selectedSlot: CC.selectedSlot
            }
          }), (0, CQ.i)("DisplayName", "GunStats")),
          crafting: oQ(CC, fC.read, null, fC.watchFocus),
          heldItemAim: oQ(CC, (() => {
            var zC;
            if (!ZC()) return fQ;
            const QC = null === (zC = CC.vq()) || void 0 === zC ? void 0 : zC.typeObj,
              wC = "Gun" === (null === QC || void 0 === QC ? void 0 : QC.type);
            return {
              gun: wC,
              aimable: wC || !0 === (null === QC || void 0 === QC ? void 0 : QC.showsAimingUi),
              chargeName: "Chargeable" === (null === QC || void 0 === QC ? void 0 : QC.type) ? QC.name : null
            }
          }), null, (CC => function(CC, zC) {
            let ZC = CC();
            return (0, QQ.r)((() => {
              const QC = CC();
              QC !== ZC && (ZC = QC, zC(QC))
            }))
          }(ZC, CC)))
        },
        events: {
          hotbarSlotRequested: (0, CQ.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, CQ.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, CQ.c)("numkeyPressed"),
          inventoryDropRequested: (0, CQ.c)("DropInvenItem"),
          chestToggled: (0, CQ.c)("chestToggleFromServer"),
          chestRefreshed: (0, CQ.c)("chestRefreshedFromServer", gQ),
          inventorySynced: (0, CQ.c)("syncedInvenFromServer", gQ),
          enchantingTableOpened: (0, CQ.c)("enchantingTable", (CC => {
            let {
              position: ZC,
              SF: QC
            } = CC;
            return {
              position: [...ZC],
              blockName: zC.getMetaInfo(QC).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(zC) {
            CC.selectSlot(zC), CC.flush(QC)
          },
          removeInventoryItem(zC) {
            let {
              slot: ZC,
              amount: QC,
              drop: bC
            } = zC;
            return wC(CC.remove(ZC, QC, bC))
          },
          swapInventorySlots(zC) {
            let {
              a: ZC,
              b: QC
            } = zC;
            return wC(CC.swap(ZC, QC))
          },
          moveInventoryItem(zC) {
            let {
              from: ZC,
              to: QC,
              amount: bC
            } = zC;
            return wC(CC.move(ZC, QC, bC))
          },
          quickMoveInventoryItem(zC) {
            let {
              slot: ZC,
              start: QC,
              end: bC,
              amount: nC
            } = zC;
            return wC(CC.quickMove(ZC, QC, bC, nC))
          },
          closeChest() {
            CC.closeChest(), CC.flush(QC), nC.o.bp("chestClosedByPlayer")
          },
          focusCrafting(CC) {
            fC.setFocus(CC)
          },
          craftRecipe(zC) {
            let {
              name: ZC,
              Vn: QC,
              times: bC
            } = zC;
            return wC(CC.craft(ZC, QC, bC))
          },
          salvageItem(zC) {
            let {
              slot: ZC,
              name: QC,
              amount: bC
            } = zC;
            return wC(CC.salvage(ZC, QC, bC))
          },
          enchantItem(zC) {
            let {
              slot: ZC,
              level: QC,
              tablePos: wC
            } = zC;
            CC.enchant(ZC, QC, wC)
          }
        },
        queries: {
          enchantingOffer(ZC) {
            let {
              slot: QC,
              blockName: wC
            } = ZC;
            return function(CC, zC, ZC, QC) {
              const wC = CC.slot(ZC);
              if (!wC || !zC.getClientOption("canCraft") || !(0, VZ.t)(QC) || (0, VZ.p)(wC.attributes)) return MQ;
              const bC = (0, ZQ.enchantmentPerksOf)(zC.getItemId(wC.name));
              if (0 === bC.length) return MQ;
              const nC = [];
              for (let fC = 0; fC < zQ.c; fC++) {
                const {
                  commonProb: CC,
                  uncommonProb: zC,
                  rareProb: ZC,
                  epicProb: wC,
                  legendaryProb: bC,
                  level: oC
                } = (0, VZ.h)(QC, fC);
                nC.push({
                  level: oC,
                  odds: [CC, zC, ZC, wC, bC].map((CC => 100 * CC))
                })
              }
              return {
                perks: [...bC],
                options: nC
              }
            }(CC, zC, QC, wC)
          }
        }
      }
    }
    const MQ = Object.freeze({
      perks: [],
      options: []
    });

    function gQ() {
      return null
    }

    function SQ(CC, zC, ZC, QC) {
      const wC = [];
      for (let bC = 0; bC < ZC; bC++) {
        const ZC = CC.getUint16(zC + 2 * bC, !0);
        0 !== ZC && wC.push(QC.nameOfId(ZC))
      }
      return wC
    }
    class pQ {
      constructor(CC) {
        this.api = CC, this.positions = new Map, this.targeted = {
          HV: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          wp: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(CC) {
        let zC = this.positions.get(CC);
        return zC || (this.api.checkValid(CC) || this.api.isLocal(CC) ? (zC = [NaN, NaN, NaN], this.api.readPosition(CC, zC), this.positions.set(CC, zC), zC) : null)
      }
      pCC() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [zC, ZC] of this.positions) this.api.readPosition(zC, ZC) || this.api.checkValid(zC) || this.api.isLocal(zC) || this.positions.delete(zC);
        const CC = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (gC.w.playerFlags(CC, 0) & gC.ce.Breaking) && gC.w.breakingProgress(CC, 0) >= 0, this.isBreaking)
          for (let zC = 0; zC < 3; zC++) this.breaking[zC] = gC.w.breakingPos(CC, 0, zC)
      }
      refreshTarget() {
        const CC = this.api.apiView,
          zC = gC.w.targetBlockId(CC, 0);
        if (this.hasTarget = zC !== gC.rd, this.hasTarget) {
          const ZC = this.targeted;
          ZC.HV = zC;
          for (let zC = 0; zC < 3; zC++) ZC.position[zC] = gC.w.targetBlock(CC, 0, zC), ZC.normal[zC] = gC.w.targetNormal(CC, 0, zC), ZC.wp[zC] = gC.w.targetAdjacent(CC, 0, zC)
        }
      }
      despawned(CC) {
        const zC = this.positions.get(CC);
        zC && !this.api.isLocal(CC) && (zC.fill(NaN), this.positions.delete(CC))
      }
    }
    var PQ = ZC(40465),
      GQ = ZC(40446),
      RQ = ZC(36673);
    const AQ = 1,
      xQ = 2;
    class JQ {
      constructor() {
        this.game = new RQ.f, this.client = new RQ.f, this.vq = 0, this.movesFly = null
      }
      setGame(CC) {
        if (null === CC || "object" !== typeof CC) return !1;
        const {
          key: zC,
          value: ZC
        } = CC;
        return "string" === typeof zC && (this.game.setBooleanType(zC, Boolean(ZC)), !0)
      }
      setClient(CC, zC) {
        this.client.setBooleanType(CC, zC)
      }
      clearGame() {
        this.game = new RQ.f, this.movesFly = null
      }
      setMovesFly(CC) {
        this.movesFly = CC
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? AQ : 0) | (this.client._getTotalBooleanVal() ? xQ : 0)
      }
      write(CC) {
        const zC = this.perms(),
          {
            movesFly: ZC
          } = this;
        if (zC === this.vq && null === ZC) return !0;
        let QC = gC.dc.Keep;
        return null !== ZC && (QC = ZC ? gC.dc.On : gC.dc.Off), !(!CC || !(0, gC.Pe)(CC, 0, QC, zC, ZC ? 1 : 0)) && (this.vq = zC, this.movesFly = null, !0)
      }
    }
    class IQ {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = CC, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: fC.c,
          get y() {
            return zC()
          }
        }
      }
      get hasView() {
        const CC = this.api.apiView,
          zC = gC.w.viewProj;
        return 0 !== zC(CC, 0, 3) || 0 !== zC(CC, 0, 7) || 0 !== zC(CC, 0, 11) || 0 !== zC(CC, 0, 15)
      }
      get cameraPosition() {
        const CC = this.api.apiView,
          {
            eye: zC
          } = this;
        for (let ZC = 0; ZC < 3; ZC++) zC[ZC] = gC.w.eye(CC, 0, ZC);
        return zC
      }
      get cameraDirection() {
        const CC = this.api.apiView,
          zC = gC.w.viewProj,
          ZC = zC(CC, 0, 3),
          QC = zC(CC, 0, 7),
          wC = zC(CC, 0, 11),
          bC = Math.hypot(ZC, QC, wC),
          {
            forward: nC
          } = this;
        return bC > 0 && (nC[0] = ZC / bC, nC[1] = QC / bC, nC[2] = wC / bC), nC
      }
      get cameraHeading() {
        return gC.w.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return gC.w.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return gC.w.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return gC.w.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(CC) {
        this.clip(CC);
        const {
          clipX: zC,
          clipY: ZC,
          clipW: QC
        } = this;
        if (QC > 0) {
          const CC = zC / QC * 50,
            wC = -ZC / QC * 50;
          return Math.abs(CC) <= this.screenBandPct.x && Math.abs(wC) <= this.screenBandPct.y ? {
            x: 50 + CC,
            y: 50 + wC
          } : this.clampToBand(CC, wC)
        }
        const wC = this.cameraPosition,
          bC = Math.hypot(CC[0] - wC[0], CC[1] - wC[1], CC[2] - wC[2]),
          nC = this.api.apiView,
          fC = gC.w.viewProj,
          oC = bC > 0 ? zC / bC : 0,
          qC = bC > 0 ? -ZC / bC : 0,
          FC = Math.hypot(fC(nC, 0, 1), fC(nC, 0, 5), fC(nC, 0, 9)),
          WC = oC / Math.hypot(fC(nC, 0, 0), fC(nC, 0, 4), fC(nC, 0, 8)),
          NC = qC / FC,
          MC = !(Math.abs(WC) >= .001 || Math.abs(NC) >= .001);
        return this.clampToBand(oC, MC ? -(FC || 1) : qC)
      }
      projectDirectionToScreenPos(CC) {
        if (!this.hasView) return;
        const zC = this.cameraPosition,
          ZC = this.along;
        for (let QC = 0; QC < 3; QC++) ZC[QC] = zC[QC] + 10 * CC[QC];
        return this.projectWorldPosToScreenPos(ZC)
      }
      projectWorldPosToViewport(CC) {
        this.clip(CC);
        const {
          clipX: zC,
          clipY: ZC,
          clipW: QC
        } = this;
        return QC > 0 ? {
          x: 50 + zC / QC * 50,
          y: 50 - ZC / QC * 50
        } : null
      }
      clip(CC) {
        const zC = this.api.apiView,
          ZC = CC[0] - gC.w.origin(zC, 0, 0),
          QC = CC[1] - gC.w.origin(zC, 0, 1),
          wC = CC[2] - gC.w.origin(zC, 0, 2),
          bC = gC.w.viewProj;
        this.clipX = bC(zC, 0, 0) * ZC + bC(zC, 0, 4) * QC + bC(zC, 0, 8) * wC + bC(zC, 0, 12), this.clipY = bC(zC, 0, 1) * ZC + bC(zC, 0, 5) * QC + bC(zC, 0, 9) * wC + bC(zC, 0, 13), this.clipW = bC(zC, 0, 3) * ZC + bC(zC, 0, 7) * QC + bC(zC, 0, 11) * wC + bC(zC, 0, 15)
      }
      clampToBand(CC, zC) {
        return (0, fC.f)(CC, zC, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var iQ = ZC(4745);
    const vQ = new TextEncoder,
      eQ = new Uint8Array(gC.R * gC.Q);
    class hQ {
      constructor() {
        this.buttons = [], this.vq = !0
      }
      set(CC) {
        this.buttons = CC, this.vq = !1
      }
      attached() {
        this.vq = 0 === this.buttons.length
      }
      write(CC) {
        if (this.vq) return;
        const zC = new Uint8Array(gC.R),
          ZC = new Uint8Array(gC.R);
        let QC = 0,
          wC = 0;
        for (const {
            id: bC,
            keycode: nC
          }
          of this.buttons) {
          if (QC === gC.R) break;
          const {
            read: CC,
            written: fC
          } = vQ.encodeInto(bC, eQ.subarray(wC, wC + gC.Q));
          if (CC < bC.length) continue;
          const oC = iQ.g[nC];
          zC[QC] = "number" === typeof oC ? oC : 0, ZC[QC] = fC, QC++, wC += fC
        }
        this.vq = (0, gC.Be)(CC, 0, QC, zC, ZC, eQ.subarray(0, wC))
      }
    }

    function KQ(CC, zC, ZC) {
      const QC = vQ.encode(zC);
      return QC.length <= gC.Q && function(CC, zC, ZC, QC) {
        return (0, Dz.b)(), (0, gC.Hf)(CC, zC, ZC, QC)
      }(CC, 0, ZC ? 1 : 0, QC)
    }
    const YQ = new TextDecoder,
      dQ = new TextEncoder,
      mQ = new Uint8Array(0),
      HQ = [0, 0, 0],
      EQ = {
        off: gC.fe.Off,
        key: gC.fe.Key,
        touch: gC.fe.Touch
      };
    class lQ {
      constructor(CC) {
        var zC;
        this.options = CC, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new hQ, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new JQ, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Cg = CC => {
          if ((0, MC.e)(CC)) throw CC;
          this.onError(CC)
        }, this.api = CC.api, this.tables = CC.tables, this.onError = null !== (zC = CC.onError) && void 0 !== zC ? zC : CC => {
          console.error("Error in client game callback", CC)
        }, this.renderFrame = new IQ(this.api, CC.screenBandY), this.live = new pQ(this.api), this.chunks = new fz(this.api.memory, (() => this.api.apiView)), this.items = new PZ({
          api: this.api,
          tables: CC.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: CC.beforeOp
        });
        const ZC = () => this.stopped() ? null : this.cmd,
          QC = () => this.sessionLive;
        this.entityInfoWatch = new DZ({
          cmd: ZC,
          onError: this.onError
        }), this.entityInfo = new jZ({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: QC
        }), this.particles = new EZ({
          cmd: ZC,
          isSessionLive: QC,
          onError: this.onError
        }), this.clientApi = new oZ({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: CC.tables,
          cmd: ZC,
          sendCmd: () => this.sendCmd(),
          isSessionLive: QC,
          beforeWrite: () => {
            var zC;
            if (this.stopped()) return !1;
            const ZC = this.generation;
            return !1 !== (null === (zC = CC.beforeWrite) || void 0 === zC ? void 0 : zC.call(CC)) && ZC === this.generation
          },
          playerDbId: () => {
            const CC = this.session;
            if (null === CC) throw new Error("No game session has started, so the local player has no DB id");
            return CC.playerDbId
          },
          playSound: CC.playSound,
          preloadSounds: CC.preloadSounds,
          setLocalOptions: CC.setLocalOptions,
          hasPackModel: CC.hasPackModel
        }), this.scriptedCamera = new yC({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: CC.cameraScreen,
          showFacing: CC.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= NQ(this.items, this.tables, (() => this.localPlayerAlive()), this.Cg), this.itemSources
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
      clickCodeBlock(CC) {
        const zC = this.sessionLive ? this.sendCmd() : null;
        return null !== zC && (ZC = zC, QC = 0, wC = CC[0], bC = CC[1], nC = CC[2], (0, Dz.b)(), (0, gC.He)(ZC, QC, wC, bC, nC));
        var ZC, QC, wC, bC, nC
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(CC) {
        const zC = this.liveCmd();
        return null === zC ? (this.pendingZoom = CC, !1) : (this.pendingZoom = null, (0, gC.ug)(zC, 0, CC, 1))
      }
      qY(CC) {
        const zC = this.stopped() ? null : this.cmd;
        return null !== zC && (0, gC.og)(zC, 0, CC ? 1 : 0)
      }
      respawn() {
        const CC = this.sessionLive ? this.sendCmd() : null;
        return null !== CC && (zC = CC, ZC = 0, (0, Dz.b)(), (0, gC.Pf)(zC, ZC));
        var zC, ZC
      }
      bindCustomButtonKeys(CC) {
        this.customButtons.set(CC)
      }
      pressCustomButton(CC, zC) {
        const ZC = this.sessionLive ? this.sendCmd() : null;
        return null !== ZC && KQ(ZC, CC, zC)
      }
      padMove(CC, zC, ZC, QC, wC, bC) {
        const nC = this.liveCmd();
        return null !== nC && (0, gC.rf)(nC, 0, CC, zC, ZC, QC, wC, bC)
      }
      thirdPersonFor(CC) {
        const zC = this.liveCmd();
        return null !== zC && (0, gC.zg)(zC, 0, null !== CC && void 0 !== CC ? CC : 1 / 0)
      }
      send(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== QC && jz(QC, ZC ? NC.ld : 0, CC, (0, XC.f)(zC))
      }
      socketAttached(CC) {
        this.openSocket = CC, this.socketLeftSinceAttach = !1
      }
      socketDetached(CC) {
        this.openSocket === CC && (this.openSocket = 0)
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
      attach(CC) {
        const zC = () => CC.isStopped;
        this.stopped = zC, this.cmd = CC.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const ZC = this.api.apiView;
        this.overflowGen = gC.w.eventOverflowGen(ZC, 0), this.resyncOwed = 0 !== gC.w.eventOverflowMask(ZC, 0), CC.setGameHost(this), CC.setEventWalker((CC => {
          this.api.walk(CC, this, zC)
        }))
      }
      watchPromptPick(CC) {
        this.promptWatch = CC, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : XQ(gC.w.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? gC.Gc.None : gC.w.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : gC.w.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === CC || CC >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, CC, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(CC) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(CC)
      }
      netEvent(CC) {
        "connection" === CC.type ? CC.phase === NC.J.Activated && CC.conn !== this.activeConn && CC.conn > this.closedThrough ? (this.endSession(), this.activeConn = CC.conn, this.endGameGrants(), this.dropGameCamera()) : CC.phase !== NC.J.Left && CC.phase !== NC.J.Closed || CC.conn !== this.activeConn ? CC.phase === NC.J.Resumed && 0 !== this.activeConn && CC.conn > this.closedThrough && (this.activeConn = CC.conn) : this.closeGame() : CC.conn === this.activeConn && 0 !== CC.conn && (CC.cq === GQ.v ? this.gunHit(CC.payload) : CC.cq === yZ.Bc.EditItemCraftingRecipes || CC.cq === GQ.V ? this.items.touch() : (this.serverOptions(CC), this.gameMessage(CC)));
        const zC = this.options.onNetEvent;
        zC && this.guard((() => {
          zC(CC)
        }))
      }
      serverOptions(CC) {
        const zC = this.options.serverOptions,
          ZC = zC ? this.decoded(LZ, CC) : null;
        zC && ZC && this.guard((() => {
          zC.applyNewClientOptions(ZC)
        }))
      }
      gameMessage(CC) {
        let zC = null;
        try {
          zC = function(CC) {
            if ("message" !== CC.type || CC.cq !== yZ.Bc.GameCodeMessage || CC.payloadKind !== NC.hc.Msgpack) return null;
            const zC = (0, XC.c)(CC.payload);
            if (null === zC || "object" !== typeof zC || "string" !== typeof zC.messageType) throw new Error("GameCodeMessage without a messageType");
            return zC
          }(CC)
        } catch (ZC) {
          this.sessionLive && this.onError(ZC)
        }
        if (zC) {
          const {
            messageType: CC,
            data: ZC
          } = zC;
          if ((0, KC.e)(CC)) return void this.guard((() => {
            (0, KC.c)(CC, ZC)
          }));
          "freeCamPerms" === CC && this.freeCam.setGame(ZC) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (zC => {
            zC.onReceivedMessageFromServer(CC, ZC)
          }))
        }
      }
      decoded(CC, zC) {
        try {
          return CC(zC)
        } catch (ZC) {
          return this.onError(ZC), null
        }
      }
      setClientFreeCameraGrant(CC, zC) {
        this.freeCam.setClient(CC, zC), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(CC) {
        this.freeCam.setMovesFly(CC), this.writeFreeCam()
      }
      setBlockHighlight(CC) {
        this.highlight = CC, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const CC = this.liveCmd();
        if (null === CC || !this.highlightOwed) return;
        const zC = this.highlight;
        this.highlightOwed = null === zC ? !(0, gC.$e)(CC, 0, HQ, HQ, 0) : !(0, gC.$e)(CC, 0, zC.pos, zC.normal, 1)
      }
      localPlayerBound(CC) {
        var zC, ZC;
        if (0 === this.activeConn || this.sessionLive && CC === this.boundId) return;
        const QC = this.sessionLive;
        let wC, bC, nC, fC;
        this.endSession(), QC && this.restartGameCamera();
        try {
          var oC;
          this.session = null;
          const CC = this.options.sessionInfo(this.activeConn);
          if (this.session = CC, !CC) return;
          wC = CC.gameNameWithVariation, bC = null !== (oC = (0, eC.zb)(wC)) && void 0 !== oC ? oC : void 0, nC = (0, hC.B)(CC.lobbyName), fC = (0, hC.U)(CC.lobbyName)
        } catch (GC) {
          return void this.onError(GC)
        }
        const qC = {
          localPlayerId: String(CC)
        };
        let FC = {},
          WC = {};
        try {
          var NC, MC;
          FC = null !== (NC = null === (MC = this.options.gameFactory((0, eC.Cb)(wC))) || void 0 === MC ? void 0 : MC(fC, nC, bC, qC)) && void 0 !== NC ? NC : {}
        } catch (GC) {
          this.Cg(GC)
        }
        try {
          var gC, SC;
          WC = {
            ...null === (gC = (SC = this.options).defaultPlugins) || void 0 === gC ? void 0 : gC.call(SC, fC, nC, bC, qC),
            ...FC.plugins
          }
        } catch (GC) {
          this.Cg(GC)
        }
        const pC = [FC, ...Object.values(WC)];
        this.owners = pC, this.tickers = pC.filter((CC => void 0 !== CC.ZN)), this.renderers = pC.filter((CC => void 0 !== CC.onAfterRender)), this.receivers = pC.filter((CC => void 0 !== CC.onReceivedMessageFromServer)), this.writeAltVeto(pC), this.writeHooks(pC), this.writePublicLobby(fC), this.writeLocalDbId(null !== (zC = null === (ZC = this.session) || void 0 === ZC ? void 0 : ZC.playerDbId) && void 0 !== zC ? zC : null), this.boundId = CC, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(pC, (CC => {
          var zC;
          null === (zC = CC.onCreate) || void 0 === zC || zC.call(CC, this.clientApi)
        }));
        const PC = this.generation;
        setTimeout((() => {
          PC === this.generation && !0 === this.tables.getClientOption("creative") && WQ(this.tables)
        }), 0)
      }
      chunkSlot(CC, zC, ZC, QC, wC, bC) {
        this.chunks.apply(CC, zC, ZC, QC, wC, bC)
      }
      entityAdded(CC) {
        var zC;
        this.entityInfo.stale(CC), null === (zC = this.options.replayEntities) || void 0 === zC || zC.entityAdded(CC)
      }
      entityInfoChanged(CC) {
        var zC;
        this.entityInfo.stale(CC), null === (zC = this.options.replayEntities) || void 0 === zC || zC.entityInfoChanged(CC)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const CC = performance.now();
          this.round(this.tickers, cQ), (0, QQ.b)(performance.now() - CC)
        }
      }
      afterWalk(CC) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const zC = this.options.replayEntities;
        zC && this.guard((() => {
          this.entityInfoWatch.want(tZ, zC.wantsWatch), zC.flush(this.entityInfoWatch.on)
        }));
        const ZC = (0, QQ.j)(CC, gC.w.frameMs(this.api.apiView, 0));
        if (null !== ZC) {
          const CC = this.renderFrame;
          this.guard((() => {
            (0, BZ.c)().turnDamageIndicators(CC.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(ZC)
          })), this.round(this.renderers, (zC => {
            zC.onAfterRender(ZC, CC)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== ZC)
        } catch (wC) {
          this.Cg(wC)
        }
        this.showZoom(), this.items.flush(this.Cg), this.writePromptWatch(), this.writeCustomButtons();
        const QC = this.ticks;
        this.ticks = 0, (0, QQ.h)(QC, CC, ZC, this.Cg)
      }
      entityRemoved(CC) {
        this.live.despawned(CC), this.entityInfo.removed(CC)
      }
      ackEventOverflow() {
        const CC = this.api.apiView,
          zC = gC.w.eventOverflowGen(CC, 0),
          ZC = zC - this.overflowGen >>> 0;
        if (0 === ZC && !this.resyncOwed) return;
        this.overflowGen = zC;
        const QC = gC.w.eventOverflowMask(CC, 0),
          wC = this.cmd;
        0 === QC || null === wC || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, gC.Le)(wC, 0, QC);
        const bC = this.options.onEventOverflow;
        0 !== ZC && bC && this.guard((() => {
          bC(QC, ZC)
        }))
      }
      gameCall(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        if (CC === gC.rc.Director) try {
          return this.scriptedCamera.call(zC, ZC, QC, wC, bC, nC)
        } catch (qC) {
          return this.Cg(qC), gC.qb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return CC === gC.rc.AltVeto ? gC.j.Allow : 0;
        try {
          return this.callGames(CC, zC, ZC, QC, wC, bC, nC, fC)
        } catch (qC) {
          throw (0, MC.e)(qC) && (this.fault = qC), qC
        }
      }
      takeFault() {
        const CC = this.fault;
        return this.fault = void 0, CC
      }
      callGames(CC, zC, ZC, QC, wC, bC, nC, fC) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: oC
        } = this.options, qC = String(this.boundId);
        switch (CC) {
          case gC.rc.AltVeto:
          case gC.rc.AltAction: {
            const fC = 0 !== nC,
              [FC, WC, NC] = fC ? [zC, ZC, QC] : [void 0, void 0, void 0],
              MC = fC ? oC.nameOfId(wC) : "Air",
              SC = XQ(bC);
            if (CC === gC.rc.AltAction) return this.first((CC => {
              var zC;
              return null === (zC = CC.onPlayerAltAction) || void 0 === zC ? void 0 : zC.call(CC, qC, FC, WC, NC, MC, SC)
            })), 0;
            const pC = this.first((CC => {
              var zC;
              return null === (zC = CC.onPlayerAttemptAltAction) || void 0 === zC ? void 0 : zC.call(CC, qC, FC, WC, NC, MC, SC)
            }));
            return "preventAction" === pC ? gC.j.Prevent : "preventPlacement" === pC ? gC.j.PreventPlacement : gC.j.Allow
          }
          case gC.rc.Click: {
            const CC = fC,
              FC = 0 !== (CC & gC.W.Alt),
              WC = 0 !== (CC & gC.W.HasPos),
              NC = WC ? oC.nameOfId(wC) : "Air",
              [MC, SC, pC] = WC ? [zC, ZC, QC] : [null, null, null],
              PC = XQ(bC),
              GC = 0 !== (CC & gC.W.Up),
              RC = XQ(nC);
            if (0 === (CC & gC.W.AttackOnly) && this.first((CC => {
                var zC, ZC;
                return GC ? null === (zC = CC.onPlayerClickUp) || void 0 === zC ? void 0 : zC.call(CC, qC, FC, MC, SC, pC, NC, PC) : null === (ZC = CC.onPlayerClick) || void 0 === ZC ? void 0 : ZC.call(CC, qC, FC, MC, SC, pC, NC, PC)
              })), !GC && !FC && null !== RC) {
              const CC = this.clientApi.getPositionView(RC),
                zC = CC ? [CC[0], CC[1], CC[2]] : [0, 0, 0];
              this.first((CC => {
                var ZC;
                return null === (ZC = CC.onPlayerAttackEntity) || void 0 === ZC ? void 0 : ZC.call(CC, qC, RC, zC)
              }))
            }
            return 0
          }
          case gC.rc.ChangeBlock: {
            const CC = oC.nameOfId(wC),
              nC = oC.nameOfId(bC);
            return this.first((wC => {
              var bC;
              return null === (bC = wC.onPlayerChangeBlock) || void 0 === bC ? void 0 : bC.call(wC, qC, zC, ZC, QC, CC, nC)
            })), 0
          }
          case gC.rc.DropItem: {
            const CC = oC.nameOfId(zC);
            return this.first((zC => {
              var wC;
              return null === (wC = zC.onPlayerDropItem) || void 0 === wC ? void 0 : wC.call(zC, qC, CC, ZC, QC)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${CC}`)), 0
        }
      }
      changeBlockFail(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = wC === gC.nd ? null : YQ.decode(this.api.eventBytes(bC, Math.min(wC, nC)));
        this.failures.push({
          Xb: [CC, zC, ZC],
          cb: QC,
          ub: fC
        })
      }
      changeBlockFailEnd() {
        const CC = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (zC => {
          var ZC;
          null === (ZC = zC.onChangeBlockFail) || void 0 === ZC || ZC.call(zC, CC)
        })), this.bp("EditBoard", {
          pos: null
        }), this.bp("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(CC, zC, ZC, QC, wC, bC) {
        CC === gC.Oc.ChestOpened ? this.items.chestOpened(ZC, QC, wC) : CC !== gC.Oc.Synced && CC !== gC.Oc.ChestClosed && CC !== gC.Oc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(CC, zC, ZC, QC) {
            switch (CC) {
              case gC.Oc.Synced:
                nC.o.bp("syncedInvenFromServer");
                break;
              case gC.Oc.ChestOpened:
              case gC.Oc.ChestClosed:
                nC.o.bp("chestToggleFromServer", CC === gC.Oc.ChestOpened, !0);
                break;
              case gC.Oc.ChestRefreshed:
                nC.o.bp("chestRefreshedFromServer");
                break;
              case gC.Oc.EnchantingTable:
                nC.o.bp("enchantingTable", {
                  SF: QC,
                  position: ZC
                });
                break;
              case gC.Oc.HotbarRequest:
                nC.o.bp("setSelectedInventorySlotI", zC, !0);
                break;
              case gC.Oc.Scrolled:
                nC.o.bp("ScrollInventorySlot", zC);
                break;
              case gC.Oc.NumberKey:
                nC.o.bp("numkeyPressed", zC + 1);
                break;
              case gC.Oc.DropRequested:
                nC.o.bp("DropInvenItem", 0 !== zC);
                break;
              default:
                throw new MC.b(`InventoryEvent of no kind: what ${CC}`)
            }
          }(CC, zC, [ZC, QC, wC], bC)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(CC, zC, ZC, QC) {
        this.bp("shotPlayer", {
          playerId: String(CC),
          damage: zC,
          wasCrit: 0 !== QC,
          distance: ZC
        })
      }
      localHurt(CC, zC) {
        this.bp("closeShopOnDamaged", null), this.guard((() => {
          nC.o.bp("damagedByOtherPlayer", {
            UC: null,
            direction: Number.isNaN(zC) ? null : zC,
            Hb: CC
          })
        }))
      }
      attackHit(CC, zC, ZC, QC, wC) {
        this.guard((() => {
          nC.o.bp("yourAttackHit", {
            RQ: QC,
            screenPos: this.renderFrame.projectDirectionToScreenPos([CC, zC, ZC]),
            hitSelf: wC
          })
        }))
      }
      physicsType(CC) {
        this.bp("PlayerPhysicsTypeUpdate", CC)
      }
      vehicleEffect(CC, zC, ZC, QC, wC) {
        this.guard((() => {
          CC === NC.Cd.UPDATE ? (0, dC.k)(zC, {
            icon: ZC,
            level: QC,
            displayName: null,
            durationMs: wC
          }) : YC.c.remove(zC)
        }))
      }
      zoomChanged(CC) {
        this.zoom = CC, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.bp("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const CC = this.scriptedCamera.holdsView();
        !this.zoomUnshown || CC && this.zoomHeld || (this.zoomUnshown = !1, this.bp("cameraZoomSet", this.zoom)), this.zoomHeld = CC
      }
      gunHit(CC) {
        this.guard((() => {
          const {
            UC: zC,
            BC: ZC
          } = (0, PQ.e)(GQ.v, CC);
          nC.o.bp("damagedByOtherPlayer", {
            UC: zC,
            direction: ZC
          })
        }))
      }
      uiEvent(CC, zC, ZC, QC, wC, bC, nC, fC) {
        this.guard((() => {
          OZ(CC, zC, [ZC, QC, wC], bC, this.items, this.options.tables, (() => YQ.decode(this.api.eventBytes(nC, fC))))
        }))
      }
      writeAltVeto(CC) {
        const zC = this.cmd;
        if (!zC) return;
        let ZC;
        try {
          ZC = function(CC, zC) {
            const ZC = new Set;
            let QC = !1;
            for (const wC of CC)
              if (wC.onPlayerAttemptAltAction) {
                if (QC = !0, !wC.altVetoBlocks) return {
                  mode: gC.ue.All,
                  roots: []
                };
                for (const CC of wC.altVetoBlocks) ZC.add(zC.getMetaInfo(CC).rootId)
              } return QC ? ZC.size > gC._c ? {
              mode: gC.ue.All,
              roots: []
            } : {
              mode: gC.ue.Filter,
              roots: [...ZC]
            } : {
              mode: gC.ue.Off,
              roots: []
            }
          }(CC, this.options.tables)
        } catch (wC) {
          this.onError(wC), ZC = {
            mode: gC.ue.All,
            roots: []
          }
        }
        if (ZC.mode === gC.ue.Off && !this.vetoSet) return;
        const QC = new Uint8Array(new Uint32Array(ZC.roots).buffer);
        (0, gC.Wf)(zC, 0, ZC.mode, ZC.roots.length, QC) ? this.vetoSet = ZC.mode !== gC.ue.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(CC) {
        const zC = this.cmd;
        if (!zC) return;
        const ZC = function(CC) {
          let zC = 0;
          for (const ZC of CC) ZC.onPlayerAltAction && (zC |= 1 << gC.rc.AltAction), (ZC.onPlayerClick || ZC.onPlayerClickUp || ZC.onPlayerAttackEntity) && (zC |= 1 << gC.rc.Click), ZC.onPlayerChangeBlock && (zC |= 1 << gC.rc.ChangeBlock), ZC.onPlayerDropItem && (zC |= 1 << gC.rc.DropItem);
          return zC
        }(CC);
        (0 !== ZC || this.hooksSet) && ((0, gC.fg)(zC, 0, ZC) ? this.hooksSet = 0 !== ZC : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const CC = this.cmd;
        CC && !this.stopped() && this.customButtons.write(CC)
      }
      writePromptWatch() {
        const CC = this.cmd,
          zC = this.promptWatch;
        zC !== this.promptWatchSent && CC && !this.stopped() && (0, gC.Eg)(CC, 0, EQ[zC]) && (this.promptWatchSent = zC)
      }
      writePublicLobby(CC) {
        const zC = this.cmd;
        zC && CC !== this.writtenPublicLobby && ((0, gC.sg)(zC, 0, CC ? 1 : 0) ? this.writtenPublicLobby = CC : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(CC) {
        const zC = this.cmd;
        zC && ((0, gC.hg)(zC, 0, null === CC ? 0 : 1, null === CC ? mQ : dQ.encode(CC)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(CC) {
        const zC = this.generation;
        for (const QC of this.owners) {
          if (zC !== this.generation) break;
          try {
            const zC = CC(QC);
            if (void 0 !== zC) return zC
          } catch (ZC) {
            this.Cg(ZC)
          }
        }
      }
      bp(CC, zC) {
        this.guard((() => {
          nC.o.bp(CC, zC)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (CC) {
          this.Cg(CC)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (CC) {
          this.Cg(CC)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const CC = this.owners;
        let zC;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (QC) {
          zC = QC
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (QC) {
          zC ??= QC
        }
        this.round(CC, uQ, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (QC) {
          zC ??= QC
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (QC) {
          zC ??= QC
        }
        const ZC = this.options.onSessionEnd;
        if (ZC) try {
          ZC()
        } catch (QC) {
          this.onError(QC)
        }
        void 0 !== zC && this.Cg(zC)
      }
      round(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = this.generation;
        for (const bC of CC) {
          if (QC !== this.generation) break;
          try {
            zC(bC)
          } catch (wC) {
            ZC ? this.onError(wC) : this.Cg(wC)
          }
        }
      }
      guard(CC) {
        try {
          CC()
        } catch (zC) {
          this.Cg(zC)
        }
      }
    }

    function XQ(CC) {
      return CC === gC.od ? null : String(CC)
    }

    function cQ(CC) {
      CC.ZN(NC.td)
    }

    function uQ(CC) {
      var zC;
      null === (zC = CC.onClose) || void 0 === zC || zC.call(CC)
    }

    function rQ(CC, zC) {
      CC.watch((() => {
        const ZC = function(CC) {
          const zC = [],
            ZC = Math.min(wQ, CC.length);
          for (let wC = 0; wC < ZC; wC++) {
            var QC;
            const ZC = null === (QC = CC.slot(wC)) || void 0 === QC ? void 0 : QC.typeObj,
              bC = ZC ? (0, ZQ.gunTypeOf)(ZC.id) : void 0;
            void 0 !== bC && zC.push(Rz[bC])
          }
          return zC
        }(CC);
        ZC.length > 0 && (zC.preload(ZC), zC.preload([Az]))
      }))
    }
    var sQ = ZC(36318),
      TQ = ZC(4797),
      aQ = ZC(36641),
      tQ = ZC(36659);

    function DQ(CC) {
      const zC = (0, sQ.countDecodesAs)(new TQ.Howl({
          ...(0, aQ.j)(CC),
          pool: 15,
          preload: !1
        }), "sheet"),
        ZC = zC.load.bind(zC);
      return zC.load = () => (zC._preload = !0, (0, tQ.d)(CC), ZC()), zC
    }

    function jQ(CC, zC, ZC) {
      const QC = CC.listener;
      if (QC.positionX) yQ(QC.positionX, zC, ZC, 0), yQ(QC.positionY, zC, ZC, 1), yQ(QC.positionZ, zC, ZC, 2), yQ(QC.forwardX, zC, ZC, 3), yQ(QC.forwardY, zC, ZC, 4), yQ(QC.forwardZ, zC, ZC, 5), yQ(QC.upX, zC, ZC, 6), yQ(QC.upY, zC, ZC, 7), yQ(QC.upZ, zC, ZC, 8);
      else {
        let CC = !1;
        for (let QC = 0; QC < 9; QC++) CC ||= zC[QC] !== ZC[QC];
        CC && (QC.setPosition(zC[0], zC[1], zC[2]), QC.setOrientation(zC[3], zC[4], zC[5], zC[6], zC[7], zC[8]), ZC.set(zC))
      }
    }

    function yQ(CC, zC, ZC, QC) {
      zC[QC] !== ZC[QC] && (CC.value = zC[QC], ZC[QC] = zC[QC])
    }
    class LQ {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(CC) {
        this.pose.set(CC);
        const zC = TQ.Howler.ctx;
        return !!zC && (zC !== this.watchedCtx && (this.watchedCtx = zC, this.written.fill(Number.NaN), zC.addEventListener("statechange", (() => {
          "running" === zC.state && jQ(zC, this.pose, this.written)
        }))), "running" === zC.state && jQ(zC, CC, this.written), !0)
      }
    }
    var UQ = ZC(36451),
      BQ = ZC(39042);
    let OQ = null,
      kQ = null;

    function VQ() {
      return null === OQ && (OQ = document.createElement("div"), OQ.className = "WasmCameraLayer", OQ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(OQ)), OQ
    }

    function Cw() {
      return kQ ??= new BQ.e(new UQ.d(VQ)), kQ
    }

    function zw() {
      var CC;
      null === (CC = kQ) || void 0 === CC || CC.clear(), Zw(null)
    }

    function Zw(CC) {
      QC.b.get("scriptedCameraFacing") !== CC && QC.b.set({
        scriptedCameraFacing: CC
      })
    }
    var Qw = ZC(9299),
      ww = ZC(9239),
      bw = ZC(39076),
      nw = ZC(40866),
      fw = ZC(3276);
    const ow = Object.entries(gC.oc).reduce(((CC, zC) => {
      let [ZC, QC] = zC;
      return CC[QC] = ZC, CC
    }), []);

    function qw(CC, zC) {
      var ZC;
      return 0 !== ((null !== (ZC = CC.itemFlags[zC]) && void 0 !== ZC ? ZC : 0) & gC.Rc.Stackable)
    }
    const Fw = /^(0|[1-9][0-9]*)$/,
      Ww = {
        displayName: (CC, zC) => (0, ZQ.displayNameOf)(zC),
        description: (CC, zC) => (0, ZQ.descriptionOf)(zC),
        type: (CC, zC) => (0, ZQ.itemTypeOf)(zC),
        clipSize: (CC, zC) => (0, ZQ.clipSizeOf)(zC),
        armourReduction: (CC, zC) => (0, ZQ.armourReductionOf)(zC),
        scopeType: (CC, zC) => (0, ZQ.scopeTypeOf)(zC),
        stackable: qw,
        harvestType: (CC, zC) => ow[CC.blockHarvestTypes[zC]],
        harvestLevel: (CC, zC) => {
          const ZC = CC.blockHarvestLevels[zC];
          return ZC === gC.Wc ? void 0 : ZC
        },
        harvests: (CC, zC) => {
          var ZC;
          const QC = null !== (ZC = CC.itemHarvests[zC]) && void 0 !== ZC ? ZC : 0;
          return 0 !== QC ? ow[QC] : void 0 === (0, ZQ.harvestsNullLevelOf)(zC) ? void 0 : null
        },
        level: (CC, zC) => {
          var ZC, QC;
          const wC = null !== (ZC = CC.itemLevels[zC]) && void 0 !== ZC ? ZC : gC.Wc;
          return wC !== gC.Wc ? wC : null !== (QC = (0, ZQ.harvestsNullLevelOf)(zC)) && void 0 !== QC ? QC : void 0
        }
      };

    function Nw(CC, zC, ZC) {
      return gw(new Uint8Array(Math.floor(CC.length / zC)), CC, zC, ZC)
    }

    function Mw(CC, zC, ZC) {
      return gw(new Uint16Array(Math.floor(CC.length / zC)), CC, zC, ZC)
    }

    function gw(CC, zC, ZC, QC) {
      const wC = new DataView(zC.buffer, zC.byteOffset, zC.byteLength);
      for (let bC = 0; bC < CC.length; bC++) CC[bC] = QC(wC, bC * ZC);
      return CC
    }
    class Sw {
      constructor(CC, zC) {
        this.options = zC, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = CC => {
          const zC = this.idOf(CC);
          if (void 0 === zC) throw new Error(`No item is named ${CC}, an item's root`);
          return zC
        };
        const ZC = zC => {
            const ZC = zC();
            return new Uint8Array(CC.memory().buffer, CC.scratch(), ZC).slice()
          },
          QC = (new TextDecoder).decode(ZC((() => CC.queries.itemNames()))).split("\n"),
          wC = ZC((() => CC.queries.blockProps())),
          bC = ZC((() => CC.queries.itemProps()));
        this.props = {
          blockFlags: Nw(wC, gC.H.BYTES, gC.H.flags),
          blockHarvestTypes: Nw(wC, gC.H.BYTES, gC.H.harvestType),
          blockHarvestLevels: Nw(wC, gC.H.BYTES, gC.H.harvestLevel),
          blockAttachedTops: Mw(wC, gC.H.BYTES, gC.H.attachedTop),
          itemFlags: Nw(bC, gC.Uc.BYTES, gC.Uc.flags),
          itemHarvests: Nw(bC, gC.Uc.BYTES, gC.Uc.harvests),
          itemLevels: Nw(bC, gC.Uc.BYTES, gC.Uc.level)
        }, (0, fw.g)(Object.freeze(QC)), (0, nw.g)()
      }
      idOf(CC) {
        if ("number" === typeof CC) return void 0 === (0, fw.c)(CC) ? void 0 : CC;
        const zC = (0, fw.b)(CC);
        return void 0 === zC && Fw.test(CC) ? void 0 === (0, fw.c)(+CC) ? void 0 : +CC : zC
      }
      getMetaInfo(CC) {
        if (!CC || CC === Qw.b) return Qw.d;
        const zC = this.idOf(CC);
        if (void 0 === zC) throw new Error(`Item ${CC} not found in registry`);
        return this.metaOf(zC)
      }
      blockRootId(CC) {
        return 0 !== CC && void 0 !== (0, fw.c)(CC) ? this.metaOf(CC).rootId : CC
      }
      metaOf(CC) {
        return this.metas[CC] ??= (0, ww.k)((0, fw.c)(CC), CC, this.rootIdOf, (0, ZQ.rootMetaDescOf)(CC))
      }
      getItemId(CC) {
        if (!CC || CC === Qw.b) return 0;
        const zC = this.idOf(CC);
        if (void 0 === zC) throw new Error(`Invalid block name. You sent ${CC}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return zC
      }
      getItemName(CC) {
        if (!CC || CC === Qw.b) return Qw.b;
        const zC = this.idOf(CC);
        if (void 0 === zC) throw new Error(`Item ${CC} not found in registry`);
        return (0, fw.c)(zC)
      }
      blockNameToBlockId(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (CC === Qw.b) return 0;
        let ZC = this.idOf(CC);
        if (void 0 === ZC || !this.isBlockId(ZC)) {
          const zC = CC.indexOf("|"),
            QC = zC > 0 ? (0, fw.b)(CC.slice(0, zC)) : void 0;
          ZC = void 0 !== QC && this.isBlockId(QC) && (0, ZQ.rootMetaDescOf)(QC) === CC ? QC : void 0
        }
        if (void 0 !== ZC) return ZC;
        if (!zC) throw new Error(`Invalid block name. You sent ${CC}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(CC) {
        return CC > 0 && CC < this.props.blockFlags.length
      }
      nameOfId(CC) {
        return 0 !== CC && (0, fw.c)(CC) || Qw.b
      }
      itemType(CC) {
        const zC = CC ? this.idOf(CC) : void 0;
        if (!zC) return null;
        let ZC = this.types.get(zC);
        return void 0 === ZC && (ZC = Object.freeze({
          id: zC,
          name: (0, fw.c)(zC),
          meta: this.getMetaInfo(zC),
          stackable: qw(this.props, zC),
          type: (0, ZQ.itemTypeNameOf)(zC),
          clipSize: (0, ZQ.clipSizeOf)(zC),
          scopeType: (0, ZQ.scopeTypeOf)(zC),
          showsAimingUi: (0, ZQ.showsAimingUi)(zC)
        }), this.types.set(zC, ZC)), ZC
      }
      getItemStat(CC, zC) {
        if (bw.c.has(zC)) {
          const ZC = "minChargeStateToUse" === zC ? this.getMetaInfo(CC).rootName : this.getItemName(CC),
            QC = this.options.get((0, bw.d)(ZC, zC));
          if (null !== QC && void 0 !== QC) return QC
        }
        return this.defaultStat(CC, zC, this.statOf(zC))
      }
      getDisplayName(CC) {
        return this.getItemStat(CC, "displayName")
      }
      getDefaultItemStat(CC, zC) {
        return this.defaultStat(CC, zC, this.statOf(zC))
      }
      statOf(CC) {
        const zC = Ww[CC];
        return void 0 === zC && function(CC, zC) {
          throw new Error(`ClientApi.${CC} is not available yet in the wasm client (${zC})`)
        }(`getItemStat("${CC}")`, `a table of the stat: the wasm client answers ${Object.keys(Ww).join(", ")}`), zC
      }
      defaultStat(CC, zC, ZC) {
        const QC = this.idOf(CC),
          wC = void 0 === QC ? void 0 : ZC(this.props, QC);
        return null !== wC && void 0 !== wC || "displayName" !== zC ? wC : this.getItemName(CC)
      }
      getClientOption(CC) {
        return this.options.get(CC)
      }
      getGunStats(CC) {
        return this.getClientOption(`${CC}GunStats`)
      }
      watchClientOption(CC, zC) {
        return this.options.subscribe(CC, zC)
      }
      isSolidBlockId(CC) {
        var zC;
        return 0 !== ((null !== (zC = this.props.blockFlags[CC]) && void 0 !== zC ? zC : 0) & gC.D.Solid)
      }
      isStackableId(CC) {
        return qw(this.props, CC)
      }
      isFluidBlockId(CC) {
        var zC;
        return 0 !== ((null !== (zC = this.props.blockFlags[CC]) && void 0 !== zC ? zC : 0) & gC.D.Fluid)
      }
      canPlaceOverBlockId(CC) {
        var zC;
        return 0 !== ((null !== (zC = this.props.blockFlags[CC]) && void 0 !== zC ? zC : 0) & gC.D.PlaceOver)
      }
      attachedTopOf(CC) {
        var zC;
        return null !== (zC = this.props.blockAttachedTops[CC]) && void 0 !== zC ? zC : 0
      }
      isDroplessBlockId(CC) {
        return (0, ZQ.dropsNothing)(CC)
      }
    }

    function pw(CC, zC) {
      const ZC = new Map;
      return (QC, wC) => {
        const bC = zC.idOf(QC),
          nC = void 0 === bC ? null : (QC => {
            let wC = ZC.get(QC);
            if (void 0 === wC) {
              const bC = CC.queries.salvageRecipe(QC),
                nC = new DataView(CC.memory().buffer, CC.scratch(), bC),
                fC = [];
              for (let CC = 0; CC + gC.me.BYTES <= bC; CC += gC.me.BYTES) fC.push(Object.freeze({
                item: zC.nameOfId(gC.me.item(nC, CC)),
                amt: gC.me.amount(nC, CC)
              }));
              wC = 0 === fC.length ? null : Object.freeze(fC), ZC.set(QC, wC)
            }
            return wC
          })(bC);
        if (null === nC || void 0 === wC) return nC;
        const fC = wC <= 0 ? 1 : wC;
        return nC.map((CC => {
          let {
            item: zC,
            amt: ZC
          } = CC;
          return {
            item: zC,
            amt: ZC * fC
          }
        }))
      }
    }
    var Pw = ZC(40590),
      Gw = ZC(36820),
      Rw = ZC(36802),
      Aw = ZC(36811),
      xw = ZC(36375),
      Jw = ZC(40518),
      Iw = ZC(42382);
    const iw = -1,
      vw = new Uint8Array(0),
      ew = new TextEncoder;

    function hw(CC) {
      if (null === CC) return null;
      const zC = ew.encode(CC);
      return zC.byteLength < NC.Ec ? zC : zC.subarray(0, NC.Ec - 1)
    }
    class Kw {
      constructor(CC) {
        this.deps = CC, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = iw, this.keyframesSettled = !1, this.reloadFrom = iw
      }
      reloadKeyframes() {
        var CC, zC;
        this.keyframesVersion = iw, this.reloadFrom = null !== (CC = null === (zC = this.view()) || void 0 === zC ? void 0 : zC.version) && void 0 !== CC ? CC : iw
      }
      setPlayback(CC) {
        const zC = 1 === this.deps.core.iwC(CC);
        return zC && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = iw, this.reloadFrom = iw), zC
      }
      async open(CC, zC) {
        const ZC = await this.deps.replay.open(CC, zC);
        return "opening" === ZC && (this.reloadKeyframes(), this.deps.recorder.prefetch()), ZC
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(CC)), zC)
      }
      setSpeed(CC) {
        this.deps.replay.setSpeed(CC)
      }
      setCameraMode(CC) {
        this.deps.replay.setCameraMode(Iw.e.indexOf(CC))
      }
      view() {
        var CC;
        const zC = gC.w.replayViewPtr(this.deps.apiView(), 0);
        if (0 === zC) return this.lastView = null, null;
        const ZC = new DataView(this.deps.buffer(), zC, gC.he.BYTES),
          QC = gC.he.version(ZC, 0),
          wC = this.lastView;
        if (null !== wC && wC.version === QC) return wC;
        const bC = gC.he.markIn(ZC, 0),
          nC = {
            version: QC,
            state: gC.he.state(ZC, 0),
            cameraMode: null !== (CC = Iw.e[gC.he.cameraMode(ZC, 0)]) && void 0 !== CC ? CC : "recording",
            ZN: gC.he.ZN(ZC, 0),
            totalTicks: gC.he.totalTicks(ZC, 0),
            speed: gC.he.speed(ZC, 0),
            mark: bC === gC.ge ? null : {
              inTick: bC,
              outTick: gC.he.markOut(ZC, 0)
            },
            editVersion: gC.he.editVersion(ZC, 0)
          };
        return this.lastView = nC, nC
      }
      keyframes() {
        const CC = this.view();
        if (null === CC) return [];
        CC.version !== this.reloadFrom && (this.reloadFrom = iw);
        const zC = this.reloadFrom === iw && CC.state !== NC.id.Cropping && CC.state !== NC.id.None,
          ZC = zC ? CC.editVersion : CC.version;
        if (ZC === this.keyframesVersion && zC === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: QC
        } = this.deps, wC = QC.vwC(), bC = QC.Xp(), nC = [];
        if (0 !== bC && wC > 0) {
          const CC = new DataView(this.deps.buffer(), bC, wC * NC.sc);
          for (let zC = 0; zC < wC; zC++) {
            const ZC = zC * NC.sc,
              QC = zC => CC.getFloat64(ZC + zC, !0);
            nC.push({
              ZN: CC.getUint32(ZC + NC.Bc, !0),
              position: [QC(NC.Ac), QC(NC.Ac + 8), QC(NC.Ac + 16)],
              direction: [QC(NC.wc), QC(NC.wc + 8), QC(NC.wc + 16)],
              easing: [QC(NC.yc), QC(NC.yc + 8), QC(NC.yc + 16), QC(NC.yc + 24)]
            })
          }
        }
        return this.keyframesVersion = ZC, this.keyframesSettled = zC, this.lastKeyframes = nC, nC
      }
      addKeyframe() {
        const CC = this.deps.apiView(),
          zC = [gC.w.eye(CC, 0, 0), gC.w.eye(CC, 0, 1), gC.w.eye(CC, 0, 2)];
        return this.deps.replay.addKeyframe(zC, function(CC, zC) {
          const ZC = Math.cos(zC);
          return [ZC * Math.sin(CC), -Math.sin(zC), ZC * Math.cos(CC)]
        }(gC.w.heading(CC, 0), gC.w.pitch(CC, 0)))
      }
      setKeyframe(CC) {
        return this.deps.replay.setKeyframe(CC.ZN, Float64Array.from([...CC.position, ...CC.direction, ...CC.easing]))
      }
      moveKeyframe(CC, zC) {
        return this.deps.replay.moveKeyframe(CC, zC)
      }
      deleteKeyframes(CC, zC) {
        return this.deps.replay.deleteKeyframes(CC, zC)
      }
      setMark(CC) {
        var zC, ZC;
        return this.deps.replay.setMark(null !== (zC = null === CC || void 0 === CC ? void 0 : CC.inTick) && void 0 !== zC ? zC : -1, null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.outTick) && void 0 !== ZC ? ZC : -1)
      }
      crop(CC, zC) {
        const ZC = this.deps.replay.crop(CC, zC);
        return ZC && this.reloadKeyframes(), ZC
      }
      save(CC) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(CC)
      }
      recorderControl(CC) {
        this.deps.recorder.control(CC)
      }
      recorderPrefs(CC, zC) {
        this.deps.recorder.prefs(CC, zC)
      }
      recorderOption(CC, zC) {
        const ZC = this.deps.cmd();
        return null !== ZC && (0, gC.Mf)(ZC, 0, CC, null === zC ? vw : ew.encode(zC))
      }
      recordFlyingText(CC, zC, ZC, QC) {
        const wC = this.deps.cmd(),
          bC = Math.max(0, Math.min(4294967295, Math.round(QC)));
        return null !== wC && (0, gC.Kf)(wC, 0, zC, ZC, bC, ew.encode(CC))
      }
      recordPlayerKilled(CC, zC, ZC, QC) {
        const wC = this.deps.cmd();
        return null !== wC && (0, gC.Of)(wC, 0, CC, zC, Math.max(0, ZC), ew.encode(QC))
      }
      recordKillfeed(CC, zC, ZC) {
        var QC, wC;
        const bC = this.deps.cmd(),
          nC = function(CC) {
            const zC = CC.reduce(((CC, zC) => {
                var ZC;
                return CC + yZ.Ob + (null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.byteLength) && void 0 !== ZC ? ZC : 0)
              }), 0),
              ZC = new Uint8Array(zC),
              QC = new DataView(ZC.buffer);
            let wC = 0;
            for (const nC of CC) {
              var bC;
              QC.setUint16(wC, null !== (bC = null === nC || void 0 === nC ? void 0 : nC.byteLength) && void 0 !== bC ? bC : NC.Ec, !0), wC += yZ.Ob, null !== nC && (ZC.set(nC, wC), wC += nC.byteLength)
            }
            return ZC
          }([hw(CC.name), hw(CC.colour), hw(zC.name), hw(zC.colour), hw(ZC)]);
        return null !== bC && (0, gC.Lf)(bC, 0, null !== (QC = CC.id) && void 0 !== QC ? QC : gC.qd, null !== (wC = zC.id) && void 0 !== wC ? wC : gC.qd, nC)
      }
      recorderSession(CC, zC) {
        this.deps.recorder.session({
          session: zC,
          lobbyType: CC.lobbyType,
          game: CC.gameNameWithVariation,
          lobby: CC.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.ewC()
      }
      filePartDone(CC, zC) {
        this.deps.recorder.filePartDone(CC, zC)
      }
      fileDone(CC) {
        this.deps.recorder.fileDone(CC)
      }
    }
    const Yw = -2147483648;
    class dw {
      constructor(CC) {
        var zC;
        this.deps = CC, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (zC = CC.now) && void 0 !== zC ? zC : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var CC, zC, ZC;
        return null === (CC = null === (zC = (ZC = this.deps).live) || void 0 === zC ? void 0 : zC.call(ZC)) || void 0 === CC || CC
      }
      activated(CC) {
        var zC, ZC;
        this.live && (this.viewerShown(!0 === (null === (zC = (ZC = this.deps).viewerOpen) || void 0 === zC ? void 0 : zC.call(ZC))), this.deps.client.recorderSession(CC, (0, Iw.i)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var CC, zC;
        this.live && (this.state.recording || !0 !== (null === (CC = (zC = this.deps).viewerOpen) || void 0 === CC ? void 0 : CC.call(zC))) ? this.deps.client.recorderControl(NC.Tc.ToggleRecording) : this.deps.notify(Aw.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(NC.Tc.SaveClip) : this.deps.notify(Aw.c.clippingNotOn)
      }
      viewerShown(CC) {
        this.live && this.deps.client.recorderControl(CC ? NC.Tc.ViewerOpened : NC.Tc.ViewerClosed)
      }
      setPrefs(CC, zC) {
        this.live && this.deps.client.recorderPrefs(CC, zC)
      }
      setOption(CC, zC) {
        this.live && this.deps.client.recorderOption(CC, zC)
      }
      recordFlyingText(CC, zC, ZC, QC) {
        this.live && this.deps.client.recordFlyingText(CC, zC, ZC, QC)
      }
      recordPlayerKilled(CC, zC, ZC, QC) {
        this.live && this.deps.client.recordPlayerKilled(CC, zC, ZC, QC)
      }
      recordKillfeed(CC, zC, ZC) {
        this.live && this.deps.client.recordKillfeed(CC, zC, ZC)
      }
      ZN() {
        let CC = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, CC = {
            ...CC,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const zC = Math.floor((this.now() - this.recordingSince) / 1e3);
          zC !== CC.seconds && (CC = {
            ...CC,
            seconds: zC
          })
        }
        this.set(CC)
      }
      onEvent(CC) {
        var zC, ZC;
        const {
          notify: QC
        } = this.deps, wC = Aw.c;
        switch (CC.what) {
          case NC.Sc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), QC(wC.recordingStarted);
            break;
          case NC.Sc.RecordingStopped:
            this.stopRecording(), QC(wC.recordingStopped), this.saveState(NC.ad.Recording, "saving");
            break;
          case NC.Sc.RecordingDiscarded:
            this.stopRecording(), QC(wC.recordingDiscarded);
            break;
          case NC.Sc.RecordingTurnedOff:
            this.stopRecording(), QC(wC.recordingTurnedOff);
            break;
          case NC.Sc.LimitReached:
            QC(wC.limitReached);
            break;
          case NC.Sc.ClipSaved:
            this.saveState(NC.ad.Clip, "saving");
            break;
          case NC.Sc.ClipEmpty:
            QC(wC.clipEmpty);
            break;
          case NC.Sc.ClippingNotOn:
            QC(wC.clippingNotOn);
            break;
          case NC.Sc.Disallowed:
            QC(wC.disallowed);
            break;
          case NC.Sc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case NC.Sc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case NC.Sc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case NC.Sc.SaveBusy:
            null === (zC = (ZC = this.deps).onSaveState) || void 0 === zC || zC.call(ZC, CC.kind, "busy"), QC(wC.saveBusy);
            break;
          case NC.Sc.CloseViewerFirst:
            QC(wC.closeViewerFirst)
        }
      }
      fileReady(CC, zC) {
        this.deps.download(zC), this.saveState(CC, "done"), this.deps.notify(CC === NC.ad.Clip ? Aw.c.clipSaved : Aw.c.recordingSaved)
      }
      failed(CC) {
        this.saveState(CC, "failed"), this.deps.notify(CC === NC.ad.Clip ? Aw.c.clipFailed : Aw.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(CC, zC) {
        var ZC, QC;
        null === (ZC = (QC = this.deps).onSaveState) || void 0 === ZC || ZC.call(QC, CC, zC)
      }
      set(CC) {
        CC !== this.state && (this.state = CC, this.deps.onState(CC))
      }
    }
    const mw = new TextDecoder;

    function Hw(CC, zC, ZC, QC) {
      const wC = [];
      for (let bC = 0; bC < QC; bC++) {
        if (zC + yZ.Ob > ZC) return null;
        const QC = CC.getUint16(zC, !0);
        if (zC += yZ.Ob, QC !== NC.Ec) {
          if (zC + QC > ZC) return null;
          wC.push(mw.decode(new Uint8Array(CC.buffer, CC.byteOffset + zC, QC))), zC += QC
        } else wC.push(null)
      }
      return zC === ZC ? wC : null
    }

    function Ew(CC, zC) {
      let ZC = new DataView(new ArrayBuffer(0)),
        QC = !0;
      const wC = {
        replayFailed: (zC, ZC, QC) => {
          CC.replayFailed({
            reason: zC,
            code: ZC,
            version: QC
          })
        },
        replayOption: (zC, wC, bC, nC) => {
          const fC = function(CC, zC, ZC, QC) {
            switch (zC) {
              case NC.ed.Cleared:
                return 0 === QC ? null : void 0;
              case NC.ed.Text:
                return mw.decode(new Uint8Array(CC.buffer, CC.byteOffset + ZC, QC));
              case NC.ed.Int:
                return QC === Int32Array.BYTES_PER_ELEMENT ? CC.getInt32(ZC, !0) : void 0;
              case NC.ed.Double:
                return QC === Float64Array.BYTES_PER_ELEMENT ? CC.getFloat64(ZC, !0) : void 0;
              default:
                return
            }
          }(ZC, wC, bC, nC);
          void 0 !== fC ? CC.replayOption({
            key: zC,
            value: fC
          }) : QC = !1
        },
        replayUiEvent: (zC, wC, bC, nC, fC, oC) => {
          const qC = function(CC, zC, ZC, QC, wC, bC, nC) {
            const fC = bC + nC;
            switch (zC) {
              case NC.fd.FlyingText: {
                const nC = Hw(CC, bC, fC, 1);
                return null !== nC && null !== nC[0] ? {
                  what: zC,
                  Ib: ZC,
                  Jb: QC,
                  angle: wC,
                  contentJson: nC[0]
                } : null
              }
              case NC.fd.PlayerKilled: {
                const QC = Hw(CC, bC, fC, 3);
                return QC ? {
                  what: zC,
                  killstreak: ZC,
                  dead: QC[0],
                  killer: QC[1],
                  withItem: QC[2]
                } : null
              }
              case NC.fd.Killfeed: {
                const ZC = Hw(CC, bC, fC, 7);
                return ZC ? {
                  what: zC,
                  killerId: ZC[0],
                  killerName: ZC[1],
                  killerColour: ZC[2],
                  victimId: ZC[3],
                  victimName: ZC[4],
                  victimColour: ZC[5],
                  withItem: ZC[6]
                } : null
              }
              default:
                return null
            }
          }(ZC, zC, wC, bC, nC, fC, oC);
          null !== qC ? CC.replayUiEvent(qC) : QC = !1
        },
        replayFilePart: (ZC, wC, bC, nC) => {
          const fC = zC();
          bC + nC > fC.byteLength ? QC = !1 : CC.filePart(ZC, wC, new Uint8Array(fC, bC, nC).slice())
        },
        replayFileReady: (zC, ZC, QC, wC) => {
          CC.fileReady({
            save: zC,
            kind: ZC,
            parts: QC,
            bytes: wC
          })
        },
        recorderEvent: (zC, ZC, QC) => {
          CC.recorderEvent({
            what: zC,
            kind: ZC,
            save: QC
          })
        },
        replayOpened: (zC, QC, wC) => {
          CC.replayOpened(mw.decode(new Uint8Array(ZC.buffer, ZC.byteOffset + QC, wC)))
        }
      };
      return (CC, zC, bC, nC) => !(CC < NC.ab.ReplayFailed || CC > NC.ab.RecorderEvent) && (ZC = zC, QC = !0, (0, gC.xe)(CC, zC, bC, nC, wC) && QC)
    }

    function lw(CC) {
      let zC = null;
      const ZC = Ew(CC, (() => {
        if (null === zC) throw new Error("a recorder event read outside recorderEventReader's call");
        return zC.buffer
      }));
      return (CC, QC) => {
        zC = QC;
        try {
          ! function(CC, zC) {
            const ZC = CC.slice(),
              QC = new DataView(ZC.buffer);
            for (let wC = 0; wC < ZC.byteLength;) {
              if (wC + NC.$ > ZC.byteLength) throw new Error(`the recorder module's events end mid-head at ${wC}`);
              const CC = QC.getUint32(wC, !0),
                bC = 65535 & CC,
                nC = CC >>> 16,
                fC = wC + NC.$;
              if (fC + nC > ZC.byteLength || !zC(bC, QC, fC, nC)) throw new Error(`the recorder module wrote a malformed event ${bC} (${nC} bytes) at ${wC}`);
              wC = fC + (0, NC.pe)(nC)
            }
          }(CC, ZC)
        } finally {
          zC = null
        }
      }
    }
    class Xw {
      constructor(CC, zC) {
        this.acks = CC, this.handlers = zC, this.parts = new Map
      }
      onPart(CC, zC, ZC) {
        let QC = this.parts.get(CC);
        QC || (QC = [], this.parts.set(CC, QC)), QC[zC] = ZC, this.acks.filePartDone(CC, zC)
      }
      onReady(CC) {
        var zC;
        const ZC = null !== (zC = this.parts.get(CC.save)) && void 0 !== zC ? zC : [];
        this.parts.delete(CC.save);
        const QC = function(CC, zC, ZC) {
          if (CC.length !== zC) return null;
          let QC = 0;
          for (let nC = 0; nC < zC; nC++) {
            if (void 0 === CC[nC]) return null;
            QC += CC[nC].byteLength
          }
          if (QC !== ZC) return null;
          if (1 === zC) return CC[0];
          const wC = new Uint8Array(ZC);
          let bC = 0;
          for (const nC of CC) wC.set(nC, bC), bC += nC.byteLength;
          return wC
        }(ZC, CC.parts, CC.bytes);
        this.acks.fileDone(CC.save), null === QC ? this.handlers.fileIncomplete(CC.save, CC.kind) : this.handlers.fileReady(CC.save, CC.kind, QC)
      }
      onDiscarded(CC) {
        this.parts.delete(CC)
      }
    }

    function uw() {
      return ZC.e(60).then((() => ZC(60273)))
    }
    class rw {
      constructor(CC) {
        this.deps = CC, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: zC
        } = CC;
        this.recorder = new dw({
          client: zC,
          live: () => {
            var CC;
            return !0 !== (null === (CC = this.viewer) || void 0 === CC ? void 0 : CC.inPlayback)
          },
          viewerOpen: CC.viewerOpen,
          notify: CC.notify,
          download: zC => {
            var ZC;
            null === (ZC = CC.download) || void 0 === ZC || ZC.call(CC, zC)
          },
          onState: CC.onRecorderState,
          onSaveState: CC.onSaveState
        }), this.parts = new Xw(zC, {
          fileReady: (CC, zC, ZC) => {
            var QC;
            zC === NC.ad.Edited ? null === (QC = this.viewer) || void 0 === QC || QC.saveDone(ZC) : this.recorder.fileReady(zC, ZC)
          },
          fileIncomplete: (CC, zC) => {
            this.saveFailed(zC)
          }
        });
        const ZC = {
          replayFailed: CC => {
            var zC;
            null === (zC = this.viewer) || void 0 === zC || zC.onFailed(CC)
          },
          replayOption: zC => {
            var ZC;
            null === (ZC = CC.onReplayOption) || void 0 === ZC || ZC.call(CC, zC)
          },
          replayUiEvent: zC => {
            var ZC;
            null === (ZC = CC.onReplayUiEvent) || void 0 === ZC || ZC.call(CC, zC)
          },
          filePart: (CC, zC, ZC) => {
            this.parts.onPart(CC, zC, ZC)
          },
          fileReady: CC => {
            this.parts.onReady(CC)
          },
          replayOpened: zC => {
            var ZC;
            null === (ZC = CC.onReplayOpened) || void 0 === ZC || ZC.call(CC, zC)
          },
          recorderEvent: CC => {
            var zC;
            switch (CC.what) {
              case NC.Sc.FileDiscarded:
                this.parts.onDiscarded(CC.save);
                break;
              case NC.Sc.SaveFailed:
                this.saveFailed(CC.kind);
                break;
              case NC.Sc.SaveBusy:
                if (null !== (zC = this.viewer) && void 0 !== zC && zC.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(CC);
                break;
              default:
                this.recorder.onEvent(CC)
            }
          }
        };
        this.sink = function(CC, zC) {
          return {
            onReplayEvent: Ew(CC, zC)
          }
        }(ZC, CC.buffer), this.recorderEvents = lw(ZC)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var CC;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (CC = this.deps.loadViewer) && void 0 !== CC ? CC : uw)().catch((CC => {
          throw this.viewerChunk = null, CC
        })), this.viewerChunk.then((CC => (this.viewer ??= new CC.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var CC, zC;
            null === (CC = (zC = this.deps).onViewerChange) || void 0 === CC || CC.call(zC)
          }
        }), this.viewer))))
      }
      activated(CC) {
        this.recorder.activated(CC)
      }
      afterFrame(CC) {
        try {
          CC > 0 && this.recorder.ZN()
        } finally {
          var zC;
          null === (zC = this.viewer) || void 0 === zC || zC.afterFrame()
        }
      }
      end() {
        var CC;
        null === (CC = this.viewer) || void 0 === CC || CC.end()
      }
      saveFailed(CC) {
        var zC;
        CC === NC.ad.Edited ? null === (zC = this.viewer) || void 0 === zC || zC.saveFailed(!1) : this.recorder.failed(CC)
      }
    }
    var sw = ZC(40449),
      Tw = ZC(40470),
      aw = ZC(4739),
      tw = ZC(40750);
    class Dw {
      constructor(CC) {
        this.deps = CC, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(CC, zC) {
        if (!this.deps.live() || 0 === CC && 0 === zC) return;
        const ZC = (0, cC.q)(0, performance.now()),
          QC = this.deps.dragScale();
        (0, tw.h)((() => {
          (0, cC.s)(NC.wb.MouseDown, 0, 0, 0, ZC), (0, cC.s)(NC.wb.MouseMove, 0, CC * QC, zC * QC, 0), (0, cC.s)(NC.wb.MouseUp, 0, 0, 0, ZC)
        }))
      }
      move(CC) {
        var zC, ZC;
        this.analogue[0] = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.x) && void 0 !== zC ? zC : 0, this.analogue[1] = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.y) && void 0 !== ZC ? ZC : 0, this.send()
      }
      holdVertical(CC, zC) {
        const ZC = "freeCamUp" === CC ? gC.ec.Up : gC.ec.Down;
        this.keys = zC ? this.keys | ZC : this.keys & ~ZC, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const CC = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== CC && !(0, gC.Te)(CC, 0, this.analogue, this.keys)
      }
    }
    var jw = ZC(3514),
      yw = ZC(694),
      Lw = ZC(264),
      Uw = ZC(77),
      Bw = ZC(34082);

    function Ow() {
      const CC = QC.b.get("clientEscMenuOptions"),
        zC = (0, yw.o)(CC);
      return {
        mouse: (0, Uw.isMobile)() ? zC : CC.mouseSensitivity,
        touch: zC,
        fovPercent: CC.cameraFOV
      }
    }

    function kw() {
      const CC = QC.b.get("clientEscMenuOptions"),
        zC = QC.b.get("isTouchScreen") ? (0, yw.o)(CC) : CC.mouseSensitivity,
        ZC = Ow().mouse;
      return ZC > 0 ? zC / ZC : 1
    }

    function Vw(CC) {
      const zC = () => {
        CC.setSoundPrefs(QC.b.get("soundVolume"), QC.b.get("soundOnFromAd"))
      };
      let ZC = null;
      const wC = () => {
        const {
          showFog: zC,
          enableLighting: wC,
          fogChunkDistance: bC,
          chunkFadeIn: nC
        } = QC.b.get("clientEscMenuOptions"), fC = {
          showFog: zC,
          lighting: wC,
          fogChunks: bC,
          chunkFade: nC,
          cellLight: (0, jw.f)("cellLight") ? (0, jw.f)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        ZC && (0, NC.be)(ZC) === (0, NC.be)(fC) && ZC.fogChunks === bC || (ZC = fC, CC.setEnvPrefs(ZC))
      };
      let bC = null;
      const fC = () => {
        const zC = function() {
          const CC = QC.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: QC.b.get("areNametagsHidden"),
            crouchToggle: CC.crouchIsToggle,
            bhopDisabled: CC.disableBunnyHopping,
            disableBobbing: CC.disableBobbing,
            ezTowering: CC.ezTowering && (0, Lw.h)(),
            ezBridging: CC.ezBridging,
            showChunkBorders: CC.showChunkBorders,
            nametagCutDistance: (0, Bw.d)()
          }
        }();
        (0, eC.Td)(bC, zC) || (bC = zC, CC.setUiPrefs(zC))
      };
      let oC = null;
      const qC = () => {
        const zC = Ow();
        (0, eC.Td)(oC, zC) || (oC = zC, CC.setLookPrefs(zC))
      };
      zC(), wC(), fC(), qC();
      const FC = [(0, nC.q)("appManagerUpdated|soundVolume", zC), (0, nC.q)("appManagerUpdated|soundOnFromAd", zC), (0, nC.q)("appManagerUpdated|clientEscMenuOptions", (() => {
        wC(), fC(), qC()
      })), (0, nC.q)("appManagerUpdated|enabledDebugFeatures", wC), (0, nC.q)("appManagerUpdated|areNametagsHidden", fC), (0, nC.q)("appManagerUpdated|showDistantNametags", fC)];
      return () => {
        for (const CC of FC) CC()
      }
    }
    var Cb = ZC(40736),
      zb = ZC(40743);
    var Zb = (0, zb.c)("lend"),
      Qb = (0, zb.c)("starting"),
      wb = (0, zb.c)("generation"),
      bb = (0, zb.c)("end");
    class nb {
      constructor(CC) {
        this.deps = CC, Object.defineProperty(this, bb, {
          value: fb
        }), Object.defineProperty(this, Zb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qb, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, wb, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, Cb.e)(this, Zb)[Zb] || (0, Cb.e)(this, Qb)[Qb]
      }
      async start(CC) {
        if (this.active) return "busy";
        const zC = (0, Cb.e)(this, wb)[wb];
        (0, Cb.e)(this, Qb)[Qb] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, Cb.e)(this, Qb)[Qb] = !1
        }
        if (zC !== (0, Cb.e)(this, wb)[wb]) return "refused";
        const ZC = this.deps.beginSave();
        if (!ZC) return "refused";
        const QC = Number(BigInt.asUintN(32, CC)),
          wC = Number(BigInt.asUintN(32, CC >> 32n));
        let bC = "refused";
        return this.deps.recorderCall(((CC, zC) => {
          const nC = ZC.editState,
            fC = CC.stage(nC.length);
          0 !== fC ? (new Uint8Array(zC.buffer, fC, nC.length).set(nC), CC.hwC(ZC.headLen, QC, wC) && (bC = "sealing")) : bC = "tooLarge"
        }), !0), "sealing" !== bC ? (ZC.end(), bC) : ((0, Cb.e)(this, Zb)[Zb] = ZC, "sealing")
      }
      beforeRecorderStep() {
        const CC = (0, Cb.e)(this, Zb)[Zb];
        if (!CC) return null;
        let zC = -1,
          ZC = 0;
        if (!this.deps.recorderCall((CC => {
            zC = CC.KwC(), zC > 0 && (ZC = CC.YwC())
          }))) return (0, Cb.e)(this, bb)[bb](CC, "stopped");
        if (zC < 0) return (0, Cb.e)(this, bb)[bb](CC, "read");
        if (0 === zC) return null;
        const QC = CC.head(ZC, zC);
        let wC = !1;
        if (QC && this.deps.recorderCall(((CC, ZC) => {
            const bC = CC.stage(zC);
            0 !== bC && (new Uint8Array(ZC.buffer, bC, zC).set(QC), wC = !0)
          }), !0), wC) return null;
        const bC = CC.givenUp();
        this.deps.recorderCall((CC => {
          CC.dwC()
        }));
        const nC = (0, Cb.e)(this, bb)[bb](CC, bC ? "givenUp" : "stopped");
        return bC && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), nC
      }
      stop() {
        (0, Cb.e)(this, wb)[wb]++;
        const CC = (0, Cb.e)(this, Zb)[Zb];
        CC && (this.deps.recorderCall((CC => {
          CC.dwC()
        })), (0, Cb.e)(this, bb)[bb](CC, "stopped"))
      }
    }

    function fb(CC, zC) {
      return (0, Cb.e)(this, Zb)[Zb] = null, CC.end(), zC
    }

    function ob(CC, zC) {
      const ZC = new Uint8Array(4),
        QC = new DataView(ZC.buffer);
      return QC.setUint8(0, CC ? 1 : 0), QC.setUint16(2, Math.max(0, Math.min(65535, Math.round(zC))), !0), ZC
    }

    function qb(CC, zC) {
      return CC > function(CC) {
        return 16777216 + 314572.8 * Math.max(0, CC)
      }(zC) + 33554432
    }
    let Fb = null;

    function Wb(CC) {
      return Fb ??= async function(CC) {
        const zC = CC.loadInFlight();
        zC && await zC.catch((() => {}));
        if (CC.trapped()) return "trapped";
        if (CC.busy() || !qb(CC.memoryBytes(), CC.clipSeconds())) return "lM";
        CC.unload();
        let ZC = !1;
        try {
          ZC = await CC.load()
        } catch {
          ZC = !1
        }
        if (!ZC) return CC.trapped() ? "trapped" : CC.Sg() ? "Sg" : "failed";
        return "recycled"
      }(CC).finally((() => {
        Fb = null
      })), Fb
    }
    const Nb = "Replay recording couldn't load, so try again.",
      Mb = new Set([NC.Tc.ToggleRecording, NC.Tc.SaveClip]);
    var gb = (0, zb.c)("bindings"),
      Sb = (0, zb.c)("module"),
      pb = (0, zb.c)("memory"),
      Pb = (0, zb.c)("trapped"),
      Gb = (0, zb.c)("Sg"),
      Rb = (0, zb.c)("recycleDue"),
      Ab = (0, zb.c)("loading"),
      xb = (0, zb.c)("generation"),
      Jb = (0, zb.c)("viewDrawn"),
      Ib = (0, zb.c)("clip"),
      ib = (0, zb.c)("session"),
      vb = (0, zb.c)("control"),
      eb = (0, zb.c)("deferred"),
      hb = (0, zb.c)("coreU8"),
      Kb = (0, zb.c)("coreU32"),
      Yb = (0, zb.c)("moduleU8"),
      db = (0, zb.c)("edited"),
      mb = (0, zb.c)("sendSession"),
      Hb = (0, zb.c)("checkNotInEvents"),
      Eb = (0, zb.c)("clipping"),
      lb = (0, zb.c)("busy"),
      Xb = (0, zb.c)("use"),
      cb = (0, zb.c)("ensureLoaded"),
      ub = (0, zb.c)("loadOnce"),
      rb = (0, zb.c)("recycleAfterStep"),
      sb = (0, zb.c)("settleRecycle"),
      Tb = (0, zb.c)("load"),
      ab = (0, zb.c)("attach"),
      tb = (0, zb.c)("resendHeld"),
      Db = (0, zb.c)("recycle"),
      jb = (0, zb.c)("send"),
      yb = (0, zb.c)("unload"),
      Lb = (0, zb.c)("dropModule"),
      Ub = (0, zb.c)("coreBytes"),
      Bb = (0, zb.c)("coreWords"),
      Ob = (0, zb.c)("moduleBytes"),
      kb = (0, zb.c)("loadFailed"),
      Vb = (0, zb.c)("call"),
      Cn = (0, zb.c)("guard"),
      zn = (0, zb.c)("trapOn");
    class Zn {
      constructor(CC) {
        this.deps = CC, Object.defineProperty(this, zn, {
          value: hn
        }), Object.defineProperty(this, Cn, {
          value: en
        }), Object.defineProperty(this, Vb, {
          value: vn
        }), Object.defineProperty(this, kb, {
          value: In
        }), Object.defineProperty(this, Ob, {
          value: Jn
        }), Object.defineProperty(this, Bb, {
          value: xn
        }), Object.defineProperty(this, Ub, {
          value: An
        }), Object.defineProperty(this, Lb, {
          value: Rn
        }), Object.defineProperty(this, yb, {
          value: Gn
        }), Object.defineProperty(this, jb, {
          value: Pn
        }), Object.defineProperty(this, Db, {
          value: pn
        }), Object.defineProperty(this, tb, {
          value: Sn
        }), Object.defineProperty(this, ab, {
          value: gn
        }), Object.defineProperty(this, Tb, {
          value: Mn
        }), Object.defineProperty(this, sb, {
          value: Nn
        }), Object.defineProperty(this, rb, {
          value: Wn
        }), Object.defineProperty(this, ub, {
          value: Fn
        }), Object.defineProperty(this, cb, {
          value: qn
        }), Object.defineProperty(this, Xb, {
          value: fn
        }), Object.defineProperty(this, lb, {
          value: nn
        }), Object.defineProperty(this, Eb, {
          value: bn
        }), Object.defineProperty(this, Hb, {
          value: wn
        }), Object.defineProperty(this, mb, {
          value: Qn
        }), Object.defineProperty(this, gb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Sb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pb, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Gb, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Rb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ab, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xb, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Jb, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ib, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ib, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Kb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, db, {
          writable: !0,
          value: void 0
        }), (0, Cb.e)(this, db)[db] = new nb({
          ensureLoaded: () => (0, Cb.e)(this, cb)[cb](),
          recorderCall: (CC, zC) => {
            zC && (0, Cb.e)(this, Hb)[Hb]("an edited save's stage");
            const ZC = (0, Cb.e)(this, Vb)[Vb](((zC, ZC) => (CC(zC, ZC), !0)));
            return null !== ZC && void 0 !== ZC && ZC
          },
          beginSave: CC.beginSave,
          givenUp: CC.givenUp
        })
      }
      get active() {
        return null !== (0, Cb.e)(this, Sb)[Sb]
      }
      get trapped() {
        return (0, Cb.e)(this, Pb)[Pb]
      }
      get loading() {
        return null !== (0, Cb.e)(this, Ab)[Ab]
      }
      prefetch() {
        (0, Cb.e)(this, Gb)[Gb] || (0, Cb.e)(this, Pb)[Pb] || (0, Cb.e)(this, Sb)[Sb] || (0, Cb.e)(this, Ab)[Ab] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, Cb.e)(this, Jb)[Jb] = !0, (0, Cb.e)(this, Eb)[Eb]() && (0, Cb.e)(this, Xb)[Xb]()
      }
      prefs(CC, zC) {
        (0, Cb.e)(this, Ib)[Ib] = {
          on: CC,
          seconds: zC
        }, (0, Cb.e)(this, jb)[jb](NC.Oc.Prefs, ob(CC, zC)), CC && (0, Cb.e)(this, Jb)[Jb] && (0, Cb.e)(this, Xb)[Xb]()
      }
      control(CC) {
        const zC = function(CC) {
          return new Uint8Array([CC, 0, 0, 0])
        }(CC);
        if (Mb.has(CC)) return (0, Cb.e)(this, Sb)[Sb] ? void(0, Cb.e)(this, jb)[jb](NC.Oc.Control, zC) : ((0, Cb.e)(this, vb)[vb] = zC, void(0, Cb.e)(this, Xb)[Xb]());
        (0, Cb.e)(this, Gb)[Gb] || this.deps.coreCommand(NC.Oc.Control, zC)
      }
      session(CC) {
        (0, Cb.e)(this, ib)[ib] = CC, (0, Cb.e)(this, mb)[mb](CC)
      }
      filePartDone(CC, zC) {
        (0, Cb.e)(this, jb)[jb](NC.Oc.FilePartDone, function(CC, zC) {
          const ZC = new Uint8Array(8),
            QC = new DataView(ZC.buffer);
          return QC.setUint32(0, CC, !0), QC.setUint32(4, zC, !0), ZC
        }(CC, zC))
      }
      fileDone(CC) {
        return (0, Cb.e)(this, jb)[jb](NC.Oc.FileDone, function(CC) {
          const zC = new Uint8Array(4);
          return new DataView(zC.buffer).setUint32(0, CC, !0), zC
        }(CC)), (0, Cb.e)(this, rb)[rb]()
      }
      saveEdited(CC) {
        return (0, Cb.e)(this, Hb)[Hb]("saveEdited"), (0, Cb.e)(this, db)[db].start(CC)
      }
      afterFrame() {
        if (!(0, Cb.e)(this, Sb)[Sb]) return;
        "read" === (0, Cb.e)(this, db)[db].beforeRecorderStep() && (0, Cb.e)(this, rb)[rb]();
        const CC = (0, Cb.e)(this, Rb)[Rb];
        (0, Cb.e)(this, Rb)[Rb] = null;
        const zC = (0, Cb.e)(this, Sb)[Sb],
          ZC = (0, Cb.e)(this, pb)[pb];
        if (!zC || !ZC) return void(null === CC || void 0 === CC || CC.resolve((0, Cb.e)(this, Pb)[Pb] ? "trapped" : "lM"));
        const {
          core: QC
        } = this.deps, wC = QC.EwC(2);
        let bC, nC, fC, oC, qC = 0,
          FC = 0;
        if (0 !== wC) {
          var WC, NC;
          const CC = (0, Cb.e)(this, Bb)[Bb]();
          qC = null !== (WC = CC[wC >>> 2]) && void 0 !== WC ? WC : 0, FC = null !== (NC = CC[1 + (wC >>> 2)]) && void 0 !== NC ? NC : 0
        }
        try {
          if (FC > 0) {
            const CC = zC.feed(FC);
            0 !== CC && (0, Cb.e)(this, Ob)[Ob](ZC).set((0, Cb.e)(this, Ub)[Ub]().subarray(qC, qC + FC), CC)
          }
          bC = zC.step(), nC = zC.lwC(), fC = zC.XwC(), oC = zC.cwC()
        } catch (MC) {
          if (!(0, Cb.e)(this, zn)[zn](MC)) throw null === CC || void 0 === CC || CC.resolve("lM"), MC;
          return void(null === CC || void 0 === CC || CC.resolve("trapped"))
        }
        if (bC > 0) {
          const CC = QC.uwC(2, bC);
          0 !== CC && (0, Cb.e)(this, Ub)[Ub]().set((0, Cb.e)(this, Ob)[Ob](ZC).subarray(nC, nC + bC), CC)
        }
        if (fC > 0) {
          (0, Cb.e)(this, eb)[eb] = [];
          try {
            this.deps.events(new Uint8Array(ZC.buffer, oC, fC), ZC)
          } catch (MC) {
            throw null === CC || void 0 === CC || CC.resolve("lM"), MC
          } finally {
            const CC = (0, Cb.e)(this, eb)[eb];
            (0, Cb.e)(this, eb)[eb] = null;
            for (const [zC, ZC] of CC)(0, Cb.e)(this, jb)[jb](zC, ZC)
          }
        }
        if (!(0, Cb.e)(this, Eb)[Eb]() && !(0, Cb.e)(this, lb)[lb]()) return (0, Cb.e)(this, yb)[yb](), void(null === CC || void 0 === CC || CC.resolve("lM"));
        null === CC || void 0 === CC || CC.resolve((0, Cb.e)(this, Db)[Db]())
      }
      dispose() {
        (0, Cb.e)(this, Gb)[Gb] = !0, (0, Cb.e)(this, yb)[yb]()
      }
    }

    function Qn(CC) {
      (0, Cb.e)(this, jb)[jb](NC.Oc.Session, function(CC) {
        const zC = new TextEncoder,
          ZC = zC.encode(CC.game).subarray(0, 65535),
          QC = zC.encode(CC.lobby).subarray(0, 65535),
          wC = new Uint8Array(22 + ZC.length + 2 + QC.length),
          bC = new DataView(wC.buffer);
        bC.setFloat64(0, CC.unixMs, !0), bC.setBigUint64(8, BigInt.asUintN(64, CC.session), !0), bC.setUint8(16, CC.lobbyType);
        let nC = 20;
        for (const fC of [ZC, QC]) bC.setUint16(nC, fC.length, !0), wC.set(fC, nC + 2), nC += 2 + fC.length;
        return wC
      }({
        ...CC,
        unixMs: this.deps.unixNow()
      }))
    }

    function wn(CC) {
      false
    }

    function bn() {
      var CC, zC;
      return null !== (CC = null === (zC = (0, Cb.e)(this, Ib)[Ib]) || void 0 === zC ? void 0 : zC.on) && void 0 !== CC && CC
    }

    function nn() {
      const CC = (0, Cb.e)(this, Sb)[Sb];
      let zC = !0;
      if (CC) try {
        zC = CC.busy()
      } catch (ZC) {
        if (!(0, Cb.e)(this, zn)[zn](ZC)) throw ZC
      }
      return zC || (0, Cb.e)(this, db)[db].active
    }
    async function fn() {
      !(0, Cb.e)(this, Gb)[Gb] && this.deps.allowed() ? await (0, Cb.e)(this, cb)[cb]() : (0, Cb.e)(this, vb)[vb] = null
    }

    function qn() {
      return (0, Cb.e)(this, Pb)[Pb] || (0, Cb.e)(this, Gb)[Gb] ? Promise.resolve(!1) : (0, Cb.e)(this, Sb)[Sb] ? Promise.resolve(!0) : ((0, Cb.e)(this, Ab)[Ab] ??= (0, Cb.e)(this, ub)[ub](), (0, Cb.e)(this, Ab)[Ab])
    }
    async function Fn() {
      let CC = !1;
      try {
        return CC = await (0, Cb.e)(this, Tb)[Tb](), CC
      } finally {
        CC || ((0, Cb.e)(this, vb)[vb] = null), (0, Cb.e)(this, Ab)[Ab] = null
      }
    }

    function Wn() {
      if (!(0, Cb.e)(this, Sb)[Sb]) return Promise.resolve((0, Cb.e)(this, Pb)[Pb] ? "trapped" : "lM");
      if (!(0, Cb.e)(this, Rb)[Rb]) {
        let CC = () => {};
        const zC = new Promise((zC => {
          CC = zC
        }));
        (0, Cb.e)(this, Rb)[Rb] = {
          promise: zC,
          resolve: CC
        }
      }
      return (0, Cb.e)(this, Rb)[Rb].promise
    }

    function Nn(CC) {
      const zC = (0, Cb.e)(this, Rb)[Rb];
      (0, Cb.e)(this, Rb)[Rb] = null, null === zC || void 0 === zC || zC.resolve(CC)
    }
    async function Mn() {
      let CC = (0, Cb.e)(this, gb)[gb];
      if (!CC) {
        const zC = (0, Cb.e)(this, xb)[xb];
        try {
          CC = await this.deps.load()
        } catch (ZC) {
          return zC === (0, Cb.e)(this, xb)[xb] && await (0, Cb.e)(this, kb)[kb](ZC), !1
        }
        if (zC !== (0, Cb.e)(this, xb)[xb]) return this.deps.unload(), !1;
        const QC = CC,
          wC = (0, Cb.e)(this, Cn)[Cn]((() => QC.rwC()));
        if (void 0 === wC) return !1;
        const bC = this.deps.core.swC();
        if (wC !== bC) return await (0, Cb.e)(this, kb)[kb](new Error(`recorder port version ${wC}, the core's ${bC}`)), !1;
        (0, Cb.e)(this, gb)[gb] = CC
      }
      const zC = CC;
      try {
        if (!(0, Cb.e)(this, Cn)[Cn]((() => ((0, Cb.e)(this, Sb)[Sb] = new zC.TwC, (0, Cb.e)(this, pb)[pb] = zC.mwC(), !0)))) return !1;
        (0, Cb.e)(this, tb)[tb]();
        const CC = (0, Cb.e)(this, vb)[vb];
        return (0, Cb.e)(this, vb)[vb] = null, CC && (0, Cb.e)(this, jb)[jb](NC.Oc.Control, CC), (0, Cb.e)(this, ab)[ab]()
      } catch (ZC) {
        return (0, Cb.e)(this, yb)[yb](), await (0, Cb.e)(this, kb)[kb](ZC), !1
      }
    }

    function gn() {
      return this.deps.core.awC(0), 1 === this.deps.core.awC(1) || ((0, Cb.e)(this, yb)[yb](), this.deps.failed(Nb), !1)
    }

    function Sn() {
      (0, Cb.e)(this, Ib)[Ib] && (0, Cb.e)(this, jb)[jb](NC.Oc.Prefs, ob((0, Cb.e)(this, Ib)[Ib].on, (0, Cb.e)(this, Ib)[Ib].seconds)), (0, Cb.e)(this, ib)[ib] && (0, Cb.e)(this, mb)[mb]((0, Cb.e)(this, ib)[ib])
    }

    function pn() {
      return Wb({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var CC, zC;
          return null !== (CC = null === (zC = (0, Cb.e)(this, Ib)[Ib]) || void 0 === zC ? void 0 : zC.seconds) && void 0 !== CC ? CC : 0
        },
        trapped: () => (0, Cb.e)(this, Pb)[Pb],
        busy: () => (0, Cb.e)(this, lb)[lb](),
        loadInFlight: () => (0, Cb.e)(this, Ab)[Ab],
        Sg: () => (0, Cb.e)(this, Gb)[Gb],
        unload: () => {
          (0, Cb.e)(this, yb)[yb]()
        },
        load: () => (0, Cb.e)(this, cb)[cb]()
      })
    }

    function Pn(CC, zC) {
      (0, Cb.e)(this, eb)[eb] ? (0, Cb.e)(this, eb)[eb].push([CC, zC]): (0, Cb.e)(this, Vb)[Vb](((ZC, QC) => {
        const wC = ZC.HwC(zC.length);
        0 !== wC && (new Uint8Array(QC.buffer, wC, zC.length).set(zC), ZC.command(CC, zC.length))
      }))
    }

    function Gn() {
      (0, Cb.e)(this, xb)[xb]++, (0, Cb.e)(this, sb)[sb]("lM"), (0, Cb.e)(this, db)[db].stop(), this.deps.core.awC(0), (0, Cb.e)(this, Lb)[Lb](), (0, Cb.e)(this, Pb)[Pb] || ((0, Cb.e)(this, gb)[gb] = null, this.deps.unload())
    }

    function Rn() {
      (0, Cb.e)(this, Vb)[Vb]((CC => {
        CC.free()
      })), (0, Cb.e)(this, Sb)[Sb] = null, (0, Cb.e)(this, pb)[pb] = null, (0, Cb.e)(this, Yb)[Yb] = null
    }

    function An() {
      var CC;
      const zC = this.deps.coreBuffer();
      return (null === (CC = (0, Cb.e)(this, hb)[hb]) || void 0 === CC ? void 0 : CC.buffer) !== zC && ((0, Cb.e)(this, hb)[hb] = new Uint8Array(zC)), (0, Cb.e)(this, hb)[hb]
    }

    function xn() {
      var CC;
      const zC = this.deps.coreBuffer();
      return (null === (CC = (0, Cb.e)(this, Kb)[Kb]) || void 0 === CC ? void 0 : CC.buffer) !== zC && ((0, Cb.e)(this, Kb)[Kb] = new Uint32Array(zC, 0, zC.byteLength >>> 2)), (0, Cb.e)(this, Kb)[Kb]
    }

    function Jn(CC) {
      var zC;
      const ZC = CC.buffer;
      return (null === (zC = (0, Cb.e)(this, Yb)[Yb]) || void 0 === zC ? void 0 : zC.buffer) !== ZC && ((0, Cb.e)(this, Yb)[Yb] = new Uint8Array(ZC)), (0, Cb.e)(this, Yb)[Yb]
    }
    async function In(CC) {
      await this.deps.staleOr(CC, (() => {
        this.deps.failed(Nb)
      }))
    }

    function vn(CC) {
      const zC = (0, Cb.e)(this, Sb)[Sb],
        ZC = (0, Cb.e)(this, pb)[pb];
      if (zC && ZC) return (0, Cb.e)(this, Cn)[Cn]((() => CC(zC, ZC)))
    }

    function en(CC) {
      if (!(0, Cb.e)(this, Pb)[Pb]) try {
        return CC()
      } catch (zC) {
        if (!(0, Cb.e)(this, zn)[zn](zC)) throw zC;
        return
      }
    }

    function hn(CC) {
      return CC instanceof WebAssembly.RuntimeError && ((0, Cb.e)(this, Pb)[Pb] = !0, (0, Cb.e)(this, Sb)[Sb] = null, (0, Cb.e)(this, pb)[pb] = null, (0, Cb.e)(this, Yb)[Yb] = null, (0, Cb.e)(this, gb)[gb] = null, (0, Cb.e)(this, vb)[vb] = null, (0, Cb.e)(this, sb)[sb]("trapped"), this.deps.core.awC(0), (0, Cb.e)(this, db)[db].stop(), this.deps.crash(this.deps.markTrapped(CC)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Kn = ZC(38471);
    const Yn = new Map([
      ["skyblock", () => ZC.e(51).then((() => ZC(38463)))]
    ]);

    function dn(CC) {
      const zC = Yn.get(CC);
      return zC ? zC().then((() => {
        const zC = (0, Kn.c)(CC);
        if (!zC) throw new Error(`${CC}'s replay hook module registered no hook`);
        return zC
      })) : null
    }
    class mn {
      constructor(CC) {
        this.deps = CC, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(CC) {
        if (this.pending.clear(), CC === this.game && null !== this.hook) return void(this.all = !0);
        const zC = ++this.generation;
        this.game = CC, this.hook = null, this.all = !1;
        const ZC = this.deps.loadHook(CC);
        null === ZC || void 0 === ZC || ZC.then((CC => {
          zC === this.generation && (this.hook = CC, this.all = !0)
        }), (CC => {
          zC === this.generation && this.deps.onError(CC)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(CC) {
        null === this.hook || this.all || this.pending.set(CC, !0)
      }
      entityInfoChanged(CC) {
        null === this.hook || this.all || this.pending.has(CC) || this.pending.set(CC, !1)
      }
      flush(CC) {
        const {
          hook: zC
        } = this;
        if (null === zC || !CC || !this.all && 0 === this.pending.size) return;
        const ZC = this.deps.cmd();
        if (null === ZC) return;
        const {
          api: QC
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: CC,
            count: zC
          } = uZ(QC, this.ids);
          this.ids = CC;
          for (let ZC = 0; ZC < zC; ZC++) this.pending.set(CC[ZC], !0)
        }
        const wC = this.ids = rZ(this.ids, this.pending.size);
        let bC = 0;
        for (const qC of this.pending.keys()) wC[bC++] = qC;
        const nC = [],
          fC = sZ(QC, wC, bC, ((CC, zC) => {
            null !== zC && nC.push({
              serverId: CC,
              info: zC,
              spawned: !0 === this.pending.get(CC)
            })
          }));
        if (fC) {
          this.pending.clear();
          for (const {
              serverId: CC,
              info: QC,
              spawned: wC
            }
            of nC) try {
            zC(QC, {
              setFacingTolerance: zC => {
                null === zC && wC || fZ(ZC, CC, zC) || this.pending.set(CC, wC)
              }
            })
          } catch (oC) {
            this.deps.onError(oC)
          }
        }
      }
    }
    var Hn = (0, zb.c)("bindings"),
      En = (0, zb.c)("module"),
      Xn = (0, zb.c)("memory"),
      cn = (0, zb.c)("trapped"),
      un = (0, zb.c)("generation"),
      rn = (0, zb.c)("loading"),
      sn = (0, zb.c)("lend"),
      Tn = (0, zb.c)("givenUp"),
      an = (0, zb.c)("afterSave"),
      tn = (0, zb.c)("opens"),
      Dn = (0, zb.c)("saveAskedAt"),
      jn = (0, zb.c)("unload"),
      yn = (0, zb.c)("dropModule"),
      Ln = (0, zb.c)("loadFailed"),
      Un = (0, zb.c)("saveReadsBody"),
      Bn = (0, zb.c)("command"),
      On = (0, zb.c)("call"),
      kn = (0, zb.c)("guard"),
      Vn = (0, zb.c)("trapOn");
    class Cf {
      constructor(CC) {
        this.deps = CC, Object.defineProperty(this, Vn, {
          value: of
        }), Object.defineProperty(this, kn, {
          value: ff
        }), Object.defineProperty(this, On, {
          value: nf
        }), Object.defineProperty(this, Bn, {
          value: bf
        }), Object.defineProperty(this, Un, {
          get: wf,
          set: void 0
        }), Object.defineProperty(this, Ln, {
          value: Qf
        }), Object.defineProperty(this, yn, {
          value: Zf
        }), Object.defineProperty(this, jn, {
          value: zf
        }), Object.defineProperty(this, Hn, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, En, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xn, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cn, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, un, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, rn, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, sn, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Tn, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, an, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tn, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Dn, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, Cb.e)(this, En)[En] && null === (0, Cb.e)(this, an)[an]
      }
      async open(CC, zC) {
        if ((0, Cb.e)(this, cn)[cn]) return NC._c.ModuleTrap;
        let ZC = (0, Cb.e)(this, Hn)[Hn];
        if (!ZC) {
          const CC = (0, Cb.e)(this, un)[un];
          (0, Cb.e)(this, rn)[rn]++;
          try {
            ZC = await this.deps.load()
          } catch (wC) {
            return (0, Cb.e)(this, rn)[rn]--, CC !== (0, Cb.e)(this, un)[un] ? "stopped" : (0, Cb.e)(this, Ln)[Ln](wC, zC)
          }
          if ((0, Cb.e)(this, rn)[rn]--, CC !== (0, Cb.e)(this, un)[un]) return (0, Cb.e)(this, Hn)[Hn] || 0 !== (0, Cb.e)(this, rn)[rn] || (0, Cb.e)(this, cn)[cn] || this.deps.unload(), "stopped";
          if ((0, Cb.e)(this, cn)[cn]) return NC._c.ModuleTrap;
          const QC = ZC.rwC(),
            bC = this.deps.core.swC();
          if (QC !== bC) return (0, Cb.e)(this, Ln)[Ln](new Error(`replay port version ${QC}, the core's ${bC}`), zC);
          (0, Cb.e)(this, Hn)[Hn] = ZC
        }
        if (!(0, Cb.e)(this, En)[En]) {
          const CC = ZC;
          if (!(0, Cb.e)(this, kn)[kn]((() => {
              (0, Cb.e)(this, En)[En] = new CC.twC, (0, Cb.e)(this, Xn)[Xn] = CC.jwC()
            }))) return NC._c.ModuleTrap
        }
        let QC = !1;
        return (0, Cb.e)(this, On)[On](((zC, ZC) => {
          null !== (0, Cb.e)(this, an)[an] && zC.step(0, 0);
          const wC = zC.stage(CC.length);
          0 !== wC && (new Uint8Array(ZC.buffer, wC, CC.length).set(CC), zC.open(), (0, Cb.e)(this, Tn)[Tn] = (0, Cb.e)(this, sn)[sn], (0, Cb.e)(this, an)[an] = null, (0, Cb.e)(this, tn)[tn]++, QC = !0)
        })) ? QC ? "opening" : NC._c.TooLarge : NC._c.ModuleTrap
      }
      beforeFrame(CC) {
        const zC = (0, Cb.e)(this, En)[En],
          ZC = (0, Cb.e)(this, Xn)[Xn];
        if (!zC || !ZC || null !== (0, Cb.e)(this, an)[an]) return;
        const {
          core: QC
        } = this.deps, wC = QC.ywC(CC);
        if (wC < 0) return;
        const bC = Math.floor(wC);
        let nC, fC;
        try {
          nC = zC.step(bC, wC - bC), fC = zC.lwC()
        } catch (qC) {
          return void(0, Cb.e)(this, Vn)[Vn](qC)
        }
        const oC = QC.uwC(1, nC);
        if (0 === oC) {
          const CC = (0, Cb.e)(this, On)[On]((CC => {
            CC.close()
          }));
          if (!CC) return;
          return (0, Cb.e)(this, Un)[Un] ? (0, Cb.e)(this, an)[an] = "drop" : (0, Cb.e)(this, yn)[yn](), void QC.LwC(NC._c.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), oC, nC).set(new Uint8Array(ZC.buffer, fC, nC))
      }
      play() {
        (0, Cb.e)(this, Bn)[Bn]((CC => {
          CC.play()
        }))
      }
      pause() {
        (0, Cb.e)(this, Bn)[Bn]((CC => {
          CC.pause()
        }))
      }
      seek(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, Cb.e)(this, Bn)[Bn]((ZC => {
          ZC.seek(CC, zC)
        }))
      }
      setMark(CC, zC) {
        return (0, Cb.e)(this, Bn)[Bn]((ZC => {
          ZC.UwC(CC, zC)
        }))
      }
      addKeyframe(CC, zC) {
        return (0, Cb.e)(this, Bn)[Bn]((ZC => {
          ZC.BwC(CC[0], CC[1], CC[2], zC[0], zC[1], zC[2])
        }))
      }
      setKeyframe(CC, zC) {
        return (0, Cb.e)(this, Bn)[Bn]((ZC => {
          ZC.OwC(CC, zC)
        }))
      }
      moveKeyframe(CC, zC) {
        return (0, Cb.e)(this, Bn)[Bn]((ZC => {
          ZC.kwC(CC, zC)
        }))
      }
      deleteKeyframes(CC, zC) {
        return (0, Cb.e)(this, Bn)[Bn]((ZC => {
          ZC.VwC(CC, zC)
        }))
      }
      crop(CC, zC) {
        return null === (0, Cb.e)(this, sn)[sn] && (0, Cb.e)(this, Bn)[Bn]((ZC => {
          ZC.crop(CC, zC)
        }))
      }
      beginSave() {
        const CC = (0, Cb.e)(this, Dn)[Dn];
        if ((0, Cb.e)(this, Dn)[Dn] = null, null !== CC && CC !== (0, Cb.e)(this, tn)[tn]) return null;
        let zC = 0,
          ZC = null;
        if ((0, Cb.e)(this, On)[On](((CC, QC) => {
            zC = CC.save(), 0 !== zC && (ZC = new Uint8Array(QC.buffer, CC.CbC(), CC.zbC()).slice())
          })), 0 === zC || !ZC) return null;
        const QC = {
          headLen: zC,
          editState: ZC,
          givenUp: () => (0, Cb.e)(this, Tn)[Tn] === QC,
          head: (CC, zC) => {
            if ((0, Cb.e)(this, sn)[sn] !== QC || !(0, Cb.e)(this, Un)[Un]) return null;
            let ZC = null;
            return (0, Cb.e)(this, On)[On](((QC, wC) => {
              const bC = QC.ZbC();
              0 !== bC && CC >= 0 && zC >= 0 && CC + zC <= bC && (ZC = new Uint8Array(wC.buffer, QC.QbC() + CC, zC))
            })), ZC
          },
          end: () => {
            if ((0, Cb.e)(this, sn)[sn] !== QC) return;
            (0, Cb.e)(this, sn)[sn] = null, (0, Cb.e)(this, Tn)[Tn] = null, (0, Cb.e)(this, On)[On]((CC => {
              CC.wbC()
            }));
            const CC = (0, Cb.e)(this, an)[an];
            (0, Cb.e)(this, an)[an] = null, "unload" === CC ? (0, Cb.e)(this, jn)[jn]() : "drop" === CC && (0, Cb.e)(this, yn)[yn]()
          }
        };
        return (0, Cb.e)(this, sn)[sn] = QC, QC
      }
      askSave() {
        (0, Cb.e)(this, Dn)[Dn] = (0, Cb.e)(this, tn)[tn]
      }
      setSpeed(CC) {
        (0, Cb.e)(this, Bn)[Bn]((zC => {
          zC.bbC(CC)
        }))
      }
      setCameraMode(CC) {
        (0, Cb.e)(this, Bn)[Bn]((zC => {
          zC.nbC(CC)
        }))
      }
      close() {
        (0, Cb.e)(this, Bn)[Bn]((CC => {
          CC.close()
        }))
      }
      stop() {
        (0, Cb.e)(this, un)[un]++, (0, Cb.e)(this, Un)[Un] && ((0, Cb.e)(this, On)[On]((CC => {
          CC.close()
        })), (0, Cb.e)(this, En)[En]) ? (0, Cb.e)(this, an)[an] = "unload" : (0, Cb.e)(this, jn)[jn]()
      }
    }

    function zf() {
      (0, Cb.e)(this, yn)[yn](), (0, Cb.e)(this, cn)[cn] || ((0, Cb.e)(this, Hn)[Hn] = null, this.deps.unload())
    }

    function Zf() {
      (0, Cb.e)(this, On)[On]((CC => {
        CC.free()
      })), (0, Cb.e)(this, En)[En] = null, (0, Cb.e)(this, Xn)[Xn] = null
    }
    async function Qf(CC, zC) {
      return await this.deps.staleOr(CC, (() => {}), {
        beforeReload: zC
      }) ? "reloading" : NC._c.ModuleLoad
    }

    function wf() {
      return null !== (0, Cb.e)(this, sn)[sn] && (0, Cb.e)(this, Tn)[Tn] !== (0, Cb.e)(this, sn)[sn]
    }

    function bf(CC) {
      return null === (0, Cb.e)(this, an)[an] && (0, Cb.e)(this, On)[On](CC)
    }

    function nf(CC) {
      const zC = (0, Cb.e)(this, En)[En],
        ZC = (0, Cb.e)(this, Xn)[Xn];
      return !(!zC || !ZC) && (0, Cb.e)(this, kn)[kn]((() => {
        CC(zC, ZC)
      }))
    }

    function ff(CC) {
      if ((0, Cb.e)(this, cn)[cn]) return !1;
      try {
        return CC(), !0
      } catch (zC) {
        return (0, Cb.e)(this, Vn)[Vn](zC), !1
      }
    }

    function of(CC) {
      if (!(CC instanceof WebAssembly.RuntimeError)) throw CC;
      (0, Cb.e)(this, cn)[cn] = !0, (0, Cb.e)(this, En)[En] = null, (0, Cb.e)(this, Xn)[Xn] = null, (0, Cb.e)(this, Hn)[Hn] = null, this.deps.crash(this.deps.markTrapped(CC)), this.deps.core.LwC(NC._c.ModuleTrap)
    }
    var qf = ZC(6490),
      Ff = ZC(40854);
    const Wf = "[bloxd-wasm-client]";
    const Nf = String(Yw);

    function Mf(CC) {
      return null === CC || CC === Nf ? void 0 : CC
    }

    function gf(CC) {
      var zC, ZC, QC, wC, bC, fC, oC;
      switch (CC.what) {
        case NC.fd.FlyingText: {
          let zC;
          try {
            zC = JSON.parse(CC.contentJson)
          } catch (qC) {
            return void console.warn(`${Wf} a replay's flying text isn't JSON`, qC)
          }
          nC.o.bp("forceFlyingMiddleMessage", {
            content: zC,
            Jb: CC.Jb,
            angle: CC.angle,
            Ib: CC.Ib
          });
          break
        }
        case NC.fd.PlayerKilled:
          (0, Ff.g)({
            kind: "killed",
            body: {
              deadEId: null !== (zC = Mf(CC.dead)) && void 0 !== zC ? zC : "",
              killerEId: Mf(CC.killer),
              withItem: null !== (ZC = CC.withItem) && void 0 !== ZC ? ZC : "",
              killstreak: CC.killstreak
            }
          });
          break;
        case NC.fd.Killfeed:
          (0, Ff.g)({
            kind: "custom",
            body: {
              killer: {
                eId: Mf(CC.killerId),
                name: null !== (QC = CC.killerName) && void 0 !== QC ? QC : void 0,
                colour: null !== (wC = CC.killerColour) && void 0 !== wC ? wC : void 0
              },
              victim: {
                eId: Mf(CC.victimId),
                name: null !== (bC = CC.victimName) && void 0 !== bC ? bC : void 0,
                colour: null !== (fC = CC.victimColour) && void 0 !== fC ? fC : void 0
              },
              withItem: null !== (oC = CC.withItem) && void 0 !== oC ? oC : ""
            }
          })
      }
    }
    const Sf = "[bloxd-wasm-client]";

    function pf(CC) {
      if (void 0 === CC || null === CC || "" === CC) return null;
      const zC = Number(CC);
      return Number.isInteger(zC) && zC > Yw && zC <= 2147483647 ? zC : null
    }

    function Pf(CC) {
      return {
        id: pf(CC.eId),
        name: "string" === typeof CC.name ? CC.name : null,
        colour: "string" === typeof CC.colour ? CC.colour : null
      }
    }

    function Gf(CC) {
      const zC = (0, Tw.l)(yZ.Bc.PlayerKilled, (zC => {
          var ZC, QC;
          const wC = (0, sw.j)(zC);
          if (!(0, sw.e)(wC)) return;
          const {
            deadEId: bC,
            killerEId: nC,
            withItem: fC,
            killstreak: oC
          } = wC;
          CC.recordPlayerKilled(null !== (ZC = pf(bC)) && void 0 !== ZC ? ZC : Yw, null !== (QC = pf(nC)) && void 0 !== QC ? QC : Yw, "number" === typeof oC ? oC : 0, "string" === typeof fC ? fC : "")
        })),
        ZC = (0, Tw.l)(yZ.Bc.CustomKillfeed, (zC => {
          const ZC = (0, sw.j)(zC);
          if (!(0, sw.e)(ZC) || !(0, sw.e)(ZC.killer) || !(0, sw.e)(ZC.victim)) return;
          const {
            killer: QC,
            victim: wC,
            withItem: bC
          } = ZC;
          CC.recordKillfeed(Pf(QC), Pf(wC), "string" === typeof bC ? bC : null)
        }));
      return () => {
        zC(), ZC()
      }
    }

    function Rf(CC) {
      var zC;
      return void 0 === CC || null === CC ? null : null !== (zC = JSON.stringify(CC)) && void 0 !== zC ? zC : null
    }

    function Af(CC) {
      let zC = null;
      const ZC = () => {
        const {
          enableClipping: ZC,
          clipDurationSeconds: wC
        } = QC.b.get("clientEscMenuOptions"), bC = `${ZC}:${wC}`;
        bC !== zC && (zC = bC, CC.recorder.setPrefs(ZC, wC))
      };
      return ZC(), (0, nC.q)("appManagerUpdated|clientEscMenuOptions", ZC)
    }
    const xf = "replayModule",
      Jf = "recorderModule";

    function If(CC, zC, ZC) {
      return function() {
        return CC.isStopped ? ZC : zC(...arguments)
      }
    }
    const vf = {
      open: () => Promise.reject(new Error(Aw.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function ef() {
      return ZC.e(64).then((() => ZC(61120)))
    }

    function hf(CC) {
      (0, Aw.f)({
        text: CC,
        type: "Error"
      })
    }
    class Kf {
      constructor(CC) {
        this.deps = CC, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: zC,
          api: QC,
          core: wC
        } = CC, bC = () => CC.memory().buffer, nC = () => zC.isStopped ? null : zC.rings.cmd, fC = If(zC, ((CC, zC) => wC.uwC(CC, zC)), 0), oC = () => wC.swC();
        let qC = null;
        this.replay = new Cf({
          core: {
            ywC: If(zC, (CC => wC.ywC(CC)), -1),
            uwC: fC,
            swC: oC,
            LwC: If(zC, (CC => {
              wC.LwC(CC)
            }), void 0)
          },
          coreBuffer: bC,
          load: async () => (qC = await ZC.e(65).then((() => ZC(61126))), qC.loadReplayModule()),
          unload: () => {
            var CC;
            null === (CC = qC) || void 0 === CC || CC.unloadReplayModule()
          },
          markTrapped: CC => qC ? qC.markReplayTrapped(CC) : new Error(String(CC)),
          staleOr: (zC, ZC, QC) => CC.staleOr(xf, zC, ZC, QC),
          crash: zC => {
            CC.reportFault(xf, zC)
          }
        });
        let FC = null;
        this.recorder = new Zn({
          core: {
            awC: If(zC, (CC => wC.awC(CC)), 0),
            EwC: If(zC, (CC => wC.EwC(CC)), 0),
            uwC: fC,
            swC: oC
          },
          coreCommand: (CC, zC) => {
            var ZC, QC;
            return null !== (ZC = null === (QC = nC()) || void 0 === QC ? void 0 : QC.writeCmd(CC, 0, zC)) && void 0 !== ZC && ZC
          },
          coreBuffer: bC,
          load: async () => (FC = await ef(), FC.loadRecorderModule()),
          prefetch: () => {
            ef().then((CC => CC.prefetchRecorderModule())).catch((CC => {
              console.warn(`${Sf} the recorder module didn't prefetch, so a save loads it:`, CC)
            }))
          },
          unload: () => {
            var CC;
            null === (CC = FC) || void 0 === CC || CC.unloadRecorderModule()
          },
          markTrapped: CC => FC ? FC.markRecorderTrapped(CC) : new Error(String(CC)),
          memoryBytes: () => {
            var CC, zC;
            return null !== (CC = null === (zC = FC) || void 0 === zC ? void 0 : zC.recorderMemoryBytes()) && void 0 !== CC ? CC : 0
          },
          staleOr: (zC, ZC) => CC.staleOr(Jf, zC, ZC),
          crash: zC => {
            CC.reportFault(Jf, zC)
          },
          allowed: () => !0 === CC.options.get("canRecordReplays"),
          failed: hf,
          events: (CC, zC) => {
            this.runtime.recorderEvents(CC, zC)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: hf,
          unixNow: () => Date.now()
        });
        const WC = new Kw({
          core: {
            iwC: If(zC, (CC => wC.iwC(CC)), 0),
            ewC: If(zC, (() => {
              wC.ewC()
            }), void 0),
            Xp: If(zC, (() => wC.Xp()), 0),
            vwC: If(zC, (() => wC.vwC()), 0)
          },
          buffer: bC,
          apiView: () => QC.apiView,
          cmd: nC,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new mn({
          api: QC,
          cmd: nC,
          loadHook: dn,
          onError: CC => {
            console.warn(`${Sf} the recorded game's replay hooks:`, CC)
          }
        });
        const NC = new rw({
          client: WC,
          buffer: bC,
          setHoldDraws: CC => {
            zC.setHoldDraws(CC)
          },
          notify: Aw.f,
          onRecorderState: () => {
            var CC;
            null === (CC = (0, Jw.g)()) || void 0 === CC || CC.recorderChanged()
          },
          onViewerChange: () => {
            var CC;
            null === (CC = (0, Jw.g)()) || void 0 === CC || CC.viewerChanged()
          },
          onReplayOption: zC => {
            ! function(CC, zC) {
              var ZC, QC;
              const wC = yZ.Lb[zC.key];
              if (void 0 === wC) return;
              let bC = null !== (ZC = zC.value) && void 0 !== ZC ? ZC : JSON.parse(JSON.stringify(null !== (QC = qf.b[wC]) && void 0 !== QC ? QC : null));
              if (null !== zC.value && zC.key < yZ.gc.Environment && "string" === typeof bC) try {
                bC = JSON.parse(bC)
              } catch (nC) {
                return void console.warn(`${Wf} a replay's ${wC} isn't JSON`, nC)
              }
              CC.applyNewClientOptions({
                [wC]: bC
              })
            }(CC.options, zC)
          },
          onReplayUiEvent: gf,
          onReplayOpened: zC => {
            this.entityHooks.opened((0, eC.Cb)(zC)), CC.replayShaderPack(zC)
          },
          meshPending: () => {
            var CC, ZC;
            return null !== (CC = null === (ZC = zC.lastHeader) || void 0 === ZC ? void 0 : ZC.renderPending) && void 0 !== CC ? CC : 0
          },
          viewerOpen: xw.c,
          download: CC => {
            (0, Gw.j)(CC)
          }
        });
        this.runtime = NC, QC.replay = NC.sink, (0, Jw.s)(NC);
        const MC = new Dw({
          live: () => {
            var CC;
            return !zC.isStopped && !0 === (null === (CC = NC.currentViewer) || void 0 === CC ? void 0 : CC.inPlayback)
          },
          cmd: nC,
          dragScale: kw
        });
        this.freecam = MC, (0, Jw.q)(MC), this.recordedOptions = function(CC, zC) {
          const ZC = yZ.Lb,
            QC = ZC.map(((ZC, QC) => zC.subscribe(ZC, (zC => {
              CC.setOption(QC, Rf(zC))
            }))));
          return {
            sendAll() {
              ZC.forEach(((ZC, QC) => {
                CC.setOption(QC, Rf(zC.get(ZC)))
              }))
            },
            stop() {
              for (const CC of QC) CC()
            }
          }
        }(NC.recorder, CC.options), this.stops = [(0, QQ.k)((CC => {
          MC.flush();
          try {
            this.replay.beforeFrame(CC)
          } catch (zC) {
            this.deps.reportFault("replayFrame", zC)
          }
        })), (0, QQ.u)(((CC, zC) => {
          try {
            this.recorder.afterFrame(), zC && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (ZC) {
            this.deps.reportFault("recorderFrame", ZC)
          }
          try {
            NC.afterFrame(CC)
          } catch (ZC) {
            this.deps.reportFault("replayRuntime", ZC)
          }
        })), Af(NC), () => {
          this.recordedOptions.stop()
        }, Gf(NC.recorder), (0, aw.k)((CC => {
          let {
            action: zC,
            down: ZC
          } = CC;
          var QC;
          ZC && (null === (QC = (0, Jw.g)()) || void 0 === QC || QC.keyDown(zC))
        }))];
        const gC = () => {
          const CC = NC.currentViewer;
          return !0 === (null === CC || void 0 === CC ? void 0 : CC.isOpen) ? CC : null
        };
        (0, Rw.g)({
          open: (CC, zC) => this.open(CC, zC),
          replayKey: () => {
            var CC, zC;
            return null !== (CC = null === (zC = gC()) || void 0 === zC ? void 0 : zC.id) && void 0 !== CC ? CC : null
          },
          saveRefusal: () => {
            var CC, zC;
            return null !== (CC = null === (zC = gC()) || void 0 === zC ? void 0 : zC.saveRefusal) && void 0 !== CC ? CC : null
          },
          encode: () => {
            var CC, zC;
            return null !== (CC = null === (zC = gC()) || void 0 === zC ? void 0 : zC.save()) && void 0 !== CC ? CC : Promise.resolve(null)
          },
          fileHandle: () => {
            var CC, zC;
            return null !== (CC = null === (zC = NC.currentViewer) || void 0 === zC ? void 0 : zC.fileHandle) && void 0 !== CC ? CC : null
          },
          markSaved: (CC, zC) => {
            var ZC;
            null === (ZC = NC.currentViewer) || void 0 === ZC || ZC.markSaved(CC, zC)
          }
        })
      }
      netEvent(CC) {
        if ("connection" === CC.type)
          if (CC.phase === NC.J.Activated) {
            this.activeConn = CC.conn;
            const zC = this.deps.sessionInfo(CC.conn);
            null !== zC && (this.runtime.activated({
              lobbyType: (0, hC.B)(zC.lobbyName),
              gameNameWithVariation: zC.gameNameWithVariation,
              lobbyName: zC.lobbyName
            }), this.recordedOptions.sendAll())
          } else CC.phase !== NC.J.Left && CC.phase !== NC.J.Closed || CC.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const CC of this.stops) CC();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Jw.k)() === this.runtime && (0, Jw.s)(null), (0, Jw.j)() === this.freecam && (0, Jw.q)(null), (0, Rw.g)(vf), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(CC, zC) {
        const {
          running: ZC
        } = this.deps;
        if (ZC.isStopped) throw new Error(Aw.c.coreStopped.text);
        if (CC.byteLength > 67108864) throw new Error(Aw.c.cantOpen.text);
        let QC;
        try {
          QC = await async function(CC) {
            const zC = await CC.loadViewer();
            return zC.inPlayback || (0, QQ.E)().leaveGame(null), zC
          }(this.runtime)
        } catch (wC) {
          throw console.warn(`${Sf} the replay viewer didn't load`, wC), new Error(Aw.c.viewerLoadFailed.text)
        }
        if (ZC.isStopped) throw new Error(Aw.c.coreStopped.text);
        await QC.open(CC, zC)
      }
    }
    var Yf = ZC(1865);

    function df(CC, zC) {
      const {
        aux: ZC,
        payload: QC
      } = function(CC) {
        return {
          aux: CC.reset ? NC.dc.ResetFirst : 0,
          payload: Hf(CC.changes)
        }
      }(zC);
      CC.queueOptions(ZC, QC) && (zC.reset && Yf.e.reset(), Yf.e.apply(zC.changes))
    }
    const mf = new TextEncoder;

    function Hf(CC) {
      const zC = new Ef;
      return Xf(zC, CC), zC.bytes()
    }
    class Ef {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(CC) {
        if (this.len + CC <= this.buf.length) return;
        const zC = new Uint8Array(Math.max(2 * this.buf.length, this.len + CC));
        zC.set(this.buf.subarray(0, this.len)), this.buf = zC, this.view = new DataView(zC.buffer)
      }
      u8(CC) {
        this.room(1), this.buf[this.len++] = CC
      }
      tagged(CC, zC, ZC) {
        this.room(1 + zC), this.buf[this.len++] = CC, 1 === zC ? this.view.setUint8(this.len, ZC) : 2 === zC ? this.view.setUint16(this.len, ZC) : this.view.setUint32(this.len, ZC), this.len += zC
      }
      signed(CC, zC, ZC) {
        this.room(1 + zC), this.buf[this.len++] = CC, 1 === zC ? this.view.setInt8(this.len, ZC) : 2 === zC ? this.view.setInt16(this.len, ZC) : this.view.setInt32(this.len, ZC), this.len += zC
      }
      f64(CC) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, CC), this.len += 8
      }
      raw(CC) {
        this.room(CC.length), this.buf.set(CC, this.len), this.len += CC.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function lf(CC, zC, ZC, QC, wC, bC, nC) {
      zC < QC ? CC.u8(ZC | zC) : null !== wC && zC < 256 ? CC.tagged(wC, 1, zC) : zC < 65536 ? CC.tagged(bC, 2, zC) : CC.tagged(nC, 4, zC)
    }

    function Xf(CC, zC) {
      switch (typeof zC) {
        case "undefined":
          return void CC.raw(uf);
        case "boolean":
          return void CC.u8(zC ? 195 : 194);
        case "number":
          return void
          function(CC, zC) {
            zC >>> 0 === zC ? zC < 128 ? CC.u8(zC) : zC < 256 ? CC.tagged(204, 1, zC) : zC < 65536 ? CC.tagged(205, 2, zC) : CC.tagged(206, 4, zC) : (zC | 0) === zC ? zC >= -32 ? CC.u8(255 & zC) : zC >= -128 ? CC.signed(208, 1, zC) : zC >= -32768 ? CC.signed(209, 2, zC) : CC.signed(210, 4, zC) : CC.f64(zC)
          }(CC, zC);
        case "string": {
          const ZC = mf.encode(zC);
          return lf(CC, ZC.length, 160, 32, 217, 218, 219), void CC.raw(ZC)
        }
        case "object":
          break;
        default:
          return void CC.u8(192)
      }
      if (null === zC) CC.u8(192);
      else if (Array.isArray(zC)) {
        lf(CC, zC.length, 144, 16, null, 220, 221);
        for (const ZC of zC) Xf(CC, ZC)
      } else if (zC instanceof Uint8Array) lf(CC, zC.length, 0, 0, 196, 197, 198), CC.raw(zC);
      else {
        const ZC = Object.keys(zC);
        lf(CC, ZC.length, 128, 0, null, 222, 223);
        for (const QC of ZC) Xf(CC, QC), Xf(CC, zC[QC])
      }
    }
    const uf = new Uint8Array([212, 0, 0]);
    var rf = ZC(42390),
      sf = ZC(42393),
      Tf = ZC(40772),
      af = ZC(40820),
      tf = ZC(2856);
    const Df = [1e3, 3e3, 9e3];
    class jf {
      constructor(CC) {
        this.host = CC, this.sets = new Map, this.table = [], this.generation = 0, this.Sg = !1
      }
      onEvent(CC) {
        const zC = function(CC) {
          if (CC.byteLength !== NC.od) return null;
          const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
          return {
            want: zC.getUint16(0, !0),
            release: zC.getUint16(2, !0)
          }
        }(CC);
        zC && !this.Sg && (zC.release !== NC.qd && this.release(zC.release), zC.want !== NC.qd && this.want(zC.want))
      }
      reset(CC) {
        if (!this.Sg) {
          for (const [CC, zC] of this.sets) "ready" === zC.state && this.releaseAll(zC.distinct), this.sets.delete(CC);
          this.table = CC, this.generation++
        }
      }
      dispose() {
        if (this.Sg) return;
        this.Sg = !0, this.generation++, this.table = [];
        const CC = [...this.sets.values()];
        this.sets.clear();
        let zC = null;
        for (const QC of CC)
          for (const CC of "ready" === QC.state ? QC.distinct : []) try {
            this.host.aZC(CC)
          } catch (ZC) {
            zC ??= {
              error: ZC
            }
          }
        if (zC) throw zC.error
      }
      isReady(CC) {
        var zC;
        return "ready" === (null === (zC = this.sets.get(CC)) || void 0 === zC ? void 0 : zC.state)
      }
      want(CC) {
        const zC = this.sets.get(CC);
        if ("loading" === (null === zC || void 0 === zC ? void 0 : zC.state)) return zC.wanted = !0, void this.capAnswer(CC, zC);
        if ("ready" === (null === zC || void 0 === zC ? void 0 : zC.state)) return void this.host.sendReady(Lf(CC, zC.images, zC.size));
        const ZC = this.table[CC];
        if (!ZC || 1 !== ZC.urls.length && ZC.urls.length !== yZ.xc.CubeFaces) return this.host.sendReady(Uf(CC)), void this.host.onLoadFailed(CC, "", new Error(`no image set ${CC}`));
        const QC = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(CC, QC), this.load(CC, ZC, QC, this.generation, 0), this.capAnswer(CC, QC)
      }
      capAnswer(CC, zC) {
        this.host.wait(4e3, (() => {
          this.sets.get(CC) === zC && zC.wanted && this.host.sendReady(Uf(CC))
        }))
      }
      load(CC, zC, ZC, QC, wC) {
        const bC = [...new Set(zC.urls)];
        Promise.allSettled(bC.map((CC => this.host.loadImage(CC, zC.orientation)))).then((nC => {
          const fC = nC.flatMap((CC => "fulfilled" === CC.status ? [CC.value] : [])),
            oC = QC === this.generation && this.sets.get(CC) === ZC,
            qC = nC.findIndex((CC => "rejected" === CC.status));
          if (!oC || !ZC.wanted) return this.Sg ? void this.releaseAfterDispose(fC.map(yf)) : (this.releaseAll(fC.map(yf)), void(oC && this.sets.delete(CC)));
          qC < 0 ? this.loaded(CC, zC, bC, fC) : (this.releaseAll(fC.map(yf)), this.host.sendReady(Uf(CC)), wC < Df.length ? this.host.wait(Df[wC], (() => {
            QC === this.generation && this.sets.get(CC) === ZC && (ZC.wanted ? this.load(CC, zC, ZC, QC, wC + 1) : this.sets.delete(CC))
          })) : (this.sets.delete(CC), this.host.onLoadFailed(CC, bC[qC], nC[qC].reason)))
        }))
      }
      loaded(CC, zC, ZC, QC) {
        const [wC] = QC, bC = [wC.width, wC.height], nC = QC.every((CC => CC.width === bC[0] && CC.height === bC[1])), fC = zC.urls.length === yZ.xc.CubeFaces;
        if (!nC || bC[0] <= 0 || bC[1] <= 0 || bC[0] > 65535 || bC[1] > 65535 || fC && bC[0] !== bC[1]) {
          this.releaseAll(QC.map(yf)), this.sets.delete(CC), this.host.sendReady(Uf(CC));
          const ZC = QC.map((CC => `${CC.width}x${CC.height}`));
          return void this.host.onLoadFailed(CC, zC.urls[0], new Error(`set ${CC}'s images can't make its texture: ${ZC.join(", ")}`))
        }
        const oC = zC.urls.map((CC => QC[ZC.indexOf(CC)].id)),
          qC = QC.map(yf);
        this.sets.set(CC, {
          state: "ready",
          images: oC,
          distinct: qC,
          size: bC
        }), this.host.sendReady(Lf(CC, oC, bC))
      }
      release(CC) {
        const zC = this.sets.get(CC);
        "loading" === (null === zC || void 0 === zC ? void 0 : zC.state) ? zC.wanted = !1: "ready" === (null === zC || void 0 === zC ? void 0 : zC.state) && (this.releaseAll(zC.distinct), this.sets.delete(CC))
      }
      releaseAll(CC) {
        for (const zC of CC) this.host.aZC(zC)
      }
      releaseAfterDispose(CC) {
        for (const zC of CC) try {
          this.host.aZC(zC)
        } catch {}
      }
    }

    function yf(CC) {
      return CC.id
    }

    function Lf(CC, zC, ZC) {
      const QC = new Uint8Array(yZ.xc.SkyImagesReadyBytes),
        wC = new DataView(QC.buffer);
      return wC.setUint16(0, CC, !0), wC.setUint16(2, zC.length, !0), wC.setUint16(4, ZC[0], !0), wC.setUint16(6, ZC[1], !0), zC.slice(0, yZ.xc.CubeFaces).forEach(((CC, zC) => {
        wC.setUint32(8 + 4 * zC, CC, !0)
      })), QC
    }

    function Uf(CC) {
      const zC = new Uint8Array(yZ.xc.SkyImagesReadyBytes),
        ZC = new DataView(zC.buffer);
      return ZC.setUint16(0, CC, !0), ZC.setUint16(2, yZ.xc.Failed, !0), zC
    }
    let Bf = Promise.resolve();
    async function Of(CC, zC) {
      let ZC;
      try {
        ZC = await (0, tf.M)(CC)
      } catch (bC) {
        throw new Tf.e("fetch", CC, {
          cause: bC
        })
      }
      const QC = Bf.then((() => async function(CC, zC) {
        const ZC = new Blob([CC.slice()]);
        let QC = await createImageBitmap(ZC, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: zC
        });
        const wC = 1024 / Math.max(QC.width, QC.height);
        if (wC < 1) {
          const CC = QC;
          try {
            QC = await createImageBitmap(CC, {
              resizeWidth: Math.max(1, Math.round(CC.width * wC)),
              resizeHeight: Math.max(1, Math.round(CC.height * wC)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            CC.close()
          }
        }
        return QC
      }(ZC, zC)));
      let wC;
      Bf = QC.catch((() => {}));
      try {
        wC = await QC
      } catch (bC) {
        throw new Tf.e("decode", CC, {
          cause: bC
        })
      }
      return {
        id: (0, Tf.o)(wC),
        width: wC.width,
        height: wC.height
      }
    }
    var kf = ZC(2063),
      Vf = ZC(33998),
      Co = ZC(39060);
    const zo = kf.g.length,
      Zo = new Set([...kf.g, "earth"]);

    function Qo(CC) {
      const zC = [],
        ZC = [],
        QC = (CC, QC) => {
          if ("custom" === QC.type) {
            ZC.push({
              id: CC,
              kind: yZ.xc.KindCustom,
              set: zC.length,
              earth: null
            });
            const wC = [QC.px, QC.py, QC.pz, QC.nx, QC.ny, QC.nz];
            zC.push({
              urls: (0, Co.i)(wC),
              orientation: "none"
            })
          } else ZC.push({
            id: CC,
            kind: yZ.xc.KindEarth,
            set: 0,
            earth: QC
          })
        };
      kf.g.forEach(((zC, ZC) => {
        var wC;
        QC(ZC, null !== (wC = wo(CC[zC])) && void 0 !== wC ? wC : Vf.m[zC])
      }));
      const wC = wo(CC.earth);
      "earth" === (null === wC || void 0 === wC ? void 0 : wC.type) && QC(zo, wC);
      const bC = new TextEncoder,
        nC = [],
        fC = [];
      for (const [MC, gC] of Object.entries(CC)) {
        const CC = Zo.has(MC) ? null : wo(gC);
        if (null === CC) continue;
        const zC = bC.encode(MC);
        zC.length > 255 ? fC.push(`Ignoring texture pack skybox ${MC}, whose name is over 255 bytes`) : nC.length === yZ.xc.MaxAdded ? fC.push(`Ignoring texture pack skybox ${MC}, past the ${yZ.xc.MaxAdded} skies a pack can add`) : (nC.push(zC), QC(yZ.xc.AddedId, CC))
      }
      const oC = zC.length;
      zC.push({
        urls: Vf.e.map((CC => Vf.h + CC)),
        orientation: "none"
      }), zC.push({
        urls: [Vf.l],
        orientation: "flipY"
      }), zC.push({
        urls: [Vf.d],
        orientation: "flipY"
      });
      const qC = yZ.xc.SkyTableHeaderBytes + ZC.length * yZ.xc.SkyTableEntryBytes,
        FC = new Uint8Array(qC + nC.reduce(((CC, zC) => CC + 1 + zC.length), 0)),
        WC = new DataView(FC.buffer);
      WC.setUint16(0, oC, !0), WC.setUint16(2, oC + 1, !0), WC.setUint16(4, oC + 2, !0), WC.setUint16(6, ZC.length, !0), ZC.forEach(((CC, zC) => {
        const ZC = yZ.xc.SkyTableHeaderBytes + zC * yZ.xc.SkyTableEntryBytes;
        WC.setUint16(ZC, CC.id, !0), WC.setUint8(ZC + 2, CC.kind);
        const QC = ZC + 4;
        CC.earth ? function(CC, zC, ZC) {
          const QC = CC;
          let wC = 0,
            bC = 0;
          for (const [nC, fC] of bo) {
            const CC = QC[nC];
            "number" === typeof CC && Number.isFinite(CC) && (zC.setFloat32(ZC + 4 * fC, CC, !0), wC |= 1 << fC)
          }
          for (const [nC, fC, oC] of no) {
            const CC = QC[nC];
            Array.isArray(CC) && 3 === CC.length && CC.every((CC => "number" === typeof CC && Number.isFinite(CC))) && (CC.forEach(((CC, QC) => {
              zC.setFloat32(ZC + oC + 4 * QC, CC, !0)
            })), wC |= fC)
          }
          fo.forEach(((CC, bC) => {
            let [nC, fC] = CC;
            const oC = QC[nC];
            "number" === typeof oC && Number.isFinite(oC) && (zC.setFloat32(ZC + yZ.A.CameraOffsetAt + 4 * bC, oC, !0), wC |= fC)
          }));
          for (const [nC, fC] of oo) {
            const CC = QC[nC];
            null !== CC && void 0 !== CC && (wC |= fC, CC && (bC |= fC >>> 14))
          }
          zC.setUint32(ZC + yZ.A.PresentAt, wC, !0), zC.setUint8(ZC + yZ.A.FlagsAt, bC)
        }(CC.earth, WC, QC) : WC.setUint16(QC, CC.set, !0)
      }));
      let NC = qC;
      for (const MC of nC) FC[NC] = MC.length, FC.set(MC, NC + 1), NC += 1 + MC.length;
      return {
        payload: FC,
        sets: zC,
        leftOut: fC
      }
    }

    function wo(CC) {
      if ("object" !== typeof CC || null === CC) return null;
      const zC = CC;
      if ("earth" === zC.type) return CC;
      return "custom" === zC.type && ["px", "py", "pz", "nx", "ny", "nz"].every((CC => {
        const ZC = zC[CC];
        return "string" === typeof ZC && ZC.length > 0
      })) ? CC : null
    }
    const bo = [
        ["inclination", yZ.A.Inclination],
        ["turbidity", yZ.A.Turbidity],
        ["luminance", yZ.A.Luminance],
        ["rayleigh", yZ.A.Rayleigh],
        ["mieCoefficient", yZ.A.MieCoefficient],
        ["mieDirectionalG", yZ.A.MieDirectionalG],
        ["distance", yZ.A.Distance],
        ["azimuth", yZ.A.Azimuth]
      ],
      no = [
        ["sunPosition", yZ.A.SunPosition, yZ.A.SunPositionAt],
        ["up", yZ.A.Up, yZ.A.UpAt],
        ["vertexTint", yZ.A.VertexTint, yZ.A.VertexTintAt]
      ],
      fo = [
        ["xCameraOffset", yZ.A.CameraOffsetX],
        ["yCameraOffset", yZ.A.CameraOffsetY],
        ["zCameraOffset", yZ.A.CameraOffsetZ]
      ],
      oo = [
        ["useSunPosition", yZ.A.UseSunPosition],
        ["dithering", yZ.A.Dithering],
        ["infiniteDistance", yZ.A.InfiniteDistance]
      ];

    function qo(CC, zC, ZC) {
      const QC = new Wo({
        writeCmd: CC,
        warn: zC,
        followPack: Fo(ZC, zC)
      });
      return QC.start(), QC
    }

    function Fo(CC, zC) {
      return ZC => {
        let QC = () => {};
        const wC = CC((CC => {
          QC(), QC = () => {}, null !== CC ? QC = CC.subscribe((CC => {
            ZC(function(CC, zC, ZC) {
              if ("object" !== typeof CC || null === CC) return null;
              const QC = CC.skyBoxes;
              if ("object" !== typeof QC || null === QC) return null;
              if ("player" === zC) return QC;
              return Object.fromEntries(Object.entries(QC).filter((CC => {
                let [zC, QC] = CC;
                return !! function(CC) {
                  if ("object" !== typeof CC || null === CC) return !1;
                  return "earth" === CC.type || Object.entries(CC).every((CC => {
                    let [zC, ZC] = CC;
                    return "type" === zC || ("" === (QC = ZC) || null !== function(CC) {
                      var zC, ZC, QC;
                      return "string" !== typeof CC ? null : null !== (zC = null === (ZC = No.exec(CC)) || void 0 === ZC || null === (QC = ZC.groups) || void 0 === QC ? void 0 : QC.base64) && void 0 !== zC ? zC : null
                    }(QC));
                    var QC
                  }))
                }(QC) || (ZC(`Ignoring texture pack skybox ${zC}, whose faces are not all data URLs`, null), !1)
              })))
            }(CC.pack, null === CC.gameSource ? "player" : "customGame", zC))
          })) : ZC(null)
        }));
        return () => {
          wC(), QC()
        }
      }
    }
    class Wo {
      constructor(CC) {
        var zC, ZC, QC;
        this.host = CC, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Sg = !1, this.wait = null !== (zC = CC.wait) && void 0 !== zC ? zC : (CC, zC) => {
          setTimeout(zC, CC)
        }, this.loader = new jf({
          loadImage: null !== (ZC = CC.loadImage) && void 0 !== ZC ? ZC : Of,
          aZC: null !== (QC = CC.aZC) && void 0 !== QC ? QC : Tf.r,
          sendReady: CC => {
            this.queue.push({
              kind: yZ.xc.SkyImagesReady,
              payload: CC
            })
          },
          onLoadFailed: (zC, ZC, QC) => {
            CC.warn(`sky image set ${zC} (${ZC}) didn't load: the last sky stays`, QC)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(af.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((CC => {
          this.write(null !== CC && void 0 !== CC ? CC : {})
        }))
      }
      onEvent(CC) {
        this.loader.onEvent(CC)
      }
      drain() {
        if (0 === this.queue.length) return;
        let CC = 0;
        for (; CC < this.queue.length && this.host.writeCmd(this.queue[CC].kind, 0, this.queue[CC].payload);) CC++;
        CC > 0 && this.queue.splice(0, CC)
      }
      dispose() {
        this.Sg = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(CC) {
        if (this.Sg) return;
        const zC = Qo(CC);
        if (!(this.written && (ZC = this.written, QC = zC, ZC.payload.length === QC.payload.length && ZC.payload.every(((CC, zC) => CC === QC.payload[zC])) && ZC.sets.length === QC.sets.length && ZC.sets.every(((CC, zC) => {
            const ZC = QC.sets[zC];
            return CC.orientation === ZC.orientation && CC.urls.length === ZC.urls.length && CC.urls.every(((CC, zC) => CC === ZC.urls[zC]))
          }))))) {
          var ZC, QC;
          for (const CC of zC.leftOut) this.host.warn(CC, null);
          this.written = zC, this.loader.reset(zC.sets), this.queue = this.queue.filter((CC => CC.kind !== yZ.xc.SkyImagesReady)), this.queue.push({
            kind: yZ.xc.SkyTable,
            payload: zC.payload
          })
        }
      }
    }
    const No = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Mo = ZC(2778),
      go = ZC(2982),
      So = ZC(267),
      po = ZC(162),
      Po = ZC(2782),
      Go = ZC(2791),
      Ro = ZC(249),
      Ao = ZC(253),
      xo = ZC(2888),
      Jo = ZC(2911),
      Io = ZC(2918),
      io = ZC(91),
      vo = ZC(296),
      eo = ZC(40662);
    class ho {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Tw.l)(GQ.P, (CC => {
          this.onReply((0, sw.h)(GQ.P, CC), performance.now())
        }))
      }
      onFrame(CC, zC) {
        null === this.id ? this.id = CC : CC !== this.id && (this.id = CC, this.sentMs = document.hidden ? null : zC)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(CC, zC) {
        CC === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(zC - this.sentMs), this.sentMs = null)
      }
      take() {
        const CC = this.roundTripMs;
        return this.roundTripMs = null, CC
      }
      stop() {
        this.stopReplies()
      }
    }
    class Ko {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(CC, zC, ZC, QC) {
        const wC = CC - this.sampled >>> 0,
          bC = zC - this.timed >>> 0,
          nC = ZC - this.frameUs >>> 0,
          fC = this.primed;
        return this.sampled = CC, this.timed = zC, this.frameUs = ZC, this.primed = !0, !(!fC || wC > 64 || bC > 64) && (QC && nC <= 1e6 * bC && (this.windowTimed += bC, this.windowUs += nC), QC && wC > 0)
      }
      reset() {}
      snapshotAndReset() {
        const CC = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: CC,
          submitToDoneMs: null
        }
      }
    }
    const Yo = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class mo {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(CC, zC) {
        const ZC = Math.min(4096, this.count + zC);
        this.samples.fill(CC, this.count, ZC), this.count = ZC
      }
      clear() {
        this.count = 0
      }
      take() {
        const CC = this.count;
        if (this.count = 0, CC < 30) return Yo;
        const zC = this.samples.subarray(0, CC).sort(),
          ZC = ZC => zC[Math.min(CC - 1, Math.floor(ZC * CC))];
        return {
          lagP50Ms: ZC(.5),
          lagP90Ms: ZC(.9)
        }
      }
    }
    class Ho {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new mo
      }
      onFrame(CC, zC) {
        const ZC = CC.headerWord(yZ.O.Pacing),
          QC = CC.headerWord(yZ.O.PacingLagUs),
          wC = (ZC >>> yZ.kb.LagsShift) - (this.word >>> yZ.kb.LagsShift) & yZ.kb.CountMask,
          bC = wC > 0 ? (QC - this.lagUs >>> 0) / wC / 1e3 : 0,
          nC = this.primed && wC <= 64 && bC <= 6e4;
        this.word = ZC, this.lagUs = QC, this.primed = !0, nC && zC && wC > 0 && 0 !== (ZC & yZ.kb.Defaulted) && this.lags.add(bC, wC)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(CC) {
        return CC ? this.lags.take() : (this.lags.clear(), Yo)
      }
    }
    var Eo = ZC(281);

    function Xo() {
      return Date.now() - performance.now()
    }
    class co {
      constructor() {
        this.rafs = 0, this.vq = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Xo(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, Eo.e)(), this.onBlur = () => {
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
        (0 === this.vq || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.vq++, this.heldAtRaf = this.rafs
      }
      words(CC) {
        const zC = CC ? this.rafs - 1 : this.rafs;
        return function(CC) {
          let zC = 0 === CC.rafs ? "raf:none" : "raf:some";
          return CC.vq > 0 && (zC += " pace:held"), CC.heldRunMs > 1e4 && (zC += " pace:stalled"), CC.blurred && (zC += " blur"), CC.resumed && (zC += " resumed"), CC.embedded && (zC += " embedded"), CC.clockGainMs > 2e3 && (zC += " clockjump"), zC
        }({
          clockGainMs: Xo() - this.startClockOffsetMs,
          rafs: zC,
          vq: this.vq,
          heldRunMs: this.vq > 0 && this.heldAtRaf === zC ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(CC) {
        this.rafs = 0, this.vq = 0, this.heldAtRaf = -1, this.startMs = CC, this.startClockOffsetMs = Xo(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var uo = ZC(34100),
      ro = ZC(2894),
      so = ZC(40723),
      To = ZC(34091),
      ao = ZC(2795),
      to = ZC(2903);
    const Do = {
      none: !0,
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

    function jo(CC) {
      return new yo(CC)
    }
    class yo {
      constructor(CC) {
        this.shell = CC, this.tracker = new Go.c, this.gpu = new Ko, this.pacing = new Ho, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new ho, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new co, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, uo.d)(CC.backend, CC.canvas, CC.adapterVendor), this.tracker.start((() => !CC.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, ao.e)("wasm", (() => {
          const {
            n: zC,
            sampleCount: ZC
          } = (0, so.h)();
          return `${CC.backend}, quality steps aim at up to ${to.d.target.maxFps} fps, pixel n ${zC}, msaa ${ZC}`
        }), (zC => {
          zC.setLoadCounts(CC.readLoadCounts), this.frameDebug = zC
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(CC) {
        var zC;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(CC), null === (zC = this.frameDebug) || void 0 === zC || zC.animationFrame()
      }
      sendsWent(CC, zC, ZC) {
        this.ping.onFrame(CC.headerWord(yZ.O.PingSent), zC), this.sendsStartMs = zC, this.sendsEndMs = ZC
      }
      frameRan(CC, zC, ZC, QC) {
        var wC;
        this.ping.onFrame(CC.headerWord(yZ.O.PingSent), ZC);
        const bC = this.tracker;
        this.pacing.onFrame(CC, bC.isSampling());
        const nC = CC.headerWord(yZ.O.TickUs) / 1e3 + (0, QQ.G)();
        var fC;
        (bC.sG(nC), null === (wC = this.frameDebug) || void 0 === wC || wC.wasmFrame(CC, zC, ZC, QC, bC.isSampling(), nC), null !== this.game) && (null === (fC = this.frameDebug) || void 0 === fC || fC.inGame());
        const oC = this.sendsStartMs >= zC ? this.sendsEndMs - this.sendsStartMs : 0,
          qC = Math.max(0, ZC - zC - nC - oC);
        if ("drawn" !== QC) return void("paced" === QC ? (this.pacedCpuMs += qC, this.stallGap.paced()) : "skipped" === QC && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(zC, !0), bC.onFrameStart(zC);
        this.gpu.onFrame(CC.headerWord(yZ.O.GpuSampled), CC.headerWord(yZ.O.GpuTimed), CC.headerWord(yZ.O.GpuFrameUs), bC.isSampling()) && bC.onGpuSampleStarted(), bC.onFrameCpu(qC + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(zC)
      }
      framePaced() {
        var CC;
        this.stallGap.paced(), null === (CC = this.frameDebug) || void 0 === CC || CC.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const CC of this.timers) clearInterval(CC);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const CC = this.shell.joinedGame();
        if (CC !== this.game) {
          var zC;
          if (this.game = CC, null !== CC) null === (zC = this.frameDebug) || void 0 === zC || zC.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== CC
      }
      checkMainStall(CC, zC) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const ZC = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          QC = this.lastDrawnMs < 0 ? 0 : CC - this.lastDrawnMs;
        this.lastDrawnMs = CC;
        const wC = !this.stallPending && QC > 5e3,
          bC = wC ? this.stallGap.words(zC) : "";
        this.stallGap.restart(CC), this.stallPending || (wC ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(QC, ZC.blockingSinceMark(), bC)
        }), 0)) : ZC.markFrame(CC))
      }
      countFpsFrame(CC) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = CC
        }
        this.fpsFrames++;
        const zC = CC - this.fpsSpanStartMs;
        if (!(zC < Io.c)) {
          if (!document.hidden) {
            const CC = 1e3 * this.fpsFrames / zC;
            this.firstSpanFps ??= CC, this.initialFps = this.firstSpanFps, this.fpsOverTime = CC
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = CC
        }
      }
      flush() {
        const CC = this.followGame(),
          {
            cpuFrameMs: zC,
            refreshHz: ZC,
            cpuBottleneck: wC,
            frameIntervalCv: bC,
            ...nC
          } = this.tracker.snapshotAndReset(),
          fC = this.shell.inGame(),
          oC = fC && this.inGameAtLastFlush,
          qC = oC ? nC : (0, Po.f)(nC),
          FC = this.pacing.snapshotAndReset(oC);
        if (this.inGameAtLastFlush = fC, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !CC) return;
        const WC = performance.now(),
          MC = (0, Jo.u)((0, Jo.r)(WC), this.unsentPage),
          SC = function(CC, zC, ZC, wC, bC, nC, fC, oC) {
            var qC, FC, WC, NC, MC;
            const gC = {},
              {
                canvas: SC
              } = CC,
              pC = (0, xo.k)({
                refreshHz: zC.refreshHz,
                msaa: CC.msaa(),
                autoMsaaOff: (0, To.c)()
              });
            for (const PC of (0, go.e)()) {
              const GC = PC.name;
              let RC;
              if ((0, So.t)(GC)) RC = (0, Jo.b)(GC);
              else if ((0, Jo.i)(GC)) RC = oC[GC];
              else if ((0, xo.l)(GC)) RC = pC[GC];
              else switch (GC) {
                case "fps":
                  RC = wC;
                  break;
                case "bf":
                  RC = bC;
                  break;
                case "Nf":
                  RC = (0, ro.D)((0, so.h)().n);
                  break;
                case "Mf":
                  RC = Math.max(SC.width, SC.height);
                  break;
                case "gf":
                  RC = Math.min(SC.width, SC.height);
                  break;
                case "Sf":
                  RC = navigator.hardwareConcurrency || null;
                  break;
                case "pf":
                  RC = (0, Uw.getWebGpuSupported)();
                  break;
                case "Pf":
                  RC = null === CC.fallbackReason ? null : Do[CC.fallbackReason];
                  break;
                case "Gf":
                  RC = zC.cpuFrameMs;
                  break;
                case "Rf":
                  RC = zC.refreshHz;
                  break;
                case "Af":
                  RC = zC.cpuBottleneck;
                  break;
                case "xf":
                  RC = zC.frameIntervalCv;
                  break;
                case "Jf":
                  RC = zC.frameMs;
                  break;
                case "vf":
                  RC = zC.tickMs;
                  break;
                case "Yf":
                  RC = zC.mainBusyShare;
                  break;
                case "df":
                  RC = zC.mainProbeDelayMs;
                  break;
                case "ef":
                  RC = zC.longAnimationFramesPerMin;
                  break;
                case "hf":
                  RC = zC.longAnimationFrameTimeShare;
                  break;
                case "Kf":
                  RC = zC.longAnimationFrameScriptShare;
                  break;
                case "mf":
                  RC = zC.gpuPassMs;
                  break;
                case "Hf":
                  RC = zC.gpuSubmitToDoneMs;
                  break;
                case "Ef":
                  RC = ZC.lagP50Ms;
                  break;
                case "lf":
                  RC = ZC.lagP90Ms;
                  break;
                case "Uf":
                  RC = (0, Mo.h)(nC);
                  break;
                case "Wf":
                  RC = fC;
                  break;
                case "Xf":
                case "uf":
                case "rf":
                case "sf":
                case "Tf":
                case "af":
                case "tf":
                case "Df":
                case "jf":
                case "yf":
                case "Lf":
                case "Bf":
                case "kf":
                case "Vf":
                case "Co":
                  RC = null;
                  break;
                case "Go":
                  RC = (0, Uw.getPlatformType)();
                  break;
                case "Ro":
                  RC = (0, Uw.getGpuVendor)();
                  break;
                case "Ao":
                  RC = eo.d[CC.backend];
                  break;
                case "xo":
                  RC = (0, io.c)();
                  break;
                case "Jo":
                  RC = (0, Uw.getOperatingSystem)();
                  break;
                case "Io":
                  RC = (0, Uw.getTrafficSource)();
                  break;
                case "vo":
                  RC = null !== (qC = QC.b.get("gameEntrySource")) && void 0 !== qC ? qC : po.e;
                  break;
                case "eo":
                  RC = null !== (FC = zC.frameLimiter) && void 0 !== FC ? FC : po.e;
                  break;
                case "ho":
                  RC = (0, Ro.k)();
                  break;
                case "Ko":
                  RC = null !== (WC = (0, Ao.b)()) && void 0 !== WC ? WC : po.e;
                  break;
                case "Yo":
                  RC = (0, Ro.e)(SC.width, SC.height);
                  break;
                case "Ho":
                  RC = (0, go.g)(-(new Date).getTimezoneOffset());
                  break;
                case "uo":
                  RC = null !== (NC = CC.fallbackReason) && void 0 !== NC ? NC : po.e;
                  break;
                case "Do":
                  RC = "ready";
                  break;
                case "jo":
                  RC = (0, Uw.getSoftwareRenderer)();
                  break;
                case "Xo":
                  RC = null !== CC.shaderPackReach() ? "true" : "false";
                  break;
                case "yo":
                  RC = null !== (MC = CC.shaderPackReach()) && void 0 !== MC && MC.sceneDepth ? "true" : "false";
                  break;
                case "Lo": {
                  const zC = CC.shaderPackReach();
                  RC = null !== zC && void 0 !== zC && zC.sunShadow ? "all" : null !== zC && void 0 !== zC && zC.airShadow ? "air" : "none";
                  break
                }
                case "Uo":
                  RC = vo.D;
                  break;
                case "Eo": {
                  const zC = CC.lS();
                  RC = null === zC ? po.e : String(zC);
                  break
                }
                case "ro":
                case "ao":
                  RC = po.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${GC}`)
              }
              if (void 0 === RC) throw new Error(`Metric ${GC} has no value`);
              gC[GC] = RC
            }
            return gC
          }(this.shell, {
            cpuFrameMs: zC,
            refreshHz: ZC,
            cpuBottleneck: wC,
            frameIntervalCv: bC,
            ...qC
          }, FC, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), MC);
        if (! function(CC, zC, ZC) {
            return (0, Dz.b)(), CC(gC.l.Send, zC, ZC)
          }(this.shell.writeCmd, NC.ld, function(CC) {
            const zC = (0, XC.f)((0, Lz.f)(CC)),
              ZC = new Uint8Array(gC.ne.BYTES + zC.length);
            return new DataView(ZC.buffer).setUint16(0, Lz.b.AnalyticsUpdate, !0), ZC.set(zC, gC.ne.BYTES), ZC
          }(SC))) return this.unsentPage = MC, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Mo.d), (0, Jo.o)(SC, "wasm", WC)
      }
    }
    var Lo = ZC(39426);

    function Uo(CC, zC, ZC) {
      const QC = new Map;
      return (0, Lo.e)(((CC, ZC, QC) => zC.SF(CC, ZC, QC)), ((zC, ZC, wC) => {
        const bC = `${zC},${ZC},${wC}`;
        return QC.has(bC) || QC.set(bC, (0, uz.e)(CC, zC, ZC, wC)), QC.get(bC)
      }), ZC)
    }
    var Bo = ZC(39432),
      Oo = ZC(40717);

    function ko(CC) {
      const zC = null !== CC && 0 !== (gC.w.playerFlags(CC.api.apiView, 0) & gC.ce.CursorAim);
      zC !== (0, Oo.o)() && (0, Oo.J)(zC, null !== CC)
    }

    function Vo(CC) {
      return (0, PQ.e)(GQ.H, CC)
    }
    var Cq = ZC(40858);
    const zq = new bC.e((CC => ZC(42396)(`./${CC}/${CC}Client`)));
    let Zq = null,
      Qq = null;
    async function wq(CC) {
      Zq ??= ZC.e(27).then((() => ZC(38976))).then((CC => {
        Qq = CC.createDefaultClientPlugins
      }), (CC => {
        throw Zq = null, CC
      })), await Promise.all([zq.load(CC), Zq])
    }

    function bq(CC) {
      CC.load(new lz(DQ, new LQ))
    }
    let nq = !1;
    const fq = new WeakMap;

    function oq(CC) {
      try {
        CC()
      } catch (zC) {
        console.error("[bloxd-wasm-client] a session-end step failed", zC)
      }
    }

    function qq(CC, zC) {
      ! function() {
        var CC, zC;
        TQ.Howler.volume();
        const ZC = TQ.Howler;
        null === (CC = ZC._autoResume) || void 0 === CC || CC.call(ZC), null === (zC = ZC._autoSuspend) || void 0 === zC || zC.call(ZC)
      }(), zC.audio.prepare();
      const ZC = new AC(zC.core, zC.memory, zC.audio);
      let bC;
      try {
        bC = new Sw(ZC, zC.options)
      } catch (NC) {
        return CC.crash(Pw.x, NC), null
      }(0, oC.e)(pw(ZC, bC));
      const FC = new Kf({
        running: CC,
        api: ZC,
        core: zC.core,
        memory: zC.memory,
        staleOr: zC.staleOr,
        reportFault: zC.reportReplayFault,
        options: zC.options,
        sessionInfo: zC.sessionInfo,
        replayShaderPack: zC.replayShaderPack
      });
      (0, QQ.w)();
      const WC = new lQ({
        api: ZC,
        tables: bC,
        sessionInfo: zC.sessionInfo,
        gameFactory: CC => zq.loadedFactory(CC),
        defaultPlugins: (CC, zC, ZC, QC) => {
          if (null === Qq) throw new Error("The default plugins started before they loaded");
          return Qq(CC, zC, ZC, QC)
        },
        serverOptions: zC.options,
        onNetEvent: CC => {
          FC.netEvent(CC), zC.onNetEvent(CC)
        },
        setLocalOptions: zC => {
          df(CC, {
            changes: zC,
            reset: !1
          })
        },
        playSound: (CC, ZC, QC, wC, bC, nC, fC) => zC.audio.playGame(CC, ZC, QC, wC, bC, nC, fC),
        preloadSounds: CC => {
          zC.audio.preload(function(CC) {
            const zC = [];
            for (const ZC of CC) {
              const CC = Hz(ZC);
              CC >= 0 && zC.push(Gz[CC])
            }
            return zC
          }(CC))
        },
        onSessionEnd: () => {
          oq(wC.o), oq(zw), oq((() => {
            QC.b.set({
              openInGameMenuName: null
            })
          })), oq((() => {
            zC.audio.endSession()
          }))
        },
        beforeWrite: zC.beforeWrite,
        beforeOp: zC.beforeOp,
        cameraScreen: Cw,
        showCameraFacing: Zw,
        onEventOverflow: zC.onEventOverflow,
        screenBandY: fC.n,
        replayEntities: FC.entityHooks,
        hasPackModel: zC.hasPackModel
      });
      return WC.attach(CC), fq.set(WC, FC), rQ(WC.items, zC.audio),
        function(CC) {
          CC.setClientFreeCameraGrant("isDev", !1);
          const zC = zC => {
            CC.setClientFreeCameraGrant("hasDeveloperRank", zC.playerHasRank("developer"))
          };
          (0, nC.q)("userContextUpdated", zC)
        }(WC), nq || (nq = !0, (0, nC.q)("appManagerUpdated|openInGameMenuName", (CC => {
          !CC && (0, qC.p)().includes(qC.e) && (0, qC.s)(qC.e)
        }))), WC
    }

    function Fq(CC) {
      try {
        CC.closeGame()
      } finally {
        var zC;
        null === (zC = fq.get(CC)) || void 0 === zC || zC.stop(), fq.delete(CC)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);