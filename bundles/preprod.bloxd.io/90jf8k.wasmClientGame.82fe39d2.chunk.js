export const id = 45;
export const ids = [45];
export const modules = {
  40454: (FF, WF, SF) => {
    var CF = {
      "./bedwars/bedwarsClient": [37584, 8],
      "./bridgeBattle/bridgeBattleClient": [37588, 9],
      "./buildAFactory2/buildAFactory2Client": [36919, 62, 60, 199, 215, 10],
      "./classic/classicClient": [37592, 11],
      "./clutch/clutchClient": [37601, 12],
      "./cooking/cookingClient": [37608, 13],
      "./defusal/defusalClient": [37616, 14],
      "./frontline/frontlineClient": [37620, 62, 60, 15],
      "./goalRush/goalRushClient": [37628, 16],
      "./luckyBedwars/luckyBedwarsClient": [37631, 17],
      "./ninetyNineNights/ninetyNineNightsClient": [37640, 18],
      "./oneBlock/oneBlockClient": [37645, 19],
      "./pvpCiv/pvpCivClient": [37653, 20],
      "./skyIslands/skyIslandsClient": [37662, 21],
      "./skyblock/skyblockClient": [36937, 62, 174, 22],
      "./tsunami/tsunamiClient": [37665, 23]
    };

    function AF(FF) {
      if (!SF.o(CF, FF)) return Promise.resolve().then((() => {
        var WF = new Error("Cannot find module '" + FF + "'");
        throw WF.code = "MODULE_NOT_FOUND", WF
      }));
      var WF = CF[FF],
        AF = WF[0];
      return Promise.all(WF.slice(1).map(SF.e)).then((() => SF(AF)))
    }
    AF.keys = () => Object.keys(CF), AF.id = 40454, FF.exports = AF
  },
  35009: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      g: () => uF
    });
    let CF = !1;

    function AF() {
      return CF
    }

    function uF(FF) {
      return CF !== FF && (CF = FF, !0)
    }
  },
  37390: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => AF
    });
    var CF = SF(20);

    function AF(FF) {
      return "refetchCode" === FF || "devDownloadJson" === FF || FF.startsWith("Plugin")
    }

    function uF(FF, WF) {
      "refetchCode" !== FF ? "Plugin|MobAiPlugin|ShowPetUi" !== FF ? Promise.all([SF.e(89), SF.e(90), SF.e(86), SF.e(190)]).then((() => SF(39602))).then((SF => {
        let {
          runClientGameMessage: CF
        } = SF;
        CF(FF, WF)
      })).catch((WF => {
        console.error(`Game message ${FF} failed`, WF)
      })) : CF.j.Uu("showPetUi", WF) : CF.j.Uu("refetchCode")
    }
  },
  40438: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF,
      e: () => AF
    });
    const CF = ["recording", "freecam", "keyframe"];

    function AF() {
      const FF = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(FF[1]) << 32n | BigInt(FF[0])
    }
  },
  8176: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      d: () => dF
    });
    var CF = SF(11);
    const AF = 24,
      uF = "farNametags",
      hF = 1e5;

    function bW() {
      var FF;
      return null === (FF = CF.b.get("showDistantNametags")) || void 0 === FF || FF
    }

    function dF() {
      var FF;
      return null !== (FF = function() {
        const FF = new URLSearchParams(window.location.search).get(uF),
          WF = null === FF || "" === FF ? NaN : Number(FF);
        return Number.isFinite(WF) && WF >= 0 ? Math.min(WF, hF) : null
      }()) && void 0 !== FF ? FF : bW() ? 0 : AF
    }
  },
  40430: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      blockIdOf: () => Pd.e,
      clearWasmCameraScreen: () => BC,
      creativeItemIds: () => WC.creativeItemIds,
      decodeMapSettings: () => ed,
      drainTextRerasters: () => ad.b,
      enchantmentPerksOf: () => WC.enchantmentPerksOf,
      endGameHost: () => Vd,
      followCursorAim: () => iP,
      followMenuPrefs: () => KA,
      loadAudio: () => tP,
      loadClientGame: () => gP,
      loadTextIcons: () => ad.f,
      rasterText: () => Tb.d,
      readBoardToEdit: () => dd,
      setTextHost: () => ad.i,
      setTextLocalPlayer: () => ad.m,
      showInCreativeInvenOf: () => WC.showInCreativeInvenOf,
      startGameHost: () => qP,
      startShellAnalytics: () => ud,
      startSkyFeed: () => sb,
      textChanged: () => ad.q,
      warmText: () => Tb.f,
      wasmCameraScreen: () => UC
    });
    SF(35018);
    var CF = SF(11),
      AF = SF(35291),
      uF = SF(37496),
      hF = SF(20),
      bW = SF(35052),
      dF = SF(35288),
      PF = SF(1144),
      RF = SF(562),
      iW = SF(36671),
      eF = SF(3786),
      EF = SF(38585),
      QF = SF(38544);
    const rW = QF.Bb / 4,
      gW = QF.j.PlaySound,
      tW = QF.j.SoundReset,
      TF = eF.R.ReplayFailed,
      aW = eF.R.RecorderEvent;
    class kW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = FF, this.memory = WF, this.audio = SF, this.serverIds = new Int32Array(256).fill(QF.Oc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(QF.m.BYTES)), this.renderPtr = 0, this.ZF = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new QF.R(FF, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.NRF(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(FF, WF) {
        const SF = this.eventView();
        return new Uint8Array(SF.buffer, SF.byteOffset + FF, WF)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return QF.m.localId(this.apiView, 0)
      }
      localDeaths() {
        return QF.m.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const FF = this.apiView,
          WF = QF.m.entRenderPtr(FF, 0),
          SF = QF.m.entVisPtr(FF, 0),
          CF = QF.m.entCapacity(FF, 0);
        if (WF !== this.renderPtr || SF !== this.visPtr || CF !== this.ZF || this.renderBuffer !== this.buffer) {
          this.renderPtr = WF, this.visPtr = SF, this.ZF = CF, this.renderBuffer = this.buffer;
          const FF = this.memoryView(Float32Array, WF, CF * rW, "the render array"),
            AF = this.memoryView(Uint8Array, SF, CF, "the visibility array");
          this.renderCapacity = FF && AF ? CF : 0, this.render = FF && AF ? FF : new Float32Array(0), this.vis = FF && AF ? AF : new Uint8Array(0)
        }
      }
      memoryView(FF, WF, SF, CF) {
        try {
          return (0, EF.o)(FF, this.memory().buffer, WF, SF, CF)
        } catch (AF) {
          return this.keepCorruption(AF), null
        }
      }
      memoryData(FF, WF, SF, CF) {
        try {
          return (0, EF.g)(this.memory().buffer, FF, WF, SF, CF)
        } catch (AF) {
          return this.keepCorruption(AF), null
        }
      }
      reportCorruption(FF) {
        this.keepCorruption(new EF.c(FF))
      }
      keepCorruption(FF) {
        if (!(FF instanceof EF.c)) throw FF;
        this.corruption ??= FF
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(FF, WF, SF) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: CF,
          len: AF
        } = FF;
        this.eventsPtr = CF, this.eventsLen = AF, this.eventsBuffer = null;
        const uF = this.eventView();
        for (let PF = 0; PF < AF;) {
          const FF = uF.getUint32(PF, !0),
            SF = 65535 & FF,
            CF = FF >>> 16,
            AF = PF + eF.Q;
          if (SF === QF.j.EntitySpawned) {
            var hF;
            if (CF !== QF.Db.BYTES) throw LF(SF, PF, CF);
            const FF = QF.Db.serverId(uF, AF);
            this.spawned(FF, QF.Db.index(uF, AF), QF.Db.kind(uF, AF)), null === (hF = WF.entityAdded) || void 0 === hF || hF.call(WF, FF)
          } else if ((SF === QF.j.ChunkSlot || SF === QF.j.EntityInfoChanged) && !(0, QF.Od)(SF, uF, AF, CF, WF)) throw LF(SF, PF, CF);
          PF = AF + (0, eF.$d)(CF)
        }
        try {
          var bW;
          null === (bW = WF.afterPrescan) || void 0 === bW || bW.call(WF), this.throwCorruption(), !SF() && this.dispatch(FF, WF, SF) && (this.throwCorruption(), this.applyListener(), WF.afterWalk(FF.kind)), this.throwCorruption()
        } catch (dF) {
          throw dF instanceof EF.c && (this.corruption ??= dF), dF
        } finally {
          SF() || null !== this.corruption || this.applyDespawns(AF, WF)
        }
      }
      applyDespawns(FF, WF) {
        const SF = this.eventView();
        for (let AF = 0; AF < FF;) {
          const FF = SF.getUint32(AF, !0),
            uF = AF + eF.Q;
          if ((65535 & FF) === QF.j.EntityDespawned && FF >>> 16 === QF.Db.BYTES) {
            const FF = QF.Db.serverId(SF, uF);
            var CF;
            if (this.despawned(FF, QF.Db.index(SF, uF))) null === (CF = WF.entityRemoved) || void 0 === CF || CF.call(WF, FF)
          }
          AF = uF + (0, eF.$d)(FF >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(FF, WF, SF) {
        const {
          len: CF,
          net: AF,
          netOffsets: uF
        } = FF;
        let hF = this.eventView(),
          bW = 0;
        for (let VF = 0; VF < CF;) {
          const FF = hF.getUint32(VF, !0),
            CF = 65535 & FF,
            NF = FF >>> 16,
            mW = VF + eF.Q;
          let OF = !1;
          if (bW < AF.length && uF[bW] === VF) WF.netEvent(AF[bW]), bW++, OF = !0;
          else if (CF === eF.R.LocalPlayerBound) {
            var dF;
            if (NF !== eF.pb) throw LF(CF, VF, NF);
            null === (dF = WF.localPlayerBound) || void 0 === dF || dF.call(WF, hF.getInt32(mW, !0)), OF = !0
          } else if (CF === eF.R.LocalHurt) {
            var PF;
            if (NF !== eF.nb) throw LF(CF, VF, NF);
            null === (PF = WF.localHurt) || void 0 === PF || PF.call(WF, hF.getInt32(mW, !0), hF.getFloat32(mW + 4, !0), hF.getUint32(mW + 8, !0)), OF = !0
          } else if (CF === eF.R.AttackHit) {
            var RF;
            if (NF !== eF.e) throw LF(CF, VF, NF);
            const FF = hF.getFloat32(mW, !0),
              SF = hF.getFloat32(mW + 4, !0),
              AF = hF.getFloat32(mW + 8, !0),
              uF = hF.getUint32(mW + 12, !0);
            null === (RF = WF.attackHit) || void 0 === RF || RF.call(WF, FF, SF, AF, 0 !== (uF & eF.m.Crit), 0 !== (uF & eF.m.HitSelf))
          } else if (CF === eF.R.PhysicsType) {
            var iW;
            if (NF !== eF.Mb) throw LF(CF, VF, NF);
            null === (iW = WF.physicsType) || void 0 === iW || iW.call(WF, hF.getUint32(mW, !0), hF.getInt32(mW + 4, !0)), OF = !0
          } else if (CF === eF.R.VehicleEffect) {
            var EF;
            const FF = DF(hF, mW, NF);
            if (null === FF) throw LF(CF, VF, NF);
            null === (EF = WF.vehicleEffect) || void 0 === EF || EF.call(WF, FF.op, FF.name, FF.icon, FF.level, FF.durationMs), OF = !0
          } else if (CF === eF.R.ZoomChanged) {
            var rW;
            if (NF !== eF.Fd) throw LF(CF, VF, NF);
            null === (rW = WF.zoomChanged) || void 0 === rW || rW.call(WF, hF.getFloat32(mW, !0), hF.getUint8(mW + 4)), OF = !0
          } else if (CF === eF.R.ZoomDisabled) {
            var kW;
            if (0 !== NF) throw LF(CF, VF, NF);
            null === (kW = WF.zoomDisabled) || void 0 === kW || kW.call(WF), OF = !0
          } else if (CF === eF.R.GameCamera) {
            var qW;
            null === (qW = WF.gameCamera) || void 0 === qW || qW.call(WF, new Uint8Array(hF.buffer, hF.byteOffset + mW, NF).slice()), OF = !0
          } else if (CF === QF.j.ChunkSlot || CF === QF.j.EntityInfoChanged);
          else if (CF >= gW && CF <= tW) {
            if (this.audio && !this.audio.onAudioEvent(CF, hF, mW, NF)) throw LF(CF, VF, NF)
          } else if (CF >= TF && CF <= aW) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(CF, hF, mW, NF)) throw LF(CF, VF, NF);
              OF = !0
            }
          } else if (CF >= QF.bd && CF <= QF.ed && CF !== eF.R.EnvLighting) {
            if (!(0, QF.Od)(CF, hF, mW, NF, WF)) throw LF(CF, VF, NF);
            OF = !0
          }
          if (OF) {
            if (SF()) return !1;
            hF = this.eventView()
          }
          VF = mW + (0, eF.$d)(NF)
        }
        return !SF()
      }
      applyListener() {
        var FF;
        if (!this.audio) return;
        const WF = QF.m.audioViewPtr(this.apiView, 0),
          SF = this.memory().buffer;
        let CF = this.audioView;
        (null === (FF = CF) || void 0 === FF ? void 0 : FF.buffer) === SF && CF.byteOffset === WF || (CF = (0, EF.g)(SF, WF, QF.o.BYTES, 8, "the audio view"), this.audioView = CF), CF && this.audio.applyListener(CF)
      }
      indexOf(FF) {
        return this.indexById.get("number" === typeof FF ? FF : +FF)
      }
      isLocal(FF) {
        return FF !== QF.Oc && FF === QF.m.localId(this.apiView, 0)
      }
      fD(FF) {
        const WF = [0, 0, 0];
        return this.readPosition("number" === typeof FF ? FF : +FF, WF) ? WF : null
      }
      readPosition(FF, WF) {
        const SF = this.apiView;
        if (void 0 !== this.indexById.get(FF) && this.isLocal(FF)) {
          for (let FF = 0; FF < 3; FF++) WF[FF] = QF.m.localPos(SF, 0, FF);
          return !0
        }
        return this.readDrawnPosition(FF, WF)
      }
      readDrawnPosition(FF, WF) {
        const SF = this.apiView,
          CF = this.indexById.get(FF);
        if (void 0 === CF || CF >= this.renderCapacity) return WF[0] = WF[1] = WF[2] = NaN, !1;
        const AF = CF * rW;
        for (let uF = 0; uF < 3; uF++) WF[uF] = this.render[AF + uF] + QF.m.origin(SF, 0, uF);
        return !0
      }
      checkValid(FF) {
        return void 0 !== this.indexOf(FF)
      }
      isAlive(FF) {
        const WF = this.indexOf(FF);
        if (void 0 === WF) return null;
        if (this.ensureViews(), WF >= this.renderCapacity) return null;
        const SF = this.vis[WF];
        return 0 === SF ? null : 0 !== (SF & QF.Kd.Alive)
      }
      getEntityType(FF) {
        const WF = this.indexOf(FF);
        return void 0 === WF ? this.isLocal("number" === typeof FF ? FF : +FF) ? "Player" : null : VF(this.kinds[WF])
      }
      spawned(FF, WF, SF) {
        if (WF >= 1048576) throw new EF.c(`entity ${FF} spawned at index ${WF}`);
        this.ensureIndex(WF), this.serverIds[WF] === FF && null !== this.idStr[WF] || (this.idStr[WF] = String(FF)), this.serverIds[WF] = FF, this.kinds[WF] = SF, this.indexById.set(FF, WF)
      }
      despawned(FF, WF) {
        let SF = !1;
        return this.indexById.get(FF) === WF && (this.indexById.delete(FF), SF = !0), WF < this.serverIds.length && this.serverIds[WF] === FF && (this.serverIds[WF] = QF.Oc, this.kinds[WF] = 0, this.idStr[WF] = null), SF
      }
      ensureIndex(FF) {
        const WF = this.serverIds.length;
        if (FF < WF) return;
        let SF = 2 * WF;
        for (; SF <= FF;) SF *= 2;
        const CF = new Int32Array(SF).fill(QF.Oc);
        CF.set(this.serverIds), this.serverIds = CF;
        const AF = new Uint16Array(SF);
        AF.set(this.kinds), this.kinds = AF;
        for (let uF = WF; uF < SF; uF++) this.idStr.push(null)
      }
      eventView() {
        const FF = this.memory().buffer;
        return FF !== this.eventsBuffer && (this.eventsBuffer = FF, this.events = new DataView(FF, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const FF = this.memory().buffer;
        this.buffer = FF, this.viewPtr < 0 && (this.viewPtr = this.core.DRF()), this.view = new DataView(FF, this.viewPtr, QF.m.BYTES), this.rereadDirectory()
      }
    }

    function qW(FF) {
      return FF >>> QF.e === QF.l.Item
    }

    function VF(FF) {
      var WF, SF;
      const CF = FF & QF.f;
      switch (FF >>> QF.e) {
        case QF.l.Lifeform:
          return null !== (WF = RF.f[CF]) && void 0 !== WF ? WF : null;
        case QF.l.Throwable:
          return null !== (SF = iW.k[CF]) && void 0 !== SF ? SF : null;
        case QF.l.Mesh:
          return "Mesh";
        case QF.l.Audio:
          return "AudioEntity";
        case QF.l.Item:
          return "Item";
        default:
          return null
      }
    }
    const NF = new TextDecoder;

    function DF(FF, WF, SF) {
      if (SF < eF.bd.HEAD_BYTES) return null;
      const CF = FF.getUint32(WF, !0),
        AF = FF.getUint32(WF + 20, !0),
        uF = FF.getUint32(WF + 24, !0),
        hF = eF.bd.HEAD_BYTES + (0, eF.$d)(AF);
      if (CF !== eF.bd.UPDATE && CF !== eF.bd.REMOVE || AF > SF || hF + uF > SF) return null;
      const bW = (SF, CF) => NF.decode(new Uint8Array(FF.buffer, FF.byteOffset + WF + SF, CF)),
        dF = FF.getFloat64(WF + 12, !0);
      return {
        op: CF,
        level: FF.getFloat64(WF + 4, !0),
        durationMs: Number.isNaN(dF) ? null : dF,
        name: bW(eF.bd.HEAD_BYTES, AF),
        icon: bW(hF, uF)
      }
    }

    function LF(FF, WF, SF) {
      return new EF.c(`event ${FF} at ${WF} of ${SF} bytes`)
    }
    var mW = SF(271),
      OF = SF(1085),
      xW = SF(37390),
      ZF = SF(1592),
      oF = SF(38603),
      YF = SF(1079),
      MF = SF(37511),
      cW = SF(37535),
      GF = SF(37524),
      zW = SF(38536),
      IF = SF(1943),
      fF = SF(37506),
      yW = SF(37531);
    const sF = Math.max(QF.sb.BYTES, QF.hb.BYTES, QF.kb.BYTES);

    function nF(FF) {
      if (!(0, yW.c)(FF)) return null;
      const WF = Number(FF);
      return (0 | WF) === WF ? WF : null
    }
    class HF {
      constructor(FF) {
        this.api = FF, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, fF.i)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.JY = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = QF.Oc, this.localName = String(QF.Oc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.JY = null;
        const FF = this.api.queries.directorView() >= QF.sb.BYTES ? this.scratchView() : null;
        null !== FF && (this.defaultFov = (0, YF.B)(QF.sb.fov(FF, 0)), this.baseFov = (0, YF.B)(QF.sb.baseFov(FF, 0)), this.aspect = QF.sb.aspect(FF, 0), this.bodyHeading = QF.sb.bodyHeading(FF, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(FF) {
        this.viewHeading = FF
      }
      get localPlayerId() {
        const FF = QF.m.localId(this.api.apiView, 0);
        return FF !== this.localId && (this.localId = FF, this.localName = String(FF)), this.localName
      }
      getEntityPosition(FF) {
        return this.readEntity(FF) ? this.entityFeet : null
      }
      getEntityAimPoint(FF) {
        return this.readEntity(FF) ? this.entityAim : null
      }
      getEntityHeading(FF) {
        const WF = nF(FF);
        if (null === WF) return null;
        const SF = QF.m.localId(this.api.apiView, 0);
        return WF === SF && SF !== QF.Oc ? this.viewHeading : this.readEntity(FF) ? this.entityHeading : null
      }
      raycastTerrain(FF, WF, SF) {
        const CF = this.api.queries.cameraSweep(FF[0], FF[1], FF[2], WF[0], WF[1], WF[2], SF);
        return CF < SF - 1e-6 ? CF : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const FF = this.defaultPose;
        FF.fov = this.defaultFov;
        const WF = this.api.queries.directorDefaultPose() >= QF.hb.BYTES ? this.scratchView() : null;
        if (null === WF) return FF;
        for (let SF = 0; SF < 3; SF++) FF.position[SF] = QF.hb.eye(WF, 0, SF);
        return FF.heading = QF.hb.heading(WF, 0), FF.pitch = QF.hb.pitch(WF, 0), FF
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
      readEntity(FF) {
        const WF = nF(FF);
        if (null === WF) return !1;
        if (WF === this.JY) return this.entityLive;
        this.JY = WF;
        const SF = this.api.queries.directorEntity(WF) >= QF.kb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== SF, null === SF) return !1;
        for (let CF = 0; CF < 3; CF++) this.entityFeet[CF] = QF.kb.feet(SF, 0, CF), this.entityAim[CF] = this.entityFeet[CF];
        return this.entityAim[1] += QF.kb.eyeHeight(SF, 0), this.entityHeading = QF.kb.heading(SF, 0), !0
      }
      scratchView() {
        const FF = this.api.scratch(),
          WF = this.api.memory().buffer,
          SF = this.scratch;
        return null !== SF && SF.buffer === WF && SF.byteOffset === FF ? SF : (this.scratch = this.api.memoryData(FF, sF, 8, "the director's record"), this.scratch)
      }
    }
    const KF = {
        mode: "default"
      },
      wF = {
        show: () => {},
        clear: () => {}
      };

    function XF() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class UF {
      constructor(FF) {
        this.options = FF, this.uW = void 0, this.director = void 0, this.latest = KF, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          TWF: 0,
          aSF: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.GA = new Int32Array(3 * QF.ud), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * QF.ud), this.uW = new HF(FF.api), this.director = new GF.d(this.uW)
      }
      settingsChanged(FF) {
        let WF = KF;
        if (FF.length > 0) try {
          WF = (0, zW.b)(FF)
        } catch {}
        this.latest = WF, this.pending = WF
      }
      call(FF, WF, SF, CF, AF, uF) {
        var hF, bW;
        let dF;
        this.holding = !1;
        try {
          dF = this.answer(FF, WF, SF, CF, AF, uF)
        } catch (eF) {
          var PF, RF;
          throw this.answeredPose = !1, null === (PF = (RF = this.options).showFacing) || void 0 === PF || PF.call(RF, null), eF
        }
        const iW = this.answeredPose && 0 === (CF & QF.ob.Held);
        return this.answeredPose = dF !== QF.db.None, this.holding = this.answeredPose && !iW, null === (hF = (bW = this.options).showFacing) || void 0 === hF || hF.call(bW, this.holding ? this.facing : null), dF
      }
      holdsView() {
        return this.holding
      }
      answer(FF, WF, SF, CF, AF, uF) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          uW: hF
        } = this;
        hF.readView();
        if (0 !== (CF & QF.ob.Held) || hF.setViewHeading((0, MF.r)(hF.bodyHeading)), void 0 !== this.pending) {
          const FF = this.pending;
          this.pending = void 0, this.director.setSettings(FF), this.syncShownSettings()
        }
        this.readLook((0, IF.e)(WF), (0, IF.e)(SF), CF, (0, IF.e)(AF), (0, IF.e)(uF));
        const bW = this.director.update(FF / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !bW) return QF.db.None;
        const [dF, PF, RF] = bW.position;
        if (0 === this.options.api.queries.directorPose(dF, PF, RF, (0, MF.r)(bW.heading), (0, MF.e)(bW.pitch), (0, YF.l)(bW.fov))) return QF.db.None;
        if ("default" === this.director.getSettings().mode) return QF.db.Pose;
        switch (this.facing) {
          case "camera":
            return QF.db.FaceCamera;
          case "cursor":
            return QF.db.FaceCursor;
          default:
            return QF.db.FaceMovement
        }
      }
      afterFrame(FF) {
        FF ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = KF, this.idle()
      }
      restart() {
        const FF = this.holding;
        this.idle(), this.holding = FF
      }
      idle() {
        var FF, WF;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new GF.d(this.uW), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (FF = (WF = this.options).showFacing) || void 0 === FF || FF.call(WF, null), this.setCentres(0)
      }
      syncShownSettings() {
        const FF = this.director.getSettings();
        if (FF === this.shownSettings) return;
        this.shownSettings = FF;
        const WF = (0, cW.h)(FF);
        this.facing = WF.facing, this.mouseTurns = WF.mouseTurns
      }
      readLook(FF, WF, SF, CF, AF) {
        const uF = this.look,
          hF = 0 !== (SF & QF.ob.LookPointed);
        if (null === this.mouseTurns && !hF) return uF.TWF = 0, uF.aSF = 0, void(uF.pointedAt = void 0);
        let bW;
        hF && (this.pointedAt.heading = CF, this.pointedAt.pitch = AF, bW = this.pointedAt);
        const {
          uW: dF
        } = this;
        dF.setViewHeading((0, cW.d)(dF.getViewHeading(), FF, WF, bW, "look" === this.mouseTurns, uF))
      }
      writeCentres(FF) {
        const WF = this.next,
          SF = Math.min(FF.length, QF.ud);
        for (let CF = 0; CF < SF; CF++)
          for (let SF = 0; SF < 3; SF++) WF[3 * CF + SF] = Math.floor(FF[CF][SF] / QF.y);
        this.setCentres(SF)
      }
      setCentres(FF) {
        const {
          GA: WF,
          next: SF
        } = this;
        let CF = FF === this.centresLen;
        for (let AF = 0; CF && AF < 3 * FF; AF++) CF = WF[AF] === SF[AF];
        CF || (WF.fill(0), WF.set(SF.subarray(0, 3 * FF)), this.centresLen = FF, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const FF = this.options.cmd();
        null !== FF && (0, QF.jf)(FF, 0, this.GA, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var FF, WF, SF;
        return null !== (FF = null === (WF = (SF = this.options).screen) || void 0 === WF ? void 0 : WF.call(SF)) && void 0 !== FF ? FF : wF
      }
      hidden() {
        var FF;
        return (null !== (FF = this.options.isPageHidden) && void 0 !== FF ? FF : XF)()
      }
      now() {
        var FF, WF, SF;
        return null !== (FF = null === (WF = (SF = this.options).now) || void 0 === WF ? void 0 : WF.call(SF)) && void 0 !== FF ? FF : performance.now()
      }
    }
    const BF = QF.y * QF.y * QF.y,
      jW = Math.log2(QF.y),
      vW = QF.y - 1,
      JF = QF.I.BYTES / 4,
      pF = new Uint16Array(BF);

    function lF(FF, WF, SF) {
      return FF * QF.y * QF.y + WF * QF.y + SF
    }
    class FW {
      constructor(FF) {
        this.chunk = FF
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(FF, WF, SF) {
        return lF(FF, WF, SF)
      }
    }
    class WW {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class SW {
      constructor(FF, WF, SF, CF) {
        this.table = FF, this.slot = WF, this.generation = SF, this.epoch = CF, this.MW = new FW(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = pF, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get CA() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get oS() {
        const FF = this.gameVoxels(),
          WF = this.layers ??= new Uint16Array(QF.y);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let SF = 0; 0 !== this.staleLayers; SF++) {
          const CF = 1 << SF;
          0 !== (this.staleLayers & CF) && (this.staleLayers &= ~CF, WF[SF] = CW(FF, SF))
        }
        return WF
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const FF = this.voxelData(),
          WF = this.writes;
        if (null === WF || 0 === WF.ids.size) return FF;
        if (WF.from !== FF) {
          const SF = WF.patched ??= new Uint16Array(BF);
          SF.set(FF);
          for (const [FF, CF] of WF.ids) SF[FF] = CF;
          WF.from = FF
        }
        return WF.patched
      }
      written(FF) {
        var WF;
        return null === (WF = this.writes) || void 0 === WF ? void 0 : WF.ids.get(FF)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(FF, WF, SF) {
        const CF = this.writes ??= new WW;
        CF.ids.set(FF, WF), SF && CF.cleared.add(FF), null !== CF.from && (CF.patched[FF] = WF);
        const AF = 1 << (FF >> jW & vW);
        CF.layers |= AF, this.staleLayers |= AF, this.writeCount++
      }
      clearWrites() {
        const FF = this.writes;
        null !== FF && (this.staleLayers |= FF.layers, FF.ids.clear(), FF.cleared.clear(), FF.layers = 0, FF.from = null)
      }
      dataCleared(FF) {
        var WF;
        return !0 === (null === (WF = this.writes) || void 0 === WF ? void 0 : WF.cleared.has(FF))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const FF = this.table.slotWords(),
          WF = this.slot * JF;
        if (this.epoch !== this.table.epoch || WF + JF > FF.length || 0 === FF[WF + 3] || FF[WF + 2] !== this.generation) return this.data = pF, this.dataPtr = 0, pF;
        this.version = FF[WF + 1];
        const SF = FF[WF + 0],
          CF = FF.buffer;
        return SF === this.dataPtr && CF === this.dataBuffer || (this.dataPtr = SF, this.dataBuffer = CF, this.data = this.table.voxelsAt(CF, SF)), this.data
      }
    }

    function CW(FF, WF) {
      const SF = FF[WF * QF.y];
      for (let CF = 0; CF < QF.y; CF++) {
        const AF = lF(CF, WF, 0);
        for (let WF = 0; WF < QF.y; WF++)
          if (FF[AF + WF] !== SF) return 65535
      }
      return SF
    }
    const AW = new Uint32Array(0),
      uW = 1 << 20,
      hW = 1 << 21;

    function bS(FF, WF, SF) {
      const CF = FF + uW,
        AF = WF + 1024,
        uF = SF + uW;
      return CF < 0 || CF >= hW || uF < 0 || uF >= hW || AF < 0 || AF >= 2048 ? -1 : 2048 * (CF * hW + uF) + AF
    }

    function dW(FF, WF, SF) {
      return lF(FF & vW, WF & vW, SF & vW)
    }
    class PW {
      constructor(FF, WF) {
        this.memory = FF, this.apiView = WF, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = AW, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = AW, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(FF, WF, SF, CF, AF, uF) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, uF === QF.L.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (uF !== QF.L.Stored && uF !== QF.L.Unloaded) throw new EF.c(`ChunkSlot flags ${uF}`);
        const hF = bS(FF, WF, SF);
        if (hF < 0) return;
        if (uF === QF.L.Unloaded) return void this.chunks.delete(hF);
        const bW = this.chunks.get(hF);
        (null === bW || void 0 === bW ? void 0 : bW.slot) === CF && bW.generation === AF || this.chunks.set(hF, new SW(this, CF, AF, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const FF = this.apiView(),
          WF = QF.m.chunkSlotsPtr(FF, 0),
          SF = QF.m.chunkSlotsLen(FF, 0);
        WF === this.slotsPtr && SF === this.slotsLen || (this.slotsPtr = WF, this.slotsLen = SF, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const FF = this.apiView(),
          WF = QF.m.walkThroughPtr(FF, 0),
          SF = QF.m.walkThroughLen(FF, 0);
        WF === this.walkPtr && SF === this.walkLen || (this.walkPtr = WF, this.walkLen = SF, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const FF of this.written) FF.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const FF = this.memory().buffer;
        var WF;
        FF !== this.slotsBuffer && (this.slotsBuffer = FF, this.slots = null !== (WF = (0, EF.o)(Uint32Array, FF, this.slotsPtr, this.slotsLen * JF, "the chunk directory")) && void 0 !== WF ? WF : AW);
        return this.slots
      }
      voxelsAt(FF, WF) {
        try {
          var SF;
          return null !== (SF = (0, EF.o)(Uint16Array, FF, WF, BF, "a chunk's voxels")) && void 0 !== SF ? SF : pF
        } catch (CF) {
          if (!(CF instanceof EF.c)) throw CF;
          return this.corruption ??= CF, pF
        }
      }
      chunk(FF, WF, SF) {
        var CF;
        return null !== (CF = this.chunks.get(bS(FF, WF, SF))) && void 0 !== CF ? CF : null
      }
      isLoaded(FF, WF, SF) {
        return void 0 !== this.chunkAt(Math.floor(FF), Math.floor(WF), Math.floor(SF))
      }
      ah(FF, WF, SF) {
        var CF;
        const AF = Math.floor(FF),
          uF = Math.floor(WF),
          hF = Math.floor(SF),
          bW = this.chunkAt(AF, uF, hF);
        if (!bW) return 0;
        const dF = dW(AF, uF, hF);
        return null !== (CF = bW.written(dF)) && void 0 !== CF ? CF : bW.voxelData()[dF]
      }
      setOverlay(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const uF = this.chunkAt(FF, WF, SF);
        return !!uF && (uF.hasWrites() || this.written.push(uF), uF.write(dW(FF, WF, SF), CF, AF), !0)
      }
      version(FF, WF, SF) {
        var CF, AF;
        return null !== (CF = null === (AF = this.chunks.get(bS(FF, WF, SF))) || void 0 === AF ? void 0 : AF.CA) && void 0 !== CF ? CF : null
      }
      scan(FF, WF, SF, CF, AF, uF, hF, bW) {
        const dF = QF.y;
        let PF = 0;
        for (let RF = Math.floor(WF / dF); RF * dF < AF; RF++) {
          const iW = RF * dF,
            eF = Math.min(AF - iW, dF);
          for (let AF = Math.floor(FF / dF); AF * dF < CF; AF++) {
            const EF = AF * dF,
              QF = Math.min(CF - EF, dF);
            for (let CF = Math.floor(SF / dF); CF * dF < uF; CF++) {
              const rW = this.chunks.get(bS(AF, RF, CF));
              if (!rW) continue;
              const gW = CF * dF,
                tW = Math.max(SF - gW, 0),
                TF = Math.min(uF - gW, dF),
                aW = rW.oS,
                kW = rW.gameVoxels();
              for (let SF = Math.max(WF - iW, 0); SF < eF; SF++) {
                const WF = aW[SF];
                if (65535 === WF || 0 !== hF[WF]) {
                  PF++;
                  for (let WF = Math.max(FF - EF, 0); WF < QF; WF++) {
                    const FF = lF(WF, SF, 0);
                    for (let CF = tW; CF < TF; CF++) {
                      const AF = kW[FF + CF];
                      0 !== hF[AF] && bW.push(EF + WF, iW + SF, gW + CF, AF)
                    }
                  }
                }
              }
            }
          }
        }
        return PF
      }
      dataCleared(FF, WF, SF) {
        var CF;
        const AF = Math.floor(FF),
          uF = Math.floor(WF),
          hF = Math.floor(SF);
        return !0 === (null === (CF = this.chunkAt(AF, uF, hF)) || void 0 === CF ? void 0 : CF.dataCleared(dW(AF, uF, hF)))
      }
      isWalkThrough(FF) {
        if (!Number.isInteger(FF) || FF < 0 || FF > 65535) return !1;
        const WF = this.walkWords(),
          SF = FF >>> 5;
        return SF < WF.length && 1 === (WF[SF] >>> (31 & FF) & 1)
      }
      walkWords() {
        const FF = this.memory().buffer;
        var WF;
        FF !== this.walkBuffer && (this.walkBuffer = FF, this.walk = null !== (WF = (0, EF.o)(Uint32Array, FF, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== WF ? WF : AW);
        return this.walk
      }
      chunkAt(FF, WF, SF) {
        if ((0 | FF) !== FF || (0 | WF) !== WF || (0 | SF) !== SF) return;
        const CF = bS(FF >> jW, WF >> jW, SF >> jW);
        return CF !== this.lastKey && (this.lastKey = CF, this.lastChunk = this.chunks.get(CF)), this.lastChunk
      }
    }
    var RW = SF(36931),
      iS = SF(36208),
      eW = SF(35269),
      EW = SF(35141),
      QW = SF(7816),
      rS = SF(37472),
      gS = SF(161);
    const tS = ["ambient", "crowd", "customGame_horror", "dig", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "random", "rpg", "step", "survivalFactory"],
      TW = [
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
      aS = TW.map((FF => {
        let [WF] = FF;
        return WF
      })),
      kS = Uint8Array.from(TW, (FF => {
        let [, WF] = FF;
        return WF
      })),
      qS = {
        semi_automatic: 9,
        submachine: 11,
        rifle: 8,
        pistol: 7,
        shotgun: 10
      },
      VW = 6;
    var NW = SF(35265);
    const DW = {
        timeRemaining: () => 1 / 0
      },
      LW = FF => {
        var WF;
        const SF = globalThis,
          CF = null !== (WF = SF.nativeRequestIdleCallback) && void 0 !== WF ? WF : SF.requestIdleCallback,
          AF = SF.cancelIdleCallback;
        if ("function" === typeof CF && "function" === typeof AF) {
          const WF = CF.call(globalThis, FF);
          return () => {
            AF.call(globalThis, WF)
          }
        }
        const uF = setTimeout((() => {
          FF(DW)
        }), 100);
        return () => {
          clearTimeout(uF)
        }
      },
      mS = 2 ** tS.length - 1;
    class OW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LW;
        this.sheet = FF, this.onError = WF, this.idle = SF, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = FF => {
          this.cancelIdle = null;
          try {
            if (FF.timeRemaining() >= 1) {
              let FF = this.queue.shift();
              for (; void 0 !== FF && !this.load(FF);) FF = this.queue.shift()
            }
          } catch (WF) {
            this.onError(WF)
          } finally {
            this.schedule()
          }
        }
      }
      preload(FF) {
        const WF = FF & mS & ~this.asked;
        if (0 !== WF) {
          this.asked |= WF;
          for (let FF = 0; FF < tS.length; FF++) WF & 1 << FF && this.queue.push(FF);
          this.schedule()
        }
      }
      cancel() {
        var FF;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (FF = this.cancelIdle) || void 0 === FF || FF.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(FF) {
        const WF = this.sheet(FF, !1),
          SF = this.sheet(FF, !0),
          [CF, AF] = "unloaded" === WF.state() && "unloaded" !== SF.state() ? [SF, WF] : [WF, SF],
          uF = this.gen,
          hF = () => {
            try {
              uF === this.gen && "unloaded" === AF.state() && AF.load()
            } catch (FF) {
              this.onError(FF)
            }
          },
          bW = CF.state();
        return "unloaded" === bW ? (CF.once("load", hF), CF.load(), !0) : "unloaded" === AF.state() && ("loading" === bW ? (CF.once("load", hF), !1) : (AF.load(), !0))
      }
    }
    var xS = SF(38778);
    const ZW = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      oW = gS.h.aN * gS.h.playerEyeToHeightRatio,
      YW = [0, 0, -1, 0, 1, 0],
      MW = tS.indexOf("note");

    function cS(FF) {
      return FF >= 0 ? Math.min(1, FF) : 0
    }

    function GW(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const CF = function(FF) {
        let WF = 0,
          SF = aS.length;
        for (; WF < SF;) {
          const CF = WF + SF >>> 1;
          aS[CF] < FF ? WF = CF + 1 : SF = CF
        }
        return WF
      }(FF);
      if ("" === FF || null === (WF = aS[CF]) || void 0 === WF || !WF.startsWith(FF)) return -1;
      if (aS[CF] === FF) return CF;
      let AF = CF + 1;
      for (; AF < aS.length && aS[AF].startsWith(FF);) AF++;
      return CF + Math.floor(SF() * (AF - CF))
    }
    class zS {
      constructor(FF, WF, SF, CF, AF) {
        this.group = FF, this.loudness = WF, this.startMs = SF, this.howl = CF, this.host = AF, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const FF = this.host.alive(this.id);
        return FF ? 1e3 * this.howl.duration(this.id) / FF.rate : 0
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
    class IW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          CF = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = FF, this.listener = WF, this.now = SF, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new NW.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: FF => this.aliveVoice(FF),
          started: FF => this.started.has(FF),
          drop: FF => {
            var WF;
            null === (WF = this.live.get(FF)) || void 0 === WF || WF.howl.stop(FF), this.forget(FF)
          }
        }, this.handlers = {
          playSound: (FF, WF, SF, CF, AF, uF, hF, bW, dF) => {
            if (CF >= aS.length) return;
            const PF = 0 !== (AF & QF.Hd.Loop);
            AF & QF.Hd.TwoD ? this.start(CF, !1, hF, uF, bW, PF) : this.startSpatial(CF, hF, uF, bW, PF, FF, WF, SF, dF, this.earDistSq(FF, WF, SF))
          },
          soundPos: (FF, WF, SF, CF) => {
            const AF = this.core.get(CF);
            var uF;
            void 0 !== AF && (null === (uF = this.live.get(AF)) || void 0 === uF || uF.howl.pos(SF, WF, FF, AF))
          },
          soundSet: (FF, WF, SF, CF) => {
            const AF = this.core.get(FF),
              uF = void 0 === AF ? void 0 : this.live.get(AF);
            void 0 !== AF && uF && (this.setRel(AF, WF), uF.rate = SF, uF.howl.rate(SF, AF), uF.spatial && uF.howl.pannerAttr({
              refDistance: CF
            }, AF))
          },
          soundFade: (FF, WF, SF, CF) => {
            const AF = this.core.get(FF);
            void 0 !== AF && this.fade(AF, WF, SF, 0 !== (CF & QF.Dd.StopAfter))
          },
          soundStop: FF => {
            const WF = this.core.get(FF);
            var SF;
            void 0 !== WF && (null === (SF = this.live.get(WF)) || void 0 === SF || SF.howl.stop(WF), this.forget(WF))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new OW(((FF, WF) => this.sheet(FF, WF)), (FF => {
          this.errors++, console.error("Audio preload failed", FF)
        }), CF)
      }
      prepare() {
        for (let FF = 0; FF < tS.length; FF++) this.sheet(FF, !1), this.sheet(FF, !0)
      }
      preload(FF) {
        this.loader.preload(FF)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(FF, WF, SF, CF) {
        if (FF < QF.j.PlaySound || FF > QF.j.SoundReset) return !1;
        try {
          return (0, QF.Od)(FF, WF, SF, CF, this.handlers)
        } catch (AF) {
          return this.errors++, console.error("Audio event failed", AF), !0
        }
      }
      applyListener(FF) {
        const WF = this.nextPose;
        for (let CF = 0; CF < 3; CF++) WF[2 - CF] = QF.o.listener(FF, 0, CF), WF[5 - CF] = QF.o.forward(FF, 0, CF), WF[8 - CF] = QF.o.up(FF, 0, CF);
        0 === WF[3] && 0 === WF[4] && 0 === WF[5] && WF.set(this.posed ? this.pose.subarray(3) : YW, 3);
        for (let CF = 0; CF < 9; CF++)
          if (!Number.isFinite(WF[CF])) return;
        const SF = this.pose;
        if (this.posed) {
          let FF = !0;
          for (let CF = 0; CF < 9 && FF; CF++) FF = WF[CF] === SF[CF];
          if (FF) return
        }
        this.listener.apply(WF) && (SF.set(WF), this.posed = !0)
      }
      playGame(FF, WF, SF, CF, AF, uF, hF) {
        const bW = GW(FF);
        if (bW < 0) return xS.c;
        if (!SF) {
          const {
            howl: FF,
            id: SF
          } = this.start(bW, !1, WF, 0, 1, hF);
          return this.gameSound(FF, SF, !1)
        }
        const dF = SF[0],
          PF = SF[1] + oW,
          RF = SF[2];
        if (!Number.isFinite(dF) || !Number.isFinite(PF) || !Number.isFinite(RF)) return xS.c;
        let iW;
        if (CF) {
          const FF = dF - CF[0],
            WF = PF - CF[1],
            SF = RF - CF[2];
          if (iW = FF * FF + WF * WF + SF * SF, iW > AF * AF) return xS.c
        } else iW = this.earDistSq(dF, PF, RF);
        const eF = this.startSpatial(bW, WF, 0, 1, hF, dF, PF, RF, uF, iW);
        return eF ? this.gameSound(eF.howl, eF.id, !0) : xS.c
      }
      setMaster(FF, WF) {
        this.level = cS(FF);
        const SF = WF ? this.level : 0;
        if (SF !== this.master) {
          this.master = SF;
          for (const [FF, WF] of this.live) WF.fadeMs = 0, WF.gain = WF.rel * this.master, WF.howl.volume(WF.gain, FF)
        }
      }
      stopCore() {
        for (const WF of [...this.core.values()]) {
          var FF;
          null === (FF = this.live.get(WF)) || void 0 === FF || FF.howl.stop(WF)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [FF, WF] of [...this.live]) WF.howl.stop(FF), this.forget(FF);
        this.core.clear()
      }
      gameSound(FF, WF, SF) {
        const CF = {
          stop: () => (this.live.has(WF) && FF.stop(WF), CF),
          fade: (FF, SF, AF) => {
            var uF, hF;
            const bW = this.level > 0 ? SF / this.level : SF > 0 && null !== (uF = null === (hF = this.live.get(WF)) || void 0 === hF ? void 0 : hF.rel) && void 0 !== uF ? uF : 0;
            return this.fade(WF, bW, AF, !1), CF
          },
          rate: SF => {
            const AF = this.live.get(WF);
            return AF && (AF.rate = function(FF) {
              return FF > 0 && FF < 1 / 0 ? FF : 1
            }(SF), FF.rate(AF.rate, WF)), CF
          },
          getVolume: () => {
            var FF, SF;
            return (null !== (FF = null === (SF = this.live.get(WF)) || void 0 === SF ? void 0 : SF.rel) && void 0 !== FF ? FF : 0) * this.level
          },
          getRelativeVolume: () => {
            var FF, SF;
            return null !== (FF = null === (SF = this.live.get(WF)) || void 0 === SF ? void 0 : SF.rel) && void 0 !== FF ? FF : 0
          },
          setRelativeVolume: FF => (this.setRel(WF, FF), CF),
          setPannerAttr: AF => {
            if (SF && this.live.has(WF)) {
              const SF = {
                ...ZW,
                refDistance: eW.g
              };
              for (const [FF, WF] of Object.entries(AF)) "number" !== typeof WF && "string" !== typeof WF || (SF[FF] = WF);
              FF.pannerAttr({
                coneOuterAngle: SF.coneOuterAngle
              }, WF), FF.pannerAttr(SF, WF)
            }
            return CF
          },
          setPosition: AF => (SF && this.live.has(WF) && Number.isFinite(AF[0] + AF[1] + AF[2]) && FF.pos(AF[2], AF[1], AF[0], WF), CF)
        };
        return CF
      }
      startSpatial(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        const RF = this.sheet(kS[FF], !0);
        let iW = null;
        if (!AF) {
          if (this.failed.has(RF)) return null;
          const SF = kS[FF] === MW ? null : (0, NW.j)(aS[FF]),
            CF = (0, NW.f)(cS(WF), Math.sqrt(PF), dF);
          if (iW = new zS(SF, CF, this.now(), RF, this.voiceHost), !this.voices.admit(iW)) return null
        }
        const eF = this.start(FF, !0, WF, SF, CF, AF);
        return iW && (iW.id = eF.id, iW.direct = "loaded" === RF.state() && !RF._playLock), RF.pannerAttr({
          coneOuterAngle: 360
        }, eF.id), RF.pannerAttr({
          ...ZW,
          refDistance: dF
        }, eF.id), RF.pos(bW, hF, uF, eF.id), eF
      }
      aliveVoice(FF) {
        const WF = this.live.get(FF);
        if (!WF) return;
        const SF = WF.howl._soundById(FF);
        if (SF && !SF._ended) return WF;
        this.forget(FF)
      }
      earDistSq(FF, WF, SF) {
        if (!this.posed) return 0;
        const CF = FF - this.pose[2],
          AF = WF - this.pose[1],
          uF = SF - this.pose[0];
        return CF * CF + AF * AF + uF * uF
      }
      start(FF, WF, SF, CF, AF, uF) {
        const hF = cS(SF),
          bW = this.sheet(kS[FF], WF);
        "unloaded" === bW.state() && bW.load();
        const dF = bW.play(aS[FF]),
          PF = hF * this.master;
        return bW.volume(PF, dF), this.live.set(dF, {
          howl: bW,
          rel: hF,
          gain: PF,
          fadeFrom: PF,
          fadeAt: 0,
          fadeMs: 0,
          rate: AF,
          handle: CF,
          spatial: WF,
          stopTimer: void 0
        }), 0 !== CF && this.core.set(CF, dF), 1 !== AF && bW.rate(AF, dF), uF && bW.loop(!0, dF), {
          howl: bW,
          id: dF
        }
      }
      sheet(FF, WF) {
        const SF = 2 * FF + (WF ? 1 : 0);
        let CF = this.sheets.get(SF);
        if (!CF) {
          const AF = this.createHowl(tS[FF], WF);
          AF.on("end", (FF => {
            AF.loop(FF) || this.forget(FF)
          })), AF.on("stop", (FF => {
            this.forget(FF)
          })), AF.on("play", (FF => {
            this.live.has(FF) && this.started.add(FF)
          })), AF.on("loaderror", (FF => {
            if ("loaded" !== AF.state()) {
              this.failed.add(AF);
              for (const [FF, WF] of this.live) WF.howl === AF && this.forget(FF)
            } else "number" === typeof FF && this.forget(FF)
          })), this.sheets.set(SF, AF), CF = AF
        }
        return CF
      }
      setRel(FF, WF) {
        const SF = this.live.get(FF);
        SF && (fW(SF), SF.fadeMs = 0, SF.rel = cS(WF), SF.gain = SF.rel * this.master, SF.howl.volume(SF.gain, FF))
      }
      fade(FF, WF, SF, CF) {
        const AF = this.live.get(FF);
        if (!AF) return;
        fW(AF);
        const {
          howl: uF
        } = AF, hF = this.gainNow(AF);
        AF.rel = cS(WF), AF.gain = AF.rel * this.master;
        const bW = SF > 0 ? Math.min(SF, 65535) : 0,
          dF = 0 === bW || hF === AF.gain;
        AF.fadeMs = dF ? 0 : bW, dF ? uF.volume(AF.gain, FF) : (AF.fadeFrom = hF, AF.fadeAt = this.now(), uF.fade(hF, AF.gain, bW, FF)), CF && (dF ? uF.stop(FF) : AF.stopTimer = setTimeout((() => {
          AF.stopTimer = void 0, uF.stop(FF)
        }), bW))
      }
      gainNow(FF) {
        if (FF.fadeMs > 0) {
          const WF = (this.now() - FF.fadeAt) / FF.fadeMs;
          if (WF < 1) return FF.fadeFrom + (FF.gain - FF.fadeFrom) * Math.max(0, WF);
          FF.fadeMs = 0
        }
        return FF.gain
      }
      forget(FF) {
        this.started.delete(FF);
        const WF = this.live.get(FF);
        WF && (fW(WF), this.live.delete(FF), 0 !== WF.handle && this.core.get(WF.handle) === FF && this.core.delete(WF.handle))
      }
    }

    function fW(FF) {
      void 0 !== FF.stopTimer && (clearTimeout(FF.stopTimer), FF.stopTimer = void 0)
    }
    var yS = SF(38593),
      sW = SF(37479);
    class nW {
      constructor(FF, WF, SF, CF) {
        this.key = FF, this.model = WF, this.host = CF, this.ZF = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sentCount = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.DC = !1, this.ZF = Math.max(1, Math.ceil(SF)), this.records = new Float32Array(this.ZF * RW.d), this.isDirty = new Uint8Array(this.ZF), this.tail = new Uint8Array(this.ZF * QF.bc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(CF.cmd())
      }
      setOrigin(FF, WF, SF) {
        this.origin[0] = FF, this.origin[1] = WF, this.origin[2] = SF
      }
      markDirty(FF) {
        !this.DC && FF >= 0 && FF < this.ZF && FF < QF.bc.Max && this.BC(FF, FF + 1)
      }
      commit(FF) {
        if (this.DC) return;
        (FF = Math.min(Math.max(Math.floor(FF), 0), this.ZF, QF.bc.Max)) > this.count && this.BC(this.count, FF), this.count = FF;
        const {
          origin: WF,
          sentOrigin: SF,
          dirtyList: CF
        } = this, AF = this.sentCount !== FF, uF = SF[0] !== WF[0] || SF[1] !== WF[1] || SF[2] !== WF[2];
        if (0 === CF.length && !AF && !uF) return;
        const hF = this.host.cmd();
        if (!hF || !this.make(hF)) return;
        const bW = CF.length,
          {
            records: dF,
            tailView: PF
          } = this;
        for (let RF = 0; RF < bW; RF++) {
          const FF = CF[RF],
            WF = FF * RW.d,
            SF = RF * QF.bc.Bytes,
            AF = 0 !== dF[WF + RW.e] ? QF.bc.Hidden : 0;
          PF.setUint32(SF, (FF | AF) >>> 0, !0), PF.setFloat32(SF + 4, dF[WF], !0), PF.setFloat32(SF + 8, dF[WF + 1], !0), PF.setFloat32(SF + 12, dF[WF + 2], !0)
        }
        if ((0, QF.ne)(hF, 0, this.key, FF, WF, bW, this.tailOf(bW))) {
          for (let FF = 0; FF < bW; FF++) this.isDirty[CF[FF]] = 0;
          CF.length = 0, this.sentCount = FF, SF[0] = WF[0], SF[1] = WF[1], SF[2] = WF[2]
        }
      }
      grow(FF) {
        (FF = Math.ceil(FF)) <= this.ZF || this.DC || (this.records = (0, sW.b)(this.records, new Float32Array(FF * RW.d)), this.isDirty = (0, sW.b)(this.isDirty, new Uint8Array(FF)), this.tail = new Uint8Array(FF * QF.bc.Bytes), this.tailView = new DataView(this.tail.buffer), this.ZF = FF)
      }
      dispose() {
        this.DC || (this.DC = !0, this.host.DC(this, this.made ? this.key : null))
      }
      make(FF) {
        if (!this.made && FF) {
          const {
            item: WF,
            scale: SF,
            yaw: CF
          } = this.model;
          this.made = (0, QF.ue)(FF, 0, this.key, WF, SF, CF)
        }
        return this.made
      }
      tailOf(FF) {
        const WF = FF * QF.bc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === WF || (this.tailCut = this.tail.subarray(0, WF)), this.tailCut
      }
      BC(FF, WF) {
        const {
          dirtyList: SF,
          isDirty: CF
        } = this;
        for (let AF = FF; AF < WF; AF++) 0 === CF[AF] && (CF[AF] = 1, SF.push(AF))
      }
    }
    var HW = SF(565);
    class KW {
      constructor(FF) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: FF,
          owes: FF => {
            this.owing.add(FF)
          },
          settled: (FF, WF) => {
            this.owing.delete(FF), WF && this.live.delete(FF)
          }
        }
      }
      create(FF, WF) {
        if (SF = FF, !HW.n.includes(SF)) return null;
        var SF;
        const CF = new wW(++this.keys, RF.f.indexOf(FF), WF, this.host);
        return this.live.add(CF), CF
      }
      disposeAll() {
        for (const FF of [...this.live]) FF.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const FF = this.host.cmd();
        for (const WF of this.owing)
          if (!WF.sync(FF)) return
      }
    }
    class wW {
      constructor(FF, WF, SF, CF) {
        this.key = FF, this.lifeform = WF, this.scale = SF, this.host = CF, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.DC = !1, this.sync()
      }
      setPose(FF, WF) {
        this.DC || (this.feet[0] = FF[0], this.feet[1] = FF[1], this.feet[2] = FF[2], this.yaw = WF, this.owed |= 2, this.sync())
      }
      setVisible(FF) {
        this.DC || FF === this.visible || (this.visible = FF, this.owed |= 4, this.sync())
      }
      dispose() {
        this.DC || (this.DC = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(FF) ? (this.host.settled(this, this.DC), !0) : (this.host.owes(this), !1)
      }
      write(FF) {
        if (!FF) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, QF.De)(FF, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const WF = (2 & this.owed ? QF.Gc.Pose : 0) | (4 & this.owed ? QF.Gc.Visible : 0);
        if (0 !== WF) {
          if (!(0, QF.Ae)(FF, 0, this.key, WF, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, QF.ye)(FF, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var XW = SF(38911);

    function UW(FF, WF, SF, CF) {
      return (0, XW.d)(), (0, QF.nf)(FF, WF, SF, CF)
    }
    var BW = SF(38596);
    const jS = [0, 0, 0],
      vS = [0, 0, 0],
      JW = [0, 0, 0],
      pW = [0, 0, 0],
      lW = [0, 0, 0],
      FS = [0, 0],
      WS = [1, 1, 1],
      SS = 1 / 3;
    const CS = iS.g;

    function AS(FF) {
      const WF = iS.d[FF],
        SF = WF && iS.g[WF.mainMultiblock];
      return SF && {
        main: SF,
        x: WF.compX,
        y: WF.compY,
        z: WF.compZ
      }
    }

    function uS(FF) {
      if (null === FF || void 0 === FF) return QF.Oc;
      const WF = +FF;
      return Number.isInteger(WF) && WF >= -2147483648 && WF <= 2147483647 && String(WF) === String(FF) ? WF : QF.Oc
    }

    function hS(FF, WF, SF) {
      return (0, QF.xf)(FF, 0, WF, null !== SF && void 0 !== SF ? SF : Number.NaN)
    }
    class bC {
      constructor(FF) {
        this.deps = FF, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.mobModels = new KW((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          DC: (FF, WF) => {
            this.livePools.delete(FF), null !== WF && (this.owedFrees.push(WF), this.flushOwed())
          }
        }, this.api = FF.api, this.live = FF.live, this.chunks = FF.chunks, this.items = FF.items, this.tables = FF.tables
      }
      isLocal(FF) {
        return null !== FF && void 0 !== FF && +FF === this.api.localId
      }
      assertLocal(FF, WF) {
        if (!this.isLocal(FF)) throw new Error(`Attempted to ${WF} for a player that is not the local player`)
      }
      fD(FF) {
        const WF = this.api.fD(FF);
        if (!WF) throw new Error(`Entity ${FF} has no replicated position`);
        return WF
      }
      checkValid(FF) {
        return !!this.deps.isSessionLive() && (null === FF || void 0 === FF || this.api.checkValid(FF))
      }
      isAlive(FF) {
        return !1 !== this.api.isAlive(FF)
      }
      getItemStat(FF, WF, SF) {
        return this.isLocal(FF) || null !== FF && "Player" === this.api.getEntityType(FF) ? this.tables.getItemStat(WF, SF) : this.tables.getDefaultItemStat(WF, SF)
      }
      getClientOption(FF, WF) {
        return this.assertLocal(FF, "get a client option"), this.tables.getClientOption(WF)
      }
      openShop(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(FF, "open shop"), hF.j.Uu("showShopFromServer", {
          toggle: WF,
          kFF: SF
        }, !0)
      }
      sendMessage(FF, WF, SF) {
        this.assertLocal(FF, "send a message");
        const CF = "string" === typeof WF ? [{
          str: WF,
          style: SF
        }] : WF;
        hF.j.Uu("chat", {
          content: CF
        }, !0)
      }
      getEntityType(FF) {
        return this.api.getEntityType(FF)
      }
      getEntityName(FF) {
        const WF = uS(FF);
        return WF === QF.Oc ? void 0 : (0, yS.h)(this.api, WF)
      }
      hasEffect(FF, WF) {
        const SF = uS(FF);
        return SF !== QF.Oc && (0, yS.e)(this.api, SF, WF)
      }
      getMetaInfo(FF) {
        return this.tables.getMetaInfo(FF)
      }
      getPlayerDbId(FF) {
        return this.assertLocal(FF, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(FF, WF, SF) {
        if (!this.chunks.dataCleared(FF, WF, SF)) return (0, yS.d)(this.api, FF, WF, SF)
      }
      rSF(FF, WF, SF, CF) {
        this.setBlockId(FF, WF, SF, this.tables.getItemId(CF))
      }
      setOtherEntitySetting(FF, WF, SF, CF) {
        if (!this.isLocal(FF)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(QF._c, SF)) throw new Error(`Unknown other-entity setting ${SF}`);
        const AF = QF._c[SF],
          uF = uS(WF);
        if (uF === QF.Oc || !this.deps.beforeWrite()) return;
        const hF = (0, zW.f)(CF);
        if (hF.length > 16384) throw new Error(`The other-entity setting ${SF}'s value is over 16384 bytes`);
        const bW = this.api.memoryView(Uint8Array, this.api.scratch(), hF.length, "set_other_entity_setting's value");
        bW && (bW.set(hF), this.api.queries.setOtherEntitySetting(uF, AF, hF.length))
      }
      getPositionView(FF) {
        return this.live.position(+FF)
      }
      readDrawnPosition(FF, WF) {
        return this.api.readDrawnPosition(uS(FF), WF)
      }
      getDrawnHeading(FF) {
        const WF = uS(FF),
          SF = (WF === QF.Oc ? 0 : this.api.queries.directorEntity(WF)) >= QF.kb.BYTES ? this.api.memoryData(this.api.scratch(), QF.kb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!SF) return null;
        if (1 === QF.kb.headingIsDrawn(SF, 0)) return QF.kb.heading(SF, 0);
        const CF = this.api.apiView;
        return this.isLocal(FF) && 0 === (QF.m.playerFlags(CF, 0) & QF.ld.FreeCam) ? QF.m.heading(CF, 0) : null
      }
      getLocalPlayerMovement() {
        const FF = QF.m.playerFlags(this.api.apiView, 0);
        return 0 === (FF & QF.ld.Replay) && this.api.readDrawnPosition(this.api.localId, JW) ? {
          onGround: 0 !== (FF & QF.ld.OnGround),
          jumpHeld: 0 !== (FF & QF.ld.JumpHeld)
        } : null
      }
      pbF(FF) {
        return this.isLocal(FF) ? this.items.yS() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var FF, WF;
        return "Gun" === (null === (FF = this.aliveHeld()) || void 0 === FF || null === (WF = FF.typeObj) || void 0 === WF ? void 0 : WF.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.yS()
      }
      isCrosshairShown() {
        var FF, WF;
        const SF = CF.b.get("crosshairShownOverride");
        if (null !== SF) return SF;
        const AF = null === (FF = this.aliveHeld()) || void 0 === FF ? void 0 : FF.typeObj,
          uF = "Gun" === (null === AF || void 0 === AF ? void 0 : AF.type),
          hF = uF || !0 === (null === AF || void 0 === AF ? void 0 : AF.showsAimingUi),
          bW = 0 === (QF.m.playerFlags(this.api.apiView, 0) & QF.ld.ZoomFirstPerson),
          dF = null !== (WF = this.tables.getClientOption("gunshotOrigin")) && void 0 !== WF ? WF : null;
        return (0, EW.g)({
          gun: uF,
          aimable: hF
        }, bW, (0, QW.d)(), dF)
      }
      setCrosshairShown(FF) {
        CF.b.set({
          crosshairShownOverride: FF
        })
      }
      getInventoryFreeSlotCount(FF) {
        return this.isLocal(FF) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(FF) {
        return this.isLocal(FF) ? this.items.selectedSlot : null
      }
      getItemSlot(FF, WF) {
        return this.isLocal(FF) ? this.items.slot(WF) : null
      }
      swapInventorySlots(FF, WF) {
        return this.items.swap(FF, WF, !1)
      }
      redoInventorySwapLocally(FF, WF) {
        this.items.swap(FF, WF, !0)
      }
      isPlayerCrouching(FF) {
        if (this.isLocal(FF)) return 0 !== (QF.m.playerFlags(this.api.apiView, 0) & QF.ld.Crouching);
        const WF = uS(FF);
        return WF !== QF.Oc && 1 === this.api.queries.entityCrouching(WF)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (QF.m.playerFlags(this.api.apiView, 0) & QF.ld.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.GhF()
      }
      canModifyBlockAt(FF, WF, SF) {
        return 1 === this.api.queries.canModify(FF, WF, SF)
      }
      isSolidToPlayerBlockId(FF) {
        return this.tables.isSolidBlockId(FF) && !this.chunks.isWalkThrough(FF)
      }
      blockNameToBlockId(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(FF, WF)
      }
      blockIdToBlockName(FF) {
        return this.tables.nameOfId(FF)
      }
      tdF(FF, WF, SF, CF, AF) {
        return 1 === this.api.queries.terrainBlocked(CF, FF, WF, SF, uS(null !== AF && void 0 !== AF ? AF : null))
      }
      getChunkVersion(FF, WF, SF) {
        return this.chunks.version(FF, WF, SF)
      }
      scanBlocks(FF, WF, SF, CF, AF, uF, hF, bW) {
        return this.chunks.scan(FF, WF, SF, CF, AF, uF, hF, bW)
      }
      isBlockInLoadedChunk(FF, WF, SF) {
        return this.chunks.isLoaded(FF, WF, SF)
      }
      getBlockId(FF, WF, SF) {
        return this.chunks.ah(FF, WF, SF)
      }
      playSound(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(FF)) return null;
        const hF = this.playSoundFrom(WF, SF, AF, uF);
        return 1 === CF ? hF : hF.rate(CF)
      }
      playSoundFrom(FF, WF, SF, CF) {
        var AF, uF;
        const hF = this.deps.playSound;
        if (!hF) return xS.c;
        const bW = null === SF || void 0 === SF ? void 0 : SF.EFF,
          dF = null !== (AF = null === SF || void 0 === SF ? void 0 : SF.maxHearDist) && void 0 !== AF ? AF : eW.f,
          PF = null !== (uF = null === SF || void 0 === SF ? void 0 : SF.refDistance) && void 0 !== uF ? uF : eW.g;
        let RF = null;
        if (Array.isArray(bW)) jS[0] = bW[0], jS[1] = bW[1], jS[2] = bW[2], RF = jS;
        else if (void 0 !== bW && null !== bW) {
          const FF = uS(bW);
          if (!this.api.isLocal(FF)) {
            if (!this.api.readPosition(FF, jS)) return xS.c;
            RF = jS
          }
        }
        return hF(FF, WF, RF, RF && this.ear(), dF, PF, CF)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, vS)) vS[1] += oW;
        else {
          const FF = this.api.apiView;
          if (0 === QF.m.viewProj(FF, 0, 3) && 0 === QF.m.viewProj(FF, 0, 7) && 0 === QF.m.viewProj(FF, 0, 11)) return null;
          for (let WF = 0; WF < 3; WF++) vS[WF] = QF.m.eye(FF, 0, WF)
        }
        return Number.isFinite(vS[0] + vS[1] + vS[2]) ? vS : null
      }
      setBlockId(FF, WF, SF, CF) {
        if (!Number.isInteger(CF) || CF < 0 || CF > 65535) throw new Error(`Invalid block id ${CF}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(FF, WF, SF)) return;
        const AF = Math.floor(FF),
          uF = Math.floor(WF),
          hF = Math.floor(SF),
          bW = this.predictedCells(AF, uF, hF, CF);
        if (1 === this.api.queries.rSF(AF, uF, hF, CF)) {
          for (let FF = 0; FF < bW.length; FF += 5) this.chunks.setOverlay(bW[FF], bW[FF + 1], bW[FF + 2], bW[FF + 3], 1 === bW[FF + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(FF, WF) {
        return this.deps.particles.create(FF, WF)
      }
      playParticleEffect(FF) {
        this.deps.particles.playEffect(FF)
      }
      burstParticlePreset(FF, WF, SF) {
        this.deps.particles.burstPreset(FF, WF, SF)
      }
      createGameMesh(FF, WF, SF) {
        const CF = ++this.meshKeys,
          AF = this.deps.cmd();
        if (!AF) return CF;
        const {
          look: uF,
          colour: hF
        } = function(FF) {
          switch (FF.kind) {
            case void 0:
            case "flatEmissive":
              return FF.opaque ? {
                look: QF.Nb.FlatOpaque,
                colour: [...FF.rgb, 1]
              } : {
                look: QF.Nb.Flat,
                colour: [...FF.rgb, FF.alpha]
              };
            case "chevronPath":
              return {
                look: QF.Nb.Chevrons, colour: [...(0, rS.d)(FF.colour), FF.alpha]
              };
            case "furnaceFire":
              return {
                look: QF.Nb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(WF), bW = Math.floor(FF.positions.length / 3), dF = function(FF, WF) {
          const SF = Math.floor(FF.positions.length / 3),
            CF = FF.indices.length,
            AF = SF * (WF ? 5 : 3),
            uF = new Uint8Array(4 * (AF + CF)),
            hF = new DataView(uF.buffer);
          for (let PF = 0; PF < 3 * SF; PF++) hF.setFloat32(4 * PF, FF.positions[PF], !0);
          if (WF) {
            var bW;
            const WF = null !== (bW = FF.uvs) && void 0 !== bW ? bW : [];
            for (let FF = 0; FF < 2 * SF; FF++) {
              var dF;
              hF.setFloat32(4 * (3 * SF + FF), null !== (dF = WF[FF]) && void 0 !== dF ? dF : 0, !0)
            }
          }
          for (let PF = 0; PF < CF; PF++) hF.setUint32(4 * (AF + PF), FF.indices[PF], !0);
          return uF
        }(FF, (0, RW.i)(WF));
        return (0, QF.ge)(AF, 0, CF, uF, hF, SF, bW, FF.indices.length, dF) && this.liveMeshes.add(CF), CF
      }
      setGameMesh(FF, WF) {
        var SF;
        const CF = this.deps.cmd();
        if (!CF) return;
        let AF = 0;
        WF.anchor && (AF |= QF.Ob.Anchor, lW[0] = WF.anchor[0], lW[1] = WF.anchor[1], lW[2] = WF.anchor[2]), void 0 !== WF.visible && (AF |= QF.Ob.Visible), WF.uvOffset && (AF |= QF.Ob.UvOffset, FS[0] = WF.uvOffset[0], FS[1] = WF.uvOffset[1]);
        const uF = null !== (SF = WF.visibility) && void 0 !== SF ? SF : 1;
        void 0 !== WF.visibility && (AF |= QF.Ob.Visibility), WF.scale && (AF |= QF.Ob.Scale, WS[0] = WF.scale[0], WS[1] = WF.scale[1], WS[2] = WF.scale[2]), 0 !== AF && (0, QF.me)(CF, 0, FF, AF, WF.visible ? 1 : 0, lW, FS, uF, WS)
      }
      disposeGameMesh(FF) {
        const WF = this.deps.cmd();
        WF && !(0, QF.ie)(WF, 0, FF) || this.liveMeshes.delete(FF)
      }
      hasPackModel(FF) {
        var WF, SF, CF;
        return null !== (WF = null === (SF = (CF = this.deps).hasPackModel) || void 0 === SF ? void 0 : SF.call(CF, FF)) && void 0 !== WF && WF
      }
      disposeGameOutput() {
        const FF = FF => {
          try {
            FF()
          } catch (WF) {
            console.error("Error freeing client game output", WF)
          }
        };
        for (const WF of [...this.liveMeshes]) FF((() => {
          this.disposeGameMesh(WF)
        }));
        for (const WF of [...this.livePools]) FF((() => {
          WF.dispose()
        }));
        FF((() => {
          this.mobModels.disposeAll()
        })), FF((() => {
          this.setGroundArrowStyle(null)
        })), FF((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), FF((() => {
          this.setCrosshairShown(null)
        })), FF((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(FF, WF) {
        const SF = this.tables.idOf(FF.item);
        if (void 0 === SF) return null;
        const CF = new nW(++this.poolKeys, {
          item: SF,
          scale: FF.scale,
          yaw: FF.yaw
        }, WF, this.poolHost);
        return this.livePools.add(CF), CF
      }
      createMobModel(FF, WF) {
        return this.mobModels.create(FF, WF)
      }
      setRouteChevrons(FF) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !FF || 0 === FF.cells.length) return;
        const WF = `${FF.colour} ${FF.alpha}`;
        WF !== this.routeLook && (this.routeLook = WF, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(FF) {
          const [WF, SF, CF] = FF[0].pos, AF = [], uF = [], hF = [];
          return FF.forEach(((FF, bW) => {
            let {
              pos: dF,
              way: [PF, RF]
            } = FF;
            const iW = dF[0] - WF + .5,
              eF = dF[1] - SF + .04,
              EF = dF[2] - CF + .5,
              [QF, rW] = [.35 * -RF, .35 * PF],
              [gW, tW] = [bW * SS, (bW + 1) * SS],
              TF = AF.length / 3;
            AF.push(iW - .5 * PF + QF, eF, EF - .5 * RF + rW), AF.push(iW - .5 * PF - QF, eF, EF - .5 * RF - rW), AF.push(iW + .5 * PF + QF, eF, EF + .5 * RF + rW), AF.push(iW + .5 * PF - QF, eF, EF + .5 * RF - rW), uF.push(0, gW, 1, gW, 0, tW, 1, tW), hF.push(TF, TF + 1, TF + 2, TF + 1, TF + 3, TF + 2)
          })), {
            positions: AF,
            uvs: uF,
            indices: hF
          }
        }(FF.cells), {
          kind: "chevronPath",
          colour: FF.colour,
          alpha: FF.alpha
        }, FF.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(FF) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(FF, 250) / 1e3 * 1.2 * SS) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(FF) {
        this.pendingStyle = FF, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const FF = this.owedFrees;
        if (0 === FF.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const WF = this.deps.cmd();
        if (!WF) return FF.length = 0, void(this.pendingFar = void 0);
        let SF = 0;
        for (; SF < FF.length && (0, QF.re)(WF, 0, FF[SF]);) SF++;
        FF.splice(0, SF);
        const CF = this.pendingStyle;
        if (void 0 !== CF) {
          (CF ? (0, QF.yf)(WF, 0, CF.width, CF.alpha, 1, CF.endAtSolidFace ? 1 : 0) : (0, QF.yf)(WF, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const AF = this.pendingFar;
        void 0 !== AF && (0, QF.tf)(WF, 0, null !== AF && void 0 !== AF ? AF : 0, null === AF ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(FF, WF) {
        const SF = this.deps.cmd(),
          CF = uS(FF);
        SF && CF !== QF.Oc && (0, QF.Ef)(SF, 0, CF, WF)
      }
      setFacingTolerance(FF, WF) {
        const SF = this.deps.cmd(),
          CF = uS(FF);
        SF && CF !== QF.Oc && hS(SF, CF, WF)
      }
      forEachEntity(FF) {
        const {
          api: WF
        } = this;
        for (let SF = 0; SF < WF.idStr.length; SF++) {
          const CF = WF.idStr[SF];
          null === CF || qW(WF.kinds[SF]) || FF(CF)
        }
      }
      getEntityInfo(FF) {
        return this.deps.entityInfo.get(FF)
      }
      isEntityInteractable(FF) {
        const WF = uS(FF);
        return WF !== QF.Oc && 1 === this.api.queries.entityInteractable(WF)
      }
      isLocalPlayer(FF) {
        return this.isLocal(FF)
      }
      getLineOwner(FF) {
        var WF;
        const SF = null === (WF = this.deps.entityInfo.get(FF)) || void 0 === WF ? void 0 : WF.meshOpts;
        if (!SF) return null;
        try {
          const {
            lineToEId: FF
          } = JSON.parse(SF);
          return null !== FF && void 0 !== FF ? FF : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const FF = this.api.apiView;
        return pW[0] = QF.m.eye(FF, 0, 0), pW[1] = QF.m.eye(FF, 0, 1), pW[2] = QF.m.eye(FF, 0, 2), pW
      }
      getCameraFar() {
        return QF.m.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(FF) {
        null !== FF && (this.farSet = !0), this.pendingFar = FF, this.flushOwed()
      }
      clearPickupDelay(FF) {
        const WF = this.deps.cmd(),
          SF = uS(FF);
        WF && SF !== QF.Oc && (0, QF.Sd)(WF, 0, SF)
      }
      sendChat(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = this.deps.sendCmd();
        SF && UW(SF, 0, BW.b.Chat, (0, zW.f)((0, BW.h)({
          rb: FF,
          jH: WF
        })))
      }
      sendCommand(FF) {
        FF.length <= 119 && this.sendChat(`/${FF}`)
      }
      predictedCells(FF, WF, SF, CF) {
        const AF = this.chunks,
          uF = [],
          hF = (FF, WF, SF, CF, AF) => {
            uF.push(FF, WF, SF, CF, this.tables.blockRootId(AF) === this.tables.blockRootId(CF) ? 0 : 1)
          },
          bW = AF.ah(FF, WF, SF),
          dF = AS(bW);
        if (dF) {
          const [CF, uF, PF] = [FF - dF.x, WF - dF.y, SF - dF.z], RF = CS[AF.ah(CF, uF, PF)], iW = null === RF || void 0 === RF ? void 0 : RF.positions.some((FF => FF.id === bW && FF.x === dF.x && FF.y === dF.y && FF.z === dF.z));
          for (const FF of (iW && RF ? RF : dF.main).positions) AF.ah(CF + FF.x, uF + FF.y, PF + FF.z) === FF.id && hF(CF + FF.x, uF + FF.y, PF + FF.z, 0, FF.id)
        }
        const PF = AS(CF);
        if (PF)
          for (const iW of PF.main.positions) {
            const [CF, uF, bW] = [FF + iW.x - PF.x, WF + iW.y - PF.y, SF + iW.z - PF.z];
            hF(CF, uF, bW, iW.id, AF.ah(CF, uF, bW))
          } else hF(FF, WF, SF, CF, bW);
        const RF = this.tables;
        if ((0 !== RF.attachedTopOf(bW) || 0 !== RF.attachedTopOf(CF)) && AF.isLoaded(FF, WF + 1, SF)) {
          let dF = AF.ah(FF, WF + 1, SF);
          for (let CF = 0; CF < uF.length; CF += 5) uF[CF] === FF && uF[CF + 1] === WF + 1 && uF[CF + 2] === SF && (dF = uF[CF + 3]);
          const PF = this.attachedTopWrite(bW, CF, dF);
          void 0 !== PF && hF(FF, WF + 1, SF, PF, dF)
        }
        return uF
      }
      attachedTopWrite(FF, WF, SF) {
        const CF = this.tables,
          AF = CF.attachedTopOf(FF),
          uF = CF.attachedTopOf(WF),
          hF = 0 !== AF && 0 !== SF && CF.blockRootId(SF) === CF.blockRootId(AF);
        return 0 !== AF && 0 !== uF && CF.blockRootId(FF) === CF.blockRootId(WF) ? hF && SF !== uF ? uF : void 0 : 0 === uF || !hF && 0 !== SF ? hF ? 0 : void 0 : uF
      }
    }
    const dS = QF.Yb + QF._b * QF.ec.BYTES,
      PS = 2147483647,
      RS = new TextDecoder,
      iC = new TextEncoder,
      eS = Object.freeze({
        zK: 0,
        fK: null,
        amountAddedToSlot: 0
      }),
      ES = new Proxy({}, {
        get: () => () => QF.Yc
      });

    function QS(FF) {
      return Number.isInteger(FF) && FF >= 0 && FF <= 65535
    }

    function rC(FF) {
      return Number.isInteger(FF) && FF >= 0 && FF <= 4294967295
    }
    class gC {
      constructor(FF) {
        this.deps = FF, this.vY = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(QF._b), this.ids = new Uint16Array(QF._b), this.amounts = new Uint16Array(QF._b), this.attrRead = new Float64Array(QF._b).fill(-1), this.stale = new Uint16Array(QF._b), this.staleVersion = new Uint32Array(QF._b), this.instances = new Uint32Array(QF._b), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(FF) {
        var WF;
        return Number.isInteger(FF) && FF >= 0 && FF < this.len && 0 !== this.ids[FF] && null !== (WF = this.facades[FF]) && void 0 !== WF ? WF : null
      }
      yS() {
        return this.slot(this.selected)
      }
      playerItems() {
        const FF = [];
        for (let WF = 0; WF < Math.min(QF.gd, this.len); WF++) FF.push(this.slot(WF));
        return FF
      }
      freeSlots() {
        let FF = 0;
        for (let WF = 0; WF < Math.min(QF.gd - QF.g, this.len); WF++) 0 === this.ids[WF] && FF++;
        return FF
      }
      amountOf(FF) {
        let WF = 0;
        for (let CF = 0; CF < Math.min(QF.gd, this.len); CF++) {
          const AF = this.slot(CF);
          var SF;
          if ((null === AF || void 0 === AF ? void 0 : AF.name) === FF) WF += null !== (SF = AF.amount) && void 0 !== SF ? SF : 1
        }
        return WF
      }
      instance(FF) {
        var WF;
        return null !== (WF = this.instances[FF]) && void 0 !== WF ? WF : 0
      }
      watch(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      touch() {
        this.version++
      }
      flush(FF) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const SF of [...this.listeners]) try {
            SF()
          } catch (WF) {
            FF(WF)
          }
        }
      }
      chestOpened(FF, WF, SF) {
        this.vY[0] = FF, this.vY[1] = WF, this.vY[2] = SF, this.version++
      }
      refresh() {
        const FF = this.deps.api.apiView,
          WF = QF.m.inventoryViewPtr(FF, 0),
          SF = QF.m.inventoryVersion(FF, 0),
          CF = QF.m.selectedSlot(FF, 0);
        CF !== this.selected && (this.selected = CF, this.version++);
        const AF = QF.m.slotIcon(FF, 0);
        if (AF !== this.slotIconId && (this.slotIconId = AF, this.iconChanged = !0), WF === this.viewPtr && SF === this.viewVersion) return;
        this.viewPtr = WF, this.viewVersion = SF;
        const uF = this.deps.api.memoryData(WF, dS, 4, "the inventory view"),
          hF = uF ? Math.min(uF.getUint32(0, !0), QF._b) : 0;
        hF !== this.len && (this.len = hF, this.version++);
        let bW = 0;
        for (let dF = 0; dF < QF._b; dF++) {
          const FF = QF.Yb + dF * QF.ec.BYTES,
            WF = null !== uF && dF < hF ? QF.ec.item(uF, FF) : 0;
          if (0 === WF || null === uF) {
            0 !== this.ids[dF] && (this.ids[dF] = 0, this.attrRead[dF] = -1, this.instances[dF]++, this.version++);
            continue
          }
          const SF = QF.ec.amount(uF, FF),
            CF = QF.ec.attrVersion(uF, FF);
          WF === this.ids[dF] && SF === this.amounts[dF] || this.fill(dF, WF, SF), CF !== this.attrRead[dF] && (this.stale[bW] = dF, this.staleVersion[bW] = CF, bW++)
        }
        bW > 0 && this.fetchAttributes(bW)
      }
      fill(FF, WF, SF) {
        const {
          tables: CF
        } = this.deps, AF = WF !== this.ids[FF];
        let uF = this.facades[FF];
        uF || (uF = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[FF] = uF), AF && (uF.name = CF.nameOfId(WF), uF.typeObj = CF.itemType(WF), uF.attributes = {
          customAttributes: {}
        }, this.attrRead[FF] = -1, this.instances[FF]++), uF.amount = 0 === SF ? null : SF, this.ids[FF] = WF, this.amounts[FF] = SF, this.version++
      }
      fetchAttributes(FF) {
        const {
          api: WF,
          onError: SF
        } = this.deps, CF = WF.memoryView(Uint16Array, WF.scratch(), FF, "item_attributes_batch's slots");
        if (!CF) return void this.markRead(FF);
        CF.set(this.stale.subarray(0, FF));
        const AF = WF.queries.itemAttributesBatch(FF),
          uF = 4294967295 === AF ? null : WF.memoryData(WF.scratch(), AF, 4, "item_attributes_batch's answer");
        if (!uF) return void this.markRead(FF);
        const hF = new Uint8Array(uF.buffer, uF.byteOffset, AF);
        for (let dF = 0; dF + 8 <= AF;) {
          const FF = uF.getUint16(dF, !0),
            WF = uF.getUint32(dF + 4, !0),
            CF = hF.subarray(dF + 8, dF + 8 + WF);
          dF += 8 + (0, eF.$d)(WF);
          const AF = this.facades[FF];
          if (AF && 0 !== this.ids[FF] && 0 !== WF) {
            try {
              AF.attributes = JSON.parse(RS.decode(CF))
            } catch (bW) {
              SF(bW)
            }
            this.version++
          }
        }
        this.markRead(FF)
      }
      markRead(FF) {
        for (let WF = 0; WF < FF; WF++) this.attrRead[this.stale[WF]] = this.staleVersion[WF]
      }
      swap(FF, WF, SF) {
        if (!QS(FF) || !QS(WF)) return !1;
        const CF = this.queries();
        return SF ? this.settle(CF.invSwapLocal(FF, WF), !0) : this.settle(CF.invSwap(FF, WF))
      }
      move(FF, WF, SF) {
        return QS(FF) && QS(WF) && rC(SF) && this.settle(this.queries().invMove(FF, WF, SF))
      }
      quickMove(FF, WF, SF, CF) {
        var AF, uF;
        if (!QS(FF) || !QS(WF) || !QS(SF) || null !== CF && !rC(CF)) return null;
        const hF = this.queries().invQuickMove(FF, WF, SF, null === CF ? -1 : Math.min(CF, PS)),
          bW = hF === QF.Yc ? QF.Cb : null !== (AF = null === (uF = this.extras()) || void 0 === uF ? void 0 : uF[1]) && void 0 !== AF ? AF : QF.Cb;
        return this.settle(hF), bW === QF.Cb ? null : bW
      }
      remove(FF, WF, SF) {
        return QS(FF) && rC(WF) && this.settle(this.queries().invRemove(FF, WF, SF ? 1 : 0))
      }
      selectSlot(FF) {
        return QS(FF) && this.settle(this.queries().selectSlot(FF))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(FF, WF, SF) {
        if (!QS(FF) || !Number.isInteger(WF)) return !1;
        const [CF, AF, uF] = SF;
        return this.settle(this.queries().invEnchant(FF, WF, Math.floor(CF), Math.floor(AF), Math.floor(uF)))
      }
      craft(FF, WF, SF) {
        let CF;
        try {
          CF = this.deps.tables.getItemId(FF)
        } catch {
          return eS
        }
        if (!QS(WF) || null !== SF && (Number.isNaN(SF) || SF < 0)) return eS;
        const AF = null === SF || SF > PS ? -1 : Math.floor(SF),
          uF = this.queries().craft(CF, WF, AF);
        let hF = eS;
        const bW = uF === QF.Yc ? null : this.extras();
        if (bW) {
          const [FF, WF, SF] = bW;
          hF = {
            zK: FF,
            fK: WF === QF.Cb ? null : WF,
            amountAddedToSlot: SF
          }
        }
        return this.settle(uF), hF
      }
      salvage(FF, WF, SF) {
        let CF;
        try {
          CF = this.deps.tables.getItemId(WF)
        } catch {
          return !1
        }
        return QS(FF) && Number.isInteger(SF) && this.settle(this.queries().salvage(FF, CF, Math.max(Math.min(SF, PS), -PS)))
      }
      craftingView(FF, WF, SF) {
        var CF;
        if (this.stopped) return null;
        const {
          api: AF,
          onError: uF
        } = this.deps, hF = FF ? iC.encode(FF) : null;
        if (null !== hF) {
          if (hF.length > 1024) return uF(new Error(`The crafting station ${FF}'s name is over 1024 bytes`)), null;
          const WF = AF.memoryView(Uint8Array, AF.scratch(), hF.length, "crafting_view's station");
          if (!WF) return null;
          WF.set(hF)
        }
        const bW = QS(WF) && QS(SF),
          dF = AF.queries.craftingView(null !== (CF = null === hF || void 0 === hF ? void 0 : hF.length) && void 0 !== CF ? CF : 0, bW ? WF : 0, bW ? SF : 0);
        return dF < QF.cb.BYTES ? (AF.reportCorruption(`crafting_view's answer of ${dF} bytes`), null) : AF.memoryData(AF.scratch(), dF, 1, "crafting_view's answer")
      }
      queries() {
        var FF, WF;
        return !1 === (null === (FF = (WF = this.deps).beforeOp) || void 0 === FF ? void 0 : FF.call(WF)) ? (this.stopped = !0, ES) : this.deps.api.queries
      }
      extras() {
        const {
          api: FF
        } = this.deps;
        return FF.memoryView(Uint32Array, FF.scratch(), 3, "a sync query's extra words")
      }
      settle(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (FF === QF.Wc) WF || (0, XW.d)();
        else if (FF !== QF.Yc) {
          const WF = this.deps.cmd();
          WF && function(FF, WF, SF) {
            return (0, XW.d)(), (0, QF.Lf)(FF, WF, SF)
          }(WF, 0, FF) || this.deps.onError(new Error(`Sync op ${FF}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), FF !== QF.Yc
      }
    }
    const tC = 1 / .6,
      TS = [0, 1, 0],
      aC = [0, 0, 0],
      kC = new Uint8Array(0),
      qC = 1.2 * gS.h.RV,
      VS = new TextEncoder,
      NS = [0, 0, 0],
      DS = [0, 0, 0],
      LS = new Map;

    function mC(FF) {
      let WF = LS.get(FF);
      return WF || (LS.size >= 64 && LS.clear(), WF = VS.encode(`{"emitRate":${FF}}`), LS.set(FF, WF)), WF
    }

    function OS(FF) {
      return Number.isFinite(FF) && FF > 0 ? FF : 0
    }

    function xC(FF, WF) {
      for (let SF = 0; SF < 3; SF++) {
        const CF = Math.abs(WF[SF]);
        NS[SF] = FF[SF] - CF, DS[SF] = 2 * CF
      }
      return Number.isFinite(NS[0] + NS[1] + NS[2] + DS[0] + DS[1] + DS[2])
    }

    function ZS(FF, WF) {
      return "pos1" === FF || "pos2" === FF ? void 0 : WF
    }

    function oS(FF, WF, SF) {
      return FF.length > QF.kd.MaxOpts ? (SF(new Error(`${WF}'s particle opts are over ${QF.kd.MaxOpts} bytes of JSON`)), null) : FF
    }
    const YS = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class MS {
      constructor(FF) {
        this.deps = FF, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(FF, WF) {
        var SF;
        const CF = this.sink(),
          AF = null !== (SF = WF.half) && void 0 !== SF ? SF : aC;
        if (!CF || this.live >= QF.kd.MaxLiveKeys || this.nextKey > QF.kd.MaxKey || !xC(WF.pos, AF)) return YS;
        const uF = this.nextKey,
          hF = oS(function(FF) {
            var WF, SF, CF;
            const AF = JSON.stringify({
              texture: "string" === typeof FF.texture ? FF.texture : "smokePuff",
              ZF: FF.ZF,
              minLifeTime: FF.minLifeTime,
              maxLifeTime: FF.maxLifeTime,
              minSize: FF.minSize,
              maxSize: FF.maxSize,
              minEmitPower: FF.minEmitPower,
              maxEmitPower: FF.maxEmitPower,
              emitRate: OS(FF.emitRate),
              gravity: null !== (WF = FF.gravity) && void 0 !== WF ? WF : aC,
              dir1: null !== (SF = FF.dir1) && void 0 !== SF ? SF : TS,
              dir2: null !== (CF = FF.dir2) && void 0 !== CF ? CF : TS,
              colorGradients: FF.colorGradients,
              blendMode: FF.blendMode
            });
            return VS.encode(AF)
          }(FF), "createParticles", this.deps.onError);
        return hF && (0, QF.Le)(CF, 0, uF, 0, QF.kd.PresetNone, 0, NS, DS, hF) ? (this.nextKey++, this.live++, this.started = !0, new cC(this, this.session, uF, FF, AF)) : YS
      }
      playEffect(FF) {
        const WF = this.sink(),
          {
            pos1: SF,
            pos2: CF
          } = FF;
        if (!WF || !SF || !CF) return;
        for (let uF = 0; uF < 3; uF++) NS[uF] = Math.min(SF[uF], CF[uF]), DS[uF] = Math.abs(CF[uF] - SF[uF]);
        if (!Number.isFinite(NS[0] + NS[1] + NS[2] + DS[0] + DS[1] + DS[2])) return;
        const AF = oS(VS.encode(JSON.stringify(FF, ZS)), "playParticleEffect", this.deps.onError);
        AF && (0, QF.Ee)(WF, 0, 0, QF.kd.PresetNone, QF.kd.HasBox, 0, NS, DS, AF)
      }
      burstPreset(FF, WF, SF) {
        const CF = this.sink(),
          AF = Math.min(Math.floor(SF), QF.kd.MaxBurst);
        if (!CF || !Object.hasOwn(QF.Pb, FF) || !(AF > 0)) return;
        const uF = qC;
        for (let hF = 0; hF < 3; hF++) NS[hF] = WF[hF] - uF / 2, DS[hF] = uF;
        Number.isFinite(NS[0] + NS[1] + NS[2]) && (0, QF.Ee)(CF, 0, 0, QF.Pb[FF], QF.kd.HasBox, AF, NS, DS, kC)
      }
      sessionEnded() {
        this.session++;
        const FF = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !FF || (0, QF.Ne)(FF, 0)
      }
      sinkFor(FF) {
        return FF === this.session ? this.deps.cmd() : null
      }
      stop(FF, WF) {
        const SF = this.sinkFor(FF);
        SF && (0, QF.Oe)(SF, 0, WF) && this.live--
      }
    }
    class cC {
      constructor(FF, WF, SF, CF, AF) {
        this.owner = FF, this.session = WF, this.key = SF, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(AF[0]), Math.abs(AF[1]), Math.abs(AF[2])], this.rate = OS(CF.emitRate), this.emitted = this.rate > 0;
        const uF = CF.maxLifeTime * tC * 1e3 + 250;
        this.stopDelayMs = uF >= 0 ? Math.min(uF, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(FF, WF) {
        const SF = this.sink();
        if (SF) {
          if (WF)
            for (let FF = 0; FF < 3; FF++) this.half[FF] = Math.abs(WF[FF]);
          xC(FF, this.half) && (0, QF.Re)(SF, 0, this.key, QF.kd.HasBox, NS, DS, kC)
        }
      }
      setEmitRate(FF) {
        const WF = this.sink(),
          SF = OS(FF);
        WF && SF !== this.rate && (0, QF.Re)(WF, 0, this.key, 0, aC, aC, mC(SF)) && (this.rate = SF, this.emitted ||= SF > 0)
      }
      emit(FF) {
        const WF = this.sink(),
          SF = Math.min(Math.floor(FF), QF.kd.MaxBurst);
        WF && SF > 0 && (0, QF.Ee)(WF, 0, this.key, QF.kd.PresetNone, 0, SF, aC, aC, kC) && (this.emitted = !0)
      }
      emitPoints(FF, WF, SF) {
        const CF = this.sink(),
          AF = Math.min(Math.floor(SF), QF.kd.MaxPoints, Math.floor(WF.length / 4));
        if (!CF || !(AF > 0) || !Number.isFinite(FF[0] + FF[1] + FF[2])) return;
        const uF = new Uint8Array(WF.buffer, WF.byteOffset, AF * QF.kd.PointBytes);
        (0, QF.He)(CF, 0, this.key, AF, FF, uF) && (this.emitted = !0)
      }
      setDirections(FF, WF) {
        const SF = this.sink();
        if (!SF || !Number.isFinite(FF[0] + FF[1] + FF[2] + WF[0] + WF[1] + WF[2])) return;
        const CF = VS.encode(JSON.stringify({
          dir1: [FF[0], FF[1], FF[2]],
          dir2: [WF[0], WF[1], WF[2]]
        }));
        (0, QF.Re)(SF, 0, this.key, 0, aC, aC, CF)
      }
      stop() {
        const FF = this.sink();
        this.stopped = !0, FF && (this.emitted ? (this.rate > 0 && (0, QF.Re)(FF, 0, this.key, 0, aC, aC, mC(0)), setTimeout((() => {
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
    const GS = HW.p,
      zC = new TextDecoder;

    function IS(FF, WF) {
      const {
        serverIds: SF,
        kinds: CF
      } = FF;
      let AF = 0;
      for (let uF = 0; uF < SF.length; uF++) {
        const FF = SF[uF];
        if (FF !== QF.Oc && !qW(CF[uF])) {
          if (AF === WF.length) {
            const FF = new Int32Array(Math.max(64, 2 * AF));
            FF.set(WF), WF = FF
          }
          WF[AF++] = FF
        }
      }
      return {
        ids: WF,
        count: AF
      }
    }

    function fS(FF, WF) {
      return FF.length >= WF ? FF : new Int32Array(Math.max(WF, 2 * FF.length))
    }

    function yC(FF, WF, SF, CF) {
      for (let AF = 0; AF < SF; AF += 4096) {
        const uF = Math.min(4096, SF - AF),
          hF = FF.memoryView(Int32Array, FF.scratch(), uF, "entity_info_batch's ids");
        if (!hF) return !1;
        hF.set(WF.subarray(AF, AF + uF));
        const bW = FF.queries.entityInfoBatch(uF),
          dF = 4294967295 === bW ? null : FF.memoryData(FF.scratch(), bW, 4, "entity_info_batch's records");
        if (!dF) return !1;
        for (let FF = 0; FF + QF.Fb.BYTES <= bW;) {
          const WF = QF.Fb.len(dF, FF);
          CF(QF.Fb.serverId(dF, FF), sS(dF, FF, WF)), FF += QF.Fb.BYTES + (0, eF.$d)(WF)
        }
      }
      return !0
    }

    function sS(FF, WF, SF) {
      var CF, AF, uF;
      const hF = QF.Fb.kind(FF, WF),
        bW = 0 === hF ? null : VF(hF);
      if (null === bW) return null;
      const dF = QF.Fb.variation(FF, WF),
        PF = QF.Fb.pose(FF, WF),
        RF = QF.Fb.meta(FF, WF),
        iW = QF.Fb.mesh(FF, WF),
        eF = 0 !== (QF.Fb.flags(FF, WF) & QF.Eb.HasOpts),
        EF = GS[bW];
      return Object.freeze({
        type: bW,
        variation: dF === QF.Vc ? void 0 : null !== (CF = null !== (AF = null === EF || void 0 === EF ? void 0 : EF[dF]) && void 0 !== AF ? AF : null === EF || void 0 === EF ? void 0 : EF[0]) && void 0 !== CF ? CF : "default",
        pose: PF === QF.Wb ? void 0 : null !== (uF = QF.zb[PF]) && void 0 !== uF ? uF : QF.zb[0],
        metaInfo: RF === QF.Wb ? void 0 : QF.Dc[RF],
        meshKind: iW === QF.Wb ? void 0 : QF.zc[iW],
        meshOpts: eF ? zC.decode(new Uint8Array(FF.buffer, FF.byteOffset + WF + QF.Fb.BYTES, SF)) : void 0
      })
    }
    const nS = 1,
      HS = 2;
    class KS {
      constructor(FF) {
        this.deps = FF, this.wanted = 0, this.yS = !1, this.refused = !1
      }
      get on() {
        return this.yS
      }
      want(FF, WF) {
        this.wanted = WF ? this.wanted | FF : this.wanted & ~FF;
        const SF = 0 !== this.wanted;
        if (SF === this.yS) return;
        const CF = this.deps.cmd();
        null !== CF ? (0, QF.Pf)(CF, 0, SF ? 1 : 0) ? (this.yS = SF, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.yS = !1
      }
    }
    class wS {
      constructor(FF) {
        this.deps = FF, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(FF) {
        var WF;
        return this.complete || this.fill(), null !== (WF = this.entries.get("string" === typeof FF ? FF : String(FF))) && void 0 !== WF ? WF : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(FF) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const FF = new Int32Array(2 * this.pending.length);
            FF.set(this.pending), this.pending = FF
          }
          this.pending[this.pendingCount++] = FF
        }
      }
      removed(FF) {
        this.entries.size > 0 && this.entries.delete(String(FF))
      }
      refresh() {
        const FF = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (FF > 0 && this.complete) {
          const {
            api: WF
          } = this.deps;
          let SF = 0;
          const CF = this.ids = fS(this.ids, FF);
          for (let AF = 0; AF < FF; AF++) {
            const FF = this.pending[AF],
              uF = WF.indexById.get(FF);
            void 0 === uF || qW(WF.kinds[uF]) ? this.entries.delete(String(FF)) : CF[SF++] = FF
          }
          SF > 0 && !this.batch(CF, SF) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(nS, !1)
      }
      fill() {
        const {
          api: FF
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: FF
          } = this.deps, WF = FF.on;
          FF.want(nS, !0), !WF && FF.on && (this.refill = this.midFrame)
        }
        const {
          ids: WF,
          count: SF
        } = IS(FF, this.ids);
        this.ids = WF, SF > 0 && !this.batch(WF, SF) && (this.refill = !0)
      }
      batch(FF, WF) {
        return yC(this.deps.api, FF, WF, ((FF, WF) => {
          null === WF ? this.entries.delete(String(FF)) : this.entries.set(String(FF), WF)
        }))
      }
    }
    var XS = SF(3793);

    function US(FF) {
      if ("message" !== FF.type || FF.rb !== XS.Ob.NewClientOptions || FF.payloadKind !== eF.Pb.Msgpack) return null;
      const WF = (0, zW.b)(FF.payload);
      if (null === WF || "object" !== typeof WF || Array.isArray(WF)) throw new Error("NewClientOptions whose body isn't an object of options");
      return WF
    }
    var BS = SF(1101),
      jC = SF(35144);

    function vC(FF, WF, SF, CF, AF, uF, bW) {
      var dF, PF, RF;
      switch (FF) {
        case QF.Id.ToggleMenu: {
          const FF = QF.D[WF];
          hF.j.Uu("toggleMenu", void 0 === FF ? "inventory" : `inventory|${FF}`);
          break
        }
        case QF.Id.EditBoard:
          hF.j.Uu("EditBoard", {
            pos: 0 === WF ? null : SF
          });
          break;
        case QF.Id.EditCodeBlock:
        case QF.Id.ViewCodeBlock:
          hF.j.Uu("EditCodeBlock", {
            pos: SF,
            canChangePos: FF === QF.Id.EditCodeBlock
          });
          break;
        case QF.Id.EditCustomLobbyBlock:
          hF.j.Uu("EditCustomLobbyBlock", {
            pos: SF
          });
          break;
        case QF.Id.OpenIronChest:
          hF.j.Uu("OpenIronChest", {
            pos: SF
          });
          break;
        case QF.Id.EditNameTag:
          hF.j.Uu("EditNameTag", null !== (dF = null === (PF = AF.yS()) || void 0 === PF || null === (RF = PF.attributes.customAttributes) || void 0 === RF ? void 0 : RF.text) && void 0 !== dF ? dF : "");
          break;
        case QF.Id.EditBook: {
          var iW, eF, rW;
          const FF = null === (iW = AF.yS()) || void 0 === iW ? void 0 : iW.attributes;
          hF.j.Uu("EditBook", {
            pages: (0, BS.S)(null === FF || void 0 === FF || null === (eF = FF.customAttributes) || void 0 === eF ? void 0 : eF.pages),
            title: null !== (rW = null === FF || void 0 === FF ? void 0 : FF.customDisplayName) && void 0 !== rW ? rW : "Title",
            isPublished: !(null === FF || void 0 === FF || !FF.customDescription)
          });
          break
        }
        case QF.Id.CantChangeBlock:
          ! function(FF, WF) {
            const SF = WF.getClientOption("cantChangeError"),
              CF = WF.getClientOption(FF ? "cantBuildError" : "cantBreakError"),
              AF = FF ? SF : CF;
            (WF.getClientOption("canChange") || AF || "You cannot modify this block" !== SF) && hF.j.Uu("showBottomMessage", {
              message: CF || SF,
              type: "Error"
            })
          }(1 === WF, uF);
          break;
        case QF.Id.MiddleBarStart:
          hF.j.Uu("middleScreenBarInitiate", {
            duration: CF,
            K8: 1 === SF[0],
            horizBarRemOffset: WF
          });
          break;
        case QF.Id.MiddleBarStop:
          hF.j.Uu("middleScreenBarRemove");
          break;
        case QF.Id.Hitmarker:
          hF.j.Uu("localGunHitmarker", {
            MJ: 1 === WF
          });
          break;
        case QF.Id.ShotsLeft:
          hF.j.Uu("localPlayerNewShotsLeft", CF);
          break;
        case QF.Id.AimingOverlay:
          hF.j.Uu("aimingOverlay", 3 === (3 & WF) ? "sniper" : "none");
          break;
        case QF.Id.BottomMessage:
          hF.j.Uu("showBottomMessage", JSON.parse(bW()));
          break;
        case QF.Id.Crosshair:
          AF.inaccuracy = (0, IF.e)(CF), (0, jC.e)().crosshairAccuracy(AF.inaccuracy);
          break;
        case QF.Id.ChargeStage:
          break;
        case QF.Id.EmoteWheelClose:
          hF.j.Uu("requestEmoteWheelClose");
          break;
        case QF.Id.BlockMined:
          hF.j.Uu("localBlockMined");
          break;
        default:
          throw new EF.c(`UiEvent of no kind: what ${FF}`)
      }
    }
    var JS = SF(36408),
      pS = SF(8218),
      lS = SF(1605),
      FC = SF(35280),
      WC = SF(35203),
      SC = SF(3773);
    const CC = 10,
      AC = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      uC = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      hC = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function bA(FF, WF) {
      let SF, CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const uF = () => (SF = (0, lS.q)(SF, WF()), SF);
      return {
        current: uF,
        watch(WF) {
          const SF = () => {
              WF(uF())
            },
            hF = [FF.watch(SF)];
          return null !== CF && hF.push((0, lS.t)((FF => {
            FF.some(CF) && SF()
          }))), null !== AF && hF.push(AF(SF)), () => {
            for (const FF of hF) FF()
          }
        }
      }
    }

    function dC(FF) {
      return FF && {
        name: FF.name,
        amount: FF.amount,
        attributes: FF.attributes
      }
    }
    const PC = new WeakMap;

    function RC(FF) {
      let WF = PC.get(FF);
      return void 0 === WF && (WF = (0, WC.creativeItemIds)().map((WF => ({
        name: FF.nameOfId(WF),
        amount: FF.isStackableId(WF) ? 1 : null,
        attributes: (0, JS.d)("Gun" === (0, WC.itemTypeOf)(WF) ? {
          type: "Gun",
          clipSize: (0, WC.clipSizeOf)(WF)
        } : void 0)
      }))), PC.set(FF, WF)), WF
    }

    function iA(FF, WF, SF, CF) {
      const AF = WF => (FF.flush(CF), WF),
        uF = SF => {
          var CF, AF, uF, hF, bW, dF, PF;
          const RF = FF.slot(SF);
          if (!RF) return null;
          const {
            rootName: iW,
            metaStr: eF
          } = WF.getMetaInfo(RF.name);
          return {
            name: RF.name,
            amount: RF.amount,
            attributes: RF.attributes,
            instance: FF.instance(SF),
            displayName: null !== (CF = RF.attributes.customDisplayName) && void 0 !== CF ? CF : WF.getDisplayName(iW),
            requiresAmmo: "RequiresAmmo" === eF,
            clipSize: null !== (AF = null !== (uF = null === (hF = RF.attributes.customAttributes) || void 0 === hF || null === (bW = hF.gunStats) || void 0 === bW ? void 0 : bW.clipSize) && void 0 !== uF ? uF : null === (dF = WF.getGunStats(iW)) || void 0 === dF ? void 0 : dF.clipSize) && void 0 !== AF ? AF : null === (PF = RF.typeObj) || void 0 === PF ? void 0 : PF.clipSize
          }
        },
        bW = function(FF, WF) {
          let SF = null,
            CF = {
              focus: null,
              recipes: [],
              detail: null
            },
            AF = -1;
          const uF = new Set;
          return {
            read() {
              var uF, hF;
              if (null === SF) return null !== CF.focus && (CF = {
                ...CF,
                focus: null
              }), CF;
              if (CF.focus === SF && AF === FF.changes) return CF;
              if (AF = FF.changes, 0 === FF.length) return CF = {
                focus: SF,
                recipes: [],
                detail: null
              }, CF;
              let bW = 0;
              if (null !== SF.recipe) try {
                bW = WF.getItemId(SF.recipe.name)
              } catch {}
              const dF = FF.craftingView(SF.station, bW, null !== (uF = null === (hF = SF.recipe) || void 0 === hF ? void 0 : hF.YH) && void 0 !== uF ? uF : 0);
              return CF = null === dF ? {
                focus: SF,
                recipes: [],
                detail: null
              } : function(FF, WF, SF) {
                let CF = QF.cb.BYTES;
                const AF = [];
                for (let RF = QF.cb.recipes(FF, 0); RF > 0; RF--) {
                  const SF = QF.$.flags(FF, CF),
                    uF = {
                      name: WF.nameOfId(QF.$.item(FF, CF)),
                      YH: QF.$.recipe(FF, CF),
                      requires: [],
                      produces: QF.$.produces(FF, CF),
                      haveIngredients: 0 !== (SF & QF.Z.HaveIngredients),
                      listed: 0 !== (SF & QF.Z.Listed)
                    };
                  let hF = QF.$.requires(FF, CF);
                  for (CF += QF.$.BYTES; hF > 0; hF--) {
                    const SF = QF.ab.items(FF, CF);
                    uF.requires.push({
                      items: QC(FF, CF + QF.ab.BYTES, SF, WF),
                      amt: QF.ab.amount(FF, CF)
                    }), CF += QF.ab.BYTES + 2 * SF
                  }
                  AF.push(uF)
                }
                const uF = QF.cb.flags(FF, 0);
                if (null === SF.recipe || 0 === (uF & QF.bb.Detail)) return {
                  focus: SF,
                  recipes: AF,
                  detail: null
                };
                const hF = {},
                  bW = {};
                for (let RF = QF.cb.ingredients(FF, 0); RF > 0; RF--) {
                  const SF = QF.V.item(FF, CF),
                    AF = QF.V.from(FF, CF),
                    uF = QF.V.amount(FF, CF);
                  CF += QF.V.BYTES;
                  const dF = AF === QF.A ? null : QC(FF, CF, AF, WF);
                  if (null !== dF && (CF += 2 * AF), 0 === SF) continue;
                  const PF = WF.nameOfId(SF);
                  hF[PF] = uF, null !== dF && (bW[PF] = dF)
                }
                const {
                  name: dF,
                  YH: PF
                } = SF.recipe;
                return {
                  focus: SF,
                  recipes: AF,
                  detail: {
                    name: dF,
                    YH: PF,
                    craftAllTimes: QF.cb.craftAllTimes(FF, 0),
                    roomForOne: 0 !== (uF & QF.bb.RoomForOne),
                    resultStackable: Boolean(WF.getItemStat(dF, "stackable")),
                    amounts: hF,
                    ingredientsCraftedFrom: bW
                  }
                }
              }(dF, WF, SF), CF
            },
            setFocus(FF) {
              SF = FF;
              for (const WF of [...uF]) WF()
            },
            watchFocus: FF => (uF.add(FF), () => {
              uF.delete(FF)
            })
          }
        }(FF, WF);
      return {
        states: {
          inventory: bA(FF, (() => {
            const SF = FF.length;
            if (0 === SF) return AC;
            const CF = [];
            for (let WF = 0; WF < QF.gd; WF++) CF.push(dC(FF.slot(WF)));
            const AF = FF.slotIcon,
              uF = CF[FF.selectedSlot];
            0 !== AF && uF && (CF[FF.selectedSlot] = {
              ...uF,
              icon: WF.nameOfId(AF)
            });
            const hF = !0 === WF.getClientOption("creative");
            let bW = [],
              dF = null;
            if (SF > QF.gd) {
              for (let WF = QF.gd; WF < SF; WF++) bW.push(dC(FF.slot(WF)));
              dF = {
                type: null,
                pos: [...FF.vY],
                numSlots: SF - QF.gd,
                ironChest: null
              }
            } else hF && (bW = RC(WF));
            return {
              player: CF,
              chestOrCreative: bW,
              chest: dF,
              creative: hF,
              selectedSlot: FF.selectedSlot,
              freeSlots: FF.freeSlots()
            }
          }), (0, lS.l)("creative")),
          hotbar: bA(FF, (() => {
            if (0 === FF.length) return uC;
            const WF = [];
            for (let FF = 0; FF < CC; FF++) WF.push(uF(FF));
            return {
              items: WF,
              ammo: FF.amountOf("Ammo"),
              selectedSlot: FF.selectedSlot
            }
          }), (0, lS.j)("DisplayName", "GunStats")),
          crafting: bA(FF, bW.read, null, bW.watchFocus),
          heldItemAim: bA(FF, (() => {
            var WF;
            if (!SF()) return hC;
            const CF = null === (WF = FF.yS()) || void 0 === WF ? void 0 : WF.typeObj,
              AF = "Gun" === (null === CF || void 0 === CF ? void 0 : CF.type);
            return {
              gun: AF,
              aimable: AF || !0 === (null === CF || void 0 === CF ? void 0 : CF.showsAimingUi),
              chargeName: "Chargeable" === (null === CF || void 0 === CF ? void 0 : CF.type) ? CF.name : null
            }
          }), null, (FF => function(FF, WF) {
            let SF = FF();
            return (0, SC.w)((() => {
              const CF = FF();
              CF !== SF && (SF = CF, WF(CF))
            }))
          }(SF, FF)))
        },
        events: {
          hotbarSlotRequested: (0, lS.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, lS.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, lS.e)("numkeyPressed"),
          inventoryDropRequested: (0, lS.e)("DropInvenItem"),
          chestToggled: (0, lS.e)("chestToggleFromServer"),
          chestRefreshed: (0, lS.e)("chestRefreshedFromServer", EC),
          inventorySynced: (0, lS.e)("syncedInvenFromServer", EC),
          enchantingTableOpened: (0, lS.e)("enchantingTable", (FF => {
            let {
              position: SF,
              ah: CF
            } = FF;
            return {
              position: [...SF],
              blockName: WF.getMetaInfo(CF).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(WF) {
            FF.selectSlot(WF), FF.flush(CF)
          },
          removeInventoryItem(WF) {
            let {
              slot: SF,
              amount: CF,
              drop: uF
            } = WF;
            return AF(FF.remove(SF, CF, uF))
          },
          swapInventorySlots(WF) {
            let {
              a: SF,
              b: CF
            } = WF;
            return AF(FF.swap(SF, CF, !1))
          },
          moveInventoryItem(WF) {
            let {
              from: SF,
              to: CF,
              amount: uF
            } = WF;
            return AF(FF.move(SF, CF, uF))
          },
          quickMoveInventoryItem(WF) {
            let {
              slot: SF,
              start: CF,
              end: uF,
              amount: hF
            } = WF;
            return AF(FF.quickMove(SF, CF, uF, hF))
          },
          closeChest() {
            FF.closeChest(), FF.flush(CF), hF.j.Uu("chestClosedByPlayer")
          },
          focusCrafting(FF) {
            bW.setFocus(FF)
          },
          craftRecipe(WF) {
            let {
              name: SF,
              YH: CF,
              times: uF
            } = WF;
            return AF(FF.craft(SF, CF, uF))
          },
          salvageItem(WF) {
            let {
              slot: SF,
              name: CF,
              amount: uF
            } = WF;
            return AF(FF.salvage(SF, CF, uF))
          },
          enchantItem(WF) {
            let {
              slot: SF,
              level: CF,
              tablePos: AF
            } = WF;
            FF.enchant(SF, CF, AF)
          }
        },
        queries: {
          enchantingOffer(SF) {
            let {
              slot: CF,
              blockName: AF
            } = SF;
            return function(FF, WF, SF, CF) {
              const AF = FF.slot(SF);
              if (!AF || !WF.getClientOption("canCraft") || !(0, pS.q)(CF) || (0, pS.n)(AF.attributes)) return eC;
              const uF = (0, WC.enchantmentPerksOf)(WF.getItemId(AF.name));
              if (0 === uF.length) return eC;
              const hF = [];
              for (let bW = 0; bW < FC.b; bW++) {
                const {
                  commonProb: FF,
                  uncommonProb: WF,
                  rareProb: SF,
                  epicProb: AF,
                  legendaryProb: uF,
                  level: dF
                } = (0, pS.c)(CF, bW);
                hF.push({
                  level: dF,
                  odds: [FF, WF, SF, AF, uF].map((FF => 100 * FF))
                })
              }
              return {
                perks: [...uF],
                options: hF
              }
            }(FF, WF, CF, AF)
          }
        }
      }
    }
    const eC = Object.freeze({
      perks: [],
      options: []
    });

    function EC() {
      return null
    }

    function QC(FF, WF, SF, CF) {
      const AF = [];
      for (let uF = 0; uF < SF; uF++) {
        const SF = FF.getUint16(WF + 2 * uF, !0);
        0 !== SF && AF.push(CF.nameOfId(SF))
      }
      return AF
    }
    class rA {
      constructor(FF) {
        this.api = FF, this.positions = new Map, this.targeted = {
          OAF: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Zu: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(FF) {
        let WF = this.positions.get(FF);
        return WF || (this.api.checkValid(FF) || this.api.isLocal(FF) ? (WF = [NaN, NaN, NaN], this.api.readPosition(FF, WF), this.positions.set(FF, WF), WF) : null)
      }
      GhF() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [WF, SF] of this.positions) this.api.readPosition(WF, SF) || this.api.checkValid(WF) || this.api.isLocal(WF) || this.positions.delete(WF);
        const FF = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (QF.m.playerFlags(FF, 0) & QF.ld.Breaking) && QF.m.breakingProgress(FF, 0) >= 0, this.isBreaking)
          for (let WF = 0; WF < 3; WF++) this.breaking[WF] = QF.m.breakingPos(FF, 0, WF)
      }
      refreshTarget() {
        const FF = this.api.apiView,
          WF = QF.m.targetBlockId(FF, 0);
        if (this.hasTarget = WF !== QF.Rc, this.hasTarget) {
          const SF = this.targeted;
          SF.OAF = WF;
          for (let WF = 0; WF < 3; WF++) SF.position[WF] = QF.m.targetBlock(FF, 0, WF), SF.normal[WF] = QF.m.targetNormal(FF, 0, WF), SF.Zu[WF] = QF.m.targetAdjacent(FF, 0, WF)
        }
      }
      despawned(FF) {
        const WF = this.positions.get(FF);
        WF && !this.api.isLocal(FF) && (WF.fill(NaN), this.positions.delete(FF))
      }
    }
    var gA = SF(38568),
      tA = SF(38561),
      TC = SF(35276);
    const aA = 1,
      kA = 2;
    class qA {
      constructor() {
        this.game = new TC.g, this.client = new TC.g, this.yS = 0
      }
      setGame(FF) {
        if (null === FF || "object" !== typeof FF) return !1;
        const {
          key: WF,
          value: SF
        } = FF;
        return "string" === typeof WF && (this.game.setBooleanType(WF, Boolean(SF)), !0)
      }
      setClient(FF, WF) {
        this.client.setBooleanType(FF, WF)
      }
      clearGame() {
        this.game = new TC.g
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? aA : 0) | (this.client._getTotalBooleanVal() ? kA : 0)
      }
      write(FF) {
        const WF = this.perms();
        return WF === this.yS || !(!FF || !(0, QF.ce)(FF, 0, QF.Ib.Keep, WF)) && (this.yS = WF, !0)
      }
    }
    class VC {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = FF, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: bW.b,
          get y() {
            return WF()
          }
        }
      }
      get hasView() {
        const FF = this.api.apiView,
          WF = QF.m.viewProj;
        return 0 !== WF(FF, 0, 3) || 0 !== WF(FF, 0, 7) || 0 !== WF(FF, 0, 11) || 0 !== WF(FF, 0, 15)
      }
      get cameraPosition() {
        const FF = this.api.apiView,
          {
            eye: WF
          } = this;
        for (let SF = 0; SF < 3; SF++) WF[SF] = QF.m.eye(FF, 0, SF);
        return WF
      }
      get cameraDirection() {
        const FF = this.api.apiView,
          WF = QF.m.viewProj,
          SF = WF(FF, 0, 3),
          CF = WF(FF, 0, 7),
          AF = WF(FF, 0, 11),
          uF = Math.hypot(SF, CF, AF),
          {
            forward: hF
          } = this;
        return uF > 0 && (hF[0] = SF / uF, hF[1] = CF / uF, hF[2] = AF / uF), hF
      }
      get cameraHeading() {
        return QF.m.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return QF.m.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return QF.m.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return QF.m.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(FF) {
        this.clip(FF);
        const {
          clipX: WF,
          clipY: SF,
          clipW: CF
        } = this;
        if (CF > 0) {
          const FF = WF / CF * 50,
            AF = -SF / CF * 50;
          return Math.abs(FF) <= this.screenBandPct.x && Math.abs(AF) <= this.screenBandPct.y ? {
            x: 50 + FF,
            y: 50 + AF
          } : this.clampToBand(FF, AF)
        }
        const AF = this.cameraPosition,
          uF = Math.hypot(FF[0] - AF[0], FF[1] - AF[1], FF[2] - AF[2]),
          hF = this.api.apiView,
          bW = QF.m.viewProj,
          dF = uF > 0 ? WF / uF : 0,
          PF = uF > 0 ? -SF / uF : 0,
          RF = Math.hypot(bW(hF, 0, 1), bW(hF, 0, 5), bW(hF, 0, 9)),
          iW = dF / Math.hypot(bW(hF, 0, 0), bW(hF, 0, 4), bW(hF, 0, 8)),
          eF = PF / RF,
          EF = !(Math.abs(iW) >= .001 || Math.abs(eF) >= .001);
        return this.clampToBand(dF, EF ? -(RF || 1) : PF)
      }
      projectDirectionToScreenPos(FF) {
        if (!this.hasView) return;
        const WF = this.cameraPosition,
          SF = this.along;
        for (let CF = 0; CF < 3; CF++) SF[CF] = WF[CF] + 10 * FF[CF];
        return this.projectWorldPosToScreenPos(SF)
      }
      projectWorldPosToViewport(FF) {
        this.clip(FF);
        const {
          clipX: WF,
          clipY: SF,
          clipW: CF
        } = this;
        return CF > 0 ? {
          x: 50 + WF / CF * 50,
          y: 50 - SF / CF * 50
        } : null
      }
      clip(FF) {
        const WF = this.api.apiView,
          SF = FF[0] - QF.m.origin(WF, 0, 0),
          CF = FF[1] - QF.m.origin(WF, 0, 1),
          AF = FF[2] - QF.m.origin(WF, 0, 2),
          uF = QF.m.viewProj;
        this.clipX = uF(WF, 0, 0) * SF + uF(WF, 0, 4) * CF + uF(WF, 0, 8) * AF + uF(WF, 0, 12), this.clipY = uF(WF, 0, 1) * SF + uF(WF, 0, 5) * CF + uF(WF, 0, 9) * AF + uF(WF, 0, 13), this.clipW = uF(WF, 0, 3) * SF + uF(WF, 0, 7) * CF + uF(WF, 0, 11) * AF + uF(WF, 0, 15)
      }
      clampToBand(FF, WF) {
        return (0, bW.c)(FF, WF, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var NC = SF(3810);
    const DC = new TextEncoder,
      LC = new Uint8Array(QF.H * QF.G);
    class mA {
      constructor() {
        this.buttons = [], this.yS = !0
      }
      set(FF) {
        this.buttons = FF, this.yS = !1
      }
      attached() {
        this.yS = 0 === this.buttons.length
      }
      write(FF) {
        if (this.yS) return;
        const WF = new Uint8Array(QF.H),
          SF = new Uint8Array(QF.H);
        let CF = 0,
          AF = 0;
        for (const {
            id: uF,
            keycode: hF
          }
          of this.buttons) {
          if (CF === QF.H) break;
          const {
            read: FF,
            written: bW
          } = DC.encodeInto(uF, LC.subarray(AF, AF + QF.G));
          if (FF < uF.length) continue;
          const dF = NC.i[hF];
          WF[CF] = "number" === typeof dF ? dF : 0, SF[CF] = bW, CF++, AF += bW
        }
        this.yS = (0, QF.Qd)(FF, 0, CF, WF, SF, LC.subarray(0, AF))
      }
    }

    function OC(FF, WF, SF) {
      const CF = DC.encode(WF);
      return CF.length <= QF.G && function(FF, WF, SF, CF) {
        return (0, XW.d)(), (0, QF.Ve)(FF, WF, SF, CF)
      }(FF, 0, SF ? 1 : 0, CF)
    }
    const xA = new TextDecoder;
    class ZC {
      constructor(FF) {
        var WF;
        this.options = FF, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = !1, this.promptWatchSent = !1, this.customButtons = new mA, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.cmd = null, this.freeCam = new qA, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.SC = FF => {
          if ((0, EF.k)(FF)) throw FF;
          this.onError(FF)
        }, this.api = FF.api, this.tables = FF.tables, this.onError = null !== (WF = FF.onError) && void 0 !== WF ? WF : FF => {
          console.error("Error in client game callback", FF)
        }, this.renderFrame = new VC(this.api, FF.screenBandY), this.live = new rA(this.api), this.chunks = new PW(this.api.memory, (() => this.api.apiView)), this.items = new gC({
          api: this.api,
          tables: FF.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: FF.beforeOp
        });
        const SF = () => this.stopped() ? null : this.cmd,
          CF = () => this.sessionLive;
        this.entityInfoWatch = new KS({
          cmd: SF,
          onError: this.onError
        }), this.entityInfo = new wS({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: CF
        }), this.particles = new MS({
          cmd: SF,
          isSessionLive: CF,
          onError: this.onError
        }), this.clientApi = new bC({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: FF.tables,
          cmd: SF,
          sendCmd: () => this.sendCmd(),
          isSessionLive: CF,
          beforeWrite: () => {
            var WF;
            if (this.stopped()) return !1;
            const SF = this.generation;
            return !1 !== (null === (WF = FF.beforeWrite) || void 0 === WF ? void 0 : WF.call(FF)) && SF === this.generation
          },
          playerDbId: () => {
            const FF = this.session;
            if (null === FF) throw new Error("No game session has started, so the local player has no DB id");
            return FF.playerDbId
          },
          playSound: FF.playSound,
          hasPackModel: FF.hasPackModel
        }), this.scriptedCamera = new UF({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: FF.cameraScreen,
          showFacing: FF.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= iA(this.items, this.tables, (() => this.localPlayerAlive()), this.SC), this.itemSources
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
      clickCodeBlock(FF) {
        const WF = this.sessionLive ? this.sendCmd() : null;
        return null !== WF && (SF = WF, CF = 0, AF = FF[0], uF = FF[1], hF = FF[2], (0, XW.d)(), (0, QF.Wd)(SF, CF, AF, uF, hF));
        var SF, CF, AF, uF, hF
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(FF) {
        const WF = this.liveCmd();
        return null === WF ? (this.pendingZoom = FF, !1) : (this.pendingZoom = null, (0, QF.If)(WF, 0, FF, 1))
      }
      respawn() {
        const FF = this.sessionLive ? this.sendCmd() : null;
        return null !== FF && (WF = FF, SF = 0, (0, XW.d)(), (0, QF.hf)(WF, SF));
        var WF, SF
      }
      bindCustomButtonKeys(FF) {
        this.customButtons.set(FF)
      }
      pressCustomButton(FF, WF) {
        const SF = this.sessionLive ? this.sendCmd() : null;
        return null !== SF && OC(SF, FF, WF)
      }
      thirdPersonFor(FF) {
        const WF = this.liveCmd();
        return null !== WF && (0, QF.Mf)(WF, 0, null !== FF && void 0 !== FF ? FF : 1 / 0)
      }
      send(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== CF && UW(CF, SF ? eF.Mc : 0, FF, (0, zW.f)(WF))
      }
      socketAttached(FF) {
        this.openSocket = FF, this.socketLeftSinceAttach = !1
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
      attach(FF) {
        const WF = () => FF.isStopped;
        this.stopped = WF, this.cmd = FF.rings.cmd, this.promptWatchSent = !1, this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const SF = this.api.apiView;
        this.overflowGen = QF.m.eventOverflowGen(SF, 0), this.resyncOwed = 0 !== QF.m.eventOverflowMask(SF, 0), FF.setGameHost(this), FF.setEventWalker((FF => {
          this.api.walk(FF, this, WF)
        }))
      }
      watchPromptPick(FF) {
        this.promptWatch = FF, this.writePromptWatch()
      }
      get promptEntity() {
        return !this.promptWatch || this.stopped() ? null : oC(QF.m.promptEntity(this.api.apiView, 0))
      }
      closeGame() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === FF || FF >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, FF, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(FF) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(FF)
      }
      netEvent(FF) {
        "connection" === FF.type ? FF.phase === eF.F.Activated && FF.conn !== this.activeConn && FF.conn > this.closedThrough ? (this.endSession(), this.activeConn = FF.conn, this.endGameGrants(), this.dropGameCamera()) : FF.phase !== eF.F.Left && FF.phase !== eF.F.Closed || FF.conn !== this.activeConn || this.closeGame() : FF.conn === this.activeConn && 0 !== FF.conn && (FF.rb === tA.q ? this.gunHit(FF.payload) : FF.rb === XS.Ob.EditItemCraftingRecipes || FF.rb === tA.J ? this.items.touch() : (this.serverOptions(FF), this.gameMessage(FF)));
        const WF = this.options.onNetEvent;
        WF && this.guard((() => {
          WF(FF)
        }))
      }
      serverOptions(FF) {
        const WF = this.options.serverOptions,
          SF = WF ? this.decoded(US, FF) : null;
        WF && SF && this.guard((() => {
          WF.applyNewClientOptions(SF)
        }))
      }
      gameMessage(FF) {
        let WF = null;
        try {
          WF = function(FF) {
            if ("message" !== FF.type || FF.rb !== XS.Ob.GameCodeMessage || FF.payloadKind !== eF.Pb.Msgpack) return null;
            const WF = (0, zW.b)(FF.payload);
            if (null === WF || "object" !== typeof WF || "string" !== typeof WF.messageType) throw new Error("GameCodeMessage without a messageType");
            return WF
          }(FF)
        } catch (SF) {
          this.sessionLive && this.onError(SF)
        }
        if (WF) {
          const {
            messageType: FF,
            data: SF
          } = WF;
          if ((0, xW.f)(FF)) return void this.guard((() => {
            (0, xW.c)(FF, SF)
          }));
          "freeCamPerms" === FF && this.freeCam.setGame(SF) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (WF => {
            WF.onReceivedMessageFromServer(FF, SF)
          }))
        }
      }
      decoded(FF, WF) {
        try {
          return FF(WF)
        } catch (SF) {
          return this.onError(SF), null
        }
      }
      setClientFreeCameraGrant(FF, WF) {
        this.freeCam.setClient(FF, WF), this.writeFreeCam()
      }
      localPlayerBound(FF) {
        if (0 === this.activeConn || this.sessionLive && FF === this.boundId) return;
        const WF = this.sessionLive;
        let SF, CF, AF, uF;
        this.endSession(), WF && this.restartGameCamera();
        try {
          var hF;
          this.session = null;
          const FF = this.options.sessionInfo(this.activeConn);
          if (this.session = FF, !FF) return;
          SF = FF.gameNameWithVariation, CF = null !== (hF = (0, mW.Ub)(SF)) && void 0 !== hF ? hF : void 0, AF = (0, OF.q)(FF.lobbyName), uF = (0, OF.L)(FF.lobbyName)
        } catch (gW) {
          return void this.onError(gW)
        }
        const bW = {
          localPlayerId: String(FF)
        };
        let dF = {},
          PF = {};
        try {
          var RF, iW;
          dF = null !== (RF = null === (iW = this.options.gameFactory((0, mW.Yb)(SF))) || void 0 === iW ? void 0 : iW(uF, AF, CF, bW)) && void 0 !== RF ? RF : {}
        } catch (gW) {
          this.SC(gW)
        }
        try {
          var eF, EF;
          PF = {
            ...null === (eF = (EF = this.options).defaultPlugins) || void 0 === eF ? void 0 : eF.call(EF, uF, AF, CF, bW),
            ...dF.plugins
          }
        } catch (gW) {
          this.SC(gW)
        }
        const QF = [dF, ...Object.values(PF)];
        this.owners = QF, this.tickers = QF.filter((FF => void 0 !== FF.lF)), this.renderers = QF.filter((FF => void 0 !== FF.onAfterRender)), this.receivers = QF.filter((FF => void 0 !== FF.onReceivedMessageFromServer)), this.writeAltVeto(QF), this.writeHooks(QF), this.writePublicLobby(uF), this.boundId = FF, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.round(QF, (FF => {
          var WF;
          null === (WF = FF.onCreate) || void 0 === WF || WF.call(FF, this.clientApi)
        }));
        const rW = this.generation;
        setTimeout((() => {
          rW === this.generation && !0 === this.tables.getClientOption("creative") && RC(this.tables)
        }), 0)
      }
      chunkSlot(FF, WF, SF, CF, AF, uF) {
        this.chunks.apply(FF, WF, SF, CF, AF, uF)
      }
      entityAdded(FF) {
        var WF;
        this.entityInfo.stale(FF), null === (WF = this.options.replayEntities) || void 0 === WF || WF.entityAdded(FF)
      }
      entityInfoChanged(FF) {
        var WF;
        this.entityInfo.stale(FF), null === (WF = this.options.replayEntities) || void 0 === WF || WF.entityInfoChanged(FF)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const FF = performance.now();
          this.round(this.tickers, YC), (0, SC.d)(performance.now() - FF)
        }
      }
      afterWalk(FF) {
        this.ackEventOverflow(), this.clientApi.flushOwed();
        const WF = this.options.replayEntities;
        WF && this.guard((() => {
          this.entityInfoWatch.want(HS, WF.wantsWatch), WF.flush(this.entityInfoWatch.on)
        }));
        const SF = (0, SC.k)(FF, QF.m.frameMs(this.api.apiView, 0));
        if (null !== SF) {
          const FF = this.renderFrame;
          this.guard((() => {
            (0, jC.e)().turnDamageIndicators(FF.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(SF)
          })), this.round(this.renderers, (WF => {
            WF.onAfterRender(SF, FF)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== SF)
        } catch (AF) {
          this.SC(AF)
        }
        this.showZoom(), this.items.flush(this.SC), this.writePromptWatch(), this.writeCustomButtons();
        const CF = this.ticks;
        this.ticks = 0, (0, SC.i)(CF, FF, SF, this.SC)
      }
      entityRemoved(FF) {
        this.live.despawned(FF), this.entityInfo.removed(FF)
      }
      ackEventOverflow() {
        const FF = this.api.apiView,
          WF = QF.m.eventOverflowGen(FF, 0),
          SF = WF - this.overflowGen >>> 0;
        if (0 === SF && !this.resyncOwed) return;
        this.overflowGen = WF;
        const CF = QF.m.eventOverflowMask(FF, 0),
          AF = this.cmd;
        0 === CF || null === AF || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, QF._d)(AF, 0, CF);
        const uF = this.options.onEventOverflow;
        0 !== SF && uF && this.guard((() => {
          uF(CF, SF)
        }))
      }
      gameCall(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        if (FF === QF.Vb.Director) try {
          return this.scriptedCamera.call(WF, SF, CF, AF, uF, hF)
        } catch (PF) {
          return this.SC(PF), QF.db.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return FF === QF.Vb.AltVeto ? 1 : 0;
        try {
          return this.callGames(FF, WF, SF, CF, AF, uF, hF, bW)
        } catch (PF) {
          throw (0, EF.k)(PF) && (this.fault = PF), PF
        }
      }
      takeFault() {
        const FF = this.fault;
        return this.fault = void 0, FF
      }
      callGames(FF, WF, SF, CF, AF, uF, hF, bW) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: dF
        } = this.options, PF = String(this.boundId);
        switch (FF) {
          case QF.Vb.AltVeto:
          case QF.Vb.AltAction: {
            const bW = 0 !== hF,
              [RF, iW, eF] = bW ? [WF, SF, CF] : [void 0, void 0, void 0],
              EF = bW ? dF.nameOfId(AF) : "Air",
              rW = oC(uF);
            if (FF === QF.Vb.AltAction) return this.first((FF => {
              var WF;
              return null === (WF = FF.onPlayerAltAction) || void 0 === WF ? void 0 : WF.call(FF, PF, RF, iW, eF, EF, rW)
            })), 0;
            return "preventAction" === this.first((FF => {
              var WF;
              return null === (WF = FF.onPlayerAttemptAltAction) || void 0 === WF ? void 0 : WF.call(FF, PF, RF, iW, eF, EF, rW)
            })) ? 0 : 1
          }
          case QF.Vb.Click: {
            const FF = bW,
              RF = 0 !== (FF & QF.P.Alt),
              iW = 0 !== (FF & QF.P.HasPos),
              eF = iW ? dF.nameOfId(AF) : "Air",
              [EF, rW, gW] = iW ? [WF, SF, CF] : [null, null, null],
              tW = oC(uF),
              TF = 0 !== (FF & QF.P.Up),
              aW = oC(hF);
            if (0 === (FF & QF.P.AttackOnly) && this.first((FF => {
                var WF, SF;
                return TF ? null === (WF = FF.onPlayerClickUp) || void 0 === WF ? void 0 : WF.call(FF, PF, RF, EF, rW, gW, eF, tW) : null === (SF = FF.onPlayerClick) || void 0 === SF ? void 0 : SF.call(FF, PF, RF, EF, rW, gW, eF, tW)
              })), !TF && !RF && null !== aW) {
              const FF = this.clientApi.getPositionView(aW),
                WF = FF ? [FF[0], FF[1], FF[2]] : [0, 0, 0];
              this.first((FF => {
                var SF;
                return null === (SF = FF.onPlayerAttackEntity) || void 0 === SF ? void 0 : SF.call(FF, PF, aW, WF)
              }))
            }
            return 0
          }
          case QF.Vb.ChangeBlock: {
            const FF = dF.nameOfId(AF),
              hF = dF.nameOfId(uF);
            return this.first((AF => {
              var uF;
              return null === (uF = AF.onPlayerChangeBlock) || void 0 === uF ? void 0 : uF.call(AF, PF, WF, SF, CF, FF, hF)
            })), 0
          }
          case QF.Vb.DropItem: {
            const FF = dF.nameOfId(WF);
            return this.first((WF => {
              var AF;
              return null === (AF = WF.onPlayerDropItem) || void 0 === AF ? void 0 : AF.call(WF, PF, FF, SF, CF)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${FF}`)), 0
        }
      }
      changeBlockFail(FF, WF, SF, CF, AF, uF, hF) {
        const bW = AF === QF.Kc ? null : xA.decode(this.api.eventBytes(uF, Math.min(AF, hF)));
        this.failures.push({
          nB: [FF, WF, SF],
          XB: CF,
          JB: bW
        })
      }
      changeBlockFailEnd() {
        const FF = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (WF => {
          var SF;
          null === (SF = WF.onChangeBlockFail) || void 0 === SF || SF.call(WF, FF)
        })), this.Uu("EditBoard", {
          pos: null
        }), this.Uu("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(FF, WF, SF, CF, AF, uF) {
        FF === QF.ic.ChestOpened ? this.items.chestOpened(SF, CF, AF) : FF !== QF.ic.Synced && FF !== QF.ic.ChestClosed && FF !== QF.ic.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(FF, WF, SF, CF) {
            switch (FF) {
              case QF.ic.Synced:
                hF.j.Uu("syncedInvenFromServer");
                break;
              case QF.ic.ChestOpened:
              case QF.ic.ChestClosed:
                hF.j.Uu("chestToggleFromServer", FF === QF.ic.ChestOpened, !0);
                break;
              case QF.ic.ChestRefreshed:
                hF.j.Uu("chestRefreshedFromServer");
                break;
              case QF.ic.EnchantingTable:
                hF.j.Uu("enchantingTable", {
                  ah: CF,
                  position: SF
                });
                break;
              case QF.ic.HotbarRequest:
                hF.j.Uu("setSelectedInventorySlotI", WF, !0);
                break;
              case QF.ic.Scrolled:
                hF.j.Uu("ScrollInventorySlot", WF);
                break;
              case QF.ic.NumberKey:
                hF.j.Uu("numkeyPressed", WF + 1);
                break;
              case QF.ic.DropRequested:
                hF.j.Uu("DropInvenItem", 0 !== WF);
                break;
              default:
                throw new EF.c(`InventoryEvent of no kind: what ${FF}`)
            }
          }(FF, WF, [SF, CF, AF], uF)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(FF, WF, SF, CF) {
        this.Uu("shotPlayer", {
          playerId: String(FF),
          damage: WF,
          wasCrit: 0 !== CF,
          distance: SF
        })
      }
      localHurt(FF, WF) {
        this.Uu("closeShopOnDamaged", null), this.guard((() => {
          hF.j.Uu("damagedByOtherPlayer", {
            upF: null,
            direction: Number.isNaN(WF) ? null : WF,
            wFF: FF
          })
        }))
      }
      attackHit(FF, WF, SF, CF, AF) {
        this.guard((() => {
          hF.j.Uu("yourAttackHit", {
            MJ: CF,
            screenPos: this.renderFrame.projectDirectionToScreenPos([FF, WF, SF]),
            hitSelf: AF
          })
        }))
      }
      physicsType(FF) {
        this.Uu("PlayerPhysicsTypeUpdate", FF)
      }
      vehicleEffect(FF, WF, SF, CF, AF) {
        this.guard((() => {
          FF === eF.bd.UPDATE ? (0, oF.h)(WF, {
            icon: SF,
            level: CF,
            displayName: null,
            durationMs: AF
          }) : ZF.d.remove(WF)
        }))
      }
      zoomChanged(FF) {
        this.zoom = FF, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Uu("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const FF = this.scriptedCamera.holdsView();
        !this.zoomUnshown || FF && this.zoomHeld || (this.zoomUnshown = !1, this.Uu("cameraZoomSet", this.zoom)), this.zoomHeld = FF
      }
      gunHit(FF) {
        this.guard((() => {
          const {
            upF: WF,
            Qp: SF
          } = (0, gA.d)(tA.q, FF);
          hF.j.Uu("damagedByOtherPlayer", {
            upF: WF,
            direction: SF
          })
        }))
      }
      uiEvent(FF, WF, SF, CF, AF, uF, hF, bW) {
        this.guard((() => {
          vC(FF, WF, [SF, CF, AF], uF, this.items, this.options.tables, (() => xA.decode(this.api.eventBytes(hF, bW))))
        }))
      }
      writeAltVeto(FF) {
        const WF = this.cmd;
        if (!WF) return;
        let SF;
        try {
          SF = function(FF, WF) {
            const SF = new Set;
            let CF = !1;
            for (const AF of FF)
              if (AF.onPlayerAttemptAltAction) {
                if (CF = !0, !AF.altVetoBlocks) return {
                  mode: QF.Jd.All,
                  roots: []
                };
                for (const FF of AF.altVetoBlocks) SF.add(WF.getMetaInfo(FF).rootId)
              } return CF ? SF.size > QF.xc ? {
              mode: QF.Jd.All,
              roots: []
            } : {
              mode: QF.Jd.Filter,
              roots: [...SF]
            } : {
              mode: QF.Jd.Off,
              roots: []
            }
          }(FF, this.options.tables)
        } catch (AF) {
          this.onError(AF), SF = {
            mode: QF.Jd.All,
            roots: []
          }
        }
        if (SF.mode === QF.Jd.Off && !this.vetoSet) return;
        const CF = new Uint8Array(new Uint32Array(SF.roots).buffer);
        (0, QF.qf)(WF, 0, SF.mode, SF.roots.length, CF) ? this.vetoSet = SF.mode !== QF.Jd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(FF) {
        const WF = this.cmd;
        if (!WF) return;
        const SF = function(FF) {
          let WF = 0;
          for (const SF of FF) SF.onPlayerAltAction && (WF |= 1 << QF.Vb.AltAction), (SF.onPlayerClick || SF.onPlayerClickUp || SF.onPlayerAttackEntity) && (WF |= 1 << QF.Vb.Click), SF.onPlayerChangeBlock && (WF |= 1 << QF.Vb.ChangeBlock), SF.onPlayerDropItem && (WF |= 1 << QF.Vb.DropItem);
          return WF
        }(FF);
        (0 !== SF || this.hooksSet) && ((0, QF.Af)(WF, 0, SF) ? this.hooksSet = 0 !== SF : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const FF = this.cmd;
        FF && !this.stopped() && this.customButtons.write(FF)
      }
      writePromptWatch() {
        const FF = this.cmd,
          WF = this.promptWatch;
        WF !== this.promptWatchSent && FF && !this.stopped() && (0, QF.Tf)(FF, 0, WF ? 1 : 0) && (this.promptWatchSent = WF)
      }
      writePublicLobby(FF) {
        const WF = this.cmd;
        WF && FF !== this.writtenPublicLobby && ((0, QF.Ff)(WF, 0, FF ? 1 : 0) ? this.writtenPublicLobby = FF : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      first(FF) {
        const WF = this.generation;
        for (const CF of this.owners) {
          if (WF !== this.generation) break;
          try {
            const WF = FF(CF);
            if (void 0 !== WF) return WF
          } catch (SF) {
            this.SC(SF)
          }
        }
      }
      Uu(FF, WF) {
        this.guard((() => {
          hF.j.Uu(FF, WF)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (FF) {
          this.SC(FF)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (FF) {
          this.SC(FF)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const FF = this.owners;
        let WF;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1)
        } catch (CF) {
          WF = CF
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (CF) {
          WF ??= CF
        }
        this.round(FF, MC, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (CF) {
          WF ??= CF
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (CF) {
          WF ??= CF
        }
        const SF = this.options.onSessionEnd;
        if (SF) try {
          SF()
        } catch (CF) {
          this.onError(CF)
        }
        void 0 !== WF && this.SC(WF)
      }
      round(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = this.generation;
        for (const uF of FF) {
          if (CF !== this.generation) break;
          try {
            WF(uF)
          } catch (AF) {
            SF ? this.onError(AF) : this.SC(AF)
          }
        }
      }
      guard(FF) {
        try {
          FF()
        } catch (WF) {
          this.SC(WF)
        }
      }
    }

    function oC(FF) {
      return FF === QF.Nc ? null : String(FF)
    }

    function YC(FF) {
      FF.lF(eF.Vc)
    }

    function MC(FF) {
      var WF;
      null === (WF = FF.onClose) || void 0 === WF || WF.call(FF)
    }

    function cA(FF, WF) {
      FF.watch((() => {
        const SF = function(FF) {
          let WF = 0;
          const SF = Math.min(CC, FF.length);
          for (let AF = 0; AF < SF; AF++) {
            var CF;
            const SF = null === (CF = FF.slot(AF)) || void 0 === CF ? void 0 : CF.typeObj,
              uF = SF ? (0, WC.gunTypeOf)(SF.id) : void 0;
            void 0 !== uF && (WF |= 1 << qS[uF])
          }
          return WF
        }(FF);
        0 !== SF && (WF.preload(SF), WF.preload(1 << VW))
      }))
    }
    var GC = SF(3855),
      zA = SF(35247);

    function IC(FF) {
      const WF = new GC.Howl({
          ...(0, zA.f)(FF),
          pool: 15,
          preload: !1
        }),
        SF = WF.load.bind(WF);
      return WF.load = () => (WF._preload = !0, SF()), WF
    }

    function fC(FF, WF, SF) {
      const CF = FF.listener;
      if (CF.positionX) yA(CF.positionX, WF, SF, 0), yA(CF.positionY, WF, SF, 1), yA(CF.positionZ, WF, SF, 2), yA(CF.forwardX, WF, SF, 3), yA(CF.forwardY, WF, SF, 4), yA(CF.forwardZ, WF, SF, 5), yA(CF.upX, WF, SF, 6), yA(CF.upY, WF, SF, 7), yA(CF.upZ, WF, SF, 8);
      else {
        let FF = !1;
        for (let CF = 0; CF < 9; CF++) FF ||= WF[CF] !== SF[CF];
        FF && (CF.setPosition(WF[0], WF[1], WF[2]), CF.setOrientation(WF[3], WF[4], WF[5], WF[6], WF[7], WF[8]), SF.set(WF))
      }
    }

    function yA(FF, WF, SF, CF) {
      WF[CF] !== SF[CF] && (FF.value = WF[CF], SF[CF] = WF[CF])
    }
    class sC {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(FF) {
        this.pose.set(FF);
        const WF = GC.c.ctx;
        return !!WF && (WF !== this.watchedCtx && (this.watchedCtx = WF, this.written.fill(Number.NaN), WF.addEventListener("statechange", (() => {
          "running" === WF.state && fC(WF, this.pose, this.written)
        }))), "running" === WF.state && fC(WF, FF, this.written), !0)
      }
    }
    var nC = SF(35084),
      HC = SF(37543);
    let KC = null,
      wC = null;

    function XC() {
      return null === KC && (KC = document.createElement("div"), KC.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(KC)), KC
    }

    function UC() {
      return wC ??= new HC.d(new nC.b(XC)), wC
    }

    function BC() {
      var FF;
      null === (FF = wC) || void 0 === FF || FF.clear(), jA(null)
    }

    function jA(FF) {
      CF.b.get("scriptedCameraFacing") !== FF && CF.b.set({
        scriptedCameraFacing: FF
      })
    }
    var vA = SF(8331),
      JC = SF(8286),
      pC = SF(37558),
      lC = SF(38645),
      FA = SF(2477);
    const WA = Object.entries(QF.Tb).reduce(((FF, WF) => {
      let [SF, CF] = WF;
      return FF[CF] = SF, FF
    }), []);

    function SA(FF, WF) {
      var SF;
      return 0 !== ((null !== (SF = FF.itemFlags[WF]) && void 0 !== SF ? SF : 0) & QF.kc.Stackable)
    }
    const CA = /^(0|[1-9][0-9]*)$/,
      AA = {
        displayName: (FF, WF) => (0, WC.displayNameOf)(WF),
        description: (FF, WF) => (0, WC.descriptionOf)(WF),
        type: (FF, WF) => (0, WC.itemTypeOf)(WF),
        clipSize: (FF, WF) => (0, WC.clipSizeOf)(WF),
        armourReduction: (FF, WF) => (0, WC.armourReductionOf)(WF),
        scopeType: (FF, WF) => (0, WC.scopeTypeOf)(WF),
        stackable: SA,
        harvestType: (FF, WF) => WA[FF.blockHarvestTypes[WF]],
        harvestLevel: (FF, WF) => {
          const SF = FF.blockHarvestLevels[WF];
          return SF === QF.qc ? void 0 : SF
        },
        harvests: (FF, WF) => {
          var SF;
          const CF = null !== (SF = FF.itemHarvests[WF]) && void 0 !== SF ? SF : 0;
          return 0 !== CF ? WA[CF] : void 0 === (0, WC.harvestsNullLevelOf)(WF) ? void 0 : null
        },
        level: (FF, WF) => {
          var SF, CF;
          const AF = null !== (SF = FF.itemLevels[WF]) && void 0 !== SF ? SF : QF.qc;
          return AF !== QF.qc ? AF : null !== (CF = (0, WC.harvestsNullLevelOf)(WF)) && void 0 !== CF ? CF : void 0
        }
      };

    function uA(FF, WF, SF) {
      return bu(new Uint8Array(Math.floor(FF.length / WF)), FF, WF, SF)
    }

    function hA(FF, WF, SF) {
      return bu(new Uint16Array(Math.floor(FF.length / WF)), FF, WF, SF)
    }

    function bu(FF, WF, SF, CF) {
      const AF = new DataView(WF.buffer, WF.byteOffset, WF.byteLength);
      for (let uF = 0; uF < FF.length; uF++) FF[uF] = CF(AF, uF * SF);
      return FF
    }
    class dA {
      constructor(FF, WF) {
        this.options = WF, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = FF => {
          const WF = this.idOf(FF);
          if (void 0 === WF) throw new Error(`No item is named ${FF}, an item's root`);
          return WF
        };
        const SF = WF => {
            const SF = WF();
            return new Uint8Array(FF.memory().buffer, FF.scratch(), SF).slice()
          },
          CF = (new TextDecoder).decode(SF((() => FF.queries.itemNames()))).split("\n"),
          AF = SF((() => FF.queries.blockProps())),
          uF = SF((() => FF.queries.itemProps()));
        this.props = {
          blockFlags: uA(AF, QF.v.BYTES, QF.v.flags),
          blockHarvestTypes: uA(AF, QF.v.BYTES, QF.v.harvestType),
          blockHarvestLevels: uA(AF, QF.v.BYTES, QF.v.harvestLevel),
          blockAttachedTops: hA(AF, QF.v.BYTES, QF.v.attachedTop),
          itemFlags: uA(uF, QF.nc.BYTES, QF.nc.flags),
          itemHarvests: uA(uF, QF.nc.BYTES, QF.nc.harvests),
          itemLevels: uA(uF, QF.nc.BYTES, QF.nc.level)
        }, (0, FA.k)(Object.freeze(CF)), (0, lC.d)()
      }
      idOf(FF) {
        if ("number" === typeof FF) return void 0 === (0, FA.f)(FF) ? void 0 : FF;
        const WF = (0, FA.b)(FF);
        return void 0 === WF && CA.test(FF) ? void 0 === (0, FA.f)(+FF) ? void 0 : +FF : WF
      }
      getMetaInfo(FF) {
        if (!FF || FF === vA.e) return vA.i;
        const WF = this.idOf(FF);
        if (void 0 === WF) throw new Error(`Item ${FF} not found in registry`);
        return this.metaOf(WF)
      }
      blockRootId(FF) {
        return 0 !== FF && void 0 !== (0, FA.f)(FF) ? this.metaOf(FF).rootId : FF
      }
      metaOf(FF) {
        return this.metas[FF] ??= (0, JC.h)((0, FA.f)(FF), FF, this.rootIdOf, (0, WC.rootMetaDescOf)(FF))
      }
      getItemId(FF) {
        if (!FF || FF === vA.e) return 0;
        const WF = this.idOf(FF);
        if (void 0 === WF) throw new Error(`Invalid block name. You sent ${FF}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return WF
      }
      getItemName(FF) {
        if (!FF || FF === vA.e) return vA.e;
        const WF = this.idOf(FF);
        if (void 0 === WF) throw new Error(`Item ${FF} not found in registry`);
        return (0, FA.f)(WF)
      }
      blockNameToBlockId(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (FF === vA.e) return 0;
        let SF = this.idOf(FF);
        if (void 0 === SF || !this.isBlockId(SF)) {
          const WF = FF.indexOf("|"),
            CF = WF > 0 ? (0, FA.b)(FF.slice(0, WF)) : void 0;
          SF = void 0 !== CF && this.isBlockId(CF) && (0, WC.rootMetaDescOf)(CF) === FF ? CF : void 0
        }
        if (void 0 !== SF) return SF;
        if (!WF) throw new Error(`Invalid block name. You sent ${FF}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(FF) {
        return FF > 0 && FF < this.props.blockFlags.length
      }
      nameOfId(FF) {
        return 0 !== FF && (0, FA.f)(FF) || vA.e
      }
      itemType(FF) {
        const WF = FF ? this.idOf(FF) : void 0;
        if (!WF) return null;
        let SF = this.types.get(WF);
        return void 0 === SF && (SF = Object.freeze({
          id: WF,
          name: (0, FA.f)(WF),
          meta: this.getMetaInfo(WF),
          stackable: SA(this.props, WF),
          type: (0, WC.itemTypeNameOf)(WF),
          clipSize: (0, WC.clipSizeOf)(WF),
          scopeType: (0, WC.scopeTypeOf)(WF),
          showsAimingUi: (0, WC.showsAimingUi)(WF)
        }), this.types.set(WF, SF)), SF
      }
      getItemStat(FF, WF) {
        if (pC.c.has(WF)) {
          const SF = "minChargeStateToUse" === WF ? this.getMetaInfo(FF).rootName : this.getItemName(FF),
            CF = this.options.get((0, pC.f)(SF, WF));
          if (null !== CF && void 0 !== CF) return CF
        }
        return this.defaultStat(FF, WF, this.statOf(WF))
      }
      getDisplayName(FF) {
        return this.getItemStat(FF, "displayName")
      }
      getDefaultItemStat(FF, WF) {
        return this.defaultStat(FF, WF, this.statOf(WF))
      }
      statOf(FF) {
        const WF = AA[FF];
        return void 0 === WF && function(FF, WF) {
          throw new Error(`ClientApi.${FF} is not available yet in the wasm client (${WF})`)
        }(`getItemStat("${FF}")`, `a table of the stat: the wasm client answers ${Object.keys(AA).join(", ")}`), WF
      }
      defaultStat(FF, WF, SF) {
        const CF = this.idOf(FF),
          AF = void 0 === CF ? void 0 : SF(this.props, CF);
        return null !== AF && void 0 !== AF || "displayName" !== WF ? AF : this.getItemName(FF)
      }
      getClientOption(FF) {
        return this.options.get(FF)
      }
      getGunStats(FF) {
        return this.getClientOption(`${FF}GunStats`)
      }
      watchClientOption(FF, WF) {
        return this.options.subscribe(FF, WF)
      }
      isSolidBlockId(FF) {
        var WF;
        return 0 !== ((null !== (WF = this.props.blockFlags[FF]) && void 0 !== WF ? WF : 0) & QF.r.Solid)
      }
      isStackableId(FF) {
        return SA(this.props, FF)
      }
      isFluidBlockId(FF) {
        var WF;
        return 0 !== ((null !== (WF = this.props.blockFlags[FF]) && void 0 !== WF ? WF : 0) & QF.r.Fluid)
      }
      canPlaceOverBlockId(FF) {
        var WF;
        return 0 !== ((null !== (WF = this.props.blockFlags[FF]) && void 0 !== WF ? WF : 0) & QF.r.PlaceOver)
      }
      attachedTopOf(FF) {
        var WF;
        return null !== (WF = this.props.blockAttachedTops[FF]) && void 0 !== WF ? WF : 0
      }
      isDroplessBlockId(FF) {
        return (0, WC.dropsNothing)(FF)
      }
    }

    function PA(FF, WF) {
      const SF = new Map;
      return (CF, AF) => {
        const uF = WF.idOf(CF),
          hF = void 0 === uF ? null : (CF => {
            let AF = SF.get(CF);
            if (void 0 === AF) {
              const uF = FF.queries.salvageRecipe(CF),
                hF = new DataView(FF.memory().buffer, FF.scratch(), uF),
                bW = [];
              for (let FF = 0; FF + QF.Ad.BYTES <= uF; FF += QF.Ad.BYTES) bW.push(Object.freeze({
                item: WF.nameOfId(QF.Ad.item(hF, FF)),
                amt: QF.Ad.amount(hF, FF)
              }));
              AF = 0 === bW.length ? null : Object.freeze(bW), SF.set(CF, AF)
            }
            return AF
          })(uF);
        if (null === hF || void 0 === AF) return hF;
        const bW = AF <= 0 ? 1 : AF;
        return hF.map((FF => {
          let {
            item: WF,
            amt: SF
          } = FF;
          return {
            item: WF,
            amt: SF * bW
          }
        }))
      }
    }
    var RA = SF(38792),
      iu = SF(35429),
      eA = SF(35421),
      EA = SF(35461),
      QA = SF(35009),
      ru = SF(38520),
      gu = SF(40438);
    const tu = -1,
      TA = new Uint8Array(0),
      au = new TextEncoder;

    function ku(FF) {
      if (null === FF) return null;
      const WF = au.encode(FF);
      return WF.byteLength < eF.fc ? WF : WF.subarray(0, eF.fc - 1)
    }
    class qu {
      constructor(FF) {
        this.deps = FF, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = tu, this.keyframesSettled = !1, this.reloadFrom = tu
      }
      reloadKeyframes() {
        var FF, WF;
        this.keyframesVersion = tu, this.reloadFrom = null !== (FF = null === (WF = this.view()) || void 0 === WF ? void 0 : WF.version) && void 0 !== FF ? FF : tu
      }
      setPlayback(FF) {
        const WF = 1 === this.deps.core.IRF(FF);
        return WF && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = tu, this.reloadFrom = tu), WF
      }
      async open(FF) {
        const WF = await this.deps.replay.open(FF);
        return "opening" === WF && (this.reloadKeyframes(), this.deps.recorder.prefetch()), WF
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(FF)), WF)
      }
      setSpeed(FF) {
        this.deps.replay.setSpeed(FF)
      }
      setCameraMode(FF) {
        this.deps.replay.setCameraMode(gu.c.indexOf(FF))
      }
      view() {
        var FF;
        const WF = QF.m.replayViewPtr(this.deps.apiView(), 0);
        if (0 === WF) return this.lastView = null, null;
        const SF = new DataView(this.deps.buffer(), WF, QF.td.BYTES),
          CF = QF.td.version(SF, 0),
          AF = this.lastView;
        if (null !== AF && AF.version === CF) return AF;
        const uF = QF.td.markIn(SF, 0),
          hF = {
            version: CF,
            state: QF.td.state(SF, 0),
            cameraMode: null !== (FF = gu.c[QF.td.cameraMode(SF, 0)]) && void 0 !== FF ? FF : "recording",
            lF: QF.td.lF(SF, 0),
            totalTicks: QF.td.totalTicks(SF, 0),
            speed: QF.td.speed(SF, 0),
            mark: uF === QF.pd ? null : {
              inTick: uF,
              outTick: QF.td.markOut(SF, 0)
            },
            editVersion: QF.td.editVersion(SF, 0)
          };
        return this.lastView = hF, hF
      }
      keyframes() {
        const FF = this.view();
        if (null === FF) return [];
        FF.version !== this.reloadFrom && (this.reloadFrom = tu);
        const WF = this.reloadFrom === tu && FF.state !== eF.Lc.Cropping && FF.state !== eF.Lc.None,
          SF = WF ? FF.editVersion : FF.version;
        if (SF === this.keyframesVersion && WF === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: CF
        } = this.deps, AF = CF.fRF(), uF = CF.Hh(), hF = [];
        if (0 !== uF && AF > 0) {
          const FF = new DataView(this.deps.buffer(), uF, AF * eF.Ub);
          for (let WF = 0; WF < AF; WF++) {
            const SF = WF * eF.Ub,
              CF = WF => FF.getFloat64(SF + WF, !0);
            hF.push({
              lF: FF.getUint32(SF + eF.ec, !0),
              position: [CF(eF.bc), CF(eF.bc + 8), CF(eF.bc + 16)],
              direction: [CF(eF.Wb), CF(eF.Wb + 8), CF(eF.Wb + 16)],
              easing: [CF(eF.Zb), CF(eF.Zb + 8), CF(eF.Zb + 16), CF(eF.Zb + 24)]
            })
          }
        }
        return this.keyframesVersion = SF, this.keyframesSettled = WF, this.lastKeyframes = hF, hF
      }
      addKeyframe() {
        const FF = this.deps.apiView(),
          WF = [QF.m.eye(FF, 0, 0), QF.m.eye(FF, 0, 1), QF.m.eye(FF, 0, 2)];
        return this.deps.replay.addKeyframe(WF, function(FF, WF) {
          const SF = Math.cos(WF);
          return [SF * Math.sin(FF), -Math.sin(WF), SF * Math.cos(FF)]
        }(QF.m.heading(FF, 0), QF.m.pitch(FF, 0)))
      }
      setKeyframe(FF) {
        return this.deps.replay.setKeyframe(FF.lF, Float64Array.from([...FF.position, ...FF.direction, ...FF.easing]))
      }
      moveKeyframe(FF, WF) {
        return this.deps.replay.moveKeyframe(FF, WF)
      }
      deleteKeyframes(FF, WF) {
        return this.deps.replay.deleteKeyframes(FF, WF)
      }
      setMark(FF) {
        var WF, SF;
        return this.deps.replay.setMark(null !== (WF = null === FF || void 0 === FF ? void 0 : FF.inTick) && void 0 !== WF ? WF : -1, null !== (SF = null === FF || void 0 === FF ? void 0 : FF.outTick) && void 0 !== SF ? SF : -1)
      }
      crop(FF, WF) {
        const SF = this.deps.replay.crop(FF, WF);
        return SF && this.reloadKeyframes(), SF
      }
      save(FF) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(FF)
      }
      recorderControl(FF) {
        this.deps.recorder.control(FF)
      }
      recorderPrefs(FF, WF) {
        this.deps.recorder.prefs(FF, WF)
      }
      recorderOption(FF, WF) {
        const SF = this.deps.cmd();
        return null !== SF && (0, QF.bf)(SF, 0, FF, null === WF ? TA : au.encode(WF))
      }
      recordFlyingText(FF, WF, SF, CF) {
        const AF = this.deps.cmd(),
          uF = Math.max(0, Math.min(4294967295, Math.round(CF)));
        return null !== AF && (0, QF.Ye)(AF, 0, WF, SF, uF, au.encode(FF))
      }
      recordPlayerKilled(FF, WF, SF, CF) {
        const AF = this.deps.cmd();
        return null !== AF && (0, QF.df)(AF, 0, FF, WF, Math.max(0, SF), au.encode(CF))
      }
      recordKillfeed(FF, WF, SF) {
        var CF, AF;
        const uF = this.deps.cmd(),
          hF = function(FF) {
            const WF = FF.reduce(((FF, WF) => {
                var SF;
                return FF + XS.Z + (null !== (SF = null === WF || void 0 === WF ? void 0 : WF.byteLength) && void 0 !== SF ? SF : 0)
              }), 0),
              SF = new Uint8Array(WF),
              CF = new DataView(SF.buffer);
            let AF = 0;
            for (const hF of FF) {
              var uF;
              CF.setUint16(AF, null !== (uF = null === hF || void 0 === hF ? void 0 : hF.byteLength) && void 0 !== uF ? uF : eF.fc, !0), AF += XS.Z, null !== hF && (SF.set(hF, AF), AF += hF.byteLength)
            }
            return SF
          }([ku(FF.name), ku(FF.colour), ku(WF.name), ku(WF.colour), ku(SF)]);
        return null !== uF && (0, QF._e)(uF, 0, null !== (CF = FF.id) && void 0 !== CF ? CF : QF.Oc, null !== (AF = WF.id) && void 0 !== AF ? AF : QF.Oc, hF)
      }
      recorderSession(FF, WF) {
        this.deps.recorder.session({
          session: WF,
          lobbyType: FF.lobbyType,
          game: FF.gameNameWithVariation,
          lobby: FF.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.yiF()
      }
      filePartDone(FF, WF) {
        this.deps.recorder.filePartDone(FF, WF)
      }
      fileDone(FF) {
        this.deps.recorder.fileDone(FF)
      }
    }
    const VA = -2147483648;
    class NA {
      constructor(FF) {
        var WF;
        this.deps = FF, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (WF = FF.now) && void 0 !== WF ? WF : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var FF, WF, SF;
        return null === (FF = null === (WF = (SF = this.deps).live) || void 0 === WF ? void 0 : WF.call(SF)) || void 0 === FF || FF
      }
      activated(FF) {
        var WF, SF;
        this.live && (this.viewerShown(!0 === (null === (WF = (SF = this.deps).viewerOpen) || void 0 === WF ? void 0 : WF.call(SF))), this.deps.client.recorderSession(FF, (0, gu.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var FF, WF;
        this.live && (this.state.recording || !0 !== (null === (FF = (WF = this.deps).viewerOpen) || void 0 === FF ? void 0 : FF.call(WF))) ? this.deps.client.recorderControl(eF.sc.ToggleRecording) : this.deps.notify(EA.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(eF.sc.SaveClip) : this.deps.notify(EA.d.clippingNotOn)
      }
      viewerShown(FF) {
        this.live && this.deps.client.recorderControl(FF ? eF.sc.ViewerOpened : eF.sc.ViewerClosed)
      }
      setPrefs(FF, WF) {
        this.live && this.deps.client.recorderPrefs(FF, WF)
      }
      setOption(FF, WF) {
        this.live && this.deps.client.recorderOption(FF, WF)
      }
      recordFlyingText(FF, WF, SF, CF) {
        this.live && this.deps.client.recordFlyingText(FF, WF, SF, CF)
      }
      recordPlayerKilled(FF, WF, SF, CF) {
        this.live && this.deps.client.recordPlayerKilled(FF, WF, SF, CF)
      }
      recordKillfeed(FF, WF, SF) {
        this.live && this.deps.client.recordKillfeed(FF, WF, SF)
      }
      lF() {
        let FF = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, FF = {
            ...FF,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const WF = Math.floor((this.now() - this.recordingSince) / 1e3);
          WF !== FF.seconds && (FF = {
            ...FF,
            seconds: WF
          })
        }
        this.set(FF)
      }
      onEvent(FF) {
        var WF, SF;
        const {
          notify: CF
        } = this.deps, AF = EA.d;
        switch (FF.what) {
          case eF.rc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), CF(AF.recordingStarted);
            break;
          case eF.rc.RecordingStopped:
            this.stopRecording(), CF(AF.recordingStopped), this.saveState(eF.Dc.Recording, "saving");
            break;
          case eF.rc.RecordingDiscarded:
            this.stopRecording(), CF(AF.recordingDiscarded);
            break;
          case eF.rc.RecordingTurnedOff:
            this.stopRecording(), CF(AF.recordingTurnedOff);
            break;
          case eF.rc.LimitReached:
            CF(AF.limitReached);
            break;
          case eF.rc.ClipSaved:
            this.saveState(eF.Dc.Clip, "saving");
            break;
          case eF.rc.ClipEmpty:
            CF(AF.clipEmpty);
            break;
          case eF.rc.ClippingNotOn:
            CF(AF.clippingNotOn);
            break;
          case eF.rc.Disallowed:
            CF(AF.disallowed);
            break;
          case eF.rc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case eF.rc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case eF.rc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case eF.rc.SaveBusy:
            null === (WF = (SF = this.deps).onSaveState) || void 0 === WF || WF.call(SF, FF.kind, "busy"), CF(AF.saveBusy);
            break;
          case eF.rc.CloseViewerFirst:
            CF(AF.closeViewerFirst)
        }
      }
      fileReady(FF, WF) {
        this.deps.download(WF), this.saveState(FF, "done"), this.deps.notify(FF === eF.Dc.Clip ? EA.d.clipSaved : EA.d.recordingSaved)
      }
      failed(FF) {
        this.saveState(FF, "failed"), this.deps.notify(FF === eF.Dc.Clip ? EA.d.clipFailed : EA.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(FF, WF) {
        var SF, CF;
        null === (SF = (CF = this.deps).onSaveState) || void 0 === SF || SF.call(CF, FF, WF)
      }
      set(FF) {
        FF !== this.state && (this.state = FF, this.deps.onState(FF))
      }
    }
    const DA = new TextDecoder;

    function LA(FF, WF, SF, CF) {
      const AF = [];
      for (let uF = 0; uF < CF; uF++) {
        if (WF + XS.Z > SF) return null;
        const CF = FF.getUint16(WF, !0);
        if (WF += XS.Z, CF !== eF.fc) {
          if (WF + CF > SF) return null;
          AF.push(DA.decode(new Uint8Array(FF.buffer, FF.byteOffset + WF, CF))), WF += CF
        } else AF.push(null)
      }
      return WF === SF ? AF : null
    }

    function mu(FF, WF) {
      let SF = new DataView(new ArrayBuffer(0)),
        CF = !0;
      const AF = {
        replayFailed: (WF, SF) => {
          FF.replayFailed({
            reason: WF,
            code: SF
          })
        },
        replayOption: (WF, AF, uF, hF) => {
          const bW = function(FF, WF, SF, CF) {
            switch (WF) {
              case eF.Gc.Cleared:
                return 0 === CF ? null : void 0;
              case eF.Gc.Text:
                return DA.decode(new Uint8Array(FF.buffer, FF.byteOffset + SF, CF));
              case eF.Gc.Int:
                return CF === Int32Array.BYTES_PER_ELEMENT ? FF.getInt32(SF, !0) : void 0;
              case eF.Gc.Double:
                return CF === Float64Array.BYTES_PER_ELEMENT ? FF.getFloat64(SF, !0) : void 0;
              default:
                return
            }
          }(SF, AF, uF, hF);
          void 0 !== bW ? FF.replayOption({
            key: WF,
            value: bW
          }) : CF = !1
        },
        replayUiEvent: (WF, AF, uF, hF, bW, dF) => {
          const PF = function(FF, WF, SF, CF, AF, uF, hF) {
            const bW = uF + hF;
            switch (WF) {
              case eF.Kc.FlyingText: {
                const hF = LA(FF, uF, bW, 1);
                return null !== hF && null !== hF[0] ? {
                  what: WF,
                  HJ: SF,
                  zp: CF,
                  angle: AF,
                  contentJson: hF[0]
                } : null
              }
              case eF.Kc.PlayerKilled: {
                const CF = LA(FF, uF, bW, 3);
                return CF ? {
                  what: WF,
                  killstreak: SF,
                  dead: CF[0],
                  killer: CF[1],
                  withItem: CF[2]
                } : null
              }
              case eF.Kc.Killfeed: {
                const SF = LA(FF, uF, bW, 7);
                return SF ? {
                  what: WF,
                  killerId: SF[0],
                  killerName: SF[1],
                  killerColour: SF[2],
                  victimId: SF[3],
                  victimName: SF[4],
                  victimColour: SF[5],
                  withItem: SF[6]
                } : null
              }
              default:
                return null
            }
          }(SF, WF, AF, uF, hF, bW, dF);
          null !== PF ? FF.replayUiEvent(PF) : CF = !1
        },
        replayFilePart: (SF, AF, uF, hF) => {
          const bW = WF();
          uF + hF > bW.byteLength ? CF = !1 : FF.filePart(SF, AF, new Uint8Array(bW, uF, hF).slice())
        },
        replayFileReady: (WF, SF, CF, AF) => {
          FF.fileReady({
            save: WF,
            kind: SF,
            parts: CF,
            bytes: AF
          })
        },
        recorderEvent: (WF, SF, CF) => {
          FF.recorderEvent({
            what: WF,
            kind: SF,
            save: CF
          })
        },
        replayOpened: (WF, CF, AF) => {
          FF.replayOpened(DA.decode(new Uint8Array(SF.buffer, SF.byteOffset + CF, AF)))
        }
      };
      return (FF, WF, uF, hF) => !(FF < eF.R.ReplayFailed || FF > eF.R.RecorderEvent) && (SF = WF, CF = !0, (0, QF.Od)(FF, WF, uF, hF, AF) && CF)
    }

    function OA(FF) {
      let WF = null;
      const SF = mu(FF, (() => {
        if (null === WF) throw new Error("a recorder event read outside recorderEventReader's call");
        return WF.buffer
      }));
      return (FF, CF) => {
        WF = CF;
        try {
          ! function(FF, WF) {
            const SF = FF.slice(),
              CF = new DataView(SF.buffer);
            for (let AF = 0; AF < SF.byteLength;) {
              if (AF + eF.Q > SF.byteLength) throw new Error(`the recorder module's events end mid-head at ${AF}`);
              const FF = CF.getUint32(AF, !0),
                uF = 65535 & FF,
                hF = FF >>> 16,
                bW = AF + eF.Q;
              if (bW + hF > SF.byteLength || !WF(uF, CF, bW, hF)) throw new Error(`the recorder module wrote a malformed event ${uF} (${hF} bytes) at ${AF}`);
              AF = bW + (0, eF.$d)(hF)
            }
          }(FF, SF)
        } finally {
          WF = null
        }
      }
    }
    class xu {
      constructor(FF, WF) {
        this.acks = FF, this.handlers = WF, this.parts = new Map
      }
      onPart(FF, WF, SF) {
        let CF = this.parts.get(FF);
        CF || (CF = [], this.parts.set(FF, CF)), CF[WF] = SF, this.acks.filePartDone(FF, WF)
      }
      onReady(FF) {
        var WF;
        const SF = null !== (WF = this.parts.get(FF.save)) && void 0 !== WF ? WF : [];
        this.parts.delete(FF.save);
        const CF = function(FF, WF, SF) {
          if (FF.length !== WF) return null;
          let CF = 0;
          for (let hF = 0; hF < WF; hF++) {
            if (void 0 === FF[hF]) return null;
            CF += FF[hF].byteLength
          }
          if (CF !== SF) return null;
          if (1 === WF) return FF[0];
          const AF = new Uint8Array(SF);
          let uF = 0;
          for (const hF of FF) AF.set(hF, uF), uF += hF.byteLength;
          return AF
        }(SF, FF.parts, FF.bytes);
        this.acks.fileDone(FF.save), null === CF ? this.handlers.fileIncomplete(FF.save, FF.kind) : this.handlers.fileReady(FF.save, FF.kind, CF)
      }
      onDiscarded(FF) {
        this.parts.delete(FF)
      }
    }

    function ZA() {
      return SF.e(49).then((() => SF(40473)))
    }
    class oA {
      constructor(FF) {
        this.deps = FF, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: WF
        } = FF;
        this.recorder = new NA({
          client: WF,
          live: () => {
            var FF;
            return !0 !== (null === (FF = this.viewer) || void 0 === FF ? void 0 : FF.inPlayback)
          },
          viewerOpen: FF.viewerOpen,
          notify: FF.notify,
          download: WF => {
            var SF;
            null === (SF = FF.download) || void 0 === SF || SF.call(FF, WF)
          },
          onState: FF.onRecorderState,
          onSaveState: FF.onSaveState
        }), this.parts = new xu(WF, {
          fileReady: (FF, WF, SF) => {
            var CF;
            WF === eF.Dc.Edited ? null === (CF = this.viewer) || void 0 === CF || CF.saveDone(SF) : this.recorder.fileReady(WF, SF)
          },
          fileIncomplete: (FF, WF) => {
            this.saveFailed(WF)
          }
        });
        const SF = {
          replayFailed: FF => {
            var WF;
            null === (WF = this.viewer) || void 0 === WF || WF.onFailed(FF)
          },
          replayOption: WF => {
            var SF;
            null === (SF = FF.onReplayOption) || void 0 === SF || SF.call(FF, WF)
          },
          replayUiEvent: WF => {
            var SF;
            null === (SF = FF.onReplayUiEvent) || void 0 === SF || SF.call(FF, WF)
          },
          filePart: (FF, WF, SF) => {
            this.parts.onPart(FF, WF, SF)
          },
          fileReady: FF => {
            this.parts.onReady(FF)
          },
          replayOpened: WF => {
            var SF;
            null === (SF = FF.onReplayOpened) || void 0 === SF || SF.call(FF, WF)
          },
          recorderEvent: FF => {
            var WF;
            switch (FF.what) {
              case eF.rc.FileDiscarded:
                this.parts.onDiscarded(FF.save);
                break;
              case eF.rc.SaveFailed:
                this.saveFailed(FF.kind);
                break;
              case eF.rc.SaveBusy:
                if (null !== (WF = this.viewer) && void 0 !== WF && WF.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(FF);
                break;
              default:
                this.recorder.onEvent(FF)
            }
          }
        };
        this.sink = function(FF, WF) {
          return {
            onReplayEvent: mu(FF, WF)
          }
        }(SF, FF.buffer), this.recorderEvents = OA(SF)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var FF;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (FF = this.deps.loadViewer) && void 0 !== FF ? FF : ZA)().catch((FF => {
          throw this.viewerChunk = null, FF
        })), this.viewerChunk.then((FF => (this.viewer ??= new FF.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var FF, WF;
            null === (FF = (WF = this.deps).onViewerChange) || void 0 === FF || FF.call(WF)
          }
        }), this.viewer))))
      }
      activated(FF) {
        this.recorder.activated(FF)
      }
      afterFrame(FF) {
        try {
          FF > 0 && this.recorder.lF()
        } finally {
          var WF;
          null === (WF = this.viewer) || void 0 === WF || WF.afterFrame()
        }
      }
      end() {
        var FF;
        null === (FF = this.viewer) || void 0 === FF || FF.end()
      }
      saveFailed(FF) {
        var WF;
        FF === eF.Dc.Edited ? null === (WF = this.viewer) || void 0 === WF || WF.saveFailed(!1) : this.recorder.failed(FF)
      }
    }
    var YA = SF(38563),
      MA = SF(38577),
      cu = SF(3802),
      GA = SF(38860);
    class zu {
      constructor(FF) {
        this.deps = FF, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(FF, WF) {
        if (!this.deps.live() || 0 === FF && 0 === WF) return;
        const SF = (0, IF.r)(0, performance.now()),
          CF = this.deps.dragScale();
        (0, GA.f)((() => {
          (0, IF.t)(eF.hb.MouseDown, 0, 0, 0, SF), (0, IF.t)(eF.hb.MouseMove, 0, FF * CF, WF * CF, 0), (0, IF.t)(eF.hb.MouseUp, 0, 0, 0, SF)
        }))
      }
      move(FF) {
        var WF, SF;
        this.analogue[0] = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.x) && void 0 !== WF ? WF : 0, this.analogue[1] = null !== (SF = null === FF || void 0 === FF ? void 0 : FF.y) && void 0 !== SF ? SF : 0, this.send()
      }
      holdVertical(FF, WF) {
        const SF = "freeCamUp" === FF ? QF.Mb.Up : QF.Mb.Down;
        this.keys = WF ? this.keys | SF : this.keys & ~SF, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const FF = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== FF && !(0, QF.fe)(FF, 0, this.analogue, this.keys)
      }
    }
    var IA = SF(35110),
      fA = SF(231),
      yu = SF(89),
      sA = SF(8176);

    function nA() {
      const {
        mouseSensitivity: FF,
        touchscreenSensitivity: WF,
        cameraFOV: SF
      } = CF.b.get("clientEscMenuOptions");
      return {
        mouse: (0, yu.isMobile)() ? WF : FF,
        touch: WF,
        fovPercent: SF
      }
    }

    function HA() {
      const {
        mouseSensitivity: FF,
        touchscreenSensitivity: WF
      } = CF.b.get("clientEscMenuOptions"), SF = CF.b.get("isTouchScreen") ? WF : FF, AF = nA().mouse;
      return AF > 0 ? SF / AF : 1
    }

    function KA(FF) {
      const WF = () => {
        FF.setSoundPrefs(CF.b.get("soundVolume"), CF.b.get("soundOnFromAd"))
      };
      let SF = null;
      const AF = () => {
        const {
          showFog: WF,
          enableLighting: AF,
          fogChunkDistance: uF,
          chunkFadeIn: hF
        } = CF.b.get("clientEscMenuOptions"), bW = {
          showFog: WF,
          lighting: AF,
          fogChunks: uF,
          chunkFade: hF
        };
        SF && (0, eF.Ld)(SF) === (0, eF.Ld)(bW) && SF.fogChunks === uF || (SF = bW, FF.setEnvPrefs(SF))
      };
      let uF = null;
      const bW = () => {
        const WF = function() {
          const FF = CF.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: CF.b.get("areNametagsHidden"),
            crouchToggle: FF.crouchIsToggle,
            bhopDisabled: FF.disableBunnyHopping,
            disableBobbing: FF.disableBobbing,
            ezTowering: FF.ezTowering && (0, fA.e)(),
            ezBridging: FF.ezBridging,
            showChunkBorders: FF.showChunkBorders,
            edgeGuard: (0, IA.g)(FF),
            nametagCutDistance: (0, sA.d)()
          }
        }();
        (0, mW.be)(uF, WF) || (uF = WF, FF.setUiPrefs(WF))
      };
      let dF = null;
      const PF = () => {
        const WF = nA();
        (0, mW.be)(dF, WF) || (dF = WF, FF.setLookPrefs(WF))
      };
      WF(), AF(), bW(), PF();
      const RF = [(0, hF.l)("appManagerUpdated|soundVolume", WF), (0, hF.l)("appManagerUpdated|soundOnFromAd", WF), (0, hF.l)("appManagerUpdated|clientEscMenuOptions", (() => {
        AF(), bW(), PF()
      })), (0, hF.l)("appManagerUpdated|areNametagsHidden", bW), (0, hF.l)("appManagerUpdated|showDistantNametags", bW)];
      return () => {
        for (const FF of RF) FF()
      }
    }

    function wA(FF, WF) {
      if (!Object.prototype.hasOwnProperty.call(FF, WF)) throw new TypeError("attempted to use private field on non-instance");
      return FF
    }
    var XA = 0;

    function UA(FF) {
      return "__private_" + XA++ + "_" + FF
    }
    var BA = UA("lend"),
      ju = UA("starting"),
      vu = UA("generation"),
      JA = UA("end");
    class pA {
      constructor(FF) {
        this.deps = FF, Object.defineProperty(this, JA, {
          value: lA
        }), Object.defineProperty(this, BA, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ju, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, vu, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== wA(this, BA)[BA] || wA(this, ju)[ju]
      }
      async start(FF) {
        if (this.active) return "busy";
        const WF = wA(this, vu)[vu];
        wA(this, ju)[ju] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          wA(this, ju)[ju] = !1
        }
        if (WF !== wA(this, vu)[vu]) return "refused";
        const SF = this.deps.beginSave();
        if (!SF) return "refused";
        const CF = Number(BigInt.asUintN(32, FF)),
          AF = Number(BigInt.asUintN(32, FF >> 32n));
        let uF = "refused";
        return this.deps.recorderCall(((FF, WF) => {
          const hF = SF.editState,
            bW = FF.stage(hF.length);
          0 !== bW ? (new Uint8Array(WF.buffer, bW, hF.length).set(hF), FF.sRF(SF.headLen, CF, AF) && (uF = "sealing")) : uF = "tooLarge"
        }), !0), "sealing" !== uF ? (SF.end(), uF) : (wA(this, BA)[BA] = SF, "sealing")
      }
      beforeRecorderStep() {
        const FF = wA(this, BA)[BA];
        if (!FF) return null;
        let WF = -1,
          SF = 0;
        if (!this.deps.recorderCall((FF => {
            WF = FF.nRF(), WF > 0 && (SF = FF.HRF())
          }))) return wA(this, JA)[JA](FF, "stopped");
        if (WF < 0) return wA(this, JA)[JA](FF, "read");
        if (0 === WF) return null;
        const CF = FF.head(SF, WF);
        let AF = !1;
        if (CF && this.deps.recorderCall(((FF, SF) => {
            const uF = FF.stage(WF);
            0 !== uF && (new Uint8Array(SF.buffer, uF, WF).set(CF), AF = !0)
          }), !0), AF) return null;
        const uF = FF.givenUp();
        this.deps.recorderCall((FF => {
          FF.KRF()
        }));
        const hF = wA(this, JA)[JA](FF, uF ? "givenUp" : "stopped");
        return uF && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), hF
      }
      stop() {
        wA(this, vu)[vu]++;
        const FF = wA(this, BA)[BA];
        FF && (this.deps.recorderCall((FF => {
          FF.KRF()
        })), wA(this, JA)[JA](FF, "stopped"))
      }
    }

    function lA(FF, WF) {
      return wA(this, BA)[BA] = null, FF.end(), WF
    }

    function Fu(FF, WF) {
      const SF = new Uint8Array(4),
        CF = new DataView(SF.buffer);
      return CF.setUint8(0, FF ? 1 : 0), CF.setUint16(2, Math.max(0, Math.min(65535, Math.round(WF))), !0), SF
    }

    function Wu(FF, WF) {
      return FF > function(FF) {
        return 16777216 + 314572.8 * Math.max(0, FF)
      }(WF) + 33554432
    }
    let Su = null;

    function Cu(FF) {
      return Su ??= async function(FF) {
        const WF = FF.loadInFlight();
        WF && await WF.catch((() => {}));
        if (FF.trapped()) return "trapped";
        if (FF.busy() || !Wu(FF.memoryBytes(), FF.clipSeconds())) return "kept";
        FF.unload();
        let SF = !1;
        try {
          SF = await FF.load()
        } catch {
          SF = !1
        }
        if (!SF) return FF.trapped() ? "trapped" : FF.DC() ? "DC" : "failed";
        return "recycled"
      }(FF).finally((() => {
        Su = null
      })), Su
    }
    const Au = "Replay recording couldn't load, so try again.",
      uu = new Set([eF.sc.ToggleRecording, eF.sc.SaveClip]);
    var hu = UA("uC"),
      bh = UA("module"),
      du = UA("memory"),
      Pu = UA("trapped"),
      Ru = UA("DC"),
      ih = UA("recycleDue"),
      eu = UA("loading"),
      Eu = UA("generation"),
      Qu = UA("viewDrawn"),
      rh = UA("clip"),
      gh = UA("session"),
      th = UA("control"),
      Tu = UA("deferred"),
      ah = UA("coreU8"),
      kh = UA("coreU32"),
      qh = UA("moduleU8"),
      Vu = UA("edited"),
      Nu = UA("sendSession"),
      Du = UA("checkNotInEvents"),
      Lu = UA("clipping"),
      mh = UA("busy"),
      Ou = UA("use"),
      xh = UA("ensureLoaded"),
      Zu = UA("loadOnce"),
      ou = UA("recycleAfterStep"),
      Yu = UA("settleRecycle"),
      Mu = UA("load"),
      ch = UA("attach"),
      Gu = UA("resendHeld"),
      zh = UA("recycle"),
      Iu = UA("send"),
      fu = UA("unload"),
      yh = UA("dropModule"),
      su = UA("coreBytes"),
      nu = UA("coreWords"),
      Hu = UA("moduleBytes"),
      Ku = UA("loadFailed"),
      wu = UA("call"),
      Xu = UA("guard"),
      Uu = UA("trapOn");
    class Bu {
      constructor(FF) {
        this.deps = FF, Object.defineProperty(this, Uu, {
          value: tb
        }), Object.defineProperty(this, Xu, {
          value: gb
        }), Object.defineProperty(this, wu, {
          value: rb
        }), Object.defineProperty(this, Ku, {
          value: Qh
        }), Object.defineProperty(this, Hu, {
          value: Eh
        }), Object.defineProperty(this, nu, {
          value: eh
        }), Object.defineProperty(this, su, {
          value: ib
        }), Object.defineProperty(this, yh, {
          value: Rh
        }), Object.defineProperty(this, fu, {
          value: Ph
        }), Object.defineProperty(this, Iu, {
          value: dh
        }), Object.defineProperty(this, zh, {
          value: bb
        }), Object.defineProperty(this, Gu, {
          value: hh
        }), Object.defineProperty(this, ch, {
          value: uh
        }), Object.defineProperty(this, Mu, {
          value: Ah
        }), Object.defineProperty(this, Yu, {
          value: Ch
        }), Object.defineProperty(this, ou, {
          value: Sh
        }), Object.defineProperty(this, Zu, {
          value: Wh
        }), Object.defineProperty(this, xh, {
          value: Fh
        }), Object.defineProperty(this, Ou, {
          value: lu
        }), Object.defineProperty(this, mh, {
          value: pu
        }), Object.defineProperty(this, Lu, {
          value: Ju
        }), Object.defineProperty(this, Du, {
          value: vh
        }), Object.defineProperty(this, Nu, {
          value: jh
        }), Object.defineProperty(this, hu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, du, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pu, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ru, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ih, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Eu, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Qu, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, rh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, th, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Tu, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ah, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Vu, {
          writable: !0,
          value: void 0
        }), wA(this, Vu)[Vu] = new pA({
          ensureLoaded: () => wA(this, xh)[xh](),
          recorderCall: (FF, WF) => {
            WF && wA(this, Du)[Du]("an edited save's stage");
            const SF = wA(this, wu)[wu](((WF, SF) => (FF(WF, SF), !0)));
            return null !== SF && void 0 !== SF && SF
          },
          beginSave: FF.beginSave,
          givenUp: FF.givenUp
        })
      }
      get active() {
        return null !== wA(this, bh)[bh]
      }
      get trapped() {
        return wA(this, Pu)[Pu]
      }
      get loading() {
        return null !== wA(this, eu)[eu]
      }
      prefetch() {
        wA(this, Ru)[Ru] || wA(this, Pu)[Pu] || wA(this, bh)[bh] || wA(this, eu)[eu] || this.deps.prefetch()
      }
      viewDrawn() {
        wA(this, Qu)[Qu] = !0, wA(this, Lu)[Lu]() && wA(this, Ou)[Ou]()
      }
      prefs(FF, WF) {
        wA(this, rh)[rh] = {
          on: FF,
          seconds: WF
        }, wA(this, Iu)[Iu](eF.pc.Prefs, Fu(FF, WF)), FF && wA(this, Qu)[Qu] && wA(this, Ou)[Ou]()
      }
      control(FF) {
        const WF = function(FF) {
          return new Uint8Array([FF, 0, 0, 0])
        }(FF);
        if (uu.has(FF)) return wA(this, bh)[bh] ? void wA(this, Iu)[Iu](eF.pc.Control, WF) : (wA(this, th)[th] = WF, void wA(this, Ou)[Ou]());
        wA(this, Ru)[Ru] || this.deps.coreCommand(eF.pc.Control, WF)
      }
      session(FF) {
        wA(this, gh)[gh] = FF, wA(this, Nu)[Nu](FF)
      }
      filePartDone(FF, WF) {
        wA(this, Iu)[Iu](eF.pc.FilePartDone, function(FF, WF) {
          const SF = new Uint8Array(8),
            CF = new DataView(SF.buffer);
          return CF.setUint32(0, FF, !0), CF.setUint32(4, WF, !0), SF
        }(FF, WF))
      }
      fileDone(FF) {
        return wA(this, Iu)[Iu](eF.pc.FileDone, function(FF) {
          const WF = new Uint8Array(4);
          return new DataView(WF.buffer).setUint32(0, FF, !0), WF
        }(FF)), wA(this, ou)[ou]()
      }
      saveEdited(FF) {
        return wA(this, Du)[Du]("saveEdited"), wA(this, Vu)[Vu].start(FF)
      }
      afterFrame() {
        if (!wA(this, bh)[bh]) return;
        "read" === wA(this, Vu)[Vu].beforeRecorderStep() && wA(this, ou)[ou]();
        const FF = wA(this, ih)[ih];
        wA(this, ih)[ih] = null;
        const WF = wA(this, bh)[bh],
          SF = wA(this, du)[du];
        if (!WF || !SF) return void(null === FF || void 0 === FF || FF.resolve(wA(this, Pu)[Pu] ? "trapped" : "kept"));
        const {
          core: CF
        } = this.deps, AF = CF.URF(2);
        let uF, hF, bW, dF, PF = 0,
          RF = 0;
        if (0 !== AF) {
          var iW, eF;
          const FF = wA(this, nu)[nu]();
          PF = null !== (iW = FF[AF >>> 2]) && void 0 !== iW ? iW : 0, RF = null !== (eF = FF[1 + (AF >>> 2)]) && void 0 !== eF ? eF : 0
        }
        try {
          if (RF > 0) {
            const FF = WF.feed(RF);
            0 !== FF && wA(this, Hu)[Hu](SF).set(wA(this, su)[su]().subarray(PF, PF + RF), FF)
          }
          uF = WF.step(), hF = WF.BRF(), bW = WF.jiF(), dF = WF.viF()
        } catch (EF) {
          if (!wA(this, Uu)[Uu](EF)) throw null === FF || void 0 === FF || FF.resolve("kept"), EF;
          return void(null === FF || void 0 === FF || FF.resolve("trapped"))
        }
        if (uF > 0) {
          const FF = CF.JRF(2, uF);
          0 !== FF && wA(this, su)[su]().set(wA(this, Hu)[Hu](SF).subarray(hF, hF + uF), FF)
        }
        if (bW > 0) {
          wA(this, Tu)[Tu] = [];
          try {
            this.deps.events(new Uint8Array(SF.buffer, dF, bW), SF)
          } catch (EF) {
            throw null === FF || void 0 === FF || FF.resolve("kept"), EF
          } finally {
            const FF = wA(this, Tu)[Tu];
            wA(this, Tu)[Tu] = null;
            for (const [WF, SF] of FF) wA(this, Iu)[Iu](WF, SF)
          }
        }
        if (!wA(this, Lu)[Lu]() && !wA(this, mh)[mh]()) return wA(this, fu)[fu](), void(null === FF || void 0 === FF || FF.resolve("kept"));
        null === FF || void 0 === FF || FF.resolve(wA(this, zh)[zh]())
      }
      dispose() {
        wA(this, Ru)[Ru] = !0, wA(this, fu)[fu]()
      }
    }

    function jh(FF) {
      wA(this, Iu)[Iu](eF.pc.Session, function(FF) {
        const WF = new TextEncoder,
          SF = WF.encode(FF.game).subarray(0, 65535),
          CF = WF.encode(FF.lobby).subarray(0, 65535),
          AF = new Uint8Array(22 + SF.length + 2 + CF.length),
          uF = new DataView(AF.buffer);
        uF.setFloat64(0, FF.unixMs, !0), uF.setBigUint64(8, BigInt.asUintN(64, FF.session), !0), uF.setUint8(16, FF.lobbyType);
        let hF = 20;
        for (const bW of [SF, CF]) uF.setUint16(hF, bW.length, !0), AF.set(bW, hF + 2), hF += 2 + bW.length;
        return AF
      }({
        ...FF,
        unixMs: this.deps.unixNow()
      }))
    }

    function vh(FF) {
      false
    }

    function Ju() {
      var FF, WF;
      return null !== (FF = null === (WF = wA(this, rh)[rh]) || void 0 === WF ? void 0 : WF.on) && void 0 !== FF && FF
    }

    function pu() {
      const FF = wA(this, bh)[bh];
      let WF = !0;
      if (FF) try {
        WF = FF.busy()
      } catch (SF) {
        if (!wA(this, Uu)[Uu](SF)) throw SF
      }
      return WF || wA(this, Vu)[Vu].active
    }
    async function lu() {
      !wA(this, Ru)[Ru] && this.deps.allowed() ? await wA(this, xh)[xh]() : wA(this, th)[th] = null
    }

    function Fh() {
      return wA(this, Pu)[Pu] || wA(this, Ru)[Ru] ? Promise.resolve(!1) : wA(this, bh)[bh] ? Promise.resolve(!0) : (wA(this, eu)[eu] ??= wA(this, Zu)[Zu](), wA(this, eu)[eu])
    }
    async function Wh() {
      let FF = !1;
      try {
        return FF = await wA(this, Mu)[Mu](), FF
      } finally {
        FF || (wA(this, th)[th] = null), wA(this, eu)[eu] = null
      }
    }

    function Sh() {
      if (!wA(this, bh)[bh]) return Promise.resolve(wA(this, Pu)[Pu] ? "trapped" : "kept");
      if (!wA(this, ih)[ih]) {
        let FF = () => {};
        const WF = new Promise((WF => {
          FF = WF
        }));
        wA(this, ih)[ih] = {
          promise: WF,
          resolve: FF
        }
      }
      return wA(this, ih)[ih].promise
    }

    function Ch(FF) {
      const WF = wA(this, ih)[ih];
      wA(this, ih)[ih] = null, null === WF || void 0 === WF || WF.resolve(FF)
    }
    async function Ah() {
      let FF = wA(this, hu)[hu];
      if (!FF) {
        const WF = wA(this, Eu)[Eu];
        try {
          FF = await this.deps.load()
        } catch (SF) {
          return WF === wA(this, Eu)[Eu] && await wA(this, Ku)[Ku](SF), !1
        }
        if (WF !== wA(this, Eu)[Eu]) return this.deps.unload(), !1;
        const CF = FF,
          AF = wA(this, Xu)[Xu]((() => CF.pRF()));
        if (void 0 === AF) return !1;
        const uF = this.deps.core.lRF();
        if (AF !== uF) return await wA(this, Ku)[Ku](new Error(`recorder port version ${AF}, the core's ${uF}`)), !1;
        wA(this, hu)[hu] = FF
      }
      const WF = FF;
      try {
        if (!wA(this, Xu)[Xu]((() => (wA(this, bh)[bh] = new WF.FiF, wA(this, du)[du] = WF.wRF(), !0)))) return !1;
        wA(this, Gu)[Gu]();
        const FF = wA(this, th)[th];
        return wA(this, th)[th] = null, FF && wA(this, Iu)[Iu](eF.pc.Control, FF), wA(this, ch)[ch]()
      } catch (SF) {
        return wA(this, fu)[fu](), await wA(this, Ku)[Ku](SF), !1
      }
    }

    function uh() {
      return this.deps.core.WiF(0), 1 === this.deps.core.WiF(1) || (wA(this, fu)[fu](), this.deps.failed(Au), !1)
    }

    function hh() {
      wA(this, rh)[rh] && wA(this, Iu)[Iu](eF.pc.Prefs, Fu(wA(this, rh)[rh].on, wA(this, rh)[rh].seconds)), wA(this, gh)[gh] && wA(this, Nu)[Nu](wA(this, gh)[gh])
    }

    function bb() {
      return Cu({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var FF, WF;
          return null !== (FF = null === (WF = wA(this, rh)[rh]) || void 0 === WF ? void 0 : WF.seconds) && void 0 !== FF ? FF : 0
        },
        trapped: () => wA(this, Pu)[Pu],
        busy: () => wA(this, mh)[mh](),
        loadInFlight: () => wA(this, eu)[eu],
        DC: () => wA(this, Ru)[Ru],
        unload: () => {
          wA(this, fu)[fu]()
        },
        load: () => wA(this, xh)[xh]()
      })
    }

    function dh(FF, WF) {
      wA(this, Tu)[Tu] ? wA(this, Tu)[Tu].push([FF, WF]) : wA(this, wu)[wu](((SF, CF) => {
        const AF = SF.XRF(WF.length);
        0 !== AF && (new Uint8Array(CF.buffer, AF, WF.length).set(WF), SF.command(FF, WF.length))
      }))
    }

    function Ph() {
      wA(this, Eu)[Eu]++, wA(this, Yu)[Yu]("kept"), wA(this, Vu)[Vu].stop(), this.deps.core.WiF(0), wA(this, yh)[yh](), wA(this, Pu)[Pu] || (wA(this, hu)[hu] = null, this.deps.unload())
    }

    function Rh() {
      wA(this, wu)[wu]((FF => {
        FF.free()
      })), wA(this, bh)[bh] = null, wA(this, du)[du] = null, wA(this, qh)[qh] = null
    }

    function ib() {
      var FF;
      const WF = this.deps.coreBuffer();
      return (null === (FF = wA(this, ah)[ah]) || void 0 === FF ? void 0 : FF.buffer) !== WF && (wA(this, ah)[ah] = new Uint8Array(WF)), wA(this, ah)[ah]
    }

    function eh() {
      var FF;
      const WF = this.deps.coreBuffer();
      return (null === (FF = wA(this, kh)[kh]) || void 0 === FF ? void 0 : FF.buffer) !== WF && (wA(this, kh)[kh] = new Uint32Array(WF, 0, WF.byteLength >>> 2)), wA(this, kh)[kh]
    }

    function Eh(FF) {
      var WF;
      const SF = FF.buffer;
      return (null === (WF = wA(this, qh)[qh]) || void 0 === WF ? void 0 : WF.buffer) !== SF && (wA(this, qh)[qh] = new Uint8Array(SF)), wA(this, qh)[qh]
    }
    async function Qh(FF) {
      await this.deps.staleOr(FF, (() => {
        this.deps.failed(Au)
      }))
    }

    function rb(FF) {
      const WF = wA(this, bh)[bh],
        SF = wA(this, du)[du];
      if (WF && SF) return wA(this, Xu)[Xu]((() => FF(WF, SF)))
    }

    function gb(FF) {
      if (!wA(this, Pu)[Pu]) try {
        return FF()
      } catch (WF) {
        if (!wA(this, Uu)[Uu](WF)) throw WF;
        return
      }
    }

    function tb(FF) {
      return FF instanceof WebAssembly.RuntimeError && (wA(this, Pu)[Pu] = !0, wA(this, bh)[bh] = null, wA(this, du)[du] = null, wA(this, qh)[qh] = null, wA(this, hu)[hu] = null, wA(this, th)[th] = null, wA(this, Yu)[Yu]("trapped"), this.deps.core.WiF(0), wA(this, Vu)[Vu].stop(), this.deps.crash(this.deps.markTrapped(FF)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Th = SF(37047);
    const ab = new Map([
      ["skyblock", () => SF.e(41).then((() => SF(37040)))]
    ]);

    function kb(FF) {
      const WF = ab.get(FF);
      return WF ? WF().then((() => {
        const WF = (0, Th.b)(FF);
        if (!WF) throw new Error(`${FF}'s replay hook module registered no hook`);
        return WF
      })) : null
    }
    class qb {
      constructor(FF) {
        this.deps = FF, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(FF) {
        if (this.pending.clear(), FF === this.game && null !== this.hook) return void(this.all = !0);
        const WF = ++this.generation;
        this.game = FF, this.hook = null, this.all = !1;
        const SF = this.deps.loadHook(FF);
        null === SF || void 0 === SF || SF.then((FF => {
          WF === this.generation && (this.hook = FF, this.all = !0)
        }), (FF => {
          WF === this.generation && this.deps.onError(FF)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(FF) {
        null === this.hook || this.all || this.pending.set(FF, !0)
      }
      entityInfoChanged(FF) {
        null === this.hook || this.all || this.pending.has(FF) || this.pending.set(FF, !1)
      }
      flush(FF) {
        const {
          hook: WF
        } = this;
        if (null === WF || !FF || !this.all && 0 === this.pending.size) return;
        const SF = this.deps.cmd();
        if (null === SF) return;
        const {
          api: CF
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: FF,
            count: WF
          } = IS(CF, this.ids);
          this.ids = FF;
          for (let SF = 0; SF < WF; SF++) this.pending.set(FF[SF], !0)
        }
        const AF = this.ids = fS(this.ids, this.pending.size);
        let uF = 0;
        for (const PF of this.pending.keys()) AF[uF++] = PF;
        const hF = [],
          bW = yC(CF, AF, uF, ((FF, WF) => {
            null !== WF && hF.push({
              serverId: FF,
              info: WF,
              spawned: !0 === this.pending.get(FF)
            })
          }));
        if (bW) {
          this.pending.clear();
          for (const {
              serverId: FF,
              info: CF,
              spawned: AF
            }
            of hF) try {
            WF(CF, {
              setFacingTolerance: WF => {
                null === WF && AF || hS(SF, FF, WF) || this.pending.set(FF, AF)
              }
            })
          } catch (dF) {
            this.deps.onError(dF)
          }
        }
      }
    }
    var Vh = UA("uC"),
      Nh = UA("module"),
      Dh = UA("memory"),
      Lh = UA("trapped"),
      mb = UA("generation"),
      Oh = UA("loading"),
      xb = UA("lend"),
      Zh = UA("givenUp"),
      oh = UA("afterSave"),
      Yh = UA("opens"),
      Mh = UA("saveAskedAt"),
      cb = UA("unload"),
      Gh = UA("dropModule"),
      zb = UA("loadFailed"),
      Ih = UA("saveReadsBody"),
      fh = UA("command"),
      yb = UA("call"),
      sh = UA("guard"),
      nh = UA("trapOn");
    class Hh {
      constructor(FF) {
        this.deps = FF, Object.defineProperty(this, nh, {
          value: Jh
        }), Object.defineProperty(this, sh, {
          value: vb
        }), Object.defineProperty(this, yb, {
          value: jb
        }), Object.defineProperty(this, fh, {
          value: Bh
        }), Object.defineProperty(this, Ih, {
          get: Uh,
          set: void 0
        }), Object.defineProperty(this, zb, {
          value: Xh
        }), Object.defineProperty(this, Gh, {
          value: wh
        }), Object.defineProperty(this, cb, {
          value: Kh
        }), Object.defineProperty(this, Vh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Nh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Dh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lh, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, mb, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Oh, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, xb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Zh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oh, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yh, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Mh, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== wA(this, Nh)[Nh] && null === wA(this, oh)[oh]
      }
      async open(FF) {
        if (wA(this, Lh)[Lh]) return eF.zc.ModuleTrap;
        let WF = wA(this, Vh)[Vh];
        if (!WF) {
          const FF = wA(this, mb)[mb];
          wA(this, Oh)[Oh]++;
          try {
            WF = await this.deps.load()
          } catch (CF) {
            return wA(this, Oh)[Oh]--, FF !== wA(this, mb)[mb] ? "stopped" : wA(this, zb)[zb](CF)
          }
          if (wA(this, Oh)[Oh]--, FF !== wA(this, mb)[mb]) return wA(this, Vh)[Vh] || 0 !== wA(this, Oh)[Oh] || wA(this, Lh)[Lh] || this.deps.unload(), "stopped";
          if (wA(this, Lh)[Lh]) return eF.zc.ModuleTrap;
          const SF = WF.pRF(),
            AF = this.deps.core.lRF();
          if (SF !== AF) return wA(this, zb)[zb](new Error(`replay port version ${SF}, the core's ${AF}`));
          wA(this, Vh)[Vh] = WF
        }
        if (!wA(this, Nh)[Nh]) {
          const FF = WF;
          if (!wA(this, sh)[sh]((() => {
              wA(this, Nh)[Nh] = new FF.SiF, wA(this, Dh)[Dh] = FF.CiF()
            }))) return eF.zc.ModuleTrap
        }
        let SF = !1;
        return wA(this, yb)[yb](((WF, CF) => {
          null !== wA(this, oh)[oh] && WF.step(0, 0);
          const AF = WF.stage(FF.length);
          0 !== AF && (new Uint8Array(CF.buffer, AF, FF.length).set(FF), WF.open(), wA(this, Zh)[Zh] = wA(this, xb)[xb], wA(this, oh)[oh] = null, wA(this, Yh)[Yh]++, SF = !0)
        })) ? SF ? "opening" : eF.zc.TooLarge : eF.zc.ModuleTrap
      }
      beforeFrame(FF) {
        const WF = wA(this, Nh)[Nh],
          SF = wA(this, Dh)[Dh];
        if (!WF || !SF || null !== wA(this, oh)[oh]) return;
        const {
          core: CF
        } = this.deps, AF = CF.AiF(FF);
        if (AF < 0) return;
        const uF = Math.floor(AF);
        let hF, bW;
        try {
          hF = WF.step(uF, AF - uF), bW = WF.BRF()
        } catch (PF) {
          return void wA(this, nh)[nh](PF)
        }
        const dF = CF.JRF(1, hF);
        if (0 === dF) {
          const FF = wA(this, yb)[yb]((FF => {
            FF.close()
          }));
          if (!FF) return;
          return wA(this, Ih)[Ih] ? wA(this, oh)[oh] = "drop" : wA(this, Gh)[Gh](), void CF.uiF(eF.zc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), dF, hF).set(new Uint8Array(SF.buffer, bW, hF))
      }
      play() {
        wA(this, fh)[fh]((FF => {
          FF.play()
        }))
      }
      pause() {
        wA(this, fh)[fh]((FF => {
          FF.pause()
        }))
      }
      seek(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        wA(this, fh)[fh]((SF => {
          SF.seek(FF, WF)
        }))
      }
      setMark(FF, WF) {
        return wA(this, fh)[fh]((SF => {
          SF.hiW(FF, WF)
        }))
      }
      addKeyframe(FF, WF) {
        return wA(this, fh)[fh]((SF => {
          SF.beF(FF[0], FF[1], FF[2], WF[0], WF[1], WF[2])
        }))
      }
      setKeyframe(FF, WF) {
        return wA(this, fh)[fh]((SF => {
          SF.diF(FF, WF)
        }))
      }
      moveKeyframe(FF, WF) {
        return wA(this, fh)[fh]((SF => {
          SF.PiF(FF, WF)
        }))
      }
      deleteKeyframes(FF, WF) {
        return wA(this, fh)[fh]((SF => {
          SF.RiF(FF, WF)
        }))
      }
      crop(FF, WF) {
        return null === wA(this, xb)[xb] && wA(this, fh)[fh]((SF => {
          SF.crop(FF, WF)
        }))
      }
      beginSave() {
        const FF = wA(this, Mh)[Mh];
        if (wA(this, Mh)[Mh] = null, null !== FF && FF !== wA(this, Yh)[Yh]) return null;
        let WF = 0,
          SF = null;
        if (wA(this, yb)[yb](((FF, CF) => {
            WF = FF.save(), 0 !== WF && (SF = new Uint8Array(CF.buffer, FF.ieF(), FF.eiF()).slice())
          })), 0 === WF || !SF) return null;
        const CF = {
          headLen: WF,
          editState: SF,
          givenUp: () => wA(this, Zh)[Zh] === CF,
          head: (FF, WF) => {
            if (wA(this, xb)[xb] !== CF || !wA(this, Ih)[Ih]) return null;
            let SF = null;
            return wA(this, yb)[yb](((CF, AF) => {
              const uF = CF.EiF();
              0 !== uF && FF >= 0 && WF >= 0 && FF + WF <= uF && (SF = new Uint8Array(AF.buffer, CF.QiF() + FF, WF))
            })), SF
          },
          end: () => {
            if (wA(this, xb)[xb] !== CF) return;
            wA(this, xb)[xb] = null, wA(this, Zh)[Zh] = null, wA(this, yb)[yb]((FF => {
              FF.reF()
            }));
            const FF = wA(this, oh)[oh];
            wA(this, oh)[oh] = null, "unload" === FF ? wA(this, cb)[cb]() : "drop" === FF && wA(this, Gh)[Gh]()
          }
        };
        return wA(this, xb)[xb] = CF, CF
      }
      askSave() {
        wA(this, Mh)[Mh] = wA(this, Yh)[Yh]
      }
      setSpeed(FF) {
        wA(this, fh)[fh]((WF => {
          WF.geF(FF)
        }))
      }
      setCameraMode(FF) {
        wA(this, fh)[fh]((WF => {
          WF.teF(FF)
        }))
      }
      close() {
        wA(this, fh)[fh]((FF => {
          FF.close()
        }))
      }
      stop() {
        wA(this, mb)[mb]++, wA(this, Ih)[Ih] && (wA(this, yb)[yb]((FF => {
          FF.close()
        })), wA(this, Nh)[Nh]) ? wA(this, oh)[oh] = "unload" : wA(this, cb)[cb]()
      }
    }

    function Kh() {
      wA(this, Gh)[Gh](), wA(this, Lh)[Lh] || (wA(this, Vh)[Vh] = null, this.deps.unload())
    }

    function wh() {
      wA(this, yb)[yb]((FF => {
        FF.free()
      })), wA(this, Nh)[Nh] = null, wA(this, Dh)[Dh] = null
    }
    async function Xh(FF) {
      return await this.deps.staleOr(FF, (() => {})) ? "reloading" : eF.zc.ModuleLoad
    }

    function Uh() {
      return null !== wA(this, xb)[xb] && wA(this, Zh)[Zh] !== wA(this, xb)[xb]
    }

    function Bh(FF) {
      return null === wA(this, oh)[oh] && wA(this, yb)[yb](FF)
    }

    function jb(FF) {
      const WF = wA(this, Nh)[Nh],
        SF = wA(this, Dh)[Dh];
      return !(!WF || !SF) && wA(this, sh)[sh]((() => {
        FF(WF, SF)
      }))
    }

    function vb(FF) {
      if (wA(this, Lh)[Lh]) return !1;
      try {
        return FF(), !0
      } catch (WF) {
        return wA(this, nh)[nh](WF), !1
      }
    }

    function Jh(FF) {
      if (!(FF instanceof WebAssembly.RuntimeError)) throw FF;
      wA(this, Lh)[Lh] = !0, wA(this, Nh)[Nh] = null, wA(this, Dh)[Dh] = null, wA(this, Vh)[Vh] = null, this.deps.crash(this.deps.markTrapped(FF)), this.deps.core.uiF(eF.zc.ModuleTrap)
    }
    var ph = SF(5452),
      lh = SF(38633);
    const Fb = "[bloxd-wasm-client]";
    const Wb = String(VA);

    function Sb(FF) {
      return null === FF || FF === Wb ? void 0 : FF
    }

    function Cb(FF) {
      var WF, SF, CF, AF, uF, bW, dF;
      switch (FF.what) {
        case eF.Kc.FlyingText: {
          let WF;
          try {
            WF = JSON.parse(FF.contentJson)
          } catch (PF) {
            return void console.warn(`${Fb} a replay's flying text isn't JSON`, PF)
          }
          hF.j.Uu("forceFlyingMiddleMessage", {
            content: WF,
            zp: FF.zp,
            angle: FF.angle,
            HJ: FF.HJ
          });
          break
        }
        case eF.Kc.PlayerKilled:
          (0, lh.g)({
            kind: "killed",
            body: {
              deadEId: null !== (WF = Sb(FF.dead)) && void 0 !== WF ? WF : "",
              killerEId: Sb(FF.killer),
              withItem: null !== (SF = FF.withItem) && void 0 !== SF ? SF : "",
              killstreak: FF.killstreak
            }
          });
          break;
        case eF.Kc.Killfeed:
          (0, lh.g)({
            kind: "custom",
            body: {
              killer: {
                eId: Sb(FF.killerId),
                name: null !== (CF = FF.killerName) && void 0 !== CF ? CF : void 0,
                colour: null !== (AF = FF.killerColour) && void 0 !== AF ? AF : void 0
              },
              victim: {
                eId: Sb(FF.victimId),
                name: null !== (uF = FF.victimName) && void 0 !== uF ? uF : void 0,
                colour: null !== (bW = FF.victimColour) && void 0 !== bW ? bW : void 0
              },
              withItem: null !== (dF = FF.withItem) && void 0 !== dF ? dF : ""
            }
          })
      }
    }
    const Ab = "[bloxd-wasm-client]";

    function ub(FF) {
      if (void 0 === FF || null === FF || "" === FF) return null;
      const WF = Number(FF);
      return Number.isInteger(WF) && WF > VA && WF <= 2147483647 ? WF : null
    }

    function hb(FF) {
      return {
        id: ub(FF.eId),
        name: "string" === typeof FF.name ? FF.name : null,
        colour: "string" === typeof FF.colour ? FF.colour : null
      }
    }

    function bd(FF) {
      const WF = (0, MA.h)(XS.Ob.PlayerKilled, (WF => {
          var SF, CF;
          const AF = (0, YA.k)(WF);
          if (!(0, YA.d)(AF)) return;
          const {
            deadEId: uF,
            killerEId: hF,
            withItem: bW,
            killstreak: dF
          } = AF;
          FF.recordPlayerKilled(null !== (SF = ub(uF)) && void 0 !== SF ? SF : VA, null !== (CF = ub(hF)) && void 0 !== CF ? CF : VA, "number" === typeof dF ? dF : 0, "string" === typeof bW ? bW : "")
        })),
        SF = (0, MA.h)(XS.Ob.CustomKillfeed, (WF => {
          const SF = (0, YA.k)(WF);
          if (!(0, YA.d)(SF) || !(0, YA.d)(SF.killer) || !(0, YA.d)(SF.victim)) return;
          const {
            killer: CF,
            victim: AF,
            withItem: uF
          } = SF;
          FF.recordKillfeed(hb(CF), hb(AF), "string" === typeof uF ? uF : null)
        }));
      return () => {
        WF(), SF()
      }
    }

    function db(FF) {
      var WF;
      return void 0 === FF || null === FF ? null : null !== (WF = JSON.stringify(FF)) && void 0 !== WF ? WF : null
    }

    function Pb(FF) {
      let WF = null;
      const SF = () => {
        const {
          enableClipping: SF,
          clipDurationSeconds: AF
        } = CF.b.get("clientEscMenuOptions"), uF = `${SF}:${AF}`;
        uF !== WF && (WF = uF, FF.recorder.setPrefs(SF, AF))
      };
      return SF(), (0, hF.l)("appManagerUpdated|clientEscMenuOptions", SF)
    }
    const Rb = "replayModule",
      eb = "recorderModule";

    function Eb(FF, WF, SF) {
      return function() {
        return FF.isStopped ? SF : WF(...arguments)
      }
    }
    const Qb = {
      open: () => Promise.reject(new Error(EA.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function rd() {
      return SF.e(53).then((() => SF(59210)))
    }

    function gd(FF) {
      (0, EA.e)({
        text: FF,
        type: "Error"
      })
    }
    class td {
      constructor(FF) {
        this.deps = FF, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: WF,
          api: CF,
          core: AF
        } = FF, uF = () => FF.memory().buffer, hF = () => WF.isStopped ? null : WF.rings.cmd, bW = Eb(WF, ((FF, WF) => AF.JRF(FF, WF)), 0), dF = () => AF.lRF();
        let PF = null;
        this.replay = new Hh({
          core: {
            AiF: Eb(WF, (FF => AF.AiF(FF)), -1),
            JRF: bW,
            lRF: dF,
            uiF: Eb(WF, (FF => {
              AF.uiF(FF)
            }), void 0)
          },
          coreBuffer: uF,
          load: async () => (PF = await SF.e(54).then((() => SF(59221))), PF.loadReplayModule()),
          unload: () => {
            var FF;
            null === (FF = PF) || void 0 === FF || FF.unloadReplayModule()
          },
          markTrapped: FF => PF ? PF.markReplayTrapped(FF) : new Error(String(FF)),
          staleOr: (WF, SF) => FF.staleOr(Rb, WF, SF),
          crash: WF => {
            FF.reportFault(Rb, WF)
          }
        });
        let RF = null;
        this.recorder = new Bu({
          core: {
            WiF: Eb(WF, (FF => AF.WiF(FF)), 0),
            URF: Eb(WF, (FF => AF.URF(FF)), 0),
            JRF: bW,
            lRF: dF
          },
          coreCommand: (FF, WF) => {
            var SF, CF;
            return null !== (SF = null === (CF = hF()) || void 0 === CF ? void 0 : CF.writeCmd(FF, 0, WF)) && void 0 !== SF && SF
          },
          coreBuffer: uF,
          load: async () => (RF = await rd(), RF.loadRecorderModule()),
          prefetch: () => {
            rd().then((FF => FF.prefetchRecorderModule())).catch((FF => {
              console.warn(`${Ab} the recorder module didn't prefetch, so a save loads it:`, FF)
            }))
          },
          unload: () => {
            var FF;
            null === (FF = RF) || void 0 === FF || FF.unloadRecorderModule()
          },
          markTrapped: FF => RF ? RF.markRecorderTrapped(FF) : new Error(String(FF)),
          memoryBytes: () => {
            var FF, WF;
            return null !== (FF = null === (WF = RF) || void 0 === WF ? void 0 : WF.recorderMemoryBytes()) && void 0 !== FF ? FF : 0
          },
          staleOr: (WF, SF) => FF.staleOr(eb, WF, SF),
          crash: WF => {
            FF.reportFault(eb, WF)
          },
          allowed: () => !0 === FF.options.get("canRecordReplays"),
          failed: gd,
          events: (FF, WF) => {
            this.runtime.recorderEvents(FF, WF)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: gd,
          unixNow: () => Date.now()
        });
        const iW = new qu({
          core: {
            IRF: Eb(WF, (FF => AF.IRF(FF)), 0),
            yiF: Eb(WF, (() => {
              AF.yiF()
            }), void 0),
            Hh: Eb(WF, (() => AF.Hh()), 0),
            fRF: Eb(WF, (() => AF.fRF()), 0)
          },
          buffer: uF,
          apiView: () => CF.apiView,
          cmd: hF,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new qb({
          api: CF,
          cmd: hF,
          loadHook: kb,
          onError: FF => {
            console.warn(`${Ab} the recorded game's replay hooks:`, FF)
          }
        });
        const eF = new oA({
          client: iW,
          buffer: uF,
          setHoldDraws: FF => {
            WF.setHoldDraws(FF)
          },
          notify: EA.e,
          onRecorderState: () => {
            var FF;
            null === (FF = (0, ru.e)()) || void 0 === FF || FF.recorderChanged()
          },
          onViewerChange: () => {
            var FF;
            null === (FF = (0, ru.e)()) || void 0 === FF || FF.viewerChanged()
          },
          onReplayOption: WF => {
            ! function(FF, WF) {
              var SF, CF;
              const AF = XS.W[WF.key];
              if (void 0 === AF) return;
              let uF = null !== (SF = WF.value) && void 0 !== SF ? SF : JSON.parse(JSON.stringify(null !== (CF = ph.b[AF]) && void 0 !== CF ? CF : null));
              if (null !== WF.value && WF.key < XS.tb.Environment && "string" === typeof uF) try {
                uF = JSON.parse(uF)
              } catch (hF) {
                return void console.warn(`${Fb} a replay's ${AF} isn't JSON`, hF)
              }
              FF.applyNewClientOptions({
                [AF]: uF
              })
            }(FF.options, WF)
          },
          onReplayUiEvent: Cb,
          onReplayOpened: WF => {
            this.entityHooks.opened((0, mW.Yb)(WF)), FF.replayShaderPack(WF)
          },
          meshPending: () => {
            var FF, SF;
            return null !== (FF = null === (SF = WF.lastHeader) || void 0 === SF ? void 0 : SF.renderPending) && void 0 !== FF ? FF : 0
          },
          viewerOpen: QA.e,
          download: FF => {
            (0, iu.d)(FF)
          }
        });
        this.runtime = eF, CF.replay = eF.sink, (0, ru.s)(eF);
        const EF = new zu({
          live: () => {
            var FF;
            return !WF.isStopped && !0 === (null === (FF = eF.currentViewer) || void 0 === FF ? void 0 : FF.inPlayback)
          },
          cmd: hF,
          dragScale: HA
        });
        this.freecam = EF, (0, ru.q)(EF), this.recordedOptions = function(FF, WF) {
          const SF = XS.W,
            CF = SF.map(((SF, CF) => WF.subscribe(SF, (WF => {
              FF.setOption(CF, db(WF))
            }))));
          return {
            sendAll() {
              SF.forEach(((SF, CF) => {
                FF.setOption(CF, db(WF.get(SF)))
              }))
            },
            stop() {
              for (const FF of CF) FF()
            }
          }
        }(eF.recorder, FF.options), this.stops = [(0, SC.m)((FF => {
          EF.flush();
          try {
            this.replay.beforeFrame(FF)
          } catch (WF) {
            this.deps.reportFault("replayFrame", WF)
          }
        })), (0, SC.y)(((FF, WF) => {
          try {
            this.recorder.afterFrame(), WF && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (SF) {
            this.deps.reportFault("recorderFrame", SF)
          }
          try {
            eF.afterFrame(FF)
          } catch (SF) {
            this.deps.reportFault("replayRuntime", SF)
          }
        })), Pb(eF), () => {
          this.recordedOptions.stop()
        }, bd(eF.recorder), (0, cu.h)((FF => {
          let {
            action: WF,
            down: SF
          } = FF;
          var CF;
          SF && (null === (CF = (0, ru.e)()) || void 0 === CF || CF.keyDown(WF))
        }))];
        const QF = () => {
          const FF = eF.currentViewer;
          return !0 === (null === FF || void 0 === FF ? void 0 : FF.isOpen) ? FF : null
        };
        (0, eA.g)({
          open: (FF, WF) => this.open(FF, WF),
          replayKey: () => {
            var FF, WF;
            return null !== (FF = null === (WF = QF()) || void 0 === WF ? void 0 : WF.id) && void 0 !== FF ? FF : null
          },
          saveRefusal: () => {
            var FF, WF;
            return null !== (FF = null === (WF = QF()) || void 0 === WF ? void 0 : WF.saveRefusal) && void 0 !== FF ? FF : null
          },
          encode: () => {
            var FF, WF;
            return null !== (FF = null === (WF = QF()) || void 0 === WF ? void 0 : WF.save()) && void 0 !== FF ? FF : Promise.resolve(null)
          },
          fileHandle: () => {
            var FF, WF;
            return null !== (FF = null === (WF = eF.currentViewer) || void 0 === WF ? void 0 : WF.fileHandle) && void 0 !== FF ? FF : null
          },
          markSaved: (FF, WF) => {
            var SF;
            null === (SF = eF.currentViewer) || void 0 === SF || SF.markSaved(FF, WF)
          }
        })
      }
      netEvent(FF) {
        if ("connection" === FF.type)
          if (FF.phase === eF.F.Activated) {
            this.activeConn = FF.conn;
            const WF = this.deps.sessionInfo(FF.conn);
            null !== WF && (this.runtime.activated({
              lobbyType: (0, OF.q)(WF.lobbyName),
              gameNameWithVariation: WF.gameNameWithVariation,
              lobbyName: WF.lobbyName
            }), this.recordedOptions.sendAll())
          } else FF.phase !== eF.F.Left && FF.phase !== eF.F.Closed || FF.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const FF of this.stops) FF();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, ru.l)() === this.runtime && (0, ru.s)(null), (0, ru.h)() === this.freecam && (0, ru.q)(null), (0, eA.g)(Qb), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(FF, WF) {
        const {
          running: SF
        } = this.deps;
        if (SF.isStopped) throw new Error(EA.d.coreStopped.text);
        if (FF.byteLength > 67108864) throw new Error(EA.d.cantOpen.text);
        let CF;
        try {
          CF = await async function(FF) {
            const WF = await FF.loadViewer();
            return WF.inPlayback || (0, SC.I)().leaveGame(null), WF
          }(this.runtime)
        } catch (AF) {
          throw console.warn(`${Ab} the replay viewer didn't load`, AF), new Error(EA.d.viewerLoadFailed.text)
        }
        if (SF.isStopped) throw new Error(EA.d.coreStopped.text);
        await CF.open(FF, WF)
      }
    }
    var Tb = SF(40440),
      ad = SF(40445),
      kd = SF(38883),
      qd = SF(38902),
      Vb = SF(2906);
    const Nb = [1e3, 3e3, 9e3];
    class Db {
      constructor(FF) {
        this.host = FF, this.sets = new Map, this.table = [], this.generation = 0, this.DC = !1
      }
      onEvent(FF) {
        const WF = function(FF) {
          if (FF.byteLength !== eF.Oc) return null;
          const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
          return {
            want: WF.getUint16(0, !0),
            release: WF.getUint16(2, !0)
          }
        }(FF);
        WF && !this.DC && (WF.release !== eF.Sc && this.release(WF.release), WF.want !== eF.Sc && this.want(WF.want))
      }
      reset(FF) {
        if (!this.DC) {
          for (const [FF, WF] of this.sets) "ready" === WF.state && this.releaseAll(WF.distinct), this.sets.delete(FF);
          this.table = FF, this.generation++
        }
      }
      dispose() {
        if (this.DC) return;
        this.DC = !0, this.generation++, this.table = [];
        const FF = [...this.sets.values()];
        this.sets.clear();
        let WF = null;
        for (const CF of FF)
          for (const FF of "ready" === CF.state ? CF.distinct : []) try {
            this.host.hPF(FF)
          } catch (SF) {
            WF ??= {
              error: SF
            }
          }
        if (WF) throw WF.error
      }
      isReady(FF) {
        var WF;
        return "ready" === (null === (WF = this.sets.get(FF)) || void 0 === WF ? void 0 : WF.state)
      }
      want(FF) {
        const WF = this.sets.get(FF);
        if ("loading" === (null === WF || void 0 === WF ? void 0 : WF.state)) return WF.wanted = !0, void this.capAnswer(FF, WF);
        if ("ready" === (null === WF || void 0 === WF ? void 0 : WF.state)) return void this.host.sendReady(md(FF, WF.images, WF.size));
        const SF = this.table[FF];
        if (!SF || 1 !== SF.urls.length && SF.urls.length !== XS.Jb.CubeFaces) return this.host.sendReady(Ob(FF)), void this.host.onLoadFailed(FF, "", new Error(`no image set ${FF}`));
        const CF = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(FF, CF), this.load(FF, SF, CF, this.generation, 0), this.capAnswer(FF, CF)
      }
      capAnswer(FF, WF) {
        this.host.wait(4e3, (() => {
          this.sets.get(FF) === WF && WF.wanted && this.host.sendReady(Ob(FF))
        }))
      }
      load(FF, WF, SF, CF, AF) {
        const uF = [...new Set(WF.urls)];
        Promise.allSettled(uF.map((FF => this.host.loadImage(FF, WF.orientation)))).then((hF => {
          const bW = hF.flatMap((FF => "fulfilled" === FF.status ? [FF.value] : [])),
            dF = CF === this.generation && this.sets.get(FF) === SF,
            PF = hF.findIndex((FF => "rejected" === FF.status));
          if (!dF || !SF.wanted) return this.DC ? void this.releaseAfterDispose(bW.map(Lb)) : (this.releaseAll(bW.map(Lb)), void(dF && this.sets.delete(FF)));
          PF < 0 ? this.loaded(FF, WF, uF, bW) : (this.releaseAll(bW.map(Lb)), this.host.sendReady(Ob(FF)), AF < Nb.length ? this.host.wait(Nb[AF], (() => {
            CF === this.generation && this.sets.get(FF) === SF && (SF.wanted ? this.load(FF, WF, SF, CF, AF + 1) : this.sets.delete(FF))
          })) : (this.sets.delete(FF), this.host.onLoadFailed(FF, uF[PF], hF[PF].reason)))
        }))
      }
      loaded(FF, WF, SF, CF) {
        const [AF] = CF, uF = [AF.width, AF.height], hF = CF.every((FF => FF.width === uF[0] && FF.height === uF[1])), bW = WF.urls.length === XS.Jb.CubeFaces;
        if (!hF || uF[0] <= 0 || uF[1] <= 0 || uF[0] > 65535 || uF[1] > 65535 || bW && uF[0] !== uF[1]) {
          this.releaseAll(CF.map(Lb)), this.sets.delete(FF), this.host.sendReady(Ob(FF));
          const SF = CF.map((FF => `${FF.width}x${FF.height}`));
          return void this.host.onLoadFailed(FF, WF.urls[0], new Error(`set ${FF}'s images can't make its texture: ${SF.join(", ")}`))
        }
        const dF = WF.urls.map((FF => CF[SF.indexOf(FF)].id)),
          PF = CF.map(Lb);
        this.sets.set(FF, {
          state: "ready",
          images: dF,
          distinct: PF,
          size: uF
        }), this.host.sendReady(md(FF, dF, uF))
      }
      release(FF) {
        const WF = this.sets.get(FF);
        "loading" === (null === WF || void 0 === WF ? void 0 : WF.state) ? WF.wanted = !1: "ready" === (null === WF || void 0 === WF ? void 0 : WF.state) && (this.releaseAll(WF.distinct), this.sets.delete(FF))
      }
      releaseAll(FF) {
        for (const WF of FF) this.host.hPF(WF)
      }
      releaseAfterDispose(FF) {
        for (const WF of FF) try {
          this.host.hPF(WF)
        } catch {}
      }
    }

    function Lb(FF) {
      return FF.id
    }

    function md(FF, WF, SF) {
      const CF = new Uint8Array(XS.Jb.SkyImagesReadyBytes),
        AF = new DataView(CF.buffer);
      return AF.setUint16(0, FF, !0), AF.setUint16(2, WF.length, !0), AF.setUint16(4, SF[0], !0), AF.setUint16(6, SF[1], !0), WF.slice(0, XS.Jb.CubeFaces).forEach(((FF, WF) => {
        AF.setUint32(8 + 4 * WF, FF, !0)
      })), CF
    }

    function Ob(FF) {
      const WF = new Uint8Array(XS.Jb.SkyImagesReadyBytes),
        SF = new DataView(WF.buffer);
      return SF.setUint16(0, FF, !0), SF.setUint16(2, XS.Jb.Failed, !0), WF
    }
    let xd = Promise.resolve();
    async function Zb(FF, WF) {
      let SF;
      try {
        SF = await (0, Vb.A)(FF)
      } catch (uF) {
        throw new kd.d("fetch", FF, {
          cause: uF
        })
      }
      const CF = xd.then((() => async function(FF, WF) {
        const SF = new Blob([FF.slice()]);
        let CF = await createImageBitmap(SF, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: WF
        });
        const AF = 1024 / Math.max(CF.width, CF.height);
        if (AF < 1) {
          const FF = CF;
          try {
            CF = await createImageBitmap(FF, {
              resizeWidth: Math.max(1, Math.round(FF.width * AF)),
              resizeHeight: Math.max(1, Math.round(FF.height * AF)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            FF.close()
          }
        }
        return CF
      }(SF, WF)));
      let AF;
      xd = CF.catch((() => {}));
      try {
        AF = await CF
      } catch (uF) {
        throw new kd.d("decode", FF, {
          cause: uF
        })
      }
      return {
        id: (0, kd.o)(AF),
        width: AF.width,
        height: AF.height
      }
    }
    var ob = SF(2357),
      Yb = SF(32952);
    const Mb = ob.d.length;

    function cd(FF) {
      const WF = [],
        SF = [];
      ob.d.forEach(((CF, AF) => {
        var uF;
        const hF = null !== (uF = Gb(FF[CF])) && void 0 !== uF ? uF : Yb.j[CF];
        "custom" === hF.type ? (SF.push({
          id: AF,
          kind: XS.Jb.KindCustom,
          set: WF.length,
          earth: null
        }), WF.push({
          urls: [hF.px, hF.py, hF.pz, hF.nx, hF.ny, hF.nz],
          orientation: "none"
        })) : SF.push({
          id: AF,
          kind: XS.Jb.KindEarth,
          set: 0,
          earth: hF
        })
      }));
      const CF = Gb(FF.earth);
      "earth" === (null === CF || void 0 === CF ? void 0 : CF.type) && SF.push({
        id: Mb,
        kind: XS.Jb.KindEarth,
        set: 0,
        earth: CF
      });
      const AF = WF.length;
      WF.push({
        urls: Yb.d.map((FF => Yb.f + FF)),
        orientation: "none"
      }), WF.push({
        urls: [Yb.h],
        orientation: "flipY"
      }), WF.push({
        urls: [Yb.b],
        orientation: "flipY"
      });
      const uF = new Uint8Array(XS.Jb.SkyTableHeaderBytes + SF.length * XS.Jb.SkyTableEntryBytes),
        hF = new DataView(uF.buffer);
      return hF.setUint16(0, AF, !0), hF.setUint16(2, AF + 1, !0), hF.setUint16(4, AF + 2, !0), hF.setUint16(6, SF.length, !0), SF.forEach(((FF, WF) => {
        const SF = XS.Jb.SkyTableHeaderBytes + WF * XS.Jb.SkyTableEntryBytes;
        hF.setUint16(SF, FF.id, !0), hF.setUint8(SF + 2, FF.kind);
        const CF = SF + 4;
        FF.earth ? function(FF, WF, SF) {
          const CF = FF;
          let AF = 0,
            uF = 0;
          for (const [hF, bW] of zd) {
            const FF = CF[hF];
            "number" === typeof FF && Number.isFinite(FF) && (WF.setFloat32(SF + 4 * bW, FF, !0), AF |= 1 << bW)
          }
          for (const [hF, bW, dF] of Ib) {
            const FF = CF[hF];
            Array.isArray(FF) && 3 === FF.length && FF.every((FF => "number" === typeof FF && Number.isFinite(FF))) && (FF.forEach(((FF, CF) => {
              WF.setFloat32(SF + dF + 4 * CF, FF, !0)
            })), AF |= bW)
          }
          fb.forEach(((FF, uF) => {
            let [hF, bW] = FF;
            const dF = CF[hF];
            "number" === typeof dF && Number.isFinite(dF) && (WF.setFloat32(SF + XS.h.CameraOffsetAt + 4 * uF, dF, !0), AF |= bW)
          }));
          for (const [hF, bW] of yd) {
            const FF = CF[hF];
            null !== FF && void 0 !== FF && (AF |= bW, FF && (uF |= bW >>> 14))
          }
          WF.setUint32(SF + XS.h.PresentAt, AF, !0), WF.setUint8(SF + XS.h.FlagsAt, uF)
        }(FF.earth, hF, CF) : hF.setUint16(CF, FF.set, !0)
      })), {
        payload: uF,
        sets: WF
      }
    }

    function Gb(FF) {
      if ("object" !== typeof FF || null === FF) return null;
      const WF = FF;
      if ("earth" === WF.type) return FF;
      return "custom" === WF.type && ["px", "py", "pz", "nx", "ny", "nz"].every((FF => {
        const SF = WF[FF];
        return "string" === typeof SF && SF.length > 0
      })) ? FF : null
    }
    const zd = [
        ["inclination", XS.h.Inclination],
        ["turbidity", XS.h.Turbidity],
        ["luminance", XS.h.Luminance],
        ["rayleigh", XS.h.Rayleigh],
        ["mieCoefficient", XS.h.MieCoefficient],
        ["mieDirectionalG", XS.h.MieDirectionalG],
        ["distance", XS.h.Distance],
        ["azimuth", XS.h.Azimuth]
      ],
      Ib = [
        ["sunPosition", XS.h.SunPosition, XS.h.SunPositionAt],
        ["up", XS.h.Up, XS.h.UpAt],
        ["vertexTint", XS.h.VertexTint, XS.h.VertexTintAt]
      ],
      fb = [
        ["xCameraOffset", XS.h.CameraOffsetX],
        ["yCameraOffset", XS.h.CameraOffsetY],
        ["zCameraOffset", XS.h.CameraOffsetZ]
      ],
      yd = [
        ["useSunPosition", XS.h.UseSunPosition],
        ["dithering", XS.h.Dithering],
        ["infiniteDistance", XS.h.InfiniteDistance]
      ];

    function sb(FF, WF, SF) {
      const CF = new Hb({
        writeCmd: FF,
        warn: WF,
        followPack: nb(SF, WF)
      });
      return CF.start(), CF
    }

    function nb(FF, WF) {
      return SF => {
        let CF = () => {};
        const AF = FF((FF => {
          CF(), CF = () => {}, null !== FF ? CF = FF.subscribe((FF => {
            SF(function(FF, WF, SF) {
              if ("object" !== typeof FF || null === FF) return null;
              const CF = FF.skyBoxes;
              if ("object" !== typeof CF || null === CF) return null;
              if ("player" === WF) return CF;
              return Object.fromEntries(Object.entries(CF).filter((FF => {
                let [WF, CF] = FF;
                return !! function(FF) {
                  if ("object" !== typeof FF || null === FF) return !1;
                  return "earth" === FF.type || Object.entries(FF).every((FF => {
                    let [WF, SF] = FF;
                    return "type" === WF || ("" === (CF = SF) || null !== function(FF) {
                      var WF, SF, CF;
                      return "string" !== typeof FF ? null : null !== (WF = null === (SF = Kb.exec(FF)) || void 0 === SF || null === (CF = SF.groups) || void 0 === CF ? void 0 : CF.base64) && void 0 !== WF ? WF : null
                    }(CF));
                    var CF
                  }))
                }(CF) || (SF(`Ignoring texture pack skybox ${WF}, whose faces are not all data URLs`, null), !1)
              })))
            }(FF.pack, null === FF.gameSource ? "player" : "customGame", WF))
          })) : SF(null)
        }));
        return () => {
          AF(), CF()
        }
      }
    }
    class Hb {
      constructor(FF) {
        var WF, SF, CF;
        this.host = FF, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.DC = !1, this.wait = null !== (WF = FF.wait) && void 0 !== WF ? WF : (FF, WF) => {
          setTimeout(WF, FF)
        }, this.loader = new Db({
          loadImage: null !== (SF = FF.loadImage) && void 0 !== SF ? SF : Zb,
          hPF: null !== (CF = FF.hPF) && void 0 !== CF ? CF : kd.q,
          sendReady: FF => {
            this.queue.push({
              kind: XS.Jb.SkyImagesReady,
              payload: FF
            })
          },
          onLoadFailed: (WF, SF, CF) => {
            FF.warn(`sky image set ${WF} (${SF}) didn't load: the last sky stays`, CF)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(qd.e, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((FF => {
          this.write(null !== FF && void 0 !== FF ? FF : {})
        }))
      }
      onEvent(FF) {
        this.loader.onEvent(FF)
      }
      drain() {
        if (0 === this.queue.length) return;
        let FF = 0;
        for (; FF < this.queue.length && this.host.writeCmd(this.queue[FF].kind, 0, this.queue[FF].payload);) FF++;
        FF > 0 && this.queue.splice(0, FF)
      }
      dispose() {
        this.DC = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(FF) {
        if (this.DC) return;
        const WF = cd(FF);
        var SF, CF;
        this.written && (SF = this.written, CF = WF, SF.payload.length === CF.payload.length && SF.payload.every(((FF, WF) => FF === CF.payload[WF])) && SF.sets.length === CF.sets.length && SF.sets.every(((FF, WF) => {
          const SF = CF.sets[WF];
          return FF.orientation === SF.orientation && FF.urls.length === SF.urls.length && FF.urls.every(((FF, WF) => FF === SF.urls[WF]))
        }))) || (this.written = WF, this.loader.reset(WF.sets), this.queue = this.queue.filter((FF => FF.kind !== XS.Jb.SkyImagesReady)), this.queue.push({
          kind: XS.Jb.SkyTable,
          payload: WF.payload
        }))
      }
    }
    const Kb = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var wb = SF(147),
      Xb = SF(153),
      Ub = SF(2216),
      Bb = SF(2223),
      jd = SF(2232),
      vd = SF(2236),
      Jb = SF(2250),
      pb = SF(107);
    class lb {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, MA.h)(tA.C, (FF => {
          this.onReply((0, YA.h)(tA.C, FF), performance.now())
        }))
      }
      onFrame(FF, WF) {
        null === this.id ? this.id = FF : FF !== this.id && (this.id = FF, this.sentMs = document.hidden ? null : WF)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(FF, WF) {
        FF === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(WF - this.sentMs), this.sentMs = null)
      }
      take() {
        const FF = this.roundTripMs;
        return this.roundTripMs = null, FF
      }
      stop() {
        this.stopReplies()
      }
    }
    class Fd {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(FF, WF, SF, CF) {
        const AF = FF - this.sampled >>> 0,
          uF = WF - this.timed >>> 0,
          hF = SF - this.frameUs >>> 0,
          bW = this.primed;
        return this.sampled = FF, this.timed = WF, this.frameUs = SF, this.primed = !0, !(!bW || AF > 64 || uF > 64) && (CF && hF <= 1e6 * uF && (this.windowTimed += uF, this.windowUs += hF), CF && AF > 0)
      }
      reset() {}
      snapshotAndReset() {
        const FF = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: FF,
          submitToDoneMs: null
        }
      }
    }
    var Wd = SF(8187),
      Sd = SF(38853);
    const Cd = {
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
      Ad = {
        webgpu: "rust_webgpu",
        webgl: "rust_webgl2",
        webgl1: "rust_webgl1"
      };

    function ud(FF) {
      return new hd(FF)
    }
    class hd {
      constructor(FF) {
        this.shell = FF, this.tracker = new Bb.e, this.gpu = new Fd, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new lb, this.pacedCpuMs = 0, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, Wd.c)(FF.backend, FF.canvas, FF.adapterVendor), this.tracker.start((() => !FF.inGame()), this.gpu), document.addEventListener("visibilitychange", this.onVisibility), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(FF) {
        this.tracker.onAnimationFrame(FF)
      }
      frameRan(FF, WF, SF, CF) {
        this.ping.onFrame(FF.headerWord(XS.A.PingSent), SF);
        const AF = this.tracker,
          uF = FF.headerWord(XS.A.TickUs) / 1e3 + (0, SC.J)();
        AF.eD(uF);
        const hF = Math.max(0, SF - WF - uF);
        if ("drawn" !== CF) return void("paced" === CF && (this.pacedCpuMs += hF));
        this.followGame(), AF.onFrameStart(WF);
        this.gpu.onFrame(FF.headerWord(XS.A.GpuSampled), FF.headerWord(XS.A.GpuTimed), FF.headerWord(XS.A.GpuFrameUs), AF.isSampling()) && AF.onGpuSampleStarted(), AF.onFrameCpu(hF + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(WF)
      }
      stop() {
        for (const FF of this.timers) clearInterval(FF);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const FF = this.shell.joinedGame();
        return FF !== this.game && (this.game = FF, this.tracker.snapshotAndReset(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== FF
      }
      countFpsFrame(FF) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = FF
        }
        this.fpsFrames++;
        const WF = FF - this.fpsSpanStartMs;
        if (!(WF < 15e3)) {
          if (!document.hidden) {
            const FF = 1e3 * this.fpsFrames / WF;
            this.firstSpanFps ??= FF, this.initialFps = this.firstSpanFps, this.fpsOverTime = FF
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = FF
        }
      }
      flush() {
        const FF = this.followGame(),
          {
            cpuFrameMs: WF,
            refreshHz: SF,
            cpuBottleneck: AF,
            frameIntervalCv: uF,
            ...hF
          } = this.tracker.snapshotAndReset(),
          bW = this.shell.inGame(),
          dF = bW && this.inGameAtLastFlush ? hF : Ub.i;
        if (this.inGameAtLastFlush = bW, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !FF) return;
        const PF = performance.now(),
          RF = (0, Jb.q)((0, Jb.o)(PF), this.unsentPage),
          iW = function(FF, WF, SF, AF, uF, hF, bW) {
            var dF, PF, RF;
            const iW = {},
              {
                canvas: eF
              } = FF;
            for (const EF of (0, wb.v)()) {
              const QF = EF.name;
              let rW;
              if ((0, Xb.d)(QF)) rW = (0, Jb.b)(QF);
              else if ((0, Jb.h)(QF)) rW = bW[QF];
              else switch (QF) {
                case "fps":
                  rW = SF;
                  break;
                case "qE":
                  rW = AF;
                  break;
                case "QE":
                  rW = (0, Sd.f)().n;
                  break;
                case "OE":
                  rW = Math.max(eF.width, eF.height);
                  break;
                case "ZE":
                  rW = Math.min(eF.width, eF.height);
                  break;
                case "sE":
                  rW = navigator.hardwareConcurrency || null;
                  break;
                case "aE":
                  rW = (0, yu.getWebGpuSupported)();
                  break;
                case "piF":
                  rW = null === FF.fallbackReason ? null : Cd[FF.fallbackReason];
                  break;
                case "pE":
                  rW = WF.cpuFrameMs;
                  break;
                case "lE":
                  rW = WF.refreshHz;
                  break;
                case "FQ":
                  rW = WF.cpuBottleneck;
                  break;
                case "EQ":
                  rW = WF.frameIntervalCv;
                  break;
                case "Qr":
                  rW = WF.frameMs;
                  break;
                case "atF":
                  rW = WF.tickMs;
                  break;
                case "eT":
                  rW = WF.mainBusyShare;
                  break;
                case "wT":
                  rW = WF.mainProbeDelayMs;
                  break;
                case "aT":
                  rW = WF.longAnimationFramesPerMin;
                  break;
                case "jT":
                  rW = WF.longAnimationFrameTimeShare;
                  break;
                case "XT":
                  rW = WF.gpuPassMs;
                  break;
                case "Kr":
                  rW = WF.gpuSubmitToDoneMs;
                  break;
                case "Lk":
                  rW = (0, wb.k)(uF);
                  break;
                case "uE":
                  rW = hF;
                  break;
                case "pT":
                case "oA":
                case "lT":
                case "zk":
                case "Fk":
                case "Wk":
                case "bq":
                case "Tk":
                case "Nk":
                case "Dk":
                case "mq":
                case "Zk":
                case "okF":
                case "Yk":
                case "zq":
                  rW = null;
                  break;
                case "xV":
                  rW = (0, yu.getPlatformType)();
                  break;
                case "oq":
                  rW = (0, yu.getGpuVendor)();
                  break;
                case "XE":
                  rW = Ad[FF.backend];
                  break;
                case "Yq":
                  rW = (0, pb.c)();
                  break;
                case "cV":
                  rW = (0, yu.getOperatingSystem)();
                  break;
                case "zV":
                  rW = (0, yu.getTrafficSource)();
                  break;
                case "Iq":
                  rW = null !== (dF = CF.b.get("gameEntrySource")) && void 0 !== dF ? dF : wb.n;
                  break;
                case "Ur":
                  rW = WF.frameLimiter;
                  break;
                case "RP":
                  rW = (0, jd.m)();
                  break;
                case "kE":
                  rW = null !== (PF = (0, vd.d)()) && void 0 !== PF ? PF : wb.n;
                  break;
                case "yV":
                  rW = (0, jd.e)(eF.width, eF.height);
                  break;
                case "wq":
                  rW = (0, wb.w)(-(new Date).getTimezoneOffset());
                  break;
                case "gR":
                  rW = null !== (RF = FF.fallbackReason) && void 0 !== RF ? RF : wb.n;
                  break;
                case "hq":
                  rW = "ready";
                  break;
                case "lq":
                  rW = (0, yu.getSoftwareRenderer)();
                  break;
                case "Jq":
                  rW = FF.shaderPackRuns() ? "true" : "false";
                  break;
                case "vV":
                case "hV":
                case "dV":
                case "Rk":
                case "oC":
                  rW = wb.n;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${QF}`)
              }
              if (void 0 === rW) throw new Error(`Metric ${QF} has no value`);
              iW[QF] = rW
            }
            return iW
          }(this.shell, {
            cpuFrameMs: WF,
            refreshHz: SF,
            cpuBottleneck: AF,
            frameIntervalCv: uF,
            ...dF
          }, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), RF);
        if (EF = this.shell.writeCmd, rW = eF.Mc, gW = function(FF) {
            const WF = (0, zW.f)((0, BW.e)(FF)),
              SF = new Uint8Array(QF.Bd.BYTES + WF.length);
            return new DataView(SF.buffer).setUint16(0, BW.b.AnalyticsUpdate, !0), SF.set(WF, QF.Bd.BYTES), SF
          }(iW), (0, XW.d)(), !EF(QF.i.Send, rW, gW)) return this.unsentPage = RF, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        var EF, rW, gW;
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, wb.g), (0, Jb.l)(this.fpsOverTime, this.initialFps, iW, PF)
      }
    }
    var bP = SF(37733);

    function dd(FF, WF, SF) {
      const CF = new Map;
      return (0, bP.b)(((FF, SF, CF) => WF.ah(FF, SF, CF)), ((WF, SF, AF) => {
        const uF = `${WF},${SF},${AF}`;
        return CF.has(uF) || CF.set(uF, (0, yS.d)(FF, WF, SF, AF)), CF.get(uF)
      }), SF)
    }
    var Pd = SF(37739),
      Rd = SF(38620);

    function iP(FF) {
      const WF = null !== FF && 0 !== (QF.m.playerFlags(FF.api.apiView, 0) & QF.ld.CursorAim);
      WF !== (0, Rd.q)() && (0, Rd.L)(WF, null !== FF)
    }

    function ed(FF) {
      return (0, gA.d)(tA.w, FF)
    }
    const Ed = new uF.g((FF => SF(40454)(`./${FF}/${FF}Client`)));
    let Qd = null,
      rP = null;
    async function gP(FF) {
      Qd ??= SF.e(24).then((() => SF(37488))).then((FF => {
        rP = FF.createDefaultClientPlugins
      }), (FF => {
        throw Qd = null, FF
      })), await Promise.all([Ed.load(FF), Qd])
    }

    function tP(FF) {
      FF.load(new IW(IC, new sC))
    }
    let Td = !1;
    const aP = new WeakMap;

    function kP(FF) {
      try {
        FF()
      } catch (WF) {
        console.error("[bloxd-wasm-client] a session-end step failed", WF)
      }
    }

    function qP(FF, WF) {
      ! function() {
        var FF, WF;
        GC.c.volume();
        const SF = GC.c;
        null === (FF = SF._autoResume) || void 0 === FF || FF.call(SF), null === (WF = SF._autoSuspend) || void 0 === WF || WF.call(SF)
      }(), WF.audio.prepare();
      const SF = new kW(WF.core, WF.memory, WF.audio);
      let uF;
      try {
        uF = new dA(SF, WF.options)
      } catch (eF) {
        return FF.crash(RA.y, eF), null
      }(0, dF.f)(PA(SF, uF));
      const RF = new td({
        running: FF,
        api: SF,
        core: WF.core,
        memory: WF.memory,
        staleOr: WF.staleOr,
        reportFault: WF.reportReplayFault,
        options: WF.options,
        sessionInfo: WF.sessionInfo,
        replayShaderPack: WF.replayShaderPack
      });
      (0, SC.A)();
      const iW = new ZC({
        api: SF,
        tables: uF,
        sessionInfo: WF.sessionInfo,
        gameFactory: FF => Ed.loadedFactory(FF),
        defaultPlugins: (FF, WF, SF, CF) => {
          if (null === rP) throw new Error("The default plugins started before they loaded");
          return rP(FF, WF, SF, CF)
        },
        serverOptions: WF.options,
        onNetEvent: FF => {
          RF.netEvent(FF), WF.onNetEvent(FF)
        },
        playSound: (FF, SF, CF, AF, uF, hF, bW) => WF.audio.playGame(FF, SF, CF, AF, uF, hF, bW),
        onSessionEnd: () => {
          kP(AF.q), kP(BC), kP((() => {
            CF.b.set({
              openInGameMenuName: null
            })
          })), kP((() => {
            WF.audio.cancelPreload()
          }))
        },
        beforeWrite: WF.beforeWrite,
        beforeOp: WF.beforeOp,
        cameraScreen: UC,
        showCameraFacing: jA,
        onEventOverflow: WF.onEventOverflow,
        screenBandY: bW.j,
        replayEntities: RF.entityHooks,
        hasPackModel: WF.hasPackModel
      });
      return iW.attach(FF), aP.set(iW, RF), cA(iW.items, WF.audio),
        function(FF) {
          FF.setClientFreeCameraGrant("isDev", !1);
          const WF = WF => {
            FF.setClientFreeCameraGrant("hasDeveloperRank", WF.playerHasRank("developer"))
          };
          (0, hF.l)("userContextUpdated", WF)
        }(iW), Td || (Td = !0, (0, hF.l)("appManagerUpdated|openInGameMenuName", (FF => {
          !FF && (0, PF.f)().includes("InGameMenu") && (0, PF.g)("InGameMenu")
        }))), iW
    }

    function Vd(FF) {
      try {
        FF.closeGame()
      } finally {
        var WF;
        null === (WF = aP.get(FF)) || void 0 === WF || WF.stop(), aP.delete(FF)
      }
    }
  },
  38700: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      e: () => hF
    });
    const CF = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function AF(FF) {
      if (FF instanceof WebAssembly.RuntimeError) return !0;
      const WF = FF instanceof Error ? FF.stack : void 0;
      return "string" === typeof WF && CF.test(WF)
    }
    const uF = 500;

    function hF(FF) {
      let WF = "[object Object]";
      try {
        WF = String(FF)
      } catch {}
      if ("[object Object]" !== WF) return WF;
      try {
        var SF, CF;
        return null !== (SF = null === (CF = JSON.stringify(FF)) || void 0 === CF ? void 0 : CF.slice(0, uF)) && void 0 !== SF ? SF : WF
      } catch {
        return WF
      }
    }
  },
  8331: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      i: () => uF
    });
    var CF = SF(8286);
    const AF = "Air",
      uF = Object.freeze(new CF.d(AF, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);