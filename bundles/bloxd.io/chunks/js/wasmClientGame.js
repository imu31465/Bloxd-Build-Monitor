export const id = 53;
export const ids = [53];
export const modules = {
  38353: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      e: () => pD
    });
    var ID = cD(20);

    function pD(DD) {
      return "refetchCode" === DD || "devDownloadJson" === DD || DD.startsWith("Plugin")
    }

    function iD(DD, CD) {
      "refetchCode" !== DD ? "Plugin|MobAiPlugin|ShowPetUi" !== DD ? Promise.all([cD.e(105), cD.e(106), cD.e(101), cD.e(103), cD.e(210)]).then((() => cD(40838))).then((cD => {
        let {
          runClientGameMessage: ID
        } = cD;
        ID(DD, CD)
      })).catch((CD => {
        console.error(`Game message ${DD} failed`, CD)
      })) : ID.i.Uo("showPetUi", CD) : ID.i.Uo("refetchCode")
    }
  },
  41735: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID,
      f: () => pD
    });
    const ID = ["recording", "freecam", "keyframe"];

    function pD() {
      const DD = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(DD[1]) << 32n | BigInt(DD[0])
    }
  },
  39877: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD
    });
    const ID = 1 << 20,
      pD = 1 << 21,
      iD = 1024,
      fD = 2048;

    function bD(DD, CD, cD) {
      const bD = DD + ID,
        QD = CD + iD,
        wD = cD + ID;
      return bD < 0 || bD >= pD || wD < 0 || wD >= pD || QD < 0 || QD >= fD ? -1 : (bD * pD + wD) * fD + QD
    }
  },
  39875: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      g: () => fD,
      k: () => pD,
      m: () => iD,
      o: () => SD,
      p: () => wD,
      s: () => QD,
      v: () => bD
    });
    cD(3260);
    cD(39877);

    function ID(DD) {}

    function pD(DD) {}

    function iD(DD) {}

    function fD(DD) {}

    function bD(DD) {}

    function QD(DD, CD, cD) {}

    function wD(DD) {}

    function SD(DD) {}
  },
  8958: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      f: () => QD
    });
    var ID = cD(16);
    const pD = 24,
      iD = "farNametags",
      fD = 1e5;

    function bD() {
      var DD;
      return null === (DD = ID.d.get("showDistantNametags")) || void 0 === DD || DD
    }

    function QD() {
      var DD;
      return null !== (DD = function() {
        const DD = new URLSearchParams(window.location.search).get(iD),
          CD = null === DD || "" === DD ? NaN : Number(DD);
        return Number.isFinite(CD) && CD >= 0 ? Math.min(CD, fD) : null
      }()) && void 0 !== DD ? DD : bD() ? 0 : pD
    }
  },
  41730: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      blockIdOf: () => lQ.b,
      clearWasmCameraScreen: () => rI,
      creativeItemIds: () => DI.creativeItemIds,
      decodeMapSettings: () => GQ,
      drainTextRerasters: () => zb.b,
      enchantmentPerksOf: () => DI.enchantmentPerksOf,
      endGameHost: () => hQ,
      followCursorAim: () => TQ,
      followMenuPrefs: () => Ep,
      loadAudio: () => WQ,
      loadClientGame: () => YQ,
      loadTextIcons: () => zb.d,
      rasterText: () => Vb.c,
      readBoardToEdit: () => jQ,
      setTextHost: () => zb.j,
      setTextLocalPlayer: () => zb.m,
      showInCreativeInvenOf: () => DI.showInCreativeInvenOf,
      startGameHost: () => uQ,
      startShellAnalytics: () => aQ,
      startSkyFeed: () => CQ,
      textChanged: () => zb.r,
      warmText: () => Vb.f,
      wasmCameraScreen: () => hI
    });
    cD(35920);
    var ID = cD(16),
      pD = cD(36161),
      iD = cD(38481),
      fD = cD(20),
      bD = cD(3193),
      QD = cD(36156),
      wD = cD(1284),
      SD = cD(613),
      BD = cD(37597),
      yD = cD(4581),
      MD = cD(39730),
      tD = cD(39680);
    const ZD = tD.Rb / 4,
      oD = tD.n.PlaySound,
      vD = tD.n.SoundReset,
      ND = yD.U.ReplayFailed,
      gD = yD.U.RecorderEvent;
    class XD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = DD, this.memory = CD, this.audio = cD, this.serverIds = new Int32Array(256).fill(tD.nd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(tD.s.BYTES)), this.renderPtr = 0, this.LB = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new tD.bb(DD, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.TID(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(DD, CD) {
        const cD = this.eventView();
        return new Uint8Array(cD.buffer, cD.byteOffset + DD, CD)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return tD.s.localId(this.apiView, 0)
      }
      localDeaths() {
        return tD.s.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const DD = this.apiView,
          CD = tD.s.entRenderPtr(DD, 0),
          cD = tD.s.entVisPtr(DD, 0),
          ID = tD.s.entCapacity(DD, 0);
        if (CD !== this.renderPtr || cD !== this.visPtr || ID !== this.LB || this.renderBuffer !== this.buffer) {
          this.renderPtr = CD, this.visPtr = cD, this.LB = ID, this.renderBuffer = this.buffer;
          const DD = this.memoryView(Float32Array, CD, ID * ZD, "the render array"),
            pD = this.memoryView(Uint8Array, cD, ID, "the visibility array");
          this.renderCapacity = DD && pD ? ID : 0, this.render = DD && pD ? DD : new Float32Array(0), this.vis = DD && pD ? pD : new Uint8Array(0)
        }
      }
      memoryView(DD, CD, cD, ID) {
        try {
          return (0, MD.r)(DD, this.memory().buffer, CD, cD, ID)
        } catch (pD) {
          return this.keepCorruption(pD), null
        }
      }
      memoryData(DD, CD, cD, ID) {
        try {
          return (0, MD.h)(this.memory().buffer, DD, CD, cD, ID)
        } catch (pD) {
          return this.keepCorruption(pD), null
        }
      }
      reportCorruption(DD) {
        this.keepCorruption(new MD.e(DD))
      }
      keepCorruption(DD) {
        if (!(DD instanceof MD.e)) throw DD;
        this.corruption ??= DD
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(DD, CD, cD) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: ID,
          len: pD
        } = DD;
        this.eventsPtr = ID, this.eventsLen = pD, this.eventsBuffer = null;
        const iD = this.eventView();
        for (let wD = 0; wD < pD;) {
          const DD = iD.getUint32(wD, !0),
            cD = 65535 & DD,
            ID = DD >>> 16,
            pD = wD + yD.R;
          if (cD === tD.n.EntitySpawned) {
            var fD;
            if (ID !== tD.Wb.BYTES) throw HD(cD, wD, ID);
            const DD = tD.Wb.serverId(iD, pD);
            this.spawned(DD, tD.Wb.index(iD, pD), tD.Wb.kind(iD, pD)), null === (fD = CD.entityAdded) || void 0 === fD || fD.call(CD, DD)
          } else if ((cD === tD.n.ChunkSlot || cD === tD.n.EntityInfoChanged) && !(0, tD.Ae)(cD, iD, pD, ID, CD)) throw HD(cD, wD, ID);
          wD = pD + (0, yD.je)(ID)
        }
        try {
          var bD;
          null === (bD = CD.afterPrescan) || void 0 === bD || bD.call(CD), this.throwCorruption(), !cD() && this.dispatch(DD, CD, cD) && (this.throwCorruption(), this.applyListener(), CD.afterWalk(DD.kind)), this.throwCorruption()
        } catch (QD) {
          throw QD instanceof MD.e && (this.corruption ??= QD), QD
        } finally {
          cD() || null !== this.corruption || this.applyDespawns(pD, CD)
        }
      }
      applyDespawns(DD, CD) {
        const cD = this.eventView();
        for (let pD = 0; pD < DD;) {
          const DD = cD.getUint32(pD, !0),
            iD = pD + yD.R;
          if ((65535 & DD) === tD.n.EntityDespawned && DD >>> 16 === tD.Wb.BYTES) {
            const DD = tD.Wb.serverId(cD, iD);
            var ID;
            if (this.despawned(DD, tD.Wb.index(cD, iD))) null === (ID = CD.entityRemoved) || void 0 === ID || ID.call(CD, DD)
          }
          pD = iD + (0, yD.je)(DD >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(DD, CD, cD) {
        const {
          len: ID,
          net: pD,
          netOffsets: iD
        } = DD;
        let fD = this.eventView(),
          bD = 0;
        for (let nD = 0; nD < ID;) {
          const DD = fD.getUint32(nD, !0),
            ID = 65535 & DD,
            OD = DD >>> 16,
            UD = nD + yD.R;
          let xD = !1;
          if (bD < pD.length && iD[bD] === nD) CD.netEvent(pD[bD]), bD++, xD = !0;
          else if (ID === yD.U.LocalPlayerBound) {
            var QD;
            if (OD !== yD.Cb) throw HD(ID, nD, OD);
            null === (QD = CD.localPlayerBound) || void 0 === QD || QD.call(CD, fD.getInt32(UD, !0)), xD = !0
          } else if (ID === yD.U.LocalHurt) {
            var wD;
            if (OD !== yD.zb) throw HD(ID, nD, OD);
            null === (wD = CD.localHurt) || void 0 === wD || wD.call(CD, fD.getInt32(UD, !0), fD.getFloat32(UD + 4, !0), fD.getUint32(UD + 8, !0)), xD = !0
          } else if (ID === yD.U.AttackHit) {
            var SD;
            if (OD !== yD.e) throw HD(ID, nD, OD);
            const DD = fD.getFloat32(UD, !0),
              cD = fD.getFloat32(UD + 4, !0),
              pD = fD.getFloat32(UD + 8, !0),
              iD = fD.getUint32(UD + 12, !0);
            null === (SD = CD.attackHit) || void 0 === SD || SD.call(CD, DD, cD, pD, 0 !== (iD & yD.n.Crit), 0 !== (iD & yD.n.HitSelf))
          } else if (ID === yD.U.PhysicsType) {
            var BD;
            if (OD !== yD.bc) throw HD(ID, nD, OD);
            null === (BD = CD.physicsType) || void 0 === BD || BD.call(CD, fD.getUint32(UD, !0), fD.getInt32(UD + 4, !0)), xD = !0
          } else if (ID === yD.U.VehicleEffect) {
            var MD;
            const DD = PD(fD, UD, OD);
            if (null === DD) throw HD(ID, nD, OD);
            null === (MD = CD.vehicleEffect) || void 0 === MD || MD.call(CD, DD.op, DD.name, DD.icon, DD.level, DD.durationMs), xD = !0
          } else if (ID === yD.U.ZoomChanged) {
            var ZD;
            if (OD !== yD.Rd) throw HD(ID, nD, OD);
            null === (ZD = CD.zoomChanged) || void 0 === ZD || ZD.call(CD, fD.getFloat32(UD, !0), fD.getUint8(UD + 4)), xD = !0
          } else if (ID === yD.U.ZoomDisabled) {
            var XD;
            if (0 !== OD) throw HD(ID, nD, OD);
            null === (XD = CD.zoomDisabled) || void 0 === XD || XD.call(CD), xD = !0
          } else if (ID === yD.U.GameCamera) {
            var mD;
            null === (mD = CD.gameCamera) || void 0 === mD || mD.call(CD, new Uint8Array(fD.buffer, fD.byteOffset + UD, OD).slice()), xD = !0
          } else if (ID === tD.n.ChunkSlot || ID === tD.n.EntityInfoChanged);
          else if (ID >= oD && ID <= vD) {
            if (this.audio && !this.audio.onAudioEvent(ID, fD, UD, OD)) throw HD(ID, nD, OD)
          } else if (ID >= ND && ID <= gD) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(ID, fD, UD, OD)) throw HD(ID, nD, OD);
              xD = !0
            }
          } else if (ID >= tD.Fd && ID <= tD.Gd && ID !== yD.U.EnvLighting) {
            if (!(0, tD.Ae)(ID, fD, UD, OD, CD)) throw HD(ID, nD, OD);
            xD = !0
          }
          if (xD) {
            if (cD()) return !1;
            fD = this.eventView()
          }
          nD = UD + (0, yD.je)(OD)
        }
        return !cD()
      }
      applyListener() {
        var DD;
        if (!this.audio) return;
        const CD = tD.s.audioViewPtr(this.apiView, 0),
          cD = this.memory().buffer;
        let ID = this.audioView;
        (null === (DD = ID) || void 0 === DD ? void 0 : DD.buffer) === cD && ID.byteOffset === CD || (ID = (0, MD.h)(cD, CD, tD.v.BYTES, 8, "the audio view"), this.audioView = ID), ID && this.audio.applyListener(ID)
      }
      indexOf(DD) {
        return this.indexById.get("number" === typeof DD ? DD : +DD)
      }
      isLocal(DD) {
        return DD !== tD.nd && DD === tD.s.localId(this.apiView, 0)
      }
      FX(DD) {
        const CD = [0, 0, 0];
        return this.readPosition("number" === typeof DD ? DD : +DD, CD) ? CD : null
      }
      readPosition(DD, CD) {
        const cD = this.apiView;
        if (void 0 !== this.indexById.get(DD) && this.isLocal(DD)) {
          for (let DD = 0; DD < 3; DD++) CD[DD] = tD.s.localPos(cD, 0, DD);
          return !0
        }
        return this.readDrawnPosition(DD, CD)
      }
      readDrawnPosition(DD, CD) {
        const cD = this.apiView,
          ID = this.indexById.get(DD);
        if (void 0 === ID || ID >= this.renderCapacity) return CD[0] = CD[1] = CD[2] = NaN, !1;
        const pD = ID * ZD;
        for (let iD = 0; iD < 3; iD++) CD[iD] = this.render[pD + iD] + tD.s.origin(cD, 0, iD);
        return !0
      }
      checkValid(DD) {
        return void 0 !== this.indexOf(DD)
      }
      isAlive(DD) {
        const CD = this.indexOf(DD);
        if (void 0 === CD) return null;
        if (this.ensureViews(), CD >= this.renderCapacity) return null;
        const cD = this.vis[CD];
        return 0 === cD ? null : 0 !== (cD & tD.ye.Alive)
      }
      getEntityType(DD) {
        const CD = this.indexOf(DD);
        return void 0 === CD ? this.isLocal("number" === typeof DD ? DD : +DD) ? "Player" : null : nD(this.kinds[CD])
      }
      spawned(DD, CD, cD) {
        if (CD >= 1048576) throw new MD.e(`entity ${DD} spawned at index ${CD}`);
        this.ensureIndex(CD), this.serverIds[CD] === DD && null !== this.idStr[CD] || (this.idStr[CD] = String(DD)), this.serverIds[CD] = DD, this.kinds[CD] = cD, this.indexById.set(DD, CD)
      }
      despawned(DD, CD) {
        let cD = !1;
        return this.indexById.get(DD) === CD && (this.indexById.delete(DD), cD = !0), CD < this.serverIds.length && this.serverIds[CD] === DD && (this.serverIds[CD] = tD.nd, this.kinds[CD] = 0, this.idStr[CD] = null), cD
      }
      ensureIndex(DD) {
        const CD = this.serverIds.length;
        if (DD < CD) return;
        let cD = 2 * CD;
        for (; cD <= DD;) cD *= 2;
        const ID = new Int32Array(cD).fill(tD.nd);
        ID.set(this.serverIds), this.serverIds = ID;
        const pD = new Uint16Array(cD);
        pD.set(this.kinds), this.kinds = pD;
        for (let iD = CD; iD < cD; iD++) this.idStr.push(null)
      }
      eventView() {
        const DD = this.memory().buffer;
        return DD !== this.eventsBuffer && (this.eventsBuffer = DD, this.events = new DataView(DD, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const DD = this.memory().buffer;
        this.buffer = DD, this.viewPtr < 0 && (this.viewPtr = this.core.GID()), this.view = new DataView(DD, this.viewPtr, tD.s.BYTES), this.rereadDirectory()
      }
    }

    function mD(DD) {
      return DD >>> tD.d === tD.o.Item
    }

    function nD(DD) {
      var CD, cD;
      const ID = DD & tD.g;
      switch (DD >>> tD.d) {
        case tD.o.Lifeform:
          return null !== (CD = SD.j[ID]) && void 0 !== CD ? CD : null;
        case tD.o.Throwable:
          return null !== (cD = BD.l[ID]) && void 0 !== cD ? cD : null;
        case tD.o.Mesh:
          return "Mesh";
        case tD.o.Audio:
          return "AudioEntity";
        case tD.o.Item:
          return "Item";
        default:
          return null
      }
    }
    const OD = new TextDecoder;

    function PD(DD, CD, cD) {
      if (cD < yD.td.HEAD_BYTES) return null;
      const ID = DD.getUint32(CD, !0),
        pD = DD.getUint32(CD + 20, !0),
        iD = DD.getUint32(CD + 24, !0),
        fD = yD.td.HEAD_BYTES + (0, yD.je)(pD);
      if (ID !== yD.td.UPDATE && ID !== yD.td.REMOVE || pD > cD || fD + iD > cD) return null;
      const bD = (cD, ID) => OD.decode(new Uint8Array(DD.buffer, DD.byteOffset + CD + cD, ID)),
        QD = DD.getFloat64(CD + 12, !0);
      return {
        op: ID,
        level: DD.getFloat64(CD + 4, !0),
        durationMs: Number.isNaN(QD) ? null : QD,
        name: bD(yD.td.HEAD_BYTES, pD),
        icon: bD(fD, iD)
      }
    }

    function HD(DD, CD, cD) {
      return new MD.e(`event ${DD} at ${CD} of ${cD} bytes`)
    }
    var UD = cD(326),
      xD = cD(1221),
      qD = cD(38353),
      JD = cD(1924),
      KD = cD(39781),
      aD = cD(1865),
      VD = cD(38496),
      zD = cD(38517),
      jD = cD(38503),
      lD = cD(39718),
      LD = cD(2343),
      TD = cD(38494),
      GD = cD(38510);
    const RD = Math.max(tD.Hb.BYTES, tD.Ab.BYTES, tD.Bb.BYTES);

    function kD(DD) {
      if (!(0, GD.e)(DD)) return null;
      const CD = Number(DD);
      return (0 | CD) === CD ? CD : null
    }
    class dD {
      constructor(DD) {
        this.api = DD, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, TD.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.yi = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = tD.nd, this.localName = String(tD.nd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.yi = null;
        const DD = this.api.queries.directorView() >= tD.Hb.BYTES ? this.scratchView() : null;
        null !== DD && (this.defaultFov = (0, aD.A)(tD.Hb.fov(DD, 0)), this.baseFov = (0, aD.A)(tD.Hb.baseFov(DD, 0)), this.aspect = tD.Hb.aspect(DD, 0), this.bodyHeading = tD.Hb.bodyHeading(DD, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(DD) {
        this.viewHeading = DD
      }
      get localPlayerId() {
        const DD = tD.s.localId(this.api.apiView, 0);
        return DD !== this.localId && (this.localId = DD, this.localName = String(DD)), this.localName
      }
      getEntityPosition(DD) {
        return this.readEntity(DD) ? this.entityFeet : null
      }
      getEntityAimPoint(DD) {
        return this.readEntity(DD) ? this.entityAim : null
      }
      getEntityHeading(DD) {
        const CD = kD(DD);
        if (null === CD) return null;
        const cD = tD.s.localId(this.api.apiView, 0);
        return CD === cD && cD !== tD.nd ? this.viewHeading : this.readEntity(DD) ? this.entityHeading : null
      }
      raycastTerrain(DD, CD, cD) {
        const ID = this.api.queries.cameraSweep(DD[0], DD[1], DD[2], CD[0], CD[1], CD[2], cD);
        return ID < cD - 1e-6 ? ID : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const DD = this.defaultPose;
        DD.fov = this.defaultFov;
        const CD = this.api.queries.directorDefaultPose() >= tD.Ab.BYTES ? this.scratchView() : null;
        if (null === CD) return DD;
        for (let cD = 0; cD < 3; cD++) DD.position[cD] = tD.Ab.eye(CD, 0, cD);
        return DD.heading = tD.Ab.heading(CD, 0), DD.pitch = tD.Ab.pitch(CD, 0), DD
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
        const CD = kD(DD);
        if (null === CD) return !1;
        if (CD === this.yi) return this.entityLive;
        this.yi = CD;
        const cD = this.api.queries.directorEntity(CD) >= tD.Bb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== cD, null === cD) return !1;
        for (let ID = 0; ID < 3; ID++) this.entityFeet[ID] = tD.Bb.feet(cD, 0, ID), this.entityAim[ID] = this.entityFeet[ID];
        return this.entityAim[1] += tD.Bb.eyeHeight(cD, 0), this.entityHeading = tD.Bb.heading(cD, 0), !0
      }
      scratchView() {
        const DD = this.api.scratch(),
          CD = this.api.memory().buffer,
          cD = this.scratch;
        return null !== cD && cD.buffer === CD && cD.byteOffset === DD ? cD : (this.scratch = this.api.memoryData(DD, RD, 8, "the director's record"), this.scratch)
      }
    }
    const YD = {
        mode: "default"
      },
      WD = {
        show: () => {},
        clear: () => {}
      };

    function sD() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class ED {
      constructor(DD) {
        this.options = DD, this.Zy = void 0, this.director = void 0, this.latest = YD, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          Qq: 0,
          wq: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.wi = new Int32Array(3 * tD.ge), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * tD.ge), this.Zy = new dD(DD.api), this.director = new jD.b(this.Zy)
      }
      settingsChanged(DD) {
        let CD = YD;
        if (DD.length > 0) try {
          CD = (0, lD.c)(DD)
        } catch {}
        this.latest = CD, this.pending = CD
      }
      call(DD, CD, cD, ID, pD, iD) {
        var fD, bD;
        let QD;
        this.holding = !1;
        try {
          QD = this.answer(DD, CD, cD, ID, pD, iD)
        } catch (yD) {
          var wD, SD;
          throw this.answeredPose = !1, null === (wD = (SD = this.options).showFacing) || void 0 === wD || wD.call(SD, null), yD
        }
        const BD = this.answeredPose && 0 === (ID & tD.Eb.Held);
        return this.answeredPose = QD !== tD.wb.None, this.holding = this.answeredPose && !BD, null === (fD = (bD = this.options).showFacing) || void 0 === fD || fD.call(bD, this.holding ? this.facing : null), QD
      }
      holdsView() {
        return this.holding
      }
      answer(DD, CD, cD, ID, pD, iD) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Zy: fD
        } = this;
        fD.readView();
        if (0 !== (ID & tD.Eb.Held) || fD.setViewHeading((0, VD.u)(fD.bodyHeading)), void 0 !== this.pending) {
          const DD = this.pending;
          this.pending = void 0, this.director.setSettings(DD), this.syncShownSettings()
        }
        this.readLook((0, LD.e)(CD), (0, LD.e)(cD), ID, (0, LD.e)(pD), (0, LD.e)(iD));
        const bD = this.director.update(DD / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !bD) return tD.wb.None;
        const [QD, wD, SD] = bD.position;
        if (0 === this.options.api.queries.directorPose(QD, wD, SD, (0, VD.u)(bD.heading), (0, VD.j)(bD.pitch), (0, aD.o)(bD.fov))) return tD.wb.None;
        if ("default" === this.director.getSettings().mode) return tD.wb.Pose;
        switch (this.facing) {
          case "camera":
            return tD.wb.FaceCamera;
          case "cursor":
            return tD.wb.FaceCursor;
          default:
            return tD.wb.FaceMovement
        }
      }
      afterFrame(DD) {
        DD ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = YD, this.idle()
      }
      restart() {
        const DD = this.holding;
        this.idle(), this.holding = DD
      }
      idle() {
        var DD, CD;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new jD.b(this.Zy), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (DD = (CD = this.options).showFacing) || void 0 === DD || DD.call(CD, null), this.setCentres(0)
      }
      syncShownSettings() {
        const DD = this.director.getSettings();
        if (DD === this.shownSettings) return;
        this.shownSettings = DD;
        const CD = (0, zD.h)(DD);
        this.facing = CD.facing, this.mouseTurns = CD.mouseTurns
      }
      readLook(DD, CD, cD, ID, pD) {
        const iD = this.look,
          fD = 0 !== (cD & tD.Eb.LookPointed);
        if (null === this.mouseTurns && !fD) return iD.Qq = 0, iD.wq = 0, void(iD.pointedAt = void 0);
        let bD;
        fD && (this.pointedAt.heading = ID, this.pointedAt.pitch = pD, bD = this.pointedAt);
        const {
          Zy: QD
        } = this;
        QD.setViewHeading((0, zD.d)(QD.getViewHeading(), DD, CD, bD, "look" === this.mouseTurns, iD))
      }
      writeCentres(DD) {
        const CD = this.next,
          cD = Math.min(DD.length, tD.ge);
        for (let ID = 0; ID < cD; ID++)
          for (let cD = 0; cD < 3; cD++) CD[3 * ID + cD] = Math.floor(DD[ID][cD] / tD.D);
        this.setCentres(cD)
      }
      setCentres(DD) {
        const {
          wi: CD,
          next: cD
        } = this;
        let ID = DD === this.centresLen;
        for (let pD = 0; ID && pD < 3 * DD; pD++) ID = CD[pD] === cD[pD];
        ID || (CD.fill(0), CD.set(cD.subarray(0, 3 * DD)), this.centresLen = DD, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const DD = this.options.cmd();
        null !== DD && (0, tD.Zf)(DD, 0, this.wi, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var DD, CD, cD;
        return null !== (DD = null === (CD = (cD = this.options).screen) || void 0 === CD ? void 0 : CD.call(cD)) && void 0 !== DD ? DD : WD
      }
      hidden() {
        var DD;
        return (null !== (DD = this.options.isPageHidden) && void 0 !== DD ? DD : sD)()
      }
      now() {
        var DD, CD, cD;
        return null !== (DD = null === (CD = (cD = this.options).now) || void 0 === CD ? void 0 : CD.call(cD)) && void 0 !== DD ? DD : performance.now()
      }
    }
    var eD = cD(39877);
    const uD = tD.D * tD.D * tD.D,
      hD = Math.log2(tD.D),
      rD = tD.D - 1,
      AD = tD.R.BYTES / 4,
      FD = new Uint16Array(uD);

    function DC(DD, CD, cD) {
      return DD * tD.D * tD.D + CD * tD.D + cD
    }
    class CC {
      constructor(DD) {
        this.chunk = DD
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(DD, CD, cD) {
        return DC(DD, CD, cD)
      }
    }
    class cC {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class IC {
      constructor(DD, CD, cD, ID) {
        this.table = DD, this.slot = CD, this.generation = cD, this.epoch = ID, this.Ey = new CC(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = FD, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get oZ() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get WM() {
        const DD = this.gameVoxels(),
          CD = this.layers ??= new Uint16Array(tD.D);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let cD = 0; 0 !== this.staleLayers; cD++) {
          const ID = 1 << cD;
          0 !== (this.staleLayers & ID) && (this.staleLayers &= ~ID, CD[cD] = pC(DD, cD))
        }
        return CD
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const DD = this.voxelData(),
          CD = this.writes;
        if (null === CD || 0 === CD.ids.size) return DD;
        if (CD.from !== DD) {
          const cD = CD.patched ??= new Uint16Array(uD);
          cD.set(DD);
          for (const [DD, ID] of CD.ids) cD[DD] = ID;
          CD.from = DD
        }
        return CD.patched
      }
      written(DD) {
        var CD;
        return null === (CD = this.writes) || void 0 === CD ? void 0 : CD.ids.get(DD)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(DD, CD, cD) {
        const ID = this.writes ??= new cC;
        ID.ids.set(DD, CD), cD && ID.cleared.add(DD), null !== ID.from && (ID.patched[DD] = CD);
        const pD = 1 << (DD >> hD & rD);
        ID.layers |= pD, this.staleLayers |= pD, this.writeCount++
      }
      clearWrites() {
        const DD = this.writes;
        null !== DD && (this.staleLayers |= DD.layers, DD.ids.clear(), DD.cleared.clear(), DD.layers = 0, DD.from = null)
      }
      dataCleared(DD) {
        var CD;
        return !0 === (null === (CD = this.writes) || void 0 === CD ? void 0 : CD.cleared.has(DD))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const DD = this.table.slotWords(),
          CD = this.slot * AD;
        if (this.epoch !== this.table.epoch || CD + AD > DD.length || 0 === DD[CD + 3] || DD[CD + 2] !== this.generation) return this.data = FD, this.dataPtr = 0, FD;
        this.version = DD[CD + 1];
        const cD = DD[CD + 0],
          ID = DD.buffer;
        return cD === this.dataPtr && ID === this.dataBuffer || (this.dataPtr = cD, this.dataBuffer = ID, this.data = this.table.voxelsAt(ID, cD)), this.data
      }
    }

    function pC(DD, CD) {
      const cD = DD[CD * tD.D];
      for (let ID = 0; ID < tD.D; ID++) {
        const pD = DC(ID, CD, 0);
        for (let CD = 0; CD < tD.D; CD++)
          if (DD[pD + CD] !== cD) return 65535
      }
      return cD
    }
    const iC = new Uint32Array(0);

    function fC(DD, CD, cD) {
      return DC(DD & rD, CD & rD, cD & rD)
    }
    class bC {
      constructor(DD, CD) {
        this.memory = DD, this.apiView = CD, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = iC, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = iC, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(DD, CD, cD, ID, pD, iD) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, iD === tD.V.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (iD !== tD.V.Stored && iD !== tD.V.Unloaded) throw new MD.e(`ChunkSlot flags ${iD}`);
        const fD = (0, eD.b)(DD, CD, cD);
        if (fD < 0) return;
        if (iD === tD.V.Unloaded) return void this.chunks.delete(fD);
        const bD = this.chunks.get(fD);
        (null === bD || void 0 === bD ? void 0 : bD.slot) === ID && bD.generation === pD || this.chunks.set(fD, new IC(this, ID, pD, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const DD = this.apiView(),
          CD = tD.s.chunkSlotsPtr(DD, 0),
          cD = tD.s.chunkSlotsLen(DD, 0);
        CD === this.slotsPtr && cD === this.slotsLen || (this.slotsPtr = CD, this.slotsLen = cD, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const DD = this.apiView(),
          CD = tD.s.walkThroughPtr(DD, 0),
          cD = tD.s.walkThroughLen(DD, 0);
        CD === this.walkPtr && cD === this.walkLen || (this.walkPtr = CD, this.walkLen = cD, this.walkBuffer = null, this.walkWords())
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
        var CD;
        DD !== this.slotsBuffer && (this.slotsBuffer = DD, this.slots = null !== (CD = (0, MD.r)(Uint32Array, DD, this.slotsPtr, this.slotsLen * AD, "the chunk directory")) && void 0 !== CD ? CD : iC);
        return this.slots
      }
      voxelsAt(DD, CD) {
        try {
          var cD;
          return null !== (cD = (0, MD.r)(Uint16Array, DD, CD, uD, "a chunk's voxels")) && void 0 !== cD ? cD : FD
        } catch (ID) {
          if (!(ID instanceof MD.e)) throw ID;
          return this.corruption ??= ID, FD
        }
      }
      chunk(DD, CD, cD) {
        var ID;
        return null !== (ID = this.chunks.get((0, eD.b)(DD, CD, cD))) && void 0 !== ID ? ID : null
      }
      isLoaded(DD, CD, cD) {
        return void 0 !== this.chunkAt(Math.floor(DD), Math.floor(CD), Math.floor(cD))
      }
      HS(DD, CD, cD) {
        var ID;
        const pD = Math.floor(DD),
          iD = Math.floor(CD),
          fD = Math.floor(cD),
          bD = this.chunkAt(pD, iD, fD);
        if (!bD) return 0;
        const QD = fC(pD, iD, fD);
        return null !== (ID = bD.written(QD)) && void 0 !== ID ? ID : bD.voxelData()[QD]
      }
      setOverlay(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const iD = this.chunkAt(DD, CD, cD);
        return !!iD && (iD.hasWrites() || this.written.push(iD), iD.write(fC(DD, CD, cD), ID, pD), !0)
      }
      version(DD, CD, cD) {
        var ID, pD;
        return null !== (ID = null === (pD = this.chunks.get((0, eD.b)(DD, CD, cD))) || void 0 === pD ? void 0 : pD.oZ) && void 0 !== ID ? ID : null
      }
      scan(DD, CD, cD, ID, pD, iD, fD, bD) {
        const QD = tD.D;
        let wD = 0;
        for (let SD = Math.floor(CD / QD); SD * QD < pD; SD++) {
          const BD = SD * QD,
            yD = Math.min(pD - BD, QD);
          for (let pD = Math.floor(DD / QD); pD * QD < ID; pD++) {
            const MD = pD * QD,
              tD = Math.min(ID - MD, QD);
            for (let ID = Math.floor(cD / QD); ID * QD < iD; ID++) {
              const ZD = this.chunks.get((0, eD.b)(pD, SD, ID));
              if (!ZD) continue;
              const oD = ID * QD,
                vD = Math.max(cD - oD, 0),
                ND = Math.min(iD - oD, QD),
                gD = ZD.WM,
                XD = ZD.gameVoxels();
              for (let cD = Math.max(CD - BD, 0); cD < yD; cD++) {
                const CD = gD[cD];
                if (65535 === CD || 0 !== fD[CD]) {
                  wD++;
                  for (let CD = Math.max(DD - MD, 0); CD < tD; CD++) {
                    const DD = DC(CD, cD, 0);
                    for (let ID = vD; ID < ND; ID++) {
                      const pD = XD[DD + ID];
                      0 !== fD[pD] && bD.push(MD + CD, BD + cD, oD + ID, pD)
                    }
                  }
                }
              }
            }
          }
        }
        return wD
      }
      dataCleared(DD, CD, cD) {
        var ID;
        const pD = Math.floor(DD),
          iD = Math.floor(CD),
          fD = Math.floor(cD);
        return !0 === (null === (ID = this.chunkAt(pD, iD, fD)) || void 0 === ID ? void 0 : ID.dataCleared(fC(pD, iD, fD)))
      }
      isWalkThrough(DD) {
        if (!Number.isInteger(DD) || DD < 0 || DD > 65535) return !1;
        const CD = this.walkWords(),
          cD = DD >>> 5;
        return cD < CD.length && 1 === (CD[cD] >>> (31 & DD) & 1)
      }
      walkWords() {
        const DD = this.memory().buffer;
        var CD;
        DD !== this.walkBuffer && (this.walkBuffer = DD, this.walk = null !== (CD = (0, MD.r)(Uint32Array, DD, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== CD ? CD : iC);
        return this.walk
      }
      chunkAt(DD, CD, cD) {
        if ((0 | DD) !== DD || (0 | CD) !== CD || (0 | cD) !== cD) return;
        const ID = (0, eD.b)(DD >> hD, CD >> hD, cD >> hD);
        return ID !== this.lastKey && (this.lastKey = ID, this.lastChunk = this.chunks.get(ID)), this.lastChunk
      }
    }
    var QC = cD(37879),
      wC = cD(37194),
      SC = cD(36139),
      BC = cD(36010),
      yC = cD(8986),
      MC = cD(38460),
      tC = cD(194);
    const ZC = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      oC = [
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
      vC = oC.map((DD => {
        let [CD] = DD;
        return CD
      })),
      NC = Uint8Array.from(oC, (DD => {
        let [, CD] = DD;
        return CD
      })),
      gC = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      XC = 8;
    var mC = cD(36133),
      nC = cD(266);
    const OC = 2 ** ZC.length - 1;
    class PC {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nC.e;
        this.sheet = DD, this.onError = CD, this.idle = cD, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = DD => {
          this.cancelIdle = null;
          try {
            if (DD.timeRemaining() >= 1) {
              let DD = this.queue.shift();
              for (; void 0 !== DD && !this.load(DD);) DD = this.queue.shift()
            }
          } catch (CD) {
            this.onError(CD)
          } finally {
            this.schedule()
          }
        }
      }
      preload(DD) {
        const CD = DD & OC & ~this.asked;
        if (0 !== CD) {
          this.asked |= CD;
          for (let DD = 0; DD < ZC.length; DD++) CD & 1 << DD && this.queue.push(DD);
          this.schedule()
        }
      }
      cancel() {
        var DD;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (DD = this.cancelIdle) || void 0 === DD || DD.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(DD) {
        const CD = this.sheet(DD, !1),
          cD = this.sheet(DD, !0),
          [ID, pD] = "unloaded" === CD.state() && "unloaded" !== cD.state() ? [cD, CD] : [CD, cD],
          iD = this.gen,
          fD = () => {
            try {
              iD === this.gen && "unloaded" === pD.state() && pD.load()
            } catch (DD) {
              this.onError(DD)
            }
          },
          bD = ID.state();
        return "unloaded" === bD ? (ID.once("load", fD), ID.load(), !0) : "unloaded" === pD.state() && ("loading" === bD ? (ID.once("load", fD), !1) : (pD.load(), !0))
      }
    }
    var HC = cD(39993);
    const UC = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      xC = tC.h.XN * tC.h.playerEyeToHeightRatio,
      qC = [0, 0, -1, 0, 1, 0],
      JC = ZC.indexOf("note");

    function KC(DD) {
      return DD >= 0 ? Math.min(1, DD) : 0
    }

    function aC(DD) {
      var CD;
      let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const ID = function(DD) {
        let CD = 0,
          cD = vC.length;
        for (; CD < cD;) {
          const ID = CD + cD >>> 1;
          vC[ID] < DD ? CD = ID + 1 : cD = ID
        }
        return CD
      }(DD);
      if ("" === DD || null === (CD = vC[ID]) || void 0 === CD || !CD.startsWith(DD)) return -1;
      if (vC[ID] === DD) return ID;
      let pD = ID + 1;
      for (; pD < vC.length && vC[pD].startsWith(DD);) pD++;
      return ID + Math.floor(cD() * (pD - ID))
    }
    class VC {
      constructor(DD, CD, cD, ID, pD) {
        this.group = DD, this.loudness = CD, this.startMs = cD, this.howl = ID, this.host = pD, this.id = 0, this.direct = !1
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
    class zC {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          ID = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = DD, this.listener = CD, this.now = cD, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new mC.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: DD => this.aliveVoice(DD),
          started: DD => this.started.has(DD),
          drop: DD => {
            var CD;
            null === (CD = this.live.get(DD)) || void 0 === CD || CD.howl.stop(DD), this.forget(DD)
          }
        }, this.handlers = {
          playSound: (DD, CD, cD, ID, pD, iD, fD, bD, QD) => {
            if (ID >= vC.length) return;
            const wD = 0 !== (pD & tD.re.Loop);
            pD & tD.re.TwoD ? this.start(ID, !1, fD, iD, bD, wD) : this.startSpatial(ID, fD, iD, bD, wD, DD, CD, cD, QD, this.earDistSq(DD, CD, cD))
          },
          soundPos: (DD, CD, cD, ID) => {
            const pD = this.core.get(ID);
            var iD;
            void 0 !== pD && (null === (iD = this.live.get(pD)) || void 0 === iD || iD.howl.pos(cD, CD, DD, pD))
          },
          soundSet: (DD, CD, cD, ID) => {
            const pD = this.core.get(DD),
              iD = void 0 === pD ? void 0 : this.live.get(pD);
            void 0 !== pD && iD && (this.setRel(pD, CD), iD.rate = cD, iD.howl.rate(cD, pD), iD.spatial && iD.howl.pannerAttr({
              refDistance: ID
            }, pD))
          },
          soundFade: (DD, CD, cD, ID) => {
            const pD = this.core.get(DD);
            void 0 !== pD && this.fade(pD, CD, cD, 0 !== (ID & tD.pe.StopAfter))
          },
          soundStop: DD => {
            const CD = this.core.get(DD);
            var cD;
            void 0 !== CD && (null === (cD = this.live.get(CD)) || void 0 === cD || cD.howl.stop(CD), this.forget(CD))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new PC(((DD, CD) => this.sheet(DD, CD)), (DD => {
          this.errors++, console.error("Audio preload failed", DD)
        }), ID)
      }
      prepare() {
        for (let DD = 0; DD < ZC.length; DD++) this.sheet(DD, !1), this.sheet(DD, !0)
      }
      preload(DD) {
        this.loader.preload(DD)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(DD, CD, cD, ID) {
        if (DD < tD.n.PlaySound || DD > tD.n.SoundReset) return !1;
        try {
          return (0, tD.Ae)(DD, CD, cD, ID, this.handlers)
        } catch (pD) {
          return this.errors++, console.error("Audio event failed", pD), !0
        }
      }
      applyListener(DD) {
        const CD = this.nextPose;
        for (let ID = 0; ID < 3; ID++) CD[2 - ID] = tD.v.listener(DD, 0, ID), CD[5 - ID] = tD.v.forward(DD, 0, ID), CD[8 - ID] = tD.v.up(DD, 0, ID);
        0 === CD[3] && 0 === CD[4] && 0 === CD[5] && CD.set(this.posed ? this.pose.subarray(3) : qC, 3);
        for (let ID = 0; ID < 9; ID++)
          if (!Number.isFinite(CD[ID])) return;
        const cD = this.pose;
        if (this.posed) {
          let DD = !0;
          for (let ID = 0; ID < 9 && DD; ID++) DD = CD[ID] === cD[ID];
          if (DD) return
        }
        this.listener.apply(CD) && (cD.set(CD), this.posed = !0)
      }
      playGame(DD, CD, cD, ID, pD, iD, fD) {
        const bD = aC(DD);
        if (bD < 0) return HC.d;
        if (!cD) {
          const {
            howl: DD,
            id: cD
          } = this.start(bD, !1, CD, 0, 1, fD);
          return this.gameSound(DD, cD, !1)
        }
        const QD = cD[0],
          wD = cD[1] + xC,
          SD = cD[2];
        if (!Number.isFinite(QD) || !Number.isFinite(wD) || !Number.isFinite(SD)) return HC.d;
        let BD;
        if (ID) {
          const DD = QD - ID[0],
            CD = wD - ID[1],
            cD = SD - ID[2];
          if (BD = DD * DD + CD * CD + cD * cD, BD > pD * pD) return HC.d
        } else BD = this.earDistSq(QD, wD, SD);
        const yD = this.startSpatial(bD, CD, 0, 1, fD, QD, wD, SD, iD, BD);
        return yD ? this.gameSound(yD.howl, yD.id, !0) : HC.d
      }
      setMaster(DD, CD) {
        this.level = KC(DD);
        const cD = CD ? this.level : 0;
        if (cD !== this.master) {
          this.master = cD;
          for (const [DD, CD] of this.live) CD.fadeMs = 0, CD.gain = CD.rel * this.master, CD.howl.volume(CD.gain, DD)
        }
      }
      stopCore() {
        for (const CD of [...this.core.values()]) {
          var DD;
          null === (DD = this.live.get(CD)) || void 0 === DD || DD.howl.stop(CD)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [DD, CD] of [...this.live]) CD.howl.stop(DD), this.forget(DD);
        this.core.clear()
      }
      gameSound(DD, CD, cD) {
        const ID = {
          stop: () => (this.live.has(CD) && DD.stop(CD), ID),
          fade: (DD, cD, pD) => {
            var iD, fD;
            const bD = this.level > 0 ? cD / this.level : cD > 0 && null !== (iD = null === (fD = this.live.get(CD)) || void 0 === fD ? void 0 : fD.rel) && void 0 !== iD ? iD : 0;
            return this.fade(CD, bD, pD, !1), ID
          },
          rate: cD => {
            const pD = this.live.get(CD);
            return pD && (pD.rate = function(DD) {
              return DD > 0 && DD < 1 / 0 ? DD : 1
            }(cD), DD.rate(pD.rate, CD)), ID
          },
          getVolume: () => {
            var DD, cD;
            return (null !== (DD = null === (cD = this.live.get(CD)) || void 0 === cD ? void 0 : cD.rel) && void 0 !== DD ? DD : 0) * this.level
          },
          getRelativeVolume: () => {
            var DD, cD;
            return null !== (DD = null === (cD = this.live.get(CD)) || void 0 === cD ? void 0 : cD.rel) && void 0 !== DD ? DD : 0
          },
          setRelativeVolume: DD => (this.setRel(CD, DD), ID),
          setPannerAttr: pD => {
            if (cD && this.live.has(CD)) {
              const cD = {
                ...UC,
                refDistance: SC.h
              };
              for (const [DD, CD] of Object.entries(pD)) "number" !== typeof CD && "string" !== typeof CD || (cD[DD] = CD);
              DD.pannerAttr({
                coneOuterAngle: cD.coneOuterAngle
              }, CD), DD.pannerAttr(cD, CD)
            }
            return ID
          },
          setPosition: pD => (cD && this.live.has(CD) && Number.isFinite(pD[0] + pD[1] + pD[2]) && DD.pos(pD[2], pD[1], pD[0], CD), ID)
        };
        return ID
      }
      startSpatial(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        const SD = this.sheet(NC[DD], !0);
        let BD = null;
        if (!pD) {
          if (this.failed.has(SD)) return null;
          const cD = NC[DD] === JC ? null : (0, mC.g)(vC[DD]),
            ID = (0, mC.e)(KC(CD), Math.sqrt(wD), QD);
          if (BD = new VC(cD, ID, this.now(), SD, this.voiceHost), !this.voices.admit(BD)) return null
        }
        const yD = this.start(DD, !0, CD, cD, ID, pD);
        return BD && (BD.id = yD.id, BD.direct = "loaded" === SD.state() && !SD._playLock), SD.pannerAttr({
          coneOuterAngle: 360
        }, yD.id), SD.pannerAttr({
          ...UC,
          refDistance: QD
        }, yD.id), SD.pos(bD, fD, iD, yD.id), yD
      }
      aliveVoice(DD) {
        const CD = this.live.get(DD);
        if (!CD) return;
        const cD = CD.howl._soundById(DD);
        if (cD && !cD._ended) return CD;
        this.forget(DD)
      }
      earDistSq(DD, CD, cD) {
        if (!this.posed) return 0;
        const ID = DD - this.pose[2],
          pD = CD - this.pose[1],
          iD = cD - this.pose[0];
        return ID * ID + pD * pD + iD * iD
      }
      start(DD, CD, cD, ID, pD, iD) {
        const fD = KC(cD),
          bD = this.sheet(NC[DD], CD);
        "unloaded" === bD.state() && bD.load();
        const QD = bD.play(vC[DD]),
          wD = fD * this.master;
        return bD.volume(wD, QD), this.live.set(QD, {
          howl: bD,
          rel: fD,
          gain: wD,
          fadeFrom: wD,
          fadeAt: 0,
          fadeMs: 0,
          rate: pD,
          handle: ID,
          spatial: CD,
          stopTimer: void 0
        }), 0 !== ID && this.core.set(ID, QD), 1 !== pD && bD.rate(pD, QD), iD && bD.loop(!0, QD), {
          howl: bD,
          id: QD
        }
      }
      sheet(DD, CD) {
        const cD = 2 * DD + (CD ? 1 : 0);
        let ID = this.sheets.get(cD);
        if (!ID) {
          const pD = this.createHowl(ZC[DD], CD);
          pD.on("end", (DD => {
            pD.loop(DD) || this.forget(DD)
          })), pD.on("stop", (DD => {
            this.forget(DD)
          })), pD.on("play", (DD => {
            this.live.has(DD) && this.started.add(DD)
          })), pD.on("loaderror", (DD => {
            if ("loaded" !== pD.state()) {
              this.failed.add(pD);
              for (const [DD, CD] of this.live) CD.howl === pD && this.forget(DD)
            } else "number" === typeof DD && this.forget(DD)
          })), this.sheets.set(cD, pD), ID = pD
        }
        return ID
      }
      setRel(DD, CD) {
        const cD = this.live.get(DD);
        cD && (jC(cD), cD.fadeMs = 0, cD.rel = KC(CD), cD.gain = cD.rel * this.master, cD.howl.volume(cD.gain, DD))
      }
      fade(DD, CD, cD, ID) {
        const pD = this.live.get(DD);
        if (!pD) return;
        jC(pD);
        const {
          howl: iD
        } = pD, fD = this.gainNow(pD);
        pD.rel = KC(CD), pD.gain = pD.rel * this.master;
        const bD = cD > 0 ? Math.min(cD, 65535) : 0,
          QD = 0 === bD || fD === pD.gain;
        pD.fadeMs = QD ? 0 : bD, QD ? iD.volume(pD.gain, DD) : (pD.fadeFrom = fD, pD.fadeAt = this.now(), iD.fade(fD, pD.gain, bD, DD)), ID && (QD ? iD.stop(DD) : pD.stopTimer = setTimeout((() => {
          pD.stopTimer = void 0, iD.stop(DD)
        }), bD))
      }
      gainNow(DD) {
        if (DD.fadeMs > 0) {
          const CD = (this.now() - DD.fadeAt) / DD.fadeMs;
          if (CD < 1) return DD.fadeFrom + (DD.gain - DD.fadeFrom) * Math.max(0, CD);
          DD.fadeMs = 0
        }
        return DD.gain
      }
      forget(DD) {
        this.started.delete(DD);
        const CD = this.live.get(DD);
        CD && (jC(CD), this.live.delete(DD), 0 !== CD.handle && this.core.get(CD.handle) === DD && this.core.delete(CD.handle))
      }
    }

    function jC(DD) {
      void 0 !== DD.stopTimer && (clearTimeout(DD.stopTimer), DD.stopTimer = void 0)
    }
    var lC = cD(39709),
      LC = cD(38463);
    class TC {
      constructor(DD, CD, cD, ID) {
        this.key = DD, this.model = CD, this.host = ID, this.LB = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sID = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Lt = !1, this.LB = Math.max(1, Math.ceil(cD)), this.records = new Float32Array(this.LB * QC.b), this.isDirty = new Uint8Array(this.LB), this.tail = new Uint8Array(this.LB * tD.Gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(ID.cmd())
      }
      setOrigin(DD, CD, cD) {
        this.origin[0] = DD, this.origin[1] = CD, this.origin[2] = cD
      }
      markDirty(DD) {
        !this.Lt && DD >= 0 && DD < this.LB && DD < tD.Gc.Max && this.bZ(DD, DD + 1)
      }
      commit(DD) {
        if (this.Lt) return;
        (DD = Math.min(Math.max(Math.floor(DD), 0), this.LB, tD.Gc.Max)) > this.count && this.bZ(this.count, DD), this.count = DD;
        const {
          origin: CD,
          sentOrigin: cD,
          dirtyList: ID
        } = this, pD = this.sID !== DD, iD = cD[0] !== CD[0] || cD[1] !== CD[1] || cD[2] !== CD[2];
        if (0 === ID.length && !pD && !iD) return;
        const fD = this.host.cmd();
        if (!fD || !this.make(fD)) return;
        const bD = ID.length,
          {
            records: QD,
            tailView: wD
          } = this;
        for (let SD = 0; SD < bD; SD++) {
          const DD = ID[SD],
            CD = DD * QC.b,
            cD = SD * tD.Gc.Bytes,
            pD = 0 !== QD[CD + QC.f] ? tD.Gc.Hidden : 0;
          wD.setUint32(cD, (DD | pD) >>> 0, !0), wD.setFloat32(cD + 4, QD[CD], !0), wD.setFloat32(cD + 8, QD[CD + 1], !0), wD.setFloat32(cD + 12, QD[CD + 2], !0)
        }
        if ((0, tD.$e)(fD, 0, this.key, DD, CD, bD, this.tailOf(bD))) {
          for (let DD = 0; DD < bD; DD++) this.isDirty[ID[DD]] = 0;
          ID.length = 0, this.sID = DD, cD[0] = CD[0], cD[1] = CD[1], cD[2] = CD[2]
        }
      }
      grow(DD) {
        (DD = Math.ceil(DD)) <= this.LB || this.Lt || (this.records = (0, LC.d)(this.records, new Float32Array(DD * QC.b)), this.isDirty = (0, LC.d)(this.isDirty, new Uint8Array(DD)), this.tail = new Uint8Array(DD * tD.Gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.LB = DD)
      }
      dispose() {
        this.Lt || (this.Lt = !0, this.host.Lt(this, this.made ? this.key : null))
      }
      make(DD) {
        if (!this.made && DD) {
          const {
            item: CD,
            scale: cD,
            yaw: ID
          } = this.model;
          this.made = (0, tD.ef)(DD, 0, this.key, CD, cD, ID)
        }
        return this.made
      }
      tailOf(DD) {
        const CD = DD * tD.Gc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === CD || (this.tailCut = this.tail.subarray(0, CD)), this.tailCut
      }
      bZ(DD, CD) {
        const {
          dirtyList: cD,
          isDirty: ID
        } = this;
        for (let pD = DD; pD < CD; pD++) 0 === ID[pD] && (ID[pD] = 1, cD.push(pD))
      }
    }
    var GC = cD(618);
    class RC {
      constructor(DD) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: DD,
          owes: DD => {
            this.owing.add(DD)
          },
          settled: (DD, CD) => {
            this.owing.delete(DD), CD && this.live.delete(DD)
          }
        }
      }
      create(DD, CD) {
        if (cD = DD, !GC.n.includes(cD)) return null;
        var cD;
        const ID = new kC(++this.keys, SD.j.indexOf(DD), CD, this.host);
        return this.live.add(ID), ID
      }
      disposeAll() {
        for (const DD of [...this.live]) DD.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const DD = this.host.cmd();
        for (const CD of this.owing)
          if (!CD.sync(DD)) return
      }
    }
    class kC {
      constructor(DD, CD, cD, ID) {
        this.key = DD, this.lifeform = CD, this.scale = cD, this.host = ID, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Lt = !1, this.sync()
      }
      setPose(DD, CD) {
        this.Lt || (this.feet[0] = DD[0], this.feet[1] = DD[1], this.feet[2] = DD[2], this.yaw = CD, this.owed |= 2, this.sync())
      }
      setVisible(DD) {
        this.Lt || DD === this.visible || (this.visible = DD, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Lt || (this.Lt = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(DD) ? (this.host.settled(this, this.Lt), !0) : (this.host.owes(this), !1)
      }
      write(DD) {
        if (!DD) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, tD.pf)(DD, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const CD = (2 & this.owed ? tD.jd.Pose : 0) | (4 & this.owed ? tD.jd.Visible : 0);
        if (0 !== CD) {
          if (!(0, tD.mf)(DD, 0, this.key, CD, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, tD.if)(DD, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var dC = cD(40135);

    function YC(DD, CD, cD, ID) {
      return (0, dC.c)(), (0, tD._f)(DD, CD, cD, ID)
    }
    var WC = cD(38465),
      sC = cD(39701);
    const EC = [0, 0, 0],
      eC = [0, 0, 0],
      uC = [0, 0, 0],
      hC = [0, 0, 0],
      rC = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      AC = [0, 0, 0],
      FC = [0, 0],
      Dc = [1, 1, 1],
      Cc = 1 / 3;
    const cc = wC.f;

    function Ic(DD) {
      const CD = wC.e[DD],
        cD = CD && wC.f[CD.mainMultiblock];
      return cD && {
        main: cD,
        x: CD.compX,
        y: CD.compY,
        z: CD.compZ
      }
    }

    function pc(DD) {
      if (null === DD || void 0 === DD) return tD.nd;
      const CD = +DD;
      return Number.isInteger(CD) && CD >= -2147483648 && CD <= 2147483647 && String(CD) === String(DD) ? CD : tD.nd
    }

    function ic(DD, CD, cD) {
      return (0, tD.gg)(DD, 0, CD, null !== cD && void 0 !== cD ? cD : Number.NaN)
    }
    class fc {
      constructor(DD) {
        this.deps = DD, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new WC.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (DD => {
          var CD, cD;
          null === (CD = (cD = this.deps).setLocalOptions) || void 0 === CD || CD.call(cD, DD)
        })), this.mobModels = new RC((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Lt: (DD, CD) => {
            this.livePools.delete(DD), null !== CD && (this.owedFrees.push(CD), this.flushOwed())
          }
        }, this.api = DD.api, this.live = DD.live, this.chunks = DD.chunks, this.items = DD.items, this.tables = DD.tables
      }
      isLocal(DD) {
        return null !== DD && void 0 !== DD && +DD === this.api.localId
      }
      assertLocal(DD, CD) {
        if (!this.isLocal(DD)) throw new Error(`Attempted to ${CD} for a player that is not the local player`)
      }
      FX(DD) {
        const CD = this.api.FX(DD);
        if (!CD) throw new Error(`Entity ${DD} has no replicated position`);
        return CD
      }
      checkValid(DD) {
        return !!this.deps.isSessionLive() && (null === DD || void 0 === DD || this.api.checkValid(DD))
      }
      isAlive(DD) {
        return !1 !== this.api.isAlive(DD)
      }
      getItemStat(DD, CD, cD) {
        return this.isLocal(DD) || null !== DD && "Player" === this.api.getEntityType(DD) ? this.tables.getItemStat(CD, cD) : this.tables.getDefaultItemStat(CD, cD)
      }
      getClientOption(DD, CD) {
        return this.assertLocal(DD, "get a client option"), this.tables.getClientOption(CD)
      }
      openShop(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(DD, "open shop"), fD.i.Uo("showShopFromServer", {
          toggle: CD,
          SC: cD
        }, !0)
      }
      sendMessage(DD, CD, cD) {
        this.assertLocal(DD, "send a message");
        const ID = "string" === typeof CD ? [{
          str: CD,
          style: cD
        }] : CD;
        fD.i.Uo("chat", {
          content: ID
        }, !0)
      }
      getEntityType(DD) {
        return this.api.getEntityType(DD)
      }
      getEntityName(DD) {
        const CD = pc(DD);
        return CD === tD.nd ? void 0 : (0, lC.f)(this.api, CD)
      }
      hasEffect(DD, CD) {
        const cD = pc(DD);
        return cD !== tD.nd && (0, lC.e)(this.api, cD, CD)
      }
      getMetaInfo(DD) {
        return this.tables.getMetaInfo(DD)
      }
      getPlayerDbId(DD) {
        return this.assertLocal(DD, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(DD, CD, cD) {
        if (!this.chunks.dataCleared(DD, CD, cD)) return (0, lC.d)(this.api, DD, CD, cD)
      }
      Hx(DD, CD, cD, ID) {
        this.setBlockId(DD, CD, cD, this.tables.getItemId(ID))
      }
      setOtherEntitySetting(DD, CD, cD, ID) {
        if (!this.isLocal(DD)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(tD.Dd, cD)) throw new Error(`Unknown other-entity setting ${cD}`);
        const pD = tD.Dd[cD],
          iD = pc(CD);
        if (iD === tD.nd || !this.deps.beforeWrite()) return;
        const fD = (0, lD.g)(ID);
        if (fD.length > 16384) throw new Error(`The other-entity setting ${cD}'s value is over 16384 bytes`);
        const bD = this.api.memoryView(Uint8Array, this.api.scratch(), fD.length, "set_other_entity_setting's value");
        bD && (bD.set(fD), this.api.queries.setOtherEntitySetting(iD, pD, fD.length))
      }
      getPositionView(DD) {
        return this.live.position(+DD)
      }
      readDrawnPosition(DD, CD) {
        return this.api.readDrawnPosition(pc(DD), CD)
      }
      getDrawnHeading(DD) {
        const CD = pc(DD),
          cD = (CD === tD.nd ? 0 : this.api.queries.directorEntity(CD)) >= tD.Bb.BYTES ? this.api.memoryData(this.api.scratch(), tD.Bb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!cD) return null;
        if (1 === tD.Bb.headingIsDrawn(cD, 0)) return tD.Bb.heading(cD, 0);
        const ID = this.api.apiView;
        return this.isLocal(DD) && 0 === (tD.s.playerFlags(ID, 0) & tD.Zd.FreeCam) ? tD.s.heading(ID, 0) : null
      }
      getLocalPlayerMovement() {
        const DD = tD.s.playerFlags(this.api.apiView, 0);
        return 0 === (DD & tD.Zd.Replay) && this.api.readDrawnPosition(this.api.localId, uC) ? {
          onGround: 0 !== (DD & tD.Zd.OnGround),
          jumpHeld: 0 !== (DD & tD.Zd.JumpHeld)
        } : null
      }
      FDD(DD) {
        return this.isLocal(DD) ? this.items.Lb() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var DD, CD;
        return "Gun" === (null === (DD = this.aliveHeld()) || void 0 === DD || null === (CD = DD.typeObj) || void 0 === CD ? void 0 : CD.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Lb()
      }
      isCrosshairShown() {
        var DD, CD;
        const cD = (0, BC.e)(ID.d.get("crosshairGameView"), ID.d.get("crosshairShownOverride"));
        if (null !== cD) return cD;
        const pD = null === (DD = this.aliveHeld()) || void 0 === DD ? void 0 : DD.typeObj,
          iD = "Gun" === (null === pD || void 0 === pD ? void 0 : pD.type),
          fD = iD || !0 === (null === pD || void 0 === pD ? void 0 : pD.showsAimingUi),
          bD = 0 === (tD.s.playerFlags(this.api.apiView, 0) & tD.Zd.ZoomFirstPerson),
          QD = null !== (CD = this.tables.getClientOption("gunshotOrigin")) && void 0 !== CD ? CD : null;
        return (0, BC.i)({
          gun: iD,
          aimable: fD
        }, bD, (0, yC.c)(), QD)
      }
      setCrosshairShown(DD) {
        ID.d.set({
          crosshairShownOverride: DD
        })
      }
      getInventoryFreeSlotCount(DD) {
        return this.isLocal(DD) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(DD) {
        return this.isLocal(DD) ? this.items.selectedSlot : null
      }
      getItemSlot(DD, CD) {
        return this.isLocal(DD) ? this.items.slot(CD) : null
      }
      swapInventorySlots(DD, CD) {
        return this.items.swap(DD, CD)
      }
      isPlayerCrouching(DD) {
        if (this.isLocal(DD)) return 0 !== (tD.s.playerFlags(this.api.apiView, 0) & tD.Zd.Crouching);
        const CD = pc(DD);
        return CD !== tD.nd && 1 === this.api.queries.entityCrouching(CD)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (tD.s.playerFlags(this.api.apiView, 0) & tD.Zd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.R_()
      }
      getActionRay() {
        const DD = this.api.apiView;
        for (let CD = 0; CD < 3; CD++) rC.origin[CD] = tD.s.N9(DD, 0, CD), rC.direction[CD] = tD.s.actionDir(DD, 0, CD);
        return rC
      }
      canModifyBlockAt(DD, CD, cD) {
        return 1 === this.api.queries.canModify(DD, CD, cD)
      }
      isSolidToPlayerBlockId(DD) {
        return this.tables.isSolidBlockId(DD) && !this.chunks.isWalkThrough(DD)
      }
      blockNameToBlockId(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(DD, CD)
      }
      blockIdToBlockName(DD) {
        return this.tables.nameOfId(DD)
      }
      NDD(DD, CD, cD, ID, pD) {
        return 1 === this.api.queries.terrainBlocked(ID, DD, CD, cD, pc(null !== pD && void 0 !== pD ? pD : null))
      }
      getChunkVersion(DD, CD, cD) {
        return this.chunks.version(DD, CD, cD)
      }
      scanBlocks(DD, CD, cD, ID, pD, iD, fD, bD) {
        return this.chunks.scan(DD, CD, cD, ID, pD, iD, fD, bD)
      }
      isBlockInLoadedChunk(DD, CD, cD) {
        return this.chunks.isLoaded(DD, CD, cD)
      }
      getBlockId(DD, CD, cD) {
        return this.chunks.HS(DD, CD, cD)
      }
      playSound(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(DD)) return null;
        const fD = this.playSoundFrom(CD, cD, pD, iD);
        return 1 === ID ? fD : fD.rate(ID)
      }
      playSoundFrom(DD, CD, cD, ID) {
        var pD, iD;
        const fD = this.deps.playSound;
        if (!fD) return HC.d;
        const bD = null === cD || void 0 === cD ? void 0 : cD.xp,
          QD = null !== (pD = null === cD || void 0 === cD ? void 0 : cD.maxHearDist) && void 0 !== pD ? pD : SC.f,
          wD = null !== (iD = null === cD || void 0 === cD ? void 0 : cD.refDistance) && void 0 !== iD ? iD : SC.h;
        let SD = null;
        if (Array.isArray(bD)) EC[0] = bD[0], EC[1] = bD[1], EC[2] = bD[2], SD = EC;
        else if (void 0 !== bD && null !== bD) {
          const DD = pc(bD);
          if (!this.api.isLocal(DD)) {
            if (!this.api.readPosition(DD, EC)) return HC.d;
            SD = EC
          }
        }
        return fD(DD, CD, SD, SD && this.ear(), QD, wD, ID)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, eC)) eC[1] += xC;
        else {
          const DD = this.api.apiView;
          if (0 === tD.s.viewProj(DD, 0, 3) && 0 === tD.s.viewProj(DD, 0, 7) && 0 === tD.s.viewProj(DD, 0, 11)) return null;
          for (let CD = 0; CD < 3; CD++) eC[CD] = tD.s.eye(DD, 0, CD)
        }
        return Number.isFinite(eC[0] + eC[1] + eC[2]) ? eC : null
      }
      setBlockId(DD, CD, cD, ID) {
        if (!Number.isInteger(ID) || ID < 0 || ID > 65535) throw new Error(`Invalid block id ${ID}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(DD, CD, cD)) return;
        const pD = Math.floor(DD),
          iD = Math.floor(CD),
          fD = Math.floor(cD),
          bD = this.predictedCells(pD, iD, fD, ID);
        if (1 === this.api.queries.Hx(pD, iD, fD, ID)) {
          for (let DD = 0; DD < bD.length; DD += 5) this.chunks.setOverlay(bD[DD], bD[DD + 1], bD[DD + 2], bD[DD + 3], 1 === bD[DD + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(DD, CD) {
        return this.deps.particles.create(DD, CD)
      }
      playParticleEffect(DD) {
        this.deps.particles.playEffect(DD)
      }
      burstParticlePreset(DD, CD, cD) {
        this.deps.particles.burstPreset(DD, CD, cD)
      }
      createGameMesh(DD, CD, cD) {
        const ID = ++this.meshKeys,
          pD = this.deps.cmd();
        if (!pD) return ID;
        const {
          look: iD,
          colour: fD
        } = function(DD) {
          switch (DD.kind) {
            case void 0:
            case "flatEmissive":
              return DD.onTop ? {
                look: tD.ic.FlatOnTop,
                colour: [...DD.rgb, DD.alpha]
              } : DD.opaque ? {
                look: tD.ic.FlatOpaque,
                colour: [...DD.rgb, 1]
              } : {
                look: tD.ic.Flat,
                colour: [...DD.rgb, DD.alpha]
              };
            case "chevronPath":
              return {
                look: tD.ic.Chevrons, colour: [...(0, MC.d)(DD.colour), DD.alpha]
              };
            case "furnaceFire":
              return {
                look: tD.ic.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(CD), bD = Math.floor(DD.positions.length / 3), QD = function(DD, CD) {
          const cD = Math.floor(DD.positions.length / 3),
            ID = DD.indices.length,
            pD = cD * (CD ? 5 : 3),
            iD = new Uint8Array(4 * (pD + ID)),
            fD = new DataView(iD.buffer);
          for (let wD = 0; wD < 3 * cD; wD++) fD.setFloat32(4 * wD, DD.positions[wD], !0);
          if (CD) {
            var bD;
            const CD = null !== (bD = DD.uvs) && void 0 !== bD ? bD : [];
            for (let DD = 0; DD < 2 * cD; DD++) {
              var QD;
              fD.setFloat32(4 * (3 * cD + DD), null !== (QD = CD[DD]) && void 0 !== QD ? QD : 0, !0)
            }
          }
          for (let wD = 0; wD < ID; wD++) fD.setUint32(4 * (pD + wD), DD.indices[wD], !0);
          return iD
        }(DD, (0, QC.j)(CD));
        return (0, tD.Pe)(pD, 0, ID, iD, fD, cD, bD, DD.indices.length, QD) && this.liveMeshes.add(ID), ID
      }
      setGameMesh(DD, CD) {
        var cD;
        const ID = this.deps.cmd();
        if (!ID) return;
        let pD = 0;
        CD.anchor && (pD |= tD.jc.Anchor, AC[0] = CD.anchor[0], AC[1] = CD.anchor[1], AC[2] = CD.anchor[2]), void 0 !== CD.visible && (pD |= tD.jc.Visible), CD.uvOffset && (pD |= tD.jc.UvOffset, FC[0] = CD.uvOffset[0], FC[1] = CD.uvOffset[1]);
        const iD = null !== (cD = CD.visibility) && void 0 !== cD ? cD : 1;
        void 0 !== CD.visibility && (pD |= tD.jc.Visibility), CD.scale && (pD |= tD.jc.Scale, Dc[0] = CD.scale[0], Dc[1] = CD.scale[1], Dc[2] = CD.scale[2]), 0 !== pD && (0, tD.We)(ID, 0, DD, pD, CD.visible ? 1 : 0, AC, FC, iD, Dc)
      }
      disposeGameMesh(DD) {
        const CD = this.deps.cmd();
        CD && !(0, tD.Se)(CD, 0, DD) || this.liveMeshes.delete(DD)
      }
      hasPackModel(DD) {
        var CD, cD, ID;
        return null !== (CD = null === (cD = (ID = this.deps).hasPackModel) || void 0 === cD ? void 0 : cD.call(ID, DD)) && void 0 !== CD && CD
      }
      disposeGameOutput() {
        const DD = DD => {
          try {
            DD()
          } catch (CD) {
            console.error("Error freeing client game output", CD)
          }
        };
        for (const CD of [...this.liveMeshes]) DD((() => {
          this.disposeGameMesh(CD)
        }));
        for (const CD of [...this.livePools]) DD((() => {
          CD.dispose()
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
      createInstancePool(DD, CD) {
        const cD = this.tables.idOf(DD.item);
        if (void 0 === cD) return null;
        const ID = new TC(++this.poolKeys, {
          item: cD,
          scale: DD.scale,
          yaw: DD.yaw
        }, CD, this.poolHost);
        return this.livePools.add(ID), ID
      }
      createMobModel(DD, CD) {
        return this.mobModels.create(DD, CD)
      }
      setRouteChevrons(DD) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !DD || 0 === DD.cells.length) return;
        const CD = `${DD.colour} ${DD.alpha}`;
        CD !== this.routeLook && (this.routeLook = CD, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(DD) {
          const [CD, cD, ID] = DD[0].pos, pD = [], iD = [], fD = [];
          return DD.forEach(((DD, bD) => {
            let {
              pos: QD,
              way: [wD, SD]
            } = DD;
            const BD = QD[0] - CD + .5,
              yD = QD[1] - cD + .04,
              MD = QD[2] - ID + .5,
              [tD, ZD] = [.35 * -SD, .35 * wD],
              [oD, vD] = [bD * Cc, (bD + 1) * Cc],
              ND = pD.length / 3;
            pD.push(BD - .5 * wD + tD, yD, MD - .5 * SD + ZD), pD.push(BD - .5 * wD - tD, yD, MD - .5 * SD - ZD), pD.push(BD + .5 * wD + tD, yD, MD + .5 * SD + ZD), pD.push(BD + .5 * wD - tD, yD, MD + .5 * SD - ZD), iD.push(0, oD, 1, oD, 0, vD, 1, vD), fD.push(ND, ND + 1, ND + 2, ND + 1, ND + 3, ND + 2)
          })), {
            positions: pD,
            uvs: iD,
            indices: fD
          }
        }(DD.cells), {
          kind: "chevronPath",
          colour: DD.colour,
          alpha: DD.alpha
        }, DD.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(DD) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(DD, 250) / 1e3 * 1.2 * Cc) % 1, this.setRouteSlide())
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
        const CD = this.deps.cmd();
        if (!CD) return DD.length = 0, void(this.pendingFar = void 0);
        let cD = 0;
        for (; cD < DD.length && (0, tD.af)(CD, 0, DD[cD]);) cD++;
        DD.splice(0, cD);
        const ID = this.pendingStyle;
        if (void 0 !== ID) {
          (ID ? (0, tD.kg)(CD, 0, ID.width, ID.alpha, 1, ID.endAtSolidFace ? 1 : 0) : (0, tD.kg)(CD, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const pD = this.pendingFar;
        void 0 !== pD && (0, tD.cg)(CD, 0, null !== pD && void 0 !== pD ? pD : 0, null === pD ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(DD, CD) {
        const cD = this.deps.cmd(),
          ID = pc(DD);
        cD && ID !== tD.nd && (0, tD.qg)(cD, 0, ID, CD)
      }
      setFacingTolerance(DD, CD) {
        const cD = this.deps.cmd(),
          ID = pc(DD);
        cD && ID !== tD.nd && ic(cD, ID, CD)
      }
      forEachEntity(DD) {
        const {
          api: CD
        } = this;
        for (let cD = 0; cD < CD.idStr.length; cD++) {
          const ID = CD.idStr[cD];
          null === ID || mD(CD.kinds[cD]) || DD(ID)
        }
      }
      getEntityInfo(DD) {
        return this.deps.entityInfo.get(DD)
      }
      isEntityInteractable(DD) {
        const CD = pc(DD);
        return CD !== tD.nd && 1 === this.api.queries.entityInteractable(CD)
      }
      isLocalPlayer(DD) {
        return this.isLocal(DD)
      }
      getLineOwner(DD) {
        var CD;
        const cD = null === (CD = this.deps.entityInfo.get(DD)) || void 0 === CD ? void 0 : CD.meshOpts;
        if (!cD) return null;
        try {
          const {
            lineToEId: DD
          } = JSON.parse(cD);
          return null !== DD && void 0 !== DD ? DD : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const DD = this.api.apiView;
        return hC[0] = tD.s.eye(DD, 0, 0), hC[1] = tD.s.eye(DD, 0, 1), hC[2] = tD.s.eye(DD, 0, 2), hC
      }
      getCameraFar() {
        return tD.s.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(DD) {
        null !== DD && (this.farSet = !0), this.pendingFar = DD, this.flushOwed()
      }
      turnCamera(DD, CD) {
        this.cameraTurn.turn(DD, CD)
      }
      clearPickupDelay(DD) {
        const CD = this.deps.cmd(),
          cD = pc(DD);
        CD && cD !== tD.nd && (0, tD.Fe)(CD, 0, cD)
      }
      sendChat(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = this.deps.sendCmd();
        cD && YC(cD, 0, sC.e.Chat, (0, lD.g)((0, sC.p)({
          Rf: DD,
          kf: CD
        })))
      }
      sendCommand(DD) {
        DD.length <= 119 && this.sendChat(`/${DD}`)
      }
      predictedCells(DD, CD, cD, ID) {
        const pD = this.chunks,
          iD = [],
          fD = (DD, CD, cD, ID, pD) => {
            iD.push(DD, CD, cD, ID, this.tables.blockRootId(pD) === this.tables.blockRootId(ID) ? 0 : 1)
          },
          bD = pD.HS(DD, CD, cD),
          QD = Ic(bD);
        if (QD) {
          const [ID, iD, wD] = [DD - QD.x, CD - QD.y, cD - QD.z], SD = cc[pD.HS(ID, iD, wD)], BD = null === SD || void 0 === SD ? void 0 : SD.positions.some((DD => DD.id === bD && DD.x === QD.x && DD.y === QD.y && DD.z === QD.z));
          for (const DD of (BD && SD ? SD : QD.main).positions) pD.HS(ID + DD.x, iD + DD.y, wD + DD.z) === DD.id && fD(ID + DD.x, iD + DD.y, wD + DD.z, 0, DD.id)
        }
        const wD = Ic(ID);
        if (wD)
          for (const BD of wD.main.positions) {
            const [ID, iD, bD] = [DD + BD.x - wD.x, CD + BD.y - wD.y, cD + BD.z - wD.z];
            fD(ID, iD, bD, BD.id, pD.HS(ID, iD, bD))
          } else fD(DD, CD, cD, ID, bD);
        const SD = this.tables;
        if ((0 !== SD.attachedTopOf(bD) || 0 !== SD.attachedTopOf(ID)) && pD.isLoaded(DD, CD + 1, cD)) {
          let QD = pD.HS(DD, CD + 1, cD);
          for (let ID = 0; ID < iD.length; ID += 5) iD[ID] === DD && iD[ID + 1] === CD + 1 && iD[ID + 2] === cD && (QD = iD[ID + 3]);
          const wD = this.attachedTopWrite(bD, ID, QD);
          void 0 !== wD && fD(DD, CD + 1, cD, wD, QD)
        }
        return iD
      }
      attachedTopWrite(DD, CD, cD) {
        const ID = this.tables,
          pD = ID.attachedTopOf(DD),
          iD = ID.attachedTopOf(CD),
          fD = 0 !== pD && 0 !== cD && ID.blockRootId(cD) === ID.blockRootId(pD);
        return 0 !== pD && 0 !== iD && ID.blockRootId(DD) === ID.blockRootId(CD) ? fD && cD !== iD ? iD : void 0 : 0 === iD || !fD && 0 !== cD ? fD ? 0 : void 0 : iD
      }
    }
    const bc = tD.Ac + tD.Ec * tD.Lc.BYTES,
      Qc = 2147483647,
      wc = new TextDecoder,
      Sc = new TextEncoder,
      Bc = Object.freeze({
        qS: 0,
        iB: null,
        amountAddedToSlot: 0
      }),
      yc = new Proxy({}, {
        get: () => () => tD.Cd
      });

    function Mc(DD) {
      return Number.isInteger(DD) && DD >= 0 && DD <= 65535
    }

    function tc(DD) {
      return Number.isInteger(DD) && DD >= 0 && DD <= 4294967295
    }
    class Zc {
      constructor(DD) {
        this.deps = DD, this.si = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(tD.Ec), this.ids = new Uint16Array(tD.Ec), this.amounts = new Uint16Array(tD.Ec), this.attrRead = new Float64Array(tD.Ec).fill(-1), this.stale = new Uint16Array(tD.Ec), this.staleVersion = new Uint32Array(tD.Ec), this.instances = new Uint32Array(tD.Ec), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var CD;
        return Number.isInteger(DD) && DD >= 0 && DD < this.len && 0 !== this.ids[DD] && null !== (CD = this.facades[DD]) && void 0 !== CD ? CD : null
      }
      Lb() {
        return this.slot(this.selected)
      }
      playerItems() {
        const DD = [];
        for (let CD = 0; CD < Math.min(tD.Id, this.len); CD++) DD.push(this.slot(CD));
        return DD
      }
      freeSlots() {
        let DD = 0;
        for (let CD = 0; CD < Math.min(tD.Id - tD.j, this.len); CD++) 0 === this.ids[CD] && DD++;
        return DD
      }
      amountOf(DD) {
        let CD = 0;
        for (let ID = 0; ID < Math.min(tD.Id, this.len); ID++) {
          const pD = this.slot(ID);
          var cD;
          if ((null === pD || void 0 === pD ? void 0 : pD.name) === DD) CD += null !== (cD = pD.amount) && void 0 !== cD ? cD : 1
        }
        return CD
      }
      instance(DD) {
        var CD;
        return null !== (CD = this.instances[DD]) && void 0 !== CD ? CD : 0
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
          for (const cD of [...this.listeners]) try {
            cD()
          } catch (CD) {
            DD(CD)
          }
        }
      }
      chestOpened(DD, CD, cD) {
        this.si[0] = DD, this.si[1] = CD, this.si[2] = cD, this.version++
      }
      refresh() {
        const DD = this.deps.api.apiView,
          CD = tD.s.inventoryViewPtr(DD, 0),
          cD = tD.s.inventoryVersion(DD, 0),
          ID = tD.s.selectedSlot(DD, 0);
        ID !== this.selected && (this.selected = ID, this.version++);
        const pD = tD.s.slotIcon(DD, 0);
        if (pD !== this.slotIconId && (this.slotIconId = pD, this.iconChanged = !0), CD === this.viewPtr && cD === this.viewVersion) return;
        this.viewPtr = CD, this.viewVersion = cD;
        const iD = this.deps.api.memoryData(CD, bc, 4, "the inventory view"),
          fD = iD ? Math.min(iD.getUint32(0, !0), tD.Ec) : 0;
        fD !== this.len && (this.len = fD, this.version++);
        let bD = 0;
        for (let QD = 0; QD < tD.Ec; QD++) {
          const DD = tD.Ac + QD * tD.Lc.BYTES,
            CD = null !== iD && QD < fD ? tD.Lc.item(iD, DD) : 0;
          if (0 === CD || null === iD) {
            0 !== this.ids[QD] && (this.ids[QD] = 0, this.attrRead[QD] = -1, this.instances[QD]++, this.version++);
            continue
          }
          const cD = tD.Lc.amount(iD, DD),
            ID = tD.Lc.attrVersion(iD, DD);
          CD === this.ids[QD] && cD === this.amounts[QD] || this.fill(QD, CD, cD), ID !== this.attrRead[QD] && (this.stale[bD] = QD, this.staleVersion[bD] = ID, bD++)
        }
        bD > 0 && this.fetchAttributes(bD)
      }
      fill(DD, CD, cD) {
        const {
          tables: ID
        } = this.deps, pD = CD !== this.ids[DD];
        let iD = this.facades[DD];
        iD || (iD = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[DD] = iD), pD && (iD.name = ID.nameOfId(CD), iD.typeObj = ID.itemType(CD), iD.attributes = {
          customAttributes: {}
        }, this.attrRead[DD] = -1, this.instances[DD]++), iD.amount = 0 === cD ? null : cD, this.ids[DD] = CD, this.amounts[DD] = cD, this.version++
      }
      fetchAttributes(DD) {
        const {
          api: CD,
          onError: cD
        } = this.deps, ID = CD.memoryView(Uint16Array, CD.scratch(), DD, "item_attributes_batch's slots");
        if (!ID) return void this.markRead(DD);
        ID.set(this.stale.subarray(0, DD));
        const pD = CD.queries.itemAttributesBatch(DD),
          iD = 4294967295 === pD ? null : CD.memoryData(CD.scratch(), pD, 4, "item_attributes_batch's answer");
        if (!iD) return void this.markRead(DD);
        const fD = new Uint8Array(iD.buffer, iD.byteOffset, pD);
        for (let QD = 0; QD + 8 <= pD;) {
          const DD = iD.getUint16(QD, !0),
            CD = iD.getUint32(QD + 4, !0),
            ID = fD.subarray(QD + 8, QD + 8 + CD);
          QD += 8 + (0, yD.je)(CD);
          const pD = this.facades[DD];
          if (pD && 0 !== this.ids[DD] && 0 !== CD) {
            try {
              pD.attributes = JSON.parse(wc.decode(ID))
            } catch (bD) {
              cD(bD)
            }
            this.version++
          }
        }
        this.markRead(DD)
      }
      markRead(DD) {
        for (let CD = 0; CD < DD; CD++) this.attrRead[this.stale[CD]] = this.staleVersion[CD]
      }
      swap(DD, CD) {
        return Mc(DD) && Mc(CD) && this.settle(this.queries().invSwap(DD, CD))
      }
      move(DD, CD, cD) {
        return Mc(DD) && Mc(CD) && tc(cD) && this.settle(this.queries().invMove(DD, CD, cD))
      }
      quickMove(DD, CD, cD, ID) {
        var pD, iD;
        if (!Mc(DD) || !Mc(CD) || !Mc(cD) || null !== ID && !tc(ID)) return null;
        const fD = this.queries().invQuickMove(DD, CD, cD, null === ID ? -1 : Math.min(ID, Qc)),
          bD = fD === tD.Cd ? tD.Vb : null !== (pD = null === (iD = this.extras()) || void 0 === iD ? void 0 : iD[1]) && void 0 !== pD ? pD : tD.Vb;
        return this.settle(fD), bD === tD.Vb ? null : bD
      }
      remove(DD, CD, cD) {
        return Mc(DD) && tc(CD) && this.settle(this.queries().invRemove(DD, CD, cD ? 1 : 0))
      }
      selectSlot(DD) {
        return Mc(DD) && this.settle(this.queries().selectSlot(DD))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(DD, CD, cD) {
        if (!Mc(DD) || !Number.isInteger(CD)) return !1;
        const [ID, pD, iD] = cD;
        return this.settle(this.queries().invEnchant(DD, CD, Math.floor(ID), Math.floor(pD), Math.floor(iD)))
      }
      craft(DD, CD, cD) {
        let ID;
        try {
          ID = this.deps.tables.getItemId(DD)
        } catch {
          return Bc
        }
        if (!Mc(CD) || null !== cD && (Number.isNaN(cD) || cD < 0)) return Bc;
        const pD = null === cD || cD > Qc ? -1 : Math.floor(cD),
          iD = this.queries().craft(ID, CD, pD);
        let fD = Bc;
        const bD = iD === tD.Cd ? null : this.extras();
        if (bD) {
          const [DD, CD, cD] = bD;
          fD = {
            qS: DD,
            iB: CD === tD.Vb ? null : CD,
            amountAddedToSlot: cD
          }
        }
        return this.settle(iD), fD
      }
      salvage(DD, CD, cD) {
        let ID;
        try {
          ID = this.deps.tables.getItemId(CD)
        } catch {
          return !1
        }
        return Mc(DD) && Number.isInteger(cD) && this.settle(this.queries().salvage(DD, ID, Math.max(Math.min(cD, Qc), -Qc)))
      }
      craftingView(DD, CD, cD) {
        var ID;
        if (this.stopped) return null;
        const {
          api: pD,
          onError: iD
        } = this.deps, fD = DD ? Sc.encode(DD) : null;
        if (null !== fD) {
          if (fD.length > 1024) return iD(new Error(`The crafting station ${DD}'s name is over 1024 bytes`)), null;
          const CD = pD.memoryView(Uint8Array, pD.scratch(), fD.length, "crafting_view's station");
          if (!CD) return null;
          CD.set(fD)
        }
        const bD = Mc(CD) && Mc(cD),
          QD = pD.queries.craftingView(null !== (ID = null === fD || void 0 === fD ? void 0 : fD.length) && void 0 !== ID ? ID : 0, bD ? CD : 0, bD ? cD : 0);
        return QD < tD.sb.BYTES ? (pD.reportCorruption(`crafting_view's answer of ${QD} bytes`), null) : pD.memoryData(pD.scratch(), QD, 1, "crafting_view's answer")
      }
      queries() {
        var DD, CD;
        return !1 === (null === (DD = (CD = this.deps).beforeOp) || void 0 === DD ? void 0 : DD.call(CD)) ? (this.stopped = !0, yc) : this.deps.api.queries
      }
      extras() {
        const {
          api: DD
        } = this.deps;
        return DD.memoryView(Uint32Array, DD.scratch(), 3, "a sync query's extra words")
      }
      settle(DD) {
        if (DD === tD.yd)(0, dC.c)();
        else if (DD !== tD.Cd) {
          const CD = this.deps.cmd();
          CD && function(DD, CD, cD) {
            return (0, dC.c)(), (0, tD.Dg)(DD, CD, cD)
          }(CD, 0, DD) || this.deps.onError(new Error(`Sync op ${DD}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), DD !== tD.Cd
      }
    }
    const oc = 1 / .6,
      vc = [0, 1, 0],
      Nc = [0, 0, 0],
      gc = new Uint8Array(0),
      Xc = 1.2 * tC.h.vN,
      mc = new TextEncoder,
      nc = [0, 0, 0],
      Oc = [0, 0, 0],
      Pc = new Map;

    function Hc(DD) {
      let CD = Pc.get(DD);
      return CD || (Pc.size >= 64 && Pc.clear(), CD = mc.encode(`{"emitRate":${DD}}`), Pc.set(DD, CD)), CD
    }

    function Uc(DD) {
      return Number.isFinite(DD) && DD > 0 ? DD : 0
    }

    function xc(DD, CD) {
      for (let cD = 0; cD < 3; cD++) {
        const ID = Math.abs(CD[cD]);
        nc[cD] = DD[cD] - ID, Oc[cD] = 2 * ID
      }
      return Number.isFinite(nc[0] + nc[1] + nc[2] + Oc[0] + Oc[1] + Oc[2])
    }

    function qc(DD, CD) {
      return "pos1" === DD || "pos2" === DD ? void 0 : CD
    }

    function Jc(DD, CD, cD) {
      return DD.length > tD.Wd.MaxOpts ? (cD(new Error(`${CD}'s particle opts are over ${tD.Wd.MaxOpts} bytes of JSON`)), null) : DD
    }
    const Kc = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class ac {
      constructor(DD) {
        this.deps = DD, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(DD, CD) {
        var cD;
        const ID = this.sink(),
          pD = null !== (cD = CD.half) && void 0 !== cD ? cD : Nc;
        if (!ID || this.live >= tD.Wd.MaxLiveKeys || this.nextKey > tD.Wd.MaxKey || !xc(CD.pos, pD)) return Kc;
        const iD = this.nextKey,
          fD = Jc(function(DD) {
            var CD, cD, ID;
            const pD = JSON.stringify({
              texture: "string" === typeof DD.texture ? DD.texture : "smokePuff",
              LB: DD.LB,
              minLifeTime: DD.minLifeTime,
              maxLifeTime: DD.maxLifeTime,
              minSize: DD.minSize,
              maxSize: DD.maxSize,
              minEmitPower: DD.minEmitPower,
              maxEmitPower: DD.maxEmitPower,
              emitRate: Uc(DD.emitRate),
              gravity: null !== (CD = DD.gravity) && void 0 !== CD ? CD : Nc,
              dir1: null !== (cD = DD.dir1) && void 0 !== cD ? cD : vc,
              dir2: null !== (ID = DD.dir2) && void 0 !== ID ? ID : vc,
              colorGradients: DD.colorGradients,
              blendMode: DD.blendMode
            });
            return mc.encode(pD)
          }(DD), "createParticles", this.deps.onError);
        return fD && (0, tD.Bf)(ID, 0, iD, 0, tD.Wd.PresetNone, 0, nc, Oc, fD) ? (this.nextKey++, this.live++, this.started = !0, new Vc(this, this.session, iD, DD, pD)) : Kc
      }
      playEffect(DD) {
        const CD = this.sink(),
          {
            pos1: cD,
            pos2: ID
          } = DD;
        if (!CD || !cD || !ID) return;
        for (let iD = 0; iD < 3; iD++) nc[iD] = Math.min(cD[iD], ID[iD]), Oc[iD] = Math.abs(ID[iD] - cD[iD]);
        if (!Number.isFinite(nc[0] + nc[1] + nc[2] + Oc[0] + Oc[1] + Oc[2])) return;
        const pD = Jc(mc.encode(JSON.stringify(DD, qc)), "playParticleEffect", this.deps.onError);
        pD && (0, tD.wf)(CD, 0, 0, tD.Wd.PresetNone, tD.Wd.HasBox, 0, nc, Oc, pD)
      }
      burstPreset(DD, CD, cD) {
        const ID = this.sink(),
          pD = Math.min(Math.floor(cD), tD.Wd.MaxBurst);
        if (!ID || !Object.hasOwn(tD.nc, DD) || !(pD > 0)) return;
        const iD = Xc;
        for (let fD = 0; fD < 3; fD++) nc[fD] = CD[fD] - iD / 2, Oc[fD] = iD;
        Number.isFinite(nc[0] + nc[1] + nc[2]) && (0, tD.wf)(ID, 0, 0, tD.nc[DD], tD.Wd.HasBox, pD, nc, Oc, gc)
      }
      sessionEnded() {
        this.session++;
        const DD = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !DD || (0, tD.Df)(DD, 0)
      }
      sinkFor(DD) {
        return DD === this.session ? this.deps.cmd() : null
      }
      stop(DD, CD) {
        const cD = this.sinkFor(DD);
        cD && (0, tD.Gf)(cD, 0, CD) && this.live--
      }
    }
    class Vc {
      constructor(DD, CD, cD, ID, pD) {
        this.owner = DD, this.session = CD, this.key = cD, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(pD[0]), Math.abs(pD[1]), Math.abs(pD[2])], this.rate = Uc(ID.emitRate), this.emitted = this.rate > 0;
        const iD = ID.maxLifeTime * oc * 1e3 + 250;
        this.stopDelayMs = iD >= 0 ? Math.min(iD, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(DD, CD) {
        const cD = this.sink();
        if (cD) {
          if (CD)
            for (let DD = 0; DD < 3; DD++) this.half[DD] = Math.abs(CD[DD]);
          xc(DD, this.half) && (0, tD.Kf)(cD, 0, this.key, tD.Wd.HasBox, nc, Oc, gc)
        }
      }
      setEmitRate(DD) {
        const CD = this.sink(),
          cD = Uc(DD);
        CD && cD !== this.rate && (0, tD.Kf)(CD, 0, this.key, 0, Nc, Nc, Hc(cD)) && (this.rate = cD, this.emitted ||= cD > 0)
      }
      emit(DD) {
        const CD = this.sink(),
          cD = Math.min(Math.floor(DD), tD.Wd.MaxBurst);
        CD && cD > 0 && (0, tD.wf)(CD, 0, this.key, tD.Wd.PresetNone, 0, cD, Nc, Nc, gc) && (this.emitted = !0)
      }
      emitPoints(DD, CD, cD) {
        const ID = this.sink(),
          pD = Math.min(Math.floor(cD), tD.Wd.MaxPoints, Math.floor(CD.length / 4));
        if (!ID || !(pD > 0) || !Number.isFinite(DD[0] + DD[1] + DD[2])) return;
        const iD = new Uint8Array(CD.buffer, CD.byteOffset, pD * tD.Wd.PointBytes);
        (0, tD.Af)(ID, 0, this.key, pD, DD, iD) && (this.emitted = !0)
      }
      setDirections(DD, CD) {
        const cD = this.sink();
        if (!cD || !Number.isFinite(DD[0] + DD[1] + DD[2] + CD[0] + CD[1] + CD[2])) return;
        const ID = mc.encode(JSON.stringify({
          dir1: [DD[0], DD[1], DD[2]],
          dir2: [CD[0], CD[1], CD[2]]
        }));
        (0, tD.Kf)(cD, 0, this.key, 0, Nc, Nc, ID)
      }
      stop() {
        const DD = this.sink();
        this.stopped = !0, DD && (this.emitted ? (this.rate > 0 && (0, tD.Kf)(DD, 0, this.key, 0, Nc, Nc, Hc(0)), setTimeout((() => {
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
    const zc = GC.q,
      jc = new TextDecoder;

    function lc(DD, CD) {
      const {
        serverIds: cD,
        kinds: ID
      } = DD;
      let pD = 0;
      for (let iD = 0; iD < cD.length; iD++) {
        const DD = cD[iD];
        if (DD !== tD.nd && !mD(ID[iD])) {
          if (pD === CD.length) {
            const DD = new Int32Array(Math.max(64, 2 * pD));
            DD.set(CD), CD = DD
          }
          CD[pD++] = DD
        }
      }
      return {
        ids: CD,
        count: pD
      }
    }

    function Lc(DD, CD) {
      return DD.length >= CD ? DD : new Int32Array(Math.max(CD, 2 * DD.length))
    }

    function Tc(DD, CD, cD, ID) {
      for (let pD = 0; pD < cD; pD += 4096) {
        const iD = Math.min(4096, cD - pD),
          fD = DD.memoryView(Int32Array, DD.scratch(), iD, "entity_info_batch's ids");
        if (!fD) return !1;
        fD.set(CD.subarray(pD, pD + iD));
        const bD = DD.queries.entityInfoBatch(iD),
          QD = 4294967295 === bD ? null : DD.memoryData(DD.scratch(), bD, 4, "entity_info_batch's records");
        if (!QD) return !1;
        for (let DD = 0; DD + tD.bc.BYTES <= bD;) {
          const CD = tD.bc.len(QD, DD);
          ID(tD.bc.serverId(QD, DD), Gc(QD, DD, CD)), DD += tD.bc.BYTES + (0, yD.je)(CD)
        }
      }
      return !0
    }

    function Gc(DD, CD, cD) {
      var ID, pD, iD;
      const fD = tD.bc.kind(DD, CD),
        bD = 0 === fD ? null : nD(fD);
      if (null === bD) return null;
      const QD = tD.bc.variation(DD, CD),
        wD = tD.bc.pose(DD, CD),
        SD = tD.bc.meta(DD, CD),
        BD = tD.bc.mesh(DD, CD),
        yD = 0 !== (tD.bc.flags(DD, CD) & tD._b.HasOpts),
        MD = zc[bD];
      return Object.freeze({
        type: bD,
        variation: QD === tD.ud ? void 0 : null !== (ID = null !== (pD = null === MD || void 0 === MD ? void 0 : MD[QD]) && void 0 !== pD ? pD : null === MD || void 0 === MD ? void 0 : MD[0]) && void 0 !== ID ? ID : "default",
        pose: wD === tD.xc ? void 0 : null !== (iD = tD.Pb[wD]) && void 0 !== iD ? iD : tD.Pb[0],
        metaInfo: SD === tD.xc ? void 0 : tD.hd[SD],
        meshKind: BD === tD.xc ? void 0 : tD.fd[BD],
        meshOpts: yD ? jc.decode(new Uint8Array(DD.buffer, DD.byteOffset + CD + tD.bc.BYTES, cD)) : void 0
      })
    }
    const Rc = 1,
      kc = 2;
    class dc {
      constructor(DD) {
        this.deps = DD, this.wanted = 0, this.Lb = !1, this.refused = !1
      }
      get on() {
        return this.Lb
      }
      want(DD, CD) {
        this.wanted = CD ? this.wanted | DD : this.wanted & ~DD;
        const cD = 0 !== this.wanted;
        if (cD === this.Lb) return;
        const ID = this.deps.cmd();
        null !== ID ? (0, tD.Kg)(ID, 0, cD ? 1 : 0) ? (this.Lb = cD, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Lb = !1
      }
    }
    class Yc {
      constructor(DD) {
        this.deps = DD, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(DD) {
        var CD;
        return this.complete || this.fill(), null !== (CD = this.entries.get("string" === typeof DD ? DD : String(DD))) && void 0 !== CD ? CD : null
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
            api: CD
          } = this.deps;
          let cD = 0;
          const ID = this.ids = Lc(this.ids, DD);
          for (let pD = 0; pD < DD; pD++) {
            const DD = this.pending[pD],
              iD = CD.indexById.get(DD);
            void 0 === iD || mD(CD.kinds[iD]) ? this.entries.delete(String(DD)) : ID[cD++] = DD
          }
          cD > 0 && !this.batch(ID, cD) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Rc, !1)
      }
      fill() {
        const {
          api: DD
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: DD
          } = this.deps, CD = DD.on;
          DD.want(Rc, !0), !CD && DD.on && (this.refill = this.midFrame)
        }
        const {
          ids: CD,
          count: cD
        } = lc(DD, this.ids);
        this.ids = CD, cD > 0 && !this.batch(CD, cD) && (this.refill = !0)
      }
      batch(DD, CD) {
        return Tc(this.deps.api, DD, CD, ((DD, CD) => {
          null === CD ? this.entries.delete(String(DD)) : this.entries.set(String(DD), CD)
        }))
      }
    }
    var Wc = cD(4585);

    function sc(DD) {
      if ("message" !== DD.type || DD.Rf !== Wc.dc.NewClientOptions || DD.payloadKind !== yD.ic.Msgpack) return null;
      const CD = (0, lD.c)(DD.payload);
      if (null === CD || "object" !== typeof CD || Array.isArray(CD)) throw new Error("NewClientOptions whose body isn't an object of options");
      return CD
    }
    var Ec = cD(1240),
      ec = cD(36018);

    function uc(DD, CD, cD, ID, pD, iD, bD) {
      var QD, wD, SD;
      switch (DD) {
        case tD.ve.ToggleMenu: {
          const DD = tD.J[CD];
          fD.i.Uo("toggleMenu", void 0 === DD ? "inventory" : `inventory|${DD}`);
          break
        }
        case tD.ve.EditBoard:
          fD.i.Uo("EditBoard", {
            pos: 0 === CD ? null : cD
          });
          break;
        case tD.ve.EditCodeBlock:
        case tD.ve.ViewCodeBlock:
          fD.i.Uo("EditCodeBlock", {
            pos: cD,
            canChangePos: DD === tD.ve.EditCodeBlock
          });
          break;
        case tD.ve.EditCustomLobbyBlock:
          fD.i.Uo("EditCustomLobbyBlock", {
            pos: cD
          });
          break;
        case tD.ve.OpenIronChest:
          fD.i.Uo("OpenIronChest", {
            pos: cD
          });
          break;
        case tD.ve.EditNameTag:
          fD.i.Uo("EditNameTag", null !== (QD = null === (wD = pD.Lb()) || void 0 === wD || null === (SD = wD.attributes.customAttributes) || void 0 === SD ? void 0 : SD.text) && void 0 !== QD ? QD : "");
          break;
        case tD.ve.EditBook: {
          var BD, yD, ZD;
          const DD = null === (BD = pD.Lb()) || void 0 === BD ? void 0 : BD.attributes;
          fD.i.Uo("EditBook", {
            pages: (0, Ec.R)(null === DD || void 0 === DD || null === (yD = DD.customAttributes) || void 0 === yD ? void 0 : yD.pages),
            title: null !== (ZD = null === DD || void 0 === DD ? void 0 : DD.customDisplayName) && void 0 !== ZD ? ZD : "Title",
            isPublished: !(null === DD || void 0 === DD || !DD.customDescription)
          });
          break
        }
        case tD.ve.CantChangeBlock:
          ! function(DD, CD) {
            const cD = CD.getClientOption("cantChangeError"),
              ID = CD.getClientOption(DD ? "cantBuildError" : "cantBreakError"),
              pD = DD ? cD : ID;
            (CD.getClientOption("canChange") || pD || "You cannot modify this block" !== cD) && fD.i.Uo("showBottomMessage", {
              message: ID || cD,
              type: "Error"
            })
          }(1 === CD, iD);
          break;
        case tD.ve.MiddleBarStart:
          fD.i.Uo("middleScreenBarInitiate", {
            duration: ID,
            iI: 1 === cD[0],
            horizBarRemOffset: CD
          });
          break;
        case tD.ve.MiddleBarStop:
          fD.i.Uo("middleScreenBarRemove");
          break;
        case tD.ve.Hitmarker:
          fD.i.Uo("localGunHitmarker", {
            rC: 1 === CD
          });
          break;
        case tD.ve.ShotsLeft:
          fD.i.Uo("localPlayerNewShotsLeft", ID);
          break;
        case tD.ve.AimingOverlay:
          fD.i.Uo("aimingOverlay", 3 === (3 & CD) ? "sniper" : "none");
          break;
        case tD.ve.BottomMessage:
          fD.i.Uo("showBottomMessage", JSON.parse(bD()));
          break;
        case tD.ve.Crosshair:
          pD.inaccuracy = (0, LD.e)(ID), (0, ec.b)().crosshairAccuracy(pD.inaccuracy);
          break;
        case tD.ve.ChargeStage:
          break;
        case tD.ve.EmoteWheelClose:
          fD.i.Uo("requestEmoteWheelClose");
          break;
        case tD.ve.BlockMined:
          fD.i.Uo("localBlockMined");
          break;
        default:
          throw new MD.e(`UiEvent of no kind: what ${DD}`)
      }
    }
    var hc = cD(37393),
      rc = cD(9050),
      Ac = cD(1945),
      Fc = cD(36149),
      DI = cD(9062),
      CI = cD(4571);
    const cI = 10,
      II = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      pI = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      iI = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function fI(DD, CD) {
      let cD, ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const iD = () => (cD = (0, Ac.q)(cD, CD()), cD);
      return {
        current: iD,
        watch(CD) {
          const cD = () => {
              CD(iD())
            },
            fD = [DD.watch(cD)];
          return null !== ID && fD.push((0, Ac.t)((DD => {
            DD.some(ID) && cD()
          }))), null !== pD && fD.push(pD(cD)), () => {
            for (const DD of fD) DD()
          }
        }
      }
    }

    function bI(DD) {
      return DD && {
        name: DD.name,
        amount: DD.amount,
        attributes: DD.attributes
      }
    }
    const QI = new WeakMap;

    function wI(DD) {
      let CD = QI.get(DD);
      return void 0 === CD && (CD = (0, DI.creativeItemIds)().map((CD => ({
        name: DD.nameOfId(CD),
        amount: DD.isStackableId(CD) ? 1 : null,
        attributes: (0, hc.e)("Gun" === (0, DI.itemTypeOf)(CD) ? {
          type: "Gun",
          clipSize: (0, DI.clipSizeOf)(CD)
        } : void 0)
      }))), QI.set(DD, CD)), CD
    }

    function SI(DD, CD, cD, ID) {
      const pD = CD => (DD.flush(ID), CD),
        iD = cD => {
          var ID, pD, iD, fD, bD, QD, wD;
          const SD = DD.slot(cD);
          if (!SD) return null;
          const {
            rootName: BD,
            metaStr: yD
          } = CD.getMetaInfo(SD.name);
          return {
            name: SD.name,
            amount: SD.amount,
            attributes: SD.attributes,
            instance: DD.instance(cD),
            displayName: null !== (ID = SD.attributes.customDisplayName) && void 0 !== ID ? ID : CD.getDisplayName(BD),
            requiresAmmo: "RequiresAmmo" === yD,
            clipSize: null !== (pD = null !== (iD = null === (fD = SD.attributes.customAttributes) || void 0 === fD || null === (bD = fD.gunStats) || void 0 === bD ? void 0 : bD.clipSize) && void 0 !== iD ? iD : null === (QD = CD.getGunStats(BD)) || void 0 === QD ? void 0 : QD.clipSize) && void 0 !== pD ? pD : null === (wD = SD.typeObj) || void 0 === wD ? void 0 : wD.clipSize
          }
        },
        bD = function(DD, CD) {
          let cD = null,
            ID = {
              focus: null,
              recipes: [],
              detail: null
            },
            pD = -1;
          const iD = new Set;
          return {
            read() {
              var iD, fD;
              if (null === cD) return null !== ID.focus && (ID = {
                ...ID,
                focus: null
              }), ID;
              if (ID.focus === cD && pD === DD.changes) return ID;
              if (pD = DD.changes, 0 === DD.length) return ID = {
                focus: cD,
                recipes: [],
                detail: null
              }, ID;
              let bD = 0;
              if (null !== cD.recipe) try {
                bD = CD.getItemId(cD.recipe.name)
              } catch {}
              const QD = DD.craftingView(cD.station, bD, null !== (iD = null === (fD = cD.recipe) || void 0 === fD ? void 0 : fD.xS) && void 0 !== iD ? iD : 0);
              return ID = null === QD ? {
                focus: cD,
                recipes: [],
                detail: null
              } : function(DD, CD, cD) {
                let ID = tD.sb.BYTES;
                const pD = [];
                for (let SD = tD.sb.recipes(DD, 0); SD > 0; SD--) {
                  const cD = tD.jb.flags(DD, ID),
                    iD = {
                      name: CD.nameOfId(tD.jb.item(DD, ID)),
                      xS: tD.jb.recipe(DD, ID),
                      requires: [],
                      produces: tD.jb.produces(DD, ID),
                      haveIngredients: 0 !== (cD & tD.fb.HaveIngredients),
                      listed: 0 !== (cD & tD.fb.Listed)
                    };
                  let fD = tD.jb.requires(DD, ID);
                  for (ID += tD.jb.BYTES; fD > 0; fD--) {
                    const cD = tD.nb.items(DD, ID);
                    iD.requires.push({
                      items: MI(DD, ID + tD.nb.BYTES, cD, CD),
                      amt: tD.nb.amount(DD, ID)
                    }), ID += tD.nb.BYTES + 2 * cD
                  }
                  pD.push(iD)
                }
                const iD = tD.sb.flags(DD, 0);
                if (null === cD.recipe || 0 === (iD & tD.rb.Detail)) return {
                  focus: cD,
                  recipes: pD,
                  detail: null
                };
                const fD = {},
                  bD = {};
                for (let SD = tD.sb.ingredients(DD, 0); SD > 0; SD--) {
                  const cD = tD.cb.item(DD, ID),
                    pD = tD.cb.from(DD, ID),
                    iD = tD.cb.amount(DD, ID);
                  ID += tD.cb.BYTES;
                  const QD = pD === tD.F ? null : MI(DD, ID, pD, CD);
                  if (null !== QD && (ID += 2 * pD), 0 === cD) continue;
                  const wD = CD.nameOfId(cD);
                  fD[wD] = iD, null !== QD && (bD[wD] = QD)
                }
                const {
                  name: QD,
                  xS: wD
                } = cD.recipe;
                return {
                  focus: cD,
                  recipes: pD,
                  detail: {
                    name: QD,
                    xS: wD,
                    craftAllTimes: tD.sb.craftAllTimes(DD, 0),
                    roomForOne: 0 !== (iD & tD.rb.RoomForOne),
                    resultStackable: Boolean(CD.getItemStat(QD, "stackable")),
                    amounts: fD,
                    ingredientsCraftedFrom: bD
                  }
                }
              }(QD, CD, cD), ID
            },
            setFocus(DD) {
              cD = DD;
              for (const CD of [...iD]) CD()
            },
            watchFocus: DD => (iD.add(DD), () => {
              iD.delete(DD)
            })
          }
        }(DD, CD);
      return {
        states: {
          inventory: fI(DD, (() => {
            const cD = DD.length;
            if (0 === cD) return II;
            const ID = [];
            for (let CD = 0; CD < tD.Id; CD++) ID.push(bI(DD.slot(CD)));
            const pD = DD.slotIcon,
              iD = ID[DD.selectedSlot];
            0 !== pD && iD && (ID[DD.selectedSlot] = {
              ...iD,
              icon: CD.nameOfId(pD)
            });
            const fD = !0 === CD.getClientOption("creative");
            let bD = [],
              QD = null;
            if (cD > tD.Id) {
              for (let CD = tD.Id; CD < cD; CD++) bD.push(bI(DD.slot(CD)));
              QD = {
                type: null,
                pos: [...DD.si],
                numSlots: cD - tD.Id,
                ironChest: null
              }
            } else fD && (bD = wI(CD));
            return {
              player: ID,
              chestOrCreative: bD,
              chest: QD,
              creative: fD,
              selectedSlot: DD.selectedSlot,
              freeSlots: DD.freeSlots()
            }
          }), (0, Ac.l)("creative")),
          hotbar: fI(DD, (() => {
            if (0 === DD.length) return pI;
            const CD = [];
            for (let DD = 0; DD < cI; DD++) CD.push(iD(DD));
            return {
              items: CD,
              ammo: DD.amountOf("Ammo"),
              selectedSlot: DD.selectedSlot
            }
          }), (0, Ac.j)("DisplayName", "GunStats")),
          crafting: fI(DD, bD.read, null, bD.watchFocus),
          heldItemAim: fI(DD, (() => {
            var CD;
            if (!cD()) return iI;
            const ID = null === (CD = DD.Lb()) || void 0 === CD ? void 0 : CD.typeObj,
              pD = "Gun" === (null === ID || void 0 === ID ? void 0 : ID.type);
            return {
              gun: pD,
              aimable: pD || !0 === (null === ID || void 0 === ID ? void 0 : ID.showsAimingUi),
              chargeName: "Chargeable" === (null === ID || void 0 === ID ? void 0 : ID.type) ? ID.name : null
            }
          }), null, (DD => function(DD, CD) {
            let cD = DD();
            return (0, CI.w)((() => {
              const ID = DD();
              ID !== cD && (cD = ID, CD(ID))
            }))
          }(cD, DD)))
        },
        events: {
          hotbarSlotRequested: (0, Ac.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Ac.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, Ac.d)("numkeyPressed"),
          inventoryDropRequested: (0, Ac.d)("DropInvenItem"),
          chestToggled: (0, Ac.d)("chestToggleFromServer"),
          chestRefreshed: (0, Ac.d)("chestRefreshedFromServer", yI),
          inventorySynced: (0, Ac.d)("syncedInvenFromServer", yI),
          enchantingTableOpened: (0, Ac.d)("enchantingTable", (DD => {
            let {
              position: cD,
              HS: ID
            } = DD;
            return {
              position: [...cD],
              blockName: CD.getMetaInfo(ID).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(CD) {
            DD.selectSlot(CD), DD.flush(ID)
          },
          removeInventoryItem(CD) {
            let {
              slot: cD,
              amount: ID,
              drop: iD
            } = CD;
            return pD(DD.remove(cD, ID, iD))
          },
          swapInventorySlots(CD) {
            let {
              a: cD,
              b: ID
            } = CD;
            return pD(DD.swap(cD, ID))
          },
          moveInventoryItem(CD) {
            let {
              from: cD,
              to: ID,
              amount: iD
            } = CD;
            return pD(DD.move(cD, ID, iD))
          },
          quickMoveInventoryItem(CD) {
            let {
              slot: cD,
              start: ID,
              end: iD,
              amount: fD
            } = CD;
            return pD(DD.quickMove(cD, ID, iD, fD))
          },
          closeChest() {
            DD.closeChest(), DD.flush(ID), fD.i.Uo("chestClosedByPlayer")
          },
          focusCrafting(DD) {
            bD.setFocus(DD)
          },
          craftRecipe(CD) {
            let {
              name: cD,
              xS: ID,
              times: iD
            } = CD;
            return pD(DD.craft(cD, ID, iD))
          },
          salvageItem(CD) {
            let {
              slot: cD,
              name: ID,
              amount: iD
            } = CD;
            return pD(DD.salvage(cD, ID, iD))
          },
          enchantItem(CD) {
            let {
              slot: cD,
              level: ID,
              tablePos: pD
            } = CD;
            DD.enchant(cD, ID, pD)
          }
        },
        queries: {
          enchantingOffer(cD) {
            let {
              slot: ID,
              blockName: pD
            } = cD;
            return function(DD, CD, cD, ID) {
              const pD = DD.slot(cD);
              if (!pD || !CD.getClientOption("canCraft") || !(0, rc.n)(ID) || (0, rc.l)(pD.attributes)) return BI;
              const iD = (0, DI.enchantmentPerksOf)(CD.getItemId(pD.name));
              if (0 === iD.length) return BI;
              const fD = [];
              for (let bD = 0; bD < Fc.b; bD++) {
                const {
                  commonProb: DD,
                  uncommonProb: CD,
                  rareProb: cD,
                  epicProb: pD,
                  legendaryProb: iD,
                  level: QD
                } = (0, rc.f)(ID, bD);
                fD.push({
                  level: QD,
                  odds: [DD, CD, cD, pD, iD].map((DD => 100 * DD))
                })
              }
              return {
                perks: [...iD],
                options: fD
              }
            }(DD, CD, ID, pD)
          }
        }
      }
    }
    const BI = Object.freeze({
      perks: [],
      options: []
    });

    function yI() {
      return null
    }

    function MI(DD, CD, cD, ID) {
      const pD = [];
      for (let iD = 0; iD < cD; iD++) {
        const cD = DD.getUint16(CD + 2 * iD, !0);
        0 !== cD && pD.push(ID.nameOfId(cD))
      }
      return pD
    }
    class tI {
      constructor(DD) {
        this.api = DD, this.positions = new Map, this.targeted = {
          EW: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Of: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(DD) {
        let CD = this.positions.get(DD);
        return CD || (this.api.checkValid(DD) || this.api.isLocal(DD) ? (CD = [NaN, NaN, NaN], this.api.readPosition(DD, CD), this.positions.set(DD, CD), CD) : null)
      }
      R_() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [CD, cD] of this.positions) this.api.readPosition(CD, cD) || this.api.checkValid(CD) || this.api.isLocal(CD) || this.positions.delete(CD);
        const DD = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (tD.s.playerFlags(DD, 0) & tD.Zd.Breaking) && tD.s.breakingProgress(DD, 0) >= 0, this.isBreaking)
          for (let CD = 0; CD < 3; CD++) this.breaking[CD] = tD.s.breakingPos(DD, 0, CD)
      }
      refreshTarget() {
        const DD = this.api.apiView,
          CD = tD.s.targetBlockId(DD, 0);
        if (this.hasTarget = CD !== tD.qd, this.hasTarget) {
          const cD = this.targeted;
          cD.EW = CD;
          for (let CD = 0; CD < 3; CD++) cD.position[CD] = tD.s.targetBlock(DD, 0, CD), cD.normal[CD] = tD.s.targetNormal(DD, 0, CD), cD.Of[CD] = tD.s.targetAdjacent(DD, 0, CD)
        }
      }
      despawned(DD) {
        const CD = this.positions.get(DD);
        CD && !this.api.isLocal(DD) && (CD.fill(NaN), this.positions.delete(DD))
      }
    }
    var ZI = cD(39725),
      oI = cD(39711),
      vI = cD(36144);
    const NI = 1,
      gI = 2;
    class XI {
      constructor() {
        this.game = new vI.f, this.client = new vI.f, this.Lb = 0, this.movesFly = null
      }
      setGame(DD) {
        if (null === DD || "object" !== typeof DD) return !1;
        const {
          key: CD,
          value: cD
        } = DD;
        return "string" === typeof CD && (this.game.setBooleanType(CD, Boolean(cD)), !0)
      }
      setClient(DD, CD) {
        this.client.setBooleanType(DD, CD)
      }
      clearGame() {
        this.game = new vI.f, this.movesFly = null
      }
      setMovesFly(DD) {
        this.movesFly = DD
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? NI : 0) | (this.client._getTotalBooleanVal() ? gI : 0)
      }
      write(DD) {
        const CD = this.perms(),
          {
            movesFly: cD
          } = this;
        if (CD === this.Lb && null === cD) return !0;
        let ID = tD.ec.Keep;
        return null !== cD && (ID = cD ? tD.ec.On : tD.ec.Off), !(!DD || !(0, tD.Le)(DD, 0, ID, CD, cD ? 1 : 0)) && (this.Lb = CD, this.movesFly = null, !0)
      }
    }
    class mI {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = DD, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: bD.e,
          get y() {
            return CD()
          }
        }
      }
      get hasView() {
        const DD = this.api.apiView,
          CD = tD.s.viewProj;
        return 0 !== CD(DD, 0, 3) || 0 !== CD(DD, 0, 7) || 0 !== CD(DD, 0, 11) || 0 !== CD(DD, 0, 15)
      }
      get cameraPosition() {
        const DD = this.api.apiView,
          {
            eye: CD
          } = this;
        for (let cD = 0; cD < 3; cD++) CD[cD] = tD.s.eye(DD, 0, cD);
        return CD
      }
      get cameraDirection() {
        const DD = this.api.apiView,
          CD = tD.s.viewProj,
          cD = CD(DD, 0, 3),
          ID = CD(DD, 0, 7),
          pD = CD(DD, 0, 11),
          iD = Math.hypot(cD, ID, pD),
          {
            forward: fD
          } = this;
        return iD > 0 && (fD[0] = cD / iD, fD[1] = ID / iD, fD[2] = pD / iD), fD
      }
      get cameraHeading() {
        return tD.s.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return tD.s.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return tD.s.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return tD.s.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(DD) {
        this.clip(DD);
        const {
          clipX: CD,
          clipY: cD,
          clipW: ID
        } = this;
        if (ID > 0) {
          const DD = CD / ID * 50,
            pD = -cD / ID * 50;
          return Math.abs(DD) <= this.screenBandPct.x && Math.abs(pD) <= this.screenBandPct.y ? {
            x: 50 + DD,
            y: 50 + pD
          } : this.clampToBand(DD, pD)
        }
        const pD = this.cameraPosition,
          iD = Math.hypot(DD[0] - pD[0], DD[1] - pD[1], DD[2] - pD[2]),
          fD = this.api.apiView,
          bD = tD.s.viewProj,
          QD = iD > 0 ? CD / iD : 0,
          wD = iD > 0 ? -cD / iD : 0,
          SD = Math.hypot(bD(fD, 0, 1), bD(fD, 0, 5), bD(fD, 0, 9)),
          BD = QD / Math.hypot(bD(fD, 0, 0), bD(fD, 0, 4), bD(fD, 0, 8)),
          yD = wD / SD,
          MD = !(Math.abs(BD) >= .001 || Math.abs(yD) >= .001);
        return this.clampToBand(QD, MD ? -(SD || 1) : wD)
      }
      projectDirectionToScreenPos(DD) {
        if (!this.hasView) return;
        const CD = this.cameraPosition,
          cD = this.along;
        for (let ID = 0; ID < 3; ID++) cD[ID] = CD[ID] + 10 * DD[ID];
        return this.projectWorldPosToScreenPos(cD)
      }
      projectWorldPosToViewport(DD) {
        this.clip(DD);
        const {
          clipX: CD,
          clipY: cD,
          clipW: ID
        } = this;
        return ID > 0 ? {
          x: 50 + CD / ID * 50,
          y: 50 - cD / ID * 50
        } : null
      }
      clip(DD) {
        const CD = this.api.apiView,
          cD = DD[0] - tD.s.origin(CD, 0, 0),
          ID = DD[1] - tD.s.origin(CD, 0, 1),
          pD = DD[2] - tD.s.origin(CD, 0, 2),
          iD = tD.s.viewProj;
        this.clipX = iD(CD, 0, 0) * cD + iD(CD, 0, 4) * ID + iD(CD, 0, 8) * pD + iD(CD, 0, 12), this.clipY = iD(CD, 0, 1) * cD + iD(CD, 0, 5) * ID + iD(CD, 0, 9) * pD + iD(CD, 0, 13), this.clipW = iD(CD, 0, 3) * cD + iD(CD, 0, 7) * ID + iD(CD, 0, 11) * pD + iD(CD, 0, 15)
      }
      clampToBand(DD, CD) {
        return (0, bD.h)(DD, CD, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var nI = cD(4590);
    const OI = new TextEncoder,
      PI = new Uint8Array(tD.O * tD.K);
    class HI {
      constructor() {
        this.buttons = [], this.Lb = !0
      }
      set(DD) {
        this.buttons = DD, this.Lb = !1
      }
      attached() {
        this.Lb = 0 === this.buttons.length
      }
      write(DD) {
        if (this.Lb) return;
        const CD = new Uint8Array(tD.O),
          cD = new Uint8Array(tD.O);
        let ID = 0,
          pD = 0;
        for (const {
            id: iD,
            keycode: fD
          }
          of this.buttons) {
          if (ID === tD.O) break;
          const {
            read: DD,
            written: bD
          } = OI.encodeInto(iD, PI.subarray(pD, pD + tD.K));
          if (DD < iD.length) continue;
          const QD = nI.j[fD];
          CD[ID] = "number" === typeof QD ? QD : 0, cD[ID] = bD, ID++, pD += bD
        }
        this.Lb = (0, tD.Be)(DD, 0, ID, CD, cD, PI.subarray(0, pD))
      }
    }

    function UI(DD, CD, cD) {
      const ID = OI.encode(CD);
      return ID.length <= tD.K && function(DD, CD, cD, ID) {
        return (0, dC.c)(), (0, tD.Lf)(DD, CD, cD, ID)
      }(DD, 0, cD ? 1 : 0, ID)
    }
    const xI = new TextDecoder,
      qI = new TextEncoder,
      JI = new Uint8Array(0),
      KI = [0, 0, 0],
      aI = {
        off: tD.$d.Off,
        key: tD.$d.Key,
        touch: tD.$d.Touch
      };
    class VI {
      constructor(DD) {
        var CD;
        this.options = DD, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new HI, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new XI, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Nt = DD => {
          if ((0, MD.j)(DD)) throw DD;
          this.onError(DD)
        }, this.api = DD.api, this.tables = DD.tables, this.onError = null !== (CD = DD.onError) && void 0 !== CD ? CD : DD => {
          console.error("Error in client game callback", DD)
        }, this.renderFrame = new mI(this.api, DD.screenBandY), this.live = new tI(this.api), this.chunks = new bC(this.api.memory, (() => this.api.apiView)), this.items = new Zc({
          api: this.api,
          tables: DD.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: DD.beforeOp
        });
        const cD = () => this.stopped() ? null : this.cmd,
          ID = () => this.sessionLive;
        this.entityInfoWatch = new dc({
          cmd: cD,
          onError: this.onError
        }), this.entityInfo = new Yc({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: ID
        }), this.particles = new ac({
          cmd: cD,
          isSessionLive: ID,
          onError: this.onError
        }), this.clientApi = new fc({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: DD.tables,
          cmd: cD,
          sendCmd: () => this.sendCmd(),
          isSessionLive: ID,
          beforeWrite: () => {
            var CD;
            if (this.stopped()) return !1;
            const cD = this.generation;
            return !1 !== (null === (CD = DD.beforeWrite) || void 0 === CD ? void 0 : CD.call(DD)) && cD === this.generation
          },
          playerDbId: () => {
            const DD = this.session;
            if (null === DD) throw new Error("No game session has started, so the local player has no DB id");
            return DD.playerDbId
          },
          playSound: DD.playSound,
          setLocalOptions: DD.setLocalOptions,
          hasPackModel: DD.hasPackModel
        }), this.scriptedCamera = new ED({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: DD.cameraScreen,
          showFacing: DD.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= SI(this.items, this.tables, (() => this.localPlayerAlive()), this.Nt), this.itemSources
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
        const CD = this.sessionLive ? this.sendCmd() : null;
        return null !== CD && (cD = CD, ID = 0, pD = DD[0], iD = DD[1], fD = DD[2], (0, dC.c)(), (0, tD.He)(cD, ID, pD, iD, fD));
        var cD, ID, pD, iD, fD
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(DD) {
        const CD = this.liveCmd();
        return null === CD ? (this.pendingZoom = DD, !1) : (this.pendingZoom = null, (0, tD.Ag)(CD, 0, DD, 1))
      }
      kU(DD) {
        const CD = this.stopped() ? null : this.cmd;
        return null !== CD && (0, tD.tg)(CD, 0, DD ? 1 : 0)
      }
      respawn() {
        const DD = this.sessionLive ? this.sendCmd() : null;
        return null !== DD && (CD = DD, cD = 0, (0, dC.c)(), (0, tD.Vf)(CD, cD));
        var CD, cD
      }
      bindCustomButtonKeys(DD) {
        this.customButtons.set(DD)
      }
      pressCustomButton(DD, CD) {
        const cD = this.sessionLive ? this.sendCmd() : null;
        return null !== cD && UI(cD, DD, CD)
      }
      padMove(DD, CD, cD, ID, pD, iD) {
        const fD = this.liveCmd();
        return null !== fD && (0, tD.sf)(fD, 0, DD, CD, cD, ID, pD, iD)
      }
      thirdPersonFor(DD) {
        const CD = this.liveCmd();
        return null !== CD && (0, tD.Hg)(CD, 0, null !== DD && void 0 !== DD ? DD : 1 / 0)
      }
      send(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== ID && YC(ID, cD ? yD.ed : 0, DD, (0, lD.g)(CD))
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
        const CD = () => DD.isStopped;
        this.stopped = CD, this.cmd = DD.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const cD = this.api.apiView;
        this.overflowGen = tD.s.eventOverflowGen(cD, 0), this.resyncOwed = 0 !== tD.s.eventOverflowMask(cD, 0), DD.setGameHost(this), DD.setEventWalker((DD => {
          this.api.walk(DD, this, CD)
        }))
      }
      watchPromptPick(DD) {
        this.promptWatch = DD, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : zI(tD.s.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? tD.Ic.None : tD.s.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : tD.s.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === DD || DD >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, DD, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(DD) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(DD)
      }
      netEvent(DD) {
        "connection" === DD.type ? DD.phase === yD.E.Activated && DD.conn !== this.activeConn && DD.conn > this.closedThrough ? (this.endSession(), this.activeConn = DD.conn, this.endGameGrants(), this.dropGameCamera()) : DD.phase !== yD.E.Left && DD.phase !== yD.E.Closed || DD.conn !== this.activeConn ? DD.phase === yD.E.Resumed && 0 !== this.activeConn && DD.conn > this.closedThrough && (this.activeConn = DD.conn) : this.closeGame() : DD.conn === this.activeConn && 0 !== DD.conn && (DD.Rf === oI.B ? this.gunHit(DD.payload) : DD.Rf === Wc.dc.EditItemCraftingRecipes || DD.Rf === oI._ ? this.items.touch() : (this.serverOptions(DD), this.gameMessage(DD)));
        const CD = this.options.onNetEvent;
        CD && this.guard((() => {
          CD(DD)
        }))
      }
      serverOptions(DD) {
        const CD = this.options.serverOptions,
          cD = CD ? this.decoded(sc, DD) : null;
        CD && cD && this.guard((() => {
          CD.applyNewClientOptions(cD)
        }))
      }
      gameMessage(DD) {
        let CD = null;
        try {
          CD = function(DD) {
            if ("message" !== DD.type || DD.Rf !== Wc.dc.GameCodeMessage || DD.payloadKind !== yD.ic.Msgpack) return null;
            const CD = (0, lD.c)(DD.payload);
            if (null === CD || "object" !== typeof CD || "string" !== typeof CD.messageType) throw new Error("GameCodeMessage without a messageType");
            return CD
          }(DD)
        } catch (cD) {
          this.sessionLive && this.onError(cD)
        }
        if (CD) {
          const {
            messageType: DD,
            data: cD
          } = CD;
          if ((0, qD.e)(DD)) return void this.guard((() => {
            (0, qD.b)(DD, cD)
          }));
          "freeCamPerms" === DD && this.freeCam.setGame(cD) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (CD => {
            CD.onReceivedMessageFromServer(DD, cD)
          }))
        }
      }
      decoded(DD, CD) {
        try {
          return DD(CD)
        } catch (cD) {
          return this.onError(cD), null
        }
      }
      setClientFreeCameraGrant(DD, CD) {
        this.freeCam.setClient(DD, CD), this.writeFreeCam()
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
        const CD = this.highlight;
        this.highlightOwed = null === CD ? !(0, tD._e)(DD, 0, KI, KI, 0) : !(0, tD._e)(DD, 0, CD.pos, CD.normal, 1)
      }
      localPlayerBound(DD) {
        var CD, cD;
        if (0 === this.activeConn || this.sessionLive && DD === this.boundId) return;
        const ID = this.sessionLive;
        let pD, iD, fD, bD;
        this.endSession(), ID && this.restartGameCamera();
        try {
          var QD;
          this.session = null;
          const DD = this.options.sessionInfo(this.activeConn);
          if (this.session = DD, !DD) return;
          pD = DD.gameNameWithVariation, iD = null !== (QD = (0, UD.Qb)(pD)) && void 0 !== QD ? QD : void 0, fD = (0, xD.p)(DD.lobbyName), bD = (0, xD.N)(DD.lobbyName)
        } catch (ND) {
          return void this.onError(ND)
        }
        const wD = {
          localPlayerId: String(DD)
        };
        let SD = {},
          BD = {};
        try {
          var yD, MD;
          SD = null !== (yD = null === (MD = this.options.gameFactory((0, UD.Vb)(pD))) || void 0 === MD ? void 0 : MD(bD, fD, iD, wD)) && void 0 !== yD ? yD : {}
        } catch (ND) {
          this.Nt(ND)
        }
        try {
          var tD, ZD;
          BD = {
            ...null === (tD = (ZD = this.options).defaultPlugins) || void 0 === tD ? void 0 : tD.call(ZD, bD, fD, iD, wD),
            ...SD.plugins
          }
        } catch (ND) {
          this.Nt(ND)
        }
        const oD = [SD, ...Object.values(BD)];
        this.owners = oD, this.tickers = oD.filter((DD => void 0 !== DD.wy)), this.renderers = oD.filter((DD => void 0 !== DD.onAfterRender)), this.receivers = oD.filter((DD => void 0 !== DD.onReceivedMessageFromServer)), this.writeAltVeto(oD), this.writeHooks(oD), this.writePublicLobby(bD), this.writeLocalDbId(null !== (CD = null === (cD = this.session) || void 0 === cD ? void 0 : cD.playerDbId) && void 0 !== CD ? CD : null), this.boundId = DD, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(oD, (DD => {
          var CD;
          null === (CD = DD.onCreate) || void 0 === CD || CD.call(DD, this.clientApi)
        }));
        const vD = this.generation;
        setTimeout((() => {
          vD === this.generation && !0 === this.tables.getClientOption("creative") && wI(this.tables)
        }), 0)
      }
      chunkSlot(DD, CD, cD, ID, pD, iD) {
        this.chunks.apply(DD, CD, cD, ID, pD, iD)
      }
      entityAdded(DD) {
        var CD;
        this.entityInfo.stale(DD), null === (CD = this.options.replayEntities) || void 0 === CD || CD.entityAdded(DD)
      }
      entityInfoChanged(DD) {
        var CD;
        this.entityInfo.stale(DD), null === (CD = this.options.replayEntities) || void 0 === CD || CD.entityInfoChanged(DD)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const DD = performance.now();
          this.round(this.tickers, jI), (0, CI.e)(performance.now() - DD)
        }
      }
      afterWalk(DD) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const CD = this.options.replayEntities;
        CD && this.guard((() => {
          this.entityInfoWatch.want(kc, CD.wantsWatch), CD.flush(this.entityInfoWatch.on)
        }));
        const cD = (0, CI.i)(DD, tD.s.frameMs(this.api.apiView, 0));
        if (null !== cD) {
          const DD = this.renderFrame;
          this.guard((() => {
            (0, ec.b)().turnDamageIndicators(DD.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(cD)
          })), this.round(this.renderers, (CD => {
            CD.onAfterRender(cD, DD)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== cD)
        } catch (pD) {
          this.Nt(pD)
        }
        this.showZoom(), this.items.flush(this.Nt), this.writePromptWatch(), this.writeCustomButtons();
        const ID = this.ticks;
        this.ticks = 0, (0, CI.h)(ID, DD, cD, this.Nt)
      }
      entityRemoved(DD) {
        this.live.despawned(DD), this.entityInfo.removed(DD)
      }
      ackEventOverflow() {
        const DD = this.api.apiView,
          CD = tD.s.eventOverflowGen(DD, 0),
          cD = CD - this.overflowGen >>> 0;
        if (0 === cD && !this.resyncOwed) return;
        this.overflowGen = CD;
        const ID = tD.s.eventOverflowMask(DD, 0),
          pD = this.cmd;
        0 === ID || null === pD || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, tD.Je)(pD, 0, ID);
        const iD = this.options.onEventOverflow;
        0 !== cD && iD && this.guard((() => {
          iD(ID, cD)
        }))
      }
      gameCall(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        if (DD === tD.uc.Director) try {
          return this.scriptedCamera.call(CD, cD, ID, pD, iD, fD)
        } catch (wD) {
          return this.Nt(wD), tD.wb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return DD === tD.uc.AltVeto ? tD.l.Allow : 0;
        try {
          return this.callGames(DD, CD, cD, ID, pD, iD, fD, bD)
        } catch (wD) {
          throw (0, MD.j)(wD) && (this.fault = wD), wD
        }
      }
      takeFault() {
        const DD = this.fault;
        return this.fault = void 0, DD
      }
      callGames(DD, CD, cD, ID, pD, iD, fD, bD) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: QD
        } = this.options, wD = String(this.boundId);
        switch (DD) {
          case tD.uc.AltVeto:
          case tD.uc.AltAction: {
            const bD = 0 !== fD,
              [SD, BD, yD] = bD ? [CD, cD, ID] : [void 0, void 0, void 0],
              MD = bD ? QD.nameOfId(pD) : "Air",
              ZD = zI(iD);
            if (DD === tD.uc.AltAction) return this.first((DD => {
              var CD;
              return null === (CD = DD.onPlayerAltAction) || void 0 === CD ? void 0 : CD.call(DD, wD, SD, BD, yD, MD, ZD)
            })), 0;
            const oD = this.first((DD => {
              var CD;
              return null === (CD = DD.onPlayerAttemptAltAction) || void 0 === CD ? void 0 : CD.call(DD, wD, SD, BD, yD, MD, ZD)
            }));
            return "preventAction" === oD ? tD.l.Prevent : "preventPlacement" === oD ? tD.l.PreventPlacement : tD.l.Allow
          }
          case tD.uc.Click: {
            const DD = bD,
              SD = 0 !== (DD & tD.Z.Alt),
              BD = 0 !== (DD & tD.Z.HasPos),
              yD = BD ? QD.nameOfId(pD) : "Air",
              [MD, ZD, oD] = BD ? [CD, cD, ID] : [null, null, null],
              vD = zI(iD),
              ND = 0 !== (DD & tD.Z.Up),
              gD = zI(fD);
            if (0 === (DD & tD.Z.AttackOnly) && this.first((DD => {
                var CD, cD;
                return ND ? null === (CD = DD.onPlayerClickUp) || void 0 === CD ? void 0 : CD.call(DD, wD, SD, MD, ZD, oD, yD, vD) : null === (cD = DD.onPlayerClick) || void 0 === cD ? void 0 : cD.call(DD, wD, SD, MD, ZD, oD, yD, vD)
              })), !ND && !SD && null !== gD) {
              const DD = this.clientApi.getPositionView(gD),
                CD = DD ? [DD[0], DD[1], DD[2]] : [0, 0, 0];
              this.first((DD => {
                var cD;
                return null === (cD = DD.onPlayerAttackEntity) || void 0 === cD ? void 0 : cD.call(DD, wD, gD, CD)
              }))
            }
            return 0
          }
          case tD.uc.ChangeBlock: {
            const DD = QD.nameOfId(pD),
              fD = QD.nameOfId(iD);
            return this.first((pD => {
              var iD;
              return null === (iD = pD.onPlayerChangeBlock) || void 0 === iD ? void 0 : iD.call(pD, wD, CD, cD, ID, DD, fD)
            })), 0
          }
          case tD.uc.DropItem: {
            const DD = QD.nameOfId(CD);
            return this.first((CD => {
              var pD;
              return null === (pD = CD.onPlayerDropItem) || void 0 === pD ? void 0 : pD.call(CD, wD, DD, cD, ID)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${DD}`)), 0
        }
      }
      changeBlockFail(DD, CD, cD, ID, pD, iD, fD) {
        const bD = pD === tD.ld ? null : xI.decode(this.api.eventBytes(iD, Math.min(pD, fD)));
        this.failures.push({
          Ti: [DD, CD, cD],
          Gi: ID,
          Ri: bD
        })
      }
      changeBlockFailEnd() {
        const DD = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (CD => {
          var cD;
          null === (cD = CD.onChangeBlockFail) || void 0 === cD || cD.call(CD, DD)
        })), this.Uo("EditBoard", {
          pos: null
        }), this.Uo("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(DD, CD, cD, ID, pD, iD) {
        DD === tD.Oc.ChestOpened ? this.items.chestOpened(cD, ID, pD) : DD !== tD.Oc.Synced && DD !== tD.Oc.ChestClosed && DD !== tD.Oc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(DD, CD, cD, ID) {
            switch (DD) {
              case tD.Oc.Synced:
                fD.i.Uo("syncedInvenFromServer");
                break;
              case tD.Oc.ChestOpened:
              case tD.Oc.ChestClosed:
                fD.i.Uo("chestToggleFromServer", DD === tD.Oc.ChestOpened, !0);
                break;
              case tD.Oc.ChestRefreshed:
                fD.i.Uo("chestRefreshedFromServer");
                break;
              case tD.Oc.EnchantingTable:
                fD.i.Uo("enchantingTable", {
                  HS: ID,
                  position: cD
                });
                break;
              case tD.Oc.HotbarRequest:
                fD.i.Uo("setSelectedInventorySlotI", CD, !0);
                break;
              case tD.Oc.Scrolled:
                fD.i.Uo("ScrollInventorySlot", CD);
                break;
              case tD.Oc.NumberKey:
                fD.i.Uo("numkeyPressed", CD + 1);
                break;
              case tD.Oc.DropRequested:
                fD.i.Uo("DropInvenItem", 0 !== CD);
                break;
              default:
                throw new MD.e(`InventoryEvent of no kind: what ${DD}`)
            }
          }(DD, CD, [cD, ID, pD], iD)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(DD, CD, cD, ID) {
        this.Uo("shotPlayer", {
          playerId: String(DD),
          damage: CD,
          wasCrit: 0 !== ID,
          distance: cD
        })
      }
      localHurt(DD, CD) {
        this.Uo("closeShopOnDamaged", null), this.guard((() => {
          fD.i.Uo("damagedByOtherPlayer", {
            Wc: null,
            direction: Number.isNaN(CD) ? null : CD,
            Np: DD
          })
        }))
      }
      attackHit(DD, CD, cD, ID, pD) {
        this.guard((() => {
          fD.i.Uo("yourAttackHit", {
            rC: ID,
            screenPos: this.renderFrame.projectDirectionToScreenPos([DD, CD, cD]),
            hitSelf: pD
          })
        }))
      }
      physicsType(DD) {
        this.Uo("PlayerPhysicsTypeUpdate", DD)
      }
      vehicleEffect(DD, CD, cD, ID, pD) {
        this.guard((() => {
          DD === yD.td.UPDATE ? (0, KD.h)(CD, {
            icon: cD,
            level: ID,
            displayName: null,
            durationMs: pD
          }) : JD.b.remove(CD)
        }))
      }
      zoomChanged(DD) {
        this.zoom = DD, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Uo("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const DD = this.scriptedCamera.holdsView();
        !this.zoomUnshown || DD && this.zoomHeld || (this.zoomUnshown = !1, this.Uo("cameraZoomSet", this.zoom)), this.zoomHeld = DD
      }
      gunHit(DD) {
        this.guard((() => {
          const {
            Wc: CD,
            sc: cD
          } = (0, ZI.e)(oI.B, DD);
          fD.i.Uo("damagedByOtherPlayer", {
            Wc: CD,
            direction: cD
          })
        }))
      }
      uiEvent(DD, CD, cD, ID, pD, iD, fD, bD) {
        this.guard((() => {
          uc(DD, CD, [cD, ID, pD], iD, this.items, this.options.tables, (() => xI.decode(this.api.eventBytes(fD, bD))))
        }))
      }
      writeAltVeto(DD) {
        const CD = this.cmd;
        if (!CD) return;
        let cD;
        try {
          cD = function(DD, CD) {
            const cD = new Set;
            let ID = !1;
            for (const pD of DD)
              if (pD.onPlayerAttemptAltAction) {
                if (ID = !0, !pD.altVetoBlocks) return {
                  mode: tD.xe.All,
                  roots: []
                };
                for (const DD of pD.altVetoBlocks) cD.add(CD.getMetaInfo(DD).rootId)
              } return ID ? cD.size > tD.bd ? {
              mode: tD.xe.All,
              roots: []
            } : {
              mode: tD.xe.Filter,
              roots: [...cD]
            } : {
              mode: tD.xe.Off,
              roots: []
            }
          }(DD, this.options.tables)
        } catch (pD) {
          this.onError(pD), cD = {
            mode: tD.xe.All,
            roots: []
          }
        }
        if (cD.mode === tD.xe.Off && !this.vetoSet) return;
        const ID = new Uint8Array(new Uint32Array(cD.roots).buffer);
        (0, tD.bg)(CD, 0, cD.mode, cD.roots.length, ID) ? this.vetoSet = cD.mode !== tD.xe.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(DD) {
        const CD = this.cmd;
        if (!CD) return;
        const cD = function(DD) {
          let CD = 0;
          for (const cD of DD) cD.onPlayerAltAction && (CD |= 1 << tD.uc.AltAction), (cD.onPlayerClick || cD.onPlayerClickUp || cD.onPlayerAttackEntity) && (CD |= 1 << tD.uc.Click), cD.onPlayerChangeBlock && (CD |= 1 << tD.uc.ChangeBlock), cD.onPlayerDropItem && (CD |= 1 << tD.uc.DropItem);
          return CD
        }(DD);
        (0 !== cD || this.hooksSet) && ((0, tD.lg)(CD, 0, cD) ? this.hooksSet = 0 !== cD : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const DD = this.cmd;
        DD && !this.stopped() && this.customButtons.write(DD)
      }
      writePromptWatch() {
        const DD = this.cmd,
          CD = this.promptWatch;
        CD !== this.promptWatchSent && DD && !this.stopped() && (0, tD.Lg)(DD, 0, aI[CD]) && (this.promptWatchSent = CD)
      }
      writePublicLobby(DD) {
        const CD = this.cmd;
        CD && DD !== this.writtenPublicLobby && ((0, tD.xg)(CD, 0, DD ? 1 : 0) ? this.writtenPublicLobby = DD : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(DD) {
        const CD = this.cmd;
        CD && ((0, tD.mg)(CD, 0, null === DD ? 0 : 1, null === DD ? JI : qI.encode(DD)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(DD) {
        const CD = this.generation;
        for (const ID of this.owners) {
          if (CD !== this.generation) break;
          try {
            const CD = DD(ID);
            if (void 0 !== CD) return CD
          } catch (cD) {
            this.Nt(cD)
          }
        }
      }
      Uo(DD, CD) {
        this.guard((() => {
          fD.i.Uo(DD, CD)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (DD) {
          this.Nt(DD)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (DD) {
          this.Nt(DD)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const DD = this.owners;
        let CD;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (ID) {
          CD = ID
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (ID) {
          CD ??= ID
        }
        this.round(DD, lI, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (ID) {
          CD ??= ID
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (ID) {
          CD ??= ID
        }
        const cD = this.options.onSessionEnd;
        if (cD) try {
          cD()
        } catch (ID) {
          this.onError(ID)
        }
        void 0 !== CD && this.Nt(CD)
      }
      round(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = this.generation;
        for (const iD of DD) {
          if (ID !== this.generation) break;
          try {
            CD(iD)
          } catch (pD) {
            cD ? this.onError(pD) : this.Nt(pD)
          }
        }
      }
      guard(DD) {
        try {
          DD()
        } catch (CD) {
          this.Nt(CD)
        }
      }
    }

    function zI(DD) {
      return DD === tD.md ? null : String(DD)
    }

    function jI(DD) {
      DD.wy(yD.kd)
    }

    function lI(DD) {
      var CD;
      null === (CD = DD.onClose) || void 0 === CD || CD.call(DD)
    }

    function LI(DD, CD) {
      DD.watch((() => {
        const cD = function(DD) {
          let CD = 0;
          const cD = Math.min(cI, DD.length);
          for (let pD = 0; pD < cD; pD++) {
            var ID;
            const cD = null === (ID = DD.slot(pD)) || void 0 === ID ? void 0 : ID.typeObj,
              iD = cD ? (0, DI.gunTypeOf)(cD.id) : void 0;
            void 0 !== iD && (CD |= 1 << gC[iD])
          }
          return CD
        }(DD);
        0 !== cD && (CD.preload(cD), CD.preload(1 << XC))
      }))
    }
    var TI = cD(4621),
      GI = cD(36122);

    function RI(DD) {
      const CD = new TI.Howl({
          ...(0, GI.g)(DD),
          pool: 15,
          preload: !1
        }),
        cD = CD.load.bind(CD);
      return CD.load = () => (CD._preload = !0, cD()), CD
    }

    function kI(DD, CD, cD) {
      const ID = DD.listener;
      if (ID.positionX) dI(ID.positionX, CD, cD, 0), dI(ID.positionY, CD, cD, 1), dI(ID.positionZ, CD, cD, 2), dI(ID.forwardX, CD, cD, 3), dI(ID.forwardY, CD, cD, 4), dI(ID.forwardZ, CD, cD, 5), dI(ID.upX, CD, cD, 6), dI(ID.upY, CD, cD, 7), dI(ID.upZ, CD, cD, 8);
      else {
        let DD = !1;
        for (let ID = 0; ID < 9; ID++) DD ||= CD[ID] !== cD[ID];
        DD && (ID.setPosition(CD[0], CD[1], CD[2]), ID.setOrientation(CD[3], CD[4], CD[5], CD[6], CD[7], CD[8]), cD.set(CD))
      }
    }

    function dI(DD, CD, cD, ID) {
      CD[ID] !== cD[ID] && (DD.value = CD[ID], cD[ID] = CD[ID])
    }
    class YI {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(DD) {
        this.pose.set(DD);
        const CD = TI.Howler.ctx;
        return !!CD && (CD !== this.watchedCtx && (this.watchedCtx = CD, this.written.fill(Number.NaN), CD.addEventListener("statechange", (() => {
          "running" === CD.state && kI(CD, this.pose, this.written)
        }))), "running" === CD.state && kI(CD, DD, this.written), !0)
      }
    }
    var WI = cD(35970),
      sI = cD(38524);
    let EI = null,
      eI = null;

    function uI() {
      return null === EI && (EI = document.createElement("div"), EI.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(EI)), EI
    }

    function hI() {
      return eI ??= new sI.b(new WI.e(uI)), eI
    }

    function rI() {
      var DD;
      null === (DD = eI) || void 0 === DD || DD.clear(), AI(null)
    }

    function AI(DD) {
      ID.d.get("scriptedCameraFacing") !== DD && ID.d.set({
        scriptedCameraFacing: DD
      })
    }
    var FI = cD(9237),
      Dp = cD(9189),
      Cp = cD(38540),
      cp = cD(39815),
      Ip = cD(3083);
    const pp = Object.entries(tD.rc).reduce(((DD, CD) => {
      let [cD, ID] = CD;
      return DD[ID] = cD, DD
    }), []);

    function ip(DD, CD) {
      var cD;
      return 0 !== ((null !== (cD = DD.itemFlags[CD]) && void 0 !== cD ? cD : 0) & tD.Sc.Stackable)
    }
    const fp = /^(0|[1-9][0-9]*)$/,
      bp = {
        displayName: (DD, CD) => (0, DI.displayNameOf)(CD),
        description: (DD, CD) => (0, DI.descriptionOf)(CD),
        type: (DD, CD) => (0, DI.itemTypeOf)(CD),
        clipSize: (DD, CD) => (0, DI.clipSizeOf)(CD),
        armourReduction: (DD, CD) => (0, DI.armourReductionOf)(CD),
        scopeType: (DD, CD) => (0, DI.scopeTypeOf)(CD),
        stackable: ip,
        harvestType: (DD, CD) => pp[DD.blockHarvestTypes[CD]],
        harvestLevel: (DD, CD) => {
          const cD = DD.blockHarvestLevels[CD];
          return cD === tD.Yc ? void 0 : cD
        },
        harvests: (DD, CD) => {
          var cD;
          const ID = null !== (cD = DD.itemHarvests[CD]) && void 0 !== cD ? cD : 0;
          return 0 !== ID ? pp[ID] : void 0 === (0, DI.harvestsNullLevelOf)(CD) ? void 0 : null
        },
        level: (DD, CD) => {
          var cD, ID;
          const pD = null !== (cD = DD.itemLevels[CD]) && void 0 !== cD ? cD : tD.Yc;
          return pD !== tD.Yc ? pD : null !== (ID = (0, DI.harvestsNullLevelOf)(CD)) && void 0 !== ID ? ID : void 0
        }
      };

    function Qp(DD, CD, cD) {
      return Sp(new Uint8Array(Math.floor(DD.length / CD)), DD, CD, cD)
    }

    function wp(DD, CD, cD) {
      return Sp(new Uint16Array(Math.floor(DD.length / CD)), DD, CD, cD)
    }

    function Sp(DD, CD, cD, ID) {
      const pD = new DataView(CD.buffer, CD.byteOffset, CD.byteLength);
      for (let iD = 0; iD < DD.length; iD++) DD[iD] = ID(pD, iD * cD);
      return DD
    }
    class Bp {
      constructor(DD, CD) {
        this.options = CD, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = DD => {
          const CD = this.idOf(DD);
          if (void 0 === CD) throw new Error(`No item is named ${DD}, an item's root`);
          return CD
        };
        const cD = CD => {
            const cD = CD();
            return new Uint8Array(DD.memory().buffer, DD.scratch(), cD).slice()
          },
          ID = (new TextDecoder).decode(cD((() => DD.queries.itemNames()))).split("\n"),
          pD = cD((() => DD.queries.blockProps())),
          iD = cD((() => DD.queries.itemProps()));
        this.props = {
          blockFlags: Qp(pD, tD.z.BYTES, tD.z.flags),
          blockHarvestTypes: Qp(pD, tD.z.BYTES, tD.z.harvestType),
          blockHarvestLevels: Qp(pD, tD.z.BYTES, tD.z.harvestLevel),
          blockAttachedTops: wp(pD, tD.z.BYTES, tD.z.attachedTop),
          itemFlags: Qp(iD, tD.Uc.BYTES, tD.Uc.flags),
          itemHarvests: Qp(iD, tD.Uc.BYTES, tD.Uc.harvests),
          itemLevels: Qp(iD, tD.Uc.BYTES, tD.Uc.level)
        }, (0, Ip.m)(Object.freeze(ID)), (0, cp.e)()
      }
      idOf(DD) {
        if ("number" === typeof DD) return void 0 === (0, Ip.h)(DD) ? void 0 : DD;
        const CD = (0, Ip.e)(DD);
        return void 0 === CD && fp.test(DD) ? void 0 === (0, Ip.h)(+DD) ? void 0 : +DD : CD
      }
      getMetaInfo(DD) {
        if (!DD || DD === FI.c) return FI.g;
        const CD = this.idOf(DD);
        if (void 0 === CD) throw new Error(`Item ${DD} not found in registry`);
        return this.metaOf(CD)
      }
      blockRootId(DD) {
        return 0 !== DD && void 0 !== (0, Ip.h)(DD) ? this.metaOf(DD).rootId : DD
      }
      metaOf(DD) {
        return this.metas[DD] ??= (0, Dp.i)((0, Ip.h)(DD), DD, this.rootIdOf, (0, DI.rootMetaDescOf)(DD))
      }
      getItemId(DD) {
        if (!DD || DD === FI.c) return 0;
        const CD = this.idOf(DD);
        if (void 0 === CD) throw new Error(`Invalid block name. You sent ${DD}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return CD
      }
      getItemName(DD) {
        if (!DD || DD === FI.c) return FI.c;
        const CD = this.idOf(DD);
        if (void 0 === CD) throw new Error(`Item ${DD} not found in registry`);
        return (0, Ip.h)(CD)
      }
      blockNameToBlockId(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (DD === FI.c) return 0;
        let cD = this.idOf(DD);
        if (void 0 === cD || !this.isBlockId(cD)) {
          const CD = DD.indexOf("|"),
            ID = CD > 0 ? (0, Ip.e)(DD.slice(0, CD)) : void 0;
          cD = void 0 !== ID && this.isBlockId(ID) && (0, DI.rootMetaDescOf)(ID) === DD ? ID : void 0
        }
        if (void 0 !== cD) return cD;
        if (!CD) throw new Error(`Invalid block name. You sent ${DD}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(DD) {
        return DD > 0 && DD < this.props.blockFlags.length
      }
      nameOfId(DD) {
        return 0 !== DD && (0, Ip.h)(DD) || FI.c
      }
      itemType(DD) {
        const CD = DD ? this.idOf(DD) : void 0;
        if (!CD) return null;
        let cD = this.types.get(CD);
        return void 0 === cD && (cD = Object.freeze({
          id: CD,
          name: (0, Ip.h)(CD),
          meta: this.getMetaInfo(CD),
          stackable: ip(this.props, CD),
          type: (0, DI.itemTypeNameOf)(CD),
          clipSize: (0, DI.clipSizeOf)(CD),
          scopeType: (0, DI.scopeTypeOf)(CD),
          showsAimingUi: (0, DI.showsAimingUi)(CD)
        }), this.types.set(CD, cD)), cD
      }
      getItemStat(DD, CD) {
        if (Cp.b.has(CD)) {
          const cD = "minChargeStateToUse" === CD ? this.getMetaInfo(DD).rootName : this.getItemName(DD),
            ID = this.options.get((0, Cp.d)(cD, CD));
          if (null !== ID && void 0 !== ID) return ID
        }
        return this.defaultStat(DD, CD, this.statOf(CD))
      }
      getDisplayName(DD) {
        return this.getItemStat(DD, "displayName")
      }
      getDefaultItemStat(DD, CD) {
        return this.defaultStat(DD, CD, this.statOf(CD))
      }
      statOf(DD) {
        const CD = bp[DD];
        return void 0 === CD && function(DD, CD) {
          throw new Error(`ClientApi.${DD} is not available yet in the wasm client (${CD})`)
        }(`getItemStat("${DD}")`, `a table of the stat: the wasm client answers ${Object.keys(bp).join(", ")}`), CD
      }
      defaultStat(DD, CD, cD) {
        const ID = this.idOf(DD),
          pD = void 0 === ID ? void 0 : cD(this.props, ID);
        return null !== pD && void 0 !== pD || "displayName" !== CD ? pD : this.getItemName(DD)
      }
      getClientOption(DD) {
        return this.options.get(DD)
      }
      getGunStats(DD) {
        return this.getClientOption(`${DD}GunStats`)
      }
      watchClientOption(DD, CD) {
        return this.options.subscribe(DD, CD)
      }
      isSolidBlockId(DD) {
        var CD;
        return 0 !== ((null !== (CD = this.props.blockFlags[DD]) && void 0 !== CD ? CD : 0) & tD.y.Solid)
      }
      isStackableId(DD) {
        return ip(this.props, DD)
      }
      isFluidBlockId(DD) {
        var CD;
        return 0 !== ((null !== (CD = this.props.blockFlags[DD]) && void 0 !== CD ? CD : 0) & tD.y.Fluid)
      }
      canPlaceOverBlockId(DD) {
        var CD;
        return 0 !== ((null !== (CD = this.props.blockFlags[DD]) && void 0 !== CD ? CD : 0) & tD.y.PlaceOver)
      }
      attachedTopOf(DD) {
        var CD;
        return null !== (CD = this.props.blockAttachedTops[DD]) && void 0 !== CD ? CD : 0
      }
      isDroplessBlockId(DD) {
        return (0, DI.dropsNothing)(DD)
      }
    }

    function yp(DD, CD) {
      const cD = new Map;
      return (ID, pD) => {
        const iD = CD.idOf(ID),
          fD = void 0 === iD ? null : (ID => {
            let pD = cD.get(ID);
            if (void 0 === pD) {
              const iD = DD.queries.salvageRecipe(ID),
                fD = new DataView(DD.memory().buffer, DD.scratch(), iD),
                bD = [];
              for (let DD = 0; DD + tD.je.BYTES <= iD; DD += tD.je.BYTES) bD.push(Object.freeze({
                item: CD.nameOfId(tD.je.item(fD, DD)),
                amt: tD.je.amount(fD, DD)
              }));
              pD = 0 === bD.length ? null : Object.freeze(bD), cD.set(ID, pD)
            }
            return pD
          })(iD);
        if (null === fD || void 0 === pD) return fD;
        const bD = pD <= 0 ? 1 : pD;
        return fD.map((DD => {
          let {
            item: CD,
            amt: cD
          } = DD;
          return {
            item: CD,
            amt: cD * bD
          }
        }))
      }
    }
    var Mp = cD(40003),
      tp = cD(36324),
      Zp = cD(36307),
      op = cD(36359),
      vp = cD(35908),
      Np = cD(39768),
      gp = cD(41735);
    const Xp = -1,
      mp = new Uint8Array(0),
      np = new TextEncoder;

    function Op(DD) {
      if (null === DD) return null;
      const CD = np.encode(DD);
      return CD.byteLength < yD.Ac ? CD : CD.subarray(0, yD.Ac - 1)
    }
    class Pp {
      constructor(DD) {
        this.deps = DD, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Xp, this.keyframesSettled = !1, this.reloadFrom = Xp
      }
      reloadKeyframes() {
        var DD, CD;
        this.keyframesVersion = Xp, this.reloadFrom = null !== (DD = null === (CD = this.view()) || void 0 === CD ? void 0 : CD.version) && void 0 !== DD ? DD : Xp
      }
      setPlayback(DD) {
        const CD = 1 === this.deps.core.CpD(DD);
        return CD && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Xp, this.reloadFrom = Xp), CD
      }
      async open(DD) {
        const CD = await this.deps.replay.open(DD);
        return "opening" === CD && (this.reloadKeyframes(), this.deps.recorder.prefetch()), CD
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(DD)), CD)
      }
      setSpeed(DD) {
        this.deps.replay.setSpeed(DD)
      }
      setCameraMode(DD) {
        this.deps.replay.setCameraMode(gp.b.indexOf(DD))
      }
      view() {
        var DD;
        const CD = tD.s.replayViewPtr(this.deps.apiView(), 0);
        if (0 === CD) return this.lastView = null, null;
        const cD = new DataView(this.deps.buffer(), CD, tD.fe.BYTES),
          ID = tD.fe.version(cD, 0),
          pD = this.lastView;
        if (null !== pD && pD.version === ID) return pD;
        const iD = tD.fe.markIn(cD, 0),
          fD = {
            version: ID,
            state: tD.fe.state(cD, 0),
            cameraMode: null !== (DD = gp.b[tD.fe.cameraMode(cD, 0)]) && void 0 !== DD ? DD : "recording",
            wy: tD.fe.wy(cD, 0),
            totalTicks: tD.fe.totalTicks(cD, 0),
            speed: tD.fe.speed(cD, 0),
            mark: iD === tD.ce ? null : {
              inTick: iD,
              outTick: tD.fe.markOut(cD, 0)
            },
            editVersion: tD.fe.editVersion(cD, 0)
          };
        return this.lastView = fD, fD
      }
      keyframes() {
        const DD = this.view();
        if (null === DD) return [];
        DD.version !== this.reloadFrom && (this.reloadFrom = Xp);
        const CD = this.reloadFrom === Xp && DD.state !== yD.ad.Cropping && DD.state !== yD.ad.None,
          cD = CD ? DD.editVersion : DD.version;
        if (cD === this.keyframesVersion && CD === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: ID
        } = this.deps, pD = ID.cpD(), iD = ID.Lo(), fD = [];
        if (0 !== iD && pD > 0) {
          const DD = new DataView(this.deps.buffer(), iD, pD * yD.qc);
          for (let CD = 0; CD < pD; CD++) {
            const cD = CD * yD.qc,
              ID = CD => DD.getFloat64(cD + CD, !0);
            fD.push({
              wy: DD.getUint32(cD + yD.yc, !0),
              position: [ID(yD.wc), ID(yD.wc + 8), ID(yD.wc + 16)],
              direction: [ID(yD.sc), ID(yD.sc + 8), ID(yD.sc + 16)],
              easing: [ID(yD.vc), ID(yD.vc + 8), ID(yD.vc + 16), ID(yD.vc + 24)]
            })
          }
        }
        return this.keyframesVersion = cD, this.keyframesSettled = CD, this.lastKeyframes = fD, fD
      }
      addKeyframe() {
        const DD = this.deps.apiView(),
          CD = [tD.s.eye(DD, 0, 0), tD.s.eye(DD, 0, 1), tD.s.eye(DD, 0, 2)];
        return this.deps.replay.addKeyframe(CD, function(DD, CD) {
          const cD = Math.cos(CD);
          return [cD * Math.sin(DD), -Math.sin(CD), cD * Math.cos(DD)]
        }(tD.s.heading(DD, 0), tD.s.pitch(DD, 0)))
      }
      setKeyframe(DD) {
        return this.deps.replay.setKeyframe(DD.wy, Float64Array.from([...DD.position, ...DD.direction, ...DD.easing]))
      }
      moveKeyframe(DD, CD) {
        return this.deps.replay.moveKeyframe(DD, CD)
      }
      deleteKeyframes(DD, CD) {
        return this.deps.replay.deleteKeyframes(DD, CD)
      }
      setMark(DD) {
        var CD, cD;
        return this.deps.replay.setMark(null !== (CD = null === DD || void 0 === DD ? void 0 : DD.inTick) && void 0 !== CD ? CD : -1, null !== (cD = null === DD || void 0 === DD ? void 0 : DD.outTick) && void 0 !== cD ? cD : -1)
      }
      crop(DD, CD) {
        const cD = this.deps.replay.crop(DD, CD);
        return cD && this.reloadKeyframes(), cD
      }
      save(DD) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(DD)
      }
      recorderControl(DD) {
        this.deps.recorder.control(DD)
      }
      recorderPrefs(DD, CD) {
        this.deps.recorder.prefs(DD, CD)
      }
      recorderOption(DD, CD) {
        const cD = this.deps.cmd();
        return null !== cD && (0, tD.Pf)(cD, 0, DD, null === CD ? mp : np.encode(CD))
      }
      recordFlyingText(DD, CD, cD, ID) {
        const pD = this.deps.cmd(),
          iD = Math.max(0, Math.min(4294967295, Math.round(ID)));
        return null !== pD && (0, tD.Mf)(pD, 0, CD, cD, iD, np.encode(DD))
      }
      recordPlayerKilled(DD, CD, cD, ID) {
        const pD = this.deps.cmd();
        return null !== pD && (0, tD.Sf)(pD, 0, DD, CD, Math.max(0, cD), np.encode(ID))
      }
      recordKillfeed(DD, CD, cD) {
        var ID, pD;
        const iD = this.deps.cmd(),
          fD = function(DD) {
            const CD = DD.reduce(((DD, CD) => {
                var cD;
                return DD + Wc.lb + (null !== (cD = null === CD || void 0 === CD ? void 0 : CD.byteLength) && void 0 !== cD ? cD : 0)
              }), 0),
              cD = new Uint8Array(CD),
              ID = new DataView(cD.buffer);
            let pD = 0;
            for (const fD of DD) {
              var iD;
              ID.setUint16(pD, null !== (iD = null === fD || void 0 === fD ? void 0 : fD.byteLength) && void 0 !== iD ? iD : yD.Ac, !0), pD += Wc.lb, null !== fD && (cD.set(fD, pD), pD += fD.byteLength)
            }
            return cD
          }([Op(DD.name), Op(DD.colour), Op(CD.name), Op(CD.colour), Op(cD)]);
        return null !== iD && (0, tD.Nf)(iD, 0, null !== (ID = DD.id) && void 0 !== ID ? ID : tD.nd, null !== (pD = CD.id) && void 0 !== pD ? pD : tD.nd, fD)
      }
      recorderSession(DD, CD) {
        this.deps.recorder.session({
          session: CD,
          lobbyType: DD.lobbyType,
          game: DD.gameNameWithVariation,
          lobby: DD.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.IpD()
      }
      filePartDone(DD, CD) {
        this.deps.recorder.filePartDone(DD, CD)
      }
      fileDone(DD) {
        this.deps.recorder.fileDone(DD)
      }
    }
    const Hp = -2147483648;
    class Up {
      constructor(DD) {
        var CD;
        this.deps = DD, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (CD = DD.now) && void 0 !== CD ? CD : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var DD, CD, cD;
        return null === (DD = null === (CD = (cD = this.deps).live) || void 0 === CD ? void 0 : CD.call(cD)) || void 0 === DD || DD
      }
      activated(DD) {
        var CD, cD;
        this.live && (this.viewerShown(!0 === (null === (CD = (cD = this.deps).viewerOpen) || void 0 === CD ? void 0 : CD.call(cD))), this.deps.client.recorderSession(DD, (0, gp.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var DD, CD;
        this.live && (this.state.recording || !0 !== (null === (DD = (CD = this.deps).viewerOpen) || void 0 === DD ? void 0 : DD.call(CD))) ? this.deps.client.recorderControl(yD.Nc.ToggleRecording) : this.deps.notify(op.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(yD.Nc.SaveClip) : this.deps.notify(op.c.clippingNotOn)
      }
      viewerShown(DD) {
        this.live && this.deps.client.recorderControl(DD ? yD.Nc.ViewerOpened : yD.Nc.ViewerClosed)
      }
      setPrefs(DD, CD) {
        this.live && this.deps.client.recorderPrefs(DD, CD)
      }
      setOption(DD, CD) {
        this.live && this.deps.client.recorderOption(DD, CD)
      }
      recordFlyingText(DD, CD, cD, ID) {
        this.live && this.deps.client.recordFlyingText(DD, CD, cD, ID)
      }
      recordPlayerKilled(DD, CD, cD, ID) {
        this.live && this.deps.client.recordPlayerKilled(DD, CD, cD, ID)
      }
      recordKillfeed(DD, CD, cD) {
        this.live && this.deps.client.recordKillfeed(DD, CD, cD)
      }
      wy() {
        let DD = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, DD = {
            ...DD,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const CD = Math.floor((this.now() - this.recordingSince) / 1e3);
          CD !== DD.seconds && (DD = {
            ...DD,
            seconds: CD
          })
        }
        this.set(DD)
      }
      onEvent(DD) {
        var CD, cD;
        const {
          notify: ID
        } = this.deps, pD = op.c;
        switch (DD.what) {
          case yD.Kc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), ID(pD.recordingStarted);
            break;
          case yD.Kc.RecordingStopped:
            this.stopRecording(), ID(pD.recordingStopped), this.saveState(yD.Uc.Recording, "saving");
            break;
          case yD.Kc.RecordingDiscarded:
            this.stopRecording(), ID(pD.recordingDiscarded);
            break;
          case yD.Kc.RecordingTurnedOff:
            this.stopRecording(), ID(pD.recordingTurnedOff);
            break;
          case yD.Kc.LimitReached:
            ID(pD.limitReached);
            break;
          case yD.Kc.ClipSaved:
            this.saveState(yD.Uc.Clip, "saving");
            break;
          case yD.Kc.ClipEmpty:
            ID(pD.clipEmpty);
            break;
          case yD.Kc.ClippingNotOn:
            ID(pD.clippingNotOn);
            break;
          case yD.Kc.Disallowed:
            ID(pD.disallowed);
            break;
          case yD.Kc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case yD.Kc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case yD.Kc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case yD.Kc.SaveBusy:
            null === (CD = (cD = this.deps).onSaveState) || void 0 === CD || CD.call(cD, DD.kind, "busy"), ID(pD.saveBusy);
            break;
          case yD.Kc.CloseViewerFirst:
            ID(pD.closeViewerFirst)
        }
      }
      fileReady(DD, CD) {
        this.deps.download(CD), this.saveState(DD, "done"), this.deps.notify(DD === yD.Uc.Clip ? op.c.clipSaved : op.c.recordingSaved)
      }
      failed(DD) {
        this.saveState(DD, "failed"), this.deps.notify(DD === yD.Uc.Clip ? op.c.clipFailed : op.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(DD, CD) {
        var cD, ID;
        null === (cD = (ID = this.deps).onSaveState) || void 0 === cD || cD.call(ID, DD, CD)
      }
      set(DD) {
        DD !== this.state && (this.state = DD, this.deps.onState(DD))
      }
    }
    const xp = new TextDecoder;

    function qp(DD, CD, cD, ID) {
      const pD = [];
      for (let iD = 0; iD < ID; iD++) {
        if (CD + Wc.lb > cD) return null;
        const ID = DD.getUint16(CD, !0);
        if (CD += Wc.lb, ID !== yD.Ac) {
          if (CD + ID > cD) return null;
          pD.push(xp.decode(new Uint8Array(DD.buffer, DD.byteOffset + CD, ID))), CD += ID
        } else pD.push(null)
      }
      return CD === cD ? pD : null
    }

    function Jp(DD, CD) {
      let cD = new DataView(new ArrayBuffer(0)),
        ID = !0;
      const pD = {
        replayFailed: (CD, cD) => {
          DD.replayFailed({
            reason: CD,
            code: cD
          })
        },
        replayOption: (CD, pD, iD, fD) => {
          const bD = function(DD, CD, cD, ID) {
            switch (CD) {
              case yD.Xc.Cleared:
                return 0 === ID ? null : void 0;
              case yD.Xc.Text:
                return xp.decode(new Uint8Array(DD.buffer, DD.byteOffset + cD, ID));
              case yD.Xc.Int:
                return ID === Int32Array.BYTES_PER_ELEMENT ? DD.getInt32(cD, !0) : void 0;
              case yD.Xc.Double:
                return ID === Float64Array.BYTES_PER_ELEMENT ? DD.getFloat64(cD, !0) : void 0;
              default:
                return
            }
          }(cD, pD, iD, fD);
          void 0 !== bD ? DD.replayOption({
            key: CD,
            value: bD
          }) : ID = !1
        },
        replayUiEvent: (CD, pD, iD, fD, bD, QD) => {
          const wD = function(DD, CD, cD, ID, pD, iD, fD) {
            const bD = iD + fD;
            switch (CD) {
              case yD.Yc.FlyingText: {
                const fD = qp(DD, iD, bD, 1);
                return null !== fD && null !== fD[0] ? {
                  what: CD,
                  ji: cD,
                  zi: ID,
                  angle: pD,
                  contentJson: fD[0]
                } : null
              }
              case yD.Yc.PlayerKilled: {
                const ID = qp(DD, iD, bD, 3);
                return ID ? {
                  what: CD,
                  killstreak: cD,
                  dead: ID[0],
                  killer: ID[1],
                  withItem: ID[2]
                } : null
              }
              case yD.Yc.Killfeed: {
                const cD = qp(DD, iD, bD, 7);
                return cD ? {
                  what: CD,
                  killerId: cD[0],
                  killerName: cD[1],
                  killerColour: cD[2],
                  victimId: cD[3],
                  victimName: cD[4],
                  victimColour: cD[5],
                  withItem: cD[6]
                } : null
              }
              default:
                return null
            }
          }(cD, CD, pD, iD, fD, bD, QD);
          null !== wD ? DD.replayUiEvent(wD) : ID = !1
        },
        replayFilePart: (cD, pD, iD, fD) => {
          const bD = CD();
          iD + fD > bD.byteLength ? ID = !1 : DD.filePart(cD, pD, new Uint8Array(bD, iD, fD).slice())
        },
        replayFileReady: (CD, cD, ID, pD) => {
          DD.fileReady({
            save: CD,
            kind: cD,
            parts: ID,
            bytes: pD
          })
        },
        recorderEvent: (CD, cD, ID) => {
          DD.recorderEvent({
            what: CD,
            kind: cD,
            save: ID
          })
        },
        replayOpened: (CD, ID, pD) => {
          DD.replayOpened(xp.decode(new Uint8Array(cD.buffer, cD.byteOffset + ID, pD)))
        }
      };
      return (DD, CD, iD, fD) => !(DD < yD.U.ReplayFailed || DD > yD.U.RecorderEvent) && (cD = CD, ID = !0, (0, tD.Ae)(DD, CD, iD, fD, pD) && ID)
    }

    function Kp(DD) {
      let CD = null;
      const cD = Jp(DD, (() => {
        if (null === CD) throw new Error("a recorder event read outside recorderEventReader's call");
        return CD.buffer
      }));
      return (DD, ID) => {
        CD = ID;
        try {
          ! function(DD, CD) {
            const cD = DD.slice(),
              ID = new DataView(cD.buffer);
            for (let pD = 0; pD < cD.byteLength;) {
              if (pD + yD.R > cD.byteLength) throw new Error(`the recorder module's events end mid-head at ${pD}`);
              const DD = ID.getUint32(pD, !0),
                iD = 65535 & DD,
                fD = DD >>> 16,
                bD = pD + yD.R;
              if (bD + fD > cD.byteLength || !CD(iD, ID, bD, fD)) throw new Error(`the recorder module wrote a malformed event ${iD} (${fD} bytes) at ${pD}`);
              pD = bD + (0, yD.je)(fD)
            }
          }(DD, cD)
        } finally {
          CD = null
        }
      }
    }
    class ap {
      constructor(DD, CD) {
        this.acks = DD, this.handlers = CD, this.parts = new Map
      }
      onPart(DD, CD, cD) {
        let ID = this.parts.get(DD);
        ID || (ID = [], this.parts.set(DD, ID)), ID[CD] = cD, this.acks.filePartDone(DD, CD)
      }
      onReady(DD) {
        var CD;
        const cD = null !== (CD = this.parts.get(DD.save)) && void 0 !== CD ? CD : [];
        this.parts.delete(DD.save);
        const ID = function(DD, CD, cD) {
          if (DD.length !== CD) return null;
          let ID = 0;
          for (let fD = 0; fD < CD; fD++) {
            if (void 0 === DD[fD]) return null;
            ID += DD[fD].byteLength
          }
          if (ID !== cD) return null;
          if (1 === CD) return DD[0];
          const pD = new Uint8Array(cD);
          let iD = 0;
          for (const fD of DD) pD.set(fD, iD), iD += fD.byteLength;
          return pD
        }(cD, DD.parts, DD.bytes);
        this.acks.fileDone(DD.save), null === ID ? this.handlers.fileIncomplete(DD.save, DD.kind) : this.handlers.fileReady(DD.save, DD.kind, ID)
      }
      onDiscarded(DD) {
        this.parts.delete(DD)
      }
    }

    function Vp() {
      return cD.e(57).then((() => cD(41764)))
    }
    class zp {
      constructor(DD) {
        this.deps = DD, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: CD
        } = DD;
        this.recorder = new Up({
          client: CD,
          live: () => {
            var DD;
            return !0 !== (null === (DD = this.viewer) || void 0 === DD ? void 0 : DD.inPlayback)
          },
          viewerOpen: DD.viewerOpen,
          notify: DD.notify,
          download: CD => {
            var cD;
            null === (cD = DD.download) || void 0 === cD || cD.call(DD, CD)
          },
          onState: DD.onRecorderState,
          onSaveState: DD.onSaveState
        }), this.parts = new ap(CD, {
          fileReady: (DD, CD, cD) => {
            var ID;
            CD === yD.Uc.Edited ? null === (ID = this.viewer) || void 0 === ID || ID.saveDone(cD) : this.recorder.fileReady(CD, cD)
          },
          fileIncomplete: (DD, CD) => {
            this.saveFailed(CD)
          }
        });
        const cD = {
          replayFailed: DD => {
            var CD;
            null === (CD = this.viewer) || void 0 === CD || CD.onFailed(DD)
          },
          replayOption: CD => {
            var cD;
            null === (cD = DD.onReplayOption) || void 0 === cD || cD.call(DD, CD)
          },
          replayUiEvent: CD => {
            var cD;
            null === (cD = DD.onReplayUiEvent) || void 0 === cD || cD.call(DD, CD)
          },
          filePart: (DD, CD, cD) => {
            this.parts.onPart(DD, CD, cD)
          },
          fileReady: DD => {
            this.parts.onReady(DD)
          },
          replayOpened: CD => {
            var cD;
            null === (cD = DD.onReplayOpened) || void 0 === cD || cD.call(DD, CD)
          },
          recorderEvent: DD => {
            var CD;
            switch (DD.what) {
              case yD.Kc.FileDiscarded:
                this.parts.onDiscarded(DD.save);
                break;
              case yD.Kc.SaveFailed:
                this.saveFailed(DD.kind);
                break;
              case yD.Kc.SaveBusy:
                if (null !== (CD = this.viewer) && void 0 !== CD && CD.savePending) {
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
        this.sink = function(DD, CD) {
          return {
            onReplayEvent: Jp(DD, CD)
          }
        }(cD, DD.buffer), this.recorderEvents = Kp(cD)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var DD;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (DD = this.deps.loadViewer) && void 0 !== DD ? DD : Vp)().catch((DD => {
          throw this.viewerChunk = null, DD
        })), this.viewerChunk.then((DD => (this.viewer ??= new DD.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var DD, CD;
            null === (DD = (CD = this.deps).onViewerChange) || void 0 === DD || DD.call(CD)
          }
        }), this.viewer))))
      }
      activated(DD) {
        this.recorder.activated(DD)
      }
      afterFrame(DD) {
        try {
          DD > 0 && this.recorder.wy()
        } finally {
          var CD;
          null === (CD = this.viewer) || void 0 === CD || CD.afterFrame()
        }
      }
      end() {
        var DD;
        null === (DD = this.viewer) || void 0 === DD || DD.end()
      }
      saveFailed(DD) {
        var CD;
        DD === yD.Uc.Edited ? null === (CD = this.viewer) || void 0 === CD || CD.saveFailed(!1) : this.recorder.failed(DD)
      }
    }
    var jp = cD(39715),
      lp = cD(39727),
      Lp = cD(4588),
      Tp = cD(40094);
    class Gp {
      constructor(DD) {
        this.deps = DD, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(DD, CD) {
        if (!this.deps.live() || 0 === DD && 0 === CD) return;
        const cD = (0, LD.r)(0, performance.now()),
          ID = this.deps.dragScale();
        (0, Tp.j)((() => {
          (0, LD.u)(yD.tb.MouseDown, 0, 0, 0, cD), (0, LD.u)(yD.tb.MouseMove, 0, DD * ID, CD * ID, 0), (0, LD.u)(yD.tb.MouseUp, 0, 0, 0, cD)
        }))
      }
      move(DD) {
        var CD, cD;
        this.analogue[0] = null !== (CD = null === DD || void 0 === DD ? void 0 : DD.x) && void 0 !== CD ? CD : 0, this.analogue[1] = null !== (cD = null === DD || void 0 === DD ? void 0 : DD.y) && void 0 !== cD ? cD : 0, this.send()
      }
      holdVertical(DD, CD) {
        const cD = "freeCamUp" === DD ? tD.hc.Up : tD.hc.Down;
        this.keys = CD ? this.keys | cD : this.keys & ~cD, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const DD = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== DD && !(0, tD.Me)(DD, 0, this.analogue, this.keys)
      }
    }
    var Rp = cD(733),
      kp = cD(300),
      dp = cD(90),
      Yp = cD(8958);

    function Wp() {
      const DD = ID.d.get("clientEscMenuOptions"),
        CD = (0, Rp.n)(DD);
      return {
        mouse: (0, dp.isMobile)() ? CD : DD.mouseSensitivity,
        touch: CD,
        fovPercent: DD.cameraFOV
      }
    }

    function sp() {
      const DD = ID.d.get("clientEscMenuOptions"),
        CD = ID.d.get("isTouchScreen") ? (0, Rp.n)(DD) : DD.mouseSensitivity,
        cD = Wp().mouse;
      return cD > 0 ? CD / cD : 1
    }

    function Ep(DD) {
      const CD = () => {
        DD.setSoundPrefs(ID.d.get("soundVolume"), ID.d.get("soundOnFromAd"))
      };
      let cD = null;
      const pD = () => {
        const {
          showFog: CD,
          enableLighting: pD,
          fogChunkDistance: iD,
          chunkFadeIn: fD
        } = ID.d.get("clientEscMenuOptions"), bD = {
          showFog: CD,
          lighting: pD,
          fogChunks: iD,
          chunkFade: fD
        };
        cD && (0, yD.Wd)(cD) === (0, yD.Wd)(bD) && cD.fogChunks === iD || (cD = bD, DD.setEnvPrefs(cD))
      };
      let iD = null;
      const bD = () => {
        const CD = function() {
          const DD = ID.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: ID.d.get("areNametagsHidden"),
            crouchToggle: DD.crouchIsToggle,
            bhopDisabled: DD.disableBunnyHopping,
            disableBobbing: DD.disableBobbing,
            ezTowering: DD.ezTowering && (0, kp.d)(),
            ezBridging: DD.ezBridging,
            showChunkBorders: DD.showChunkBorders,
            nametagCutDistance: (0, Yp.f)()
          }
        }();
        (0, UD.Xd)(iD, CD) || (iD = CD, DD.setUiPrefs(CD))
      };
      let QD = null;
      const wD = () => {
        const CD = Wp();
        (0, UD.Xd)(QD, CD) || (QD = CD, DD.setLookPrefs(CD))
      };
      CD(), pD(), bD(), wD();
      const SD = [(0, fD.k)("appManagerUpdated|soundVolume", CD), (0, fD.k)("appManagerUpdated|soundOnFromAd", CD), (0, fD.k)("appManagerUpdated|clientEscMenuOptions", (() => {
        pD(), bD(), wD()
      })), (0, fD.k)("appManagerUpdated|areNametagsHidden", bD), (0, fD.k)("appManagerUpdated|showDistantNametags", bD)];
      return () => {
        for (const DD of SD) DD()
      }
    }
    var ep = cD(40016),
      hp = cD(40024);
    var rp = (0, hp.e)("lend"),
      Ap = (0, hp.e)("starting"),
      Fp = (0, hp.e)("generation"),
      Di = (0, hp.e)("end");
    class Ci {
      constructor(DD) {
        this.deps = DD, Object.defineProperty(this, Di, {
          value: ci
        }), Object.defineProperty(this, rp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ap, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Fp, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, ep.b)(this, rp)[rp] || (0, ep.b)(this, Ap)[Ap]
      }
      async start(DD) {
        if (this.active) return "busy";
        const CD = (0, ep.b)(this, Fp)[Fp];
        (0, ep.b)(this, Ap)[Ap] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, ep.b)(this, Ap)[Ap] = !1
        }
        if (CD !== (0, ep.b)(this, Fp)[Fp]) return "refused";
        const cD = this.deps.beginSave();
        if (!cD) return "refused";
        const ID = Number(BigInt.asUintN(32, DD)),
          pD = Number(BigInt.asUintN(32, DD >> 32n));
        let iD = "refused";
        return this.deps.recorderCall(((DD, CD) => {
          const fD = cD.editState,
            bD = DD.stage(fD.length);
          0 !== bD ? (new Uint8Array(CD.buffer, bD, fD.length).set(fD), DD.ppD(cD.headLen, ID, pD) && (iD = "sealing")) : iD = "tooLarge"
        }), !0), "sealing" !== iD ? (cD.end(), iD) : ((0, ep.b)(this, rp)[rp] = cD, "sealing")
      }
      beforeRecorderStep() {
        const DD = (0, ep.b)(this, rp)[rp];
        if (!DD) return null;
        let CD = -1,
          cD = 0;
        if (!this.deps.recorderCall((DD => {
            CD = DD.ipD(), CD > 0 && (cD = DD.fpD())
          }))) return (0, ep.b)(this, Di)[Di](DD, "stopped");
        if (CD < 0) return (0, ep.b)(this, Di)[Di](DD, "read");
        if (0 === CD) return null;
        const ID = DD.head(cD, CD);
        let pD = !1;
        if (ID && this.deps.recorderCall(((DD, cD) => {
            const iD = DD.stage(CD);
            0 !== iD && (new Uint8Array(cD.buffer, iD, CD).set(ID), pD = !0)
          }), !0), pD) return null;
        const iD = DD.givenUp();
        this.deps.recorderCall((DD => {
          DD.bpD()
        }));
        const fD = (0, ep.b)(this, Di)[Di](DD, iD ? "givenUp" : "stopped");
        return iD && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), fD
      }
      stop() {
        (0, ep.b)(this, Fp)[Fp]++;
        const DD = (0, ep.b)(this, rp)[rp];
        DD && (this.deps.recorderCall((DD => {
          DD.bpD()
        })), (0, ep.b)(this, Di)[Di](DD, "stopped"))
      }
    }

    function ci(DD, CD) {
      return (0, ep.b)(this, rp)[rp] = null, DD.end(), CD
    }

    function Ii(DD, CD) {
      const cD = new Uint8Array(4),
        ID = new DataView(cD.buffer);
      return ID.setUint8(0, DD ? 1 : 0), ID.setUint16(2, Math.max(0, Math.min(65535, Math.round(CD))), !0), cD
    }

    function ii(DD, CD) {
      return DD > function(DD) {
        return 16777216 + 314572.8 * Math.max(0, DD)
      }(CD) + 33554432
    }
    let fi = null;

    function bi(DD) {
      return fi ??= async function(DD) {
        const CD = DD.loadInFlight();
        CD && await CD.catch((() => {}));
        if (DD.trapped()) return "trapped";
        if (DD.busy() || !ii(DD.memoryBytes(), DD.clipSeconds())) return "uM";
        DD.unload();
        let cD = !1;
        try {
          cD = await DD.load()
        } catch {
          cD = !1
        }
        if (!cD) return DD.trapped() ? "trapped" : DD.Lt() ? "Lt" : "failed";
        return "recycled"
      }(DD).finally((() => {
        fi = null
      })), fi
    }
    const Qi = "Replay recording couldn't load, so try again.",
      wi = new Set([yD.Nc.ToggleRecording, yD.Nc.SaveClip]);
    var Si = (0, hp.e)("bindings"),
      Bi = (0, hp.e)("module"),
      yi = (0, hp.e)("memory"),
      Mi = (0, hp.e)("trapped"),
      ti = (0, hp.e)("Lt"),
      Zi = (0, hp.e)("recycleDue"),
      oi = (0, hp.e)("loading"),
      vi = (0, hp.e)("generation"),
      Ni = (0, hp.e)("viewDrawn"),
      gi = (0, hp.e)("clip"),
      Xi = (0, hp.e)("session"),
      mi = (0, hp.e)("control"),
      ni = (0, hp.e)("deferred"),
      Oi = (0, hp.e)("coreU8"),
      Pi = (0, hp.e)("coreU32"),
      Hi = (0, hp.e)("moduleU8"),
      Ui = (0, hp.e)("edited"),
      xi = (0, hp.e)("sendSession"),
      qi = (0, hp.e)("checkNotInEvents"),
      Ji = (0, hp.e)("clipping"),
      Ki = (0, hp.e)("busy"),
      ai = (0, hp.e)("use"),
      Vi = (0, hp.e)("ensureLoaded"),
      zi = (0, hp.e)("loadOnce"),
      ji = (0, hp.e)("recycleAfterStep"),
      li = (0, hp.e)("settleRecycle"),
      Li = (0, hp.e)("load"),
      Ti = (0, hp.e)("attach"),
      Gi = (0, hp.e)("resendHeld"),
      Ri = (0, hp.e)("recycle"),
      ki = (0, hp.e)("send"),
      di = (0, hp.e)("unload"),
      Yi = (0, hp.e)("dropModule"),
      Wi = (0, hp.e)("coreBytes"),
      si = (0, hp.e)("coreWords"),
      Ei = (0, hp.e)("moduleBytes"),
      ei = (0, hp.e)("loadFailed"),
      ui = (0, hp.e)("call"),
      ri = (0, hp.e)("guard"),
      Ai = (0, hp.e)("trapOn");
    class Fi {
      constructor(DD) {
        this.deps = DD, Object.defineProperty(this, Ai, {
          value: Pf
        }), Object.defineProperty(this, ri, {
          value: Of
        }), Object.defineProperty(this, ui, {
          value: nf
        }), Object.defineProperty(this, ei, {
          value: mf
        }), Object.defineProperty(this, Ei, {
          value: Xf
        }), Object.defineProperty(this, si, {
          value: gf
        }), Object.defineProperty(this, Wi, {
          value: Nf
        }), Object.defineProperty(this, Yi, {
          value: vf
        }), Object.defineProperty(this, di, {
          value: of
        }), Object.defineProperty(this, ki, {
          value: Zf
        }), Object.defineProperty(this, Ri, {
          value: tf
        }), Object.defineProperty(this, Gi, {
          value: Mf
        }), Object.defineProperty(this, Ti, {
          value: yf
        }), Object.defineProperty(this, Li, {
          value: Bf
        }), Object.defineProperty(this, li, {
          value: Sf
        }), Object.defineProperty(this, ji, {
          value: wf
        }), Object.defineProperty(this, zi, {
          value: Qf
        }), Object.defineProperty(this, Vi, {
          value: bf
        }), Object.defineProperty(this, ai, {
          value: ff
        }), Object.defineProperty(this, Ki, {
          value: pf
        }), Object.defineProperty(this, Ji, {
          value: If
        }), Object.defineProperty(this, qi, {
          value: Cf
        }), Object.defineProperty(this, xi, {
          value: Df
        }), Object.defineProperty(this, Si, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Bi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Mi, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ti, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Zi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vi, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Ni, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, gi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ni, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Oi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Hi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ui, {
          writable: !0,
          value: void 0
        }), (0, ep.b)(this, Ui)[Ui] = new Ci({
          ensureLoaded: () => (0, ep.b)(this, Vi)[Vi](),
          recorderCall: (DD, CD) => {
            CD && (0, ep.b)(this, qi)[qi]("an edited save's stage");
            const cD = (0, ep.b)(this, ui)[ui](((CD, cD) => (DD(CD, cD), !0)));
            return null !== cD && void 0 !== cD && cD
          },
          beginSave: DD.beginSave,
          givenUp: DD.givenUp
        })
      }
      get active() {
        return null !== (0, ep.b)(this, Bi)[Bi]
      }
      get trapped() {
        return (0, ep.b)(this, Mi)[Mi]
      }
      get loading() {
        return null !== (0, ep.b)(this, oi)[oi]
      }
      prefetch() {
        (0, ep.b)(this, ti)[ti] || (0, ep.b)(this, Mi)[Mi] || (0, ep.b)(this, Bi)[Bi] || (0, ep.b)(this, oi)[oi] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, ep.b)(this, Ni)[Ni] = !0, (0, ep.b)(this, Ji)[Ji]() && (0, ep.b)(this, ai)[ai]()
      }
      prefs(DD, CD) {
        (0, ep.b)(this, gi)[gi] = {
          on: DD,
          seconds: CD
        }, (0, ep.b)(this, ki)[ki](yD.Hc.Prefs, Ii(DD, CD)), DD && (0, ep.b)(this, Ni)[Ni] && (0, ep.b)(this, ai)[ai]()
      }
      control(DD) {
        const CD = function(DD) {
          return new Uint8Array([DD, 0, 0, 0])
        }(DD);
        if (wi.has(DD)) return (0, ep.b)(this, Bi)[Bi] ? void(0, ep.b)(this, ki)[ki](yD.Hc.Control, CD) : ((0, ep.b)(this, mi)[mi] = CD, void(0, ep.b)(this, ai)[ai]());
        (0, ep.b)(this, ti)[ti] || this.deps.coreCommand(yD.Hc.Control, CD)
      }
      session(DD) {
        (0, ep.b)(this, Xi)[Xi] = DD, (0, ep.b)(this, xi)[xi](DD)
      }
      filePartDone(DD, CD) {
        (0, ep.b)(this, ki)[ki](yD.Hc.FilePartDone, function(DD, CD) {
          const cD = new Uint8Array(8),
            ID = new DataView(cD.buffer);
          return ID.setUint32(0, DD, !0), ID.setUint32(4, CD, !0), cD
        }(DD, CD))
      }
      fileDone(DD) {
        return (0, ep.b)(this, ki)[ki](yD.Hc.FileDone, function(DD) {
          const CD = new Uint8Array(4);
          return new DataView(CD.buffer).setUint32(0, DD, !0), CD
        }(DD)), (0, ep.b)(this, ji)[ji]()
      }
      saveEdited(DD) {
        return (0, ep.b)(this, qi)[qi]("saveEdited"), (0, ep.b)(this, Ui)[Ui].start(DD)
      }
      afterFrame() {
        if (!(0, ep.b)(this, Bi)[Bi]) return;
        "read" === (0, ep.b)(this, Ui)[Ui].beforeRecorderStep() && (0, ep.b)(this, ji)[ji]();
        const DD = (0, ep.b)(this, Zi)[Zi];
        (0, ep.b)(this, Zi)[Zi] = null;
        const CD = (0, ep.b)(this, Bi)[Bi],
          cD = (0, ep.b)(this, yi)[yi];
        if (!CD || !cD) return void(null === DD || void 0 === DD || DD.resolve((0, ep.b)(this, Mi)[Mi] ? "trapped" : "uM"));
        const {
          core: ID
        } = this.deps, pD = ID.BpD(2);
        let iD, fD, bD, QD, wD = 0,
          SD = 0;
        if (0 !== pD) {
          var BD, yD;
          const DD = (0, ep.b)(this, si)[si]();
          wD = null !== (BD = DD[pD >>> 2]) && void 0 !== BD ? BD : 0, SD = null !== (yD = DD[1 + (pD >>> 2)]) && void 0 !== yD ? yD : 0
        }
        try {
          if (SD > 0) {
            const DD = CD.feed(SD);
            0 !== DD && (0, ep.b)(this, Ei)[Ei](cD).set((0, ep.b)(this, Wi)[Wi]().subarray(wD, wD + SD), DD)
          }
          iD = CD.step(), fD = CD.ypD(), bD = CD.MpD(), QD = CD.tpD()
        } catch (MD) {
          if (!(0, ep.b)(this, Ai)[Ai](MD)) throw null === DD || void 0 === DD || DD.resolve("uM"), MD;
          return void(null === DD || void 0 === DD || DD.resolve("trapped"))
        }
        if (iD > 0) {
          const DD = ID.ZpD(2, iD);
          0 !== DD && (0, ep.b)(this, Wi)[Wi]().set((0, ep.b)(this, Ei)[Ei](cD).subarray(fD, fD + iD), DD)
        }
        if (bD > 0) {
          (0, ep.b)(this, ni)[ni] = [];
          try {
            this.deps.events(new Uint8Array(cD.buffer, QD, bD), cD)
          } catch (MD) {
            throw null === DD || void 0 === DD || DD.resolve("uM"), MD
          } finally {
            const DD = (0, ep.b)(this, ni)[ni];
            (0, ep.b)(this, ni)[ni] = null;
            for (const [CD, cD] of DD)(0, ep.b)(this, ki)[ki](CD, cD)
          }
        }
        if (!(0, ep.b)(this, Ji)[Ji]() && !(0, ep.b)(this, Ki)[Ki]()) return (0, ep.b)(this, di)[di](), void(null === DD || void 0 === DD || DD.resolve("uM"));
        null === DD || void 0 === DD || DD.resolve((0, ep.b)(this, Ri)[Ri]())
      }
      dispose() {
        (0, ep.b)(this, ti)[ti] = !0, (0, ep.b)(this, di)[di]()
      }
    }

    function Df(DD) {
      (0, ep.b)(this, ki)[ki](yD.Hc.Session, function(DD) {
        const CD = new TextEncoder,
          cD = CD.encode(DD.game).subarray(0, 65535),
          ID = CD.encode(DD.lobby).subarray(0, 65535),
          pD = new Uint8Array(22 + cD.length + 2 + ID.length),
          iD = new DataView(pD.buffer);
        iD.setFloat64(0, DD.unixMs, !0), iD.setBigUint64(8, BigInt.asUintN(64, DD.session), !0), iD.setUint8(16, DD.lobbyType);
        let fD = 20;
        for (const bD of [cD, ID]) iD.setUint16(fD, bD.length, !0), pD.set(bD, fD + 2), fD += 2 + bD.length;
        return pD
      }({
        ...DD,
        unixMs: this.deps.unixNow()
      }))
    }

    function Cf(DD) {
      false
    }

    function If() {
      var DD, CD;
      return null !== (DD = null === (CD = (0, ep.b)(this, gi)[gi]) || void 0 === CD ? void 0 : CD.on) && void 0 !== DD && DD
    }

    function pf() {
      const DD = (0, ep.b)(this, Bi)[Bi];
      let CD = !0;
      if (DD) try {
        CD = DD.busy()
      } catch (cD) {
        if (!(0, ep.b)(this, Ai)[Ai](cD)) throw cD
      }
      return CD || (0, ep.b)(this, Ui)[Ui].active
    }
    async function ff() {
      !(0, ep.b)(this, ti)[ti] && this.deps.allowed() ? await (0, ep.b)(this, Vi)[Vi]() : (0, ep.b)(this, mi)[mi] = null
    }

    function bf() {
      return (0, ep.b)(this, Mi)[Mi] || (0, ep.b)(this, ti)[ti] ? Promise.resolve(!1) : (0, ep.b)(this, Bi)[Bi] ? Promise.resolve(!0) : ((0, ep.b)(this, oi)[oi] ??= (0, ep.b)(this, zi)[zi](), (0, ep.b)(this, oi)[oi])
    }
    async function Qf() {
      let DD = !1;
      try {
        return DD = await (0, ep.b)(this, Li)[Li](), DD
      } finally {
        DD || ((0, ep.b)(this, mi)[mi] = null), (0, ep.b)(this, oi)[oi] = null
      }
    }

    function wf() {
      if (!(0, ep.b)(this, Bi)[Bi]) return Promise.resolve((0, ep.b)(this, Mi)[Mi] ? "trapped" : "uM");
      if (!(0, ep.b)(this, Zi)[Zi]) {
        let DD = () => {};
        const CD = new Promise((CD => {
          DD = CD
        }));
        (0, ep.b)(this, Zi)[Zi] = {
          promise: CD,
          resolve: DD
        }
      }
      return (0, ep.b)(this, Zi)[Zi].promise
    }

    function Sf(DD) {
      const CD = (0, ep.b)(this, Zi)[Zi];
      (0, ep.b)(this, Zi)[Zi] = null, null === CD || void 0 === CD || CD.resolve(DD)
    }
    async function Bf() {
      let DD = (0, ep.b)(this, Si)[Si];
      if (!DD) {
        const CD = (0, ep.b)(this, vi)[vi];
        try {
          DD = await this.deps.load()
        } catch (cD) {
          return CD === (0, ep.b)(this, vi)[vi] && await (0, ep.b)(this, ei)[ei](cD), !1
        }
        if (CD !== (0, ep.b)(this, vi)[vi]) return this.deps.unload(), !1;
        const ID = DD,
          pD = (0, ep.b)(this, ri)[ri]((() => ID.opD()));
        if (void 0 === pD) return !1;
        const iD = this.deps.core.vpD();
        if (pD !== iD) return await (0, ep.b)(this, ei)[ei](new Error(`recorder port version ${pD}, the core's ${iD}`)), !1;
        (0, ep.b)(this, Si)[Si] = DD
      }
      const CD = DD;
      try {
        if (!(0, ep.b)(this, ri)[ri]((() => ((0, ep.b)(this, Bi)[Bi] = new CD.NpD, (0, ep.b)(this, yi)[yi] = CD.QpD(), !0)))) return !1;
        (0, ep.b)(this, Gi)[Gi]();
        const DD = (0, ep.b)(this, mi)[mi];
        return (0, ep.b)(this, mi)[mi] = null, DD && (0, ep.b)(this, ki)[ki](yD.Hc.Control, DD), (0, ep.b)(this, Ti)[Ti]()
      } catch (cD) {
        return (0, ep.b)(this, di)[di](), await (0, ep.b)(this, ei)[ei](cD), !1
      }
    }

    function yf() {
      return this.deps.core.gpD(0), 1 === this.deps.core.gpD(1) || ((0, ep.b)(this, di)[di](), this.deps.failed(Qi), !1)
    }

    function Mf() {
      (0, ep.b)(this, gi)[gi] && (0, ep.b)(this, ki)[ki](yD.Hc.Prefs, Ii((0, ep.b)(this, gi)[gi].on, (0, ep.b)(this, gi)[gi].seconds)), (0, ep.b)(this, Xi)[Xi] && (0, ep.b)(this, xi)[xi]((0, ep.b)(this, Xi)[Xi])
    }

    function tf() {
      return bi({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var DD, CD;
          return null !== (DD = null === (CD = (0, ep.b)(this, gi)[gi]) || void 0 === CD ? void 0 : CD.seconds) && void 0 !== DD ? DD : 0
        },
        trapped: () => (0, ep.b)(this, Mi)[Mi],
        busy: () => (0, ep.b)(this, Ki)[Ki](),
        loadInFlight: () => (0, ep.b)(this, oi)[oi],
        Lt: () => (0, ep.b)(this, ti)[ti],
        unload: () => {
          (0, ep.b)(this, di)[di]()
        },
        load: () => (0, ep.b)(this, Vi)[Vi]()
      })
    }

    function Zf(DD, CD) {
      (0, ep.b)(this, ni)[ni] ? (0, ep.b)(this, ni)[ni].push([DD, CD]): (0, ep.b)(this, ui)[ui](((cD, ID) => {
        const pD = cD.wpD(CD.length);
        0 !== pD && (new Uint8Array(ID.buffer, pD, CD.length).set(CD), cD.command(DD, CD.length))
      }))
    }

    function of() {
      (0, ep.b)(this, vi)[vi]++, (0, ep.b)(this, li)[li]("uM"), (0, ep.b)(this, Ui)[Ui].stop(), this.deps.core.gpD(0), (0, ep.b)(this, Yi)[Yi](), (0, ep.b)(this, Mi)[Mi] || ((0, ep.b)(this, Si)[Si] = null, this.deps.unload())
    }

    function vf() {
      (0, ep.b)(this, ui)[ui]((DD => {
        DD.free()
      })), (0, ep.b)(this, Bi)[Bi] = null, (0, ep.b)(this, yi)[yi] = null, (0, ep.b)(this, Hi)[Hi] = null
    }

    function Nf() {
      var DD;
      const CD = this.deps.coreBuffer();
      return (null === (DD = (0, ep.b)(this, Oi)[Oi]) || void 0 === DD ? void 0 : DD.buffer) !== CD && ((0, ep.b)(this, Oi)[Oi] = new Uint8Array(CD)), (0, ep.b)(this, Oi)[Oi]
    }

    function gf() {
      var DD;
      const CD = this.deps.coreBuffer();
      return (null === (DD = (0, ep.b)(this, Pi)[Pi]) || void 0 === DD ? void 0 : DD.buffer) !== CD && ((0, ep.b)(this, Pi)[Pi] = new Uint32Array(CD, 0, CD.byteLength >>> 2)), (0, ep.b)(this, Pi)[Pi]
    }

    function Xf(DD) {
      var CD;
      const cD = DD.buffer;
      return (null === (CD = (0, ep.b)(this, Hi)[Hi]) || void 0 === CD ? void 0 : CD.buffer) !== cD && ((0, ep.b)(this, Hi)[Hi] = new Uint8Array(cD)), (0, ep.b)(this, Hi)[Hi]
    }
    async function mf(DD) {
      await this.deps.staleOr(DD, (() => {
        this.deps.failed(Qi)
      }))
    }

    function nf(DD) {
      const CD = (0, ep.b)(this, Bi)[Bi],
        cD = (0, ep.b)(this, yi)[yi];
      if (CD && cD) return (0, ep.b)(this, ri)[ri]((() => DD(CD, cD)))
    }

    function Of(DD) {
      if (!(0, ep.b)(this, Mi)[Mi]) try {
        return DD()
      } catch (CD) {
        if (!(0, ep.b)(this, Ai)[Ai](CD)) throw CD;
        return
      }
    }

    function Pf(DD) {
      return DD instanceof WebAssembly.RuntimeError && ((0, ep.b)(this, Mi)[Mi] = !0, (0, ep.b)(this, Bi)[Bi] = null, (0, ep.b)(this, yi)[yi] = null, (0, ep.b)(this, Hi)[Hi] = null, (0, ep.b)(this, Si)[Si] = null, (0, ep.b)(this, mi)[mi] = null, (0, ep.b)(this, li)[li]("trapped"), this.deps.core.gpD(0), (0, ep.b)(this, Ui)[Ui].stop(), this.deps.crash(this.deps.markTrapped(DD)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Hf = cD(38017);
    const Uf = new Map([
      ["skyblock", () => cD.e(49).then((() => cD(38013)))]
    ]);

    function xf(DD) {
      const CD = Uf.get(DD);
      return CD ? CD().then((() => {
        const CD = (0, Hf.c)(DD);
        if (!CD) throw new Error(`${DD}'s replay hook module registered no hook`);
        return CD
      })) : null
    }
    class qf {
      constructor(DD) {
        this.deps = DD, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(DD) {
        if (this.pending.clear(), DD === this.game && null !== this.hook) return void(this.all = !0);
        const CD = ++this.generation;
        this.game = DD, this.hook = null, this.all = !1;
        const cD = this.deps.loadHook(DD);
        null === cD || void 0 === cD || cD.then((DD => {
          CD === this.generation && (this.hook = DD, this.all = !0)
        }), (DD => {
          CD === this.generation && this.deps.onError(DD)
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
          hook: CD
        } = this;
        if (null === CD || !DD || !this.all && 0 === this.pending.size) return;
        const cD = this.deps.cmd();
        if (null === cD) return;
        const {
          api: ID
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: DD,
            count: CD
          } = lc(ID, this.ids);
          this.ids = DD;
          for (let cD = 0; cD < CD; cD++) this.pending.set(DD[cD], !0)
        }
        const pD = this.ids = Lc(this.ids, this.pending.size);
        let iD = 0;
        for (const wD of this.pending.keys()) pD[iD++] = wD;
        const fD = [],
          bD = Tc(ID, pD, iD, ((DD, CD) => {
            null !== CD && fD.push({
              serverId: DD,
              info: CD,
              spawned: !0 === this.pending.get(DD)
            })
          }));
        if (bD) {
          this.pending.clear();
          for (const {
              serverId: DD,
              info: ID,
              spawned: pD
            }
            of fD) try {
            CD(ID, {
              setFacingTolerance: CD => {
                null === CD && pD || ic(cD, DD, CD) || this.pending.set(DD, pD)
              }
            })
          } catch (QD) {
            this.deps.onError(QD)
          }
        }
      }
    }
    var Jf = (0, hp.e)("bindings"),
      Kf = (0, hp.e)("module"),
      af = (0, hp.e)("memory"),
      Vf = (0, hp.e)("trapped"),
      zf = (0, hp.e)("generation"),
      jf = (0, hp.e)("loading"),
      lf = (0, hp.e)("lend"),
      Lf = (0, hp.e)("givenUp"),
      Tf = (0, hp.e)("afterSave"),
      Gf = (0, hp.e)("opens"),
      Rf = (0, hp.e)("saveAskedAt"),
      kf = (0, hp.e)("unload"),
      df = (0, hp.e)("dropModule"),
      Yf = (0, hp.e)("loadFailed"),
      Wf = (0, hp.e)("saveReadsBody"),
      sf = (0, hp.e)("command"),
      Ef = (0, hp.e)("call"),
      ef = (0, hp.e)("guard"),
      uf = (0, hp.e)("trapOn");
    class hf {
      constructor(DD) {
        this.deps = DD, Object.defineProperty(this, uf, {
          value: pb
        }), Object.defineProperty(this, ef, {
          value: Ib
        }), Object.defineProperty(this, Ef, {
          value: cb
        }), Object.defineProperty(this, sf, {
          value: Cb
        }), Object.defineProperty(this, Wf, {
          get: Db,
          set: void 0
        }), Object.defineProperty(this, Yf, {
          value: Ff
        }), Object.defineProperty(this, df, {
          value: Af
        }), Object.defineProperty(this, kf, {
          value: rf
        }), Object.defineProperty(this, Jf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Kf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, af, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Vf, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, zf, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jf, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, lf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Tf, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Gf, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Rf, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, ep.b)(this, Kf)[Kf] && null === (0, ep.b)(this, Tf)[Tf]
      }
      async open(DD) {
        if ((0, ep.b)(this, Vf)[Vf]) return yD.Tc.ModuleTrap;
        let CD = (0, ep.b)(this, Jf)[Jf];
        if (!CD) {
          const DD = (0, ep.b)(this, zf)[zf];
          (0, ep.b)(this, jf)[jf]++;
          try {
            CD = await this.deps.load()
          } catch (ID) {
            return (0, ep.b)(this, jf)[jf]--, DD !== (0, ep.b)(this, zf)[zf] ? "stopped" : (0, ep.b)(this, Yf)[Yf](ID)
          }
          if ((0, ep.b)(this, jf)[jf]--, DD !== (0, ep.b)(this, zf)[zf]) return (0, ep.b)(this, Jf)[Jf] || 0 !== (0, ep.b)(this, jf)[jf] || (0, ep.b)(this, Vf)[Vf] || this.deps.unload(), "stopped";
          if ((0, ep.b)(this, Vf)[Vf]) return yD.Tc.ModuleTrap;
          const cD = CD.opD(),
            pD = this.deps.core.vpD();
          if (cD !== pD) return (0, ep.b)(this, Yf)[Yf](new Error(`replay port version ${cD}, the core's ${pD}`));
          (0, ep.b)(this, Jf)[Jf] = CD
        }
        if (!(0, ep.b)(this, Kf)[Kf]) {
          const DD = CD;
          if (!(0, ep.b)(this, ef)[ef]((() => {
              (0, ep.b)(this, Kf)[Kf] = new DD.XpD, (0, ep.b)(this, af)[af] = DD.mpD()
            }))) return yD.Tc.ModuleTrap
        }
        let cD = !1;
        return (0, ep.b)(this, Ef)[Ef](((CD, ID) => {
          null !== (0, ep.b)(this, Tf)[Tf] && CD.step(0, 0);
          const pD = CD.stage(DD.length);
          0 !== pD && (new Uint8Array(ID.buffer, pD, DD.length).set(DD), CD.open(), (0, ep.b)(this, Lf)[Lf] = (0, ep.b)(this, lf)[lf], (0, ep.b)(this, Tf)[Tf] = null, (0, ep.b)(this, Gf)[Gf]++, cD = !0)
        })) ? cD ? "opening" : yD.Tc.TooLarge : yD.Tc.ModuleTrap
      }
      beforeFrame(DD) {
        const CD = (0, ep.b)(this, Kf)[Kf],
          cD = (0, ep.b)(this, af)[af];
        if (!CD || !cD || null !== (0, ep.b)(this, Tf)[Tf]) return;
        const {
          core: ID
        } = this.deps, pD = ID.npD(DD);
        if (pD < 0) return;
        const iD = Math.floor(pD);
        let fD, bD;
        try {
          fD = CD.step(iD, pD - iD), bD = CD.ypD()
        } catch (wD) {
          return void(0, ep.b)(this, uf)[uf](wD)
        }
        const QD = ID.ZpD(1, fD);
        if (0 === QD) {
          const DD = (0, ep.b)(this, Ef)[Ef]((DD => {
            DD.close()
          }));
          if (!DD) return;
          return (0, ep.b)(this, Wf)[Wf] ? (0, ep.b)(this, Tf)[Tf] = "drop" : (0, ep.b)(this, df)[df](), void ID.OpD(yD.Tc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), QD, fD).set(new Uint8Array(cD.buffer, bD, fD))
      }
      play() {
        (0, ep.b)(this, sf)[sf]((DD => {
          DD.play()
        }))
      }
      pause() {
        (0, ep.b)(this, sf)[sf]((DD => {
          DD.pause()
        }))
      }
      seek(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, ep.b)(this, sf)[sf]((cD => {
          cD.seek(DD, CD)
        }))
      }
      setMark(DD, CD) {
        return (0, ep.b)(this, sf)[sf]((cD => {
          cD.HpD(DD, CD)
        }))
      }
      addKeyframe(DD, CD) {
        return (0, ep.b)(this, sf)[sf]((cD => {
          cD.UpD(DD[0], DD[1], DD[2], CD[0], CD[1], CD[2])
        }))
      }
      setKeyframe(DD, CD) {
        return (0, ep.b)(this, sf)[sf]((cD => {
          cD.xpD(DD, CD)
        }))
      }
      moveKeyframe(DD, CD) {
        return (0, ep.b)(this, sf)[sf]((cD => {
          cD.qpD(DD, CD)
        }))
      }
      deleteKeyframes(DD, CD) {
        return (0, ep.b)(this, sf)[sf]((cD => {
          cD.JpD(DD, CD)
        }))
      }
      crop(DD, CD) {
        return null === (0, ep.b)(this, lf)[lf] && (0, ep.b)(this, sf)[sf]((cD => {
          cD.crop(DD, CD)
        }))
      }
      beginSave() {
        const DD = (0, ep.b)(this, Rf)[Rf];
        if ((0, ep.b)(this, Rf)[Rf] = null, null !== DD && DD !== (0, ep.b)(this, Gf)[Gf]) return null;
        let CD = 0,
          cD = null;
        if ((0, ep.b)(this, Ef)[Ef](((DD, ID) => {
            CD = DD.save(), 0 !== CD && (cD = new Uint8Array(ID.buffer, DD.KpD(), DD.apD()).slice())
          })), 0 === CD || !cD) return null;
        const ID = {
          headLen: CD,
          editState: cD,
          givenUp: () => (0, ep.b)(this, Lf)[Lf] === ID,
          head: (DD, CD) => {
            if ((0, ep.b)(this, lf)[lf] !== ID || !(0, ep.b)(this, Wf)[Wf]) return null;
            let cD = null;
            return (0, ep.b)(this, Ef)[Ef](((ID, pD) => {
              const iD = ID.VpD();
              0 !== iD && DD >= 0 && CD >= 0 && DD + CD <= iD && (cD = new Uint8Array(pD.buffer, ID.zpD() + DD, CD))
            })), cD
          },
          end: () => {
            if ((0, ep.b)(this, lf)[lf] !== ID) return;
            (0, ep.b)(this, lf)[lf] = null, (0, ep.b)(this, Lf)[Lf] = null, (0, ep.b)(this, Ef)[Ef]((DD => {
              DD.jpD()
            }));
            const DD = (0, ep.b)(this, Tf)[Tf];
            (0, ep.b)(this, Tf)[Tf] = null, "unload" === DD ? (0, ep.b)(this, kf)[kf]() : "drop" === DD && (0, ep.b)(this, df)[df]()
          }
        };
        return (0, ep.b)(this, lf)[lf] = ID, ID
      }
      askSave() {
        (0, ep.b)(this, Rf)[Rf] = (0, ep.b)(this, Gf)[Gf]
      }
      setSpeed(DD) {
        (0, ep.b)(this, sf)[sf]((CD => {
          CD.lpD(DD)
        }))
      }
      setCameraMode(DD) {
        (0, ep.b)(this, sf)[sf]((CD => {
          CD.LpD(DD)
        }))
      }
      close() {
        (0, ep.b)(this, sf)[sf]((DD => {
          DD.close()
        }))
      }
      stop() {
        (0, ep.b)(this, zf)[zf]++, (0, ep.b)(this, Wf)[Wf] && ((0, ep.b)(this, Ef)[Ef]((DD => {
          DD.close()
        })), (0, ep.b)(this, Kf)[Kf]) ? (0, ep.b)(this, Tf)[Tf] = "unload" : (0, ep.b)(this, kf)[kf]()
      }
    }

    function rf() {
      (0, ep.b)(this, df)[df](), (0, ep.b)(this, Vf)[Vf] || ((0, ep.b)(this, Jf)[Jf] = null, this.deps.unload())
    }

    function Af() {
      (0, ep.b)(this, Ef)[Ef]((DD => {
        DD.free()
      })), (0, ep.b)(this, Kf)[Kf] = null, (0, ep.b)(this, af)[af] = null
    }
    async function Ff(DD) {
      return await this.deps.staleOr(DD, (() => {})) ? "reloading" : yD.Tc.ModuleLoad
    }

    function Db() {
      return null !== (0, ep.b)(this, lf)[lf] && (0, ep.b)(this, Lf)[Lf] !== (0, ep.b)(this, lf)[lf]
    }

    function Cb(DD) {
      return null === (0, ep.b)(this, Tf)[Tf] && (0, ep.b)(this, Ef)[Ef](DD)
    }

    function cb(DD) {
      const CD = (0, ep.b)(this, Kf)[Kf],
        cD = (0, ep.b)(this, af)[af];
      return !(!CD || !cD) && (0, ep.b)(this, ef)[ef]((() => {
        DD(CD, cD)
      }))
    }

    function Ib(DD) {
      if ((0, ep.b)(this, Vf)[Vf]) return !1;
      try {
        return DD(), !0
      } catch (CD) {
        return (0, ep.b)(this, uf)[uf](CD), !1
      }
    }

    function pb(DD) {
      if (!(DD instanceof WebAssembly.RuntimeError)) throw DD;
      (0, ep.b)(this, Vf)[Vf] = !0, (0, ep.b)(this, Kf)[Kf] = null, (0, ep.b)(this, af)[af] = null, (0, ep.b)(this, Jf)[Jf] = null, this.deps.crash(this.deps.markTrapped(DD)), this.deps.core.OpD(yD.Tc.ModuleTrap)
    }
    var ib = cD(6220),
      fb = cD(39793);
    const bb = "[bloxd-wasm-client]";
    const Qb = String(Hp);

    function wb(DD) {
      return null === DD || DD === Qb ? void 0 : DD
    }

    function Sb(DD) {
      var CD, cD, ID, pD, iD, bD, QD;
      switch (DD.what) {
        case yD.Yc.FlyingText: {
          let CD;
          try {
            CD = JSON.parse(DD.contentJson)
          } catch (wD) {
            return void console.warn(`${bb} a replay's flying text isn't JSON`, wD)
          }
          fD.i.Uo("forceFlyingMiddleMessage", {
            content: CD,
            zi: DD.zi,
            angle: DD.angle,
            ji: DD.ji
          });
          break
        }
        case yD.Yc.PlayerKilled:
          (0, fb.d)({
            kind: "killed",
            body: {
              deadEId: null !== (CD = wb(DD.dead)) && void 0 !== CD ? CD : "",
              killerEId: wb(DD.killer),
              withItem: null !== (cD = DD.withItem) && void 0 !== cD ? cD : "",
              killstreak: DD.killstreak
            }
          });
          break;
        case yD.Yc.Killfeed:
          (0, fb.d)({
            kind: "custom",
            body: {
              killer: {
                eId: wb(DD.killerId),
                name: null !== (ID = DD.killerName) && void 0 !== ID ? ID : void 0,
                colour: null !== (pD = DD.killerColour) && void 0 !== pD ? pD : void 0
              },
              victim: {
                eId: wb(DD.victimId),
                name: null !== (iD = DD.victimName) && void 0 !== iD ? iD : void 0,
                colour: null !== (bD = DD.victimColour) && void 0 !== bD ? bD : void 0
              },
              withItem: null !== (QD = DD.withItem) && void 0 !== QD ? QD : ""
            }
          })
      }
    }
    const Bb = "[bloxd-wasm-client]";

    function yb(DD) {
      if (void 0 === DD || null === DD || "" === DD) return null;
      const CD = Number(DD);
      return Number.isInteger(CD) && CD > Hp && CD <= 2147483647 ? CD : null
    }

    function Mb(DD) {
      return {
        id: yb(DD.eId),
        name: "string" === typeof DD.name ? DD.name : null,
        colour: "string" === typeof DD.colour ? DD.colour : null
      }
    }

    function tb(DD) {
      const CD = (0, lp.l)(Wc.dc.PlayerKilled, (CD => {
          var cD, ID;
          const pD = (0, jp.k)(CD);
          if (!(0, jp.e)(pD)) return;
          const {
            deadEId: iD,
            killerEId: fD,
            withItem: bD,
            killstreak: QD
          } = pD;
          DD.recordPlayerKilled(null !== (cD = yb(iD)) && void 0 !== cD ? cD : Hp, null !== (ID = yb(fD)) && void 0 !== ID ? ID : Hp, "number" === typeof QD ? QD : 0, "string" === typeof bD ? bD : "")
        })),
        cD = (0, lp.l)(Wc.dc.CustomKillfeed, (CD => {
          const cD = (0, jp.k)(CD);
          if (!(0, jp.e)(cD) || !(0, jp.e)(cD.killer) || !(0, jp.e)(cD.victim)) return;
          const {
            killer: ID,
            victim: pD,
            withItem: iD
          } = cD;
          DD.recordKillfeed(Mb(ID), Mb(pD), "string" === typeof iD ? iD : null)
        }));
      return () => {
        CD(), cD()
      }
    }

    function Zb(DD) {
      var CD;
      return void 0 === DD || null === DD ? null : null !== (CD = JSON.stringify(DD)) && void 0 !== CD ? CD : null
    }

    function ob(DD) {
      let CD = null;
      const cD = () => {
        const {
          enableClipping: cD,
          clipDurationSeconds: pD
        } = ID.d.get("clientEscMenuOptions"), iD = `${cD}:${pD}`;
        iD !== CD && (CD = iD, DD.recorder.setPrefs(cD, pD))
      };
      return cD(), (0, fD.k)("appManagerUpdated|clientEscMenuOptions", cD)
    }
    const vb = "replayModule",
      Nb = "recorderModule";

    function gb(DD, CD, cD) {
      return function() {
        return DD.isStopped ? cD : CD(...arguments)
      }
    }
    const Xb = {
      open: () => Promise.reject(new Error(op.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function mb() {
      return cD.e(61).then((() => cD(60693)))
    }

    function nb(DD) {
      (0, op.f)({
        text: DD,
        type: "Error"
      })
    }
    class Ob {
      constructor(DD) {
        this.deps = DD, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: CD,
          api: ID,
          core: pD
        } = DD, iD = () => DD.memory().buffer, fD = () => CD.isStopped ? null : CD.rings.cmd, bD = gb(CD, ((DD, CD) => pD.ZpD(DD, CD)), 0), QD = () => pD.vpD();
        let wD = null;
        this.replay = new hf({
          core: {
            npD: gb(CD, (DD => pD.npD(DD)), -1),
            ZpD: bD,
            vpD: QD,
            OpD: gb(CD, (DD => {
              pD.OpD(DD)
            }), void 0)
          },
          coreBuffer: iD,
          load: async () => (wD = await cD.e(62).then((() => cD(60704))), wD.loadReplayModule()),
          unload: () => {
            var DD;
            null === (DD = wD) || void 0 === DD || DD.unloadReplayModule()
          },
          markTrapped: DD => wD ? wD.markReplayTrapped(DD) : new Error(String(DD)),
          staleOr: (CD, cD) => DD.staleOr(vb, CD, cD),
          crash: CD => {
            DD.reportFault(vb, CD)
          }
        });
        let SD = null;
        this.recorder = new Fi({
          core: {
            gpD: gb(CD, (DD => pD.gpD(DD)), 0),
            BpD: gb(CD, (DD => pD.BpD(DD)), 0),
            ZpD: bD,
            vpD: QD
          },
          coreCommand: (DD, CD) => {
            var cD, ID;
            return null !== (cD = null === (ID = fD()) || void 0 === ID ? void 0 : ID.writeCmd(DD, 0, CD)) && void 0 !== cD && cD
          },
          coreBuffer: iD,
          load: async () => (SD = await mb(), SD.loadRecorderModule()),
          prefetch: () => {
            mb().then((DD => DD.prefetchRecorderModule())).catch((DD => {
              console.warn(`${Bb} the recorder module didn't prefetch, so a save loads it:`, DD)
            }))
          },
          unload: () => {
            var DD;
            null === (DD = SD) || void 0 === DD || DD.unloadRecorderModule()
          },
          markTrapped: DD => SD ? SD.markRecorderTrapped(DD) : new Error(String(DD)),
          memoryBytes: () => {
            var DD, CD;
            return null !== (DD = null === (CD = SD) || void 0 === CD ? void 0 : CD.recorderMemoryBytes()) && void 0 !== DD ? DD : 0
          },
          staleOr: (CD, cD) => DD.staleOr(Nb, CD, cD),
          crash: CD => {
            DD.reportFault(Nb, CD)
          },
          allowed: () => !0 === DD.options.get("canRecordReplays"),
          failed: nb,
          events: (DD, CD) => {
            this.runtime.recorderEvents(DD, CD)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: nb,
          unixNow: () => Date.now()
        });
        const BD = new Pp({
          core: {
            CpD: gb(CD, (DD => pD.CpD(DD)), 0),
            IpD: gb(CD, (() => {
              pD.IpD()
            }), void 0),
            Lo: gb(CD, (() => pD.Lo()), 0),
            cpD: gb(CD, (() => pD.cpD()), 0)
          },
          buffer: iD,
          apiView: () => ID.apiView,
          cmd: fD,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new qf({
          api: ID,
          cmd: fD,
          loadHook: xf,
          onError: DD => {
            console.warn(`${Bb} the recorded game's replay hooks:`, DD)
          }
        });
        const yD = new zp({
          client: BD,
          buffer: iD,
          setHoldDraws: DD => {
            CD.setHoldDraws(DD)
          },
          notify: op.f,
          onRecorderState: () => {
            var DD;
            null === (DD = (0, Np.f)()) || void 0 === DD || DD.recorderChanged()
          },
          onViewerChange: () => {
            var DD;
            null === (DD = (0, Np.f)()) || void 0 === DD || DD.viewerChanged()
          },
          onReplayOption: CD => {
            ! function(DD, CD) {
              var cD, ID;
              const pD = Wc.kb[CD.key];
              if (void 0 === pD) return;
              let iD = null !== (cD = CD.value) && void 0 !== cD ? cD : JSON.parse(JSON.stringify(null !== (ID = ib.e[pD]) && void 0 !== ID ? ID : null));
              if (null !== CD.value && CD.key < Wc.Lb.Environment && "string" === typeof iD) try {
                iD = JSON.parse(iD)
              } catch (fD) {
                return void console.warn(`${bb} a replay's ${pD} isn't JSON`, fD)
              }
              DD.applyNewClientOptions({
                [pD]: iD
              })
            }(DD.options, CD)
          },
          onReplayUiEvent: Sb,
          onReplayOpened: CD => {
            this.entityHooks.opened((0, UD.Vb)(CD)), DD.replayShaderPack(CD)
          },
          meshPending: () => {
            var DD, cD;
            return null !== (DD = null === (cD = CD.lastHeader) || void 0 === cD ? void 0 : cD.renderPending) && void 0 !== DD ? DD : 0
          },
          viewerOpen: vp.d,
          download: DD => {
            (0, tp.m)(DD)
          }
        });
        this.runtime = yD, ID.replay = yD.sink, (0, Np.u)(yD);
        const MD = new Gp({
          live: () => {
            var DD;
            return !CD.isStopped && !0 === (null === (DD = yD.currentViewer) || void 0 === DD ? void 0 : DD.inPlayback)
          },
          cmd: fD,
          dragScale: sp
        });
        this.freecam = MD, (0, Np.r)(MD), this.recordedOptions = function(DD, CD) {
          const cD = Wc.kb,
            ID = cD.map(((cD, ID) => CD.subscribe(cD, (CD => {
              DD.setOption(ID, Zb(CD))
            }))));
          return {
            sendAll() {
              cD.forEach(((cD, ID) => {
                DD.setOption(ID, Zb(CD.get(cD)))
              }))
            },
            stop() {
              for (const DD of ID) DD()
            }
          }
        }(yD.recorder, DD.options), this.stops = [(0, CI.j)((DD => {
          MD.flush();
          try {
            this.replay.beforeFrame(DD)
          } catch (CD) {
            this.deps.reportFault("replayFrame", CD)
          }
        })), (0, CI.z)(((DD, CD) => {
          try {
            this.recorder.afterFrame(), CD && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (cD) {
            this.deps.reportFault("recorderFrame", cD)
          }
          try {
            yD.afterFrame(DD)
          } catch (cD) {
            this.deps.reportFault("replayRuntime", cD)
          }
        })), ob(yD), () => {
          this.recordedOptions.stop()
        }, tb(yD.recorder), (0, Lp.k)((DD => {
          let {
            action: CD,
            down: cD
          } = DD;
          var ID;
          cD && (null === (ID = (0, Np.f)()) || void 0 === ID || ID.keyDown(CD))
        }))];
        const tD = () => {
          const DD = yD.currentViewer;
          return !0 === (null === DD || void 0 === DD ? void 0 : DD.isOpen) ? DD : null
        };
        (0, Zp.e)({
          open: (DD, CD) => this.open(DD, CD),
          replayKey: () => {
            var DD, CD;
            return null !== (DD = null === (CD = tD()) || void 0 === CD ? void 0 : CD.id) && void 0 !== DD ? DD : null
          },
          saveRefusal: () => {
            var DD, CD;
            return null !== (DD = null === (CD = tD()) || void 0 === CD ? void 0 : CD.saveRefusal) && void 0 !== DD ? DD : null
          },
          encode: () => {
            var DD, CD;
            return null !== (DD = null === (CD = tD()) || void 0 === CD ? void 0 : CD.save()) && void 0 !== DD ? DD : Promise.resolve(null)
          },
          fileHandle: () => {
            var DD, CD;
            return null !== (DD = null === (CD = yD.currentViewer) || void 0 === CD ? void 0 : CD.fileHandle) && void 0 !== DD ? DD : null
          },
          markSaved: (DD, CD) => {
            var cD;
            null === (cD = yD.currentViewer) || void 0 === cD || cD.markSaved(DD, CD)
          }
        })
      }
      netEvent(DD) {
        if ("connection" === DD.type)
          if (DD.phase === yD.E.Activated) {
            this.activeConn = DD.conn;
            const CD = this.deps.sessionInfo(DD.conn);
            null !== CD && (this.runtime.activated({
              lobbyType: (0, xD.p)(CD.lobbyName),
              gameNameWithVariation: CD.gameNameWithVariation,
              lobbyName: CD.lobbyName
            }), this.recordedOptions.sendAll())
          } else DD.phase !== yD.E.Left && DD.phase !== yD.E.Closed || DD.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const DD of this.stops) DD();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Np.n)() === this.runtime && (0, Np.u)(null), (0, Np.j)() === this.freecam && (0, Np.r)(null), (0, Zp.e)(Xb), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(DD, CD) {
        const {
          running: cD
        } = this.deps;
        if (cD.isStopped) throw new Error(op.c.coreStopped.text);
        if (DD.byteLength > 67108864) throw new Error(op.c.cantOpen.text);
        let ID;
        try {
          ID = await async function(DD) {
            const CD = await DD.loadViewer();
            return CD.inPlayback || (0, CI.K)().leaveGame(null), CD
          }(this.runtime)
        } catch (pD) {
          throw console.warn(`${Bb} the replay viewer didn't load`, pD), new Error(op.c.viewerLoadFailed.text)
        }
        if (cD.isStopped) throw new Error(op.c.coreStopped.text);
        await ID.open(DD, CD)
      }
    }
    var Pb = cD(1928);

    function Hb(DD, CD) {
      const {
        aux: cD,
        payload: ID
      } = function(DD) {
        return {
          aux: DD.reset ? yD.Zb.ResetFirst : 0,
          payload: xb(DD.changes)
        }
      }(CD);
      DD.queueOptions(cD, ID) && (CD.reset && Pb.d.reset(), Pb.d.apply(CD.changes))
    }
    const Ub = new TextEncoder;

    function xb(DD) {
      const CD = new qb;
      return Kb(CD, DD), CD.bytes()
    }
    class qb {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(DD) {
        if (this.len + DD <= this.buf.length) return;
        const CD = new Uint8Array(Math.max(2 * this.buf.length, this.len + DD));
        CD.set(this.buf.subarray(0, this.len)), this.buf = CD, this.view = new DataView(CD.buffer)
      }
      u8(DD) {
        this.room(1), this.buf[this.len++] = DD
      }
      tagged(DD, CD, cD) {
        this.room(1 + CD), this.buf[this.len++] = DD, 1 === CD ? this.view.setUint8(this.len, cD) : 2 === CD ? this.view.setUint16(this.len, cD) : this.view.setUint32(this.len, cD), this.len += CD
      }
      signed(DD, CD, cD) {
        this.room(1 + CD), this.buf[this.len++] = DD, 1 === CD ? this.view.setInt8(this.len, cD) : 2 === CD ? this.view.setInt16(this.len, cD) : this.view.setInt32(this.len, cD), this.len += CD
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

    function Jb(DD, CD, cD, ID, pD, iD, fD) {
      CD < ID ? DD.u8(cD | CD) : null !== pD && CD < 256 ? DD.tagged(pD, 1, CD) : CD < 65536 ? DD.tagged(iD, 2, CD) : DD.tagged(fD, 4, CD)
    }

    function Kb(DD, CD) {
      switch (typeof CD) {
        case "undefined":
          return void DD.raw(ab);
        case "boolean":
          return void DD.u8(CD ? 195 : 194);
        case "number":
          return void
          function(DD, CD) {
            CD >>> 0 === CD ? CD < 128 ? DD.u8(CD) : CD < 256 ? DD.tagged(204, 1, CD) : CD < 65536 ? DD.tagged(205, 2, CD) : DD.tagged(206, 4, CD) : (CD | 0) === CD ? CD >= -32 ? DD.u8(255 & CD) : CD >= -128 ? DD.signed(208, 1, CD) : CD >= -32768 ? DD.signed(209, 2, CD) : DD.signed(210, 4, CD) : DD.f64(CD)
          }(DD, CD);
        case "string": {
          const cD = Ub.encode(CD);
          return Jb(DD, cD.length, 160, 32, 217, 218, 219), void DD.raw(cD)
        }
        case "object":
          break;
        default:
          return void DD.u8(192)
      }
      if (null === CD) DD.u8(192);
      else if (Array.isArray(CD)) {
        Jb(DD, CD.length, 144, 16, null, 220, 221);
        for (const cD of CD) Kb(DD, cD)
      } else if (CD instanceof Uint8Array) Jb(DD, CD.length, 0, 0, 196, 197, 198), DD.raw(CD);
      else {
        const cD = Object.keys(CD);
        Jb(DD, cD.length, 128, 0, null, 222, 223);
        for (const ID of cD) Kb(DD, ID), Kb(DD, CD[ID])
      }
    }
    const ab = new Uint8Array([212, 0, 0]);
    var Vb = cD(41737),
      zb = cD(41741),
      jb = cD(40112),
      lb = cD(40126),
      Lb = cD(3529);
    const Tb = [1e3, 3e3, 9e3];
    class Gb {
      constructor(DD) {
        this.host = DD, this.sets = new Map, this.table = [], this.generation = 0, this.Lt = !1
      }
      onEvent(DD) {
        const CD = function(DD) {
          if (DD.byteLength !== yD.hd) return null;
          const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
          return {
            want: CD.getUint16(0, !0),
            release: CD.getUint16(2, !0)
          }
        }(DD);
        CD && !this.Lt && (CD.release !== yD.id && this.release(CD.release), CD.want !== yD.id && this.want(CD.want))
      }
      reset(DD) {
        if (!this.Lt) {
          for (const [DD, CD] of this.sets) "ready" === CD.state && this.releaseAll(CD.distinct), this.sets.delete(DD);
          this.table = DD, this.generation++
        }
      }
      dispose() {
        if (this.Lt) return;
        this.Lt = !0, this.generation++, this.table = [];
        const DD = [...this.sets.values()];
        this.sets.clear();
        let CD = null;
        for (const ID of DD)
          for (const DD of "ready" === ID.state ? ID.distinct : []) try {
            this.host.QcD(DD)
          } catch (cD) {
            CD ??= {
              error: cD
            }
          }
        if (CD) throw CD.error
      }
      isReady(DD) {
        var CD;
        return "ready" === (null === (CD = this.sets.get(DD)) || void 0 === CD ? void 0 : CD.state)
      }
      want(DD) {
        const CD = this.sets.get(DD);
        if ("loading" === (null === CD || void 0 === CD ? void 0 : CD.state)) return CD.wanted = !0, void this.capAnswer(DD, CD);
        if ("ready" === (null === CD || void 0 === CD ? void 0 : CD.state)) return void this.host.sendReady(kb(DD, CD.images, CD.size));
        const cD = this.table[DD];
        if (!cD || 1 !== cD.urls.length && cD.urls.length !== Wc._b.CubeFaces) return this.host.sendReady(db(DD)), void this.host.onLoadFailed(DD, "", new Error(`no image set ${DD}`));
        const ID = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(DD, ID), this.load(DD, cD, ID, this.generation, 0), this.capAnswer(DD, ID)
      }
      capAnswer(DD, CD) {
        this.host.wait(4e3, (() => {
          this.sets.get(DD) === CD && CD.wanted && this.host.sendReady(db(DD))
        }))
      }
      load(DD, CD, cD, ID, pD) {
        const iD = [...new Set(CD.urls)];
        Promise.allSettled(iD.map((DD => this.host.loadImage(DD, CD.orientation)))).then((fD => {
          const bD = fD.flatMap((DD => "fulfilled" === DD.status ? [DD.value] : [])),
            QD = ID === this.generation && this.sets.get(DD) === cD,
            wD = fD.findIndex((DD => "rejected" === DD.status));
          if (!QD || !cD.wanted) return this.Lt ? void this.releaseAfterDispose(bD.map(Rb)) : (this.releaseAll(bD.map(Rb)), void(QD && this.sets.delete(DD)));
          wD < 0 ? this.loaded(DD, CD, iD, bD) : (this.releaseAll(bD.map(Rb)), this.host.sendReady(db(DD)), pD < Tb.length ? this.host.wait(Tb[pD], (() => {
            ID === this.generation && this.sets.get(DD) === cD && (cD.wanted ? this.load(DD, CD, cD, ID, pD + 1) : this.sets.delete(DD))
          })) : (this.sets.delete(DD), this.host.onLoadFailed(DD, iD[wD], fD[wD].reason)))
        }))
      }
      loaded(DD, CD, cD, ID) {
        const [pD] = ID, iD = [pD.width, pD.height], fD = ID.every((DD => DD.width === iD[0] && DD.height === iD[1])), bD = CD.urls.length === Wc._b.CubeFaces;
        if (!fD || iD[0] <= 0 || iD[1] <= 0 || iD[0] > 65535 || iD[1] > 65535 || bD && iD[0] !== iD[1]) {
          this.releaseAll(ID.map(Rb)), this.sets.delete(DD), this.host.sendReady(db(DD));
          const cD = ID.map((DD => `${DD.width}x${DD.height}`));
          return void this.host.onLoadFailed(DD, CD.urls[0], new Error(`set ${DD}'s images can't make its texture: ${cD.join(", ")}`))
        }
        const QD = CD.urls.map((DD => ID[cD.indexOf(DD)].id)),
          wD = ID.map(Rb);
        this.sets.set(DD, {
          state: "ready",
          images: QD,
          distinct: wD,
          size: iD
        }), this.host.sendReady(kb(DD, QD, iD))
      }
      release(DD) {
        const CD = this.sets.get(DD);
        "loading" === (null === CD || void 0 === CD ? void 0 : CD.state) ? CD.wanted = !1: "ready" === (null === CD || void 0 === CD ? void 0 : CD.state) && (this.releaseAll(CD.distinct), this.sets.delete(DD))
      }
      releaseAll(DD) {
        for (const CD of DD) this.host.QcD(CD)
      }
      releaseAfterDispose(DD) {
        for (const CD of DD) try {
          this.host.QcD(CD)
        } catch {}
      }
    }

    function Rb(DD) {
      return DD.id
    }

    function kb(DD, CD, cD) {
      const ID = new Uint8Array(Wc._b.SkyImagesReadyBytes),
        pD = new DataView(ID.buffer);
      return pD.setUint16(0, DD, !0), pD.setUint16(2, CD.length, !0), pD.setUint16(4, cD[0], !0), pD.setUint16(6, cD[1], !0), CD.slice(0, Wc._b.CubeFaces).forEach(((DD, CD) => {
        pD.setUint32(8 + 4 * CD, DD, !0)
      })), ID
    }

    function db(DD) {
      const CD = new Uint8Array(Wc._b.SkyImagesReadyBytes),
        cD = new DataView(CD.buffer);
      return cD.setUint16(0, DD, !0), cD.setUint16(2, Wc._b.Failed, !0), CD
    }
    let Yb = Promise.resolve();
    async function Wb(DD, CD) {
      let cD;
      try {
        cD = await (0, Lb.I)(DD)
      } catch (iD) {
        throw new jb.b("fetch", DD, {
          cause: iD
        })
      }
      const ID = Yb.then((() => async function(DD, CD) {
        const cD = new Blob([DD.slice()]);
        let ID = await createImageBitmap(cD, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: CD
        });
        const pD = 1024 / Math.max(ID.width, ID.height);
        if (pD < 1) {
          const DD = ID;
          try {
            ID = await createImageBitmap(DD, {
              resizeWidth: Math.max(1, Math.round(DD.width * pD)),
              resizeHeight: Math.max(1, Math.round(DD.height * pD)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            DD.close()
          }
        }
        return ID
      }(cD, CD)));
      let pD;
      Yb = ID.catch((() => {}));
      try {
        pD = await ID
      } catch (iD) {
        throw new jb.b("decode", DD, {
          cause: iD
        })
      }
      return {
        id: (0, jb.p)(pD),
        width: pD.width,
        height: pD.height
      }
    }
    var sb = cD(2952),
      Eb = cD(33724);
    const eb = sb.i.length;

    function ub(DD) {
      const CD = [],
        cD = [];
      sb.i.forEach(((ID, pD) => {
        var iD;
        const fD = null !== (iD = hb(DD[ID])) && void 0 !== iD ? iD : Eb.i[ID];
        "custom" === fD.type ? (cD.push({
          id: pD,
          kind: Wc._b.KindCustom,
          set: CD.length,
          earth: null
        }), CD.push({
          urls: [fD.px, fD.py, fD.pz, fD.nx, fD.ny, fD.nz],
          orientation: "none"
        })) : cD.push({
          id: pD,
          kind: Wc._b.KindEarth,
          set: 0,
          earth: fD
        })
      }));
      const ID = hb(DD.earth);
      "earth" === (null === ID || void 0 === ID ? void 0 : ID.type) && cD.push({
        id: eb,
        kind: Wc._b.KindEarth,
        set: 0,
        earth: ID
      });
      const pD = CD.length;
      CD.push({
        urls: Eb.e.map((DD => Eb.f + DD)),
        orientation: "none"
      }), CD.push({
        urls: [Eb.g],
        orientation: "flipY"
      }), CD.push({
        urls: [Eb.b],
        orientation: "flipY"
      });
      const iD = new Uint8Array(Wc._b.SkyTableHeaderBytes + cD.length * Wc._b.SkyTableEntryBytes),
        fD = new DataView(iD.buffer);
      return fD.setUint16(0, pD, !0), fD.setUint16(2, pD + 1, !0), fD.setUint16(4, pD + 2, !0), fD.setUint16(6, cD.length, !0), cD.forEach(((DD, CD) => {
        const cD = Wc._b.SkyTableHeaderBytes + CD * Wc._b.SkyTableEntryBytes;
        fD.setUint16(cD, DD.id, !0), fD.setUint8(cD + 2, DD.kind);
        const ID = cD + 4;
        DD.earth ? function(DD, CD, cD) {
          const ID = DD;
          let pD = 0,
            iD = 0;
          for (const [fD, bD] of rb) {
            const DD = ID[fD];
            "number" === typeof DD && Number.isFinite(DD) && (CD.setFloat32(cD + 4 * bD, DD, !0), pD |= 1 << bD)
          }
          for (const [fD, bD, QD] of Ab) {
            const DD = ID[fD];
            Array.isArray(DD) && 3 === DD.length && DD.every((DD => "number" === typeof DD && Number.isFinite(DD))) && (DD.forEach(((DD, ID) => {
              CD.setFloat32(cD + QD + 4 * ID, DD, !0)
            })), pD |= bD)
          }
          Fb.forEach(((DD, iD) => {
            let [fD, bD] = DD;
            const QD = ID[fD];
            "number" === typeof QD && Number.isFinite(QD) && (CD.setFloat32(cD + Wc.l.CameraOffsetAt + 4 * iD, QD, !0), pD |= bD)
          }));
          for (const [fD, bD] of DQ) {
            const DD = ID[fD];
            null !== DD && void 0 !== DD && (pD |= bD, DD && (iD |= bD >>> 14))
          }
          CD.setUint32(cD + Wc.l.PresentAt, pD, !0), CD.setUint8(cD + Wc.l.FlagsAt, iD)
        }(DD.earth, fD, ID) : fD.setUint16(ID, DD.set, !0)
      })), {
        payload: iD,
        sets: CD
      }
    }

    function hb(DD) {
      if ("object" !== typeof DD || null === DD) return null;
      const CD = DD;
      if ("earth" === CD.type) return DD;
      return "custom" === CD.type && ["px", "py", "pz", "nx", "ny", "nz"].every((DD => {
        const cD = CD[DD];
        return "string" === typeof cD && cD.length > 0
      })) ? DD : null
    }
    const rb = [
        ["inclination", Wc.l.Inclination],
        ["turbidity", Wc.l.Turbidity],
        ["luminance", Wc.l.Luminance],
        ["rayleigh", Wc.l.Rayleigh],
        ["mieCoefficient", Wc.l.MieCoefficient],
        ["mieDirectionalG", Wc.l.MieDirectionalG],
        ["distance", Wc.l.Distance],
        ["azimuth", Wc.l.Azimuth]
      ],
      Ab = [
        ["sunPosition", Wc.l.SunPosition, Wc.l.SunPositionAt],
        ["up", Wc.l.Up, Wc.l.UpAt],
        ["vertexTint", Wc.l.VertexTint, Wc.l.VertexTintAt]
      ],
      Fb = [
        ["xCameraOffset", Wc.l.CameraOffsetX],
        ["yCameraOffset", Wc.l.CameraOffsetY],
        ["zCameraOffset", Wc.l.CameraOffsetZ]
      ],
      DQ = [
        ["useSunPosition", Wc.l.UseSunPosition],
        ["dithering", Wc.l.Dithering],
        ["infiniteDistance", Wc.l.InfiniteDistance]
      ];

    function CQ(DD, CD, cD) {
      const ID = new IQ({
        writeCmd: DD,
        warn: CD,
        followPack: cQ(cD, CD)
      });
      return ID.start(), ID
    }

    function cQ(DD, CD) {
      return cD => {
        let ID = () => {};
        const pD = DD((DD => {
          ID(), ID = () => {}, null !== DD ? ID = DD.subscribe((DD => {
            cD(function(DD, CD, cD) {
              if ("object" !== typeof DD || null === DD) return null;
              const ID = DD.skyBoxes;
              if ("object" !== typeof ID || null === ID) return null;
              if ("player" === CD) return ID;
              return Object.fromEntries(Object.entries(ID).filter((DD => {
                let [CD, ID] = DD;
                return !! function(DD) {
                  if ("object" !== typeof DD || null === DD) return !1;
                  return "earth" === DD.type || Object.entries(DD).every((DD => {
                    let [CD, cD] = DD;
                    return "type" === CD || ("" === (ID = cD) || null !== function(DD) {
                      var CD, cD, ID;
                      return "string" !== typeof DD ? null : null !== (CD = null === (cD = pQ.exec(DD)) || void 0 === cD || null === (ID = cD.groups) || void 0 === ID ? void 0 : ID.base64) && void 0 !== CD ? CD : null
                    }(ID));
                    var ID
                  }))
                }(ID) || (cD(`Ignoring texture pack skybox ${CD}, whose faces are not all data URLs`, null), !1)
              })))
            }(DD.pack, null === DD.gameSource ? "player" : "customGame", CD))
          })) : cD(null)
        }));
        return () => {
          pD(), ID()
        }
      }
    }
    class IQ {
      constructor(DD) {
        var CD, cD, ID;
        this.host = DD, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Lt = !1, this.wait = null !== (CD = DD.wait) && void 0 !== CD ? CD : (DD, CD) => {
          setTimeout(CD, DD)
        }, this.loader = new Gb({
          loadImage: null !== (cD = DD.loadImage) && void 0 !== cD ? cD : Wb,
          QcD: null !== (ID = DD.QcD) && void 0 !== ID ? ID : jb.q,
          sendReady: DD => {
            this.queue.push({
              kind: Wc._b.SkyImagesReady,
              payload: DD
            })
          },
          onLoadFailed: (CD, cD, ID) => {
            DD.warn(`sky image set ${CD} (${cD}) didn't load: the last sky stays`, ID)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(lb.c, (() => {
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
        this.Lt = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(DD) {
        if (this.Lt) return;
        const CD = ub(DD);
        var cD, ID;
        this.written && (cD = this.written, ID = CD, cD.payload.length === ID.payload.length && cD.payload.every(((DD, CD) => DD === ID.payload[CD])) && cD.sets.length === ID.sets.length && cD.sets.every(((DD, CD) => {
          const cD = ID.sets[CD];
          return DD.orientation === cD.orientation && DD.urls.length === cD.urls.length && DD.urls.every(((DD, CD) => DD === cD.urls[CD]))
        }))) || (this.written = CD, this.loader.reset(CD.sets), this.queue = this.queue.filter((DD => DD.kind !== Wc._b.SkyImagesReady)), this.queue.push({
          kind: Wc._b.SkyTable,
          payload: CD.payload
        }))
      }
    }
    const pQ = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var iQ = cD(2700),
      fQ = cD(2782),
      bQ = cD(302),
      QQ = cD(183),
      wQ = cD(2708),
      SQ = cD(2717),
      BQ = cD(280),
      yQ = cD(288),
      MQ = cD(2729),
      tQ = cD(2741),
      ZQ = cD(2752),
      oQ = cD(107),
      vQ = cD(298),
      NQ = cD(39900);
    class gQ {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, lp.l)(oI.Q, (DD => {
          this.onReply((0, jp.g)(oI.Q, DD), performance.now())
        }))
      }
      onFrame(DD, CD) {
        null === this.id ? this.id = DD : DD !== this.id && (this.id = DD, this.sentMs = document.hidden ? null : CD)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(DD, CD) {
        DD === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(CD - this.sentMs), this.sentMs = null)
      }
      take() {
        const DD = this.roundTripMs;
        return this.roundTripMs = null, DD
      }
      stop() {
        this.stopReplies()
      }
    }
    class XQ {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(DD, CD, cD, ID) {
        const pD = DD - this.sampled >>> 0,
          iD = CD - this.timed >>> 0,
          fD = cD - this.frameUs >>> 0,
          bD = this.primed;
        return this.sampled = DD, this.timed = CD, this.frameUs = cD, this.primed = !0, !(!bD || pD > 64 || iD > 64) && (ID && fD <= 1e6 * iD && (this.windowTimed += iD, this.windowUs += fD), ID && pD > 0)
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
    const mQ = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class nQ {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(DD, CD) {
        const cD = Math.min(4096, this.count + CD);
        this.samples.fill(DD, this.count, cD), this.count = cD
      }
      clear() {
        this.count = 0
      }
      take(DD) {
        const CD = this.count;
        if (this.count = 0, CD < 30) return null;
        const cD = this.samples.subarray(0, CD).sort();
        return DD.map((DD => cD[Math.min(CD - 1, Math.floor(DD * CD))]))
      }
    }
    class OQ {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new nQ, this.inJoin = !1, this.rose = !1, this.joinLags = new nQ, this.joinLagP90Ms = null
      }
      onFrame(DD, CD, cD, ID, pD) {
        const iD = DD.headerWord(Wc.A.Pacing),
          fD = DD.headerWord(Wc.A.PacingLagUs),
          bD = (iD >>> Wc.Q.LagsShift) - (this.word >>> Wc.Q.LagsShift) & Wc.Q.CountMask,
          QD = (iD >>> Wc.Q.SwitchesShift) - (this.word >>> Wc.Q.SwitchesShift) & Wc.Q.CountMask,
          wD = bD > 0 ? (fD - this.lagUs >>> 0) / bD / 1e3 : 0,
          SD = this.primed && bD <= 64 && QD <= 2 && wD <= 6e4;
        if (this.rose = 0 !== (iD & ~this.word & Wc.Q.Joining), this.word = iD, this.lagUs = fD, this.primed = !0, 0 !== (iD & Wc.Q.Tiered)) {
          if (0 !== (iD & Wc.Q.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && SD && ID && bD > 0 && this.joinLags.add(wD, bD);
          else if (this.inJoin) {
            var BD, yD;
            this.inJoin = !1, this.joinLagP90Ms = null !== (BD = null === (yD = this.joinLags.take([.9])) || void 0 === yD ? void 0 : yD[0]) && void 0 !== BD ? BD : null
          }
          if (pD) {
            if (SD && (this.switches += QD, bD > 0 && this.lags.add(wD, bD)), cD) {
              if (this.lastDrawnMs >= 0 && CD - this.lastDrawnMs <= 250) {
                const DD = CD - this.lastDrawnMs;
                this.tieredMs += DD, (iD & Wc.Q.AheadMask) > 0 && (this.pacedMs += DD)
              }
              this.lastDrawnMs = CD
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(DD) {
        const CD = this.takeWindow(),
          cD = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, DD ? {
          ...CD,
          joinLagP90Ms: cD
        } : {
          ...mQ,
          joinLagP90Ms: cD
        }
      }
      unsent(DD) {
        this.joinLagP90Ms ??= DD.joinLagP90Ms
      }
      takeWindow() {
        var DD, CD;
        const cD = this.tieredMs >= 2e3,
          ID = this.lags.take([.5, .9]),
          pD = {
            pacedShare: cD ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: cD ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (DD = null === ID || void 0 === ID ? void 0 : ID[0]) && void 0 !== DD ? DD : null,
            lagP90Ms: null !== (CD = null === ID || void 0 === ID ? void 0 : ID[1]) && void 0 !== CD ? CD : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, pD
      }
    }
    var PQ = cD(8976),
      HQ = cD(2675),
      UQ = cD(39987),
      xQ = cD(8967),
      qQ = cD(2719),
      JQ = cD(2696);
    const KQ = {
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

    function aQ(DD) {
      return new VQ(DD)
    }
    class VQ {
      constructor(DD) {
        this.shell = DD, this.tracker = new SQ.d, this.gpu = new XQ, this.pacing = new OQ, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new gQ, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, PQ.b)(DD.backend, DD.canvas, DD.adapterVendor), this.tracker.start((() => !DD.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, qQ.d)("wasm", (() => {
          const {
            n: CD,
            sampleCount: cD
          } = (0, UQ.d)();
          return `${DD.backend}, quality steps aim at up to ${JQ.c.target.maxFps} fps, pixel n ${CD}, msaa ${cD}`
        }), (DD => {
          this.frameDebug = DD
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(DD) {
        var CD;
        this.tracker.onAnimationFrame(DD), null === (CD = this.frameDebug) || void 0 === CD || CD.animationFrame()
      }
      frameRan(DD, CD, cD, ID) {
        var pD;
        this.ping.onFrame(DD.headerWord(Wc.A.PingSent), cD);
        const iD = this.tracker;
        this.pacing.onFrame(DD, CD, "drawn" === ID, !document.hidden, iD.isSampling());
        const fD = DD.headerWord(Wc.A.TickUs) / 1e3 + (0, CI.N)();
        iD.BX(fD), null === (pD = this.frameDebug) || void 0 === pD || pD.wasmFrame(DD, CD, cD, "drawn" === ID, iD.isSampling(), fD, (0, xQ.g)());
        const bD = Math.max(0, cD - CD - fD);
        if ("drawn" !== ID) return void("paced" === ID && (this.pacedCpuMs += bD));
        this.followGame(), iD.onFrameStart(CD);
        this.gpu.onFrame(DD.headerWord(Wc.A.GpuSampled), DD.headerWord(Wc.A.GpuTimed), DD.headerWord(Wc.A.GpuFrameUs), iD.isSampling()) && iD.onGpuSampleStarted(), iD.onFrameCpu(bD + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(CD)
      }
      stop() {
        for (const DD of this.timers) clearInterval(DD);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const DD = this.shell.joinedGame();
        return DD !== this.game && (this.game = DD, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== DD
      }
      countFpsFrame(DD) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = DD
        }
        this.fpsFrames++;
        const CD = DD - this.fpsSpanStartMs;
        if (!(CD < ZQ.e)) {
          if (!document.hidden) {
            const DD = 1e3 * this.fpsFrames / CD;
            this.firstSpanFps ??= DD, this.initialFps = this.firstSpanFps, this.fpsOverTime = DD
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = DD
        }
      }
      flush() {
        const DD = this.followGame(),
          {
            cpuFrameMs: CD,
            refreshHz: cD,
            cpuBottleneck: pD,
            frameIntervalCv: iD,
            ...fD
          } = this.tracker.snapshotAndReset(),
          bD = this.shell.inGame(),
          QD = bD && this.inGameAtLastFlush,
          wD = QD ? fD : wQ.f,
          SD = this.pacing.snapshotAndReset(QD);
        if (this.inGameAtLastFlush = bD, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !DD) return void this.pacing.unsent(SD);
        const BD = performance.now(),
          MD = (0, tQ.t)((0, tQ.p)(BD), this.unsentPage),
          ZD = function(DD, CD, cD, pD, iD, fD, bD, QD) {
            var wD, SD, BD, yD;
            const MD = {},
              {
                canvas: tD
              } = DD,
              ZD = (0, MQ.b)({
                refreshHz: CD.refreshHz,
                msaa: DD.msaa(),
                autoMsaaOff: (0, xQ.d)()
              });
            for (const oD of (0, fQ.i)()) {
              const vD = oD.name;
              let ND;
              if ((0, bQ.o)(vD)) ND = (0, tQ.b)(vD);
              else if ((0, tQ.h)(vD)) ND = QD[vD];
              else if ((0, MQ.d)(vD)) ND = ZD[vD];
              else switch (vD) {
                case "fps":
                  ND = pD;
                  break;
                case "Eb":
                  ND = iD;
                  break;
                case "CQ":
                  ND = (0, HQ.w)((0, UQ.d)().n);
                  break;
                case "cQ":
                  ND = Math.max(tD.width, tD.height);
                  break;
                case "IQ":
                  ND = Math.min(tD.width, tD.height);
                  break;
                case "pQ":
                  ND = navigator.hardwareConcurrency || null;
                  break;
                case "iQ":
                  ND = (0, dp.getWebGpuSupported)();
                  break;
                case "fQ":
                  ND = null === DD.fallbackReason ? null : KQ[DD.fallbackReason];
                  break;
                case "bQ":
                  ND = CD.cpuFrameMs;
                  break;
                case "QQ":
                  ND = CD.refreshHz;
                  break;
                case "wQ":
                  ND = CD.cpuBottleneck;
                  break;
                case "SQ":
                  ND = CD.frameIntervalCv;
                  break;
                case "BQ":
                  ND = CD.frameMs;
                  break;
                case "yQ":
                  ND = CD.tickMs;
                  break;
                case "oQ":
                  ND = CD.mainBusyShare;
                  break;
                case "vQ":
                  ND = CD.mainProbeDelayMs;
                  break;
                case "MQ":
                  ND = CD.longAnimationFramesPerMin;
                  break;
                case "tQ":
                  ND = CD.longAnimationFrameTimeShare;
                  break;
                case "ZQ":
                  ND = CD.longAnimationFrameScriptShare;
                  break;
                case "NQ":
                  ND = CD.gpuPassMs;
                  break;
                case "gQ":
                  ND = CD.gpuSubmitToDoneMs;
                  break;
                case "XQ":
                  ND = cD.pacedShare;
                  break;
                case "mQ":
                  ND = cD.switchesPerHour;
                  break;
                case "nQ":
                  ND = cD.lagP50Ms;
                  break;
                case "OQ":
                  ND = cD.lagP90Ms;
                  break;
                case "PQ":
                  ND = cD.joinLagP90Ms;
                  break;
                case "LQ":
                  ND = (0, iQ.k)(fD);
                  break;
                case "DQ":
                  ND = bD;
                  break;
                case "HQ":
                case "UQ":
                case "xQ":
                case "qQ":
                case "JQ":
                case "KQ":
                case "aQ":
                case "VQ":
                case "zQ":
                case "jQ":
                case "lQ":
                case "TQ":
                case "GQ":
                case "RQ":
                case "kQ":
                  ND = null;
                  break;
                case "Cw":
                  ND = (0, dp.getPlatformType)();
                  break;
                case "Iw":
                  ND = (0, dp.getGpuVendor)();
                  break;
                case "pw":
                  ND = NQ.d[DD.backend];
                  break;
                case "iw":
                  ND = (0, oQ.d)();
                  break;
                case "fw":
                  ND = (0, dp.getOperatingSystem)();
                  break;
                case "bw":
                  ND = (0, dp.getTrafficSource)();
                  break;
                case "Qw":
                  ND = null !== (wD = ID.d.get("gameEntrySource")) && void 0 !== wD ? wD : QQ.g;
                  break;
                case "ww":
                  ND = CD.frameLimiter;
                  break;
                case "Sw":
                  ND = (0, BQ.e)();
                  break;
                case "Bw":
                  ND = null !== (SD = (0, yQ.e)()) && void 0 !== SD ? SD : QQ.g;
                  break;
                case "yw":
                  ND = (0, BQ.b)(tD.width, tD.height);
                  break;
                case "Mw":
                  ND = (0, fQ.m)(-(new Date).getTimezoneOffset());
                  break;
                case "ow":
                  ND = null !== (BD = DD.fallbackReason) && void 0 !== BD ? BD : QQ.g;
                  break;
                case "Xw":
                  ND = "ready";
                  break;
                case "mw":
                  ND = (0, dp.getSoftwareRenderer)();
                  break;
                case "Zw":
                  ND = null !== DD.shaderPackReach() ? "true" : "false";
                  break;
                case "nw":
                  ND = null !== (yD = DD.shaderPackReach()) && void 0 !== yD && yD.sceneDepth ? "true" : "false";
                  break;
                case "Ow": {
                  const CD = DD.shaderPackReach();
                  ND = null !== CD && void 0 !== CD && CD.sunShadow ? "all" : null !== CD && void 0 !== CD && CD.airShadow ? "air" : "none";
                  break
                }
                case "Pw":
                  ND = vQ.u;
                  break;
                case "tw":
                case "Nw":
                case "gw":
                  ND = QQ.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${vD}`)
              }
              if (void 0 === ND) throw new Error(`Metric ${vD} has no value`);
              MD[vD] = ND
            }
            return MD
          }(this.shell, {
            cpuFrameMs: CD,
            refreshHz: cD,
            cpuBottleneck: pD,
            frameIntervalCv: iD,
            ...wD
          }, SD, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), MD);
        if (! function(DD, CD, cD) {
            return (0, dC.c)(), DD(tD.m.Send, CD, cD)
          }(this.shell.writeCmd, yD.ed, function(DD) {
            const CD = (0, lD.g)((0, sC.i)(DD)),
              cD = new Uint8Array(tD.ne.BYTES + CD.length);
            return new DataView(cD.buffer).setUint16(0, sC.e.AnalyticsUpdate, !0), cD.set(CD, tD.ne.BYTES), cD
          }(ZD))) return this.unsentPage = MD, this.pacing.unsent(SD), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, iQ.h), (0, tQ.n)(ZD, "wasm", BD)
      }
    }
    var zQ = cD(38901);

    function jQ(DD, CD, cD) {
      const ID = new Map;
      return (0, zQ.e)(((DD, cD, ID) => CD.HS(DD, cD, ID)), ((CD, cD, pD) => {
        const iD = `${CD},${cD},${pD}`;
        return ID.has(iD) || ID.set(iD, (0, lC.d)(DD, CD, cD, pD)), ID.get(iD)
      }), cD)
    }
    var lQ = cD(38904),
      LQ = cD(39789);

    function TQ(DD) {
      const CD = null !== DD && 0 !== (tD.s.playerFlags(DD.api.apiView, 0) & tD.Zd.CursorAim);
      CD !== (0, LQ.l)() && (0, LQ.G)(CD, null !== DD)
    }

    function GQ(DD) {
      return (0, ZI.e)(oI.L, DD)
    }
    const RQ = new iD.e((DD => cD(41743)(`./${DD}/${DD}Client`)));
    let kQ = null,
      dQ = null;
    async function YQ(DD) {
      kQ ??= cD.e(27).then((() => cD(38470))).then((DD => {
        dQ = DD.createDefaultClientPlugins
      }), (DD => {
        throw kQ = null, DD
      })), await Promise.all([RQ.load(DD), kQ])
    }

    function WQ(DD) {
      DD.load(new zC(RI, new YI))
    }
    let sQ = !1;
    const EQ = new WeakMap;

    function eQ(DD) {
      try {
        DD()
      } catch (CD) {
        console.error("[bloxd-wasm-client] a session-end step failed", CD)
      }
    }

    function uQ(DD, CD) {
      ! function() {
        var DD, CD;
        TI.Howler.volume();
        const cD = TI.Howler;
        null === (DD = cD._autoResume) || void 0 === DD || DD.call(cD), null === (CD = cD._autoSuspend) || void 0 === CD || CD.call(cD)
      }(), CD.audio.prepare();
      const cD = new XD(CD.core, CD.memory, CD.audio);
      let iD;
      try {
        iD = new Bp(cD, CD.options)
      } catch (yD) {
        return DD.crash(Mp.A, yD), null
      }(0, QD.c)(yp(cD, iD));
      const SD = new Ob({
        running: DD,
        api: cD,
        core: CD.core,
        memory: CD.memory,
        staleOr: CD.staleOr,
        reportFault: CD.reportReplayFault,
        options: CD.options,
        sessionInfo: CD.sessionInfo,
        replayShaderPack: CD.replayShaderPack
      });
      (0, CI.B)();
      const BD = new VI({
        api: cD,
        tables: iD,
        sessionInfo: CD.sessionInfo,
        gameFactory: DD => RQ.loadedFactory(DD),
        defaultPlugins: (DD, CD, cD, ID) => {
          if (null === dQ) throw new Error("The default plugins started before they loaded");
          return dQ(DD, CD, cD, ID)
        },
        serverOptions: CD.options,
        onNetEvent: DD => {
          SD.netEvent(DD), CD.onNetEvent(DD)
        },
        setLocalOptions: CD => {
          Hb(DD, {
            changes: CD,
            reset: !1
          })
        },
        playSound: (DD, cD, ID, pD, iD, fD, bD) => CD.audio.playGame(DD, cD, ID, pD, iD, fD, bD),
        onSessionEnd: () => {
          eQ(pD.l), eQ(rI), eQ((() => {
            ID.d.set({
              openInGameMenuName: null
            })
          })), eQ((() => {
            CD.audio.cancelPreload()
          }))
        },
        beforeWrite: CD.beforeWrite,
        beforeOp: CD.beforeOp,
        cameraScreen: hI,
        showCameraFacing: AI,
        onEventOverflow: CD.onEventOverflow,
        screenBandY: bD.l,
        replayEntities: SD.entityHooks,
        hasPackModel: CD.hasPackModel
      });
      return BD.attach(DD), EQ.set(BD, SD), LI(BD.items, CD.audio),
        function(DD) {
          DD.setClientFreeCameraGrant("isDev", !1);
          const CD = CD => {
            DD.setClientFreeCameraGrant("hasDeveloperRank", CD.playerHasRank("developer"))
          };
          (0, fD.k)("userContextUpdated", CD)
        }(BD), sQ || (sQ = !0, (0, fD.k)("appManagerUpdated|openInGameMenuName", (DD => {
          !DD && (0, wD.i)().includes(wD.e) && (0, wD.l)(wD.e)
        }))), BD
    }

    function hQ(DD) {
      try {
        DD.closeGame()
      } finally {
        var CD;
        null === (CD = EQ.get(DD)) || void 0 === CD || CD.stop(), EQ.delete(DD)
      }
    }
  },
  39900: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    const ID = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39913: (DD, CD, cD) => {
    function ID() {
      return cD(39921)
    }

    function pD() {
      return cD(39929)
    }

    function iD(DD) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(DD)
    }
    cD.d(CD, {
      b: () => iD,
      d: () => ID,
      e: () => pD
    })
  },
  39872: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      h: () => fD
    });
    const ID = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function pD(DD) {
      if (DD instanceof WebAssembly.RuntimeError) return !0;
      const CD = DD instanceof Error ? DD.stack : void 0;
      return "string" === typeof CD && ID.test(CD)
    }
    const iD = 500;

    function fD(DD) {
      let CD = "[object Object]";
      try {
        CD = String(DD)
      } catch {}
      if ("[object Object]" !== CD) return CD;
      try {
        var cD, ID;
        return null !== (cD = null === (ID = JSON.stringify(DD)) || void 0 === ID ? void 0 : ID.slice(0, iD)) && void 0 !== cD ? cD : CD
      } catch {
        return CD
      }
    }
  },
  41743: (DD, CD, cD) => {
    var ID = {
      "./bedwars/bedwarsClient": [38569, 9],
      "./bridgeBattle/bridgeBattleClient": [38577, 10],
      "./buildAFactory2/buildAFactory2Client": [37865, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [38586, 12],
      "./clutch/clutchClient": [38592, 13],
      "./containmentBreach/containmentBreachClient": [38598, 14],
      "./cooking/cookingClient": [38720, 15],
      "./defusal/defusalClient": [38726, 16],
      "./frontline/frontlineClient": [38734, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [38738, 18],
      "./luckyBedwars/luckyBedwarsClient": [38746, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38752, 20],
      "./oneBlock/oneBlockClient": [38755, 21],
      "./plots/plotsClient": [38757, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [38832, 23],
      "./skyIslands/skyIslandsClient": [38835, 24],
      "./skyblock/skyblockClient": [37894, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [38839, 26]
    };

    function pD(DD) {
      if (!cD.o(ID, DD)) return Promise.resolve().then((() => {
        var CD = new Error("Cannot find module '" + DD + "'");
        throw CD.code = "MODULE_NOT_FOUND", CD
      }));
      var CD = ID[DD],
        pD = CD[0];
      return Promise.all(CD.slice(1).map(cD.e)).then((() => cD(pD)))
    }
    pD.keys = () => Object.keys(ID), pD.id = 41743, DD.exports = pD
  },
  39921: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39929: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);