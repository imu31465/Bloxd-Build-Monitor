export const id = 53;
export const ids = [53];
export const modules = {
  41647: (YY, rY, DY) => {
    var FY = {
      "./bedwars/bedwarsClient": [38591, 9],
      "./bridgeBattle/bridgeBattleClient": [38593, 10],
      "./buildAFactory2/buildAFactory2Client": [37876, 72, 71, 70, 215, 233, 11],
      "./classic/classicClient": [38597, 12],
      "./clutch/clutchClient": [38605, 13],
      "./containmentBreach/containmentBreachClient": [38609, 14],
      "./cooking/cookingClient": [38737, 15],
      "./defusal/defusalClient": [38740, 16],
      "./frontline/frontlineClient": [38743, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [38745, 18],
      "./luckyBedwars/luckyBedwarsClient": [38751, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38754, 20],
      "./oneBlock/oneBlockClient": [38760, 21],
      "./plots/plotsClient": [38766, 231, 236, 22],
      "./pvpCiv/pvpCivClient": [38844, 23],
      "./skyIslands/skyIslandsClient": [38853, 24],
      "./skyblock/skyblockClient": [37903, 72, 215, 187, 25],
      "./tsunami/tsunamiClient": [38856, 26]
    };

    function AY(YY) {
      if (!DY.o(FY, YY)) return Promise.resolve().then((() => {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }));
      var rY = FY[YY],
        AY = rY[0];
      return Promise.all(rY.slice(1).map(DY.e)).then((() => DY(AY)))
    }
    AY.keys = () => Object.keys(FY), AY.id = 41647, YY.exports = AY
  },
  38353: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      d: () => AY
    });
    var FY = DY(25);

    function AY(YY) {
      return "refetchCode" === YY || "devDownloadJson" === YY || YY.startsWith("Plugin")
    }

    function IY(YY, rY) {
      "refetchCode" !== YY ? "Plugin|MobAiPlugin|ShowPetUi" !== YY ? Promise.all([DY.e(106), DY.e(107), DY.e(102), DY.e(104), DY.e(205)]).then((() => DY(40802))).then((DY => {
        let {
          runClientGameMessage: FY
        } = DY;
        FY(YY, rY)
      })).catch((rY => {
        console.error(`Game message ${YY} failed`, rY)
      })) : FY.g.vo("showPetUi", rY) : FY.g.vo("refetchCode")
    }
  },
  41628: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY,
      f: () => AY
    });
    const FY = ["recording", "freecam", "keyframe"];

    function AY() {
      const YY = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(YY[1]) << 32n | BigInt(YY[0])
    }
  },
  39913: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY
    });
    const FY = 1 << 20,
      AY = 1 << 21,
      IY = 1024,
      RY = 2048;

    function OY(YY, rY, DY) {
      const OY = YY + FY,
        gY = rY + IY,
        aY = DY + FY;
      return OY < 0 || OY >= AY || aY < 0 || aY >= AY || gY < 0 || gY >= RY ? -1 : (OY * AY + aY) * RY + gY
    }
  },
  39906: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      d: () => RY,
      e: () => AY,
      h: () => IY,
      k: () => vY,
      m: () => aY,
      o: () => gY,
      s: () => OY
    });
    DY(3022);
    DY(39913);

    function FY(YY) {}

    function AY(YY) {}

    function IY(YY) {}

    function RY(YY) {}

    function OY(YY) {}

    function gY(YY, rY, DY) {}

    function aY(YY) {}

    function vY(YY) {}
  },
  8659: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      g: () => gY
    });
    var FY = DY(19);
    const AY = 24,
      IY = "farNametags",
      RY = 1e5;

    function OY() {
      var YY;
      return null === (YY = FY.b.get("showDistantNametags")) || void 0 === YY || YY
    }

    function gY() {
      var YY;
      return null !== (YY = function() {
        const YY = new URLSearchParams(window.location.search).get(IY),
          rY = null === YY || "" === YY ? NaN : Number(YY);
        return Number.isFinite(rY) && rY >= 0 ? Math.min(rY, RY) : null
      }()) && void 0 !== YY ? YY : OY() ? 0 : AY
    }
  },
  41621: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      blockIdOf: () => zg.b,
      clearWasmCameraScreen: () => UF,
      creativeItemIds: () => YF.creativeItemIds,
      decodeMapSettings: () => fg,
      drainTextRerasters: () => KO.e,
      enchantmentPerksOf: () => YF.enchantmentPerksOf,
      endGameHost: () => pg,
      followCursorAim: () => Cg,
      followMenuPrefs: () => GA,
      loadAudio: () => Mg,
      loadClientGame: () => Jg,
      loadTextIcons: () => KO.g,
      rasterText: () => cO.d,
      readBoardToEdit: () => Hg,
      setTextHost: () => KO.l,
      setTextLocalPlayer: () => KO.m,
      showInCreativeInvenOf: () => YF.showInCreativeInvenOf,
      startGameHost: () => qg,
      startShellAnalytics: () => Bg,
      startSkyFeed: () => PO,
      textChanged: () => KO.r,
      warmText: () => cO.e,
      wasmCameraScreen: () => PF
    });
    DY(35941);
    var FY = DY(19),
      AY = DY(36189),
      IY = DY(38495),
      RY = DY(25),
      OY = DY(2963),
      gY = DY(36187),
      aY = DY(1287),
      vY = DY(614),
      uY = DY(37613),
      sY = DY(4376),
      iY = DY(39744),
      yY = DY(39683);
    const QY = yY.Bb / 4,
      oY = yY.m.PlaySound,
      WY = yY.m.SoundReset,
      EY = sY.R.ReplayFailed,
      mY = sY.R.RecorderEvent;
    class VY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = YY, this.memory = rY, this.audio = DY, this.serverIds = new Int32Array(256).fill(yY.Yc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(yY.s.BYTES)), this.renderPtr = 0, this.gu = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new yY.T(YY, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.lFY(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(YY, rY) {
        const DY = this.eventView();
        return new Uint8Array(DY.buffer, DY.byteOffset + YY, rY)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return yY.s.localId(this.apiView, 0)
      }
      localDeaths() {
        return yY.s.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const YY = this.apiView,
          rY = yY.s.entRenderPtr(YY, 0),
          DY = yY.s.entVisPtr(YY, 0),
          FY = yY.s.entCapacity(YY, 0);
        if (rY !== this.renderPtr || DY !== this.visPtr || FY !== this.gu || this.renderBuffer !== this.buffer) {
          this.renderPtr = rY, this.visPtr = DY, this.gu = FY, this.renderBuffer = this.buffer;
          const YY = this.memoryView(Float32Array, rY, FY * QY, "the render array"),
            AY = this.memoryView(Uint8Array, DY, FY, "the visibility array");
          this.renderCapacity = YY && AY ? FY : 0, this.render = YY && AY ? YY : new Float32Array(0), this.vis = YY && AY ? AY : new Uint8Array(0)
        }
      }
      memoryView(YY, rY, DY, FY) {
        try {
          return (0, iY.o)(YY, this.memory().buffer, rY, DY, FY)
        } catch (AY) {
          return this.keepCorruption(AY), null
        }
      }
      memoryData(YY, rY, DY, FY) {
        try {
          return (0, iY.e)(this.memory().buffer, YY, rY, DY, FY)
        } catch (AY) {
          return this.keepCorruption(AY), null
        }
      }
      reportCorruption(YY) {
        this.keepCorruption(new iY.d(YY))
      }
      keepCorruption(YY) {
        if (!(YY instanceof iY.d)) throw YY;
        this.corruption ??= YY
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(YY, rY, DY) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: FY,
          len: AY
        } = YY;
        this.eventsPtr = FY, this.eventsLen = AY, this.eventsBuffer = null;
        const IY = this.eventView();
        for (let aY = 0; aY < AY;) {
          const YY = IY.getUint32(aY, !0),
            DY = 65535 & YY,
            FY = YY >>> 16,
            AY = aY + sY.O;
          if (DY === yY.m.EntitySpawned) {
            var RY;
            if (FY !== yY.Db.BYTES) throw NY(DY, aY, FY);
            const YY = yY.Db.serverId(IY, AY);
            this.spawned(YY, yY.Db.index(IY, AY), yY.Db.kind(IY, AY)), null === (RY = rY.entityAdded) || void 0 === RY || RY.call(rY, YY)
          } else if ((DY === yY.m.ChunkSlot || DY === yY.m.EntityInfoChanged) && !(0, yY.je)(DY, IY, AY, FY, rY)) throw NY(DY, aY, FY);
          aY = AY + (0, sY.ee)(FY)
        }
        try {
          var OY;
          null === (OY = rY.afterPrescan) || void 0 === OY || OY.call(rY), this.throwCorruption(), !DY() && this.dispatch(YY, rY, DY) && (this.throwCorruption(), this.applyListener(), rY.afterWalk(YY.kind)), this.throwCorruption()
        } catch (gY) {
          throw gY instanceof iY.d && (this.corruption ??= gY), gY
        } finally {
          DY() || null !== this.corruption || this.applyDespawns(AY, rY)
        }
      }
      applyDespawns(YY, rY) {
        const DY = this.eventView();
        for (let AY = 0; AY < YY;) {
          const YY = DY.getUint32(AY, !0),
            IY = AY + sY.O;
          if ((65535 & YY) === yY.m.EntityDespawned && YY >>> 16 === yY.Db.BYTES) {
            const YY = yY.Db.serverId(DY, IY);
            var FY;
            if (this.despawned(YY, yY.Db.index(DY, IY))) null === (FY = rY.entityRemoved) || void 0 === FY || FY.call(rY, YY)
          }
          AY = IY + (0, sY.ee)(YY >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(YY, rY, DY) {
        const {
          len: FY,
          net: AY,
          netOffsets: IY
        } = YY;
        let RY = this.eventView(),
          OY = 0;
        for (let lY = 0; lY < FY;) {
          const YY = RY.getUint32(lY, !0),
            FY = 65535 & YY,
            TY = YY >>> 16,
            BY = lY + sY.O;
          let cY = !1;
          if (OY < AY.length && IY[OY] === lY) rY.netEvent(AY[OY]), OY++, cY = !0;
          else if (FY === sY.R.LocalPlayerBound) {
            var gY;
            if (TY !== sY.Eb) throw NY(FY, lY, TY);
            null === (gY = rY.localPlayerBound) || void 0 === gY || gY.call(rY, RY.getInt32(BY, !0)), cY = !0
          } else if (FY === sY.R.LocalHurt) {
            var aY;
            if (TY !== sY.Bb) throw NY(FY, lY, TY);
            null === (aY = rY.localHurt) || void 0 === aY || aY.call(rY, RY.getInt32(BY, !0), RY.getFloat32(BY + 4, !0), RY.getUint32(BY + 8, !0)), cY = !0
          } else if (FY === sY.R.AttackHit) {
            var vY;
            if (TY !== sY.c) throw NY(FY, lY, TY);
            const YY = RY.getFloat32(BY, !0),
              DY = RY.getFloat32(BY + 4, !0),
              AY = RY.getFloat32(BY + 8, !0),
              IY = RY.getUint32(BY + 12, !0);
            null === (vY = rY.attackHit) || void 0 === vY || vY.call(rY, YY, DY, AY, 0 !== (IY & sY.l.Crit), 0 !== (IY & sY.l.HitSelf))
          } else if (FY === sY.R.PhysicsType) {
            var uY;
            if (TY !== sY.Zb) throw NY(FY, lY, TY);
            null === (uY = rY.physicsType) || void 0 === uY || uY.call(rY, RY.getUint32(BY, !0), RY.getInt32(BY + 4, !0)), cY = !0
          } else if (FY === sY.R.VehicleEffect) {
            var iY;
            const YY = eY(RY, BY, TY);
            if (null === YY) throw NY(FY, lY, TY);
            null === (iY = rY.vehicleEffect) || void 0 === iY || iY.call(rY, YY.op, YY.name, YY.icon, YY.level, YY.durationMs), cY = !0
          } else if (FY === sY.R.ZoomChanged) {
            var QY;
            if (TY !== sY.Pd) throw NY(FY, lY, TY);
            null === (QY = rY.zoomChanged) || void 0 === QY || QY.call(rY, RY.getFloat32(BY, !0), RY.getUint8(BY + 4)), cY = !0
          } else if (FY === sY.R.ZoomDisabled) {
            var VY;
            if (0 !== TY) throw NY(FY, lY, TY);
            null === (VY = rY.zoomDisabled) || void 0 === VY || VY.call(rY), cY = !0
          } else if (FY === sY.R.GameCamera) {
            var SY;
            null === (SY = rY.gameCamera) || void 0 === SY || SY.call(rY, new Uint8Array(RY.buffer, RY.byteOffset + BY, TY).slice()), cY = !0
          } else if (FY === yY.m.ChunkSlot || FY === yY.m.EntityInfoChanged);
          else if (FY >= oY && FY <= WY) {
            if (this.audio && !this.audio.onAudioEvent(FY, RY, BY, TY)) throw NY(FY, lY, TY)
          } else if (FY >= EY && FY <= mY) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(FY, RY, BY, TY)) throw NY(FY, lY, TY);
              cY = !0
            }
          } else if (FY >= yY.kd && FY <= yY.md && FY !== sY.R.EnvLighting) {
            if (!(0, yY.je)(FY, RY, BY, TY, rY)) throw NY(FY, lY, TY);
            cY = !0
          }
          if (cY) {
            if (DY()) return !1;
            RY = this.eventView()
          }
          lY = BY + (0, sY.ee)(TY)
        }
        return !DY()
      }
      applyListener() {
        var YY;
        if (!this.audio) return;
        const rY = yY.s.audioViewPtr(this.apiView, 0),
          DY = this.memory().buffer;
        let FY = this.audioView;
        (null === (YY = FY) || void 0 === YY ? void 0 : YY.buffer) === DY && FY.byteOffset === rY || (FY = (0, iY.e)(DY, rY, yY.v.BYTES, 8, "the audio view"), this.audioView = FY), FY && this.audio.applyListener(FY)
      }
      indexOf(YY) {
        return this.indexById.get("number" === typeof YY ? YY : +YY)
      }
      isLocal(YY) {
        return YY !== yY.Yc && YY === yY.s.localId(this.apiView, 0)
      }
      lE(YY) {
        const rY = [0, 0, 0];
        return this.readPosition("number" === typeof YY ? YY : +YY, rY) ? rY : null
      }
      readPosition(YY, rY) {
        const DY = this.apiView;
        if (void 0 !== this.indexById.get(YY) && this.isLocal(YY)) {
          for (let YY = 0; YY < 3; YY++) rY[YY] = yY.s.localPos(DY, 0, YY);
          return !0
        }
        return this.readDrawnPosition(YY, rY)
      }
      readDrawnPosition(YY, rY) {
        const DY = this.apiView,
          FY = this.indexById.get(YY);
        if (void 0 === FY || FY >= this.renderCapacity) return rY[0] = rY[1] = rY[2] = NaN, !1;
        const AY = FY * QY;
        for (let IY = 0; IY < 3; IY++) rY[IY] = this.render[AY + IY] + yY.s.origin(DY, 0, IY);
        return !0
      }
      checkValid(YY) {
        return void 0 !== this.indexOf(YY)
      }
      isAlive(YY) {
        const rY = this.indexOf(YY);
        if (void 0 === rY) return null;
        if (this.ensureViews(), rY >= this.renderCapacity) return null;
        const DY = this.vis[rY];
        return 0 === DY ? null : 0 !== (DY & yY.ge.Alive)
      }
      getEntityType(YY) {
        const rY = this.indexOf(YY);
        return void 0 === rY ? this.isLocal("number" === typeof YY ? YY : +YY) ? "Player" : null : lY(this.kinds[rY])
      }
      spawned(YY, rY, DY) {
        if (rY >= 1048576) throw new iY.d(`entity ${YY} spawned at index ${rY}`);
        this.ensureIndex(rY), this.serverIds[rY] === YY && null !== this.idStr[rY] || (this.idStr[rY] = String(YY)), this.serverIds[rY] = YY, this.kinds[rY] = DY, this.indexById.set(YY, rY)
      }
      despawned(YY, rY) {
        let DY = !1;
        return this.indexById.get(YY) === rY && (this.indexById.delete(YY), DY = !0), rY < this.serverIds.length && this.serverIds[rY] === YY && (this.serverIds[rY] = yY.Yc, this.kinds[rY] = 0, this.idStr[rY] = null), DY
      }
      ensureIndex(YY) {
        const rY = this.serverIds.length;
        if (YY < rY) return;
        let DY = 2 * rY;
        for (; DY <= YY;) DY *= 2;
        const FY = new Int32Array(DY).fill(yY.Yc);
        FY.set(this.serverIds), this.serverIds = FY;
        const AY = new Uint16Array(DY);
        AY.set(this.kinds), this.kinds = AY;
        for (let IY = rY; IY < DY; IY++) this.idStr.push(null)
      }
      eventView() {
        const YY = this.memory().buffer;
        return YY !== this.eventsBuffer && (this.eventsBuffer = YY, this.events = new DataView(YY, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const YY = this.memory().buffer;
        this.buffer = YY, this.viewPtr < 0 && (this.viewPtr = this.core.TFY()), this.view = new DataView(YY, this.viewPtr, yY.s.BYTES), this.rereadDirectory()
      }
    }

    function SY(YY) {
      return YY >>> yY.b === yY.o.Item
    }

    function lY(YY) {
      var rY, DY;
      const FY = YY & yY.d;
      switch (YY >>> yY.b) {
        case yY.o.Lifeform:
          return null !== (rY = vY.j[FY]) && void 0 !== rY ? rY : null;
        case yY.o.Throwable:
          return null !== (DY = uY.p[FY]) && void 0 !== DY ? DY : null;
        case yY.o.Mesh:
          return "Mesh";
        case yY.o.Audio:
          return "AudioEntity";
        case yY.o.Item:
          return "Item";
        default:
          return null
      }
    }
    const TY = new TextDecoder;

    function eY(YY, rY, DY) {
      if (DY < sY.xd.HEAD_BYTES) return null;
      const FY = YY.getUint32(rY, !0),
        AY = YY.getUint32(rY + 20, !0),
        IY = YY.getUint32(rY + 24, !0),
        RY = sY.xd.HEAD_BYTES + (0, sY.ee)(AY);
      if (FY !== sY.xd.UPDATE && FY !== sY.xd.REMOVE || AY > DY || RY + IY > DY) return null;
      const OY = (DY, FY) => TY.decode(new Uint8Array(YY.buffer, YY.byteOffset + rY + DY, FY)),
        gY = YY.getFloat64(rY + 12, !0);
      return {
        op: FY,
        level: YY.getFloat64(rY + 4, !0),
        durationMs: Number.isNaN(gY) ? null : gY,
        name: OY(sY.xd.HEAD_BYTES, AY),
        icon: OY(RY, IY)
      }
    }

    function NY(YY, rY, DY) {
      return new iY.d(`event ${YY} at ${rY} of ${DY} bytes`)
    }
    var BY = DY(341),
      cY = DY(1231),
      KY = DY(38353),
      HY = DY(1820),
      zY = DY(39806),
      ZY = DY(1774),
      CY = DY(38513),
      fY = DY(38539),
      jY = DY(38524),
      hY = DY(39731),
      dY = DY(2256),
      JY = DY(38504),
      MY = DY(38536);
    const wY = Math.max(yY.qb.BYTES, yY.jb.BYTES, yY.lb.BYTES);

    function bY(YY) {
      if (!(0, MY.g)(YY)) return null;
      const rY = Number(YY);
      return (0 | rY) === rY ? rY : null
    }
    class XY {
      constructor(YY) {
        this.api = YY, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, JY.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.pF = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = yY.Yc, this.localName = String(yY.Yc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.pF = null;
        const YY = this.api.queries.directorView() >= yY.qb.BYTES ? this.scratchView() : null;
        null !== YY && (this.defaultFov = (0, ZY.K)(yY.qb.fov(YY, 0)), this.baseFov = (0, ZY.K)(yY.qb.baseFov(YY, 0)), this.aspect = yY.qb.aspect(YY, 0), this.bodyHeading = yY.qb.bodyHeading(YY, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(YY) {
        this.viewHeading = YY
      }
      get localPlayerId() {
        const YY = yY.s.localId(this.api.apiView, 0);
        return YY !== this.localId && (this.localId = YY, this.localName = String(YY)), this.localName
      }
      getEntityPosition(YY) {
        return this.readEntity(YY) ? this.entityFeet : null
      }
      getEntityAimPoint(YY) {
        return this.readEntity(YY) ? this.entityAim : null
      }
      getEntityHeading(YY) {
        const rY = bY(YY);
        if (null === rY) return null;
        const DY = yY.s.localId(this.api.apiView, 0);
        return rY === DY && DY !== yY.Yc ? this.viewHeading : this.readEntity(YY) ? this.entityHeading : null
      }
      raycastTerrain(YY, rY, DY) {
        const FY = this.api.queries.cameraSweep(YY[0], YY[1], YY[2], rY[0], rY[1], rY[2], DY);
        return FY < DY - 1e-6 ? FY : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const YY = this.defaultPose;
        YY.fov = this.defaultFov;
        const rY = this.api.queries.directorDefaultPose() >= yY.jb.BYTES ? this.scratchView() : null;
        if (null === rY) return YY;
        for (let DY = 0; DY < 3; DY++) YY.position[DY] = yY.jb.eye(rY, 0, DY);
        return YY.heading = yY.jb.heading(rY, 0), YY.pitch = yY.jb.pitch(rY, 0), YY
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
      readEntity(YY) {
        const rY = bY(YY);
        if (null === rY) return !1;
        if (rY === this.pF) return this.entityLive;
        this.pF = rY;
        const DY = this.api.queries.directorEntity(rY) >= yY.lb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== DY, null === DY) return !1;
        for (let FY = 0; FY < 3; FY++) this.entityFeet[FY] = yY.lb.feet(DY, 0, FY), this.entityAim[FY] = this.entityFeet[FY];
        return this.entityAim[1] += yY.lb.eyeHeight(DY, 0), this.entityHeading = yY.lb.heading(DY, 0), !0
      }
      scratchView() {
        const YY = this.api.scratch(),
          rY = this.api.memory().buffer,
          DY = this.scratch;
        return null !== DY && DY.buffer === rY && DY.byteOffset === YY ? DY : (this.scratch = this.api.memoryData(YY, wY, 8, "the director's record"), this.scratch)
      }
    }
    const qY = {
        mode: "default"
      },
      pY = {
        show: () => {},
        clear: () => {}
      };

    function kY() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class GY {
      constructor(YY) {
        this.options = YY, this.Mu = void 0, this.director = void 0, this.latest = qY, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          Tl: 0,
          Bl: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.uv = new Int32Array(3 * yY.Nd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * yY.Nd), this.Mu = new XY(YY.api), this.director = new jY.e(this.Mu)
      }
      settingsChanged(YY) {
        let rY = qY;
        if (YY.length > 0) try {
          rY = (0, hY.e)(YY)
        } catch {}
        this.latest = rY, this.pending = rY
      }
      call(YY, rY, DY, FY, AY, IY) {
        var RY, OY;
        let gY;
        this.holding = !1;
        try {
          gY = this.answer(YY, rY, DY, FY, AY, IY)
        } catch (sY) {
          var aY, vY;
          throw this.answeredPose = !1, null === (aY = (vY = this.options).showFacing) || void 0 === aY || aY.call(vY, null), sY
        }
        const uY = this.answeredPose && 0 === (FY & yY.mb.Held);
        return this.answeredPose = gY !== yY.fb.None, this.holding = this.answeredPose && !uY, null === (RY = (OY = this.options).showFacing) || void 0 === RY || RY.call(OY, this.holding ? this.facing : null), gY
      }
      holdsView() {
        return this.holding
      }
      answer(YY, rY, DY, FY, AY, IY) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Mu: RY
        } = this;
        RY.readView();
        if (0 !== (FY & yY.mb.Held) || RY.setViewHeading((0, CY.t)(RY.bodyHeading)), void 0 !== this.pending) {
          const YY = this.pending;
          this.pending = void 0, this.director.setSettings(YY), this.syncShownSettings()
        }
        this.readLook((0, dY.f)(rY), (0, dY.f)(DY), FY, (0, dY.f)(AY), (0, dY.f)(IY));
        const OY = this.director.update(YY / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !OY) return yY.fb.None;
        const [gY, aY, vY] = OY.position;
        if (0 === this.options.api.queries.directorPose(gY, aY, vY, (0, CY.t)(OY.heading), (0, CY.i)(OY.pitch), (0, ZY.q)(OY.fov))) return yY.fb.None;
        if ("default" === this.director.getSettings().mode) return yY.fb.Pose;
        switch (this.facing) {
          case "camera":
            return yY.fb.FaceCamera;
          case "cursor":
            return yY.fb.FaceCursor;
          default:
            return yY.fb.FaceMovement
        }
      }
      afterFrame(YY) {
        YY ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = qY, this.idle()
      }
      restart() {
        const YY = this.holding;
        this.idle(), this.holding = YY
      }
      idle() {
        var YY, rY;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new jY.e(this.Mu), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (YY = (rY = this.options).showFacing) || void 0 === YY || YY.call(rY, null), this.setCentres(0)
      }
      syncShownSettings() {
        const YY = this.director.getSettings();
        if (YY === this.shownSettings) return;
        this.shownSettings = YY;
        const rY = (0, fY.d)(YY);
        this.facing = rY.facing, this.mouseTurns = rY.mouseTurns
      }
      readLook(YY, rY, DY, FY, AY) {
        const IY = this.look,
          RY = 0 !== (DY & yY.mb.LookPointed);
        if (null === this.mouseTurns && !RY) return IY.Tl = 0, IY.Bl = 0, void(IY.pointedAt = void 0);
        let OY;
        RY && (this.pointedAt.heading = FY, this.pointedAt.pitch = AY, OY = this.pointedAt);
        const {
          Mu: gY
        } = this;
        gY.setViewHeading((0, fY.b)(gY.getViewHeading(), YY, rY, OY, "look" === this.mouseTurns, IY))
      }
      writeCentres(YY) {
        const rY = this.next,
          DY = Math.min(YY.length, yY.Nd);
        for (let FY = 0; FY < DY; FY++)
          for (let DY = 0; DY < 3; DY++) rY[3 * FY + DY] = Math.floor(YY[FY][DY] / yY.C);
        this.setCentres(DY)
      }
      setCentres(YY) {
        const {
          uv: rY,
          next: DY
        } = this;
        let FY = YY === this.centresLen;
        for (let AY = 0; FY && AY < 3 * YY; AY++) FY = rY[AY] === DY[AY];
        FY || (rY.fill(0), rY.set(DY.subarray(0, 3 * YY)), this.centresLen = YY, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const YY = this.options.cmd();
        null !== YY && (0, yY.Df)(YY, 0, this.uv, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var YY, rY, DY;
        return null !== (YY = null === (rY = (DY = this.options).screen) || void 0 === rY ? void 0 : rY.call(DY)) && void 0 !== YY ? YY : pY
      }
      hidden() {
        var YY;
        return (null !== (YY = this.options.isPageHidden) && void 0 !== YY ? YY : kY)()
      }
      now() {
        var YY, rY, DY;
        return null !== (YY = null === (rY = (DY = this.options).now) || void 0 === rY ? void 0 : rY.call(DY)) && void 0 !== YY ? YY : performance.now()
      }
    }
    var xY = DY(39913);
    const nY = yY.C * yY.C * yY.C,
      PY = Math.log2(yY.C),
      UY = yY.C - 1,
      LY = yY.O.BYTES / 4,
      tY = new Uint16Array(nY);

    function Yr(YY, rY, DY) {
      return YY * yY.C * yY.C + rY * yY.C + DY
    }
    class rr {
      constructor(YY) {
        this.chunk = YY
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(YY, rY, DY) {
        return Yr(YY, rY, DY)
      }
    }
    class Dr {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Fr {
      constructor(YY, rY, DY, FY) {
        this.table = YY, this.slot = rY, this.generation = DY, this.epoch = FY, this.ls = new rr(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = tY, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get gQ() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get Zi() {
        const YY = this.gameVoxels(),
          rY = this.layers ??= new Uint16Array(yY.C);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let DY = 0; 0 !== this.staleLayers; DY++) {
          const FY = 1 << DY;
          0 !== (this.staleLayers & FY) && (this.staleLayers &= ~FY, rY[DY] = Ar(YY, DY))
        }
        return rY
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const YY = this.voxelData(),
          rY = this.writes;
        if (null === rY || 0 === rY.ids.size) return YY;
        if (rY.from !== YY) {
          const DY = rY.patched ??= new Uint16Array(nY);
          DY.set(YY);
          for (const [YY, FY] of rY.ids) DY[YY] = FY;
          rY.from = YY
        }
        return rY.patched
      }
      written(YY) {
        var rY;
        return null === (rY = this.writes) || void 0 === rY ? void 0 : rY.ids.get(YY)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(YY, rY, DY) {
        const FY = this.writes ??= new Dr;
        FY.ids.set(YY, rY), DY && FY.cleared.add(YY), null !== FY.from && (FY.patched[YY] = rY);
        const AY = 1 << (YY >> PY & UY);
        FY.layers |= AY, this.staleLayers |= AY, this.writeCount++
      }
      clearWrites() {
        const YY = this.writes;
        null !== YY && (this.staleLayers |= YY.layers, YY.ids.clear(), YY.cleared.clear(), YY.layers = 0, YY.from = null)
      }
      dataCleared(YY) {
        var rY;
        return !0 === (null === (rY = this.writes) || void 0 === rY ? void 0 : rY.cleared.has(YY))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const YY = this.table.slotWords(),
          rY = this.slot * LY;
        if (this.epoch !== this.table.epoch || rY + LY > YY.length || 0 === YY[rY + 3] || YY[rY + 2] !== this.generation) return this.data = tY, this.dataPtr = 0, tY;
        this.version = YY[rY + 1];
        const DY = YY[rY + 0],
          FY = YY.buffer;
        return DY === this.dataPtr && FY === this.dataBuffer || (this.dataPtr = DY, this.dataBuffer = FY, this.data = this.table.voxelsAt(FY, DY)), this.data
      }
    }

    function Ar(YY, rY) {
      const DY = YY[rY * yY.C];
      for (let FY = 0; FY < yY.C; FY++) {
        const AY = Yr(FY, rY, 0);
        for (let rY = 0; rY < yY.C; rY++)
          if (YY[AY + rY] !== DY) return 65535
      }
      return DY
    }
    const Ir = new Uint32Array(0);

    function Rr(YY, rY, DY) {
      return Yr(YY & UY, rY & UY, DY & UY)
    }
    class Or {
      constructor(YY, rY) {
        this.memory = YY, this.apiView = rY, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Ir, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Ir, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(YY, rY, DY, FY, AY, IY) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, IY === yY.P.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (IY !== yY.P.Stored && IY !== yY.P.Unloaded) throw new iY.d(`ChunkSlot flags ${IY}`);
        const RY = (0, xY.b)(YY, rY, DY);
        if (RY < 0) return;
        if (IY === yY.P.Unloaded) return void this.chunks.delete(RY);
        const OY = this.chunks.get(RY);
        (null === OY || void 0 === OY ? void 0 : OY.slot) === FY && OY.generation === AY || this.chunks.set(RY, new Fr(this, FY, AY, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const YY = this.apiView(),
          rY = yY.s.chunkSlotsPtr(YY, 0),
          DY = yY.s.chunkSlotsLen(YY, 0);
        rY === this.slotsPtr && DY === this.slotsLen || (this.slotsPtr = rY, this.slotsLen = DY, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const YY = this.apiView(),
          rY = yY.s.walkThroughPtr(YY, 0),
          DY = yY.s.walkThroughLen(YY, 0);
        rY === this.walkPtr && DY === this.walkLen || (this.walkPtr = rY, this.walkLen = DY, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const YY of this.written) YY.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const YY = this.memory().buffer;
        var rY;
        YY !== this.slotsBuffer && (this.slotsBuffer = YY, this.slots = null !== (rY = (0, iY.o)(Uint32Array, YY, this.slotsPtr, this.slotsLen * LY, "the chunk directory")) && void 0 !== rY ? rY : Ir);
        return this.slots
      }
      voxelsAt(YY, rY) {
        try {
          var DY;
          return null !== (DY = (0, iY.o)(Uint16Array, YY, rY, nY, "a chunk's voxels")) && void 0 !== DY ? DY : tY
        } catch (FY) {
          if (!(FY instanceof iY.d)) throw FY;
          return this.corruption ??= FY, tY
        }
      }
      chunk(YY, rY, DY) {
        var FY;
        return null !== (FY = this.chunks.get((0, xY.b)(YY, rY, DY))) && void 0 !== FY ? FY : null
      }
      isLoaded(YY, rY, DY) {
        return void 0 !== this.chunkAt(Math.floor(YY), Math.floor(rY), Math.floor(DY))
      }
      rv(YY, rY, DY) {
        var FY;
        const AY = Math.floor(YY),
          IY = Math.floor(rY),
          RY = Math.floor(DY),
          OY = this.chunkAt(AY, IY, RY);
        if (!OY) return 0;
        const gY = Rr(AY, IY, RY);
        return null !== (FY = OY.written(gY)) && void 0 !== FY ? FY : OY.voxelData()[gY]
      }
      setOverlay(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const IY = this.chunkAt(YY, rY, DY);
        return !!IY && (IY.hasWrites() || this.written.push(IY), IY.write(Rr(YY, rY, DY), FY, AY), !0)
      }
      version(YY, rY, DY) {
        var FY, AY;
        return null !== (FY = null === (AY = this.chunks.get((0, xY.b)(YY, rY, DY))) || void 0 === AY ? void 0 : AY.gQ) && void 0 !== FY ? FY : null
      }
      scan(YY, rY, DY, FY, AY, IY, RY, OY) {
        const gY = yY.C;
        let aY = 0;
        for (let vY = Math.floor(rY / gY); vY * gY < AY; vY++) {
          const uY = vY * gY,
            sY = Math.min(AY - uY, gY);
          for (let AY = Math.floor(YY / gY); AY * gY < FY; AY++) {
            const iY = AY * gY,
              yY = Math.min(FY - iY, gY);
            for (let FY = Math.floor(DY / gY); FY * gY < IY; FY++) {
              const QY = this.chunks.get((0, xY.b)(AY, vY, FY));
              if (!QY) continue;
              const oY = FY * gY,
                WY = Math.max(DY - oY, 0),
                EY = Math.min(IY - oY, gY),
                mY = QY.Zi,
                VY = QY.gameVoxels();
              for (let DY = Math.max(rY - uY, 0); DY < sY; DY++) {
                const rY = mY[DY];
                if (65535 === rY || 0 !== RY[rY]) {
                  aY++;
                  for (let rY = Math.max(YY - iY, 0); rY < yY; rY++) {
                    const YY = Yr(rY, DY, 0);
                    for (let FY = WY; FY < EY; FY++) {
                      const AY = VY[YY + FY];
                      0 !== RY[AY] && OY.push(iY + rY, uY + DY, oY + FY, AY)
                    }
                  }
                }
              }
            }
          }
        }
        return aY
      }
      dataCleared(YY, rY, DY) {
        var FY;
        const AY = Math.floor(YY),
          IY = Math.floor(rY),
          RY = Math.floor(DY);
        return !0 === (null === (FY = this.chunkAt(AY, IY, RY)) || void 0 === FY ? void 0 : FY.dataCleared(Rr(AY, IY, RY)))
      }
      isWalkThrough(YY) {
        if (!Number.isInteger(YY) || YY < 0 || YY > 65535) return !1;
        const rY = this.walkWords(),
          DY = YY >>> 5;
        return DY < rY.length && 1 === (rY[DY] >>> (31 & YY) & 1)
      }
      walkWords() {
        const YY = this.memory().buffer;
        var rY;
        YY !== this.walkBuffer && (this.walkBuffer = YY, this.walk = null !== (rY = (0, iY.o)(Uint32Array, YY, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== rY ? rY : Ir);
        return this.walk
      }
      chunkAt(YY, rY, DY) {
        if ((0 | YY) !== YY || (0 | rY) !== rY || (0 | DY) !== DY) return;
        const FY = (0, xY.b)(YY >> PY, rY >> PY, DY >> PY);
        return FY !== this.lastKey && (this.lastKey = FY, this.lastChunk = this.chunks.get(FY)), this.lastChunk
      }
    }
    var gr = DY(37886),
      ar = DY(37146),
      vr = DY(36174),
      ur = DY(36048),
      sr = DY(8680),
      ir = DY(38464),
      yr = DY(213);
    const Qr = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      or = [
        ["ZombieGrunt1", 14],
        ["ZombieGrunt2", 14],
        ["ZombieGrunt3", 14],
        ["ZombieHurt1", 14],
        ["ZombieHurt2", 14],
        ["ZombieHurt3", 14],
        ["ZombieHurt4", 14],
        ["bass", 15],
        ["bassattack", 15],
        ["bd", 15],
        ["bearRoar1", 14],
        ["bearRoar2", 14],
        ["bearRoar3", 14],
        ["bearRoar4", 14],
        ["bearRoar5", 14],
        ["beep", 18],
        ["bigDrumSwish1", 15],
        ["bigDrumSwish2", 15],
        ["bigDrumSwish3", 15],
        ["bow", 18],
        ["bucketEmpty1", 18],
        ["bucketEmpty2", 18],
        ["bucketEmpty3", 18],
        ["bucketFill1", 18],
        ["bucketFill2", 18],
        ["bucketFill3", 18],
        ["bullet_shell_bounce_general_07", 8],
        ["bullet_shell_bounce_general_08", 8],
        ["burp", 18],
        ["cameraShutter", 16],
        ["cannonFire1", 18],
        ["cannonFire2", 18],
        ["cannonFire3", 18],
        ["carCrash", 1],
        ["carDoorClose", 1],
        ["carDoorOpen", 1],
        ["carDriveLoop", 1],
        ["carEngineStart", 1],
        ["carHorn", 1],
        ["carIdleLoop", 1],
        ["carLockChirp", 1],
        ["cashRegister", 18],
        ["catHiss1", 14],
        ["catHiss2", 14],
        ["catHiss3", 14],
        ["catHiss4", 14],
        ["catHurt1", 14],
        ["catHurt2", 14],
        ["catHurt3", 14],
        ["catMeow1", 14],
        ["catMeow2", 14],
        ["catMeow3", 14],
        ["catMeow4", 14],
        ["catMeow5", 14],
        ["caughtFish", 6],
        ["chestClose", 18],
        ["chestOpen", 18],
        ["cloth1", 4],
        ["cloth2", 4],
        ["cloth3", 4],
        ["cloth4", 4],
        ["coinsDrop", 16],
        ["cowHurt1", 14],
        ["cowMoo1", 14],
        ["cowMoo2", 14],
        ["cowMoo3", 14],
        ["croneAttack1", 14],
        ["croneHurt1", 14],
        ["croneIdle1", 14],
        ["crowdAmbience", 2],
        ["crowdCheer", 2],
        ["crowdMurmur", 22],
        ["cryptWhoosh", 3],
        ["deerGrunt1", 14],
        ["deerHurt1", 14],
        ["dogBark1", 14],
        ["dogBark2", 14],
        ["dogBark3", 14],
        ["dogGrowl1", 14],
        ["dogGrowl2", 14],
        ["dogGrowl3", 14],
        ["dogHurt1", 14],
        ["dogHurt2", 14],
        ["doorClose", 18],
        ["doorClose2", 18],
        ["doorKnock", 3],
        ["doorOpen-bloxd1", 18],
        ["doorOpen-bloxd2", 18],
        ["doorbell", 22],
        ["drink", 18],
        ["drumSwish1", 15],
        ["drumSwish2", 15],
        ["eat1", 18],
        ["equip_leather1", 18],
        ["exp_collect", 18],
        ["exp_levelup", 18],
        ["extinguisherSpray", 5],
        ["fallsmall", 18],
        ["fennecYip1", 14],
        ["fennecYip2", 14],
        ["fennecYip3", 14],
        ["fireAlarmBell", 5],
        ["fireBurn", 18],
        ["fireCrackle", 5],
        ["fireTruckHorn", 5],
        ["firecracker1", 18],
        ["firecracker2", 18],
        ["firecracker3", 18],
        ["firecracker4", 18],
        ["futureStrangePulse", 3],
        ["game_start_countdown_01", 7],
        ["game_start_countdown_02", 7],
        ["game_start_countdown_03", 7],
        ["game_start_countdown_final", 7],
        ["gateCreak", 22],
        ["glass1", 4],
        ["glass2", 4],
        ["glass3", 4],
        ["golemGrunt1", 14],
        ["golemGrunt2", 14],
        ["gorillaIdle1", 14],
        ["gorillaIdle2", 14],
        ["gorillaIdle3", 14],
        ["gorillaIdle4", 14],
        ["gorillaRoar1", 14],
        ["grass1", 4],
        ["grass2", 4],
        ["grass3", 4],
        ["grass4", 4],
        ["gravel1", 4],
        ["gravel2", 4],
        ["gravel3", 4],
        ["gravel4", 4],
        ["handcuffsLock", 17],
        ["harp_pling", 15],
        ["hat", 15],
        ["hauntedHorrorImpact", 3],
        ["headshot_04", 8],
        ["headshot_06", 8],
        ["headshot_08", 8],
        ["headshot_11", 8],
        ["hit1", 20],
        ["hit2", 20],
        ["hit3", 20],
        ["hoeTill1", 18],
        ["hoeTill2", 18],
        ["hoeTill3", 18],
        ["hoeTill4", 18],
        ["horrorAccent1", 3],
        ["horrorFright", 3],
        ["horrorMaleDrone", 3],
        ["horseHurt1", 14],
        ["horseHurt2", 14],
        ["horseIdle1", 14],
        ["horseIdle2", 14],
        ["horseIdle3", 14],
        ["indicatorTick", 1],
        ["intensiveRainLoop", 3],
        ["jobComplete", 16],
        ["keysJingle", 22],
        ["kidsPlaying", 22],
        ["knightGrunt1", 14],
        ["knightGrunt2", 14],
        ["knightGrunt3", 14],
        ["laugh1", 18],
        ["laugh2", 18],
        ["laugh3", 18],
        ["lavaFlow", 0],
        ["levelup", 15],
        ["lowDrum1", 15],
        ["lowDrum2", 15],
        ["lowDrum3", 15],
        ["magicAccent1", 18],
        ["magicAccent2", 18],
        ["magicAccent3", 18],
        ["magicAccent4", 18],
        ["messageReceive", 16],
        ["metalDoorKnock", 3],
        ["ominousBellHit", 3],
        ["parkBirds", 22],
        ["phoneNotify", 16],
        ["phoneTap", 16],
        ["phoneVibrate", 16],
        ["pickUp", 4],
        ["pigHurt1", 14],
        ["pigHurt2", 14],
        ["pigHurt3", 14],
        ["pigOink1", 14],
        ["pigOink2", 14],
        ["pigOink3", 14],
        ["pigOink4", 14],
        ["pigOink5", 14],
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
        ["radioBeep", 17],
        ["radioChatter", 17],
        ["reaverAttack1", 14],
        ["reaverAttack2", 14],
        ["reaverAttack3", 14],
        ["reaverGrunt1", 14],
        ["reaverGrunt2", 14],
        ["reaverGrunt3", 14],
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
        ["rocketEngineLoop", 21],
        ["rpgBeltCloth1", 19],
        ["rpgBeltCloth2", 19],
        ["rpgBeltHandle1", 19],
        ["rpgBeltHandle2", 19],
        ["rpgBookClose", 19],
        ["rpgBookFlip1", 19],
        ["rpgBookFlip2", 19],
        ["rpgBookFlip3", 19],
        ["rpgBookOpen", 19],
        ["rpgBookPlace1", 19],
        ["rpgBookPlace2", 19],
        ["rpgBookPlace3", 19],
        ["rpgChop", 19],
        ["rpgCloth1", 19],
        ["rpgCloth2", 19],
        ["rpgCloth3", 19],
        ["rpgCloth4", 19],
        ["rpgCreak1", 19],
        ["rpgCreak2", 19],
        ["rpgCreak3", 19],
        ["rpgDoorClose1", 19],
        ["rpgDoorClose2", 19],
        ["rpgDoorClose3", 19],
        ["rpgDoorClose4", 19],
        ["rpgDoorOpen1", 19],
        ["rpgDoorOpen2", 19],
        ["rpgDrawKnife1", 19],
        ["rpgDrawKnife2", 19],
        ["rpgDrawKnife3", 19],
        ["rpgDropLeather", 19],
        ["rpgFootstep00", 19],
        ["rpgFootstep01", 19],
        ["rpgFootstep02", 19],
        ["rpgFootstep03", 19],
        ["rpgFootstep04", 19],
        ["rpgFootstep05", 19],
        ["rpgFootstep06", 19],
        ["rpgFootstep07", 19],
        ["rpgFootstep08", 19],
        ["rpgFootstep09", 19],
        ["rpgHandleCoins1", 19],
        ["rpgHandleCoins2", 19],
        ["rpgHandleSmallLeather1", 19],
        ["rpgHandleSmallLeather2", 19],
        ["rpgKnifeSlice1", 19],
        ["rpgKnifeSlice2", 19],
        ["rpgMetalClick", 19],
        ["rpgMetalLatch", 19],
        ["rpgMetalPot1", 19],
        ["rpgMetalPot2", 19],
        ["rpgMetalPot3", 19],
        ["runningSteps", 17],
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
        ["sheepBaa1", 14],
        ["sheepBaa2", 14],
        ["sheepBaa3", 14],
        ["sheepBaa4", 14],
        ["sheepHurt1", 14],
        ["shopDoorbell", 22],
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
        ["sirenChirp", 17],
        ["sirenWail", 17],
        ["sirenYelp", 17],
        ["skeletonRattle1", 14],
        ["skeletonRattle2", 14],
        ["skeletonRattle3", 14],
        ["skeletonRattle4", 14],
        ["snare", 15],
        ["snow1", 4],
        ["snow2", 4],
        ["snow3", 4],
        ["snow4", 4],
        ["sonarBeep", 15],
        ["splash1", 18],
        ["stagGrunt1", 14],
        ["stagHurt1", 14],
        ["stalkerAttack1", 14],
        ["stalkerIdle1", 14],
        ["step_cloth1", 20],
        ["step_cloth2", 20],
        ["step_cloth3", 20],
        ["step_cloth4", 20],
        ["step_grass1", 20],
        ["step_grass2", 20],
        ["step_grass3", 20],
        ["step_grass4", 20],
        ["step_grass5", 20],
        ["step_gravel1", 20],
        ["step_gravel2", 20],
        ["step_gravel3", 20],
        ["step_gravel4", 20],
        ["step_sand2", 20],
        ["step_sand3", 20],
        ["step_sand4", 20],
        ["step_sand5", 20],
        ["step_snow1", 20],
        ["step_snow2", 20],
        ["step_snow3", 20],
        ["step_snow4", 20],
        ["step_stone1", 20],
        ["step_stone2", 20],
        ["step_stone3", 20],
        ["step_stone4", 20],
        ["step_stone5", 20],
        ["step_stone6", 20],
        ["step_wood1", 20],
        ["step_wood2", 20],
        ["step_wood3", 20],
        ["step_wood4", 20],
        ["step_wood5", 20],
        ["step_wood6", 20],
        ["stone1", 4],
        ["stone2", 4],
        ["stone3", 4],
        ["stone4", 4],
        ["stunZap", 17],
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
        ["successfulBowHit", 18],
        ["suspenseRiser", 3],
        ["sweep6", 20],
        ["thunderRain", 3],
        ["tillPurchase", 16],
        ["trapdoorOpen", 18],
        ["trumpetFlare", 15],
        ["trumpetNote1", 15],
        ["trumpetNote2", 15],
        ["trumpetNote3", 15],
        ["tyreScreech", 1],
        ["vanIdleLoop", 1],
        ["warperGrunt1", 14],
        ["warperGrunt2", 14],
        ["warperGrunt3", 14],
        ["warperGrunt4", 14],
        ["warperGrunt5", 14],
        ["warperPhase1", 14],
        ["warperPhase2", 14],
        ["whistle", 17],
        ["wood1", 4],
        ["wood2", 4],
        ["wood3", 4],
        ["wood4", 4],
        ["wraithGrunt1", 14],
        ["wraithGrunt2", 14],
        ["wraithHurt", 14],
        ["zapAccent1", 3],
        ["zapAccent2", 3]
      ],
      Wr = or.map((YY => {
        let [rY] = YY;
        return rY
      })),
      Er = Uint8Array.from(or, (YY => {
        let [, rY] = YY;
        return rY
      })),
      mr = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Vr = 8;
    var Sr = DY(36167),
      lr = DY(275);
    const Tr = 2 ** Qr.length - 1;
    class er {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lr.b;
        this.sheet = YY, this.onError = rY, this.idle = DY, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = YY => {
          this.cancelIdle = null;
          try {
            if (YY.timeRemaining() >= 1) {
              let YY = this.queue.shift();
              for (; void 0 !== YY && !this.load(YY);) YY = this.queue.shift()
            }
          } catch (rY) {
            this.onError(rY)
          } finally {
            this.schedule()
          }
        }
      }
      preload(YY) {
        const rY = YY & Tr & ~this.asked;
        if (0 !== rY) {
          this.asked |= rY;
          for (let YY = 0; YY < Qr.length; YY++) rY & 1 << YY && this.queue.push(YY);
          this.schedule()
        }
      }
      cancel() {
        var YY;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (YY = this.cancelIdle) || void 0 === YY || YY.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(YY) {
        const rY = this.sheet(YY, !1),
          DY = this.sheet(YY, !0),
          [FY, AY] = "unloaded" === rY.state() && "unloaded" !== DY.state() ? [DY, rY] : [rY, DY],
          IY = this.gen,
          RY = () => {
            try {
              IY === this.gen && "unloaded" === AY.state() && AY.load()
            } catch (YY) {
              this.onError(YY)
            }
          },
          OY = FY.state();
        return "unloaded" === OY ? (FY.once("load", RY), FY.load(), !0) : "unloaded" === AY.state() && ("loading" === OY ? (FY.once("load", RY), !1) : (AY.load(), !0))
      }
    }
    var Nr = DY(40012);
    const Br = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      cr = yr.d.jW * yr.d.playerEyeToHeightRatio,
      Kr = [0, 0, -1, 0, 1, 0],
      Hr = Qr.indexOf("note");

    function zr(YY) {
      return YY >= 0 ? Math.min(1, YY) : 0
    }

    function Zr(YY) {
      var rY;
      let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const FY = function(YY) {
        let rY = 0,
          DY = Wr.length;
        for (; rY < DY;) {
          const FY = rY + DY >>> 1;
          Wr[FY] < YY ? rY = FY + 1 : DY = FY
        }
        return rY
      }(YY);
      if ("" === YY || null === (rY = Wr[FY]) || void 0 === rY || !rY.startsWith(YY)) return -1;
      if (Wr[FY] === YY) return FY;
      let AY = FY + 1;
      for (; AY < Wr.length && Wr[AY].startsWith(YY);) AY++;
      return FY + Math.floor(DY() * (AY - FY))
    }
    class Cr {
      constructor(YY, rY, DY, FY, AY) {
        this.group = YY, this.loudness = rY, this.startMs = DY, this.howl = FY, this.host = AY, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const YY = this.host.alive(this.id);
        return YY ? 1e3 * this.howl.duration(this.id) / YY.rate : 0
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
    class fr {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          FY = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = YY, this.listener = rY, this.now = DY, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Sr.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: YY => this.aliveVoice(YY),
          started: YY => this.started.has(YY),
          drop: YY => {
            var rY;
            null === (rY = this.live.get(YY)) || void 0 === rY || rY.howl.stop(YY), this.forget(YY)
          }
        }, this.handlers = {
          playSound: (YY, rY, DY, FY, AY, IY, RY, OY, gY) => {
            if (FY >= Wr.length) return;
            const aY = 0 !== (AY & yY.Zd.Loop);
            AY & yY.Zd.TwoD ? this.start(FY, !1, RY, IY, OY, aY) : this.startSpatial(FY, RY, IY, OY, aY, YY, rY, DY, gY, this.earDistSq(YY, rY, DY))
          },
          soundPos: (YY, rY, DY, FY) => {
            const AY = this.core.get(FY);
            var IY;
            void 0 !== AY && (null === (IY = this.live.get(AY)) || void 0 === IY || IY.howl.pos(DY, rY, YY, AY))
          },
          soundSet: (YY, rY, DY, FY) => {
            const AY = this.core.get(YY),
              IY = void 0 === AY ? void 0 : this.live.get(AY);
            void 0 !== AY && IY && (this.setRel(AY, rY), IY.rate = DY, IY.howl.rate(DY, AY), IY.spatial && IY.howl.pannerAttr({
              refDistance: FY
            }, AY))
          },
          soundFade: (YY, rY, DY, FY) => {
            const AY = this.core.get(YY);
            void 0 !== AY && this.fade(AY, rY, DY, 0 !== (FY & yY.Wd.StopAfter))
          },
          soundStop: YY => {
            const rY = this.core.get(YY);
            var DY;
            void 0 !== rY && (null === (DY = this.live.get(rY)) || void 0 === DY || DY.howl.stop(rY), this.forget(rY))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new er(((YY, rY) => this.sheet(YY, rY)), (YY => {
          this.errors++, console.error("Audio preload failed", YY)
        }), FY)
      }
      prepare() {
        for (let YY = 0; YY < Qr.length; YY++) this.sheet(YY, !1), this.sheet(YY, !0)
      }
      preload(YY) {
        this.loader.preload(YY)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(YY, rY, DY, FY) {
        if (YY < yY.m.PlaySound || YY > yY.m.SoundReset) return !1;
        try {
          return (0, yY.je)(YY, rY, DY, FY, this.handlers)
        } catch (AY) {
          return this.errors++, console.error("Audio event failed", AY), !0
        }
      }
      applyListener(YY) {
        const rY = this.nextPose;
        for (let FY = 0; FY < 3; FY++) rY[2 - FY] = yY.v.listener(YY, 0, FY), rY[5 - FY] = yY.v.forward(YY, 0, FY), rY[8 - FY] = yY.v.up(YY, 0, FY);
        0 === rY[3] && 0 === rY[4] && 0 === rY[5] && rY.set(this.posed ? this.pose.subarray(3) : Kr, 3);
        for (let FY = 0; FY < 9; FY++)
          if (!Number.isFinite(rY[FY])) return;
        const DY = this.pose;
        if (this.posed) {
          let YY = !0;
          for (let FY = 0; FY < 9 && YY; FY++) YY = rY[FY] === DY[FY];
          if (YY) return
        }
        this.listener.apply(rY) && (DY.set(rY), this.posed = !0)
      }
      playGame(YY, rY, DY, FY, AY, IY, RY) {
        const OY = Zr(YY);
        if (OY < 0) return Nr.b;
        if (!DY) {
          const {
            howl: YY,
            id: DY
          } = this.start(OY, !1, rY, 0, 1, RY);
          return this.gameSound(YY, DY, !1)
        }
        const gY = DY[0],
          aY = DY[1] + cr,
          vY = DY[2];
        if (!Number.isFinite(gY) || !Number.isFinite(aY) || !Number.isFinite(vY)) return Nr.b;
        let uY;
        if (FY) {
          const YY = gY - FY[0],
            rY = aY - FY[1],
            DY = vY - FY[2];
          if (uY = YY * YY + rY * rY + DY * DY, uY > AY * AY) return Nr.b
        } else uY = this.earDistSq(gY, aY, vY);
        const sY = this.startSpatial(OY, rY, 0, 1, RY, gY, aY, vY, IY, uY);
        return sY ? this.gameSound(sY.howl, sY.id, !0) : Nr.b
      }
      setMaster(YY, rY) {
        this.level = zr(YY);
        const DY = rY ? this.level : 0;
        if (DY !== this.master) {
          this.master = DY;
          for (const [YY, rY] of this.live) rY.fadeMs = 0, rY.gain = rY.rel * this.master, rY.howl.volume(rY.gain, YY)
        }
      }
      stopCore() {
        for (const rY of [...this.core.values()]) {
          var YY;
          null === (YY = this.live.get(rY)) || void 0 === YY || YY.howl.stop(rY)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [YY, rY] of [...this.live]) rY.howl.stop(YY), this.forget(YY);
        this.core.clear()
      }
      gameSound(YY, rY, DY) {
        const FY = {
          stop: () => (this.live.has(rY) && YY.stop(rY), FY),
          fade: (YY, DY, AY) => {
            var IY, RY;
            const OY = this.level > 0 ? DY / this.level : DY > 0 && null !== (IY = null === (RY = this.live.get(rY)) || void 0 === RY ? void 0 : RY.rel) && void 0 !== IY ? IY : 0;
            return this.fade(rY, OY, AY, !1), FY
          },
          rate: DY => {
            const AY = this.live.get(rY);
            return AY && (AY.rate = function(YY) {
              return YY > 0 && YY < 1 / 0 ? YY : 1
            }(DY), YY.rate(AY.rate, rY)), FY
          },
          getVolume: () => {
            var YY, DY;
            return (null !== (YY = null === (DY = this.live.get(rY)) || void 0 === DY ? void 0 : DY.rel) && void 0 !== YY ? YY : 0) * this.level
          },
          getRelativeVolume: () => {
            var YY, DY;
            return null !== (YY = null === (DY = this.live.get(rY)) || void 0 === DY ? void 0 : DY.rel) && void 0 !== YY ? YY : 0
          },
          setRelativeVolume: YY => (this.setRel(rY, YY), FY),
          setPannerAttr: AY => {
            if (DY && this.live.has(rY)) {
              const DY = {
                ...Br,
                refDistance: vr.g
              };
              for (const [YY, rY] of Object.entries(AY)) "number" !== typeof rY && "string" !== typeof rY || (DY[YY] = rY);
              YY.pannerAttr({
                coneOuterAngle: DY.coneOuterAngle
              }, rY), YY.pannerAttr(DY, rY)
            }
            return FY
          },
          setPosition: AY => (DY && this.live.has(rY) && Number.isFinite(AY[0] + AY[1] + AY[2]) && YY.pos(AY[2], AY[1], AY[0], rY), FY)
        };
        return FY
      }
      startSpatial(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        const vY = this.sheet(Er[YY], !0);
        let uY = null;
        if (!AY) {
          if (this.failed.has(vY)) return null;
          const DY = Er[YY] === Hr ? null : (0, Sr.j)(Wr[YY]),
            FY = (0, Sr.f)(zr(rY), Math.sqrt(aY), gY);
          if (uY = new Cr(DY, FY, this.now(), vY, this.voiceHost), !this.voices.admit(uY)) return null
        }
        const sY = this.start(YY, !0, rY, DY, FY, AY);
        return uY && (uY.id = sY.id, uY.direct = "loaded" === vY.state() && !vY._playLock), vY.pannerAttr({
          coneOuterAngle: 360
        }, sY.id), vY.pannerAttr({
          ...Br,
          refDistance: gY
        }, sY.id), vY.pos(OY, RY, IY, sY.id), sY
      }
      aliveVoice(YY) {
        const rY = this.live.get(YY);
        if (!rY) return;
        const DY = rY.howl._soundById(YY);
        if (DY && !DY._ended) return rY;
        this.forget(YY)
      }
      earDistSq(YY, rY, DY) {
        if (!this.posed) return 0;
        const FY = YY - this.pose[2],
          AY = rY - this.pose[1],
          IY = DY - this.pose[0];
        return FY * FY + AY * AY + IY * IY
      }
      start(YY, rY, DY, FY, AY, IY) {
        const RY = zr(DY),
          OY = this.sheet(Er[YY], rY);
        "unloaded" === OY.state() && OY.load();
        const gY = OY.play(Wr[YY]),
          aY = RY * this.master;
        return OY.volume(aY, gY), this.live.set(gY, {
          howl: OY,
          rel: RY,
          gain: aY,
          fadeFrom: aY,
          fadeAt: 0,
          fadeMs: 0,
          rate: AY,
          handle: FY,
          spatial: rY,
          stopTimer: void 0
        }), 0 !== FY && this.core.set(FY, gY), 1 !== AY && OY.rate(AY, gY), IY && OY.loop(!0, gY), {
          howl: OY,
          id: gY
        }
      }
      sheet(YY, rY) {
        const DY = 2 * YY + (rY ? 1 : 0);
        let FY = this.sheets.get(DY);
        if (!FY) {
          const AY = this.createHowl(Qr[YY], rY);
          AY.on("end", (YY => {
            AY.loop(YY) || this.forget(YY)
          })), AY.on("stop", (YY => {
            this.forget(YY)
          })), AY.on("play", (YY => {
            this.live.has(YY) && this.started.add(YY)
          })), AY.on("loaderror", (YY => {
            if ("loaded" !== AY.state()) {
              this.failed.add(AY);
              for (const [YY, rY] of this.live) rY.howl === AY && this.forget(YY)
            } else "number" === typeof YY && this.forget(YY)
          })), this.sheets.set(DY, AY), FY = AY
        }
        return FY
      }
      setRel(YY, rY) {
        const DY = this.live.get(YY);
        DY && (jr(DY), DY.fadeMs = 0, DY.rel = zr(rY), DY.gain = DY.rel * this.master, DY.howl.volume(DY.gain, YY))
      }
      fade(YY, rY, DY, FY) {
        const AY = this.live.get(YY);
        if (!AY) return;
        jr(AY);
        const {
          howl: IY
        } = AY, RY = this.gainNow(AY);
        AY.rel = zr(rY), AY.gain = AY.rel * this.master;
        const OY = DY > 0 ? Math.min(DY, 65535) : 0,
          gY = 0 === OY || RY === AY.gain;
        AY.fadeMs = gY ? 0 : OY, gY ? IY.volume(AY.gain, YY) : (AY.fadeFrom = RY, AY.fadeAt = this.now(), IY.fade(RY, AY.gain, OY, YY)), FY && (gY ? IY.stop(YY) : AY.stopTimer = setTimeout((() => {
          AY.stopTimer = void 0, IY.stop(YY)
        }), OY))
      }
      gainNow(YY) {
        if (YY.fadeMs > 0) {
          const rY = (this.now() - YY.fadeAt) / YY.fadeMs;
          if (rY < 1) return YY.fadeFrom + (YY.gain - YY.fadeFrom) * Math.max(0, rY);
          YY.fadeMs = 0
        }
        return YY.gain
      }
      forget(YY) {
        this.started.delete(YY);
        const rY = this.live.get(YY);
        rY && (jr(rY), this.live.delete(YY), 0 !== rY.handle && this.core.get(rY.handle) === YY && this.core.delete(rY.handle))
      }
    }

    function jr(YY) {
      void 0 !== YY.stopTimer && (clearTimeout(YY.stopTimer), YY.stopTimer = void 0)
    }
    var hr = DY(39717),
      dr = DY(38466);
    class Jr {
      constructor(YY, rY, DY, FY) {
        this.key = YY, this.model = rY, this.host = FY, this.gu = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.HFY = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Ky = !1, this.gu = Math.max(1, Math.ceil(DY)), this.records = new Float32Array(this.gu * gr.b), this.isDirty = new Uint8Array(this.gu), this.tail = new Uint8Array(this.gu * yY.kc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(FY.cmd())
      }
      setOrigin(YY, rY, DY) {
        this.origin[0] = YY, this.origin[1] = rY, this.origin[2] = DY
      }
      markDirty(YY) {
        !this.Ky && YY >= 0 && YY < this.gu && YY < yY.kc.Max && this.ty(YY, YY + 1)
      }
      commit(YY) {
        if (this.Ky) return;
        (YY = Math.min(Math.max(Math.floor(YY), 0), this.gu, yY.kc.Max)) > this.count && this.ty(this.count, YY), this.count = YY;
        const {
          origin: rY,
          sentOrigin: DY,
          dirtyList: FY
        } = this, AY = this.HFY !== YY, IY = DY[0] !== rY[0] || DY[1] !== rY[1] || DY[2] !== rY[2];
        if (0 === FY.length && !AY && !IY) return;
        const RY = this.host.cmd();
        if (!RY || !this.make(RY)) return;
        const OY = FY.length,
          {
            records: gY,
            tailView: aY
          } = this;
        for (let vY = 0; vY < OY; vY++) {
          const YY = FY[vY],
            rY = YY * gr.b,
            DY = vY * yY.kc.Bytes,
            AY = 0 !== gY[rY + gr.d] ? yY.kc.Hidden : 0;
          aY.setUint32(DY, (YY | AY) >>> 0, !0), aY.setFloat32(DY + 4, gY[rY], !0), aY.setFloat32(DY + 8, gY[rY + 1], !0), aY.setFloat32(DY + 12, gY[rY + 2], !0)
        }
        if ((0, yY.Le)(RY, 0, this.key, YY, rY, OY, this.tailOf(OY))) {
          for (let YY = 0; YY < OY; YY++) this.isDirty[FY[YY]] = 0;
          FY.length = 0, this.HFY = YY, DY[0] = rY[0], DY[1] = rY[1], DY[2] = rY[2]
        }
      }
      grow(YY) {
        (YY = Math.ceil(YY)) <= this.gu || this.Ky || (this.records = (0, dr.d)(this.records, new Float32Array(YY * gr.b)), this.isDirty = (0, dr.d)(this.isDirty, new Uint8Array(YY)), this.tail = new Uint8Array(YY * yY.kc.Bytes), this.tailView = new DataView(this.tail.buffer), this.gu = YY)
      }
      dispose() {
        this.Ky || (this.Ky = !0, this.host.Ky(this, this.made ? this.key : null))
      }
      make(YY) {
        if (!this.made && YY) {
          const {
            item: rY,
            scale: DY,
            yaw: FY
          } = this.model;
          this.made = (0, yY.Re)(YY, 0, this.key, rY, DY, FY)
        }
        return this.made
      }
      tailOf(YY) {
        const rY = YY * yY.kc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === rY || (this.tailCut = this.tail.subarray(0, rY)), this.tailCut
      }
      ty(YY, rY) {
        const {
          dirtyList: DY,
          isDirty: FY
        } = this;
        for (let AY = YY; AY < rY; AY++) 0 === FY[AY] && (FY[AY] = 1, DY.push(AY))
      }
    }
    var Mr = DY(616);
    class wr {
      constructor(YY) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: YY,
          owes: YY => {
            this.owing.add(YY)
          },
          settled: (YY, rY) => {
            this.owing.delete(YY), rY && this.live.delete(YY)
          }
        }
      }
      create(YY, rY) {
        if (DY = YY, !Mr.k.includes(DY)) return null;
        var DY;
        const FY = new br(++this.keys, vY.j.indexOf(YY), rY, this.host);
        return this.live.add(FY), FY
      }
      disposeAll() {
        for (const YY of [...this.live]) YY.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const YY = this.host.cmd();
        for (const rY of this.owing)
          if (!rY.sync(YY)) return
      }
    }
    class br {
      constructor(YY, rY, DY, FY) {
        this.key = YY, this.lifeform = rY, this.scale = DY, this.host = FY, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Ky = !1, this.sync()
      }
      setPose(YY, rY) {
        this.Ky || (this.feet[0] = YY[0], this.feet[1] = YY[1], this.feet[2] = YY[2], this.yaw = rY, this.owed |= 2, this.sync())
      }
      setVisible(YY) {
        this.Ky || YY === this.visible || (this.visible = YY, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Ky || (this.Ky = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(YY) ? (this.host.settled(this, this.Ky), !0) : (this.host.owes(this), !1)
      }
      write(YY) {
        if (!YY) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, yY.Ye)(YY, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const rY = (2 & this.owed ? yY.Oc.Pose : 0) | (4 & this.owed ? yY.Oc.Visible : 0);
        if (0 !== rY) {
          if (!(0, yY.Xe)(YY, 0, this.key, rY, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, yY.Te)(YY, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Xr = DY(40152);

    function qr(YY, rY, DY, FY) {
      return (0, Xr.b)(), (0, yY.Ff)(YY, rY, DY, FY)
    }
    var pr = DY(38475),
      kr = DY(39699);
    const Gr = [0, 0, 0],
      xr = [0, 0, 0],
      nr = [0, 0, 0],
      Pr = [0, 0, 0],
      Ur = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Lr = [0, 0, 0],
      tr = [0, 0],
      YD = [1, 1, 1],
      rD = 1 / 3;
    const DD = ar.f;

    function FD(YY) {
      const rY = ar.d[YY],
        DY = rY && ar.f[rY.mainMultiblock];
      return DY && {
        main: DY,
        x: rY.compX,
        y: rY.compY,
        z: rY.compZ
      }
    }

    function AD(YY) {
      if (null === YY || void 0 === YY) return yY.Yc;
      const rY = +YY;
      return Number.isInteger(rY) && rY >= -2147483648 && rY <= 2147483647 && String(rY) === String(YY) ? rY : yY.Yc
    }

    function ID(YY, rY, DY) {
      return (0, yY.Jf)(YY, 0, rY, null !== DY && void 0 !== DY ? DY : Number.NaN)
    }
    class RD {
      constructor(YY) {
        this.deps = YY, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new pr.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (YY => {
          var rY, DY;
          null === (rY = (DY = this.deps).setLocalOptions) || void 0 === rY || rY.call(DY, YY)
        })), this.mobModels = new wr((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Ky: (YY, rY) => {
            this.livePools.delete(YY), null !== rY && (this.owedFrees.push(rY), this.flushOwed())
          }
        }, this.api = YY.api, this.live = YY.live, this.chunks = YY.chunks, this.items = YY.items, this.tables = YY.tables
      }
      isLocal(YY) {
        return null !== YY && void 0 !== YY && +YY === this.api.localId
      }
      assertLocal(YY, rY) {
        if (!this.isLocal(YY)) throw new Error(`Attempted to ${rY} for a player that is not the local player`)
      }
      lE(YY) {
        const rY = this.api.lE(YY);
        if (!rY) throw new Error(`Entity ${YY} has no replicated position`);
        return rY
      }
      checkValid(YY) {
        return !!this.deps.isSessionLive() && (null === YY || void 0 === YY || this.api.checkValid(YY))
      }
      isAlive(YY) {
        return !1 !== this.api.isAlive(YY)
      }
      getItemStat(YY, rY, DY) {
        return this.isLocal(YY) || null !== YY && "Player" === this.api.getEntityType(YY) ? this.tables.getItemStat(rY, DY) : this.tables.getDefaultItemStat(rY, DY)
      }
      getClientOption(YY, rY) {
        return this.assertLocal(YY, "get a client option"), this.tables.getClientOption(rY)
      }
      openShop(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(YY, "open shop"), RY.g.vo("showShopFromServer", {
          toggle: rY,
          QD: DY
        }, !0)
      }
      sendMessage(YY, rY, DY) {
        this.assertLocal(YY, "send a message");
        const FY = "string" === typeof rY ? [{
          str: rY,
          style: DY
        }] : rY;
        RY.g.vo("chat", {
          content: FY
        }, !0)
      }
      getEntityType(YY) {
        return this.api.getEntityType(YY)
      }
      getEntityName(YY) {
        const rY = AD(YY);
        return rY === yY.Yc ? void 0 : (0, hr.l)(this.api, rY)
      }
      hasEffect(YY, rY) {
        const DY = AD(YY);
        return DY !== yY.Yc && (0, hr.h)(this.api, DY, rY)
      }
      getMetaInfo(YY) {
        return this.tables.getMetaInfo(YY)
      }
      getPlayerDbId(YY) {
        return this.assertLocal(YY, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(YY, rY, DY) {
        if (!this.chunks.dataCleared(YY, rY, DY)) return (0, hr.d)(this.api, YY, rY, DY)
      }
      Rl(YY, rY, DY, FY) {
        this.setBlockId(YY, rY, DY, this.tables.getItemId(FY))
      }
      setOtherEntitySetting(YY, rY, DY, FY) {
        if (!this.isLocal(YY)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(yY.gd, DY)) throw new Error(`Unknown other-entity setting ${DY}`);
        const AY = yY.gd[DY],
          IY = AD(rY);
        if (IY === yY.Yc || !this.deps.beforeWrite()) return;
        const RY = (0, hY.f)(FY);
        if (RY.length > 16384) throw new Error(`The other-entity setting ${DY}'s value is over 16384 bytes`);
        const OY = this.api.memoryView(Uint8Array, this.api.scratch(), RY.length, "set_other_entity_setting's value");
        OY && (OY.set(RY), this.api.queries.setOtherEntitySetting(IY, AY, RY.length))
      }
      getPositionView(YY) {
        return this.live.position(+YY)
      }
      readDrawnPosition(YY, rY) {
        return this.api.readDrawnPosition(AD(YY), rY)
      }
      getDrawnHeading(YY) {
        const rY = AD(YY),
          DY = (rY === yY.Yc ? 0 : this.api.queries.directorEntity(rY)) >= yY.lb.BYTES ? this.api.memoryData(this.api.scratch(), yY.lb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!DY) return null;
        if (1 === yY.lb.headingIsDrawn(DY, 0)) return yY.lb.heading(DY, 0);
        const FY = this.api.apiView;
        return this.isLocal(YY) && 0 === (yY.s.playerFlags(FY, 0) & yY.Cd.FreeCam) ? yY.s.heading(FY, 0) : null
      }
      getLocalPlayerMovement() {
        const YY = yY.s.playerFlags(this.api.apiView, 0);
        return 0 === (YY & yY.Cd.Replay) && this.api.readDrawnPosition(this.api.localId, nr) ? {
          onGround: 0 !== (YY & yY.Cd.OnGround),
          jumpHeld: 0 !== (YY & yY.Cd.JumpHeld)
        } : null
      }
      rrY(YY) {
        return this.isLocal(YY) ? this.items.ja() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var YY, rY;
        return "Gun" === (null === (YY = this.aliveHeld()) || void 0 === YY || null === (rY = YY.typeObj) || void 0 === rY ? void 0 : rY.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.ja()
      }
      isCrosshairShown() {
        var YY, rY;
        const DY = (0, ur.c)(FY.b.get("crosshairGameView"), FY.b.get("crosshairShownOverride"));
        if (null !== DY) return DY;
        const AY = null === (YY = this.aliveHeld()) || void 0 === YY ? void 0 : YY.typeObj,
          IY = "Gun" === (null === AY || void 0 === AY ? void 0 : AY.type),
          RY = IY || !0 === (null === AY || void 0 === AY ? void 0 : AY.showsAimingUi),
          OY = 0 === (yY.s.playerFlags(this.api.apiView, 0) & yY.Cd.ZoomFirstPerson),
          gY = null !== (rY = this.tables.getClientOption("gunshotOrigin")) && void 0 !== rY ? rY : null;
        return (0, ur.i)({
          gun: IY,
          aimable: RY
        }, OY, (0, sr.d)(), gY)
      }
      setCrosshairShown(YY) {
        FY.b.set({
          crosshairShownOverride: YY
        })
      }
      getInventoryFreeSlotCount(YY) {
        return this.isLocal(YY) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(YY) {
        return this.isLocal(YY) ? this.items.selectedSlot : null
      }
      getItemSlot(YY, rY) {
        return this.isLocal(YY) ? this.items.slot(rY) : null
      }
      swapInventorySlots(YY, rY) {
        return this.items.swap(YY, rY)
      }
      isPlayerCrouching(YY) {
        if (this.isLocal(YY)) return 0 !== (yY.s.playerFlags(this.api.apiView, 0) & yY.Cd.Crouching);
        const rY = AD(YY);
        return rY !== yY.Yc && 1 === this.api.queries.entityCrouching(rY)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (yY.s.playerFlags(this.api.apiView, 0) & yY.Cd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.o4()
      }
      getActionRay() {
        const YY = this.api.apiView;
        for (let rY = 0; rY < 3; rY++) Ur.origin[rY] = yY.s.K8(YY, 0, rY), Ur.direction[rY] = yY.s.actionDir(YY, 0, rY);
        return Ur
      }
      canModifyBlockAt(YY, rY, DY) {
        return 1 === this.api.queries.canModify(YY, rY, DY)
      }
      isSolidToPlayerBlockId(YY) {
        return this.tables.isSolidBlockId(YY) && !this.chunks.isWalkThrough(YY)
      }
      blockNameToBlockId(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(YY, rY)
      }
      blockIdToBlockName(YY) {
        return this.tables.nameOfId(YY)
      }
      SYY(YY, rY, DY, FY, AY) {
        return 1 === this.api.queries.terrainBlocked(FY, YY, rY, DY, AD(null !== AY && void 0 !== AY ? AY : null))
      }
      getChunkVersion(YY, rY, DY) {
        return this.chunks.version(YY, rY, DY)
      }
      scanBlocks(YY, rY, DY, FY, AY, IY, RY, OY) {
        return this.chunks.scan(YY, rY, DY, FY, AY, IY, RY, OY)
      }
      isBlockInLoadedChunk(YY, rY, DY) {
        return this.chunks.isLoaded(YY, rY, DY)
      }
      getBlockId(YY, rY, DY) {
        return this.chunks.rv(YY, rY, DY)
      }
      playSound(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(YY)) return null;
        const RY = this.playSoundFrom(rY, DY, AY, IY);
        return 1 === FY ? RY : RY.rate(FY)
      }
      playSoundFrom(YY, rY, DY, FY) {
        var AY, IY;
        const RY = this.deps.playSound;
        if (!RY) return Nr.b;
        const OY = null === DY || void 0 === DY ? void 0 : DY.zY,
          gY = null !== (AY = null === DY || void 0 === DY ? void 0 : DY.maxHearDist) && void 0 !== AY ? AY : vr.e,
          aY = null !== (IY = null === DY || void 0 === DY ? void 0 : DY.refDistance) && void 0 !== IY ? IY : vr.g;
        let vY = null;
        if (Array.isArray(OY)) Gr[0] = OY[0], Gr[1] = OY[1], Gr[2] = OY[2], vY = Gr;
        else if (void 0 !== OY && null !== OY) {
          const YY = AD(OY);
          if (!this.api.isLocal(YY)) {
            if (!this.api.readPosition(YY, Gr)) return Nr.b;
            vY = Gr
          }
        }
        return RY(YY, rY, vY, vY && this.ear(), gY, aY, FY)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, xr)) xr[1] += cr;
        else {
          const YY = this.api.apiView;
          if (0 === yY.s.viewProj(YY, 0, 3) && 0 === yY.s.viewProj(YY, 0, 7) && 0 === yY.s.viewProj(YY, 0, 11)) return null;
          for (let rY = 0; rY < 3; rY++) xr[rY] = yY.s.eye(YY, 0, rY)
        }
        return Number.isFinite(xr[0] + xr[1] + xr[2]) ? xr : null
      }
      setBlockId(YY, rY, DY, FY) {
        if (!Number.isInteger(FY) || FY < 0 || FY > 65535) throw new Error(`Invalid block id ${FY}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(YY, rY, DY)) return;
        const AY = Math.floor(YY),
          IY = Math.floor(rY),
          RY = Math.floor(DY),
          OY = this.predictedCells(AY, IY, RY, FY);
        if (1 === this.api.queries.Rl(AY, IY, RY, FY)) {
          for (let YY = 0; YY < OY.length; YY += 5) this.chunks.setOverlay(OY[YY], OY[YY + 1], OY[YY + 2], OY[YY + 3], 1 === OY[YY + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(YY, rY) {
        return this.deps.particles.create(YY, rY)
      }
      playParticleEffect(YY) {
        this.deps.particles.playEffect(YY)
      }
      burstParticlePreset(YY, rY, DY) {
        this.deps.particles.burstPreset(YY, rY, DY)
      }
      createGameMesh(YY, rY, DY) {
        const FY = ++this.meshKeys,
          AY = this.deps.cmd();
        if (!AY) return FY;
        const {
          look: IY,
          colour: RY
        } = function(YY) {
          switch (YY.kind) {
            case void 0:
            case "flatEmissive":
              return YY.onTop ? {
                look: yY.Qb.FlatOnTop,
                colour: [...YY.rgb, YY.alpha]
              } : YY.opaque ? {
                look: yY.Qb.FlatOpaque,
                colour: [...YY.rgb, 1]
              } : {
                look: yY.Qb.Flat,
                colour: [...YY.rgb, YY.alpha]
              };
            case "chevronPath":
              return {
                look: yY.Qb.Chevrons, colour: [...(0, ir.b)(YY.colour), YY.alpha]
              };
            case "furnaceFire":
              return {
                look: yY.Qb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(rY), OY = Math.floor(YY.positions.length / 3), gY = function(YY, rY) {
          const DY = Math.floor(YY.positions.length / 3),
            FY = YY.indices.length,
            AY = DY * (rY ? 5 : 3),
            IY = new Uint8Array(4 * (AY + FY)),
            RY = new DataView(IY.buffer);
          for (let aY = 0; aY < 3 * DY; aY++) RY.setFloat32(4 * aY, YY.positions[aY], !0);
          if (rY) {
            var OY;
            const rY = null !== (OY = YY.uvs) && void 0 !== OY ? OY : [];
            for (let YY = 0; YY < 2 * DY; YY++) {
              var gY;
              RY.setFloat32(4 * (3 * DY + YY), null !== (gY = rY[YY]) && void 0 !== gY ? gY : 0, !0)
            }
          }
          for (let aY = 0; aY < FY; aY++) RY.setUint32(4 * (AY + aY), YY.indices[aY], !0);
          return IY
        }(YY, (0, gr.f)(rY));
        return (0, yY.ye)(AY, 0, FY, IY, RY, DY, OY, YY.indices.length, gY) && this.liveMeshes.add(FY), FY
      }
      setGameMesh(YY, rY) {
        var DY;
        const FY = this.deps.cmd();
        if (!FY) return;
        let AY = 0;
        rY.anchor && (AY |= yY.Rb.Anchor, Lr[0] = rY.anchor[0], Lr[1] = rY.anchor[1], Lr[2] = rY.anchor[2]), void 0 !== rY.visible && (AY |= yY.Rb.Visible), rY.uvOffset && (AY |= yY.Rb.UvOffset, tr[0] = rY.uvOffset[0], tr[1] = rY.uvOffset[1]);
        const IY = null !== (DY = rY.visibility) && void 0 !== DY ? DY : 1;
        void 0 !== rY.visibility && (AY |= yY.Rb.Visibility), rY.scale && (AY |= yY.Rb.Scale, YD[0] = rY.scale[0], YD[1] = rY.scale[1], YD[2] = rY.scale[2]), 0 !== AY && (0, yY.Fe)(FY, 0, YY, AY, rY.visible ? 1 : 0, Lr, tr, IY, YD)
      }
      disposeGameMesh(YY) {
        const rY = this.deps.cmd();
        rY && !(0, yY.Be)(rY, 0, YY) || this.liveMeshes.delete(YY)
      }
      hasPackModel(YY) {
        var rY, DY, FY;
        return null !== (rY = null === (DY = (FY = this.deps).hasPackModel) || void 0 === DY ? void 0 : DY.call(FY, YY)) && void 0 !== rY && rY
      }
      disposeGameOutput() {
        const YY = YY => {
          try {
            YY()
          } catch (rY) {
            console.error("Error freeing client game output", rY)
          }
        };
        for (const rY of [...this.liveMeshes]) YY((() => {
          this.disposeGameMesh(rY)
        }));
        for (const rY of [...this.livePools]) YY((() => {
          rY.dispose()
        }));
        YY((() => {
          this.mobModels.disposeAll()
        })), YY((() => {
          this.setGroundArrowStyle(null)
        })), YY((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), YY((() => {
          this.setCrosshairShown(null)
        })), YY((() => {
          this.cameraTurn.dispose()
        })), YY((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(YY, rY) {
        const DY = this.tables.idOf(YY.item);
        if (void 0 === DY) return null;
        const FY = new Jr(++this.poolKeys, {
          item: DY,
          scale: YY.scale,
          yaw: YY.yaw
        }, rY, this.poolHost);
        return this.livePools.add(FY), FY
      }
      createMobModel(YY, rY) {
        return this.mobModels.create(YY, rY)
      }
      setRouteChevrons(YY) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !YY || 0 === YY.cells.length) return;
        const rY = `${YY.colour} ${YY.alpha}`;
        rY !== this.routeLook && (this.routeLook = rY, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(YY) {
          const [rY, DY, FY] = YY[0].pos, AY = [], IY = [], RY = [];
          return YY.forEach(((YY, OY) => {
            let {
              pos: gY,
              way: [aY, vY]
            } = YY;
            const uY = gY[0] - rY + .5,
              sY = gY[1] - DY + .04,
              iY = gY[2] - FY + .5,
              [yY, QY] = [.35 * -vY, .35 * aY],
              [oY, WY] = [OY * rD, (OY + 1) * rD],
              EY = AY.length / 3;
            AY.push(uY - .5 * aY + yY, sY, iY - .5 * vY + QY), AY.push(uY - .5 * aY - yY, sY, iY - .5 * vY - QY), AY.push(uY + .5 * aY + yY, sY, iY + .5 * vY + QY), AY.push(uY + .5 * aY - yY, sY, iY + .5 * vY - QY), IY.push(0, oY, 1, oY, 0, WY, 1, WY), RY.push(EY, EY + 1, EY + 2, EY + 1, EY + 3, EY + 2)
          })), {
            positions: AY,
            uvs: IY,
            indices: RY
          }
        }(YY.cells), {
          kind: "chevronPath",
          colour: YY.colour,
          alpha: YY.alpha
        }, YY.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(YY) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(YY, 250) / 1e3 * 1.2 * rD) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(YY) {
        this.pendingStyle = YY, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const YY = this.owedFrees;
        if (0 === YY.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const rY = this.deps.cmd();
        if (!rY) return YY.length = 0, void(this.pendingFar = void 0);
        let DY = 0;
        for (; DY < YY.length && (0, yY.Oe)(rY, 0, YY[DY]);) DY++;
        YY.splice(0, DY);
        const FY = this.pendingStyle;
        if (void 0 !== FY) {
          (FY ? (0, yY.Kf)(rY, 0, FY.width, FY.alpha, 1, FY.endAtSolidFace ? 1 : 0) : (0, yY.Kf)(rY, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const AY = this.pendingFar;
        void 0 !== AY && (0, yY.If)(rY, 0, null !== AY && void 0 !== AY ? AY : 0, null === AY ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(YY, rY) {
        const DY = this.deps.cmd(),
          FY = AD(YY);
        DY && FY !== yY.Yc && (0, yY.Nf)(DY, 0, FY, rY)
      }
      setFacingTolerance(YY, rY) {
        const DY = this.deps.cmd(),
          FY = AD(YY);
        DY && FY !== yY.Yc && ID(DY, FY, rY)
      }
      forEachEntity(YY) {
        const {
          api: rY
        } = this;
        for (let DY = 0; DY < rY.idStr.length; DY++) {
          const FY = rY.idStr[DY];
          null === FY || SY(rY.kinds[DY]) || YY(FY)
        }
      }
      getEntityInfo(YY) {
        return this.deps.entityInfo.get(YY)
      }
      isEntityInteractable(YY) {
        const rY = AD(YY);
        return rY !== yY.Yc && 1 === this.api.queries.entityInteractable(rY)
      }
      isLocalPlayer(YY) {
        return this.isLocal(YY)
      }
      getLineOwner(YY) {
        var rY;
        const DY = null === (rY = this.deps.entityInfo.get(YY)) || void 0 === rY ? void 0 : rY.meshOpts;
        if (!DY) return null;
        try {
          const {
            lineToEId: YY
          } = JSON.parse(DY);
          return null !== YY && void 0 !== YY ? YY : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const YY = this.api.apiView;
        return Pr[0] = yY.s.eye(YY, 0, 0), Pr[1] = yY.s.eye(YY, 0, 1), Pr[2] = yY.s.eye(YY, 0, 2), Pr
      }
      getCameraFar() {
        return yY.s.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(YY) {
        null !== YY && (this.farSet = !0), this.pendingFar = YY, this.flushOwed()
      }
      turnCamera(YY, rY) {
        this.cameraTurn.turn(YY, rY)
      }
      clearPickupDelay(YY) {
        const rY = this.deps.cmd(),
          DY = AD(YY);
        rY && DY !== yY.Yc && (0, yY.ne)(rY, 0, DY)
      }
      sendChat(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = this.deps.sendCmd();
        DY && qr(DY, 0, kr.d.Chat, (0, hY.f)((0, kr.j)({
          vv: YY,
          sv: rY
        })))
      }
      sendCommand(YY) {
        YY.length <= 119 && this.sendChat(`/${YY}`)
      }
      predictedCells(YY, rY, DY, FY) {
        const AY = this.chunks,
          IY = [],
          RY = (YY, rY, DY, FY, AY) => {
            IY.push(YY, rY, DY, FY, this.tables.blockRootId(AY) === this.tables.blockRootId(FY) ? 0 : 1)
          },
          OY = AY.rv(YY, rY, DY),
          gY = FD(OY);
        if (gY) {
          const [FY, IY, aY] = [YY - gY.x, rY - gY.y, DY - gY.z], vY = DD[AY.rv(FY, IY, aY)], uY = null === vY || void 0 === vY ? void 0 : vY.positions.some((YY => YY.id === OY && YY.x === gY.x && YY.y === gY.y && YY.z === gY.z));
          for (const YY of (uY && vY ? vY : gY.main).positions) AY.rv(FY + YY.x, IY + YY.y, aY + YY.z) === YY.id && RY(FY + YY.x, IY + YY.y, aY + YY.z, 0, YY.id)
        }
        const aY = FD(FY);
        if (aY)
          for (const uY of aY.main.positions) {
            const [FY, IY, OY] = [YY + uY.x - aY.x, rY + uY.y - aY.y, DY + uY.z - aY.z];
            RY(FY, IY, OY, uY.id, AY.rv(FY, IY, OY))
          } else RY(YY, rY, DY, FY, OY);
        const vY = this.tables;
        if ((0 !== vY.attachedTopOf(OY) || 0 !== vY.attachedTopOf(FY)) && AY.isLoaded(YY, rY + 1, DY)) {
          let gY = AY.rv(YY, rY + 1, DY);
          for (let FY = 0; FY < IY.length; FY += 5) IY[FY] === YY && IY[FY + 1] === rY + 1 && IY[FY + 2] === DY && (gY = IY[FY + 3]);
          const aY = this.attachedTopWrite(OY, FY, gY);
          void 0 !== aY && RY(YY, rY + 1, DY, aY, gY)
        }
        return IY
      }
      attachedTopWrite(YY, rY, DY) {
        const FY = this.tables,
          AY = FY.attachedTopOf(YY),
          IY = FY.attachedTopOf(rY),
          RY = 0 !== AY && 0 !== DY && FY.blockRootId(DY) === FY.blockRootId(AY);
        return 0 !== AY && 0 !== IY && FY.blockRootId(YY) === FY.blockRootId(rY) ? RY && DY !== IY ? IY : void 0 : 0 === IY || !RY && 0 !== DY ? RY ? 0 : void 0 : IY
      }
    }
    const OD = yY.hc + yY.jc * yY.qc.BYTES,
      gD = 2147483647,
      aD = new TextDecoder,
      vD = new TextEncoder,
      uD = Object.freeze({
        Ev: 0,
        da: null,
        amountAddedToSlot: 0
      }),
      sD = new Proxy({}, {
        get: () => () => yY.ed
      });

    function iD(YY) {
      return Number.isInteger(YY) && YY >= 0 && YY <= 65535
    }

    function yD(YY) {
      return Number.isInteger(YY) && YY >= 0 && YY <= 4294967295
    }
    class QD {
      constructor(YY) {
        this.deps = YY, this.lF = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(yY.jc), this.ids = new Uint16Array(yY.jc), this.amounts = new Uint16Array(yY.jc), this.attrRead = new Float64Array(yY.jc).fill(-1), this.stale = new Uint16Array(yY.jc), this.staleVersion = new Uint32Array(yY.jc), this.instances = new Uint32Array(yY.jc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(YY) {
        var rY;
        return Number.isInteger(YY) && YY >= 0 && YY < this.len && 0 !== this.ids[YY] && null !== (rY = this.facades[YY]) && void 0 !== rY ? rY : null
      }
      ja() {
        return this.slot(this.selected)
      }
      playerItems() {
        const YY = [];
        for (let rY = 0; rY < Math.min(yY.od, this.len); rY++) YY.push(this.slot(rY));
        return YY
      }
      freeSlots() {
        let YY = 0;
        for (let rY = 0; rY < Math.min(yY.od - yY.f, this.len); rY++) 0 === this.ids[rY] && YY++;
        return YY
      }
      amountOf(YY) {
        let rY = 0;
        for (let FY = 0; FY < Math.min(yY.od, this.len); FY++) {
          const AY = this.slot(FY);
          var DY;
          if ((null === AY || void 0 === AY ? void 0 : AY.name) === YY) rY += null !== (DY = AY.amount) && void 0 !== DY ? DY : 1
        }
        return rY
      }
      instance(YY) {
        var rY;
        return null !== (rY = this.instances[YY]) && void 0 !== rY ? rY : 0
      }
      watch(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      touch() {
        this.version++
      }
      flush(YY) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const DY of [...this.listeners]) try {
            DY()
          } catch (rY) {
            YY(rY)
          }
        }
      }
      chestOpened(YY, rY, DY) {
        this.lF[0] = YY, this.lF[1] = rY, this.lF[2] = DY, this.version++
      }
      refresh() {
        const YY = this.deps.api.apiView,
          rY = yY.s.inventoryViewPtr(YY, 0),
          DY = yY.s.inventoryVersion(YY, 0),
          FY = yY.s.selectedSlot(YY, 0);
        FY !== this.selected && (this.selected = FY, this.version++);
        const AY = yY.s.slotIcon(YY, 0);
        if (AY !== this.slotIconId && (this.slotIconId = AY, this.iconChanged = !0), rY === this.viewPtr && DY === this.viewVersion) return;
        this.viewPtr = rY, this.viewVersion = DY;
        const IY = this.deps.api.memoryData(rY, OD, 4, "the inventory view"),
          RY = IY ? Math.min(IY.getUint32(0, !0), yY.jc) : 0;
        RY !== this.len && (this.len = RY, this.version++);
        let OY = 0;
        for (let gY = 0; gY < yY.jc; gY++) {
          const YY = yY.hc + gY * yY.qc.BYTES,
            rY = null !== IY && gY < RY ? yY.qc.item(IY, YY) : 0;
          if (0 === rY || null === IY) {
            0 !== this.ids[gY] && (this.ids[gY] = 0, this.attrRead[gY] = -1, this.instances[gY]++, this.version++);
            continue
          }
          const DY = yY.qc.amount(IY, YY),
            FY = yY.qc.attrVersion(IY, YY);
          rY === this.ids[gY] && DY === this.amounts[gY] || this.fill(gY, rY, DY), FY !== this.attrRead[gY] && (this.stale[OY] = gY, this.staleVersion[OY] = FY, OY++)
        }
        OY > 0 && this.fetchAttributes(OY)
      }
      fill(YY, rY, DY) {
        const {
          tables: FY
        } = this.deps, AY = rY !== this.ids[YY];
        let IY = this.facades[YY];
        IY || (IY = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[YY] = IY), AY && (IY.name = FY.nameOfId(rY), IY.typeObj = FY.itemType(rY), IY.attributes = {
          customAttributes: {}
        }, this.attrRead[YY] = -1, this.instances[YY]++), IY.amount = 0 === DY ? null : DY, this.ids[YY] = rY, this.amounts[YY] = DY, this.version++
      }
      fetchAttributes(YY) {
        const {
          api: rY,
          onError: DY
        } = this.deps, FY = rY.memoryView(Uint16Array, rY.scratch(), YY, "item_attributes_batch's slots");
        if (!FY) return void this.markRead(YY);
        FY.set(this.stale.subarray(0, YY));
        const AY = rY.queries.itemAttributesBatch(YY),
          IY = 4294967295 === AY ? null : rY.memoryData(rY.scratch(), AY, 4, "item_attributes_batch's answer");
        if (!IY) return void this.markRead(YY);
        const RY = new Uint8Array(IY.buffer, IY.byteOffset, AY);
        for (let gY = 0; gY + 8 <= AY;) {
          const YY = IY.getUint16(gY, !0),
            rY = IY.getUint32(gY + 4, !0),
            FY = RY.subarray(gY + 8, gY + 8 + rY);
          gY += 8 + (0, sY.ee)(rY);
          const AY = this.facades[YY];
          if (AY && 0 !== this.ids[YY] && 0 !== rY) {
            try {
              AY.attributes = JSON.parse(aD.decode(FY))
            } catch (OY) {
              DY(OY)
            }
            this.version++
          }
        }
        this.markRead(YY)
      }
      markRead(YY) {
        for (let rY = 0; rY < YY; rY++) this.attrRead[this.stale[rY]] = this.staleVersion[rY]
      }
      swap(YY, rY) {
        return iD(YY) && iD(rY) && this.settle(this.queries().invSwap(YY, rY))
      }
      move(YY, rY, DY) {
        return iD(YY) && iD(rY) && yD(DY) && this.settle(this.queries().invMove(YY, rY, DY))
      }
      quickMove(YY, rY, DY, FY) {
        var AY, IY;
        if (!iD(YY) || !iD(rY) || !iD(DY) || null !== FY && !yD(FY)) return null;
        const RY = this.queries().invQuickMove(YY, rY, DY, null === FY ? -1 : Math.min(FY, gD)),
          OY = RY === yY.ed ? yY.Cb : null !== (AY = null === (IY = this.extras()) || void 0 === IY ? void 0 : IY[1]) && void 0 !== AY ? AY : yY.Cb;
        return this.settle(RY), OY === yY.Cb ? null : OY
      }
      remove(YY, rY, DY) {
        return iD(YY) && yD(rY) && this.settle(this.queries().invRemove(YY, rY, DY ? 1 : 0))
      }
      selectSlot(YY) {
        return iD(YY) && this.settle(this.queries().selectSlot(YY))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(YY, rY, DY) {
        if (!iD(YY) || !Number.isInteger(rY)) return !1;
        const [FY, AY, IY] = DY;
        return this.settle(this.queries().invEnchant(YY, rY, Math.floor(FY), Math.floor(AY), Math.floor(IY)))
      }
      craft(YY, rY, DY) {
        let FY;
        try {
          FY = this.deps.tables.getItemId(YY)
        } catch {
          return uD
        }
        if (!iD(rY) || null !== DY && (Number.isNaN(DY) || DY < 0)) return uD;
        const AY = null === DY || DY > gD ? -1 : Math.floor(DY),
          IY = this.queries().craft(FY, rY, AY);
        let RY = uD;
        const OY = IY === yY.ed ? null : this.extras();
        if (OY) {
          const [YY, rY, DY] = OY;
          RY = {
            Ev: YY,
            da: rY === yY.Cb ? null : rY,
            amountAddedToSlot: DY
          }
        }
        return this.settle(IY), RY
      }
      salvage(YY, rY, DY) {
        let FY;
        try {
          FY = this.deps.tables.getItemId(rY)
        } catch {
          return !1
        }
        return iD(YY) && Number.isInteger(DY) && this.settle(this.queries().salvage(YY, FY, Math.max(Math.min(DY, gD), -gD)))
      }
      craftingView(YY, rY, DY) {
        var FY;
        if (this.stopped) return null;
        const {
          api: AY,
          onError: IY
        } = this.deps, RY = YY ? vD.encode(YY) : null;
        if (null !== RY) {
          if (RY.length > 1024) return IY(new Error(`The crafting station ${YY}'s name is over 1024 bytes`)), null;
          const rY = AY.memoryView(Uint8Array, AY.scratch(), RY.length, "crafting_view's station");
          if (!rY) return null;
          rY.set(RY)
        }
        const OY = iD(rY) && iD(DY),
          gY = AY.queries.craftingView(null !== (FY = null === RY || void 0 === RY ? void 0 : RY.length) && void 0 !== FY ? FY : 0, OY ? rY : 0, OY ? DY : 0);
        return gY < yY.eb.BYTES ? (AY.reportCorruption(`crafting_view's answer of ${gY} bytes`), null) : AY.memoryData(AY.scratch(), gY, 1, "crafting_view's answer")
      }
      queries() {
        var YY, rY;
        return !1 === (null === (YY = (rY = this.deps).beforeOp) || void 0 === YY ? void 0 : YY.call(rY)) ? (this.stopped = !0, sD) : this.deps.api.queries
      }
      extras() {
        const {
          api: YY
        } = this.deps;
        return YY.memoryView(Uint32Array, YY.scratch(), 3, "a sync query's extra words")
      }
      settle(YY) {
        if (YY === yY.cd)(0, Xr.b)();
        else if (YY !== yY.ed) {
          const rY = this.deps.cmd();
          rY && function(YY, rY, DY) {
            return (0, Xr.b)(), (0, yY.Rf)(YY, rY, DY)
          }(rY, 0, YY) || this.deps.onError(new Error(`Sync op ${YY}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), YY !== yY.ed
      }
    }
    const oD = 1 / .6,
      WD = [0, 1, 0],
      ED = [0, 0, 0],
      mD = new Uint8Array(0),
      VD = 1.2 * yr.d.fW,
      SD = new TextEncoder,
      lD = [0, 0, 0],
      TD = [0, 0, 0],
      eD = new Map;

    function ND(YY) {
      let rY = eD.get(YY);
      return rY || (eD.size >= 64 && eD.clear(), rY = SD.encode(`{"emitRate":${YY}}`), eD.set(YY, rY)), rY
    }

    function BD(YY) {
      return Number.isFinite(YY) && YY > 0 ? YY : 0
    }

    function cD(YY, rY) {
      for (let DY = 0; DY < 3; DY++) {
        const FY = Math.abs(rY[DY]);
        lD[DY] = YY[DY] - FY, TD[DY] = 2 * FY
      }
      return Number.isFinite(lD[0] + lD[1] + lD[2] + TD[0] + TD[1] + TD[2])
    }

    function KD(YY, rY) {
      return "pos1" === YY || "pos2" === YY ? void 0 : rY
    }

    function HD(YY, rY, DY) {
      return YY.length > yY.yd.MaxOpts ? (DY(new Error(`${rY}'s particle opts are over ${yY.yd.MaxOpts} bytes of JSON`)), null) : YY
    }
    const zD = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class ZD {
      constructor(YY) {
        this.deps = YY, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(YY, rY) {
        var DY;
        const FY = this.sink(),
          AY = null !== (DY = rY.half) && void 0 !== DY ? DY : ED;
        if (!FY || this.live >= yY.yd.MaxLiveKeys || this.nextKey > yY.yd.MaxKey || !cD(rY.pos, AY)) return zD;
        const IY = this.nextKey,
          RY = HD(function(YY) {
            var rY, DY, FY;
            const AY = JSON.stringify({
              texture: "string" === typeof YY.texture ? YY.texture : "smokePuff",
              gu: YY.gu,
              minLifeTime: YY.minLifeTime,
              maxLifeTime: YY.maxLifeTime,
              minSize: YY.minSize,
              maxSize: YY.maxSize,
              minEmitPower: YY.minEmitPower,
              maxEmitPower: YY.maxEmitPower,
              emitRate: BD(YY.emitRate),
              gravity: null !== (rY = YY.gravity) && void 0 !== rY ? rY : ED,
              dir1: null !== (DY = YY.dir1) && void 0 !== DY ? DY : WD,
              dir2: null !== (FY = YY.dir2) && void 0 !== FY ? FY : WD,
              colorGradients: YY.colorGradients,
              blendMode: YY.blendMode
            });
            return SD.encode(AY)
          }(YY), "createParticles", this.deps.onError);
        return RY && (0, yY.af)(FY, 0, IY, 0, yY.yd.PresetNone, 0, lD, TD, RY) ? (this.nextKey++, this.live++, this.started = !0, new CD(this, this.session, IY, YY, AY)) : zD
      }
      playEffect(YY) {
        const rY = this.sink(),
          {
            pos1: DY,
            pos2: FY
          } = YY;
        if (!rY || !DY || !FY) return;
        for (let IY = 0; IY < 3; IY++) lD[IY] = Math.min(DY[IY], FY[IY]), TD[IY] = Math.abs(FY[IY] - DY[IY]);
        if (!Number.isFinite(lD[0] + lD[1] + lD[2] + TD[0] + TD[1] + TD[2])) return;
        const AY = HD(SD.encode(JSON.stringify(YY, KD)), "playParticleEffect", this.deps.onError);
        AY && (0, yY._e)(rY, 0, 0, yY.yd.PresetNone, yY.yd.HasBox, 0, lD, TD, AY)
      }
      burstPreset(YY, rY, DY) {
        const FY = this.sink(),
          AY = Math.min(Math.floor(DY), yY.yd.MaxBurst);
        if (!FY || !Object.hasOwn(yY.Vb, YY) || !(AY > 0)) return;
        const IY = VD;
        for (let RY = 0; RY < 3; RY++) lD[RY] = rY[RY] - IY / 2, TD[RY] = IY;
        Number.isFinite(lD[0] + lD[1] + lD[2]) && (0, yY._e)(FY, 0, 0, yY.Vb[YY], yY.yd.HasBox, AY, lD, TD, mD)
      }
      sessionEnded() {
        this.session++;
        const YY = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !YY || (0, yY.df)(YY, 0)
      }
      sinkFor(YY) {
        return YY === this.session ? this.deps.cmd() : null
      }
      stop(YY, rY) {
        const DY = this.sinkFor(YY);
        DY && (0, yY.gf)(DY, 0, rY) && this.live--
      }
    }
    class CD {
      constructor(YY, rY, DY, FY, AY) {
        this.owner = YY, this.session = rY, this.key = DY, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(AY[0]), Math.abs(AY[1]), Math.abs(AY[2])], this.rate = BD(FY.emitRate), this.emitted = this.rate > 0;
        const IY = FY.maxLifeTime * oD * 1e3 + 250;
        this.stopDelayMs = IY >= 0 ? Math.min(IY, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(YY, rY) {
        const DY = this.sink();
        if (DY) {
          if (rY)
            for (let YY = 0; YY < 3; YY++) this.half[YY] = Math.abs(rY[YY]);
          cD(YY, this.half) && (0, yY.if)(DY, 0, this.key, yY.yd.HasBox, lD, TD, mD)
        }
      }
      setEmitRate(YY) {
        const rY = this.sink(),
          DY = BD(YY);
        rY && DY !== this.rate && (0, yY.if)(rY, 0, this.key, 0, ED, ED, ND(DY)) && (this.rate = DY, this.emitted ||= DY > 0)
      }
      emit(YY) {
        const rY = this.sink(),
          DY = Math.min(Math.floor(YY), yY.yd.MaxBurst);
        rY && DY > 0 && (0, yY._e)(rY, 0, this.key, yY.yd.PresetNone, 0, DY, ED, ED, mD) && (this.emitted = !0)
      }
      emitPoints(YY, rY, DY) {
        const FY = this.sink(),
          AY = Math.min(Math.floor(DY), yY.yd.MaxPoints, Math.floor(rY.length / 4));
        if (!FY || !(AY > 0) || !Number.isFinite(YY[0] + YY[1] + YY[2])) return;
        const IY = new Uint8Array(rY.buffer, rY.byteOffset, AY * yY.yd.PointBytes);
        (0, yY.$e)(FY, 0, this.key, AY, YY, IY) && (this.emitted = !0)
      }
      setDirections(YY, rY) {
        const DY = this.sink();
        if (!DY || !Number.isFinite(YY[0] + YY[1] + YY[2] + rY[0] + rY[1] + rY[2])) return;
        const FY = SD.encode(JSON.stringify({
          dir1: [YY[0], YY[1], YY[2]],
          dir2: [rY[0], rY[1], rY[2]]
        }));
        (0, yY.if)(DY, 0, this.key, 0, ED, ED, FY)
      }
      stop() {
        const YY = this.sink();
        this.stopped = !0, YY && (this.emitted ? (this.rate > 0 && (0, yY.if)(YY, 0, this.key, 0, ED, ED, ND(0)), setTimeout((() => {
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
    const fD = Mr.o,
      jD = new TextDecoder;

    function hD(YY, rY) {
      const {
        serverIds: DY,
        kinds: FY
      } = YY;
      let AY = 0;
      for (let IY = 0; IY < DY.length; IY++) {
        const YY = DY[IY];
        if (YY !== yY.Yc && !SY(FY[IY])) {
          if (AY === rY.length) {
            const YY = new Int32Array(Math.max(64, 2 * AY));
            YY.set(rY), rY = YY
          }
          rY[AY++] = YY
        }
      }
      return {
        ids: rY,
        count: AY
      }
    }

    function dD(YY, rY) {
      return YY.length >= rY ? YY : new Int32Array(Math.max(rY, 2 * YY.length))
    }

    function JD(YY, rY, DY, FY) {
      for (let AY = 0; AY < DY; AY += 4096) {
        const IY = Math.min(4096, DY - AY),
          RY = YY.memoryView(Int32Array, YY.scratch(), IY, "entity_info_batch's ids");
        if (!RY) return !1;
        RY.set(rY.subarray(AY, AY + IY));
        const OY = YY.queries.entityInfoBatch(IY),
          gY = 4294967295 === OY ? null : YY.memoryData(YY.scratch(), OY, 4, "entity_info_batch's records");
        if (!gY) return !1;
        for (let YY = 0; YY + yY.Kb.BYTES <= OY;) {
          const rY = yY.Kb.len(gY, YY);
          FY(yY.Kb.serverId(gY, YY), MD(gY, YY, rY)), YY += yY.Kb.BYTES + (0, sY.ee)(rY)
        }
      }
      return !0
    }

    function MD(YY, rY, DY) {
      var FY, AY, IY;
      const RY = yY.Kb.kind(YY, rY),
        OY = 0 === RY ? null : lY(RY);
      if (null === OY) return null;
      const gY = yY.Kb.variation(YY, rY),
        aY = yY.Kb.pose(YY, rY),
        vY = yY.Kb.meta(YY, rY),
        uY = yY.Kb.mesh(YY, rY),
        sY = 0 !== (yY.Kb.flags(YY, rY) & yY.Hb.HasOpts),
        iY = fD[OY];
      return Object.freeze({
        type: OY,
        variation: gY === yY.bd ? void 0 : null !== (FY = null !== (AY = null === iY || void 0 === iY ? void 0 : iY[gY]) && void 0 !== AY ? AY : null === iY || void 0 === iY ? void 0 : iY[0]) && void 0 !== FY ? FY : "default",
        pose: aY === yY.dc ? void 0 : null !== (IY = yY.Ab[aY]) && void 0 !== IY ? IY : yY.Ab[0],
        metaInfo: vY === yY.dc ? void 0 : yY.Kc[vY],
        meshKind: uY === yY.dc ? void 0 : yY.Hc[uY],
        meshOpts: sY ? jD.decode(new Uint8Array(YY.buffer, YY.byteOffset + rY + yY.Kb.BYTES, DY)) : void 0
      })
    }
    const wD = 1,
      bD = 2;
    class XD {
      constructor(YY) {
        this.deps = YY, this.wanted = 0, this.ja = !1, this.refused = !1
      }
      get on() {
        return this.ja
      }
      want(YY, rY) {
        this.wanted = rY ? this.wanted | YY : this.wanted & ~YY;
        const DY = 0 !== this.wanted;
        if (DY === this.ja) return;
        const FY = this.deps.cmd();
        null !== FY ? (0, yY.Xf)(FY, 0, DY ? 1 : 0) ? (this.ja = DY, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.ja = !1
      }
    }
    class qD {
      constructor(YY) {
        this.deps = YY, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(YY) {
        var rY;
        return this.complete || this.fill(), null !== (rY = this.entries.get("string" === typeof YY ? YY : String(YY))) && void 0 !== rY ? rY : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(YY) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const YY = new Int32Array(2 * this.pending.length);
            YY.set(this.pending), this.pending = YY
          }
          this.pending[this.pendingCount++] = YY
        }
      }
      removed(YY) {
        this.entries.size > 0 && this.entries.delete(String(YY))
      }
      refresh() {
        const YY = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (YY > 0 && this.complete) {
          const {
            api: rY
          } = this.deps;
          let DY = 0;
          const FY = this.ids = dD(this.ids, YY);
          for (let AY = 0; AY < YY; AY++) {
            const YY = this.pending[AY],
              IY = rY.indexById.get(YY);
            void 0 === IY || SY(rY.kinds[IY]) ? this.entries.delete(String(YY)) : FY[DY++] = YY
          }
          DY > 0 && !this.batch(FY, DY) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(wD, !1)
      }
      fill() {
        const {
          api: YY
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: YY
          } = this.deps, rY = YY.on;
          YY.want(wD, !0), !rY && YY.on && (this.refill = this.midFrame)
        }
        const {
          ids: rY,
          count: DY
        } = hD(YY, this.ids);
        this.ids = rY, DY > 0 && !this.batch(rY, DY) && (this.refill = !0)
      }
      batch(YY, rY) {
        return JD(this.deps.api, YY, rY, ((YY, rY) => {
          null === rY ? this.entries.delete(String(YY)) : this.entries.set(String(YY), rY)
        }))
      }
    }
    var pD = DY(4382);

    function kD(YY) {
      if ("message" !== YY.type || YY.vv !== pD._b.NewClientOptions || YY.payloadKind !== sY.dc.Msgpack) return null;
      const rY = (0, hY.e)(YY.payload);
      if (null === rY || "object" !== typeof rY || Array.isArray(rY)) throw new Error("NewClientOptions whose body isn't an object of options");
      return rY
    }
    var GD = DY(1244),
      xD = DY(36052);

    function nD(YY, rY, DY, FY, AY, IY, OY) {
      var gY, aY, vY;
      switch (YY) {
        case yY.ae.ToggleMenu: {
          const YY = yY.F[rY];
          RY.g.vo("toggleMenu", void 0 === YY ? "inventory" : `inventory|${YY}`);
          break
        }
        case yY.ae.EditBoard:
          RY.g.vo("EditBoard", {
            pos: 0 === rY ? null : DY
          });
          break;
        case yY.ae.EditCodeBlock:
        case yY.ae.ViewCodeBlock:
          RY.g.vo("EditCodeBlock", {
            pos: DY,
            canChangePos: YY === yY.ae.EditCodeBlock
          });
          break;
        case yY.ae.EditCustomLobbyBlock:
          RY.g.vo("EditCustomLobbyBlock", {
            pos: DY
          });
          break;
        case yY.ae.OpenIronChest:
          RY.g.vo("OpenIronChest", {
            pos: DY
          });
          break;
        case yY.ae.EditNameTag:
          RY.g.vo("EditNameTag", null !== (gY = null === (aY = AY.ja()) || void 0 === aY || null === (vY = aY.attributes.customAttributes) || void 0 === vY ? void 0 : vY.text) && void 0 !== gY ? gY : "");
          break;
        case yY.ae.EditBook: {
          var uY, sY, QY;
          const YY = null === (uY = AY.ja()) || void 0 === uY ? void 0 : uY.attributes;
          RY.g.vo("EditBook", {
            pages: (0, GD.M)(null === YY || void 0 === YY || null === (sY = YY.customAttributes) || void 0 === sY ? void 0 : sY.pages),
            title: null !== (QY = null === YY || void 0 === YY ? void 0 : YY.customDisplayName) && void 0 !== QY ? QY : "Title",
            isPublished: !(null === YY || void 0 === YY || !YY.customDescription)
          });
          break
        }
        case yY.ae.CantChangeBlock:
          ! function(YY, rY) {
            const DY = rY.getClientOption("cantChangeError"),
              FY = rY.getClientOption(YY ? "cantBuildError" : "cantBreakError"),
              AY = YY ? DY : FY;
            (rY.getClientOption("canChange") || AY || "You cannot modify this block" !== DY) && RY.g.vo("showBottomMessage", {
              message: FY || DY,
              type: "Error"
            })
          }(1 === rY, IY);
          break;
        case yY.ae.MiddleBarStart:
          RY.g.vo("middleScreenBarInitiate", {
            duration: FY,
            Nr: 1 === DY[0],
            horizBarRemOffset: rY
          });
          break;
        case yY.ae.MiddleBarStop:
          RY.g.vo("middleScreenBarRemove");
          break;
        case yY.ae.Hitmarker:
          RY.g.vo("localGunHitmarker", {
            iD: 1 === rY
          });
          break;
        case yY.ae.ShotsLeft:
          RY.g.vo("localPlayerNewShotsLeft", FY);
          break;
        case yY.ae.AimingOverlay:
          RY.g.vo("aimingOverlay", 3 === (3 & rY) ? "sniper" : "none");
          break;
        case yY.ae.BottomMessage:
          RY.g.vo("showBottomMessage", JSON.parse(OY()));
          break;
        case yY.ae.Crosshair:
          AY.inaccuracy = (0, dY.f)(FY), (0, xD.e)().crosshairAccuracy(AY.inaccuracy);
          break;
        case yY.ae.ChargeStage:
          break;
        case yY.ae.EmoteWheelClose:
          RY.g.vo("requestEmoteWheelClose");
          break;
        case yY.ae.BlockMined:
          RY.g.vo("localBlockMined");
          break;
        default:
          throw new iY.d(`UiEvent of no kind: what ${YY}`)
      }
    }
    var PD = DY(37335),
      UD = DY(8756),
      LD = DY(1830),
      tD = DY(36184),
      YF = DY(8770),
      rF = DY(4365);
    const DF = 10,
      FF = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      AF = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      IF = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function RF(YY, rY) {
      let DY, FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const IY = () => (DY = (0, LD.l)(DY, rY()), DY);
      return {
        current: IY,
        watch(rY) {
          const DY = () => {
              rY(IY())
            },
            RY = [YY.watch(DY)];
          return null !== FY && RY.push((0, LD.o)((YY => {
            YY.some(FY) && DY()
          }))), null !== AY && RY.push(AY(DY)), () => {
            for (const YY of RY) YY()
          }
        }
      }
    }

    function OF(YY) {
      return YY && {
        name: YY.name,
        amount: YY.amount,
        attributes: YY.attributes
      }
    }
    const gF = new WeakMap;

    function aF(YY) {
      let rY = gF.get(YY);
      return void 0 === rY && (rY = (0, YF.creativeItemIds)().map((rY => ({
        name: YY.nameOfId(rY),
        amount: YY.isStackableId(rY) ? 1 : null,
        attributes: (0, PD.b)("Gun" === (0, YF.itemTypeOf)(rY) ? {
          type: "Gun",
          clipSize: (0, YF.clipSizeOf)(rY)
        } : void 0)
      }))), gF.set(YY, rY)), rY
    }

    function vF(YY, rY, DY, FY) {
      const AY = rY => (YY.flush(FY), rY),
        IY = DY => {
          var FY, AY, IY, RY, OY, gY, aY;
          const vY = YY.slot(DY);
          if (!vY) return null;
          const {
            rootName: uY,
            metaStr: sY
          } = rY.getMetaInfo(vY.name);
          return {
            name: vY.name,
            amount: vY.amount,
            attributes: vY.attributes,
            instance: YY.instance(DY),
            displayName: null !== (FY = vY.attributes.customDisplayName) && void 0 !== FY ? FY : rY.getDisplayName(uY),
            requiresAmmo: "RequiresAmmo" === sY,
            clipSize: null !== (AY = null !== (IY = null === (RY = vY.attributes.customAttributes) || void 0 === RY || null === (OY = RY.gunStats) || void 0 === OY ? void 0 : OY.clipSize) && void 0 !== IY ? IY : null === (gY = rY.getGunStats(uY)) || void 0 === gY ? void 0 : gY.clipSize) && void 0 !== AY ? AY : null === (aY = vY.typeObj) || void 0 === aY ? void 0 : aY.clipSize
          }
        },
        OY = function(YY, rY) {
          let DY = null,
            FY = {
              focus: null,
              recipes: [],
              detail: null
            },
            AY = -1;
          const IY = new Set;
          return {
            read() {
              var IY, RY;
              if (null === DY) return null !== FY.focus && (FY = {
                ...FY,
                focus: null
              }), FY;
              if (FY.focus === DY && AY === YY.changes) return FY;
              if (AY = YY.changes, 0 === YY.length) return FY = {
                focus: DY,
                recipes: [],
                detail: null
              }, FY;
              let OY = 0;
              if (null !== DY.recipe) try {
                OY = rY.getItemId(DY.recipe.name)
              } catch {}
              const gY = YY.craftingView(DY.station, OY, null !== (IY = null === (RY = DY.recipe) || void 0 === RY ? void 0 : RY.Wv) && void 0 !== IY ? IY : 0);
              return FY = null === gY ? {
                focus: DY,
                recipes: [],
                detail: null
              } : function(YY, rY, DY) {
                let FY = yY.eb.BYTES;
                const AY = [];
                for (let vY = yY.eb.recipes(YY, 0); vY > 0; vY--) {
                  const DY = yY.Y.flags(YY, FY),
                    IY = {
                      name: rY.nameOfId(yY.Y.item(YY, FY)),
                      Wv: yY.Y.recipe(YY, FY),
                      requires: [],
                      produces: yY.Y.produces(YY, FY),
                      haveIngredients: 0 !== (DY & yY.X.HaveIngredients),
                      listed: 0 !== (DY & yY.X.Listed)
                    };
                  let RY = yY.Y.requires(YY, FY);
                  for (FY += yY.Y.BYTES; RY > 0; RY--) {
                    const DY = yY._.items(YY, FY);
                    IY.requires.push({
                      items: iF(YY, FY + yY._.BYTES, DY, rY),
                      amt: yY._.amount(YY, FY)
                    }), FY += yY._.BYTES + 2 * DY
                  }
                  AY.push(IY)
                }
                const IY = yY.eb.flags(YY, 0);
                if (null === DY.recipe || 0 === (IY & yY.cb.Detail)) return {
                  focus: DY,
                  recipes: AY,
                  detail: null
                };
                const RY = {},
                  OY = {};
                for (let vY = yY.eb.ingredients(YY, 0); vY > 0; vY--) {
                  const DY = yY.V.item(YY, FY),
                    AY = yY.V.from(YY, FY),
                    IY = yY.V.amount(YY, FY);
                  FY += yY.V.BYTES;
                  const gY = AY === yY.D ? null : iF(YY, FY, AY, rY);
                  if (null !== gY && (FY += 2 * AY), 0 === DY) continue;
                  const aY = rY.nameOfId(DY);
                  RY[aY] = IY, null !== gY && (OY[aY] = gY)
                }
                const {
                  name: gY,
                  Wv: aY
                } = DY.recipe;
                return {
                  focus: DY,
                  recipes: AY,
                  detail: {
                    name: gY,
                    Wv: aY,
                    craftAllTimes: yY.eb.craftAllTimes(YY, 0),
                    roomForOne: 0 !== (IY & yY.cb.RoomForOne),
                    resultStackable: Boolean(rY.getItemStat(gY, "stackable")),
                    amounts: RY,
                    ingredientsCraftedFrom: OY
                  }
                }
              }(gY, rY, DY), FY
            },
            setFocus(YY) {
              DY = YY;
              for (const rY of [...IY]) rY()
            },
            watchFocus: YY => (IY.add(YY), () => {
              IY.delete(YY)
            })
          }
        }(YY, rY);
      return {
        states: {
          inventory: RF(YY, (() => {
            const DY = YY.length;
            if (0 === DY) return FF;
            const FY = [];
            for (let rY = 0; rY < yY.od; rY++) FY.push(OF(YY.slot(rY)));
            const AY = YY.slotIcon,
              IY = FY[YY.selectedSlot];
            0 !== AY && IY && (FY[YY.selectedSlot] = {
              ...IY,
              icon: rY.nameOfId(AY)
            });
            const RY = !0 === rY.getClientOption("creative");
            let OY = [],
              gY = null;
            if (DY > yY.od) {
              for (let rY = yY.od; rY < DY; rY++) OY.push(OF(YY.slot(rY)));
              gY = {
                type: null,
                pos: [...YY.lF],
                numSlots: DY - yY.od,
                ironChest: null
              }
            } else RY && (OY = aF(rY));
            return {
              player: FY,
              chestOrCreative: OY,
              chest: gY,
              creative: RY,
              selectedSlot: YY.selectedSlot,
              freeSlots: YY.freeSlots()
            }
          }), (0, LD.i)("creative")),
          hotbar: RF(YY, (() => {
            if (0 === YY.length) return AF;
            const rY = [];
            for (let YY = 0; YY < DF; YY++) rY.push(IY(YY));
            return {
              items: rY,
              ammo: YY.amountOf("Ammo"),
              selectedSlot: YY.selectedSlot
            }
          }), (0, LD.g)("DisplayName", "GunStats")),
          crafting: RF(YY, OY.read, null, OY.watchFocus),
          heldItemAim: RF(YY, (() => {
            var rY;
            if (!DY()) return IF;
            const FY = null === (rY = YY.ja()) || void 0 === rY ? void 0 : rY.typeObj,
              AY = "Gun" === (null === FY || void 0 === FY ? void 0 : FY.type);
            return {
              gun: AY,
              aimable: AY || !0 === (null === FY || void 0 === FY ? void 0 : FY.showsAimingUi),
              chargeName: "Chargeable" === (null === FY || void 0 === FY ? void 0 : FY.type) ? FY.name : null
            }
          }), null, (YY => function(YY, rY) {
            let DY = YY();
            return (0, rF.w)((() => {
              const FY = YY();
              FY !== DY && (DY = FY, rY(FY))
            }))
          }(DY, YY)))
        },
        events: {
          hotbarSlotRequested: (0, LD.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, LD.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, LD.c)("numkeyPressed"),
          inventoryDropRequested: (0, LD.c)("DropInvenItem"),
          chestToggled: (0, LD.c)("chestToggleFromServer"),
          chestRefreshed: (0, LD.c)("chestRefreshedFromServer", sF),
          inventorySynced: (0, LD.c)("syncedInvenFromServer", sF),
          enchantingTableOpened: (0, LD.c)("enchantingTable", (YY => {
            let {
              position: DY,
              rv: FY
            } = YY;
            return {
              position: [...DY],
              blockName: rY.getMetaInfo(FY).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(rY) {
            YY.selectSlot(rY), YY.flush(FY)
          },
          removeInventoryItem(rY) {
            let {
              slot: DY,
              amount: FY,
              drop: IY
            } = rY;
            return AY(YY.remove(DY, FY, IY))
          },
          swapInventorySlots(rY) {
            let {
              a: DY,
              b: FY
            } = rY;
            return AY(YY.swap(DY, FY))
          },
          moveInventoryItem(rY) {
            let {
              from: DY,
              to: FY,
              amount: IY
            } = rY;
            return AY(YY.move(DY, FY, IY))
          },
          quickMoveInventoryItem(rY) {
            let {
              slot: DY,
              start: FY,
              end: IY,
              amount: RY
            } = rY;
            return AY(YY.quickMove(DY, FY, IY, RY))
          },
          closeChest() {
            YY.closeChest(), YY.flush(FY), RY.g.vo("chestClosedByPlayer")
          },
          focusCrafting(YY) {
            OY.setFocus(YY)
          },
          craftRecipe(rY) {
            let {
              name: DY,
              Wv: FY,
              times: IY
            } = rY;
            return AY(YY.craft(DY, FY, IY))
          },
          salvageItem(rY) {
            let {
              slot: DY,
              name: FY,
              amount: IY
            } = rY;
            return AY(YY.salvage(DY, FY, IY))
          },
          enchantItem(rY) {
            let {
              slot: DY,
              level: FY,
              tablePos: AY
            } = rY;
            YY.enchant(DY, FY, AY)
          }
        },
        queries: {
          enchantingOffer(DY) {
            let {
              slot: FY,
              blockName: AY
            } = DY;
            return function(YY, rY, DY, FY) {
              const AY = YY.slot(DY);
              if (!AY || !rY.getClientOption("canCraft") || !(0, UD.n)(FY) || (0, UD.m)(AY.attributes)) return uF;
              const IY = (0, YF.enchantmentPerksOf)(rY.getItemId(AY.name));
              if (0 === IY.length) return uF;
              const RY = [];
              for (let OY = 0; OY < tD.b; OY++) {
                const {
                  commonProb: YY,
                  uncommonProb: rY,
                  rareProb: DY,
                  epicProb: AY,
                  legendaryProb: IY,
                  level: gY
                } = (0, UD.h)(FY, OY);
                RY.push({
                  level: gY,
                  odds: [YY, rY, DY, AY, IY].map((YY => 100 * YY))
                })
              }
              return {
                perks: [...IY],
                options: RY
              }
            }(YY, rY, FY, AY)
          }
        }
      }
    }
    const uF = Object.freeze({
      perks: [],
      options: []
    });

    function sF() {
      return null
    }

    function iF(YY, rY, DY, FY) {
      const AY = [];
      for (let IY = 0; IY < DY; IY++) {
        const DY = YY.getUint16(rY + 2 * IY, !0);
        0 !== DY && AY.push(FY.nameOfId(DY))
      }
      return AY
    }
    class yF {
      constructor(YY) {
        this.api = YY, this.positions = new Map, this.targeted = {
          aG: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          bu: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(YY) {
        let rY = this.positions.get(YY);
        return rY || (this.api.checkValid(YY) || this.api.isLocal(YY) ? (rY = [NaN, NaN, NaN], this.api.readPosition(YY, rY), this.positions.set(YY, rY), rY) : null)
      }
      o4() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [rY, DY] of this.positions) this.api.readPosition(rY, DY) || this.api.checkValid(rY) || this.api.isLocal(rY) || this.positions.delete(rY);
        const YY = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (yY.s.playerFlags(YY, 0) & yY.Cd.Breaking) && yY.s.breakingProgress(YY, 0) >= 0, this.isBreaking)
          for (let rY = 0; rY < 3; rY++) this.breaking[rY] = yY.s.breakingPos(YY, 0, rY)
      }
      refreshTarget() {
        const YY = this.api.apiView,
          rY = yY.s.targetBlockId(YY, 0);
        if (this.hasTarget = rY !== yY.$c, this.hasTarget) {
          const DY = this.targeted;
          DY.aG = rY;
          for (let rY = 0; rY < 3; rY++) DY.position[rY] = yY.s.targetBlock(YY, 0, rY), DY.normal[rY] = yY.s.targetNormal(YY, 0, rY), DY.bu[rY] = yY.s.targetAdjacent(YY, 0, rY)
        }
      }
      despawned(YY) {
        const rY = this.positions.get(YY);
        rY && !this.api.isLocal(YY) && (rY.fill(NaN), this.positions.delete(YY))
      }
    }
    var QF = DY(39733),
      oF = DY(39725),
      WF = DY(36178);
    const EF = 1,
      mF = 2;
    class VF {
      constructor() {
        this.game = new WF.g, this.client = new WF.g, this.ja = 0, this.movesFly = null
      }
      setGame(YY) {
        if (null === YY || "object" !== typeof YY) return !1;
        const {
          key: rY,
          value: DY
        } = YY;
        return "string" === typeof rY && (this.game.setBooleanType(rY, Boolean(DY)), !0)
      }
      setClient(YY, rY) {
        this.client.setBooleanType(YY, rY)
      }
      clearGame() {
        this.game = new WF.g, this.movesFly = null
      }
      setMovesFly(YY) {
        this.movesFly = YY
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? EF : 0) | (this.client._getTotalBooleanVal() ? mF : 0)
      }
      write(YY) {
        const rY = this.perms(),
          {
            movesFly: DY
          } = this;
        if (rY === this.ja && null === DY) return !0;
        let FY = yY.Mb.Keep;
        return null !== DY && (FY = DY ? yY.Mb.On : yY.Mb.Off), !(!YY || !(0, yY.te)(YY, 0, FY, rY, DY ? 1 : 0)) && (this.ja = rY, this.movesFly = null, !0)
      }
    }
    class SF {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = YY, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: OY.c,
          get y() {
            return rY()
          }
        }
      }
      get hasView() {
        const YY = this.api.apiView,
          rY = yY.s.viewProj;
        return 0 !== rY(YY, 0, 3) || 0 !== rY(YY, 0, 7) || 0 !== rY(YY, 0, 11) || 0 !== rY(YY, 0, 15)
      }
      get cameraPosition() {
        const YY = this.api.apiView,
          {
            eye: rY
          } = this;
        for (let DY = 0; DY < 3; DY++) rY[DY] = yY.s.eye(YY, 0, DY);
        return rY
      }
      get cameraDirection() {
        const YY = this.api.apiView,
          rY = yY.s.viewProj,
          DY = rY(YY, 0, 3),
          FY = rY(YY, 0, 7),
          AY = rY(YY, 0, 11),
          IY = Math.hypot(DY, FY, AY),
          {
            forward: RY
          } = this;
        return IY > 0 && (RY[0] = DY / IY, RY[1] = FY / IY, RY[2] = AY / IY), RY
      }
      get cameraHeading() {
        return yY.s.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return yY.s.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return yY.s.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return yY.s.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(YY) {
        this.clip(YY);
        const {
          clipX: rY,
          clipY: DY,
          clipW: FY
        } = this;
        if (FY > 0) {
          const YY = rY / FY * 50,
            AY = -DY / FY * 50;
          return Math.abs(YY) <= this.screenBandPct.x && Math.abs(AY) <= this.screenBandPct.y ? {
            x: 50 + YY,
            y: 50 + AY
          } : this.clampToBand(YY, AY)
        }
        const AY = this.cameraPosition,
          IY = Math.hypot(YY[0] - AY[0], YY[1] - AY[1], YY[2] - AY[2]),
          RY = this.api.apiView,
          OY = yY.s.viewProj,
          gY = IY > 0 ? rY / IY : 0,
          aY = IY > 0 ? -DY / IY : 0,
          vY = Math.hypot(OY(RY, 0, 1), OY(RY, 0, 5), OY(RY, 0, 9)),
          uY = gY / Math.hypot(OY(RY, 0, 0), OY(RY, 0, 4), OY(RY, 0, 8)),
          sY = aY / vY,
          iY = !(Math.abs(uY) >= .001 || Math.abs(sY) >= .001);
        return this.clampToBand(gY, iY ? -(vY || 1) : aY)
      }
      projectDirectionToScreenPos(YY) {
        if (!this.hasView) return;
        const rY = this.cameraPosition,
          DY = this.along;
        for (let FY = 0; FY < 3; FY++) DY[FY] = rY[FY] + 10 * YY[FY];
        return this.projectWorldPosToScreenPos(DY)
      }
      projectWorldPosToViewport(YY) {
        this.clip(YY);
        const {
          clipX: rY,
          clipY: DY,
          clipW: FY
        } = this;
        return FY > 0 ? {
          x: 50 + rY / FY * 50,
          y: 50 - DY / FY * 50
        } : null
      }
      clip(YY) {
        const rY = this.api.apiView,
          DY = YY[0] - yY.s.origin(rY, 0, 0),
          FY = YY[1] - yY.s.origin(rY, 0, 1),
          AY = YY[2] - yY.s.origin(rY, 0, 2),
          IY = yY.s.viewProj;
        this.clipX = IY(rY, 0, 0) * DY + IY(rY, 0, 4) * FY + IY(rY, 0, 8) * AY + IY(rY, 0, 12), this.clipY = IY(rY, 0, 1) * DY + IY(rY, 0, 5) * FY + IY(rY, 0, 9) * AY + IY(rY, 0, 13), this.clipW = IY(rY, 0, 3) * DY + IY(rY, 0, 7) * FY + IY(rY, 0, 11) * AY + IY(rY, 0, 15)
      }
      clampToBand(YY, rY) {
        return (0, OY.d)(YY, rY, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var lF = DY(4392);
    const TF = new TextEncoder,
      eF = new Uint8Array(yY.N * yY.J);
    class NF {
      constructor() {
        this.buttons = [], this.ja = !0
      }
      set(YY) {
        this.buttons = YY, this.ja = !1
      }
      attached() {
        this.ja = 0 === this.buttons.length
      }
      write(YY) {
        if (this.ja) return;
        const rY = new Uint8Array(yY.N),
          DY = new Uint8Array(yY.N);
        let FY = 0,
          AY = 0;
        for (const {
            id: IY,
            keycode: RY
          }
          of this.buttons) {
          if (FY === yY.N) break;
          const {
            read: YY,
            written: OY
          } = TF.encodeInto(IY, eF.subarray(AY, AY + yY.J));
          if (YY < IY.length) continue;
          const gY = lF.k[RY];
          rY[FY] = "number" === typeof gY ? gY : 0, DY[FY] = OY, FY++, AY += OY
        }
        this.ja = (0, yY.le)(YY, 0, FY, rY, DY, eF.subarray(0, AY))
      }
    }

    function BF(YY, rY, DY) {
      const FY = TF.encode(rY);
      return FY.length <= yY.J && function(YY, rY, DY, FY) {
        return (0, Xr.b)(), (0, yY.mf)(YY, rY, DY, FY)
      }(YY, 0, DY ? 1 : 0, FY)
    }
    const cF = new TextDecoder,
      KF = new TextEncoder,
      HF = new Uint8Array(0),
      zF = [0, 0, 0],
      ZF = {
        off: yY.Gd.Off,
        key: yY.Gd.Key,
        touch: yY.Gd.Touch
      };
    class CF {
      constructor(YY) {
        var rY;
        this.options = YY, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new NF, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new VF, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.gy = YY => {
          if ((0, iY.f)(YY)) throw YY;
          this.onError(YY)
        }, this.api = YY.api, this.tables = YY.tables, this.onError = null !== (rY = YY.onError) && void 0 !== rY ? rY : YY => {
          console.error("Error in client game callback", YY)
        }, this.renderFrame = new SF(this.api, YY.screenBandY), this.live = new yF(this.api), this.chunks = new Or(this.api.memory, (() => this.api.apiView)), this.items = new QD({
          api: this.api,
          tables: YY.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: YY.beforeOp
        });
        const DY = () => this.stopped() ? null : this.cmd,
          FY = () => this.sessionLive;
        this.entityInfoWatch = new XD({
          cmd: DY,
          onError: this.onError
        }), this.entityInfo = new qD({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: FY
        }), this.particles = new ZD({
          cmd: DY,
          isSessionLive: FY,
          onError: this.onError
        }), this.clientApi = new RD({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: YY.tables,
          cmd: DY,
          sendCmd: () => this.sendCmd(),
          isSessionLive: FY,
          beforeWrite: () => {
            var rY;
            if (this.stopped()) return !1;
            const DY = this.generation;
            return !1 !== (null === (rY = YY.beforeWrite) || void 0 === rY ? void 0 : rY.call(YY)) && DY === this.generation
          },
          playerDbId: () => {
            const YY = this.session;
            if (null === YY) throw new Error("No game session has started, so the local player has no DB id");
            return YY.playerDbId
          },
          playSound: YY.playSound,
          setLocalOptions: YY.setLocalOptions,
          hasPackModel: YY.hasPackModel
        }), this.scriptedCamera = new GY({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: YY.cameraScreen,
          showFacing: YY.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= vF(this.items, this.tables, (() => this.localPlayerAlive()), this.gy), this.itemSources
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
      clickCodeBlock(YY) {
        const rY = this.sessionLive ? this.sendCmd() : null;
        return null !== rY && (DY = rY, FY = 0, AY = YY[0], IY = YY[1], RY = YY[2], (0, Xr.b)(), (0, yY.pe)(DY, FY, AY, IY, RY));
        var DY, FY, AY, IY, RY
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(YY) {
        const rY = this.liveCmd();
        return null === rY ? (this.pendingZoom = YY, !1) : (this.pendingZoom = null, (0, yY.Qf)(rY, 0, YY, 1))
      }
      wV(YY) {
        const rY = this.stopped() ? null : this.cmd;
        return null !== rY && (0, yY.Of)(rY, 0, YY ? 1 : 0)
      }
      respawn() {
        const YY = this.sessionLive ? this.sendCmd() : null;
        return null !== YY && (rY = YY, DY = 0, (0, Xr.b)(), (0, yY.Af)(rY, DY));
        var rY, DY
      }
      bindCustomButtonKeys(YY) {
        this.customButtons.set(YY)
      }
      pressCustomButton(YY, rY) {
        const DY = this.sessionLive ? this.sendCmd() : null;
        return null !== DY && BF(DY, YY, rY)
      }
      padMove(YY, rY, DY, FY, AY, IY) {
        const RY = this.liveCmd();
        return null !== RY && (0, yY.Ze)(RY, 0, YY, rY, DY, FY, AY, IY)
      }
      thirdPersonFor(YY) {
        const rY = this.liveCmd();
        return null !== rY && (0, yY.Tf)(rY, 0, null !== YY && void 0 !== YY ? YY : 1 / 0)
      }
      send(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== FY && qr(FY, DY ? sY.id : 0, YY, (0, hY.f)(rY))
      }
      socketAttached(YY) {
        this.openSocket = YY, this.socketLeftSinceAttach = !1
      }
      socketDetached(YY) {
        this.openSocket === YY && (this.openSocket = 0)
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
      attach(YY) {
        const rY = () => YY.isStopped;
        this.stopped = rY, this.cmd = YY.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const DY = this.api.apiView;
        this.overflowGen = yY.s.eventOverflowGen(DY, 0), this.resyncOwed = 0 !== yY.s.eventOverflowMask(DY, 0), YY.setGameHost(this), YY.setEventWalker((YY => {
          this.api.walk(YY, this, rY)
        }))
      }
      watchPromptPick(YY) {
        this.promptWatch = YY, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : fF(yY.s.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? yY.oc.None : yY.s.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : yY.s.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === YY || YY >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, YY, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(YY) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(YY)
      }
      netEvent(YY) {
        "connection" === YY.type ? YY.phase === sY.C.Activated && YY.conn !== this.activeConn && YY.conn > this.closedThrough ? (this.endSession(), this.activeConn = YY.conn, this.endGameGrants(), this.dropGameCamera()) : YY.phase !== sY.C.Left && YY.phase !== sY.C.Closed || YY.conn !== this.activeConn ? YY.phase === sY.C.Resumed && 0 !== this.activeConn && YY.conn > this.closedThrough && (this.activeConn = YY.conn) : this.closeGame() : YY.conn === this.activeConn && 0 !== YY.conn && (YY.vv === oF.x ? this.gunHit(YY.payload) : YY.vv === pD._b.EditItemCraftingRecipes || YY.vv === oF.Y ? this.items.touch() : (this.serverOptions(YY), this.gameMessage(YY)));
        const rY = this.options.onNetEvent;
        rY && this.guard((() => {
          rY(YY)
        }))
      }
      serverOptions(YY) {
        const rY = this.options.serverOptions,
          DY = rY ? this.decoded(kD, YY) : null;
        rY && DY && this.guard((() => {
          rY.applyNewClientOptions(DY)
        }))
      }
      gameMessage(YY) {
        let rY = null;
        try {
          rY = function(YY) {
            if ("message" !== YY.type || YY.vv !== pD._b.GameCodeMessage || YY.payloadKind !== sY.dc.Msgpack) return null;
            const rY = (0, hY.e)(YY.payload);
            if (null === rY || "object" !== typeof rY || "string" !== typeof rY.messageType) throw new Error("GameCodeMessage without a messageType");
            return rY
          }(YY)
        } catch (DY) {
          this.sessionLive && this.onError(DY)
        }
        if (rY) {
          const {
            messageType: YY,
            data: DY
          } = rY;
          if ((0, KY.d)(YY)) return void this.guard((() => {
            (0, KY.b)(YY, DY)
          }));
          "freeCamPerms" === YY && this.freeCam.setGame(DY) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (rY => {
            rY.onReceivedMessageFromServer(YY, DY)
          }))
        }
      }
      decoded(YY, rY) {
        try {
          return YY(rY)
        } catch (DY) {
          return this.onError(DY), null
        }
      }
      setClientFreeCameraGrant(YY, rY) {
        this.freeCam.setClient(YY, rY), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(YY) {
        this.freeCam.setMovesFly(YY), this.writeFreeCam()
      }
      setBlockHighlight(YY) {
        this.highlight = YY, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const YY = this.liveCmd();
        if (null === YY || !this.highlightOwed) return;
        const rY = this.highlight;
        this.highlightOwed = null === rY ? !(0, yY.Ie)(YY, 0, zF, zF, 0) : !(0, yY.Ie)(YY, 0, rY.pos, rY.normal, 1)
      }
      localPlayerBound(YY) {
        var rY, DY;
        if (0 === this.activeConn || this.sessionLive && YY === this.boundId) return;
        const FY = this.sessionLive;
        let AY, IY, RY, OY;
        this.endSession(), FY && this.restartGameCamera();
        try {
          var gY;
          this.session = null;
          const YY = this.options.sessionInfo(this.activeConn);
          if (this.session = YY, !YY) return;
          AY = YY.gameNameWithVariation, IY = null !== (gY = (0, BY.Kb)(AY)) && void 0 !== gY ? gY : void 0, RY = (0, cY.x)(YY.lobbyName), OY = (0, cY.P)(YY.lobbyName)
        } catch (EY) {
          return void this.onError(EY)
        }
        const aY = {
          localPlayerId: String(YY)
        };
        let vY = {},
          uY = {};
        try {
          var sY, iY;
          vY = null !== (sY = null === (iY = this.options.gameFactory((0, BY.Pb)(AY))) || void 0 === iY ? void 0 : iY(OY, RY, IY, aY)) && void 0 !== sY ? sY : {}
        } catch (EY) {
          this.gy(EY)
        }
        try {
          var yY, QY;
          uY = {
            ...null === (yY = (QY = this.options).defaultPlugins) || void 0 === yY ? void 0 : yY.call(QY, OY, RY, IY, aY),
            ...vY.plugins
          }
        } catch (EY) {
          this.gy(EY)
        }
        const oY = [vY, ...Object.values(uY)];
        this.owners = oY, this.tickers = oY.filter((YY => void 0 !== YY.Zu)), this.renderers = oY.filter((YY => void 0 !== YY.onAfterRender)), this.receivers = oY.filter((YY => void 0 !== YY.onReceivedMessageFromServer)), this.writeAltVeto(oY), this.writeHooks(oY), this.writePublicLobby(OY), this.writeLocalDbId(null !== (rY = null === (DY = this.session) || void 0 === DY ? void 0 : DY.playerDbId) && void 0 !== rY ? rY : null), this.boundId = YY, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(oY, (YY => {
          var rY;
          null === (rY = YY.onCreate) || void 0 === rY || rY.call(YY, this.clientApi)
        }));
        const WY = this.generation;
        setTimeout((() => {
          WY === this.generation && !0 === this.tables.getClientOption("creative") && aF(this.tables)
        }), 0)
      }
      chunkSlot(YY, rY, DY, FY, AY, IY) {
        this.chunks.apply(YY, rY, DY, FY, AY, IY)
      }
      entityAdded(YY) {
        var rY;
        this.entityInfo.stale(YY), null === (rY = this.options.replayEntities) || void 0 === rY || rY.entityAdded(YY)
      }
      entityInfoChanged(YY) {
        var rY;
        this.entityInfo.stale(YY), null === (rY = this.options.replayEntities) || void 0 === rY || rY.entityInfoChanged(YY)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const YY = performance.now();
          this.round(this.tickers, jF), (0, rF.d)(performance.now() - YY)
        }
      }
      afterWalk(YY) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const rY = this.options.replayEntities;
        rY && this.guard((() => {
          this.entityInfoWatch.want(bD, rY.wantsWatch), rY.flush(this.entityInfoWatch.on)
        }));
        const DY = (0, rF.k)(YY, yY.s.frameMs(this.api.apiView, 0));
        if (null !== DY) {
          const YY = this.renderFrame;
          this.guard((() => {
            (0, xD.e)().turnDamageIndicators(YY.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(DY)
          })), this.round(this.renderers, (rY => {
            rY.onAfterRender(DY, YY)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== DY)
        } catch (AY) {
          this.gy(AY)
        }
        this.showZoom(), this.items.flush(this.gy), this.writePromptWatch(), this.writeCustomButtons();
        const FY = this.ticks;
        this.ticks = 0, (0, rF.j)(FY, YY, DY, this.gy)
      }
      entityRemoved(YY) {
        this.live.despawned(YY), this.entityInfo.removed(YY)
      }
      ackEventOverflow() {
        const YY = this.api.apiView,
          rY = yY.s.eventOverflowGen(YY, 0),
          DY = rY - this.overflowGen >>> 0;
        if (0 === DY && !this.resyncOwed) return;
        this.overflowGen = rY;
        const FY = yY.s.eventOverflowMask(YY, 0),
          AY = this.cmd;
        0 === FY || null === AY || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, yY.re)(AY, 0, FY);
        const IY = this.options.onEventOverflow;
        0 !== DY && IY && this.guard((() => {
          IY(FY, DY)
        }))
      }
      gameCall(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        if (YY === yY.$b.Director) try {
          return this.scriptedCamera.call(rY, DY, FY, AY, IY, RY)
        } catch (aY) {
          return this.gy(aY), yY.fb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return YY === yY.$b.AltVeto ? yY.h.Allow : 0;
        try {
          return this.callGames(YY, rY, DY, FY, AY, IY, RY, OY)
        } catch (aY) {
          throw (0, iY.f)(aY) && (this.fault = aY), aY
        }
      }
      takeFault() {
        const YY = this.fault;
        return this.fault = void 0, YY
      }
      callGames(YY, rY, DY, FY, AY, IY, RY, OY) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: gY
        } = this.options, aY = String(this.boundId);
        switch (YY) {
          case yY.$b.AltVeto:
          case yY.$b.AltAction: {
            const OY = 0 !== RY,
              [vY, uY, sY] = OY ? [rY, DY, FY] : [void 0, void 0, void 0],
              iY = OY ? gY.nameOfId(AY) : "Air",
              QY = fF(IY);
            if (YY === yY.$b.AltAction) return this.first((YY => {
              var rY;
              return null === (rY = YY.onPlayerAltAction) || void 0 === rY ? void 0 : rY.call(YY, aY, vY, uY, sY, iY, QY)
            })), 0;
            const oY = this.first((YY => {
              var rY;
              return null === (rY = YY.onPlayerAttemptAltAction) || void 0 === rY ? void 0 : rY.call(YY, aY, vY, uY, sY, iY, QY)
            }));
            return "preventAction" === oY ? yY.h.Prevent : "preventPlacement" === oY ? yY.h.PreventPlacement : yY.h.Allow
          }
          case yY.$b.Click: {
            const YY = OY,
              vY = 0 !== (YY & yY.Q.Alt),
              uY = 0 !== (YY & yY.Q.HasPos),
              sY = uY ? gY.nameOfId(AY) : "Air",
              [iY, QY, oY] = uY ? [rY, DY, FY] : [null, null, null],
              WY = fF(IY),
              EY = 0 !== (YY & yY.Q.Up),
              mY = fF(RY);
            if (0 === (YY & yY.Q.AttackOnly) && this.first((YY => {
                var rY, DY;
                return EY ? null === (rY = YY.onPlayerClickUp) || void 0 === rY ? void 0 : rY.call(YY, aY, vY, iY, QY, oY, sY, WY) : null === (DY = YY.onPlayerClick) || void 0 === DY ? void 0 : DY.call(YY, aY, vY, iY, QY, oY, sY, WY)
              })), !EY && !vY && null !== mY) {
              const YY = this.clientApi.getPositionView(mY),
                rY = YY ? [YY[0], YY[1], YY[2]] : [0, 0, 0];
              this.first((YY => {
                var DY;
                return null === (DY = YY.onPlayerAttackEntity) || void 0 === DY ? void 0 : DY.call(YY, aY, mY, rY)
              }))
            }
            return 0
          }
          case yY.$b.ChangeBlock: {
            const YY = gY.nameOfId(AY),
              RY = gY.nameOfId(IY);
            return this.first((AY => {
              var IY;
              return null === (IY = AY.onPlayerChangeBlock) || void 0 === IY ? void 0 : IY.call(AY, aY, rY, DY, FY, YY, RY)
            })), 0
          }
          case yY.$b.DropItem: {
            const YY = gY.nameOfId(rY);
            return this.first((rY => {
              var AY;
              return null === (AY = rY.onPlayerDropItem) || void 0 === AY ? void 0 : AY.call(rY, aY, YY, DY, FY)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${YY}`)), 0
        }
      }
      changeBlockFail(YY, rY, DY, FY, AY, IY, RY) {
        const OY = AY === yY.Rc ? null : cF.decode(this.api.eventBytes(IY, Math.min(AY, RY)));
        this.failures.push({
          oD: [YY, rY, DY],
          WD: FY,
          ED: OY
        })
      }
      changeBlockFailEnd() {
        const YY = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (rY => {
          var DY;
          null === (DY = rY.onChangeBlockFail) || void 0 === DY || DY.call(rY, YY)
        })), this.vo("EditBoard", {
          pos: null
        }), this.vo("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(YY, rY, DY, FY, AY, IY) {
        YY === yY.tc.ChestOpened ? this.items.chestOpened(DY, FY, AY) : YY !== yY.tc.Synced && YY !== yY.tc.ChestClosed && YY !== yY.tc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(YY, rY, DY, FY) {
            switch (YY) {
              case yY.tc.Synced:
                RY.g.vo("syncedInvenFromServer");
                break;
              case yY.tc.ChestOpened:
              case yY.tc.ChestClosed:
                RY.g.vo("chestToggleFromServer", YY === yY.tc.ChestOpened, !0);
                break;
              case yY.tc.ChestRefreshed:
                RY.g.vo("chestRefreshedFromServer");
                break;
              case yY.tc.EnchantingTable:
                RY.g.vo("enchantingTable", {
                  rv: FY,
                  position: DY
                });
                break;
              case yY.tc.HotbarRequest:
                RY.g.vo("setSelectedInventorySlotI", rY, !0);
                break;
              case yY.tc.Scrolled:
                RY.g.vo("ScrollInventorySlot", rY);
                break;
              case yY.tc.NumberKey:
                RY.g.vo("numkeyPressed", rY + 1);
                break;
              case yY.tc.DropRequested:
                RY.g.vo("DropInvenItem", 0 !== rY);
                break;
              default:
                throw new iY.d(`InventoryEvent of no kind: what ${YY}`)
            }
          }(YY, rY, [DY, FY, AY], IY)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(YY, rY, DY, FY) {
        this.vo("shotPlayer", {
          playerId: String(YY),
          damage: rY,
          wasCrit: 0 !== FY,
          distance: DY
        })
      }
      localHurt(YY, rY) {
        this.vo("closeShopOnDamaged", null), this.guard((() => {
          RY.g.vo("damagedByOtherPlayer", {
            QF: null,
            direction: Number.isNaN(rY) ? null : rY,
            oY: YY
          })
        }))
      }
      attackHit(YY, rY, DY, FY, AY) {
        this.guard((() => {
          RY.g.vo("yourAttackHit", {
            iD: FY,
            screenPos: this.renderFrame.projectDirectionToScreenPos([YY, rY, DY]),
            hitSelf: AY
          })
        }))
      }
      physicsType(YY) {
        this.vo("PlayerPhysicsTypeUpdate", YY)
      }
      vehicleEffect(YY, rY, DY, FY, AY) {
        this.guard((() => {
          YY === sY.xd.UPDATE ? (0, zY.g)(rY, {
            icon: DY,
            level: FY,
            displayName: null,
            durationMs: AY
          }) : HY.c.remove(rY)
        }))
      }
      zoomChanged(YY) {
        this.zoom = YY, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.vo("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const YY = this.scriptedCamera.holdsView();
        !this.zoomUnshown || YY && this.zoomHeld || (this.zoomUnshown = !1, this.vo("cameraZoomSet", this.zoom)), this.zoomHeld = YY
      }
      gunHit(YY) {
        this.guard((() => {
          const {
            QF: rY,
            oF: DY
          } = (0, QF.d)(oF.x, YY);
          RY.g.vo("damagedByOtherPlayer", {
            QF: rY,
            direction: DY
          })
        }))
      }
      uiEvent(YY, rY, DY, FY, AY, IY, RY, OY) {
        this.guard((() => {
          nD(YY, rY, [DY, FY, AY], IY, this.items, this.options.tables, (() => cF.decode(this.api.eventBytes(RY, OY))))
        }))
      }
      writeAltVeto(YY) {
        const rY = this.cmd;
        if (!rY) return;
        let DY;
        try {
          DY = function(YY, rY) {
            const DY = new Set;
            let FY = !1;
            for (const AY of YY)
              if (AY.onPlayerAttemptAltAction) {
                if (FY = !0, !AY.altVetoBlocks) return {
                  mode: yY.de.All,
                  roots: []
                };
                for (const YY of AY.altVetoBlocks) DY.add(rY.getMetaInfo(YY).rootId)
              } return FY ? DY.size > yY.Dc ? {
              mode: yY.de.All,
              roots: []
            } : {
              mode: yY.de.Filter,
              roots: [...DY]
            } : {
              mode: yY.de.Off,
              roots: []
            }
          }(YY, this.options.tables)
        } catch (AY) {
          this.onError(AY), DY = {
            mode: yY.de.All,
            roots: []
          }
        }
        if (DY.mode === yY.de.Off && !this.vetoSet) return;
        const FY = new Uint8Array(new Uint32Array(DY.roots).buffer);
        (0, yY.Gf)(rY, 0, DY.mode, DY.roots.length, FY) ? this.vetoSet = DY.mode !== yY.de.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(YY) {
        const rY = this.cmd;
        if (!rY) return;
        const DY = function(YY) {
          let rY = 0;
          for (const DY of YY) DY.onPlayerAltAction && (rY |= 1 << yY.$b.AltAction), (DY.onPlayerClick || DY.onPlayerClickUp || DY.onPlayerAttackEntity) && (rY |= 1 << yY.$b.Click), DY.onPlayerChangeBlock && (rY |= 1 << yY.$b.ChangeBlock), DY.onPlayerDropItem && (rY |= 1 << yY.$b.DropItem);
          return rY
        }(YY);
        (0 !== DY || this.hooksSet) && ((0, yY.Lf)(rY, 0, DY) ? this.hooksSet = 0 !== DY : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const YY = this.cmd;
        YY && !this.stopped() && this.customButtons.write(YY)
      }
      writePromptWatch() {
        const YY = this.cmd,
          rY = this.promptWatch;
        rY !== this.promptWatchSent && YY && !this.stopped() && (0, yY.$f)(YY, 0, ZF[rY]) && (this.promptWatchSent = rY)
      }
      writePublicLobby(YY) {
        const rY = this.cmd;
        rY && YY !== this.writtenPublicLobby && ((0, yY.Pf)(rY, 0, YY ? 1 : 0) ? this.writtenPublicLobby = YY : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(YY) {
        const rY = this.cmd;
        rY && ((0, yY.Mf)(rY, 0, null === YY ? 0 : 1, null === YY ? HF : KF.encode(YY)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(YY) {
        const rY = this.generation;
        for (const FY of this.owners) {
          if (rY !== this.generation) break;
          try {
            const rY = YY(FY);
            if (void 0 !== rY) return rY
          } catch (DY) {
            this.gy(DY)
          }
        }
      }
      vo(YY, rY) {
        this.guard((() => {
          RY.g.vo(YY, rY)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (YY) {
          this.gy(YY)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (YY) {
          this.gy(YY)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const YY = this.owners;
        let rY;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (FY) {
          rY = FY
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (FY) {
          rY ??= FY
        }
        this.round(YY, hF, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (FY) {
          rY ??= FY
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (FY) {
          rY ??= FY
        }
        const DY = this.options.onSessionEnd;
        if (DY) try {
          DY()
        } catch (FY) {
          this.onError(FY)
        }
        void 0 !== rY && this.gy(rY)
      }
      round(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = this.generation;
        for (const IY of YY) {
          if (FY !== this.generation) break;
          try {
            rY(IY)
          } catch (AY) {
            DY ? this.onError(AY) : this.gy(AY)
          }
        }
      }
      guard(YY) {
        try {
          YY()
        } catch (rY) {
          this.gy(rY)
        }
      }
    }

    function fF(YY) {
      return YY === yY.Vc ? null : String(YY)
    }

    function jF(YY) {
      YY.Zu(sY.pd)
    }

    function hF(YY) {
      var rY;
      null === (rY = YY.onClose) || void 0 === rY || rY.call(YY)
    }

    function dF(YY, rY) {
      YY.watch((() => {
        const DY = function(YY) {
          let rY = 0;
          const DY = Math.min(DF, YY.length);
          for (let AY = 0; AY < DY; AY++) {
            var FY;
            const DY = null === (FY = YY.slot(AY)) || void 0 === FY ? void 0 : FY.typeObj,
              IY = DY ? (0, YF.gunTypeOf)(DY.id) : void 0;
            void 0 !== IY && (rY |= 1 << mr[IY])
          }
          return rY
        }(YY);
        0 !== DY && (rY.preload(DY), rY.preload(1 << Vr))
      }))
    }
    var JF = DY(4434),
      MF = DY(36151);

    function wF(YY) {
      const rY = new JF.Howl({
          ...(0, MF.g)(YY),
          pool: 15,
          preload: !1
        }),
        DY = rY.load.bind(rY);
      return rY.load = () => (rY._preload = !0, DY()), rY
    }

    function bF(YY, rY, DY) {
      const FY = YY.listener;
      if (FY.positionX) XF(FY.positionX, rY, DY, 0), XF(FY.positionY, rY, DY, 1), XF(FY.positionZ, rY, DY, 2), XF(FY.forwardX, rY, DY, 3), XF(FY.forwardY, rY, DY, 4), XF(FY.forwardZ, rY, DY, 5), XF(FY.upX, rY, DY, 6), XF(FY.upY, rY, DY, 7), XF(FY.upZ, rY, DY, 8);
      else {
        let YY = !1;
        for (let FY = 0; FY < 9; FY++) YY ||= rY[FY] !== DY[FY];
        YY && (FY.setPosition(rY[0], rY[1], rY[2]), FY.setOrientation(rY[3], rY[4], rY[5], rY[6], rY[7], rY[8]), DY.set(rY))
      }
    }

    function XF(YY, rY, DY, FY) {
      rY[FY] !== DY[FY] && (YY.value = rY[FY], DY[FY] = rY[FY])
    }
    class qF {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(YY) {
        this.pose.set(YY);
        const rY = JF.Howler.ctx;
        return !!rY && (rY !== this.watchedCtx && (this.watchedCtx = rY, this.written.fill(Number.NaN), rY.addEventListener("statechange", (() => {
          "running" === rY.state && bF(rY, this.pose, this.written)
        }))), "running" === rY.state && bF(rY, YY, this.written), !0)
      }
    }
    var pF = DY(35991),
      kF = DY(38547);
    let GF = null,
      xF = null;

    function nF() {
      return null === GF && (GF = document.createElement("div"), GF.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(GF)), GF
    }

    function PF() {
      return xF ??= new kF.e(new pF.d(nF)), xF
    }

    function UF() {
      var YY;
      null === (YY = xF) || void 0 === YY || YY.clear(), LF(null)
    }

    function LF(YY) {
      FY.b.get("scriptedCameraFacing") !== YY && FY.b.set({
        scriptedCameraFacing: YY
      })
    }
    var tF = DY(8908),
      YA = DY(8870),
      rA = DY(38568),
      DA = DY(39849),
      FA = DY(2864);
    const AA = Object.entries(yY.Yb).reduce(((YY, rY) => {
      let [DY, FY] = rY;
      return YY[FY] = DY, YY
    }), []);

    function IA(YY, rY) {
      var DY;
      return 0 !== ((null !== (DY = YY.itemFlags[rY]) && void 0 !== DY ? DY : 0) & yY.vc.Stackable)
    }
    const RA = /^(0|[1-9][0-9]*)$/,
      OA = {
        displayName: (YY, rY) => (0, YF.displayNameOf)(rY),
        description: (YY, rY) => (0, YF.descriptionOf)(rY),
        type: (YY, rY) => (0, YF.itemTypeOf)(rY),
        clipSize: (YY, rY) => (0, YF.clipSizeOf)(rY),
        armourReduction: (YY, rY) => (0, YF.armourReductionOf)(rY),
        scopeType: (YY, rY) => (0, YF.scopeTypeOf)(rY),
        stackable: IA,
        harvestType: (YY, rY) => AA[YY.blockHarvestTypes[rY]],
        harvestLevel: (YY, rY) => {
          const DY = YY.blockHarvestLevels[rY];
          return DY === yY.Bc ? void 0 : DY
        },
        harvests: (YY, rY) => {
          var DY;
          const FY = null !== (DY = YY.itemHarvests[rY]) && void 0 !== DY ? DY : 0;
          return 0 !== FY ? AA[FY] : void 0 === (0, YF.harvestsNullLevelOf)(rY) ? void 0 : null
        },
        level: (YY, rY) => {
          var DY, FY;
          const AY = null !== (DY = YY.itemLevels[rY]) && void 0 !== DY ? DY : yY.Bc;
          return AY !== yY.Bc ? AY : null !== (FY = (0, YF.harvestsNullLevelOf)(rY)) && void 0 !== FY ? FY : void 0
        }
      };

    function gA(YY, rY, DY) {
      return vA(new Uint8Array(Math.floor(YY.length / rY)), YY, rY, DY)
    }

    function aA(YY, rY, DY) {
      return vA(new Uint16Array(Math.floor(YY.length / rY)), YY, rY, DY)
    }

    function vA(YY, rY, DY, FY) {
      const AY = new DataView(rY.buffer, rY.byteOffset, rY.byteLength);
      for (let IY = 0; IY < YY.length; IY++) YY[IY] = FY(AY, IY * DY);
      return YY
    }
    class uA {
      constructor(YY, rY) {
        this.options = rY, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = YY => {
          const rY = this.idOf(YY);
          if (void 0 === rY) throw new Error(`No item is named ${YY}, an item's root`);
          return rY
        };
        const DY = rY => {
            const DY = rY();
            return new Uint8Array(YY.memory().buffer, YY.scratch(), DY).slice()
          },
          FY = (new TextDecoder).decode(DY((() => YY.queries.itemNames()))).split("\n"),
          AY = DY((() => YY.queries.blockProps())),
          IY = DY((() => YY.queries.itemProps()));
        this.props = {
          blockFlags: gA(AY, yY.B.BYTES, yY.B.flags),
          blockHarvestTypes: gA(AY, yY.B.BYTES, yY.B.harvestType),
          blockHarvestLevels: gA(AY, yY.B.BYTES, yY.B.harvestLevel),
          blockAttachedTops: aA(AY, yY.B.BYTES, yY.B.attachedTop),
          itemFlags: gA(IY, yY.xc.BYTES, yY.xc.flags),
          itemHarvests: gA(IY, yY.xc.BYTES, yY.xc.harvests),
          itemLevels: gA(IY, yY.xc.BYTES, yY.xc.level)
        }, (0, FA.k)(Object.freeze(FY)), (0, DA.e)()
      }
      idOf(YY) {
        if ("number" === typeof YY) return void 0 === (0, FA.e)(YY) ? void 0 : YY;
        const rY = (0, FA.b)(YY);
        return void 0 === rY && RA.test(YY) ? void 0 === (0, FA.e)(+YY) ? void 0 : +YY : rY
      }
      getMetaInfo(YY) {
        if (!YY || YY === tF.d) return tF.g;
        const rY = this.idOf(YY);
        if (void 0 === rY) throw new Error(`Item ${YY} not found in registry`);
        return this.metaOf(rY)
      }
      blockRootId(YY) {
        return 0 !== YY && void 0 !== (0, FA.e)(YY) ? this.metaOf(YY).rootId : YY
      }
      metaOf(YY) {
        return this.metas[YY] ??= (0, YA.k)((0, FA.e)(YY), YY, this.rootIdOf, (0, YF.rootMetaDescOf)(YY))
      }
      getItemId(YY) {
        if (!YY || YY === tF.d) return 0;
        const rY = this.idOf(YY);
        if (void 0 === rY) throw new Error(`Invalid block name. You sent ${YY}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return rY
      }
      getItemName(YY) {
        if (!YY || YY === tF.d) return tF.d;
        const rY = this.idOf(YY);
        if (void 0 === rY) throw new Error(`Item ${YY} not found in registry`);
        return (0, FA.e)(rY)
      }
      blockNameToBlockId(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (YY === tF.d) return 0;
        let DY = this.idOf(YY);
        if (void 0 === DY || !this.isBlockId(DY)) {
          const rY = YY.indexOf("|"),
            FY = rY > 0 ? (0, FA.b)(YY.slice(0, rY)) : void 0;
          DY = void 0 !== FY && this.isBlockId(FY) && (0, YF.rootMetaDescOf)(FY) === YY ? FY : void 0
        }
        if (void 0 !== DY) return DY;
        if (!rY) throw new Error(`Invalid block name. You sent ${YY}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(YY) {
        return YY > 0 && YY < this.props.blockFlags.length
      }
      nameOfId(YY) {
        return 0 !== YY && (0, FA.e)(YY) || tF.d
      }
      itemType(YY) {
        const rY = YY ? this.idOf(YY) : void 0;
        if (!rY) return null;
        let DY = this.types.get(rY);
        return void 0 === DY && (DY = Object.freeze({
          id: rY,
          name: (0, FA.e)(rY),
          meta: this.getMetaInfo(rY),
          stackable: IA(this.props, rY),
          type: (0, YF.itemTypeNameOf)(rY),
          clipSize: (0, YF.clipSizeOf)(rY),
          scopeType: (0, YF.scopeTypeOf)(rY),
          showsAimingUi: (0, YF.showsAimingUi)(rY)
        }), this.types.set(rY, DY)), DY
      }
      getItemStat(YY, rY) {
        if (rA.d.has(rY)) {
          const DY = "minChargeStateToUse" === rY ? this.getMetaInfo(YY).rootName : this.getItemName(YY),
            FY = this.options.get((0, rA.f)(DY, rY));
          if (null !== FY && void 0 !== FY) return FY
        }
        return this.defaultStat(YY, rY, this.statOf(rY))
      }
      getDisplayName(YY) {
        return this.getItemStat(YY, "displayName")
      }
      getDefaultItemStat(YY, rY) {
        return this.defaultStat(YY, rY, this.statOf(rY))
      }
      statOf(YY) {
        const rY = OA[YY];
        return void 0 === rY && function(YY, rY) {
          throw new Error(`ClientApi.${YY} is not available yet in the wasm client (${rY})`)
        }(`getItemStat("${YY}")`, `a table of the stat: the wasm client answers ${Object.keys(OA).join(", ")}`), rY
      }
      defaultStat(YY, rY, DY) {
        const FY = this.idOf(YY),
          AY = void 0 === FY ? void 0 : DY(this.props, FY);
        return null !== AY && void 0 !== AY || "displayName" !== rY ? AY : this.getItemName(YY)
      }
      getClientOption(YY) {
        return this.options.get(YY)
      }
      getGunStats(YY) {
        return this.getClientOption(`${YY}GunStats`)
      }
      watchClientOption(YY, rY) {
        return this.options.subscribe(YY, rY)
      }
      isSolidBlockId(YY) {
        var rY;
        return 0 !== ((null !== (rY = this.props.blockFlags[YY]) && void 0 !== rY ? rY : 0) & yY.y.Solid)
      }
      isStackableId(YY) {
        return IA(this.props, YY)
      }
      isFluidBlockId(YY) {
        var rY;
        return 0 !== ((null !== (rY = this.props.blockFlags[YY]) && void 0 !== rY ? rY : 0) & yY.y.Fluid)
      }
      canPlaceOverBlockId(YY) {
        var rY;
        return 0 !== ((null !== (rY = this.props.blockFlags[YY]) && void 0 !== rY ? rY : 0) & yY.y.PlaceOver)
      }
      attachedTopOf(YY) {
        var rY;
        return null !== (rY = this.props.blockAttachedTops[YY]) && void 0 !== rY ? rY : 0
      }
      isDroplessBlockId(YY) {
        return (0, YF.dropsNothing)(YY)
      }
    }

    function sA(YY, rY) {
      const DY = new Map;
      return (FY, AY) => {
        const IY = rY.idOf(FY),
          RY = void 0 === IY ? null : (FY => {
            let AY = DY.get(FY);
            if (void 0 === AY) {
              const IY = YY.queries.salvageRecipe(FY),
                RY = new DataView(YY.memory().buffer, YY.scratch(), IY),
                OY = [];
              for (let YY = 0; YY + yY.Qd.BYTES <= IY; YY += yY.Qd.BYTES) OY.push(Object.freeze({
                item: rY.nameOfId(yY.Qd.item(RY, YY)),
                amt: yY.Qd.amount(RY, YY)
              }));
              AY = 0 === OY.length ? null : Object.freeze(OY), DY.set(FY, AY)
            }
            return AY
          })(IY);
        if (null === RY || void 0 === AY) return RY;
        const OY = AY <= 0 ? 1 : AY;
        return RY.map((YY => {
          let {
            item: rY,
            amt: DY
          } = YY;
          return {
            item: rY,
            amt: DY * OY
          }
        }))
      }
    }
    var iA = DY(40019),
      yA = DY(36326),
      QA = DY(36322),
      oA = DY(36356),
      WA = DY(35928),
      EA = DY(39785),
      mA = DY(41628);
    const VA = -1,
      SA = new Uint8Array(0),
      lA = new TextEncoder;

    function TA(YY) {
      if (null === YY) return null;
      const rY = lA.encode(YY);
      return rY.byteLength < sY.zc ? rY : rY.subarray(0, sY.zc - 1)
    }
    class eA {
      constructor(YY) {
        this.deps = YY, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = VA, this.keyframesSettled = !1, this.reloadFrom = VA
      }
      reloadKeyframes() {
        var YY, rY;
        this.keyframesVersion = VA, this.reloadFrom = null !== (YY = null === (rY = this.view()) || void 0 === rY ? void 0 : rY.version) && void 0 !== YY ? YY : VA
      }
      setPlayback(YY) {
        const rY = 1 === this.deps.core.dFY(YY);
        return rY && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = VA, this.reloadFrom = VA), rY
      }
      async open(YY) {
        const rY = await this.deps.replay.open(YY);
        return "opening" === rY && (this.reloadKeyframes(), this.deps.recorder.prefetch()), rY
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(YY)), rY)
      }
      setSpeed(YY) {
        this.deps.replay.setSpeed(YY)
      }
      setCameraMode(YY) {
        this.deps.replay.setCameraMode(mA.d.indexOf(YY))
      }
      view() {
        var YY;
        const rY = yY.s.replayViewPtr(this.deps.apiView(), 0);
        if (0 === rY) return this.lastView = null, null;
        const DY = new DataView(this.deps.buffer(), rY, yY.Jd.BYTES),
          FY = yY.Jd.version(DY, 0),
          AY = this.lastView;
        if (null !== AY && AY.version === FY) return AY;
        const IY = yY.Jd.markIn(DY, 0),
          RY = {
            version: FY,
            state: yY.Jd.state(DY, 0),
            cameraMode: null !== (YY = mA.d[yY.Jd.cameraMode(DY, 0)]) && void 0 !== YY ? YY : "recording",
            Zu: yY.Jd.Zu(DY, 0),
            totalTicks: yY.Jd.totalTicks(DY, 0),
            speed: yY.Jd.speed(DY, 0),
            mark: IY === yY.Id ? null : {
              inTick: IY,
              outTick: yY.Jd.markOut(DY, 0)
            },
            editVersion: yY.Jd.editVersion(DY, 0)
          };
        return this.lastView = RY, RY
      }
      keyframes() {
        const YY = this.view();
        if (null === YY) return [];
        YY.version !== this.reloadFrom && (this.reloadFrom = VA);
        const rY = this.reloadFrom === VA && YY.state !== sY.ed.Cropping && YY.state !== sY.ed.None,
          DY = rY ? YY.editVersion : YY.version;
        if (DY === this.keyframesVersion && rY === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: FY
        } = this.deps, AY = FY.JFY(), IY = FY.Zo(), RY = [];
        if (0 !== IY && AY > 0) {
          const YY = new DataView(this.deps.buffer(), IY, AY * sY.nc);
          for (let rY = 0; rY < AY; rY++) {
            const DY = rY * sY.nc,
              FY = rY => YY.getFloat64(DY + rY, !0);
            RY.push({
              Zu: YY.getUint32(DY + sY.yc, !0),
              position: [FY(sY.xc), FY(sY.xc + 8), FY(sY.xc + 16)],
              direction: [FY(sY.rc), FY(sY.rc + 8), FY(sY.rc + 16)],
              easing: [FY(sY.tc), FY(sY.tc + 8), FY(sY.tc + 16), FY(sY.tc + 24)]
            })
          }
        }
        return this.keyframesVersion = DY, this.keyframesSettled = rY, this.lastKeyframes = RY, RY
      }
      addKeyframe() {
        const YY = this.deps.apiView(),
          rY = [yY.s.eye(YY, 0, 0), yY.s.eye(YY, 0, 1), yY.s.eye(YY, 0, 2)];
        return this.deps.replay.addKeyframe(rY, function(YY, rY) {
          const DY = Math.cos(rY);
          return [DY * Math.sin(YY), -Math.sin(rY), DY * Math.cos(YY)]
        }(yY.s.heading(YY, 0), yY.s.pitch(YY, 0)))
      }
      setKeyframe(YY) {
        return this.deps.replay.setKeyframe(YY.Zu, Float64Array.from([...YY.position, ...YY.direction, ...YY.easing]))
      }
      moveKeyframe(YY, rY) {
        return this.deps.replay.moveKeyframe(YY, rY)
      }
      deleteKeyframes(YY, rY) {
        return this.deps.replay.deleteKeyframes(YY, rY)
      }
      setMark(YY) {
        var rY, DY;
        return this.deps.replay.setMark(null !== (rY = null === YY || void 0 === YY ? void 0 : YY.inTick) && void 0 !== rY ? rY : -1, null !== (DY = null === YY || void 0 === YY ? void 0 : YY.outTick) && void 0 !== DY ? DY : -1)
      }
      crop(YY, rY) {
        const DY = this.deps.replay.crop(YY, rY);
        return DY && this.reloadKeyframes(), DY
      }
      save(YY) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(YY)
      }
      recorderControl(YY) {
        this.deps.recorder.control(YY)
      }
      recorderPrefs(YY, rY) {
        this.deps.recorder.prefs(YY, rY)
      }
      recorderOption(YY, rY) {
        const DY = this.deps.cmd();
        return null !== DY && (0, yY.uf)(DY, 0, YY, null === rY ? SA : lA.encode(rY))
      }
      recordFlyingText(YY, rY, DY, FY) {
        const AY = this.deps.cmd(),
          IY = Math.max(0, Math.min(4294967295, Math.round(FY)));
        return null !== AY && (0, yY.nf)(AY, 0, rY, DY, IY, lA.encode(YY))
      }
      recordPlayerKilled(YY, rY, DY, FY) {
        const AY = this.deps.cmd();
        return null !== AY && (0, yY.wf)(AY, 0, YY, rY, Math.max(0, DY), lA.encode(FY))
      }
      recordKillfeed(YY, rY, DY) {
        var FY, AY;
        const IY = this.deps.cmd(),
          RY = function(YY) {
            const rY = YY.reduce(((YY, rY) => {
                var DY;
                return YY + pD.jb + (null !== (DY = null === rY || void 0 === rY ? void 0 : rY.byteLength) && void 0 !== DY ? DY : 0)
              }), 0),
              DY = new Uint8Array(rY),
              FY = new DataView(DY.buffer);
            let AY = 0;
            for (const RY of YY) {
              var IY;
              FY.setUint16(AY, null !== (IY = null === RY || void 0 === RY ? void 0 : RY.byteLength) && void 0 !== IY ? IY : sY.zc, !0), AY += pD.jb, null !== RY && (DY.set(RY, AY), AY += RY.byteLength)
            }
            return DY
          }([TA(YY.name), TA(YY.colour), TA(rY.name), TA(rY.colour), TA(DY)]);
        return null !== IY && (0, yY.rf)(IY, 0, null !== (FY = YY.id) && void 0 !== FY ? FY : yY.Yc, null !== (AY = rY.id) && void 0 !== AY ? AY : yY.Yc, RY)
      }
      recorderSession(YY, rY) {
        this.deps.recorder.session({
          session: rY,
          lobbyType: YY.lobbyType,
          game: YY.gameNameWithVariation,
          lobby: YY.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.MFY()
      }
      filePartDone(YY, rY) {
        this.deps.recorder.filePartDone(YY, rY)
      }
      fileDone(YY) {
        this.deps.recorder.fileDone(YY)
      }
    }
    const NA = -2147483648;
    class BA {
      constructor(YY) {
        var rY;
        this.deps = YY, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (rY = YY.now) && void 0 !== rY ? rY : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var YY, rY, DY;
        return null === (YY = null === (rY = (DY = this.deps).live) || void 0 === rY ? void 0 : rY.call(DY)) || void 0 === YY || YY
      }
      activated(YY) {
        var rY, DY;
        this.live && (this.viewerShown(!0 === (null === (rY = (DY = this.deps).viewerOpen) || void 0 === rY ? void 0 : rY.call(DY))), this.deps.client.recorderSession(YY, (0, mA.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var YY, rY;
        this.live && (this.state.recording || !0 !== (null === (YY = (rY = this.deps).viewerOpen) || void 0 === YY ? void 0 : YY.call(rY))) ? this.deps.client.recorderControl(sY.Qc.ToggleRecording) : this.deps.notify(oA.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(sY.Qc.SaveClip) : this.deps.notify(oA.c.clippingNotOn)
      }
      viewerShown(YY) {
        this.live && this.deps.client.recorderControl(YY ? sY.Qc.ViewerOpened : sY.Qc.ViewerClosed)
      }
      setPrefs(YY, rY) {
        this.live && this.deps.client.recorderPrefs(YY, rY)
      }
      setOption(YY, rY) {
        this.live && this.deps.client.recorderOption(YY, rY)
      }
      recordFlyingText(YY, rY, DY, FY) {
        this.live && this.deps.client.recordFlyingText(YY, rY, DY, FY)
      }
      recordPlayerKilled(YY, rY, DY, FY) {
        this.live && this.deps.client.recordPlayerKilled(YY, rY, DY, FY)
      }
      recordKillfeed(YY, rY, DY) {
        this.live && this.deps.client.recordKillfeed(YY, rY, DY)
      }
      Zu() {
        let YY = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, YY = {
            ...YY,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const rY = Math.floor((this.now() - this.recordingSince) / 1e3);
          rY !== YY.seconds && (YY = {
            ...YY,
            seconds: rY
          })
        }
        this.set(YY)
      }
      onEvent(YY) {
        var rY, DY;
        const {
          notify: FY
        } = this.deps, AY = oA.c;
        switch (YY.what) {
          case sY.Nc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), FY(AY.recordingStarted);
            break;
          case sY.Nc.RecordingStopped:
            this.stopRecording(), FY(AY.recordingStopped), this.saveState(sY._c.Recording, "saving");
            break;
          case sY.Nc.RecordingDiscarded:
            this.stopRecording(), FY(AY.recordingDiscarded);
            break;
          case sY.Nc.RecordingTurnedOff:
            this.stopRecording(), FY(AY.recordingTurnedOff);
            break;
          case sY.Nc.LimitReached:
            FY(AY.limitReached);
            break;
          case sY.Nc.ClipSaved:
            this.saveState(sY._c.Clip, "saving");
            break;
          case sY.Nc.ClipEmpty:
            FY(AY.clipEmpty);
            break;
          case sY.Nc.ClippingNotOn:
            FY(AY.clippingNotOn);
            break;
          case sY.Nc.Disallowed:
            FY(AY.disallowed);
            break;
          case sY.Nc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case sY.Nc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case sY.Nc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case sY.Nc.SaveBusy:
            null === (rY = (DY = this.deps).onSaveState) || void 0 === rY || rY.call(DY, YY.kind, "busy"), FY(AY.saveBusy);
            break;
          case sY.Nc.CloseViewerFirst:
            FY(AY.closeViewerFirst)
        }
      }
      fileReady(YY, rY) {
        this.deps.download(rY), this.saveState(YY, "done"), this.deps.notify(YY === sY._c.Clip ? oA.c.clipSaved : oA.c.recordingSaved)
      }
      failed(YY) {
        this.saveState(YY, "failed"), this.deps.notify(YY === sY._c.Clip ? oA.c.clipFailed : oA.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(YY, rY) {
        var DY, FY;
        null === (DY = (FY = this.deps).onSaveState) || void 0 === DY || DY.call(FY, YY, rY)
      }
      set(YY) {
        YY !== this.state && (this.state = YY, this.deps.onState(YY))
      }
    }
    const cA = new TextDecoder;

    function KA(YY, rY, DY, FY) {
      const AY = [];
      for (let IY = 0; IY < FY; IY++) {
        if (rY + pD.jb > DY) return null;
        const FY = YY.getUint16(rY, !0);
        if (rY += pD.jb, FY !== sY.zc) {
          if (rY + FY > DY) return null;
          AY.push(cA.decode(new Uint8Array(YY.buffer, YY.byteOffset + rY, FY))), rY += FY
        } else AY.push(null)
      }
      return rY === DY ? AY : null
    }

    function HA(YY, rY) {
      let DY = new DataView(new ArrayBuffer(0)),
        FY = !0;
      const AY = {
        replayFailed: (rY, DY) => {
          YY.replayFailed({
            reason: rY,
            code: DY
          })
        },
        replayOption: (rY, AY, IY, RY) => {
          const OY = function(YY, rY, DY, FY) {
            switch (rY) {
              case sY.ad.Cleared:
                return 0 === FY ? null : void 0;
              case sY.ad.Text:
                return cA.decode(new Uint8Array(YY.buffer, YY.byteOffset + DY, FY));
              case sY.ad.Int:
                return FY === Int32Array.BYTES_PER_ELEMENT ? YY.getInt32(DY, !0) : void 0;
              case sY.ad.Double:
                return FY === Float64Array.BYTES_PER_ELEMENT ? YY.getFloat64(DY, !0) : void 0;
              default:
                return
            }
          }(DY, AY, IY, RY);
          void 0 !== OY ? YY.replayOption({
            key: rY,
            value: OY
          }) : FY = !1
        },
        replayUiEvent: (rY, AY, IY, RY, OY, gY) => {
          const aY = function(YY, rY, DY, FY, AY, IY, RY) {
            const OY = IY + RY;
            switch (rY) {
              case sY.cd.FlyingText: {
                const RY = KA(YY, IY, OY, 1);
                return null !== RY && null !== RY[0] ? {
                  what: rY,
                  dY: DY,
                  hY: FY,
                  angle: AY,
                  contentJson: RY[0]
                } : null
              }
              case sY.cd.PlayerKilled: {
                const FY = KA(YY, IY, OY, 3);
                return FY ? {
                  what: rY,
                  killstreak: DY,
                  dead: FY[0],
                  killer: FY[1],
                  withItem: FY[2]
                } : null
              }
              case sY.cd.Killfeed: {
                const DY = KA(YY, IY, OY, 7);
                return DY ? {
                  what: rY,
                  killerId: DY[0],
                  killerName: DY[1],
                  killerColour: DY[2],
                  victimId: DY[3],
                  victimName: DY[4],
                  victimColour: DY[5],
                  withItem: DY[6]
                } : null
              }
              default:
                return null
            }
          }(DY, rY, AY, IY, RY, OY, gY);
          null !== aY ? YY.replayUiEvent(aY) : FY = !1
        },
        replayFilePart: (DY, AY, IY, RY) => {
          const OY = rY();
          IY + RY > OY.byteLength ? FY = !1 : YY.filePart(DY, AY, new Uint8Array(OY, IY, RY).slice())
        },
        replayFileReady: (rY, DY, FY, AY) => {
          YY.fileReady({
            save: rY,
            kind: DY,
            parts: FY,
            bytes: AY
          })
        },
        recorderEvent: (rY, DY, FY) => {
          YY.recorderEvent({
            what: rY,
            kind: DY,
            save: FY
          })
        },
        replayOpened: (rY, FY, AY) => {
          YY.replayOpened(cA.decode(new Uint8Array(DY.buffer, DY.byteOffset + FY, AY)))
        }
      };
      return (YY, rY, IY, RY) => !(YY < sY.R.ReplayFailed || YY > sY.R.RecorderEvent) && (DY = rY, FY = !0, (0, yY.je)(YY, rY, IY, RY, AY) && FY)
    }

    function zA(YY) {
      let rY = null;
      const DY = HA(YY, (() => {
        if (null === rY) throw new Error("a recorder event read outside recorderEventReader's call");
        return rY.buffer
      }));
      return (YY, FY) => {
        rY = FY;
        try {
          ! function(YY, rY) {
            const DY = YY.slice(),
              FY = new DataView(DY.buffer);
            for (let AY = 0; AY < DY.byteLength;) {
              if (AY + sY.O > DY.byteLength) throw new Error(`the recorder module's events end mid-head at ${AY}`);
              const YY = FY.getUint32(AY, !0),
                IY = 65535 & YY,
                RY = YY >>> 16,
                OY = AY + sY.O;
              if (OY + RY > DY.byteLength || !rY(IY, FY, OY, RY)) throw new Error(`the recorder module wrote a malformed event ${IY} (${RY} bytes) at ${AY}`);
              AY = OY + (0, sY.ee)(RY)
            }
          }(YY, DY)
        } finally {
          rY = null
        }
      }
    }
    class ZA {
      constructor(YY, rY) {
        this.acks = YY, this.handlers = rY, this.parts = new Map
      }
      onPart(YY, rY, DY) {
        let FY = this.parts.get(YY);
        FY || (FY = [], this.parts.set(YY, FY)), FY[rY] = DY, this.acks.filePartDone(YY, rY)
      }
      onReady(YY) {
        var rY;
        const DY = null !== (rY = this.parts.get(YY.save)) && void 0 !== rY ? rY : [];
        this.parts.delete(YY.save);
        const FY = function(YY, rY, DY) {
          if (YY.length !== rY) return null;
          let FY = 0;
          for (let RY = 0; RY < rY; RY++) {
            if (void 0 === YY[RY]) return null;
            FY += YY[RY].byteLength
          }
          if (FY !== DY) return null;
          if (1 === rY) return YY[0];
          const AY = new Uint8Array(DY);
          let IY = 0;
          for (const RY of YY) AY.set(RY, IY), IY += RY.byteLength;
          return AY
        }(DY, YY.parts, YY.bytes);
        this.acks.fileDone(YY.save), null === FY ? this.handlers.fileIncomplete(YY.save, YY.kind) : this.handlers.fileReady(YY.save, YY.kind, FY)
      }
      onDiscarded(YY) {
        this.parts.delete(YY)
      }
    }

    function CA() {
      return DY.e(57).then((() => DY(41664)))
    }
    class fA {
      constructor(YY) {
        this.deps = YY, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: rY
        } = YY;
        this.recorder = new BA({
          client: rY,
          live: () => {
            var YY;
            return !0 !== (null === (YY = this.viewer) || void 0 === YY ? void 0 : YY.inPlayback)
          },
          viewerOpen: YY.viewerOpen,
          notify: YY.notify,
          download: rY => {
            var DY;
            null === (DY = YY.download) || void 0 === DY || DY.call(YY, rY)
          },
          onState: YY.onRecorderState,
          onSaveState: YY.onSaveState
        }), this.parts = new ZA(rY, {
          fileReady: (YY, rY, DY) => {
            var FY;
            rY === sY._c.Edited ? null === (FY = this.viewer) || void 0 === FY || FY.saveDone(DY) : this.recorder.fileReady(rY, DY)
          },
          fileIncomplete: (YY, rY) => {
            this.saveFailed(rY)
          }
        });
        const DY = {
          replayFailed: YY => {
            var rY;
            null === (rY = this.viewer) || void 0 === rY || rY.onFailed(YY)
          },
          replayOption: rY => {
            var DY;
            null === (DY = YY.onReplayOption) || void 0 === DY || DY.call(YY, rY)
          },
          replayUiEvent: rY => {
            var DY;
            null === (DY = YY.onReplayUiEvent) || void 0 === DY || DY.call(YY, rY)
          },
          filePart: (YY, rY, DY) => {
            this.parts.onPart(YY, rY, DY)
          },
          fileReady: YY => {
            this.parts.onReady(YY)
          },
          replayOpened: rY => {
            var DY;
            null === (DY = YY.onReplayOpened) || void 0 === DY || DY.call(YY, rY)
          },
          recorderEvent: YY => {
            var rY;
            switch (YY.what) {
              case sY.Nc.FileDiscarded:
                this.parts.onDiscarded(YY.save);
                break;
              case sY.Nc.SaveFailed:
                this.saveFailed(YY.kind);
                break;
              case sY.Nc.SaveBusy:
                if (null !== (rY = this.viewer) && void 0 !== rY && rY.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(YY);
                break;
              default:
                this.recorder.onEvent(YY)
            }
          }
        };
        this.sink = function(YY, rY) {
          return {
            onReplayEvent: HA(YY, rY)
          }
        }(DY, YY.buffer), this.recorderEvents = zA(DY)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var YY;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (YY = this.deps.loadViewer) && void 0 !== YY ? YY : CA)().catch((YY => {
          throw this.viewerChunk = null, YY
        })), this.viewerChunk.then((YY => (this.viewer ??= new YY.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var YY, rY;
            null === (YY = (rY = this.deps).onViewerChange) || void 0 === YY || YY.call(rY)
          }
        }), this.viewer))))
      }
      activated(YY) {
        this.recorder.activated(YY)
      }
      afterFrame(YY) {
        try {
          YY > 0 && this.recorder.Zu()
        } finally {
          var rY;
          null === (rY = this.viewer) || void 0 === rY || rY.afterFrame()
        }
      }
      end() {
        var YY;
        null === (YY = this.viewer) || void 0 === YY || YY.end()
      }
      saveFailed(YY) {
        var rY;
        YY === sY._c.Edited ? null === (rY = this.viewer) || void 0 === rY || rY.saveFailed(!1) : this.recorder.failed(YY)
      }
    }
    var jA = DY(39728),
      hA = DY(39739),
      dA = DY(4386),
      JA = DY(40122);
    class MA {
      constructor(YY) {
        this.deps = YY, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(YY, rY) {
        if (!this.deps.live() || 0 === YY && 0 === rY) return;
        const DY = (0, dY.u)(0, performance.now()),
          FY = this.deps.dragScale();
        (0, JA.h)((() => {
          (0, dY.B)(sY.ub.MouseDown, 0, 0, 0, DY), (0, dY.B)(sY.ub.MouseMove, 0, YY * FY, rY * FY, 0), (0, dY.B)(sY.ub.MouseUp, 0, 0, 0, DY)
        }))
      }
      move(YY) {
        var rY, DY;
        this.analogue[0] = null !== (rY = null === YY || void 0 === YY ? void 0 : YY.x) && void 0 !== rY ? rY : 0, this.analogue[1] = null !== (DY = null === YY || void 0 === YY ? void 0 : YY.y) && void 0 !== DY ? DY : 0, this.send()
      }
      holdVertical(YY, rY) {
        const DY = "freeCamUp" === YY ? yY.Ob.Up : yY.Ob.Down;
        this.keys = rY ? this.keys | DY : this.keys & ~DY, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const YY = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== YY && !(0, yY.we)(YY, 0, this.analogue, this.keys)
      }
    }
    var wA = DY(732),
      bA = DY(309),
      XA = DY(99),
      qA = DY(8659);

    function pA() {
      const YY = FY.b.get("clientEscMenuOptions"),
        rY = (0, wA.j)(YY);
      return {
        mouse: (0, XA.isMobile)() ? rY : YY.mouseSensitivity,
        touch: rY,
        fovPercent: YY.cameraFOV
      }
    }

    function kA() {
      const YY = FY.b.get("clientEscMenuOptions"),
        rY = FY.b.get("isTouchScreen") ? (0, wA.j)(YY) : YY.mouseSensitivity,
        DY = pA().mouse;
      return DY > 0 ? rY / DY : 1
    }

    function GA(YY) {
      const rY = () => {
        YY.setSoundPrefs(FY.b.get("soundVolume"), FY.b.get("soundOnFromAd"))
      };
      let DY = null;
      const AY = () => {
        const {
          showFog: rY,
          enableLighting: AY,
          fogChunkDistance: IY,
          chunkFadeIn: RY
        } = FY.b.get("clientEscMenuOptions"), OY = {
          showFog: rY,
          lighting: AY,
          fogChunks: IY,
          chunkFade: RY
        };
        DY && (0, sY.Sd)(DY) === (0, sY.Sd)(OY) && DY.fogChunks === IY || (DY = OY, YY.setEnvPrefs(DY))
      };
      let IY = null;
      const OY = () => {
        const rY = function() {
          const YY = FY.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: FY.b.get("areNametagsHidden"),
            crouchToggle: YY.crouchIsToggle,
            bhopDisabled: YY.disableBunnyHopping,
            disableBobbing: YY.disableBobbing,
            ezTowering: YY.ezTowering && (0, bA.h)(),
            ezBridging: YY.ezBridging,
            showChunkBorders: YY.showChunkBorders,
            nametagCutDistance: (0, qA.g)()
          }
        }();
        (0, BY.Zd)(IY, rY) || (IY = rY, YY.setUiPrefs(rY))
      };
      let gY = null;
      const aY = () => {
        const rY = pA();
        (0, BY.Zd)(gY, rY) || (gY = rY, YY.setLookPrefs(rY))
      };
      rY(), AY(), OY(), aY();
      const vY = [(0, RY.j)("appManagerUpdated|soundVolume", rY), (0, RY.j)("appManagerUpdated|soundOnFromAd", rY), (0, RY.j)("appManagerUpdated|clientEscMenuOptions", (() => {
        AY(), OY(), aY()
      })), (0, RY.j)("appManagerUpdated|areNametagsHidden", OY), (0, RY.j)("appManagerUpdated|showDistantNametags", OY)];
      return () => {
        for (const YY of vY) YY()
      }
    }
    var xA = DY(40028),
      nA = DY(40034);
    var PA = (0, nA.b)("lend"),
      UA = (0, nA.b)("starting"),
      LA = (0, nA.b)("generation"),
      tA = (0, nA.b)("end");
    class YI {
      constructor(YY) {
        this.deps = YY, Object.defineProperty(this, tA, {
          value: rI
        }), Object.defineProperty(this, PA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, UA, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, LA, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, xA.d)(this, PA)[PA] || (0, xA.d)(this, UA)[UA]
      }
      async start(YY) {
        if (this.active) return "busy";
        const rY = (0, xA.d)(this, LA)[LA];
        (0, xA.d)(this, UA)[UA] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, xA.d)(this, UA)[UA] = !1
        }
        if (rY !== (0, xA.d)(this, LA)[LA]) return "refused";
        const DY = this.deps.beginSave();
        if (!DY) return "refused";
        const FY = Number(BigInt.asUintN(32, YY)),
          AY = Number(BigInt.asUintN(32, YY >> 32n));
        let IY = "refused";
        return this.deps.recorderCall(((YY, rY) => {
          const RY = DY.editState,
            OY = YY.stage(RY.length);
          0 !== OY ? (new Uint8Array(rY.buffer, OY, RY.length).set(RY), YY.wFY(DY.headLen, FY, AY) && (IY = "sealing")) : IY = "tooLarge"
        }), !0), "sealing" !== IY ? (DY.end(), IY) : ((0, xA.d)(this, PA)[PA] = DY, "sealing")
      }
      beforeRecorderStep() {
        const YY = (0, xA.d)(this, PA)[PA];
        if (!YY) return null;
        let rY = -1,
          DY = 0;
        if (!this.deps.recorderCall((YY => {
            rY = YY.bFY(), rY > 0 && (DY = YY.XFY())
          }))) return (0, xA.d)(this, tA)[tA](YY, "stopped");
        if (rY < 0) return (0, xA.d)(this, tA)[tA](YY, "read");
        if (0 === rY) return null;
        const FY = YY.head(DY, rY);
        let AY = !1;
        if (FY && this.deps.recorderCall(((YY, DY) => {
            const IY = YY.stage(rY);
            0 !== IY && (new Uint8Array(DY.buffer, IY, rY).set(FY), AY = !0)
          }), !0), AY) return null;
        const IY = YY.givenUp();
        this.deps.recorderCall((YY => {
          YY.qFY()
        }));
        const RY = (0, xA.d)(this, tA)[tA](YY, IY ? "givenUp" : "stopped");
        return IY && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), RY
      }
      stop() {
        (0, xA.d)(this, LA)[LA]++;
        const YY = (0, xA.d)(this, PA)[PA];
        YY && (this.deps.recorderCall((YY => {
          YY.qFY()
        })), (0, xA.d)(this, tA)[tA](YY, "stopped"))
      }
    }

    function rI(YY, rY) {
      return (0, xA.d)(this, PA)[PA] = null, YY.end(), rY
    }

    function DI(YY, rY) {
      const DY = new Uint8Array(4),
        FY = new DataView(DY.buffer);
      return FY.setUint8(0, YY ? 1 : 0), FY.setUint16(2, Math.max(0, Math.min(65535, Math.round(rY))), !0), DY
    }

    function FI(YY, rY) {
      return YY > function(YY) {
        return 16777216 + 314572.8 * Math.max(0, YY)
      }(rY) + 33554432
    }
    let AI = null;

    function II(YY) {
      return AI ??= async function(YY) {
        const rY = YY.loadInFlight();
        rY && await rY.catch((() => {}));
        if (YY.trapped()) return "trapped";
        if (YY.busy() || !FI(YY.memoryBytes(), YY.clipSeconds())) return "Mi";
        YY.unload();
        let DY = !1;
        try {
          DY = await YY.load()
        } catch {
          DY = !1
        }
        if (!DY) return YY.trapped() ? "trapped" : YY.Ky() ? "Ky" : "failed";
        return "recycled"
      }(YY).finally((() => {
        AI = null
      })), AI
    }
    const RI = "Replay recording couldn't load, so try again.",
      OI = new Set([sY.Qc.ToggleRecording, sY.Qc.SaveClip]);
    var gI = (0, nA.b)("bindings"),
      aI = (0, nA.b)("module"),
      vI = (0, nA.b)("memory"),
      uI = (0, nA.b)("trapped"),
      sI = (0, nA.b)("Ky"),
      iI = (0, nA.b)("recycleDue"),
      yI = (0, nA.b)("loading"),
      QI = (0, nA.b)("generation"),
      oI = (0, nA.b)("viewDrawn"),
      WI = (0, nA.b)("clip"),
      EI = (0, nA.b)("session"),
      mI = (0, nA.b)("control"),
      VI = (0, nA.b)("deferred"),
      SI = (0, nA.b)("coreU8"),
      lI = (0, nA.b)("coreU32"),
      TI = (0, nA.b)("moduleU8"),
      eI = (0, nA.b)("edited"),
      NI = (0, nA.b)("sendSession"),
      BI = (0, nA.b)("checkNotInEvents"),
      cI = (0, nA.b)("clipping"),
      KI = (0, nA.b)("busy"),
      HI = (0, nA.b)("use"),
      zI = (0, nA.b)("ensureLoaded"),
      ZI = (0, nA.b)("loadOnce"),
      CI = (0, nA.b)("recycleAfterStep"),
      fI = (0, nA.b)("settleRecycle"),
      jI = (0, nA.b)("load"),
      hI = (0, nA.b)("attach"),
      dI = (0, nA.b)("resendHeld"),
      JI = (0, nA.b)("recycle"),
      MI = (0, nA.b)("send"),
      wI = (0, nA.b)("unload"),
      bI = (0, nA.b)("dropModule"),
      XI = (0, nA.b)("coreBytes"),
      qI = (0, nA.b)("coreWords"),
      pI = (0, nA.b)("moduleBytes"),
      kI = (0, nA.b)("loadFailed"),
      GI = (0, nA.b)("call"),
      xI = (0, nA.b)("guard"),
      nI = (0, nA.b)("trapOn");
    class PI {
      constructor(YY) {
        this.deps = YY, Object.defineProperty(this, nI, {
          value: mR
        }), Object.defineProperty(this, xI, {
          value: ER
        }), Object.defineProperty(this, GI, {
          value: WR
        }), Object.defineProperty(this, kI, {
          value: oR
        }), Object.defineProperty(this, pI, {
          value: QR
        }), Object.defineProperty(this, qI, {
          value: yR
        }), Object.defineProperty(this, XI, {
          value: iR
        }), Object.defineProperty(this, bI, {
          value: sR
        }), Object.defineProperty(this, wI, {
          value: uR
        }), Object.defineProperty(this, MI, {
          value: vR
        }), Object.defineProperty(this, JI, {
          value: aR
        }), Object.defineProperty(this, dI, {
          value: gR
        }), Object.defineProperty(this, hI, {
          value: OR
        }), Object.defineProperty(this, jI, {
          value: RR
        }), Object.defineProperty(this, fI, {
          value: IR
        }), Object.defineProperty(this, CI, {
          value: AR
        }), Object.defineProperty(this, ZI, {
          value: FR
        }), Object.defineProperty(this, zI, {
          value: DR
        }), Object.defineProperty(this, HI, {
          value: rR
        }), Object.defineProperty(this, KI, {
          value: YR
        }), Object.defineProperty(this, cI, {
          value: tI
        }), Object.defineProperty(this, BI, {
          value: LI
        }), Object.defineProperty(this, NI, {
          value: UI
        }), Object.defineProperty(this, gI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, sI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, iI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, oI, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, WI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, EI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, VI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eI, {
          writable: !0,
          value: void 0
        }), (0, xA.d)(this, eI)[eI] = new YI({
          ensureLoaded: () => (0, xA.d)(this, zI)[zI](),
          recorderCall: (YY, rY) => {
            rY && (0, xA.d)(this, BI)[BI]("an edited save's stage");
            const DY = (0, xA.d)(this, GI)[GI](((rY, DY) => (YY(rY, DY), !0)));
            return null !== DY && void 0 !== DY && DY
          },
          beginSave: YY.beginSave,
          givenUp: YY.givenUp
        })
      }
      get active() {
        return null !== (0, xA.d)(this, aI)[aI]
      }
      get trapped() {
        return (0, xA.d)(this, uI)[uI]
      }
      get loading() {
        return null !== (0, xA.d)(this, yI)[yI]
      }
      prefetch() {
        (0, xA.d)(this, sI)[sI] || (0, xA.d)(this, uI)[uI] || (0, xA.d)(this, aI)[aI] || (0, xA.d)(this, yI)[yI] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, xA.d)(this, oI)[oI] = !0, (0, xA.d)(this, cI)[cI]() && (0, xA.d)(this, HI)[HI]()
      }
      prefs(YY, rY) {
        (0, xA.d)(this, WI)[WI] = {
          on: YY,
          seconds: rY
        }, (0, xA.d)(this, MI)[MI](sY.Kc.Prefs, DI(YY, rY)), YY && (0, xA.d)(this, oI)[oI] && (0, xA.d)(this, HI)[HI]()
      }
      control(YY) {
        const rY = function(YY) {
          return new Uint8Array([YY, 0, 0, 0])
        }(YY);
        if (OI.has(YY)) return (0, xA.d)(this, aI)[aI] ? void(0, xA.d)(this, MI)[MI](sY.Kc.Control, rY) : ((0, xA.d)(this, mI)[mI] = rY, void(0, xA.d)(this, HI)[HI]());
        (0, xA.d)(this, sI)[sI] || this.deps.coreCommand(sY.Kc.Control, rY)
      }
      session(YY) {
        (0, xA.d)(this, EI)[EI] = YY, (0, xA.d)(this, NI)[NI](YY)
      }
      filePartDone(YY, rY) {
        (0, xA.d)(this, MI)[MI](sY.Kc.FilePartDone, function(YY, rY) {
          const DY = new Uint8Array(8),
            FY = new DataView(DY.buffer);
          return FY.setUint32(0, YY, !0), FY.setUint32(4, rY, !0), DY
        }(YY, rY))
      }
      fileDone(YY) {
        return (0, xA.d)(this, MI)[MI](sY.Kc.FileDone, function(YY) {
          const rY = new Uint8Array(4);
          return new DataView(rY.buffer).setUint32(0, YY, !0), rY
        }(YY)), (0, xA.d)(this, CI)[CI]()
      }
      saveEdited(YY) {
        return (0, xA.d)(this, BI)[BI]("saveEdited"), (0, xA.d)(this, eI)[eI].start(YY)
      }
      afterFrame() {
        if (!(0, xA.d)(this, aI)[aI]) return;
        "read" === (0, xA.d)(this, eI)[eI].beforeRecorderStep() && (0, xA.d)(this, CI)[CI]();
        const YY = (0, xA.d)(this, iI)[iI];
        (0, xA.d)(this, iI)[iI] = null;
        const rY = (0, xA.d)(this, aI)[aI],
          DY = (0, xA.d)(this, vI)[vI];
        if (!rY || !DY) return void(null === YY || void 0 === YY || YY.resolve((0, xA.d)(this, uI)[uI] ? "trapped" : "Mi"));
        const {
          core: FY
        } = this.deps, AY = FY.GFY(2);
        let IY, RY, OY, gY, aY = 0,
          vY = 0;
        if (0 !== AY) {
          var uY, sY;
          const YY = (0, xA.d)(this, qI)[qI]();
          aY = null !== (uY = YY[AY >>> 2]) && void 0 !== uY ? uY : 0, vY = null !== (sY = YY[1 + (AY >>> 2)]) && void 0 !== sY ? sY : 0
        }
        try {
          if (vY > 0) {
            const YY = rY.feed(vY);
            0 !== YY && (0, xA.d)(this, pI)[pI](DY).set((0, xA.d)(this, XI)[XI]().subarray(aY, aY + vY), YY)
          }
          IY = rY.step(), RY = rY.xFY(), OY = rY.nFY(), gY = rY.PFY()
        } catch (iY) {
          if (!(0, xA.d)(this, nI)[nI](iY)) throw null === YY || void 0 === YY || YY.resolve("Mi"), iY;
          return void(null === YY || void 0 === YY || YY.resolve("trapped"))
        }
        if (IY > 0) {
          const YY = FY.UFY(2, IY);
          0 !== YY && (0, xA.d)(this, XI)[XI]().set((0, xA.d)(this, pI)[pI](DY).subarray(RY, RY + IY), YY)
        }
        if (OY > 0) {
          (0, xA.d)(this, VI)[VI] = [];
          try {
            this.deps.events(new Uint8Array(DY.buffer, gY, OY), DY)
          } catch (iY) {
            throw null === YY || void 0 === YY || YY.resolve("Mi"), iY
          } finally {
            const YY = (0, xA.d)(this, VI)[VI];
            (0, xA.d)(this, VI)[VI] = null;
            for (const [rY, DY] of YY)(0, xA.d)(this, MI)[MI](rY, DY)
          }
        }
        if (!(0, xA.d)(this, cI)[cI]() && !(0, xA.d)(this, KI)[KI]()) return (0, xA.d)(this, wI)[wI](), void(null === YY || void 0 === YY || YY.resolve("Mi"));
        null === YY || void 0 === YY || YY.resolve((0, xA.d)(this, JI)[JI]())
      }
      dispose() {
        (0, xA.d)(this, sI)[sI] = !0, (0, xA.d)(this, wI)[wI]()
      }
    }

    function UI(YY) {
      (0, xA.d)(this, MI)[MI](sY.Kc.Session, function(YY) {
        const rY = new TextEncoder,
          DY = rY.encode(YY.game).subarray(0, 65535),
          FY = rY.encode(YY.lobby).subarray(0, 65535),
          AY = new Uint8Array(22 + DY.length + 2 + FY.length),
          IY = new DataView(AY.buffer);
        IY.setFloat64(0, YY.unixMs, !0), IY.setBigUint64(8, BigInt.asUintN(64, YY.session), !0), IY.setUint8(16, YY.lobbyType);
        let RY = 20;
        for (const OY of [DY, FY]) IY.setUint16(RY, OY.length, !0), AY.set(OY, RY + 2), RY += 2 + OY.length;
        return AY
      }({
        ...YY,
        unixMs: this.deps.unixNow()
      }))
    }

    function LI(YY) {
      false
    }

    function tI() {
      var YY, rY;
      return null !== (YY = null === (rY = (0, xA.d)(this, WI)[WI]) || void 0 === rY ? void 0 : rY.on) && void 0 !== YY && YY
    }

    function YR() {
      const YY = (0, xA.d)(this, aI)[aI];
      let rY = !0;
      if (YY) try {
        rY = YY.busy()
      } catch (DY) {
        if (!(0, xA.d)(this, nI)[nI](DY)) throw DY
      }
      return rY || (0, xA.d)(this, eI)[eI].active
    }
    async function rR() {
      !(0, xA.d)(this, sI)[sI] && this.deps.allowed() ? await (0, xA.d)(this, zI)[zI]() : (0, xA.d)(this, mI)[mI] = null
    }

    function DR() {
      return (0, xA.d)(this, uI)[uI] || (0, xA.d)(this, sI)[sI] ? Promise.resolve(!1) : (0, xA.d)(this, aI)[aI] ? Promise.resolve(!0) : ((0, xA.d)(this, yI)[yI] ??= (0, xA.d)(this, ZI)[ZI](), (0, xA.d)(this, yI)[yI])
    }
    async function FR() {
      let YY = !1;
      try {
        return YY = await (0, xA.d)(this, jI)[jI](), YY
      } finally {
        YY || ((0, xA.d)(this, mI)[mI] = null), (0, xA.d)(this, yI)[yI] = null
      }
    }

    function AR() {
      if (!(0, xA.d)(this, aI)[aI]) return Promise.resolve((0, xA.d)(this, uI)[uI] ? "trapped" : "Mi");
      if (!(0, xA.d)(this, iI)[iI]) {
        let YY = () => {};
        const rY = new Promise((rY => {
          YY = rY
        }));
        (0, xA.d)(this, iI)[iI] = {
          promise: rY,
          resolve: YY
        }
      }
      return (0, xA.d)(this, iI)[iI].promise
    }

    function IR(YY) {
      const rY = (0, xA.d)(this, iI)[iI];
      (0, xA.d)(this, iI)[iI] = null, null === rY || void 0 === rY || rY.resolve(YY)
    }
    async function RR() {
      let YY = (0, xA.d)(this, gI)[gI];
      if (!YY) {
        const rY = (0, xA.d)(this, QI)[QI];
        try {
          YY = await this.deps.load()
        } catch (DY) {
          return rY === (0, xA.d)(this, QI)[QI] && await (0, xA.d)(this, kI)[kI](DY), !1
        }
        if (rY !== (0, xA.d)(this, QI)[QI]) return this.deps.unload(), !1;
        const FY = YY,
          AY = (0, xA.d)(this, xI)[xI]((() => FY.LFY()));
        if (void 0 === AY) return !1;
        const IY = this.deps.core.tFY();
        if (AY !== IY) return await (0, xA.d)(this, kI)[kI](new Error(`recorder port version ${AY}, the core's ${IY}`)), !1;
        (0, xA.d)(this, gI)[gI] = YY
      }
      const rY = YY;
      try {
        if (!(0, xA.d)(this, xI)[xI]((() => ((0, xA.d)(this, aI)[aI] = new rY.YAY, (0, xA.d)(this, vI)[vI] = rY.pFY(), !0)))) return !1;
        (0, xA.d)(this, dI)[dI]();
        const YY = (0, xA.d)(this, mI)[mI];
        return (0, xA.d)(this, mI)[mI] = null, YY && (0, xA.d)(this, MI)[MI](sY.Kc.Control, YY), (0, xA.d)(this, hI)[hI]()
      } catch (DY) {
        return (0, xA.d)(this, wI)[wI](), await (0, xA.d)(this, kI)[kI](DY), !1
      }
    }

    function OR() {
      return this.deps.core.rAY(0), 1 === this.deps.core.rAY(1) || ((0, xA.d)(this, wI)[wI](), this.deps.failed(RI), !1)
    }

    function gR() {
      (0, xA.d)(this, WI)[WI] && (0, xA.d)(this, MI)[MI](sY.Kc.Prefs, DI((0, xA.d)(this, WI)[WI].on, (0, xA.d)(this, WI)[WI].seconds)), (0, xA.d)(this, EI)[EI] && (0, xA.d)(this, NI)[NI]((0, xA.d)(this, EI)[EI])
    }

    function aR() {
      return II({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var YY, rY;
          return null !== (YY = null === (rY = (0, xA.d)(this, WI)[WI]) || void 0 === rY ? void 0 : rY.seconds) && void 0 !== YY ? YY : 0
        },
        trapped: () => (0, xA.d)(this, uI)[uI],
        busy: () => (0, xA.d)(this, KI)[KI](),
        loadInFlight: () => (0, xA.d)(this, yI)[yI],
        Ky: () => (0, xA.d)(this, sI)[sI],
        unload: () => {
          (0, xA.d)(this, wI)[wI]()
        },
        load: () => (0, xA.d)(this, zI)[zI]()
      })
    }

    function vR(YY, rY) {
      (0, xA.d)(this, VI)[VI] ? (0, xA.d)(this, VI)[VI].push([YY, rY]): (0, xA.d)(this, GI)[GI](((DY, FY) => {
        const AY = DY.kFY(rY.length);
        0 !== AY && (new Uint8Array(FY.buffer, AY, rY.length).set(rY), DY.command(YY, rY.length))
      }))
    }

    function uR() {
      (0, xA.d)(this, QI)[QI]++, (0, xA.d)(this, fI)[fI]("Mi"), (0, xA.d)(this, eI)[eI].stop(), this.deps.core.rAY(0), (0, xA.d)(this, bI)[bI](), (0, xA.d)(this, uI)[uI] || ((0, xA.d)(this, gI)[gI] = null, this.deps.unload())
    }

    function sR() {
      (0, xA.d)(this, GI)[GI]((YY => {
        YY.free()
      })), (0, xA.d)(this, aI)[aI] = null, (0, xA.d)(this, vI)[vI] = null, (0, xA.d)(this, TI)[TI] = null
    }

    function iR() {
      var YY;
      const rY = this.deps.coreBuffer();
      return (null === (YY = (0, xA.d)(this, SI)[SI]) || void 0 === YY ? void 0 : YY.buffer) !== rY && ((0, xA.d)(this, SI)[SI] = new Uint8Array(rY)), (0, xA.d)(this, SI)[SI]
    }

    function yR() {
      var YY;
      const rY = this.deps.coreBuffer();
      return (null === (YY = (0, xA.d)(this, lI)[lI]) || void 0 === YY ? void 0 : YY.buffer) !== rY && ((0, xA.d)(this, lI)[lI] = new Uint32Array(rY, 0, rY.byteLength >>> 2)), (0, xA.d)(this, lI)[lI]
    }

    function QR(YY) {
      var rY;
      const DY = YY.buffer;
      return (null === (rY = (0, xA.d)(this, TI)[TI]) || void 0 === rY ? void 0 : rY.buffer) !== DY && ((0, xA.d)(this, TI)[TI] = new Uint8Array(DY)), (0, xA.d)(this, TI)[TI]
    }
    async function oR(YY) {
      await this.deps.staleOr(YY, (() => {
        this.deps.failed(RI)
      }))
    }

    function WR(YY) {
      const rY = (0, xA.d)(this, aI)[aI],
        DY = (0, xA.d)(this, vI)[vI];
      if (rY && DY) return (0, xA.d)(this, xI)[xI]((() => YY(rY, DY)))
    }

    function ER(YY) {
      if (!(0, xA.d)(this, uI)[uI]) try {
        return YY()
      } catch (rY) {
        if (!(0, xA.d)(this, nI)[nI](rY)) throw rY;
        return
      }
    }

    function mR(YY) {
      return YY instanceof WebAssembly.RuntimeError && ((0, xA.d)(this, uI)[uI] = !0, (0, xA.d)(this, aI)[aI] = null, (0, xA.d)(this, vI)[vI] = null, (0, xA.d)(this, TI)[TI] = null, (0, xA.d)(this, gI)[gI] = null, (0, xA.d)(this, mI)[mI] = null, (0, xA.d)(this, fI)[fI]("trapped"), this.deps.core.rAY(0), (0, xA.d)(this, eI)[eI].stop(), this.deps.crash(this.deps.markTrapped(YY)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var VR = DY(38011);
    const SR = new Map([
      ["skyblock", () => DY.e(49).then((() => DY(38005)))]
    ]);

    function lR(YY) {
      const rY = SR.get(YY);
      return rY ? rY().then((() => {
        const rY = (0, VR.e)(YY);
        if (!rY) throw new Error(`${YY}'s replay hook module registered no hook`);
        return rY
      })) : null
    }
    class TR {
      constructor(YY) {
        this.deps = YY, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(YY) {
        if (this.pending.clear(), YY === this.game && null !== this.hook) return void(this.all = !0);
        const rY = ++this.generation;
        this.game = YY, this.hook = null, this.all = !1;
        const DY = this.deps.loadHook(YY);
        null === DY || void 0 === DY || DY.then((YY => {
          rY === this.generation && (this.hook = YY, this.all = !0)
        }), (YY => {
          rY === this.generation && this.deps.onError(YY)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(YY) {
        null === this.hook || this.all || this.pending.set(YY, !0)
      }
      entityInfoChanged(YY) {
        null === this.hook || this.all || this.pending.has(YY) || this.pending.set(YY, !1)
      }
      flush(YY) {
        const {
          hook: rY
        } = this;
        if (null === rY || !YY || !this.all && 0 === this.pending.size) return;
        const DY = this.deps.cmd();
        if (null === DY) return;
        const {
          api: FY
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: YY,
            count: rY
          } = hD(FY, this.ids);
          this.ids = YY;
          for (let DY = 0; DY < rY; DY++) this.pending.set(YY[DY], !0)
        }
        const AY = this.ids = dD(this.ids, this.pending.size);
        let IY = 0;
        for (const aY of this.pending.keys()) AY[IY++] = aY;
        const RY = [],
          OY = JD(FY, AY, IY, ((YY, rY) => {
            null !== rY && RY.push({
              serverId: YY,
              info: rY,
              spawned: !0 === this.pending.get(YY)
            })
          }));
        if (OY) {
          this.pending.clear();
          for (const {
              serverId: YY,
              info: FY,
              spawned: AY
            }
            of RY) try {
            rY(FY, {
              setFacingTolerance: rY => {
                null === rY && AY || ID(DY, YY, rY) || this.pending.set(YY, AY)
              }
            })
          } catch (gY) {
            this.deps.onError(gY)
          }
        }
      }
    }
    var eR = (0, nA.b)("bindings"),
      NR = (0, nA.b)("module"),
      BR = (0, nA.b)("memory"),
      cR = (0, nA.b)("trapped"),
      KR = (0, nA.b)("generation"),
      HR = (0, nA.b)("loading"),
      zR = (0, nA.b)("lend"),
      ZR = (0, nA.b)("givenUp"),
      CR = (0, nA.b)("afterSave"),
      fR = (0, nA.b)("opens"),
      jR = (0, nA.b)("saveAskedAt"),
      hR = (0, nA.b)("unload"),
      dR = (0, nA.b)("dropModule"),
      JR = (0, nA.b)("loadFailed"),
      MR = (0, nA.b)("saveReadsBody"),
      wR = (0, nA.b)("command"),
      bR = (0, nA.b)("call"),
      XR = (0, nA.b)("guard"),
      qR = (0, nA.b)("trapOn");
    class pR {
      constructor(YY) {
        this.deps = YY, Object.defineProperty(this, qR, {
          value: tR
        }), Object.defineProperty(this, XR, {
          value: LR
        }), Object.defineProperty(this, bR, {
          value: UR
        }), Object.defineProperty(this, wR, {
          value: PR
        }), Object.defineProperty(this, MR, {
          get: nR,
          set: void 0
        }), Object.defineProperty(this, JR, {
          value: xR
        }), Object.defineProperty(this, dR, {
          value: GR
        }), Object.defineProperty(this, hR, {
          value: kR
        }), Object.defineProperty(this, eR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, BR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cR, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, KR, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, HR, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, zR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fR, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jR, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, xA.d)(this, NR)[NR] && null === (0, xA.d)(this, CR)[CR]
      }
      async open(YY) {
        if ((0, xA.d)(this, cR)[cR]) return sY.Zc.ModuleTrap;
        let rY = (0, xA.d)(this, eR)[eR];
        if (!rY) {
          const YY = (0, xA.d)(this, KR)[KR];
          (0, xA.d)(this, HR)[HR]++;
          try {
            rY = await this.deps.load()
          } catch (FY) {
            return (0, xA.d)(this, HR)[HR]--, YY !== (0, xA.d)(this, KR)[KR] ? "stopped" : (0, xA.d)(this, JR)[JR](FY)
          }
          if ((0, xA.d)(this, HR)[HR]--, YY !== (0, xA.d)(this, KR)[KR]) return (0, xA.d)(this, eR)[eR] || 0 !== (0, xA.d)(this, HR)[HR] || (0, xA.d)(this, cR)[cR] || this.deps.unload(), "stopped";
          if ((0, xA.d)(this, cR)[cR]) return sY.Zc.ModuleTrap;
          const DY = rY.LFY(),
            AY = this.deps.core.tFY();
          if (DY !== AY) return (0, xA.d)(this, JR)[JR](new Error(`replay port version ${DY}, the core's ${AY}`));
          (0, xA.d)(this, eR)[eR] = rY
        }
        if (!(0, xA.d)(this, NR)[NR]) {
          const YY = rY;
          if (!(0, xA.d)(this, XR)[XR]((() => {
              (0, xA.d)(this, NR)[NR] = new YY.FAY, (0, xA.d)(this, BR)[BR] = YY.AAY()
            }))) return sY.Zc.ModuleTrap
        }
        let DY = !1;
        return (0, xA.d)(this, bR)[bR](((rY, FY) => {
          null !== (0, xA.d)(this, CR)[CR] && rY.step(0, 0);
          const AY = rY.stage(YY.length);
          0 !== AY && (new Uint8Array(FY.buffer, AY, YY.length).set(YY), rY.open(), (0, xA.d)(this, ZR)[ZR] = (0, xA.d)(this, zR)[zR], (0, xA.d)(this, CR)[CR] = null, (0, xA.d)(this, fR)[fR]++, DY = !0)
        })) ? DY ? "opening" : sY.Zc.TooLarge : sY.Zc.ModuleTrap
      }
      beforeFrame(YY) {
        const rY = (0, xA.d)(this, NR)[NR],
          DY = (0, xA.d)(this, BR)[BR];
        if (!rY || !DY || null !== (0, xA.d)(this, CR)[CR]) return;
        const {
          core: FY
        } = this.deps, AY = FY.IAY(YY);
        if (AY < 0) return;
        const IY = Math.floor(AY);
        let RY, OY;
        try {
          RY = rY.step(IY, AY - IY), OY = rY.xFY()
        } catch (aY) {
          return void(0, xA.d)(this, qR)[qR](aY)
        }
        const gY = FY.UFY(1, RY);
        if (0 === gY) {
          const YY = (0, xA.d)(this, bR)[bR]((YY => {
            YY.close()
          }));
          if (!YY) return;
          return (0, xA.d)(this, MR)[MR] ? (0, xA.d)(this, CR)[CR] = "drop" : (0, xA.d)(this, dR)[dR](), void FY.OAY(sY.Zc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), gY, RY).set(new Uint8Array(DY.buffer, OY, RY))
      }
      play() {
        (0, xA.d)(this, wR)[wR]((YY => {
          YY.play()
        }))
      }
      pause() {
        (0, xA.d)(this, wR)[wR]((YY => {
          YY.pause()
        }))
      }
      seek(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, xA.d)(this, wR)[wR]((DY => {
          DY.seek(YY, rY)
        }))
      }
      setMark(YY, rY) {
        return (0, xA.d)(this, wR)[wR]((DY => {
          DY.gAY(YY, rY)
        }))
      }
      addKeyframe(YY, rY) {
        return (0, xA.d)(this, wR)[wR]((DY => {
          DY.aAY(YY[0], YY[1], YY[2], rY[0], rY[1], rY[2])
        }))
      }
      setKeyframe(YY, rY) {
        return (0, xA.d)(this, wR)[wR]((DY => {
          DY.vAY(YY, rY)
        }))
      }
      moveKeyframe(YY, rY) {
        return (0, xA.d)(this, wR)[wR]((DY => {
          DY.uAY(YY, rY)
        }))
      }
      deleteKeyframes(YY, rY) {
        return (0, xA.d)(this, wR)[wR]((DY => {
          DY.sAY(YY, rY)
        }))
      }
      crop(YY, rY) {
        return null === (0, xA.d)(this, zR)[zR] && (0, xA.d)(this, wR)[wR]((DY => {
          DY.crop(YY, rY)
        }))
      }
      beginSave() {
        const YY = (0, xA.d)(this, jR)[jR];
        if ((0, xA.d)(this, jR)[jR] = null, null !== YY && YY !== (0, xA.d)(this, fR)[fR]) return null;
        let rY = 0,
          DY = null;
        if ((0, xA.d)(this, bR)[bR](((YY, FY) => {
            rY = YY.save(), 0 !== rY && (DY = new Uint8Array(FY.buffer, YY.iAY(), YY.yAY()).slice())
          })), 0 === rY || !DY) return null;
        const FY = {
          headLen: rY,
          editState: DY,
          givenUp: () => (0, xA.d)(this, ZR)[ZR] === FY,
          head: (YY, rY) => {
            if ((0, xA.d)(this, zR)[zR] !== FY || !(0, xA.d)(this, MR)[MR]) return null;
            let DY = null;
            return (0, xA.d)(this, bR)[bR](((FY, AY) => {
              const IY = FY.QAY();
              0 !== IY && YY >= 0 && rY >= 0 && YY + rY <= IY && (DY = new Uint8Array(AY.buffer, FY.oAY() + YY, rY))
            })), DY
          },
          end: () => {
            if ((0, xA.d)(this, zR)[zR] !== FY) return;
            (0, xA.d)(this, zR)[zR] = null, (0, xA.d)(this, ZR)[ZR] = null, (0, xA.d)(this, bR)[bR]((YY => {
              YY.EAY()
            }));
            const YY = (0, xA.d)(this, CR)[CR];
            (0, xA.d)(this, CR)[CR] = null, "unload" === YY ? (0, xA.d)(this, hR)[hR]() : "drop" === YY && (0, xA.d)(this, dR)[dR]()
          }
        };
        return (0, xA.d)(this, zR)[zR] = FY, FY
      }
      askSave() {
        (0, xA.d)(this, jR)[jR] = (0, xA.d)(this, fR)[fR]
      }
      setSpeed(YY) {
        (0, xA.d)(this, wR)[wR]((rY => {
          rY.mAY(YY)
        }))
      }
      setCameraMode(YY) {
        (0, xA.d)(this, wR)[wR]((rY => {
          rY.VAY(YY)
        }))
      }
      close() {
        (0, xA.d)(this, wR)[wR]((YY => {
          YY.close()
        }))
      }
      stop() {
        (0, xA.d)(this, KR)[KR]++, (0, xA.d)(this, MR)[MR] && ((0, xA.d)(this, bR)[bR]((YY => {
          YY.close()
        })), (0, xA.d)(this, NR)[NR]) ? (0, xA.d)(this, CR)[CR] = "unload" : (0, xA.d)(this, hR)[hR]()
      }
    }

    function kR() {
      (0, xA.d)(this, dR)[dR](), (0, xA.d)(this, cR)[cR] || ((0, xA.d)(this, eR)[eR] = null, this.deps.unload())
    }

    function GR() {
      (0, xA.d)(this, bR)[bR]((YY => {
        YY.free()
      })), (0, xA.d)(this, NR)[NR] = null, (0, xA.d)(this, BR)[BR] = null
    }
    async function xR(YY) {
      return await this.deps.staleOr(YY, (() => {})) ? "reloading" : sY.Zc.ModuleLoad
    }

    function nR() {
      return null !== (0, xA.d)(this, zR)[zR] && (0, xA.d)(this, ZR)[ZR] !== (0, xA.d)(this, zR)[zR]
    }

    function PR(YY) {
      return null === (0, xA.d)(this, CR)[CR] && (0, xA.d)(this, bR)[bR](YY)
    }

    function UR(YY) {
      const rY = (0, xA.d)(this, NR)[NR],
        DY = (0, xA.d)(this, BR)[BR];
      return !(!rY || !DY) && (0, xA.d)(this, XR)[XR]((() => {
        YY(rY, DY)
      }))
    }

    function LR(YY) {
      if ((0, xA.d)(this, cR)[cR]) return !1;
      try {
        return YY(), !0
      } catch (rY) {
        return (0, xA.d)(this, qR)[qR](rY), !1
      }
    }

    function tR(YY) {
      if (!(YY instanceof WebAssembly.RuntimeError)) throw YY;
      (0, xA.d)(this, cR)[cR] = !0, (0, xA.d)(this, NR)[NR] = null, (0, xA.d)(this, BR)[BR] = null, (0, xA.d)(this, eR)[eR] = null, this.deps.crash(this.deps.markTrapped(YY)), this.deps.core.OAY(sY.Zc.ModuleTrap)
    }
    var YO = DY(6046),
      rO = DY(39823);
    const DO = "[bloxd-wasm-client]";
    const FO = String(NA);

    function AO(YY) {
      return null === YY || YY === FO ? void 0 : YY
    }

    function IO(YY) {
      var rY, DY, FY, AY, IY, OY, gY;
      switch (YY.what) {
        case sY.cd.FlyingText: {
          let rY;
          try {
            rY = JSON.parse(YY.contentJson)
          } catch (aY) {
            return void console.warn(`${DO} a replay's flying text isn't JSON`, aY)
          }
          RY.g.vo("forceFlyingMiddleMessage", {
            content: rY,
            hY: YY.hY,
            angle: YY.angle,
            dY: YY.dY
          });
          break
        }
        case sY.cd.PlayerKilled:
          (0, rO.e)({
            kind: "killed",
            body: {
              deadEId: null !== (rY = AO(YY.dead)) && void 0 !== rY ? rY : "",
              killerEId: AO(YY.killer),
              withItem: null !== (DY = YY.withItem) && void 0 !== DY ? DY : "",
              killstreak: YY.killstreak
            }
          });
          break;
        case sY.cd.Killfeed:
          (0, rO.e)({
            kind: "custom",
            body: {
              killer: {
                eId: AO(YY.killerId),
                name: null !== (FY = YY.killerName) && void 0 !== FY ? FY : void 0,
                colour: null !== (AY = YY.killerColour) && void 0 !== AY ? AY : void 0
              },
              victim: {
                eId: AO(YY.victimId),
                name: null !== (IY = YY.victimName) && void 0 !== IY ? IY : void 0,
                colour: null !== (OY = YY.victimColour) && void 0 !== OY ? OY : void 0
              },
              withItem: null !== (gY = YY.withItem) && void 0 !== gY ? gY : ""
            }
          })
      }
    }
    const RO = "[bloxd-wasm-client]";

    function OO(YY) {
      if (void 0 === YY || null === YY || "" === YY) return null;
      const rY = Number(YY);
      return Number.isInteger(rY) && rY > NA && rY <= 2147483647 ? rY : null
    }

    function gO(YY) {
      return {
        id: OO(YY.eId),
        name: "string" === typeof YY.name ? YY.name : null,
        colour: "string" === typeof YY.colour ? YY.colour : null
      }
    }

    function aO(YY) {
      const rY = (0, hA.l)(pD._b.PlayerKilled, (rY => {
          var DY, FY;
          const AY = (0, jA.g)(rY);
          if (!(0, jA.c)(AY)) return;
          const {
            deadEId: IY,
            killerEId: RY,
            withItem: OY,
            killstreak: gY
          } = AY;
          YY.recordPlayerKilled(null !== (DY = OO(IY)) && void 0 !== DY ? DY : NA, null !== (FY = OO(RY)) && void 0 !== FY ? FY : NA, "number" === typeof gY ? gY : 0, "string" === typeof OY ? OY : "")
        })),
        DY = (0, hA.l)(pD._b.CustomKillfeed, (rY => {
          const DY = (0, jA.g)(rY);
          if (!(0, jA.c)(DY) || !(0, jA.c)(DY.killer) || !(0, jA.c)(DY.victim)) return;
          const {
            killer: FY,
            victim: AY,
            withItem: IY
          } = DY;
          YY.recordKillfeed(gO(FY), gO(AY), "string" === typeof IY ? IY : null)
        }));
      return () => {
        rY(), DY()
      }
    }

    function vO(YY) {
      var rY;
      return void 0 === YY || null === YY ? null : null !== (rY = JSON.stringify(YY)) && void 0 !== rY ? rY : null
    }

    function uO(YY) {
      let rY = null;
      const DY = () => {
        const {
          enableClipping: DY,
          clipDurationSeconds: AY
        } = FY.b.get("clientEscMenuOptions"), IY = `${DY}:${AY}`;
        IY !== rY && (rY = IY, YY.recorder.setPrefs(DY, AY))
      };
      return DY(), (0, RY.j)("appManagerUpdated|clientEscMenuOptions", DY)
    }
    const sO = "replayModule",
      iO = "recorderModule";

    function yO(YY, rY, DY) {
      return function() {
        return YY.isStopped ? DY : rY(...arguments)
      }
    }
    const QO = {
      open: () => Promise.reject(new Error(oA.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function oO() {
      return DY.e(61).then((() => DY(60519)))
    }

    function WO(YY) {
      (0, oA.f)({
        text: YY,
        type: "Error"
      })
    }
    class EO {
      constructor(YY) {
        this.deps = YY, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: rY,
          api: FY,
          core: AY
        } = YY, IY = () => YY.memory().buffer, RY = () => rY.isStopped ? null : rY.rings.cmd, OY = yO(rY, ((YY, rY) => AY.UFY(YY, rY)), 0), gY = () => AY.tFY();
        let aY = null;
        this.replay = new pR({
          core: {
            IAY: yO(rY, (YY => AY.IAY(YY)), -1),
            UFY: OY,
            tFY: gY,
            OAY: yO(rY, (YY => {
              AY.OAY(YY)
            }), void 0)
          },
          coreBuffer: IY,
          load: async () => (aY = await DY.e(62).then((() => DY(60527))), aY.loadReplayModule()),
          unload: () => {
            var YY;
            null === (YY = aY) || void 0 === YY || YY.unloadReplayModule()
          },
          markTrapped: YY => aY ? aY.markReplayTrapped(YY) : new Error(String(YY)),
          staleOr: (rY, DY) => YY.staleOr(sO, rY, DY),
          crash: rY => {
            YY.reportFault(sO, rY)
          }
        });
        let vY = null;
        this.recorder = new PI({
          core: {
            rAY: yO(rY, (YY => AY.rAY(YY)), 0),
            GFY: yO(rY, (YY => AY.GFY(YY)), 0),
            UFY: OY,
            tFY: gY
          },
          coreCommand: (YY, rY) => {
            var DY, FY;
            return null !== (DY = null === (FY = RY()) || void 0 === FY ? void 0 : FY.writeCmd(YY, 0, rY)) && void 0 !== DY && DY
          },
          coreBuffer: IY,
          load: async () => (vY = await oO(), vY.loadRecorderModule()),
          prefetch: () => {
            oO().then((YY => YY.prefetchRecorderModule())).catch((YY => {
              console.warn(`${RO} the recorder module didn't prefetch, so a save loads it:`, YY)
            }))
          },
          unload: () => {
            var YY;
            null === (YY = vY) || void 0 === YY || YY.unloadRecorderModule()
          },
          markTrapped: YY => vY ? vY.markRecorderTrapped(YY) : new Error(String(YY)),
          memoryBytes: () => {
            var YY, rY;
            return null !== (YY = null === (rY = vY) || void 0 === rY ? void 0 : rY.recorderMemoryBytes()) && void 0 !== YY ? YY : 0
          },
          staleOr: (rY, DY) => YY.staleOr(iO, rY, DY),
          crash: rY => {
            YY.reportFault(iO, rY)
          },
          allowed: () => !0 === YY.options.get("canRecordReplays"),
          failed: WO,
          events: (YY, rY) => {
            this.runtime.recorderEvents(YY, rY)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: WO,
          unixNow: () => Date.now()
        });
        const uY = new eA({
          core: {
            dFY: yO(rY, (YY => AY.dFY(YY)), 0),
            MFY: yO(rY, (() => {
              AY.MFY()
            }), void 0),
            Zo: yO(rY, (() => AY.Zo()), 0),
            JFY: yO(rY, (() => AY.JFY()), 0)
          },
          buffer: IY,
          apiView: () => FY.apiView,
          cmd: RY,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new TR({
          api: FY,
          cmd: RY,
          loadHook: lR,
          onError: YY => {
            console.warn(`${RO} the recorded game's replay hooks:`, YY)
          }
        });
        const sY = new fA({
          client: uY,
          buffer: IY,
          setHoldDraws: YY => {
            rY.setHoldDraws(YY)
          },
          notify: oA.f,
          onRecorderState: () => {
            var YY;
            null === (YY = (0, EA.e)()) || void 0 === YY || YY.recorderChanged()
          },
          onViewerChange: () => {
            var YY;
            null === (YY = (0, EA.e)()) || void 0 === YY || YY.viewerChanged()
          },
          onReplayOption: rY => {
            ! function(YY, rY) {
              var DY, FY;
              const AY = pD.fb[rY.key];
              if (void 0 === AY) return;
              let IY = null !== (DY = rY.value) && void 0 !== DY ? DY : JSON.parse(JSON.stringify(null !== (FY = YO.d[AY]) && void 0 !== FY ? FY : null));
              if (null !== rY.value && rY.key < pD.Gb.Environment && "string" === typeof IY) try {
                IY = JSON.parse(IY)
              } catch (RY) {
                return void console.warn(`${DO} a replay's ${AY} isn't JSON`, RY)
              }
              YY.applyNewClientOptions({
                [AY]: IY
              })
            }(YY.options, rY)
          },
          onReplayUiEvent: IO,
          onReplayOpened: rY => {
            this.entityHooks.opened((0, BY.Pb)(rY)), YY.replayShaderPack(rY)
          },
          meshPending: () => {
            var YY, DY;
            return null !== (YY = null === (DY = rY.lastHeader) || void 0 === DY ? void 0 : DY.renderPending) && void 0 !== YY ? YY : 0
          },
          viewerOpen: WA.e,
          download: YY => {
            (0, yA.h)(YY)
          }
        });
        this.runtime = sY, FY.replay = sY.sink, (0, EA.u)(sY);
        const iY = new MA({
          live: () => {
            var YY;
            return !rY.isStopped && !0 === (null === (YY = sY.currentViewer) || void 0 === YY ? void 0 : YY.inPlayback)
          },
          cmd: RY,
          dragScale: kA
        });
        this.freecam = iY, (0, EA.s)(iY), this.recordedOptions = function(YY, rY) {
          const DY = pD.fb,
            FY = DY.map(((DY, FY) => rY.subscribe(DY, (rY => {
              YY.setOption(FY, vO(rY))
            }))));
          return {
            sendAll() {
              DY.forEach(((DY, FY) => {
                YY.setOption(FY, vO(rY.get(DY)))
              }))
            },
            stop() {
              for (const YY of FY) YY()
            }
          }
        }(sY.recorder, YY.options), this.stops = [(0, rF.l)((YY => {
          iY.flush();
          try {
            this.replay.beforeFrame(YY)
          } catch (rY) {
            this.deps.reportFault("replayFrame", rY)
          }
        })), (0, rF.x)(((YY, rY) => {
          try {
            this.recorder.afterFrame(), rY && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (DY) {
            this.deps.reportFault("recorderFrame", DY)
          }
          try {
            sY.afterFrame(YY)
          } catch (DY) {
            this.deps.reportFault("replayRuntime", DY)
          }
        })), uO(sY), () => {
          this.recordedOptions.stop()
        }, aO(sY.recorder), (0, dA.h)((YY => {
          let {
            action: rY,
            down: DY
          } = YY;
          var FY;
          DY && (null === (FY = (0, EA.e)()) || void 0 === FY || FY.keyDown(rY))
        }))];
        const yY = () => {
          const YY = sY.currentViewer;
          return !0 === (null === YY || void 0 === YY ? void 0 : YY.isOpen) ? YY : null
        };
        (0, QA.e)({
          open: (YY, rY) => this.open(YY, rY),
          replayKey: () => {
            var YY, rY;
            return null !== (YY = null === (rY = yY()) || void 0 === rY ? void 0 : rY.id) && void 0 !== YY ? YY : null
          },
          saveRefusal: () => {
            var YY, rY;
            return null !== (YY = null === (rY = yY()) || void 0 === rY ? void 0 : rY.saveRefusal) && void 0 !== YY ? YY : null
          },
          encode: () => {
            var YY, rY;
            return null !== (YY = null === (rY = yY()) || void 0 === rY ? void 0 : rY.save()) && void 0 !== YY ? YY : Promise.resolve(null)
          },
          fileHandle: () => {
            var YY, rY;
            return null !== (YY = null === (rY = sY.currentViewer) || void 0 === rY ? void 0 : rY.fileHandle) && void 0 !== YY ? YY : null
          },
          markSaved: (YY, rY) => {
            var DY;
            null === (DY = sY.currentViewer) || void 0 === DY || DY.markSaved(YY, rY)
          }
        })
      }
      netEvent(YY) {
        if ("connection" === YY.type)
          if (YY.phase === sY.C.Activated) {
            this.activeConn = YY.conn;
            const rY = this.deps.sessionInfo(YY.conn);
            null !== rY && (this.runtime.activated({
              lobbyType: (0, cY.x)(rY.lobbyName),
              gameNameWithVariation: rY.gameNameWithVariation,
              lobbyName: rY.lobbyName
            }), this.recordedOptions.sendAll())
          } else YY.phase !== sY.C.Left && YY.phase !== sY.C.Closed || YY.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const YY of this.stops) YY();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, EA.m)() === this.runtime && (0, EA.u)(null), (0, EA.i)() === this.freecam && (0, EA.s)(null), (0, QA.e)(QO), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(YY, rY) {
        const {
          running: DY
        } = this.deps;
        if (DY.isStopped) throw new Error(oA.c.coreStopped.text);
        if (YY.byteLength > 67108864) throw new Error(oA.c.cantOpen.text);
        let FY;
        try {
          FY = await async function(YY) {
            const rY = await YY.loadViewer();
            return rY.inPlayback || (0, rF.D)().leaveGame(null), rY
          }(this.runtime)
        } catch (AY) {
          throw console.warn(`${RO} the replay viewer didn't load`, AY), new Error(oA.c.viewerLoadFailed.text)
        }
        if (DY.isStopped) throw new Error(oA.c.coreStopped.text);
        await FY.open(YY, rY)
      }
    }
    var mO = DY(1823);

    function VO(YY, rY) {
      const {
        aux: DY,
        payload: FY
      } = function(YY) {
        return {
          aux: YY.reset ? sY.Xb.ResetFirst : 0,
          payload: lO(YY.changes)
        }
      }(rY);
      YY.queueOptions(DY, FY) && (rY.reset && mO.b.reset(), mO.b.apply(rY.changes))
    }
    const SO = new TextEncoder;

    function lO(YY) {
      const rY = new TO;
      return NO(rY, YY), rY.bytes()
    }
    class TO {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(YY) {
        if (this.len + YY <= this.buf.length) return;
        const rY = new Uint8Array(Math.max(2 * this.buf.length, this.len + YY));
        rY.set(this.buf.subarray(0, this.len)), this.buf = rY, this.view = new DataView(rY.buffer)
      }
      u8(YY) {
        this.room(1), this.buf[this.len++] = YY
      }
      tagged(YY, rY, DY) {
        this.room(1 + rY), this.buf[this.len++] = YY, 1 === rY ? this.view.setUint8(this.len, DY) : 2 === rY ? this.view.setUint16(this.len, DY) : this.view.setUint32(this.len, DY), this.len += rY
      }
      signed(YY, rY, DY) {
        this.room(1 + rY), this.buf[this.len++] = YY, 1 === rY ? this.view.setInt8(this.len, DY) : 2 === rY ? this.view.setInt16(this.len, DY) : this.view.setInt32(this.len, DY), this.len += rY
      }
      f64(YY) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, YY), this.len += 8
      }
      raw(YY) {
        this.room(YY.length), this.buf.set(YY, this.len), this.len += YY.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function eO(YY, rY, DY, FY, AY, IY, RY) {
      rY < FY ? YY.u8(DY | rY) : null !== AY && rY < 256 ? YY.tagged(AY, 1, rY) : rY < 65536 ? YY.tagged(IY, 2, rY) : YY.tagged(RY, 4, rY)
    }

    function NO(YY, rY) {
      switch (typeof rY) {
        case "undefined":
          return void YY.raw(BO);
        case "boolean":
          return void YY.u8(rY ? 195 : 194);
        case "number":
          return void
          function(YY, rY) {
            rY >>> 0 === rY ? rY < 128 ? YY.u8(rY) : rY < 256 ? YY.tagged(204, 1, rY) : rY < 65536 ? YY.tagged(205, 2, rY) : YY.tagged(206, 4, rY) : (rY | 0) === rY ? rY >= -32 ? YY.u8(255 & rY) : rY >= -128 ? YY.signed(208, 1, rY) : rY >= -32768 ? YY.signed(209, 2, rY) : YY.signed(210, 4, rY) : YY.f64(rY)
          }(YY, rY);
        case "string": {
          const DY = SO.encode(rY);
          return eO(YY, DY.length, 160, 32, 217, 218, 219), void YY.raw(DY)
        }
        case "object":
          break;
        default:
          return void YY.u8(192)
      }
      if (null === rY) YY.u8(192);
      else if (Array.isArray(rY)) {
        eO(YY, rY.length, 144, 16, null, 220, 221);
        for (const DY of rY) NO(YY, DY)
      } else if (rY instanceof Uint8Array) eO(YY, rY.length, 0, 0, 196, 197, 198), YY.raw(rY);
      else {
        const DY = Object.keys(rY);
        eO(YY, DY.length, 128, 0, null, 222, 223);
        for (const FY of DY) NO(YY, FY), NO(YY, rY[FY])
      }
    }
    const BO = new Uint8Array([212, 0, 0]);
    var cO = DY(41635),
      KO = DY(41643),
      HO = DY(40132),
      zO = DY(40149),
      ZO = DY(3316);
    const CO = [1e3, 3e3, 9e3];
    class fO {
      constructor(YY) {
        this.host = YY, this.sets = new Map, this.table = [], this.generation = 0, this.Ky = !1
      }
      onEvent(YY) {
        const rY = function(YY) {
          if (YY.byteLength !== sY.ld) return null;
          const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
          return {
            want: rY.getUint16(0, !0),
            release: rY.getUint16(2, !0)
          }
        }(YY);
        rY && !this.Ky && (rY.release !== sY.nd && this.release(rY.release), rY.want !== sY.nd && this.want(rY.want))
      }
      reset(YY) {
        if (!this.Ky) {
          for (const [YY, rY] of this.sets) "ready" === rY.state && this.releaseAll(rY.distinct), this.sets.delete(YY);
          this.table = YY, this.generation++
        }
      }
      dispose() {
        if (this.Ky) return;
        this.Ky = !0, this.generation++, this.table = [];
        const YY = [...this.sets.values()];
        this.sets.clear();
        let rY = null;
        for (const FY of YY)
          for (const YY of "ready" === FY.state ? FY.distinct : []) try {
            this.host.RDY(YY)
          } catch (DY) {
            rY ??= {
              error: DY
            }
          }
        if (rY) throw rY.error
      }
      isReady(YY) {
        var rY;
        return "ready" === (null === (rY = this.sets.get(YY)) || void 0 === rY ? void 0 : rY.state)
      }
      want(YY) {
        const rY = this.sets.get(YY);
        if ("loading" === (null === rY || void 0 === rY ? void 0 : rY.state)) return rY.wanted = !0, void this.capAnswer(YY, rY);
        if ("ready" === (null === rY || void 0 === rY ? void 0 : rY.state)) return void this.host.sendReady(hO(YY, rY.images, rY.size));
        const DY = this.table[YY];
        if (!DY || 1 !== DY.urls.length && DY.urls.length !== pD.Ub.CubeFaces) return this.host.sendReady(dO(YY)), void this.host.onLoadFailed(YY, "", new Error(`no image set ${YY}`));
        const FY = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(YY, FY), this.load(YY, DY, FY, this.generation, 0), this.capAnswer(YY, FY)
      }
      capAnswer(YY, rY) {
        this.host.wait(4e3, (() => {
          this.sets.get(YY) === rY && rY.wanted && this.host.sendReady(dO(YY))
        }))
      }
      load(YY, rY, DY, FY, AY) {
        const IY = [...new Set(rY.urls)];
        Promise.allSettled(IY.map((YY => this.host.loadImage(YY, rY.orientation)))).then((RY => {
          const OY = RY.flatMap((YY => "fulfilled" === YY.status ? [YY.value] : [])),
            gY = FY === this.generation && this.sets.get(YY) === DY,
            aY = RY.findIndex((YY => "rejected" === YY.status));
          if (!gY || !DY.wanted) return this.Ky ? void this.releaseAfterDispose(OY.map(jO)) : (this.releaseAll(OY.map(jO)), void(gY && this.sets.delete(YY)));
          aY < 0 ? this.loaded(YY, rY, IY, OY) : (this.releaseAll(OY.map(jO)), this.host.sendReady(dO(YY)), AY < CO.length ? this.host.wait(CO[AY], (() => {
            FY === this.generation && this.sets.get(YY) === DY && (DY.wanted ? this.load(YY, rY, DY, FY, AY + 1) : this.sets.delete(YY))
          })) : (this.sets.delete(YY), this.host.onLoadFailed(YY, IY[aY], RY[aY].reason)))
        }))
      }
      loaded(YY, rY, DY, FY) {
        const [AY] = FY, IY = [AY.width, AY.height], RY = FY.every((YY => YY.width === IY[0] && YY.height === IY[1])), OY = rY.urls.length === pD.Ub.CubeFaces;
        if (!RY || IY[0] <= 0 || IY[1] <= 0 || IY[0] > 65535 || IY[1] > 65535 || OY && IY[0] !== IY[1]) {
          this.releaseAll(FY.map(jO)), this.sets.delete(YY), this.host.sendReady(dO(YY));
          const DY = FY.map((YY => `${YY.width}x${YY.height}`));
          return void this.host.onLoadFailed(YY, rY.urls[0], new Error(`set ${YY}'s images can't make its texture: ${DY.join(", ")}`))
        }
        const gY = rY.urls.map((YY => FY[DY.indexOf(YY)].id)),
          aY = FY.map(jO);
        this.sets.set(YY, {
          state: "ready",
          images: gY,
          distinct: aY,
          size: IY
        }), this.host.sendReady(hO(YY, gY, IY))
      }
      release(YY) {
        const rY = this.sets.get(YY);
        "loading" === (null === rY || void 0 === rY ? void 0 : rY.state) ? rY.wanted = !1: "ready" === (null === rY || void 0 === rY ? void 0 : rY.state) && (this.releaseAll(rY.distinct), this.sets.delete(YY))
      }
      releaseAll(YY) {
        for (const rY of YY) this.host.RDY(rY)
      }
      releaseAfterDispose(YY) {
        for (const rY of YY) try {
          this.host.RDY(rY)
        } catch {}
      }
    }

    function jO(YY) {
      return YY.id
    }

    function hO(YY, rY, DY) {
      const FY = new Uint8Array(pD.Ub.SkyImagesReadyBytes),
        AY = new DataView(FY.buffer);
      return AY.setUint16(0, YY, !0), AY.setUint16(2, rY.length, !0), AY.setUint16(4, DY[0], !0), AY.setUint16(6, DY[1], !0), rY.slice(0, pD.Ub.CubeFaces).forEach(((YY, rY) => {
        AY.setUint32(8 + 4 * rY, YY, !0)
      })), FY
    }

    function dO(YY) {
      const rY = new Uint8Array(pD.Ub.SkyImagesReadyBytes),
        DY = new DataView(rY.buffer);
      return DY.setUint16(0, YY, !0), DY.setUint16(2, pD.Ub.Failed, !0), rY
    }
    let JO = Promise.resolve();
    async function MO(YY, rY) {
      let DY;
      try {
        DY = await (0, ZO.D)(YY)
      } catch (IY) {
        throw new HO.c("fetch", YY, {
          cause: IY
        })
      }
      const FY = JO.then((() => async function(YY, rY) {
        const DY = new Blob([YY.slice()]);
        let FY = await createImageBitmap(DY, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: rY
        });
        const AY = 1024 / Math.max(FY.width, FY.height);
        if (AY < 1) {
          const YY = FY;
          try {
            FY = await createImageBitmap(YY, {
              resizeWidth: Math.max(1, Math.round(YY.width * AY)),
              resizeHeight: Math.max(1, Math.round(YY.height * AY)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            YY.close()
          }
        }
        return FY
      }(DY, rY)));
      let AY;
      JO = FY.catch((() => {}));
      try {
        AY = await FY
      } catch (IY) {
        throw new HO.c("decode", YY, {
          cause: IY
        })
      }
      return {
        id: (0, HO.k)(AY),
        width: AY.width,
        height: AY.height
      }
    }
    var wO = DY(2755),
      bO = DY(33695);
    const XO = wO.f.length;

    function qO(YY) {
      const rY = [],
        DY = [];
      wO.f.forEach(((FY, AY) => {
        var IY;
        const RY = null !== (IY = pO(YY[FY])) && void 0 !== IY ? IY : bO.s[FY];
        "custom" === RY.type ? (DY.push({
          id: AY,
          kind: pD.Ub.KindCustom,
          set: rY.length,
          earth: null
        }), rY.push({
          urls: [RY.px, RY.py, RY.pz, RY.nx, RY.ny, RY.nz],
          orientation: "none"
        })) : DY.push({
          id: AY,
          kind: pD.Ub.KindEarth,
          set: 0,
          earth: RY
        })
      }));
      const FY = pO(YY.earth);
      "earth" === (null === FY || void 0 === FY ? void 0 : FY.type) && DY.push({
        id: XO,
        kind: pD.Ub.KindEarth,
        set: 0,
        earth: FY
      });
      const AY = rY.length;
      rY.push({
        urls: bO.h.map((YY => bO.l + YY)),
        orientation: "none"
      }), rY.push({
        urls: [bO.p],
        orientation: "flipY"
      }), rY.push({
        urls: [bO.d],
        orientation: "flipY"
      });
      const IY = new Uint8Array(pD.Ub.SkyTableHeaderBytes + DY.length * pD.Ub.SkyTableEntryBytes),
        RY = new DataView(IY.buffer);
      return RY.setUint16(0, AY, !0), RY.setUint16(2, AY + 1, !0), RY.setUint16(4, AY + 2, !0), RY.setUint16(6, DY.length, !0), DY.forEach(((YY, rY) => {
        const DY = pD.Ub.SkyTableHeaderBytes + rY * pD.Ub.SkyTableEntryBytes;
        RY.setUint16(DY, YY.id, !0), RY.setUint8(DY + 2, YY.kind);
        const FY = DY + 4;
        YY.earth ? function(YY, rY, DY) {
          const FY = YY;
          let AY = 0,
            IY = 0;
          for (const [RY, OY] of kO) {
            const YY = FY[RY];
            "number" === typeof YY && Number.isFinite(YY) && (rY.setFloat32(DY + 4 * OY, YY, !0), AY |= 1 << OY)
          }
          for (const [RY, OY, gY] of GO) {
            const YY = FY[RY];
            Array.isArray(YY) && 3 === YY.length && YY.every((YY => "number" === typeof YY && Number.isFinite(YY))) && (YY.forEach(((YY, FY) => {
              rY.setFloat32(DY + gY + 4 * FY, YY, !0)
            })), AY |= OY)
          }
          xO.forEach(((YY, IY) => {
            let [RY, OY] = YY;
            const gY = FY[RY];
            "number" === typeof gY && Number.isFinite(gY) && (rY.setFloat32(DY + pD.o.CameraOffsetAt + 4 * IY, gY, !0), AY |= OY)
          }));
          for (const [RY, OY] of nO) {
            const YY = FY[RY];
            null !== YY && void 0 !== YY && (AY |= OY, YY && (IY |= OY >>> 14))
          }
          rY.setUint32(DY + pD.o.PresentAt, AY, !0), rY.setUint8(DY + pD.o.FlagsAt, IY)
        }(YY.earth, RY, FY) : RY.setUint16(FY, YY.set, !0)
      })), {
        payload: IY,
        sets: rY
      }
    }

    function pO(YY) {
      if ("object" !== typeof YY || null === YY) return null;
      const rY = YY;
      if ("earth" === rY.type) return YY;
      return "custom" === rY.type && ["px", "py", "pz", "nx", "ny", "nz"].every((YY => {
        const DY = rY[YY];
        return "string" === typeof DY && DY.length > 0
      })) ? YY : null
    }
    const kO = [
        ["inclination", pD.o.Inclination],
        ["turbidity", pD.o.Turbidity],
        ["luminance", pD.o.Luminance],
        ["rayleigh", pD.o.Rayleigh],
        ["mieCoefficient", pD.o.MieCoefficient],
        ["mieDirectionalG", pD.o.MieDirectionalG],
        ["distance", pD.o.Distance],
        ["azimuth", pD.o.Azimuth]
      ],
      GO = [
        ["sunPosition", pD.o.SunPosition, pD.o.SunPositionAt],
        ["up", pD.o.Up, pD.o.UpAt],
        ["vertexTint", pD.o.VertexTint, pD.o.VertexTintAt]
      ],
      xO = [
        ["xCameraOffset", pD.o.CameraOffsetX],
        ["yCameraOffset", pD.o.CameraOffsetY],
        ["zCameraOffset", pD.o.CameraOffsetZ]
      ],
      nO = [
        ["useSunPosition", pD.o.UseSunPosition],
        ["dithering", pD.o.Dithering],
        ["infiniteDistance", pD.o.InfiniteDistance]
      ];

    function PO(YY, rY, DY) {
      const FY = new LO({
        writeCmd: YY,
        warn: rY,
        followPack: UO(DY, rY)
      });
      return FY.start(), FY
    }

    function UO(YY, rY) {
      return DY => {
        let FY = () => {};
        const AY = YY((YY => {
          FY(), FY = () => {}, null !== YY ? FY = YY.subscribe((YY => {
            DY(function(YY, rY, DY) {
              if ("object" !== typeof YY || null === YY) return null;
              const FY = YY.skyBoxes;
              if ("object" !== typeof FY || null === FY) return null;
              if ("player" === rY) return FY;
              return Object.fromEntries(Object.entries(FY).filter((YY => {
                let [rY, FY] = YY;
                return !! function(YY) {
                  if ("object" !== typeof YY || null === YY) return !1;
                  return "earth" === YY.type || Object.entries(YY).every((YY => {
                    let [rY, DY] = YY;
                    return "type" === rY || ("" === (FY = DY) || null !== function(YY) {
                      var rY, DY, FY;
                      return "string" !== typeof YY ? null : null !== (rY = null === (DY = tO.exec(YY)) || void 0 === DY || null === (FY = DY.groups) || void 0 === FY ? void 0 : FY.base64) && void 0 !== rY ? rY : null
                    }(FY));
                    var FY
                  }))
                }(FY) || (DY(`Ignoring texture pack skybox ${rY}, whose faces are not all data URLs`, null), !1)
              })))
            }(YY.pack, null === YY.gameSource ? "player" : "customGame", rY))
          })) : DY(null)
        }));
        return () => {
          AY(), FY()
        }
      }
    }
    class LO {
      constructor(YY) {
        var rY, DY, FY;
        this.host = YY, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Ky = !1, this.wait = null !== (rY = YY.wait) && void 0 !== rY ? rY : (YY, rY) => {
          setTimeout(rY, YY)
        }, this.loader = new fO({
          loadImage: null !== (DY = YY.loadImage) && void 0 !== DY ? DY : MO,
          RDY: null !== (FY = YY.RDY) && void 0 !== FY ? FY : HO.o,
          sendReady: YY => {
            this.queue.push({
              kind: pD.Ub.SkyImagesReady,
              payload: YY
            })
          },
          onLoadFailed: (rY, DY, FY) => {
            YY.warn(`sky image set ${rY} (${DY}) didn't load: the last sky stays`, FY)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(zO.c, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((YY => {
          this.write(null !== YY && void 0 !== YY ? YY : {})
        }))
      }
      onEvent(YY) {
        this.loader.onEvent(YY)
      }
      drain() {
        if (0 === this.queue.length) return;
        let YY = 0;
        for (; YY < this.queue.length && this.host.writeCmd(this.queue[YY].kind, 0, this.queue[YY].payload);) YY++;
        YY > 0 && this.queue.splice(0, YY)
      }
      dispose() {
        this.Ky = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(YY) {
        if (this.Ky) return;
        const rY = qO(YY);
        var DY, FY;
        this.written && (DY = this.written, FY = rY, DY.payload.length === FY.payload.length && DY.payload.every(((YY, rY) => YY === FY.payload[rY])) && DY.sets.length === FY.sets.length && DY.sets.every(((YY, rY) => {
          const DY = FY.sets[rY];
          return YY.orientation === DY.orientation && YY.urls.length === DY.urls.length && YY.urls.every(((YY, rY) => YY === DY.urls[rY]))
        }))) || (this.written = rY, this.loader.reset(rY.sets), this.queue = this.queue.filter((YY => YY.kind !== pD.Ub.SkyImagesReady)), this.queue.push({
          kind: pD.Ub.SkyTable,
          payload: rY.payload
        }))
      }
    }
    const tO = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Yg = DY(2543),
      rg = DY(2610),
      Dg = DY(314),
      Fg = DY(200),
      Ag = DY(2550),
      Ig = DY(2555),
      Rg = DY(290),
      Og = DY(293),
      gg = DY(2573),
      ag = DY(2586),
      vg = DY(2595),
      ug = DY(117),
      sg = DY(307),
      ig = DY(39937);
    class yg {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, hA.l)(oF.Q, (YY => {
          this.onReply((0, jA.f)(oF.Q, YY), performance.now())
        }))
      }
      onFrame(YY, rY) {
        null === this.id ? this.id = YY : YY !== this.id && (this.id = YY, this.sentMs = document.hidden ? null : rY)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(YY, rY) {
        YY === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(rY - this.sentMs), this.sentMs = null)
      }
      take() {
        const YY = this.roundTripMs;
        return this.roundTripMs = null, YY
      }
      stop() {
        this.stopReplies()
      }
    }
    class Qg {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(YY, rY, DY, FY) {
        const AY = YY - this.sampled >>> 0,
          IY = rY - this.timed >>> 0,
          RY = DY - this.frameUs >>> 0,
          OY = this.primed;
        return this.sampled = YY, this.timed = rY, this.frameUs = DY, this.primed = !0, !(!OY || AY > 64 || IY > 64) && (FY && RY <= 1e6 * IY && (this.windowTimed += IY, this.windowUs += RY), FY && AY > 0)
      }
      reset() {}
      snapshotAndReset() {
        const YY = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: YY,
          submitToDoneMs: null
        }
      }
    }
    const og = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class Wg {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(YY, rY) {
        const DY = Math.min(4096, this.count + rY);
        this.samples.fill(YY, this.count, DY), this.count = DY
      }
      clear() {
        this.count = 0
      }
      take(YY) {
        const rY = this.count;
        if (this.count = 0, rY < 30) return null;
        const DY = this.samples.subarray(0, rY).sort();
        return YY.map((YY => DY[Math.min(rY - 1, Math.floor(YY * rY))]))
      }
    }
    class Eg {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new Wg, this.inJoin = !1, this.rose = !1, this.joinLags = new Wg, this.joinLagP90Ms = null
      }
      onFrame(YY, rY, DY, FY, AY) {
        const IY = YY.headerWord(pD.B.Pacing),
          RY = YY.headerWord(pD.B.PacingLagUs),
          OY = (IY >>> pD.O.LagsShift) - (this.word >>> pD.O.LagsShift) & pD.O.CountMask,
          gY = (IY >>> pD.O.SwitchesShift) - (this.word >>> pD.O.SwitchesShift) & pD.O.CountMask,
          aY = OY > 0 ? (RY - this.lagUs >>> 0) / OY / 1e3 : 0,
          vY = this.primed && OY <= 64 && gY <= 2 && aY <= 6e4;
        if (this.rose = 0 !== (IY & ~this.word & pD.O.Joining), this.word = IY, this.lagUs = RY, this.primed = !0, 0 !== (IY & pD.O.Tiered)) {
          if (0 !== (IY & pD.O.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && vY && FY && OY > 0 && this.joinLags.add(aY, OY);
          else if (this.inJoin) {
            var uY, sY;
            this.inJoin = !1, this.joinLagP90Ms = null !== (uY = null === (sY = this.joinLags.take([.9])) || void 0 === sY ? void 0 : sY[0]) && void 0 !== uY ? uY : null
          }
          if (AY) {
            if (vY && (this.switches += gY, OY > 0 && this.lags.add(aY, OY)), DY) {
              if (this.lastDrawnMs >= 0 && rY - this.lastDrawnMs <= 250) {
                const YY = rY - this.lastDrawnMs;
                this.tieredMs += YY, (IY & pD.O.AheadMask) > 0 && (this.pacedMs += YY)
              }
              this.lastDrawnMs = rY
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(YY) {
        const rY = this.takeWindow(),
          DY = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, YY ? {
          ...rY,
          joinLagP90Ms: DY
        } : {
          ...og,
          joinLagP90Ms: DY
        }
      }
      unsent(YY) {
        this.joinLagP90Ms ??= YY.joinLagP90Ms
      }
      takeWindow() {
        var YY, rY;
        const DY = this.tieredMs >= 2e3,
          FY = this.lags.take([.5, .9]),
          AY = {
            pacedShare: DY ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: DY ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (YY = null === FY || void 0 === FY ? void 0 : FY[0]) && void 0 !== YY ? YY : null,
            lagP90Ms: null !== (rY = null === FY || void 0 === FY ? void 0 : FY[1]) && void 0 !== rY ? rY : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, AY
      }
    }
    var mg = DY(8669),
      Vg = DY(2523),
      Sg = DY(40006),
      lg = DY(8667),
      Tg = DY(2561),
      eg = DY(2535);
    const Ng = {
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

    function Bg(YY) {
      return new cg(YY)
    }
    class cg {
      constructor(YY) {
        this.shell = YY, this.tracker = new Ig.b, this.gpu = new Qg, this.pacing = new Eg, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new yg, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, mg.c)(YY.backend, YY.canvas, YY.adapterVendor), this.tracker.start((() => !YY.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, Tg.e)("wasm", (() => {
          const {
            n: rY,
            sampleCount: DY
          } = (0, Sg.e)();
          return `${YY.backend}, quality steps aim at up to ${eg.d.target.maxFps} fps, pixel n ${rY}, msaa ${DY}`
        }), (YY => {
          this.frameDebug = YY
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(YY) {
        var rY;
        this.tracker.onAnimationFrame(YY), null === (rY = this.frameDebug) || void 0 === rY || rY.animationFrame()
      }
      frameRan(YY, rY, DY, FY) {
        var AY;
        this.ping.onFrame(YY.headerWord(pD.B.PingSent), DY);
        const IY = this.tracker;
        this.pacing.onFrame(YY, rY, "drawn" === FY, !document.hidden, IY.isSampling());
        const RY = YY.headerWord(pD.B.TickUs) / 1e3 + (0, rF.H)();
        IY.yE(RY), null === (AY = this.frameDebug) || void 0 === AY || AY.wasmFrame(YY, rY, DY, "drawn" === FY, IY.isSampling(), RY, (0, lg.d)());
        const OY = Math.max(0, DY - rY - RY);
        if ("drawn" !== FY) return void("paced" === FY && (this.pacedCpuMs += OY));
        this.followGame(), IY.onFrameStart(rY);
        this.gpu.onFrame(YY.headerWord(pD.B.GpuSampled), YY.headerWord(pD.B.GpuTimed), YY.headerWord(pD.B.GpuFrameUs), IY.isSampling()) && IY.onGpuSampleStarted(), IY.onFrameCpu(OY + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(rY)
      }
      stop() {
        for (const YY of this.timers) clearInterval(YY);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const YY = this.shell.joinedGame();
        return YY !== this.game && (this.game = YY, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== YY
      }
      countFpsFrame(YY) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = YY
        }
        this.fpsFrames++;
        const rY = YY - this.fpsSpanStartMs;
        if (!(rY < vg.b)) {
          if (!document.hidden) {
            const YY = 1e3 * this.fpsFrames / rY;
            this.firstSpanFps ??= YY, this.initialFps = this.firstSpanFps, this.fpsOverTime = YY
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = YY
        }
      }
      flush() {
        const YY = this.followGame(),
          {
            cpuFrameMs: rY,
            refreshHz: DY,
            cpuBottleneck: AY,
            frameIntervalCv: IY,
            ...RY
          } = this.tracker.snapshotAndReset(),
          OY = this.shell.inGame(),
          gY = OY && this.inGameAtLastFlush,
          aY = gY ? RY : Ag.e,
          vY = this.pacing.snapshotAndReset(gY);
        if (this.inGameAtLastFlush = OY, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !YY) return void this.pacing.unsent(vY);
        const uY = performance.now(),
          iY = (0, ag.t)((0, ag.r)(uY), this.unsentPage),
          QY = function(YY, rY, DY, AY, IY, RY, OY, gY) {
            var aY, vY, uY;
            const sY = {},
              {
                canvas: iY
              } = YY,
              yY = (0, gg.b)({
                refreshHz: rY.refreshHz,
                msaa: YY.msaa(),
                autoMsaaOff: (0, lg.c)()
              });
            for (const QY of (0, rg.e)()) {
              const oY = QY.name;
              let WY;
              if ((0, Dg.p)(oY)) WY = (0, ag.e)(oY);
              else if ((0, ag.j)(oY)) WY = gY[oY];
              else if ((0, gg.f)(oY)) WY = yY[oY];
              else switch (oY) {
                case "fps":
                  WY = AY;
                  break;
                case "vO":
                  WY = IY;
                  break;
                case "QO":
                  WY = (0, Vg.C)((0, Sg.e)().n);
                  break;
                case "oO":
                  WY = Math.max(iY.width, iY.height);
                  break;
                case "WO":
                  WY = Math.min(iY.width, iY.height);
                  break;
                case "EO":
                  WY = navigator.hardwareConcurrency || null;
                  break;
                case "mO":
                  WY = (0, XA.getWebGpuSupported)();
                  break;
                case "VO":
                  WY = null === YY.fallbackReason ? null : Ng[YY.fallbackReason];
                  break;
                case "SO":
                  WY = rY.cpuFrameMs;
                  break;
                case "lO":
                  WY = rY.refreshHz;
                  break;
                case "eO":
                  WY = rY.cpuBottleneck;
                  break;
                case "BO":
                  WY = rY.frameIntervalCv;
                  break;
                case "cO":
                  WY = rY.frameMs;
                  break;
                case "KO":
                  WY = rY.tickMs;
                  break;
                case "CO":
                  WY = rY.mainBusyShare;
                  break;
                case "fO":
                  WY = rY.mainProbeDelayMs;
                  break;
                case "HO":
                  WY = rY.longAnimationFramesPerMin;
                  break;
                case "zO":
                  WY = rY.longAnimationFrameTimeShare;
                  break;
                case "ZO":
                  WY = rY.longAnimationFrameScriptShare;
                  break;
                case "jO":
                  WY = rY.gpuPassMs;
                  break;
                case "hO":
                  WY = rY.gpuSubmitToDoneMs;
                  break;
                case "dO":
                  WY = DY.pacedShare;
                  break;
                case "JO":
                  WY = DY.switchesPerHour;
                  break;
                case "MO":
                  WY = DY.lagP50Ms;
                  break;
                case "wO":
                  WY = DY.lagP90Ms;
                  break;
                case "bO":
                  WY = DY.joinLagP90Ms;
                  break;
                case "Yg":
                  WY = (0, Yg.f)(RY);
                  break;
                case "yO":
                  WY = OY;
                  break;
                case "XO":
                case "qO":
                case "pO":
                case "kO":
                case "GO":
                case "xO":
                case "nO":
                case "PO":
                case "UO":
                case "LO":
                case "tO":
                case "rg":
                case "Dg":
                case "Fg":
                case "Ag":
                  WY = null;
                  break;
                case "Wg":
                  WY = (0, XA.getPlatformType)();
                  break;
                case "Eg":
                  WY = (0, XA.getGpuVendor)();
                  break;
                case "mg":
                  WY = ig.b[YY.backend];
                  break;
                case "Vg":
                  WY = (0, ug.d)();
                  break;
                case "Sg":
                  WY = (0, XA.getOperatingSystem)();
                  break;
                case "lg":
                  WY = (0, XA.getTrafficSource)();
                  break;
                case "Tg":
                  WY = null !== (aY = FY.b.get("gameEntrySource")) && void 0 !== aY ? aY : Fg.e;
                  break;
                case "eg":
                  WY = rY.frameLimiter;
                  break;
                case "Ng":
                  WY = (0, Rg.i)();
                  break;
                case "Bg":
                  WY = null !== (vY = (0, Og.b)()) && void 0 !== vY ? vY : Fg.e;
                  break;
                case "cg":
                  WY = (0, Rg.b)(iY.width, iY.height);
                  break;
                case "Kg":
                  WY = (0, rg.g)(-(new Date).getTimezoneOffset());
                  break;
                case "Zg":
                  WY = null !== (uY = YY.fallbackReason) && void 0 !== uY ? uY : Fg.e;
                  break;
                case "jg":
                  WY = "ready";
                  break;
                case "hg":
                  WY = (0, XA.getSoftwareRenderer)();
                  break;
                case "zg":
                  WY = YY.shaderPackRuns() ? "true" : "false";
                  break;
                case "wg":
                  WY = sg.x;
                  break;
                case "Hg":
                case "Jg":
                case "Mg":
                case "Cg":
                case "fg":
                  WY = Fg.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${oY}`)
              }
              if (void 0 === WY) throw new Error(`Metric ${oY} has no value`);
              sY[oY] = WY
            }
            return sY
          }(this.shell, {
            cpuFrameMs: rY,
            refreshHz: DY,
            cpuBottleneck: AY,
            frameIntervalCv: IY,
            ...aY
          }, vY, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), iY);
        if (! function(YY, rY, DY) {
            return (0, Xr.b)(), YY(yY.i.Send, rY, DY)
          }(this.shell.writeCmd, sY.id, function(YY) {
            const rY = (0, hY.f)((0, kr.g)(YY)),
              DY = new Uint8Array(yY.Td.BYTES + rY.length);
            return new DataView(DY.buffer).setUint16(0, kr.d.AnalyticsUpdate, !0), DY.set(rY, yY.Td.BYTES), DY
          }(QY))) return this.unsentPage = iY, this.pacing.unsent(vY), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Yg.c), (0, ag.p)(QY, "wasm", uY)
      }
    }
    var Kg = DY(38902);

    function Hg(YY, rY, DY) {
      const FY = new Map;
      return (0, Kg.b)(((YY, DY, FY) => rY.rv(YY, DY, FY)), ((rY, DY, AY) => {
        const IY = `${rY},${DY},${AY}`;
        return FY.has(IY) || FY.set(IY, (0, hr.d)(YY, rY, DY, AY)), FY.get(IY)
      }), DY)
    }
    var zg = DY(38907),
      Zg = DY(39815);

    function Cg(YY) {
      const rY = null !== YY && 0 !== (yY.s.playerFlags(YY.api.apiView, 0) & yY.Cd.CursorAim);
      rY !== (0, Zg.n)() && (0, Zg.J)(rY, null !== YY)
    }

    function fg(YY) {
      return (0, QF.d)(oF.F, YY)
    }
    const jg = new IY.e((YY => DY(41647)(`./${YY}/${YY}Client`)));
    let hg = null,
      dg = null;
    async function Jg(YY) {
      hg ??= DY.e(27).then((() => DY(38487))).then((YY => {
        dg = YY.createDefaultClientPlugins
      }), (YY => {
        throw hg = null, YY
      })), await Promise.all([jg.load(YY), hg])
    }

    function Mg(YY) {
      YY.load(new fr(wF, new qF))
    }
    let wg = !1;
    const bg = new WeakMap;

    function Xg(YY) {
      try {
        YY()
      } catch (rY) {
        console.error("[bloxd-wasm-client] a session-end step failed", rY)
      }
    }

    function qg(YY, rY) {
      ! function() {
        var YY, rY;
        JF.Howler.volume();
        const DY = JF.Howler;
        null === (YY = DY._autoResume) || void 0 === YY || YY.call(DY), null === (rY = DY._autoSuspend) || void 0 === rY || rY.call(DY)
      }(), rY.audio.prepare();
      const DY = new VY(rY.core, rY.memory, rY.audio);
      let IY;
      try {
        IY = new uA(DY, rY.options)
      } catch (sY) {
        return YY.crash(iA.w, sY), null
      }(0, gY.d)(sA(DY, IY));
      const vY = new EO({
        running: YY,
        api: DY,
        core: rY.core,
        memory: rY.memory,
        staleOr: rY.staleOr,
        reportFault: rY.reportReplayFault,
        options: rY.options,
        sessionInfo: rY.sessionInfo,
        replayShaderPack: rY.replayShaderPack
      });
      (0, rF.z)();
      const uY = new CF({
        api: DY,
        tables: IY,
        sessionInfo: rY.sessionInfo,
        gameFactory: YY => jg.loadedFactory(YY),
        defaultPlugins: (YY, rY, DY, FY) => {
          if (null === dg) throw new Error("The default plugins started before they loaded");
          return dg(YY, rY, DY, FY)
        },
        serverOptions: rY.options,
        onNetEvent: YY => {
          vY.netEvent(YY), rY.onNetEvent(YY)
        },
        setLocalOptions: rY => {
          VO(YY, {
            changes: rY,
            reset: !1
          })
        },
        playSound: (YY, DY, FY, AY, IY, RY, OY) => rY.audio.playGame(YY, DY, FY, AY, IY, RY, OY),
        onSessionEnd: () => {
          Xg(AY.i), Xg(UF), Xg((() => {
            FY.b.set({
              openInGameMenuName: null
            })
          })), Xg((() => {
            rY.audio.cancelPreload()
          }))
        },
        beforeWrite: rY.beforeWrite,
        beforeOp: rY.beforeOp,
        cameraScreen: PF,
        showCameraFacing: LF,
        onEventOverflow: rY.onEventOverflow,
        screenBandY: OY.h,
        replayEntities: vY.entityHooks,
        hasPackModel: rY.hasPackModel
      });
      return uY.attach(YY), bg.set(uY, vY), dF(uY.items, rY.audio),
        function(YY) {
          YY.setClientFreeCameraGrant("isDev", !1);
          const rY = rY => {
            YY.setClientFreeCameraGrant("hasDeveloperRank", rY.playerHasRank("developer"))
          };
          (0, RY.j)("userContextUpdated", rY)
        }(uY), wg || (wg = !0, (0, RY.j)("appManagerUpdated|openInGameMenuName", (YY => {
          !YY && (0, aY.h)().includes(aY.d) && (0, aY.j)(aY.d)
        }))), uY
    }

    function pg(YY) {
      try {
        YY.closeGame()
      } finally {
        var rY;
        null === (rY = bg.get(YY)) || void 0 === rY || rY.stop(), bg.delete(YY)
      }
    }
  },
  39937: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    const FY = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39951: (YY, rY, DY) => {
    function FY() {
      return DY(39955)
    }

    function AY() {
      return DY(39957)
    }

    function IY(YY) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(YY)
    }
    DY.d(rY, {
      e: () => IY,
      h: () => FY,
      l: () => AY
    })
  },
  39904: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      f: () => RY
    });
    const FY = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function AY(YY) {
      if (YY instanceof WebAssembly.RuntimeError) return !0;
      const rY = YY instanceof Error ? YY.stack : void 0;
      return "string" === typeof rY && FY.test(rY)
    }
    const IY = 500;

    function RY(YY) {
      let rY = "[object Object]";
      try {
        rY = String(YY)
      } catch {}
      if ("[object Object]" !== rY) return rY;
      try {
        var DY, FY;
        return null !== (DY = null === (FY = JSON.stringify(YY)) || void 0 === FY ? void 0 : FY.slice(0, IY)) && void 0 !== DY ? DY : rY
      } catch {
        return rY
      }
    }
  },
  39955: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39957: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);