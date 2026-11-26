export const id = 68;
export const ids = [68];
export const modules = {
  54469: (HH, BH, LH) => {
    var AH = {
      "./bedwars/bedwarsClient": [40245, 9],
      "./bridgeBattle/bridgeBattleClient": [40253, 10],
      "./buildAFactory2/buildAFactory2Client": [39354, 87, 85, 252, 270, 11],
      "./classic/classicClient": [40259, 12],
      "./classic/smp2Client": [40261, 13],
      "./clutch/clutchClient": [40263, 14],
      "./containmentBreach/containmentBreachClient": [40265, 247, 15],
      "./cooking/cookingClient": [40403, 16],
      "./defusal/defusalClient": [40409, 17],
      "./frontline/frontlineClient": [40411, 87, 85, 18],
      "./goalRush/goalRushClient": [40421, 19],
      "./greenville/greenvilleClient": [40428, 172, 275, 20],
      "./hideseek/hideseekClient": [40454, 21],
      "./luckyBedwars/luckyBedwarsClient": [40463, 22],
      "./murderMystery/murderMysteryClient": [40472, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40476, 24],
      "./oneBlock/oneBlockClient": [40484, 25],
      "./plots/plotsClient": [40486, 269, 247, 26],
      "./pvpCiv/pvpCivClient": [40571, 27],
      "./secretSanta/secretSantaClient": [40580, 28],
      "./skyIslands/skyIslandsClient": [40588, 29],
      "./skyblock/skyblockClient": [39403, 87, 261, 252, 172, 241, 30],
      "./tsunami/tsunamiClient": [40597, 31]
    };

    function rH(HH) {
      if (!LH.o(AH, HH)) return Promise.resolve().then((() => {
        var BH = new Error("Cannot find module '" + HH + "'");
        throw BH.code = "MODULE_NOT_FOUND", BH
      }));
      var BH = AH[HH],
        rH = BH[0];
      return Promise.all(BH.slice(1).map(LH.e)).then((() => LH(rH)))
    }
    rH.keys = () => Object.keys(AH), rH.id = 54469, HH.exports = rH
  },
  39940: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    var AH = LH(18);

    function rH(HH) {
      return "refetchCode" === HH || "devDownloadJson" === HH || HH.startsWith("Plugin")
    }

    function SH(HH, BH) {
      "refetchCode" !== HH ? "Plugin|MobAiPlugin|ShowPetUi" !== HH ? Promise.all([LH.e(120), LH.e(121), LH.e(116), LH.e(118), LH.e(240)]).then((() => LH(45217))).then((LH => {
        let {
          runClientGameMessage: AH
        } = LH;
        AH(HH, BH)
      })).catch((BH => {
        console.error(`Game message ${HH} failed`, BH)
      })) : AH.k.AX("showPetUi", BH) : AH.k.AX("refetchCode")
    }
  },
  54466: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      d: () => rH
    });
    const AH = ["recording", "freecam", "keyframe"];

    function rH() {
      const HH = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(HH[1]) << 32n | BigInt(HH[0])
    }
  },
  34908: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      i: () => zH
    });
    var AH = LH(15);
    const rH = 24,
      SH = "farNametags",
      hH = 1e5;

    function tH() {
      var HH;
      return null === (HH = AH.c.get("showDistantNametags")) || void 0 === HH || HH
    }

    function zH() {
      var HH;
      return null !== (HH = function() {
        const HH = new URLSearchParams(window.location.search).get(SH),
          BH = null === HH || "" === HH ? NaN : Number(HH);
        return Number.isFinite(BH) && BH >= 0 ? Math.min(BH, hH) : null
      }()) && void 0 !== HH ? HH : tH() ? 0 : rH
    }
  },
  46017: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      blockIdOf: () => tC.c,
      clearWasmCameraScreen: () => Wr,
      creativeItemIds: () => QA.creativeItemIds,
      decodeMapSettings: () => EC,
      drainTextRerasters: () => Hz.c,
      enchantmentPerksOf: () => QA.enchantmentPerksOf,
      endGameHost: () => TC,
      followCursorAim: () => CC,
      followMenuPrefs: () => QS,
      loadAudio: () => WC,
      loadClientGame: () => QC,
      loadTextIcons: () => Hz.e,
      rasterText: () => yt.i,
      readBoardToEdit: () => hC,
      readDrawCensus: () => XC.h,
      setTextHost: () => Hz.j,
      setTextLocalPlayer: () => Hz.k,
      showInCreativeInvenOf: () => QA.showInCreativeInvenOf,
      startGameHost: () => PC,
      startShellAnalytics: () => AC,
      startSkyFeed: () => Uz,
      textChanged: () => Hz.p,
      warmText: () => yt.o,
      wasmCameraScreen: () => Qr
    });
    LH(37384);
    var AH = LH(15),
      rH = LH(37672),
      SH = LH(40124),
      hH = LH(18),
      tH = LH(3768),
      zH = LH(37667),
      CH = LH(1241),
      EH = LH(609),
      XH = LH(39114),
      GH = LH(5265),
      YH = LH(41962),
      uH = LH(41898);
    const QH = uH.Pb / 4,
      WH = uH.t.PlaySound,
      MH = uH.t.SoundReset,
      xH = GH.X.ReplayFailed,
      vH = GH.X.RecorderEvent;
    class PH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = HH, this.memory = BH, this.audio = LH, this.serverIds = new Int32Array(256).fill(uH.bd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(uH.y.BYTES)), this.renderPtr = 0, this.aX = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new uH._(HH, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.VSH(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(HH, BH) {
        const LH = this.eventView();
        return new Uint8Array(LH.buffer, LH.byteOffset + HH, BH)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return uH.y.localId(this.apiView, 0)
      }
      localDeaths() {
        return uH.y.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const HH = this.apiView,
          BH = uH.y.entRenderPtr(HH, 0),
          LH = uH.y.entVisPtr(HH, 0),
          AH = uH.y.entCapacity(HH, 0);
        if (BH !== this.renderPtr || LH !== this.visPtr || AH !== this.aX || this.renderBuffer !== this.buffer) {
          this.renderPtr = BH, this.visPtr = LH, this.aX = AH, this.renderBuffer = this.buffer;
          const HH = this.memoryView(Float32Array, BH, AH * QH, "the render array"),
            rH = this.memoryView(Uint8Array, LH, AH, "the visibility array");
          this.renderCapacity = HH && rH ? AH : 0, this.render = HH && rH ? HH : new Float32Array(0), this.vis = HH && rH ? rH : new Uint8Array(0)
        }
      }
      memoryView(HH, BH, LH, AH) {
        try {
          return (0, YH.o)(HH, this.memory().buffer, BH, LH, AH)
        } catch (rH) {
          return this.keepCorruption(rH), null
        }
      }
      memoryData(HH, BH, LH, AH) {
        try {
          return (0, YH.f)(this.memory().buffer, HH, BH, LH, AH)
        } catch (rH) {
          return this.keepCorruption(rH), null
        }
      }
      scratchData(HH, BH) {
        const LH = this.scratch(),
          AH = this.scratchView;
        return (null === AH || void 0 === AH ? void 0 : AH.buffer) === this.memory().buffer && AH.byteOffset === LH && AH.byteLength >= HH ? AH : (this.scratchView = this.memoryData(LH, HH, 8, BH), this.scratchView)
      }
      reportCorruption(HH) {
        this.keepCorruption(new YH.d(HH))
      }
      keepCorruption(HH) {
        if (!(HH instanceof YH.d)) throw HH;
        this.corruption ??= HH
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(HH, BH, LH) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: AH,
          len: rH
        } = HH;
        this.eventsPtr = AH, this.eventsLen = rH, this.eventsBuffer = null;
        const SH = this.eventView();
        for (let CH = 0; CH < rH;) {
          const HH = SH.getUint32(CH, !0),
            LH = 65535 & HH,
            AH = HH >>> 16,
            rH = CH + GH.U;
          if (LH === uH.t.EntitySpawned) {
            var hH;
            if (AH !== uH.Wb.BYTES) throw bH(LH, CH, AH);
            const HH = uH.Wb.serverId(SH, rH);
            this.spawned(HH, uH.Wb.index(SH, rH), uH.Wb.kind(SH, rH)), null === (hH = BH.entityAdded) || void 0 === hH || hH.call(BH, HH)
          } else if ((LH === uH.t.ChunkSlot || LH === uH.t.EntityInfoChanged) && !(0, uH.we)(LH, SH, rH, AH, BH)) throw bH(LH, CH, AH);
          CH = rH + (0, GH.te)(AH)
        }
        try {
          var tH;
          null === (tH = BH.afterPrescan) || void 0 === tH || tH.call(BH), this.throwCorruption(), !LH() && this.dispatch(HH, BH, LH) && (this.throwCorruption(), this.applyListener(), BH.afterWalk(HH.kind)), this.throwCorruption()
        } catch (zH) {
          throw zH instanceof YH.d && (this.corruption ??= zH), zH
        } finally {
          LH() || null !== this.corruption || this.applyDespawns(rH, BH)
        }
      }
      applyDespawns(HH, BH) {
        const LH = this.eventView();
        for (let rH = 0; rH < HH;) {
          const HH = LH.getUint32(rH, !0),
            SH = rH + GH.U;
          if ((65535 & HH) === uH.t.EntityDespawned && HH >>> 16 === uH.Wb.BYTES) {
            const HH = uH.Wb.serverId(LH, SH);
            var AH;
            if (this.despawned(HH, uH.Wb.index(LH, SH))) null === (AH = BH.entityRemoved) || void 0 === AH || AH.call(BH, HH)
          }
          rH = SH + (0, GH.te)(HH >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(HH, BH, LH) {
        const {
          len: AH,
          net: rH,
          netOffsets: SH
        } = HH;
        let hH = this.eventView(),
          tH = 0;
        for (let VH = 0; VH < AH;) {
          const HH = hH.getUint32(VH, !0),
            AH = 65535 & HH,
            kH = HH >>> 16,
            mH = VH + GH.U;
          let oH = !1;
          if (tH < rH.length && SH[tH] === VH) BH.netEvent(rH[tH]), tH++, oH = !0;
          else if (AH === GH.X.LocalPlayerBound) {
            var zH;
            if (kH !== GH.Gb) throw bH(AH, VH, kH);
            null === (zH = BH.localPlayerBound) || void 0 === zH || zH.call(BH, hH.getInt32(mH, !0)), oH = !0
          } else if (AH === GH.X.LocalHurt) {
            var CH;
            if (kH !== GH.Cb) throw bH(AH, VH, kH);
            null === (CH = BH.localHurt) || void 0 === CH || CH.call(BH, hH.getInt32(mH, !0), hH.getFloat32(mH + 4, !0), hH.getUint32(mH + 8, !0)), oH = !0
          } else if (AH === GH.X.AttackHit) {
            var EH;
            if (kH !== GH.c) throw bH(AH, VH, kH);
            const HH = hH.getFloat32(mH, !0),
              LH = hH.getFloat32(mH + 4, !0),
              rH = hH.getFloat32(mH + 8, !0),
              SH = hH.getUint32(mH + 12, !0);
            null === (EH = BH.attackHit) || void 0 === EH || EH.call(BH, HH, LH, rH, 0 !== (SH & GH.l.Crit), 0 !== (SH & GH.l.HitSelf))
          } else if (AH === GH.X.PhysicsType) {
            var XH;
            if (kH !== GH.ec) throw bH(AH, VH, kH);
            null === (XH = BH.physicsType) || void 0 === XH || XH.call(BH, hH.getUint32(mH, !0), hH.getInt32(mH + 4, !0)), oH = !0
          } else if (AH === GH.X.VehicleEffect) {
            var YH;
            const HH = OH(hH, mH, kH);
            if (null === HH) throw bH(AH, VH, kH);
            null === (YH = BH.vehicleEffect) || void 0 === YH || YH.call(BH, HH.op, HH.name, HH.icon, HH.level, HH.durationMs), oH = !0
          } else if (AH === GH.X.ZoomChanged) {
            var QH;
            if (kH !== GH.Vd) throw bH(AH, VH, kH);
            null === (QH = BH.zoomChanged) || void 0 === QH || QH.call(BH, hH.getFloat32(mH, !0), hH.getUint8(mH + 4)), oH = !0
          } else if (AH === GH.X.ZoomDisabled) {
            var PH;
            if (0 !== kH) throw bH(AH, VH, kH);
            null === (PH = BH.zoomDisabled) || void 0 === PH || PH.call(BH), oH = !0
          } else if (AH === GH.X.BhopDisabled) {
            var TH;
            if (0 !== kH) throw bH(AH, VH, kH);
            null === (TH = BH.bhopDisabled) || void 0 === TH || TH.call(BH), oH = !0
          } else if (AH === GH.X.GameCamera) {
            var UH;
            null === (UH = BH.gameCamera) || void 0 === UH || UH.call(BH, new Uint8Array(hH.buffer, hH.byteOffset + mH, kH).slice()), oH = !0
          } else if (AH === uH.t.ChunkSlot || AH === uH.t.EntityInfoChanged);
          else if (AH >= WH && AH <= MH) {
            if (this.audio && !this.audio.onAudioEvent(AH, hH, mH, kH)) throw bH(AH, VH, kH)
          } else if (AH >= xH && AH <= vH) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(AH, hH, mH, kH)) throw bH(AH, VH, kH);
              oH = !0
            }
          } else if (AH >= uH.pd && AH <= uH.rd && AH !== GH.X.EnvLighting) {
            if (!(0, uH.we)(AH, hH, mH, kH, BH)) throw bH(AH, VH, kH);
            oH = !0
          }
          if (oH) {
            if (LH()) return !1;
            hH = this.eventView()
          }
          VH = mH + (0, GH.te)(kH)
        }
        return !LH()
      }
      applyListener() {
        var HH;
        if (!this.audio) return;
        const BH = uH.y.audioViewPtr(this.apiView, 0),
          LH = this.memory().buffer;
        let AH = this.audioView;
        (null === (HH = AH) || void 0 === HH ? void 0 : HH.buffer) === LH && AH.byteOffset === BH || (AH = (0, YH.f)(LH, BH, uH.C.BYTES, 8, "the audio view"), this.audioView = AH), AH && this.audio.applyListener(AH)
      }
      indexOf(HH) {
        return this.indexById.get("number" === typeof HH ? HH : +HH)
      }
      isLocal(HH) {
        return HH !== uH.bd && HH === uH.y.localId(this.apiView, 0)
      }
      hT(HH) {
        const BH = [0, 0, 0];
        return this.readPosition("number" === typeof HH ? HH : +HH, BH) ? BH : null
      }
      readPosition(HH, BH) {
        const LH = this.apiView;
        if (void 0 !== this.indexById.get(HH) && this.isLocal(HH)) {
          for (let HH = 0; HH < 3; HH++) BH[HH] = uH.y.localPos(LH, 0, HH);
          return !0
        }
        return this.readDrawnPosition(HH, BH)
      }
      readDrawnPosition(HH, BH) {
        const LH = this.apiView,
          AH = this.indexById.get(HH);
        if (void 0 === AH || AH >= this.renderCapacity) return BH[0] = BH[1] = BH[2] = NaN, !1;
        const rH = AH * QH;
        for (let SH = 0; SH < 3; SH++) BH[SH] = this.render[rH + SH] + uH.y.origin(LH, 0, SH);
        return !0
      }
      checkValid(HH) {
        return void 0 !== this.indexOf(HH)
      }
      isAlive(HH) {
        const BH = this.indexOf(HH);
        if (void 0 === BH) return null;
        if (this.ensureViews(), BH >= this.renderCapacity) return null;
        const LH = this.vis[BH];
        return 0 === LH ? null : 0 !== (LH & uH.se.Alive)
      }
      getEntityType(HH) {
        const BH = this.indexOf(HH);
        return void 0 === BH ? this.isLocal("number" === typeof HH ? HH : +HH) ? "Player" : null : UH(this.kinds[BH])
      }
      spawned(HH, BH, LH) {
        if (BH >= 1048576) throw new YH.d(`entity ${HH} spawned at index ${BH}`);
        this.ensureIndex(BH), this.serverIds[BH] === HH && null !== this.idStr[BH] || (this.idStr[BH] = String(HH)), this.serverIds[BH] = HH, this.kinds[BH] = LH, this.indexById.set(HH, BH)
      }
      despawned(HH, BH) {
        let LH = !1;
        return this.indexById.get(HH) === BH && (this.indexById.delete(HH), LH = !0), BH < this.serverIds.length && this.serverIds[BH] === HH && (this.serverIds[BH] = uH.bd, this.kinds[BH] = 0, this.idStr[BH] = null), LH
      }
      ensureIndex(HH) {
        const BH = this.serverIds.length;
        if (HH < BH) return;
        let LH = 2 * BH;
        for (; LH <= HH;) LH *= 2;
        const AH = new Int32Array(LH).fill(uH.bd);
        AH.set(this.serverIds), this.serverIds = AH;
        const rH = new Uint16Array(LH);
        rH.set(this.kinds), this.kinds = rH;
        for (let SH = BH; SH < LH; SH++) this.idStr.push(null)
      }
      eventView() {
        const HH = this.memory().buffer;
        return HH !== this.eventsBuffer && (this.eventsBuffer = HH, this.events = new DataView(HH, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const HH = this.memory().buffer;
        this.buffer = HH, this.viewPtr < 0 && (this.viewPtr = this.core.OSH()), this.view = new DataView(HH, this.viewPtr, uH.y.BYTES), this.rereadDirectory()
      }
    }

    function TH(HH) {
      return HH >>> uH.d === uH.v.Item
    }

    function UH(HH) {
      var BH, LH;
      const AH = HH & uH.g;
      switch (HH >>> uH.d) {
        case uH.v.Lifeform:
          return null !== (BH = EH.j[AH]) && void 0 !== BH ? BH : null;
        case uH.v.Throwable:
          return null !== (LH = XH.m[AH]) && void 0 !== LH ? LH : null;
        case uH.v.Mesh:
          return "Mesh";
        case uH.v.Audio:
          return "AudioEntity";
        case uH.v.Item:
          return "Item";
        default:
          return null
      }
    }
    const VH = new TextDecoder;

    function OH(HH, BH, LH) {
      if (LH < GH.Ad.HEAD_BYTES) return null;
      const AH = HH.getUint32(BH, !0),
        rH = HH.getUint32(BH + 20, !0),
        SH = HH.getUint32(BH + 24, !0),
        hH = GH.Ad.HEAD_BYTES + (0, GH.te)(rH);
      if (AH !== GH.Ad.UPDATE && AH !== GH.Ad.REMOVE || rH > LH || hH + SH > LH) return null;
      const tH = (LH, AH) => VH.decode(new Uint8Array(HH.buffer, HH.byteOffset + BH + LH, AH)),
        zH = HH.getFloat64(BH + 12, !0);
      return {
        op: AH,
        level: HH.getFloat64(BH + 4, !0),
        durationMs: Number.isNaN(zH) ? null : zH,
        name: tH(GH.Ad.HEAD_BYTES, rH),
        icon: tH(hH, SH)
      }
    }

    function bH(HH, BH, LH) {
      return new YH.d(`event ${HH} at ${BH} of ${LH} bytes`)
    }
    var kH = LH(7007),
      mH = LH(317),
      oH = LH(1168),
      IH = LH(40120),
      fH = LH(39940),
      lH = LH(2018),
      KH = LH(42330),
      cH = LH(1962),
      eH = LH(40140),
      qH = LH(40174),
      gH = LH(40155),
      NH = LH(40135),
      RH = LH(41946),
      jH = LH(2605),
      nH = LH(40169);

    function FH(HH) {
      if (!(0, nH.f)(HH)) return null;
      const BH = Number(HH);
      return (0 | BH) === BH ? BH : null
    }
    class DH {
      constructor(HH) {
        this.api = HH, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, NH.g)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.vB = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = uH.bd, this.localName = String(uH.bd)
      }
      readView() {
        this.defaultPoseRead = !1, this.vB = null;
        const HH = this.api.queries.directorView() >= uH.Cb.BYTES ? this.api.scratchData(uH.Cb.BYTES, "the director's view") : null;
        null !== HH && (this.defaultFov = (0, cH.t)(uH.Cb.fov(HH, 0)), this.baseFov = (0, cH.t)(uH.Cb.baseFov(HH, 0)), this.aspect = uH.Cb.aspect(HH, 0), this.bodyHeading = uH.Cb.bodyHeading(HH, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(HH) {
        this.viewHeading = HH
      }
      get localPlayerId() {
        const HH = uH.y.localId(this.api.apiView, 0);
        return HH !== this.localId && (this.localId = HH, this.localName = String(HH)), this.localName
      }
      getEntityPosition(HH) {
        return this.readEntity(HH) ? this.entityFeet : null
      }
      getEntityAimPoint(HH) {
        return this.readEntity(HH) ? this.entityAim : null
      }
      getEntityHeading(HH) {
        const BH = FH(HH);
        if (null === BH) return null;
        const LH = uH.y.localId(this.api.apiView, 0);
        return BH === LH && LH !== uH.bd ? this.viewHeading : this.readEntity(HH) ? this.entityHeading : null
      }
      getEntityPitch(HH) {
        return this.readEntity(HH) ? this.entityPitch : null
      }
      getEntityLookHeading(HH) {
        return this.readEntity(HH) ? this.entityLookHeading : null
      }
      raycastTerrain(HH, BH, LH) {
        const AH = this.api.queries.cameraSweep(HH[0], HH[1], HH[2], BH[0], BH[1], BH[2], LH);
        return AH < LH - 1e-6 ? AH : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const HH = this.defaultPose;
        HH.fov = this.defaultFov;
        const BH = this.api.queries.directorDefaultPose() >= uH.ub.BYTES ? this.api.scratchData(uH.ub.BYTES, "the director's default pose") : null;
        if (null === BH) return HH;
        for (let LH = 0; LH < 3; LH++) HH.position[LH] = uH.ub.eye(BH, 0, LH);
        return HH.heading = uH.ub.heading(BH, 0), HH.pitch = uH.ub.pitch(BH, 0), HH
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
      readEntity(HH) {
        const BH = FH(HH);
        if (null === BH) return !1;
        if (BH === this.vB) return this.entityLive;
        this.vB = BH;
        const LH = this.api.queries.directorEntity(BH) >= uH.vb.BYTES ? this.api.scratchData(uH.vb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== LH, null === LH) return !1;
        for (let SH = 0; SH < 3; SH++) this.entityFeet[SH] = uH.vb.feet(LH, 0, SH), this.entityAim[SH] = this.entityFeet[SH];
        this.entityAim[1] += uH.vb.eyeHeight(LH, 0), this.entityHeading = uH.vb.heading(LH, 0);
        const AH = uH.vb.pitch(LH, 0);
        this.entityPitch = Number.isNaN(AH) ? null : AH;
        const rH = uH.vb.lookHeading(LH, 0);
        return this.entityLookHeading = Number.isNaN(rH) ? null : rH, !0
      }
    }
    const wH = {
        mode: "default"
      },
      ZH = {
        show: () => {},
        clear: () => {}
      };

    function dH() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class aH {
      constructor(HH) {
        this.options = HH, this.cX = void 0, this.director = void 0, this.latest = wH, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          lq: 0,
          Fq: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = uH.qb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.yQ = new Int32Array(3 * uH.Zd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * uH.Zd), this.cX = new DH(HH.api), this.director = new gH.d(this.cX)
      }
      settingsChanged(HH) {
        let BH = wH;
        if (HH.length > 0) try {
          BH = (0, RH.e)(HH)
        } catch {}
        this.latest = BH, this.pending = BH
      }
      call(HH, BH, LH, AH, rH, SH) {
        var hH, tH;
        this.holding = !1;
        const zH = this.answeredPose && 0 === (AH & uH.zb.Held);
        let CH;
        try {
          CH = this.answer(HH, BH, LH, AH, rH, SH), this.threw = !1
        } catch (EH) {
          this.options.reportError(EH);
          CH = !this.threw && this.answeredPose && !zH ? this.sendLastPose() : uH.qb.None, this.threw = !0
        }
        return this.answeredPose = CH !== uH.qb.None, this.holding = this.answeredPose && !zH, null === (hH = (tH = this.options).showFacing) || void 0 === hH || hH.call(tH, this.holding ? this.facing : null), CH
      }
      holdsView() {
        return this.holding
      }
      answer(HH, BH, LH, AH, rH, SH) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          cX: hH
        } = this;
        hH.readView();
        if (0 !== (AH & uH.zb.Held) || hH.setViewHeading((0, eH.p)(hH.bodyHeading)), void 0 !== this.pending) {
          const HH = this.pending;
          this.pending = void 0, this.director.setSettings(HH), this.syncShownSettings()
        }
        this.readLook((0, jH.f)(BH), (0, jH.f)(LH), AH, (0, jH.f)(rH), (0, jH.f)(SH));
        const tH = this.director.update(HH / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !tH) return uH.qb.None;
        const zH = this.lastPose;
        return (0, NH.e)(tH.position, zH.position), zH.heading = (0, eH.p)(tH.heading), zH.pitch = (0, eH.i)(tH.pitch), zH.fovRadians = (0, cH.h)(tH.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return uH.qb.Pose;
        switch (this.facing) {
          case "camera":
            return uH.qb.FaceCamera;
          case "cursor":
            return uH.qb.FaceCursor;
          default:
            return uH.qb.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: HH,
          heading: BH,
          pitch: LH,
          fovRadians: AH
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(HH[0], HH[1], HH[2], BH, LH, AH) ? uH.qb.None : this.lastAnswer
      }
      afterFrame(HH) {
        HH ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = wH, this.idle()
      }
      restart() {
        const HH = this.holding;
        this.idle(), this.holding = HH
      }
      idle() {
        var HH, BH;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new gH.d(this.cX), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (HH = (BH = this.options).showFacing) || void 0 === HH || HH.call(BH, null), this.setCentres(0)
      }
      syncShownSettings() {
        const HH = this.director.getSettings();
        if (HH === this.shownSettings) return;
        this.shownSettings = HH;
        const BH = (0, qH.f)(HH);
        this.facing = BH.facing, this.mouseTurns = BH.mouseTurns
      }
      readLook(HH, BH, LH, AH, rH) {
        const SH = this.look,
          hH = 0 !== (LH & uH.zb.LookPointed);
        if (null === this.mouseTurns && !hH) return SH.lq = 0, SH.Fq = 0, void(SH.pointedAt = void 0);
        let tH;
        hH && (this.pointedAt.heading = AH, this.pointedAt.pitch = rH, tH = this.pointedAt);
        const {
          cX: zH
        } = this;
        zH.setViewHeading((0, qH.c)(zH.getViewHeading(), HH, BH, tH, "look" === this.mouseTurns, SH))
      }
      writeCentres(HH) {
        const BH = this.next,
          LH = Math.min(HH.length, uH.Zd);
        for (let AH = 0; AH < LH; AH++)
          for (let LH = 0; LH < 3; LH++) BH[3 * AH + LH] = Math.floor(HH[AH][LH] / uH.H);
        this.setCentres(LH)
      }
      setCentres(HH) {
        const {
          yQ: BH,
          next: LH
        } = this;
        let AH = HH === this.centresLen;
        for (let rH = 0; AH && rH < 3 * HH; rH++) AH = BH[rH] === LH[rH];
        AH || (BH.fill(0), BH.set(LH.subarray(0, 3 * HH)), this.centresLen = HH, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const HH = this.options.cmd();
        null !== HH && (0, uH.Uf)(HH, 0, this.yQ, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var HH, BH, LH;
        return null !== (HH = null === (BH = (LH = this.options).screen) || void 0 === BH ? void 0 : BH.call(LH)) && void 0 !== HH ? HH : ZH
      }
      hidden() {
        var HH;
        return (null !== (HH = this.options.isPageHidden) && void 0 !== HH ? HH : dH)()
      }
      now() {
        var HH, BH, LH;
        return null !== (HH = null === (BH = (LH = this.options).now) || void 0 === BH ? void 0 : BH.call(LH)) && void 0 !== HH ? HH : performance.now()
      }
    }
    var sH = LH(40048),
      JH = LH(42106);
    const iH = uH.H * uH.H * uH.H,
      pH = Math.log2(uH.H),
      yH = uH.H - 1,
      HB = 65535,
      BB = uH.R.BYTES / 4,
      LB = new Uint16Array(iH);

    function AB(HH, BH, LH) {
      return HH * uH.H * uH.H + BH * uH.H + LH
    }
    class rB {
      constructor(HH) {
        this.chunk = HH
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(HH, BH, LH) {
        return AB(HH, BH, LH)
      }
    }
    class SB {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class hB {
      constructor(HH, BH, LH, AH) {
        this.table = HH, this.slot = BH, this.generation = LH, this.epoch = AH, this.aG = new rB(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = LB, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get au() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get jY() {
        const HH = this.gameVoxels(),
          BH = this.layers ??= new Uint16Array(uH.H);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let LH = 0; 0 !== this.staleLayers; LH++) {
          const AH = 1 << LH;
          0 !== (this.staleLayers & AH) && (this.staleLayers &= ~AH, BH[LH] = tB(HH, LH))
        }
        return BH
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const HH = this.voxelData(),
          BH = this.writes;
        if (null === BH || 0 === BH.ids.size) return HH;
        if (BH.from !== HH) {
          const LH = BH.patched ??= new Uint16Array(iH);
          LH.set(HH);
          for (const [HH, AH] of BH.ids) LH[HH] = AH;
          BH.from = HH
        }
        return BH.patched
      }
      written(HH) {
        var BH;
        return null === (BH = this.writes) || void 0 === BH ? void 0 : BH.ids.get(HH)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(HH, BH, LH) {
        const AH = this.writes ??= new SB;
        AH.ids.set(HH, BH), LH && AH.cleared.add(HH), null !== AH.from && (AH.patched[HH] = BH);
        const rH = 1 << (HH >> pH & yH);
        AH.layers |= rH, this.staleLayers |= rH, this.writeCount++
      }
      clearWrites() {
        const HH = this.writes;
        null !== HH && (this.staleLayers |= HH.layers, HH.ids.clear(), HH.cleared.clear(), HH.layers = 0, HH.from = null)
      }
      dataCleared(HH) {
        var BH;
        return !0 === (null === (BH = this.writes) || void 0 === BH ? void 0 : BH.cleared.has(HH))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const HH = this.table.slotWords(),
          BH = this.slot * BB;
        if (this.epoch !== this.table.epoch || BH + BB > HH.length || 0 === HH[BH + 3] || HH[BH + 2] !== this.generation) return this.data = LB, this.dataPtr = 0, LB;
        this.version = HH[BH + 1];
        const LH = HH[BH + 0],
          AH = HH.buffer;
        return LH === this.dataPtr && AH === this.dataBuffer || (this.dataPtr = LH, this.dataBuffer = AH, this.data = this.table.voxelsAt(AH, LH)), this.data
      }
    }

    function tB(HH, BH) {
      const LH = HH[BH * uH.H];
      for (let AH = 0; AH < uH.H; AH++) {
        const rH = AB(AH, BH, 0);
        for (let BH = 0; BH < uH.H; BH++)
          if (HH[rH + BH] !== LH) return HB
      }
      return LH
    }
    const zB = new Uint32Array(0);

    function CB(HH, BH, LH) {
      return AB(HH & yH, BH & yH, LH & yH)
    }
    class EB {
      constructor(HH, BH) {
        this.memory = HH, this.apiView = BH, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = zB, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = zB, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(HH, BH, LH, AH, rH, SH) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, SH === uH.T.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (SH !== uH.T.Stored && SH !== uH.T.Unloaded) throw new YH.d(`ChunkSlot flags ${SH}`);
        const hH = (0, JH.e)(HH, BH, LH);
        if (hH < 0) return;
        if (SH === uH.T.Unloaded) return void this.chunks.delete(hH);
        const tH = this.chunks.get(hH);
        (null === tH || void 0 === tH ? void 0 : tH.slot) === AH && tH.generation === rH || this.chunks.set(hH, new hB(this, AH, rH, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const HH = this.apiView(),
          BH = uH.y.chunkSlotsPtr(HH, 0),
          LH = uH.y.chunkSlotsLen(HH, 0);
        BH === this.slotsPtr && LH === this.slotsLen || (this.slotsPtr = BH, this.slotsLen = LH, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const HH = this.apiView(),
          BH = uH.y.walkThroughPtr(HH, 0),
          LH = uH.y.walkThroughLen(HH, 0);
        BH === this.walkPtr && LH === this.walkLen || (this.walkPtr = BH, this.walkLen = LH, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const HH of this.written) HH.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const HH = this.memory().buffer;
        var BH;
        HH !== this.slotsBuffer && (this.slotsBuffer = HH, this.slots = null !== (BH = (0, YH.o)(Uint32Array, HH, this.slotsPtr, this.slotsLen * BB, "the chunk directory")) && void 0 !== BH ? BH : zB);
        return this.slots
      }
      voxelsAt(HH, BH) {
        try {
          var LH;
          return null !== (LH = (0, YH.o)(Uint16Array, HH, BH, iH, "a chunk's voxels")) && void 0 !== LH ? LH : LB
        } catch (AH) {
          if (!(AH instanceof YH.d)) throw AH;
          return this.corruption ??= AH, LB
        }
      }
      chunk(HH, BH, LH) {
        var AH;
        return null !== (AH = this.chunks.get((0, JH.e)(HH, BH, LH))) && void 0 !== AH ? AH : null
      }
      isLoaded(HH, BH, LH) {
        return void 0 !== this.chunkAt(Math.floor(HH), Math.floor(BH), Math.floor(LH))
      }
      ph(HH, BH, LH) {
        var AH;
        const rH = Math.floor(HH),
          SH = Math.floor(BH),
          hH = Math.floor(LH),
          tH = this.chunkAt(rH, SH, hH);
        if (!tH) return 0;
        const zH = CB(rH, SH, hH);
        return null !== (AH = tH.written(zH)) && void 0 !== AH ? AH : tH.voxelData()[zH]
      }
      setOverlay(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const SH = this.chunkAt(HH, BH, LH);
        return !!SH && (SH.hasWrites() || this.written.push(SH), SH.write(CB(HH, BH, LH), AH, rH), !0)
      }
      version(HH, BH, LH) {
        var AH, rH;
        return null !== (AH = null === (rH = this.chunks.get((0, JH.e)(HH, BH, LH))) || void 0 === rH ? void 0 : rH.au) && void 0 !== AH ? AH : null
      }
      scan(HH, BH, LH, AH, rH, SH, hH, tH) {
        const zH = uH.H;
        let CH = 0;
        for (let EH = Math.floor(BH / zH); EH * zH < rH; EH++) {
          const XH = EH * zH,
            GH = Math.min(rH - XH, zH);
          for (let rH = Math.floor(HH / zH); rH * zH < AH; rH++) {
            const YH = rH * zH,
              uH = Math.min(AH - YH, zH);
            for (let AH = Math.floor(LH / zH); AH * zH < SH; AH++) {
              const QH = this.chunks.get((0, JH.e)(rH, EH, AH));
              if (!QH) continue;
              const WH = AH * zH,
                MH = Math.max(LH - WH, 0),
                xH = Math.min(SH - WH, zH),
                vH = QH.jY,
                PH = QH.gameVoxels();
              for (let LH = Math.max(BH - XH, 0); LH < GH; LH++) {
                const BH = vH[LH];
                if (BH === HB || 0 !== hH[BH]) {
                  CH++;
                  for (let BH = Math.max(HH - YH, 0); BH < uH; BH++) {
                    const HH = AB(BH, LH, 0);
                    for (let AH = MH; AH < xH; AH++) {
                      const rH = PH[HH + AH];
                      0 !== hH[rH] && tH.push(YH + BH, XH + LH, WH + AH, rH)
                    }
                  }
                }
              }
            }
          }
        }
        return CH
      }
      columnTops(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        (0, sH.b)(((HH, BH, LH) => {
          var AH;
          return null !== (AH = this.chunks.get((0, JH.e)(HH, BH, LH))) && void 0 !== AH ? AH : null
        }), HB, HH, BH, LH, AH, rH, SH, hH, tH, zH)
      }
      dataCleared(HH, BH, LH) {
        var AH;
        const rH = Math.floor(HH),
          SH = Math.floor(BH),
          hH = Math.floor(LH);
        return !0 === (null === (AH = this.chunkAt(rH, SH, hH)) || void 0 === AH ? void 0 : AH.dataCleared(CB(rH, SH, hH)))
      }
      isWalkThrough(HH) {
        if (!Number.isInteger(HH) || HH < 0 || HH > 65535) return !1;
        const BH = this.walkWords(),
          LH = HH >>> 5;
        return LH < BH.length && 1 === (BH[LH] >>> (31 & HH) & 1)
      }
      walkWords() {
        const HH = this.memory().buffer;
        var BH;
        HH !== this.walkBuffer && (this.walkBuffer = HH, this.walk = null !== (BH = (0, YH.o)(Uint32Array, HH, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== BH ? BH : zB);
        return this.walk
      }
      chunkAt(HH, BH, LH) {
        if ((0 | HH) !== HH || (0 | BH) !== BH || (0 | LH) !== LH) return;
        const AH = (0, JH.e)(HH >> pH, BH >> pH, LH >> pH);
        return AH !== this.lastKey && (this.lastKey = AH, this.lastChunk = this.chunks.get(AH)), this.lastChunk
      }
    }
    var XB = LH(39385),
      GB = LH(38667),
      YB = LH(39096),
      uB = LH(37654),
      QB = LH(37496),
      WB = LH(34942),
      MB = LH(40056),
      xB = LH(176);
    const vB = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      PB = [
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
      TB = PB.map((HH => {
        let [BH] = HH;
        return BH
      })),
      UB = Uint8Array.from(PB, (HH => {
        let [, BH] = HH;
        return BH
      })),
      VB = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      OB = 8,
      bB = [
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
    var kB = LH(37626),
      mB = LH(37642),
      oB = LH(37640),
      IB = LH(225);
    class fB {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB.d;
        this.sound = HH, this.onError = BH, this.idle = LH, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = HH => {
          this.cancelIdle = null;
          try {
            if (HH.timeRemaining() >= 1) {
              let HH = this.queue.shift();
              for (; void 0 !== HH && !this.load(HH);) HH = this.queue.shift()
            }
          } catch (BH) {
            this.onError(BH)
          } finally {
            this.schedule()
          }
        }
      }
      preload(HH) {
        const BH = [...HH].sort(((HH, BH) => HH - BH));
        for (const LH of BH) this.asked.has(LH) || (this.asked.add(LH), this.queue.push(LH));
        this.schedule()
      }
      cancel() {
        var HH;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (HH = this.cancelIdle) || void 0 === HH || HH.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(HH) {
        const BH = this.sound(HH, !1),
          LH = this.sound(HH, !0),
          [AH, rH] = "unloaded" === BH.state() && "unloaded" !== LH.state() ? [LH, BH] : [BH, LH],
          SH = this.gen,
          hH = () => {
            try {
              SH === this.gen && "unloaded" === rH.state() && rH.load()
            } catch (HH) {
              this.onError(HH)
            }
          },
          tH = AH.state();
        return "unloaded" === tH ? (AH.once("load", hH), AH.load(), !0) : "unloaded" === rH.state() && ("loading" === tH ? (AH.once("load", hH), !1) : (rH.load(), !0))
      }
    }
    var lB = LH(42209);

    function KB(HH) {
      var BH;
      const LH = function(HH) {
        let BH = 0,
          LH = TB.length;
        for (; BH < LH;) {
          const AH = BH + LH >>> 1;
          TB[AH] < HH ? BH = AH + 1 : LH = AH
        }
        return BH
      }(HH);
      if ("" === HH || null === (BH = TB[LH]) || void 0 === BH || !BH.startsWith(HH)) return null;
      if (TB[LH] === HH) return [LH, 1];
      let AH = LH + 1;
      for (; AH < TB.length && TB[AH].startsWith(HH);) AH++;
      return [LH, AH - LH]
    }

    function cB(HH) {
      let [BH, LH] = HH, AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === LH ? BH : BH + Math.floor(AH() * LH)
    }

    function eB(HH) {
      for (const BH of bB)
        if (BH[0] <= HH && HH < BH[0] + BH[1]) return BH;
      return null
    }

    function qB(HH) {
      const BH = [];
      for (let LH = 0; LH < UB.length; LH++) UB[LH] === HH && BH.push(LH);
      return BH
    }
    const gB = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      NB = xB.g.iW * xB.g.playerEyeToHeightRatio,
      RB = [0, 0, -1, 0, 1, 0],
      jB = vB.indexOf("note");

    function nB(HH) {
      return HH >= 0 ? Math.min(1, HH) : 0
    }
    class FB {
      constructor(HH, BH, LH, AH, rH) {
        this.group = HH, this.loudness = BH, this.startMs = LH, this.howl = AH, this.host = rH, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const HH = this.host.alive(this.id);
        return HH ? 1e3 * this.howl.duration(this.id) / HH.rate : 0
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
    class DB {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          AH = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = HH, this.listener = BH, this.now = LH, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new oB.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: HH => this.aliveVoice(HH),
          started: HH => this.started.has(HH),
          drop: HH => {
            var BH;
            null === (BH = this.live.get(HH)) || void 0 === BH || BH.howl.stop(HH), this.forget(HH)
          }
        }, this.handlers = {
          playSound: (HH, BH, LH, AH, rH, SH, hH, tH, zH) => {
            if (AH >= TB.length) return;
            const CH = 0 !== (rH & uH.ke.Loop);
            rH & uH.ke.TwoD ? this.start(AH, !1, hH, SH, tH, CH, eB(AH)) : this.startSpatial(AH, hH, SH, tH, CH, HH, BH, LH, zH, this.earDistSq(HH, BH, LH), eB(AH))
          },
          soundPos: (HH, BH, LH, AH) => {
            const rH = this.core.get(AH);
            var SH;
            void 0 !== rH && (null === (SH = this.live.get(rH)) || void 0 === SH || SH.howl.pos(LH, BH, HH, rH))
          },
          soundSet: (HH, BH, LH, AH) => {
            const rH = this.core.get(HH),
              SH = void 0 === rH ? void 0 : this.live.get(rH);
            void 0 !== rH && SH && (this.setRel(rH, BH), SH.rate = LH, SH.howl.rate(LH, rH), SH.spatial && SH.howl.pannerAttr({
              refDistance: AH
            }, rH))
          },
          soundFade: (HH, BH, LH, AH) => {
            const rH = this.core.get(HH);
            void 0 !== rH && this.fade(rH, BH, LH, 0 !== (AH & uH.ie.StopAfter))
          },
          soundStop: HH => {
            const BH = this.core.get(HH);
            var LH;
            void 0 !== BH && (null === (LH = this.live.get(BH)) || void 0 === LH || LH.howl.stop(BH), this.forget(BH))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new fB(((HH, BH) => this.howl(HH, BH)), (HH => {
          this.errors++, console.error("Audio preload failed", HH)
        }), AH)
      }
      preload(HH) {
        this.loader.preload(HH)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let HH = 0; HH < TB.length; HH++) {
          if (mB.d.has(vB[UB[HH]])) continue;
          const BH = [];
          for (const LH of [!1, !0]) {
            const AH = wB(HH, LH),
              rH = this.howls.get(AH);
            void 0 !== rH && "loading" !== rH.state() && BH.push({
              key: AH,
              howl: rH
            })
          }
          if (BH.some((HH => {
              let {
                howl: BH
              } = HH;
              return "loaded" === BH.state()
            })))
            for (const {
                key: HH,
                howl: LH
              }
              of BH) this.howls.delete(HH), "loaded" === LH.state() ? (0, kB.d)(LH) : LH.unload()
        }
      }
      onAudioEvent(HH, BH, LH, AH) {
        if (HH < uH.t.PlaySound || HH > uH.t.SoundReset) return !1;
        try {
          return (0, uH.we)(HH, BH, LH, AH, this.handlers)
        } catch (rH) {
          return this.errors++, console.error("Audio event failed", rH), !0
        }
      }
      applyListener(HH) {
        const BH = this.nextPose;
        for (let AH = 0; AH < 3; AH++) BH[2 - AH] = uH.C.listener(HH, 0, AH), BH[5 - AH] = uH.C.forward(HH, 0, AH), BH[8 - AH] = uH.C.up(HH, 0, AH);
        0 === BH[3] && 0 === BH[4] && 0 === BH[5] && BH.set(this.posed ? this.pose.subarray(3) : RB, 3);
        for (let AH = 0; AH < 9; AH++)
          if (!Number.isFinite(BH[AH])) return;
        const LH = this.pose;
        if (this.posed) {
          let HH = !0;
          for (let AH = 0; AH < 9 && HH; AH++) HH = BH[AH] === LH[AH];
          if (HH) return
        }
        this.listener.apply(BH) && (LH.set(BH), this.posed = !0)
      }
      playGame(HH, BH, LH, AH, rH, SH, hH) {
        const tH = KB(HH);
        if (null === tH) return lB.d;
        const zH = cB(tH),
          CH = tH[1] > 1 ? tH : null;
        if (!LH) {
          const {
            howl: HH,
            id: LH
          } = this.start(zH, !1, BH, 0, 1, hH, CH);
          return this.gameSound(HH, LH, !1)
        }
        const EH = LH[0],
          XH = LH[1] + NB,
          GH = LH[2];
        if (!Number.isFinite(EH) || !Number.isFinite(XH) || !Number.isFinite(GH)) return lB.d;
        let YH;
        if (AH) {
          const HH = EH - AH[0],
            BH = XH - AH[1],
            LH = GH - AH[2];
          if (YH = HH * HH + BH * BH + LH * LH, YH > rH * rH) return lB.d
        } else YH = this.earDistSq(EH, XH, GH);
        const uH = this.startSpatial(zH, BH, 0, 1, hH, EH, XH, GH, SH, YH, CH);
        return uH ? this.gameSound(uH.howl, uH.id, !0) : lB.d
      }
      setMaster(HH, BH) {
        this.level = nB(HH);
        const LH = BH ? this.level : 0;
        if (LH !== this.master) {
          this.master = LH;
          for (const [HH, BH] of this.live) BH.fadeMs = 0, BH.gain = BH.rel * this.master, BH.howl.volume(BH.gain, HH)
        }
      }
      stopCore() {
        for (const BH of [...this.core.values()]) {
          var HH;
          null === (HH = this.live.get(BH)) || void 0 === HH || HH.howl.stop(BH)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [HH, BH] of [...this.live]) BH.howl.stop(HH), this.forget(HH);
        this.core.clear()
      }
      gameSound(HH, BH, LH) {
        const AH = {
          stop: () => (this.live.has(BH) && HH.stop(BH), AH),
          fade: (HH, LH, rH) => {
            var SH, hH;
            const tH = this.level > 0 ? LH / this.level : LH > 0 && null !== (SH = null === (hH = this.live.get(BH)) || void 0 === hH ? void 0 : hH.rel) && void 0 !== SH ? SH : 0;
            return this.fade(BH, tH, rH, !1), AH
          },
          rate: LH => {
            const rH = this.live.get(BH);
            return rH && (rH.rate = function(HH) {
              return HH > 0 && HH < 1 / 0 ? HH : 1
            }(LH), HH.rate(rH.rate, BH)), AH
          },
          getVolume: () => {
            var HH, LH;
            return (null !== (HH = null === (LH = this.live.get(BH)) || void 0 === LH ? void 0 : LH.rel) && void 0 !== HH ? HH : 0) * this.level
          },
          getRelativeVolume: () => {
            var HH, LH;
            return null !== (HH = null === (LH = this.live.get(BH)) || void 0 === LH ? void 0 : LH.rel) && void 0 !== HH ? HH : 0
          },
          setRelativeVolume: HH => (this.setRel(BH, HH), AH),
          setPannerAttr: rH => {
            if (LH && this.live.has(BH)) {
              const LH = {
                ...gB,
                refDistance: uB.i
              };
              for (const [HH, BH] of Object.entries(rH)) "number" !== typeof BH && "string" !== typeof BH || (LH[HH] = BH);
              HH.pannerAttr({
                coneOuterAngle: LH.coneOuterAngle
              }, BH), HH.pannerAttr(LH, BH)
            }
            return AH
          },
          setPosition: rH => (LH && this.live.has(BH) && Number.isFinite(rH[0] + rH[1] + rH[2]) && HH.pos(rH[2], rH[1], rH[0], BH), AH)
        };
        return AH
      }
      startSpatial(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        const XH = this.howl(HH, !0);
        let GH = null;
        if (!rH) {
          if (this.failed.has(XH)) return null;
          const LH = UB[HH] === jB ? null : (0, oB.e)(TB[HH]),
            AH = (0, oB.d)(nB(BH), Math.sqrt(CH), zH);
          if (GH = new FB(LH, AH, this.now(), XH, this.voiceHost), !this.voices.admit(GH)) return null
        }
        const YH = this.start(HH, !0, BH, LH, AH, rH, EH);
        return GH && (GH.id = YH.id, GH.direct = "loaded" === XH.state() && !XH._playLock), XH.pannerAttr({
          coneOuterAngle: 360
        }, YH.id), XH.pannerAttr({
          ...gB,
          refDistance: zH
        }, YH.id), XH.pos(tH, hH, SH, YH.id), YH
      }
      aliveVoice(HH) {
        const BH = this.live.get(HH);
        if (!BH) return;
        const LH = BH.howl._soundById(HH);
        if (LH && !LH._ended) return BH;
        this.forget(HH)
      }
      earDistSq(HH, BH, LH) {
        if (!this.posed) return 0;
        const AH = HH - this.pose[2],
          rH = BH - this.pose[1],
          SH = LH - this.pose[0];
        return AH * AH + rH * rH + SH * SH
      }
      start(HH, BH, LH, AH, rH, SH, hH) {
        const tH = nB(LH),
          zH = this.howl(HH, BH);
        "unloaded" === zH.state() && (zH.load(), null !== hH && this.loadPick(hH, BH));
        const CH = zH.play(kB.b),
          EH = tH * this.master;
        return zH.volume(EH, CH), this.live.set(CH, {
          howl: zH,
          rel: tH,
          gain: EH,
          fadeFrom: EH,
          fadeAt: 0,
          fadeMs: 0,
          rate: rH,
          handle: AH,
          spatial: BH,
          stopTimer: void 0
        }), 0 !== AH && this.core.set(AH, CH), 1 !== rH && zH.rate(rH, CH), SH && zH.loop(!0, CH), {
          howl: zH,
          id: CH
        }
      }
      loadPick(HH, BH) {
        let [LH, AH] = HH;
        for (let SH = LH; SH < LH + AH; SH++) {
          var rH;
          const HH = this.howl(SH, BH);
          "unloaded" === HH.state() && "loading" !== (null === (rH = this.howls.get(wB(SH, !BH))) || void 0 === rH ? void 0 : rH.state()) && HH.load()
        }
      }
      howl(HH, BH) {
        const LH = wB(HH, BH);
        let AH = this.howls.get(LH);
        if (!AH) {
          const rH = this.createHowl(TB[HH], BH);
          rH.on("end", (HH => {
            rH.loop(HH) || this.forget(HH)
          })), rH.on("stop", (HH => {
            this.forget(HH)
          })), rH.on("play", (HH => {
            this.live.has(HH) && this.started.add(HH)
          })), rH.on("loaderror", (HH => {
            if ("loaded" !== rH.state()) {
              this.failed.add(rH);
              for (const [HH, BH] of this.live) BH.howl === rH && this.forget(HH)
            } else "number" === typeof HH && this.forget(HH)
          })), this.howls.set(LH, rH), AH = rH
        }
        return AH
      }
      setRel(HH, BH) {
        const LH = this.live.get(HH);
        LH && (ZB(LH), LH.fadeMs = 0, LH.rel = nB(BH), LH.gain = LH.rel * this.master, LH.howl.volume(LH.gain, HH))
      }
      fade(HH, BH, LH, AH) {
        const rH = this.live.get(HH);
        if (!rH) return;
        ZB(rH);
        const {
          howl: SH
        } = rH, hH = this.gainNow(rH);
        rH.rel = nB(BH), rH.gain = rH.rel * this.master;
        const tH = LH > 0 ? Math.min(LH, 65535) : 0,
          zH = 0 === tH || hH === rH.gain;
        rH.fadeMs = zH ? 0 : tH, zH ? SH.volume(rH.gain, HH) : (rH.fadeFrom = hH, rH.fadeAt = this.now(), SH.fade(hH, rH.gain, tH, HH)), AH && (zH ? SH.stop(HH) : rH.stopTimer = setTimeout((() => {
          rH.stopTimer = void 0, SH.stop(HH)
        }), tH))
      }
      gainNow(HH) {
        if (HH.fadeMs > 0) {
          const BH = (this.now() - HH.fadeAt) / HH.fadeMs;
          if (BH < 1) return HH.fadeFrom + (HH.gain - HH.fadeFrom) * Math.max(0, BH);
          HH.fadeMs = 0
        }
        return HH.gain
      }
      forget(HH) {
        this.started.delete(HH);
        const BH = this.live.get(HH);
        BH && (ZB(BH), this.live.delete(HH), 0 !== BH.handle && this.core.get(BH.handle) === HH && this.core.delete(BH.handle))
      }
    }

    function wB(HH, BH) {
      return 2 * HH + (BH ? 1 : 0)
    }

    function ZB(HH) {
      void 0 !== HH.stopTimer && (clearTimeout(HH.stopTimer), HH.stopTimer = void 0)
    }
    var dB = LH(41928),
      aB = LH(40060);
    class sB {
      constructor(HH, BH, LH, AH) {
        this.key = HH, this.model = BH, this.host = AH, this.aX = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.fSH = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Mu = !1, this.aX = Math.max(1, Math.ceil(LH)), this.records = new Float32Array(this.aX * XB.d), this.isDirty = new Uint8Array(this.aX), this.tail = new Uint8Array(this.aX * uH.wc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(AH.cmd())
      }
      setOrigin(HH, BH, LH) {
        this.origin[0] = HH, this.origin[1] = BH, this.origin[2] = LH
      }
      markDirty(HH) {
        !this.Mu && HH >= 0 && HH < this.aX && HH < uH.wc.Max && this.gu(HH, HH + 1)
      }
      commit(HH) {
        if (this.Mu) return;
        (HH = Math.min(Math.max(Math.floor(HH), 0), this.aX, uH.wc.Max)) > this.count && this.gu(this.count, HH), this.count = HH;
        const {
          origin: BH,
          sentOrigin: LH,
          dirtyList: AH
        } = this, rH = this.fSH !== HH, SH = LH[0] !== BH[0] || LH[1] !== BH[1] || LH[2] !== BH[2];
        if (0 === AH.length && !rH && !SH) return;
        const hH = this.host.cmd();
        if (!hH || !this.make(hH)) return;
        const tH = AH.length,
          {
            records: zH,
            tailView: CH
          } = this;
        for (let EH = 0; EH < tH; EH++) {
          const HH = AH[EH],
            BH = HH * XB.d,
            LH = EH * uH.wc.Bytes,
            rH = 0 !== zH[BH + XB.g] ? uH.wc.Hidden : 0;
          CH.setUint32(LH, (HH | rH) >>> 0, !0), CH.setFloat32(LH + 4, zH[BH], !0), CH.setFloat32(LH + 8, zH[BH + 1], !0), CH.setFloat32(LH + 12, zH[BH + 2], !0)
        }
        if ((0, uH.$e)(hH, 0, this.key, HH, BH, tH, this.tailOf(tH))) {
          for (let HH = 0; HH < tH; HH++) this.isDirty[AH[HH]] = 0;
          AH.length = 0, this.fSH = HH, LH[0] = BH[0], LH[1] = BH[1], LH[2] = BH[2]
        }
      }
      grow(HH) {
        (HH = Math.ceil(HH)) <= this.aX || this.Mu || (this.records = (0, aB.c)(this.records, new Float32Array(HH * XB.d)), this.isDirty = (0, aB.c)(this.isDirty, new Uint8Array(HH)), this.tail = new Uint8Array(HH * uH.wc.Bytes), this.tailView = new DataView(this.tail.buffer), this.aX = HH)
      }
      dispose() {
        this.Mu || (this.Mu = !0, this.host.Mu(this, this.made ? this.key : null))
      }
      make(HH) {
        if (!this.made && HH) {
          const {
            item: BH,
            scale: LH,
            yaw: AH
          } = this.model;
          this.made = (0, uH.ff)(HH, 0, this.key, BH, LH, AH)
        }
        return this.made
      }
      tailOf(HH) {
        const BH = HH * uH.wc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === BH || (this.tailCut = this.tail.subarray(0, BH)), this.tailCut
      }
      gu(HH, BH) {
        const {
          dirtyList: LH,
          isDirty: AH
        } = this;
        for (let rH = HH; rH < BH; rH++) 0 === AH[rH] && (AH[rH] = 1, LH.push(rH))
      }
    }
    var JB = LH(614),
      iB = LH(46020);
    const pB = new TextEncoder,
      yB = new Uint8Array(0),
      HL = [0, 0, 0];
    class BL {
      constructor(HH, BH) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: HH,
          serverId: BH,
          owes: HH => {
            this.owing.add(HH)
          },
          settled: (HH, BH) => {
            this.owing.delete(HH), BH && this.live.delete(HH)
          }
        }
      }
      create(HH, BH) {
        return LH = HH, JB.q.includes(LH) ? this.add({
          lifeform: EH.j.indexOf(HH)
        }, BH) : null;
        var LH
      }
      createCosmetic(HH, BH) {
        const LH = iB.COSMETIC_MODEL_KEYS.get(HH);
        return void 0 === LH ? null : this.add({
          attachment: LH
        }, BH)
      }
      add(HH, BH) {
        const LH = new LL(++this.keys, HH, BH, this.host);
        return this.live.add(LH), LH
      }
      disposeAll() {
        for (const HH of [...this.live]) HH.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const HH = this.host.cmd();
        for (const BH of this.owing)
          if (!BH.sync(HH)) return
      }
    }
    class LL {
      constructor(HH, BH, LH, AH) {
        this.key = HH, this.source = BH, this.scale = LH, this.host = AH, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = yB, this.perch = null, this.owed = 1, this.Mu = !1, this.sync()
      }
      setPose(HH, BH) {
        this.Mu || (this.feet[0] = HH[0], this.feet[1] = HH[1], this.feet[2] = HH[2], this.yaw = BH, this.owed |= 2, this.sync())
      }
      setVisible(HH) {
        this.Mu || HH === this.visible || (this.visible = HH, this.owed |= 4, this.sync())
      }
      setClip(HH) {
        this.Mu || HH === this.clip || (this.clip = HH, this.clipBytes = null === HH ? yB : pB.encode(HH), this.owed |= 16, this.sync())
      }
      setPerch(HH) {
        this.Mu || (this.perch = HH, this.owed |= 32, this.sync())
      }
      dispose() {
        this.Mu || (this.Mu = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(HH) ? (this.host.settled(this, this.Mu), !0) : (this.host.owes(this), !1)
      }
      write(HH) {
        if (!HH) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, uH.nf)(HH, 0, this.key, this.source.lifeform, this.scale) : (0, uH.Fe)(HH, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: BH,
          perch: LH
        } = this, AH = (2 & BH ? uH.Wc.Pose : 0) | (4 & BH ? uH.Wc.Visible : 0) | (16 & BH ? uH.Wc.Clip : 0) | (32 & BH ? uH.Wc.Perch : 0);
        if (0 !== AH) {
          var rH, SH;
          if (!(0, uH.jf)(HH, 0, this.key, AH, this.visible ? 1 : 0, LH ? 1 : 0, this.feet, this.yaw, LH ? this.host.serverId(LH.vB) : 0, null !== (rH = null === LH || void 0 === LH ? void 0 : LH.offset) && void 0 !== rH ? rH : HL, null !== (SH = null === LH || void 0 === LH ? void 0 : LH.yaw) && void 0 !== SH ? SH : 0, 16 & BH ? this.clipBytes : yB)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, uH.gf)(HH, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var AL = LH(42314);

    function rL(HH, BH, LH, AH) {
      return (0, AL.b)(), (0, uH.Wf)(HH, BH, LH, AH)
    }
    var SL = LH(40084),
      hL = LH(41920),
      tL = LH(42327);
    const zL = [0, 0, 0],
      CL = [0, 0, 0],
      EL = [0, 0, 0],
      XL = [0, 0, 0],
      GL = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      YL = [0, 0, 0],
      uL = [0, 0],
      QL = [1, 1, 1],
      WL = 1 / 3;
    const ML = GB.e;

    function xL(HH) {
      const BH = GB.c[HH],
        LH = BH && GB.e[BH.mainMultiblock];
      return LH && {
        main: LH,
        x: BH.compX,
        y: BH.compY,
        z: BH.compZ
      }
    }

    function vL(HH) {
      if (null === HH || void 0 === HH) return uH.bd;
      const BH = +HH;
      return Number.isInteger(BH) && BH >= -2147483648 && BH <= 2147483647 && String(BH) === String(HH) ? BH : uH.bd
    }

    function PL(HH, BH, LH) {
      return (0, uH.ag)(HH, 0, BH, null !== LH && void 0 !== LH ? LH : Number.NaN)
    }
    class TL {
      constructor(HH) {
        this.deps = HH, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new SL.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (HH => {
          var BH, LH;
          null === (BH = (LH = this.deps).setLocalOptions) || void 0 === BH || BH.call(LH, HH)
        })), this.mobModels = new BL((() => this.deps.cmd()), vL), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Mu: (HH, BH) => {
            this.livePools.delete(HH), null !== BH && (this.owedFrees.push(BH), this.flushOwed())
          }
        }, this.api = HH.api, this.live = HH.live, this.chunks = HH.chunks, this.items = HH.items, this.tables = HH.tables
      }
      isLocal(HH) {
        return null !== HH && void 0 !== HH && +HH === this.api.localId
      }
      assertLocal(HH, BH) {
        if (!this.isLocal(HH)) throw new Error(`Attempted to ${BH} for a player that is not the local player`)
      }
      hT(HH) {
        const BH = this.api.hT(HH);
        if (!BH) throw new Error(`Entity ${HH} has no replicated position`);
        return BH
      }
      checkValid(HH) {
        return !!this.deps.isSessionLive() && (null === HH || void 0 === HH || this.api.checkValid(HH))
      }
      isAlive(HH) {
        return !1 !== this.api.isAlive(HH)
      }
      getItemStat(HH, BH, LH) {
        return this.isLocal(HH) || null !== HH && "Player" === this.api.getEntityType(HH) ? this.tables.getItemStat(BH, LH) : this.tables.getDefaultItemStat(BH, LH)
      }
      getClientOption(HH, BH) {
        return this.assertLocal(HH, "get a client option"), this.tables.getClientOption(BH)
      }
      openShop(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(HH, "open shop"), hH.k.AX("showShopFromServer", {
          toggle: BH,
          qS: LH
        }, !0)
      }
      sendMessage(HH, BH, LH) {
        this.assertLocal(HH, "send a message");
        const AH = "string" === typeof BH ? [{
          str: BH,
          style: LH
        }] : BH;
        hH.k.AX("chat", {
          content: AH
        }, !0)
      }
      getEntityType(HH) {
        return this.api.getEntityType(HH)
      }
      getEntityName(HH) {
        const BH = vL(HH);
        return BH === uH.bd ? void 0 : (0, dB.k)(this.api, BH)
      }
      hasEffect(HH, BH) {
        const LH = vL(HH);
        return LH !== uH.bd && (0, dB.h)(this.api, LH, BH)
      }
      getMetaInfo(HH) {
        return this.tables.getMetaInfo(HH)
      }
      getPlayerDbId(HH) {
        return this.assertLocal(HH, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(HH, BH, LH) {
        if (!this.chunks.dataCleared(HH, BH, LH)) return (0, dB.d)(this.api, HH, BH, LH)
      }
      oq(HH, BH, LH, AH) {
        this.setBlockId(HH, BH, LH, this.tables.getItemId(AH))
      }
      setOtherEntitySetting(HH, BH, LH, AH) {
        if (!this.isLocal(HH)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(uH.md, LH)) throw new Error(`Unknown other-entity setting ${LH}`);
        const rH = uH.md[LH],
          SH = vL(BH);
        if (SH === uH.bd || !this.deps.beforeWrite()) return;
        const hH = (0, RH.g)(AH);
        if (hH.length > 16384) throw new Error(`The other-entity setting ${LH}'s value is over 16384 bytes`);
        const tH = this.api.memoryView(Uint8Array, this.api.scratch(), hH.length, "set_other_entity_setting's value");
        tH && (tH.set(hH), this.api.queries.setOtherEntitySetting(SH, rH, hH.length))
      }
      getPositionView(HH) {
        return this.live.position(+HH)
      }
      readDrawnPosition(HH, BH) {
        return this.api.readDrawnPosition(vL(HH), BH)
      }
      getDrawnHeading(HH) {
        const BH = this.drawnEntity(HH);
        if (!BH) return null;
        if (1 === uH.vb.headingIsDrawn(BH, 0)) return uH.vb.heading(BH, 0);
        const LH = this.api.apiView;
        return this.isLocal(HH) && 0 === (uH.y.playerFlags(LH, 0) & uH.Md.FreeCam) ? uH.y.heading(LH, 0) : null
      }
      getDrawnEyeHeight(HH) {
        const BH = this.drawnEntity(HH),
          LH = BH ? uH.vb.eyeHeight(BH, 0) : 0;
        return LH > 0 ? LH : null
      }
      drawnEntity(HH) {
        const BH = vL(HH);
        return BH === uH.bd || this.api.queries.directorEntity(BH) < uH.vb.BYTES ? null : this.api.scratchData(uH.vb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(HH) {
        const BH = vL(HH);
        return BH !== uH.bd && 1 === this.api.queries.entityDrawn(BH)
      }
      getPlayerIds() {
        return tL.f.ids()
      }
      getPlayerCosmetics(HH) {
        var BH;
        return null !== (BH = (0, tL.j)(HH)) && void 0 !== BH ? BH : null
      }
      getLocalPlayerMovement() {
        const HH = uH.y.playerFlags(this.api.apiView, 0);
        return 0 === (HH & uH.Md.Replay) && this.api.readDrawnPosition(this.api.localId, EL) ? {
          onGround: 0 !== (HH & uH.Md.OnGround),
          jumpHeld: 0 !== (HH & uH.Md.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, YB.v)(this.deps.localPhysicsType())
      }
      yLH(HH) {
        return this.isLocal(HH) ? this.items.LX() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var HH, BH;
        return "Gun" === (null === (HH = this.aliveHeld()) || void 0 === HH || null === (BH = HH.typeObj) || void 0 === BH ? void 0 : BH.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.LX()
      }
      isCrosshairShown() {
        var HH, BH;
        const LH = (0, QB.b)(AH.c.get("crosshairGameView"), AH.c.get("crosshairShownOverride"));
        if (null !== LH) return LH;
        const rH = null === (HH = this.aliveHeld()) || void 0 === HH ? void 0 : HH.typeObj,
          SH = "Gun" === (null === rH || void 0 === rH ? void 0 : rH.type),
          hH = SH || !0 === (null === rH || void 0 === rH ? void 0 : rH.showsAimingUi),
          tH = 0 === (uH.y.playerFlags(this.api.apiView, 0) & uH.Md.ZoomFirstPerson),
          zH = null !== (BH = this.tables.getClientOption("gunshotOrigin")) && void 0 !== BH ? BH : null;
        return (0, QB.f)({
          gun: SH,
          aimable: hH
        }, tH, (0, WB.d)(), zH)
      }
      setCrosshairShown(HH) {
        AH.c.set({
          crosshairShownOverride: HH
        })
      }
      getInventoryFreeSlotCount(HH) {
        return this.isLocal(HH) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(HH) {
        return this.isLocal(HH) ? this.items.selectedSlot : null
      }
      getItemSlot(HH, BH) {
        return this.isLocal(HH) ? this.items.slot(BH) : null
      }
      swapInventorySlots(HH, BH) {
        return this.items.swap(HH, BH)
      }
      isPlayerCrouching(HH) {
        if (this.isLocal(HH)) return 0 !== (uH.y.playerFlags(this.api.apiView, 0) & uH.Md.Crouching);
        const BH = vL(HH);
        return BH !== uH.bd && 1 === this.api.queries.entityCrouching(BH)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (uH.y.playerFlags(this.api.apiView, 0) & uH.Md.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.cBH()
      }
      getActionRay() {
        const HH = this.api.apiView;
        for (let BH = 0; BH < 3; BH++) GL.origin[BH] = uH.y.iBH(HH, 0, BH), GL.direction[BH] = uH.y.actionDir(HH, 0, BH);
        return GL
      }
      canModifyBlockAt(HH, BH, LH) {
        return 1 === this.api.queries.canModify(HH, BH, LH)
      }
      isSolidToPlayerBlockId(HH) {
        return this.tables.isSolidBlockId(HH) && !this.chunks.isWalkThrough(HH)
      }
      blockNameToBlockId(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(HH, BH)
      }
      blockIdToBlockName(HH) {
        return this.tables.nameOfId(HH)
      }
      PLH(HH, BH, LH, AH, rH) {
        return 1 === this.api.queries.terrainBlocked(AH, HH, BH, LH, vL(null !== rH && void 0 !== rH ? rH : null))
      }
      getChunkVersion(HH, BH, LH) {
        return this.chunks.version(HH, BH, LH)
      }
      scanBlocks(HH, BH, LH, AH, rH, SH, hH, tH) {
        return this.chunks.scan(HH, BH, LH, AH, rH, SH, hH, tH)
      }
      readColumnTops(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        this.chunks.columnTops(HH, BH, LH, AH, rH, SH, hH, tH, zH)
      }
      isBlockInLoadedChunk(HH, BH, LH) {
        return this.chunks.isLoaded(HH, BH, LH)
      }
      getBlockId(HH, BH, LH) {
        return this.chunks.ph(HH, BH, LH)
      }
      playSound(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(HH)) return null;
        const hH = this.playSoundFrom(BH, LH, rH, SH);
        return 1 === AH ? hH : hH.rate(AH)
      }
      preloadSounds(HH) {
        var BH, LH;
        null === (BH = (LH = this.deps).preloadSounds) || void 0 === BH || BH.call(LH, HH)
      }
      playSoundFrom(HH, BH, LH, AH) {
        var rH, SH;
        const hH = this.deps.playSound;
        if (!hH) return lB.d;
        const tH = null === LH || void 0 === LH ? void 0 : LH.SH,
          zH = null !== (rH = null === LH || void 0 === LH ? void 0 : LH.maxHearDist) && void 0 !== rH ? rH : uB.f,
          CH = null !== (SH = null === LH || void 0 === LH ? void 0 : LH.refDistance) && void 0 !== SH ? SH : uB.i;
        let EH = null;
        if (Array.isArray(tH)) zL[0] = tH[0], zL[1] = tH[1], zL[2] = tH[2], EH = zL;
        else if (void 0 !== tH && null !== tH) {
          const HH = vL(tH);
          if (!this.api.isLocal(HH)) {
            if (!this.api.readPosition(HH, zL)) return lB.d;
            EH = zL
          }
        }
        return hH(HH, BH, EH, EH && this.ear(), zH, CH, AH)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, CL)) CL[1] += NB;
        else {
          const HH = this.api.apiView;
          if (0 === uH.y.viewProj(HH, 0, 3) && 0 === uH.y.viewProj(HH, 0, 7) && 0 === uH.y.viewProj(HH, 0, 11)) return null;
          for (let BH = 0; BH < 3; BH++) CL[BH] = uH.y.eye(HH, 0, BH)
        }
        return Number.isFinite(CL[0] + CL[1] + CL[2]) ? CL : null
      }
      setBlockId(HH, BH, LH, AH) {
        if (!Number.isInteger(AH) || AH < 0 || AH > 65535) throw new Error(`Invalid block id ${AH}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(HH, BH, LH)) return;
        const rH = Math.floor(HH),
          SH = Math.floor(BH),
          hH = Math.floor(LH),
          tH = this.predictedCells(rH, SH, hH, AH);
        if (1 === this.api.queries.oq(rH, SH, hH, AH)) {
          for (let HH = 0; HH < tH.length; HH += 5) this.chunks.setOverlay(tH[HH], tH[HH + 1], tH[HH + 2], tH[HH + 3], 1 === tH[HH + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(HH, BH) {
        return this.deps.particles.create(HH, BH)
      }
      playParticleEffect(HH) {
        this.deps.particles.playEffect(HH)
      }
      burstParticlePreset(HH, BH, LH) {
        this.deps.particles.burstPreset(HH, BH, LH)
      }
      createGameMesh(HH, BH, LH) {
        const AH = ++this.meshKeys,
          rH = this.deps.cmd();
        if (!rH) return AH;
        const {
          look: SH,
          colour: hH
        } = function(HH) {
          switch (HH.kind) {
            case void 0:
            case "flatEmissive":
              return HH.onTop ? {
                look: uH.gc.FlatOnTop,
                colour: [...HH.rgb, HH.alpha]
              } : HH.opaque ? {
                look: uH.gc.FlatOpaque,
                colour: [...HH.rgb, 1]
              } : {
                look: uH.gc.Flat,
                colour: [...HH.rgb, HH.alpha]
              };
            case "chevronPath":
              return {
                look: uH.gc.Chevrons, colour: [...(0, MB.e)(HH.colour), HH.alpha]
              };
            case "furnaceFire":
              return {
                look: uH.gc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(BH), tH = Math.floor(HH.positions.length / 3), zH = function(HH, BH) {
          const LH = Math.floor(HH.positions.length / 3),
            AH = HH.indices.length,
            rH = LH * (BH ? 5 : 3),
            SH = new Uint8Array(4 * (rH + AH)),
            hH = new DataView(SH.buffer);
          for (let CH = 0; CH < 3 * LH; CH++) hH.setFloat32(4 * CH, HH.positions[CH], !0);
          if (BH) {
            var tH;
            const BH = null !== (tH = HH.uvs) && void 0 !== tH ? tH : [];
            for (let HH = 0; HH < 2 * LH; HH++) {
              var zH;
              hH.setFloat32(4 * (3 * LH + HH), null !== (zH = BH[HH]) && void 0 !== zH ? zH : 0, !0)
            }
          }
          for (let CH = 0; CH < AH; CH++) hH.setUint32(4 * (rH + CH), HH.indices[CH], !0);
          return SH
        }(HH, (0, XB.k)(BH));
        return (0, uH.Se)(rH, 0, AH, SH, hH, LH, tH, HH.indices.length, zH) && this.liveMeshes.add(AH), AH
      }
      setGameMesh(HH, BH) {
        var LH;
        const AH = this.deps.cmd();
        if (!AH) return;
        let rH = 0;
        BH.anchor && (rH |= uH.hc.Anchor, YL[0] = BH.anchor[0], YL[1] = BH.anchor[1], YL[2] = BH.anchor[2]), void 0 !== BH.visible && (rH |= uH.hc.Visible), BH.uvOffset && (rH |= uH.hc.UvOffset, uL[0] = BH.uvOffset[0], uL[1] = BH.uvOffset[1]);
        const SH = null !== (LH = BH.visibility) && void 0 !== LH ? LH : 1;
        void 0 !== BH.visibility && (rH |= uH.hc.Visibility), BH.scale && (rH |= uH.hc.Scale, QL[0] = BH.scale[0], QL[1] = BH.scale[1], QL[2] = BH.scale[2]), 0 !== rH && (0, uH.Ye)(AH, 0, HH, rH, BH.visible ? 1 : 0, YL, uL, SH, QL)
      }
      disposeGameMesh(HH) {
        const BH = this.deps.cmd();
        BH && !(0, uH.We)(BH, 0, HH) || this.liveMeshes.delete(HH)
      }
      hasPackModel(HH) {
        var BH, LH, AH;
        return null !== (BH = null === (LH = (AH = this.deps).hasPackModel) || void 0 === LH ? void 0 : LH.call(AH, HH)) && void 0 !== BH && BH
      }
      disposeGameOutput() {
        const HH = HH => {
          try {
            HH()
          } catch (BH) {
            console.error("Error freeing client game output", BH)
          }
        };
        for (const BH of [...this.liveMeshes]) HH((() => {
          this.disposeGameMesh(BH)
        }));
        for (const BH of [...this.livePools]) HH((() => {
          BH.dispose()
        }));
        HH((() => {
          this.mobModels.disposeAll()
        })), HH((() => {
          this.setGroundArrowStyle(null)
        })), HH((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), HH((() => {
          this.setCrosshairShown(null)
        })), HH((() => {
          this.cameraTurn.dispose()
        })), HH((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(HH, BH) {
        const LH = this.tables.idOf(HH.item);
        if (void 0 === LH) return null;
        const AH = new sB(++this.poolKeys, {
          item: LH,
          scale: HH.scale,
          yaw: HH.yaw
        }, BH, this.poolHost);
        return this.livePools.add(AH), AH
      }
      createMobModel(HH, BH) {
        return this.mobModels.create(HH, BH)
      }
      createCosmeticModel(HH, BH) {
        return this.mobModels.createCosmetic(HH, BH)
      }
      setRouteChevrons(HH) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !HH || 0 === HH.cells.length) return;
        const BH = `${HH.colour} ${HH.alpha}`;
        BH !== this.routeLook && (this.routeLook = BH, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(HH) {
          const [BH, LH, AH] = HH[0].pos, rH = [], SH = [], hH = [];
          return HH.forEach(((HH, tH) => {
            let {
              pos: zH,
              way: [CH, EH]
            } = HH;
            const XH = zH[0] - BH + .5,
              GH = zH[1] - LH + .04,
              YH = zH[2] - AH + .5,
              [uH, QH] = [.35 * -EH, .35 * CH],
              [WH, MH] = [tH * WL, (tH + 1) * WL],
              xH = rH.length / 3;
            rH.push(XH - .5 * CH + uH, GH, YH - .5 * EH + QH), rH.push(XH - .5 * CH - uH, GH, YH - .5 * EH - QH), rH.push(XH + .5 * CH + uH, GH, YH + .5 * EH + QH), rH.push(XH + .5 * CH - uH, GH, YH + .5 * EH - QH), SH.push(0, WH, 1, WH, 0, MH, 1, MH), hH.push(xH, xH + 1, xH + 2, xH + 1, xH + 3, xH + 2)
          })), {
            positions: rH,
            uvs: SH,
            indices: hH
          }
        }(HH.cells), {
          kind: "chevronPath",
          colour: HH.colour,
          alpha: HH.alpha
        }, HH.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(HH) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(HH, 250) / 1e3 * 1.2 * WL) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(HH) {
        this.pendingStyle = HH, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const HH = this.owedFrees;
        if (0 === HH.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const BH = this.deps.cmd();
        if (!BH) return HH.length = 0, void(this.pendingFar = void 0);
        let LH = 0;
        for (; LH < HH.length && (0, uH.bf)(BH, 0, HH[LH]);) LH++;
        HH.splice(0, LH);
        const AH = this.pendingStyle;
        if (void 0 !== AH) {
          (AH ? (0, uH.cg)(BH, 0, AH.width, AH.alpha, 1, AH.endAtSolidFace ? 1 : 0) : (0, uH.cg)(BH, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const rH = this.pendingFar;
        void 0 !== rH && (0, uH.Zf)(BH, 0, null !== rH && void 0 !== rH ? rH : 0, null === rH ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(HH, BH) {
        const LH = this.deps.cmd(),
          AH = vL(HH);
        LH && AH !== uH.bd && (0, uH.ng)(LH, 0, AH, BH)
      }
      setFacingTolerance(HH, BH) {
        const LH = this.deps.cmd(),
          AH = vL(HH);
        LH && AH !== uH.bd && PL(LH, AH, BH)
      }
      forEachEntity(HH) {
        const {
          api: BH
        } = this;
        for (let LH = 0; LH < BH.idStr.length; LH++) {
          const AH = BH.idStr[LH];
          null === AH || TH(BH.kinds[LH]) || HH(AH)
        }
      }
      getEntityInfo(HH) {
        return this.deps.entityInfo.get(HH)
      }
      isEntityInteractable(HH) {
        const BH = vL(HH);
        return BH !== uH.bd && 1 === this.api.queries.entityInteractable(BH)
      }
      isLocalPlayer(HH) {
        return this.isLocal(HH)
      }
      getLineOwner(HH) {
        var BH;
        const LH = null === (BH = this.deps.entityInfo.get(HH)) || void 0 === BH ? void 0 : BH.meshOpts;
        if (!LH) return null;
        try {
          const {
            lineToEId: HH
          } = JSON.parse(LH);
          return null !== HH && void 0 !== HH ? HH : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const HH = this.api.apiView;
        return XL[0] = uH.y.eye(HH, 0, 0), XL[1] = uH.y.eye(HH, 0, 1), XL[2] = uH.y.eye(HH, 0, 2), XL
      }
      getCameraFar() {
        return uH.y.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(HH) {
        null !== HH && (this.farSet = !0), this.pendingFar = HH, this.flushOwed()
      }
      turnCamera(HH, BH) {
        this.cameraTurn.turn(HH, BH)
      }
      clearPickupDelay(HH) {
        const BH = this.deps.cmd(),
          LH = vL(HH);
        BH && LH !== uH.bd && (0, uH.Be)(BH, 0, LH)
      }
      sendChat(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = this.deps.sendCmd();
        return null !== LH && rL(LH, 0, hL.d.Chat, (0, RH.g)((0, hL.k)({
          kt: HH,
          ot: BH
        })))
      }
      sendCommand(HH) {
        HH.length <= 119 && this.sendChat(`/${HH}`)
      }
      predictedCells(HH, BH, LH, AH) {
        const rH = this.chunks,
          SH = [],
          hH = (HH, BH, LH, AH, rH) => {
            SH.push(HH, BH, LH, AH, this.tables.blockRootId(rH) === this.tables.blockRootId(AH) ? 0 : 1)
          },
          tH = rH.ph(HH, BH, LH),
          zH = xL(tH);
        if (zH) {
          const [AH, SH, CH] = [HH - zH.x, BH - zH.y, LH - zH.z], EH = ML[rH.ph(AH, SH, CH)], XH = null === EH || void 0 === EH ? void 0 : EH.positions.some((HH => HH.id === tH && HH.x === zH.x && HH.y === zH.y && HH.z === zH.z));
          for (const HH of (XH && EH ? EH : zH.main).positions) rH.ph(AH + HH.x, SH + HH.y, CH + HH.z) === HH.id && hH(AH + HH.x, SH + HH.y, CH + HH.z, 0, HH.id)
        }
        const CH = xL(AH);
        if (CH)
          for (const XH of CH.main.positions) {
            const [AH, SH, tH] = [HH + XH.x - CH.x, BH + XH.y - CH.y, LH + XH.z - CH.z];
            hH(AH, SH, tH, XH.id, rH.ph(AH, SH, tH))
          } else hH(HH, BH, LH, AH, tH);
        const EH = this.tables;
        if ((0 !== EH.attachedTopOf(tH) || 0 !== EH.attachedTopOf(AH)) && rH.isLoaded(HH, BH + 1, LH)) {
          let zH = rH.ph(HH, BH + 1, LH);
          for (let AH = 0; AH < SH.length; AH += 5) SH[AH] === HH && SH[AH + 1] === BH + 1 && SH[AH + 2] === LH && (zH = SH[AH + 3]);
          const CH = this.attachedTopWrite(tH, AH, zH);
          void 0 !== CH && hH(HH, BH + 1, LH, CH, zH)
        }
        return SH
      }
      attachedTopWrite(HH, BH, LH) {
        const AH = this.tables,
          rH = AH.attachedTopOf(HH),
          SH = AH.attachedTopOf(BH),
          hH = 0 !== rH && 0 !== LH && AH.blockRootId(LH) === AH.blockRootId(rH);
        return 0 !== rH && 0 !== SH && AH.blockRootId(HH) === AH.blockRootId(BH) ? hH && LH !== SH ? SH : void 0 : 0 === SH || !hH && 0 !== LH ? hH ? 0 : void 0 : SH
      }
    }
    const UL = uH.sc + uH.uc * uH.Ec.BYTES,
      VL = 2147483647,
      OL = new TextDecoder,
      bL = new TextEncoder,
      kL = Object.freeze({
        ZC: 0,
        fE: null,
        amountAddedToSlot: 0
      }),
      mL = new Proxy({}, {
        get: () => () => uH.jd
      });

    function oL(HH) {
      return Number.isInteger(HH) && HH >= 0 && HH <= 65535
    }

    function IL(HH) {
      return Number.isInteger(HH) && HH >= 0 && HH <= 4294967295
    }
    class fL {
      constructor(HH) {
        this.deps = HH, this.OL = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(uH.uc), this.ids = new Uint16Array(uH.uc), this.amounts = new Uint16Array(uH.uc), this.attrRead = new Float64Array(uH.uc).fill(-1), this.stale = new Uint16Array(uH.uc), this.staleVersion = new Uint32Array(uH.uc), this.instances = new Uint32Array(uH.uc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(HH) {
        var BH;
        return Number.isInteger(HH) && HH >= 0 && HH < this.len && 0 !== this.ids[HH] && null !== (BH = this.facades[HH]) && void 0 !== BH ? BH : null
      }
      LX() {
        return this.slot(this.selected)
      }
      playerItems() {
        const HH = [];
        for (let BH = 0; BH < Math.min(uH.vd, this.len); BH++) HH.push(this.slot(BH));
        return HH
      }
      freeSlots() {
        let HH = 0;
        for (let BH = 0; BH < Math.min(uH.vd - uH.i, this.len); BH++) 0 === this.ids[BH] && HH++;
        return HH
      }
      amountOf(HH) {
        let BH = 0;
        for (let AH = 0; AH < Math.min(uH.vd, this.len); AH++) {
          const rH = this.slot(AH);
          var LH;
          if ((null === rH || void 0 === rH ? void 0 : rH.name) === HH) BH += null !== (LH = rH.amount) && void 0 !== LH ? LH : 1
        }
        return BH
      }
      instance(HH) {
        var BH;
        return null !== (BH = this.instances[HH]) && void 0 !== BH ? BH : 0
      }
      watch(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      touch() {
        this.version++
      }
      flush(HH) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const LH of [...this.listeners]) try {
            LH()
          } catch (BH) {
            HH(BH)
          }
        }
      }
      chestOpened(HH, BH, LH) {
        this.OL[0] = HH, this.OL[1] = BH, this.OL[2] = LH, this.version++
      }
      refresh() {
        const HH = this.deps.api.apiView,
          BH = uH.y.inventoryViewPtr(HH, 0),
          LH = uH.y.inventoryVersion(HH, 0),
          AH = uH.y.selectedSlot(HH, 0);
        AH !== this.selected && (this.selected = AH, this.version++);
        const rH = uH.y.slotIcon(HH, 0);
        if (rH !== this.slotIconId && (this.slotIconId = rH, this.iconChanged = !0), BH === this.viewPtr && LH === this.viewVersion) return;
        this.viewPtr = BH, this.viewVersion = LH;
        const SH = this.deps.api.memoryData(BH, UL, 4, "the inventory view"),
          hH = SH ? Math.min(SH.getUint32(0, !0), uH.uc) : 0;
        hH !== this.len && (this.len = hH, this.version++);
        let tH = 0;
        for (let zH = 0; zH < uH.uc; zH++) {
          const HH = uH.sc + zH * uH.Ec.BYTES,
            BH = null !== SH && zH < hH ? uH.Ec.item(SH, HH) : 0;
          if (0 === BH || null === SH) {
            0 !== this.ids[zH] && (this.ids[zH] = 0, this.attrRead[zH] = -1, this.instances[zH]++, this.version++);
            continue
          }
          const LH = uH.Ec.amount(SH, HH),
            AH = uH.Ec.attrVersion(SH, HH);
          BH === this.ids[zH] && LH === this.amounts[zH] || this.fill(zH, BH, LH), AH !== this.attrRead[zH] && (this.stale[tH] = zH, this.staleVersion[tH] = AH, tH++)
        }
        tH > 0 && this.fetchAttributes(tH)
      }
      fill(HH, BH, LH) {
        const {
          tables: AH
        } = this.deps, rH = BH !== this.ids[HH];
        let SH = this.facades[HH];
        SH || (SH = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[HH] = SH), rH && (SH.name = AH.nameOfId(BH), SH.typeObj = AH.itemType(BH), SH.attributes = {
          customAttributes: {}
        }, this.attrRead[HH] = -1, this.instances[HH]++), SH.amount = 0 === LH ? null : LH, this.ids[HH] = BH, this.amounts[HH] = LH, this.version++
      }
      fetchAttributes(HH) {
        const {
          api: BH,
          onError: LH
        } = this.deps, AH = BH.memoryView(Uint16Array, BH.scratch(), HH, "item_attributes_batch's slots");
        if (!AH) return void this.markRead(HH);
        AH.set(this.stale.subarray(0, HH));
        const rH = BH.queries.itemAttributesBatch(HH),
          SH = 4294967295 === rH ? null : BH.memoryData(BH.scratch(), rH, 4, "item_attributes_batch's answer");
        if (!SH) return void this.markRead(HH);
        const hH = new Uint8Array(SH.buffer, SH.byteOffset, rH);
        for (let zH = 0; zH + 8 <= rH;) {
          const HH = SH.getUint16(zH, !0),
            BH = SH.getUint32(zH + 4, !0),
            AH = hH.subarray(zH + 8, zH + 8 + BH);
          zH += 8 + (0, GH.te)(BH);
          const rH = this.facades[HH];
          if (rH && 0 !== this.ids[HH] && 0 !== BH) {
            try {
              rH.attributes = JSON.parse(OL.decode(AH))
            } catch (tH) {
              LH(tH)
            }
            this.version++
          }
        }
        this.markRead(HH)
      }
      markRead(HH) {
        for (let BH = 0; BH < HH; BH++) this.attrRead[this.stale[BH]] = this.staleVersion[BH]
      }
      swap(HH, BH) {
        return oL(HH) && oL(BH) && this.settle(this.queries().invSwap(HH, BH))
      }
      move(HH, BH, LH) {
        return oL(HH) && oL(BH) && IL(LH) && this.settle(this.queries().invMove(HH, BH, LH))
      }
      quickMove(HH, BH, LH, AH) {
        var rH, SH;
        if (!oL(HH) || !oL(BH) || !oL(LH) || null !== AH && !IL(AH)) return null;
        const hH = this.queries().invQuickMove(HH, BH, LH, null === AH ? -1 : Math.min(AH, VL)),
          tH = hH === uH.jd ? uH.Sb : null !== (rH = null === (SH = this.extras()) || void 0 === SH ? void 0 : SH[1]) && void 0 !== rH ? rH : uH.Sb;
        return this.settle(hH), tH === uH.Sb ? null : tH
      }
      remove(HH, BH, LH) {
        return oL(HH) && IL(BH) && this.settle(this.queries().invRemove(HH, BH, LH ? 1 : 0))
      }
      selectSlot(HH) {
        return oL(HH) && this.settle(this.queries().selectSlot(HH))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(HH, BH, LH) {
        if (!oL(HH) || !Number.isInteger(BH)) return !1;
        const [AH, rH, SH] = LH;
        return this.settle(this.queries().invEnchant(HH, BH, Math.floor(AH), Math.floor(rH), Math.floor(SH)))
      }
      craft(HH, BH, LH) {
        let AH;
        try {
          AH = this.deps.tables.getItemId(HH)
        } catch {
          return kL
        }
        if (!oL(BH) || null !== LH && (Number.isNaN(LH) || LH < 0)) return kL;
        const rH = null === LH || LH > VL ? -1 : Math.floor(LH),
          SH = this.queries().craft(AH, BH, rH);
        let hH = kL;
        const tH = SH === uH.jd ? null : this.extras();
        if (tH) {
          const [HH, BH, LH] = tH;
          hH = {
            ZC: HH,
            fE: BH === uH.Sb ? null : BH,
            amountAddedToSlot: LH
          }
        }
        return this.settle(SH), hH
      }
      salvage(HH, BH, LH) {
        let AH;
        try {
          AH = this.deps.tables.getItemId(BH)
        } catch {
          return !1
        }
        return oL(HH) && Number.isInteger(LH) && this.settle(this.queries().salvage(HH, AH, Math.max(Math.min(LH, VL), -VL)))
      }
      craftingView(HH, BH, LH) {
        var AH;
        if (this.stopped) return null;
        const {
          api: rH,
          onError: SH
        } = this.deps, hH = HH ? bL.encode(HH) : null;
        if (null !== hH) {
          if (hH.length > 1024) return SH(new Error(`The crafting station ${HH}'s name is over 1024 bytes`)), null;
          const BH = rH.memoryView(Uint8Array, rH.scratch(), hH.length, "crafting_view's station");
          if (!BH) return null;
          BH.set(hH)
        }
        const tH = oL(BH) && oL(LH),
          zH = rH.queries.craftingView(null !== (AH = null === hH || void 0 === hH ? void 0 : hH.length) && void 0 !== AH ? AH : 0, tH ? BH : 0, tH ? LH : 0);
        return zH < uH.ob.BYTES ? (rH.reportCorruption(`crafting_view's answer of ${zH} bytes`), null) : rH.memoryData(rH.scratch(), zH, 1, "crafting_view's answer")
      }
      queries() {
        var HH, BH;
        return !1 === (null === (HH = (BH = this.deps).beforeOp) || void 0 === HH ? void 0 : HH.call(BH)) ? (this.stopped = !0, mL) : this.deps.api.queries
      }
      extras() {
        const {
          api: HH
        } = this.deps;
        return HH.memoryView(Uint32Array, HH.scratch(), 3, "a sync query's extra words")
      }
      settle(HH) {
        if (HH === uH.hd)(0, AL.b)();
        else if (HH !== uH.jd) {
          const BH = this.deps.cmd();
          BH && function(HH, BH, LH) {
            return (0, AL.b)(), (0, uH.yg)(HH, BH, LH)
          }(BH, 0, HH) || this.deps.onError(new Error(`Sync op ${HH}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), HH !== uH.jd
      }
    }
    const lL = 1 / .6,
      KL = [0, 1, 0],
      cL = [0, 0, 0],
      eL = new Uint8Array(0),
      qL = 1.2 * xB.g.JW,
      gL = new TextEncoder,
      NL = [0, 0, 0],
      RL = [0, 0, 0],
      jL = new Map;

    function nL(HH) {
      let BH = jL.get(HH);
      return BH || (jL.size >= 64 && jL.clear(), BH = gL.encode(`{"emitRate":${HH}}`), jL.set(HH, BH)), BH
    }

    function FL(HH) {
      return Number.isFinite(HH) && HH > 0 ? HH : 0
    }

    function DL(HH, BH) {
      for (let LH = 0; LH < 3; LH++) {
        const AH = Math.abs(BH[LH]);
        NL[LH] = HH[LH] - AH, RL[LH] = 2 * AH
      }
      return Number.isFinite(NL[0] + NL[1] + NL[2] + RL[0] + RL[1] + RL[2])
    }

    function wL(HH, BH) {
      return "pos1" === HH || "pos2" === HH ? void 0 : BH
    }

    function ZL(HH, BH, LH) {
      return HH.length > uH.Id.MaxOpts ? (LH(new Error(`${BH}'s particle opts are over ${uH.Id.MaxOpts} bytes of JSON`)), null) : HH
    }
    const dL = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class aL {
      constructor(HH) {
        this.deps = HH, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(HH, BH) {
        var LH;
        const AH = this.sink(),
          rH = null !== (LH = BH.half) && void 0 !== LH ? LH : cL;
        if (!AH || this.live >= uH.Id.MaxLiveKeys || this.nextKey > uH.Id.MaxKey || !DL(BH.pos, rH)) return dL;
        const SH = this.nextKey,
          hH = ZL(function(HH) {
            var BH, LH, AH;
            const rH = JSON.stringify({
              texture: "string" === typeof HH.texture ? HH.texture : "smokePuff",
              aX: HH.aX,
              minLifeTime: HH.minLifeTime,
              maxLifeTime: HH.maxLifeTime,
              minSize: HH.minSize,
              maxSize: HH.maxSize,
              minEmitPower: HH.minEmitPower,
              maxEmitPower: HH.maxEmitPower,
              emitRate: FL(HH.emitRate),
              gravity: null !== (BH = HH.gravity) && void 0 !== BH ? BH : cL,
              dir1: null !== (LH = HH.dir1) && void 0 !== LH ? LH : KL,
              dir2: null !== (AH = HH.dir2) && void 0 !== AH ? AH : KL,
              colorGradients: HH.colorGradients,
              blendMode: HH.blendMode
            });
            return gL.encode(rH)
          }(HH), "createParticles", this.deps.onError);
        return hH && (0, uH.vf)(AH, 0, SH, 0, uH.Id.PresetNone, 0, NL, RL, hH) ? (this.nextKey++, this.live++, this.started = !0, new sL(this, this.session, SH, HH, rH)) : dL
      }
      playEffect(HH) {
        const BH = this.sink(),
          {
            pos1: LH,
            pos2: AH
          } = HH;
        if (!BH || !LH || !AH) return;
        for (let SH = 0; SH < 3; SH++) NL[SH] = Math.min(LH[SH], AH[SH]), RL[SH] = Math.abs(AH[SH] - LH[SH]);
        if (!Number.isFinite(NL[0] + NL[1] + NL[2] + RL[0] + RL[1] + RL[2])) return;
        const rH = ZL(gL.encode(JSON.stringify(HH, wL)), "playParticleEffect", this.deps.onError);
        rH && (0, uH.rf)(BH, 0, 0, uH.Id.PresetNone, uH.Id.HasBox, 0, NL, RL, rH)
      }
      burstPreset(HH, BH, LH) {
        const AH = this.sink(),
          rH = Math.min(Math.floor(LH), uH.Id.MaxBurst);
        if (!AH || !Object.hasOwn(uH.jc, HH) || !(rH > 0)) return;
        const SH = qL;
        for (let hH = 0; hH < 3; hH++) NL[hH] = BH[hH] - SH / 2, RL[hH] = SH;
        Number.isFinite(NL[0] + NL[1] + NL[2]) && (0, uH.rf)(AH, 0, 0, uH.jc[HH], uH.Id.HasBox, rH, NL, RL, eL)
      }
      sessionEnded() {
        this.session++;
        const HH = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !HH || (0, uH.yf)(HH, 0)
      }
      sinkFor(HH) {
        return HH === this.session ? this.deps.cmd() : null
      }
      stop(HH, BH) {
        const LH = this.sinkFor(HH);
        LH && (0, uH.Cf)(LH, 0, BH) && this.live--
      }
    }
    class sL {
      constructor(HH, BH, LH, AH, rH) {
        this.owner = HH, this.session = BH, this.key = LH, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(rH[0]), Math.abs(rH[1]), Math.abs(rH[2])], this.rate = FL(AH.emitRate), this.emitted = this.rate > 0;
        const SH = AH.maxLifeTime * lL * 1e3 + 250;
        this.stopDelayMs = SH >= 0 ? Math.min(SH, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(HH, BH) {
        const LH = this.sink();
        if (LH) {
          if (BH)
            for (let HH = 0; HH < 3; HH++) this.half[HH] = Math.abs(BH[HH]);
          DL(HH, this.half) && (0, uH.Df)(LH, 0, this.key, uH.Id.HasBox, NL, RL, eL)
        }
      }
      setEmitRate(HH) {
        const BH = this.sink(),
          LH = FL(HH);
        BH && LH !== this.rate && (0, uH.Df)(BH, 0, this.key, 0, cL, cL, nL(LH)) && (this.rate = LH, this.emitted ||= LH > 0)
      }
      emit(HH) {
        const BH = this.sink(),
          LH = Math.min(Math.floor(HH), uH.Id.MaxBurst);
        BH && LH > 0 && (0, uH.rf)(BH, 0, this.key, uH.Id.PresetNone, 0, LH, cL, cL, eL) && (this.emitted = !0)
      }
      emitPoints(HH, BH, LH) {
        const AH = this.sink(),
          rH = Math.min(Math.floor(LH), uH.Id.MaxPoints, Math.floor(BH.length / 4));
        if (!AH || !(rH > 0) || !Number.isFinite(HH[0] + HH[1] + HH[2])) return;
        const SH = new Uint8Array(BH.buffer, BH.byteOffset, rH * uH.Id.PointBytes);
        (0, uH.sf)(AH, 0, this.key, rH, HH, SH) && (this.emitted = !0)
      }
      setDirections(HH, BH) {
        const LH = this.sink();
        if (!LH || !Number.isFinite(HH[0] + HH[1] + HH[2] + BH[0] + BH[1] + BH[2])) return;
        const AH = gL.encode(JSON.stringify({
          dir1: [HH[0], HH[1], HH[2]],
          dir2: [BH[0], BH[1], BH[2]]
        }));
        (0, uH.Df)(LH, 0, this.key, 0, cL, cL, AH)
      }
      stop() {
        const HH = this.sink();
        this.stopped = !0, HH && (this.emitted ? (this.rate > 0 && (0, uH.Df)(HH, 0, this.key, 0, cL, cL, nL(0)), setTimeout((() => {
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
    const JL = JB.s,
      iL = new TextDecoder;

    function pL(HH, BH) {
      const {
        serverIds: LH,
        kinds: AH
      } = HH;
      let rH = 0;
      for (let SH = 0; SH < LH.length; SH++) {
        const HH = LH[SH];
        if (HH !== uH.bd && !TH(AH[SH])) {
          if (rH === BH.length) {
            const HH = new Int32Array(Math.max(64, 2 * rH));
            HH.set(BH), BH = HH
          }
          BH[rH++] = HH
        }
      }
      return {
        ids: BH,
        count: rH
      }
    }

    function yL(HH, BH) {
      return HH.length >= BH ? HH : new Int32Array(Math.max(BH, 2 * HH.length))
    }

    function HA(HH, BH, LH, AH) {
      for (let rH = 0; rH < LH; rH += 4096) {
        const SH = Math.min(4096, LH - rH),
          hH = HH.memoryView(Int32Array, HH.scratch(), SH, "entity_info_batch's ids");
        if (!hH) return !1;
        hH.set(BH.subarray(rH, rH + SH));
        const tH = HH.queries.entityInfoBatch(SH),
          zH = 4294967295 === tH ? null : HH.memoryData(HH.scratch(), tH, 4, "entity_info_batch's records");
        if (!zH) return !1;
        for (let HH = 0; HH + uH.$b.BYTES <= tH;) {
          const BH = uH.$b.len(zH, HH);
          AH(uH.$b.serverId(zH, HH), BA(zH, HH, BH)), HH += uH.$b.BYTES + (0, GH.te)(BH)
        }
      }
      return !0
    }

    function BA(HH, BH, LH) {
      var AH, rH, SH;
      const hH = uH.$b.kind(HH, BH),
        tH = 0 === hH ? null : UH(hH);
      if (null === tH) return null;
      const zH = uH.$b.variation(HH, BH),
        CH = uH.$b.pose(HH, BH),
        EH = uH.$b.meta(HH, BH),
        XH = uH.$b.mesh(HH, BH),
        GH = 0 !== (uH.$b.flags(HH, BH) & uH._b.HasOpts),
        YH = JL[tH];
      return Object.freeze({
        type: tH,
        variation: zH === uH.gd ? void 0 : null !== (AH = null !== (rH = null === YH || void 0 === YH ? void 0 : YH[zH]) && void 0 !== rH ? rH : null === YH || void 0 === YH ? void 0 : YH[0]) && void 0 !== AH ? AH : "default",
        pose: CH === uH.qc ? void 0 : null !== (SH = uH.Mb[CH]) && void 0 !== SH ? SH : uH.Mb[0],
        metaInfo: EH === uH.qc ? void 0 : uH.Vc[EH],
        meshKind: XH === uH.qc ? void 0 : uH.Uc[XH],
        meshOpts: GH ? iL.decode(new Uint8Array(HH.buffer, HH.byteOffset + BH + uH.$b.BYTES, LH)) : void 0
      })
    }
    const LA = 1,
      AA = 2;
    class rA {
      constructor(HH) {
        this.deps = HH, this.wanted = 0, this.LX = !1, this.refused = !1
      }
      get on() {
        return this.LX
      }
      want(HH, BH) {
        this.wanted = BH ? this.wanted | HH : this.wanted & ~HH;
        const LH = 0 !== this.wanted;
        if (LH === this.LX) return;
        const AH = this.deps.cmd();
        null !== AH ? (0, uH.Cg)(AH, 0, LH ? 1 : 0) ? (this.LX = LH, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.LX = !1
      }
    }
    class SA {
      constructor(HH) {
        this.deps = HH, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(HH) {
        var BH;
        return this.complete || this.fill(), null !== (BH = this.entries.get("string" === typeof HH ? HH : String(HH))) && void 0 !== BH ? BH : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(HH) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const HH = new Int32Array(2 * this.pending.length);
            HH.set(this.pending), this.pending = HH
          }
          this.pending[this.pendingCount++] = HH
        }
      }
      removed(HH) {
        this.entries.size > 0 && this.entries.delete(String(HH))
      }
      refresh() {
        const HH = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (HH > 0 && this.complete) {
          const {
            api: BH
          } = this.deps;
          let LH = 0;
          const AH = this.ids = yL(this.ids, HH);
          for (let rH = 0; rH < HH; rH++) {
            const HH = this.pending[rH],
              SH = BH.indexById.get(HH);
            void 0 === SH || TH(BH.kinds[SH]) ? this.entries.delete(String(HH)) : AH[LH++] = HH
          }
          LH > 0 && !this.batch(AH, LH) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(LA, !1)
      }
      fill() {
        const {
          api: HH
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: HH
          } = this.deps, BH = HH.on;
          HH.want(LA, !0), !BH && HH.on && (this.refill = this.midFrame)
        }
        const {
          ids: BH,
          count: LH
        } = pL(HH, this.ids);
        this.ids = BH, LH > 0 && !this.batch(BH, LH) && (this.refill = !0)
      }
      batch(HH, BH) {
        return HA(this.deps.api, HH, BH, ((HH, BH) => {
          null === BH ? this.entries.delete(String(HH)) : this.entries.set(String(HH), BH)
        }))
      }
    }
    var hA = LH(5268);

    function tA(HH) {
      if ("message" !== HH.type || HH.kt !== hA.nc.NewClientOptions || HH.payloadKind !== GH.jc.Msgpack) return null;
      const BH = (0, RH.e)(HH.payload);
      if (null === BH || "object" !== typeof BH || Array.isArray(BH)) throw new Error("NewClientOptions whose body isn't an object of options");
      return BH
    }
    var zA = LH(1182),
      CA = LH(37504);

    function EA(HH, BH, LH, AH, rH, SH, tH) {
      var zH, CH, EH;
      switch (HH) {
        case uH.oe.ToggleMenu: {
          const HH = uH.K[BH];
          hH.k.AX("toggleMenu", void 0 === HH ? "inventory" : `inventory|${HH}`);
          break
        }
        case uH.oe.EditBoard:
          hH.k.AX("EditBoard", {
            pos: 0 === BH ? null : LH
          });
          break;
        case uH.oe.EditCodeBlock:
        case uH.oe.ViewCodeBlock:
          hH.k.AX("EditCodeBlock", {
            pos: LH,
            canChangePos: HH === uH.oe.EditCodeBlock
          });
          break;
        case uH.oe.EditCustomLobbyBlock:
          hH.k.AX("EditCustomLobbyBlock", {
            pos: LH
          });
          break;
        case uH.oe.OpenIronChest:
          hH.k.AX("OpenIronChest", {
            pos: LH
          });
          break;
        case uH.oe.EditNameTag:
          hH.k.AX("EditNameTag", null !== (zH = null === (CH = rH.LX()) || void 0 === CH || null === (EH = CH.attributes.customAttributes) || void 0 === EH ? void 0 : EH.text) && void 0 !== zH ? zH : "");
          break;
        case uH.oe.EditBook: {
          var XH, GH, QH;
          const HH = null === (XH = rH.LX()) || void 0 === XH ? void 0 : XH.attributes;
          hH.k.AX("EditBook", {
            pages: (0, zA.N)(null === HH || void 0 === HH || null === (GH = HH.customAttributes) || void 0 === GH ? void 0 : GH.pages),
            title: null !== (QH = null === HH || void 0 === HH ? void 0 : HH.customDisplayName) && void 0 !== QH ? QH : "Title",
            isPublished: !(null === HH || void 0 === HH || !HH.customDescription)
          });
          break
        }
        case uH.oe.CantChangeBlock:
          ! function(HH, BH) {
            const LH = BH.getClientOption("cantChangeError"),
              AH = BH.getClientOption(HH ? "cantBuildError" : "cantBreakError"),
              rH = HH ? LH : AH;
            (BH.getClientOption("canChange") || rH || "You cannot modify this block" !== LH) && hH.k.AX("showBottomMessage", {
              message: AH || LH,
              type: "Error"
            })
          }(1 === BH, SH);
          break;
        case uH.oe.MiddleBarStart:
          hH.k.AX("middleScreenBarInitiate", {
            duration: AH,
            NS: 1 === LH[0],
            horizBarRemOffset: BH
          });
          break;
        case uH.oe.MiddleBarStop:
          hH.k.AX("middleScreenBarRemove");
          break;
        case uH.oe.Hitmarker:
          hH.k.AX("localGunHitmarker", {
            aA: 1 === BH
          });
          break;
        case uH.oe.ShotsLeft:
          hH.k.AX("localPlayerNewShotsLeft", AH);
          break;
        case uH.oe.AimingOverlay:
          hH.k.AX("aimingOverlay", 3 === (3 & BH) ? "sniper" : "none");
          break;
        case uH.oe.BottomMessage:
          hH.k.AX("showBottomMessage", JSON.parse(tH()));
          break;
        case uH.oe.Crosshair:
          rH.inaccuracy = (0, jH.f)(AH), (0, CA.e)().crosshairAccuracy(rH.inaccuracy);
          break;
        case uH.oe.ChargeStage:
          break;
        case uH.oe.EmoteWheelClose:
          hH.k.AX("requestEmoteWheelClose");
          break;
        case uH.oe.BlockMined:
          hH.k.AX("localBlockMined");
          break;
        default:
          throw new YH.d(`UiEvent of no kind: what ${HH}`)
      }
    }
    var XA = LH(38871),
      GA = LH(34996),
      YA = LH(2045),
      uA = LH(37659),
      QA = LH(35006),
      WA = LH(5255);
    const MA = 10,
      xA = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      vA = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      PA = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function TA(HH, BH) {
      let LH, AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const SH = () => (LH = (0, YA.r)(LH, BH()), LH);
      return {
        current: SH,
        watch(BH) {
          const LH = () => {
              BH(SH())
            },
            hH = [HH.watch(LH)];
          return null !== AH && hH.push((0, YA.v)((HH => {
            HH.some(AH) && LH()
          }))), null !== rH && hH.push(rH(LH)), () => {
            for (const HH of hH) HH()
          }
        }
      }
    }

    function UA(HH) {
      return HH && {
        name: HH.name,
        amount: HH.amount,
        attributes: HH.attributes
      }
    }
    const VA = new WeakMap;

    function OA(HH) {
      let BH = VA.get(HH);
      return void 0 === BH && (BH = (0, QA.creativeItemIds)().map((BH => ({
        name: HH.nameOfId(BH),
        amount: HH.isStackableId(BH) ? 1 : null,
        attributes: (0, XA.d)("Gun" === (0, QA.itemTypeOf)(BH) ? {
          type: "Gun",
          clipSize: (0, QA.clipSizeOf)(BH)
        } : void 0)
      }))), VA.set(HH, BH)), BH
    }

    function bA(HH, BH, LH, AH) {
      const rH = BH => (HH.flush(AH), BH),
        SH = LH => {
          var AH, rH, SH, hH, tH, zH, CH;
          const EH = HH.slot(LH);
          if (!EH) return null;
          const {
            rootName: XH,
            metaStr: GH
          } = BH.getMetaInfo(EH.name);
          return {
            name: EH.name,
            amount: EH.amount,
            attributes: EH.attributes,
            instance: HH.instance(LH),
            displayName: null !== (AH = EH.attributes.customDisplayName) && void 0 !== AH ? AH : BH.getDisplayName(XH),
            requiresAmmo: "RequiresAmmo" === GH,
            clipSize: null !== (rH = null !== (SH = null === (hH = EH.attributes.customAttributes) || void 0 === hH || null === (tH = hH.gunStats) || void 0 === tH ? void 0 : tH.clipSize) && void 0 !== SH ? SH : null === (zH = BH.getGunStats(XH)) || void 0 === zH ? void 0 : zH.clipSize) && void 0 !== rH ? rH : null === (CH = EH.typeObj) || void 0 === CH ? void 0 : CH.clipSize
          }
        },
        tH = function(HH, BH) {
          let LH = null,
            AH = {
              focus: null,
              recipes: [],
              detail: null
            },
            rH = -1;
          const SH = new Set;
          return {
            read() {
              var SH, hH;
              if (null === LH) return null !== AH.focus && (AH = {
                ...AH,
                focus: null
              }), AH;
              if (AH.focus === LH && rH === HH.changes) return AH;
              if (rH = HH.changes, 0 === HH.length) return AH = {
                focus: LH,
                recipes: [],
                detail: null
              }, AH;
              let tH = 0;
              if (null !== LH.recipe) try {
                tH = BH.getItemId(LH.recipe.name)
              } catch {}
              const zH = HH.craftingView(LH.station, tH, null !== (SH = null === (hH = LH.recipe) || void 0 === hH ? void 0 : hH.wC) && void 0 !== SH ? SH : 0);
              return AH = null === zH ? {
                focus: LH,
                recipes: [],
                detail: null
              } : function(HH, BH, LH) {
                let AH = uH.ob.BYTES;
                const rH = [];
                for (let EH = uH.ob.recipes(HH, 0); EH > 0; EH--) {
                  const LH = uH.gb.flags(HH, AH),
                    SH = {
                      name: BH.nameOfId(uH.gb.item(HH, AH)),
                      wC: uH.gb.recipe(HH, AH),
                      requires: [],
                      produces: uH.gb.produces(HH, AH),
                      haveIngredients: 0 !== (LH & uH.cb.HaveIngredients),
                      listed: 0 !== (LH & uH.cb.Listed)
                    };
                  let hH = uH.gb.requires(HH, AH);
                  for (AH += uH.gb.BYTES; hH > 0; hH--) {
                    const LH = uH.jb.items(HH, AH);
                    SH.requires.push({
                      items: oA(HH, AH + uH.jb.BYTES, LH, BH),
                      amt: uH.jb.amount(HH, AH)
                    }), AH += uH.jb.BYTES + 2 * LH
                  }
                  rH.push(SH)
                }
                const SH = uH.ob.flags(HH, 0);
                if (null === LH.recipe || 0 === (SH & uH.nb.Detail)) return {
                  focus: LH,
                  recipes: rH,
                  detail: null
                };
                const hH = {},
                  tH = {};
                for (let EH = uH.ob.ingredients(HH, 0); EH > 0; EH--) {
                  const LH = uH.ab.item(HH, AH),
                    rH = uH.ab.from(HH, AH),
                    SH = uH.ab.amount(HH, AH);
                  AH += uH.ab.BYTES;
                  const zH = rH === uH.I ? null : oA(HH, AH, rH, BH);
                  if (null !== zH && (AH += 2 * rH), 0 === LH) continue;
                  const CH = BH.nameOfId(LH);
                  hH[CH] = SH, null !== zH && (tH[CH] = zH)
                }
                const {
                  name: zH,
                  wC: CH
                } = LH.recipe;
                return {
                  focus: LH,
                  recipes: rH,
                  detail: {
                    name: zH,
                    wC: CH,
                    craftAllTimes: uH.ob.craftAllTimes(HH, 0),
                    roomForOne: 0 !== (SH & uH.nb.RoomForOne),
                    resultStackable: Boolean(BH.getItemStat(zH, "stackable")),
                    amounts: hH,
                    ingredientsCraftedFrom: tH
                  }
                }
              }(zH, BH, LH), AH
            },
            setFocus(HH) {
              LH = HH;
              for (const BH of [...SH]) BH()
            },
            watchFocus: HH => (SH.add(HH), () => {
              SH.delete(HH)
            })
          }
        }(HH, BH);
      return {
        states: {
          inventory: TA(HH, (() => {
            const LH = HH.length;
            if (0 === LH) return xA;
            const AH = [];
            for (let BH = 0; BH < uH.vd; BH++) AH.push(UA(HH.slot(BH)));
            const rH = HH.slotIcon,
              SH = AH[HH.selectedSlot];
            0 !== rH && SH && (AH[HH.selectedSlot] = {
              ...SH,
              icon: BH.nameOfId(rH)
            });
            const hH = !0 === BH.getClientOption("creative");
            let tH = [],
              zH = null;
            if (LH > uH.vd) {
              for (let BH = uH.vd; BH < LH; BH++) tH.push(UA(HH.slot(BH)));
              zH = {
                type: null,
                pos: [...HH.OL],
                numSlots: LH - uH.vd,
                ironChest: null
              }
            } else hH && (tH = OA(BH));
            return {
              player: AH,
              chestOrCreative: tH,
              chest: zH,
              creative: hH,
              selectedSlot: HH.selectedSlot,
              freeSlots: HH.freeSlots()
            }
          }), (0, YA.l)("creative")),
          hotbar: TA(HH, (() => {
            if (0 === HH.length) return vA;
            const BH = [];
            for (let HH = 0; HH < MA; HH++) BH.push(SH(HH));
            return {
              items: BH,
              ammo: HH.amountOf("Ammo"),
              selectedSlot: HH.selectedSlot
            }
          }), (0, YA.h)("DisplayName", "GunStats")),
          crafting: TA(HH, tH.read, null, tH.watchFocus),
          heldItemAim: TA(HH, (() => {
            var BH;
            if (!LH()) return PA;
            const AH = null === (BH = HH.LX()) || void 0 === BH ? void 0 : BH.typeObj,
              rH = "Gun" === (null === AH || void 0 === AH ? void 0 : AH.type);
            return {
              gun: rH,
              aimable: rH || !0 === (null === AH || void 0 === AH ? void 0 : AH.showsAimingUi),
              chargeName: "Chargeable" === (null === AH || void 0 === AH ? void 0 : AH.type) ? AH.name : null
            }
          }), null, (HH => function(HH, BH) {
            let LH = HH();
            return (0, WA.v)((() => {
              const AH = HH();
              AH !== LH && (LH = AH, BH(AH))
            }))
          }(LH, HH)))
        },
        events: {
          hotbarSlotRequested: (0, YA.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, YA.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, YA.b)("numkeyPressed"),
          inventoryDropRequested: (0, YA.b)("DropInvenItem"),
          chestToggled: (0, YA.b)("chestToggleFromServer"),
          chestRefreshed: (0, YA.b)("chestRefreshedFromServer", mA),
          inventorySynced: (0, YA.b)("syncedInvenFromServer", mA),
          enchantingTableOpened: (0, YA.b)("enchantingTable", (HH => {
            let {
              position: LH,
              ph: AH
            } = HH;
            return {
              position: [...LH],
              blockName: BH.getMetaInfo(AH).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(BH) {
            HH.selectSlot(BH), HH.flush(AH)
          },
          removeInventoryItem(BH) {
            let {
              slot: LH,
              amount: AH,
              drop: SH
            } = BH;
            return rH(HH.remove(LH, AH, SH))
          },
          swapInventorySlots(BH) {
            let {
              a: LH,
              b: AH
            } = BH;
            return rH(HH.swap(LH, AH))
          },
          moveInventoryItem(BH) {
            let {
              from: LH,
              to: AH,
              amount: SH
            } = BH;
            return rH(HH.move(LH, AH, SH))
          },
          quickMoveInventoryItem(BH) {
            let {
              slot: LH,
              start: AH,
              end: SH,
              amount: hH
            } = BH;
            return rH(HH.quickMove(LH, AH, SH, hH))
          },
          closeChest() {
            HH.closeChest(), HH.flush(AH), hH.k.AX("chestClosedByPlayer")
          },
          focusCrafting(HH) {
            tH.setFocus(HH)
          },
          craftRecipe(BH) {
            let {
              name: LH,
              wC: AH,
              times: SH
            } = BH;
            return rH(HH.craft(LH, AH, SH))
          },
          salvageItem(BH) {
            let {
              slot: LH,
              name: AH,
              amount: SH
            } = BH;
            return rH(HH.salvage(LH, AH, SH))
          },
          enchantItem(BH) {
            let {
              slot: LH,
              level: AH,
              tablePos: rH
            } = BH;
            HH.enchant(LH, AH, rH)
          }
        },
        queries: {
          enchantingOffer(LH) {
            let {
              slot: AH,
              blockName: rH
            } = LH;
            return function(HH, BH, LH, AH) {
              const rH = HH.slot(LH);
              if (!rH || !BH.getClientOption("canCraft") || !(0, GA.q)(AH) || (0, GA.o)(rH.attributes)) return kA;
              const SH = (0, QA.enchantmentPerksOf)(BH.getItemId(rH.name));
              if (0 === SH.length) return kA;
              const hH = [];
              for (let tH = 0; tH < uA.d; tH++) {
                const {
                  commonProb: HH,
                  uncommonProb: BH,
                  rareProb: LH,
                  epicProb: rH,
                  legendaryProb: SH,
                  level: zH
                } = (0, GA.f)(AH, tH);
                hH.push({
                  level: zH,
                  odds: [HH, BH, LH, rH, SH].map((HH => 100 * HH))
                })
              }
              return {
                perks: [...SH],
                options: hH
              }
            }(HH, BH, AH, rH)
          }
        }
      }
    }
    const kA = Object.freeze({
      perks: [],
      options: []
    });

    function mA() {
      return null
    }

    function oA(HH, BH, LH, AH) {
      const rH = [];
      for (let SH = 0; SH < LH; SH++) {
        const LH = HH.getUint16(BH + 2 * SH, !0);
        0 !== LH && rH.push(AH.nameOfId(LH))
      }
      return rH
    }
    class IA {
      constructor(HH) {
        this.api = HH, this.positions = new Map, this.targeted = {
          y5: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          AW: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(HH) {
        let BH = this.positions.get(HH);
        return BH || (this.api.checkValid(HH) || this.api.isLocal(HH) ? (BH = [NaN, NaN, NaN], this.api.readPosition(HH, BH), this.positions.set(HH, BH), BH) : null)
      }
      cBH() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [BH, LH] of this.positions) this.api.readPosition(BH, LH) || this.api.checkValid(BH) || this.api.isLocal(BH) || this.positions.delete(BH);
        const HH = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (uH.y.playerFlags(HH, 0) & uH.Md.Breaking) && uH.y.breakingProgress(HH, 0) >= 0, this.isBreaking)
          for (let BH = 0; BH < 3; BH++) this.breaking[BH] = uH.y.breakingPos(HH, 0, BH)
      }
      refreshTarget() {
        const HH = this.api.apiView,
          BH = uH.y.targetBlockId(HH, 0);
        if (this.hasTarget = BH !== uH.cd, this.hasTarget) {
          const LH = this.targeted;
          LH.y5 = BH;
          for (let BH = 0; BH < 3; BH++) LH.position[BH] = uH.y.targetBlock(HH, 0, BH), LH.normal[BH] = uH.y.targetNormal(HH, 0, BH), LH.AW[BH] = uH.y.targetAdjacent(HH, 0, BH)
        }
      }
      despawned(HH) {
        const BH = this.positions.get(HH);
        BH && !this.api.isLocal(HH) && (BH.fill(NaN), this.positions.delete(HH))
      }
    }
    var fA = LH(41949),
      lA = LH(41933),
      KA = LH(37250),
      cA = LH(37656);
    const eA = 1,
      qA = 2;
    class gA {
      constructor() {
        this.game = new cA.d, this.client = new cA.d, this.LX = 0, this.movesFly = null
      }
      setGame(HH) {
        if (null === HH || "object" !== typeof HH) return !1;
        const {
          key: BH,
          value: LH
        } = HH;
        return "string" === typeof BH && (this.game.setBooleanType(BH, Boolean(LH)), !0)
      }
      setClient(HH, BH) {
        this.client.setBooleanType(HH, BH)
      }
      clearGame() {
        this.game = new cA.d, this.movesFly = null
      }
      setMovesFly(HH) {
        this.movesFly = HH
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? eA : 0) | (this.client._getTotalBooleanVal() ? qA : 0)
      }
      write(HH) {
        const BH = this.perms(),
          {
            movesFly: LH
          } = this;
        if (BH === this.LX && null === LH) return !0;
        let AH = uH.bc.Keep;
        return null !== LH && (AH = LH ? uH.bc.On : uH.bc.Off), !(!HH || !(0, uH.Ne)(HH, 0, AH, BH, LH ? 1 : 0)) && (this.LX = BH, this.movesFly = null, !0)
      }
    }
    class NA {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = HH, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: tH.b,
          get y() {
            return BH()
          }
        }
      }
      get hasView() {
        const HH = this.api.apiView,
          BH = uH.y.viewProj;
        return 0 !== BH(HH, 0, 3) || 0 !== BH(HH, 0, 7) || 0 !== BH(HH, 0, 11) || 0 !== BH(HH, 0, 15)
      }
      get cameraPosition() {
        const HH = this.api.apiView,
          {
            eye: BH
          } = this;
        for (let LH = 0; LH < 3; LH++) BH[LH] = uH.y.eye(HH, 0, LH);
        return BH
      }
      get cameraDirection() {
        const HH = this.api.apiView,
          BH = uH.y.viewProj,
          LH = BH(HH, 0, 3),
          AH = BH(HH, 0, 7),
          rH = BH(HH, 0, 11),
          SH = Math.hypot(LH, AH, rH),
          {
            forward: hH
          } = this;
        return SH > 0 && (hH[0] = LH / SH, hH[1] = AH / SH, hH[2] = rH / SH), hH
      }
      get cameraHeading() {
        return uH.y.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return uH.y.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return uH.y.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return uH.y.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(HH) {
        this.clip(HH);
        const {
          clipX: BH,
          clipY: LH,
          clipW: AH
        } = this;
        if (AH > 0) {
          const HH = BH / AH * 50,
            rH = -LH / AH * 50;
          return Math.abs(HH) <= this.screenBandPct.x && Math.abs(rH) <= this.screenBandPct.y ? {
            x: 50 + HH,
            y: 50 + rH
          } : this.clampToBand(HH, rH)
        }
        const rH = this.cameraPosition,
          SH = Math.hypot(HH[0] - rH[0], HH[1] - rH[1], HH[2] - rH[2]),
          hH = this.api.apiView,
          tH = uH.y.viewProj,
          zH = SH > 0 ? BH / SH : 0,
          CH = SH > 0 ? -LH / SH : 0,
          EH = Math.hypot(tH(hH, 0, 1), tH(hH, 0, 5), tH(hH, 0, 9)),
          XH = zH / Math.hypot(tH(hH, 0, 0), tH(hH, 0, 4), tH(hH, 0, 8)),
          GH = CH / EH,
          YH = !(Math.abs(XH) >= .001 || Math.abs(GH) >= .001);
        return this.clampToBand(zH, YH ? -(EH || 1) : CH)
      }
      projectDirectionToScreenPos(HH) {
        if (!this.hasView) return;
        const BH = this.cameraPosition,
          LH = this.along;
        for (let AH = 0; AH < 3; AH++) LH[AH] = BH[AH] + 10 * HH[AH];
        return this.projectWorldPosToScreenPos(LH)
      }
      projectWorldPosToViewport(HH) {
        this.clip(HH);
        const {
          clipX: BH,
          clipY: LH,
          clipW: AH
        } = this;
        return AH > 0 ? {
          x: 50 + BH / AH * 50,
          y: 50 - LH / AH * 50
        } : null
      }
      clip(HH) {
        const BH = this.api.apiView,
          LH = HH[0] - uH.y.origin(BH, 0, 0),
          AH = HH[1] - uH.y.origin(BH, 0, 1),
          rH = HH[2] - uH.y.origin(BH, 0, 2),
          SH = uH.y.viewProj;
        this.clipX = SH(BH, 0, 0) * LH + SH(BH, 0, 4) * AH + SH(BH, 0, 8) * rH + SH(BH, 0, 12), this.clipY = SH(BH, 0, 1) * LH + SH(BH, 0, 5) * AH + SH(BH, 0, 9) * rH + SH(BH, 0, 13), this.clipW = SH(BH, 0, 3) * LH + SH(BH, 0, 7) * AH + SH(BH, 0, 11) * rH + SH(BH, 0, 15)
      }
      clampToBand(HH, BH) {
        return (0, tH.e)(HH, BH, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var RA = LH(5279);
    const jA = new TextEncoder,
      nA = new Uint8Array(uH.P * uH.O);
    class FA {
      constructor() {
        this.buttons = [], this.LX = !0
      }
      set(HH) {
        this.buttons = HH, this.LX = !1
      }
      attached() {
        this.LX = 0 === this.buttons.length
      }
      write(HH) {
        if (this.LX) return;
        const BH = new Uint8Array(uH.P),
          LH = new Uint8Array(uH.P);
        let AH = 0,
          rH = 0;
        for (const {
            id: SH,
            keycode: hH
          }
          of this.buttons) {
          if (AH === uH.P) break;
          const {
            read: HH,
            written: tH
          } = jA.encodeInto(SH, nA.subarray(rH, rH + uH.O));
          if (HH < SH.length) continue;
          const zH = RA.j[hH];
          BH[AH] = "number" === typeof zH ? zH : 0, LH[AH] = tH, AH++, rH += tH
        }
        this.LX = (0, uH.xe)(HH, 0, AH, BH, LH, nA.subarray(0, rH))
      }
    }

    function DA(HH, BH, LH) {
      const AH = jA.encode(BH);
      return AH.length <= uH.O && function(HH, BH, LH, AH) {
        return (0, AL.b)(), (0, uH.Gf)(HH, BH, LH, AH)
      }(HH, 0, LH ? 1 : 0, AH)
    }
    var wA = LH(40193);
    const ZA = new TextDecoder,
      dA = new TextEncoder,
      aA = new Uint8Array(0),
      sA = [0, 0, 0],
      JA = {
        off: uH.Qd.Off,
        key: uH.Qd.Key,
        touch: uH.Qd.Touch
      };
    class iA {
      constructor(HH) {
        var BH;
        this.options = HH, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new FA, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = kH.o.DEFAULT, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new gA, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.XX = HH => {
          if ((0, YH.h)(HH)) throw HH;
          this.onError(HH)
        }, this.api = HH.api, this.tables = HH.tables, this.onError = null !== (BH = HH.onError) && void 0 !== BH ? BH : HH => {
          console.error("Error in client game callback", HH)
        }, this.renderFrame = new NA(this.api, HH.screenBandY), this.live = new IA(this.api), this.chunks = new EB(this.api.memory, (() => this.api.apiView)), this.items = new fL({
          api: this.api,
          tables: HH.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: HH.beforeOp
        });
        const LH = () => this.stopped() ? null : this.cmd,
          AH = () => this.sessionLive;
        this.entityInfoWatch = new rA({
          cmd: LH,
          onError: this.onError
        }), this.entityInfo = new SA({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: AH
        }), this.particles = new aL({
          cmd: LH,
          isSessionLive: AH,
          onError: this.onError
        }), this.clientApi = new TL({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: HH.tables,
          cmd: LH,
          sendCmd: () => this.sendCmd(),
          isSessionLive: AH,
          beforeWrite: () => {
            var BH;
            if (this.stopped()) return !1;
            const LH = this.generation;
            return !1 !== (null === (BH = HH.beforeWrite) || void 0 === BH ? void 0 : BH.call(HH)) && LH === this.generation
          },
          playerDbId: () => {
            const HH = this.session;
            if (null === HH) throw new Error("No game session has started, so the local player has no DB id");
            return HH.playerDbId
          },
          playSound: HH.playSound,
          preloadSounds: HH.preloadSounds,
          setLocalOptions: HH.setLocalOptions,
          hasPackModel: HH.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new aH({
          api: this.api,
          reportError: BH => {
            var LH;
            this.XX(BH), null === (LH = HH.reportCameraFault) || void 0 === LH || LH.call(HH, BH)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: HH.cameraScreen,
          showFacing: HH.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= bA(this.items, this.tables, (() => this.localPlayerAlive()), this.XX), this.itemSources
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
      clickCodeBlock(HH) {
        const BH = this.sessionLive ? this.sendCmd() : null;
        return null !== BH && (LH = BH, AH = 0, rH = HH[0], SH = HH[1], hH = HH[2], (0, AL.b)(), (0, uH.Ee)(LH, AH, rH, SH, hH));
        var LH, AH, rH, SH, hH
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(HH) {
        const BH = this.liveCmd();
        return null === BH ? (this.pendingZoom = HH, !1) : (this.pendingZoom = null, (0, uH.vg)(BH, 0, HH, 1))
      }
      IK(HH) {
        const BH = this.stopped() ? null : this.cmd;
        return null !== BH && (0, uH.og)(BH, 0, HH ? 1 : 0)
      }
      respawn() {
        const HH = this.sessionLive ? this.sendCmd() : null;
        return null !== HH && (BH = HH, LH = 0, (0, AL.b)(), (0, uH.Sf)(BH, LH));
        var BH, LH
      }
      bindCustomButtonKeys(HH) {
        this.customButtons.set(HH)
      }
      pressCustomButton(HH, BH) {
        const LH = this.sessionLive ? this.sendCmd() : null;
        return null !== LH && DA(LH, HH, BH)
      }
      padMove(HH, BH, LH, AH, rH, SH) {
        const hH = this.liveCmd();
        return null !== hH && (0, uH.of)(hH, 0, HH, BH, LH, AH, rH, SH)
      }
      thirdPersonFor(HH) {
        const BH = this.liveCmd();
        return null !== BH && (0, uH.Bg)(BH, 0, null !== HH && void 0 !== HH ? HH : 1 / 0)
      }
      send(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== AH && rL(AH, LH ? GH.nd : 0, HH, (0, RH.g)(BH))
      }
      socketAttached(HH) {
        this.openSocket = HH, this.socketLeftSinceAttach = !1
      }
      socketDetached(HH) {
        this.openSocket === HH && (this.openSocket = 0)
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
      attach(HH) {
        const BH = () => HH.isStopped;
        this.stopped = BH, this.cmd = HH.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const LH = this.api.apiView;
        this.overflowGen = uH.y.eventOverflowGen(LH, 0), this.resyncOwed = 0 !== uH.y.eventOverflowMask(LH, 0), HH.setGameHost(this), HH.setEventWalker((HH => {
          this.api.walk(HH, this, BH)
        }))
      }
      watchPromptPick(HH) {
        this.promptWatch = HH, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : pA(uH.y.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? uH.Ac.None : uH.y.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : uH.y.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === HH || HH >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, HH, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(HH) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(HH)
      }
      netEvent(HH) {
        "connection" === HH.type ? HH.phase === GH.C.Activated && HH.conn !== this.activeConn && HH.conn > this.closedThrough ? (this.endSession(), this.activeConn = HH.conn, this.endGameGrants(), this.dropGameCamera()) : HH.phase !== GH.C.Left && HH.phase !== GH.C.Closed || HH.conn !== this.activeConn ? HH.phase === GH.C.Resumed && 0 !== this.activeConn && HH.conn > this.closedThrough && (this.activeConn = HH.conn) : this.closeGame() : HH.conn === this.activeConn && 0 !== HH.conn && (HH.kt === lA.q ? this.gunHit(HH.payload) : HH.kt === hA.nc.EditItemCraftingRecipes || HH.kt === lA.R ? this.items.touch() : (this.serverOptions(HH), this.gameMessage(HH)));
        const BH = this.options.onNetEvent;
        BH && this.guard((() => {
          BH(HH)
        }))
      }
      serverOptions(HH) {
        const BH = this.options.serverOptions,
          LH = BH ? this.decoded(tA, HH) : null;
        BH && LH && this.guard((() => {
          BH.applyNewClientOptions(LH)
        }))
      }
      gameMessage(HH) {
        let BH = null;
        try {
          BH = function(HH) {
            if ("message" !== HH.type || HH.kt !== hA.nc.GameCodeMessage || HH.payloadKind !== GH.jc.Msgpack) return null;
            const BH = (0, RH.e)(HH.payload);
            if (null === BH || "object" !== typeof BH || "string" !== typeof BH.messageType) throw new Error("GameCodeMessage without a messageType");
            return BH
          }(HH)
        } catch (LH) {
          this.sessionLive && this.onError(LH)
        }
        if (BH) {
          const {
            messageType: HH,
            data: LH
          } = BH;
          if ((0, fH.f)(HH)) return void this.guard((() => {
            (0, fH.c)(HH, LH)
          }));
          "freeCamPerms" === HH && this.freeCam.setGame(LH) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (BH => {
            BH.onReceivedMessageFromServer(HH, LH)
          }))
        }
      }
      decoded(HH, BH) {
        try {
          return HH(BH)
        } catch (LH) {
          return this.onError(LH), null
        }
      }
      setClientFreeCameraGrant(HH, BH) {
        this.freeCam.setClient(HH, BH), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(HH) {
        this.freeCam.setMovesFly(HH), this.writeFreeCam()
      }
      setBlockHighlight(HH) {
        this.highlight = HH, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const HH = this.liveCmd();
        if (null === HH || !this.highlightOwed) return;
        const BH = this.highlight;
        this.highlightOwed = null === BH ? !(0, uH._e)(HH, 0, sA, sA, 0) : !(0, uH._e)(HH, 0, BH.pos, BH.normal, 1)
      }
      localPlayerBound(HH) {
        var BH, LH;
        if (0 === this.activeConn || this.sessionLive && HH === this.boundId) return;
        const AH = this.sessionLive;
        let rH, SH, hH, tH;
        this.endSession(), AH && this.restartGameCamera();
        try {
          var zH;
          this.session = null;
          const HH = this.options.sessionInfo(this.activeConn);
          if (this.session = HH, !HH) return;
          rH = HH.gameNameWithVariation, SH = null !== (zH = (0, mH.Ob)(rH)) && void 0 !== zH ? zH : void 0, hH = (0, oH.v)(HH.lobbyName), tH = (0, oH.N)(HH.lobbyName)
        } catch (xH) {
          return void this.onError(xH)
        }
        const CH = {
          localPlayerId: String(HH)
        };
        let EH = {},
          XH = [];
        try {
          var GH, YH;
          EH = null !== (GH = null === (YH = this.options.gameFactory((0, mH.Wb)(rH))) || void 0 === YH ? void 0 : YH(tH, hH, SH, CH)) && void 0 !== GH ? GH : {}
        } catch (xH) {
          this.XX(xH)
        }
        try {
          var uH, QH;
          XH = (0, IH.e)(null === (uH = (QH = this.options).defaultPlugins) || void 0 === uH ? void 0 : uH.call(QH, tH, hH, SH, CH), EH.plugins)
        } catch (xH) {
          this.XX(xH)
        }
        const WH = [EH, ...XH];
        this.owners = WH, this.tickers = WH.filter((HH => void 0 !== HH.IX)), this.renderers = WH.filter((HH => void 0 !== HH.onAfterRender)), this.receivers = WH.filter((HH => void 0 !== HH.onReceivedMessageFromServer)), this.writeAltVeto(WH), this.writeHooks(WH), this.writePublicLobby(tH), this.writeLocalDbId(null !== (BH = null === (LH = this.session) || void 0 === LH ? void 0 : LH.playerDbId) && void 0 !== BH ? BH : null), this.boundId = HH, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(WH, (HH => {
          var BH;
          null === (BH = HH.onCreate) || void 0 === BH || BH.call(HH, this.clientApi)
        }));
        const MH = this.generation;
        setTimeout((() => {
          MH === this.generation && !0 === this.tables.getClientOption("creative") && OA(this.tables)
        }), 0)
      }
      chunkSlot(HH, BH, LH, AH, rH, SH) {
        this.chunks.apply(HH, BH, LH, AH, rH, SH)
      }
      entityAdded(HH) {
        var BH;
        this.entityInfo.stale(HH), null === (BH = this.options.replayEntities) || void 0 === BH || BH.entityAdded(HH)
      }
      entityInfoChanged(HH) {
        var BH;
        this.entityInfo.stale(HH), null === (BH = this.options.replayEntities) || void 0 === BH || BH.entityInfoChanged(HH)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const HH = performance.now();
          this.round(this.tickers, yA), (0, WA.c)(performance.now() - HH)
        }
      }
      afterWalk(HH) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const BH = this.options.replayEntities;
        BH && this.guard((() => {
          this.entityInfoWatch.want(AA, BH.wantsWatch), BH.flush(this.entityInfoWatch.on)
        }));
        const LH = this.api.apiView,
          AH = uH.y.frameMs(LH, 0);
        KA.f.frame(AH, uH.y.heading(LH, 0), uH.y.pitch(LH, 0), KA.d[HH]);
        const rH = (0, WA.g)(HH, AH);
        if (null !== rH) {
          const HH = this.renderFrame;
          this.guard((() => {
            (0, CA.e)().turnDamageIndicators(HH.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(rH)
          })), this.round(this.renderers, (BH => {
            BH.onAfterRender(rH, HH)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== rH)
        } catch (hH) {
          this.XX(hH)
        }
        this.showZoom(), this.items.flush(this.XX), this.writePromptWatch(), this.writeCustomButtons();
        const SH = this.ticks;
        this.ticks = 0, (0, WA.e)(SH, HH, rH, this.XX)
      }
      entityRemoved(HH) {
        this.live.despawned(HH), this.entityInfo.removed(HH)
      }
      ackEventOverflow() {
        const HH = this.api.apiView,
          BH = uH.y.eventOverflowGen(HH, 0),
          LH = BH - this.overflowGen >>> 0;
        if (0 === LH && !this.resyncOwed) return;
        this.overflowGen = BH;
        const AH = uH.y.eventOverflowMask(HH, 0),
          rH = this.cmd;
        0 === AH || null === rH || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, uH.Je)(rH, 0, AH);
        const SH = this.options.onEventOverflow;
        0 !== LH && SH && this.guard((() => {
          SH(AH, LH)
        }))
      }
      gameCall(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        if (HH === uH.oc.Director) try {
          return this.scriptedCamera.call(BH, LH, AH, rH, SH, hH)
        } catch (CH) {
          return this.XX(CH), uH.qb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return HH === uH.oc.AltVeto ? uH.m.Allow : 0;
        try {
          return this.callGames(HH, BH, LH, AH, rH, SH, hH, tH)
        } catch (CH) {
          throw (0, YH.h)(CH) && (this.fault = CH), CH
        }
      }
      takeFault() {
        const HH = this.fault;
        return this.fault = void 0, HH
      }
      callGames(HH, BH, LH, AH, rH, SH, hH, tH) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: zH
        } = this.options, CH = String(this.boundId);
        switch (HH) {
          case uH.oc.AltVeto:
          case uH.oc.AltAction: {
            const tH = 0 !== hH,
              [EH, XH, GH] = tH ? [BH, LH, AH] : [void 0, void 0, void 0],
              YH = tH ? zH.nameOfId(rH) : "Air",
              QH = pA(SH);
            if (HH === uH.oc.AltAction) return this.first((HH => {
              var BH;
              return null === (BH = HH.onPlayerAltAction) || void 0 === BH ? void 0 : BH.call(HH, CH, EH, XH, GH, YH, QH)
            })), 0;
            const WH = this.first((HH => {
              var BH;
              return null === (BH = HH.onPlayerAttemptAltAction) || void 0 === BH ? void 0 : BH.call(HH, CH, EH, XH, GH, YH, QH)
            }));
            return "preventAction" === WH ? uH.m.Prevent : "preventPlacement" === WH ? uH.m.PreventPlacement : uH.m.Allow
          }
          case uH.oc.Click: {
            const HH = tH,
              EH = 0 !== (HH & uH.W.Alt),
              XH = 0 !== (HH & uH.W.HasPos),
              GH = XH ? zH.nameOfId(rH) : "Air",
              [YH, QH, WH] = XH ? [BH, LH, AH] : [null, null, null],
              MH = pA(SH),
              xH = 0 !== (HH & uH.W.Up),
              vH = pA(hH);
            if (0 === (HH & uH.W.AttackOnly) && this.first((HH => {
                var BH, LH;
                return xH ? null === (BH = HH.onPlayerClickUp) || void 0 === BH ? void 0 : BH.call(HH, CH, EH, YH, QH, WH, GH, MH) : null === (LH = HH.onPlayerClick) || void 0 === LH ? void 0 : LH.call(HH, CH, EH, YH, QH, WH, GH, MH)
              })), !xH && !EH && null !== vH) {
              const HH = this.clientApi.getPositionView(vH),
                BH = HH ? [HH[0], HH[1], HH[2]] : [0, 0, 0];
              this.first((HH => {
                var LH;
                return null === (LH = HH.onPlayerAttackEntity) || void 0 === LH ? void 0 : LH.call(HH, CH, vH, BH)
              }))
            }
            return 0
          }
          case uH.oc.ChangeBlock: {
            const HH = zH.nameOfId(rH),
              hH = zH.nameOfId(SH);
            return this.first((rH => {
              var SH;
              return null === (SH = rH.onPlayerChangeBlock) || void 0 === SH ? void 0 : SH.call(rH, CH, BH, LH, AH, HH, hH)
            })), 0
          }
          case uH.oc.DropItem: {
            const HH = zH.nameOfId(BH);
            return this.first((BH => {
              var rH;
              return null === (rH = BH.onPlayerDropItem) || void 0 === rH ? void 0 : rH.call(BH, CH, HH, LH, AH)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${HH}`)), 0
        }
      }
      changeBlockFail(HH, BH, LH, AH, rH, SH, hH) {
        const tH = rH === uH.Xc ? null : ZA.decode(this.api.eventBytes(SH, Math.min(rH, hH)));
        this.failures.push({
          sA: [HH, BH, LH],
          JA: AH,
          iA: tH
        })
      }
      changeBlockFailEnd() {
        const HH = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (BH => {
          var LH;
          null === (LH = BH.onChangeBlockFail) || void 0 === LH || LH.call(BH, HH)
        })), this.AX("blockChangeRefused", null), this.AX("EditBoard", {
          pos: null
        }), this.AX("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(HH, BH, LH, AH, rH, SH) {
        HH === uH.Gc.ChestOpened ? this.items.chestOpened(LH, AH, rH) : HH !== uH.Gc.Synced && HH !== uH.Gc.ChestClosed && HH !== uH.Gc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(HH, BH, LH, AH) {
            switch (HH) {
              case uH.Gc.Synced:
                hH.k.AX("syncedInvenFromServer");
                break;
              case uH.Gc.ChestOpened:
              case uH.Gc.ChestClosed:
                hH.k.AX("chestToggleFromServer", HH === uH.Gc.ChestOpened, !0);
                break;
              case uH.Gc.ChestRefreshed:
                hH.k.AX("chestRefreshedFromServer");
                break;
              case uH.Gc.EnchantingTable:
                hH.k.AX("enchantingTable", {
                  ph: AH,
                  position: LH
                });
                break;
              case uH.Gc.HotbarRequest:
                hH.k.AX("setSelectedInventorySlotI", BH, !0);
                break;
              case uH.Gc.Scrolled:
                hH.k.AX("ScrollInventorySlot", BH);
                break;
              case uH.Gc.NumberKey:
                hH.k.AX("numkeyPressed", BH + 1);
                break;
              case uH.Gc.DropRequested:
                hH.k.AX("DropInvenItem", 0 !== BH);
                break;
              default:
                throw new YH.d(`InventoryEvent of no kind: what ${HH}`)
            }
          }(HH, BH, [LH, AH, rH], SH)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(HH, BH, LH, AH) {
        this.AX("shotPlayer", {
          playerId: String(HH),
          damage: BH,
          wasCrit: 0 !== AH,
          distance: LH
        })
      }
      localHurt(HH, BH) {
        this.AX("closeShopOnDamaged", null), this.guard((() => {
          hH.k.AX("damagedByOtherPlayer", {
            DS: null,
            direction: Number.isNaN(BH) ? null : BH,
            xA: HH
          })
        }))
      }
      attackHit(HH, BH, LH, AH, rH) {
        this.guard((() => {
          hH.k.AX("yourAttackHit", {
            aA: AH,
            screenPos: this.renderFrame.projectDirectionToScreenPos([HH, BH, LH]),
            hitSelf: rH
          })
        }))
      }
      physicsType(HH) {
        this.localPhysicsType = HH, this.AX("PlayerPhysicsTypeUpdate", HH)
      }
      vehicleEffect(HH, BH, LH, AH, rH) {
        this.guard((() => {
          HH === GH.Ad.UPDATE ? (0, KH.e)(BH, {
            icon: LH,
            level: AH,
            displayName: null,
            durationMs: rH
          }) : lH.c.remove(BH)
        }))
      }
      zoomChanged(HH) {
        this.zoom = HH, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.AX("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.AX("showBottomMessage", wA.d)
      }
      showZoom() {
        const HH = this.scriptedCamera.holdsView();
        !this.zoomUnshown || HH && this.zoomHeld || (this.zoomUnshown = !1, this.AX("cameraZoomSet", this.zoom)), this.zoomHeld = HH
      }
      gunHit(HH) {
        this.guard((() => {
          const {
            DS: BH,
            wS: LH
          } = (0, fA.d)(lA.q, HH);
          hH.k.AX("damagedByOtherPlayer", {
            DS: BH,
            direction: LH
          })
        }))
      }
      uiEvent(HH, BH, LH, AH, rH, SH, hH, tH) {
        this.guard((() => {
          EA(HH, BH, [LH, AH, rH], SH, this.items, this.options.tables, (() => ZA.decode(this.api.eventBytes(hH, tH))))
        }))
      }
      writeAltVeto(HH) {
        const BH = this.cmd;
        if (!BH) return;
        let LH;
        try {
          LH = function(HH, BH) {
            const LH = new Set;
            let AH = !1;
            for (const rH of HH)
              if (rH.onPlayerAttemptAltAction) {
                if (AH = !0, !rH.altVetoBlocks) return {
                  mode: uH.pe.All,
                  roots: []
                };
                for (const HH of rH.altVetoBlocks) LH.add(BH.getMetaInfo(HH).rootId)
              } return AH ? LH.size > uH.Rc ? {
              mode: uH.pe.All,
              roots: []
            } : {
              mode: uH.pe.Filter,
              roots: [...LH]
            } : {
              mode: uH.pe.Off,
              roots: []
            }
          }(HH, this.options.tables)
        } catch (rH) {
          this.onError(rH), LH = {
            mode: uH.pe.All,
            roots: []
          }
        }
        if (LH.mode === uH.pe.Off && !this.vetoSet) return;
        const AH = new Uint8Array(new Uint32Array(LH.roots).buffer);
        (0, uH.Xf)(BH, 0, LH.mode, LH.roots.length, AH) ? this.vetoSet = LH.mode !== uH.pe.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(HH) {
        const BH = this.cmd;
        if (!BH) return;
        const LH = function(HH) {
          let BH = 0;
          for (const LH of HH) LH.onPlayerAltAction && (BH |= 1 << uH.oc.AltAction), (LH.onPlayerClick || LH.onPlayerClickUp || LH.onPlayerAttackEntity) && (BH |= 1 << uH.oc.Click), LH.onPlayerChangeBlock && (BH |= 1 << uH.oc.ChangeBlock), LH.onPlayerDropItem && (BH |= 1 << uH.oc.DropItem);
          return BH
        }(HH);
        (0 !== LH || this.hooksSet) && ((0, uH.fg)(BH, 0, LH) ? this.hooksSet = 0 !== LH : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const HH = this.cmd;
        HH && !this.stopped() && this.customButtons.write(HH)
      }
      writePromptWatch() {
        const HH = this.cmd,
          BH = this.promptWatch;
        BH !== this.promptWatchSent && HH && !this.stopped() && (0, uH.Dg)(HH, 0, JA[BH]) && (this.promptWatchSent = BH)
      }
      writePublicLobby(HH) {
        const BH = this.cmd;
        BH && HH !== this.writtenPublicLobby && ((0, uH.sg)(BH, 0, HH ? 1 : 0) ? this.writtenPublicLobby = HH : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(HH) {
        const BH = this.cmd;
        BH && ((0, uH.jg)(BH, 0, null === HH ? 0 : 1, null === HH ? aA : dA.encode(HH)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(HH) {
        const BH = this.generation;
        for (const AH of this.owners) {
          if (BH !== this.generation) break;
          try {
            const BH = HH(AH);
            if (void 0 !== BH) return BH
          } catch (LH) {
            this.XX(LH)
          }
        }
      }
      AX(HH, BH) {
        this.guard((() => {
          hH.k.AX(HH, BH)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (HH) {
          this.XX(HH)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (HH) {
          this.XX(HH)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = kH.o.DEFAULT;
        const HH = this.owners;
        let BH;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (AH) {
          BH = AH
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (AH) {
          BH ??= AH
        }
        this.round(HH, Hr, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (AH) {
          BH ??= AH
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (AH) {
          BH ??= AH
        }
        const LH = this.options.onSessionEnd;
        if (LH) try {
          LH()
        } catch (AH) {
          this.onError(AH)
        }
        void 0 !== BH && this.XX(BH)
      }
      round(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = this.generation;
        for (const SH of HH) {
          if (AH !== this.generation) break;
          try {
            BH(SH)
          } catch (rH) {
            LH ? this.onError(rH) : this.XX(rH)
          }
        }
      }
      guard(HH) {
        try {
          HH()
        } catch (BH) {
          this.XX(BH)
        }
      }
    }

    function pA(HH) {
      return HH === uH.$c ? null : String(HH)
    }

    function yA(HH) {
      HH.IX(GH.td)
    }

    function Hr(HH) {
      var BH;
      null === (BH = HH.onClose) || void 0 === BH || BH.call(HH)
    }

    function Br(HH, BH) {
      HH.watch((() => {
        const LH = function(HH) {
          const BH = [],
            LH = Math.min(MA, HH.length);
          for (let rH = 0; rH < LH; rH++) {
            var AH;
            const LH = null === (AH = HH.slot(rH)) || void 0 === AH ? void 0 : AH.typeObj,
              SH = LH ? (0, QA.gunTypeOf)(LH.id) : void 0;
            void 0 !== SH && BH.push(VB[SH])
          }
          return BH
        }(HH);
        LH.length > 0 && (BH.preload(LH.flatMap((HH => qB(HH)))), BH.preload(qB(OB)))
      }))
    }
    var Lr = LH(37326),
      Ar = LH(5335),
      rr = LH(37617),
      Sr = LH(37650);

    function hr(HH) {
      const BH = (0, Lr.countDecodesAs)(new Ar.Howl({
          src: [...(0, rr.v)(HH).src],
          pool: 15,
          preload: !1
        }), "sound"),
        LH = BH.load.bind(BH);
      return BH.load = () => (BH._preload = !0, (0, Sr.i)(HH), LH()), BH
    }

    function tr(HH, BH, LH) {
      const AH = HH.listener;
      if (AH.positionX) zr(AH.positionX, BH, LH, 0), zr(AH.positionY, BH, LH, 1), zr(AH.positionZ, BH, LH, 2), zr(AH.forwardX, BH, LH, 3), zr(AH.forwardY, BH, LH, 4), zr(AH.forwardZ, BH, LH, 5), zr(AH.upX, BH, LH, 6), zr(AH.upY, BH, LH, 7), zr(AH.upZ, BH, LH, 8);
      else {
        let HH = !1;
        for (let AH = 0; AH < 9; AH++) HH ||= BH[AH] !== LH[AH];
        HH && (AH.setPosition(BH[0], BH[1], BH[2]), AH.setOrientation(BH[3], BH[4], BH[5], BH[6], BH[7], BH[8]), LH.set(BH))
      }
    }

    function zr(HH, BH, LH, AH) {
      BH[AH] !== LH[AH] && (HH.value = BH[AH], LH[AH] = BH[AH])
    }
    class Cr {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(HH) {
        this.pose.set(HH);
        const BH = Ar.Howler.ctx;
        return !!BH && (BH !== this.watchedCtx && (this.watchedCtx = BH, this.written.fill(Number.NaN), BH.addEventListener("statechange", (() => {
          "running" === BH.state && tr(BH, this.pose, this.written)
        }))), "running" === BH.state && tr(BH, HH, this.written), !0)
      }
    }
    var Er = LH(37442),
      Xr = LH(40176);
    let Gr = null,
      Yr = null;

    function ur() {
      return null === Gr && (Gr = document.createElement("div"), Gr.className = "WasmCameraLayer", Gr.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(Gr)), Gr
    }

    function Qr() {
      return Yr ??= new Xr.e(new Er.e(ur)), Yr
    }

    function Wr() {
      var HH;
      null === (HH = Yr) || void 0 === HH || HH.clear(), Mr(null)
    }

    function Mr(HH) {
      AH.c.get("scriptedCameraFacing") !== HH && AH.c.set({
        scriptedCameraFacing: HH
      })
    }
    var xr = LH(10030),
      vr = LH(9979),
      Pr = LH(40210),
      Tr = LH(42352),
      Ur = LH(3639);
    const Vr = Object.entries(uH.lc).reduce(((HH, BH) => {
      let [LH, AH] = BH;
      return HH[AH] = LH, HH
    }), []);

    function Or(HH, BH) {
      var LH;
      return 0 !== ((null !== (LH = HH.itemFlags[BH]) && void 0 !== LH ? LH : 0) & uH.Ic.Stackable)
    }
    const br = /^(0|[1-9][0-9]*)$/,
      kr = {
        displayName: (HH, BH) => (0, QA.displayNameOf)(BH),
        description: (HH, BH) => (0, QA.descriptionOf)(BH),
        type: (HH, BH) => (0, QA.itemTypeOf)(BH),
        clipSize: (HH, BH) => (0, QA.clipSizeOf)(BH),
        armourReduction: (HH, BH) => (0, QA.armourReductionOf)(BH),
        scopeType: (HH, BH) => (0, QA.scopeTypeOf)(BH),
        stackable: Or,
        harvestType: (HH, BH) => Vr[HH.blockHarvestTypes[BH]],
        harvestLevel: (HH, BH) => {
          const LH = HH.blockHarvestLevels[BH];
          return LH === uH.Oc ? void 0 : LH
        },
        harvests: (HH, BH) => {
          var LH;
          const AH = null !== (LH = HH.itemHarvests[BH]) && void 0 !== LH ? LH : 0;
          return 0 !== AH ? Vr[AH] : void 0 === (0, QA.harvestsNullLevelOf)(BH) ? void 0 : null
        },
        level: (HH, BH) => {
          var LH, AH;
          const rH = null !== (LH = HH.itemLevels[BH]) && void 0 !== LH ? LH : uH.Oc;
          return rH !== uH.Oc ? rH : null !== (AH = (0, QA.harvestsNullLevelOf)(BH)) && void 0 !== AH ? AH : void 0
        }
      };

    function mr(HH, BH, LH) {
      return Ir(new Uint8Array(Math.floor(HH.length / BH)), HH, BH, LH)
    }

    function or(HH, BH, LH) {
      return Ir(new Uint16Array(Math.floor(HH.length / BH)), HH, BH, LH)
    }

    function Ir(HH, BH, LH, AH) {
      const rH = new DataView(BH.buffer, BH.byteOffset, BH.byteLength);
      for (let SH = 0; SH < HH.length; SH++) HH[SH] = AH(rH, SH * LH);
      return HH
    }
    class fr {
      constructor(HH, BH) {
        this.options = BH, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = HH => {
          const BH = this.idOf(HH);
          if (void 0 === BH) throw new Error(`No item is named ${HH}, an item's root`);
          return BH
        };
        const LH = BH => {
            const LH = BH();
            return new Uint8Array(HH.memory().buffer, HH.scratch(), LH).slice()
          },
          AH = (new TextDecoder).decode(LH((() => HH.queries.itemNames()))).split("\n"),
          rH = LH((() => HH.queries.blockProps())),
          SH = LH((() => HH.queries.itemProps()));
        this.props = {
          blockFlags: mr(rH, uH.G.BYTES, uH.G.flags),
          blockHarvestTypes: mr(rH, uH.G.BYTES, uH.G.harvestType),
          blockHarvestLevels: mr(rH, uH.G.BYTES, uH.G.harvestLevel),
          blockAttachedTops: or(rH, uH.G.BYTES, uH.G.attachedTop),
          itemFlags: mr(SH, uH.Kc.BYTES, uH.Kc.flags),
          itemHarvests: mr(SH, uH.Kc.BYTES, uH.Kc.harvests),
          itemLevels: mr(SH, uH.Kc.BYTES, uH.Kc.level)
        }, (0, Ur.k)(Object.freeze(AH)), (0, Tr.f)()
      }
      idOf(HH) {
        if ("number" === typeof HH) return void 0 === (0, Ur.h)(HH) ? void 0 : HH;
        const BH = (0, Ur.e)(HH);
        return void 0 === BH && br.test(HH) ? void 0 === (0, Ur.h)(+HH) ? void 0 : +HH : BH
      }
      getMetaInfo(HH) {
        if (!HH || HH === xr.e) return xr.f;
        const BH = this.idOf(HH);
        if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
        return this.metaOf(BH)
      }
      blockRootId(HH) {
        return 0 !== HH && void 0 !== (0, Ur.h)(HH) ? this.metaOf(HH).rootId : HH
      }
      metaOf(HH) {
        return this.metas[HH] ??= (0, vr.k)((0, Ur.h)(HH), HH, this.rootIdOf, (0, QA.rootMetaDescOf)(HH))
      }
      getItemId(HH) {
        if (!HH || HH === xr.e) return 0;
        const BH = this.idOf(HH);
        if (void 0 === BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return BH
      }
      getItemName(HH) {
        if (!HH || HH === xr.e) return xr.e;
        const BH = this.idOf(HH);
        if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
        return (0, Ur.h)(BH)
      }
      blockNameToBlockId(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (HH === xr.e) return 0;
        let LH = this.idOf(HH);
        if (void 0 === LH || !this.isBlockId(LH)) {
          const BH = HH.indexOf("|"),
            AH = BH > 0 ? (0, Ur.e)(HH.slice(0, BH)) : void 0;
          LH = void 0 !== AH && this.isBlockId(AH) && (0, QA.rootMetaDescOf)(AH) === HH ? AH : void 0
        }
        if (void 0 !== LH) return LH;
        if (!BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(HH) {
        return HH > 0 && HH < this.props.blockFlags.length
      }
      nameOfId(HH) {
        return 0 !== HH && (0, Ur.h)(HH) || xr.e
      }
      itemType(HH) {
        const BH = HH ? this.idOf(HH) : void 0;
        if (!BH) return null;
        let LH = this.types.get(BH);
        return void 0 === LH && (LH = Object.freeze({
          id: BH,
          name: (0, Ur.h)(BH),
          meta: this.getMetaInfo(BH),
          stackable: Or(this.props, BH),
          type: (0, QA.itemTypeNameOf)(BH),
          clipSize: (0, QA.clipSizeOf)(BH),
          scopeType: (0, QA.scopeTypeOf)(BH),
          showsAimingUi: (0, QA.showsAimingUi)(BH)
        }), this.types.set(BH, LH)), LH
      }
      getItemStat(HH, BH) {
        if (Pr.c.has(BH)) {
          const LH = "minChargeStateToUse" === BH ? this.getMetaInfo(HH).rootName : this.getItemName(HH),
            AH = this.options.get((0, Pr.d)(LH, BH));
          if (null !== AH && void 0 !== AH) return AH
        }
        return this.defaultStat(HH, BH, this.statOf(BH))
      }
      getDisplayName(HH) {
        return this.getItemStat(HH, "displayName")
      }
      getDefaultItemStat(HH, BH) {
        return this.defaultStat(HH, BH, this.statOf(BH))
      }
      statOf(HH) {
        const BH = kr[HH];
        return void 0 === BH && function(HH, BH) {
          throw new Error(`ClientApi.${HH} is not available yet in the wasm client (${BH})`)
        }(`getItemStat("${HH}")`, `a table of the stat: the wasm client answers ${Object.keys(kr).join(", ")}`), BH
      }
      defaultStat(HH, BH, LH) {
        const AH = this.idOf(HH),
          rH = void 0 === AH ? void 0 : LH(this.props, AH);
        return null !== rH && void 0 !== rH || "displayName" !== BH ? rH : this.getItemName(HH)
      }
      getClientOption(HH) {
        return this.options.get(HH)
      }
      getGunStats(HH) {
        return this.getClientOption(`${HH}GunStats`)
      }
      watchClientOption(HH, BH) {
        return this.options.subscribe(HH, BH)
      }
      isSolidBlockId(HH) {
        var BH;
        return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Solid)
      }
      isStackableId(HH) {
        return Or(this.props, HH)
      }
      isFluidBlockId(HH) {
        var BH;
        return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Fluid)
      }
      canPlaceOverBlockId(HH) {
        var BH;
        return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.PlaceOver)
      }
      attachedTopOf(HH) {
        var BH;
        return null !== (BH = this.props.blockAttachedTops[HH]) && void 0 !== BH ? BH : 0
      }
      isDroplessBlockId(HH) {
        return (0, QA.dropsNothing)(HH)
      }
    }

    function lr(HH, BH) {
      const LH = new Map;
      return (AH, rH) => {
        const SH = BH.idOf(AH),
          hH = void 0 === SH ? null : (AH => {
            let rH = LH.get(AH);
            if (void 0 === rH) {
              const SH = HH.queries.salvageRecipe(AH),
                hH = new DataView(HH.memory().buffer, HH.scratch(), SH),
                tH = [];
              for (let HH = 0; HH + uH.de.BYTES <= SH; HH += uH.de.BYTES) tH.push(Object.freeze({
                item: BH.nameOfId(uH.de.item(hH, HH)),
                amt: uH.de.amount(hH, HH)
              }));
              rH = 0 === tH.length ? null : Object.freeze(tH), LH.set(AH, rH)
            }
            return rH
          })(SH);
        if (null === hH || void 0 === rH) return hH;
        const tH = rH <= 0 ? 1 : rH;
        return hH.map((HH => {
          let {
            item: BH,
            amt: LH
          } = HH;
          return {
            item: BH,
            amt: LH * tH
          }
        }))
      }
    }
    var Kr = LH(42092),
      cr = LH(37821),
      er = LH(37807),
      qr = LH(37809),
      gr = LH(37373),
      Nr = LH(42002),
      Rr = LH(54466);
    const jr = -1,
      nr = new Uint8Array(0),
      Fr = new TextEncoder;

    function Dr(HH) {
      if (null === HH) return null;
      const BH = Fr.encode(HH);
      return BH.byteLength < GH.Dc ? BH : BH.subarray(0, GH.Dc - 1)
    }
    class wr {
      constructor(HH) {
        this.deps = HH, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = jr, this.keyframesSettled = !1, this.reloadFrom = jr
      }
      reloadKeyframes() {
        var HH, BH;
        this.keyframesVersion = jr, this.reloadFrom = null !== (HH = null === (BH = this.view()) || void 0 === BH ? void 0 : BH.version) && void 0 !== HH ? HH : jr
      }
      setPlayback(HH) {
        const BH = 1 === this.deps.core.RSH(HH);
        return BH && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = jr, this.reloadFrom = jr), BH
      }
      async open(HH, BH) {
        const LH = await this.deps.replay.open(HH, BH);
        return "opening" === LH && (this.reloadKeyframes(), this.deps.recorder.prefetch()), LH
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(HH)), BH)
      }
      setSpeed(HH) {
        this.deps.replay.setSpeed(HH)
      }
      setCameraMode(HH) {
        this.deps.replay.setCameraMode(Rr.b.indexOf(HH))
      }
      view() {
        var HH;
        const BH = uH.y.replayViewPtr(this.deps.apiView(), 0);
        if (0 === BH) return this.lastView = null, null;
        const LH = new DataView(this.deps.buffer(), BH, uH.Xd.BYTES),
          AH = uH.Xd.version(LH, 0),
          rH = this.lastView;
        if (null !== rH && rH.version === AH) return rH;
        const SH = uH.Xd.markIn(LH, 0),
          hH = {
            version: AH,
            state: uH.Xd.state(LH, 0),
            cameraMode: null !== (HH = Rr.b[uH.Xd.cameraMode(LH, 0)]) && void 0 !== HH ? HH : "recording",
            IX: uH.Xd.IX(LH, 0),
            totalTicks: uH.Xd.totalTicks(LH, 0),
            speed: uH.Xd.speed(LH, 0),
            mark: SH === uH.Td ? null : {
              inTick: SH,
              outTick: uH.Xd.markOut(LH, 0)
            },
            editVersion: uH.Xd.editVersion(LH, 0)
          };
        return this.lastView = hH, hH
      }
      keyframes() {
        const HH = this.view();
        if (null === HH) return [];
        HH.version !== this.reloadFrom && (this.reloadFrom = jr);
        const BH = this.reloadFrom === jr && HH.state !== GH.hd.Cropping && HH.state !== GH.hd.None,
          LH = BH ? HH.editVersion : HH.version;
        if (LH === this.keyframesVersion && BH === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: AH
        } = this.deps, rH = AH.jSH(), SH = AH.DW(), hH = [];
        if (0 !== SH && rH > 0) {
          const HH = new DataView(this.deps.buffer(), SH, rH * GH.qc);
          for (let BH = 0; BH < rH; BH++) {
            const LH = BH * GH.qc,
              AH = BH => HH.getFloat64(LH + BH, !0);
            hH.push({
              IX: HH.getUint32(LH + GH.zc, !0),
              position: [AH(GH.wc), AH(GH.wc + 8), AH(GH.wc + 16)],
              direction: [AH(GH.uc), AH(GH.uc + 8), AH(GH.uc + 16)],
              easing: [AH(GH.vc), AH(GH.vc + 8), AH(GH.vc + 16), AH(GH.vc + 24)]
            })
          }
        }
        return this.keyframesVersion = LH, this.keyframesSettled = BH, this.lastKeyframes = hH, hH
      }
      addKeyframe() {
        const HH = this.deps.apiView(),
          BH = [uH.y.eye(HH, 0, 0), uH.y.eye(HH, 0, 1), uH.y.eye(HH, 0, 2)];
        return this.deps.replay.addKeyframe(BH, function(HH, BH) {
          const LH = Math.cos(BH);
          return [LH * Math.sin(HH), -Math.sin(BH), LH * Math.cos(HH)]
        }(uH.y.heading(HH, 0), uH.y.pitch(HH, 0)))
      }
      setKeyframe(HH) {
        return this.deps.replay.setKeyframe(HH.IX, Float64Array.from([...HH.position, ...HH.direction, ...HH.easing]))
      }
      moveKeyframe(HH, BH) {
        return this.deps.replay.moveKeyframe(HH, BH)
      }
      deleteKeyframes(HH, BH) {
        return this.deps.replay.deleteKeyframes(HH, BH)
      }
      setMark(HH) {
        var BH, LH;
        return this.deps.replay.setMark(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.inTick) && void 0 !== BH ? BH : -1, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.outTick) && void 0 !== LH ? LH : -1)
      }
      crop(HH, BH) {
        const LH = this.deps.replay.crop(HH, BH);
        return LH && this.reloadKeyframes(), LH
      }
      save(HH) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(HH)
      }
      recorderControl(HH) {
        this.deps.recorder.control(HH)
      }
      recorderPrefs(HH, BH) {
        this.deps.recorder.prefs(HH, BH)
      }
      recorderOption(HH, BH) {
        const LH = this.deps.cmd();
        return null !== LH && (0, uH.Mf)(LH, 0, HH, null === BH ? nr : Fr.encode(BH))
      }
      recordFlyingText(HH, BH, LH, AH) {
        const rH = this.deps.cmd(),
          SH = Math.max(0, Math.min(4294967295, Math.round(AH)));
        return null !== rH && (0, uH.If)(rH, 0, BH, LH, SH, Fr.encode(HH))
      }
      recordPlayerKilled(HH, BH, LH, AH) {
        const rH = this.deps.cmd();
        return null !== rH && (0, uH.Of)(rH, 0, HH, BH, Math.max(0, LH), Fr.encode(AH))
      }
      recordKillfeed(HH, BH, LH) {
        var AH, rH;
        const SH = this.deps.cmd(),
          hH = function(HH) {
            const BH = HH.reduce(((HH, BH) => {
                var LH;
                return HH + hA.Db + (null !== (LH = null === BH || void 0 === BH ? void 0 : BH.byteLength) && void 0 !== LH ? LH : 0)
              }), 0),
              LH = new Uint8Array(BH),
              AH = new DataView(LH.buffer);
            let rH = 0;
            for (const hH of HH) {
              var SH;
              AH.setUint16(rH, null !== (SH = null === hH || void 0 === hH ? void 0 : hH.byteLength) && void 0 !== SH ? SH : GH.Dc, !0), rH += hA.Db, null !== hH && (LH.set(hH, rH), rH += hH.byteLength)
            }
            return LH
          }([Dr(HH.name), Dr(HH.colour), Dr(BH.name), Dr(BH.colour), Dr(LH)]);
        return null !== SH && (0, uH.Jf)(SH, 0, null !== (AH = HH.id) && void 0 !== AH ? AH : uH.bd, null !== (rH = BH.id) && void 0 !== rH ? rH : uH.bd, hH)
      }
      recorderSession(HH, BH) {
        this.deps.recorder.session({
          session: BH,
          lobbyType: HH.lobbyType,
          game: HH.gameNameWithVariation,
          lobby: HH.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.nSH()
      }
      filePartDone(HH, BH) {
        this.deps.recorder.filePartDone(HH, BH)
      }
      fileDone(HH) {
        this.deps.recorder.fileDone(HH)
      }
    }
    const Zr = -2147483648;
    class dr {
      constructor(HH) {
        var BH;
        this.deps = HH, this.state = uA.c, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (BH = HH.now) && void 0 !== BH ? BH : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var HH, BH, LH;
        return null === (HH = null === (BH = (LH = this.deps).live) || void 0 === BH ? void 0 : BH.call(LH)) || void 0 === HH || HH
      }
      activated(HH) {
        var BH, LH;
        this.live && (this.viewerShown(!0 === (null === (BH = (LH = this.deps).viewerOpen) || void 0 === BH ? void 0 : BH.call(LH))), this.deps.client.recorderSession(HH, (0, Rr.d)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var HH, BH;
        this.live && (this.state.recording || !0 !== (null === (HH = (BH = this.deps).viewerOpen) || void 0 === HH ? void 0 : HH.call(BH))) ? this.deps.client.recorderControl(GH.Sc.ToggleRecording) : this.deps.notify(qr.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(GH.Sc.SaveClip) : this.deps.notify(qr.e.clippingNotOn)
      }
      viewerShown(HH) {
        this.live && this.deps.client.recorderControl(HH ? GH.Sc.ViewerOpened : GH.Sc.ViewerClosed)
      }
      setPrefs(HH, BH) {
        this.live && this.deps.client.recorderPrefs(HH, BH)
      }
      setOption(HH, BH) {
        this.live && this.deps.client.recorderOption(HH, BH)
      }
      recordFlyingText(HH, BH, LH, AH) {
        this.live && this.deps.client.recordFlyingText(HH, BH, LH, AH)
      }
      recordPlayerKilled(HH, BH, LH, AH) {
        this.live && this.deps.client.recordPlayerKilled(HH, BH, LH, AH)
      }
      recordKillfeed(HH, BH, LH) {
        this.live && this.deps.client.recordKillfeed(HH, BH, LH)
      }
      IX() {
        let HH = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, HH = {
            ...HH,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const BH = Math.floor((this.now() - this.recordingSince) / 1e3);
          BH !== HH.seconds && (HH = {
            ...HH,
            seconds: BH
          })
        }
        this.set(HH)
      }
      onEvent(HH) {
        var BH, LH;
        const {
          notify: AH
        } = this.deps, rH = qr.e;
        switch (HH.what) {
          case GH.Qc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), AH(rH.recordingStarted);
            break;
          case GH.Qc.RecordingStopped:
            this.stopRecording(), AH(rH.recordingStopped), this.saveState(GH.cd.Recording, "saving");
            break;
          case GH.Qc.RecordingDiscarded:
            this.stopRecording(), AH(rH.recordingDiscarded);
            break;
          case GH.Qc.RecordingTurnedOff:
            this.stopRecording(), AH(rH.recordingTurnedOff);
            break;
          case GH.Qc.LimitReached:
            AH(rH.limitReached);
            break;
          case GH.Qc.ClipSaved:
            this.saveState(GH.cd.Clip, "saving");
            break;
          case GH.Qc.ClipEmpty:
            AH(rH.clipEmpty);
            break;
          case GH.Qc.ClippingNotOn:
            AH(rH.clippingNotOn);
            break;
          case GH.Qc.Disallowed:
            AH(rH.disallowed);
            break;
          case GH.Qc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case GH.Qc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case GH.Qc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case GH.Qc.SaveBusy:
            null === (BH = (LH = this.deps).onSaveState) || void 0 === BH || BH.call(LH, HH.kind, "busy"), AH(rH.saveBusy);
            break;
          case GH.Qc.CloseViewerFirst:
            AH(rH.closeViewerFirst)
        }
      }
      fileReady(HH, BH) {
        this.deps.download(BH), this.saveState(HH, "done"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipSaved : qr.e.recordingSaved)
      }
      failed(HH) {
        this.saveState(HH, "failed"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipFailed : qr.e.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(uA.c)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(HH, BH) {
        var LH, AH;
        null === (LH = (AH = this.deps).onSaveState) || void 0 === LH || LH.call(AH, HH, BH)
      }
      set(HH) {
        HH !== this.state && (this.state = HH, this.deps.onState(HH))
      }
    }
    const ar = new TextDecoder;

    function sr(HH, BH, LH, AH) {
      const rH = [];
      for (let SH = 0; SH < AH; SH++) {
        if (BH + hA.Db > LH) return null;
        const AH = HH.getUint16(BH, !0);
        if (BH += hA.Db, AH !== GH.Dc) {
          if (BH + AH > LH) return null;
          rH.push(ar.decode(new Uint8Array(HH.buffer, HH.byteOffset + BH, AH))), BH += AH
        } else rH.push(null)
      }
      return BH === LH ? rH : null
    }

    function Jr(HH, BH) {
      let LH = new DataView(new ArrayBuffer(0)),
        AH = !0;
      const rH = {
        replayFailed: (BH, LH, AH) => {
          HH.replayFailed({
            reason: BH,
            code: LH,
            version: AH
          })
        },
        replayOption: (BH, rH, SH, hH) => {
          const tH = function(HH, BH, LH, AH) {
            switch (BH) {
              case GH.ed.Cleared:
                return 0 === AH ? null : void 0;
              case GH.ed.Text:
                return ar.decode(new Uint8Array(HH.buffer, HH.byteOffset + LH, AH));
              case GH.ed.Int:
                return AH === Int32Array.BYTES_PER_ELEMENT ? HH.getInt32(LH, !0) : void 0;
              case GH.ed.Double:
                return AH === Float64Array.BYTES_PER_ELEMENT ? HH.getFloat64(LH, !0) : void 0;
              default:
                return
            }
          }(LH, rH, SH, hH);
          void 0 !== tH ? HH.replayOption({
            key: BH,
            value: tH
          }) : AH = !1
        },
        replayUiEvent: (BH, rH, SH, hH, tH, zH) => {
          const CH = function(HH, BH, LH, AH, rH, SH, hH) {
            const tH = SH + hH;
            switch (BH) {
              case GH.gd.FlyingText: {
                const hH = sr(HH, SH, tH, 1);
                return null !== hH && null !== hH[0] ? {
                  what: BH,
                  ar: LH,
                  dr: AH,
                  angle: rH,
                  contentJson: hH[0]
                } : null
              }
              case GH.gd.PlayerKilled: {
                const AH = sr(HH, SH, tH, 3);
                return AH ? {
                  what: BH,
                  killstreak: LH,
                  dead: AH[0],
                  killer: AH[1],
                  withItem: AH[2]
                } : null
              }
              case GH.gd.Killfeed: {
                const LH = sr(HH, SH, tH, 7);
                return LH ? {
                  what: BH,
                  killerId: LH[0],
                  killerName: LH[1],
                  killerColour: LH[2],
                  victimId: LH[3],
                  victimName: LH[4],
                  victimColour: LH[5],
                  withItem: LH[6]
                } : null
              }
              default:
                return null
            }
          }(LH, BH, rH, SH, hH, tH, zH);
          null !== CH ? HH.replayUiEvent(CH) : AH = !1
        },
        replayFilePart: (LH, rH, SH, hH) => {
          const tH = BH();
          SH + hH > tH.byteLength ? AH = !1 : HH.filePart(LH, rH, new Uint8Array(tH, SH, hH).slice())
        },
        replayFileReady: (BH, LH, AH, rH) => {
          HH.fileReady({
            save: BH,
            kind: LH,
            parts: AH,
            bytes: rH
          })
        },
        recorderEvent: (BH, LH, AH) => {
          HH.recorderEvent({
            what: BH,
            kind: LH,
            save: AH
          })
        },
        replayOpened: (BH, AH, rH) => {
          HH.replayOpened(ar.decode(new Uint8Array(LH.buffer, LH.byteOffset + AH, rH)))
        }
      };
      return (HH, BH, SH, hH) => !(HH < GH.X.ReplayFailed || HH > GH.X.RecorderEvent) && (LH = BH, AH = !0, (0, uH.we)(HH, BH, SH, hH, rH) && AH)
    }

    function ir(HH) {
      let BH = null;
      const LH = Jr(HH, (() => {
        if (null === BH) throw new Error("a recorder event read outside recorderEventReader's call");
        return BH.buffer
      }));
      return (HH, AH) => {
        BH = AH;
        try {
          ! function(HH, BH) {
            const LH = HH.slice(),
              AH = new DataView(LH.buffer);
            for (let rH = 0; rH < LH.byteLength;) {
              if (rH + GH.U > LH.byteLength) throw new Error(`the recorder module's events end mid-head at ${rH}`);
              const HH = AH.getUint32(rH, !0),
                SH = 65535 & HH,
                hH = HH >>> 16,
                tH = rH + GH.U;
              if (tH + hH > LH.byteLength || !BH(SH, AH, tH, hH)) throw new Error(`the recorder module wrote a malformed event ${SH} (${hH} bytes) at ${rH}`);
              rH = tH + (0, GH.te)(hH)
            }
          }(HH, LH)
        } finally {
          BH = null
        }
      }
    }
    class pr {
      constructor(HH, BH) {
        this.acks = HH, this.handlers = BH, this.parts = new Map
      }
      onPart(HH, BH, LH) {
        let AH = this.parts.get(HH);
        AH || (AH = [], this.parts.set(HH, AH)), AH[BH] = LH, this.acks.filePartDone(HH, BH)
      }
      onReady(HH) {
        var BH;
        const LH = null !== (BH = this.parts.get(HH.save)) && void 0 !== BH ? BH : [];
        this.parts.delete(HH.save);
        const AH = function(HH, BH, LH) {
          if (HH.length !== BH) return null;
          let AH = 0;
          for (let hH = 0; hH < BH; hH++) {
            if (void 0 === HH[hH]) return null;
            AH += HH[hH].byteLength
          }
          if (AH !== LH) return null;
          if (1 === BH) return HH[0];
          const rH = new Uint8Array(LH);
          let SH = 0;
          for (const hH of HH) rH.set(hH, SH), SH += hH.byteLength;
          return rH
        }(LH, HH.parts, HH.bytes);
        this.acks.fileDone(HH.save), null === AH ? this.handlers.fileIncomplete(HH.save, HH.kind) : this.handlers.fileReady(HH.save, HH.kind, AH)
      }
      onDiscarded(HH) {
        this.parts.delete(HH)
      }
    }

    function yr() {
      return LH.e(72).then((() => LH(64081)))
    }
    class HS {
      constructor(HH) {
        this.deps = HH, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: BH
        } = HH;
        this.recorder = new dr({
          client: BH,
          live: () => {
            var HH;
            return !0 !== (null === (HH = this.viewer) || void 0 === HH ? void 0 : HH.inPlayback)
          },
          viewerOpen: HH.viewerOpen,
          notify: HH.notify,
          download: BH => {
            var LH;
            null === (LH = HH.download) || void 0 === LH || LH.call(HH, BH)
          },
          onState: HH.onRecorderState,
          onSaveState: HH.onSaveState
        }), this.parts = new pr(BH, {
          fileReady: (HH, BH, LH) => {
            var AH;
            BH === GH.cd.Edited ? null === (AH = this.viewer) || void 0 === AH || AH.saveDone(LH) : this.recorder.fileReady(BH, LH)
          },
          fileIncomplete: (HH, BH) => {
            this.saveFailed(BH)
          }
        });
        const LH = {
          replayFailed: HH => {
            var BH;
            null === (BH = this.viewer) || void 0 === BH || BH.onFailed(HH)
          },
          replayOption: BH => {
            var LH;
            null === (LH = HH.onReplayOption) || void 0 === LH || LH.call(HH, BH)
          },
          replayUiEvent: BH => {
            var LH;
            null === (LH = HH.onReplayUiEvent) || void 0 === LH || LH.call(HH, BH)
          },
          filePart: (HH, BH, LH) => {
            this.parts.onPart(HH, BH, LH)
          },
          fileReady: HH => {
            this.parts.onReady(HH)
          },
          replayOpened: BH => {
            var LH;
            null === (LH = HH.onReplayOpened) || void 0 === LH || LH.call(HH, BH)
          },
          recorderEvent: HH => {
            var BH;
            switch (HH.what) {
              case GH.Qc.FileDiscarded:
                this.parts.onDiscarded(HH.save);
                break;
              case GH.Qc.SaveFailed:
                this.saveFailed(HH.kind);
                break;
              case GH.Qc.SaveBusy:
                if (null !== (BH = this.viewer) && void 0 !== BH && BH.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(HH);
                break;
              default:
                this.recorder.onEvent(HH)
            }
          }
        };
        this.sink = function(HH, BH) {
          return {
            onReplayEvent: Jr(HH, BH)
          }
        }(LH, HH.buffer), this.recorderEvents = ir(LH)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var HH;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (HH = this.deps.loadViewer) && void 0 !== HH ? HH : yr)().catch((HH => {
          throw this.viewerChunk = null, HH
        })), this.viewerChunk.then((HH => (this.viewer ??= new HH.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var HH, BH;
            null === (HH = (BH = this.deps).onViewerChange) || void 0 === HH || HH.call(BH)
          }
        }), this.viewer))))
      }
      activated(HH) {
        this.recorder.activated(HH)
      }
      afterFrame(HH) {
        try {
          HH > 0 && this.recorder.IX()
        } finally {
          var BH;
          null === (BH = this.viewer) || void 0 === BH || BH.afterFrame()
        }
      }
      end() {
        var HH;
        null === (HH = this.viewer) || void 0 === HH || HH.end()
      }
      saveFailed(HH) {
        var BH;
        HH === GH.cd.Edited ? null === (BH = this.viewer) || void 0 === BH || BH.saveFailed(!1) : this.recorder.failed(HH)
      }
    }
    var BS = LH(41940),
      LS = LH(41954),
      AS = LH(5275),
      rS = LH(42240);
    class SS {
      constructor(HH) {
        this.deps = HH, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(HH, BH) {
        if (!this.deps.live() || 0 === HH && 0 === BH) return;
        const LH = (0, jH.u)(0, performance.now()),
          AH = this.deps.dragScale();
        (0, rS.h)((() => {
          (0, jH.A)(GH.tb.MouseDown, 0, 0, 0, LH), (0, jH.A)(GH.tb.MouseMove, 0, HH * AH, BH * AH, 0), (0, jH.A)(GH.tb.MouseUp, 0, 0, 0, LH)
        }))
      }
      move(HH) {
        var BH, LH;
        this.analogue[0] = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.x) && void 0 !== BH ? BH : 0, this.analogue[1] = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.y) && void 0 !== LH ? LH : 0, this.send()
      }
      holdVertical(HH, BH) {
        const LH = "freeCamUp" === HH ? uH.ec.Up : uH.ec.Down;
        this.keys = BH ? this.keys | LH : this.keys & ~LH, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const HH = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== HH && !(0, uH.Qe)(HH, 0, this.analogue, this.keys)
      }
    }
    var hS = LH(3950),
      tS = LH(725),
      zS = LH(257),
      CS = LH(81),
      ES = LH(34908),
      XS = LH(703),
      GS = LH(37467);

    function YS() {
      const HH = AH.c.get("clientEscMenuOptions"),
        BH = (0, tS.q)(HH);
      return {
        mouse: (0, CS.isMobile)() ? BH : HH.mouseSensitivity,
        touch: BH,
        fovPercent: HH.cameraFOV
      }
    }

    function uS() {
      const HH = AH.c.get("clientEscMenuOptions"),
        BH = AH.c.get("isTouchScreen") ? (0, tS.q)(HH) : HH.mouseSensitivity,
        LH = YS().mouse;
      return LH > 0 ? BH / LH : 1
    }

    function QS(HH) {
      const BH = () => {
        HH.setSoundPrefs(AH.c.get("soundVolume"), AH.c.get("soundOnFromAd"))
      };
      let LH = null;
      const rH = () => {
        const {
          showFog: BH,
          enableLighting: rH,
          fogChunkDistance: SH,
          chunkFadeIn: hH
        } = AH.c.get("clientEscMenuOptions"), tH = {
          showFog: BH,
          lighting: rH,
          fogChunks: SH,
          chunkFade: hH,
          cellLight: (0, hS.n)("cellLight") ? (0, hS.n)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        LH && (0, GH.ae)(LH) === (0, GH.ae)(tH) && LH.fogChunks === SH || (LH = tH, HH.setEnvPrefs(LH))
      };
      let SH = null;
      const tH = () => {
        const BH = function() {
          const HH = AH.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: AH.c.get("areNametagsHidden"),
            crouchToggle: HH.crouchIsToggle,
            bhopDisabled: HH.disableBunnyHopping,
            disableBobbing: HH.disableBobbing,
            ezTowering: HH.ezTowering ? (0, zS.i)() : null,
            ezBridging: HH.ezBridging,
            showChunkBorders: HH.showChunkBorders,
            touchWalk: !(0, GS.g)(),
            edgeGuard: HH.touchEdgeGuard,
            edgeGuardLong: (0, XS.b)(),
            nametagCutDistance: (0, ES.i)()
          }
        }();
        (0, mH.ne)(SH, BH) || (SH = BH, HH.setUiPrefs(BH))
      };
      let zH = null;
      const CH = () => {
        const BH = YS();
        (0, mH.ne)(zH, BH) || (zH = BH, HH.setLookPrefs(BH))
      };
      BH(), rH(), tH(), CH();
      const EH = [(0, hH.m)("appManagerUpdated|soundVolume", BH), (0, hH.m)("appManagerUpdated|soundOnFromAd", BH), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", (() => {
        rH(), tH(), CH()
      })), (0, hH.m)(GS.d, tH), (0, hH.m)("appManagerUpdated|enabledDebugFeatures", rH), (0, hH.m)("appManagerUpdated|areNametagsHidden", tH), (0, hH.m)("appManagerUpdated|showDistantNametags", tH)];
      return () => {
        for (const HH of EH) HH()
      }
    }
    var WS = LH(42216),
      MS = LH(42222);
    var xS = (0, MS.c)("lend"),
      vS = (0, MS.c)("starting"),
      PS = (0, MS.c)("generation"),
      TS = (0, MS.c)("end");
    class US {
      constructor(HH) {
        this.deps = HH, Object.defineProperty(this, TS, {
          value: VS
        }), Object.defineProperty(this, xS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, PS, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, WS.e)(this, xS)[xS] || (0, WS.e)(this, vS)[vS]
      }
      async start(HH) {
        if (this.active) return "busy";
        const BH = (0, WS.e)(this, PS)[PS];
        (0, WS.e)(this, vS)[vS] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, WS.e)(this, vS)[vS] = !1
        }
        if (BH !== (0, WS.e)(this, PS)[PS]) return "refused";
        const LH = this.deps.beginSave();
        if (!LH) return "refused";
        const AH = Number(BigInt.asUintN(32, HH)),
          rH = Number(BigInt.asUintN(32, HH >> 32n));
        let SH = "refused";
        return this.deps.recorderCall(((HH, BH) => {
          const hH = LH.editState,
            tH = HH.stage(hH.length);
          0 !== tH ? (new Uint8Array(BH.buffer, tH, hH.length).set(hH), HH.FSH(LH.headLen, AH, rH) && (SH = "sealing")) : SH = "tooLarge"
        }), !0), "sealing" !== SH ? (LH.end(), SH) : ((0, WS.e)(this, xS)[xS] = LH, "sealing")
      }
      beforeRecorderStep() {
        const HH = (0, WS.e)(this, xS)[xS];
        if (!HH) return null;
        let BH = -1,
          LH = 0;
        if (!this.deps.recorderCall((HH => {
            BH = HH.DSH(), BH > 0 && (LH = HH.wSH())
          }))) return (0, WS.e)(this, TS)[TS](HH, "stopped");
        if (BH < 0) return (0, WS.e)(this, TS)[TS](HH, "read");
        if (0 === BH) return null;
        const AH = HH.head(LH, BH);
        let rH = !1;
        if (AH && this.deps.recorderCall(((HH, LH) => {
            const SH = HH.stage(BH);
            0 !== SH && (new Uint8Array(LH.buffer, SH, BH).set(AH), rH = !0)
          }), !0), rH) return null;
        const SH = HH.givenUp();
        this.deps.recorderCall((HH => {
          HH.ZSH()
        }));
        const hH = (0, WS.e)(this, TS)[TS](HH, SH ? "givenUp" : "stopped");
        return SH && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), hH
      }
      stop() {
        (0, WS.e)(this, PS)[PS]++;
        const HH = (0, WS.e)(this, xS)[xS];
        HH && (this.deps.recorderCall((HH => {
          HH.ZSH()
        })), (0, WS.e)(this, TS)[TS](HH, "stopped"))
      }
    }

    function VS(HH, BH) {
      return (0, WS.e)(this, xS)[xS] = null, HH.end(), BH
    }

    function OS(HH, BH) {
      const LH = new Uint8Array(4),
        AH = new DataView(LH.buffer);
      return AH.setUint8(0, HH ? 1 : 0), AH.setUint16(2, Math.max(0, Math.min(65535, Math.round(BH))), !0), LH
    }

    function bS(HH, BH) {
      return HH > function(HH) {
        return 16777216 + 314572.8 * Math.max(0, HH)
      }(BH) + 33554432
    }
    let kS = null;

    function mS(HH) {
      return kS ??= async function(HH) {
        const BH = HH.loadInFlight();
        BH && await BH.catch((() => {}));
        if (HH.trapped()) return "trapped";
        if (HH.busy() || !bS(HH.memoryBytes(), HH.clipSeconds())) return "hX";
        HH.unload();
        let LH = !1;
        try {
          LH = await HH.load()
        } catch {
          LH = !1
        }
        if (!LH) return HH.trapped() ? "trapped" : HH.Mu() ? "Mu" : "failed";
        return "recycled"
      }(HH).finally((() => {
        kS = null
      })), kS
    }
    const oS = "Replay recording couldn't load, so try again.",
      IS = "Replay recording stopped working, so reload the page to record replays again.",
      fS = new Set([GH.Sc.ToggleRecording, GH.Sc.SaveClip]);
    var lS = (0, MS.c)("bindings"),
      KS = (0, MS.c)("module"),
      cS = (0, MS.c)("memory"),
      eS = (0, MS.c)("trapped"),
      qS = (0, MS.c)("Mu"),
      gS = (0, MS.c)("recycleDue"),
      NS = (0, MS.c)("loading"),
      RS = (0, MS.c)("generation"),
      jS = (0, MS.c)("viewDrawn"),
      nS = (0, MS.c)("clip"),
      FS = (0, MS.c)("session"),
      DS = (0, MS.c)("control"),
      wS = (0, MS.c)("deferred"),
      ZS = (0, MS.c)("coreU8"),
      dS = (0, MS.c)("coreU32"),
      aS = (0, MS.c)("moduleU8"),
      sS = (0, MS.c)("edited"),
      JS = (0, MS.c)("sendSession"),
      iS = (0, MS.c)("checkNotInEvents"),
      pS = (0, MS.c)("clipping"),
      yS = (0, MS.c)("busy"),
      Hh = (0, MS.c)("use"),
      Bh = (0, MS.c)("ensureLoaded"),
      Lh = (0, MS.c)("loadOnce"),
      Ah = (0, MS.c)("recycleAfterStep"),
      rh = (0, MS.c)("settleRecycle"),
      Sh = (0, MS.c)("load"),
      hh = (0, MS.c)("attach"),
      th = (0, MS.c)("resendHeld"),
      zh = (0, MS.c)("recycle"),
      Ch = (0, MS.c)("send"),
      Eh = (0, MS.c)("unload"),
      Xh = (0, MS.c)("dropModule"),
      Gh = (0, MS.c)("coreBytes"),
      Yh = (0, MS.c)("coreWords"),
      uh = (0, MS.c)("moduleBytes"),
      Qh = (0, MS.c)("loadFailed"),
      Wh = (0, MS.c)("call"),
      Mh = (0, MS.c)("guard"),
      xh = (0, MS.c)("trapOn");
    class vh {
      constructor(HH) {
        this.deps = HH, Object.defineProperty(this, xh, {
          value: Dh
        }), Object.defineProperty(this, Mh, {
          value: Fh
        }), Object.defineProperty(this, Wh, {
          value: nh
        }), Object.defineProperty(this, Qh, {
          value: jh
        }), Object.defineProperty(this, uh, {
          value: Rh
        }), Object.defineProperty(this, Yh, {
          value: Nh
        }), Object.defineProperty(this, Gh, {
          value: gh
        }), Object.defineProperty(this, Xh, {
          value: qh
        }), Object.defineProperty(this, Eh, {
          value: eh
        }), Object.defineProperty(this, Ch, {
          value: ch
        }), Object.defineProperty(this, zh, {
          value: Kh
        }), Object.defineProperty(this, th, {
          value: lh
        }), Object.defineProperty(this, hh, {
          value: fh
        }), Object.defineProperty(this, Sh, {
          value: Ih
        }), Object.defineProperty(this, rh, {
          value: oh
        }), Object.defineProperty(this, Ah, {
          value: mh
        }), Object.defineProperty(this, Lh, {
          value: kh
        }), Object.defineProperty(this, Bh, {
          value: bh
        }), Object.defineProperty(this, Hh, {
          value: Oh
        }), Object.defineProperty(this, yS, {
          value: Vh
        }), Object.defineProperty(this, pS, {
          value: Uh
        }), Object.defineProperty(this, iS, {
          value: Th
        }), Object.defineProperty(this, JS, {
          value: Ph
        }), Object.defineProperty(this, lS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, qS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, gS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, RS, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, nS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, FS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sS, {
          writable: !0,
          value: void 0
        }), (0, WS.e)(this, sS)[sS] = new US({
          ensureLoaded: () => (0, WS.e)(this, Bh)[Bh](),
          recorderCall: (HH, BH) => {
            BH && (0, WS.e)(this, iS)[iS]("an edited save's stage");
            const LH = (0, WS.e)(this, Wh)[Wh](((BH, LH) => (HH(BH, LH), !0)));
            return null !== LH && void 0 !== LH && LH
          },
          beginSave: HH.beginSave,
          givenUp: HH.givenUp
        })
      }
      get active() {
        return null !== (0, WS.e)(this, KS)[KS]
      }
      get trapped() {
        return (0, WS.e)(this, eS)[eS]
      }
      get loading() {
        return null !== (0, WS.e)(this, NS)[NS]
      }
      prefetch() {
        (0, WS.e)(this, qS)[qS] || (0, WS.e)(this, eS)[eS] || (0, WS.e)(this, KS)[KS] || (0, WS.e)(this, NS)[NS] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, WS.e)(this, jS)[jS] = !0, (0, WS.e)(this, pS)[pS]() && (0, WS.e)(this, Hh)[Hh]()
      }
      prefs(HH, BH) {
        (0, WS.e)(this, nS)[nS] = {
          on: HH,
          seconds: BH
        }, (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS(HH, BH)), HH && (0, WS.e)(this, jS)[jS] && (0, WS.e)(this, Hh)[Hh]()
      }
      control(HH) {
        const BH = function(HH) {
          return new Uint8Array([HH, 0, 0, 0])
        }(HH);
        if (fS.has(HH)) {
          if (!(0, WS.e)(this, eS)[eS]) return (0, WS.e)(this, KS)[KS] ? void(0, WS.e)(this, Ch)[Ch](GH.Mc.Control, BH) : ((0, WS.e)(this, DS)[DS] = BH, void(0, WS.e)(this, Hh)[Hh]());
          this.deps.failed(IS)
        } else(0, WS.e)(this, qS)[qS] || this.deps.coreCommand(GH.Mc.Control, BH)
      }
      session(HH) {
        (0, WS.e)(this, FS)[FS] = HH, (0, WS.e)(this, JS)[JS](HH)
      }
      filePartDone(HH, BH) {
        (0, WS.e)(this, Ch)[Ch](GH.Mc.FilePartDone, function(HH, BH) {
          const LH = new Uint8Array(8),
            AH = new DataView(LH.buffer);
          return AH.setUint32(0, HH, !0), AH.setUint32(4, BH, !0), LH
        }(HH, BH))
      }
      fileDone(HH) {
        return (0, WS.e)(this, Ch)[Ch](GH.Mc.FileDone, function(HH) {
          const BH = new Uint8Array(4);
          return new DataView(BH.buffer).setUint32(0, HH, !0), BH
        }(HH)), (0, WS.e)(this, Ah)[Ah]()
      }
      saveEdited(HH) {
        return (0, WS.e)(this, iS)[iS]("saveEdited"), (0, WS.e)(this, sS)[sS].start(HH)
      }
      afterFrame() {
        if (!(0, WS.e)(this, KS)[KS]) return;
        "read" === (0, WS.e)(this, sS)[sS].beforeRecorderStep() && (0, WS.e)(this, Ah)[Ah]();
        const HH = (0, WS.e)(this, gS)[gS];
        (0, WS.e)(this, gS)[gS] = null;
        const BH = (0, WS.e)(this, KS)[KS],
          LH = (0, WS.e)(this, cS)[cS];
        if (!BH || !LH) return void(null === HH || void 0 === HH || HH.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX"));
        const {
          core: AH
        } = this.deps, rH = AH.sSH(2);
        let SH, hH, tH, zH, CH = 0,
          EH = 0;
        if (0 !== rH) {
          var XH, GH;
          const HH = (0, WS.e)(this, Yh)[Yh]();
          CH = null !== (XH = HH[rH >>> 2]) && void 0 !== XH ? XH : 0, EH = null !== (GH = HH[1 + (rH >>> 2)]) && void 0 !== GH ? GH : 0
        }
        try {
          if (EH > 0) {
            const HH = BH.feed(EH);
            0 !== HH && (0, WS.e)(this, uh)[uh](LH).set((0, WS.e)(this, Gh)[Gh]().subarray(CH, CH + EH), HH)
          }
          SH = BH.step(), hH = BH.JSH(), tH = BH.iSH(), zH = BH.pSH()
        } catch (YH) {
          if (!(0, WS.e)(this, xh)[xh](YH)) throw null === HH || void 0 === HH || HH.resolve("hX"), YH;
          return void(null === HH || void 0 === HH || HH.resolve("trapped"))
        }
        if (SH > 0) {
          const HH = AH.ySH(2, SH);
          0 !== HH && (0, WS.e)(this, Gh)[Gh]().set((0, WS.e)(this, uh)[uh](LH).subarray(hH, hH + SH), HH)
        }
        if (tH > 0) {
          (0, WS.e)(this, wS)[wS] = [];
          try {
            this.deps.events(new Uint8Array(LH.buffer, zH, tH), LH)
          } catch (YH) {
            throw null === HH || void 0 === HH || HH.resolve("hX"), YH
          } finally {
            const HH = (0, WS.e)(this, wS)[wS];
            (0, WS.e)(this, wS)[wS] = null;
            for (const [BH, LH] of HH)(0, WS.e)(this, Ch)[Ch](BH, LH)
          }
        }
        if (!(0, WS.e)(this, pS)[pS]() && !(0, WS.e)(this, yS)[yS]()) return (0, WS.e)(this, Eh)[Eh](), void(null === HH || void 0 === HH || HH.resolve("hX"));
        null === HH || void 0 === HH || HH.resolve((0, WS.e)(this, zh)[zh]())
      }
      dispose() {
        (0, WS.e)(this, qS)[qS] = !0, (0, WS.e)(this, Eh)[Eh]()
      }
    }

    function Ph(HH) {
      (0, WS.e)(this, Ch)[Ch](GH.Mc.Session, function(HH) {
        const BH = new TextEncoder,
          LH = BH.encode(HH.game).subarray(0, 65535),
          AH = BH.encode(HH.lobby).subarray(0, 65535),
          rH = new Uint8Array(22 + LH.length + 2 + AH.length),
          SH = new DataView(rH.buffer);
        SH.setFloat64(0, HH.unixMs, !0), SH.setBigUint64(8, BigInt.asUintN(64, HH.session), !0), SH.setUint8(16, HH.lobbyType);
        let hH = 20;
        for (const tH of [LH, AH]) SH.setUint16(hH, tH.length, !0), rH.set(tH, hH + 2), hH += 2 + tH.length;
        return rH
      }({
        ...HH,
        unixMs: this.deps.unixNow()
      }))
    }

    function Th(HH) {
      false
    }

    function Uh() {
      var HH, BH;
      return null !== (HH = null === (BH = (0, WS.e)(this, nS)[nS]) || void 0 === BH ? void 0 : BH.on) && void 0 !== HH && HH
    }

    function Vh() {
      const HH = (0, WS.e)(this, KS)[KS];
      let BH = !0;
      if (HH) try {
        BH = HH.busy()
      } catch (LH) {
        if (!(0, WS.e)(this, xh)[xh](LH)) throw LH
      }
      return BH || (0, WS.e)(this, sS)[sS].active
    }
    async function Oh() {
      !(0, WS.e)(this, qS)[qS] && this.deps.allowed() ? await (0, WS.e)(this, Bh)[Bh]() : (0, WS.e)(this, DS)[DS] = null
    }

    function bh() {
      return (0, WS.e)(this, eS)[eS] || (0, WS.e)(this, qS)[qS] ? Promise.resolve(!1) : (0, WS.e)(this, KS)[KS] ? Promise.resolve(!0) : ((0, WS.e)(this, NS)[NS] ??= (0, WS.e)(this, Lh)[Lh](), (0, WS.e)(this, NS)[NS])
    }
    async function kh() {
      let HH = !1;
      try {
        return HH = await (0, WS.e)(this, Sh)[Sh](), HH
      } finally {
        HH || ((0, WS.e)(this, DS)[DS] = null), (0, WS.e)(this, NS)[NS] = null
      }
    }

    function mh() {
      if (!(0, WS.e)(this, KS)[KS]) return Promise.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX");
      if (!(0, WS.e)(this, gS)[gS]) {
        let HH = () => {};
        const BH = new Promise((BH => {
          HH = BH
        }));
        (0, WS.e)(this, gS)[gS] = {
          promise: BH,
          resolve: HH
        }
      }
      return (0, WS.e)(this, gS)[gS].promise
    }

    function oh(HH) {
      const BH = (0, WS.e)(this, gS)[gS];
      (0, WS.e)(this, gS)[gS] = null, null === BH || void 0 === BH || BH.resolve(HH)
    }
    async function Ih() {
      let HH = (0, WS.e)(this, lS)[lS];
      if (!HH) {
        const BH = (0, WS.e)(this, RS)[RS];
        try {
          HH = await this.deps.load()
        } catch (LH) {
          return BH === (0, WS.e)(this, RS)[RS] && await (0, WS.e)(this, Qh)[Qh](LH), !1
        }
        if (BH !== (0, WS.e)(this, RS)[RS]) return this.deps.unload(), !1;
        const AH = HH,
          rH = (0, WS.e)(this, Mh)[Mh]((() => AH.HhH()));
        if (void 0 === rH) return !1;
        const SH = this.deps.core.BhH();
        if (rH !== SH) return await (0, WS.e)(this, Qh)[Qh](new Error(`recorder port version ${rH}, the core's ${SH}`)), !1;
        (0, WS.e)(this, lS)[lS] = HH
      }
      const BH = HH;
      try {
        if (!(0, WS.e)(this, Mh)[Mh]((() => ((0, WS.e)(this, KS)[KS] = new BH.LhH, (0, WS.e)(this, cS)[cS] = BH.dSH(), !0)))) return !1;
        (0, WS.e)(this, th)[th]();
        const HH = (0, WS.e)(this, DS)[DS];
        return (0, WS.e)(this, DS)[DS] = null, HH && (0, WS.e)(this, Ch)[Ch](GH.Mc.Control, HH), (0, WS.e)(this, hh)[hh]()
      } catch (LH) {
        return (0, WS.e)(this, Eh)[Eh](), await (0, WS.e)(this, Qh)[Qh](LH), !1
      }
    }

    function fh() {
      return this.deps.core.AhH(0), 1 === this.deps.core.AhH(1) || ((0, WS.e)(this, Eh)[Eh](), this.deps.failed(oS), !1)
    }

    function lh() {
      (0, WS.e)(this, nS)[nS] && (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS((0, WS.e)(this, nS)[nS].on, (0, WS.e)(this, nS)[nS].seconds)), (0, WS.e)(this, FS)[FS] && (0, WS.e)(this, JS)[JS]((0, WS.e)(this, FS)[FS])
    }

    function Kh() {
      return mS({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var HH, BH;
          return null !== (HH = null === (BH = (0, WS.e)(this, nS)[nS]) || void 0 === BH ? void 0 : BH.seconds) && void 0 !== HH ? HH : 0
        },
        trapped: () => (0, WS.e)(this, eS)[eS],
        busy: () => (0, WS.e)(this, yS)[yS](),
        loadInFlight: () => (0, WS.e)(this, NS)[NS],
        Mu: () => (0, WS.e)(this, qS)[qS],
        unload: () => {
          (0, WS.e)(this, Eh)[Eh]()
        },
        load: () => (0, WS.e)(this, Bh)[Bh]()
      })
    }

    function ch(HH, BH) {
      (0, WS.e)(this, wS)[wS] ? (0, WS.e)(this, wS)[wS].push([HH, BH]): (0, WS.e)(this, Wh)[Wh](((LH, AH) => {
        const rH = LH.aSH(BH.length);
        0 !== rH && (new Uint8Array(AH.buffer, rH, BH.length).set(BH), LH.command(HH, BH.length))
      }))
    }

    function eh() {
      (0, WS.e)(this, RS)[RS]++, (0, WS.e)(this, rh)[rh]("hX"), (0, WS.e)(this, sS)[sS].stop(), this.deps.core.AhH(0), (0, WS.e)(this, Xh)[Xh](), (0, WS.e)(this, eS)[eS] || ((0, WS.e)(this, lS)[lS] = null, this.deps.unload())
    }

    function qh() {
      (0, WS.e)(this, Wh)[Wh]((HH => {
        HH.free()
      })), (0, WS.e)(this, KS)[KS] = null, (0, WS.e)(this, cS)[cS] = null, (0, WS.e)(this, aS)[aS] = null
    }

    function gh() {
      var HH;
      const BH = this.deps.coreBuffer();
      return (null === (HH = (0, WS.e)(this, ZS)[ZS]) || void 0 === HH ? void 0 : HH.buffer) !== BH && ((0, WS.e)(this, ZS)[ZS] = new Uint8Array(BH)), (0, WS.e)(this, ZS)[ZS]
    }

    function Nh() {
      var HH;
      const BH = this.deps.coreBuffer();
      return (null === (HH = (0, WS.e)(this, dS)[dS]) || void 0 === HH ? void 0 : HH.buffer) !== BH && ((0, WS.e)(this, dS)[dS] = new Uint32Array(BH, 0, BH.byteLength >>> 2)), (0, WS.e)(this, dS)[dS]
    }

    function Rh(HH) {
      var BH;
      const LH = HH.buffer;
      return (null === (BH = (0, WS.e)(this, aS)[aS]) || void 0 === BH ? void 0 : BH.buffer) !== LH && ((0, WS.e)(this, aS)[aS] = new Uint8Array(LH)), (0, WS.e)(this, aS)[aS]
    }
    async function jh(HH) {
      await this.deps.staleOr(HH, (() => {
        this.deps.failed(oS)
      }))
    }

    function nh(HH) {
      const BH = (0, WS.e)(this, KS)[KS],
        LH = (0, WS.e)(this, cS)[cS];
      if (BH && LH) return (0, WS.e)(this, Mh)[Mh]((() => HH(BH, LH)))
    }

    function Fh(HH) {
      if (!(0, WS.e)(this, eS)[eS]) try {
        return HH()
      } catch (BH) {
        if (!(0, WS.e)(this, xh)[xh](BH)) throw BH;
        return
      }
    }

    function Dh(HH) {
      return HH instanceof WebAssembly.RuntimeError && ((0, WS.e)(this, eS)[eS] = !0, (0, WS.e)(this, KS)[KS] = null, (0, WS.e)(this, cS)[cS] = null, (0, WS.e)(this, aS)[aS] = null, (0, WS.e)(this, lS)[lS] = null, (0, WS.e)(this, DS)[DS] = null, (0, WS.e)(this, rh)[rh]("trapped"), this.deps.core.AhH(0), (0, WS.e)(this, sS)[sS].stop(), this.deps.crash(this.deps.markTrapped(HH)), this.deps.failed(IS), !0)
    }
    var wh = LH(39568);
    const Zh = new Map([
      ["skyblock", () => LH.e(59).then((() => LH(39559)))]
    ]);

    function dh(HH) {
      const BH = Zh.get(HH);
      return BH ? BH().then((() => {
        const BH = (0, wh.b)(HH);
        if (!BH) throw new Error(`${HH}'s replay hook module registered no hook`);
        return BH
      })) : null
    }
    class ah {
      constructor(HH) {
        this.deps = HH, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(HH) {
        if (this.pending.clear(), HH === this.game && null !== this.hook) return void(this.all = !0);
        const BH = ++this.generation;
        this.game = HH, this.hook = null, this.all = !1;
        const LH = this.deps.loadHook(HH);
        null === LH || void 0 === LH || LH.then((HH => {
          BH === this.generation && (this.hook = HH, this.all = !0)
        }), (HH => {
          BH === this.generation && this.deps.onError(HH)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(HH) {
        null === this.hook || this.all || this.pending.set(HH, !0)
      }
      entityInfoChanged(HH) {
        null === this.hook || this.all || this.pending.has(HH) || this.pending.set(HH, !1)
      }
      flush(HH) {
        const {
          hook: BH
        } = this;
        if (null === BH || !HH || !this.all && 0 === this.pending.size) return;
        const LH = this.deps.cmd();
        if (null === LH) return;
        const {
          api: AH
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: HH,
            count: BH
          } = pL(AH, this.ids);
          this.ids = HH;
          for (let LH = 0; LH < BH; LH++) this.pending.set(HH[LH], !0)
        }
        const rH = this.ids = yL(this.ids, this.pending.size);
        let SH = 0;
        for (const CH of this.pending.keys()) rH[SH++] = CH;
        const hH = [],
          tH = HA(AH, rH, SH, ((HH, BH) => {
            null !== BH && hH.push({
              serverId: HH,
              info: BH,
              spawned: !0 === this.pending.get(HH)
            })
          }));
        if (tH) {
          this.pending.clear();
          for (const {
              serverId: HH,
              info: AH,
              spawned: rH
            }
            of hH) try {
            BH(AH, {
              setFacingTolerance: BH => {
                null === BH && rH || PL(LH, HH, BH) || this.pending.set(HH, rH)
              }
            })
          } catch (zH) {
            this.deps.onError(zH)
          }
        }
      }
    }
    var sh = (0, MS.c)("bindings"),
      Jh = (0, MS.c)("module"),
      ih = (0, MS.c)("memory"),
      ph = (0, MS.c)("trapped"),
      yh = (0, MS.c)("generation"),
      Ht = (0, MS.c)("loading"),
      Bt = (0, MS.c)("lend"),
      Lt = (0, MS.c)("givenUp"),
      At = (0, MS.c)("afterSave"),
      rt = (0, MS.c)("opens"),
      St = (0, MS.c)("saveAskedAt"),
      ht = (0, MS.c)("unload"),
      tt = (0, MS.c)("dropModule"),
      zt = (0, MS.c)("loadFailed"),
      Ct = (0, MS.c)("saveReadsBody"),
      Et = (0, MS.c)("command"),
      Xt = (0, MS.c)("call"),
      Gt = (0, MS.c)("guard"),
      Yt = (0, MS.c)("trapOn");
    class ut {
      constructor(HH) {
        this.deps = HH, Object.defineProperty(this, Yt, {
          value: Ut
        }), Object.defineProperty(this, Gt, {
          value: Tt
        }), Object.defineProperty(this, Xt, {
          value: Pt
        }), Object.defineProperty(this, Et, {
          value: vt
        }), Object.defineProperty(this, Ct, {
          get: xt,
          set: void 0
        }), Object.defineProperty(this, zt, {
          value: Mt
        }), Object.defineProperty(this, tt, {
          value: Wt
        }), Object.defineProperty(this, ht, {
          value: Qt
        }), Object.defineProperty(this, sh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Jh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ih, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ph, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, yh, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Ht, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Bt, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lt, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, At, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rt, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, St, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, WS.e)(this, Jh)[Jh] && null === (0, WS.e)(this, At)[At]
      }
      async open(HH, BH) {
        if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
        let LH = (0, WS.e)(this, sh)[sh];
        if (!LH) {
          const HH = (0, WS.e)(this, yh)[yh];
          (0, WS.e)(this, Ht)[Ht]++;
          try {
            LH = await this.deps.load()
          } catch (rH) {
            return (0, WS.e)(this, Ht)[Ht]--, HH !== (0, WS.e)(this, yh)[yh] ? "stopped" : (0, WS.e)(this, zt)[zt](rH, BH)
          }
          if ((0, WS.e)(this, Ht)[Ht]--, HH !== (0, WS.e)(this, yh)[yh]) return (0, WS.e)(this, sh)[sh] || 0 !== (0, WS.e)(this, Ht)[Ht] || (0, WS.e)(this, ph)[ph] || this.deps.unload(), "stopped";
          if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
          const AH = LH.HhH(),
            SH = this.deps.core.BhH();
          if (AH !== SH) return (0, WS.e)(this, zt)[zt](new Error(`replay port version ${AH}, the core's ${SH}`), BH);
          (0, WS.e)(this, sh)[sh] = LH
        }
        if (!(0, WS.e)(this, Jh)[Jh]) {
          const HH = LH;
          if (!(0, WS.e)(this, Gt)[Gt]((() => {
              (0, WS.e)(this, Jh)[Jh] = new HH.rhH, (0, WS.e)(this, ih)[ih] = HH.ShH()
            }))) return GH.$c.ModuleTrap
        }
        let AH = !1;
        return (0, WS.e)(this, Xt)[Xt](((BH, LH) => {
          null !== (0, WS.e)(this, At)[At] && BH.step(0, 0);
          const rH = BH.stage(HH.length);
          0 !== rH && (new Uint8Array(LH.buffer, rH, HH.length).set(HH), BH.open(), (0, WS.e)(this, Lt)[Lt] = (0, WS.e)(this, Bt)[Bt], (0, WS.e)(this, At)[At] = null, (0, WS.e)(this, rt)[rt]++, AH = !0)
        })) ? AH ? "opening" : GH.$c.TooLarge : GH.$c.ModuleTrap
      }
      beforeFrame(HH) {
        const BH = (0, WS.e)(this, Jh)[Jh],
          LH = (0, WS.e)(this, ih)[ih];
        if (!BH || !LH || null !== (0, WS.e)(this, At)[At]) return;
        const {
          core: AH
        } = this.deps, rH = AH.hhH(HH);
        if (rH < 0) return;
        const SH = Math.floor(rH);
        let hH, tH;
        try {
          hH = BH.step(SH, rH - SH), tH = BH.JSH()
        } catch (CH) {
          return void(0, WS.e)(this, Yt)[Yt](CH)
        }
        const zH = AH.ySH(1, hH);
        if (0 === zH) {
          const HH = (0, WS.e)(this, Xt)[Xt]((HH => {
            HH.close()
          }));
          if (!HH) return;
          return (0, WS.e)(this, Ct)[Ct] ? (0, WS.e)(this, At)[At] = "drop" : (0, WS.e)(this, tt)[tt](), void AH.thH(GH.$c.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), zH, hH).set(new Uint8Array(LH.buffer, tH, hH))
      }
      play() {
        (0, WS.e)(this, Et)[Et]((HH => {
          HH.play()
        }))
      }
      pause() {
        (0, WS.e)(this, Et)[Et]((HH => {
          HH.pause()
        }))
      }
      seek(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, WS.e)(this, Et)[Et]((LH => {
          LH.seek(HH, BH)
        }))
      }
      setMark(HH, BH) {
        return (0, WS.e)(this, Et)[Et]((LH => {
          LH.zhH(HH, BH)
        }))
      }
      addKeyframe(HH, BH) {
        return (0, WS.e)(this, Et)[Et]((LH => {
          LH.ChH(HH[0], HH[1], HH[2], BH[0], BH[1], BH[2])
        }))
      }
      setKeyframe(HH, BH) {
        return (0, WS.e)(this, Et)[Et]((LH => {
          LH.EhH(HH, BH)
        }))
      }
      moveKeyframe(HH, BH) {
        return (0, WS.e)(this, Et)[Et]((LH => {
          LH.XhH(HH, BH)
        }))
      }
      deleteKeyframes(HH, BH) {
        return (0, WS.e)(this, Et)[Et]((LH => {
          LH.GhH(HH, BH)
        }))
      }
      crop(HH, BH) {
        return null === (0, WS.e)(this, Bt)[Bt] && (0, WS.e)(this, Et)[Et]((LH => {
          LH.crop(HH, BH)
        }))
      }
      beginSave() {
        const HH = (0, WS.e)(this, St)[St];
        if ((0, WS.e)(this, St)[St] = null, null !== HH && HH !== (0, WS.e)(this, rt)[rt]) return null;
        let BH = 0,
          LH = null;
        if ((0, WS.e)(this, Xt)[Xt](((HH, AH) => {
            BH = HH.save(), 0 !== BH && (LH = new Uint8Array(AH.buffer, HH.YhH(), HH.uhH()).slice())
          })), 0 === BH || !LH) return null;
        const AH = {
          headLen: BH,
          editState: LH,
          givenUp: () => (0, WS.e)(this, Lt)[Lt] === AH,
          head: (HH, BH) => {
            if ((0, WS.e)(this, Bt)[Bt] !== AH || !(0, WS.e)(this, Ct)[Ct]) return null;
            let LH = null;
            return (0, WS.e)(this, Xt)[Xt](((AH, rH) => {
              const SH = AH.QhH();
              0 !== SH && HH >= 0 && BH >= 0 && HH + BH <= SH && (LH = new Uint8Array(rH.buffer, AH.WhH() + HH, BH))
            })), LH
          },
          end: () => {
            if ((0, WS.e)(this, Bt)[Bt] !== AH) return;
            (0, WS.e)(this, Bt)[Bt] = null, (0, WS.e)(this, Lt)[Lt] = null, (0, WS.e)(this, Xt)[Xt]((HH => {
              HH.MhH()
            }));
            const HH = (0, WS.e)(this, At)[At];
            (0, WS.e)(this, At)[At] = null, "unload" === HH ? (0, WS.e)(this, ht)[ht]() : "drop" === HH && (0, WS.e)(this, tt)[tt]()
          }
        };
        return (0, WS.e)(this, Bt)[Bt] = AH, AH
      }
      askSave() {
        (0, WS.e)(this, St)[St] = (0, WS.e)(this, rt)[rt]
      }
      setSpeed(HH) {
        (0, WS.e)(this, Et)[Et]((BH => {
          BH.xhH(HH)
        }))
      }
      setCameraMode(HH) {
        (0, WS.e)(this, Et)[Et]((BH => {
          BH.vhH(HH)
        }))
      }
      close() {
        (0, WS.e)(this, Et)[Et]((HH => {
          HH.close()
        }))
      }
      stop() {
        (0, WS.e)(this, yh)[yh]++, (0, WS.e)(this, Ct)[Ct] && ((0, WS.e)(this, Xt)[Xt]((HH => {
          HH.close()
        })), (0, WS.e)(this, Jh)[Jh]) ? (0, WS.e)(this, At)[At] = "unload" : (0, WS.e)(this, ht)[ht]()
      }
    }

    function Qt() {
      (0, WS.e)(this, tt)[tt](), (0, WS.e)(this, ph)[ph] || ((0, WS.e)(this, sh)[sh] = null, this.deps.unload())
    }

    function Wt() {
      (0, WS.e)(this, Xt)[Xt]((HH => {
        HH.free()
      })), (0, WS.e)(this, Jh)[Jh] = null, (0, WS.e)(this, ih)[ih] = null
    }
    async function Mt(HH, BH) {
      return await this.deps.staleOr(HH, (() => {}), {
        beforeReload: BH
      }) ? "reloading" : GH.$c.ModuleLoad
    }

    function xt() {
      return null !== (0, WS.e)(this, Bt)[Bt] && (0, WS.e)(this, Lt)[Lt] !== (0, WS.e)(this, Bt)[Bt]
    }

    function vt(HH) {
      return null === (0, WS.e)(this, At)[At] && (0, WS.e)(this, Xt)[Xt](HH)
    }

    function Pt(HH) {
      const BH = (0, WS.e)(this, Jh)[Jh],
        LH = (0, WS.e)(this, ih)[ih];
      return !(!BH || !LH) && (0, WS.e)(this, Gt)[Gt]((() => {
        HH(BH, LH)
      }))
    }

    function Tt(HH) {
      if ((0, WS.e)(this, ph)[ph]) return !1;
      try {
        return HH(), !0
      } catch (BH) {
        return (0, WS.e)(this, Yt)[Yt](BH), !1
      }
    }

    function Ut(HH) {
      if (!(HH instanceof WebAssembly.RuntimeError)) throw HH;
      (0, WS.e)(this, ph)[ph] = !0, (0, WS.e)(this, Jh)[Jh] = null, (0, WS.e)(this, ih)[ih] = null, (0, WS.e)(this, sh)[sh] = null, this.deps.crash(this.deps.markTrapped(HH)), this.deps.core.thH(GH.$c.ModuleTrap)
    }
    var Vt = LH(7014),
      Ot = LH(42339);
    const bt = "[bloxd-wasm-client]";
    const kt = String(Zr);

    function mt(HH) {
      return null === HH || HH === kt ? void 0 : HH
    }

    function ot(HH) {
      var BH, LH, AH, rH, SH, tH, zH;
      switch (HH.what) {
        case GH.gd.FlyingText: {
          let BH;
          try {
            BH = JSON.parse(HH.contentJson)
          } catch (CH) {
            return void console.warn(`${bt} a replay's flying text isn't JSON`, CH)
          }
          hH.k.AX("forceFlyingMiddleMessage", {
            content: BH,
            dr: HH.dr,
            angle: HH.angle,
            ar: HH.ar
          });
          break
        }
        case GH.gd.PlayerKilled:
          (0, Ot.e)({
            kind: "killed",
            body: {
              deadEId: null !== (BH = mt(HH.dead)) && void 0 !== BH ? BH : "",
              killerEId: mt(HH.killer),
              withItem: null !== (LH = HH.withItem) && void 0 !== LH ? LH : "",
              killstreak: HH.killstreak
            }
          });
          break;
        case GH.gd.Killfeed:
          (0, Ot.e)({
            kind: "custom",
            body: {
              killer: {
                eId: mt(HH.killerId),
                name: null !== (AH = HH.killerName) && void 0 !== AH ? AH : void 0,
                colour: null !== (rH = HH.killerColour) && void 0 !== rH ? rH : void 0
              },
              victim: {
                eId: mt(HH.victimId),
                name: null !== (SH = HH.victimName) && void 0 !== SH ? SH : void 0,
                colour: null !== (tH = HH.victimColour) && void 0 !== tH ? tH : void 0
              },
              withItem: null !== (zH = HH.withItem) && void 0 !== zH ? zH : ""
            }
          })
      }
    }
    const It = "[bloxd-wasm-client]";

    function ft(HH) {
      if (void 0 === HH || null === HH || "" === HH) return null;
      const BH = Number(HH);
      return Number.isInteger(BH) && BH > Zr && BH <= 2147483647 ? BH : null
    }

    function lt(HH) {
      return {
        id: ft(HH.eId),
        name: "string" === typeof HH.name ? HH.name : null,
        colour: "string" === typeof HH.colour ? HH.colour : null
      }
    }

    function Kt(HH) {
      const BH = (0, LS.k)(hA.nc.PlayerKilled, (BH => {
          var LH, AH;
          const rH = (0, BS.i)(BH);
          if (!(0, BS.c)(rH)) return;
          const {
            deadEId: SH,
            killerEId: hH,
            withItem: tH,
            killstreak: zH
          } = rH;
          HH.recordPlayerKilled(null !== (LH = ft(SH)) && void 0 !== LH ? LH : Zr, null !== (AH = ft(hH)) && void 0 !== AH ? AH : Zr, "number" === typeof zH ? zH : 0, "string" === typeof tH ? tH : "")
        })),
        LH = (0, LS.k)(hA.nc.CustomKillfeed, (BH => {
          const LH = (0, BS.i)(BH);
          if (!(0, BS.c)(LH) || !(0, BS.c)(LH.killer) || !(0, BS.c)(LH.victim)) return;
          const {
            killer: AH,
            victim: rH,
            withItem: SH
          } = LH;
          HH.recordKillfeed(lt(AH), lt(rH), "string" === typeof SH ? SH : null)
        }));
      return () => {
        BH(), LH()
      }
    }

    function ct(HH) {
      var BH;
      return void 0 === HH || null === HH ? null : null !== (BH = JSON.stringify(HH)) && void 0 !== BH ? BH : null
    }

    function et(HH) {
      let BH = null;
      const LH = () => {
        const {
          enableClipping: LH,
          clipDurationSeconds: rH
        } = AH.c.get("clientEscMenuOptions"), SH = `${LH}:${rH}`;
        SH !== BH && (BH = SH, HH.recorder.setPrefs(LH, rH))
      };
      return LH(), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", LH)
    }
    const qt = "replayModule",
      gt = "recorderModule";

    function Nt(HH, BH, LH) {
      return function() {
        return HH.isStopped ? LH : BH(...arguments)
      }
    }
    const Rt = {
      open: () => Promise.reject(new Error(qr.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function jt() {
      return LH.e(76).then((() => LH(64318)))
    }

    function nt(HH) {
      (0, qr.i)({
        text: HH,
        type: "Error"
      })
    }
    class Ft {
      constructor(HH) {
        this.deps = HH, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: BH,
          api: AH,
          core: rH
        } = HH, SH = () => HH.memory().buffer, hH = () => BH.isStopped ? null : BH.rings.cmd, tH = Nt(BH, ((HH, BH) => rH.ySH(HH, BH)), 0), zH = () => rH.BhH();
        let CH = null;
        this.replay = new ut({
          core: {
            hhH: Nt(BH, (HH => rH.hhH(HH)), -1),
            ySH: tH,
            BhH: zH,
            thH: Nt(BH, (HH => {
              rH.thH(HH)
            }), void 0)
          },
          coreBuffer: SH,
          load: async () => (CH = await LH.e(77).then((() => LH(64329))), CH.loadReplayModule()),
          unload: () => {
            var HH;
            null === (HH = CH) || void 0 === HH || HH.unloadReplayModule()
          },
          markTrapped: HH => CH ? CH.markReplayTrapped(HH) : new Error(String(HH)),
          staleOr: (BH, LH, AH) => HH.staleOr(qt, BH, LH, AH),
          crash: BH => {
            HH.reportFault(qt, BH)
          }
        });
        let EH = null;
        this.recorder = new vh({
          core: {
            AhH: Nt(BH, (HH => rH.AhH(HH)), 0),
            sSH: Nt(BH, (HH => rH.sSH(HH)), 0),
            ySH: tH,
            BhH: zH
          },
          coreCommand: (HH, BH) => {
            var LH, AH;
            return null !== (LH = null === (AH = hH()) || void 0 === AH ? void 0 : AH.writeCmd(HH, 0, BH)) && void 0 !== LH && LH
          },
          coreBuffer: SH,
          load: async () => (EH = await jt(), EH.loadRecorderModule()),
          prefetch: () => {
            jt().then((HH => HH.prefetchRecorderModule())).catch((HH => {
              console.warn(`${It} the recorder module didn't prefetch, so a save loads it:`, HH)
            }))
          },
          unload: () => {
            var HH;
            null === (HH = EH) || void 0 === HH || HH.unloadRecorderModule()
          },
          markTrapped: HH => EH ? EH.markRecorderTrapped(HH) : new Error(String(HH)),
          memoryBytes: () => {
            var HH, BH;
            return null !== (HH = null === (BH = EH) || void 0 === BH ? void 0 : BH.recorderMemoryBytes()) && void 0 !== HH ? HH : 0
          },
          staleOr: (BH, LH) => HH.staleOr(gt, BH, LH),
          crash: BH => {
            HH.reportFault(gt, BH)
          },
          allowed: () => !0 === HH.options.get("canRecordReplays"),
          failed: HH => {
            this.runtime.recorder.stopped(), nt(HH)
          },
          events: (HH, BH) => {
            this.runtime.recorderEvents(HH, BH)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: nt,
          unixNow: () => Date.now()
        });
        const XH = new wr({
          core: {
            RSH: Nt(BH, (HH => rH.RSH(HH)), 0),
            nSH: Nt(BH, (() => {
              rH.nSH()
            }), void 0),
            DW: Nt(BH, (() => rH.DW()), 0),
            jSH: Nt(BH, (() => rH.jSH()), 0)
          },
          buffer: SH,
          apiView: () => AH.apiView,
          cmd: hH,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new ah({
          api: AH,
          cmd: hH,
          loadHook: dh,
          onError: HH => {
            console.warn(`${It} the recorded game's replay hooks:`, HH)
          }
        });
        const GH = new HS({
          client: XH,
          buffer: SH,
          setHoldDraws: HH => {
            BH.setHoldDraws(HH)
          },
          notify: qr.i,
          onRecorderState: () => {
            var HH;
            null === (HH = (0, Nr.g)()) || void 0 === HH || HH.recorderChanged()
          },
          onViewerChange: () => {
            var HH;
            null === (HH = (0, Nr.g)()) || void 0 === HH || HH.viewerChanged()
          },
          onReplayOption: BH => {
            ! function(HH, BH) {
              var LH, AH;
              const rH = hA.Ab[BH.key];
              if (void 0 === rH) return;
              let SH = null !== (LH = BH.value) && void 0 !== LH ? LH : JSON.parse(JSON.stringify(null !== (AH = Vt.d[rH]) && void 0 !== AH ? AH : null));
              if (null !== BH.value && BH.key < hA.Xb.Environment && "string" === typeof SH) try {
                SH = JSON.parse(SH)
              } catch (hH) {
                return void console.warn(`${bt} a replay's ${rH} isn't JSON`, hH)
              }
              HH.applyNewClientOptions({
                [rH]: SH
              })
            }(HH.options, BH)
          },
          onReplayUiEvent: ot,
          onReplayOpened: BH => {
            this.entityHooks.opened((0, mH.Wb)(BH)), HH.replayShaderPack(BH)
          },
          meshPending: () => {
            var HH, LH;
            return null !== (HH = null === (LH = BH.lastHeader) || void 0 === LH ? void 0 : LH.renderPending) && void 0 !== HH ? HH : 0
          },
          viewerOpen: gr.c,
          download: HH => {
            (0, cr.k)(HH)
          }
        });
        this.runtime = GH, AH.replay = GH.sink, (0, Nr.t)(GH);
        const YH = new SS({
          live: () => {
            var HH;
            return !BH.isStopped && !0 === (null === (HH = GH.currentViewer) || void 0 === HH ? void 0 : HH.inPlayback)
          },
          cmd: hH,
          dragScale: uS
        });
        this.freecam = YH, (0, Nr.r)(YH), this.recordedOptions = function(HH, BH) {
          const LH = hA.Ab,
            AH = LH.map(((LH, AH) => BH.subscribe(LH, (BH => {
              HH.setOption(AH, ct(BH))
            }))));
          return {
            sendAll() {
              LH.forEach(((LH, AH) => {
                HH.setOption(AH, ct(BH.get(LH)))
              }))
            },
            stop() {
              for (const HH of AH) HH()
            }
          }
        }(GH.recorder, HH.options), this.stops = [(0, WA.k)((HH => {
          YH.flush();
          try {
            this.replay.beforeFrame(HH)
          } catch (BH) {
            this.deps.reportFault("replayFrame", BH)
          }
        })), (0, WA.z)(((HH, BH) => {
          try {
            this.recorder.afterFrame(), BH && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (LH) {
            this.deps.reportFault("recorderFrame", LH)
          }
          try {
            GH.afterFrame(HH)
          } catch (LH) {
            this.deps.reportFault("replayRuntime", LH)
          }
        })), et(GH), () => {
          this.recordedOptions.stop()
        }, Kt(GH.recorder), (0, AS.k)((HH => {
          let {
            action: BH,
            down: LH
          } = HH;
          var AH;
          LH && (null === (AH = (0, Nr.g)()) || void 0 === AH || AH.keyDown(BH))
        }))];
        const uH = () => {
          const HH = GH.currentViewer;
          return !0 === (null === HH || void 0 === HH ? void 0 : HH.isOpen) ? HH : null
        };
        (0, er.h)({
          open: (HH, BH) => this.open(HH, BH),
          replayKey: () => {
            var HH, BH;
            return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.id) && void 0 !== HH ? HH : null
          },
          saveRefusal: () => {
            var HH, BH;
            return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.saveRefusal) && void 0 !== HH ? HH : null
          },
          encode: () => {
            var HH, BH;
            return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.save()) && void 0 !== HH ? HH : Promise.resolve(null)
          },
          fileHandle: () => {
            var HH, BH;
            return null !== (HH = null === (BH = GH.currentViewer) || void 0 === BH ? void 0 : BH.fileHandle) && void 0 !== HH ? HH : null
          },
          markSaved: (HH, BH) => {
            var LH;
            null === (LH = GH.currentViewer) || void 0 === LH || LH.markSaved(HH, BH)
          }
        })
      }
      netEvent(HH) {
        if ("connection" === HH.type)
          if (HH.phase === GH.C.Activated) {
            this.activeConn = HH.conn;
            const BH = this.deps.sessionInfo(HH.conn);
            null !== BH && (this.runtime.activated({
              lobbyType: (0, oH.v)(BH.lobbyName),
              gameNameWithVariation: BH.gameNameWithVariation,
              lobbyName: BH.lobbyName
            }), this.recordedOptions.sendAll())
          } else HH.phase !== GH.C.Left && HH.phase !== GH.C.Closed || HH.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const HH of this.stops) HH();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Nr.n)() === this.runtime && (0, Nr.t)(null), (0, Nr.j)() === this.freecam && (0, Nr.r)(null), (0, er.h)(Rt), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(HH, BH) {
        const {
          running: LH
        } = this.deps;
        if (LH.isStopped) throw new Error(qr.e.coreStopped.text);
        if (HH.byteLength > 67108864) throw new Error(qr.e.cantOpen.text);
        let AH;
        try {
          AH = await async function(HH) {
            const BH = await HH.loadViewer();
            return BH.inPlayback || (0, WA.L)().leaveGame(null), BH
          }(this.runtime)
        } catch (rH) {
          throw console.warn(`${It} the replay viewer didn't load`, rH), new Error(qr.e.viewerLoadFailed.text)
        }
        if (LH.isStopped) throw new Error(qr.e.coreStopped.text);
        await AH.open(HH, BH)
      }
    }
    var Dt = LH(2036);

    function wt(HH, BH) {
      const {
        aux: LH,
        payload: AH
      } = function(HH) {
        return {
          aux: HH.reset ? GH.cc.ResetFirst : 0,
          payload: dt(HH.changes)
        }
      }(BH);
      HH.queueOptions(LH, AH) && (BH.reset && Dt.e.reset(), Dt.e.apply(BH.changes))
    }
    const Zt = new TextEncoder;

    function dt(HH) {
      const BH = new st;
      return it(BH, HH), BH.bytes()
    }
    class st {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(HH) {
        if (this.len + HH <= this.buf.length) return;
        const BH = new Uint8Array(Math.max(2 * this.buf.length, this.len + HH));
        BH.set(this.buf.subarray(0, this.len)), this.buf = BH, this.view = new DataView(BH.buffer)
      }
      u8(HH) {
        this.room(1), this.buf[this.len++] = HH
      }
      tagged(HH, BH, LH) {
        this.room(1 + BH), this.buf[this.len++] = HH, 1 === BH ? this.view.setUint8(this.len, LH) : 2 === BH ? this.view.setUint16(this.len, LH) : this.view.setUint32(this.len, LH), this.len += BH
      }
      signed(HH, BH, LH) {
        this.room(1 + BH), this.buf[this.len++] = HH, 1 === BH ? this.view.setInt8(this.len, LH) : 2 === BH ? this.view.setInt16(this.len, LH) : this.view.setInt32(this.len, LH), this.len += BH
      }
      f64(HH) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, HH), this.len += 8
      }
      raw(HH) {
        this.room(HH.length), this.buf.set(HH, this.len), this.len += HH.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Jt(HH, BH, LH, AH, rH, SH, hH) {
      BH < AH ? HH.u8(LH | BH) : null !== rH && BH < 256 ? HH.tagged(rH, 1, BH) : BH < 65536 ? HH.tagged(SH, 2, BH) : HH.tagged(hH, 4, BH)
    }

    function it(HH, BH) {
      switch (typeof BH) {
        case "undefined":
          return void HH.raw(pt);
        case "boolean":
          return void HH.u8(BH ? 195 : 194);
        case "number":
          return void
          function(HH, BH) {
            BH >>> 0 === BH ? BH < 128 ? HH.u8(BH) : BH < 256 ? HH.tagged(204, 1, BH) : BH < 65536 ? HH.tagged(205, 2, BH) : HH.tagged(206, 4, BH) : (BH | 0) === BH ? BH >= -32 ? HH.u8(255 & BH) : BH >= -128 ? HH.signed(208, 1, BH) : BH >= -32768 ? HH.signed(209, 2, BH) : HH.signed(210, 4, BH) : HH.f64(BH)
          }(HH, BH);
        case "string": {
          const LH = Zt.encode(BH);
          return Jt(HH, LH.length, 160, 32, 217, 218, 219), void HH.raw(LH)
        }
        case "object":
          break;
        default:
          return void HH.u8(192)
      }
      if (null === BH) HH.u8(192);
      else if (Array.isArray(BH)) {
        Jt(HH, BH.length, 144, 16, null, 220, 221);
        for (const LH of BH) it(HH, LH)
      } else if (BH instanceof Uint8Array) Jt(HH, BH.length, 0, 0, 196, 197, 198), HH.raw(BH);
      else {
        const LH = Object.keys(BH);
        Jt(HH, LH.length, 128, 0, null, 222, 223);
        for (const AH of LH) it(HH, AH), it(HH, BH[AH])
      }
    }
    const pt = new Uint8Array([212, 0, 0]);
    var yt = LH(37110),
      Hz = LH(37157),
      Bz = LH(42271),
      Lz = LH(42307),
      Az = LH(3171);
    const rz = [1e3, 3e3, 9e3];
    class Sz {
      constructor(HH) {
        this.host = HH, this.sets = new Map, this.table = [], this.generation = 0, this.Mu = !1
      }
      onEvent(HH) {
        const BH = function(HH) {
          if (HH.byteLength !== GH.pd) return null;
          const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
          return {
            want: BH.getUint16(0, !0),
            release: BH.getUint16(2, !0)
          }
        }(HH);
        BH && !this.Mu && (BH.release !== GH.qd && this.release(BH.release), BH.want !== GH.qd && this.want(BH.want))
      }
      reset(HH) {
        if (!this.Mu) {
          for (const [HH, BH] of this.sets) "ready" === BH.state && this.releaseAll(BH.distinct), this.sets.delete(HH);
          this.table = HH, this.generation++
        }
      }
      dispose() {
        if (this.Mu) return;
        this.Mu = !0, this.generation++, this.table = [];
        const HH = [...this.sets.values()];
        this.sets.clear();
        let BH = null;
        for (const AH of HH)
          for (const HH of "ready" === AH.state ? AH.distinct : []) try {
            this.host.zrH(HH)
          } catch (LH) {
            BH ??= {
              error: LH
            }
          }
        if (BH) throw BH.error
      }
      isReady(HH) {
        var BH;
        return "ready" === (null === (BH = this.sets.get(HH)) || void 0 === BH ? void 0 : BH.state)
      }
      want(HH) {
        const BH = this.sets.get(HH);
        if ("loading" === (null === BH || void 0 === BH ? void 0 : BH.state)) return BH.wanted = !0, void this.capAnswer(HH, BH);
        if ("ready" === (null === BH || void 0 === BH ? void 0 : BH.state)) return void this.host.sendReady(tz(HH, BH.images, BH.size));
        const LH = this.table[HH];
        if (!LH || 1 !== LH.urls.length && LH.urls.length !== hA.ic.CubeFaces) return this.host.sendReady(zz(HH)), void this.host.onLoadFailed(HH, "", new Error(`no image set ${HH}`));
        const AH = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(HH, AH), this.load(HH, LH, AH, this.generation, 0), this.capAnswer(HH, AH)
      }
      capAnswer(HH, BH) {
        this.host.wait(4e3, (() => {
          this.sets.get(HH) === BH && BH.wanted && this.host.sendReady(zz(HH))
        }))
      }
      load(HH, BH, LH, AH, rH) {
        const SH = [...new Set(BH.urls)];
        Promise.allSettled(SH.map((HH => this.host.loadImage(HH, BH.orientation)))).then((hH => {
          const tH = hH.flatMap((HH => "fulfilled" === HH.status ? [HH.value] : [])),
            zH = AH === this.generation && this.sets.get(HH) === LH,
            CH = hH.findIndex((HH => "rejected" === HH.status));
          if (!zH || !LH.wanted) return this.Mu ? void this.releaseAfterDispose(tH.map(hz)) : (this.releaseAll(tH.map(hz)), void(zH && this.sets.delete(HH)));
          CH < 0 ? this.loaded(HH, BH, SH, tH) : (this.releaseAll(tH.map(hz)), this.host.sendReady(zz(HH)), rH < rz.length ? this.host.wait(rz[rH], (() => {
            AH === this.generation && this.sets.get(HH) === LH && (LH.wanted ? this.load(HH, BH, LH, AH, rH + 1) : this.sets.delete(HH))
          })) : (this.sets.delete(HH), this.host.onLoadFailed(HH, SH[CH], hH[CH].reason)))
        }))
      }
      loaded(HH, BH, LH, AH) {
        const [rH] = AH, SH = [rH.width, rH.height], hH = AH.every((HH => HH.width === SH[0] && HH.height === SH[1])), tH = BH.urls.length === hA.ic.CubeFaces;
        if (!hH || SH[0] <= 0 || SH[1] <= 0 || SH[0] > 65535 || SH[1] > 65535 || tH && SH[0] !== SH[1]) {
          this.releaseAll(AH.map(hz)), this.sets.delete(HH), this.host.sendReady(zz(HH));
          const LH = AH.map((HH => `${HH.width}x${HH.height}`));
          return void this.host.onLoadFailed(HH, BH.urls[0], new Error(`set ${HH}'s images can't make its texture: ${LH.join(", ")}`))
        }
        const zH = BH.urls.map((HH => AH[LH.indexOf(HH)].id)),
          CH = AH.map(hz);
        this.sets.set(HH, {
          state: "ready",
          images: zH,
          distinct: CH,
          size: SH
        }), this.host.sendReady(tz(HH, zH, SH))
      }
      release(HH) {
        const BH = this.sets.get(HH);
        "loading" === (null === BH || void 0 === BH ? void 0 : BH.state) ? BH.wanted = !1: "ready" === (null === BH || void 0 === BH ? void 0 : BH.state) && (this.releaseAll(BH.distinct), this.sets.delete(HH))
      }
      releaseAll(HH) {
        for (const BH of HH) this.host.zrH(BH)
      }
      releaseAfterDispose(HH) {
        for (const BH of HH) try {
          this.host.zrH(BH)
        } catch {}
      }
    }

    function hz(HH) {
      return HH.id
    }

    function tz(HH, BH, LH) {
      const AH = new Uint8Array(hA.ic.SkyImagesReadyBytes),
        rH = new DataView(AH.buffer);
      return rH.setUint16(0, HH, !0), rH.setUint16(2, BH.length, !0), rH.setUint16(4, LH[0], !0), rH.setUint16(6, LH[1], !0), BH.slice(0, hA.ic.CubeFaces).forEach(((HH, BH) => {
        rH.setUint32(8 + 4 * BH, HH, !0)
      })), AH
    }

    function zz(HH) {
      const BH = new Uint8Array(hA.ic.SkyImagesReadyBytes),
        LH = new DataView(BH.buffer);
      return LH.setUint16(0, HH, !0), LH.setUint16(2, hA.ic.Failed, !0), BH
    }
    let Cz = Promise.resolve();
    async function Ez(HH, BH) {
      let LH;
      try {
        LH = await (0, Az.M)(HH)
      } catch (SH) {
        throw new Bz.b("fetch", HH, {
          cause: SH
        })
      }
      const AH = Cz.then((() => async function(HH, BH) {
        const LH = new Blob([HH.slice()]);
        let AH = await createImageBitmap(LH, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: BH
        });
        const rH = 1024 / Math.max(AH.width, AH.height);
        if (rH < 1) {
          const HH = AH;
          try {
            AH = await createImageBitmap(HH, {
              resizeWidth: Math.max(1, Math.round(HH.width * rH)),
              resizeHeight: Math.max(1, Math.round(HH.height * rH)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            HH.close()
          }
        }
        return AH
      }(LH, BH)));
      let rH;
      Cz = AH.catch((() => {}));
      try {
        rH = await AH
      } catch (SH) {
        throw new Bz.b("decode", HH, {
          cause: SH
        })
      }
      return {
        id: (0, Bz.i)(rH),
        width: rH.width,
        height: rH.height
      }
    }
    var Xz = LH(2227),
      Gz = LH(34806),
      Yz = LH(40184);
    const uz = Xz.f.length,
      Qz = new Set([...Xz.f, "earth"]);

    function Wz(HH) {
      const BH = [],
        LH = [],
        AH = (HH, AH) => {
          if ("custom" === AH.type) {
            LH.push({
              id: HH,
              kind: hA.ic.KindCustom,
              set: BH.length,
              earth: null
            });
            const rH = [AH.px, AH.py, AH.pz, AH.nx, AH.ny, AH.nz];
            BH.push({
              urls: (0, Yz.f)(rH),
              orientation: "none"
            })
          } else LH.push({
            id: HH,
            kind: hA.ic.KindEarth,
            set: 0,
            earth: AH
          })
        };
      Xz.f.forEach(((BH, LH) => {
        var rH;
        AH(LH, null !== (rH = Mz(HH[BH])) && void 0 !== rH ? rH : Gz.n[BH])
      }));
      const rH = Mz(HH.earth);
      "earth" === (null === rH || void 0 === rH ? void 0 : rH.type) && AH(uz, rH);
      const SH = new TextEncoder,
        hH = [],
        tH = [];
      for (const [YH, uH] of Object.entries(HH)) {
        const HH = Qz.has(YH) ? null : Mz(uH);
        if (null === HH) continue;
        const BH = SH.encode(YH);
        BH.length > 255 ? tH.push(`Ignoring texture pack skybox ${YH}, whose name is over 255 bytes`) : hH.length === hA.ic.MaxAdded ? tH.push(`Ignoring texture pack skybox ${YH}, past the ${hA.ic.MaxAdded} skies a pack can add`) : (hH.push(BH), AH(hA.ic.AddedId, HH))
      }
      const zH = BH.length;
      BH.push({
        urls: Gz.h.map((HH => Gz.l + HH)),
        orientation: "none"
      }), BH.push({
        urls: [Gz.m],
        orientation: "flipY"
      }), BH.push({
        urls: [Gz.e],
        orientation: "flipY"
      });
      const CH = hA.ic.SkyTableHeaderBytes + LH.length * hA.ic.SkyTableEntryBytes,
        EH = new Uint8Array(CH + hH.reduce(((HH, BH) => HH + 1 + BH.length), 0)),
        XH = new DataView(EH.buffer);
      XH.setUint16(0, zH, !0), XH.setUint16(2, zH + 1, !0), XH.setUint16(4, zH + 2, !0), XH.setUint16(6, LH.length, !0), LH.forEach(((HH, BH) => {
        const LH = hA.ic.SkyTableHeaderBytes + BH * hA.ic.SkyTableEntryBytes;
        XH.setUint16(LH, HH.id, !0), XH.setUint8(LH + 2, HH.kind);
        const AH = LH + 4;
        HH.earth ? function(HH, BH, LH) {
          const AH = HH;
          let rH = 0,
            SH = 0;
          for (const [hH, tH] of xz) {
            const HH = AH[hH];
            "number" === typeof HH && Number.isFinite(HH) && (BH.setFloat32(LH + 4 * tH, HH, !0), rH |= 1 << tH)
          }
          for (const [hH, tH, zH] of vz) {
            const HH = AH[hH];
            Array.isArray(HH) && 3 === HH.length && HH.every((HH => "number" === typeof HH && Number.isFinite(HH))) && (HH.forEach(((HH, AH) => {
              BH.setFloat32(LH + zH + 4 * AH, HH, !0)
            })), rH |= tH)
          }
          Pz.forEach(((HH, SH) => {
            let [hH, tH] = HH;
            const zH = AH[hH];
            "number" === typeof zH && Number.isFinite(zH) && (BH.setFloat32(LH + hA.v.CameraOffsetAt + 4 * SH, zH, !0), rH |= tH)
          }));
          for (const [hH, tH] of Tz) {
            const HH = AH[hH];
            null !== HH && void 0 !== HH && (rH |= tH, HH && (SH |= tH >>> 14))
          }
          BH.setUint32(LH + hA.v.PresentAt, rH, !0), BH.setUint8(LH + hA.v.FlagsAt, SH)
        }(HH.earth, XH, AH) : XH.setUint16(AH, HH.set, !0)
      }));
      let GH = CH;
      for (const YH of hH) EH[GH] = YH.length, EH.set(YH, GH + 1), GH += 1 + YH.length;
      return {
        payload: EH,
        sets: BH,
        leftOut: tH
      }
    }

    function Mz(HH) {
      if ("object" !== typeof HH || null === HH) return null;
      const BH = HH;
      if ("earth" === BH.type) return HH;
      return "custom" === BH.type && ["px", "py", "pz", "nx", "ny", "nz"].every((HH => {
        const LH = BH[HH];
        return "string" === typeof LH && LH.length > 0
      })) ? HH : null
    }
    const xz = [
        ["inclination", hA.v.Inclination],
        ["turbidity", hA.v.Turbidity],
        ["luminance", hA.v.Luminance],
        ["rayleigh", hA.v.Rayleigh],
        ["mieCoefficient", hA.v.MieCoefficient],
        ["mieDirectionalG", hA.v.MieDirectionalG],
        ["distance", hA.v.Distance],
        ["azimuth", hA.v.Azimuth]
      ],
      vz = [
        ["sunPosition", hA.v.SunPosition, hA.v.SunPositionAt],
        ["up", hA.v.Up, hA.v.UpAt],
        ["vertexTint", hA.v.VertexTint, hA.v.VertexTintAt]
      ],
      Pz = [
        ["xCameraOffset", hA.v.CameraOffsetX],
        ["yCameraOffset", hA.v.CameraOffsetY],
        ["zCameraOffset", hA.v.CameraOffsetZ]
      ],
      Tz = [
        ["useSunPosition", hA.v.UseSunPosition],
        ["dithering", hA.v.Dithering],
        ["infiniteDistance", hA.v.InfiniteDistance]
      ];

    function Uz(HH, BH, LH) {
      const AH = new Oz({
        writeCmd: HH,
        warn: BH,
        followPack: Vz(LH, BH)
      });
      return AH.start(), AH
    }

    function Vz(HH, BH) {
      return LH => {
        let AH = () => {};
        const rH = HH((HH => {
          AH(), AH = () => {}, null !== HH ? AH = HH.subscribe((HH => {
            LH(function(HH, BH, LH) {
              if ("object" !== typeof HH || null === HH) return null;
              const AH = HH.skyBoxes;
              if ("object" !== typeof AH || null === AH) return null;
              if ("player" === BH) return AH;
              return Object.fromEntries(Object.entries(AH).filter((HH => {
                let [BH, AH] = HH;
                return !! function(HH) {
                  if ("object" !== typeof HH || null === HH) return !1;
                  return "earth" === HH.type || Object.entries(HH).every((HH => {
                    let [BH, LH] = HH;
                    return "type" === BH || ("" === (AH = LH) || null !== function(HH) {
                      var BH, LH, AH;
                      return "string" !== typeof HH ? null : null !== (BH = null === (LH = bz.exec(HH)) || void 0 === LH || null === (AH = LH.groups) || void 0 === AH ? void 0 : AH.base64) && void 0 !== BH ? BH : null
                    }(AH));
                    var AH
                  }))
                }(AH) || (LH(`Ignoring texture pack skybox ${BH}, whose faces are not all data URLs`, null), !1)
              })))
            }(HH.pack, null === HH.gameSource ? "player" : "customGame", BH))
          })) : LH(null)
        }));
        return () => {
          rH(), AH()
        }
      }
    }
    class Oz {
      constructor(HH) {
        var BH, LH, AH;
        this.host = HH, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Mu = !1, this.wait = null !== (BH = HH.wait) && void 0 !== BH ? BH : (HH, BH) => {
          setTimeout(BH, HH)
        }, this.loader = new Sz({
          loadImage: null !== (LH = HH.loadImage) && void 0 !== LH ? LH : Ez,
          zrH: null !== (AH = HH.zrH) && void 0 !== AH ? AH : Bz.k,
          sendReady: HH => {
            this.queue.push({
              kind: hA.ic.SkyImagesReady,
              payload: HH
            })
          },
          onLoadFailed: (BH, LH, AH) => {
            HH.warn(`sky image set ${BH} (${LH}) didn't load: the last sky stays`, AH)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Lz.c, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((HH => {
          this.write(null !== HH && void 0 !== HH ? HH : {})
        }))
      }
      onEvent(HH) {
        this.loader.onEvent(HH)
      }
      drain() {
        if (0 === this.queue.length) return;
        let HH = 0;
        for (; HH < this.queue.length && this.host.writeCmd(this.queue[HH].kind, 0, this.queue[HH].payload);) HH++;
        HH > 0 && this.queue.splice(0, HH)
      }
      dispose() {
        this.Mu = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(HH) {
        if (this.Mu) return;
        const BH = Wz(HH);
        if (!(this.written && (LH = this.written, AH = BH, LH.payload.length === AH.payload.length && LH.payload.every(((HH, BH) => HH === AH.payload[BH])) && LH.sets.length === AH.sets.length && LH.sets.every(((HH, BH) => {
            const LH = AH.sets[BH];
            return HH.orientation === LH.orientation && HH.urls.length === LH.urls.length && HH.urls.every(((HH, BH) => HH === LH.urls[BH]))
          }))))) {
          var LH, AH;
          for (const HH of BH.leftOut) this.host.warn(HH, null);
          this.written = BH, this.loader.reset(BH.sets), this.queue = this.queue.filter((HH => HH.kind !== hA.ic.SkyImagesReady)), this.queue.push({
            kind: hA.ic.SkyTable,
            payload: BH.payload
          })
        }
      }
    }
    const bz = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var kz = LH(3064),
      mz = LH(3310),
      oz = LH(268),
      Iz = LH(168),
      fz = LH(3073),
      lz = LH(3090),
      Kz = LH(233),
      cz = LH(241),
      ez = LH(3193),
      qz = LH(3223),
      gz = LH(3235),
      Nz = LH(101),
      Rz = LH(3292),
      jz = LH(3287),
      nz = LH(293),
      Fz = LH(42150);
    class Dz {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LS.k)(lA.G, (HH => {
          this.onReply((0, BS.f)(lA.G, HH), performance.now())
        }))
      }
      onFrame(HH, BH) {
        null === this.id ? this.id = HH : HH !== this.id && (this.id = HH, this.sentMs = document.hidden ? null : BH)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(HH, BH) {
        HH === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(BH - this.sentMs), this.sentMs = null)
      }
      take() {
        const HH = this.roundTripMs;
        return this.roundTripMs = null, HH
      }
      stop() {
        this.stopReplies()
      }
    }
    class wz {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(HH, BH, LH, AH) {
        const rH = HH - this.sampled >>> 0,
          SH = BH - this.timed >>> 0,
          hH = LH - this.frameUs >>> 0,
          tH = this.primed;
        return this.sampled = HH, this.timed = BH, this.frameUs = LH, this.primed = !0, !(!tH || rH > 64 || SH > 64) && (AH && hH <= 1e6 * SH && (this.windowTimed += SH, this.windowUs += hH), AH && rH > 0)
      }
      reset() {}
      snapshotAndReset() {
        const HH = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: HH,
          submitToDoneMs: null
        }
      }
    }
    const Zz = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class dz {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(HH, BH) {
        const LH = Math.min(4096, this.count + BH);
        this.samples.fill(HH, this.count, LH), this.count = LH
      }
      clear() {
        this.count = 0
      }
      take() {
        const HH = this.count;
        if (this.count = 0, HH < 30) return Zz;
        const BH = this.samples.subarray(0, HH).sort(),
          LH = LH => BH[Math.min(HH - 1, Math.floor(LH * HH))];
        return {
          lagP50Ms: LH(.5),
          lagP90Ms: LH(.9)
        }
      }
    }
    class az {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new dz
      }
      onFrame(HH, BH) {
        const LH = HH.headerWord(hA.I.Pacing),
          AH = HH.headerWord(hA.I.PacingLagUs),
          rH = (LH >>> hA.fb.LagsShift) - (this.word >>> hA.fb.LagsShift) & hA.fb.CountMask,
          SH = rH > 0 ? (AH - this.lagUs >>> 0) / rH / 1e3 : 0,
          hH = this.primed && rH <= 64 && SH <= 6e4;
        this.word = LH, this.lagUs = AH, this.primed = !0, hH && BH && rH > 0 && 0 !== (LH & hA.fb.Defaulted) && this.lags.add(SH, rH)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(HH) {
        return HH ? this.lags.take() : (this.lags.clear(), Zz)
      }
    }
    var sz = LH(3187),
      Jz = LH(34924),
      iz = LH(3195),
      pz = LH(42200),
      yz = LH(34915),
      HC = LH(3098),
      BC = LH(3200);
    const LC = {
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

    function AC(HH) {
      return new rC(HH)
    }
    class rC {
      constructor(HH) {
        this.shell = HH, this.tracker = new lz.c, this.gpu = new wz, this.pacing = new az, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Dz, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new sz.e(this.tracker, ((HH, BH, LH, AH) => {
          this.shell.mainStalled(HH, BH, LH, AH)
        }), (HH => this.shell.Km(HH))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, Jz.b)(HH.backend, HH.canvas, HH.adapterVendor), this.tracker.start((() => !HH.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, HC.c)("wasm", (() => {
          const {
            n: BH,
            sampleCount: LH
          } = (0, pz.d)();
          return `${HH.backend}, quality steps aim at up to ${BC.b.target.maxFps} fps, pixel n ${BH}, msaa ${LH}`
        }), (BH => {
          BH.setLoadCounts(HH.readLoadCounts), this.frameDebug = BH
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(HH) {
        var BH;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(HH), null === (BH = this.frameDebug) || void 0 === BH || BH.animationFrame()
      }
      sendsWent(HH, BH, LH) {
        this.ping.onFrame(HH.headerWord(hA.I.PingSent), BH), this.sendsStartMs = BH, this.sendsEndMs = LH
      }
      frameRan(HH, BH, LH, AH) {
        var rH;
        this.ping.onFrame(HH.headerWord(hA.I.PingSent), LH);
        const SH = this.tracker;
        this.pacing.onFrame(HH, SH.isSampling());
        const hH = HH.headerWord(hA.I.TickUs) / 1e3 + (0, WA.P)();
        var tH;
        (SH.Dv(hH), null === (rH = this.frameDebug) || void 0 === rH || rH.wasmFrame(HH, BH, LH, AH, SH.isSampling(), hH), null !== this.game) && (null === (tH = this.frameDebug) || void 0 === tH || tH.inGame());
        const zH = this.sendsStartMs >= BH ? this.sendsEndMs - this.sendsStartMs : 0,
          CH = Math.max(0, LH - BH - hH - zH);
        if ("drawn" !== AH) return void("paced" === AH ? (this.pacedCpuMs += CH, this.mainStall.paced()) : "skipped" === AH && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(BH), SH.onFrameStart(BH);
        this.gpu.onFrame(HH.headerWord(hA.I.GpuSampled), HH.headerWord(hA.I.GpuTimed), HH.headerWord(hA.I.GpuFrameUs), SH.isSampling()) && SH.onGpuSampleStarted(), SH.onFrameCpu(CH + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(BH)
      }
      framePaced() {
        var HH;
        this.mainStall.paced(), null === (HH = this.frameDebug) || void 0 === HH || HH.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const HH of this.timers) clearInterval(HH);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const HH = this.shell.joinedGame();
        if (HH !== this.game) {
          var BH;
          if (this.game = HH, null !== HH) null === (BH = this.frameDebug) || void 0 === BH || BH.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== HH
      }
      countFpsFrame(HH) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = HH
        }
        this.fpsFrames++;
        const BH = HH - this.fpsSpanStartMs;
        if (!(BH < gz.c)) {
          if (!document.hidden) {
            const HH = 1e3 * this.fpsFrames / BH;
            this.firstSpanFps ??= HH, this.initialFps = this.firstSpanFps, this.fpsOverTime = HH
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = HH
        }
      }
      flush() {
        const HH = this.followGame(),
          {
            cpuFrameMs: BH,
            refreshHz: LH,
            cpuBottleneck: rH,
            frameIntervalCv: SH,
            ...hH
          } = this.tracker.snapshotAndReset(),
          tH = this.shell.inGame(),
          zH = tH && this.inGameAtLastFlush,
          CH = zH ? hH : (0, fz.d)(hH),
          EH = this.pacing.snapshotAndReset(zH);
        if (this.inGameAtLastFlush = tH, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !HH || !this.shell.canSend()) return;
        const XH = performance.now(),
          YH = (0, qz.y)((0, qz.u)(XH), this.unsentPage),
          QH = function(HH, BH, LH, rH, SH, hH, tH, zH) {
            var CH, EH, XH, GH, YH;
            const uH = {},
              {
                canvas: QH
              } = HH,
              WH = (0, ez.j)({
                refreshHz: BH.refreshHz,
                msaa: HH.msaa(),
                autoMsaaOff: (0, yz.e)()
              });
            for (const MH of (0, mz.c)()) {
              const xH = MH.name;
              let vH;
              if ((0, oz.H)(xH)) vH = (0, qz.c)(xH);
              else if ((0, qz.f)(xH)) vH = zH[xH];
              else if ((0, ez.n)(xH)) vH = WH[xH];
              else switch (xH) {
                case "fps":
                  vH = rH;
                  break;
                case "yt":
                  vH = SH;
                  break;
                case "Sz":
                  vH = (0, iz.G)((0, pz.d)().n);
                  break;
                case "hz":
                  vH = Math.max(QH.width, QH.height);
                  break;
                case "tz":
                  vH = Math.min(QH.width, QH.height);
                  break;
                case "zz":
                  vH = navigator.hardwareConcurrency || null;
                  break;
                case "Cz":
                  vH = (0, CS.getWebGpuSupported)();
                  break;
                case "Ez":
                  vH = null === HH.fallbackReason ? null : LC[HH.fallbackReason];
                  break;
                case "Xz":
                  vH = BH.cpuFrameMs;
                  break;
                case "Gz":
                  vH = BH.refreshHz;
                  break;
                case "Yz":
                  vH = BH.cpuBottleneck;
                  break;
                case "uz":
                  vH = BH.frameIntervalCv;
                  break;
                case "Qz":
                  vH = BH.frameMs;
                  break;
                case "Wz":
                  vH = BH.tickMs;
                  break;
                case "Uz":
                  vH = BH.mainBusyShare;
                  break;
                case "Vz":
                  vH = BH.mainProbeDelayMs;
                  break;
                case "Mz":
                  vH = BH.longAnimationFramesPerMin;
                  break;
                case "xz":
                  vH = BH.longAnimationFrameTimeShare;
                  break;
                case "vz":
                  vH = BH.longAnimationFrameScriptShare;
                  break;
                case "Pz":
                  vH = BH.framesOver50msPerMin;
                  break;
                case "Tz":
                  vH = BH.framesOver100msPerMin;
                  break;
                case "Oz":
                  vH = BH.gpuPassMs;
                  break;
                case "bz":
                  vH = BH.gpuSubmitToDoneMs;
                  break;
                case "kz":
                  vH = LH.lagP50Ms;
                  break;
                case "mz":
                  vH = LH.lagP90Ms;
                  break;
                case "jz":
                  vH = (0, kz.i)(hH);
                  break;
                case "rz":
                  vH = tH;
                  break;
                case "oz":
                case "Iz":
                case "fz":
                case "lz":
                case "Kz":
                case "cz":
                case "ez":
                case "qz":
                case "gz":
                case "Nz":
                case "Rz":
                case "nz":
                case "Fz":
                case "Dz":
                case "wz":
                  vH = null;
                  break;
                case "tC":
                  vH = (0, CS.getPlatformType)();
                  break;
                case "zC":
                  vH = (0, CS.getGpuVendor)();
                  break;
                case "CC":
                  vH = Fz.b[HH.backend];
                  break;
                case "XC":
                  vH = (0, Nz.d)();
                  break;
                case "YC":
                  vH = (0, CS.getOperatingSystem)();
                  break;
                case "uC":
                  vH = (0, CS.getTrafficSource)();
                  break;
                case "QC":
                  vH = null !== (CH = AH.c.get("gameEntrySource")) && void 0 !== CH ? CH : Iz.f;
                  break;
                case "WC":
                  vH = null !== (EH = BH.frameLimiter) && void 0 !== EH ? EH : Iz.f;
                  break;
                case "MC":
                  vH = (0, Kz.i)();
                  break;
                case "xC":
                  vH = null !== (XH = (0, cz.e)()) && void 0 !== XH ? XH : Iz.f;
                  break;
                case "vC":
                  vH = (0, Kz.d)(QH.width, QH.height);
                  break;
                case "PC":
                  vH = (0, mz.g)(-(new Date).getTimezoneOffset());
                  break;
                case "kC":
                  vH = null !== (GH = HH.fallbackReason) && void 0 !== GH ? GH : Iz.f;
                  break;
                case "IC":
                  vH = "ready";
                  break;
                case "fC":
                  vH = (0, CS.getSoftwareRenderer)();
                  break;
                case "UC":
                  vH = (0, Rz.c)();
                  break;
                case "VC":
                  vH = (0, jz.e)().replayState;
                  break;
                case "OC":
                  vH = (0, jz.e)().replaySelection;
                  break;
                case "bC":
                  vH = null !== HH.shaderPackReach() ? "true" : "false";
                  break;
                case "lC":
                  vH = null !== (YH = HH.shaderPackReach()) && void 0 !== YH && YH.sceneDepth ? "true" : "false";
                  break;
                case "KC": {
                  const BH = HH.shaderPackReach();
                  vH = null !== BH && void 0 !== BH && BH.sunShadow ? "all" : null !== BH && void 0 !== BH && BH.airShadow ? "air" : "none";
                  break
                }
                case "cC":
                  vH = nz.z;
                  break;
                case "nC":
                  vH = (0, qz.j)();
                  break;
                case "TC": {
                  const BH = HH.KQ();
                  vH = null === BH ? Iz.f : String(BH);
                  break
                }
                case "mC":
                case "oC":
                  vH = Iz.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${xH}`)
              }
              if (void 0 === vH) throw new Error(`Metric ${xH} has no value`);
              uH[xH] = vH
            }
            return uH
          }(this.shell, {
            cpuFrameMs: BH,
            refreshHz: LH,
            cpuBottleneck: rH,
            frameIntervalCv: SH,
            ...CH
          }, EH, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), YH);
        if (! function(HH, BH, LH) {
            return (0, AL.b)(), HH(uH.q.Send, BH, LH)
          }(this.shell.writeCmd, GH.nd, function(HH) {
            const BH = (0, RH.g)((0, hL.f)(HH)),
              LH = new Uint8Array(uH.ge.BYTES + BH.length);
            return new DataView(LH.buffer).setUint16(0, hL.d.AnalyticsUpdate, !0), LH.set(BH, uH.ge.BYTES), LH
          }(QH))) return this.unsentPage = YH, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, kz.h), (0, qz.r)(QH, "wasm", XH)
      }
    }
    var SC = LH(40657);

    function hC(HH, BH, LH) {
      const AH = new Map;
      return (0, SC.d)(((HH, LH, AH) => BH.ph(HH, LH, AH)), ((BH, LH, rH) => {
        const SH = `${BH},${LH},${rH}`;
        return AH.has(SH) || AH.set(SH, (0, dB.d)(HH, BH, LH, rH)), AH.get(SH)
      }), LH)
    }
    var tC = LH(40661),
      zC = LH(42192);

    function CC(HH) {
      const BH = null !== HH && 0 !== (uH.y.playerFlags(HH.api.apiView, 0) & uH.Md.CursorAim);
      BH !== (0, zC.k)() && (0, zC.F)(BH, null !== HH)
    }

    function EC(HH) {
      return (0, fA.d)(lA.C, HH)
    }
    var XC = LH(42343);
    const GC = new SH.e((HH => LH(54469)(`./${HH}/${HH}Client`)));
    let YC = null,
      uC = null;
    async function QC(HH) {
      YC ??= LH.e(32).then((() => LH(40091))).then((HH => {
        uC = HH.createDefaultClientPlugins
      }), (HH => {
        throw YC = null, HH
      })), await Promise.all([GC.load(HH), YC])
    }

    function WC(HH) {
      HH.load(new DB(hr, new Cr))
    }
    let MC = !1;
    const xC = new WeakMap;

    function vC(HH) {
      try {
        HH()
      } catch (BH) {
        console.error("[bloxd-wasm-client] a session-end step failed", BH)
      }
    }

    function PC(HH, BH) {
      ! function() {
        var HH, BH;
        Ar.Howler.volume();
        const LH = Ar.Howler;
        null === (HH = LH._autoResume) || void 0 === HH || HH.call(LH), null === (BH = LH._autoSuspend) || void 0 === BH || BH.call(LH)
      }();
      const LH = new PH(BH.core, BH.memory, BH.audio);
      let SH;
      try {
        SH = new fr(LH, BH.options)
      } catch (GH) {
        return HH.crash(Kr.x, GH), null
      }(0, zH.g)(lr(LH, SH));
      const EH = new Ft({
        running: HH,
        api: LH,
        core: BH.core,
        memory: BH.memory,
        staleOr: BH.staleOr,
        reportFault: BH.reportReplayFault,
        options: BH.options,
        sessionInfo: BH.sessionInfo,
        replayShaderPack: BH.replayShaderPack
      });
      (0, WA.D)();
      const XH = new iA({
        api: LH,
        tables: SH,
        sessionInfo: BH.sessionInfo,
        gameFactory: HH => GC.loadedFactory(HH),
        defaultPlugins: (HH, BH, LH, AH) => {
          if (null === uC) throw new Error("The default plugins started before they loaded");
          return uC(HH, BH, LH, AH)
        },
        serverOptions: BH.options,
        onNetEvent: HH => {
          EH.netEvent(HH), BH.onNetEvent(HH)
        },
        setLocalOptions: BH => {
          wt(HH, {
            changes: BH,
            reset: !1
          })
        },
        playSound: (HH, LH, AH, rH, SH, hH, tH) => BH.audio.playGame(HH, LH, AH, rH, SH, hH, tH),
        preloadSounds: HH => {
          BH.audio.preload(function(HH) {
            const BH = [];
            for (const LH of HH) {
              const HH = KB(LH);
              if (null !== HH)
                for (let LH = HH[0]; LH < HH[0] + HH[1]; LH++) BH.push(LH)
            }
            return BH
          }(HH))
        },
        onSessionEnd: () => {
          vC(rH.i), vC(Wr), vC((() => {
            AH.c.set({
              openInGameMenuName: null
            })
          })), vC((() => {
            BH.audio.endSession()
          }))
        },
        beforeWrite: BH.beforeWrite,
        beforeOp: BH.beforeOp,
        cameraScreen: Qr,
        showCameraFacing: Mr,
        reportCameraFault: BH.reportCameraFault,
        onEventOverflow: BH.onEventOverflow,
        screenBandY: tH.k,
        replayEntities: EH.entityHooks,
        hasPackModel: BH.hasPackModel
      });
      return XH.attach(HH), xC.set(XH, EH), Br(XH.items, BH.audio),
        function(HH) {
          HH.setClientFreeCameraGrant("isDev", !1);
          const BH = BH => {
            HH.setClientFreeCameraGrant("hasDeveloperRank", BH.playerHasRank("developer"))
          };
          (0, hH.m)("userContextUpdated", BH)
        }(XH), MC || (MC = !0, (0, hH.m)("appManagerUpdated|openInGameMenuName", (HH => {
          !HH && (0, CH.p)().includes(CH.d) && (0, CH.t)(CH.d)
        }))), XH
    }

    function TC(HH) {
      try {
        HH.closeGame()
      } finally {
        var BH;
        null === (BH = xC.get(HH)) || void 0 === BH || BH.stop(), xC.delete(HH)
      }
    }
  },
  37110: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => WH,
      i: () => jH,
      k: () => IH,
      o: () => KH
    });
    var AH = LH(37146),
      rH = LH(37112),
      SH = LH(37120),
      hH = LH(37127);

    function tH(HH, BH, LH) {
      const AH = "object" === typeof HH && null !== HH ? HH : {},
        rH = function(HH, BH, LH) {
          if (!Array.isArray(HH) || 0 === HH.length) return [];
          const AH = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const tH of (0, hH.i)(HH, hH.e.DEFAULT_FONT_SIZE, LH)) {
            if ("text" !== tH.kind) {
              AH[AH.length - 1].items.push({
                content: tH,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === tH.text.length) continue;
            const HH = AH[AH.length - 1].items.reduce(((HH, BH) => HH + ("text" === BH.content.kind ? (0, SH.b)(BH.content.text) : BH.chars)), 0);
            (0, SH.e)(tH.text, HH).forEach(((HH, BH) => {
              BH > 0 && AH.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), HH.length > 0 && AH[AH.length - 1].items.push({
                content: {
                  ...tH,
                  text: HH
                },
                chars: HH.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let rH = hH.e.VERTICAL_PADDING / 2;
          for (const SH of AH) {
            if (0 === SH.items.length) continue;
            const {
              width: HH,
              height: AH,
              sizes: tH
            } = (0, hH.h)(SH.items.map((HH => HH.content)), BH, LH);
            SH.items.forEach(((HH, BH) => {
              HH.size = tH[BH]
            })), SH.width = HH, SH.height = AH, SH.y = rH, rH += AH + hH.e.LINE_SPACING
          }
          return AH
        }(AH.content, BH, LH);
      let tH = 0,
        zH = hH.e.VERTICAL_PADDING,
        CH = 0;
      for (const SH of rH) {
        tH = Math.max(tH, SH.width + 2 * hH.e.HORIZONTAL_PADDING), zH += SH.height + hH.e.LINE_SPACING;
        for (const HH of SH.items) CH += HH.chars
      }
      const EH = "string" === typeof AH.backgroundColor ? AH.backgroundColor : "#22283b";
      return {
        width: tH,
        height: zH,
        chars: CH,
        draw: (HH, BH) => {
          const AH = [];
          if (HH.fillStyle = EH, HH.fillRect(0, 0, tH, zH), null === BH)
            for (const SH of rH) SH.items.length > 0 && (0, hH.t)(SH.items.map((HH => HH.content)), 0, SH.y, SH.height, HH, LH, AH);
          else {
            let SH = 0;
            for (const tH of rH)
              for (const rH of tH.items) {
                if (SH >= BH) break;
                const zH = "text" === rH.content.kind ? {
                  ...rH.content,
                  text: rH.content.text.substring(0, BH - SH)
                } : rH.content;
                (0, hH.p)(zH, rH.size.x, tH.y, tH.height, HH, LH, AH, rH.size.width), SH += rH.chars
              }
          }(0, hH.m)(AH, HH)
        }
      }
    }
    var zH = LH(37135),
      CH = LH(37139);
    const EH = 256,
      XH = 1024,
      GH = {
        width: 1,
        height: 7 / 8
      };
    var YH = LH(37149);
    const uH = {
      leaderboard: ""
    };
    var QH = LH(37157);
    const WH = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      MH = 2048,
      xH = 256,
      vH = 10,
      PH = 4,
      TH = 65536,
      UH = new TextDecoder;
    let VH = QH.o,
      OH = -1;
    const bH = new Map,
      kH = new Map;
    let mH = 0;
    const oH = new TextEncoder;

    function IH(HH, BH) {
      const LH = oH.encode(JSON.stringify(BH)),
        AH = new Uint8Array(LH.length + 1);
      return AH[0] = HH, AH.set(LH, 1), AH
    }
    const fH = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        Ot: null,
        hideNameSeed: null
      },
      lH = [IH(WH.Nametag, fH), IH(WH.Nametag, {
        ...fH,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), IH(WH.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...AH.c.map(((HH, BH) => IH(WH.Board, {
        shared: {
          text: "Ag",
          textSize: BH
        },
        w: 0,
        h: 0
      })))];

    function KH(HH) {
      QH.h.load().then((() => {
        if (HH()) return;
        const BH = (0, rH.h)(1, 1, {
          willReadFrequently: !0
        });
        var LH;
        BH && (LH = BH.canvas, lH.map((HH => jH(HH, LH))))
      }))
    }
    let cH = QH.q;

    function eH() {
      bH.clear(), kH.clear()
    }

    function qH(HH, BH) {
      const LH = HH.get(BH);
      return void 0 !== LH && (HH.delete(BH), HH.set(BH, LH)), LH
    }

    function gH(HH, BH, LH) {
      HH.set(BH, LH), HH.size > xH && HH.delete(HH.keys().next().value)
    }

    function NH(HH, BH, LH) {
      if (HH === WH.Nametag) {
        let HH = qH(bH, BH);
        return void 0 === HH && (HH = (0, zH.e)(JSON.parse(BH), LH, VH), gH(bH, BH, HH)), HH
      }
      if (HH === WH.MultilineText) {
        var rH;
        const HH = JSON.parse(BH),
          AH = JSON.stringify(null !== (rH = HH.box) && void 0 !== rH ? rH : null),
          SH = "number" === typeof HH.shown ? HH.shown : null;
        let hH = qH(kH, AH);
        void 0 === hH && (hH = tH(HH.box, LH, VH), gH(kH, AH, hH));
        const zH = null === SH ? null : Math.min(Math.max(0, Math.floor(SH)), hH.chars),
          CH = hH;
        return {
          width: CH.width,
          height: CH.height,
          draw: HH => {
            CH.draw(HH, zH)
          }
        }
      }
      if (HH === WH.Board) return function(HH, BH) {
        var LH;
        if (!BH.canSeePlayerWrittenText) return null;
        const {
          shared: rH,
          w: SH = 0,
          h: hH = 0
        } = HH, tH = !SH;
        let zH;
        if (tH) {
          var YH, uH;
          zH = null !== (YH = null === rH || void 0 === rH || null === (uH = rH.text) || void 0 === uH ? void 0 : uH.toString()) && void 0 !== YH ? YH : ""
        } else {
          if ("string" !== typeof(null === rH || void 0 === rH ? void 0 : rH.text)) return null;
          zH = rH.text
        }
        if ("" === zH.trim()) return null;
        const QH = null !== (LH = null === rH || void 0 === rH ? void 0 : rH.textSize) && void 0 !== LH ? LH : 0,
          WH = AH.c[QH].ingameFontSize;
        let MH = GH,
          xH = EH;
        tH || (zH = (0, AH.n)(zH, QH, SH, hH), MH = (0, AH.u)(SH, hH), xH = Math.min(EH, XH / Math.max(MH.width, MH.height)));
        const vH = Math.round(xH * MH.width),
          PH = Math.round(xH * MH.height),
          TH = xH / EH;
        return {
          width: vH,
          height: PH,
          draw: HH => {
            CH.d.fontSize = WH * TH, CH.d.fontWeight = "bold", CH.d.font = "'Jetbrains Mono', monospace", CH.d.drawText(HH, zH, 0, (-10 - 7 * QH) * TH, vH, PH)
          }
        }
      }(JSON.parse(BH), VH);
      if (HH === WH.Leaderboard) return function(HH, BH, LH) {
        var AH;
        const rH = (0, YH.f)(HH.opts, uH),
          SH = (0, YH.d)(rH, LH),
          hH = {
            top: (0, YH.e)(rH, (0, YH.g)(HH.top)),
            around: null !== (AH = HH.around) && void 0 !== AH ? AH : null,
            showPlayerText: BH.canSeePlayerWrittenText,
            localPlayerDbId: BH.localPlayerDbId
          };
        return {
          width: SH.pixelWidth,
          height: SH.pixelHeight,
          draw: HH => {
            const {
              a: BH,
              d: LH
            } = HH.getTransform();
            (0, YH.b)(HH, Math.round(SH.pixelWidth * BH), Math.round(SH.pixelHeight * LH), SH, rH, hH)
          }
        }
      }(JSON.parse(BH), VH, MH);
      throw new Error(`unknown text plane kind ${HH}`)
    }
    const RH = 2 ** Math.floor(Math.log2(MH));

    function jH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (HH.length < 2) return [0, 0];
        const SH = (0, rH.d)(BH);
        if (!SH) return [0, 0];
        const hH = cH();
        hH !== OH && (OH = hH, eH());
        const [tH] = HH, zH = UH.decode(HH.subarray(1));
        let CH;
        tH !== WH.Board && tH !== WH.Leaderboard || !VH.canSeePlayerWrittenText || VH.glyphsShown(zH), SH.save();
        try {
          CH = NH(tH, zH, SH)
        } finally {
          SH.restore()
        }
        if (null === CH || !(CH.width > 0 && CH.height > 0)) return [0, 0];
        const EH = Math.min(1, MH / CH.width, MH / CH.height),
          XH = HH => AH ? function(HH) {
            const BH = 2 ** Math.ceil(Math.log2(HH));
            return Math.min(RH, BH - HH > HH - BH / 2 ? BH / 2 : BH)
          }(HH) : Math.min(MH, Math.ceil(HH * EH)),
          [GH, YH] = [XH(CH.width), XH(CH.height)];
        ! function(HH, BH, LH, AH, rH) {
          const SH = Math.max(HH.width, LH),
            hH = Math.max(HH.height, AH),
            tH = rH || SH * hH > Math.max(PH * LH * AH, TH),
            [zH, CH] = tH ? [LH, AH] : [SH, hH];
          zH === HH.width && CH === HH.height ? BH.clearRect(0, 0, zH, CH) : (HH.width = zH, HH.height = CH)
        }(BH, SH, GH, YH, LH), SH.save();
        try {
          const [HH, BH] = AH ? [GH / CH.width, YH / CH.height] : [EH, EH];
          1 === HH && 1 === BH || SH.scale(HH, BH), CH.draw(SH)
        } finally {
          SH.restore()
        }
        return [GH, YH]
      } catch (SH) {
        ! function(HH, BH) {
          mH < vH && (mH++, console.warn(`[bloxd-wasm-client] ${HH}`, BH))
        }("could not raster a text plane", SH);
        try {
          BH.width = 1
        } catch {}
        return [0, 0]
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);