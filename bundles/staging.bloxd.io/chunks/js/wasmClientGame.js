export const id = 56;
export const ids = [56];
export const modules = {
  39050: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      g: () => bS
    });
    var tS = gS(31);

    function bS(SS) {
      return "refetchCode" === SS || "devDownloadJson" === SS || SS.startsWith("Plugin")
    }

    function XS(SS, HS) {
      "refetchCode" !== SS ? "Plugin|MobAiPlugin|ShowPetUi" !== SS ? Promise.all([gS.e(107), gS.e(108), gS.e(103), gS.e(105), gS.e(214)]).then((() => gS(41754))).then((gS => {
        let {
          runClientGameMessage: tS
        } = gS;
        tS(SS, HS)
      })).catch((HS => {
        console.error(`Game message ${SS} failed`, HS)
      })) : tS.k.cj("showPetUi", HS) : tS.k.cj("refetchCode")
    }
  },
  42596: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      f: () => bS
    });
    const tS = ["recording", "freecam", "keyframe"];

    function bS() {
      const SS = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(SS[1]) << 32n | BigInt(SS[0])
    }
  },
  34158: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      e: () => qS
    });
    var tS = gS(24);
    const bS = 24,
      XS = "farNametags",
      xS = 1e5;

    function NS() {
      var SS;
      return null === (SS = tS.b.get("showDistantNametags")) || void 0 === SS || SS
    }

    function qS() {
      var SS;
      return null !== (SS = function() {
        const SS = new URLSearchParams(window.location.search).get(XS),
          HS = null === SS || "" === SS ? NaN : Number(SS);
        return Number.isFinite(HS) && HS >= 0 ? Math.min(HS, xS) : null
      }()) && void 0 !== SS ? SS : NS() ? 0 : bS
    }
  },
  42593: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      blockIdOf: () => sq.e,
      clearWasmCameraScreen: () => gb,
      creativeItemIds: () => gt.creativeItemIds,
      decodeMapSettings: () => Fq,
      drainTextRerasters: () => yN.d,
      enchantmentPerksOf: () => gt.enchantmentPerksOf,
      endGameHost: () => tu,
      followCursorAim: () => Mq,
      followMenuPrefs: () => rb,
      loadAudio: () => eq,
      loadClientGame: () => mq,
      loadTextIcons: () => yN.g,
      rasterText: () => AN.c,
      readBoardToEdit: () => pq,
      readDrawCensus: () => Rq.f,
      setTextHost: () => yN.j,
      setTextLocalPlayer: () => yN.l,
      showInCreativeInvenOf: () => gt.showInCreativeInvenOf,
      startGameHost: () => gu,
      startShellAnalytics: () => Wq,
      startSkyFeed: () => bq,
      textChanged: () => yN.s,
      warmText: () => AN.d,
      wasmCameraScreen: () => Hb
    });
    gS(36518);
    var tS = gS(24),
      bS = gS(36841),
      XS = gS(39166),
      xS = gS(31),
      NS = gS(3540),
      qS = gS(36835),
      uS = gS(1366),
      IS = gS(665),
      fS = gS(38256),
      kS = gS(4926),
      aS = gS(40672),
      KS = gS(40612);
    const jS = KS.sb / 4,
      GS = KS.o.PlaySound,
      CS = KS.o.SoundReset,
      nS = kS.eb.ReplayFailed,
      PS = kS.eb.RecorderEvent;
    class QS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = SS, this.memory = HS, this.audio = gS, this.serverIds = new Int32Array(256).fill(KS.Sc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(KS.t.BYTES)), this.renderPtr = 0, this.hf = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new KS.N(SS, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.bbS(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(SS, HS) {
        const gS = this.eventView();
        return new Uint8Array(gS.buffer, gS.byteOffset + SS, HS)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return KS.t.localId(this.apiView, 0)
      }
      localDeaths() {
        return KS.t.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const SS = this.apiView,
          HS = KS.t.entRenderPtr(SS, 0),
          gS = KS.t.entVisPtr(SS, 0),
          tS = KS.t.entCapacity(SS, 0);
        if (HS !== this.renderPtr || gS !== this.visPtr || tS !== this.hf || this.renderBuffer !== this.buffer) {
          this.renderPtr = HS, this.visPtr = gS, this.hf = tS, this.renderBuffer = this.buffer;
          const SS = this.memoryView(Float32Array, HS, tS * jS, "the render array"),
            bS = this.memoryView(Uint8Array, gS, tS, "the visibility array");
          this.renderCapacity = SS && bS ? tS : 0, this.render = SS && bS ? SS : new Float32Array(0), this.vis = SS && bS ? bS : new Uint8Array(0)
        }
      }
      memoryView(SS, HS, gS, tS) {
        try {
          return (0, aS.m)(SS, this.memory().buffer, HS, gS, tS)
        } catch (bS) {
          return this.keepCorruption(bS), null
        }
      }
      memoryData(SS, HS, gS, tS) {
        try {
          return (0, aS.c)(this.memory().buffer, SS, HS, gS, tS)
        } catch (bS) {
          return this.keepCorruption(bS), null
        }
      }
      reportCorruption(SS) {
        this.keepCorruption(new aS.b(SS))
      }
      keepCorruption(SS) {
        if (!(SS instanceof aS.b)) throw SS;
        this.corruption ??= SS
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(SS, HS, gS) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: tS,
          len: bS
        } = SS;
        this.eventsPtr = tS, this.eventsLen = bS, this.eventsBuffer = null;
        const XS = this.eventView();
        for (let uS = 0; uS < bS;) {
          const SS = XS.getUint32(uS, !0),
            gS = 65535 & SS,
            tS = SS >>> 16,
            bS = uS + kS.ab;
          if (gS === KS.o.EntitySpawned) {
            var xS;
            if (tS !== KS.yb.BYTES) throw JS(gS, uS, tS);
            const SS = KS.yb.serverId(XS, bS);
            this.spawned(SS, KS.yb.index(XS, bS), KS.yb.kind(XS, bS)), null === (xS = HS.entityAdded) || void 0 === xS || xS.call(HS, SS)
          } else if ((gS === KS.o.ChunkSlot || gS === KS.o.EntityInfoChanged) && !(0, KS.Zd)(gS, XS, bS, tS, HS)) throw JS(gS, uS, tS);
          uS = bS + (0, kS.ue)(tS)
        }
        try {
          var NS;
          null === (NS = HS.afterPrescan) || void 0 === NS || NS.call(HS), this.throwCorruption(), !gS() && this.dispatch(SS, HS, gS) && (this.throwCorruption(), this.applyListener(), HS.afterWalk(SS.kind)), this.throwCorruption()
        } catch (qS) {
          throw qS instanceof aS.b && (this.corruption ??= qS), qS
        } finally {
          gS() || null !== this.corruption || this.applyDespawns(bS, HS)
        }
      }
      applyDespawns(SS, HS) {
        const gS = this.eventView();
        for (let bS = 0; bS < SS;) {
          const SS = gS.getUint32(bS, !0),
            XS = bS + kS.ab;
          if ((65535 & SS) === KS.o.EntityDespawned && SS >>> 16 === KS.yb.BYTES) {
            const SS = KS.yb.serverId(gS, XS);
            var tS;
            if (this.despawned(SS, KS.yb.index(gS, XS))) null === (tS = HS.entityRemoved) || void 0 === tS || tS.call(HS, SS)
          }
          bS = XS + (0, kS.ue)(SS >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(SS, HS, gS) {
        const {
          len: tS,
          net: bS,
          netOffsets: XS
        } = SS;
        let xS = this.eventView(),
          NS = 0;
        for (let wS = 0; wS < tS;) {
          const SS = xS.getUint32(wS, !0),
            tS = 65535 & SS,
            hS = SS >>> 16,
            OS = wS + kS.ab;
          let dS = !1;
          if (NS < bS.length && XS[NS] === wS) HS.netEvent(bS[NS]), NS++, dS = !0;
          else if (tS === kS.eb.LocalPlayerBound) {
            var qS;
            if (hS !== kS.Tb) throw JS(tS, wS, hS);
            null === (qS = HS.localPlayerBound) || void 0 === qS || qS.call(HS, xS.getInt32(OS, !0)), dS = !0
          } else if (tS === kS.eb.LocalHurt) {
            var uS;
            if (hS !== kS.Qb) throw JS(tS, wS, hS);
            null === (uS = HS.localHurt) || void 0 === uS || uS.call(HS, xS.getInt32(OS, !0), xS.getFloat32(OS + 4, !0), xS.getUint32(OS + 8, !0)), dS = !0
          } else if (tS === kS.eb.AttackHit) {
            var IS;
            if (hS !== kS.b) throw JS(tS, wS, hS);
            const SS = xS.getFloat32(OS, !0),
              gS = xS.getFloat32(OS + 4, !0),
              bS = xS.getFloat32(OS + 8, !0),
              XS = xS.getUint32(OS + 12, !0);
            null === (IS = HS.attackHit) || void 0 === IS || IS.call(HS, SS, gS, bS, 0 !== (XS & kS.m.Crit), 0 !== (XS & kS.m.HitSelf))
          } else if (tS === kS.eb.PhysicsType) {
            var fS;
            if (hS !== kS.sc) throw JS(tS, wS, hS);
            null === (fS = HS.physicsType) || void 0 === fS || fS.call(HS, xS.getUint32(OS, !0), xS.getInt32(OS + 4, !0)), dS = !0
          } else if (tS === kS.eb.VehicleEffect) {
            var aS;
            const SS = ZS(xS, OS, hS);
            if (null === SS) throw JS(tS, wS, hS);
            null === (aS = HS.vehicleEffect) || void 0 === aS || aS.call(HS, SS.op, SS.name, SS.icon, SS.level, SS.durationMs), dS = !0
          } else if (tS === kS.eb.ZoomChanged) {
            var jS;
            if (hS !== kS.$d) throw JS(tS, wS, hS);
            null === (jS = HS.zoomChanged) || void 0 === jS || jS.call(HS, xS.getFloat32(OS, !0), xS.getUint8(OS + 4)), dS = !0
          } else if (tS === kS.eb.ZoomDisabled) {
            var QS;
            if (0 !== hS) throw JS(tS, wS, hS);
            null === (QS = HS.zoomDisabled) || void 0 === QS || QS.call(HS), dS = !0
          } else if (tS === kS.eb.GameCamera) {
            var DS;
            null === (DS = HS.gameCamera) || void 0 === DS || DS.call(HS, new Uint8Array(xS.buffer, xS.byteOffset + OS, hS).slice()), dS = !0
          } else if (tS === KS.o.ChunkSlot || tS === KS.o.EntityInfoChanged);
          else if (tS >= GS && tS <= CS) {
            if (this.audio && !this.audio.onAudioEvent(tS, xS, OS, hS)) throw JS(tS, wS, hS)
          } else if (tS >= nS && tS <= PS) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(tS, xS, OS, hS)) throw JS(tS, wS, hS);
              dS = !0
            }
          } else if (tS >= KS.dd && tS <= KS.fd && tS !== kS.eb.EnvLighting) {
            if (!(0, KS.Zd)(tS, xS, OS, hS, HS)) throw JS(tS, wS, hS);
            dS = !0
          }
          if (dS) {
            if (gS()) return !1;
            xS = this.eventView()
          }
          wS = OS + (0, kS.ue)(hS)
        }
        return !gS()
      }
      applyListener() {
        var SS;
        if (!this.audio) return;
        const HS = KS.t.audioViewPtr(this.apiView, 0),
          gS = this.memory().buffer;
        let tS = this.audioView;
        (null === (SS = tS) || void 0 === SS ? void 0 : SS.buffer) === gS && tS.byteOffset === HS || (tS = (0, aS.c)(gS, HS, KS.w.BYTES, 8, "the audio view"), this.audioView = tS), tS && this.audio.applyListener(tS)
      }
      indexOf(SS) {
        return this.indexById.get("number" === typeof SS ? SS : +SS)
      }
      isLocal(SS) {
        return SS !== KS.Sc && SS === KS.t.localId(this.apiView, 0)
      }
      lC(SS) {
        const HS = [0, 0, 0];
        return this.readPosition("number" === typeof SS ? SS : +SS, HS) ? HS : null
      }
      readPosition(SS, HS) {
        const gS = this.apiView;
        if (void 0 !== this.indexById.get(SS) && this.isLocal(SS)) {
          for (let SS = 0; SS < 3; SS++) HS[SS] = KS.t.localPos(gS, 0, SS);
          return !0
        }
        return this.readDrawnPosition(SS, HS)
      }
      readDrawnPosition(SS, HS) {
        const gS = this.apiView,
          tS = this.indexById.get(SS);
        if (void 0 === tS || tS >= this.renderCapacity) return HS[0] = HS[1] = HS[2] = NaN, !1;
        const bS = tS * jS;
        for (let XS = 0; XS < 3; XS++) HS[XS] = this.render[bS + XS] + KS.t.origin(gS, 0, XS);
        return !0
      }
      checkValid(SS) {
        return void 0 !== this.indexOf(SS)
      }
      isAlive(SS) {
        const HS = this.indexOf(SS);
        if (void 0 === HS) return null;
        if (this.ensureViews(), HS >= this.renderCapacity) return null;
        const gS = this.vis[HS];
        return 0 === gS ? null : 0 !== (gS & KS.Xd.Alive)
      }
      getEntityType(SS) {
        const HS = this.indexOf(SS);
        return void 0 === HS ? this.isLocal("number" === typeof SS ? SS : +SS) ? "Player" : null : wS(this.kinds[HS])
      }
      spawned(SS, HS, gS) {
        if (HS >= 1048576) throw new aS.b(`entity ${SS} spawned at index ${HS}`);
        this.ensureIndex(HS), this.serverIds[HS] === SS && null !== this.idStr[HS] || (this.idStr[HS] = String(SS)), this.serverIds[HS] = SS, this.kinds[HS] = gS, this.indexById.set(SS, HS)
      }
      despawned(SS, HS) {
        let gS = !1;
        return this.indexById.get(SS) === HS && (this.indexById.delete(SS), gS = !0), HS < this.serverIds.length && this.serverIds[HS] === SS && (this.serverIds[HS] = KS.Sc, this.kinds[HS] = 0, this.idStr[HS] = null), gS
      }
      ensureIndex(SS) {
        const HS = this.serverIds.length;
        if (SS < HS) return;
        let gS = 2 * HS;
        for (; gS <= SS;) gS *= 2;
        const tS = new Int32Array(gS).fill(KS.Sc);
        tS.set(this.serverIds), this.serverIds = tS;
        const bS = new Uint16Array(gS);
        bS.set(this.kinds), this.kinds = bS;
        for (let XS = HS; XS < gS; XS++) this.idStr.push(null)
      }
      eventView() {
        const SS = this.memory().buffer;
        return SS !== this.eventsBuffer && (this.eventsBuffer = SS, this.events = new DataView(SS, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const SS = this.memory().buffer;
        this.buffer = SS, this.viewPtr < 0 && (this.viewPtr = this.core.xbS()), this.view = new DataView(SS, this.viewPtr, KS.t.BYTES), this.rereadDirectory()
      }
    }

    function DS(SS) {
      return SS >>> KS.e === KS.r.Item
    }

    function wS(SS) {
      var HS, gS;
      const tS = SS & KS.g;
      switch (SS >>> KS.e) {
        case KS.r.Lifeform:
          return null !== (HS = IS.j[tS]) && void 0 !== HS ? HS : null;
        case KS.r.Throwable:
          return null !== (gS = fS.m[tS]) && void 0 !== gS ? gS : null;
        case KS.r.Mesh:
          return "Mesh";
        case KS.r.Audio:
          return "AudioEntity";
        case KS.r.Item:
          return "Item";
        default:
          return null
      }
    }
    const hS = new TextDecoder;

    function ZS(SS, HS, gS) {
      if (gS < kS.Hd.HEAD_BYTES) return null;
      const tS = SS.getUint32(HS, !0),
        bS = SS.getUint32(HS + 20, !0),
        XS = SS.getUint32(HS + 24, !0),
        xS = kS.Hd.HEAD_BYTES + (0, kS.ue)(bS);
      if (tS !== kS.Hd.UPDATE && tS !== kS.Hd.REMOVE || bS > gS || xS + XS > gS) return null;
      const NS = (gS, tS) => hS.decode(new Uint8Array(SS.buffer, SS.byteOffset + HS + gS, tS)),
        qS = SS.getFloat64(HS + 12, !0);
      return {
        op: tS,
        level: SS.getFloat64(HS + 4, !0),
        durationMs: Number.isNaN(qS) ? null : qS,
        name: NS(kS.Hd.HEAD_BYTES, bS),
        icon: NS(xS, XS)
      }
    }

    function JS(SS, HS, gS) {
      return new aS.b(`event ${SS} at ${HS} of ${gS} bytes`)
    }
    var OS = gS(387),
      dS = gS(1309),
      cS = gS(39050),
      vS = gS(2077),
      ES = gS(41042),
      LS = gS(2022),
      YS = gS(39185),
      AS = gS(39210),
      yS = gS(39193),
      VS = gS(40658),
      iS = gS(2517),
      WS = gS(39178),
      zS = gS(39202);
    const US = Math.max(KS.ib.BYTES, KS.$.BYTES, KS.db.BYTES);

    function pS(SS) {
      if (!(0, zS.e)(SS)) return null;
      const HS = Number(SS);
      return (0 | HS) === HS ? HS : null
    }
    class sS {
      constructor(SS) {
        this.api = SS, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, WS.n)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.SX = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = KS.Sc, this.localName = String(KS.Sc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.SX = null;
        const SS = this.api.queries.directorView() >= KS.ib.BYTES ? this.scratchView() : null;
        null !== SS && (this.defaultFov = (0, LS.D)(KS.ib.fov(SS, 0)), this.baseFov = (0, LS.D)(KS.ib.baseFov(SS, 0)), this.aspect = KS.ib.aspect(SS, 0), this.bodyHeading = KS.ib.bodyHeading(SS, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(SS) {
        this.viewHeading = SS
      }
      get localPlayerId() {
        const SS = KS.t.localId(this.api.apiView, 0);
        return SS !== this.localId && (this.localId = SS, this.localName = String(SS)), this.localName
      }
      getEntityPosition(SS) {
        return this.readEntity(SS) ? this.entityFeet : null
      }
      getEntityAimPoint(SS) {
        return this.readEntity(SS) ? this.entityAim : null
      }
      getEntityHeading(SS) {
        const HS = pS(SS);
        if (null === HS) return null;
        const gS = KS.t.localId(this.api.apiView, 0);
        return HS === gS && gS !== KS.Sc ? this.viewHeading : this.readEntity(SS) ? this.entityHeading : null
      }
      raycastTerrain(SS, HS, gS) {
        const tS = this.api.queries.cameraSweep(SS[0], SS[1], SS[2], HS[0], HS[1], HS[2], gS);
        return tS < gS - 1e-6 ? tS : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const SS = this.defaultPose;
        SS.fov = this.defaultFov;
        const HS = this.api.queries.directorDefaultPose() >= KS.$.BYTES ? this.scratchView() : null;
        if (null === HS) return SS;
        for (let gS = 0; gS < 3; gS++) SS.position[gS] = KS.$.eye(HS, 0, gS);
        return SS.heading = KS.$.heading(HS, 0), SS.pitch = KS.$.pitch(HS, 0), SS
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
      readEntity(SS) {
        const HS = pS(SS);
        if (null === HS) return !1;
        if (HS === this.SX) return this.entityLive;
        this.SX = HS;
        const gS = this.api.queries.directorEntity(HS) >= KS.db.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== gS, null === gS) return !1;
        for (let tS = 0; tS < 3; tS++) this.entityFeet[tS] = KS.db.feet(gS, 0, tS), this.entityAim[tS] = this.entityFeet[tS];
        return this.entityAim[1] += KS.db.eyeHeight(gS, 0), this.entityHeading = KS.db.heading(gS, 0), !0
      }
      scratchView() {
        const SS = this.api.scratch(),
          HS = this.api.memory().buffer,
          gS = this.scratch;
        return null !== gS && gS.buffer === HS && gS.byteOffset === SS ? gS : (this.scratch = this.api.memoryData(SS, US, 8, "the director's record"), this.scratch)
      }
    }
    const BS = {
        mode: "default"
      },
      MS = {
        show: () => {},
        clear: () => {}
      };

    function FS() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class RS {
      constructor(SS) {
        this.options = SS, this.gk = void 0, this.director = void 0, this.latest = BS, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          tL: 0,
          qL: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.ck = new Int32Array(3 * KS.Jd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * KS.Jd), this.gk = new sS(SS.api), this.director = new yS.c(this.gk)
      }
      settingsChanged(SS) {
        let HS = BS;
        if (SS.length > 0) try {
          HS = (0, VS.c)(SS)
        } catch {}
        this.latest = HS, this.pending = HS
      }
      call(SS, HS, gS, tS, bS, XS) {
        var xS, NS;
        let qS;
        this.holding = !1;
        try {
          qS = this.answer(SS, HS, gS, tS, bS, XS)
        } catch (kS) {
          var uS, IS;
          throw this.answeredPose = !1, null === (uS = (IS = this.options).showFacing) || void 0 === uS || uS.call(IS, null), kS
        }
        const fS = this.answeredPose && 0 === (tS & KS.eb.Held);
        return this.answeredPose = qS !== KS.Z.None, this.holding = this.answeredPose && !fS, null === (xS = (NS = this.options).showFacing) || void 0 === xS || xS.call(NS, this.holding ? this.facing : null), qS
      }
      holdsView() {
        return this.holding
      }
      answer(SS, HS, gS, tS, bS, XS) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          gk: xS
        } = this;
        xS.readView();
        if (0 !== (tS & KS.eb.Held) || xS.setViewHeading((0, YS.s)(xS.bodyHeading)), void 0 !== this.pending) {
          const SS = this.pending;
          this.pending = void 0, this.director.setSettings(SS), this.syncShownSettings()
        }
        this.readLook((0, iS.e)(HS), (0, iS.e)(gS), tS, (0, iS.e)(bS), (0, iS.e)(XS));
        const NS = this.director.update(SS / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !NS) return KS.Z.None;
        const [qS, uS, IS] = NS.position;
        if (0 === this.options.api.queries.directorPose(qS, uS, IS, (0, YS.s)(NS.heading), (0, YS.d)(NS.pitch), (0, LS.m)(NS.fov))) return KS.Z.None;
        if ("default" === this.director.getSettings().mode) return KS.Z.Pose;
        switch (this.facing) {
          case "camera":
            return KS.Z.FaceCamera;
          case "cursor":
            return KS.Z.FaceCursor;
          default:
            return KS.Z.FaceMovement
        }
      }
      afterFrame(SS) {
        SS ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = BS, this.idle()
      }
      restart() {
        const SS = this.holding;
        this.idle(), this.holding = SS
      }
      idle() {
        var SS, HS;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new yS.c(this.gk), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (SS = (HS = this.options).showFacing) || void 0 === SS || SS.call(HS, null), this.setCentres(0)
      }
      syncShownSettings() {
        const SS = this.director.getSettings();
        if (SS === this.shownSettings) return;
        this.shownSettings = SS;
        const HS = (0, AS.f)(SS);
        this.facing = HS.facing, this.mouseTurns = HS.mouseTurns
      }
      readLook(SS, HS, gS, tS, bS) {
        const XS = this.look,
          xS = 0 !== (gS & KS.eb.LookPointed);
        if (null === this.mouseTurns && !xS) return XS.tL = 0, XS.qL = 0, void(XS.pointedAt = void 0);
        let NS;
        xS && (this.pointedAt.heading = tS, this.pointedAt.pitch = bS, NS = this.pointedAt);
        const {
          gk: qS
        } = this;
        qS.setViewHeading((0, AS.b)(qS.getViewHeading(), SS, HS, NS, "look" === this.mouseTurns, XS))
      }
      writeCentres(SS) {
        const HS = this.next,
          gS = Math.min(SS.length, KS.Jd);
        for (let tS = 0; tS < gS; tS++)
          for (let gS = 0; gS < 3; gS++) HS[3 * tS + gS] = Math.floor(SS[tS][gS] / KS.A);
        this.setCentres(gS)
      }
      setCentres(SS) {
        const {
          ck: HS,
          next: gS
        } = this;
        let tS = SS === this.centresLen;
        for (let bS = 0; tS && bS < 3 * SS; bS++) tS = HS[bS] === gS[bS];
        tS || (HS.fill(0), HS.set(gS.subarray(0, 3 * SS)), this.centresLen = SS, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const SS = this.options.cmd();
        null !== SS && (0, KS.yf)(SS, 0, this.ck, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var SS, HS, gS;
        return null !== (SS = null === (HS = (gS = this.options).screen) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : MS
      }
      hidden() {
        var SS;
        return (null !== (SS = this.options.isPageHidden) && void 0 !== SS ? SS : FS)()
      }
      now() {
        var SS, HS, gS;
        return null !== (SS = null === (HS = (gS = this.options).now) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : performance.now()
      }
    }
    var TS = gS(40811);
    const oS = KS.A * KS.A * KS.A,
      lS = Math.log2(KS.A),
      mS = KS.A - 1,
      eS = KS.J.BYTES / 4,
      rS = new Uint16Array(oS);

    function SH(SS, HS, gS) {
      return SS * KS.A * KS.A + HS * KS.A + gS
    }
    class HH {
      constructor(SS) {
        this.chunk = SS
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(SS, HS, gS) {
        return SH(SS, HS, gS)
      }
    }
    class gH {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class tH {
      constructor(SS, HS, gS, tS) {
        this.table = SS, this.slot = HS, this.generation = gS, this.epoch = tS, this.Lk = new HH(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = rS, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get mK() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get Ya() {
        const SS = this.gameVoxels(),
          HS = this.layers ??= new Uint16Array(KS.A);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let gS = 0; 0 !== this.staleLayers; gS++) {
          const tS = 1 << gS;
          0 !== (this.staleLayers & tS) && (this.staleLayers &= ~tS, HS[gS] = bH(SS, gS))
        }
        return HS
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const SS = this.voxelData(),
          HS = this.writes;
        if (null === HS || 0 === HS.ids.size) return SS;
        if (HS.from !== SS) {
          const gS = HS.patched ??= new Uint16Array(oS);
          gS.set(SS);
          for (const [SS, tS] of HS.ids) gS[SS] = tS;
          HS.from = SS
        }
        return HS.patched
      }
      written(SS) {
        var HS;
        return null === (HS = this.writes) || void 0 === HS ? void 0 : HS.ids.get(SS)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(SS, HS, gS) {
        const tS = this.writes ??= new gH;
        tS.ids.set(SS, HS), gS && tS.cleared.add(SS), null !== tS.from && (tS.patched[SS] = HS);
        const bS = 1 << (SS >> lS & mS);
        tS.layers |= bS, this.staleLayers |= bS, this.writeCount++
      }
      clearWrites() {
        const SS = this.writes;
        null !== SS && (this.staleLayers |= SS.layers, SS.ids.clear(), SS.cleared.clear(), SS.layers = 0, SS.from = null)
      }
      dataCleared(SS) {
        var HS;
        return !0 === (null === (HS = this.writes) || void 0 === HS ? void 0 : HS.cleared.has(SS))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const SS = this.table.slotWords(),
          HS = this.slot * eS;
        if (this.epoch !== this.table.epoch || HS + eS > SS.length || 0 === SS[HS + 3] || SS[HS + 2] !== this.generation) return this.data = rS, this.dataPtr = 0, rS;
        this.version = SS[HS + 1];
        const gS = SS[HS + 0],
          tS = SS.buffer;
        return gS === this.dataPtr && tS === this.dataBuffer || (this.dataPtr = gS, this.dataBuffer = tS, this.data = this.table.voxelsAt(tS, gS)), this.data
      }
    }

    function bH(SS, HS) {
      const gS = SS[HS * KS.A];
      for (let tS = 0; tS < KS.A; tS++) {
        const bS = SH(tS, HS, 0);
        for (let HS = 0; HS < KS.A; HS++)
          if (SS[bS + HS] !== gS) return 65535
      }
      return gS
    }
    const XH = new Uint32Array(0);

    function xH(SS, HS, gS) {
      return SH(SS & mS, HS & mS, gS & mS)
    }
    class NH {
      constructor(SS, HS) {
        this.memory = SS, this.apiView = HS, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = XH, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = XH, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(SS, HS, gS, tS, bS, XS) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, XS === KS.L.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (XS !== KS.L.Stored && XS !== KS.L.Unloaded) throw new aS.b(`ChunkSlot flags ${XS}`);
        const xS = (0, TS.b)(SS, HS, gS);
        if (xS < 0) return;
        if (XS === KS.L.Unloaded) return void this.chunks.delete(xS);
        const NS = this.chunks.get(xS);
        (null === NS || void 0 === NS ? void 0 : NS.slot) === tS && NS.generation === bS || this.chunks.set(xS, new tH(this, tS, bS, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const SS = this.apiView(),
          HS = KS.t.chunkSlotsPtr(SS, 0),
          gS = KS.t.chunkSlotsLen(SS, 0);
        HS === this.slotsPtr && gS === this.slotsLen || (this.slotsPtr = HS, this.slotsLen = gS, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const SS = this.apiView(),
          HS = KS.t.walkThroughPtr(SS, 0),
          gS = KS.t.walkThroughLen(SS, 0);
        HS === this.walkPtr && gS === this.walkLen || (this.walkPtr = HS, this.walkLen = gS, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const SS of this.written) SS.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const SS = this.memory().buffer;
        var HS;
        SS !== this.slotsBuffer && (this.slotsBuffer = SS, this.slots = null !== (HS = (0, aS.m)(Uint32Array, SS, this.slotsPtr, this.slotsLen * eS, "the chunk directory")) && void 0 !== HS ? HS : XH);
        return this.slots
      }
      voxelsAt(SS, HS) {
        try {
          var gS;
          return null !== (gS = (0, aS.m)(Uint16Array, SS, HS, oS, "a chunk's voxels")) && void 0 !== gS ? gS : rS
        } catch (tS) {
          if (!(tS instanceof aS.b)) throw tS;
          return this.corruption ??= tS, rS
        }
      }
      chunk(SS, HS, gS) {
        var tS;
        return null !== (tS = this.chunks.get((0, TS.b)(SS, HS, gS))) && void 0 !== tS ? tS : null
      }
      isLoaded(SS, HS, gS) {
        return void 0 !== this.chunkAt(Math.floor(SS), Math.floor(HS), Math.floor(gS))
      }
      XI(SS, HS, gS) {
        var tS;
        const bS = Math.floor(SS),
          XS = Math.floor(HS),
          xS = Math.floor(gS),
          NS = this.chunkAt(bS, XS, xS);
        if (!NS) return 0;
        const qS = xH(bS, XS, xS);
        return null !== (tS = NS.written(qS)) && void 0 !== tS ? tS : NS.voxelData()[qS]
      }
      setOverlay(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XS = this.chunkAt(SS, HS, gS);
        return !!XS && (XS.hasWrites() || this.written.push(XS), XS.write(xH(SS, HS, gS), tS, bS), !0)
      }
      version(SS, HS, gS) {
        var tS, bS;
        return null !== (tS = null === (bS = this.chunks.get((0, TS.b)(SS, HS, gS))) || void 0 === bS ? void 0 : bS.mK) && void 0 !== tS ? tS : null
      }
      scan(SS, HS, gS, tS, bS, XS, xS, NS) {
        const qS = KS.A;
        let uS = 0;
        for (let IS = Math.floor(HS / qS); IS * qS < bS; IS++) {
          const fS = IS * qS,
            kS = Math.min(bS - fS, qS);
          for (let bS = Math.floor(SS / qS); bS * qS < tS; bS++) {
            const aS = bS * qS,
              KS = Math.min(tS - aS, qS);
            for (let tS = Math.floor(gS / qS); tS * qS < XS; tS++) {
              const jS = this.chunks.get((0, TS.b)(bS, IS, tS));
              if (!jS) continue;
              const GS = tS * qS,
                CS = Math.max(gS - GS, 0),
                nS = Math.min(XS - GS, qS),
                PS = jS.Ya,
                QS = jS.gameVoxels();
              for (let gS = Math.max(HS - fS, 0); gS < kS; gS++) {
                const HS = PS[gS];
                if (65535 === HS || 0 !== xS[HS]) {
                  uS++;
                  for (let HS = Math.max(SS - aS, 0); HS < KS; HS++) {
                    const SS = SH(HS, gS, 0);
                    for (let tS = CS; tS < nS; tS++) {
                      const bS = QS[SS + tS];
                      0 !== xS[bS] && NS.push(aS + HS, fS + gS, GS + tS, bS)
                    }
                  }
                }
              }
            }
          }
        }
        return uS
      }
      dataCleared(SS, HS, gS) {
        var tS;
        const bS = Math.floor(SS),
          XS = Math.floor(HS),
          xS = Math.floor(gS);
        return !0 === (null === (tS = this.chunkAt(bS, XS, xS)) || void 0 === tS ? void 0 : tS.dataCleared(xH(bS, XS, xS)))
      }
      isWalkThrough(SS) {
        if (!Number.isInteger(SS) || SS < 0 || SS > 65535) return !1;
        const HS = this.walkWords(),
          gS = SS >>> 5;
        return gS < HS.length && 1 === (HS[gS] >>> (31 & SS) & 1)
      }
      walkWords() {
        const SS = this.memory().buffer;
        var HS;
        SS !== this.walkBuffer && (this.walkBuffer = SS, this.walk = null !== (HS = (0, aS.m)(Uint32Array, SS, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== HS ? HS : XH);
        return this.walk
      }
      chunkAt(SS, HS, gS) {
        if ((0 | SS) !== SS || (0 | HS) !== HS || (0 | gS) !== gS) return;
        const tS = (0, TS.b)(SS >> lS, HS >> lS, gS >> lS);
        return tS !== this.lastKey && (this.lastKey = tS, this.lastChunk = this.chunks.get(tS)), this.lastChunk
      }
    }
    var qH = gS(38526),
      uH = gS(37827),
      IH = gS(36820),
      fH = gS(36647),
      kH = gS(34185),
      aH = gS(39138),
      KH = gS(198);
    const jH = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      GH = [
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
      CH = GH.map((SS => {
        let [HS] = SS;
        return HS
      })),
      nH = Uint8Array.from(GH, (SS => {
        let [, HS] = SS;
        return HS
      })),
      PH = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      QH = 8;
    var DH = gS(36780),
      wH = gS(36801),
      hH = gS(36793),
      ZH = gS(278);
    class JH {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZH.c;
        this.sheet = SS, this.onError = HS, this.idle = gS, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = SS => {
          this.cancelIdle = null;
          try {
            if (SS.timeRemaining() >= 1) {
              let SS = this.queue.shift();
              for (; void 0 !== SS && !this.load(SS);) SS = this.queue.shift()
            }
          } catch (HS) {
            this.onError(HS)
          } finally {
            this.schedule()
          }
        }
      }
      preload(SS) {
        const HS = [...SS].sort(((SS, HS) => SS - HS));
        for (const gS of HS) this.asked.has(gS) || (this.asked.add(gS), this.queue.push(gS));
        this.schedule()
      }
      cancel() {
        var SS;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (SS = this.cancelIdle) || void 0 === SS || SS.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(SS) {
        const HS = this.sheet(SS, !1),
          gS = this.sheet(SS, !0),
          [tS, bS] = "unloaded" === HS.state() && "unloaded" !== gS.state() ? [gS, HS] : [HS, gS],
          XS = this.gen,
          xS = () => {
            try {
              XS === this.gen && "unloaded" === bS.state() && bS.load()
            } catch (SS) {
              this.onError(SS)
            }
          },
          NS = tS.state();
        return "unloaded" === NS ? (tS.once("load", xS), tS.load(), !0) : "unloaded" === bS.state() && ("loading" === NS ? (tS.once("load", xS), !1) : (bS.load(), !0))
      }
    }
    var OH = gS(40917);
    const dH = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      cH = KH.e.pG * KH.e.playerEyeToHeightRatio,
      vH = [0, 0, -1, 0, 1, 0],
      EH = jH.indexOf("note");

    function LH(SS) {
      return SS >= 0 ? Math.min(1, SS) : 0
    }

    function YH(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const tS = function(SS) {
        let HS = 0,
          gS = CH.length;
        for (; HS < gS;) {
          const tS = HS + gS >>> 1;
          CH[tS] < SS ? HS = tS + 1 : gS = tS
        }
        return HS
      }(SS);
      if ("" === SS || null === (HS = CH[tS]) || void 0 === HS || !HS.startsWith(SS)) return -1;
      if (CH[tS] === SS) return tS;
      let bS = tS + 1;
      for (; bS < CH.length && CH[bS].startsWith(SS);) bS++;
      return tS + Math.floor(gS() * (bS - tS))
    }
    class AH {
      constructor(SS, HS, gS, tS, bS) {
        this.group = SS, this.loudness = HS, this.startMs = gS, this.howl = tS, this.host = bS, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const SS = this.host.alive(this.id);
        return SS ? 1e3 * this.howl.duration(this.id) / SS.rate : 0
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
    class yH {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          tS = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = SS, this.listener = HS, this.now = gS, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(jH.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new hH.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: SS => this.aliveVoice(SS),
          started: SS => this.started.has(SS),
          drop: SS => {
            var HS;
            null === (HS = this.live.get(SS)) || void 0 === HS || HS.howl.stop(SS), this.forget(SS)
          }
        }, this.handlers = {
          playSound: (SS, HS, gS, tS, bS, XS, xS, NS, qS) => {
            if (tS >= CH.length) return;
            const uS = 0 !== (bS & KS.Ud.Loop);
            bS & KS.Ud.TwoD ? this.start(tS, !1, xS, XS, NS, uS) : this.startSpatial(tS, xS, XS, NS, uS, SS, HS, gS, qS, this.earDistSq(SS, HS, gS))
          },
          soundPos: (SS, HS, gS, tS) => {
            const bS = this.core.get(tS);
            var XS;
            void 0 !== bS && (null === (XS = this.live.get(bS)) || void 0 === XS || XS.howl.pos(gS, HS, SS, bS))
          },
          soundSet: (SS, HS, gS, tS) => {
            const bS = this.core.get(SS),
              XS = void 0 === bS ? void 0 : this.live.get(bS);
            void 0 !== bS && XS && (this.setRel(bS, HS), XS.rate = gS, XS.howl.rate(gS, bS), XS.spatial && XS.howl.pannerAttr({
              refDistance: tS
            }, bS))
          },
          soundFade: (SS, HS, gS, tS) => {
            const bS = this.core.get(SS);
            void 0 !== bS && this.fade(bS, HS, gS, 0 !== (tS & KS.Td.StopAfter))
          },
          soundStop: SS => {
            const HS = this.core.get(SS);
            var gS;
            void 0 !== HS && (null === (gS = this.live.get(HS)) || void 0 === gS || gS.howl.stop(HS), this.forget(HS))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new JH(((SS, HS) => this.sheet(SS, HS)), (SS => {
          this.errors++, console.error("Audio preload failed", SS)
        }), tS)
      }
      prepare() {
        for (let SS = 0; SS < jH.length; SS++) this.prepareSheet(SS)
      }
      prepareSheet(SS) {
        this.sheet(SS, !1), this.sheet(SS, !0)
      }
      preload(SS) {
        this.loader.preload(SS)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let SS = 0; SS < jH.length; SS++) {
          if (wH.e.has(jH[SS])) continue;
          const HS = [];
          for (const tS of [!1, !0]) {
            const gS = VH(SS, tS),
              bS = this.sheets.get(gS);
            void 0 !== bS && "loading" !== bS.state() && HS.push({
              key: gS,
              howl: bS
            })
          }
          if (!HS.some((SS => {
              let {
                howl: HS
              } = SS;
              return "loaded" === HS.state()
            }))) continue;
          this.unloading[SS] += HS.length;
          const gS = () => {
            this.unloading[SS]--, 0 === this.unloading[SS] && this.prepareSheet(SS)
          };
          for (const {
              key: SS,
              howl: tS
            }
            of HS) this.sheets.delete(SS), "loaded" === tS.state() ? (0, DH.b)(tS, gS) : (tS.unload(), gS())
        }
      }
      onAudioEvent(SS, HS, gS, tS) {
        if (SS < KS.o.PlaySound || SS > KS.o.SoundReset) return !1;
        try {
          return (0, KS.Zd)(SS, HS, gS, tS, this.handlers)
        } catch (bS) {
          return this.errors++, console.error("Audio event failed", bS), !0
        }
      }
      applyListener(SS) {
        const HS = this.nextPose;
        for (let tS = 0; tS < 3; tS++) HS[2 - tS] = KS.w.listener(SS, 0, tS), HS[5 - tS] = KS.w.forward(SS, 0, tS), HS[8 - tS] = KS.w.up(SS, 0, tS);
        0 === HS[3] && 0 === HS[4] && 0 === HS[5] && HS.set(this.posed ? this.pose.subarray(3) : vH, 3);
        for (let tS = 0; tS < 9; tS++)
          if (!Number.isFinite(HS[tS])) return;
        const gS = this.pose;
        if (this.posed) {
          let SS = !0;
          for (let tS = 0; tS < 9 && SS; tS++) SS = HS[tS] === gS[tS];
          if (SS) return
        }
        this.listener.apply(HS) && (gS.set(HS), this.posed = !0)
      }
      playGame(SS, HS, gS, tS, bS, XS, xS) {
        const NS = YH(SS);
        if (NS < 0) return OH.e;
        if (!gS) {
          const {
            howl: SS,
            id: gS
          } = this.start(NS, !1, HS, 0, 1, xS);
          return this.gameSound(SS, gS, !1)
        }
        const qS = gS[0],
          uS = gS[1] + cH,
          IS = gS[2];
        if (!Number.isFinite(qS) || !Number.isFinite(uS) || !Number.isFinite(IS)) return OH.e;
        let fS;
        if (tS) {
          const SS = qS - tS[0],
            HS = uS - tS[1],
            gS = IS - tS[2];
          if (fS = SS * SS + HS * HS + gS * gS, fS > bS * bS) return OH.e
        } else fS = this.earDistSq(qS, uS, IS);
        const kS = this.startSpatial(NS, HS, 0, 1, xS, qS, uS, IS, XS, fS);
        return kS ? this.gameSound(kS.howl, kS.id, !0) : OH.e
      }
      setMaster(SS, HS) {
        this.level = LH(SS);
        const gS = HS ? this.level : 0;
        if (gS !== this.master) {
          this.master = gS;
          for (const [SS, HS] of this.live) HS.fadeMs = 0, HS.gain = HS.rel * this.master, HS.howl.volume(HS.gain, SS)
        }
      }
      stopCore() {
        for (const HS of [...this.core.values()]) {
          var SS;
          null === (SS = this.live.get(HS)) || void 0 === SS || SS.howl.stop(HS)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [SS, HS] of [...this.live]) HS.howl.stop(SS), this.forget(SS);
        this.core.clear()
      }
      gameSound(SS, HS, gS) {
        const tS = {
          stop: () => (this.live.has(HS) && SS.stop(HS), tS),
          fade: (SS, gS, bS) => {
            var XS, xS;
            const NS = this.level > 0 ? gS / this.level : gS > 0 && null !== (XS = null === (xS = this.live.get(HS)) || void 0 === xS ? void 0 : xS.rel) && void 0 !== XS ? XS : 0;
            return this.fade(HS, NS, bS, !1), tS
          },
          rate: gS => {
            const bS = this.live.get(HS);
            return bS && (bS.rate = function(SS) {
              return SS > 0 && SS < 1 / 0 ? SS : 1
            }(gS), SS.rate(bS.rate, HS)), tS
          },
          getVolume: () => {
            var SS, gS;
            return (null !== (SS = null === (gS = this.live.get(HS)) || void 0 === gS ? void 0 : gS.rel) && void 0 !== SS ? SS : 0) * this.level
          },
          getRelativeVolume: () => {
            var SS, gS;
            return null !== (SS = null === (gS = this.live.get(HS)) || void 0 === gS ? void 0 : gS.rel) && void 0 !== SS ? SS : 0
          },
          setRelativeVolume: SS => (this.setRel(HS, SS), tS),
          setPannerAttr: bS => {
            if (gS && this.live.has(HS)) {
              const gS = {
                ...dH,
                refDistance: IH.f
              };
              for (const [SS, HS] of Object.entries(bS)) "number" !== typeof HS && "string" !== typeof HS || (gS[SS] = HS);
              SS.pannerAttr({
                coneOuterAngle: gS.coneOuterAngle
              }, HS), SS.pannerAttr(gS, HS)
            }
            return tS
          },
          setPosition: bS => (gS && this.live.has(HS) && Number.isFinite(bS[0] + bS[1] + bS[2]) && SS.pos(bS[2], bS[1], bS[0], HS), tS)
        };
        return tS
      }
      startSpatial(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        const IS = this.sheet(nH[SS], !0);
        let fS = null;
        if (!bS) {
          if (this.failed.has(IS)) return null;
          const gS = nH[SS] === EH ? null : (0, hH.g)(CH[SS]),
            tS = (0, hH.d)(LH(HS), Math.sqrt(uS), qS);
          if (fS = new AH(gS, tS, this.now(), IS, this.voiceHost), !this.voices.admit(fS)) return null
        }
        const kS = this.start(SS, !0, HS, gS, tS, bS);
        return fS && (fS.id = kS.id, fS.direct = "loaded" === IS.state() && !IS._playLock), IS.pannerAttr({
          coneOuterAngle: 360
        }, kS.id), IS.pannerAttr({
          ...dH,
          refDistance: qS
        }, kS.id), IS.pos(NS, xS, XS, kS.id), kS
      }
      aliveVoice(SS) {
        const HS = this.live.get(SS);
        if (!HS) return;
        const gS = HS.howl._soundById(SS);
        if (gS && !gS._ended) return HS;
        this.forget(SS)
      }
      earDistSq(SS, HS, gS) {
        if (!this.posed) return 0;
        const tS = SS - this.pose[2],
          bS = HS - this.pose[1],
          XS = gS - this.pose[0];
        return tS * tS + bS * bS + XS * XS
      }
      start(SS, HS, gS, tS, bS, XS) {
        const xS = LH(gS),
          NS = this.sheet(nH[SS], HS);
        "unloaded" === NS.state() && NS.load();
        const qS = NS.play(CH[SS]),
          uS = xS * this.master;
        return NS.volume(uS, qS), this.live.set(qS, {
          howl: NS,
          rel: xS,
          gain: uS,
          fadeFrom: uS,
          fadeAt: 0,
          fadeMs: 0,
          rate: bS,
          handle: tS,
          spatial: HS,
          stopTimer: void 0
        }), 0 !== tS && this.core.set(tS, qS), 1 !== bS && NS.rate(bS, qS), XS && NS.loop(!0, qS), {
          howl: NS,
          id: qS
        }
      }
      sheet(SS, HS) {
        const gS = VH(SS, HS);
        let tS = this.sheets.get(gS);
        if (!tS) {
          const bS = this.createHowl(jH[SS], HS);
          bS.on("end", (SS => {
            bS.loop(SS) || this.forget(SS)
          })), bS.on("stop", (SS => {
            this.forget(SS)
          })), bS.on("play", (SS => {
            this.live.has(SS) && this.started.add(SS)
          })), bS.on("loaderror", (SS => {
            if ("loaded" !== bS.state()) {
              this.failed.add(bS);
              for (const [SS, HS] of this.live) HS.howl === bS && this.forget(SS)
            } else "number" === typeof SS && this.forget(SS)
          })), this.sheets.set(gS, bS), tS = bS
        }
        return tS
      }
      setRel(SS, HS) {
        const gS = this.live.get(SS);
        gS && (iH(gS), gS.fadeMs = 0, gS.rel = LH(HS), gS.gain = gS.rel * this.master, gS.howl.volume(gS.gain, SS))
      }
      fade(SS, HS, gS, tS) {
        const bS = this.live.get(SS);
        if (!bS) return;
        iH(bS);
        const {
          howl: XS
        } = bS, xS = this.gainNow(bS);
        bS.rel = LH(HS), bS.gain = bS.rel * this.master;
        const NS = gS > 0 ? Math.min(gS, 65535) : 0,
          qS = 0 === NS || xS === bS.gain;
        bS.fadeMs = qS ? 0 : NS, qS ? XS.volume(bS.gain, SS) : (bS.fadeFrom = xS, bS.fadeAt = this.now(), XS.fade(xS, bS.gain, NS, SS)), tS && (qS ? XS.stop(SS) : bS.stopTimer = setTimeout((() => {
          bS.stopTimer = void 0, XS.stop(SS)
        }), NS))
      }
      gainNow(SS) {
        if (SS.fadeMs > 0) {
          const HS = (this.now() - SS.fadeAt) / SS.fadeMs;
          if (HS < 1) return SS.fadeFrom + (SS.gain - SS.fadeFrom) * Math.max(0, HS);
          SS.fadeMs = 0
        }
        return SS.gain
      }
      forget(SS) {
        this.started.delete(SS);
        const HS = this.live.get(SS);
        HS && (iH(HS), this.live.delete(SS), 0 !== HS.handle && this.core.get(HS.handle) === SS && this.core.delete(HS.handle))
      }
    }

    function VH(SS, HS) {
      return 2 * SS + (HS ? 1 : 0)
    }

    function iH(SS) {
      void 0 !== SS.stopTimer && (clearTimeout(SS.stopTimer), SS.stopTimer = void 0)
    }
    var WH = gS(40643),
      zH = gS(39141);
    class UH {
      constructor(SS, HS, gS, tS) {
        this.key = SS, this.model = HS, this.host = tS, this.hf = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.kbS = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.nK = !1, this.hf = Math.max(1, Math.ceil(gS)), this.records = new Float32Array(this.hf * qH.b), this.isDirty = new Uint8Array(this.hf), this.tail = new Uint8Array(this.hf * KS.ic.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(tS.cmd())
      }
      setOrigin(SS, HS, gS) {
        this.origin[0] = SS, this.origin[1] = HS, this.origin[2] = gS
      }
      markDirty(SS) {
        !this.nK && SS >= 0 && SS < this.hf && SS < KS.ic.Max && this.pK(SS, SS + 1)
      }
      commit(SS) {
        if (this.nK) return;
        (SS = Math.min(Math.max(Math.floor(SS), 0), this.hf, KS.ic.Max)) > this.count && this.pK(this.count, SS), this.count = SS;
        const {
          origin: HS,
          sentOrigin: gS,
          dirtyList: tS
        } = this, bS = this.kbS !== SS, XS = gS[0] !== HS[0] || gS[1] !== HS[1] || gS[2] !== HS[2];
        if (0 === tS.length && !bS && !XS) return;
        const xS = this.host.cmd();
        if (!xS || !this.make(xS)) return;
        const NS = tS.length,
          {
            records: qS,
            tailView: uS
          } = this;
        for (let IS = 0; IS < NS; IS++) {
          const SS = tS[IS],
            HS = SS * qH.b,
            gS = IS * KS.ic.Bytes,
            bS = 0 !== qS[HS + qH.f] ? KS.ic.Hidden : 0;
          uS.setUint32(gS, (SS | bS) >>> 0, !0), uS.setFloat32(gS + 4, qS[HS], !0), uS.setFloat32(gS + 8, qS[HS + 1], !0), uS.setFloat32(gS + 12, qS[HS + 2], !0)
        }
        if ((0, KS.Ee)(xS, 0, this.key, SS, HS, NS, this.tailOf(NS))) {
          for (let SS = 0; SS < NS; SS++) this.isDirty[tS[SS]] = 0;
          tS.length = 0, this.kbS = SS, gS[0] = HS[0], gS[1] = HS[1], gS[2] = HS[2]
        }
      }
      grow(SS) {
        (SS = Math.ceil(SS)) <= this.hf || this.nK || (this.records = (0, zH.b)(this.records, new Float32Array(SS * qH.b)), this.isDirty = (0, zH.b)(this.isDirty, new Uint8Array(SS)), this.tail = new Uint8Array(SS * KS.ic.Bytes), this.tailView = new DataView(this.tail.buffer), this.hf = SS)
      }
      dispose() {
        this.nK || (this.nK = !0, this.host.nK(this, this.made ? this.key : null))
      }
      make(SS) {
        if (!this.made && SS) {
          const {
            item: HS,
            scale: gS,
            yaw: tS
          } = this.model;
          this.made = (0, KS.Ke)(SS, 0, this.key, HS, gS, tS)
        }
        return this.made
      }
      tailOf(SS) {
        const HS = SS * KS.ic.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === HS || (this.tailCut = this.tail.subarray(0, HS)), this.tailCut
      }
      pK(SS, HS) {
        const {
          dirtyList: gS,
          isDirty: tS
        } = this;
        for (let bS = SS; bS < HS; bS++) 0 === tS[bS] && (tS[bS] = 1, gS.push(bS))
      }
    }
    var pH = gS(672);
    class sH {
      constructor(SS) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: SS,
          owes: SS => {
            this.owing.add(SS)
          },
          settled: (SS, HS) => {
            this.owing.delete(SS), HS && this.live.delete(SS)
          }
        }
      }
      create(SS, HS) {
        if (gS = SS, !pH.o.includes(gS)) return null;
        var gS;
        const tS = new BH(++this.keys, IS.j.indexOf(SS), HS, this.host);
        return this.live.add(tS), tS
      }
      disposeAll() {
        for (const SS of [...this.live]) SS.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const SS = this.host.cmd();
        for (const HS of this.owing)
          if (!HS.sync(SS)) return
      }
    }
    class BH {
      constructor(SS, HS, gS, tS) {
        this.key = SS, this.lifeform = HS, this.scale = gS, this.host = tS, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.nK = !1, this.sync()
      }
      setPose(SS, HS) {
        this.nK || (this.feet[0] = SS[0], this.feet[1] = SS[1], this.feet[2] = SS[2], this.yaw = HS, this.owed |= 2, this.sync())
      }
      setVisible(SS) {
        this.nK || SS === this.visible || (this.visible = SS, this.owed |= 4, this.sync())
      }
      dispose() {
        this.nK || (this.nK = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(SS) ? (this.host.settled(this, this.nK), !0) : (this.host.owes(this), !1)
      }
      write(SS) {
        if (!SS) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, KS.Te)(SS, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const HS = (2 & this.owed ? KS.Lc.Pose : 0) | (4 & this.owed ? KS.Lc.Visible : 0);
        if (0 !== HS) {
          if (!(0, KS.Se)(SS, 0, this.key, HS, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, KS.Oe)(SS, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var MH = gS(41025);

    function FH(SS, HS, gS, tS) {
      return (0, MH.c)(), (0, KS.zf)(SS, HS, gS, tS)
    }
    var RH = gS(39148),
      TH = gS(40632);
    const oH = [0, 0, 0],
      lH = [0, 0, 0],
      mH = [0, 0, 0],
      eH = [0, 0, 0],
      rH = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Sg = [0, 0, 0],
      Hg = [0, 0],
      gg = [1, 1, 1],
      tg = 1 / 3;
    const bg = uH.g;

    function Xg(SS) {
      const HS = uH.d[SS],
        gS = HS && uH.g[HS.mainMultiblock];
      return gS && {
        main: gS,
        x: HS.compX,
        y: HS.compY,
        z: HS.compZ
      }
    }

    function xg(SS) {
      if (null === SS || void 0 === SS) return KS.Sc;
      const HS = +SS;
      return Number.isInteger(HS) && HS >= -2147483648 && HS <= 2147483647 && String(HS) === String(SS) ? HS : KS.Sc
    }

    function Ng(SS, HS, gS) {
      return (0, KS.Ff)(SS, 0, HS, null !== gS && void 0 !== gS ? gS : Number.NaN)
    }
    class qg {
      constructor(SS) {
        this.deps = SS, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new RH.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (SS => {
          var HS, gS;
          null === (HS = (gS = this.deps).setLocalOptions) || void 0 === HS || HS.call(gS, SS)
        })), this.mobModels = new sH((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          nK: (SS, HS) => {
            this.livePools.delete(SS), null !== HS && (this.owedFrees.push(HS), this.flushOwed())
          }
        }, this.api = SS.api, this.live = SS.live, this.chunks = SS.chunks, this.items = SS.items, this.tables = SS.tables
      }
      isLocal(SS) {
        return null !== SS && void 0 !== SS && +SS === this.api.localId
      }
      assertLocal(SS, HS) {
        if (!this.isLocal(SS)) throw new Error(`Attempted to ${HS} for a player that is not the local player`)
      }
      lC(SS) {
        const HS = this.api.lC(SS);
        if (!HS) throw new Error(`Entity ${SS} has no replicated position`);
        return HS
      }
      checkValid(SS) {
        return !!this.deps.isSessionLive() && (null === SS || void 0 === SS || this.api.checkValid(SS))
      }
      isAlive(SS) {
        return !1 !== this.api.isAlive(SS)
      }
      getItemStat(SS, HS, gS) {
        return this.isLocal(SS) || null !== SS && "Player" === this.api.getEntityType(SS) ? this.tables.getItemStat(HS, gS) : this.tables.getDefaultItemStat(HS, gS)
      }
      getClientOption(SS, HS) {
        return this.assertLocal(SS, "get a client option"), this.tables.getClientOption(HS)
      }
      openShop(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(SS, "open shop"), xS.k.cj("showShopFromServer", {
          toggle: HS,
          yb: gS
        }, !0)
      }
      sendMessage(SS, HS, gS) {
        this.assertLocal(SS, "send a message");
        const tS = "string" === typeof HS ? [{
          str: HS,
          style: gS
        }] : HS;
        xS.k.cj("chat", {
          content: tS
        }, !0)
      }
      getEntityType(SS) {
        return this.api.getEntityType(SS)
      }
      getEntityName(SS) {
        const HS = xg(SS);
        return HS === KS.Sc ? void 0 : (0, WH.h)(this.api, HS)
      }
      hasEffect(SS, HS) {
        const gS = xg(SS);
        return gS !== KS.Sc && (0, WH.e)(this.api, gS, HS)
      }
      getMetaInfo(SS) {
        return this.tables.getMetaInfo(SS)
      }
      getPlayerDbId(SS) {
        return this.assertLocal(SS, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(SS, HS, gS) {
        if (!this.chunks.dataCleared(SS, HS, gS)) return (0, WH.c)(this.api, SS, HS, gS)
      }
      TE(SS, HS, gS, tS) {
        this.setBlockId(SS, HS, gS, this.tables.getItemId(tS))
      }
      setOtherEntitySetting(SS, HS, gS, tS) {
        if (!this.isLocal(SS)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(KS.$c, gS)) throw new Error(`Unknown other-entity setting ${gS}`);
        const bS = KS.$c[gS],
          XS = xg(HS);
        if (XS === KS.Sc || !this.deps.beforeWrite()) return;
        const xS = (0, VS.f)(tS);
        if (xS.length > 16384) throw new Error(`The other-entity setting ${gS}'s value is over 16384 bytes`);
        const NS = this.api.memoryView(Uint8Array, this.api.scratch(), xS.length, "set_other_entity_setting's value");
        NS && (NS.set(xS), this.api.queries.setOtherEntitySetting(XS, bS, xS.length))
      }
      getPositionView(SS) {
        return this.live.position(+SS)
      }
      readDrawnPosition(SS, HS) {
        return this.api.readDrawnPosition(xg(SS), HS)
      }
      getDrawnHeading(SS) {
        const HS = xg(SS),
          gS = (HS === KS.Sc ? 0 : this.api.queries.directorEntity(HS)) >= KS.db.BYTES ? this.api.memoryData(this.api.scratch(), KS.db.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!gS) return null;
        if (1 === KS.db.headingIsDrawn(gS, 0)) return KS.db.heading(gS, 0);
        const tS = this.api.apiView;
        return this.isLocal(SS) && 0 === (KS.t.playerFlags(tS, 0) & KS.zd.FreeCam) ? KS.t.heading(tS, 0) : null
      }
      getLocalPlayerMovement() {
        const SS = KS.t.playerFlags(this.api.apiView, 0);
        return 0 === (SS & KS.zd.Replay) && this.api.readDrawnPosition(this.api.localId, mH) ? {
          onGround: 0 !== (SS & KS.zd.OnGround),
          jumpHeld: 0 !== (SS & KS.zd.JumpHeld)
        } : null
      }
      AHS(SS) {
        return this.isLocal(SS) ? this.items.Ku() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var SS, HS;
        return "Gun" === (null === (SS = this.aliveHeld()) || void 0 === SS || null === (HS = SS.typeObj) || void 0 === HS ? void 0 : HS.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Ku()
      }
      isCrosshairShown() {
        var SS, HS;
        const gS = (0, fH.d)(tS.b.get("crosshairGameView"), tS.b.get("crosshairShownOverride"));
        if (null !== gS) return gS;
        const bS = null === (SS = this.aliveHeld()) || void 0 === SS ? void 0 : SS.typeObj,
          XS = "Gun" === (null === bS || void 0 === bS ? void 0 : bS.type),
          xS = XS || !0 === (null === bS || void 0 === bS ? void 0 : bS.showsAimingUi),
          NS = 0 === (KS.t.playerFlags(this.api.apiView, 0) & KS.zd.ZoomFirstPerson),
          qS = null !== (HS = this.tables.getClientOption("gunshotOrigin")) && void 0 !== HS ? HS : null;
        return (0, fH.g)({
          gun: XS,
          aimable: xS
        }, NS, (0, kH.b)(), qS)
      }
      setCrosshairShown(SS) {
        tS.b.set({
          crosshairShownOverride: SS
        })
      }
      getInventoryFreeSlotCount(SS) {
        return this.isLocal(SS) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(SS) {
        return this.isLocal(SS) ? this.items.selectedSlot : null
      }
      getItemSlot(SS, HS) {
        return this.isLocal(SS) ? this.items.slot(HS) : null
      }
      swapInventorySlots(SS, HS) {
        return this.items.swap(SS, HS)
      }
      isPlayerCrouching(SS) {
        if (this.isLocal(SS)) return 0 !== (KS.t.playerFlags(this.api.apiView, 0) & KS.zd.Crouching);
        const HS = xg(SS);
        return HS !== KS.Sc && 1 === this.api.queries.entityCrouching(HS)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (KS.t.playerFlags(this.api.apiView, 0) & KS.zd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.ISS()
      }
      getActionRay() {
        const SS = this.api.apiView;
        for (let HS = 0; HS < 3; HS++) rH.origin[HS] = KS.t.dSS(SS, 0, HS), rH.direction[HS] = KS.t.actionDir(SS, 0, HS);
        return rH
      }
      canModifyBlockAt(SS, HS, gS) {
        return 1 === this.api.queries.canModify(SS, HS, gS)
      }
      isSolidToPlayerBlockId(SS) {
        return this.tables.isSolidBlockId(SS) && !this.chunks.isWalkThrough(SS)
      }
      blockNameToBlockId(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(SS, HS)
      }
      blockIdToBlockName(SS) {
        return this.tables.nameOfId(SS)
      }
      SHS(SS, HS, gS, tS, bS) {
        return 1 === this.api.queries.terrainBlocked(tS, SS, HS, gS, xg(null !== bS && void 0 !== bS ? bS : null))
      }
      getChunkVersion(SS, HS, gS) {
        return this.chunks.version(SS, HS, gS)
      }
      scanBlocks(SS, HS, gS, tS, bS, XS, xS, NS) {
        return this.chunks.scan(SS, HS, gS, tS, bS, XS, xS, NS)
      }
      isBlockInLoadedChunk(SS, HS, gS) {
        return this.chunks.isLoaded(SS, HS, gS)
      }
      getBlockId(SS, HS, gS) {
        return this.chunks.XI(SS, HS, gS)
      }
      playSound(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(SS)) return null;
        const xS = this.playSoundFrom(HS, gS, bS, XS);
        return 1 === tS ? xS : xS.rate(tS)
      }
      preloadSounds(SS) {
        var HS, gS;
        null === (HS = (gS = this.deps).preloadSounds) || void 0 === HS || HS.call(gS, SS)
      }
      playSoundFrom(SS, HS, gS, tS) {
        var bS, XS;
        const xS = this.deps.playSound;
        if (!xS) return OH.e;
        const NS = null === gS || void 0 === gS ? void 0 : gS.Sb,
          qS = null !== (bS = null === gS || void 0 === gS ? void 0 : gS.maxHearDist) && void 0 !== bS ? bS : IH.e,
          uS = null !== (XS = null === gS || void 0 === gS ? void 0 : gS.refDistance) && void 0 !== XS ? XS : IH.f;
        let IS = null;
        if (Array.isArray(NS)) oH[0] = NS[0], oH[1] = NS[1], oH[2] = NS[2], IS = oH;
        else if (void 0 !== NS && null !== NS) {
          const SS = xg(NS);
          if (!this.api.isLocal(SS)) {
            if (!this.api.readPosition(SS, oH)) return OH.e;
            IS = oH
          }
        }
        return xS(SS, HS, IS, IS && this.ear(), qS, uS, tS)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, lH)) lH[1] += cH;
        else {
          const SS = this.api.apiView;
          if (0 === KS.t.viewProj(SS, 0, 3) && 0 === KS.t.viewProj(SS, 0, 7) && 0 === KS.t.viewProj(SS, 0, 11)) return null;
          for (let HS = 0; HS < 3; HS++) lH[HS] = KS.t.eye(SS, 0, HS)
        }
        return Number.isFinite(lH[0] + lH[1] + lH[2]) ? lH : null
      }
      setBlockId(SS, HS, gS, tS) {
        if (!Number.isInteger(tS) || tS < 0 || tS > 65535) throw new Error(`Invalid block id ${tS}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(SS, HS, gS)) return;
        const bS = Math.floor(SS),
          XS = Math.floor(HS),
          xS = Math.floor(gS),
          NS = this.predictedCells(bS, XS, xS, tS);
        if (1 === this.api.queries.TE(bS, XS, xS, tS)) {
          for (let SS = 0; SS < NS.length; SS += 5) this.chunks.setOverlay(NS[SS], NS[SS + 1], NS[SS + 2], NS[SS + 3], 1 === NS[SS + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(SS, HS) {
        return this.deps.particles.create(SS, HS)
      }
      playParticleEffect(SS) {
        this.deps.particles.playEffect(SS)
      }
      burstParticlePreset(SS, HS, gS) {
        this.deps.particles.burstPreset(SS, HS, gS)
      }
      createGameMesh(SS, HS, gS) {
        const tS = ++this.meshKeys,
          bS = this.deps.cmd();
        if (!bS) return tS;
        const {
          look: XS,
          colour: xS
        } = function(SS) {
          switch (SS.kind) {
            case void 0:
            case "flatEmissive":
              return SS.onTop ? {
                look: KS.Ob.FlatOnTop,
                colour: [...SS.rgb, SS.alpha]
              } : SS.opaque ? {
                look: KS.Ob.FlatOpaque,
                colour: [...SS.rgb, 1]
              } : {
                look: KS.Ob.Flat,
                colour: [...SS.rgb, SS.alpha]
              };
            case "chevronPath":
              return {
                look: KS.Ob.Chevrons, colour: [...(0, aH.b)(SS.colour), SS.alpha]
              };
            case "furnaceFire":
              return {
                look: KS.Ob.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(HS), NS = Math.floor(SS.positions.length / 3), qS = function(SS, HS) {
          const gS = Math.floor(SS.positions.length / 3),
            tS = SS.indices.length,
            bS = gS * (HS ? 5 : 3),
            XS = new Uint8Array(4 * (bS + tS)),
            xS = new DataView(XS.buffer);
          for (let uS = 0; uS < 3 * gS; uS++) xS.setFloat32(4 * uS, SS.positions[uS], !0);
          if (HS) {
            var NS;
            const HS = null !== (NS = SS.uvs) && void 0 !== NS ? NS : [];
            for (let SS = 0; SS < 2 * gS; SS++) {
              var qS;
              xS.setFloat32(4 * (3 * gS + SS), null !== (qS = HS[SS]) && void 0 !== qS ? qS : 0, !0)
            }
          }
          for (let uS = 0; uS < tS; uS++) xS.setUint32(4 * (bS + uS), SS.indices[uS], !0);
          return XS
        }(SS, (0, qH.g)(HS));
        return (0, KS.te)(bS, 0, tS, XS, xS, gS, NS, SS.indices.length, qS) && this.liveMeshes.add(tS), tS
      }
      setGameMesh(SS, HS) {
        var gS;
        const tS = this.deps.cmd();
        if (!tS) return;
        let bS = 0;
        HS.anchor && (bS |= KS.Qb.Anchor, Sg[0] = HS.anchor[0], Sg[1] = HS.anchor[1], Sg[2] = HS.anchor[2]), void 0 !== HS.visible && (bS |= KS.Qb.Visible), HS.uvOffset && (bS |= KS.Qb.UvOffset, Hg[0] = HS.uvOffset[0], Hg[1] = HS.uvOffset[1]);
        const XS = null !== (gS = HS.visibility) && void 0 !== gS ? gS : 1;
        void 0 !== HS.visibility && (bS |= KS.Qb.Visibility), HS.scale && (bS |= KS.Qb.Scale, gg[0] = HS.scale[0], gg[1] = HS.scale[1], gg[2] = HS.scale[2]), 0 !== bS && (0, KS.ye)(tS, 0, SS, bS, HS.visible ? 1 : 0, Sg, Hg, XS, gg)
      }
      disposeGameMesh(SS) {
        const HS = this.deps.cmd();
        HS && !(0, KS.xe)(HS, 0, SS) || this.liveMeshes.delete(SS)
      }
      hasPackModel(SS) {
        var HS, gS, tS;
        return null !== (HS = null === (gS = (tS = this.deps).hasPackModel) || void 0 === gS ? void 0 : gS.call(tS, SS)) && void 0 !== HS && HS
      }
      disposeGameOutput() {
        const SS = SS => {
          try {
            SS()
          } catch (HS) {
            console.error("Error freeing client game output", HS)
          }
        };
        for (const HS of [...this.liveMeshes]) SS((() => {
          this.disposeGameMesh(HS)
        }));
        for (const HS of [...this.livePools]) SS((() => {
          HS.dispose()
        }));
        SS((() => {
          this.mobModels.disposeAll()
        })), SS((() => {
          this.setGroundArrowStyle(null)
        })), SS((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), SS((() => {
          this.setCrosshairShown(null)
        })), SS((() => {
          this.cameraTurn.dispose()
        })), SS((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(SS, HS) {
        const gS = this.tables.idOf(SS.item);
        if (void 0 === gS) return null;
        const tS = new UH(++this.poolKeys, {
          item: gS,
          scale: SS.scale,
          yaw: SS.yaw
        }, HS, this.poolHost);
        return this.livePools.add(tS), tS
      }
      createMobModel(SS, HS) {
        return this.mobModels.create(SS, HS)
      }
      setRouteChevrons(SS) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !SS || 0 === SS.cells.length) return;
        const HS = `${SS.colour} ${SS.alpha}`;
        HS !== this.routeLook && (this.routeLook = HS, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(SS) {
          const [HS, gS, tS] = SS[0].pos, bS = [], XS = [], xS = [];
          return SS.forEach(((SS, NS) => {
            let {
              pos: qS,
              way: [uS, IS]
            } = SS;
            const fS = qS[0] - HS + .5,
              kS = qS[1] - gS + .04,
              aS = qS[2] - tS + .5,
              [KS, jS] = [.35 * -IS, .35 * uS],
              [GS, CS] = [NS * tg, (NS + 1) * tg],
              nS = bS.length / 3;
            bS.push(fS - .5 * uS + KS, kS, aS - .5 * IS + jS), bS.push(fS - .5 * uS - KS, kS, aS - .5 * IS - jS), bS.push(fS + .5 * uS + KS, kS, aS + .5 * IS + jS), bS.push(fS + .5 * uS - KS, kS, aS + .5 * IS - jS), XS.push(0, GS, 1, GS, 0, CS, 1, CS), xS.push(nS, nS + 1, nS + 2, nS + 1, nS + 3, nS + 2)
          })), {
            positions: bS,
            uvs: XS,
            indices: xS
          }
        }(SS.cells), {
          kind: "chevronPath",
          colour: SS.colour,
          alpha: SS.alpha
        }, SS.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(SS) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(SS, 250) / 1e3 * 1.2 * tg) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(SS) {
        this.pendingStyle = SS, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const SS = this.owedFrees;
        if (0 === SS.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const HS = this.deps.cmd();
        if (!HS) return SS.length = 0, void(this.pendingFar = void 0);
        let gS = 0;
        for (; gS < SS.length && (0, KS.Ge)(HS, 0, SS[gS]);) gS++;
        SS.splice(0, gS);
        const tS = this.pendingStyle;
        if (void 0 !== tS) {
          (tS ? (0, KS.Hf)(HS, 0, tS.width, tS.alpha, 1, tS.endAtSolidFace ? 1 : 0) : (0, KS.Hf)(HS, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const bS = this.pendingFar;
        void 0 !== bS && (0, KS.Df)(HS, 0, null !== bS && void 0 !== bS ? bS : 0, null === bS ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(SS, HS) {
        const gS = this.deps.cmd(),
          tS = xg(SS);
        gS && tS !== KS.Sc && (0, KS.Sf)(gS, 0, tS, HS)
      }
      setFacingTolerance(SS, HS) {
        const gS = this.deps.cmd(),
          tS = xg(SS);
        gS && tS !== KS.Sc && Ng(gS, tS, HS)
      }
      forEachEntity(SS) {
        const {
          api: HS
        } = this;
        for (let gS = 0; gS < HS.idStr.length; gS++) {
          const tS = HS.idStr[gS];
          null === tS || DS(HS.kinds[gS]) || SS(tS)
        }
      }
      getEntityInfo(SS) {
        return this.deps.entityInfo.get(SS)
      }
      isEntityInteractable(SS) {
        const HS = xg(SS);
        return HS !== KS.Sc && 1 === this.api.queries.entityInteractable(HS)
      }
      isLocalPlayer(SS) {
        return this.isLocal(SS)
      }
      getLineOwner(SS) {
        var HS;
        const gS = null === (HS = this.deps.entityInfo.get(SS)) || void 0 === HS ? void 0 : HS.meshOpts;
        if (!gS) return null;
        try {
          const {
            lineToEId: SS
          } = JSON.parse(gS);
          return null !== SS && void 0 !== SS ? SS : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const SS = this.api.apiView;
        return eH[0] = KS.t.eye(SS, 0, 0), eH[1] = KS.t.eye(SS, 0, 1), eH[2] = KS.t.eye(SS, 0, 2), eH
      }
      getCameraFar() {
        return KS.t.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(SS) {
        null !== SS && (this.farSet = !0), this.pendingFar = SS, this.flushOwed()
      }
      turnCamera(SS, HS) {
        this.cameraTurn.turn(SS, HS)
      }
      clearPickupDelay(SS) {
        const HS = this.deps.cmd(),
          gS = xg(SS);
        HS && gS !== KS.Sc && (0, KS.de)(HS, 0, gS)
      }
      sendChat(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = this.deps.sendCmd();
        gS && FH(gS, 0, TH.b.Chat, (0, VS.f)((0, TH.l)({
          Ju: SS,
          Ou: HS
        })))
      }
      sendCommand(SS) {
        SS.length <= 119 && this.sendChat(`/${SS}`)
      }
      predictedCells(SS, HS, gS, tS) {
        const bS = this.chunks,
          XS = [],
          xS = (SS, HS, gS, tS, bS) => {
            XS.push(SS, HS, gS, tS, this.tables.blockRootId(bS) === this.tables.blockRootId(tS) ? 0 : 1)
          },
          NS = bS.XI(SS, HS, gS),
          qS = Xg(NS);
        if (qS) {
          const [tS, XS, uS] = [SS - qS.x, HS - qS.y, gS - qS.z], IS = bg[bS.XI(tS, XS, uS)], fS = null === IS || void 0 === IS ? void 0 : IS.positions.some((SS => SS.id === NS && SS.x === qS.x && SS.y === qS.y && SS.z === qS.z));
          for (const SS of (fS && IS ? IS : qS.main).positions) bS.XI(tS + SS.x, XS + SS.y, uS + SS.z) === SS.id && xS(tS + SS.x, XS + SS.y, uS + SS.z, 0, SS.id)
        }
        const uS = Xg(tS);
        if (uS)
          for (const fS of uS.main.positions) {
            const [tS, XS, NS] = [SS + fS.x - uS.x, HS + fS.y - uS.y, gS + fS.z - uS.z];
            xS(tS, XS, NS, fS.id, bS.XI(tS, XS, NS))
          } else xS(SS, HS, gS, tS, NS);
        const IS = this.tables;
        if ((0 !== IS.attachedTopOf(NS) || 0 !== IS.attachedTopOf(tS)) && bS.isLoaded(SS, HS + 1, gS)) {
          let qS = bS.XI(SS, HS + 1, gS);
          for (let tS = 0; tS < XS.length; tS += 5) XS[tS] === SS && XS[tS + 1] === HS + 1 && XS[tS + 2] === gS && (qS = XS[tS + 3]);
          const uS = this.attachedTopWrite(NS, tS, qS);
          void 0 !== uS && xS(SS, HS + 1, gS, uS, qS)
        }
        return XS
      }
      attachedTopWrite(SS, HS, gS) {
        const tS = this.tables,
          bS = tS.attachedTopOf(SS),
          XS = tS.attachedTopOf(HS),
          xS = 0 !== bS && 0 !== gS && tS.blockRootId(gS) === tS.blockRootId(bS);
        return 0 !== bS && 0 !== XS && tS.blockRootId(SS) === tS.blockRootId(HS) ? xS && gS !== XS ? XS : void 0 : 0 === XS || !xS && 0 !== gS ? xS ? 0 : void 0 : XS
      }
    }
    const ug = KS.dc + KS.hc * KS.nc.BYTES,
      Ig = 2147483647,
      fg = new TextDecoder,
      kg = new TextEncoder,
      ag = Object.freeze({
        XN: 0,
        jx: null,
        amountAddedToSlot: 0
      }),
      Kg = new Proxy({}, {
        get: () => () => KS._c
      });

    function jg(SS) {
      return Number.isInteger(SS) && SS >= 0 && SS <= 65535
    }

    function Gg(SS) {
      return Number.isInteger(SS) && SS >= 0 && SS <= 4294967295
    }
    class Cg {
      constructor(SS) {
        this.deps = SS, this.dt = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(KS.hc), this.ids = new Uint16Array(KS.hc), this.amounts = new Uint16Array(KS.hc), this.attrRead = new Float64Array(KS.hc).fill(-1), this.stale = new Uint16Array(KS.hc), this.staleVersion = new Uint32Array(KS.hc), this.instances = new Uint32Array(KS.hc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(SS) {
        var HS;
        return Number.isInteger(SS) && SS >= 0 && SS < this.len && 0 !== this.ids[SS] && null !== (HS = this.facades[SS]) && void 0 !== HS ? HS : null
      }
      Ku() {
        return this.slot(this.selected)
      }
      playerItems() {
        const SS = [];
        for (let HS = 0; HS < Math.min(KS.id, this.len); HS++) SS.push(this.slot(HS));
        return SS
      }
      freeSlots() {
        let SS = 0;
        for (let HS = 0; HS < Math.min(KS.id - KS.h, this.len); HS++) 0 === this.ids[HS] && SS++;
        return SS
      }
      amountOf(SS) {
        let HS = 0;
        for (let tS = 0; tS < Math.min(KS.id, this.len); tS++) {
          const bS = this.slot(tS);
          var gS;
          if ((null === bS || void 0 === bS ? void 0 : bS.name) === SS) HS += null !== (gS = bS.amount) && void 0 !== gS ? gS : 1
        }
        return HS
      }
      instance(SS) {
        var HS;
        return null !== (HS = this.instances[SS]) && void 0 !== HS ? HS : 0
      }
      watch(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      touch() {
        this.version++
      }
      flush(SS) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const gS of [...this.listeners]) try {
            gS()
          } catch (HS) {
            SS(HS)
          }
        }
      }
      chestOpened(SS, HS, gS) {
        this.dt[0] = SS, this.dt[1] = HS, this.dt[2] = gS, this.version++
      }
      refresh() {
        const SS = this.deps.api.apiView,
          HS = KS.t.inventoryViewPtr(SS, 0),
          gS = KS.t.inventoryVersion(SS, 0),
          tS = KS.t.selectedSlot(SS, 0);
        tS !== this.selected && (this.selected = tS, this.version++);
        const bS = KS.t.slotIcon(SS, 0);
        if (bS !== this.slotIconId && (this.slotIconId = bS, this.iconChanged = !0), HS === this.viewPtr && gS === this.viewVersion) return;
        this.viewPtr = HS, this.viewVersion = gS;
        const XS = this.deps.api.memoryData(HS, ug, 4, "the inventory view"),
          xS = XS ? Math.min(XS.getUint32(0, !0), KS.hc) : 0;
        xS !== this.len && (this.len = xS, this.version++);
        let NS = 0;
        for (let qS = 0; qS < KS.hc; qS++) {
          const SS = KS.dc + qS * KS.nc.BYTES,
            HS = null !== XS && qS < xS ? KS.nc.item(XS, SS) : 0;
          if (0 === HS || null === XS) {
            0 !== this.ids[qS] && (this.ids[qS] = 0, this.attrRead[qS] = -1, this.instances[qS]++, this.version++);
            continue
          }
          const gS = KS.nc.amount(XS, SS),
            tS = KS.nc.attrVersion(XS, SS);
          HS === this.ids[qS] && gS === this.amounts[qS] || this.fill(qS, HS, gS), tS !== this.attrRead[qS] && (this.stale[NS] = qS, this.staleVersion[NS] = tS, NS++)
        }
        NS > 0 && this.fetchAttributes(NS)
      }
      fill(SS, HS, gS) {
        const {
          tables: tS
        } = this.deps, bS = HS !== this.ids[SS];
        let XS = this.facades[SS];
        XS || (XS = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[SS] = XS), bS && (XS.name = tS.nameOfId(HS), XS.typeObj = tS.itemType(HS), XS.attributes = {
          customAttributes: {}
        }, this.attrRead[SS] = -1, this.instances[SS]++), XS.amount = 0 === gS ? null : gS, this.ids[SS] = HS, this.amounts[SS] = gS, this.version++
      }
      fetchAttributes(SS) {
        const {
          api: HS,
          onError: gS
        } = this.deps, tS = HS.memoryView(Uint16Array, HS.scratch(), SS, "item_attributes_batch's slots");
        if (!tS) return void this.markRead(SS);
        tS.set(this.stale.subarray(0, SS));
        const bS = HS.queries.itemAttributesBatch(SS),
          XS = 4294967295 === bS ? null : HS.memoryData(HS.scratch(), bS, 4, "item_attributes_batch's answer");
        if (!XS) return void this.markRead(SS);
        const xS = new Uint8Array(XS.buffer, XS.byteOffset, bS);
        for (let qS = 0; qS + 8 <= bS;) {
          const SS = XS.getUint16(qS, !0),
            HS = XS.getUint32(qS + 4, !0),
            tS = xS.subarray(qS + 8, qS + 8 + HS);
          qS += 8 + (0, kS.ue)(HS);
          const bS = this.facades[SS];
          if (bS && 0 !== this.ids[SS] && 0 !== HS) {
            try {
              bS.attributes = JSON.parse(fg.decode(tS))
            } catch (NS) {
              gS(NS)
            }
            this.version++
          }
        }
        this.markRead(SS)
      }
      markRead(SS) {
        for (let HS = 0; HS < SS; HS++) this.attrRead[this.stale[HS]] = this.staleVersion[HS]
      }
      swap(SS, HS) {
        return jg(SS) && jg(HS) && this.settle(this.queries().invSwap(SS, HS))
      }
      move(SS, HS, gS) {
        return jg(SS) && jg(HS) && Gg(gS) && this.settle(this.queries().invMove(SS, HS, gS))
      }
      quickMove(SS, HS, gS, tS) {
        var bS, XS;
        if (!jg(SS) || !jg(HS) || !jg(gS) || null !== tS && !Gg(tS)) return null;
        const xS = this.queries().invQuickMove(SS, HS, gS, null === tS ? -1 : Math.min(tS, Ig)),
          NS = xS === KS._c ? KS.wb : null !== (bS = null === (XS = this.extras()) || void 0 === XS ? void 0 : XS[1]) && void 0 !== bS ? bS : KS.wb;
        return this.settle(xS), NS === KS.wb ? null : NS
      }
      remove(SS, HS, gS) {
        return jg(SS) && Gg(HS) && this.settle(this.queries().invRemove(SS, HS, gS ? 1 : 0))
      }
      selectSlot(SS) {
        return jg(SS) && this.settle(this.queries().selectSlot(SS))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(SS, HS, gS) {
        if (!jg(SS) || !Number.isInteger(HS)) return !1;
        const [tS, bS, XS] = gS;
        return this.settle(this.queries().invEnchant(SS, HS, Math.floor(tS), Math.floor(bS), Math.floor(XS)))
      }
      craft(SS, HS, gS) {
        let tS;
        try {
          tS = this.deps.tables.getItemId(SS)
        } catch {
          return ag
        }
        if (!jg(HS) || null !== gS && (Number.isNaN(gS) || gS < 0)) return ag;
        const bS = null === gS || gS > Ig ? -1 : Math.floor(gS),
          XS = this.queries().craft(tS, HS, bS);
        let xS = ag;
        const NS = XS === KS._c ? null : this.extras();
        if (NS) {
          const [SS, HS, gS] = NS;
          xS = {
            XN: SS,
            jx: HS === KS.wb ? null : HS,
            amountAddedToSlot: gS
          }
        }
        return this.settle(XS), xS
      }
      salvage(SS, HS, gS) {
        let tS;
        try {
          tS = this.deps.tables.getItemId(HS)
        } catch {
          return !1
        }
        return jg(SS) && Number.isInteger(gS) && this.settle(this.queries().salvage(SS, tS, Math.max(Math.min(gS, Ig), -Ig)))
      }
      craftingView(SS, HS, gS) {
        var tS;
        if (this.stopped) return null;
        const {
          api: bS,
          onError: XS
        } = this.deps, xS = SS ? kg.encode(SS) : null;
        if (null !== xS) {
          if (xS.length > 1024) return XS(new Error(`The crafting station ${SS}'s name is over 1024 bytes`)), null;
          const HS = bS.memoryView(Uint8Array, bS.scratch(), xS.length, "crafting_view's station");
          if (!HS) return null;
          HS.set(xS)
        }
        const NS = jg(HS) && jg(gS),
          qS = bS.queries.craftingView(null !== (tS = null === xS || void 0 === xS ? void 0 : xS.length) && void 0 !== tS ? tS : 0, NS ? HS : 0, NS ? gS : 0);
        return qS < KS.Y.BYTES ? (bS.reportCorruption(`crafting_view's answer of ${qS} bytes`), null) : bS.memoryData(bS.scratch(), qS, 1, "crafting_view's answer")
      }
      queries() {
        var SS, HS;
        return !1 === (null === (SS = (HS = this.deps).beforeOp) || void 0 === SS ? void 0 : SS.call(HS)) ? (this.stopped = !0, Kg) : this.deps.api.queries
      }
      extras() {
        const {
          api: SS
        } = this.deps;
        return SS.memoryView(Uint32Array, SS.scratch(), 3, "a sync query's extra words")
      }
      settle(SS) {
        if (SS === KS.Yc)(0, MH.c)();
        else if (SS !== KS._c) {
          const HS = this.deps.cmd();
          HS && function(SS, HS, gS) {
            return (0, MH.c)(), (0, KS.ag)(SS, HS, gS)
          }(HS, 0, SS) || this.deps.onError(new Error(`Sync op ${SS}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), SS !== KS._c
      }
    }
    const ng = 1 / .6,
      Pg = [0, 1, 0],
      Qg = [0, 0, 0],
      Dg = new Uint8Array(0),
      wg = 1.2 * KH.e.UG,
      hg = new TextEncoder,
      Zg = [0, 0, 0],
      Jg = [0, 0, 0],
      Og = new Map;

    function dg(SS) {
      let HS = Og.get(SS);
      return HS || (Og.size >= 64 && Og.clear(), HS = hg.encode(`{"emitRate":${SS}}`), Og.set(SS, HS)), HS
    }

    function cg(SS) {
      return Number.isFinite(SS) && SS > 0 ? SS : 0
    }

    function vg(SS, HS) {
      for (let gS = 0; gS < 3; gS++) {
        const tS = Math.abs(HS[gS]);
        Zg[gS] = SS[gS] - tS, Jg[gS] = 2 * tS
      }
      return Number.isFinite(Zg[0] + Zg[1] + Zg[2] + Jg[0] + Jg[1] + Jg[2])
    }

    function Eg(SS, HS) {
      return "pos1" === SS || "pos2" === SS ? void 0 : HS
    }

    function Lg(SS, HS, gS) {
      return SS.length > KS.vd.MaxOpts ? (gS(new Error(`${HS}'s particle opts are over ${KS.vd.MaxOpts} bytes of JSON`)), null) : SS
    }
    const Yg = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Ag {
      constructor(SS) {
        this.deps = SS, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(SS, HS) {
        var gS;
        const tS = this.sink(),
          bS = null !== (gS = HS.half) && void 0 !== gS ? gS : Qg;
        if (!tS || this.live >= KS.vd.MaxLiveKeys || this.nextKey > KS.vd.MaxKey || !vg(HS.pos, bS)) return Yg;
        const XS = this.nextKey,
          xS = Lg(function(SS) {
            var HS, gS, tS;
            const bS = JSON.stringify({
              texture: "string" === typeof SS.texture ? SS.texture : "smokePuff",
              hf: SS.hf,
              minLifeTime: SS.minLifeTime,
              maxLifeTime: SS.maxLifeTime,
              minSize: SS.minSize,
              maxSize: SS.maxSize,
              minEmitPower: SS.minEmitPower,
              maxEmitPower: SS.maxEmitPower,
              emitRate: cg(SS.emitRate),
              gravity: null !== (HS = SS.gravity) && void 0 !== HS ? HS : Qg,
              dir1: null !== (gS = SS.dir1) && void 0 !== gS ? gS : Pg,
              dir2: null !== (tS = SS.dir2) && void 0 !== tS ? tS : Pg,
              colorGradients: SS.colorGradients,
              blendMode: SS.blendMode
            });
            return hg.encode(bS)
          }(SS), "createParticles", this.deps.onError);
        return xS && (0, KS.df)(tS, 0, XS, 0, KS.vd.PresetNone, 0, Zg, Jg, xS) ? (this.nextKey++, this.live++, this.started = !0, new yg(this, this.session, XS, SS, bS)) : Yg
      }
      playEffect(SS) {
        const HS = this.sink(),
          {
            pos1: gS,
            pos2: tS
          } = SS;
        if (!HS || !gS || !tS) return;
        for (let XS = 0; XS < 3; XS++) Zg[XS] = Math.min(gS[XS], tS[XS]), Jg[XS] = Math.abs(tS[XS] - gS[XS]);
        if (!Number.isFinite(Zg[0] + Zg[1] + Zg[2] + Jg[0] + Jg[1] + Jg[2])) return;
        const bS = Lg(hg.encode(JSON.stringify(SS, Eg)), "playParticleEffect", this.deps.onError);
        bS && (0, KS._e)(HS, 0, 0, KS.vd.PresetNone, KS.vd.HasBox, 0, Zg, Jg, bS)
      }
      burstPreset(SS, HS, gS) {
        const tS = this.sink(),
          bS = Math.min(Math.floor(gS), KS.vd.MaxBurst);
        if (!tS || !Object.hasOwn(KS.Tb, SS) || !(bS > 0)) return;
        const XS = wg;
        for (let xS = 0; xS < 3; xS++) Zg[xS] = HS[xS] - XS / 2, Jg[xS] = XS;
        Number.isFinite(Zg[0] + Zg[1] + Zg[2]) && (0, KS._e)(tS, 0, 0, KS.Tb[SS], KS.vd.HasBox, bS, Zg, Jg, Dg)
      }
      sessionEnded() {
        this.session++;
        const SS = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !SS || (0, KS.ff)(SS, 0)
      }
      sinkFor(SS) {
        return SS === this.session ? this.deps.cmd() : null
      }
      stop(SS, HS) {
        const gS = this.sinkFor(SS);
        gS && (0, KS.hf)(gS, 0, HS) && this.live--
      }
    }
    class yg {
      constructor(SS, HS, gS, tS, bS) {
        this.owner = SS, this.session = HS, this.key = gS, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(bS[0]), Math.abs(bS[1]), Math.abs(bS[2])], this.rate = cg(tS.emitRate), this.emitted = this.rate > 0;
        const XS = tS.maxLifeTime * ng * 1e3 + 250;
        this.stopDelayMs = XS >= 0 ? Math.min(XS, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(SS, HS) {
        const gS = this.sink();
        if (gS) {
          if (HS)
            for (let SS = 0; SS < 3; SS++) this.half[SS] = Math.abs(HS[SS]);
          vg(SS, this.half) && (0, KS.if)(gS, 0, this.key, KS.vd.HasBox, Zg, Jg, Dg)
        }
      }
      setEmitRate(SS) {
        const HS = this.sink(),
          gS = cg(SS);
        HS && gS !== this.rate && (0, KS.if)(HS, 0, this.key, 0, Qg, Qg, dg(gS)) && (this.rate = gS, this.emitted ||= gS > 0)
      }
      emit(SS) {
        const HS = this.sink(),
          gS = Math.min(Math.floor(SS), KS.vd.MaxBurst);
        HS && gS > 0 && (0, KS._e)(HS, 0, this.key, KS.vd.PresetNone, 0, gS, Qg, Qg, Dg) && (this.emitted = !0)
      }
      emitPoints(SS, HS, gS) {
        const tS = this.sink(),
          bS = Math.min(Math.floor(gS), KS.vd.MaxPoints, Math.floor(HS.length / 4));
        if (!tS || !(bS > 0) || !Number.isFinite(SS[0] + SS[1] + SS[2])) return;
        const XS = new Uint8Array(HS.buffer, HS.byteOffset, bS * KS.vd.PointBytes);
        (0, KS.af)(tS, 0, this.key, bS, SS, XS) && (this.emitted = !0)
      }
      setDirections(SS, HS) {
        const gS = this.sink();
        if (!gS || !Number.isFinite(SS[0] + SS[1] + SS[2] + HS[0] + HS[1] + HS[2])) return;
        const tS = hg.encode(JSON.stringify({
          dir1: [SS[0], SS[1], SS[2]],
          dir2: [HS[0], HS[1], HS[2]]
        }));
        (0, KS.if)(gS, 0, this.key, 0, Qg, Qg, tS)
      }
      stop() {
        const SS = this.sink();
        this.stopped = !0, SS && (this.emitted ? (this.rate > 0 && (0, KS.if)(SS, 0, this.key, 0, Qg, Qg, dg(0)), setTimeout((() => {
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
    const Vg = pH.r,
      ig = new TextDecoder;

    function Wg(SS, HS) {
      const {
        serverIds: gS,
        kinds: tS
      } = SS;
      let bS = 0;
      for (let XS = 0; XS < gS.length; XS++) {
        const SS = gS[XS];
        if (SS !== KS.Sc && !DS(tS[XS])) {
          if (bS === HS.length) {
            const SS = new Int32Array(Math.max(64, 2 * bS));
            SS.set(HS), HS = SS
          }
          HS[bS++] = SS
        }
      }
      return {
        ids: HS,
        count: bS
      }
    }

    function zg(SS, HS) {
      return SS.length >= HS ? SS : new Int32Array(Math.max(HS, 2 * SS.length))
    }

    function Ug(SS, HS, gS, tS) {
      for (let bS = 0; bS < gS; bS += 4096) {
        const XS = Math.min(4096, gS - bS),
          xS = SS.memoryView(Int32Array, SS.scratch(), XS, "entity_info_batch's ids");
        if (!xS) return !1;
        xS.set(HS.subarray(bS, bS + XS));
        const NS = SS.queries.entityInfoBatch(XS),
          qS = 4294967295 === NS ? null : SS.memoryData(SS.scratch(), NS, 4, "entity_info_batch's records");
        if (!qS) return !1;
        for (let SS = 0; SS + KS.Db.BYTES <= NS;) {
          const HS = KS.Db.len(qS, SS);
          tS(KS.Db.serverId(qS, SS), pg(qS, SS, HS)), SS += KS.Db.BYTES + (0, kS.ue)(HS)
        }
      }
      return !0
    }

    function pg(SS, HS, gS) {
      var tS, bS, XS;
      const xS = KS.Db.kind(SS, HS),
        NS = 0 === xS ? null : wS(xS);
      if (null === NS) return null;
      const qS = KS.Db.variation(SS, HS),
        uS = KS.Db.pose(SS, HS),
        IS = KS.Db.meta(SS, HS),
        fS = KS.Db.mesh(SS, HS),
        kS = 0 !== (KS.Db.flags(SS, HS) & KS.zb.HasOpts),
        aS = Vg[NS];
      return Object.freeze({
        type: NS,
        variation: qS === KS.Xc ? void 0 : null !== (tS = null !== (bS = null === aS || void 0 === aS ? void 0 : aS[qS]) && void 0 !== bS ? bS : null === aS || void 0 === aS ? void 0 : aS[0]) && void 0 !== tS ? tS : "default",
        pose: uS === KS.$b ? void 0 : null !== (XS = KS.rb[uS]) && void 0 !== XS ? XS : KS.rb[0],
        metaInfo: IS === KS.$b ? void 0 : KS.Kc[IS],
        meshKind: fS === KS.$b ? void 0 : KS.Jc[fS],
        meshOpts: kS ? ig.decode(new Uint8Array(SS.buffer, SS.byteOffset + HS + KS.Db.BYTES, gS)) : void 0
      })
    }
    const sg = 1,
      Bg = 2;
    class Mg {
      constructor(SS) {
        this.deps = SS, this.wanted = 0, this.Ku = !1, this.refused = !1
      }
      get on() {
        return this.Ku
      }
      want(SS, HS) {
        this.wanted = HS ? this.wanted | SS : this.wanted & ~SS;
        const gS = 0 !== this.wanted;
        if (gS === this.Ku) return;
        const tS = this.deps.cmd();
        null !== tS ? (0, KS.fg)(tS, 0, gS ? 1 : 0) ? (this.Ku = gS, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Ku = !1
      }
    }
    class Fg {
      constructor(SS) {
        this.deps = SS, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(SS) {
        var HS;
        return this.complete || this.fill(), null !== (HS = this.entries.get("string" === typeof SS ? SS : String(SS))) && void 0 !== HS ? HS : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(SS) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const SS = new Int32Array(2 * this.pending.length);
            SS.set(this.pending), this.pending = SS
          }
          this.pending[this.pendingCount++] = SS
        }
      }
      removed(SS) {
        this.entries.size > 0 && this.entries.delete(String(SS))
      }
      refresh() {
        const SS = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (SS > 0 && this.complete) {
          const {
            api: HS
          } = this.deps;
          let gS = 0;
          const tS = this.ids = zg(this.ids, SS);
          for (let bS = 0; bS < SS; bS++) {
            const SS = this.pending[bS],
              XS = HS.indexById.get(SS);
            void 0 === XS || DS(HS.kinds[XS]) ? this.entries.delete(String(SS)) : tS[gS++] = SS
          }
          gS > 0 && !this.batch(tS, gS) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(sg, !1)
      }
      fill() {
        const {
          api: SS
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: SS
          } = this.deps, HS = SS.on;
          SS.want(sg, !0), !HS && SS.on && (this.refill = this.midFrame)
        }
        const {
          ids: HS,
          count: gS
        } = Wg(SS, this.ids);
        this.ids = HS, gS > 0 && !this.batch(HS, gS) && (this.refill = !0)
      }
      batch(SS, HS) {
        return Ug(this.deps.api, SS, HS, ((SS, HS) => {
          null === HS ? this.entries.delete(String(SS)) : this.entries.set(String(SS), HS)
        }))
      }
    }
    var Rg = gS(4935);

    function Tg(SS) {
      if ("message" !== SS.type || SS.Ju !== Rg.kc.NewClientOptions || SS.payloadKind !== kS.xc.Msgpack) return null;
      const HS = (0, VS.c)(SS.payload);
      if (null === HS || "object" !== typeof HS || Array.isArray(HS)) throw new Error("NewClientOptions whose body isn't an object of options");
      return HS
    }
    var og = gS(1327),
      lg = gS(36650);

    function mg(SS, HS, gS, tS, bS, XS, NS) {
      var qS, uS, IS;
      switch (SS) {
        case KS.Vd.ToggleMenu: {
          const SS = KS.D[HS];
          xS.k.cj("toggleMenu", void 0 === SS ? "inventory" : `inventory|${SS}`);
          break
        }
        case KS.Vd.EditBoard:
          xS.k.cj("EditBoard", {
            pos: 0 === HS ? null : gS
          });
          break;
        case KS.Vd.EditCodeBlock:
        case KS.Vd.ViewCodeBlock:
          xS.k.cj("EditCodeBlock", {
            pos: gS,
            canChangePos: SS === KS.Vd.EditCodeBlock
          });
          break;
        case KS.Vd.EditCustomLobbyBlock:
          xS.k.cj("EditCustomLobbyBlock", {
            pos: gS
          });
          break;
        case KS.Vd.OpenIronChest:
          xS.k.cj("OpenIronChest", {
            pos: gS
          });
          break;
        case KS.Vd.EditNameTag:
          xS.k.cj("EditNameTag", null !== (qS = null === (uS = bS.Ku()) || void 0 === uS || null === (IS = uS.attributes.customAttributes) || void 0 === IS ? void 0 : IS.text) && void 0 !== qS ? qS : "");
          break;
        case KS.Vd.EditBook: {
          var fS, kS, jS;
          const SS = null === (fS = bS.Ku()) || void 0 === fS ? void 0 : fS.attributes;
          xS.k.cj("EditBook", {
            pages: (0, og.P)(null === SS || void 0 === SS || null === (kS = SS.customAttributes) || void 0 === kS ? void 0 : kS.pages),
            title: null !== (jS = null === SS || void 0 === SS ? void 0 : SS.customDisplayName) && void 0 !== jS ? jS : "Title",
            isPublished: !(null === SS || void 0 === SS || !SS.customDescription)
          });
          break
        }
        case KS.Vd.CantChangeBlock:
          ! function(SS, HS) {
            const gS = HS.getClientOption("cantChangeError"),
              tS = HS.getClientOption(SS ? "cantBuildError" : "cantBreakError"),
              bS = SS ? gS : tS;
            (HS.getClientOption("canChange") || bS || "You cannot modify this block" !== gS) && xS.k.cj("showBottomMessage", {
              message: tS || gS,
              type: "Error"
            })
          }(1 === HS, XS);
          break;
        case KS.Vd.MiddleBarStart:
          xS.k.cj("middleScreenBarInitiate", {
            duration: tS,
            Mt: 1 === gS[0],
            horizBarRemOffset: HS
          });
          break;
        case KS.Vd.MiddleBarStop:
          xS.k.cj("middleScreenBarRemove");
          break;
        case KS.Vd.Hitmarker:
          xS.k.cj("localGunHitmarker", {
            Pt: 1 === HS
          });
          break;
        case KS.Vd.ShotsLeft:
          xS.k.cj("localPlayerNewShotsLeft", tS);
          break;
        case KS.Vd.AimingOverlay:
          xS.k.cj("aimingOverlay", 3 === (3 & HS) ? "sniper" : "none");
          break;
        case KS.Vd.BottomMessage:
          xS.k.cj("showBottomMessage", JSON.parse(NS()));
          break;
        case KS.Vd.Crosshair:
          bS.inaccuracy = (0, iS.e)(tS), (0, lg.c)().crosshairAccuracy(bS.inaccuracy);
          break;
        case KS.Vd.ChargeStage:
          break;
        case KS.Vd.EmoteWheelClose:
          xS.k.cj("requestEmoteWheelClose");
          break;
        case KS.Vd.BlockMined:
          xS.k.cj("localBlockMined");
          break;
        default:
          throw new aS.b(`UiEvent of no kind: what ${SS}`)
      }
    }
    var eg = gS(38022),
      rg = gS(34235),
      St = gS(2097),
      Ht = gS(36827),
      gt = gS(34248),
      tt = gS(4911);
    const bt = 10,
      Xt = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      xt = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Nt = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function qt(SS, HS) {
      let gS, tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const XS = () => (gS = (0, St.s)(gS, HS()), gS);
      return {
        current: XS,
        watch(HS) {
          const gS = () => {
              HS(XS())
            },
            xS = [SS.watch(gS)];
          return null !== tS && xS.push((0, St.w)((SS => {
            SS.some(tS) && gS()
          }))), null !== bS && xS.push(bS(gS)), () => {
            for (const SS of xS) SS()
          }
        }
      }
    }

    function ut(SS) {
      return SS && {
        name: SS.name,
        amount: SS.amount,
        attributes: SS.attributes
      }
    }
    const It = new WeakMap;

    function ft(SS) {
      let HS = It.get(SS);
      return void 0 === HS && (HS = (0, gt.creativeItemIds)().map((HS => ({
        name: SS.nameOfId(HS),
        amount: SS.isStackableId(HS) ? 1 : null,
        attributes: (0, eg.d)("Gun" === (0, gt.itemTypeOf)(HS) ? {
          type: "Gun",
          clipSize: (0, gt.clipSizeOf)(HS)
        } : void 0)
      }))), It.set(SS, HS)), HS
    }

    function kt(SS, HS, gS, tS) {
      const bS = HS => (SS.flush(tS), HS),
        XS = gS => {
          var tS, bS, XS, xS, NS, qS, uS;
          const IS = SS.slot(gS);
          if (!IS) return null;
          const {
            rootName: fS,
            metaStr: kS
          } = HS.getMetaInfo(IS.name);
          return {
            name: IS.name,
            amount: IS.amount,
            attributes: IS.attributes,
            instance: SS.instance(gS),
            displayName: null !== (tS = IS.attributes.customDisplayName) && void 0 !== tS ? tS : HS.getDisplayName(fS),
            requiresAmmo: "RequiresAmmo" === kS,
            clipSize: null !== (bS = null !== (XS = null === (xS = IS.attributes.customAttributes) || void 0 === xS || null === (NS = xS.gunStats) || void 0 === NS ? void 0 : NS.clipSize) && void 0 !== XS ? XS : null === (qS = HS.getGunStats(fS)) || void 0 === qS ? void 0 : qS.clipSize) && void 0 !== bS ? bS : null === (uS = IS.typeObj) || void 0 === uS ? void 0 : uS.clipSize
          }
        },
        NS = function(SS, HS) {
          let gS = null,
            tS = {
              focus: null,
              recipes: [],
              detail: null
            },
            bS = -1;
          const XS = new Set;
          return {
            read() {
              var XS, xS;
              if (null === gS) return null !== tS.focus && (tS = {
                ...tS,
                focus: null
              }), tS;
              if (tS.focus === gS && bS === SS.changes) return tS;
              if (bS = SS.changes, 0 === SS.length) return tS = {
                focus: gS,
                recipes: [],
                detail: null
              }, tS;
              let NS = 0;
              if (null !== gS.recipe) try {
                NS = HS.getItemId(gS.recipe.name)
              } catch {}
              const qS = SS.craftingView(gS.station, NS, null !== (XS = null === (xS = gS.recipe) || void 0 === xS ? void 0 : xS.bN) && void 0 !== XS ? XS : 0);
              return tS = null === qS ? {
                focus: gS,
                recipes: [],
                detail: null
              } : function(SS, HS, gS) {
                let tS = KS.Y.BYTES;
                const bS = [];
                for (let IS = KS.Y.recipes(SS, 0); IS > 0; IS--) {
                  const gS = KS.U.flags(SS, tS),
                    XS = {
                      name: HS.nameOfId(KS.U.item(SS, tS)),
                      bN: KS.U.recipe(SS, tS),
                      requires: [],
                      produces: KS.U.produces(SS, tS),
                      haveIngredients: 0 !== (gS & KS.R.HaveIngredients),
                      listed: 0 !== (gS & KS.R.Listed)
                    };
                  let xS = KS.U.requires(SS, tS);
                  for (tS += KS.U.BYTES; xS > 0; xS--) {
                    const gS = KS.W.items(SS, tS);
                    XS.requires.push({
                      items: Gt(SS, tS + KS.W.BYTES, gS, HS),
                      amt: KS.W.amount(SS, tS)
                    }), tS += KS.W.BYTES + 2 * gS
                  }
                  bS.push(XS)
                }
                const XS = KS.Y.flags(SS, 0);
                if (null === gS.recipe || 0 === (XS & KS.X.Detail)) return {
                  focus: gS,
                  recipes: bS,
                  detail: null
                };
                const xS = {},
                  NS = {};
                for (let IS = KS.Y.ingredients(SS, 0); IS > 0; IS--) {
                  const gS = KS.O.item(SS, tS),
                    bS = KS.O.from(SS, tS),
                    XS = KS.O.amount(SS, tS);
                  tS += KS.O.BYTES;
                  const qS = bS === KS.B ? null : Gt(SS, tS, bS, HS);
                  if (null !== qS && (tS += 2 * bS), 0 === gS) continue;
                  const uS = HS.nameOfId(gS);
                  xS[uS] = XS, null !== qS && (NS[uS] = qS)
                }
                const {
                  name: qS,
                  bN: uS
                } = gS.recipe;
                return {
                  focus: gS,
                  recipes: bS,
                  detail: {
                    name: qS,
                    bN: uS,
                    craftAllTimes: KS.Y.craftAllTimes(SS, 0),
                    roomForOne: 0 !== (XS & KS.X.RoomForOne),
                    resultStackable: Boolean(HS.getItemStat(qS, "stackable")),
                    amounts: xS,
                    ingredientsCraftedFrom: NS
                  }
                }
              }(qS, HS, gS), tS
            },
            setFocus(SS) {
              gS = SS;
              for (const HS of [...XS]) HS()
            },
            watchFocus: SS => (XS.add(SS), () => {
              XS.delete(SS)
            })
          }
        }(SS, HS);
      return {
        states: {
          inventory: qt(SS, (() => {
            const gS = SS.length;
            if (0 === gS) return Xt;
            const tS = [];
            for (let HS = 0; HS < KS.id; HS++) tS.push(ut(SS.slot(HS)));
            const bS = SS.slotIcon,
              XS = tS[SS.selectedSlot];
            0 !== bS && XS && (tS[SS.selectedSlot] = {
              ...XS,
              icon: HS.nameOfId(bS)
            });
            const xS = !0 === HS.getClientOption("creative");
            let NS = [],
              qS = null;
            if (gS > KS.id) {
              for (let HS = KS.id; HS < gS; HS++) NS.push(ut(SS.slot(HS)));
              qS = {
                type: null,
                pos: [...SS.dt],
                numSlots: gS - KS.id,
                ironChest: null
              }
            } else xS && (NS = ft(HS));
            return {
              player: tS,
              chestOrCreative: NS,
              chest: qS,
              creative: xS,
              selectedSlot: SS.selectedSlot,
              freeSlots: SS.freeSlots()
            }
          }), (0, St.n)("creative")),
          hotbar: qt(SS, (() => {
            if (0 === SS.length) return xt;
            const HS = [];
            for (let SS = 0; SS < bt; SS++) HS.push(XS(SS));
            return {
              items: HS,
              ammo: SS.amountOf("Ammo"),
              selectedSlot: SS.selectedSlot
            }
          }), (0, St.j)("DisplayName", "GunStats")),
          crafting: qt(SS, NS.read, null, NS.watchFocus),
          heldItemAim: qt(SS, (() => {
            var HS;
            if (!gS()) return Nt;
            const tS = null === (HS = SS.Ku()) || void 0 === HS ? void 0 : HS.typeObj,
              bS = "Gun" === (null === tS || void 0 === tS ? void 0 : tS.type);
            return {
              gun: bS,
              aimable: bS || !0 === (null === tS || void 0 === tS ? void 0 : tS.showsAimingUi),
              chargeName: "Chargeable" === (null === tS || void 0 === tS ? void 0 : tS.type) ? tS.name : null
            }
          }), null, (SS => function(SS, HS) {
            let gS = SS();
            return (0, tt.w)((() => {
              const tS = SS();
              tS !== gS && (gS = tS, HS(tS))
            }))
          }(gS, SS)))
        },
        events: {
          hotbarSlotRequested: (0, St.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, St.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, St.c)("numkeyPressed"),
          inventoryDropRequested: (0, St.c)("DropInvenItem"),
          chestToggled: (0, St.c)("chestToggleFromServer"),
          chestRefreshed: (0, St.c)("chestRefreshedFromServer", jt),
          inventorySynced: (0, St.c)("syncedInvenFromServer", jt),
          enchantingTableOpened: (0, St.c)("enchantingTable", (SS => {
            let {
              position: gS,
              XI: tS
            } = SS;
            return {
              position: [...gS],
              blockName: HS.getMetaInfo(tS).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(HS) {
            SS.selectSlot(HS), SS.flush(tS)
          },
          removeInventoryItem(HS) {
            let {
              slot: gS,
              amount: tS,
              drop: XS
            } = HS;
            return bS(SS.remove(gS, tS, XS))
          },
          swapInventorySlots(HS) {
            let {
              a: gS,
              b: tS
            } = HS;
            return bS(SS.swap(gS, tS))
          },
          moveInventoryItem(HS) {
            let {
              from: gS,
              to: tS,
              amount: XS
            } = HS;
            return bS(SS.move(gS, tS, XS))
          },
          quickMoveInventoryItem(HS) {
            let {
              slot: gS,
              start: tS,
              end: XS,
              amount: xS
            } = HS;
            return bS(SS.quickMove(gS, tS, XS, xS))
          },
          closeChest() {
            SS.closeChest(), SS.flush(tS), xS.k.cj("chestClosedByPlayer")
          },
          focusCrafting(SS) {
            NS.setFocus(SS)
          },
          craftRecipe(HS) {
            let {
              name: gS,
              bN: tS,
              times: XS
            } = HS;
            return bS(SS.craft(gS, tS, XS))
          },
          salvageItem(HS) {
            let {
              slot: gS,
              name: tS,
              amount: XS
            } = HS;
            return bS(SS.salvage(gS, tS, XS))
          },
          enchantItem(HS) {
            let {
              slot: gS,
              level: tS,
              tablePos: bS
            } = HS;
            SS.enchant(gS, tS, bS)
          }
        },
        queries: {
          enchantingOffer(gS) {
            let {
              slot: tS,
              blockName: bS
            } = gS;
            return function(SS, HS, gS, tS) {
              const bS = SS.slot(gS);
              if (!bS || !HS.getClientOption("canCraft") || !(0, rg.q)(tS) || (0, rg.m)(bS.attributes)) return Kt;
              const XS = (0, gt.enchantmentPerksOf)(HS.getItemId(bS.name));
              if (0 === XS.length) return Kt;
              const xS = [];
              for (let NS = 0; NS < Ht.c; NS++) {
                const {
                  commonProb: SS,
                  uncommonProb: HS,
                  rareProb: gS,
                  epicProb: bS,
                  legendaryProb: XS,
                  level: qS
                } = (0, rg.f)(tS, NS);
                xS.push({
                  level: qS,
                  odds: [SS, HS, gS, bS, XS].map((SS => 100 * SS))
                })
              }
              return {
                perks: [...XS],
                options: xS
              }
            }(SS, HS, tS, bS)
          }
        }
      }
    }
    const Kt = Object.freeze({
      perks: [],
      options: []
    });

    function jt() {
      return null
    }

    function Gt(SS, HS, gS, tS) {
      const bS = [];
      for (let XS = 0; XS < gS; XS++) {
        const gS = SS.getUint16(HS + 2 * XS, !0);
        0 !== gS && bS.push(tS.nameOfId(gS))
      }
      return bS
    }
    class Ct {
      constructor(SS) {
        this.api = SS, this.positions = new Map, this.targeted = {
          Rl: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          pa: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(SS) {
        let HS = this.positions.get(SS);
        return HS || (this.api.checkValid(SS) || this.api.isLocal(SS) ? (HS = [NaN, NaN, NaN], this.api.readPosition(SS, HS), this.positions.set(SS, HS), HS) : null)
      }
      ISS() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [HS, gS] of this.positions) this.api.readPosition(HS, gS) || this.api.checkValid(HS) || this.api.isLocal(HS) || this.positions.delete(HS);
        const SS = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (KS.t.playerFlags(SS, 0) & KS.zd.Breaking) && KS.t.breakingProgress(SS, 0) >= 0, this.isBreaking)
          for (let HS = 0; HS < 3; HS++) this.breaking[HS] = KS.t.breakingPos(SS, 0, HS)
      }
      refreshTarget() {
        const SS = this.api.apiView,
          HS = KS.t.targetBlockId(SS, 0);
        if (this.hasTarget = HS !== KS.Tc, this.hasTarget) {
          const gS = this.targeted;
          gS.Rl = HS;
          for (let HS = 0; HS < 3; HS++) gS.position[HS] = KS.t.targetBlock(SS, 0, HS), gS.normal[HS] = KS.t.targetNormal(SS, 0, HS), gS.pa[HS] = KS.t.targetAdjacent(SS, 0, HS)
        }
      }
      despawned(SS) {
        const HS = this.positions.get(SS);
        HS && !this.api.isLocal(SS) && (HS.fill(NaN), this.positions.delete(SS))
      }
    }
    var nt = gS(40664),
      Pt = gS(40649),
      Qt = gS(36822);
    const Dt = 1,
      wt = 2;
    class ht {
      constructor() {
        this.game = new Qt.e, this.client = new Qt.e, this.Ku = 0, this.movesFly = null
      }
      setGame(SS) {
        if (null === SS || "object" !== typeof SS) return !1;
        const {
          key: HS,
          value: gS
        } = SS;
        return "string" === typeof HS && (this.game.setBooleanType(HS, Boolean(gS)), !0)
      }
      setClient(SS, HS) {
        this.client.setBooleanType(SS, HS)
      }
      clearGame() {
        this.game = new Qt.e, this.movesFly = null
      }
      setMovesFly(SS) {
        this.movesFly = SS
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Dt : 0) | (this.client._getTotalBooleanVal() ? wt : 0)
      }
      write(SS) {
        const HS = this.perms(),
          {
            movesFly: gS
          } = this;
        if (HS === this.Ku && null === gS) return !0;
        let tS = KS.Hb.Keep;
        return null !== gS && (tS = gS ? KS.Hb.On : KS.Hb.Off), !(!SS || !(0, KS.ne)(SS, 0, tS, HS, gS ? 1 : 0)) && (this.Ku = HS, this.movesFly = null, !0)
      }
    }
    class Zt {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = SS, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: NS.d,
          get y() {
            return HS()
          }
        }
      }
      get hasView() {
        const SS = this.api.apiView,
          HS = KS.t.viewProj;
        return 0 !== HS(SS, 0, 3) || 0 !== HS(SS, 0, 7) || 0 !== HS(SS, 0, 11) || 0 !== HS(SS, 0, 15)
      }
      get cameraPosition() {
        const SS = this.api.apiView,
          {
            eye: HS
          } = this;
        for (let gS = 0; gS < 3; gS++) HS[gS] = KS.t.eye(SS, 0, gS);
        return HS
      }
      get cameraDirection() {
        const SS = this.api.apiView,
          HS = KS.t.viewProj,
          gS = HS(SS, 0, 3),
          tS = HS(SS, 0, 7),
          bS = HS(SS, 0, 11),
          XS = Math.hypot(gS, tS, bS),
          {
            forward: xS
          } = this;
        return XS > 0 && (xS[0] = gS / XS, xS[1] = tS / XS, xS[2] = bS / XS), xS
      }
      get cameraHeading() {
        return KS.t.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return KS.t.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return KS.t.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return KS.t.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(SS) {
        this.clip(SS);
        const {
          clipX: HS,
          clipY: gS,
          clipW: tS
        } = this;
        if (tS > 0) {
          const SS = HS / tS * 50,
            bS = -gS / tS * 50;
          return Math.abs(SS) <= this.screenBandPct.x && Math.abs(bS) <= this.screenBandPct.y ? {
            x: 50 + SS,
            y: 50 + bS
          } : this.clampToBand(SS, bS)
        }
        const bS = this.cameraPosition,
          XS = Math.hypot(SS[0] - bS[0], SS[1] - bS[1], SS[2] - bS[2]),
          xS = this.api.apiView,
          NS = KS.t.viewProj,
          qS = XS > 0 ? HS / XS : 0,
          uS = XS > 0 ? -gS / XS : 0,
          IS = Math.hypot(NS(xS, 0, 1), NS(xS, 0, 5), NS(xS, 0, 9)),
          fS = qS / Math.hypot(NS(xS, 0, 0), NS(xS, 0, 4), NS(xS, 0, 8)),
          kS = uS / IS,
          aS = !(Math.abs(fS) >= .001 || Math.abs(kS) >= .001);
        return this.clampToBand(qS, aS ? -(IS || 1) : uS)
      }
      projectDirectionToScreenPos(SS) {
        if (!this.hasView) return;
        const HS = this.cameraPosition,
          gS = this.along;
        for (let tS = 0; tS < 3; tS++) gS[tS] = HS[tS] + 10 * SS[tS];
        return this.projectWorldPosToScreenPos(gS)
      }
      projectWorldPosToViewport(SS) {
        this.clip(SS);
        const {
          clipX: HS,
          clipY: gS,
          clipW: tS
        } = this;
        return tS > 0 ? {
          x: 50 + HS / tS * 50,
          y: 50 - gS / tS * 50
        } : null
      }
      clip(SS) {
        const HS = this.api.apiView,
          gS = SS[0] - KS.t.origin(HS, 0, 0),
          tS = SS[1] - KS.t.origin(HS, 0, 1),
          bS = SS[2] - KS.t.origin(HS, 0, 2),
          XS = KS.t.viewProj;
        this.clipX = XS(HS, 0, 0) * gS + XS(HS, 0, 4) * tS + XS(HS, 0, 8) * bS + XS(HS, 0, 12), this.clipY = XS(HS, 0, 1) * gS + XS(HS, 0, 5) * tS + XS(HS, 0, 9) * bS + XS(HS, 0, 13), this.clipW = XS(HS, 0, 3) * gS + XS(HS, 0, 7) * tS + XS(HS, 0, 11) * bS + XS(HS, 0, 15)
      }
      clampToBand(SS, HS) {
        return (0, NS.g)(SS, HS, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Jt = gS(4947);
    const Ot = new TextEncoder,
      dt = new Uint8Array(KS.G * KS.E);
    class ct {
      constructor() {
        this.buttons = [], this.Ku = !0
      }
      set(SS) {
        this.buttons = SS, this.Ku = !1
      }
      attached() {
        this.Ku = 0 === this.buttons.length
      }
      write(SS) {
        if (this.Ku) return;
        const HS = new Uint8Array(KS.G),
          gS = new Uint8Array(KS.G);
        let tS = 0,
          bS = 0;
        for (const {
            id: XS,
            keycode: xS
          }
          of this.buttons) {
          if (tS === KS.G) break;
          const {
            read: SS,
            written: NS
          } = Ot.encodeInto(XS, dt.subarray(bS, bS + KS.E));
          if (SS < XS.length) continue;
          const qS = Jt.i[xS];
          HS[tS] = "number" === typeof qS ? qS : 0, gS[tS] = NS, tS++, bS += NS
        }
        this.Ku = (0, KS.$d)(SS, 0, tS, HS, gS, dt.subarray(0, bS))
      }
    }

    function vt(SS, HS, gS) {
      const tS = Ot.encode(HS);
      return tS.length <= KS.E && function(SS, HS, gS, tS) {
        return (0, MH.c)(), (0, KS.jf)(SS, HS, gS, tS)
      }(SS, 0, gS ? 1 : 0, tS)
    }
    const Et = new TextDecoder,
      Lt = new TextEncoder,
      Yt = new Uint8Array(0),
      At = [0, 0, 0],
      yt = {
        off: KS.Cd.Off,
        key: KS.Cd.Key,
        touch: KS.Cd.Touch
      };
    class Vt {
      constructor(SS) {
        var HS;
        this.options = SS, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new ct, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new ht, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.tK = SS => {
          if ((0, aS.d)(SS)) throw SS;
          this.onError(SS)
        }, this.api = SS.api, this.tables = SS.tables, this.onError = null !== (HS = SS.onError) && void 0 !== HS ? HS : SS => {
          console.error("Error in client game callback", SS)
        }, this.renderFrame = new Zt(this.api, SS.screenBandY), this.live = new Ct(this.api), this.chunks = new NH(this.api.memory, (() => this.api.apiView)), this.items = new Cg({
          api: this.api,
          tables: SS.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: SS.beforeOp
        });
        const gS = () => this.stopped() ? null : this.cmd,
          tS = () => this.sessionLive;
        this.entityInfoWatch = new Mg({
          cmd: gS,
          onError: this.onError
        }), this.entityInfo = new Fg({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: tS
        }), this.particles = new Ag({
          cmd: gS,
          isSessionLive: tS,
          onError: this.onError
        }), this.clientApi = new qg({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: SS.tables,
          cmd: gS,
          sendCmd: () => this.sendCmd(),
          isSessionLive: tS,
          beforeWrite: () => {
            var HS;
            if (this.stopped()) return !1;
            const gS = this.generation;
            return !1 !== (null === (HS = SS.beforeWrite) || void 0 === HS ? void 0 : HS.call(SS)) && gS === this.generation
          },
          playerDbId: () => {
            const SS = this.session;
            if (null === SS) throw new Error("No game session has started, so the local player has no DB id");
            return SS.playerDbId
          },
          playSound: SS.playSound,
          preloadSounds: SS.preloadSounds,
          setLocalOptions: SS.setLocalOptions,
          hasPackModel: SS.hasPackModel
        }), this.scriptedCamera = new RS({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: SS.cameraScreen,
          showFacing: SS.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= kt(this.items, this.tables, (() => this.localPlayerAlive()), this.tK), this.itemSources
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
      clickCodeBlock(SS) {
        const HS = this.sessionLive ? this.sendCmd() : null;
        return null !== HS && (gS = HS, tS = 0, bS = SS[0], XS = SS[1], xS = SS[2], (0, MH.c)(), (0, KS.fe)(gS, tS, bS, XS, xS));
        var gS, tS, bS, XS, xS
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(SS) {
        const HS = this.liveCmd();
        return null === HS ? (this.pendingZoom = SS, !1) : (this.pendingZoom = null, (0, KS.Zf)(HS, 0, SS, 1))
      }
      uE(SS) {
        const HS = this.stopped() ? null : this.cmd;
        return null !== HS && (0, KS.Wf)(HS, 0, SS ? 1 : 0)
      }
      respawn() {
        const SS = this.sessionLive ? this.sendCmd() : null;
        return null !== SS && (HS = SS, gS = 0, (0, MH.c)(), (0, KS.xf)(HS, gS));
        var HS, gS
      }
      bindCustomButtonKeys(SS) {
        this.customButtons.set(SS)
      }
      pressCustomButton(SS, HS) {
        const gS = this.sessionLive ? this.sendCmd() : null;
        return null !== gS && vt(gS, SS, HS)
      }
      padMove(SS, HS, gS, tS, bS, XS) {
        const xS = this.liveCmd();
        return null !== xS && (0, KS.Xe)(xS, 0, SS, HS, gS, tS, bS, XS)
      }
      thirdPersonFor(SS) {
        const HS = this.liveCmd();
        return null !== HS && (0, KS.cg)(HS, 0, null !== SS && void 0 !== SS ? SS : 1 / 0)
      }
      send(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== tS && FH(tS, gS ? kS.vd : 0, SS, (0, VS.f)(HS))
      }
      socketAttached(SS) {
        this.openSocket = SS, this.socketLeftSinceAttach = !1
      }
      socketDetached(SS) {
        this.openSocket === SS && (this.openSocket = 0)
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
      attach(SS) {
        const HS = () => SS.isStopped;
        this.stopped = HS, this.cmd = SS.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const gS = this.api.apiView;
        this.overflowGen = KS.t.eventOverflowGen(gS, 0), this.resyncOwed = 0 !== KS.t.eventOverflowMask(gS, 0), SS.setGameHost(this), SS.setEventWalker((SS => {
          this.api.walk(SS, this, HS)
        }))
      }
      watchPromptPick(SS) {
        this.promptWatch = SS, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : it(KS.t.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? KS.mc.None : KS.t.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : KS.t.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === SS || SS >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, SS, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(SS) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(SS)
      }
      netEvent(SS) {
        "connection" === SS.type ? SS.phase === kS.E.Activated && SS.conn !== this.activeConn && SS.conn > this.closedThrough ? (this.endSession(), this.activeConn = SS.conn, this.endGameGrants(), this.dropGameCamera()) : SS.phase !== kS.E.Left && SS.phase !== kS.E.Closed || SS.conn !== this.activeConn ? SS.phase === kS.E.Resumed && 0 !== this.activeConn && SS.conn > this.closedThrough && (this.activeConn = SS.conn) : this.closeGame() : SS.conn === this.activeConn && 0 !== SS.conn && (SS.Ju === Pt.z ? this.gunHit(SS.payload) : SS.Ju === Rg.kc.EditItemCraftingRecipes || SS.Ju === Pt.Z ? this.items.touch() : (this.serverOptions(SS), this.gameMessage(SS)));
        const HS = this.options.onNetEvent;
        HS && this.guard((() => {
          HS(SS)
        }))
      }
      serverOptions(SS) {
        const HS = this.options.serverOptions,
          gS = HS ? this.decoded(Tg, SS) : null;
        HS && gS && this.guard((() => {
          HS.applyNewClientOptions(gS)
        }))
      }
      gameMessage(SS) {
        let HS = null;
        try {
          HS = function(SS) {
            if ("message" !== SS.type || SS.Ju !== Rg.kc.GameCodeMessage || SS.payloadKind !== kS.xc.Msgpack) return null;
            const HS = (0, VS.c)(SS.payload);
            if (null === HS || "object" !== typeof HS || "string" !== typeof HS.messageType) throw new Error("GameCodeMessage without a messageType");
            return HS
          }(SS)
        } catch (gS) {
          this.sessionLive && this.onError(gS)
        }
        if (HS) {
          const {
            messageType: SS,
            data: gS
          } = HS;
          if ((0, cS.g)(SS)) return void this.guard((() => {
            (0, cS.c)(SS, gS)
          }));
          "freeCamPerms" === SS && this.freeCam.setGame(gS) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (HS => {
            HS.onReceivedMessageFromServer(SS, gS)
          }))
        }
      }
      decoded(SS, HS) {
        try {
          return SS(HS)
        } catch (gS) {
          return this.onError(gS), null
        }
      }
      setClientFreeCameraGrant(SS, HS) {
        this.freeCam.setClient(SS, HS), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(SS) {
        this.freeCam.setMovesFly(SS), this.writeFreeCam()
      }
      setBlockHighlight(SS) {
        this.highlight = SS, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const SS = this.liveCmd();
        if (null === SS || !this.highlightOwed) return;
        const HS = this.highlight;
        this.highlightOwed = null === HS ? !(0, KS.Ae)(SS, 0, At, At, 0) : !(0, KS.Ae)(SS, 0, HS.pos, HS.normal, 1)
      }
      localPlayerBound(SS) {
        var HS, gS;
        if (0 === this.activeConn || this.sessionLive && SS === this.boundId) return;
        const tS = this.sessionLive;
        let bS, XS, xS, NS;
        this.endSession(), tS && this.restartGameCamera();
        try {
          var qS;
          this.session = null;
          const SS = this.options.sessionInfo(this.activeConn);
          if (this.session = SS, !SS) return;
          bS = SS.gameNameWithVariation, XS = null !== (qS = (0, OS.Fb)(bS)) && void 0 !== qS ? qS : void 0, xS = (0, dS.w)(SS.lobbyName), NS = (0, dS.P)(SS.lobbyName)
        } catch (nS) {
          return void this.onError(nS)
        }
        const uS = {
          localPlayerId: String(SS)
        };
        let IS = {},
          fS = {};
        try {
          var kS, aS;
          IS = null !== (kS = null === (aS = this.options.gameFactory((0, OS.Kb)(bS))) || void 0 === aS ? void 0 : aS(NS, xS, XS, uS)) && void 0 !== kS ? kS : {}
        } catch (nS) {
          this.tK(nS)
        }
        try {
          var KS, jS;
          fS = {
            ...null === (KS = (jS = this.options).defaultPlugins) || void 0 === KS ? void 0 : KS.call(jS, NS, xS, XS, uS),
            ...IS.plugins
          }
        } catch (nS) {
          this.tK(nS)
        }
        const GS = [IS, ...Object.values(fS)];
        this.owners = GS, this.tickers = GS.filter((SS => void 0 !== SS.mf)), this.renderers = GS.filter((SS => void 0 !== SS.onAfterRender)), this.receivers = GS.filter((SS => void 0 !== SS.onReceivedMessageFromServer)), this.writeAltVeto(GS), this.writeHooks(GS), this.writePublicLobby(NS), this.writeLocalDbId(null !== (HS = null === (gS = this.session) || void 0 === gS ? void 0 : gS.playerDbId) && void 0 !== HS ? HS : null), this.boundId = SS, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(GS, (SS => {
          var HS;
          null === (HS = SS.onCreate) || void 0 === HS || HS.call(SS, this.clientApi)
        }));
        const CS = this.generation;
        setTimeout((() => {
          CS === this.generation && !0 === this.tables.getClientOption("creative") && ft(this.tables)
        }), 0)
      }
      chunkSlot(SS, HS, gS, tS, bS, XS) {
        this.chunks.apply(SS, HS, gS, tS, bS, XS)
      }
      entityAdded(SS) {
        var HS;
        this.entityInfo.stale(SS), null === (HS = this.options.replayEntities) || void 0 === HS || HS.entityAdded(SS)
      }
      entityInfoChanged(SS) {
        var HS;
        this.entityInfo.stale(SS), null === (HS = this.options.replayEntities) || void 0 === HS || HS.entityInfoChanged(SS)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const SS = performance.now();
          this.round(this.tickers, Wt), (0, tt.e)(performance.now() - SS)
        }
      }
      afterWalk(SS) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const HS = this.options.replayEntities;
        HS && this.guard((() => {
          this.entityInfoWatch.want(Bg, HS.wantsWatch), HS.flush(this.entityInfoWatch.on)
        }));
        const gS = (0, tt.j)(SS, KS.t.frameMs(this.api.apiView, 0));
        if (null !== gS) {
          const SS = this.renderFrame;
          this.guard((() => {
            (0, lg.c)().turnDamageIndicators(SS.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(gS)
          })), this.round(this.renderers, (HS => {
            HS.onAfterRender(gS, SS)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== gS)
        } catch (bS) {
          this.tK(bS)
        }
        this.showZoom(), this.items.flush(this.tK), this.writePromptWatch(), this.writeCustomButtons();
        const tS = this.ticks;
        this.ticks = 0, (0, tt.i)(tS, SS, gS, this.tK)
      }
      entityRemoved(SS) {
        this.live.despawned(SS), this.entityInfo.removed(SS)
      }
      ackEventOverflow() {
        const SS = this.api.apiView,
          HS = KS.t.eventOverflowGen(SS, 0),
          gS = HS - this.overflowGen >>> 0;
        if (0 === gS && !this.resyncOwed) return;
        this.overflowGen = HS;
        const tS = KS.t.eventOverflowMask(SS, 0),
          bS = this.cmd;
        0 === tS || null === bS || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, KS.je)(bS, 0, tS);
        const XS = this.options.onEventOverflow;
        0 !== gS && XS && this.guard((() => {
          XS(tS, gS)
        }))
      }
      gameCall(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        if (SS === KS._b.Director) try {
          return this.scriptedCamera.call(HS, gS, tS, bS, XS, xS)
        } catch (uS) {
          return this.tK(uS), KS.Z.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return SS === KS._b.AltVeto ? KS.k.Allow : 0;
        try {
          return this.callGames(SS, HS, gS, tS, bS, XS, xS, NS)
        } catch (uS) {
          throw (0, aS.d)(uS) && (this.fault = uS), uS
        }
      }
      takeFault() {
        const SS = this.fault;
        return this.fault = void 0, SS
      }
      callGames(SS, HS, gS, tS, bS, XS, xS, NS) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: qS
        } = this.options, uS = String(this.boundId);
        switch (SS) {
          case KS._b.AltVeto:
          case KS._b.AltAction: {
            const NS = 0 !== xS,
              [IS, fS, kS] = NS ? [HS, gS, tS] : [void 0, void 0, void 0],
              aS = NS ? qS.nameOfId(bS) : "Air",
              jS = it(XS);
            if (SS === KS._b.AltAction) return this.first((SS => {
              var HS;
              return null === (HS = SS.onPlayerAltAction) || void 0 === HS ? void 0 : HS.call(SS, uS, IS, fS, kS, aS, jS)
            })), 0;
            const GS = this.first((SS => {
              var HS;
              return null === (HS = SS.onPlayerAttemptAltAction) || void 0 === HS ? void 0 : HS.call(SS, uS, IS, fS, kS, aS, jS)
            }));
            return "preventAction" === GS ? KS.k.Prevent : "preventPlacement" === GS ? KS.k.PreventPlacement : KS.k.Allow
          }
          case KS._b.Click: {
            const SS = NS,
              IS = 0 !== (SS & KS.M.Alt),
              fS = 0 !== (SS & KS.M.HasPos),
              kS = fS ? qS.nameOfId(bS) : "Air",
              [aS, jS, GS] = fS ? [HS, gS, tS] : [null, null, null],
              CS = it(XS),
              nS = 0 !== (SS & KS.M.Up),
              PS = it(xS);
            if (0 === (SS & KS.M.AttackOnly) && this.first((SS => {
                var HS, gS;
                return nS ? null === (HS = SS.onPlayerClickUp) || void 0 === HS ? void 0 : HS.call(SS, uS, IS, aS, jS, GS, kS, CS) : null === (gS = SS.onPlayerClick) || void 0 === gS ? void 0 : gS.call(SS, uS, IS, aS, jS, GS, kS, CS)
              })), !nS && !IS && null !== PS) {
              const SS = this.clientApi.getPositionView(PS),
                HS = SS ? [SS[0], SS[1], SS[2]] : [0, 0, 0];
              this.first((SS => {
                var gS;
                return null === (gS = SS.onPlayerAttackEntity) || void 0 === gS ? void 0 : gS.call(SS, uS, PS, HS)
              }))
            }
            return 0
          }
          case KS._b.ChangeBlock: {
            const SS = qS.nameOfId(bS),
              xS = qS.nameOfId(XS);
            return this.first((bS => {
              var XS;
              return null === (XS = bS.onPlayerChangeBlock) || void 0 === XS ? void 0 : XS.call(bS, uS, HS, gS, tS, SS, xS)
            })), 0
          }
          case KS._b.DropItem: {
            const SS = qS.nameOfId(HS);
            return this.first((HS => {
              var bS;
              return null === (bS = HS.onPlayerDropItem) || void 0 === bS ? void 0 : bS.call(HS, uS, SS, gS, tS)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${SS}`)), 0
        }
      }
      changeBlockFail(SS, HS, gS, tS, bS, XS, xS) {
        const NS = bS === KS.Nc ? null : Et.decode(this.api.eventBytes(XS, Math.min(bS, xS)));
        this.failures.push({
          UX: [SS, HS, gS],
          pX: tS,
          sX: NS
        })
      }
      changeBlockFailEnd() {
        const SS = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (HS => {
          var gS;
          null === (gS = HS.onChangeBlockFail) || void 0 === gS || gS.call(HS, SS)
        })), this.cj("EditBoard", {
          pos: null
        }), this.cj("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(SS, HS, gS, tS, bS, XS) {
        SS === KS.qc.ChestOpened ? this.items.chestOpened(gS, tS, bS) : SS !== KS.qc.Synced && SS !== KS.qc.ChestClosed && SS !== KS.qc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(SS, HS, gS, tS) {
            switch (SS) {
              case KS.qc.Synced:
                xS.k.cj("syncedInvenFromServer");
                break;
              case KS.qc.ChestOpened:
              case KS.qc.ChestClosed:
                xS.k.cj("chestToggleFromServer", SS === KS.qc.ChestOpened, !0);
                break;
              case KS.qc.ChestRefreshed:
                xS.k.cj("chestRefreshedFromServer");
                break;
              case KS.qc.EnchantingTable:
                xS.k.cj("enchantingTable", {
                  XI: tS,
                  position: gS
                });
                break;
              case KS.qc.HotbarRequest:
                xS.k.cj("setSelectedInventorySlotI", HS, !0);
                break;
              case KS.qc.Scrolled:
                xS.k.cj("ScrollInventorySlot", HS);
                break;
              case KS.qc.NumberKey:
                xS.k.cj("numkeyPressed", HS + 1);
                break;
              case KS.qc.DropRequested:
                xS.k.cj("DropInvenItem", 0 !== HS);
                break;
              default:
                throw new aS.b(`InventoryEvent of no kind: what ${SS}`)
            }
          }(SS, HS, [gS, tS, bS], XS)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(SS, HS, gS, tS) {
        this.cj("shotPlayer", {
          playerId: String(SS),
          damage: HS,
          wasCrit: 0 !== tS,
          distance: gS
        })
      }
      localHurt(SS, HS) {
        this.cj("closeShopOnDamaged", null), this.guard((() => {
          xS.k.cj("damagedByOtherPlayer", {
            lS: null,
            direction: Number.isNaN(HS) ? null : HS,
            iX: SS
          })
        }))
      }
      attackHit(SS, HS, gS, tS, bS) {
        this.guard((() => {
          xS.k.cj("yourAttackHit", {
            Pt: tS,
            screenPos: this.renderFrame.projectDirectionToScreenPos([SS, HS, gS]),
            hitSelf: bS
          })
        }))
      }
      physicsType(SS) {
        this.cj("PlayerPhysicsTypeUpdate", SS)
      }
      vehicleEffect(SS, HS, gS, tS, bS) {
        this.guard((() => {
          SS === kS.Hd.UPDATE ? (0, ES.f)(HS, {
            icon: gS,
            level: tS,
            displayName: null,
            durationMs: bS
          }) : vS.e.remove(HS)
        }))
      }
      zoomChanged(SS) {
        this.zoom = SS, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.cj("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const SS = this.scriptedCamera.holdsView();
        !this.zoomUnshown || SS && this.zoomHeld || (this.zoomUnshown = !1, this.cj("cameraZoomSet", this.zoom)), this.zoomHeld = SS
      }
      gunHit(SS) {
        this.guard((() => {
          const {
            lS: HS,
            mS: gS
          } = (0, nt.d)(Pt.z, SS);
          xS.k.cj("damagedByOtherPlayer", {
            lS: HS,
            direction: gS
          })
        }))
      }
      uiEvent(SS, HS, gS, tS, bS, XS, xS, NS) {
        this.guard((() => {
          mg(SS, HS, [gS, tS, bS], XS, this.items, this.options.tables, (() => Et.decode(this.api.eventBytes(xS, NS))))
        }))
      }
      writeAltVeto(SS) {
        const HS = this.cmd;
        if (!HS) return;
        let gS;
        try {
          gS = function(SS, HS) {
            const gS = new Set;
            let tS = !1;
            for (const bS of SS)
              if (bS.onPlayerAttemptAltAction) {
                if (tS = !0, !bS.altVetoBlocks) return {
                  mode: KS.Wd.All,
                  roots: []
                };
                for (const SS of bS.altVetoBlocks) gS.add(HS.getMetaInfo(SS).rootId)
              } return tS ? gS.size > KS.Gc ? {
              mode: KS.Wd.All,
              roots: []
            } : {
              mode: KS.Wd.Filter,
              roots: [...gS]
            } : {
              mode: KS.Wd.Off,
              roots: []
            }
          }(SS, this.options.tables)
        } catch (bS) {
          this.onError(bS), gS = {
            mode: KS.Wd.All,
            roots: []
          }
        }
        if (gS.mode === KS.Wd.Off && !this.vetoSet) return;
        const tS = new Uint8Array(new Uint32Array(gS.roots).buffer);
        (0, KS.Af)(HS, 0, gS.mode, gS.roots.length, tS) ? this.vetoSet = gS.mode !== KS.Wd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(SS) {
        const HS = this.cmd;
        if (!HS) return;
        const gS = function(SS) {
          let HS = 0;
          for (const gS of SS) gS.onPlayerAltAction && (HS |= 1 << KS._b.AltAction), (gS.onPlayerClick || gS.onPlayerClickUp || gS.onPlayerAttackEntity) && (HS |= 1 << KS._b.Click), gS.onPlayerChangeBlock && (HS |= 1 << KS._b.ChangeBlock), gS.onPlayerDropItem && (HS |= 1 << KS._b.DropItem);
          return HS
        }(SS);
        (0 !== gS || this.hooksSet) && ((0, KS.Lf)(HS, 0, gS) ? this.hooksSet = 0 !== gS : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const SS = this.cmd;
        SS && !this.stopped() && this.customButtons.write(SS)
      }
      writePromptWatch() {
        const SS = this.cmd,
          HS = this.promptWatch;
        HS !== this.promptWatchSent && SS && !this.stopped() && (0, KS.ig)(SS, 0, yt[HS]) && (this.promptWatchSent = HS)
      }
      writePublicLobby(SS) {
        const HS = this.cmd;
        HS && SS !== this.writtenPublicLobby && ((0, KS.Xf)(HS, 0, SS ? 1 : 0) ? this.writtenPublicLobby = SS : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(SS) {
        const HS = this.cmd;
        HS && ((0, KS.Of)(HS, 0, null === SS ? 0 : 1, null === SS ? Yt : Lt.encode(SS)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(SS) {
        const HS = this.generation;
        for (const tS of this.owners) {
          if (HS !== this.generation) break;
          try {
            const HS = SS(tS);
            if (void 0 !== HS) return HS
          } catch (gS) {
            this.tK(gS)
          }
        }
      }
      cj(SS, HS) {
        this.guard((() => {
          xS.k.cj(SS, HS)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (SS) {
          this.tK(SS)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (SS) {
          this.tK(SS)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const SS = this.owners;
        let HS;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (tS) {
          HS = tS
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (tS) {
          HS ??= tS
        }
        this.round(SS, zt, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (tS) {
          HS ??= tS
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (tS) {
          HS ??= tS
        }
        const gS = this.options.onSessionEnd;
        if (gS) try {
          gS()
        } catch (tS) {
          this.onError(tS)
        }
        void 0 !== HS && this.tK(HS)
      }
      round(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = this.generation;
        for (const XS of SS) {
          if (tS !== this.generation) break;
          try {
            HS(XS)
          } catch (bS) {
            gS ? this.onError(bS) : this.tK(bS)
          }
        }
      }
      guard(SS) {
        try {
          SS()
        } catch (HS) {
          this.tK(HS)
        }
      }
    }

    function it(SS) {
      return SS === KS.Rc ? null : String(SS)
    }

    function Wt(SS) {
      SS.mf(kS.yd)
    }

    function zt(SS) {
      var HS;
      null === (HS = SS.onClose) || void 0 === HS || HS.call(SS)
    }

    function Ut(SS, HS) {
      SS.watch((() => {
        const gS = function(SS) {
          const HS = [],
            gS = Math.min(bt, SS.length);
          for (let bS = 0; bS < gS; bS++) {
            var tS;
            const gS = null === (tS = SS.slot(bS)) || void 0 === tS ? void 0 : tS.typeObj,
              XS = gS ? (0, gt.gunTypeOf)(gS.id) : void 0;
            void 0 !== XS && HS.push(PH[XS])
          }
          return HS
        }(SS);
        gS.length > 0 && (HS.preload(gS), HS.preload([QH]))
      }))
    }
    var pt = gS(36448),
      st = gS(5005),
      Bt = gS(36773),
      Mt = gS(36808);

    function Ft(SS) {
      const HS = (0, pt.countDecodesAs)(new st.Howl({
          ...(0, Bt.i)(SS),
          pool: 15,
          preload: !1
        }), "sheet"),
        gS = HS.load.bind(HS);
      return HS.load = () => (HS._preload = !0, (0, Mt.b)(SS), gS()), HS
    }

    function Rt(SS, HS, gS) {
      const tS = SS.listener;
      if (tS.positionX) Tt(tS.positionX, HS, gS, 0), Tt(tS.positionY, HS, gS, 1), Tt(tS.positionZ, HS, gS, 2), Tt(tS.forwardX, HS, gS, 3), Tt(tS.forwardY, HS, gS, 4), Tt(tS.forwardZ, HS, gS, 5), Tt(tS.upX, HS, gS, 6), Tt(tS.upY, HS, gS, 7), Tt(tS.upZ, HS, gS, 8);
      else {
        let SS = !1;
        for (let tS = 0; tS < 9; tS++) SS ||= HS[tS] !== gS[tS];
        SS && (tS.setPosition(HS[0], HS[1], HS[2]), tS.setOrientation(HS[3], HS[4], HS[5], HS[6], HS[7], HS[8]), gS.set(HS))
      }
    }

    function Tt(SS, HS, gS, tS) {
      HS[tS] !== gS[tS] && (SS.value = HS[tS], gS[tS] = HS[tS])
    }
    class ot {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(SS) {
        this.pose.set(SS);
        const HS = st.Howler.ctx;
        return !!HS && (HS !== this.watchedCtx && (this.watchedCtx = HS, this.written.fill(Number.NaN), HS.addEventListener("statechange", (() => {
          "running" === HS.state && Rt(HS, this.pose, this.written)
        }))), "running" === HS.state && Rt(HS, SS, this.written), !0)
      }
    }
    var lt = gS(36583),
      mt = gS(39219);
    let et = null,
      rt = null;

    function Sb() {
      return null === et && (et = document.createElement("div"), et.className = "WasmCameraLayer", et.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(et)), et
    }

    function Hb() {
      return rt ??= new mt.b(new lt.d(Sb)), rt
    }

    function gb() {
      var SS;
      null === (SS = rt) || void 0 === SS || SS.clear(), tb(null)
    }

    function tb(SS) {
      tS.b.get("scriptedCameraFacing") !== SS && tS.b.set({
        scriptedCameraFacing: SS
      })
    }
    var bb = gS(9465),
      Xb = gS(9411),
      xb = gS(39248),
      Nb = gS(41055),
      qb = gS(3437);
    const ub = Object.entries(KS.Wb).reduce(((SS, HS) => {
      let [gS, tS] = HS;
      return SS[tS] = gS, SS
    }), []);

    function Ib(SS, HS) {
      var gS;
      return 0 !== ((null !== (gS = SS.itemFlags[HS]) && void 0 !== gS ? gS : 0) & KS.uc.Stackable)
    }
    const fb = /^(0|[1-9][0-9]*)$/,
      kb = {
        displayName: (SS, HS) => (0, gt.displayNameOf)(HS),
        description: (SS, HS) => (0, gt.descriptionOf)(HS),
        type: (SS, HS) => (0, gt.itemTypeOf)(HS),
        clipSize: (SS, HS) => (0, gt.clipSizeOf)(HS),
        armourReduction: (SS, HS) => (0, gt.armourReductionOf)(HS),
        scopeType: (SS, HS) => (0, gt.scopeTypeOf)(HS),
        stackable: Ib,
        harvestType: (SS, HS) => ub[SS.blockHarvestTypes[HS]],
        harvestLevel: (SS, HS) => {
          const gS = SS.blockHarvestLevels[HS];
          return gS === KS.Bc ? void 0 : gS
        },
        harvests: (SS, HS) => {
          var gS;
          const tS = null !== (gS = SS.itemHarvests[HS]) && void 0 !== gS ? gS : 0;
          return 0 !== tS ? ub[tS] : void 0 === (0, gt.harvestsNullLevelOf)(HS) ? void 0 : null
        },
        level: (SS, HS) => {
          var gS, tS;
          const bS = null !== (gS = SS.itemLevels[HS]) && void 0 !== gS ? gS : KS.Bc;
          return bS !== KS.Bc ? bS : null !== (tS = (0, gt.harvestsNullLevelOf)(HS)) && void 0 !== tS ? tS : void 0
        }
      };

    function ab(SS, HS, gS) {
      return jb(new Uint8Array(Math.floor(SS.length / HS)), SS, HS, gS)
    }

    function Kb(SS, HS, gS) {
      return jb(new Uint16Array(Math.floor(SS.length / HS)), SS, HS, gS)
    }

    function jb(SS, HS, gS, tS) {
      const bS = new DataView(HS.buffer, HS.byteOffset, HS.byteLength);
      for (let XS = 0; XS < SS.length; XS++) SS[XS] = tS(bS, XS * gS);
      return SS
    }
    class Gb {
      constructor(SS, HS) {
        this.options = HS, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = SS => {
          const HS = this.idOf(SS);
          if (void 0 === HS) throw new Error(`No item is named ${SS}, an item's root`);
          return HS
        };
        const gS = HS => {
            const gS = HS();
            return new Uint8Array(SS.memory().buffer, SS.scratch(), gS).slice()
          },
          tS = (new TextDecoder).decode(gS((() => SS.queries.itemNames()))).split("\n"),
          bS = gS((() => SS.queries.blockProps())),
          XS = gS((() => SS.queries.itemProps()));
        this.props = {
          blockFlags: ab(bS, KS.z.BYTES, KS.z.flags),
          blockHarvestTypes: ab(bS, KS.z.BYTES, KS.z.harvestType),
          blockHarvestLevels: ab(bS, KS.z.BYTES, KS.z.harvestLevel),
          blockAttachedTops: Kb(bS, KS.z.BYTES, KS.z.attachedTop),
          itemFlags: ab(XS, KS.yc.BYTES, KS.yc.flags),
          itemHarvests: ab(XS, KS.yc.BYTES, KS.yc.harvests),
          itemLevels: ab(XS, KS.yc.BYTES, KS.yc.level)
        }, (0, qb.j)(Object.freeze(tS)), (0, Nb.d)()
      }
      idOf(SS) {
        if ("number" === typeof SS) return void 0 === (0, qb.e)(SS) ? void 0 : SS;
        const HS = (0, qb.d)(SS);
        return void 0 === HS && fb.test(SS) ? void 0 === (0, qb.e)(+SS) ? void 0 : +SS : HS
      }
      getMetaInfo(SS) {
        if (!SS || SS === bb.c) return bb.g;
        const HS = this.idOf(SS);
        if (void 0 === HS) throw new Error(`Item ${SS} not found in registry`);
        return this.metaOf(HS)
      }
      blockRootId(SS) {
        return 0 !== SS && void 0 !== (0, qb.e)(SS) ? this.metaOf(SS).rootId : SS
      }
      metaOf(SS) {
        return this.metas[SS] ??= (0, Xb.j)((0, qb.e)(SS), SS, this.rootIdOf, (0, gt.rootMetaDescOf)(SS))
      }
      getItemId(SS) {
        if (!SS || SS === bb.c) return 0;
        const HS = this.idOf(SS);
        if (void 0 === HS) throw new Error(`Invalid block name. You sent ${SS}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return HS
      }
      getItemName(SS) {
        if (!SS || SS === bb.c) return bb.c;
        const HS = this.idOf(SS);
        if (void 0 === HS) throw new Error(`Item ${SS} not found in registry`);
        return (0, qb.e)(HS)
      }
      blockNameToBlockId(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (SS === bb.c) return 0;
        let gS = this.idOf(SS);
        if (void 0 === gS || !this.isBlockId(gS)) {
          const HS = SS.indexOf("|"),
            tS = HS > 0 ? (0, qb.d)(SS.slice(0, HS)) : void 0;
          gS = void 0 !== tS && this.isBlockId(tS) && (0, gt.rootMetaDescOf)(tS) === SS ? tS : void 0
        }
        if (void 0 !== gS) return gS;
        if (!HS) throw new Error(`Invalid block name. You sent ${SS}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(SS) {
        return SS > 0 && SS < this.props.blockFlags.length
      }
      nameOfId(SS) {
        return 0 !== SS && (0, qb.e)(SS) || bb.c
      }
      itemType(SS) {
        const HS = SS ? this.idOf(SS) : void 0;
        if (!HS) return null;
        let gS = this.types.get(HS);
        return void 0 === gS && (gS = Object.freeze({
          id: HS,
          name: (0, qb.e)(HS),
          meta: this.getMetaInfo(HS),
          stackable: Ib(this.props, HS),
          type: (0, gt.itemTypeNameOf)(HS),
          clipSize: (0, gt.clipSizeOf)(HS),
          scopeType: (0, gt.scopeTypeOf)(HS),
          showsAimingUi: (0, gt.showsAimingUi)(HS)
        }), this.types.set(HS, gS)), gS
      }
      getItemStat(SS, HS) {
        if (xb.b.has(HS)) {
          const gS = "minChargeStateToUse" === HS ? this.getMetaInfo(SS).rootName : this.getItemName(SS),
            tS = this.options.get((0, xb.e)(gS, HS));
          if (null !== tS && void 0 !== tS) return tS
        }
        return this.defaultStat(SS, HS, this.statOf(HS))
      }
      getDisplayName(SS) {
        return this.getItemStat(SS, "displayName")
      }
      getDefaultItemStat(SS, HS) {
        return this.defaultStat(SS, HS, this.statOf(HS))
      }
      statOf(SS) {
        const HS = kb[SS];
        return void 0 === HS && function(SS, HS) {
          throw new Error(`ClientApi.${SS} is not available yet in the wasm client (${HS})`)
        }(`getItemStat("${SS}")`, `a table of the stat: the wasm client answers ${Object.keys(kb).join(", ")}`), HS
      }
      defaultStat(SS, HS, gS) {
        const tS = this.idOf(SS),
          bS = void 0 === tS ? void 0 : gS(this.props, tS);
        return null !== bS && void 0 !== bS || "displayName" !== HS ? bS : this.getItemName(SS)
      }
      getClientOption(SS) {
        return this.options.get(SS)
      }
      getGunStats(SS) {
        return this.getClientOption(`${SS}GunStats`)
      }
      watchClientOption(SS, HS) {
        return this.options.subscribe(SS, HS)
      }
      isSolidBlockId(SS) {
        var HS;
        return 0 !== ((null !== (HS = this.props.blockFlags[SS]) && void 0 !== HS ? HS : 0) & KS.x.Solid)
      }
      isStackableId(SS) {
        return Ib(this.props, SS)
      }
      isFluidBlockId(SS) {
        var HS;
        return 0 !== ((null !== (HS = this.props.blockFlags[SS]) && void 0 !== HS ? HS : 0) & KS.x.Fluid)
      }
      canPlaceOverBlockId(SS) {
        var HS;
        return 0 !== ((null !== (HS = this.props.blockFlags[SS]) && void 0 !== HS ? HS : 0) & KS.x.PlaceOver)
      }
      attachedTopOf(SS) {
        var HS;
        return null !== (HS = this.props.blockAttachedTops[SS]) && void 0 !== HS ? HS : 0
      }
      isDroplessBlockId(SS) {
        return (0, gt.dropsNothing)(SS)
      }
    }

    function Cb(SS, HS) {
      const gS = new Map;
      return (tS, bS) => {
        const XS = HS.idOf(tS),
          xS = void 0 === XS ? null : (tS => {
            let bS = gS.get(tS);
            if (void 0 === bS) {
              const XS = SS.queries.salvageRecipe(tS),
                xS = new DataView(SS.memory().buffer, SS.scratch(), XS),
                NS = [];
              for (let SS = 0; SS + KS.Pd.BYTES <= XS; SS += KS.Pd.BYTES) NS.push(Object.freeze({
                item: HS.nameOfId(KS.Pd.item(xS, SS)),
                amt: KS.Pd.amount(xS, SS)
              }));
              bS = 0 === NS.length ? null : Object.freeze(NS), gS.set(tS, bS)
            }
            return bS
          })(XS);
        if (null === xS || void 0 === bS) return xS;
        const NS = bS <= 0 ? 1 : bS;
        return xS.map((SS => {
          let {
            item: HS,
            amt: gS
          } = SS;
          return {
            item: HS,
            amt: gS * NS
          }
        }))
      }
    }
    var nb = gS(40802),
      Pb = gS(36982),
      Qb = gS(36968),
      Db = gS(36973),
      wb = gS(36508),
      hb = gS(40707),
      Zb = gS(42596);
    const Jb = -1,
      Ob = new Uint8Array(0),
      db = new TextEncoder;

    function cb(SS) {
      if (null === SS) return null;
      const HS = db.encode(SS);
      return HS.byteLength < kS.Uc ? HS : HS.subarray(0, kS.Uc - 1)
    }
    class vb {
      constructor(SS) {
        this.deps = SS, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Jb, this.keyframesSettled = !1, this.reloadFrom = Jb
      }
      reloadKeyframes() {
        var SS, HS;
        this.keyframesVersion = Jb, this.reloadFrom = null !== (SS = null === (HS = this.view()) || void 0 === HS ? void 0 : HS.version) && void 0 !== SS ? SS : Jb
      }
      setPlayback(SS) {
        const HS = 1 === this.deps.core.PbS(SS);
        return HS && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Jb, this.reloadFrom = Jb), HS
      }
      async open(SS, HS) {
        const gS = await this.deps.replay.open(SS, HS);
        return "opening" === gS && (this.reloadKeyframes(), this.deps.recorder.prefetch()), gS
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(SS)), HS)
      }
      setSpeed(SS) {
        this.deps.replay.setSpeed(SS)
      }
      setCameraMode(SS) {
        this.deps.replay.setCameraMode(Zb.c.indexOf(SS))
      }
      view() {
        var SS;
        const HS = KS.t.replayViewPtr(this.deps.apiView(), 0);
        if (0 === HS) return this.lastView = null, null;
        const gS = new DataView(this.deps.buffer(), HS, KS.Hd.BYTES),
          tS = KS.Hd.version(gS, 0),
          bS = this.lastView;
        if (null !== bS && bS.version === tS) return bS;
        const XS = KS.Hd.markIn(gS, 0),
          xS = {
            version: tS,
            state: KS.Hd.state(gS, 0),
            cameraMode: null !== (SS = Zb.c[KS.Hd.cameraMode(gS, 0)]) && void 0 !== SS ? SS : "recording",
            mf: KS.Hd.mf(gS, 0),
            totalTicks: KS.Hd.totalTicks(gS, 0),
            speed: KS.Hd.speed(gS, 0),
            mark: XS === KS.Ed ? null : {
              inTick: XS,
              outTick: KS.Hd.markOut(gS, 0)
            },
            editVersion: KS.Hd.editVersion(gS, 0)
          };
        return this.lastView = xS, xS
      }
      keyframes() {
        const SS = this.view();
        if (null === SS) return [];
        SS.version !== this.reloadFrom && (this.reloadFrom = Jb);
        const HS = this.reloadFrom === Jb && SS.state !== kS.qd.Cropping && SS.state !== kS.qd.None,
          gS = HS ? SS.editVersion : SS.version;
        if (gS === this.keyframesVersion && HS === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: tS
        } = this.deps, bS = tS.QbS(), XS = tS.AG(), xS = [];
        if (0 !== XS && bS > 0) {
          const SS = new DataView(this.deps.buffer(), XS, bS * kS.Ic);
          for (let HS = 0; HS < bS; HS++) {
            const gS = HS * kS.Ic,
              tS = HS => SS.getFloat64(gS + HS, !0);
            xS.push({
              mf: SS.getUint32(gS + kS.Sc, !0),
              position: [tS(kS.Pc), tS(kS.Pc + 8), tS(kS.Pc + 16)],
              direction: [tS(kS.Mc), tS(kS.Mc + 8), tS(kS.Mc + 16)],
              easing: [tS(kS.Oc), tS(kS.Oc + 8), tS(kS.Oc + 16), tS(kS.Oc + 24)]
            })
          }
        }
        return this.keyframesVersion = gS, this.keyframesSettled = HS, this.lastKeyframes = xS, xS
      }
      addKeyframe() {
        const SS = this.deps.apiView(),
          HS = [KS.t.eye(SS, 0, 0), KS.t.eye(SS, 0, 1), KS.t.eye(SS, 0, 2)];
        return this.deps.replay.addKeyframe(HS, function(SS, HS) {
          const gS = Math.cos(HS);
          return [gS * Math.sin(SS), -Math.sin(HS), gS * Math.cos(SS)]
        }(KS.t.heading(SS, 0), KS.t.pitch(SS, 0)))
      }
      setKeyframe(SS) {
        return this.deps.replay.setKeyframe(SS.mf, Float64Array.from([...SS.position, ...SS.direction, ...SS.easing]))
      }
      moveKeyframe(SS, HS) {
        return this.deps.replay.moveKeyframe(SS, HS)
      }
      deleteKeyframes(SS, HS) {
        return this.deps.replay.deleteKeyframes(SS, HS)
      }
      setMark(SS) {
        var HS, gS;
        return this.deps.replay.setMark(null !== (HS = null === SS || void 0 === SS ? void 0 : SS.inTick) && void 0 !== HS ? HS : -1, null !== (gS = null === SS || void 0 === SS ? void 0 : SS.outTick) && void 0 !== gS ? gS : -1)
      }
      crop(SS, HS) {
        const gS = this.deps.replay.crop(SS, HS);
        return gS && this.reloadKeyframes(), gS
      }
      save(SS) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(SS)
      }
      recorderControl(SS) {
        this.deps.recorder.control(SS)
      }
      recorderPrefs(SS, HS) {
        this.deps.recorder.prefs(SS, HS)
      }
      recorderOption(SS, HS) {
        const gS = this.deps.cmd();
        return null !== gS && (0, KS.rf)(gS, 0, SS, null === HS ? Ob : db.encode(HS))
      }
      recordFlyingText(SS, HS, gS, tS) {
        const bS = this.deps.cmd(),
          XS = Math.max(0, Math.min(4294967295, Math.round(tS)));
        return null !== bS && (0, KS.kf)(bS, 0, HS, gS, XS, db.encode(SS))
      }
      recordPlayerKilled(SS, HS, gS, tS) {
        const bS = this.deps.cmd();
        return null !== bS && (0, KS.uf)(bS, 0, SS, HS, Math.max(0, gS), db.encode(tS))
      }
      recordKillfeed(SS, HS, gS) {
        var tS, bS;
        const XS = this.deps.cmd(),
          xS = function(SS) {
            const HS = SS.reduce(((SS, HS) => {
                var gS;
                return SS + Rg.ub + (null !== (gS = null === HS || void 0 === HS ? void 0 : HS.byteLength) && void 0 !== gS ? gS : 0)
              }), 0),
              gS = new Uint8Array(HS),
              tS = new DataView(gS.buffer);
            let bS = 0;
            for (const xS of SS) {
              var XS;
              tS.setUint16(bS, null !== (XS = null === xS || void 0 === xS ? void 0 : xS.byteLength) && void 0 !== XS ? XS : kS.Uc, !0), bS += Rg.ub, null !== xS && (gS.set(xS, bS), bS += xS.byteLength)
            }
            return gS
          }([cb(SS.name), cb(SS.colour), cb(HS.name), cb(HS.colour), cb(gS)]);
        return null !== XS && (0, KS.nf)(XS, 0, null !== (tS = SS.id) && void 0 !== tS ? tS : KS.Sc, null !== (bS = HS.id) && void 0 !== bS ? bS : KS.Sc, xS)
      }
      recorderSession(SS, HS) {
        this.deps.recorder.session({
          session: HS,
          lobbyType: SS.lobbyType,
          game: SS.gameNameWithVariation,
          lobby: SS.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.DbS()
      }
      filePartDone(SS, HS) {
        this.deps.recorder.filePartDone(SS, HS)
      }
      fileDone(SS) {
        this.deps.recorder.fileDone(SS)
      }
    }
    const Eb = -2147483648;
    class Lb {
      constructor(SS) {
        var HS;
        this.deps = SS, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (HS = SS.now) && void 0 !== HS ? HS : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var SS, HS, gS;
        return null === (SS = null === (HS = (gS = this.deps).live) || void 0 === HS ? void 0 : HS.call(gS)) || void 0 === SS || SS
      }
      activated(SS) {
        var HS, gS;
        this.live && (this.viewerShown(!0 === (null === (HS = (gS = this.deps).viewerOpen) || void 0 === HS ? void 0 : HS.call(gS))), this.deps.client.recorderSession(SS, (0, Zb.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var SS, HS;
        this.live && (this.state.recording || !0 !== (null === (SS = (HS = this.deps).viewerOpen) || void 0 === SS ? void 0 : SS.call(HS))) ? this.deps.client.recorderControl(kS.gd.ToggleRecording) : this.deps.notify(Db.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(kS.gd.SaveClip) : this.deps.notify(Db.b.clippingNotOn)
      }
      viewerShown(SS) {
        this.live && this.deps.client.recorderControl(SS ? kS.gd.ViewerOpened : kS.gd.ViewerClosed)
      }
      setPrefs(SS, HS) {
        this.live && this.deps.client.recorderPrefs(SS, HS)
      }
      setOption(SS, HS) {
        this.live && this.deps.client.recorderOption(SS, HS)
      }
      recordFlyingText(SS, HS, gS, tS) {
        this.live && this.deps.client.recordFlyingText(SS, HS, gS, tS)
      }
      recordPlayerKilled(SS, HS, gS, tS) {
        this.live && this.deps.client.recordPlayerKilled(SS, HS, gS, tS)
      }
      recordKillfeed(SS, HS, gS) {
        this.live && this.deps.client.recordKillfeed(SS, HS, gS)
      }
      mf() {
        let SS = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, SS = {
            ...SS,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const HS = Math.floor((this.now() - this.recordingSince) / 1e3);
          HS !== SS.seconds && (SS = {
            ...SS,
            seconds: HS
          })
        }
        this.set(SS)
      }
      onEvent(SS) {
        var HS, gS;
        const {
          notify: tS
        } = this.deps, bS = Db.b;
        switch (SS.what) {
          case kS.ed.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), tS(bS.recordingStarted);
            break;
          case kS.ed.RecordingStopped:
            this.stopRecording(), tS(bS.recordingStopped), this.saveState(kS.nd.Recording, "saving");
            break;
          case kS.ed.RecordingDiscarded:
            this.stopRecording(), tS(bS.recordingDiscarded);
            break;
          case kS.ed.RecordingTurnedOff:
            this.stopRecording(), tS(bS.recordingTurnedOff);
            break;
          case kS.ed.LimitReached:
            tS(bS.limitReached);
            break;
          case kS.ed.ClipSaved:
            this.saveState(kS.nd.Clip, "saving");
            break;
          case kS.ed.ClipEmpty:
            tS(bS.clipEmpty);
            break;
          case kS.ed.ClippingNotOn:
            tS(bS.clippingNotOn);
            break;
          case kS.ed.Disallowed:
            tS(bS.disallowed);
            break;
          case kS.ed.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case kS.ed.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case kS.ed.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case kS.ed.SaveBusy:
            null === (HS = (gS = this.deps).onSaveState) || void 0 === HS || HS.call(gS, SS.kind, "busy"), tS(bS.saveBusy);
            break;
          case kS.ed.CloseViewerFirst:
            tS(bS.closeViewerFirst)
        }
      }
      fileReady(SS, HS) {
        this.deps.download(HS), this.saveState(SS, "done"), this.deps.notify(SS === kS.nd.Clip ? Db.b.clipSaved : Db.b.recordingSaved)
      }
      failed(SS) {
        this.saveState(SS, "failed"), this.deps.notify(SS === kS.nd.Clip ? Db.b.clipFailed : Db.b.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(SS, HS) {
        var gS, tS;
        null === (gS = (tS = this.deps).onSaveState) || void 0 === gS || gS.call(tS, SS, HS)
      }
      set(SS) {
        SS !== this.state && (this.state = SS, this.deps.onState(SS))
      }
    }
    const Yb = new TextDecoder;

    function Ab(SS, HS, gS, tS) {
      const bS = [];
      for (let XS = 0; XS < tS; XS++) {
        if (HS + Rg.ub > gS) return null;
        const tS = SS.getUint16(HS, !0);
        if (HS += Rg.ub, tS !== kS.Uc) {
          if (HS + tS > gS) return null;
          bS.push(Yb.decode(new Uint8Array(SS.buffer, SS.byteOffset + HS, tS))), HS += tS
        } else bS.push(null)
      }
      return HS === gS ? bS : null
    }

    function yb(SS, HS) {
      let gS = new DataView(new ArrayBuffer(0)),
        tS = !0;
      const bS = {
        replayFailed: (HS, gS, tS) => {
          SS.replayFailed({
            reason: HS,
            code: gS,
            version: tS
          })
        },
        replayOption: (HS, bS, XS, xS) => {
          const NS = function(SS, HS, gS, tS) {
            switch (HS) {
              case kS.od.Cleared:
                return 0 === tS ? null : void 0;
              case kS.od.Text:
                return Yb.decode(new Uint8Array(SS.buffer, SS.byteOffset + gS, tS));
              case kS.od.Int:
                return tS === Int32Array.BYTES_PER_ELEMENT ? SS.getInt32(gS, !0) : void 0;
              case kS.od.Double:
                return tS === Float64Array.BYTES_PER_ELEMENT ? SS.getFloat64(gS, !0) : void 0;
              default:
                return
            }
          }(gS, bS, XS, xS);
          void 0 !== NS ? SS.replayOption({
            key: HS,
            value: NS
          }) : tS = !1
        },
        replayUiEvent: (HS, bS, XS, xS, NS, qS) => {
          const uS = function(SS, HS, gS, tS, bS, XS, xS) {
            const NS = XS + xS;
            switch (HS) {
              case kS.pd.FlyingText: {
                const xS = Ab(SS, XS, NS, 1);
                return null !== xS && null !== xS[0] ? {
                  what: HS,
                  EX: gS,
                  vX: tS,
                  angle: bS,
                  contentJson: xS[0]
                } : null
              }
              case kS.pd.PlayerKilled: {
                const tS = Ab(SS, XS, NS, 3);
                return tS ? {
                  what: HS,
                  killstreak: gS,
                  dead: tS[0],
                  killer: tS[1],
                  withItem: tS[2]
                } : null
              }
              case kS.pd.Killfeed: {
                const gS = Ab(SS, XS, NS, 7);
                return gS ? {
                  what: HS,
                  killerId: gS[0],
                  killerName: gS[1],
                  killerColour: gS[2],
                  victimId: gS[3],
                  victimName: gS[4],
                  victimColour: gS[5],
                  withItem: gS[6]
                } : null
              }
              default:
                return null
            }
          }(gS, HS, bS, XS, xS, NS, qS);
          null !== uS ? SS.replayUiEvent(uS) : tS = !1
        },
        replayFilePart: (gS, bS, XS, xS) => {
          const NS = HS();
          XS + xS > NS.byteLength ? tS = !1 : SS.filePart(gS, bS, new Uint8Array(NS, XS, xS).slice())
        },
        replayFileReady: (HS, gS, tS, bS) => {
          SS.fileReady({
            save: HS,
            kind: gS,
            parts: tS,
            bytes: bS
          })
        },
        recorderEvent: (HS, gS, tS) => {
          SS.recorderEvent({
            what: HS,
            kind: gS,
            save: tS
          })
        },
        replayOpened: (HS, tS, bS) => {
          SS.replayOpened(Yb.decode(new Uint8Array(gS.buffer, gS.byteOffset + tS, bS)))
        }
      };
      return (SS, HS, XS, xS) => !(SS < kS.eb.ReplayFailed || SS > kS.eb.RecorderEvent) && (gS = HS, tS = !0, (0, KS.Zd)(SS, HS, XS, xS, bS) && tS)
    }

    function Vb(SS) {
      let HS = null;
      const gS = yb(SS, (() => {
        if (null === HS) throw new Error("a recorder event read outside recorderEventReader's call");
        return HS.buffer
      }));
      return (SS, tS) => {
        HS = tS;
        try {
          ! function(SS, HS) {
            const gS = SS.slice(),
              tS = new DataView(gS.buffer);
            for (let bS = 0; bS < gS.byteLength;) {
              if (bS + kS.ab > gS.byteLength) throw new Error(`the recorder module's events end mid-head at ${bS}`);
              const SS = tS.getUint32(bS, !0),
                XS = 65535 & SS,
                xS = SS >>> 16,
                NS = bS + kS.ab;
              if (NS + xS > gS.byteLength || !HS(XS, tS, NS, xS)) throw new Error(`the recorder module wrote a malformed event ${XS} (${xS} bytes) at ${bS}`);
              bS = NS + (0, kS.ue)(xS)
            }
          }(SS, gS)
        } finally {
          HS = null
        }
      }
    }
    class ib {
      constructor(SS, HS) {
        this.acks = SS, this.handlers = HS, this.parts = new Map
      }
      onPart(SS, HS, gS) {
        let tS = this.parts.get(SS);
        tS || (tS = [], this.parts.set(SS, tS)), tS[HS] = gS, this.acks.filePartDone(SS, HS)
      }
      onReady(SS) {
        var HS;
        const gS = null !== (HS = this.parts.get(SS.save)) && void 0 !== HS ? HS : [];
        this.parts.delete(SS.save);
        const tS = function(SS, HS, gS) {
          if (SS.length !== HS) return null;
          let tS = 0;
          for (let xS = 0; xS < HS; xS++) {
            if (void 0 === SS[xS]) return null;
            tS += SS[xS].byteLength
          }
          if (tS !== gS) return null;
          if (1 === HS) return SS[0];
          const bS = new Uint8Array(gS);
          let XS = 0;
          for (const xS of SS) bS.set(xS, XS), XS += xS.byteLength;
          return bS
        }(gS, SS.parts, SS.bytes);
        this.acks.fileDone(SS.save), null === tS ? this.handlers.fileIncomplete(SS.save, SS.kind) : this.handlers.fileReady(SS.save, SS.kind, tS)
      }
      onDiscarded(SS) {
        this.parts.delete(SS)
      }
    }

    function Wb() {
      return gS.e(60).then((() => gS(60676)))
    }
    class zb {
      constructor(SS) {
        this.deps = SS, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: HS
        } = SS;
        this.recorder = new Lb({
          client: HS,
          live: () => {
            var SS;
            return !0 !== (null === (SS = this.viewer) || void 0 === SS ? void 0 : SS.inPlayback)
          },
          viewerOpen: SS.viewerOpen,
          notify: SS.notify,
          download: HS => {
            var gS;
            null === (gS = SS.download) || void 0 === gS || gS.call(SS, HS)
          },
          onState: SS.onRecorderState,
          onSaveState: SS.onSaveState
        }), this.parts = new ib(HS, {
          fileReady: (SS, HS, gS) => {
            var tS;
            HS === kS.nd.Edited ? null === (tS = this.viewer) || void 0 === tS || tS.saveDone(gS) : this.recorder.fileReady(HS, gS)
          },
          fileIncomplete: (SS, HS) => {
            this.saveFailed(HS)
          }
        });
        const gS = {
          replayFailed: SS => {
            var HS;
            null === (HS = this.viewer) || void 0 === HS || HS.onFailed(SS)
          },
          replayOption: HS => {
            var gS;
            null === (gS = SS.onReplayOption) || void 0 === gS || gS.call(SS, HS)
          },
          replayUiEvent: HS => {
            var gS;
            null === (gS = SS.onReplayUiEvent) || void 0 === gS || gS.call(SS, HS)
          },
          filePart: (SS, HS, gS) => {
            this.parts.onPart(SS, HS, gS)
          },
          fileReady: SS => {
            this.parts.onReady(SS)
          },
          replayOpened: HS => {
            var gS;
            null === (gS = SS.onReplayOpened) || void 0 === gS || gS.call(SS, HS)
          },
          recorderEvent: SS => {
            var HS;
            switch (SS.what) {
              case kS.ed.FileDiscarded:
                this.parts.onDiscarded(SS.save);
                break;
              case kS.ed.SaveFailed:
                this.saveFailed(SS.kind);
                break;
              case kS.ed.SaveBusy:
                if (null !== (HS = this.viewer) && void 0 !== HS && HS.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(SS);
                break;
              default:
                this.recorder.onEvent(SS)
            }
          }
        };
        this.sink = function(SS, HS) {
          return {
            onReplayEvent: yb(SS, HS)
          }
        }(gS, SS.buffer), this.recorderEvents = Vb(gS)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var SS;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (SS = this.deps.loadViewer) && void 0 !== SS ? SS : Wb)().catch((SS => {
          throw this.viewerChunk = null, SS
        })), this.viewerChunk.then((SS => (this.viewer ??= new SS.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var SS, HS;
            null === (SS = (HS = this.deps).onViewerChange) || void 0 === SS || SS.call(HS)
          }
        }), this.viewer))))
      }
      activated(SS) {
        this.recorder.activated(SS)
      }
      afterFrame(SS) {
        try {
          SS > 0 && this.recorder.mf()
        } finally {
          var HS;
          null === (HS = this.viewer) || void 0 === HS || HS.afterFrame()
        }
      }
      end() {
        var SS;
        null === (SS = this.viewer) || void 0 === SS || SS.end()
      }
      saveFailed(SS) {
        var HS;
        SS === kS.nd.Edited ? null === (HS = this.viewer) || void 0 === HS || HS.saveFailed(!1) : this.recorder.failed(SS)
      }
    }
    var Ub = gS(40655),
      pb = gS(40666),
      sb = gS(4938),
      Bb = gS(40938);
    class Mb {
      constructor(SS) {
        this.deps = SS, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(SS, HS) {
        if (!this.deps.live() || 0 === SS && 0 === HS) return;
        const gS = (0, iS.r)(0, performance.now()),
          tS = this.deps.dragScale();
        (0, Bb.h)((() => {
          (0, iS.y)(kS.Gb.MouseDown, 0, 0, 0, gS), (0, iS.y)(kS.Gb.MouseMove, 0, SS * tS, HS * tS, 0), (0, iS.y)(kS.Gb.MouseUp, 0, 0, 0, gS)
        }))
      }
      move(SS) {
        var HS, gS;
        this.analogue[0] = null !== (HS = null === SS || void 0 === SS ? void 0 : SS.x) && void 0 !== HS ? HS : 0, this.analogue[1] = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.y) && void 0 !== gS ? gS : 0, this.send()
      }
      holdVertical(SS, HS) {
        const gS = "freeCamUp" === SS ? KS.Kb.Up : KS.Kb.Down;
        this.keys = HS ? this.keys | gS : this.keys & ~gS, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const SS = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== SS && !(0, KS.re)(SS, 0, this.analogue, this.keys)
      }
    }
    var Fb = gS(3694),
      Rb = gS(786),
      Tb = gS(307),
      ob = gS(104),
      lb = gS(34158);

    function mb() {
      const SS = tS.b.get("clientEscMenuOptions"),
        HS = (0, Rb.l)(SS);
      return {
        mouse: (0, ob.isMobile)() ? HS : SS.mouseSensitivity,
        touch: HS,
        fovPercent: SS.cameraFOV
      }
    }

    function eb() {
      const SS = tS.b.get("clientEscMenuOptions"),
        HS = tS.b.get("isTouchScreen") ? (0, Rb.l)(SS) : SS.mouseSensitivity,
        gS = mb().mouse;
      return gS > 0 ? HS / gS : 1
    }

    function rb(SS) {
      const HS = () => {
        SS.setSoundPrefs(tS.b.get("soundVolume"), tS.b.get("soundOnFromAd"))
      };
      let gS = null;
      const bS = () => {
        const {
          showFog: HS,
          enableLighting: bS,
          fogChunkDistance: XS,
          chunkFadeIn: xS
        } = tS.b.get("clientEscMenuOptions"), NS = {
          showFog: HS,
          lighting: bS,
          fogChunks: XS,
          chunkFade: xS,
          cellLight: (0, Fb.n)("cellLight") ? (0, Fb.n)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        gS && (0, kS.he)(gS) === (0, kS.he)(NS) && gS.fogChunks === XS || (gS = NS, SS.setEnvPrefs(gS))
      };
      let XS = null;
      const NS = () => {
        const HS = function() {
          const SS = tS.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: tS.b.get("areNametagsHidden"),
            crouchToggle: SS.crouchIsToggle,
            bhopDisabled: SS.disableBunnyHopping,
            disableBobbing: SS.disableBobbing,
            ezTowering: SS.ezTowering && (0, Tb.g)(),
            ezBridging: SS.ezBridging,
            showChunkBorders: SS.showChunkBorders,
            nametagCutDistance: (0, lb.e)()
          }
        }();
        (0, OS.Wd)(XS, HS) || (XS = HS, SS.setUiPrefs(HS))
      };
      let qS = null;
      const uS = () => {
        const HS = mb();
        (0, OS.Wd)(qS, HS) || (qS = HS, SS.setLookPrefs(HS))
      };
      HS(), bS(), NS(), uS();
      const IS = [(0, xS.m)("appManagerUpdated|soundVolume", HS), (0, xS.m)("appManagerUpdated|soundOnFromAd", HS), (0, xS.m)("appManagerUpdated|clientEscMenuOptions", (() => {
        bS(), NS(), uS()
      })), (0, xS.m)("appManagerUpdated|enabledDebugFeatures", bS), (0, xS.m)("appManagerUpdated|areNametagsHidden", NS), (0, xS.m)("appManagerUpdated|showDistantNametags", NS)];
      return () => {
        for (const SS of IS) SS()
      }
    }
    var SX = gS(40924),
      HX = gS(40928);
    var gX = (0, HX.d)("lend"),
      tX = (0, HX.d)("starting"),
      bX = (0, HX.d)("generation"),
      XX = (0, HX.d)("end");
    class xX {
      constructor(SS) {
        this.deps = SS, Object.defineProperty(this, XX, {
          value: NX
        }), Object.defineProperty(this, gX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, bX, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, SX.c)(this, gX)[gX] || (0, SX.c)(this, tX)[tX]
      }
      async start(SS) {
        if (this.active) return "busy";
        const HS = (0, SX.c)(this, bX)[bX];
        (0, SX.c)(this, tX)[tX] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, SX.c)(this, tX)[tX] = !1
        }
        if (HS !== (0, SX.c)(this, bX)[bX]) return "refused";
        const gS = this.deps.beginSave();
        if (!gS) return "refused";
        const tS = Number(BigInt.asUintN(32, SS)),
          bS = Number(BigInt.asUintN(32, SS >> 32n));
        let XS = "refused";
        return this.deps.recorderCall(((SS, HS) => {
          const xS = gS.editState,
            NS = SS.stage(xS.length);
          0 !== NS ? (new Uint8Array(HS.buffer, NS, xS.length).set(xS), SS.wbS(gS.headLen, tS, bS) && (XS = "sealing")) : XS = "tooLarge"
        }), !0), "sealing" !== XS ? (gS.end(), XS) : ((0, SX.c)(this, gX)[gX] = gS, "sealing")
      }
      beforeRecorderStep() {
        const SS = (0, SX.c)(this, gX)[gX];
        if (!SS) return null;
        let HS = -1,
          gS = 0;
        if (!this.deps.recorderCall((SS => {
            HS = SS.hbS(), HS > 0 && (gS = SS.ZbS())
          }))) return (0, SX.c)(this, XX)[XX](SS, "stopped");
        if (HS < 0) return (0, SX.c)(this, XX)[XX](SS, "read");
        if (0 === HS) return null;
        const tS = SS.head(gS, HS);
        let bS = !1;
        if (tS && this.deps.recorderCall(((SS, gS) => {
            const XS = SS.stage(HS);
            0 !== XS && (new Uint8Array(gS.buffer, XS, HS).set(tS), bS = !0)
          }), !0), bS) return null;
        const XS = SS.givenUp();
        this.deps.recorderCall((SS => {
          SS.JbS()
        }));
        const xS = (0, SX.c)(this, XX)[XX](SS, XS ? "givenUp" : "stopped");
        return XS && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), xS
      }
      stop() {
        (0, SX.c)(this, bX)[bX]++;
        const SS = (0, SX.c)(this, gX)[gX];
        SS && (this.deps.recorderCall((SS => {
          SS.JbS()
        })), (0, SX.c)(this, XX)[XX](SS, "stopped"))
      }
    }

    function NX(SS, HS) {
      return (0, SX.c)(this, gX)[gX] = null, SS.end(), HS
    }

    function qX(SS, HS) {
      const gS = new Uint8Array(4),
        tS = new DataView(gS.buffer);
      return tS.setUint8(0, SS ? 1 : 0), tS.setUint16(2, Math.max(0, Math.min(65535, Math.round(HS))), !0), gS
    }

    function uX(SS, HS) {
      return SS > function(SS) {
        return 16777216 + 314572.8 * Math.max(0, SS)
      }(HS) + 33554432
    }
    let IX = null;

    function fX(SS) {
      return IX ??= async function(SS) {
        const HS = SS.loadInFlight();
        HS && await HS.catch((() => {}));
        if (SS.trapped()) return "trapped";
        if (SS.busy() || !uX(SS.memoryBytes(), SS.clipSeconds())) return "ia";
        SS.unload();
        let gS = !1;
        try {
          gS = await SS.load()
        } catch {
          gS = !1
        }
        if (!gS) return SS.trapped() ? "trapped" : SS.nK() ? "nK" : "failed";
        return "recycled"
      }(SS).finally((() => {
        IX = null
      })), IX
    }
    const kX = "Replay recording couldn't load, so try again.",
      aX = new Set([kS.gd.ToggleRecording, kS.gd.SaveClip]);
    var KX = (0, HX.d)("bindings"),
      jX = (0, HX.d)("module"),
      GX = (0, HX.d)("memory"),
      CX = (0, HX.d)("trapped"),
      nX = (0, HX.d)("nK"),
      PX = (0, HX.d)("recycleDue"),
      QX = (0, HX.d)("loading"),
      DX = (0, HX.d)("generation"),
      wX = (0, HX.d)("viewDrawn"),
      hX = (0, HX.d)("clip"),
      ZX = (0, HX.d)("session"),
      JX = (0, HX.d)("control"),
      OX = (0, HX.d)("deferred"),
      dX = (0, HX.d)("coreU8"),
      cX = (0, HX.d)("coreU32"),
      vX = (0, HX.d)("moduleU8"),
      EX = (0, HX.d)("edited"),
      LX = (0, HX.d)("sendSession"),
      YX = (0, HX.d)("checkNotInEvents"),
      AX = (0, HX.d)("clipping"),
      yX = (0, HX.d)("busy"),
      VX = (0, HX.d)("use"),
      iX = (0, HX.d)("ensureLoaded"),
      WX = (0, HX.d)("loadOnce"),
      zX = (0, HX.d)("recycleAfterStep"),
      UX = (0, HX.d)("settleRecycle"),
      pX = (0, HX.d)("load"),
      sX = (0, HX.d)("attach"),
      BX = (0, HX.d)("resendHeld"),
      MX = (0, HX.d)("recycle"),
      FX = (0, HX.d)("send"),
      RX = (0, HX.d)("unload"),
      TX = (0, HX.d)("dropModule"),
      oX = (0, HX.d)("coreBytes"),
      lX = (0, HX.d)("coreWords"),
      mX = (0, HX.d)("moduleBytes"),
      eX = (0, HX.d)("loadFailed"),
      rX = (0, HX.d)("call"),
      Sx = (0, HX.d)("guard"),
      Hx = (0, HX.d)("trapOn");
    class gx {
      constructor(SS) {
        this.deps = SS, Object.defineProperty(this, Hx, {
          value: Jx
        }), Object.defineProperty(this, Sx, {
          value: Zx
        }), Object.defineProperty(this, rX, {
          value: hx
        }), Object.defineProperty(this, eX, {
          value: wx
        }), Object.defineProperty(this, mX, {
          value: Dx
        }), Object.defineProperty(this, lX, {
          value: Qx
        }), Object.defineProperty(this, oX, {
          value: Px
        }), Object.defineProperty(this, TX, {
          value: nx
        }), Object.defineProperty(this, RX, {
          value: Cx
        }), Object.defineProperty(this, FX, {
          value: Gx
        }), Object.defineProperty(this, MX, {
          value: jx
        }), Object.defineProperty(this, BX, {
          value: Kx
        }), Object.defineProperty(this, sX, {
          value: ax
        }), Object.defineProperty(this, pX, {
          value: kx
        }), Object.defineProperty(this, UX, {
          value: fx
        }), Object.defineProperty(this, zX, {
          value: Ix
        }), Object.defineProperty(this, WX, {
          value: ux
        }), Object.defineProperty(this, iX, {
          value: qx
        }), Object.defineProperty(this, VX, {
          value: Nx
        }), Object.defineProperty(this, yX, {
          value: xx
        }), Object.defineProperty(this, AX, {
          value: Xx
        }), Object.defineProperty(this, YX, {
          value: bx
        }), Object.defineProperty(this, LX, {
          value: tx
        }), Object.defineProperty(this, KX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, nX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, PX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, wX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, hX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, OX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, EX, {
          writable: !0,
          value: void 0
        }), (0, SX.c)(this, EX)[EX] = new xX({
          ensureLoaded: () => (0, SX.c)(this, iX)[iX](),
          recorderCall: (SS, HS) => {
            HS && (0, SX.c)(this, YX)[YX]("an edited save's stage");
            const gS = (0, SX.c)(this, rX)[rX](((HS, gS) => (SS(HS, gS), !0)));
            return null !== gS && void 0 !== gS && gS
          },
          beginSave: SS.beginSave,
          givenUp: SS.givenUp
        })
      }
      get active() {
        return null !== (0, SX.c)(this, jX)[jX]
      }
      get trapped() {
        return (0, SX.c)(this, CX)[CX]
      }
      get loading() {
        return null !== (0, SX.c)(this, QX)[QX]
      }
      prefetch() {
        (0, SX.c)(this, nX)[nX] || (0, SX.c)(this, CX)[CX] || (0, SX.c)(this, jX)[jX] || (0, SX.c)(this, QX)[QX] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, SX.c)(this, wX)[wX] = !0, (0, SX.c)(this, AX)[AX]() && (0, SX.c)(this, VX)[VX]()
      }
      prefs(SS, HS) {
        (0, SX.c)(this, hX)[hX] = {
          on: SS,
          seconds: HS
        }, (0, SX.c)(this, FX)[FX](kS.ad.Prefs, qX(SS, HS)), SS && (0, SX.c)(this, wX)[wX] && (0, SX.c)(this, VX)[VX]()
      }
      control(SS) {
        const HS = function(SS) {
          return new Uint8Array([SS, 0, 0, 0])
        }(SS);
        if (aX.has(SS)) return (0, SX.c)(this, jX)[jX] ? void(0, SX.c)(this, FX)[FX](kS.ad.Control, HS) : ((0, SX.c)(this, JX)[JX] = HS, void(0, SX.c)(this, VX)[VX]());
        (0, SX.c)(this, nX)[nX] || this.deps.coreCommand(kS.ad.Control, HS)
      }
      session(SS) {
        (0, SX.c)(this, ZX)[ZX] = SS, (0, SX.c)(this, LX)[LX](SS)
      }
      filePartDone(SS, HS) {
        (0, SX.c)(this, FX)[FX](kS.ad.FilePartDone, function(SS, HS) {
          const gS = new Uint8Array(8),
            tS = new DataView(gS.buffer);
          return tS.setUint32(0, SS, !0), tS.setUint32(4, HS, !0), gS
        }(SS, HS))
      }
      fileDone(SS) {
        return (0, SX.c)(this, FX)[FX](kS.ad.FileDone, function(SS) {
          const HS = new Uint8Array(4);
          return new DataView(HS.buffer).setUint32(0, SS, !0), HS
        }(SS)), (0, SX.c)(this, zX)[zX]()
      }
      saveEdited(SS) {
        return (0, SX.c)(this, YX)[YX]("saveEdited"), (0, SX.c)(this, EX)[EX].start(SS)
      }
      afterFrame() {
        if (!(0, SX.c)(this, jX)[jX]) return;
        "read" === (0, SX.c)(this, EX)[EX].beforeRecorderStep() && (0, SX.c)(this, zX)[zX]();
        const SS = (0, SX.c)(this, PX)[PX];
        (0, SX.c)(this, PX)[PX] = null;
        const HS = (0, SX.c)(this, jX)[jX],
          gS = (0, SX.c)(this, GX)[GX];
        if (!HS || !gS) return void(null === SS || void 0 === SS || SS.resolve((0, SX.c)(this, CX)[CX] ? "trapped" : "ia"));
        const {
          core: tS
        } = this.deps, bS = tS.cbS(2);
        let XS, xS, NS, qS, uS = 0,
          IS = 0;
        if (0 !== bS) {
          var fS, kS;
          const SS = (0, SX.c)(this, lX)[lX]();
          uS = null !== (fS = SS[bS >>> 2]) && void 0 !== fS ? fS : 0, IS = null !== (kS = SS[1 + (bS >>> 2)]) && void 0 !== kS ? kS : 0
        }
        try {
          if (IS > 0) {
            const SS = HS.feed(IS);
            0 !== SS && (0, SX.c)(this, mX)[mX](gS).set((0, SX.c)(this, oX)[oX]().subarray(uS, uS + IS), SS)
          }
          XS = HS.step(), xS = HS.vbS(), NS = HS.EbS(), qS = HS.LbS()
        } catch (aS) {
          if (!(0, SX.c)(this, Hx)[Hx](aS)) throw null === SS || void 0 === SS || SS.resolve("ia"), aS;
          return void(null === SS || void 0 === SS || SS.resolve("trapped"))
        }
        if (XS > 0) {
          const SS = tS.YbS(2, XS);
          0 !== SS && (0, SX.c)(this, oX)[oX]().set((0, SX.c)(this, mX)[mX](gS).subarray(xS, xS + XS), SS)
        }
        if (NS > 0) {
          (0, SX.c)(this, OX)[OX] = [];
          try {
            this.deps.events(new Uint8Array(gS.buffer, qS, NS), gS)
          } catch (aS) {
            throw null === SS || void 0 === SS || SS.resolve("ia"), aS
          } finally {
            const SS = (0, SX.c)(this, OX)[OX];
            (0, SX.c)(this, OX)[OX] = null;
            for (const [HS, gS] of SS)(0, SX.c)(this, FX)[FX](HS, gS)
          }
        }
        if (!(0, SX.c)(this, AX)[AX]() && !(0, SX.c)(this, yX)[yX]()) return (0, SX.c)(this, RX)[RX](), void(null === SS || void 0 === SS || SS.resolve("ia"));
        null === SS || void 0 === SS || SS.resolve((0, SX.c)(this, MX)[MX]())
      }
      dispose() {
        (0, SX.c)(this, nX)[nX] = !0, (0, SX.c)(this, RX)[RX]()
      }
    }

    function tx(SS) {
      (0, SX.c)(this, FX)[FX](kS.ad.Session, function(SS) {
        const HS = new TextEncoder,
          gS = HS.encode(SS.game).subarray(0, 65535),
          tS = HS.encode(SS.lobby).subarray(0, 65535),
          bS = new Uint8Array(22 + gS.length + 2 + tS.length),
          XS = new DataView(bS.buffer);
        XS.setFloat64(0, SS.unixMs, !0), XS.setBigUint64(8, BigInt.asUintN(64, SS.session), !0), XS.setUint8(16, SS.lobbyType);
        let xS = 20;
        for (const NS of [gS, tS]) XS.setUint16(xS, NS.length, !0), bS.set(NS, xS + 2), xS += 2 + NS.length;
        return bS
      }({
        ...SS,
        unixMs: this.deps.unixNow()
      }))
    }

    function bx(SS) {
      false
    }

    function Xx() {
      var SS, HS;
      return null !== (SS = null === (HS = (0, SX.c)(this, hX)[hX]) || void 0 === HS ? void 0 : HS.on) && void 0 !== SS && SS
    }

    function xx() {
      const SS = (0, SX.c)(this, jX)[jX];
      let HS = !0;
      if (SS) try {
        HS = SS.busy()
      } catch (gS) {
        if (!(0, SX.c)(this, Hx)[Hx](gS)) throw gS
      }
      return HS || (0, SX.c)(this, EX)[EX].active
    }
    async function Nx() {
      !(0, SX.c)(this, nX)[nX] && this.deps.allowed() ? await (0, SX.c)(this, iX)[iX]() : (0, SX.c)(this, JX)[JX] = null
    }

    function qx() {
      return (0, SX.c)(this, CX)[CX] || (0, SX.c)(this, nX)[nX] ? Promise.resolve(!1) : (0, SX.c)(this, jX)[jX] ? Promise.resolve(!0) : ((0, SX.c)(this, QX)[QX] ??= (0, SX.c)(this, WX)[WX](), (0, SX.c)(this, QX)[QX])
    }
    async function ux() {
      let SS = !1;
      try {
        return SS = await (0, SX.c)(this, pX)[pX](), SS
      } finally {
        SS || ((0, SX.c)(this, JX)[JX] = null), (0, SX.c)(this, QX)[QX] = null
      }
    }

    function Ix() {
      if (!(0, SX.c)(this, jX)[jX]) return Promise.resolve((0, SX.c)(this, CX)[CX] ? "trapped" : "ia");
      if (!(0, SX.c)(this, PX)[PX]) {
        let SS = () => {};
        const HS = new Promise((HS => {
          SS = HS
        }));
        (0, SX.c)(this, PX)[PX] = {
          promise: HS,
          resolve: SS
        }
      }
      return (0, SX.c)(this, PX)[PX].promise
    }

    function fx(SS) {
      const HS = (0, SX.c)(this, PX)[PX];
      (0, SX.c)(this, PX)[PX] = null, null === HS || void 0 === HS || HS.resolve(SS)
    }
    async function kx() {
      let SS = (0, SX.c)(this, KX)[KX];
      if (!SS) {
        const HS = (0, SX.c)(this, DX)[DX];
        try {
          SS = await this.deps.load()
        } catch (gS) {
          return HS === (0, SX.c)(this, DX)[DX] && await (0, SX.c)(this, eX)[eX](gS), !1
        }
        if (HS !== (0, SX.c)(this, DX)[DX]) return this.deps.unload(), !1;
        const tS = SS,
          bS = (0, SX.c)(this, Sx)[Sx]((() => tS.AbS()));
        if (void 0 === bS) return !1;
        const XS = this.deps.core.ybS();
        if (bS !== XS) return await (0, SX.c)(this, eX)[eX](new Error(`recorder port version ${bS}, the core's ${XS}`)), !1;
        (0, SX.c)(this, KX)[KX] = SS
      }
      const HS = SS;
      try {
        if (!(0, SX.c)(this, Sx)[Sx]((() => ((0, SX.c)(this, jX)[jX] = new HS.VbS, (0, SX.c)(this, GX)[GX] = HS.ObS(), !0)))) return !1;
        (0, SX.c)(this, BX)[BX]();
        const SS = (0, SX.c)(this, JX)[JX];
        return (0, SX.c)(this, JX)[JX] = null, SS && (0, SX.c)(this, FX)[FX](kS.ad.Control, SS), (0, SX.c)(this, sX)[sX]()
      } catch (gS) {
        return (0, SX.c)(this, RX)[RX](), await (0, SX.c)(this, eX)[eX](gS), !1
      }
    }

    function ax() {
      return this.deps.core.ibS(0), 1 === this.deps.core.ibS(1) || ((0, SX.c)(this, RX)[RX](), this.deps.failed(kX), !1)
    }

    function Kx() {
      (0, SX.c)(this, hX)[hX] && (0, SX.c)(this, FX)[FX](kS.ad.Prefs, qX((0, SX.c)(this, hX)[hX].on, (0, SX.c)(this, hX)[hX].seconds)), (0, SX.c)(this, ZX)[ZX] && (0, SX.c)(this, LX)[LX]((0, SX.c)(this, ZX)[ZX])
    }

    function jx() {
      return fX({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var SS, HS;
          return null !== (SS = null === (HS = (0, SX.c)(this, hX)[hX]) || void 0 === HS ? void 0 : HS.seconds) && void 0 !== SS ? SS : 0
        },
        trapped: () => (0, SX.c)(this, CX)[CX],
        busy: () => (0, SX.c)(this, yX)[yX](),
        loadInFlight: () => (0, SX.c)(this, QX)[QX],
        nK: () => (0, SX.c)(this, nX)[nX],
        unload: () => {
          (0, SX.c)(this, RX)[RX]()
        },
        load: () => (0, SX.c)(this, iX)[iX]()
      })
    }

    function Gx(SS, HS) {
      (0, SX.c)(this, OX)[OX] ? (0, SX.c)(this, OX)[OX].push([SS, HS]): (0, SX.c)(this, rX)[rX](((gS, tS) => {
        const bS = gS.dbS(HS.length);
        0 !== bS && (new Uint8Array(tS.buffer, bS, HS.length).set(HS), gS.command(SS, HS.length))
      }))
    }

    function Cx() {
      (0, SX.c)(this, DX)[DX]++, (0, SX.c)(this, UX)[UX]("ia"), (0, SX.c)(this, EX)[EX].stop(), this.deps.core.ibS(0), (0, SX.c)(this, TX)[TX](), (0, SX.c)(this, CX)[CX] || ((0, SX.c)(this, KX)[KX] = null, this.deps.unload())
    }

    function nx() {
      (0, SX.c)(this, rX)[rX]((SS => {
        SS.free()
      })), (0, SX.c)(this, jX)[jX] = null, (0, SX.c)(this, GX)[GX] = null, (0, SX.c)(this, vX)[vX] = null
    }

    function Px() {
      var SS;
      const HS = this.deps.coreBuffer();
      return (null === (SS = (0, SX.c)(this, dX)[dX]) || void 0 === SS ? void 0 : SS.buffer) !== HS && ((0, SX.c)(this, dX)[dX] = new Uint8Array(HS)), (0, SX.c)(this, dX)[dX]
    }

    function Qx() {
      var SS;
      const HS = this.deps.coreBuffer();
      return (null === (SS = (0, SX.c)(this, cX)[cX]) || void 0 === SS ? void 0 : SS.buffer) !== HS && ((0, SX.c)(this, cX)[cX] = new Uint32Array(HS, 0, HS.byteLength >>> 2)), (0, SX.c)(this, cX)[cX]
    }

    function Dx(SS) {
      var HS;
      const gS = SS.buffer;
      return (null === (HS = (0, SX.c)(this, vX)[vX]) || void 0 === HS ? void 0 : HS.buffer) !== gS && ((0, SX.c)(this, vX)[vX] = new Uint8Array(gS)), (0, SX.c)(this, vX)[vX]
    }
    async function wx(SS) {
      await this.deps.staleOr(SS, (() => {
        this.deps.failed(kX)
      }))
    }

    function hx(SS) {
      const HS = (0, SX.c)(this, jX)[jX],
        gS = (0, SX.c)(this, GX)[GX];
      if (HS && gS) return (0, SX.c)(this, Sx)[Sx]((() => SS(HS, gS)))
    }

    function Zx(SS) {
      if (!(0, SX.c)(this, CX)[CX]) try {
        return SS()
      } catch (HS) {
        if (!(0, SX.c)(this, Hx)[Hx](HS)) throw HS;
        return
      }
    }

    function Jx(SS) {
      return SS instanceof WebAssembly.RuntimeError && ((0, SX.c)(this, CX)[CX] = !0, (0, SX.c)(this, jX)[jX] = null, (0, SX.c)(this, GX)[GX] = null, (0, SX.c)(this, vX)[vX] = null, (0, SX.c)(this, KX)[KX] = null, (0, SX.c)(this, JX)[JX] = null, (0, SX.c)(this, UX)[UX]("trapped"), this.deps.core.ibS(0), (0, SX.c)(this, EX)[EX].stop(), this.deps.crash(this.deps.markTrapped(SS)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Ox = gS(38659);
    const dx = new Map([
      ["skyblock", () => gS.e(51).then((() => gS(38650)))]
    ]);

    function cx(SS) {
      const HS = dx.get(SS);
      return HS ? HS().then((() => {
        const HS = (0, Ox.c)(SS);
        if (!HS) throw new Error(`${SS}'s replay hook module registered no hook`);
        return HS
      })) : null
    }
    class vx {
      constructor(SS) {
        this.deps = SS, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(SS) {
        if (this.pending.clear(), SS === this.game && null !== this.hook) return void(this.all = !0);
        const HS = ++this.generation;
        this.game = SS, this.hook = null, this.all = !1;
        const gS = this.deps.loadHook(SS);
        null === gS || void 0 === gS || gS.then((SS => {
          HS === this.generation && (this.hook = SS, this.all = !0)
        }), (SS => {
          HS === this.generation && this.deps.onError(SS)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(SS) {
        null === this.hook || this.all || this.pending.set(SS, !0)
      }
      entityInfoChanged(SS) {
        null === this.hook || this.all || this.pending.has(SS) || this.pending.set(SS, !1)
      }
      flush(SS) {
        const {
          hook: HS
        } = this;
        if (null === HS || !SS || !this.all && 0 === this.pending.size) return;
        const gS = this.deps.cmd();
        if (null === gS) return;
        const {
          api: tS
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: SS,
            count: HS
          } = Wg(tS, this.ids);
          this.ids = SS;
          for (let gS = 0; gS < HS; gS++) this.pending.set(SS[gS], !0)
        }
        const bS = this.ids = zg(this.ids, this.pending.size);
        let XS = 0;
        for (const uS of this.pending.keys()) bS[XS++] = uS;
        const xS = [],
          NS = Ug(tS, bS, XS, ((SS, HS) => {
            null !== HS && xS.push({
              serverId: SS,
              info: HS,
              spawned: !0 === this.pending.get(SS)
            })
          }));
        if (NS) {
          this.pending.clear();
          for (const {
              serverId: SS,
              info: tS,
              spawned: bS
            }
            of xS) try {
            HS(tS, {
              setFacingTolerance: HS => {
                null === HS && bS || Ng(gS, SS, HS) || this.pending.set(SS, bS)
              }
            })
          } catch (qS) {
            this.deps.onError(qS)
          }
        }
      }
    }
    var Ex = (0, HX.d)("bindings"),
      Lx = (0, HX.d)("module"),
      Yx = (0, HX.d)("memory"),
      Ax = (0, HX.d)("trapped"),
      yx = (0, HX.d)("generation"),
      Vx = (0, HX.d)("loading"),
      ix = (0, HX.d)("lend"),
      Wx = (0, HX.d)("givenUp"),
      zx = (0, HX.d)("afterSave"),
      Ux = (0, HX.d)("opens"),
      px = (0, HX.d)("saveAskedAt"),
      sx = (0, HX.d)("unload"),
      Bx = (0, HX.d)("dropModule"),
      Mx = (0, HX.d)("loadFailed"),
      Fx = (0, HX.d)("saveReadsBody"),
      Rx = (0, HX.d)("command"),
      Tx = (0, HX.d)("call"),
      ox = (0, HX.d)("guard"),
      lx = (0, HX.d)("trapOn");
    class mx {
      constructor(SS) {
        this.deps = SS, Object.defineProperty(this, lx, {
          value: XN
        }), Object.defineProperty(this, ox, {
          value: bN
        }), Object.defineProperty(this, Tx, {
          value: tN
        }), Object.defineProperty(this, Rx, {
          value: gN
        }), Object.defineProperty(this, Fx, {
          get: HN,
          set: void 0
        }), Object.defineProperty(this, Mx, {
          value: SN
        }), Object.defineProperty(this, Bx, {
          value: rx
        }), Object.defineProperty(this, sx, {
          value: ex
        }), Object.defineProperty(this, Ex, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Yx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ax, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, yx, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Vx, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ix, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Wx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ux, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, px, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, SX.c)(this, Lx)[Lx] && null === (0, SX.c)(this, zx)[zx]
      }
      async open(SS, HS) {
        if ((0, SX.c)(this, Ax)[Ax]) return kS.ld.ModuleTrap;
        let gS = (0, SX.c)(this, Ex)[Ex];
        if (!gS) {
          const SS = (0, SX.c)(this, yx)[yx];
          (0, SX.c)(this, Vx)[Vx]++;
          try {
            gS = await this.deps.load()
          } catch (bS) {
            return (0, SX.c)(this, Vx)[Vx]--, SS !== (0, SX.c)(this, yx)[yx] ? "stopped" : (0, SX.c)(this, Mx)[Mx](bS, HS)
          }
          if ((0, SX.c)(this, Vx)[Vx]--, SS !== (0, SX.c)(this, yx)[yx]) return (0, SX.c)(this, Ex)[Ex] || 0 !== (0, SX.c)(this, Vx)[Vx] || (0, SX.c)(this, Ax)[Ax] || this.deps.unload(), "stopped";
          if ((0, SX.c)(this, Ax)[Ax]) return kS.ld.ModuleTrap;
          const tS = gS.AbS(),
            XS = this.deps.core.ybS();
          if (tS !== XS) return (0, SX.c)(this, Mx)[Mx](new Error(`replay port version ${tS}, the core's ${XS}`), HS);
          (0, SX.c)(this, Ex)[Ex] = gS
        }
        if (!(0, SX.c)(this, Lx)[Lx]) {
          const SS = gS;
          if (!(0, SX.c)(this, ox)[ox]((() => {
              (0, SX.c)(this, Lx)[Lx] = new SS.WbS, (0, SX.c)(this, Yx)[Yx] = SS.zbS()
            }))) return kS.ld.ModuleTrap
        }
        let tS = !1;
        return (0, SX.c)(this, Tx)[Tx](((HS, gS) => {
          null !== (0, SX.c)(this, zx)[zx] && HS.step(0, 0);
          const bS = HS.stage(SS.length);
          0 !== bS && (new Uint8Array(gS.buffer, bS, SS.length).set(SS), HS.open(), (0, SX.c)(this, Wx)[Wx] = (0, SX.c)(this, ix)[ix], (0, SX.c)(this, zx)[zx] = null, (0, SX.c)(this, Ux)[Ux]++, tS = !0)
        })) ? tS ? "opening" : kS.ld.TooLarge : kS.ld.ModuleTrap
      }
      beforeFrame(SS) {
        const HS = (0, SX.c)(this, Lx)[Lx],
          gS = (0, SX.c)(this, Yx)[Yx];
        if (!HS || !gS || null !== (0, SX.c)(this, zx)[zx]) return;
        const {
          core: tS
        } = this.deps, bS = tS.UbS(SS);
        if (bS < 0) return;
        const XS = Math.floor(bS);
        let xS, NS;
        try {
          xS = HS.step(XS, bS - XS), NS = HS.vbS()
        } catch (uS) {
          return void(0, SX.c)(this, lx)[lx](uS)
        }
        const qS = tS.YbS(1, xS);
        if (0 === qS) {
          const SS = (0, SX.c)(this, Tx)[Tx]((SS => {
            SS.close()
          }));
          if (!SS) return;
          return (0, SX.c)(this, Fx)[Fx] ? (0, SX.c)(this, zx)[zx] = "drop" : (0, SX.c)(this, Bx)[Bx](), void tS.pbS(kS.ld.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), qS, xS).set(new Uint8Array(gS.buffer, NS, xS))
      }
      play() {
        (0, SX.c)(this, Rx)[Rx]((SS => {
          SS.play()
        }))
      }
      pause() {
        (0, SX.c)(this, Rx)[Rx]((SS => {
          SS.pause()
        }))
      }
      seek(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, SX.c)(this, Rx)[Rx]((gS => {
          gS.seek(SS, HS)
        }))
      }
      setMark(SS, HS) {
        return (0, SX.c)(this, Rx)[Rx]((gS => {
          gS.sbS(SS, HS)
        }))
      }
      addKeyframe(SS, HS) {
        return (0, SX.c)(this, Rx)[Rx]((gS => {
          gS.BbS(SS[0], SS[1], SS[2], HS[0], HS[1], HS[2])
        }))
      }
      setKeyframe(SS, HS) {
        return (0, SX.c)(this, Rx)[Rx]((gS => {
          gS.MbS(SS, HS)
        }))
      }
      moveKeyframe(SS, HS) {
        return (0, SX.c)(this, Rx)[Rx]((gS => {
          gS.FbS(SS, HS)
        }))
      }
      deleteKeyframes(SS, HS) {
        return (0, SX.c)(this, Rx)[Rx]((gS => {
          gS.RbS(SS, HS)
        }))
      }
      crop(SS, HS) {
        return null === (0, SX.c)(this, ix)[ix] && (0, SX.c)(this, Rx)[Rx]((gS => {
          gS.crop(SS, HS)
        }))
      }
      beginSave() {
        const SS = (0, SX.c)(this, px)[px];
        if ((0, SX.c)(this, px)[px] = null, null !== SS && SS !== (0, SX.c)(this, Ux)[Ux]) return null;
        let HS = 0,
          gS = null;
        if ((0, SX.c)(this, Tx)[Tx](((SS, tS) => {
            HS = SS.save(), 0 !== HS && (gS = new Uint8Array(tS.buffer, SS.TbS(), SS.obS()).slice())
          })), 0 === HS || !gS) return null;
        const tS = {
          headLen: HS,
          editState: gS,
          givenUp: () => (0, SX.c)(this, Wx)[Wx] === tS,
          head: (SS, HS) => {
            if ((0, SX.c)(this, ix)[ix] !== tS || !(0, SX.c)(this, Fx)[Fx]) return null;
            let gS = null;
            return (0, SX.c)(this, Tx)[Tx](((tS, bS) => {
              const XS = tS.lbS();
              0 !== XS && SS >= 0 && HS >= 0 && SS + HS <= XS && (gS = new Uint8Array(bS.buffer, tS.mbS() + SS, HS))
            })), gS
          },
          end: () => {
            if ((0, SX.c)(this, ix)[ix] !== tS) return;
            (0, SX.c)(this, ix)[ix] = null, (0, SX.c)(this, Wx)[Wx] = null, (0, SX.c)(this, Tx)[Tx]((SS => {
              SS.ebS()
            }));
            const SS = (0, SX.c)(this, zx)[zx];
            (0, SX.c)(this, zx)[zx] = null, "unload" === SS ? (0, SX.c)(this, sx)[sx]() : "drop" === SS && (0, SX.c)(this, Bx)[Bx]()
          }
        };
        return (0, SX.c)(this, ix)[ix] = tS, tS
      }
      askSave() {
        (0, SX.c)(this, px)[px] = (0, SX.c)(this, Ux)[Ux]
      }
      setSpeed(SS) {
        (0, SX.c)(this, Rx)[Rx]((HS => {
          HS.rbS(SS)
        }))
      }
      setCameraMode(SS) {
        (0, SX.c)(this, Rx)[Rx]((HS => {
          HS.SXS(SS)
        }))
      }
      close() {
        (0, SX.c)(this, Rx)[Rx]((SS => {
          SS.close()
        }))
      }
      stop() {
        (0, SX.c)(this, yx)[yx]++, (0, SX.c)(this, Fx)[Fx] && ((0, SX.c)(this, Tx)[Tx]((SS => {
          SS.close()
        })), (0, SX.c)(this, Lx)[Lx]) ? (0, SX.c)(this, zx)[zx] = "unload" : (0, SX.c)(this, sx)[sx]()
      }
    }

    function ex() {
      (0, SX.c)(this, Bx)[Bx](), (0, SX.c)(this, Ax)[Ax] || ((0, SX.c)(this, Ex)[Ex] = null, this.deps.unload())
    }

    function rx() {
      (0, SX.c)(this, Tx)[Tx]((SS => {
        SS.free()
      })), (0, SX.c)(this, Lx)[Lx] = null, (0, SX.c)(this, Yx)[Yx] = null
    }
    async function SN(SS, HS) {
      return await this.deps.staleOr(SS, (() => {}), {
        beforeReload: HS
      }) ? "reloading" : kS.ld.ModuleLoad
    }

    function HN() {
      return null !== (0, SX.c)(this, ix)[ix] && (0, SX.c)(this, Wx)[Wx] !== (0, SX.c)(this, ix)[ix]
    }

    function gN(SS) {
      return null === (0, SX.c)(this, zx)[zx] && (0, SX.c)(this, Tx)[Tx](SS)
    }

    function tN(SS) {
      const HS = (0, SX.c)(this, Lx)[Lx],
        gS = (0, SX.c)(this, Yx)[Yx];
      return !(!HS || !gS) && (0, SX.c)(this, ox)[ox]((() => {
        SS(HS, gS)
      }))
    }

    function bN(SS) {
      if ((0, SX.c)(this, Ax)[Ax]) return !1;
      try {
        return SS(), !0
      } catch (HS) {
        return (0, SX.c)(this, lx)[lx](HS), !1
      }
    }

    function XN(SS) {
      if (!(SS instanceof WebAssembly.RuntimeError)) throw SS;
      (0, SX.c)(this, Ax)[Ax] = !0, (0, SX.c)(this, Lx)[Lx] = null, (0, SX.c)(this, Yx)[Yx] = null, (0, SX.c)(this, Ex)[Ex] = null, this.deps.crash(this.deps.markTrapped(SS)), this.deps.core.pbS(kS.ld.ModuleTrap)
    }
    var xN = gS(6680),
      NN = gS(41049);
    const qN = "[bloxd-wasm-client]";
    const uN = String(Eb);

    function IN(SS) {
      return null === SS || SS === uN ? void 0 : SS
    }

    function fN(SS) {
      var HS, gS, tS, bS, XS, NS, qS;
      switch (SS.what) {
        case kS.pd.FlyingText: {
          let HS;
          try {
            HS = JSON.parse(SS.contentJson)
          } catch (uS) {
            return void console.warn(`${qN} a replay's flying text isn't JSON`, uS)
          }
          xS.k.cj("forceFlyingMiddleMessage", {
            content: HS,
            vX: SS.vX,
            angle: SS.angle,
            EX: SS.EX
          });
          break
        }
        case kS.pd.PlayerKilled:
          (0, NN.e)({
            kind: "killed",
            body: {
              deadEId: null !== (HS = IN(SS.dead)) && void 0 !== HS ? HS : "",
              killerEId: IN(SS.killer),
              withItem: null !== (gS = SS.withItem) && void 0 !== gS ? gS : "",
              killstreak: SS.killstreak
            }
          });
          break;
        case kS.pd.Killfeed:
          (0, NN.e)({
            kind: "custom",
            body: {
              killer: {
                eId: IN(SS.killerId),
                name: null !== (tS = SS.killerName) && void 0 !== tS ? tS : void 0,
                colour: null !== (bS = SS.killerColour) && void 0 !== bS ? bS : void 0
              },
              victim: {
                eId: IN(SS.victimId),
                name: null !== (XS = SS.victimName) && void 0 !== XS ? XS : void 0,
                colour: null !== (NS = SS.victimColour) && void 0 !== NS ? NS : void 0
              },
              withItem: null !== (qS = SS.withItem) && void 0 !== qS ? qS : ""
            }
          })
      }
    }
    const kN = "[bloxd-wasm-client]";

    function aN(SS) {
      if (void 0 === SS || null === SS || "" === SS) return null;
      const HS = Number(SS);
      return Number.isInteger(HS) && HS > Eb && HS <= 2147483647 ? HS : null
    }

    function KN(SS) {
      return {
        id: aN(SS.eId),
        name: "string" === typeof SS.name ? SS.name : null,
        colour: "string" === typeof SS.colour ? SS.colour : null
      }
    }

    function jN(SS) {
      const HS = (0, pb.l)(Rg.kc.PlayerKilled, (HS => {
          var gS, tS;
          const bS = (0, Ub.g)(HS);
          if (!(0, Ub.b)(bS)) return;
          const {
            deadEId: XS,
            killerEId: xS,
            withItem: NS,
            killstreak: qS
          } = bS;
          SS.recordPlayerKilled(null !== (gS = aN(XS)) && void 0 !== gS ? gS : Eb, null !== (tS = aN(xS)) && void 0 !== tS ? tS : Eb, "number" === typeof qS ? qS : 0, "string" === typeof NS ? NS : "")
        })),
        gS = (0, pb.l)(Rg.kc.CustomKillfeed, (HS => {
          const gS = (0, Ub.g)(HS);
          if (!(0, Ub.b)(gS) || !(0, Ub.b)(gS.killer) || !(0, Ub.b)(gS.victim)) return;
          const {
            killer: tS,
            victim: bS,
            withItem: XS
          } = gS;
          SS.recordKillfeed(KN(tS), KN(bS), "string" === typeof XS ? XS : null)
        }));
      return () => {
        HS(), gS()
      }
    }

    function GN(SS) {
      var HS;
      return void 0 === SS || null === SS ? null : null !== (HS = JSON.stringify(SS)) && void 0 !== HS ? HS : null
    }

    function CN(SS) {
      let HS = null;
      const gS = () => {
        const {
          enableClipping: gS,
          clipDurationSeconds: bS
        } = tS.b.get("clientEscMenuOptions"), XS = `${gS}:${bS}`;
        XS !== HS && (HS = XS, SS.recorder.setPrefs(gS, bS))
      };
      return gS(), (0, xS.m)("appManagerUpdated|clientEscMenuOptions", gS)
    }
    const nN = "replayModule",
      PN = "recorderModule";

    function QN(SS, HS, gS) {
      return function() {
        return SS.isStopped ? gS : HS(...arguments)
      }
    }
    const DN = {
      open: () => Promise.reject(new Error(Db.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function wN() {
      return gS.e(64).then((() => gS(61532)))
    }

    function hN(SS) {
      (0, Db.c)({
        text: SS,
        type: "Error"
      })
    }
    class ZN {
      constructor(SS) {
        this.deps = SS, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: HS,
          api: tS,
          core: bS
        } = SS, XS = () => SS.memory().buffer, xS = () => HS.isStopped ? null : HS.rings.cmd, NS = QN(HS, ((SS, HS) => bS.YbS(SS, HS)), 0), qS = () => bS.ybS();
        let uS = null;
        this.replay = new mx({
          core: {
            UbS: QN(HS, (SS => bS.UbS(SS)), -1),
            YbS: NS,
            ybS: qS,
            pbS: QN(HS, (SS => {
              bS.pbS(SS)
            }), void 0)
          },
          coreBuffer: XS,
          load: async () => (uS = await gS.e(65).then((() => gS(61544))), uS.loadReplayModule()),
          unload: () => {
            var SS;
            null === (SS = uS) || void 0 === SS || SS.unloadReplayModule()
          },
          markTrapped: SS => uS ? uS.markReplayTrapped(SS) : new Error(String(SS)),
          staleOr: (HS, gS, tS) => SS.staleOr(nN, HS, gS, tS),
          crash: HS => {
            SS.reportFault(nN, HS)
          }
        });
        let IS = null;
        this.recorder = new gx({
          core: {
            ibS: QN(HS, (SS => bS.ibS(SS)), 0),
            cbS: QN(HS, (SS => bS.cbS(SS)), 0),
            YbS: NS,
            ybS: qS
          },
          coreCommand: (SS, HS) => {
            var gS, tS;
            return null !== (gS = null === (tS = xS()) || void 0 === tS ? void 0 : tS.writeCmd(SS, 0, HS)) && void 0 !== gS && gS
          },
          coreBuffer: XS,
          load: async () => (IS = await wN(), IS.loadRecorderModule()),
          prefetch: () => {
            wN().then((SS => SS.prefetchRecorderModule())).catch((SS => {
              console.warn(`${kN} the recorder module didn't prefetch, so a save loads it:`, SS)
            }))
          },
          unload: () => {
            var SS;
            null === (SS = IS) || void 0 === SS || SS.unloadRecorderModule()
          },
          markTrapped: SS => IS ? IS.markRecorderTrapped(SS) : new Error(String(SS)),
          memoryBytes: () => {
            var SS, HS;
            return null !== (SS = null === (HS = IS) || void 0 === HS ? void 0 : HS.recorderMemoryBytes()) && void 0 !== SS ? SS : 0
          },
          staleOr: (HS, gS) => SS.staleOr(PN, HS, gS),
          crash: HS => {
            SS.reportFault(PN, HS)
          },
          allowed: () => !0 === SS.options.get("canRecordReplays"),
          failed: hN,
          events: (SS, HS) => {
            this.runtime.recorderEvents(SS, HS)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: hN,
          unixNow: () => Date.now()
        });
        const fS = new vb({
          core: {
            PbS: QN(HS, (SS => bS.PbS(SS)), 0),
            DbS: QN(HS, (() => {
              bS.DbS()
            }), void 0),
            AG: QN(HS, (() => bS.AG()), 0),
            QbS: QN(HS, (() => bS.QbS()), 0)
          },
          buffer: XS,
          apiView: () => tS.apiView,
          cmd: xS,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new vx({
          api: tS,
          cmd: xS,
          loadHook: cx,
          onError: SS => {
            console.warn(`${kN} the recorded game's replay hooks:`, SS)
          }
        });
        const kS = new zb({
          client: fS,
          buffer: XS,
          setHoldDraws: SS => {
            HS.setHoldDraws(SS)
          },
          notify: Db.c,
          onRecorderState: () => {
            var SS;
            null === (SS = (0, hb.g)()) || void 0 === SS || SS.recorderChanged()
          },
          onViewerChange: () => {
            var SS;
            null === (SS = (0, hb.g)()) || void 0 === SS || SS.viewerChanged()
          },
          onReplayOption: HS => {
            ! function(SS, HS) {
              var gS, tS;
              const bS = Rg.tb[HS.key];
              if (void 0 === bS) return;
              let XS = null !== (gS = HS.value) && void 0 !== gS ? gS : JSON.parse(JSON.stringify(null !== (tS = xN.c[bS]) && void 0 !== tS ? tS : null));
              if (null !== HS.value && HS.key < Rg.Tb.Environment && "string" === typeof XS) try {
                XS = JSON.parse(XS)
              } catch (xS) {
                return void console.warn(`${qN} a replay's ${bS} isn't JSON`, xS)
              }
              SS.applyNewClientOptions({
                [bS]: XS
              })
            }(SS.options, HS)
          },
          onReplayUiEvent: fN,
          onReplayOpened: HS => {
            this.entityHooks.opened((0, OS.Kb)(HS)), SS.replayShaderPack(HS)
          },
          meshPending: () => {
            var SS, gS;
            return null !== (SS = null === (gS = HS.lastHeader) || void 0 === gS ? void 0 : gS.renderPending) && void 0 !== SS ? SS : 0
          },
          viewerOpen: wb.c,
          download: SS => {
            (0, Pb.g)(SS)
          }
        });
        this.runtime = kS, tS.replay = kS.sink, (0, hb.v)(kS);
        const aS = new Mb({
          live: () => {
            var SS;
            return !HS.isStopped && !0 === (null === (SS = kS.currentViewer) || void 0 === SS ? void 0 : SS.inPlayback)
          },
          cmd: xS,
          dragScale: eb
        });
        this.freecam = aS, (0, hb.r)(aS), this.recordedOptions = function(SS, HS) {
          const gS = Rg.tb,
            tS = gS.map(((gS, tS) => HS.subscribe(gS, (HS => {
              SS.setOption(tS, GN(HS))
            }))));
          return {
            sendAll() {
              gS.forEach(((gS, tS) => {
                SS.setOption(tS, GN(HS.get(gS)))
              }))
            },
            stop() {
              for (const SS of tS) SS()
            }
          }
        }(kS.recorder, SS.options), this.stops = [(0, tt.k)((SS => {
          aS.flush();
          try {
            this.replay.beforeFrame(SS)
          } catch (HS) {
            this.deps.reportFault("replayFrame", HS)
          }
        })), (0, tt.A)(((SS, HS) => {
          try {
            this.recorder.afterFrame(), HS && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (gS) {
            this.deps.reportFault("recorderFrame", gS)
          }
          try {
            kS.afterFrame(SS)
          } catch (gS) {
            this.deps.reportFault("replayRuntime", gS)
          }
        })), CN(kS), () => {
          this.recordedOptions.stop()
        }, jN(kS.recorder), (0, sb.h)((SS => {
          let {
            action: HS,
            down: gS
          } = SS;
          var tS;
          gS && (null === (tS = (0, hb.g)()) || void 0 === tS || tS.keyDown(HS))
        }))];
        const KS = () => {
          const SS = kS.currentViewer;
          return !0 === (null === SS || void 0 === SS ? void 0 : SS.isOpen) ? SS : null
        };
        (0, Qb.g)({
          open: (SS, HS) => this.open(SS, HS),
          replayKey: () => {
            var SS, HS;
            return null !== (SS = null === (HS = KS()) || void 0 === HS ? void 0 : HS.id) && void 0 !== SS ? SS : null
          },
          saveRefusal: () => {
            var SS, HS;
            return null !== (SS = null === (HS = KS()) || void 0 === HS ? void 0 : HS.saveRefusal) && void 0 !== SS ? SS : null
          },
          encode: () => {
            var SS, HS;
            return null !== (SS = null === (HS = KS()) || void 0 === HS ? void 0 : HS.save()) && void 0 !== SS ? SS : Promise.resolve(null)
          },
          fileHandle: () => {
            var SS, HS;
            return null !== (SS = null === (HS = kS.currentViewer) || void 0 === HS ? void 0 : HS.fileHandle) && void 0 !== SS ? SS : null
          },
          markSaved: (SS, HS) => {
            var gS;
            null === (gS = kS.currentViewer) || void 0 === gS || gS.markSaved(SS, HS)
          }
        })
      }
      netEvent(SS) {
        if ("connection" === SS.type)
          if (SS.phase === kS.E.Activated) {
            this.activeConn = SS.conn;
            const HS = this.deps.sessionInfo(SS.conn);
            null !== HS && (this.runtime.activated({
              lobbyType: (0, dS.w)(HS.lobbyName),
              gameNameWithVariation: HS.gameNameWithVariation,
              lobbyName: HS.lobbyName
            }), this.recordedOptions.sendAll())
          } else SS.phase !== kS.E.Left && SS.phase !== kS.E.Closed || SS.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const SS of this.stops) SS();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, hb.l)() === this.runtime && (0, hb.v)(null), (0, hb.i)() === this.freecam && (0, hb.r)(null), (0, Qb.g)(DN), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(SS, HS) {
        const {
          running: gS
        } = this.deps;
        if (gS.isStopped) throw new Error(Db.b.coreStopped.text);
        if (SS.byteLength > 67108864) throw new Error(Db.b.cantOpen.text);
        let tS;
        try {
          tS = await async function(SS) {
            const HS = await SS.loadViewer();
            return HS.inPlayback || (0, tt.J)().leaveGame(null), HS
          }(this.runtime)
        } catch (bS) {
          throw console.warn(`${kN} the replay viewer didn't load`, bS), new Error(Db.b.viewerLoadFailed.text)
        }
        if (gS.isStopped) throw new Error(Db.b.coreStopped.text);
        await tS.open(SS, HS)
      }
    }
    var JN = gS(2083);

    function ON(SS, HS) {
      const {
        aux: gS,
        payload: tS
      } = function(SS) {
        return {
          aux: SS.reset ? kS.pc.ResetFirst : 0,
          payload: cN(SS.changes)
        }
      }(HS);
      SS.queueOptions(gS, tS) && (HS.reset && JN.d.reset(), JN.d.apply(HS.changes))
    }
    const dN = new TextEncoder;

    function cN(SS) {
      const HS = new vN;
      return LN(HS, SS), HS.bytes()
    }
    class vN {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(SS) {
        if (this.len + SS <= this.buf.length) return;
        const HS = new Uint8Array(Math.max(2 * this.buf.length, this.len + SS));
        HS.set(this.buf.subarray(0, this.len)), this.buf = HS, this.view = new DataView(HS.buffer)
      }
      u8(SS) {
        this.room(1), this.buf[this.len++] = SS
      }
      tagged(SS, HS, gS) {
        this.room(1 + HS), this.buf[this.len++] = SS, 1 === HS ? this.view.setUint8(this.len, gS) : 2 === HS ? this.view.setUint16(this.len, gS) : this.view.setUint32(this.len, gS), this.len += HS
      }
      signed(SS, HS, gS) {
        this.room(1 + HS), this.buf[this.len++] = SS, 1 === HS ? this.view.setInt8(this.len, gS) : 2 === HS ? this.view.setInt16(this.len, gS) : this.view.setInt32(this.len, gS), this.len += HS
      }
      f64(SS) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, SS), this.len += 8
      }
      raw(SS) {
        this.room(SS.length), this.buf.set(SS, this.len), this.len += SS.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function EN(SS, HS, gS, tS, bS, XS, xS) {
      HS < tS ? SS.u8(gS | HS) : null !== bS && HS < 256 ? SS.tagged(bS, 1, HS) : HS < 65536 ? SS.tagged(XS, 2, HS) : SS.tagged(xS, 4, HS)
    }

    function LN(SS, HS) {
      switch (typeof HS) {
        case "undefined":
          return void SS.raw(YN);
        case "boolean":
          return void SS.u8(HS ? 195 : 194);
        case "number":
          return void
          function(SS, HS) {
            HS >>> 0 === HS ? HS < 128 ? SS.u8(HS) : HS < 256 ? SS.tagged(204, 1, HS) : HS < 65536 ? SS.tagged(205, 2, HS) : SS.tagged(206, 4, HS) : (HS | 0) === HS ? HS >= -32 ? SS.u8(255 & HS) : HS >= -128 ? SS.signed(208, 1, HS) : HS >= -32768 ? SS.signed(209, 2, HS) : SS.signed(210, 4, HS) : SS.f64(HS)
          }(SS, HS);
        case "string": {
          const gS = dN.encode(HS);
          return EN(SS, gS.length, 160, 32, 217, 218, 219), void SS.raw(gS)
        }
        case "object":
          break;
        default:
          return void SS.u8(192)
      }
      if (null === HS) SS.u8(192);
      else if (Array.isArray(HS)) {
        EN(SS, HS.length, 144, 16, null, 220, 221);
        for (const gS of HS) LN(SS, gS)
      } else if (HS instanceof Uint8Array) EN(SS, HS.length, 0, 0, 196, 197, 198), SS.raw(HS);
      else {
        const gS = Object.keys(HS);
        EN(SS, gS.length, 128, 0, null, 222, 223);
        for (const tS of gS) LN(SS, tS), LN(SS, HS[tS])
      }
    }
    const YN = new Uint8Array([212, 0, 0]);
    var AN = gS(42600),
      yN = gS(42608),
      VN = gS(40972),
      iN = gS(41017),
      WN = gS(3030);
    const zN = [1e3, 3e3, 9e3];
    class UN {
      constructor(SS) {
        this.host = SS, this.sets = new Map, this.table = [], this.generation = 0, this.nK = !1
      }
      onEvent(SS) {
        const HS = function(SS) {
          if (SS.byteLength !== kS.wd) return null;
          const HS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
          return {
            want: HS.getUint16(0, !0),
            release: HS.getUint16(2, !0)
          }
        }(SS);
        HS && !this.nK && (HS.release !== kS.xd && this.release(HS.release), HS.want !== kS.xd && this.want(HS.want))
      }
      reset(SS) {
        if (!this.nK) {
          for (const [SS, HS] of this.sets) "ready" === HS.state && this.releaseAll(HS.distinct), this.sets.delete(SS);
          this.table = SS, this.generation++
        }
      }
      dispose() {
        if (this.nK) return;
        this.nK = !0, this.generation++, this.table = [];
        const SS = [...this.sets.values()];
        this.sets.clear();
        let HS = null;
        for (const tS of SS)
          for (const SS of "ready" === tS.state ? tS.distinct : []) try {
            this.host.zgS(SS)
          } catch (gS) {
            HS ??= {
              error: gS
            }
          }
        if (HS) throw HS.error
      }
      isReady(SS) {
        var HS;
        return "ready" === (null === (HS = this.sets.get(SS)) || void 0 === HS ? void 0 : HS.state)
      }
      want(SS) {
        const HS = this.sets.get(SS);
        if ("loading" === (null === HS || void 0 === HS ? void 0 : HS.state)) return HS.wanted = !0, void this.capAnswer(SS, HS);
        if ("ready" === (null === HS || void 0 === HS ? void 0 : HS.state)) return void this.host.sendReady(sN(SS, HS.images, HS.size));
        const gS = this.table[SS];
        if (!gS || 1 !== gS.urls.length && gS.urls.length !== Rg.gc.CubeFaces) return this.host.sendReady(BN(SS)), void this.host.onLoadFailed(SS, "", new Error(`no image set ${SS}`));
        const tS = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(SS, tS), this.load(SS, gS, tS, this.generation, 0), this.capAnswer(SS, tS)
      }
      capAnswer(SS, HS) {
        this.host.wait(4e3, (() => {
          this.sets.get(SS) === HS && HS.wanted && this.host.sendReady(BN(SS))
        }))
      }
      load(SS, HS, gS, tS, bS) {
        const XS = [...new Set(HS.urls)];
        Promise.allSettled(XS.map((SS => this.host.loadImage(SS, HS.orientation)))).then((xS => {
          const NS = xS.flatMap((SS => "fulfilled" === SS.status ? [SS.value] : [])),
            qS = tS === this.generation && this.sets.get(SS) === gS,
            uS = xS.findIndex((SS => "rejected" === SS.status));
          if (!qS || !gS.wanted) return this.nK ? void this.releaseAfterDispose(NS.map(pN)) : (this.releaseAll(NS.map(pN)), void(qS && this.sets.delete(SS)));
          uS < 0 ? this.loaded(SS, HS, XS, NS) : (this.releaseAll(NS.map(pN)), this.host.sendReady(BN(SS)), bS < zN.length ? this.host.wait(zN[bS], (() => {
            tS === this.generation && this.sets.get(SS) === gS && (gS.wanted ? this.load(SS, HS, gS, tS, bS + 1) : this.sets.delete(SS))
          })) : (this.sets.delete(SS), this.host.onLoadFailed(SS, XS[uS], xS[uS].reason)))
        }))
      }
      loaded(SS, HS, gS, tS) {
        const [bS] = tS, XS = [bS.width, bS.height], xS = tS.every((SS => SS.width === XS[0] && SS.height === XS[1])), NS = HS.urls.length === Rg.gc.CubeFaces;
        if (!xS || XS[0] <= 0 || XS[1] <= 0 || XS[0] > 65535 || XS[1] > 65535 || NS && XS[0] !== XS[1]) {
          this.releaseAll(tS.map(pN)), this.sets.delete(SS), this.host.sendReady(BN(SS));
          const gS = tS.map((SS => `${SS.width}x${SS.height}`));
          return void this.host.onLoadFailed(SS, HS.urls[0], new Error(`set ${SS}'s images can't make its texture: ${gS.join(", ")}`))
        }
        const qS = HS.urls.map((SS => tS[gS.indexOf(SS)].id)),
          uS = tS.map(pN);
        this.sets.set(SS, {
          state: "ready",
          images: qS,
          distinct: uS,
          size: XS
        }), this.host.sendReady(sN(SS, qS, XS))
      }
      release(SS) {
        const HS = this.sets.get(SS);
        "loading" === (null === HS || void 0 === HS ? void 0 : HS.state) ? HS.wanted = !1: "ready" === (null === HS || void 0 === HS ? void 0 : HS.state) && (this.releaseAll(HS.distinct), this.sets.delete(SS))
      }
      releaseAll(SS) {
        for (const HS of SS) this.host.zgS(HS)
      }
      releaseAfterDispose(SS) {
        for (const HS of SS) try {
          this.host.zgS(HS)
        } catch {}
      }
    }

    function pN(SS) {
      return SS.id
    }

    function sN(SS, HS, gS) {
      const tS = new Uint8Array(Rg.gc.SkyImagesReadyBytes),
        bS = new DataView(tS.buffer);
      return bS.setUint16(0, SS, !0), bS.setUint16(2, HS.length, !0), bS.setUint16(4, gS[0], !0), bS.setUint16(6, gS[1], !0), HS.slice(0, Rg.gc.CubeFaces).forEach(((SS, HS) => {
        bS.setUint32(8 + 4 * HS, SS, !0)
      })), tS
    }

    function BN(SS) {
      const HS = new Uint8Array(Rg.gc.SkyImagesReadyBytes),
        gS = new DataView(HS.buffer);
      return gS.setUint16(0, SS, !0), gS.setUint16(2, Rg.gc.Failed, !0), HS
    }
    let MN = Promise.resolve();
    async function FN(SS, HS) {
      let gS;
      try {
        gS = await (0, WN.J)(SS)
      } catch (XS) {
        throw new VN.d("fetch", SS, {
          cause: XS
        })
      }
      const tS = MN.then((() => async function(SS, HS) {
        const gS = new Blob([SS.slice()]);
        let tS = await createImageBitmap(gS, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: HS
        });
        const bS = 1024 / Math.max(tS.width, tS.height);
        if (bS < 1) {
          const SS = tS;
          try {
            tS = await createImageBitmap(SS, {
              resizeWidth: Math.max(1, Math.round(SS.width * bS)),
              resizeHeight: Math.max(1, Math.round(SS.height * bS)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            SS.close()
          }
        }
        return tS
      }(gS, HS)));
      let bS;
      MN = tS.catch((() => {}));
      try {
        bS = await tS
      } catch (XS) {
        throw new VN.d("decode", SS, {
          cause: XS
        })
      }
      return {
        id: (0, VN.s)(bS),
        width: bS.width,
        height: bS.height
      }
    }
    var RN = gS(2256),
      TN = gS(34061),
      oN = gS(39231);
    const lN = RN.h.length,
      mN = new Set([...RN.h, "earth"]);

    function eN(SS) {
      const HS = [],
        gS = [],
        tS = (SS, tS) => {
          if ("custom" === tS.type) {
            gS.push({
              id: SS,
              kind: Rg.gc.KindCustom,
              set: HS.length,
              earth: null
            });
            const bS = [tS.px, tS.py, tS.pz, tS.nx, tS.ny, tS.nz];
            HS.push({
              urls: (0, oN.e)(bS),
              orientation: "none"
            })
          } else gS.push({
            id: SS,
            kind: Rg.gc.KindEarth,
            set: 0,
            earth: tS
          })
        };
      RN.h.forEach(((HS, gS) => {
        var bS;
        tS(gS, null !== (bS = rN(SS[HS])) && void 0 !== bS ? bS : TN.o[HS])
      }));
      const bS = rN(SS.earth);
      "earth" === (null === bS || void 0 === bS ? void 0 : bS.type) && tS(lN, bS);
      const XS = new TextEncoder,
        xS = [],
        NS = [];
      for (const [aS, KS] of Object.entries(SS)) {
        const SS = mN.has(aS) ? null : rN(KS);
        if (null === SS) continue;
        const HS = XS.encode(aS);
        HS.length > 255 ? NS.push(`Ignoring texture pack skybox ${aS}, whose name is over 255 bytes`) : xS.length === Rg.gc.MaxAdded ? NS.push(`Ignoring texture pack skybox ${aS}, past the ${Rg.gc.MaxAdded} skies a pack can add`) : (xS.push(HS), tS(Rg.gc.AddedId, SS))
      }
      const qS = HS.length;
      HS.push({
        urls: TN.g.map((SS => TN.h + SS)),
        orientation: "none"
      }), HS.push({
        urls: [TN.k],
        orientation: "flipY"
      }), HS.push({
        urls: [TN.d],
        orientation: "flipY"
      });
      const uS = Rg.gc.SkyTableHeaderBytes + gS.length * Rg.gc.SkyTableEntryBytes,
        IS = new Uint8Array(uS + xS.reduce(((SS, HS) => SS + 1 + HS.length), 0)),
        fS = new DataView(IS.buffer);
      fS.setUint16(0, qS, !0), fS.setUint16(2, qS + 1, !0), fS.setUint16(4, qS + 2, !0), fS.setUint16(6, gS.length, !0), gS.forEach(((SS, HS) => {
        const gS = Rg.gc.SkyTableHeaderBytes + HS * Rg.gc.SkyTableEntryBytes;
        fS.setUint16(gS, SS.id, !0), fS.setUint8(gS + 2, SS.kind);
        const tS = gS + 4;
        SS.earth ? function(SS, HS, gS) {
          const tS = SS;
          let bS = 0,
            XS = 0;
          for (const [xS, NS] of Sq) {
            const SS = tS[xS];
            "number" === typeof SS && Number.isFinite(SS) && (HS.setFloat32(gS + 4 * NS, SS, !0), bS |= 1 << NS)
          }
          for (const [xS, NS, qS] of Hq) {
            const SS = tS[xS];
            Array.isArray(SS) && 3 === SS.length && SS.every((SS => "number" === typeof SS && Number.isFinite(SS))) && (SS.forEach(((SS, tS) => {
              HS.setFloat32(gS + qS + 4 * tS, SS, !0)
            })), bS |= NS)
          }
          gq.forEach(((SS, XS) => {
            let [xS, NS] = SS;
            const qS = tS[xS];
            "number" === typeof qS && Number.isFinite(qS) && (HS.setFloat32(gS + Rg.r.CameraOffsetAt + 4 * XS, qS, !0), bS |= NS)
          }));
          for (const [xS, NS] of tq) {
            const SS = tS[xS];
            null !== SS && void 0 !== SS && (bS |= NS, SS && (XS |= NS >>> 14))
          }
          HS.setUint32(gS + Rg.r.PresentAt, bS, !0), HS.setUint8(gS + Rg.r.FlagsAt, XS)
        }(SS.earth, fS, tS) : fS.setUint16(tS, SS.set, !0)
      }));
      let kS = uS;
      for (const aS of xS) IS[kS] = aS.length, IS.set(aS, kS + 1), kS += 1 + aS.length;
      return {
        payload: IS,
        sets: HS,
        leftOut: NS
      }
    }

    function rN(SS) {
      if ("object" !== typeof SS || null === SS) return null;
      const HS = SS;
      if ("earth" === HS.type) return SS;
      return "custom" === HS.type && ["px", "py", "pz", "nx", "ny", "nz"].every((SS => {
        const gS = HS[SS];
        return "string" === typeof gS && gS.length > 0
      })) ? SS : null
    }
    const Sq = [
        ["inclination", Rg.r.Inclination],
        ["turbidity", Rg.r.Turbidity],
        ["luminance", Rg.r.Luminance],
        ["rayleigh", Rg.r.Rayleigh],
        ["mieCoefficient", Rg.r.MieCoefficient],
        ["mieDirectionalG", Rg.r.MieDirectionalG],
        ["distance", Rg.r.Distance],
        ["azimuth", Rg.r.Azimuth]
      ],
      Hq = [
        ["sunPosition", Rg.r.SunPosition, Rg.r.SunPositionAt],
        ["up", Rg.r.Up, Rg.r.UpAt],
        ["vertexTint", Rg.r.VertexTint, Rg.r.VertexTintAt]
      ],
      gq = [
        ["xCameraOffset", Rg.r.CameraOffsetX],
        ["yCameraOffset", Rg.r.CameraOffsetY],
        ["zCameraOffset", Rg.r.CameraOffsetZ]
      ],
      tq = [
        ["useSunPosition", Rg.r.UseSunPosition],
        ["dithering", Rg.r.Dithering],
        ["infiniteDistance", Rg.r.InfiniteDistance]
      ];

    function bq(SS, HS, gS) {
      const tS = new xq({
        writeCmd: SS,
        warn: HS,
        followPack: Xq(gS, HS)
      });
      return tS.start(), tS
    }

    function Xq(SS, HS) {
      return gS => {
        let tS = () => {};
        const bS = SS((SS => {
          tS(), tS = () => {}, null !== SS ? tS = SS.subscribe((SS => {
            gS(function(SS, HS, gS) {
              if ("object" !== typeof SS || null === SS) return null;
              const tS = SS.skyBoxes;
              if ("object" !== typeof tS || null === tS) return null;
              if ("player" === HS) return tS;
              return Object.fromEntries(Object.entries(tS).filter((SS => {
                let [HS, tS] = SS;
                return !! function(SS) {
                  if ("object" !== typeof SS || null === SS) return !1;
                  return "earth" === SS.type || Object.entries(SS).every((SS => {
                    let [HS, gS] = SS;
                    return "type" === HS || ("" === (tS = gS) || null !== function(SS) {
                      var HS, gS, tS;
                      return "string" !== typeof SS ? null : null !== (HS = null === (gS = Nq.exec(SS)) || void 0 === gS || null === (tS = gS.groups) || void 0 === tS ? void 0 : tS.base64) && void 0 !== HS ? HS : null
                    }(tS));
                    var tS
                  }))
                }(tS) || (gS(`Ignoring texture pack skybox ${HS}, whose faces are not all data URLs`, null), !1)
              })))
            }(SS.pack, null === SS.gameSource ? "player" : "customGame", HS))
          })) : gS(null)
        }));
        return () => {
          bS(), tS()
        }
      }
    }
    class xq {
      constructor(SS) {
        var HS, gS, tS;
        this.host = SS, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.nK = !1, this.wait = null !== (HS = SS.wait) && void 0 !== HS ? HS : (SS, HS) => {
          setTimeout(HS, SS)
        }, this.loader = new UN({
          loadImage: null !== (gS = SS.loadImage) && void 0 !== gS ? gS : FN,
          zgS: null !== (tS = SS.zgS) && void 0 !== tS ? tS : VN.w,
          sendReady: SS => {
            this.queue.push({
              kind: Rg.gc.SkyImagesReady,
              payload: SS
            })
          },
          onLoadFailed: (HS, gS, tS) => {
            SS.warn(`sky image set ${HS} (${gS}) didn't load: the last sky stays`, tS)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(iN.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((SS => {
          this.write(null !== SS && void 0 !== SS ? SS : {})
        }))
      }
      onEvent(SS) {
        this.loader.onEvent(SS)
      }
      drain() {
        if (0 === this.queue.length) return;
        let SS = 0;
        for (; SS < this.queue.length && this.host.writeCmd(this.queue[SS].kind, 0, this.queue[SS].payload);) SS++;
        SS > 0 && this.queue.splice(0, SS)
      }
      dispose() {
        this.nK = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(SS) {
        if (this.nK) return;
        const HS = eN(SS);
        if (!(this.written && (gS = this.written, tS = HS, gS.payload.length === tS.payload.length && gS.payload.every(((SS, HS) => SS === tS.payload[HS])) && gS.sets.length === tS.sets.length && gS.sets.every(((SS, HS) => {
            const gS = tS.sets[HS];
            return SS.orientation === gS.orientation && SS.urls.length === gS.urls.length && SS.urls.every(((SS, HS) => SS === gS.urls[HS]))
          }))))) {
          var gS, tS;
          for (const SS of HS.leftOut) this.host.warn(SS, null);
          this.written = HS, this.loader.reset(HS.sets), this.queue = this.queue.filter((SS => SS.kind !== Rg.gc.SkyImagesReady)), this.queue.push({
            kind: Rg.gc.SkyTable,
            payload: HS.payload
          })
        }
      }
    }
    const Nq = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var qq = gS(2931),
      uq = gS(3140),
      Iq = gS(316),
      fq = gS(186),
      kq = gS(2934),
      aq = gS(2938),
      Kq = gS(290),
      jq = gS(299),
      Gq = gS(3049),
      Cq = gS(3075),
      nq = gS(3079),
      Pq = gS(118),
      Qq = gS(362),
      Dq = gS(40860);
    class wq {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, pb.l)(Pt.S, (SS => {
          this.onReply((0, Ub.e)(Pt.S, SS), performance.now())
        }))
      }
      onFrame(SS, HS) {
        null === this.id ? this.id = SS : SS !== this.id && (this.id = SS, this.sentMs = document.hidden ? null : HS)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(SS, HS) {
        SS === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(HS - this.sentMs), this.sentMs = null)
      }
      take() {
        const SS = this.roundTripMs;
        return this.roundTripMs = null, SS
      }
      stop() {
        this.stopReplies()
      }
    }
    class hq {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(SS, HS, gS, tS) {
        const bS = SS - this.sampled >>> 0,
          XS = HS - this.timed >>> 0,
          xS = gS - this.frameUs >>> 0,
          NS = this.primed;
        return this.sampled = SS, this.timed = HS, this.frameUs = gS, this.primed = !0, !(!NS || bS > 64 || XS > 64) && (tS && xS <= 1e6 * XS && (this.windowTimed += XS, this.windowUs += xS), tS && bS > 0)
      }
      reset() {}
      snapshotAndReset() {
        const SS = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: SS,
          submitToDoneMs: null
        }
      }
    }
    const Zq = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Jq {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(SS, HS) {
        const gS = Math.min(4096, this.count + HS);
        this.samples.fill(SS, this.count, gS), this.count = gS
      }
      clear() {
        this.count = 0
      }
      take() {
        const SS = this.count;
        if (this.count = 0, SS < 30) return Zq;
        const HS = this.samples.subarray(0, SS).sort(),
          gS = gS => HS[Math.min(SS - 1, Math.floor(gS * SS))];
        return {
          lagP50Ms: gS(.5),
          lagP90Ms: gS(.9)
        }
      }
    }
    class Oq {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Jq
      }
      onFrame(SS, HS) {
        const gS = SS.headerWord(Rg.H.Pacing),
          tS = SS.headerWord(Rg.H.PacingLagUs),
          bS = (gS >>> Rg.Z.LagsShift) - (this.word >>> Rg.Z.LagsShift) & Rg.Z.CountMask,
          XS = bS > 0 ? (tS - this.lagUs >>> 0) / bS / 1e3 : 0,
          xS = this.primed && bS <= 64 && XS <= 6e4;
        this.word = gS, this.lagUs = tS, this.primed = !0, xS && HS && bS > 0 && 0 !== (gS & Rg.Z.Defaulted) && this.lags.add(XS, bS)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(SS) {
        return SS ? this.lags.take() : (this.lags.clear(), Zq)
      }
    }
    var dq = gS(337);

    function cq() {
      return Date.now() - performance.now()
    }
    class vq {
      constructor() {
        this.rafs = 0, this.Ku = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = cq(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, dq.g)(), this.onBlur = () => {
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
        (0 === this.Ku || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.Ku++, this.heldAtRaf = this.rafs
      }
      words(SS) {
        const HS = SS ? this.rafs - 1 : this.rafs;
        return function(SS) {
          let HS = 0 === SS.rafs ? "raf:none" : "raf:some";
          return SS.Ku > 0 && (HS += " pace:held"), SS.heldRunMs > 1e4 && (HS += " pace:stalled"), SS.blurred && (HS += " blur"), SS.resumed && (HS += " resumed"), SS.embedded && (HS += " embedded"), SS.clockGainMs > 2e3 && (HS += " clockjump"), HS
        }({
          clockGainMs: cq() - this.startClockOffsetMs,
          rafs: HS,
          Ku: this.Ku,
          heldRunMs: this.Ku > 0 && this.heldAtRaf === HS ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(SS) {
        this.rafs = 0, this.Ku = 0, this.heldAtRaf = -1, this.startMs = SS, this.startClockOffsetMs = cq(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var Eq = gS(34173),
      Lq = gS(3058),
      Yq = gS(40914),
      Aq = gS(34166),
      yq = gS(2944),
      Vq = gS(3064);
    const iq = {
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

    function Wq(SS) {
      return new zq(SS)
    }
    class zq {
      constructor(SS) {
        this.shell = SS, this.tracker = new aq.e, this.gpu = new hq, this.pacing = new Oq, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new wq, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new vq, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, Eq.e)(SS.backend, SS.canvas, SS.adapterVendor), this.tracker.start((() => !SS.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, yq.d)("wasm", (() => {
          const {
            n: HS,
            sampleCount: gS
          } = (0, Yq.e)();
          return `${SS.backend}, quality steps aim at up to ${Vq.b.target.maxFps} fps, pixel n ${HS}, msaa ${gS}`
        }), (HS => {
          HS.setLoadCounts(SS.readLoadCounts), this.frameDebug = HS
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(SS) {
        var HS;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(SS), null === (HS = this.frameDebug) || void 0 === HS || HS.animationFrame()
      }
      sendsWent(SS, HS, gS) {
        this.ping.onFrame(SS.headerWord(Rg.H.PingSent), HS), this.sendsStartMs = HS, this.sendsEndMs = gS
      }
      frameRan(SS, HS, gS, tS) {
        var bS;
        this.ping.onFrame(SS.headerWord(Rg.H.PingSent), gS);
        const XS = this.tracker;
        this.pacing.onFrame(SS, XS.isSampling());
        const xS = SS.headerWord(Rg.H.TickUs) / 1e3 + (0, tt.M)();
        var NS;
        (XS.sC(xS), null === (bS = this.frameDebug) || void 0 === bS || bS.wasmFrame(SS, HS, gS, tS, XS.isSampling(), xS), null !== this.game) && (null === (NS = this.frameDebug) || void 0 === NS || NS.inGame());
        const qS = this.sendsStartMs >= HS ? this.sendsEndMs - this.sendsStartMs : 0,
          uS = Math.max(0, gS - HS - xS - qS);
        if ("drawn" !== tS) return void("paced" === tS ? (this.pacedCpuMs += uS, this.stallGap.paced()) : "skipped" === tS && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(HS, !0), XS.onFrameStart(HS);
        this.gpu.onFrame(SS.headerWord(Rg.H.GpuSampled), SS.headerWord(Rg.H.GpuTimed), SS.headerWord(Rg.H.GpuFrameUs), XS.isSampling()) && XS.onGpuSampleStarted(), XS.onFrameCpu(uS + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(HS)
      }
      framePaced() {
        var SS;
        this.stallGap.paced(), null === (SS = this.frameDebug) || void 0 === SS || SS.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const SS of this.timers) clearInterval(SS);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const SS = this.shell.joinedGame();
        if (SS !== this.game) {
          var HS;
          if (this.game = SS, null !== SS) null === (HS = this.frameDebug) || void 0 === HS || HS.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== SS
      }
      checkMainStall(SS, HS) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const gS = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          tS = this.lastDrawnMs < 0 ? 0 : SS - this.lastDrawnMs;
        this.lastDrawnMs = SS;
        const bS = !this.stallPending && tS > 5e3,
          XS = bS ? this.stallGap.words(HS) : "";
        this.stallGap.restart(SS), this.stallPending || (bS ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(tS, gS.blockingSinceMark(), XS)
        }), 0)) : gS.markFrame(SS))
      }
      countFpsFrame(SS) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = SS
        }
        this.fpsFrames++;
        const HS = SS - this.fpsSpanStartMs;
        if (!(HS < nq.c)) {
          if (!document.hidden) {
            const SS = 1e3 * this.fpsFrames / HS;
            this.firstSpanFps ??= SS, this.initialFps = this.firstSpanFps, this.fpsOverTime = SS
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = SS
        }
      }
      flush() {
        const SS = this.followGame(),
          {
            cpuFrameMs: HS,
            refreshHz: gS,
            cpuBottleneck: bS,
            frameIntervalCv: XS,
            ...xS
          } = this.tracker.snapshotAndReset(),
          NS = this.shell.inGame(),
          qS = NS && this.inGameAtLastFlush,
          uS = qS ? xS : (0, kq.d)(xS),
          IS = this.pacing.snapshotAndReset(qS);
        if (this.inGameAtLastFlush = NS, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !SS) return;
        const fS = performance.now(),
          aS = (0, Cq.o)((0, Cq.n)(fS), this.unsentPage),
          jS = function(SS, HS, gS, bS, XS, xS, NS, qS) {
            var uS, IS, fS, kS, aS;
            const KS = {},
              {
                canvas: jS
              } = SS,
              GS = (0, Gq.g)({
                refreshHz: HS.refreshHz,
                msaa: SS.msaa(),
                autoMsaaOff: (0, Aq.b)()
              });
            for (const CS of (0, uq.e)()) {
              const nS = CS.name;
              let PS;
              if ((0, Iq.v)(nS)) PS = (0, Cq.c)(nS);
              else if ((0, Cq.f)(nS)) PS = qS[nS];
              else if ((0, Gq.j)(nS)) PS = GS[nS];
              else switch (nS) {
                case "fps":
                  PS = bS;
                  break;
                case "IN":
                  PS = XS;
                  break;
                case "jN":
                  PS = (0, Lq.C)((0, Yq.e)().n);
                  break;
                case "GN":
                  PS = Math.max(jS.width, jS.height);
                  break;
                case "CN":
                  PS = Math.min(jS.width, jS.height);
                  break;
                case "nN":
                  PS = navigator.hardwareConcurrency || null;
                  break;
                case "PN":
                  PS = (0, ob.getWebGpuSupported)();
                  break;
                case "QN":
                  PS = null === SS.fallbackReason ? null : iq[SS.fallbackReason];
                  break;
                case "DN":
                  PS = HS.cpuFrameMs;
                  break;
                case "wN":
                  PS = HS.refreshHz;
                  break;
                case "hN":
                  PS = HS.cpuBottleneck;
                  break;
                case "ZN":
                  PS = HS.frameIntervalCv;
                  break;
                case "JN":
                  PS = HS.frameMs;
                  break;
                case "ON":
                  PS = HS.tickMs;
                  break;
                case "EN":
                  PS = HS.mainBusyShare;
                  break;
                case "LN":
                  PS = HS.mainProbeDelayMs;
                  break;
                case "dN":
                  PS = HS.longAnimationFramesPerMin;
                  break;
                case "cN":
                  PS = HS.longAnimationFrameTimeShare;
                  break;
                case "vN":
                  PS = HS.longAnimationFrameScriptShare;
                  break;
                case "YN":
                  PS = HS.gpuPassMs;
                  break;
                case "AN":
                  PS = HS.gpuSubmitToDoneMs;
                  break;
                case "yN":
                  PS = gS.lagP50Ms;
                  break;
                case "VN":
                  PS = gS.lagP90Ms;
                  break;
                case "oN":
                  PS = (0, qq.g)(xS);
                  break;
                case "KN":
                  PS = NS;
                  break;
                case "iN":
                case "WN":
                case "zN":
                case "UN":
                case "pN":
                case "sN":
                case "BN":
                case "MN":
                case "FN":
                case "RN":
                case "TN":
                case "lN":
                case "mN":
                case "eN":
                case "rN":
                  PS = null;
                  break;
                case "Kq":
                  PS = (0, ob.getPlatformType)();
                  break;
                case "jq":
                  PS = (0, ob.getGpuVendor)();
                  break;
                case "Gq":
                  PS = Dq.b[SS.backend];
                  break;
                case "Cq":
                  PS = (0, Pq.c)();
                  break;
                case "nq":
                  PS = (0, ob.getOperatingSystem)();
                  break;
                case "Pq":
                  PS = (0, ob.getTrafficSource)();
                  break;
                case "Qq":
                  PS = null !== (uS = tS.b.get("gameEntrySource")) && void 0 !== uS ? uS : fq.e;
                  break;
                case "Dq":
                  PS = null !== (IS = HS.frameLimiter) && void 0 !== IS ? IS : fq.e;
                  break;
                case "wq":
                  PS = (0, Kq.f)();
                  break;
                case "hq":
                  PS = null !== (fS = (0, jq.c)()) && void 0 !== fS ? fS : fq.e;
                  break;
                case "Zq":
                  PS = (0, Kq.d)(jS.width, jS.height);
                  break;
                case "Jq":
                  PS = (0, uq.i)(-(new Date).getTimezoneOffset());
                  break;
                case "cq":
                  PS = null !== (kS = SS.fallbackReason) && void 0 !== kS ? kS : fq.e;
                  break;
                case "Lq":
                  PS = "ready";
                  break;
                case "Yq":
                  PS = (0, ob.getSoftwareRenderer)();
                  break;
                case "dq":
                  PS = null !== SS.shaderPackReach() ? "true" : "false";
                  break;
                case "Aq":
                  PS = null !== (aS = SS.shaderPackReach()) && void 0 !== aS && aS.sceneDepth ? "true" : "false";
                  break;
                case "yq": {
                  const HS = SS.shaderPackReach();
                  PS = null !== HS && void 0 !== HS && HS.sunShadow ? "all" : null !== HS && void 0 !== HS && HS.airShadow ? "air" : "none";
                  break
                }
                case "Vq":
                  PS = Qq.D;
                  break;
                case "Oq": {
                  const HS = SS.Wj();
                  PS = null === HS ? fq.e : String(HS);
                  break
                }
                case "vq":
                case "Eq":
                  PS = fq.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${nS}`)
              }
              if (void 0 === PS) throw new Error(`Metric ${nS} has no value`);
              KS[nS] = PS
            }
            return KS
          }(this.shell, {
            cpuFrameMs: HS,
            refreshHz: gS,
            cpuBottleneck: bS,
            frameIntervalCv: XS,
            ...uS
          }, IS, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), aS);
        if (! function(SS, HS, gS) {
            return (0, MH.c)(), SS(KS.l.Send, HS, gS)
          }(this.shell.writeCmd, kS.vd, function(SS) {
            const HS = (0, VS.f)((0, TH.e)(SS)),
              gS = new Uint8Array(KS.Qd.BYTES + HS.length);
            return new DataView(gS.buffer).setUint16(0, TH.b.AnalyticsUpdate, !0), gS.set(HS, KS.Qd.BYTES), gS
          }(jS))) return this.unsentPage = aS, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, qq.f), (0, Cq.j)(jS, "wasm", fS)
      }
    }
    var Uq = gS(39655);

    function pq(SS, HS, gS) {
      const tS = new Map;
      return (0, Uq.b)(((SS, gS, tS) => HS.XI(SS, gS, tS)), ((HS, gS, bS) => {
        const XS = `${HS},${gS},${bS}`;
        return tS.has(XS) || tS.set(XS, (0, WH.c)(SS, HS, gS, bS)), tS.get(XS)
      }), gS)
    }
    var sq = gS(39664),
      Bq = gS(40911);

    function Mq(SS) {
      const HS = null !== SS && 0 !== (KS.t.playerFlags(SS.api.apiView, 0) & KS.zd.CursorAim);
      HS !== (0, Bq.m)() && (0, Bq.F)(HS, null !== SS)
    }

    function Fq(SS) {
      return (0, nt.d)(Pt.H, SS)
    }
    var Rq = gS(41053);
    const Tq = new XS.i((SS => gS(42616)(`./${SS}/${SS}Client`)));
    let oq = null,
      lq = null;
    async function mq(SS) {
      oq ??= gS.e(27).then((() => gS(39162))).then((SS => {
        lq = SS.createDefaultClientPlugins
      }), (SS => {
        throw oq = null, SS
      })), await Promise.all([Tq.load(SS), oq])
    }

    function eq(SS) {
      SS.load(new yH(Ft, new ot))
    }
    let rq = !1;
    const Su = new WeakMap;

    function Hu(SS) {
      try {
        SS()
      } catch (HS) {
        console.error("[bloxd-wasm-client] a session-end step failed", HS)
      }
    }

    function gu(SS, HS) {
      ! function() {
        var SS, HS;
        st.Howler.volume();
        const gS = st.Howler;
        null === (SS = gS._autoResume) || void 0 === SS || SS.call(gS), null === (HS = gS._autoSuspend) || void 0 === HS || HS.call(gS)
      }(), HS.audio.prepare();
      const gS = new QS(HS.core, HS.memory, HS.audio);
      let XS;
      try {
        XS = new Gb(gS, HS.options)
      } catch (kS) {
        return SS.crash(nb.z, kS), null
      }(0, qS.d)(Cb(gS, XS));
      const IS = new ZN({
        running: SS,
        api: gS,
        core: HS.core,
        memory: HS.memory,
        staleOr: HS.staleOr,
        reportFault: HS.reportReplayFault,
        options: HS.options,
        sessionInfo: HS.sessionInfo,
        replayShaderPack: HS.replayShaderPack
      });
      (0, tt.B)();
      const fS = new Vt({
        api: gS,
        tables: XS,
        sessionInfo: HS.sessionInfo,
        gameFactory: SS => Tq.loadedFactory(SS),
        defaultPlugins: (SS, HS, gS, tS) => {
          if (null === lq) throw new Error("The default plugins started before they loaded");
          return lq(SS, HS, gS, tS)
        },
        serverOptions: HS.options,
        onNetEvent: SS => {
          IS.netEvent(SS), HS.onNetEvent(SS)
        },
        setLocalOptions: HS => {
          ON(SS, {
            changes: HS,
            reset: !1
          })
        },
        playSound: (SS, gS, tS, bS, XS, xS, NS) => HS.audio.playGame(SS, gS, tS, bS, XS, xS, NS),
        preloadSounds: SS => {
          HS.audio.preload(function(SS) {
            const HS = [];
            for (const gS of SS) {
              const SS = YH(gS);
              SS >= 0 && HS.push(nH[SS])
            }
            return HS
          }(SS))
        },
        onSessionEnd: () => {
          Hu(bS.l), Hu(gb), Hu((() => {
            tS.b.set({
              openInGameMenuName: null
            })
          })), Hu((() => {
            HS.audio.endSession()
          }))
        },
        beforeWrite: HS.beforeWrite,
        beforeOp: HS.beforeOp,
        cameraScreen: Hb,
        showCameraFacing: tb,
        onEventOverflow: HS.onEventOverflow,
        screenBandY: NS.l,
        replayEntities: IS.entityHooks,
        hasPackModel: HS.hasPackModel
      });
      return fS.attach(SS), Su.set(fS, IS), Ut(fS.items, HS.audio),
        function(SS) {
          SS.setClientFreeCameraGrant("isDev", !1);
          const HS = HS => {
            SS.setClientFreeCameraGrant("hasDeveloperRank", HS.playerHasRank("developer"))
          };
          (0, xS.m)("userContextUpdated", HS)
        }(fS), rq || (rq = !0, (0, xS.m)("appManagerUpdated|openInGameMenuName", (SS => {
          !SS && (0, uS.p)().includes(uS.d) && (0, uS.q)(uS.d)
        }))), fS
    }

    function tu(SS) {
      try {
        SS.closeGame()
      } finally {
        var HS;
        null === (HS = Su.get(SS)) || void 0 === HS || HS.stop(), Su.delete(SS)
      }
    }
  },
  42616: (SS, HS, gS) => {
    var tS = {
      "./bedwars/bedwarsClient": [39279, 9],
      "./bridgeBattle/bridgeBattleClient": [39287, 10],
      "./buildAFactory2/buildAFactory2Client": [38515, 75, 74, 73, 225, 243, 11],
      "./classic/classicClient": [39290, 12],
      "./clutch/clutchClient": [39299, 13],
      "./containmentBreach/containmentBreachClient": [39304, 14],
      "./cooking/cookingClient": [39440, 15],
      "./defusal/defusalClient": [39445, 16],
      "./frontline/frontlineClient": [39450, 75, 74, 73, 17],
      "./goalRush/goalRushClient": [39458, 18],
      "./luckyBedwars/luckyBedwarsClient": [39467, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39471, 20],
      "./oneBlock/oneBlockClient": [39480, 21],
      "./plots/plotsClient": [39489, 241, 248, 22],
      "./pvpCiv/pvpCivClient": [39577, 23],
      "./skyIslands/skyIslandsClient": [39579, 24],
      "./skyblock/skyblockClient": [38546, 75, 225, 190, 25],
      "./tsunami/tsunamiClient": [39588, 26]
    };

    function bS(SS) {
      if (!gS.o(tS, SS)) return Promise.resolve().then((() => {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }));
      var HS = tS[SS],
        bS = HS[0];
      return Promise.all(HS.slice(1).map(gS.e)).then((() => gS(bS)))
    }
    bS.keys = () => Object.keys(tS), bS.id = 42616, SS.exports = bS
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);