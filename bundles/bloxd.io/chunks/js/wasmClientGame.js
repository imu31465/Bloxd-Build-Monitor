export const id = 54;
export const ids = [54];
export const modules = {
  39141: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      d: () => Nd
    });
    var pd = kd(29);

    function Nd(dd) {
      return "refetchCode" === dd || "devDownloadJson" === dd || dd.startsWith("Plugin")
    }

    function Wd(dd, Jd) {
      "refetchCode" !== dd ? "Plugin|MobAiPlugin|ShowPetUi" !== dd ? Promise.all([kd.e(106), kd.e(107), kd.e(102), kd.e(104), kd.e(211)]).then((() => kd(41700))).then((kd => {
        let {
          runClientGameMessage: pd
        } = kd;
        pd(dd, Jd)
      })).catch((Jd => {
        console.error(`Game message ${dd} failed`, Jd)
      })) : pd.j.nO("showPetUi", Jd) : pd.j.nO("refetchCode")
    }
  },
  42497: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd,
      f: () => Nd
    });
    const pd = ["recording", "freecam", "keyframe"];

    function Nd() {
      const dd = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(dd[1]) << 32n | BigInt(dd[0])
    }
  },
  40785: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd
    });
    const pd = 1 << 20,
      Nd = 1 << 21,
      Wd = 1024,
      Pd = 2048;

    function Zd(dd, Jd, kd) {
      const Zd = dd + pd,
        gd = Jd + Wd,
        Cd = kd + pd;
      return Zd < 0 || Zd >= Nd || Cd < 0 || Cd >= Nd || gd < 0 || gd >= Pd ? -1 : (Zd * Nd + Cd) * Pd + gd
    }
  },
  40781: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      g: () => Pd,
      h: () => Nd,
      l: () => Wd,
      m: () => Kd,
      n: () => Cd,
      q: () => gd,
      u: () => Zd
    });
    kd(3291);
    kd(40785);

    function pd(dd) {}

    function Nd(dd) {}

    function Wd(dd) {}

    function Pd(dd) {}

    function Zd(dd) {}

    function gd(dd, Jd, kd) {}

    function Cd(dd) {}

    function Kd(dd) {}
  },
  9153: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      e: () => gd
    });
    var pd = kd(22);
    const Nd = 24,
      Wd = "farNametags",
      Pd = 1e5;

    function Zd() {
      var dd;
      return null === (dd = pd.d.get("showDistantNametags")) || void 0 === dd || dd
    }

    function gd() {
      var dd;
      return null !== (dd = function() {
        const dd = new URLSearchParams(window.location.search).get(Wd),
          Jd = null === dd || "" === dd ? NaN : Number(dd);
        return Number.isFinite(Jd) && Jd >= 0 ? Math.min(Jd, Pd) : null
      }()) && void 0 !== dd ? dd : Zd() ? 0 : Nd
    }
  },
  42489: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      blockIdOf: () => yg.c,
      clearWasmCameraScreen: () => NN,
      creativeItemIds: () => Np.creativeItemIds,
      decodeMapSettings: () => Eg,
      drainTextRerasters: () => fZ.c,
      enchantmentPerksOf: () => Np.enchantmentPerksOf,
      endGameHost: () => dC,
      followCursorAim: () => Tg,
      followMenuPrefs: () => dW,
      loadAudio: () => Vg,
      loadClientGame: () => tg,
      loadTextIcons: () => fZ.f,
      rasterText: () => XZ.b,
      readBoardToEdit: () => Ug,
      readDrawCensus: () => cg.h,
      setTextHost: () => fZ.k,
      setTextLocalPlayer: () => fZ.o,
      showInCreativeInvenOf: () => Np.showInCreativeInvenOf,
      startGameHost: () => Ag,
      startShellAnalytics: () => Xg,
      startSkyFeed: () => Ng,
      textChanged: () => fZ.u,
      warmText: () => XZ.d,
      wasmCameraScreen: () => pN
    });
    kd(36671);
    var pd = kd(22),
      Nd = kd(36991),
      Wd = kd(39292),
      Pd = kd(29),
      Zd = kd(3240),
      gd = kd(36987),
      Cd = kd(1307),
      Kd = kd(597),
      od = kd(38401),
      ld = kd(4680),
      Qd = kd(40629),
      Ld = kd(40569);
    const Od = Ld.Lb / 4,
      ed = Ld.o.PlaySound,
      Rd = Ld.o.SoundReset,
      Id = ld.X.ReplayFailed,
      Gd = ld.X.RecorderEvent;
    class vd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = dd, this.memory = Jd, this.audio = kd, this.serverIds = new Int32Array(256).fill(Ld.gd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Ld.u.BYTES)), this.renderPtr = 0, this.oo = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new Ld.X(dd, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.YNd(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(dd, Jd) {
        const kd = this.eventView();
        return new Uint8Array(kd.buffer, kd.byteOffset + dd, Jd)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Ld.u.localId(this.apiView, 0)
      }
      localDeaths() {
        return Ld.u.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const dd = this.apiView,
          Jd = Ld.u.entRenderPtr(dd, 0),
          kd = Ld.u.entVisPtr(dd, 0),
          pd = Ld.u.entCapacity(dd, 0);
        if (Jd !== this.renderPtr || kd !== this.visPtr || pd !== this.oo || this.renderBuffer !== this.buffer) {
          this.renderPtr = Jd, this.visPtr = kd, this.oo = pd, this.renderBuffer = this.buffer;
          const dd = this.memoryView(Float32Array, Jd, pd * Od, "the render array"),
            Nd = this.memoryView(Uint8Array, kd, pd, "the visibility array");
          this.renderCapacity = dd && Nd ? pd : 0, this.render = dd && Nd ? dd : new Float32Array(0), this.vis = dd && Nd ? Nd : new Uint8Array(0)
        }
      }
      memoryView(dd, Jd, kd, pd) {
        try {
          return (0, Qd.t)(dd, this.memory().buffer, Jd, kd, pd)
        } catch (Nd) {
          return this.keepCorruption(Nd), null
        }
      }
      memoryData(dd, Jd, kd, pd) {
        try {
          return (0, Qd.f)(this.memory().buffer, dd, Jd, kd, pd)
        } catch (Nd) {
          return this.keepCorruption(Nd), null
        }
      }
      reportCorruption(dd) {
        this.keepCorruption(new Qd.e(dd))
      }
      keepCorruption(dd) {
        if (!(dd instanceof Qd.e)) throw dd;
        this.corruption ??= dd
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(dd, Jd, kd) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: pd,
          len: Nd
        } = dd;
        this.eventsPtr = pd, this.eventsLen = Nd, this.eventsBuffer = null;
        const Wd = this.eventView();
        for (let Cd = 0; Cd < Nd;) {
          const dd = Wd.getUint32(Cd, !0),
            kd = 65535 & dd,
            pd = dd >>> 16,
            Nd = Cd + ld.U;
          if (kd === Ld.o.EntitySpawned) {
            var Pd;
            if (pd !== Ld.Pb.BYTES) throw ad(kd, Cd, pd);
            const dd = Ld.Pb.serverId(Wd, Nd);
            this.spawned(dd, Ld.Pb.index(Wd, Nd), Ld.Pb.kind(Wd, Nd)), null === (Pd = Jd.entityAdded) || void 0 === Pd || Pd.call(Jd, dd)
          } else if ((kd === Ld.o.ChunkSlot || kd === Ld.o.EntityInfoChanged) && !(0, Ld.xe)(kd, Wd, Nd, pd, Jd)) throw ad(kd, Cd, pd);
          Cd = Nd + (0, ld.xe)(pd)
        }
        try {
          var Zd;
          null === (Zd = Jd.afterPrescan) || void 0 === Zd || Zd.call(Jd), this.throwCorruption(), !kd() && this.dispatch(dd, Jd, kd) && (this.throwCorruption(), this.applyListener(), Jd.afterWalk(dd.kind)), this.throwCorruption()
        } catch (gd) {
          throw gd instanceof Qd.e && (this.corruption ??= gd), gd
        } finally {
          kd() || null !== this.corruption || this.applyDespawns(Nd, Jd)
        }
      }
      applyDespawns(dd, Jd) {
        const kd = this.eventView();
        for (let Nd = 0; Nd < dd;) {
          const dd = kd.getUint32(Nd, !0),
            Wd = Nd + ld.U;
          if ((65535 & dd) === Ld.o.EntityDespawned && dd >>> 16 === Ld.Pb.BYTES) {
            const dd = Ld.Pb.serverId(kd, Wd);
            var pd;
            if (this.despawned(dd, Ld.Pb.index(kd, Wd))) null === (pd = Jd.entityRemoved) || void 0 === pd || pd.call(Jd, dd)
          }
          Nd = Wd + (0, ld.xe)(dd >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(dd, Jd, kd) {
        const {
          len: pd,
          net: Nd,
          netOffsets: Wd
        } = dd;
        let Pd = this.eventView(),
          Zd = 0;
        for (let qd = 0; qd < pd;) {
          const dd = Pd.getUint32(qd, !0),
            pd = 65535 & dd,
            Bd = dd >>> 16,
            Md = qd + ld.U;
          let Fd = !1;
          if (Zd < Nd.length && Wd[Zd] === qd) Jd.netEvent(Nd[Zd]), Zd++, Fd = !0;
          else if (pd === ld.X.LocalPlayerBound) {
            var gd;
            if (Bd !== ld.Eb) throw ad(pd, qd, Bd);
            null === (gd = Jd.localPlayerBound) || void 0 === gd || gd.call(Jd, Pd.getInt32(Md, !0)), Fd = !0
          } else if (pd === ld.X.LocalHurt) {
            var Cd;
            if (Bd !== ld.Ab) throw ad(pd, qd, Bd);
            null === (Cd = Jd.localHurt) || void 0 === Cd || Cd.call(Jd, Pd.getInt32(Md, !0), Pd.getFloat32(Md + 4, !0), Pd.getUint32(Md + 8, !0)), Fd = !0
          } else if (pd === ld.X.AttackHit) {
            var Kd;
            if (Bd !== ld.b) throw ad(pd, qd, Bd);
            const dd = Pd.getFloat32(Md, !0),
              kd = Pd.getFloat32(Md + 4, !0),
              Nd = Pd.getFloat32(Md + 8, !0),
              Wd = Pd.getUint32(Md + 12, !0);
            null === (Kd = Jd.attackHit) || void 0 === Kd || Kd.call(Jd, dd, kd, Nd, 0 !== (Wd & ld.h.Crit), 0 !== (Wd & ld.h.HitSelf))
          } else if (pd === ld.X.PhysicsType) {
            var od;
            if (Bd !== ld.cc) throw ad(pd, qd, Bd);
            null === (od = Jd.physicsType) || void 0 === od || od.call(Jd, Pd.getUint32(Md, !0), Pd.getInt32(Md + 4, !0)), Fd = !0
          } else if (pd === ld.X.VehicleEffect) {
            var Qd;
            const dd = sd(Pd, Md, Bd);
            if (null === dd) throw ad(pd, qd, Bd);
            null === (Qd = Jd.vehicleEffect) || void 0 === Qd || Qd.call(Jd, dd.op, dd.name, dd.icon, dd.level, dd.durationMs), Fd = !0
          } else if (pd === ld.X.ZoomChanged) {
            var Od;
            if (Bd !== ld.ge) throw ad(pd, qd, Bd);
            null === (Od = Jd.zoomChanged) || void 0 === Od || Od.call(Jd, Pd.getFloat32(Md, !0), Pd.getUint8(Md + 4)), Fd = !0
          } else if (pd === ld.X.ZoomDisabled) {
            var vd;
            if (0 !== Bd) throw ad(pd, qd, Bd);
            null === (vd = Jd.zoomDisabled) || void 0 === vd || vd.call(Jd), Fd = !0
          } else if (pd === ld.X.GameCamera) {
            var xd;
            null === (xd = Jd.gameCamera) || void 0 === xd || xd.call(Jd, new Uint8Array(Pd.buffer, Pd.byteOffset + Md, Bd).slice()), Fd = !0
          } else if (pd === Ld.o.ChunkSlot || pd === Ld.o.EntityInfoChanged);
          else if (pd >= ed && pd <= Rd) {
            if (this.audio && !this.audio.onAudioEvent(pd, Pd, Md, Bd)) throw ad(pd, qd, Bd)
          } else if (pd >= Id && pd <= Gd) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(pd, Pd, Md, Bd)) throw ad(pd, qd, Bd);
              Fd = !0
            }
          } else if (pd >= Ld.zd && pd <= Ld.Bd && pd !== ld.X.EnvLighting) {
            if (!(0, Ld.xe)(pd, Pd, Md, Bd, Jd)) throw ad(pd, qd, Bd);
            Fd = !0
          }
          if (Fd) {
            if (kd()) return !1;
            Pd = this.eventView()
          }
          qd = Md + (0, ld.xe)(Bd)
        }
        return !kd()
      }
      applyListener() {
        var dd;
        if (!this.audio) return;
        const Jd = Ld.u.audioViewPtr(this.apiView, 0),
          kd = this.memory().buffer;
        let pd = this.audioView;
        (null === (dd = pd) || void 0 === dd ? void 0 : dd.buffer) === kd && pd.byteOffset === Jd || (pd = (0, Qd.f)(kd, Jd, Ld.y.BYTES, 8, "the audio view"), this.audioView = pd), pd && this.audio.applyListener(pd)
      }
      indexOf(dd) {
        return this.indexById.get("number" === typeof dd ? dd : +dd)
      }
      isLocal(dd) {
        return dd !== Ld.gd && dd === Ld.u.localId(this.apiView, 0)
      }
      yI(dd) {
        const Jd = [0, 0, 0];
        return this.readPosition("number" === typeof dd ? dd : +dd, Jd) ? Jd : null
      }
      readPosition(dd, Jd) {
        const kd = this.apiView;
        if (void 0 !== this.indexById.get(dd) && this.isLocal(dd)) {
          for (let dd = 0; dd < 3; dd++) Jd[dd] = Ld.u.localPos(kd, 0, dd);
          return !0
        }
        return this.readDrawnPosition(dd, Jd)
      }
      readDrawnPosition(dd, Jd) {
        const kd = this.apiView,
          pd = this.indexById.get(dd);
        if (void 0 === pd || pd >= this.renderCapacity) return Jd[0] = Jd[1] = Jd[2] = NaN, !1;
        const Nd = pd * Od;
        for (let Wd = 0; Wd < 3; Wd++) Jd[Wd] = this.render[Nd + Wd] + Ld.u.origin(kd, 0, Wd);
        return !0
      }
      checkValid(dd) {
        return void 0 !== this.indexOf(dd)
      }
      isAlive(dd) {
        const Jd = this.indexOf(dd);
        if (void 0 === Jd) return null;
        if (this.ensureViews(), Jd >= this.renderCapacity) return null;
        const kd = this.vis[Jd];
        return 0 === kd ? null : 0 !== (kd & Ld.we.Alive)
      }
      getEntityType(dd) {
        const Jd = this.indexOf(dd);
        return void 0 === Jd ? this.isLocal("number" === typeof dd ? dd : +dd) ? "Player" : null : qd(this.kinds[Jd])
      }
      spawned(dd, Jd, kd) {
        if (Jd >= 1048576) throw new Qd.e(`entity ${dd} spawned at index ${Jd}`);
        this.ensureIndex(Jd), this.serverIds[Jd] === dd && null !== this.idStr[Jd] || (this.idStr[Jd] = String(dd)), this.serverIds[Jd] = dd, this.kinds[Jd] = kd, this.indexById.set(dd, Jd)
      }
      despawned(dd, Jd) {
        let kd = !1;
        return this.indexById.get(dd) === Jd && (this.indexById.delete(dd), kd = !0), Jd < this.serverIds.length && this.serverIds[Jd] === dd && (this.serverIds[Jd] = Ld.gd, this.kinds[Jd] = 0, this.idStr[Jd] = null), kd
      }
      ensureIndex(dd) {
        const Jd = this.serverIds.length;
        if (dd < Jd) return;
        let kd = 2 * Jd;
        for (; kd <= dd;) kd *= 2;
        const pd = new Int32Array(kd).fill(Ld.gd);
        pd.set(this.serverIds), this.serverIds = pd;
        const Nd = new Uint16Array(kd);
        Nd.set(this.kinds), this.kinds = Nd;
        for (let Wd = Jd; Wd < kd; Wd++) this.idStr.push(null)
      }
      eventView() {
        const dd = this.memory().buffer;
        return dd !== this.eventsBuffer && (this.eventsBuffer = dd, this.events = new DataView(dd, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const dd = this.memory().buffer;
        this.buffer = dd, this.viewPtr < 0 && (this.viewPtr = this.core.mNd()), this.view = new DataView(dd, this.viewPtr, Ld.u.BYTES), this.rereadDirectory()
      }
    }

    function xd(dd) {
      return dd >>> Ld.d === Ld.q.Item
    }

    function qd(dd) {
      var Jd, kd;
      const pd = dd & Ld.f;
      switch (dd >>> Ld.d) {
        case Ld.q.Lifeform:
          return null !== (Jd = Kd.k[pd]) && void 0 !== Jd ? Jd : null;
        case Ld.q.Throwable:
          return null !== (kd = od.j[pd]) && void 0 !== kd ? kd : null;
        case Ld.q.Mesh:
          return "Mesh";
        case Ld.q.Audio:
          return "AudioEntity";
        case Ld.q.Item:
          return "Item";
        default:
          return null
      }
    }
    const Bd = new TextDecoder;

    function sd(dd, Jd, kd) {
      if (kd < ld.Ld.HEAD_BYTES) return null;
      const pd = dd.getUint32(Jd, !0),
        Nd = dd.getUint32(Jd + 20, !0),
        Wd = dd.getUint32(Jd + 24, !0),
        Pd = ld.Ld.HEAD_BYTES + (0, ld.xe)(Nd);
      if (pd !== ld.Ld.UPDATE && pd !== ld.Ld.REMOVE || Nd > kd || Pd + Wd > kd) return null;
      const Zd = (kd, pd) => Bd.decode(new Uint8Array(dd.buffer, dd.byteOffset + Jd + kd, pd)),
        gd = dd.getFloat64(Jd + 12, !0);
      return {
        op: pd,
        level: dd.getFloat64(Jd + 4, !0),
        durationMs: Number.isNaN(gd) ? null : gd,
        name: Zd(ld.Ld.HEAD_BYTES, Nd),
        icon: Zd(Pd, Wd)
      }
    }

    function ad(dd, Jd, kd) {
      return new Qd.e(`event ${dd} at ${Jd} of ${kd} bytes`)
    }
    var Md = kd(313),
      Fd = kd(1245),
      Yd = kd(39141),
      md = kd(1950),
      bd = kd(40687),
      Sd = kd(1901),
      jd = kd(39312),
      Xd = kd(39335),
      fd = kd(39319),
      nd = kd(40610),
      Ud = kd(2345),
      yd = kd(39304),
      Dd = kd(39328);
    const Td = Math.max(Ld.Cb.BYTES, Ld.sb.BYTES, Ld.vb.BYTES);

    function Ed(dd) {
      if (!(0, Dd.e)(dd)) return null;
      const Jd = Number(dd);
      return (0 | Jd) === Jd ? Jd : null
    }
    class cd {
      constructor(dd) {
        this.api = dd, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, yd.g)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Pd = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = Ld.gd, this.localName = String(Ld.gd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.Pd = null;
        const dd = this.api.queries.directorView() >= Ld.Cb.BYTES ? this.scratchView() : null;
        null !== dd && (this.defaultFov = (0, Sd.H)(Ld.Cb.fov(dd, 0)), this.baseFov = (0, Sd.H)(Ld.Cb.baseFov(dd, 0)), this.aspect = Ld.Cb.aspect(dd, 0), this.bodyHeading = Ld.Cb.bodyHeading(dd, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(dd) {
        this.viewHeading = dd
      }
      get localPlayerId() {
        const dd = Ld.u.localId(this.api.apiView, 0);
        return dd !== this.localId && (this.localId = dd, this.localName = String(dd)), this.localName
      }
      getEntityPosition(dd) {
        return this.readEntity(dd) ? this.entityFeet : null
      }
      getEntityAimPoint(dd) {
        return this.readEntity(dd) ? this.entityAim : null
      }
      getEntityHeading(dd) {
        const Jd = Ed(dd);
        if (null === Jd) return null;
        const kd = Ld.u.localId(this.api.apiView, 0);
        return Jd === kd && kd !== Ld.gd ? this.viewHeading : this.readEntity(dd) ? this.entityHeading : null
      }
      raycastTerrain(dd, Jd, kd) {
        const pd = this.api.queries.cameraSweep(dd[0], dd[1], dd[2], Jd[0], Jd[1], Jd[2], kd);
        return pd < kd - 1e-6 ? pd : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const dd = this.defaultPose;
        dd.fov = this.defaultFov;
        const Jd = this.api.queries.directorDefaultPose() >= Ld.sb.BYTES ? this.scratchView() : null;
        if (null === Jd) return dd;
        for (let kd = 0; kd < 3; kd++) dd.position[kd] = Ld.sb.eye(Jd, 0, kd);
        return dd.heading = Ld.sb.heading(Jd, 0), dd.pitch = Ld.sb.pitch(Jd, 0), dd
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
      readEntity(dd) {
        const Jd = Ed(dd);
        if (null === Jd) return !1;
        if (Jd === this.Pd) return this.entityLive;
        this.Pd = Jd;
        const kd = this.api.queries.directorEntity(Jd) >= Ld.vb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== kd, null === kd) return !1;
        for (let pd = 0; pd < 3; pd++) this.entityFeet[pd] = Ld.vb.feet(kd, 0, pd), this.entityAim[pd] = this.entityFeet[pd];
        return this.entityAim[1] += Ld.vb.eyeHeight(kd, 0), this.entityHeading = Ld.vb.heading(kd, 0), !0
      }
      scratchView() {
        const dd = this.api.scratch(),
          Jd = this.api.memory().buffer,
          kd = this.scratch;
        return null !== kd && kd.buffer === Jd && kd.byteOffset === dd ? kd : (this.scratch = this.api.memoryData(dd, Td, 8, "the director's record"), this.scratch)
      }
    }
    const hd = {
        mode: "default"
      },
      rd = {
        show: () => {},
        clear: () => {}
      };

    function ud() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class td {
      constructor(dd) {
        this.options = dd, this.Vo = void 0, this.director = void 0, this.latest = hd, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          bY: 0,
          fY: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pg = new Int32Array(3 * Ld.fe), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Ld.fe), this.Vo = new cd(dd.api), this.director = new fd.b(this.Vo)
      }
      settingsChanged(dd) {
        let Jd = hd;
        if (dd.length > 0) try {
          Jd = (0, nd.c)(dd)
        } catch {}
        this.latest = Jd, this.pending = Jd
      }
      call(dd, Jd, kd, pd, Nd, Wd) {
        var Pd, Zd;
        let gd;
        this.holding = !1;
        try {
          gd = this.answer(dd, Jd, kd, pd, Nd, Wd)
        } catch (ld) {
          var Cd, Kd;
          throw this.answeredPose = !1, null === (Cd = (Kd = this.options).showFacing) || void 0 === Cd || Cd.call(Kd, null), ld
        }
        const od = this.answeredPose && 0 === (pd & Ld.yb.Held);
        return this.answeredPose = gd !== Ld.pb.None, this.holding = this.answeredPose && !od, null === (Pd = (Zd = this.options).showFacing) || void 0 === Pd || Pd.call(Zd, this.holding ? this.facing : null), gd
      }
      holdsView() {
        return this.holding
      }
      answer(dd, Jd, kd, pd, Nd, Wd) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Vo: Pd
        } = this;
        Pd.readView();
        if (0 !== (pd & Ld.yb.Held) || Pd.setViewHeading((0, jd.w)(Pd.bodyHeading)), void 0 !== this.pending) {
          const dd = this.pending;
          this.pending = void 0, this.director.setSettings(dd), this.syncShownSettings()
        }
        this.readLook((0, Ud.g)(Jd), (0, Ud.g)(kd), pd, (0, Ud.g)(Nd), (0, Ud.g)(Wd));
        const Zd = this.director.update(dd / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Zd) return Ld.pb.None;
        const [gd, Cd, Kd] = Zd.position;
        if (0 === this.options.api.queries.directorPose(gd, Cd, Kd, (0, jd.w)(Zd.heading), (0, jd.i)(Zd.pitch), (0, Sd.p)(Zd.fov))) return Ld.pb.None;
        if ("default" === this.director.getSettings().mode) return Ld.pb.Pose;
        switch (this.facing) {
          case "camera":
            return Ld.pb.FaceCamera;
          case "cursor":
            return Ld.pb.FaceCursor;
          default:
            return Ld.pb.FaceMovement
        }
      }
      afterFrame(dd) {
        dd ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = hd, this.idle()
      }
      restart() {
        const dd = this.holding;
        this.idle(), this.holding = dd
      }
      idle() {
        var dd, Jd;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new fd.b(this.Vo), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (dd = (Jd = this.options).showFacing) || void 0 === dd || dd.call(Jd, null), this.setCentres(0)
      }
      syncShownSettings() {
        const dd = this.director.getSettings();
        if (dd === this.shownSettings) return;
        this.shownSettings = dd;
        const Jd = (0, Xd.c)(dd);
        this.facing = Jd.facing, this.mouseTurns = Jd.mouseTurns
      }
      readLook(dd, Jd, kd, pd, Nd) {
        const Wd = this.look,
          Pd = 0 !== (kd & Ld.yb.LookPointed);
        if (null === this.mouseTurns && !Pd) return Wd.bY = 0, Wd.fY = 0, void(Wd.pointedAt = void 0);
        let Zd;
        Pd && (this.pointedAt.heading = pd, this.pointedAt.pitch = Nd, Zd = this.pointedAt);
        const {
          Vo: gd
        } = this;
        gd.setViewHeading((0, Xd.b)(gd.getViewHeading(), dd, Jd, Zd, "look" === this.mouseTurns, Wd))
      }
      writeCentres(dd) {
        const Jd = this.next,
          kd = Math.min(dd.length, Ld.fe);
        for (let pd = 0; pd < kd; pd++)
          for (let kd = 0; kd < 3; kd++) Jd[3 * pd + kd] = Math.floor(dd[pd][kd] / Ld.C);
        this.setCentres(kd)
      }
      setCentres(dd) {
        const {
          pg: Jd,
          next: kd
        } = this;
        let pd = dd === this.centresLen;
        for (let Nd = 0; pd && Nd < 3 * dd; Nd++) pd = Jd[Nd] === kd[Nd];
        pd || (Jd.fill(0), Jd.set(kd.subarray(0, 3 * dd)), this.centresLen = dd, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const dd = this.options.cmd();
        null !== dd && (0, Ld.Of)(dd, 0, this.pg, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var dd, Jd, kd;
        return null !== (dd = null === (Jd = (kd = this.options).screen) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : rd
      }
      hidden() {
        var dd;
        return (null !== (dd = this.options.isPageHidden) && void 0 !== dd ? dd : ud)()
      }
      now() {
        var dd, Jd, kd;
        return null !== (dd = null === (Jd = (kd = this.options).now) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : performance.now()
      }
    }
    var Vd = kd(40785);
    const zd = Ld.C * Ld.C * Ld.C,
      Hd = Math.log2(Ld.C),
      wd = Ld.C - 1,
      Ad = Ld.R.BYTES / 4,
      dJ = new Uint16Array(zd);

    function JJ(dd, Jd, kd) {
      return dd * Ld.C * Ld.C + Jd * Ld.C + kd
    }
    class kJ {
      constructor(dd) {
        this.chunk = dd
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(dd, Jd, kd) {
        return JJ(dd, Jd, kd)
      }
    }
    class pJ {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class NJ {
      constructor(dd, Jd, kd, pd) {
        this.table = dd, this.slot = Jd, this.generation = kd, this.epoch = pd, this.ql = new kJ(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = dJ, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get jL() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get IQ() {
        const dd = this.gameVoxels(),
          Jd = this.layers ??= new Uint16Array(Ld.C);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let kd = 0; 0 !== this.staleLayers; kd++) {
          const pd = 1 << kd;
          0 !== (this.staleLayers & pd) && (this.staleLayers &= ~pd, Jd[kd] = WJ(dd, kd))
        }
        return Jd
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const dd = this.voxelData(),
          Jd = this.writes;
        if (null === Jd || 0 === Jd.ids.size) return dd;
        if (Jd.from !== dd) {
          const kd = Jd.patched ??= new Uint16Array(zd);
          kd.set(dd);
          for (const [dd, pd] of Jd.ids) kd[dd] = pd;
          Jd.from = dd
        }
        return Jd.patched
      }
      written(dd) {
        var Jd;
        return null === (Jd = this.writes) || void 0 === Jd ? void 0 : Jd.ids.get(dd)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(dd, Jd, kd) {
        const pd = this.writes ??= new pJ;
        pd.ids.set(dd, Jd), kd && pd.cleared.add(dd), null !== pd.from && (pd.patched[dd] = Jd);
        const Nd = 1 << (dd >> Hd & wd);
        pd.layers |= Nd, this.staleLayers |= Nd, this.writeCount++
      }
      clearWrites() {
        const dd = this.writes;
        null !== dd && (this.staleLayers |= dd.layers, dd.ids.clear(), dd.cleared.clear(), dd.layers = 0, dd.from = null)
      }
      dataCleared(dd) {
        var Jd;
        return !0 === (null === (Jd = this.writes) || void 0 === Jd ? void 0 : Jd.cleared.has(dd))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const dd = this.table.slotWords(),
          Jd = this.slot * Ad;
        if (this.epoch !== this.table.epoch || Jd + Ad > dd.length || 0 === dd[Jd + 3] || dd[Jd + 2] !== this.generation) return this.data = dJ, this.dataPtr = 0, dJ;
        this.version = dd[Jd + 1];
        const kd = dd[Jd + 0],
          pd = dd.buffer;
        return kd === this.dataPtr && pd === this.dataBuffer || (this.dataPtr = kd, this.dataBuffer = pd, this.data = this.table.voxelsAt(pd, kd)), this.data
      }
    }

    function WJ(dd, Jd) {
      const kd = dd[Jd * Ld.C];
      for (let pd = 0; pd < Ld.C; pd++) {
        const Nd = JJ(pd, Jd, 0);
        for (let Jd = 0; Jd < Ld.C; Jd++)
          if (dd[Nd + Jd] !== kd) return 65535
      }
      return kd
    }
    const PJ = new Uint32Array(0);

    function ZJ(dd, Jd, kd) {
      return JJ(dd & wd, Jd & wd, kd & wd)
    }
    class gJ {
      constructor(dd, Jd) {
        this.memory = dd, this.apiView = Jd, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = PJ, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = PJ, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(dd, Jd, kd, pd, Nd, Wd) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Wd === Ld.T.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Wd !== Ld.T.Stored && Wd !== Ld.T.Unloaded) throw new Qd.e(`ChunkSlot flags ${Wd}`);
        const Pd = (0, Vd.c)(dd, Jd, kd);
        if (Pd < 0) return;
        if (Wd === Ld.T.Unloaded) return void this.chunks.delete(Pd);
        const Zd = this.chunks.get(Pd);
        (null === Zd || void 0 === Zd ? void 0 : Zd.slot) === pd && Zd.generation === Nd || this.chunks.set(Pd, new NJ(this, pd, Nd, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const dd = this.apiView(),
          Jd = Ld.u.chunkSlotsPtr(dd, 0),
          kd = Ld.u.chunkSlotsLen(dd, 0);
        Jd === this.slotsPtr && kd === this.slotsLen || (this.slotsPtr = Jd, this.slotsLen = kd, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const dd = this.apiView(),
          Jd = Ld.u.walkThroughPtr(dd, 0),
          kd = Ld.u.walkThroughLen(dd, 0);
        Jd === this.walkPtr && kd === this.walkLen || (this.walkPtr = Jd, this.walkLen = kd, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const dd of this.written) dd.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const dd = this.memory().buffer;
        var Jd;
        dd !== this.slotsBuffer && (this.slotsBuffer = dd, this.slots = null !== (Jd = (0, Qd.t)(Uint32Array, dd, this.slotsPtr, this.slotsLen * Ad, "the chunk directory")) && void 0 !== Jd ? Jd : PJ);
        return this.slots
      }
      voxelsAt(dd, Jd) {
        try {
          var kd;
          return null !== (kd = (0, Qd.t)(Uint16Array, dd, Jd, zd, "a chunk's voxels")) && void 0 !== kd ? kd : dJ
        } catch (pd) {
          if (!(pd instanceof Qd.e)) throw pd;
          return this.corruption ??= pd, dJ
        }
      }
      chunk(dd, Jd, kd) {
        var pd;
        return null !== (pd = this.chunks.get((0, Vd.c)(dd, Jd, kd))) && void 0 !== pd ? pd : null
      }
      isLoaded(dd, Jd, kd) {
        return void 0 !== this.chunkAt(Math.floor(dd), Math.floor(Jd), Math.floor(kd))
      }
      NC(dd, Jd, kd) {
        var pd;
        const Nd = Math.floor(dd),
          Wd = Math.floor(Jd),
          Pd = Math.floor(kd),
          Zd = this.chunkAt(Nd, Wd, Pd);
        if (!Zd) return 0;
        const gd = ZJ(Nd, Wd, Pd);
        return null !== (pd = Zd.written(gd)) && void 0 !== pd ? pd : Zd.voxelData()[gd]
      }
      setOverlay(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Wd = this.chunkAt(dd, Jd, kd);
        return !!Wd && (Wd.hasWrites() || this.written.push(Wd), Wd.write(ZJ(dd, Jd, kd), pd, Nd), !0)
      }
      version(dd, Jd, kd) {
        var pd, Nd;
        return null !== (pd = null === (Nd = this.chunks.get((0, Vd.c)(dd, Jd, kd))) || void 0 === Nd ? void 0 : Nd.jL) && void 0 !== pd ? pd : null
      }
      scan(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        const gd = Ld.C;
        let Cd = 0;
        for (let Kd = Math.floor(Jd / gd); Kd * gd < Nd; Kd++) {
          const od = Kd * gd,
            ld = Math.min(Nd - od, gd);
          for (let Nd = Math.floor(dd / gd); Nd * gd < pd; Nd++) {
            const Qd = Nd * gd,
              Ld = Math.min(pd - Qd, gd);
            for (let pd = Math.floor(kd / gd); pd * gd < Wd; pd++) {
              const Od = this.chunks.get((0, Vd.c)(Nd, Kd, pd));
              if (!Od) continue;
              const ed = pd * gd,
                Rd = Math.max(kd - ed, 0),
                Id = Math.min(Wd - ed, gd),
                Gd = Od.IQ,
                vd = Od.gameVoxels();
              for (let kd = Math.max(Jd - od, 0); kd < ld; kd++) {
                const Jd = Gd[kd];
                if (65535 === Jd || 0 !== Pd[Jd]) {
                  Cd++;
                  for (let Jd = Math.max(dd - Qd, 0); Jd < Ld; Jd++) {
                    const dd = JJ(Jd, kd, 0);
                    for (let pd = Rd; pd < Id; pd++) {
                      const Nd = vd[dd + pd];
                      0 !== Pd[Nd] && Zd.push(Qd + Jd, od + kd, ed + pd, Nd)
                    }
                  }
                }
              }
            }
          }
        }
        return Cd
      }
      dataCleared(dd, Jd, kd) {
        var pd;
        const Nd = Math.floor(dd),
          Wd = Math.floor(Jd),
          Pd = Math.floor(kd);
        return !0 === (null === (pd = this.chunkAt(Nd, Wd, Pd)) || void 0 === pd ? void 0 : pd.dataCleared(ZJ(Nd, Wd, Pd)))
      }
      isWalkThrough(dd) {
        if (!Number.isInteger(dd) || dd < 0 || dd > 65535) return !1;
        const Jd = this.walkWords(),
          kd = dd >>> 5;
        return kd < Jd.length && 1 === (Jd[kd] >>> (31 & dd) & 1)
      }
      walkWords() {
        const dd = this.memory().buffer;
        var Jd;
        dd !== this.walkBuffer && (this.walkBuffer = dd, this.walk = null !== (Jd = (0, Qd.t)(Uint32Array, dd, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Jd ? Jd : PJ);
        return this.walk
      }
      chunkAt(dd, Jd, kd) {
        if ((0 | dd) !== dd || (0 | Jd) !== Jd || (0 | kd) !== kd) return;
        const pd = (0, Vd.c)(dd >> Hd, Jd >> Hd, kd >> Hd);
        return pd !== this.lastKey && (this.lastKey = pd, this.lastChunk = this.chunks.get(pd)), this.lastChunk
      }
    }
    var CJ = kd(38642),
      KJ = kd(38004),
      oJ = kd(36965),
      lJ = kd(36790),
      QJ = kd(9176),
      LJ = kd(39263),
      OJ = kd(193);
    const eJ = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      RJ = [
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
      IJ = RJ.map((dd => {
        let [Jd] = dd;
        return Jd
      })),
      GJ = Uint8Array.from(RJ, (dd => {
        let [, Jd] = dd;
        return Jd
      })),
      vJ = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      xJ = 8;
    var qJ = kd(36935),
      BJ = kd(36952),
      sJ = kd(36946),
      iJ = kd(256);
    class aJ {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iJ.c;
        this.sheet = dd, this.onError = Jd, this.idle = kd, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = dd => {
          this.cancelIdle = null;
          try {
            if (dd.timeRemaining() >= 1) {
              let dd = this.queue.shift();
              for (; void 0 !== dd && !this.load(dd);) dd = this.queue.shift()
            }
          } catch (Jd) {
            this.onError(Jd)
          } finally {
            this.schedule()
          }
        }
      }
      preload(dd) {
        const Jd = [...dd].sort(((dd, Jd) => dd - Jd));
        for (const kd of Jd) this.asked.has(kd) || (this.asked.add(kd), this.queue.push(kd));
        this.schedule()
      }
      cancel() {
        var dd;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (dd = this.cancelIdle) || void 0 === dd || dd.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(dd) {
        const Jd = this.sheet(dd, !1),
          kd = this.sheet(dd, !0),
          [pd, Nd] = "unloaded" === Jd.state() && "unloaded" !== kd.state() ? [kd, Jd] : [Jd, kd],
          Wd = this.gen,
          Pd = () => {
            try {
              Wd === this.gen && "unloaded" === Nd.state() && Nd.load()
            } catch (dd) {
              this.onError(dd)
            }
          },
          Zd = pd.state();
        return "unloaded" === Zd ? (pd.once("load", Pd), pd.load(), !0) : "unloaded" === Nd.state() && ("loading" === Zd ? (pd.once("load", Pd), !1) : (Nd.load(), !0))
      }
    }
    var MJ = kd(40900);
    const FJ = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      YJ = OJ.g.uR * OJ.g.playerEyeToHeightRatio,
      mJ = [0, 0, -1, 0, 1, 0],
      bJ = eJ.indexOf("note");

    function SJ(dd) {
      return dd >= 0 ? Math.min(1, dd) : 0
    }

    function jJ(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const pd = function(dd) {
        let Jd = 0,
          kd = IJ.length;
        for (; Jd < kd;) {
          const pd = Jd + kd >>> 1;
          IJ[pd] < dd ? Jd = pd + 1 : kd = pd
        }
        return Jd
      }(dd);
      if ("" === dd || null === (Jd = IJ[pd]) || void 0 === Jd || !Jd.startsWith(dd)) return -1;
      if (IJ[pd] === dd) return pd;
      let Nd = pd + 1;
      for (; Nd < IJ.length && IJ[Nd].startsWith(dd);) Nd++;
      return pd + Math.floor(kd() * (Nd - pd))
    }
    class XJ {
      constructor(dd, Jd, kd, pd, Nd) {
        this.group = dd, this.loudness = Jd, this.startMs = kd, this.howl = pd, this.host = Nd, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const dd = this.host.alive(this.id);
        return dd ? 1e3 * this.howl.duration(this.id) / dd.rate : 0
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
    class fJ {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          pd = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = dd, this.listener = Jd, this.now = kd, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(eJ.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new sJ.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: dd => this.aliveVoice(dd),
          started: dd => this.started.has(dd),
          drop: dd => {
            var Jd;
            null === (Jd = this.live.get(dd)) || void 0 === Jd || Jd.howl.stop(dd), this.forget(dd)
          }
        }, this.handlers = {
          playSound: (dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) => {
            if (pd >= IJ.length) return;
            const Cd = 0 !== (Nd & Ld.ne.Loop);
            Nd & Ld.ne.TwoD ? this.start(pd, !1, Pd, Wd, Zd, Cd) : this.startSpatial(pd, Pd, Wd, Zd, Cd, dd, Jd, kd, gd, this.earDistSq(dd, Jd, kd))
          },
          soundPos: (dd, Jd, kd, pd) => {
            const Nd = this.core.get(pd);
            var Wd;
            void 0 !== Nd && (null === (Wd = this.live.get(Nd)) || void 0 === Wd || Wd.howl.pos(kd, Jd, dd, Nd))
          },
          soundSet: (dd, Jd, kd, pd) => {
            const Nd = this.core.get(dd),
              Wd = void 0 === Nd ? void 0 : this.live.get(Nd);
            void 0 !== Nd && Wd && (this.setRel(Nd, Jd), Wd.rate = kd, Wd.howl.rate(kd, Nd), Wd.spatial && Wd.howl.pannerAttr({
              refDistance: pd
            }, Nd))
          },
          soundFade: (dd, Jd, kd, pd) => {
            const Nd = this.core.get(dd);
            void 0 !== Nd && this.fade(Nd, Jd, kd, 0 !== (pd & Ld.le.StopAfter))
          },
          soundStop: dd => {
            const Jd = this.core.get(dd);
            var kd;
            void 0 !== Jd && (null === (kd = this.live.get(Jd)) || void 0 === kd || kd.howl.stop(Jd), this.forget(Jd))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new aJ(((dd, Jd) => this.sheet(dd, Jd)), (dd => {
          this.errors++, console.error("Audio preload failed", dd)
        }), pd)
      }
      prepare() {
        for (let dd = 0; dd < eJ.length; dd++) this.prepareSheet(dd)
      }
      prepareSheet(dd) {
        this.sheet(dd, !1), this.sheet(dd, !0)
      }
      preload(dd) {
        this.loader.preload(dd)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let dd = 0; dd < eJ.length; dd++) {
          if (BJ.b.has(eJ[dd])) continue;
          const Jd = [];
          for (const pd of [!1, !0]) {
            const kd = nJ(dd, pd),
              Nd = this.sheets.get(kd);
            void 0 !== Nd && "loading" !== Nd.state() && Jd.push({
              key: kd,
              howl: Nd
            })
          }
          if (!Jd.some((dd => {
              let {
                howl: Jd
              } = dd;
              return "loaded" === Jd.state()
            }))) continue;
          this.unloading[dd] += Jd.length;
          const kd = () => {
            this.unloading[dd]--, 0 === this.unloading[dd] && this.prepareSheet(dd)
          };
          for (const {
              key: dd,
              howl: pd
            }
            of Jd) this.sheets.delete(dd), "loaded" === pd.state() ? (0, qJ.d)(pd, kd) : (pd.unload(), kd())
        }
      }
      onAudioEvent(dd, Jd, kd, pd) {
        if (dd < Ld.o.PlaySound || dd > Ld.o.SoundReset) return !1;
        try {
          return (0, Ld.xe)(dd, Jd, kd, pd, this.handlers)
        } catch (Nd) {
          return this.errors++, console.error("Audio event failed", Nd), !0
        }
      }
      applyListener(dd) {
        const Jd = this.nextPose;
        for (let pd = 0; pd < 3; pd++) Jd[2 - pd] = Ld.y.listener(dd, 0, pd), Jd[5 - pd] = Ld.y.forward(dd, 0, pd), Jd[8 - pd] = Ld.y.up(dd, 0, pd);
        0 === Jd[3] && 0 === Jd[4] && 0 === Jd[5] && Jd.set(this.posed ? this.pose.subarray(3) : mJ, 3);
        for (let pd = 0; pd < 9; pd++)
          if (!Number.isFinite(Jd[pd])) return;
        const kd = this.pose;
        if (this.posed) {
          let dd = !0;
          for (let pd = 0; pd < 9 && dd; pd++) dd = Jd[pd] === kd[pd];
          if (dd) return
        }
        this.listener.apply(Jd) && (kd.set(Jd), this.posed = !0)
      }
      playGame(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = jJ(dd);
        if (Zd < 0) return MJ.c;
        if (!kd) {
          const {
            howl: dd,
            id: kd
          } = this.start(Zd, !1, Jd, 0, 1, Pd);
          return this.gameSound(dd, kd, !1)
        }
        const gd = kd[0],
          Cd = kd[1] + YJ,
          Kd = kd[2];
        if (!Number.isFinite(gd) || !Number.isFinite(Cd) || !Number.isFinite(Kd)) return MJ.c;
        let od;
        if (pd) {
          const dd = gd - pd[0],
            Jd = Cd - pd[1],
            kd = Kd - pd[2];
          if (od = dd * dd + Jd * Jd + kd * kd, od > Nd * Nd) return MJ.c
        } else od = this.earDistSq(gd, Cd, Kd);
        const ld = this.startSpatial(Zd, Jd, 0, 1, Pd, gd, Cd, Kd, Wd, od);
        return ld ? this.gameSound(ld.howl, ld.id, !0) : MJ.c
      }
      setMaster(dd, Jd) {
        this.level = SJ(dd);
        const kd = Jd ? this.level : 0;
        if (kd !== this.master) {
          this.master = kd;
          for (const [dd, Jd] of this.live) Jd.fadeMs = 0, Jd.gain = Jd.rel * this.master, Jd.howl.volume(Jd.gain, dd)
        }
      }
      stopCore() {
        for (const Jd of [...this.core.values()]) {
          var dd;
          null === (dd = this.live.get(Jd)) || void 0 === dd || dd.howl.stop(Jd)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [dd, Jd] of [...this.live]) Jd.howl.stop(dd), this.forget(dd);
        this.core.clear()
      }
      gameSound(dd, Jd, kd) {
        const pd = {
          stop: () => (this.live.has(Jd) && dd.stop(Jd), pd),
          fade: (dd, kd, Nd) => {
            var Wd, Pd;
            const Zd = this.level > 0 ? kd / this.level : kd > 0 && null !== (Wd = null === (Pd = this.live.get(Jd)) || void 0 === Pd ? void 0 : Pd.rel) && void 0 !== Wd ? Wd : 0;
            return this.fade(Jd, Zd, Nd, !1), pd
          },
          rate: kd => {
            const Nd = this.live.get(Jd);
            return Nd && (Nd.rate = function(dd) {
              return dd > 0 && dd < 1 / 0 ? dd : 1
            }(kd), dd.rate(Nd.rate, Jd)), pd
          },
          getVolume: () => {
            var dd, kd;
            return (null !== (dd = null === (kd = this.live.get(Jd)) || void 0 === kd ? void 0 : kd.rel) && void 0 !== dd ? dd : 0) * this.level
          },
          getRelativeVolume: () => {
            var dd, kd;
            return null !== (dd = null === (kd = this.live.get(Jd)) || void 0 === kd ? void 0 : kd.rel) && void 0 !== dd ? dd : 0
          },
          setRelativeVolume: dd => (this.setRel(Jd, dd), pd),
          setPannerAttr: Nd => {
            if (kd && this.live.has(Jd)) {
              const kd = {
                ...FJ,
                refDistance: oJ.h
              };
              for (const [dd, Jd] of Object.entries(Nd)) "number" !== typeof Jd && "string" !== typeof Jd || (kd[dd] = Jd);
              dd.pannerAttr({
                coneOuterAngle: kd.coneOuterAngle
              }, Jd), dd.pannerAttr(kd, Jd)
            }
            return pd
          },
          setPosition: Nd => (kd && this.live.has(Jd) && Number.isFinite(Nd[0] + Nd[1] + Nd[2]) && dd.pos(Nd[2], Nd[1], Nd[0], Jd), pd)
        };
        return pd
      }
      startSpatial(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        const Kd = this.sheet(GJ[dd], !0);
        let od = null;
        if (!Nd) {
          if (this.failed.has(Kd)) return null;
          const kd = GJ[dd] === bJ ? null : (0, sJ.j)(IJ[dd]),
            pd = (0, sJ.g)(SJ(Jd), Math.sqrt(Cd), gd);
          if (od = new XJ(kd, pd, this.now(), Kd, this.voiceHost), !this.voices.admit(od)) return null
        }
        const ld = this.start(dd, !0, Jd, kd, pd, Nd);
        return od && (od.id = ld.id, od.direct = "loaded" === Kd.state() && !Kd._playLock), Kd.pannerAttr({
          coneOuterAngle: 360
        }, ld.id), Kd.pannerAttr({
          ...FJ,
          refDistance: gd
        }, ld.id), Kd.pos(Zd, Pd, Wd, ld.id), ld
      }
      aliveVoice(dd) {
        const Jd = this.live.get(dd);
        if (!Jd) return;
        const kd = Jd.howl._soundById(dd);
        if (kd && !kd._ended) return Jd;
        this.forget(dd)
      }
      earDistSq(dd, Jd, kd) {
        if (!this.posed) return 0;
        const pd = dd - this.pose[2],
          Nd = Jd - this.pose[1],
          Wd = kd - this.pose[0];
        return pd * pd + Nd * Nd + Wd * Wd
      }
      start(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = SJ(kd),
          Zd = this.sheet(GJ[dd], Jd);
        "unloaded" === Zd.state() && Zd.load();
        const gd = Zd.play(IJ[dd]),
          Cd = Pd * this.master;
        return Zd.volume(Cd, gd), this.live.set(gd, {
          howl: Zd,
          rel: Pd,
          gain: Cd,
          fadeFrom: Cd,
          fadeAt: 0,
          fadeMs: 0,
          rate: Nd,
          handle: pd,
          spatial: Jd,
          stopTimer: void 0
        }), 0 !== pd && this.core.set(pd, gd), 1 !== Nd && Zd.rate(Nd, gd), Wd && Zd.loop(!0, gd), {
          howl: Zd,
          id: gd
        }
      }
      sheet(dd, Jd) {
        const kd = nJ(dd, Jd);
        let pd = this.sheets.get(kd);
        if (!pd) {
          const Nd = this.createHowl(eJ[dd], Jd);
          Nd.on("end", (dd => {
            Nd.loop(dd) || this.forget(dd)
          })), Nd.on("stop", (dd => {
            this.forget(dd)
          })), Nd.on("play", (dd => {
            this.live.has(dd) && this.started.add(dd)
          })), Nd.on("loaderror", (dd => {
            if ("loaded" !== Nd.state()) {
              this.failed.add(Nd);
              for (const [dd, Jd] of this.live) Jd.howl === Nd && this.forget(dd)
            } else "number" === typeof dd && this.forget(dd)
          })), this.sheets.set(kd, Nd), pd = Nd
        }
        return pd
      }
      setRel(dd, Jd) {
        const kd = this.live.get(dd);
        kd && (UJ(kd), kd.fadeMs = 0, kd.rel = SJ(Jd), kd.gain = kd.rel * this.master, kd.howl.volume(kd.gain, dd))
      }
      fade(dd, Jd, kd, pd) {
        const Nd = this.live.get(dd);
        if (!Nd) return;
        UJ(Nd);
        const {
          howl: Wd
        } = Nd, Pd = this.gainNow(Nd);
        Nd.rel = SJ(Jd), Nd.gain = Nd.rel * this.master;
        const Zd = kd > 0 ? Math.min(kd, 65535) : 0,
          gd = 0 === Zd || Pd === Nd.gain;
        Nd.fadeMs = gd ? 0 : Zd, gd ? Wd.volume(Nd.gain, dd) : (Nd.fadeFrom = Pd, Nd.fadeAt = this.now(), Wd.fade(Pd, Nd.gain, Zd, dd)), pd && (gd ? Wd.stop(dd) : Nd.stopTimer = setTimeout((() => {
          Nd.stopTimer = void 0, Wd.stop(dd)
        }), Zd))
      }
      gainNow(dd) {
        if (dd.fadeMs > 0) {
          const Jd = (this.now() - dd.fadeAt) / dd.fadeMs;
          if (Jd < 1) return dd.fadeFrom + (dd.gain - dd.fadeFrom) * Math.max(0, Jd);
          dd.fadeMs = 0
        }
        return dd.gain
      }
      forget(dd) {
        this.started.delete(dd);
        const Jd = this.live.get(dd);
        Jd && (UJ(Jd), this.live.delete(dd), 0 !== Jd.handle && this.core.get(Jd.handle) === dd && this.core.delete(Jd.handle))
      }
    }

    function nJ(dd, Jd) {
      return 2 * dd + (Jd ? 1 : 0)
    }

    function UJ(dd) {
      void 0 !== dd.stopTimer && (clearTimeout(dd.stopTimer), dd.stopTimer = void 0)
    }
    var yJ = kd(40585),
      DJ = kd(39270);
    class TJ {
      constructor(dd, Jd, kd, pd) {
        this.key = dd, this.model = Jd, this.host = pd, this.oo = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.UNd = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.pL = !1, this.oo = Math.max(1, Math.ceil(kd)), this.records = new Float32Array(this.oo * CJ.c), this.isDirty = new Uint8Array(this.oo), this.tail = new Uint8Array(this.oo * Ld.wc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(pd.cmd())
      }
      setOrigin(dd, Jd, kd) {
        this.origin[0] = dd, this.origin[1] = Jd, this.origin[2] = kd
      }
      markDirty(dd) {
        !this.pL && dd >= 0 && dd < this.oo && dd < Ld.wc.Max && this.sL(dd, dd + 1)
      }
      commit(dd) {
        if (this.pL) return;
        (dd = Math.min(Math.max(Math.floor(dd), 0), this.oo, Ld.wc.Max)) > this.count && this.sL(this.count, dd), this.count = dd;
        const {
          origin: Jd,
          sentOrigin: kd,
          dirtyList: pd
        } = this, Nd = this.UNd !== dd, Wd = kd[0] !== Jd[0] || kd[1] !== Jd[1] || kd[2] !== Jd[2];
        if (0 === pd.length && !Nd && !Wd) return;
        const Pd = this.host.cmd();
        if (!Pd || !this.make(Pd)) return;
        const Zd = pd.length,
          {
            records: gd,
            tailView: Cd
          } = this;
        for (let Kd = 0; Kd < Zd; Kd++) {
          const dd = pd[Kd],
            Jd = dd * CJ.c,
            kd = Kd * Ld.wc.Bytes,
            Nd = 0 !== gd[Jd + CJ.d] ? Ld.wc.Hidden : 0;
          Cd.setUint32(kd, (dd | Nd) >>> 0, !0), Cd.setFloat32(kd + 4, gd[Jd], !0), Cd.setFloat32(kd + 8, gd[Jd + 1], !0), Cd.setFloat32(kd + 12, gd[Jd + 2], !0)
        }
        if ((0, Ld.af)(Pd, 0, this.key, dd, Jd, Zd, this.tailOf(Zd))) {
          for (let dd = 0; dd < Zd; dd++) this.isDirty[pd[dd]] = 0;
          pd.length = 0, this.UNd = dd, kd[0] = Jd[0], kd[1] = Jd[1], kd[2] = Jd[2]
        }
      }
      grow(dd) {
        (dd = Math.ceil(dd)) <= this.oo || this.pL || (this.records = (0, DJ.c)(this.records, new Float32Array(dd * CJ.c)), this.isDirty = (0, DJ.c)(this.isDirty, new Uint8Array(dd)), this.tail = new Uint8Array(dd * Ld.wc.Bytes), this.tailView = new DataView(this.tail.buffer), this.oo = dd)
      }
      dispose() {
        this.pL || (this.pL = !0, this.host.pL(this, this.made ? this.key : null))
      }
      make(dd) {
        if (!this.made && dd) {
          const {
            item: Jd,
            scale: kd,
            yaw: pd
          } = this.model;
          this.made = (0, Ld.ef)(dd, 0, this.key, Jd, kd, pd)
        }
        return this.made
      }
      tailOf(dd) {
        const Jd = dd * Ld.wc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Jd || (this.tailCut = this.tail.subarray(0, Jd)), this.tailCut
      }
      sL(dd, Jd) {
        const {
          dirtyList: kd,
          isDirty: pd
        } = this;
        for (let Nd = dd; Nd < Jd; Nd++) 0 === pd[Nd] && (pd[Nd] = 1, kd.push(Nd))
      }
    }
    var EJ = kd(605);
    class cJ {
      constructor(dd) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: dd,
          owes: dd => {
            this.owing.add(dd)
          },
          settled: (dd, Jd) => {
            this.owing.delete(dd), Jd && this.live.delete(dd)
          }
        }
      }
      create(dd, Jd) {
        if (kd = dd, !EJ.n.includes(kd)) return null;
        var kd;
        const pd = new hJ(++this.keys, Kd.k.indexOf(dd), Jd, this.host);
        return this.live.add(pd), pd
      }
      disposeAll() {
        for (const dd of [...this.live]) dd.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const dd = this.host.cmd();
        for (const Jd of this.owing)
          if (!Jd.sync(dd)) return
      }
    }
    class hJ {
      constructor(dd, Jd, kd, pd) {
        this.key = dd, this.lifeform = Jd, this.scale = kd, this.host = pd, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.pL = !1, this.sync()
      }
      setPose(dd, Jd) {
        this.pL || (this.feet[0] = dd[0], this.feet[1] = dd[1], this.feet[2] = dd[2], this.yaw = Jd, this.owed |= 2, this.sync())
      }
      setVisible(dd) {
        this.pL || dd === this.visible || (this.visible = dd, this.owed |= 4, this.sync())
      }
      dispose() {
        this.pL || (this.pL = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(dd) ? (this.host.settled(this, this.pL), !0) : (this.host.owes(this), !1)
      }
      write(dd) {
        if (!dd) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, Ld.if)(dd, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Jd = (2 & this.owed ? Ld.Xc.Pose : 0) | (4 & this.owed ? Ld.Xc.Visible : 0);
        if (0 !== Jd) {
          if (!(0, Ld.gf)(dd, 0, this.key, Jd, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, Ld.ff)(dd, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var rJ = kd(41051);

    function uJ(dd, Jd, kd, pd) {
      return (0, rJ.b)(), (0, Ld.Qf)(dd, Jd, kd, pd)
    }
    var tJ = kd(39274),
      VJ = kd(40578);
    const zJ = [0, 0, 0],
      HJ = [0, 0, 0],
      wJ = [0, 0, 0],
      AJ = [0, 0, 0],
      dk = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Jk = [0, 0, 0],
      kk = [0, 0],
      pk = [1, 1, 1],
      Nk = 1 / 3;
    const Wk = KJ.f;

    function Pk(dd) {
      const Jd = KJ.d[dd],
        kd = Jd && KJ.f[Jd.mainMultiblock];
      return kd && {
        main: kd,
        x: Jd.compX,
        y: Jd.compY,
        z: Jd.compZ
      }
    }

    function Zk(dd) {
      if (null === dd || void 0 === dd) return Ld.gd;
      const Jd = +dd;
      return Number.isInteger(Jd) && Jd >= -2147483648 && Jd <= 2147483647 && String(Jd) === String(dd) ? Jd : Ld.gd
    }

    function gk(dd, Jd, kd) {
      return (0, Ld.Wf)(dd, 0, Jd, null !== kd && void 0 !== kd ? kd : Number.NaN)
    }
    class Ck {
      constructor(dd) {
        this.deps = dd, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new tJ.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (dd => {
          var Jd, kd;
          null === (Jd = (kd = this.deps).setLocalOptions) || void 0 === Jd || Jd.call(kd, dd)
        })), this.mobModels = new cJ((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          pL: (dd, Jd) => {
            this.livePools.delete(dd), null !== Jd && (this.owedFrees.push(Jd), this.flushOwed())
          }
        }, this.api = dd.api, this.live = dd.live, this.chunks = dd.chunks, this.items = dd.items, this.tables = dd.tables
      }
      isLocal(dd) {
        return null !== dd && void 0 !== dd && +dd === this.api.localId
      }
      assertLocal(dd, Jd) {
        if (!this.isLocal(dd)) throw new Error(`Attempted to ${Jd} for a player that is not the local player`)
      }
      yI(dd) {
        const Jd = this.api.yI(dd);
        if (!Jd) throw new Error(`Entity ${dd} has no replicated position`);
        return Jd
      }
      checkValid(dd) {
        return !!this.deps.isSessionLive() && (null === dd || void 0 === dd || this.api.checkValid(dd))
      }
      isAlive(dd) {
        return !1 !== this.api.isAlive(dd)
      }
      getItemStat(dd, Jd, kd) {
        return this.isLocal(dd) || null !== dd && "Player" === this.api.getEntityType(dd) ? this.tables.getItemStat(Jd, kd) : this.tables.getDefaultItemStat(Jd, kd)
      }
      getClientOption(dd, Jd) {
        return this.assertLocal(dd, "get a client option"), this.tables.getClientOption(Jd)
      }
      openShop(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(dd, "open shop"), Pd.j.nO("showShopFromServer", {
          toggle: Jd,
          zk: kd
        }, !0)
      }
      sendMessage(dd, Jd, kd) {
        this.assertLocal(dd, "send a message");
        const pd = "string" === typeof Jd ? [{
          str: Jd,
          style: kd
        }] : Jd;
        Pd.j.nO("chat", {
          content: pd
        }, !0)
      }
      getEntityType(dd) {
        return this.api.getEntityType(dd)
      }
      getEntityName(dd) {
        const Jd = Zk(dd);
        return Jd === Ld.gd ? void 0 : (0, yJ.g)(this.api, Jd)
      }
      hasEffect(dd, Jd) {
        const kd = Zk(dd);
        return kd !== Ld.gd && (0, yJ.c)(this.api, kd, Jd)
      }
      getMetaInfo(dd) {
        return this.tables.getMetaInfo(dd)
      }
      getPlayerDbId(dd) {
        return this.assertLocal(dd, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(dd, Jd, kd) {
        if (!this.chunks.dataCleared(dd, Jd, kd)) return (0, yJ.b)(this.api, dd, Jd, kd)
      }
      aY(dd, Jd, kd, pd) {
        this.setBlockId(dd, Jd, kd, this.tables.getItemId(pd))
      }
      setOtherEntitySetting(dd, Jd, kd, pd) {
        if (!this.isLocal(dd)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Ld.vd, kd)) throw new Error(`Unknown other-entity setting ${kd}`);
        const Nd = Ld.vd[kd],
          Wd = Zk(Jd);
        if (Wd === Ld.gd || !this.deps.beforeWrite()) return;
        const Pd = (0, nd.e)(pd);
        if (Pd.length > 16384) throw new Error(`The other-entity setting ${kd}'s value is over 16384 bytes`);
        const Zd = this.api.memoryView(Uint8Array, this.api.scratch(), Pd.length, "set_other_entity_setting's value");
        Zd && (Zd.set(Pd), this.api.queries.setOtherEntitySetting(Wd, Nd, Pd.length))
      }
      getPositionView(dd) {
        return this.live.position(+dd)
      }
      readDrawnPosition(dd, Jd) {
        return this.api.readDrawnPosition(Zk(dd), Jd)
      }
      getDrawnHeading(dd) {
        const Jd = Zk(dd),
          kd = (Jd === Ld.gd ? 0 : this.api.queries.directorEntity(Jd)) >= Ld.vb.BYTES ? this.api.memoryData(this.api.scratch(), Ld.vb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!kd) return null;
        if (1 === Ld.vb.headingIsDrawn(kd, 0)) return Ld.vb.heading(kd, 0);
        const pd = this.api.apiView;
        return this.isLocal(dd) && 0 === (Ld.u.playerFlags(pd, 0) & Ld.Ud.FreeCam) ? Ld.u.heading(pd, 0) : null
      }
      getLocalPlayerMovement() {
        const dd = Ld.u.playerFlags(this.api.apiView, 0);
        return 0 === (dd & Ld.Ud.Replay) && this.api.readDrawnPosition(this.api.localId, wJ) ? {
          onGround: 0 !== (dd & Ld.Ud.OnGround),
          jumpHeld: 0 !== (dd & Ld.Ud.JumpHeld)
        } : null
      }
      Pkd(dd) {
        return this.isLocal(dd) ? this.items.EC() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var dd, Jd;
        return "Gun" === (null === (dd = this.aliveHeld()) || void 0 === dd || null === (Jd = dd.typeObj) || void 0 === Jd ? void 0 : Jd.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.EC()
      }
      isCrosshairShown() {
        var dd, Jd;
        const kd = (0, lJ.e)(pd.d.get("crosshairGameView"), pd.d.get("crosshairShownOverride"));
        if (null !== kd) return kd;
        const Nd = null === (dd = this.aliveHeld()) || void 0 === dd ? void 0 : dd.typeObj,
          Wd = "Gun" === (null === Nd || void 0 === Nd ? void 0 : Nd.type),
          Pd = Wd || !0 === (null === Nd || void 0 === Nd ? void 0 : Nd.showsAimingUi),
          Zd = 0 === (Ld.u.playerFlags(this.api.apiView, 0) & Ld.Ud.ZoomFirstPerson),
          gd = null !== (Jd = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Jd ? Jd : null;
        return (0, lJ.j)({
          gun: Wd,
          aimable: Pd
        }, Zd, (0, QJ.e)(), gd)
      }
      setCrosshairShown(dd) {
        pd.d.set({
          crosshairShownOverride: dd
        })
      }
      getInventoryFreeSlotCount(dd) {
        return this.isLocal(dd) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(dd) {
        return this.isLocal(dd) ? this.items.selectedSlot : null
      }
      getItemSlot(dd, Jd) {
        return this.isLocal(dd) ? this.items.slot(Jd) : null
      }
      swapInventorySlots(dd, Jd) {
        return this.items.swap(dd, Jd)
      }
      isPlayerCrouching(dd) {
        if (this.isLocal(dd)) return 0 !== (Ld.u.playerFlags(this.api.apiView, 0) & Ld.Ud.Crouching);
        const Jd = Zk(dd);
        return Jd !== Ld.gd && 1 === this.api.queries.entityCrouching(Jd)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Ld.u.playerFlags(this.api.apiView, 0) & Ld.Ud.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Ddd()
      }
      getActionRay() {
        const dd = this.api.apiView;
        for (let Jd = 0; Jd < 3; Jd++) dk.origin[Jd] = Ld.u.NJd(dd, 0, Jd), dk.direction[Jd] = Ld.u.actionDir(dd, 0, Jd);
        return dk
      }
      canModifyBlockAt(dd, Jd, kd) {
        return 1 === this.api.queries.canModify(dd, Jd, kd)
      }
      isSolidToPlayerBlockId(dd) {
        return this.tables.isSolidBlockId(dd) && !this.chunks.isWalkThrough(dd)
      }
      blockNameToBlockId(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(dd, Jd)
      }
      blockIdToBlockName(dd) {
        return this.tables.nameOfId(dd)
      }
      MJd(dd, Jd, kd, pd, Nd) {
        return 1 === this.api.queries.terrainBlocked(pd, dd, Jd, kd, Zk(null !== Nd && void 0 !== Nd ? Nd : null))
      }
      getChunkVersion(dd, Jd, kd) {
        return this.chunks.version(dd, Jd, kd)
      }
      scanBlocks(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        return this.chunks.scan(dd, Jd, kd, pd, Nd, Wd, Pd, Zd)
      }
      isBlockInLoadedChunk(dd, Jd, kd) {
        return this.chunks.isLoaded(dd, Jd, kd)
      }
      getBlockId(dd, Jd, kd) {
        return this.chunks.NC(dd, Jd, kd)
      }
      playSound(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(dd)) return null;
        const Pd = this.playSoundFrom(Jd, kd, Nd, Wd);
        return 1 === pd ? Pd : Pd.rate(pd)
      }
      preloadSounds(dd) {
        var Jd, kd;
        null === (Jd = (kd = this.deps).preloadSounds) || void 0 === Jd || Jd.call(kd, dd)
      }
      playSoundFrom(dd, Jd, kd, pd) {
        var Nd, Wd;
        const Pd = this.deps.playSound;
        if (!Pd) return MJ.c;
        const Zd = null === kd || void 0 === kd ? void 0 : kd.Pk,
          gd = null !== (Nd = null === kd || void 0 === kd ? void 0 : kd.maxHearDist) && void 0 !== Nd ? Nd : oJ.f,
          Cd = null !== (Wd = null === kd || void 0 === kd ? void 0 : kd.refDistance) && void 0 !== Wd ? Wd : oJ.h;
        let Kd = null;
        if (Array.isArray(Zd)) zJ[0] = Zd[0], zJ[1] = Zd[1], zJ[2] = Zd[2], Kd = zJ;
        else if (void 0 !== Zd && null !== Zd) {
          const dd = Zk(Zd);
          if (!this.api.isLocal(dd)) {
            if (!this.api.readPosition(dd, zJ)) return MJ.c;
            Kd = zJ
          }
        }
        return Pd(dd, Jd, Kd, Kd && this.ear(), gd, Cd, pd)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, HJ)) HJ[1] += YJ;
        else {
          const dd = this.api.apiView;
          if (0 === Ld.u.viewProj(dd, 0, 3) && 0 === Ld.u.viewProj(dd, 0, 7) && 0 === Ld.u.viewProj(dd, 0, 11)) return null;
          for (let Jd = 0; Jd < 3; Jd++) HJ[Jd] = Ld.u.eye(dd, 0, Jd)
        }
        return Number.isFinite(HJ[0] + HJ[1] + HJ[2]) ? HJ : null
      }
      setBlockId(dd, Jd, kd, pd) {
        if (!Number.isInteger(pd) || pd < 0 || pd > 65535) throw new Error(`Invalid block id ${pd}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(dd, Jd, kd)) return;
        const Nd = Math.floor(dd),
          Wd = Math.floor(Jd),
          Pd = Math.floor(kd),
          Zd = this.predictedCells(Nd, Wd, Pd, pd);
        if (1 === this.api.queries.aY(Nd, Wd, Pd, pd)) {
          for (let dd = 0; dd < Zd.length; dd += 5) this.chunks.setOverlay(Zd[dd], Zd[dd + 1], Zd[dd + 2], Zd[dd + 3], 1 === Zd[dd + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(dd, Jd) {
        return this.deps.particles.create(dd, Jd)
      }
      playParticleEffect(dd) {
        this.deps.particles.playEffect(dd)
      }
      burstParticlePreset(dd, Jd, kd) {
        this.deps.particles.burstPreset(dd, Jd, kd)
      }
      createGameMesh(dd, Jd, kd) {
        const pd = ++this.meshKeys,
          Nd = this.deps.cmd();
        if (!Nd) return pd;
        const {
          look: Wd,
          colour: Pd
        } = function(dd) {
          switch (dd.kind) {
            case void 0:
            case "flatEmissive":
              return dd.onTop ? {
                look: Ld.ac.FlatOnTop,
                colour: [...dd.rgb, dd.alpha]
              } : dd.opaque ? {
                look: Ld.ac.FlatOpaque,
                colour: [...dd.rgb, 1]
              } : {
                look: Ld.ac.Flat,
                colour: [...dd.rgb, dd.alpha]
              };
            case "chevronPath":
              return {
                look: Ld.ac.Chevrons, colour: [...(0, LJ.b)(dd.colour), dd.alpha]
              };
            case "furnaceFire":
              return {
                look: Ld.ac.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Jd), Zd = Math.floor(dd.positions.length / 3), gd = function(dd, Jd) {
          const kd = Math.floor(dd.positions.length / 3),
            pd = dd.indices.length,
            Nd = kd * (Jd ? 5 : 3),
            Wd = new Uint8Array(4 * (Nd + pd)),
            Pd = new DataView(Wd.buffer);
          for (let Cd = 0; Cd < 3 * kd; Cd++) Pd.setFloat32(4 * Cd, dd.positions[Cd], !0);
          if (Jd) {
            var Zd;
            const Jd = null !== (Zd = dd.uvs) && void 0 !== Zd ? Zd : [];
            for (let dd = 0; dd < 2 * kd; dd++) {
              var gd;
              Pd.setFloat32(4 * (3 * kd + dd), null !== (gd = Jd[dd]) && void 0 !== gd ? gd : 0, !0)
            }
          }
          for (let Cd = 0; Cd < pd; Cd++) Pd.setUint32(4 * (Nd + Cd), dd.indices[Cd], !0);
          return Wd
        }(dd, (0, CJ.e)(Jd));
        return (0, Ld.Te)(Nd, 0, pd, Wd, Pd, kd, Zd, dd.indices.length, gd) && this.liveMeshes.add(pd), pd
      }
      setGameMesh(dd, Jd) {
        var kd;
        const pd = this.deps.cmd();
        if (!pd) return;
        let Nd = 0;
        Jd.anchor && (Nd |= Ld.cc.Anchor, Jk[0] = Jd.anchor[0], Jk[1] = Jd.anchor[1], Jk[2] = Jd.anchor[2]), void 0 !== Jd.visible && (Nd |= Ld.cc.Visible), Jd.uvOffset && (Nd |= Ld.cc.UvOffset, kk[0] = Jd.uvOffset[0], kk[1] = Jd.uvOffset[1]);
        const Wd = null !== (kd = Jd.visibility) && void 0 !== kd ? kd : 1;
        void 0 !== Jd.visibility && (Nd |= Ld.cc.Visibility), Jd.scale && (Nd |= Ld.cc.Scale, pk[0] = Jd.scale[0], pk[1] = Jd.scale[1], pk[2] = Jd.scale[2]), 0 !== Nd && (0, Ld.Xe)(pd, 0, dd, Nd, Jd.visible ? 1 : 0, Jk, kk, Wd, pk)
      }
      disposeGameMesh(dd) {
        const Jd = this.deps.cmd();
        Jd && !(0, Ld.We)(Jd, 0, dd) || this.liveMeshes.delete(dd)
      }
      hasPackModel(dd) {
        var Jd, kd, pd;
        return null !== (Jd = null === (kd = (pd = this.deps).hasPackModel) || void 0 === kd ? void 0 : kd.call(pd, dd)) && void 0 !== Jd && Jd
      }
      disposeGameOutput() {
        const dd = dd => {
          try {
            dd()
          } catch (Jd) {
            console.error("Error freeing client game output", Jd)
          }
        };
        for (const Jd of [...this.liveMeshes]) dd((() => {
          this.disposeGameMesh(Jd)
        }));
        for (const Jd of [...this.livePools]) dd((() => {
          Jd.dispose()
        }));
        dd((() => {
          this.mobModels.disposeAll()
        })), dd((() => {
          this.setGroundArrowStyle(null)
        })), dd((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), dd((() => {
          this.setCrosshairShown(null)
        })), dd((() => {
          this.cameraTurn.dispose()
        })), dd((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(dd, Jd) {
        const kd = this.tables.idOf(dd.item);
        if (void 0 === kd) return null;
        const pd = new TJ(++this.poolKeys, {
          item: kd,
          scale: dd.scale,
          yaw: dd.yaw
        }, Jd, this.poolHost);
        return this.livePools.add(pd), pd
      }
      createMobModel(dd, Jd) {
        return this.mobModels.create(dd, Jd)
      }
      setRouteChevrons(dd) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !dd || 0 === dd.cells.length) return;
        const Jd = `${dd.colour} ${dd.alpha}`;
        Jd !== this.routeLook && (this.routeLook = Jd, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(dd) {
          const [Jd, kd, pd] = dd[0].pos, Nd = [], Wd = [], Pd = [];
          return dd.forEach(((dd, Zd) => {
            let {
              pos: gd,
              way: [Cd, Kd]
            } = dd;
            const od = gd[0] - Jd + .5,
              ld = gd[1] - kd + .04,
              Qd = gd[2] - pd + .5,
              [Ld, Od] = [.35 * -Kd, .35 * Cd],
              [ed, Rd] = [Zd * Nk, (Zd + 1) * Nk],
              Id = Nd.length / 3;
            Nd.push(od - .5 * Cd + Ld, ld, Qd - .5 * Kd + Od), Nd.push(od - .5 * Cd - Ld, ld, Qd - .5 * Kd - Od), Nd.push(od + .5 * Cd + Ld, ld, Qd + .5 * Kd + Od), Nd.push(od + .5 * Cd - Ld, ld, Qd + .5 * Kd - Od), Wd.push(0, ed, 1, ed, 0, Rd, 1, Rd), Pd.push(Id, Id + 1, Id + 2, Id + 1, Id + 3, Id + 2)
          })), {
            positions: Nd,
            uvs: Wd,
            indices: Pd
          }
        }(dd.cells), {
          kind: "chevronPath",
          colour: dd.colour,
          alpha: dd.alpha
        }, dd.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(dd) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(dd, 250) / 1e3 * 1.2 * Nk) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(dd) {
        this.pendingStyle = dd, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const dd = this.owedFrees;
        if (0 === dd.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Jd = this.deps.cmd();
        if (!Jd) return dd.length = 0, void(this.pendingFar = void 0);
        let kd = 0;
        for (; kd < dd.length && (0, Ld.cf)(Jd, 0, dd[kd]);) kd++;
        dd.splice(0, kd);
        const pd = this.pendingStyle;
        if (void 0 !== pd) {
          (pd ? (0, Ld.Yf)(Jd, 0, pd.width, pd.alpha, 1, pd.endAtSolidFace ? 1 : 0) : (0, Ld.Yf)(Jd, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Nd = this.pendingFar;
        void 0 !== Nd && (0, Ld.Tf)(Jd, 0, null !== Nd && void 0 !== Nd ? Nd : 0, null === Nd ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(dd, Jd) {
        const kd = this.deps.cmd(),
          pd = Zk(dd);
        kd && pd !== Ld.gd && (0, Ld.fg)(kd, 0, pd, Jd)
      }
      setFacingTolerance(dd, Jd) {
        const kd = this.deps.cmd(),
          pd = Zk(dd);
        kd && pd !== Ld.gd && gk(kd, pd, Jd)
      }
      forEachEntity(dd) {
        const {
          api: Jd
        } = this;
        for (let kd = 0; kd < Jd.idStr.length; kd++) {
          const pd = Jd.idStr[kd];
          null === pd || xd(Jd.kinds[kd]) || dd(pd)
        }
      }
      getEntityInfo(dd) {
        return this.deps.entityInfo.get(dd)
      }
      isEntityInteractable(dd) {
        const Jd = Zk(dd);
        return Jd !== Ld.gd && 1 === this.api.queries.entityInteractable(Jd)
      }
      isLocalPlayer(dd) {
        return this.isLocal(dd)
      }
      getLineOwner(dd) {
        var Jd;
        const kd = null === (Jd = this.deps.entityInfo.get(dd)) || void 0 === Jd ? void 0 : Jd.meshOpts;
        if (!kd) return null;
        try {
          const {
            lineToEId: dd
          } = JSON.parse(kd);
          return null !== dd && void 0 !== dd ? dd : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const dd = this.api.apiView;
        return AJ[0] = Ld.u.eye(dd, 0, 0), AJ[1] = Ld.u.eye(dd, 0, 1), AJ[2] = Ld.u.eye(dd, 0, 2), AJ
      }
      getCameraFar() {
        return Ld.u.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(dd) {
        null !== dd && (this.farSet = !0), this.pendingFar = dd, this.flushOwed()
      }
      turnCamera(dd, Jd) {
        this.cameraTurn.turn(dd, Jd)
      }
      clearPickupDelay(dd) {
        const Jd = this.deps.cmd(),
          kd = Zk(dd);
        Jd && kd !== Ld.gd && (0, Ld.Ee)(Jd, 0, kd)
      }
      sendChat(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = this.deps.sendCmd();
        kd && uJ(kd, 0, VJ.e.Chat, (0, nd.e)((0, VJ.i)({
          IC: dd,
          vC: Jd
        })))
      }
      sendCommand(dd) {
        dd.length <= 119 && this.sendChat(`/${dd}`)
      }
      predictedCells(dd, Jd, kd, pd) {
        const Nd = this.chunks,
          Wd = [],
          Pd = (dd, Jd, kd, pd, Nd) => {
            Wd.push(dd, Jd, kd, pd, this.tables.blockRootId(Nd) === this.tables.blockRootId(pd) ? 0 : 1)
          },
          Zd = Nd.NC(dd, Jd, kd),
          gd = Pk(Zd);
        if (gd) {
          const [pd, Wd, Cd] = [dd - gd.x, Jd - gd.y, kd - gd.z], Kd = Wk[Nd.NC(pd, Wd, Cd)], od = null === Kd || void 0 === Kd ? void 0 : Kd.positions.some((dd => dd.id === Zd && dd.x === gd.x && dd.y === gd.y && dd.z === gd.z));
          for (const dd of (od && Kd ? Kd : gd.main).positions) Nd.NC(pd + dd.x, Wd + dd.y, Cd + dd.z) === dd.id && Pd(pd + dd.x, Wd + dd.y, Cd + dd.z, 0, dd.id)
        }
        const Cd = Pk(pd);
        if (Cd)
          for (const od of Cd.main.positions) {
            const [pd, Wd, Zd] = [dd + od.x - Cd.x, Jd + od.y - Cd.y, kd + od.z - Cd.z];
            Pd(pd, Wd, Zd, od.id, Nd.NC(pd, Wd, Zd))
          } else Pd(dd, Jd, kd, pd, Zd);
        const Kd = this.tables;
        if ((0 !== Kd.attachedTopOf(Zd) || 0 !== Kd.attachedTopOf(pd)) && Nd.isLoaded(dd, Jd + 1, kd)) {
          let gd = Nd.NC(dd, Jd + 1, kd);
          for (let pd = 0; pd < Wd.length; pd += 5) Wd[pd] === dd && Wd[pd + 1] === Jd + 1 && Wd[pd + 2] === kd && (gd = Wd[pd + 3]);
          const Cd = this.attachedTopWrite(Zd, pd, gd);
          void 0 !== Cd && Pd(dd, Jd + 1, kd, Cd, gd)
        }
        return Wd
      }
      attachedTopWrite(dd, Jd, kd) {
        const pd = this.tables,
          Nd = pd.attachedTopOf(dd),
          Wd = pd.attachedTopOf(Jd),
          Pd = 0 !== Nd && 0 !== kd && pd.blockRootId(kd) === pd.blockRootId(Nd);
        return 0 !== Nd && 0 !== Wd && pd.blockRootId(dd) === pd.blockRootId(Jd) ? Pd && kd !== Wd ? Wd : void 0 : 0 === Wd || !Pd && 0 !== kd ? Pd ? 0 : void 0 : Wd
      }
    }
    const Kk = Ld.tc + Ld.uc * Ld.Bc.BYTES,
      lk = 2147483647,
      Qk = new TextDecoder,
      Lk = new TextEncoder,
      Ok = Object.freeze({
        LC: 0,
        wg: null,
        amountAddedToSlot: 0
      }),
      ek = new Proxy({}, {
        get: () => () => Ld.sd
      });

    function Rk(dd) {
      return Number.isInteger(dd) && dd >= 0 && dd <= 65535
    }

    function Ik(dd) {
      return Number.isInteger(dd) && dd >= 0 && dd <= 4294967295
    }
    class Gk {
      constructor(dd) {
        this.deps = dd, this.zd = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Ld.uc), this.ids = new Uint16Array(Ld.uc), this.amounts = new Uint16Array(Ld.uc), this.attrRead = new Float64Array(Ld.uc).fill(-1), this.stale = new Uint16Array(Ld.uc), this.staleVersion = new Uint32Array(Ld.uc), this.instances = new Uint32Array(Ld.uc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(dd) {
        var Jd;
        return Number.isInteger(dd) && dd >= 0 && dd < this.len && 0 !== this.ids[dd] && null !== (Jd = this.facades[dd]) && void 0 !== Jd ? Jd : null
      }
      EC() {
        return this.slot(this.selected)
      }
      playerItems() {
        const dd = [];
        for (let Jd = 0; Jd < Math.min(Ld.Dd, this.len); Jd++) dd.push(this.slot(Jd));
        return dd
      }
      freeSlots() {
        let dd = 0;
        for (let Jd = 0; Jd < Math.min(Ld.Dd - Ld.h, this.len); Jd++) 0 === this.ids[Jd] && dd++;
        return dd
      }
      amountOf(dd) {
        let Jd = 0;
        for (let pd = 0; pd < Math.min(Ld.Dd, this.len); pd++) {
          const Nd = this.slot(pd);
          var kd;
          if ((null === Nd || void 0 === Nd ? void 0 : Nd.name) === dd) Jd += null !== (kd = Nd.amount) && void 0 !== kd ? kd : 1
        }
        return Jd
      }
      instance(dd) {
        var Jd;
        return null !== (Jd = this.instances[dd]) && void 0 !== Jd ? Jd : 0
      }
      watch(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      touch() {
        this.version++
      }
      flush(dd) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const kd of [...this.listeners]) try {
            kd()
          } catch (Jd) {
            dd(Jd)
          }
        }
      }
      chestOpened(dd, Jd, kd) {
        this.zd[0] = dd, this.zd[1] = Jd, this.zd[2] = kd, this.version++
      }
      refresh() {
        const dd = this.deps.api.apiView,
          Jd = Ld.u.inventoryViewPtr(dd, 0),
          kd = Ld.u.inventoryVersion(dd, 0),
          pd = Ld.u.selectedSlot(dd, 0);
        pd !== this.selected && (this.selected = pd, this.version++);
        const Nd = Ld.u.slotIcon(dd, 0);
        if (Nd !== this.slotIconId && (this.slotIconId = Nd, this.iconChanged = !0), Jd === this.viewPtr && kd === this.viewVersion) return;
        this.viewPtr = Jd, this.viewVersion = kd;
        const Wd = this.deps.api.memoryData(Jd, Kk, 4, "the inventory view"),
          Pd = Wd ? Math.min(Wd.getUint32(0, !0), Ld.uc) : 0;
        Pd !== this.len && (this.len = Pd, this.version++);
        let Zd = 0;
        for (let gd = 0; gd < Ld.uc; gd++) {
          const dd = Ld.tc + gd * Ld.Bc.BYTES,
            Jd = null !== Wd && gd < Pd ? Ld.Bc.item(Wd, dd) : 0;
          if (0 === Jd || null === Wd) {
            0 !== this.ids[gd] && (this.ids[gd] = 0, this.attrRead[gd] = -1, this.instances[gd]++, this.version++);
            continue
          }
          const kd = Ld.Bc.amount(Wd, dd),
            pd = Ld.Bc.attrVersion(Wd, dd);
          Jd === this.ids[gd] && kd === this.amounts[gd] || this.fill(gd, Jd, kd), pd !== this.attrRead[gd] && (this.stale[Zd] = gd, this.staleVersion[Zd] = pd, Zd++)
        }
        Zd > 0 && this.fetchAttributes(Zd)
      }
      fill(dd, Jd, kd) {
        const {
          tables: pd
        } = this.deps, Nd = Jd !== this.ids[dd];
        let Wd = this.facades[dd];
        Wd || (Wd = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[dd] = Wd), Nd && (Wd.name = pd.nameOfId(Jd), Wd.typeObj = pd.itemType(Jd), Wd.attributes = {
          customAttributes: {}
        }, this.attrRead[dd] = -1, this.instances[dd]++), Wd.amount = 0 === kd ? null : kd, this.ids[dd] = Jd, this.amounts[dd] = kd, this.version++
      }
      fetchAttributes(dd) {
        const {
          api: Jd,
          onError: kd
        } = this.deps, pd = Jd.memoryView(Uint16Array, Jd.scratch(), dd, "item_attributes_batch's slots");
        if (!pd) return void this.markRead(dd);
        pd.set(this.stale.subarray(0, dd));
        const Nd = Jd.queries.itemAttributesBatch(dd),
          Wd = 4294967295 === Nd ? null : Jd.memoryData(Jd.scratch(), Nd, 4, "item_attributes_batch's answer");
        if (!Wd) return void this.markRead(dd);
        const Pd = new Uint8Array(Wd.buffer, Wd.byteOffset, Nd);
        for (let gd = 0; gd + 8 <= Nd;) {
          const dd = Wd.getUint16(gd, !0),
            Jd = Wd.getUint32(gd + 4, !0),
            pd = Pd.subarray(gd + 8, gd + 8 + Jd);
          gd += 8 + (0, ld.xe)(Jd);
          const Nd = this.facades[dd];
          if (Nd && 0 !== this.ids[dd] && 0 !== Jd) {
            try {
              Nd.attributes = JSON.parse(Qk.decode(pd))
            } catch (Zd) {
              kd(Zd)
            }
            this.version++
          }
        }
        this.markRead(dd)
      }
      markRead(dd) {
        for (let Jd = 0; Jd < dd; Jd++) this.attrRead[this.stale[Jd]] = this.staleVersion[Jd]
      }
      swap(dd, Jd) {
        return Rk(dd) && Rk(Jd) && this.settle(this.queries().invSwap(dd, Jd))
      }
      move(dd, Jd, kd) {
        return Rk(dd) && Rk(Jd) && Ik(kd) && this.settle(this.queries().invMove(dd, Jd, kd))
      }
      quickMove(dd, Jd, kd, pd) {
        var Nd, Wd;
        if (!Rk(dd) || !Rk(Jd) || !Rk(kd) || null !== pd && !Ik(pd)) return null;
        const Pd = this.queries().invQuickMove(dd, Jd, kd, null === pd ? -1 : Math.min(pd, lk)),
          Zd = Pd === Ld.sd ? Ld.Mb : null !== (Nd = null === (Wd = this.extras()) || void 0 === Wd ? void 0 : Wd[1]) && void 0 !== Nd ? Nd : Ld.Mb;
        return this.settle(Pd), Zd === Ld.Mb ? null : Zd
      }
      remove(dd, Jd, kd) {
        return Rk(dd) && Ik(Jd) && this.settle(this.queries().invRemove(dd, Jd, kd ? 1 : 0))
      }
      selectSlot(dd) {
        return Rk(dd) && this.settle(this.queries().selectSlot(dd))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(dd, Jd, kd) {
        if (!Rk(dd) || !Number.isInteger(Jd)) return !1;
        const [pd, Nd, Wd] = kd;
        return this.settle(this.queries().invEnchant(dd, Jd, Math.floor(pd), Math.floor(Nd), Math.floor(Wd)))
      }
      craft(dd, Jd, kd) {
        let pd;
        try {
          pd = this.deps.tables.getItemId(dd)
        } catch {
          return Ok
        }
        if (!Rk(Jd) || null !== kd && (Number.isNaN(kd) || kd < 0)) return Ok;
        const Nd = null === kd || kd > lk ? -1 : Math.floor(kd),
          Wd = this.queries().craft(pd, Jd, Nd);
        let Pd = Ok;
        const Zd = Wd === Ld.sd ? null : this.extras();
        if (Zd) {
          const [dd, Jd, kd] = Zd;
          Pd = {
            LC: dd,
            wg: Jd === Ld.Mb ? null : Jd,
            amountAddedToSlot: kd
          }
        }
        return this.settle(Wd), Pd
      }
      salvage(dd, Jd, kd) {
        let pd;
        try {
          pd = this.deps.tables.getItemId(Jd)
        } catch {
          return !1
        }
        return Rk(dd) && Number.isInteger(kd) && this.settle(this.queries().salvage(dd, pd, Math.max(Math.min(kd, lk), -lk)))
      }
      craftingView(dd, Jd, kd) {
        var pd;
        if (this.stopped) return null;
        const {
          api: Nd,
          onError: Wd
        } = this.deps, Pd = dd ? Lk.encode(dd) : null;
        if (null !== Pd) {
          if (Pd.length > 1024) return Wd(new Error(`The crafting station ${dd}'s name is over 1024 bytes`)), null;
          const Jd = Nd.memoryView(Uint8Array, Nd.scratch(), Pd.length, "crafting_view's station");
          if (!Jd) return null;
          Jd.set(Pd)
        }
        const Zd = Rk(Jd) && Rk(kd),
          gd = Nd.queries.craftingView(null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.length) && void 0 !== pd ? pd : 0, Zd ? Jd : 0, Zd ? kd : 0);
        return gd < Ld.nb.BYTES ? (Nd.reportCorruption(`crafting_view's answer of ${gd} bytes`), null) : Nd.memoryData(Nd.scratch(), gd, 1, "crafting_view's answer")
      }
      queries() {
        var dd, Jd;
        return !1 === (null === (dd = (Jd = this.deps).beforeOp) || void 0 === dd ? void 0 : dd.call(Jd)) ? (this.stopped = !0, ek) : this.deps.api.queries
      }
      extras() {
        const {
          api: dd
        } = this.deps;
        return dd.memoryView(Uint32Array, dd.scratch(), 3, "a sync query's extra words")
      }
      settle(dd) {
        if (dd === Ld.pd)(0, rJ.b)();
        else if (dd !== Ld.sd) {
          const Jd = this.deps.cmd();
          Jd && function(dd, Jd, kd) {
            return (0, rJ.b)(), (0, Ld.qg)(dd, Jd, kd)
          }(Jd, 0, dd) || this.deps.onError(new Error(`Sync op ${dd}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), dd !== Ld.sd
      }
    }
    const vk = 1 / .6,
      xk = [0, 1, 0],
      qk = [0, 0, 0],
      Bk = new Uint8Array(0),
      sk = 1.2 * OJ.g.yR,
      ik = new TextEncoder,
      ak = [0, 0, 0],
      Mk = [0, 0, 0],
      Fk = new Map;

    function Yk(dd) {
      let Jd = Fk.get(dd);
      return Jd || (Fk.size >= 64 && Fk.clear(), Jd = ik.encode(`{"emitRate":${dd}}`), Fk.set(dd, Jd)), Jd
    }

    function mk(dd) {
      return Number.isFinite(dd) && dd > 0 ? dd : 0
    }

    function bk(dd, Jd) {
      for (let kd = 0; kd < 3; kd++) {
        const pd = Math.abs(Jd[kd]);
        ak[kd] = dd[kd] - pd, Mk[kd] = 2 * pd
      }
      return Number.isFinite(ak[0] + ak[1] + ak[2] + Mk[0] + Mk[1] + Mk[2])
    }

    function Sk(dd, Jd) {
      return "pos1" === dd || "pos2" === dd ? void 0 : Jd
    }

    function jk(dd, Jd, kd) {
      return dd.length > Ld.Rd.MaxOpts ? (kd(new Error(`${Jd}'s particle opts are over ${Ld.Rd.MaxOpts} bytes of JSON`)), null) : dd
    }
    const Xk = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class fk {
      constructor(dd) {
        this.deps = dd, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(dd, Jd) {
        var kd;
        const pd = this.sink(),
          Nd = null !== (kd = Jd.half) && void 0 !== kd ? kd : qk;
        if (!pd || this.live >= Ld.Rd.MaxLiveKeys || this.nextKey > Ld.Rd.MaxKey || !bk(Jd.pos, Nd)) return Xk;
        const Wd = this.nextKey,
          Pd = jk(function(dd) {
            var Jd, kd, pd;
            const Nd = JSON.stringify({
              texture: "string" === typeof dd.texture ? dd.texture : "smokePuff",
              oo: dd.oo,
              minLifeTime: dd.minLifeTime,
              maxLifeTime: dd.maxLifeTime,
              minSize: dd.minSize,
              maxSize: dd.maxSize,
              minEmitPower: dd.minEmitPower,
              maxEmitPower: dd.maxEmitPower,
              emitRate: mk(dd.emitRate),
              gravity: null !== (Jd = dd.gravity) && void 0 !== Jd ? Jd : qk,
              dir1: null !== (kd = dd.dir1) && void 0 !== kd ? kd : xk,
              dir2: null !== (pd = dd.dir2) && void 0 !== pd ? pd : xk,
              colorGradients: dd.colorGradients,
              blendMode: dd.blendMode
            });
            return ik.encode(Nd)
          }(dd), "createParticles", this.deps.onError);
        return Pd && (0, Ld.tf)(pd, 0, Wd, 0, Ld.Rd.PresetNone, 0, ak, Mk, Pd) ? (this.nextKey++, this.live++, this.started = !0, new nk(this, this.session, Wd, dd, Nd)) : Xk
      }
      playEffect(dd) {
        const Jd = this.sink(),
          {
            pos1: kd,
            pos2: pd
          } = dd;
        if (!Jd || !kd || !pd) return;
        for (let Wd = 0; Wd < 3; Wd++) ak[Wd] = Math.min(kd[Wd], pd[Wd]), Mk[Wd] = Math.abs(pd[Wd] - kd[Wd]);
        if (!Number.isFinite(ak[0] + ak[1] + ak[2] + Mk[0] + Mk[1] + Mk[2])) return;
        const Nd = jk(ik.encode(JSON.stringify(dd, Sk)), "playParticleEffect", this.deps.onError);
        Nd && (0, Ld.nf)(Jd, 0, 0, Ld.Rd.PresetNone, Ld.Rd.HasBox, 0, ak, Mk, Nd)
      }
      burstPreset(dd, Jd, kd) {
        const pd = this.sink(),
          Nd = Math.min(Math.floor(kd), Ld.Rd.MaxBurst);
        if (!pd || !Object.hasOwn(Ld.ec, dd) || !(Nd > 0)) return;
        const Wd = sk;
        for (let Pd = 0; Pd < 3; Pd++) ak[Pd] = Jd[Pd] - Wd / 2, Mk[Pd] = Wd;
        Number.isFinite(ak[0] + ak[1] + ak[2]) && (0, Ld.nf)(pd, 0, 0, Ld.ec[dd], Ld.Rd.HasBox, Nd, ak, Mk, Bk)
      }
      sessionEnded() {
        this.session++;
        const dd = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !dd || (0, Ld.xf)(dd, 0)
      }
      sinkFor(dd) {
        return dd === this.session ? this.deps.cmd() : null
      }
      stop(dd, Jd) {
        const kd = this.sinkFor(dd);
        kd && (0, Ld.yf)(kd, 0, Jd) && this.live--
      }
    }
    class nk {
      constructor(dd, Jd, kd, pd, Nd) {
        this.owner = dd, this.session = Jd, this.key = kd, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Nd[0]), Math.abs(Nd[1]), Math.abs(Nd[2])], this.rate = mk(pd.emitRate), this.emitted = this.rate > 0;
        const Wd = pd.maxLifeTime * vk * 1e3 + 250;
        this.stopDelayMs = Wd >= 0 ? Math.min(Wd, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(dd, Jd) {
        const kd = this.sink();
        if (kd) {
          if (Jd)
            for (let dd = 0; dd < 3; dd++) this.half[dd] = Math.abs(Jd[dd]);
          bk(dd, this.half) && (0, Ld.Bf)(kd, 0, this.key, Ld.Rd.HasBox, ak, Mk, Bk)
        }
      }
      setEmitRate(dd) {
        const Jd = this.sink(),
          kd = mk(dd);
        Jd && kd !== this.rate && (0, Ld.Bf)(Jd, 0, this.key, 0, qk, qk, Yk(kd)) && (this.rate = kd, this.emitted ||= kd > 0)
      }
      emit(dd) {
        const Jd = this.sink(),
          kd = Math.min(Math.floor(dd), Ld.Rd.MaxBurst);
        Jd && kd > 0 && (0, Ld.nf)(Jd, 0, this.key, Ld.Rd.PresetNone, 0, kd, qk, qk, Bk) && (this.emitted = !0)
      }
      emitPoints(dd, Jd, kd) {
        const pd = this.sink(),
          Nd = Math.min(Math.floor(kd), Ld.Rd.MaxPoints, Math.floor(Jd.length / 4));
        if (!pd || !(Nd > 0) || !Number.isFinite(dd[0] + dd[1] + dd[2])) return;
        const Wd = new Uint8Array(Jd.buffer, Jd.byteOffset, Nd * Ld.Rd.PointBytes);
        (0, Ld.rf)(pd, 0, this.key, Nd, dd, Wd) && (this.emitted = !0)
      }
      setDirections(dd, Jd) {
        const kd = this.sink();
        if (!kd || !Number.isFinite(dd[0] + dd[1] + dd[2] + Jd[0] + Jd[1] + Jd[2])) return;
        const pd = ik.encode(JSON.stringify({
          dir1: [dd[0], dd[1], dd[2]],
          dir2: [Jd[0], Jd[1], Jd[2]]
        }));
        (0, Ld.Bf)(kd, 0, this.key, 0, qk, qk, pd)
      }
      stop() {
        const dd = this.sink();
        this.stopped = !0, dd && (this.emitted ? (this.rate > 0 && (0, Ld.Bf)(dd, 0, this.key, 0, qk, qk, Yk(0)), setTimeout((() => {
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
    const Uk = EJ.q,
      yk = new TextDecoder;

    function Dk(dd, Jd) {
      const {
        serverIds: kd,
        kinds: pd
      } = dd;
      let Nd = 0;
      for (let Wd = 0; Wd < kd.length; Wd++) {
        const dd = kd[Wd];
        if (dd !== Ld.gd && !xd(pd[Wd])) {
          if (Nd === Jd.length) {
            const dd = new Int32Array(Math.max(64, 2 * Nd));
            dd.set(Jd), Jd = dd
          }
          Jd[Nd++] = dd
        }
      }
      return {
        ids: Jd,
        count: Nd
      }
    }

    function Tk(dd, Jd) {
      return dd.length >= Jd ? dd : new Int32Array(Math.max(Jd, 2 * dd.length))
    }

    function Ek(dd, Jd, kd, pd) {
      for (let Nd = 0; Nd < kd; Nd += 4096) {
        const Wd = Math.min(4096, kd - Nd),
          Pd = dd.memoryView(Int32Array, dd.scratch(), Wd, "entity_info_batch's ids");
        if (!Pd) return !1;
        Pd.set(Jd.subarray(Nd, Nd + Wd));
        const Zd = dd.queries.entityInfoBatch(Wd),
          gd = 4294967295 === Zd ? null : dd.memoryData(dd.scratch(), Zd, 4, "entity_info_batch's records");
        if (!gd) return !1;
        for (let dd = 0; dd + Ld.Ub.BYTES <= Zd;) {
          const Jd = Ld.Ub.len(gd, dd);
          pd(Ld.Ub.serverId(gd, dd), ck(gd, dd, Jd)), dd += Ld.Ub.BYTES + (0, ld.xe)(Jd)
        }
      }
      return !0
    }

    function ck(dd, Jd, kd) {
      var pd, Nd, Wd;
      const Pd = Ld.Ub.kind(dd, Jd),
        Zd = 0 === Pd ? null : qd(Pd);
      if (null === Zd) return null;
      const gd = Ld.Ub.variation(dd, Jd),
        Cd = Ld.Ub.pose(dd, Jd),
        Kd = Ld.Ub.meta(dd, Jd),
        od = Ld.Ub.mesh(dd, Jd),
        ld = 0 !== (Ld.Ub.flags(dd, Jd) & Ld.Qb.HasOpts),
        Qd = Uk[Zd];
      return Object.freeze({
        type: Zd,
        variation: gd === Ld.ld ? void 0 : null !== (pd = null !== (Nd = null === Qd || void 0 === Qd ? void 0 : Qd[gd]) && void 0 !== Nd ? Nd : null === Qd || void 0 === Qd ? void 0 : Qd[0]) && void 0 !== pd ? pd : "default",
        pose: Cd === Ld.qc ? void 0 : null !== (Wd = Ld.Kb[Cd]) && void 0 !== Wd ? Wd : Ld.Kb[0],
        metaInfo: Kd === Ld.qc ? void 0 : Ld.Wc[Kd],
        meshKind: od === Ld.qc ? void 0 : Ld.Tc[od],
        meshOpts: ld ? yk.decode(new Uint8Array(dd.buffer, dd.byteOffset + Jd + Ld.Ub.BYTES, kd)) : void 0
      })
    }
    const hk = 1,
      rk = 2;
    class uk {
      constructor(dd) {
        this.deps = dd, this.wanted = 0, this.EC = !1, this.refused = !1
      }
      get on() {
        return this.EC
      }
      want(dd, Jd) {
        this.wanted = Jd ? this.wanted | dd : this.wanted & ~dd;
        const kd = 0 !== this.wanted;
        if (kd === this.EC) return;
        const pd = this.deps.cmd();
        null !== pd ? (0, Ld.vg)(pd, 0, kd ? 1 : 0) ? (this.EC = kd, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.EC = !1
      }
    }
    class tk {
      constructor(dd) {
        this.deps = dd, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(dd) {
        var Jd;
        return this.complete || this.fill(), null !== (Jd = this.entries.get("string" === typeof dd ? dd : String(dd))) && void 0 !== Jd ? Jd : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(dd) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const dd = new Int32Array(2 * this.pending.length);
            dd.set(this.pending), this.pending = dd
          }
          this.pending[this.pendingCount++] = dd
        }
      }
      removed(dd) {
        this.entries.size > 0 && this.entries.delete(String(dd))
      }
      refresh() {
        const dd = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (dd > 0 && this.complete) {
          const {
            api: Jd
          } = this.deps;
          let kd = 0;
          const pd = this.ids = Tk(this.ids, dd);
          for (let Nd = 0; Nd < dd; Nd++) {
            const dd = this.pending[Nd],
              Wd = Jd.indexById.get(dd);
            void 0 === Wd || xd(Jd.kinds[Wd]) ? this.entries.delete(String(dd)) : pd[kd++] = dd
          }
          kd > 0 && !this.batch(pd, kd) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(hk, !1)
      }
      fill() {
        const {
          api: dd
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: dd
          } = this.deps, Jd = dd.on;
          dd.want(hk, !0), !Jd && dd.on && (this.refill = this.midFrame)
        }
        const {
          ids: Jd,
          count: kd
        } = Dk(dd, this.ids);
        this.ids = Jd, kd > 0 && !this.batch(Jd, kd) && (this.refill = !0)
      }
      batch(dd, Jd) {
        return Ek(this.deps.api, dd, Jd, ((dd, Jd) => {
          null === Jd ? this.entries.delete(String(dd)) : this.entries.set(String(dd), Jd)
        }))
      }
    }
    var Vk = kd(4688);

    function zk(dd) {
      if ("message" !== dd.type || dd.IC !== Vk.ac.NewClientOptions || dd.payloadKind !== ld.ic.Msgpack) return null;
      const Jd = (0, nd.c)(dd.payload);
      if (null === Jd || "object" !== typeof Jd || Array.isArray(Jd)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Jd
    }
    var Hk = kd(1260),
      wk = kd(36798);

    function Ak(dd, Jd, kd, pd, Nd, Wd, Zd) {
      var gd, Cd, Kd;
      switch (dd) {
        case Ld.pe.ToggleMenu: {
          const dd = Ld.K[Jd];
          Pd.j.nO("toggleMenu", void 0 === dd ? "inventory" : `inventory|${dd}`);
          break
        }
        case Ld.pe.EditBoard:
          Pd.j.nO("EditBoard", {
            pos: 0 === Jd ? null : kd
          });
          break;
        case Ld.pe.EditCodeBlock:
        case Ld.pe.ViewCodeBlock:
          Pd.j.nO("EditCodeBlock", {
            pos: kd,
            canChangePos: dd === Ld.pe.EditCodeBlock
          });
          break;
        case Ld.pe.EditCustomLobbyBlock:
          Pd.j.nO("EditCustomLobbyBlock", {
            pos: kd
          });
          break;
        case Ld.pe.OpenIronChest:
          Pd.j.nO("OpenIronChest", {
            pos: kd
          });
          break;
        case Ld.pe.EditNameTag:
          Pd.j.nO("EditNameTag", null !== (gd = null === (Cd = Nd.EC()) || void 0 === Cd || null === (Kd = Cd.attributes.customAttributes) || void 0 === Kd ? void 0 : Kd.text) && void 0 !== gd ? gd : "");
          break;
        case Ld.pe.EditBook: {
          var od, ld, Od;
          const dd = null === (od = Nd.EC()) || void 0 === od ? void 0 : od.attributes;
          Pd.j.nO("EditBook", {
            pages: (0, Hk.Q)(null === dd || void 0 === dd || null === (ld = dd.customAttributes) || void 0 === ld ? void 0 : ld.pages),
            title: null !== (Od = null === dd || void 0 === dd ? void 0 : dd.customDisplayName) && void 0 !== Od ? Od : "Title",
            isPublished: !(null === dd || void 0 === dd || !dd.customDescription)
          });
          break
        }
        case Ld.pe.CantChangeBlock:
          ! function(dd, Jd) {
            const kd = Jd.getClientOption("cantChangeError"),
              pd = Jd.getClientOption(dd ? "cantBuildError" : "cantBreakError"),
              Nd = dd ? kd : pd;
            (Jd.getClientOption("canChange") || Nd || "You cannot modify this block" !== kd) && Pd.j.nO("showBottomMessage", {
              message: pd || kd,
              type: "Error"
            })
          }(1 === Jd, Wd);
          break;
        case Ld.pe.MiddleBarStart:
          Pd.j.nO("middleScreenBarInitiate", {
            duration: pd,
            OJ: 1 === kd[0],
            horizBarRemOffset: Jd
          });
          break;
        case Ld.pe.MiddleBarStop:
          Pd.j.nO("middleScreenBarRemove");
          break;
        case Ld.pe.Hitmarker:
          Pd.j.nO("localGunHitmarker", {
            Fd: 1 === Jd
          });
          break;
        case Ld.pe.ShotsLeft:
          Pd.j.nO("localPlayerNewShotsLeft", pd);
          break;
        case Ld.pe.AimingOverlay:
          Pd.j.nO("aimingOverlay", 3 === (3 & Jd) ? "sniper" : "none");
          break;
        case Ld.pe.BottomMessage:
          Pd.j.nO("showBottomMessage", JSON.parse(Zd()));
          break;
        case Ld.pe.Crosshair:
          Nd.inaccuracy = (0, Ud.g)(pd), (0, wk.e)().crosshairAccuracy(Nd.inaccuracy);
          break;
        case Ld.pe.ChargeStage:
          break;
        case Ld.pe.EmoteWheelClose:
          Pd.j.nO("requestEmoteWheelClose");
          break;
        case Ld.pe.BlockMined:
          Pd.j.nO("localBlockMined");
          break;
        default:
          throw new Qd.e(`UiEvent of no kind: what ${dd}`)
      }
    }
    var dp = kd(38186),
      Jp = kd(9247),
      kp = kd(1964),
      pp = kd(36981),
      Np = kd(9252),
      Wp = kd(4666);
    const Pp = 10,
      Zp = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      gp = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Cp = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Kp(dd, Jd) {
      let kd, pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Wd = () => (kd = (0, kp.s)(kd, Jd()), kd);
      return {
        current: Wd,
        watch(Jd) {
          const kd = () => {
              Jd(Wd())
            },
            Pd = [dd.watch(kd)];
          return null !== pd && Pd.push((0, kp.w)((dd => {
            dd.some(pd) && kd()
          }))), null !== Nd && Pd.push(Nd(kd)), () => {
            for (const dd of Pd) dd()
          }
        }
      }
    }

    function op(dd) {
      return dd && {
        name: dd.name,
        amount: dd.amount,
        attributes: dd.attributes
      }
    }
    const lp = new WeakMap;

    function Qp(dd) {
      let Jd = lp.get(dd);
      return void 0 === Jd && (Jd = (0, Np.creativeItemIds)().map((Jd => ({
        name: dd.nameOfId(Jd),
        amount: dd.isStackableId(Jd) ? 1 : null,
        attributes: (0, dp.e)("Gun" === (0, Np.itemTypeOf)(Jd) ? {
          type: "Gun",
          clipSize: (0, Np.clipSizeOf)(Jd)
        } : void 0)
      }))), lp.set(dd, Jd)), Jd
    }

    function Lp(dd, Jd, kd, pd) {
      const Nd = Jd => (dd.flush(pd), Jd),
        Wd = kd => {
          var pd, Nd, Wd, Pd, Zd, gd, Cd;
          const Kd = dd.slot(kd);
          if (!Kd) return null;
          const {
            rootName: od,
            metaStr: ld
          } = Jd.getMetaInfo(Kd.name);
          return {
            name: Kd.name,
            amount: Kd.amount,
            attributes: Kd.attributes,
            instance: dd.instance(kd),
            displayName: null !== (pd = Kd.attributes.customDisplayName) && void 0 !== pd ? pd : Jd.getDisplayName(od),
            requiresAmmo: "RequiresAmmo" === ld,
            clipSize: null !== (Nd = null !== (Wd = null === (Pd = Kd.attributes.customAttributes) || void 0 === Pd || null === (Zd = Pd.gunStats) || void 0 === Zd ? void 0 : Zd.clipSize) && void 0 !== Wd ? Wd : null === (gd = Jd.getGunStats(od)) || void 0 === gd ? void 0 : gd.clipSize) && void 0 !== Nd ? Nd : null === (Cd = Kd.typeObj) || void 0 === Cd ? void 0 : Cd.clipSize
          }
        },
        Zd = function(dd, Jd) {
          let kd = null,
            pd = {
              focus: null,
              recipes: [],
              detail: null
            },
            Nd = -1;
          const Wd = new Set;
          return {
            read() {
              var Wd, Pd;
              if (null === kd) return null !== pd.focus && (pd = {
                ...pd,
                focus: null
              }), pd;
              if (pd.focus === kd && Nd === dd.changes) return pd;
              if (Nd = dd.changes, 0 === dd.length) return pd = {
                focus: kd,
                recipes: [],
                detail: null
              }, pd;
              let Zd = 0;
              if (null !== kd.recipe) try {
                Zd = Jd.getItemId(kd.recipe.name)
              } catch {}
              const gd = dd.craftingView(kd.station, Zd, null !== (Wd = null === (Pd = kd.recipe) || void 0 === Pd ? void 0 : Pd.QC) && void 0 !== Wd ? Wd : 0);
              return pd = null === gd ? {
                focus: kd,
                recipes: [],
                detail: null
              } : function(dd, Jd, kd) {
                let pd = Ld.nb.BYTES;
                const Nd = [];
                for (let Kd = Ld.nb.recipes(dd, 0); Kd > 0; Kd--) {
                  const kd = Ld.fb.flags(dd, pd),
                    Wd = {
                      name: Jd.nameOfId(Ld.fb.item(dd, pd)),
                      QC: Ld.fb.recipe(dd, pd),
                      requires: [],
                      produces: Ld.fb.produces(dd, pd),
                      haveIngredients: 0 !== (kd & Ld.bb.HaveIngredients),
                      listed: 0 !== (kd & Ld.bb.Listed)
                    };
                  let Pd = Ld.fb.requires(dd, pd);
                  for (pd += Ld.fb.BYTES; Pd > 0; Pd--) {
                    const kd = Ld.hb.items(dd, pd);
                    Wd.requires.push({
                      items: Rp(dd, pd + Ld.hb.BYTES, kd, Jd),
                      amt: Ld.hb.amount(dd, pd)
                    }), pd += Ld.hb.BYTES + 2 * kd
                  }
                  Nd.push(Wd)
                }
                const Wd = Ld.nb.flags(dd, 0);
                if (null === kd.recipe || 0 === (Wd & Ld.lb.Detail)) return {
                  focus: kd,
                  recipes: Nd,
                  detail: null
                };
                const Pd = {},
                  Zd = {};
                for (let Kd = Ld.nb.ingredients(dd, 0); Kd > 0; Kd--) {
                  const kd = Ld.$.item(dd, pd),
                    Nd = Ld.$.from(dd, pd),
                    Wd = Ld.$.amount(dd, pd);
                  pd += Ld.$.BYTES;
                  const gd = Nd === Ld.G ? null : Rp(dd, pd, Nd, Jd);
                  if (null !== gd && (pd += 2 * Nd), 0 === kd) continue;
                  const Cd = Jd.nameOfId(kd);
                  Pd[Cd] = Wd, null !== gd && (Zd[Cd] = gd)
                }
                const {
                  name: gd,
                  QC: Cd
                } = kd.recipe;
                return {
                  focus: kd,
                  recipes: Nd,
                  detail: {
                    name: gd,
                    QC: Cd,
                    craftAllTimes: Ld.nb.craftAllTimes(dd, 0),
                    roomForOne: 0 !== (Wd & Ld.lb.RoomForOne),
                    resultStackable: Boolean(Jd.getItemStat(gd, "stackable")),
                    amounts: Pd,
                    ingredientsCraftedFrom: Zd
                  }
                }
              }(gd, Jd, kd), pd
            },
            setFocus(dd) {
              kd = dd;
              for (const Jd of [...Wd]) Jd()
            },
            watchFocus: dd => (Wd.add(dd), () => {
              Wd.delete(dd)
            })
          }
        }(dd, Jd);
      return {
        states: {
          inventory: Kp(dd, (() => {
            const kd = dd.length;
            if (0 === kd) return Zp;
            const pd = [];
            for (let Jd = 0; Jd < Ld.Dd; Jd++) pd.push(op(dd.slot(Jd)));
            const Nd = dd.slotIcon,
              Wd = pd[dd.selectedSlot];
            0 !== Nd && Wd && (pd[dd.selectedSlot] = {
              ...Wd,
              icon: Jd.nameOfId(Nd)
            });
            const Pd = !0 === Jd.getClientOption("creative");
            let Zd = [],
              gd = null;
            if (kd > Ld.Dd) {
              for (let Jd = Ld.Dd; Jd < kd; Jd++) Zd.push(op(dd.slot(Jd)));
              gd = {
                type: null,
                pos: [...dd.zd],
                numSlots: kd - Ld.Dd,
                ironChest: null
              }
            } else Pd && (Zd = Qp(Jd));
            return {
              player: pd,
              chestOrCreative: Zd,
              chest: gd,
              creative: Pd,
              selectedSlot: dd.selectedSlot,
              freeSlots: dd.freeSlots()
            }
          }), (0, kp.n)("creative")),
          hotbar: Kp(dd, (() => {
            if (0 === dd.length) return gp;
            const Jd = [];
            for (let dd = 0; dd < Pp; dd++) Jd.push(Wd(dd));
            return {
              items: Jd,
              ammo: dd.amountOf("Ammo"),
              selectedSlot: dd.selectedSlot
            }
          }), (0, kp.k)("DisplayName", "GunStats")),
          crafting: Kp(dd, Zd.read, null, Zd.watchFocus),
          heldItemAim: Kp(dd, (() => {
            var Jd;
            if (!kd()) return Cp;
            const pd = null === (Jd = dd.EC()) || void 0 === Jd ? void 0 : Jd.typeObj,
              Nd = "Gun" === (null === pd || void 0 === pd ? void 0 : pd.type);
            return {
              gun: Nd,
              aimable: Nd || !0 === (null === pd || void 0 === pd ? void 0 : pd.showsAimingUi),
              chargeName: "Chargeable" === (null === pd || void 0 === pd ? void 0 : pd.type) ? pd.name : null
            }
          }), null, (dd => function(dd, Jd) {
            let kd = dd();
            return (0, Wp.D)((() => {
              const pd = dd();
              pd !== kd && (kd = pd, Jd(pd))
            }))
          }(kd, dd)))
        },
        events: {
          hotbarSlotRequested: (0, kp.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, kp.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, kp.e)("numkeyPressed"),
          inventoryDropRequested: (0, kp.e)("DropInvenItem"),
          chestToggled: (0, kp.e)("chestToggleFromServer"),
          chestRefreshed: (0, kp.e)("chestRefreshedFromServer", ep),
          inventorySynced: (0, kp.e)("syncedInvenFromServer", ep),
          enchantingTableOpened: (0, kp.e)("enchantingTable", (dd => {
            let {
              position: kd,
              NC: pd
            } = dd;
            return {
              position: [...kd],
              blockName: Jd.getMetaInfo(pd).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Jd) {
            dd.selectSlot(Jd), dd.flush(pd)
          },
          removeInventoryItem(Jd) {
            let {
              slot: kd,
              amount: pd,
              drop: Wd
            } = Jd;
            return Nd(dd.remove(kd, pd, Wd))
          },
          swapInventorySlots(Jd) {
            let {
              a: kd,
              b: pd
            } = Jd;
            return Nd(dd.swap(kd, pd))
          },
          moveInventoryItem(Jd) {
            let {
              from: kd,
              to: pd,
              amount: Wd
            } = Jd;
            return Nd(dd.move(kd, pd, Wd))
          },
          quickMoveInventoryItem(Jd) {
            let {
              slot: kd,
              start: pd,
              end: Wd,
              amount: Pd
            } = Jd;
            return Nd(dd.quickMove(kd, pd, Wd, Pd))
          },
          closeChest() {
            dd.closeChest(), dd.flush(pd), Pd.j.nO("chestClosedByPlayer")
          },
          focusCrafting(dd) {
            Zd.setFocus(dd)
          },
          craftRecipe(Jd) {
            let {
              name: kd,
              QC: pd,
              times: Wd
            } = Jd;
            return Nd(dd.craft(kd, pd, Wd))
          },
          salvageItem(Jd) {
            let {
              slot: kd,
              name: pd,
              amount: Wd
            } = Jd;
            return Nd(dd.salvage(kd, pd, Wd))
          },
          enchantItem(Jd) {
            let {
              slot: kd,
              level: pd,
              tablePos: Nd
            } = Jd;
            dd.enchant(kd, pd, Nd)
          }
        },
        queries: {
          enchantingOffer(kd) {
            let {
              slot: pd,
              blockName: Nd
            } = kd;
            return function(dd, Jd, kd, pd) {
              const Nd = dd.slot(kd);
              if (!Nd || !Jd.getClientOption("canCraft") || !(0, Jp.p)(pd) || (0, Jp.m)(Nd.attributes)) return Op;
              const Wd = (0, Np.enchantmentPerksOf)(Jd.getItemId(Nd.name));
              if (0 === Wd.length) return Op;
              const Pd = [];
              for (let Zd = 0; Zd < pp.e; Zd++) {
                const {
                  commonProb: dd,
                  uncommonProb: Jd,
                  rareProb: kd,
                  epicProb: Nd,
                  legendaryProb: Wd,
                  level: gd
                } = (0, Jp.f)(pd, Zd);
                Pd.push({
                  level: gd,
                  odds: [dd, Jd, kd, Nd, Wd].map((dd => 100 * dd))
                })
              }
              return {
                perks: [...Wd],
                options: Pd
              }
            }(dd, Jd, pd, Nd)
          }
        }
      }
    }
    const Op = Object.freeze({
      perks: [],
      options: []
    });

    function ep() {
      return null
    }

    function Rp(dd, Jd, kd, pd) {
      const Nd = [];
      for (let Wd = 0; Wd < kd; Wd++) {
        const kd = dd.getUint16(Jd + 2 * Wd, !0);
        0 !== kd && Nd.push(pd.nameOfId(kd))
      }
      return Nd
    }
    class Ip {
      constructor(dd) {
        this.api = dd, this.positions = new Map, this.targeted = {
          W9: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          fO: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(dd) {
        let Jd = this.positions.get(dd);
        return Jd || (this.api.checkValid(dd) || this.api.isLocal(dd) ? (Jd = [NaN, NaN, NaN], this.api.readPosition(dd, Jd), this.positions.set(dd, Jd), Jd) : null)
      }
      Ddd() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Jd, kd] of this.positions) this.api.readPosition(Jd, kd) || this.api.checkValid(Jd) || this.api.isLocal(Jd) || this.positions.delete(Jd);
        const dd = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Ld.u.playerFlags(dd, 0) & Ld.Ud.Breaking) && Ld.u.breakingProgress(dd, 0) >= 0, this.isBreaking)
          for (let Jd = 0; Jd < 3; Jd++) this.breaking[Jd] = Ld.u.breakingPos(dd, 0, Jd)
      }
      refreshTarget() {
        const dd = this.api.apiView,
          Jd = Ld.u.targetBlockId(dd, 0);
        if (this.hasTarget = Jd !== Ld.kd, this.hasTarget) {
          const kd = this.targeted;
          kd.W9 = Jd;
          for (let Jd = 0; Jd < 3; Jd++) kd.position[Jd] = Ld.u.targetBlock(dd, 0, Jd), kd.normal[Jd] = Ld.u.targetNormal(dd, 0, Jd), kd.fO[Jd] = Ld.u.targetAdjacent(dd, 0, Jd)
        }
      }
      despawned(dd) {
        const Jd = this.positions.get(dd);
        Jd && !this.api.isLocal(dd) && (Jd.fill(NaN), this.positions.delete(dd))
      }
    }
    var Gp = kd(40615),
      vp = kd(40592),
      xp = kd(36972);
    const qp = 1,
      Bp = 2;
    class sp {
      constructor() {
        this.game = new xp.g, this.client = new xp.g, this.EC = 0, this.movesFly = null
      }
      setGame(dd) {
        if (null === dd || "object" !== typeof dd) return !1;
        const {
          key: Jd,
          value: kd
        } = dd;
        return "string" === typeof Jd && (this.game.setBooleanType(Jd, Boolean(kd)), !0)
      }
      setClient(dd, Jd) {
        this.client.setBooleanType(dd, Jd)
      }
      clearGame() {
        this.game = new xp.g, this.movesFly = null
      }
      setMovesFly(dd) {
        this.movesFly = dd
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? qp : 0) | (this.client._getTotalBooleanVal() ? Bp : 0)
      }
      write(dd) {
        const Jd = this.perms(),
          {
            movesFly: kd
          } = this;
        if (Jd === this.EC && null === kd) return !0;
        let pd = Ld.Xb.Keep;
        return null !== kd && (pd = kd ? Ld.Xb.On : Ld.Xb.Off), !(!dd || !(0, Ld.Ne)(dd, 0, pd, Jd, kd ? 1 : 0)) && (this.EC = Jd, this.movesFly = null, !0)
      }
    }
    class ip {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = dd, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Zd.b,
          get y() {
            return Jd()
          }
        }
      }
      get hasView() {
        const dd = this.api.apiView,
          Jd = Ld.u.viewProj;
        return 0 !== Jd(dd, 0, 3) || 0 !== Jd(dd, 0, 7) || 0 !== Jd(dd, 0, 11) || 0 !== Jd(dd, 0, 15)
      }
      get cameraPosition() {
        const dd = this.api.apiView,
          {
            eye: Jd
          } = this;
        for (let kd = 0; kd < 3; kd++) Jd[kd] = Ld.u.eye(dd, 0, kd);
        return Jd
      }
      get cameraDirection() {
        const dd = this.api.apiView,
          Jd = Ld.u.viewProj,
          kd = Jd(dd, 0, 3),
          pd = Jd(dd, 0, 7),
          Nd = Jd(dd, 0, 11),
          Wd = Math.hypot(kd, pd, Nd),
          {
            forward: Pd
          } = this;
        return Wd > 0 && (Pd[0] = kd / Wd, Pd[1] = pd / Wd, Pd[2] = Nd / Wd), Pd
      }
      get cameraHeading() {
        return Ld.u.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Ld.u.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Ld.u.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Ld.u.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(dd) {
        this.clip(dd);
        const {
          clipX: Jd,
          clipY: kd,
          clipW: pd
        } = this;
        if (pd > 0) {
          const dd = Jd / pd * 50,
            Nd = -kd / pd * 50;
          return Math.abs(dd) <= this.screenBandPct.x && Math.abs(Nd) <= this.screenBandPct.y ? {
            x: 50 + dd,
            y: 50 + Nd
          } : this.clampToBand(dd, Nd)
        }
        const Nd = this.cameraPosition,
          Wd = Math.hypot(dd[0] - Nd[0], dd[1] - Nd[1], dd[2] - Nd[2]),
          Pd = this.api.apiView,
          Zd = Ld.u.viewProj,
          gd = Wd > 0 ? Jd / Wd : 0,
          Cd = Wd > 0 ? -kd / Wd : 0,
          Kd = Math.hypot(Zd(Pd, 0, 1), Zd(Pd, 0, 5), Zd(Pd, 0, 9)),
          od = gd / Math.hypot(Zd(Pd, 0, 0), Zd(Pd, 0, 4), Zd(Pd, 0, 8)),
          ld = Cd / Kd,
          Qd = !(Math.abs(od) >= .001 || Math.abs(ld) >= .001);
        return this.clampToBand(gd, Qd ? -(Kd || 1) : Cd)
      }
      projectDirectionToScreenPos(dd) {
        if (!this.hasView) return;
        const Jd = this.cameraPosition,
          kd = this.along;
        for (let pd = 0; pd < 3; pd++) kd[pd] = Jd[pd] + 10 * dd[pd];
        return this.projectWorldPosToScreenPos(kd)
      }
      projectWorldPosToViewport(dd) {
        this.clip(dd);
        const {
          clipX: Jd,
          clipY: kd,
          clipW: pd
        } = this;
        return pd > 0 ? {
          x: 50 + Jd / pd * 50,
          y: 50 - kd / pd * 50
        } : null
      }
      clip(dd) {
        const Jd = this.api.apiView,
          kd = dd[0] - Ld.u.origin(Jd, 0, 0),
          pd = dd[1] - Ld.u.origin(Jd, 0, 1),
          Nd = dd[2] - Ld.u.origin(Jd, 0, 2),
          Wd = Ld.u.viewProj;
        this.clipX = Wd(Jd, 0, 0) * kd + Wd(Jd, 0, 4) * pd + Wd(Jd, 0, 8) * Nd + Wd(Jd, 0, 12), this.clipY = Wd(Jd, 0, 1) * kd + Wd(Jd, 0, 5) * pd + Wd(Jd, 0, 9) * Nd + Wd(Jd, 0, 13), this.clipW = Wd(Jd, 0, 3) * kd + Wd(Jd, 0, 7) * pd + Wd(Jd, 0, 11) * Nd + Wd(Jd, 0, 15)
      }
      clampToBand(dd, Jd) {
        return (0, Zd.e)(dd, Jd, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var ap = kd(4704);
    const Mp = new TextEncoder,
      Fp = new Uint8Array(Ld.N * Ld.M);
    class Yp {
      constructor() {
        this.buttons = [], this.EC = !0
      }
      set(dd) {
        this.buttons = dd, this.EC = !1
      }
      attached() {
        this.EC = 0 === this.buttons.length
      }
      write(dd) {
        if (this.EC) return;
        const Jd = new Uint8Array(Ld.N),
          kd = new Uint8Array(Ld.N);
        let pd = 0,
          Nd = 0;
        for (const {
            id: Wd,
            keycode: Pd
          }
          of this.buttons) {
          if (pd === Ld.N) break;
          const {
            read: dd,
            written: Zd
          } = Mp.encodeInto(Wd, Fp.subarray(Nd, Nd + Ld.M));
          if (dd < Wd.length) continue;
          const gd = ap.n[Pd];
          Jd[pd] = "number" === typeof gd ? gd : 0, kd[pd] = Zd, pd++, Nd += Zd
        }
        this.EC = (0, Ld.Be)(dd, 0, pd, Jd, kd, Fp.subarray(0, Nd))
      }
    }

    function mp(dd, Jd, kd) {
      const pd = Mp.encode(Jd);
      return pd.length <= Ld.M && function(dd, Jd, kd, pd) {
        return (0, rJ.b)(), (0, Ld.Ef)(dd, Jd, kd, pd)
      }(dd, 0, kd ? 1 : 0, pd)
    }
    const bp = new TextDecoder,
      Sp = new TextEncoder,
      jp = new Uint8Array(0),
      Xp = [0, 0, 0],
      fp = {
        off: Ld.Yd.Off,
        key: Ld.Yd.Key,
        touch: Ld.Yd.Touch
      };
    class np {
      constructor(dd) {
        var Jd;
        this.options = dd, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new Yp, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new sp, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.TQ = dd => {
          if ((0, Qd.j)(dd)) throw dd;
          this.onError(dd)
        }, this.api = dd.api, this.tables = dd.tables, this.onError = null !== (Jd = dd.onError) && void 0 !== Jd ? Jd : dd => {
          console.error("Error in client game callback", dd)
        }, this.renderFrame = new ip(this.api, dd.screenBandY), this.live = new Ip(this.api), this.chunks = new gJ(this.api.memory, (() => this.api.apiView)), this.items = new Gk({
          api: this.api,
          tables: dd.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: dd.beforeOp
        });
        const kd = () => this.stopped() ? null : this.cmd,
          pd = () => this.sessionLive;
        this.entityInfoWatch = new uk({
          cmd: kd,
          onError: this.onError
        }), this.entityInfo = new tk({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: pd
        }), this.particles = new fk({
          cmd: kd,
          isSessionLive: pd,
          onError: this.onError
        }), this.clientApi = new Ck({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: dd.tables,
          cmd: kd,
          sendCmd: () => this.sendCmd(),
          isSessionLive: pd,
          beforeWrite: () => {
            var Jd;
            if (this.stopped()) return !1;
            const kd = this.generation;
            return !1 !== (null === (Jd = dd.beforeWrite) || void 0 === Jd ? void 0 : Jd.call(dd)) && kd === this.generation
          },
          playerDbId: () => {
            const dd = this.session;
            if (null === dd) throw new Error("No game session has started, so the local player has no DB id");
            return dd.playerDbId
          },
          playSound: dd.playSound,
          preloadSounds: dd.preloadSounds,
          setLocalOptions: dd.setLocalOptions,
          hasPackModel: dd.hasPackModel
        }), this.scriptedCamera = new td({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: dd.cameraScreen,
          showFacing: dd.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Lp(this.items, this.tables, (() => this.localPlayerAlive()), this.TQ), this.itemSources
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
      clickCodeBlock(dd) {
        const Jd = this.sessionLive ? this.sendCmd() : null;
        return null !== Jd && (kd = Jd, pd = 0, Nd = dd[0], Wd = dd[1], Pd = dd[2], (0, rJ.b)(), (0, Ld.Ie)(kd, pd, Nd, Wd, Pd));
        var kd, pd, Nd, Wd, Pd
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(dd) {
        const Jd = this.liveCmd();
        return null === Jd ? (this.pendingZoom = dd, !1) : (this.pendingZoom = null, (0, Ld.og)(Jd, 0, dd, 1))
      }
      SF(dd) {
        const Jd = this.stopped() ? null : this.cmd;
        return null !== Jd && (0, Ld.hg)(Jd, 0, dd ? 1 : 0)
      }
      respawn() {
        const dd = this.sessionLive ? this.sendCmd() : null;
        return null !== dd && (Jd = dd, kd = 0, (0, rJ.b)(), (0, Ld.Mf)(Jd, kd));
        var Jd, kd
      }
      bindCustomButtonKeys(dd) {
        this.customButtons.set(dd)
      }
      pressCustomButton(dd, Jd) {
        const kd = this.sessionLive ? this.sendCmd() : null;
        return null !== kd && mp(kd, dd, Jd)
      }
      padMove(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = this.liveCmd();
        return null !== Pd && (0, Ld.jf)(Pd, 0, dd, Jd, kd, pd, Nd, Wd)
      }
      thirdPersonFor(dd) {
        const Jd = this.liveCmd();
        return null !== Jd && (0, Ld.rg)(Jd, 0, null !== dd && void 0 !== dd ? dd : 1 / 0)
      }
      send(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== pd && uJ(pd, kd ? ld.td : 0, dd, (0, nd.e)(Jd))
      }
      socketAttached(dd) {
        this.openSocket = dd, this.socketLeftSinceAttach = !1
      }
      socketDetached(dd) {
        this.openSocket === dd && (this.openSocket = 0)
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
      attach(dd) {
        const Jd = () => dd.isStopped;
        this.stopped = Jd, this.cmd = dd.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const kd = this.api.apiView;
        this.overflowGen = Ld.u.eventOverflowGen(kd, 0), this.resyncOwed = 0 !== Ld.u.eventOverflowMask(kd, 0), dd.setGameHost(this), dd.setEventWalker((dd => {
          this.api.walk(dd, this, Jd)
        }))
      }
      watchPromptPick(dd) {
        this.promptWatch = dd, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Up(Ld.u.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Ld.zc.None : Ld.u.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Ld.u.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === dd || dd >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, dd, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(dd) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(dd)
      }
      netEvent(dd) {
        "connection" === dd.type ? dd.phase === ld.C.Activated && dd.conn !== this.activeConn && dd.conn > this.closedThrough ? (this.endSession(), this.activeConn = dd.conn, this.endGameGrants(), this.dropGameCamera()) : dd.phase !== ld.C.Left && dd.phase !== ld.C.Closed || dd.conn !== this.activeConn ? dd.phase === ld.C.Resumed && 0 !== this.activeConn && dd.conn > this.closedThrough && (this.activeConn = dd.conn) : this.closeGame() : dd.conn === this.activeConn && 0 !== dd.conn && (dd.IC === vp.A ? this.gunHit(dd.payload) : dd.IC === Vk.ac.EditItemCraftingRecipes || dd.IC === vp.ab ? this.items.touch() : (this.serverOptions(dd), this.gameMessage(dd)));
        const Jd = this.options.onNetEvent;
        Jd && this.guard((() => {
          Jd(dd)
        }))
      }
      serverOptions(dd) {
        const Jd = this.options.serverOptions,
          kd = Jd ? this.decoded(zk, dd) : null;
        Jd && kd && this.guard((() => {
          Jd.applyNewClientOptions(kd)
        }))
      }
      gameMessage(dd) {
        let Jd = null;
        try {
          Jd = function(dd) {
            if ("message" !== dd.type || dd.IC !== Vk.ac.GameCodeMessage || dd.payloadKind !== ld.ic.Msgpack) return null;
            const Jd = (0, nd.c)(dd.payload);
            if (null === Jd || "object" !== typeof Jd || "string" !== typeof Jd.messageType) throw new Error("GameCodeMessage without a messageType");
            return Jd
          }(dd)
        } catch (kd) {
          this.sessionLive && this.onError(kd)
        }
        if (Jd) {
          const {
            messageType: dd,
            data: kd
          } = Jd;
          if ((0, Yd.d)(dd)) return void this.guard((() => {
            (0, Yd.b)(dd, kd)
          }));
          "freeCamPerms" === dd && this.freeCam.setGame(kd) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Jd => {
            Jd.onReceivedMessageFromServer(dd, kd)
          }))
        }
      }
      decoded(dd, Jd) {
        try {
          return dd(Jd)
        } catch (kd) {
          return this.onError(kd), null
        }
      }
      setClientFreeCameraGrant(dd, Jd) {
        this.freeCam.setClient(dd, Jd), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(dd) {
        this.freeCam.setMovesFly(dd), this.writeFreeCam()
      }
      setBlockHighlight(dd) {
        this.highlight = dd, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const dd = this.liveCmd();
        if (null === dd || !this.highlightOwed) return;
        const Jd = this.highlight;
        this.highlightOwed = null === Jd ? !(0, Ld.Ze)(dd, 0, Xp, Xp, 0) : !(0, Ld.Ze)(dd, 0, Jd.pos, Jd.normal, 1)
      }
      localPlayerBound(dd) {
        var Jd, kd;
        if (0 === this.activeConn || this.sessionLive && dd === this.boundId) return;
        const pd = this.sessionLive;
        let Nd, Wd, Pd, Zd;
        this.endSession(), pd && this.restartGameCamera();
        try {
          var gd;
          this.session = null;
          const dd = this.options.sessionInfo(this.activeConn);
          if (this.session = dd, !dd) return;
          Nd = dd.gameNameWithVariation, Wd = null !== (gd = (0, Md.Vb)(Nd)) && void 0 !== gd ? gd : void 0, Pd = (0, Fd.u)(dd.lobbyName), Zd = (0, Fd.M)(dd.lobbyName)
        } catch (Id) {
          return void this.onError(Id)
        }
        const Cd = {
          localPlayerId: String(dd)
        };
        let Kd = {},
          od = {};
        try {
          var ld, Qd;
          Kd = null !== (ld = null === (Qd = this.options.gameFactory((0, Md._b)(Nd))) || void 0 === Qd ? void 0 : Qd(Zd, Pd, Wd, Cd)) && void 0 !== ld ? ld : {}
        } catch (Id) {
          this.TQ(Id)
        }
        try {
          var Ld, Od;
          od = {
            ...null === (Ld = (Od = this.options).defaultPlugins) || void 0 === Ld ? void 0 : Ld.call(Od, Zd, Pd, Wd, Cd),
            ...Kd.plugins
          }
        } catch (Id) {
          this.TQ(Id)
        }
        const ed = [Kd, ...Object.values(od)];
        this.owners = ed, this.tickers = ed.filter((dd => void 0 !== dd.Do)), this.renderers = ed.filter((dd => void 0 !== dd.onAfterRender)), this.receivers = ed.filter((dd => void 0 !== dd.onReceivedMessageFromServer)), this.writeAltVeto(ed), this.writeHooks(ed), this.writePublicLobby(Zd), this.writeLocalDbId(null !== (Jd = null === (kd = this.session) || void 0 === kd ? void 0 : kd.playerDbId) && void 0 !== Jd ? Jd : null), this.boundId = dd, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(ed, (dd => {
          var Jd;
          null === (Jd = dd.onCreate) || void 0 === Jd || Jd.call(dd, this.clientApi)
        }));
        const Rd = this.generation;
        setTimeout((() => {
          Rd === this.generation && !0 === this.tables.getClientOption("creative") && Qp(this.tables)
        }), 0)
      }
      chunkSlot(dd, Jd, kd, pd, Nd, Wd) {
        this.chunks.apply(dd, Jd, kd, pd, Nd, Wd)
      }
      entityAdded(dd) {
        var Jd;
        this.entityInfo.stale(dd), null === (Jd = this.options.replayEntities) || void 0 === Jd || Jd.entityAdded(dd)
      }
      entityInfoChanged(dd) {
        var Jd;
        this.entityInfo.stale(dd), null === (Jd = this.options.replayEntities) || void 0 === Jd || Jd.entityInfoChanged(dd)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const dd = performance.now();
          this.round(this.tickers, yp), (0, Wp.e)(performance.now() - dd)
        }
      }
      afterWalk(dd) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const Jd = this.options.replayEntities;
        Jd && this.guard((() => {
          this.entityInfoWatch.want(rk, Jd.wantsWatch), Jd.flush(this.entityInfoWatch.on)
        }));
        const kd = (0, Wp.n)(dd, Ld.u.frameMs(this.api.apiView, 0));
        if (null !== kd) {
          const dd = this.renderFrame;
          this.guard((() => {
            (0, wk.e)().turnDamageIndicators(dd.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(kd)
          })), this.round(this.renderers, (Jd => {
            Jd.onAfterRender(kd, dd)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== kd)
        } catch (Nd) {
          this.TQ(Nd)
        }
        this.showZoom(), this.items.flush(this.TQ), this.writePromptWatch(), this.writeCustomButtons();
        const pd = this.ticks;
        this.ticks = 0, (0, Wp.m)(pd, dd, kd, this.TQ)
      }
      entityRemoved(dd) {
        this.live.despawned(dd), this.entityInfo.removed(dd)
      }
      ackEventOverflow() {
        const dd = this.api.apiView,
          Jd = Ld.u.eventOverflowGen(dd, 0),
          kd = Jd - this.overflowGen >>> 0;
        if (0 === kd && !this.resyncOwed) return;
        this.overflowGen = Jd;
        const pd = Ld.u.eventOverflowMask(dd, 0),
          Nd = this.cmd;
        0 === pd || null === Nd || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Ld.Ke)(Nd, 0, pd);
        const Wd = this.options.onEventOverflow;
        0 !== kd && Wd && this.guard((() => {
          Wd(pd, kd)
        }))
      }
      gameCall(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        if (dd === Ld.mc.Director) try {
          return this.scriptedCamera.call(Jd, kd, pd, Nd, Wd, Pd)
        } catch (Cd) {
          return this.TQ(Cd), Ld.pb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return dd === Ld.mc.AltVeto ? Ld.j.Allow : 0;
        try {
          return this.callGames(dd, Jd, kd, pd, Nd, Wd, Pd, Zd)
        } catch (Cd) {
          throw (0, Qd.j)(Cd) && (this.fault = Cd), Cd
        }
      }
      takeFault() {
        const dd = this.fault;
        return this.fault = void 0, dd
      }
      callGames(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: gd
        } = this.options, Cd = String(this.boundId);
        switch (dd) {
          case Ld.mc.AltVeto:
          case Ld.mc.AltAction: {
            const Zd = 0 !== Pd,
              [Kd, od, ld] = Zd ? [Jd, kd, pd] : [void 0, void 0, void 0],
              Qd = Zd ? gd.nameOfId(Nd) : "Air",
              Od = Up(Wd);
            if (dd === Ld.mc.AltAction) return this.first((dd => {
              var Jd;
              return null === (Jd = dd.onPlayerAltAction) || void 0 === Jd ? void 0 : Jd.call(dd, Cd, Kd, od, ld, Qd, Od)
            })), 0;
            const ed = this.first((dd => {
              var Jd;
              return null === (Jd = dd.onPlayerAttemptAltAction) || void 0 === Jd ? void 0 : Jd.call(dd, Cd, Kd, od, ld, Qd, Od)
            }));
            return "preventAction" === ed ? Ld.j.Prevent : "preventPlacement" === ed ? Ld.j.PreventPlacement : Ld.j.Allow
          }
          case Ld.mc.Click: {
            const dd = Zd,
              Kd = 0 !== (dd & Ld.U.Alt),
              od = 0 !== (dd & Ld.U.HasPos),
              ld = od ? gd.nameOfId(Nd) : "Air",
              [Qd, Od, ed] = od ? [Jd, kd, pd] : [null, null, null],
              Rd = Up(Wd),
              Id = 0 !== (dd & Ld.U.Up),
              Gd = Up(Pd);
            if (0 === (dd & Ld.U.AttackOnly) && this.first((dd => {
                var Jd, kd;
                return Id ? null === (Jd = dd.onPlayerClickUp) || void 0 === Jd ? void 0 : Jd.call(dd, Cd, Kd, Qd, Od, ed, ld, Rd) : null === (kd = dd.onPlayerClick) || void 0 === kd ? void 0 : kd.call(dd, Cd, Kd, Qd, Od, ed, ld, Rd)
              })), !Id && !Kd && null !== Gd) {
              const dd = this.clientApi.getPositionView(Gd),
                Jd = dd ? [dd[0], dd[1], dd[2]] : [0, 0, 0];
              this.first((dd => {
                var kd;
                return null === (kd = dd.onPlayerAttackEntity) || void 0 === kd ? void 0 : kd.call(dd, Cd, Gd, Jd)
              }))
            }
            return 0
          }
          case Ld.mc.ChangeBlock: {
            const dd = gd.nameOfId(Nd),
              Pd = gd.nameOfId(Wd);
            return this.first((Nd => {
              var Wd;
              return null === (Wd = Nd.onPlayerChangeBlock) || void 0 === Wd ? void 0 : Wd.call(Nd, Cd, Jd, kd, pd, dd, Pd)
            })), 0
          }
          case Ld.mc.DropItem: {
            const dd = gd.nameOfId(Jd);
            return this.first((Jd => {
              var Nd;
              return null === (Nd = Jd.onPlayerDropItem) || void 0 === Nd ? void 0 : Nd.call(Jd, Cd, dd, kd, pd)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${dd}`)), 0
        }
      }
      changeBlockFail(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = Nd === Ld._c ? null : bp.decode(this.api.eventBytes(Wd, Math.min(Nd, Pd)));
        this.failures.push({
          uW: [dd, Jd, kd],
          tW: pd,
          VW: Zd
        })
      }
      changeBlockFailEnd() {
        const dd = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Jd => {
          var kd;
          null === (kd = Jd.onChangeBlockFail) || void 0 === kd || kd.call(Jd, dd)
        })), this.nO("EditBoard", {
          pos: null
        }), this.nO("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(dd, Jd, kd, pd, Nd, Wd) {
        dd === Ld.Fc.ChestOpened ? this.items.chestOpened(kd, pd, Nd) : dd !== Ld.Fc.Synced && dd !== Ld.Fc.ChestClosed && dd !== Ld.Fc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(dd, Jd, kd, pd) {
            switch (dd) {
              case Ld.Fc.Synced:
                Pd.j.nO("syncedInvenFromServer");
                break;
              case Ld.Fc.ChestOpened:
              case Ld.Fc.ChestClosed:
                Pd.j.nO("chestToggleFromServer", dd === Ld.Fc.ChestOpened, !0);
                break;
              case Ld.Fc.ChestRefreshed:
                Pd.j.nO("chestRefreshedFromServer");
                break;
              case Ld.Fc.EnchantingTable:
                Pd.j.nO("enchantingTable", {
                  NC: pd,
                  position: kd
                });
                break;
              case Ld.Fc.HotbarRequest:
                Pd.j.nO("setSelectedInventorySlotI", Jd, !0);
                break;
              case Ld.Fc.Scrolled:
                Pd.j.nO("ScrollInventorySlot", Jd);
                break;
              case Ld.Fc.NumberKey:
                Pd.j.nO("numkeyPressed", Jd + 1);
                break;
              case Ld.Fc.DropRequested:
                Pd.j.nO("DropInvenItem", 0 !== Jd);
                break;
              default:
                throw new Qd.e(`InventoryEvent of no kind: what ${dd}`)
            }
          }(dd, Jd, [kd, pd, Nd], Wd)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(dd, Jd, kd, pd) {
        this.nO("shotPlayer", {
          playerId: String(dd),
          damage: Jd,
          wasCrit: 0 !== pd,
          distance: kd
        })
      }
      localHurt(dd, Jd) {
        this.nO("closeShopOnDamaged", null), this.guard((() => {
          Pd.j.nO("damagedByOtherPlayer", {
            Yp: null,
            direction: Number.isNaN(Jd) ? null : Jd,
            Ud: dd
          })
        }))
      }
      attackHit(dd, Jd, kd, pd, Nd) {
        this.guard((() => {
          Pd.j.nO("yourAttackHit", {
            Fd: pd,
            screenPos: this.renderFrame.projectDirectionToScreenPos([dd, Jd, kd]),
            hitSelf: Nd
          })
        }))
      }
      physicsType(dd) {
        this.nO("PlayerPhysicsTypeUpdate", dd)
      }
      vehicleEffect(dd, Jd, kd, pd, Nd) {
        this.guard((() => {
          dd === ld.Ld.UPDATE ? (0, bd.j)(Jd, {
            icon: kd,
            level: pd,
            displayName: null,
            durationMs: Nd
          }) : md.b.remove(Jd)
        }))
      }
      zoomChanged(dd) {
        this.zoom = dd, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.nO("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const dd = this.scriptedCamera.holdsView();
        !this.zoomUnshown || dd && this.zoomHeld || (this.zoomUnshown = !1, this.nO("cameraZoomSet", this.zoom)), this.zoomHeld = dd
      }
      gunHit(dd) {
        this.guard((() => {
          const {
            Yp: Jd,
            mp: kd
          } = (0, Gp.c)(vp.A, dd);
          Pd.j.nO("damagedByOtherPlayer", {
            Yp: Jd,
            direction: kd
          })
        }))
      }
      uiEvent(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        this.guard((() => {
          Ak(dd, Jd, [kd, pd, Nd], Wd, this.items, this.options.tables, (() => bp.decode(this.api.eventBytes(Pd, Zd))))
        }))
      }
      writeAltVeto(dd) {
        const Jd = this.cmd;
        if (!Jd) return;
        let kd;
        try {
          kd = function(dd, Jd) {
            const kd = new Set;
            let pd = !1;
            for (const Nd of dd)
              if (Nd.onPlayerAttemptAltAction) {
                if (pd = !0, !Nd.altVetoBlocks) return {
                  mode: Ld.se.All,
                  roots: []
                };
                for (const dd of Nd.altVetoBlocks) kd.add(Jd.getMetaInfo(dd).rootId)
              } return pd ? kd.size > Ld.Sc ? {
              mode: Ld.se.All,
              roots: []
            } : {
              mode: Ld.se.Filter,
              roots: [...kd]
            } : {
              mode: Ld.se.Off,
              roots: []
            }
          }(dd, this.options.tables)
        } catch (Nd) {
          this.onError(Nd), kd = {
            mode: Ld.se.All,
            roots: []
          }
        }
        if (kd.mode === Ld.se.Off && !this.vetoSet) return;
        const pd = new Uint8Array(new Uint32Array(kd.roots).buffer);
        (0, Ld.Rf)(Jd, 0, kd.mode, kd.roots.length, pd) ? this.vetoSet = kd.mode !== Ld.se.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(dd) {
        const Jd = this.cmd;
        if (!Jd) return;
        const kd = function(dd) {
          let Jd = 0;
          for (const kd of dd) kd.onPlayerAltAction && (Jd |= 1 << Ld.mc.AltAction), (kd.onPlayerClick || kd.onPlayerClickUp || kd.onPlayerAttackEntity) && (Jd |= 1 << Ld.mc.Click), kd.onPlayerChangeBlock && (Jd |= 1 << Ld.mc.ChangeBlock), kd.onPlayerDropItem && (Jd |= 1 << Ld.mc.DropItem);
          return Jd
        }(dd);
        (0 !== kd || this.hooksSet) && ((0, Ld.ag)(Jd, 0, kd) ? this.hooksSet = 0 !== kd : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const dd = this.cmd;
        dd && !this.stopped() && this.customButtons.write(dd)
      }
      writePromptWatch() {
        const dd = this.cmd,
          Jd = this.promptWatch;
        Jd !== this.promptWatchSent && dd && !this.stopped() && (0, Ld.wg)(dd, 0, fp[Jd]) && (this.promptWatchSent = Jd)
      }
      writePublicLobby(dd) {
        const Jd = this.cmd;
        Jd && dd !== this.writtenPublicLobby && ((0, Ld.kg)(Jd, 0, dd ? 1 : 0) ? this.writtenPublicLobby = dd : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(dd) {
        const Jd = this.cmd;
        Jd && ((0, Ld.eg)(Jd, 0, null === dd ? 0 : 1, null === dd ? jp : Sp.encode(dd)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(dd) {
        const Jd = this.generation;
        for (const pd of this.owners) {
          if (Jd !== this.generation) break;
          try {
            const Jd = dd(pd);
            if (void 0 !== Jd) return Jd
          } catch (kd) {
            this.TQ(kd)
          }
        }
      }
      nO(dd, Jd) {
        this.guard((() => {
          Pd.j.nO(dd, Jd)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (dd) {
          this.TQ(dd)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (dd) {
          this.TQ(dd)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const dd = this.owners;
        let Jd;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (pd) {
          Jd = pd
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (pd) {
          Jd ??= pd
        }
        this.round(dd, Dp, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (pd) {
          Jd ??= pd
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (pd) {
          Jd ??= pd
        }
        const kd = this.options.onSessionEnd;
        if (kd) try {
          kd()
        } catch (pd) {
          this.onError(pd)
        }
        void 0 !== Jd && this.TQ(Jd)
      }
      round(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = this.generation;
        for (const Wd of dd) {
          if (pd !== this.generation) break;
          try {
            Jd(Wd)
          } catch (Nd) {
            kd ? this.onError(Nd) : this.TQ(Nd)
          }
        }
      }
      guard(dd) {
        try {
          dd()
        } catch (Jd) {
          this.TQ(Jd)
        }
      }
    }

    function Up(dd) {
      return dd === Ld.cd ? null : String(dd)
    }

    function yp(dd) {
      dd.Do(ld.Fd)
    }

    function Dp(dd) {
      var Jd;
      null === (Jd = dd.onClose) || void 0 === Jd || Jd.call(dd)
    }

    function Tp(dd, Jd) {
      dd.watch((() => {
        const kd = function(dd) {
          const Jd = [],
            kd = Math.min(Pp, dd.length);
          for (let Nd = 0; Nd < kd; Nd++) {
            var pd;
            const kd = null === (pd = dd.slot(Nd)) || void 0 === pd ? void 0 : pd.typeObj,
              Wd = kd ? (0, Np.gunTypeOf)(kd.id) : void 0;
            void 0 !== Wd && Jd.push(vJ[Wd])
          }
          return Jd
        }(dd);
        kd.length > 0 && (Jd.preload(kd), Jd.preload([xJ]))
      }))
    }
    var Ep = kd(36605),
      cp = kd(4743),
      hp = kd(36933),
      rp = kd(36960);

    function tp(dd) {
      const Jd = (0, Ep.countDecodesAs)(new cp.Howl({
          ...(0, hp.k)(dd),
          pool: 15,
          preload: !1
        }), "sheet"),
        kd = Jd.load.bind(Jd);
      return Jd.load = () => (Jd._preload = !0, (0, rp.e)(dd), kd()), Jd
    }

    function Vp(dd, Jd, kd) {
      const pd = dd.listener;
      if (pd.positionX) zp(pd.positionX, Jd, kd, 0), zp(pd.positionY, Jd, kd, 1), zp(pd.positionZ, Jd, kd, 2), zp(pd.forwardX, Jd, kd, 3), zp(pd.forwardY, Jd, kd, 4), zp(pd.forwardZ, Jd, kd, 5), zp(pd.upX, Jd, kd, 6), zp(pd.upY, Jd, kd, 7), zp(pd.upZ, Jd, kd, 8);
      else {
        let dd = !1;
        for (let pd = 0; pd < 9; pd++) dd ||= Jd[pd] !== kd[pd];
        dd && (pd.setPosition(Jd[0], Jd[1], Jd[2]), pd.setOrientation(Jd[3], Jd[4], Jd[5], Jd[6], Jd[7], Jd[8]), kd.set(Jd))
      }
    }

    function zp(dd, Jd, kd, pd) {
      Jd[pd] !== kd[pd] && (dd.value = Jd[pd], kd[pd] = Jd[pd])
    }
    class Hp {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(dd) {
        this.pose.set(dd);
        const Jd = cp.Howler.ctx;
        return !!Jd && (Jd !== this.watchedCtx && (this.watchedCtx = Jd, this.written.fill(Number.NaN), Jd.addEventListener("statechange", (() => {
          "running" === Jd.state && Vp(Jd, this.pose, this.written)
        }))), "running" === Jd.state && Vp(Jd, dd, this.written), !0)
      }
    }
    var wp = kd(36736),
      Ap = kd(39344);
    let dN = null,
      JN = null;

    function kN() {
      return null === dN && (dN = document.createElement("div"), dN.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(dN)), dN
    }

    function pN() {
      return JN ??= new Ap.e(new wp.b(kN)), JN
    }

    function NN() {
      var dd;
      null === (dd = JN) || void 0 === dd || dd.clear(), WN(null)
    }

    function WN(dd) {
      pd.d.get("scriptedCameraFacing") !== dd && pd.d.set({
        scriptedCameraFacing: dd
      })
    }
    var PN = kd(9422),
      ZN = kd(9383),
      gN = kd(39370),
      CN = kd(40719),
      KN = kd(3130);
    const oN = Object.entries(Ld.ic).reduce(((dd, Jd) => {
      let [kd, pd] = Jd;
      return dd[pd] = kd, dd
    }), []);

    function lN(dd, Jd) {
      var kd;
      return 0 !== ((null !== (kd = dd.itemFlags[Jd]) && void 0 !== kd ? kd : 0) & Ld.Ic.Stackable)
    }
    const QN = /^(0|[1-9][0-9]*)$/,
      LN = {
        displayName: (dd, Jd) => (0, Np.displayNameOf)(Jd),
        description: (dd, Jd) => (0, Np.descriptionOf)(Jd),
        type: (dd, Jd) => (0, Np.itemTypeOf)(Jd),
        clipSize: (dd, Jd) => (0, Np.clipSizeOf)(Jd),
        armourReduction: (dd, Jd) => (0, Np.armourReductionOf)(Jd),
        scopeType: (dd, Jd) => (0, Np.scopeTypeOf)(Jd),
        stackable: lN,
        harvestType: (dd, Jd) => oN[dd.blockHarvestTypes[Jd]],
        harvestLevel: (dd, Jd) => {
          const kd = dd.blockHarvestLevels[Jd];
          return kd === Ld.Mc ? void 0 : kd
        },
        harvests: (dd, Jd) => {
          var kd;
          const pd = null !== (kd = dd.itemHarvests[Jd]) && void 0 !== kd ? kd : 0;
          return 0 !== pd ? oN[pd] : void 0 === (0, Np.harvestsNullLevelOf)(Jd) ? void 0 : null
        },
        level: (dd, Jd) => {
          var kd, pd;
          const Nd = null !== (kd = dd.itemLevels[Jd]) && void 0 !== kd ? kd : Ld.Mc;
          return Nd !== Ld.Mc ? Nd : null !== (pd = (0, Np.harvestsNullLevelOf)(Jd)) && void 0 !== pd ? pd : void 0
        }
      };

    function ON(dd, Jd, kd) {
      return RN(new Uint8Array(Math.floor(dd.length / Jd)), dd, Jd, kd)
    }

    function eN(dd, Jd, kd) {
      return RN(new Uint16Array(Math.floor(dd.length / Jd)), dd, Jd, kd)
    }

    function RN(dd, Jd, kd, pd) {
      const Nd = new DataView(Jd.buffer, Jd.byteOffset, Jd.byteLength);
      for (let Wd = 0; Wd < dd.length; Wd++) dd[Wd] = pd(Nd, Wd * kd);
      return dd
    }
    class IN {
      constructor(dd, Jd) {
        this.options = Jd, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = dd => {
          const Jd = this.idOf(dd);
          if (void 0 === Jd) throw new Error(`No item is named ${dd}, an item's root`);
          return Jd
        };
        const kd = Jd => {
            const kd = Jd();
            return new Uint8Array(dd.memory().buffer, dd.scratch(), kd).slice()
          },
          pd = (new TextDecoder).decode(kd((() => dd.queries.itemNames()))).split("\n"),
          Nd = kd((() => dd.queries.blockProps())),
          Wd = kd((() => dd.queries.itemProps()));
        this.props = {
          blockFlags: ON(Nd, Ld.B.BYTES, Ld.B.flags),
          blockHarvestTypes: ON(Nd, Ld.B.BYTES, Ld.B.harvestType),
          blockHarvestLevels: ON(Nd, Ld.B.BYTES, Ld.B.harvestLevel),
          blockAttachedTops: eN(Nd, Ld.B.BYTES, Ld.B.attachedTop),
          itemFlags: ON(Wd, Ld.Jc.BYTES, Ld.Jc.flags),
          itemHarvests: ON(Wd, Ld.Jc.BYTES, Ld.Jc.harvests),
          itemLevels: ON(Wd, Ld.Jc.BYTES, Ld.Jc.level)
        }, (0, KN.g)(Object.freeze(pd)), (0, CN.h)()
      }
      idOf(dd) {
        if ("number" === typeof dd) return void 0 === (0, KN.d)(dd) ? void 0 : dd;
        const Jd = (0, KN.c)(dd);
        return void 0 === Jd && QN.test(dd) ? void 0 === (0, KN.d)(+dd) ? void 0 : +dd : Jd
      }
      getMetaInfo(dd) {
        if (!dd || dd === PN.d) return PN.h;
        const Jd = this.idOf(dd);
        if (void 0 === Jd) throw new Error(`Item ${dd} not found in registry`);
        return this.metaOf(Jd)
      }
      blockRootId(dd) {
        return 0 !== dd && void 0 !== (0, KN.d)(dd) ? this.metaOf(dd).rootId : dd
      }
      metaOf(dd) {
        return this.metas[dd] ??= (0, ZN.j)((0, KN.d)(dd), dd, this.rootIdOf, (0, Np.rootMetaDescOf)(dd))
      }
      getItemId(dd) {
        if (!dd || dd === PN.d) return 0;
        const Jd = this.idOf(dd);
        if (void 0 === Jd) throw new Error(`Invalid block name. You sent ${dd}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Jd
      }
      getItemName(dd) {
        if (!dd || dd === PN.d) return PN.d;
        const Jd = this.idOf(dd);
        if (void 0 === Jd) throw new Error(`Item ${dd} not found in registry`);
        return (0, KN.d)(Jd)
      }
      blockNameToBlockId(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (dd === PN.d) return 0;
        let kd = this.idOf(dd);
        if (void 0 === kd || !this.isBlockId(kd)) {
          const Jd = dd.indexOf("|"),
            pd = Jd > 0 ? (0, KN.c)(dd.slice(0, Jd)) : void 0;
          kd = void 0 !== pd && this.isBlockId(pd) && (0, Np.rootMetaDescOf)(pd) === dd ? pd : void 0
        }
        if (void 0 !== kd) return kd;
        if (!Jd) throw new Error(`Invalid block name. You sent ${dd}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(dd) {
        return dd > 0 && dd < this.props.blockFlags.length
      }
      nameOfId(dd) {
        return 0 !== dd && (0, KN.d)(dd) || PN.d
      }
      itemType(dd) {
        const Jd = dd ? this.idOf(dd) : void 0;
        if (!Jd) return null;
        let kd = this.types.get(Jd);
        return void 0 === kd && (kd = Object.freeze({
          id: Jd,
          name: (0, KN.d)(Jd),
          meta: this.getMetaInfo(Jd),
          stackable: lN(this.props, Jd),
          type: (0, Np.itemTypeNameOf)(Jd),
          clipSize: (0, Np.clipSizeOf)(Jd),
          scopeType: (0, Np.scopeTypeOf)(Jd),
          showsAimingUi: (0, Np.showsAimingUi)(Jd)
        }), this.types.set(Jd, kd)), kd
      }
      getItemStat(dd, Jd) {
        if (gN.c.has(Jd)) {
          const kd = "minChargeStateToUse" === Jd ? this.getMetaInfo(dd).rootName : this.getItemName(dd),
            pd = this.options.get((0, gN.e)(kd, Jd));
          if (null !== pd && void 0 !== pd) return pd
        }
        return this.defaultStat(dd, Jd, this.statOf(Jd))
      }
      getDisplayName(dd) {
        return this.getItemStat(dd, "displayName")
      }
      getDefaultItemStat(dd, Jd) {
        return this.defaultStat(dd, Jd, this.statOf(Jd))
      }
      statOf(dd) {
        const Jd = LN[dd];
        return void 0 === Jd && function(dd, Jd) {
          throw new Error(`ClientApi.${dd} is not available yet in the wasm client (${Jd})`)
        }(`getItemStat("${dd}")`, `a table of the stat: the wasm client answers ${Object.keys(LN).join(", ")}`), Jd
      }
      defaultStat(dd, Jd, kd) {
        const pd = this.idOf(dd),
          Nd = void 0 === pd ? void 0 : kd(this.props, pd);
        return null !== Nd && void 0 !== Nd || "displayName" !== Jd ? Nd : this.getItemName(dd)
      }
      getClientOption(dd) {
        return this.options.get(dd)
      }
      getGunStats(dd) {
        return this.getClientOption(`${dd}GunStats`)
      }
      watchClientOption(dd, Jd) {
        return this.options.subscribe(dd, Jd)
      }
      isSolidBlockId(dd) {
        var Jd;
        return 0 !== ((null !== (Jd = this.props.blockFlags[dd]) && void 0 !== Jd ? Jd : 0) & Ld.A.Solid)
      }
      isStackableId(dd) {
        return lN(this.props, dd)
      }
      isFluidBlockId(dd) {
        var Jd;
        return 0 !== ((null !== (Jd = this.props.blockFlags[dd]) && void 0 !== Jd ? Jd : 0) & Ld.A.Fluid)
      }
      canPlaceOverBlockId(dd) {
        var Jd;
        return 0 !== ((null !== (Jd = this.props.blockFlags[dd]) && void 0 !== Jd ? Jd : 0) & Ld.A.PlaceOver)
      }
      attachedTopOf(dd) {
        var Jd;
        return null !== (Jd = this.props.blockAttachedTops[dd]) && void 0 !== Jd ? Jd : 0
      }
      isDroplessBlockId(dd) {
        return (0, Np.dropsNothing)(dd)
      }
    }

    function GN(dd, Jd) {
      const kd = new Map;
      return (pd, Nd) => {
        const Wd = Jd.idOf(pd),
          Pd = void 0 === Wd ? null : (pd => {
            let Nd = kd.get(pd);
            if (void 0 === Nd) {
              const Wd = dd.queries.salvageRecipe(pd),
                Pd = new DataView(dd.memory().buffer, dd.scratch(), Wd),
                Zd = [];
              for (let dd = 0; dd + Ld.he.BYTES <= Wd; dd += Ld.he.BYTES) Zd.push(Object.freeze({
                item: Jd.nameOfId(Ld.he.item(Pd, dd)),
                amt: Ld.he.amount(Pd, dd)
              }));
              Nd = 0 === Zd.length ? null : Object.freeze(Zd), kd.set(pd, Nd)
            }
            return Nd
          })(Wd);
        if (null === Pd || void 0 === Nd) return Pd;
        const Zd = Nd <= 0 ? 1 : Nd;
        return Pd.map((dd => {
          let {
            item: Jd,
            amt: kd
          } = dd;
          return {
            item: Jd,
            amt: kd * Zd
          }
        }))
      }
    }
    var vN = kd(40906),
      xN = kd(37119),
      qN = kd(37112),
      BN = kd(37141),
      sN = kd(36660),
      iN = kd(40672),
      aN = kd(42497);
    const MN = -1,
      FN = new Uint8Array(0),
      YN = new TextEncoder;

    function mN(dd) {
      if (null === dd) return null;
      const Jd = YN.encode(dd);
      return Jd.byteLength < ld.Fc ? Jd : Jd.subarray(0, ld.Fc - 1)
    }
    class bN {
      constructor(dd) {
        this.deps = dd, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = MN, this.keyframesSettled = !1, this.reloadFrom = MN
      }
      reloadKeyframes() {
        var dd, Jd;
        this.keyframesVersion = MN, this.reloadFrom = null !== (dd = null === (Jd = this.view()) || void 0 === Jd ? void 0 : Jd.version) && void 0 !== dd ? dd : MN
      }
      setPlayback(dd) {
        const Jd = 1 === this.deps.core.rNd(dd);
        return Jd && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = MN, this.reloadFrom = MN), Jd
      }
      async open(dd) {
        const Jd = await this.deps.replay.open(dd);
        return "opening" === Jd && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Jd
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(dd)), Jd)
      }
      setSpeed(dd) {
        this.deps.replay.setSpeed(dd)
      }
      setCameraMode(dd) {
        this.deps.replay.setCameraMode(aN.b.indexOf(dd))
      }
      view() {
        var dd;
        const Jd = Ld.u.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Jd) return this.lastView = null, null;
        const kd = new DataView(this.deps.buffer(), Jd, Ld.de.BYTES),
          pd = Ld.de.version(kd, 0),
          Nd = this.lastView;
        if (null !== Nd && Nd.version === pd) return Nd;
        const Wd = Ld.de.markIn(kd, 0),
          Pd = {
            version: pd,
            state: Ld.de.state(kd, 0),
            cameraMode: null !== (dd = aN.b[Ld.de.cameraMode(kd, 0)]) && void 0 !== dd ? dd : "recording",
            Do: Ld.de.Do(kd, 0),
            totalTicks: Ld.de.totalTicks(kd, 0),
            speed: Ld.de.speed(kd, 0),
            mark: Wd === Ld.ae ? null : {
              inTick: Wd,
              outTick: Ld.de.markOut(kd, 0)
            },
            editVersion: Ld.de.editVersion(kd, 0)
          };
        return this.lastView = Pd, Pd
      }
      keyframes() {
        const dd = this.view();
        if (null === dd) return [];
        dd.version !== this.reloadFrom && (this.reloadFrom = MN);
        const Jd = this.reloadFrom === MN && dd.state !== ld.sd.Cropping && dd.state !== ld.sd.None,
          kd = Jd ? dd.editVersion : dd.version;
        if (kd === this.keyframesVersion && Jd === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: pd
        } = this.deps, Nd = pd.uNd(), Wd = pd.Ie(), Pd = [];
        if (0 !== Wd && Nd > 0) {
          const dd = new DataView(this.deps.buffer(), Wd, Nd * ld.uc);
          for (let Jd = 0; Jd < Nd; Jd++) {
            const kd = Jd * ld.uc,
              pd = Jd => dd.getFloat64(kd + Jd, !0);
            Pd.push({
              Do: dd.getUint32(kd + ld.Cc, !0),
              position: [pd(ld.Bc), pd(ld.Bc + 8), pd(ld.Bc + 16)],
              direction: [pd(ld.xc), pd(ld.xc + 8), pd(ld.xc + 16)],
              easing: [pd(ld.zc), pd(ld.zc + 8), pd(ld.zc + 16), pd(ld.zc + 24)]
            })
          }
        }
        return this.keyframesVersion = kd, this.keyframesSettled = Jd, this.lastKeyframes = Pd, Pd
      }
      addKeyframe() {
        const dd = this.deps.apiView(),
          Jd = [Ld.u.eye(dd, 0, 0), Ld.u.eye(dd, 0, 1), Ld.u.eye(dd, 0, 2)];
        return this.deps.replay.addKeyframe(Jd, function(dd, Jd) {
          const kd = Math.cos(Jd);
          return [kd * Math.sin(dd), -Math.sin(Jd), kd * Math.cos(dd)]
        }(Ld.u.heading(dd, 0), Ld.u.pitch(dd, 0)))
      }
      setKeyframe(dd) {
        return this.deps.replay.setKeyframe(dd.Do, Float64Array.from([...dd.position, ...dd.direction, ...dd.easing]))
      }
      moveKeyframe(dd, Jd) {
        return this.deps.replay.moveKeyframe(dd, Jd)
      }
      deleteKeyframes(dd, Jd) {
        return this.deps.replay.deleteKeyframes(dd, Jd)
      }
      setMark(dd) {
        var Jd, kd;
        return this.deps.replay.setMark(null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.inTick) && void 0 !== Jd ? Jd : -1, null !== (kd = null === dd || void 0 === dd ? void 0 : dd.outTick) && void 0 !== kd ? kd : -1)
      }
      crop(dd, Jd) {
        const kd = this.deps.replay.crop(dd, Jd);
        return kd && this.reloadKeyframes(), kd
      }
      save(dd) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(dd)
      }
      recorderControl(dd) {
        this.deps.recorder.control(dd)
      }
      recorderPrefs(dd, Jd) {
        this.deps.recorder.prefs(dd, Jd)
      }
      recorderOption(dd, Jd) {
        const kd = this.deps.cmd();
        return null !== kd && (0, Ld.Jf)(kd, 0, dd, null === Jd ? FN : YN.encode(Jd))
      }
      recordFlyingText(dd, Jd, kd, pd) {
        const Nd = this.deps.cmd(),
          Wd = Math.max(0, Math.min(4294967295, Math.round(pd)));
        return null !== Nd && (0, Ld.Hf)(Nd, 0, Jd, kd, Wd, YN.encode(dd))
      }
      recordPlayerKilled(dd, Jd, kd, pd) {
        const Nd = this.deps.cmd();
        return null !== Nd && (0, Ld.Lf)(Nd, 0, dd, Jd, Math.max(0, kd), YN.encode(pd))
      }
      recordKillfeed(dd, Jd, kd) {
        var pd, Nd;
        const Wd = this.deps.cmd(),
          Pd = function(dd) {
            const Jd = dd.reduce(((dd, Jd) => {
                var kd;
                return dd + Vk.ob + (null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.byteLength) && void 0 !== kd ? kd : 0)
              }), 0),
              kd = new Uint8Array(Jd),
              pd = new DataView(kd.buffer);
            let Nd = 0;
            for (const Pd of dd) {
              var Wd;
              pd.setUint16(Nd, null !== (Wd = null === Pd || void 0 === Pd ? void 0 : Pd.byteLength) && void 0 !== Wd ? Wd : ld.Fc, !0), Nd += Vk.ob, null !== Pd && (kd.set(Pd, Nd), Nd += Pd.byteLength)
            }
            return kd
          }([mN(dd.name), mN(dd.colour), mN(Jd.name), mN(Jd.colour), mN(kd)]);
        return null !== Wd && (0, Ld.If)(Wd, 0, null !== (pd = dd.id) && void 0 !== pd ? pd : Ld.gd, null !== (Nd = Jd.id) && void 0 !== Nd ? Nd : Ld.gd, Pd)
      }
      recorderSession(dd, Jd) {
        this.deps.recorder.session({
          session: Jd,
          lobbyType: dd.lobbyType,
          game: dd.gameNameWithVariation,
          lobby: dd.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.tNd()
      }
      filePartDone(dd, Jd) {
        this.deps.recorder.filePartDone(dd, Jd)
      }
      fileDone(dd) {
        this.deps.recorder.fileDone(dd)
      }
    }
    const SN = -2147483648;
    class jN {
      constructor(dd) {
        var Jd;
        this.deps = dd, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Jd = dd.now) && void 0 !== Jd ? Jd : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var dd, Jd, kd;
        return null === (dd = null === (Jd = (kd = this.deps).live) || void 0 === Jd ? void 0 : Jd.call(kd)) || void 0 === dd || dd
      }
      activated(dd) {
        var Jd, kd;
        this.live && (this.viewerShown(!0 === (null === (Jd = (kd = this.deps).viewerOpen) || void 0 === Jd ? void 0 : Jd.call(kd))), this.deps.client.recorderSession(dd, (0, aN.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var dd, Jd;
        this.live && (this.state.recording || !0 !== (null === (dd = (Jd = this.deps).viewerOpen) || void 0 === dd ? void 0 : dd.call(Jd))) ? this.deps.client.recorderControl(ld.Wc.ToggleRecording) : this.deps.notify(BN.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(ld.Wc.SaveClip) : this.deps.notify(BN.e.clippingNotOn)
      }
      viewerShown(dd) {
        this.live && this.deps.client.recorderControl(dd ? ld.Wc.ViewerOpened : ld.Wc.ViewerClosed)
      }
      setPrefs(dd, Jd) {
        this.live && this.deps.client.recorderPrefs(dd, Jd)
      }
      setOption(dd, Jd) {
        this.live && this.deps.client.recorderOption(dd, Jd)
      }
      recordFlyingText(dd, Jd, kd, pd) {
        this.live && this.deps.client.recordFlyingText(dd, Jd, kd, pd)
      }
      recordPlayerKilled(dd, Jd, kd, pd) {
        this.live && this.deps.client.recordPlayerKilled(dd, Jd, kd, pd)
      }
      recordKillfeed(dd, Jd, kd) {
        this.live && this.deps.client.recordKillfeed(dd, Jd, kd)
      }
      Do() {
        let dd = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, dd = {
            ...dd,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Jd = Math.floor((this.now() - this.recordingSince) / 1e3);
          Jd !== dd.seconds && (dd = {
            ...dd,
            seconds: Jd
          })
        }
        this.set(dd)
      }
      onEvent(dd) {
        var Jd, kd;
        const {
          notify: pd
        } = this.deps, Nd = BN.e;
        switch (dd.what) {
          case ld.Uc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), pd(Nd.recordingStarted);
            break;
          case ld.Uc.RecordingStopped:
            this.stopRecording(), pd(Nd.recordingStopped), this.saveState(ld.id.Recording, "saving");
            break;
          case ld.Uc.RecordingDiscarded:
            this.stopRecording(), pd(Nd.recordingDiscarded);
            break;
          case ld.Uc.RecordingTurnedOff:
            this.stopRecording(), pd(Nd.recordingTurnedOff);
            break;
          case ld.Uc.LimitReached:
            pd(Nd.limitReached);
            break;
          case ld.Uc.ClipSaved:
            this.saveState(ld.id.Clip, "saving");
            break;
          case ld.Uc.ClipEmpty:
            pd(Nd.clipEmpty);
            break;
          case ld.Uc.ClippingNotOn:
            pd(Nd.clippingNotOn);
            break;
          case ld.Uc.Disallowed:
            pd(Nd.disallowed);
            break;
          case ld.Uc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case ld.Uc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case ld.Uc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case ld.Uc.SaveBusy:
            null === (Jd = (kd = this.deps).onSaveState) || void 0 === Jd || Jd.call(kd, dd.kind, "busy"), pd(Nd.saveBusy);
            break;
          case ld.Uc.CloseViewerFirst:
            pd(Nd.closeViewerFirst)
        }
      }
      fileReady(dd, Jd) {
        this.deps.download(Jd), this.saveState(dd, "done"), this.deps.notify(dd === ld.id.Clip ? BN.e.clipSaved : BN.e.recordingSaved)
      }
      failed(dd) {
        this.saveState(dd, "failed"), this.deps.notify(dd === ld.id.Clip ? BN.e.clipFailed : BN.e.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(dd, Jd) {
        var kd, pd;
        null === (kd = (pd = this.deps).onSaveState) || void 0 === kd || kd.call(pd, dd, Jd)
      }
      set(dd) {
        dd !== this.state && (this.state = dd, this.deps.onState(dd))
      }
    }
    const XN = new TextDecoder;

    function fN(dd, Jd, kd, pd) {
      const Nd = [];
      for (let Wd = 0; Wd < pd; Wd++) {
        if (Jd + Vk.ob > kd) return null;
        const pd = dd.getUint16(Jd, !0);
        if (Jd += Vk.ob, pd !== ld.Fc) {
          if (Jd + pd > kd) return null;
          Nd.push(XN.decode(new Uint8Array(dd.buffer, dd.byteOffset + Jd, pd))), Jd += pd
        } else Nd.push(null)
      }
      return Jd === kd ? Nd : null
    }

    function nN(dd, Jd) {
      let kd = new DataView(new ArrayBuffer(0)),
        pd = !0;
      const Nd = {
        replayFailed: (Jd, kd) => {
          dd.replayFailed({
            reason: Jd,
            code: kd
          })
        },
        replayOption: (Jd, Nd, Wd, Pd) => {
          const Zd = function(dd, Jd, kd, pd) {
            switch (Jd) {
              case ld.ld.Cleared:
                return 0 === pd ? null : void 0;
              case ld.ld.Text:
                return XN.decode(new Uint8Array(dd.buffer, dd.byteOffset + kd, pd));
              case ld.ld.Int:
                return pd === Int32Array.BYTES_PER_ELEMENT ? dd.getInt32(kd, !0) : void 0;
              case ld.ld.Double:
                return pd === Float64Array.BYTES_PER_ELEMENT ? dd.getFloat64(kd, !0) : void 0;
              default:
                return
            }
          }(kd, Nd, Wd, Pd);
          void 0 !== Zd ? dd.replayOption({
            key: Jd,
            value: Zd
          }) : pd = !1
        },
        replayUiEvent: (Jd, Nd, Wd, Pd, Zd, gd) => {
          const Cd = function(dd, Jd, kd, pd, Nd, Wd, Pd) {
            const Zd = Wd + Pd;
            switch (Jd) {
              case ld.pd.FlyingText: {
                const Pd = fN(dd, Wd, Zd, 1);
                return null !== Pd && null !== Pd[0] ? {
                  what: Jd,
                  fk: kd,
                  Xk: pd,
                  angle: Nd,
                  contentJson: Pd[0]
                } : null
              }
              case ld.pd.PlayerKilled: {
                const pd = fN(dd, Wd, Zd, 3);
                return pd ? {
                  what: Jd,
                  killstreak: kd,
                  dead: pd[0],
                  killer: pd[1],
                  withItem: pd[2]
                } : null
              }
              case ld.pd.Killfeed: {
                const kd = fN(dd, Wd, Zd, 7);
                return kd ? {
                  what: Jd,
                  killerId: kd[0],
                  killerName: kd[1],
                  killerColour: kd[2],
                  victimId: kd[3],
                  victimName: kd[4],
                  victimColour: kd[5],
                  withItem: kd[6]
                } : null
              }
              default:
                return null
            }
          }(kd, Jd, Nd, Wd, Pd, Zd, gd);
          null !== Cd ? dd.replayUiEvent(Cd) : pd = !1
        },
        replayFilePart: (kd, Nd, Wd, Pd) => {
          const Zd = Jd();
          Wd + Pd > Zd.byteLength ? pd = !1 : dd.filePart(kd, Nd, new Uint8Array(Zd, Wd, Pd).slice())
        },
        replayFileReady: (Jd, kd, pd, Nd) => {
          dd.fileReady({
            save: Jd,
            kind: kd,
            parts: pd,
            bytes: Nd
          })
        },
        recorderEvent: (Jd, kd, pd) => {
          dd.recorderEvent({
            what: Jd,
            kind: kd,
            save: pd
          })
        },
        replayOpened: (Jd, pd, Nd) => {
          dd.replayOpened(XN.decode(new Uint8Array(kd.buffer, kd.byteOffset + pd, Nd)))
        }
      };
      return (dd, Jd, Wd, Pd) => !(dd < ld.X.ReplayFailed || dd > ld.X.RecorderEvent) && (kd = Jd, pd = !0, (0, Ld.xe)(dd, Jd, Wd, Pd, Nd) && pd)
    }

    function UN(dd) {
      let Jd = null;
      const kd = nN(dd, (() => {
        if (null === Jd) throw new Error("a recorder event read outside recorderEventReader's call");
        return Jd.buffer
      }));
      return (dd, pd) => {
        Jd = pd;
        try {
          ! function(dd, Jd) {
            const kd = dd.slice(),
              pd = new DataView(kd.buffer);
            for (let Nd = 0; Nd < kd.byteLength;) {
              if (Nd + ld.U > kd.byteLength) throw new Error(`the recorder module's events end mid-head at ${Nd}`);
              const dd = pd.getUint32(Nd, !0),
                Wd = 65535 & dd,
                Pd = dd >>> 16,
                Zd = Nd + ld.U;
              if (Zd + Pd > kd.byteLength || !Jd(Wd, pd, Zd, Pd)) throw new Error(`the recorder module wrote a malformed event ${Wd} (${Pd} bytes) at ${Nd}`);
              Nd = Zd + (0, ld.xe)(Pd)
            }
          }(dd, kd)
        } finally {
          Jd = null
        }
      }
    }
    class yN {
      constructor(dd, Jd) {
        this.acks = dd, this.handlers = Jd, this.parts = new Map
      }
      onPart(dd, Jd, kd) {
        let pd = this.parts.get(dd);
        pd || (pd = [], this.parts.set(dd, pd)), pd[Jd] = kd, this.acks.filePartDone(dd, Jd)
      }
      onReady(dd) {
        var Jd;
        const kd = null !== (Jd = this.parts.get(dd.save)) && void 0 !== Jd ? Jd : [];
        this.parts.delete(dd.save);
        const pd = function(dd, Jd, kd) {
          if (dd.length !== Jd) return null;
          let pd = 0;
          for (let Pd = 0; Pd < Jd; Pd++) {
            if (void 0 === dd[Pd]) return null;
            pd += dd[Pd].byteLength
          }
          if (pd !== kd) return null;
          if (1 === Jd) return dd[0];
          const Nd = new Uint8Array(kd);
          let Wd = 0;
          for (const Pd of dd) Nd.set(Pd, Wd), Wd += Pd.byteLength;
          return Nd
        }(kd, dd.parts, dd.bytes);
        this.acks.fileDone(dd.save), null === pd ? this.handlers.fileIncomplete(dd.save, dd.kind) : this.handlers.fileReady(dd.save, dd.kind, pd)
      }
      onDiscarded(dd) {
        this.parts.delete(dd)
      }
    }

    function DN() {
      return kd.e(58).then((() => kd(42535)))
    }
    class TN {
      constructor(dd) {
        this.deps = dd, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Jd
        } = dd;
        this.recorder = new jN({
          client: Jd,
          live: () => {
            var dd;
            return !0 !== (null === (dd = this.viewer) || void 0 === dd ? void 0 : dd.inPlayback)
          },
          viewerOpen: dd.viewerOpen,
          notify: dd.notify,
          download: Jd => {
            var kd;
            null === (kd = dd.download) || void 0 === kd || kd.call(dd, Jd)
          },
          onState: dd.onRecorderState,
          onSaveState: dd.onSaveState
        }), this.parts = new yN(Jd, {
          fileReady: (dd, Jd, kd) => {
            var pd;
            Jd === ld.id.Edited ? null === (pd = this.viewer) || void 0 === pd || pd.saveDone(kd) : this.recorder.fileReady(Jd, kd)
          },
          fileIncomplete: (dd, Jd) => {
            this.saveFailed(Jd)
          }
        });
        const kd = {
          replayFailed: dd => {
            var Jd;
            null === (Jd = this.viewer) || void 0 === Jd || Jd.onFailed(dd)
          },
          replayOption: Jd => {
            var kd;
            null === (kd = dd.onReplayOption) || void 0 === kd || kd.call(dd, Jd)
          },
          replayUiEvent: Jd => {
            var kd;
            null === (kd = dd.onReplayUiEvent) || void 0 === kd || kd.call(dd, Jd)
          },
          filePart: (dd, Jd, kd) => {
            this.parts.onPart(dd, Jd, kd)
          },
          fileReady: dd => {
            this.parts.onReady(dd)
          },
          replayOpened: Jd => {
            var kd;
            null === (kd = dd.onReplayOpened) || void 0 === kd || kd.call(dd, Jd)
          },
          recorderEvent: dd => {
            var Jd;
            switch (dd.what) {
              case ld.Uc.FileDiscarded:
                this.parts.onDiscarded(dd.save);
                break;
              case ld.Uc.SaveFailed:
                this.saveFailed(dd.kind);
                break;
              case ld.Uc.SaveBusy:
                if (null !== (Jd = this.viewer) && void 0 !== Jd && Jd.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(dd);
                break;
              default:
                this.recorder.onEvent(dd)
            }
          }
        };
        this.sink = function(dd, Jd) {
          return {
            onReplayEvent: nN(dd, Jd)
          }
        }(kd, dd.buffer), this.recorderEvents = UN(kd)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var dd;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (dd = this.deps.loadViewer) && void 0 !== dd ? dd : DN)().catch((dd => {
          throw this.viewerChunk = null, dd
        })), this.viewerChunk.then((dd => (this.viewer ??= new dd.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var dd, Jd;
            null === (dd = (Jd = this.deps).onViewerChange) || void 0 === dd || dd.call(Jd)
          }
        }), this.viewer))))
      }
      activated(dd) {
        this.recorder.activated(dd)
      }
      afterFrame(dd) {
        try {
          dd > 0 && this.recorder.Do()
        } finally {
          var Jd;
          null === (Jd = this.viewer) || void 0 === Jd || Jd.afterFrame()
        }
      }
      end() {
        var dd;
        null === (dd = this.viewer) || void 0 === dd || dd.end()
      }
      saveFailed(dd) {
        var Jd;
        dd === ld.id.Edited ? null === (Jd = this.viewer) || void 0 === Jd || Jd.saveFailed(!1) : this.recorder.failed(dd)
      }
    }
    var EN = kd(40601),
      cN = kd(40624),
      hN = kd(4696),
      rN = kd(40993);
    class uN {
      constructor(dd) {
        this.deps = dd, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(dd, Jd) {
        if (!this.deps.live() || 0 === dd && 0 === Jd) return;
        const kd = (0, Ud.v)(0, performance.now()),
          pd = this.deps.dragScale();
        (0, rN.f)((() => {
          (0, Ud.A)(ld.ub.MouseDown, 0, 0, 0, kd), (0, Ud.A)(ld.ub.MouseMove, 0, dd * pd, Jd * pd, 0), (0, Ud.A)(ld.ub.MouseUp, 0, 0, 0, kd)
        }))
      }
      move(dd) {
        var Jd, kd;
        this.analogue[0] = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.x) && void 0 !== Jd ? Jd : 0, this.analogue[1] = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.y) && void 0 !== kd ? kd : 0, this.send()
      }
      holdVertical(dd, Jd) {
        const kd = "freeCamUp" === dd ? Ld.Yb.Up : Ld.Yb.Down;
        this.keys = Jd ? this.keys | kd : this.keys & ~kd, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const dd = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== dd && !(0, Ld.Re)(dd, 0, this.analogue, this.keys)
      }
    }
    var tN = kd(710),
      VN = kd(284),
      zN = kd(95),
      HN = kd(9153);

    function wN() {
      const dd = pd.d.get("clientEscMenuOptions"),
        Jd = (0, tN.n)(dd);
      return {
        mouse: (0, zN.isMobile)() ? Jd : dd.mouseSensitivity,
        touch: Jd,
        fovPercent: dd.cameraFOV
      }
    }

    function AN() {
      const dd = pd.d.get("clientEscMenuOptions"),
        Jd = pd.d.get("isTouchScreen") ? (0, tN.n)(dd) : dd.mouseSensitivity,
        kd = wN().mouse;
      return kd > 0 ? Jd / kd : 1
    }

    function dW(dd) {
      const Jd = () => {
        dd.setSoundPrefs(pd.d.get("soundVolume"), pd.d.get("soundOnFromAd"))
      };
      let kd = null;
      const Nd = () => {
        const {
          showFog: Jd,
          enableLighting: Nd,
          fogChunkDistance: Wd,
          chunkFadeIn: Pd
        } = pd.d.get("clientEscMenuOptions"), Zd = {
          showFog: Jd,
          lighting: Nd,
          fogChunks: Wd,
          chunkFade: Pd
        };
        kd && (0, ld.ke)(kd) === (0, ld.ke)(Zd) && kd.fogChunks === Wd || (kd = Zd, dd.setEnvPrefs(kd))
      };
      let Wd = null;
      const Zd = () => {
        const Jd = function() {
          const dd = pd.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: pd.d.get("areNametagsHidden"),
            crouchToggle: dd.crouchIsToggle,
            bhopDisabled: dd.disableBunnyHopping,
            disableBobbing: dd.disableBobbing,
            ezTowering: dd.ezTowering && (0, VN.d)(),
            ezBridging: dd.ezBridging,
            showChunkBorders: dd.showChunkBorders,
            nametagCutDistance: (0, HN.e)()
          }
        }();
        (0, Md.le)(Wd, Jd) || (Wd = Jd, dd.setUiPrefs(Jd))
      };
      let gd = null;
      const Cd = () => {
        const Jd = wN();
        (0, Md.le)(gd, Jd) || (gd = Jd, dd.setLookPrefs(Jd))
      };
      Jd(), Nd(), Zd(), Cd();
      const Kd = [(0, Pd.n)("appManagerUpdated|soundVolume", Jd), (0, Pd.n)("appManagerUpdated|soundOnFromAd", Jd), (0, Pd.n)("appManagerUpdated|clientEscMenuOptions", (() => {
        Nd(), Zd(), Cd()
      })), (0, Pd.n)("appManagerUpdated|areNametagsHidden", Zd), (0, Pd.n)("appManagerUpdated|showDistantNametags", Zd)];
      return () => {
        for (const dd of Kd) dd()
      }
    }
    var JW = kd(40919),
      kW = kd(40924);
    var pW = (0, kW.b)("lend"),
      NW = (0, kW.b)("starting"),
      WW = (0, kW.b)("generation"),
      PW = (0, kW.b)("end");
    class ZW {
      constructor(dd) {
        this.deps = dd, Object.defineProperty(this, PW, {
          value: gW
        }), Object.defineProperty(this, pW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NW, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, WW, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, JW.b)(this, pW)[pW] || (0, JW.b)(this, NW)[NW]
      }
      async start(dd) {
        if (this.active) return "busy";
        const Jd = (0, JW.b)(this, WW)[WW];
        (0, JW.b)(this, NW)[NW] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, JW.b)(this, NW)[NW] = !1
        }
        if (Jd !== (0, JW.b)(this, WW)[WW]) return "refused";
        const kd = this.deps.beginSave();
        if (!kd) return "refused";
        const pd = Number(BigInt.asUintN(32, dd)),
          Nd = Number(BigInt.asUintN(32, dd >> 32n));
        let Wd = "refused";
        return this.deps.recorderCall(((dd, Jd) => {
          const Pd = kd.editState,
            Zd = dd.stage(Pd.length);
          0 !== Zd ? (new Uint8Array(Jd.buffer, Zd, Pd.length).set(Pd), dd.VNd(kd.headLen, pd, Nd) && (Wd = "sealing")) : Wd = "tooLarge"
        }), !0), "sealing" !== Wd ? (kd.end(), Wd) : ((0, JW.b)(this, pW)[pW] = kd, "sealing")
      }
      beforeRecorderStep() {
        const dd = (0, JW.b)(this, pW)[pW];
        if (!dd) return null;
        let Jd = -1,
          kd = 0;
        if (!this.deps.recorderCall((dd => {
            Jd = dd.zNd(), Jd > 0 && (kd = dd.HNd())
          }))) return (0, JW.b)(this, PW)[PW](dd, "stopped");
        if (Jd < 0) return (0, JW.b)(this, PW)[PW](dd, "read");
        if (0 === Jd) return null;
        const pd = dd.head(kd, Jd);
        let Nd = !1;
        if (pd && this.deps.recorderCall(((dd, kd) => {
            const Wd = dd.stage(Jd);
            0 !== Wd && (new Uint8Array(kd.buffer, Wd, Jd).set(pd), Nd = !0)
          }), !0), Nd) return null;
        const Wd = dd.givenUp();
        this.deps.recorderCall((dd => {
          dd.wNd()
        }));
        const Pd = (0, JW.b)(this, PW)[PW](dd, Wd ? "givenUp" : "stopped");
        return Wd && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Pd
      }
      stop() {
        (0, JW.b)(this, WW)[WW]++;
        const dd = (0, JW.b)(this, pW)[pW];
        dd && (this.deps.recorderCall((dd => {
          dd.wNd()
        })), (0, JW.b)(this, PW)[PW](dd, "stopped"))
      }
    }

    function gW(dd, Jd) {
      return (0, JW.b)(this, pW)[pW] = null, dd.end(), Jd
    }

    function CW(dd, Jd) {
      const kd = new Uint8Array(4),
        pd = new DataView(kd.buffer);
      return pd.setUint8(0, dd ? 1 : 0), pd.setUint16(2, Math.max(0, Math.min(65535, Math.round(Jd))), !0), kd
    }

    function KW(dd, Jd) {
      return dd > function(dd) {
        return 16777216 + 314572.8 * Math.max(0, dd)
      }(Jd) + 33554432
    }
    let oW = null;

    function lW(dd) {
      return oW ??= async function(dd) {
        const Jd = dd.loadInFlight();
        Jd && await Jd.catch((() => {}));
        if (dd.trapped()) return "trapped";
        if (dd.busy() || !KW(dd.memoryBytes(), dd.clipSeconds())) return "qQ";
        dd.unload();
        let kd = !1;
        try {
          kd = await dd.load()
        } catch {
          kd = !1
        }
        if (!kd) return dd.trapped() ? "trapped" : dd.pL() ? "pL" : "failed";
        return "recycled"
      }(dd).finally((() => {
        oW = null
      })), oW
    }
    const QW = "Replay recording couldn't load, so try again.",
      LW = new Set([ld.Wc.ToggleRecording, ld.Wc.SaveClip]);
    var OW = (0, kW.b)("bindings"),
      eW = (0, kW.b)("module"),
      RW = (0, kW.b)("memory"),
      IW = (0, kW.b)("trapped"),
      GW = (0, kW.b)("pL"),
      vW = (0, kW.b)("recycleDue"),
      xW = (0, kW.b)("loading"),
      qW = (0, kW.b)("generation"),
      BW = (0, kW.b)("viewDrawn"),
      sW = (0, kW.b)("clip"),
      iW = (0, kW.b)("session"),
      aW = (0, kW.b)("control"),
      MW = (0, kW.b)("deferred"),
      FW = (0, kW.b)("coreU8"),
      YW = (0, kW.b)("coreU32"),
      mW = (0, kW.b)("moduleU8"),
      bW = (0, kW.b)("edited"),
      SW = (0, kW.b)("sendSession"),
      jW = (0, kW.b)("checkNotInEvents"),
      XW = (0, kW.b)("clipping"),
      fW = (0, kW.b)("busy"),
      nW = (0, kW.b)("use"),
      UW = (0, kW.b)("ensureLoaded"),
      yW = (0, kW.b)("loadOnce"),
      DW = (0, kW.b)("recycleAfterStep"),
      TW = (0, kW.b)("settleRecycle"),
      EW = (0, kW.b)("load"),
      cW = (0, kW.b)("attach"),
      hW = (0, kW.b)("resendHeld"),
      rW = (0, kW.b)("recycle"),
      uW = (0, kW.b)("send"),
      tW = (0, kW.b)("unload"),
      VW = (0, kW.b)("dropModule"),
      zW = (0, kW.b)("coreBytes"),
      HW = (0, kW.b)("coreWords"),
      wW = (0, kW.b)("moduleBytes"),
      AW = (0, kW.b)("loadFailed"),
      dP = (0, kW.b)("call"),
      JP = (0, kW.b)("guard"),
      kP = (0, kW.b)("trapOn");
    class pP {
      constructor(dd) {
        this.deps = dd, Object.defineProperty(this, kP, {
          value: aP
        }), Object.defineProperty(this, JP, {
          value: iP
        }), Object.defineProperty(this, dP, {
          value: sP
        }), Object.defineProperty(this, AW, {
          value: BP
        }), Object.defineProperty(this, wW, {
          value: qP
        }), Object.defineProperty(this, HW, {
          value: xP
        }), Object.defineProperty(this, zW, {
          value: vP
        }), Object.defineProperty(this, VW, {
          value: GP
        }), Object.defineProperty(this, tW, {
          value: IP
        }), Object.defineProperty(this, uW, {
          value: RP
        }), Object.defineProperty(this, rW, {
          value: eP
        }), Object.defineProperty(this, hW, {
          value: OP
        }), Object.defineProperty(this, cW, {
          value: LP
        }), Object.defineProperty(this, EW, {
          value: QP
        }), Object.defineProperty(this, TW, {
          value: lP
        }), Object.defineProperty(this, DW, {
          value: oP
        }), Object.defineProperty(this, yW, {
          value: KP
        }), Object.defineProperty(this, UW, {
          value: CP
        }), Object.defineProperty(this, nW, {
          value: gP
        }), Object.defineProperty(this, fW, {
          value: ZP
        }), Object.defineProperty(this, XW, {
          value: PP
        }), Object.defineProperty(this, jW, {
          value: WP
        }), Object.defineProperty(this, SW, {
          value: NP
        }), Object.defineProperty(this, OW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, RW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IW, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, GW, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, vW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qW, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, BW, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, sW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, FW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, YW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bW, {
          writable: !0,
          value: void 0
        }), (0, JW.b)(this, bW)[bW] = new ZW({
          ensureLoaded: () => (0, JW.b)(this, UW)[UW](),
          recorderCall: (dd, Jd) => {
            Jd && (0, JW.b)(this, jW)[jW]("an edited save's stage");
            const kd = (0, JW.b)(this, dP)[dP](((Jd, kd) => (dd(Jd, kd), !0)));
            return null !== kd && void 0 !== kd && kd
          },
          beginSave: dd.beginSave,
          givenUp: dd.givenUp
        })
      }
      get active() {
        return null !== (0, JW.b)(this, eW)[eW]
      }
      get trapped() {
        return (0, JW.b)(this, IW)[IW]
      }
      get loading() {
        return null !== (0, JW.b)(this, xW)[xW]
      }
      prefetch() {
        (0, JW.b)(this, GW)[GW] || (0, JW.b)(this, IW)[IW] || (0, JW.b)(this, eW)[eW] || (0, JW.b)(this, xW)[xW] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, JW.b)(this, BW)[BW] = !0, (0, JW.b)(this, XW)[XW]() && (0, JW.b)(this, nW)[nW]()
      }
      prefs(dd, Jd) {
        (0, JW.b)(this, sW)[sW] = {
          on: dd,
          seconds: Jd
        }, (0, JW.b)(this, uW)[uW](ld.Qc.Prefs, CW(dd, Jd)), dd && (0, JW.b)(this, BW)[BW] && (0, JW.b)(this, nW)[nW]()
      }
      control(dd) {
        const Jd = function(dd) {
          return new Uint8Array([dd, 0, 0, 0])
        }(dd);
        if (LW.has(dd)) return (0, JW.b)(this, eW)[eW] ? void(0, JW.b)(this, uW)[uW](ld.Qc.Control, Jd) : ((0, JW.b)(this, aW)[aW] = Jd, void(0, JW.b)(this, nW)[nW]());
        (0, JW.b)(this, GW)[GW] || this.deps.coreCommand(ld.Qc.Control, Jd)
      }
      session(dd) {
        (0, JW.b)(this, iW)[iW] = dd, (0, JW.b)(this, SW)[SW](dd)
      }
      filePartDone(dd, Jd) {
        (0, JW.b)(this, uW)[uW](ld.Qc.FilePartDone, function(dd, Jd) {
          const kd = new Uint8Array(8),
            pd = new DataView(kd.buffer);
          return pd.setUint32(0, dd, !0), pd.setUint32(4, Jd, !0), kd
        }(dd, Jd))
      }
      fileDone(dd) {
        return (0, JW.b)(this, uW)[uW](ld.Qc.FileDone, function(dd) {
          const Jd = new Uint8Array(4);
          return new DataView(Jd.buffer).setUint32(0, dd, !0), Jd
        }(dd)), (0, JW.b)(this, DW)[DW]()
      }
      saveEdited(dd) {
        return (0, JW.b)(this, jW)[jW]("saveEdited"), (0, JW.b)(this, bW)[bW].start(dd)
      }
      afterFrame() {
        if (!(0, JW.b)(this, eW)[eW]) return;
        "read" === (0, JW.b)(this, bW)[bW].beforeRecorderStep() && (0, JW.b)(this, DW)[DW]();
        const dd = (0, JW.b)(this, vW)[vW];
        (0, JW.b)(this, vW)[vW] = null;
        const Jd = (0, JW.b)(this, eW)[eW],
          kd = (0, JW.b)(this, RW)[RW];
        if (!Jd || !kd) return void(null === dd || void 0 === dd || dd.resolve((0, JW.b)(this, IW)[IW] ? "trapped" : "qQ"));
        const {
          core: pd
        } = this.deps, Nd = pd.JWd(2);
        let Wd, Pd, Zd, gd, Cd = 0,
          Kd = 0;
        if (0 !== Nd) {
          var od, ld;
          const dd = (0, JW.b)(this, HW)[HW]();
          Cd = null !== (od = dd[Nd >>> 2]) && void 0 !== od ? od : 0, Kd = null !== (ld = dd[1 + (Nd >>> 2)]) && void 0 !== ld ? ld : 0
        }
        try {
          if (Kd > 0) {
            const dd = Jd.feed(Kd);
            0 !== dd && (0, JW.b)(this, wW)[wW](kd).set((0, JW.b)(this, zW)[zW]().subarray(Cd, Cd + Kd), dd)
          }
          Wd = Jd.step(), Pd = Jd.kWd(), Zd = Jd.pWd(), gd = Jd.NWd()
        } catch (Qd) {
          if (!(0, JW.b)(this, kP)[kP](Qd)) throw null === dd || void 0 === dd || dd.resolve("qQ"), Qd;
          return void(null === dd || void 0 === dd || dd.resolve("trapped"))
        }
        if (Wd > 0) {
          const dd = pd.WWd(2, Wd);
          0 !== dd && (0, JW.b)(this, zW)[zW]().set((0, JW.b)(this, wW)[wW](kd).subarray(Pd, Pd + Wd), dd)
        }
        if (Zd > 0) {
          (0, JW.b)(this, MW)[MW] = [];
          try {
            this.deps.events(new Uint8Array(kd.buffer, gd, Zd), kd)
          } catch (Qd) {
            throw null === dd || void 0 === dd || dd.resolve("qQ"), Qd
          } finally {
            const dd = (0, JW.b)(this, MW)[MW];
            (0, JW.b)(this, MW)[MW] = null;
            for (const [Jd, kd] of dd)(0, JW.b)(this, uW)[uW](Jd, kd)
          }
        }
        if (!(0, JW.b)(this, XW)[XW]() && !(0, JW.b)(this, fW)[fW]()) return (0, JW.b)(this, tW)[tW](), void(null === dd || void 0 === dd || dd.resolve("qQ"));
        null === dd || void 0 === dd || dd.resolve((0, JW.b)(this, rW)[rW]())
      }
      dispose() {
        (0, JW.b)(this, GW)[GW] = !0, (0, JW.b)(this, tW)[tW]()
      }
    }

    function NP(dd) {
      (0, JW.b)(this, uW)[uW](ld.Qc.Session, function(dd) {
        const Jd = new TextEncoder,
          kd = Jd.encode(dd.game).subarray(0, 65535),
          pd = Jd.encode(dd.lobby).subarray(0, 65535),
          Nd = new Uint8Array(22 + kd.length + 2 + pd.length),
          Wd = new DataView(Nd.buffer);
        Wd.setFloat64(0, dd.unixMs, !0), Wd.setBigUint64(8, BigInt.asUintN(64, dd.session), !0), Wd.setUint8(16, dd.lobbyType);
        let Pd = 20;
        for (const Zd of [kd, pd]) Wd.setUint16(Pd, Zd.length, !0), Nd.set(Zd, Pd + 2), Pd += 2 + Zd.length;
        return Nd
      }({
        ...dd,
        unixMs: this.deps.unixNow()
      }))
    }

    function WP(dd) {
      false
    }

    function PP() {
      var dd, Jd;
      return null !== (dd = null === (Jd = (0, JW.b)(this, sW)[sW]) || void 0 === Jd ? void 0 : Jd.on) && void 0 !== dd && dd
    }

    function ZP() {
      const dd = (0, JW.b)(this, eW)[eW];
      let Jd = !0;
      if (dd) try {
        Jd = dd.busy()
      } catch (kd) {
        if (!(0, JW.b)(this, kP)[kP](kd)) throw kd
      }
      return Jd || (0, JW.b)(this, bW)[bW].active
    }
    async function gP() {
      !(0, JW.b)(this, GW)[GW] && this.deps.allowed() ? await (0, JW.b)(this, UW)[UW]() : (0, JW.b)(this, aW)[aW] = null
    }

    function CP() {
      return (0, JW.b)(this, IW)[IW] || (0, JW.b)(this, GW)[GW] ? Promise.resolve(!1) : (0, JW.b)(this, eW)[eW] ? Promise.resolve(!0) : ((0, JW.b)(this, xW)[xW] ??= (0, JW.b)(this, yW)[yW](), (0, JW.b)(this, xW)[xW])
    }
    async function KP() {
      let dd = !1;
      try {
        return dd = await (0, JW.b)(this, EW)[EW](), dd
      } finally {
        dd || ((0, JW.b)(this, aW)[aW] = null), (0, JW.b)(this, xW)[xW] = null
      }
    }

    function oP() {
      if (!(0, JW.b)(this, eW)[eW]) return Promise.resolve((0, JW.b)(this, IW)[IW] ? "trapped" : "qQ");
      if (!(0, JW.b)(this, vW)[vW]) {
        let dd = () => {};
        const Jd = new Promise((Jd => {
          dd = Jd
        }));
        (0, JW.b)(this, vW)[vW] = {
          promise: Jd,
          resolve: dd
        }
      }
      return (0, JW.b)(this, vW)[vW].promise
    }

    function lP(dd) {
      const Jd = (0, JW.b)(this, vW)[vW];
      (0, JW.b)(this, vW)[vW] = null, null === Jd || void 0 === Jd || Jd.resolve(dd)
    }
    async function QP() {
      let dd = (0, JW.b)(this, OW)[OW];
      if (!dd) {
        const Jd = (0, JW.b)(this, qW)[qW];
        try {
          dd = await this.deps.load()
        } catch (kd) {
          return Jd === (0, JW.b)(this, qW)[qW] && await (0, JW.b)(this, AW)[AW](kd), !1
        }
        if (Jd !== (0, JW.b)(this, qW)[qW]) return this.deps.unload(), !1;
        const pd = dd,
          Nd = (0, JW.b)(this, JP)[JP]((() => pd.PWd()));
        if (void 0 === Nd) return !1;
        const Wd = this.deps.core.ZWd();
        if (Nd !== Wd) return await (0, JW.b)(this, AW)[AW](new Error(`recorder port version ${Nd}, the core's ${Wd}`)), !1;
        (0, JW.b)(this, OW)[OW] = dd
      }
      const Jd = dd;
      try {
        if (!(0, JW.b)(this, JP)[JP]((() => ((0, JW.b)(this, eW)[eW] = new Jd.gWd, (0, JW.b)(this, RW)[RW] = Jd.ANd(), !0)))) return !1;
        (0, JW.b)(this, hW)[hW]();
        const dd = (0, JW.b)(this, aW)[aW];
        return (0, JW.b)(this, aW)[aW] = null, dd && (0, JW.b)(this, uW)[uW](ld.Qc.Control, dd), (0, JW.b)(this, cW)[cW]()
      } catch (kd) {
        return (0, JW.b)(this, tW)[tW](), await (0, JW.b)(this, AW)[AW](kd), !1
      }
    }

    function LP() {
      return this.deps.core.CWd(0), 1 === this.deps.core.CWd(1) || ((0, JW.b)(this, tW)[tW](), this.deps.failed(QW), !1)
    }

    function OP() {
      (0, JW.b)(this, sW)[sW] && (0, JW.b)(this, uW)[uW](ld.Qc.Prefs, CW((0, JW.b)(this, sW)[sW].on, (0, JW.b)(this, sW)[sW].seconds)), (0, JW.b)(this, iW)[iW] && (0, JW.b)(this, SW)[SW]((0, JW.b)(this, iW)[iW])
    }

    function eP() {
      return lW({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var dd, Jd;
          return null !== (dd = null === (Jd = (0, JW.b)(this, sW)[sW]) || void 0 === Jd ? void 0 : Jd.seconds) && void 0 !== dd ? dd : 0
        },
        trapped: () => (0, JW.b)(this, IW)[IW],
        busy: () => (0, JW.b)(this, fW)[fW](),
        loadInFlight: () => (0, JW.b)(this, xW)[xW],
        pL: () => (0, JW.b)(this, GW)[GW],
        unload: () => {
          (0, JW.b)(this, tW)[tW]()
        },
        load: () => (0, JW.b)(this, UW)[UW]()
      })
    }

    function RP(dd, Jd) {
      (0, JW.b)(this, MW)[MW] ? (0, JW.b)(this, MW)[MW].push([dd, Jd]): (0, JW.b)(this, dP)[dP](((kd, pd) => {
        const Nd = kd.dWd(Jd.length);
        0 !== Nd && (new Uint8Array(pd.buffer, Nd, Jd.length).set(Jd), kd.command(dd, Jd.length))
      }))
    }

    function IP() {
      (0, JW.b)(this, qW)[qW]++, (0, JW.b)(this, TW)[TW]("qQ"), (0, JW.b)(this, bW)[bW].stop(), this.deps.core.CWd(0), (0, JW.b)(this, VW)[VW](), (0, JW.b)(this, IW)[IW] || ((0, JW.b)(this, OW)[OW] = null, this.deps.unload())
    }

    function GP() {
      (0, JW.b)(this, dP)[dP]((dd => {
        dd.free()
      })), (0, JW.b)(this, eW)[eW] = null, (0, JW.b)(this, RW)[RW] = null, (0, JW.b)(this, mW)[mW] = null
    }

    function vP() {
      var dd;
      const Jd = this.deps.coreBuffer();
      return (null === (dd = (0, JW.b)(this, FW)[FW]) || void 0 === dd ? void 0 : dd.buffer) !== Jd && ((0, JW.b)(this, FW)[FW] = new Uint8Array(Jd)), (0, JW.b)(this, FW)[FW]
    }

    function xP() {
      var dd;
      const Jd = this.deps.coreBuffer();
      return (null === (dd = (0, JW.b)(this, YW)[YW]) || void 0 === dd ? void 0 : dd.buffer) !== Jd && ((0, JW.b)(this, YW)[YW] = new Uint32Array(Jd, 0, Jd.byteLength >>> 2)), (0, JW.b)(this, YW)[YW]
    }

    function qP(dd) {
      var Jd;
      const kd = dd.buffer;
      return (null === (Jd = (0, JW.b)(this, mW)[mW]) || void 0 === Jd ? void 0 : Jd.buffer) !== kd && ((0, JW.b)(this, mW)[mW] = new Uint8Array(kd)), (0, JW.b)(this, mW)[mW]
    }
    async function BP(dd) {
      await this.deps.staleOr(dd, (() => {
        this.deps.failed(QW)
      }))
    }

    function sP(dd) {
      const Jd = (0, JW.b)(this, eW)[eW],
        kd = (0, JW.b)(this, RW)[RW];
      if (Jd && kd) return (0, JW.b)(this, JP)[JP]((() => dd(Jd, kd)))
    }

    function iP(dd) {
      if (!(0, JW.b)(this, IW)[IW]) try {
        return dd()
      } catch (Jd) {
        if (!(0, JW.b)(this, kP)[kP](Jd)) throw Jd;
        return
      }
    }

    function aP(dd) {
      return dd instanceof WebAssembly.RuntimeError && ((0, JW.b)(this, IW)[IW] = !0, (0, JW.b)(this, eW)[eW] = null, (0, JW.b)(this, RW)[RW] = null, (0, JW.b)(this, mW)[mW] = null, (0, JW.b)(this, OW)[OW] = null, (0, JW.b)(this, aW)[aW] = null, (0, JW.b)(this, TW)[TW]("trapped"), this.deps.core.CWd(0), (0, JW.b)(this, bW)[bW].stop(), this.deps.crash(this.deps.markTrapped(dd)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var MP = kd(38785);
    const FP = new Map([
      ["skyblock", () => kd.e(50).then((() => kd(38780)))]
    ]);

    function YP(dd) {
      const Jd = FP.get(dd);
      return Jd ? Jd().then((() => {
        const Jd = (0, MP.e)(dd);
        if (!Jd) throw new Error(`${dd}'s replay hook module registered no hook`);
        return Jd
      })) : null
    }
    class mP {
      constructor(dd) {
        this.deps = dd, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(dd) {
        if (this.pending.clear(), dd === this.game && null !== this.hook) return void(this.all = !0);
        const Jd = ++this.generation;
        this.game = dd, this.hook = null, this.all = !1;
        const kd = this.deps.loadHook(dd);
        null === kd || void 0 === kd || kd.then((dd => {
          Jd === this.generation && (this.hook = dd, this.all = !0)
        }), (dd => {
          Jd === this.generation && this.deps.onError(dd)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(dd) {
        null === this.hook || this.all || this.pending.set(dd, !0)
      }
      entityInfoChanged(dd) {
        null === this.hook || this.all || this.pending.has(dd) || this.pending.set(dd, !1)
      }
      flush(dd) {
        const {
          hook: Jd
        } = this;
        if (null === Jd || !dd || !this.all && 0 === this.pending.size) return;
        const kd = this.deps.cmd();
        if (null === kd) return;
        const {
          api: pd
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: dd,
            count: Jd
          } = Dk(pd, this.ids);
          this.ids = dd;
          for (let kd = 0; kd < Jd; kd++) this.pending.set(dd[kd], !0)
        }
        const Nd = this.ids = Tk(this.ids, this.pending.size);
        let Wd = 0;
        for (const Cd of this.pending.keys()) Nd[Wd++] = Cd;
        const Pd = [],
          Zd = Ek(pd, Nd, Wd, ((dd, Jd) => {
            null !== Jd && Pd.push({
              serverId: dd,
              info: Jd,
              spawned: !0 === this.pending.get(dd)
            })
          }));
        if (Zd) {
          this.pending.clear();
          for (const {
              serverId: dd,
              info: pd,
              spawned: Nd
            }
            of Pd) try {
            Jd(pd, {
              setFacingTolerance: Jd => {
                null === Jd && Nd || gk(kd, dd, Jd) || this.pending.set(dd, Nd)
              }
            })
          } catch (gd) {
            this.deps.onError(gd)
          }
        }
      }
    }
    var bP = (0, kW.b)("bindings"),
      SP = (0, kW.b)("module"),
      jP = (0, kW.b)("memory"),
      XP = (0, kW.b)("trapped"),
      fP = (0, kW.b)("generation"),
      nP = (0, kW.b)("loading"),
      UP = (0, kW.b)("lend"),
      yP = (0, kW.b)("givenUp"),
      DP = (0, kW.b)("afterSave"),
      TP = (0, kW.b)("opens"),
      EP = (0, kW.b)("saveAskedAt"),
      cP = (0, kW.b)("unload"),
      hP = (0, kW.b)("dropModule"),
      rP = (0, kW.b)("loadFailed"),
      uP = (0, kW.b)("saveReadsBody"),
      tP = (0, kW.b)("command"),
      VP = (0, kW.b)("call"),
      zP = (0, kW.b)("guard"),
      HP = (0, kW.b)("trapOn");
    class wP {
      constructor(dd) {
        this.deps = dd, Object.defineProperty(this, HP, {
          value: PZ
        }), Object.defineProperty(this, zP, {
          value: WZ
        }), Object.defineProperty(this, VP, {
          value: NZ
        }), Object.defineProperty(this, tP, {
          value: pZ
        }), Object.defineProperty(this, uP, {
          get: kZ,
          set: void 0
        }), Object.defineProperty(this, rP, {
          value: JZ
        }), Object.defineProperty(this, hP, {
          value: dZ
        }), Object.defineProperty(this, cP, {
          value: AP
        }), Object.defineProperty(this, bP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, SP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XP, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, fP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, nP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, UP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DP, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TP, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, EP, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, JW.b)(this, SP)[SP] && null === (0, JW.b)(this, DP)[DP]
      }
      async open(dd) {
        if ((0, JW.b)(this, XP)[XP]) return ld.ed.ModuleTrap;
        let Jd = (0, JW.b)(this, bP)[bP];
        if (!Jd) {
          const dd = (0, JW.b)(this, fP)[fP];
          (0, JW.b)(this, nP)[nP]++;
          try {
            Jd = await this.deps.load()
          } catch (pd) {
            return (0, JW.b)(this, nP)[nP]--, dd !== (0, JW.b)(this, fP)[fP] ? "stopped" : (0, JW.b)(this, rP)[rP](pd)
          }
          if ((0, JW.b)(this, nP)[nP]--, dd !== (0, JW.b)(this, fP)[fP]) return (0, JW.b)(this, bP)[bP] || 0 !== (0, JW.b)(this, nP)[nP] || (0, JW.b)(this, XP)[XP] || this.deps.unload(), "stopped";
          if ((0, JW.b)(this, XP)[XP]) return ld.ed.ModuleTrap;
          const kd = Jd.PWd(),
            Nd = this.deps.core.ZWd();
          if (kd !== Nd) return (0, JW.b)(this, rP)[rP](new Error(`replay port version ${kd}, the core's ${Nd}`));
          (0, JW.b)(this, bP)[bP] = Jd
        }
        if (!(0, JW.b)(this, SP)[SP]) {
          const dd = Jd;
          if (!(0, JW.b)(this, zP)[zP]((() => {
              (0, JW.b)(this, SP)[SP] = new dd.KWd, (0, JW.b)(this, jP)[jP] = dd.oWd()
            }))) return ld.ed.ModuleTrap
        }
        let kd = !1;
        return (0, JW.b)(this, VP)[VP](((Jd, pd) => {
          null !== (0, JW.b)(this, DP)[DP] && Jd.step(0, 0);
          const Nd = Jd.stage(dd.length);
          0 !== Nd && (new Uint8Array(pd.buffer, Nd, dd.length).set(dd), Jd.open(), (0, JW.b)(this, yP)[yP] = (0, JW.b)(this, UP)[UP], (0, JW.b)(this, DP)[DP] = null, (0, JW.b)(this, TP)[TP]++, kd = !0)
        })) ? kd ? "opening" : ld.ed.TooLarge : ld.ed.ModuleTrap
      }
      beforeFrame(dd) {
        const Jd = (0, JW.b)(this, SP)[SP],
          kd = (0, JW.b)(this, jP)[jP];
        if (!Jd || !kd || null !== (0, JW.b)(this, DP)[DP]) return;
        const {
          core: pd
        } = this.deps, Nd = pd.lWd(dd);
        if (Nd < 0) return;
        const Wd = Math.floor(Nd);
        let Pd, Zd;
        try {
          Pd = Jd.step(Wd, Nd - Wd), Zd = Jd.kWd()
        } catch (Cd) {
          return void(0, JW.b)(this, HP)[HP](Cd)
        }
        const gd = pd.WWd(1, Pd);
        if (0 === gd) {
          const dd = (0, JW.b)(this, VP)[VP]((dd => {
            dd.close()
          }));
          if (!dd) return;
          return (0, JW.b)(this, uP)[uP] ? (0, JW.b)(this, DP)[DP] = "drop" : (0, JW.b)(this, hP)[hP](), void pd.QWd(ld.ed.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), gd, Pd).set(new Uint8Array(kd.buffer, Zd, Pd))
      }
      play() {
        (0, JW.b)(this, tP)[tP]((dd => {
          dd.play()
        }))
      }
      pause() {
        (0, JW.b)(this, tP)[tP]((dd => {
          dd.pause()
        }))
      }
      seek(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, JW.b)(this, tP)[tP]((kd => {
          kd.seek(dd, Jd)
        }))
      }
      setMark(dd, Jd) {
        return (0, JW.b)(this, tP)[tP]((kd => {
          kd.OWd(dd, Jd)
        }))
      }
      addKeyframe(dd, Jd) {
        return (0, JW.b)(this, tP)[tP]((kd => {
          kd.eWd(dd[0], dd[1], dd[2], Jd[0], Jd[1], Jd[2])
        }))
      }
      setKeyframe(dd, Jd) {
        return (0, JW.b)(this, tP)[tP]((kd => {
          kd.RWd(dd, Jd)
        }))
      }
      moveKeyframe(dd, Jd) {
        return (0, JW.b)(this, tP)[tP]((kd => {
          kd.IWd(dd, Jd)
        }))
      }
      deleteKeyframes(dd, Jd) {
        return (0, JW.b)(this, tP)[tP]((kd => {
          kd.GWd(dd, Jd)
        }))
      }
      crop(dd, Jd) {
        return null === (0, JW.b)(this, UP)[UP] && (0, JW.b)(this, tP)[tP]((kd => {
          kd.crop(dd, Jd)
        }))
      }
      beginSave() {
        const dd = (0, JW.b)(this, EP)[EP];
        if ((0, JW.b)(this, EP)[EP] = null, null !== dd && dd !== (0, JW.b)(this, TP)[TP]) return null;
        let Jd = 0,
          kd = null;
        if ((0, JW.b)(this, VP)[VP](((dd, pd) => {
            Jd = dd.save(), 0 !== Jd && (kd = new Uint8Array(pd.buffer, dd.vWd(), dd.xWd()).slice())
          })), 0 === Jd || !kd) return null;
        const pd = {
          headLen: Jd,
          editState: kd,
          givenUp: () => (0, JW.b)(this, yP)[yP] === pd,
          head: (dd, Jd) => {
            if ((0, JW.b)(this, UP)[UP] !== pd || !(0, JW.b)(this, uP)[uP]) return null;
            let kd = null;
            return (0, JW.b)(this, VP)[VP](((pd, Nd) => {
              const Wd = pd.qWd();
              0 !== Wd && dd >= 0 && Jd >= 0 && dd + Jd <= Wd && (kd = new Uint8Array(Nd.buffer, pd.BWd() + dd, Jd))
            })), kd
          },
          end: () => {
            if ((0, JW.b)(this, UP)[UP] !== pd) return;
            (0, JW.b)(this, UP)[UP] = null, (0, JW.b)(this, yP)[yP] = null, (0, JW.b)(this, VP)[VP]((dd => {
              dd.sWd()
            }));
            const dd = (0, JW.b)(this, DP)[DP];
            (0, JW.b)(this, DP)[DP] = null, "unload" === dd ? (0, JW.b)(this, cP)[cP]() : "drop" === dd && (0, JW.b)(this, hP)[hP]()
          }
        };
        return (0, JW.b)(this, UP)[UP] = pd, pd
      }
      askSave() {
        (0, JW.b)(this, EP)[EP] = (0, JW.b)(this, TP)[TP]
      }
      setSpeed(dd) {
        (0, JW.b)(this, tP)[tP]((Jd => {
          Jd.iWd(dd)
        }))
      }
      setCameraMode(dd) {
        (0, JW.b)(this, tP)[tP]((Jd => {
          Jd.aWd(dd)
        }))
      }
      close() {
        (0, JW.b)(this, tP)[tP]((dd => {
          dd.close()
        }))
      }
      stop() {
        (0, JW.b)(this, fP)[fP]++, (0, JW.b)(this, uP)[uP] && ((0, JW.b)(this, VP)[VP]((dd => {
          dd.close()
        })), (0, JW.b)(this, SP)[SP]) ? (0, JW.b)(this, DP)[DP] = "unload" : (0, JW.b)(this, cP)[cP]()
      }
    }

    function AP() {
      (0, JW.b)(this, hP)[hP](), (0, JW.b)(this, XP)[XP] || ((0, JW.b)(this, bP)[bP] = null, this.deps.unload())
    }

    function dZ() {
      (0, JW.b)(this, VP)[VP]((dd => {
        dd.free()
      })), (0, JW.b)(this, SP)[SP] = null, (0, JW.b)(this, jP)[jP] = null
    }
    async function JZ(dd) {
      return await this.deps.staleOr(dd, (() => {})) ? "reloading" : ld.ed.ModuleLoad
    }

    function kZ() {
      return null !== (0, JW.b)(this, UP)[UP] && (0, JW.b)(this, yP)[yP] !== (0, JW.b)(this, UP)[UP]
    }

    function pZ(dd) {
      return null === (0, JW.b)(this, DP)[DP] && (0, JW.b)(this, VP)[VP](dd)
    }

    function NZ(dd) {
      const Jd = (0, JW.b)(this, SP)[SP],
        kd = (0, JW.b)(this, jP)[jP];
      return !(!Jd || !kd) && (0, JW.b)(this, zP)[zP]((() => {
        dd(Jd, kd)
      }))
    }

    function WZ(dd) {
      if ((0, JW.b)(this, XP)[XP]) return !1;
      try {
        return dd(), !0
      } catch (Jd) {
        return (0, JW.b)(this, HP)[HP](Jd), !1
      }
    }

    function PZ(dd) {
      if (!(dd instanceof WebAssembly.RuntimeError)) throw dd;
      (0, JW.b)(this, XP)[XP] = !0, (0, JW.b)(this, SP)[SP] = null, (0, JW.b)(this, jP)[jP] = null, (0, JW.b)(this, bP)[bP] = null, this.deps.crash(this.deps.markTrapped(dd)), this.deps.core.QWd(ld.ed.ModuleTrap)
    }
    var ZZ = kd(6351),
      gZ = kd(40705);
    const CZ = "[bloxd-wasm-client]";
    const KZ = String(SN);

    function oZ(dd) {
      return null === dd || dd === KZ ? void 0 : dd
    }

    function lZ(dd) {
      var Jd, kd, pd, Nd, Wd, Zd, gd;
      switch (dd.what) {
        case ld.pd.FlyingText: {
          let Jd;
          try {
            Jd = JSON.parse(dd.contentJson)
          } catch (Cd) {
            return void console.warn(`${CZ} a replay's flying text isn't JSON`, Cd)
          }
          Pd.j.nO("forceFlyingMiddleMessage", {
            content: Jd,
            Xk: dd.Xk,
            angle: dd.angle,
            fk: dd.fk
          });
          break
        }
        case ld.pd.PlayerKilled:
          (0, gZ.d)({
            kind: "killed",
            body: {
              deadEId: null !== (Jd = oZ(dd.dead)) && void 0 !== Jd ? Jd : "",
              killerEId: oZ(dd.killer),
              withItem: null !== (kd = dd.withItem) && void 0 !== kd ? kd : "",
              killstreak: dd.killstreak
            }
          });
          break;
        case ld.pd.Killfeed:
          (0, gZ.d)({
            kind: "custom",
            body: {
              killer: {
                eId: oZ(dd.killerId),
                name: null !== (pd = dd.killerName) && void 0 !== pd ? pd : void 0,
                colour: null !== (Nd = dd.killerColour) && void 0 !== Nd ? Nd : void 0
              },
              victim: {
                eId: oZ(dd.victimId),
                name: null !== (Wd = dd.victimName) && void 0 !== Wd ? Wd : void 0,
                colour: null !== (Zd = dd.victimColour) && void 0 !== Zd ? Zd : void 0
              },
              withItem: null !== (gd = dd.withItem) && void 0 !== gd ? gd : ""
            }
          })
      }
    }
    const QZ = "[bloxd-wasm-client]";

    function LZ(dd) {
      if (void 0 === dd || null === dd || "" === dd) return null;
      const Jd = Number(dd);
      return Number.isInteger(Jd) && Jd > SN && Jd <= 2147483647 ? Jd : null
    }

    function OZ(dd) {
      return {
        id: LZ(dd.eId),
        name: "string" === typeof dd.name ? dd.name : null,
        colour: "string" === typeof dd.colour ? dd.colour : null
      }
    }

    function eZ(dd) {
      const Jd = (0, cN.l)(Vk.ac.PlayerKilled, (Jd => {
          var kd, pd;
          const Nd = (0, EN.f)(Jd);
          if (!(0, EN.d)(Nd)) return;
          const {
            deadEId: Wd,
            killerEId: Pd,
            withItem: Zd,
            killstreak: gd
          } = Nd;
          dd.recordPlayerKilled(null !== (kd = LZ(Wd)) && void 0 !== kd ? kd : SN, null !== (pd = LZ(Pd)) && void 0 !== pd ? pd : SN, "number" === typeof gd ? gd : 0, "string" === typeof Zd ? Zd : "")
        })),
        kd = (0, cN.l)(Vk.ac.CustomKillfeed, (Jd => {
          const kd = (0, EN.f)(Jd);
          if (!(0, EN.d)(kd) || !(0, EN.d)(kd.killer) || !(0, EN.d)(kd.victim)) return;
          const {
            killer: pd,
            victim: Nd,
            withItem: Wd
          } = kd;
          dd.recordKillfeed(OZ(pd), OZ(Nd), "string" === typeof Wd ? Wd : null)
        }));
      return () => {
        Jd(), kd()
      }
    }

    function RZ(dd) {
      var Jd;
      return void 0 === dd || null === dd ? null : null !== (Jd = JSON.stringify(dd)) && void 0 !== Jd ? Jd : null
    }

    function IZ(dd) {
      let Jd = null;
      const kd = () => {
        const {
          enableClipping: kd,
          clipDurationSeconds: Nd
        } = pd.d.get("clientEscMenuOptions"), Wd = `${kd}:${Nd}`;
        Wd !== Jd && (Jd = Wd, dd.recorder.setPrefs(kd, Nd))
      };
      return kd(), (0, Pd.n)("appManagerUpdated|clientEscMenuOptions", kd)
    }
    const GZ = "replayModule",
      vZ = "recorderModule";

    function xZ(dd, Jd, kd) {
      return function() {
        return dd.isStopped ? kd : Jd(...arguments)
      }
    }
    const qZ = {
      open: () => Promise.reject(new Error(BN.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function BZ() {
      return kd.e(62).then((() => kd(61196)))
    }

    function sZ(dd) {
      (0, BN.i)({
        text: dd,
        type: "Error"
      })
    }
    class iZ {
      constructor(dd) {
        this.deps = dd, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Jd,
          api: pd,
          core: Nd
        } = dd, Wd = () => dd.memory().buffer, Pd = () => Jd.isStopped ? null : Jd.rings.cmd, Zd = xZ(Jd, ((dd, Jd) => Nd.WWd(dd, Jd)), 0), gd = () => Nd.ZWd();
        let Cd = null;
        this.replay = new wP({
          core: {
            lWd: xZ(Jd, (dd => Nd.lWd(dd)), -1),
            WWd: Zd,
            ZWd: gd,
            QWd: xZ(Jd, (dd => {
              Nd.QWd(dd)
            }), void 0)
          },
          coreBuffer: Wd,
          load: async () => (Cd = await kd.e(63).then((() => kd(61211))), Cd.loadReplayModule()),
          unload: () => {
            var dd;
            null === (dd = Cd) || void 0 === dd || dd.unloadReplayModule()
          },
          markTrapped: dd => Cd ? Cd.markReplayTrapped(dd) : new Error(String(dd)),
          staleOr: (Jd, kd) => dd.staleOr(GZ, Jd, kd),
          crash: Jd => {
            dd.reportFault(GZ, Jd)
          }
        });
        let Kd = null;
        this.recorder = new pP({
          core: {
            CWd: xZ(Jd, (dd => Nd.CWd(dd)), 0),
            JWd: xZ(Jd, (dd => Nd.JWd(dd)), 0),
            WWd: Zd,
            ZWd: gd
          },
          coreCommand: (dd, Jd) => {
            var kd, pd;
            return null !== (kd = null === (pd = Pd()) || void 0 === pd ? void 0 : pd.writeCmd(dd, 0, Jd)) && void 0 !== kd && kd
          },
          coreBuffer: Wd,
          load: async () => (Kd = await BZ(), Kd.loadRecorderModule()),
          prefetch: () => {
            BZ().then((dd => dd.prefetchRecorderModule())).catch((dd => {
              console.warn(`${QZ} the recorder module didn't prefetch, so a save loads it:`, dd)
            }))
          },
          unload: () => {
            var dd;
            null === (dd = Kd) || void 0 === dd || dd.unloadRecorderModule()
          },
          markTrapped: dd => Kd ? Kd.markRecorderTrapped(dd) : new Error(String(dd)),
          memoryBytes: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = Kd) || void 0 === Jd ? void 0 : Jd.recorderMemoryBytes()) && void 0 !== dd ? dd : 0
          },
          staleOr: (Jd, kd) => dd.staleOr(vZ, Jd, kd),
          crash: Jd => {
            dd.reportFault(vZ, Jd)
          },
          allowed: () => !0 === dd.options.get("canRecordReplays"),
          failed: sZ,
          events: (dd, Jd) => {
            this.runtime.recorderEvents(dd, Jd)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: sZ,
          unixNow: () => Date.now()
        });
        const od = new bN({
          core: {
            rNd: xZ(Jd, (dd => Nd.rNd(dd)), 0),
            tNd: xZ(Jd, (() => {
              Nd.tNd()
            }), void 0),
            Ie: xZ(Jd, (() => Nd.Ie()), 0),
            uNd: xZ(Jd, (() => Nd.uNd()), 0)
          },
          buffer: Wd,
          apiView: () => pd.apiView,
          cmd: Pd,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new mP({
          api: pd,
          cmd: Pd,
          loadHook: YP,
          onError: dd => {
            console.warn(`${QZ} the recorded game's replay hooks:`, dd)
          }
        });
        const ld = new TN({
          client: od,
          buffer: Wd,
          setHoldDraws: dd => {
            Jd.setHoldDraws(dd)
          },
          notify: BN.i,
          onRecorderState: () => {
            var dd;
            null === (dd = (0, iN.f)()) || void 0 === dd || dd.recorderChanged()
          },
          onViewerChange: () => {
            var dd;
            null === (dd = (0, iN.f)()) || void 0 === dd || dd.viewerChanged()
          },
          onReplayOption: Jd => {
            ! function(dd, Jd) {
              var kd, pd;
              const Nd = Vk.kb[Jd.key];
              if (void 0 === Nd) return;
              let Wd = null !== (kd = Jd.value) && void 0 !== kd ? kd : JSON.parse(JSON.stringify(null !== (pd = ZZ.c[Nd]) && void 0 !== pd ? pd : null));
              if (null !== Jd.value && Jd.key < Vk.Hb.Environment && "string" === typeof Wd) try {
                Wd = JSON.parse(Wd)
              } catch (Pd) {
                return void console.warn(`${CZ} a replay's ${Nd} isn't JSON`, Pd)
              }
              dd.applyNewClientOptions({
                [Nd]: Wd
              })
            }(dd.options, Jd)
          },
          onReplayUiEvent: lZ,
          onReplayOpened: Jd => {
            this.entityHooks.opened((0, Md._b)(Jd)), dd.replayShaderPack(Jd)
          },
          meshPending: () => {
            var dd, kd;
            return null !== (dd = null === (kd = Jd.lastHeader) || void 0 === kd ? void 0 : kd.renderPending) && void 0 !== dd ? dd : 0
          },
          viewerOpen: sN.e,
          download: dd => {
            (0, xN.j)(dd)
          }
        });
        this.runtime = ld, pd.replay = ld.sink, (0, iN.v)(ld);
        const Qd = new uN({
          live: () => {
            var dd;
            return !Jd.isStopped && !0 === (null === (dd = ld.currentViewer) || void 0 === dd ? void 0 : dd.inPlayback)
          },
          cmd: Pd,
          dragScale: AN
        });
        this.freecam = Qd, (0, iN.s)(Qd), this.recordedOptions = function(dd, Jd) {
          const kd = Vk.kb,
            pd = kd.map(((kd, pd) => Jd.subscribe(kd, (Jd => {
              dd.setOption(pd, RZ(Jd))
            }))));
          return {
            sendAll() {
              kd.forEach(((kd, pd) => {
                dd.setOption(pd, RZ(Jd.get(kd)))
              }))
            },
            stop() {
              for (const dd of pd) dd()
            }
          }
        }(ld.recorder, dd.options), this.stops = [(0, Wp.q)((dd => {
          Qd.flush();
          try {
            this.replay.beforeFrame(dd)
          } catch (Jd) {
            this.deps.reportFault("replayFrame", Jd)
          }
        })), (0, Wp.G)(((dd, Jd) => {
          try {
            this.recorder.afterFrame(), Jd && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (kd) {
            this.deps.reportFault("recorderFrame", kd)
          }
          try {
            ld.afterFrame(dd)
          } catch (kd) {
            this.deps.reportFault("replayRuntime", kd)
          }
        })), IZ(ld), () => {
          this.recordedOptions.stop()
        }, eZ(ld.recorder), (0, hN.i)((dd => {
          let {
            action: Jd,
            down: kd
          } = dd;
          var pd;
          kd && (null === (pd = (0, iN.f)()) || void 0 === pd || pd.keyDown(Jd))
        }))];
        const Ld = () => {
          const dd = ld.currentViewer;
          return !0 === (null === dd || void 0 === dd ? void 0 : dd.isOpen) ? dd : null
        };
        (0, qN.d)({
          open: (dd, Jd) => this.open(dd, Jd),
          replayKey: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = Ld()) || void 0 === Jd ? void 0 : Jd.id) && void 0 !== dd ? dd : null
          },
          saveRefusal: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = Ld()) || void 0 === Jd ? void 0 : Jd.saveRefusal) && void 0 !== dd ? dd : null
          },
          encode: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = Ld()) || void 0 === Jd ? void 0 : Jd.save()) && void 0 !== dd ? dd : Promise.resolve(null)
          },
          fileHandle: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = ld.currentViewer) || void 0 === Jd ? void 0 : Jd.fileHandle) && void 0 !== dd ? dd : null
          },
          markSaved: (dd, Jd) => {
            var kd;
            null === (kd = ld.currentViewer) || void 0 === kd || kd.markSaved(dd, Jd)
          }
        })
      }
      netEvent(dd) {
        if ("connection" === dd.type)
          if (dd.phase === ld.C.Activated) {
            this.activeConn = dd.conn;
            const Jd = this.deps.sessionInfo(dd.conn);
            null !== Jd && (this.runtime.activated({
              lobbyType: (0, Fd.u)(Jd.lobbyName),
              gameNameWithVariation: Jd.gameNameWithVariation,
              lobbyName: Jd.lobbyName
            }), this.recordedOptions.sendAll())
          } else dd.phase !== ld.C.Left && dd.phase !== ld.C.Closed || dd.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const dd of this.stops) dd();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, iN.k)() === this.runtime && (0, iN.v)(null), (0, iN.g)() === this.freecam && (0, iN.s)(null), (0, qN.d)(qZ), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(dd, Jd) {
        const {
          running: kd
        } = this.deps;
        if (kd.isStopped) throw new Error(BN.e.coreStopped.text);
        if (dd.byteLength > 67108864) throw new Error(BN.e.cantOpen.text);
        let pd;
        try {
          pd = await async function(dd) {
            const Jd = await dd.loadViewer();
            return Jd.inPlayback || (0, Wp.P)().leaveGame(null), Jd
          }(this.runtime)
        } catch (Nd) {
          throw console.warn(`${QZ} the replay viewer didn't load`, Nd), new Error(BN.e.viewerLoadFailed.text)
        }
        if (kd.isStopped) throw new Error(BN.e.coreStopped.text);
        await pd.open(dd, Jd)
      }
    }
    var aZ = kd(1955);

    function MZ(dd, Jd) {
      const {
        aux: kd,
        payload: pd
      } = function(dd) {
        return {
          aux: dd.reset ? ld.$b.ResetFirst : 0,
          payload: YZ(dd.changes)
        }
      }(Jd);
      dd.queueOptions(kd, pd) && (Jd.reset && aZ.b.reset(), aZ.b.apply(Jd.changes))
    }
    const FZ = new TextEncoder;

    function YZ(dd) {
      const Jd = new mZ;
      return SZ(Jd, dd), Jd.bytes()
    }
    class mZ {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(dd) {
        if (this.len + dd <= this.buf.length) return;
        const Jd = new Uint8Array(Math.max(2 * this.buf.length, this.len + dd));
        Jd.set(this.buf.subarray(0, this.len)), this.buf = Jd, this.view = new DataView(Jd.buffer)
      }
      u8(dd) {
        this.room(1), this.buf[this.len++] = dd
      }
      tagged(dd, Jd, kd) {
        this.room(1 + Jd), this.buf[this.len++] = dd, 1 === Jd ? this.view.setUint8(this.len, kd) : 2 === Jd ? this.view.setUint16(this.len, kd) : this.view.setUint32(this.len, kd), this.len += Jd
      }
      signed(dd, Jd, kd) {
        this.room(1 + Jd), this.buf[this.len++] = dd, 1 === Jd ? this.view.setInt8(this.len, kd) : 2 === Jd ? this.view.setInt16(this.len, kd) : this.view.setInt32(this.len, kd), this.len += Jd
      }
      f64(dd) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, dd), this.len += 8
      }
      raw(dd) {
        this.room(dd.length), this.buf.set(dd, this.len), this.len += dd.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function bZ(dd, Jd, kd, pd, Nd, Wd, Pd) {
      Jd < pd ? dd.u8(kd | Jd) : null !== Nd && Jd < 256 ? dd.tagged(Nd, 1, Jd) : Jd < 65536 ? dd.tagged(Wd, 2, Jd) : dd.tagged(Pd, 4, Jd)
    }

    function SZ(dd, Jd) {
      switch (typeof Jd) {
        case "undefined":
          return void dd.raw(jZ);
        case "boolean":
          return void dd.u8(Jd ? 195 : 194);
        case "number":
          return void
          function(dd, Jd) {
            Jd >>> 0 === Jd ? Jd < 128 ? dd.u8(Jd) : Jd < 256 ? dd.tagged(204, 1, Jd) : Jd < 65536 ? dd.tagged(205, 2, Jd) : dd.tagged(206, 4, Jd) : (Jd | 0) === Jd ? Jd >= -32 ? dd.u8(255 & Jd) : Jd >= -128 ? dd.signed(208, 1, Jd) : Jd >= -32768 ? dd.signed(209, 2, Jd) : dd.signed(210, 4, Jd) : dd.f64(Jd)
          }(dd, Jd);
        case "string": {
          const kd = FZ.encode(Jd);
          return bZ(dd, kd.length, 160, 32, 217, 218, 219), void dd.raw(kd)
        }
        case "object":
          break;
        default:
          return void dd.u8(192)
      }
      if (null === Jd) dd.u8(192);
      else if (Array.isArray(Jd)) {
        bZ(dd, Jd.length, 144, 16, null, 220, 221);
        for (const kd of Jd) SZ(dd, kd)
      } else if (Jd instanceof Uint8Array) bZ(dd, Jd.length, 0, 0, 196, 197, 198), dd.raw(Jd);
      else {
        const kd = Object.keys(Jd);
        bZ(dd, kd.length, 128, 0, null, 222, 223);
        for (const pd of kd) SZ(dd, pd), SZ(dd, Jd[pd])
      }
    }
    const jZ = new Uint8Array([212, 0, 0]);
    var XZ = kd(42499),
      fZ = kd(42507),
      nZ = kd(41011),
      UZ = kd(41049),
      yZ = kd(2770);
    const DZ = [1e3, 3e3, 9e3];
    class TZ {
      constructor(dd) {
        this.host = dd, this.sets = new Map, this.table = [], this.generation = 0, this.pL = !1
      }
      onEvent(dd) {
        const Jd = function(dd) {
          if (dd.byteLength !== ld.xd) return null;
          const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
          return {
            want: Jd.getUint16(0, !0),
            release: Jd.getUint16(2, !0)
          }
        }(dd);
        Jd && !this.pL && (Jd.release !== ld.Bd && this.release(Jd.release), Jd.want !== ld.Bd && this.want(Jd.want))
      }
      reset(dd) {
        if (!this.pL) {
          for (const [dd, Jd] of this.sets) "ready" === Jd.state && this.releaseAll(Jd.distinct), this.sets.delete(dd);
          this.table = dd, this.generation++
        }
      }
      dispose() {
        if (this.pL) return;
        this.pL = !0, this.generation++, this.table = [];
        const dd = [...this.sets.values()];
        this.sets.clear();
        let Jd = null;
        for (const pd of dd)
          for (const dd of "ready" === pd.state ? pd.distinct : []) try {
            this.host.lpd(dd)
          } catch (kd) {
            Jd ??= {
              error: kd
            }
          }
        if (Jd) throw Jd.error
      }
      isReady(dd) {
        var Jd;
        return "ready" === (null === (Jd = this.sets.get(dd)) || void 0 === Jd ? void 0 : Jd.state)
      }
      want(dd) {
        const Jd = this.sets.get(dd);
        if ("loading" === (null === Jd || void 0 === Jd ? void 0 : Jd.state)) return Jd.wanted = !0, void this.capAnswer(dd, Jd);
        if ("ready" === (null === Jd || void 0 === Jd ? void 0 : Jd.state)) return void this.host.sendReady(cZ(dd, Jd.images, Jd.size));
        const kd = this.table[dd];
        if (!kd || 1 !== kd.urls.length && kd.urls.length !== Vk.Vb.CubeFaces) return this.host.sendReady(hZ(dd)), void this.host.onLoadFailed(dd, "", new Error(`no image set ${dd}`));
        const pd = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(dd, pd), this.load(dd, kd, pd, this.generation, 0), this.capAnswer(dd, pd)
      }
      capAnswer(dd, Jd) {
        this.host.wait(4e3, (() => {
          this.sets.get(dd) === Jd && Jd.wanted && this.host.sendReady(hZ(dd))
        }))
      }
      load(dd, Jd, kd, pd, Nd) {
        const Wd = [...new Set(Jd.urls)];
        Promise.allSettled(Wd.map((dd => this.host.loadImage(dd, Jd.orientation)))).then((Pd => {
          const Zd = Pd.flatMap((dd => "fulfilled" === dd.status ? [dd.value] : [])),
            gd = pd === this.generation && this.sets.get(dd) === kd,
            Cd = Pd.findIndex((dd => "rejected" === dd.status));
          if (!gd || !kd.wanted) return this.pL ? void this.releaseAfterDispose(Zd.map(EZ)) : (this.releaseAll(Zd.map(EZ)), void(gd && this.sets.delete(dd)));
          Cd < 0 ? this.loaded(dd, Jd, Wd, Zd) : (this.releaseAll(Zd.map(EZ)), this.host.sendReady(hZ(dd)), Nd < DZ.length ? this.host.wait(DZ[Nd], (() => {
            pd === this.generation && this.sets.get(dd) === kd && (kd.wanted ? this.load(dd, Jd, kd, pd, Nd + 1) : this.sets.delete(dd))
          })) : (this.sets.delete(dd), this.host.onLoadFailed(dd, Wd[Cd], Pd[Cd].reason)))
        }))
      }
      loaded(dd, Jd, kd, pd) {
        const [Nd] = pd, Wd = [Nd.width, Nd.height], Pd = pd.every((dd => dd.width === Wd[0] && dd.height === Wd[1])), Zd = Jd.urls.length === Vk.Vb.CubeFaces;
        if (!Pd || Wd[0] <= 0 || Wd[1] <= 0 || Wd[0] > 65535 || Wd[1] > 65535 || Zd && Wd[0] !== Wd[1]) {
          this.releaseAll(pd.map(EZ)), this.sets.delete(dd), this.host.sendReady(hZ(dd));
          const kd = pd.map((dd => `${dd.width}x${dd.height}`));
          return void this.host.onLoadFailed(dd, Jd.urls[0], new Error(`set ${dd}'s images can't make its texture: ${kd.join(", ")}`))
        }
        const gd = Jd.urls.map((dd => pd[kd.indexOf(dd)].id)),
          Cd = pd.map(EZ);
        this.sets.set(dd, {
          state: "ready",
          images: gd,
          distinct: Cd,
          size: Wd
        }), this.host.sendReady(cZ(dd, gd, Wd))
      }
      release(dd) {
        const Jd = this.sets.get(dd);
        "loading" === (null === Jd || void 0 === Jd ? void 0 : Jd.state) ? Jd.wanted = !1: "ready" === (null === Jd || void 0 === Jd ? void 0 : Jd.state) && (this.releaseAll(Jd.distinct), this.sets.delete(dd))
      }
      releaseAll(dd) {
        for (const Jd of dd) this.host.lpd(Jd)
      }
      releaseAfterDispose(dd) {
        for (const Jd of dd) try {
          this.host.lpd(Jd)
        } catch {}
      }
    }

    function EZ(dd) {
      return dd.id
    }

    function cZ(dd, Jd, kd) {
      const pd = new Uint8Array(Vk.Vb.SkyImagesReadyBytes),
        Nd = new DataView(pd.buffer);
      return Nd.setUint16(0, dd, !0), Nd.setUint16(2, Jd.length, !0), Nd.setUint16(4, kd[0], !0), Nd.setUint16(6, kd[1], !0), Jd.slice(0, Vk.Vb.CubeFaces).forEach(((dd, Jd) => {
        Nd.setUint32(8 + 4 * Jd, dd, !0)
      })), pd
    }

    function hZ(dd) {
      const Jd = new Uint8Array(Vk.Vb.SkyImagesReadyBytes),
        kd = new DataView(Jd.buffer);
      return kd.setUint16(0, dd, !0), kd.setUint16(2, Vk.Vb.Failed, !0), Jd
    }
    let rZ = Promise.resolve();
    async function uZ(dd, Jd) {
      let kd;
      try {
        kd = await (0, yZ.D)(dd)
      } catch (Wd) {
        throw new nZ.d("fetch", dd, {
          cause: Wd
        })
      }
      const pd = rZ.then((() => async function(dd, Jd) {
        const kd = new Blob([dd.slice()]);
        let pd = await createImageBitmap(kd, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Jd
        });
        const Nd = 1024 / Math.max(pd.width, pd.height);
        if (Nd < 1) {
          const dd = pd;
          try {
            pd = await createImageBitmap(dd, {
              resizeWidth: Math.max(1, Math.round(dd.width * Nd)),
              resizeHeight: Math.max(1, Math.round(dd.height * Nd)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            dd.close()
          }
        }
        return pd
      }(kd, Jd)));
      let Nd;
      rZ = pd.catch((() => {}));
      try {
        Nd = await pd
      } catch (Wd) {
        throw new nZ.d("decode", dd, {
          cause: Wd
        })
      }
      return {
        id: (0, nZ.n)(Nd),
        width: Nd.width,
        height: Nd.height
      }
    }
    var tZ = kd(3018),
      VZ = kd(34377),
      zZ = kd(39354);
    const HZ = tZ.f.length;

    function wZ(dd) {
      const Jd = [],
        kd = [];
      tZ.f.forEach(((pd, Nd) => {
        var Wd;
        const Pd = null !== (Wd = AZ(dd[pd])) && void 0 !== Wd ? Wd : VZ.p[pd];
        if ("custom" === Pd.type) {
          kd.push({
            id: Nd,
            kind: Vk.Vb.KindCustom,
            set: Jd.length,
            earth: null
          });
          const dd = [Pd.px, Pd.py, Pd.pz, Pd.nx, Pd.ny, Pd.nz];
          Jd.push({
            urls: (0, zZ.g)(dd),
            orientation: "none"
          })
        } else kd.push({
          id: Nd,
          kind: Vk.Vb.KindEarth,
          set: 0,
          earth: Pd
        })
      }));
      const pd = AZ(dd.earth);
      "earth" === (null === pd || void 0 === pd ? void 0 : pd.type) && kd.push({
        id: HZ,
        kind: Vk.Vb.KindEarth,
        set: 0,
        earth: pd
      });
      const Nd = Jd.length;
      Jd.push({
        urls: VZ.h.map((dd => VZ.i + dd)),
        orientation: "none"
      }), Jd.push({
        urls: [VZ.l],
        orientation: "flipY"
      }), Jd.push({
        urls: [VZ.e],
        orientation: "flipY"
      });
      const Wd = new Uint8Array(Vk.Vb.SkyTableHeaderBytes + kd.length * Vk.Vb.SkyTableEntryBytes),
        Pd = new DataView(Wd.buffer);
      return Pd.setUint16(0, Nd, !0), Pd.setUint16(2, Nd + 1, !0), Pd.setUint16(4, Nd + 2, !0), Pd.setUint16(6, kd.length, !0), kd.forEach(((dd, Jd) => {
        const kd = Vk.Vb.SkyTableHeaderBytes + Jd * Vk.Vb.SkyTableEntryBytes;
        Pd.setUint16(kd, dd.id, !0), Pd.setUint8(kd + 2, dd.kind);
        const pd = kd + 4;
        dd.earth ? function(dd, Jd, kd) {
          const pd = dd;
          let Nd = 0,
            Wd = 0;
          for (const [Pd, Zd] of dg) {
            const dd = pd[Pd];
            "number" === typeof dd && Number.isFinite(dd) && (Jd.setFloat32(kd + 4 * Zd, dd, !0), Nd |= 1 << Zd)
          }
          for (const [Pd, Zd, gd] of Jg) {
            const dd = pd[Pd];
            Array.isArray(dd) && 3 === dd.length && dd.every((dd => "number" === typeof dd && Number.isFinite(dd))) && (dd.forEach(((dd, pd) => {
              Jd.setFloat32(kd + gd + 4 * pd, dd, !0)
            })), Nd |= Zd)
          }
          kg.forEach(((dd, Wd) => {
            let [Pd, Zd] = dd;
            const gd = pd[Pd];
            "number" === typeof gd && Number.isFinite(gd) && (Jd.setFloat32(kd + Vk.o.CameraOffsetAt + 4 * Wd, gd, !0), Nd |= Zd)
          }));
          for (const [Pd, Zd] of pg) {
            const dd = pd[Pd];
            null !== dd && void 0 !== dd && (Nd |= Zd, dd && (Wd |= Zd >>> 14))
          }
          Jd.setUint32(kd + Vk.o.PresentAt, Nd, !0), Jd.setUint8(kd + Vk.o.FlagsAt, Wd)
        }(dd.earth, Pd, pd) : Pd.setUint16(pd, dd.set, !0)
      })), {
        payload: Wd,
        sets: Jd
      }
    }

    function AZ(dd) {
      if ("object" !== typeof dd || null === dd) return null;
      const Jd = dd;
      if ("earth" === Jd.type) return dd;
      return "custom" === Jd.type && ["px", "py", "pz", "nx", "ny", "nz"].every((dd => {
        const kd = Jd[dd];
        return "string" === typeof kd && kd.length > 0
      })) ? dd : null
    }
    const dg = [
        ["inclination", Vk.o.Inclination],
        ["turbidity", Vk.o.Turbidity],
        ["luminance", Vk.o.Luminance],
        ["rayleigh", Vk.o.Rayleigh],
        ["mieCoefficient", Vk.o.MieCoefficient],
        ["mieDirectionalG", Vk.o.MieDirectionalG],
        ["distance", Vk.o.Distance],
        ["azimuth", Vk.o.Azimuth]
      ],
      Jg = [
        ["sunPosition", Vk.o.SunPosition, Vk.o.SunPositionAt],
        ["up", Vk.o.Up, Vk.o.UpAt],
        ["vertexTint", Vk.o.VertexTint, Vk.o.VertexTintAt]
      ],
      kg = [
        ["xCameraOffset", Vk.o.CameraOffsetX],
        ["yCameraOffset", Vk.o.CameraOffsetY],
        ["zCameraOffset", Vk.o.CameraOffsetZ]
      ],
      pg = [
        ["useSunPosition", Vk.o.UseSunPosition],
        ["dithering", Vk.o.Dithering],
        ["infiniteDistance", Vk.o.InfiniteDistance]
      ];

    function Ng(dd, Jd, kd) {
      const pd = new Pg({
        writeCmd: dd,
        warn: Jd,
        followPack: Wg(kd, Jd)
      });
      return pd.start(), pd
    }

    function Wg(dd, Jd) {
      return kd => {
        let pd = () => {};
        const Nd = dd((dd => {
          pd(), pd = () => {}, null !== dd ? pd = dd.subscribe((dd => {
            kd(function(dd, Jd, kd) {
              if ("object" !== typeof dd || null === dd) return null;
              const pd = dd.skyBoxes;
              if ("object" !== typeof pd || null === pd) return null;
              if ("player" === Jd) return pd;
              return Object.fromEntries(Object.entries(pd).filter((dd => {
                let [Jd, pd] = dd;
                return !! function(dd) {
                  if ("object" !== typeof dd || null === dd) return !1;
                  return "earth" === dd.type || Object.entries(dd).every((dd => {
                    let [Jd, kd] = dd;
                    return "type" === Jd || ("" === (pd = kd) || null !== function(dd) {
                      var Jd, kd, pd;
                      return "string" !== typeof dd ? null : null !== (Jd = null === (kd = Zg.exec(dd)) || void 0 === kd || null === (pd = kd.groups) || void 0 === pd ? void 0 : pd.base64) && void 0 !== Jd ? Jd : null
                    }(pd));
                    var pd
                  }))
                }(pd) || (kd(`Ignoring texture pack skybox ${Jd}, whose faces are not all data URLs`, null), !1)
              })))
            }(dd.pack, null === dd.gameSource ? "player" : "customGame", Jd))
          })) : kd(null)
        }));
        return () => {
          Nd(), pd()
        }
      }
    }
    class Pg {
      constructor(dd) {
        var Jd, kd, pd;
        this.host = dd, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.pL = !1, this.wait = null !== (Jd = dd.wait) && void 0 !== Jd ? Jd : (dd, Jd) => {
          setTimeout(Jd, dd)
        }, this.loader = new TZ({
          loadImage: null !== (kd = dd.loadImage) && void 0 !== kd ? kd : uZ,
          lpd: null !== (pd = dd.lpd) && void 0 !== pd ? pd : nZ.p,
          sendReady: dd => {
            this.queue.push({
              kind: Vk.Vb.SkyImagesReady,
              payload: dd
            })
          },
          onLoadFailed: (Jd, kd, pd) => {
            dd.warn(`sky image set ${Jd} (${kd}) didn't load: the last sky stays`, pd)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(UZ.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((dd => {
          this.write(null !== dd && void 0 !== dd ? dd : {})
        }))
      }
      onEvent(dd) {
        this.loader.onEvent(dd)
      }
      drain() {
        if (0 === this.queue.length) return;
        let dd = 0;
        for (; dd < this.queue.length && this.host.writeCmd(this.queue[dd].kind, 0, this.queue[dd].payload);) dd++;
        dd > 0 && this.queue.splice(0, dd)
      }
      dispose() {
        this.pL = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(dd) {
        if (this.pL) return;
        const Jd = wZ(dd);
        var kd, pd;
        this.written && (kd = this.written, pd = Jd, kd.payload.length === pd.payload.length && kd.payload.every(((dd, Jd) => dd === pd.payload[Jd])) && kd.sets.length === pd.sets.length && kd.sets.every(((dd, Jd) => {
          const kd = pd.sets[Jd];
          return dd.orientation === kd.orientation && dd.urls.length === kd.urls.length && dd.urls.every(((dd, Jd) => dd === kd.urls[Jd]))
        }))) || (this.written = Jd, this.loader.reset(Jd.sets), this.queue = this.queue.filter((dd => dd.kind !== Vk.Vb.SkyImagesReady)), this.queue.push({
          kind: Vk.Vb.SkyTable,
          payload: Jd.payload
        }))
      }
    }
    const Zg = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var gg = kd(2682),
      Cg = kd(2839),
      Kg = kd(290),
      og = kd(178),
      lg = kd(2689),
      Qg = kd(2696),
      Lg = kd(268),
      Og = kd(271),
      eg = kd(2783),
      Rg = kd(2797),
      Ig = kd(2807),
      Gg = kd(108),
      vg = kd(282),
      xg = kd(40811);
    class qg {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, cN.l)(vp.R, (dd => {
          this.onReply((0, EN.e)(vp.R, dd), performance.now())
        }))
      }
      onFrame(dd, Jd) {
        null === this.id ? this.id = dd : dd !== this.id && (this.id = dd, this.sentMs = document.hidden ? null : Jd)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(dd, Jd) {
        dd === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Jd - this.sentMs), this.sentMs = null)
      }
      take() {
        const dd = this.roundTripMs;
        return this.roundTripMs = null, dd
      }
      stop() {
        this.stopReplies()
      }
    }
    class Bg {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(dd, Jd, kd, pd) {
        const Nd = dd - this.sampled >>> 0,
          Wd = Jd - this.timed >>> 0,
          Pd = kd - this.frameUs >>> 0,
          Zd = this.primed;
        return this.sampled = dd, this.timed = Jd, this.frameUs = kd, this.primed = !0, !(!Zd || Nd > 64 || Wd > 64) && (pd && Pd <= 1e6 * Wd && (this.windowTimed += Wd, this.windowUs += Pd), pd && Nd > 0)
      }
      reset() {}
      snapshotAndReset() {
        const dd = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: dd,
          submitToDoneMs: null
        }
      }
    }
    const sg = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class ig {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(dd, Jd) {
        const kd = Math.min(4096, this.count + Jd);
        this.samples.fill(dd, this.count, kd), this.count = kd
      }
      clear() {
        this.count = 0
      }
      take(dd) {
        const Jd = this.count;
        if (this.count = 0, Jd < 30) return null;
        const kd = this.samples.subarray(0, Jd).sort();
        return dd.map((dd => kd[Math.min(Jd - 1, Math.floor(dd * Jd))]))
      }
    }
    class ag {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new ig, this.inJoin = !1, this.rose = !1, this.joinLags = new ig, this.joinLagP90Ms = null
      }
      onFrame(dd, Jd, kd, pd, Nd) {
        const Wd = dd.headerWord(Vk.B.Pacing),
          Pd = dd.headerWord(Vk.B.PacingLagUs),
          Zd = (Wd >>> Vk.X.LagsShift) - (this.word >>> Vk.X.LagsShift) & Vk.X.CountMask,
          gd = (Wd >>> Vk.X.SwitchesShift) - (this.word >>> Vk.X.SwitchesShift) & Vk.X.CountMask,
          Cd = Zd > 0 ? (Pd - this.lagUs >>> 0) / Zd / 1e3 : 0,
          Kd = this.primed && Zd <= 64 && gd <= 2 && Cd <= 6e4;
        if (this.rose = 0 !== (Wd & ~this.word & Vk.X.Joining), this.word = Wd, this.lagUs = Pd, this.primed = !0, 0 !== (Wd & Vk.X.Tiered)) {
          if (0 !== (Wd & Vk.X.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && Kd && pd && Zd > 0 && this.joinLags.add(Cd, Zd);
          else if (this.inJoin) {
            var od, ld;
            this.inJoin = !1, this.joinLagP90Ms = null !== (od = null === (ld = this.joinLags.take([.9])) || void 0 === ld ? void 0 : ld[0]) && void 0 !== od ? od : null
          }
          if (Nd) {
            if (Kd && (this.switches += gd, Zd > 0 && this.lags.add(Cd, Zd)), kd) {
              if (this.lastDrawnMs >= 0 && Jd - this.lastDrawnMs <= 250) {
                const dd = Jd - this.lastDrawnMs;
                this.tieredMs += dd, (Wd & Vk.X.AheadMask) > 0 && (this.pacedMs += dd)
              }
              this.lastDrawnMs = Jd
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(dd) {
        const Jd = this.takeWindow(),
          kd = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, dd ? {
          ...Jd,
          joinLagP90Ms: kd
        } : {
          ...sg,
          joinLagP90Ms: kd
        }
      }
      unsent(dd) {
        this.joinLagP90Ms ??= dd.joinLagP90Ms
      }
      takeWindow() {
        var dd, Jd;
        const kd = this.tieredMs >= 2e3,
          pd = this.lags.take([.5, .9]),
          Nd = {
            pacedShare: kd ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: kd ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (dd = null === pd || void 0 === pd ? void 0 : pd[0]) && void 0 !== dd ? dd : null,
            lagP90Ms: null !== (Jd = null === pd || void 0 === pd ? void 0 : pd[1]) && void 0 !== Jd ? Jd : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Nd
      }
    }
    var Mg = kd(9165),
      Fg = kd(2656),
      Yg = kd(40893),
      mg = kd(9162),
      bg = kd(2700),
      Sg = kd(2675);
    const jg = {
      none: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
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

    function Xg(dd) {
      return new fg(dd)
    }
    class fg {
      constructor(dd) {
        this.shell = dd, this.tracker = new Qg.c, this.gpu = new Bg, this.pacing = new ag, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new qg, this.pacedCpuMs = 0, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now()), this.lastDrawnMs = -1
        }, (0, Mg.d)(dd.backend, dd.canvas, dd.adapterVendor), this.tracker.start((() => !dd.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, bg.d)("wasm", (() => {
          const {
            n: Jd,
            sampleCount: kd
          } = (0, Yg.d)();
          return `${dd.backend}, quality steps aim at up to ${Sg.e.target.maxFps} fps, pixel n ${Jd}, msaa ${kd}`
        }), (Jd => {
          Jd.setLoadCounts(dd.readLoadCounts), this.frameDebug = Jd
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(dd) {
        var Jd;
        this.tracker.onAnimationFrame(dd), null === (Jd = this.frameDebug) || void 0 === Jd || Jd.animationFrame()
      }
      frameRan(dd, Jd, kd, pd) {
        var Nd;
        this.ping.onFrame(dd.headerWord(Vk.B.PingSent), kd);
        const Wd = this.tracker;
        this.pacing.onFrame(dd, Jd, "drawn" === pd, !document.hidden, Wd.isSampling());
        const Pd = dd.headerWord(Vk.B.TickUs) / 1e3 + (0, Wp.T)();
        var Zd;
        (Wd.mI(Pd), null === (Nd = this.frameDebug) || void 0 === Nd || Nd.wasmFrame(dd, Jd, kd, pd, Wd.isSampling(), Pd), null !== this.game) && (null === (Zd = this.frameDebug) || void 0 === Zd || Zd.inGame());
        const gd = Math.max(0, kd - Jd - Pd);
        if ("drawn" !== pd) return void("paced" === pd ? this.pacedCpuMs += gd : "skipped" === pd && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(Jd), Wd.onFrameStart(Jd);
        this.gpu.onFrame(dd.headerWord(Vk.B.GpuSampled), dd.headerWord(Vk.B.GpuTimed), dd.headerWord(Vk.B.GpuFrameUs), Wd.isSampling()) && Wd.onGpuSampleStarted(), Wd.onFrameCpu(gd + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Jd)
      }
      framePaced() {
        var dd;
        null === (dd = this.frameDebug) || void 0 === dd || dd.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const dd of this.timers) clearInterval(dd);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.ping.stop()
      }
      followGame() {
        const dd = this.shell.joinedGame();
        if (dd !== this.game) {
          var Jd;
          if (this.game = dd, null !== dd) null === (Jd = this.frameDebug) || void 0 === Jd || Jd.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== dd
      }
      checkMainStall(dd) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const Jd = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          kd = this.lastDrawnMs < 0 ? 0 : dd - this.lastDrawnMs;
        this.lastDrawnMs = dd, this.stallPending || (kd <= 5e3 ? Jd.markFrame(dd) : (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(kd, Jd.blockingSinceMark())
        }), 0)))
      }
      countFpsFrame(dd) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = dd
        }
        this.fpsFrames++;
        const Jd = dd - this.fpsSpanStartMs;
        if (!(Jd < Ig.e)) {
          if (!document.hidden) {
            const dd = 1e3 * this.fpsFrames / Jd;
            this.firstSpanFps ??= dd, this.initialFps = this.firstSpanFps, this.fpsOverTime = dd
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = dd
        }
      }
      flush() {
        const dd = this.followGame(),
          {
            cpuFrameMs: Jd,
            refreshHz: kd,
            cpuBottleneck: Nd,
            frameIntervalCv: Wd,
            ...Pd
          } = this.tracker.snapshotAndReset(),
          Zd = this.shell.inGame(),
          gd = Zd && this.inGameAtLastFlush,
          Cd = gd ? Pd : lg.e,
          Kd = this.pacing.snapshotAndReset(gd);
        if (this.inGameAtLastFlush = Zd, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !dd) return void this.pacing.unsent(Kd);
        const od = performance.now(),
          Qd = (0, Rg.v)((0, Rg.u)(od), this.unsentPage),
          Od = function(dd, Jd, kd, Nd, Wd, Pd, Zd, gd) {
            var Cd, Kd, od, ld;
            const Qd = {},
              {
                canvas: Ld
              } = dd,
              Od = (0, eg.e)({
                refreshHz: Jd.refreshHz,
                msaa: dd.msaa(),
                autoMsaaOff: (0, mg.e)()
              });
            for (const ed of (0, Cg.g)()) {
              const Rd = ed.name;
              let Id;
              if ((0, Kg.n)(Rd)) Id = (0, Rg.d)(Rd);
              else if ((0, Rg.j)(Rd)) Id = gd[Rd];
              else if ((0, eg.f)(Rd)) Id = Od[Rd];
              else switch (Rd) {
                case "fps":
                  Id = Nd;
                  break;
                case "DP":
                  Id = Wd;
                  break;
                case "rP":
                  Id = (0, Fg.t)((0, Yg.d)().n);
                  break;
                case "uP":
                  Id = Math.max(Ld.width, Ld.height);
                  break;
                case "tP":
                  Id = Math.min(Ld.width, Ld.height);
                  break;
                case "VP":
                  Id = navigator.hardwareConcurrency || null;
                  break;
                case "zP":
                  Id = (0, zN.getWebGpuSupported)();
                  break;
                case "HP":
                  Id = null === dd.fallbackReason ? null : jg[dd.fallbackReason];
                  break;
                case "wP":
                  Id = Jd.cpuFrameMs;
                  break;
                case "AP":
                  Id = Jd.refreshHz;
                  break;
                case "dZ":
                  Id = Jd.cpuBottleneck;
                  break;
                case "JZ":
                  Id = Jd.frameIntervalCv;
                  break;
                case "kZ":
                  Id = Jd.frameMs;
                  break;
                case "pZ":
                  Id = Jd.tickMs;
                  break;
                case "ZZ":
                  Id = Jd.mainBusyShare;
                  break;
                case "gZ":
                  Id = Jd.mainProbeDelayMs;
                  break;
                case "NZ":
                  Id = Jd.longAnimationFramesPerMin;
                  break;
                case "WZ":
                  Id = Jd.longAnimationFrameTimeShare;
                  break;
                case "PZ":
                  Id = Jd.longAnimationFrameScriptShare;
                  break;
                case "CZ":
                  Id = Jd.gpuPassMs;
                  break;
                case "KZ":
                  Id = Jd.gpuSubmitToDoneMs;
                  break;
                case "oZ":
                  Id = kd.pacedShare;
                  break;
                case "lZ":
                  Id = kd.switchesPerHour;
                  break;
                case "QZ":
                  Id = kd.lagP50Ms;
                  break;
                case "LZ":
                  Id = kd.lagP90Ms;
                  break;
                case "OZ":
                  Id = kd.joinLagP90Ms;
                  break;
                case "MZ":
                  Id = (0, gg.g)(Pd);
                  break;
                case "hP":
                  Id = Zd;
                  break;
                case "eZ":
                case "RZ":
                case "IZ":
                case "GZ":
                case "vZ":
                case "xZ":
                case "qZ":
                case "BZ":
                case "sZ":
                case "iZ":
                case "aZ":
                case "FZ":
                case "YZ":
                case "mZ":
                case "bZ":
                  Id = null;
                  break;
                case "uZ":
                  Id = (0, zN.getPlatformType)();
                  break;
                case "tZ":
                  Id = (0, zN.getGpuVendor)();
                  break;
                case "VZ":
                  Id = xg.d[dd.backend];
                  break;
                case "zZ":
                  Id = (0, Gg.e)();
                  break;
                case "HZ":
                  Id = (0, zN.getOperatingSystem)();
                  break;
                case "wZ":
                  Id = (0, zN.getTrafficSource)();
                  break;
                case "AZ":
                  Id = null !== (Cd = pd.d.get("gameEntrySource")) && void 0 !== Cd ? Cd : og.e;
                  break;
                case "Jg":
                  Id = Jd.frameLimiter;
                  break;
                case "kg":
                  Id = (0, Lg.h)();
                  break;
                case "Ng":
                  Id = null !== (Kd = (0, Og.c)()) && void 0 !== Kd ? Kd : og.e;
                  break;
                case "Wg":
                  Id = (0, Lg.d)(Ld.width, Ld.height);
                  break;
                case "Pg":
                  Id = (0, Cg.k)(-(new Date).getTimezoneOffset());
                  break;
                case "Cg":
                  Id = null !== (od = dd.fallbackReason) && void 0 !== od ? od : og.e;
                  break;
                case "lg":
                  Id = "ready";
                  break;
                case "Qg":
                  Id = (0, zN.getSoftwareRenderer)();
                  break;
                case "gg":
                  Id = null !== dd.shaderPackReach() ? "true" : "false";
                  break;
                case "Lg":
                  Id = null !== (ld = dd.shaderPackReach()) && void 0 !== ld && ld.sceneDepth ? "true" : "false";
                  break;
                case "Og": {
                  const Jd = dd.shaderPackReach();
                  Id = null !== Jd && void 0 !== Jd && Jd.sunShadow ? "all" : null !== Jd && void 0 !== Jd && Jd.airShadow ? "air" : "none";
                  break
                }
                case "eg":
                  Id = vg.D;
                  break;
                case "Zg":
                case "Kg":
                case "og":
                  Id = og.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Rd}`)
              }
              if (void 0 === Id) throw new Error(`Metric ${Rd} has no value`);
              Qd[Rd] = Id
            }
            return Qd
          }(this.shell, {
            cpuFrameMs: Jd,
            refreshHz: kd,
            cpuBottleneck: Nd,
            frameIntervalCv: Wd,
            ...Cd
          }, Kd, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Qd);
        if (! function(dd, Jd, kd) {
            return (0, rJ.b)(), dd(Ld.k.Send, Jd, kd)
          }(this.shell.writeCmd, ld.td, function(dd) {
            const Jd = (0, nd.e)((0, VJ.g)(dd)),
              kd = new Uint8Array(Ld.ie.BYTES + Jd.length);
            return new DataView(kd.buffer).setUint16(0, VJ.e.AnalyticsUpdate, !0), kd.set(Jd, Ld.ie.BYTES), kd
          }(Od))) return this.unsentPage = Qd, this.pacing.unsent(Kd), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, gg.f), (0, Rg.r)(Od, "wasm", od)
      }
    }
    var ng = kd(39709);

    function Ug(dd, Jd, kd) {
      const pd = new Map;
      return (0, ng.c)(((dd, kd, pd) => Jd.NC(dd, kd, pd)), ((Jd, kd, Nd) => {
        const Wd = `${Jd},${kd},${Nd}`;
        return pd.has(Wd) || pd.set(Wd, (0, yJ.b)(dd, Jd, kd, Nd)), pd.get(Wd)
      }), kd)
    }
    var yg = kd(39712),
      Dg = kd(40692);

    function Tg(dd) {
      const Jd = null !== dd && 0 !== (Ld.u.playerFlags(dd.api.apiView, 0) & Ld.Ud.CursorAim);
      Jd !== (0, Dg.o)() && (0, Dg.K)(Jd, null !== dd)
    }

    function Eg(dd) {
      return (0, Gp.c)(vp.M, dd)
    }
    var cg = kd(40714);
    const hg = new Wd.e((dd => kd(42515)(`./${dd}/${dd}Client`)));
    let rg = null,
      ug = null;
    async function tg(dd) {
      rg ??= kd.e(27).then((() => kd(39283))).then((dd => {
        ug = dd.createDefaultClientPlugins
      }), (dd => {
        throw rg = null, dd
      })), await Promise.all([hg.load(dd), rg])
    }

    function Vg(dd) {
      dd.load(new fJ(tp, new Hp))
    }
    let zg = !1;
    const Hg = new WeakMap;

    function wg(dd) {
      try {
        dd()
      } catch (Jd) {
        console.error("[bloxd-wasm-client] a session-end step failed", Jd)
      }
    }

    function Ag(dd, Jd) {
      ! function() {
        var dd, Jd;
        cp.Howler.volume();
        const kd = cp.Howler;
        null === (dd = kd._autoResume) || void 0 === dd || dd.call(kd), null === (Jd = kd._autoSuspend) || void 0 === Jd || Jd.call(kd)
      }(), Jd.audio.prepare();
      const kd = new vd(Jd.core, Jd.memory, Jd.audio);
      let Wd;
      try {
        Wd = new IN(kd, Jd.options)
      } catch (ld) {
        return dd.crash(vN.z, ld), null
      }(0, gd.c)(GN(kd, Wd));
      const Kd = new iZ({
        running: dd,
        api: kd,
        core: Jd.core,
        memory: Jd.memory,
        staleOr: Jd.staleOr,
        reportFault: Jd.reportReplayFault,
        options: Jd.options,
        sessionInfo: Jd.sessionInfo,
        replayShaderPack: Jd.replayShaderPack
      });
      (0, Wp.J)();
      const od = new np({
        api: kd,
        tables: Wd,
        sessionInfo: Jd.sessionInfo,
        gameFactory: dd => hg.loadedFactory(dd),
        defaultPlugins: (dd, Jd, kd, pd) => {
          if (null === ug) throw new Error("The default plugins started before they loaded");
          return ug(dd, Jd, kd, pd)
        },
        serverOptions: Jd.options,
        onNetEvent: dd => {
          Kd.netEvent(dd), Jd.onNetEvent(dd)
        },
        setLocalOptions: Jd => {
          MZ(dd, {
            changes: Jd,
            reset: !1
          })
        },
        playSound: (dd, kd, pd, Nd, Wd, Pd, Zd) => Jd.audio.playGame(dd, kd, pd, Nd, Wd, Pd, Zd),
        preloadSounds: dd => {
          Jd.audio.preload(function(dd) {
            const Jd = [];
            for (const kd of dd) {
              const dd = jJ(kd);
              dd >= 0 && Jd.push(GJ[dd])
            }
            return Jd
          }(dd))
        },
        onSessionEnd: () => {
          wg(Nd.m), wg(NN), wg((() => {
            pd.d.set({
              openInGameMenuName: null
            })
          })), wg((() => {
            Jd.audio.endSession()
          }))
        },
        beforeWrite: Jd.beforeWrite,
        beforeOp: Jd.beforeOp,
        cameraScreen: pN,
        showCameraFacing: WN,
        onEventOverflow: Jd.onEventOverflow,
        screenBandY: Zd.k,
        replayEntities: Kd.entityHooks,
        hasPackModel: Jd.hasPackModel
      });
      return od.attach(dd), Hg.set(od, Kd), Tp(od.items, Jd.audio),
        function(dd) {
          dd.setClientFreeCameraGrant("isDev", !1);
          const Jd = Jd => {
            dd.setClientFreeCameraGrant("hasDeveloperRank", Jd.playerHasRank("developer"))
          };
          (0, Pd.n)("userContextUpdated", Jd)
        }(od), zg || (zg = !0, (0, Pd.n)("appManagerUpdated|openInGameMenuName", (dd => {
          !dd && (0, Cd.k)().includes(Cd.d) && (0, Cd.o)(Cd.d)
        }))), od
    }

    function dC(dd) {
      try {
        dd.closeGame()
      } finally {
        var Jd;
        null === (Jd = Hg.get(dd)) || void 0 === Jd || Jd.stop(), Hg.delete(dd)
      }
    }
  },
  40811: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40827: (dd, Jd, kd) => {
    function pd() {
      return kd(40835)
    }

    function Nd() {
      return kd(40842)
    }

    function Wd(dd) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(dd)
    }
    kd.d(Jd, {
      e: () => Wd,
      g: () => pd,
      h: () => Nd
    })
  },
  36458: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      f: () => Cd,
      h: () => Pd,
      j: () => od
    });
    var pd = kd(36448),
      Nd = kd(10);
    const Wd = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Pd(dd) {
      if (dd instanceof WebAssembly.RuntimeError) return !0;
      const Jd = dd instanceof Error ? dd.stack : void 0;
      return "string" === typeof Jd && Wd.test(Jd)
    }

    function Zd(dd, Jd, kd) {
      var Nd;
      const Pd = dd instanceof Error ? dd.name : "thrown",
        Zd = (dd instanceof Error && null !== (Nd = dd.stack) && void 0 !== Nd ? Nd : "").split("\n").filter((dd => Wd.test(dd))).slice(0, 8).map((dd => dd.trim())),
        gd = null === Jd ? "wasm memory unknown" : `wasm memory ${Math.round(Jd/2**20)} MB`,
        Cd = null === kd.panic ? "" : `, panic: ${(0,pd.g)(kd.panic)}`,
        Kd = `${Pd}: ${dd instanceof Error?dd.message:String(dd)}`;
      return `${(0,pd.k)(kd.kind,kd.refusedBytes)} ${Kd} (${gd})${Cd}${Zd.length>0?` | ${Zd.join(" < ")}`:""}`
    }
    const gd = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Cd(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(dd instanceof Error) || !gd.test(dd.message)) return {};
      if (!("detached" in kd)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Nd.Y)(null === (Jd = (0, Nd.R)(kd, "detached")) || void 0 === Jd ? void 0 : Jd.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Kd = 500;

    function od(dd) {
      let Jd = "[object Object]";
      try {
        Jd = String(dd)
      } catch {}
      if ("[object Object]" !== Jd) return Jd;
      try {
        var kd, pd;
        return null !== (kd = null === (pd = JSON.stringify(dd)) || void 0 === pd ? void 0 : pd.slice(0, Kd)) && void 0 !== kd ? kd : Jd
      } catch {
        return Jd
      }
    }
  },
  42515: (dd, Jd, kd) => {
    var pd = {
      "./bedwars/bedwarsClient": [39391, 9],
      "./bridgeBattle/bridgeBattleClient": [39398, 10],
      "./buildAFactory2/buildAFactory2Client": [38630, 73, 72, 71, 220, 237, 11],
      "./classic/classicClient": [39407, 12],
      "./clutch/clutchClient": [39413, 13],
      "./containmentBreach/containmentBreachClient": [39415, 14],
      "./cooking/cookingClient": [39529, 15],
      "./defusal/defusalClient": [39531, 16],
      "./frontline/frontlineClient": [39539, 73, 72, 71, 17],
      "./goalRush/goalRushClient": [39547, 18],
      "./luckyBedwars/luckyBedwarsClient": [39549, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39555, 20],
      "./oneBlock/oneBlockClient": [39561, 21],
      "./plots/plotsClient": [39568, 236, 240, 22],
      "./pvpCiv/pvpCivClient": [39650, 23],
      "./skyIslands/skyIslandsClient": [39659, 24],
      "./skyblock/skyblockClient": [38668, 73, 220, 191, 25],
      "./tsunami/tsunamiClient": [39661, 26]
    };

    function Nd(dd) {
      if (!kd.o(pd, dd)) return Promise.resolve().then((() => {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }));
      var Jd = pd[dd],
        Nd = Jd[0];
      return Promise.all(Jd.slice(1).map(kd.e)).then((() => kd(Nd)))
    }
    Nd.keys = () => Object.keys(pd), Nd.id = 42515, dd.exports = Nd
  },
  40835: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40842: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36448: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Wd,
      g: () => gd,
      h: () => Pd,
      k: () => Nd
    });
    const pd = /^alloc_failed (\d+) bytes$/;

    function Nd(dd, Jd) {
      return Wd(dd, Jd) ? `trap=alloc_failed ${Jd} bytes` : `trap=${dd}`
    }

    function Wd(dd, Jd) {
      return "unreachable" === dd && Jd > 0
    }

    function Pd(dd, Jd, kd) {
      const pd = function(dd) {
        return dd instanceof WebAssembly.RuntimeError ? /unreachable/i.test(dd.message) ? "unreachable" : /out of bounds/i.test(dd.message) ? "out_of_bounds" : "runtime_error" : (dd instanceof RangeError || dd instanceof Error && "InternalError" === dd.name) && /call stack|recursion/i.test(dd.message) ? "stack_overflow" : "js_error"
      }(dd);
      if ("unreachable" !== pd) return {
        kind: pd,
        panic: null,
        refusedBytes: 0
      };
      const Nd = Jd(),
        Wd = kd();
      return {
        kind: pd,
        panic: Wd > 0 ? null : Nd,
        refusedBytes: Wd
      }
    }
    const Zd = 300;

    function gd(dd) {
      return dd.replace(/\s*\n\s*/g, " / ").slice(0, Zd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);