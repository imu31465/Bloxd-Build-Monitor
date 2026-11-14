export const id = 45;
export const ids = [45];
export const modules = {
  40030: (WW, RW, MW) => {
    var wW = {
      "./bedwars/bedwarsClient": [37238, 8],
      "./bridgeBattle/bridgeBattleClient": [37243, 9],
      "./buildAFactory2/buildAFactory2Client": [36547, 62, 60, 199, 215, 10],
      "./classic/classicClient": [37251, 11],
      "./clutch/clutchClient": [37254, 12],
      "./cooking/cookingClient": [37256, 13],
      "./defusal/defusalClient": [37262, 14],
      "./frontline/frontlineClient": [37264, 62, 60, 15],
      "./goalRush/goalRushClient": [37272, 16],
      "./luckyBedwars/luckyBedwarsClient": [37276, 17],
      "./ninetyNineNights/ninetyNineNightsClient": [37284, 18],
      "./oneBlock/oneBlockClient": [37287, 19],
      "./pvpCiv/pvpCivClient": [37289, 20],
      "./skyIslands/skyIslandsClient": [37297, 21],
      "./skyblock/skyblockClient": [36575, 62, 174, 22],
      "./tsunami/tsunamiClient": [37305, 23]
    };

    function CW(WW) {
      if (!MW.o(wW, WW)) return Promise.resolve().then((() => {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }));
      var RW = wW[WW],
        CW = RW[0];
      return Promise.all(RW.slice(1).map(MW.e)).then((() => MW(CW)))
    }
    CW.keys = () => Object.keys(wW), CW.id = 40030, WW.exports = CW
  },
  34716: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      f: () => zR
    });
    let wW = !1;

    function CW() {
      return wW
    }

    function zR(WW) {
      return wW !== WW && (wW = WW, !0)
    }
  },
  37020: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      c: () => CW
    });
    var wW = MW(33);

    function CW(WW) {
      return "refetchCode" === WW || "devDownloadJson" === WW || WW.startsWith("Plugin")
    }

    function zR(WW, RW) {
      "refetchCode" !== WW ? "Plugin|MobAiPlugin|ShowPetUi" !== WW ? Promise.all([MW.e(89), MW.e(90), MW.e(86), MW.e(190)]).then((() => MW(39205))).then((MW => {
        let {
          runClientGameMessage: wW
        } = MW;
        wW(WW, RW)
      })).catch((RW => {
        console.error(`Game message ${WW} failed`, RW)
      })) : wW.k.Sz("showPetUi", RW) : wW.k.Sz("refetchCode")
    }
  },
  40011: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      g: () => CW
    });
    const wW = ["recording", "freecam", "keyframe"];

    function CW() {
      const WW = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(WW[1]) << 32n | BigInt(WW[0])
    }
  },
  8103: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      c: () => yR
    });
    var wW = MW(27);
    const CW = 24,
      zR = "farNametags",
      AW = 1e5;

    function bR() {
      var WW;
      return null === (WW = wW.b.get("showDistantNametags")) || void 0 === WW || WW
    }

    function yR() {
      var WW;
      return null !== (WW = function() {
        const WW = new URLSearchParams(window.location.search).get(zR),
          RW = null === WW || "" === WW ? NaN : Number(WW);
        return Number.isFinite(RW) && RW >= 0 ? Math.min(RW, AW) : null
      }()) && void 0 !== WW ? WW : bR() ? 0 : CW
    }
  },
  40003: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      blockIdOf: () => yN.e,
      clearWasmCameraScreen: () => Lw,
      creativeItemIds: () => Rw.creativeItemIds,
      decodeMapSettings: () => By,
      drainTextRerasters: () => Pb.d,
      enchantmentPerksOf: () => Rw.enchantmentPerksOf,
      endGameHost: () => ly,
      followCursorAim: () => ey,
      followMenuPrefs: () => uC,
      loadAudio: () => Yy,
      loadClientGame: () => iN,
      loadTextIcons: () => Pb.g,
      rasterText: () => Jb.b,
      readBoardToEdit: () => bN,
      setTextHost: () => Pb.j,
      setTextLocalPlayer: () => Pb.l,
      showInCreativeInvenOf: () => Rw.showInCreativeInvenOf,
      startGameHost: () => oy,
      startShellAnalytics: () => Cy,
      startSkyFeed: () => my,
      textChanged: () => Pb.q,
      warmText: () => Jb.c,
      wasmCameraScreen: () => Gw
    });
    MW(34723);
    var wW = MW(27),
      CW = MW(34998),
      zR = MW(37132),
      AW = MW(33),
      bR = MW(34745),
      yR = MW(34995),
      NW = MW(1115),
      eW = MW(548),
      BW = MW(36316),
      tR = MW(3773),
      TW = MW(38182),
      gR = MW(38149);
    const iR = gR.Ob / 4,
      YW = gR.n.PlaySound,
      JW = gR.n.SoundReset,
      PW = tR.N.ReplayFailed,
      IW = tR.N.RecorderEvent;
    class oW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = WW, this.memory = RW, this.audio = MW, this.serverIds = new Int32Array(256).fill(gR.id), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(gR.r.BYTES)), this.renderPtr = 0, this.aR = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new gR.$(WW, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.oeW(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(WW, RW) {
        const MW = this.eventView();
        return new Uint8Array(MW.buffer, MW.byteOffset + WW, RW)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return gR.r.localId(this.apiView, 0)
      }
      localDeaths() {
        return gR.r.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const WW = this.apiView,
          RW = gR.r.entRenderPtr(WW, 0),
          MW = gR.r.entVisPtr(WW, 0),
          wW = gR.r.entCapacity(WW, 0);
        if (RW !== this.renderPtr || MW !== this.visPtr || wW !== this.aR || this.renderBuffer !== this.buffer) {
          this.renderPtr = RW, this.visPtr = MW, this.aR = wW, this.renderBuffer = this.buffer;
          const WW = this.memoryView(Float32Array, RW, wW * iR, "the render array"),
            CW = this.memoryView(Uint8Array, MW, wW, "the visibility array");
          this.renderCapacity = WW && CW ? wW : 0, this.render = WW && CW ? WW : new Float32Array(0), this.vis = WW && CW ? CW : new Uint8Array(0)
        }
      }
      memoryView(WW, RW, MW, wW) {
        try {
          return (0, TW.q)(WW, this.memory().buffer, RW, MW, wW)
        } catch (CW) {
          return this.keepCorruption(CW), null
        }
      }
      memoryData(WW, RW, MW, wW) {
        try {
          return (0, TW.g)(this.memory().buffer, WW, RW, MW, wW)
        } catch (CW) {
          return this.keepCorruption(CW), null
        }
      }
      reportCorruption(WW) {
        this.keepCorruption(new TW.c(WW))
      }
      keepCorruption(WW) {
        if (!(WW instanceof TW.c)) throw WW;
        this.corruption ??= WW
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(WW, RW, MW) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: wW,
          len: CW
        } = WW;
        this.eventsPtr = wW, this.eventsLen = CW, this.eventsBuffer = null;
        const zR = this.eventView();
        for (let NW = 0; NW < CW;) {
          const WW = zR.getUint32(NW, !0),
            MW = 65535 & WW,
            wW = WW >>> 16,
            CW = NW + tR.J;
          if (MW === gR.n.EntitySpawned) {
            var AW;
            if (wW !== gR.Qb.BYTES) throw rR(MW, NW, wW);
            const WW = gR.Qb.serverId(zR, CW);
            this.spawned(WW, gR.Qb.index(zR, CW), gR.Qb.kind(zR, CW)), null === (AW = RW.entityAdded) || void 0 === AW || AW.call(RW, WW)
          } else if ((MW === gR.n.ChunkSlot || MW === gR.n.EntityInfoChanged) && !(0, gR.le)(MW, zR, CW, wW, RW)) throw rR(MW, NW, wW);
          NW = CW + (0, tR.Md)(wW)
        }
        try {
          var bR;
          null === (bR = RW.afterPrescan) || void 0 === bR || bR.call(RW), this.throwCorruption(), !MW() && this.dispatch(WW, RW, MW) && (this.throwCorruption(), this.applyListener(), RW.afterWalk(WW.kind)), this.throwCorruption()
        } catch (yR) {
          throw yR instanceof TW.c && (this.corruption ??= yR), yR
        } finally {
          MW() || null !== this.corruption || this.applyDespawns(CW, RW)
        }
      }
      applyDespawns(WW, RW) {
        const MW = this.eventView();
        for (let CW = 0; CW < WW;) {
          const WW = MW.getUint32(CW, !0),
            zR = CW + tR.J;
          if ((65535 & WW) === gR.n.EntityDespawned && WW >>> 16 === gR.Qb.BYTES) {
            const WW = gR.Qb.serverId(MW, zR);
            var wW;
            if (this.despawned(WW, gR.Qb.index(MW, zR))) null === (wW = RW.entityRemoved) || void 0 === wW || wW.call(RW, WW)
          }
          CW = zR + (0, tR.Md)(WW >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(WW, RW, MW) {
        const {
          len: wW,
          net: CW,
          netOffsets: zR
        } = WW;
        let AW = this.eventView(),
          bR = 0;
        for (let FW = 0; FW < wW;) {
          const WW = AW.getUint32(FW, !0),
            wW = 65535 & WW,
            fW = WW >>> 16,
            cR = FW + tR.J;
          let XW = !1;
          if (bR < CW.length && zR[bR] === FW) RW.netEvent(CW[bR]), bR++, XW = !0;
          else if (wW === tR.N.LocalPlayerBound) {
            var yR;
            if (fW !== tR.ob) throw rR(wW, FW, fW);
            null === (yR = RW.localPlayerBound) || void 0 === yR || yR.call(RW, AW.getInt32(cR, !0)), XW = !0
          } else if (wW === tR.N.LocalHurt) {
            var NW;
            if (fW !== tR.mb) throw rR(wW, FW, fW);
            null === (NW = RW.localHurt) || void 0 === NW || NW.call(RW, AW.getInt32(cR, !0), AW.getFloat32(cR + 4, !0), AW.getUint32(cR + 8, !0)), XW = !0
          } else if (wW === tR.N.AttackHit) {
            var eW;
            if (fW !== tR.d) throw rR(wW, FW, fW);
            const WW = AW.getFloat32(cR, !0),
              MW = AW.getFloat32(cR + 4, !0),
              CW = AW.getFloat32(cR + 8, !0),
              zR = AW.getUint32(cR + 12, !0);
            null === (eW = RW.attackHit) || void 0 === eW || eW.call(RW, WW, MW, CW, 0 !== (zR & tR.i.Crit), 0 !== (zR & tR.i.HitSelf))
          } else if (wW === tR.N.PhysicsType) {
            var BW;
            if (fW !== tR.Mb) throw rR(wW, FW, fW);
            null === (BW = RW.physicsType) || void 0 === BW || BW.call(RW, AW.getUint32(cR, !0), AW.getInt32(cR + 4, !0)), XW = !0
          } else if (wW === tR.N.VehicleEffect) {
            var TW;
            const WW = QW(AW, cR, fW);
            if (null === WW) throw rR(wW, FW, fW);
            null === (TW = RW.vehicleEffect) || void 0 === TW || TW.call(RW, WW.op, WW.name, WW.icon, WW.level, WW.durationMs), XW = !0
          } else if (wW === tR.N.ZoomChanged) {
            var iR;
            if (fW !== tR.xd) throw rR(wW, FW, fW);
            null === (iR = RW.zoomChanged) || void 0 === iR || iR.call(RW, AW.getFloat32(cR, !0), AW.getUint8(cR + 4)), XW = !0
          } else if (wW === tR.N.ZoomDisabled) {
            var oW;
            if (0 !== fW) throw rR(wW, FW, fW);
            null === (oW = RW.zoomDisabled) || void 0 === oW || oW.call(RW), XW = !0
          } else if (wW === tR.N.GameCamera) {
            var lW;
            null === (lW = RW.gameCamera) || void 0 === lW || lW.call(RW, new Uint8Array(AW.buffer, AW.byteOffset + cR, fW).slice()), XW = !0
          } else if (wW === gR.n.ChunkSlot || wW === gR.n.EntityInfoChanged);
          else if (wW >= YW && wW <= JW) {
            if (this.audio && !this.audio.onAudioEvent(wW, AW, cR, fW)) throw rR(wW, FW, fW)
          } else if (wW >= PW && wW <= IW) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(wW, AW, cR, fW)) throw rR(wW, FW, fW);
              XW = !0
            }
          } else if (wW >= gR.zd && wW <= gR.Dd && wW !== tR.N.EnvLighting) {
            if (!(0, gR.le)(wW, AW, cR, fW, RW)) throw rR(wW, FW, fW);
            XW = !0
          }
          if (XW) {
            if (MW()) return !1;
            AW = this.eventView()
          }
          FW = cR + (0, tR.Md)(fW)
        }
        return !MW()
      }
      applyListener() {
        var WW;
        if (!this.audio) return;
        const RW = gR.r.audioViewPtr(this.apiView, 0),
          MW = this.memory().buffer;
        let wW = this.audioView;
        (null === (WW = wW) || void 0 === WW ? void 0 : WW.buffer) === MW && wW.byteOffset === RW || (wW = (0, TW.g)(MW, RW, gR.v.BYTES, 8, "the audio view"), this.audioView = wW), wW && this.audio.applyListener(wW)
      }
      indexOf(WW) {
        return this.indexById.get("number" === typeof WW ? WW : +WW)
      }
      isLocal(WW) {
        return WW !== gR.id && WW === gR.r.localId(this.apiView, 0)
      }
      yX(WW) {
        const RW = [0, 0, 0];
        return this.readPosition("number" === typeof WW ? WW : +WW, RW) ? RW : null
      }
      readPosition(WW, RW) {
        const MW = this.apiView;
        if (void 0 !== this.indexById.get(WW) && this.isLocal(WW)) {
          for (let WW = 0; WW < 3; WW++) RW[WW] = gR.r.localPos(MW, 0, WW);
          return !0
        }
        return this.readDrawnPosition(WW, RW)
      }
      readDrawnPosition(WW, RW) {
        const MW = this.apiView,
          wW = this.indexById.get(WW);
        if (void 0 === wW || wW >= this.renderCapacity) return RW[0] = RW[1] = RW[2] = NaN, !1;
        const CW = wW * iR;
        for (let zR = 0; zR < 3; zR++) RW[zR] = this.render[CW + zR] + gR.r.origin(MW, 0, zR);
        return !0
      }
      checkValid(WW) {
        return void 0 !== this.indexOf(WW)
      }
      isAlive(WW) {
        const RW = this.indexOf(WW);
        if (void 0 === RW) return null;
        if (this.ensureViews(), RW >= this.renderCapacity) return null;
        const MW = this.vis[RW];
        return 0 === MW ? null : 0 !== (MW & gR.he.Alive)
      }
      getEntityType(WW) {
        const RW = this.indexOf(WW);
        return void 0 === RW ? this.isLocal("number" === typeof WW ? WW : +WW) ? "Player" : null : FW(this.kinds[RW])
      }
      spawned(WW, RW, MW) {
        if (RW >= 1048576) throw new TW.c(`entity ${WW} spawned at index ${RW}`);
        this.ensureIndex(RW), this.serverIds[RW] === WW && null !== this.idStr[RW] || (this.idStr[RW] = String(WW)), this.serverIds[RW] = WW, this.kinds[RW] = MW, this.indexById.set(WW, RW)
      }
      despawned(WW, RW) {
        let MW = !1;
        return this.indexById.get(WW) === RW && (this.indexById.delete(WW), MW = !0), RW < this.serverIds.length && this.serverIds[RW] === WW && (this.serverIds[RW] = gR.id, this.kinds[RW] = 0, this.idStr[RW] = null), MW
      }
      ensureIndex(WW) {
        const RW = this.serverIds.length;
        if (WW < RW) return;
        let MW = 2 * RW;
        for (; MW <= WW;) MW *= 2;
        const wW = new Int32Array(MW).fill(gR.id);
        wW.set(this.serverIds), this.serverIds = wW;
        const CW = new Uint16Array(MW);
        CW.set(this.kinds), this.kinds = CW;
        for (let zR = RW; zR < MW; zR++) this.idStr.push(null)
      }
      eventView() {
        const WW = this.memory().buffer;
        return WW !== this.eventsBuffer && (this.eventsBuffer = WW, this.events = new DataView(WW, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const WW = this.memory().buffer;
        this.buffer = WW, this.viewPtr < 0 && (this.viewPtr = this.core.leW()), this.view = new DataView(WW, this.viewPtr, gR.r.BYTES), this.rereadDirectory()
      }
    }

    function lW(WW) {
      return WW >>> gR.c === gR.o.Item
    }

    function FW(WW) {
      var RW, MW;
      const wW = WW & gR.e;
      switch (WW >>> gR.c) {
        case gR.o.Lifeform:
          return null !== (RW = eW.i[wW]) && void 0 !== RW ? RW : null;
        case gR.o.Throwable:
          return null !== (MW = BW.o[wW]) && void 0 !== MW ? MW : null;
        case gR.o.Mesh:
          return "Mesh";
        case gR.o.Audio:
          return "AudioEntity";
        case gR.o.Item:
          return "Item";
        default:
          return null
      }
    }
    const fW = new TextDecoder;

    function QW(WW, RW, MW) {
      if (MW < tR.bd.HEAD_BYTES) return null;
      const wW = WW.getUint32(RW, !0),
        CW = WW.getUint32(RW + 20, !0),
        zR = WW.getUint32(RW + 24, !0),
        AW = tR.bd.HEAD_BYTES + (0, tR.Md)(CW);
      if (wW !== tR.bd.UPDATE && wW !== tR.bd.REMOVE || CW > MW || AW + zR > MW) return null;
      const bR = (MW, wW) => fW.decode(new Uint8Array(WW.buffer, WW.byteOffset + RW + MW, wW)),
        yR = WW.getFloat64(RW + 12, !0);
      return {
        op: wW,
        level: WW.getFloat64(RW + 4, !0),
        durationMs: Number.isNaN(yR) ? null : yR,
        name: bR(tR.bd.HEAD_BYTES, CW),
        icon: bR(AW, zR)
      }
    }

    function rR(WW, RW, MW) {
      return new TW.c(`event ${WW} at ${RW} of ${MW} bytes`)
    }
    var cR = MW(284),
      XW = MW(1053),
      jR = MW(37020),
      kR = MW(1556),
      aR = MW(38202),
      sW = MW(1050),
      dW = MW(37147),
      pW = MW(37174),
      hW = MW(37158),
      UW = MW(38143),
      EW = MW(1945),
      VW = MW(37143),
      mR = MW(37172);
    const xR = Math.max(gR.Eb.BYTES, gR.xb.BYTES, gR.Bb.BYTES);

    function vR(WW) {
      if (!(0, mR.e)(WW)) return null;
      const RW = Number(WW);
      return (0 | RW) === RW ? RW : null
    }
    class KW {
      constructor(WW) {
        this.api = WW, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, VW.l)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.XE = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = gR.id, this.localName = String(gR.id), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.XE = null;
        const WW = this.api.queries.directorView() >= gR.Eb.BYTES ? this.scratchView() : null;
        null !== WW && (this.defaultFov = (0, sW.w)(gR.Eb.fov(WW, 0)), this.baseFov = (0, sW.w)(gR.Eb.baseFov(WW, 0)), this.aspect = gR.Eb.aspect(WW, 0), this.bodyHeading = gR.Eb.bodyHeading(WW, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(WW) {
        this.viewHeading = WW
      }
      get localPlayerId() {
        const WW = gR.r.localId(this.api.apiView, 0);
        return WW !== this.localId && (this.localId = WW, this.localName = String(WW)), this.localName
      }
      getEntityPosition(WW) {
        return this.readEntity(WW) ? this.entityFeet : null
      }
      getEntityAimPoint(WW) {
        return this.readEntity(WW) ? this.entityAim : null
      }
      getEntityHeading(WW) {
        const RW = vR(WW);
        if (null === RW) return null;
        const MW = gR.r.localId(this.api.apiView, 0);
        return RW === MW && MW !== gR.id ? this.viewHeading : this.readEntity(WW) ? this.entityHeading : null
      }
      raycastTerrain(WW, RW, MW) {
        const wW = this.api.queries.cameraSweep(WW[0], WW[1], WW[2], RW[0], RW[1], RW[2], MW);
        return wW < MW - 1e-6 ? wW : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const WW = this.defaultPose;
        WW.fov = this.defaultFov;
        const RW = this.api.queries.directorDefaultPose() >= gR.xb.BYTES ? this.scratchView() : null;
        if (null === RW) return WW;
        for (let MW = 0; MW < 3; MW++) WW.position[MW] = gR.xb.eye(RW, 0, MW);
        return WW.heading = gR.xb.heading(RW, 0), WW.pitch = gR.xb.pitch(RW, 0), WW
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
      readEntity(WW) {
        const RW = vR(WW);
        if (null === RW) return !1;
        if (RW === this.XE) return this.entityLive;
        this.XE = RW;
        const MW = this.api.queries.directorEntity(RW) >= gR.Bb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== MW, null === MW) return !1;
        for (let wW = 0; wW < 3; wW++) this.entityFeet[wW] = gR.Bb.feet(MW, 0, wW), this.entityAim[wW] = this.entityFeet[wW];
        return this.entityAim[1] += gR.Bb.eyeHeight(MW, 0), this.entityHeading = gR.Bb.heading(MW, 0), !0
      }
      scratchView() {
        const WW = this.api.scratch(),
          RW = this.api.memory().buffer,
          MW = this.scratch;
        return null !== MW && MW.buffer === RW && MW.byteOffset === WW ? MW : (this.scratch = this.api.memoryData(WW, xR, 8, "the director's record"), this.scratch)
      }
    }
    const uW = {
        mode: "default"
      },
      OW = {
        show: () => {},
        clear: () => {}
      };

    function nW() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class GW {
      constructor(WW) {
        this.options = WW, this.zM = void 0, this.director = void 0, this.latest = uW, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          iMW: 0,
          YRW: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.bA = new Int32Array(3 * gR.Sd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * gR.Sd), this.zM = new KW(WW.api), this.director = new hW.e(this.zM)
      }
      settingsChanged(WW) {
        let RW = uW;
        if (WW.length > 0) try {
          RW = (0, UW.e)(WW)
        } catch {}
        this.latest = RW, this.pending = RW
      }
      call(WW, RW, MW, wW, CW, zR) {
        var AW, bR;
        let yR;
        this.holding = !1;
        try {
          yR = this.answer(WW, RW, MW, wW, CW, zR)
        } catch (tR) {
          var NW, eW;
          throw this.answeredPose = !1, null === (NW = (eW = this.options).showFacing) || void 0 === NW || NW.call(eW, null), tR
        }
        const BW = this.answeredPose && 0 === (wW & gR.Db.Held);
        return this.answeredPose = yR !== gR.tb.None, this.holding = this.answeredPose && !BW, null === (AW = (bR = this.options).showFacing) || void 0 === AW || AW.call(bR, this.holding ? this.facing : null), yR
      }
      holdsView() {
        return this.holding
      }
      answer(WW, RW, MW, wW, CW, zR) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          zM: AW
        } = this;
        AW.readView();
        if (0 !== (wW & gR.Db.Held) || AW.setViewHeading((0, dW.v)(AW.bodyHeading)), void 0 !== this.pending) {
          const WW = this.pending;
          this.pending = void 0, this.director.setSettings(WW), this.syncShownSettings()
        }
        this.readLook((0, EW.d)(RW), (0, EW.d)(MW), wW, (0, EW.d)(CW), (0, EW.d)(zR));
        const bR = this.director.update(WW / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !bR) return gR.tb.None;
        const [yR, NW, eW] = bR.position;
        if (0 === this.options.api.queries.directorPose(yR, NW, eW, (0, dW.v)(bR.heading), (0, dW.i)(bR.pitch), (0, sW.i)(bR.fov))) return gR.tb.None;
        if ("default" === this.director.getSettings().mode) return gR.tb.Pose;
        switch (this.facing) {
          case "camera":
            return gR.tb.FaceCamera;
          case "cursor":
            return gR.tb.FaceCursor;
          default:
            return gR.tb.FaceMovement
        }
      }
      afterFrame(WW) {
        WW ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = uW, this.idle()
      }
      restart() {
        const WW = this.holding;
        this.idle(), this.holding = WW
      }
      idle() {
        var WW, RW;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new hW.e(this.zM), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (WW = (RW = this.options).showFacing) || void 0 === WW || WW.call(RW, null), this.setCentres(0)
      }
      syncShownSettings() {
        const WW = this.director.getSettings();
        if (WW === this.shownSettings) return;
        this.shownSettings = WW;
        const RW = (0, pW.h)(WW);
        this.facing = RW.facing, this.mouseTurns = RW.mouseTurns
      }
      readLook(WW, RW, MW, wW, CW) {
        const zR = this.look,
          AW = 0 !== (MW & gR.Db.LookPointed);
        if (null === this.mouseTurns && !AW) return zR.iMW = 0, zR.YRW = 0, void(zR.pointedAt = void 0);
        let bR;
        AW && (this.pointedAt.heading = wW, this.pointedAt.pitch = CW, bR = this.pointedAt);
        const {
          zM: yR
        } = this;
        yR.setViewHeading((0, pW.d)(yR.getViewHeading(), WW, RW, bR, "look" === this.mouseTurns, zR))
      }
      writeCentres(WW) {
        const RW = this.next,
          MW = Math.min(WW.length, gR.Sd);
        for (let wW = 0; wW < MW; wW++)
          for (let MW = 0; MW < 3; MW++) RW[3 * wW + MW] = Math.floor(WW[wW][MW] / gR.F);
        this.setCentres(MW)
      }
      setCentres(WW) {
        const {
          bA: RW,
          next: MW
        } = this;
        let wW = WW === this.centresLen;
        for (let CW = 0; wW && CW < 3 * WW; CW++) wW = RW[CW] === MW[CW];
        wW || (RW.fill(0), RW.set(MW.subarray(0, 3 * WW)), this.centresLen = WW, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const WW = this.options.cmd();
        null !== WW && (0, gR.Ff)(WW, 0, this.bA, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var WW, RW, MW;
        return null !== (WW = null === (RW = (MW = this.options).screen) || void 0 === RW ? void 0 : RW.call(MW)) && void 0 !== WW ? WW : OW
      }
      hidden() {
        var WW;
        return (null !== (WW = this.options.isPageHidden) && void 0 !== WW ? WW : nW)()
      }
      now() {
        var WW, RW, MW;
        return null !== (WW = null === (RW = (MW = this.options).now) || void 0 === RW ? void 0 : RW.call(MW)) && void 0 !== WW ? WW : performance.now()
      }
    }
    const LW = gR.F * gR.F * gR.F,
      HW = Math.log2(gR.F),
      DW = gR.F - 1,
      qR = gR.T.BYTES / 4,
      ZW = new Uint16Array(LW);

    function SW(WW, RW, MW) {
      return WW * gR.F * gR.F + RW * gR.F + MW
    }
    class WR {
      constructor(WW) {
        this.chunk = WW
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(WW, RW, MW) {
        return SW(WW, RW, MW)
      }
    }
    class RR {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class MR {
      constructor(WW, RW, MW, wW) {
        this.table = WW, this.slot = RW, this.generation = MW, this.epoch = wW, this.dR = new WR(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = ZW, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get MC() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get aw() {
        const WW = this.gameVoxels(),
          RW = this.layers ??= new Uint16Array(gR.F);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let MW = 0; 0 !== this.staleLayers; MW++) {
          const wW = 1 << MW;
          0 !== (this.staleLayers & wW) && (this.staleLayers &= ~wW, RW[MW] = wR(WW, MW))
        }
        return RW
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const WW = this.voxelData(),
          RW = this.writes;
        if (null === RW || 0 === RW.ids.size) return WW;
        if (RW.from !== WW) {
          const MW = RW.patched ??= new Uint16Array(LW);
          MW.set(WW);
          for (const [WW, wW] of RW.ids) MW[WW] = wW;
          RW.from = WW
        }
        return RW.patched
      }
      written(WW) {
        var RW;
        return null === (RW = this.writes) || void 0 === RW ? void 0 : RW.ids.get(WW)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(WW, RW, MW) {
        const wW = this.writes ??= new RR;
        wW.ids.set(WW, RW), MW && wW.cleared.add(WW), null !== wW.from && (wW.patched[WW] = RW);
        const CW = 1 << (WW >> HW & DW);
        wW.layers |= CW, this.staleLayers |= CW, this.writeCount++
      }
      clearWrites() {
        const WW = this.writes;
        null !== WW && (this.staleLayers |= WW.layers, WW.ids.clear(), WW.cleared.clear(), WW.layers = 0, WW.from = null)
      }
      dataCleared(WW) {
        var RW;
        return !0 === (null === (RW = this.writes) || void 0 === RW ? void 0 : RW.cleared.has(WW))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const WW = this.table.slotWords(),
          RW = this.slot * qR;
        if (this.epoch !== this.table.epoch || RW + qR > WW.length || 0 === WW[RW + 3] || WW[RW + 2] !== this.generation) return this.data = ZW, this.dataPtr = 0, ZW;
        this.version = WW[RW + 1];
        const MW = WW[RW + 0],
          wW = WW.buffer;
        return MW === this.dataPtr && wW === this.dataBuffer || (this.dataPtr = MW, this.dataBuffer = wW, this.data = this.table.voxelsAt(wW, MW)), this.data
      }
    }

    function wR(WW, RW) {
      const MW = WW[RW * gR.F];
      for (let wW = 0; wW < gR.F; wW++) {
        const CW = SW(wW, RW, 0);
        for (let RW = 0; RW < gR.F; RW++)
          if (WW[CW + RW] !== MW) return 65535
      }
      return MW
    }
    const CR = new Uint32Array(0),
      zM = 1 << 20,
      AR = 1 << 21;

    function bM(WW, RW, MW) {
      const wW = WW + zM,
        CW = RW + 1024,
        zR = MW + zM;
      return wW < 0 || wW >= AR || zR < 0 || zR >= AR || CW < 0 || CW >= 2048 ? -1 : 2048 * (wW * AR + zR) + CW
    }

    function yM(WW, RW, MW) {
      return SW(WW & DW, RW & DW, MW & DW)
    }
    class NR {
      constructor(WW, RW) {
        this.memory = WW, this.apiView = RW, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = CR, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = CR, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(WW, RW, MW, wW, CW, zR) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, zR === gR.V.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (zR !== gR.V.Stored && zR !== gR.V.Unloaded) throw new TW.c(`ChunkSlot flags ${zR}`);
        const AW = bM(WW, RW, MW);
        if (AW < 0) return;
        if (zR === gR.V.Unloaded) return void this.chunks.delete(AW);
        const bR = this.chunks.get(AW);
        (null === bR || void 0 === bR ? void 0 : bR.slot) === wW && bR.generation === CW || this.chunks.set(AW, new MR(this, wW, CW, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const WW = this.apiView(),
          RW = gR.r.chunkSlotsPtr(WW, 0),
          MW = gR.r.chunkSlotsLen(WW, 0);
        RW === this.slotsPtr && MW === this.slotsLen || (this.slotsPtr = RW, this.slotsLen = MW, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const WW = this.apiView(),
          RW = gR.r.walkThroughPtr(WW, 0),
          MW = gR.r.walkThroughLen(WW, 0);
        RW === this.walkPtr && MW === this.walkLen || (this.walkPtr = RW, this.walkLen = MW, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const WW of this.written) WW.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const WW = this.memory().buffer;
        var RW;
        WW !== this.slotsBuffer && (this.slotsBuffer = WW, this.slots = null !== (RW = (0, TW.q)(Uint32Array, WW, this.slotsPtr, this.slotsLen * qR, "the chunk directory")) && void 0 !== RW ? RW : CR);
        return this.slots
      }
      voxelsAt(WW, RW) {
        try {
          var MW;
          return null !== (MW = (0, TW.q)(Uint16Array, WW, RW, LW, "a chunk's voxels")) && void 0 !== MW ? MW : ZW
        } catch (wW) {
          if (!(wW instanceof TW.c)) throw wW;
          return this.corruption ??= wW, ZW
        }
      }
      chunk(WW, RW, MW) {
        var wW;
        return null !== (wW = this.chunks.get(bM(WW, RW, MW))) && void 0 !== wW ? wW : null
      }
      isLoaded(WW, RW, MW) {
        return void 0 !== this.chunkAt(Math.floor(WW), Math.floor(RW), Math.floor(MW))
      }
      Iz(WW, RW, MW) {
        var wW;
        const CW = Math.floor(WW),
          zR = Math.floor(RW),
          AW = Math.floor(MW),
          bR = this.chunkAt(CW, zR, AW);
        if (!bR) return 0;
        const yR = yM(CW, zR, AW);
        return null !== (wW = bR.written(yR)) && void 0 !== wW ? wW : bR.voxelData()[yR]
      }
      setOverlay(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const zR = this.chunkAt(WW, RW, MW);
        return !!zR && (zR.hasWrites() || this.written.push(zR), zR.write(yM(WW, RW, MW), wW, CW), !0)
      }
      version(WW, RW, MW) {
        var wW, CW;
        return null !== (wW = null === (CW = this.chunks.get(bM(WW, RW, MW))) || void 0 === CW ? void 0 : CW.MC) && void 0 !== wW ? wW : null
      }
      scan(WW, RW, MW, wW, CW, zR, AW, bR) {
        const yR = gR.F;
        let NW = 0;
        for (let eW = Math.floor(RW / yR); eW * yR < CW; eW++) {
          const BW = eW * yR,
            tR = Math.min(CW - BW, yR);
          for (let CW = Math.floor(WW / yR); CW * yR < wW; CW++) {
            const TW = CW * yR,
              gR = Math.min(wW - TW, yR);
            for (let wW = Math.floor(MW / yR); wW * yR < zR; wW++) {
              const iR = this.chunks.get(bM(CW, eW, wW));
              if (!iR) continue;
              const YW = wW * yR,
                JW = Math.max(MW - YW, 0),
                PW = Math.min(zR - YW, yR),
                IW = iR.aw,
                oW = iR.gameVoxels();
              for (let MW = Math.max(RW - BW, 0); MW < tR; MW++) {
                const RW = IW[MW];
                if (65535 === RW || 0 !== AW[RW]) {
                  NW++;
                  for (let RW = Math.max(WW - TW, 0); RW < gR; RW++) {
                    const WW = SW(RW, MW, 0);
                    for (let wW = JW; wW < PW; wW++) {
                      const CW = oW[WW + wW];
                      0 !== AW[CW] && bR.push(TW + RW, BW + MW, YW + wW, CW)
                    }
                  }
                }
              }
            }
          }
        }
        return NW
      }
      dataCleared(WW, RW, MW) {
        var wW;
        const CW = Math.floor(WW),
          zR = Math.floor(RW),
          AW = Math.floor(MW);
        return !0 === (null === (wW = this.chunkAt(CW, zR, AW)) || void 0 === wW ? void 0 : wW.dataCleared(yM(CW, zR, AW)))
      }
      isWalkThrough(WW) {
        if (!Number.isInteger(WW) || WW < 0 || WW > 65535) return !1;
        const RW = this.walkWords(),
          MW = WW >>> 5;
        return MW < RW.length && 1 === (RW[MW] >>> (31 & WW) & 1)
      }
      walkWords() {
        const WW = this.memory().buffer;
        var RW;
        WW !== this.walkBuffer && (this.walkBuffer = WW, this.walk = null !== (RW = (0, TW.q)(Uint32Array, WW, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== RW ? RW : CR);
        return this.walk
      }
      chunkAt(WW, RW, MW) {
        if ((0 | WW) !== WW || (0 | RW) !== RW || (0 | MW) !== MW) return;
        const wW = bM(WW >> HW, RW >> HW, MW >> HW);
        return wW !== this.lastKey && (this.lastKey = wW, this.lastChunk = this.chunks.get(wW)), this.lastChunk
      }
    }
    var eR = MW(36563),
      BR = MW(35890),
      tM = MW(34973),
      TR = MW(34855),
      gM = MW(7753),
      iM = MW(37109),
      YR = MW(173);
    const JR = ["ambient", "crowd", "customGame_horror", "dig", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "random", "rpg", "step", "survivalFactory"],
      PR = [
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
      IR = PR.map((WW => {
        let [RW] = WW;
        return RW
      })),
      oR = Uint8Array.from(PR, (WW => {
        let [, RW] = WW;
        return RW
      })),
      lR = {
        semi_automatic: 9,
        submachine: 11,
        rifle: 8,
        pistol: 7,
        shotgun: 10
      },
      FR = 6;
    var fR = MW(34968);
    const QR = {
        timeRemaining: () => 1 / 0
      },
      rM = WW => {
        var RW;
        const MW = globalThis,
          wW = null !== (RW = MW.nativeRequestIdleCallback) && void 0 !== RW ? RW : MW.requestIdleCallback,
          CW = MW.cancelIdleCallback;
        if ("function" === typeof wW && "function" === typeof CW) {
          const RW = wW.call(globalThis, WW);
          return () => {
            CW.call(globalThis, RW)
          }
        }
        const zR = setTimeout((() => {
          WW(QR)
        }), 100);
        return () => {
          clearTimeout(zR)
        }
      },
      cM = 2 ** JR.length - 1;
    class XR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM;
        this.sheet = WW, this.onError = RW, this.idle = MW, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = WW => {
          this.cancelIdle = null;
          try {
            if (WW.timeRemaining() >= 1) {
              let WW = this.queue.shift();
              for (; void 0 !== WW && !this.load(WW);) WW = this.queue.shift()
            }
          } catch (RW) {
            this.onError(RW)
          } finally {
            this.schedule()
          }
        }
      }
      preload(WW) {
        const RW = WW & cM & ~this.asked;
        if (0 !== RW) {
          this.asked |= RW;
          for (let WW = 0; WW < JR.length; WW++) RW & 1 << WW && this.queue.push(WW);
          this.schedule()
        }
      }
      cancel() {
        var WW;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (WW = this.cancelIdle) || void 0 === WW || WW.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(WW) {
        const RW = this.sheet(WW, !1),
          MW = this.sheet(WW, !0),
          [wW, CW] = "unloaded" === RW.state() && "unloaded" !== MW.state() ? [MW, RW] : [RW, MW],
          zR = this.gen,
          AW = () => {
            try {
              zR === this.gen && "unloaded" === CW.state() && CW.load()
            } catch (WW) {
              this.onError(WW)
            }
          },
          bR = wW.state();
        return "unloaded" === bR ? (wW.once("load", AW), wW.load(), !0) : "unloaded" === CW.state() && ("loading" === bR ? (wW.once("load", AW), !1) : (CW.load(), !0))
      }
    }
    var jM = MW(38399);
    const kM = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      aM = YR.c.yI * YR.c.playerEyeToHeightRatio,
      sR = [0, 0, -1, 0, 1, 0],
      dR = JR.indexOf("note");

    function pR(WW) {
      return WW >= 0 ? Math.min(1, WW) : 0
    }

    function hR(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const wW = function(WW) {
        let RW = 0,
          MW = IR.length;
        for (; RW < MW;) {
          const wW = RW + MW >>> 1;
          IR[wW] < WW ? RW = wW + 1 : MW = wW
        }
        return RW
      }(WW);
      if ("" === WW || null === (RW = IR[wW]) || void 0 === RW || !RW.startsWith(WW)) return -1;
      if (IR[wW] === WW) return wW;
      let CW = wW + 1;
      for (; CW < IR.length && IR[CW].startsWith(WW);) CW++;
      return wW + Math.floor(MW() * (CW - wW))
    }
    class UR {
      constructor(WW, RW, MW, wW, CW) {
        this.group = WW, this.loudness = RW, this.startMs = MW, this.howl = wW, this.host = CW, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const WW = this.host.alive(this.id);
        return WW ? 1e3 * this.howl.duration(this.id) / WW.rate : 0
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
    class ER {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          wW = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = WW, this.listener = RW, this.now = MW, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new fR.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: WW => this.aliveVoice(WW),
          started: WW => this.started.has(WW),
          drop: WW => {
            var RW;
            null === (RW = this.live.get(WW)) || void 0 === RW || RW.howl.stop(WW), this.forget(WW)
          }
        }, this.handlers = {
          playSound: (WW, RW, MW, wW, CW, zR, AW, bR, yR) => {
            if (wW >= IR.length) return;
            const NW = 0 !== (CW & gR._d.Loop);
            CW & gR._d.TwoD ? this.start(wW, !1, AW, zR, bR, NW) : this.startSpatial(wW, AW, zR, bR, NW, WW, RW, MW, yR, this.earDistSq(WW, RW, MW))
          },
          soundPos: (WW, RW, MW, wW) => {
            const CW = this.core.get(wW);
            var zR;
            void 0 !== CW && (null === (zR = this.live.get(CW)) || void 0 === zR || zR.howl.pos(MW, RW, WW, CW))
          },
          soundSet: (WW, RW, MW, wW) => {
            const CW = this.core.get(WW),
              zR = void 0 === CW ? void 0 : this.live.get(CW);
            void 0 !== CW && zR && (this.setRel(CW, RW), zR.rate = MW, zR.howl.rate(MW, CW), zR.spatial && zR.howl.pannerAttr({
              refDistance: wW
            }, CW))
          },
          soundFade: (WW, RW, MW, wW) => {
            const CW = this.core.get(WW);
            void 0 !== CW && this.fade(CW, RW, MW, 0 !== (wW & gR.Zd.StopAfter))
          },
          soundStop: WW => {
            const RW = this.core.get(WW);
            var MW;
            void 0 !== RW && (null === (MW = this.live.get(RW)) || void 0 === MW || MW.howl.stop(RW), this.forget(RW))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new XR(((WW, RW) => this.sheet(WW, RW)), (WW => {
          this.errors++, console.error("Audio preload failed", WW)
        }), wW)
      }
      prepare() {
        for (let WW = 0; WW < JR.length; WW++) this.sheet(WW, !1), this.sheet(WW, !0)
      }
      preload(WW) {
        this.loader.preload(WW)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(WW, RW, MW, wW) {
        if (WW < gR.n.PlaySound || WW > gR.n.SoundReset) return !1;
        try {
          return (0, gR.le)(WW, RW, MW, wW, this.handlers)
        } catch (CW) {
          return this.errors++, console.error("Audio event failed", CW), !0
        }
      }
      applyListener(WW) {
        const RW = this.nextPose;
        for (let wW = 0; wW < 3; wW++) RW[2 - wW] = gR.v.listener(WW, 0, wW), RW[5 - wW] = gR.v.forward(WW, 0, wW), RW[8 - wW] = gR.v.up(WW, 0, wW);
        0 === RW[3] && 0 === RW[4] && 0 === RW[5] && RW.set(this.posed ? this.pose.subarray(3) : sR, 3);
        for (let wW = 0; wW < 9; wW++)
          if (!Number.isFinite(RW[wW])) return;
        const MW = this.pose;
        if (this.posed) {
          let WW = !0;
          for (let wW = 0; wW < 9 && WW; wW++) WW = RW[wW] === MW[wW];
          if (WW) return
        }
        this.listener.apply(RW) && (MW.set(RW), this.posed = !0)
      }
      playGame(WW, RW, MW, wW, CW, zR, AW) {
        const bR = hR(WW);
        if (bR < 0) return jM.c;
        if (!MW) {
          const {
            howl: WW,
            id: MW
          } = this.start(bR, !1, RW, 0, 1, AW);
          return this.gameSound(WW, MW, !1)
        }
        const yR = MW[0],
          NW = MW[1] + aM,
          eW = MW[2];
        if (!Number.isFinite(yR) || !Number.isFinite(NW) || !Number.isFinite(eW)) return jM.c;
        let BW;
        if (wW) {
          const WW = yR - wW[0],
            RW = NW - wW[1],
            MW = eW - wW[2];
          if (BW = WW * WW + RW * RW + MW * MW, BW > CW * CW) return jM.c
        } else BW = this.earDistSq(yR, NW, eW);
        const tR = this.startSpatial(bR, RW, 0, 1, AW, yR, NW, eW, zR, BW);
        return tR ? this.gameSound(tR.howl, tR.id, !0) : jM.c
      }
      setMaster(WW, RW) {
        this.level = pR(WW);
        const MW = RW ? this.level : 0;
        if (MW !== this.master) {
          this.master = MW;
          for (const [WW, RW] of this.live) RW.fadeMs = 0, RW.gain = RW.rel * this.master, RW.howl.volume(RW.gain, WW)
        }
      }
      stopCore() {
        for (const RW of [...this.core.values()]) {
          var WW;
          null === (WW = this.live.get(RW)) || void 0 === WW || WW.howl.stop(RW)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [WW, RW] of [...this.live]) RW.howl.stop(WW), this.forget(WW);
        this.core.clear()
      }
      gameSound(WW, RW, MW) {
        const wW = {
          stop: () => (this.live.has(RW) && WW.stop(RW), wW),
          fade: (WW, MW, CW) => {
            var zR, AW;
            const bR = this.level > 0 ? MW / this.level : MW > 0 && null !== (zR = null === (AW = this.live.get(RW)) || void 0 === AW ? void 0 : AW.rel) && void 0 !== zR ? zR : 0;
            return this.fade(RW, bR, CW, !1), wW
          },
          rate: MW => {
            const CW = this.live.get(RW);
            return CW && (CW.rate = function(WW) {
              return WW > 0 && WW < 1 / 0 ? WW : 1
            }(MW), WW.rate(CW.rate, RW)), wW
          },
          getVolume: () => {
            var WW, MW;
            return (null !== (WW = null === (MW = this.live.get(RW)) || void 0 === MW ? void 0 : MW.rel) && void 0 !== WW ? WW : 0) * this.level
          },
          getRelativeVolume: () => {
            var WW, MW;
            return null !== (WW = null === (MW = this.live.get(RW)) || void 0 === MW ? void 0 : MW.rel) && void 0 !== WW ? WW : 0
          },
          setRelativeVolume: WW => (this.setRel(RW, WW), wW),
          setPannerAttr: CW => {
            if (MW && this.live.has(RW)) {
              const MW = {
                ...kM,
                refDistance: tM.j
              };
              for (const [WW, RW] of Object.entries(CW)) "number" !== typeof RW && "string" !== typeof RW || (MW[WW] = RW);
              WW.pannerAttr({
                coneOuterAngle: MW.coneOuterAngle
              }, RW), WW.pannerAttr(MW, RW)
            }
            return wW
          },
          setPosition: CW => (MW && this.live.has(RW) && Number.isFinite(CW[0] + CW[1] + CW[2]) && WW.pos(CW[2], CW[1], CW[0], RW), wW)
        };
        return wW
      }
      startSpatial(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        const eW = this.sheet(oR[WW], !0);
        let BW = null;
        if (!CW) {
          if (this.failed.has(eW)) return null;
          const MW = oR[WW] === dR ? null : (0, fR.l)(IR[WW]),
            wW = (0, fR.h)(pR(RW), Math.sqrt(NW), yR);
          if (BW = new UR(MW, wW, this.now(), eW, this.voiceHost), !this.voices.admit(BW)) return null
        }
        const tR = this.start(WW, !0, RW, MW, wW, CW);
        return BW && (BW.id = tR.id, BW.direct = "loaded" === eW.state() && !eW._playLock), eW.pannerAttr({
          coneOuterAngle: 360
        }, tR.id), eW.pannerAttr({
          ...kM,
          refDistance: yR
        }, tR.id), eW.pos(bR, AW, zR, tR.id), tR
      }
      aliveVoice(WW) {
        const RW = this.live.get(WW);
        if (!RW) return;
        const MW = RW.howl._soundById(WW);
        if (MW && !MW._ended) return RW;
        this.forget(WW)
      }
      earDistSq(WW, RW, MW) {
        if (!this.posed) return 0;
        const wW = WW - this.pose[2],
          CW = RW - this.pose[1],
          zR = MW - this.pose[0];
        return wW * wW + CW * CW + zR * zR
      }
      start(WW, RW, MW, wW, CW, zR) {
        const AW = pR(MW),
          bR = this.sheet(oR[WW], RW);
        "unloaded" === bR.state() && bR.load();
        const yR = bR.play(IR[WW]),
          NW = AW * this.master;
        return bR.volume(NW, yR), this.live.set(yR, {
          howl: bR,
          rel: AW,
          gain: NW,
          fadeFrom: NW,
          fadeAt: 0,
          fadeMs: 0,
          rate: CW,
          handle: wW,
          spatial: RW,
          stopTimer: void 0
        }), 0 !== wW && this.core.set(wW, yR), 1 !== CW && bR.rate(CW, yR), zR && bR.loop(!0, yR), {
          howl: bR,
          id: yR
        }
      }
      sheet(WW, RW) {
        const MW = 2 * WW + (RW ? 1 : 0);
        let wW = this.sheets.get(MW);
        if (!wW) {
          const CW = this.createHowl(JR[WW], RW);
          CW.on("end", (WW => {
            CW.loop(WW) || this.forget(WW)
          })), CW.on("stop", (WW => {
            this.forget(WW)
          })), CW.on("play", (WW => {
            this.live.has(WW) && this.started.add(WW)
          })), CW.on("loaderror", (WW => {
            if ("loaded" !== CW.state()) {
              this.failed.add(CW);
              for (const [WW, RW] of this.live) RW.howl === CW && this.forget(WW)
            } else "number" === typeof WW && this.forget(WW)
          })), this.sheets.set(MW, CW), wW = CW
        }
        return wW
      }
      setRel(WW, RW) {
        const MW = this.live.get(WW);
        MW && (VR(MW), MW.fadeMs = 0, MW.rel = pR(RW), MW.gain = MW.rel * this.master, MW.howl.volume(MW.gain, WW))
      }
      fade(WW, RW, MW, wW) {
        const CW = this.live.get(WW);
        if (!CW) return;
        VR(CW);
        const {
          howl: zR
        } = CW, AW = this.gainNow(CW);
        CW.rel = pR(RW), CW.gain = CW.rel * this.master;
        const bR = MW > 0 ? Math.min(MW, 65535) : 0,
          yR = 0 === bR || AW === CW.gain;
        CW.fadeMs = yR ? 0 : bR, yR ? zR.volume(CW.gain, WW) : (CW.fadeFrom = AW, CW.fadeAt = this.now(), zR.fade(AW, CW.gain, bR, WW)), wW && (yR ? zR.stop(WW) : CW.stopTimer = setTimeout((() => {
          CW.stopTimer = void 0, zR.stop(WW)
        }), bR))
      }
      gainNow(WW) {
        if (WW.fadeMs > 0) {
          const RW = (this.now() - WW.fadeAt) / WW.fadeMs;
          if (RW < 1) return WW.fadeFrom + (WW.gain - WW.fadeFrom) * Math.max(0, RW);
          WW.fadeMs = 0
        }
        return WW.gain
      }
      forget(WW) {
        this.started.delete(WW);
        const RW = this.live.get(WW);
        RW && (VR(RW), this.live.delete(WW), 0 !== RW.handle && this.core.get(RW.handle) === WW && this.core.delete(RW.handle))
      }
    }

    function VR(WW) {
      void 0 !== WW.stopTimer && (clearTimeout(WW.stopTimer), WW.stopTimer = void 0)
    }
    var mM = MW(38188),
      xM = MW(37111);
    class vM {
      constructor(WW, RW, MW, wW) {
        this.key = WW, this.model = RW, this.host = wW, this.aR = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sentCount = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Qw = !1, this.aR = Math.max(1, Math.ceil(MW)), this.records = new Float32Array(this.aR * eR.d), this.isDirty = new Uint8Array(this.aR), this.tail = new Uint8Array(this.aR * gR.Bc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(wW.cmd())
      }
      setOrigin(WW, RW, MW) {
        this.origin[0] = WW, this.origin[1] = RW, this.origin[2] = MW
      }
      markDirty(WW) {
        !this.Qw && WW >= 0 && WW < this.aR && WW < gR.Bc.Max && this.Gw(WW, WW + 1)
      }
      commit(WW) {
        if (this.Qw) return;
        (WW = Math.min(Math.max(Math.floor(WW), 0), this.aR, gR.Bc.Max)) > this.count && this.Gw(this.count, WW), this.count = WW;
        const {
          origin: RW,
          sentOrigin: MW,
          dirtyList: wW
        } = this, CW = this.sentCount !== WW, zR = MW[0] !== RW[0] || MW[1] !== RW[1] || MW[2] !== RW[2];
        if (0 === wW.length && !CW && !zR) return;
        const AW = this.host.cmd();
        if (!AW || !this.make(AW)) return;
        const bR = wW.length,
          {
            records: yR,
            tailView: NW
          } = this;
        for (let eW = 0; eW < bR; eW++) {
          const WW = wW[eW],
            RW = WW * eR.d,
            MW = eW * gR.Bc.Bytes,
            CW = 0 !== yR[RW + eR.e] ? gR.Bc.Hidden : 0;
          NW.setUint32(MW, (WW | CW) >>> 0, !0), NW.setFloat32(MW + 4, yR[RW], !0), NW.setFloat32(MW + 8, yR[RW + 1], !0), NW.setFloat32(MW + 12, yR[RW + 2], !0)
        }
        if ((0, gR.Qe)(AW, 0, this.key, WW, RW, bR, this.tailOf(bR))) {
          for (let WW = 0; WW < bR; WW++) this.isDirty[wW[WW]] = 0;
          wW.length = 0, this.sentCount = WW, MW[0] = RW[0], MW[1] = RW[1], MW[2] = RW[2]
        }
      }
      grow(WW) {
        (WW = Math.ceil(WW)) <= this.aR || this.Qw || (this.records = (0, xM.e)(this.records, new Float32Array(WW * eR.d)), this.isDirty = (0, xM.e)(this.isDirty, new Uint8Array(WW)), this.tail = new Uint8Array(WW * gR.Bc.Bytes), this.tailView = new DataView(this.tail.buffer), this.aR = WW)
      }
      dispose() {
        this.Qw || (this.Qw = !0, this.host.Qw(this, this.made ? this.key : null))
      }
      make(WW) {
        if (!this.made && WW) {
          const {
            item: RW,
            scale: MW,
            yaw: wW
          } = this.model;
          this.made = (0, gR.Xe)(WW, 0, this.key, RW, MW, wW)
        }
        return this.made
      }
      tailOf(WW) {
        const RW = WW * gR.Bc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === RW || (this.tailCut = this.tail.subarray(0, RW)), this.tailCut
      }
      Gw(WW, RW) {
        const {
          dirtyList: MW,
          isDirty: wW
        } = this;
        for (let CW = WW; CW < RW; CW++) 0 === wW[CW] && (wW[CW] = 1, MW.push(CW))
      }
    }
    var KR = MW(556);
    class uR {
      constructor(WW) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: WW,
          owes: WW => {
            this.owing.add(WW)
          },
          settled: (WW, RW) => {
            this.owing.delete(WW), RW && this.live.delete(WW)
          }
        }
      }
      create(WW, RW) {
        if (MW = WW, !KR.g.includes(MW)) return null;
        var MW;
        const wW = new OR(++this.keys, eW.i.indexOf(WW), RW, this.host);
        return this.live.add(wW), wW
      }
      disposeAll() {
        for (const WW of [...this.live]) WW.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const WW = this.host.cmd();
        for (const RW of this.owing)
          if (!RW.sync(WW)) return
      }
    }
    class OR {
      constructor(WW, RW, MW, wW) {
        this.key = WW, this.lifeform = RW, this.scale = MW, this.host = wW, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Qw = !1, this.sync()
      }
      setPose(WW, RW) {
        this.Qw || (this.feet[0] = WW[0], this.feet[1] = WW[1], this.feet[2] = WW[2], this.yaw = RW, this.owed |= 2, this.sync())
      }
      setVisible(WW) {
        this.Qw || WW === this.visible || (this.visible = WW, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Qw || (this.Qw = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(WW) ? (this.host.settled(this, this.Qw), !0) : (this.host.owes(this), !1)
      }
      write(WW) {
        if (!WW) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, gR.bf)(WW, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const RW = (2 & this.owed ? gR.bd.Pose : 0) | (4 & this.owed ? gR.bd.Visible : 0);
        if (0 !== RW) {
          if (!(0, gR.af)(WW, 0, this.key, RW, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, gR._e)(WW, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var nR = MW(38536);

    function GR(WW, RW, MW, wW) {
      return (0, nR.c)(), (0, gR.Hf)(WW, RW, MW, wW)
    }
    var LR = MW(38195);
    const HR = [0, 0, 0],
      DR = [0, 0, 0],
      qM = [0, 0, 0],
      ZR = [0, 0, 0],
      SR = [0, 0, 0],
      WM = [0, 0],
      RM = [1, 1, 1],
      MM = 1 / 3;
    const wM = BR.e;

    function CM(WW) {
      const RW = BR.d[WW],
        MW = RW && BR.e[RW.mainMultiblock];
      return MW && {
        main: MW,
        x: RW.compX,
        y: RW.compY,
        z: RW.compZ
      }
    }

    function zw(WW) {
      if (null === WW || void 0 === WW) return gR.id;
      const RW = +WW;
      return Number.isInteger(RW) && RW >= -2147483648 && RW <= 2147483647 && String(RW) === String(WW) ? RW : gR.id
    }

    function AM(WW, RW, MW) {
      return (0, gR.Mf)(WW, 0, RW, null !== MW && void 0 !== MW ? MW : Number.NaN)
    }
    class bw {
      constructor(WW) {
        this.deps = WW, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.mobModels = new uR((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Qw: (WW, RW) => {
            this.livePools.delete(WW), null !== RW && (this.owedFrees.push(RW), this.flushOwed())
          }
        }, this.api = WW.api, this.live = WW.live, this.chunks = WW.chunks, this.items = WW.items, this.tables = WW.tables
      }
      isLocal(WW) {
        return null !== WW && void 0 !== WW && +WW === this.api.localId
      }
      assertLocal(WW, RW) {
        if (!this.isLocal(WW)) throw new Error(`Attempted to ${RW} for a player that is not the local player`)
      }
      yX(WW) {
        const RW = this.api.yX(WW);
        if (!RW) throw new Error(`Entity ${WW} has no replicated position`);
        return RW
      }
      checkValid(WW) {
        return !!this.deps.isSessionLive() && (null === WW || void 0 === WW || this.api.checkValid(WW))
      }
      isAlive(WW) {
        return !1 !== this.api.isAlive(WW)
      }
      getItemStat(WW, RW, MW) {
        return this.isLocal(WW) || null !== WW && "Player" === this.api.getEntityType(WW) ? this.tables.getItemStat(RW, MW) : this.tables.getDefaultItemStat(RW, MW)
      }
      getClientOption(WW, RW) {
        return this.assertLocal(WW, "get a client option"), this.tables.getClientOption(RW)
      }
      openShop(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(WW, "open shop"), AW.k.Sz("showShopFromServer", {
          toggle: RW,
          b_: MW
        }, !0)
      }
      sendMessage(WW, RW, MW) {
        this.assertLocal(WW, "send a message");
        const wW = "string" === typeof RW ? [{
          str: RW,
          style: MW
        }] : RW;
        AW.k.Sz("chat", {
          content: wW
        }, !0)
      }
      getEntityType(WW) {
        return this.api.getEntityType(WW)
      }
      getEntityName(WW) {
        const RW = zw(WW);
        return RW === gR.id ? void 0 : (0, mM.f)(this.api, RW)
      }
      hasEffect(WW, RW) {
        const MW = zw(WW);
        return MW !== gR.id && (0, mM.d)(this.api, MW, RW)
      }
      getMetaInfo(WW) {
        return this.tables.getMetaInfo(WW)
      }
      getPlayerDbId(WW) {
        return this.assertLocal(WW, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(WW, RW, MW) {
        if (!this.chunks.dataCleared(WW, RW, MW)) return (0, mM.b)(this.api, WW, RW, MW)
      }
      tMW(WW, RW, MW, wW) {
        this.setBlockId(WW, RW, MW, this.tables.getItemId(wW))
      }
      setOtherEntitySetting(WW, RW, MW, wW) {
        if (!this.isLocal(WW)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(gR.wd, MW)) throw new Error(`Unknown other-entity setting ${MW}`);
        const CW = gR.wd[MW],
          zR = zw(RW);
        if (zR === gR.id || !this.deps.beforeWrite()) return;
        const AW = (0, UW.f)(wW);
        if (AW.length > 16384) throw new Error(`The other-entity setting ${MW}'s value is over 16384 bytes`);
        const bR = this.api.memoryView(Uint8Array, this.api.scratch(), AW.length, "set_other_entity_setting's value");
        bR && (bR.set(AW), this.api.queries.setOtherEntitySetting(zR, CW, AW.length))
      }
      getPositionView(WW) {
        return this.live.position(+WW)
      }
      readDrawnPosition(WW, RW) {
        return this.api.readDrawnPosition(zw(WW), RW)
      }
      getDrawnHeading(WW) {
        const RW = zw(WW),
          MW = (RW === gR.id ? 0 : this.api.queries.directorEntity(RW)) >= gR.Bb.BYTES ? this.api.memoryData(this.api.scratch(), gR.Bb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!MW) return null;
        if (1 === gR.Bb.headingIsDrawn(MW, 0)) return gR.Bb.heading(MW, 0);
        const wW = this.api.apiView;
        return this.isLocal(WW) && 0 === (gR.r.playerFlags(wW, 0) & gR.Ld.FreeCam) ? gR.r.heading(wW, 0) : null
      }
      getLocalPlayerMovement() {
        const WW = gR.r.playerFlags(this.api.apiView, 0);
        return 0 === (WW & gR.Ld.Replay) && this.api.readDrawnPosition(this.api.localId, qM) ? {
          onGround: 0 !== (WW & gR.Ld.OnGround),
          jumpHeld: 0 !== (WW & gR.Ld.JumpHeld)
        } : null
      }
      HbW(WW) {
        return this.isLocal(WW) ? this.items.mM() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var WW, RW;
        return "Gun" === (null === (WW = this.aliveHeld()) || void 0 === WW || null === (RW = WW.typeObj) || void 0 === RW ? void 0 : RW.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.mM()
      }
      isCrosshairShown() {
        var WW, RW;
        const MW = wW.b.get("crosshairShownOverride");
        if (null !== MW) return MW;
        const CW = null === (WW = this.aliveHeld()) || void 0 === WW ? void 0 : WW.typeObj,
          zR = "Gun" === (null === CW || void 0 === CW ? void 0 : CW.type),
          AW = zR || !0 === (null === CW || void 0 === CW ? void 0 : CW.showsAimingUi),
          bR = 0 === (gR.r.playerFlags(this.api.apiView, 0) & gR.Ld.ZoomFirstPerson),
          yR = null !== (RW = this.tables.getClientOption("gunshotOrigin")) && void 0 !== RW ? RW : null;
        return (0, TR.f)({
          gun: zR,
          aimable: AW
        }, bR, (0, gM.e)(), yR)
      }
      setCrosshairShown(WW) {
        wW.b.set({
          crosshairShownOverride: WW
        })
      }
      getInventoryFreeSlotCount(WW) {
        return this.isLocal(WW) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(WW) {
        return this.isLocal(WW) ? this.items.selectedSlot : null
      }
      getItemSlot(WW, RW) {
        return this.isLocal(WW) ? this.items.slot(RW) : null
      }
      swapInventorySlots(WW, RW) {
        return this.items.swap(WW, RW, !1)
      }
      redoInventorySwapLocally(WW, RW) {
        this.items.swap(WW, RW, !0)
      }
      isPlayerCrouching(WW) {
        if (this.isLocal(WW)) return 0 !== (gR.r.playerFlags(this.api.apiView, 0) & gR.Ld.Crouching);
        const RW = zw(WW);
        return RW !== gR.id && 1 === this.api.queries.entityCrouching(RW)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (gR.r.playerFlags(this.api.apiView, 0) & gR.Ld.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.jbW()
      }
      canModifyBlockAt(WW, RW, MW) {
        return 1 === this.api.queries.canModify(WW, RW, MW)
      }
      isSolidToPlayerBlockId(WW) {
        return this.tables.isSolidBlockId(WW) && !this.chunks.isWalkThrough(WW)
      }
      blockNameToBlockId(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(WW, RW)
      }
      blockIdToBlockName(WW) {
        return this.tables.nameOfId(WW)
      }
      tyW(WW, RW, MW, wW, CW) {
        return 1 === this.api.queries.terrainBlocked(wW, WW, RW, MW, zw(null !== CW && void 0 !== CW ? CW : null))
      }
      getChunkVersion(WW, RW, MW) {
        return this.chunks.version(WW, RW, MW)
      }
      scanBlocks(WW, RW, MW, wW, CW, zR, AW, bR) {
        return this.chunks.scan(WW, RW, MW, wW, CW, zR, AW, bR)
      }
      isBlockInLoadedChunk(WW, RW, MW) {
        return this.chunks.isLoaded(WW, RW, MW)
      }
      getBlockId(WW, RW, MW) {
        return this.chunks.Iz(WW, RW, MW)
      }
      playSound(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(WW)) return null;
        const AW = this.playSoundFrom(RW, MW, CW, zR);
        return 1 === wW ? AW : AW.rate(wW)
      }
      playSoundFrom(WW, RW, MW, wW) {
        var CW, zR;
        const AW = this.deps.playSound;
        if (!AW) return jM.c;
        const bR = null === MW || void 0 === MW ? void 0 : MW.N7,
          yR = null !== (CW = null === MW || void 0 === MW ? void 0 : MW.maxHearDist) && void 0 !== CW ? CW : tM.f,
          NW = null !== (zR = null === MW || void 0 === MW ? void 0 : MW.refDistance) && void 0 !== zR ? zR : tM.j;
        let eW = null;
        if (Array.isArray(bR)) HR[0] = bR[0], HR[1] = bR[1], HR[2] = bR[2], eW = HR;
        else if (void 0 !== bR && null !== bR) {
          const WW = zw(bR);
          if (!this.api.isLocal(WW)) {
            if (!this.api.readPosition(WW, HR)) return jM.c;
            eW = HR
          }
        }
        return AW(WW, RW, eW, eW && this.ear(), yR, NW, wW)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, DR)) DR[1] += aM;
        else {
          const WW = this.api.apiView;
          if (0 === gR.r.viewProj(WW, 0, 3) && 0 === gR.r.viewProj(WW, 0, 7) && 0 === gR.r.viewProj(WW, 0, 11)) return null;
          for (let RW = 0; RW < 3; RW++) DR[RW] = gR.r.eye(WW, 0, RW)
        }
        return Number.isFinite(DR[0] + DR[1] + DR[2]) ? DR : null
      }
      setBlockId(WW, RW, MW, wW) {
        if (!Number.isInteger(wW) || wW < 0 || wW > 65535) throw new Error(`Invalid block id ${wW}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(WW, RW, MW)) return;
        const CW = Math.floor(WW),
          zR = Math.floor(RW),
          AW = Math.floor(MW),
          bR = this.predictedCells(CW, zR, AW, wW);
        if (1 === this.api.queries.tMW(CW, zR, AW, wW)) {
          for (let WW = 0; WW < bR.length; WW += 5) this.chunks.setOverlay(bR[WW], bR[WW + 1], bR[WW + 2], bR[WW + 3], 1 === bR[WW + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(WW, RW) {
        return this.deps.particles.create(WW, RW)
      }
      playParticleEffect(WW) {
        this.deps.particles.playEffect(WW)
      }
      burstParticlePreset(WW, RW, MW) {
        this.deps.particles.burstPreset(WW, RW, MW)
      }
      createGameMesh(WW, RW, MW) {
        const wW = ++this.meshKeys,
          CW = this.deps.cmd();
        if (!CW) return wW;
        const {
          look: zR,
          colour: AW
        } = function(WW) {
          switch (WW.kind) {
            case void 0:
            case "flatEmissive":
              return WW.opaque ? {
                look: gR.ac.FlatOpaque,
                colour: [...WW.rgb, 1]
              } : {
                look: gR.ac.Flat,
                colour: [...WW.rgb, WW.alpha]
              };
            case "chevronPath":
              return {
                look: gR.ac.Chevrons, colour: [...(0, iM.d)(WW.colour), WW.alpha]
              };
            case "furnaceFire":
              return {
                look: gR.ac.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(RW), bR = Math.floor(WW.positions.length / 3), yR = function(WW, RW) {
          const MW = Math.floor(WW.positions.length / 3),
            wW = WW.indices.length,
            CW = MW * (RW ? 5 : 3),
            zR = new Uint8Array(4 * (CW + wW)),
            AW = new DataView(zR.buffer);
          for (let NW = 0; NW < 3 * MW; NW++) AW.setFloat32(4 * NW, WW.positions[NW], !0);
          if (RW) {
            var bR;
            const RW = null !== (bR = WW.uvs) && void 0 !== bR ? bR : [];
            for (let WW = 0; WW < 2 * MW; WW++) {
              var yR;
              AW.setFloat32(4 * (3 * MW + WW), null !== (yR = RW[WW]) && void 0 !== yR ? yR : 0, !0)
            }
          }
          for (let NW = 0; NW < wW; NW++) AW.setUint32(4 * (CW + NW), WW.indices[NW], !0);
          return zR
        }(WW, (0, eR.i)(RW));
        return (0, gR.Ge)(CW, 0, wW, zR, AW, MW, bR, WW.indices.length, yR) && this.liveMeshes.add(wW), wW
      }
      setGameMesh(WW, RW) {
        var MW;
        const wW = this.deps.cmd();
        if (!wW) return;
        let CW = 0;
        RW.anchor && (CW |= gR.ec.Anchor, SR[0] = RW.anchor[0], SR[1] = RW.anchor[1], SR[2] = RW.anchor[2]), void 0 !== RW.visible && (CW |= gR.ec.Visible), RW.uvOffset && (CW |= gR.ec.UvOffset, WM[0] = RW.uvOffset[0], WM[1] = RW.uvOffset[1]);
        const zR = null !== (MW = RW.visibility) && void 0 !== MW ? MW : 1;
        void 0 !== RW.visibility && (CW |= gR.ec.Visibility), RW.scale && (CW |= gR.ec.Scale, RM[0] = RW.scale[0], RM[1] = RW.scale[1], RM[2] = RW.scale[2]), 0 !== CW && (0, gR.Ne)(wW, 0, WW, CW, RW.visible ? 1 : 0, SR, WM, zR, RM)
      }
      disposeGameMesh(WW) {
        const RW = this.deps.cmd();
        RW && !(0, gR.Je)(RW, 0, WW) || this.liveMeshes.delete(WW)
      }
      hasPackModel(WW) {
        var RW, MW, wW;
        return null !== (RW = null === (MW = (wW = this.deps).hasPackModel) || void 0 === MW ? void 0 : MW.call(wW, WW)) && void 0 !== RW && RW
      }
      disposeGameOutput() {
        const WW = WW => {
          try {
            WW()
          } catch (RW) {
            console.error("Error freeing client game output", RW)
          }
        };
        for (const RW of [...this.liveMeshes]) WW((() => {
          this.disposeGameMesh(RW)
        }));
        for (const RW of [...this.livePools]) WW((() => {
          RW.dispose()
        }));
        WW((() => {
          this.mobModels.disposeAll()
        })), WW((() => {
          this.setGroundArrowStyle(null)
        })), WW((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), WW((() => {
          this.setCrosshairShown(null)
        })), WW((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(WW, RW) {
        const MW = this.tables.idOf(WW.item);
        if (void 0 === MW) return null;
        const wW = new vM(++this.poolKeys, {
          item: MW,
          scale: WW.scale,
          yaw: WW.yaw
        }, RW, this.poolHost);
        return this.livePools.add(wW), wW
      }
      createMobModel(WW, RW) {
        return this.mobModels.create(WW, RW)
      }
      setRouteChevrons(WW) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !WW || 0 === WW.cells.length) return;
        const RW = `${WW.colour} ${WW.alpha}`;
        RW !== this.routeLook && (this.routeLook = RW, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(WW) {
          const [RW, MW, wW] = WW[0].pos, CW = [], zR = [], AW = [];
          return WW.forEach(((WW, bR) => {
            let {
              pos: yR,
              way: [NW, eW]
            } = WW;
            const BW = yR[0] - RW + .5,
              tR = yR[1] - MW + .04,
              TW = yR[2] - wW + .5,
              [gR, iR] = [.35 * -eW, .35 * NW],
              [YW, JW] = [bR * MM, (bR + 1) * MM],
              PW = CW.length / 3;
            CW.push(BW - .5 * NW + gR, tR, TW - .5 * eW + iR), CW.push(BW - .5 * NW - gR, tR, TW - .5 * eW - iR), CW.push(BW + .5 * NW + gR, tR, TW + .5 * eW + iR), CW.push(BW + .5 * NW - gR, tR, TW + .5 * eW - iR), zR.push(0, YW, 1, YW, 0, JW, 1, JW), AW.push(PW, PW + 1, PW + 2, PW + 1, PW + 3, PW + 2)
          })), {
            positions: CW,
            uvs: zR,
            indices: AW
          }
        }(WW.cells), {
          kind: "chevronPath",
          colour: WW.colour,
          alpha: WW.alpha
        }, WW.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(WW) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(WW, 250) / 1e3 * 1.2 * MM) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(WW) {
        this.pendingStyle = WW, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const WW = this.owedFrees;
        if (0 === WW.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const RW = this.deps.cmd();
        if (!RW) return WW.length = 0, void(this.pendingFar = void 0);
        let MW = 0;
        for (; MW < WW.length && (0, gR.Te)(RW, 0, WW[MW]);) MW++;
        WW.splice(0, MW);
        const wW = this.pendingStyle;
        if (void 0 !== wW) {
          (wW ? (0, gR.Qf)(RW, 0, wW.width, wW.alpha, 1, wW.endAtSolidFace ? 1 : 0) : (0, gR.Qf)(RW, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const CW = this.pendingFar;
        void 0 !== CW && (0, gR.Lf)(RW, 0, null !== CW && void 0 !== CW ? CW : 0, null === CW ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(WW, RW) {
        const MW = this.deps.cmd(),
          wW = zw(WW);
        MW && wW !== gR.id && (0, gR.Tf)(MW, 0, wW, RW)
      }
      setFacingTolerance(WW, RW) {
        const MW = this.deps.cmd(),
          wW = zw(WW);
        MW && wW !== gR.id && AM(MW, wW, RW)
      }
      forEachEntity(WW) {
        const {
          api: RW
        } = this;
        for (let MW = 0; MW < RW.idStr.length; MW++) {
          const wW = RW.idStr[MW];
          null === wW || lW(RW.kinds[MW]) || WW(wW)
        }
      }
      getEntityInfo(WW) {
        return this.deps.entityInfo.get(WW)
      }
      isEntityInteractable(WW) {
        const RW = zw(WW);
        return RW !== gR.id && 1 === this.api.queries.entityInteractable(RW)
      }
      isLocalPlayer(WW) {
        return this.isLocal(WW)
      }
      getLineOwner(WW) {
        var RW;
        const MW = null === (RW = this.deps.entityInfo.get(WW)) || void 0 === RW ? void 0 : RW.meshOpts;
        if (!MW) return null;
        try {
          const {
            lineToEId: WW
          } = JSON.parse(MW);
          return null !== WW && void 0 !== WW ? WW : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const WW = this.api.apiView;
        return ZR[0] = gR.r.eye(WW, 0, 0), ZR[1] = gR.r.eye(WW, 0, 1), ZR[2] = gR.r.eye(WW, 0, 2), ZR
      }
      getCameraFar() {
        return gR.r.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(WW) {
        null !== WW && (this.farSet = !0), this.pendingFar = WW, this.flushOwed()
      }
      clearPickupDelay(WW) {
        const RW = this.deps.cmd(),
          MW = zw(WW);
        RW && MW !== gR.id && (0, gR.pe)(RW, 0, MW)
      }
      sendChat(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = this.deps.sendCmd();
        MW && GR(MW, 0, LR.c.Chat, (0, UW.f)((0, LR.i)({
          PA: WW,
          Fv: RW
        })))
      }
      sendCommand(WW) {
        WW.length <= 119 && this.sendChat(`/${WW}`)
      }
      predictedCells(WW, RW, MW, wW) {
        const CW = this.chunks,
          zR = [],
          AW = (WW, RW, MW, wW, CW) => {
            zR.push(WW, RW, MW, wW, this.tables.blockRootId(CW) === this.tables.blockRootId(wW) ? 0 : 1)
          },
          bR = CW.Iz(WW, RW, MW),
          yR = CM(bR);
        if (yR) {
          const [wW, zR, NW] = [WW - yR.x, RW - yR.y, MW - yR.z], eW = wM[CW.Iz(wW, zR, NW)], BW = null === eW || void 0 === eW ? void 0 : eW.positions.some((WW => WW.id === bR && WW.x === yR.x && WW.y === yR.y && WW.z === yR.z));
          for (const WW of (BW && eW ? eW : yR.main).positions) CW.Iz(wW + WW.x, zR + WW.y, NW + WW.z) === WW.id && AW(wW + WW.x, zR + WW.y, NW + WW.z, 0, WW.id)
        }
        const NW = CM(wW);
        if (NW)
          for (const BW of NW.main.positions) {
            const [wW, zR, bR] = [WW + BW.x - NW.x, RW + BW.y - NW.y, MW + BW.z - NW.z];
            AW(wW, zR, bR, BW.id, CW.Iz(wW, zR, bR))
          } else AW(WW, RW, MW, wW, bR);
        const eW = this.tables;
        if ((0 !== eW.attachedTopOf(bR) || 0 !== eW.attachedTopOf(wW)) && CW.isLoaded(WW, RW + 1, MW)) {
          let yR = CW.Iz(WW, RW + 1, MW);
          for (let wW = 0; wW < zR.length; wW += 5) zR[wW] === WW && zR[wW + 1] === RW + 1 && zR[wW + 2] === MW && (yR = zR[wW + 3]);
          const NW = this.attachedTopWrite(bR, wW, yR);
          void 0 !== NW && AW(WW, RW + 1, MW, NW, yR)
        }
        return zR
      }
      attachedTopWrite(WW, RW, MW) {
        const wW = this.tables,
          CW = wW.attachedTopOf(WW),
          zR = wW.attachedTopOf(RW),
          AW = 0 !== CW && 0 !== MW && wW.blockRootId(MW) === wW.blockRootId(CW);
        return 0 !== CW && 0 !== zR && wW.blockRootId(WW) === wW.blockRootId(RW) ? AW && MW !== zR ? zR : void 0 : 0 === zR || !AW && 0 !== MW ? AW ? 0 : void 0 : zR
      }
    }
    const yw = gR.vc + gR.xc * gR.Fc.BYTES,
      NM = 2147483647,
      eM = new TextDecoder,
      BM = new TextEncoder,
      tw = Object.freeze({
        YL: 0,
        jK: null,
        amountAddedToSlot: 0
      }),
      TM = new Proxy({}, {
        get: () => () => gR.ud
      });

    function gw(WW) {
      return Number.isInteger(WW) && WW >= 0 && WW <= 65535
    }

    function iw(WW) {
      return Number.isInteger(WW) && WW >= 0 && WW <= 4294967295
    }
    class YM {
      constructor(WW) {
        this.deps = WW, this.bV = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(gR.xc), this.ids = new Uint16Array(gR.xc), this.amounts = new Uint16Array(gR.xc), this.attrRead = new Float64Array(gR.xc).fill(-1), this.stale = new Uint16Array(gR.xc), this.staleVersion = new Uint32Array(gR.xc), this.instances = new Uint32Array(gR.xc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(WW) {
        var RW;
        return Number.isInteger(WW) && WW >= 0 && WW < this.len && 0 !== this.ids[WW] && null !== (RW = this.facades[WW]) && void 0 !== RW ? RW : null
      }
      mM() {
        return this.slot(this.selected)
      }
      playerItems() {
        const WW = [];
        for (let RW = 0; RW < Math.min(gR.Gd, this.len); RW++) WW.push(this.slot(RW));
        return WW
      }
      freeSlots() {
        let WW = 0;
        for (let RW = 0; RW < Math.min(gR.Gd - gR.i, this.len); RW++) 0 === this.ids[RW] && WW++;
        return WW
      }
      amountOf(WW) {
        let RW = 0;
        for (let wW = 0; wW < Math.min(gR.Gd, this.len); wW++) {
          const CW = this.slot(wW);
          var MW;
          if ((null === CW || void 0 === CW ? void 0 : CW.name) === WW) RW += null !== (MW = CW.amount) && void 0 !== MW ? MW : 1
        }
        return RW
      }
      instance(WW) {
        var RW;
        return null !== (RW = this.instances[WW]) && void 0 !== RW ? RW : 0
      }
      watch(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      touch() {
        this.version++
      }
      flush(WW) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const MW of [...this.listeners]) try {
            MW()
          } catch (RW) {
            WW(RW)
          }
        }
      }
      chestOpened(WW, RW, MW) {
        this.bV[0] = WW, this.bV[1] = RW, this.bV[2] = MW, this.version++
      }
      refresh() {
        const WW = this.deps.api.apiView,
          RW = gR.r.inventoryViewPtr(WW, 0),
          MW = gR.r.inventoryVersion(WW, 0),
          wW = gR.r.selectedSlot(WW, 0);
        wW !== this.selected && (this.selected = wW, this.version++);
        const CW = gR.r.slotIcon(WW, 0);
        if (CW !== this.slotIconId && (this.slotIconId = CW, this.iconChanged = !0), RW === this.viewPtr && MW === this.viewVersion) return;
        this.viewPtr = RW, this.viewVersion = MW;
        const zR = this.deps.api.memoryData(RW, yw, 4, "the inventory view"),
          AW = zR ? Math.min(zR.getUint32(0, !0), gR.xc) : 0;
        AW !== this.len && (this.len = AW, this.version++);
        let bR = 0;
        for (let yR = 0; yR < gR.xc; yR++) {
          const WW = gR.vc + yR * gR.Fc.BYTES,
            RW = null !== zR && yR < AW ? gR.Fc.item(zR, WW) : 0;
          if (0 === RW || null === zR) {
            0 !== this.ids[yR] && (this.ids[yR] = 0, this.attrRead[yR] = -1, this.instances[yR]++, this.version++);
            continue
          }
          const MW = gR.Fc.amount(zR, WW),
            wW = gR.Fc.attrVersion(zR, WW);
          RW === this.ids[yR] && MW === this.amounts[yR] || this.fill(yR, RW, MW), wW !== this.attrRead[yR] && (this.stale[bR] = yR, this.staleVersion[bR] = wW, bR++)
        }
        bR > 0 && this.fetchAttributes(bR)
      }
      fill(WW, RW, MW) {
        const {
          tables: wW
        } = this.deps, CW = RW !== this.ids[WW];
        let zR = this.facades[WW];
        zR || (zR = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[WW] = zR), CW && (zR.name = wW.nameOfId(RW), zR.typeObj = wW.itemType(RW), zR.attributes = {
          customAttributes: {}
        }, this.attrRead[WW] = -1, this.instances[WW]++), zR.amount = 0 === MW ? null : MW, this.ids[WW] = RW, this.amounts[WW] = MW, this.version++
      }
      fetchAttributes(WW) {
        const {
          api: RW,
          onError: MW
        } = this.deps, wW = RW.memoryView(Uint16Array, RW.scratch(), WW, "item_attributes_batch's slots");
        if (!wW) return void this.markRead(WW);
        wW.set(this.stale.subarray(0, WW));
        const CW = RW.queries.itemAttributesBatch(WW),
          zR = 4294967295 === CW ? null : RW.memoryData(RW.scratch(), CW, 4, "item_attributes_batch's answer");
        if (!zR) return void this.markRead(WW);
        const AW = new Uint8Array(zR.buffer, zR.byteOffset, CW);
        for (let yR = 0; yR + 8 <= CW;) {
          const WW = zR.getUint16(yR, !0),
            RW = zR.getUint32(yR + 4, !0),
            wW = AW.subarray(yR + 8, yR + 8 + RW);
          yR += 8 + (0, tR.Md)(RW);
          const CW = this.facades[WW];
          if (CW && 0 !== this.ids[WW] && 0 !== RW) {
            try {
              CW.attributes = JSON.parse(eM.decode(wW))
            } catch (bR) {
              MW(bR)
            }
            this.version++
          }
        }
        this.markRead(WW)
      }
      markRead(WW) {
        for (let RW = 0; RW < WW; RW++) this.attrRead[this.stale[RW]] = this.staleVersion[RW]
      }
      swap(WW, RW, MW) {
        if (!gw(WW) || !gw(RW)) return !1;
        const wW = this.queries();
        return MW ? this.settle(wW.invSwapLocal(WW, RW), !0) : this.settle(wW.invSwap(WW, RW))
      }
      move(WW, RW, MW) {
        return gw(WW) && gw(RW) && iw(MW) && this.settle(this.queries().invMove(WW, RW, MW))
      }
      quickMove(WW, RW, MW, wW) {
        var CW, zR;
        if (!gw(WW) || !gw(RW) || !gw(MW) || null !== wW && !iw(wW)) return null;
        const AW = this.queries().invQuickMove(WW, RW, MW, null === wW ? -1 : Math.min(wW, NM)),
          bR = AW === gR.ud ? gR.Pb : null !== (CW = null === (zR = this.extras()) || void 0 === zR ? void 0 : zR[1]) && void 0 !== CW ? CW : gR.Pb;
        return this.settle(AW), bR === gR.Pb ? null : bR
      }
      remove(WW, RW, MW) {
        return gw(WW) && iw(RW) && this.settle(this.queries().invRemove(WW, RW, MW ? 1 : 0))
      }
      selectSlot(WW) {
        return gw(WW) && this.settle(this.queries().selectSlot(WW))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(WW, RW, MW) {
        if (!gw(WW) || !Number.isInteger(RW)) return !1;
        const [wW, CW, zR] = MW;
        return this.settle(this.queries().invEnchant(WW, RW, Math.floor(wW), Math.floor(CW), Math.floor(zR)))
      }
      craft(WW, RW, MW) {
        let wW;
        try {
          wW = this.deps.tables.getItemId(WW)
        } catch {
          return tw
        }
        if (!gw(RW) || null !== MW && (Number.isNaN(MW) || MW < 0)) return tw;
        const CW = null === MW || MW > NM ? -1 : Math.floor(MW),
          zR = this.queries().craft(wW, RW, CW);
        let AW = tw;
        const bR = zR === gR.ud ? null : this.extras();
        if (bR) {
          const [WW, RW, MW] = bR;
          AW = {
            YL: WW,
            jK: RW === gR.Pb ? null : RW,
            amountAddedToSlot: MW
          }
        }
        return this.settle(zR), AW
      }
      salvage(WW, RW, MW) {
        let wW;
        try {
          wW = this.deps.tables.getItemId(RW)
        } catch {
          return !1
        }
        return gw(WW) && Number.isInteger(MW) && this.settle(this.queries().salvage(WW, wW, Math.max(Math.min(MW, NM), -NM)))
      }
      craftingView(WW, RW, MW) {
        var wW;
        if (this.stopped) return null;
        const {
          api: CW,
          onError: zR
        } = this.deps, AW = WW ? BM.encode(WW) : null;
        if (null !== AW) {
          if (AW.length > 1024) return zR(new Error(`The crafting station ${WW}'s name is over 1024 bytes`)), null;
          const RW = CW.memoryView(Uint8Array, CW.scratch(), AW.length, "crafting_view's station");
          if (!RW) return null;
          RW.set(AW)
        }
        const bR = gw(RW) && gw(MW),
          yR = CW.queries.craftingView(null !== (wW = null === AW || void 0 === AW ? void 0 : AW.length) && void 0 !== wW ? wW : 0, bR ? RW : 0, bR ? MW : 0);
        return yR < gR.qb.BYTES ? (CW.reportCorruption(`crafting_view's answer of ${yR} bytes`), null) : CW.memoryData(CW.scratch(), yR, 1, "crafting_view's answer")
      }
      queries() {
        var WW, RW;
        return !1 === (null === (WW = (RW = this.deps).beforeOp) || void 0 === WW ? void 0 : WW.call(RW)) ? (this.stopped = !0, TM) : this.deps.api.queries
      }
      extras() {
        const {
          api: WW
        } = this.deps;
        return WW.memoryView(Uint32Array, WW.scratch(), 3, "a sync query's extra words")
      }
      settle(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (WW === gR.rd) RW || (0, nR.c)();
        else if (WW !== gR.ud) {
          const RW = this.deps.cmd();
          RW && function(WW, RW, MW) {
            return (0, nR.c)(), (0, gR._f)(WW, RW, MW)
          }(RW, 0, WW) || this.deps.onError(new Error(`Sync op ${WW}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), WW !== gR.ud
      }
    }
    const JM = 1 / .6,
      PM = [0, 1, 0],
      IM = [0, 0, 0],
      oM = new Uint8Array(0),
      lM = 1.2 * YR.c.bI,
      FM = new TextEncoder,
      fM = [0, 0, 0],
      QM = [0, 0, 0],
      rw = new Map;

    function cwW(WW) {
      let RW = rw.get(WW);
      return RW || (rw.size >= 64 && rw.clear(), RW = FM.encode(`{"emitRate":${WW}}`), rw.set(WW, RW)), RW
    }

    function XM(WW) {
      return Number.isFinite(WW) && WW > 0 ? WW : 0
    }

    function jw(WW, RW) {
      for (let MW = 0; MW < 3; MW++) {
        const wW = Math.abs(RW[MW]);
        fM[MW] = WW[MW] - wW, QM[MW] = 2 * wW
      }
      return Number.isFinite(fM[0] + fM[1] + fM[2] + QM[0] + QM[1] + QM[2])
    }

    function kw(WW, RW) {
      return "pos1" === WW || "pos2" === WW ? void 0 : RW
    }

    function aw(WW, RW, MW) {
      return WW.length > gR.Id.MaxOpts ? (MW(new Error(`${RW}'s particle opts are over ${gR.Id.MaxOpts} bytes of JSON`)), null) : WW
    }
    const sM = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class dM {
      constructor(WW) {
        this.deps = WW, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(WW, RW) {
        var MW;
        const wW = this.sink(),
          CW = null !== (MW = RW.half) && void 0 !== MW ? MW : IM;
        if (!wW || this.live >= gR.Id.MaxLiveKeys || this.nextKey > gR.Id.MaxKey || !jw(RW.pos, CW)) return sM;
        const zR = this.nextKey,
          AW = aw(function(WW) {
            var RW, MW, wW;
            const CW = JSON.stringify({
              texture: "string" === typeof WW.texture ? WW.texture : "smokePuff",
              aR: WW.aR,
              minLifeTime: WW.minLifeTime,
              maxLifeTime: WW.maxLifeTime,
              minSize: WW.minSize,
              maxSize: WW.maxSize,
              minEmitPower: WW.minEmitPower,
              maxEmitPower: WW.maxEmitPower,
              emitRate: XM(WW.emitRate),
              gravity: null !== (RW = WW.gravity) && void 0 !== RW ? RW : IM,
              dir1: null !== (MW = WW.dir1) && void 0 !== MW ? MW : PM,
              dir2: null !== (wW = WW.dir2) && void 0 !== wW ? wW : PM,
              colorGradients: WW.colorGradients,
              blendMode: WW.blendMode
            });
            return FM.encode(CW)
          }(WW), "createParticles", this.deps.onError);
        return AW && (0, gR.jf)(wW, 0, zR, 0, gR.Id.PresetNone, 0, fM, QM, AW) ? (this.nextKey++, this.live++, this.started = !0, new pM(this, this.session, zR, WW, CW)) : sM
      }
      playEffect(WW) {
        const RW = this.sink(),
          {
            pos1: MW,
            pos2: wW
          } = WW;
        if (!RW || !MW || !wW) return;
        for (let zR = 0; zR < 3; zR++) fM[zR] = Math.min(MW[zR], wW[zR]), QM[zR] = Math.abs(wW[zR] - MW[zR]);
        if (!Number.isFinite(fM[0] + fM[1] + fM[2] + QM[0] + QM[1] + QM[2])) return;
        const CW = aw(FM.encode(JSON.stringify(WW, kw)), "playParticleEffect", this.deps.onError);
        CW && (0, gR.df)(RW, 0, 0, gR.Id.PresetNone, gR.Id.HasBox, 0, fM, QM, CW)
      }
      burstPreset(WW, RW, MW) {
        const wW = this.sink(),
          CW = Math.min(Math.floor(MW), gR.Id.MaxBurst);
        if (!wW || !Object.hasOwn(gR.ic, WW) || !(CW > 0)) return;
        const zR = lM;
        for (let AW = 0; AW < 3; AW++) fM[AW] = RW[AW] - zR / 2, QM[AW] = zR;
        Number.isFinite(fM[0] + fM[1] + fM[2]) && (0, gR.df)(wW, 0, 0, gR.ic[WW], gR.Id.HasBox, CW, fM, QM, oM)
      }
      sessionEnded() {
        this.session++;
        const WW = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !WW || (0, gR.kf)(WW, 0)
      }
      sinkFor(WW) {
        return WW === this.session ? this.deps.cmd() : null
      }
      stop(WW, RW) {
        const MW = this.sinkFor(WW);
        MW && (0, gR.mf)(MW, 0, RW) && this.live--
      }
    }
    class pM {
      constructor(WW, RW, MW, wW, CW) {
        this.owner = WW, this.session = RW, this.key = MW, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(CW[0]), Math.abs(CW[1]), Math.abs(CW[2])], this.rate = XM(wW.emitRate), this.emitted = this.rate > 0;
        const zR = wW.maxLifeTime * JM * 1e3 + 250;
        this.stopDelayMs = zR >= 0 ? Math.min(zR, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(WW, RW) {
        const MW = this.sink();
        if (MW) {
          if (RW)
            for (let WW = 0; WW < 3; WW++) this.half[WW] = Math.abs(RW[WW]);
          jw(WW, this.half) && (0, gR.pf)(MW, 0, this.key, gR.Id.HasBox, fM, QM, oM)
        }
      }
      setEmitRate(WW) {
        const RW = this.sink(),
          MW = XM(WW);
        RW && MW !== this.rate && (0, gR.pf)(RW, 0, this.key, 0, IM, IM, cwW(MW)) && (this.rate = MW, this.emitted ||= MW > 0)
      }
      emit(WW) {
        const RW = this.sink(),
          MW = Math.min(Math.floor(WW), gR.Id.MaxBurst);
        RW && MW > 0 && (0, gR.df)(RW, 0, this.key, gR.Id.PresetNone, 0, MW, IM, IM, oM) && (this.emitted = !0)
      }
      emitPoints(WW, RW, MW) {
        const wW = this.sink(),
          CW = Math.min(Math.floor(MW), gR.Id.MaxPoints, Math.floor(RW.length / 4));
        if (!wW || !(CW > 0) || !Number.isFinite(WW[0] + WW[1] + WW[2])) return;
        const zR = new Uint8Array(RW.buffer, RW.byteOffset, CW * gR.Id.PointBytes);
        (0, gR.gf)(wW, 0, this.key, CW, WW, zR) && (this.emitted = !0)
      }
      setDirections(WW, RW) {
        const MW = this.sink();
        if (!MW || !Number.isFinite(WW[0] + WW[1] + WW[2] + RW[0] + RW[1] + RW[2])) return;
        const wW = FM.encode(JSON.stringify({
          dir1: [WW[0], WW[1], WW[2]],
          dir2: [RW[0], RW[1], RW[2]]
        }));
        (0, gR.pf)(MW, 0, this.key, 0, IM, IM, wW)
      }
      stop() {
        const WW = this.sink();
        this.stopped = !0, WW && (this.emitted ? (this.rate > 0 && (0, gR.pf)(WW, 0, this.key, 0, IM, IM, cwW(0)), setTimeout((() => {
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
    const hM = KR.i,
      UM = new TextDecoder;

    function EM(WW, RW) {
      const {
        serverIds: MW,
        kinds: wW
      } = WW;
      let CW = 0;
      for (let zR = 0; zR < MW.length; zR++) {
        const WW = MW[zR];
        if (WW !== gR.id && !lW(wW[zR])) {
          if (CW === RW.length) {
            const WW = new Int32Array(Math.max(64, 2 * CW));
            WW.set(RW), RW = WW
          }
          RW[CW++] = WW
        }
      }
      return {
        ids: RW,
        count: CW
      }
    }

    function VM(WW, RW) {
      return WW.length >= RW ? WW : new Int32Array(Math.max(RW, 2 * WW.length))
    }

    function mw(WW, RW, MW, wW) {
      for (let CW = 0; CW < MW; CW += 4096) {
        const zR = Math.min(4096, MW - CW),
          AW = WW.memoryView(Int32Array, WW.scratch(), zR, "entity_info_batch's ids");
        if (!AW) return !1;
        AW.set(RW.subarray(CW, CW + zR));
        const bR = WW.queries.entityInfoBatch(zR),
          yR = 4294967295 === bR ? null : WW.memoryData(WW.scratch(), bR, 4, "entity_info_batch's records");
        if (!yR) return !1;
        for (let WW = 0; WW + gR.Vb.BYTES <= bR;) {
          const RW = gR.Vb.len(yR, WW);
          wW(gR.Vb.serverId(yR, WW), xw(yR, WW, RW)), WW += gR.Vb.BYTES + (0, tR.Md)(RW)
        }
      }
      return !0
    }

    function xw(WW, RW, MW) {
      var wW, CW, zR;
      const AW = gR.Vb.kind(WW, RW),
        bR = 0 === AW ? null : FW(AW);
      if (null === bR) return null;
      const yR = gR.Vb.variation(WW, RW),
        NW = gR.Vb.pose(WW, RW),
        eW = gR.Vb.meta(WW, RW),
        BW = gR.Vb.mesh(WW, RW),
        tR = 0 !== (gR.Vb.flags(WW, RW) & gR.Tb.HasOpts),
        TW = hM[bR];
      return Object.freeze({
        type: bR,
        variation: yR === gR.pd ? void 0 : null !== (wW = null !== (CW = null === TW || void 0 === TW ? void 0 : TW[yR]) && void 0 !== CW ? CW : null === TW || void 0 === TW ? void 0 : TW[0]) && void 0 !== wW ? wW : "default",
        pose: NW === gR.tc ? void 0 : null !== (zR = gR.Mb[NW]) && void 0 !== zR ? zR : gR.Mb[0],
        metaInfo: eW === gR.tc ? void 0 : gR._c[eW],
        meshKind: BW === gR.tc ? void 0 : gR.Yc[BW],
        meshOpts: tR ? UM.decode(new Uint8Array(WW.buffer, WW.byteOffset + RW + gR.Vb.BYTES, MW)) : void 0
      })
    }
    const vw = 1,
      KM = 2;
    class uM {
      constructor(WW) {
        this.deps = WW, this.wanted = 0, this.mM = !1, this.refused = !1
      }
      get on() {
        return this.mM
      }
      want(WW, RW) {
        this.wanted = RW ? this.wanted | WW : this.wanted & ~WW;
        const MW = 0 !== this.wanted;
        if (MW === this.mM) return;
        const wW = this.deps.cmd();
        null !== wW ? (0, gR.gg)(wW, 0, MW ? 1 : 0) ? (this.mM = MW, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.mM = !1
      }
    }
    class OM {
      constructor(WW) {
        this.deps = WW, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(WW) {
        var RW;
        return this.complete || this.fill(), null !== (RW = this.entries.get("string" === typeof WW ? WW : String(WW))) && void 0 !== RW ? RW : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(WW) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const WW = new Int32Array(2 * this.pending.length);
            WW.set(this.pending), this.pending = WW
          }
          this.pending[this.pendingCount++] = WW
        }
      }
      removed(WW) {
        this.entries.size > 0 && this.entries.delete(String(WW))
      }
      refresh() {
        const WW = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (WW > 0 && this.complete) {
          const {
            api: RW
          } = this.deps;
          let MW = 0;
          const wW = this.ids = VM(this.ids, WW);
          for (let CW = 0; CW < WW; CW++) {
            const WW = this.pending[CW],
              zR = RW.indexById.get(WW);
            void 0 === zR || lW(RW.kinds[zR]) ? this.entries.delete(String(WW)) : wW[MW++] = WW
          }
          MW > 0 && !this.batch(wW, MW) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(vw, !1)
      }
      fill() {
        const {
          api: WW
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: WW
          } = this.deps, RW = WW.on;
          WW.want(vw, !0), !RW && WW.on && (this.refill = this.midFrame)
        }
        const {
          ids: RW,
          count: MW
        } = EM(WW, this.ids);
        this.ids = RW, MW > 0 && !this.batch(RW, MW) && (this.refill = !0)
      }
      batch(WW, RW) {
        return mw(this.deps.api, WW, RW, ((WW, RW) => {
          null === RW ? this.entries.delete(String(WW)) : this.entries.set(String(WW), RW)
        }))
      }
    }
    var nM = MW(3775);

    function GM(WW) {
      if ("message" !== WW.type || WW.PA !== nM.Kb.NewClientOptions || WW.payloadKind !== tR.Qb.Msgpack) return null;
      const RW = (0, UW.e)(WW.payload);
      if (null === RW || "object" !== typeof RW || Array.isArray(RW)) throw new Error("NewClientOptions whose body isn't an object of options");
      return RW
    }
    var LM = MW(1066),
      HM = MW(34858);

    function DM(WW, RW, MW, wW, CW, zR, bR) {
      var yR, NW, eW;
      switch (WW) {
        case gR.be.ToggleMenu: {
          const WW = gR.L[RW];
          AW.k.Sz("toggleMenu", void 0 === WW ? "inventory" : `inventory|${WW}`);
          break
        }
        case gR.be.EditBoard:
          AW.k.Sz("EditBoard", {
            pos: 0 === RW ? null : MW
          });
          break;
        case gR.be.EditCodeBlock:
        case gR.be.ViewCodeBlock:
          AW.k.Sz("EditCodeBlock", {
            pos: MW,
            canChangePos: WW === gR.be.EditCodeBlock
          });
          break;
        case gR.be.EditCustomLobbyBlock:
          AW.k.Sz("EditCustomLobbyBlock", {
            pos: MW
          });
          break;
        case gR.be.OpenIronChest:
          AW.k.Sz("OpenIronChest", {
            pos: MW
          });
          break;
        case gR.be.EditNameTag:
          AW.k.Sz("EditNameTag", null !== (yR = null === (NW = CW.mM()) || void 0 === NW || null === (eW = NW.attributes.customAttributes) || void 0 === eW ? void 0 : eW.text) && void 0 !== yR ? yR : "");
          break;
        case gR.be.EditBook: {
          var BW, tR, iR;
          const WW = null === (BW = CW.mM()) || void 0 === BW ? void 0 : BW.attributes;
          AW.k.Sz("EditBook", {
            pages: (0, LM.Y)(null === WW || void 0 === WW || null === (tR = WW.customAttributes) || void 0 === tR ? void 0 : tR.pages),
            title: null !== (iR = null === WW || void 0 === WW ? void 0 : WW.customDisplayName) && void 0 !== iR ? iR : "Title",
            isPublished: !(null === WW || void 0 === WW || !WW.customDescription)
          });
          break
        }
        case gR.be.CantChangeBlock:
          ! function(WW, RW) {
            const MW = RW.getClientOption("cantChangeError"),
              wW = RW.getClientOption(WW ? "cantBuildError" : "cantBreakError"),
              CW = WW ? MW : wW;
            (RW.getClientOption("canChange") || CW || "You cannot modify this block" !== MW) && AW.k.Sz("showBottomMessage", {
              message: wW || MW,
              type: "Error"
            })
          }(1 === RW, zR);
          break;
        case gR.be.MiddleBarStart:
          AW.k.Sz("middleScreenBarInitiate", {
            duration: wW,
            xZ: 1 === MW[0],
            horizBarRemOffset: RW
          });
          break;
        case gR.be.MiddleBarStop:
          AW.k.Sz("middleScreenBarRemove");
          break;
        case gR.be.Hitmarker:
          AW.k.Sz("localGunHitmarker", {
            zWW: 1 === RW
          });
          break;
        case gR.be.ShotsLeft:
          AW.k.Sz("localPlayerNewShotsLeft", wW);
          break;
        case gR.be.AimingOverlay:
          AW.k.Sz("aimingOverlay", 3 === (3 & RW) ? "sniper" : "none");
          break;
        case gR.be.BottomMessage:
          AW.k.Sz("showBottomMessage", JSON.parse(bR()));
          break;
        case gR.be.Crosshair:
          CW.inaccuracy = (0, EW.d)(wW), (0, HM.c)().crosshairAccuracy(CW.inaccuracy);
          break;
        case gR.be.ChargeStage:
          break;
        case gR.be.EmoteWheelClose:
          AW.k.Sz("requestEmoteWheelClose");
          break;
        case gR.be.BlockMined:
          AW.k.Sz("localBlockMined");
          break;
        default:
          throw new TW.c(`UiEvent of no kind: what ${WW}`)
      }
    }
    var qw = MW(36068),
      ZM = MW(8147),
      SM = MW(1568),
      Ww = MW(34988),
      Rw = MW(34920),
      Mw = MW(3756);
    const ww = 10,
      Cw = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      zC = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Aw = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function bC(WW, RW) {
      let MW, wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const zR = () => (MW = (0, SM.p)(MW, RW()), MW);
      return {
        current: zR,
        watch(RW) {
          const MW = () => {
              RW(zR())
            },
            AW = [WW.watch(MW)];
          return null !== wW && AW.push((0, SM.t)((WW => {
            WW.some(wW) && MW()
          }))), null !== CW && AW.push(CW(MW)), () => {
            for (const WW of AW) WW()
          }
        }
      }
    }

    function yC(WW) {
      return WW && {
        name: WW.name,
        amount: WW.amount,
        attributes: WW.attributes
      }
    }
    const Nw = new WeakMap;

    function ew(WW) {
      let RW = Nw.get(WW);
      return void 0 === RW && (RW = (0, Rw.creativeItemIds)().map((RW => ({
        name: WW.nameOfId(RW),
        amount: WW.isStackableId(RW) ? 1 : null,
        attributes: (0, qw.b)("Gun" === (0, Rw.itemTypeOf)(RW) ? {
          type: "Gun",
          clipSize: (0, Rw.clipSizeOf)(RW)
        } : void 0)
      }))), Nw.set(WW, RW)), RW
    }

    function Bw(WW, RW, MW, wW) {
      const CW = RW => (WW.flush(wW), RW),
        zR = MW => {
          var wW, CW, zR, AW, bR, yR, NW;
          const eW = WW.slot(MW);
          if (!eW) return null;
          const {
            rootName: BW,
            metaStr: tR
          } = RW.getMetaInfo(eW.name);
          return {
            name: eW.name,
            amount: eW.amount,
            attributes: eW.attributes,
            instance: WW.instance(MW),
            displayName: null !== (wW = eW.attributes.customDisplayName) && void 0 !== wW ? wW : RW.getDisplayName(BW),
            requiresAmmo: "RequiresAmmo" === tR,
            clipSize: null !== (CW = null !== (zR = null === (AW = eW.attributes.customAttributes) || void 0 === AW || null === (bR = AW.gunStats) || void 0 === bR ? void 0 : bR.clipSize) && void 0 !== zR ? zR : null === (yR = RW.getGunStats(BW)) || void 0 === yR ? void 0 : yR.clipSize) && void 0 !== CW ? CW : null === (NW = eW.typeObj) || void 0 === NW ? void 0 : NW.clipSize
          }
        },
        bR = function(WW, RW) {
          let MW = null,
            wW = {
              focus: null,
              recipes: [],
              detail: null
            },
            CW = -1;
          const zR = new Set;
          return {
            read() {
              var zR, AW;
              if (null === MW) return null !== wW.focus && (wW = {
                ...wW,
                focus: null
              }), wW;
              if (wW.focus === MW && CW === WW.changes) return wW;
              if (CW = WW.changes, 0 === WW.length) return wW = {
                focus: MW,
                recipes: [],
                detail: null
              }, wW;
              let bR = 0;
              if (null !== MW.recipe) try {
                bR = RW.getItemId(MW.recipe.name)
              } catch {}
              const yR = WW.craftingView(MW.station, bR, null !== (zR = null === (AW = MW.recipe) || void 0 === AW ? void 0 : AW.iH) && void 0 !== zR ? zR : 0);
              return wW = null === yR ? {
                focus: MW,
                recipes: [],
                detail: null
              } : function(WW, RW, MW) {
                let wW = gR.qb.BYTES;
                const CW = [];
                for (let eW = gR.qb.recipes(WW, 0); eW > 0; eW--) {
                  const MW = gR.jb.flags(WW, wW),
                    zR = {
                      name: RW.nameOfId(gR.jb.item(WW, wW)),
                      iH: gR.jb.recipe(WW, wW),
                      requires: [],
                      produces: gR.jb.produces(WW, wW),
                      haveIngredients: 0 !== (MW & gR.fb.HaveIngredients),
                      listed: 0 !== (MW & gR.fb.Listed)
                    };
                  let AW = gR.jb.requires(WW, wW);
                  for (wW += gR.jb.BYTES; AW > 0; AW--) {
                    const MW = gR.kb.items(WW, wW);
                    zR.requires.push({
                      items: gC(WW, wW + gR.kb.BYTES, MW, RW),
                      amt: gR.kb.amount(WW, wW)
                    }), wW += gR.kb.BYTES + 2 * MW
                  }
                  CW.push(zR)
                }
                const zR = gR.qb.flags(WW, 0);
                if (null === MW.recipe || 0 === (zR & gR.mb.Detail)) return {
                  focus: MW,
                  recipes: CW,
                  detail: null
                };
                const AW = {},
                  bR = {};
                for (let eW = gR.qb.ingredients(WW, 0); eW > 0; eW--) {
                  const MW = gR.db.item(WW, wW),
                    CW = gR.db.from(WW, wW),
                    zR = gR.db.amount(WW, wW);
                  wW += gR.db.BYTES;
                  const yR = CW === gR.H ? null : gC(WW, wW, CW, RW);
                  if (null !== yR && (wW += 2 * CW), 0 === MW) continue;
                  const NW = RW.nameOfId(MW);
                  AW[NW] = zR, null !== yR && (bR[NW] = yR)
                }
                const {
                  name: yR,
                  iH: NW
                } = MW.recipe;
                return {
                  focus: MW,
                  recipes: CW,
                  detail: {
                    name: yR,
                    iH: NW,
                    craftAllTimes: gR.qb.craftAllTimes(WW, 0),
                    roomForOne: 0 !== (zR & gR.mb.RoomForOne),
                    resultStackable: Boolean(RW.getItemStat(yR, "stackable")),
                    amounts: AW,
                    ingredientsCraftedFrom: bR
                  }
                }
              }(yR, RW, MW), wW
            },
            setFocus(WW) {
              MW = WW;
              for (const RW of [...zR]) RW()
            },
            watchFocus: WW => (zR.add(WW), () => {
              zR.delete(WW)
            })
          }
        }(WW, RW);
      return {
        states: {
          inventory: bC(WW, (() => {
            const MW = WW.length;
            if (0 === MW) return Cw;
            const wW = [];
            for (let RW = 0; RW < gR.Gd; RW++) wW.push(yC(WW.slot(RW)));
            const CW = WW.slotIcon,
              zR = wW[WW.selectedSlot];
            0 !== CW && zR && (wW[WW.selectedSlot] = {
              ...zR,
              icon: RW.nameOfId(CW)
            });
            const AW = !0 === RW.getClientOption("creative");
            let bR = [],
              yR = null;
            if (MW > gR.Gd) {
              for (let RW = gR.Gd; RW < MW; RW++) bR.push(yC(WW.slot(RW)));
              yR = {
                type: null,
                pos: [...WW.bV],
                numSlots: MW - gR.Gd,
                ironChest: null
              }
            } else AW && (bR = ew(RW));
            return {
              player: wW,
              chestOrCreative: bR,
              chest: yR,
              creative: AW,
              selectedSlot: WW.selectedSlot,
              freeSlots: WW.freeSlots()
            }
          }), (0, SM.k)("creative")),
          hotbar: bC(WW, (() => {
            if (0 === WW.length) return zC;
            const RW = [];
            for (let WW = 0; WW < ww; WW++) RW.push(zR(WW));
            return {
              items: RW,
              ammo: WW.amountOf("Ammo"),
              selectedSlot: WW.selectedSlot
            }
          }), (0, SM.g)("DisplayName", "GunStats")),
          crafting: bC(WW, bR.read, null, bR.watchFocus),
          heldItemAim: bC(WW, (() => {
            var RW;
            if (!MW()) return Aw;
            const wW = null === (RW = WW.mM()) || void 0 === RW ? void 0 : RW.typeObj,
              CW = "Gun" === (null === wW || void 0 === wW ? void 0 : wW.type);
            return {
              gun: CW,
              aimable: CW || !0 === (null === wW || void 0 === wW ? void 0 : wW.showsAimingUi),
              chargeName: "Chargeable" === (null === wW || void 0 === wW ? void 0 : wW.type) ? wW.name : null
            }
          }), null, (WW => function(WW, RW) {
            let MW = WW();
            return (0, Mw.t)((() => {
              const wW = WW();
              wW !== MW && (MW = wW, RW(wW))
            }))
          }(MW, WW)))
        },
        events: {
          hotbarSlotRequested: (0, SM.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, SM.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, SM.b)("numkeyPressed"),
          inventoryDropRequested: (0, SM.b)("DropInvenItem"),
          chestToggled: (0, SM.b)("chestToggleFromServer"),
          chestRefreshed: (0, SM.b)("chestRefreshedFromServer", Tw),
          inventorySynced: (0, SM.b)("syncedInvenFromServer", Tw),
          enchantingTableOpened: (0, SM.b)("enchantingTable", (WW => {
            let {
              position: MW,
              Iz: wW
            } = WW;
            return {
              position: [...MW],
              blockName: RW.getMetaInfo(wW).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(RW) {
            WW.selectSlot(RW), WW.flush(wW)
          },
          removeInventoryItem(RW) {
            let {
              slot: MW,
              amount: wW,
              drop: zR
            } = RW;
            return CW(WW.remove(MW, wW, zR))
          },
          swapInventorySlots(RW) {
            let {
              a: MW,
              b: wW
            } = RW;
            return CW(WW.swap(MW, wW, !1))
          },
          moveInventoryItem(RW) {
            let {
              from: MW,
              to: wW,
              amount: zR
            } = RW;
            return CW(WW.move(MW, wW, zR))
          },
          quickMoveInventoryItem(RW) {
            let {
              slot: MW,
              start: wW,
              end: zR,
              amount: AW
            } = RW;
            return CW(WW.quickMove(MW, wW, zR, AW))
          },
          closeChest() {
            WW.closeChest(), WW.flush(wW), AW.k.Sz("chestClosedByPlayer")
          },
          focusCrafting(WW) {
            bR.setFocus(WW)
          },
          craftRecipe(RW) {
            let {
              name: MW,
              iH: wW,
              times: zR
            } = RW;
            return CW(WW.craft(MW, wW, zR))
          },
          salvageItem(RW) {
            let {
              slot: MW,
              name: wW,
              amount: zR
            } = RW;
            return CW(WW.salvage(MW, wW, zR))
          },
          enchantItem(RW) {
            let {
              slot: MW,
              level: wW,
              tablePos: CW
            } = RW;
            WW.enchant(MW, wW, CW)
          }
        },
        queries: {
          enchantingOffer(MW) {
            let {
              slot: wW,
              blockName: CW
            } = MW;
            return function(WW, RW, MW, wW) {
              const CW = WW.slot(MW);
              if (!CW || !RW.getClientOption("canCraft") || !(0, ZM.j)(wW) || (0, ZM.i)(CW.attributes)) return tC;
              const zR = (0, Rw.enchantmentPerksOf)(RW.getItemId(CW.name));
              if (0 === zR.length) return tC;
              const AW = [];
              for (let bR = 0; bR < Ww.e; bR++) {
                const {
                  commonProb: WW,
                  uncommonProb: RW,
                  rareProb: MW,
                  epicProb: CW,
                  legendaryProb: zR,
                  level: yR
                } = (0, ZM.e)(wW, bR);
                AW.push({
                  level: yR,
                  odds: [WW, RW, MW, CW, zR].map((WW => 100 * WW))
                })
              }
              return {
                perks: [...zR],
                options: AW
              }
            }(WW, RW, wW, CW)
          }
        }
      }
    }
    const tC = Object.freeze({
      perks: [],
      options: []
    });

    function Tw() {
      return null
    }

    function gC(WW, RW, MW, wW) {
      const CW = [];
      for (let zR = 0; zR < MW; zR++) {
        const MW = WW.getUint16(RW + 2 * zR, !0);
        0 !== MW && CW.push(wW.nameOfId(MW))
      }
      return CW
    }
    class iC {
      constructor(WW) {
        this.api = WW, this.positions = new Map, this.targeted = {
          lCW: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          hz: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(WW) {
        let RW = this.positions.get(WW);
        return RW || (this.api.checkValid(WW) || this.api.isLocal(WW) ? (RW = [NaN, NaN, NaN], this.api.readPosition(WW, RW), this.positions.set(WW, RW), RW) : null)
      }
      jbW() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [RW, MW] of this.positions) this.api.readPosition(RW, MW) || this.api.checkValid(RW) || this.api.isLocal(RW) || this.positions.delete(RW);
        const WW = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (gR.r.playerFlags(WW, 0) & gR.Ld.Breaking) && gR.r.breakingProgress(WW, 0) >= 0, this.isBreaking)
          for (let RW = 0; RW < 3; RW++) this.breaking[RW] = gR.r.breakingPos(WW, 0, RW)
      }
      refreshTarget() {
        const WW = this.api.apiView,
          RW = gR.r.targetBlockId(WW, 0);
        if (this.hasTarget = RW !== gR.ld, this.hasTarget) {
          const MW = this.targeted;
          MW.lCW = RW;
          for (let RW = 0; RW < 3; RW++) MW.position[RW] = gR.r.targetBlock(WW, 0, RW), MW.normal[RW] = gR.r.targetNormal(WW, 0, RW), MW.hz[RW] = gR.r.targetAdjacent(WW, 0, RW)
        }
      }
      despawned(WW) {
        const RW = this.positions.get(WW);
        RW && !this.api.isLocal(WW) && (RW.fill(NaN), this.positions.delete(WW))
      }
    }
    var Yw = MW(38169),
      Jw = MW(38160),
      Pw = MW(34979);
    const Iw = 1,
      ow = 2;
    class lw {
      constructor() {
        this.game = new Pw.d, this.client = new Pw.d, this.mM = 0
      }
      setGame(WW) {
        if (null === WW || "object" !== typeof WW) return !1;
        const {
          key: RW,
          value: MW
        } = WW;
        return "string" === typeof RW && (this.game.setBooleanType(RW, Boolean(MW)), !0)
      }
      setClient(WW, RW) {
        this.client.setBooleanType(WW, RW)
      }
      clearGame() {
        this.game = new Pw.d
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Iw : 0) | (this.client._getTotalBooleanVal() ? ow : 0)
      }
      write(WW) {
        const RW = this.perms();
        return RW === this.mM || !(!WW || !(0, gR.ye)(WW, 0, gR.Wb.Keep, RW)) && (this.mM = RW, !0)
      }
    }
    class Fw {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = WW, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: bR.c,
          get y() {
            return RW()
          }
        }
      }
      get hasView() {
        const WW = this.api.apiView,
          RW = gR.r.viewProj;
        return 0 !== RW(WW, 0, 3) || 0 !== RW(WW, 0, 7) || 0 !== RW(WW, 0, 11) || 0 !== RW(WW, 0, 15)
      }
      get cameraPosition() {
        const WW = this.api.apiView,
          {
            eye: RW
          } = this;
        for (let MW = 0; MW < 3; MW++) RW[MW] = gR.r.eye(WW, 0, MW);
        return RW
      }
      get cameraDirection() {
        const WW = this.api.apiView,
          RW = gR.r.viewProj,
          MW = RW(WW, 0, 3),
          wW = RW(WW, 0, 7),
          CW = RW(WW, 0, 11),
          zR = Math.hypot(MW, wW, CW),
          {
            forward: AW
          } = this;
        return zR > 0 && (AW[0] = MW / zR, AW[1] = wW / zR, AW[2] = CW / zR), AW
      }
      get cameraHeading() {
        return gR.r.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return gR.r.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return gR.r.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return gR.r.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(WW) {
        this.clip(WW);
        const {
          clipX: RW,
          clipY: MW,
          clipW: wW
        } = this;
        if (wW > 0) {
          const WW = RW / wW * 50,
            CW = -MW / wW * 50;
          return Math.abs(WW) <= this.screenBandPct.x && Math.abs(CW) <= this.screenBandPct.y ? {
            x: 50 + WW,
            y: 50 + CW
          } : this.clampToBand(WW, CW)
        }
        const CW = this.cameraPosition,
          zR = Math.hypot(WW[0] - CW[0], WW[1] - CW[1], WW[2] - CW[2]),
          AW = this.api.apiView,
          bR = gR.r.viewProj,
          yR = zR > 0 ? RW / zR : 0,
          NW = zR > 0 ? -MW / zR : 0,
          eW = Math.hypot(bR(AW, 0, 1), bR(AW, 0, 5), bR(AW, 0, 9)),
          BW = yR / Math.hypot(bR(AW, 0, 0), bR(AW, 0, 4), bR(AW, 0, 8)),
          tR = NW / eW,
          TW = !(Math.abs(BW) >= .001 || Math.abs(tR) >= .001);
        return this.clampToBand(yR, TW ? -(eW || 1) : NW)
      }
      projectDirectionToScreenPos(WW) {
        if (!this.hasView) return;
        const RW = this.cameraPosition,
          MW = this.along;
        for (let wW = 0; wW < 3; wW++) MW[wW] = RW[wW] + 10 * WW[wW];
        return this.projectWorldPosToScreenPos(MW)
      }
      projectWorldPosToViewport(WW) {
        this.clip(WW);
        const {
          clipX: RW,
          clipY: MW,
          clipW: wW
        } = this;
        return wW > 0 ? {
          x: 50 + RW / wW * 50,
          y: 50 - MW / wW * 50
        } : null
      }
      clip(WW) {
        const RW = this.api.apiView,
          MW = WW[0] - gR.r.origin(RW, 0, 0),
          wW = WW[1] - gR.r.origin(RW, 0, 1),
          CW = WW[2] - gR.r.origin(RW, 0, 2),
          zR = gR.r.viewProj;
        this.clipX = zR(RW, 0, 0) * MW + zR(RW, 0, 4) * wW + zR(RW, 0, 8) * CW + zR(RW, 0, 12), this.clipY = zR(RW, 0, 1) * MW + zR(RW, 0, 5) * wW + zR(RW, 0, 9) * CW + zR(RW, 0, 13), this.clipW = zR(RW, 0, 3) * MW + zR(RW, 0, 7) * wW + zR(RW, 0, 11) * CW + zR(RW, 0, 15)
      }
      clampToBand(WW, RW) {
        return (0, bR.f)(WW, RW, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var fw = MW(3781);
    const Qw = new TextEncoder,
      rC = new Uint8Array(gR.P * gR.N);
    class cC {
      constructor() {
        this.buttons = [], this.mM = !0
      }
      set(WW) {
        this.buttons = WW, this.mM = !1
      }
      attached() {
        this.mM = 0 === this.buttons.length
      }
      write(WW) {
        if (this.mM) return;
        const RW = new Uint8Array(gR.P),
          MW = new Uint8Array(gR.P);
        let wW = 0,
          CW = 0;
        for (const {
            id: zR,
            keycode: AW
          }
          of this.buttons) {
          if (wW === gR.P) break;
          const {
            read: WW,
            written: bR
          } = Qw.encodeInto(zR, rC.subarray(CW, CW + gR.N));
          if (WW < zR.length) continue;
          const yR = fw.k[AW];
          RW[wW] = "number" === typeof yR ? yR : 0, MW[wW] = bR, wW++, CW += bR
        }
        this.mM = (0, gR.oe)(WW, 0, wW, RW, MW, rC.subarray(0, CW))
      }
    }

    function Xw(WW, RW, MW) {
      const wW = Qw.encode(RW);
      return wW.length <= gR.N && function(WW, RW, MW, wW) {
        return (0, nR.c)(), (0, gR.sf)(WW, RW, MW, wW)
      }(WW, 0, MW ? 1 : 0, wW)
    }
    const jC = new TextDecoder;
    class kC {
      constructor(WW) {
        var RW;
        this.options = WW, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = !1, this.promptWatchSent = !1, this.customButtons = new cC, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.cmd = null, this.freeCam = new lw, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Mw = WW => {
          if ((0, TW.i)(WW)) throw WW;
          this.onError(WW)
        }, this.api = WW.api, this.tables = WW.tables, this.onError = null !== (RW = WW.onError) && void 0 !== RW ? RW : WW => {
          console.error("Error in client game callback", WW)
        }, this.renderFrame = new Fw(this.api, WW.screenBandY), this.live = new iC(this.api), this.chunks = new NR(this.api.memory, (() => this.api.apiView)), this.items = new YM({
          api: this.api,
          tables: WW.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: WW.beforeOp
        });
        const MW = () => this.stopped() ? null : this.cmd,
          wW = () => this.sessionLive;
        this.entityInfoWatch = new uM({
          cmd: MW,
          onError: this.onError
        }), this.entityInfo = new OM({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: wW
        }), this.particles = new dM({
          cmd: MW,
          isSessionLive: wW,
          onError: this.onError
        }), this.clientApi = new bw({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: WW.tables,
          cmd: MW,
          sendCmd: () => this.sendCmd(),
          isSessionLive: wW,
          beforeWrite: () => {
            var RW;
            if (this.stopped()) return !1;
            const MW = this.generation;
            return !1 !== (null === (RW = WW.beforeWrite) || void 0 === RW ? void 0 : RW.call(WW)) && MW === this.generation
          },
          playerDbId: () => {
            const WW = this.session;
            if (null === WW) throw new Error("No game session has started, so the local player has no DB id");
            return WW.playerDbId
          },
          playSound: WW.playSound,
          hasPackModel: WW.hasPackModel
        }), this.scriptedCamera = new GW({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: WW.cameraScreen,
          showFacing: WW.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Bw(this.items, this.tables, (() => this.localPlayerAlive()), this.Mw), this.itemSources
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
      clickCodeBlock(WW) {
        const RW = this.sessionLive ? this.sendCmd() : null;
        return null !== RW && (MW = RW, wW = 0, CW = WW[0], zR = WW[1], AW = WW[2], (0, nR.c)(), (0, gR.te)(MW, wW, CW, zR, AW));
        var MW, wW, CW, zR, AW
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(WW) {
        const RW = this.liveCmd();
        return null === RW ? (this.pendingZoom = WW, !1) : (this.pendingZoom = null, (0, gR.Xf)(RW, 0, WW, 1))
      }
      respawn() {
        const WW = this.sessionLive ? this.sendCmd() : null;
        return null !== WW && (RW = WW, MW = 0, (0, nR.c)(), (0, gR.Cf)(RW, MW));
        var RW, MW
      }
      bindCustomButtonKeys(WW) {
        this.customButtons.set(WW)
      }
      pressCustomButton(WW, RW) {
        const MW = this.sessionLive ? this.sendCmd() : null;
        return null !== MW && Xw(MW, WW, RW)
      }
      thirdPersonFor(WW) {
        const RW = this.liveCmd();
        return null !== RW && (0, gR.cg)(RW, 0, null !== WW && void 0 !== WW ? WW : 1 / 0)
      }
      send(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== wW && GR(wW, MW ? tR.Mc : 0, WW, (0, UW.f)(RW))
      }
      socketAttached(WW) {
        this.openSocket = WW, this.socketLeftSinceAttach = !1
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
      attach(WW) {
        const RW = () => WW.isStopped;
        this.stopped = RW, this.cmd = WW.rings.cmd, this.promptWatchSent = !1, this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const MW = this.api.apiView;
        this.overflowGen = gR.r.eventOverflowGen(MW, 0), this.resyncOwed = 0 !== gR.r.eventOverflowMask(MW, 0), WW.setGameHost(this), WW.setEventWalker((WW => {
          this.api.walk(WW, this, RW)
        }))
      }
      watchPromptPick(WW) {
        this.promptWatch = WW, this.writePromptWatch()
      }
      get promptEntity() {
        return !this.promptWatch || this.stopped() ? null : aC(gR.r.promptEntity(this.api.apiView, 0))
      }
      closeGame() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === WW || WW >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, WW, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(WW) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(WW)
      }
      netEvent(WW) {
        "connection" === WW.type ? WW.phase === tR.w.Activated && WW.conn !== this.activeConn && WW.conn > this.closedThrough ? (this.endSession(), this.activeConn = WW.conn, this.endGameGrants(), this.dropGameCamera()) : WW.phase !== tR.w.Left && WW.phase !== tR.w.Closed || WW.conn !== this.activeConn || this.closeGame() : WW.conn === this.activeConn && 0 !== WW.conn && (WW.PA === Jw.s ? this.gunHit(WW.payload) : WW.PA === nM.Kb.EditItemCraftingRecipes || WW.PA === Jw.X ? this.items.touch() : (this.serverOptions(WW), this.gameMessage(WW)));
        const RW = this.options.onNetEvent;
        RW && this.guard((() => {
          RW(WW)
        }))
      }
      serverOptions(WW) {
        const RW = this.options.serverOptions,
          MW = RW ? this.decoded(GM, WW) : null;
        RW && MW && this.guard((() => {
          RW.applyNewClientOptions(MW)
        }))
      }
      gameMessage(WW) {
        let RW = null;
        try {
          RW = function(WW) {
            if ("message" !== WW.type || WW.PA !== nM.Kb.GameCodeMessage || WW.payloadKind !== tR.Qb.Msgpack) return null;
            const RW = (0, UW.e)(WW.payload);
            if (null === RW || "object" !== typeof RW || "string" !== typeof RW.messageType) throw new Error("GameCodeMessage without a messageType");
            return RW
          }(WW)
        } catch (MW) {
          this.sessionLive && this.onError(MW)
        }
        if (RW) {
          const {
            messageType: WW,
            data: MW
          } = RW;
          if ((0, jR.c)(WW)) return void this.guard((() => {
            (0, jR.b)(WW, MW)
          }));
          "freeCamPerms" === WW && this.freeCam.setGame(MW) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (RW => {
            RW.onReceivedMessageFromServer(WW, MW)
          }))
        }
      }
      decoded(WW, RW) {
        try {
          return WW(RW)
        } catch (MW) {
          return this.onError(MW), null
        }
      }
      setClientFreeCameraGrant(WW, RW) {
        this.freeCam.setClient(WW, RW), this.writeFreeCam()
      }
      localPlayerBound(WW) {
        if (0 === this.activeConn || this.sessionLive && WW === this.boundId) return;
        const RW = this.sessionLive;
        let MW, wW, CW, zR;
        this.endSession(), RW && this.restartGameCamera();
        try {
          var AW;
          this.session = null;
          const WW = this.options.sessionInfo(this.activeConn);
          if (this.session = WW, !WW) return;
          MW = WW.gameNameWithVariation, wW = null !== (AW = (0, cR.Jb)(MW)) && void 0 !== AW ? AW : void 0, CW = (0, XW.r)(WW.lobbyName), zR = (0, XW.F)(WW.lobbyName)
        } catch (YW) {
          return void this.onError(YW)
        }
        const bR = {
          localPlayerId: String(WW)
        };
        let yR = {},
          NW = {};
        try {
          var eW, BW;
          yR = null !== (eW = null === (BW = this.options.gameFactory((0, cR.Pb)(MW))) || void 0 === BW ? void 0 : BW(zR, CW, wW, bR)) && void 0 !== eW ? eW : {}
        } catch (YW) {
          this.Mw(YW)
        }
        try {
          var tR, TW;
          NW = {
            ...null === (tR = (TW = this.options).defaultPlugins) || void 0 === tR ? void 0 : tR.call(TW, zR, CW, wW, bR),
            ...yR.plugins
          }
        } catch (YW) {
          this.Mw(YW)
        }
        const gR = [yR, ...Object.values(NW)];
        this.owners = gR, this.tickers = gR.filter((WW => void 0 !== WW.WR)), this.renderers = gR.filter((WW => void 0 !== WW.onAfterRender)), this.receivers = gR.filter((WW => void 0 !== WW.onReceivedMessageFromServer)), this.writeAltVeto(gR), this.writeHooks(gR), this.writePublicLobby(zR), this.boundId = WW, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.round(gR, (WW => {
          var RW;
          null === (RW = WW.onCreate) || void 0 === RW || RW.call(WW, this.clientApi)
        }));
        const iR = this.generation;
        setTimeout((() => {
          iR === this.generation && !0 === this.tables.getClientOption("creative") && ew(this.tables)
        }), 0)
      }
      chunkSlot(WW, RW, MW, wW, CW, zR) {
        this.chunks.apply(WW, RW, MW, wW, CW, zR)
      }
      entityAdded(WW) {
        var RW;
        this.entityInfo.stale(WW), null === (RW = this.options.replayEntities) || void 0 === RW || RW.entityAdded(WW)
      }
      entityInfoChanged(WW) {
        var RW;
        this.entityInfo.stale(WW), null === (RW = this.options.replayEntities) || void 0 === RW || RW.entityInfoChanged(WW)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const WW = performance.now();
          this.round(this.tickers, sw), (0, Mw.c)(performance.now() - WW)
        }
      }
      afterWalk(WW) {
        this.ackEventOverflow(), this.clientApi.flushOwed();
        const RW = this.options.replayEntities;
        RW && this.guard((() => {
          this.entityInfoWatch.want(KM, RW.wantsWatch), RW.flush(this.entityInfoWatch.on)
        }));
        const MW = (0, Mw.j)(WW, gR.r.frameMs(this.api.apiView, 0));
        if (null !== MW) {
          const WW = this.renderFrame;
          this.guard((() => {
            (0, HM.c)().turnDamageIndicators(WW.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(MW)
          })), this.round(this.renderers, (RW => {
            RW.onAfterRender(MW, WW)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== MW)
        } catch (CW) {
          this.Mw(CW)
        }
        this.showZoom(), this.items.flush(this.Mw), this.writePromptWatch(), this.writeCustomButtons();
        const wW = this.ticks;
        this.ticks = 0, (0, Mw.i)(wW, WW, MW, this.Mw)
      }
      entityRemoved(WW) {
        this.live.despawned(WW), this.entityInfo.removed(WW)
      }
      ackEventOverflow() {
        const WW = this.api.apiView,
          RW = gR.r.eventOverflowGen(WW, 0),
          MW = RW - this.overflowGen >>> 0;
        if (0 === MW && !this.resyncOwed) return;
        this.overflowGen = RW;
        const wW = gR.r.eventOverflowMask(WW, 0),
          CW = this.cmd;
        0 === wW || null === CW || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, gR.xe)(CW, 0, wW);
        const zR = this.options.onEventOverflow;
        0 !== MW && zR && this.guard((() => {
          zR(wW, MW)
        }))
      }
      gameCall(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        if (WW === gR.qc.Director) try {
          return this.scriptedCamera.call(RW, MW, wW, CW, zR, AW)
        } catch (NW) {
          return this.Mw(NW), gR.tb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return WW === gR.qc.AltVeto ? 1 : 0;
        try {
          return this.callGames(WW, RW, MW, wW, CW, zR, AW, bR)
        } catch (NW) {
          throw (0, TW.i)(NW) && (this.fault = NW), NW
        }
      }
      takeFault() {
        const WW = this.fault;
        return this.fault = void 0, WW
      }
      callGames(WW, RW, MW, wW, CW, zR, AW, bR) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: yR
        } = this.options, NW = String(this.boundId);
        switch (WW) {
          case gR.qc.AltVeto:
          case gR.qc.AltAction: {
            const bR = 0 !== AW,
              [eW, BW, tR] = bR ? [RW, MW, wW] : [void 0, void 0, void 0],
              TW = bR ? yR.nameOfId(CW) : "Air",
              iR = aC(zR);
            if (WW === gR.qc.AltAction) return this.first((WW => {
              var RW;
              return null === (RW = WW.onPlayerAltAction) || void 0 === RW ? void 0 : RW.call(WW, NW, eW, BW, tR, TW, iR)
            })), 0;
            return "preventAction" === this.first((WW => {
              var RW;
              return null === (RW = WW.onPlayerAttemptAltAction) || void 0 === RW ? void 0 : RW.call(WW, NW, eW, BW, tR, TW, iR)
            })) ? 0 : 1
          }
          case gR.qc.Click: {
            const WW = bR,
              eW = 0 !== (WW & gR.X.Alt),
              BW = 0 !== (WW & gR.X.HasPos),
              tR = BW ? yR.nameOfId(CW) : "Air",
              [TW, iR, YW] = BW ? [RW, MW, wW] : [null, null, null],
              JW = aC(zR),
              PW = 0 !== (WW & gR.X.Up),
              IW = aC(AW);
            if (0 === (WW & gR.X.AttackOnly) && this.first((WW => {
                var RW, MW;
                return PW ? null === (RW = WW.onPlayerClickUp) || void 0 === RW ? void 0 : RW.call(WW, NW, eW, TW, iR, YW, tR, JW) : null === (MW = WW.onPlayerClick) || void 0 === MW ? void 0 : MW.call(WW, NW, eW, TW, iR, YW, tR, JW)
              })), !PW && !eW && null !== IW) {
              const WW = this.clientApi.getPositionView(IW),
                RW = WW ? [WW[0], WW[1], WW[2]] : [0, 0, 0];
              this.first((WW => {
                var MW;
                return null === (MW = WW.onPlayerAttackEntity) || void 0 === MW ? void 0 : MW.call(WW, NW, IW, RW)
              }))
            }
            return 0
          }
          case gR.qc.ChangeBlock: {
            const WW = yR.nameOfId(CW),
              AW = yR.nameOfId(zR);
            return this.first((CW => {
              var zR;
              return null === (zR = CW.onPlayerChangeBlock) || void 0 === zR ? void 0 : zR.call(CW, NW, RW, MW, wW, WW, AW)
            })), 0
          }
          case gR.qc.DropItem: {
            const WW = yR.nameOfId(RW);
            return this.first((RW => {
              var CW;
              return null === (CW = RW.onPlayerDropItem) || void 0 === CW ? void 0 : CW.call(RW, NW, WW, MW, wW)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${WW}`)), 0
        }
      }
      changeBlockFail(WW, RW, MW, wW, CW, zR, AW) {
        const bR = CW === gR.cd ? null : jC.decode(this.api.eventBytes(zR, Math.min(CW, AW)));
        this.failures.push({
          bS: [WW, RW, MW],
          eZ: wW,
          kS: bR
        })
      }
      changeBlockFailEnd() {
        const WW = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (RW => {
          var MW;
          null === (MW = RW.onChangeBlockFail) || void 0 === MW || MW.call(RW, WW)
        })), this.Sz("EditBoard", {
          pos: null
        }), this.Sz("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(WW, RW, MW, wW, CW, zR) {
        WW === gR.Ic.ChestOpened ? this.items.chestOpened(MW, wW, CW) : WW !== gR.Ic.Synced && WW !== gR.Ic.ChestClosed && WW !== gR.Ic.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(WW, RW, MW, wW) {
            switch (WW) {
              case gR.Ic.Synced:
                AW.k.Sz("syncedInvenFromServer");
                break;
              case gR.Ic.ChestOpened:
              case gR.Ic.ChestClosed:
                AW.k.Sz("chestToggleFromServer", WW === gR.Ic.ChestOpened, !0);
                break;
              case gR.Ic.ChestRefreshed:
                AW.k.Sz("chestRefreshedFromServer");
                break;
              case gR.Ic.EnchantingTable:
                AW.k.Sz("enchantingTable", {
                  Iz: wW,
                  position: MW
                });
                break;
              case gR.Ic.HotbarRequest:
                AW.k.Sz("setSelectedInventorySlotI", RW, !0);
                break;
              case gR.Ic.Scrolled:
                AW.k.Sz("ScrollInventorySlot", RW);
                break;
              case gR.Ic.NumberKey:
                AW.k.Sz("numkeyPressed", RW + 1);
                break;
              case gR.Ic.DropRequested:
                AW.k.Sz("DropInvenItem", 0 !== RW);
                break;
              default:
                throw new TW.c(`InventoryEvent of no kind: what ${WW}`)
            }
          }(WW, RW, [MW, wW, CW], zR)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(WW, RW, MW, wW) {
        this.Sz("shotPlayer", {
          playerId: String(WW),
          damage: RW,
          wasCrit: 0 !== wW,
          distance: MW
        })
      }
      localHurt(WW, RW) {
        this.Sz("closeShopOnDamaged", null), this.guard((() => {
          AW.k.Sz("damagedByOtherPlayer", {
            U1: null,
            direction: Number.isNaN(RW) ? null : RW,
            PWW: WW
          })
        }))
      }
      attackHit(WW, RW, MW, wW, CW) {
        this.guard((() => {
          AW.k.Sz("yourAttackHit", {
            zWW: wW,
            screenPos: this.renderFrame.projectDirectionToScreenPos([WW, RW, MW]),
            hitSelf: CW
          })
        }))
      }
      physicsType(WW) {
        this.Sz("PlayerPhysicsTypeUpdate", WW)
      }
      vehicleEffect(WW, RW, MW, wW, CW) {
        this.guard((() => {
          WW === tR.bd.UPDATE ? (0, aR.i)(RW, {
            icon: MW,
            level: wW,
            displayName: null,
            durationMs: CW
          }) : kR.b.remove(RW)
        }))
      }
      zoomChanged(WW) {
        this.zoom = WW, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Sz("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const WW = this.scriptedCamera.holdsView();
        !this.zoomUnshown || WW && this.zoomHeld || (this.zoomUnshown = !1, this.Sz("cameraZoomSet", this.zoom)), this.zoomHeld = WW
      }
      gunHit(WW) {
        this.guard((() => {
          const {
            U1: RW,
            E1: MW
          } = (0, Yw.e)(Jw.s, WW);
          AW.k.Sz("damagedByOtherPlayer", {
            U1: RW,
            direction: MW
          })
        }))
      }
      uiEvent(WW, RW, MW, wW, CW, zR, AW, bR) {
        this.guard((() => {
          DM(WW, RW, [MW, wW, CW], zR, this.items, this.options.tables, (() => jC.decode(this.api.eventBytes(AW, bR))))
        }))
      }
      writeAltVeto(WW) {
        const RW = this.cmd;
        if (!RW) return;
        let MW;
        try {
          MW = function(WW, RW) {
            const MW = new Set;
            let wW = !1;
            for (const CW of WW)
              if (CW.onPlayerAttemptAltAction) {
                if (wW = !0, !CW.altVetoBlocks) return {
                  mode: gR.ee.All,
                  roots: []
                };
                for (const WW of CW.altVetoBlocks) MW.add(RW.getMetaInfo(WW).rootId)
              } return wW ? MW.size > gR.Xc ? {
              mode: gR.ee.All,
              roots: []
            } : {
              mode: gR.ee.Filter,
              roots: [...MW]
            } : {
              mode: gR.ee.Off,
              roots: []
            }
          }(WW, this.options.tables)
        } catch (CW) {
          this.onError(CW), MW = {
            mode: gR.ee.All,
            roots: []
          }
        }
        if (MW.mode === gR.ee.Off && !this.vetoSet) return;
        const wW = new Uint8Array(new Uint32Array(MW.roots).buffer);
        (0, gR.If)(RW, 0, MW.mode, MW.roots.length, wW) ? this.vetoSet = MW.mode !== gR.ee.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(WW) {
        const RW = this.cmd;
        if (!RW) return;
        const MW = function(WW) {
          let RW = 0;
          for (const MW of WW) MW.onPlayerAltAction && (RW |= 1 << gR.qc.AltAction), (MW.onPlayerClick || MW.onPlayerClickUp || MW.onPlayerAttackEntity) && (RW |= 1 << gR.qc.Click), MW.onPlayerChangeBlock && (RW |= 1 << gR.qc.ChangeBlock), MW.onPlayerDropItem && (RW |= 1 << gR.qc.DropItem);
          return RW
        }(WW);
        (0 !== MW || this.hooksSet) && ((0, gR.Sf)(RW, 0, MW) ? this.hooksSet = 0 !== MW : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const WW = this.cmd;
        WW && !this.stopped() && this.customButtons.write(WW)
      }
      writePromptWatch() {
        const WW = this.cmd,
          RW = this.promptWatch;
        RW !== this.promptWatchSent && WW && !this.stopped() && (0, gR.ig)(WW, 0, RW ? 1 : 0) && (this.promptWatchSent = RW)
      }
      writePublicLobby(WW) {
        const RW = this.cmd;
        RW && WW !== this.writtenPublicLobby && ((0, gR.Uf)(RW, 0, WW ? 1 : 0) ? this.writtenPublicLobby = WW : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      first(WW) {
        const RW = this.generation;
        for (const wW of this.owners) {
          if (RW !== this.generation) break;
          try {
            const RW = WW(wW);
            if (void 0 !== RW) return RW
          } catch (MW) {
            this.Mw(MW)
          }
        }
      }
      Sz(WW, RW) {
        this.guard((() => {
          AW.k.Sz(WW, RW)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (WW) {
          this.Mw(WW)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (WW) {
          this.Mw(WW)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const WW = this.owners;
        let RW;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1)
        } catch (wW) {
          RW = wW
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (wW) {
          RW ??= wW
        }
        this.round(WW, dw, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (wW) {
          RW ??= wW
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (wW) {
          RW ??= wW
        }
        const MW = this.options.onSessionEnd;
        if (MW) try {
          MW()
        } catch (wW) {
          this.onError(wW)
        }
        void 0 !== RW && this.Mw(RW)
      }
      round(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = this.generation;
        for (const zR of WW) {
          if (wW !== this.generation) break;
          try {
            RW(zR)
          } catch (CW) {
            MW ? this.onError(CW) : this.Mw(CW)
          }
        }
      }
      guard(WW) {
        try {
          WW()
        } catch (RW) {
          this.Mw(RW)
        }
      }
    }

    function aC(WW) {
      return WW === gR.gd ? null : String(WW)
    }

    function sw(WW) {
      WW.WR(tR.Xc)
    }

    function dw(WW) {
      var RW;
      null === (RW = WW.onClose) || void 0 === RW || RW.call(WW)
    }

    function pw(WW, RW) {
      WW.watch((() => {
        const MW = function(WW) {
          let RW = 0;
          const MW = Math.min(ww, WW.length);
          for (let CW = 0; CW < MW; CW++) {
            var wW;
            const MW = null === (wW = WW.slot(CW)) || void 0 === wW ? void 0 : wW.typeObj,
              zR = MW ? (0, Rw.gunTypeOf)(MW.id) : void 0;
            void 0 !== zR && (RW |= 1 << lR[zR])
          }
          return RW
        }(WW);
        0 !== MW && (RW.preload(MW), RW.preload(1 << FR))
      }))
    }
    var hw = MW(3835),
      Uw = MW(34960);

    function Ew(WW) {
      const RW = new hw.Howl({
          ...(0, Uw.i)(WW),
          pool: 15,
          preload: !1
        }),
        MW = RW.load.bind(RW);
      return RW.load = () => (RW._preload = !0, MW()), RW
    }

    function Vw(WW, RW, MW) {
      const wW = WW.listener;
      if (wW.positionX) mC(wW.positionX, RW, MW, 0), mC(wW.positionY, RW, MW, 1), mC(wW.positionZ, RW, MW, 2), mC(wW.forwardX, RW, MW, 3), mC(wW.forwardY, RW, MW, 4), mC(wW.forwardZ, RW, MW, 5), mC(wW.upX, RW, MW, 6), mC(wW.upY, RW, MW, 7), mC(wW.upZ, RW, MW, 8);
      else {
        let WW = !1;
        for (let wW = 0; wW < 9; wW++) WW ||= RW[wW] !== MW[wW];
        WW && (wW.setPosition(RW[0], RW[1], RW[2]), wW.setOrientation(RW[3], RW[4], RW[5], RW[6], RW[7], RW[8]), MW.set(RW))
      }
    }

    function mC(WW, RW, MW, wW) {
      RW[wW] !== MW[wW] && (WW.value = RW[wW], MW[wW] = RW[wW])
    }
    class xC {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(WW) {
        this.pose.set(WW);
        const RW = hw.d.ctx;
        return !!RW && (RW !== this.watchedCtx && (this.watchedCtx = RW, this.written.fill(Number.NaN), RW.addEventListener("statechange", (() => {
          "running" === RW.state && Vw(RW, this.pose, this.written)
        }))), "running" === RW.state && Vw(RW, WW, this.written), !0)
      }
    }
    var vC = MW(34786),
      Kw = MW(37183);
    let uw = null,
      Ow = null;

    function nw() {
      return null === uw && (uw = document.createElement("div"), uw.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(uw)), uw
    }

    function Gw() {
      return Ow ??= new Kw.d(new vC.d(nw)), Ow
    }

    function Lw() {
      var WW;
      null === (WW = Ow) || void 0 === WW || WW.clear(), Hw(null)
    }

    function Hw(WW) {
      wW.b.get("scriptedCameraFacing") !== WW && wW.b.set({
        scriptedCameraFacing: WW
      })
    }
    var Dw = MW(8262),
      qC = MW(8220),
      Zw = MW(37200),
      Sw = MW(38252),
      WC = MW(2410);
    const RC = Object.entries(gR.mc).reduce(((WW, RW) => {
      let [MW, wW] = RW;
      return WW[wW] = MW, WW
    }), []);

    function MC(WW, RW) {
      var MW;
      return 0 !== ((null !== (MW = WW.itemFlags[RW]) && void 0 !== MW ? MW : 0) & gR.Lc.Stackable)
    }
    const wC = /^(0|[1-9][0-9]*)$/,
      CC = {
        displayName: (WW, RW) => (0, Rw.displayNameOf)(RW),
        description: (WW, RW) => (0, Rw.descriptionOf)(RW),
        type: (WW, RW) => (0, Rw.itemTypeOf)(RW),
        clipSize: (WW, RW) => (0, Rw.clipSizeOf)(RW),
        armourReduction: (WW, RW) => (0, Rw.armourReductionOf)(RW),
        scopeType: (WW, RW) => (0, Rw.scopeTypeOf)(RW),
        stackable: MC,
        harvestType: (WW, RW) => RC[WW.blockHarvestTypes[RW]],
        harvestLevel: (WW, RW) => {
          const MW = WW.blockHarvestLevels[RW];
          return MW === gR.Pc ? void 0 : MW
        },
        harvests: (WW, RW) => {
          var MW;
          const wW = null !== (MW = WW.itemHarvests[RW]) && void 0 !== MW ? MW : 0;
          return 0 !== wW ? RC[wW] : void 0 === (0, Rw.harvestsNullLevelOf)(RW) ? void 0 : null
        },
        level: (WW, RW) => {
          var MW, wW;
          const CW = null !== (MW = WW.itemLevels[RW]) && void 0 !== MW ? MW : gR.Pc;
          return CW !== gR.Pc ? CW : null !== (wW = (0, Rw.harvestsNullLevelOf)(RW)) && void 0 !== wW ? wW : void 0
        }
      };

    function zz(WW, RW, MW) {
      return bz(new Uint8Array(Math.floor(WW.length / RW)), WW, RW, MW)
    }

    function AC(WW, RW, MW) {
      return bz(new Uint16Array(Math.floor(WW.length / RW)), WW, RW, MW)
    }

    function bz(WW, RW, MW, wW) {
      const CW = new DataView(RW.buffer, RW.byteOffset, RW.byteLength);
      for (let zR = 0; zR < WW.length; zR++) WW[zR] = wW(CW, zR * MW);
      return WW
    }
    class yz {
      constructor(WW, RW) {
        this.options = RW, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = WW => {
          const RW = this.idOf(WW);
          if (void 0 === RW) throw new Error(`No item is named ${WW}, an item's root`);
          return RW
        };
        const MW = RW => {
            const MW = RW();
            return new Uint8Array(WW.memory().buffer, WW.scratch(), MW).slice()
          },
          wW = (new TextDecoder).decode(MW((() => WW.queries.itemNames()))).split("\n"),
          CW = MW((() => WW.queries.blockProps())),
          zR = MW((() => WW.queries.itemProps()));
        this.props = {
          blockFlags: zz(CW, gR.B.BYTES, gR.B.flags),
          blockHarvestTypes: zz(CW, gR.B.BYTES, gR.B.harvestType),
          blockHarvestLevels: zz(CW, gR.B.BYTES, gR.B.harvestLevel),
          blockAttachedTops: AC(CW, gR.B.BYTES, gR.B.attachedTop),
          itemFlags: zz(zR, gR.Nc.BYTES, gR.Nc.flags),
          itemHarvests: zz(zR, gR.Nc.BYTES, gR.Nc.harvests),
          itemLevels: zz(zR, gR.Nc.BYTES, gR.Nc.level)
        }, (0, WC.n)(Object.freeze(wW)), (0, Sw.g)()
      }
      idOf(WW) {
        if ("number" === typeof WW) return void 0 === (0, WC.g)(WW) ? void 0 : WW;
        const RW = (0, WC.e)(WW);
        return void 0 === RW && wC.test(WW) ? void 0 === (0, WC.g)(+WW) ? void 0 : +WW : RW
      }
      getMetaInfo(WW) {
        if (!WW || WW === Dw.c) return Dw.e;
        const RW = this.idOf(WW);
        if (void 0 === RW) throw new Error(`Item ${WW} not found in registry`);
        return this.metaOf(RW)
      }
      blockRootId(WW) {
        return 0 !== WW && void 0 !== (0, WC.g)(WW) ? this.metaOf(WW).rootId : WW
      }
      metaOf(WW) {
        return this.metas[WW] ??= (0, qC.i)((0, WC.g)(WW), WW, this.rootIdOf, (0, Rw.rootMetaDescOf)(WW))
      }
      getItemId(WW) {
        if (!WW || WW === Dw.c) return 0;
        const RW = this.idOf(WW);
        if (void 0 === RW) throw new Error(`Invalid block name. You sent ${WW}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return RW
      }
      getItemName(WW) {
        if (!WW || WW === Dw.c) return Dw.c;
        const RW = this.idOf(WW);
        if (void 0 === RW) throw new Error(`Item ${WW} not found in registry`);
        return (0, WC.g)(RW)
      }
      blockNameToBlockId(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (WW === Dw.c) return 0;
        let MW = this.idOf(WW);
        if (void 0 === MW || !this.isBlockId(MW)) {
          const RW = WW.indexOf("|"),
            wW = RW > 0 ? (0, WC.e)(WW.slice(0, RW)) : void 0;
          MW = void 0 !== wW && this.isBlockId(wW) && (0, Rw.rootMetaDescOf)(wW) === WW ? wW : void 0
        }
        if (void 0 !== MW) return MW;
        if (!RW) throw new Error(`Invalid block name. You sent ${WW}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(WW) {
        return WW > 0 && WW < this.props.blockFlags.length
      }
      nameOfId(WW) {
        return 0 !== WW && (0, WC.g)(WW) || Dw.c
      }
      itemType(WW) {
        const RW = WW ? this.idOf(WW) : void 0;
        if (!RW) return null;
        let MW = this.types.get(RW);
        return void 0 === MW && (MW = Object.freeze({
          id: RW,
          name: (0, WC.g)(RW),
          meta: this.getMetaInfo(RW),
          stackable: MC(this.props, RW),
          type: (0, Rw.itemTypeNameOf)(RW),
          clipSize: (0, Rw.clipSizeOf)(RW),
          scopeType: (0, Rw.scopeTypeOf)(RW),
          showsAimingUi: (0, Rw.showsAimingUi)(RW)
        }), this.types.set(RW, MW)), MW
      }
      getItemStat(WW, RW) {
        if (Zw.c.has(RW)) {
          const MW = "minChargeStateToUse" === RW ? this.getMetaInfo(WW).rootName : this.getItemName(WW),
            wW = this.options.get((0, Zw.f)(MW, RW));
          if (null !== wW && void 0 !== wW) return wW
        }
        return this.defaultStat(WW, RW, this.statOf(RW))
      }
      getDisplayName(WW) {
        return this.getItemStat(WW, "displayName")
      }
      getDefaultItemStat(WW, RW) {
        return this.defaultStat(WW, RW, this.statOf(RW))
      }
      statOf(WW) {
        const RW = CC[WW];
        return void 0 === RW && function(WW, RW) {
          throw new Error(`ClientApi.${WW} is not available yet in the wasm client (${RW})`)
        }(`getItemStat("${WW}")`, `a table of the stat: the wasm client answers ${Object.keys(CC).join(", ")}`), RW
      }
      defaultStat(WW, RW, MW) {
        const wW = this.idOf(WW),
          CW = void 0 === wW ? void 0 : MW(this.props, wW);
        return null !== CW && void 0 !== CW || "displayName" !== RW ? CW : this.getItemName(WW)
      }
      getClientOption(WW) {
        return this.options.get(WW)
      }
      getGunStats(WW) {
        return this.getClientOption(`${WW}GunStats`)
      }
      watchClientOption(WW, RW) {
        return this.options.subscribe(WW, RW)
      }
      isSolidBlockId(WW) {
        var RW;
        return 0 !== ((null !== (RW = this.props.blockFlags[WW]) && void 0 !== RW ? RW : 0) & gR.x.Solid)
      }
      isStackableId(WW) {
        return MC(this.props, WW)
      }
      isFluidBlockId(WW) {
        var RW;
        return 0 !== ((null !== (RW = this.props.blockFlags[WW]) && void 0 !== RW ? RW : 0) & gR.x.Fluid)
      }
      canPlaceOverBlockId(WW) {
        var RW;
        return 0 !== ((null !== (RW = this.props.blockFlags[WW]) && void 0 !== RW ? RW : 0) & gR.x.PlaceOver)
      }
      attachedTopOf(WW) {
        var RW;
        return null !== (RW = this.props.blockAttachedTops[WW]) && void 0 !== RW ? RW : 0
      }
      isDroplessBlockId(WW) {
        return (0, Rw.dropsNothing)(WW)
      }
    }

    function NC(WW, RW) {
      const MW = new Map;
      return (wW, CW) => {
        const zR = RW.idOf(wW),
          AW = void 0 === zR ? null : (wW => {
            let CW = MW.get(wW);
            if (void 0 === CW) {
              const zR = WW.queries.salvageRecipe(wW),
                AW = new DataView(WW.memory().buffer, WW.scratch(), zR),
                bR = [];
              for (let WW = 0; WW + gR.Xd.BYTES <= zR; WW += gR.Xd.BYTES) bR.push(Object.freeze({
                item: RW.nameOfId(gR.Xd.item(AW, WW)),
                amt: gR.Xd.amount(AW, WW)
              }));
              CW = 0 === bR.length ? null : Object.freeze(bR), MW.set(wW, CW)
            }
            return CW
          })(zR);
        if (null === AW || void 0 === CW) return AW;
        const bR = CW <= 0 ? 1 : CW;
        return AW.map((WW => {
          let {
            item: RW,
            amt: MW
          } = WW;
          return {
            item: RW,
            amt: MW * bR
          }
        }))
      }
    }
    var eC = MW(38410),
      BC = MW(35135),
      tz = MW(35123),
      TC = MW(35161),
      gz = MW(34716),
      iz = MW(38134),
      YC = MW(40011);
    const JC = -1,
      PC = new Uint8Array(0),
      IC = new TextEncoder;

    function oC(WW) {
      if (null === WW) return null;
      const RW = IC.encode(WW);
      return RW.byteLength < tR.lc ? RW : RW.subarray(0, tR.lc - 1)
    }
    class lC {
      constructor(WW) {
        this.deps = WW, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = JC, this.keyframesSettled = !1, this.reloadFrom = JC
      }
      reloadKeyframes() {
        var WW, RW;
        this.keyframesVersion = JC, this.reloadFrom = null !== (WW = null === (RW = this.view()) || void 0 === RW ? void 0 : RW.version) && void 0 !== WW ? WW : JC
      }
      setPlayback(WW) {
        const RW = 1 === this.deps.core.peW(WW);
        return RW && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = JC, this.reloadFrom = JC), RW
      }
      async open(WW) {
        const RW = await this.deps.replay.open(WW);
        return "opening" === RW && (this.reloadKeyframes(), this.deps.recorder.prefetch()), RW
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(WW)), RW)
      }
      setSpeed(WW) {
        this.deps.replay.setSpeed(WW)
      }
      setCameraMode(WW) {
        this.deps.replay.setCameraMode(YC.e.indexOf(WW))
      }
      view() {
        var WW;
        const RW = gR.r.replayViewPtr(this.deps.apiView(), 0);
        if (0 === RW) return this.lastView = null, null;
        const MW = new DataView(this.deps.buffer(), RW, gR.Pd.BYTES),
          wW = gR.Pd.version(MW, 0),
          CW = this.lastView;
        if (null !== CW && CW.version === wW) return CW;
        const zR = gR.Pd.markIn(MW, 0),
          AW = {
            version: wW,
            state: gR.Pd.state(MW, 0),
            cameraMode: null !== (WW = YC.e[gR.Pd.cameraMode(MW, 0)]) && void 0 !== WW ? WW : "recording",
            WR: gR.Pd.WR(MW, 0),
            totalTicks: gR.Pd.totalTicks(MW, 0),
            speed: gR.Pd.speed(MW, 0),
            mark: zR === gR.Od ? null : {
              inTick: zR,
              outTick: gR.Pd.markOut(MW, 0)
            },
            editVersion: gR.Pd.editVersion(MW, 0)
          };
        return this.lastView = AW, AW
      }
      keyframes() {
        const WW = this.view();
        if (null === WW) return [];
        WW.version !== this.reloadFrom && (this.reloadFrom = JC);
        const RW = this.reloadFrom === JC && WW.state !== tR.Lc.Cropping && WW.state !== tR.Lc.None,
          MW = RW ? WW.editVersion : WW.version;
        if (MW === this.keyframesVersion && RW === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: wW
        } = this.deps, CW = wW.heW(), zR = wW.uA(), AW = [];
        if (0 !== zR && CW > 0) {
          const WW = new DataView(this.deps.buffer(), zR, CW * tR._b);
          for (let RW = 0; RW < CW; RW++) {
            const MW = RW * tR._b,
              wW = RW => WW.getFloat64(MW + RW, !0);
            AW.push({
              WR: WW.getUint32(MW + tR.hc, !0),
              position: [wW(tR.fc), wW(tR.fc + 8), wW(tR.fc + 16)],
              direction: [wW(tR.ac), wW(tR.ac + 8), wW(tR.ac + 16)],
              easing: [wW(tR.cc), wW(tR.cc + 8), wW(tR.cc + 16), wW(tR.cc + 24)]
            })
          }
        }
        return this.keyframesVersion = MW, this.keyframesSettled = RW, this.lastKeyframes = AW, AW
      }
      addKeyframe() {
        const WW = this.deps.apiView(),
          RW = [gR.r.eye(WW, 0, 0), gR.r.eye(WW, 0, 1), gR.r.eye(WW, 0, 2)];
        return this.deps.replay.addKeyframe(RW, function(WW, RW) {
          const MW = Math.cos(RW);
          return [MW * Math.sin(WW), -Math.sin(RW), MW * Math.cos(WW)]
        }(gR.r.heading(WW, 0), gR.r.pitch(WW, 0)))
      }
      setKeyframe(WW) {
        return this.deps.replay.setKeyframe(WW.WR, Float64Array.from([...WW.position, ...WW.direction, ...WW.easing]))
      }
      moveKeyframe(WW, RW) {
        return this.deps.replay.moveKeyframe(WW, RW)
      }
      deleteKeyframes(WW, RW) {
        return this.deps.replay.deleteKeyframes(WW, RW)
      }
      setMark(WW) {
        var RW, MW;
        return this.deps.replay.setMark(null !== (RW = null === WW || void 0 === WW ? void 0 : WW.inTick) && void 0 !== RW ? RW : -1, null !== (MW = null === WW || void 0 === WW ? void 0 : WW.outTick) && void 0 !== MW ? MW : -1)
      }
      crop(WW, RW) {
        const MW = this.deps.replay.crop(WW, RW);
        return MW && this.reloadKeyframes(), MW
      }
      save(WW) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(WW)
      }
      recorderControl(WW) {
        this.deps.recorder.control(WW)
      }
      recorderPrefs(WW, RW) {
        this.deps.recorder.prefs(WW, RW)
      }
      recorderOption(WW, RW) {
        const MW = this.deps.cmd();
        return null !== MW && (0, gR.Af)(MW, 0, WW, null === RW ? PC : IC.encode(RW))
      }
      recordFlyingText(WW, RW, MW, wW) {
        const CW = this.deps.cmd(),
          zR = Math.max(0, Math.min(4294967295, Math.round(wW)));
        return null !== CW && (0, gR.uf)(CW, 0, RW, MW, zR, IC.encode(WW))
      }
      recordPlayerKilled(WW, RW, MW, wW) {
        const CW = this.deps.cmd();
        return null !== CW && (0, gR.Bf)(CW, 0, WW, RW, Math.max(0, MW), IC.encode(wW))
      }
      recordKillfeed(WW, RW, MW) {
        var wW, CW;
        const zR = this.deps.cmd(),
          AW = function(WW) {
            const RW = WW.reduce(((WW, RW) => {
                var MW;
                return WW + nM.V + (null !== (MW = null === RW || void 0 === RW ? void 0 : RW.byteLength) && void 0 !== MW ? MW : 0)
              }), 0),
              MW = new Uint8Array(RW),
              wW = new DataView(MW.buffer);
            let CW = 0;
            for (const AW of WW) {
              var zR;
              wW.setUint16(CW, null !== (zR = null === AW || void 0 === AW ? void 0 : AW.byteLength) && void 0 !== zR ? zR : tR.lc, !0), CW += nM.V, null !== AW && (MW.set(AW, CW), CW += AW.byteLength)
            }
            return MW
          }([oC(WW.name), oC(WW.colour), oC(RW.name), oC(RW.colour), oC(MW)]);
        return null !== zR && (0, gR.wf)(zR, 0, null !== (wW = WW.id) && void 0 !== wW ? wW : gR.id, null !== (CW = RW.id) && void 0 !== CW ? CW : gR.id, AW)
      }
      recorderSession(WW, RW) {
        this.deps.recorder.session({
          session: RW,
          lobbyType: WW.lobbyType,
          game: WW.gameNameWithVariation,
          lobby: WW.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.UeW()
      }
      filePartDone(WW, RW) {
        this.deps.recorder.filePartDone(WW, RW)
      }
      fileDone(WW) {
        this.deps.recorder.fileDone(WW)
      }
    }
    const FC = -2147483648;
    class fC {
      constructor(WW) {
        var RW;
        this.deps = WW, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (RW = WW.now) && void 0 !== RW ? RW : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var WW, RW, MW;
        return null === (WW = null === (RW = (MW = this.deps).live) || void 0 === RW ? void 0 : RW.call(MW)) || void 0 === WW || WW
      }
      activated(WW) {
        var RW, MW;
        this.live && (this.viewerShown(!0 === (null === (RW = (MW = this.deps).viewerOpen) || void 0 === RW ? void 0 : RW.call(MW))), this.deps.client.recorderSession(WW, (0, YC.g)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var WW, RW;
        this.live && (this.state.recording || !0 !== (null === (WW = (RW = this.deps).viewerOpen) || void 0 === WW ? void 0 : WW.call(RW))) ? this.deps.client.recorderControl(tR.vc.ToggleRecording) : this.deps.notify(TC.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(tR.vc.SaveClip) : this.deps.notify(TC.d.clippingNotOn)
      }
      viewerShown(WW) {
        this.live && this.deps.client.recorderControl(WW ? tR.vc.ViewerOpened : tR.vc.ViewerClosed)
      }
      setPrefs(WW, RW) {
        this.live && this.deps.client.recorderPrefs(WW, RW)
      }
      setOption(WW, RW) {
        this.live && this.deps.client.recorderOption(WW, RW)
      }
      recordFlyingText(WW, RW, MW, wW) {
        this.live && this.deps.client.recordFlyingText(WW, RW, MW, wW)
      }
      recordPlayerKilled(WW, RW, MW, wW) {
        this.live && this.deps.client.recordPlayerKilled(WW, RW, MW, wW)
      }
      recordKillfeed(WW, RW, MW) {
        this.live && this.deps.client.recordKillfeed(WW, RW, MW)
      }
      WR() {
        let WW = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, WW = {
            ...WW,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const RW = Math.floor((this.now() - this.recordingSince) / 1e3);
          RW !== WW.seconds && (WW = {
            ...WW,
            seconds: RW
          })
        }
        this.set(WW)
      }
      onEvent(WW) {
        var RW, MW;
        const {
          notify: wW
        } = this.deps, CW = TC.d;
        switch (WW.what) {
          case tR.uc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), wW(CW.recordingStarted);
            break;
          case tR.uc.RecordingStopped:
            this.stopRecording(), wW(CW.recordingStopped), this.saveState(tR.Fc.Recording, "saving");
            break;
          case tR.uc.RecordingDiscarded:
            this.stopRecording(), wW(CW.recordingDiscarded);
            break;
          case tR.uc.RecordingTurnedOff:
            this.stopRecording(), wW(CW.recordingTurnedOff);
            break;
          case tR.uc.LimitReached:
            wW(CW.limitReached);
            break;
          case tR.uc.ClipSaved:
            this.saveState(tR.Fc.Clip, "saving");
            break;
          case tR.uc.ClipEmpty:
            wW(CW.clipEmpty);
            break;
          case tR.uc.ClippingNotOn:
            wW(CW.clippingNotOn);
            break;
          case tR.uc.Disallowed:
            wW(CW.disallowed);
            break;
          case tR.uc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case tR.uc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case tR.uc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case tR.uc.SaveBusy:
            null === (RW = (MW = this.deps).onSaveState) || void 0 === RW || RW.call(MW, WW.kind, "busy"), wW(CW.saveBusy);
            break;
          case tR.uc.CloseViewerFirst:
            wW(CW.closeViewerFirst)
        }
      }
      fileReady(WW, RW) {
        this.deps.download(RW), this.saveState(WW, "done"), this.deps.notify(WW === tR.Fc.Clip ? TC.d.clipSaved : TC.d.recordingSaved)
      }
      failed(WW) {
        this.saveState(WW, "failed"), this.deps.notify(WW === tR.Fc.Clip ? TC.d.clipFailed : TC.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(WW, RW) {
        var MW, wW;
        null === (MW = (wW = this.deps).onSaveState) || void 0 === MW || MW.call(wW, WW, RW)
      }
      set(WW) {
        WW !== this.state && (this.state = WW, this.deps.onState(WW))
      }
    }
    const QC = new TextDecoder;

    function rz(WW, RW, MW, wW) {
      const CW = [];
      for (let zR = 0; zR < wW; zR++) {
        if (RW + nM.V > MW) return null;
        const wW = WW.getUint16(RW, !0);
        if (RW += nM.V, wW !== tR.lc) {
          if (RW + wW > MW) return null;
          CW.push(QC.decode(new Uint8Array(WW.buffer, WW.byteOffset + RW, wW))), RW += wW
        } else CW.push(null)
      }
      return RW === MW ? CW : null
    }

    function cz(WW, RW) {
      let MW = new DataView(new ArrayBuffer(0)),
        wW = !0;
      const CW = {
        replayFailed: (RW, MW) => {
          WW.replayFailed({
            reason: RW,
            code: MW
          })
        },
        replayOption: (RW, CW, zR, AW) => {
          const bR = function(WW, RW, MW, wW) {
            switch (RW) {
              case tR.Hc.Cleared:
                return 0 === wW ? null : void 0;
              case tR.Hc.Text:
                return QC.decode(new Uint8Array(WW.buffer, WW.byteOffset + MW, wW));
              case tR.Hc.Int:
                return wW === Int32Array.BYTES_PER_ELEMENT ? WW.getInt32(MW, !0) : void 0;
              case tR.Hc.Double:
                return wW === Float64Array.BYTES_PER_ELEMENT ? WW.getFloat64(MW, !0) : void 0;
              default:
                return
            }
          }(MW, CW, zR, AW);
          void 0 !== bR ? WW.replayOption({
            key: RW,
            value: bR
          }) : wW = !1
        },
        replayUiEvent: (RW, CW, zR, AW, bR, yR) => {
          const NW = function(WW, RW, MW, wW, CW, zR, AW) {
            const bR = zR + AW;
            switch (RW) {
              case tR.Kc.FlyingText: {
                const AW = rz(WW, zR, bR, 1);
                return null !== AW && null !== AW[0] ? {
                  what: RW,
                  J9: MW,
                  N9: wW,
                  angle: CW,
                  contentJson: AW[0]
                } : null
              }
              case tR.Kc.PlayerKilled: {
                const wW = rz(WW, zR, bR, 3);
                return wW ? {
                  what: RW,
                  killstreak: MW,
                  dead: wW[0],
                  killer: wW[1],
                  withItem: wW[2]
                } : null
              }
              case tR.Kc.Killfeed: {
                const MW = rz(WW, zR, bR, 7);
                return MW ? {
                  what: RW,
                  killerId: MW[0],
                  killerName: MW[1],
                  killerColour: MW[2],
                  victimId: MW[3],
                  victimName: MW[4],
                  victimColour: MW[5],
                  withItem: MW[6]
                } : null
              }
              default:
                return null
            }
          }(MW, RW, CW, zR, AW, bR, yR);
          null !== NW ? WW.replayUiEvent(NW) : wW = !1
        },
        replayFilePart: (MW, CW, zR, AW) => {
          const bR = RW();
          zR + AW > bR.byteLength ? wW = !1 : WW.filePart(MW, CW, new Uint8Array(bR, zR, AW).slice())
        },
        replayFileReady: (RW, MW, wW, CW) => {
          WW.fileReady({
            save: RW,
            kind: MW,
            parts: wW,
            bytes: CW
          })
        },
        recorderEvent: (RW, MW, wW) => {
          WW.recorderEvent({
            what: RW,
            kind: MW,
            save: wW
          })
        },
        replayOpened: (RW, wW, CW) => {
          WW.replayOpened(QC.decode(new Uint8Array(MW.buffer, MW.byteOffset + wW, CW)))
        }
      };
      return (WW, RW, zR, AW) => !(WW < tR.N.ReplayFailed || WW > tR.N.RecorderEvent) && (MW = RW, wW = !0, (0, gR.le)(WW, RW, zR, AW, CW) && wW)
    }

    function XC(WW) {
      let RW = null;
      const MW = cz(WW, (() => {
        if (null === RW) throw new Error("a recorder event read outside recorderEventReader's call");
        return RW.buffer
      }));
      return (WW, wW) => {
        RW = wW;
        try {
          ! function(WW, RW) {
            const MW = WW.slice(),
              wW = new DataView(MW.buffer);
            for (let CW = 0; CW < MW.byteLength;) {
              if (CW + tR.J > MW.byteLength) throw new Error(`the recorder module's events end mid-head at ${CW}`);
              const WW = wW.getUint32(CW, !0),
                zR = 65535 & WW,
                AW = WW >>> 16,
                bR = CW + tR.J;
              if (bR + AW > MW.byteLength || !RW(zR, wW, bR, AW)) throw new Error(`the recorder module wrote a malformed event ${zR} (${AW} bytes) at ${CW}`);
              CW = bR + (0, tR.Md)(AW)
            }
          }(WW, MW)
        } finally {
          RW = null
        }
      }
    }
    class jz {
      constructor(WW, RW) {
        this.acks = WW, this.handlers = RW, this.parts = new Map
      }
      onPart(WW, RW, MW) {
        let wW = this.parts.get(WW);
        wW || (wW = [], this.parts.set(WW, wW)), wW[RW] = MW, this.acks.filePartDone(WW, RW)
      }
      onReady(WW) {
        var RW;
        const MW = null !== (RW = this.parts.get(WW.save)) && void 0 !== RW ? RW : [];
        this.parts.delete(WW.save);
        const wW = function(WW, RW, MW) {
          if (WW.length !== RW) return null;
          let wW = 0;
          for (let AW = 0; AW < RW; AW++) {
            if (void 0 === WW[AW]) return null;
            wW += WW[AW].byteLength
          }
          if (wW !== MW) return null;
          if (1 === RW) return WW[0];
          const CW = new Uint8Array(MW);
          let zR = 0;
          for (const AW of WW) CW.set(AW, zR), zR += AW.byteLength;
          return CW
        }(MW, WW.parts, WW.bytes);
        this.acks.fileDone(WW.save), null === wW ? this.handlers.fileIncomplete(WW.save, WW.kind) : this.handlers.fileReady(WW.save, WW.kind, wW)
      }
      onDiscarded(WW) {
        this.parts.delete(WW)
      }
    }

    function kz() {
      return MW.e(49).then((() => MW(40051)))
    }
    class az {
      constructor(WW) {
        this.deps = WW, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: RW
        } = WW;
        this.recorder = new fC({
          client: RW,
          live: () => {
            var WW;
            return !0 !== (null === (WW = this.viewer) || void 0 === WW ? void 0 : WW.inPlayback)
          },
          viewerOpen: WW.viewerOpen,
          notify: WW.notify,
          download: RW => {
            var MW;
            null === (MW = WW.download) || void 0 === MW || MW.call(WW, RW)
          },
          onState: WW.onRecorderState,
          onSaveState: WW.onSaveState
        }), this.parts = new jz(RW, {
          fileReady: (WW, RW, MW) => {
            var wW;
            RW === tR.Fc.Edited ? null === (wW = this.viewer) || void 0 === wW || wW.saveDone(MW) : this.recorder.fileReady(RW, MW)
          },
          fileIncomplete: (WW, RW) => {
            this.saveFailed(RW)
          }
        });
        const MW = {
          replayFailed: WW => {
            var RW;
            null === (RW = this.viewer) || void 0 === RW || RW.onFailed(WW)
          },
          replayOption: RW => {
            var MW;
            null === (MW = WW.onReplayOption) || void 0 === MW || MW.call(WW, RW)
          },
          replayUiEvent: RW => {
            var MW;
            null === (MW = WW.onReplayUiEvent) || void 0 === MW || MW.call(WW, RW)
          },
          filePart: (WW, RW, MW) => {
            this.parts.onPart(WW, RW, MW)
          },
          fileReady: WW => {
            this.parts.onReady(WW)
          },
          replayOpened: RW => {
            var MW;
            null === (MW = WW.onReplayOpened) || void 0 === MW || MW.call(WW, RW)
          },
          recorderEvent: WW => {
            var RW;
            switch (WW.what) {
              case tR.uc.FileDiscarded:
                this.parts.onDiscarded(WW.save);
                break;
              case tR.uc.SaveFailed:
                this.saveFailed(WW.kind);
                break;
              case tR.uc.SaveBusy:
                if (null !== (RW = this.viewer) && void 0 !== RW && RW.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(WW);
                break;
              default:
                this.recorder.onEvent(WW)
            }
          }
        };
        this.sink = function(WW, RW) {
          return {
            onReplayEvent: cz(WW, RW)
          }
        }(MW, WW.buffer), this.recorderEvents = XC(MW)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var WW;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (WW = this.deps.loadViewer) && void 0 !== WW ? WW : kz)().catch((WW => {
          throw this.viewerChunk = null, WW
        })), this.viewerChunk.then((WW => (this.viewer ??= new WW.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var WW, RW;
            null === (WW = (RW = this.deps).onViewerChange) || void 0 === WW || WW.call(RW)
          }
        }), this.viewer))))
      }
      activated(WW) {
        this.recorder.activated(WW)
      }
      afterFrame(WW) {
        try {
          WW > 0 && this.recorder.WR()
        } finally {
          var RW;
          null === (RW = this.viewer) || void 0 === RW || RW.afterFrame()
        }
      }
      end() {
        var WW;
        null === (WW = this.viewer) || void 0 === WW || WW.end()
      }
      saveFailed(WW) {
        var RW;
        WW === tR.Fc.Edited ? null === (RW = this.viewer) || void 0 === RW || RW.saveFailed(!1) : this.recorder.failed(WW)
      }
    }
    var sC = MW(38164),
      dC = MW(38178),
      pC = MW(3777),
      hC = MW(38474);
    class UC {
      constructor(WW) {
        this.deps = WW, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(WW, RW) {
        if (!this.deps.live() || 0 === WW && 0 === RW) return;
        const MW = (0, EW.u)(0, performance.now()),
          wW = this.deps.dragScale();
        (0, hC.h)((() => {
          (0, EW.w)(tR.jb.MouseDown, 0, 0, 0, MW), (0, EW.w)(tR.jb.MouseMove, 0, WW * wW, RW * wW, 0), (0, EW.w)(tR.jb.MouseUp, 0, 0, 0, MW)
        }))
      }
      move(WW) {
        var RW, MW;
        this.analogue[0] = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.x) && void 0 !== RW ? RW : 0, this.analogue[1] = null !== (MW = null === WW || void 0 === WW ? void 0 : WW.y) && void 0 !== MW ? MW : 0, this.send()
      }
      holdVertical(WW, RW) {
        const MW = "freeCamUp" === WW ? gR._b.Up : gR._b.Down;
        this.keys = RW ? this.keys | MW : this.keys & ~MW, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const WW = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== WW && !(0, gR.Ce)(WW, 0, this.analogue, this.keys)
      }
    }
    var EC = MW(34815),
      VC = MW(249),
      mz = MW(116),
      xz = MW(8103);

    function vz() {
      const {
        mouseSensitivity: WW,
        touchscreenSensitivity: RW,
        cameraFOV: MW
      } = wW.b.get("clientEscMenuOptions");
      return {
        mouse: (0, mz.isMobile)() ? RW : WW,
        touch: RW,
        fovPercent: MW
      }
    }

    function KC() {
      const {
        mouseSensitivity: WW,
        touchscreenSensitivity: RW
      } = wW.b.get("clientEscMenuOptions"), MW = wW.b.get("isTouchScreen") ? RW : WW, CW = vz().mouse;
      return CW > 0 ? MW / CW : 1
    }

    function uC(WW) {
      const RW = () => {
        WW.setSoundPrefs(wW.b.get("soundVolume"), wW.b.get("soundOnFromAd"))
      };
      let MW = null;
      const CW = () => {
        const {
          showFog: RW,
          enableLighting: CW,
          fogChunkDistance: zR,
          chunkFadeIn: AW
        } = wW.b.get("clientEscMenuOptions"), bR = {
          showFog: RW,
          lighting: CW,
          fogChunks: zR,
          chunkFade: AW
        };
        MW && (0, tR.Dd)(MW) === (0, tR.Dd)(bR) && MW.fogChunks === zR || (MW = bR, WW.setEnvPrefs(MW))
      };
      let zR = null;
      const bR = () => {
        const RW = function() {
          const WW = wW.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: wW.b.get("areNametagsHidden"),
            crouchToggle: WW.crouchIsToggle,
            bhopDisabled: WW.disableBunnyHopping,
            disableBobbing: WW.disableBobbing,
            ezTowering: WW.ezTowering && (0, VC.e)(),
            ezBridging: WW.ezBridging,
            showChunkBorders: WW.showChunkBorders,
            edgeGuard: (0, EC.d)(WW),
            nametagCutDistance: (0, xz.c)()
          }
        }();
        (0, cR.Wd)(zR, RW) || (zR = RW, WW.setUiPrefs(RW))
      };
      let yR = null;
      const NW = () => {
        const RW = vz();
        (0, cR.Wd)(yR, RW) || (yR = RW, WW.setLookPrefs(RW))
      };
      RW(), CW(), bR(), NW();
      const eW = [(0, AW.m)("appManagerUpdated|soundVolume", RW), (0, AW.m)("appManagerUpdated|soundOnFromAd", RW), (0, AW.m)("appManagerUpdated|clientEscMenuOptions", (() => {
        CW(), bR(), NW()
      })), (0, AW.m)("appManagerUpdated|areNametagsHidden", bR), (0, AW.m)("appManagerUpdated|showDistantNametags", bR)];
      return () => {
        for (const WW of eW) WW()
      }
    }

    function OC(WW, RW) {
      if (!Object.prototype.hasOwnProperty.call(WW, RW)) throw new TypeError("attempted to use private field on non-instance");
      return WW
    }
    var nC = 0;

    function GC(WW) {
      return "__private_" + nC++ + "_" + WW
    }
    var LC = GC("lend"),
      HC = GC("starting"),
      DC = GC("generation"),
      qz = GC("end");
    class ZC {
      constructor(WW) {
        this.deps = WW, Object.defineProperty(this, qz, {
          value: SC
        }), Object.defineProperty(this, LC, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HC, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, DC, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== OC(this, LC)[LC] || OC(this, HC)[HC]
      }
      async start(WW) {
        if (this.active) return "busy";
        const RW = OC(this, DC)[DC];
        OC(this, HC)[HC] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          OC(this, HC)[HC] = !1
        }
        if (RW !== OC(this, DC)[DC]) return "refused";
        const MW = this.deps.beginSave();
        if (!MW) return "refused";
        const wW = Number(BigInt.asUintN(32, WW)),
          CW = Number(BigInt.asUintN(32, WW >> 32n));
        let zR = "refused";
        return this.deps.recorderCall(((WW, RW) => {
          const AW = MW.editState,
            bR = WW.stage(AW.length);
          0 !== bR ? (new Uint8Array(RW.buffer, bR, AW.length).set(AW), WW.EeW(MW.headLen, wW, CW) && (zR = "sealing")) : zR = "tooLarge"
        }), !0), "sealing" !== zR ? (MW.end(), zR) : (OC(this, LC)[LC] = MW, "sealing")
      }
      beforeRecorderStep() {
        const WW = OC(this, LC)[LC];
        if (!WW) return null;
        let RW = -1,
          MW = 0;
        if (!this.deps.recorderCall((WW => {
            RW = WW.VeW(), RW > 0 && (MW = WW.mBW())
          }))) return OC(this, qz)[qz](WW, "stopped");
        if (RW < 0) return OC(this, qz)[qz](WW, "read");
        if (0 === RW) return null;
        const wW = WW.head(MW, RW);
        let CW = !1;
        if (wW && this.deps.recorderCall(((WW, MW) => {
            const zR = WW.stage(RW);
            0 !== zR && (new Uint8Array(MW.buffer, zR, RW).set(wW), CW = !0)
          }), !0), CW) return null;
        const zR = WW.givenUp();
        this.deps.recorderCall((WW => {
          WW.xBW()
        }));
        const AW = OC(this, qz)[qz](WW, zR ? "givenUp" : "stopped");
        return zR && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), AW
      }
      stop() {
        OC(this, DC)[DC]++;
        const WW = OC(this, LC)[LC];
        WW && (this.deps.recorderCall((WW => {
          WW.xBW()
        })), OC(this, qz)[qz](WW, "stopped"))
      }
    }

    function SC(WW, RW) {
      return OC(this, LC)[LC] = null, WW.end(), RW
    }

    function Wz(WW, RW) {
      const MW = new Uint8Array(4),
        wW = new DataView(MW.buffer);
      return wW.setUint8(0, WW ? 1 : 0), wW.setUint16(2, Math.max(0, Math.min(65535, Math.round(RW))), !0), MW
    }

    function Rz(WW, RW) {
      return WW > function(WW) {
        return 16777216 + 314572.8 * Math.max(0, WW)
      }(RW) + 33554432
    }
    let Mz = null;

    function wz(WW) {
      return Mz ??= async function(WW) {
        const RW = WW.loadInFlight();
        RW && await RW.catch((() => {}));
        if (WW.trapped()) return "trapped";
        if (WW.busy() || !Rz(WW.memoryBytes(), WW.clipSeconds())) return "kept";
        WW.unload();
        let MW = !1;
        try {
          MW = await WW.load()
        } catch {
          MW = !1
        }
        if (!MW) return WW.trapped() ? "trapped" : WW.Qw() ? "Qw" : "failed";
        return "recycled"
      }(WW).finally((() => {
        Mz = null
      })), Mz
    }
    const Cz = "Replay recording couldn't load, so try again.",
      zA = new Set([tR.vc.ToggleRecording, tR.vc.SaveClip]);
    var Az = GC("zC"),
      bA = GC("module"),
      yA = GC("memory"),
      Nz = GC("trapped"),
      ez = GC("Qw"),
      Bz = GC("recycleDue"),
      tA = GC("loading"),
      Tz = GC("generation"),
      gA = GC("viewDrawn"),
      iA = GC("clip"),
      Yz = GC("session"),
      Jz = GC("control"),
      Pz = GC("deferred"),
      Iz = GC("coreU8"),
      oz = GC("coreU32"),
      lz = GC("moduleU8"),
      Fz = GC("edited"),
      fz = GC("sendSession"),
      Qz = GC("checkNotInEvents"),
      rA = GC("clipping"),
      cA = GC("busy"),
      Xz = GC("use"),
      jA = GC("ensureLoaded"),
      kA = GC("loadOnce"),
      aA = GC("recycleAfterStep"),
      sz = GC("settleRecycle"),
      dz = GC("load"),
      pz = GC("attach"),
      hz = GC("resendHeld"),
      Uz = GC("recycle"),
      Ez = GC("send"),
      Vz = GC("unload"),
      mA = GC("dropModule"),
      xA = GC("coreBytes"),
      vA = GC("coreWords"),
      Kz = GC("moduleBytes"),
      uz = GC("loadFailed"),
      Oz = GC("call"),
      nz = GC("guard"),
      Gz = GC("trapOn");
    class Lz {
      constructor(WW) {
        this.deps = WW, Object.defineProperty(this, Gz, {
          value: JA
        }), Object.defineProperty(this, nz, {
          value: YA
        }), Object.defineProperty(this, Oz, {
          value: ib
        }), Object.defineProperty(this, uz, {
          value: gb
        }), Object.defineProperty(this, Kz, {
          value: TA
        }), Object.defineProperty(this, vA, {
          value: tb
        }), Object.defineProperty(this, xA, {
          value: BA
        }), Object.defineProperty(this, mA, {
          value: eA
        }), Object.defineProperty(this, Vz, {
          value: NA
        }), Object.defineProperty(this, Ez, {
          value: yb
        }), Object.defineProperty(this, Uz, {
          value: bb
        }), Object.defineProperty(this, hz, {
          value: AA
        }), Object.defineProperty(this, pz, {
          value: zb
        }), Object.defineProperty(this, dz, {
          value: CA
        }), Object.defineProperty(this, sz, {
          value: wA
        }), Object.defineProperty(this, aA, {
          value: MA
        }), Object.defineProperty(this, kA, {
          value: RA
        }), Object.defineProperty(this, jA, {
          value: WA
        }), Object.defineProperty(this, Xz, {
          value: Sz
        }), Object.defineProperty(this, cA, {
          value: Zz
        }), Object.defineProperty(this, rA, {
          value: qA
        }), Object.defineProperty(this, Qz, {
          value: Dz
        }), Object.defineProperty(this, fz, {
          value: Hz
        }), Object.defineProperty(this, Az, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Nz, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ez, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Bz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Tz, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, gA, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, iA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Jz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Iz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lz, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fz, {
          writable: !0,
          value: void 0
        }), OC(this, Fz)[Fz] = new ZC({
          ensureLoaded: () => OC(this, jA)[jA](),
          recorderCall: (WW, RW) => {
            RW && OC(this, Qz)[Qz]("an edited save's stage");
            const MW = OC(this, Oz)[Oz](((RW, MW) => (WW(RW, MW), !0)));
            return null !== MW && void 0 !== MW && MW
          },
          beginSave: WW.beginSave,
          givenUp: WW.givenUp
        })
      }
      get active() {
        return null !== OC(this, bA)[bA]
      }
      get trapped() {
        return OC(this, Nz)[Nz]
      }
      get loading() {
        return null !== OC(this, tA)[tA]
      }
      prefetch() {
        OC(this, ez)[ez] || OC(this, Nz)[Nz] || OC(this, bA)[bA] || OC(this, tA)[tA] || this.deps.prefetch()
      }
      viewDrawn() {
        OC(this, gA)[gA] = !0, OC(this, rA)[rA]() && OC(this, Xz)[Xz]()
      }
      prefs(WW, RW) {
        OC(this, iA)[iA] = {
          on: WW,
          seconds: RW
        }, OC(this, Ez)[Ez](tR.sc.Prefs, Wz(WW, RW)), WW && OC(this, gA)[gA] && OC(this, Xz)[Xz]()
      }
      control(WW) {
        const RW = function(WW) {
          return new Uint8Array([WW, 0, 0, 0])
        }(WW);
        if (zA.has(WW)) return OC(this, bA)[bA] ? void OC(this, Ez)[Ez](tR.sc.Control, RW) : (OC(this, Jz)[Jz] = RW, void OC(this, Xz)[Xz]());
        OC(this, ez)[ez] || this.deps.coreCommand(tR.sc.Control, RW)
      }
      session(WW) {
        OC(this, Yz)[Yz] = WW, OC(this, fz)[fz](WW)
      }
      filePartDone(WW, RW) {
        OC(this, Ez)[Ez](tR.sc.FilePartDone, function(WW, RW) {
          const MW = new Uint8Array(8),
            wW = new DataView(MW.buffer);
          return wW.setUint32(0, WW, !0), wW.setUint32(4, RW, !0), MW
        }(WW, RW))
      }
      fileDone(WW) {
        return OC(this, Ez)[Ez](tR.sc.FileDone, function(WW) {
          const RW = new Uint8Array(4);
          return new DataView(RW.buffer).setUint32(0, WW, !0), RW
        }(WW)), OC(this, aA)[aA]()
      }
      saveEdited(WW) {
        return OC(this, Qz)[Qz]("saveEdited"), OC(this, Fz)[Fz].start(WW)
      }
      afterFrame() {
        if (!OC(this, bA)[bA]) return;
        "read" === OC(this, Fz)[Fz].beforeRecorderStep() && OC(this, aA)[aA]();
        const WW = OC(this, Bz)[Bz];
        OC(this, Bz)[Bz] = null;
        const RW = OC(this, bA)[bA],
          MW = OC(this, yA)[yA];
        if (!RW || !MW) return void(null === WW || void 0 === WW || WW.resolve(OC(this, Nz)[Nz] ? "trapped" : "kept"));
        const {
          core: wW
        } = this.deps, CW = wW.ueW(2);
        let zR, AW, bR, yR, NW = 0,
          eW = 0;
        if (0 !== CW) {
          var BW, tR;
          const WW = OC(this, vA)[vA]();
          NW = null !== (BW = WW[CW >>> 2]) && void 0 !== BW ? BW : 0, eW = null !== (tR = WW[1 + (CW >>> 2)]) && void 0 !== tR ? tR : 0
        }
        try {
          if (eW > 0) {
            const WW = RW.feed(eW);
            0 !== WW && OC(this, Kz)[Kz](MW).set(OC(this, xA)[xA]().subarray(NW, NW + eW), WW)
          }
          zR = RW.step(), AW = RW.OeW(), bR = RW.neW(), yR = RW.GeW()
        } catch (TW) {
          if (!OC(this, Gz)[Gz](TW)) throw null === WW || void 0 === WW || WW.resolve("kept"), TW;
          return void(null === WW || void 0 === WW || WW.resolve("trapped"))
        }
        if (zR > 0) {
          const WW = wW.LeW(2, zR);
          0 !== WW && OC(this, xA)[xA]().set(OC(this, Kz)[Kz](MW).subarray(AW, AW + zR), WW)
        }
        if (bR > 0) {
          OC(this, Pz)[Pz] = [];
          try {
            this.deps.events(new Uint8Array(MW.buffer, yR, bR), MW)
          } catch (TW) {
            throw null === WW || void 0 === WW || WW.resolve("kept"), TW
          } finally {
            const WW = OC(this, Pz)[Pz];
            OC(this, Pz)[Pz] = null;
            for (const [RW, MW] of WW) OC(this, Ez)[Ez](RW, MW)
          }
        }
        if (!OC(this, rA)[rA]() && !OC(this, cA)[cA]()) return OC(this, Vz)[Vz](), void(null === WW || void 0 === WW || WW.resolve("kept"));
        null === WW || void 0 === WW || WW.resolve(OC(this, Uz)[Uz]())
      }
      dispose() {
        OC(this, ez)[ez] = !0, OC(this, Vz)[Vz]()
      }
    }

    function Hz(WW) {
      OC(this, Ez)[Ez](tR.sc.Session, function(WW) {
        const RW = new TextEncoder,
          MW = RW.encode(WW.game).subarray(0, 65535),
          wW = RW.encode(WW.lobby).subarray(0, 65535),
          CW = new Uint8Array(22 + MW.length + 2 + wW.length),
          zR = new DataView(CW.buffer);
        zR.setFloat64(0, WW.unixMs, !0), zR.setBigUint64(8, BigInt.asUintN(64, WW.session), !0), zR.setUint8(16, WW.lobbyType);
        let AW = 20;
        for (const bR of [MW, wW]) zR.setUint16(AW, bR.length, !0), CW.set(bR, AW + 2), AW += 2 + bR.length;
        return CW
      }({
        ...WW,
        unixMs: this.deps.unixNow()
      }))
    }

    function Dz(WW) {
      false
    }

    function qA() {
      var WW, RW;
      return null !== (WW = null === (RW = OC(this, iA)[iA]) || void 0 === RW ? void 0 : RW.on) && void 0 !== WW && WW
    }

    function Zz() {
      const WW = OC(this, bA)[bA];
      let RW = !0;
      if (WW) try {
        RW = WW.busy()
      } catch (MW) {
        if (!OC(this, Gz)[Gz](MW)) throw MW
      }
      return RW || OC(this, Fz)[Fz].active
    }
    async function Sz() {
      !OC(this, ez)[ez] && this.deps.allowed() ? await OC(this, jA)[jA]() : OC(this, Jz)[Jz] = null
    }

    function WA() {
      return OC(this, Nz)[Nz] || OC(this, ez)[ez] ? Promise.resolve(!1) : OC(this, bA)[bA] ? Promise.resolve(!0) : (OC(this, tA)[tA] ??= OC(this, kA)[kA](), OC(this, tA)[tA])
    }
    async function RA() {
      let WW = !1;
      try {
        return WW = await OC(this, dz)[dz](), WW
      } finally {
        WW || (OC(this, Jz)[Jz] = null), OC(this, tA)[tA] = null
      }
    }

    function MA() {
      if (!OC(this, bA)[bA]) return Promise.resolve(OC(this, Nz)[Nz] ? "trapped" : "kept");
      if (!OC(this, Bz)[Bz]) {
        let WW = () => {};
        const RW = new Promise((RW => {
          WW = RW
        }));
        OC(this, Bz)[Bz] = {
          promise: RW,
          resolve: WW
        }
      }
      return OC(this, Bz)[Bz].promise
    }

    function wA(WW) {
      const RW = OC(this, Bz)[Bz];
      OC(this, Bz)[Bz] = null, null === RW || void 0 === RW || RW.resolve(WW)
    }
    async function CA() {
      let WW = OC(this, Az)[Az];
      if (!WW) {
        const RW = OC(this, Tz)[Tz];
        try {
          WW = await this.deps.load()
        } catch (MW) {
          return RW === OC(this, Tz)[Tz] && await OC(this, uz)[uz](MW), !1
        }
        if (RW !== OC(this, Tz)[Tz]) return this.deps.unload(), !1;
        const wW = WW,
          CW = OC(this, nz)[nz]((() => wW.HeW()));
        if (void 0 === CW) return !1;
        const zR = this.deps.core.DeW();
        if (CW !== zR) return await OC(this, uz)[uz](new Error(`recorder port version ${CW}, the core's ${zR}`)), !1;
        OC(this, Az)[Az] = WW
      }
      const RW = WW;
      try {
        if (!OC(this, nz)[nz]((() => (OC(this, bA)[bA] = new RW.qBW, OC(this, yA)[yA] = RW.vBW(), !0)))) return !1;
        OC(this, hz)[hz]();
        const WW = OC(this, Jz)[Jz];
        return OC(this, Jz)[Jz] = null, WW && OC(this, Ez)[Ez](tR.sc.Control, WW), OC(this, pz)[pz]()
      } catch (MW) {
        return OC(this, Vz)[Vz](), await OC(this, uz)[uz](MW), !1
      }
    }

    function zb() {
      return this.deps.core.ZeW(0), 1 === this.deps.core.ZeW(1) || (OC(this, Vz)[Vz](), this.deps.failed(Cz), !1)
    }

    function AA() {
      OC(this, iA)[iA] && OC(this, Ez)[Ez](tR.sc.Prefs, Wz(OC(this, iA)[iA].on, OC(this, iA)[iA].seconds)), OC(this, Yz)[Yz] && OC(this, fz)[fz](OC(this, Yz)[Yz])
    }

    function bb() {
      return wz({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var WW, RW;
          return null !== (WW = null === (RW = OC(this, iA)[iA]) || void 0 === RW ? void 0 : RW.seconds) && void 0 !== WW ? WW : 0
        },
        trapped: () => OC(this, Nz)[Nz],
        busy: () => OC(this, cA)[cA](),
        loadInFlight: () => OC(this, tA)[tA],
        Qw: () => OC(this, ez)[ez],
        unload: () => {
          OC(this, Vz)[Vz]()
        },
        load: () => OC(this, jA)[jA]()
      })
    }

    function yb(WW, RW) {
      OC(this, Pz)[Pz] ? OC(this, Pz)[Pz].push([WW, RW]) : OC(this, Oz)[Oz](((MW, wW) => {
        const CW = MW.KeW(RW.length);
        0 !== CW && (new Uint8Array(wW.buffer, CW, RW.length).set(RW), MW.command(WW, RW.length))
      }))
    }

    function NA() {
      OC(this, Tz)[Tz]++, OC(this, sz)[sz]("kept"), OC(this, Fz)[Fz].stop(), this.deps.core.ZeW(0), OC(this, mA)[mA](), OC(this, Nz)[Nz] || (OC(this, Az)[Az] = null, this.deps.unload())
    }

    function eA() {
      OC(this, Oz)[Oz]((WW => {
        WW.free()
      })), OC(this, bA)[bA] = null, OC(this, yA)[yA] = null, OC(this, lz)[lz] = null
    }

    function BA() {
      var WW;
      const RW = this.deps.coreBuffer();
      return (null === (WW = OC(this, Iz)[Iz]) || void 0 === WW ? void 0 : WW.buffer) !== RW && (OC(this, Iz)[Iz] = new Uint8Array(RW)), OC(this, Iz)[Iz]
    }

    function tb() {
      var WW;
      const RW = this.deps.coreBuffer();
      return (null === (WW = OC(this, oz)[oz]) || void 0 === WW ? void 0 : WW.buffer) !== RW && (OC(this, oz)[oz] = new Uint32Array(RW, 0, RW.byteLength >>> 2)), OC(this, oz)[oz]
    }

    function TA(WW) {
      var RW;
      const MW = WW.buffer;
      return (null === (RW = OC(this, lz)[lz]) || void 0 === RW ? void 0 : RW.buffer) !== MW && (OC(this, lz)[lz] = new Uint8Array(MW)), OC(this, lz)[lz]
    }
    async function gb(WW) {
      await this.deps.staleOr(WW, (() => {
        this.deps.failed(Cz)
      }))
    }

    function ib(WW) {
      const RW = OC(this, bA)[bA],
        MW = OC(this, yA)[yA];
      if (RW && MW) return OC(this, nz)[nz]((() => WW(RW, MW)))
    }

    function YA(WW) {
      if (!OC(this, Nz)[Nz]) try {
        return WW()
      } catch (RW) {
        if (!OC(this, Gz)[Gz](RW)) throw RW;
        return
      }
    }

    function JA(WW) {
      return WW instanceof WebAssembly.RuntimeError && (OC(this, Nz)[Nz] = !0, OC(this, bA)[bA] = null, OC(this, yA)[yA] = null, OC(this, lz)[lz] = null, OC(this, Az)[Az] = null, OC(this, Jz)[Jz] = null, OC(this, sz)[sz]("trapped"), this.deps.core.ZeW(0), OC(this, Fz)[Fz].stop(), this.deps.crash(this.deps.markTrapped(WW)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var PA = MW(36688);
    const IA = new Map([
      ["skyblock", () => MW.e(41).then((() => MW(36683)))]
    ]);

    function oA(WW) {
      const RW = IA.get(WW);
      return RW ? RW().then((() => {
        const RW = (0, PA.c)(WW);
        if (!RW) throw new Error(`${WW}'s replay hook module registered no hook`);
        return RW
      })) : null
    }
    class lA {
      constructor(WW) {
        this.deps = WW, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(WW) {
        if (this.pending.clear(), WW === this.game && null !== this.hook) return void(this.all = !0);
        const RW = ++this.generation;
        this.game = WW, this.hook = null, this.all = !1;
        const MW = this.deps.loadHook(WW);
        null === MW || void 0 === MW || MW.then((WW => {
          RW === this.generation && (this.hook = WW, this.all = !0)
        }), (WW => {
          RW === this.generation && this.deps.onError(WW)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(WW) {
        null === this.hook || this.all || this.pending.set(WW, !0)
      }
      entityInfoChanged(WW) {
        null === this.hook || this.all || this.pending.has(WW) || this.pending.set(WW, !1)
      }
      flush(WW) {
        const {
          hook: RW
        } = this;
        if (null === RW || !WW || !this.all && 0 === this.pending.size) return;
        const MW = this.deps.cmd();
        if (null === MW) return;
        const {
          api: wW
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: WW,
            count: RW
          } = EM(wW, this.ids);
          this.ids = WW;
          for (let MW = 0; MW < RW; MW++) this.pending.set(WW[MW], !0)
        }
        const CW = this.ids = VM(this.ids, this.pending.size);
        let zR = 0;
        for (const NW of this.pending.keys()) CW[zR++] = NW;
        const AW = [],
          bR = mw(wW, CW, zR, ((WW, RW) => {
            null !== RW && AW.push({
              serverId: WW,
              info: RW,
              spawned: !0 === this.pending.get(WW)
            })
          }));
        if (bR) {
          this.pending.clear();
          for (const {
              serverId: WW,
              info: wW,
              spawned: CW
            }
            of AW) try {
            RW(wW, {
              setFacingTolerance: RW => {
                null === RW && CW || AM(MW, WW, RW) || this.pending.set(WW, CW)
              }
            })
          } catch (yR) {
            this.deps.onError(yR)
          }
        }
      }
    }
    var FA = GC("zC"),
      fA = GC("module"),
      QA = GC("memory"),
      rb = GC("trapped"),
      cb = GC("generation"),
      XA = GC("loading"),
      jb = GC("lend"),
      kb = GC("givenUp"),
      ab = GC("afterSave"),
      sA = GC("opens"),
      dA = GC("saveAskedAt"),
      pA = GC("unload"),
      hA = GC("dropModule"),
      UA = GC("loadFailed"),
      EA = GC("saveReadsBody"),
      VA = GC("command"),
      mb = GC("call"),
      xb = GC("guard"),
      vb = GC("trapOn");
    class KA {
      constructor(WW) {
        this.deps = WW, Object.defineProperty(this, vb, {
          value: qb
        }), Object.defineProperty(this, xb, {
          value: DA
        }), Object.defineProperty(this, mb, {
          value: HA
        }), Object.defineProperty(this, VA, {
          value: LA
        }), Object.defineProperty(this, EA, {
          get: GA,
          set: void 0
        }), Object.defineProperty(this, UA, {
          value: nA
        }), Object.defineProperty(this, hA, {
          value: OA
        }), Object.defineProperty(this, pA, {
          value: uA
        }), Object.defineProperty(this, FA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rb, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, cb, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, XA, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ab, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sA, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, dA, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== OC(this, fA)[fA] && null === OC(this, ab)[ab]
      }
      async open(WW) {
        if (OC(this, rb)[rb]) return tR.Dc.ModuleTrap;
        let RW = OC(this, FA)[FA];
        if (!RW) {
          const WW = OC(this, cb)[cb];
          OC(this, XA)[XA]++;
          try {
            RW = await this.deps.load()
          } catch (wW) {
            return OC(this, XA)[XA]--, WW !== OC(this, cb)[cb] ? "stopped" : OC(this, UA)[UA](wW)
          }
          if (OC(this, XA)[XA]--, WW !== OC(this, cb)[cb]) return OC(this, FA)[FA] || 0 !== OC(this, XA)[XA] || OC(this, rb)[rb] || this.deps.unload(), "stopped";
          if (OC(this, rb)[rb]) return tR.Dc.ModuleTrap;
          const MW = RW.HeW(),
            CW = this.deps.core.DeW();
          if (MW !== CW) return OC(this, UA)[UA](new Error(`replay port version ${MW}, the core's ${CW}`));
          OC(this, FA)[FA] = RW
        }
        if (!OC(this, fA)[fA]) {
          const WW = RW;
          if (!OC(this, xb)[xb]((() => {
              OC(this, fA)[fA] = new WW.SeW, OC(this, QA)[QA] = WW.WBW()
            }))) return tR.Dc.ModuleTrap
        }
        let MW = !1;
        return OC(this, mb)[mb](((RW, wW) => {
          null !== OC(this, ab)[ab] && RW.step(0, 0);
          const CW = RW.stage(WW.length);
          0 !== CW && (new Uint8Array(wW.buffer, CW, WW.length).set(WW), RW.open(), OC(this, kb)[kb] = OC(this, jb)[jb], OC(this, ab)[ab] = null, OC(this, sA)[sA]++, MW = !0)
        })) ? MW ? "opening" : tR.Dc.TooLarge : tR.Dc.ModuleTrap
      }
      beforeFrame(WW) {
        const RW = OC(this, fA)[fA],
          MW = OC(this, QA)[QA];
        if (!RW || !MW || null !== OC(this, ab)[ab]) return;
        const {
          core: wW
        } = this.deps, CW = wW.RBW(WW);
        if (CW < 0) return;
        const zR = Math.floor(CW);
        let AW, bR;
        try {
          AW = RW.step(zR, CW - zR), bR = RW.OeW()
        } catch (NW) {
          return void OC(this, vb)[vb](NW)
        }
        const yR = wW.LeW(1, AW);
        if (0 === yR) {
          const WW = OC(this, mb)[mb]((WW => {
            WW.close()
          }));
          if (!WW) return;
          return OC(this, EA)[EA] ? OC(this, ab)[ab] = "drop" : OC(this, hA)[hA](), void wW.MBW(tR.Dc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), yR, AW).set(new Uint8Array(MW.buffer, bR, AW))
      }
      play() {
        OC(this, VA)[VA]((WW => {
          WW.play()
        }))
      }
      pause() {
        OC(this, VA)[VA]((WW => {
          WW.pause()
        }))
      }
      seek(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        OC(this, VA)[VA]((MW => {
          MW.seek(WW, RW)
        }))
      }
      setMark(WW, RW) {
        return OC(this, VA)[VA]((MW => {
          MW.wBW(WW, RW)
        }))
      }
      addKeyframe(WW, RW) {
        return OC(this, VA)[VA]((MW => {
          MW.CBW(WW[0], WW[1], WW[2], RW[0], RW[1], RW[2])
        }))
      }
      setKeyframe(WW, RW) {
        return OC(this, VA)[VA]((MW => {
          MW.ztW(WW, RW)
        }))
      }
      moveKeyframe(WW, RW) {
        return OC(this, VA)[VA]((MW => {
          MW.ABW(WW, RW)
        }))
      }
      deleteKeyframes(WW, RW) {
        return OC(this, VA)[VA]((MW => {
          MW.btW(WW, RW)
        }))
      }
      crop(WW, RW) {
        return null === OC(this, jb)[jb] && OC(this, VA)[VA]((MW => {
          MW.crop(WW, RW)
        }))
      }
      beginSave() {
        const WW = OC(this, dA)[dA];
        if (OC(this, dA)[dA] = null, null !== WW && WW !== OC(this, sA)[sA]) return null;
        let RW = 0,
          MW = null;
        if (OC(this, mb)[mb](((WW, wW) => {
            RW = WW.save(), 0 !== RW && (MW = new Uint8Array(wW.buffer, WW.ytW(), WW.NBW()).slice())
          })), 0 === RW || !MW) return null;
        const wW = {
          headLen: RW,
          editState: MW,
          givenUp: () => OC(this, kb)[kb] === wW,
          head: (WW, RW) => {
            if (OC(this, jb)[jb] !== wW || !OC(this, EA)[EA]) return null;
            let MW = null;
            return OC(this, mb)[mb](((wW, CW) => {
              const zR = wW.eBW();
              0 !== zR && WW >= 0 && RW >= 0 && WW + RW <= zR && (MW = new Uint8Array(CW.buffer, wW.BBW() + WW, RW))
            })), MW
          },
          end: () => {
            if (OC(this, jb)[jb] !== wW) return;
            OC(this, jb)[jb] = null, OC(this, kb)[kb] = null, OC(this, mb)[mb]((WW => {
              WW.ttW()
            }));
            const WW = OC(this, ab)[ab];
            OC(this, ab)[ab] = null, "unload" === WW ? OC(this, pA)[pA]() : "drop" === WW && OC(this, hA)[hA]()
          }
        };
        return OC(this, jb)[jb] = wW, wW
      }
      askSave() {
        OC(this, dA)[dA] = OC(this, sA)[sA]
      }
      setSpeed(WW) {
        OC(this, VA)[VA]((RW => {
          RW.TBW(WW)
        }))
      }
      setCameraMode(WW) {
        OC(this, VA)[VA]((RW => {
          RW.gtW(WW)
        }))
      }
      close() {
        OC(this, VA)[VA]((WW => {
          WW.close()
        }))
      }
      stop() {
        OC(this, cb)[cb]++, OC(this, EA)[EA] && (OC(this, mb)[mb]((WW => {
          WW.close()
        })), OC(this, fA)[fA]) ? OC(this, ab)[ab] = "unload" : OC(this, pA)[pA]()
      }
    }

    function uA() {
      OC(this, hA)[hA](), OC(this, rb)[rb] || (OC(this, FA)[FA] = null, this.deps.unload())
    }

    function OA() {
      OC(this, mb)[mb]((WW => {
        WW.free()
      })), OC(this, fA)[fA] = null, OC(this, QA)[QA] = null
    }
    async function nA(WW) {
      return await this.deps.staleOr(WW, (() => {})) ? "reloading" : tR.Dc.ModuleLoad
    }

    function GA() {
      return null !== OC(this, jb)[jb] && OC(this, kb)[kb] !== OC(this, jb)[jb]
    }

    function LA(WW) {
      return null === OC(this, ab)[ab] && OC(this, mb)[mb](WW)
    }

    function HA(WW) {
      const RW = OC(this, fA)[fA],
        MW = OC(this, QA)[QA];
      return !(!RW || !MW) && OC(this, xb)[xb]((() => {
        WW(RW, MW)
      }))
    }

    function DA(WW) {
      if (OC(this, rb)[rb]) return !1;
      try {
        return WW(), !0
      } catch (RW) {
        return OC(this, vb)[vb](RW), !1
      }
    }

    function qb(WW) {
      if (!(WW instanceof WebAssembly.RuntimeError)) throw WW;
      OC(this, rb)[rb] = !0, OC(this, fA)[fA] = null, OC(this, QA)[QA] = null, OC(this, FA)[FA] = null, this.deps.crash(this.deps.markTrapped(WW)), this.deps.core.MBW(tR.Dc.ModuleTrap)
    }
    var ZA = MW(5478),
      SA = MW(38236);
    const Wb = "[bloxd-wasm-client]";
    const Rb = String(FC);

    function Mb(WW) {
      return null === WW || WW === Rb ? void 0 : WW
    }

    function wb(WW) {
      var RW, MW, wW, CW, zR, bR, yR;
      switch (WW.what) {
        case tR.Kc.FlyingText: {
          let RW;
          try {
            RW = JSON.parse(WW.contentJson)
          } catch (NW) {
            return void console.warn(`${Wb} a replay's flying text isn't JSON`, NW)
          }
          AW.k.Sz("forceFlyingMiddleMessage", {
            content: RW,
            N9: WW.N9,
            angle: WW.angle,
            J9: WW.J9
          });
          break
        }
        case tR.Kc.PlayerKilled:
          (0, SA.i)({
            kind: "killed",
            body: {
              deadEId: null !== (RW = Mb(WW.dead)) && void 0 !== RW ? RW : "",
              killerEId: Mb(WW.killer),
              withItem: null !== (MW = WW.withItem) && void 0 !== MW ? MW : "",
              killstreak: WW.killstreak
            }
          });
          break;
        case tR.Kc.Killfeed:
          (0, SA.i)({
            kind: "custom",
            body: {
              killer: {
                eId: Mb(WW.killerId),
                name: null !== (wW = WW.killerName) && void 0 !== wW ? wW : void 0,
                colour: null !== (CW = WW.killerColour) && void 0 !== CW ? CW : void 0
              },
              victim: {
                eId: Mb(WW.victimId),
                name: null !== (zR = WW.victimName) && void 0 !== zR ? zR : void 0,
                colour: null !== (bR = WW.victimColour) && void 0 !== bR ? bR : void 0
              },
              withItem: null !== (yR = WW.withItem) && void 0 !== yR ? yR : ""
            }
          })
      }
    }
    const Cb = "[bloxd-wasm-client]";

    function zy(WW) {
      if (void 0 === WW || null === WW || "" === WW) return null;
      const RW = Number(WW);
      return Number.isInteger(RW) && RW > FC && RW <= 2147483647 ? RW : null
    }

    function Ab(WW) {
      return {
        id: zy(WW.eId),
        name: "string" === typeof WW.name ? WW.name : null,
        colour: "string" === typeof WW.colour ? WW.colour : null
      }
    }

    function by(WW) {
      const RW = (0, dC.g)(nM.Kb.PlayerKilled, (RW => {
          var MW, wW;
          const CW = (0, sC.h)(RW);
          if (!(0, sC.c)(CW)) return;
          const {
            deadEId: zR,
            killerEId: AW,
            withItem: bR,
            killstreak: yR
          } = CW;
          WW.recordPlayerKilled(null !== (MW = zy(zR)) && void 0 !== MW ? MW : FC, null !== (wW = zy(AW)) && void 0 !== wW ? wW : FC, "number" === typeof yR ? yR : 0, "string" === typeof bR ? bR : "")
        })),
        MW = (0, dC.g)(nM.Kb.CustomKillfeed, (RW => {
          const MW = (0, sC.h)(RW);
          if (!(0, sC.c)(MW) || !(0, sC.c)(MW.killer) || !(0, sC.c)(MW.victim)) return;
          const {
            killer: wW,
            victim: CW,
            withItem: zR
          } = MW;
          WW.recordKillfeed(Ab(wW), Ab(CW), "string" === typeof zR ? zR : null)
        }));
      return () => {
        RW(), MW()
      }
    }

    function yy(WW) {
      var RW;
      return void 0 === WW || null === WW ? null : null !== (RW = JSON.stringify(WW)) && void 0 !== RW ? RW : null
    }

    function Nb(WW) {
      let RW = null;
      const MW = () => {
        const {
          enableClipping: MW,
          clipDurationSeconds: CW
        } = wW.b.get("clientEscMenuOptions"), zR = `${MW}:${CW}`;
        zR !== RW && (RW = zR, WW.recorder.setPrefs(MW, CW))
      };
      return MW(), (0, AW.m)("appManagerUpdated|clientEscMenuOptions", MW)
    }
    const eb = "replayModule",
      Bb = "recorderModule";

    function ty(WW, RW, MW) {
      return function() {
        return WW.isStopped ? MW : RW(...arguments)
      }
    }
    const Tb = {
      open: () => Promise.reject(new Error(TC.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function gy() {
      return MW.e(53).then((() => MW(58881)))
    }

    function iy(WW) {
      (0, TC.e)({
        text: WW,
        type: "Error"
      })
    }
    class Yb {
      constructor(WW) {
        this.deps = WW, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: RW,
          api: wW,
          core: CW
        } = WW, zR = () => WW.memory().buffer, AW = () => RW.isStopped ? null : RW.rings.cmd, bR = ty(RW, ((WW, RW) => CW.LeW(WW, RW)), 0), yR = () => CW.DeW();
        let NW = null;
        this.replay = new KA({
          core: {
            RBW: ty(RW, (WW => CW.RBW(WW)), -1),
            LeW: bR,
            DeW: yR,
            MBW: ty(RW, (WW => {
              CW.MBW(WW)
            }), void 0)
          },
          coreBuffer: zR,
          load: async () => (NW = await MW.e(54).then((() => MW(58888))), NW.loadReplayModule()),
          unload: () => {
            var WW;
            null === (WW = NW) || void 0 === WW || WW.unloadReplayModule()
          },
          markTrapped: WW => NW ? NW.markReplayTrapped(WW) : new Error(String(WW)),
          staleOr: (RW, MW) => WW.staleOr(eb, RW, MW),
          crash: RW => {
            WW.reportFault(eb, RW)
          }
        });
        let eW = null;
        this.recorder = new Lz({
          core: {
            ZeW: ty(RW, (WW => CW.ZeW(WW)), 0),
            ueW: ty(RW, (WW => CW.ueW(WW)), 0),
            LeW: bR,
            DeW: yR
          },
          coreCommand: (WW, RW) => {
            var MW, wW;
            return null !== (MW = null === (wW = AW()) || void 0 === wW ? void 0 : wW.writeCmd(WW, 0, RW)) && void 0 !== MW && MW
          },
          coreBuffer: zR,
          load: async () => (eW = await gy(), eW.loadRecorderModule()),
          prefetch: () => {
            gy().then((WW => WW.prefetchRecorderModule())).catch((WW => {
              console.warn(`${Cb} the recorder module didn't prefetch, so a save loads it:`, WW)
            }))
          },
          unload: () => {
            var WW;
            null === (WW = eW) || void 0 === WW || WW.unloadRecorderModule()
          },
          markTrapped: WW => eW ? eW.markRecorderTrapped(WW) : new Error(String(WW)),
          memoryBytes: () => {
            var WW, RW;
            return null !== (WW = null === (RW = eW) || void 0 === RW ? void 0 : RW.recorderMemoryBytes()) && void 0 !== WW ? WW : 0
          },
          staleOr: (RW, MW) => WW.staleOr(Bb, RW, MW),
          crash: RW => {
            WW.reportFault(Bb, RW)
          },
          allowed: () => !0 === WW.options.get("canRecordReplays"),
          failed: iy,
          events: (WW, RW) => {
            this.runtime.recorderEvents(WW, RW)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: iy,
          unixNow: () => Date.now()
        });
        const BW = new lC({
          core: {
            peW: ty(RW, (WW => CW.peW(WW)), 0),
            UeW: ty(RW, (() => {
              CW.UeW()
            }), void 0),
            uA: ty(RW, (() => CW.uA()), 0),
            heW: ty(RW, (() => CW.heW()), 0)
          },
          buffer: zR,
          apiView: () => wW.apiView,
          cmd: AW,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new lA({
          api: wW,
          cmd: AW,
          loadHook: oA,
          onError: WW => {
            console.warn(`${Cb} the recorded game's replay hooks:`, WW)
          }
        });
        const tR = new az({
          client: BW,
          buffer: zR,
          setHoldDraws: WW => {
            RW.setHoldDraws(WW)
          },
          notify: TC.e,
          onRecorderState: () => {
            var WW;
            null === (WW = (0, iz.i)()) || void 0 === WW || WW.recorderChanged()
          },
          onViewerChange: () => {
            var WW;
            null === (WW = (0, iz.i)()) || void 0 === WW || WW.viewerChanged()
          },
          onReplayOption: RW => {
            ! function(WW, RW) {
              var MW, wW;
              const CW = nM.T[RW.key];
              if (void 0 === CW) return;
              let zR = null !== (MW = RW.value) && void 0 !== MW ? MW : JSON.parse(JSON.stringify(null !== (wW = ZA.e[CW]) && void 0 !== wW ? wW : null));
              if (null !== RW.value && RW.key < nM.pb.Environment && "string" === typeof zR) try {
                zR = JSON.parse(zR)
              } catch (AW) {
                return void console.warn(`${Wb} a replay's ${CW} isn't JSON`, AW)
              }
              WW.applyNewClientOptions({
                [CW]: zR
              })
            }(WW.options, RW)
          },
          onReplayUiEvent: wb,
          onReplayOpened: RW => {
            this.entityHooks.opened((0, cR.Pb)(RW)), WW.replayShaderPack(RW)
          },
          meshPending: () => {
            var WW, MW;
            return null !== (WW = null === (MW = RW.lastHeader) || void 0 === MW ? void 0 : MW.renderPending) && void 0 !== WW ? WW : 0
          },
          viewerOpen: gz.b,
          download: WW => {
            (0, BC.k)(WW)
          }
        });
        this.runtime = tR, wW.replay = tR.sink, (0, iz.u)(tR);
        const TW = new UC({
          live: () => {
            var WW;
            return !RW.isStopped && !0 === (null === (WW = tR.currentViewer) || void 0 === WW ? void 0 : WW.inPlayback)
          },
          cmd: AW,
          dragScale: KC
        });
        this.freecam = TW, (0, iz.s)(TW), this.recordedOptions = function(WW, RW) {
          const MW = nM.T,
            wW = MW.map(((MW, wW) => RW.subscribe(MW, (RW => {
              WW.setOption(wW, yy(RW))
            }))));
          return {
            sendAll() {
              MW.forEach(((MW, wW) => {
                WW.setOption(wW, yy(RW.get(MW)))
              }))
            },
            stop() {
              for (const WW of wW) WW()
            }
          }
        }(tR.recorder, WW.options), this.stops = [(0, Mw.l)((WW => {
          TW.flush();
          try {
            this.replay.beforeFrame(WW)
          } catch (RW) {
            this.deps.reportFault("replayFrame", RW)
          }
        })), (0, Mw.v)(((WW, RW) => {
          try {
            this.recorder.afterFrame(), RW && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (MW) {
            this.deps.reportFault("recorderFrame", MW)
          }
          try {
            tR.afterFrame(WW)
          } catch (MW) {
            this.deps.reportFault("replayRuntime", MW)
          }
        })), Nb(tR), () => {
          this.recordedOptions.stop()
        }, by(tR.recorder), (0, pC.l)((WW => {
          let {
            action: RW,
            down: MW
          } = WW;
          var wW;
          MW && (null === (wW = (0, iz.i)()) || void 0 === wW || wW.keyDown(RW))
        }))];
        const gR = () => {
          const WW = tR.currentViewer;
          return !0 === (null === WW || void 0 === WW ? void 0 : WW.isOpen) ? WW : null
        };
        (0, tz.d)({
          open: (WW, RW) => this.open(WW, RW),
          replayKey: () => {
            var WW, RW;
            return null !== (WW = null === (RW = gR()) || void 0 === RW ? void 0 : RW.id) && void 0 !== WW ? WW : null
          },
          saveRefusal: () => {
            var WW, RW;
            return null !== (WW = null === (RW = gR()) || void 0 === RW ? void 0 : RW.saveRefusal) && void 0 !== WW ? WW : null
          },
          encode: () => {
            var WW, RW;
            return null !== (WW = null === (RW = gR()) || void 0 === RW ? void 0 : RW.save()) && void 0 !== WW ? WW : Promise.resolve(null)
          },
          fileHandle: () => {
            var WW, RW;
            return null !== (WW = null === (RW = tR.currentViewer) || void 0 === RW ? void 0 : RW.fileHandle) && void 0 !== WW ? WW : null
          },
          markSaved: (WW, RW) => {
            var MW;
            null === (MW = tR.currentViewer) || void 0 === MW || MW.markSaved(WW, RW)
          }
        })
      }
      netEvent(WW) {
        if ("connection" === WW.type)
          if (WW.phase === tR.w.Activated) {
            this.activeConn = WW.conn;
            const RW = this.deps.sessionInfo(WW.conn);
            null !== RW && (this.runtime.activated({
              lobbyType: (0, XW.r)(RW.lobbyName),
              gameNameWithVariation: RW.gameNameWithVariation,
              lobbyName: RW.lobbyName
            }), this.recordedOptions.sendAll())
          } else WW.phase !== tR.w.Left && WW.phase !== tR.w.Closed || WW.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const WW of this.stops) WW();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, iz.m)() === this.runtime && (0, iz.u)(null), (0, iz.k)() === this.freecam && (0, iz.s)(null), (0, tz.d)(Tb), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(WW, RW) {
        const {
          running: MW
        } = this.deps;
        if (MW.isStopped) throw new Error(TC.d.coreStopped.text);
        if (WW.byteLength > 67108864) throw new Error(TC.d.cantOpen.text);
        let wW;
        try {
          wW = await async function(WW) {
            const RW = await WW.loadViewer();
            return RW.inPlayback || (0, Mw.I)().leaveGame(null), RW
          }(this.runtime)
        } catch (CW) {
          throw console.warn(`${Cb} the replay viewer didn't load`, CW), new Error(TC.d.viewerLoadFailed.text)
        }
        if (MW.isStopped) throw new Error(TC.d.coreStopped.text);
        await wW.open(WW, RW)
      }
    }
    var Jb = MW(40019),
      Pb = MW(40025),
      Ib = MW(38500),
      ob = MW(38528),
      lb = MW(2801);
    const Fb = [1e3, 3e3, 9e3];
    class fb {
      constructor(WW) {
        this.host = WW, this.sets = new Map, this.table = [], this.generation = 0, this.Qw = !1
      }
      onEvent(WW) {
        const RW = function(WW) {
          if (WW.byteLength !== tR.Qc) return null;
          const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
          return {
            want: RW.getUint16(0, !0),
            release: RW.getUint16(2, !0)
          }
        }(WW);
        RW && !this.Qw && (RW.release !== tR.Uc && this.release(RW.release), RW.want !== tR.Uc && this.want(RW.want))
      }
      reset(WW) {
        if (!this.Qw) {
          for (const [WW, RW] of this.sets) "ready" === RW.state && this.releaseAll(RW.distinct), this.sets.delete(WW);
          this.table = WW, this.generation++
        }
      }
      dispose() {
        if (this.Qw) return;
        this.Qw = !0, this.generation++, this.table = [];
        const WW = [...this.sets.values()];
        this.sets.clear();
        let RW = null;
        for (const wW of WW)
          for (const WW of "ready" === wW.state ? wW.distinct : []) try {
            this.host.wNW(WW)
          } catch (MW) {
            RW ??= {
              error: MW
            }
          }
        if (RW) throw RW.error
      }
      isReady(WW) {
        var RW;
        return "ready" === (null === (RW = this.sets.get(WW)) || void 0 === RW ? void 0 : RW.state)
      }
      want(WW) {
        const RW = this.sets.get(WW);
        if ("loading" === (null === RW || void 0 === RW ? void 0 : RW.state)) return RW.wanted = !0, void this.capAnswer(WW, RW);
        if ("ready" === (null === RW || void 0 === RW ? void 0 : RW.state)) return void this.host.sendReady(ry(WW, RW.images, RW.size));
        const MW = this.table[WW];
        if (!MW || 1 !== MW.urls.length && MW.urls.length !== nM.Fb.CubeFaces) return this.host.sendReady(cy(WW)), void this.host.onLoadFailed(WW, "", new Error(`no image set ${WW}`));
        const wW = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(WW, wW), this.load(WW, MW, wW, this.generation, 0), this.capAnswer(WW, wW)
      }
      capAnswer(WW, RW) {
        this.host.wait(4e3, (() => {
          this.sets.get(WW) === RW && RW.wanted && this.host.sendReady(cy(WW))
        }))
      }
      load(WW, RW, MW, wW, CW) {
        const zR = [...new Set(RW.urls)];
        Promise.allSettled(zR.map((WW => this.host.loadImage(WW, RW.orientation)))).then((AW => {
          const bR = AW.flatMap((WW => "fulfilled" === WW.status ? [WW.value] : [])),
            yR = wW === this.generation && this.sets.get(WW) === MW,
            NW = AW.findIndex((WW => "rejected" === WW.status));
          if (!yR || !MW.wanted) return this.Qw ? void this.releaseAfterDispose(bR.map(Qb)) : (this.releaseAll(bR.map(Qb)), void(yR && this.sets.delete(WW)));
          NW < 0 ? this.loaded(WW, RW, zR, bR) : (this.releaseAll(bR.map(Qb)), this.host.sendReady(cy(WW)), CW < Fb.length ? this.host.wait(Fb[CW], (() => {
            wW === this.generation && this.sets.get(WW) === MW && (MW.wanted ? this.load(WW, RW, MW, wW, CW + 1) : this.sets.delete(WW))
          })) : (this.sets.delete(WW), this.host.onLoadFailed(WW, zR[NW], AW[NW].reason)))
        }))
      }
      loaded(WW, RW, MW, wW) {
        const [CW] = wW, zR = [CW.width, CW.height], AW = wW.every((WW => WW.width === zR[0] && WW.height === zR[1])), bR = RW.urls.length === nM.Fb.CubeFaces;
        if (!AW || zR[0] <= 0 || zR[1] <= 0 || zR[0] > 65535 || zR[1] > 65535 || bR && zR[0] !== zR[1]) {
          this.releaseAll(wW.map(Qb)), this.sets.delete(WW), this.host.sendReady(cy(WW));
          const MW = wW.map((WW => `${WW.width}x${WW.height}`));
          return void this.host.onLoadFailed(WW, RW.urls[0], new Error(`set ${WW}'s images can't make its texture: ${MW.join(", ")}`))
        }
        const yR = RW.urls.map((WW => wW[MW.indexOf(WW)].id)),
          NW = wW.map(Qb);
        this.sets.set(WW, {
          state: "ready",
          images: yR,
          distinct: NW,
          size: zR
        }), this.host.sendReady(ry(WW, yR, zR))
      }
      release(WW) {
        const RW = this.sets.get(WW);
        "loading" === (null === RW || void 0 === RW ? void 0 : RW.state) ? RW.wanted = !1: "ready" === (null === RW || void 0 === RW ? void 0 : RW.state) && (this.releaseAll(RW.distinct), this.sets.delete(WW))
      }
      releaseAll(WW) {
        for (const RW of WW) this.host.wNW(RW)
      }
      releaseAfterDispose(WW) {
        for (const RW of WW) try {
          this.host.wNW(RW)
        } catch {}
      }
    }

    function Qb(WW) {
      return WW.id
    }

    function ry(WW, RW, MW) {
      const wW = new Uint8Array(nM.Fb.SkyImagesReadyBytes),
        CW = new DataView(wW.buffer);
      return CW.setUint16(0, WW, !0), CW.setUint16(2, RW.length, !0), CW.setUint16(4, MW[0], !0), CW.setUint16(6, MW[1], !0), RW.slice(0, nM.Fb.CubeFaces).forEach(((WW, RW) => {
        CW.setUint32(8 + 4 * RW, WW, !0)
      })), wW
    }

    function cy(WW) {
      const RW = new Uint8Array(nM.Fb.SkyImagesReadyBytes),
        MW = new DataView(RW.buffer);
      return MW.setUint16(0, WW, !0), MW.setUint16(2, nM.Fb.Failed, !0), RW
    }
    let Xb = Promise.resolve();
    async function jy(WW, RW) {
      let MW;
      try {
        MW = await (0, lb.q)(WW)
      } catch (zR) {
        throw new Ib.e("fetch", WW, {
          cause: zR
        })
      }
      const wW = Xb.then((() => async function(WW, RW) {
        const MW = new Blob([WW.slice()]);
        let wW = await createImageBitmap(MW, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: RW
        });
        const CW = 1024 / Math.max(wW.width, wW.height);
        if (CW < 1) {
          const WW = wW;
          try {
            wW = await createImageBitmap(WW, {
              resizeWidth: Math.max(1, Math.round(WW.width * CW)),
              resizeHeight: Math.max(1, Math.round(WW.height * CW)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            WW.close()
          }
        }
        return wW
      }(MW, RW)));
      let CW;
      Xb = wW.catch((() => {}));
      try {
        CW = await wW
      } catch (zR) {
        throw new Ib.e("decode", WW, {
          cause: zR
        })
      }
      return {
        id: (0, Ib.r)(CW),
        width: CW.width,
        height: CW.height
      }
    }
    var ky = MW(2301),
      ay = MW(32640);
    const sb = ky.d.length;

    function db(WW) {
      const RW = [],
        MW = [];
      ky.d.forEach(((wW, CW) => {
        var zR;
        const AW = null !== (zR = pb(WW[wW])) && void 0 !== zR ? zR : ay.n[wW];
        "custom" === AW.type ? (MW.push({
          id: CW,
          kind: nM.Fb.KindCustom,
          set: RW.length,
          earth: null
        }), RW.push({
          urls: [AW.px, AW.py, AW.pz, AW.nx, AW.ny, AW.nz],
          orientation: "none"
        })) : MW.push({
          id: CW,
          kind: nM.Fb.KindEarth,
          set: 0,
          earth: AW
        })
      }));
      const wW = pb(WW.earth);
      "earth" === (null === wW || void 0 === wW ? void 0 : wW.type) && MW.push({
        id: sb,
        kind: nM.Fb.KindEarth,
        set: 0,
        earth: wW
      });
      const CW = RW.length;
      RW.push({
        urls: ay.f.map((WW => ay.i + WW)),
        orientation: "none"
      }), RW.push({
        urls: [ay.l],
        orientation: "flipY"
      }), RW.push({
        urls: [ay.d],
        orientation: "flipY"
      });
      const zR = new Uint8Array(nM.Fb.SkyTableHeaderBytes + MW.length * nM.Fb.SkyTableEntryBytes),
        AW = new DataView(zR.buffer);
      return AW.setUint16(0, CW, !0), AW.setUint16(2, CW + 1, !0), AW.setUint16(4, CW + 2, !0), AW.setUint16(6, MW.length, !0), MW.forEach(((WW, RW) => {
        const MW = nM.Fb.SkyTableHeaderBytes + RW * nM.Fb.SkyTableEntryBytes;
        AW.setUint16(MW, WW.id, !0), AW.setUint8(MW + 2, WW.kind);
        const wW = MW + 4;
        WW.earth ? function(WW, RW, MW) {
          const wW = WW;
          let CW = 0,
            zR = 0;
          for (const [AW, bR] of hb) {
            const WW = wW[AW];
            "number" === typeof WW && Number.isFinite(WW) && (RW.setFloat32(MW + 4 * bR, WW, !0), CW |= 1 << bR)
          }
          for (const [AW, bR, yR] of Ub) {
            const WW = wW[AW];
            Array.isArray(WW) && 3 === WW.length && WW.every((WW => "number" === typeof WW && Number.isFinite(WW))) && (WW.forEach(((WW, wW) => {
              RW.setFloat32(MW + yR + 4 * wW, WW, !0)
            })), CW |= bR)
          }
          Eb.forEach(((WW, zR) => {
            let [AW, bR] = WW;
            const yR = wW[AW];
            "number" === typeof yR && Number.isFinite(yR) && (RW.setFloat32(MW + nM.l.CameraOffsetAt + 4 * zR, yR, !0), CW |= bR)
          }));
          for (const [AW, bR] of Vb) {
            const WW = wW[AW];
            null !== WW && void 0 !== WW && (CW |= bR, WW && (zR |= bR >>> 14))
          }
          RW.setUint32(MW + nM.l.PresentAt, CW, !0), RW.setUint8(MW + nM.l.FlagsAt, zR)
        }(WW.earth, AW, wW) : AW.setUint16(wW, WW.set, !0)
      })), {
        payload: zR,
        sets: RW
      }
    }

    function pb(WW) {
      if ("object" !== typeof WW || null === WW) return null;
      const RW = WW;
      if ("earth" === RW.type) return WW;
      return "custom" === RW.type && ["px", "py", "pz", "nx", "ny", "nz"].every((WW => {
        const MW = RW[WW];
        return "string" === typeof MW && MW.length > 0
      })) ? WW : null
    }
    const hb = [
        ["inclination", nM.l.Inclination],
        ["turbidity", nM.l.Turbidity],
        ["luminance", nM.l.Luminance],
        ["rayleigh", nM.l.Rayleigh],
        ["mieCoefficient", nM.l.MieCoefficient],
        ["mieDirectionalG", nM.l.MieDirectionalG],
        ["distance", nM.l.Distance],
        ["azimuth", nM.l.Azimuth]
      ],
      Ub = [
        ["sunPosition", nM.l.SunPosition, nM.l.SunPositionAt],
        ["up", nM.l.Up, nM.l.UpAt],
        ["vertexTint", nM.l.VertexTint, nM.l.VertexTintAt]
      ],
      Eb = [
        ["xCameraOffset", nM.l.CameraOffsetX],
        ["yCameraOffset", nM.l.CameraOffsetY],
        ["zCameraOffset", nM.l.CameraOffsetZ]
      ],
      Vb = [
        ["useSunPosition", nM.l.UseSunPosition],
        ["dithering", nM.l.Dithering],
        ["infiniteDistance", nM.l.InfiniteDistance]
      ];

    function my(WW, RW, MW) {
      const wW = new vy({
        writeCmd: WW,
        warn: RW,
        followPack: xy(MW, RW)
      });
      return wW.start(), wW
    }

    function xy(WW, RW) {
      return MW => {
        let wW = () => {};
        const CW = WW((WW => {
          wW(), wW = () => {}, null !== WW ? wW = WW.subscribe((WW => {
            MW(function(WW, RW, MW) {
              if ("object" !== typeof WW || null === WW) return null;
              const wW = WW.skyBoxes;
              if ("object" !== typeof wW || null === wW) return null;
              if ("player" === RW) return wW;
              return Object.fromEntries(Object.entries(wW).filter((WW => {
                let [RW, wW] = WW;
                return !! function(WW) {
                  if ("object" !== typeof WW || null === WW) return !1;
                  return "earth" === WW.type || Object.entries(WW).every((WW => {
                    let [RW, MW] = WW;
                    return "type" === RW || ("" === (wW = MW) || null !== function(WW) {
                      var RW, MW, wW;
                      return "string" !== typeof WW ? null : null !== (RW = null === (MW = Kb.exec(WW)) || void 0 === MW || null === (wW = MW.groups) || void 0 === wW ? void 0 : wW.base64) && void 0 !== RW ? RW : null
                    }(wW));
                    var wW
                  }))
                }(wW) || (MW(`Ignoring texture pack skybox ${RW}, whose faces are not all data URLs`, null), !1)
              })))
            }(WW.pack, null === WW.gameSource ? "player" : "customGame", RW))
          })) : MW(null)
        }));
        return () => {
          CW(), wW()
        }
      }
    }
    class vy {
      constructor(WW) {
        var RW, MW, wW;
        this.host = WW, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Qw = !1, this.wait = null !== (RW = WW.wait) && void 0 !== RW ? RW : (WW, RW) => {
          setTimeout(RW, WW)
        }, this.loader = new fb({
          loadImage: null !== (MW = WW.loadImage) && void 0 !== MW ? MW : jy,
          wNW: null !== (wW = WW.wNW) && void 0 !== wW ? wW : Ib.u,
          sendReady: WW => {
            this.queue.push({
              kind: nM.Fb.SkyImagesReady,
              payload: WW
            })
          },
          onLoadFailed: (RW, MW, wW) => {
            WW.warn(`sky image set ${RW} (${MW}) didn't load: the last sky stays`, wW)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(ob.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((WW => {
          this.write(null !== WW && void 0 !== WW ? WW : {})
        }))
      }
      onEvent(WW) {
        this.loader.onEvent(WW)
      }
      drain() {
        if (0 === this.queue.length) return;
        let WW = 0;
        for (; WW < this.queue.length && this.host.writeCmd(this.queue[WW].kind, 0, this.queue[WW].payload);) WW++;
        WW > 0 && this.queue.splice(0, WW)
      }
      dispose() {
        this.Qw = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(WW) {
        if (this.Qw) return;
        const RW = db(WW);
        var MW, wW;
        this.written && (MW = this.written, wW = RW, MW.payload.length === wW.payload.length && MW.payload.every(((WW, RW) => WW === wW.payload[RW])) && MW.sets.length === wW.sets.length && MW.sets.every(((WW, RW) => {
          const MW = wW.sets[RW];
          return WW.orientation === MW.orientation && WW.urls.length === MW.urls.length && WW.urls.every(((WW, RW) => WW === MW.urls[RW]))
        }))) || (this.written = RW, this.loader.reset(RW.sets), this.queue = this.queue.filter((WW => WW.kind !== nM.Fb.SkyImagesReady)), this.queue.push({
          kind: nM.Fb.SkyTable,
          payload: RW.payload
        }))
      }
    }
    const Kb = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var ub = MW(161),
      Ob = MW(168),
      nb = MW(2188),
      Gb = MW(2193),
      Lb = MW(2195),
      Hb = MW(2198),
      Db = MW(2205),
      qy = MW(130);
    class Zb {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, dC.g)(Jw.Q, (WW => {
          this.onReply((0, sC.f)(Jw.Q, WW), performance.now())
        }))
      }
      onFrame(WW, RW) {
        null === this.id ? this.id = WW : WW !== this.id && (this.id = WW, this.sentMs = document.hidden ? null : RW)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(WW, RW) {
        WW === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(RW - this.sentMs), this.sentMs = null)
      }
      take() {
        const WW = this.roundTripMs;
        return this.roundTripMs = null, WW
      }
      stop() {
        this.stopReplies()
      }
    }
    class Sb {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(WW, RW, MW, wW) {
        const CW = WW - this.sampled >>> 0,
          zR = RW - this.timed >>> 0,
          AW = MW - this.frameUs >>> 0,
          bR = this.primed;
        return this.sampled = WW, this.timed = RW, this.frameUs = MW, this.primed = !0, !(!bR || CW > 64 || zR > 64) && (wW && AW <= 1e6 * zR && (this.windowTimed += zR, this.windowUs += AW), wW && CW > 0)
      }
      reset() {}
      snapshotAndReset() {
        const WW = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: WW,
          submitToDoneMs: null
        }
      }
    }
    var Wy = MW(8115),
      Ry = MW(38469);
    const My = {
        none: !0,
        not_requested: !1,
        webgl_holdback: !1,
        off_after_loss: !1,
        old_intel_driver: !1,
        intel_gen9: !1,
        gpu_class_webgl: !1,
        windows_firefox: !1,
        no_webgpu_api: !1,
        no_adapter: !0,
        software_adapter: !0,
        adapter_error: !0,
        load_failed: !0,
        start_no_adapter: !0,
        device_failed: !0,
        start_failed: !0,
        _unloaded: null
      },
      wy = {
        webgpu: "rust_webgpu",
        webgl: "rust_webgl2",
        webgl1: "rust_webgl1"
      };

    function Cy(WW) {
      return new zN(WW)
    }
    class zN {
      constructor(WW) {
        this.shell = WW, this.tracker = new Gb.b, this.gpu = new Sb, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Zb, this.pacedCpuMs = 0, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, Wy.b)(WW.backend, WW.canvas, WW.adapterVendor), this.tracker.start((() => !WW.inGame()), this.gpu), document.addEventListener("visibilitychange", this.onVisibility), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(WW) {
        this.tracker.onAnimationFrame(WW)
      }
      frameRan(WW, RW, MW, wW) {
        this.ping.onFrame(WW.headerWord(nM.w.PingSent), MW);
        const CW = this.tracker,
          zR = WW.headerWord(nM.w.TickUs) / 1e3 + (0, Mw.M)();
        CW.SF(zR);
        const AW = Math.max(0, MW - RW - zR);
        if ("drawn" !== wW) return void("paced" === wW && (this.pacedCpuMs += AW));
        this.followGame(), CW.onFrameStart(RW);
        this.gpu.onFrame(WW.headerWord(nM.w.GpuSampled), WW.headerWord(nM.w.GpuTimed), WW.headerWord(nM.w.GpuFrameUs), CW.isSampling()) && CW.onGpuSampleStarted(), CW.onFrameCpu(AW + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(RW)
      }
      stop() {
        for (const WW of this.timers) clearInterval(WW);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const WW = this.shell.joinedGame();
        return WW !== this.game && (this.game = WW, this.tracker.snapshotAndReset(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== WW
      }
      countFpsFrame(WW) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = WW
        }
        this.fpsFrames++;
        const RW = WW - this.fpsSpanStartMs;
        if (!(RW < 15e3)) {
          if (!document.hidden) {
            const WW = 1e3 * this.fpsFrames / RW;
            this.firstSpanFps ??= WW, this.initialFps = this.firstSpanFps, this.fpsOverTime = WW
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = WW
        }
      }
      flush() {
        const WW = this.followGame(),
          {
            cpuFrameMs: RW,
            refreshHz: MW,
            cpuBottleneck: CW,
            frameIntervalCv: zR,
            ...AW
          } = this.tracker.snapshotAndReset(),
          bR = this.shell.inGame(),
          yR = bR && this.inGameAtLastFlush ? AW : nb.g;
        if (this.inGameAtLastFlush = bR, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !WW) return;
        const NW = performance.now(),
          eW = (0, Db.r)((0, Db.o)(NW), this.unsentPage),
          BW = function(WW, RW, MW, CW, zR, AW, bR) {
            var yR, NW, eW;
            const BW = {},
              {
                canvas: tR
              } = WW;
            for (const TW of (0, ub.x)()) {
              const gR = TW.name;
              let iR;
              if ((0, Ob.h)(gR)) iR = (0, Db.d)(gR);
              else if ((0, Db.h)(gR)) iR = bR[gR];
              else switch (gR) {
                case "fps":
                  iR = MW;
                  break;
                case "Sy":
                  iR = CW;
                  break;
                case "ZN":
                  iR = (0, Ry.f)().n;
                  break;
                case "zB":
                  iR = Math.max(tR.width, tR.height);
                  break;
                case "yB":
                  iR = Math.min(tR.width, tR.height);
                  break;
                case "qB":
                  iR = navigator.hardwareConcurrency || null;
                  break;
                case "Gy":
                  iR = (0, mz.getWebGpuSupported)();
                  break;
                case "vN":
                  iR = null === WW.fallbackReason ? null : My[WW.fallbackReason];
                  break;
                case "JB":
                  iR = RW.cpuFrameMs;
                  break;
                case "oB":
                  iR = RW.refreshHz;
                  break;
                case "XB":
                  iR = RW.cpuBottleneck;
                  break;
                case "atW":
                  iR = RW.frameIntervalCv;
                  break;
                case "pB":
                  iR = RW.frameMs;
                  break;
                case "jT":
                  iR = RW.tickMs;
                  break;
                case "eT":
                  iR = RW.mainBusyShare;
                  break;
                case "lT":
                  iR = RW.mainProbeDelayMs;
                  break;
                case "aT":
                  iR = RW.longAnimationFramesPerMin;
                  break;
                case "wT":
                  iR = RW.longAnimationFrameTimeShare;
                  break;
                case "XT":
                  iR = RW.gpuPassMs;
                  break;
                case "uB":
                  iR = RW.gpuSubmitToDoneMs;
                  break;
                case "bJ":
                  iR = (0, ub.g)(zR);
                  break;
                case "hN":
                  iR = AW;
                  break;
                case "pT":
                case "kz":
                case "rY":
                case "kY":
                case "aY":
                case "piW":
                case "hiW":
                case "vY":
                case "wY":
                case "AY":
                case "yJ":
                case "gJ":
                case "JY":
                case "lY":
                case "FY":
                  iR = null;
                  break;
                case "MJ":
                  iR = (0, mz.getPlatformType)();
                  break;
                case "NJ":
                  iR = (0, mz.getGpuVendor)();
                  break;
                case "YB":
                  iR = wy[WW.backend];
                  break;
                case "PJ":
                  iR = (0, qy.c)();
                  break;
                case "QJ":
                  iR = (0, mz.getOperatingSystem)();
                  break;
                case "dJ":
                  iR = (0, mz.getTrafficSource)();
                  break;
                case "VJ":
                  iR = null !== (yR = wW.b.get("gameEntrySource")) && void 0 !== yR ? yR : ub.m;
                  break;
                case "nB":
                  iR = RW.frameLimiter;
                  break;
                case "zN":
                  iR = (0, Lb.g)();
                  break;
                case "qN":
                  iR = null !== (NW = (0, Hb.c)()) && void 0 !== NW ? NW : ub.m;
                  break;
                case "KJ":
                  iR = (0, Lb.d)(tR.width, tR.height);
                  break;
                case "OJ":
                  iR = (0, ub.A)(-(new Date).getTimezoneOffset());
                  break;
                case "Ay":
                  iR = null !== (eW = WW.fallbackReason) && void 0 !== eW ? eW : ub.m;
                  break;
                case "EY":
                  iR = "ready";
                  break;
                case "HJ":
                  iR = (0, mz.getSoftwareRenderer)();
                  break;
                case "LJ":
                  iR = WW.shaderPackRuns() ? "true" : "false";
                  break;
                case "GJ":
                case "ZJ":
                case "RP":
                case "mY":
                case "aC":
                  iR = ub.m;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${gR}`)
              }
              if (void 0 === iR) throw new Error(`Metric ${gR} has no value`);
              BW[gR] = iR
            }
            return BW
          }(this.shell, {
            cpuFrameMs: RW,
            refreshHz: MW,
            cpuBottleneck: CW,
            frameIntervalCv: zR,
            ...yR
          }, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), eW);
        if (TW = this.shell.writeCmd, iR = tR.Mc, YW = function(WW) {
            const RW = (0, UW.f)((0, LR.e)(WW)),
              MW = new Uint8Array(gR.Yd.BYTES + RW.length);
            return new DataView(MW.buffer).setUint16(0, LR.c.AnalyticsUpdate, !0), MW.set(RW, gR.Yd.BYTES), MW
          }(BW), (0, nR.c)(), !TW(gR.k.Send, iR, YW)) return this.unsentPage = eW, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        var TW, iR, YW;
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, ub.f), (0, Db.k)(this.fpsOverTime, this.initialFps, BW, NW)
      }
    }
    var Ay = MW(37363);

    function bN(WW, RW, MW) {
      const wW = new Map;
      return (0, Ay.b)(((WW, MW, wW) => RW.Iz(WW, MW, wW)), ((RW, MW, CW) => {
        const zR = `${RW},${MW},${CW}`;
        return wW.has(zR) || wW.set(zR, (0, mM.b)(WW, RW, MW, CW)), wW.get(zR)
      }), MW)
    }
    var yN = MW(37365),
      Ny = MW(38223);

    function ey(WW) {
      const RW = null !== WW && 0 !== (gR.r.playerFlags(WW.api.apiView, 0) & gR.Ld.CursorAim);
      RW !== (0, Ny.p)() && (0, Ny.F)(RW, null !== WW)
    }

    function By(WW) {
      return (0, Yw.e)(Jw.F, WW)
    }
    const tN = new zR.d((WW => MW(40030)(`./${WW}/${WW}Client`)));
    let Ty = null,
      gN = null;
    async function iN(WW) {
      Ty ??= MW.e(24).then((() => MW(37125))).then((WW => {
        gN = WW.createDefaultClientPlugins
      }), (WW => {
        throw Ty = null, WW
      })), await Promise.all([tN.load(WW), Ty])
    }

    function Yy(WW) {
      WW.load(new ER(Ew, new xC))
    }
    let Jy = !1;
    const Py = new WeakMap;

    function Iy(WW) {
      try {
        WW()
      } catch (RW) {
        console.error("[bloxd-wasm-client] a session-end step failed", RW)
      }
    }

    function oy(WW, RW) {
      ! function() {
        var WW, RW;
        hw.d.volume();
        const MW = hw.d;
        null === (WW = MW._autoResume) || void 0 === WW || WW.call(MW), null === (RW = MW._autoSuspend) || void 0 === RW || RW.call(MW)
      }(), RW.audio.prepare();
      const MW = new oW(RW.core, RW.memory, RW.audio);
      let zR;
      try {
        zR = new yz(MW, RW.options)
      } catch (tR) {
        return WW.crash(eC.C, tR), null
      }(0, yR.h)(NC(MW, zR));
      const eW = new Yb({
        running: WW,
        api: MW,
        core: RW.core,
        memory: RW.memory,
        staleOr: RW.staleOr,
        reportFault: RW.reportReplayFault,
        options: RW.options,
        sessionInfo: RW.sessionInfo,
        replayShaderPack: RW.replayShaderPack
      });
      (0, Mw.z)();
      const BW = new kC({
        api: MW,
        tables: zR,
        sessionInfo: RW.sessionInfo,
        gameFactory: WW => tN.loadedFactory(WW),
        defaultPlugins: (WW, RW, MW, wW) => {
          if (null === gN) throw new Error("The default plugins started before they loaded");
          return gN(WW, RW, MW, wW)
        },
        serverOptions: RW.options,
        onNetEvent: WW => {
          eW.netEvent(WW), RW.onNetEvent(WW)
        },
        playSound: (WW, MW, wW, CW, zR, AW, bR) => RW.audio.playGame(WW, MW, wW, CW, zR, AW, bR),
        onSessionEnd: () => {
          Iy(CW.i), Iy(Lw), Iy((() => {
            wW.b.set({
              openInGameMenuName: null
            })
          })), Iy((() => {
            RW.audio.cancelPreload()
          }))
        },
        beforeWrite: RW.beforeWrite,
        beforeOp: RW.beforeOp,
        cameraScreen: Gw,
        showCameraFacing: Hw,
        onEventOverflow: RW.onEventOverflow,
        screenBandY: bR.l,
        replayEntities: eW.entityHooks,
        hasPackModel: RW.hasPackModel
      });
      return BW.attach(WW), Py.set(BW, eW), pw(BW.items, RW.audio),
        function(WW) {
          WW.setClientFreeCameraGrant("isDev", !1);
          const RW = RW => {
            WW.setClientFreeCameraGrant("hasDeveloperRank", RW.playerHasRank("developer"))
          };
          (0, AW.m)("userContextUpdated", RW)
        }(BW), Jy || (Jy = !0, (0, AW.m)("appManagerUpdated|openInGameMenuName", (WW => {
          !WW && (0, NW.g)().includes("InGameMenu") && (0, NW.j)("InGameMenu")
        }))), BW
    }

    function ly(WW) {
      try {
        WW.closeGame()
      } finally {
        var RW;
        null === (RW = Py.get(WW)) || void 0 === RW || RW.stop(), Py.delete(WW)
      }
    }
  },
  38324: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      g: () => AW
    });
    const wW = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function CW(WW) {
      if (WW instanceof WebAssembly.RuntimeError) return !0;
      const RW = WW instanceof Error ? WW.stack : void 0;
      return "string" === typeof RW && wW.test(RW)
    }
    const zR = 500;

    function AW(WW) {
      let RW = "[object Object]";
      try {
        RW = String(WW)
      } catch {}
      if ("[object Object]" !== RW) return RW;
      try {
        var MW, wW;
        return null !== (MW = null === (wW = JSON.stringify(WW)) || void 0 === wW ? void 0 : wW.slice(0, zR)) && void 0 !== MW ? MW : RW
      } catch {
        return RW
      }
    }
  },
  8262: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      e: () => zR
    });
    var wW = MW(8220);
    const CW = "Air",
      zR = Object.freeze(new wW.e(CW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);