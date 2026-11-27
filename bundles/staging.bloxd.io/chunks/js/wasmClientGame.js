export const id = 69;
export const ids = [69];
export const modules = {
  54746: (WW, iW, OW) => {
    var mW = {
      "./bedwars/bedwarsClient": [40505, 9],
      "./bridgeBattle/bridgeBattleClient": [40513, 10],
      "./buildAFactory2/buildAFactory2Client": [39669, 89, 86, 87, 257, 274, 11],
      "./classic/classicClient": [40522, 12],
      "./classic/smp2/smp2Client": [40525, 13],
      "./clutch/clutchClient": [40548, 14],
      "./containmentBreach/containmentBreachClient": [40552, 15],
      "./cooking/cookingClient": [40694, 16],
      "./defusal/defusalClient": [40699, 17],
      "./frontline/frontlineClient": [40701, 89, 86, 87, 18],
      "./goalRush/goalRushClient": [40728, 19],
      "./greenville/greenvilleClient": [40736, 181, 225, 20],
      "./hideseek/hideseekClient": [40765, 21],
      "./luckyBedwars/luckyBedwarsClient": [40771, 22],
      "./murderMystery/murderMysteryClient": [40780, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40788, 24],
      "./oneBlock/oneBlockClient": [40794, 25],
      "./plots/plotsClient": [40809, 26],
      "./pvpCiv/pvpCivClient": [40886, 27],
      "./secretSanta/secretSantaClient": [40888, 28],
      "./shooting/shootingClient": [40890, 281, 29],
      "./skyIslands/skyIslandsClient": [40896, 30],
      "./skyblock/skyblockClient": [39715, 89, 266, 257, 181, 248, 31],
      "./tsunami/tsunamiClient": [40900, 32]
    };

    function EW(WW) {
      if (!OW.o(mW, WW)) return Promise.resolve().then((() => {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }));
      var iW = mW[WW],
        EW = iW[0];
      return Promise.all(iW.slice(1).map(OW.e)).then((() => OW(EW)))
    }
    EW.keys = () => Object.keys(mW), EW.id = 54746, WW.exports = EW
  },
  40233: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      g: () => EW
    });
    var mW = OW(27);

    function EW(WW) {
      return "refetchCode" === WW || "devDownloadJson" === WW || WW.startsWith("Plugin")
    }

    function NW(WW, iW) {
      "refetchCode" !== WW ? "Plugin|MobAiPlugin|ShowPetUi" !== WW ? Promise.all([OW.e(128), OW.e(129), OW.e(118), OW.e(120), OW.e(247)]).then((() => OW(53909))).then((OW => {
        let {
          runClientGameMessage: mW
        } = OW;
        mW(WW, iW)
      })).catch((iW => {
        console.error(`Game message ${WW} failed`, iW)
      })) : mW.l.iZ("showPetUi", iW) : mW.l.iZ("refetchCode")
    }
  },
  10106: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      e: () => PW,
      h: () => LW,
      j: () => cW
    });
    var mW = OW(27);
    const EW = "touchSprintChanged";
    let NW = !0;

    function PW() {
      return NW
    }

    function LW(WW) {
      WW !== NW && (NW = WW, mW.l.iZ(EW, WW))
    }

    function cW(WW, iW) {
      return null !== WW && null !== iW && WW > iW
    }
  },
  54737: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      e: () => EW
    });
    const mW = ["recording", "freecam", "keyframe"];

    function EW() {
      const WW = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(WW[1]) << 32n | BigInt(WW[0])
    }
  },
  35157: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW
    });
    var mW = OW(25);
    const EW = 24,
      NW = "farNametags",
      PW = 1e5;

    function LW() {
      var WW;
      return null === (WW = mW.d.get("showDistantNametags")) || void 0 === WW || WW
    }

    function cW() {
      var WW;
      return null !== (WW = function() {
        const WW = new URLSearchParams(window.location.search).get(NW),
          iW = null === WW || "" === WW ? NaN : Number(WW);
        return Number.isFinite(iW) && iW >= 0 ? Math.min(iW, PW) : null
      }()) && void 0 !== WW ? WW : LW() ? 0 : EW
    }
  },
  54728: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      blockIdOf: () => tw.c,
      clearWasmCameraScreen: () => ME,
      creativeItemIds: () => km.creativeItemIds,
      decodeMapSettings: () => lw,
      drainTextRerasters: () => Oc.d,
      enchantmentPerksOf: () => km.enchantmentPerksOf,
      endGameHost: () => yw,
      followCursorAim: () => xw,
      followMenuPrefs: () => sN,
      loadAudio: () => sw,
      loadClientGame: () => kw,
      loadTextIcons: () => Oc.h,
      rasterText: () => ic.h,
      readBoardToEdit: () => ww,
      readDrawCensus: () => Aw.c,
      setTextHost: () => Oc.m,
      setTextLocalPlayer: () => Oc.o,
      showInCreativeInvenOf: () => km.showInCreativeInvenOf,
      startGameHost: () => Yw,
      startShellAnalytics: () => Nw,
      startSkyFeed: () => yc,
      textChanged: () => Oc.q,
      warmText: () => ic.l,
      wasmCameraScreen: () => sE
    });
    OW(37752);
    var mW = OW(25),
      EW = OW(37972),
      NW = OW(40394),
      PW = OW(27),
      LW = OW(4607),
      cW = OW(37970),
      wW = OW(1294),
      tW = OW(632),
      ZW = OW(39396),
      xW = OW(5546),
      lW = OW(42158),
      AW = OW(42094);
    const bW = AW.Tb / 4,
      jW = AW.t.PlaySound,
      UW = AW.t.SoundReset,
      kW = xW.Q.ReplayFailed,
      sW = xW.Q.RecorderEvent;
    class MW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = WW, this.memory = iW, this.audio = OW, this.serverIds = new Int32Array(256).fill(AW.kd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(AW.z.BYTES)), this.renderPtr = 0, this.aZ = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new AW.cb(WW, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.xNW(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(WW, iW) {
        const OW = this.eventView();
        return new Uint8Array(OW.buffer, OW.byteOffset + WW, iW)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return AW.z.localId(this.apiView, 0)
      }
      localDeaths() {
        return AW.z.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const WW = this.apiView,
          iW = AW.z.entRenderPtr(WW, 0),
          OW = AW.z.entVisPtr(WW, 0),
          mW = AW.z.entCapacity(WW, 0);
        if (iW !== this.renderPtr || OW !== this.visPtr || mW !== this.aZ || this.renderBuffer !== this.buffer) {
          this.renderPtr = iW, this.visPtr = OW, this.aZ = mW, this.renderBuffer = this.buffer;
          const WW = this.memoryView(Float32Array, iW, mW * bW, "the render array"),
            EW = this.memoryView(Uint8Array, OW, mW, "the visibility array");
          this.renderCapacity = WW && EW ? mW : 0, this.render = WW && EW ? WW : new Float32Array(0), this.vis = WW && EW ? EW : new Uint8Array(0)
        }
      }
      memoryView(WW, iW, OW, mW) {
        try {
          return (0, lW.p)(WW, this.memory().buffer, iW, OW, mW)
        } catch (EW) {
          return this.keepCorruption(EW), null
        }
      }
      memoryData(WW, iW, OW, mW) {
        try {
          return (0, lW.g)(this.memory().buffer, WW, iW, OW, mW)
        } catch (EW) {
          return this.keepCorruption(EW), null
        }
      }
      scratchData(WW, iW) {
        const OW = this.scratch(),
          mW = this.scratchView;
        return (null === mW || void 0 === mW ? void 0 : mW.buffer) === this.memory().buffer && mW.byteOffset === OW && mW.byteLength >= WW ? mW : (this.scratchView = this.memoryData(OW, WW, 8, iW), this.scratchView)
      }
      reportCorruption(WW) {
        this.keepCorruption(new lW.e(WW))
      }
      keepCorruption(WW) {
        if (!(WW instanceof lW.e)) throw WW;
        this.corruption ??= WW
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(WW, iW, OW) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: mW,
          len: EW
        } = WW;
        this.eventsPtr = mW, this.eventsLen = EW, this.eventsBuffer = null;
        const NW = this.eventView();
        for (let wW = 0; wW < EW;) {
          const WW = NW.getUint32(wW, !0),
            OW = 65535 & WW,
            mW = WW >>> 16,
            EW = wW + xW.N;
          if (OW === AW.t.EntitySpawned) {
            var PW;
            if (mW !== AW.Zb.BYTES) throw TW(OW, wW, mW);
            const WW = AW.Zb.serverId(NW, EW);
            this.spawned(WW, AW.Zb.index(NW, EW), AW.Zb.kind(NW, EW)), null === (PW = iW.entityAdded) || void 0 === PW || PW.call(iW, WW)
          } else if ((OW === AW.t.ChunkSlot || OW === AW.t.EntityInfoChanged) && !(0, AW.oe)(OW, NW, EW, mW, iW)) throw TW(OW, wW, mW);
          wW = EW + (0, xW.xe)(mW)
        }
        try {
          var LW;
          null === (LW = iW.afterPrescan) || void 0 === LW || LW.call(iW), this.throwCorruption(), !OW() && this.dispatch(WW, iW, OW) && (this.throwCorruption(), this.applyListener(), iW.afterWalk(WW.kind)), this.throwCorruption()
        } catch (cW) {
          throw cW instanceof lW.e && (this.corruption ??= cW), cW
        } finally {
          OW() || null !== this.corruption || this.applyDespawns(EW, iW)
        }
      }
      applyDespawns(WW, iW) {
        const OW = this.eventView();
        for (let EW = 0; EW < WW;) {
          const WW = OW.getUint32(EW, !0),
            NW = EW + xW.N;
          if ((65535 & WW) === AW.t.EntityDespawned && WW >>> 16 === AW.Zb.BYTES) {
            const WW = AW.Zb.serverId(OW, NW);
            var mW;
            if (this.despawned(WW, AW.Zb.index(OW, NW))) null === (mW = iW.entityRemoved) || void 0 === mW || mW.call(iW, WW)
          }
          EW = NW + (0, xW.xe)(WW >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(WW, iW, OW) {
        const {
          len: mW,
          net: EW,
          netOffsets: NW
        } = WW;
        let PW = this.eventView(),
          LW = 0;
        for (let YW = 0; YW < mW;) {
          const WW = PW.getUint32(YW, !0),
            mW = 65535 & WW,
            JW = WW >>> 16,
            hW = YW + xW.N;
          let HW = !1;
          if (LW < EW.length && NW[LW] === YW) iW.netEvent(EW[LW]), LW++, HW = !0;
          else if (mW === xW.Q.LocalPlayerBound) {
            var cW;
            if (JW !== xW.Bb) throw TW(mW, YW, JW);
            null === (cW = iW.localPlayerBound) || void 0 === cW || cW.call(iW, PW.getInt32(hW, !0)), HW = !0
          } else if (mW === xW.Q.LocalHurt) {
            var wW;
            if (JW !== xW.xb) throw TW(mW, YW, JW);
            null === (wW = iW.localHurt) || void 0 === wW || wW.call(iW, PW.getInt32(hW, !0), PW.getFloat32(hW + 4, !0), PW.getUint32(hW + 8, !0)), HW = !0
          } else if (mW === xW.Q.AttackHit) {
            var tW;
            if (JW !== xW.b) throw TW(mW, YW, JW);
            const WW = PW.getFloat32(hW, !0),
              OW = PW.getFloat32(hW + 4, !0),
              EW = PW.getFloat32(hW + 8, !0),
              NW = PW.getUint32(hW + 12, !0);
            null === (tW = iW.attackHit) || void 0 === tW || tW.call(iW, WW, OW, EW, 0 !== (NW & xW.j.Crit), 0 !== (NW & xW.j.HitSelf))
          } else if (mW === xW.Q.PhysicsType) {
            var ZW;
            if (JW !== xW.fc) throw TW(mW, YW, JW);
            null === (ZW = iW.physicsType) || void 0 === ZW || ZW.call(iW, PW.getUint32(hW, !0), PW.getInt32(hW + 4, !0)), HW = !0
          } else if (mW === xW.Q.VehicleEffect) {
            var lW;
            const WW = yW(PW, hW, JW);
            if (null === WW) throw TW(mW, YW, JW);
            null === (lW = iW.vehicleEffect) || void 0 === lW || lW.call(iW, WW.op, WW.name, WW.icon, WW.level, WW.durationMs), HW = !0
          } else if (mW === xW.Q.ZoomChanged) {
            var bW;
            if (JW !== xW.be) throw TW(mW, YW, JW);
            null === (bW = iW.zoomChanged) || void 0 === bW || bW.call(iW, PW.getFloat32(hW, !0), PW.getUint8(hW + 4)), HW = !0
          } else if (mW === xW.Q.ZoomDisabled) {
            var MW;
            if (0 !== JW) throw TW(mW, YW, JW);
            null === (MW = iW.zoomDisabled) || void 0 === MW || MW.call(iW), HW = !0
          } else if (mW === xW.Q.BhopDisabled) {
            var KW;
            if (0 !== JW) throw TW(mW, YW, JW);
            null === (KW = iW.bhopDisabled) || void 0 === KW || KW.call(iW), HW = !0
          } else if (mW === xW.Q.GameCamera) {
            var SW;
            null === (SW = iW.gameCamera) || void 0 === SW || SW.call(iW, new Uint8Array(PW.buffer, PW.byteOffset + hW, JW).slice()), HW = !0
          } else if (mW === AW.t.ChunkSlot || mW === AW.t.EntityInfoChanged);
          else if (mW >= jW && mW <= UW) {
            if (this.audio && !this.audio.onAudioEvent(mW, PW, hW, JW)) throw TW(mW, YW, JW)
          } else if (mW >= kW && mW <= sW) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(mW, PW, hW, JW)) throw TW(mW, YW, JW);
              HW = !0
            }
          } else if (mW >= AW.Dd && mW <= AW.Fd && mW !== xW.Q.EnvLighting) {
            if (!(0, AW.oe)(mW, PW, hW, JW, iW)) throw TW(mW, YW, JW);
            HW = !0
          }
          if (HW) {
            if (OW()) return !1;
            PW = this.eventView()
          }
          YW = hW + (0, xW.xe)(JW)
        }
        return !OW()
      }
      applyListener() {
        var WW;
        if (!this.audio) return;
        const iW = AW.z.audioViewPtr(this.apiView, 0),
          OW = this.memory().buffer;
        let mW = this.audioView;
        (null === (WW = mW) || void 0 === WW ? void 0 : WW.buffer) === OW && mW.byteOffset === iW || (mW = (0, lW.g)(OW, iW, AW.D.BYTES, 8, "the audio view"), this.audioView = mW), mW && this.audio.applyListener(mW)
      }
      indexOf(WW) {
        return this.indexById.get("number" === typeof WW ? WW : +WW)
      }
      isLocal(WW) {
        return WW !== AW.kd && WW === AW.z.localId(this.apiView, 0)
      }
      Vk(WW) {
        const iW = [0, 0, 0];
        return this.readPosition("number" === typeof WW ? WW : +WW, iW) ? iW : null
      }
      readPosition(WW, iW) {
        const OW = this.apiView;
        if (void 0 !== this.indexById.get(WW) && this.isLocal(WW)) {
          for (let WW = 0; WW < 3; WW++) iW[WW] = AW.z.localPos(OW, 0, WW);
          return !0
        }
        return this.readDrawnPosition(WW, iW)
      }
      readDrawnPosition(WW, iW) {
        const OW = this.apiView,
          mW = this.indexById.get(WW);
        if (void 0 === mW || mW >= this.renderCapacity) return iW[0] = iW[1] = iW[2] = NaN, !1;
        const EW = mW * bW;
        for (let NW = 0; NW < 3; NW++) iW[NW] = this.render[EW + NW] + AW.z.origin(OW, 0, NW);
        return !0
      }
      checkValid(WW) {
        return void 0 !== this.indexOf(WW)
      }
      isAlive(WW) {
        const iW = this.indexOf(WW);
        if (void 0 === iW) return null;
        if (this.ensureViews(), iW >= this.renderCapacity) return null;
        const OW = this.vis[iW];
        return 0 === OW ? null : 0 !== (OW & AW.ne.Alive)
      }
      getEntityType(WW) {
        const iW = this.indexOf(WW);
        return void 0 === iW ? this.isLocal("number" === typeof WW ? WW : +WW) ? "Player" : null : SW(this.kinds[iW])
      }
      spawned(WW, iW, OW) {
        if (iW >= 1048576) throw new lW.e(`entity ${WW} spawned at index ${iW}`);
        this.ensureIndex(iW), this.serverIds[iW] === WW && null !== this.idStr[iW] || (this.idStr[iW] = String(WW)), this.serverIds[iW] = WW, this.kinds[iW] = OW, this.indexById.set(WW, iW)
      }
      despawned(WW, iW) {
        let OW = !1;
        return this.indexById.get(WW) === iW && (this.indexById.delete(WW), OW = !0), iW < this.serverIds.length && this.serverIds[iW] === WW && (this.serverIds[iW] = AW.kd, this.kinds[iW] = 0, this.idStr[iW] = null), OW
      }
      ensureIndex(WW) {
        const iW = this.serverIds.length;
        if (WW < iW) return;
        let OW = 2 * iW;
        for (; OW <= WW;) OW *= 2;
        const mW = new Int32Array(OW).fill(AW.kd);
        mW.set(this.serverIds), this.serverIds = mW;
        const EW = new Uint16Array(OW);
        EW.set(this.kinds), this.kinds = EW;
        for (let NW = iW; NW < OW; NW++) this.idStr.push(null)
      }
      eventView() {
        const WW = this.memory().buffer;
        return WW !== this.eventsBuffer && (this.eventsBuffer = WW, this.events = new DataView(WW, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const WW = this.memory().buffer;
        this.buffer = WW, this.viewPtr < 0 && (this.viewPtr = this.core.lNW()), this.view = new DataView(WW, this.viewPtr, AW.z.BYTES), this.rereadDirectory()
      }
    }

    function KW(WW) {
      return WW >>> AW.e === AW.v.Item
    }

    function SW(WW) {
      var iW, OW;
      const mW = WW & AW.g;
      switch (WW >>> AW.e) {
        case AW.v.Lifeform:
          return null !== (iW = tW.i[mW]) && void 0 !== iW ? iW : null;
        case AW.v.Throwable:
          return null !== (OW = ZW.i[mW]) && void 0 !== OW ? OW : null;
        case AW.v.Mesh:
          return "Mesh";
        case AW.v.Audio:
          return "AudioEntity";
        case AW.v.Item:
          return "Item";
        default:
          return null
      }
    }
    const YW = new TextDecoder;

    function yW(WW, iW, OW) {
      if (OW < xW.Ld.HEAD_BYTES) return null;
      const mW = WW.getUint32(iW, !0),
        EW = WW.getUint32(iW + 20, !0),
        NW = WW.getUint32(iW + 24, !0),
        PW = xW.Ld.HEAD_BYTES + (0, xW.xe)(EW);
      if (mW !== xW.Ld.UPDATE && mW !== xW.Ld.REMOVE || EW > OW || PW + NW > OW) return null;
      const LW = (OW, mW) => YW.decode(new Uint8Array(WW.buffer, WW.byteOffset + iW + OW, mW)),
        cW = WW.getFloat64(iW + 12, !0);
      return {
        op: mW,
        level: WW.getFloat64(iW + 4, !0),
        durationMs: Number.isNaN(cW) ? null : cW,
        name: LW(xW.Ld.HEAD_BYTES, EW),
        icon: LW(PW, NW)
      }
    }

    function TW(WW, iW, OW) {
      return new lW.e(`event ${WW} at ${iW} of ${OW} bytes`)
    }
    var JW = OW(7453),
      hW = OW(344),
      HW = OW(1217),
      nW = OW(40392),
      uW = OW(40233),
      oW = OW(2051),
      dW = OW(42508),
      eW = OW(2012),
      vW = OW(37915),
      gW = OW(40440),
      DW = OW(40419),
      VW = OW(40407),
      pW = OW(42137),
      fW = OW(3308),
      CW = OW(40431);

    function XW(WW) {
      if (!(0, CW.g)(WW)) return null;
      const iW = Number(WW);
      return (0 | iW) === iW ? iW : null
    }
    class BW {
      constructor(WW) {
        this.api = WW, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, VW.m)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.ZO = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = AW.kd, this.localName = String(AW.kd)
      }
      readView() {
        this.defaultPoseRead = !1, this.ZO = null;
        const WW = this.api.queries.directorView() >= AW.Eb.BYTES ? this.api.scratchData(AW.Eb.BYTES, "the director's view") : null;
        null !== WW && (this.defaultFov = (0, eW.x)(AW.Eb.fov(WW, 0)), this.baseFov = (0, eW.x)(AW.Eb.baseFov(WW, 0)), this.aspect = AW.Eb.aspect(WW, 0), this.bodyHeading = AW.Eb.bodyHeading(WW, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(WW) {
        this.viewHeading = WW
      }
      get localPlayerId() {
        const WW = AW.z.localId(this.api.apiView, 0);
        return WW !== this.localId && (this.localId = WW, this.localName = String(WW)), this.localName
      }
      getEntityPosition(WW) {
        return this.readEntity(WW) ? this.entityFeet : null
      }
      getEntityAimPoint(WW) {
        return this.readEntity(WW) ? this.entityAim : null
      }
      getEntityHeading(WW) {
        const iW = XW(WW);
        if (null === iW) return null;
        const OW = AW.z.localId(this.api.apiView, 0);
        return iW === OW && OW !== AW.kd ? this.viewHeading : this.readEntity(WW) ? this.entityHeading : null
      }
      getEntityPitch(WW) {
        return this.readEntity(WW) ? this.entityPitch : null
      }
      getEntityLookHeading(WW) {
        return this.readEntity(WW) ? this.entityLookHeading : null
      }
      raycastTerrain(WW, iW, OW) {
        const mW = this.api.queries.cameraSweep(WW[0], WW[1], WW[2], iW[0], iW[1], iW[2], OW);
        return mW < OW - 1e-6 ? mW : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const WW = this.defaultPose;
        WW.fov = this.defaultFov;
        const iW = this.api.queries.directorDefaultPose() >= AW.vb.BYTES ? this.api.scratchData(AW.vb.BYTES, "the director's default pose") : null;
        if (null === iW) return WW;
        for (let OW = 0; OW < 3; OW++) WW.position[OW] = AW.vb.eye(iW, 0, OW);
        return WW.heading = AW.vb.heading(iW, 0), WW.pitch = AW.vb.pitch(iW, 0), WW
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
        const iW = XW(WW);
        if (null === iW) return !1;
        if (iW === this.ZO) return this.entityLive;
        this.ZO = iW;
        const OW = this.api.queries.directorEntity(iW) >= AW.zb.BYTES ? this.api.scratchData(AW.zb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== OW, null === OW) return !1;
        for (let NW = 0; NW < 3; NW++) this.entityFeet[NW] = AW.zb.feet(OW, 0, NW), this.entityAim[NW] = this.entityFeet[NW];
        this.entityAim[1] += AW.zb.eyeHeight(OW, 0), this.entityHeading = AW.zb.heading(OW, 0);
        const mW = AW.zb.pitch(OW, 0);
        this.entityPitch = Number.isNaN(mW) ? null : mW;
        const EW = AW.zb.lookHeading(OW, 0);
        return this.entityLookHeading = Number.isNaN(EW) ? null : EW, !0
      }
    }
    const qW = {
        mode: "default"
      },
      RW = {
        show: () => {},
        clear: () => {}
      };

    function GW() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class IW {
      constructor(WW) {
        this.options = WW, this.oZ = void 0, this.director = void 0, this.latest = qW, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          jH: 0,
          UH: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = AW.tb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Zj = new Int32Array(3 * AW.ae), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * AW.ae), this.oZ = new BW(WW.api), this.director = new DW.d(this.oZ)
      }
      settingsChanged(WW) {
        let iW = qW;
        if (WW.length > 0) try {
          iW = (0, pW.d)(WW)
        } catch {}
        this.latest = iW, this.pending = iW
      }
      call(WW, iW, OW, mW, EW, NW) {
        var PW, LW;
        this.holding = !1;
        const cW = this.answeredPose && 0 === (mW & AW.Bb.Held);
        let wW;
        try {
          wW = this.answer(WW, iW, OW, mW, EW, NW), this.threw = !1
        } catch (tW) {
          this.options.reportError(tW);
          wW = !this.threw && this.answeredPose && !cW ? this.sendLastPose() : AW.tb.None, this.threw = !0
        }
        return this.answeredPose = wW !== AW.tb.None, this.holding = this.answeredPose && !cW, null === (PW = (LW = this.options).showFacing) || void 0 === PW || PW.call(LW, this.holding ? this.facing : null), wW
      }
      holdsView() {
        return this.holding
      }
      answer(WW, iW, OW, mW, EW, NW) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          oZ: PW
        } = this;
        PW.readView();
        if (0 !== (mW & AW.Bb.Held) || PW.setViewHeading((0, vW.w)(PW.bodyHeading)), void 0 !== this.pending) {
          const WW = this.pending;
          this.pending = void 0, this.director.setSettings(WW), this.syncShownSettings()
        }
        this.readLook((0, fW.d)(iW), (0, fW.d)(OW), mW, (0, fW.d)(EW), (0, fW.d)(NW));
        const LW = this.director.update(WW / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !LW) return AW.tb.None;
        const cW = this.lastPose;
        return (0, VW.j)(LW.position, cW.position), cW.heading = (0, vW.w)(LW.heading), cW.pitch = (0, vW.g)(LW.pitch), cW.fovRadians = (0, eW.i)(LW.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return AW.tb.Pose;
        switch (this.facing) {
          case "camera":
            return AW.tb.FaceCamera;
          case "cursor":
            return AW.tb.FaceCursor;
          default:
            return AW.tb.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: WW,
          heading: iW,
          pitch: OW,
          fovRadians: mW
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(WW[0], WW[1], WW[2], iW, OW, mW) ? AW.tb.None : this.lastAnswer
      }
      afterFrame(WW) {
        WW ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = qW, this.idle()
      }
      restart() {
        const WW = this.holding;
        this.idle(), this.holding = WW
      }
      idle() {
        var WW, iW;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new DW.d(this.oZ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (WW = (iW = this.options).showFacing) || void 0 === WW || WW.call(iW, null), this.setCentres(0)
      }
      syncShownSettings() {
        const WW = this.director.getSettings();
        if (WW === this.shownSettings) return;
        this.shownSettings = WW;
        const iW = (0, gW.e)(WW);
        this.facing = iW.facing, this.mouseTurns = iW.mouseTurns
      }
      readLook(WW, iW, OW, mW, EW) {
        const NW = this.look,
          PW = 0 !== (OW & AW.Bb.LookPointed);
        if (null === this.mouseTurns && !PW) return NW.jH = 0, NW.UH = 0, void(NW.pointedAt = void 0);
        let LW;
        PW && (this.pointedAt.heading = mW, this.pointedAt.pitch = EW, LW = this.pointedAt);
        const {
          oZ: cW
        } = this;
        cW.setViewHeading((0, gW.b)(cW.getViewHeading(), WW, iW, LW, "look" === this.mouseTurns, NW))
      }
      writeCentres(WW) {
        const iW = this.next,
          OW = Math.min(WW.length, AW.ae);
        for (let mW = 0; mW < OW; mW++)
          for (let OW = 0; OW < 3; OW++) iW[3 * mW + OW] = Math.floor(WW[mW][OW] / AW.L);
        this.setCentres(OW)
      }
      setCentres(WW) {
        const {
          Zj: iW,
          next: OW
        } = this;
        let mW = WW === this.centresLen;
        for (let EW = 0; mW && EW < 3 * WW; EW++) mW = iW[EW] === OW[EW];
        mW || (iW.fill(0), iW.set(OW.subarray(0, 3 * WW)), this.centresLen = WW, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const WW = this.options.cmd();
        null !== WW && (0, AW.tf)(WW, 0, this.Zj, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var WW, iW, OW;
        return null !== (WW = null === (iW = (OW = this.options).screen) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : RW
      }
      hidden() {
        var WW;
        return (null !== (WW = this.options.isPageHidden) && void 0 !== WW ? WW : GW)()
      }
      now() {
        var WW, iW, OW;
        return null !== (WW = null === (iW = (OW = this.options).now) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : performance.now()
      }
    }
    var aW = OW(40324),
      rW = OW(42246);
    const zW = AW.L * AW.L * AW.L,
      FW = Math.log2(AW.L),
      QW = AW.L - 1,
      Wi = 65535,
      ii = AW.W.BYTES / 4,
      Oi = new Uint16Array(zW);

    function mi(WW, iW, OW) {
      return WW * AW.L * AW.L + iW * AW.L + OW
    }
    class Ei {
      constructor(WW) {
        this.chunk = WW
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(WW, iW, OW) {
        return mi(WW, iW, OW)
      }
    }
    class Ni {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Pi {
      constructor(WW, iW, OW, mW) {
        this.table = WW, this.slot = iW, this.generation = OW, this.epoch = mW, this.El = new Ei(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Oi, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Ob() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get zl() {
        const WW = this.gameVoxels(),
          iW = this.layers ??= new Uint16Array(AW.L);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let OW = 0; 0 !== this.staleLayers; OW++) {
          const mW = 1 << OW;
          0 !== (this.staleLayers & mW) && (this.staleLayers &= ~mW, iW[OW] = Li(WW, OW))
        }
        return iW
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const WW = this.voxelData(),
          iW = this.writes;
        if (null === iW || 0 === iW.ids.size) return WW;
        if (iW.from !== WW) {
          const OW = iW.patched ??= new Uint16Array(zW);
          OW.set(WW);
          for (const [WW, mW] of iW.ids) OW[WW] = mW;
          iW.from = WW
        }
        return iW.patched
      }
      written(WW) {
        var iW;
        return null === (iW = this.writes) || void 0 === iW ? void 0 : iW.ids.get(WW)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(WW, iW, OW) {
        const mW = this.writes ??= new Ni;
        mW.ids.set(WW, iW), OW && mW.cleared.add(WW), null !== mW.from && (mW.patched[WW] = iW);
        const EW = 1 << (WW >> FW & QW);
        mW.layers |= EW, this.staleLayers |= EW, this.writeCount++
      }
      clearWrites() {
        const WW = this.writes;
        null !== WW && (this.staleLayers |= WW.layers, WW.ids.clear(), WW.cleared.clear(), WW.layers = 0, WW.from = null)
      }
      dataCleared(WW) {
        var iW;
        return !0 === (null === (iW = this.writes) || void 0 === iW ? void 0 : iW.cleared.has(WW))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const WW = this.table.slotWords(),
          iW = this.slot * ii;
        if (this.epoch !== this.table.epoch || iW + ii > WW.length || 0 === WW[iW + 3] || WW[iW + 2] !== this.generation) return this.data = Oi, this.dataPtr = 0, Oi;
        this.version = WW[iW + 1];
        const OW = WW[iW + 0],
          mW = WW.buffer;
        return OW === this.dataPtr && mW === this.dataBuffer || (this.dataPtr = OW, this.dataBuffer = mW, this.data = this.table.voxelsAt(mW, OW)), this.data
      }
    }

    function Li(WW, iW) {
      const OW = WW[iW * AW.L];
      for (let mW = 0; mW < AW.L; mW++) {
        const EW = mi(mW, iW, 0);
        for (let iW = 0; iW < AW.L; iW++)
          if (WW[EW + iW] !== OW) return Wi
      }
      return OW
    }
    const ci = new Uint32Array(0);

    function wi(WW, iW, OW) {
      return mi(WW & QW, iW & QW, OW & QW)
    }
    class ti {
      constructor(WW, iW) {
        this.memory = WW, this.apiView = iW, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = ci, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = ci, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(WW, iW, OW, mW, EW, NW) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, NW === AW.Z.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (NW !== AW.Z.Stored && NW !== AW.Z.Unloaded) throw new lW.e(`ChunkSlot flags ${NW}`);
        const PW = (0, rW.e)(WW, iW, OW);
        if (PW < 0) return;
        if (NW === AW.Z.Unloaded) return void this.chunks.delete(PW);
        const LW = this.chunks.get(PW);
        (null === LW || void 0 === LW ? void 0 : LW.slot) === mW && LW.generation === EW || this.chunks.set(PW, new Pi(this, mW, EW, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const WW = this.apiView(),
          iW = AW.z.chunkSlotsPtr(WW, 0),
          OW = AW.z.chunkSlotsLen(WW, 0);
        iW === this.slotsPtr && OW === this.slotsLen || (this.slotsPtr = iW, this.slotsLen = OW, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const WW = this.apiView(),
          iW = AW.z.walkThroughPtr(WW, 0),
          OW = AW.z.walkThroughLen(WW, 0);
        iW === this.walkPtr && OW === this.walkLen || (this.walkPtr = iW, this.walkLen = OW, this.walkBuffer = null, this.walkWords())
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
        var iW;
        WW !== this.slotsBuffer && (this.slotsBuffer = WW, this.slots = null !== (iW = (0, lW.p)(Uint32Array, WW, this.slotsPtr, this.slotsLen * ii, "the chunk directory")) && void 0 !== iW ? iW : ci);
        return this.slots
      }
      voxelsAt(WW, iW) {
        try {
          var OW;
          return null !== (OW = (0, lW.p)(Uint16Array, WW, iW, zW, "a chunk's voxels")) && void 0 !== OW ? OW : Oi
        } catch (mW) {
          if (!(mW instanceof lW.e)) throw mW;
          return this.corruption ??= mW, Oi
        }
      }
      chunk(WW, iW, OW) {
        var mW;
        return null !== (mW = this.chunks.get((0, rW.e)(WW, iW, OW))) && void 0 !== mW ? mW : null
      }
      isLoaded(WW, iW, OW) {
        return void 0 !== this.chunkAt(Math.floor(WW), Math.floor(iW), Math.floor(OW))
      }
      NL(WW, iW, OW) {
        var mW;
        const EW = Math.floor(WW),
          NW = Math.floor(iW),
          PW = Math.floor(OW),
          LW = this.chunkAt(EW, NW, PW);
        if (!LW) return 0;
        const cW = wi(EW, NW, PW);
        return null !== (mW = LW.written(cW)) && void 0 !== mW ? mW : LW.voxelData()[cW]
      }
      setOverlay(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NW = this.chunkAt(WW, iW, OW);
        return !!NW && (NW.hasWrites() || this.written.push(NW), NW.write(wi(WW, iW, OW), mW, EW), !0)
      }
      version(WW, iW, OW) {
        var mW, EW;
        return null !== (mW = null === (EW = this.chunks.get((0, rW.e)(WW, iW, OW))) || void 0 === EW ? void 0 : EW.Ob) && void 0 !== mW ? mW : null
      }
      scan(WW, iW, OW, mW, EW, NW, PW, LW) {
        const cW = AW.L;
        let wW = 0;
        for (let tW = Math.floor(iW / cW); tW * cW < EW; tW++) {
          const ZW = tW * cW,
            xW = Math.min(EW - ZW, cW);
          for (let EW = Math.floor(WW / cW); EW * cW < mW; EW++) {
            const lW = EW * cW,
              AW = Math.min(mW - lW, cW);
            for (let mW = Math.floor(OW / cW); mW * cW < NW; mW++) {
              const bW = this.chunks.get((0, rW.e)(EW, tW, mW));
              if (!bW) continue;
              const jW = mW * cW,
                UW = Math.max(OW - jW, 0),
                kW = Math.min(NW - jW, cW),
                sW = bW.zl,
                MW = bW.gameVoxels();
              for (let OW = Math.max(iW - ZW, 0); OW < xW; OW++) {
                const iW = sW[OW];
                if (iW === Wi || 0 !== PW[iW]) {
                  wW++;
                  for (let iW = Math.max(WW - lW, 0); iW < AW; iW++) {
                    const WW = mi(iW, OW, 0);
                    for (let mW = UW; mW < kW; mW++) {
                      const EW = MW[WW + mW];
                      0 !== PW[EW] && LW.push(lW + iW, ZW + OW, jW + mW, EW)
                    }
                  }
                }
              }
            }
          }
        }
        return wW
      }
      columnTops(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        (0, aW.e)(((WW, iW, OW) => {
          var mW;
          return null !== (mW = this.chunks.get((0, rW.e)(WW, iW, OW))) && void 0 !== mW ? mW : null
        }), Wi, WW, iW, OW, mW, EW, NW, PW, LW, cW)
      }
      dataCleared(WW, iW, OW) {
        var mW;
        const EW = Math.floor(WW),
          NW = Math.floor(iW),
          PW = Math.floor(OW);
        return !0 === (null === (mW = this.chunkAt(EW, NW, PW)) || void 0 === mW ? void 0 : mW.dataCleared(wi(EW, NW, PW)))
      }
      isWalkThrough(WW) {
        if (!Number.isInteger(WW) || WW < 0 || WW > 65535) return !1;
        const iW = this.walkWords(),
          OW = WW >>> 5;
        return OW < iW.length && 1 === (iW[OW] >>> (31 & WW) & 1)
      }
      walkWords() {
        const WW = this.memory().buffer;
        var iW;
        WW !== this.walkBuffer && (this.walkBuffer = WW, this.walk = null !== (iW = (0, lW.p)(Uint32Array, WW, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== iW ? iW : ci);
        return this.walk
      }
      chunkAt(WW, iW, OW) {
        if ((0 | WW) !== WW || (0 | iW) !== iW || (0 | OW) !== OW) return;
        const mW = (0, rW.e)(WW >> FW, iW >> FW, OW >> FW);
        return mW !== this.lastKey && (this.lastKey = mW, this.lastChunk = this.chunks.get(mW)), this.lastChunk
      }
    }
    var Zi = OW(39696),
      xi = OW(38986),
      li = OW(39386),
      Ai = OW(37618),
      bi = OW(37898),
      ji = OW(35177),
      Ui = OW(40329),
      ki = OW(182);
    const si = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      Mi = [
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
      Ki = Mi.map((WW => {
        let [iW] = WW;
        return iW
      })),
      Si = Uint8Array.from(Mi, (WW => {
        let [, iW] = WW;
        return iW
      })),
      Yi = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      yi = 8,
      Ti = [
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
    var Ji = OW(37563),
      Hi = OW(37588),
      ni = OW(37609),
      ui = OW(37583),
      oi = OW(232);
    class di {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oi.d;
        this.sound = WW, this.onError = iW, this.idle = OW, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = WW => {
          this.cancelIdle = null;
          try {
            if (WW.timeRemaining() >= 1) {
              let WW = this.queue.shift();
              for (; void 0 !== WW && !this.load(WW);) WW = this.queue.shift()
            }
          } catch (iW) {
            this.onError(iW)
          } finally {
            this.schedule()
          }
        }
      }
      preload(WW) {
        const iW = [...WW].sort(((WW, iW) => WW - iW));
        for (const OW of iW) this.asked.has(OW) || (this.asked.add(OW), this.queue.push(OW));
        this.schedule()
      }
      cancel() {
        var WW;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (WW = this.cancelIdle) || void 0 === WW || WW.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(WW) {
        const iW = this.sound(WW, !1),
          OW = this.sound(WW, !0),
          [mW, EW] = "unloaded" === iW.state() && "unloaded" !== OW.state() ? [OW, iW] : [iW, OW],
          NW = this.gen,
          PW = () => {
            try {
              NW === this.gen && "unloaded" === EW.state() && EW.load()
            } catch (WW) {
              this.onError(WW)
            }
          },
          LW = mW.state();
        return "unloaded" === LW ? (mW.once("load", PW), mW.load(), !0) : "unloaded" === EW.state() && ("loading" === LW ? (mW.once("load", PW), !1) : (EW.load(), !0))
      }
    }
    var ei = OW(42411);

    function vi(WW) {
      var iW;
      const OW = function(WW) {
        let iW = 0,
          OW = Ki.length;
        for (; iW < OW;) {
          const mW = iW + OW >>> 1;
          Ki[mW] < WW ? iW = mW + 1 : OW = mW
        }
        return iW
      }(WW);
      if ("" === WW || null === (iW = Ki[OW]) || void 0 === iW || !iW.startsWith(WW)) return null;
      if (Ki[OW] === WW) return [OW, 1];
      let mW = OW + 1;
      for (; mW < Ki.length && Ki[mW].startsWith(WW);) mW++;
      return [OW, mW - OW]
    }

    function gi(WW) {
      let [iW, OW] = WW, mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === OW ? iW : iW + Math.floor(mW() * OW)
    }

    function Di(WW) {
      for (const iW of Ti)
        if (iW[0] <= WW && WW < iW[0] + iW[1]) return iW;
      return null
    }

    function Vi(WW) {
      const iW = [];
      for (let OW = 0; OW < Si.length; OW++) Si[OW] === WW && iW.push(OW);
      return iW
    }
    const fi = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Ci = ki.f.ZU * ki.f.playerEyeToHeightRatio,
      Xi = [0, 0, -1, 0, 1, 0],
      Bi = si.indexOf("note");

    function qi(WW) {
      return WW >= 0 ? Math.min(1, WW) : 0
    }
    class Ri {
      constructor(WW, iW, OW, mW, EW) {
        this.group = WW, this.loudness = iW, this.startMs = OW, this.howl = mW, this.host = EW, this.id = 0, this.direct = !1
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
    class Gi {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          mW = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = WW, this.listener = iW, this.now = OW, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new ui.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: WW => this.aliveVoice(WW),
          started: WW => this.started.has(WW),
          drop: WW => {
            var iW;
            null === (iW = this.live.get(WW)) || void 0 === iW || iW.howl.stop(WW), this.forget(WW)
          }
        }, this.handlers = {
          playSound: (WW, iW, OW, mW, EW, NW, PW, LW, cW) => {
            if (mW >= Ki.length) return;
            const wW = 0 !== (EW & AW.je.Loop);
            EW & AW.je.TwoD ? this.start(mW, !1, PW, NW, LW, wW, Di(mW)) : this.startSpatial(mW, PW, NW, LW, wW, WW, iW, OW, cW, this.earDistSq(WW, iW, OW), Di(mW))
          },
          soundPos: (WW, iW, OW, mW) => {
            const EW = this.core.get(mW);
            var NW;
            void 0 !== EW && (null === (NW = this.live.get(EW)) || void 0 === NW || NW.howl.pos(OW, iW, WW, EW))
          },
          soundSet: (WW, iW, OW, mW) => {
            const EW = this.core.get(WW),
              NW = void 0 === EW ? void 0 : this.live.get(EW);
            void 0 !== EW && NW && (this.setRel(EW, iW), NW.rate = OW, NW.howl.rate(OW, EW), NW.spatial && NW.howl.pannerAttr({
              refDistance: mW
            }, EW))
          },
          soundFade: (WW, iW, OW, mW) => {
            const EW = this.core.get(WW);
            void 0 !== EW && this.fade(EW, iW, OW, 0 !== (mW & AW.fe.StopAfter))
          },
          soundStop: WW => {
            const iW = this.core.get(WW);
            var OW;
            void 0 !== iW && (null === (OW = this.live.get(iW)) || void 0 === OW || OW.howl.stop(iW), this.forget(iW))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new di(((WW, iW) => this.howl(WW, iW)), (WW => {
          this.errors++, console.error("Audio preload failed", WW)
        }), mW)
      }
      preload(WW) {
        this.loader.preload(WW)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let WW = 0; WW < Ki.length; WW++) {
          if (Hi.e.has(si[Si[WW]])) continue;
          const iW = [];
          for (const OW of [!1, !0]) {
            const mW = Ii(WW, OW),
              EW = this.howls.get(mW);
            void 0 !== EW && "loading" !== EW.state() && iW.push({
              key: mW,
              howl: EW
            })
          }
          if (iW.some((WW => {
              let {
                howl: iW
              } = WW;
              return "loaded" === iW.state()
            })))
            for (const {
                key: WW,
                howl: OW
              }
              of iW) this.howls.delete(WW), "loaded" === OW.state() ? (0, Ji.f)(OW) : OW.unload()
        }
      }
      onAudioEvent(WW, iW, OW, mW) {
        if (WW < AW.t.PlaySound || WW > AW.t.SoundReset) return !1;
        try {
          return (0, AW.oe)(WW, iW, OW, mW, this.handlers)
        } catch (EW) {
          return this.errors++, console.error("Audio event failed", EW), !0
        }
      }
      applyListener(WW) {
        const iW = this.nextPose;
        for (let mW = 0; mW < 3; mW++) iW[2 - mW] = AW.D.listener(WW, 0, mW), iW[5 - mW] = AW.D.forward(WW, 0, mW), iW[8 - mW] = AW.D.up(WW, 0, mW);
        0 === iW[3] && 0 === iW[4] && 0 === iW[5] && iW.set(this.posed ? this.pose.subarray(3) : Xi, 3);
        for (let mW = 0; mW < 9; mW++)
          if (!Number.isFinite(iW[mW])) return;
        const OW = this.pose;
        if (this.posed) {
          let WW = !0;
          for (let mW = 0; mW < 9 && WW; mW++) WW = iW[mW] === OW[mW];
          if (WW) return
        }
        this.listener.apply(iW) && (OW.set(iW), this.posed = !0)
      }
      playGame(WW, iW, OW, mW, EW, NW, PW) {
        const LW = vi(WW);
        if (null === LW) return ei.c;
        const cW = gi(LW),
          wW = LW[1] > 1 ? LW : null;
        if (!OW) {
          const {
            howl: WW,
            id: OW
          } = this.start(cW, !1, iW, 0, 1, PW, wW);
          return this.gameSound(WW, OW, !1)
        }
        const tW = OW[0],
          ZW = OW[1] + Ci,
          xW = OW[2];
        if (!Number.isFinite(tW) || !Number.isFinite(ZW) || !Number.isFinite(xW)) return ei.c;
        let lW;
        if (mW) {
          const WW = tW - mW[0],
            iW = ZW - mW[1],
            OW = xW - mW[2];
          if (lW = WW * WW + iW * iW + OW * OW, lW > EW * EW) return ei.c
        } else lW = this.earDistSq(tW, ZW, xW);
        const AW = this.startSpatial(cW, iW, 0, 1, PW, tW, ZW, xW, NW, lW, wW);
        return AW ? this.gameSound(AW.howl, AW.id, !0) : ei.c
      }
      setMaster(WW, iW) {
        this.level = qi(WW);
        const OW = iW ? this.level : 0;
        if (OW !== this.master) {
          this.master = OW;
          for (const [WW, iW] of this.live) iW.fadeMs = 0, iW.gain = iW.rel * this.master, iW.howl.volume(iW.gain, WW)
        }
      }
      stopCore() {
        for (const iW of [...this.core.values()]) {
          var WW;
          null === (WW = this.live.get(iW)) || void 0 === WW || WW.howl.stop(iW)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [WW, iW] of [...this.live]) iW.howl.stop(WW), this.forget(WW);
        this.core.clear()
      }
      gameSound(WW, iW, OW) {
        const mW = {
          stop: () => (this.live.has(iW) && WW.stop(iW), mW),
          fade: (WW, OW, EW) => {
            var NW, PW;
            const LW = this.level > 0 ? OW / this.level : OW > 0 && null !== (NW = null === (PW = this.live.get(iW)) || void 0 === PW ? void 0 : PW.rel) && void 0 !== NW ? NW : 0;
            return this.fade(iW, LW, EW, !1), mW
          },
          rate: OW => {
            const EW = this.live.get(iW);
            return EW && (EW.rate = function(WW) {
              return WW > 0 && WW < 1 / 0 ? WW : 1
            }(OW), WW.rate(EW.rate, iW)), mW
          },
          getVolume: () => {
            var WW, OW;
            return (null !== (WW = null === (OW = this.live.get(iW)) || void 0 === OW ? void 0 : OW.rel) && void 0 !== WW ? WW : 0) * this.level
          },
          getRelativeVolume: () => {
            var WW, OW;
            return null !== (WW = null === (OW = this.live.get(iW)) || void 0 === OW ? void 0 : OW.rel) && void 0 !== WW ? WW : 0
          },
          setRelativeVolume: WW => (this.setRel(iW, WW), mW),
          setPannerAttr: EW => {
            if (OW && this.live.has(iW)) {
              const OW = {
                ...fi,
                refDistance: Ai.g
              };
              for (const [WW, iW] of Object.entries(EW)) "number" !== typeof iW && "string" !== typeof iW || (OW[WW] = iW);
              WW.pannerAttr({
                coneOuterAngle: OW.coneOuterAngle
              }, iW), WW.pannerAttr(OW, iW)
            }
            return mW
          },
          setPosition: EW => (OW && this.live.has(iW) && Number.isFinite(EW[0] + EW[1] + EW[2]) && WW.pos(EW[2], EW[1], EW[0], iW), mW)
        };
        return mW
      }
      startSpatial(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        const ZW = this.howl(WW, !0);
        let xW = null;
        if (!EW) {
          if (this.failed.has(ZW)) return null;
          const OW = Si[WW] === Bi ? null : (0, ui.f)(Ki[WW]),
            mW = (0, ui.d)(qi(iW), Math.sqrt(wW), cW);
          if (xW = new Ri(OW, mW, this.now(), ZW, this.voiceHost), !this.voices.admit(xW)) return null
        }
        const lW = this.start(WW, !0, iW, OW, mW, EW, tW);
        return xW && (xW.id = lW.id, xW.direct = "loaded" === ZW.state() && !ZW._playLock), ZW.pannerAttr({
          coneOuterAngle: 360
        }, lW.id), ZW.pannerAttr({
          ...fi,
          refDistance: cW
        }, lW.id), ZW.pos(LW, PW, NW, lW.id), !EW && this.posed && (0, ni.h)() && (0, ni.e)(si[Si[WW]], Ki[WW], NW - this.pose[2], LW - this.pose[0]), lW
      }
      aliveVoice(WW) {
        const iW = this.live.get(WW);
        if (!iW) return;
        const OW = iW.howl._soundById(WW);
        if (OW && !OW._ended) return iW;
        this.forget(WW)
      }
      earDistSq(WW, iW, OW) {
        if (!this.posed) return 0;
        const mW = WW - this.pose[2],
          EW = iW - this.pose[1],
          NW = OW - this.pose[0];
        return mW * mW + EW * EW + NW * NW
      }
      start(WW, iW, OW, mW, EW, NW, PW) {
        const LW = qi(OW),
          cW = this.howl(WW, iW);
        "unloaded" === cW.state() && (cW.load(), null !== PW && this.loadPick(PW, iW));
        const wW = cW.play(Ji.d),
          tW = LW * this.master;
        return cW.volume(tW, wW), this.live.set(wW, {
          howl: cW,
          rel: LW,
          gain: tW,
          fadeFrom: tW,
          fadeAt: 0,
          fadeMs: 0,
          rate: EW,
          handle: mW,
          spatial: iW,
          stopTimer: void 0
        }), 0 !== mW && this.core.set(mW, wW), 1 !== EW && cW.rate(EW, wW), NW && cW.loop(!0, wW), {
          howl: cW,
          id: wW
        }
      }
      loadPick(WW, iW) {
        let [OW, mW] = WW;
        for (let NW = OW; NW < OW + mW; NW++) {
          var EW;
          const WW = this.howl(NW, iW);
          "unloaded" === WW.state() && "loading" !== (null === (EW = this.howls.get(Ii(NW, !iW))) || void 0 === EW ? void 0 : EW.state()) && WW.load()
        }
      }
      howl(WW, iW) {
        const OW = Ii(WW, iW);
        let mW = this.howls.get(OW);
        if (!mW) {
          const EW = this.createHowl(Ki[WW], iW);
          EW.on("end", (WW => {
            EW.loop(WW) || this.forget(WW)
          })), EW.on("stop", (WW => {
            this.forget(WW)
          })), EW.on("play", (WW => {
            this.live.has(WW) && this.started.add(WW)
          })), EW.on("loaderror", (WW => {
            if ("loaded" !== EW.state()) {
              this.failed.add(EW);
              for (const [WW, iW] of this.live) iW.howl === EW && this.forget(WW)
            } else "number" === typeof WW && this.forget(WW)
          })), this.howls.set(OW, EW), mW = EW
        }
        return mW
      }
      setRel(WW, iW) {
        const OW = this.live.get(WW);
        OW && (ai(OW), OW.fadeMs = 0, OW.rel = qi(iW), OW.gain = OW.rel * this.master, OW.howl.volume(OW.gain, WW))
      }
      fade(WW, iW, OW, mW) {
        const EW = this.live.get(WW);
        if (!EW) return;
        ai(EW);
        const {
          howl: NW
        } = EW, PW = this.gainNow(EW);
        EW.rel = qi(iW), EW.gain = EW.rel * this.master;
        const LW = OW > 0 ? Math.min(OW, 65535) : 0,
          cW = 0 === LW || PW === EW.gain;
        EW.fadeMs = cW ? 0 : LW, cW ? NW.volume(EW.gain, WW) : (EW.fadeFrom = PW, EW.fadeAt = this.now(), NW.fade(PW, EW.gain, LW, WW)), mW && (cW ? NW.stop(WW) : EW.stopTimer = setTimeout((() => {
          EW.stopTimer = void 0, NW.stop(WW)
        }), LW))
      }
      gainNow(WW) {
        if (WW.fadeMs > 0) {
          const iW = (this.now() - WW.fadeAt) / WW.fadeMs;
          if (iW < 1) return WW.fadeFrom + (WW.gain - WW.fadeFrom) * Math.max(0, iW);
          WW.fadeMs = 0
        }
        return WW.gain
      }
      forget(WW) {
        this.started.delete(WW);
        const iW = this.live.get(WW);
        iW && (ai(iW), this.live.delete(WW), 0 !== iW.handle && this.core.get(iW.handle) === WW && this.core.delete(iW.handle))
      }
    }

    function Ii(WW, iW) {
      return 2 * WW + (iW ? 1 : 0)
    }

    function ai(WW) {
      void 0 !== WW.stopTimer && (clearTimeout(WW.stopTimer), WW.stopTimer = void 0)
    }
    var ri = OW(42125),
      zi = OW(40332);
    class Fi {
      constructor(WW, iW, OW, mW) {
        this.key = WW, this.model = iW, this.host = mW, this.aZ = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sNW = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.JA = !1, this.aZ = Math.max(1, Math.ceil(OW)), this.records = new Float32Array(this.aZ * Zi.b), this.isDirty = new Uint8Array(this.aZ), this.tail = new Uint8Array(this.aZ * AW.Hc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(mW.cmd())
      }
      setOrigin(WW, iW, OW) {
        this.origin[0] = WW, this.origin[1] = iW, this.origin[2] = OW
      }
      markDirty(WW) {
        !this.JA && WW >= 0 && WW < this.aZ && WW < AW.Hc.Max && this.RA(WW, WW + 1)
      }
      commit(WW) {
        if (this.JA) return;
        (WW = Math.min(Math.max(Math.floor(WW), 0), this.aZ, AW.Hc.Max)) > this.count && this.RA(this.count, WW), this.count = WW;
        const {
          origin: iW,
          sentOrigin: OW,
          dirtyList: mW
        } = this, EW = this.sNW !== WW, NW = OW[0] !== iW[0] || OW[1] !== iW[1] || OW[2] !== iW[2];
        if (0 === mW.length && !EW && !NW) return;
        const PW = this.host.cmd();
        if (!PW || !this.make(PW)) return;
        const LW = mW.length,
          {
            records: cW,
            tailView: wW
          } = this;
        for (let tW = 0; tW < LW; tW++) {
          const WW = mW[tW],
            iW = WW * Zi.b,
            OW = tW * AW.Hc.Bytes,
            EW = 0 !== cW[iW + Zi.d] ? AW.Hc.Hidden : 0;
          wW.setUint32(OW, (WW | EW) >>> 0, !0), wW.setFloat32(OW + 4, cW[iW], !0), wW.setFloat32(OW + 8, cW[iW + 1], !0), wW.setFloat32(OW + 12, cW[iW + 2], !0)
        }
        if ((0, AW.Le)(PW, 0, this.key, WW, iW, LW, this.tailOf(LW))) {
          for (let WW = 0; WW < LW; WW++) this.isDirty[mW[WW]] = 0;
          mW.length = 0, this.sNW = WW, OW[0] = iW[0], OW[1] = iW[1], OW[2] = iW[2]
        }
      }
      grow(WW) {
        (WW = Math.ceil(WW)) <= this.aZ || this.JA || (this.records = (0, zi.b)(this.records, new Float32Array(WW * Zi.b)), this.isDirty = (0, zi.b)(this.isDirty, new Uint8Array(WW)), this.tail = new Uint8Array(WW * AW.Hc.Bytes), this.tailView = new DataView(this.tail.buffer), this.aZ = WW)
      }
      dispose() {
        this.JA || (this.JA = !0, this.host.JA(this, this.made ? this.key : null))
      }
      make(WW) {
        if (!this.made && WW) {
          const {
            item: iW,
            scale: OW,
            yaw: mW
          } = this.model;
          this.made = (0, AW.Qe)(WW, 0, this.key, iW, OW, mW)
        }
        return this.made
      }
      tailOf(WW) {
        const iW = WW * AW.Hc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === iW || (this.tailCut = this.tail.subarray(0, iW)), this.tailCut
      }
      RA(WW, iW) {
        const {
          dirtyList: OW,
          isDirty: mW
        } = this;
        for (let EW = WW; EW < iW; EW++) 0 === mW[EW] && (mW[EW] = 1, OW.push(EW))
      }
    }
    var Qi = OW(639),
      WO = OW(44924);
    const iO = new TextEncoder,
      OO = new Uint8Array(0),
      mO = [0, 0, 0];
    class EO {
      constructor(WW, iW) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: WW,
          serverId: iW,
          owes: WW => {
            this.owing.add(WW)
          },
          settled: (WW, iW) => {
            this.owing.delete(WW), iW && this.live.delete(WW)
          }
        }
      }
      create(WW, iW) {
        return OW = WW, Qi.k.includes(OW) ? this.add({
          lifeform: tW.i.indexOf(WW)
        }, iW) : null;
        var OW
      }
      createCosmetic(WW, iW) {
        const OW = WO.COSMETIC_MODEL_KEYS.get(WW);
        return void 0 === OW ? null : this.add({
          attachment: OW
        }, iW)
      }
      add(WW, iW) {
        const OW = new NO(++this.keys, WW, iW, this.host);
        return this.live.add(OW), OW
      }
      disposeAll() {
        for (const WW of [...this.live]) WW.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const WW = this.host.cmd();
        for (const iW of this.owing)
          if (!iW.sync(WW)) return
      }
    }
    class NO {
      constructor(WW, iW, OW, mW) {
        this.key = WW, this.source = iW, this.scale = OW, this.host = mW, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = OO, this.perch = null, this.owed = 1, this.JA = !1, this.sync()
      }
      setPose(WW, iW) {
        this.JA || (this.feet[0] = WW[0], this.feet[1] = WW[1], this.feet[2] = WW[2], this.yaw = iW, this.owed |= 2, this.sync())
      }
      setVisible(WW) {
        this.JA || WW === this.visible || (this.visible = WW, this.owed |= 4, this.sync())
      }
      setClip(WW) {
        this.JA || WW === this.clip || (this.clip = WW, this.clipBytes = null === WW ? OO : iO.encode(WW), this.owed |= 16, this.sync())
      }
      setPerch(WW) {
        this.JA || (this.perch = WW, this.owed |= 32, this.sync())
      }
      dispose() {
        this.JA || (this.JA = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(WW) ? (this.host.settled(this, this.JA), !0) : (this.host.owes(this), !1)
      }
      write(WW) {
        if (!WW) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, AW.Te)(WW, 0, this.key, this.source.lifeform, this.scale) : (0, AW.ve)(WW, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: iW,
          perch: OW
        } = this, mW = (2 & iW ? AW.fd.Pose : 0) | (4 & iW ? AW.fd.Visible : 0) | (16 & iW ? AW.fd.Clip : 0) | (32 & iW ? AW.fd.Perch : 0);
        if (0 !== mW) {
          var EW, NW;
          if (!(0, AW.Se)(WW, 0, this.key, mW, this.visible ? 1 : 0, OW ? 1 : 0, this.feet, this.yaw, OW ? this.host.serverId(OW.ZO) : 0, null !== (EW = null === OW || void 0 === OW ? void 0 : OW.offset) && void 0 !== EW ? EW : mO, null !== (NW = null === OW || void 0 === OW ? void 0 : OW.yaw) && void 0 !== NW ? NW : 0, 16 & iW ? this.clipBytes : OO)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, AW.Re)(WW, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var PO = OW(42491);

    function LO(WW, iW, OW, mW) {
      return (0, PO.b)(), (0, AW.vf)(WW, iW, OW, mW)
    }
    var cO = OW(40354),
      wO = OW(42116),
      tO = OW(42502);
    const ZO = [0, 0, 0],
      xO = [0, 0, 0],
      lO = [0, 0, 0],
      AO = [0, 0, 0],
      bO = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      jO = [0, 0, 0],
      UO = [0, 0],
      kO = [1, 1, 1],
      sO = 1 / 3;
    const MO = xi.e;

    function KO(WW) {
      const iW = xi.d[WW],
        OW = iW && xi.e[iW.mainMultiblock];
      return OW && {
        main: OW,
        x: iW.compX,
        y: iW.compY,
        z: iW.compZ
      }
    }

    function SO(WW) {
      if (null === WW || void 0 === WW) return AW.kd;
      const iW = +WW;
      return Number.isInteger(iW) && iW >= -2147483648 && iW <= 2147483647 && String(iW) === String(WW) ? iW : AW.kd
    }

    function YO(WW, iW, OW) {
      return (0, AW.Bf)(WW, 0, iW, null !== OW && void 0 !== OW ? OW : Number.NaN)
    }
    class yO {
      constructor(WW) {
        this.deps = WW, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new cO.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (WW => {
          var iW, OW;
          null === (iW = (OW = this.deps).setLocalOptions) || void 0 === iW || iW.call(OW, WW)
        })), this.mobModels = new EO((() => this.deps.cmd()), SO), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          JA: (WW, iW) => {
            this.livePools.delete(WW), null !== iW && (this.owedFrees.push(iW), this.flushOwed())
          }
        }, this.api = WW.api, this.live = WW.live, this.chunks = WW.chunks, this.items = WW.items, this.tables = WW.tables
      }
      isLocal(WW) {
        return null !== WW && void 0 !== WW && +WW === this.api.localId
      }
      assertLocal(WW, iW) {
        if (!this.isLocal(WW)) throw new Error(`Attempted to ${iW} for a player that is not the local player`)
      }
      Vk(WW) {
        const iW = this.api.Vk(WW);
        if (!iW) throw new Error(`Entity ${WW} has no replicated position`);
        return iW
      }
      checkValid(WW) {
        return !!this.deps.isSessionLive() && (null === WW || void 0 === WW || this.api.checkValid(WW))
      }
      isAlive(WW) {
        return !1 !== this.api.isAlive(WW)
      }
      getItemStat(WW, iW, OW) {
        return this.isLocal(WW) || null !== WW && "Player" === this.api.getEntityType(WW) ? this.tables.getItemStat(iW, OW) : this.tables.getDefaultItemStat(iW, OW)
      }
      getClientOption(WW, iW) {
        return this.assertLocal(WW, "get a client option"), this.tables.getClientOption(iW)
      }
      openShop(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(WW, "open shop"), PW.l.iZ("showShopFromServer", {
          toggle: iW,
          ni: OW
        }, !0)
      }
      sendMessage(WW, iW, OW) {
        this.assertLocal(WW, "send a message");
        const mW = "string" === typeof iW ? [{
          str: iW,
          style: OW
        }] : iW;
        PW.l.iZ("chat", {
          content: mW
        }, !0)
      }
      getEntityType(WW) {
        return this.api.getEntityType(WW)
      }
      getEntityName(WW) {
        const iW = SO(WW);
        return iW === AW.kd ? void 0 : (0, ri.k)(this.api, iW)
      }
      hasEffect(WW, iW) {
        const OW = SO(WW);
        return OW !== AW.kd && (0, ri.g)(this.api, OW, iW)
      }
      getMetaInfo(WW) {
        return this.tables.getMetaInfo(WW)
      }
      getPlayerDbId(WW) {
        return this.assertLocal(WW, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(WW, iW, OW) {
        if (!this.chunks.dataCleared(WW, iW, OW)) return (0, ri.d)(this.api, WW, iW, OW)
      }
      xH(WW, iW, OW, mW) {
        this.setBlockId(WW, iW, OW, this.tables.getItemId(mW))
      }
      setOtherEntitySetting(WW, iW, OW, mW) {
        if (!this.isLocal(WW)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(AW.Ad, OW)) throw new Error(`Unknown other-entity setting ${OW}`);
        const EW = AW.Ad[OW],
          NW = SO(iW);
        if (NW === AW.kd || !this.deps.beforeWrite()) return;
        const PW = (0, pW.e)(mW);
        if (PW.length > 16384) throw new Error(`The other-entity setting ${OW}'s value is over 16384 bytes`);
        const LW = this.api.memoryView(Uint8Array, this.api.scratch(), PW.length, "set_other_entity_setting's value");
        LW && (LW.set(PW), this.api.queries.setOtherEntitySetting(NW, EW, PW.length))
      }
      getPositionView(WW) {
        return this.live.position(+WW)
      }
      readDrawnPosition(WW, iW) {
        return this.api.readDrawnPosition(SO(WW), iW)
      }
      getDrawnHeading(WW) {
        const iW = this.drawnEntity(WW);
        if (!iW) return null;
        if (1 === AW.zb.headingIsDrawn(iW, 0)) return AW.zb.heading(iW, 0);
        const OW = this.api.apiView;
        return this.isLocal(WW) && 0 === (AW.z.playerFlags(OW, 0) & AW.Ud.FreeCam) ? AW.z.heading(OW, 0) : null
      }
      getDrawnEyeHeight(WW) {
        const iW = this.drawnEntity(WW),
          OW = iW ? AW.zb.eyeHeight(iW, 0) : 0;
        return OW > 0 ? OW : null
      }
      drawnEntity(WW) {
        const iW = SO(WW);
        return iW === AW.kd || this.api.queries.directorEntity(iW) < AW.zb.BYTES ? null : this.api.scratchData(AW.zb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(WW) {
        const iW = SO(WW);
        return iW !== AW.kd && 1 === this.api.queries.entityDrawn(iW)
      }
      getPlayerIds() {
        return tO.i.ids()
      }
      getPlayerCosmetics(WW) {
        var iW;
        return null !== (iW = (0, tO.m)(WW)) && void 0 !== iW ? iW : null
      }
      getLocalPlayerMovement() {
        const WW = AW.z.playerFlags(this.api.apiView, 0);
        return 0 === (WW & AW.Ud.Replay) && this.api.readDrawnPosition(this.api.localId, lO) ? {
          onGround: 0 !== (WW & AW.Ud.OnGround),
          jumpHeld: 0 !== (WW & AW.Ud.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, li.z)(this.deps.localPhysicsType())
      }
      kOW(WW) {
        return this.isLocal(WW) ? this.items.BL() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var WW, iW;
        return "Gun" === (null === (WW = this.aliveHeld()) || void 0 === WW || null === (iW = WW.typeObj) || void 0 === iW ? void 0 : iW.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.BL()
      }
      isCrosshairShown() {
        var WW, iW;
        const OW = (0, bi.d)(mW.d.get("crosshairGameView"), mW.d.get("crosshairShownOverride"));
        if (null !== OW) return OW;
        const EW = null === (WW = this.aliveHeld()) || void 0 === WW ? void 0 : WW.typeObj,
          NW = "Gun" === (null === EW || void 0 === EW ? void 0 : EW.type),
          PW = NW || !0 === (null === EW || void 0 === EW ? void 0 : EW.showsAimingUi),
          LW = 0 === (AW.z.playerFlags(this.api.apiView, 0) & AW.Ud.ZoomFirstPerson),
          cW = null !== (iW = this.tables.getClientOption("gunshotOrigin")) && void 0 !== iW ? iW : null;
        return (0, bi.i)({
          gun: NW,
          aimable: PW
        }, LW, (0, ji.c)(), cW)
      }
      setCrosshairShown(WW) {
        mW.d.set({
          crosshairShownOverride: WW
        })
      }
      getInventoryFreeSlotCount(WW) {
        return this.isLocal(WW) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(WW) {
        return this.isLocal(WW) ? this.items.selectedSlot : null
      }
      getItemSlot(WW, iW) {
        return this.isLocal(WW) ? this.items.slot(iW) : null
      }
      swapInventorySlots(WW, iW) {
        return this.items.swap(WW, iW)
      }
      isPlayerCrouching(WW) {
        if (this.isLocal(WW)) return 0 !== (AW.z.playerFlags(this.api.apiView, 0) & AW.Ud.Crouching);
        const iW = SO(WW);
        return iW !== AW.kd && 1 === this.api.queries.entityCrouching(iW)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (AW.z.playerFlags(this.api.apiView, 0) & AW.Ud.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.WiW()
      }
      getActionRay() {
        const WW = this.api.apiView;
        for (let iW = 0; iW < 3; iW++) bO.origin[iW] = AW.z.biW(WW, 0, iW), bO.direction[iW] = AW.z.actionDir(WW, 0, iW);
        return bO
      }
      canModifyBlockAt(WW, iW, OW) {
        return 1 === this.api.queries.canModify(WW, iW, OW)
      }
      isSolidToPlayerBlockId(WW) {
        return this.tables.isSolidBlockId(WW) && !this.chunks.isWalkThrough(WW)
      }
      blockNameToBlockId(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(WW, iW)
      }
      blockIdToBlockName(WW) {
        return this.tables.nameOfId(WW)
      }
      piW(WW, iW, OW, mW, EW) {
        return 1 === this.api.queries.terrainBlocked(mW, WW, iW, OW, SO(null !== EW && void 0 !== EW ? EW : null))
      }
      getChunkVersion(WW, iW, OW) {
        return this.chunks.version(WW, iW, OW)
      }
      scanBlocks(WW, iW, OW, mW, EW, NW, PW, LW) {
        return this.chunks.scan(WW, iW, OW, mW, EW, NW, PW, LW)
      }
      readColumnTops(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        this.chunks.columnTops(WW, iW, OW, mW, EW, NW, PW, LW, cW)
      }
      isBlockInLoadedChunk(WW, iW, OW) {
        return this.chunks.isLoaded(WW, iW, OW)
      }
      getBlockId(WW, iW, OW) {
        return this.chunks.NL(WW, iW, OW)
      }
      playSound(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(WW)) return null;
        const PW = this.playSoundFrom(iW, OW, EW, NW);
        return 1 === mW ? PW : PW.rate(mW)
      }
      preloadSounds(WW) {
        var iW, OW;
        null === (iW = (OW = this.deps).preloadSounds) || void 0 === iW || iW.call(OW, WW)
      }
      playSoundFrom(WW, iW, OW, mW) {
        var EW, NW;
        const PW = this.deps.playSound;
        if (!PW) return ei.c;
        const LW = null === OW || void 0 === OW ? void 0 : OW.FO,
          cW = null !== (EW = null === OW || void 0 === OW ? void 0 : OW.maxHearDist) && void 0 !== EW ? EW : Ai.f,
          wW = null !== (NW = null === OW || void 0 === OW ? void 0 : OW.refDistance) && void 0 !== NW ? NW : Ai.g;
        let tW = null;
        if (Array.isArray(LW)) ZO[0] = LW[0], ZO[1] = LW[1], ZO[2] = LW[2], tW = ZO;
        else if (void 0 !== LW && null !== LW) {
          const WW = SO(LW);
          if (!this.api.isLocal(WW)) {
            if (!this.api.readPosition(WW, ZO)) return ei.c;
            tW = ZO
          }
        }
        return PW(WW, iW, tW, tW && this.ear(), cW, wW, mW)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, xO)) xO[1] += Ci;
        else {
          const WW = this.api.apiView;
          if (0 === AW.z.viewProj(WW, 0, 3) && 0 === AW.z.viewProj(WW, 0, 7) && 0 === AW.z.viewProj(WW, 0, 11)) return null;
          for (let iW = 0; iW < 3; iW++) xO[iW] = AW.z.eye(WW, 0, iW)
        }
        return Number.isFinite(xO[0] + xO[1] + xO[2]) ? xO : null
      }
      setBlockId(WW, iW, OW, mW) {
        if (!Number.isInteger(mW) || mW < 0 || mW > 65535) throw new Error(`Invalid block id ${mW}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(WW, iW, OW)) return;
        const EW = Math.floor(WW),
          NW = Math.floor(iW),
          PW = Math.floor(OW),
          LW = this.predictedCells(EW, NW, PW, mW);
        if (1 === this.api.queries.xH(EW, NW, PW, mW)) {
          for (let WW = 0; WW < LW.length; WW += 5) this.chunks.setOverlay(LW[WW], LW[WW + 1], LW[WW + 2], LW[WW + 3], 1 === LW[WW + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(WW, iW) {
        return this.deps.particles.create(WW, iW)
      }
      playParticleEffect(WW) {
        this.deps.particles.playEffect(WW)
      }
      burstParticlePreset(WW, iW, OW) {
        this.deps.particles.burstPreset(WW, iW, OW)
      }
      createGameMesh(WW, iW, OW) {
        const mW = ++this.meshKeys,
          EW = this.deps.cmd();
        if (!EW) return mW;
        const {
          look: NW,
          colour: PW
        } = function(WW) {
          switch (WW.kind) {
            case void 0:
            case "flatEmissive":
              return WW.onTop ? {
                look: AW.kc.FlatOnTop,
                colour: [...WW.rgb, WW.alpha]
              } : WW.opaque ? {
                look: AW.kc.FlatOpaque,
                colour: [...WW.rgb, 1]
              } : {
                look: AW.kc.Flat,
                colour: [...WW.rgb, WW.alpha]
              };
            case "chevronPath":
              return {
                look: AW.kc.Chevrons, colour: [...(0, Ui.d)(WW.colour), WW.alpha]
              };
            case "furnaceFire":
              return {
                look: AW.kc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(iW), LW = Math.floor(WW.positions.length / 3), cW = function(WW, iW) {
          const OW = Math.floor(WW.positions.length / 3),
            mW = WW.indices.length,
            EW = OW * (iW ? 5 : 3),
            NW = new Uint8Array(4 * (EW + mW)),
            PW = new DataView(NW.buffer);
          for (let wW = 0; wW < 3 * OW; wW++) PW.setFloat32(4 * wW, WW.positions[wW], !0);
          if (iW) {
            var LW;
            const iW = null !== (LW = WW.uvs) && void 0 !== LW ? LW : [];
            for (let WW = 0; WW < 2 * OW; WW++) {
              var cW;
              PW.setFloat32(4 * (3 * OW + WW), null !== (cW = iW[WW]) && void 0 !== cW ? cW : 0, !0)
            }
          }
          for (let wW = 0; wW < mW; wW++) PW.setUint32(4 * (EW + wW), WW.indices[wW], !0);
          return NW
        }(WW, (0, Zi.h)(iW));
        return (0, AW.De)(EW, 0, mW, NW, PW, OW, LW, WW.indices.length, cW) && this.liveMeshes.add(mW), mW
      }
      setGameMesh(WW, iW) {
        var OW;
        const mW = this.deps.cmd();
        if (!mW) return;
        let EW = 0;
        iW.anchor && (EW |= AW.nc.Anchor, jO[0] = iW.anchor[0], jO[1] = iW.anchor[1], jO[2] = iW.anchor[2]), void 0 !== iW.visible && (EW |= AW.nc.Visible), iW.uvOffset && (EW |= AW.nc.UvOffset, UO[0] = iW.uvOffset[0], UO[1] = iW.uvOffset[1]);
        const NW = null !== (OW = iW.visibility) && void 0 !== OW ? OW : 1;
        void 0 !== iW.visibility && (EW |= AW.nc.Visibility), iW.scale && (EW |= AW.nc.Scale, kO[0] = iW.scale[0], kO[1] = iW.scale[1], kO[2] = iW.scale[2]), 0 !== EW && (0, AW.Je)(mW, 0, WW, EW, iW.visible ? 1 : 0, jO, UO, NW, kO)
      }
      disposeGameMesh(WW) {
        const iW = this.deps.cmd();
        iW && !(0, AW.Fe)(iW, 0, WW) || this.liveMeshes.delete(WW)
      }
      hasPackModel(WW) {
        var iW, OW, mW;
        return null !== (iW = null === (OW = (mW = this.deps).hasPackModel) || void 0 === OW ? void 0 : OW.call(mW, WW)) && void 0 !== iW && iW
      }
      disposeGameOutput() {
        const WW = WW => {
          try {
            WW()
          } catch (iW) {
            console.error("Error freeing client game output", iW)
          }
        };
        for (const iW of [...this.liveMeshes]) WW((() => {
          this.disposeGameMesh(iW)
        }));
        for (const iW of [...this.livePools]) WW((() => {
          iW.dispose()
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
          this.cameraTurn.dispose()
        })), WW((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(WW, iW) {
        const OW = this.tables.idOf(WW.item);
        if (void 0 === OW) return null;
        const mW = new Fi(++this.poolKeys, {
          item: OW,
          scale: WW.scale,
          yaw: WW.yaw
        }, iW, this.poolHost);
        return this.livePools.add(mW), mW
      }
      createMobModel(WW, iW) {
        return this.mobModels.create(WW, iW)
      }
      createCosmeticModel(WW, iW) {
        return this.mobModels.createCosmetic(WW, iW)
      }
      setRouteChevrons(WW) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !WW || 0 === WW.cells.length) return;
        const iW = `${WW.colour} ${WW.alpha}`;
        iW !== this.routeLook && (this.routeLook = iW, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(WW) {
          const [iW, OW, mW] = WW[0].pos, EW = [], NW = [], PW = [];
          return WW.forEach(((WW, LW) => {
            let {
              pos: cW,
              way: [wW, tW]
            } = WW;
            const ZW = cW[0] - iW + .5,
              xW = cW[1] - OW + .04,
              lW = cW[2] - mW + .5,
              [AW, bW] = [.35 * -tW, .35 * wW],
              [jW, UW] = [LW * sO, (LW + 1) * sO],
              kW = EW.length / 3;
            EW.push(ZW - .5 * wW + AW, xW, lW - .5 * tW + bW), EW.push(ZW - .5 * wW - AW, xW, lW - .5 * tW - bW), EW.push(ZW + .5 * wW + AW, xW, lW + .5 * tW + bW), EW.push(ZW + .5 * wW - AW, xW, lW + .5 * tW - bW), NW.push(0, jW, 1, jW, 0, UW, 1, UW), PW.push(kW, kW + 1, kW + 2, kW + 1, kW + 3, kW + 2)
          })), {
            positions: EW,
            uvs: NW,
            indices: PW
          }
        }(WW.cells), {
          kind: "chevronPath",
          colour: WW.colour,
          alpha: WW.alpha
        }, WW.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(WW) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(WW, 250) / 1e3 * 1.2 * sO) % 1, this.setRouteSlide())
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
        const iW = this.deps.cmd();
        if (!iW) return WW.length = 0, void(this.pendingFar = void 0);
        let OW = 0;
        for (; OW < WW.length && (0, AW.Oe)(iW, 0, WW[OW]);) OW++;
        WW.splice(0, OW);
        const mW = this.pendingStyle;
        if (void 0 !== mW) {
          (mW ? (0, AW.Ef)(iW, 0, mW.width, mW.alpha, 1, mW.endAtSolidFace ? 1 : 0) : (0, AW.Ef)(iW, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const EW = this.pendingFar;
        void 0 !== EW && (0, AW.Af)(iW, 0, null !== EW && void 0 !== EW ? EW : 0, null === EW ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(WW, iW) {
        const OW = this.deps.cmd(),
          mW = SO(WW);
        OW && mW !== AW.kd && (0, AW.Kf)(OW, 0, mW, iW)
      }
      setFacingTolerance(WW, iW) {
        const OW = this.deps.cmd(),
          mW = SO(WW);
        OW && mW !== AW.kd && YO(OW, mW, iW)
      }
      forEachEntity(WW) {
        const {
          api: iW
        } = this;
        for (let OW = 0; OW < iW.idStr.length; OW++) {
          const mW = iW.idStr[OW];
          null === mW || KW(iW.kinds[OW]) || WW(mW)
        }
      }
      getEntityInfo(WW) {
        return this.deps.entityInfo.get(WW)
      }
      isEntityInteractable(WW) {
        const iW = SO(WW);
        return iW !== AW.kd && 1 === this.api.queries.entityInteractable(iW)
      }
      isLocalPlayer(WW) {
        return this.isLocal(WW)
      }
      getLineOwner(WW) {
        var iW;
        const OW = null === (iW = this.deps.entityInfo.get(WW)) || void 0 === iW ? void 0 : iW.meshOpts;
        if (!OW) return null;
        try {
          const {
            lineToEId: WW
          } = JSON.parse(OW);
          return null !== WW && void 0 !== WW ? WW : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const WW = this.api.apiView;
        return AO[0] = AW.z.eye(WW, 0, 0), AO[1] = AW.z.eye(WW, 0, 1), AO[2] = AW.z.eye(WW, 0, 2), AO
      }
      getCameraFar() {
        return AW.z.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(WW) {
        null !== WW && (this.farSet = !0), this.pendingFar = WW, this.flushOwed()
      }
      turnCamera(WW, iW) {
        this.cameraTurn.turn(WW, iW)
      }
      clearPickupDelay(WW) {
        const iW = this.deps.cmd(),
          OW = SO(WW);
        iW && OW !== AW.kd && (0, AW.re)(iW, 0, OW)
      }
      sendChat(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = this.deps.sendCmd();
        return null !== OW && LO(OW, 0, wO.e.Chat, (0, pW.e)((0, wO.p)({
          tP: WW,
          ZP: iW
        })))
      }
      sendCommand(WW) {
        WW.length <= 119 && this.sendChat(`/${WW}`)
      }
      predictedCells(WW, iW, OW, mW) {
        const EW = this.chunks,
          NW = [],
          PW = (WW, iW, OW, mW, EW) => {
            NW.push(WW, iW, OW, mW, this.tables.blockRootId(EW) === this.tables.blockRootId(mW) ? 0 : 1)
          },
          LW = EW.NL(WW, iW, OW),
          cW = KO(LW);
        if (cW) {
          const [mW, NW, wW] = [WW - cW.x, iW - cW.y, OW - cW.z], tW = MO[EW.NL(mW, NW, wW)], ZW = null === tW || void 0 === tW ? void 0 : tW.positions.some((WW => WW.id === LW && WW.x === cW.x && WW.y === cW.y && WW.z === cW.z));
          for (const WW of (ZW && tW ? tW : cW.main).positions) EW.NL(mW + WW.x, NW + WW.y, wW + WW.z) === WW.id && PW(mW + WW.x, NW + WW.y, wW + WW.z, 0, WW.id)
        }
        const wW = KO(mW);
        if (wW)
          for (const ZW of wW.main.positions) {
            const [mW, NW, LW] = [WW + ZW.x - wW.x, iW + ZW.y - wW.y, OW + ZW.z - wW.z];
            PW(mW, NW, LW, ZW.id, EW.NL(mW, NW, LW))
          } else PW(WW, iW, OW, mW, LW);
        const tW = this.tables;
        if ((0 !== tW.attachedTopOf(LW) || 0 !== tW.attachedTopOf(mW)) && EW.isLoaded(WW, iW + 1, OW)) {
          let cW = EW.NL(WW, iW + 1, OW);
          for (let mW = 0; mW < NW.length; mW += 5) NW[mW] === WW && NW[mW + 1] === iW + 1 && NW[mW + 2] === OW && (cW = NW[mW + 3]);
          const wW = this.attachedTopWrite(LW, mW, cW);
          void 0 !== wW && PW(WW, iW + 1, OW, wW, cW)
        }
        return NW
      }
      attachedTopWrite(WW, iW, OW) {
        const mW = this.tables,
          EW = mW.attachedTopOf(WW),
          NW = mW.attachedTopOf(iW),
          PW = 0 !== EW && 0 !== OW && mW.blockRootId(OW) === mW.blockRootId(EW);
        return 0 !== EW && 0 !== NW && mW.blockRootId(WW) === mW.blockRootId(iW) ? PW && OW !== NW ? NW : void 0 : 0 === NW || !PW && 0 !== OW ? PW ? 0 : void 0 : NW
      }
    }
    const TO = AW.Ac + AW.Dc * AW.Kc.BYTES,
      JO = 2147483647,
      hO = new TextDecoder,
      HO = new TextEncoder,
      nO = Object.freeze({
        lL: 0,
        WZ: null,
        amountAddedToSlot: 0
      }),
      uO = new Proxy({}, {
        get: () => () => AW.wd
      });

    function oO(WW) {
      return Number.isInteger(WW) && WW >= 0 && WW <= 65535
    }

    function dO(WW) {
      return Number.isInteger(WW) && WW >= 0 && WW <= 4294967295
    }
    class eO {
      constructor(WW) {
        this.deps = WW, this.CE = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(AW.Dc), this.ids = new Uint16Array(AW.Dc), this.amounts = new Uint16Array(AW.Dc), this.attrRead = new Float64Array(AW.Dc).fill(-1), this.stale = new Uint16Array(AW.Dc), this.staleVersion = new Uint32Array(AW.Dc), this.instances = new Uint32Array(AW.Dc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var iW;
        return Number.isInteger(WW) && WW >= 0 && WW < this.len && 0 !== this.ids[WW] && null !== (iW = this.facades[WW]) && void 0 !== iW ? iW : null
      }
      BL() {
        return this.slot(this.selected)
      }
      playerItems() {
        const WW = [];
        for (let iW = 0; iW < Math.min(AW.Gd, this.len); iW++) WW.push(this.slot(iW));
        return WW
      }
      freeSlots() {
        let WW = 0;
        for (let iW = 0; iW < Math.min(AW.Gd - AW.k, this.len); iW++) 0 === this.ids[iW] && WW++;
        return WW
      }
      amountOf(WW) {
        let iW = 0;
        for (let mW = 0; mW < Math.min(AW.Gd, this.len); mW++) {
          const EW = this.slot(mW);
          var OW;
          if ((null === EW || void 0 === EW ? void 0 : EW.name) === WW) iW += null !== (OW = EW.amount) && void 0 !== OW ? OW : 1
        }
        return iW
      }
      instance(WW) {
        var iW;
        return null !== (iW = this.instances[WW]) && void 0 !== iW ? iW : 0
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
          for (const OW of [...this.listeners]) try {
            OW()
          } catch (iW) {
            WW(iW)
          }
        }
      }
      chestOpened(WW, iW, OW) {
        this.CE[0] = WW, this.CE[1] = iW, this.CE[2] = OW, this.version++
      }
      refresh() {
        const WW = this.deps.api.apiView,
          iW = AW.z.inventoryViewPtr(WW, 0),
          OW = AW.z.inventoryVersion(WW, 0),
          mW = AW.z.selectedSlot(WW, 0);
        mW !== this.selected && (this.selected = mW, this.version++);
        const EW = AW.z.slotIcon(WW, 0);
        if (EW !== this.slotIconId && (this.slotIconId = EW, this.iconChanged = !0), iW === this.viewPtr && OW === this.viewVersion) return;
        this.viewPtr = iW, this.viewVersion = OW;
        const NW = this.deps.api.memoryData(iW, TO, 4, "the inventory view"),
          PW = NW ? Math.min(NW.getUint32(0, !0), AW.Dc) : 0;
        PW !== this.len && (this.len = PW, this.version++);
        let LW = 0;
        for (let cW = 0; cW < AW.Dc; cW++) {
          const WW = AW.Ac + cW * AW.Kc.BYTES,
            iW = null !== NW && cW < PW ? AW.Kc.item(NW, WW) : 0;
          if (0 === iW || null === NW) {
            0 !== this.ids[cW] && (this.ids[cW] = 0, this.attrRead[cW] = -1, this.instances[cW]++, this.version++);
            continue
          }
          const OW = AW.Kc.amount(NW, WW),
            mW = AW.Kc.attrVersion(NW, WW);
          iW === this.ids[cW] && OW === this.amounts[cW] || this.fill(cW, iW, OW), mW !== this.attrRead[cW] && (this.stale[LW] = cW, this.staleVersion[LW] = mW, LW++)
        }
        LW > 0 && this.fetchAttributes(LW)
      }
      fill(WW, iW, OW) {
        const {
          tables: mW
        } = this.deps, EW = iW !== this.ids[WW];
        let NW = this.facades[WW];
        NW || (NW = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[WW] = NW), EW && (NW.name = mW.nameOfId(iW), NW.typeObj = mW.itemType(iW), NW.attributes = {
          customAttributes: {}
        }, this.attrRead[WW] = -1, this.instances[WW]++), NW.amount = 0 === OW ? null : OW, this.ids[WW] = iW, this.amounts[WW] = OW, this.version++
      }
      fetchAttributes(WW) {
        const {
          api: iW,
          onError: OW
        } = this.deps, mW = iW.memoryView(Uint16Array, iW.scratch(), WW, "item_attributes_batch's slots");
        if (!mW) return void this.markRead(WW);
        mW.set(this.stale.subarray(0, WW));
        const EW = iW.queries.itemAttributesBatch(WW),
          NW = 4294967295 === EW ? null : iW.memoryData(iW.scratch(), EW, 4, "item_attributes_batch's answer");
        if (!NW) return void this.markRead(WW);
        const PW = new Uint8Array(NW.buffer, NW.byteOffset, EW);
        for (let cW = 0; cW + 8 <= EW;) {
          const WW = NW.getUint16(cW, !0),
            iW = NW.getUint32(cW + 4, !0),
            mW = PW.subarray(cW + 8, cW + 8 + iW);
          cW += 8 + (0, xW.xe)(iW);
          const EW = this.facades[WW];
          if (EW && 0 !== this.ids[WW] && 0 !== iW) {
            try {
              EW.attributes = JSON.parse(hO.decode(mW))
            } catch (LW) {
              OW(LW)
            }
            this.version++
          }
        }
        this.markRead(WW)
      }
      markRead(WW) {
        for (let iW = 0; iW < WW; iW++) this.attrRead[this.stale[iW]] = this.staleVersion[iW]
      }
      swap(WW, iW) {
        return oO(WW) && oO(iW) && this.settle(this.queries().invSwap(WW, iW))
      }
      move(WW, iW, OW) {
        return oO(WW) && oO(iW) && dO(OW) && this.settle(this.queries().invMove(WW, iW, OW))
      }
      quickMove(WW, iW, OW, mW) {
        var EW, NW;
        if (!oO(WW) || !oO(iW) || !oO(OW) || null !== mW && !dO(mW)) return null;
        const PW = this.queries().invQuickMove(WW, iW, OW, null === mW ? -1 : Math.min(mW, JO)),
          LW = PW === AW.wd ? AW.Xb : null !== (EW = null === (NW = this.extras()) || void 0 === NW ? void 0 : NW[1]) && void 0 !== EW ? EW : AW.Xb;
        return this.settle(PW), LW === AW.Xb ? null : LW
      }
      remove(WW, iW, OW) {
        return oO(WW) && dO(iW) && this.settle(this.queries().invRemove(WW, iW, OW ? 1 : 0))
      }
      selectSlot(WW) {
        return oO(WW) && this.settle(this.queries().selectSlot(WW))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(WW, iW, OW) {
        if (!oO(WW) || !Number.isInteger(iW)) return !1;
        const [mW, EW, NW] = OW;
        return this.settle(this.queries().invEnchant(WW, iW, Math.floor(mW), Math.floor(EW), Math.floor(NW)))
      }
      craft(WW, iW, OW) {
        let mW;
        try {
          mW = this.deps.tables.getItemId(WW)
        } catch {
          return nO
        }
        if (!oO(iW) || null !== OW && (Number.isNaN(OW) || OW < 0)) return nO;
        const EW = null === OW || OW > JO ? -1 : Math.floor(OW),
          NW = this.queries().craft(mW, iW, EW);
        let PW = nO;
        const LW = NW === AW.wd ? null : this.extras();
        if (LW) {
          const [WW, iW, OW] = LW;
          PW = {
            lL: WW,
            WZ: iW === AW.Xb ? null : iW,
            amountAddedToSlot: OW
          }
        }
        return this.settle(NW), PW
      }
      salvage(WW, iW, OW) {
        let mW;
        try {
          mW = this.deps.tables.getItemId(iW)
        } catch {
          return !1
        }
        return oO(WW) && Number.isInteger(OW) && this.settle(this.queries().salvage(WW, mW, Math.max(Math.min(OW, JO), -JO)))
      }
      craftingView(WW, iW, OW) {
        var mW;
        if (this.stopped) return null;
        const {
          api: EW,
          onError: NW
        } = this.deps, PW = WW ? HO.encode(WW) : null;
        if (null !== PW) {
          if (PW.length > 1024) return NW(new Error(`The crafting station ${WW}'s name is over 1024 bytes`)), null;
          const iW = EW.memoryView(Uint8Array, EW.scratch(), PW.length, "crafting_view's station");
          if (!iW) return null;
          iW.set(PW)
        }
        const LW = oO(iW) && oO(OW),
          cW = EW.queries.craftingView(null !== (mW = null === PW || void 0 === PW ? void 0 : PW.length) && void 0 !== mW ? mW : 0, LW ? iW : 0, LW ? OW : 0);
        return cW < AW.rb.BYTES ? (EW.reportCorruption(`crafting_view's answer of ${cW} bytes`), null) : EW.memoryData(EW.scratch(), cW, 1, "crafting_view's answer")
      }
      queries() {
        var WW, iW;
        return !1 === (null === (WW = (iW = this.deps).beforeOp) || void 0 === WW ? void 0 : WW.call(iW)) ? (this.stopped = !0, uO) : this.deps.api.queries
      }
      extras() {
        const {
          api: WW
        } = this.deps;
        return WW.memoryView(Uint32Array, WW.scratch(), 3, "a sync query's extra words")
      }
      settle(WW) {
        if (WW === AW.sd)(0, PO.b)();
        else if (WW !== AW.wd) {
          const iW = this.deps.cmd();
          iW && function(WW, iW, OW) {
            return (0, PO.b)(), (0, AW.Uf)(WW, iW, OW)
          }(iW, 0, WW) || this.deps.onError(new Error(`Sync op ${WW}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), WW !== AW.wd
      }
    }
    const vO = 1 / .6,
      gO = [0, 1, 0],
      DO = [0, 0, 0],
      VO = new Uint8Array(0),
      pO = 1.2 * ki.f.tU,
      fO = new TextEncoder,
      CO = [0, 0, 0],
      XO = [0, 0, 0],
      BO = new Map;

    function qO(WW) {
      let iW = BO.get(WW);
      return iW || (BO.size >= 64 && BO.clear(), iW = fO.encode(`{"emitRate":${WW}}`), BO.set(WW, iW)), iW
    }

    function RO(WW) {
      return Number.isFinite(WW) && WW > 0 ? WW : 0
    }

    function GO(WW, iW) {
      for (let OW = 0; OW < 3; OW++) {
        const mW = Math.abs(iW[OW]);
        CO[OW] = WW[OW] - mW, XO[OW] = 2 * mW
      }
      return Number.isFinite(CO[0] + CO[1] + CO[2] + XO[0] + XO[1] + XO[2])
    }

    function IO(WW, iW) {
      return "pos1" === WW || "pos2" === WW ? void 0 : iW
    }

    function aO(WW, iW, OW) {
      return WW.length > AW.Td.MaxOpts ? (OW(new Error(`${iW}'s particle opts are over ${AW.Td.MaxOpts} bytes of JSON`)), null) : WW
    }
    const rO = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class zO {
      constructor(WW) {
        this.deps = WW, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(WW, iW) {
        var OW;
        const mW = this.sink(),
          EW = null !== (OW = iW.half) && void 0 !== OW ? OW : DO;
        if (!mW || this.live >= AW.Td.MaxLiveKeys || this.nextKey > AW.Td.MaxKey || !GO(iW.pos, EW)) return rO;
        const NW = this.nextKey,
          PW = aO(function(WW) {
            var iW, OW, mW;
            const EW = JSON.stringify({
              texture: "string" === typeof WW.texture ? WW.texture : "smokePuff",
              aZ: WW.aZ,
              minLifeTime: WW.minLifeTime,
              maxLifeTime: WW.maxLifeTime,
              minSize: WW.minSize,
              maxSize: WW.maxSize,
              minEmitPower: WW.minEmitPower,
              maxEmitPower: WW.maxEmitPower,
              emitRate: RO(WW.emitRate),
              gravity: null !== (iW = WW.gravity) && void 0 !== iW ? iW : DO,
              dir1: null !== (OW = WW.dir1) && void 0 !== OW ? OW : gO,
              dir2: null !== (mW = WW.dir2) && void 0 !== mW ? mW : gO,
              colorGradients: WW.colorGradients,
              blendMode: WW.blendMode
            });
            return fO.encode(EW)
          }(WW), "createParticles", this.deps.onError);
        return PW && (0, AW.af)(mW, 0, NW, 0, AW.Td.PresetNone, 0, CO, XO, PW) ? (this.nextKey++, this.live++, this.started = !0, new FO(this, this.session, NW, WW, EW)) : rO
      }
      playEffect(WW) {
        const iW = this.sink(),
          {
            pos1: OW,
            pos2: mW
          } = WW;
        if (!iW || !OW || !mW) return;
        for (let NW = 0; NW < 3; NW++) CO[NW] = Math.min(OW[NW], mW[NW]), XO[NW] = Math.abs(mW[NW] - OW[NW]);
        if (!Number.isFinite(CO[0] + CO[1] + CO[2] + XO[0] + XO[1] + XO[2])) return;
        const EW = aO(fO.encode(JSON.stringify(WW, IO)), "playParticleEffect", this.deps.onError);
        EW && (0, AW.We)(iW, 0, 0, AW.Td.PresetNone, AW.Td.HasBox, 0, CO, XO, EW)
      }
      burstPreset(WW, iW, OW) {
        const mW = this.sink(),
          EW = Math.min(Math.floor(OW), AW.Td.MaxBurst);
        if (!mW || !Object.hasOwn(AW.pc, WW) || !(EW > 0)) return;
        const NW = pO;
        for (let PW = 0; PW < 3; PW++) CO[PW] = iW[PW] - NW / 2, XO[PW] = NW;
        Number.isFinite(CO[0] + CO[1] + CO[2]) && (0, AW.We)(mW, 0, 0, AW.pc[WW], AW.Td.HasBox, EW, CO, XO, VO)
      }
      sessionEnded() {
        this.session++;
        const WW = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !WW || (0, AW.bf)(WW, 0)
      }
      sinkFor(WW) {
        return WW === this.session ? this.deps.cmd() : null
      }
      stop(WW, iW) {
        const OW = this.sinkFor(WW);
        OW && (0, AW.df)(OW, 0, iW) && this.live--
      }
    }
    class FO {
      constructor(WW, iW, OW, mW, EW) {
        this.owner = WW, this.session = iW, this.key = OW, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(EW[0]), Math.abs(EW[1]), Math.abs(EW[2])], this.rate = RO(mW.emitRate), this.emitted = this.rate > 0;
        const NW = mW.maxLifeTime * vO * 1e3 + 250;
        this.stopDelayMs = NW >= 0 ? Math.min(NW, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(WW, iW) {
        const OW = this.sink();
        if (OW) {
          if (iW)
            for (let WW = 0; WW < 3; WW++) this.half[WW] = Math.abs(iW[WW]);
          GO(WW, this.half) && (0, AW.gf)(OW, 0, this.key, AW.Td.HasBox, CO, XO, VO)
        }
      }
      setEmitRate(WW) {
        const iW = this.sink(),
          OW = RO(WW);
        iW && OW !== this.rate && (0, AW.gf)(iW, 0, this.key, 0, DO, DO, qO(OW)) && (this.rate = OW, this.emitted ||= OW > 0)
      }
      emit(WW) {
        const iW = this.sink(),
          OW = Math.min(Math.floor(WW), AW.Td.MaxBurst);
        iW && OW > 0 && (0, AW.We)(iW, 0, this.key, AW.Td.PresetNone, 0, OW, DO, DO, VO) && (this.emitted = !0)
      }
      emitPoints(WW, iW, OW) {
        const mW = this.sink(),
          EW = Math.min(Math.floor(OW), AW.Td.MaxPoints, Math.floor(iW.length / 4));
        if (!mW || !(EW > 0) || !Number.isFinite(WW[0] + WW[1] + WW[2])) return;
        const NW = new Uint8Array(iW.buffer, iW.byteOffset, EW * AW.Td.PointBytes);
        (0, AW._e)(mW, 0, this.key, EW, WW, NW) && (this.emitted = !0)
      }
      setDirections(WW, iW) {
        const OW = this.sink();
        if (!OW || !Number.isFinite(WW[0] + WW[1] + WW[2] + iW[0] + iW[1] + iW[2])) return;
        const mW = fO.encode(JSON.stringify({
          dir1: [WW[0], WW[1], WW[2]],
          dir2: [iW[0], iW[1], iW[2]]
        }));
        (0, AW.gf)(OW, 0, this.key, 0, DO, DO, mW)
      }
      stop() {
        const WW = this.sink();
        this.stopped = !0, WW && (this.emitted ? (this.rate > 0 && (0, AW.gf)(WW, 0, this.key, 0, DO, DO, qO(0)), setTimeout((() => {
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
    const QO = Qi.m,
      Wm = new TextDecoder;

    function im(WW, iW) {
      const {
        serverIds: OW,
        kinds: mW
      } = WW;
      let EW = 0;
      for (let NW = 0; NW < OW.length; NW++) {
        const WW = OW[NW];
        if (WW !== AW.kd && !KW(mW[NW])) {
          if (EW === iW.length) {
            const WW = new Int32Array(Math.max(64, 2 * EW));
            WW.set(iW), iW = WW
          }
          iW[EW++] = WW
        }
      }
      return {
        ids: iW,
        count: EW
      }
    }

    function Om(WW, iW) {
      return WW.length >= iW ? WW : new Int32Array(Math.max(iW, 2 * WW.length))
    }

    function mm(WW, iW, OW, mW) {
      for (let EW = 0; EW < OW; EW += 4096) {
        const NW = Math.min(4096, OW - EW),
          PW = WW.memoryView(Int32Array, WW.scratch(), NW, "entity_info_batch's ids");
        if (!PW) return !1;
        PW.set(iW.subarray(EW, EW + NW));
        const LW = WW.queries.entityInfoBatch(NW),
          cW = 4294967295 === LW ? null : WW.memoryData(WW.scratch(), LW, 4, "entity_info_batch's records");
        if (!cW) return !1;
        for (let WW = 0; WW + AW.cc.BYTES <= LW;) {
          const iW = AW.cc.len(cW, WW);
          mW(AW.cc.serverId(cW, WW), Em(cW, WW, iW)), WW += AW.cc.BYTES + (0, xW.xe)(iW)
        }
      }
      return !0
    }

    function Em(WW, iW, OW) {
      var mW, EW, NW;
      const PW = AW.cc.kind(WW, iW),
        LW = 0 === PW ? null : SW(PW);
      if (null === LW) return null;
      const cW = AW.cc.variation(WW, iW),
        wW = AW.cc.pose(WW, iW),
        tW = AW.cc.meta(WW, iW),
        ZW = AW.cc.mesh(WW, iW),
        xW = 0 !== (AW.cc.flags(WW, iW) & AW.bc.HasOpts),
        lW = QO[LW];
      return Object.freeze({
        type: LW,
        variation: cW === AW.od ? void 0 : null !== (mW = null !== (EW = null === lW || void 0 === lW ? void 0 : lW[cW]) && void 0 !== EW ? EW : null === lW || void 0 === lW ? void 0 : lW[0]) && void 0 !== mW ? mW : "default",
        pose: wW === AW.wc ? void 0 : null !== (NW = AW.Qb[wW]) && void 0 !== NW ? NW : AW.Qb[0],
        metaInfo: tW === AW.wc ? void 0 : AW.cd[tW],
        meshKind: ZW === AW.wc ? void 0 : AW.ad[ZW],
        meshOpts: xW ? Wm.decode(new Uint8Array(WW.buffer, WW.byteOffset + iW + AW.cc.BYTES, OW)) : void 0
      })
    }
    const Nm = 1,
      Pm = 2;
    class Lm {
      constructor(WW) {
        this.deps = WW, this.wanted = 0, this.BL = !1, this.refused = !1
      }
      get on() {
        return this.BL
      }
      want(WW, iW) {
        this.wanted = iW ? this.wanted | WW : this.wanted & ~WW;
        const OW = 0 !== this.wanted;
        if (OW === this.BL) return;
        const mW = this.deps.cmd();
        null !== mW ? (0, AW.Yf)(mW, 0, OW ? 1 : 0) ? (this.BL = OW, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.BL = !1
      }
    }
    class cm {
      constructor(WW) {
        this.deps = WW, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(WW) {
        var iW;
        return this.complete || this.fill(), null !== (iW = this.entries.get("string" === typeof WW ? WW : String(WW))) && void 0 !== iW ? iW : null
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
            api: iW
          } = this.deps;
          let OW = 0;
          const mW = this.ids = Om(this.ids, WW);
          for (let EW = 0; EW < WW; EW++) {
            const WW = this.pending[EW],
              NW = iW.indexById.get(WW);
            void 0 === NW || KW(iW.kinds[NW]) ? this.entries.delete(String(WW)) : mW[OW++] = WW
          }
          OW > 0 && !this.batch(mW, OW) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Nm, !1)
      }
      fill() {
        const {
          api: WW
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: WW
          } = this.deps, iW = WW.on;
          WW.want(Nm, !0), !iW && WW.on && (this.refill = this.midFrame)
        }
        const {
          ids: iW,
          count: OW
        } = im(WW, this.ids);
        this.ids = iW, OW > 0 && !this.batch(iW, OW) && (this.refill = !0)
      }
      batch(WW, iW) {
        return mm(this.deps.api, WW, iW, ((WW, iW) => {
          null === iW ? this.entries.delete(String(WW)) : this.entries.set(String(WW), iW)
        }))
      }
    }
    var wm = OW(5551);

    function tm(WW) {
      if ("message" !== WW.type || WW.tP !== wm.uc.NewClientOptions || WW.payloadKind !== xW.hc.Msgpack) return null;
      const iW = (0, pW.d)(WW.payload);
      if (null === iW || "object" !== typeof iW || Array.isArray(iW)) throw new Error("NewClientOptions whose body isn't an object of options");
      return iW
    }
    var Zm = OW(1230),
      xm = OW(37902);

    function lm(WW, iW, OW, mW, EW, NW, LW) {
      var cW, wW, tW;
      switch (WW) {
        case AW.ke.ToggleMenu: {
          const WW = AW.P[iW];
          PW.l.iZ("toggleMenu", void 0 === WW ? "inventory" : `inventory|${WW}`);
          break
        }
        case AW.ke.EditBoard:
          PW.l.iZ("EditBoard", {
            pos: 0 === iW ? null : OW
          });
          break;
        case AW.ke.EditCodeBlock:
        case AW.ke.ViewCodeBlock:
          PW.l.iZ("EditCodeBlock", {
            pos: OW,
            canChangePos: WW === AW.ke.EditCodeBlock
          });
          break;
        case AW.ke.EditCustomLobbyBlock:
          PW.l.iZ("EditCustomLobbyBlock", {
            pos: OW
          });
          break;
        case AW.ke.OpenIronChest:
          PW.l.iZ("OpenIronChest", {
            pos: OW
          });
          break;
        case AW.ke.EditNameTag:
          PW.l.iZ("EditNameTag", null !== (cW = null === (wW = EW.BL()) || void 0 === wW || null === (tW = wW.attributes.customAttributes) || void 0 === tW ? void 0 : tW.text) && void 0 !== cW ? cW : "");
          break;
        case AW.ke.EditBook: {
          var ZW, xW, bW;
          const WW = null === (ZW = EW.BL()) || void 0 === ZW ? void 0 : ZW.attributes;
          PW.l.iZ("EditBook", {
            pages: (0, Zm.G)(null === WW || void 0 === WW || null === (xW = WW.customAttributes) || void 0 === xW ? void 0 : xW.pages),
            title: null !== (bW = null === WW || void 0 === WW ? void 0 : WW.customDisplayName) && void 0 !== bW ? bW : "Title",
            isPublished: !(null === WW || void 0 === WW || !WW.customDescription)
          });
          break
        }
        case AW.ke.CantChangeBlock:
          ! function(WW, iW) {
            const OW = iW.getClientOption("cantChangeError"),
              mW = iW.getClientOption(WW ? "cantBuildError" : "cantBreakError"),
              EW = WW ? OW : mW;
            (iW.getClientOption("canChange") || EW || "You cannot modify this block" !== OW) && PW.l.iZ("showBottomMessage", {
              message: mW || OW,
              type: "Error"
            })
          }(1 === iW, NW);
          break;
        case AW.ke.MiddleBarStart:
          PW.l.iZ("middleScreenBarInitiate", {
            duration: mW,
            lN: 1 === OW[0],
            horizBarRemOffset: iW
          });
          break;
        case AW.ke.MiddleBarStop:
          PW.l.iZ("middleScreenBarRemove");
          break;
        case AW.ke.Hitmarker:
          PW.l.iZ("localGunHitmarker", {
            ui: 1 === iW
          });
          break;
        case AW.ke.ShotsLeft:
          PW.l.iZ("localPlayerNewShotsLeft", mW);
          break;
        case AW.ke.AimingOverlay:
          PW.l.iZ("aimingOverlay", 3 === (3 & iW) ? "sniper" : "none");
          break;
        case AW.ke.BottomMessage:
          PW.l.iZ("showBottomMessage", JSON.parse(LW()));
          break;
        case AW.ke.Crosshair:
          EW.inaccuracy = (0, fW.d)(mW), (0, xm.e)().crosshairAccuracy(EW.inaccuracy);
          break;
        case AW.ke.ChargeStage:
          break;
        case AW.ke.EmoteWheelClose:
          PW.l.iZ("requestEmoteWheelClose");
          break;
        case AW.ke.BlockMined:
          PW.l.iZ("localBlockMined");
          break;
        default:
          throw new lW.e(`UiEvent of no kind: what ${WW}`)
      }
    }
    var Am = OW(39189),
      bm = OW(35225),
      jm = OW(2072),
      Um = OW(37968),
      km = OW(35231),
      sm = OW(5533);
    const Mm = 10,
      Km = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      Sm = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Ym = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function ym(WW, iW) {
      let OW, mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const NW = () => (OW = (0, jm.t)(OW, iW()), OW);
      return {
        current: NW,
        watch(iW) {
          const OW = () => {
              iW(NW())
            },
            PW = [WW.watch(OW)];
          return null !== mW && PW.push((0, jm.w)((WW => {
            WW.some(mW) && OW()
          }))), null !== EW && PW.push(EW(OW)), () => {
            for (const WW of PW) WW()
          }
        }
      }
    }

    function Tm(WW) {
      return WW && {
        name: WW.name,
        amount: WW.amount,
        attributes: WW.attributes
      }
    }
    const Jm = new WeakMap;

    function hm(WW) {
      let iW = Jm.get(WW);
      return void 0 === iW && (iW = (0, km.creativeItemIds)().map((iW => ({
        name: WW.nameOfId(iW),
        amount: WW.isStackableId(iW) ? 1 : null,
        attributes: (0, Am.c)("Gun" === (0, km.itemTypeOf)(iW) ? {
          type: "Gun",
          clipSize: (0, km.clipSizeOf)(iW)
        } : void 0)
      }))), Jm.set(WW, iW)), iW
    }

    function Hm(WW, iW, OW, mW) {
      const EW = iW => (WW.flush(mW), iW),
        NW = OW => {
          var mW, EW, NW, PW, LW, cW, wW;
          const tW = WW.slot(OW);
          if (!tW) return null;
          const {
            rootName: ZW,
            metaStr: xW
          } = iW.getMetaInfo(tW.name);
          return {
            name: tW.name,
            amount: tW.amount,
            attributes: tW.attributes,
            instance: WW.instance(OW),
            displayName: null !== (mW = tW.attributes.customDisplayName) && void 0 !== mW ? mW : iW.getDisplayName(ZW),
            requiresAmmo: "RequiresAmmo" === xW,
            clipSize: null !== (EW = null !== (NW = null === (PW = tW.attributes.customAttributes) || void 0 === PW || null === (LW = PW.gunStats) || void 0 === LW ? void 0 : LW.clipSize) && void 0 !== NW ? NW : null === (cW = iW.getGunStats(ZW)) || void 0 === cW ? void 0 : cW.clipSize) && void 0 !== EW ? EW : null === (wW = tW.typeObj) || void 0 === wW ? void 0 : wW.clipSize
          }
        },
        LW = function(WW, iW) {
          let OW = null,
            mW = {
              focus: null,
              recipes: [],
              detail: null
            },
            EW = -1;
          const NW = new Set;
          return {
            read() {
              var NW, PW;
              if (null === OW) return null !== mW.focus && (mW = {
                ...mW,
                focus: null
              }), mW;
              if (mW.focus === OW && EW === WW.changes) return mW;
              if (EW = WW.changes, 0 === WW.length) return mW = {
                focus: OW,
                recipes: [],
                detail: null
              }, mW;
              let LW = 0;
              if (null !== OW.recipe) try {
                LW = iW.getItemId(OW.recipe.name)
              } catch {}
              const cW = WW.craftingView(OW.station, LW, null !== (NW = null === (PW = OW.recipe) || void 0 === PW ? void 0 : PW.xL) && void 0 !== NW ? NW : 0);
              return mW = null === cW ? {
                focus: OW,
                recipes: [],
                detail: null
              } : function(WW, iW, OW) {
                let mW = AW.rb.BYTES;
                const EW = [];
                for (let tW = AW.rb.recipes(WW, 0); tW > 0; tW--) {
                  const OW = AW.mb.flags(WW, mW),
                    NW = {
                      name: iW.nameOfId(AW.mb.item(WW, mW)),
                      xL: AW.mb.recipe(WW, mW),
                      requires: [],
                      produces: AW.mb.produces(WW, mW),
                      haveIngredients: 0 !== (OW & AW.ib.HaveIngredients),
                      listed: 0 !== (OW & AW.ib.Listed)
                    };
                  let PW = AW.mb.requires(WW, mW);
                  for (mW += AW.mb.BYTES; PW > 0; PW--) {
                    const OW = AW.nb.items(WW, mW);
                    NW.requires.push({
                      items: om(WW, mW + AW.nb.BYTES, OW, iW),
                      amt: AW.nb.amount(WW, mW)
                    }), mW += AW.nb.BYTES + 2 * OW
                  }
                  EW.push(NW)
                }
                const NW = AW.rb.flags(WW, 0);
                if (null === OW.recipe || 0 === (NW & AW.qb.Detail)) return {
                  focus: OW,
                  recipes: EW,
                  detail: null
                };
                const PW = {},
                  LW = {};
                for (let tW = AW.rb.ingredients(WW, 0); tW > 0; tW--) {
                  const OW = AW.eb.item(WW, mW),
                    EW = AW.eb.from(WW, mW),
                    NW = AW.eb.amount(WW, mW);
                  mW += AW.eb.BYTES;
                  const cW = EW === AW.M ? null : om(WW, mW, EW, iW);
                  if (null !== cW && (mW += 2 * EW), 0 === OW) continue;
                  const wW = iW.nameOfId(OW);
                  PW[wW] = NW, null !== cW && (LW[wW] = cW)
                }
                const {
                  name: cW,
                  xL: wW
                } = OW.recipe;
                return {
                  focus: OW,
                  recipes: EW,
                  detail: {
                    name: cW,
                    xL: wW,
                    craftAllTimes: AW.rb.craftAllTimes(WW, 0),
                    roomForOne: 0 !== (NW & AW.qb.RoomForOne),
                    resultStackable: Boolean(iW.getItemStat(cW, "stackable")),
                    amounts: PW,
                    ingredientsCraftedFrom: LW
                  }
                }
              }(cW, iW, OW), mW
            },
            setFocus(WW) {
              OW = WW;
              for (const iW of [...NW]) iW()
            },
            watchFocus: WW => (NW.add(WW), () => {
              NW.delete(WW)
            })
          }
        }(WW, iW);
      return {
        states: {
          inventory: ym(WW, (() => {
            const OW = WW.length;
            if (0 === OW) return Km;
            const mW = [];
            for (let iW = 0; iW < AW.Gd; iW++) mW.push(Tm(WW.slot(iW)));
            const EW = WW.slotIcon,
              NW = mW[WW.selectedSlot];
            0 !== EW && NW && (mW[WW.selectedSlot] = {
              ...NW,
              icon: iW.nameOfId(EW)
            });
            const PW = !0 === iW.getClientOption("creative");
            let LW = [],
              cW = null;
            if (OW > AW.Gd) {
              for (let iW = AW.Gd; iW < OW; iW++) LW.push(Tm(WW.slot(iW)));
              cW = {
                type: null,
                pos: [...WW.CE],
                numSlots: OW - AW.Gd,
                ironChest: null
              }
            } else PW && (LW = hm(iW));
            return {
              player: mW,
              chestOrCreative: LW,
              chest: cW,
              creative: PW,
              selectedSlot: WW.selectedSlot,
              freeSlots: WW.freeSlots()
            }
          }), (0, jm.o)("creative")),
          hotbar: ym(WW, (() => {
            if (0 === WW.length) return Sm;
            const iW = [];
            for (let WW = 0; WW < Mm; WW++) iW.push(NW(WW));
            return {
              items: iW,
              ammo: WW.amountOf("Ammo"),
              selectedSlot: WW.selectedSlot
            }
          }), (0, jm.k)("DisplayName", "GunStats")),
          crafting: ym(WW, LW.read, null, LW.watchFocus),
          heldItemAim: ym(WW, (() => {
            var iW;
            if (!OW()) return Ym;
            const mW = null === (iW = WW.BL()) || void 0 === iW ? void 0 : iW.typeObj,
              EW = "Gun" === (null === mW || void 0 === mW ? void 0 : mW.type);
            return {
              gun: EW,
              aimable: EW || !0 === (null === mW || void 0 === mW ? void 0 : mW.showsAimingUi),
              chargeName: "Chargeable" === (null === mW || void 0 === mW ? void 0 : mW.type) ? mW.name : null
            }
          }), null, (WW => function(WW, iW) {
            let OW = WW();
            return (0, sm.x)((() => {
              const mW = WW();
              mW !== OW && (OW = mW, iW(mW))
            }))
          }(OW, WW)))
        },
        events: {
          hotbarSlotRequested: (0, jm.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, jm.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, jm.d)("numkeyPressed"),
          inventoryDropRequested: (0, jm.d)("DropInvenItem"),
          chestToggled: (0, jm.d)("chestToggleFromServer"),
          chestRefreshed: (0, jm.d)("chestRefreshedFromServer", um),
          inventorySynced: (0, jm.d)("syncedInvenFromServer", um),
          enchantingTableOpened: (0, jm.d)("enchantingTable", (WW => {
            let {
              position: OW,
              NL: mW
            } = WW;
            return {
              position: [...OW],
              blockName: iW.getMetaInfo(mW).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(iW) {
            WW.selectSlot(iW), WW.flush(mW)
          },
          removeInventoryItem(iW) {
            let {
              slot: OW,
              amount: mW,
              drop: NW
            } = iW;
            return EW(WW.remove(OW, mW, NW))
          },
          swapInventorySlots(iW) {
            let {
              a: OW,
              b: mW
            } = iW;
            return EW(WW.swap(OW, mW))
          },
          moveInventoryItem(iW) {
            let {
              from: OW,
              to: mW,
              amount: NW
            } = iW;
            return EW(WW.move(OW, mW, NW))
          },
          quickMoveInventoryItem(iW) {
            let {
              slot: OW,
              start: mW,
              end: NW,
              amount: PW
            } = iW;
            return EW(WW.quickMove(OW, mW, NW, PW))
          },
          closeChest() {
            WW.closeChest(), WW.flush(mW), PW.l.iZ("chestClosedByPlayer")
          },
          focusCrafting(WW) {
            LW.setFocus(WW)
          },
          craftRecipe(iW) {
            let {
              name: OW,
              xL: mW,
              times: NW
            } = iW;
            return EW(WW.craft(OW, mW, NW))
          },
          salvageItem(iW) {
            let {
              slot: OW,
              name: mW,
              amount: NW
            } = iW;
            return EW(WW.salvage(OW, mW, NW))
          },
          enchantItem(iW) {
            let {
              slot: OW,
              level: mW,
              tablePos: EW
            } = iW;
            WW.enchant(OW, mW, EW)
          }
        },
        queries: {
          enchantingOffer(OW) {
            let {
              slot: mW,
              blockName: EW
            } = OW;
            return function(WW, iW, OW, mW) {
              const EW = WW.slot(OW);
              if (!EW || !iW.getClientOption("canCraft") || !(0, bm.q)(mW) || (0, bm.o)(EW.attributes)) return nm;
              const NW = (0, km.enchantmentPerksOf)(iW.getItemId(EW.name));
              if (0 === NW.length) return nm;
              const PW = [];
              for (let LW = 0; LW < Um.c; LW++) {
                const {
                  commonProb: WW,
                  uncommonProb: iW,
                  rareProb: OW,
                  epicProb: EW,
                  legendaryProb: NW,
                  level: cW
                } = (0, bm.e)(mW, LW);
                PW.push({
                  level: cW,
                  odds: [WW, iW, OW, EW, NW].map((WW => 100 * WW))
                })
              }
              return {
                perks: [...NW],
                options: PW
              }
            }(WW, iW, mW, EW)
          }
        }
      }
    }
    const nm = Object.freeze({
      perks: [],
      options: []
    });

    function um() {
      return null
    }

    function om(WW, iW, OW, mW) {
      const EW = [];
      for (let NW = 0; NW < OW; NW++) {
        const OW = WW.getUint16(iW + 2 * NW, !0);
        0 !== OW && EW.push(mW.nameOfId(OW))
      }
      return EW
    }
    class dm {
      constructor(WW) {
        this.api = WW, this.positions = new Map, this.targeted = {
          X3: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Uj: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(WW) {
        let iW = this.positions.get(WW);
        return iW || (this.api.checkValid(WW) || this.api.isLocal(WW) ? (iW = [NaN, NaN, NaN], this.api.readPosition(WW, iW), this.positions.set(WW, iW), iW) : null)
      }
      WiW() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [iW, OW] of this.positions) this.api.readPosition(iW, OW) || this.api.checkValid(iW) || this.api.isLocal(iW) || this.positions.delete(iW);
        const WW = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (AW.z.playerFlags(WW, 0) & AW.Ud.Breaking) && AW.z.breakingProgress(WW, 0) >= 0, this.isBreaking)
          for (let iW = 0; iW < 3; iW++) this.breaking[iW] = AW.z.breakingPos(WW, 0, iW)
      }
      refreshTarget() {
        const WW = this.api.apiView,
          iW = AW.z.targetBlockId(WW, 0);
        if (this.hasTarget = iW !== AW.nd, this.hasTarget) {
          const OW = this.targeted;
          OW.X3 = iW;
          for (let iW = 0; iW < 3; iW++) OW.position[iW] = AW.z.targetBlock(WW, 0, iW), OW.normal[iW] = AW.z.targetNormal(WW, 0, iW), OW.Uj[iW] = AW.z.targetAdjacent(WW, 0, iW)
        }
      }
      despawned(WW) {
        const iW = this.positions.get(WW);
        iW && !this.api.isLocal(WW) && (iW.fill(NaN), this.positions.delete(WW))
      }
    }
    var em = OW(42146),
      gm = OW(42131),
      Dm = OW(37527),
      Vm = OW(37626);
    const pm = 1,
      fm = 2;
    class Cm {
      constructor() {
        this.game = new Vm.i, this.client = new Vm.i, this.BL = 0, this.movesFly = null
      }
      setGame(WW) {
        if (null === WW || "object" !== typeof WW) return !1;
        const {
          key: iW,
          value: OW
        } = WW;
        return "string" === typeof iW && (this.game.setBooleanType(iW, Boolean(OW)), !0)
      }
      setClient(WW, iW) {
        this.client.setBooleanType(WW, iW)
      }
      clearGame() {
        this.game = new Vm.i, this.movesFly = null
      }
      setMovesFly(WW) {
        this.movesFly = WW
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? pm : 0) | (this.client._getTotalBooleanVal() ? fm : 0)
      }
      write(WW) {
        const iW = this.perms(),
          {
            movesFly: OW
          } = this;
        if (iW === this.BL && null === OW) return !0;
        let mW = AW.gc.Keep;
        return null !== OW && (mW = OW ? AW.gc.On : AW.gc.Off), !(!WW || !(0, AW.Ae)(WW, 0, mW, iW, OW ? 1 : 0)) && (this.BL = iW, this.movesFly = null, !0)
      }
    }
    class Xm {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = WW, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: LW.e,
          get y() {
            return iW()
          }
        }
      }
      get hasView() {
        const WW = this.api.apiView,
          iW = AW.z.viewProj;
        return 0 !== iW(WW, 0, 3) || 0 !== iW(WW, 0, 7) || 0 !== iW(WW, 0, 11) || 0 !== iW(WW, 0, 15)
      }
      get cameraPosition() {
        const WW = this.api.apiView,
          {
            eye: iW
          } = this;
        for (let OW = 0; OW < 3; OW++) iW[OW] = AW.z.eye(WW, 0, OW);
        return iW
      }
      get cameraDirection() {
        const WW = this.api.apiView,
          iW = AW.z.viewProj,
          OW = iW(WW, 0, 3),
          mW = iW(WW, 0, 7),
          EW = iW(WW, 0, 11),
          NW = Math.hypot(OW, mW, EW),
          {
            forward: PW
          } = this;
        return NW > 0 && (PW[0] = OW / NW, PW[1] = mW / NW, PW[2] = EW / NW), PW
      }
      get cameraHeading() {
        return AW.z.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return AW.z.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return AW.z.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return AW.z.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(WW) {
        this.clip(WW);
        const {
          clipX: iW,
          clipY: OW,
          clipW: mW
        } = this;
        if (mW > 0) {
          const WW = iW / mW * 50,
            EW = -OW / mW * 50;
          return Math.abs(WW) <= this.screenBandPct.x && Math.abs(EW) <= this.screenBandPct.y ? {
            x: 50 + WW,
            y: 50 + EW
          } : this.clampToBand(WW, EW)
        }
        const EW = this.cameraPosition,
          NW = Math.hypot(WW[0] - EW[0], WW[1] - EW[1], WW[2] - EW[2]),
          PW = this.api.apiView,
          LW = AW.z.viewProj,
          cW = NW > 0 ? iW / NW : 0,
          wW = NW > 0 ? -OW / NW : 0,
          tW = Math.hypot(LW(PW, 0, 1), LW(PW, 0, 5), LW(PW, 0, 9)),
          ZW = cW / Math.hypot(LW(PW, 0, 0), LW(PW, 0, 4), LW(PW, 0, 8)),
          xW = wW / tW,
          lW = !(Math.abs(ZW) >= .001 || Math.abs(xW) >= .001);
        return this.clampToBand(cW, lW ? -(tW || 1) : wW)
      }
      projectDirectionToScreenPos(WW) {
        if (!this.hasView) return;
        const iW = this.cameraPosition,
          OW = this.along;
        for (let mW = 0; mW < 3; mW++) OW[mW] = iW[mW] + 10 * WW[mW];
        return this.projectWorldPosToScreenPos(OW)
      }
      projectWorldPosToViewport(WW) {
        this.clip(WW);
        const {
          clipX: iW,
          clipY: OW,
          clipW: mW
        } = this;
        return mW > 0 ? {
          x: 50 + iW / mW * 50,
          y: 50 - OW / mW * 50
        } : null
      }
      clip(WW) {
        const iW = this.api.apiView,
          OW = WW[0] - AW.z.origin(iW, 0, 0),
          mW = WW[1] - AW.z.origin(iW, 0, 1),
          EW = WW[2] - AW.z.origin(iW, 0, 2),
          NW = AW.z.viewProj;
        this.clipX = NW(iW, 0, 0) * OW + NW(iW, 0, 4) * mW + NW(iW, 0, 8) * EW + NW(iW, 0, 12), this.clipY = NW(iW, 0, 1) * OW + NW(iW, 0, 5) * mW + NW(iW, 0, 9) * EW + NW(iW, 0, 13), this.clipW = NW(iW, 0, 3) * OW + NW(iW, 0, 7) * mW + NW(iW, 0, 11) * EW + NW(iW, 0, 15)
      }
      clampToBand(WW, iW) {
        return (0, LW.h)(WW, iW, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Bm = OW(5568);
    const qm = new TextEncoder,
      Rm = new Uint8Array(AW.U * AW.S);
    class Gm {
      constructor() {
        this.buttons = [], this.BL = !0
      }
      set(WW) {
        this.buttons = WW, this.BL = !1
      }
      attached() {
        this.BL = 0 === this.buttons.length
      }
      write(WW) {
        if (this.BL) return;
        const iW = new Uint8Array(AW.U),
          OW = new Uint8Array(AW.U);
        let mW = 0,
          EW = 0;
        for (const {
            id: NW,
            keycode: PW
          }
          of this.buttons) {
          if (mW === AW.U) break;
          const {
            read: WW,
            written: LW
          } = qm.encodeInto(NW, Rm.subarray(EW, EW + AW.S));
          if (WW < NW.length) continue;
          const cW = Bm.n[PW];
          iW[mW] = "number" === typeof cW ? cW : 0, OW[mW] = LW, mW++, EW += LW
        }
        this.BL = (0, AW.qe)(WW, 0, mW, iW, OW, Rm.subarray(0, EW))
      }
    }

    function Im(WW, iW, OW) {
      const mW = qm.encode(iW);
      return mW.length <= AW.S && function(WW, iW, OW, mW) {
        return (0, PO.b)(), (0, AW.hf)(WW, iW, OW, mW)
      }(WW, 0, OW ? 1 : 0, mW)
    }
    var am = OW(40454);
    const rm = new TextDecoder,
      zm = new TextEncoder,
      Fm = new Uint8Array(0),
      Qm = [0, 0, 0],
      WE = {
        off: AW.Wd.Off,
        key: AW.Wd.Key,
        touch: AW.Wd.Touch
      };
    class iE {
      constructor(WW) {
        var iW;
        this.options = WW, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new Gm, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = JW.p.DEFAULT, this.pendingZoom = null, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new Cm, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.wZ = WW => {
          if ((0, lW.j)(WW)) throw WW;
          this.onError(WW)
        }, this.api = WW.api, this.tables = WW.tables, this.onError = null !== (iW = WW.onError) && void 0 !== iW ? iW : WW => {
          console.error("Error in client game callback", WW)
        }, this.renderFrame = new Xm(this.api, WW.screenBandY), this.live = new dm(this.api), this.chunks = new ti(this.api.memory, (() => this.api.apiView)), this.items = new eO({
          api: this.api,
          tables: WW.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: WW.beforeOp
        });
        const OW = () => this.stopped() ? null : this.cmd,
          mW = () => this.sessionLive;
        this.entityInfoWatch = new Lm({
          cmd: OW,
          onError: this.onError
        }), this.entityInfo = new cm({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: mW
        }), this.particles = new zO({
          cmd: OW,
          isSessionLive: mW,
          onError: this.onError
        }), this.clientApi = new yO({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: WW.tables,
          cmd: OW,
          sendCmd: () => this.sendCmd(),
          isSessionLive: mW,
          beforeWrite: () => {
            var iW;
            if (this.stopped()) return !1;
            const OW = this.generation;
            return !1 !== (null === (iW = WW.beforeWrite) || void 0 === iW ? void 0 : iW.call(WW)) && OW === this.generation
          },
          playerDbId: () => {
            const WW = this.session;
            if (null === WW) throw new Error("No game session has started, so the local player has no DB id");
            return WW.playerDbId
          },
          playSound: WW.playSound,
          preloadSounds: WW.preloadSounds,
          setLocalOptions: WW.setLocalOptions,
          hasPackModel: WW.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new IW({
          api: this.api,
          reportError: iW => {
            var OW;
            this.wZ(iW), null === (OW = WW.reportCameraFault) || void 0 === OW || OW.call(WW, iW)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: WW.cameraScreen,
          showFacing: WW.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Hm(this.items, this.tables, (() => this.localPlayerAlive()), this.wZ), this.itemSources
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
        const iW = this.sessionLive ? this.sendCmd() : null;
        return null !== iW && (OW = iW, mW = 0, EW = WW[0], NW = WW[1], PW = WW[2], (0, PO.b)(), (0, AW.ue)(OW, mW, EW, NW, PW));
        var OW, mW, EW, NW, PW
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(WW) {
        const iW = this.liveCmd();
        return null === iW ? (this.pendingZoom = WW, !1) : (this.pendingZoom = null, (0, AW.Qf)(iW, 0, WW, 1))
      }
      gJ(WW) {
        const iW = this.stopped() ? null : this.cmd;
        return null !== iW && (0, AW.Nf)(iW, 0, WW ? 1 : 0)
      }
      respawn() {
        const WW = this.sessionLive ? this.sendCmd() : null;
        return null !== WW && (iW = WW, OW = 0, (0, PO.b)(), (0, AW.sf)(iW, OW));
        var iW, OW
      }
      bindCustomButtonKeys(WW) {
        this.customButtons.set(WW)
      }
      pressCustomButton(WW, iW) {
        const OW = this.sessionLive ? this.sendCmd() : null;
        return null !== OW && Im(OW, WW, iW)
      }
      padMove(WW, iW, OW, mW, EW, NW) {
        const PW = this.liveCmd();
        return null !== PW && (0, AW.Ve)(PW, 0, WW, iW, OW, mW, EW, NW)
      }
      thirdPersonFor(WW) {
        const iW = this.liveCmd();
        return null !== iW && (0, AW.Vf)(iW, 0, null !== WW && void 0 !== WW ? WW : 1 / 0)
      }
      send(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== mW && LO(mW, OW ? xW.zd : 0, WW, (0, pW.e)(iW))
      }
      socketAttached(WW) {
        this.openSocket = WW, this.socketLeftSinceAttach = !1
      }
      socketDetached(WW) {
        this.openSocket === WW && (this.openSocket = 0)
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
        const iW = () => WW.isStopped;
        this.stopped = iW, this.cmd = WW.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const OW = this.api.apiView;
        this.overflowGen = AW.z.eventOverflowGen(OW, 0), this.resyncOwed = 0 !== AW.z.eventOverflowMask(OW, 0), WW.setGameHost(this), WW.setEventWalker((WW => {
          this.api.walk(WW, this, iW)
        }))
      }
      watchPromptPick(WW) {
        this.promptWatch = WW, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : OE(AW.z.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? AW.Jc.None : AW.z.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : AW.z.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === WW || WW >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, WW, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(WW) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(WW)
      }
      netEvent(WW) {
        "connection" === WW.type ? WW.phase === xW.A.Activated && WW.conn !== this.activeConn && WW.conn > this.closedThrough ? (this.endSession(), this.activeConn = WW.conn, this.endGameGrants(), this.dropGameCamera()) : WW.phase !== xW.A.Left && WW.phase !== xW.A.Closed || WW.conn !== this.activeConn ? WW.phase === xW.A.Resumed && 0 !== this.activeConn && WW.conn > this.closedThrough && (this.activeConn = WW.conn) : this.closeGame() : WW.conn === this.activeConn && 0 !== WW.conn && (WW.tP === gm.r ? this.gunHit(WW.payload) : WW.tP === wm.uc.EditItemCraftingRecipes || WW.tP === gm.V ? this.items.touch() : (this.serverOptions(WW), this.gameMessage(WW)));
        const iW = this.options.onNetEvent;
        iW && this.guard((() => {
          iW(WW)
        }))
      }
      serverOptions(WW) {
        const iW = this.options.serverOptions,
          OW = iW ? this.decoded(tm, WW) : null;
        if (iW && OW) {
          this.guard((() => {
            iW.applyNewClientOptions(OW)
          }));
          const WW = OW.holdThirdPerson;
          void 0 !== WW && (this.thirdPersonWanted = WW, this.writeOwedThirdPerson())
        }
      }
      gameMessage(WW) {
        let iW = null;
        try {
          iW = function(WW) {
            if ("message" !== WW.type || WW.tP !== wm.uc.GameCodeMessage || WW.payloadKind !== xW.hc.Msgpack) return null;
            const iW = (0, pW.d)(WW.payload);
            if (null === iW || "object" !== typeof iW || "string" !== typeof iW.messageType) throw new Error("GameCodeMessage without a messageType");
            return iW
          }(WW)
        } catch (OW) {
          this.sessionLive && this.onError(OW)
        }
        if (iW) {
          const {
            messageType: WW,
            data: OW
          } = iW;
          if ((0, uW.g)(WW)) return void this.guard((() => {
            (0, uW.d)(WW, OW)
          }));
          "freeCamPerms" === WW && this.freeCam.setGame(OW) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (iW => {
            iW.onReceivedMessageFromServer(WW, OW)
          }))
        }
      }
      decoded(WW, iW) {
        try {
          return WW(iW)
        } catch (OW) {
          return this.onError(OW), null
        }
      }
      setClientFreeCameraGrant(WW, iW) {
        this.freeCam.setClient(WW, iW), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(WW) {
        this.freeCam.setMovesFly(WW), this.writeFreeCam()
      }
      setBlockHighlight(WW) {
        this.highlight = WW, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedThirdPerson() {
        const WW = this.thirdPersonWanted;
        WW !== this.thirdPersonHeld && this.thirdPersonFor(WW ? void 0 : 0) && (this.thirdPersonHeld = WW)
      }
      writeOwedHighlight() {
        const WW = this.liveCmd();
        if (null === WW || !this.highlightOwed) return;
        const iW = this.highlight;
        this.highlightOwed = null === iW ? !(0, AW.Ke)(WW, 0, Qm, Qm, 0) : !(0, AW.Ke)(WW, 0, iW.pos, iW.normal, 1)
      }
      localPlayerBound(WW) {
        var iW, OW;
        if (0 === this.activeConn || this.sessionLive && WW === this.boundId) return;
        const mW = this.sessionLive;
        let EW, NW, PW, LW;
        this.endSession(), mW && this.restartGameCamera();
        try {
          var cW;
          this.session = null;
          const WW = this.options.sessionInfo(this.activeConn);
          if (this.session = WW, !WW) return;
          EW = WW.gameNameWithVariation, NW = null !== (cW = (0, hW.Lb)(EW)) && void 0 !== cW ? cW : void 0, PW = (0, HW.A)(WW.lobbyName), LW = (0, HW.R)(WW.lobbyName)
        } catch (kW) {
          return void this.onError(kW)
        }
        const wW = {
          localPlayerId: String(WW)
        };
        let tW = {},
          ZW = [];
        try {
          var xW, lW;
          tW = null !== (xW = null === (lW = this.options.gameFactory((0, hW.Tb)(EW))) || void 0 === lW ? void 0 : lW(LW, PW, NW, wW)) && void 0 !== xW ? xW : {}
        } catch (kW) {
          this.wZ(kW)
        }
        try {
          var AW, bW;
          ZW = (0, nW.c)(null === (AW = (bW = this.options).defaultPlugins) || void 0 === AW ? void 0 : AW.call(bW, LW, PW, NW, wW), tW.plugins)
        } catch (kW) {
          this.wZ(kW)
        }
        const jW = [tW, ...ZW];
        this.owners = jW, this.tickers = jW.filter((WW => void 0 !== WW.hZ)), this.renderers = jW.filter((WW => void 0 !== WW.onAfterRender)), this.receivers = jW.filter((WW => void 0 !== WW.onReceivedMessageFromServer)), this.writeAltVeto(jW), this.writeHooks(jW), this.writePublicLobby(LW), this.writeLocalDbId(null !== (iW = null === (OW = this.session) || void 0 === OW ? void 0 : OW.playerDbId) && void 0 !== iW ? iW : null), this.boundId = WW, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(jW, (WW => {
          var iW;
          null === (iW = WW.onCreate) || void 0 === iW || iW.call(WW, this.clientApi)
        }));
        const UW = this.generation;
        setTimeout((() => {
          UW === this.generation && !0 === this.tables.getClientOption("creative") && hm(this.tables)
        }), 0)
      }
      chunkSlot(WW, iW, OW, mW, EW, NW) {
        this.chunks.apply(WW, iW, OW, mW, EW, NW)
      }
      entityAdded(WW) {
        var iW;
        this.entityInfo.stale(WW), null === (iW = this.options.replayEntities) || void 0 === iW || iW.entityAdded(WW)
      }
      entityInfoChanged(WW) {
        var iW;
        this.entityInfo.stale(WW), null === (iW = this.options.replayEntities) || void 0 === iW || iW.entityInfoChanged(WW)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const WW = performance.now();
          this.round(this.tickers, mE), (0, sm.e)(performance.now() - WW)
        }
      }
      afterWalk(WW) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight(), this.writeOwedThirdPerson();
        const iW = this.options.replayEntities;
        iW && this.guard((() => {
          this.entityInfoWatch.want(Pm, iW.wantsWatch), iW.flush(this.entityInfoWatch.on)
        }));
        const OW = this.api.apiView,
          mW = AW.z.frameMs(OW, 0);
        Dm.p.frame(mW, AW.z.heading(OW, 0), AW.z.pitch(OW, 0), Dm.j[WW]);
        const EW = (0, sm.m)(WW, mW);
        if (null !== EW) {
          const WW = this.renderFrame;
          this.guard((() => {
            (0, xm.e)().turnDamageIndicators(WW.cameraHeading), (0, xm.e)().turnSoundCues(WW.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(EW)
          })), this.round(this.renderers, (iW => {
            iW.onAfterRender(EW, WW)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== EW)
        } catch (PW) {
          this.wZ(PW)
        }
        this.showZoom(), this.items.flush(this.wZ), this.writePromptWatch(), this.writeCustomButtons();
        const NW = this.ticks;
        this.ticks = 0, (0, sm.k)(NW, WW, EW, this.wZ)
      }
      entityRemoved(WW) {
        this.live.despawned(WW), this.entityInfo.removed(WW)
      }
      ackEventOverflow() {
        const WW = this.api.apiView,
          iW = AW.z.eventOverflowGen(WW, 0),
          OW = iW - this.overflowGen >>> 0;
        if (0 === OW && !this.resyncOwed) return;
        this.overflowGen = iW;
        const mW = AW.z.eventOverflowMask(WW, 0),
          EW = this.cmd;
        0 === mW || null === EW || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, AW.ye)(EW, 0, mW);
        const NW = this.options.onEventOverflow;
        0 !== OW && NW && this.guard((() => {
          NW(mW, OW)
        }))
      }
      gameCall(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        if (WW === AW.tc.Director) try {
          return this.scriptedCamera.call(iW, OW, mW, EW, NW, PW)
        } catch (wW) {
          return this.wZ(wW), AW.tb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return WW === AW.tc.AltVeto ? AW.n.Allow : 0;
        try {
          return this.callGames(WW, iW, OW, mW, EW, NW, PW, LW)
        } catch (wW) {
          throw (0, lW.j)(wW) && (this.fault = wW), wW
        }
      }
      takeFault() {
        const WW = this.fault;
        return this.fault = void 0, WW
      }
      callGames(WW, iW, OW, mW, EW, NW, PW, LW) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: cW
        } = this.options, wW = String(this.boundId);
        switch (WW) {
          case AW.tc.AltVeto:
          case AW.tc.AltAction: {
            const LW = 0 !== PW,
              [tW, ZW, xW] = LW ? [iW, OW, mW] : [void 0, void 0, void 0],
              lW = LW ? cW.nameOfId(EW) : "Air",
              bW = OE(NW);
            if (WW === AW.tc.AltAction) return this.first((WW => {
              var iW;
              return null === (iW = WW.onPlayerAltAction) || void 0 === iW ? void 0 : iW.call(WW, wW, tW, ZW, xW, lW, bW)
            })), 0;
            const jW = this.first((WW => {
              var iW;
              return null === (iW = WW.onPlayerAttemptAltAction) || void 0 === iW ? void 0 : iW.call(WW, wW, tW, ZW, xW, lW, bW)
            }));
            return "preventAction" === jW ? AW.n.Prevent : "preventPlacement" === jW ? AW.n.PreventPlacement : AW.n.Allow
          }
          case AW.tc.Click: {
            const WW = LW,
              tW = 0 !== (WW & AW._.Alt),
              ZW = 0 !== (WW & AW._.HasPos),
              xW = ZW ? cW.nameOfId(EW) : "Air",
              [lW, bW, jW] = ZW ? [iW, OW, mW] : [null, null, null],
              UW = OE(NW),
              kW = 0 !== (WW & AW._.Up),
              sW = OE(PW);
            if (0 === (WW & AW._.AttackOnly) && this.first((WW => {
                var iW, OW;
                return kW ? null === (iW = WW.onPlayerClickUp) || void 0 === iW ? void 0 : iW.call(WW, wW, tW, lW, bW, jW, xW, UW) : null === (OW = WW.onPlayerClick) || void 0 === OW ? void 0 : OW.call(WW, wW, tW, lW, bW, jW, xW, UW)
              })), !kW && !tW && null !== sW) {
              const WW = this.clientApi.getPositionView(sW),
                iW = WW ? [WW[0], WW[1], WW[2]] : [0, 0, 0];
              this.first((WW => {
                var OW;
                return null === (OW = WW.onPlayerAttackEntity) || void 0 === OW ? void 0 : OW.call(WW, wW, sW, iW)
              }))
            }
            return 0
          }
          case AW.tc.ChangeBlock: {
            const WW = cW.nameOfId(EW),
              PW = cW.nameOfId(NW);
            return this.first((EW => {
              var NW;
              return null === (NW = EW.onPlayerChangeBlock) || void 0 === NW ? void 0 : NW.call(EW, wW, iW, OW, mW, WW, PW)
            })), 0
          }
          case AW.tc.DropItem: {
            const WW = cW.nameOfId(iW);
            return this.first((iW => {
              var EW;
              return null === (EW = iW.onPlayerDropItem) || void 0 === EW ? void 0 : EW.call(iW, wW, WW, OW, mW)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${WW}`)), 0
        }
      }
      changeBlockFail(WW, iW, OW, mW, EW, NW, PW) {
        const LW = EW === AW.gd ? null : rm.decode(this.api.eventBytes(NW, Math.min(EW, PW)));
        this.failures.push({
          Zi: [WW, iW, OW],
          xi: mW,
          li: LW
        })
      }
      changeBlockFailEnd() {
        const WW = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (iW => {
          var OW;
          null === (OW = iW.onChangeBlockFail) || void 0 === OW || OW.call(iW, WW)
        })), this.iZ("blockChangeRefused", null), this.iZ("EditBoard", {
          pos: null
        }), this.iZ("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(WW, iW, OW, mW, EW, NW) {
        WW === AW.Oc.ChestOpened ? this.items.chestOpened(OW, mW, EW) : WW !== AW.Oc.Synced && WW !== AW.Oc.ChestClosed && WW !== AW.Oc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(WW, iW, OW, mW) {
            switch (WW) {
              case AW.Oc.Synced:
                PW.l.iZ("syncedInvenFromServer");
                break;
              case AW.Oc.ChestOpened:
              case AW.Oc.ChestClosed:
                PW.l.iZ("chestToggleFromServer", WW === AW.Oc.ChestOpened, !0);
                break;
              case AW.Oc.ChestRefreshed:
                PW.l.iZ("chestRefreshedFromServer");
                break;
              case AW.Oc.EnchantingTable:
                PW.l.iZ("enchantingTable", {
                  NL: mW,
                  position: OW
                });
                break;
              case AW.Oc.HotbarRequest:
                PW.l.iZ("setSelectedInventorySlotI", iW, !0);
                break;
              case AW.Oc.Scrolled:
                PW.l.iZ("ScrollInventorySlot", iW);
                break;
              case AW.Oc.NumberKey:
                PW.l.iZ("numkeyPressed", iW + 1);
                break;
              case AW.Oc.DropRequested:
                PW.l.iZ("DropInvenItem", 0 !== iW);
                break;
              default:
                throw new lW.e(`InventoryEvent of no kind: what ${WW}`)
            }
          }(WW, iW, [OW, mW, EW], NW)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(WW, iW, OW, mW) {
        this.iZ("shotPlayer", {
          playerId: String(WW),
          damage: iW,
          wasCrit: 0 !== mW,
          distance: OW
        })
      }
      localHurt(WW, iW) {
        this.iZ("closeShopOnDamaged", null), this.guard((() => {
          PW.l.iZ("damagedByOtherPlayer", {
            ME: null,
            direction: Number.isNaN(iW) ? null : iW,
            vE: WW
          })
        }))
      }
      attackHit(WW, iW, OW, mW, EW) {
        this.guard((() => {
          PW.l.iZ("yourAttackHit", {
            ui: mW,
            screenPos: this.renderFrame.projectDirectionToScreenPos([WW, iW, OW]),
            hitSelf: EW
          })
        }))
      }
      physicsType(WW) {
        this.localPhysicsType = WW, this.iZ("PlayerPhysicsTypeUpdate", WW)
      }
      vehicleEffect(WW, iW, OW, mW, EW) {
        this.guard((() => {
          WW === xW.Ld.UPDATE ? (0, dW.g)(iW, {
            icon: OW,
            level: mW,
            displayName: null,
            durationMs: EW
          }) : oW.c.remove(iW)
        }))
      }
      zoomChanged(WW) {
        this.zoom = WW, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.iZ("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.iZ("showBottomMessage", am.e)
      }
      showZoom() {
        const WW = this.scriptedCamera.holdsView();
        !this.zoomUnshown || WW && this.zoomHeld || (this.zoomUnshown = !1, this.iZ("cameraZoomSet", this.zoom)), this.zoomHeld = WW
      }
      gunHit(WW) {
        this.guard((() => {
          const {
            ME: iW,
            KE: OW
          } = (0, em.c)(gm.r, WW);
          PW.l.iZ("damagedByOtherPlayer", {
            ME: iW,
            direction: OW
          })
        }))
      }
      uiEvent(WW, iW, OW, mW, EW, NW, PW, LW) {
        this.guard((() => {
          lm(WW, iW, [OW, mW, EW], NW, this.items, this.options.tables, (() => rm.decode(this.api.eventBytes(PW, LW))))
        }))
      }
      writeAltVeto(WW) {
        const iW = this.cmd;
        if (!iW) return;
        let OW;
        try {
          OW = function(WW, iW) {
            const OW = new Set;
            let mW = !1;
            for (const EW of WW)
              if (EW.onPlayerAttemptAltAction) {
                if (mW = !0, !EW.altVetoBlocks) return {
                  mode: AW.le.All,
                  roots: []
                };
                for (const WW of EW.altVetoBlocks) OW.add(iW.getMetaInfo(WW).rootId)
              } return mW ? OW.size > AW.Zc ? {
              mode: AW.le.All,
              roots: []
            } : {
              mode: AW.le.Filter,
              roots: [...OW]
            } : {
              mode: AW.le.Off,
              roots: []
            }
          }(WW, this.options.tables)
        } catch (EW) {
          this.onError(EW), OW = {
            mode: AW.le.All,
            roots: []
          }
        }
        if (OW.mode === AW.le.Off && !this.vetoSet) return;
        const mW = new Uint8Array(new Uint32Array(OW.roots).buffer);
        (0, AW.zf)(iW, 0, OW.mode, OW.roots.length, mW) ? this.vetoSet = OW.mode !== AW.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(WW) {
        const iW = this.cmd;
        if (!iW) return;
        const OW = function(WW) {
          let iW = 0;
          for (const OW of WW) OW.onPlayerAltAction && (iW |= 1 << AW.tc.AltAction), (OW.onPlayerClick || OW.onPlayerClickUp || OW.onPlayerAttackEntity) && (iW |= 1 << AW.tc.Click), OW.onPlayerChangeBlock && (iW |= 1 << AW.tc.ChangeBlock), OW.onPlayerDropItem && (iW |= 1 << AW.tc.DropItem);
          return iW
        }(WW);
        (0 !== OW || this.hooksSet) && ((0, AW.Ff)(iW, 0, OW) ? this.hooksSet = 0 !== OW : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const WW = this.cmd;
        WW && !this.stopped() && this.customButtons.write(WW)
      }
      writePromptWatch() {
        const WW = this.cmd,
          iW = this.promptWatch;
        iW !== this.promptWatchSent && WW && !this.stopped() && (0, AW.Zf)(WW, 0, WE[iW]) && (this.promptWatchSent = iW)
      }
      writePublicLobby(WW) {
        const iW = this.cmd;
        iW && WW !== this.writtenPublicLobby && ((0, AW.Of)(iW, 0, WW ? 1 : 0) ? this.writtenPublicLobby = WW : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(WW) {
        const iW = this.cmd;
        iW && ((0, AW.If)(iW, 0, null === WW ? 0 : 1, null === WW ? Fm : zm.encode(WW)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(WW) {
        const iW = this.generation;
        for (const mW of this.owners) {
          if (iW !== this.generation) break;
          try {
            const iW = WW(mW);
            if (void 0 !== iW) return iW
          } catch (OW) {
            this.wZ(OW)
          }
        }
      }
      iZ(WW, iW) {
        this.guard((() => {
          PW.l.iZ(WW, iW)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (WW) {
          this.wZ(WW)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (WW) {
          this.wZ(WW)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = JW.p.DEFAULT, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1;
        const WW = this.owners;
        let iW;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (mW) {
          iW = mW
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (mW) {
          iW ??= mW
        }
        this.round(WW, EE, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (mW) {
          iW ??= mW
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (mW) {
          iW ??= mW
        }
        const OW = this.options.onSessionEnd;
        if (OW) try {
          OW()
        } catch (mW) {
          this.onError(mW)
        }
        void 0 !== iW && this.wZ(iW)
      }
      round(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = this.generation;
        for (const NW of WW) {
          if (mW !== this.generation) break;
          try {
            iW(NW)
          } catch (EW) {
            OW ? this.onError(EW) : this.wZ(EW)
          }
        }
      }
      guard(WW) {
        try {
          WW()
        } catch (iW) {
          this.wZ(iW)
        }
      }
    }

    function OE(WW) {
      return WW === AW.jd ? null : String(WW)
    }

    function mE(WW) {
      WW.hZ(xW.Id)
    }

    function EE(WW) {
      var iW;
      null === (iW = WW.onClose) || void 0 === iW || iW.call(WW)
    }

    function NE(WW, iW) {
      WW.watch((() => {
        const OW = function(WW) {
          const iW = [],
            OW = Math.min(Mm, WW.length);
          for (let EW = 0; EW < OW; EW++) {
            var mW;
            const OW = null === (mW = WW.slot(EW)) || void 0 === mW ? void 0 : mW.typeObj,
              NW = OW ? (0, km.gunTypeOf)(OW.id) : void 0;
            void 0 !== NW && iW.push(Yi[NW])
          }
          return iW
        }(WW);
        OW.length > 0 && (iW.preload(OW.flatMap((WW => Vi(WW)))), iW.preload(Vi(yi)))
      }))
    }
    var PE = OW(37569),
      LE = OW(5615),
      cE = OW(37559),
      wE = OW(37597);

    function tE(WW) {
      const iW = (0, PE.countDecodesAs)(new LE.Howl({
          src: [...(0, cE.u)(WW).src],
          pool: 15,
          preload: !1
        }), "sound"),
        OW = iW.load.bind(iW);
      return iW.load = () => (iW._preload = !0, (0, wE.e)(WW), OW()), iW
    }

    function ZE(WW, iW, OW) {
      const mW = WW.listener;
      if (mW.positionX) xE(mW.positionX, iW, OW, 0), xE(mW.positionY, iW, OW, 1), xE(mW.positionZ, iW, OW, 2), xE(mW.forwardX, iW, OW, 3), xE(mW.forwardY, iW, OW, 4), xE(mW.forwardZ, iW, OW, 5), xE(mW.upX, iW, OW, 6), xE(mW.upY, iW, OW, 7), xE(mW.upZ, iW, OW, 8);
      else {
        let WW = !1;
        for (let mW = 0; mW < 9; mW++) WW ||= iW[mW] !== OW[mW];
        WW && (mW.setPosition(iW[0], iW[1], iW[2]), mW.setOrientation(iW[3], iW[4], iW[5], iW[6], iW[7], iW[8]), OW.set(iW))
      }
    }

    function xE(WW, iW, OW, mW) {
      iW[mW] !== OW[mW] && (WW.value = iW[mW], OW[mW] = iW[mW])
    }
    class lE {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(WW) {
        this.pose.set(WW);
        const iW = LE.Howler.ctx;
        return !!iW && (iW !== this.watchedCtx && (this.watchedCtx = iW, this.written.fill(Number.NaN), iW.addEventListener("statechange", (() => {
          "running" === iW.state && ZE(iW, this.pose, this.written)
        }))), "running" === iW.state && ZE(iW, WW, this.written), !0)
      }
    }
    var AE = OW(37838),
      bE = OW(40442);
    let jE = null,
      UE = null;

    function kE() {
      return null === jE && (jE = document.createElement("div"), jE.className = "WasmCameraLayer", jE.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(jE)), jE
    }

    function sE() {
      return UE ??= new bE.c(new AE.e(kE)), UE
    }

    function ME() {
      var WW;
      null === (WW = UE) || void 0 === WW || WW.clear(), KE(null)
    }

    function KE(WW) {
      mW.d.get("scriptedCameraFacing") !== WW && mW.d.set({
        scriptedCameraFacing: WW
      })
    }
    var SE = OW(5807),
      YE = OW(5766),
      yE = OW(40469),
      TE = OW(42533),
      JE = OW(4454);
    const hE = Object.entries(AW.sc).reduce(((WW, iW) => {
      let [OW, mW] = iW;
      return WW[mW] = OW, WW
    }), []);

    function HE(WW, iW) {
      var OW;
      return 0 !== ((null !== (OW = WW.itemFlags[iW]) && void 0 !== OW ? OW : 0) & AW.Qc.Stackable)
    }
    const nE = /^(0|[1-9][0-9]*)$/,
      uE = {
        displayName: (WW, iW) => (0, km.displayNameOf)(iW),
        description: (WW, iW) => (0, km.descriptionOf)(iW),
        type: (WW, iW) => (0, km.itemTypeOf)(iW),
        clipSize: (WW, iW) => (0, km.clipSizeOf)(iW),
        armourReduction: (WW, iW) => (0, km.armourReductionOf)(iW),
        scopeType: (WW, iW) => (0, km.scopeTypeOf)(iW),
        stackable: HE,
        harvestType: (WW, iW) => hE[WW.blockHarvestTypes[iW]],
        harvestLevel: (WW, iW) => {
          const OW = WW.blockHarvestLevels[iW];
          return OW === AW.Uc ? void 0 : OW
        },
        harvests: (WW, iW) => {
          var OW;
          const mW = null !== (OW = WW.itemHarvests[iW]) && void 0 !== OW ? OW : 0;
          return 0 !== mW ? hE[mW] : void 0 === (0, km.harvestsNullLevelOf)(iW) ? void 0 : null
        },
        level: (WW, iW) => {
          var OW, mW;
          const EW = null !== (OW = WW.itemLevels[iW]) && void 0 !== OW ? OW : AW.Uc;
          return EW !== AW.Uc ? EW : null !== (mW = (0, km.harvestsNullLevelOf)(iW)) && void 0 !== mW ? mW : void 0
        }
      };

    function oE(WW, iW, OW) {
      return eE(new Uint8Array(Math.floor(WW.length / iW)), WW, iW, OW)
    }

    function dE(WW, iW, OW) {
      return eE(new Uint16Array(Math.floor(WW.length / iW)), WW, iW, OW)
    }

    function eE(WW, iW, OW, mW) {
      const EW = new DataView(iW.buffer, iW.byteOffset, iW.byteLength);
      for (let NW = 0; NW < WW.length; NW++) WW[NW] = mW(EW, NW * OW);
      return WW
    }
    class vE {
      constructor(WW, iW) {
        this.options = iW, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = WW => {
          const iW = this.idOf(WW);
          if (void 0 === iW) throw new Error(`No item is named ${WW}, an item's root`);
          return iW
        };
        const OW = iW => {
            const OW = iW();
            return new Uint8Array(WW.memory().buffer, WW.scratch(), OW).slice()
          },
          mW = (new TextDecoder).decode(OW((() => WW.queries.itemNames()))).split("\n"),
          EW = OW((() => WW.queries.blockProps())),
          NW = OW((() => WW.queries.itemProps()));
        this.props = {
          blockFlags: oE(EW, AW.J.BYTES, AW.J.flags),
          blockHarvestTypes: oE(EW, AW.J.BYTES, AW.J.harvestType),
          blockHarvestLevels: oE(EW, AW.J.BYTES, AW.J.harvestLevel),
          blockAttachedTops: dE(EW, AW.J.BYTES, AW.J.attachedTop),
          itemFlags: oE(NW, AW.Tc.BYTES, AW.Tc.flags),
          itemHarvests: oE(NW, AW.Tc.BYTES, AW.Tc.harvests),
          itemLevels: oE(NW, AW.Tc.BYTES, AW.Tc.level)
        }, (0, JE.h)(Object.freeze(mW)), (0, TE.h)()
      }
      idOf(WW) {
        if ("number" === typeof WW) return void 0 === (0, JE.d)(WW) ? void 0 : WW;
        const iW = (0, JE.b)(WW);
        return void 0 === iW && nE.test(WW) ? void 0 === (0, JE.d)(+WW) ? void 0 : +WW : iW
      }
      getMetaInfo(WW) {
        if (!WW || WW === SE.b) return SE.f;
        const iW = this.idOf(WW);
        if (void 0 === iW) throw new Error(`Item ${WW} not found in registry`);
        return this.metaOf(iW)
      }
      blockRootId(WW) {
        return 0 !== WW && void 0 !== (0, JE.d)(WW) ? this.metaOf(WW).rootId : WW
      }
      metaOf(WW) {
        return this.metas[WW] ??= (0, YE.l)((0, JE.d)(WW), WW, this.rootIdOf, (0, km.rootMetaDescOf)(WW))
      }
      getItemId(WW) {
        if (!WW || WW === SE.b) return 0;
        const iW = this.idOf(WW);
        if (void 0 === iW) throw new Error(`Invalid block name. You sent ${WW}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return iW
      }
      getItemName(WW) {
        if (!WW || WW === SE.b) return SE.b;
        const iW = this.idOf(WW);
        if (void 0 === iW) throw new Error(`Item ${WW} not found in registry`);
        return (0, JE.d)(iW)
      }
      blockNameToBlockId(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (WW === SE.b) return 0;
        let OW = this.idOf(WW);
        if (void 0 === OW || !this.isBlockId(OW)) {
          const iW = WW.indexOf("|"),
            mW = iW > 0 ? (0, JE.b)(WW.slice(0, iW)) : void 0;
          OW = void 0 !== mW && this.isBlockId(mW) && (0, km.rootMetaDescOf)(mW) === WW ? mW : void 0
        }
        if (void 0 !== OW) return OW;
        if (!iW) throw new Error(`Invalid block name. You sent ${WW}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(WW) {
        return WW > 0 && WW < this.props.blockFlags.length
      }
      nameOfId(WW) {
        return 0 !== WW && (0, JE.d)(WW) || SE.b
      }
      itemType(WW) {
        const iW = WW ? this.idOf(WW) : void 0;
        if (!iW) return null;
        let OW = this.types.get(iW);
        return void 0 === OW && (OW = Object.freeze({
          id: iW,
          name: (0, JE.d)(iW),
          meta: this.getMetaInfo(iW),
          stackable: HE(this.props, iW),
          type: (0, km.itemTypeNameOf)(iW),
          clipSize: (0, km.clipSizeOf)(iW),
          scopeType: (0, km.scopeTypeOf)(iW),
          showsAimingUi: (0, km.showsAimingUi)(iW)
        }), this.types.set(iW, OW)), OW
      }
      getItemStat(WW, iW) {
        if (yE.d.has(iW)) {
          const OW = "minChargeStateToUse" === iW ? this.getMetaInfo(WW).rootName : this.getItemName(WW),
            mW = this.options.get((0, yE.h)(OW, iW));
          if (null !== mW && void 0 !== mW) return mW
        }
        return this.defaultStat(WW, iW, this.statOf(iW))
      }
      getDisplayName(WW) {
        return this.getItemStat(WW, "displayName")
      }
      getDefaultItemStat(WW, iW) {
        return this.defaultStat(WW, iW, this.statOf(iW))
      }
      statOf(WW) {
        const iW = uE[WW];
        return void 0 === iW && function(WW, iW) {
          throw new Error(`ClientApi.${WW} is not available yet in the wasm client (${iW})`)
        }(`getItemStat("${WW}")`, `a table of the stat: the wasm client answers ${Object.keys(uE).join(", ")}`), iW
      }
      defaultStat(WW, iW, OW) {
        const mW = this.idOf(WW),
          EW = void 0 === mW ? void 0 : OW(this.props, mW);
        return null !== EW && void 0 !== EW || "displayName" !== iW ? EW : this.getItemName(WW)
      }
      getClientOption(WW) {
        return this.options.get(WW)
      }
      getGunStats(WW) {
        return this.getClientOption(`${WW}GunStats`)
      }
      watchClientOption(WW, iW) {
        return this.options.subscribe(WW, iW)
      }
      isSolidBlockId(WW) {
        var iW;
        return 0 !== ((null !== (iW = this.props.blockFlags[WW]) && void 0 !== iW ? iW : 0) & AW.H.Solid)
      }
      isStackableId(WW) {
        return HE(this.props, WW)
      }
      isFluidBlockId(WW) {
        var iW;
        return 0 !== ((null !== (iW = this.props.blockFlags[WW]) && void 0 !== iW ? iW : 0) & AW.H.Fluid)
      }
      canPlaceOverBlockId(WW) {
        var iW;
        return 0 !== ((null !== (iW = this.props.blockFlags[WW]) && void 0 !== iW ? iW : 0) & AW.H.PlaceOver)
      }
      attachedTopOf(WW) {
        var iW;
        return null !== (iW = this.props.blockAttachedTops[WW]) && void 0 !== iW ? iW : 0
      }
      isDroplessBlockId(WW) {
        return (0, km.dropsNothing)(WW)
      }
    }

    function gE(WW, iW) {
      const OW = new Map;
      return (mW, EW) => {
        const NW = iW.idOf(mW),
          PW = void 0 === NW ? null : (mW => {
            let EW = OW.get(mW);
            if (void 0 === EW) {
              const NW = WW.queries.salvageRecipe(mW),
                PW = new DataView(WW.memory().buffer, WW.scratch(), NW),
                LW = [];
              for (let WW = 0; WW + AW.ce.BYTES <= NW; WW += AW.ce.BYTES) LW.push(Object.freeze({
                item: iW.nameOfId(AW.ce.item(PW, WW)),
                amt: AW.ce.amount(PW, WW)
              }));
              EW = 0 === LW.length ? null : Object.freeze(LW), OW.set(mW, EW)
            }
            return EW
          })(NW);
        if (null === PW || void 0 === EW) return PW;
        const LW = EW <= 0 ? 1 : EW;
        return PW.map((WW => {
          let {
            item: iW,
            amt: OW
          } = WW;
          return {
            item: iW,
            amt: OW * LW
          }
        }))
      }
    }
    var DE = OW(42281),
      VE = OW(38111),
      pE = OW(38101),
      fE = OW(38105),
      CE = OW(37735),
      XE = OW(42373),
      BE = OW(54737);
    const qE = -1,
      RE = new Uint8Array(0),
      GE = new TextEncoder;

    function IE(WW) {
      if (null === WW) return null;
      const iW = GE.encode(WW);
      return iW.byteLength < xW.Lc ? iW : iW.subarray(0, xW.Lc - 1)
    }
    class aE {
      constructor(WW) {
        this.deps = WW, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = qE, this.keyframesSettled = !1, this.reloadFrom = qE
      }
      reloadKeyframes() {
        var WW, iW;
        this.keyframesVersion = qE, this.reloadFrom = null !== (WW = null === (iW = this.view()) || void 0 === iW ? void 0 : iW.version) && void 0 !== WW ? WW : qE
      }
      setPlayback(WW) {
        const iW = 1 === this.deps.core.hNW(WW);
        return iW && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = qE, this.reloadFrom = qE), iW
      }
      async open(WW, iW) {
        const OW = await this.deps.replay.open(WW, iW);
        return "opening" === OW && (this.reloadKeyframes(), this.deps.recorder.prefetch()), OW
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(WW)), iW)
      }
      setSpeed(WW) {
        this.deps.replay.setSpeed(WW)
      }
      setCameraMode(WW) {
        this.deps.replay.setCameraMode(BE.b.indexOf(WW))
      }
      view() {
        var WW;
        const iW = AW.z.replayViewPtr(this.deps.apiView(), 0);
        if (0 === iW) return this.lastView = null, null;
        const OW = new DataView(this.deps.buffer(), iW, AW.$d.BYTES),
          mW = AW.$d.version(OW, 0),
          EW = this.lastView;
        if (null !== EW && EW.version === mW) return EW;
        const NW = AW.$d.markIn(OW, 0),
          PW = {
            version: mW,
            state: AW.$d.state(OW, 0),
            cameraMode: null !== (WW = BE.b[AW.$d.cameraMode(OW, 0)]) && void 0 !== WW ? WW : "recording",
            hZ: AW.$d.hZ(OW, 0),
            totalTicks: AW.$d.totalTicks(OW, 0),
            speed: AW.$d.speed(OW, 0),
            mark: NW === AW.Zd ? null : {
              inTick: NW,
              outTick: AW.$d.markOut(OW, 0)
            },
            editVersion: AW.$d.editVersion(OW, 0)
          };
        return this.lastView = PW, PW
      }
      keyframes() {
        const WW = this.view();
        if (null === WW) return [];
        WW.version !== this.reloadFrom && (this.reloadFrom = qE);
        const iW = this.reloadFrom === qE && WW.state !== xW.td.Cropping && WW.state !== xW.td.None,
          OW = iW ? WW.editVersion : WW.version;
        if (OW === this.keyframesVersion && iW === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: mW
        } = this.deps, EW = mW.HNW(), NW = mW.EU(), PW = [];
        if (0 !== NW && EW > 0) {
          const WW = new DataView(this.deps.buffer(), NW, EW * xW.wc);
          for (let iW = 0; iW < EW; iW++) {
            const OW = iW * xW.wc,
              mW = iW => WW.getFloat64(OW + iW, !0);
            PW.push({
              hZ: WW.getUint32(OW + xW.Ic, !0),
              position: [mW(xW.Hc), mW(xW.Hc + 8), mW(xW.Hc + 16)],
              direction: [mW(xW.Ac), mW(xW.Ac + 8), mW(xW.Ac + 16)],
              easing: [mW(xW.Dc), mW(xW.Dc + 8), mW(xW.Dc + 16), mW(xW.Dc + 24)]
            })
          }
        }
        return this.keyframesVersion = OW, this.keyframesSettled = iW, this.lastKeyframes = PW, PW
      }
      addKeyframe() {
        const WW = this.deps.apiView(),
          iW = [AW.z.eye(WW, 0, 0), AW.z.eye(WW, 0, 1), AW.z.eye(WW, 0, 2)];
        return this.deps.replay.addKeyframe(iW, function(WW, iW) {
          const OW = Math.cos(iW);
          return [OW * Math.sin(WW), -Math.sin(iW), OW * Math.cos(WW)]
        }(AW.z.heading(WW, 0), AW.z.pitch(WW, 0)))
      }
      setKeyframe(WW) {
        return this.deps.replay.setKeyframe(WW.hZ, Float64Array.from([...WW.position, ...WW.direction, ...WW.easing]))
      }
      moveKeyframe(WW, iW) {
        return this.deps.replay.moveKeyframe(WW, iW)
      }
      deleteKeyframes(WW, iW) {
        return this.deps.replay.deleteKeyframes(WW, iW)
      }
      setMark(WW) {
        var iW, OW;
        return this.deps.replay.setMark(null !== (iW = null === WW || void 0 === WW ? void 0 : WW.inTick) && void 0 !== iW ? iW : -1, null !== (OW = null === WW || void 0 === WW ? void 0 : WW.outTick) && void 0 !== OW ? OW : -1)
      }
      crop(WW, iW) {
        const OW = this.deps.replay.crop(WW, iW);
        return OW && this.reloadKeyframes(), OW
      }
      save(WW) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(WW)
      }
      recorderControl(WW) {
        this.deps.recorder.control(WW)
      }
      recorderPrefs(WW, iW) {
        this.deps.recorder.prefs(WW, iW)
      }
      recorderOption(WW, iW) {
        const OW = this.deps.cmd();
        return null !== OW && (0, AW.of)(OW, 0, WW, null === iW ? RE : GE.encode(iW))
      }
      recordFlyingText(WW, iW, OW, mW) {
        const EW = this.deps.cmd(),
          NW = Math.max(0, Math.min(4294967295, Math.round(mW)));
        return null !== EW && (0, AW.if)(EW, 0, iW, OW, NW, GE.encode(WW))
      }
      recordPlayerKilled(WW, iW, OW, mW) {
        const EW = this.deps.cmd();
        return null !== EW && (0, AW.rf)(EW, 0, WW, iW, Math.max(0, OW), GE.encode(mW))
      }
      recordKillfeed(WW, iW, OW) {
        var mW, EW;
        const NW = this.deps.cmd(),
          PW = function(WW) {
            const iW = WW.reduce(((WW, iW) => {
                var OW;
                return WW + wm.Eb + (null !== (OW = null === iW || void 0 === iW ? void 0 : iW.byteLength) && void 0 !== OW ? OW : 0)
              }), 0),
              OW = new Uint8Array(iW),
              mW = new DataView(OW.buffer);
            let EW = 0;
            for (const PW of WW) {
              var NW;
              mW.setUint16(EW, null !== (NW = null === PW || void 0 === PW ? void 0 : PW.byteLength) && void 0 !== NW ? NW : xW.Lc, !0), EW += wm.Eb, null !== PW && (OW.set(PW, EW), EW += PW.byteLength)
            }
            return OW
          }([IE(WW.name), IE(WW.colour), IE(iW.name), IE(iW.colour), IE(OW)]);
        return null !== NW && (0, AW.mf)(NW, 0, null !== (mW = WW.id) && void 0 !== mW ? mW : AW.kd, null !== (EW = iW.id) && void 0 !== EW ? EW : AW.kd, PW)
      }
      recorderSession(WW, iW) {
        this.deps.recorder.session({
          session: iW,
          lobbyType: WW.lobbyType,
          game: WW.gameNameWithVariation,
          lobby: WW.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.nNW()
      }
      filePartDone(WW, iW) {
        this.deps.recorder.filePartDone(WW, iW)
      }
      fileDone(WW) {
        this.deps.recorder.fileDone(WW)
      }
    }
    const rE = -2147483648;
    class zE {
      constructor(WW) {
        var iW;
        this.deps = WW, this.state = Um.b, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.heldOptions = new Map, this.now = null !== (iW = WW.now) && void 0 !== iW ? iW : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var WW, iW, OW;
        return null === (WW = null === (iW = (OW = this.deps).live) || void 0 === iW ? void 0 : iW.call(OW)) || void 0 === WW || WW
      }
      activated(WW) {
        var iW, OW;
        this.live && (this.viewerShown(!0 === (null === (iW = (OW = this.deps).viewerOpen) || void 0 === iW ? void 0 : iW.call(OW))), this.deps.client.recorderSession(WW, (0, BE.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var WW, iW;
        this.live && (this.state.recording || !0 !== (null === (WW = (iW = this.deps).viewerOpen) || void 0 === WW ? void 0 : WW.call(iW))) ? (this.releaseOptions(), this.deps.client.recorderControl(xW.ad.ToggleRecording)) : this.deps.notify(fE.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(xW.ad.SaveClip) : this.deps.notify(fE.e.clippingNotOn)
      }
      viewerShown(WW) {
        this.live && this.deps.client.recorderControl(WW ? xW.ad.ViewerOpened : xW.ad.ViewerClosed)
      }
      setPrefs(WW, iW) {
        this.live && (WW && this.releaseOptions(), this.deps.client.recorderPrefs(WW, iW))
      }
      setAllOptions(WW) {
        var iW;
        this.live && (null === (iW = this.heldOptions) || void 0 === iW || iW.clear(), WW.forEach(((WW, iW) => {
          this.sendOption(iW, WW)
        })))
      }
      setOption(WW, iW) {
        this.live && (this.heldOptions ? this.heldOptions.set(WW, iW) : this.sendOption(WW, iW))
      }
      releaseOptions() {
        const WW = this.heldOptions;
        if (WW) {
          this.heldOptions = null;
          for (const [iW, OW] of WW) this.sendOption(iW, OW)
        }
      }
      sendOption(WW, iW) {
        var OW;
        this.deps.client.recorderOption(WW, void 0 === iW || null === iW ? null : null !== (OW = JSON.stringify(iW)) && void 0 !== OW ? OW : null)
      }
      recordFlyingText(WW, iW, OW, mW) {
        this.live && this.deps.client.recordFlyingText(WW, iW, OW, mW)
      }
      recordPlayerKilled(WW, iW, OW, mW) {
        this.live && this.deps.client.recordPlayerKilled(WW, iW, OW, mW)
      }
      recordKillfeed(WW, iW, OW) {
        this.live && this.deps.client.recordKillfeed(WW, iW, OW)
      }
      hZ() {
        let WW = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, WW = {
            ...WW,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const iW = Math.floor((this.now() - this.recordingSince) / 1e3);
          iW !== WW.seconds && (WW = {
            ...WW,
            seconds: iW
          })
        }
        this.set(WW)
      }
      onEvent(WW) {
        var iW, OW;
        const {
          notify: mW
        } = this.deps, EW = fE.e;
        switch (WW.what) {
          case xW.Yc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), mW(EW.recordingStarted);
            break;
          case xW.Yc.RecordingStopped:
            this.stopRecording(), mW(EW.recordingStopped), this.saveState(xW.kd.Recording, "saving");
            break;
          case xW.Yc.RecordingDiscarded:
            this.stopRecording(), mW(EW.recordingDiscarded);
            break;
          case xW.Yc.RecordingTurnedOff:
            this.stopRecording(), mW(EW.recordingTurnedOff);
            break;
          case xW.Yc.LimitReached:
            mW(EW.limitReached);
            break;
          case xW.Yc.ClipSaved:
            this.saveState(xW.kd.Clip, "saving");
            break;
          case xW.Yc.ClipEmpty:
            mW(EW.clipEmpty);
            break;
          case xW.Yc.ClippingNotOn:
            mW(EW.clippingNotOn);
            break;
          case xW.Yc.Disallowed:
            mW(EW.disallowed);
            break;
          case xW.Yc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case xW.Yc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case xW.Yc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case xW.Yc.SaveBusy:
            null === (iW = (OW = this.deps).onSaveState) || void 0 === iW || iW.call(OW, WW.kind, "busy"), mW(EW.saveBusy);
            break;
          case xW.Yc.CloseViewerFirst:
            mW(EW.closeViewerFirst)
        }
      }
      fileReady(WW, iW) {
        this.deps.download(iW), this.saveState(WW, "done"), this.deps.notify(WW === xW.kd.Clip ? fE.e.clipSaved : fE.e.recordingSaved)
      }
      failed(WW) {
        this.saveState(WW, "failed"), this.deps.notify(WW === xW.kd.Clip ? fE.e.clipFailed : fE.e.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(Um.b)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(WW, iW) {
        var OW, mW;
        null === (OW = (mW = this.deps).onSaveState) || void 0 === OW || OW.call(mW, WW, iW)
      }
      set(WW) {
        WW !== this.state && (this.state = WW, this.deps.onState(WW))
      }
    }
    const FE = new TextDecoder;

    function QE(WW, iW, OW, mW) {
      const EW = [];
      for (let NW = 0; NW < mW; NW++) {
        if (iW + wm.Eb > OW) return null;
        const mW = WW.getUint16(iW, !0);
        if (iW += wm.Eb, mW !== xW.Lc) {
          if (iW + mW > OW) return null;
          EW.push(FE.decode(new Uint8Array(WW.buffer, WW.byteOffset + iW, mW))), iW += mW
        } else EW.push(null)
      }
      return iW === OW ? EW : null
    }

    function WN(WW, iW) {
      let OW = new DataView(new ArrayBuffer(0)),
        mW = !0;
      const EW = {
        replayFailed: (iW, OW, mW) => {
          WW.replayFailed({
            reason: iW,
            code: OW,
            version: mW
          })
        },
        replayOption: (iW, EW, NW, PW) => {
          const LW = function(WW, iW, OW, mW) {
            switch (iW) {
              case xW.ld.Cleared:
                return 0 === mW ? null : void 0;
              case xW.ld.Text:
                return FE.decode(new Uint8Array(WW.buffer, WW.byteOffset + OW, mW));
              case xW.ld.Int:
                return mW === Int32Array.BYTES_PER_ELEMENT ? WW.getInt32(OW, !0) : void 0;
              case xW.ld.Double:
                return mW === Float64Array.BYTES_PER_ELEMENT ? WW.getFloat64(OW, !0) : void 0;
              default:
                return
            }
          }(OW, EW, NW, PW);
          void 0 !== LW ? WW.replayOption({
            key: iW,
            value: LW
          }) : mW = !1
        },
        replayUiEvent: (iW, EW, NW, PW, LW, cW) => {
          const wW = function(WW, iW, OW, mW, EW, NW, PW) {
            const LW = NW + PW;
            switch (iW) {
              case xW.pd.FlyingText: {
                const PW = QE(WW, NW, LW, 1);
                return null !== PW && null !== PW[0] ? {
                  what: iW,
                  GN: OW,
                  RN: mW,
                  angle: EW,
                  contentJson: PW[0]
                } : null
              }
              case xW.pd.PlayerKilled: {
                const mW = QE(WW, NW, LW, 3);
                return mW ? {
                  what: iW,
                  killstreak: OW,
                  dead: mW[0],
                  killer: mW[1],
                  withItem: mW[2]
                } : null
              }
              case xW.pd.Killfeed: {
                const OW = QE(WW, NW, LW, 7);
                return OW ? {
                  what: iW,
                  killerId: OW[0],
                  killerName: OW[1],
                  killerColour: OW[2],
                  victimId: OW[3],
                  victimName: OW[4],
                  victimColour: OW[5],
                  withItem: OW[6]
                } : null
              }
              default:
                return null
            }
          }(OW, iW, EW, NW, PW, LW, cW);
          null !== wW ? WW.replayUiEvent(wW) : mW = !1
        },
        replayFilePart: (OW, EW, NW, PW) => {
          const LW = iW();
          NW + PW > LW.byteLength ? mW = !1 : WW.filePart(OW, EW, new Uint8Array(LW, NW, PW).slice())
        },
        replayFileReady: (iW, OW, mW, EW) => {
          WW.fileReady({
            save: iW,
            kind: OW,
            parts: mW,
            bytes: EW
          })
        },
        recorderEvent: (iW, OW, mW) => {
          WW.recorderEvent({
            what: iW,
            kind: OW,
            save: mW
          })
        },
        replayOpened: (iW, mW, EW) => {
          WW.replayOpened(FE.decode(new Uint8Array(OW.buffer, OW.byteOffset + mW, EW)))
        }
      };
      return (WW, iW, NW, PW) => !(WW < xW.Q.ReplayFailed || WW > xW.Q.RecorderEvent) && (OW = iW, mW = !0, (0, AW.oe)(WW, iW, NW, PW, EW) && mW)
    }

    function iN(WW) {
      let iW = null;
      const OW = WN(WW, (() => {
        if (null === iW) throw new Error("a recorder event read outside recorderEventReader's call");
        return iW.buffer
      }));
      return (WW, mW) => {
        iW = mW;
        try {
          ! function(WW, iW) {
            const OW = WW.slice(),
              mW = new DataView(OW.buffer);
            for (let EW = 0; EW < OW.byteLength;) {
              if (EW + xW.N > OW.byteLength) throw new Error(`the recorder module's events end mid-head at ${EW}`);
              const WW = mW.getUint32(EW, !0),
                NW = 65535 & WW,
                PW = WW >>> 16,
                LW = EW + xW.N;
              if (LW + PW > OW.byteLength || !iW(NW, mW, LW, PW)) throw new Error(`the recorder module wrote a malformed event ${NW} (${PW} bytes) at ${EW}`);
              EW = LW + (0, xW.xe)(PW)
            }
          }(WW, OW)
        } finally {
          iW = null
        }
      }
    }
    class ON {
      constructor(WW, iW) {
        this.acks = WW, this.handlers = iW, this.parts = new Map
      }
      onPart(WW, iW, OW) {
        let mW = this.parts.get(WW);
        mW || (mW = [], this.parts.set(WW, mW)), mW[iW] = OW, this.acks.filePartDone(WW, iW)
      }
      onReady(WW) {
        var iW;
        const OW = null !== (iW = this.parts.get(WW.save)) && void 0 !== iW ? iW : [];
        this.parts.delete(WW.save);
        const mW = function(WW, iW, OW) {
          if (WW.length !== iW) return null;
          let mW = 0;
          for (let PW = 0; PW < iW; PW++) {
            if (void 0 === WW[PW]) return null;
            mW += WW[PW].byteLength
          }
          if (mW !== OW) return null;
          if (1 === iW) return WW[0];
          const EW = new Uint8Array(OW);
          let NW = 0;
          for (const PW of WW) EW.set(PW, NW), NW += PW.byteLength;
          return EW
        }(OW, WW.parts, WW.bytes);
        this.acks.fileDone(WW.save), null === mW ? this.handlers.fileIncomplete(WW.save, WW.kind) : this.handlers.fileReady(WW.save, WW.kind, mW)
      }
      onDiscarded(WW) {
        this.parts.delete(WW)
      }
    }

    function mN() {
      return OW.e(73).then((() => OW(64370)))
    }
    class EN {
      constructor(WW) {
        this.deps = WW, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: iW
        } = WW;
        this.recorder = new zE({
          client: iW,
          live: () => {
            var WW;
            return !0 !== (null === (WW = this.viewer) || void 0 === WW ? void 0 : WW.inPlayback)
          },
          viewerOpen: WW.viewerOpen,
          notify: WW.notify,
          download: iW => {
            var OW;
            null === (OW = WW.download) || void 0 === OW || OW.call(WW, iW)
          },
          onState: WW.onRecorderState,
          onSaveState: WW.onSaveState
        }), this.parts = new ON(iW, {
          fileReady: (WW, iW, OW) => {
            var mW;
            iW === xW.kd.Edited ? null === (mW = this.viewer) || void 0 === mW || mW.saveDone(OW) : this.recorder.fileReady(iW, OW)
          },
          fileIncomplete: (WW, iW) => {
            this.saveFailed(iW)
          }
        });
        const OW = {
          replayFailed: WW => {
            var iW;
            null === (iW = this.viewer) || void 0 === iW || iW.onFailed(WW)
          },
          replayOption: iW => {
            var OW;
            null === (OW = WW.onReplayOption) || void 0 === OW || OW.call(WW, iW)
          },
          replayUiEvent: iW => {
            var OW;
            null === (OW = WW.onReplayUiEvent) || void 0 === OW || OW.call(WW, iW)
          },
          filePart: (WW, iW, OW) => {
            this.parts.onPart(WW, iW, OW)
          },
          fileReady: WW => {
            this.parts.onReady(WW)
          },
          replayOpened: iW => {
            var OW;
            null === (OW = WW.onReplayOpened) || void 0 === OW || OW.call(WW, iW)
          },
          recorderEvent: WW => {
            var iW;
            switch (WW.what) {
              case xW.Yc.FileDiscarded:
                this.parts.onDiscarded(WW.save);
                break;
              case xW.Yc.SaveFailed:
                this.saveFailed(WW.kind);
                break;
              case xW.Yc.SaveBusy:
                if (null !== (iW = this.viewer) && void 0 !== iW && iW.savePending) {
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
        this.sink = function(WW, iW) {
          return {
            onReplayEvent: WN(WW, iW)
          }
        }(OW, WW.buffer), this.recorderEvents = iN(OW)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var WW;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (WW = this.deps.loadViewer) && void 0 !== WW ? WW : mN)().catch((WW => {
          throw this.viewerChunk = null, WW
        })), this.viewerChunk.then((WW => (this.viewer ??= new WW.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var WW, iW;
            null === (WW = (iW = this.deps).onViewerChange) || void 0 === WW || WW.call(iW)
          }
        }), this.viewer))))
      }
      activated(WW) {
        this.recorder.activated(WW)
      }
      afterFrame(WW) {
        try {
          WW > 0 && this.recorder.hZ()
        } finally {
          var iW;
          null === (iW = this.viewer) || void 0 === iW || iW.afterFrame()
        }
      }
      end() {
        var WW;
        null === (WW = this.viewer) || void 0 === WW || WW.end()
      }
      saveFailed(WW) {
        var iW;
        WW === xW.kd.Edited ? null === (iW = this.viewer) || void 0 === iW || iW.saveFailed(!1) : this.recorder.failed(WW)
      }
    }
    var NN = OW(42134),
      PN = OW(42149),
      LN = OW(5560),
      cN = OW(42429);
    class wN {
      constructor(WW) {
        this.deps = WW, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(WW, iW) {
        if (!this.deps.live() || 0 === WW && 0 === iW) return;
        const OW = (0, fW.q)(0, performance.now()),
          mW = this.deps.dragScale();
        (0, cN.i)((() => {
          (0, fW.v)(xW.hb.MouseDown, 0, 0, 0, OW), (0, fW.v)(xW.hb.MouseMove, 0, WW * mW, iW * mW, 0), (0, fW.v)(xW.hb.MouseUp, 0, 0, 0, OW)
        }))
      }
      move(WW) {
        var iW, OW;
        this.analogue[0] = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.x) && void 0 !== iW ? iW : 0, this.analogue[1] = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.y) && void 0 !== OW ? OW : 0, this.send()
      }
      holdVertical(WW, iW) {
        const OW = "freeCamUp" === WW ? AW.hc.Up : AW.hc.Down;
        this.keys = iW ? this.keys | OW : this.keys & ~OW, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const WW = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== WW && !(0, AW.Be)(WW, 0, this.analogue, this.keys)
      }
    }
    var tN = OW(4802),
      ZN = OW(745),
      xN = OW(259),
      lN = OW(100),
      AN = OW(35157),
      bN = OW(730),
      jN = OW(10106);

    function UN() {
      const WW = mW.d.get("clientEscMenuOptions"),
        iW = (0, ZN.s)(WW);
      return {
        mouse: (0, lN.isMobile)() ? iW : WW.mouseSensitivity,
        touch: iW,
        fovPercent: WW.cameraFOV
      }
    }

    function kN() {
      const WW = mW.d.get("clientEscMenuOptions"),
        iW = mW.d.get("isTouchScreen") ? (0, ZN.s)(WW) : WW.mouseSensitivity,
        OW = UN().mouse;
      return OW > 0 ? iW / OW : 1
    }

    function sN(WW) {
      const iW = () => {
        WW.setSoundPrefs(mW.d.get("soundVolume"), mW.d.get("soundOnFromAd"))
      };
      let OW = null;
      const EW = () => {
        const {
          showFog: iW,
          enableLighting: EW,
          fogChunkDistance: NW,
          chunkFadeIn: PW
        } = mW.d.get("clientEscMenuOptions"), LW = {
          showFog: iW,
          lighting: EW,
          fogChunks: NW,
          chunkFade: PW,
          cellLight: (0, tN.i)("cellLight") ? (0, tN.i)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        OW && (0, xW.ge)(OW) === (0, xW.ge)(LW) && OW.fogChunks === NW || (OW = LW, WW.setEnvPrefs(OW))
      };
      let NW = null;
      const LW = () => {
        const iW = function() {
          const WW = mW.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: mW.d.get("areNametagsHidden"),
            crouchToggle: WW.crouchIsToggle,
            bhopDisabled: WW.disableBunnyHopping,
            disableBobbing: WW.disableBobbing,
            ezTowering: WW.ezTowering ? (0, xN.e)() : null,
            ezBridging: WW.ezBridging,
            showChunkBorders: WW.showChunkBorders,
            touchWalk: !(0, jN.e)(),
            edgeGuard: WW.touchEdgeGuard,
            edgeGuardLong: (0, bN.e)(),
            nametagCutDistance: (0, AN.e)()
          }
        }();
        (0, hW.ae)(NW, iW) || (NW = iW, WW.setUiPrefs(iW))
      };
      let cW = null;
      const wW = () => {
        const iW = UN();
        (0, hW.ae)(cW, iW) || (cW = iW, WW.setLookPrefs(iW))
      };
      iW(), EW(), LW(), wW();
      const tW = [(0, PW.n)("appManagerUpdated|soundVolume", iW), (0, PW.n)("appManagerUpdated|soundOnFromAd", iW), (0, PW.n)("appManagerUpdated|clientEscMenuOptions", (() => {
        EW(), LW(), wW()
      })), (0, PW.n)(jN.b, LW), (0, PW.n)("appManagerUpdated|enabledDebugFeatures", EW), (0, PW.n)("appManagerUpdated|areNametagsHidden", LW), (0, PW.n)("appManagerUpdated|showDistantNametags", LW)];
      return () => {
        for (const WW of tW) WW()
      }
    }
    var MN = OW(42416),
      KN = OW(42419);
    var SN = (0, KN.b)("lend"),
      YN = (0, KN.b)("starting"),
      yN = (0, KN.b)("generation"),
      TN = (0, KN.b)("end");
    class JN {
      constructor(WW) {
        this.deps = WW, Object.defineProperty(this, TN, {
          value: hN
        }), Object.defineProperty(this, SN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, YN, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, yN, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, MN.d)(this, SN)[SN] || (0, MN.d)(this, YN)[YN]
      }
      async start(WW) {
        if (this.active) return "busy";
        const iW = (0, MN.d)(this, yN)[yN];
        (0, MN.d)(this, YN)[YN] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, MN.d)(this, YN)[YN] = !1
        }
        if (iW !== (0, MN.d)(this, yN)[yN]) return "refused";
        const OW = this.deps.beginSave();
        if (!OW) return "refused";
        const mW = Number(BigInt.asUintN(32, WW)),
          EW = Number(BigInt.asUintN(32, WW >> 32n));
        let NW = "refused";
        return this.deps.recorderCall(((WW, iW) => {
          const PW = OW.editState,
            LW = WW.stage(PW.length);
          0 !== LW ? (new Uint8Array(iW.buffer, LW, PW.length).set(PW), WW.uNW(OW.headLen, mW, EW) && (NW = "sealing")) : NW = "tooLarge"
        }), !0), "sealing" !== NW ? (OW.end(), NW) : ((0, MN.d)(this, SN)[SN] = OW, "sealing")
      }
      beforeRecorderStep() {
        const WW = (0, MN.d)(this, SN)[SN];
        if (!WW) return null;
        let iW = -1,
          OW = 0;
        if (!this.deps.recorderCall((WW => {
            iW = WW.oNW(), iW > 0 && (OW = WW.dNW())
          }))) return (0, MN.d)(this, TN)[TN](WW, "stopped");
        if (iW < 0) return (0, MN.d)(this, TN)[TN](WW, "read");
        if (0 === iW) return null;
        const mW = WW.head(OW, iW);
        let EW = !1;
        if (mW && this.deps.recorderCall(((WW, OW) => {
            const NW = WW.stage(iW);
            0 !== NW && (new Uint8Array(OW.buffer, NW, iW).set(mW), EW = !0)
          }), !0), EW) return null;
        const NW = WW.givenUp();
        this.deps.recorderCall((WW => {
          WW.eNW()
        }));
        const PW = (0, MN.d)(this, TN)[TN](WW, NW ? "givenUp" : "stopped");
        return NW && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), PW
      }
      stop() {
        (0, MN.d)(this, yN)[yN]++;
        const WW = (0, MN.d)(this, SN)[SN];
        WW && (this.deps.recorderCall((WW => {
          WW.eNW()
        })), (0, MN.d)(this, TN)[TN](WW, "stopped"))
      }
    }

    function hN(WW, iW) {
      return (0, MN.d)(this, SN)[SN] = null, WW.end(), iW
    }

    function HN(WW, iW) {
      const OW = new Uint8Array(4),
        mW = new DataView(OW.buffer);
      return mW.setUint8(0, WW ? 1 : 0), mW.setUint16(2, Math.max(0, Math.min(65535, Math.round(iW))), !0), OW
    }

    function nN(WW, iW) {
      return WW > function(WW) {
        return 16777216 + 314572.8 * Math.max(0, WW)
      }(iW) + 33554432
    }
    let uN = null;

    function oN(WW) {
      return uN ??= async function(WW) {
        const iW = WW.loadInFlight();
        iW && await iW.catch((() => {}));
        if (WW.trapped()) return "trapped";
        if (WW.busy() || !nN(WW.memoryBytes(), WW.clipSeconds())) return "EZ";
        WW.unload();
        let OW = !1;
        try {
          OW = await WW.load()
        } catch {
          OW = !1
        }
        if (!OW) return WW.trapped() ? "trapped" : WW.JA() ? "JA" : "failed";
        return "recycled"
      }(WW).finally((() => {
        uN = null
      })), uN
    }
    const dN = "Replay recording couldn't load, so try again.",
      eN = "Replay recording stopped working, so reload the page to record replays again.",
      vN = new Set([xW.ad.ToggleRecording, xW.ad.SaveClip]);
    var gN = (0, KN.b)("bindings"),
      DN = (0, KN.b)("module"),
      VN = (0, KN.b)("memory"),
      pN = (0, KN.b)("trapped"),
      fN = (0, KN.b)("JA"),
      CN = (0, KN.b)("recycleDue"),
      XN = (0, KN.b)("loading"),
      BN = (0, KN.b)("generation"),
      qN = (0, KN.b)("viewDrawn"),
      RN = (0, KN.b)("clip"),
      GN = (0, KN.b)("session"),
      IN = (0, KN.b)("control"),
      aN = (0, KN.b)("deferred"),
      rN = (0, KN.b)("coreU8"),
      zN = (0, KN.b)("coreU32"),
      FN = (0, KN.b)("moduleU8"),
      QN = (0, KN.b)("edited"),
      WP = (0, KN.b)("sendSession"),
      iP = (0, KN.b)("checkNotInEvents"),
      OP = (0, KN.b)("clipping"),
      mP = (0, KN.b)("busy"),
      EP = (0, KN.b)("use"),
      NP = (0, KN.b)("ensureLoaded"),
      PP = (0, KN.b)("loadOnce"),
      LP = (0, KN.b)("recycleAfterStep"),
      cP = (0, KN.b)("settleRecycle"),
      wP = (0, KN.b)("load"),
      tP = (0, KN.b)("attach"),
      ZP = (0, KN.b)("resendHeld"),
      xP = (0, KN.b)("recycle"),
      lP = (0, KN.b)("send"),
      AP = (0, KN.b)("unload"),
      bP = (0, KN.b)("dropModule"),
      jP = (0, KN.b)("coreBytes"),
      UP = (0, KN.b)("coreWords"),
      kP = (0, KN.b)("moduleBytes"),
      sP = (0, KN.b)("loadFailed"),
      MP = (0, KN.b)("call"),
      KP = (0, KN.b)("guard"),
      SP = (0, KN.b)("trapOn");
    class YP {
      constructor(WW) {
        this.deps = WW, Object.defineProperty(this, SP, {
          value: IP
        }), Object.defineProperty(this, KP, {
          value: GP
        }), Object.defineProperty(this, MP, {
          value: RP
        }), Object.defineProperty(this, sP, {
          value: qP
        }), Object.defineProperty(this, kP, {
          value: BP
        }), Object.defineProperty(this, UP, {
          value: XP
        }), Object.defineProperty(this, jP, {
          value: CP
        }), Object.defineProperty(this, bP, {
          value: fP
        }), Object.defineProperty(this, AP, {
          value: pP
        }), Object.defineProperty(this, lP, {
          value: VP
        }), Object.defineProperty(this, xP, {
          value: DP
        }), Object.defineProperty(this, ZP, {
          value: gP
        }), Object.defineProperty(this, tP, {
          value: vP
        }), Object.defineProperty(this, wP, {
          value: eP
        }), Object.defineProperty(this, cP, {
          value: dP
        }), Object.defineProperty(this, LP, {
          value: oP
        }), Object.defineProperty(this, PP, {
          value: uP
        }), Object.defineProperty(this, NP, {
          value: nP
        }), Object.defineProperty(this, EP, {
          value: HP
        }), Object.defineProperty(this, mP, {
          value: hP
        }), Object.defineProperty(this, OP, {
          value: JP
        }), Object.defineProperty(this, iP, {
          value: TP
        }), Object.defineProperty(this, WP, {
          value: yP
        }), Object.defineProperty(this, gN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, VN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pN, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, fN, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, CN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, BN, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, qN, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, RN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, FN, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QN, {
          writable: !0,
          value: void 0
        }), (0, MN.d)(this, QN)[QN] = new JN({
          ensureLoaded: () => (0, MN.d)(this, NP)[NP](),
          recorderCall: (WW, iW) => {
            iW && (0, MN.d)(this, iP)[iP]("an edited save's stage");
            const OW = (0, MN.d)(this, MP)[MP](((iW, OW) => (WW(iW, OW), !0)));
            return null !== OW && void 0 !== OW && OW
          },
          beginSave: WW.beginSave,
          givenUp: WW.givenUp
        })
      }
      get active() {
        return null !== (0, MN.d)(this, DN)[DN]
      }
      get trapped() {
        return (0, MN.d)(this, pN)[pN]
      }
      get loading() {
        return null !== (0, MN.d)(this, XN)[XN]
      }
      prefetch() {
        (0, MN.d)(this, fN)[fN] || (0, MN.d)(this, pN)[pN] || (0, MN.d)(this, DN)[DN] || (0, MN.d)(this, XN)[XN] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, MN.d)(this, qN)[qN] = !0, (0, MN.d)(this, OP)[OP]() && (0, MN.d)(this, EP)[EP]()
      }
      prefs(WW, iW) {
        (0, MN.d)(this, RN)[RN] = {
          on: WW,
          seconds: iW
        }, (0, MN.d)(this, lP)[lP](xW.Uc.Prefs, HN(WW, iW)), WW && (0, MN.d)(this, qN)[qN] && (0, MN.d)(this, EP)[EP]()
      }
      control(WW) {
        const iW = function(WW) {
          return new Uint8Array([WW, 0, 0, 0])
        }(WW);
        if (vN.has(WW)) {
          if (!(0, MN.d)(this, pN)[pN]) return (0, MN.d)(this, DN)[DN] ? void(0, MN.d)(this, lP)[lP](xW.Uc.Control, iW) : ((0, MN.d)(this, IN)[IN] = iW, void(0, MN.d)(this, EP)[EP]());
          this.deps.failed(eN)
        } else(0, MN.d)(this, fN)[fN] || this.deps.coreCommand(xW.Uc.Control, iW)
      }
      session(WW) {
        (0, MN.d)(this, GN)[GN] = WW, (0, MN.d)(this, WP)[WP](WW)
      }
      filePartDone(WW, iW) {
        (0, MN.d)(this, lP)[lP](xW.Uc.FilePartDone, function(WW, iW) {
          const OW = new Uint8Array(8),
            mW = new DataView(OW.buffer);
          return mW.setUint32(0, WW, !0), mW.setUint32(4, iW, !0), OW
        }(WW, iW))
      }
      fileDone(WW) {
        return (0, MN.d)(this, lP)[lP](xW.Uc.FileDone, function(WW) {
          const iW = new Uint8Array(4);
          return new DataView(iW.buffer).setUint32(0, WW, !0), iW
        }(WW)), (0, MN.d)(this, LP)[LP]()
      }
      saveEdited(WW) {
        return (0, MN.d)(this, iP)[iP]("saveEdited"), (0, MN.d)(this, QN)[QN].start(WW)
      }
      afterFrame() {
        if (!(0, MN.d)(this, DN)[DN]) return;
        "read" === (0, MN.d)(this, QN)[QN].beforeRecorderStep() && (0, MN.d)(this, LP)[LP]();
        const WW = (0, MN.d)(this, CN)[CN];
        (0, MN.d)(this, CN)[CN] = null;
        const iW = (0, MN.d)(this, DN)[DN],
          OW = (0, MN.d)(this, VN)[VN];
        if (!iW || !OW) return void(null === WW || void 0 === WW || WW.resolve((0, MN.d)(this, pN)[pN] ? "trapped" : "EZ"));
        const {
          core: mW
        } = this.deps, EW = mW.DNW(2);
        let NW, PW, LW, cW, wW = 0,
          tW = 0;
        if (0 !== EW) {
          var ZW, xW;
          const WW = (0, MN.d)(this, UP)[UP]();
          wW = null !== (ZW = WW[EW >>> 2]) && void 0 !== ZW ? ZW : 0, tW = null !== (xW = WW[1 + (EW >>> 2)]) && void 0 !== xW ? xW : 0
        }
        try {
          if (tW > 0) {
            const WW = iW.feed(tW);
            0 !== WW && (0, MN.d)(this, kP)[kP](OW).set((0, MN.d)(this, jP)[jP]().subarray(wW, wW + tW), WW)
          }
          NW = iW.step(), PW = iW.VNW(), LW = iW.pNW(), cW = iW.fNW()
        } catch (lW) {
          if (!(0, MN.d)(this, SP)[SP](lW)) throw null === WW || void 0 === WW || WW.resolve("EZ"), lW;
          return void(null === WW || void 0 === WW || WW.resolve("trapped"))
        }
        if (NW > 0) {
          const WW = mW.CNW(2, NW);
          0 !== WW && (0, MN.d)(this, jP)[jP]().set((0, MN.d)(this, kP)[kP](OW).subarray(PW, PW + NW), WW)
        }
        if (LW > 0) {
          (0, MN.d)(this, aN)[aN] = [];
          try {
            this.deps.events(new Uint8Array(OW.buffer, cW, LW), OW)
          } catch (lW) {
            throw null === WW || void 0 === WW || WW.resolve("EZ"), lW
          } finally {
            const WW = (0, MN.d)(this, aN)[aN];
            (0, MN.d)(this, aN)[aN] = null;
            for (const [iW, OW] of WW)(0, MN.d)(this, lP)[lP](iW, OW)
          }
        }
        if (!(0, MN.d)(this, OP)[OP]() && !(0, MN.d)(this, mP)[mP]()) return (0, MN.d)(this, AP)[AP](), void(null === WW || void 0 === WW || WW.resolve("EZ"));
        null === WW || void 0 === WW || WW.resolve((0, MN.d)(this, xP)[xP]())
      }
      dispose() {
        (0, MN.d)(this, fN)[fN] = !0, (0, MN.d)(this, AP)[AP]()
      }
    }

    function yP(WW) {
      (0, MN.d)(this, lP)[lP](xW.Uc.Session, function(WW) {
        const iW = new TextEncoder,
          OW = iW.encode(WW.game).subarray(0, 65535),
          mW = iW.encode(WW.lobby).subarray(0, 65535),
          EW = new Uint8Array(22 + OW.length + 2 + mW.length),
          NW = new DataView(EW.buffer);
        NW.setFloat64(0, WW.unixMs, !0), NW.setBigUint64(8, BigInt.asUintN(64, WW.session), !0), NW.setUint8(16, WW.lobbyType);
        let PW = 20;
        for (const LW of [OW, mW]) NW.setUint16(PW, LW.length, !0), EW.set(LW, PW + 2), PW += 2 + LW.length;
        return EW
      }({
        ...WW,
        unixMs: this.deps.unixNow()
      }))
    }

    function TP(WW) {
      false
    }

    function JP() {
      var WW, iW;
      return null !== (WW = null === (iW = (0, MN.d)(this, RN)[RN]) || void 0 === iW ? void 0 : iW.on) && void 0 !== WW && WW
    }

    function hP() {
      const WW = (0, MN.d)(this, DN)[DN];
      let iW = !0;
      if (WW) try {
        iW = WW.busy()
      } catch (OW) {
        if (!(0, MN.d)(this, SP)[SP](OW)) throw OW
      }
      return iW || (0, MN.d)(this, QN)[QN].active
    }
    async function HP() {
      !(0, MN.d)(this, fN)[fN] && this.deps.allowed() ? await (0, MN.d)(this, NP)[NP]() : (0, MN.d)(this, IN)[IN] = null
    }

    function nP() {
      return (0, MN.d)(this, pN)[pN] || (0, MN.d)(this, fN)[fN] ? Promise.resolve(!1) : (0, MN.d)(this, DN)[DN] ? Promise.resolve(!0) : ((0, MN.d)(this, XN)[XN] ??= (0, MN.d)(this, PP)[PP](), (0, MN.d)(this, XN)[XN])
    }
    async function uP() {
      let WW = !1;
      try {
        return WW = await (0, MN.d)(this, wP)[wP](), WW
      } finally {
        WW || ((0, MN.d)(this, IN)[IN] = null), (0, MN.d)(this, XN)[XN] = null
      }
    }

    function oP() {
      if (!(0, MN.d)(this, DN)[DN]) return Promise.resolve((0, MN.d)(this, pN)[pN] ? "trapped" : "EZ");
      if (!(0, MN.d)(this, CN)[CN]) {
        let WW = () => {};
        const iW = new Promise((iW => {
          WW = iW
        }));
        (0, MN.d)(this, CN)[CN] = {
          promise: iW,
          resolve: WW
        }
      }
      return (0, MN.d)(this, CN)[CN].promise
    }

    function dP(WW) {
      const iW = (0, MN.d)(this, CN)[CN];
      (0, MN.d)(this, CN)[CN] = null, null === iW || void 0 === iW || iW.resolve(WW)
    }
    async function eP() {
      let WW = (0, MN.d)(this, gN)[gN];
      if (!WW) {
        const iW = (0, MN.d)(this, BN)[BN];
        try {
          WW = await this.deps.load()
        } catch (OW) {
          return iW === (0, MN.d)(this, BN)[BN] && await (0, MN.d)(this, sP)[sP](OW), !1
        }
        if (iW !== (0, MN.d)(this, BN)[BN]) return this.deps.unload(), !1;
        const mW = WW,
          EW = (0, MN.d)(this, KP)[KP]((() => mW.XNW()));
        if (void 0 === EW) return !1;
        const NW = this.deps.core.BNW();
        if (EW !== NW) return await (0, MN.d)(this, sP)[sP](new Error(`recorder port version ${EW}, the core's ${NW}`)), !1;
        (0, MN.d)(this, gN)[gN] = WW
      }
      const iW = WW;
      try {
        if (!(0, MN.d)(this, KP)[KP]((() => ((0, MN.d)(this, DN)[DN] = new iW.qNW, (0, MN.d)(this, VN)[VN] = iW.vNW(), !0)))) return !1;
        (0, MN.d)(this, ZP)[ZP]();
        const WW = (0, MN.d)(this, IN)[IN];
        return (0, MN.d)(this, IN)[IN] = null, WW && (0, MN.d)(this, lP)[lP](xW.Uc.Control, WW), (0, MN.d)(this, tP)[tP]()
      } catch (OW) {
        return (0, MN.d)(this, AP)[AP](), await (0, MN.d)(this, sP)[sP](OW), !1
      }
    }

    function vP() {
      return this.deps.core.RNW(0), 1 === this.deps.core.RNW(1) || ((0, MN.d)(this, AP)[AP](), this.deps.failed(dN), !1)
    }

    function gP() {
      (0, MN.d)(this, RN)[RN] && (0, MN.d)(this, lP)[lP](xW.Uc.Prefs, HN((0, MN.d)(this, RN)[RN].on, (0, MN.d)(this, RN)[RN].seconds)), (0, MN.d)(this, GN)[GN] && (0, MN.d)(this, WP)[WP]((0, MN.d)(this, GN)[GN])
    }

    function DP() {
      return oN({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var WW, iW;
          return null !== (WW = null === (iW = (0, MN.d)(this, RN)[RN]) || void 0 === iW ? void 0 : iW.seconds) && void 0 !== WW ? WW : 0
        },
        trapped: () => (0, MN.d)(this, pN)[pN],
        busy: () => (0, MN.d)(this, mP)[mP](),
        loadInFlight: () => (0, MN.d)(this, XN)[XN],
        JA: () => (0, MN.d)(this, fN)[fN],
        unload: () => {
          (0, MN.d)(this, AP)[AP]()
        },
        load: () => (0, MN.d)(this, NP)[NP]()
      })
    }

    function VP(WW, iW) {
      (0, MN.d)(this, aN)[aN] ? (0, MN.d)(this, aN)[aN].push([WW, iW]): (0, MN.d)(this, MP)[MP](((OW, mW) => {
        const EW = OW.gNW(iW.length);
        0 !== EW && (new Uint8Array(mW.buffer, EW, iW.length).set(iW), OW.command(WW, iW.length))
      }))
    }

    function pP() {
      (0, MN.d)(this, BN)[BN]++, (0, MN.d)(this, cP)[cP]("EZ"), (0, MN.d)(this, QN)[QN].stop(), this.deps.core.RNW(0), (0, MN.d)(this, bP)[bP](), (0, MN.d)(this, pN)[pN] || ((0, MN.d)(this, gN)[gN] = null, this.deps.unload())
    }

    function fP() {
      (0, MN.d)(this, MP)[MP]((WW => {
        WW.free()
      })), (0, MN.d)(this, DN)[DN] = null, (0, MN.d)(this, VN)[VN] = null, (0, MN.d)(this, FN)[FN] = null
    }

    function CP() {
      var WW;
      const iW = this.deps.coreBuffer();
      return (null === (WW = (0, MN.d)(this, rN)[rN]) || void 0 === WW ? void 0 : WW.buffer) !== iW && ((0, MN.d)(this, rN)[rN] = new Uint8Array(iW)), (0, MN.d)(this, rN)[rN]
    }

    function XP() {
      var WW;
      const iW = this.deps.coreBuffer();
      return (null === (WW = (0, MN.d)(this, zN)[zN]) || void 0 === WW ? void 0 : WW.buffer) !== iW && ((0, MN.d)(this, zN)[zN] = new Uint32Array(iW, 0, iW.byteLength >>> 2)), (0, MN.d)(this, zN)[zN]
    }

    function BP(WW) {
      var iW;
      const OW = WW.buffer;
      return (null === (iW = (0, MN.d)(this, FN)[FN]) || void 0 === iW ? void 0 : iW.buffer) !== OW && ((0, MN.d)(this, FN)[FN] = new Uint8Array(OW)), (0, MN.d)(this, FN)[FN]
    }
    async function qP(WW) {
      await this.deps.staleOr(WW, (() => {
        this.deps.failed(dN)
      }))
    }

    function RP(WW) {
      const iW = (0, MN.d)(this, DN)[DN],
        OW = (0, MN.d)(this, VN)[VN];
      if (iW && OW) return (0, MN.d)(this, KP)[KP]((() => WW(iW, OW)))
    }

    function GP(WW) {
      if (!(0, MN.d)(this, pN)[pN]) try {
        return WW()
      } catch (iW) {
        if (!(0, MN.d)(this, SP)[SP](iW)) throw iW;
        return
      }
    }

    function IP(WW) {
      return WW instanceof WebAssembly.RuntimeError && ((0, MN.d)(this, pN)[pN] = !0, (0, MN.d)(this, DN)[DN] = null, (0, MN.d)(this, VN)[VN] = null, (0, MN.d)(this, FN)[FN] = null, (0, MN.d)(this, gN)[gN] = null, (0, MN.d)(this, IN)[IN] = null, (0, MN.d)(this, cP)[cP]("trapped"), this.deps.core.RNW(0), (0, MN.d)(this, QN)[QN].stop(), this.deps.crash(this.deps.markTrapped(WW)), this.deps.failed(eN), !0)
    }
    var aP = OW(39897);
    const rP = new Map([
      ["skyblock", () => OW.e(60).then((() => OW(39894)))]
    ]);

    function zP(WW) {
      const iW = rP.get(WW);
      return iW ? iW().then((() => {
        const iW = (0, aP.c)(WW);
        if (!iW) throw new Error(`${WW}'s replay hook module registered no hook`);
        return iW
      })) : null
    }
    class FP {
      constructor(WW) {
        this.deps = WW, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(WW) {
        if (this.pending.clear(), WW === this.game && null !== this.hook) return void(this.all = !0);
        const iW = ++this.generation;
        this.game = WW, this.hook = null, this.all = !1;
        const OW = this.deps.loadHook(WW);
        null === OW || void 0 === OW || OW.then((WW => {
          iW === this.generation && (this.hook = WW, this.all = !0)
        }), (WW => {
          iW === this.generation && this.deps.onError(WW)
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
          hook: iW
        } = this;
        if (null === iW || !WW || !this.all && 0 === this.pending.size) return;
        const OW = this.deps.cmd();
        if (null === OW) return;
        const {
          api: mW
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: WW,
            count: iW
          } = im(mW, this.ids);
          this.ids = WW;
          for (let OW = 0; OW < iW; OW++) this.pending.set(WW[OW], !0)
        }
        const EW = this.ids = Om(this.ids, this.pending.size);
        let NW = 0;
        for (const wW of this.pending.keys()) EW[NW++] = wW;
        const PW = [],
          LW = mm(mW, EW, NW, ((WW, iW) => {
            null !== iW && PW.push({
              serverId: WW,
              info: iW,
              spawned: !0 === this.pending.get(WW)
            })
          }));
        if (LW) {
          this.pending.clear();
          for (const {
              serverId: WW,
              info: mW,
              spawned: EW
            }
            of PW) try {
            iW(mW, {
              setFacingTolerance: iW => {
                null === iW && EW || YO(OW, WW, iW) || this.pending.set(WW, EW)
              }
            })
          } catch (cW) {
            this.deps.onError(cW)
          }
        }
      }
    }
    var QP = (0, KN.b)("bindings"),
      WL = (0, KN.b)("module"),
      iL = (0, KN.b)("memory"),
      OL = (0, KN.b)("trapped"),
      mL = (0, KN.b)("generation"),
      EL = (0, KN.b)("loading"),
      NL = (0, KN.b)("lend"),
      PL = (0, KN.b)("givenUp"),
      LL = (0, KN.b)("afterSave"),
      cL = (0, KN.b)("opens"),
      wL = (0, KN.b)("saveAskedAt"),
      tL = (0, KN.b)("unload"),
      ZL = (0, KN.b)("dropModule"),
      xL = (0, KN.b)("loadFailed"),
      lL = (0, KN.b)("saveReadsBody"),
      AL = (0, KN.b)("command"),
      bL = (0, KN.b)("call"),
      jL = (0, KN.b)("guard"),
      UL = (0, KN.b)("trapOn");
    class kL {
      constructor(WW) {
        this.deps = WW, Object.defineProperty(this, UL, {
          value: JL
        }), Object.defineProperty(this, jL, {
          value: TL
        }), Object.defineProperty(this, bL, {
          value: yL
        }), Object.defineProperty(this, AL, {
          value: YL
        }), Object.defineProperty(this, lL, {
          get: SL,
          set: void 0
        }), Object.defineProperty(this, xL, {
          value: KL
        }), Object.defineProperty(this, ZL, {
          value: ML
        }), Object.defineProperty(this, tL, {
          value: sL
        }), Object.defineProperty(this, QP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, WL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, OL, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, mL, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, EL, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, NL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, PL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, LL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cL, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, wL, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, MN.d)(this, WL)[WL] && null === (0, MN.d)(this, LL)[LL]
      }
      async open(WW, iW) {
        if ((0, MN.d)(this, OL)[OL]) return xW.gd.ModuleTrap;
        let OW = (0, MN.d)(this, QP)[QP];
        if (!OW) {
          const WW = (0, MN.d)(this, mL)[mL];
          (0, MN.d)(this, EL)[EL]++;
          try {
            OW = await this.deps.load()
          } catch (EW) {
            return (0, MN.d)(this, EL)[EL]--, WW !== (0, MN.d)(this, mL)[mL] ? "stopped" : (0, MN.d)(this, xL)[xL](EW, iW)
          }
          if ((0, MN.d)(this, EL)[EL]--, WW !== (0, MN.d)(this, mL)[mL]) return (0, MN.d)(this, QP)[QP] || 0 !== (0, MN.d)(this, EL)[EL] || (0, MN.d)(this, OL)[OL] || this.deps.unload(), "stopped";
          if ((0, MN.d)(this, OL)[OL]) return xW.gd.ModuleTrap;
          const mW = OW.XNW(),
            NW = this.deps.core.BNW();
          if (mW !== NW) return (0, MN.d)(this, xL)[xL](new Error(`replay port version ${mW}, the core's ${NW}`), iW);
          (0, MN.d)(this, QP)[QP] = OW
        }
        if (!(0, MN.d)(this, WL)[WL]) {
          const WW = OW;
          if (!(0, MN.d)(this, jL)[jL]((() => {
              (0, MN.d)(this, WL)[WL] = new WW.GNW, (0, MN.d)(this, iL)[iL] = WW.INW()
            }))) return xW.gd.ModuleTrap
        }
        let mW = !1;
        return (0, MN.d)(this, bL)[bL](((iW, OW) => {
          null !== (0, MN.d)(this, LL)[LL] && iW.step(0, 0);
          const EW = iW.stage(WW.length);
          0 !== EW && (new Uint8Array(OW.buffer, EW, WW.length).set(WW), iW.open(), (0, MN.d)(this, PL)[PL] = (0, MN.d)(this, NL)[NL], (0, MN.d)(this, LL)[LL] = null, (0, MN.d)(this, cL)[cL]++, mW = !0)
        })) ? mW ? "opening" : xW.gd.TooLarge : xW.gd.ModuleTrap
      }
      beforeFrame(WW) {
        const iW = (0, MN.d)(this, WL)[WL],
          OW = (0, MN.d)(this, iL)[iL];
        if (!iW || !OW || null !== (0, MN.d)(this, LL)[LL]) return;
        const {
          core: mW
        } = this.deps, EW = mW.aNW(WW);
        if (EW < 0) return;
        const NW = Math.floor(EW);
        let PW, LW;
        try {
          PW = iW.step(NW, EW - NW), LW = iW.VNW()
        } catch (wW) {
          return void(0, MN.d)(this, UL)[UL](wW)
        }
        const cW = mW.CNW(1, PW);
        if (0 === cW) {
          const WW = (0, MN.d)(this, bL)[bL]((WW => {
            WW.close()
          }));
          if (!WW) return;
          return (0, MN.d)(this, lL)[lL] ? (0, MN.d)(this, LL)[LL] = "drop" : (0, MN.d)(this, ZL)[ZL](), void mW.zNW(xW.gd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), cW, PW).set(new Uint8Array(OW.buffer, LW, PW))
      }
      play() {
        (0, MN.d)(this, AL)[AL]((WW => {
          WW.play()
        }))
      }
      pause() {
        (0, MN.d)(this, AL)[AL]((WW => {
          WW.pause()
        }))
      }
      seek(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, MN.d)(this, AL)[AL]((OW => {
          OW.seek(WW, iW)
        }))
      }
      setMark(WW, iW) {
        return (0, MN.d)(this, AL)[AL]((OW => {
          OW.FNW(WW, iW)
        }))
      }
      addKeyframe(WW, iW) {
        return (0, MN.d)(this, AL)[AL]((OW => {
          OW.QNW(WW[0], WW[1], WW[2], iW[0], iW[1], iW[2])
        }))
      }
      setKeyframe(WW, iW) {
        return (0, MN.d)(this, AL)[AL]((OW => {
          OW.WPW(WW, iW)
        }))
      }
      moveKeyframe(WW, iW) {
        return (0, MN.d)(this, AL)[AL]((OW => {
          OW.iPW(WW, iW)
        }))
      }
      deleteKeyframes(WW, iW) {
        return (0, MN.d)(this, AL)[AL]((OW => {
          OW.OPW(WW, iW)
        }))
      }
      crop(WW, iW) {
        return null === (0, MN.d)(this, NL)[NL] && (0, MN.d)(this, AL)[AL]((OW => {
          OW.crop(WW, iW)
        }))
      }
      beginSave() {
        const WW = (0, MN.d)(this, wL)[wL];
        if ((0, MN.d)(this, wL)[wL] = null, null !== WW && WW !== (0, MN.d)(this, cL)[cL]) return null;
        let iW = 0,
          OW = null;
        if ((0, MN.d)(this, bL)[bL](((WW, mW) => {
            iW = WW.save(), 0 !== iW && (OW = new Uint8Array(mW.buffer, WW.mPW(), WW.EPW()).slice())
          })), 0 === iW || !OW) return null;
        const mW = {
          headLen: iW,
          editState: OW,
          givenUp: () => (0, MN.d)(this, PL)[PL] === mW,
          head: (WW, iW) => {
            if ((0, MN.d)(this, NL)[NL] !== mW || !(0, MN.d)(this, lL)[lL]) return null;
            let OW = null;
            return (0, MN.d)(this, bL)[bL](((mW, EW) => {
              const NW = mW.NPW();
              0 !== NW && WW >= 0 && iW >= 0 && WW + iW <= NW && (OW = new Uint8Array(EW.buffer, mW.PPW() + WW, iW))
            })), OW
          },
          end: () => {
            if ((0, MN.d)(this, NL)[NL] !== mW) return;
            (0, MN.d)(this, NL)[NL] = null, (0, MN.d)(this, PL)[PL] = null, (0, MN.d)(this, bL)[bL]((WW => {
              WW.LPW()
            }));
            const WW = (0, MN.d)(this, LL)[LL];
            (0, MN.d)(this, LL)[LL] = null, "unload" === WW ? (0, MN.d)(this, tL)[tL]() : "drop" === WW && (0, MN.d)(this, ZL)[ZL]()
          }
        };
        return (0, MN.d)(this, NL)[NL] = mW, mW
      }
      askSave() {
        (0, MN.d)(this, wL)[wL] = (0, MN.d)(this, cL)[cL]
      }
      setSpeed(WW) {
        (0, MN.d)(this, AL)[AL]((iW => {
          iW.cPW(WW)
        }))
      }
      setCameraMode(WW) {
        (0, MN.d)(this, AL)[AL]((iW => {
          iW.wPW(WW)
        }))
      }
      close() {
        (0, MN.d)(this, AL)[AL]((WW => {
          WW.close()
        }))
      }
      stop() {
        (0, MN.d)(this, mL)[mL]++, (0, MN.d)(this, lL)[lL] && ((0, MN.d)(this, bL)[bL]((WW => {
          WW.close()
        })), (0, MN.d)(this, WL)[WL]) ? (0, MN.d)(this, LL)[LL] = "unload" : (0, MN.d)(this, tL)[tL]()
      }
    }

    function sL() {
      (0, MN.d)(this, ZL)[ZL](), (0, MN.d)(this, OL)[OL] || ((0, MN.d)(this, QP)[QP] = null, this.deps.unload())
    }

    function ML() {
      (0, MN.d)(this, bL)[bL]((WW => {
        WW.free()
      })), (0, MN.d)(this, WL)[WL] = null, (0, MN.d)(this, iL)[iL] = null
    }
    async function KL(WW, iW) {
      return await this.deps.staleOr(WW, (() => {}), {
        beforeReload: iW
      }) ? "reloading" : xW.gd.ModuleLoad
    }

    function SL() {
      return null !== (0, MN.d)(this, NL)[NL] && (0, MN.d)(this, PL)[PL] !== (0, MN.d)(this, NL)[NL]
    }

    function YL(WW) {
      return null === (0, MN.d)(this, LL)[LL] && (0, MN.d)(this, bL)[bL](WW)
    }

    function yL(WW) {
      const iW = (0, MN.d)(this, WL)[WL],
        OW = (0, MN.d)(this, iL)[iL];
      return !(!iW || !OW) && (0, MN.d)(this, jL)[jL]((() => {
        WW(iW, OW)
      }))
    }

    function TL(WW) {
      if ((0, MN.d)(this, OL)[OL]) return !1;
      try {
        return WW(), !0
      } catch (iW) {
        return (0, MN.d)(this, UL)[UL](iW), !1
      }
    }

    function JL(WW) {
      if (!(WW instanceof WebAssembly.RuntimeError)) throw WW;
      (0, MN.d)(this, OL)[OL] = !0, (0, MN.d)(this, WL)[WL] = null, (0, MN.d)(this, iL)[iL] = null, (0, MN.d)(this, QP)[QP] = null, this.deps.crash(this.deps.markTrapped(WW)), this.deps.core.zNW(xW.gd.ModuleTrap)
    }
    var hL = OW(7459),
      HL = OW(42519);
    const nL = "[bloxd-wasm-client]";
    const uL = String(rE);

    function oL(WW) {
      return null === WW || WW === uL ? void 0 : WW
    }

    function dL(WW) {
      var iW, OW, mW, EW, NW, LW, cW;
      switch (WW.what) {
        case xW.pd.FlyingText: {
          let iW;
          try {
            iW = JSON.parse(WW.contentJson)
          } catch (wW) {
            return void console.warn(`${nL} a replay's flying text isn't JSON`, wW)
          }
          PW.l.iZ("forceFlyingMiddleMessage", {
            content: iW,
            RN: WW.RN,
            angle: WW.angle,
            GN: WW.GN
          });
          break
        }
        case xW.pd.PlayerKilled:
          (0, HL.g)({
            kind: "killed",
            body: {
              deadEId: null !== (iW = oL(WW.dead)) && void 0 !== iW ? iW : "",
              killerEId: oL(WW.killer),
              withItem: null !== (OW = WW.withItem) && void 0 !== OW ? OW : "",
              killstreak: WW.killstreak
            }
          });
          break;
        case xW.pd.Killfeed:
          (0, HL.g)({
            kind: "custom",
            body: {
              killer: {
                eId: oL(WW.killerId),
                name: null !== (mW = WW.killerName) && void 0 !== mW ? mW : void 0,
                colour: null !== (EW = WW.killerColour) && void 0 !== EW ? EW : void 0
              },
              victim: {
                eId: oL(WW.victimId),
                name: null !== (NW = WW.victimName) && void 0 !== NW ? NW : void 0,
                colour: null !== (LW = WW.victimColour) && void 0 !== LW ? LW : void 0
              },
              withItem: null !== (cW = WW.withItem) && void 0 !== cW ? cW : ""
            }
          })
      }
    }
    const eL = "[bloxd-wasm-client]";

    function vL(WW) {
      if (void 0 === WW || null === WW || "" === WW) return null;
      const iW = Number(WW);
      return Number.isInteger(iW) && iW > rE && iW <= 2147483647 ? iW : null
    }

    function gL(WW) {
      return {
        id: vL(WW.eId),
        name: "string" === typeof WW.name ? WW.name : null,
        colour: "string" === typeof WW.colour ? WW.colour : null
      }
    }

    function DL(WW) {
      const iW = (0, PN.j)(wm.uc.PlayerKilled, (iW => {
          var OW, mW;
          const EW = (0, NN.j)(iW);
          if (!(0, NN.d)(EW)) return;
          const {
            deadEId: NW,
            killerEId: PW,
            withItem: LW,
            killstreak: cW
          } = EW;
          WW.recordPlayerKilled(null !== (OW = vL(NW)) && void 0 !== OW ? OW : rE, null !== (mW = vL(PW)) && void 0 !== mW ? mW : rE, "number" === typeof cW ? cW : 0, "string" === typeof LW ? LW : "")
        })),
        OW = (0, PN.j)(wm.uc.CustomKillfeed, (iW => {
          const OW = (0, NN.j)(iW);
          if (!(0, NN.d)(OW) || !(0, NN.d)(OW.killer) || !(0, NN.d)(OW.victim)) return;
          const {
            killer: mW,
            victim: EW,
            withItem: NW
          } = OW;
          WW.recordKillfeed(gL(mW), gL(EW), "string" === typeof NW ? NW : null)
        }));
      return () => {
        iW(), OW()
      }
    }

    function VL(WW) {
      let iW = null;
      const OW = () => {
        const {
          enableClipping: OW,
          clipDurationSeconds: EW
        } = mW.d.get("clientEscMenuOptions"), NW = `${OW}:${EW}`;
        NW !== iW && (iW = NW, WW.recorder.setPrefs(OW, EW))
      };
      return OW(), (0, PW.n)("appManagerUpdated|clientEscMenuOptions", OW)
    }
    const pL = "replayModule",
      fL = "recorderModule";

    function CL(WW, iW, OW) {
      return function() {
        return WW.isStopped ? OW : iW(...arguments)
      }
    }
    const XL = {
      open: () => Promise.reject(new Error(fE.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function BL() {
      return OW.e(77).then((() => OW(64604)))
    }

    function qL(WW) {
      (0, fE.i)({
        text: WW,
        type: "Error"
      })
    }
    class RL {
      constructor(WW) {
        this.deps = WW, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: iW,
          api: mW,
          core: EW
        } = WW, NW = () => WW.memory().buffer, PW = () => iW.isStopped ? null : iW.rings.cmd, LW = CL(iW, ((WW, iW) => EW.CNW(WW, iW)), 0), cW = () => EW.BNW();
        let wW = null;
        this.replay = new kL({
          core: {
            aNW: CL(iW, (WW => EW.aNW(WW)), -1),
            CNW: LW,
            BNW: cW,
            zNW: CL(iW, (WW => {
              EW.zNW(WW)
            }), void 0)
          },
          coreBuffer: NW,
          load: async () => (wW = await OW.e(78).then((() => OW(64611))), wW.loadReplayModule()),
          unload: () => {
            var WW;
            null === (WW = wW) || void 0 === WW || WW.unloadReplayModule()
          },
          markTrapped: WW => wW ? wW.markReplayTrapped(WW) : new Error(String(WW)),
          staleOr: (iW, OW, mW) => WW.staleOr(pL, iW, OW, mW),
          crash: iW => {
            WW.reportFault(pL, iW)
          }
        });
        let tW = null;
        this.recorder = new YP({
          core: {
            RNW: CL(iW, (WW => EW.RNW(WW)), 0),
            DNW: CL(iW, (WW => EW.DNW(WW)), 0),
            CNW: LW,
            BNW: cW
          },
          coreCommand: (WW, iW) => {
            var OW, mW;
            return null !== (OW = null === (mW = PW()) || void 0 === mW ? void 0 : mW.writeCmd(WW, 0, iW)) && void 0 !== OW && OW
          },
          coreBuffer: NW,
          load: async () => (tW = await BL(), tW.loadRecorderModule()),
          prefetch: () => {
            BL().then((WW => WW.prefetchRecorderModule())).catch((WW => {
              console.warn(`${eL} the recorder module didn't prefetch, so a save loads it:`, WW)
            }))
          },
          unload: () => {
            var WW;
            null === (WW = tW) || void 0 === WW || WW.unloadRecorderModule()
          },
          markTrapped: WW => tW ? tW.markRecorderTrapped(WW) : new Error(String(WW)),
          memoryBytes: () => {
            var WW, iW;
            return null !== (WW = null === (iW = tW) || void 0 === iW ? void 0 : iW.recorderMemoryBytes()) && void 0 !== WW ? WW : 0
          },
          staleOr: (iW, OW) => WW.staleOr(fL, iW, OW),
          crash: iW => {
            WW.reportFault(fL, iW)
          },
          allowed: () => !0 === WW.options.get("canRecordReplays"),
          failed: WW => {
            this.runtime.recorder.stopped(), qL(WW)
          },
          events: (WW, iW) => {
            this.runtime.recorderEvents(WW, iW)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: qL,
          unixNow: () => Date.now()
        });
        const ZW = new aE({
          core: {
            hNW: CL(iW, (WW => EW.hNW(WW)), 0),
            nNW: CL(iW, (() => {
              EW.nNW()
            }), void 0),
            EU: CL(iW, (() => EW.EU()), 0),
            HNW: CL(iW, (() => EW.HNW()), 0)
          },
          buffer: NW,
          apiView: () => mW.apiView,
          cmd: PW,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new FP({
          api: mW,
          cmd: PW,
          loadHook: zP,
          onError: WW => {
            console.warn(`${eL} the recorded game's replay hooks:`, WW)
          }
        });
        const xW = new EN({
          client: ZW,
          buffer: NW,
          setHoldDraws: WW => {
            iW.setHoldDraws(WW)
          },
          notify: fE.i,
          onRecorderState: () => {
            var WW;
            null === (WW = (0, XE.h)()) || void 0 === WW || WW.recorderChanged()
          },
          onViewerChange: () => {
            var WW;
            null === (WW = (0, XE.h)()) || void 0 === WW || WW.viewerChanged()
          },
          onReplayOption: iW => {
            ! function(WW, iW) {
              var OW, mW;
              const EW = wm.Db[iW.key];
              if (void 0 === EW) return;
              let NW = null !== (OW = iW.value) && void 0 !== OW ? OW : JSON.parse(JSON.stringify(null !== (mW = hL.c[EW]) && void 0 !== mW ? mW : null));
              if (null !== iW.value && iW.key < wm.$b.Environment && "string" === typeof NW) try {
                NW = JSON.parse(NW)
              } catch (PW) {
                return void console.warn(`${nL} a replay's ${EW} isn't JSON`, PW)
              }
              WW.applyNewClientOptions({
                [EW]: NW
              })
            }(WW.options, iW)
          },
          onReplayUiEvent: dL,
          onReplayOpened: iW => {
            this.entityHooks.opened((0, hW.Tb)(iW)), WW.replayShaderPack(iW)
          },
          meshPending: () => {
            var WW, OW;
            return null !== (WW = null === (OW = iW.lastHeader) || void 0 === OW ? void 0 : OW.renderPending) && void 0 !== WW ? WW : 0
          },
          viewerOpen: CE.e,
          download: WW => {
            (0, VE.i)(WW)
          }
        });
        this.runtime = xW, mW.replay = xW.sink, (0, XE.x)(xW);
        const lW = new wN({
          live: () => {
            var WW;
            return !iW.isStopped && !0 === (null === (WW = xW.currentViewer) || void 0 === WW ? void 0 : WW.inPlayback)
          },
          cmd: PW,
          dragScale: kN
        });
        this.freecam = lW, (0, XE.t)(lW), this.recordedOptions = function(WW, iW) {
          const OW = wm.Db,
            mW = OW.map(((OW, mW) => iW.subscribe(OW, (iW => {
              WW.setOption(mW, iW)
            }))));
          return {
            sendAll() {
              WW.setAllOptions(OW.map((WW => iW.get(WW))))
            },
            stop() {
              for (const WW of mW) WW()
            }
          }
        }(xW.recorder, WW.options), this.stops = [(0, sm.n)((WW => {
          lW.flush();
          try {
            this.replay.beforeFrame(WW)
          } catch (iW) {
            this.deps.reportFault("replayFrame", iW)
          }
        })), (0, sm.B)(((WW, iW) => {
          try {
            this.recorder.afterFrame(), iW && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (OW) {
            this.deps.reportFault("recorderFrame", OW)
          }
          try {
            xW.afterFrame(WW)
          } catch (OW) {
            this.deps.reportFault("replayRuntime", OW)
          }
        })), VL(xW), () => {
          this.recordedOptions.stop()
        }, DL(xW.recorder), (0, LN.g)((WW => {
          let {
            action: iW,
            down: OW
          } = WW;
          var mW;
          OW && (null === (mW = (0, XE.h)()) || void 0 === mW || mW.keyDown(iW))
        }))];
        const AW = () => {
          const WW = xW.currentViewer;
          return !0 === (null === WW || void 0 === WW ? void 0 : WW.isOpen) ? WW : null
        };
        (0, pE.f)({
          open: (WW, iW) => this.open(WW, iW),
          replayKey: () => {
            var WW, iW;
            return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.id) && void 0 !== WW ? WW : null
          },
          saveRefusal: () => {
            var WW, iW;
            return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.saveRefusal) && void 0 !== WW ? WW : null
          },
          encode: () => {
            var WW, iW;
            return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.save()) && void 0 !== WW ? WW : Promise.resolve(null)
          },
          fileHandle: () => {
            var WW, iW;
            return null !== (WW = null === (iW = xW.currentViewer) || void 0 === iW ? void 0 : iW.fileHandle) && void 0 !== WW ? WW : null
          },
          markSaved: (WW, iW) => {
            var OW;
            null === (OW = xW.currentViewer) || void 0 === OW || OW.markSaved(WW, iW)
          }
        })
      }
      netEvent(WW) {
        if ("connection" === WW.type)
          if (WW.phase === xW.A.Activated) {
            this.activeConn = WW.conn;
            const iW = this.deps.sessionInfo(WW.conn);
            null !== iW && (this.runtime.activated({
              lobbyType: (0, HW.A)(iW.lobbyName),
              gameNameWithVariation: iW.gameNameWithVariation,
              lobbyName: iW.lobbyName
            }), this.recordedOptions.sendAll())
          } else WW.phase !== xW.A.Left && WW.phase !== xW.A.Closed || WW.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const WW of this.stops) WW();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, XE.n)() === this.runtime && (0, XE.x)(null), (0, XE.j)() === this.freecam && (0, XE.t)(null), (0, pE.f)(XL), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(WW, iW) {
        const {
          running: OW
        } = this.deps;
        if (OW.isStopped) throw new Error(fE.e.coreStopped.text);
        if (WW.byteLength > 67108864) throw new Error(fE.e.cantOpen.text);
        let mW;
        try {
          mW = await async function(WW) {
            const iW = await WW.loadViewer();
            return iW.inPlayback || (0, sm.K)().leaveGame(null), iW
          }(this.runtime)
        } catch (EW) {
          throw console.warn(`${eL} the replay viewer didn't load`, EW), new Error(fE.e.viewerLoadFailed.text)
        }
        if (OW.isStopped) throw new Error(fE.e.coreStopped.text);
        await mW.open(WW, iW)
      }
    }
    var GL = OW(2061);

    function IL(WW, iW) {
      const {
        aux: OW,
        payload: mW
      } = function(WW) {
        return {
          aux: WW.reset ? xW.bc.ResetFirst : 0,
          payload: rL(WW.changes)
        }
      }(iW);
      WW.queueOptions(OW, mW) && (iW.reset && GL.d.reset(), GL.d.apply(iW.changes))
    }
    const aL = new TextEncoder;

    function rL(WW) {
      const iW = new zL;
      return QL(iW, WW), iW.bytes()
    }
    class zL {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(WW) {
        if (this.len + WW <= this.buf.length) return;
        const iW = new Uint8Array(Math.max(2 * this.buf.length, this.len + WW));
        iW.set(this.buf.subarray(0, this.len)), this.buf = iW, this.view = new DataView(iW.buffer)
      }
      u8(WW) {
        this.room(1), this.buf[this.len++] = WW
      }
      tagged(WW, iW, OW) {
        this.room(1 + iW), this.buf[this.len++] = WW, 1 === iW ? this.view.setUint8(this.len, OW) : 2 === iW ? this.view.setUint16(this.len, OW) : this.view.setUint32(this.len, OW), this.len += iW
      }
      signed(WW, iW, OW) {
        this.room(1 + iW), this.buf[this.len++] = WW, 1 === iW ? this.view.setInt8(this.len, OW) : 2 === iW ? this.view.setInt16(this.len, OW) : this.view.setInt32(this.len, OW), this.len += iW
      }
      f64(WW) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, WW), this.len += 8
      }
      raw(WW) {
        this.room(WW.length), this.buf.set(WW, this.len), this.len += WW.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function FL(WW, iW, OW, mW, EW, NW, PW) {
      iW < mW ? WW.u8(OW | iW) : null !== EW && iW < 256 ? WW.tagged(EW, 1, iW) : iW < 65536 ? WW.tagged(NW, 2, iW) : WW.tagged(PW, 4, iW)
    }

    function QL(WW, iW) {
      switch (typeof iW) {
        case "undefined":
          return void WW.raw(Wc);
        case "boolean":
          return void WW.u8(iW ? 195 : 194);
        case "number":
          return void
          function(WW, iW) {
            iW >>> 0 === iW ? iW < 128 ? WW.u8(iW) : iW < 256 ? WW.tagged(204, 1, iW) : iW < 65536 ? WW.tagged(205, 2, iW) : WW.tagged(206, 4, iW) : (iW | 0) === iW ? iW >= -32 ? WW.u8(255 & iW) : iW >= -128 ? WW.signed(208, 1, iW) : iW >= -32768 ? WW.signed(209, 2, iW) : WW.signed(210, 4, iW) : WW.f64(iW)
          }(WW, iW);
        case "string": {
          const OW = aL.encode(iW);
          return FL(WW, OW.length, 160, 32, 217, 218, 219), void WW.raw(OW)
        }
        case "object":
          break;
        default:
          return void WW.u8(192)
      }
      if (null === iW) WW.u8(192);
      else if (Array.isArray(iW)) {
        FL(WW, iW.length, 144, 16, null, 220, 221);
        for (const OW of iW) QL(WW, OW)
      } else if (iW instanceof Uint8Array) FL(WW, iW.length, 0, 0, 196, 197, 198), WW.raw(iW);
      else {
        const OW = Object.keys(iW);
        FL(WW, OW.length, 128, 0, null, 222, 223);
        for (const mW of OW) QL(WW, mW), QL(WW, iW[mW])
      }
    }
    const Wc = new Uint8Array([212, 0, 0]);
    var ic = OW(37336),
      Oc = OW(37432),
      mc = OW(42455),
      Ec = OW(42482),
      Nc = OW(2388);
    const Pc = [1e3, 3e3, 9e3];
    class Lc {
      constructor(WW) {
        this.host = WW, this.sets = new Map, this.table = [], this.generation = 0, this.JA = !1
      }
      onEvent(WW) {
        const iW = function(WW) {
          if (WW.byteLength !== xW.Cd) return null;
          const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
          return {
            want: iW.getUint16(0, !0),
            release: iW.getUint16(2, !0)
          }
        }(WW);
        iW && !this.JA && (iW.release !== xW.Ed && this.release(iW.release), iW.want !== xW.Ed && this.want(iW.want))
      }
      reset(WW) {
        if (!this.JA) {
          for (const [WW, iW] of this.sets) "ready" === iW.state && this.releaseAll(iW.distinct), this.sets.delete(WW);
          this.table = WW, this.generation++
        }
      }
      dispose() {
        if (this.JA) return;
        this.JA = !0, this.generation++, this.table = [];
        const WW = [...this.sets.values()];
        this.sets.clear();
        let iW = null;
        for (const mW of WW)
          for (const WW of "ready" === mW.state ? mW.distinct : []) try {
            this.host.mEW(WW)
          } catch (OW) {
            iW ??= {
              error: OW
            }
          }
        if (iW) throw iW.error
      }
      isReady(WW) {
        var iW;
        return "ready" === (null === (iW = this.sets.get(WW)) || void 0 === iW ? void 0 : iW.state)
      }
      want(WW) {
        const iW = this.sets.get(WW);
        if ("loading" === (null === iW || void 0 === iW ? void 0 : iW.state)) return iW.wanted = !0, void this.capAnswer(WW, iW);
        if ("ready" === (null === iW || void 0 === iW ? void 0 : iW.state)) return void this.host.sendReady(wc(WW, iW.images, iW.size));
        const OW = this.table[WW];
        if (!OW || 1 !== OW.urls.length && OW.urls.length !== wm.nc.CubeFaces) return this.host.sendReady(tc(WW)), void this.host.onLoadFailed(WW, "", new Error(`no image set ${WW}`));
        const mW = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(WW, mW), this.load(WW, OW, mW, this.generation, 0), this.capAnswer(WW, mW)
      }
      capAnswer(WW, iW) {
        this.host.wait(4e3, (() => {
          this.sets.get(WW) === iW && iW.wanted && this.host.sendReady(tc(WW))
        }))
      }
      load(WW, iW, OW, mW, EW) {
        const NW = [...new Set(iW.urls)];
        Promise.allSettled(NW.map((WW => this.host.loadImage(WW, iW.orientation)))).then((PW => {
          const LW = PW.flatMap((WW => "fulfilled" === WW.status ? [WW.value] : [])),
            cW = mW === this.generation && this.sets.get(WW) === OW,
            wW = PW.findIndex((WW => "rejected" === WW.status));
          if (!cW || !OW.wanted) return this.JA ? void this.releaseAfterDispose(LW.map(cc)) : (this.releaseAll(LW.map(cc)), void(cW && this.sets.delete(WW)));
          wW < 0 ? this.loaded(WW, iW, NW, LW) : (this.releaseAll(LW.map(cc)), this.host.sendReady(tc(WW)), EW < Pc.length ? this.host.wait(Pc[EW], (() => {
            mW === this.generation && this.sets.get(WW) === OW && (OW.wanted ? this.load(WW, iW, OW, mW, EW + 1) : this.sets.delete(WW))
          })) : (this.sets.delete(WW), this.host.onLoadFailed(WW, NW[wW], PW[wW].reason)))
        }))
      }
      loaded(WW, iW, OW, mW) {
        const [EW] = mW, NW = [EW.width, EW.height], PW = mW.every((WW => WW.width === NW[0] && WW.height === NW[1])), LW = iW.urls.length === wm.nc.CubeFaces;
        if (!PW || NW[0] <= 0 || NW[1] <= 0 || NW[0] > 65535 || NW[1] > 65535 || LW && NW[0] !== NW[1]) {
          this.releaseAll(mW.map(cc)), this.sets.delete(WW), this.host.sendReady(tc(WW));
          const OW = mW.map((WW => `${WW.width}x${WW.height}`));
          return void this.host.onLoadFailed(WW, iW.urls[0], new Error(`set ${WW}'s images can't make its texture: ${OW.join(", ")}`))
        }
        const cW = iW.urls.map((WW => mW[OW.indexOf(WW)].id)),
          wW = mW.map(cc);
        this.sets.set(WW, {
          state: "ready",
          images: cW,
          distinct: wW,
          size: NW
        }), this.host.sendReady(wc(WW, cW, NW))
      }
      release(WW) {
        const iW = this.sets.get(WW);
        "loading" === (null === iW || void 0 === iW ? void 0 : iW.state) ? iW.wanted = !1: "ready" === (null === iW || void 0 === iW ? void 0 : iW.state) && (this.releaseAll(iW.distinct), this.sets.delete(WW))
      }
      releaseAll(WW) {
        for (const iW of WW) this.host.mEW(iW)
      }
      releaseAfterDispose(WW) {
        for (const iW of WW) try {
          this.host.mEW(iW)
        } catch {}
      }
    }

    function cc(WW) {
      return WW.id
    }

    function wc(WW, iW, OW) {
      const mW = new Uint8Array(wm.nc.SkyImagesReadyBytes),
        EW = new DataView(mW.buffer);
      return EW.setUint16(0, WW, !0), EW.setUint16(2, iW.length, !0), EW.setUint16(4, OW[0], !0), EW.setUint16(6, OW[1], !0), iW.slice(0, wm.nc.CubeFaces).forEach(((WW, iW) => {
        EW.setUint32(8 + 4 * iW, WW, !0)
      })), mW
    }

    function tc(WW) {
      const iW = new Uint8Array(wm.nc.SkyImagesReadyBytes),
        OW = new DataView(iW.buffer);
      return OW.setUint16(0, WW, !0), OW.setUint16(2, wm.nc.Failed, !0), iW
    }
    let Zc = Promise.resolve();
    async function xc(WW, iW) {
      let OW;
      try {
        OW = await (0, Nc.C)(WW)
      } catch (NW) {
        throw new mc.c("fetch", WW, {
          cause: NW
        })
      }
      const mW = Zc.then((() => async function(WW, iW) {
        const OW = new Blob([WW.slice()]);
        let mW = await createImageBitmap(OW, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: iW
        });
        const EW = 1024 / Math.max(mW.width, mW.height);
        if (EW < 1) {
          const WW = mW;
          try {
            mW = await createImageBitmap(WW, {
              resizeWidth: Math.max(1, Math.round(WW.width * EW)),
              resizeHeight: Math.max(1, Math.round(WW.height * EW)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            WW.close()
          }
        }
        return mW
      }(OW, iW)));
      let EW;
      Zc = mW.catch((() => {}));
      try {
        EW = await mW
      } catch (NW) {
        throw new mc.c("decode", WW, {
          cause: NW
        })
      }
      return {
        id: (0, mc.l)(EW),
        width: EW.width,
        height: EW.height
      }
    }
    var lc = OW(2300),
      Ac = OW(35056),
      bc = OW(40452);
    const jc = lc.f.length,
      Uc = new Set([...lc.f, "earth"]);

    function kc(WW) {
      const iW = [],
        OW = [],
        mW = (WW, mW) => {
          if ("custom" === mW.type) {
            OW.push({
              id: WW,
              kind: wm.nc.KindCustom,
              set: iW.length,
              earth: null
            });
            const EW = [mW.px, mW.py, mW.pz, mW.nx, mW.ny, mW.nz];
            iW.push({
              urls: (0, bc.e)(EW),
              orientation: "none"
            })
          } else OW.push({
            id: WW,
            kind: wm.nc.KindEarth,
            set: 0,
            earth: mW
          })
        };
      lc.f.forEach(((iW, OW) => {
        var EW;
        mW(OW, null !== (EW = sc(WW[iW])) && void 0 !== EW ? EW : Ac.p[iW])
      }));
      const EW = sc(WW.earth);
      "earth" === (null === EW || void 0 === EW ? void 0 : EW.type) && mW(jc, EW);
      const NW = new TextEncoder,
        PW = [],
        LW = [];
      for (const [lW, AW] of Object.entries(WW)) {
        const WW = Uc.has(lW) ? null : sc(AW);
        if (null === WW) continue;
        const iW = NW.encode(lW);
        iW.length > 255 ? LW.push(`Ignoring texture pack skybox ${lW}, whose name is over 255 bytes`) : PW.length === wm.nc.MaxAdded ? LW.push(`Ignoring texture pack skybox ${lW}, past the ${wm.nc.MaxAdded} skies a pack can add`) : (PW.push(iW), mW(wm.nc.AddedId, WW))
      }
      const cW = iW.length;
      iW.push({
        urls: Ac.e.map((WW => Ac.i + WW)),
        orientation: "none"
      }), iW.push({
        urls: [Ac.l],
        orientation: "flipY"
      }), iW.push({
        urls: [Ac.c],
        orientation: "flipY"
      });
      const wW = wm.nc.SkyTableHeaderBytes + OW.length * wm.nc.SkyTableEntryBytes,
        tW = new Uint8Array(wW + PW.reduce(((WW, iW) => WW + 1 + iW.length), 0)),
        ZW = new DataView(tW.buffer);
      ZW.setUint16(0, cW, !0), ZW.setUint16(2, cW + 1, !0), ZW.setUint16(4, cW + 2, !0), ZW.setUint16(6, OW.length, !0), OW.forEach(((WW, iW) => {
        const OW = wm.nc.SkyTableHeaderBytes + iW * wm.nc.SkyTableEntryBytes;
        ZW.setUint16(OW, WW.id, !0), ZW.setUint8(OW + 2, WW.kind);
        const mW = OW + 4;
        WW.earth ? function(WW, iW, OW) {
          const mW = WW;
          let EW = 0,
            NW = 0;
          for (const [PW, LW] of Mc) {
            const WW = mW[PW];
            "number" === typeof WW && Number.isFinite(WW) && (iW.setFloat32(OW + 4 * LW, WW, !0), EW |= 1 << LW)
          }
          for (const [PW, LW, cW] of Kc) {
            const WW = mW[PW];
            Array.isArray(WW) && 3 === WW.length && WW.every((WW => "number" === typeof WW && Number.isFinite(WW))) && (WW.forEach(((WW, mW) => {
              iW.setFloat32(OW + cW + 4 * mW, WW, !0)
            })), EW |= LW)
          }
          Sc.forEach(((WW, NW) => {
            let [PW, LW] = WW;
            const cW = mW[PW];
            "number" === typeof cW && Number.isFinite(cW) && (iW.setFloat32(OW + wm.x.CameraOffsetAt + 4 * NW, cW, !0), EW |= LW)
          }));
          for (const [PW, LW] of Yc) {
            const WW = mW[PW];
            null !== WW && void 0 !== WW && (EW |= LW, WW && (NW |= LW >>> 14))
          }
          iW.setUint32(OW + wm.x.PresentAt, EW, !0), iW.setUint8(OW + wm.x.FlagsAt, NW)
        }(WW.earth, ZW, mW) : ZW.setUint16(mW, WW.set, !0)
      }));
      let xW = wW;
      for (const lW of PW) tW[xW] = lW.length, tW.set(lW, xW + 1), xW += 1 + lW.length;
      return {
        payload: tW,
        sets: iW,
        leftOut: LW
      }
    }

    function sc(WW) {
      if ("object" !== typeof WW || null === WW) return null;
      const iW = WW;
      if ("earth" === iW.type) return WW;
      return "custom" === iW.type && ["px", "py", "pz", "nx", "ny", "nz"].every((WW => {
        const OW = iW[WW];
        return "string" === typeof OW && OW.length > 0
      })) ? WW : null
    }
    const Mc = [
        ["inclination", wm.x.Inclination],
        ["turbidity", wm.x.Turbidity],
        ["luminance", wm.x.Luminance],
        ["rayleigh", wm.x.Rayleigh],
        ["mieCoefficient", wm.x.MieCoefficient],
        ["mieDirectionalG", wm.x.MieDirectionalG],
        ["distance", wm.x.Distance],
        ["azimuth", wm.x.Azimuth]
      ],
      Kc = [
        ["sunPosition", wm.x.SunPosition, wm.x.SunPositionAt],
        ["up", wm.x.Up, wm.x.UpAt],
        ["vertexTint", wm.x.VertexTint, wm.x.VertexTintAt]
      ],
      Sc = [
        ["xCameraOffset", wm.x.CameraOffsetX],
        ["yCameraOffset", wm.x.CameraOffsetY],
        ["zCameraOffset", wm.x.CameraOffsetZ]
      ],
      Yc = [
        ["useSunPosition", wm.x.UseSunPosition],
        ["dithering", wm.x.Dithering],
        ["infiniteDistance", wm.x.InfiniteDistance]
      ];

    function yc(WW, iW, OW) {
      const mW = new Jc({
        writeCmd: WW,
        warn: iW,
        followPack: Tc(OW, iW)
      });
      return mW.start(), mW
    }

    function Tc(WW, iW) {
      return OW => {
        let mW = () => {};
        const EW = WW((WW => {
          mW(), mW = () => {}, null !== WW ? mW = WW.subscribe((WW => {
            OW(function(WW, iW, OW) {
              if ("object" !== typeof WW || null === WW) return null;
              const mW = WW.skyBoxes;
              if ("object" !== typeof mW || null === mW) return null;
              if ("player" === iW) return mW;
              return Object.fromEntries(Object.entries(mW).filter((WW => {
                let [iW, mW] = WW;
                return !! function(WW) {
                  if ("object" !== typeof WW || null === WW) return !1;
                  return "earth" === WW.type || Object.entries(WW).every((WW => {
                    let [iW, OW] = WW;
                    return "type" === iW || ("" === (mW = OW) || null !== function(WW) {
                      var iW, OW, mW;
                      return "string" !== typeof WW ? null : null !== (iW = null === (OW = hc.exec(WW)) || void 0 === OW || null === (mW = OW.groups) || void 0 === mW ? void 0 : mW.base64) && void 0 !== iW ? iW : null
                    }(mW));
                    var mW
                  }))
                }(mW) || (OW(`Ignoring texture pack skybox ${iW}, whose faces are not all data URLs`, null), !1)
              })))
            }(WW.pack, null === WW.gameSource ? "player" : "customGame", iW))
          })) : OW(null)
        }));
        return () => {
          EW(), mW()
        }
      }
    }
    class Jc {
      constructor(WW) {
        var iW, OW, mW;
        this.host = WW, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.JA = !1, this.wait = null !== (iW = WW.wait) && void 0 !== iW ? iW : (WW, iW) => {
          setTimeout(iW, WW)
        }, this.loader = new Lc({
          loadImage: null !== (OW = WW.loadImage) && void 0 !== OW ? OW : xc,
          mEW: null !== (mW = WW.mEW) && void 0 !== mW ? mW : mc.o,
          sendReady: WW => {
            this.queue.push({
              kind: wm.nc.SkyImagesReady,
              payload: WW
            })
          },
          onLoadFailed: (iW, OW, mW) => {
            WW.warn(`sky image set ${iW} (${OW}) didn't load: the last sky stays`, mW)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Ec.c, (() => {
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
        this.JA = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(WW) {
        if (this.JA) return;
        const iW = kc(WW);
        if (!(this.written && (OW = this.written, mW = iW, OW.payload.length === mW.payload.length && OW.payload.every(((WW, iW) => WW === mW.payload[iW])) && OW.sets.length === mW.sets.length && OW.sets.every(((WW, iW) => {
            const OW = mW.sets[iW];
            return WW.orientation === OW.orientation && WW.urls.length === OW.urls.length && WW.urls.every(((WW, iW) => WW === OW.urls[iW]))
          }))))) {
          var OW, mW;
          for (const WW of iW.leftOut) this.host.warn(WW, null);
          this.written = iW, this.loader.reset(iW.sets), this.queue = this.queue.filter((WW => WW.kind !== wm.nc.SkyImagesReady)), this.queue.push({
            kind: wm.nc.SkyTable,
            payload: iW.payload
          })
        }
      }
    }
    const hc = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Hc = OW(2915),
      nc = OW(2908),
      uc = OW(269),
      oc = OW(169),
      dc = OW(3841),
      ec = OW(3851),
      vc = OW(243),
      gc = OW(248),
      Dc = OW(3934),
      Vc = OW(3970),
      pc = OW(3982),
      fc = OW(117),
      Cc = OW(4048),
      Xc = OW(4045),
      Bc = OW(315),
      qc = OW(42358);
    class Rc {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, PN.j)(gm.K, (WW => {
          this.onReply((0, NN.g)(gm.K, WW), performance.now())
        }))
      }
      onFrame(WW, iW) {
        null === this.id ? this.id = WW : WW !== this.id && (this.id = WW, this.sentMs = document.hidden ? null : iW)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(WW, iW) {
        WW === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(iW - this.sentMs), this.sentMs = null)
      }
      take() {
        const WW = this.roundTripMs;
        return this.roundTripMs = null, WW
      }
      stop() {
        this.stopReplies()
      }
    }
    class Gc {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(WW, iW, OW, mW) {
        const EW = WW - this.sampled >>> 0,
          NW = iW - this.timed >>> 0,
          PW = OW - this.frameUs >>> 0,
          LW = this.primed;
        return this.sampled = WW, this.timed = iW, this.frameUs = OW, this.primed = !0, !(!LW || EW > 64 || NW > 64) && (mW && PW <= 1e6 * NW && (this.windowTimed += NW, this.windowUs += PW), mW && EW > 0)
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
    const Ic = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class ac {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(WW, iW) {
        const OW = Math.min(4096, this.count + iW);
        this.samples.fill(WW, this.count, OW), this.count = OW
      }
      clear() {
        this.count = 0
      }
      take() {
        const WW = this.count;
        if (this.count = 0, WW < 30) return Ic;
        const iW = this.samples.subarray(0, WW).sort(),
          OW = OW => iW[Math.min(WW - 1, Math.floor(OW * WW))];
        return {
          lagP50Ms: OW(.5),
          lagP90Ms: OW(.9)
        }
      }
    }
    class rc {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new ac
      }
      onFrame(WW, iW) {
        const OW = WW.headerWord(wm.M.Pacing),
          mW = WW.headerWord(wm.M.PacingLagUs),
          EW = (OW >>> wm.cb.LagsShift) - (this.word >>> wm.cb.LagsShift) & wm.cb.CountMask,
          NW = EW > 0 ? (mW - this.lagUs >>> 0) / EW / 1e3 : 0,
          PW = this.primed && EW <= 64 && NW <= 6e4;
        this.word = OW, this.lagUs = mW, this.primed = !0, PW && iW && EW > 0 && 0 !== (OW & wm.cb.Defaulted) && this.lags.add(NW, EW)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(WW) {
        return WW ? this.lags.take() : (this.lags.clear(), Ic)
      }
    }
    var zc = OW(3927),
      Fc = OW(35164),
      Qc = OW(3941),
      Ww = OW(42402),
      iw = OW(35159),
      Ow = OW(3859),
      mw = OW(3947);
    const Ew = {
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
      few_wasm_memories: !1,
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

    function Nw(WW) {
      return new Pw(WW)
    }
    class Pw {
      constructor(WW) {
        this.shell = WW, this.tracker = new ec.c, this.gpu = new Gc, this.pacing = new rc, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Rc, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new zc.c(this.tracker, ((WW, iW, OW, mW) => {
          this.shell.mainStalled(WW, iW, OW, mW)
        }), (WW => this.shell.eJ(WW))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, Fc.d)(WW.backend, WW.canvas, WW.adapterVendor), this.tracker.start((() => !WW.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Ow.b)("wasm", (() => {
          const {
            n: iW,
            sampleCount: OW
          } = (0, Ww.e)();
          return `${WW.backend}, quality steps aim at up to ${mw.c.target.maxFps} fps, pixel n ${iW}, msaa ${OW}`
        }), (iW => {
          iW.setLoadCounts(WW.readLoadCounts), this.frameDebug = iW
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(WW) {
        var iW;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(WW), null === (iW = this.frameDebug) || void 0 === iW || iW.animationFrame()
      }
      sendsWent(WW, iW, OW) {
        this.ping.onFrame(WW.headerWord(wm.M.PingSent), iW), this.sendsStartMs = iW, this.sendsEndMs = OW
      }
      frameRan(WW, iW, OW, mW) {
        var EW;
        this.ping.onFrame(WW.headerWord(wm.M.PingSent), OW);
        const NW = this.tracker;
        this.pacing.onFrame(WW, NW.isSampling());
        const PW = WW.headerWord(wm.M.TickUs) / 1e3 + (0, sm.N)();
        var LW;
        (NW.Hk(PW), null === (EW = this.frameDebug) || void 0 === EW || EW.wasmFrame(WW, iW, OW, mW, NW.isSampling(), PW), null !== this.game) && (null === (LW = this.frameDebug) || void 0 === LW || LW.inGame());
        const cW = this.sendsStartMs >= iW ? this.sendsEndMs - this.sendsStartMs : 0,
          wW = Math.max(0, OW - iW - PW - cW);
        if ("drawn" !== mW) return void("paced" === mW ? (this.pacedCpuMs += wW, this.mainStall.paced()) : "skipped" === mW && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(iW), NW.onFrameStart(iW);
        this.gpu.onFrame(WW.headerWord(wm.M.GpuSampled), WW.headerWord(wm.M.GpuTimed), WW.headerWord(wm.M.GpuFrameUs), NW.isSampling()) && NW.onGpuSampleStarted(), NW.onFrameCpu(wW + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(iW)
      }
      framePaced() {
        var WW;
        this.mainStall.paced(), null === (WW = this.frameDebug) || void 0 === WW || WW.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const WW of this.timers) clearInterval(WW);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const WW = this.shell.joinedGame();
        if (WW !== this.game) {
          var iW;
          if (this.game = WW, null !== WW) null === (iW = this.frameDebug) || void 0 === iW || iW.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== WW
      }
      countFpsFrame(WW) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = WW
        }
        this.fpsFrames++;
        const iW = WW - this.fpsSpanStartMs;
        if (!(iW < pc.d)) {
          if (!document.hidden) {
            const WW = 1e3 * this.fpsFrames / iW;
            this.firstSpanFps ??= WW, this.initialFps = this.firstSpanFps, this.fpsOverTime = WW
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = WW
        }
      }
      flush() {
        const WW = this.followGame(),
          {
            cpuFrameMs: iW,
            refreshHz: OW,
            cpuBottleneck: EW,
            frameIntervalCv: NW,
            ...PW
          } = this.tracker.snapshotAndReset(),
          LW = this.shell.inGame(),
          cW = LW && this.inGameAtLastFlush,
          wW = cW ? PW : (0, dc.g)(PW),
          tW = this.pacing.snapshotAndReset(cW);
        if (this.inGameAtLastFlush = LW, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !WW || !this.shell.canSend()) return;
        const ZW = performance.now(),
          lW = (0, Vc.v)((0, Vc.u)(ZW), this.unsentPage),
          bW = function(WW, iW, OW, EW, NW, PW, LW, cW) {
            var wW, tW, ZW, xW, lW;
            const AW = {},
              {
                canvas: bW
              } = WW,
              jW = (0, Dc.i)({
                refreshHz: iW.refreshHz,
                msaa: WW.msaa(),
                autoMsaaOff: (0, iw.b)()
              });
            for (const UW of (0, nc.g)()) {
              const kW = UW.name;
              let sW;
              if ((0, uc.M)(kW)) sW = (0, Vc.e)(kW);
              else if ((0, Vc.k)(kW)) sW = cW[kW];
              else if ((0, Dc.j)(kW)) sW = jW[kW];
              else switch (kW) {
                case "fps":
                  sW = EW;
                  break;
                case "Ec":
                  sW = NW;
                  break;
                case "tc":
                  sW = (0, Qc.B)((0, Ww.e)().n);
                  break;
                case "Zc":
                  sW = Math.max(bW.width, bW.height);
                  break;
                case "xc":
                  sW = Math.min(bW.width, bW.height);
                  break;
                case "lc":
                  sW = navigator.hardwareConcurrency || null;
                  break;
                case "Ac":
                  sW = (0, lN.getWebGpuSupported)();
                  break;
                case "bc":
                  sW = null === WW.fallbackReason ? null : Ew[WW.fallbackReason];
                  break;
                case "jc":
                  sW = iW.cpuFrameMs;
                  break;
                case "Uc":
                  sW = iW.refreshHz;
                  break;
                case "kc":
                  sW = iW.cpuBottleneck;
                  break;
                case "sc":
                  sW = iW.frameIntervalCv;
                  break;
                case "Mc":
                  sW = iW.frameMs;
                  break;
                case "Kc":
                  sW = iW.tickMs;
                  break;
                case "hc":
                  sW = iW.mainBusyShare;
                  break;
                case "Hc":
                  sW = iW.mainProbeDelayMs;
                  break;
                case "Sc":
                  sW = iW.longAnimationFramesPerMin;
                  break;
                case "Yc":
                  sW = iW.longAnimationFrameTimeShare;
                  break;
                case "yc":
                  sW = iW.longAnimationFrameScriptShare;
                  break;
                case "Tc":
                  sW = iW.framesOver50msPerMin;
                  break;
                case "Jc":
                  sW = iW.framesOver100msPerMin;
                  break;
                case "nc":
                  sW = iW.gpuPassMs;
                  break;
                case "uc":
                  sW = iW.gpuSubmitToDoneMs;
                  break;
                case "oc":
                  sW = OW.lagP50Ms;
                  break;
                case "dc":
                  sW = OW.lagP90Ms;
                  break;
                case "Ic":
                  sW = (0, Hc.i)(PW);
                  break;
                case "wc":
                  sW = LW;
                  break;
                case "vc":
                case "gc":
                case "Dc":
                case "Vc":
                case "fc":
                case "Cc":
                case "Xc":
                case "Bc":
                case "qc":
                case "Rc":
                case "Gc":
                case "rc":
                case "zc":
                case "Fc":
                case "Qc":
                  sW = null;
                  break;
                case "Aw":
                  sW = (0, lN.getPlatformType)();
                  break;
                case "bw":
                  sW = (0, lN.getGpuVendor)();
                  break;
                case "jw":
                  sW = qc.e[WW.backend];
                  break;
                case "Uw":
                  sW = (0, fc.d)();
                  break;
                case "kw":
                  sW = (0, lN.getOperatingSystem)();
                  break;
                case "Mw":
                  sW = (0, lN.getTrafficSource)();
                  break;
                case "Kw":
                  sW = null !== (wW = mW.d.get("gameEntrySource")) && void 0 !== wW ? wW : oc.h;
                  break;
                case "Sw":
                  sW = null !== (tW = iW.frameLimiter) && void 0 !== tW ? tW : oc.h;
                  break;
                case "Yw":
                  sW = (0, vc.i)();
                  break;
                case "yw":
                  sW = null !== (ZW = (0, gc.d)()) && void 0 !== ZW ? ZW : oc.h;
                  break;
                case "Tw":
                  sW = (0, vc.d)(bW.width, bW.height);
                  break;
                case "Jw":
                  sW = (0, nc.h)(-(new Date).getTimezoneOffset());
                  break;
                case "dw":
                  sW = null !== (xW = WW.fallbackReason) && void 0 !== xW ? xW : oc.h;
                  break;
                case "Dw":
                  sW = "ready";
                  break;
                case "Vw":
                  sW = (0, lN.getSoftwareRenderer)();
                  break;
                case "Hw":
                  sW = (0, Cc.c)();
                  break;
                case "nw":
                  sW = (0, Xc.f)().replayState;
                  break;
                case "uw":
                  sW = (0, Xc.f)().replaySelection;
                  break;
                case "ow":
                  sW = null !== WW.shaderPackReach() ? "true" : "false";
                  break;
                case "pw":
                  sW = null !== (lW = WW.shaderPackReach()) && void 0 !== lW && lW.sceneDepth ? "true" : "false";
                  break;
                case "fw": {
                  const iW = WW.shaderPackReach();
                  sW = null !== iW && void 0 !== iW && iW.sunShadow ? "all" : null !== iW && void 0 !== iW && iW.airShadow ? "air" : "none";
                  break
                }
                case "Cw":
                  sW = Bc.C;
                  break;
                case "aw":
                  sW = (0, Vc.l)();
                  break;
                case "hw": {
                  const iW = WW.qb();
                  sW = null === iW ? oc.h : String(iW);
                  break
                }
                case "ew":
                case "gw":
                  sW = oc.h;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${kW}`)
              }
              if (void 0 === sW) throw new Error(`Metric ${kW} has no value`);
              AW[kW] = sW
            }
            return AW
          }(this.shell, {
            cpuFrameMs: iW,
            refreshHz: OW,
            cpuBottleneck: EW,
            frameIntervalCv: NW,
            ...wW
          }, tW, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), lW);
        if (! function(WW, iW, OW) {
            return (0, PO.b)(), WW(AW.q.Send, iW, OW)
          }(this.shell.writeCmd, xW.zd, function(WW) {
            const iW = (0, pW.e)((0, wO.i)(WW)),
              OW = new Uint8Array(AW.de.BYTES + iW.length);
            return new DataView(OW.buffer).setUint16(0, wO.e.AnalyticsUpdate, !0), OW.set(iW, AW.de.BYTES), OW
          }(bW))) return this.unsentPage = lW, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Hc.f), (0, Vc.q)(bW, "wasm", ZW)
      }
    }
    var Lw = OW(40955);

    function ww(WW, iW, OW) {
      const mW = new Map;
      return (0, Lw.b)(((WW, OW, mW) => iW.NL(WW, OW, mW)), ((iW, OW, EW) => {
        const NW = `${iW},${OW},${EW}`;
        return mW.has(NW) || mW.set(NW, (0, ri.d)(WW, iW, OW, EW)), mW.get(NW)
      }), OW)
    }
    var tw = OW(40957),
      Zw = OW(42394);

    function xw(WW) {
      const iW = null !== WW && 0 !== (AW.z.playerFlags(WW.api.apiView, 0) & AW.Ud.CursorAim);
      iW !== (0, Zw.q)() && (0, Zw.I)(iW, null !== WW)
    }

    function lw(WW) {
      return (0, em.c)(gm.E, WW)
    }
    var Aw = OW(42528);
    const bw = new NW.f((WW => OW(54746)(`./${WW}/${WW}Client`)));
    let jw = null,
      Uw = null;
    async function kw(WW) {
      jw ??= OW.e(33).then((() => OW(40366))).then((WW => {
        Uw = WW.createDefaultClientPlugins
      }), (WW => {
        throw jw = null, WW
      })), await Promise.all([bw.load(WW), jw])
    }

    function sw(WW) {
      WW.load(new Gi(tE, new lE))
    }
    let Mw = !1;
    const Kw = new WeakMap;

    function Sw(WW) {
      try {
        WW()
      } catch (iW) {
        console.error("[bloxd-wasm-client] a session-end step failed", iW)
      }
    }

    function Yw(WW, iW) {
      ! function() {
        var WW, iW;
        LE.Howler.volume();
        const OW = LE.Howler;
        null === (WW = OW._autoResume) || void 0 === WW || WW.call(OW), null === (iW = OW._autoSuspend) || void 0 === iW || iW.call(OW)
      }();
      const OW = new MW(iW.core, iW.memory, iW.audio);
      let NW;
      try {
        NW = new vE(OW, iW.options)
      } catch (xW) {
        return WW.crash(DE.B, xW), null
      }(0, cW.f)(gE(OW, NW));
      const tW = new RL({
        running: WW,
        api: OW,
        core: iW.core,
        memory: iW.memory,
        staleOr: iW.staleOr,
        reportFault: iW.reportReplayFault,
        options: iW.options,
        sessionInfo: iW.sessionInfo,
        replayShaderPack: iW.replayShaderPack
      });
      (0, sm.D)();
      const ZW = new iE({
        api: OW,
        tables: NW,
        sessionInfo: iW.sessionInfo,
        gameFactory: WW => bw.loadedFactory(WW),
        defaultPlugins: (WW, iW, OW, mW) => {
          if (null === Uw) throw new Error("The default plugins started before they loaded");
          return Uw(WW, iW, OW, mW)
        },
        serverOptions: iW.options,
        onNetEvent: WW => {
          tW.netEvent(WW), iW.onNetEvent(WW)
        },
        setLocalOptions: iW => {
          IL(WW, {
            changes: iW,
            reset: !1
          })
        },
        playSound: (WW, OW, mW, EW, NW, PW, LW) => iW.audio.playGame(WW, OW, mW, EW, NW, PW, LW),
        preloadSounds: WW => {
          iW.audio.preload(function(WW) {
            const iW = [];
            for (const OW of WW) {
              const WW = vi(OW);
              if (null !== WW)
                for (let OW = WW[0]; OW < WW[0] + WW[1]; OW++) iW.push(OW)
            }
            return iW
          }(WW))
        },
        onSessionEnd: () => {
          Sw(EW.p), Sw(ME), Sw((() => {
            mW.d.set({
              openInGameMenuName: null
            })
          })), Sw((() => {
            iW.audio.endSession()
          }))
        },
        beforeWrite: iW.beforeWrite,
        beforeOp: iW.beforeOp,
        cameraScreen: sE,
        showCameraFacing: KE,
        reportCameraFault: iW.reportCameraFault,
        onEventOverflow: iW.onEventOverflow,
        screenBandY: LW.m,
        replayEntities: tW.entityHooks,
        hasPackModel: iW.hasPackModel
      });
      return ZW.attach(WW), Kw.set(ZW, tW), NE(ZW.items, iW.audio),
        function(WW) {
          WW.setClientFreeCameraGrant("isDev", !1);
          const iW = iW => {
            WW.setClientFreeCameraGrant("hasDeveloperRank", iW.playerHasRank("developer"))
          };
          (0, PW.n)("userContextUpdated", iW)
        }(ZW), Mw || (Mw = !0, (0, PW.n)("appManagerUpdated|openInGameMenuName", (WW => {
          !WW && (0, wW.t)().includes(wW.b) && (0, wW.v)(wW.b)
        }))), ZW
    }

    function yw(WW) {
      try {
        WW.closeGame()
      } finally {
        var iW;
        null === (iW = Kw.get(WW)) || void 0 === iW || iW.stop(), Kw.delete(WW)
      }
    }
  },
  42402: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => SW,
      e: () => xW,
      g: () => sW,
      k: () => KW,
      o: () => MW,
      q: () => YW
    });
    var mW = OW(167),
      EW = OW(25),
      NW = OW(27),
      PW = OW(3941),
      LW = OW(1301),
      cW = OW(35159),
      wW = OW(281),
      tW = OW(100),
      ZW = OW(163);

    function xW() {
      var WW;
      const iW = (0, PW.F)(),
        OW = function(WW, iW) {
          return {
            sampleCount: WW.antiAliasing ? 4 : 1,
            n: (0, PW.A)(WW.pixelScale, iW),
            pixelated: (0, PW.x)(WW.pixelSmoothing)
          }
        }(EW.d.get("clientEscMenuOptions"), iW);
      return OW.sampleCount > 1 && (0, cW.b)() && (OW.sampleCount = 1), OW.n = null !== (WW = (0, cW.m)()) && void 0 !== WW ? WW : OW.n, mW.h.includes((0, tW.getSoftwareRenderer)()) && (OW.sampleCount = 1, OW.n = Math.max(OW.n, (0, PW.A)(ZW.w.pixelScale, iW))), OW
    }
    let lW = null,
      AW = null;
    const bW = new Set;
    let jW = null;

    function UW() {
      for (const WW of bW) WW()
    }

    function kW() {
      if (null === lW) {
        const WW = document.createElement("div");
        WW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", WW.setAttribute("aria-hidden", "true"), document.body.append(WW), AW = WW, lW = new PW.d(WW, UW)
      }
      return lW
    }

    function sW(WW) {
      const iW = (0, PW.p)(),
        [OW, mW] = kW().size(iW);
      return (0, PW.i)(OW, mW, iW, WW.n)
    }

    function MW(WW) {
      var iW, OW, mW, EW;
      const NW = (0, PW.p)(),
        [cW, wW] = kW().size(NW);
      if (cW <= 0 || wW <= 0) return null;
      const tW = (0, PW.i)(cW, wW, NW, xW().n);
      return (0, PW.g)(WW, tW), WW.style.left = `${null!==(iW=null===(OW=jW)||void 0===OW?void 0:OW.rect.left)&&void 0!==iW?iW:0}px`, WW.style.top = `${null!==(mW=null===(EW=jW)||void 0===EW?void 0:EW.rect.top)&&void 0!==mW?mW:0}px`, (0, LW.L)(WW.style, jW), tW
    }

    function KW(WW) {
      jW = WW, kW(), (0, LW.B)(AW.style, WW, ""), UW()
    }

    function SW(WW, iW) {
      WW.style.imageRendering = (0, PW.G)(iW.pixelated)
    }

    function YW(WW, iW) {
      const OW = (0, NW.n)("appManagerUpdated|clientEscMenuOptions", (() => {
          SW(WW, xW()), iW()
        })),
        mW = (0, cW.C)(iW),
        EW = (0, wW.o)(iW);
      return kW(), bW.add(iW), () => {
        OW(), mW(), EW(), bW.delete(iW)
      }
    }
  },
  42455: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      d: () => bW,
      h: () => cW,
      i: () => MW,
      l: () => sW,
      o: () => KW
    });
    var mW = OW(2388);
    const EW = 8388608,
      NW = 1e3,
      PW = 3e4;
    class LW extends Error {
      constructor(WW, iW, OW) {
        super(`${"fetch"===WW?"fetching":"decoding"} ${iW} failed`, OW), this.stage = WW, this.source = iW, this.name = "ShellImageError"
      }
    }
    async function cW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.C,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return tW(await wW(WW, iW), "string" === typeof WW ? WW : null, OW)
    }
    async function wW(WW, iW) {
      if ("string" !== typeof WW) return WW;
      try {
        return await iW(WW)
      } catch (OW) {
        throw new LW("fetch", WW, {
          cause: OW
        })
      }
    }
    async function tW(WW, iW, OW) {
      try {
        const iW = new Blob([WW.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(iW, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: OW
        })
      } catch (mW) {
        throw new LW("decode", null !== iW && void 0 !== iW ? iW : `${WW.byteLength} bytes`, {
          cause: mW
        })
      }
    }
    let ZW = null;
    const xW = new Map;
    let lW = 1;
    const AW = new Map;

    function bW(WW) {
      var iW;
      if (ZW = WW, null !== WW) {
        null === (iW = WW.PEW) || void 0 === iW || iW.call(WW, kW);
        for (const [iW, OW] of xW) jW(WW, iW, OW);
        xW.clear()
      }
    }

    function jW(WW, iW, OW) {
      AW.has(iW) && void 0 !== WW.EEW ? WW.EEW(iW, OW) : WW.OEW(iW, OW)
    }

    function UW(WW, iW) {
      ZW ? jW(ZW, WW, iW) : xW.set(WW, iW)
    }

    function kW(WW) {
      const iW = AW.get(WW);
      void 0 === iW || iW.decoding || (iW.decoding = !0, tW(iW.bytes, iW.url, iW.orientation).then((OW => {
        iW.decoding = !1, AW.get(WW) === iW ? (iW.failures = 0, UW(WW, OW)) : OW.close()
      }), (OW => {
        iW.decoding = !1, iW.failures++, 1 === iW.failures && console.warn(`shellImages: decoding image ${WW} again failed; trying again until it decodes`, OW), setTimeout((() => {
          kW(WW)
        }), Math.min(NW * 2 ** (iW.failures - 1), PW))
      })))
    }

    function sW(WW) {
      const iW = lW++;
      return UW(iW, WW), iW
    }
    async function MW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.C,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        NW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const PW = "string" === typeof WW ? WW : null,
        LW = await wW(WW, iW),
        cW = await tW(LW, PW, OW),
        {
          width: ZW,
          height: xW
        } = cW,
        bW = lW++;
      return NW && ZW * xW * 4 >= EW && AW.set(bW, {
        bytes: LW.slice(),
        url: PW,
        orientation: OW,
        decoding: !1,
        failures: 0
      }), UW(bW, cW), {
        id: bW,
        width: ZW,
        height: xW
      }
    }

    function KW(WW) {
      var iW;
      AW.delete(WW);
      const OW = xW.get(WW);
      if (OW) return OW.close(), void xW.delete(WW);
      null === (iW = ZW) || void 0 === iW || iW.mEW(WW)
    }
  },
  37265: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => wW,
      i: () => PW,
      m: () => ZW
    });
    var mW = OW(37257),
      EW = OW(13);
    const NW = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function PW(WW) {
      if (WW instanceof WebAssembly.RuntimeError) return !0;
      const iW = WW instanceof Error ? WW.stack : void 0;
      return "string" === typeof iW && NW.test(iW)
    }

    function LW(WW, iW, OW) {
      var EW;
      const PW = WW instanceof Error ? WW.name : "thrown",
        LW = (WW instanceof Error && null !== (EW = WW.stack) && void 0 !== EW ? EW : "").split("\n").filter((WW => NW.test(WW))).slice(0, 8).map((WW => WW.trim())),
        cW = null === iW ? "wasm memory unknown" : `wasm memory ${Math.round(iW/2**20)} MB`,
        wW = null === OW.panic ? "" : `, panic: ${(0,mW.h)(OW.panic)}`,
        tW = `${PW}: ${WW instanceof Error?WW.message:String(WW)}`;
      return `${(0,mW.o)(OW.kind,OW.refusedBytes)} ${tW} (${cW})${wW}${LW.length>0?` | ${LW.join(" < ")}`:""}`
    }
    const cW = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function wW(WW) {
      var iW;
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(WW instanceof Error) || !cW.test(WW.message)) return {};
      if (!("detached" in OW)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, EW.W)(null === (iW = (0, EW.O)(OW, "detached")) || void 0 === iW ? void 0 : iW.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const tW = 500;

    function ZW(WW) {
      let iW = "[object Object]";
      try {
        iW = String(WW)
      } catch {}
      if ("[object Object]" !== iW) return iW;
      try {
        var OW, mW;
        return null !== (OW = null === (mW = JSON.stringify(WW)) || void 0 === mW ? void 0 : mW.slice(0, tW)) && void 0 !== OW ? OW : iW
      } catch {
        return iW
      }
    }
  },
  37257: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      e: () => NW,
      h: () => cW,
      l: () => PW,
      o: () => EW
    });
    const mW = /^alloc_failed (\d+) bytes$/;

    function EW(WW, iW) {
      return NW(WW, iW) ? `trap=alloc_failed ${iW} bytes` : `trap=${WW}`
    }

    function NW(WW, iW) {
      return "unreachable" === WW && iW > 0
    }

    function PW(WW, iW, OW) {
      const mW = function(WW) {
        return WW instanceof WebAssembly.RuntimeError ? /unreachable/i.test(WW.message) ? "unreachable" : /out of bounds/i.test(WW.message) ? "out_of_bounds" : "runtime_error" : (WW instanceof RangeError || WW instanceof Error && "InternalError" === WW.name) && /call stack|recursion/i.test(WW.message) ? "stack_overflow" : "js_error"
      }(WW);
      if ("unreachable" !== mW) return {
        kind: mW,
        panic: null,
        refusedBytes: 0
      };
      const EW = iW(),
        NW = OW();
      return {
        kind: mW,
        panic: NW > 0 ? null : EW,
        refusedBytes: NW
      }
    }
    const LW = 300;

    function cW(WW) {
      return WW.replace(/\s*\n\s*/g, " / ").slice(0, LW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);