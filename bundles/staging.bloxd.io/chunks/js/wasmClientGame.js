export const id = 56;
export const ids = [56];
export const modules = {
  38992: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => sD
    });
    var pD = wD(25);

    function sD(DD) {
      return "refetchCode" === DD || "devDownloadJson" === DD || DD.startsWith("Plugin")
    }

    function KD(DD, zD) {
      "refetchCode" !== DD ? "Plugin|MobAiPlugin|ShowPetUi" !== DD ? Promise.all([wD.e(107), wD.e(108), wD.e(103), wD.e(105), wD.e(214)]).then((() => wD(41641))).then((wD => {
        let {
          runClientGameMessage: pD
        } = wD;
        pD(DD, zD)
      })).catch((zD => {
        console.error(`Game message ${DD} failed`, zD)
      })) : pD.l.KG("showPetUi", zD) : pD.l.KG("refetchCode")
    }
  },
  42450: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      e: () => sD
    });
    const pD = ["recording", "freecam", "keyframe"];

    function sD() {
      const DD = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(DD[1]) << 32n | BigInt(DD[0])
    }
  },
  34150: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => cD
    });
    var pD = wD(20);
    const sD = 24,
      KD = "farNametags",
      rD = 1e5;

    function LD() {
      var DD;
      return null === (DD = pD.e.get("showDistantNametags")) || void 0 === DD || DD
    }

    function cD() {
      var DD;
      return null !== (DD = function() {
        const DD = new URLSearchParams(window.location.search).get(KD),
          zD = null === DD || "" === DD ? NaN : Number(DD);
        return Number.isFinite(zD) && zD >= 0 ? Math.min(zD, rD) : null
      }()) && void 0 !== DD ? DD : LD() ? 0 : sD
    }
  },
  42447: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      blockIdOf: () => ac.e,
      clearWasmCameraScreen: () => ps,
      creativeItemIds: () => pp.creativeItemIds,
      decodeMapSettings: () => tc,
      drainTextRerasters: () => NL.d,
      enchantmentPerksOf: () => pp.enchantmentPerksOf,
      endGameHost: () => rg,
      followCursorAim: () => vc,
      followMenuPrefs: () => wK,
      loadAudio: () => zg,
      loadClientGame: () => Dg,
      loadTextIcons: () => NL.e,
      rasterText: () => WL.d,
      readBoardToEdit: () => oc,
      readDrawCensus: () => Fc.h,
      setTextHost: () => NL.m,
      setTextLocalPlayer: () => NL.p,
      showInCreativeInvenOf: () => pp.showInCreativeInvenOf,
      startGameHost: () => Kg,
      startShellAnalytics: () => kc,
      startSkyFeed: () => Lc,
      textChanged: () => NL.s,
      warmText: () => WL.g,
      wasmCameraScreen: () => ws
    });
    wD(36506);
    var pD = wD(20),
      sD = wD(36774),
      KD = wD(39117),
      rD = wD(25),
      LD = wD(3405),
      cD = wD(36766),
      gD = wD(1299),
      RD = wD(608),
      AD = wD(38195),
      UD = wD(4817),
      fD = wD(40562),
      ID = wD(40506);
    const BD = ID.Fb / 4,
      GD = ID.r.PlaySound,
      hD = ID.r.SoundReset,
      nD = UD.U.ReplayFailed,
      MD = UD.U.RecorderEvent;
    class OD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = DD, this.memory = zD, this.audio = wD, this.serverIds = new Int32Array(256).fill(ID.Tc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(ID.v.BYTES)), this.renderPtr = 0, this.bA = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new ID.W(DD, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.dsD(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(DD, zD) {
        const wD = this.eventView();
        return new Uint8Array(wD.buffer, wD.byteOffset + DD, zD)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return ID.v.localId(this.apiView, 0)
      }
      localDeaths() {
        return ID.v.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const DD = this.apiView,
          zD = ID.v.entRenderPtr(DD, 0),
          wD = ID.v.entVisPtr(DD, 0),
          pD = ID.v.entCapacity(DD, 0);
        if (zD !== this.renderPtr || wD !== this.visPtr || pD !== this.bA || this.renderBuffer !== this.buffer) {
          this.renderPtr = zD, this.visPtr = wD, this.bA = pD, this.renderBuffer = this.buffer;
          const DD = this.memoryView(Float32Array, zD, pD * BD, "the render array"),
            sD = this.memoryView(Uint8Array, wD, pD, "the visibility array");
          this.renderCapacity = DD && sD ? pD : 0, this.render = DD && sD ? DD : new Float32Array(0), this.vis = DD && sD ? sD : new Uint8Array(0)
        }
      }
      memoryView(DD, zD, wD, pD) {
        try {
          return (0, fD.l)(DD, this.memory().buffer, zD, wD, pD)
        } catch (sD) {
          return this.keepCorruption(sD), null
        }
      }
      memoryData(DD, zD, wD, pD) {
        try {
          return (0, fD.c)(this.memory().buffer, DD, zD, wD, pD)
        } catch (sD) {
          return this.keepCorruption(sD), null
        }
      }
      reportCorruption(DD) {
        this.keepCorruption(new fD.b(DD))
      }
      keepCorruption(DD) {
        if (!(DD instanceof fD.b)) throw DD;
        this.corruption ??= DD
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(DD, zD, wD) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: pD,
          len: sD
        } = DD;
        this.eventsPtr = pD, this.eventsLen = sD, this.eventsBuffer = null;
        const KD = this.eventView();
        for (let gD = 0; gD < sD;) {
          const DD = KD.getUint32(gD, !0),
            wD = 65535 & DD,
            pD = DD >>> 16,
            sD = gD + UD.Q;
          if (wD === ID.r.EntitySpawned) {
            var rD;
            if (pD !== ID.Jb.BYTES) throw VD(wD, gD, pD);
            const DD = ID.Jb.serverId(KD, sD);
            this.spawned(DD, ID.Jb.index(KD, sD), ID.Jb.kind(KD, sD)), null === (rD = zD.entityAdded) || void 0 === rD || rD.call(zD, DD)
          } else if ((wD === ID.r.ChunkSlot || wD === ID.r.EntityInfoChanged) && !(0, ID.de)(wD, KD, sD, pD, zD)) throw VD(wD, gD, pD);
          gD = sD + (0, UD.we)(pD)
        }
        try {
          var LD;
          null === (LD = zD.afterPrescan) || void 0 === LD || LD.call(zD), this.throwCorruption(), !wD() && this.dispatch(DD, zD, wD) && (this.throwCorruption(), this.applyListener(), zD.afterWalk(DD.kind)), this.throwCorruption()
        } catch (cD) {
          throw cD instanceof fD.b && (this.corruption ??= cD), cD
        } finally {
          wD() || null !== this.corruption || this.applyDespawns(sD, zD)
        }
      }
      applyDespawns(DD, zD) {
        const wD = this.eventView();
        for (let sD = 0; sD < DD;) {
          const DD = wD.getUint32(sD, !0),
            KD = sD + UD.Q;
          if ((65535 & DD) === ID.r.EntityDespawned && DD >>> 16 === ID.Jb.BYTES) {
            const DD = ID.Jb.serverId(wD, KD);
            var pD;
            if (this.despawned(DD, ID.Jb.index(wD, KD))) null === (pD = zD.entityRemoved) || void 0 === pD || pD.call(zD, DD)
          }
          sD = KD + (0, UD.we)(DD >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(DD, zD, wD) {
        const {
          len: pD,
          net: sD,
          netOffsets: KD
        } = DD;
        let rD = this.eventView(),
          LD = 0;
        for (let ED = 0; ED < pD;) {
          const DD = rD.getUint32(ED, !0),
            pD = 65535 & DD,
            QD = DD >>> 16,
            PD = ED + UD.Q;
          let CD = !1;
          if (LD < sD.length && KD[LD] === ED) zD.netEvent(sD[LD]), LD++, CD = !0;
          else if (pD === UD.U.LocalPlayerBound) {
            var cD;
            if (QD !== UD.Lb) throw VD(pD, ED, QD);
            null === (cD = zD.localPlayerBound) || void 0 === cD || cD.call(zD, rD.getInt32(PD, !0)), CD = !0
          } else if (pD === UD.U.LocalHurt) {
            var gD;
            if (QD !== UD.Hb) throw VD(pD, ED, QD);
            null === (gD = zD.localHurt) || void 0 === gD || gD.call(zD, rD.getInt32(PD, !0), rD.getFloat32(PD + 4, !0), rD.getUint32(PD + 8, !0)), CD = !0
          } else if (pD === UD.U.AttackHit) {
            var RD;
            if (QD !== UD.c) throw VD(pD, ED, QD);
            const DD = rD.getFloat32(PD, !0),
              wD = rD.getFloat32(PD + 4, !0),
              sD = rD.getFloat32(PD + 8, !0),
              KD = rD.getUint32(PD + 12, !0);
            null === (RD = zD.attackHit) || void 0 === RD || RD.call(zD, DD, wD, sD, 0 !== (KD & UD.l.Crit), 0 !== (KD & UD.l.HitSelf))
          } else if (pD === UD.U.PhysicsType) {
            var AD;
            if (QD !== UD.hc) throw VD(pD, ED, QD);
            null === (AD = zD.physicsType) || void 0 === AD || AD.call(zD, rD.getUint32(PD, !0), rD.getInt32(PD + 4, !0)), CD = !0
          } else if (pD === UD.U.VehicleEffect) {
            var fD;
            const DD = XD(rD, PD, QD);
            if (null === DD) throw VD(pD, ED, QD);
            null === (fD = zD.vehicleEffect) || void 0 === fD || fD.call(zD, DD.op, DD.name, DD.icon, DD.level, DD.durationMs), CD = !0
          } else if (pD === UD.U.ZoomChanged) {
            var BD;
            if (QD !== UD.ee) throw VD(pD, ED, QD);
            null === (BD = zD.zoomChanged) || void 0 === BD || BD.call(zD, rD.getFloat32(PD, !0), rD.getUint8(PD + 4)), CD = !0
          } else if (pD === UD.U.ZoomDisabled) {
            var OD;
            if (0 !== QD) throw VD(pD, ED, QD);
            null === (OD = zD.zoomDisabled) || void 0 === OD || OD.call(zD), CD = !0
          } else if (pD === UD.U.GameCamera) {
            var JD;
            null === (JD = zD.gameCamera) || void 0 === JD || JD.call(zD, new Uint8Array(rD.buffer, rD.byteOffset + PD, QD).slice()), CD = !0
          } else if (pD === ID.r.ChunkSlot || pD === ID.r.EntityInfoChanged);
          else if (pD >= GD && pD <= hD) {
            if (this.audio && !this.audio.onAudioEvent(pD, rD, PD, QD)) throw VD(pD, ED, QD)
          } else if (pD >= nD && pD <= MD) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(pD, rD, PD, QD)) throw VD(pD, ED, QD);
              CD = !0
            }
          } else if (pD >= ID.jd && pD <= ID.md && pD !== UD.U.EnvLighting) {
            if (!(0, ID.de)(pD, rD, PD, QD, zD)) throw VD(pD, ED, QD);
            CD = !0
          }
          if (CD) {
            if (wD()) return !1;
            rD = this.eventView()
          }
          ED = PD + (0, UD.we)(QD)
        }
        return !wD()
      }
      applyListener() {
        var DD;
        if (!this.audio) return;
        const zD = ID.v.audioViewPtr(this.apiView, 0),
          wD = this.memory().buffer;
        let pD = this.audioView;
        (null === (DD = pD) || void 0 === DD ? void 0 : DD.buffer) === wD && pD.byteOffset === zD || (pD = (0, fD.c)(wD, zD, ID.w.BYTES, 8, "the audio view"), this.audioView = pD), pD && this.audio.applyListener(pD)
      }
      indexOf(DD) {
        return this.indexById.get("number" === typeof DD ? DD : +DD)
      }
      isLocal(DD) {
        return DD !== ID.Tc && DD === ID.v.localId(this.apiView, 0)
      }
      PJ(DD) {
        const zD = [0, 0, 0];
        return this.readPosition("number" === typeof DD ? DD : +DD, zD) ? zD : null
      }
      readPosition(DD, zD) {
        const wD = this.apiView;
        if (void 0 !== this.indexById.get(DD) && this.isLocal(DD)) {
          for (let DD = 0; DD < 3; DD++) zD[DD] = ID.v.localPos(wD, 0, DD);
          return !0
        }
        return this.readDrawnPosition(DD, zD)
      }
      readDrawnPosition(DD, zD) {
        const wD = this.apiView,
          pD = this.indexById.get(DD);
        if (void 0 === pD || pD >= this.renderCapacity) return zD[0] = zD[1] = zD[2] = NaN, !1;
        const sD = pD * BD;
        for (let KD = 0; KD < 3; KD++) zD[KD] = this.render[sD + KD] + ID.v.origin(wD, 0, KD);
        return !0
      }
      checkValid(DD) {
        return void 0 !== this.indexOf(DD)
      }
      isAlive(DD) {
        const zD = this.indexOf(DD);
        if (void 0 === zD) return null;
        if (this.ensureViews(), zD >= this.renderCapacity) return null;
        const wD = this.vis[zD];
        return 0 === wD ? null : 0 !== (wD & ID.ae.Alive)
      }
      getEntityType(DD) {
        const zD = this.indexOf(DD);
        return void 0 === zD ? this.isLocal("number" === typeof DD ? DD : +DD) ? "Player" : null : ED(this.kinds[zD])
      }
      spawned(DD, zD, wD) {
        if (zD >= 1048576) throw new fD.b(`entity ${DD} spawned at index ${zD}`);
        this.ensureIndex(zD), this.serverIds[zD] === DD && null !== this.idStr[zD] || (this.idStr[zD] = String(DD)), this.serverIds[zD] = DD, this.kinds[zD] = wD, this.indexById.set(DD, zD)
      }
      despawned(DD, zD) {
        let wD = !1;
        return this.indexById.get(DD) === zD && (this.indexById.delete(DD), wD = !0), zD < this.serverIds.length && this.serverIds[zD] === DD && (this.serverIds[zD] = ID.Tc, this.kinds[zD] = 0, this.idStr[zD] = null), wD
      }
      ensureIndex(DD) {
        const zD = this.serverIds.length;
        if (DD < zD) return;
        let wD = 2 * zD;
        for (; wD <= DD;) wD *= 2;
        const pD = new Int32Array(wD).fill(ID.Tc);
        pD.set(this.serverIds), this.serverIds = pD;
        const sD = new Uint16Array(wD);
        sD.set(this.kinds), this.kinds = sD;
        for (let KD = zD; KD < wD; KD++) this.idStr.push(null)
      }
      eventView() {
        const DD = this.memory().buffer;
        return DD !== this.eventsBuffer && (this.eventsBuffer = DD, this.events = new DataView(DD, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const DD = this.memory().buffer;
        this.buffer = DD, this.viewPtr < 0 && (this.viewPtr = this.core.isD()), this.view = new DataView(DD, this.viewPtr, ID.v.BYTES), this.rereadDirectory()
      }
    }

    function JD(DD) {
      return DD >>> ID.d === ID.s.Item
    }

    function ED(DD) {
      var zD, wD;
      const pD = DD & ID.g;
      switch (DD >>> ID.d) {
        case ID.s.Lifeform:
          return null !== (zD = RD.k[pD]) && void 0 !== zD ? zD : null;
        case ID.s.Throwable:
          return null !== (wD = AD.m[pD]) && void 0 !== wD ? wD : null;
        case ID.s.Mesh:
          return "Mesh";
        case ID.s.Audio:
          return "AudioEntity";
        case ID.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const QD = new TextDecoder;

    function XD(DD, zD, wD) {
      if (wD < UD.Jd.HEAD_BYTES) return null;
      const pD = DD.getUint32(zD, !0),
        sD = DD.getUint32(zD + 20, !0),
        KD = DD.getUint32(zD + 24, !0),
        rD = UD.Jd.HEAD_BYTES + (0, UD.we)(sD);
      if (pD !== UD.Jd.UPDATE && pD !== UD.Jd.REMOVE || sD > wD || rD + KD > wD) return null;
      const LD = (wD, pD) => QD.decode(new Uint8Array(DD.buffer, DD.byteOffset + zD + wD, pD)),
        cD = DD.getFloat64(zD + 12, !0);
      return {
        op: pD,
        level: DD.getFloat64(zD + 4, !0),
        durationMs: Number.isNaN(cD) ? null : cD,
        name: LD(UD.Jd.HEAD_BYTES, sD),
        icon: LD(rD, KD)
      }
    }

    function VD(DD, zD, wD) {
      return new fD.b(`event ${DD} at ${zD} of ${wD} bytes`)
    }
    var PD = wD(351),
      CD = wD(1232),
      xD = wD(38992),
      TD = wD(1950),
      bD = wD(40919),
      jD = wD(1886),
      dD = wD(39140),
      SD = wD(39168),
      iD = wD(39151),
      lD = wD(40544),
      WD = wD(2389),
      ND = wD(39133),
      ZD = wD(39160);
    const yD = Math.max(ID.wb.BYTES, ID.sb.BYTES, ID.ub.BYTES);

    function kD(DD) {
      if (!(0, ZD.e)(DD)) return null;
      const zD = Number(DD);
      return (0 | zD) === zD ? zD : null
    }
    class mD {
      constructor(DD) {
        this.api = DD, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, ND.h)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.AK = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = ID.Tc, this.localName = String(ID.Tc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.AK = null;
        const DD = this.api.queries.directorView() >= ID.wb.BYTES ? this.scratchView() : null;
        null !== DD && (this.defaultFov = (0, jD.D)(ID.wb.fov(DD, 0)), this.baseFov = (0, jD.D)(ID.wb.baseFov(DD, 0)), this.aspect = ID.wb.aspect(DD, 0), this.bodyHeading = ID.wb.bodyHeading(DD, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(DD) {
        this.viewHeading = DD
      }
      get localPlayerId() {
        const DD = ID.v.localId(this.api.apiView, 0);
        return DD !== this.localId && (this.localId = DD, this.localName = String(DD)), this.localName
      }
      getEntityPosition(DD) {
        return this.readEntity(DD) ? this.entityFeet : null
      }
      getEntityAimPoint(DD) {
        return this.readEntity(DD) ? this.entityAim : null
      }
      getEntityHeading(DD) {
        const zD = kD(DD);
        if (null === zD) return null;
        const wD = ID.v.localId(this.api.apiView, 0);
        return zD === wD && wD !== ID.Tc ? this.viewHeading : this.readEntity(DD) ? this.entityHeading : null
      }
      raycastTerrain(DD, zD, wD) {
        const pD = this.api.queries.cameraSweep(DD[0], DD[1], DD[2], zD[0], zD[1], zD[2], wD);
        return pD < wD - 1e-6 ? pD : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const DD = this.defaultPose;
        DD.fov = this.defaultFov;
        const zD = this.api.queries.directorDefaultPose() >= ID.sb.BYTES ? this.scratchView() : null;
        if (null === zD) return DD;
        for (let wD = 0; wD < 3; wD++) DD.position[wD] = ID.sb.eye(zD, 0, wD);
        return DD.heading = ID.sb.heading(zD, 0), DD.pitch = ID.sb.pitch(zD, 0), DD
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
      readEntity(DD) {
        const zD = kD(DD);
        if (null === zD) return !1;
        if (zD === this.AK) return this.entityLive;
        this.AK = zD;
        const wD = this.api.queries.directorEntity(zD) >= ID.ub.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== wD, null === wD) return !1;
        for (let pD = 0; pD < 3; pD++) this.entityFeet[pD] = ID.ub.feet(wD, 0, pD), this.entityAim[pD] = this.entityFeet[pD];
        return this.entityAim[1] += ID.ub.eyeHeight(wD, 0), this.entityHeading = ID.ub.heading(wD, 0), !0
      }
      scratchView() {
        const DD = this.api.scratch(),
          zD = this.api.memory().buffer,
          wD = this.scratch;
        return null !== wD && wD.buffer === zD && wD.byteOffset === DD ? wD : (this.scratch = this.api.memoryData(DD, yD, 8, "the director's record"), this.scratch)
      }
    }
    const eD = {
        mode: "default"
      },
      oD = {
        show: () => {},
        clear: () => {}
      };

    function aD() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class uD {
      constructor(DD) {
        this.options = DD, this.KU = void 0, this.director = void 0, this.latest = eD, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          aT: 0,
          qT: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.GA = new Int32Array(3 * ID.Ld), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * ID.Ld), this.KU = new mD(DD.api), this.director = new iD.c(this.KU)
      }
      settingsChanged(DD) {
        let zD = eD;
        if (DD.length > 0) try {
          zD = (0, lD.b)(DD)
        } catch {}
        this.latest = zD, this.pending = zD
      }
      call(DD, zD, wD, pD, sD, KD) {
        var rD, LD;
        let cD;
        this.holding = !1;
        try {
          cD = this.answer(DD, zD, wD, pD, sD, KD)
        } catch (UD) {
          var gD, RD;
          throw this.answeredPose = !1, null === (gD = (RD = this.options).showFacing) || void 0 === gD || gD.call(RD, null), UD
        }
        const AD = this.answeredPose && 0 === (pD & ID.vb.Held);
        return this.answeredPose = cD !== ID.qb.None, this.holding = this.answeredPose && !AD, null === (rD = (LD = this.options).showFacing) || void 0 === rD || rD.call(LD, this.holding ? this.facing : null), cD
      }
      holdsView() {
        return this.holding
      }
      answer(DD, zD, wD, pD, sD, KD) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          KU: rD
        } = this;
        rD.readView();
        if (0 !== (pD & ID.vb.Held) || rD.setViewHeading((0, dD.s)(rD.bodyHeading)), void 0 !== this.pending) {
          const DD = this.pending;
          this.pending = void 0, this.director.setSettings(DD), this.syncShownSettings()
        }
        this.readLook((0, WD.g)(zD), (0, WD.g)(wD), pD, (0, WD.g)(sD), (0, WD.g)(KD));
        const LD = this.director.update(DD / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !LD) return ID.qb.None;
        const [cD, gD, RD] = LD.position;
        if (0 === this.options.api.queries.directorPose(cD, gD, RD, (0, dD.s)(LD.heading), (0, dD.f)(LD.pitch), (0, jD.l)(LD.fov))) return ID.qb.None;
        if ("default" === this.director.getSettings().mode) return ID.qb.Pose;
        switch (this.facing) {
          case "camera":
            return ID.qb.FaceCamera;
          case "cursor":
            return ID.qb.FaceCursor;
          default:
            return ID.qb.FaceMovement
        }
      }
      afterFrame(DD) {
        DD ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = eD, this.idle()
      }
      restart() {
        const DD = this.holding;
        this.idle(), this.holding = DD
      }
      idle() {
        var DD, zD;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new iD.c(this.KU), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (DD = (zD = this.options).showFacing) || void 0 === DD || DD.call(zD, null), this.setCentres(0)
      }
      syncShownSettings() {
        const DD = this.director.getSettings();
        if (DD === this.shownSettings) return;
        this.shownSettings = DD;
        const zD = (0, SD.f)(DD);
        this.facing = zD.facing, this.mouseTurns = zD.mouseTurns
      }
      readLook(DD, zD, wD, pD, sD) {
        const KD = this.look,
          rD = 0 !== (wD & ID.vb.LookPointed);
        if (null === this.mouseTurns && !rD) return KD.aT = 0, KD.qT = 0, void(KD.pointedAt = void 0);
        let LD;
        rD && (this.pointedAt.heading = pD, this.pointedAt.pitch = sD, LD = this.pointedAt);
        const {
          KU: cD
        } = this;
        cD.setViewHeading((0, SD.e)(cD.getViewHeading(), DD, zD, LD, "look" === this.mouseTurns, KD))
      }
      writeCentres(DD) {
        const zD = this.next,
          wD = Math.min(DD.length, ID.Ld);
        for (let pD = 0; pD < wD; pD++)
          for (let wD = 0; wD < 3; wD++) zD[3 * pD + wD] = Math.floor(DD[pD][wD] / ID.E);
        this.setCentres(wD)
      }
      setCentres(DD) {
        const {
          GA: zD,
          next: wD
        } = this;
        let pD = DD === this.centresLen;
        for (let sD = 0; pD && sD < 3 * DD; sD++) pD = zD[sD] === wD[sD];
        pD || (zD.fill(0), zD.set(wD.subarray(0, 3 * DD)), this.centresLen = DD, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const DD = this.options.cmd();
        null !== DD && (0, ID.Bf)(DD, 0, this.GA, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var DD, zD, wD;
        return null !== (DD = null === (zD = (wD = this.options).screen) || void 0 === zD ? void 0 : zD.call(wD)) && void 0 !== DD ? DD : oD
      }
      hidden() {
        var DD;
        return (null !== (DD = this.options.isPageHidden) && void 0 !== DD ? DD : aD)()
      }
      now() {
        var DD, zD, wD;
        return null !== (DD = null === (zD = (wD = this.options).now) || void 0 === zD ? void 0 : zD.call(wD)) && void 0 !== DD ? DD : performance.now()
      }
    }
    var vD = wD(40694);
    const tD = ID.E * ID.E * ID.E,
      FD = Math.log2(ID.E),
      YD = ID.E - 1,
      HD = ID.Q.BYTES / 4,
      qD = new Uint16Array(tD);

    function Dz(DD, zD, wD) {
      return DD * ID.E * ID.E + zD * ID.E + wD
    }
    class zz {
      constructor(DD) {
        this.chunk = DD
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(DD, zD, wD) {
        return Dz(DD, zD, wD)
      }
    }
    class wz {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class pz {
      constructor(DD, zD, wD, pD) {
        this.table = DD, this.slot = zD, this.generation = wD, this.epoch = pD, this.dU = new zz(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = qD, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get HI() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get df() {
        const DD = this.gameVoxels(),
          zD = this.layers ??= new Uint16Array(ID.E);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let wD = 0; 0 !== this.staleLayers; wD++) {
          const pD = 1 << wD;
          0 !== (this.staleLayers & pD) && (this.staleLayers &= ~pD, zD[wD] = sz(DD, wD))
        }
        return zD
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const DD = this.voxelData(),
          zD = this.writes;
        if (null === zD || 0 === zD.ids.size) return DD;
        if (zD.from !== DD) {
          const wD = zD.patched ??= new Uint16Array(tD);
          wD.set(DD);
          for (const [DD, pD] of zD.ids) wD[DD] = pD;
          zD.from = DD
        }
        return zD.patched
      }
      written(DD) {
        var zD;
        return null === (zD = this.writes) || void 0 === zD ? void 0 : zD.ids.get(DD)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(DD, zD, wD) {
        const pD = this.writes ??= new wz;
        pD.ids.set(DD, zD), wD && pD.cleared.add(DD), null !== pD.from && (pD.patched[DD] = zD);
        const sD = 1 << (DD >> FD & YD);
        pD.layers |= sD, this.staleLayers |= sD, this.writeCount++
      }
      clearWrites() {
        const DD = this.writes;
        null !== DD && (this.staleLayers |= DD.layers, DD.ids.clear(), DD.cleared.clear(), DD.layers = 0, DD.from = null)
      }
      dataCleared(DD) {
        var zD;
        return !0 === (null === (zD = this.writes) || void 0 === zD ? void 0 : zD.cleared.has(DD))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const DD = this.table.slotWords(),
          zD = this.slot * HD;
        if (this.epoch !== this.table.epoch || zD + HD > DD.length || 0 === DD[zD + 3] || DD[zD + 2] !== this.generation) return this.data = qD, this.dataPtr = 0, qD;
        this.version = DD[zD + 1];
        const wD = DD[zD + 0],
          pD = DD.buffer;
        return wD === this.dataPtr && pD === this.dataBuffer || (this.dataPtr = wD, this.dataBuffer = pD, this.data = this.table.voxelsAt(pD, wD)), this.data
      }
    }

    function sz(DD, zD) {
      const wD = DD[zD * ID.E];
      for (let pD = 0; pD < ID.E; pD++) {
        const sD = Dz(pD, zD, 0);
        for (let zD = 0; zD < ID.E; zD++)
          if (DD[sD + zD] !== wD) return 65535
      }
      return wD
    }
    const Kz = new Uint32Array(0);

    function rz(DD, zD, wD) {
      return Dz(DD & YD, zD & YD, wD & YD)
    }
    class Lz {
      constructor(DD, zD) {
        this.memory = DD, this.apiView = zD, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Kz, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Kz, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(DD, zD, wD, pD, sD, KD) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, KD === ID.U.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (KD !== ID.U.Stored && KD !== ID.U.Unloaded) throw new fD.b(`ChunkSlot flags ${KD}`);
        const rD = (0, vD.e)(DD, zD, wD);
        if (rD < 0) return;
        if (KD === ID.U.Unloaded) return void this.chunks.delete(rD);
        const LD = this.chunks.get(rD);
        (null === LD || void 0 === LD ? void 0 : LD.slot) === pD && LD.generation === sD || this.chunks.set(rD, new pz(this, pD, sD, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const DD = this.apiView(),
          zD = ID.v.chunkSlotsPtr(DD, 0),
          wD = ID.v.chunkSlotsLen(DD, 0);
        zD === this.slotsPtr && wD === this.slotsLen || (this.slotsPtr = zD, this.slotsLen = wD, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const DD = this.apiView(),
          zD = ID.v.walkThroughPtr(DD, 0),
          wD = ID.v.walkThroughLen(DD, 0);
        zD === this.walkPtr && wD === this.walkLen || (this.walkPtr = zD, this.walkLen = wD, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const DD of this.written) DD.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const DD = this.memory().buffer;
        var zD;
        DD !== this.slotsBuffer && (this.slotsBuffer = DD, this.slots = null !== (zD = (0, fD.l)(Uint32Array, DD, this.slotsPtr, this.slotsLen * HD, "the chunk directory")) && void 0 !== zD ? zD : Kz);
        return this.slots
      }
      voxelsAt(DD, zD) {
        try {
          var wD;
          return null !== (wD = (0, fD.l)(Uint16Array, DD, zD, tD, "a chunk's voxels")) && void 0 !== wD ? wD : qD
        } catch (pD) {
          if (!(pD instanceof fD.b)) throw pD;
          return this.corruption ??= pD, qD
        }
      }
      chunk(DD, zD, wD) {
        var pD;
        return null !== (pD = this.chunks.get((0, vD.e)(DD, zD, wD))) && void 0 !== pD ? pD : null
      }
      isLoaded(DD, zD, wD) {
        return void 0 !== this.chunkAt(Math.floor(DD), Math.floor(zD), Math.floor(wD))
      }
      fR(DD, zD, wD) {
        var pD;
        const sD = Math.floor(DD),
          KD = Math.floor(zD),
          rD = Math.floor(wD),
          LD = this.chunkAt(sD, KD, rD);
        if (!LD) return 0;
        const cD = rz(sD, KD, rD);
        return null !== (pD = LD.written(cD)) && void 0 !== pD ? pD : LD.voxelData()[cD]
      }
      setOverlay(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const KD = this.chunkAt(DD, zD, wD);
        return !!KD && (KD.hasWrites() || this.written.push(KD), KD.write(rz(DD, zD, wD), pD, sD), !0)
      }
      version(DD, zD, wD) {
        var pD, sD;
        return null !== (pD = null === (sD = this.chunks.get((0, vD.e)(DD, zD, wD))) || void 0 === sD ? void 0 : sD.HI) && void 0 !== pD ? pD : null
      }
      scan(DD, zD, wD, pD, sD, KD, rD, LD) {
        const cD = ID.E;
        let gD = 0;
        for (let RD = Math.floor(zD / cD); RD * cD < sD; RD++) {
          const AD = RD * cD,
            UD = Math.min(sD - AD, cD);
          for (let sD = Math.floor(DD / cD); sD * cD < pD; sD++) {
            const fD = sD * cD,
              ID = Math.min(pD - fD, cD);
            for (let pD = Math.floor(wD / cD); pD * cD < KD; pD++) {
              const BD = this.chunks.get((0, vD.e)(sD, RD, pD));
              if (!BD) continue;
              const GD = pD * cD,
                hD = Math.max(wD - GD, 0),
                nD = Math.min(KD - GD, cD),
                MD = BD.df,
                OD = BD.gameVoxels();
              for (let wD = Math.max(zD - AD, 0); wD < UD; wD++) {
                const zD = MD[wD];
                if (65535 === zD || 0 !== rD[zD]) {
                  gD++;
                  for (let zD = Math.max(DD - fD, 0); zD < ID; zD++) {
                    const DD = Dz(zD, wD, 0);
                    for (let pD = hD; pD < nD; pD++) {
                      const sD = OD[DD + pD];
                      0 !== rD[sD] && LD.push(fD + zD, AD + wD, GD + pD, sD)
                    }
                  }
                }
              }
            }
          }
        }
        return gD
      }
      dataCleared(DD, zD, wD) {
        var pD;
        const sD = Math.floor(DD),
          KD = Math.floor(zD),
          rD = Math.floor(wD);
        return !0 === (null === (pD = this.chunkAt(sD, KD, rD)) || void 0 === pD ? void 0 : pD.dataCleared(rz(sD, KD, rD)))
      }
      isWalkThrough(DD) {
        if (!Number.isInteger(DD) || DD < 0 || DD > 65535) return !1;
        const zD = this.walkWords(),
          wD = DD >>> 5;
        return wD < zD.length && 1 === (zD[wD] >>> (31 & DD) & 1)
      }
      walkWords() {
        const DD = this.memory().buffer;
        var zD;
        DD !== this.walkBuffer && (this.walkBuffer = DD, this.walk = null !== (zD = (0, fD.l)(Uint32Array, DD, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== zD ? zD : Kz);
        return this.walk
      }
      chunkAt(DD, zD, wD) {
        if ((0 | DD) !== DD || (0 | zD) !== zD || (0 | wD) !== wD) return;
        const pD = (0, vD.e)(DD >> FD, zD >> FD, wD >> FD);
        return pD !== this.lastKey && (this.lastKey = pD, this.lastChunk = this.chunks.get(pD)), this.lastChunk
      }
    }
    var cz = wD(38486),
      gz = wD(37791),
      Rz = wD(36749),
      Az = wD(36591),
      Uz = wD(34174),
      fz = wD(39092),
      Iz = wD(197);
    const Bz = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      Gz = [
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
      hz = Gz.map((DD => {
        let [zD] = DD;
        return zD
      })),
      nz = Uint8Array.from(Gz, (DD => {
        let [, zD] = DD;
        return zD
      })),
      Mz = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Oz = 8;
    var Jz = wD(36723),
      Ez = wD(36738),
      Qz = wD(36733),
      Xz = wD(262);
    class Vz {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xz.b;
        this.sheet = DD, this.onError = zD, this.idle = wD, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = DD => {
          this.cancelIdle = null;
          try {
            if (DD.timeRemaining() >= 1) {
              let DD = this.queue.shift();
              for (; void 0 !== DD && !this.load(DD);) DD = this.queue.shift()
            }
          } catch (zD) {
            this.onError(zD)
          } finally {
            this.schedule()
          }
        }
      }
      preload(DD) {
        const zD = [...DD].sort(((DD, zD) => DD - zD));
        for (const wD of zD) this.asked.has(wD) || (this.asked.add(wD), this.queue.push(wD));
        this.schedule()
      }
      cancel() {
        var DD;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (DD = this.cancelIdle) || void 0 === DD || DD.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(DD) {
        const zD = this.sheet(DD, !1),
          wD = this.sheet(DD, !0),
          [pD, sD] = "unloaded" === zD.state() && "unloaded" !== wD.state() ? [wD, zD] : [zD, wD],
          KD = this.gen,
          rD = () => {
            try {
              KD === this.gen && "unloaded" === sD.state() && sD.load()
            } catch (DD) {
              this.onError(DD)
            }
          },
          LD = pD.state();
        return "unloaded" === LD ? (pD.once("load", rD), pD.load(), !0) : "unloaded" === sD.state() && ("loading" === LD ? (pD.once("load", rD), !1) : (sD.load(), !0))
      }
    }
    var Pz = wD(40801);
    const Cz = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      xz = Iz.f.eG * Iz.f.playerEyeToHeightRatio,
      Tz = [0, 0, -1, 0, 1, 0],
      bz = Bz.indexOf("note");

    function jz(DD) {
      return DD >= 0 ? Math.min(1, DD) : 0
    }

    function dz(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const pD = function(DD) {
        let zD = 0,
          wD = hz.length;
        for (; zD < wD;) {
          const pD = zD + wD >>> 1;
          hz[pD] < DD ? zD = pD + 1 : wD = pD
        }
        return zD
      }(DD);
      if ("" === DD || null === (zD = hz[pD]) || void 0 === zD || !zD.startsWith(DD)) return -1;
      if (hz[pD] === DD) return pD;
      let sD = pD + 1;
      for (; sD < hz.length && hz[sD].startsWith(DD);) sD++;
      return pD + Math.floor(wD() * (sD - pD))
    }
    class Sz {
      constructor(DD, zD, wD, pD, sD) {
        this.group = DD, this.loudness = zD, this.startMs = wD, this.howl = pD, this.host = sD, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const DD = this.host.alive(this.id);
        return DD ? 1e3 * this.howl.duration(this.id) / DD.rate : 0
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
    class iz {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          pD = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = DD, this.listener = zD, this.now = wD, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(Bz.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Qz.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: DD => this.aliveVoice(DD),
          started: DD => this.started.has(DD),
          drop: DD => {
            var zD;
            null === (zD = this.live.get(DD)) || void 0 === zD || zD.howl.stop(DD), this.forget(DD)
          }
        }, this.handlers = {
          playSound: (DD, zD, wD, pD, sD, KD, rD, LD, cD) => {
            if (pD >= hz.length) return;
            const gD = 0 !== (sD & ID.Wd.Loop);
            sD & ID.Wd.TwoD ? this.start(pD, !1, rD, KD, LD, gD) : this.startSpatial(pD, rD, KD, LD, gD, DD, zD, wD, cD, this.earDistSq(DD, zD, wD))
          },
          soundPos: (DD, zD, wD, pD) => {
            const sD = this.core.get(pD);
            var KD;
            void 0 !== sD && (null === (KD = this.live.get(sD)) || void 0 === KD || KD.howl.pos(wD, zD, DD, sD))
          },
          soundSet: (DD, zD, wD, pD) => {
            const sD = this.core.get(DD),
              KD = void 0 === sD ? void 0 : this.live.get(sD);
            void 0 !== sD && KD && (this.setRel(sD, zD), KD.rate = wD, KD.howl.rate(wD, sD), KD.spatial && KD.howl.pannerAttr({
              refDistance: pD
            }, sD))
          },
          soundFade: (DD, zD, wD, pD) => {
            const sD = this.core.get(DD);
            void 0 !== sD && this.fade(sD, zD, wD, 0 !== (pD & ID.Ud.StopAfter))
          },
          soundStop: DD => {
            const zD = this.core.get(DD);
            var wD;
            void 0 !== zD && (null === (wD = this.live.get(zD)) || void 0 === wD || wD.howl.stop(zD), this.forget(zD))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new Vz(((DD, zD) => this.sheet(DD, zD)), (DD => {
          this.errors++, console.error("Audio preload failed", DD)
        }), pD)
      }
      prepare() {
        for (let DD = 0; DD < Bz.length; DD++) this.prepareSheet(DD)
      }
      prepareSheet(DD) {
        this.sheet(DD, !1), this.sheet(DD, !0)
      }
      preload(DD) {
        this.loader.preload(DD)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let DD = 0; DD < Bz.length; DD++) {
          if (Ez.e.has(Bz[DD])) continue;
          const zD = [];
          for (const pD of [!1, !0]) {
            const wD = lz(DD, pD),
              sD = this.sheets.get(wD);
            void 0 !== sD && "loading" !== sD.state() && zD.push({
              key: wD,
              howl: sD
            })
          }
          if (!zD.some((DD => {
              let {
                howl: zD
              } = DD;
              return "loaded" === zD.state()
            }))) continue;
          this.unloading[DD] += zD.length;
          const wD = () => {
            this.unloading[DD]--, 0 === this.unloading[DD] && this.prepareSheet(DD)
          };
          for (const {
              key: DD,
              howl: pD
            }
            of zD) this.sheets.delete(DD), "loaded" === pD.state() ? (0, Jz.c)(pD, wD) : (pD.unload(), wD())
        }
      }
      onAudioEvent(DD, zD, wD, pD) {
        if (DD < ID.r.PlaySound || DD > ID.r.SoundReset) return !1;
        try {
          return (0, ID.de)(DD, zD, wD, pD, this.handlers)
        } catch (sD) {
          return this.errors++, console.error("Audio event failed", sD), !0
        }
      }
      applyListener(DD) {
        const zD = this.nextPose;
        for (let pD = 0; pD < 3; pD++) zD[2 - pD] = ID.w.listener(DD, 0, pD), zD[5 - pD] = ID.w.forward(DD, 0, pD), zD[8 - pD] = ID.w.up(DD, 0, pD);
        0 === zD[3] && 0 === zD[4] && 0 === zD[5] && zD.set(this.posed ? this.pose.subarray(3) : Tz, 3);
        for (let pD = 0; pD < 9; pD++)
          if (!Number.isFinite(zD[pD])) return;
        const wD = this.pose;
        if (this.posed) {
          let DD = !0;
          for (let pD = 0; pD < 9 && DD; pD++) DD = zD[pD] === wD[pD];
          if (DD) return
        }
        this.listener.apply(zD) && (wD.set(zD), this.posed = !0)
      }
      playGame(DD, zD, wD, pD, sD, KD, rD) {
        const LD = dz(DD);
        if (LD < 0) return Pz.d;
        if (!wD) {
          const {
            howl: DD,
            id: wD
          } = this.start(LD, !1, zD, 0, 1, rD);
          return this.gameSound(DD, wD, !1)
        }
        const cD = wD[0],
          gD = wD[1] + xz,
          RD = wD[2];
        if (!Number.isFinite(cD) || !Number.isFinite(gD) || !Number.isFinite(RD)) return Pz.d;
        let AD;
        if (pD) {
          const DD = cD - pD[0],
            zD = gD - pD[1],
            wD = RD - pD[2];
          if (AD = DD * DD + zD * zD + wD * wD, AD > sD * sD) return Pz.d
        } else AD = this.earDistSq(cD, gD, RD);
        const UD = this.startSpatial(LD, zD, 0, 1, rD, cD, gD, RD, KD, AD);
        return UD ? this.gameSound(UD.howl, UD.id, !0) : Pz.d
      }
      setMaster(DD, zD) {
        this.level = jz(DD);
        const wD = zD ? this.level : 0;
        if (wD !== this.master) {
          this.master = wD;
          for (const [DD, zD] of this.live) zD.fadeMs = 0, zD.gain = zD.rel * this.master, zD.howl.volume(zD.gain, DD)
        }
      }
      stopCore() {
        for (const zD of [...this.core.values()]) {
          var DD;
          null === (DD = this.live.get(zD)) || void 0 === DD || DD.howl.stop(zD)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [DD, zD] of [...this.live]) zD.howl.stop(DD), this.forget(DD);
        this.core.clear()
      }
      gameSound(DD, zD, wD) {
        const pD = {
          stop: () => (this.live.has(zD) && DD.stop(zD), pD),
          fade: (DD, wD, sD) => {
            var KD, rD;
            const LD = this.level > 0 ? wD / this.level : wD > 0 && null !== (KD = null === (rD = this.live.get(zD)) || void 0 === rD ? void 0 : rD.rel) && void 0 !== KD ? KD : 0;
            return this.fade(zD, LD, sD, !1), pD
          },
          rate: wD => {
            const sD = this.live.get(zD);
            return sD && (sD.rate = function(DD) {
              return DD > 0 && DD < 1 / 0 ? DD : 1
            }(wD), DD.rate(sD.rate, zD)), pD
          },
          getVolume: () => {
            var DD, wD;
            return (null !== (DD = null === (wD = this.live.get(zD)) || void 0 === wD ? void 0 : wD.rel) && void 0 !== DD ? DD : 0) * this.level
          },
          getRelativeVolume: () => {
            var DD, wD;
            return null !== (DD = null === (wD = this.live.get(zD)) || void 0 === wD ? void 0 : wD.rel) && void 0 !== DD ? DD : 0
          },
          setRelativeVolume: DD => (this.setRel(zD, DD), pD),
          setPannerAttr: sD => {
            if (wD && this.live.has(zD)) {
              const wD = {
                ...Cz,
                refDistance: Rz.g
              };
              for (const [DD, zD] of Object.entries(sD)) "number" !== typeof zD && "string" !== typeof zD || (wD[DD] = zD);
              DD.pannerAttr({
                coneOuterAngle: wD.coneOuterAngle
              }, zD), DD.pannerAttr(wD, zD)
            }
            return pD
          },
          setPosition: sD => (wD && this.live.has(zD) && Number.isFinite(sD[0] + sD[1] + sD[2]) && DD.pos(sD[2], sD[1], sD[0], zD), pD)
        };
        return pD
      }
      startSpatial(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        const RD = this.sheet(nz[DD], !0);
        let AD = null;
        if (!sD) {
          if (this.failed.has(RD)) return null;
          const wD = nz[DD] === bz ? null : (0, Qz.j)(hz[DD]),
            pD = (0, Qz.g)(jz(zD), Math.sqrt(gD), cD);
          if (AD = new Sz(wD, pD, this.now(), RD, this.voiceHost), !this.voices.admit(AD)) return null
        }
        const UD = this.start(DD, !0, zD, wD, pD, sD);
        return AD && (AD.id = UD.id, AD.direct = "loaded" === RD.state() && !RD._playLock), RD.pannerAttr({
          coneOuterAngle: 360
        }, UD.id), RD.pannerAttr({
          ...Cz,
          refDistance: cD
        }, UD.id), RD.pos(LD, rD, KD, UD.id), UD
      }
      aliveVoice(DD) {
        const zD = this.live.get(DD);
        if (!zD) return;
        const wD = zD.howl._soundById(DD);
        if (wD && !wD._ended) return zD;
        this.forget(DD)
      }
      earDistSq(DD, zD, wD) {
        if (!this.posed) return 0;
        const pD = DD - this.pose[2],
          sD = zD - this.pose[1],
          KD = wD - this.pose[0];
        return pD * pD + sD * sD + KD * KD
      }
      start(DD, zD, wD, pD, sD, KD) {
        const rD = jz(wD),
          LD = this.sheet(nz[DD], zD);
        "unloaded" === LD.state() && LD.load();
        const cD = LD.play(hz[DD]),
          gD = rD * this.master;
        return LD.volume(gD, cD), this.live.set(cD, {
          howl: LD,
          rel: rD,
          gain: gD,
          fadeFrom: gD,
          fadeAt: 0,
          fadeMs: 0,
          rate: sD,
          handle: pD,
          spatial: zD,
          stopTimer: void 0
        }), 0 !== pD && this.core.set(pD, cD), 1 !== sD && LD.rate(sD, cD), KD && LD.loop(!0, cD), {
          howl: LD,
          id: cD
        }
      }
      sheet(DD, zD) {
        const wD = lz(DD, zD);
        let pD = this.sheets.get(wD);
        if (!pD) {
          const sD = this.createHowl(Bz[DD], zD);
          sD.on("end", (DD => {
            sD.loop(DD) || this.forget(DD)
          })), sD.on("stop", (DD => {
            this.forget(DD)
          })), sD.on("play", (DD => {
            this.live.has(DD) && this.started.add(DD)
          })), sD.on("loaderror", (DD => {
            if ("loaded" !== sD.state()) {
              this.failed.add(sD);
              for (const [DD, zD] of this.live) zD.howl === sD && this.forget(DD)
            } else "number" === typeof DD && this.forget(DD)
          })), this.sheets.set(wD, sD), pD = sD
        }
        return pD
      }
      setRel(DD, zD) {
        const wD = this.live.get(DD);
        wD && (Wz(wD), wD.fadeMs = 0, wD.rel = jz(zD), wD.gain = wD.rel * this.master, wD.howl.volume(wD.gain, DD))
      }
      fade(DD, zD, wD, pD) {
        const sD = this.live.get(DD);
        if (!sD) return;
        Wz(sD);
        const {
          howl: KD
        } = sD, rD = this.gainNow(sD);
        sD.rel = jz(zD), sD.gain = sD.rel * this.master;
        const LD = wD > 0 ? Math.min(wD, 65535) : 0,
          cD = 0 === LD || rD === sD.gain;
        sD.fadeMs = cD ? 0 : LD, cD ? KD.volume(sD.gain, DD) : (sD.fadeFrom = rD, sD.fadeAt = this.now(), KD.fade(rD, sD.gain, LD, DD)), pD && (cD ? KD.stop(DD) : sD.stopTimer = setTimeout((() => {
          sD.stopTimer = void 0, KD.stop(DD)
        }), LD))
      }
      gainNow(DD) {
        if (DD.fadeMs > 0) {
          const zD = (this.now() - DD.fadeAt) / DD.fadeMs;
          if (zD < 1) return DD.fadeFrom + (DD.gain - DD.fadeFrom) * Math.max(0, zD);
          DD.fadeMs = 0
        }
        return DD.gain
      }
      forget(DD) {
        this.started.delete(DD);
        const zD = this.live.get(DD);
        zD && (Wz(zD), this.live.delete(DD), 0 !== zD.handle && this.core.get(zD.handle) === DD && this.core.delete(zD.handle))
      }
    }

    function lz(DD, zD) {
      return 2 * DD + (zD ? 1 : 0)
    }

    function Wz(DD) {
      void 0 !== DD.stopTimer && (clearTimeout(DD.stopTimer), DD.stopTimer = void 0)
    }
    var Nz = wD(40529),
      Zz = wD(39095);
    class yz {
      constructor(DD, zD, wD, pD) {
        this.key = DD, this.model = zD, this.host = pD, this.bA = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.ksD = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.MI = !1, this.bA = Math.max(1, Math.ceil(wD)), this.records = new Float32Array(this.bA * cz.c), this.isDirty = new Uint8Array(this.bA), this.tail = new Uint8Array(this.bA * ID.nc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(pD.cmd())
      }
      setOrigin(DD, zD, wD) {
        this.origin[0] = DD, this.origin[1] = zD, this.origin[2] = wD
      }
      markDirty(DD) {
        !this.MI && DD >= 0 && DD < this.bA && DD < ID.nc.Max && this.mI(DD, DD + 1)
      }
      commit(DD) {
        if (this.MI) return;
        (DD = Math.min(Math.max(Math.floor(DD), 0), this.bA, ID.nc.Max)) > this.count && this.mI(this.count, DD), this.count = DD;
        const {
          origin: zD,
          sentOrigin: wD,
          dirtyList: pD
        } = this, sD = this.ksD !== DD, KD = wD[0] !== zD[0] || wD[1] !== zD[1] || wD[2] !== zD[2];
        if (0 === pD.length && !sD && !KD) return;
        const rD = this.host.cmd();
        if (!rD || !this.make(rD)) return;
        const LD = pD.length,
          {
            records: cD,
            tailView: gD
          } = this;
        for (let RD = 0; RD < LD; RD++) {
          const DD = pD[RD],
            zD = DD * cz.c,
            wD = RD * ID.nc.Bytes,
            sD = 0 !== cD[zD + cz.e] ? ID.nc.Hidden : 0;
          gD.setUint32(wD, (DD | sD) >>> 0, !0), gD.setFloat32(wD + 4, cD[zD], !0), gD.setFloat32(wD + 8, cD[zD + 1], !0), gD.setFloat32(wD + 12, cD[zD + 2], !0)
        }
        if ((0, ID.De)(rD, 0, this.key, DD, zD, LD, this.tailOf(LD))) {
          for (let DD = 0; DD < LD; DD++) this.isDirty[pD[DD]] = 0;
          pD.length = 0, this.ksD = DD, wD[0] = zD[0], wD[1] = zD[1], wD[2] = zD[2]
        }
      }
      grow(DD) {
        (DD = Math.ceil(DD)) <= this.bA || this.MI || (this.records = (0, Zz.d)(this.records, new Float32Array(DD * cz.c)), this.isDirty = (0, Zz.d)(this.isDirty, new Uint8Array(DD)), this.tail = new Uint8Array(DD * ID.nc.Bytes), this.tailView = new DataView(this.tail.buffer), this.bA = DD)
      }
      dispose() {
        this.MI || (this.MI = !0, this.host.MI(this, this.made ? this.key : null))
      }
      make(DD) {
        if (!this.made && DD) {
          const {
            item: zD,
            scale: wD,
            yaw: pD
          } = this.model;
          this.made = (0, ID.Ge)(DD, 0, this.key, zD, wD, pD)
        }
        return this.made
      }
      tailOf(DD) {
        const zD = DD * ID.nc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === zD || (this.tailCut = this.tail.subarray(0, zD)), this.tailCut
      }
      mI(DD, zD) {
        const {
          dirtyList: wD,
          isDirty: pD
        } = this;
        for (let sD = DD; sD < zD; sD++) 0 === pD[sD] && (pD[sD] = 1, wD.push(sD))
      }
    }
    var kz = wD(616);
    class mz {
      constructor(DD) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: DD,
          owes: DD => {
            this.owing.add(DD)
          },
          settled: (DD, zD) => {
            this.owing.delete(DD), zD && this.live.delete(DD)
          }
        }
      }
      create(DD, zD) {
        if (wD = DD, !kz.n.includes(wD)) return null;
        var wD;
        const pD = new ez(++this.keys, RD.k.indexOf(DD), zD, this.host);
        return this.live.add(pD), pD
      }
      disposeAll() {
        for (const DD of [...this.live]) DD.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const DD = this.host.cmd();
        for (const zD of this.owing)
          if (!zD.sync(DD)) return
      }
    }
    class ez {
      constructor(DD, zD, wD, pD) {
        this.key = DD, this.lifeform = zD, this.scale = wD, this.host = pD, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.MI = !1, this.sync()
      }
      setPose(DD, zD) {
        this.MI || (this.feet[0] = DD[0], this.feet[1] = DD[1], this.feet[2] = DD[2], this.yaw = zD, this.owed |= 2, this.sync())
      }
      setVisible(DD) {
        this.MI || DD === this.visible || (this.visible = DD, this.owed |= 4, this.sync())
      }
      dispose() {
        this.MI || (this.MI = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(DD) ? (this.host.settled(this, this.MI), !0) : (this.host.owes(this), !1)
      }
      write(DD) {
        if (!DD) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, ID.Qe)(DD, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const zD = (2 & this.owed ? ID.Mc.Pose : 0) | (4 & this.owed ? ID.Mc.Visible : 0);
        if (0 !== zD) {
          if (!(0, ID.Ne)(DD, 0, this.key, zD, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, ID.Je)(DD, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var oz = wD(40909);

    function az(DD, zD, wD, pD) {
      return (0, oz.d)(), (0, ID.Df)(DD, zD, wD, pD)
    }
    var uz = wD(39102),
      vz = wD(40522);
    const tz = [0, 0, 0],
      Fz = [0, 0, 0],
      Yz = [0, 0, 0],
      Hz = [0, 0, 0],
      qz = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Dw = [0, 0, 0],
      zw = [0, 0],
      ww = [1, 1, 1],
      pw = 1 / 3;
    const sw = gz.g;

    function Kw(DD) {
      const zD = gz.e[DD],
        wD = zD && gz.g[zD.mainMultiblock];
      return wD && {
        main: wD,
        x: zD.compX,
        y: zD.compY,
        z: zD.compZ
      }
    }

    function rw(DD) {
      if (null === DD || void 0 === DD) return ID.Tc;
      const zD = +DD;
      return Number.isInteger(zD) && zD >= -2147483648 && zD <= 2147483647 && String(zD) === String(DD) ? zD : ID.Tc
    }

    function Lw(DD, zD, wD) {
      return (0, ID.Lf)(DD, 0, zD, null !== wD && void 0 !== wD ? wD : Number.NaN)
    }
    class gw {
      constructor(DD) {
        this.deps = DD, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new uz.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (DD => {
          var zD, wD;
          null === (zD = (wD = this.deps).setLocalOptions) || void 0 === zD || zD.call(wD, DD)
        })), this.mobModels = new mz((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          MI: (DD, zD) => {
            this.livePools.delete(DD), null !== zD && (this.owedFrees.push(zD), this.flushOwed())
          }
        }, this.api = DD.api, this.live = DD.live, this.chunks = DD.chunks, this.items = DD.items, this.tables = DD.tables
      }
      isLocal(DD) {
        return null !== DD && void 0 !== DD && +DD === this.api.localId
      }
      assertLocal(DD, zD) {
        if (!this.isLocal(DD)) throw new Error(`Attempted to ${zD} for a player that is not the local player`)
      }
      PJ(DD) {
        const zD = this.api.PJ(DD);
        if (!zD) throw new Error(`Entity ${DD} has no replicated position`);
        return zD
      }
      checkValid(DD) {
        return !!this.deps.isSessionLive() && (null === DD || void 0 === DD || this.api.checkValid(DD))
      }
      isAlive(DD) {
        return !1 !== this.api.isAlive(DD)
      }
      getItemStat(DD, zD, wD) {
        return this.isLocal(DD) || null !== DD && "Player" === this.api.getEntityType(DD) ? this.tables.getItemStat(zD, wD) : this.tables.getDefaultItemStat(zD, wD)
      }
      getClientOption(DD, zD) {
        return this.assertLocal(DD, "get a client option"), this.tables.getClientOption(zD)
      }
      openShop(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(DD, "open shop"), rD.l.KG("showShopFromServer", {
          toggle: zD,
          es: wD
        }, !0)
      }
      sendMessage(DD, zD, wD) {
        this.assertLocal(DD, "send a message");
        const pD = "string" === typeof zD ? [{
          str: zD,
          style: wD
        }] : zD;
        rD.l.KG("chat", {
          content: pD
        }, !0)
      }
      getEntityType(DD) {
        return this.api.getEntityType(DD)
      }
      getEntityName(DD) {
        const zD = rw(DD);
        return zD === ID.Tc ? void 0 : (0, Nz.h)(this.api, zD)
      }
      hasEffect(DD, zD) {
        const wD = rw(DD);
        return wD !== ID.Tc && (0, Nz.d)(this.api, wD, zD)
      }
      getMetaInfo(DD) {
        return this.tables.getMetaInfo(DD)
      }
      getPlayerDbId(DD) {
        return this.assertLocal(DD, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(DD, zD, wD) {
        if (!this.chunks.dataCleared(DD, zD, wD)) return (0, Nz.b)(this.api, DD, zD, wD)
      }
      jT(DD, zD, wD, pD) {
        this.setBlockId(DD, zD, wD, this.tables.getItemId(pD))
      }
      setOtherEntitySetting(DD, zD, wD, pD) {
        if (!this.isLocal(DD)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(ID.gd, wD)) throw new Error(`Unknown other-entity setting ${wD}`);
        const sD = ID.gd[wD],
          KD = rw(zD);
        if (KD === ID.Tc || !this.deps.beforeWrite()) return;
        const rD = (0, lD.d)(pD);
        if (rD.length > 16384) throw new Error(`The other-entity setting ${wD}'s value is over 16384 bytes`);
        const LD = this.api.memoryView(Uint8Array, this.api.scratch(), rD.length, "set_other_entity_setting's value");
        LD && (LD.set(rD), this.api.queries.setOtherEntitySetting(KD, sD, rD.length))
      }
      getPositionView(DD) {
        return this.live.position(+DD)
      }
      readDrawnPosition(DD, zD) {
        return this.api.readDrawnPosition(rw(DD), zD)
      }
      getDrawnHeading(DD) {
        const zD = rw(DD),
          wD = (zD === ID.Tc ? 0 : this.api.queries.directorEntity(zD)) >= ID.ub.BYTES ? this.api.memoryData(this.api.scratch(), ID.ub.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!wD) return null;
        if (1 === ID.ub.headingIsDrawn(wD, 0)) return ID.ub.heading(wD, 0);
        const pD = this.api.apiView;
        return this.isLocal(DD) && 0 === (ID.v.playerFlags(pD, 0) & ID.Ad.FreeCam) ? ID.v.heading(pD, 0) : null
      }
      getLocalPlayerMovement() {
        const DD = ID.v.playerFlags(this.api.apiView, 0);
        return 0 === (DD & ID.Ad.Replay) && this.api.readDrawnPosition(this.api.localId, Yz) ? {
          onGround: 0 !== (DD & ID.Ad.OnGround),
          jumpHeld: 0 !== (DD & ID.Ad.JumpHeld)
        } : null
      }
      zwD(DD) {
        return this.isLocal(DD) ? this.items.Qg() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var DD, zD;
        return "Gun" === (null === (DD = this.aliveHeld()) || void 0 === DD || null === (zD = DD.typeObj) || void 0 === zD ? void 0 : zD.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Qg()
      }
      isCrosshairShown() {
        var DD, zD;
        const wD = (0, Az.d)(pD.e.get("crosshairGameView"), pD.e.get("crosshairShownOverride"));
        if (null !== wD) return wD;
        const sD = null === (DD = this.aliveHeld()) || void 0 === DD ? void 0 : DD.typeObj,
          KD = "Gun" === (null === sD || void 0 === sD ? void 0 : sD.type),
          rD = KD || !0 === (null === sD || void 0 === sD ? void 0 : sD.showsAimingUi),
          LD = 0 === (ID.v.playerFlags(this.api.apiView, 0) & ID.Ad.ZoomFirstPerson),
          cD = null !== (zD = this.tables.getClientOption("gunshotOrigin")) && void 0 !== zD ? zD : null;
        return (0, Az.i)({
          gun: KD,
          aimable: rD
        }, LD, (0, Uz.d)(), cD)
      }
      setCrosshairShown(DD) {
        pD.e.set({
          crosshairShownOverride: DD
        })
      }
      getInventoryFreeSlotCount(DD) {
        return this.isLocal(DD) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(DD) {
        return this.isLocal(DD) ? this.items.selectedSlot : null
      }
      getItemSlot(DD, zD) {
        return this.isLocal(DD) ? this.items.slot(zD) : null
      }
      swapInventorySlots(DD, zD) {
        return this.items.swap(DD, zD)
      }
      isPlayerCrouching(DD) {
        if (this.isLocal(DD)) return 0 !== (ID.v.playerFlags(this.api.apiView, 0) & ID.Ad.Crouching);
        const zD = rw(DD);
        return zD !== ID.Tc && 1 === this.api.queries.entityCrouching(zD)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (ID.v.playerFlags(this.api.apiView, 0) & ID.Ad.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.jDD()
      }
      getActionRay() {
        const DD = this.api.apiView;
        for (let zD = 0; zD < 3; zD++) qz.origin[zD] = ID.v.tDD(DD, 0, zD), qz.direction[zD] = ID.v.actionDir(DD, 0, zD);
        return qz
      }
      canModifyBlockAt(DD, zD, wD) {
        return 1 === this.api.queries.canModify(DD, zD, wD)
      }
      isSolidToPlayerBlockId(DD) {
        return this.tables.isSolidBlockId(DD) && !this.chunks.isWalkThrough(DD)
      }
      blockNameToBlockId(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(DD, zD)
      }
      blockIdToBlockName(DD) {
        return this.tables.nameOfId(DD)
      }
      OzD(DD, zD, wD, pD, sD) {
        return 1 === this.api.queries.terrainBlocked(pD, DD, zD, wD, rw(null !== sD && void 0 !== sD ? sD : null))
      }
      getChunkVersion(DD, zD, wD) {
        return this.chunks.version(DD, zD, wD)
      }
      scanBlocks(DD, zD, wD, pD, sD, KD, rD, LD) {
        return this.chunks.scan(DD, zD, wD, pD, sD, KD, rD, LD)
      }
      isBlockInLoadedChunk(DD, zD, wD) {
        return this.chunks.isLoaded(DD, zD, wD)
      }
      getBlockId(DD, zD, wD) {
        return this.chunks.fR(DD, zD, wD)
      }
      playSound(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(DD)) return null;
        const rD = this.playSoundFrom(zD, wD, sD, KD);
        return 1 === pD ? rD : rD.rate(pD)
      }
      preloadSounds(DD) {
        var zD, wD;
        null === (zD = (wD = this.deps).preloadSounds) || void 0 === zD || zD.call(wD, DD)
      }
      playSoundFrom(DD, zD, wD, pD) {
        var sD, KD;
        const rD = this.deps.playSound;
        if (!rD) return Pz.d;
        const LD = null === wD || void 0 === wD ? void 0 : wD.ws,
          cD = null !== (sD = null === wD || void 0 === wD ? void 0 : wD.maxHearDist) && void 0 !== sD ? sD : Rz.f,
          gD = null !== (KD = null === wD || void 0 === wD ? void 0 : wD.refDistance) && void 0 !== KD ? KD : Rz.g;
        let RD = null;
        if (Array.isArray(LD)) tz[0] = LD[0], tz[1] = LD[1], tz[2] = LD[2], RD = tz;
        else if (void 0 !== LD && null !== LD) {
          const DD = rw(LD);
          if (!this.api.isLocal(DD)) {
            if (!this.api.readPosition(DD, tz)) return Pz.d;
            RD = tz
          }
        }
        return rD(DD, zD, RD, RD && this.ear(), cD, gD, pD)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Fz)) Fz[1] += xz;
        else {
          const DD = this.api.apiView;
          if (0 === ID.v.viewProj(DD, 0, 3) && 0 === ID.v.viewProj(DD, 0, 7) && 0 === ID.v.viewProj(DD, 0, 11)) return null;
          for (let zD = 0; zD < 3; zD++) Fz[zD] = ID.v.eye(DD, 0, zD)
        }
        return Number.isFinite(Fz[0] + Fz[1] + Fz[2]) ? Fz : null
      }
      setBlockId(DD, zD, wD, pD) {
        if (!Number.isInteger(pD) || pD < 0 || pD > 65535) throw new Error(`Invalid block id ${pD}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(DD, zD, wD)) return;
        const sD = Math.floor(DD),
          KD = Math.floor(zD),
          rD = Math.floor(wD),
          LD = this.predictedCells(sD, KD, rD, pD);
        if (1 === this.api.queries.jT(sD, KD, rD, pD)) {
          for (let DD = 0; DD < LD.length; DD += 5) this.chunks.setOverlay(LD[DD], LD[DD + 1], LD[DD + 2], LD[DD + 3], 1 === LD[DD + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(DD, zD) {
        return this.deps.particles.create(DD, zD)
      }
      playParticleEffect(DD) {
        this.deps.particles.playEffect(DD)
      }
      burstParticlePreset(DD, zD, wD) {
        this.deps.particles.burstPreset(DD, zD, wD)
      }
      createGameMesh(DD, zD, wD) {
        const pD = ++this.meshKeys,
          sD = this.deps.cmd();
        if (!sD) return pD;
        const {
          look: KD,
          colour: rD
        } = function(DD) {
          switch (DD.kind) {
            case void 0:
            case "flatEmissive":
              return DD.onTop ? {
                look: ID.Xb.FlatOnTop,
                colour: [...DD.rgb, DD.alpha]
              } : DD.opaque ? {
                look: ID.Xb.FlatOpaque,
                colour: [...DD.rgb, 1]
              } : {
                look: ID.Xb.Flat,
                colour: [...DD.rgb, DD.alpha]
              };
            case "chevronPath":
              return {
                look: ID.Xb.Chevrons, colour: [...(0, fz.b)(DD.colour), DD.alpha]
              };
            case "furnaceFire":
              return {
                look: ID.Xb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(zD), LD = Math.floor(DD.positions.length / 3), cD = function(DD, zD) {
          const wD = Math.floor(DD.positions.length / 3),
            pD = DD.indices.length,
            sD = wD * (zD ? 5 : 3),
            KD = new Uint8Array(4 * (sD + pD)),
            rD = new DataView(KD.buffer);
          for (let gD = 0; gD < 3 * wD; gD++) rD.setFloat32(4 * gD, DD.positions[gD], !0);
          if (zD) {
            var LD;
            const zD = null !== (LD = DD.uvs) && void 0 !== LD ? LD : [];
            for (let DD = 0; DD < 2 * wD; DD++) {
              var cD;
              rD.setFloat32(4 * (3 * wD + DD), null !== (cD = zD[DD]) && void 0 !== cD ? cD : 0, !0)
            }
          }
          for (let gD = 0; gD < pD; gD++) rD.setUint32(4 * (sD + gD), DD.indices[gD], !0);
          return KD
        }(DD, (0, cz.h)(zD));
        return (0, ID.ue)(sD, 0, pD, KD, rD, wD, LD, DD.indices.length, cD) && this.liveMeshes.add(pD), pD
      }
      setGameMesh(DD, zD) {
        var wD;
        const pD = this.deps.cmd();
        if (!pD) return;
        let sD = 0;
        zD.anchor && (sD |= ID._b.Anchor, Dw[0] = zD.anchor[0], Dw[1] = zD.anchor[1], Dw[2] = zD.anchor[2]), void 0 !== zD.visible && (sD |= ID._b.Visible), zD.uvOffset && (sD |= ID._b.UvOffset, zw[0] = zD.uvOffset[0], zw[1] = zD.uvOffset[1]);
        const KD = null !== (wD = zD.visibility) && void 0 !== wD ? wD : 1;
        void 0 !== zD.visibility && (sD |= ID._b.Visibility), zD.scale && (sD |= ID._b.Scale, ww[0] = zD.scale[0], ww[1] = zD.scale[1], ww[2] = zD.scale[2]), 0 !== sD && (0, ID.Ae)(pD, 0, DD, sD, zD.visible ? 1 : 0, Dw, zw, KD, ww)
      }
      disposeGameMesh(DD) {
        const zD = this.deps.cmd();
        zD && !(0, ID.ye)(zD, 0, DD) || this.liveMeshes.delete(DD)
      }
      hasPackModel(DD) {
        var zD, wD, pD;
        return null !== (zD = null === (wD = (pD = this.deps).hasPackModel) || void 0 === wD ? void 0 : wD.call(pD, DD)) && void 0 !== zD && zD
      }
      disposeGameOutput() {
        const DD = DD => {
          try {
            DD()
          } catch (zD) {
            console.error("Error freeing client game output", zD)
          }
        };
        for (const zD of [...this.liveMeshes]) DD((() => {
          this.disposeGameMesh(zD)
        }));
        for (const zD of [...this.livePools]) DD((() => {
          zD.dispose()
        }));
        DD((() => {
          this.mobModels.disposeAll()
        })), DD((() => {
          this.setGroundArrowStyle(null)
        })), DD((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), DD((() => {
          this.setCrosshairShown(null)
        })), DD((() => {
          this.cameraTurn.dispose()
        })), DD((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(DD, zD) {
        const wD = this.tables.idOf(DD.item);
        if (void 0 === wD) return null;
        const pD = new yz(++this.poolKeys, {
          item: wD,
          scale: DD.scale,
          yaw: DD.yaw
        }, zD, this.poolHost);
        return this.livePools.add(pD), pD
      }
      createMobModel(DD, zD) {
        return this.mobModels.create(DD, zD)
      }
      setRouteChevrons(DD) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !DD || 0 === DD.cells.length) return;
        const zD = `${DD.colour} ${DD.alpha}`;
        zD !== this.routeLook && (this.routeLook = zD, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(DD) {
          const [zD, wD, pD] = DD[0].pos, sD = [], KD = [], rD = [];
          return DD.forEach(((DD, LD) => {
            let {
              pos: cD,
              way: [gD, RD]
            } = DD;
            const AD = cD[0] - zD + .5,
              UD = cD[1] - wD + .04,
              fD = cD[2] - pD + .5,
              [ID, BD] = [.35 * -RD, .35 * gD],
              [GD, hD] = [LD * pw, (LD + 1) * pw],
              nD = sD.length / 3;
            sD.push(AD - .5 * gD + ID, UD, fD - .5 * RD + BD), sD.push(AD - .5 * gD - ID, UD, fD - .5 * RD - BD), sD.push(AD + .5 * gD + ID, UD, fD + .5 * RD + BD), sD.push(AD + .5 * gD - ID, UD, fD + .5 * RD - BD), KD.push(0, GD, 1, GD, 0, hD, 1, hD), rD.push(nD, nD + 1, nD + 2, nD + 1, nD + 3, nD + 2)
          })), {
            positions: sD,
            uvs: KD,
            indices: rD
          }
        }(DD.cells), {
          kind: "chevronPath",
          colour: DD.colour,
          alpha: DD.alpha
        }, DD.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(DD) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(DD, 250) / 1e3 * 1.2 * pw) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(DD) {
        this.pendingStyle = DD, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const DD = this.owedFrees;
        if (0 === DD.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const zD = this.deps.cmd();
        if (!zD) return DD.length = 0, void(this.pendingFar = void 0);
        let wD = 0;
        for (; wD < DD.length && (0, ID.Ee)(zD, 0, DD[wD]);) wD++;
        DD.splice(0, wD);
        const pD = this.pendingStyle;
        if (void 0 !== pD) {
          (pD ? (0, ID.Mf)(zD, 0, pD.width, pD.alpha, 1, pD.endAtSolidFace ? 1 : 0) : (0, ID.Mf)(zD, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const sD = this.pendingFar;
        void 0 !== sD && (0, ID.If)(zD, 0, null !== sD && void 0 !== sD ? sD : 0, null === sD ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(DD, zD) {
        const wD = this.deps.cmd(),
          pD = rw(DD);
        wD && pD !== ID.Tc && (0, ID.Sf)(wD, 0, pD, zD)
      }
      setFacingTolerance(DD, zD) {
        const wD = this.deps.cmd(),
          pD = rw(DD);
        wD && pD !== ID.Tc && Lw(wD, pD, zD)
      }
      forEachEntity(DD) {
        const {
          api: zD
        } = this;
        for (let wD = 0; wD < zD.idStr.length; wD++) {
          const pD = zD.idStr[wD];
          null === pD || JD(zD.kinds[wD]) || DD(pD)
        }
      }
      getEntityInfo(DD) {
        return this.deps.entityInfo.get(DD)
      }
      isEntityInteractable(DD) {
        const zD = rw(DD);
        return zD !== ID.Tc && 1 === this.api.queries.entityInteractable(zD)
      }
      isLocalPlayer(DD) {
        return this.isLocal(DD)
      }
      getLineOwner(DD) {
        var zD;
        const wD = null === (zD = this.deps.entityInfo.get(DD)) || void 0 === zD ? void 0 : zD.meshOpts;
        if (!wD) return null;
        try {
          const {
            lineToEId: DD
          } = JSON.parse(wD);
          return null !== DD && void 0 !== DD ? DD : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const DD = this.api.apiView;
        return Hz[0] = ID.v.eye(DD, 0, 0), Hz[1] = ID.v.eye(DD, 0, 1), Hz[2] = ID.v.eye(DD, 0, 2), Hz
      }
      getCameraFar() {
        return ID.v.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(DD) {
        null !== DD && (this.farSet = !0), this.pendingFar = DD, this.flushOwed()
      }
      turnCamera(DD, zD) {
        this.cameraTurn.turn(DD, zD)
      }
      clearPickupDelay(DD) {
        const zD = this.deps.cmd(),
          wD = rw(DD);
        zD && wD !== ID.Tc && (0, ID.je)(zD, 0, wD)
      }
      sendChat(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = this.deps.sendCmd();
        wD && az(wD, 0, vz.d.Chat, (0, lD.d)((0, vz.l)({
          lg: DD,
          Wg: zD
        })))
      }
      sendCommand(DD) {
        DD.length <= 119 && this.sendChat(`/${DD}`)
      }
      predictedCells(DD, zD, wD, pD) {
        const sD = this.chunks,
          KD = [],
          rD = (DD, zD, wD, pD, sD) => {
            KD.push(DD, zD, wD, pD, this.tables.blockRootId(sD) === this.tables.blockRootId(pD) ? 0 : 1)
          },
          LD = sD.fR(DD, zD, wD),
          cD = Kw(LD);
        if (cD) {
          const [pD, KD, gD] = [DD - cD.x, zD - cD.y, wD - cD.z], RD = sw[sD.fR(pD, KD, gD)], AD = null === RD || void 0 === RD ? void 0 : RD.positions.some((DD => DD.id === LD && DD.x === cD.x && DD.y === cD.y && DD.z === cD.z));
          for (const DD of (AD && RD ? RD : cD.main).positions) sD.fR(pD + DD.x, KD + DD.y, gD + DD.z) === DD.id && rD(pD + DD.x, KD + DD.y, gD + DD.z, 0, DD.id)
        }
        const gD = Kw(pD);
        if (gD)
          for (const AD of gD.main.positions) {
            const [pD, KD, LD] = [DD + AD.x - gD.x, zD + AD.y - gD.y, wD + AD.z - gD.z];
            rD(pD, KD, LD, AD.id, sD.fR(pD, KD, LD))
          } else rD(DD, zD, wD, pD, LD);
        const RD = this.tables;
        if ((0 !== RD.attachedTopOf(LD) || 0 !== RD.attachedTopOf(pD)) && sD.isLoaded(DD, zD + 1, wD)) {
          let cD = sD.fR(DD, zD + 1, wD);
          for (let pD = 0; pD < KD.length; pD += 5) KD[pD] === DD && KD[pD + 1] === zD + 1 && KD[pD + 2] === wD && (cD = KD[pD + 3]);
          const gD = this.attachedTopWrite(LD, pD, cD);
          void 0 !== gD && rD(DD, zD + 1, wD, gD, cD)
        }
        return KD
      }
      attachedTopWrite(DD, zD, wD) {
        const pD = this.tables,
          sD = pD.attachedTopOf(DD),
          KD = pD.attachedTopOf(zD),
          rD = 0 !== sD && 0 !== wD && pD.blockRootId(wD) === pD.blockRootId(sD);
        return 0 !== sD && 0 !== KD && pD.blockRootId(DD) === pD.blockRootId(zD) ? rD && wD !== KD ? KD : void 0 : 0 === KD || !rD && 0 !== wD ? rD ? 0 : void 0 : KD
      }
    }
    const Rw = ID.ic + ID.mc * ID.tc.BYTES,
      Aw = 2147483647,
      Uw = new TextDecoder,
      fw = new TextEncoder,
      Iw = Object.freeze({
        UL: 0,
        Pr: null,
        amountAddedToSlot: 0
      }),
      Bw = new Proxy({}, {
        get: () => () => ID.dd
      });

    function Gw(DD) {
      return Number.isInteger(DD) && DD >= 0 && DD <= 65535
    }

    function hw(DD) {
      return Number.isInteger(DD) && DD >= 0 && DD <= 4294967295
    }
    class nw {
      constructor(DD) {
        this.deps = DD, this.jp = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(ID.mc), this.ids = new Uint16Array(ID.mc), this.amounts = new Uint16Array(ID.mc), this.attrRead = new Float64Array(ID.mc).fill(-1), this.stale = new Uint16Array(ID.mc), this.staleVersion = new Uint32Array(ID.mc), this.instances = new Uint32Array(ID.mc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(DD) {
        var zD;
        return Number.isInteger(DD) && DD >= 0 && DD < this.len && 0 !== this.ids[DD] && null !== (zD = this.facades[DD]) && void 0 !== zD ? zD : null
      }
      Qg() {
        return this.slot(this.selected)
      }
      playerItems() {
        const DD = [];
        for (let zD = 0; zD < Math.min(ID.od, this.len); zD++) DD.push(this.slot(zD));
        return DD
      }
      freeSlots() {
        let DD = 0;
        for (let zD = 0; zD < Math.min(ID.od - ID.i, this.len); zD++) 0 === this.ids[zD] && DD++;
        return DD
      }
      amountOf(DD) {
        let zD = 0;
        for (let pD = 0; pD < Math.min(ID.od, this.len); pD++) {
          const sD = this.slot(pD);
          var wD;
          if ((null === sD || void 0 === sD ? void 0 : sD.name) === DD) zD += null !== (wD = sD.amount) && void 0 !== wD ? wD : 1
        }
        return zD
      }
      instance(DD) {
        var zD;
        return null !== (zD = this.instances[DD]) && void 0 !== zD ? zD : 0
      }
      watch(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      touch() {
        this.version++
      }
      flush(DD) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const wD of [...this.listeners]) try {
            wD()
          } catch (zD) {
            DD(zD)
          }
        }
      }
      chestOpened(DD, zD, wD) {
        this.jp[0] = DD, this.jp[1] = zD, this.jp[2] = wD, this.version++
      }
      refresh() {
        const DD = this.deps.api.apiView,
          zD = ID.v.inventoryViewPtr(DD, 0),
          wD = ID.v.inventoryVersion(DD, 0),
          pD = ID.v.selectedSlot(DD, 0);
        pD !== this.selected && (this.selected = pD, this.version++);
        const sD = ID.v.slotIcon(DD, 0);
        if (sD !== this.slotIconId && (this.slotIconId = sD, this.iconChanged = !0), zD === this.viewPtr && wD === this.viewVersion) return;
        this.viewPtr = zD, this.viewVersion = wD;
        const KD = this.deps.api.memoryData(zD, Rw, 4, "the inventory view"),
          rD = KD ? Math.min(KD.getUint32(0, !0), ID.mc) : 0;
        rD !== this.len && (this.len = rD, this.version++);
        let LD = 0;
        for (let cD = 0; cD < ID.mc; cD++) {
          const DD = ID.ic + cD * ID.tc.BYTES,
            zD = null !== KD && cD < rD ? ID.tc.item(KD, DD) : 0;
          if (0 === zD || null === KD) {
            0 !== this.ids[cD] && (this.ids[cD] = 0, this.attrRead[cD] = -1, this.instances[cD]++, this.version++);
            continue
          }
          const wD = ID.tc.amount(KD, DD),
            pD = ID.tc.attrVersion(KD, DD);
          zD === this.ids[cD] && wD === this.amounts[cD] || this.fill(cD, zD, wD), pD !== this.attrRead[cD] && (this.stale[LD] = cD, this.staleVersion[LD] = pD, LD++)
        }
        LD > 0 && this.fetchAttributes(LD)
      }
      fill(DD, zD, wD) {
        const {
          tables: pD
        } = this.deps, sD = zD !== this.ids[DD];
        let KD = this.facades[DD];
        KD || (KD = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[DD] = KD), sD && (KD.name = pD.nameOfId(zD), KD.typeObj = pD.itemType(zD), KD.attributes = {
          customAttributes: {}
        }, this.attrRead[DD] = -1, this.instances[DD]++), KD.amount = 0 === wD ? null : wD, this.ids[DD] = zD, this.amounts[DD] = wD, this.version++
      }
      fetchAttributes(DD) {
        const {
          api: zD,
          onError: wD
        } = this.deps, pD = zD.memoryView(Uint16Array, zD.scratch(), DD, "item_attributes_batch's slots");
        if (!pD) return void this.markRead(DD);
        pD.set(this.stale.subarray(0, DD));
        const sD = zD.queries.itemAttributesBatch(DD),
          KD = 4294967295 === sD ? null : zD.memoryData(zD.scratch(), sD, 4, "item_attributes_batch's answer");
        if (!KD) return void this.markRead(DD);
        const rD = new Uint8Array(KD.buffer, KD.byteOffset, sD);
        for (let cD = 0; cD + 8 <= sD;) {
          const DD = KD.getUint16(cD, !0),
            zD = KD.getUint32(cD + 4, !0),
            pD = rD.subarray(cD + 8, cD + 8 + zD);
          cD += 8 + (0, UD.we)(zD);
          const sD = this.facades[DD];
          if (sD && 0 !== this.ids[DD] && 0 !== zD) {
            try {
              sD.attributes = JSON.parse(Uw.decode(pD))
            } catch (LD) {
              wD(LD)
            }
            this.version++
          }
        }
        this.markRead(DD)
      }
      markRead(DD) {
        for (let zD = 0; zD < DD; zD++) this.attrRead[this.stale[zD]] = this.staleVersion[zD]
      }
      swap(DD, zD) {
        return Gw(DD) && Gw(zD) && this.settle(this.queries().invSwap(DD, zD))
      }
      move(DD, zD, wD) {
        return Gw(DD) && Gw(zD) && hw(wD) && this.settle(this.queries().invMove(DD, zD, wD))
      }
      quickMove(DD, zD, wD, pD) {
        var sD, KD;
        if (!Gw(DD) || !Gw(zD) || !Gw(wD) || null !== pD && !hw(pD)) return null;
        const rD = this.queries().invQuickMove(DD, zD, wD, null === pD ? -1 : Math.min(pD, Aw)),
          LD = rD === ID.dd ? ID.Gb : null !== (sD = null === (KD = this.extras()) || void 0 === KD ? void 0 : KD[1]) && void 0 !== sD ? sD : ID.Gb;
        return this.settle(rD), LD === ID.Gb ? null : LD
      }
      remove(DD, zD, wD) {
        return Gw(DD) && hw(zD) && this.settle(this.queries().invRemove(DD, zD, wD ? 1 : 0))
      }
      selectSlot(DD) {
        return Gw(DD) && this.settle(this.queries().selectSlot(DD))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(DD, zD, wD) {
        if (!Gw(DD) || !Number.isInteger(zD)) return !1;
        const [pD, sD, KD] = wD;
        return this.settle(this.queries().invEnchant(DD, zD, Math.floor(pD), Math.floor(sD), Math.floor(KD)))
      }
      craft(DD, zD, wD) {
        let pD;
        try {
          pD = this.deps.tables.getItemId(DD)
        } catch {
          return Iw
        }
        if (!Gw(zD) || null !== wD && (Number.isNaN(wD) || wD < 0)) return Iw;
        const sD = null === wD || wD > Aw ? -1 : Math.floor(wD),
          KD = this.queries().craft(pD, zD, sD);
        let rD = Iw;
        const LD = KD === ID.dd ? null : this.extras();
        if (LD) {
          const [DD, zD, wD] = LD;
          rD = {
            UL: DD,
            Pr: zD === ID.Gb ? null : zD,
            amountAddedToSlot: wD
          }
        }
        return this.settle(KD), rD
      }
      salvage(DD, zD, wD) {
        let pD;
        try {
          pD = this.deps.tables.getItemId(zD)
        } catch {
          return !1
        }
        return Gw(DD) && Number.isInteger(wD) && this.settle(this.queries().salvage(DD, pD, Math.max(Math.min(wD, Aw), -Aw)))
      }
      craftingView(DD, zD, wD) {
        var pD;
        if (this.stopped) return null;
        const {
          api: sD,
          onError: KD
        } = this.deps, rD = DD ? fw.encode(DD) : null;
        if (null !== rD) {
          if (rD.length > 1024) return KD(new Error(`The crafting station ${DD}'s name is over 1024 bytes`)), null;
          const zD = sD.memoryView(Uint8Array, sD.scratch(), rD.length, "crafting_view's station");
          if (!zD) return null;
          zD.set(rD)
        }
        const LD = Gw(zD) && Gw(wD),
          cD = sD.queries.craftingView(null !== (pD = null === rD || void 0 === rD ? void 0 : rD.length) && void 0 !== pD ? pD : 0, LD ? zD : 0, LD ? wD : 0);
        return cD < ID.nb.BYTES ? (sD.reportCorruption(`crafting_view's answer of ${cD} bytes`), null) : sD.memoryData(sD.scratch(), cD, 1, "crafting_view's answer")
      }
      queries() {
        var DD, zD;
        return !1 === (null === (DD = (zD = this.deps).beforeOp) || void 0 === DD ? void 0 : DD.call(zD)) ? (this.stopped = !0, Bw) : this.deps.api.queries
      }
      extras() {
        const {
          api: DD
        } = this.deps;
        return DD.memoryView(Uint32Array, DD.scratch(), 3, "a sync query's extra words")
      }
      settle(DD) {
        if (DD === ID.bd)(0, oz.d)();
        else if (DD !== ID.dd) {
          const zD = this.deps.cmd();
          zD && function(DD, zD, wD) {
            return (0, oz.d)(), (0, ID.$f)(DD, zD, wD)
          }(zD, 0, DD) || this.deps.onError(new Error(`Sync op ${DD}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), DD !== ID.dd
      }
    }
    const Mw = 1 / .6,
      Ow = [0, 1, 0],
      Jw = [0, 0, 0],
      Ew = new Uint8Array(0),
      Qw = 1.2 * Iz.f.mG,
      Xw = new TextEncoder,
      Vw = [0, 0, 0],
      Pw = [0, 0, 0],
      Cw = new Map;

    function xw(DD) {
      let zD = Cw.get(DD);
      return zD || (Cw.size >= 64 && Cw.clear(), zD = Xw.encode(`{"emitRate":${DD}}`), Cw.set(DD, zD)), zD
    }

    function Tw(DD) {
      return Number.isFinite(DD) && DD > 0 ? DD : 0
    }

    function bw(DD, zD) {
      for (let wD = 0; wD < 3; wD++) {
        const pD = Math.abs(zD[wD]);
        Vw[wD] = DD[wD] - pD, Pw[wD] = 2 * pD
      }
      return Number.isFinite(Vw[0] + Vw[1] + Vw[2] + Pw[0] + Pw[1] + Pw[2])
    }

    function jw(DD, zD) {
      return "pos1" === DD || "pos2" === DD ? void 0 : zD
    }

    function dw(DD, zD, wD) {
      return DD.length > ID.wd.MaxOpts ? (wD(new Error(`${zD}'s particle opts are over ${ID.wd.MaxOpts} bytes of JSON`)), null) : DD
    }
    const Sw = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class iw {
      constructor(DD) {
        this.deps = DD, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(DD, zD) {
        var wD;
        const pD = this.sink(),
          sD = null !== (wD = zD.half) && void 0 !== wD ? wD : Jw;
        if (!pD || this.live >= ID.wd.MaxLiveKeys || this.nextKey > ID.wd.MaxKey || !bw(zD.pos, sD)) return Sw;
        const KD = this.nextKey,
          rD = dw(function(DD) {
            var zD, wD, pD;
            const sD = JSON.stringify({
              texture: "string" === typeof DD.texture ? DD.texture : "smokePuff",
              bA: DD.bA,
              minLifeTime: DD.minLifeTime,
              maxLifeTime: DD.maxLifeTime,
              minSize: DD.minSize,
              maxSize: DD.maxSize,
              minEmitPower: DD.minEmitPower,
              maxEmitPower: DD.maxEmitPower,
              emitRate: Tw(DD.emitRate),
              gravity: null !== (zD = DD.gravity) && void 0 !== zD ? zD : Jw,
              dir1: null !== (wD = DD.dir1) && void 0 !== wD ? wD : Ow,
              dir2: null !== (pD = DD.dir2) && void 0 !== pD ? pD : Ow,
              colorGradients: DD.colorGradients,
              blendMode: DD.blendMode
            });
            return Xw.encode(sD)
          }(DD), "createParticles", this.deps.onError);
        return rD && (0, ID.af)(pD, 0, KD, 0, ID.wd.PresetNone, 0, Vw, Pw, rD) ? (this.nextKey++, this.live++, this.started = !0, new lw(this, this.session, KD, DD, sD)) : Sw
      }
      playEffect(DD) {
        const zD = this.sink(),
          {
            pos1: wD,
            pos2: pD
          } = DD;
        if (!zD || !wD || !pD) return;
        for (let KD = 0; KD < 3; KD++) Vw[KD] = Math.min(wD[KD], pD[KD]), Pw[KD] = Math.abs(pD[KD] - wD[KD]);
        if (!Number.isFinite(Vw[0] + Vw[1] + Vw[2] + Pw[0] + Pw[1] + Pw[2])) return;
        const sD = dw(Xw.encode(JSON.stringify(DD, jw)), "playParticleEffect", this.deps.onError);
        sD && (0, ID.We)(zD, 0, 0, ID.wd.PresetNone, ID.wd.HasBox, 0, Vw, Pw, sD)
      }
      burstPreset(DD, zD, wD) {
        const pD = this.sink(),
          sD = Math.min(Math.floor(wD), ID.wd.MaxBurst);
        if (!pD || !Object.hasOwn(ID.ac, DD) || !(sD > 0)) return;
        const KD = Qw;
        for (let rD = 0; rD < 3; rD++) Vw[rD] = zD[rD] - KD / 2, Pw[rD] = KD;
        Number.isFinite(Vw[0] + Vw[1] + Vw[2]) && (0, ID.We)(pD, 0, 0, ID.ac[DD], ID.wd.HasBox, sD, Vw, Pw, Ew)
      }
      sessionEnded() {
        this.session++;
        const DD = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !DD || (0, ID.df)(DD, 0)
      }
      sinkFor(DD) {
        return DD === this.session ? this.deps.cmd() : null
      }
      stop(DD, zD) {
        const wD = this.sinkFor(DD);
        wD && (0, ID.gf)(wD, 0, zD) && this.live--
      }
    }
    class lw {
      constructor(DD, zD, wD, pD, sD) {
        this.owner = DD, this.session = zD, this.key = wD, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(sD[0]), Math.abs(sD[1]), Math.abs(sD[2])], this.rate = Tw(pD.emitRate), this.emitted = this.rate > 0;
        const KD = pD.maxLifeTime * Mw * 1e3 + 250;
        this.stopDelayMs = KD >= 0 ? Math.min(KD, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(DD, zD) {
        const wD = this.sink();
        if (wD) {
          if (zD)
            for (let DD = 0; DD < 3; DD++) this.half[DD] = Math.abs(zD[DD]);
          bw(DD, this.half) && (0, ID.kf)(wD, 0, this.key, ID.wd.HasBox, Vw, Pw, Ew)
        }
      }
      setEmitRate(DD) {
        const zD = this.sink(),
          wD = Tw(DD);
        zD && wD !== this.rate && (0, ID.kf)(zD, 0, this.key, 0, Jw, Jw, xw(wD)) && (this.rate = wD, this.emitted ||= wD > 0)
      }
      emit(DD) {
        const zD = this.sink(),
          wD = Math.min(Math.floor(DD), ID.wd.MaxBurst);
        zD && wD > 0 && (0, ID.We)(zD, 0, this.key, ID.wd.PresetNone, 0, wD, Jw, Jw, Ew) && (this.emitted = !0)
      }
      emitPoints(DD, zD, wD) {
        const pD = this.sink(),
          sD = Math.min(Math.floor(wD), ID.wd.MaxPoints, Math.floor(zD.length / 4));
        if (!pD || !(sD > 0) || !Number.isFinite(DD[0] + DD[1] + DD[2])) return;
        const KD = new Uint8Array(zD.buffer, zD.byteOffset, sD * ID.wd.PointBytes);
        (0, ID.Ze)(pD, 0, this.key, sD, DD, KD) && (this.emitted = !0)
      }
      setDirections(DD, zD) {
        const wD = this.sink();
        if (!wD || !Number.isFinite(DD[0] + DD[1] + DD[2] + zD[0] + zD[1] + zD[2])) return;
        const pD = Xw.encode(JSON.stringify({
          dir1: [DD[0], DD[1], DD[2]],
          dir2: [zD[0], zD[1], zD[2]]
        }));
        (0, ID.kf)(wD, 0, this.key, 0, Jw, Jw, pD)
      }
      stop() {
        const DD = this.sink();
        this.stopped = !0, DD && (this.emitted ? (this.rate > 0 && (0, ID.kf)(DD, 0, this.key, 0, Jw, Jw, xw(0)), setTimeout((() => {
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
    const Ww = kz.p,
      Nw = new TextDecoder;

    function Zw(DD, zD) {
      const {
        serverIds: wD,
        kinds: pD
      } = DD;
      let sD = 0;
      for (let KD = 0; KD < wD.length; KD++) {
        const DD = wD[KD];
        if (DD !== ID.Tc && !JD(pD[KD])) {
          if (sD === zD.length) {
            const DD = new Int32Array(Math.max(64, 2 * sD));
            DD.set(zD), zD = DD
          }
          zD[sD++] = DD
        }
      }
      return {
        ids: zD,
        count: sD
      }
    }

    function yw(DD, zD) {
      return DD.length >= zD ? DD : new Int32Array(Math.max(zD, 2 * DD.length))
    }

    function kw(DD, zD, wD, pD) {
      for (let sD = 0; sD < wD; sD += 4096) {
        const KD = Math.min(4096, wD - sD),
          rD = DD.memoryView(Int32Array, DD.scratch(), KD, "entity_info_batch's ids");
        if (!rD) return !1;
        rD.set(zD.subarray(sD, sD + KD));
        const LD = DD.queries.entityInfoBatch(KD),
          cD = 4294967295 === LD ? null : DD.memoryData(DD.scratch(), LD, 4, "entity_info_batch's records");
        if (!cD) return !1;
        for (let DD = 0; DD + ID.Qb.BYTES <= LD;) {
          const zD = ID.Qb.len(cD, DD);
          pD(ID.Qb.serverId(cD, DD), mw(cD, DD, zD)), DD += ID.Qb.BYTES + (0, UD.we)(zD)
        }
      }
      return !0
    }

    function mw(DD, zD, wD) {
      var pD, sD, KD;
      const rD = ID.Qb.kind(DD, zD),
        LD = 0 === rD ? null : ED(rD);
      if (null === LD) return null;
      const cD = ID.Qb.variation(DD, zD),
        gD = ID.Qb.pose(DD, zD),
        RD = ID.Qb.meta(DD, zD),
        AD = ID.Qb.mesh(DD, zD),
        UD = 0 !== (ID.Qb.flags(DD, zD) & ID.Nb.HasOpts),
        fD = Ww[LD];
      return Object.freeze({
        type: LD,
        variation: cD === ID._c ? void 0 : null !== (pD = null !== (sD = null === fD || void 0 === fD ? void 0 : fD[cD]) && void 0 !== sD ? sD : null === fD || void 0 === fD ? void 0 : fD[0]) && void 0 !== pD ? pD : "default",
        pose: gD === ID.hc ? void 0 : null !== (KD = ID.Eb[gD]) && void 0 !== KD ? KD : ID.Eb[0],
        metaInfo: RD === ID.hc ? void 0 : ID.Jc[RD],
        meshKind: AD === ID.hc ? void 0 : ID.Ic[AD],
        meshOpts: UD ? Nw.decode(new Uint8Array(DD.buffer, DD.byteOffset + zD + ID.Qb.BYTES, wD)) : void 0
      })
    }
    const ew = 1,
      ow = 2;
    class aw {
      constructor(DD) {
        this.deps = DD, this.wanted = 0, this.Qg = !1, this.refused = !1
      }
      get on() {
        return this.Qg
      }
      want(DD, zD) {
        this.wanted = zD ? this.wanted | DD : this.wanted & ~DD;
        const wD = 0 !== this.wanted;
        if (wD === this.Qg) return;
        const pD = this.deps.cmd();
        null !== pD ? (0, ID.cg)(pD, 0, wD ? 1 : 0) ? (this.Qg = wD, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Qg = !1
      }
    }
    class uw {
      constructor(DD) {
        this.deps = DD, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(DD) {
        var zD;
        return this.complete || this.fill(), null !== (zD = this.entries.get("string" === typeof DD ? DD : String(DD))) && void 0 !== zD ? zD : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(DD) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const DD = new Int32Array(2 * this.pending.length);
            DD.set(this.pending), this.pending = DD
          }
          this.pending[this.pendingCount++] = DD
        }
      }
      removed(DD) {
        this.entries.size > 0 && this.entries.delete(String(DD))
      }
      refresh() {
        const DD = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (DD > 0 && this.complete) {
          const {
            api: zD
          } = this.deps;
          let wD = 0;
          const pD = this.ids = yw(this.ids, DD);
          for (let sD = 0; sD < DD; sD++) {
            const DD = this.pending[sD],
              KD = zD.indexById.get(DD);
            void 0 === KD || JD(zD.kinds[KD]) ? this.entries.delete(String(DD)) : pD[wD++] = DD
          }
          wD > 0 && !this.batch(pD, wD) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(ew, !1)
      }
      fill() {
        const {
          api: DD
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: DD
          } = this.deps, zD = DD.on;
          DD.want(ew, !0), !zD && DD.on && (this.refill = this.midFrame)
        }
        const {
          ids: zD,
          count: wD
        } = Zw(DD, this.ids);
        this.ids = zD, wD > 0 && !this.batch(zD, wD) && (this.refill = !0)
      }
      batch(DD, zD) {
        return kw(this.deps.api, DD, zD, ((DD, zD) => {
          null === zD ? this.entries.delete(String(DD)) : this.entries.set(String(DD), zD)
        }))
      }
    }
    var vw = wD(4820);

    function tw(DD) {
      if ("message" !== DD.type || DD.lg !== vw.ec.NewClientOptions || DD.payloadKind !== UD.pc.Msgpack) return null;
      const zD = (0, lD.b)(DD.payload);
      if (null === zD || "object" !== typeof zD || Array.isArray(zD)) throw new Error("NewClientOptions whose body isn't an object of options");
      return zD
    }
    var Fw = wD(1245),
      Yw = wD(36593);

    function Hw(DD, zD, wD, pD, sD, KD, LD) {
      var cD, gD, RD;
      switch (DD) {
        case ID.Xd.ToggleMenu: {
          const DD = ID.K[zD];
          rD.l.KG("toggleMenu", void 0 === DD ? "inventory" : `inventory|${DD}`);
          break
        }
        case ID.Xd.EditBoard:
          rD.l.KG("EditBoard", {
            pos: 0 === zD ? null : wD
          });
          break;
        case ID.Xd.EditCodeBlock:
        case ID.Xd.ViewCodeBlock:
          rD.l.KG("EditCodeBlock", {
            pos: wD,
            canChangePos: DD === ID.Xd.EditCodeBlock
          });
          break;
        case ID.Xd.EditCustomLobbyBlock:
          rD.l.KG("EditCustomLobbyBlock", {
            pos: wD
          });
          break;
        case ID.Xd.OpenIronChest:
          rD.l.KG("OpenIronChest", {
            pos: wD
          });
          break;
        case ID.Xd.EditNameTag:
          rD.l.KG("EditNameTag", null !== (cD = null === (gD = sD.Qg()) || void 0 === gD || null === (RD = gD.attributes.customAttributes) || void 0 === RD ? void 0 : RD.text) && void 0 !== cD ? cD : "");
          break;
        case ID.Xd.EditBook: {
          var AD, UD, BD;
          const DD = null === (AD = sD.Qg()) || void 0 === AD ? void 0 : AD.attributes;
          rD.l.KG("EditBook", {
            pages: (0, Fw.V)(null === DD || void 0 === DD || null === (UD = DD.customAttributes) || void 0 === UD ? void 0 : UD.pages),
            title: null !== (BD = null === DD || void 0 === DD ? void 0 : DD.customDisplayName) && void 0 !== BD ? BD : "Title",
            isPublished: !(null === DD || void 0 === DD || !DD.customDescription)
          });
          break
        }
        case ID.Xd.CantChangeBlock:
          ! function(DD, zD) {
            const wD = zD.getClientOption("cantChangeError"),
              pD = zD.getClientOption(DD ? "cantBuildError" : "cantBreakError"),
              sD = DD ? wD : pD;
            (zD.getClientOption("canChange") || sD || "You cannot modify this block" !== wD) && rD.l.KG("showBottomMessage", {
              message: pD || wD,
              type: "Error"
            })
          }(1 === zD, KD);
          break;
        case ID.Xd.MiddleBarStart:
          rD.l.KG("middleScreenBarInitiate", {
            duration: pD,
            vp: 1 === wD[0],
            horizBarRemOffset: zD
          });
          break;
        case ID.Xd.MiddleBarStop:
          rD.l.KG("middleScreenBarRemove");
          break;
        case ID.Xd.Hitmarker:
          rD.l.KG("localGunHitmarker", {
            Qp: 1 === zD
          });
          break;
        case ID.Xd.ShotsLeft:
          rD.l.KG("localPlayerNewShotsLeft", pD);
          break;
        case ID.Xd.AimingOverlay:
          rD.l.KG("aimingOverlay", 3 === (3 & zD) ? "sniper" : "none");
          break;
        case ID.Xd.BottomMessage:
          rD.l.KG("showBottomMessage", JSON.parse(LD()));
          break;
        case ID.Xd.Crosshair:
          sD.inaccuracy = (0, WD.g)(pD), (0, Yw.e)().crosshairAccuracy(sD.inaccuracy);
          break;
        case ID.Xd.ChargeStage:
          break;
        case ID.Xd.EmoteWheelClose:
          rD.l.KG("requestEmoteWheelClose");
          break;
        case ID.Xd.BlockMined:
          rD.l.KG("localBlockMined");
          break;
        default:
          throw new fD.b(`UiEvent of no kind: what ${DD}`)
      }
    }
    var qw = wD(37978),
      Dp = wD(34211),
      zp = wD(1969),
      wp = wD(36759),
      pp = wD(34218),
      sp = wD(4800);
    const Kp = 10,
      rp = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      Lp = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      cp = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function gp(DD, zD) {
      let wD, pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const KD = () => (wD = (0, zp.p)(wD, zD()), wD);
      return {
        current: KD,
        watch(zD) {
          const wD = () => {
              zD(KD())
            },
            rD = [DD.watch(wD)];
          return null !== pD && rD.push((0, zp.r)((DD => {
            DD.some(pD) && wD()
          }))), null !== sD && rD.push(sD(wD)), () => {
            for (const DD of rD) DD()
          }
        }
      }
    }

    function Rp(DD) {
      return DD && {
        name: DD.name,
        amount: DD.amount,
        attributes: DD.attributes
      }
    }
    const Ap = new WeakMap;

    function Up(DD) {
      let zD = Ap.get(DD);
      return void 0 === zD && (zD = (0, pp.creativeItemIds)().map((zD => ({
        name: DD.nameOfId(zD),
        amount: DD.isStackableId(zD) ? 1 : null,
        attributes: (0, qw.b)("Gun" === (0, pp.itemTypeOf)(zD) ? {
          type: "Gun",
          clipSize: (0, pp.clipSizeOf)(zD)
        } : void 0)
      }))), Ap.set(DD, zD)), zD
    }

    function fp(DD, zD, wD, pD) {
      const sD = zD => (DD.flush(pD), zD),
        KD = wD => {
          var pD, sD, KD, rD, LD, cD, gD;
          const RD = DD.slot(wD);
          if (!RD) return null;
          const {
            rootName: AD,
            metaStr: UD
          } = zD.getMetaInfo(RD.name);
          return {
            name: RD.name,
            amount: RD.amount,
            attributes: RD.attributes,
            instance: DD.instance(wD),
            displayName: null !== (pD = RD.attributes.customDisplayName) && void 0 !== pD ? pD : zD.getDisplayName(AD),
            requiresAmmo: "RequiresAmmo" === UD,
            clipSize: null !== (sD = null !== (KD = null === (rD = RD.attributes.customAttributes) || void 0 === rD || null === (LD = rD.gunStats) || void 0 === LD ? void 0 : LD.clipSize) && void 0 !== KD ? KD : null === (cD = zD.getGunStats(AD)) || void 0 === cD ? void 0 : cD.clipSize) && void 0 !== sD ? sD : null === (gD = RD.typeObj) || void 0 === gD ? void 0 : gD.clipSize
          }
        },
        LD = function(DD, zD) {
          let wD = null,
            pD = {
              focus: null,
              recipes: [],
              detail: null
            },
            sD = -1;
          const KD = new Set;
          return {
            read() {
              var KD, rD;
              if (null === wD) return null !== pD.focus && (pD = {
                ...pD,
                focus: null
              }), pD;
              if (pD.focus === wD && sD === DD.changes) return pD;
              if (sD = DD.changes, 0 === DD.length) return pD = {
                focus: wD,
                recipes: [],
                detail: null
              }, pD;
              let LD = 0;
              if (null !== wD.recipe) try {
                LD = zD.getItemId(wD.recipe.name)
              } catch {}
              const cD = DD.craftingView(wD.station, LD, null !== (KD = null === (rD = wD.recipe) || void 0 === rD ? void 0 : rD.AL) && void 0 !== KD ? KD : 0);
              return pD = null === cD ? {
                focus: wD,
                recipes: [],
                detail: null
              } : function(DD, zD, wD) {
                let pD = ID.nb.BYTES;
                const sD = [];
                for (let RD = ID.nb.recipes(DD, 0); RD > 0; RD--) {
                  const wD = ID.gb.flags(DD, pD),
                    KD = {
                      name: zD.nameOfId(ID.gb.item(DD, pD)),
                      AL: ID.gb.recipe(DD, pD),
                      requires: [],
                      produces: ID.gb.produces(DD, pD),
                      haveIngredients: 0 !== (wD & ID.cb.HaveIngredients),
                      listed: 0 !== (wD & ID.cb.Listed)
                    };
                  let rD = ID.gb.requires(DD, pD);
                  for (pD += ID.gb.BYTES; rD > 0; rD--) {
                    const wD = ID.hb.items(DD, pD);
                    KD.requires.push({
                      items: Gp(DD, pD + ID.hb.BYTES, wD, zD),
                      amt: ID.hb.amount(DD, pD)
                    }), pD += ID.hb.BYTES + 2 * wD
                  }
                  sD.push(KD)
                }
                const KD = ID.nb.flags(DD, 0);
                if (null === wD.recipe || 0 === (KD & ID.jb.Detail)) return {
                  focus: wD,
                  recipes: sD,
                  detail: null
                };
                const rD = {},
                  LD = {};
                for (let RD = ID.nb.ingredients(DD, 0); RD > 0; RD--) {
                  const wD = ID._.item(DD, pD),
                    sD = ID._.from(DD, pD),
                    KD = ID._.amount(DD, pD);
                  pD += ID._.BYTES;
                  const cD = sD === ID.G ? null : Gp(DD, pD, sD, zD);
                  if (null !== cD && (pD += 2 * sD), 0 === wD) continue;
                  const gD = zD.nameOfId(wD);
                  rD[gD] = KD, null !== cD && (LD[gD] = cD)
                }
                const {
                  name: cD,
                  AL: gD
                } = wD.recipe;
                return {
                  focus: wD,
                  recipes: sD,
                  detail: {
                    name: cD,
                    AL: gD,
                    craftAllTimes: ID.nb.craftAllTimes(DD, 0),
                    roomForOne: 0 !== (KD & ID.jb.RoomForOne),
                    resultStackable: Boolean(zD.getItemStat(cD, "stackable")),
                    amounts: rD,
                    ingredientsCraftedFrom: LD
                  }
                }
              }(cD, zD, wD), pD
            },
            setFocus(DD) {
              wD = DD;
              for (const zD of [...KD]) zD()
            },
            watchFocus: DD => (KD.add(DD), () => {
              KD.delete(DD)
            })
          }
        }(DD, zD);
      return {
        states: {
          inventory: gp(DD, (() => {
            const wD = DD.length;
            if (0 === wD) return rp;
            const pD = [];
            for (let zD = 0; zD < ID.od; zD++) pD.push(Rp(DD.slot(zD)));
            const sD = DD.slotIcon,
              KD = pD[DD.selectedSlot];
            0 !== sD && KD && (pD[DD.selectedSlot] = {
              ...KD,
              icon: zD.nameOfId(sD)
            });
            const rD = !0 === zD.getClientOption("creative");
            let LD = [],
              cD = null;
            if (wD > ID.od) {
              for (let zD = ID.od; zD < wD; zD++) LD.push(Rp(DD.slot(zD)));
              cD = {
                type: null,
                pos: [...DD.jp],
                numSlots: wD - ID.od,
                ironChest: null
              }
            } else rD && (LD = Up(zD));
            return {
              player: pD,
              chestOrCreative: LD,
              chest: cD,
              creative: rD,
              selectedSlot: DD.selectedSlot,
              freeSlots: DD.freeSlots()
            }
          }), (0, zp.j)("creative")),
          hotbar: gp(DD, (() => {
            if (0 === DD.length) return Lp;
            const zD = [];
            for (let DD = 0; DD < Kp; DD++) zD.push(KD(DD));
            return {
              items: zD,
              ammo: DD.amountOf("Ammo"),
              selectedSlot: DD.selectedSlot
            }
          }), (0, zp.i)("DisplayName", "GunStats")),
          crafting: gp(DD, LD.read, null, LD.watchFocus),
          heldItemAim: gp(DD, (() => {
            var zD;
            if (!wD()) return cp;
            const pD = null === (zD = DD.Qg()) || void 0 === zD ? void 0 : zD.typeObj,
              sD = "Gun" === (null === pD || void 0 === pD ? void 0 : pD.type);
            return {
              gun: sD,
              aimable: sD || !0 === (null === pD || void 0 === pD ? void 0 : pD.showsAimingUi),
              chargeName: "Chargeable" === (null === pD || void 0 === pD ? void 0 : pD.type) ? pD.name : null
            }
          }), null, (DD => function(DD, zD) {
            let wD = DD();
            return (0, sp.v)((() => {
              const pD = DD();
              pD !== wD && (wD = pD, zD(pD))
            }))
          }(wD, DD)))
        },
        events: {
          hotbarSlotRequested: (0, zp.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, zp.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, zp.b)("numkeyPressed"),
          inventoryDropRequested: (0, zp.b)("DropInvenItem"),
          chestToggled: (0, zp.b)("chestToggleFromServer"),
          chestRefreshed: (0, zp.b)("chestRefreshedFromServer", Bp),
          inventorySynced: (0, zp.b)("syncedInvenFromServer", Bp),
          enchantingTableOpened: (0, zp.b)("enchantingTable", (DD => {
            let {
              position: wD,
              fR: pD
            } = DD;
            return {
              position: [...wD],
              blockName: zD.getMetaInfo(pD).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(zD) {
            DD.selectSlot(zD), DD.flush(pD)
          },
          removeInventoryItem(zD) {
            let {
              slot: wD,
              amount: pD,
              drop: KD
            } = zD;
            return sD(DD.remove(wD, pD, KD))
          },
          swapInventorySlots(zD) {
            let {
              a: wD,
              b: pD
            } = zD;
            return sD(DD.swap(wD, pD))
          },
          moveInventoryItem(zD) {
            let {
              from: wD,
              to: pD,
              amount: KD
            } = zD;
            return sD(DD.move(wD, pD, KD))
          },
          quickMoveInventoryItem(zD) {
            let {
              slot: wD,
              start: pD,
              end: KD,
              amount: rD
            } = zD;
            return sD(DD.quickMove(wD, pD, KD, rD))
          },
          closeChest() {
            DD.closeChest(), DD.flush(pD), rD.l.KG("chestClosedByPlayer")
          },
          focusCrafting(DD) {
            LD.setFocus(DD)
          },
          craftRecipe(zD) {
            let {
              name: wD,
              AL: pD,
              times: KD
            } = zD;
            return sD(DD.craft(wD, pD, KD))
          },
          salvageItem(zD) {
            let {
              slot: wD,
              name: pD,
              amount: KD
            } = zD;
            return sD(DD.salvage(wD, pD, KD))
          },
          enchantItem(zD) {
            let {
              slot: wD,
              level: pD,
              tablePos: sD
            } = zD;
            DD.enchant(wD, pD, sD)
          }
        },
        queries: {
          enchantingOffer(wD) {
            let {
              slot: pD,
              blockName: sD
            } = wD;
            return function(DD, zD, wD, pD) {
              const sD = DD.slot(wD);
              if (!sD || !zD.getClientOption("canCraft") || !(0, Dp.n)(pD) || (0, Dp.m)(sD.attributes)) return Ip;
              const KD = (0, pp.enchantmentPerksOf)(zD.getItemId(sD.name));
              if (0 === KD.length) return Ip;
              const rD = [];
              for (let LD = 0; LD < wp.c; LD++) {
                const {
                  commonProb: DD,
                  uncommonProb: zD,
                  rareProb: wD,
                  epicProb: sD,
                  legendaryProb: KD,
                  level: cD
                } = (0, Dp.h)(pD, LD);
                rD.push({
                  level: cD,
                  odds: [DD, zD, wD, sD, KD].map((DD => 100 * DD))
                })
              }
              return {
                perks: [...KD],
                options: rD
              }
            }(DD, zD, pD, sD)
          }
        }
      }
    }
    const Ip = Object.freeze({
      perks: [],
      options: []
    });

    function Bp() {
      return null
    }

    function Gp(DD, zD, wD, pD) {
      const sD = [];
      for (let KD = 0; KD < wD; KD++) {
        const wD = DD.getUint16(zD + 2 * KD, !0);
        0 !== wD && sD.push(pD.nameOfId(wD))
      }
      return sD
    }
    class hp {
      constructor(DD) {
        this.api = DD, this.positions = new Map, this.targeted = {
          W8: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          sG: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(DD) {
        let zD = this.positions.get(DD);
        return zD || (this.api.checkValid(DD) || this.api.isLocal(DD) ? (zD = [NaN, NaN, NaN], this.api.readPosition(DD, zD), this.positions.set(DD, zD), zD) : null)
      }
      jDD() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [zD, wD] of this.positions) this.api.readPosition(zD, wD) || this.api.checkValid(zD) || this.api.isLocal(zD) || this.positions.delete(zD);
        const DD = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (ID.v.playerFlags(DD, 0) & ID.Ad.Breaking) && ID.v.breakingProgress(DD, 0) >= 0, this.isBreaking)
          for (let zD = 0; zD < 3; zD++) this.breaking[zD] = ID.v.breakingPos(DD, 0, zD)
      }
      refreshTarget() {
        const DD = this.api.apiView,
          zD = ID.v.targetBlockId(DD, 0);
        if (this.hasTarget = zD !== ID.Xc, this.hasTarget) {
          const wD = this.targeted;
          wD.W8 = zD;
          for (let zD = 0; zD < 3; zD++) wD.position[zD] = ID.v.targetBlock(DD, 0, zD), wD.normal[zD] = ID.v.targetNormal(DD, 0, zD), wD.sG[zD] = ID.v.targetAdjacent(DD, 0, zD)
        }
      }
      despawned(DD) {
        const zD = this.positions.get(DD);
        zD && !this.api.isLocal(DD) && (zD.fill(NaN), this.positions.delete(DD))
      }
    }
    var np = wD(40550),
      Mp = wD(40535),
      Op = wD(36751);
    const Jp = 1,
      Ep = 2;
    class Qp {
      constructor() {
        this.game = new Op.f, this.client = new Op.f, this.Qg = 0, this.movesFly = null
      }
      setGame(DD) {
        if (null === DD || "object" !== typeof DD) return !1;
        const {
          key: zD,
          value: wD
        } = DD;
        return "string" === typeof zD && (this.game.setBooleanType(zD, Boolean(wD)), !0)
      }
      setClient(DD, zD) {
        this.client.setBooleanType(DD, zD)
      }
      clearGame() {
        this.game = new Op.f, this.movesFly = null
      }
      setMovesFly(DD) {
        this.movesFly = DD
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Jp : 0) | (this.client._getTotalBooleanVal() ? Ep : 0)
      }
      write(DD) {
        const zD = this.perms(),
          {
            movesFly: wD
          } = this;
        if (zD === this.Qg && null === wD) return !0;
        let pD = ID.Rb.Keep;
        return null !== wD && (pD = wD ? ID.Rb.On : ID.Rb.Off), !(!DD || !(0, ID.se)(DD, 0, pD, zD, wD ? 1 : 0)) && (this.Qg = zD, this.movesFly = null, !0)
      }
    }
    class Xp {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = DD, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: LD.c,
          get y() {
            return zD()
          }
        }
      }
      get hasView() {
        const DD = this.api.apiView,
          zD = ID.v.viewProj;
        return 0 !== zD(DD, 0, 3) || 0 !== zD(DD, 0, 7) || 0 !== zD(DD, 0, 11) || 0 !== zD(DD, 0, 15)
      }
      get cameraPosition() {
        const DD = this.api.apiView,
          {
            eye: zD
          } = this;
        for (let wD = 0; wD < 3; wD++) zD[wD] = ID.v.eye(DD, 0, wD);
        return zD
      }
      get cameraDirection() {
        const DD = this.api.apiView,
          zD = ID.v.viewProj,
          wD = zD(DD, 0, 3),
          pD = zD(DD, 0, 7),
          sD = zD(DD, 0, 11),
          KD = Math.hypot(wD, pD, sD),
          {
            forward: rD
          } = this;
        return KD > 0 && (rD[0] = wD / KD, rD[1] = pD / KD, rD[2] = sD / KD), rD
      }
      get cameraHeading() {
        return ID.v.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return ID.v.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return ID.v.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return ID.v.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(DD) {
        this.clip(DD);
        const {
          clipX: zD,
          clipY: wD,
          clipW: pD
        } = this;
        if (pD > 0) {
          const DD = zD / pD * 50,
            sD = -wD / pD * 50;
          return Math.abs(DD) <= this.screenBandPct.x && Math.abs(sD) <= this.screenBandPct.y ? {
            x: 50 + DD,
            y: 50 + sD
          } : this.clampToBand(DD, sD)
        }
        const sD = this.cameraPosition,
          KD = Math.hypot(DD[0] - sD[0], DD[1] - sD[1], DD[2] - sD[2]),
          rD = this.api.apiView,
          LD = ID.v.viewProj,
          cD = KD > 0 ? zD / KD : 0,
          gD = KD > 0 ? -wD / KD : 0,
          RD = Math.hypot(LD(rD, 0, 1), LD(rD, 0, 5), LD(rD, 0, 9)),
          AD = cD / Math.hypot(LD(rD, 0, 0), LD(rD, 0, 4), LD(rD, 0, 8)),
          UD = gD / RD,
          fD = !(Math.abs(AD) >= .001 || Math.abs(UD) >= .001);
        return this.clampToBand(cD, fD ? -(RD || 1) : gD)
      }
      projectDirectionToScreenPos(DD) {
        if (!this.hasView) return;
        const zD = this.cameraPosition,
          wD = this.along;
        for (let pD = 0; pD < 3; pD++) wD[pD] = zD[pD] + 10 * DD[pD];
        return this.projectWorldPosToScreenPos(wD)
      }
      projectWorldPosToViewport(DD) {
        this.clip(DD);
        const {
          clipX: zD,
          clipY: wD,
          clipW: pD
        } = this;
        return pD > 0 ? {
          x: 50 + zD / pD * 50,
          y: 50 - wD / pD * 50
        } : null
      }
      clip(DD) {
        const zD = this.api.apiView,
          wD = DD[0] - ID.v.origin(zD, 0, 0),
          pD = DD[1] - ID.v.origin(zD, 0, 1),
          sD = DD[2] - ID.v.origin(zD, 0, 2),
          KD = ID.v.viewProj;
        this.clipX = KD(zD, 0, 0) * wD + KD(zD, 0, 4) * pD + KD(zD, 0, 8) * sD + KD(zD, 0, 12), this.clipY = KD(zD, 0, 1) * wD + KD(zD, 0, 5) * pD + KD(zD, 0, 9) * sD + KD(zD, 0, 13), this.clipW = KD(zD, 0, 3) * wD + KD(zD, 0, 7) * pD + KD(zD, 0, 11) * sD + KD(zD, 0, 15)
      }
      clampToBand(DD, zD) {
        return (0, LD.d)(DD, zD, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Vp = wD(4827);
    const Pp = new TextEncoder,
      Cp = new Uint8Array(ID.M * ID.L);
    class xp {
      constructor() {
        this.buttons = [], this.Qg = !0
      }
      set(DD) {
        this.buttons = DD, this.Qg = !1
      }
      attached() {
        this.Qg = 0 === this.buttons.length
      }
      write(DD) {
        if (this.Qg) return;
        const zD = new Uint8Array(ID.M),
          wD = new Uint8Array(ID.M);
        let pD = 0,
          sD = 0;
        for (const {
            id: KD,
            keycode: rD
          }
          of this.buttons) {
          if (pD === ID.M) break;
          const {
            read: DD,
            written: LD
          } = Pp.encodeInto(KD, Cp.subarray(sD, sD + ID.L));
          if (DD < KD.length) continue;
          const cD = Vp.j[rD];
          zD[pD] = "number" === typeof cD ? cD : 0, wD[pD] = LD, pD++, sD += LD
        }
        this.Qg = (0, ID.he)(DD, 0, pD, zD, wD, Cp.subarray(0, sD))
      }
    }

    function Tp(DD, zD, wD) {
      const pD = Pp.encode(zD);
      return pD.length <= ID.L && function(DD, zD, wD, pD) {
        return (0, oz.d)(), (0, ID.of)(DD, zD, wD, pD)
      }(DD, 0, wD ? 1 : 0, pD)
    }
    const bp = new TextDecoder,
      jp = new TextEncoder,
      dp = new Uint8Array(0),
      Sp = [0, 0, 0],
      ip = {
        off: ID.Dd.Off,
        key: ID.Dd.Key,
        touch: ID.Dd.Touch
      };
    class lp {
      constructor(DD) {
        var zD;
        this.options = DD, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new xp, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new Qp, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.sI = DD => {
          if ((0, fD.d)(DD)) throw DD;
          this.onError(DD)
        }, this.api = DD.api, this.tables = DD.tables, this.onError = null !== (zD = DD.onError) && void 0 !== zD ? zD : DD => {
          console.error("Error in client game callback", DD)
        }, this.renderFrame = new Xp(this.api, DD.screenBandY), this.live = new hp(this.api), this.chunks = new Lz(this.api.memory, (() => this.api.apiView)), this.items = new nw({
          api: this.api,
          tables: DD.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: DD.beforeOp
        });
        const wD = () => this.stopped() ? null : this.cmd,
          pD = () => this.sessionLive;
        this.entityInfoWatch = new aw({
          cmd: wD,
          onError: this.onError
        }), this.entityInfo = new uw({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: pD
        }), this.particles = new iw({
          cmd: wD,
          isSessionLive: pD,
          onError: this.onError
        }), this.clientApi = new gw({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: DD.tables,
          cmd: wD,
          sendCmd: () => this.sendCmd(),
          isSessionLive: pD,
          beforeWrite: () => {
            var zD;
            if (this.stopped()) return !1;
            const wD = this.generation;
            return !1 !== (null === (zD = DD.beforeWrite) || void 0 === zD ? void 0 : zD.call(DD)) && wD === this.generation
          },
          playerDbId: () => {
            const DD = this.session;
            if (null === DD) throw new Error("No game session has started, so the local player has no DB id");
            return DD.playerDbId
          },
          playSound: DD.playSound,
          preloadSounds: DD.preloadSounds,
          setLocalOptions: DD.setLocalOptions,
          hasPackModel: DD.hasPackModel
        }), this.scriptedCamera = new uD({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: DD.cameraScreen,
          showFacing: DD.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= fp(this.items, this.tables, (() => this.localPlayerAlive()), this.sI), this.itemSources
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
      clickCodeBlock(DD) {
        const zD = this.sessionLive ? this.sendCmd() : null;
        return null !== zD && (wD = zD, pD = 0, sD = DD[0], KD = DD[1], rD = DD[2], (0, oz.d)(), (0, ID.me)(wD, pD, sD, KD, rD));
        var wD, pD, sD, KD, rD
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(DD) {
        const zD = this.liveCmd();
        return null === zD ? (this.pendingZoom = DD, !1) : (this.pendingZoom = null, (0, ID.Zf)(zD, 0, DD, 1))
      }
      YC(DD) {
        const zD = this.stopped() ? null : this.cmd;
        return null !== zD && (0, ID.Vf)(zD, 0, DD ? 1 : 0)
      }
      respawn() {
        const DD = this.sessionLive ? this.sendCmd() : null;
        return null !== DD && (zD = DD, wD = 0, (0, oz.d)(), (0, ID.Af)(zD, wD));
        var zD, wD
      }
      bindCustomButtonKeys(DD) {
        this.customButtons.set(DD)
      }
      pressCustomButton(DD, zD) {
        const wD = this.sessionLive ? this.sendCmd() : null;
        return null !== wD && Tp(wD, DD, zD)
      }
      padMove(DD, zD, wD, pD, sD, KD) {
        const rD = this.liveCmd();
        return null !== rD && (0, ID.Se)(rD, 0, DD, zD, wD, pD, sD, KD)
      }
      thirdPersonFor(DD) {
        const zD = this.liveCmd();
        return null !== zD && (0, ID.ag)(zD, 0, null !== DD && void 0 !== DD ? DD : 1 / 0)
      }
      send(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== pD && az(pD, wD ? UD.sd : 0, DD, (0, lD.d)(zD))
      }
      socketAttached(DD) {
        this.openSocket = DD, this.socketLeftSinceAttach = !1
      }
      socketDetached(DD) {
        this.openSocket === DD && (this.openSocket = 0)
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
      attach(DD) {
        const zD = () => DD.isStopped;
        this.stopped = zD, this.cmd = DD.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const wD = this.api.apiView;
        this.overflowGen = ID.v.eventOverflowGen(wD, 0), this.resyncOwed = 0 !== ID.v.eventOverflowMask(wD, 0), DD.setGameHost(this), DD.setEventWalker((DD => {
          this.api.walk(DD, this, zD)
        }))
      }
      watchPromptPick(DD) {
        this.promptWatch = DD, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Wp(ID.v.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? ID.qc.None : ID.v.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : ID.v.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === DD || DD >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, DD, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(DD) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(DD)
      }
      netEvent(DD) {
        "connection" === DD.type ? DD.phase === UD.D.Activated && DD.conn !== this.activeConn && DD.conn > this.closedThrough ? (this.endSession(), this.activeConn = DD.conn, this.endGameGrants(), this.dropGameCamera()) : DD.phase !== UD.D.Left && DD.phase !== UD.D.Closed || DD.conn !== this.activeConn ? DD.phase === UD.D.Resumed && 0 !== this.activeConn && DD.conn > this.closedThrough && (this.activeConn = DD.conn) : this.closeGame() : DD.conn === this.activeConn && 0 !== DD.conn && (DD.lg === Mp.r ? this.gunHit(DD.payload) : DD.lg === vw.ec.EditItemCraftingRecipes || DD.lg === Mp.V ? this.items.touch() : (this.serverOptions(DD), this.gameMessage(DD)));
        const zD = this.options.onNetEvent;
        zD && this.guard((() => {
          zD(DD)
        }))
      }
      serverOptions(DD) {
        const zD = this.options.serverOptions,
          wD = zD ? this.decoded(tw, DD) : null;
        zD && wD && this.guard((() => {
          zD.applyNewClientOptions(wD)
        }))
      }
      gameMessage(DD) {
        let zD = null;
        try {
          zD = function(DD) {
            if ("message" !== DD.type || DD.lg !== vw.ec.GameCodeMessage || DD.payloadKind !== UD.pc.Msgpack) return null;
            const zD = (0, lD.b)(DD.payload);
            if (null === zD || "object" !== typeof zD || "string" !== typeof zD.messageType) throw new Error("GameCodeMessage without a messageType");
            return zD
          }(DD)
        } catch (wD) {
          this.sessionLive && this.onError(wD)
        }
        if (zD) {
          const {
            messageType: DD,
            data: wD
          } = zD;
          if ((0, xD.c)(DD)) return void this.guard((() => {
            (0, xD.b)(DD, wD)
          }));
          "freeCamPerms" === DD && this.freeCam.setGame(wD) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (zD => {
            zD.onReceivedMessageFromServer(DD, wD)
          }))
        }
      }
      decoded(DD, zD) {
        try {
          return DD(zD)
        } catch (wD) {
          return this.onError(wD), null
        }
      }
      setClientFreeCameraGrant(DD, zD) {
        this.freeCam.setClient(DD, zD), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(DD) {
        this.freeCam.setMovesFly(DD), this.writeFreeCam()
      }
      setBlockHighlight(DD) {
        this.highlight = DD, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const DD = this.liveCmd();
        if (null === DD || !this.highlightOwed) return;
        const zD = this.highlight;
        this.highlightOwed = null === zD ? !(0, ID.Ce)(DD, 0, Sp, Sp, 0) : !(0, ID.Ce)(DD, 0, zD.pos, zD.normal, 1)
      }
      localPlayerBound(DD) {
        var zD, wD;
        if (0 === this.activeConn || this.sessionLive && DD === this.boundId) return;
        const pD = this.sessionLive;
        let sD, KD, rD, LD;
        this.endSession(), pD && this.restartGameCamera();
        try {
          var cD;
          this.session = null;
          const DD = this.options.sessionInfo(this.activeConn);
          if (this.session = DD, !DD) return;
          sD = DD.gameNameWithVariation, KD = null !== (cD = (0, PD.Ob)(sD)) && void 0 !== cD ? cD : void 0, rD = (0, CD.r)(DD.lobbyName), LD = (0, CD.J)(DD.lobbyName)
        } catch (nD) {
          return void this.onError(nD)
        }
        const gD = {
          localPlayerId: String(DD)
        };
        let RD = {},
          AD = {};
        try {
          var UD, fD;
          RD = null !== (UD = null === (fD = this.options.gameFactory((0, PD.Tb)(sD))) || void 0 === fD ? void 0 : fD(LD, rD, KD, gD)) && void 0 !== UD ? UD : {}
        } catch (nD) {
          this.sI(nD)
        }
        try {
          var ID, BD;
          AD = {
            ...null === (ID = (BD = this.options).defaultPlugins) || void 0 === ID ? void 0 : ID.call(BD, LD, rD, KD, gD),
            ...RD.plugins
          }
        } catch (nD) {
          this.sI(nD)
        }
        const GD = [RD, ...Object.values(AD)];
        this.owners = GD, this.tickers = GD.filter((DD => void 0 !== DD.DU)), this.renderers = GD.filter((DD => void 0 !== DD.onAfterRender)), this.receivers = GD.filter((DD => void 0 !== DD.onReceivedMessageFromServer)), this.writeAltVeto(GD), this.writeHooks(GD), this.writePublicLobby(LD), this.writeLocalDbId(null !== (zD = null === (wD = this.session) || void 0 === wD ? void 0 : wD.playerDbId) && void 0 !== zD ? zD : null), this.boundId = DD, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(GD, (DD => {
          var zD;
          null === (zD = DD.onCreate) || void 0 === zD || zD.call(DD, this.clientApi)
        }));
        const hD = this.generation;
        setTimeout((() => {
          hD === this.generation && !0 === this.tables.getClientOption("creative") && Up(this.tables)
        }), 0)
      }
      chunkSlot(DD, zD, wD, pD, sD, KD) {
        this.chunks.apply(DD, zD, wD, pD, sD, KD)
      }
      entityAdded(DD) {
        var zD;
        this.entityInfo.stale(DD), null === (zD = this.options.replayEntities) || void 0 === zD || zD.entityAdded(DD)
      }
      entityInfoChanged(DD) {
        var zD;
        this.entityInfo.stale(DD), null === (zD = this.options.replayEntities) || void 0 === zD || zD.entityInfoChanged(DD)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const DD = performance.now();
          this.round(this.tickers, Np), (0, sp.b)(performance.now() - DD)
        }
      }
      afterWalk(DD) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const zD = this.options.replayEntities;
        zD && this.guard((() => {
          this.entityInfoWatch.want(ow, zD.wantsWatch), zD.flush(this.entityInfoWatch.on)
        }));
        const wD = (0, sp.h)(DD, ID.v.frameMs(this.api.apiView, 0));
        if (null !== wD) {
          const DD = this.renderFrame;
          this.guard((() => {
            (0, Yw.e)().turnDamageIndicators(DD.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(wD)
          })), this.round(this.renderers, (zD => {
            zD.onAfterRender(wD, DD)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== wD)
        } catch (sD) {
          this.sI(sD)
        }
        this.showZoom(), this.items.flush(this.sI), this.writePromptWatch(), this.writeCustomButtons();
        const pD = this.ticks;
        this.ticks = 0, (0, sp.f)(pD, DD, wD, this.sI)
      }
      entityRemoved(DD) {
        this.live.despawned(DD), this.entityInfo.removed(DD)
      }
      ackEventOverflow() {
        const DD = this.api.apiView,
          zD = ID.v.eventOverflowGen(DD, 0),
          wD = zD - this.overflowGen >>> 0;
        if (0 === wD && !this.resyncOwed) return;
        this.overflowGen = zD;
        const pD = ID.v.eventOverflowMask(DD, 0),
          sD = this.cmd;
        0 === pD || null === sD || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, ID.oe)(sD, 0, pD);
        const KD = this.options.onEventOverflow;
        0 !== wD && KD && this.guard((() => {
          KD(pD, wD)
        }))
      }
      gameCall(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        if (DD === ID.ec.Director) try {
          return this.scriptedCamera.call(zD, wD, pD, sD, KD, rD)
        } catch (gD) {
          return this.sI(gD), ID.qb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return DD === ID.ec.AltVeto ? ID.j.Allow : 0;
        try {
          return this.callGames(DD, zD, wD, pD, sD, KD, rD, LD)
        } catch (gD) {
          throw (0, fD.d)(gD) && (this.fault = gD), gD
        }
      }
      takeFault() {
        const DD = this.fault;
        return this.fault = void 0, DD
      }
      callGames(DD, zD, wD, pD, sD, KD, rD, LD) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: cD
        } = this.options, gD = String(this.boundId);
        switch (DD) {
          case ID.ec.AltVeto:
          case ID.ec.AltAction: {
            const LD = 0 !== rD,
              [RD, AD, UD] = LD ? [zD, wD, pD] : [void 0, void 0, void 0],
              fD = LD ? cD.nameOfId(sD) : "Air",
              BD = Wp(KD);
            if (DD === ID.ec.AltAction) return this.first((DD => {
              var zD;
              return null === (zD = DD.onPlayerAltAction) || void 0 === zD ? void 0 : zD.call(DD, gD, RD, AD, UD, fD, BD)
            })), 0;
            const GD = this.first((DD => {
              var zD;
              return null === (zD = DD.onPlayerAttemptAltAction) || void 0 === zD ? void 0 : zD.call(DD, gD, RD, AD, UD, fD, BD)
            }));
            return "preventAction" === GD ? ID.j.Prevent : "preventPlacement" === GD ? ID.j.PreventPlacement : ID.j.Allow
          }
          case ID.ec.Click: {
            const DD = LD,
              RD = 0 !== (DD & ID.V.Alt),
              AD = 0 !== (DD & ID.V.HasPos),
              UD = AD ? cD.nameOfId(sD) : "Air",
              [fD, BD, GD] = AD ? [zD, wD, pD] : [null, null, null],
              hD = Wp(KD),
              nD = 0 !== (DD & ID.V.Up),
              MD = Wp(rD);
            if (0 === (DD & ID.V.AttackOnly) && this.first((DD => {
                var zD, wD;
                return nD ? null === (zD = DD.onPlayerClickUp) || void 0 === zD ? void 0 : zD.call(DD, gD, RD, fD, BD, GD, UD, hD) : null === (wD = DD.onPlayerClick) || void 0 === wD ? void 0 : wD.call(DD, gD, RD, fD, BD, GD, UD, hD)
              })), !nD && !RD && null !== MD) {
              const DD = this.clientApi.getPositionView(MD),
                zD = DD ? [DD[0], DD[1], DD[2]] : [0, 0, 0];
              this.first((DD => {
                var wD;
                return null === (wD = DD.onPlayerAttackEntity) || void 0 === wD ? void 0 : wD.call(DD, gD, MD, zD)
              }))
            }
            return 0
          }
          case ID.ec.ChangeBlock: {
            const DD = cD.nameOfId(sD),
              rD = cD.nameOfId(KD);
            return this.first((sD => {
              var KD;
              return null === (KD = sD.onPlayerChangeBlock) || void 0 === KD ? void 0 : KD.call(sD, gD, zD, wD, pD, DD, rD)
            })), 0
          }
          case ID.ec.DropItem: {
            const DD = cD.nameOfId(zD);
            return this.first((zD => {
              var sD;
              return null === (sD = zD.onPlayerDropItem) || void 0 === sD ? void 0 : sD.call(zD, gD, DD, wD, pD)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${DD}`)), 0
        }
      }
      changeBlockFail(DD, zD, wD, pD, sD, KD, rD) {
        const LD = sD === ID.Nc ? null : bp.decode(this.api.eventBytes(KD, Math.min(sD, rD)));
        this.failures.push({
          HK: [DD, zD, wD],
          qK: pD,
          Dr: LD
        })
      }
      changeBlockFailEnd() {
        const DD = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (zD => {
          var wD;
          null === (wD = zD.onChangeBlockFail) || void 0 === wD || wD.call(zD, DD)
        })), this.KG("EditBoard", {
          pos: null
        }), this.KG("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(DD, zD, wD, pD, sD, KD) {
        DD === ID.wc.ChestOpened ? this.items.chestOpened(wD, pD, sD) : DD !== ID.wc.Synced && DD !== ID.wc.ChestClosed && DD !== ID.wc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(DD, zD, wD, pD) {
            switch (DD) {
              case ID.wc.Synced:
                rD.l.KG("syncedInvenFromServer");
                break;
              case ID.wc.ChestOpened:
              case ID.wc.ChestClosed:
                rD.l.KG("chestToggleFromServer", DD === ID.wc.ChestOpened, !0);
                break;
              case ID.wc.ChestRefreshed:
                rD.l.KG("chestRefreshedFromServer");
                break;
              case ID.wc.EnchantingTable:
                rD.l.KG("enchantingTable", {
                  fR: pD,
                  position: wD
                });
                break;
              case ID.wc.HotbarRequest:
                rD.l.KG("setSelectedInventorySlotI", zD, !0);
                break;
              case ID.wc.Scrolled:
                rD.l.KG("ScrollInventorySlot", zD);
                break;
              case ID.wc.NumberKey:
                rD.l.KG("numkeyPressed", zD + 1);
                break;
              case ID.wc.DropRequested:
                rD.l.KG("DropInvenItem", 0 !== zD);
                break;
              default:
                throw new fD.b(`InventoryEvent of no kind: what ${DD}`)
            }
          }(DD, zD, [wD, pD, sD], KD)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(DD, zD, wD, pD) {
        this.KG("shotPlayer", {
          playerId: String(DD),
          damage: zD,
          wasCrit: 0 !== pD,
          distance: wD
        })
      }
      localHurt(DD, zD) {
        this.KG("closeShopOnDamaged", null), this.guard((() => {
          rD.l.KG("damagedByOtherPlayer", {
            tD: null,
            direction: Number.isNaN(zD) ? null : zD,
            tK: DD
          })
        }))
      }
      attackHit(DD, zD, wD, pD, sD) {
        this.guard((() => {
          rD.l.KG("yourAttackHit", {
            Qp: pD,
            screenPos: this.renderFrame.projectDirectionToScreenPos([DD, zD, wD]),
            hitSelf: sD
          })
        }))
      }
      physicsType(DD) {
        this.KG("PlayerPhysicsTypeUpdate", DD)
      }
      vehicleEffect(DD, zD, wD, pD, sD) {
        this.guard((() => {
          DD === UD.Jd.UPDATE ? (0, bD.g)(zD, {
            icon: wD,
            level: pD,
            displayName: null,
            durationMs: sD
          }) : TD.d.remove(zD)
        }))
      }
      zoomChanged(DD) {
        this.zoom = DD, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.KG("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const DD = this.scriptedCamera.holdsView();
        !this.zoomUnshown || DD && this.zoomHeld || (this.zoomUnshown = !1, this.KG("cameraZoomSet", this.zoom)), this.zoomHeld = DD
      }
      gunHit(DD) {
        this.guard((() => {
          const {
            tD: zD,
            FD: wD
          } = (0, np.d)(Mp.r, DD);
          rD.l.KG("damagedByOtherPlayer", {
            tD: zD,
            direction: wD
          })
        }))
      }
      uiEvent(DD, zD, wD, pD, sD, KD, rD, LD) {
        this.guard((() => {
          Hw(DD, zD, [wD, pD, sD], KD, this.items, this.options.tables, (() => bp.decode(this.api.eventBytes(rD, LD))))
        }))
      }
      writeAltVeto(DD) {
        const zD = this.cmd;
        if (!zD) return;
        let wD;
        try {
          wD = function(DD, zD) {
            const wD = new Set;
            let pD = !1;
            for (const sD of DD)
              if (sD.onPlayerAttemptAltAction) {
                if (pD = !0, !sD.altVetoBlocks) return {
                  mode: ID._d.All,
                  roots: []
                };
                for (const DD of sD.altVetoBlocks) wD.add(zD.getMetaInfo(DD).rootId)
              } return pD ? wD.size > ID.Fc ? {
              mode: ID._d.All,
              roots: []
            } : {
              mode: ID._d.Filter,
              roots: [...wD]
            } : {
              mode: ID._d.Off,
              roots: []
            }
          }(DD, this.options.tables)
        } catch (sD) {
          this.onError(sD), wD = {
            mode: ID._d.All,
            roots: []
          }
        }
        if (wD.mode === ID._d.Off && !this.vetoSet) return;
        const pD = new Uint8Array(new Uint32Array(wD.roots).buffer);
        (0, ID.Ff)(zD, 0, wD.mode, wD.roots.length, pD) ? this.vetoSet = wD.mode !== ID._d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(DD) {
        const zD = this.cmd;
        if (!zD) return;
        const wD = function(DD) {
          let zD = 0;
          for (const wD of DD) wD.onPlayerAltAction && (zD |= 1 << ID.ec.AltAction), (wD.onPlayerClick || wD.onPlayerClickUp || wD.onPlayerAttackEntity) && (zD |= 1 << ID.ec.Click), wD.onPlayerChangeBlock && (zD |= 1 << ID.ec.ChangeBlock), wD.onPlayerDropItem && (zD |= 1 << ID.ec.DropItem);
          return zD
        }(DD);
        (0 !== wD || this.hooksSet) && ((0, ID.Nf)(zD, 0, wD) ? this.hooksSet = 0 !== wD : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const DD = this.cmd;
        DD && !this.stopped() && this.customButtons.write(DD)
      }
      writePromptWatch() {
        const DD = this.cmd,
          zD = this.promptWatch;
        zD !== this.promptWatchSent && DD && !this.stopped() && (0, ID.fg)(DD, 0, ip[zD]) && (this.promptWatchSent = zD)
      }
      writePublicLobby(DD) {
        const zD = this.cmd;
        zD && DD !== this.writtenPublicLobby && ((0, ID.Yf)(zD, 0, DD ? 1 : 0) ? this.writtenPublicLobby = DD : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(DD) {
        const zD = this.cmd;
        zD && ((0, ID.Pf)(zD, 0, null === DD ? 0 : 1, null === DD ? dp : jp.encode(DD)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(DD) {
        const zD = this.generation;
        for (const pD of this.owners) {
          if (zD !== this.generation) break;
          try {
            const zD = DD(pD);
            if (void 0 !== zD) return zD
          } catch (wD) {
            this.sI(wD)
          }
        }
      }
      KG(DD, zD) {
        this.guard((() => {
          rD.l.KG(DD, zD)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (DD) {
          this.sI(DD)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (DD) {
          this.sI(DD)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const DD = this.owners;
        let zD;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (pD) {
          zD = pD
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (pD) {
          zD ??= pD
        }
        this.round(DD, Zp, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (pD) {
          zD ??= pD
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (pD) {
          zD ??= pD
        }
        const wD = this.options.onSessionEnd;
        if (wD) try {
          wD()
        } catch (pD) {
          this.onError(pD)
        }
        void 0 !== zD && this.sI(zD)
      }
      round(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = this.generation;
        for (const KD of DD) {
          if (pD !== this.generation) break;
          try {
            zD(KD)
          } catch (sD) {
            wD ? this.onError(sD) : this.sI(sD)
          }
        }
      }
      guard(DD) {
        try {
          DD()
        } catch (zD) {
          this.sI(zD)
        }
      }
    }

    function Wp(DD) {
      return DD === ID.Pc ? null : String(DD)
    }

    function Np(DD) {
      DD.DU(UD.Ad)
    }

    function Zp(DD) {
      var zD;
      null === (zD = DD.onClose) || void 0 === zD || zD.call(DD)
    }

    function yp(DD, zD) {
      DD.watch((() => {
        const wD = function(DD) {
          const zD = [],
            wD = Math.min(Kp, DD.length);
          for (let sD = 0; sD < wD; sD++) {
            var pD;
            const wD = null === (pD = DD.slot(sD)) || void 0 === pD ? void 0 : pD.typeObj,
              KD = wD ? (0, pp.gunTypeOf)(wD.id) : void 0;
            void 0 !== KD && zD.push(Mz[KD])
          }
          return zD
        }(DD);
        wD.length > 0 && (zD.preload(wD), zD.preload([Oz]))
      }))
    }
    var kp = wD(36432),
      mp = wD(4875),
      ep = wD(36719),
      op = wD(36742);

    function ap(DD) {
      const zD = (0, kp.countDecodesAs)(new mp.Howl({
          ...(0, ep.i)(DD),
          pool: 15,
          preload: !1
        }), "sheet"),
        wD = zD.load.bind(zD);
      return zD.load = () => (zD._preload = !0, (0, op.c)(DD), wD()), zD
    }

    function vp(DD, zD, wD) {
      const pD = DD.listener;
      if (pD.positionX) tp(pD.positionX, zD, wD, 0), tp(pD.positionY, zD, wD, 1), tp(pD.positionZ, zD, wD, 2), tp(pD.forwardX, zD, wD, 3), tp(pD.forwardY, zD, wD, 4), tp(pD.forwardZ, zD, wD, 5), tp(pD.upX, zD, wD, 6), tp(pD.upY, zD, wD, 7), tp(pD.upZ, zD, wD, 8);
      else {
        let DD = !1;
        for (let pD = 0; pD < 9; pD++) DD ||= zD[pD] !== wD[pD];
        DD && (pD.setPosition(zD[0], zD[1], zD[2]), pD.setOrientation(zD[3], zD[4], zD[5], zD[6], zD[7], zD[8]), wD.set(zD))
      }
    }

    function tp(DD, zD, wD, pD) {
      zD[pD] !== wD[pD] && (DD.value = zD[pD], wD[pD] = zD[pD])
    }
    class Fp {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(DD) {
        this.pose.set(DD);
        const zD = mp.Howler.ctx;
        return !!zD && (zD !== this.watchedCtx && (this.watchedCtx = zD, this.written.fill(Number.NaN), zD.addEventListener("statechange", (() => {
          "running" === zD.state && vp(zD, this.pose, this.written)
        }))), "running" === zD.state && vp(zD, DD, this.written), !0)
      }
    }
    var Yp = wD(36561),
      Hp = wD(39177);
    let qp = null,
      Ds = null;

    function zs() {
      return null === qp && (qp = document.createElement("div"), qp.className = "WasmCameraLayer", qp.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(qp)), qp
    }

    function ws() {
      return Ds ??= new Hp.c(new Yp.e(zs)), Ds
    }

    function ps() {
      var DD;
      null === (DD = Ds) || void 0 === DD || DD.clear(), ss(null)
    }

    function ss(DD) {
      pD.e.get("scriptedCameraFacing") !== DD && pD.e.set({
        scriptedCameraFacing: DD
      })
    }
    var Ks = wD(9286),
      rs = wD(9236),
      Ls = wD(39209),
      cs = wD(40942),
      gs = wD(3288);
    const Rs = Object.entries(ID.dc).reduce(((DD, zD) => {
      let [wD, pD] = zD;
      return DD[pD] = wD, DD
    }), []);

    function As(DD, zD) {
      var wD;
      return 0 !== ((null !== (wD = DD.itemFlags[zD]) && void 0 !== wD ? wD : 0) & ID.xc.Stackable)
    }
    const Us = /^(0|[1-9][0-9]*)$/,
      fs = {
        displayName: (DD, zD) => (0, pp.displayNameOf)(zD),
        description: (DD, zD) => (0, pp.descriptionOf)(zD),
        type: (DD, zD) => (0, pp.itemTypeOf)(zD),
        clipSize: (DD, zD) => (0, pp.clipSizeOf)(zD),
        armourReduction: (DD, zD) => (0, pp.armourReductionOf)(zD),
        scopeType: (DD, zD) => (0, pp.scopeTypeOf)(zD),
        stackable: As,
        harvestType: (DD, zD) => Rs[DD.blockHarvestTypes[zD]],
        harvestLevel: (DD, zD) => {
          const wD = DD.blockHarvestLevels[zD];
          return wD === ID.Bc ? void 0 : wD
        },
        harvests: (DD, zD) => {
          var wD;
          const pD = null !== (wD = DD.itemHarvests[zD]) && void 0 !== wD ? wD : 0;
          return 0 !== pD ? Rs[pD] : void 0 === (0, pp.harvestsNullLevelOf)(zD) ? void 0 : null
        },
        level: (DD, zD) => {
          var wD, pD;
          const sD = null !== (wD = DD.itemLevels[zD]) && void 0 !== wD ? wD : ID.Bc;
          return sD !== ID.Bc ? sD : null !== (pD = (0, pp.harvestsNullLevelOf)(zD)) && void 0 !== pD ? pD : void 0
        }
      };

    function Is(DD, zD, wD) {
      return Gs(new Uint8Array(Math.floor(DD.length / zD)), DD, zD, wD)
    }

    function Bs(DD, zD, wD) {
      return Gs(new Uint16Array(Math.floor(DD.length / zD)), DD, zD, wD)
    }

    function Gs(DD, zD, wD, pD) {
      const sD = new DataView(zD.buffer, zD.byteOffset, zD.byteLength);
      for (let KD = 0; KD < DD.length; KD++) DD[KD] = pD(sD, KD * wD);
      return DD
    }
    class hs {
      constructor(DD, zD) {
        this.options = zD, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = DD => {
          const zD = this.idOf(DD);
          if (void 0 === zD) throw new Error(`No item is named ${DD}, an item's root`);
          return zD
        };
        const wD = zD => {
            const wD = zD();
            return new Uint8Array(DD.memory().buffer, DD.scratch(), wD).slice()
          },
          pD = (new TextDecoder).decode(wD((() => DD.queries.itemNames()))).split("\n"),
          sD = wD((() => DD.queries.blockProps())),
          KD = wD((() => DD.queries.itemProps()));
        this.props = {
          blockFlags: Is(sD, ID.A.BYTES, ID.A.flags),
          blockHarvestTypes: Is(sD, ID.A.BYTES, ID.A.harvestType),
          blockHarvestLevels: Is(sD, ID.A.BYTES, ID.A.harvestLevel),
          blockAttachedTops: Bs(sD, ID.A.BYTES, ID.A.attachedTop),
          itemFlags: Is(KD, ID.zc.BYTES, ID.zc.flags),
          itemHarvests: Is(KD, ID.zc.BYTES, ID.zc.harvests),
          itemLevels: Is(KD, ID.zc.BYTES, ID.zc.level)
        }, (0, gs.n)(Object.freeze(pD)), (0, cs.d)()
      }
      idOf(DD) {
        if ("number" === typeof DD) return void 0 === (0, gs.g)(DD) ? void 0 : DD;
        const zD = (0, gs.e)(DD);
        return void 0 === zD && Us.test(DD) ? void 0 === (0, gs.g)(+DD) ? void 0 : +DD : zD
      }
      getMetaInfo(DD) {
        if (!DD || DD === Ks.c) return Ks.e;
        const zD = this.idOf(DD);
        if (void 0 === zD) throw new Error(`Item ${DD} not found in registry`);
        return this.metaOf(zD)
      }
      blockRootId(DD) {
        return 0 !== DD && void 0 !== (0, gs.g)(DD) ? this.metaOf(DD).rootId : DD
      }
      metaOf(DD) {
        return this.metas[DD] ??= (0, rs.p)((0, gs.g)(DD), DD, this.rootIdOf, (0, pp.rootMetaDescOf)(DD))
      }
      getItemId(DD) {
        if (!DD || DD === Ks.c) return 0;
        const zD = this.idOf(DD);
        if (void 0 === zD) throw new Error(`Invalid block name. You sent ${DD}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return zD
      }
      getItemName(DD) {
        if (!DD || DD === Ks.c) return Ks.c;
        const zD = this.idOf(DD);
        if (void 0 === zD) throw new Error(`Item ${DD} not found in registry`);
        return (0, gs.g)(zD)
      }
      blockNameToBlockId(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (DD === Ks.c) return 0;
        let wD = this.idOf(DD);
        if (void 0 === wD || !this.isBlockId(wD)) {
          const zD = DD.indexOf("|"),
            pD = zD > 0 ? (0, gs.e)(DD.slice(0, zD)) : void 0;
          wD = void 0 !== pD && this.isBlockId(pD) && (0, pp.rootMetaDescOf)(pD) === DD ? pD : void 0
        }
        if (void 0 !== wD) return wD;
        if (!zD) throw new Error(`Invalid block name. You sent ${DD}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(DD) {
        return DD > 0 && DD < this.props.blockFlags.length
      }
      nameOfId(DD) {
        return 0 !== DD && (0, gs.g)(DD) || Ks.c
      }
      itemType(DD) {
        const zD = DD ? this.idOf(DD) : void 0;
        if (!zD) return null;
        let wD = this.types.get(zD);
        return void 0 === wD && (wD = Object.freeze({
          id: zD,
          name: (0, gs.g)(zD),
          meta: this.getMetaInfo(zD),
          stackable: As(this.props, zD),
          type: (0, pp.itemTypeNameOf)(zD),
          clipSize: (0, pp.clipSizeOf)(zD),
          scopeType: (0, pp.scopeTypeOf)(zD),
          showsAimingUi: (0, pp.showsAimingUi)(zD)
        }), this.types.set(zD, wD)), wD
      }
      getItemStat(DD, zD) {
        if (Ls.e.has(zD)) {
          const wD = "minChargeStateToUse" === zD ? this.getMetaInfo(DD).rootName : this.getItemName(DD),
            pD = this.options.get((0, Ls.i)(wD, zD));
          if (null !== pD && void 0 !== pD) return pD
        }
        return this.defaultStat(DD, zD, this.statOf(zD))
      }
      getDisplayName(DD) {
        return this.getItemStat(DD, "displayName")
      }
      getDefaultItemStat(DD, zD) {
        return this.defaultStat(DD, zD, this.statOf(zD))
      }
      statOf(DD) {
        const zD = fs[DD];
        return void 0 === zD && function(DD, zD) {
          throw new Error(`ClientApi.${DD} is not available yet in the wasm client (${zD})`)
        }(`getItemStat("${DD}")`, `a table of the stat: the wasm client answers ${Object.keys(fs).join(", ")}`), zD
      }
      defaultStat(DD, zD, wD) {
        const pD = this.idOf(DD),
          sD = void 0 === pD ? void 0 : wD(this.props, pD);
        return null !== sD && void 0 !== sD || "displayName" !== zD ? sD : this.getItemName(DD)
      }
      getClientOption(DD) {
        return this.options.get(DD)
      }
      getGunStats(DD) {
        return this.getClientOption(`${DD}GunStats`)
      }
      watchClientOption(DD, zD) {
        return this.options.subscribe(DD, zD)
      }
      isSolidBlockId(DD) {
        var zD;
        return 0 !== ((null !== (zD = this.props.blockFlags[DD]) && void 0 !== zD ? zD : 0) & ID.z.Solid)
      }
      isStackableId(DD) {
        return As(this.props, DD)
      }
      isFluidBlockId(DD) {
        var zD;
        return 0 !== ((null !== (zD = this.props.blockFlags[DD]) && void 0 !== zD ? zD : 0) & ID.z.Fluid)
      }
      canPlaceOverBlockId(DD) {
        var zD;
        return 0 !== ((null !== (zD = this.props.blockFlags[DD]) && void 0 !== zD ? zD : 0) & ID.z.PlaceOver)
      }
      attachedTopOf(DD) {
        var zD;
        return null !== (zD = this.props.blockAttachedTops[DD]) && void 0 !== zD ? zD : 0
      }
      isDroplessBlockId(DD) {
        return (0, pp.dropsNothing)(DD)
      }
    }

    function ns(DD, zD) {
      const wD = new Map;
      return (pD, sD) => {
        const KD = zD.idOf(pD),
          rD = void 0 === KD ? null : (pD => {
            let sD = wD.get(pD);
            if (void 0 === sD) {
              const KD = DD.queries.salvageRecipe(pD),
                rD = new DataView(DD.memory().buffer, DD.scratch(), KD),
                LD = [];
              for (let DD = 0; DD + ID.Od.BYTES <= KD; DD += ID.Od.BYTES) LD.push(Object.freeze({
                item: zD.nameOfId(ID.Od.item(rD, DD)),
                amt: ID.Od.amount(rD, DD)
              }));
              sD = 0 === LD.length ? null : Object.freeze(LD), wD.set(pD, sD)
            }
            return sD
          })(KD);
        if (null === rD || void 0 === sD) return rD;
        const LD = sD <= 0 ? 1 : sD;
        return rD.map((DD => {
          let {
            item: zD,
            amt: wD
          } = DD;
          return {
            item: zD,
            amt: wD * LD
          }
        }))
      }
    }
    var Ms = wD(40686),
      Os = wD(36926),
      Es = wD(36905),
      Qs = wD(36910),
      Xs = wD(36495),
      Vs = wD(40598),
      Ps = wD(42450);
    const Cs = -1,
      xs = new Uint8Array(0),
      Ts = new TextEncoder;

    function bs(DD) {
      if (null === DD) return null;
      const zD = Ts.encode(DD);
      return zD.byteLength < UD.Gc ? zD : zD.subarray(0, UD.Gc - 1)
    }
    class ds {
      constructor(DD) {
        this.deps = DD, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Cs, this.keyframesSettled = !1, this.reloadFrom = Cs
      }
      reloadKeyframes() {
        var DD, zD;
        this.keyframesVersion = Cs, this.reloadFrom = null !== (DD = null === (zD = this.view()) || void 0 === zD ? void 0 : zD.version) && void 0 !== DD ? DD : Cs
      }
      setPlayback(DD) {
        const zD = 1 === this.deps.core.tsD(DD);
        return zD && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Cs, this.reloadFrom = Cs), zD
      }
      async open(DD, zD) {
        const wD = await this.deps.replay.open(DD, zD);
        return "opening" === wD && (this.reloadKeyframes(), this.deps.recorder.prefetch()), wD
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(DD)), zD)
      }
      setSpeed(DD) {
        this.deps.replay.setSpeed(DD)
      }
      setCameraMode(DD) {
        this.deps.replay.setCameraMode(Ps.c.indexOf(DD))
      }
      view() {
        var DD;
        const zD = ID.v.replayViewPtr(this.deps.apiView(), 0);
        if (0 === zD) return this.lastView = null, null;
        const wD = new DataView(this.deps.buffer(), zD, ID.Hd.BYTES),
          pD = ID.Hd.version(wD, 0),
          sD = this.lastView;
        if (null !== sD && sD.version === pD) return sD;
        const KD = ID.Hd.markIn(wD, 0),
          rD = {
            version: pD,
            state: ID.Hd.state(wD, 0),
            cameraMode: null !== (DD = Ps.c[ID.Hd.cameraMode(wD, 0)]) && void 0 !== DD ? DD : "recording",
            DU: ID.Hd.DU(wD, 0),
            totalTicks: ID.Hd.totalTicks(wD, 0),
            speed: ID.Hd.speed(wD, 0),
            mark: KD === ID.Ed ? null : {
              inTick: KD,
              outTick: ID.Hd.markOut(wD, 0)
            },
            editVersion: ID.Hd.editVersion(wD, 0)
          };
        return this.lastView = rD, rD
      }
      keyframes() {
        const DD = this.view();
        if (null === DD) return [];
        DD.version !== this.reloadFrom && (this.reloadFrom = Cs);
        const zD = this.reloadFrom === Cs && DD.state !== UD.nd.Cropping && DD.state !== UD.nd.None,
          wD = zD ? DD.editVersion : DD.version;
        if (wD === this.keyframesVersion && zD === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: pD
        } = this.deps, sD = pD.FsD(), KD = pD.lG(), rD = [];
        if (0 !== KD && sD > 0) {
          const DD = new DataView(this.deps.buffer(), KD, sD * UD.yc);
          for (let zD = 0; zD < sD; zD++) {
            const wD = zD * UD.yc,
              pD = zD => DD.getFloat64(wD + zD, !0);
            rD.push({
              DU: DD.getUint32(wD + UD.Fc, !0),
              position: [pD(UD.Ec), pD(UD.Ec + 8), pD(UD.Ec + 16)],
              direction: [pD(UD.Ac), pD(UD.Ac + 8), pD(UD.Ac + 16)],
              easing: [pD(UD.Dc), pD(UD.Dc + 8), pD(UD.Dc + 16), pD(UD.Dc + 24)]
            })
          }
        }
        return this.keyframesVersion = wD, this.keyframesSettled = zD, this.lastKeyframes = rD, rD
      }
      addKeyframe() {
        const DD = this.deps.apiView(),
          zD = [ID.v.eye(DD, 0, 0), ID.v.eye(DD, 0, 1), ID.v.eye(DD, 0, 2)];
        return this.deps.replay.addKeyframe(zD, function(DD, zD) {
          const wD = Math.cos(zD);
          return [wD * Math.sin(DD), -Math.sin(zD), wD * Math.cos(DD)]
        }(ID.v.heading(DD, 0), ID.v.pitch(DD, 0)))
      }
      setKeyframe(DD) {
        return this.deps.replay.setKeyframe(DD.DU, Float64Array.from([...DD.position, ...DD.direction, ...DD.easing]))
      }
      moveKeyframe(DD, zD) {
        return this.deps.replay.moveKeyframe(DD, zD)
      }
      deleteKeyframes(DD, zD) {
        return this.deps.replay.deleteKeyframes(DD, zD)
      }
      setMark(DD) {
        var zD, wD;
        return this.deps.replay.setMark(null !== (zD = null === DD || void 0 === DD ? void 0 : DD.inTick) && void 0 !== zD ? zD : -1, null !== (wD = null === DD || void 0 === DD ? void 0 : DD.outTick) && void 0 !== wD ? wD : -1)
      }
      crop(DD, zD) {
        const wD = this.deps.replay.crop(DD, zD);
        return wD && this.reloadKeyframes(), wD
      }
      save(DD) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(DD)
      }
      recorderControl(DD) {
        this.deps.recorder.control(DD)
      }
      recorderPrefs(DD, zD) {
        this.deps.recorder.prefs(DD, zD)
      }
      recorderOption(DD, zD) {
        const wD = this.deps.cmd();
        return null !== wD && (0, ID.xf)(wD, 0, DD, null === zD ? xs : Ts.encode(zD))
      }
      recordFlyingText(DD, zD, wD, pD) {
        const sD = this.deps.cmd(),
          KD = Math.max(0, Math.min(4294967295, Math.round(pD)));
        return null !== sD && (0, ID.sf)(sD, 0, zD, wD, KD, Ts.encode(DD))
      }
      recordPlayerKilled(DD, zD, wD, pD) {
        const sD = this.deps.cmd();
        return null !== sD && (0, ID.yf)(sD, 0, DD, zD, Math.max(0, wD), Ts.encode(pD))
      }
      recordKillfeed(DD, zD, wD) {
        var pD, sD;
        const KD = this.deps.cmd(),
          rD = function(DD) {
            const zD = DD.reduce(((DD, zD) => {
                var wD;
                return DD + vw.ub + (null !== (wD = null === zD || void 0 === zD ? void 0 : zD.byteLength) && void 0 !== wD ? wD : 0)
              }), 0),
              wD = new Uint8Array(zD),
              pD = new DataView(wD.buffer);
            let sD = 0;
            for (const rD of DD) {
              var KD;
              pD.setUint16(sD, null !== (KD = null === rD || void 0 === rD ? void 0 : rD.byteLength) && void 0 !== KD ? KD : UD.Gc, !0), sD += vw.ub, null !== rD && (wD.set(rD, sD), sD += rD.byteLength)
            }
            return wD
          }([bs(DD.name), bs(DD.colour), bs(zD.name), bs(zD.colour), bs(wD)]);
        return null !== KD && (0, ID.wf)(KD, 0, null !== (pD = DD.id) && void 0 !== pD ? pD : ID.Tc, null !== (sD = zD.id) && void 0 !== sD ? sD : ID.Tc, rD)
      }
      recorderSession(DD, zD) {
        this.deps.recorder.session({
          session: zD,
          lobbyType: DD.lobbyType,
          game: DD.gameNameWithVariation,
          lobby: DD.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.YsD()
      }
      filePartDone(DD, zD) {
        this.deps.recorder.filePartDone(DD, zD)
      }
      fileDone(DD) {
        this.deps.recorder.fileDone(DD)
      }
    }
    const Ss = -2147483648;
    class is {
      constructor(DD) {
        var zD;
        this.deps = DD, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (zD = DD.now) && void 0 !== zD ? zD : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var DD, zD, wD;
        return null === (DD = null === (zD = (wD = this.deps).live) || void 0 === zD ? void 0 : zD.call(wD)) || void 0 === DD || DD
      }
      activated(DD) {
        var zD, wD;
        this.live && (this.viewerShown(!0 === (null === (zD = (wD = this.deps).viewerOpen) || void 0 === zD ? void 0 : zD.call(wD))), this.deps.client.recorderSession(DD, (0, Ps.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var DD, zD;
        this.live && (this.state.recording || !0 !== (null === (DD = (zD = this.deps).viewerOpen) || void 0 === DD ? void 0 : DD.call(zD))) ? this.deps.client.recorderControl(UD.Wc.ToggleRecording) : this.deps.notify(Qs.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(UD.Wc.SaveClip) : this.deps.notify(Qs.e.clippingNotOn)
      }
      viewerShown(DD) {
        this.live && this.deps.client.recorderControl(DD ? UD.Wc.ViewerOpened : UD.Wc.ViewerClosed)
      }
      setPrefs(DD, zD) {
        this.live && this.deps.client.recorderPrefs(DD, zD)
      }
      setOption(DD, zD) {
        this.live && this.deps.client.recorderOption(DD, zD)
      }
      recordFlyingText(DD, zD, wD, pD) {
        this.live && this.deps.client.recordFlyingText(DD, zD, wD, pD)
      }
      recordPlayerKilled(DD, zD, wD, pD) {
        this.live && this.deps.client.recordPlayerKilled(DD, zD, wD, pD)
      }
      recordKillfeed(DD, zD, wD) {
        this.live && this.deps.client.recordKillfeed(DD, zD, wD)
      }
      DU() {
        let DD = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, DD = {
            ...DD,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const zD = Math.floor((this.now() - this.recordingSince) / 1e3);
          zD !== DD.seconds && (DD = {
            ...DD,
            seconds: zD
          })
        }
        this.set(DD)
      }
      onEvent(DD) {
        var zD, wD;
        const {
          notify: pD
        } = this.deps, sD = Qs.e;
        switch (DD.what) {
          case UD.Sc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), pD(sD.recordingStarted);
            break;
          case UD.Sc.RecordingStopped:
            this.stopRecording(), pD(sD.recordingStopped), this.saveState(UD.hd.Recording, "saving");
            break;
          case UD.Sc.RecordingDiscarded:
            this.stopRecording(), pD(sD.recordingDiscarded);
            break;
          case UD.Sc.RecordingTurnedOff:
            this.stopRecording(), pD(sD.recordingTurnedOff);
            break;
          case UD.Sc.LimitReached:
            pD(sD.limitReached);
            break;
          case UD.Sc.ClipSaved:
            this.saveState(UD.hd.Clip, "saving");
            break;
          case UD.Sc.ClipEmpty:
            pD(sD.clipEmpty);
            break;
          case UD.Sc.ClippingNotOn:
            pD(sD.clippingNotOn);
            break;
          case UD.Sc.Disallowed:
            pD(sD.disallowed);
            break;
          case UD.Sc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case UD.Sc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case UD.Sc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case UD.Sc.SaveBusy:
            null === (zD = (wD = this.deps).onSaveState) || void 0 === zD || zD.call(wD, DD.kind, "busy"), pD(sD.saveBusy);
            break;
          case UD.Sc.CloseViewerFirst:
            pD(sD.closeViewerFirst)
        }
      }
      fileReady(DD, zD) {
        this.deps.download(zD), this.saveState(DD, "done"), this.deps.notify(DD === UD.hd.Clip ? Qs.e.clipSaved : Qs.e.recordingSaved)
      }
      failed(DD) {
        this.saveState(DD, "failed"), this.deps.notify(DD === UD.hd.Clip ? Qs.e.clipFailed : Qs.e.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(DD, zD) {
        var wD, pD;
        null === (wD = (pD = this.deps).onSaveState) || void 0 === wD || wD.call(pD, DD, zD)
      }
      set(DD) {
        DD !== this.state && (this.state = DD, this.deps.onState(DD))
      }
    }
    const ls = new TextDecoder;

    function Ws(DD, zD, wD, pD) {
      const sD = [];
      for (let KD = 0; KD < pD; KD++) {
        if (zD + vw.ub > wD) return null;
        const pD = DD.getUint16(zD, !0);
        if (zD += vw.ub, pD !== UD.Gc) {
          if (zD + pD > wD) return null;
          sD.push(ls.decode(new Uint8Array(DD.buffer, DD.byteOffset + zD, pD))), zD += pD
        } else sD.push(null)
      }
      return zD === wD ? sD : null
    }

    function Ns(DD, zD) {
      let wD = new DataView(new ArrayBuffer(0)),
        pD = !0;
      const sD = {
        replayFailed: (zD, wD, pD) => {
          DD.replayFailed({
            reason: zD,
            code: wD,
            version: pD
          })
        },
        replayOption: (zD, sD, KD, rD) => {
          const LD = function(DD, zD, wD, pD) {
            switch (zD) {
              case UD.id.Cleared:
                return 0 === pD ? null : void 0;
              case UD.id.Text:
                return ls.decode(new Uint8Array(DD.buffer, DD.byteOffset + wD, pD));
              case UD.id.Int:
                return pD === Int32Array.BYTES_PER_ELEMENT ? DD.getInt32(wD, !0) : void 0;
              case UD.id.Double:
                return pD === Float64Array.BYTES_PER_ELEMENT ? DD.getFloat64(wD, !0) : void 0;
              default:
                return
            }
          }(wD, sD, KD, rD);
          void 0 !== LD ? DD.replayOption({
            key: zD,
            value: LD
          }) : pD = !1
        },
        replayUiEvent: (zD, sD, KD, rD, LD, cD) => {
          const gD = function(DD, zD, wD, pD, sD, KD, rD) {
            const LD = KD + rD;
            switch (zD) {
              case UD.md.FlyingText: {
                const rD = Ws(DD, KD, LD, 1);
                return null !== rD && null !== rD[0] ? {
                  what: zD,
                  mK: wD,
                  kK: pD,
                  angle: sD,
                  contentJson: rD[0]
                } : null
              }
              case UD.md.PlayerKilled: {
                const pD = Ws(DD, KD, LD, 3);
                return pD ? {
                  what: zD,
                  killstreak: wD,
                  dead: pD[0],
                  killer: pD[1],
                  withItem: pD[2]
                } : null
              }
              case UD.md.Killfeed: {
                const wD = Ws(DD, KD, LD, 7);
                return wD ? {
                  what: zD,
                  killerId: wD[0],
                  killerName: wD[1],
                  killerColour: wD[2],
                  victimId: wD[3],
                  victimName: wD[4],
                  victimColour: wD[5],
                  withItem: wD[6]
                } : null
              }
              default:
                return null
            }
          }(wD, zD, sD, KD, rD, LD, cD);
          null !== gD ? DD.replayUiEvent(gD) : pD = !1
        },
        replayFilePart: (wD, sD, KD, rD) => {
          const LD = zD();
          KD + rD > LD.byteLength ? pD = !1 : DD.filePart(wD, sD, new Uint8Array(LD, KD, rD).slice())
        },
        replayFileReady: (zD, wD, pD, sD) => {
          DD.fileReady({
            save: zD,
            kind: wD,
            parts: pD,
            bytes: sD
          })
        },
        recorderEvent: (zD, wD, pD) => {
          DD.recorderEvent({
            what: zD,
            kind: wD,
            save: pD
          })
        },
        replayOpened: (zD, pD, sD) => {
          DD.replayOpened(ls.decode(new Uint8Array(wD.buffer, wD.byteOffset + pD, sD)))
        }
      };
      return (DD, zD, KD, rD) => !(DD < UD.U.ReplayFailed || DD > UD.U.RecorderEvent) && (wD = zD, pD = !0, (0, ID.de)(DD, zD, KD, rD, sD) && pD)
    }

    function Zs(DD) {
      let zD = null;
      const wD = Ns(DD, (() => {
        if (null === zD) throw new Error("a recorder event read outside recorderEventReader's call");
        return zD.buffer
      }));
      return (DD, pD) => {
        zD = pD;
        try {
          ! function(DD, zD) {
            const wD = DD.slice(),
              pD = new DataView(wD.buffer);
            for (let sD = 0; sD < wD.byteLength;) {
              if (sD + UD.Q > wD.byteLength) throw new Error(`the recorder module's events end mid-head at ${sD}`);
              const DD = pD.getUint32(sD, !0),
                KD = 65535 & DD,
                rD = DD >>> 16,
                LD = sD + UD.Q;
              if (LD + rD > wD.byteLength || !zD(KD, pD, LD, rD)) throw new Error(`the recorder module wrote a malformed event ${KD} (${rD} bytes) at ${sD}`);
              sD = LD + (0, UD.we)(rD)
            }
          }(DD, wD)
        } finally {
          zD = null
        }
      }
    }
    class ys {
      constructor(DD, zD) {
        this.acks = DD, this.handlers = zD, this.parts = new Map
      }
      onPart(DD, zD, wD) {
        let pD = this.parts.get(DD);
        pD || (pD = [], this.parts.set(DD, pD)), pD[zD] = wD, this.acks.filePartDone(DD, zD)
      }
      onReady(DD) {
        var zD;
        const wD = null !== (zD = this.parts.get(DD.save)) && void 0 !== zD ? zD : [];
        this.parts.delete(DD.save);
        const pD = function(DD, zD, wD) {
          if (DD.length !== zD) return null;
          let pD = 0;
          for (let rD = 0; rD < zD; rD++) {
            if (void 0 === DD[rD]) return null;
            pD += DD[rD].byteLength
          }
          if (pD !== wD) return null;
          if (1 === zD) return DD[0];
          const sD = new Uint8Array(wD);
          let KD = 0;
          for (const rD of DD) sD.set(rD, KD), KD += rD.byteLength;
          return sD
        }(wD, DD.parts, DD.bytes);
        this.acks.fileDone(DD.save), null === pD ? this.handlers.fileIncomplete(DD.save, DD.kind) : this.handlers.fileReady(DD.save, DD.kind, pD)
      }
      onDiscarded(DD) {
        this.parts.delete(DD)
      }
    }

    function ks() {
      return wD.e(60).then((() => wD(60390)))
    }
    class ms {
      constructor(DD) {
        this.deps = DD, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: zD
        } = DD;
        this.recorder = new is({
          client: zD,
          live: () => {
            var DD;
            return !0 !== (null === (DD = this.viewer) || void 0 === DD ? void 0 : DD.inPlayback)
          },
          viewerOpen: DD.viewerOpen,
          notify: DD.notify,
          download: zD => {
            var wD;
            null === (wD = DD.download) || void 0 === wD || wD.call(DD, zD)
          },
          onState: DD.onRecorderState,
          onSaveState: DD.onSaveState
        }), this.parts = new ys(zD, {
          fileReady: (DD, zD, wD) => {
            var pD;
            zD === UD.hd.Edited ? null === (pD = this.viewer) || void 0 === pD || pD.saveDone(wD) : this.recorder.fileReady(zD, wD)
          },
          fileIncomplete: (DD, zD) => {
            this.saveFailed(zD)
          }
        });
        const wD = {
          replayFailed: DD => {
            var zD;
            null === (zD = this.viewer) || void 0 === zD || zD.onFailed(DD)
          },
          replayOption: zD => {
            var wD;
            null === (wD = DD.onReplayOption) || void 0 === wD || wD.call(DD, zD)
          },
          replayUiEvent: zD => {
            var wD;
            null === (wD = DD.onReplayUiEvent) || void 0 === wD || wD.call(DD, zD)
          },
          filePart: (DD, zD, wD) => {
            this.parts.onPart(DD, zD, wD)
          },
          fileReady: DD => {
            this.parts.onReady(DD)
          },
          replayOpened: zD => {
            var wD;
            null === (wD = DD.onReplayOpened) || void 0 === wD || wD.call(DD, zD)
          },
          recorderEvent: DD => {
            var zD;
            switch (DD.what) {
              case UD.Sc.FileDiscarded:
                this.parts.onDiscarded(DD.save);
                break;
              case UD.Sc.SaveFailed:
                this.saveFailed(DD.kind);
                break;
              case UD.Sc.SaveBusy:
                if (null !== (zD = this.viewer) && void 0 !== zD && zD.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(DD);
                break;
              default:
                this.recorder.onEvent(DD)
            }
          }
        };
        this.sink = function(DD, zD) {
          return {
            onReplayEvent: Ns(DD, zD)
          }
        }(wD, DD.buffer), this.recorderEvents = Zs(wD)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var DD;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (DD = this.deps.loadViewer) && void 0 !== DD ? DD : ks)().catch((DD => {
          throw this.viewerChunk = null, DD
        })), this.viewerChunk.then((DD => (this.viewer ??= new DD.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var DD, zD;
            null === (DD = (zD = this.deps).onViewerChange) || void 0 === DD || DD.call(zD)
          }
        }), this.viewer))))
      }
      activated(DD) {
        this.recorder.activated(DD)
      }
      afterFrame(DD) {
        try {
          DD > 0 && this.recorder.DU()
        } finally {
          var zD;
          null === (zD = this.viewer) || void 0 === zD || zD.afterFrame()
        }
      }
      end() {
        var DD;
        null === (DD = this.viewer) || void 0 === DD || DD.end()
      }
      saveFailed(DD) {
        var zD;
        DD === UD.hd.Edited ? null === (zD = this.viewer) || void 0 === zD || zD.saveFailed(!1) : this.recorder.failed(DD)
      }
    }
    var es = wD(40540),
      os = wD(40558),
      as = wD(4823),
      us = wD(40835);
    class vs {
      constructor(DD) {
        this.deps = DD, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(DD, zD) {
        if (!this.deps.live() || 0 === DD && 0 === zD) return;
        const wD = (0, WD.p)(0, performance.now()),
          pD = this.deps.dragScale();
        (0, us.g)((() => {
          (0, WD.u)(UD.nb.MouseDown, 0, 0, 0, wD), (0, WD.u)(UD.nb.MouseMove, 0, DD * pD, zD * pD, 0), (0, WD.u)(UD.nb.MouseUp, 0, 0, 0, wD)
        }))
      }
      move(DD) {
        var zD, wD;
        this.analogue[0] = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.x) && void 0 !== zD ? zD : 0, this.analogue[1] = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.y) && void 0 !== wD ? wD : 0, this.send()
      }
      holdVertical(DD, zD) {
        const wD = "freeCamUp" === DD ? ID.Ub.Up : ID.Ub.Down;
        this.keys = zD ? this.keys | wD : this.keys & ~wD, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const DD = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== DD && !(0, ID.te)(DD, 0, this.analogue, this.keys)
      }
    }
    var ts = wD(3556),
      Fs = wD(726),
      Ys = wD(287),
      Hs = wD(103),
      qs = wD(34150);

    function DK() {
      const DD = pD.e.get("clientEscMenuOptions"),
        zD = (0, Fs.q)(DD);
      return {
        mouse: (0, Hs.isMobile)() ? zD : DD.mouseSensitivity,
        touch: zD,
        fovPercent: DD.cameraFOV
      }
    }

    function zK() {
      const DD = pD.e.get("clientEscMenuOptions"),
        zD = pD.e.get("isTouchScreen") ? (0, Fs.q)(DD) : DD.mouseSensitivity,
        wD = DK().mouse;
      return wD > 0 ? zD / wD : 1
    }

    function wK(DD) {
      const zD = () => {
        DD.setSoundPrefs(pD.e.get("soundVolume"), pD.e.get("soundOnFromAd"))
      };
      let wD = null;
      const sD = () => {
        const {
          showFog: zD,
          enableLighting: sD,
          fogChunkDistance: KD,
          chunkFadeIn: rD
        } = pD.e.get("clientEscMenuOptions"), LD = {
          showFog: zD,
          lighting: sD,
          fogChunks: KD,
          chunkFade: rD,
          cellLight: (0, ts.p)("cellLight") ? (0, ts.p)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        wD && (0, UD.ie)(wD) === (0, UD.ie)(LD) && wD.fogChunks === KD || (wD = LD, DD.setEnvPrefs(wD))
      };
      let KD = null;
      const LD = () => {
        const zD = function() {
          const DD = pD.e.get("clientEscMenuOptions");
          return {
            nametagsHidden: pD.e.get("areNametagsHidden"),
            crouchToggle: DD.crouchIsToggle,
            bhopDisabled: DD.disableBunnyHopping,
            disableBobbing: DD.disableBobbing,
            ezTowering: DD.ezTowering && (0, Ys.f)(),
            ezBridging: DD.ezBridging,
            showChunkBorders: DD.showChunkBorders,
            nametagCutDistance: (0, qs.h)()
          }
        }();
        (0, PD._d)(KD, zD) || (KD = zD, DD.setUiPrefs(zD))
      };
      let cD = null;
      const gD = () => {
        const zD = DK();
        (0, PD._d)(cD, zD) || (cD = zD, DD.setLookPrefs(zD))
      };
      zD(), sD(), LD(), gD();
      const RD = [(0, rD.o)("appManagerUpdated|soundVolume", zD), (0, rD.o)("appManagerUpdated|soundOnFromAd", zD), (0, rD.o)("appManagerUpdated|clientEscMenuOptions", (() => {
        sD(), LD(), gD()
      })), (0, rD.o)("appManagerUpdated|enabledDebugFeatures", sD), (0, rD.o)("appManagerUpdated|areNametagsHidden", LD), (0, rD.o)("appManagerUpdated|showDistantNametags", LD)];
      return () => {
        for (const DD of RD) DD()
      }
    }
    var pK = wD(40809),
      sK = wD(40818);
    var KK = (0, sK.c)("lend"),
      rK = (0, sK.c)("starting"),
      LK = (0, sK.c)("generation"),
      cK = (0, sK.c)("end");
    class gK {
      constructor(DD) {
        this.deps = DD, Object.defineProperty(this, cK, {
          value: RK
        }), Object.defineProperty(this, KK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, LK, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, pK.e)(this, KK)[KK] || (0, pK.e)(this, rK)[rK]
      }
      async start(DD) {
        if (this.active) return "busy";
        const zD = (0, pK.e)(this, LK)[LK];
        (0, pK.e)(this, rK)[rK] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, pK.e)(this, rK)[rK] = !1
        }
        if (zD !== (0, pK.e)(this, LK)[LK]) return "refused";
        const wD = this.deps.beginSave();
        if (!wD) return "refused";
        const pD = Number(BigInt.asUintN(32, DD)),
          sD = Number(BigInt.asUintN(32, DD >> 32n));
        let KD = "refused";
        return this.deps.recorderCall(((DD, zD) => {
          const rD = wD.editState,
            LD = DD.stage(rD.length);
          0 !== LD ? (new Uint8Array(zD.buffer, LD, rD.length).set(rD), DD.HsD(wD.headLen, pD, sD) && (KD = "sealing")) : KD = "tooLarge"
        }), !0), "sealing" !== KD ? (wD.end(), KD) : ((0, pK.e)(this, KK)[KK] = wD, "sealing")
      }
      beforeRecorderStep() {
        const DD = (0, pK.e)(this, KK)[KK];
        if (!DD) return null;
        let zD = -1,
          wD = 0;
        if (!this.deps.recorderCall((DD => {
            zD = DD.qsD(), zD > 0 && (wD = DD.DKD())
          }))) return (0, pK.e)(this, cK)[cK](DD, "stopped");
        if (zD < 0) return (0, pK.e)(this, cK)[cK](DD, "read");
        if (0 === zD) return null;
        const pD = DD.head(wD, zD);
        let sD = !1;
        if (pD && this.deps.recorderCall(((DD, wD) => {
            const KD = DD.stage(zD);
            0 !== KD && (new Uint8Array(wD.buffer, KD, zD).set(pD), sD = !0)
          }), !0), sD) return null;
        const KD = DD.givenUp();
        this.deps.recorderCall((DD => {
          DD.zKD()
        }));
        const rD = (0, pK.e)(this, cK)[cK](DD, KD ? "givenUp" : "stopped");
        return KD && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), rD
      }
      stop() {
        (0, pK.e)(this, LK)[LK]++;
        const DD = (0, pK.e)(this, KK)[KK];
        DD && (this.deps.recorderCall((DD => {
          DD.zKD()
        })), (0, pK.e)(this, cK)[cK](DD, "stopped"))
      }
    }

    function RK(DD, zD) {
      return (0, pK.e)(this, KK)[KK] = null, DD.end(), zD
    }

    function AK(DD, zD) {
      const wD = new Uint8Array(4),
        pD = new DataView(wD.buffer);
      return pD.setUint8(0, DD ? 1 : 0), pD.setUint16(2, Math.max(0, Math.min(65535, Math.round(zD))), !0), wD
    }

    function UK(DD, zD) {
      return DD > function(DD) {
        return 16777216 + 314572.8 * Math.max(0, DD)
      }(zD) + 33554432
    }
    let fK = null;

    function IK(DD) {
      return fK ??= async function(DD) {
        const zD = DD.loadInFlight();
        zD && await zD.catch((() => {}));
        if (DD.trapped()) return "trapped";
        if (DD.busy() || !UK(DD.memoryBytes(), DD.clipSeconds())) return "Nf";
        DD.unload();
        let wD = !1;
        try {
          wD = await DD.load()
        } catch {
          wD = !1
        }
        if (!wD) return DD.trapped() ? "trapped" : DD.MI() ? "MI" : "failed";
        return "recycled"
      }(DD).finally((() => {
        fK = null
      })), fK
    }
    const BK = "Replay recording couldn't load, so try again.",
      GK = new Set([UD.Wc.ToggleRecording, UD.Wc.SaveClip]);
    var hK = (0, sK.c)("bindings"),
      nK = (0, sK.c)("module"),
      MK = (0, sK.c)("memory"),
      OK = (0, sK.c)("trapped"),
      JK = (0, sK.c)("MI"),
      EK = (0, sK.c)("recycleDue"),
      QK = (0, sK.c)("loading"),
      XK = (0, sK.c)("generation"),
      VK = (0, sK.c)("viewDrawn"),
      PK = (0, sK.c)("clip"),
      CK = (0, sK.c)("session"),
      xK = (0, sK.c)("control"),
      TK = (0, sK.c)("deferred"),
      bK = (0, sK.c)("coreU8"),
      jK = (0, sK.c)("coreU32"),
      dK = (0, sK.c)("moduleU8"),
      SK = (0, sK.c)("edited"),
      iK = (0, sK.c)("sendSession"),
      lK = (0, sK.c)("checkNotInEvents"),
      WK = (0, sK.c)("clipping"),
      NK = (0, sK.c)("busy"),
      ZK = (0, sK.c)("use"),
      yK = (0, sK.c)("ensureLoaded"),
      kK = (0, sK.c)("loadOnce"),
      mK = (0, sK.c)("recycleAfterStep"),
      eK = (0, sK.c)("settleRecycle"),
      oK = (0, sK.c)("load"),
      aK = (0, sK.c)("attach"),
      uK = (0, sK.c)("resendHeld"),
      vK = (0, sK.c)("recycle"),
      tK = (0, sK.c)("send"),
      FK = (0, sK.c)("unload"),
      YK = (0, sK.c)("dropModule"),
      HK = (0, sK.c)("coreBytes"),
      qK = (0, sK.c)("coreWords"),
      Dr = (0, sK.c)("moduleBytes"),
      zr = (0, sK.c)("loadFailed"),
      wr = (0, sK.c)("call"),
      pr = (0, sK.c)("guard"),
      sr = (0, sK.c)("trapOn");
    class Kr {
      constructor(DD) {
        this.deps = DD, Object.defineProperty(this, sr, {
          value: xr
        }), Object.defineProperty(this, pr, {
          value: Cr
        }), Object.defineProperty(this, wr, {
          value: Pr
        }), Object.defineProperty(this, zr, {
          value: Vr
        }), Object.defineProperty(this, Dr, {
          value: Xr
        }), Object.defineProperty(this, qK, {
          value: Qr
        }), Object.defineProperty(this, HK, {
          value: Er
        }), Object.defineProperty(this, YK, {
          value: Jr
        }), Object.defineProperty(this, FK, {
          value: Or
        }), Object.defineProperty(this, tK, {
          value: Mr
        }), Object.defineProperty(this, vK, {
          value: nr
        }), Object.defineProperty(this, uK, {
          value: hr
        }), Object.defineProperty(this, aK, {
          value: Gr
        }), Object.defineProperty(this, oK, {
          value: Br
        }), Object.defineProperty(this, eK, {
          value: Ir
        }), Object.defineProperty(this, mK, {
          value: fr
        }), Object.defineProperty(this, kK, {
          value: Ur
        }), Object.defineProperty(this, yK, {
          value: Ar
        }), Object.defineProperty(this, ZK, {
          value: Rr
        }), Object.defineProperty(this, NK, {
          value: gr
        }), Object.defineProperty(this, WK, {
          value: cr
        }), Object.defineProperty(this, lK, {
          value: Lr
        }), Object.defineProperty(this, iK, {
          value: rr
        }), Object.defineProperty(this, hK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, OK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, JK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, EK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XK, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, VK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, PK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SK, {
          writable: !0,
          value: void 0
        }), (0, pK.e)(this, SK)[SK] = new gK({
          ensureLoaded: () => (0, pK.e)(this, yK)[yK](),
          recorderCall: (DD, zD) => {
            zD && (0, pK.e)(this, lK)[lK]("an edited save's stage");
            const wD = (0, pK.e)(this, wr)[wr](((zD, wD) => (DD(zD, wD), !0)));
            return null !== wD && void 0 !== wD && wD
          },
          beginSave: DD.beginSave,
          givenUp: DD.givenUp
        })
      }
      get active() {
        return null !== (0, pK.e)(this, nK)[nK]
      }
      get trapped() {
        return (0, pK.e)(this, OK)[OK]
      }
      get loading() {
        return null !== (0, pK.e)(this, QK)[QK]
      }
      prefetch() {
        (0, pK.e)(this, JK)[JK] || (0, pK.e)(this, OK)[OK] || (0, pK.e)(this, nK)[nK] || (0, pK.e)(this, QK)[QK] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, pK.e)(this, VK)[VK] = !0, (0, pK.e)(this, WK)[WK]() && (0, pK.e)(this, ZK)[ZK]()
      }
      prefs(DD, zD) {
        (0, pK.e)(this, PK)[PK] = {
          on: DD,
          seconds: zD
        }, (0, pK.e)(this, tK)[tK](UD.Rc.Prefs, AK(DD, zD)), DD && (0, pK.e)(this, VK)[VK] && (0, pK.e)(this, ZK)[ZK]()
      }
      control(DD) {
        const zD = function(DD) {
          return new Uint8Array([DD, 0, 0, 0])
        }(DD);
        if (GK.has(DD)) return (0, pK.e)(this, nK)[nK] ? void(0, pK.e)(this, tK)[tK](UD.Rc.Control, zD) : ((0, pK.e)(this, xK)[xK] = zD, void(0, pK.e)(this, ZK)[ZK]());
        (0, pK.e)(this, JK)[JK] || this.deps.coreCommand(UD.Rc.Control, zD)
      }
      session(DD) {
        (0, pK.e)(this, CK)[CK] = DD, (0, pK.e)(this, iK)[iK](DD)
      }
      filePartDone(DD, zD) {
        (0, pK.e)(this, tK)[tK](UD.Rc.FilePartDone, function(DD, zD) {
          const wD = new Uint8Array(8),
            pD = new DataView(wD.buffer);
          return pD.setUint32(0, DD, !0), pD.setUint32(4, zD, !0), wD
        }(DD, zD))
      }
      fileDone(DD) {
        return (0, pK.e)(this, tK)[tK](UD.Rc.FileDone, function(DD) {
          const zD = new Uint8Array(4);
          return new DataView(zD.buffer).setUint32(0, DD, !0), zD
        }(DD)), (0, pK.e)(this, mK)[mK]()
      }
      saveEdited(DD) {
        return (0, pK.e)(this, lK)[lK]("saveEdited"), (0, pK.e)(this, SK)[SK].start(DD)
      }
      afterFrame() {
        if (!(0, pK.e)(this, nK)[nK]) return;
        "read" === (0, pK.e)(this, SK)[SK].beforeRecorderStep() && (0, pK.e)(this, mK)[mK]();
        const DD = (0, pK.e)(this, EK)[EK];
        (0, pK.e)(this, EK)[EK] = null;
        const zD = (0, pK.e)(this, nK)[nK],
          wD = (0, pK.e)(this, MK)[MK];
        if (!zD || !wD) return void(null === DD || void 0 === DD || DD.resolve((0, pK.e)(this, OK)[OK] ? "trapped" : "Nf"));
        const {
          core: pD
        } = this.deps, sD = pD.sKD(2);
        let KD, rD, LD, cD, gD = 0,
          RD = 0;
        if (0 !== sD) {
          var AD, UD;
          const DD = (0, pK.e)(this, qK)[qK]();
          gD = null !== (AD = DD[sD >>> 2]) && void 0 !== AD ? AD : 0, RD = null !== (UD = DD[1 + (sD >>> 2)]) && void 0 !== UD ? UD : 0
        }
        try {
          if (RD > 0) {
            const DD = zD.feed(RD);
            0 !== DD && (0, pK.e)(this, Dr)[Dr](wD).set((0, pK.e)(this, HK)[HK]().subarray(gD, gD + RD), DD)
          }
          KD = zD.step(), rD = zD.KKD(), LD = zD.rKD(), cD = zD.LKD()
        } catch (fD) {
          if (!(0, pK.e)(this, sr)[sr](fD)) throw null === DD || void 0 === DD || DD.resolve("Nf"), fD;
          return void(null === DD || void 0 === DD || DD.resolve("trapped"))
        }
        if (KD > 0) {
          const DD = pD.cKD(2, KD);
          0 !== DD && (0, pK.e)(this, HK)[HK]().set((0, pK.e)(this, Dr)[Dr](wD).subarray(rD, rD + KD), DD)
        }
        if (LD > 0) {
          (0, pK.e)(this, TK)[TK] = [];
          try {
            this.deps.events(new Uint8Array(wD.buffer, cD, LD), wD)
          } catch (fD) {
            throw null === DD || void 0 === DD || DD.resolve("Nf"), fD
          } finally {
            const DD = (0, pK.e)(this, TK)[TK];
            (0, pK.e)(this, TK)[TK] = null;
            for (const [zD, wD] of DD)(0, pK.e)(this, tK)[tK](zD, wD)
          }
        }
        if (!(0, pK.e)(this, WK)[WK]() && !(0, pK.e)(this, NK)[NK]()) return (0, pK.e)(this, FK)[FK](), void(null === DD || void 0 === DD || DD.resolve("Nf"));
        null === DD || void 0 === DD || DD.resolve((0, pK.e)(this, vK)[vK]())
      }
      dispose() {
        (0, pK.e)(this, JK)[JK] = !0, (0, pK.e)(this, FK)[FK]()
      }
    }

    function rr(DD) {
      (0, pK.e)(this, tK)[tK](UD.Rc.Session, function(DD) {
        const zD = new TextEncoder,
          wD = zD.encode(DD.game).subarray(0, 65535),
          pD = zD.encode(DD.lobby).subarray(0, 65535),
          sD = new Uint8Array(22 + wD.length + 2 + pD.length),
          KD = new DataView(sD.buffer);
        KD.setFloat64(0, DD.unixMs, !0), KD.setBigUint64(8, BigInt.asUintN(64, DD.session), !0), KD.setUint8(16, DD.lobbyType);
        let rD = 20;
        for (const LD of [wD, pD]) KD.setUint16(rD, LD.length, !0), sD.set(LD, rD + 2), rD += 2 + LD.length;
        return sD
      }({
        ...DD,
        unixMs: this.deps.unixNow()
      }))
    }

    function Lr(DD) {
      false
    }

    function cr() {
      var DD, zD;
      return null !== (DD = null === (zD = (0, pK.e)(this, PK)[PK]) || void 0 === zD ? void 0 : zD.on) && void 0 !== DD && DD
    }

    function gr() {
      const DD = (0, pK.e)(this, nK)[nK];
      let zD = !0;
      if (DD) try {
        zD = DD.busy()
      } catch (wD) {
        if (!(0, pK.e)(this, sr)[sr](wD)) throw wD
      }
      return zD || (0, pK.e)(this, SK)[SK].active
    }
    async function Rr() {
      !(0, pK.e)(this, JK)[JK] && this.deps.allowed() ? await (0, pK.e)(this, yK)[yK]() : (0, pK.e)(this, xK)[xK] = null
    }

    function Ar() {
      return (0, pK.e)(this, OK)[OK] || (0, pK.e)(this, JK)[JK] ? Promise.resolve(!1) : (0, pK.e)(this, nK)[nK] ? Promise.resolve(!0) : ((0, pK.e)(this, QK)[QK] ??= (0, pK.e)(this, kK)[kK](), (0, pK.e)(this, QK)[QK])
    }
    async function Ur() {
      let DD = !1;
      try {
        return DD = await (0, pK.e)(this, oK)[oK](), DD
      } finally {
        DD || ((0, pK.e)(this, xK)[xK] = null), (0, pK.e)(this, QK)[QK] = null
      }
    }

    function fr() {
      if (!(0, pK.e)(this, nK)[nK]) return Promise.resolve((0, pK.e)(this, OK)[OK] ? "trapped" : "Nf");
      if (!(0, pK.e)(this, EK)[EK]) {
        let DD = () => {};
        const zD = new Promise((zD => {
          DD = zD
        }));
        (0, pK.e)(this, EK)[EK] = {
          promise: zD,
          resolve: DD
        }
      }
      return (0, pK.e)(this, EK)[EK].promise
    }

    function Ir(DD) {
      const zD = (0, pK.e)(this, EK)[EK];
      (0, pK.e)(this, EK)[EK] = null, null === zD || void 0 === zD || zD.resolve(DD)
    }
    async function Br() {
      let DD = (0, pK.e)(this, hK)[hK];
      if (!DD) {
        const zD = (0, pK.e)(this, XK)[XK];
        try {
          DD = await this.deps.load()
        } catch (wD) {
          return zD === (0, pK.e)(this, XK)[XK] && await (0, pK.e)(this, zr)[zr](wD), !1
        }
        if (zD !== (0, pK.e)(this, XK)[XK]) return this.deps.unload(), !1;
        const pD = DD,
          sD = (0, pK.e)(this, pr)[pr]((() => pD.gKD()));
        if (void 0 === sD) return !1;
        const KD = this.deps.core.RKD();
        if (sD !== KD) return await (0, pK.e)(this, zr)[zr](new Error(`recorder port version ${sD}, the core's ${KD}`)), !1;
        (0, pK.e)(this, hK)[hK] = DD
      }
      const zD = DD;
      try {
        if (!(0, pK.e)(this, pr)[pr]((() => ((0, pK.e)(this, nK)[nK] = new zD.UKD, (0, pK.e)(this, MK)[MK] = zD.wKD(), !0)))) return !1;
        (0, pK.e)(this, uK)[uK]();
        const DD = (0, pK.e)(this, xK)[xK];
        return (0, pK.e)(this, xK)[xK] = null, DD && (0, pK.e)(this, tK)[tK](UD.Rc.Control, DD), (0, pK.e)(this, aK)[aK]()
      } catch (wD) {
        return (0, pK.e)(this, FK)[FK](), await (0, pK.e)(this, zr)[zr](wD), !1
      }
    }

    function Gr() {
      return this.deps.core.fKD(0), 1 === this.deps.core.fKD(1) || ((0, pK.e)(this, FK)[FK](), this.deps.failed(BK), !1)
    }

    function hr() {
      (0, pK.e)(this, PK)[PK] && (0, pK.e)(this, tK)[tK](UD.Rc.Prefs, AK((0, pK.e)(this, PK)[PK].on, (0, pK.e)(this, PK)[PK].seconds)), (0, pK.e)(this, CK)[CK] && (0, pK.e)(this, iK)[iK]((0, pK.e)(this, CK)[CK])
    }

    function nr() {
      return IK({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var DD, zD;
          return null !== (DD = null === (zD = (0, pK.e)(this, PK)[PK]) || void 0 === zD ? void 0 : zD.seconds) && void 0 !== DD ? DD : 0
        },
        trapped: () => (0, pK.e)(this, OK)[OK],
        busy: () => (0, pK.e)(this, NK)[NK](),
        loadInFlight: () => (0, pK.e)(this, QK)[QK],
        MI: () => (0, pK.e)(this, JK)[JK],
        unload: () => {
          (0, pK.e)(this, FK)[FK]()
        },
        load: () => (0, pK.e)(this, yK)[yK]()
      })
    }

    function Mr(DD, zD) {
      (0, pK.e)(this, TK)[TK] ? (0, pK.e)(this, TK)[TK].push([DD, zD]): (0, pK.e)(this, wr)[wr](((wD, pD) => {
        const sD = wD.pKD(zD.length);
        0 !== sD && (new Uint8Array(pD.buffer, sD, zD.length).set(zD), wD.command(DD, zD.length))
      }))
    }

    function Or() {
      (0, pK.e)(this, XK)[XK]++, (0, pK.e)(this, eK)[eK]("Nf"), (0, pK.e)(this, SK)[SK].stop(), this.deps.core.fKD(0), (0, pK.e)(this, YK)[YK](), (0, pK.e)(this, OK)[OK] || ((0, pK.e)(this, hK)[hK] = null, this.deps.unload())
    }

    function Jr() {
      (0, pK.e)(this, wr)[wr]((DD => {
        DD.free()
      })), (0, pK.e)(this, nK)[nK] = null, (0, pK.e)(this, MK)[MK] = null, (0, pK.e)(this, dK)[dK] = null
    }

    function Er() {
      var DD;
      const zD = this.deps.coreBuffer();
      return (null === (DD = (0, pK.e)(this, bK)[bK]) || void 0 === DD ? void 0 : DD.buffer) !== zD && ((0, pK.e)(this, bK)[bK] = new Uint8Array(zD)), (0, pK.e)(this, bK)[bK]
    }

    function Qr() {
      var DD;
      const zD = this.deps.coreBuffer();
      return (null === (DD = (0, pK.e)(this, jK)[jK]) || void 0 === DD ? void 0 : DD.buffer) !== zD && ((0, pK.e)(this, jK)[jK] = new Uint32Array(zD, 0, zD.byteLength >>> 2)), (0, pK.e)(this, jK)[jK]
    }

    function Xr(DD) {
      var zD;
      const wD = DD.buffer;
      return (null === (zD = (0, pK.e)(this, dK)[dK]) || void 0 === zD ? void 0 : zD.buffer) !== wD && ((0, pK.e)(this, dK)[dK] = new Uint8Array(wD)), (0, pK.e)(this, dK)[dK]
    }
    async function Vr(DD) {
      await this.deps.staleOr(DD, (() => {
        this.deps.failed(BK)
      }))
    }

    function Pr(DD) {
      const zD = (0, pK.e)(this, nK)[nK],
        wD = (0, pK.e)(this, MK)[MK];
      if (zD && wD) return (0, pK.e)(this, pr)[pr]((() => DD(zD, wD)))
    }

    function Cr(DD) {
      if (!(0, pK.e)(this, OK)[OK]) try {
        return DD()
      } catch (zD) {
        if (!(0, pK.e)(this, sr)[sr](zD)) throw zD;
        return
      }
    }

    function xr(DD) {
      return DD instanceof WebAssembly.RuntimeError && ((0, pK.e)(this, OK)[OK] = !0, (0, pK.e)(this, nK)[nK] = null, (0, pK.e)(this, MK)[MK] = null, (0, pK.e)(this, dK)[dK] = null, (0, pK.e)(this, hK)[hK] = null, (0, pK.e)(this, xK)[xK] = null, (0, pK.e)(this, eK)[eK]("trapped"), this.deps.core.fKD(0), (0, pK.e)(this, SK)[SK].stop(), this.deps.crash(this.deps.markTrapped(DD)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Tr = wD(38638);
    const br = new Map([
      ["skyblock", () => wD.e(51).then((() => wD(38629)))]
    ]);

    function jr(DD) {
      const zD = br.get(DD);
      return zD ? zD().then((() => {
        const zD = (0, Tr.d)(DD);
        if (!zD) throw new Error(`${DD}'s replay hook module registered no hook`);
        return zD
      })) : null
    }
    class dr {
      constructor(DD) {
        this.deps = DD, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(DD) {
        if (this.pending.clear(), DD === this.game && null !== this.hook) return void(this.all = !0);
        const zD = ++this.generation;
        this.game = DD, this.hook = null, this.all = !1;
        const wD = this.deps.loadHook(DD);
        null === wD || void 0 === wD || wD.then((DD => {
          zD === this.generation && (this.hook = DD, this.all = !0)
        }), (DD => {
          zD === this.generation && this.deps.onError(DD)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(DD) {
        null === this.hook || this.all || this.pending.set(DD, !0)
      }
      entityInfoChanged(DD) {
        null === this.hook || this.all || this.pending.has(DD) || this.pending.set(DD, !1)
      }
      flush(DD) {
        const {
          hook: zD
        } = this;
        if (null === zD || !DD || !this.all && 0 === this.pending.size) return;
        const wD = this.deps.cmd();
        if (null === wD) return;
        const {
          api: pD
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: DD,
            count: zD
          } = Zw(pD, this.ids);
          this.ids = DD;
          for (let wD = 0; wD < zD; wD++) this.pending.set(DD[wD], !0)
        }
        const sD = this.ids = yw(this.ids, this.pending.size);
        let KD = 0;
        for (const gD of this.pending.keys()) sD[KD++] = gD;
        const rD = [],
          LD = kw(pD, sD, KD, ((DD, zD) => {
            null !== zD && rD.push({
              serverId: DD,
              info: zD,
              spawned: !0 === this.pending.get(DD)
            })
          }));
        if (LD) {
          this.pending.clear();
          for (const {
              serverId: DD,
              info: pD,
              spawned: sD
            }
            of rD) try {
            zD(pD, {
              setFacingTolerance: zD => {
                null === zD && sD || Lw(wD, DD, zD) || this.pending.set(DD, sD)
              }
            })
          } catch (cD) {
            this.deps.onError(cD)
          }
        }
      }
    }
    var Sr = (0, sK.c)("bindings"),
      ir = (0, sK.c)("module"),
      lr = (0, sK.c)("memory"),
      Wr = (0, sK.c)("trapped"),
      Nr = (0, sK.c)("generation"),
      Zr = (0, sK.c)("loading"),
      yr = (0, sK.c)("lend"),
      kr = (0, sK.c)("givenUp"),
      mr = (0, sK.c)("afterSave"),
      er = (0, sK.c)("opens"),
      or = (0, sK.c)("saveAskedAt"),
      ar = (0, sK.c)("unload"),
      ur = (0, sK.c)("dropModule"),
      vr = (0, sK.c)("loadFailed"),
      tr = (0, sK.c)("saveReadsBody"),
      Fr = (0, sK.c)("command"),
      Yr = (0, sK.c)("call"),
      Hr = (0, sK.c)("guard"),
      qr = (0, sK.c)("trapOn");
    class DL {
      constructor(DD) {
        this.deps = DD, Object.defineProperty(this, qr, {
          value: cL
        }), Object.defineProperty(this, Hr, {
          value: LL
        }), Object.defineProperty(this, Yr, {
          value: rL
        }), Object.defineProperty(this, Fr, {
          value: KL
        }), Object.defineProperty(this, tr, {
          get: sL,
          set: void 0
        }), Object.defineProperty(this, vr, {
          value: pL
        }), Object.defineProperty(this, ur, {
          value: wL
        }), Object.defineProperty(this, ar, {
          value: zL
        }), Object.defineProperty(this, Sr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ir, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Wr, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Nr, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Zr, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, yr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mr, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, er, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, or, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, pK.e)(this, ir)[ir] && null === (0, pK.e)(this, mr)[mr]
      }
      async open(DD, zD) {
        if ((0, pK.e)(this, Wr)[Wr]) return UD.fd.ModuleTrap;
        let wD = (0, pK.e)(this, Sr)[Sr];
        if (!wD) {
          const DD = (0, pK.e)(this, Nr)[Nr];
          (0, pK.e)(this, Zr)[Zr]++;
          try {
            wD = await this.deps.load()
          } catch (sD) {
            return (0, pK.e)(this, Zr)[Zr]--, DD !== (0, pK.e)(this, Nr)[Nr] ? "stopped" : (0, pK.e)(this, vr)[vr](sD, zD)
          }
          if ((0, pK.e)(this, Zr)[Zr]--, DD !== (0, pK.e)(this, Nr)[Nr]) return (0, pK.e)(this, Sr)[Sr] || 0 !== (0, pK.e)(this, Zr)[Zr] || (0, pK.e)(this, Wr)[Wr] || this.deps.unload(), "stopped";
          if ((0, pK.e)(this, Wr)[Wr]) return UD.fd.ModuleTrap;
          const pD = wD.gKD(),
            KD = this.deps.core.RKD();
          if (pD !== KD) return (0, pK.e)(this, vr)[vr](new Error(`replay port version ${pD}, the core's ${KD}`), zD);
          (0, pK.e)(this, Sr)[Sr] = wD
        }
        if (!(0, pK.e)(this, ir)[ir]) {
          const DD = wD;
          if (!(0, pK.e)(this, Hr)[Hr]((() => {
              (0, pK.e)(this, ir)[ir] = new DD.IKD, (0, pK.e)(this, lr)[lr] = DD.BKD()
            }))) return UD.fd.ModuleTrap
        }
        let pD = !1;
        return (0, pK.e)(this, Yr)[Yr](((zD, wD) => {
          null !== (0, pK.e)(this, mr)[mr] && zD.step(0, 0);
          const sD = zD.stage(DD.length);
          0 !== sD && (new Uint8Array(wD.buffer, sD, DD.length).set(DD), zD.open(), (0, pK.e)(this, kr)[kr] = (0, pK.e)(this, yr)[yr], (0, pK.e)(this, mr)[mr] = null, (0, pK.e)(this, er)[er]++, pD = !0)
        })) ? pD ? "opening" : UD.fd.TooLarge : UD.fd.ModuleTrap
      }
      beforeFrame(DD) {
        const zD = (0, pK.e)(this, ir)[ir],
          wD = (0, pK.e)(this, lr)[lr];
        if (!zD || !wD || null !== (0, pK.e)(this, mr)[mr]) return;
        const {
          core: pD
        } = this.deps, sD = pD.GKD(DD);
        if (sD < 0) return;
        const KD = Math.floor(sD);
        let rD, LD;
        try {
          rD = zD.step(KD, sD - KD), LD = zD.KKD()
        } catch (gD) {
          return void(0, pK.e)(this, qr)[qr](gD)
        }
        const cD = pD.cKD(1, rD);
        if (0 === cD) {
          const DD = (0, pK.e)(this, Yr)[Yr]((DD => {
            DD.close()
          }));
          if (!DD) return;
          return (0, pK.e)(this, tr)[tr] ? (0, pK.e)(this, mr)[mr] = "drop" : (0, pK.e)(this, ur)[ur](), void pD.hKD(UD.fd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), cD, rD).set(new Uint8Array(wD.buffer, LD, rD))
      }
      play() {
        (0, pK.e)(this, Fr)[Fr]((DD => {
          DD.play()
        }))
      }
      pause() {
        (0, pK.e)(this, Fr)[Fr]((DD => {
          DD.pause()
        }))
      }
      seek(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, pK.e)(this, Fr)[Fr]((wD => {
          wD.seek(DD, zD)
        }))
      }
      setMark(DD, zD) {
        return (0, pK.e)(this, Fr)[Fr]((wD => {
          wD.nKD(DD, zD)
        }))
      }
      addKeyframe(DD, zD) {
        return (0, pK.e)(this, Fr)[Fr]((wD => {
          wD.OKD(DD[0], DD[1], DD[2], zD[0], zD[1], zD[2])
        }))
      }
      setKeyframe(DD, zD) {
        return (0, pK.e)(this, Fr)[Fr]((wD => {
          wD.JKD(DD, zD)
        }))
      }
      moveKeyframe(DD, zD) {
        return (0, pK.e)(this, Fr)[Fr]((wD => {
          wD.EKD(DD, zD)
        }))
      }
      deleteKeyframes(DD, zD) {
        return (0, pK.e)(this, Fr)[Fr]((wD => {
          wD.QKD(DD, zD)
        }))
      }
      crop(DD, zD) {
        return null === (0, pK.e)(this, yr)[yr] && (0, pK.e)(this, Fr)[Fr]((wD => {
          wD.crop(DD, zD)
        }))
      }
      beginSave() {
        const DD = (0, pK.e)(this, or)[or];
        if ((0, pK.e)(this, or)[or] = null, null !== DD && DD !== (0, pK.e)(this, er)[er]) return null;
        let zD = 0,
          wD = null;
        if ((0, pK.e)(this, Yr)[Yr](((DD, pD) => {
            zD = DD.save(), 0 !== zD && (wD = new Uint8Array(pD.buffer, DD.XKD(), DD.VKD()).slice())
          })), 0 === zD || !wD) return null;
        const pD = {
          headLen: zD,
          editState: wD,
          givenUp: () => (0, pK.e)(this, kr)[kr] === pD,
          head: (DD, zD) => {
            if ((0, pK.e)(this, yr)[yr] !== pD || !(0, pK.e)(this, tr)[tr]) return null;
            let wD = null;
            return (0, pK.e)(this, Yr)[Yr](((pD, sD) => {
              const KD = pD.PKD();
              0 !== KD && DD >= 0 && zD >= 0 && DD + zD <= KD && (wD = new Uint8Array(sD.buffer, pD.CKD() + DD, zD))
            })), wD
          },
          end: () => {
            if ((0, pK.e)(this, yr)[yr] !== pD) return;
            (0, pK.e)(this, yr)[yr] = null, (0, pK.e)(this, kr)[kr] = null, (0, pK.e)(this, Yr)[Yr]((DD => {
              DD.xKD()
            }));
            const DD = (0, pK.e)(this, mr)[mr];
            (0, pK.e)(this, mr)[mr] = null, "unload" === DD ? (0, pK.e)(this, ar)[ar]() : "drop" === DD && (0, pK.e)(this, ur)[ur]()
          }
        };
        return (0, pK.e)(this, yr)[yr] = pD, pD
      }
      askSave() {
        (0, pK.e)(this, or)[or] = (0, pK.e)(this, er)[er]
      }
      setSpeed(DD) {
        (0, pK.e)(this, Fr)[Fr]((zD => {
          zD.TKD(DD)
        }))
      }
      setCameraMode(DD) {
        (0, pK.e)(this, Fr)[Fr]((zD => {
          zD.bKD(DD)
        }))
      }
      close() {
        (0, pK.e)(this, Fr)[Fr]((DD => {
          DD.close()
        }))
      }
      stop() {
        (0, pK.e)(this, Nr)[Nr]++, (0, pK.e)(this, tr)[tr] && ((0, pK.e)(this, Yr)[Yr]((DD => {
          DD.close()
        })), (0, pK.e)(this, ir)[ir]) ? (0, pK.e)(this, mr)[mr] = "unload" : (0, pK.e)(this, ar)[ar]()
      }
    }

    function zL() {
      (0, pK.e)(this, ur)[ur](), (0, pK.e)(this, Wr)[Wr] || ((0, pK.e)(this, Sr)[Sr] = null, this.deps.unload())
    }

    function wL() {
      (0, pK.e)(this, Yr)[Yr]((DD => {
        DD.free()
      })), (0, pK.e)(this, ir)[ir] = null, (0, pK.e)(this, lr)[lr] = null
    }
    async function pL(DD, zD) {
      return await this.deps.staleOr(DD, (() => {}), {
        beforeReload: zD
      }) ? "reloading" : UD.fd.ModuleLoad
    }

    function sL() {
      return null !== (0, pK.e)(this, yr)[yr] && (0, pK.e)(this, kr)[kr] !== (0, pK.e)(this, yr)[yr]
    }

    function KL(DD) {
      return null === (0, pK.e)(this, mr)[mr] && (0, pK.e)(this, Yr)[Yr](DD)
    }

    function rL(DD) {
      const zD = (0, pK.e)(this, ir)[ir],
        wD = (0, pK.e)(this, lr)[lr];
      return !(!zD || !wD) && (0, pK.e)(this, Hr)[Hr]((() => {
        DD(zD, wD)
      }))
    }

    function LL(DD) {
      if ((0, pK.e)(this, Wr)[Wr]) return !1;
      try {
        return DD(), !0
      } catch (zD) {
        return (0, pK.e)(this, qr)[qr](zD), !1
      }
    }

    function cL(DD) {
      if (!(DD instanceof WebAssembly.RuntimeError)) throw DD;
      (0, pK.e)(this, Wr)[Wr] = !0, (0, pK.e)(this, ir)[ir] = null, (0, pK.e)(this, lr)[lr] = null, (0, pK.e)(this, Sr)[Sr] = null, this.deps.crash(this.deps.markTrapped(DD)), this.deps.core.hKD(UD.fd.ModuleTrap)
    }
    var gL = wD(6523),
      RL = wD(40931);
    const AL = "[bloxd-wasm-client]";
    const UL = String(Ss);

    function fL(DD) {
      return null === DD || DD === UL ? void 0 : DD
    }

    function IL(DD) {
      var zD, wD, pD, sD, KD, LD, cD;
      switch (DD.what) {
        case UD.md.FlyingText: {
          let zD;
          try {
            zD = JSON.parse(DD.contentJson)
          } catch (gD) {
            return void console.warn(`${AL} a replay's flying text isn't JSON`, gD)
          }
          rD.l.KG("forceFlyingMiddleMessage", {
            content: zD,
            kK: DD.kK,
            angle: DD.angle,
            mK: DD.mK
          });
          break
        }
        case UD.md.PlayerKilled:
          (0, RL.f)({
            kind: "killed",
            body: {
              deadEId: null !== (zD = fL(DD.dead)) && void 0 !== zD ? zD : "",
              killerEId: fL(DD.killer),
              withItem: null !== (wD = DD.withItem) && void 0 !== wD ? wD : "",
              killstreak: DD.killstreak
            }
          });
          break;
        case UD.md.Killfeed:
          (0, RL.f)({
            kind: "custom",
            body: {
              killer: {
                eId: fL(DD.killerId),
                name: null !== (pD = DD.killerName) && void 0 !== pD ? pD : void 0,
                colour: null !== (sD = DD.killerColour) && void 0 !== sD ? sD : void 0
              },
              victim: {
                eId: fL(DD.victimId),
                name: null !== (KD = DD.victimName) && void 0 !== KD ? KD : void 0,
                colour: null !== (LD = DD.victimColour) && void 0 !== LD ? LD : void 0
              },
              withItem: null !== (cD = DD.withItem) && void 0 !== cD ? cD : ""
            }
          })
      }
    }
    const BL = "[bloxd-wasm-client]";

    function GL(DD) {
      if (void 0 === DD || null === DD || "" === DD) return null;
      const zD = Number(DD);
      return Number.isInteger(zD) && zD > Ss && zD <= 2147483647 ? zD : null
    }

    function hL(DD) {
      return {
        id: GL(DD.eId),
        name: "string" === typeof DD.name ? DD.name : null,
        colour: "string" === typeof DD.colour ? DD.colour : null
      }
    }

    function nL(DD) {
      const zD = (0, os.l)(vw.ec.PlayerKilled, (zD => {
          var wD, pD;
          const sD = (0, es.i)(zD);
          if (!(0, es.b)(sD)) return;
          const {
            deadEId: KD,
            killerEId: rD,
            withItem: LD,
            killstreak: cD
          } = sD;
          DD.recordPlayerKilled(null !== (wD = GL(KD)) && void 0 !== wD ? wD : Ss, null !== (pD = GL(rD)) && void 0 !== pD ? pD : Ss, "number" === typeof cD ? cD : 0, "string" === typeof LD ? LD : "")
        })),
        wD = (0, os.l)(vw.ec.CustomKillfeed, (zD => {
          const wD = (0, es.i)(zD);
          if (!(0, es.b)(wD) || !(0, es.b)(wD.killer) || !(0, es.b)(wD.victim)) return;
          const {
            killer: pD,
            victim: sD,
            withItem: KD
          } = wD;
          DD.recordKillfeed(hL(pD), hL(sD), "string" === typeof KD ? KD : null)
        }));
      return () => {
        zD(), wD()
      }
    }

    function ML(DD) {
      var zD;
      return void 0 === DD || null === DD ? null : null !== (zD = JSON.stringify(DD)) && void 0 !== zD ? zD : null
    }

    function OL(DD) {
      let zD = null;
      const wD = () => {
        const {
          enableClipping: wD,
          clipDurationSeconds: sD
        } = pD.e.get("clientEscMenuOptions"), KD = `${wD}:${sD}`;
        KD !== zD && (zD = KD, DD.recorder.setPrefs(wD, sD))
      };
      return wD(), (0, rD.o)("appManagerUpdated|clientEscMenuOptions", wD)
    }
    const JL = "replayModule",
      EL = "recorderModule";

    function QL(DD, zD, wD) {
      return function() {
        return DD.isStopped ? wD : zD(...arguments)
      }
    }
    const XL = {
      open: () => Promise.reject(new Error(Qs.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function VL() {
      return wD.e(64).then((() => wD(61231)))
    }

    function PL(DD) {
      (0, Qs.f)({
        text: DD,
        type: "Error"
      })
    }
    class CL {
      constructor(DD) {
        this.deps = DD, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: zD,
          api: pD,
          core: sD
        } = DD, KD = () => DD.memory().buffer, rD = () => zD.isStopped ? null : zD.rings.cmd, LD = QL(zD, ((DD, zD) => sD.cKD(DD, zD)), 0), cD = () => sD.RKD();
        let gD = null;
        this.replay = new DL({
          core: {
            GKD: QL(zD, (DD => sD.GKD(DD)), -1),
            cKD: LD,
            RKD: cD,
            hKD: QL(zD, (DD => {
              sD.hKD(DD)
            }), void 0)
          },
          coreBuffer: KD,
          load: async () => (gD = await wD.e(65).then((() => wD(61246))), gD.loadReplayModule()),
          unload: () => {
            var DD;
            null === (DD = gD) || void 0 === DD || DD.unloadReplayModule()
          },
          markTrapped: DD => gD ? gD.markReplayTrapped(DD) : new Error(String(DD)),
          staleOr: (zD, wD, pD) => DD.staleOr(JL, zD, wD, pD),
          crash: zD => {
            DD.reportFault(JL, zD)
          }
        });
        let RD = null;
        this.recorder = new Kr({
          core: {
            fKD: QL(zD, (DD => sD.fKD(DD)), 0),
            sKD: QL(zD, (DD => sD.sKD(DD)), 0),
            cKD: LD,
            RKD: cD
          },
          coreCommand: (DD, zD) => {
            var wD, pD;
            return null !== (wD = null === (pD = rD()) || void 0 === pD ? void 0 : pD.writeCmd(DD, 0, zD)) && void 0 !== wD && wD
          },
          coreBuffer: KD,
          load: async () => (RD = await VL(), RD.loadRecorderModule()),
          prefetch: () => {
            VL().then((DD => DD.prefetchRecorderModule())).catch((DD => {
              console.warn(`${BL} the recorder module didn't prefetch, so a save loads it:`, DD)
            }))
          },
          unload: () => {
            var DD;
            null === (DD = RD) || void 0 === DD || DD.unloadRecorderModule()
          },
          markTrapped: DD => RD ? RD.markRecorderTrapped(DD) : new Error(String(DD)),
          memoryBytes: () => {
            var DD, zD;
            return null !== (DD = null === (zD = RD) || void 0 === zD ? void 0 : zD.recorderMemoryBytes()) && void 0 !== DD ? DD : 0
          },
          staleOr: (zD, wD) => DD.staleOr(EL, zD, wD),
          crash: zD => {
            DD.reportFault(EL, zD)
          },
          allowed: () => !0 === DD.options.get("canRecordReplays"),
          failed: PL,
          events: (DD, zD) => {
            this.runtime.recorderEvents(DD, zD)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: PL,
          unixNow: () => Date.now()
        });
        const AD = new ds({
          core: {
            tsD: QL(zD, (DD => sD.tsD(DD)), 0),
            YsD: QL(zD, (() => {
              sD.YsD()
            }), void 0),
            lG: QL(zD, (() => sD.lG()), 0),
            FsD: QL(zD, (() => sD.FsD()), 0)
          },
          buffer: KD,
          apiView: () => pD.apiView,
          cmd: rD,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new dr({
          api: pD,
          cmd: rD,
          loadHook: jr,
          onError: DD => {
            console.warn(`${BL} the recorded game's replay hooks:`, DD)
          }
        });
        const UD = new ms({
          client: AD,
          buffer: KD,
          setHoldDraws: DD => {
            zD.setHoldDraws(DD)
          },
          notify: Qs.f,
          onRecorderState: () => {
            var DD;
            null === (DD = (0, Vs.g)()) || void 0 === DD || DD.recorderChanged()
          },
          onViewerChange: () => {
            var DD;
            null === (DD = (0, Vs.g)()) || void 0 === DD || DD.viewerChanged()
          },
          onReplayOption: zD => {
            ! function(DD, zD) {
              var wD, pD;
              const sD = vw.tb[zD.key];
              if (void 0 === sD) return;
              let KD = null !== (wD = zD.value) && void 0 !== wD ? wD : JSON.parse(JSON.stringify(null !== (pD = gL.c[sD]) && void 0 !== pD ? pD : null));
              if (null !== zD.value && zD.key < vw.Qb.Environment && "string" === typeof KD) try {
                KD = JSON.parse(KD)
              } catch (rD) {
                return void console.warn(`${AL} a replay's ${sD} isn't JSON`, rD)
              }
              DD.applyNewClientOptions({
                [sD]: KD
              })
            }(DD.options, zD)
          },
          onReplayUiEvent: IL,
          onReplayOpened: zD => {
            this.entityHooks.opened((0, PD.Tb)(zD)), DD.replayShaderPack(zD)
          },
          meshPending: () => {
            var DD, wD;
            return null !== (DD = null === (wD = zD.lastHeader) || void 0 === wD ? void 0 : wD.renderPending) && void 0 !== DD ? DD : 0
          },
          viewerOpen: Xs.d,
          download: DD => {
            (0, Os.k)(DD)
          }
        });
        this.runtime = UD, pD.replay = UD.sink, (0, Vs.v)(UD);
        const fD = new vs({
          live: () => {
            var DD;
            return !zD.isStopped && !0 === (null === (DD = UD.currentViewer) || void 0 === DD ? void 0 : DD.inPlayback)
          },
          cmd: rD,
          dragScale: zK
        });
        this.freecam = fD, (0, Vs.r)(fD), this.recordedOptions = function(DD, zD) {
          const wD = vw.tb,
            pD = wD.map(((wD, pD) => zD.subscribe(wD, (zD => {
              DD.setOption(pD, ML(zD))
            }))));
          return {
            sendAll() {
              wD.forEach(((wD, pD) => {
                DD.setOption(pD, ML(zD.get(wD)))
              }))
            },
            stop() {
              for (const DD of pD) DD()
            }
          }
        }(UD.recorder, DD.options), this.stops = [(0, sp.l)((DD => {
          fD.flush();
          try {
            this.replay.beforeFrame(DD)
          } catch (zD) {
            this.deps.reportFault("replayFrame", zD)
          }
        })), (0, sp.w)(((DD, zD) => {
          try {
            this.recorder.afterFrame(), zD && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (wD) {
            this.deps.reportFault("recorderFrame", wD)
          }
          try {
            UD.afterFrame(DD)
          } catch (wD) {
            this.deps.reportFault("replayRuntime", wD)
          }
        })), OL(UD), () => {
          this.recordedOptions.stop()
        }, nL(UD.recorder), (0, as.l)((DD => {
          let {
            action: zD,
            down: wD
          } = DD;
          var pD;
          wD && (null === (pD = (0, Vs.g)()) || void 0 === pD || pD.keyDown(zD))
        }))];
        const ID = () => {
          const DD = UD.currentViewer;
          return !0 === (null === DD || void 0 === DD ? void 0 : DD.isOpen) ? DD : null
        };
        (0, Es.i)({
          open: (DD, zD) => this.open(DD, zD),
          replayKey: () => {
            var DD, zD;
            return null !== (DD = null === (zD = ID()) || void 0 === zD ? void 0 : zD.id) && void 0 !== DD ? DD : null
          },
          saveRefusal: () => {
            var DD, zD;
            return null !== (DD = null === (zD = ID()) || void 0 === zD ? void 0 : zD.saveRefusal) && void 0 !== DD ? DD : null
          },
          encode: () => {
            var DD, zD;
            return null !== (DD = null === (zD = ID()) || void 0 === zD ? void 0 : zD.save()) && void 0 !== DD ? DD : Promise.resolve(null)
          },
          fileHandle: () => {
            var DD, zD;
            return null !== (DD = null === (zD = UD.currentViewer) || void 0 === zD ? void 0 : zD.fileHandle) && void 0 !== DD ? DD : null
          },
          markSaved: (DD, zD) => {
            var wD;
            null === (wD = UD.currentViewer) || void 0 === wD || wD.markSaved(DD, zD)
          }
        })
      }
      netEvent(DD) {
        if ("connection" === DD.type)
          if (DD.phase === UD.D.Activated) {
            this.activeConn = DD.conn;
            const zD = this.deps.sessionInfo(DD.conn);
            null !== zD && (this.runtime.activated({
              lobbyType: (0, CD.r)(zD.lobbyName),
              gameNameWithVariation: zD.gameNameWithVariation,
              lobbyName: zD.lobbyName
            }), this.recordedOptions.sendAll())
          } else DD.phase !== UD.D.Left && DD.phase !== UD.D.Closed || DD.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const DD of this.stops) DD();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Vs.m)() === this.runtime && (0, Vs.v)(null), (0, Vs.k)() === this.freecam && (0, Vs.r)(null), (0, Es.i)(XL), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(DD, zD) {
        const {
          running: wD
        } = this.deps;
        if (wD.isStopped) throw new Error(Qs.e.coreStopped.text);
        if (DD.byteLength > 67108864) throw new Error(Qs.e.cantOpen.text);
        let pD;
        try {
          pD = await async function(DD) {
            const zD = await DD.loadViewer();
            return zD.inPlayback || (0, sp.G)().leaveGame(null), zD
          }(this.runtime)
        } catch (sD) {
          throw console.warn(`${BL} the replay viewer didn't load`, sD), new Error(Qs.e.viewerLoadFailed.text)
        }
        if (wD.isStopped) throw new Error(Qs.e.coreStopped.text);
        await pD.open(DD, zD)
      }
    }
    var xL = wD(1956);

    function TL(DD, zD) {
      const {
        aux: wD,
        payload: pD
      } = function(DD) {
        return {
          aux: DD.reset ? UD.fc.ResetFirst : 0,
          payload: jL(DD.changes)
        }
      }(zD);
      DD.queueOptions(wD, pD) && (zD.reset && xL.e.reset(), xL.e.apply(zD.changes))
    }
    const bL = new TextEncoder;

    function jL(DD) {
      const zD = new dL;
      return iL(zD, DD), zD.bytes()
    }
    class dL {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(DD) {
        if (this.len + DD <= this.buf.length) return;
        const zD = new Uint8Array(Math.max(2 * this.buf.length, this.len + DD));
        zD.set(this.buf.subarray(0, this.len)), this.buf = zD, this.view = new DataView(zD.buffer)
      }
      u8(DD) {
        this.room(1), this.buf[this.len++] = DD
      }
      tagged(DD, zD, wD) {
        this.room(1 + zD), this.buf[this.len++] = DD, 1 === zD ? this.view.setUint8(this.len, wD) : 2 === zD ? this.view.setUint16(this.len, wD) : this.view.setUint32(this.len, wD), this.len += zD
      }
      signed(DD, zD, wD) {
        this.room(1 + zD), this.buf[this.len++] = DD, 1 === zD ? this.view.setInt8(this.len, wD) : 2 === zD ? this.view.setInt16(this.len, wD) : this.view.setInt32(this.len, wD), this.len += zD
      }
      f64(DD) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, DD), this.len += 8
      }
      raw(DD) {
        this.room(DD.length), this.buf.set(DD, this.len), this.len += DD.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function SL(DD, zD, wD, pD, sD, KD, rD) {
      zD < pD ? DD.u8(wD | zD) : null !== sD && zD < 256 ? DD.tagged(sD, 1, zD) : zD < 65536 ? DD.tagged(KD, 2, zD) : DD.tagged(rD, 4, zD)
    }

    function iL(DD, zD) {
      switch (typeof zD) {
        case "undefined":
          return void DD.raw(lL);
        case "boolean":
          return void DD.u8(zD ? 195 : 194);
        case "number":
          return void
          function(DD, zD) {
            zD >>> 0 === zD ? zD < 128 ? DD.u8(zD) : zD < 256 ? DD.tagged(204, 1, zD) : zD < 65536 ? DD.tagged(205, 2, zD) : DD.tagged(206, 4, zD) : (zD | 0) === zD ? zD >= -32 ? DD.u8(255 & zD) : zD >= -128 ? DD.signed(208, 1, zD) : zD >= -32768 ? DD.signed(209, 2, zD) : DD.signed(210, 4, zD) : DD.f64(zD)
          }(DD, zD);
        case "string": {
          const wD = bL.encode(zD);
          return SL(DD, wD.length, 160, 32, 217, 218, 219), void DD.raw(wD)
        }
        case "object":
          break;
        default:
          return void DD.u8(192)
      }
      if (null === zD) DD.u8(192);
      else if (Array.isArray(zD)) {
        SL(DD, zD.length, 144, 16, null, 220, 221);
        for (const wD of zD) iL(DD, wD)
      } else if (zD instanceof Uint8Array) SL(DD, zD.length, 0, 0, 196, 197, 198), DD.raw(zD);
      else {
        const wD = Object.keys(zD);
        SL(DD, wD.length, 128, 0, null, 222, 223);
        for (const pD of wD) iL(DD, pD), iL(DD, zD[pD])
      }
    }
    const lL = new Uint8Array([212, 0, 0]);
    var WL = wD(42457),
      NL = wD(42463),
      ZL = wD(40863),
      yL = wD(40907),
      kL = wD(2868);
    const mL = [1e3, 3e3, 9e3];
    class eL {
      constructor(DD) {
        this.host = DD, this.sets = new Map, this.table = [], this.generation = 0, this.MI = !1
      }
      onEvent(DD) {
        const zD = function(DD) {
          if (DD.byteLength !== UD.vd) return null;
          const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
          return {
            want: zD.getUint16(0, !0),
            release: zD.getUint16(2, !0)
          }
        }(DD);
        zD && !this.MI && (zD.release !== UD.wd && this.release(zD.release), zD.want !== UD.wd && this.want(zD.want))
      }
      reset(DD) {
        if (!this.MI) {
          for (const [DD, zD] of this.sets) "ready" === zD.state && this.releaseAll(zD.distinct), this.sets.delete(DD);
          this.table = DD, this.generation++
        }
      }
      dispose() {
        if (this.MI) return;
        this.MI = !0, this.generation++, this.table = [];
        const DD = [...this.sets.values()];
        this.sets.clear();
        let zD = null;
        for (const pD of DD)
          for (const DD of "ready" === pD.state ? pD.distinct : []) try {
            this.host.fpD(DD)
          } catch (wD) {
            zD ??= {
              error: wD
            }
          }
        if (zD) throw zD.error
      }
      isReady(DD) {
        var zD;
        return "ready" === (null === (zD = this.sets.get(DD)) || void 0 === zD ? void 0 : zD.state)
      }
      want(DD) {
        const zD = this.sets.get(DD);
        if ("loading" === (null === zD || void 0 === zD ? void 0 : zD.state)) return zD.wanted = !0, void this.capAnswer(DD, zD);
        if ("ready" === (null === zD || void 0 === zD ? void 0 : zD.state)) return void this.host.sendReady(aL(DD, zD.images, zD.size));
        const wD = this.table[DD];
        if (!wD || 1 !== wD.urls.length && wD.urls.length !== vw.cc.CubeFaces) return this.host.sendReady(uL(DD)), void this.host.onLoadFailed(DD, "", new Error(`no image set ${DD}`));
        const pD = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(DD, pD), this.load(DD, wD, pD, this.generation, 0), this.capAnswer(DD, pD)
      }
      capAnswer(DD, zD) {
        this.host.wait(4e3, (() => {
          this.sets.get(DD) === zD && zD.wanted && this.host.sendReady(uL(DD))
        }))
      }
      load(DD, zD, wD, pD, sD) {
        const KD = [...new Set(zD.urls)];
        Promise.allSettled(KD.map((DD => this.host.loadImage(DD, zD.orientation)))).then((rD => {
          const LD = rD.flatMap((DD => "fulfilled" === DD.status ? [DD.value] : [])),
            cD = pD === this.generation && this.sets.get(DD) === wD,
            gD = rD.findIndex((DD => "rejected" === DD.status));
          if (!cD || !wD.wanted) return this.MI ? void this.releaseAfterDispose(LD.map(oL)) : (this.releaseAll(LD.map(oL)), void(cD && this.sets.delete(DD)));
          gD < 0 ? this.loaded(DD, zD, KD, LD) : (this.releaseAll(LD.map(oL)), this.host.sendReady(uL(DD)), sD < mL.length ? this.host.wait(mL[sD], (() => {
            pD === this.generation && this.sets.get(DD) === wD && (wD.wanted ? this.load(DD, zD, wD, pD, sD + 1) : this.sets.delete(DD))
          })) : (this.sets.delete(DD), this.host.onLoadFailed(DD, KD[gD], rD[gD].reason)))
        }))
      }
      loaded(DD, zD, wD, pD) {
        const [sD] = pD, KD = [sD.width, sD.height], rD = pD.every((DD => DD.width === KD[0] && DD.height === KD[1])), LD = zD.urls.length === vw.cc.CubeFaces;
        if (!rD || KD[0] <= 0 || KD[1] <= 0 || KD[0] > 65535 || KD[1] > 65535 || LD && KD[0] !== KD[1]) {
          this.releaseAll(pD.map(oL)), this.sets.delete(DD), this.host.sendReady(uL(DD));
          const wD = pD.map((DD => `${DD.width}x${DD.height}`));
          return void this.host.onLoadFailed(DD, zD.urls[0], new Error(`set ${DD}'s images can't make its texture: ${wD.join(", ")}`))
        }
        const cD = zD.urls.map((DD => pD[wD.indexOf(DD)].id)),
          gD = pD.map(oL);
        this.sets.set(DD, {
          state: "ready",
          images: cD,
          distinct: gD,
          size: KD
        }), this.host.sendReady(aL(DD, cD, KD))
      }
      release(DD) {
        const zD = this.sets.get(DD);
        "loading" === (null === zD || void 0 === zD ? void 0 : zD.state) ? zD.wanted = !1: "ready" === (null === zD || void 0 === zD ? void 0 : zD.state) && (this.releaseAll(zD.distinct), this.sets.delete(DD))
      }
      releaseAll(DD) {
        for (const zD of DD) this.host.fpD(zD)
      }
      releaseAfterDispose(DD) {
        for (const zD of DD) try {
          this.host.fpD(zD)
        } catch {}
      }
    }

    function oL(DD) {
      return DD.id
    }

    function aL(DD, zD, wD) {
      const pD = new Uint8Array(vw.cc.SkyImagesReadyBytes),
        sD = new DataView(pD.buffer);
      return sD.setUint16(0, DD, !0), sD.setUint16(2, zD.length, !0), sD.setUint16(4, wD[0], !0), sD.setUint16(6, wD[1], !0), zD.slice(0, vw.cc.CubeFaces).forEach(((DD, zD) => {
        sD.setUint32(8 + 4 * zD, DD, !0)
      })), pD
    }

    function uL(DD) {
      const zD = new Uint8Array(vw.cc.SkyImagesReadyBytes),
        wD = new DataView(zD.buffer);
      return wD.setUint16(0, DD, !0), wD.setUint16(2, vw.cc.Failed, !0), zD
    }
    let vL = Promise.resolve();
    async function tL(DD, zD) {
      let wD;
      try {
        wD = await (0, kL.C)(DD)
      } catch (KD) {
        throw new ZL.d("fetch", DD, {
          cause: KD
        })
      }
      const pD = vL.then((() => async function(DD, zD) {
        const wD = new Blob([DD.slice()]);
        let pD = await createImageBitmap(wD, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: zD
        });
        const sD = 1024 / Math.max(pD.width, pD.height);
        if (sD < 1) {
          const DD = pD;
          try {
            pD = await createImageBitmap(DD, {
              resizeWidth: Math.max(1, Math.round(DD.width * sD)),
              resizeHeight: Math.max(1, Math.round(DD.height * sD)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            DD.close()
          }
        }
        return pD
      }(wD, zD)));
      let sD;
      vL = pD.catch((() => {}));
      try {
        sD = await pD
      } catch (KD) {
        throw new ZL.d("decode", DD, {
          cause: KD
        })
      }
      return {
        id: (0, ZL.m)(sD),
        width: sD.width,
        height: sD.height
      }
    }
    var FL = wD(2130),
      YL = wD(34051),
      HL = wD(39193);
    const qL = FL.d.length,
      Dc = new Set([...FL.d, "earth"]);

    function zc(DD) {
      const zD = [],
        wD = [],
        pD = (DD, pD) => {
          if ("custom" === pD.type) {
            wD.push({
              id: DD,
              kind: vw.cc.KindCustom,
              set: zD.length,
              earth: null
            });
            const sD = [pD.px, pD.py, pD.pz, pD.nx, pD.ny, pD.nz];
            zD.push({
              urls: (0, HL.f)(sD),
              orientation: "none"
            })
          } else wD.push({
            id: DD,
            kind: vw.cc.KindEarth,
            set: 0,
            earth: pD
          })
        };
      FL.d.forEach(((zD, wD) => {
        var sD;
        pD(wD, null !== (sD = wc(DD[zD])) && void 0 !== sD ? sD : YL.n[zD])
      }));
      const sD = wc(DD.earth);
      "earth" === (null === sD || void 0 === sD ? void 0 : sD.type) && pD(qL, sD);
      const KD = new TextEncoder,
        rD = [],
        LD = [];
      for (const [fD, ID] of Object.entries(DD)) {
        const DD = Dc.has(fD) ? null : wc(ID);
        if (null === DD) continue;
        const zD = KD.encode(fD);
        zD.length > 255 ? LD.push(`Ignoring texture pack skybox ${fD}, whose name is over 255 bytes`) : rD.length === vw.cc.MaxAdded ? LD.push(`Ignoring texture pack skybox ${fD}, past the ${vw.cc.MaxAdded} skies a pack can add`) : (rD.push(zD), pD(vw.cc.AddedId, DD))
      }
      const cD = zD.length;
      zD.push({
        urls: YL.e.map((DD => YL.f + DD)),
        orientation: "none"
      }), zD.push({
        urls: [YL.j],
        orientation: "flipY"
      }), zD.push({
        urls: [YL.b],
        orientation: "flipY"
      });
      const gD = vw.cc.SkyTableHeaderBytes + wD.length * vw.cc.SkyTableEntryBytes,
        RD = new Uint8Array(gD + rD.reduce(((DD, zD) => DD + 1 + zD.length), 0)),
        AD = new DataView(RD.buffer);
      AD.setUint16(0, cD, !0), AD.setUint16(2, cD + 1, !0), AD.setUint16(4, cD + 2, !0), AD.setUint16(6, wD.length, !0), wD.forEach(((DD, zD) => {
        const wD = vw.cc.SkyTableHeaderBytes + zD * vw.cc.SkyTableEntryBytes;
        AD.setUint16(wD, DD.id, !0), AD.setUint8(wD + 2, DD.kind);
        const pD = wD + 4;
        DD.earth ? function(DD, zD, wD) {
          const pD = DD;
          let sD = 0,
            KD = 0;
          for (const [rD, LD] of pc) {
            const DD = pD[rD];
            "number" === typeof DD && Number.isFinite(DD) && (zD.setFloat32(wD + 4 * LD, DD, !0), sD |= 1 << LD)
          }
          for (const [rD, LD, cD] of sc) {
            const DD = pD[rD];
            Array.isArray(DD) && 3 === DD.length && DD.every((DD => "number" === typeof DD && Number.isFinite(DD))) && (DD.forEach(((DD, pD) => {
              zD.setFloat32(wD + cD + 4 * pD, DD, !0)
            })), sD |= LD)
          }
          Kc.forEach(((DD, KD) => {
            let [rD, LD] = DD;
            const cD = pD[rD];
            "number" === typeof cD && Number.isFinite(cD) && (zD.setFloat32(wD + vw.v.CameraOffsetAt + 4 * KD, cD, !0), sD |= LD)
          }));
          for (const [rD, LD] of rc) {
            const DD = pD[rD];
            null !== DD && void 0 !== DD && (sD |= LD, DD && (KD |= LD >>> 14))
          }
          zD.setUint32(wD + vw.v.PresentAt, sD, !0), zD.setUint8(wD + vw.v.FlagsAt, KD)
        }(DD.earth, AD, pD) : AD.setUint16(pD, DD.set, !0)
      }));
      let UD = gD;
      for (const fD of rD) RD[UD] = fD.length, RD.set(fD, UD + 1), UD += 1 + fD.length;
      return {
        payload: RD,
        sets: zD,
        leftOut: LD
      }
    }

    function wc(DD) {
      if ("object" !== typeof DD || null === DD) return null;
      const zD = DD;
      if ("earth" === zD.type) return DD;
      return "custom" === zD.type && ["px", "py", "pz", "nx", "ny", "nz"].every((DD => {
        const wD = zD[DD];
        return "string" === typeof wD && wD.length > 0
      })) ? DD : null
    }
    const pc = [
        ["inclination", vw.v.Inclination],
        ["turbidity", vw.v.Turbidity],
        ["luminance", vw.v.Luminance],
        ["rayleigh", vw.v.Rayleigh],
        ["mieCoefficient", vw.v.MieCoefficient],
        ["mieDirectionalG", vw.v.MieDirectionalG],
        ["distance", vw.v.Distance],
        ["azimuth", vw.v.Azimuth]
      ],
      sc = [
        ["sunPosition", vw.v.SunPosition, vw.v.SunPositionAt],
        ["up", vw.v.Up, vw.v.UpAt],
        ["vertexTint", vw.v.VertexTint, vw.v.VertexTintAt]
      ],
      Kc = [
        ["xCameraOffset", vw.v.CameraOffsetX],
        ["yCameraOffset", vw.v.CameraOffsetY],
        ["zCameraOffset", vw.v.CameraOffsetZ]
      ],
      rc = [
        ["useSunPosition", vw.v.UseSunPosition],
        ["dithering", vw.v.Dithering],
        ["infiniteDistance", vw.v.InfiniteDistance]
      ];

    function Lc(DD, zD, wD) {
      const pD = new gc({
        writeCmd: DD,
        warn: zD,
        followPack: cc(wD, zD)
      });
      return pD.start(), pD
    }

    function cc(DD, zD) {
      return wD => {
        let pD = () => {};
        const sD = DD((DD => {
          pD(), pD = () => {}, null !== DD ? pD = DD.subscribe((DD => {
            wD(function(DD, zD, wD) {
              if ("object" !== typeof DD || null === DD) return null;
              const pD = DD.skyBoxes;
              if ("object" !== typeof pD || null === pD) return null;
              if ("player" === zD) return pD;
              return Object.fromEntries(Object.entries(pD).filter((DD => {
                let [zD, pD] = DD;
                return !! function(DD) {
                  if ("object" !== typeof DD || null === DD) return !1;
                  return "earth" === DD.type || Object.entries(DD).every((DD => {
                    let [zD, wD] = DD;
                    return "type" === zD || ("" === (pD = wD) || null !== function(DD) {
                      var zD, wD, pD;
                      return "string" !== typeof DD ? null : null !== (zD = null === (wD = Rc.exec(DD)) || void 0 === wD || null === (pD = wD.groups) || void 0 === pD ? void 0 : pD.base64) && void 0 !== zD ? zD : null
                    }(pD));
                    var pD
                  }))
                }(pD) || (wD(`Ignoring texture pack skybox ${zD}, whose faces are not all data URLs`, null), !1)
              })))
            }(DD.pack, null === DD.gameSource ? "player" : "customGame", zD))
          })) : wD(null)
        }));
        return () => {
          sD(), pD()
        }
      }
    }
    class gc {
      constructor(DD) {
        var zD, wD, pD;
        this.host = DD, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.MI = !1, this.wait = null !== (zD = DD.wait) && void 0 !== zD ? zD : (DD, zD) => {
          setTimeout(zD, DD)
        }, this.loader = new eL({
          loadImage: null !== (wD = DD.loadImage) && void 0 !== wD ? wD : tL,
          fpD: null !== (pD = DD.fpD) && void 0 !== pD ? pD : ZL.n,
          sendReady: DD => {
            this.queue.push({
              kind: vw.cc.SkyImagesReady,
              payload: DD
            })
          },
          onLoadFailed: (zD, wD, pD) => {
            DD.warn(`sky image set ${zD} (${wD}) didn't load: the last sky stays`, pD)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(yL.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((DD => {
          this.write(null !== DD && void 0 !== DD ? DD : {})
        }))
      }
      onEvent(DD) {
        this.loader.onEvent(DD)
      }
      drain() {
        if (0 === this.queue.length) return;
        let DD = 0;
        for (; DD < this.queue.length && this.host.writeCmd(this.queue[DD].kind, 0, this.queue[DD].payload);) DD++;
        DD > 0 && this.queue.splice(0, DD)
      }
      dispose() {
        this.MI = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(DD) {
        if (this.MI) return;
        const zD = zc(DD);
        if (!(this.written && (wD = this.written, pD = zD, wD.payload.length === pD.payload.length && wD.payload.every(((DD, zD) => DD === pD.payload[zD])) && wD.sets.length === pD.sets.length && wD.sets.every(((DD, zD) => {
            const wD = pD.sets[zD];
            return DD.orientation === wD.orientation && DD.urls.length === wD.urls.length && DD.urls.every(((DD, zD) => DD === wD.urls[zD]))
          }))))) {
          var wD, pD;
          for (const DD of zD.leftOut) this.host.warn(DD, null);
          this.written = zD, this.loader.reset(zD.sets), this.queue = this.queue.filter((DD => DD.kind !== vw.cc.SkyImagesReady)), this.queue.push({
            kind: vw.cc.SkyTable,
            payload: zD.payload
          })
        }
      }
    }
    const Rc = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Ac = wD(2790),
      Uc = wD(2980),
      fc = wD(295),
      Ic = wD(182),
      Bc = wD(2793),
      Gc = wD(2802),
      hc = wD(275),
      nc = wD(277),
      Mc = wD(2888),
      Oc = wD(2910),
      Jc = wD(2921),
      Ec = wD(116),
      Qc = wD(323),
      Xc = wD(40748);
    class Vc {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, os.l)(Mp.L, (DD => {
          this.onReply((0, es.e)(Mp.L, DD), performance.now())
        }))
      }
      onFrame(DD, zD) {
        null === this.id ? this.id = DD : DD !== this.id && (this.id = DD, this.sentMs = document.hidden ? null : zD)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(DD, zD) {
        DD === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(zD - this.sentMs), this.sentMs = null)
      }
      take() {
        const DD = this.roundTripMs;
        return this.roundTripMs = null, DD
      }
      stop() {
        this.stopReplies()
      }
    }
    class Pc {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(DD, zD, wD, pD) {
        const sD = DD - this.sampled >>> 0,
          KD = zD - this.timed >>> 0,
          rD = wD - this.frameUs >>> 0,
          LD = this.primed;
        return this.sampled = DD, this.timed = zD, this.frameUs = wD, this.primed = !0, !(!LD || sD > 64 || KD > 64) && (pD && rD <= 1e6 * KD && (this.windowTimed += KD, this.windowUs += rD), pD && sD > 0)
      }
      reset() {}
      snapshotAndReset() {
        const DD = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: DD,
          submitToDoneMs: null
        }
      }
    }
    const Cc = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class xc {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(DD, zD) {
        const wD = Math.min(4096, this.count + zD);
        this.samples.fill(DD, this.count, wD), this.count = wD
      }
      clear() {
        this.count = 0
      }
      take() {
        const DD = this.count;
        if (this.count = 0, DD < 30) return Cc;
        const zD = this.samples.subarray(0, DD).sort(),
          wD = wD => zD[Math.min(DD - 1, Math.floor(wD * DD))];
        return {
          lagP50Ms: wD(.5),
          lagP90Ms: wD(.9)
        }
      }
    }
    class Tc {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new xc
      }
      onFrame(DD, zD) {
        const wD = DD.headerWord(vw.G.Pacing),
          pD = DD.headerWord(vw.G.PacingLagUs),
          sD = (wD >>> vw._.LagsShift) - (this.word >>> vw._.LagsShift) & vw._.CountMask,
          KD = sD > 0 ? (pD - this.lagUs >>> 0) / sD / 1e3 : 0,
          rD = this.primed && sD <= 64 && KD <= 6e4;
        this.word = wD, this.lagUs = pD, this.primed = !0, rD && zD && sD > 0 && 0 !== (wD & vw._.Defaulted) && this.lags.add(KD, sD)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(DD) {
        return DD ? this.lags.take() : (this.lags.clear(), Cc)
      }
    }
    var bc = wD(311);

    function jc() {
      return Date.now() - performance.now()
    }
    class dc {
      constructor() {
        this.rafs = 0, this.Qg = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = jc(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, bc.f)(), this.onBlur = () => {
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
        (0 === this.Qg || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.Qg++, this.heldAtRaf = this.rafs
      }
      words(DD) {
        const zD = DD ? this.rafs - 1 : this.rafs;
        return function(DD) {
          let zD = 0 === DD.rafs ? "raf:none" : "raf:some";
          return DD.Qg > 0 && (zD += " pace:held"), DD.heldRunMs > 1e4 && (zD += " pace:stalled"), DD.blurred && (zD += " blur"), DD.resumed && (zD += " resumed"), DD.embedded && (zD += " embedded"), DD.clockGainMs > 2e3 && (zD += " clockjump"), zD
        }({
          clockGainMs: jc() - this.startClockOffsetMs,
          rafs: zD,
          Qg: this.Qg,
          heldRunMs: this.Qg > 0 && this.heldAtRaf === zD ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(DD) {
        this.rafs = 0, this.Qg = 0, this.heldAtRaf = -1, this.startMs = DD, this.startClockOffsetMs = jc(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var Sc = wD(34167),
      ic = wD(2890),
      lc = wD(40799),
      Wc = wD(34158),
      Nc = wD(2805),
      Zc = wD(2894);
    const yc = {
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

    function kc(DD) {
      return new mc(DD)
    }
    class mc {
      constructor(DD) {
        this.shell = DD, this.tracker = new Gc.d, this.gpu = new Pc, this.pacing = new Tc, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new Vc, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new dc, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, Sc.e)(DD.backend, DD.canvas, DD.adapterVendor), this.tracker.start((() => !DD.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Nc.b)("wasm", (() => {
          const {
            n: zD,
            sampleCount: wD
          } = (0, lc.e)();
          return `${DD.backend}, quality steps aim at up to ${Zc.b.target.maxFps} fps, pixel n ${zD}, msaa ${wD}`
        }), (zD => {
          zD.setLoadCounts(DD.readLoadCounts), this.frameDebug = zD
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(DD) {
        var zD;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(DD), null === (zD = this.frameDebug) || void 0 === zD || zD.animationFrame()
      }
      sendsWent(DD, zD, wD) {
        this.ping.onFrame(DD.headerWord(vw.G.PingSent), zD), this.sendsStartMs = zD, this.sendsEndMs = wD
      }
      frameRan(DD, zD, wD, pD) {
        var sD;
        this.ping.onFrame(DD.headerWord(vw.G.PingSent), wD);
        const KD = this.tracker;
        this.pacing.onFrame(DD, KD.isSampling());
        const rD = DD.headerWord(vw.G.TickUs) / 1e3 + (0, sp.I)();
        var LD;
        (KD.QJ(rD), null === (sD = this.frameDebug) || void 0 === sD || sD.wasmFrame(DD, zD, wD, pD, KD.isSampling(), rD), null !== this.game) && (null === (LD = this.frameDebug) || void 0 === LD || LD.inGame());
        const cD = this.sendsStartMs >= zD ? this.sendsEndMs - this.sendsStartMs : 0,
          gD = Math.max(0, wD - zD - rD - cD);
        if ("drawn" !== pD) return void("paced" === pD ? (this.pacedCpuMs += gD, this.stallGap.paced()) : "skipped" === pD && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(zD, !0), KD.onFrameStart(zD);
        this.gpu.onFrame(DD.headerWord(vw.G.GpuSampled), DD.headerWord(vw.G.GpuTimed), DD.headerWord(vw.G.GpuFrameUs), KD.isSampling()) && KD.onGpuSampleStarted(), KD.onFrameCpu(gD + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(zD)
      }
      framePaced() {
        var DD;
        this.stallGap.paced(), null === (DD = this.frameDebug) || void 0 === DD || DD.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const DD of this.timers) clearInterval(DD);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const DD = this.shell.joinedGame();
        if (DD !== this.game) {
          var zD;
          if (this.game = DD, null !== DD) null === (zD = this.frameDebug) || void 0 === zD || zD.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== DD
      }
      checkMainStall(DD, zD) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const wD = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          pD = this.lastDrawnMs < 0 ? 0 : DD - this.lastDrawnMs;
        this.lastDrawnMs = DD;
        const sD = !this.stallPending && pD > 5e3,
          KD = sD ? this.stallGap.words(zD) : "";
        this.stallGap.restart(DD), this.stallPending || (sD ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(pD, wD.blockingSinceMark(), KD)
        }), 0)) : wD.markFrame(DD))
      }
      countFpsFrame(DD) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = DD
        }
        this.fpsFrames++;
        const zD = DD - this.fpsSpanStartMs;
        if (!(zD < Jc.c)) {
          if (!document.hidden) {
            const DD = 1e3 * this.fpsFrames / zD;
            this.firstSpanFps ??= DD, this.initialFps = this.firstSpanFps, this.fpsOverTime = DD
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = DD
        }
      }
      flush() {
        const DD = this.followGame(),
          {
            cpuFrameMs: zD,
            refreshHz: wD,
            cpuBottleneck: sD,
            frameIntervalCv: KD,
            ...rD
          } = this.tracker.snapshotAndReset(),
          LD = this.shell.inGame(),
          cD = LD && this.inGameAtLastFlush,
          gD = cD ? rD : (0, Bc.f)(rD),
          RD = this.pacing.snapshotAndReset(cD);
        if (this.inGameAtLastFlush = LD, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !DD) return;
        const AD = performance.now(),
          fD = (0, Oc.s)((0, Oc.o)(AD), this.unsentPage),
          BD = function(DD, zD, wD, sD, KD, rD, LD, cD) {
            var gD, RD, AD, UD, fD;
            const ID = {},
              {
                canvas: BD
              } = DD,
              GD = (0, Mc.f)({
                refreshHz: zD.refreshHz,
                msaa: DD.msaa(),
                autoMsaaOff: (0, Wc.b)()
              });
            for (const hD of (0, Uc.f)()) {
              const nD = hD.name;
              let MD;
              if ((0, fc.x)(nD)) MD = (0, Oc.d)(nD);
              else if ((0, Oc.i)(nD)) MD = cD[nD];
              else if ((0, Mc.j)(nD)) MD = GD[nD];
              else switch (nD) {
                case "fps":
                  MD = sD;
                  break;
                case "nL":
                  MD = KD;
                  break;
                case "QL":
                  MD = (0, ic.E)((0, lc.e)().n);
                  break;
                case "XL":
                  MD = Math.max(BD.width, BD.height);
                  break;
                case "VL":
                  MD = Math.min(BD.width, BD.height);
                  break;
                case "PL":
                  MD = navigator.hardwareConcurrency || null;
                  break;
                case "CL":
                  MD = (0, Hs.getWebGpuSupported)();
                  break;
                case "xL":
                  MD = null === DD.fallbackReason ? null : yc[DD.fallbackReason];
                  break;
                case "TL":
                  MD = zD.cpuFrameMs;
                  break;
                case "bL":
                  MD = zD.refreshHz;
                  break;
                case "jL":
                  MD = zD.cpuBottleneck;
                  break;
                case "dL":
                  MD = zD.frameIntervalCv;
                  break;
                case "SL":
                  MD = zD.frameMs;
                  break;
                case "iL":
                  MD = zD.tickMs;
                  break;
                case "ZL":
                  MD = zD.mainBusyShare;
                  break;
                case "yL":
                  MD = zD.mainProbeDelayMs;
                  break;
                case "lL":
                  MD = zD.longAnimationFramesPerMin;
                  break;
                case "WL":
                  MD = zD.longAnimationFrameTimeShare;
                  break;
                case "NL":
                  MD = zD.longAnimationFrameScriptShare;
                  break;
                case "kL":
                  MD = zD.gpuPassMs;
                  break;
                case "mL":
                  MD = zD.gpuSubmitToDoneMs;
                  break;
                case "eL":
                  MD = wD.lagP50Ms;
                  break;
                case "oL":
                  MD = wD.lagP90Ms;
                  break;
                case "sc":
                  MD = (0, Ac.e)(rD);
                  break;
                case "EL":
                  MD = LD;
                  break;
                case "aL":
                case "uL":
                case "vL":
                case "tL":
                case "FL":
                case "YL":
                case "HL":
                case "qL":
                case "Dc":
                case "zc":
                case "wc":
                case "Kc":
                case "Lc":
                case "cc":
                case "gc":
                  MD = null;
                  break;
                case "Qc":
                  MD = (0, Hs.getPlatformType)();
                  break;
                case "Xc":
                  MD = (0, Hs.getGpuVendor)();
                  break;
                case "Vc":
                  MD = Xc.e[DD.backend];
                  break;
                case "Pc":
                  MD = (0, Ec.e)();
                  break;
                case "Cc":
                  MD = (0, Hs.getOperatingSystem)();
                  break;
                case "xc":
                  MD = (0, Hs.getTrafficSource)();
                  break;
                case "Tc":
                  MD = null !== (gD = pD.e.get("gameEntrySource")) && void 0 !== gD ? gD : Ic.f;
                  break;
                case "bc":
                  MD = null !== (RD = zD.frameLimiter) && void 0 !== RD ? RD : Ic.f;
                  break;
                case "jc":
                  MD = (0, hc.i)();
                  break;
                case "dc":
                  MD = null !== (AD = (0, nc.e)()) && void 0 !== AD ? AD : Ic.f;
                  break;
                case "Sc":
                  MD = (0, hc.b)(BD.width, BD.height);
                  break;
                case "lc":
                  MD = (0, Uc.g)(-(new Date).getTimezoneOffset());
                  break;
                case "Zc":
                  MD = null !== (UD = DD.fallbackReason) && void 0 !== UD ? UD : Ic.f;
                  break;
                case "mc":
                  MD = "ready";
                  break;
                case "ec":
                  MD = (0, Hs.getSoftwareRenderer)();
                  break;
                case "Nc":
                  MD = null !== DD.shaderPackReach() ? "true" : "false";
                  break;
                case "oc":
                  MD = null !== (fD = DD.shaderPackReach()) && void 0 !== fD && fD.sceneDepth ? "true" : "false";
                  break;
                case "ac": {
                  const zD = DD.shaderPackReach();
                  MD = null !== zD && void 0 !== zD && zD.sunShadow ? "all" : null !== zD && void 0 !== zD && zD.airShadow ? "air" : "none";
                  break
                }
                case "uc":
                  MD = Qc.D;
                  break;
                case "Wc": {
                  const zD = DD.ZB();
                  MD = null === zD ? Ic.f : String(zD);
                  break
                }
                case "yc":
                case "kc":
                  MD = Ic.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${nD}`)
              }
              if (void 0 === MD) throw new Error(`Metric ${nD} has no value`);
              ID[nD] = MD
            }
            return ID
          }(this.shell, {
            cpuFrameMs: zD,
            refreshHz: wD,
            cpuBottleneck: sD,
            frameIntervalCv: KD,
            ...gD
          }, RD, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), fD);
        if (! function(DD, zD, wD) {
            return (0, oz.d)(), DD(ID.n.Send, zD, wD)
          }(this.shell.writeCmd, UD.sd, function(DD) {
            const zD = (0, lD.d)((0, vz.e)(DD)),
              wD = new Uint8Array(ID.Qd.BYTES + zD.length);
            return new DataView(wD.buffer).setUint16(0, vz.d.AnalyticsUpdate, !0), wD.set(zD, ID.Qd.BYTES), wD
          }(BD))) return this.unsentPage = fD, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Ac.c), (0, Oc.k)(BD, "wasm", AD)
      }
    }
    var ec = wD(39560);

    function oc(DD, zD, wD) {
      const pD = new Map;
      return (0, ec.d)(((DD, wD, pD) => zD.fR(DD, wD, pD)), ((zD, wD, sD) => {
        const KD = `${zD},${wD},${sD}`;
        return pD.has(KD) || pD.set(KD, (0, Nz.b)(DD, zD, wD, sD)), pD.get(KD)
      }), wD)
    }
    var ac = wD(39567),
      uc = wD(40796);

    function vc(DD) {
      const zD = null !== DD && 0 !== (ID.v.playerFlags(DD.api.apiView, 0) & ID.Ad.CursorAim);
      zD !== (0, uc.l)() && (0, uc.H)(zD, null !== DD)
    }

    function tc(DD) {
      return (0, np.d)(Mp.C, DD)
    }
    var Fc = wD(40940);
    const Yc = new KD.g((DD => wD(42466)(`./${DD}/${DD}Client`)));
    let Hc = null,
      qc = null;
    async function Dg(DD) {
      Hc ??= wD.e(27).then((() => wD(39111))).then((DD => {
        qc = DD.createDefaultClientPlugins
      }), (DD => {
        throw Hc = null, DD
      })), await Promise.all([Yc.load(DD), Hc])
    }

    function zg(DD) {
      DD.load(new iz(ap, new Fp))
    }
    let wg = !1;
    const pg = new WeakMap;

    function sg(DD) {
      try {
        DD()
      } catch (zD) {
        console.error("[bloxd-wasm-client] a session-end step failed", zD)
      }
    }

    function Kg(DD, zD) {
      ! function() {
        var DD, zD;
        mp.Howler.volume();
        const wD = mp.Howler;
        null === (DD = wD._autoResume) || void 0 === DD || DD.call(wD), null === (zD = wD._autoSuspend) || void 0 === zD || zD.call(wD)
      }(), zD.audio.prepare();
      const wD = new OD(zD.core, zD.memory, zD.audio);
      let KD;
      try {
        KD = new hs(wD, zD.options)
      } catch (UD) {
        return DD.crash(Ms.C, UD), null
      }(0, cD.e)(ns(wD, KD));
      const RD = new CL({
        running: DD,
        api: wD,
        core: zD.core,
        memory: zD.memory,
        staleOr: zD.staleOr,
        reportFault: zD.reportReplayFault,
        options: zD.options,
        sessionInfo: zD.sessionInfo,
        replayShaderPack: zD.replayShaderPack
      });
      (0, sp.y)();
      const AD = new lp({
        api: wD,
        tables: KD,
        sessionInfo: zD.sessionInfo,
        gameFactory: DD => Yc.loadedFactory(DD),
        defaultPlugins: (DD, zD, wD, pD) => {
          if (null === qc) throw new Error("The default plugins started before they loaded");
          return qc(DD, zD, wD, pD)
        },
        serverOptions: zD.options,
        onNetEvent: DD => {
          RD.netEvent(DD), zD.onNetEvent(DD)
        },
        setLocalOptions: zD => {
          TL(DD, {
            changes: zD,
            reset: !1
          })
        },
        playSound: (DD, wD, pD, sD, KD, rD, LD) => zD.audio.playGame(DD, wD, pD, sD, KD, rD, LD),
        preloadSounds: DD => {
          zD.audio.preload(function(DD) {
            const zD = [];
            for (const wD of DD) {
              const DD = dz(wD);
              DD >= 0 && zD.push(nz[DD])
            }
            return zD
          }(DD))
        },
        onSessionEnd: () => {
          sg(sD.p), sg(ps), sg((() => {
            pD.e.set({
              openInGameMenuName: null
            })
          })), sg((() => {
            zD.audio.endSession()
          }))
        },
        beforeWrite: zD.beforeWrite,
        beforeOp: zD.beforeOp,
        cameraScreen: ws,
        showCameraFacing: ss,
        onEventOverflow: zD.onEventOverflow,
        screenBandY: LD.k,
        replayEntities: RD.entityHooks,
        hasPackModel: zD.hasPackModel
      });
      return AD.attach(DD), pg.set(AD, RD), yp(AD.items, zD.audio),
        function(DD) {
          DD.setClientFreeCameraGrant("isDev", !1);
          const zD = zD => {
            DD.setClientFreeCameraGrant("hasDeveloperRank", zD.playerHasRank("developer"))
          };
          (0, rD.o)("userContextUpdated", zD)
        }(AD), wg || (wg = !0, (0, rD.o)("appManagerUpdated|openInGameMenuName", (DD => {
          !DD && (0, gD.k)().includes(gD.b) && (0, gD.o)(gD.b)
        }))), AD
    }

    function rg(DD) {
      try {
        DD.closeGame()
      } finally {
        var zD;
        null === (zD = pg.get(DD)) || void 0 === zD || zD.stop(), pg.delete(DD)
      }
    }
  },
  42466: (DD, zD, wD) => {
    var pD = {
      "./bedwars/bedwarsClient": [39238, 9],
      "./bridgeBattle/bridgeBattleClient": [39244, 10],
      "./buildAFactory2/buildAFactory2Client": [38465, 75, 74, 73, 225, 243, 11],
      "./classic/classicClient": [39248, 12],
      "./clutch/clutchClient": [39256, 13],
      "./containmentBreach/containmentBreachClient": [39262, 14],
      "./cooking/cookingClient": [39377, 15],
      "./defusal/defusalClient": [39379, 16],
      "./frontline/frontlineClient": [39383, 75, 74, 73, 17],
      "./goalRush/goalRushClient": [39387, 18],
      "./luckyBedwars/luckyBedwarsClient": [39390, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39393, 20],
      "./oneBlock/oneBlockClient": [39400, 21],
      "./plots/plotsClient": [39406, 241, 248, 22],
      "./pvpCiv/pvpCivClient": [39492, 23],
      "./skyIslands/skyIslandsClient": [39497, 24],
      "./skyblock/skyblockClient": [38509, 75, 225, 190, 25],
      "./tsunami/tsunamiClient": [39501, 26]
    };

    function sD(DD) {
      if (!wD.o(pD, DD)) return Promise.resolve().then((() => {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }));
      var zD = pD[DD],
        sD = zD[0];
      return Promise.all(zD.slice(1).map(wD.e)).then((() => wD(sD)))
    }
    sD.keys = () => Object.keys(pD), sD.id = 42466, DD.exports = sD
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);