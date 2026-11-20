export const id = 53;
export const ids = [53];
export const modules = {
  38737: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      e: () => Ku
    });
    var Eu = yu(34);

    function Ku(uu) {
      return "refetchCode" === uu || "devDownloadJson" === uu || uu.startsWith("Plugin")
    }

    function Qu(uu, Ru) {
      "refetchCode" !== uu ? "Plugin|MobAiPlugin|ShowPetUi" !== uu ? Promise.all([yu.e(105), yu.e(106), yu.e(101), yu.e(103), yu.e(210)]).then((() => yu(41326))).then((yu => {
        let {
          runClientGameMessage: Eu
        } = yu;
        Eu(uu, Ru)
      })).catch((Ru => {
        console.error(`Game message ${uu} failed`, Ru)
      })) : Eu.k.Op("showPetUi", Ru) : Eu.k.Op("refetchCode")
    }
  },
  42132: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      g: () => Ku
    });
    const Eu = ["recording", "freecam", "keyframe"];

    function Ku() {
      const uu = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(uu[1]) << 32n | BigInt(uu[0])
    }
  },
  40381: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    const Eu = 1 << 20,
      Ku = 1 << 21,
      Qu = 1024,
      mu = 2048;

    function Ju(uu, Ru, yu) {
      const Ju = uu + Eu,
        Nu = Ru + Qu,
        Xu = yu + Eu;
      return Ju < 0 || Ju >= Ku || Xu < 0 || Xu >= Ku || Nu < 0 || Nu >= mu ? -1 : (Ju * Ku + Xu) * mu + Nu
    }
  },
  40374: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      h: () => mu,
      k: () => Ku,
      m: () => Qu,
      n: () => Vu,
      r: () => Xu,
      s: () => Nu,
      v: () => Ju
    });
    yu(3262);
    yu(40381);

    function Eu(uu) {}

    function Ku(uu) {}

    function Qu(uu) {}

    function mu(uu) {}

    function Ju(uu) {}

    function Nu(uu, Ru, yu) {}

    function Xu(uu) {}

    function Vu(uu) {}
  },
  8971: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      f: () => Nu
    });
    var Eu = yu(27);
    const Ku = 24,
      Qu = "farNametags",
      mu = 1e5;

    function Ju() {
      var uu;
      return null === (uu = Eu.d.get("showDistantNametags")) || void 0 === uu || uu
    }

    function Nu() {
      var uu;
      return null !== (uu = function() {
        const uu = new URLSearchParams(window.location.search).get(Qu),
          Ru = null === uu || "" === uu ? NaN : Number(uu);
        return Number.isFinite(Ru) && Ru >= 0 ? Math.min(Ru, mu) : null
      }()) && void 0 !== uu ? uu : Ju() ? 0 : Ku
    }
  },
  42130: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      blockIdOf: () => nN.e,
      clearWasmCameraScreen: () => vE,
      creativeItemIds: () => uE.creativeItemIds,
      decodeMapSettings: () => lN,
      drainTextRerasters: () => GJ.e,
      enchantmentPerksOf: () => uE.enchantmentPerksOf,
      endGameHost: () => iN,
      followCursorAim: () => tN,
      followMenuPrefs: () => YK,
      loadAudio: () => FN,
      loadClientGame: () => zN,
      loadTextIcons: () => GJ.h,
      rasterText: () => IJ.b,
      readBoardToEdit: () => UN,
      setTextHost: () => GJ.m,
      setTextLocalPlayer: () => GJ.q,
      showInCreativeInvenOf: () => uE.showInCreativeInvenOf,
      startGameHost: () => PN,
      startShellAnalytics: () => MN,
      startSkyFeed: () => vJ,
      textChanged: () => GJ.y,
      warmText: () => IJ.e,
      wasmCameraScreen: () => OE
    });
    yu(36350);
    var Eu = yu(27),
      Ku = yu(36590),
      Qu = yu(38899),
      mu = yu(34),
      Ju = yu(3199),
      Nu = yu(36584),
      Xu = yu(1250),
      Vu = yu(599),
      ru = yu(37986),
      Bu = yu(4562),
      xu = yu(40223),
      Su = yu(40160);
    const pu = Su.Pb / 4,
      Tu = Su.q.PlaySound,
      Wu = Su.q.SoundReset,
      ju = Bu.ab.ReplayFailed,
      Hu = Bu.ab.RecorderEvent;
    class du {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = uu, this.memory = Ru, this.audio = yu, this.serverIds = new Int32Array(256).fill(Su.Zc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Su.v.BYTES)), this.renderPtr = 0, this.Nr = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new Su.$(uu, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.sKu(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(uu, Ru) {
        const yu = this.eventView();
        return new Uint8Array(yu.buffer, yu.byteOffset + uu, Ru)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Su.v.localId(this.apiView, 0)
      }
      localDeaths() {
        return Su.v.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const uu = this.apiView,
          Ru = Su.v.entRenderPtr(uu, 0),
          yu = Su.v.entVisPtr(uu, 0),
          Eu = Su.v.entCapacity(uu, 0);
        if (Ru !== this.renderPtr || yu !== this.visPtr || Eu !== this.Nr || this.renderBuffer !== this.buffer) {
          this.renderPtr = Ru, this.visPtr = yu, this.Nr = Eu, this.renderBuffer = this.buffer;
          const uu = this.memoryView(Float32Array, Ru, Eu * pu, "the render array"),
            Ku = this.memoryView(Uint8Array, yu, Eu, "the visibility array");
          this.renderCapacity = uu && Ku ? Eu : 0, this.render = uu && Ku ? uu : new Float32Array(0), this.vis = uu && Ku ? Ku : new Uint8Array(0)
        }
      }
      memoryView(uu, Ru, yu, Eu) {
        try {
          return (0, xu.p)(uu, this.memory().buffer, Ru, yu, Eu)
        } catch (Ku) {
          return this.keepCorruption(Ku), null
        }
      }
      memoryData(uu, Ru, yu, Eu) {
        try {
          return (0, xu.f)(this.memory().buffer, uu, Ru, yu, Eu)
        } catch (Ku) {
          return this.keepCorruption(Ku), null
        }
      }
      reportCorruption(uu) {
        this.keepCorruption(new xu.c(uu))
      }
      keepCorruption(uu) {
        if (!(uu instanceof xu.c)) throw uu;
        this.corruption ??= uu
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(uu, Ru, yu) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Eu,
          len: Ku
        } = uu;
        this.eventsPtr = Eu, this.eventsLen = Ku, this.eventsBuffer = null;
        const Qu = this.eventView();
        for (let Xu = 0; Xu < Ku;) {
          const uu = Qu.getUint32(Xu, !0),
            yu = 65535 & uu,
            Eu = uu >>> 16,
            Ku = Xu + Bu.Y;
          if (yu === Su.q.EntitySpawned) {
            var mu;
            if (Eu !== Su.Wb.BYTES) throw Au(yu, Xu, Eu);
            const uu = Su.Wb.serverId(Qu, Ku);
            this.spawned(uu, Su.Wb.index(Qu, Ku), Su.Wb.kind(Qu, Ku)), null === (mu = Ru.entityAdded) || void 0 === mu || mu.call(Ru, uu)
          } else if ((yu === Su.q.ChunkSlot || yu === Su.q.EntityInfoChanged) && !(0, Su.se)(yu, Qu, Ku, Eu, Ru)) throw Au(yu, Xu, Eu);
          Xu = Ku + (0, Bu.he)(Eu)
        }
        try {
          var Ju;
          null === (Ju = Ru.afterPrescan) || void 0 === Ju || Ju.call(Ru), this.throwCorruption(), !yu() && this.dispatch(uu, Ru, yu) && (this.throwCorruption(), this.applyListener(), Ru.afterWalk(uu.kind)), this.throwCorruption()
        } catch (Nu) {
          throw Nu instanceof xu.c && (this.corruption ??= Nu), Nu
        } finally {
          yu() || null !== this.corruption || this.applyDespawns(Ku, Ru)
        }
      }
      applyDespawns(uu, Ru) {
        const yu = this.eventView();
        for (let Ku = 0; Ku < uu;) {
          const uu = yu.getUint32(Ku, !0),
            Qu = Ku + Bu.Y;
          if ((65535 & uu) === Su.q.EntityDespawned && uu >>> 16 === Su.Wb.BYTES) {
            const uu = Su.Wb.serverId(yu, Qu);
            var Eu;
            if (this.despawned(uu, Su.Wb.index(yu, Qu))) null === (Eu = Ru.entityRemoved) || void 0 === Eu || Eu.call(Ru, uu)
          }
          Ku = Qu + (0, Bu.he)(uu >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(uu, Ru, yu) {
        const {
          len: Eu,
          net: Ku,
          netOffsets: Qu
        } = uu;
        let mu = this.eventView(),
          Ju = 0;
        for (let Cu = 0; Cu < Eu;) {
          const uu = mu.getUint32(Cu, !0),
            Eu = 65535 & uu,
            ku = uu >>> 16,
            Du = Cu + Bu.Y;
          let Mu = !1;
          if (Ju < Ku.length && Qu[Ju] === Cu) Ru.netEvent(Ku[Ju]), Ju++, Mu = !0;
          else if (Eu === Bu.ab.LocalPlayerBound) {
            var Nu;
            if (ku !== Bu.Fb) throw Au(Eu, Cu, ku);
            null === (Nu = Ru.localPlayerBound) || void 0 === Nu || Nu.call(Ru, mu.getInt32(Du, !0)), Mu = !0
          } else if (Eu === Bu.ab.LocalHurt) {
            var Xu;
            if (ku !== Bu.Db) throw Au(Eu, Cu, ku);
            null === (Xu = Ru.localHurt) || void 0 === Xu || Xu.call(Ru, mu.getInt32(Du, !0), mu.getFloat32(Du + 4, !0), mu.getUint32(Du + 8, !0)), Mu = !0
          } else if (Eu === Bu.ab.AttackHit) {
            var Vu;
            if (ku !== Bu.d) throw Au(Eu, Cu, ku);
            const uu = mu.getFloat32(Du, !0),
              yu = mu.getFloat32(Du + 4, !0),
              Ku = mu.getFloat32(Du + 8, !0),
              Qu = mu.getUint32(Du + 12, !0);
            null === (Vu = Ru.attackHit) || void 0 === Vu || Vu.call(Ru, uu, yu, Ku, 0 !== (Qu & Bu.m.Crit), 0 !== (Qu & Bu.m.HitSelf))
          } else if (Eu === Bu.ab.PhysicsType) {
            var ru;
            if (ku !== Bu.Xb) throw Au(Eu, Cu, ku);
            null === (ru = Ru.physicsType) || void 0 === ru || ru.call(Ru, mu.getUint32(Du, !0), mu.getInt32(Du + 4, !0)), Mu = !0
          } else if (Eu === Bu.ab.VehicleEffect) {
            var xu;
            const uu = eu(mu, Du, ku);
            if (null === uu) throw Au(Eu, Cu, ku);
            null === (xu = Ru.vehicleEffect) || void 0 === xu || xu.call(Ru, uu.op, uu.name, uu.icon, uu.level, uu.durationMs), Mu = !0
          } else if (Eu === Bu.ab.ZoomChanged) {
            var pu;
            if (ku !== Bu.Rd) throw Au(Eu, Cu, ku);
            null === (pu = Ru.zoomChanged) || void 0 === pu || pu.call(Ru, mu.getFloat32(Du, !0), mu.getUint8(Du + 4)), Mu = !0
          } else if (Eu === Bu.ab.ZoomDisabled) {
            var du;
            if (0 !== ku) throw Au(Eu, Cu, ku);
            null === (du = Ru.zoomDisabled) || void 0 === du || du.call(Ru), Mu = !0
          } else if (Eu === Bu.ab.GameCamera) {
            var bu;
            null === (bu = Ru.gameCamera) || void 0 === bu || bu.call(Ru, new Uint8Array(mu.buffer, mu.byteOffset + Du, ku).slice()), Mu = !0
          } else if (Eu === Su.q.ChunkSlot || Eu === Su.q.EntityInfoChanged);
          else if (Eu >= Tu && Eu <= Wu) {
            if (this.audio && !this.audio.onAudioEvent(Eu, mu, Du, ku)) throw Au(Eu, Cu, ku)
          } else if (Eu >= ju && Eu <= Hu) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Eu, mu, Du, ku)) throw Au(Eu, Cu, ku);
              Mu = !0
            }
          } else if (Eu >= Su.qd && Eu <= Su.td && Eu !== Bu.ab.EnvLighting) {
            if (!(0, Su.se)(Eu, mu, Du, ku, Ru)) throw Au(Eu, Cu, ku);
            Mu = !0
          }
          if (Mu) {
            if (yu()) return !1;
            mu = this.eventView()
          }
          Cu = Du + (0, Bu.he)(ku)
        }
        return !yu()
      }
      applyListener() {
        var uu;
        if (!this.audio) return;
        const Ru = Su.v.audioViewPtr(this.apiView, 0),
          yu = this.memory().buffer;
        let Eu = this.audioView;
        (null === (uu = Eu) || void 0 === uu ? void 0 : uu.buffer) === yu && Eu.byteOffset === Ru || (Eu = (0, xu.f)(yu, Ru, Su.z.BYTES, 8, "the audio view"), this.audioView = Eu), Eu && this.audio.applyListener(Eu)
      }
      indexOf(uu) {
        return this.indexById.get("number" === typeof uu ? uu : +uu)
      }
      isLocal(uu) {
        return uu !== Su.Zc && uu === Su.v.localId(this.apiView, 0)
      }
      mH(uu) {
        const Ru = [0, 0, 0];
        return this.readPosition("number" === typeof uu ? uu : +uu, Ru) ? Ru : null
      }
      readPosition(uu, Ru) {
        const yu = this.apiView;
        if (void 0 !== this.indexById.get(uu) && this.isLocal(uu)) {
          for (let uu = 0; uu < 3; uu++) Ru[uu] = Su.v.localPos(yu, 0, uu);
          return !0
        }
        return this.readDrawnPosition(uu, Ru)
      }
      readDrawnPosition(uu, Ru) {
        const yu = this.apiView,
          Eu = this.indexById.get(uu);
        if (void 0 === Eu || Eu >= this.renderCapacity) return Ru[0] = Ru[1] = Ru[2] = NaN, !1;
        const Ku = Eu * pu;
        for (let Qu = 0; Qu < 3; Qu++) Ru[Qu] = this.render[Ku + Qu] + Su.v.origin(yu, 0, Qu);
        return !0
      }
      checkValid(uu) {
        return void 0 !== this.indexOf(uu)
      }
      isAlive(uu) {
        const Ru = this.indexOf(uu);
        if (void 0 === Ru) return null;
        if (this.ensureViews(), Ru >= this.renderCapacity) return null;
        const yu = this.vis[Ru];
        return 0 === yu ? null : 0 !== (yu & Su.re.Alive)
      }
      getEntityType(uu) {
        const Ru = this.indexOf(uu);
        return void 0 === Ru ? this.isLocal("number" === typeof uu ? uu : +uu) ? "Player" : null : Cu(this.kinds[Ru])
      }
      spawned(uu, Ru, yu) {
        if (Ru >= 1048576) throw new xu.c(`entity ${uu} spawned at index ${Ru}`);
        this.ensureIndex(Ru), this.serverIds[Ru] === uu && null !== this.idStr[Ru] || (this.idStr[Ru] = String(uu)), this.serverIds[Ru] = uu, this.kinds[Ru] = yu, this.indexById.set(uu, Ru)
      }
      despawned(uu, Ru) {
        let yu = !1;
        return this.indexById.get(uu) === Ru && (this.indexById.delete(uu), yu = !0), Ru < this.serverIds.length && this.serverIds[Ru] === uu && (this.serverIds[Ru] = Su.Zc, this.kinds[Ru] = 0, this.idStr[Ru] = null), yu
      }
      ensureIndex(uu) {
        const Ru = this.serverIds.length;
        if (uu < Ru) return;
        let yu = 2 * Ru;
        for (; yu <= uu;) yu *= 2;
        const Eu = new Int32Array(yu).fill(Su.Zc);
        Eu.set(this.serverIds), this.serverIds = Eu;
        const Ku = new Uint16Array(yu);
        Ku.set(this.kinds), this.kinds = Ku;
        for (let Qu = Ru; Qu < yu; Qu++) this.idStr.push(null)
      }
      eventView() {
        const uu = this.memory().buffer;
        return uu !== this.eventsBuffer && (this.eventsBuffer = uu, this.events = new DataView(uu, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const uu = this.memory().buffer;
        this.buffer = uu, this.viewPtr < 0 && (this.viewPtr = this.core.tKu()), this.view = new DataView(uu, this.viewPtr, Su.v.BYTES), this.rereadDirectory()
      }
    }

    function bu(uu) {
      return uu >>> Su.c === Su.t.Item
    }

    function Cu(uu) {
      var Ru, yu;
      const Eu = uu & Su.f;
      switch (uu >>> Su.c) {
        case Su.t.Lifeform:
          return null !== (Ru = Vu.l[Eu]) && void 0 !== Ru ? Ru : null;
        case Su.t.Throwable:
          return null !== (yu = ru.j[Eu]) && void 0 !== yu ? yu : null;
        case Su.t.Mesh:
          return "Mesh";
        case Su.t.Audio:
          return "AudioEntity";
        case Su.t.Item:
          return "Item";
        default:
          return null
      }
    }
    const ku = new TextDecoder;

    function eu(uu, Ru, yu) {
      if (yu < Bu.ud.HEAD_BYTES) return null;
      const Eu = uu.getUint32(Ru, !0),
        Ku = uu.getUint32(Ru + 20, !0),
        Qu = uu.getUint32(Ru + 24, !0),
        mu = Bu.ud.HEAD_BYTES + (0, Bu.he)(Ku);
      if (Eu !== Bu.ud.UPDATE && Eu !== Bu.ud.REMOVE || Ku > yu || mu + Qu > yu) return null;
      const Ju = (yu, Eu) => ku.decode(new Uint8Array(uu.buffer, uu.byteOffset + Ru + yu, Eu)),
        Nu = uu.getFloat64(Ru + 12, !0);
      return {
        op: Eu,
        level: uu.getFloat64(Ru + 4, !0),
        durationMs: Number.isNaN(Nu) ? null : Nu,
        name: Ju(Bu.ud.HEAD_BYTES, Ku),
        icon: Ju(mu, Qu)
      }
    }

    function Au(uu, Ru, yu) {
      return new xu.c(`event ${uu} at ${Ru} of ${yu} bytes`)
    }
    var Du = yu(343),
      Mu = yu(1199),
      Iu = yu(38737),
      Gu = yu(1871),
      Uu = yu(40276),
      nu = yu(1823),
      su = yu(38918),
      tu = yu(38949),
      lu = yu(38930),
      gu = yu(40205),
      cu = yu(2312),
      Lu = yu(38915),
      zu = yu(38947);
    const Fu = Math.max(Su.Eb.BYTES, Su.yb.BYTES, Su.Ab.BYTES);

    function wu(uu) {
      if (!(0, zu.e)(uu)) return null;
      const Ru = Number(uu);
      return (0 | Ru) === Ru ? Ru : null
    }
    class Zu {
      constructor(uu) {
        this.api = uu, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Lu.l)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.XQ = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = Su.Zc, this.localName = String(Su.Zc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.XQ = null;
        const uu = this.api.queries.directorView() >= Su.Eb.BYTES ? this.scratchView() : null;
        null !== uu && (this.defaultFov = (0, nu.s)(Su.Eb.fov(uu, 0)), this.baseFov = (0, nu.s)(Su.Eb.baseFov(uu, 0)), this.aspect = Su.Eb.aspect(uu, 0), this.bodyHeading = Su.Eb.bodyHeading(uu, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(uu) {
        this.viewHeading = uu
      }
      get localPlayerId() {
        const uu = Su.v.localId(this.api.apiView, 0);
        return uu !== this.localId && (this.localId = uu, this.localName = String(uu)), this.localName
      }
      getEntityPosition(uu) {
        return this.readEntity(uu) ? this.entityFeet : null
      }
      getEntityAimPoint(uu) {
        return this.readEntity(uu) ? this.entityAim : null
      }
      getEntityHeading(uu) {
        const Ru = wu(uu);
        if (null === Ru) return null;
        const yu = Su.v.localId(this.api.apiView, 0);
        return Ru === yu && yu !== Su.Zc ? this.viewHeading : this.readEntity(uu) ? this.entityHeading : null
      }
      raycastTerrain(uu, Ru, yu) {
        const Eu = this.api.queries.cameraSweep(uu[0], uu[1], uu[2], Ru[0], Ru[1], Ru[2], yu);
        return Eu < yu - 1e-6 ? Eu : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const uu = this.defaultPose;
        uu.fov = this.defaultFov;
        const Ru = this.api.queries.directorDefaultPose() >= Su.yb.BYTES ? this.scratchView() : null;
        if (null === Ru) return uu;
        for (let yu = 0; yu < 3; yu++) uu.position[yu] = Su.yb.eye(Ru, 0, yu);
        return uu.heading = Su.yb.heading(Ru, 0), uu.pitch = Su.yb.pitch(Ru, 0), uu
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
      readEntity(uu) {
        const Ru = wu(uu);
        if (null === Ru) return !1;
        if (Ru === this.XQ) return this.entityLive;
        this.XQ = Ru;
        const yu = this.api.queries.directorEntity(Ru) >= Su.Ab.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== yu, null === yu) return !1;
        for (let Eu = 0; Eu < 3; Eu++) this.entityFeet[Eu] = Su.Ab.feet(yu, 0, Eu), this.entityAim[Eu] = this.entityFeet[Eu];
        return this.entityAim[1] += Su.Ab.eyeHeight(yu, 0), this.entityHeading = Su.Ab.heading(yu, 0), !0
      }
      scratchView() {
        const uu = this.api.scratch(),
          Ru = this.api.memory().buffer,
          yu = this.scratch;
        return null !== yu && yu.buffer === Ru && yu.byteOffset === uu ? yu : (this.scratch = this.api.memoryData(uu, Fu, 8, "the director's record"), this.scratch)
      }
    }
    const hu = {
        mode: "default"
      },
      Pu = {
        show: () => {},
        clear: () => {}
      };

    function iu() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Yu {
      constructor(uu) {
        this.options = uu, this.Fr = void 0, this.director = void 0, this.latest = hu, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          RD: 0,
          mD: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.gp = new Int32Array(3 * Su.Yd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Su.Yd), this.Fr = new Zu(uu.api), this.director = new lu.e(this.Fr)
      }
      settingsChanged(uu) {
        let Ru = hu;
        if (uu.length > 0) try {
          Ru = (0, gu.e)(uu)
        } catch {}
        this.latest = Ru, this.pending = Ru
      }
      call(uu, Ru, yu, Eu, Ku, Qu) {
        var mu, Ju;
        let Nu;
        this.holding = !1;
        try {
          Nu = this.answer(uu, Ru, yu, Eu, Ku, Qu)
        } catch (Bu) {
          var Xu, Vu;
          throw this.answeredPose = !1, null === (Xu = (Vu = this.options).showFacing) || void 0 === Xu || Xu.call(Vu, null), Bu
        }
        const ru = this.answeredPose && 0 === (Eu & Su.Cb.Held);
        return this.answeredPose = Nu !== Su.ub.None, this.holding = this.answeredPose && !ru, null === (mu = (Ju = this.options).showFacing) || void 0 === mu || mu.call(Ju, this.holding ? this.facing : null), Nu
      }
      holdsView() {
        return this.holding
      }
      answer(uu, Ru, yu, Eu, Ku, Qu) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Fr: mu
        } = this;
        mu.readView();
        if (0 !== (Eu & Su.Cb.Held) || mu.setViewHeading((0, su.A)(mu.bodyHeading)), void 0 !== this.pending) {
          const uu = this.pending;
          this.pending = void 0, this.director.setSettings(uu), this.syncShownSettings()
        }
        this.readLook((0, cu.g)(Ru), (0, cu.g)(yu), Eu, (0, cu.g)(Ku), (0, cu.g)(Qu));
        const Ju = this.director.update(uu / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Ju) return Su.ub.None;
        const [Nu, Xu, Vu] = Ju.position;
        if (0 === this.options.api.queries.directorPose(Nu, Xu, Vu, (0, su.A)(Ju.heading), (0, su.l)(Ju.pitch), (0, nu.i)(Ju.fov))) return Su.ub.None;
        if ("default" === this.director.getSettings().mode) return Su.ub.Pose;
        switch (this.facing) {
          case "camera":
            return Su.ub.FaceCamera;
          case "cursor":
            return Su.ub.FaceCursor;
          default:
            return Su.ub.FaceMovement
        }
      }
      afterFrame(uu) {
        uu ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = hu, this.idle()
      }
      restart() {
        const uu = this.holding;
        this.idle(), this.holding = uu
      }
      idle() {
        var uu, Ru;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new lu.e(this.Fr), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (uu = (Ru = this.options).showFacing) || void 0 === uu || uu.call(Ru, null), this.setCentres(0)
      }
      syncShownSettings() {
        const uu = this.director.getSettings();
        if (uu === this.shownSettings) return;
        this.shownSettings = uu;
        const Ru = (0, tu.e)(uu);
        this.facing = Ru.facing, this.mouseTurns = Ru.mouseTurns
      }
      readLook(uu, Ru, yu, Eu, Ku) {
        const Qu = this.look,
          mu = 0 !== (yu & Su.Cb.LookPointed);
        if (null === this.mouseTurns && !mu) return Qu.RD = 0, Qu.mD = 0, void(Qu.pointedAt = void 0);
        let Ju;
        mu && (this.pointedAt.heading = Eu, this.pointedAt.pitch = Ku, Ju = this.pointedAt);
        const {
          Fr: Nu
        } = this;
        Nu.setViewHeading((0, tu.d)(Nu.getViewHeading(), uu, Ru, Ju, "look" === this.mouseTurns, Qu))
      }
      writeCentres(uu) {
        const Ru = this.next,
          yu = Math.min(uu.length, Su.Yd);
        for (let Eu = 0; Eu < yu; Eu++)
          for (let yu = 0; yu < 3; yu++) Ru[3 * Eu + yu] = Math.floor(uu[Eu][yu] / Su.H);
        this.setCentres(yu)
      }
      setCentres(uu) {
        const {
          gp: Ru,
          next: yu
        } = this;
        let Eu = uu === this.centresLen;
        for (let Ku = 0; Eu && Ku < 3 * uu; Ku++) Eu = Ru[Ku] === yu[Ku];
        Eu || (Ru.fill(0), Ru.set(yu.subarray(0, 3 * uu)), this.centresLen = uu, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const uu = this.options.cmd();
        null !== uu && (0, Su.Qf)(uu, 0, this.gp, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var uu, Ru, yu;
        return null !== (uu = null === (Ru = (yu = this.options).screen) || void 0 === Ru ? void 0 : Ru.call(yu)) && void 0 !== uu ? uu : Pu
      }
      hidden() {
        var uu;
        return (null !== (uu = this.options.isPageHidden) && void 0 !== uu ? uu : iu)()
      }
      now() {
        var uu, Ru, yu;
        return null !== (uu = null === (Ru = (yu = this.options).now) || void 0 === Ru ? void 0 : Ru.call(yu)) && void 0 !== uu ? uu : performance.now()
      }
    }
    var ou = yu(40381);
    const qu = Su.H * Su.H * Su.H,
      Ou = Math.log2(Su.H),
      vu = Su.H - 1,
      au = Su.X.BYTES / 4,
      fu = new Uint16Array(qu);

    function uR(uu, Ru, yu) {
      return uu * Su.H * Su.H + Ru * Su.H + yu
    }
    class RR {
      constructor(uu) {
        this.chunk = uu
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(uu, Ru, yu) {
        return uR(uu, Ru, yu)
      }
    }
    class yR {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class ER {
      constructor(uu, Ru, yu, Eu) {
        this.table = uu, this.slot = Ru, this.generation = yu, this.epoch = Eu, this.WB = new RR(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = fu, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get hS() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get jx() {
        const uu = this.gameVoxels(),
          Ru = this.layers ??= new Uint16Array(Su.H);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let yu = 0; 0 !== this.staleLayers; yu++) {
          const Eu = 1 << yu;
          0 !== (this.staleLayers & Eu) && (this.staleLayers &= ~Eu, Ru[yu] = KR(uu, yu))
        }
        return Ru
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const uu = this.voxelData(),
          Ru = this.writes;
        if (null === Ru || 0 === Ru.ids.size) return uu;
        if (Ru.from !== uu) {
          const yu = Ru.patched ??= new Uint16Array(qu);
          yu.set(uu);
          for (const [uu, Eu] of Ru.ids) yu[uu] = Eu;
          Ru.from = uu
        }
        return Ru.patched
      }
      written(uu) {
        var Ru;
        return null === (Ru = this.writes) || void 0 === Ru ? void 0 : Ru.ids.get(uu)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(uu, Ru, yu) {
        const Eu = this.writes ??= new yR;
        Eu.ids.set(uu, Ru), yu && Eu.cleared.add(uu), null !== Eu.from && (Eu.patched[uu] = Ru);
        const Ku = 1 << (uu >> Ou & vu);
        Eu.layers |= Ku, this.staleLayers |= Ku, this.writeCount++
      }
      clearWrites() {
        const uu = this.writes;
        null !== uu && (this.staleLayers |= uu.layers, uu.ids.clear(), uu.cleared.clear(), uu.layers = 0, uu.from = null)
      }
      dataCleared(uu) {
        var Ru;
        return !0 === (null === (Ru = this.writes) || void 0 === Ru ? void 0 : Ru.cleared.has(uu))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const uu = this.table.slotWords(),
          Ru = this.slot * au;
        if (this.epoch !== this.table.epoch || Ru + au > uu.length || 0 === uu[Ru + 3] || uu[Ru + 2] !== this.generation) return this.data = fu, this.dataPtr = 0, fu;
        this.version = uu[Ru + 1];
        const yu = uu[Ru + 0],
          Eu = uu.buffer;
        return yu === this.dataPtr && Eu === this.dataBuffer || (this.dataPtr = yu, this.dataBuffer = Eu, this.data = this.table.voxelsAt(Eu, yu)), this.data
      }
    }

    function KR(uu, Ru) {
      const yu = uu[Ru * Su.H];
      for (let Eu = 0; Eu < Su.H; Eu++) {
        const Ku = uR(Eu, Ru, 0);
        for (let Ru = 0; Ru < Su.H; Ru++)
          if (uu[Ku + Ru] !== yu) return 65535
      }
      return yu
    }
    const QR = new Uint32Array(0);

    function mR(uu, Ru, yu) {
      return uR(uu & vu, Ru & vu, yu & vu)
    }
    class JR {
      constructor(uu, Ru) {
        this.memory = uu, this.apiView = Ru, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = QR, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = QR, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(uu, Ru, yu, Eu, Ku, Qu) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Qu === Su.Y.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Qu !== Su.Y.Stored && Qu !== Su.Y.Unloaded) throw new xu.c(`ChunkSlot flags ${Qu}`);
        const mu = (0, ou.c)(uu, Ru, yu);
        if (mu < 0) return;
        if (Qu === Su.Y.Unloaded) return void this.chunks.delete(mu);
        const Ju = this.chunks.get(mu);
        (null === Ju || void 0 === Ju ? void 0 : Ju.slot) === Eu && Ju.generation === Ku || this.chunks.set(mu, new ER(this, Eu, Ku, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const uu = this.apiView(),
          Ru = Su.v.chunkSlotsPtr(uu, 0),
          yu = Su.v.chunkSlotsLen(uu, 0);
        Ru === this.slotsPtr && yu === this.slotsLen || (this.slotsPtr = Ru, this.slotsLen = yu, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const uu = this.apiView(),
          Ru = Su.v.walkThroughPtr(uu, 0),
          yu = Su.v.walkThroughLen(uu, 0);
        Ru === this.walkPtr && yu === this.walkLen || (this.walkPtr = Ru, this.walkLen = yu, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const uu of this.written) uu.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const uu = this.memory().buffer;
        var Ru;
        uu !== this.slotsBuffer && (this.slotsBuffer = uu, this.slots = null !== (Ru = (0, xu.p)(Uint32Array, uu, this.slotsPtr, this.slotsLen * au, "the chunk directory")) && void 0 !== Ru ? Ru : QR);
        return this.slots
      }
      voxelsAt(uu, Ru) {
        try {
          var yu;
          return null !== (yu = (0, xu.p)(Uint16Array, uu, Ru, qu, "a chunk's voxels")) && void 0 !== yu ? yu : fu
        } catch (Eu) {
          if (!(Eu instanceof xu.c)) throw Eu;
          return this.corruption ??= Eu, fu
        }
      }
      chunk(uu, Ru, yu) {
        var Eu;
        return null !== (Eu = this.chunks.get((0, ou.c)(uu, Ru, yu))) && void 0 !== Eu ? Eu : null
      }
      isLoaded(uu, Ru, yu) {
        return void 0 !== this.chunkAt(Math.floor(uu), Math.floor(Ru), Math.floor(yu))
      }
      yV(uu, Ru, yu) {
        var Eu;
        const Ku = Math.floor(uu),
          Qu = Math.floor(Ru),
          mu = Math.floor(yu),
          Ju = this.chunkAt(Ku, Qu, mu);
        if (!Ju) return 0;
        const Nu = mR(Ku, Qu, mu);
        return null !== (Eu = Ju.written(Nu)) && void 0 !== Eu ? Eu : Ju.voxelData()[Nu]
      }
      setOverlay(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Qu = this.chunkAt(uu, Ru, yu);
        return !!Qu && (Qu.hasWrites() || this.written.push(Qu), Qu.write(mR(uu, Ru, yu), Eu, Ku), !0)
      }
      version(uu, Ru, yu) {
        var Eu, Ku;
        return null !== (Eu = null === (Ku = this.chunks.get((0, ou.c)(uu, Ru, yu))) || void 0 === Ku ? void 0 : Ku.hS) && void 0 !== Eu ? Eu : null
      }
      scan(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        const Nu = Su.H;
        let Xu = 0;
        for (let Vu = Math.floor(Ru / Nu); Vu * Nu < Ku; Vu++) {
          const ru = Vu * Nu,
            Bu = Math.min(Ku - ru, Nu);
          for (let Ku = Math.floor(uu / Nu); Ku * Nu < Eu; Ku++) {
            const xu = Ku * Nu,
              Su = Math.min(Eu - xu, Nu);
            for (let Eu = Math.floor(yu / Nu); Eu * Nu < Qu; Eu++) {
              const pu = this.chunks.get((0, ou.c)(Ku, Vu, Eu));
              if (!pu) continue;
              const Tu = Eu * Nu,
                Wu = Math.max(yu - Tu, 0),
                ju = Math.min(Qu - Tu, Nu),
                Hu = pu.jx,
                du = pu.gameVoxels();
              for (let yu = Math.max(Ru - ru, 0); yu < Bu; yu++) {
                const Ru = Hu[yu];
                if (65535 === Ru || 0 !== mu[Ru]) {
                  Xu++;
                  for (let Ru = Math.max(uu - xu, 0); Ru < Su; Ru++) {
                    const uu = uR(Ru, yu, 0);
                    for (let Eu = Wu; Eu < ju; Eu++) {
                      const Ku = du[uu + Eu];
                      0 !== mu[Ku] && Ju.push(xu + Ru, ru + yu, Tu + Eu, Ku)
                    }
                  }
                }
              }
            }
          }
        }
        return Xu
      }
      dataCleared(uu, Ru, yu) {
        var Eu;
        const Ku = Math.floor(uu),
          Qu = Math.floor(Ru),
          mu = Math.floor(yu);
        return !0 === (null === (Eu = this.chunkAt(Ku, Qu, mu)) || void 0 === Eu ? void 0 : Eu.dataCleared(mR(Ku, Qu, mu)))
      }
      isWalkThrough(uu) {
        if (!Number.isInteger(uu) || uu < 0 || uu > 65535) return !1;
        const Ru = this.walkWords(),
          yu = uu >>> 5;
        return yu < Ru.length && 1 === (Ru[yu] >>> (31 & uu) & 1)
      }
      walkWords() {
        const uu = this.memory().buffer;
        var Ru;
        uu !== this.walkBuffer && (this.walkBuffer = uu, this.walk = null !== (Ru = (0, xu.p)(Uint32Array, uu, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Ru ? Ru : QR);
        return this.walk
      }
      chunkAt(uu, Ru, yu) {
        if ((0 | uu) !== uu || (0 | Ru) !== Ru || (0 | yu) !== yu) return;
        const Eu = (0, ou.c)(uu >> Ou, Ru >> Ou, yu >> Ou);
        return Eu !== this.lastKey && (this.lastKey = Eu, this.lastChunk = this.chunks.get(Eu)), this.lastChunk
      }
    }
    var NR = yu(38273),
      XR = yu(37569),
      VR = yu(36565),
      rR = yu(36457),
      BR = yu(8991),
      xR = yu(38863),
      SR = yu(212);
    const pR = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      TR = [
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
      WR = TR.map((uu => {
        let [Ru] = uu;
        return Ru
      })),
      jR = Uint8Array.from(TR, (uu => {
        let [, Ru] = uu;
        return Ru
      })),
      HR = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      dR = 8;
    var bR = yu(36560),
      CR = yu(281);
    const kR = 2 ** pR.length - 1;
    class eR {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CR.c;
        this.sheet = uu, this.onError = Ru, this.idle = yu, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = uu => {
          this.cancelIdle = null;
          try {
            if (uu.timeRemaining() >= 1) {
              let uu = this.queue.shift();
              for (; void 0 !== uu && !this.load(uu);) uu = this.queue.shift()
            }
          } catch (Ru) {
            this.onError(Ru)
          } finally {
            this.schedule()
          }
        }
      }
      preload(uu) {
        const Ru = uu & kR & ~this.asked;
        if (0 !== Ru) {
          this.asked |= Ru;
          for (let uu = 0; uu < pR.length; uu++) Ru & 1 << uu && this.queue.push(uu);
          this.schedule()
        }
      }
      cancel() {
        var uu;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (uu = this.cancelIdle) || void 0 === uu || uu.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(uu) {
        const Ru = this.sheet(uu, !1),
          yu = this.sheet(uu, !0),
          [Eu, Ku] = "unloaded" === Ru.state() && "unloaded" !== yu.state() ? [yu, Ru] : [Ru, yu],
          Qu = this.gen,
          mu = () => {
            try {
              Qu === this.gen && "unloaded" === Ku.state() && Ku.load()
            } catch (uu) {
              this.onError(uu)
            }
          },
          Ju = Eu.state();
        return "unloaded" === Ju ? (Eu.once("load", mu), Eu.load(), !0) : "unloaded" === Ku.state() && ("loading" === Ju ? (Eu.once("load", mu), !1) : (Ku.load(), !0))
      }
    }
    var AR = yu(40472);
    const DR = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      MR = SR.f.UW * SR.f.playerEyeToHeightRatio,
      IR = [0, 0, -1, 0, 1, 0],
      GR = pR.indexOf("note");

    function UR(uu) {
      return uu >= 0 ? Math.min(1, uu) : 0
    }

    function nR(uu) {
      var Ru;
      let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Eu = function(uu) {
        let Ru = 0,
          yu = WR.length;
        for (; Ru < yu;) {
          const Eu = Ru + yu >>> 1;
          WR[Eu] < uu ? Ru = Eu + 1 : yu = Eu
        }
        return Ru
      }(uu);
      if ("" === uu || null === (Ru = WR[Eu]) || void 0 === Ru || !Ru.startsWith(uu)) return -1;
      if (WR[Eu] === uu) return Eu;
      let Ku = Eu + 1;
      for (; Ku < WR.length && WR[Ku].startsWith(uu);) Ku++;
      return Eu + Math.floor(yu() * (Ku - Eu))
    }
    class sR {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.group = uu, this.loudness = Ru, this.startMs = yu, this.howl = Eu, this.host = Ku, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const uu = this.host.alive(this.id);
        return uu ? 1e3 * this.howl.duration(this.id) / uu.rate : 0
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
    class tR {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = uu, this.listener = Ru, this.now = yu, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new bR.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: uu => this.aliveVoice(uu),
          started: uu => this.started.has(uu),
          drop: uu => {
            var Ru;
            null === (Ru = this.live.get(uu)) || void 0 === Ru || Ru.howl.stop(uu), this.forget(uu)
          }
        }, this.handlers = {
          playSound: (uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) => {
            if (Eu >= WR.length) return;
            const Xu = 0 !== (Ku & Su.ie.Loop);
            Ku & Su.ie.TwoD ? this.start(Eu, !1, mu, Qu, Ju, Xu) : this.startSpatial(Eu, mu, Qu, Ju, Xu, uu, Ru, yu, Nu, this.earDistSq(uu, Ru, yu))
          },
          soundPos: (uu, Ru, yu, Eu) => {
            const Ku = this.core.get(Eu);
            var Qu;
            void 0 !== Ku && (null === (Qu = this.live.get(Ku)) || void 0 === Qu || Qu.howl.pos(yu, Ru, uu, Ku))
          },
          soundSet: (uu, Ru, yu, Eu) => {
            const Ku = this.core.get(uu),
              Qu = void 0 === Ku ? void 0 : this.live.get(Ku);
            void 0 !== Ku && Qu && (this.setRel(Ku, Ru), Qu.rate = yu, Qu.howl.rate(yu, Ku), Qu.spatial && Qu.howl.pannerAttr({
              refDistance: Eu
            }, Ku))
          },
          soundFade: (uu, Ru, yu, Eu) => {
            const Ku = this.core.get(uu);
            void 0 !== Ku && this.fade(Ku, Ru, yu, 0 !== (Eu & Su.ge.StopAfter))
          },
          soundStop: uu => {
            const Ru = this.core.get(uu);
            var yu;
            void 0 !== Ru && (null === (yu = this.live.get(Ru)) || void 0 === yu || yu.howl.stop(Ru), this.forget(Ru))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new eR(((uu, Ru) => this.sheet(uu, Ru)), (uu => {
          this.errors++, console.error("Audio preload failed", uu)
        }), Eu)
      }
      prepare() {
        for (let uu = 0; uu < pR.length; uu++) this.sheet(uu, !1), this.sheet(uu, !0)
      }
      preload(uu) {
        this.loader.preload(uu)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(uu, Ru, yu, Eu) {
        if (uu < Su.q.PlaySound || uu > Su.q.SoundReset) return !1;
        try {
          return (0, Su.se)(uu, Ru, yu, Eu, this.handlers)
        } catch (Ku) {
          return this.errors++, console.error("Audio event failed", Ku), !0
        }
      }
      applyListener(uu) {
        const Ru = this.nextPose;
        for (let Eu = 0; Eu < 3; Eu++) Ru[2 - Eu] = Su.z.listener(uu, 0, Eu), Ru[5 - Eu] = Su.z.forward(uu, 0, Eu), Ru[8 - Eu] = Su.z.up(uu, 0, Eu);
        0 === Ru[3] && 0 === Ru[4] && 0 === Ru[5] && Ru.set(this.posed ? this.pose.subarray(3) : IR, 3);
        for (let Eu = 0; Eu < 9; Eu++)
          if (!Number.isFinite(Ru[Eu])) return;
        const yu = this.pose;
        if (this.posed) {
          let uu = !0;
          for (let Eu = 0; Eu < 9 && uu; Eu++) uu = Ru[Eu] === yu[Eu];
          if (uu) return
        }
        this.listener.apply(Ru) && (yu.set(Ru), this.posed = !0)
      }
      playGame(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = nR(uu);
        if (Ju < 0) return AR.b;
        if (!yu) {
          const {
            howl: uu,
            id: yu
          } = this.start(Ju, !1, Ru, 0, 1, mu);
          return this.gameSound(uu, yu, !1)
        }
        const Nu = yu[0],
          Xu = yu[1] + MR,
          Vu = yu[2];
        if (!Number.isFinite(Nu) || !Number.isFinite(Xu) || !Number.isFinite(Vu)) return AR.b;
        let ru;
        if (Eu) {
          const uu = Nu - Eu[0],
            Ru = Xu - Eu[1],
            yu = Vu - Eu[2];
          if (ru = uu * uu + Ru * Ru + yu * yu, ru > Ku * Ku) return AR.b
        } else ru = this.earDistSq(Nu, Xu, Vu);
        const Bu = this.startSpatial(Ju, Ru, 0, 1, mu, Nu, Xu, Vu, Qu, ru);
        return Bu ? this.gameSound(Bu.howl, Bu.id, !0) : AR.b
      }
      setMaster(uu, Ru) {
        this.level = UR(uu);
        const yu = Ru ? this.level : 0;
        if (yu !== this.master) {
          this.master = yu;
          for (const [uu, Ru] of this.live) Ru.fadeMs = 0, Ru.gain = Ru.rel * this.master, Ru.howl.volume(Ru.gain, uu)
        }
      }
      stopCore() {
        for (const Ru of [...this.core.values()]) {
          var uu;
          null === (uu = this.live.get(Ru)) || void 0 === uu || uu.howl.stop(Ru)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [uu, Ru] of [...this.live]) Ru.howl.stop(uu), this.forget(uu);
        this.core.clear()
      }
      gameSound(uu, Ru, yu) {
        const Eu = {
          stop: () => (this.live.has(Ru) && uu.stop(Ru), Eu),
          fade: (uu, yu, Ku) => {
            var Qu, mu;
            const Ju = this.level > 0 ? yu / this.level : yu > 0 && null !== (Qu = null === (mu = this.live.get(Ru)) || void 0 === mu ? void 0 : mu.rel) && void 0 !== Qu ? Qu : 0;
            return this.fade(Ru, Ju, Ku, !1), Eu
          },
          rate: yu => {
            const Ku = this.live.get(Ru);
            return Ku && (Ku.rate = function(uu) {
              return uu > 0 && uu < 1 / 0 ? uu : 1
            }(yu), uu.rate(Ku.rate, Ru)), Eu
          },
          getVolume: () => {
            var uu, yu;
            return (null !== (uu = null === (yu = this.live.get(Ru)) || void 0 === yu ? void 0 : yu.rel) && void 0 !== uu ? uu : 0) * this.level
          },
          getRelativeVolume: () => {
            var uu, yu;
            return null !== (uu = null === (yu = this.live.get(Ru)) || void 0 === yu ? void 0 : yu.rel) && void 0 !== uu ? uu : 0
          },
          setRelativeVolume: uu => (this.setRel(Ru, uu), Eu),
          setPannerAttr: Ku => {
            if (yu && this.live.has(Ru)) {
              const yu = {
                ...DR,
                refDistance: VR.h
              };
              for (const [uu, Ru] of Object.entries(Ku)) "number" !== typeof Ru && "string" !== typeof Ru || (yu[uu] = Ru);
              uu.pannerAttr({
                coneOuterAngle: yu.coneOuterAngle
              }, Ru), uu.pannerAttr(yu, Ru)
            }
            return Eu
          },
          setPosition: Ku => (yu && this.live.has(Ru) && Number.isFinite(Ku[0] + Ku[1] + Ku[2]) && uu.pos(Ku[2], Ku[1], Ku[0], Ru), Eu)
        };
        return Eu
      }
      startSpatial(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        const Vu = this.sheet(jR[uu], !0);
        let ru = null;
        if (!Ku) {
          if (this.failed.has(Vu)) return null;
          const yu = jR[uu] === GR ? null : (0, bR.g)(WR[uu]),
            Eu = (0, bR.d)(UR(Ru), Math.sqrt(Xu), Nu);
          if (ru = new sR(yu, Eu, this.now(), Vu, this.voiceHost), !this.voices.admit(ru)) return null
        }
        const Bu = this.start(uu, !0, Ru, yu, Eu, Ku);
        return ru && (ru.id = Bu.id, ru.direct = "loaded" === Vu.state() && !Vu._playLock), Vu.pannerAttr({
          coneOuterAngle: 360
        }, Bu.id), Vu.pannerAttr({
          ...DR,
          refDistance: Nu
        }, Bu.id), Vu.pos(Ju, mu, Qu, Bu.id), Bu
      }
      aliveVoice(uu) {
        const Ru = this.live.get(uu);
        if (!Ru) return;
        const yu = Ru.howl._soundById(uu);
        if (yu && !yu._ended) return Ru;
        this.forget(uu)
      }
      earDistSq(uu, Ru, yu) {
        if (!this.posed) return 0;
        const Eu = uu - this.pose[2],
          Ku = Ru - this.pose[1],
          Qu = yu - this.pose[0];
        return Eu * Eu + Ku * Ku + Qu * Qu
      }
      start(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = UR(yu),
          Ju = this.sheet(jR[uu], Ru);
        "unloaded" === Ju.state() && Ju.load();
        const Nu = Ju.play(WR[uu]),
          Xu = mu * this.master;
        return Ju.volume(Xu, Nu), this.live.set(Nu, {
          howl: Ju,
          rel: mu,
          gain: Xu,
          fadeFrom: Xu,
          fadeAt: 0,
          fadeMs: 0,
          rate: Ku,
          handle: Eu,
          spatial: Ru,
          stopTimer: void 0
        }), 0 !== Eu && this.core.set(Eu, Nu), 1 !== Ku && Ju.rate(Ku, Nu), Qu && Ju.loop(!0, Nu), {
          howl: Ju,
          id: Nu
        }
      }
      sheet(uu, Ru) {
        const yu = 2 * uu + (Ru ? 1 : 0);
        let Eu = this.sheets.get(yu);
        if (!Eu) {
          const Ku = this.createHowl(pR[uu], Ru);
          Ku.on("end", (uu => {
            Ku.loop(uu) || this.forget(uu)
          })), Ku.on("stop", (uu => {
            this.forget(uu)
          })), Ku.on("play", (uu => {
            this.live.has(uu) && this.started.add(uu)
          })), Ku.on("loaderror", (uu => {
            if ("loaded" !== Ku.state()) {
              this.failed.add(Ku);
              for (const [uu, Ru] of this.live) Ru.howl === Ku && this.forget(uu)
            } else "number" === typeof uu && this.forget(uu)
          })), this.sheets.set(yu, Ku), Eu = Ku
        }
        return Eu
      }
      setRel(uu, Ru) {
        const yu = this.live.get(uu);
        yu && (lR(yu), yu.fadeMs = 0, yu.rel = UR(Ru), yu.gain = yu.rel * this.master, yu.howl.volume(yu.gain, uu))
      }
      fade(uu, Ru, yu, Eu) {
        const Ku = this.live.get(uu);
        if (!Ku) return;
        lR(Ku);
        const {
          howl: Qu
        } = Ku, mu = this.gainNow(Ku);
        Ku.rel = UR(Ru), Ku.gain = Ku.rel * this.master;
        const Ju = yu > 0 ? Math.min(yu, 65535) : 0,
          Nu = 0 === Ju || mu === Ku.gain;
        Ku.fadeMs = Nu ? 0 : Ju, Nu ? Qu.volume(Ku.gain, uu) : (Ku.fadeFrom = mu, Ku.fadeAt = this.now(), Qu.fade(mu, Ku.gain, Ju, uu)), Eu && (Nu ? Qu.stop(uu) : Ku.stopTimer = setTimeout((() => {
          Ku.stopTimer = void 0, Qu.stop(uu)
        }), Ju))
      }
      gainNow(uu) {
        if (uu.fadeMs > 0) {
          const Ru = (this.now() - uu.fadeAt) / uu.fadeMs;
          if (Ru < 1) return uu.fadeFrom + (uu.gain - uu.fadeFrom) * Math.max(0, Ru);
          uu.fadeMs = 0
        }
        return uu.gain
      }
      forget(uu) {
        this.started.delete(uu);
        const Ru = this.live.get(uu);
        Ru && (lR(Ru), this.live.delete(uu), 0 !== Ru.handle && this.core.get(Ru.handle) === uu && this.core.delete(Ru.handle))
      }
    }

    function lR(uu) {
      void 0 !== uu.stopTimer && (clearTimeout(uu.stopTimer), uu.stopTimer = void 0)
    }
    var gR = yu(40191),
      cR = yu(38871);
    class LR {
      constructor(uu, Ru, yu, Eu) {
        this.key = uu, this.model = Ru, this.host = Eu, this.Nr = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.FKu = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.VS = !1, this.Nr = Math.max(1, Math.ceil(yu)), this.records = new Float32Array(this.Nr * NR.c), this.isDirty = new Uint8Array(this.Nr), this.tail = new Uint8Array(this.Nr * Su.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Eu.cmd())
      }
      setOrigin(uu, Ru, yu) {
        this.origin[0] = uu, this.origin[1] = Ru, this.origin[2] = yu
      }
      markDirty(uu) {
        !this.VS && uu >= 0 && uu < this.Nr && uu < Su.uc.Max && this.tS(uu, uu + 1)
      }
      commit(uu) {
        if (this.VS) return;
        (uu = Math.min(Math.max(Math.floor(uu), 0), this.Nr, Su.uc.Max)) > this.count && this.tS(this.count, uu), this.count = uu;
        const {
          origin: Ru,
          sentOrigin: yu,
          dirtyList: Eu
        } = this, Ku = this.FKu !== uu, Qu = yu[0] !== Ru[0] || yu[1] !== Ru[1] || yu[2] !== Ru[2];
        if (0 === Eu.length && !Ku && !Qu) return;
        const mu = this.host.cmd();
        if (!mu || !this.make(mu)) return;
        const Ju = Eu.length,
          {
            records: Nu,
            tailView: Xu
          } = this;
        for (let Vu = 0; Vu < Ju; Vu++) {
          const uu = Eu[Vu],
            Ru = uu * NR.c,
            yu = Vu * Su.uc.Bytes,
            Ku = 0 !== Nu[Ru + NR.f] ? Su.uc.Hidden : 0;
          Xu.setUint32(yu, (uu | Ku) >>> 0, !0), Xu.setFloat32(yu + 4, Nu[Ru], !0), Xu.setFloat32(yu + 8, Nu[Ru + 1], !0), Xu.setFloat32(yu + 12, Nu[Ru + 2], !0)
        }
        if ((0, Su.Ye)(mu, 0, this.key, uu, Ru, Ju, this.tailOf(Ju))) {
          for (let uu = 0; uu < Ju; uu++) this.isDirty[Eu[uu]] = 0;
          Eu.length = 0, this.FKu = uu, yu[0] = Ru[0], yu[1] = Ru[1], yu[2] = Ru[2]
        }
      }
      grow(uu) {
        (uu = Math.ceil(uu)) <= this.Nr || this.VS || (this.records = (0, cR.b)(this.records, new Float32Array(uu * NR.c)), this.isDirty = (0, cR.b)(this.isDirty, new Uint8Array(uu)), this.tail = new Uint8Array(uu * Su.uc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Nr = uu)
      }
      dispose() {
        this.VS || (this.VS = !0, this.host.VS(this, this.made ? this.key : null))
      }
      make(uu) {
        if (!this.made && uu) {
          const {
            item: Ru,
            scale: yu,
            yaw: Eu
          } = this.model;
          this.made = (0, Su.bf)(uu, 0, this.key, Ru, yu, Eu)
        }
        return this.made
      }
      tailOf(uu) {
        const Ru = uu * Su.uc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Ru || (this.tailCut = this.tail.subarray(0, Ru)), this.tailCut
      }
      tS(uu, Ru) {
        const {
          dirtyList: yu,
          isDirty: Eu
        } = this;
        for (let Ku = uu; Ku < Ru; Ku++) 0 === Eu[Ku] && (Eu[Ku] = 1, yu.push(Ku))
      }
    }
    var zR = yu(602);
    class FR {
      constructor(uu) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: uu,
          owes: uu => {
            this.owing.add(uu)
          },
          settled: (uu, Ru) => {
            this.owing.delete(uu), Ru && this.live.delete(uu)
          }
        }
      }
      create(uu, Ru) {
        if (yu = uu, !zR.k.includes(yu)) return null;
        var yu;
        const Eu = new wR(++this.keys, Vu.l.indexOf(uu), Ru, this.host);
        return this.live.add(Eu), Eu
      }
      disposeAll() {
        for (const uu of [...this.live]) uu.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const uu = this.host.cmd();
        for (const Ru of this.owing)
          if (!Ru.sync(uu)) return
      }
    }
    class wR {
      constructor(uu, Ru, yu, Eu) {
        this.key = uu, this.lifeform = Ru, this.scale = yu, this.host = Eu, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.VS = !1, this.sync()
      }
      setPose(uu, Ru) {
        this.VS || (this.feet[0] = uu[0], this.feet[1] = uu[1], this.feet[2] = uu[2], this.yaw = Ru, this.owed |= 2, this.sync())
      }
      setVisible(uu) {
        this.VS || uu === this.visible || (this.visible = uu, this.owed |= 4, this.sync())
      }
      dispose() {
        this.VS || (this.VS = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(uu) ? (this.host.settled(this, this.VS), !0) : (this.host.owes(this), !1)
      }
      write(uu) {
        if (!uu) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, Su.jf)(uu, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Ru = (2 & this.owed ? Su.Wc.Pose : 0) | (4 & this.owed ? Su.Wc.Visible : 0);
        if (0 !== Ru) {
          if (!(0, Su.hf)(uu, 0, this.key, Ru, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, Su.ef)(uu, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var ZR = yu(40627);

    function hR(uu, Ru, yu, Eu) {
      return (0, ZR.e)(), (0, Su.Sf)(uu, Ru, yu, Eu)
    }
    var PR = yu(38879),
      iR = yu(40177);
    const YR = [0, 0, 0],
      oR = [0, 0, 0],
      qR = [0, 0, 0],
      OR = [0, 0, 0],
      vR = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      aR = [0, 0, 0],
      fR = [0, 0],
      uy = [1, 1, 1],
      Ry = 1 / 3;
    const yy = XR.g;

    function Ey(uu) {
      const Ru = XR.c[uu],
        yu = Ru && XR.g[Ru.mainMultiblock];
      return yu && {
        main: yu,
        x: Ru.compX,
        y: Ru.compY,
        z: Ru.compZ
      }
    }

    function Ky(uu) {
      if (null === uu || void 0 === uu) return Su.Zc;
      const Ru = +uu;
      return Number.isInteger(Ru) && Ru >= -2147483648 && Ru <= 2147483647 && String(Ru) === String(uu) ? Ru : Su.Zc
    }

    function Qy(uu, Ru, yu) {
      return (0, Su.Wf)(uu, 0, Ru, null !== yu && void 0 !== yu ? yu : Number.NaN)
    }
    class my {
      constructor(uu) {
        this.deps = uu, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new PR.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (uu => {
          var Ru, yu;
          null === (Ru = (yu = this.deps).setLocalOptions) || void 0 === Ru || Ru.call(yu, uu)
        })), this.mobModels = new FR((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          VS: (uu, Ru) => {
            this.livePools.delete(uu), null !== Ru && (this.owedFrees.push(Ru), this.flushOwed())
          }
        }, this.api = uu.api, this.live = uu.live, this.chunks = uu.chunks, this.items = uu.items, this.tables = uu.tables
      }
      isLocal(uu) {
        return null !== uu && void 0 !== uu && +uu === this.api.localId
      }
      assertLocal(uu, Ru) {
        if (!this.isLocal(uu)) throw new Error(`Attempted to ${Ru} for a player that is not the local player`)
      }
      mH(uu) {
        const Ru = this.api.mH(uu);
        if (!Ru) throw new Error(`Entity ${uu} has no replicated position`);
        return Ru
      }
      checkValid(uu) {
        return !!this.deps.isSessionLive() && (null === uu || void 0 === uu || this.api.checkValid(uu))
      }
      isAlive(uu) {
        return !1 !== this.api.isAlive(uu)
      }
      getItemStat(uu, Ru, yu) {
        return this.isLocal(uu) || null !== uu && "Player" === this.api.getEntityType(uu) ? this.tables.getItemStat(Ru, yu) : this.tables.getDefaultItemStat(Ru, yu)
      }
      getClientOption(uu, Ru) {
        return this.assertLocal(uu, "get a client option"), this.tables.getClientOption(Ru)
      }
      openShop(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(uu, "open shop"), mu.k.Op("showShopFromServer", {
          toggle: Ru,
          xR: yu
        }, !0)
      }
      sendMessage(uu, Ru, yu) {
        this.assertLocal(uu, "send a message");
        const Eu = "string" === typeof Ru ? [{
          str: Ru,
          style: yu
        }] : Ru;
        mu.k.Op("chat", {
          content: Eu
        }, !0)
      }
      getEntityType(uu) {
        return this.api.getEntityType(uu)
      }
      getEntityName(uu) {
        const Ru = Ky(uu);
        return Ru === Su.Zc ? void 0 : (0, gR.e)(this.api, Ru)
      }
      hasEffect(uu, Ru) {
        const yu = Ky(uu);
        return yu !== Su.Zc && (0, gR.d)(this.api, yu, Ru)
      }
      getMetaInfo(uu) {
        return this.tables.getMetaInfo(uu)
      }
      getPlayerDbId(uu) {
        return this.assertLocal(uu, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(uu, Ru, yu) {
        if (!this.chunks.dataCleared(uu, Ru, yu)) return (0, gR.b)(this.api, uu, Ru, yu)
      }
      sA(uu, Ru, yu, Eu) {
        this.setBlockId(uu, Ru, yu, this.tables.getItemId(Eu))
      }
      setOtherEntitySetting(uu, Ru, yu, Eu) {
        if (!this.isLocal(uu)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Su.nd, yu)) throw new Error(`Unknown other-entity setting ${yu}`);
        const Ku = Su.nd[yu],
          Qu = Ky(Ru);
        if (Qu === Su.Zc || !this.deps.beforeWrite()) return;
        const mu = (0, gu.g)(Eu);
        if (mu.length > 16384) throw new Error(`The other-entity setting ${yu}'s value is over 16384 bytes`);
        const Ju = this.api.memoryView(Uint8Array, this.api.scratch(), mu.length, "set_other_entity_setting's value");
        Ju && (Ju.set(mu), this.api.queries.setOtherEntitySetting(Qu, Ku, mu.length))
      }
      getPositionView(uu) {
        return this.live.position(+uu)
      }
      readDrawnPosition(uu, Ru) {
        return this.api.readDrawnPosition(Ky(uu), Ru)
      }
      getDrawnHeading(uu) {
        const Ru = Ky(uu),
          yu = (Ru === Su.Zc ? 0 : this.api.queries.directorEntity(Ru)) >= Su.Ab.BYTES ? this.api.memoryData(this.api.scratch(), Su.Ab.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!yu) return null;
        if (1 === Su.Ab.headingIsDrawn(yu, 0)) return Su.Ab.heading(yu, 0);
        const Eu = this.api.apiView;
        return this.isLocal(uu) && 0 === (Su.v.playerFlags(Eu, 0) & Su.Nd.FreeCam) ? Su.v.heading(Eu, 0) : null
      }
      getLocalPlayerMovement() {
        const uu = Su.v.playerFlags(this.api.apiView, 0);
        return 0 === (uu & Su.Nd.Replay) && this.api.readDrawnPosition(this.api.localId, qR) ? {
          onGround: 0 !== (uu & Su.Nd.OnGround),
          jumpHeld: 0 !== (uu & Su.Nd.JumpHeld)
        } : null
      }
      Xyu(uu) {
        return this.isLocal(uu) ? this.items.jJ() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var uu, Ru;
        return "Gun" === (null === (uu = this.aliveHeld()) || void 0 === uu || null === (Ru = uu.typeObj) || void 0 === Ru ? void 0 : Ru.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.jJ()
      }
      isCrosshairShown() {
        var uu, Ru;
        const yu = (0, rR.c)(Eu.d.get("crosshairGameView"), Eu.d.get("crosshairShownOverride"));
        if (null !== yu) return yu;
        const Ku = null === (uu = this.aliveHeld()) || void 0 === uu ? void 0 : uu.typeObj,
          Qu = "Gun" === (null === Ku || void 0 === Ku ? void 0 : Ku.type),
          mu = Qu || !0 === (null === Ku || void 0 === Ku ? void 0 : Ku.showsAimingUi),
          Ju = 0 === (Su.v.playerFlags(this.api.apiView, 0) & Su.Nd.ZoomFirstPerson),
          Nu = null !== (Ru = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Ru ? Ru : null;
        return (0, rR.g)({
          gun: Qu,
          aimable: mu
        }, Ju, (0, BR.e)(), Nu)
      }
      setCrosshairShown(uu) {
        Eu.d.set({
          crosshairShownOverride: uu
        })
      }
      getInventoryFreeSlotCount(uu) {
        return this.isLocal(uu) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(uu) {
        return this.isLocal(uu) ? this.items.selectedSlot : null
      }
      getItemSlot(uu, Ru) {
        return this.isLocal(uu) ? this.items.slot(Ru) : null
      }
      swapInventorySlots(uu, Ru) {
        return this.items.swap(uu, Ru)
      }
      isPlayerCrouching(uu) {
        if (this.isLocal(uu)) return 0 !== (Su.v.playerFlags(this.api.apiView, 0) & Su.Nd.Crouching);
        const Ru = Ky(uu);
        return Ru !== Su.Zc && 1 === this.api.queries.entityCrouching(Ru)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Su.v.playerFlags(this.api.apiView, 0) & Su.Nd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.huu()
      }
      getActionRay() {
        const uu = this.api.apiView;
        for (let Ru = 0; Ru < 3; Ru++) vR.origin[Ru] = Su.v.KRu(uu, 0, Ru), vR.direction[Ru] = Su.v.actionDir(uu, 0, Ru);
        return vR
      }
      canModifyBlockAt(uu, Ru, yu) {
        return 1 === this.api.queries.canModify(uu, Ru, yu)
      }
      isSolidToPlayerBlockId(uu) {
        return this.tables.isSolidBlockId(uu) && !this.chunks.isWalkThrough(uu)
      }
      blockNameToBlockId(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(uu, Ru)
      }
      blockIdToBlockName(uu) {
        return this.tables.nameOfId(uu)
      }
      MRu(uu, Ru, yu, Eu, Ku) {
        return 1 === this.api.queries.terrainBlocked(Eu, uu, Ru, yu, Ky(null !== Ku && void 0 !== Ku ? Ku : null))
      }
      getChunkVersion(uu, Ru, yu) {
        return this.chunks.version(uu, Ru, yu)
      }
      scanBlocks(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        return this.chunks.scan(uu, Ru, yu, Eu, Ku, Qu, mu, Ju)
      }
      isBlockInLoadedChunk(uu, Ru, yu) {
        return this.chunks.isLoaded(uu, Ru, yu)
      }
      getBlockId(uu, Ru, yu) {
        return this.chunks.yV(uu, Ru, yu)
      }
      playSound(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(uu)) return null;
        const mu = this.playSoundFrom(Ru, yu, Ku, Qu);
        return 1 === Eu ? mu : mu.rate(Eu)
      }
      playSoundFrom(uu, Ru, yu, Eu) {
        var Ku, Qu;
        const mu = this.deps.playSound;
        if (!mu) return AR.b;
        const Ju = null === yu || void 0 === yu ? void 0 : yu.GK,
          Nu = null !== (Ku = null === yu || void 0 === yu ? void 0 : yu.maxHearDist) && void 0 !== Ku ? Ku : VR.e,
          Xu = null !== (Qu = null === yu || void 0 === yu ? void 0 : yu.refDistance) && void 0 !== Qu ? Qu : VR.h;
        let Vu = null;
        if (Array.isArray(Ju)) YR[0] = Ju[0], YR[1] = Ju[1], YR[2] = Ju[2], Vu = YR;
        else if (void 0 !== Ju && null !== Ju) {
          const uu = Ky(Ju);
          if (!this.api.isLocal(uu)) {
            if (!this.api.readPosition(uu, YR)) return AR.b;
            Vu = YR
          }
        }
        return mu(uu, Ru, Vu, Vu && this.ear(), Nu, Xu, Eu)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, oR)) oR[1] += MR;
        else {
          const uu = this.api.apiView;
          if (0 === Su.v.viewProj(uu, 0, 3) && 0 === Su.v.viewProj(uu, 0, 7) && 0 === Su.v.viewProj(uu, 0, 11)) return null;
          for (let Ru = 0; Ru < 3; Ru++) oR[Ru] = Su.v.eye(uu, 0, Ru)
        }
        return Number.isFinite(oR[0] + oR[1] + oR[2]) ? oR : null
      }
      setBlockId(uu, Ru, yu, Eu) {
        if (!Number.isInteger(Eu) || Eu < 0 || Eu > 65535) throw new Error(`Invalid block id ${Eu}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(uu, Ru, yu)) return;
        const Ku = Math.floor(uu),
          Qu = Math.floor(Ru),
          mu = Math.floor(yu),
          Ju = this.predictedCells(Ku, Qu, mu, Eu);
        if (1 === this.api.queries.sA(Ku, Qu, mu, Eu)) {
          for (let uu = 0; uu < Ju.length; uu += 5) this.chunks.setOverlay(Ju[uu], Ju[uu + 1], Ju[uu + 2], Ju[uu + 3], 1 === Ju[uu + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(uu, Ru) {
        return this.deps.particles.create(uu, Ru)
      }
      playParticleEffect(uu) {
        this.deps.particles.playEffect(uu)
      }
      burstParticlePreset(uu, Ru, yu) {
        this.deps.particles.burstPreset(uu, Ru, yu)
      }
      createGameMesh(uu, Ru, yu) {
        const Eu = ++this.meshKeys,
          Ku = this.deps.cmd();
        if (!Ku) return Eu;
        const {
          look: Qu,
          colour: mu
        } = function(uu) {
          switch (uu.kind) {
            case void 0:
            case "flatEmissive":
              return uu.onTop ? {
                look: Su.ec.FlatOnTop,
                colour: [...uu.rgb, uu.alpha]
              } : uu.opaque ? {
                look: Su.ec.FlatOpaque,
                colour: [...uu.rgb, 1]
              } : {
                look: Su.ec.Flat,
                colour: [...uu.rgb, uu.alpha]
              };
            case "chevronPath":
              return {
                look: Su.ec.Chevrons, colour: [...(0, xR.e)(uu.colour), uu.alpha]
              };
            case "furnaceFire":
              return {
                look: Su.ec.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Ru), Ju = Math.floor(uu.positions.length / 3), Nu = function(uu, Ru) {
          const yu = Math.floor(uu.positions.length / 3),
            Eu = uu.indices.length,
            Ku = yu * (Ru ? 5 : 3),
            Qu = new Uint8Array(4 * (Ku + Eu)),
            mu = new DataView(Qu.buffer);
          for (let Xu = 0; Xu < 3 * yu; Xu++) mu.setFloat32(4 * Xu, uu.positions[Xu], !0);
          if (Ru) {
            var Ju;
            const Ru = null !== (Ju = uu.uvs) && void 0 !== Ju ? Ju : [];
            for (let uu = 0; uu < 2 * yu; uu++) {
              var Nu;
              mu.setFloat32(4 * (3 * yu + uu), null !== (Nu = Ru[uu]) && void 0 !== Nu ? Nu : 0, !0)
            }
          }
          for (let Xu = 0; Xu < Eu; Xu++) mu.setUint32(4 * (Ku + Xu), uu.indices[Xu], !0);
          return Qu
        }(uu, (0, NR.h)(Ru));
        return (0, Su.Pe)(Ku, 0, Eu, Qu, mu, yu, Ju, uu.indices.length, Nu) && this.liveMeshes.add(Eu), Eu
      }
      setGameMesh(uu, Ru) {
        var yu;
        const Eu = this.deps.cmd();
        if (!Eu) return;
        let Ku = 0;
        Ru.anchor && (Ku |= Su.hc.Anchor, aR[0] = Ru.anchor[0], aR[1] = Ru.anchor[1], aR[2] = Ru.anchor[2]), void 0 !== Ru.visible && (Ku |= Su.hc.Visible), Ru.uvOffset && (Ku |= Su.hc.UvOffset, fR[0] = Ru.uvOffset[0], fR[1] = Ru.uvOffset[1]);
        const Qu = null !== (yu = Ru.visibility) && void 0 !== yu ? yu : 1;
        void 0 !== Ru.visibility && (Ku |= Su.hc.Visibility), Ru.scale && (Ku |= Su.hc.Scale, uy[0] = Ru.scale[0], uy[1] = Ru.scale[1], uy[2] = Ru.scale[2]), 0 !== Ku && (0, Su.Ue)(Eu, 0, uu, Ku, Ru.visible ? 1 : 0, aR, fR, Qu, uy)
      }
      disposeGameMesh(uu) {
        const Ru = this.deps.cmd();
        Ru && !(0, Su.Se)(Ru, 0, uu) || this.liveMeshes.delete(uu)
      }
      hasPackModel(uu) {
        var Ru, yu, Eu;
        return null !== (Ru = null === (yu = (Eu = this.deps).hasPackModel) || void 0 === yu ? void 0 : yu.call(Eu, uu)) && void 0 !== Ru && Ru
      }
      disposeGameOutput() {
        const uu = uu => {
          try {
            uu()
          } catch (Ru) {
            console.error("Error freeing client game output", Ru)
          }
        };
        for (const Ru of [...this.liveMeshes]) uu((() => {
          this.disposeGameMesh(Ru)
        }));
        for (const Ru of [...this.livePools]) uu((() => {
          Ru.dispose()
        }));
        uu((() => {
          this.mobModels.disposeAll()
        })), uu((() => {
          this.setGroundArrowStyle(null)
        })), uu((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), uu((() => {
          this.setCrosshairShown(null)
        })), uu((() => {
          this.cameraTurn.dispose()
        })), uu((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(uu, Ru) {
        const yu = this.tables.idOf(uu.item);
        if (void 0 === yu) return null;
        const Eu = new LR(++this.poolKeys, {
          item: yu,
          scale: uu.scale,
          yaw: uu.yaw
        }, Ru, this.poolHost);
        return this.livePools.add(Eu), Eu
      }
      createMobModel(uu, Ru) {
        return this.mobModels.create(uu, Ru)
      }
      setRouteChevrons(uu) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !uu || 0 === uu.cells.length) return;
        const Ru = `${uu.colour} ${uu.alpha}`;
        Ru !== this.routeLook && (this.routeLook = Ru, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(uu) {
          const [Ru, yu, Eu] = uu[0].pos, Ku = [], Qu = [], mu = [];
          return uu.forEach(((uu, Ju) => {
            let {
              pos: Nu,
              way: [Xu, Vu]
            } = uu;
            const ru = Nu[0] - Ru + .5,
              Bu = Nu[1] - yu + .04,
              xu = Nu[2] - Eu + .5,
              [Su, pu] = [.35 * -Vu, .35 * Xu],
              [Tu, Wu] = [Ju * Ry, (Ju + 1) * Ry],
              ju = Ku.length / 3;
            Ku.push(ru - .5 * Xu + Su, Bu, xu - .5 * Vu + pu), Ku.push(ru - .5 * Xu - Su, Bu, xu - .5 * Vu - pu), Ku.push(ru + .5 * Xu + Su, Bu, xu + .5 * Vu + pu), Ku.push(ru + .5 * Xu - Su, Bu, xu + .5 * Vu - pu), Qu.push(0, Tu, 1, Tu, 0, Wu, 1, Wu), mu.push(ju, ju + 1, ju + 2, ju + 1, ju + 3, ju + 2)
          })), {
            positions: Ku,
            uvs: Qu,
            indices: mu
          }
        }(uu.cells), {
          kind: "chevronPath",
          colour: uu.colour,
          alpha: uu.alpha
        }, uu.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(uu) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(uu, 250) / 1e3 * 1.2 * Ry) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(uu) {
        this.pendingStyle = uu, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const uu = this.owedFrees;
        if (0 === uu.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Ru = this.deps.cmd();
        if (!Ru) return uu.length = 0, void(this.pendingFar = void 0);
        let yu = 0;
        for (; yu < uu.length && (0, Su.Ze)(Ru, 0, uu[yu]);) yu++;
        uu.splice(0, yu);
        const Eu = this.pendingStyle;
        if (void 0 !== Eu) {
          (Eu ? (0, Su.Xf)(Ru, 0, Eu.width, Eu.alpha, 1, Eu.endAtSolidFace ? 1 : 0) : (0, Su.Xf)(Ru, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Ku = this.pendingFar;
        void 0 !== Ku && (0, Su.Uf)(Ru, 0, null !== Ku && void 0 !== Ku ? Ku : 0, null === Ku ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(uu, Ru) {
        const yu = this.deps.cmd(),
          Eu = Ky(uu);
        yu && Eu !== Su.Zc && (0, Su.$f)(yu, 0, Eu, Ru)
      }
      setFacingTolerance(uu, Ru) {
        const yu = this.deps.cmd(),
          Eu = Ky(uu);
        yu && Eu !== Su.Zc && Qy(yu, Eu, Ru)
      }
      forEachEntity(uu) {
        const {
          api: Ru
        } = this;
        for (let yu = 0; yu < Ru.idStr.length; yu++) {
          const Eu = Ru.idStr[yu];
          null === Eu || bu(Ru.kinds[yu]) || uu(Eu)
        }
      }
      getEntityInfo(uu) {
        return this.deps.entityInfo.get(uu)
      }
      isEntityInteractable(uu) {
        const Ru = Ky(uu);
        return Ru !== Su.Zc && 1 === this.api.queries.entityInteractable(Ru)
      }
      isLocalPlayer(uu) {
        return this.isLocal(uu)
      }
      getLineOwner(uu) {
        var Ru;
        const yu = null === (Ru = this.deps.entityInfo.get(uu)) || void 0 === Ru ? void 0 : Ru.meshOpts;
        if (!yu) return null;
        try {
          const {
            lineToEId: uu
          } = JSON.parse(yu);
          return null !== uu && void 0 !== uu ? uu : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const uu = this.api.apiView;
        return OR[0] = Su.v.eye(uu, 0, 0), OR[1] = Su.v.eye(uu, 0, 1), OR[2] = Su.v.eye(uu, 0, 2), OR
      }
      getCameraFar() {
        return Su.v.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(uu) {
        null !== uu && (this.farSet = !0), this.pendingFar = uu, this.flushOwed()
      }
      turnCamera(uu, Ru) {
        this.cameraTurn.turn(uu, Ru)
      }
      clearPickupDelay(uu) {
        const Ru = this.deps.cmd(),
          yu = Ky(uu);
        Ru && yu !== Su.Zc && (0, Su.ye)(Ru, 0, yu)
      }
      sendChat(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = this.deps.sendCmd();
        yu && hR(yu, 0, iR.d.Chat, (0, gu.g)((0, iR.i)({
          Dm: uu,
          Mm: Ru
        })))
      }
      sendCommand(uu) {
        uu.length <= 119 && this.sendChat(`/${uu}`)
      }
      predictedCells(uu, Ru, yu, Eu) {
        const Ku = this.chunks,
          Qu = [],
          mu = (uu, Ru, yu, Eu, Ku) => {
            Qu.push(uu, Ru, yu, Eu, this.tables.blockRootId(Ku) === this.tables.blockRootId(Eu) ? 0 : 1)
          },
          Ju = Ku.yV(uu, Ru, yu),
          Nu = Ey(Ju);
        if (Nu) {
          const [Eu, Qu, Xu] = [uu - Nu.x, Ru - Nu.y, yu - Nu.z], Vu = yy[Ku.yV(Eu, Qu, Xu)], ru = null === Vu || void 0 === Vu ? void 0 : Vu.positions.some((uu => uu.id === Ju && uu.x === Nu.x && uu.y === Nu.y && uu.z === Nu.z));
          for (const uu of (ru && Vu ? Vu : Nu.main).positions) Ku.yV(Eu + uu.x, Qu + uu.y, Xu + uu.z) === uu.id && mu(Eu + uu.x, Qu + uu.y, Xu + uu.z, 0, uu.id)
        }
        const Xu = Ey(Eu);
        if (Xu)
          for (const ru of Xu.main.positions) {
            const [Eu, Qu, Ju] = [uu + ru.x - Xu.x, Ru + ru.y - Xu.y, yu + ru.z - Xu.z];
            mu(Eu, Qu, Ju, ru.id, Ku.yV(Eu, Qu, Ju))
          } else mu(uu, Ru, yu, Eu, Ju);
        const Vu = this.tables;
        if ((0 !== Vu.attachedTopOf(Ju) || 0 !== Vu.attachedTopOf(Eu)) && Ku.isLoaded(uu, Ru + 1, yu)) {
          let Nu = Ku.yV(uu, Ru + 1, yu);
          for (let Eu = 0; Eu < Qu.length; Eu += 5) Qu[Eu] === uu && Qu[Eu + 1] === Ru + 1 && Qu[Eu + 2] === yu && (Nu = Qu[Eu + 3]);
          const Xu = this.attachedTopWrite(Ju, Eu, Nu);
          void 0 !== Xu && mu(uu, Ru + 1, yu, Xu, Nu)
        }
        return Qu
      }
      attachedTopWrite(uu, Ru, yu) {
        const Eu = this.tables,
          Ku = Eu.attachedTopOf(uu),
          Qu = Eu.attachedTopOf(Ru),
          mu = 0 !== Ku && 0 !== yu && Eu.blockRootId(yu) === Eu.blockRootId(Ku);
        return 0 !== Ku && 0 !== Qu && Eu.blockRootId(uu) === Eu.blockRootId(Ru) ? mu && yu !== Qu ? Qu : void 0 : 0 === Qu || !mu && 0 !== yu ? mu ? 0 : void 0 : Qu
      }
    }
    const Jy = Su.sc + Su.tc * Su.zc.BYTES,
      Ny = 2147483647,
      Xy = new TextDecoder,
      Vy = new TextEncoder,
      ry = Object.freeze({
        QV: 0,
        nV: null,
        amountAddedToSlot: 0
      }),
      By = new Proxy({}, {
        get: () => () => Su.kd
      });

    function xy(uu) {
      return Number.isInteger(uu) && uu >= 0 && uu <= 65535
    }

    function Sy(uu) {
      return Number.isInteger(uu) && uu >= 0 && uu <= 4294967295
    }
    class py {
      constructor(uu) {
        this.deps = uu, this.zQ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Su.tc), this.ids = new Uint16Array(Su.tc), this.amounts = new Uint16Array(Su.tc), this.attrRead = new Float64Array(Su.tc).fill(-1), this.stale = new Uint16Array(Su.tc), this.staleVersion = new Uint32Array(Su.tc), this.instances = new Uint32Array(Su.tc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(uu) {
        var Ru;
        return Number.isInteger(uu) && uu >= 0 && uu < this.len && 0 !== this.ids[uu] && null !== (Ru = this.facades[uu]) && void 0 !== Ru ? Ru : null
      }
      jJ() {
        return this.slot(this.selected)
      }
      playerItems() {
        const uu = [];
        for (let Ru = 0; Ru < Math.min(Su.xd, this.len); Ru++) uu.push(this.slot(Ru));
        return uu
      }
      freeSlots() {
        let uu = 0;
        for (let Ru = 0; Ru < Math.min(Su.xd - Su.j, this.len); Ru++) 0 === this.ids[Ru] && uu++;
        return uu
      }
      amountOf(uu) {
        let Ru = 0;
        for (let Eu = 0; Eu < Math.min(Su.xd, this.len); Eu++) {
          const Ku = this.slot(Eu);
          var yu;
          if ((null === Ku || void 0 === Ku ? void 0 : Ku.name) === uu) Ru += null !== (yu = Ku.amount) && void 0 !== yu ? yu : 1
        }
        return Ru
      }
      instance(uu) {
        var Ru;
        return null !== (Ru = this.instances[uu]) && void 0 !== Ru ? Ru : 0
      }
      watch(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      touch() {
        this.version++
      }
      flush(uu) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const yu of [...this.listeners]) try {
            yu()
          } catch (Ru) {
            uu(Ru)
          }
        }
      }
      chestOpened(uu, Ru, yu) {
        this.zQ[0] = uu, this.zQ[1] = Ru, this.zQ[2] = yu, this.version++
      }
      refresh() {
        const uu = this.deps.api.apiView,
          Ru = Su.v.inventoryViewPtr(uu, 0),
          yu = Su.v.inventoryVersion(uu, 0),
          Eu = Su.v.selectedSlot(uu, 0);
        Eu !== this.selected && (this.selected = Eu, this.version++);
        const Ku = Su.v.slotIcon(uu, 0);
        if (Ku !== this.slotIconId && (this.slotIconId = Ku, this.iconChanged = !0), Ru === this.viewPtr && yu === this.viewVersion) return;
        this.viewPtr = Ru, this.viewVersion = yu;
        const Qu = this.deps.api.memoryData(Ru, Jy, 4, "the inventory view"),
          mu = Qu ? Math.min(Qu.getUint32(0, !0), Su.tc) : 0;
        mu !== this.len && (this.len = mu, this.version++);
        let Ju = 0;
        for (let Nu = 0; Nu < Su.tc; Nu++) {
          const uu = Su.sc + Nu * Su.zc.BYTES,
            Ru = null !== Qu && Nu < mu ? Su.zc.item(Qu, uu) : 0;
          if (0 === Ru || null === Qu) {
            0 !== this.ids[Nu] && (this.ids[Nu] = 0, this.attrRead[Nu] = -1, this.instances[Nu]++, this.version++);
            continue
          }
          const yu = Su.zc.amount(Qu, uu),
            Eu = Su.zc.attrVersion(Qu, uu);
          Ru === this.ids[Nu] && yu === this.amounts[Nu] || this.fill(Nu, Ru, yu), Eu !== this.attrRead[Nu] && (this.stale[Ju] = Nu, this.staleVersion[Ju] = Eu, Ju++)
        }
        Ju > 0 && this.fetchAttributes(Ju)
      }
      fill(uu, Ru, yu) {
        const {
          tables: Eu
        } = this.deps, Ku = Ru !== this.ids[uu];
        let Qu = this.facades[uu];
        Qu || (Qu = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[uu] = Qu), Ku && (Qu.name = Eu.nameOfId(Ru), Qu.typeObj = Eu.itemType(Ru), Qu.attributes = {
          customAttributes: {}
        }, this.attrRead[uu] = -1, this.instances[uu]++), Qu.amount = 0 === yu ? null : yu, this.ids[uu] = Ru, this.amounts[uu] = yu, this.version++
      }
      fetchAttributes(uu) {
        const {
          api: Ru,
          onError: yu
        } = this.deps, Eu = Ru.memoryView(Uint16Array, Ru.scratch(), uu, "item_attributes_batch's slots");
        if (!Eu) return void this.markRead(uu);
        Eu.set(this.stale.subarray(0, uu));
        const Ku = Ru.queries.itemAttributesBatch(uu),
          Qu = 4294967295 === Ku ? null : Ru.memoryData(Ru.scratch(), Ku, 4, "item_attributes_batch's answer");
        if (!Qu) return void this.markRead(uu);
        const mu = new Uint8Array(Qu.buffer, Qu.byteOffset, Ku);
        for (let Nu = 0; Nu + 8 <= Ku;) {
          const uu = Qu.getUint16(Nu, !0),
            Ru = Qu.getUint32(Nu + 4, !0),
            Eu = mu.subarray(Nu + 8, Nu + 8 + Ru);
          Nu += 8 + (0, Bu.he)(Ru);
          const Ku = this.facades[uu];
          if (Ku && 0 !== this.ids[uu] && 0 !== Ru) {
            try {
              Ku.attributes = JSON.parse(Xy.decode(Eu))
            } catch (Ju) {
              yu(Ju)
            }
            this.version++
          }
        }
        this.markRead(uu)
      }
      markRead(uu) {
        for (let Ru = 0; Ru < uu; Ru++) this.attrRead[this.stale[Ru]] = this.staleVersion[Ru]
      }
      swap(uu, Ru) {
        return xy(uu) && xy(Ru) && this.settle(this.queries().invSwap(uu, Ru))
      }
      move(uu, Ru, yu) {
        return xy(uu) && xy(Ru) && Sy(yu) && this.settle(this.queries().invMove(uu, Ru, yu))
      }
      quickMove(uu, Ru, yu, Eu) {
        var Ku, Qu;
        if (!xy(uu) || !xy(Ru) || !xy(yu) || null !== Eu && !Sy(Eu)) return null;
        const mu = this.queries().invQuickMove(uu, Ru, yu, null === Eu ? -1 : Math.min(Eu, Ny)),
          Ju = mu === Su.kd ? Su.Tb : null !== (Ku = null === (Qu = this.extras()) || void 0 === Qu ? void 0 : Qu[1]) && void 0 !== Ku ? Ku : Su.Tb;
        return this.settle(mu), Ju === Su.Tb ? null : Ju
      }
      remove(uu, Ru, yu) {
        return xy(uu) && Sy(Ru) && this.settle(this.queries().invRemove(uu, Ru, yu ? 1 : 0))
      }
      selectSlot(uu) {
        return xy(uu) && this.settle(this.queries().selectSlot(uu))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(uu, Ru, yu) {
        if (!xy(uu) || !Number.isInteger(Ru)) return !1;
        const [Eu, Ku, Qu] = yu;
        return this.settle(this.queries().invEnchant(uu, Ru, Math.floor(Eu), Math.floor(Ku), Math.floor(Qu)))
      }
      craft(uu, Ru, yu) {
        let Eu;
        try {
          Eu = this.deps.tables.getItemId(uu)
        } catch {
          return ry
        }
        if (!xy(Ru) || null !== yu && (Number.isNaN(yu) || yu < 0)) return ry;
        const Ku = null === yu || yu > Ny ? -1 : Math.floor(yu),
          Qu = this.queries().craft(Eu, Ru, Ku);
        let mu = ry;
        const Ju = Qu === Su.kd ? null : this.extras();
        if (Ju) {
          const [uu, Ru, yu] = Ju;
          mu = {
            QV: uu,
            nV: Ru === Su.Tb ? null : Ru,
            amountAddedToSlot: yu
          }
        }
        return this.settle(Qu), mu
      }
      salvage(uu, Ru, yu) {
        let Eu;
        try {
          Eu = this.deps.tables.getItemId(Ru)
        } catch {
          return !1
        }
        return xy(uu) && Number.isInteger(yu) && this.settle(this.queries().salvage(uu, Eu, Math.max(Math.min(yu, Ny), -Ny)))
      }
      craftingView(uu, Ru, yu) {
        var Eu;
        if (this.stopped) return null;
        const {
          api: Ku,
          onError: Qu
        } = this.deps, mu = uu ? Vy.encode(uu) : null;
        if (null !== mu) {
          if (mu.length > 1024) return Qu(new Error(`The crafting station ${uu}'s name is over 1024 bytes`)), null;
          const Ru = Ku.memoryView(Uint8Array, Ku.scratch(), mu.length, "crafting_view's station");
          if (!Ru) return null;
          Ru.set(mu)
        }
        const Ju = xy(Ru) && xy(yu),
          Nu = Ku.queries.craftingView(null !== (Eu = null === mu || void 0 === mu ? void 0 : mu.length) && void 0 !== Eu ? Eu : 0, Ju ? Ru : 0, Ju ? yu : 0);
        return Nu < Su.qb.BYTES ? (Ku.reportCorruption(`crafting_view's answer of ${Nu} bytes`), null) : Ku.memoryData(Ku.scratch(), Nu, 1, "crafting_view's answer")
      }
      queries() {
        var uu, Ru;
        return !1 === (null === (uu = (Ru = this.deps).beforeOp) || void 0 === uu ? void 0 : uu.call(Ru)) ? (this.stopped = !0, By) : this.deps.api.queries
      }
      extras() {
        const {
          api: uu
        } = this.deps;
        return uu.memoryView(Uint32Array, uu.scratch(), 3, "a sync query's extra words")
      }
      settle(uu) {
        if (uu === Su.gd)(0, ZR.e)();
        else if (uu !== Su.kd) {
          const Ru = this.deps.cmd();
          Ru && function(uu, Ru, yu) {
            return (0, ZR.e)(), (0, Su.kg)(uu, Ru, yu)
          }(Ru, 0, uu) || this.deps.onError(new Error(`Sync op ${uu}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), uu !== Su.kd
      }
    }
    const Ty = 1 / .6,
      Wy = [0, 1, 0],
      jy = [0, 0, 0],
      Hy = new Uint8Array(0),
      dy = 1.2 * SR.f.DW,
      by = new TextEncoder,
      Cy = [0, 0, 0],
      ky = [0, 0, 0],
      ey = new Map;

    function Ay(uu) {
      let Ru = ey.get(uu);
      return Ru || (ey.size >= 64 && ey.clear(), Ru = by.encode(`{"emitRate":${uu}}`), ey.set(uu, Ru)), Ru
    }

    function Dy(uu) {
      return Number.isFinite(uu) && uu > 0 ? uu : 0
    }

    function My(uu, Ru) {
      for (let yu = 0; yu < 3; yu++) {
        const Eu = Math.abs(Ru[yu]);
        Cy[yu] = uu[yu] - Eu, ky[yu] = 2 * Eu
      }
      return Number.isFinite(Cy[0] + Cy[1] + Cy[2] + ky[0] + ky[1] + ky[2])
    }

    function Iy(uu, Ru) {
      return "pos1" === uu || "pos2" === uu ? void 0 : Ru
    }

    function Gy(uu, Ru, yu) {
      return uu.length > Su.Md.MaxOpts ? (yu(new Error(`${Ru}'s particle opts are over ${Su.Md.MaxOpts} bytes of JSON`)), null) : uu
    }
    const Uy = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class ny {
      constructor(uu) {
        this.deps = uu, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(uu, Ru) {
        var yu;
        const Eu = this.sink(),
          Ku = null !== (yu = Ru.half) && void 0 !== yu ? yu : jy;
        if (!Eu || this.live >= Su.Md.MaxLiveKeys || this.nextKey > Su.Md.MaxKey || !My(Ru.pos, Ku)) return Uy;
        const Qu = this.nextKey,
          mu = Gy(function(uu) {
            var Ru, yu, Eu;
            const Ku = JSON.stringify({
              texture: "string" === typeof uu.texture ? uu.texture : "smokePuff",
              Nr: uu.Nr,
              minLifeTime: uu.minLifeTime,
              maxLifeTime: uu.maxLifeTime,
              minSize: uu.minSize,
              maxSize: uu.maxSize,
              minEmitPower: uu.minEmitPower,
              maxEmitPower: uu.maxEmitPower,
              emitRate: Dy(uu.emitRate),
              gravity: null !== (Ru = uu.gravity) && void 0 !== Ru ? Ru : jy,
              dir1: null !== (yu = uu.dir1) && void 0 !== yu ? yu : Wy,
              dir2: null !== (Eu = uu.dir2) && void 0 !== Eu ? Eu : Wy,
              colorGradients: uu.colorGradients,
              blendMode: uu.blendMode
            });
            return by.encode(Ku)
          }(uu), "createParticles", this.deps.onError);
        return mu && (0, Su.rf)(Eu, 0, Qu, 0, Su.Md.PresetNone, 0, Cy, ky, mu) ? (this.nextKey++, this.live++, this.started = !0, new sy(this, this.session, Qu, uu, Ku)) : Uy
      }
      playEffect(uu) {
        const Ru = this.sink(),
          {
            pos1: yu,
            pos2: Eu
          } = uu;
        if (!Ru || !yu || !Eu) return;
        for (let Qu = 0; Qu < 3; Qu++) Cy[Qu] = Math.min(yu[Qu], Eu[Qu]), ky[Qu] = Math.abs(Eu[Qu] - yu[Qu]);
        if (!Number.isFinite(Cy[0] + Cy[1] + Cy[2] + ky[0] + ky[1] + ky[2])) return;
        const Ku = Gy(by.encode(JSON.stringify(uu, Iy)), "playParticleEffect", this.deps.onError);
        Ku && (0, Su.lf)(Ru, 0, 0, Su.Md.PresetNone, Su.Md.HasBox, 0, Cy, ky, Ku)
      }
      burstPreset(uu, Ru, yu) {
        const Eu = this.sink(),
          Ku = Math.min(Math.floor(yu), Su.Md.MaxBurst);
        if (!Eu || !Object.hasOwn(Su.ic, uu) || !(Ku > 0)) return;
        const Qu = dy;
        for (let mu = 0; mu < 3; mu++) Cy[mu] = Ru[mu] - Qu / 2, ky[mu] = Qu;
        Number.isFinite(Cy[0] + Cy[1] + Cy[2]) && (0, Su.lf)(Eu, 0, 0, Su.ic[uu], Su.Md.HasBox, Ku, Cy, ky, Hy)
      }
      sessionEnded() {
        this.session++;
        const uu = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !uu || (0, Su.uf)(uu, 0)
      }
      sinkFor(uu) {
        return uu === this.session ? this.deps.cmd() : null
      }
      stop(uu, Ru) {
        const yu = this.sinkFor(uu);
        yu && (0, Su.yf)(yu, 0, Ru) && this.live--
      }
    }
    class sy {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.owner = uu, this.session = Ru, this.key = yu, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Ku[0]), Math.abs(Ku[1]), Math.abs(Ku[2])], this.rate = Dy(Eu.emitRate), this.emitted = this.rate > 0;
        const Qu = Eu.maxLifeTime * Ty * 1e3 + 250;
        this.stopDelayMs = Qu >= 0 ? Math.min(Qu, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(uu, Ru) {
        const yu = this.sink();
        if (yu) {
          if (Ru)
            for (let uu = 0; uu < 3; uu++) this.half[uu] = Math.abs(Ru[uu]);
          My(uu, this.half) && (0, Su.zf)(yu, 0, this.key, Su.Md.HasBox, Cy, ky, Hy)
        }
      }
      setEmitRate(uu) {
        const Ru = this.sink(),
          yu = Dy(uu);
        Ru && yu !== this.rate && (0, Su.zf)(Ru, 0, this.key, 0, jy, jy, Ay(yu)) && (this.rate = yu, this.emitted ||= yu > 0)
      }
      emit(uu) {
        const Ru = this.sink(),
          yu = Math.min(Math.floor(uu), Su.Md.MaxBurst);
        Ru && yu > 0 && (0, Su.lf)(Ru, 0, this.key, Su.Md.PresetNone, 0, yu, jy, jy, Hy) && (this.emitted = !0)
      }
      emitPoints(uu, Ru, yu) {
        const Eu = this.sink(),
          Ku = Math.min(Math.floor(yu), Su.Md.MaxPoints, Math.floor(Ru.length / 4));
        if (!Eu || !(Ku > 0) || !Number.isFinite(uu[0] + uu[1] + uu[2])) return;
        const Qu = new Uint8Array(Ru.buffer, Ru.byteOffset, Ku * Su.Md.PointBytes);
        (0, Su.of)(Eu, 0, this.key, Ku, uu, Qu) && (this.emitted = !0)
      }
      setDirections(uu, Ru) {
        const yu = this.sink();
        if (!yu || !Number.isFinite(uu[0] + uu[1] + uu[2] + Ru[0] + Ru[1] + Ru[2])) return;
        const Eu = by.encode(JSON.stringify({
          dir1: [uu[0], uu[1], uu[2]],
          dir2: [Ru[0], Ru[1], Ru[2]]
        }));
        (0, Su.zf)(yu, 0, this.key, 0, jy, jy, Eu)
      }
      stop() {
        const uu = this.sink();
        this.stopped = !0, uu && (this.emitted ? (this.rate > 0 && (0, Su.zf)(uu, 0, this.key, 0, jy, jy, Ay(0)), setTimeout((() => {
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
    const ty = zR.o,
      ly = new TextDecoder;

    function gy(uu, Ru) {
      const {
        serverIds: yu,
        kinds: Eu
      } = uu;
      let Ku = 0;
      for (let Qu = 0; Qu < yu.length; Qu++) {
        const uu = yu[Qu];
        if (uu !== Su.Zc && !bu(Eu[Qu])) {
          if (Ku === Ru.length) {
            const uu = new Int32Array(Math.max(64, 2 * Ku));
            uu.set(Ru), Ru = uu
          }
          Ru[Ku++] = uu
        }
      }
      return {
        ids: Ru,
        count: Ku
      }
    }

    function cy(uu, Ru) {
      return uu.length >= Ru ? uu : new Int32Array(Math.max(Ru, 2 * uu.length))
    }

    function Ly(uu, Ru, yu, Eu) {
      for (let Ku = 0; Ku < yu; Ku += 4096) {
        const Qu = Math.min(4096, yu - Ku),
          mu = uu.memoryView(Int32Array, uu.scratch(), Qu, "entity_info_batch's ids");
        if (!mu) return !1;
        mu.set(Ru.subarray(Ku, Ku + Qu));
        const Ju = uu.queries.entityInfoBatch(Qu),
          Nu = 4294967295 === Ju ? null : uu.memoryData(uu.scratch(), Ju, 4, "entity_info_batch's records");
        if (!Nu) return !1;
        for (let uu = 0; uu + Su.Yb.BYTES <= Ju;) {
          const Ru = Su.Yb.len(Nu, uu);
          Eu(Su.Yb.serverId(Nu, uu), zy(Nu, uu, Ru)), uu += Su.Yb.BYTES + (0, Bu.he)(Ru)
        }
      }
      return !0
    }

    function zy(uu, Ru, yu) {
      var Eu, Ku, Qu;
      const mu = Su.Yb.kind(uu, Ru),
        Ju = 0 === mu ? null : Cu(mu);
      if (null === Ju) return null;
      const Nu = Su.Yb.variation(uu, Ru),
        Xu = Su.Yb.pose(uu, Ru),
        Vu = Su.Yb.meta(uu, Ru),
        ru = Su.Yb.mesh(uu, Ru),
        Bu = 0 !== (Su.Yb.flags(uu, Ru) & Su.Xb.HasOpts),
        xu = ty[Ju];
      return Object.freeze({
        type: Ju,
        variation: Nu === Su.dd ? void 0 : null !== (Eu = null !== (Ku = null === xu || void 0 === xu ? void 0 : xu[Nu]) && void 0 !== Ku ? Ku : null === xu || void 0 === xu ? void 0 : xu[0]) && void 0 !== Eu ? Eu : "default",
        pose: Xu === Su.pc ? void 0 : null !== (Qu = Su.Nb[Xu]) && void 0 !== Qu ? Qu : Su.Nb[0],
        metaInfo: Vu === Su.pc ? void 0 : Su.Sc[Vu],
        meshKind: ru === Su.pc ? void 0 : Su.Oc[ru],
        meshOpts: Bu ? ly.decode(new Uint8Array(uu.buffer, uu.byteOffset + Ru + Su.Yb.BYTES, yu)) : void 0
      })
    }
    const Fy = 1,
      wy = 2;
    class Zy {
      constructor(uu) {
        this.deps = uu, this.wanted = 0, this.jJ = !1, this.refused = !1
      }
      get on() {
        return this.jJ
      }
      want(uu, Ru) {
        this.wanted = Ru ? this.wanted | uu : this.wanted & ~uu;
        const yu = 0 !== this.wanted;
        if (yu === this.jJ) return;
        const Eu = this.deps.cmd();
        null !== Eu ? (0, Su.rg)(Eu, 0, yu ? 1 : 0) ? (this.jJ = yu, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.jJ = !1
      }
    }
    class hy {
      constructor(uu) {
        this.deps = uu, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(uu) {
        var Ru;
        return this.complete || this.fill(), null !== (Ru = this.entries.get("string" === typeof uu ? uu : String(uu))) && void 0 !== Ru ? Ru : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(uu) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const uu = new Int32Array(2 * this.pending.length);
            uu.set(this.pending), this.pending = uu
          }
          this.pending[this.pendingCount++] = uu
        }
      }
      removed(uu) {
        this.entries.size > 0 && this.entries.delete(String(uu))
      }
      refresh() {
        const uu = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (uu > 0 && this.complete) {
          const {
            api: Ru
          } = this.deps;
          let yu = 0;
          const Eu = this.ids = cy(this.ids, uu);
          for (let Ku = 0; Ku < uu; Ku++) {
            const uu = this.pending[Ku],
              Qu = Ru.indexById.get(uu);
            void 0 === Qu || bu(Ru.kinds[Qu]) ? this.entries.delete(String(uu)) : Eu[yu++] = uu
          }
          yu > 0 && !this.batch(Eu, yu) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Fy, !1)
      }
      fill() {
        const {
          api: uu
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: uu
          } = this.deps, Ru = uu.on;
          uu.want(Fy, !0), !Ru && uu.on && (this.refill = this.midFrame)
        }
        const {
          ids: Ru,
          count: yu
        } = gy(uu, this.ids);
        this.ids = Ru, yu > 0 && !this.batch(Ru, yu) && (this.refill = !0)
      }
      batch(uu, Ru) {
        return Ly(this.deps.api, uu, Ru, ((uu, Ru) => {
          null === Ru ? this.entries.delete(String(uu)) : this.entries.set(String(uu), Ru)
        }))
      }
    }
    var Py = yu(4564);

    function iy(uu) {
      if ("message" !== uu.type || uu.Dm !== Py.$b.NewClientOptions || uu.payloadKind !== Bu.ac.Msgpack) return null;
      const Ru = (0, gu.e)(uu.payload);
      if (null === Ru || "object" !== typeof Ru || Array.isArray(Ru)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Ru
    }
    var Yy = yu(1215),
      oy = yu(36459);

    function qy(uu, Ru, yu, Eu, Ku, Qu, Ju) {
      var Nu, Xu, Vu;
      switch (uu) {
        case Su.le.ToggleMenu: {
          const uu = Su.M[Ru];
          mu.k.Op("toggleMenu", void 0 === uu ? "inventory" : `inventory|${uu}`);
          break
        }
        case Su.le.EditBoard:
          mu.k.Op("EditBoard", {
            pos: 0 === Ru ? null : yu
          });
          break;
        case Su.le.EditCodeBlock:
        case Su.le.ViewCodeBlock:
          mu.k.Op("EditCodeBlock", {
            pos: yu,
            canChangePos: uu === Su.le.EditCodeBlock
          });
          break;
        case Su.le.EditCustomLobbyBlock:
          mu.k.Op("EditCustomLobbyBlock", {
            pos: yu
          });
          break;
        case Su.le.OpenIronChest:
          mu.k.Op("OpenIronChest", {
            pos: yu
          });
          break;
        case Su.le.EditNameTag:
          mu.k.Op("EditNameTag", null !== (Nu = null === (Xu = Ku.jJ()) || void 0 === Xu || null === (Vu = Xu.attributes.customAttributes) || void 0 === Vu ? void 0 : Vu.text) && void 0 !== Nu ? Nu : "");
          break;
        case Su.le.EditBook: {
          var ru, Bu, pu;
          const uu = null === (ru = Ku.jJ()) || void 0 === ru ? void 0 : ru.attributes;
          mu.k.Op("EditBook", {
            pages: (0, Yy.Q)(null === uu || void 0 === uu || null === (Bu = uu.customAttributes) || void 0 === Bu ? void 0 : Bu.pages),
            title: null !== (pu = null === uu || void 0 === uu ? void 0 : uu.customDisplayName) && void 0 !== pu ? pu : "Title",
            isPublished: !(null === uu || void 0 === uu || !uu.customDescription)
          });
          break
        }
        case Su.le.CantChangeBlock:
          ! function(uu, Ru) {
            const yu = Ru.getClientOption("cantChangeError"),
              Eu = Ru.getClientOption(uu ? "cantBuildError" : "cantBreakError"),
              Ku = uu ? yu : Eu;
            (Ru.getClientOption("canChange") || Ku || "You cannot modify this block" !== yu) && mu.k.Op("showBottomMessage", {
              message: Eu || yu,
              type: "Error"
            })
          }(1 === Ru, Qu);
          break;
        case Su.le.MiddleBarStart:
          mu.k.Op("middleScreenBarInitiate", {
            duration: Eu,
            rE: 1 === yu[0],
            horizBarRemOffset: Ru
          });
          break;
        case Su.le.MiddleBarStop:
          mu.k.Op("middleScreenBarRemove");
          break;
        case Su.le.Hitmarker:
          mu.k.Op("localGunHitmarker", {
            Ry: 1 === Ru
          });
          break;
        case Su.le.ShotsLeft:
          mu.k.Op("localPlayerNewShotsLeft", Eu);
          break;
        case Su.le.AimingOverlay:
          mu.k.Op("aimingOverlay", 3 === (3 & Ru) ? "sniper" : "none");
          break;
        case Su.le.BottomMessage:
          mu.k.Op("showBottomMessage", JSON.parse(Ju()));
          break;
        case Su.le.Crosshair:
          Ku.inaccuracy = (0, cu.g)(Eu), (0, oy.c)().crosshairAccuracy(Ku.inaccuracy);
          break;
        case Su.le.ChargeStage:
          break;
        case Su.le.EmoteWheelClose:
          mu.k.Op("requestEmoteWheelClose");
          break;
        case Su.le.BlockMined:
          mu.k.Op("localBlockMined");
          break;
        default:
          throw new xu.c(`UiEvent of no kind: what ${uu}`)
      }
    }
    var Oy = yu(37743),
      vy = yu(9064),
      ay = yu(1895),
      fy = yu(36577),
      uE = yu(9079),
      RE = yu(4549);
    const yE = 10,
      EE = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      KE = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      QE = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function mE(uu, Ru) {
      let yu, Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Qu = () => (yu = (0, ay.p)(yu, Ru()), yu);
      return {
        current: Qu,
        watch(Ru) {
          const yu = () => {
              Ru(Qu())
            },
            mu = [uu.watch(yu)];
          return null !== Eu && mu.push((0, ay.s)((uu => {
            uu.some(Eu) && yu()
          }))), null !== Ku && mu.push(Ku(yu)), () => {
            for (const uu of mu) uu()
          }
        }
      }
    }

    function JE(uu) {
      return uu && {
        name: uu.name,
        amount: uu.amount,
        attributes: uu.attributes
      }
    }
    const NE = new WeakMap;

    function XE(uu) {
      let Ru = NE.get(uu);
      return void 0 === Ru && (Ru = (0, uE.creativeItemIds)().map((Ru => ({
        name: uu.nameOfId(Ru),
        amount: uu.isStackableId(Ru) ? 1 : null,
        attributes: (0, Oy.e)("Gun" === (0, uE.itemTypeOf)(Ru) ? {
          type: "Gun",
          clipSize: (0, uE.clipSizeOf)(Ru)
        } : void 0)
      }))), NE.set(uu, Ru)), Ru
    }

    function VE(uu, Ru, yu, Eu) {
      const Ku = Ru => (uu.flush(Eu), Ru),
        Qu = yu => {
          var Eu, Ku, Qu, mu, Ju, Nu, Xu;
          const Vu = uu.slot(yu);
          if (!Vu) return null;
          const {
            rootName: ru,
            metaStr: Bu
          } = Ru.getMetaInfo(Vu.name);
          return {
            name: Vu.name,
            amount: Vu.amount,
            attributes: Vu.attributes,
            instance: uu.instance(yu),
            displayName: null !== (Eu = Vu.attributes.customDisplayName) && void 0 !== Eu ? Eu : Ru.getDisplayName(ru),
            requiresAmmo: "RequiresAmmo" === Bu,
            clipSize: null !== (Ku = null !== (Qu = null === (mu = Vu.attributes.customAttributes) || void 0 === mu || null === (Ju = mu.gunStats) || void 0 === Ju ? void 0 : Ju.clipSize) && void 0 !== Qu ? Qu : null === (Nu = Ru.getGunStats(ru)) || void 0 === Nu ? void 0 : Nu.clipSize) && void 0 !== Ku ? Ku : null === (Xu = Vu.typeObj) || void 0 === Xu ? void 0 : Xu.clipSize
          }
        },
        Ju = function(uu, Ru) {
          let yu = null,
            Eu = {
              focus: null,
              recipes: [],
              detail: null
            },
            Ku = -1;
          const Qu = new Set;
          return {
            read() {
              var Qu, mu;
              if (null === yu) return null !== Eu.focus && (Eu = {
                ...Eu,
                focus: null
              }), Eu;
              if (Eu.focus === yu && Ku === uu.changes) return Eu;
              if (Ku = uu.changes, 0 === uu.length) return Eu = {
                focus: yu,
                recipes: [],
                detail: null
              }, Eu;
              let Ju = 0;
              if (null !== yu.recipe) try {
                Ju = Ru.getItemId(yu.recipe.name)
              } catch {}
              const Nu = uu.craftingView(yu.station, Ju, null !== (Qu = null === (mu = yu.recipe) || void 0 === mu ? void 0 : mu.KV) && void 0 !== Qu ? Qu : 0);
              return Eu = null === Nu ? {
                focus: yu,
                recipes: [],
                detail: null
              } : function(uu, Ru, yu) {
                let Eu = Su.qb.BYTES;
                const Ku = [];
                for (let Vu = Su.qb.recipes(uu, 0); Vu > 0; Vu--) {
                  const yu = Su.gb.flags(uu, Eu),
                    Qu = {
                      name: Ru.nameOfId(Su.gb.item(uu, Eu)),
                      KV: Su.gb.recipe(uu, Eu),
                      requires: [],
                      produces: Su.gb.produces(uu, Eu),
                      haveIngredients: 0 !== (yu & Su.db.HaveIngredients),
                      listed: 0 !== (yu & Su.db.Listed)
                    };
                  let mu = Su.gb.requires(uu, Eu);
                  for (Eu += Su.gb.BYTES; mu > 0; mu--) {
                    const yu = Su.kb.items(uu, Eu);
                    Qu.requires.push({
                      items: xE(uu, Eu + Su.kb.BYTES, yu, Ru),
                      amt: Su.kb.amount(uu, Eu)
                    }), Eu += Su.kb.BYTES + 2 * yu
                  }
                  Ku.push(Qu)
                }
                const Qu = Su.qb.flags(uu, 0);
                if (null === yu.recipe || 0 === (Qu & Su.nb.Detail)) return {
                  focus: yu,
                  recipes: Ku,
                  detail: null
                };
                const mu = {},
                  Ju = {};
                for (let Vu = Su.qb.ingredients(uu, 0); Vu > 0; Vu--) {
                  const yu = Su.cb.item(uu, Eu),
                    Ku = Su.cb.from(uu, Eu),
                    Qu = Su.cb.amount(uu, Eu);
                  Eu += Su.cb.BYTES;
                  const Nu = Ku === Su.K ? null : xE(uu, Eu, Ku, Ru);
                  if (null !== Nu && (Eu += 2 * Ku), 0 === yu) continue;
                  const Xu = Ru.nameOfId(yu);
                  mu[Xu] = Qu, null !== Nu && (Ju[Xu] = Nu)
                }
                const {
                  name: Nu,
                  KV: Xu
                } = yu.recipe;
                return {
                  focus: yu,
                  recipes: Ku,
                  detail: {
                    name: Nu,
                    KV: Xu,
                    craftAllTimes: Su.qb.craftAllTimes(uu, 0),
                    roomForOne: 0 !== (Qu & Su.nb.RoomForOne),
                    resultStackable: Boolean(Ru.getItemStat(Nu, "stackable")),
                    amounts: mu,
                    ingredientsCraftedFrom: Ju
                  }
                }
              }(Nu, Ru, yu), Eu
            },
            setFocus(uu) {
              yu = uu;
              for (const Ru of [...Qu]) Ru()
            },
            watchFocus: uu => (Qu.add(uu), () => {
              Qu.delete(uu)
            })
          }
        }(uu, Ru);
      return {
        states: {
          inventory: mE(uu, (() => {
            const yu = uu.length;
            if (0 === yu) return EE;
            const Eu = [];
            for (let Ru = 0; Ru < Su.xd; Ru++) Eu.push(JE(uu.slot(Ru)));
            const Ku = uu.slotIcon,
              Qu = Eu[uu.selectedSlot];
            0 !== Ku && Qu && (Eu[uu.selectedSlot] = {
              ...Qu,
              icon: Ru.nameOfId(Ku)
            });
            const mu = !0 === Ru.getClientOption("creative");
            let Ju = [],
              Nu = null;
            if (yu > Su.xd) {
              for (let Ru = Su.xd; Ru < yu; Ru++) Ju.push(JE(uu.slot(Ru)));
              Nu = {
                type: null,
                pos: [...uu.zQ],
                numSlots: yu - Su.xd,
                ironChest: null
              }
            } else mu && (Ju = XE(Ru));
            return {
              player: Eu,
              chestOrCreative: Ju,
              chest: Nu,
              creative: mu,
              selectedSlot: uu.selectedSlot,
              freeSlots: uu.freeSlots()
            }
          }), (0, ay.i)("creative")),
          hotbar: mE(uu, (() => {
            if (0 === uu.length) return KE;
            const Ru = [];
            for (let uu = 0; uu < yE; uu++) Ru.push(Qu(uu));
            return {
              items: Ru,
              ammo: uu.amountOf("Ammo"),
              selectedSlot: uu.selectedSlot
            }
          }), (0, ay.h)("DisplayName", "GunStats")),
          crafting: mE(uu, Ju.read, null, Ju.watchFocus),
          heldItemAim: mE(uu, (() => {
            var Ru;
            if (!yu()) return QE;
            const Eu = null === (Ru = uu.jJ()) || void 0 === Ru ? void 0 : Ru.typeObj,
              Ku = "Gun" === (null === Eu || void 0 === Eu ? void 0 : Eu.type);
            return {
              gun: Ku,
              aimable: Ku || !0 === (null === Eu || void 0 === Eu ? void 0 : Eu.showsAimingUi),
              chargeName: "Chargeable" === (null === Eu || void 0 === Eu ? void 0 : Eu.type) ? Eu.name : null
            }
          }), null, (uu => function(uu, Ru) {
            let yu = uu();
            return (0, RE.y)((() => {
              const Eu = uu();
              Eu !== yu && (yu = Eu, Ru(Eu))
            }))
          }(yu, uu)))
        },
        events: {
          hotbarSlotRequested: (0, ay.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, ay.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, ay.c)("numkeyPressed"),
          inventoryDropRequested: (0, ay.c)("DropInvenItem"),
          chestToggled: (0, ay.c)("chestToggleFromServer"),
          chestRefreshed: (0, ay.c)("chestRefreshedFromServer", BE),
          inventorySynced: (0, ay.c)("syncedInvenFromServer", BE),
          enchantingTableOpened: (0, ay.c)("enchantingTable", (uu => {
            let {
              position: yu,
              yV: Eu
            } = uu;
            return {
              position: [...yu],
              blockName: Ru.getMetaInfo(Eu).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Ru) {
            uu.selectSlot(Ru), uu.flush(Eu)
          },
          removeInventoryItem(Ru) {
            let {
              slot: yu,
              amount: Eu,
              drop: Qu
            } = Ru;
            return Ku(uu.remove(yu, Eu, Qu))
          },
          swapInventorySlots(Ru) {
            let {
              a: yu,
              b: Eu
            } = Ru;
            return Ku(uu.swap(yu, Eu))
          },
          moveInventoryItem(Ru) {
            let {
              from: yu,
              to: Eu,
              amount: Qu
            } = Ru;
            return Ku(uu.move(yu, Eu, Qu))
          },
          quickMoveInventoryItem(Ru) {
            let {
              slot: yu,
              start: Eu,
              end: Qu,
              amount: mu
            } = Ru;
            return Ku(uu.quickMove(yu, Eu, Qu, mu))
          },
          closeChest() {
            uu.closeChest(), uu.flush(Eu), mu.k.Op("chestClosedByPlayer")
          },
          focusCrafting(uu) {
            Ju.setFocus(uu)
          },
          craftRecipe(Ru) {
            let {
              name: yu,
              KV: Eu,
              times: Qu
            } = Ru;
            return Ku(uu.craft(yu, Eu, Qu))
          },
          salvageItem(Ru) {
            let {
              slot: yu,
              name: Eu,
              amount: Qu
            } = Ru;
            return Ku(uu.salvage(yu, Eu, Qu))
          },
          enchantItem(Ru) {
            let {
              slot: yu,
              level: Eu,
              tablePos: Ku
            } = Ru;
            uu.enchant(yu, Eu, Ku)
          }
        },
        queries: {
          enchantingOffer(yu) {
            let {
              slot: Eu,
              blockName: Ku
            } = yu;
            return function(uu, Ru, yu, Eu) {
              const Ku = uu.slot(yu);
              if (!Ku || !Ru.getClientOption("canCraft") || !(0, vy.n)(Eu) || (0, vy.m)(Ku.attributes)) return rE;
              const Qu = (0, uE.enchantmentPerksOf)(Ru.getItemId(Ku.name));
              if (0 === Qu.length) return rE;
              const mu = [];
              for (let Ju = 0; Ju < fy.d; Ju++) {
                const {
                  commonProb: uu,
                  uncommonProb: Ru,
                  rareProb: yu,
                  epicProb: Ku,
                  legendaryProb: Qu,
                  level: Nu
                } = (0, vy.f)(Eu, Ju);
                mu.push({
                  level: Nu,
                  odds: [uu, Ru, yu, Ku, Qu].map((uu => 100 * uu))
                })
              }
              return {
                perks: [...Qu],
                options: mu
              }
            }(uu, Ru, Eu, Ku)
          }
        }
      }
    }
    const rE = Object.freeze({
      perks: [],
      options: []
    });

    function BE() {
      return null
    }

    function xE(uu, Ru, yu, Eu) {
      const Ku = [];
      for (let Qu = 0; Qu < yu; Qu++) {
        const yu = uu.getUint16(Ru + 2 * Qu, !0);
        0 !== yu && Ku.push(Eu.nameOfId(yu))
      }
      return Ku
    }
    class SE {
      constructor(uu) {
        this.api = uu, this.positions = new Map, this.targeted = {
          M6: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          RT: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(uu) {
        let Ru = this.positions.get(uu);
        return Ru || (this.api.checkValid(uu) || this.api.isLocal(uu) ? (Ru = [NaN, NaN, NaN], this.api.readPosition(uu, Ru), this.positions.set(uu, Ru), Ru) : null)
      }
      huu() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Ru, yu] of this.positions) this.api.readPosition(Ru, yu) || this.api.checkValid(Ru) || this.api.isLocal(Ru) || this.positions.delete(Ru);
        const uu = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Su.v.playerFlags(uu, 0) & Su.Nd.Breaking) && Su.v.breakingProgress(uu, 0) >= 0, this.isBreaking)
          for (let Ru = 0; Ru < 3; Ru++) this.breaking[Ru] = Su.v.breakingPos(uu, 0, Ru)
      }
      refreshTarget() {
        const uu = this.api.apiView,
          Ru = Su.v.targetBlockId(uu, 0);
        if (this.hasTarget = Ru !== Su.ad, this.hasTarget) {
          const yu = this.targeted;
          yu.M6 = Ru;
          for (let Ru = 0; Ru < 3; Ru++) yu.position[Ru] = Su.v.targetBlock(uu, 0, Ru), yu.normal[Ru] = Su.v.targetNormal(uu, 0, Ru), yu.RT[Ru] = Su.v.targetAdjacent(uu, 0, Ru)
        }
      }
      despawned(uu) {
        const Ru = this.positions.get(uu);
        Ru && !this.api.isLocal(uu) && (Ru.fill(NaN), this.positions.delete(uu))
      }
    }
    var pE = yu(40209),
      TE = yu(40197),
      WE = yu(36571);
    const jE = 1,
      HE = 2;
    class dE {
      constructor() {
        this.game = new WE.g, this.client = new WE.g, this.jJ = 0, this.movesFly = null
      }
      setGame(uu) {
        if (null === uu || "object" !== typeof uu) return !1;
        const {
          key: Ru,
          value: yu
        } = uu;
        return "string" === typeof Ru && (this.game.setBooleanType(Ru, Boolean(yu)), !0)
      }
      setClient(uu, Ru) {
        this.client.setBooleanType(uu, Ru)
      }
      clearGame() {
        this.game = new WE.g, this.movesFly = null
      }
      setMovesFly(uu) {
        this.movesFly = uu
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? jE : 0) | (this.client._getTotalBooleanVal() ? HE : 0)
      }
      write(uu) {
        const Ru = this.perms(),
          {
            movesFly: yu
          } = this;
        if (Ru === this.jJ && null === yu) return !0;
        let Eu = Su._b.Keep;
        return null !== yu && (Eu = yu ? Su._b.On : Su._b.Off), !(!uu || !(0, Su.Ke)(uu, 0, Eu, Ru, yu ? 1 : 0)) && (this.jJ = Ru, this.movesFly = null, !0)
      }
    }
    class bE {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = uu, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Ju.b,
          get y() {
            return Ru()
          }
        }
      }
      get hasView() {
        const uu = this.api.apiView,
          Ru = Su.v.viewProj;
        return 0 !== Ru(uu, 0, 3) || 0 !== Ru(uu, 0, 7) || 0 !== Ru(uu, 0, 11) || 0 !== Ru(uu, 0, 15)
      }
      get cameraPosition() {
        const uu = this.api.apiView,
          {
            eye: Ru
          } = this;
        for (let yu = 0; yu < 3; yu++) Ru[yu] = Su.v.eye(uu, 0, yu);
        return Ru
      }
      get cameraDirection() {
        const uu = this.api.apiView,
          Ru = Su.v.viewProj,
          yu = Ru(uu, 0, 3),
          Eu = Ru(uu, 0, 7),
          Ku = Ru(uu, 0, 11),
          Qu = Math.hypot(yu, Eu, Ku),
          {
            forward: mu
          } = this;
        return Qu > 0 && (mu[0] = yu / Qu, mu[1] = Eu / Qu, mu[2] = Ku / Qu), mu
      }
      get cameraHeading() {
        return Su.v.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Su.v.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Su.v.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Su.v.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(uu) {
        this.clip(uu);
        const {
          clipX: Ru,
          clipY: yu,
          clipW: Eu
        } = this;
        if (Eu > 0) {
          const uu = Ru / Eu * 50,
            Ku = -yu / Eu * 50;
          return Math.abs(uu) <= this.screenBandPct.x && Math.abs(Ku) <= this.screenBandPct.y ? {
            x: 50 + uu,
            y: 50 + Ku
          } : this.clampToBand(uu, Ku)
        }
        const Ku = this.cameraPosition,
          Qu = Math.hypot(uu[0] - Ku[0], uu[1] - Ku[1], uu[2] - Ku[2]),
          mu = this.api.apiView,
          Ju = Su.v.viewProj,
          Nu = Qu > 0 ? Ru / Qu : 0,
          Xu = Qu > 0 ? -yu / Qu : 0,
          Vu = Math.hypot(Ju(mu, 0, 1), Ju(mu, 0, 5), Ju(mu, 0, 9)),
          ru = Nu / Math.hypot(Ju(mu, 0, 0), Ju(mu, 0, 4), Ju(mu, 0, 8)),
          Bu = Xu / Vu,
          xu = !(Math.abs(ru) >= .001 || Math.abs(Bu) >= .001);
        return this.clampToBand(Nu, xu ? -(Vu || 1) : Xu)
      }
      projectDirectionToScreenPos(uu) {
        if (!this.hasView) return;
        const Ru = this.cameraPosition,
          yu = this.along;
        for (let Eu = 0; Eu < 3; Eu++) yu[Eu] = Ru[Eu] + 10 * uu[Eu];
        return this.projectWorldPosToScreenPos(yu)
      }
      projectWorldPosToViewport(uu) {
        this.clip(uu);
        const {
          clipX: Ru,
          clipY: yu,
          clipW: Eu
        } = this;
        return Eu > 0 ? {
          x: 50 + Ru / Eu * 50,
          y: 50 - yu / Eu * 50
        } : null
      }
      clip(uu) {
        const Ru = this.api.apiView,
          yu = uu[0] - Su.v.origin(Ru, 0, 0),
          Eu = uu[1] - Su.v.origin(Ru, 0, 1),
          Ku = uu[2] - Su.v.origin(Ru, 0, 2),
          Qu = Su.v.viewProj;
        this.clipX = Qu(Ru, 0, 0) * yu + Qu(Ru, 0, 4) * Eu + Qu(Ru, 0, 8) * Ku + Qu(Ru, 0, 12), this.clipY = Qu(Ru, 0, 1) * yu + Qu(Ru, 0, 5) * Eu + Qu(Ru, 0, 9) * Ku + Qu(Ru, 0, 13), this.clipW = Qu(Ru, 0, 3) * yu + Qu(Ru, 0, 7) * Eu + Qu(Ru, 0, 11) * Ku + Qu(Ru, 0, 15)
      }
      clampToBand(uu, Ru) {
        return (0, Ju.f)(uu, Ru, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var CE = yu(4578);
    const kE = new TextEncoder,
      eE = new Uint8Array(Su.T * Su.Q);
    class AE {
      constructor() {
        this.buttons = [], this.jJ = !0
      }
      set(uu) {
        this.buttons = uu, this.jJ = !1
      }
      attached() {
        this.jJ = 0 === this.buttons.length
      }
      write(uu) {
        if (this.jJ) return;
        const Ru = new Uint8Array(Su.T),
          yu = new Uint8Array(Su.T);
        let Eu = 0,
          Ku = 0;
        for (const {
            id: Qu,
            keycode: mu
          }
          of this.buttons) {
          if (Eu === Su.T) break;
          const {
            read: uu,
            written: Ju
          } = kE.encodeInto(Qu, eE.subarray(Ku, Ku + Su.Q));
          if (uu < Qu.length) continue;
          const Nu = CE.j[mu];
          Ru[Eu] = "number" === typeof Nu ? Nu : 0, yu[Eu] = Ju, Eu++, Ku += Ju
        }
        this.jJ = (0, Su.we)(uu, 0, Eu, Ru, yu, eE.subarray(0, Ku))
      }
    }

    function DE(uu, Ru, yu) {
      const Eu = kE.encode(Ru);
      return Eu.length <= Su.Q && function(uu, Ru, yu, Eu) {
        return (0, ZR.e)(), (0, Su.Bf)(uu, Ru, yu, Eu)
      }(uu, 0, yu ? 1 : 0, Eu)
    }
    const ME = new TextDecoder,
      IE = new TextEncoder,
      GE = new Uint8Array(0),
      UE = [0, 0, 0],
      nE = {
        off: Su.Rd.Off,
        key: Su.Rd.Key,
        touch: Su.Rd.Touch
      };
    class sE {
      constructor(uu) {
        var Ru;
        this.options = uu, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new AE, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new dE, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Px = uu => {
          if ((0, xu.g)(uu)) throw uu;
          this.onError(uu)
        }, this.api = uu.api, this.tables = uu.tables, this.onError = null !== (Ru = uu.onError) && void 0 !== Ru ? Ru : uu => {
          console.error("Error in client game callback", uu)
        }, this.renderFrame = new bE(this.api, uu.screenBandY), this.live = new SE(this.api), this.chunks = new JR(this.api.memory, (() => this.api.apiView)), this.items = new py({
          api: this.api,
          tables: uu.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: uu.beforeOp
        });
        const yu = () => this.stopped() ? null : this.cmd,
          Eu = () => this.sessionLive;
        this.entityInfoWatch = new Zy({
          cmd: yu,
          onError: this.onError
        }), this.entityInfo = new hy({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Eu
        }), this.particles = new ny({
          cmd: yu,
          isSessionLive: Eu,
          onError: this.onError
        }), this.clientApi = new my({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: uu.tables,
          cmd: yu,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Eu,
          beforeWrite: () => {
            var Ru;
            if (this.stopped()) return !1;
            const yu = this.generation;
            return !1 !== (null === (Ru = uu.beforeWrite) || void 0 === Ru ? void 0 : Ru.call(uu)) && yu === this.generation
          },
          playerDbId: () => {
            const uu = this.session;
            if (null === uu) throw new Error("No game session has started, so the local player has no DB id");
            return uu.playerDbId
          },
          playSound: uu.playSound,
          setLocalOptions: uu.setLocalOptions,
          hasPackModel: uu.hasPackModel
        }), this.scriptedCamera = new Yu({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: uu.cameraScreen,
          showFacing: uu.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= VE(this.items, this.tables, (() => this.localPlayerAlive()), this.Px), this.itemSources
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
      clickCodeBlock(uu) {
        const Ru = this.sessionLive ? this.sendCmd() : null;
        return null !== Ru && (yu = Ru, Eu = 0, Ku = uu[0], Qu = uu[1], mu = uu[2], (0, ZR.e)(), (0, Su.Ce)(yu, Eu, Ku, Qu, mu));
        var yu, Eu, Ku, Qu, mu
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(uu) {
        const Ru = this.liveCmd();
        return null === Ru ? (this.pendingZoom = uu, !1) : (this.pendingZoom = null, (0, Su.jg)(Ru, 0, uu, 1))
      }
      Dk(uu) {
        const Ru = this.stopped() ? null : this.cmd;
        return null !== Ru && (0, Su.dg)(Ru, 0, uu ? 1 : 0)
      }
      respawn() {
        const uu = this.sessionLive ? this.sendCmd() : null;
        return null !== uu && (Ru = uu, yu = 0, (0, ZR.e)(), (0, Su.Pf)(Ru, yu));
        var Ru, yu
      }
      bindCustomButtonKeys(uu) {
        this.customButtons.set(uu)
      }
      pressCustomButton(uu, Ru) {
        const yu = this.sessionLive ? this.sendCmd() : null;
        return null !== yu && DE(yu, uu, Ru)
      }
      padMove(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = this.liveCmd();
        return null !== mu && (0, Su.kf)(mu, 0, uu, Ru, yu, Eu, Ku, Qu)
      }
      thirdPersonFor(uu) {
        const Ru = this.liveCmd();
        return null !== Ru && (0, Su.og)(Ru, 0, null !== uu && void 0 !== uu ? uu : 1 / 0)
      }
      send(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Eu && hR(Eu, yu ? Bu.fd : 0, uu, (0, gu.g)(Ru))
      }
      socketAttached(uu) {
        this.openSocket = uu, this.socketLeftSinceAttach = !1
      }
      socketDetached(uu) {
        this.openSocket === uu && (this.openSocket = 0)
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
      attach(uu) {
        const Ru = () => uu.isStopped;
        this.stopped = Ru, this.cmd = uu.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const yu = this.api.apiView;
        this.overflowGen = Su.v.eventOverflowGen(yu, 0), this.resyncOwed = 0 !== Su.v.eventOverflowMask(yu, 0), uu.setGameHost(this), uu.setEventWalker((uu => {
          this.api.walk(uu, this, Ru)
        }))
      }
      watchPromptPick(uu) {
        this.promptWatch = uu, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : tE(Su.v.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Su.wc.None : Su.v.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Su.v.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === uu || uu >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, uu, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(uu) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(uu)
      }
      netEvent(uu) {
        "connection" === uu.type ? uu.phase === Bu.J.Activated && uu.conn !== this.activeConn && uu.conn > this.closedThrough ? (this.endSession(), this.activeConn = uu.conn, this.endGameGrants(), this.dropGameCamera()) : uu.phase !== Bu.J.Left && uu.phase !== Bu.J.Closed || uu.conn !== this.activeConn ? uu.phase === Bu.J.Resumed && 0 !== this.activeConn && uu.conn > this.closedThrough && (this.activeConn = uu.conn) : this.closeGame() : uu.conn === this.activeConn && 0 !== uu.conn && (uu.Dm === TE.w ? this.gunHit(uu.payload) : uu.Dm === Py.$b.EditItemCraftingRecipes || uu.Dm === TE.X ? this.items.touch() : (this.serverOptions(uu), this.gameMessage(uu)));
        const Ru = this.options.onNetEvent;
        Ru && this.guard((() => {
          Ru(uu)
        }))
      }
      serverOptions(uu) {
        const Ru = this.options.serverOptions,
          yu = Ru ? this.decoded(iy, uu) : null;
        Ru && yu && this.guard((() => {
          Ru.applyNewClientOptions(yu)
        }))
      }
      gameMessage(uu) {
        let Ru = null;
        try {
          Ru = function(uu) {
            if ("message" !== uu.type || uu.Dm !== Py.$b.GameCodeMessage || uu.payloadKind !== Bu.ac.Msgpack) return null;
            const Ru = (0, gu.e)(uu.payload);
            if (null === Ru || "object" !== typeof Ru || "string" !== typeof Ru.messageType) throw new Error("GameCodeMessage without a messageType");
            return Ru
          }(uu)
        } catch (yu) {
          this.sessionLive && this.onError(yu)
        }
        if (Ru) {
          const {
            messageType: uu,
            data: yu
          } = Ru;
          if ((0, Iu.e)(uu)) return void this.guard((() => {
            (0, Iu.b)(uu, yu)
          }));
          "freeCamPerms" === uu && this.freeCam.setGame(yu) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Ru => {
            Ru.onReceivedMessageFromServer(uu, yu)
          }))
        }
      }
      decoded(uu, Ru) {
        try {
          return uu(Ru)
        } catch (yu) {
          return this.onError(yu), null
        }
      }
      setClientFreeCameraGrant(uu, Ru) {
        this.freeCam.setClient(uu, Ru), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(uu) {
        this.freeCam.setMovesFly(uu), this.writeFreeCam()
      }
      setBlockHighlight(uu) {
        this.highlight = uu, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const uu = this.liveCmd();
        if (null === uu || !this.highlightOwed) return;
        const Ru = this.highlight;
        this.highlightOwed = null === Ru ? !(0, Su.Xe)(uu, 0, UE, UE, 0) : !(0, Su.Xe)(uu, 0, Ru.pos, Ru.normal, 1)
      }
      localPlayerBound(uu) {
        var Ru, yu;
        if (0 === this.activeConn || this.sessionLive && uu === this.boundId) return;
        const Eu = this.sessionLive;
        let Ku, Qu, mu, Ju;
        this.endSession(), Eu && this.restartGameCamera();
        try {
          var Nu;
          this.session = null;
          const uu = this.options.sessionInfo(this.activeConn);
          if (this.session = uu, !uu) return;
          Ku = uu.gameNameWithVariation, Qu = null !== (Nu = (0, Du.Wb)(Ku)) && void 0 !== Nu ? Nu : void 0, mu = (0, Mu.s)(uu.lobbyName), Ju = (0, Mu.N)(uu.lobbyName)
        } catch (ju) {
          return void this.onError(ju)
        }
        const Xu = {
          localPlayerId: String(uu)
        };
        let Vu = {},
          ru = {};
        try {
          var Bu, xu;
          Vu = null !== (Bu = null === (xu = this.options.gameFactory((0, Du.cc)(Ku))) || void 0 === xu ? void 0 : xu(Ju, mu, Qu, Xu)) && void 0 !== Bu ? Bu : {}
        } catch (ju) {
          this.Px(ju)
        }
        try {
          var Su, pu;
          ru = {
            ...null === (Su = (pu = this.options).defaultPlugins) || void 0 === Su ? void 0 : Su.call(pu, Ju, mu, Qu, Xu),
            ...Vu.plugins
          }
        } catch (ju) {
          this.Px(ju)
        }
        const Tu = [Vu, ...Object.values(ru)];
        this.owners = Tu, this.tickers = Tu.filter((uu => void 0 !== uu.sr)), this.renderers = Tu.filter((uu => void 0 !== uu.onAfterRender)), this.receivers = Tu.filter((uu => void 0 !== uu.onReceivedMessageFromServer)), this.writeAltVeto(Tu), this.writeHooks(Tu), this.writePublicLobby(Ju), this.writeLocalDbId(null !== (Ru = null === (yu = this.session) || void 0 === yu ? void 0 : yu.playerDbId) && void 0 !== Ru ? Ru : null), this.boundId = uu, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(Tu, (uu => {
          var Ru;
          null === (Ru = uu.onCreate) || void 0 === Ru || Ru.call(uu, this.clientApi)
        }));
        const Wu = this.generation;
        setTimeout((() => {
          Wu === this.generation && !0 === this.tables.getClientOption("creative") && XE(this.tables)
        }), 0)
      }
      chunkSlot(uu, Ru, yu, Eu, Ku, Qu) {
        this.chunks.apply(uu, Ru, yu, Eu, Ku, Qu)
      }
      entityAdded(uu) {
        var Ru;
        this.entityInfo.stale(uu), null === (Ru = this.options.replayEntities) || void 0 === Ru || Ru.entityAdded(uu)
      }
      entityInfoChanged(uu) {
        var Ru;
        this.entityInfo.stale(uu), null === (Ru = this.options.replayEntities) || void 0 === Ru || Ru.entityInfoChanged(uu)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const uu = performance.now();
          this.round(this.tickers, lE), (0, RE.e)(performance.now() - uu)
        }
      }
      afterWalk(uu) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const Ru = this.options.replayEntities;
        Ru && this.guard((() => {
          this.entityInfoWatch.want(wy, Ru.wantsWatch), Ru.flush(this.entityInfoWatch.on)
        }));
        const yu = (0, RE.m)(uu, Su.v.frameMs(this.api.apiView, 0));
        if (null !== yu) {
          const uu = this.renderFrame;
          this.guard((() => {
            (0, oy.c)().turnDamageIndicators(uu.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(yu)
          })), this.round(this.renderers, (Ru => {
            Ru.onAfterRender(yu, uu)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== yu)
        } catch (Ku) {
          this.Px(Ku)
        }
        this.showZoom(), this.items.flush(this.Px), this.writePromptWatch(), this.writeCustomButtons();
        const Eu = this.ticks;
        this.ticks = 0, (0, RE.i)(Eu, uu, yu, this.Px)
      }
      entityRemoved(uu) {
        this.live.despawned(uu), this.entityInfo.removed(uu)
      }
      ackEventOverflow() {
        const uu = this.api.apiView,
          Ru = Su.v.eventOverflowGen(uu, 0),
          yu = Ru - this.overflowGen >>> 0;
        if (0 === yu && !this.resyncOwed) return;
        this.overflowGen = Ru;
        const Eu = Su.v.eventOverflowMask(uu, 0),
          Ku = this.cmd;
        0 === Eu || null === Ku || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Su.Ge)(Ku, 0, Eu);
        const Qu = this.options.onEventOverflow;
        0 !== yu && Qu && this.guard((() => {
          Qu(Eu, yu)
        }))
      }
      gameCall(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        if (uu === Su.oc.Director) try {
          return this.scriptedCamera.call(Ru, yu, Eu, Ku, Qu, mu)
        } catch (Xu) {
          return this.Px(Xu), Su.ub.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return uu === Su.oc.AltVeto ? Su.n.Allow : 0;
        try {
          return this.callGames(uu, Ru, yu, Eu, Ku, Qu, mu, Ju)
        } catch (Xu) {
          throw (0, xu.g)(Xu) && (this.fault = Xu), Xu
        }
      }
      takeFault() {
        const uu = this.fault;
        return this.fault = void 0, uu
      }
      callGames(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Nu
        } = this.options, Xu = String(this.boundId);
        switch (uu) {
          case Su.oc.AltVeto:
          case Su.oc.AltAction: {
            const Ju = 0 !== mu,
              [Vu, ru, Bu] = Ju ? [Ru, yu, Eu] : [void 0, void 0, void 0],
              xu = Ju ? Nu.nameOfId(Ku) : "Air",
              pu = tE(Qu);
            if (uu === Su.oc.AltAction) return this.first((uu => {
              var Ru;
              return null === (Ru = uu.onPlayerAltAction) || void 0 === Ru ? void 0 : Ru.call(uu, Xu, Vu, ru, Bu, xu, pu)
            })), 0;
            const Tu = this.first((uu => {
              var Ru;
              return null === (Ru = uu.onPlayerAttemptAltAction) || void 0 === Ru ? void 0 : Ru.call(uu, Xu, Vu, ru, Bu, xu, pu)
            }));
            return "preventAction" === Tu ? Su.n.Prevent : "preventPlacement" === Tu ? Su.n.PreventPlacement : Su.n.Allow
          }
          case Su.oc.Click: {
            const uu = Ju,
              Vu = 0 !== (uu & Su.Z.Alt),
              ru = 0 !== (uu & Su.Z.HasPos),
              Bu = ru ? Nu.nameOfId(Ku) : "Air",
              [xu, pu, Tu] = ru ? [Ru, yu, Eu] : [null, null, null],
              Wu = tE(Qu),
              ju = 0 !== (uu & Su.Z.Up),
              Hu = tE(mu);
            if (0 === (uu & Su.Z.AttackOnly) && this.first((uu => {
                var Ru, yu;
                return ju ? null === (Ru = uu.onPlayerClickUp) || void 0 === Ru ? void 0 : Ru.call(uu, Xu, Vu, xu, pu, Tu, Bu, Wu) : null === (yu = uu.onPlayerClick) || void 0 === yu ? void 0 : yu.call(uu, Xu, Vu, xu, pu, Tu, Bu, Wu)
              })), !ju && !Vu && null !== Hu) {
              const uu = this.clientApi.getPositionView(Hu),
                Ru = uu ? [uu[0], uu[1], uu[2]] : [0, 0, 0];
              this.first((uu => {
                var yu;
                return null === (yu = uu.onPlayerAttackEntity) || void 0 === yu ? void 0 : yu.call(uu, Xu, Hu, Ru)
              }))
            }
            return 0
          }
          case Su.oc.ChangeBlock: {
            const uu = Nu.nameOfId(Ku),
              mu = Nu.nameOfId(Qu);
            return this.first((Ku => {
              var Qu;
              return null === (Qu = Ku.onPlayerChangeBlock) || void 0 === Qu ? void 0 : Qu.call(Ku, Xu, Ru, yu, Eu, uu, mu)
            })), 0
          }
          case Su.oc.DropItem: {
            const uu = Nu.nameOfId(Ru);
            return this.first((Ru => {
              var Ku;
              return null === (Ku = Ru.onPlayerDropItem) || void 0 === Ku ? void 0 : Ku.call(Ru, Xu, uu, yu, Eu)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${uu}`)), 0
        }
      }
      changeBlockFail(uu, Ru, yu, Eu, Ku, Qu, mu) {
        const Ju = Ku === Su.Xc ? null : ME.decode(this.api.eventBytes(Qu, Math.min(Ku, mu)));
        this.failures.push({
          sQ: [uu, Ru, yu],
          tQ: Eu,
          lQ: Ju
        })
      }
      changeBlockFailEnd() {
        const uu = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Ru => {
          var yu;
          null === (yu = Ru.onChangeBlockFail) || void 0 === yu || yu.call(Ru, uu)
        })), this.Op("EditBoard", {
          pos: null
        }), this.Op("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(uu, Ru, yu, Eu, Ku, Qu) {
        uu === Su.Bc.ChestOpened ? this.items.chestOpened(yu, Eu, Ku) : uu !== Su.Bc.Synced && uu !== Su.Bc.ChestClosed && uu !== Su.Bc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(uu, Ru, yu, Eu) {
            switch (uu) {
              case Su.Bc.Synced:
                mu.k.Op("syncedInvenFromServer");
                break;
              case Su.Bc.ChestOpened:
              case Su.Bc.ChestClosed:
                mu.k.Op("chestToggleFromServer", uu === Su.Bc.ChestOpened, !0);
                break;
              case Su.Bc.ChestRefreshed:
                mu.k.Op("chestRefreshedFromServer");
                break;
              case Su.Bc.EnchantingTable:
                mu.k.Op("enchantingTable", {
                  yV: Eu,
                  position: yu
                });
                break;
              case Su.Bc.HotbarRequest:
                mu.k.Op("setSelectedInventorySlotI", Ru, !0);
                break;
              case Su.Bc.Scrolled:
                mu.k.Op("ScrollInventorySlot", Ru);
                break;
              case Su.Bc.NumberKey:
                mu.k.Op("numkeyPressed", Ru + 1);
                break;
              case Su.Bc.DropRequested:
                mu.k.Op("DropInvenItem", 0 !== Ru);
                break;
              default:
                throw new xu.c(`InventoryEvent of no kind: what ${uu}`)
            }
          }(uu, Ru, [yu, Eu, Ku], Qu)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(uu, Ru, yu, Eu) {
        this.Op("shotPlayer", {
          playerId: String(uu),
          damage: Ru,
          wasCrit: 0 !== Eu,
          distance: yu
        })
      }
      localHurt(uu, Ru) {
        this.Op("closeShopOnDamaged", null), this.guard((() => {
          mu.k.Op("damagedByOtherPlayer", {
            vy: null,
            direction: Number.isNaN(Ru) ? null : Ru,
            bK: uu
          })
        }))
      }
      attackHit(uu, Ru, yu, Eu, Ku) {
        this.guard((() => {
          mu.k.Op("yourAttackHit", {
            Ry: Eu,
            screenPos: this.renderFrame.projectDirectionToScreenPos([uu, Ru, yu]),
            hitSelf: Ku
          })
        }))
      }
      physicsType(uu) {
        this.Op("PlayerPhysicsTypeUpdate", uu)
      }
      vehicleEffect(uu, Ru, yu, Eu, Ku) {
        this.guard((() => {
          uu === Bu.ud.UPDATE ? (0, Uu.i)(Ru, {
            icon: yu,
            level: Eu,
            displayName: null,
            durationMs: Ku
          }) : Gu.b.remove(Ru)
        }))
      }
      zoomChanged(uu) {
        this.zoom = uu, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Op("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const uu = this.scriptedCamera.holdsView();
        !this.zoomUnshown || uu && this.zoomHeld || (this.zoomUnshown = !1, this.Op("cameraZoomSet", this.zoom)), this.zoomHeld = uu
      }
      gunHit(uu) {
        this.guard((() => {
          const {
            vy: Ru,
            uE: yu
          } = (0, pE.d)(TE.w, uu);
          mu.k.Op("damagedByOtherPlayer", {
            vy: Ru,
            direction: yu
          })
        }))
      }
      uiEvent(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        this.guard((() => {
          qy(uu, Ru, [yu, Eu, Ku], Qu, this.items, this.options.tables, (() => ME.decode(this.api.eventBytes(mu, Ju))))
        }))
      }
      writeAltVeto(uu) {
        const Ru = this.cmd;
        if (!Ru) return;
        let yu;
        try {
          yu = function(uu, Ru) {
            const yu = new Set;
            let Eu = !1;
            for (const Ku of uu)
              if (Ku.onPlayerAttemptAltAction) {
                if (Eu = !0, !Ku.altVetoBlocks) return {
                  mode: Su.ne.All,
                  roots: []
                };
                for (const uu of Ku.altVetoBlocks) yu.add(Ru.getMetaInfo(uu).rootId)
              } return Eu ? yu.size > Su.Mc ? {
              mode: Su.ne.All,
              roots: []
            } : {
              mode: Su.ne.Filter,
              roots: [...yu]
            } : {
              mode: Su.ne.Off,
              roots: []
            }
          }(uu, this.options.tables)
        } catch (Ku) {
          this.onError(Ku), yu = {
            mode: Su.ne.All,
            roots: []
          }
        }
        if (yu.mode === Su.ne.Off && !this.vetoSet) return;
        const Eu = new Uint8Array(new Uint32Array(yu.roots).buffer);
        (0, Su.Tf)(Ru, 0, yu.mode, yu.roots.length, Eu) ? this.vetoSet = yu.mode !== Su.ne.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(uu) {
        const Ru = this.cmd;
        if (!Ru) return;
        const yu = function(uu) {
          let Ru = 0;
          for (const yu of uu) yu.onPlayerAltAction && (Ru |= 1 << Su.oc.AltAction), (yu.onPlayerClick || yu.onPlayerClickUp || yu.onPlayerAttackEntity) && (Ru |= 1 << Su.oc.Click), yu.onPlayerChangeBlock && (Ru |= 1 << Su.oc.ChangeBlock), yu.onPlayerDropItem && (Ru |= 1 << Su.oc.DropItem);
          return Ru
        }(uu);
        (0 !== yu || this.hooksSet) && ((0, Su.Yf)(Ru, 0, yu) ? this.hooksSet = 0 !== yu : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const uu = this.cmd;
        uu && !this.stopped() && this.customButtons.write(uu)
      }
      writePromptWatch() {
        const uu = this.cmd,
          Ru = this.promptWatch;
        Ru !== this.promptWatchSent && uu && !this.stopped() && (0, Su.vg)(uu, 0, nE[Ru]) && (this.promptWatchSent = Ru)
      }
      writePublicLobby(uu) {
        const Ru = this.cmd;
        Ru && uu !== this.writtenPublicLobby && ((0, Su.hg)(Ru, 0, uu ? 1 : 0) ? this.writtenPublicLobby = uu : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(uu) {
        const Ru = this.cmd;
        Ru && ((0, Su.Zf)(Ru, 0, null === uu ? 0 : 1, null === uu ? GE : IE.encode(uu)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(uu) {
        const Ru = this.generation;
        for (const Eu of this.owners) {
          if (Ru !== this.generation) break;
          try {
            const Ru = uu(Eu);
            if (void 0 !== Ru) return Ru
          } catch (yu) {
            this.Px(yu)
          }
        }
      }
      Op(uu, Ru) {
        this.guard((() => {
          mu.k.Op(uu, Ru)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (uu) {
          this.Px(uu)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (uu) {
          this.Px(uu)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const uu = this.owners;
        let Ru;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Eu) {
          Ru = Eu
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Eu) {
          Ru ??= Eu
        }
        this.round(uu, gE, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Eu) {
          Ru ??= Eu
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Eu) {
          Ru ??= Eu
        }
        const yu = this.options.onSessionEnd;
        if (yu) try {
          yu()
        } catch (Eu) {
          this.onError(Eu)
        }
        void 0 !== Ru && this.Px(Ru)
      }
      round(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = this.generation;
        for (const Qu of uu) {
          if (Eu !== this.generation) break;
          try {
            Ru(Qu)
          } catch (Ku) {
            yu ? this.onError(Ku) : this.Px(Ku)
          }
        }
      }
      guard(uu) {
        try {
          uu()
        } catch (Ru) {
          this.Px(Ru)
        }
      }
    }

    function tE(uu) {
      return uu === Su.Yc ? null : String(uu)
    }

    function lE(uu) {
      uu.sr(Bu.nd)
    }

    function gE(uu) {
      var Ru;
      null === (Ru = uu.onClose) || void 0 === Ru || Ru.call(uu)
    }

    function cE(uu, Ru) {
      uu.watch((() => {
        const yu = function(uu) {
          let Ru = 0;
          const yu = Math.min(yE, uu.length);
          for (let Ku = 0; Ku < yu; Ku++) {
            var Eu;
            const yu = null === (Eu = uu.slot(Ku)) || void 0 === Eu ? void 0 : Eu.typeObj,
              Qu = yu ? (0, uE.gunTypeOf)(yu.id) : void 0;
            void 0 !== Qu && (Ru |= 1 << HR[Qu])
          }
          return Ru
        }(uu);
        0 !== yu && (Ru.preload(yu), Ru.preload(1 << dR))
      }))
    }
    var LE = yu(4630),
      zE = yu(36549);

    function FE(uu) {
      const Ru = new LE.Howl({
          ...(0, zE.h)(uu),
          pool: 15,
          preload: !1
        }),
        yu = Ru.load.bind(Ru);
      return Ru.load = () => (Ru._preload = !0, yu()), Ru
    }

    function wE(uu, Ru, yu) {
      const Eu = uu.listener;
      if (Eu.positionX) ZE(Eu.positionX, Ru, yu, 0), ZE(Eu.positionY, Ru, yu, 1), ZE(Eu.positionZ, Ru, yu, 2), ZE(Eu.forwardX, Ru, yu, 3), ZE(Eu.forwardY, Ru, yu, 4), ZE(Eu.forwardZ, Ru, yu, 5), ZE(Eu.upX, Ru, yu, 6), ZE(Eu.upY, Ru, yu, 7), ZE(Eu.upZ, Ru, yu, 8);
      else {
        let uu = !1;
        for (let Eu = 0; Eu < 9; Eu++) uu ||= Ru[Eu] !== yu[Eu];
        uu && (Eu.setPosition(Ru[0], Ru[1], Ru[2]), Eu.setOrientation(Ru[3], Ru[4], Ru[5], Ru[6], Ru[7], Ru[8]), yu.set(Ru))
      }
    }

    function ZE(uu, Ru, yu, Eu) {
      Ru[Eu] !== yu[Eu] && (uu.value = Ru[Eu], yu[Eu] = Ru[Eu])
    }
    class hE {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(uu) {
        this.pose.set(uu);
        const Ru = LE.Howler.ctx;
        return !!Ru && (Ru !== this.watchedCtx && (this.watchedCtx = Ru, this.written.fill(Number.NaN), Ru.addEventListener("statechange", (() => {
          "running" === Ru.state && wE(Ru, this.pose, this.written)
        }))), "running" === Ru.state && wE(Ru, uu, this.written), !0)
      }
    }
    var PE = yu(36399),
      iE = yu(38955);
    let YE = null,
      oE = null;

    function qE() {
      return null === YE && (YE = document.createElement("div"), YE.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(YE)), YE
    }

    function OE() {
      return oE ??= new iE.c(new PE.c(qE)), oE
    }

    function vE() {
      var uu;
      null === (uu = oE) || void 0 === uu || uu.clear(), aE(null)
    }

    function aE(uu) {
      Eu.d.get("scriptedCameraFacing") !== uu && Eu.d.set({
        scriptedCameraFacing: uu
      })
    }
    var fE = yu(9247),
      uK = yu(9205),
      RK = yu(38978),
      yK = yu(40316),
      EK = yu(3093);
    const KK = Object.entries(Su.lc).reduce(((uu, Ru) => {
      let [yu, Eu] = Ru;
      return uu[Eu] = yu, uu
    }), []);

    function QK(uu, Ru) {
      var yu;
      return 0 !== ((null !== (yu = uu.itemFlags[Ru]) && void 0 !== yu ? yu : 0) & Su.Ec.Stackable)
    }
    const mK = /^(0|[1-9][0-9]*)$/,
      JK = {
        displayName: (uu, Ru) => (0, uE.displayNameOf)(Ru),
        description: (uu, Ru) => (0, uE.descriptionOf)(Ru),
        type: (uu, Ru) => (0, uE.itemTypeOf)(Ru),
        clipSize: (uu, Ru) => (0, uE.clipSizeOf)(Ru),
        armourReduction: (uu, Ru) => (0, uE.armourReductionOf)(Ru),
        scopeType: (uu, Ru) => (0, uE.scopeTypeOf)(Ru),
        stackable: QK,
        harvestType: (uu, Ru) => KK[uu.blockHarvestTypes[Ru]],
        harvestLevel: (uu, Ru) => {
          const yu = uu.blockHarvestLevels[Ru];
          return yu === Su.Kc ? void 0 : yu
        },
        harvests: (uu, Ru) => {
          var yu;
          const Eu = null !== (yu = uu.itemHarvests[Ru]) && void 0 !== yu ? yu : 0;
          return 0 !== Eu ? KK[Eu] : void 0 === (0, uE.harvestsNullLevelOf)(Ru) ? void 0 : null
        },
        level: (uu, Ru) => {
          var yu, Eu;
          const Ku = null !== (yu = uu.itemLevels[Ru]) && void 0 !== yu ? yu : Su.Kc;
          return Ku !== Su.Kc ? Ku : null !== (Eu = (0, uE.harvestsNullLevelOf)(Ru)) && void 0 !== Eu ? Eu : void 0
        }
      };

    function NK(uu, Ru, yu) {
      return VK(new Uint8Array(Math.floor(uu.length / Ru)), uu, Ru, yu)
    }

    function XK(uu, Ru, yu) {
      return VK(new Uint16Array(Math.floor(uu.length / Ru)), uu, Ru, yu)
    }

    function VK(uu, Ru, yu, Eu) {
      const Ku = new DataView(Ru.buffer, Ru.byteOffset, Ru.byteLength);
      for (let Qu = 0; Qu < uu.length; Qu++) uu[Qu] = Eu(Ku, Qu * yu);
      return uu
    }
    class rK {
      constructor(uu, Ru) {
        this.options = Ru, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = uu => {
          const Ru = this.idOf(uu);
          if (void 0 === Ru) throw new Error(`No item is named ${uu}, an item's root`);
          return Ru
        };
        const yu = Ru => {
            const yu = Ru();
            return new Uint8Array(uu.memory().buffer, uu.scratch(), yu).slice()
          },
          Eu = (new TextDecoder).decode(yu((() => uu.queries.itemNames()))).split("\n"),
          Ku = yu((() => uu.queries.blockProps())),
          Qu = yu((() => uu.queries.itemProps()));
        this.props = {
          blockFlags: NK(Ku, Su.D.BYTES, Su.D.flags),
          blockHarvestTypes: NK(Ku, Su.D.BYTES, Su.D.harvestType),
          blockHarvestLevels: NK(Ku, Su.D.BYTES, Su.D.harvestLevel),
          blockAttachedTops: XK(Ku, Su.D.BYTES, Su.D.attachedTop),
          itemFlags: NK(Qu, Su.Hc.BYTES, Su.Hc.flags),
          itemHarvests: NK(Qu, Su.Hc.BYTES, Su.Hc.harvests),
          itemLevels: NK(Qu, Su.Hc.BYTES, Su.Hc.level)
        }, (0, EK.k)(Object.freeze(Eu)), (0, yK.h)()
      }
      idOf(uu) {
        if ("number" === typeof uu) return void 0 === (0, EK.f)(uu) ? void 0 : uu;
        const Ru = (0, EK.b)(uu);
        return void 0 === Ru && mK.test(uu) ? void 0 === (0, EK.f)(+uu) ? void 0 : +uu : Ru
      }
      getMetaInfo(uu) {
        if (!uu || uu === fE.e) return fE.h;
        const Ru = this.idOf(uu);
        if (void 0 === Ru) throw new Error(`Item ${uu} not found in registry`);
        return this.metaOf(Ru)
      }
      blockRootId(uu) {
        return 0 !== uu && void 0 !== (0, EK.f)(uu) ? this.metaOf(uu).rootId : uu
      }
      metaOf(uu) {
        return this.metas[uu] ??= (0, uK.h)((0, EK.f)(uu), uu, this.rootIdOf, (0, uE.rootMetaDescOf)(uu))
      }
      getItemId(uu) {
        if (!uu || uu === fE.e) return 0;
        const Ru = this.idOf(uu);
        if (void 0 === Ru) throw new Error(`Invalid block name. You sent ${uu}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Ru
      }
      getItemName(uu) {
        if (!uu || uu === fE.e) return fE.e;
        const Ru = this.idOf(uu);
        if (void 0 === Ru) throw new Error(`Item ${uu} not found in registry`);
        return (0, EK.f)(Ru)
      }
      blockNameToBlockId(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (uu === fE.e) return 0;
        let yu = this.idOf(uu);
        if (void 0 === yu || !this.isBlockId(yu)) {
          const Ru = uu.indexOf("|"),
            Eu = Ru > 0 ? (0, EK.b)(uu.slice(0, Ru)) : void 0;
          yu = void 0 !== Eu && this.isBlockId(Eu) && (0, uE.rootMetaDescOf)(Eu) === uu ? Eu : void 0
        }
        if (void 0 !== yu) return yu;
        if (!Ru) throw new Error(`Invalid block name. You sent ${uu}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(uu) {
        return uu > 0 && uu < this.props.blockFlags.length
      }
      nameOfId(uu) {
        return 0 !== uu && (0, EK.f)(uu) || fE.e
      }
      itemType(uu) {
        const Ru = uu ? this.idOf(uu) : void 0;
        if (!Ru) return null;
        let yu = this.types.get(Ru);
        return void 0 === yu && (yu = Object.freeze({
          id: Ru,
          name: (0, EK.f)(Ru),
          meta: this.getMetaInfo(Ru),
          stackable: QK(this.props, Ru),
          type: (0, uE.itemTypeNameOf)(Ru),
          clipSize: (0, uE.clipSizeOf)(Ru),
          scopeType: (0, uE.scopeTypeOf)(Ru),
          showsAimingUi: (0, uE.showsAimingUi)(Ru)
        }), this.types.set(Ru, yu)), yu
      }
      getItemStat(uu, Ru) {
        if (RK.d.has(Ru)) {
          const yu = "minChargeStateToUse" === Ru ? this.getMetaInfo(uu).rootName : this.getItemName(uu),
            Eu = this.options.get((0, RK.f)(yu, Ru));
          if (null !== Eu && void 0 !== Eu) return Eu
        }
        return this.defaultStat(uu, Ru, this.statOf(Ru))
      }
      getDisplayName(uu) {
        return this.getItemStat(uu, "displayName")
      }
      getDefaultItemStat(uu, Ru) {
        return this.defaultStat(uu, Ru, this.statOf(Ru))
      }
      statOf(uu) {
        const Ru = JK[uu];
        return void 0 === Ru && function(uu, Ru) {
          throw new Error(`ClientApi.${uu} is not available yet in the wasm client (${Ru})`)
        }(`getItemStat("${uu}")`, `a table of the stat: the wasm client answers ${Object.keys(JK).join(", ")}`), Ru
      }
      defaultStat(uu, Ru, yu) {
        const Eu = this.idOf(uu),
          Ku = void 0 === Eu ? void 0 : yu(this.props, Eu);
        return null !== Ku && void 0 !== Ku || "displayName" !== Ru ? Ku : this.getItemName(uu)
      }
      getClientOption(uu) {
        return this.options.get(uu)
      }
      getGunStats(uu) {
        return this.getClientOption(`${uu}GunStats`)
      }
      watchClientOption(uu, Ru) {
        return this.options.subscribe(uu, Ru)
      }
      isSolidBlockId(uu) {
        var Ru;
        return 0 !== ((null !== (Ru = this.props.blockFlags[uu]) && void 0 !== Ru ? Ru : 0) & Su.C.Solid)
      }
      isStackableId(uu) {
        return QK(this.props, uu)
      }
      isFluidBlockId(uu) {
        var Ru;
        return 0 !== ((null !== (Ru = this.props.blockFlags[uu]) && void 0 !== Ru ? Ru : 0) & Su.C.Fluid)
      }
      canPlaceOverBlockId(uu) {
        var Ru;
        return 0 !== ((null !== (Ru = this.props.blockFlags[uu]) && void 0 !== Ru ? Ru : 0) & Su.C.PlaceOver)
      }
      attachedTopOf(uu) {
        var Ru;
        return null !== (Ru = this.props.blockAttachedTops[uu]) && void 0 !== Ru ? Ru : 0
      }
      isDroplessBlockId(uu) {
        return (0, uE.dropsNothing)(uu)
      }
    }

    function BK(uu, Ru) {
      const yu = new Map;
      return (Eu, Ku) => {
        const Qu = Ru.idOf(Eu),
          mu = void 0 === Qu ? null : (Eu => {
            let Ku = yu.get(Eu);
            if (void 0 === Ku) {
              const Qu = uu.queries.salvageRecipe(Eu),
                mu = new DataView(uu.memory().buffer, uu.scratch(), Qu),
                Ju = [];
              for (let uu = 0; uu + Su.be.BYTES <= Qu; uu += Su.be.BYTES) Ju.push(Object.freeze({
                item: Ru.nameOfId(Su.be.item(mu, uu)),
                amt: Su.be.amount(mu, uu)
              }));
              Ku = 0 === Ju.length ? null : Object.freeze(Ju), yu.set(Eu, Ku)
            }
            return Ku
          })(Qu);
        if (null === mu || void 0 === Ku) return mu;
        const Ju = Ku <= 0 ? 1 : Ku;
        return mu.map((uu => {
          let {
            item: Ru,
            amt: yu
          } = uu;
          return {
            item: Ru,
            amt: yu * Ju
          }
        }))
      }
    }
    var xK = yu(40480),
      SK = yu(36723),
      pK = yu(36712),
      TK = yu(36755),
      WK = yu(36341),
      jK = yu(40256),
      HK = yu(42132);
    const dK = -1,
      bK = new Uint8Array(0),
      CK = new TextEncoder;

    function kK(uu) {
      if (null === uu) return null;
      const Ru = CK.encode(uu);
      return Ru.byteLength < Bu.Cc ? Ru : Ru.subarray(0, Bu.Cc - 1)
    }
    class eK {
      constructor(uu) {
        this.deps = uu, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = dK, this.keyframesSettled = !1, this.reloadFrom = dK
      }
      reloadKeyframes() {
        var uu, Ru;
        this.keyframesVersion = dK, this.reloadFrom = null !== (uu = null === (Ru = this.view()) || void 0 === Ru ? void 0 : Ru.version) && void 0 !== uu ? uu : dK
      }
      setPlayback(uu) {
        const Ru = 1 === this.deps.core.oKu(uu);
        return Ru && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = dK, this.reloadFrom = dK), Ru
      }
      async open(uu) {
        const Ru = await this.deps.replay.open(uu);
        return "opening" === Ru && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Ru
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(uu)), Ru)
      }
      setSpeed(uu) {
        this.deps.replay.setSpeed(uu)
      }
      setCameraMode(uu) {
        this.deps.replay.setCameraMode(HK.c.indexOf(uu))
      }
      view() {
        var uu;
        const Ru = Su.v.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Ru) return this.lastView = null, null;
        const yu = new DataView(this.deps.buffer(), Ru, Su.Xd.BYTES),
          Eu = Su.Xd.version(yu, 0),
          Ku = this.lastView;
        if (null !== Ku && Ku.version === Eu) return Ku;
        const Qu = Su.Xd.markIn(yu, 0),
          mu = {
            version: Eu,
            state: Su.Xd.state(yu, 0),
            cameraMode: null !== (uu = HK.c[Su.Xd.cameraMode(yu, 0)]) && void 0 !== uu ? uu : "recording",
            sr: Su.Xd.sr(yu, 0),
            totalTicks: Su.Xd.totalTicks(yu, 0),
            speed: Su.Xd.speed(yu, 0),
            mark: Qu === Su.Td ? null : {
              inTick: Qu,
              outTick: Su.Xd.markOut(yu, 0)
            },
            editVersion: Su.Xd.editVersion(yu, 0)
          };
        return this.lastView = mu, mu
      }
      keyframes() {
        const uu = this.view();
        if (null === uu) return [];
        uu.version !== this.reloadFrom && (this.reloadFrom = dK);
        const Ru = this.reloadFrom === dK && uu.state !== Bu.bd.Cropping && uu.state !== Bu.bd.None,
          yu = Ru ? uu.editVersion : uu.version;
        if (yu === this.keyframesVersion && Ru === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Eu
        } = this.deps, Ku = Eu.qKu(), Qu = Eu.IT(), mu = [];
        if (0 !== Qu && Ku > 0) {
          const uu = new DataView(this.deps.buffer(), Qu, Ku * Bu.jc);
          for (let Ru = 0; Ru < Ku; Ru++) {
            const yu = Ru * Bu.jc,
              Eu = Ru => uu.getFloat64(yu + Ru, !0);
            mu.push({
              sr: uu.getUint32(yu + Bu.yc, !0),
              position: [Eu(Bu.uc), Eu(Bu.uc + 8), Eu(Bu.uc + 16)],
              direction: [Eu(Bu.nc), Eu(Bu.nc + 8), Eu(Bu.nc + 16)],
              easing: [Eu(Bu.rc), Eu(Bu.rc + 8), Eu(Bu.rc + 16), Eu(Bu.rc + 24)]
            })
          }
        }
        return this.keyframesVersion = yu, this.keyframesSettled = Ru, this.lastKeyframes = mu, mu
      }
      addKeyframe() {
        const uu = this.deps.apiView(),
          Ru = [Su.v.eye(uu, 0, 0), Su.v.eye(uu, 0, 1), Su.v.eye(uu, 0, 2)];
        return this.deps.replay.addKeyframe(Ru, function(uu, Ru) {
          const yu = Math.cos(Ru);
          return [yu * Math.sin(uu), -Math.sin(Ru), yu * Math.cos(uu)]
        }(Su.v.heading(uu, 0), Su.v.pitch(uu, 0)))
      }
      setKeyframe(uu) {
        return this.deps.replay.setKeyframe(uu.sr, Float64Array.from([...uu.position, ...uu.direction, ...uu.easing]))
      }
      moveKeyframe(uu, Ru) {
        return this.deps.replay.moveKeyframe(uu, Ru)
      }
      deleteKeyframes(uu, Ru) {
        return this.deps.replay.deleteKeyframes(uu, Ru)
      }
      setMark(uu) {
        var Ru, yu;
        return this.deps.replay.setMark(null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.inTick) && void 0 !== Ru ? Ru : -1, null !== (yu = null === uu || void 0 === uu ? void 0 : uu.outTick) && void 0 !== yu ? yu : -1)
      }
      crop(uu, Ru) {
        const yu = this.deps.replay.crop(uu, Ru);
        return yu && this.reloadKeyframes(), yu
      }
      save(uu) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(uu)
      }
      recorderControl(uu) {
        this.deps.recorder.control(uu)
      }
      recorderPrefs(uu, Ru) {
        this.deps.recorder.prefs(uu, Ru)
      }
      recorderOption(uu, Ru) {
        const yu = this.deps.cmd();
        return null !== yu && (0, Su.Kf)(yu, 0, uu, null === Ru ? bK : CK.encode(Ru))
      }
      recordFlyingText(uu, Ru, yu, Eu) {
        const Ku = this.deps.cmd(),
          Qu = Math.max(0, Math.min(4294967295, Math.round(Eu)));
        return null !== Ku && (0, Su.Ff)(Ku, 0, Ru, yu, Qu, CK.encode(uu))
      }
      recordPlayerKilled(uu, Ru, yu, Eu) {
        const Ku = this.deps.cmd();
        return null !== Ku && (0, Su.Lf)(Ku, 0, uu, Ru, Math.max(0, yu), CK.encode(Eu))
      }
      recordKillfeed(uu, Ru, yu) {
        var Eu, Ku;
        const Qu = this.deps.cmd(),
          mu = function(uu) {
            const Ru = uu.reduce(((uu, Ru) => {
                var yu;
                return uu + Py.ob + (null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.byteLength) && void 0 !== yu ? yu : 0)
              }), 0),
              yu = new Uint8Array(Ru),
              Eu = new DataView(yu.buffer);
            let Ku = 0;
            for (const mu of uu) {
              var Qu;
              Eu.setUint16(Ku, null !== (Qu = null === mu || void 0 === mu ? void 0 : mu.byteLength) && void 0 !== Qu ? Qu : Bu.Cc, !0), Ku += Py.ob, null !== mu && (yu.set(mu, Ku), Ku += mu.byteLength)
            }
            return yu
          }([kK(uu.name), kK(uu.colour), kK(Ru.name), kK(Ru.colour), kK(yu)]);
        return null !== Qu && (0, Su.If)(Qu, 0, null !== (Eu = uu.id) && void 0 !== Eu ? Eu : Su.Zc, null !== (Ku = Ru.id) && void 0 !== Ku ? Ku : Su.Zc, mu)
      }
      recorderSession(uu, Ru) {
        this.deps.recorder.session({
          session: Ru,
          lobbyType: uu.lobbyType,
          game: uu.gameNameWithVariation,
          lobby: uu.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.OKu()
      }
      filePartDone(uu, Ru) {
        this.deps.recorder.filePartDone(uu, Ru)
      }
      fileDone(uu) {
        this.deps.recorder.fileDone(uu)
      }
    }
    const AK = -2147483648;
    class DK {
      constructor(uu) {
        var Ru;
        this.deps = uu, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Ru = uu.now) && void 0 !== Ru ? Ru : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var uu, Ru, yu;
        return null === (uu = null === (Ru = (yu = this.deps).live) || void 0 === Ru ? void 0 : Ru.call(yu)) || void 0 === uu || uu
      }
      activated(uu) {
        var Ru, yu;
        this.live && (this.viewerShown(!0 === (null === (Ru = (yu = this.deps).viewerOpen) || void 0 === Ru ? void 0 : Ru.call(yu))), this.deps.client.recorderSession(uu, (0, HK.g)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var uu, Ru;
        this.live && (this.state.recording || !0 !== (null === (uu = (Ru = this.deps).viewerOpen) || void 0 === uu ? void 0 : uu.call(Ru))) ? this.deps.client.recorderControl(Bu.Sc.ToggleRecording) : this.deps.notify(TK.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Bu.Sc.SaveClip) : this.deps.notify(TK.d.clippingNotOn)
      }
      viewerShown(uu) {
        this.live && this.deps.client.recorderControl(uu ? Bu.Sc.ViewerOpened : Bu.Sc.ViewerClosed)
      }
      setPrefs(uu, Ru) {
        this.live && this.deps.client.recorderPrefs(uu, Ru)
      }
      setOption(uu, Ru) {
        this.live && this.deps.client.recorderOption(uu, Ru)
      }
      recordFlyingText(uu, Ru, yu, Eu) {
        this.live && this.deps.client.recordFlyingText(uu, Ru, yu, Eu)
      }
      recordPlayerKilled(uu, Ru, yu, Eu) {
        this.live && this.deps.client.recordPlayerKilled(uu, Ru, yu, Eu)
      }
      recordKillfeed(uu, Ru, yu) {
        this.live && this.deps.client.recordKillfeed(uu, Ru, yu)
      }
      sr() {
        let uu = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, uu = {
            ...uu,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Ru = Math.floor((this.now() - this.recordingSince) / 1e3);
          Ru !== uu.seconds && (uu = {
            ...uu,
            seconds: Ru
          })
        }
        this.set(uu)
      }
      onEvent(uu) {
        var Ru, yu;
        const {
          notify: Eu
        } = this.deps, Ku = TK.d;
        switch (uu.what) {
          case Bu.Qc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Eu(Ku.recordingStarted);
            break;
          case Bu.Qc.RecordingStopped:
            this.stopRecording(), Eu(Ku.recordingStopped), this.saveState(Bu.Yc.Recording, "saving");
            break;
          case Bu.Qc.RecordingDiscarded:
            this.stopRecording(), Eu(Ku.recordingDiscarded);
            break;
          case Bu.Qc.RecordingTurnedOff:
            this.stopRecording(), Eu(Ku.recordingTurnedOff);
            break;
          case Bu.Qc.LimitReached:
            Eu(Ku.limitReached);
            break;
          case Bu.Qc.ClipSaved:
            this.saveState(Bu.Yc.Clip, "saving");
            break;
          case Bu.Qc.ClipEmpty:
            Eu(Ku.clipEmpty);
            break;
          case Bu.Qc.ClippingNotOn:
            Eu(Ku.clippingNotOn);
            break;
          case Bu.Qc.Disallowed:
            Eu(Ku.disallowed);
            break;
          case Bu.Qc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Bu.Qc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Bu.Qc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Bu.Qc.SaveBusy:
            null === (Ru = (yu = this.deps).onSaveState) || void 0 === Ru || Ru.call(yu, uu.kind, "busy"), Eu(Ku.saveBusy);
            break;
          case Bu.Qc.CloseViewerFirst:
            Eu(Ku.closeViewerFirst)
        }
      }
      fileReady(uu, Ru) {
        this.deps.download(Ru), this.saveState(uu, "done"), this.deps.notify(uu === Bu.Yc.Clip ? TK.d.clipSaved : TK.d.recordingSaved)
      }
      failed(uu) {
        this.saveState(uu, "failed"), this.deps.notify(uu === Bu.Yc.Clip ? TK.d.clipFailed : TK.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(uu, Ru) {
        var yu, Eu;
        null === (yu = (Eu = this.deps).onSaveState) || void 0 === yu || yu.call(Eu, uu, Ru)
      }
      set(uu) {
        uu !== this.state && (this.state = uu, this.deps.onState(uu))
      }
    }
    const MK = new TextDecoder;

    function IK(uu, Ru, yu, Eu) {
      const Ku = [];
      for (let Qu = 0; Qu < Eu; Qu++) {
        if (Ru + Py.ob > yu) return null;
        const Eu = uu.getUint16(Ru, !0);
        if (Ru += Py.ob, Eu !== Bu.Cc) {
          if (Ru + Eu > yu) return null;
          Ku.push(MK.decode(new Uint8Array(uu.buffer, uu.byteOffset + Ru, Eu))), Ru += Eu
        } else Ku.push(null)
      }
      return Ru === yu ? Ku : null
    }

    function GK(uu, Ru) {
      let yu = new DataView(new ArrayBuffer(0)),
        Eu = !0;
      const Ku = {
        replayFailed: (Ru, yu) => {
          uu.replayFailed({
            reason: Ru,
            code: yu
          })
        },
        replayOption: (Ru, Ku, Qu, mu) => {
          const Ju = function(uu, Ru, yu, Eu) {
            switch (Ru) {
              case Bu.Zc.Cleared:
                return 0 === Eu ? null : void 0;
              case Bu.Zc.Text:
                return MK.decode(new Uint8Array(uu.buffer, uu.byteOffset + yu, Eu));
              case Bu.Zc.Int:
                return Eu === Int32Array.BYTES_PER_ELEMENT ? uu.getInt32(yu, !0) : void 0;
              case Bu.Zc.Double:
                return Eu === Float64Array.BYTES_PER_ELEMENT ? uu.getFloat64(yu, !0) : void 0;
              default:
                return
            }
          }(yu, Ku, Qu, mu);
          void 0 !== Ju ? uu.replayOption({
            key: Ru,
            value: Ju
          }) : Eu = !1
        },
        replayUiEvent: (Ru, Ku, Qu, mu, Ju, Nu) => {
          const Xu = function(uu, Ru, yu, Eu, Ku, Qu, mu) {
            const Ju = Qu + mu;
            switch (Ru) {
              case Bu._c.FlyingText: {
                const mu = IK(uu, Qu, Ju, 1);
                return null !== mu && null !== mu[0] ? {
                  what: Ru,
                  GQ: yu,
                  IQ: Eu,
                  angle: Ku,
                  contentJson: mu[0]
                } : null
              }
              case Bu._c.PlayerKilled: {
                const Eu = IK(uu, Qu, Ju, 3);
                return Eu ? {
                  what: Ru,
                  killstreak: yu,
                  dead: Eu[0],
                  killer: Eu[1],
                  withItem: Eu[2]
                } : null
              }
              case Bu._c.Killfeed: {
                const yu = IK(uu, Qu, Ju, 7);
                return yu ? {
                  what: Ru,
                  killerId: yu[0],
                  killerName: yu[1],
                  killerColour: yu[2],
                  victimId: yu[3],
                  victimName: yu[4],
                  victimColour: yu[5],
                  withItem: yu[6]
                } : null
              }
              default:
                return null
            }
          }(yu, Ru, Ku, Qu, mu, Ju, Nu);
          null !== Xu ? uu.replayUiEvent(Xu) : Eu = !1
        },
        replayFilePart: (yu, Ku, Qu, mu) => {
          const Ju = Ru();
          Qu + mu > Ju.byteLength ? Eu = !1 : uu.filePart(yu, Ku, new Uint8Array(Ju, Qu, mu).slice())
        },
        replayFileReady: (Ru, yu, Eu, Ku) => {
          uu.fileReady({
            save: Ru,
            kind: yu,
            parts: Eu,
            bytes: Ku
          })
        },
        recorderEvent: (Ru, yu, Eu) => {
          uu.recorderEvent({
            what: Ru,
            kind: yu,
            save: Eu
          })
        },
        replayOpened: (Ru, Eu, Ku) => {
          uu.replayOpened(MK.decode(new Uint8Array(yu.buffer, yu.byteOffset + Eu, Ku)))
        }
      };
      return (uu, Ru, Qu, mu) => !(uu < Bu.ab.ReplayFailed || uu > Bu.ab.RecorderEvent) && (yu = Ru, Eu = !0, (0, Su.se)(uu, Ru, Qu, mu, Ku) && Eu)
    }

    function UK(uu) {
      let Ru = null;
      const yu = GK(uu, (() => {
        if (null === Ru) throw new Error("a recorder event read outside recorderEventReader's call");
        return Ru.buffer
      }));
      return (uu, Eu) => {
        Ru = Eu;
        try {
          ! function(uu, Ru) {
            const yu = uu.slice(),
              Eu = new DataView(yu.buffer);
            for (let Ku = 0; Ku < yu.byteLength;) {
              if (Ku + Bu.Y > yu.byteLength) throw new Error(`the recorder module's events end mid-head at ${Ku}`);
              const uu = Eu.getUint32(Ku, !0),
                Qu = 65535 & uu,
                mu = uu >>> 16,
                Ju = Ku + Bu.Y;
              if (Ju + mu > yu.byteLength || !Ru(Qu, Eu, Ju, mu)) throw new Error(`the recorder module wrote a malformed event ${Qu} (${mu} bytes) at ${Ku}`);
              Ku = Ju + (0, Bu.he)(mu)
            }
          }(uu, yu)
        } finally {
          Ru = null
        }
      }
    }
    class nK {
      constructor(uu, Ru) {
        this.acks = uu, this.handlers = Ru, this.parts = new Map
      }
      onPart(uu, Ru, yu) {
        let Eu = this.parts.get(uu);
        Eu || (Eu = [], this.parts.set(uu, Eu)), Eu[Ru] = yu, this.acks.filePartDone(uu, Ru)
      }
      onReady(uu) {
        var Ru;
        const yu = null !== (Ru = this.parts.get(uu.save)) && void 0 !== Ru ? Ru : [];
        this.parts.delete(uu.save);
        const Eu = function(uu, Ru, yu) {
          if (uu.length !== Ru) return null;
          let Eu = 0;
          for (let mu = 0; mu < Ru; mu++) {
            if (void 0 === uu[mu]) return null;
            Eu += uu[mu].byteLength
          }
          if (Eu !== yu) return null;
          if (1 === Ru) return uu[0];
          const Ku = new Uint8Array(yu);
          let Qu = 0;
          for (const mu of uu) Ku.set(mu, Qu), Qu += mu.byteLength;
          return Ku
        }(yu, uu.parts, uu.bytes);
        this.acks.fileDone(uu.save), null === Eu ? this.handlers.fileIncomplete(uu.save, uu.kind) : this.handlers.fileReady(uu.save, uu.kind, Eu)
      }
      onDiscarded(uu) {
        this.parts.delete(uu)
      }
    }

    function sK() {
      return yu.e(57).then((() => yu(42174)))
    }
    class tK {
      constructor(uu) {
        this.deps = uu, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Ru
        } = uu;
        this.recorder = new DK({
          client: Ru,
          live: () => {
            var uu;
            return !0 !== (null === (uu = this.viewer) || void 0 === uu ? void 0 : uu.inPlayback)
          },
          viewerOpen: uu.viewerOpen,
          notify: uu.notify,
          download: Ru => {
            var yu;
            null === (yu = uu.download) || void 0 === yu || yu.call(uu, Ru)
          },
          onState: uu.onRecorderState,
          onSaveState: uu.onSaveState
        }), this.parts = new nK(Ru, {
          fileReady: (uu, Ru, yu) => {
            var Eu;
            Ru === Bu.Yc.Edited ? null === (Eu = this.viewer) || void 0 === Eu || Eu.saveDone(yu) : this.recorder.fileReady(Ru, yu)
          },
          fileIncomplete: (uu, Ru) => {
            this.saveFailed(Ru)
          }
        });
        const yu = {
          replayFailed: uu => {
            var Ru;
            null === (Ru = this.viewer) || void 0 === Ru || Ru.onFailed(uu)
          },
          replayOption: Ru => {
            var yu;
            null === (yu = uu.onReplayOption) || void 0 === yu || yu.call(uu, Ru)
          },
          replayUiEvent: Ru => {
            var yu;
            null === (yu = uu.onReplayUiEvent) || void 0 === yu || yu.call(uu, Ru)
          },
          filePart: (uu, Ru, yu) => {
            this.parts.onPart(uu, Ru, yu)
          },
          fileReady: uu => {
            this.parts.onReady(uu)
          },
          replayOpened: Ru => {
            var yu;
            null === (yu = uu.onReplayOpened) || void 0 === yu || yu.call(uu, Ru)
          },
          recorderEvent: uu => {
            var Ru;
            switch (uu.what) {
              case Bu.Qc.FileDiscarded:
                this.parts.onDiscarded(uu.save);
                break;
              case Bu.Qc.SaveFailed:
                this.saveFailed(uu.kind);
                break;
              case Bu.Qc.SaveBusy:
                if (null !== (Ru = this.viewer) && void 0 !== Ru && Ru.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(uu);
                break;
              default:
                this.recorder.onEvent(uu)
            }
          }
        };
        this.sink = function(uu, Ru) {
          return {
            onReplayEvent: GK(uu, Ru)
          }
        }(yu, uu.buffer), this.recorderEvents = UK(yu)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var uu;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (uu = this.deps.loadViewer) && void 0 !== uu ? uu : sK)().catch((uu => {
          throw this.viewerChunk = null, uu
        })), this.viewerChunk.then((uu => (this.viewer ??= new uu.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var uu, Ru;
            null === (uu = (Ru = this.deps).onViewerChange) || void 0 === uu || uu.call(Ru)
          }
        }), this.viewer))))
      }
      activated(uu) {
        this.recorder.activated(uu)
      }
      afterFrame(uu) {
        try {
          uu > 0 && this.recorder.sr()
        } finally {
          var Ru;
          null === (Ru = this.viewer) || void 0 === Ru || Ru.afterFrame()
        }
      }
      end() {
        var uu;
        null === (uu = this.viewer) || void 0 === uu || uu.end()
      }
      saveFailed(uu) {
        var Ru;
        uu === Bu.Yc.Edited ? null === (Ru = this.viewer) || void 0 === Ru || Ru.saveFailed(!1) : this.recorder.failed(uu)
      }
    }
    var lK = yu(40199),
      gK = yu(40217),
      cK = yu(4573),
      LK = yu(40578);
    class zK {
      constructor(uu) {
        this.deps = uu, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(uu, Ru) {
        if (!this.deps.live() || 0 === uu && 0 === Ru) return;
        const yu = (0, cu.v)(0, performance.now()),
          Eu = this.deps.dragScale();
        (0, LK.h)((() => {
          (0, cu.D)(Bu.yb.MouseDown, 0, 0, 0, yu), (0, cu.D)(Bu.yb.MouseMove, 0, uu * Eu, Ru * Eu, 0), (0, cu.D)(Bu.yb.MouseUp, 0, 0, 0, yu)
        }))
      }
      move(uu) {
        var Ru, yu;
        this.analogue[0] = null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.x) && void 0 !== Ru ? Ru : 0, this.analogue[1] = null !== (yu = null === uu || void 0 === uu ? void 0 : uu.y) && void 0 !== yu ? yu : 0, this.send()
      }
      holdVertical(uu, Ru) {
        const yu = "freeCamUp" === uu ? Su.ac.Up : Su.ac.Down;
        this.keys = Ru ? this.keys | yu : this.keys & ~yu, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const uu = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== uu && !(0, Su.Ne)(uu, 0, this.analogue, this.keys)
      }
    }
    var FK = yu(714),
      wK = yu(312),
      ZK = yu(106),
      hK = yu(8971);

    function PK() {
      const uu = Eu.d.get("clientEscMenuOptions"),
        Ru = (0, FK.q)(uu);
      return {
        mouse: (0, ZK.isMobile)() ? Ru : uu.mouseSensitivity,
        touch: Ru,
        fovPercent: uu.cameraFOV
      }
    }

    function iK() {
      const uu = Eu.d.get("clientEscMenuOptions"),
        Ru = Eu.d.get("isTouchScreen") ? (0, FK.q)(uu) : uu.mouseSensitivity,
        yu = PK().mouse;
      return yu > 0 ? Ru / yu : 1
    }

    function YK(uu) {
      const Ru = () => {
        uu.setSoundPrefs(Eu.d.get("soundVolume"), Eu.d.get("soundOnFromAd"))
      };
      let yu = null;
      const Ku = () => {
        const {
          showFog: Ru,
          enableLighting: Ku,
          fogChunkDistance: Qu,
          chunkFadeIn: mu
        } = Eu.d.get("clientEscMenuOptions"), Ju = {
          showFog: Ru,
          lighting: Ku,
          fogChunks: Qu,
          chunkFade: mu
        };
        yu && (0, Bu.Vd)(yu) === (0, Bu.Vd)(Ju) && yu.fogChunks === Qu || (yu = Ju, uu.setEnvPrefs(yu))
      };
      let Qu = null;
      const Ju = () => {
        const Ru = function() {
          const uu = Eu.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: Eu.d.get("areNametagsHidden"),
            crouchToggle: uu.crouchIsToggle,
            bhopDisabled: uu.disableBunnyHopping,
            disableBobbing: uu.disableBobbing,
            ezTowering: uu.ezTowering && (0, wK.f)(),
            ezBridging: uu.ezBridging,
            showChunkBorders: uu.showChunkBorders,
            nametagCutDistance: (0, hK.f)()
          }
        }();
        (0, Du.ge)(Qu, Ru) || (Qu = Ru, uu.setUiPrefs(Ru))
      };
      let Nu = null;
      const Xu = () => {
        const Ru = PK();
        (0, Du.ge)(Nu, Ru) || (Nu = Ru, uu.setLookPrefs(Ru))
      };
      Ru(), Ku(), Ju(), Xu();
      const Vu = [(0, mu.n)("appManagerUpdated|soundVolume", Ru), (0, mu.n)("appManagerUpdated|soundOnFromAd", Ru), (0, mu.n)("appManagerUpdated|clientEscMenuOptions", (() => {
        Ku(), Ju(), Xu()
      })), (0, mu.n)("appManagerUpdated|areNametagsHidden", Ju), (0, mu.n)("appManagerUpdated|showDistantNametags", Ju)];
      return () => {
        for (const uu of Vu) uu()
      }
    }
    var oK = yu(40492),
      qK = yu(40499);
    var OK = (0, qK.b)("lend"),
      vK = (0, qK.b)("starting"),
      aK = (0, qK.b)("generation"),
      fK = (0, qK.b)("end");
    class uQ {
      constructor(uu) {
        this.deps = uu, Object.defineProperty(this, fK, {
          value: RQ
        }), Object.defineProperty(this, OK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, aK, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, oK.e)(this, OK)[OK] || (0, oK.e)(this, vK)[vK]
      }
      async start(uu) {
        if (this.active) return "busy";
        const Ru = (0, oK.e)(this, aK)[aK];
        (0, oK.e)(this, vK)[vK] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, oK.e)(this, vK)[vK] = !1
        }
        if (Ru !== (0, oK.e)(this, aK)[aK]) return "refused";
        const yu = this.deps.beginSave();
        if (!yu) return "refused";
        const Eu = Number(BigInt.asUintN(32, uu)),
          Ku = Number(BigInt.asUintN(32, uu >> 32n));
        let Qu = "refused";
        return this.deps.recorderCall(((uu, Ru) => {
          const mu = yu.editState,
            Ju = uu.stage(mu.length);
          0 !== Ju ? (new Uint8Array(Ru.buffer, Ju, mu.length).set(mu), uu.vKu(yu.headLen, Eu, Ku) && (Qu = "sealing")) : Qu = "tooLarge"
        }), !0), "sealing" !== Qu ? (yu.end(), Qu) : ((0, oK.e)(this, OK)[OK] = yu, "sealing")
      }
      beforeRecorderStep() {
        const uu = (0, oK.e)(this, OK)[OK];
        if (!uu) return null;
        let Ru = -1,
          yu = 0;
        if (!this.deps.recorderCall((uu => {
            Ru = uu.aKu(), Ru > 0 && (yu = uu.fKu())
          }))) return (0, oK.e)(this, fK)[fK](uu, "stopped");
        if (Ru < 0) return (0, oK.e)(this, fK)[fK](uu, "read");
        if (0 === Ru) return null;
        const Eu = uu.head(yu, Ru);
        let Ku = !1;
        if (Eu && this.deps.recorderCall(((uu, yu) => {
            const Qu = uu.stage(Ru);
            0 !== Qu && (new Uint8Array(yu.buffer, Qu, Ru).set(Eu), Ku = !0)
          }), !0), Ku) return null;
        const Qu = uu.givenUp();
        this.deps.recorderCall((uu => {
          uu.uQu()
        }));
        const mu = (0, oK.e)(this, fK)[fK](uu, Qu ? "givenUp" : "stopped");
        return Qu && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), mu
      }
      stop() {
        (0, oK.e)(this, aK)[aK]++;
        const uu = (0, oK.e)(this, OK)[OK];
        uu && (this.deps.recorderCall((uu => {
          uu.uQu()
        })), (0, oK.e)(this, fK)[fK](uu, "stopped"))
      }
    }

    function RQ(uu, Ru) {
      return (0, oK.e)(this, OK)[OK] = null, uu.end(), Ru
    }

    function yQ(uu, Ru) {
      const yu = new Uint8Array(4),
        Eu = new DataView(yu.buffer);
      return Eu.setUint8(0, uu ? 1 : 0), Eu.setUint16(2, Math.max(0, Math.min(65535, Math.round(Ru))), !0), yu
    }

    function EQ(uu, Ru) {
      return uu > function(uu) {
        return 16777216 + 314572.8 * Math.max(0, uu)
      }(Ru) + 33554432
    }
    let KQ = null;

    function QQ(uu) {
      return KQ ??= async function(uu) {
        const Ru = uu.loadInFlight();
        Ru && await Ru.catch((() => {}));
        if (uu.trapped()) return "trapped";
        if (uu.busy() || !EQ(uu.memoryBytes(), uu.clipSeconds())) return "kx";
        uu.unload();
        let yu = !1;
        try {
          yu = await uu.load()
        } catch {
          yu = !1
        }
        if (!yu) return uu.trapped() ? "trapped" : uu.VS() ? "VS" : "failed";
        return "recycled"
      }(uu).finally((() => {
        KQ = null
      })), KQ
    }
    const mQ = "Replay recording couldn't load, so try again.",
      JQ = new Set([Bu.Sc.ToggleRecording, Bu.Sc.SaveClip]);
    var NQ = (0, qK.b)("bindings"),
      XQ = (0, qK.b)("module"),
      VQ = (0, qK.b)("memory"),
      rQ = (0, qK.b)("trapped"),
      BQ = (0, qK.b)("VS"),
      xQ = (0, qK.b)("recycleDue"),
      SQ = (0, qK.b)("loading"),
      pQ = (0, qK.b)("generation"),
      TQ = (0, qK.b)("viewDrawn"),
      WQ = (0, qK.b)("clip"),
      jQ = (0, qK.b)("session"),
      HQ = (0, qK.b)("control"),
      dQ = (0, qK.b)("deferred"),
      bQ = (0, qK.b)("coreU8"),
      CQ = (0, qK.b)("coreU32"),
      kQ = (0, qK.b)("moduleU8"),
      eQ = (0, qK.b)("edited"),
      AQ = (0, qK.b)("sendSession"),
      DQ = (0, qK.b)("checkNotInEvents"),
      MQ = (0, qK.b)("clipping"),
      IQ = (0, qK.b)("busy"),
      GQ = (0, qK.b)("use"),
      UQ = (0, qK.b)("ensureLoaded"),
      nQ = (0, qK.b)("loadOnce"),
      sQ = (0, qK.b)("recycleAfterStep"),
      tQ = (0, qK.b)("settleRecycle"),
      lQ = (0, qK.b)("load"),
      gQ = (0, qK.b)("attach"),
      cQ = (0, qK.b)("resendHeld"),
      LQ = (0, qK.b)("recycle"),
      zQ = (0, qK.b)("send"),
      FQ = (0, qK.b)("unload"),
      wQ = (0, qK.b)("dropModule"),
      ZQ = (0, qK.b)("coreBytes"),
      hQ = (0, qK.b)("coreWords"),
      PQ = (0, qK.b)("moduleBytes"),
      iQ = (0, qK.b)("loadFailed"),
      YQ = (0, qK.b)("call"),
      oQ = (0, qK.b)("guard"),
      qQ = (0, qK.b)("trapOn");
    class OQ {
      constructor(uu) {
        this.deps = uu, Object.defineProperty(this, qQ, {
          value: Hm
        }), Object.defineProperty(this, oQ, {
          value: jm
        }), Object.defineProperty(this, YQ, {
          value: Wm
        }), Object.defineProperty(this, iQ, {
          value: Tm
        }), Object.defineProperty(this, PQ, {
          value: pm
        }), Object.defineProperty(this, hQ, {
          value: Sm
        }), Object.defineProperty(this, ZQ, {
          value: xm
        }), Object.defineProperty(this, wQ, {
          value: Bm
        }), Object.defineProperty(this, FQ, {
          value: rm
        }), Object.defineProperty(this, zQ, {
          value: Vm
        }), Object.defineProperty(this, LQ, {
          value: Xm
        }), Object.defineProperty(this, cQ, {
          value: Nm
        }), Object.defineProperty(this, gQ, {
          value: Jm
        }), Object.defineProperty(this, lQ, {
          value: mm
        }), Object.defineProperty(this, tQ, {
          value: Qm
        }), Object.defineProperty(this, sQ, {
          value: Km
        }), Object.defineProperty(this, nQ, {
          value: Em
        }), Object.defineProperty(this, UQ, {
          value: ym
        }), Object.defineProperty(this, GQ, {
          value: Rm
        }), Object.defineProperty(this, IQ, {
          value: um
        }), Object.defineProperty(this, MQ, {
          value: fQ
        }), Object.defineProperty(this, DQ, {
          value: aQ
        }), Object.defineProperty(this, AQ, {
          value: vQ
        }), Object.defineProperty(this, NQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, VQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, BQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, xQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pQ, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, TQ, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, WQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kQ, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eQ, {
          writable: !0,
          value: void 0
        }), (0, oK.e)(this, eQ)[eQ] = new uQ({
          ensureLoaded: () => (0, oK.e)(this, UQ)[UQ](),
          recorderCall: (uu, Ru) => {
            Ru && (0, oK.e)(this, DQ)[DQ]("an edited save's stage");
            const yu = (0, oK.e)(this, YQ)[YQ](((Ru, yu) => (uu(Ru, yu), !0)));
            return null !== yu && void 0 !== yu && yu
          },
          beginSave: uu.beginSave,
          givenUp: uu.givenUp
        })
      }
      get active() {
        return null !== (0, oK.e)(this, XQ)[XQ]
      }
      get trapped() {
        return (0, oK.e)(this, rQ)[rQ]
      }
      get loading() {
        return null !== (0, oK.e)(this, SQ)[SQ]
      }
      prefetch() {
        (0, oK.e)(this, BQ)[BQ] || (0, oK.e)(this, rQ)[rQ] || (0, oK.e)(this, XQ)[XQ] || (0, oK.e)(this, SQ)[SQ] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, oK.e)(this, TQ)[TQ] = !0, (0, oK.e)(this, MQ)[MQ]() && (0, oK.e)(this, GQ)[GQ]()
      }
      prefs(uu, Ru) {
        (0, oK.e)(this, WQ)[WQ] = {
          on: uu,
          seconds: Ru
        }, (0, oK.e)(this, zQ)[zQ](Bu.Nc.Prefs, yQ(uu, Ru)), uu && (0, oK.e)(this, TQ)[TQ] && (0, oK.e)(this, GQ)[GQ]()
      }
      control(uu) {
        const Ru = function(uu) {
          return new Uint8Array([uu, 0, 0, 0])
        }(uu);
        if (JQ.has(uu)) return (0, oK.e)(this, XQ)[XQ] ? void(0, oK.e)(this, zQ)[zQ](Bu.Nc.Control, Ru) : ((0, oK.e)(this, HQ)[HQ] = Ru, void(0, oK.e)(this, GQ)[GQ]());
        (0, oK.e)(this, BQ)[BQ] || this.deps.coreCommand(Bu.Nc.Control, Ru)
      }
      session(uu) {
        (0, oK.e)(this, jQ)[jQ] = uu, (0, oK.e)(this, AQ)[AQ](uu)
      }
      filePartDone(uu, Ru) {
        (0, oK.e)(this, zQ)[zQ](Bu.Nc.FilePartDone, function(uu, Ru) {
          const yu = new Uint8Array(8),
            Eu = new DataView(yu.buffer);
          return Eu.setUint32(0, uu, !0), Eu.setUint32(4, Ru, !0), yu
        }(uu, Ru))
      }
      fileDone(uu) {
        return (0, oK.e)(this, zQ)[zQ](Bu.Nc.FileDone, function(uu) {
          const Ru = new Uint8Array(4);
          return new DataView(Ru.buffer).setUint32(0, uu, !0), Ru
        }(uu)), (0, oK.e)(this, sQ)[sQ]()
      }
      saveEdited(uu) {
        return (0, oK.e)(this, DQ)[DQ]("saveEdited"), (0, oK.e)(this, eQ)[eQ].start(uu)
      }
      afterFrame() {
        if (!(0, oK.e)(this, XQ)[XQ]) return;
        "read" === (0, oK.e)(this, eQ)[eQ].beforeRecorderStep() && (0, oK.e)(this, sQ)[sQ]();
        const uu = (0, oK.e)(this, xQ)[xQ];
        (0, oK.e)(this, xQ)[xQ] = null;
        const Ru = (0, oK.e)(this, XQ)[XQ],
          yu = (0, oK.e)(this, VQ)[VQ];
        if (!Ru || !yu) return void(null === uu || void 0 === uu || uu.resolve((0, oK.e)(this, rQ)[rQ] ? "trapped" : "kx"));
        const {
          core: Eu
        } = this.deps, Ku = Eu.EQu(2);
        let Qu, mu, Ju, Nu, Xu = 0,
          Vu = 0;
        if (0 !== Ku) {
          var ru, Bu;
          const uu = (0, oK.e)(this, hQ)[hQ]();
          Xu = null !== (ru = uu[Ku >>> 2]) && void 0 !== ru ? ru : 0, Vu = null !== (Bu = uu[1 + (Ku >>> 2)]) && void 0 !== Bu ? Bu : 0
        }
        try {
          if (Vu > 0) {
            const uu = Ru.feed(Vu);
            0 !== uu && (0, oK.e)(this, PQ)[PQ](yu).set((0, oK.e)(this, ZQ)[ZQ]().subarray(Xu, Xu + Vu), uu)
          }
          Qu = Ru.step(), mu = Ru.KQu(), Ju = Ru.QQu(), Nu = Ru.mQu()
        } catch (xu) {
          if (!(0, oK.e)(this, qQ)[qQ](xu)) throw null === uu || void 0 === uu || uu.resolve("kx"), xu;
          return void(null === uu || void 0 === uu || uu.resolve("trapped"))
        }
        if (Qu > 0) {
          const uu = Eu.JQu(2, Qu);
          0 !== uu && (0, oK.e)(this, ZQ)[ZQ]().set((0, oK.e)(this, PQ)[PQ](yu).subarray(mu, mu + Qu), uu)
        }
        if (Ju > 0) {
          (0, oK.e)(this, dQ)[dQ] = [];
          try {
            this.deps.events(new Uint8Array(yu.buffer, Nu, Ju), yu)
          } catch (xu) {
            throw null === uu || void 0 === uu || uu.resolve("kx"), xu
          } finally {
            const uu = (0, oK.e)(this, dQ)[dQ];
            (0, oK.e)(this, dQ)[dQ] = null;
            for (const [Ru, yu] of uu)(0, oK.e)(this, zQ)[zQ](Ru, yu)
          }
        }
        if (!(0, oK.e)(this, MQ)[MQ]() && !(0, oK.e)(this, IQ)[IQ]()) return (0, oK.e)(this, FQ)[FQ](), void(null === uu || void 0 === uu || uu.resolve("kx"));
        null === uu || void 0 === uu || uu.resolve((0, oK.e)(this, LQ)[LQ]())
      }
      dispose() {
        (0, oK.e)(this, BQ)[BQ] = !0, (0, oK.e)(this, FQ)[FQ]()
      }
    }

    function vQ(uu) {
      (0, oK.e)(this, zQ)[zQ](Bu.Nc.Session, function(uu) {
        const Ru = new TextEncoder,
          yu = Ru.encode(uu.game).subarray(0, 65535),
          Eu = Ru.encode(uu.lobby).subarray(0, 65535),
          Ku = new Uint8Array(22 + yu.length + 2 + Eu.length),
          Qu = new DataView(Ku.buffer);
        Qu.setFloat64(0, uu.unixMs, !0), Qu.setBigUint64(8, BigInt.asUintN(64, uu.session), !0), Qu.setUint8(16, uu.lobbyType);
        let mu = 20;
        for (const Ju of [yu, Eu]) Qu.setUint16(mu, Ju.length, !0), Ku.set(Ju, mu + 2), mu += 2 + Ju.length;
        return Ku
      }({
        ...uu,
        unixMs: this.deps.unixNow()
      }))
    }

    function aQ(uu) {
      false
    }

    function fQ() {
      var uu, Ru;
      return null !== (uu = null === (Ru = (0, oK.e)(this, WQ)[WQ]) || void 0 === Ru ? void 0 : Ru.on) && void 0 !== uu && uu
    }

    function um() {
      const uu = (0, oK.e)(this, XQ)[XQ];
      let Ru = !0;
      if (uu) try {
        Ru = uu.busy()
      } catch (yu) {
        if (!(0, oK.e)(this, qQ)[qQ](yu)) throw yu
      }
      return Ru || (0, oK.e)(this, eQ)[eQ].active
    }
    async function Rm() {
      !(0, oK.e)(this, BQ)[BQ] && this.deps.allowed() ? await (0, oK.e)(this, UQ)[UQ]() : (0, oK.e)(this, HQ)[HQ] = null
    }

    function ym() {
      return (0, oK.e)(this, rQ)[rQ] || (0, oK.e)(this, BQ)[BQ] ? Promise.resolve(!1) : (0, oK.e)(this, XQ)[XQ] ? Promise.resolve(!0) : ((0, oK.e)(this, SQ)[SQ] ??= (0, oK.e)(this, nQ)[nQ](), (0, oK.e)(this, SQ)[SQ])
    }
    async function Em() {
      let uu = !1;
      try {
        return uu = await (0, oK.e)(this, lQ)[lQ](), uu
      } finally {
        uu || ((0, oK.e)(this, HQ)[HQ] = null), (0, oK.e)(this, SQ)[SQ] = null
      }
    }

    function Km() {
      if (!(0, oK.e)(this, XQ)[XQ]) return Promise.resolve((0, oK.e)(this, rQ)[rQ] ? "trapped" : "kx");
      if (!(0, oK.e)(this, xQ)[xQ]) {
        let uu = () => {};
        const Ru = new Promise((Ru => {
          uu = Ru
        }));
        (0, oK.e)(this, xQ)[xQ] = {
          promise: Ru,
          resolve: uu
        }
      }
      return (0, oK.e)(this, xQ)[xQ].promise
    }

    function Qm(uu) {
      const Ru = (0, oK.e)(this, xQ)[xQ];
      (0, oK.e)(this, xQ)[xQ] = null, null === Ru || void 0 === Ru || Ru.resolve(uu)
    }
    async function mm() {
      let uu = (0, oK.e)(this, NQ)[NQ];
      if (!uu) {
        const Ru = (0, oK.e)(this, pQ)[pQ];
        try {
          uu = await this.deps.load()
        } catch (yu) {
          return Ru === (0, oK.e)(this, pQ)[pQ] && await (0, oK.e)(this, iQ)[iQ](yu), !1
        }
        if (Ru !== (0, oK.e)(this, pQ)[pQ]) return this.deps.unload(), !1;
        const Eu = uu,
          Ku = (0, oK.e)(this, oQ)[oQ]((() => Eu.NQu()));
        if (void 0 === Ku) return !1;
        const Qu = this.deps.core.XQu();
        if (Ku !== Qu) return await (0, oK.e)(this, iQ)[iQ](new Error(`recorder port version ${Ku}, the core's ${Qu}`)), !1;
        (0, oK.e)(this, NQ)[NQ] = uu
      }
      const Ru = uu;
      try {
        if (!(0, oK.e)(this, oQ)[oQ]((() => ((0, oK.e)(this, XQ)[XQ] = new Ru.VQu, (0, oK.e)(this, VQ)[VQ] = Ru.RQu(), !0)))) return !1;
        (0, oK.e)(this, cQ)[cQ]();
        const uu = (0, oK.e)(this, HQ)[HQ];
        return (0, oK.e)(this, HQ)[HQ] = null, uu && (0, oK.e)(this, zQ)[zQ](Bu.Nc.Control, uu), (0, oK.e)(this, gQ)[gQ]()
      } catch (yu) {
        return (0, oK.e)(this, FQ)[FQ](), await (0, oK.e)(this, iQ)[iQ](yu), !1
      }
    }

    function Jm() {
      return this.deps.core.rQu(0), 1 === this.deps.core.rQu(1) || ((0, oK.e)(this, FQ)[FQ](), this.deps.failed(mQ), !1)
    }

    function Nm() {
      (0, oK.e)(this, WQ)[WQ] && (0, oK.e)(this, zQ)[zQ](Bu.Nc.Prefs, yQ((0, oK.e)(this, WQ)[WQ].on, (0, oK.e)(this, WQ)[WQ].seconds)), (0, oK.e)(this, jQ)[jQ] && (0, oK.e)(this, AQ)[AQ]((0, oK.e)(this, jQ)[jQ])
    }

    function Xm() {
      return QQ({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var uu, Ru;
          return null !== (uu = null === (Ru = (0, oK.e)(this, WQ)[WQ]) || void 0 === Ru ? void 0 : Ru.seconds) && void 0 !== uu ? uu : 0
        },
        trapped: () => (0, oK.e)(this, rQ)[rQ],
        busy: () => (0, oK.e)(this, IQ)[IQ](),
        loadInFlight: () => (0, oK.e)(this, SQ)[SQ],
        VS: () => (0, oK.e)(this, BQ)[BQ],
        unload: () => {
          (0, oK.e)(this, FQ)[FQ]()
        },
        load: () => (0, oK.e)(this, UQ)[UQ]()
      })
    }

    function Vm(uu, Ru) {
      (0, oK.e)(this, dQ)[dQ] ? (0, oK.e)(this, dQ)[dQ].push([uu, Ru]): (0, oK.e)(this, YQ)[YQ](((yu, Eu) => {
        const Ku = yu.yQu(Ru.length);
        0 !== Ku && (new Uint8Array(Eu.buffer, Ku, Ru.length).set(Ru), yu.command(uu, Ru.length))
      }))
    }

    function rm() {
      (0, oK.e)(this, pQ)[pQ]++, (0, oK.e)(this, tQ)[tQ]("kx"), (0, oK.e)(this, eQ)[eQ].stop(), this.deps.core.rQu(0), (0, oK.e)(this, wQ)[wQ](), (0, oK.e)(this, rQ)[rQ] || ((0, oK.e)(this, NQ)[NQ] = null, this.deps.unload())
    }

    function Bm() {
      (0, oK.e)(this, YQ)[YQ]((uu => {
        uu.free()
      })), (0, oK.e)(this, XQ)[XQ] = null, (0, oK.e)(this, VQ)[VQ] = null, (0, oK.e)(this, kQ)[kQ] = null
    }

    function xm() {
      var uu;
      const Ru = this.deps.coreBuffer();
      return (null === (uu = (0, oK.e)(this, bQ)[bQ]) || void 0 === uu ? void 0 : uu.buffer) !== Ru && ((0, oK.e)(this, bQ)[bQ] = new Uint8Array(Ru)), (0, oK.e)(this, bQ)[bQ]
    }

    function Sm() {
      var uu;
      const Ru = this.deps.coreBuffer();
      return (null === (uu = (0, oK.e)(this, CQ)[CQ]) || void 0 === uu ? void 0 : uu.buffer) !== Ru && ((0, oK.e)(this, CQ)[CQ] = new Uint32Array(Ru, 0, Ru.byteLength >>> 2)), (0, oK.e)(this, CQ)[CQ]
    }

    function pm(uu) {
      var Ru;
      const yu = uu.buffer;
      return (null === (Ru = (0, oK.e)(this, kQ)[kQ]) || void 0 === Ru ? void 0 : Ru.buffer) !== yu && ((0, oK.e)(this, kQ)[kQ] = new Uint8Array(yu)), (0, oK.e)(this, kQ)[kQ]
    }
    async function Tm(uu) {
      await this.deps.staleOr(uu, (() => {
        this.deps.failed(mQ)
      }))
    }

    function Wm(uu) {
      const Ru = (0, oK.e)(this, XQ)[XQ],
        yu = (0, oK.e)(this, VQ)[VQ];
      if (Ru && yu) return (0, oK.e)(this, oQ)[oQ]((() => uu(Ru, yu)))
    }

    function jm(uu) {
      if (!(0, oK.e)(this, rQ)[rQ]) try {
        return uu()
      } catch (Ru) {
        if (!(0, oK.e)(this, qQ)[qQ](Ru)) throw Ru;
        return
      }
    }

    function Hm(uu) {
      return uu instanceof WebAssembly.RuntimeError && ((0, oK.e)(this, rQ)[rQ] = !0, (0, oK.e)(this, XQ)[XQ] = null, (0, oK.e)(this, VQ)[VQ] = null, (0, oK.e)(this, kQ)[kQ] = null, (0, oK.e)(this, NQ)[NQ] = null, (0, oK.e)(this, HQ)[HQ] = null, (0, oK.e)(this, tQ)[tQ]("trapped"), this.deps.core.rQu(0), (0, oK.e)(this, eQ)[eQ].stop(), this.deps.crash(this.deps.markTrapped(uu)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var dm = yu(38414);
    const bm = new Map([
      ["skyblock", () => yu.e(49).then((() => yu(38405)))]
    ]);

    function Cm(uu) {
      const Ru = bm.get(uu);
      return Ru ? Ru().then((() => {
        const Ru = (0, dm.b)(uu);
        if (!Ru) throw new Error(`${uu}'s replay hook module registered no hook`);
        return Ru
      })) : null
    }
    class km {
      constructor(uu) {
        this.deps = uu, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(uu) {
        if (this.pending.clear(), uu === this.game && null !== this.hook) return void(this.all = !0);
        const Ru = ++this.generation;
        this.game = uu, this.hook = null, this.all = !1;
        const yu = this.deps.loadHook(uu);
        null === yu || void 0 === yu || yu.then((uu => {
          Ru === this.generation && (this.hook = uu, this.all = !0)
        }), (uu => {
          Ru === this.generation && this.deps.onError(uu)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(uu) {
        null === this.hook || this.all || this.pending.set(uu, !0)
      }
      entityInfoChanged(uu) {
        null === this.hook || this.all || this.pending.has(uu) || this.pending.set(uu, !1)
      }
      flush(uu) {
        const {
          hook: Ru
        } = this;
        if (null === Ru || !uu || !this.all && 0 === this.pending.size) return;
        const yu = this.deps.cmd();
        if (null === yu) return;
        const {
          api: Eu
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: uu,
            count: Ru
          } = gy(Eu, this.ids);
          this.ids = uu;
          for (let yu = 0; yu < Ru; yu++) this.pending.set(uu[yu], !0)
        }
        const Ku = this.ids = cy(this.ids, this.pending.size);
        let Qu = 0;
        for (const Xu of this.pending.keys()) Ku[Qu++] = Xu;
        const mu = [],
          Ju = Ly(Eu, Ku, Qu, ((uu, Ru) => {
            null !== Ru && mu.push({
              serverId: uu,
              info: Ru,
              spawned: !0 === this.pending.get(uu)
            })
          }));
        if (Ju) {
          this.pending.clear();
          for (const {
              serverId: uu,
              info: Eu,
              spawned: Ku
            }
            of mu) try {
            Ru(Eu, {
              setFacingTolerance: Ru => {
                null === Ru && Ku || Qy(yu, uu, Ru) || this.pending.set(uu, Ku)
              }
            })
          } catch (Nu) {
            this.deps.onError(Nu)
          }
        }
      }
    }
    var em = (0, qK.b)("bindings"),
      Am = (0, qK.b)("module"),
      Dm = (0, qK.b)("memory"),
      Mm = (0, qK.b)("trapped"),
      Im = (0, qK.b)("generation"),
      Gm = (0, qK.b)("loading"),
      Um = (0, qK.b)("lend"),
      nm = (0, qK.b)("givenUp"),
      sm = (0, qK.b)("afterSave"),
      tm = (0, qK.b)("opens"),
      lm = (0, qK.b)("saveAskedAt"),
      gm = (0, qK.b)("unload"),
      cm = (0, qK.b)("dropModule"),
      Lm = (0, qK.b)("loadFailed"),
      zm = (0, qK.b)("saveReadsBody"),
      Fm = (0, qK.b)("command"),
      wm = (0, qK.b)("call"),
      Zm = (0, qK.b)("guard"),
      hm = (0, qK.b)("trapOn");
    class Pm {
      constructor(uu) {
        this.deps = uu, Object.defineProperty(this, hm, {
          value: uJ
        }), Object.defineProperty(this, Zm, {
          value: fm
        }), Object.defineProperty(this, wm, {
          value: am
        }), Object.defineProperty(this, Fm, {
          value: Om
        }), Object.defineProperty(this, zm, {
          get: qm,
          set: void 0
        }), Object.defineProperty(this, Lm, {
          value: om
        }), Object.defineProperty(this, cm, {
          value: Ym
        }), Object.defineProperty(this, gm, {
          value: im
        }), Object.defineProperty(this, em, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Am, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Dm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Mm, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Im, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Gm, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Um, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tm, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, lm, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, oK.e)(this, Am)[Am] && null === (0, oK.e)(this, sm)[sm]
      }
      async open(uu) {
        if ((0, oK.e)(this, Mm)[Mm]) return Bu.Xc.ModuleTrap;
        let Ru = (0, oK.e)(this, em)[em];
        if (!Ru) {
          const uu = (0, oK.e)(this, Im)[Im];
          (0, oK.e)(this, Gm)[Gm]++;
          try {
            Ru = await this.deps.load()
          } catch (Eu) {
            return (0, oK.e)(this, Gm)[Gm]--, uu !== (0, oK.e)(this, Im)[Im] ? "stopped" : (0, oK.e)(this, Lm)[Lm](Eu)
          }
          if ((0, oK.e)(this, Gm)[Gm]--, uu !== (0, oK.e)(this, Im)[Im]) return (0, oK.e)(this, em)[em] || 0 !== (0, oK.e)(this, Gm)[Gm] || (0, oK.e)(this, Mm)[Mm] || this.deps.unload(), "stopped";
          if ((0, oK.e)(this, Mm)[Mm]) return Bu.Xc.ModuleTrap;
          const yu = Ru.NQu(),
            Ku = this.deps.core.XQu();
          if (yu !== Ku) return (0, oK.e)(this, Lm)[Lm](new Error(`replay port version ${yu}, the core's ${Ku}`));
          (0, oK.e)(this, em)[em] = Ru
        }
        if (!(0, oK.e)(this, Am)[Am]) {
          const uu = Ru;
          if (!(0, oK.e)(this, Zm)[Zm]((() => {
              (0, oK.e)(this, Am)[Am] = new uu.BQu, (0, oK.e)(this, Dm)[Dm] = uu.xQu()
            }))) return Bu.Xc.ModuleTrap
        }
        let yu = !1;
        return (0, oK.e)(this, wm)[wm](((Ru, Eu) => {
          null !== (0, oK.e)(this, sm)[sm] && Ru.step(0, 0);
          const Ku = Ru.stage(uu.length);
          0 !== Ku && (new Uint8Array(Eu.buffer, Ku, uu.length).set(uu), Ru.open(), (0, oK.e)(this, nm)[nm] = (0, oK.e)(this, Um)[Um], (0, oK.e)(this, sm)[sm] = null, (0, oK.e)(this, tm)[tm]++, yu = !0)
        })) ? yu ? "opening" : Bu.Xc.TooLarge : Bu.Xc.ModuleTrap
      }
      beforeFrame(uu) {
        const Ru = (0, oK.e)(this, Am)[Am],
          yu = (0, oK.e)(this, Dm)[Dm];
        if (!Ru || !yu || null !== (0, oK.e)(this, sm)[sm]) return;
        const {
          core: Eu
        } = this.deps, Ku = Eu.SQu(uu);
        if (Ku < 0) return;
        const Qu = Math.floor(Ku);
        let mu, Ju;
        try {
          mu = Ru.step(Qu, Ku - Qu), Ju = Ru.KQu()
        } catch (Xu) {
          return void(0, oK.e)(this, hm)[hm](Xu)
        }
        const Nu = Eu.JQu(1, mu);
        if (0 === Nu) {
          const uu = (0, oK.e)(this, wm)[wm]((uu => {
            uu.close()
          }));
          if (!uu) return;
          return (0, oK.e)(this, zm)[zm] ? (0, oK.e)(this, sm)[sm] = "drop" : (0, oK.e)(this, cm)[cm](), void Eu.pQu(Bu.Xc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Nu, mu).set(new Uint8Array(yu.buffer, Ju, mu))
      }
      play() {
        (0, oK.e)(this, Fm)[Fm]((uu => {
          uu.play()
        }))
      }
      pause() {
        (0, oK.e)(this, Fm)[Fm]((uu => {
          uu.pause()
        }))
      }
      seek(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, oK.e)(this, Fm)[Fm]((yu => {
          yu.seek(uu, Ru)
        }))
      }
      setMark(uu, Ru) {
        return (0, oK.e)(this, Fm)[Fm]((yu => {
          yu.TQu(uu, Ru)
        }))
      }
      addKeyframe(uu, Ru) {
        return (0, oK.e)(this, Fm)[Fm]((yu => {
          yu.WQu(uu[0], uu[1], uu[2], Ru[0], Ru[1], Ru[2])
        }))
      }
      setKeyframe(uu, Ru) {
        return (0, oK.e)(this, Fm)[Fm]((yu => {
          yu.jQu(uu, Ru)
        }))
      }
      moveKeyframe(uu, Ru) {
        return (0, oK.e)(this, Fm)[Fm]((yu => {
          yu.HQu(uu, Ru)
        }))
      }
      deleteKeyframes(uu, Ru) {
        return (0, oK.e)(this, Fm)[Fm]((yu => {
          yu.dQu(uu, Ru)
        }))
      }
      crop(uu, Ru) {
        return null === (0, oK.e)(this, Um)[Um] && (0, oK.e)(this, Fm)[Fm]((yu => {
          yu.crop(uu, Ru)
        }))
      }
      beginSave() {
        const uu = (0, oK.e)(this, lm)[lm];
        if ((0, oK.e)(this, lm)[lm] = null, null !== uu && uu !== (0, oK.e)(this, tm)[tm]) return null;
        let Ru = 0,
          yu = null;
        if ((0, oK.e)(this, wm)[wm](((uu, Eu) => {
            Ru = uu.save(), 0 !== Ru && (yu = new Uint8Array(Eu.buffer, uu.bQu(), uu.CQu()).slice())
          })), 0 === Ru || !yu) return null;
        const Eu = {
          headLen: Ru,
          editState: yu,
          givenUp: () => (0, oK.e)(this, nm)[nm] === Eu,
          head: (uu, Ru) => {
            if ((0, oK.e)(this, Um)[Um] !== Eu || !(0, oK.e)(this, zm)[zm]) return null;
            let yu = null;
            return (0, oK.e)(this, wm)[wm](((Eu, Ku) => {
              const Qu = Eu.kQu();
              0 !== Qu && uu >= 0 && Ru >= 0 && uu + Ru <= Qu && (yu = new Uint8Array(Ku.buffer, Eu.eQu() + uu, Ru))
            })), yu
          },
          end: () => {
            if ((0, oK.e)(this, Um)[Um] !== Eu) return;
            (0, oK.e)(this, Um)[Um] = null, (0, oK.e)(this, nm)[nm] = null, (0, oK.e)(this, wm)[wm]((uu => {
              uu.AQu()
            }));
            const uu = (0, oK.e)(this, sm)[sm];
            (0, oK.e)(this, sm)[sm] = null, "unload" === uu ? (0, oK.e)(this, gm)[gm]() : "drop" === uu && (0, oK.e)(this, cm)[cm]()
          }
        };
        return (0, oK.e)(this, Um)[Um] = Eu, Eu
      }
      askSave() {
        (0, oK.e)(this, lm)[lm] = (0, oK.e)(this, tm)[tm]
      }
      setSpeed(uu) {
        (0, oK.e)(this, Fm)[Fm]((Ru => {
          Ru.DQu(uu)
        }))
      }
      setCameraMode(uu) {
        (0, oK.e)(this, Fm)[Fm]((Ru => {
          Ru.MQu(uu)
        }))
      }
      close() {
        (0, oK.e)(this, Fm)[Fm]((uu => {
          uu.close()
        }))
      }
      stop() {
        (0, oK.e)(this, Im)[Im]++, (0, oK.e)(this, zm)[zm] && ((0, oK.e)(this, wm)[wm]((uu => {
          uu.close()
        })), (0, oK.e)(this, Am)[Am]) ? (0, oK.e)(this, sm)[sm] = "unload" : (0, oK.e)(this, gm)[gm]()
      }
    }

    function im() {
      (0, oK.e)(this, cm)[cm](), (0, oK.e)(this, Mm)[Mm] || ((0, oK.e)(this, em)[em] = null, this.deps.unload())
    }

    function Ym() {
      (0, oK.e)(this, wm)[wm]((uu => {
        uu.free()
      })), (0, oK.e)(this, Am)[Am] = null, (0, oK.e)(this, Dm)[Dm] = null
    }
    async function om(uu) {
      return await this.deps.staleOr(uu, (() => {})) ? "reloading" : Bu.Xc.ModuleLoad
    }

    function qm() {
      return null !== (0, oK.e)(this, Um)[Um] && (0, oK.e)(this, nm)[nm] !== (0, oK.e)(this, Um)[Um]
    }

    function Om(uu) {
      return null === (0, oK.e)(this, sm)[sm] && (0, oK.e)(this, wm)[wm](uu)
    }

    function am(uu) {
      const Ru = (0, oK.e)(this, Am)[Am],
        yu = (0, oK.e)(this, Dm)[Dm];
      return !(!Ru || !yu) && (0, oK.e)(this, Zm)[Zm]((() => {
        uu(Ru, yu)
      }))
    }

    function fm(uu) {
      if ((0, oK.e)(this, Mm)[Mm]) return !1;
      try {
        return uu(), !0
      } catch (Ru) {
        return (0, oK.e)(this, hm)[hm](Ru), !1
      }
    }

    function uJ(uu) {
      if (!(uu instanceof WebAssembly.RuntimeError)) throw uu;
      (0, oK.e)(this, Mm)[Mm] = !0, (0, oK.e)(this, Am)[Am] = null, (0, oK.e)(this, Dm)[Dm] = null, (0, oK.e)(this, em)[em] = null, this.deps.crash(this.deps.markTrapped(uu)), this.deps.core.pQu(Bu.Xc.ModuleTrap)
    }
    var RJ = yu(6271),
      yJ = yu(40298);
    const EJ = "[bloxd-wasm-client]";
    const KJ = String(AK);

    function QJ(uu) {
      return null === uu || uu === KJ ? void 0 : uu
    }

    function mJ(uu) {
      var Ru, yu, Eu, Ku, Qu, Ju, Nu;
      switch (uu.what) {
        case Bu._c.FlyingText: {
          let Ru;
          try {
            Ru = JSON.parse(uu.contentJson)
          } catch (Xu) {
            return void console.warn(`${EJ} a replay's flying text isn't JSON`, Xu)
          }
          mu.k.Op("forceFlyingMiddleMessage", {
            content: Ru,
            IQ: uu.IQ,
            angle: uu.angle,
            GQ: uu.GQ
          });
          break
        }
        case Bu._c.PlayerKilled:
          (0, yJ.i)({
            kind: "killed",
            body: {
              deadEId: null !== (Ru = QJ(uu.dead)) && void 0 !== Ru ? Ru : "",
              killerEId: QJ(uu.killer),
              withItem: null !== (yu = uu.withItem) && void 0 !== yu ? yu : "",
              killstreak: uu.killstreak
            }
          });
          break;
        case Bu._c.Killfeed:
          (0, yJ.i)({
            kind: "custom",
            body: {
              killer: {
                eId: QJ(uu.killerId),
                name: null !== (Eu = uu.killerName) && void 0 !== Eu ? Eu : void 0,
                colour: null !== (Ku = uu.killerColour) && void 0 !== Ku ? Ku : void 0
              },
              victim: {
                eId: QJ(uu.victimId),
                name: null !== (Qu = uu.victimName) && void 0 !== Qu ? Qu : void 0,
                colour: null !== (Ju = uu.victimColour) && void 0 !== Ju ? Ju : void 0
              },
              withItem: null !== (Nu = uu.withItem) && void 0 !== Nu ? Nu : ""
            }
          })
      }
    }
    const JJ = "[bloxd-wasm-client]";

    function NJ(uu) {
      if (void 0 === uu || null === uu || "" === uu) return null;
      const Ru = Number(uu);
      return Number.isInteger(Ru) && Ru > AK && Ru <= 2147483647 ? Ru : null
    }

    function XJ(uu) {
      return {
        id: NJ(uu.eId),
        name: "string" === typeof uu.name ? uu.name : null,
        colour: "string" === typeof uu.colour ? uu.colour : null
      }
    }

    function VJ(uu) {
      const Ru = (0, gK.m)(Py.$b.PlayerKilled, (Ru => {
          var yu, Eu;
          const Ku = (0, lK.g)(Ru);
          if (!(0, lK.d)(Ku)) return;
          const {
            deadEId: Qu,
            killerEId: mu,
            withItem: Ju,
            killstreak: Nu
          } = Ku;
          uu.recordPlayerKilled(null !== (yu = NJ(Qu)) && void 0 !== yu ? yu : AK, null !== (Eu = NJ(mu)) && void 0 !== Eu ? Eu : AK, "number" === typeof Nu ? Nu : 0, "string" === typeof Ju ? Ju : "")
        })),
        yu = (0, gK.m)(Py.$b.CustomKillfeed, (Ru => {
          const yu = (0, lK.g)(Ru);
          if (!(0, lK.d)(yu) || !(0, lK.d)(yu.killer) || !(0, lK.d)(yu.victim)) return;
          const {
            killer: Eu,
            victim: Ku,
            withItem: Qu
          } = yu;
          uu.recordKillfeed(XJ(Eu), XJ(Ku), "string" === typeof Qu ? Qu : null)
        }));
      return () => {
        Ru(), yu()
      }
    }

    function rJ(uu) {
      var Ru;
      return void 0 === uu || null === uu ? null : null !== (Ru = JSON.stringify(uu)) && void 0 !== Ru ? Ru : null
    }

    function BJ(uu) {
      let Ru = null;
      const yu = () => {
        const {
          enableClipping: yu,
          clipDurationSeconds: Ku
        } = Eu.d.get("clientEscMenuOptions"), Qu = `${yu}:${Ku}`;
        Qu !== Ru && (Ru = Qu, uu.recorder.setPrefs(yu, Ku))
      };
      return yu(), (0, mu.n)("appManagerUpdated|clientEscMenuOptions", yu)
    }
    const xJ = "replayModule",
      SJ = "recorderModule";

    function pJ(uu, Ru, yu) {
      return function() {
        return uu.isStopped ? yu : Ru(...arguments)
      }
    }
    const TJ = {
      open: () => Promise.reject(new Error(TK.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function WJ() {
      return yu.e(61).then((() => yu(61339)))
    }

    function jJ(uu) {
      (0, TK.h)({
        text: uu,
        type: "Error"
      })
    }
    class HJ {
      constructor(uu) {
        this.deps = uu, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Ru,
          api: Eu,
          core: Ku
        } = uu, Qu = () => uu.memory().buffer, mu = () => Ru.isStopped ? null : Ru.rings.cmd, Ju = pJ(Ru, ((uu, Ru) => Ku.JQu(uu, Ru)), 0), Nu = () => Ku.XQu();
        let Xu = null;
        this.replay = new Pm({
          core: {
            SQu: pJ(Ru, (uu => Ku.SQu(uu)), -1),
            JQu: Ju,
            XQu: Nu,
            pQu: pJ(Ru, (uu => {
              Ku.pQu(uu)
            }), void 0)
          },
          coreBuffer: Qu,
          load: async () => (Xu = await yu.e(62).then((() => yu(61351))), Xu.loadReplayModule()),
          unload: () => {
            var uu;
            null === (uu = Xu) || void 0 === uu || uu.unloadReplayModule()
          },
          markTrapped: uu => Xu ? Xu.markReplayTrapped(uu) : new Error(String(uu)),
          staleOr: (Ru, yu) => uu.staleOr(xJ, Ru, yu),
          crash: Ru => {
            uu.reportFault(xJ, Ru)
          }
        });
        let Vu = null;
        this.recorder = new OQ({
          core: {
            rQu: pJ(Ru, (uu => Ku.rQu(uu)), 0),
            EQu: pJ(Ru, (uu => Ku.EQu(uu)), 0),
            JQu: Ju,
            XQu: Nu
          },
          coreCommand: (uu, Ru) => {
            var yu, Eu;
            return null !== (yu = null === (Eu = mu()) || void 0 === Eu ? void 0 : Eu.writeCmd(uu, 0, Ru)) && void 0 !== yu && yu
          },
          coreBuffer: Qu,
          load: async () => (Vu = await WJ(), Vu.loadRecorderModule()),
          prefetch: () => {
            WJ().then((uu => uu.prefetchRecorderModule())).catch((uu => {
              console.warn(`${JJ} the recorder module didn't prefetch, so a save loads it:`, uu)
            }))
          },
          unload: () => {
            var uu;
            null === (uu = Vu) || void 0 === uu || uu.unloadRecorderModule()
          },
          markTrapped: uu => Vu ? Vu.markRecorderTrapped(uu) : new Error(String(uu)),
          memoryBytes: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = Vu) || void 0 === Ru ? void 0 : Ru.recorderMemoryBytes()) && void 0 !== uu ? uu : 0
          },
          staleOr: (Ru, yu) => uu.staleOr(SJ, Ru, yu),
          crash: Ru => {
            uu.reportFault(SJ, Ru)
          },
          allowed: () => !0 === uu.options.get("canRecordReplays"),
          failed: jJ,
          events: (uu, Ru) => {
            this.runtime.recorderEvents(uu, Ru)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: jJ,
          unixNow: () => Date.now()
        });
        const ru = new eK({
          core: {
            oKu: pJ(Ru, (uu => Ku.oKu(uu)), 0),
            OKu: pJ(Ru, (() => {
              Ku.OKu()
            }), void 0),
            IT: pJ(Ru, (() => Ku.IT()), 0),
            qKu: pJ(Ru, (() => Ku.qKu()), 0)
          },
          buffer: Qu,
          apiView: () => Eu.apiView,
          cmd: mu,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new km({
          api: Eu,
          cmd: mu,
          loadHook: Cm,
          onError: uu => {
            console.warn(`${JJ} the recorded game's replay hooks:`, uu)
          }
        });
        const Bu = new tK({
          client: ru,
          buffer: Qu,
          setHoldDraws: uu => {
            Ru.setHoldDraws(uu)
          },
          notify: TK.h,
          onRecorderState: () => {
            var uu;
            null === (uu = (0, jK.e)()) || void 0 === uu || uu.recorderChanged()
          },
          onViewerChange: () => {
            var uu;
            null === (uu = (0, jK.e)()) || void 0 === uu || uu.viewerChanged()
          },
          onReplayOption: Ru => {
            ! function(uu, Ru) {
              var yu, Eu;
              const Ku = Py.lb[Ru.key];
              if (void 0 === Ku) return;
              let Qu = null !== (yu = Ru.value) && void 0 !== yu ? yu : JSON.parse(JSON.stringify(null !== (Eu = RJ.e[Ku]) && void 0 !== Eu ? Eu : null));
              if (null !== Ru.value && Ru.key < Py.Lb.Environment && "string" === typeof Qu) try {
                Qu = JSON.parse(Qu)
              } catch (mu) {
                return void console.warn(`${EJ} a replay's ${Ku} isn't JSON`, mu)
              }
              uu.applyNewClientOptions({
                [Ku]: Qu
              })
            }(uu.options, Ru)
          },
          onReplayUiEvent: mJ,
          onReplayOpened: Ru => {
            this.entityHooks.opened((0, Du.cc)(Ru)), uu.replayShaderPack(Ru)
          },
          meshPending: () => {
            var uu, yu;
            return null !== (uu = null === (yu = Ru.lastHeader) || void 0 === yu ? void 0 : yu.renderPending) && void 0 !== uu ? uu : 0
          },
          viewerOpen: WK.e,
          download: uu => {
            (0, SK.i)(uu)
          }
        });
        this.runtime = Bu, Eu.replay = Bu.sink, (0, jK.o)(Bu);
        const xu = new zK({
          live: () => {
            var uu;
            return !Ru.isStopped && !0 === (null === (uu = Bu.currentViewer) || void 0 === uu ? void 0 : uu.inPlayback)
          },
          cmd: mu,
          dragScale: iK
        });
        this.freecam = xu, (0, jK.m)(xu), this.recordedOptions = function(uu, Ru) {
          const yu = Py.lb,
            Eu = yu.map(((yu, Eu) => Ru.subscribe(yu, (Ru => {
              uu.setOption(Eu, rJ(Ru))
            }))));
          return {
            sendAll() {
              yu.forEach(((yu, Eu) => {
                uu.setOption(Eu, rJ(Ru.get(yu)))
              }))
            },
            stop() {
              for (const uu of Eu) uu()
            }
          }
        }(Bu.recorder, uu.options), this.stops = [(0, RE.n)((uu => {
          xu.flush();
          try {
            this.replay.beforeFrame(uu)
          } catch (Ru) {
            this.deps.reportFault("replayFrame", Ru)
          }
        })), (0, RE.C)(((uu, Ru) => {
          try {
            this.recorder.afterFrame(), Ru && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (yu) {
            this.deps.reportFault("recorderFrame", yu)
          }
          try {
            Bu.afterFrame(uu)
          } catch (yu) {
            this.deps.reportFault("replayRuntime", yu)
          }
        })), BJ(Bu), () => {
          this.recordedOptions.stop()
        }, VJ(Bu.recorder), (0, cK.h)((uu => {
          let {
            action: Ru,
            down: yu
          } = uu;
          var Eu;
          yu && (null === (Eu = (0, jK.e)()) || void 0 === Eu || Eu.keyDown(Ru))
        }))];
        const Su = () => {
          const uu = Bu.currentViewer;
          return !0 === (null === uu || void 0 === uu ? void 0 : uu.isOpen) ? uu : null
        };
        (0, pK.d)({
          open: (uu, Ru) => this.open(uu, Ru),
          replayKey: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = Su()) || void 0 === Ru ? void 0 : Ru.id) && void 0 !== uu ? uu : null
          },
          saveRefusal: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = Su()) || void 0 === Ru ? void 0 : Ru.saveRefusal) && void 0 !== uu ? uu : null
          },
          encode: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = Su()) || void 0 === Ru ? void 0 : Ru.save()) && void 0 !== uu ? uu : Promise.resolve(null)
          },
          fileHandle: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = Bu.currentViewer) || void 0 === Ru ? void 0 : Ru.fileHandle) && void 0 !== uu ? uu : null
          },
          markSaved: (uu, Ru) => {
            var yu;
            null === (yu = Bu.currentViewer) || void 0 === yu || yu.markSaved(uu, Ru)
          }
        })
      }
      netEvent(uu) {
        if ("connection" === uu.type)
          if (uu.phase === Bu.J.Activated) {
            this.activeConn = uu.conn;
            const Ru = this.deps.sessionInfo(uu.conn);
            null !== Ru && (this.runtime.activated({
              lobbyType: (0, Mu.s)(Ru.lobbyName),
              gameNameWithVariation: Ru.gameNameWithVariation,
              lobbyName: Ru.lobbyName
            }), this.recordedOptions.sendAll())
          } else uu.phase !== Bu.J.Left && uu.phase !== Bu.J.Closed || uu.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const uu of this.stops) uu();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, jK.i)() === this.runtime && (0, jK.o)(null), (0, jK.f)() === this.freecam && (0, jK.m)(null), (0, pK.d)(TJ), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(uu, Ru) {
        const {
          running: yu
        } = this.deps;
        if (yu.isStopped) throw new Error(TK.d.coreStopped.text);
        if (uu.byteLength > 67108864) throw new Error(TK.d.cantOpen.text);
        let Eu;
        try {
          Eu = await async function(uu) {
            const Ru = await uu.loadViewer();
            return Ru.inPlayback || (0, RE.I)().leaveGame(null), Ru
          }(this.runtime)
        } catch (Ku) {
          throw console.warn(`${JJ} the replay viewer didn't load`, Ku), new Error(TK.d.viewerLoadFailed.text)
        }
        if (yu.isStopped) throw new Error(TK.d.coreStopped.text);
        await Eu.open(uu, Ru)
      }
    }
    var dJ = yu(1878);

    function bJ(uu, Ru) {
      const {
        aux: yu,
        payload: Eu
      } = function(uu) {
        return {
          aux: uu.reset ? Bu.Wb.ResetFirst : 0,
          payload: kJ(uu.changes)
        }
      }(Ru);
      uu.queueOptions(yu, Eu) && (Ru.reset && dJ.b.reset(), dJ.b.apply(Ru.changes))
    }
    const CJ = new TextEncoder;

    function kJ(uu) {
      const Ru = new eJ;
      return DJ(Ru, uu), Ru.bytes()
    }
    class eJ {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(uu) {
        if (this.len + uu <= this.buf.length) return;
        const Ru = new Uint8Array(Math.max(2 * this.buf.length, this.len + uu));
        Ru.set(this.buf.subarray(0, this.len)), this.buf = Ru, this.view = new DataView(Ru.buffer)
      }
      u8(uu) {
        this.room(1), this.buf[this.len++] = uu
      }
      tagged(uu, Ru, yu) {
        this.room(1 + Ru), this.buf[this.len++] = uu, 1 === Ru ? this.view.setUint8(this.len, yu) : 2 === Ru ? this.view.setUint16(this.len, yu) : this.view.setUint32(this.len, yu), this.len += Ru
      }
      signed(uu, Ru, yu) {
        this.room(1 + Ru), this.buf[this.len++] = uu, 1 === Ru ? this.view.setInt8(this.len, yu) : 2 === Ru ? this.view.setInt16(this.len, yu) : this.view.setInt32(this.len, yu), this.len += Ru
      }
      f64(uu) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, uu), this.len += 8
      }
      raw(uu) {
        this.room(uu.length), this.buf.set(uu, this.len), this.len += uu.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function AJ(uu, Ru, yu, Eu, Ku, Qu, mu) {
      Ru < Eu ? uu.u8(yu | Ru) : null !== Ku && Ru < 256 ? uu.tagged(Ku, 1, Ru) : Ru < 65536 ? uu.tagged(Qu, 2, Ru) : uu.tagged(mu, 4, Ru)
    }

    function DJ(uu, Ru) {
      switch (typeof Ru) {
        case "undefined":
          return void uu.raw(MJ);
        case "boolean":
          return void uu.u8(Ru ? 195 : 194);
        case "number":
          return void
          function(uu, Ru) {
            Ru >>> 0 === Ru ? Ru < 128 ? uu.u8(Ru) : Ru < 256 ? uu.tagged(204, 1, Ru) : Ru < 65536 ? uu.tagged(205, 2, Ru) : uu.tagged(206, 4, Ru) : (Ru | 0) === Ru ? Ru >= -32 ? uu.u8(255 & Ru) : Ru >= -128 ? uu.signed(208, 1, Ru) : Ru >= -32768 ? uu.signed(209, 2, Ru) : uu.signed(210, 4, Ru) : uu.f64(Ru)
          }(uu, Ru);
        case "string": {
          const yu = CJ.encode(Ru);
          return AJ(uu, yu.length, 160, 32, 217, 218, 219), void uu.raw(yu)
        }
        case "object":
          break;
        default:
          return void uu.u8(192)
      }
      if (null === Ru) uu.u8(192);
      else if (Array.isArray(Ru)) {
        AJ(uu, Ru.length, 144, 16, null, 220, 221);
        for (const yu of Ru) DJ(uu, yu)
      } else if (Ru instanceof Uint8Array) AJ(uu, Ru.length, 0, 0, 196, 197, 198), uu.raw(Ru);
      else {
        const yu = Object.keys(Ru);
        AJ(uu, yu.length, 128, 0, null, 222, 223);
        for (const Eu of yu) DJ(uu, Eu), DJ(uu, Ru[Eu])
      }
    }
    const MJ = new Uint8Array([212, 0, 0]);
    var IJ = yu(42141),
      GJ = yu(42145),
      UJ = yu(40603),
      nJ = yu(40621),
      sJ = yu(3514);
    const tJ = [1e3, 3e3, 9e3];
    class lJ {
      constructor(uu) {
        this.host = uu, this.sets = new Map, this.table = [], this.generation = 0, this.VS = !1
      }
      onEvent(uu) {
        const Ru = function(uu) {
          if (uu.byteLength !== Bu.jd) return null;
          const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
          return {
            want: Ru.getUint16(0, !0),
            release: Ru.getUint16(2, !0)
          }
        }(uu);
        Ru && !this.VS && (Ru.release !== Bu.md && this.release(Ru.release), Ru.want !== Bu.md && this.want(Ru.want))
      }
      reset(uu) {
        if (!this.VS) {
          for (const [uu, Ru] of this.sets) "ready" === Ru.state && this.releaseAll(Ru.distinct), this.sets.delete(uu);
          this.table = uu, this.generation++
        }
      }
      dispose() {
        if (this.VS) return;
        this.VS = !0, this.generation++, this.table = [];
        const uu = [...this.sets.values()];
        this.sets.clear();
        let Ru = null;
        for (const Eu of uu)
          for (const uu of "ready" === Eu.state ? Eu.distinct : []) try {
            this.host.SEu(uu)
          } catch (yu) {
            Ru ??= {
              error: yu
            }
          }
        if (Ru) throw Ru.error
      }
      isReady(uu) {
        var Ru;
        return "ready" === (null === (Ru = this.sets.get(uu)) || void 0 === Ru ? void 0 : Ru.state)
      }
      want(uu) {
        const Ru = this.sets.get(uu);
        if ("loading" === (null === Ru || void 0 === Ru ? void 0 : Ru.state)) return Ru.wanted = !0, void this.capAnswer(uu, Ru);
        if ("ready" === (null === Ru || void 0 === Ru ? void 0 : Ru.state)) return void this.host.sendReady(cJ(uu, Ru.images, Ru.size));
        const yu = this.table[uu];
        if (!yu || 1 !== yu.urls.length && yu.urls.length !== Py.Yb.CubeFaces) return this.host.sendReady(LJ(uu)), void this.host.onLoadFailed(uu, "", new Error(`no image set ${uu}`));
        const Eu = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(uu, Eu), this.load(uu, yu, Eu, this.generation, 0), this.capAnswer(uu, Eu)
      }
      capAnswer(uu, Ru) {
        this.host.wait(4e3, (() => {
          this.sets.get(uu) === Ru && Ru.wanted && this.host.sendReady(LJ(uu))
        }))
      }
      load(uu, Ru, yu, Eu, Ku) {
        const Qu = [...new Set(Ru.urls)];
        Promise.allSettled(Qu.map((uu => this.host.loadImage(uu, Ru.orientation)))).then((mu => {
          const Ju = mu.flatMap((uu => "fulfilled" === uu.status ? [uu.value] : [])),
            Nu = Eu === this.generation && this.sets.get(uu) === yu,
            Xu = mu.findIndex((uu => "rejected" === uu.status));
          if (!Nu || !yu.wanted) return this.VS ? void this.releaseAfterDispose(Ju.map(gJ)) : (this.releaseAll(Ju.map(gJ)), void(Nu && this.sets.delete(uu)));
          Xu < 0 ? this.loaded(uu, Ru, Qu, Ju) : (this.releaseAll(Ju.map(gJ)), this.host.sendReady(LJ(uu)), Ku < tJ.length ? this.host.wait(tJ[Ku], (() => {
            Eu === this.generation && this.sets.get(uu) === yu && (yu.wanted ? this.load(uu, Ru, yu, Eu, Ku + 1) : this.sets.delete(uu))
          })) : (this.sets.delete(uu), this.host.onLoadFailed(uu, Qu[Xu], mu[Xu].reason)))
        }))
      }
      loaded(uu, Ru, yu, Eu) {
        const [Ku] = Eu, Qu = [Ku.width, Ku.height], mu = Eu.every((uu => uu.width === Qu[0] && uu.height === Qu[1])), Ju = Ru.urls.length === Py.Yb.CubeFaces;
        if (!mu || Qu[0] <= 0 || Qu[1] <= 0 || Qu[0] > 65535 || Qu[1] > 65535 || Ju && Qu[0] !== Qu[1]) {
          this.releaseAll(Eu.map(gJ)), this.sets.delete(uu), this.host.sendReady(LJ(uu));
          const yu = Eu.map((uu => `${uu.width}x${uu.height}`));
          return void this.host.onLoadFailed(uu, Ru.urls[0], new Error(`set ${uu}'s images can't make its texture: ${yu.join(", ")}`))
        }
        const Nu = Ru.urls.map((uu => Eu[yu.indexOf(uu)].id)),
          Xu = Eu.map(gJ);
        this.sets.set(uu, {
          state: "ready",
          images: Nu,
          distinct: Xu,
          size: Qu
        }), this.host.sendReady(cJ(uu, Nu, Qu))
      }
      release(uu) {
        const Ru = this.sets.get(uu);
        "loading" === (null === Ru || void 0 === Ru ? void 0 : Ru.state) ? Ru.wanted = !1: "ready" === (null === Ru || void 0 === Ru ? void 0 : Ru.state) && (this.releaseAll(Ru.distinct), this.sets.delete(uu))
      }
      releaseAll(uu) {
        for (const Ru of uu) this.host.SEu(Ru)
      }
      releaseAfterDispose(uu) {
        for (const Ru of uu) try {
          this.host.SEu(Ru)
        } catch {}
      }
    }

    function gJ(uu) {
      return uu.id
    }

    function cJ(uu, Ru, yu) {
      const Eu = new Uint8Array(Py.Yb.SkyImagesReadyBytes),
        Ku = new DataView(Eu.buffer);
      return Ku.setUint16(0, uu, !0), Ku.setUint16(2, Ru.length, !0), Ku.setUint16(4, yu[0], !0), Ku.setUint16(6, yu[1], !0), Ru.slice(0, Py.Yb.CubeFaces).forEach(((uu, Ru) => {
        Ku.setUint32(8 + 4 * Ru, uu, !0)
      })), Eu
    }

    function LJ(uu) {
      const Ru = new Uint8Array(Py.Yb.SkyImagesReadyBytes),
        yu = new DataView(Ru.buffer);
      return yu.setUint16(0, uu, !0), yu.setUint16(2, Py.Yb.Failed, !0), Ru
    }
    let zJ = Promise.resolve();
    async function FJ(uu, Ru) {
      let yu;
      try {
        yu = await (0, sJ.E)(uu)
      } catch (Qu) {
        throw new UJ.e("fetch", uu, {
          cause: Qu
        })
      }
      const Eu = zJ.then((() => async function(uu, Ru) {
        const yu = new Blob([uu.slice()]);
        let Eu = await createImageBitmap(yu, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Ru
        });
        const Ku = 1024 / Math.max(Eu.width, Eu.height);
        if (Ku < 1) {
          const uu = Eu;
          try {
            Eu = await createImageBitmap(uu, {
              resizeWidth: Math.max(1, Math.round(uu.width * Ku)),
              resizeHeight: Math.max(1, Math.round(uu.height * Ku)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            uu.close()
          }
        }
        return Eu
      }(yu, Ru)));
      let Ku;
      zJ = Eu.catch((() => {}));
      try {
        Ku = await Eu
      } catch (Qu) {
        throw new UJ.e("decode", uu, {
          cause: Qu
        })
      }
      return {
        id: (0, UJ.l)(Ku),
        width: Ku.width,
        height: Ku.height
      }
    }
    var wJ = yu(2950),
      ZJ = yu(34129);
    const hJ = wJ.h.length;

    function PJ(uu) {
      const Ru = [],
        yu = [];
      wJ.h.forEach(((Eu, Ku) => {
        var Qu;
        const mu = null !== (Qu = iJ(uu[Eu])) && void 0 !== Qu ? Qu : ZJ.m[Eu];
        "custom" === mu.type ? (yu.push({
          id: Ku,
          kind: Py.Yb.KindCustom,
          set: Ru.length,
          earth: null
        }), Ru.push({
          urls: [mu.px, mu.py, mu.pz, mu.nx, mu.ny, mu.nz],
          orientation: "none"
        })) : yu.push({
          id: Ku,
          kind: Py.Yb.KindEarth,
          set: 0,
          earth: mu
        })
      }));
      const Eu = iJ(uu.earth);
      "earth" === (null === Eu || void 0 === Eu ? void 0 : Eu.type) && yu.push({
        id: hJ,
        kind: Py.Yb.KindEarth,
        set: 0,
        earth: Eu
      });
      const Ku = Ru.length;
      Ru.push({
        urls: ZJ.e.map((uu => ZJ.g + uu)),
        orientation: "none"
      }), Ru.push({
        urls: [ZJ.k],
        orientation: "flipY"
      }), Ru.push({
        urls: [ZJ.d],
        orientation: "flipY"
      });
      const Qu = new Uint8Array(Py.Yb.SkyTableHeaderBytes + yu.length * Py.Yb.SkyTableEntryBytes),
        mu = new DataView(Qu.buffer);
      return mu.setUint16(0, Ku, !0), mu.setUint16(2, Ku + 1, !0), mu.setUint16(4, Ku + 2, !0), mu.setUint16(6, yu.length, !0), yu.forEach(((uu, Ru) => {
        const yu = Py.Yb.SkyTableHeaderBytes + Ru * Py.Yb.SkyTableEntryBytes;
        mu.setUint16(yu, uu.id, !0), mu.setUint8(yu + 2, uu.kind);
        const Eu = yu + 4;
        uu.earth ? function(uu, Ru, yu) {
          const Eu = uu;
          let Ku = 0,
            Qu = 0;
          for (const [mu, Ju] of YJ) {
            const uu = Eu[mu];
            "number" === typeof uu && Number.isFinite(uu) && (Ru.setFloat32(yu + 4 * Ju, uu, !0), Ku |= 1 << Ju)
          }
          for (const [mu, Ju, Nu] of oJ) {
            const uu = Eu[mu];
            Array.isArray(uu) && 3 === uu.length && uu.every((uu => "number" === typeof uu && Number.isFinite(uu))) && (uu.forEach(((uu, Eu) => {
              Ru.setFloat32(yu + Nu + 4 * Eu, uu, !0)
            })), Ku |= Ju)
          }
          qJ.forEach(((uu, Qu) => {
            let [mu, Ju] = uu;
            const Nu = Eu[mu];
            "number" === typeof Nu && Number.isFinite(Nu) && (Ru.setFloat32(yu + Py.m.CameraOffsetAt + 4 * Qu, Nu, !0), Ku |= Ju)
          }));
          for (const [mu, Ju] of OJ) {
            const uu = Eu[mu];
            null !== uu && void 0 !== uu && (Ku |= Ju, uu && (Qu |= Ju >>> 14))
          }
          Ru.setUint32(yu + Py.m.PresentAt, Ku, !0), Ru.setUint8(yu + Py.m.FlagsAt, Qu)
        }(uu.earth, mu, Eu) : mu.setUint16(Eu, uu.set, !0)
      })), {
        payload: Qu,
        sets: Ru
      }
    }

    function iJ(uu) {
      if ("object" !== typeof uu || null === uu) return null;
      const Ru = uu;
      if ("earth" === Ru.type) return uu;
      return "custom" === Ru.type && ["px", "py", "pz", "nx", "ny", "nz"].every((uu => {
        const yu = Ru[uu];
        return "string" === typeof yu && yu.length > 0
      })) ? uu : null
    }
    const YJ = [
        ["inclination", Py.m.Inclination],
        ["turbidity", Py.m.Turbidity],
        ["luminance", Py.m.Luminance],
        ["rayleigh", Py.m.Rayleigh],
        ["mieCoefficient", Py.m.MieCoefficient],
        ["mieDirectionalG", Py.m.MieDirectionalG],
        ["distance", Py.m.Distance],
        ["azimuth", Py.m.Azimuth]
      ],
      oJ = [
        ["sunPosition", Py.m.SunPosition, Py.m.SunPositionAt],
        ["up", Py.m.Up, Py.m.UpAt],
        ["vertexTint", Py.m.VertexTint, Py.m.VertexTintAt]
      ],
      qJ = [
        ["xCameraOffset", Py.m.CameraOffsetX],
        ["yCameraOffset", Py.m.CameraOffsetY],
        ["zCameraOffset", Py.m.CameraOffsetZ]
      ],
      OJ = [
        ["useSunPosition", Py.m.UseSunPosition],
        ["dithering", Py.m.Dithering],
        ["infiniteDistance", Py.m.InfiniteDistance]
      ];

    function vJ(uu, Ru, yu) {
      const Eu = new fJ({
        writeCmd: uu,
        warn: Ru,
        followPack: aJ(yu, Ru)
      });
      return Eu.start(), Eu
    }

    function aJ(uu, Ru) {
      return yu => {
        let Eu = () => {};
        const Ku = uu((uu => {
          Eu(), Eu = () => {}, null !== uu ? Eu = uu.subscribe((uu => {
            yu(function(uu, Ru, yu) {
              if ("object" !== typeof uu || null === uu) return null;
              const Eu = uu.skyBoxes;
              if ("object" !== typeof Eu || null === Eu) return null;
              if ("player" === Ru) return Eu;
              return Object.fromEntries(Object.entries(Eu).filter((uu => {
                let [Ru, Eu] = uu;
                return !! function(uu) {
                  if ("object" !== typeof uu || null === uu) return !1;
                  return "earth" === uu.type || Object.entries(uu).every((uu => {
                    let [Ru, yu] = uu;
                    return "type" === Ru || ("" === (Eu = yu) || null !== function(uu) {
                      var Ru, yu, Eu;
                      return "string" !== typeof uu ? null : null !== (Ru = null === (yu = uN.exec(uu)) || void 0 === yu || null === (Eu = yu.groups) || void 0 === Eu ? void 0 : Eu.base64) && void 0 !== Ru ? Ru : null
                    }(Eu));
                    var Eu
                  }))
                }(Eu) || (yu(`Ignoring texture pack skybox ${Ru}, whose faces are not all data URLs`, null), !1)
              })))
            }(uu.pack, null === uu.gameSource ? "player" : "customGame", Ru))
          })) : yu(null)
        }));
        return () => {
          Ku(), Eu()
        }
      }
    }
    class fJ {
      constructor(uu) {
        var Ru, yu, Eu;
        this.host = uu, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.VS = !1, this.wait = null !== (Ru = uu.wait) && void 0 !== Ru ? Ru : (uu, Ru) => {
          setTimeout(Ru, uu)
        }, this.loader = new lJ({
          loadImage: null !== (yu = uu.loadImage) && void 0 !== yu ? yu : FJ,
          SEu: null !== (Eu = uu.SEu) && void 0 !== Eu ? Eu : UJ.o,
          sendReady: uu => {
            this.queue.push({
              kind: Py.Yb.SkyImagesReady,
              payload: uu
            })
          },
          onLoadFailed: (Ru, yu, Eu) => {
            uu.warn(`sky image set ${Ru} (${yu}) didn't load: the last sky stays`, Eu)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(nJ.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((uu => {
          this.write(null !== uu && void 0 !== uu ? uu : {})
        }))
      }
      onEvent(uu) {
        this.loader.onEvent(uu)
      }
      drain() {
        if (0 === this.queue.length) return;
        let uu = 0;
        for (; uu < this.queue.length && this.host.writeCmd(this.queue[uu].kind, 0, this.queue[uu].payload);) uu++;
        uu > 0 && this.queue.splice(0, uu)
      }
      dispose() {
        this.VS = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(uu) {
        if (this.VS) return;
        const Ru = PJ(uu);
        var yu, Eu;
        this.written && (yu = this.written, Eu = Ru, yu.payload.length === Eu.payload.length && yu.payload.every(((uu, Ru) => uu === Eu.payload[Ru])) && yu.sets.length === Eu.sets.length && yu.sets.every(((uu, Ru) => {
          const yu = Eu.sets[Ru];
          return uu.orientation === yu.orientation && uu.urls.length === yu.urls.length && uu.urls.every(((uu, Ru) => uu === yu.urls[Ru]))
        }))) || (this.written = Ru, this.loader.reset(Ru.sets), this.queue = this.queue.filter((uu => uu.kind !== Py.Yb.SkyImagesReady)), this.queue.push({
          kind: Py.Yb.SkyTable,
          payload: Ru.payload
        }))
      }
    }
    const uN = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var RN = yu(2687),
      yN = yu(2772),
      EN = yu(317),
      KN = yu(194),
      QN = yu(2691),
      mN = yu(2697),
      JN = yu(288),
      NN = yu(293),
      XN = yu(2712),
      VN = yu(2724),
      rN = yu(2737),
      BN = yu(125),
      xN = yu(305),
      SN = yu(40403);
    class pN {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, gK.m)(TE.O, (uu => {
          this.onReply((0, lK.f)(TE.O, uu), performance.now())
        }))
      }
      onFrame(uu, Ru) {
        null === this.id ? this.id = uu : uu !== this.id && (this.id = uu, this.sentMs = document.hidden ? null : Ru)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(uu, Ru) {
        uu === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Ru - this.sentMs), this.sentMs = null)
      }
      take() {
        const uu = this.roundTripMs;
        return this.roundTripMs = null, uu
      }
      stop() {
        this.stopReplies()
      }
    }
    class TN {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(uu, Ru, yu, Eu) {
        const Ku = uu - this.sampled >>> 0,
          Qu = Ru - this.timed >>> 0,
          mu = yu - this.frameUs >>> 0,
          Ju = this.primed;
        return this.sampled = uu, this.timed = Ru, this.frameUs = yu, this.primed = !0, !(!Ju || Ku > 64 || Qu > 64) && (Eu && mu <= 1e6 * Qu && (this.windowTimed += Qu, this.windowUs += mu), Eu && Ku > 0)
      }
      reset() {}
      snapshotAndReset() {
        const uu = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: uu,
          submitToDoneMs: null
        }
      }
    }
    const WN = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class jN {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(uu, Ru) {
        const yu = Math.min(4096, this.count + Ru);
        this.samples.fill(uu, this.count, yu), this.count = yu
      }
      clear() {
        this.count = 0
      }
      take(uu) {
        const Ru = this.count;
        if (this.count = 0, Ru < 30) return null;
        const yu = this.samples.subarray(0, Ru).sort();
        return uu.map((uu => yu[Math.min(Ru - 1, Math.floor(uu * Ru))]))
      }
    }
    class HN {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new jN, this.inJoin = !1, this.rose = !1, this.joinLags = new jN, this.joinLagP90Ms = null
      }
      onFrame(uu, Ru, yu, Eu, Ku) {
        const Qu = uu.headerWord(Py.E.Pacing),
          mu = uu.headerWord(Py.E.PacingLagUs),
          Ju = (Qu >>> Py.Q.LagsShift) - (this.word >>> Py.Q.LagsShift) & Py.Q.CountMask,
          Nu = (Qu >>> Py.Q.SwitchesShift) - (this.word >>> Py.Q.SwitchesShift) & Py.Q.CountMask,
          Xu = Ju > 0 ? (mu - this.lagUs >>> 0) / Ju / 1e3 : 0,
          Vu = this.primed && Ju <= 64 && Nu <= 2 && Xu <= 6e4;
        if (this.rose = 0 !== (Qu & ~this.word & Py.Q.Joining), this.word = Qu, this.lagUs = mu, this.primed = !0, 0 !== (Qu & Py.Q.Tiered)) {
          if (0 !== (Qu & Py.Q.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && Vu && Eu && Ju > 0 && this.joinLags.add(Xu, Ju);
          else if (this.inJoin) {
            var ru, Bu;
            this.inJoin = !1, this.joinLagP90Ms = null !== (ru = null === (Bu = this.joinLags.take([.9])) || void 0 === Bu ? void 0 : Bu[0]) && void 0 !== ru ? ru : null
          }
          if (Ku) {
            if (Vu && (this.switches += Nu, Ju > 0 && this.lags.add(Xu, Ju)), yu) {
              if (this.lastDrawnMs >= 0 && Ru - this.lastDrawnMs <= 250) {
                const uu = Ru - this.lastDrawnMs;
                this.tieredMs += uu, (Qu & Py.Q.AheadMask) > 0 && (this.pacedMs += uu)
              }
              this.lastDrawnMs = Ru
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(uu) {
        const Ru = this.takeWindow(),
          yu = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, uu ? {
          ...Ru,
          joinLagP90Ms: yu
        } : {
          ...WN,
          joinLagP90Ms: yu
        }
      }
      unsent(uu) {
        this.joinLagP90Ms ??= uu.joinLagP90Ms
      }
      takeWindow() {
        var uu, Ru;
        const yu = this.tieredMs >= 2e3,
          Eu = this.lags.take([.5, .9]),
          Ku = {
            pacedShare: yu ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: yu ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu[0]) && void 0 !== uu ? uu : null,
            lagP90Ms: null !== (Ru = null === Eu || void 0 === Eu ? void 0 : Eu[1]) && void 0 !== Ru ? Ru : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Ku
      }
    }
    var dN = yu(8977),
      bN = yu(2662),
      CN = yu(40470),
      kN = yu(8973),
      eN = yu(2699),
      AN = yu(2679);
    const DN = {
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

    function MN(uu) {
      return new IN(uu)
    }
    class IN {
      constructor(uu) {
        this.shell = uu, this.tracker = new mN.b, this.gpu = new TN, this.pacing = new HN, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new pN, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, dN.d)(uu.backend, uu.canvas, uu.adapterVendor), this.tracker.start((() => !uu.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, eN.d)("wasm", (() => {
          const {
            n: Ru,
            sampleCount: yu
          } = (0, CN.f)();
          return `${uu.backend}, quality steps aim at up to ${AN.c.target.maxFps} fps, pixel n ${Ru}, msaa ${yu}`
        }), (uu => {
          this.frameDebug = uu
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(uu) {
        var Ru;
        this.tracker.onAnimationFrame(uu), null === (Ru = this.frameDebug) || void 0 === Ru || Ru.animationFrame()
      }
      frameRan(uu, Ru, yu, Eu) {
        var Ku;
        this.ping.onFrame(uu.headerWord(Py.E.PingSent), yu);
        const Qu = this.tracker;
        this.pacing.onFrame(uu, Ru, "drawn" === Eu, !document.hidden, Qu.isSampling());
        const mu = uu.headerWord(Py.E.TickUs) / 1e3 + (0, RE.J)();
        Qu.vW(mu), null === (Ku = this.frameDebug) || void 0 === Ku || Ku.wasmFrame(uu, Ru, yu, "drawn" === Eu, Qu.isSampling(), mu, (0, kN.g)());
        const Ju = Math.max(0, yu - Ru - mu);
        if ("drawn" !== Eu) return void("paced" === Eu && (this.pacedCpuMs += Ju));
        this.followGame(), Qu.onFrameStart(Ru);
        this.gpu.onFrame(uu.headerWord(Py.E.GpuSampled), uu.headerWord(Py.E.GpuTimed), uu.headerWord(Py.E.GpuFrameUs), Qu.isSampling()) && Qu.onGpuSampleStarted(), Qu.onFrameCpu(Ju + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Ru)
      }
      stop() {
        for (const uu of this.timers) clearInterval(uu);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const uu = this.shell.joinedGame();
        return uu !== this.game && (this.game = uu, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== uu
      }
      countFpsFrame(uu) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = uu
        }
        this.fpsFrames++;
        const Ru = uu - this.fpsSpanStartMs;
        if (!(Ru < rN.e)) {
          if (!document.hidden) {
            const uu = 1e3 * this.fpsFrames / Ru;
            this.firstSpanFps ??= uu, this.initialFps = this.firstSpanFps, this.fpsOverTime = uu
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = uu
        }
      }
      flush() {
        const uu = this.followGame(),
          {
            cpuFrameMs: Ru,
            refreshHz: yu,
            cpuBottleneck: Ku,
            frameIntervalCv: Qu,
            ...mu
          } = this.tracker.snapshotAndReset(),
          Ju = this.shell.inGame(),
          Nu = Ju && this.inGameAtLastFlush,
          Xu = Nu ? mu : QN.d,
          Vu = this.pacing.snapshotAndReset(Nu);
        if (this.inGameAtLastFlush = Ju, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !uu) return void this.pacing.unsent(Vu);
        const ru = performance.now(),
          xu = (0, VN.l)((0, VN.k)(ru), this.unsentPage),
          pu = function(uu, Ru, yu, Ku, Qu, mu, Ju, Nu) {
            var Xu, Vu, ru, Bu;
            const xu = {},
              {
                canvas: Su
              } = uu,
              pu = (0, XN.b)({
                refreshHz: Ru.refreshHz,
                msaa: uu.msaa(),
                autoMsaaOff: (0, kN.c)()
              });
            for (const Tu of (0, yN.f)()) {
              const Wu = Tu.name;
              let ju;
              if ((0, EN.s)(Wu)) ju = (0, VN.c)(Wu);
              else if ((0, VN.f)(Wu)) ju = Nu[Wu];
              else if ((0, XN.f)(Wu)) ju = pu[Wu];
              else switch (Wu) {
                case "fps":
                  ju = Ku;
                  break;
                case "DJ":
                  ju = Qu;
                  break;
                case "nJ":
                  ju = (0, bN.x)((0, CN.f)().n);
                  break;
                case "sJ":
                  ju = Math.max(Su.width, Su.height);
                  break;
                case "tJ":
                  ju = Math.min(Su.width, Su.height);
                  break;
                case "lJ":
                  ju = navigator.hardwareConcurrency || null;
                  break;
                case "gJ":
                  ju = (0, ZK.getWebGpuSupported)();
                  break;
                case "cJ":
                  ju = null === uu.fallbackReason ? null : DN[uu.fallbackReason];
                  break;
                case "LJ":
                  ju = Ru.cpuFrameMs;
                  break;
                case "zJ":
                  ju = Ru.refreshHz;
                  break;
                case "FJ":
                  ju = Ru.cpuBottleneck;
                  break;
                case "wJ":
                  ju = Ru.frameIntervalCv;
                  break;
                case "ZJ":
                  ju = Ru.frameMs;
                  break;
                case "hJ":
                  ju = Ru.tickMs;
                  break;
                case "oJ":
                  ju = Ru.mainBusyShare;
                  break;
                case "qJ":
                  ju = Ru.mainProbeDelayMs;
                  break;
                case "PJ":
                  ju = Ru.longAnimationFramesPerMin;
                  break;
                case "iJ":
                  ju = Ru.longAnimationFrameTimeShare;
                  break;
                case "YJ":
                  ju = Ru.longAnimationFrameScriptShare;
                  break;
                case "OJ":
                  ju = Ru.gpuPassMs;
                  break;
                case "vJ":
                  ju = Ru.gpuSubmitToDoneMs;
                  break;
                case "aJ":
                  ju = yu.pacedShare;
                  break;
                case "fJ":
                  ju = yu.switchesPerHour;
                  break;
                case "uN":
                  ju = yu.lagP50Ms;
                  break;
                case "RN":
                  ju = yu.lagP90Ms;
                  break;
                case "yN":
                  ju = yu.joinLagP90Ms;
                  break;
                case "SN":
                  ju = (0, RN.i)(mu);
                  break;
                case "UJ":
                  ju = Ju;
                  break;
                case "EN":
                case "KN":
                case "QN":
                case "mN":
                case "JN":
                case "NN":
                case "XN":
                case "VN":
                case "rN":
                case "BN":
                case "xN":
                case "pN":
                case "TN":
                case "WN":
                case "jN":
                  ju = null;
                  break;
                case "tN":
                  ju = (0, ZK.getPlatformType)();
                  break;
                case "lN":
                  ju = (0, ZK.getGpuVendor)();
                  break;
                case "gN":
                  ju = SN.b[uu.backend];
                  break;
                case "cN":
                  ju = (0, BN.c)();
                  break;
                case "LN":
                  ju = (0, ZK.getOperatingSystem)();
                  break;
                case "zN":
                  ju = (0, ZK.getTrafficSource)();
                  break;
                case "FN":
                  ju = null !== (Xu = Eu.d.get("gameEntrySource")) && void 0 !== Xu ? Xu : KN.g;
                  break;
                case "wN":
                  ju = Ru.frameLimiter;
                  break;
                case "ZN":
                  ju = (0, JN.h)();
                  break;
                case "hN":
                  ju = null !== (Vu = (0, NN.c)()) && void 0 !== Vu ? Vu : KN.g;
                  break;
                case "PN":
                  ju = (0, JN.b)(Su.width, Su.height);
                  break;
                case "iN":
                  ju = (0, yN.j)(-(new Date).getTimezoneOffset());
                  break;
                case "qN":
                  ju = null !== (ru = uu.fallbackReason) && void 0 !== ru ? ru : KN.g;
                  break;
                case "aN":
                  ju = "ready";
                  break;
                case "fN":
                  ju = (0, ZK.getSoftwareRenderer)();
                  break;
                case "oN":
                  ju = null !== uu.shaderPackReach() ? "true" : "false";
                  break;
                case "uX":
                  ju = null !== (Bu = uu.shaderPackReach()) && void 0 !== Bu && Bu.sceneDepth ? "true" : "false";
                  break;
                case "RX": {
                  const Ru = uu.shaderPackReach();
                  ju = null !== Ru && void 0 !== Ru && Ru.sunShadow ? "all" : null !== Ru && void 0 !== Ru && Ru.airShadow ? "air" : "none";
                  break
                }
                case "yX":
                  ju = xN.u;
                  break;
                case "YN":
                case "ON":
                case "vN":
                  ju = KN.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Wu}`)
              }
              if (void 0 === ju) throw new Error(`Metric ${Wu} has no value`);
              xu[Wu] = ju
            }
            return xu
          }(this.shell, {
            cpuFrameMs: Ru,
            refreshHz: yu,
            cpuBottleneck: Ku,
            frameIntervalCv: Qu,
            ...Xu
          }, Vu, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), xu);
        if (! function(uu, Ru, yu) {
            return (0, ZR.e)(), uu(Su.p.Send, Ru, yu)
          }(this.shell.writeCmd, Bu.fd, function(uu) {
            const Ru = (0, gu.g)((0, iR.e)(uu)),
              yu = new Uint8Array(Su.de.BYTES + Ru.length);
            return new DataView(yu.buffer).setUint16(0, iR.d.AnalyticsUpdate, !0), yu.set(Ru, Su.de.BYTES), yu
          }(pu))) return this.unsentPage = xu, this.pacing.unsent(Vu), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, RN.e), (0, VN.i)(pu, "wasm", ru)
      }
    }
    var GN = yu(39315);

    function UN(uu, Ru, yu) {
      const Eu = new Map;
      return (0, GN.c)(((uu, yu, Eu) => Ru.yV(uu, yu, Eu)), ((Ru, yu, Ku) => {
        const Qu = `${Ru},${yu},${Ku}`;
        return Eu.has(Qu) || Eu.set(Qu, (0, gR.b)(uu, Ru, yu, Ku)), Eu.get(Qu)
      }), yu)
    }
    var nN = yu(39323),
      sN = yu(40286);

    function tN(uu) {
      const Ru = null !== uu && 0 !== (Su.v.playerFlags(uu.api.apiView, 0) & Su.Nd.CursorAim);
      Ru !== (0, sN.j)() && (0, sN.F)(Ru, null !== uu)
    }

    function lN(uu) {
      return (0, pE.d)(TE.I, uu)
    }
    const gN = new Qu.e((uu => yu(42153)(`./${uu}/${uu}Client`)));
    let cN = null,
      LN = null;
    async function zN(uu) {
      cN ??= yu.e(27).then((() => yu(38884))).then((uu => {
        LN = uu.createDefaultClientPlugins
      }), (uu => {
        throw cN = null, uu
      })), await Promise.all([gN.load(uu), cN])
    }

    function FN(uu) {
      uu.load(new tR(FE, new hE))
    }
    let wN = !1;
    const ZN = new WeakMap;

    function hN(uu) {
      try {
        uu()
      } catch (Ru) {
        console.error("[bloxd-wasm-client] a session-end step failed", Ru)
      }
    }

    function PN(uu, Ru) {
      ! function() {
        var uu, Ru;
        LE.Howler.volume();
        const yu = LE.Howler;
        null === (uu = yu._autoResume) || void 0 === uu || uu.call(yu), null === (Ru = yu._autoSuspend) || void 0 === Ru || Ru.call(yu)
      }(), Ru.audio.prepare();
      const yu = new du(Ru.core, Ru.memory, Ru.audio);
      let Qu;
      try {
        Qu = new rK(yu, Ru.options)
      } catch (Bu) {
        return uu.crash(xK.t, Bu), null
      }(0, Nu.i)(BK(yu, Qu));
      const Vu = new HJ({
        running: uu,
        api: yu,
        core: Ru.core,
        memory: Ru.memory,
        staleOr: Ru.staleOr,
        reportFault: Ru.reportReplayFault,
        options: Ru.options,
        sessionInfo: Ru.sessionInfo,
        replayShaderPack: Ru.replayShaderPack
      });
      (0, RE.D)();
      const ru = new sE({
        api: yu,
        tables: Qu,
        sessionInfo: Ru.sessionInfo,
        gameFactory: uu => gN.loadedFactory(uu),
        defaultPlugins: (uu, Ru, yu, Eu) => {
          if (null === LN) throw new Error("The default plugins started before they loaded");
          return LN(uu, Ru, yu, Eu)
        },
        serverOptions: Ru.options,
        onNetEvent: uu => {
          Vu.netEvent(uu), Ru.onNetEvent(uu)
        },
        setLocalOptions: Ru => {
          bJ(uu, {
            changes: Ru,
            reset: !1
          })
        },
        playSound: (uu, yu, Eu, Ku, Qu, mu, Ju) => Ru.audio.playGame(uu, yu, Eu, Ku, Qu, mu, Ju),
        onSessionEnd: () => {
          hN(Ku.n), hN(vE), hN((() => {
            Eu.d.set({
              openInGameMenuName: null
            })
          })), hN((() => {
            Ru.audio.cancelPreload()
          }))
        },
        beforeWrite: Ru.beforeWrite,
        beforeOp: Ru.beforeOp,
        cameraScreen: OE,
        showCameraFacing: aE,
        onEventOverflow: Ru.onEventOverflow,
        screenBandY: Ju.l,
        replayEntities: Vu.entityHooks,
        hasPackModel: Ru.hasPackModel
      });
      return ru.attach(uu), ZN.set(ru, Vu), cE(ru.items, Ru.audio),
        function(uu) {
          uu.setClientFreeCameraGrant("isDev", !1);
          const Ru = Ru => {
            uu.setClientFreeCameraGrant("hasDeveloperRank", Ru.playerHasRank("developer"))
          };
          (0, mu.n)("userContextUpdated", Ru)
        }(ru), wN || (wN = !0, (0, mu.n)("appManagerUpdated|openInGameMenuName", (uu => {
          !uu && (0, Xu.k)().includes(Xu.b) && (0, Xu.m)(Xu.b)
        }))), ru
    }

    function iN(uu) {
      try {
        uu.closeGame()
      } finally {
        var Ru;
        null === (Ru = ZN.get(uu)) || void 0 === Ru || Ru.stop(), ZN.delete(uu)
      }
    }
  },
  40403: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40410: (uu, Ru, yu) => {
    function Eu() {
      return yu(40412)
    }

    function Ku() {
      return yu(40416)
    }

    function Qu(uu) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(uu)
    }
    yu.d(Ru, {
      c: () => Qu,
      g: () => Eu,
      i: () => Ku
    })
  },
  36176: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      g: () => Qu,
      k: () => Nu
    });
    var Eu = yu(36170);
    const Ku = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Qu(uu) {
      if (uu instanceof WebAssembly.RuntimeError) return !0;
      const Ru = uu instanceof Error ? uu.stack : void 0;
      return "string" === typeof Ru && Ku.test(Ru)
    }

    function mu(uu, Ru, yu) {
      var Qu;
      const mu = uu instanceof Error ? uu.name : "thrown",
        Ju = (uu instanceof Error && null !== (Qu = uu.stack) && void 0 !== Qu ? Qu : "").split("\n").filter((uu => Ku.test(uu))).slice(0, 8).map((uu => uu.trim())),
        Nu = null === Ru ? "wasm memory unknown" : `wasm memory ${Math.round(Ru/2**20)} MB`,
        Xu = null === yu.panic ? "" : `, panic: ${(0,Eu.i)(yu.panic)}`,
        Vu = `${mu}: ${uu instanceof Error?uu.message:String(uu)}`;
      return `${(0,Eu.o)(yu.kind,yu.refusedBytes)} ${Vu} (${Nu})${Xu}${Ju.length>0?` | ${Ju.join(" < ")}`:""}`
    }
    const Ju = 500;

    function Nu(uu) {
      let Ru = "[object Object]";
      try {
        Ru = String(uu)
      } catch {}
      if ("[object Object]" !== Ru) return Ru;
      try {
        var yu, Eu;
        return null !== (yu = null === (Eu = JSON.stringify(uu)) || void 0 === Eu ? void 0 : Eu.slice(0, Ju)) && void 0 !== yu ? yu : Ru
      } catch {
        return Ru
      }
    }
  },
  42153: (uu, Ru, yu) => {
    var Eu = {
      "./bedwars/bedwarsClient": [39010, 9],
      "./bridgeBattle/bridgeBattleClient": [39012, 10],
      "./buildAFactory2/buildAFactory2Client": [38256, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [39018, 12],
      "./clutch/clutchClient": [39020, 13],
      "./containmentBreach/containmentBreachClient": [39028, 14],
      "./cooking/cookingClient": [39135, 15],
      "./defusal/defusalClient": [39139, 16],
      "./frontline/frontlineClient": [39143, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [39152, 18],
      "./luckyBedwars/luckyBedwarsClient": [39156, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39164, 20],
      "./oneBlock/oneBlockClient": [39168, 21],
      "./plots/plotsClient": [39175, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [39245, 23],
      "./skyIslands/skyIslandsClient": [39254, 24],
      "./skyblock/skyblockClient": [38290, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [39261, 26]
    };

    function Ku(uu) {
      if (!yu.o(Eu, uu)) return Promise.resolve().then((() => {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }));
      var Ru = Eu[uu],
        Ku = Ru[0];
      return Promise.all(Ru.slice(1).map(yu.e)).then((() => yu(Ku)))
    }
    Ku.keys = () => Object.keys(Eu), Ku.id = 42153, uu.exports = Ku
  },
  40412: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40416: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36170: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      g: () => Qu,
      i: () => Nu,
      m: () => mu,
      o: () => Ku
    });
    const Eu = /^alloc_failed (\d+) bytes$/;

    function Ku(uu, Ru) {
      return Qu(uu, Ru) ? `trap=alloc_failed ${Ru} bytes` : `trap=${uu}`
    }

    function Qu(uu, Ru) {
      return "unreachable" === uu && Ru > 0
    }

    function mu(uu, Ru, yu) {
      const Eu = function(uu) {
        return uu instanceof WebAssembly.RuntimeError ? /unreachable/i.test(uu.message) ? "unreachable" : /out of bounds/i.test(uu.message) ? "out_of_bounds" : "runtime_error" : (uu instanceof RangeError || uu instanceof Error && "InternalError" === uu.name) && /call stack|recursion/i.test(uu.message) ? "stack_overflow" : "js_error"
      }(uu);
      if ("unreachable" !== Eu) return {
        kind: Eu,
        panic: null,
        refusedBytes: 0
      };
      const Ku = Ru(),
        Qu = yu();
      return {
        kind: Eu,
        panic: Qu > 0 ? null : Ku,
        refusedBytes: Qu
      }
    }
    const Ju = 300;

    function Nu(uu) {
      return uu.replace(/\s*\n\s*/g, " / ").slice(0, Ju)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);