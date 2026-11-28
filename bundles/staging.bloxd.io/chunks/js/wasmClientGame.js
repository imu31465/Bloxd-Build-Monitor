export const id = 69;
export const ids = [69];
export const modules = {
  40592: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      f: () => Fd
    });
    var Wd = md(32);

    function Fd(dd) {
      return "refetchCode" === dd || "devDownloadJson" === dd || dd.startsWith("Plugin")
    }

    function Rd(dd, Od) {
      "refetchCode" !== dd ? "Plugin|MobAiPlugin|ShowPetUi" !== dd ? Promise.all([md.e(128), md.e(129), md.e(118), md.e(120), md.e(248)]).then((() => md(54153))).then((md => {
        let {
          runClientGameMessage: Wd
        } = md;
        Wd(dd, Od)
      })).catch((Od => {
        console.error(`Game message ${dd} failed`, Od)
      })) : Wd.j.lQ("showPetUi", Od) : Wd.j.lQ("refetchCode")
    }
  },
  10017: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Xd,
      f: () => Kd,
      i: () => hd
    });
    var Wd = md(32);
    const Fd = "touchSprintChanged";
    let Rd = !0;

    function Xd() {
      return Rd
    }

    function Kd(dd) {
      dd !== Rd && (Rd = dd, Wd.j.lQ(Fd, dd))
    }

    function hd(dd, Od) {
      return null !== dd && null !== Od && dd > Od
    }
  },
  55017: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      f: () => Fd
    });
    const Wd = ["recording", "freecam", "keyframe"];

    function Fd() {
      const dd = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(dd[1]) << 32n | BigInt(dd[0])
    }
  },
  35467: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      d: () => hd
    });
    var Wd = md(29);
    const Fd = 24,
      Rd = "farNametags",
      Xd = 1e5;

    function Kd() {
      var dd;
      return null === (dd = Wd.e.get("showDistantNametags")) || void 0 === dd || dd
    }

    function hd() {
      var dd;
      return null !== (dd = function() {
        const dd = new URLSearchParams(window.location.search).get(Rd),
          Od = null === dd || "" === dd ? NaN : Number(dd);
        return Number.isFinite(Od) && Od >= 0 ? Math.min(Od, Xd) : null
      }()) && void 0 !== dd ? dd : Kd() ? 0 : Fd
    }
  },
  55013: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      blockIdOf: () => vv.b,
      clearWasmCameraScreen: () => YF,
      creativeItemIds: () => pW.creativeItemIds,
      decodeMapSettings: () => ov,
      drainTextRerasters: () => mh.d,
      enchantmentPerksOf: () => pW.enchantmentPerksOf,
      endGameHost: () => av,
      followCursorAim: () => tv,
      followMenuPrefs: () => pR,
      loadAudio: () => Tv,
      loadClientGame: () => bv,
      loadTextIcons: () => mh.h,
      rasterText: () => Oh.g,
      readBoardToEdit: () => hv,
      readDrawCensus: () => Nv.f,
      setTextHost: () => mh.l,
      setTextLocalPlayer: () => mh.n,
      showInCreativeInvenOf: () => pW.showInCreativeInvenOf,
      startGameHost: () => wv,
      startShellAnalytics: () => Rv,
      startSkyFeed: () => Eh,
      textChanged: () => mh.r,
      warmText: () => Oh.k,
      wasmCameraScreen: () => pF
    });
    md(38137);
    var Wd = md(29),
      Fd = md(38370),
      Rd = md(40765),
      Xd = md(32),
      Kd = md(4624),
      hd = md(38367),
      vd = md(1349),
      Qd = md(693),
      td = md(39760),
      od = md(5568),
      Nd = md(42609),
      qd = md(42540);
    const Hd = qd.Ob / 4,
      yd = qd.n.PlaySound,
      bd = qd.n.SoundReset,
      Td = od.Z.ReplayFailed,
      pd = od.Z.RecorderEvent;
    class Yd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = dd, this.memory = Od, this.audio = md, this.serverIds = new Int32Array(256).fill(qd.$c), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(qd.q.BYTES)), this.renderPtr = 0, this.Mt = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new qd.Z(dd, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.hXd(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(dd, Od) {
        const md = this.eventView();
        return new Uint8Array(md.buffer, md.byteOffset + dd, Od)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return qd.q.localId(this.apiView, 0)
      }
      localDeaths() {
        return qd.q.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const dd = this.apiView,
          Od = qd.q.entRenderPtr(dd, 0),
          md = qd.q.entVisPtr(dd, 0),
          Wd = qd.q.entCapacity(dd, 0);
        if (Od !== this.renderPtr || md !== this.visPtr || Wd !== this.Mt || this.renderBuffer !== this.buffer) {
          this.renderPtr = Od, this.visPtr = md, this.Mt = Wd, this.renderBuffer = this.buffer;
          const dd = this.memoryView(Float32Array, Od, Wd * Hd, "the render array"),
            Fd = this.memoryView(Uint8Array, md, Wd, "the visibility array");
          this.renderCapacity = dd && Fd ? Wd : 0, this.render = dd && Fd ? dd : new Float32Array(0), this.vis = dd && Fd ? Fd : new Uint8Array(0)
        }
      }
      memoryView(dd, Od, md, Wd) {
        try {
          return (0, Nd.t)(dd, this.memory().buffer, Od, md, Wd)
        } catch (Fd) {
          return this.keepCorruption(Fd), null
        }
      }
      memoryData(dd, Od, md, Wd) {
        try {
          return (0, Nd.f)(this.memory().buffer, dd, Od, md, Wd)
        } catch (Fd) {
          return this.keepCorruption(Fd), null
        }
      }
      scratchData(dd, Od) {
        const md = this.scratch(),
          Wd = this.scratchView;
        return (null === Wd || void 0 === Wd ? void 0 : Wd.buffer) === this.memory().buffer && Wd.byteOffset === md && Wd.byteLength >= dd ? Wd : (this.scratchView = this.memoryData(md, dd, 8, Od), this.scratchView)
      }
      reportCorruption(dd) {
        this.keepCorruption(new Nd.d(dd))
      }
      keepCorruption(dd) {
        if (!(dd instanceof Nd.d)) throw dd;
        this.corruption ??= dd
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(dd, Od, md) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Wd,
          len: Fd
        } = dd;
        this.eventsPtr = Wd, this.eventsLen = Fd, this.eventsBuffer = null;
        const Rd = this.eventView();
        for (let vd = 0; vd < Fd;) {
          const dd = Rd.getUint32(vd, !0),
            md = 65535 & dd,
            Wd = dd >>> 16,
            Fd = vd + od.W;
          if (md === qd.n.EntitySpawned) {
            var Xd;
            if (Wd !== qd.Wb.BYTES) throw Ud(md, vd, Wd);
            const dd = qd.Wb.serverId(Rd, Fd);
            this.spawned(dd, qd.Wb.index(Rd, Fd), qd.Wb.kind(Rd, Fd)), null === (Xd = Od.entityAdded) || void 0 === Xd || Xd.call(Od, dd)
          } else if ((md === qd.n.ChunkSlot || md === qd.n.EntityInfoChanged) && !(0, qd.we)(md, Rd, Fd, Wd, Od)) throw Ud(md, vd, Wd);
          vd = Fd + (0, od.ve)(Wd)
        }
        try {
          var Kd;
          null === (Kd = Od.afterPrescan) || void 0 === Kd || Kd.call(Od), this.throwCorruption(), !md() && this.dispatch(dd, Od, md) && (this.throwCorruption(), this.applyListener(), Od.afterWalk(dd.kind)), this.throwCorruption()
        } catch (hd) {
          throw hd instanceof Nd.d && (this.corruption ??= hd), hd
        } finally {
          md() || null !== this.corruption || this.applyDespawns(Fd, Od)
        }
      }
      applyDespawns(dd, Od) {
        const md = this.eventView();
        for (let Fd = 0; Fd < dd;) {
          const dd = md.getUint32(Fd, !0),
            Rd = Fd + od.W;
          if ((65535 & dd) === qd.n.EntityDespawned && dd >>> 16 === qd.Wb.BYTES) {
            const dd = qd.Wb.serverId(md, Rd);
            var Wd;
            if (this.despawned(dd, qd.Wb.index(md, Rd))) null === (Wd = Od.entityRemoved) || void 0 === Wd || Wd.call(Od, dd)
          }
          Fd = Rd + (0, od.ve)(dd >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(dd, Od, md) {
        const {
          len: Wd,
          net: Fd,
          netOffsets: Rd
        } = dd;
        let Xd = this.eventView(),
          Kd = 0;
        for (let Ed = 0; Ed < Wd;) {
          const dd = Xd.getUint32(Ed, !0),
            Wd = 65535 & dd,
            xd = dd >>> 16,
            Bd = Ed + od.W;
          let Sd = !1;
          if (Kd < Fd.length && Rd[Kd] === Ed) Od.netEvent(Fd[Kd]), Kd++, Sd = !0;
          else if (Wd === od.Z.LocalPlayerBound) {
            var hd;
            if (xd !== od.Jb) throw Ud(Wd, Ed, xd);
            null === (hd = Od.localPlayerBound) || void 0 === hd || hd.call(Od, Xd.getInt32(Bd, !0)), Sd = !0
          } else if (Wd === od.Z.LocalHurt) {
            var vd;
            if (xd !== od.Ib) throw Ud(Wd, Ed, xd);
            null === (vd = Od.localHurt) || void 0 === vd || vd.call(Od, Xd.getInt32(Bd, !0), Xd.getFloat32(Bd + 4, !0), Xd.getUint32(Bd + 8, !0)), Sd = !0
          } else if (Wd === od.Z.AttackHit) {
            var Qd;
            if (xd !== od.c) throw Ud(Wd, Ed, xd);
            const dd = Xd.getFloat32(Bd, !0),
              md = Xd.getFloat32(Bd + 4, !0),
              Fd = Xd.getFloat32(Bd + 8, !0),
              Rd = Xd.getUint32(Bd + 12, !0);
            null === (Qd = Od.attackHit) || void 0 === Qd || Qd.call(Od, dd, md, Fd, 0 !== (Rd & od.h.Crit), 0 !== (Rd & od.h.HitSelf))
          } else if (Wd === od.Z.PhysicsType) {
            var td;
            if (xd !== od.ic) throw Ud(Wd, Ed, xd);
            null === (td = Od.physicsType) || void 0 === td || td.call(Od, Xd.getUint32(Bd, !0), Xd.getInt32(Bd + 4, !0)), Sd = !0
          } else if (Wd === od.Z.VehicleEffect) {
            var Nd;
            const dd = Jd(Xd, Bd, xd);
            if (null === dd) throw Ud(Wd, Ed, xd);
            null === (Nd = Od.vehicleEffect) || void 0 === Nd || Nd.call(Od, dd.op, dd.name, dd.icon, dd.level, dd.durationMs), Sd = !0
          } else if (Wd === od.Z.ZoomChanged) {
            var Hd;
            if (xd !== od.Yd) throw Ud(Wd, Ed, xd);
            null === (Hd = Od.zoomChanged) || void 0 === Hd || Hd.call(Od, Xd.getFloat32(Bd, !0), Xd.getUint8(Bd + 4)), Sd = !0
          } else if (Wd === od.Z.ZoomDisabled) {
            var Yd;
            if (0 !== xd) throw Ud(Wd, Ed, xd);
            null === (Yd = Od.zoomDisabled) || void 0 === Yd || Yd.call(Od), Sd = !0
          } else if (Wd === od.Z.BhopDisabled) {
            var gd;
            if (0 !== xd) throw Ud(Wd, Ed, xd);
            null === (gd = Od.bhopDisabled) || void 0 === gd || gd.call(Od), Sd = !0
          } else if (Wd === od.Z.GameCamera) {
            var wd;
            null === (wd = Od.gameCamera) || void 0 === wd || wd.call(Od, new Uint8Array(Xd.buffer, Xd.byteOffset + Bd, xd).slice()), Sd = !0
          } else if (Wd === qd.n.ChunkSlot || Wd === qd.n.EntityInfoChanged);
          else if (Wd >= yd && Wd <= bd) {
            if (this.audio && !this.audio.onAudioEvent(Wd, Xd, Bd, xd)) throw Ud(Wd, Ed, xd)
          } else if (Wd >= Td && Wd <= pd) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Wd, Xd, Bd, xd)) throw Ud(Wd, Ed, xd);
              Sd = !0
            }
          } else if (Wd >= qd.pd && Wd <= qd.td && Wd !== od.Z.EnvLighting) {
            if (!(0, qd.we)(Wd, Xd, Bd, xd, Od)) throw Ud(Wd, Ed, xd);
            Sd = !0
          }
          if (Sd) {
            if (md()) return !1;
            Xd = this.eventView()
          }
          Ed = Bd + (0, od.ve)(xd)
        }
        return !md()
      }
      applyListener() {
        var dd;
        if (!this.audio) return;
        const Od = qd.q.audioViewPtr(this.apiView, 0),
          md = this.memory().buffer;
        let Wd = this.audioView;
        (null === (dd = Wd) || void 0 === dd ? void 0 : dd.buffer) === md && Wd.byteOffset === Od || (Wd = (0, Nd.f)(md, Od, qd.u.BYTES, 8, "the audio view"), this.audioView = Wd), Wd && this.audio.applyListener(Wd)
      }
      indexOf(dd) {
        return this.indexById.get("number" === typeof dd ? dd : +dd)
      }
      isLocal(dd) {
        return dd !== qd.$c && dd === qd.q.localId(this.apiView, 0)
      }
      hY(dd) {
        const Od = [0, 0, 0];
        return this.readPosition("number" === typeof dd ? dd : +dd, Od) ? Od : null
      }
      readPosition(dd, Od) {
        const md = this.apiView;
        if (void 0 !== this.indexById.get(dd) && this.isLocal(dd)) {
          for (let dd = 0; dd < 3; dd++) Od[dd] = qd.q.localPos(md, 0, dd);
          return !0
        }
        return this.readDrawnPosition(dd, Od)
      }
      readDrawnPosition(dd, Od) {
        const md = this.apiView,
          Wd = this.indexById.get(dd);
        if (void 0 === Wd || Wd >= this.renderCapacity) return Od[0] = Od[1] = Od[2] = NaN, !1;
        const Fd = Wd * Hd;
        for (let Rd = 0; Rd < 3; Rd++) Od[Rd] = this.render[Fd + Rd] + qd.q.origin(md, 0, Rd);
        return !0
      }
      checkValid(dd) {
        return void 0 !== this.indexOf(dd)
      }
      isAlive(dd) {
        const Od = this.indexOf(dd);
        if (void 0 === Od) return null;
        if (this.ensureViews(), Od >= this.renderCapacity) return null;
        const md = this.vis[Od];
        return 0 === md ? null : 0 !== (md & qd.ue.Alive)
      }
      getEntityType(dd) {
        const Od = this.indexOf(dd);
        return void 0 === Od ? this.isLocal("number" === typeof dd ? dd : +dd) ? "Player" : null : wd(this.kinds[Od])
      }
      spawned(dd, Od, md) {
        if (Od >= 1048576) throw new Nd.d(`entity ${dd} spawned at index ${Od}`);
        this.ensureIndex(Od), this.serverIds[Od] === dd && null !== this.idStr[Od] || (this.idStr[Od] = String(dd)), this.serverIds[Od] = dd, this.kinds[Od] = md, this.indexById.set(dd, Od)
      }
      despawned(dd, Od) {
        let md = !1;
        return this.indexById.get(dd) === Od && (this.indexById.delete(dd), md = !0), Od < this.serverIds.length && this.serverIds[Od] === dd && (this.serverIds[Od] = qd.$c, this.kinds[Od] = 0, this.idStr[Od] = null), md
      }
      ensureIndex(dd) {
        const Od = this.serverIds.length;
        if (dd < Od) return;
        let md = 2 * Od;
        for (; md <= dd;) md *= 2;
        const Wd = new Int32Array(md).fill(qd.$c);
        Wd.set(this.serverIds), this.serverIds = Wd;
        const Fd = new Uint16Array(md);
        Fd.set(this.kinds), this.kinds = Fd;
        for (let Rd = Od; Rd < md; Rd++) this.idStr.push(null)
      }
      eventView() {
        const dd = this.memory().buffer;
        return dd !== this.eventsBuffer && (this.eventsBuffer = dd, this.events = new DataView(dd, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const dd = this.memory().buffer;
        this.buffer = dd, this.viewPtr < 0 && (this.viewPtr = this.core.vXd()), this.view = new DataView(dd, this.viewPtr, qd.q.BYTES), this.rereadDirectory()
      }
    }

    function gd(dd) {
      return dd >>> qd.c === qd.o.Item
    }

    function wd(dd) {
      var Od, md;
      const Wd = dd & qd.f;
      switch (dd >>> qd.c) {
        case qd.o.Lifeform:
          return null !== (Od = Qd.h[Wd]) && void 0 !== Od ? Od : null;
        case qd.o.Throwable:
          return null !== (md = td.i[Wd]) && void 0 !== md ? md : null;
        case qd.o.Mesh:
          return "Mesh";
        case qd.o.Audio:
          return "AudioEntity";
        case qd.o.Item:
          return "Item";
        default:
          return null
      }
    }
    const Ed = new TextDecoder;

    function Jd(dd, Od, md) {
      if (md < od.Fd.HEAD_BYTES) return null;
      const Wd = dd.getUint32(Od, !0),
        Fd = dd.getUint32(Od + 20, !0),
        Rd = dd.getUint32(Od + 24, !0),
        Xd = od.Fd.HEAD_BYTES + (0, od.ve)(Fd);
      if (Wd !== od.Fd.UPDATE && Wd !== od.Fd.REMOVE || Fd > md || Xd + Rd > md) return null;
      const Kd = (md, Wd) => Ed.decode(new Uint8Array(dd.buffer, dd.byteOffset + Od + md, Wd)),
        hd = dd.getFloat64(Od + 12, !0);
      return {
        op: Wd,
        level: dd.getFloat64(Od + 4, !0),
        durationMs: Number.isNaN(hd) ? null : hd,
        name: Kd(od.Fd.HEAD_BYTES, Fd),
        icon: Kd(Xd, Rd)
      }
    }

    function Ud(dd, Od, md) {
      return new Nd.d(`event ${dd} at ${Od} of ${md} bytes`)
    }
    var xd = md(7410),
      Bd = md(405),
      Sd = md(1286),
      sd = md(40763),
      ud = md(40592),
      Vd = md(2106),
      Ad = md(42977),
      rd = md(2057),
      Gd = md(38295),
      nd = md(40808),
      Ld = md(40789),
      Pd = md(40780),
      zd = md(42587),
      cd = md(3378),
      jd = md(40802);

    function Dd(dd) {
      if (!(0, jd.d)(dd)) return null;
      const Od = Number(dd);
      return (0 | Od) === Od ? Od : null
    }
    class ed {
      constructor(dd) {
        this.api = dd, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Pd.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.qm = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = qd.$c, this.localName = String(qd.$c)
      }
      readView() {
        this.defaultPoseRead = !1, this.qm = null;
        const dd = this.api.queries.directorView() >= qd.Ab.BYTES ? this.api.scratchData(qd.Ab.BYTES, "the director's view") : null;
        null !== dd && (this.defaultFov = (0, rd.B)(qd.Ab.fov(dd, 0)), this.baseFov = (0, rd.B)(qd.Ab.baseFov(dd, 0)), this.aspect = qd.Ab.aspect(dd, 0), this.bodyHeading = qd.Ab.bodyHeading(dd, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(dd) {
        this.viewHeading = dd
      }
      get localPlayerId() {
        const dd = qd.q.localId(this.api.apiView, 0);
        return dd !== this.localId && (this.localId = dd, this.localName = String(dd)), this.localName
      }
      getEntityPosition(dd) {
        return this.readEntity(dd) ? this.entityFeet : null
      }
      getEntityAimPoint(dd) {
        return this.readEntity(dd) ? this.entityAim : null
      }
      getEntityHeading(dd) {
        const Od = Dd(dd);
        if (null === Od) return null;
        const md = qd.q.localId(this.api.apiView, 0);
        return Od === md && md !== qd.$c ? this.viewHeading : this.readEntity(dd) ? this.entityHeading : null
      }
      getEntityPitch(dd) {
        return this.readEntity(dd) ? this.entityPitch : null
      }
      getEntityLookHeading(dd) {
        return this.readEntity(dd) ? this.entityLookHeading : null
      }
      raycastTerrain(dd, Od, md) {
        const Wd = this.api.queries.cameraSweep(dd[0], dd[1], dd[2], Od[0], Od[1], Od[2], md);
        return Wd < md - 1e-6 ? Wd : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const dd = this.defaultPose;
        dd.fov = this.defaultFov;
        const Od = this.api.queries.directorDefaultPose() >= qd.sb.BYTES ? this.api.scratchData(qd.sb.BYTES, "the director's default pose") : null;
        if (null === Od) return dd;
        for (let md = 0; md < 3; md++) dd.position[md] = qd.sb.eye(Od, 0, md);
        return dd.heading = qd.sb.heading(Od, 0), dd.pitch = qd.sb.pitch(Od, 0), dd
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
        const Od = Dd(dd);
        if (null === Od) return !1;
        if (Od === this.qm) return this.entityLive;
        this.qm = Od;
        const md = this.api.queries.directorEntity(Od) >= qd.vb.BYTES ? this.api.scratchData(qd.vb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== md, null === md) return !1;
        for (let Rd = 0; Rd < 3; Rd++) this.entityFeet[Rd] = qd.vb.feet(md, 0, Rd), this.entityAim[Rd] = this.entityFeet[Rd];
        this.entityAim[1] += qd.vb.eyeHeight(md, 0), this.entityHeading = qd.vb.heading(md, 0);
        const Wd = qd.vb.pitch(md, 0);
        this.entityPitch = Number.isNaN(Wd) ? null : Wd;
        const Fd = qd.vb.lookHeading(md, 0);
        return this.entityLookHeading = Number.isNaN(Fd) ? null : Fd, !0
      }
    }
    const Id = {
        mode: "default"
      },
      ld = {
        show: () => {},
        clear: () => {}
      };

    function Cd() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Zd {
      constructor(dd) {
        this.options = dd, this.Bt = void 0, this.director = void 0, this.latest = Id, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          mV: 0,
          RV: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = qd.ob.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Ty = new Int32Array(3 * qd.Vd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * qd.Vd), this.Bt = new ed(dd.api), this.director = new Ld.c(this.Bt)
      }
      settingsChanged(dd) {
        let Od = Id;
        if (dd.length > 0) try {
          Od = (0, zd.b)(dd)
        } catch {}
        this.latest = Od, this.pending = Od
      }
      call(dd, Od, md, Wd, Fd, Rd) {
        var Xd, Kd;
        this.holding = !1;
        const hd = this.answeredPose && 0 === (Wd & qd.xb.Held);
        let vd;
        try {
          vd = this.answer(dd, Od, md, Wd, Fd, Rd), this.threw = !1
        } catch (Qd) {
          this.options.reportError(Qd);
          vd = !this.threw && this.answeredPose && !hd ? this.sendLastPose() : qd.ob.None, this.threw = !0
        }
        return this.answeredPose = vd !== qd.ob.None, this.holding = this.answeredPose && !hd, null === (Xd = (Kd = this.options).showFacing) || void 0 === Xd || Xd.call(Kd, this.holding ? this.facing : null), vd
      }
      holdsView() {
        return this.holding
      }
      answer(dd, Od, md, Wd, Fd, Rd) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Bt: Xd
        } = this;
        Xd.readView();
        if (0 !== (Wd & qd.xb.Held) || Xd.setViewHeading((0, Gd.w)(Xd.bodyHeading)), void 0 !== this.pending) {
          const dd = this.pending;
          this.pending = void 0, this.director.setSettings(dd), this.syncShownSettings()
        }
        this.readLook((0, cd.c)(Od), (0, cd.c)(md), Wd, (0, cd.c)(Fd), (0, cd.c)(Rd));
        const Kd = this.director.update(dd / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Kd) return qd.ob.None;
        const hd = this.lastPose;
        return (0, Pd.i)(Kd.position, hd.position), hd.heading = (0, Gd.w)(Kd.heading), hd.pitch = (0, Gd.h)(Kd.pitch), hd.fovRadians = (0, rd.n)(Kd.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return qd.ob.Pose;
        switch (this.facing) {
          case "camera":
            return qd.ob.FaceCamera;
          case "cursor":
            return qd.ob.FaceCursor;
          default:
            return qd.ob.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: dd,
          heading: Od,
          pitch: md,
          fovRadians: Wd
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(dd[0], dd[1], dd[2], Od, md, Wd) ? qd.ob.None : this.lastAnswer
      }
      afterFrame(dd) {
        dd ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Id, this.idle()
      }
      restart() {
        const dd = this.holding;
        this.idle(), this.holding = dd
      }
      idle() {
        var dd, Od;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Ld.c(this.Bt), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (dd = (Od = this.options).showFacing) || void 0 === dd || dd.call(Od, null), this.setCentres(0)
      }
      syncShownSettings() {
        const dd = this.director.getSettings();
        if (dd === this.shownSettings) return;
        this.shownSettings = dd;
        const Od = (0, nd.c)(dd);
        this.facing = Od.facing, this.mouseTurns = Od.mouseTurns
      }
      readLook(dd, Od, md, Wd, Fd) {
        const Rd = this.look,
          Xd = 0 !== (md & qd.xb.LookPointed);
        if (null === this.mouseTurns && !Xd) return Rd.mV = 0, Rd.RV = 0, void(Rd.pointedAt = void 0);
        let Kd;
        Xd && (this.pointedAt.heading = Wd, this.pointedAt.pitch = Fd, Kd = this.pointedAt);
        const {
          Bt: hd
        } = this;
        hd.setViewHeading((0, nd.b)(hd.getViewHeading(), dd, Od, Kd, "look" === this.mouseTurns, Rd))
      }
      writeCentres(dd) {
        const Od = this.next,
          md = Math.min(dd.length, qd.Vd);
        for (let Wd = 0; Wd < md; Wd++)
          for (let md = 0; md < 3; md++) Od[3 * Wd + md] = Math.floor(dd[Wd][md] / qd.G);
        this.setCentres(md)
      }
      setCentres(dd) {
        const {
          Ty: Od,
          next: md
        } = this;
        let Wd = dd === this.centresLen;
        for (let Fd = 0; Wd && Fd < 3 * dd; Fd++) Wd = Od[Fd] === md[Fd];
        Wd || (Od.fill(0), Od.set(md.subarray(0, 3 * dd)), this.centresLen = dd, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const dd = this.options.cmd();
        null !== dd && (0, qd._f)(dd, 0, this.Ty, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var dd, Od, md;
        return null !== (dd = null === (Od = (md = this.options).screen) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : ld
      }
      hidden() {
        var dd;
        return (null !== (dd = this.options.isPageHidden) && void 0 !== dd ? dd : Cd)()
      }
      now() {
        var dd, Od, md;
        return null !== (dd = null === (Od = (md = this.options).now) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : performance.now()
      }
    }
    var kd = md(40697),
      fd = md(42689);
    const Md = qd.G * qd.G * qd.G,
      dO = Math.log2(qd.G),
      OO = qd.G - 1,
      mO = 65535,
      WO = qd.T.BYTES / 4,
      FO = new Uint16Array(Md);

    function RO(dd, Od, md) {
      return dd * qd.G * qd.G + Od * qd.G + md
    }
    class XO {
      constructor(dd) {
        this.chunk = dd
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(dd, Od, md) {
        return RO(dd, Od, md)
      }
    }
    class KO {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class hO {
      constructor(dd, Od, md, Wd) {
        this.table = dd, this.slot = Od, this.generation = md, this.epoch = Wd, this.QN = new XO(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = FO, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get vH() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get Wq() {
        const dd = this.gameVoxels(),
          Od = this.layers ??= new Uint16Array(qd.G);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let md = 0; 0 !== this.staleLayers; md++) {
          const Wd = 1 << md;
          0 !== (this.staleLayers & Wd) && (this.staleLayers &= ~Wd, Od[md] = vO(dd, md))
        }
        return Od
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const dd = this.voxelData(),
          Od = this.writes;
        if (null === Od || 0 === Od.ids.size) return dd;
        if (Od.from !== dd) {
          const md = Od.patched ??= new Uint16Array(Md);
          md.set(dd);
          for (const [dd, Wd] of Od.ids) md[dd] = Wd;
          Od.from = dd
        }
        return Od.patched
      }
      written(dd) {
        var Od;
        return null === (Od = this.writes) || void 0 === Od ? void 0 : Od.ids.get(dd)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(dd, Od, md) {
        const Wd = this.writes ??= new KO;
        Wd.ids.set(dd, Od), md && Wd.cleared.add(dd), null !== Wd.from && (Wd.patched[dd] = Od);
        const Fd = 1 << (dd >> dO & OO);
        Wd.layers |= Fd, this.staleLayers |= Fd, this.writeCount++
      }
      clearWrites() {
        const dd = this.writes;
        null !== dd && (this.staleLayers |= dd.layers, dd.ids.clear(), dd.cleared.clear(), dd.layers = 0, dd.from = null)
      }
      dataCleared(dd) {
        var Od;
        return !0 === (null === (Od = this.writes) || void 0 === Od ? void 0 : Od.cleared.has(dd))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const dd = this.table.slotWords(),
          Od = this.slot * WO;
        if (this.epoch !== this.table.epoch || Od + WO > dd.length || 0 === dd[Od + 3] || dd[Od + 2] !== this.generation) return this.data = FO, this.dataPtr = 0, FO;
        this.version = dd[Od + 1];
        const md = dd[Od + 0],
          Wd = dd.buffer;
        return md === this.dataPtr && Wd === this.dataBuffer || (this.dataPtr = md, this.dataBuffer = Wd, this.data = this.table.voxelsAt(Wd, md)), this.data
      }
    }

    function vO(dd, Od) {
      const md = dd[Od * qd.G];
      for (let Wd = 0; Wd < qd.G; Wd++) {
        const Fd = RO(Wd, Od, 0);
        for (let Od = 0; Od < qd.G; Od++)
          if (dd[Fd + Od] !== md) return mO
      }
      return md
    }
    const QO = new Uint32Array(0);

    function tO(dd, Od, md) {
      return RO(dd & OO, Od & OO, md & OO)
    }
    class oO {
      constructor(dd, Od) {
        this.memory = dd, this.apiView = Od, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = QO, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = QO, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(dd, Od, md, Wd, Fd, Rd) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Rd === qd.V.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Rd !== qd.V.Stored && Rd !== qd.V.Unloaded) throw new Nd.d(`ChunkSlot flags ${Rd}`);
        const Xd = (0, fd.b)(dd, Od, md);
        if (Xd < 0) return;
        if (Rd === qd.V.Unloaded) return void this.chunks.delete(Xd);
        const Kd = this.chunks.get(Xd);
        (null === Kd || void 0 === Kd ? void 0 : Kd.slot) === Wd && Kd.generation === Fd || this.chunks.set(Xd, new hO(this, Wd, Fd, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const dd = this.apiView(),
          Od = qd.q.chunkSlotsPtr(dd, 0),
          md = qd.q.chunkSlotsLen(dd, 0);
        Od === this.slotsPtr && md === this.slotsLen || (this.slotsPtr = Od, this.slotsLen = md, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const dd = this.apiView(),
          Od = qd.q.walkThroughPtr(dd, 0),
          md = qd.q.walkThroughLen(dd, 0);
        Od === this.walkPtr && md === this.walkLen || (this.walkPtr = Od, this.walkLen = md, this.walkBuffer = null, this.walkWords())
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
        var Od;
        dd !== this.slotsBuffer && (this.slotsBuffer = dd, this.slots = null !== (Od = (0, Nd.t)(Uint32Array, dd, this.slotsPtr, this.slotsLen * WO, "the chunk directory")) && void 0 !== Od ? Od : QO);
        return this.slots
      }
      voxelsAt(dd, Od) {
        try {
          var md;
          return null !== (md = (0, Nd.t)(Uint16Array, dd, Od, Md, "a chunk's voxels")) && void 0 !== md ? md : FO
        } catch (Wd) {
          if (!(Wd instanceof Nd.d)) throw Wd;
          return this.corruption ??= Wd, FO
        }
      }
      chunk(dd, Od, md) {
        var Wd;
        return null !== (Wd = this.chunks.get((0, fd.b)(dd, Od, md))) && void 0 !== Wd ? Wd : null
      }
      isLoaded(dd, Od, md) {
        return void 0 !== this.chunkAt(Math.floor(dd), Math.floor(Od), Math.floor(md))
      }
      XK(dd, Od, md) {
        var Wd;
        const Fd = Math.floor(dd),
          Rd = Math.floor(Od),
          Xd = Math.floor(md),
          Kd = this.chunkAt(Fd, Rd, Xd);
        if (!Kd) return 0;
        const hd = tO(Fd, Rd, Xd);
        return null !== (Wd = Kd.written(hd)) && void 0 !== Wd ? Wd : Kd.voxelData()[hd]
      }
      setOverlay(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Rd = this.chunkAt(dd, Od, md);
        return !!Rd && (Rd.hasWrites() || this.written.push(Rd), Rd.write(tO(dd, Od, md), Wd, Fd), !0)
      }
      version(dd, Od, md) {
        var Wd, Fd;
        return null !== (Wd = null === (Fd = this.chunks.get((0, fd.b)(dd, Od, md))) || void 0 === Fd ? void 0 : Fd.vH) && void 0 !== Wd ? Wd : null
      }
      scan(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        const hd = qd.G;
        let vd = 0;
        for (let Qd = Math.floor(Od / hd); Qd * hd < Fd; Qd++) {
          const td = Qd * hd,
            od = Math.min(Fd - td, hd);
          for (let Fd = Math.floor(dd / hd); Fd * hd < Wd; Fd++) {
            const Nd = Fd * hd,
              qd = Math.min(Wd - Nd, hd);
            for (let Wd = Math.floor(md / hd); Wd * hd < Rd; Wd++) {
              const Hd = this.chunks.get((0, fd.b)(Fd, Qd, Wd));
              if (!Hd) continue;
              const yd = Wd * hd,
                bd = Math.max(md - yd, 0),
                Td = Math.min(Rd - yd, hd),
                pd = Hd.Wq,
                Yd = Hd.gameVoxels();
              for (let md = Math.max(Od - td, 0); md < od; md++) {
                const Od = pd[md];
                if (Od === mO || 0 !== Xd[Od]) {
                  vd++;
                  for (let Od = Math.max(dd - Nd, 0); Od < qd; Od++) {
                    const dd = RO(Od, md, 0);
                    for (let Wd = bd; Wd < Td; Wd++) {
                      const Fd = Yd[dd + Wd];
                      0 !== Xd[Fd] && Kd.push(Nd + Od, td + md, yd + Wd, Fd)
                    }
                  }
                }
              }
            }
          }
        }
        return vd
      }
      columnTops(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        (0, kd.b)(((dd, Od, md) => {
          var Wd;
          return null !== (Wd = this.chunks.get((0, fd.b)(dd, Od, md))) && void 0 !== Wd ? Wd : null
        }), mO, dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd)
      }
      dataCleared(dd, Od, md) {
        var Wd;
        const Fd = Math.floor(dd),
          Rd = Math.floor(Od),
          Xd = Math.floor(md);
        return !0 === (null === (Wd = this.chunkAt(Fd, Rd, Xd)) || void 0 === Wd ? void 0 : Wd.dataCleared(tO(Fd, Rd, Xd)))
      }
      isWalkThrough(dd) {
        if (!Number.isInteger(dd) || dd < 0 || dd > 65535) return !1;
        const Od = this.walkWords(),
          md = dd >>> 5;
        return md < Od.length && 1 === (Od[md] >>> (31 & dd) & 1)
      }
      walkWords() {
        const dd = this.memory().buffer;
        var Od;
        dd !== this.walkBuffer && (this.walkBuffer = dd, this.walk = null !== (Od = (0, Nd.t)(Uint32Array, dd, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Od ? Od : QO);
        return this.walk
      }
      chunkAt(dd, Od, md) {
        if ((0 | dd) !== dd || (0 | Od) !== Od || (0 | md) !== md) return;
        const Wd = (0, fd.b)(dd >> dO, Od >> dO, md >> dO);
        return Wd !== this.lastKey && (this.lastKey = Wd, this.lastChunk = this.chunks.get(Wd)), this.lastChunk
      }
    }
    var NO = md(40048),
      qO = md(39354),
      HO = md(39744),
      yO = md(38003),
      bO = md(38273),
      TO = md(35499),
      pO = md(40706),
      YO = md(218);
    const gO = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      wO = [
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
      aO = wO.map((dd => {
        let [Od] = dd;
        return Od
      })),
      EO = Uint8Array.from(wO, (dd => {
        let [, Od] = dd;
        return Od
      })),
      JO = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      UO = 8,
      xO = [
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
    var BO = md(37948),
      SO = md(37974),
      sO = md(37996),
      uO = md(37965),
      VO = md(285);
    class iO {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VO.e;
        this.sound = dd, this.onError = Od, this.idle = md, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = dd => {
          this.cancelIdle = null;
          try {
            if (dd.timeRemaining() >= 1) {
              let dd = this.queue.shift();
              for (; void 0 !== dd && !this.load(dd);) dd = this.queue.shift()
            }
          } catch (Od) {
            this.onError(Od)
          } finally {
            this.schedule()
          }
        }
      }
      preload(dd) {
        const Od = [...dd].sort(((dd, Od) => dd - Od));
        for (const md of Od) this.asked.has(md) || (this.asked.add(md), this.queue.push(md));
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
        const Od = this.sound(dd, !1),
          md = this.sound(dd, !0),
          [Wd, Fd] = "unloaded" === Od.state() && "unloaded" !== md.state() ? [md, Od] : [Od, md],
          Rd = this.gen,
          Xd = () => {
            try {
              Rd === this.gen && "unloaded" === Fd.state() && Fd.load()
            } catch (dd) {
              this.onError(dd)
            }
          },
          Kd = Wd.state();
        return "unloaded" === Kd ? (Wd.once("load", Xd), Wd.load(), !0) : "unloaded" === Fd.state() && ("loading" === Kd ? (Wd.once("load", Xd), !1) : (Fd.load(), !0))
      }
    }
    var AO = md(42867);

    function rO(dd) {
      var Od;
      const md = function(dd) {
        let Od = 0,
          md = aO.length;
        for (; Od < md;) {
          const Wd = Od + md >>> 1;
          aO[Wd] < dd ? Od = Wd + 1 : md = Wd
        }
        return Od
      }(dd);
      if ("" === dd || null === (Od = aO[md]) || void 0 === Od || !Od.startsWith(dd)) return null;
      if (aO[md] === dd) return [md, 1];
      let Wd = md + 1;
      for (; Wd < aO.length && aO[Wd].startsWith(dd);) Wd++;
      return [md, Wd - md]
    }

    function GO(dd) {
      let [Od, md] = dd, Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === md ? Od : Od + Math.floor(Wd() * md)
    }

    function nO(dd) {
      for (const Od of xO)
        if (Od[0] <= dd && dd < Od[0] + Od[1]) return Od;
      return null
    }

    function LO(dd) {
      const Od = [];
      for (let md = 0; md < EO.length; md++) EO[md] === dd && Od.push(md);
      return Od
    }
    const PO = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      zO = YO.i.yb * YO.i.playerEyeToHeightRatio,
      cO = [0, 0, -1, 0, 1, 0],
      jO = gO.indexOf("note");

    function DO(dd) {
      return dd >= 0 ? Math.min(1, dd) : 0
    }
    class eO {
      constructor(dd, Od, md, Wd, Fd) {
        this.group = dd, this.loudness = Od, this.startMs = md, this.howl = Wd, this.host = Fd, this.id = 0, this.direct = !1
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
    class IO {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = dd, this.listener = Od, this.now = md, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new uO.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: dd => this.aliveVoice(dd),
          started: dd => this.started.has(dd),
          drop: dd => {
            var Od;
            null === (Od = this.live.get(dd)) || void 0 === Od || Od.howl.stop(dd), this.forget(dd)
          }
        }, this.handlers = {
          playSound: (dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) => {
            if (Wd >= aO.length) return;
            const vd = 0 !== (Fd & qd.me.Loop);
            Fd & qd.me.TwoD ? this.start(Wd, !1, Xd, Rd, Kd, vd, nO(Wd)) : this.startSpatial(Wd, Xd, Rd, Kd, vd, dd, Od, md, hd, this.earDistSq(dd, Od, md), nO(Wd))
          },
          soundPos: (dd, Od, md, Wd) => {
            const Fd = this.core.get(Wd);
            var Rd;
            void 0 !== Fd && (null === (Rd = this.live.get(Fd)) || void 0 === Rd || Rd.howl.pos(md, Od, dd, Fd))
          },
          soundSet: (dd, Od, md, Wd) => {
            const Fd = this.core.get(dd),
              Rd = void 0 === Fd ? void 0 : this.live.get(Fd);
            void 0 !== Fd && Rd && (this.setRel(Fd, Od), Rd.rate = md, Rd.howl.rate(md, Fd), Rd.spatial && Rd.howl.pannerAttr({
              refDistance: Wd
            }, Fd))
          },
          soundFade: (dd, Od, md, Wd) => {
            const Fd = this.core.get(dd);
            void 0 !== Fd && this.fade(Fd, Od, md, 0 !== (Wd & qd.ie.StopAfter))
          },
          soundStop: dd => {
            const Od = this.core.get(dd);
            var md;
            void 0 !== Od && (null === (md = this.live.get(Od)) || void 0 === md || md.howl.stop(Od), this.forget(Od))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new iO(((dd, Od) => this.howl(dd, Od)), (dd => {
          this.errors++, console.error("Audio preload failed", dd)
        }), Wd)
      }
      preload(dd) {
        this.loader.preload(dd)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let dd = 0; dd < aO.length; dd++) {
          if (SO.b.has(gO[EO[dd]])) continue;
          const Od = [];
          for (const md of [!1, !0]) {
            const Wd = lO(dd, md),
              Fd = this.howls.get(Wd);
            void 0 !== Fd && "loading" !== Fd.state() && Od.push({
              key: Wd,
              howl: Fd
            })
          }
          if (Od.some((dd => {
              let {
                howl: Od
              } = dd;
              return "loaded" === Od.state()
            })))
            for (const {
                key: dd,
                howl: md
              }
              of Od) this.howls.delete(dd), "loaded" === md.state() ? (0, BO.e)(md) : md.unload()
        }
      }
      onAudioEvent(dd, Od, md, Wd) {
        if (dd < qd.n.PlaySound || dd > qd.n.SoundReset) return !1;
        try {
          return (0, qd.we)(dd, Od, md, Wd, this.handlers)
        } catch (Fd) {
          return this.errors++, console.error("Audio event failed", Fd), !0
        }
      }
      applyListener(dd) {
        const Od = this.nextPose;
        for (let Wd = 0; Wd < 3; Wd++) Od[2 - Wd] = qd.u.listener(dd, 0, Wd), Od[5 - Wd] = qd.u.forward(dd, 0, Wd), Od[8 - Wd] = qd.u.up(dd, 0, Wd);
        0 === Od[3] && 0 === Od[4] && 0 === Od[5] && Od.set(this.posed ? this.pose.subarray(3) : cO, 3);
        for (let Wd = 0; Wd < 9; Wd++)
          if (!Number.isFinite(Od[Wd])) return;
        const md = this.pose;
        if (this.posed) {
          let dd = !0;
          for (let Wd = 0; Wd < 9 && dd; Wd++) dd = Od[Wd] === md[Wd];
          if (dd) return
        }
        this.listener.apply(Od) && (md.set(Od), this.posed = !0)
      }
      playGame(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = rO(dd);
        if (null === Kd) return AO.d;
        const hd = GO(Kd),
          vd = Kd[1] > 1 ? Kd : null;
        if (!md) {
          const {
            howl: dd,
            id: md
          } = this.start(hd, !1, Od, 0, 1, Xd, vd);
          return this.gameSound(dd, md, !1)
        }
        const Qd = md[0],
          td = md[1] + zO,
          od = md[2];
        if (!Number.isFinite(Qd) || !Number.isFinite(td) || !Number.isFinite(od)) return AO.d;
        let Nd;
        if (Wd) {
          const dd = Qd - Wd[0],
            Od = td - Wd[1],
            md = od - Wd[2];
          if (Nd = dd * dd + Od * Od + md * md, Nd > Fd * Fd) return AO.d
        } else Nd = this.earDistSq(Qd, td, od);
        const qd = this.startSpatial(hd, Od, 0, 1, Xd, Qd, td, od, Rd, Nd, vd);
        return qd ? this.gameSound(qd.howl, qd.id, !0) : AO.d
      }
      setMaster(dd, Od) {
        this.level = DO(dd);
        const md = Od ? this.level : 0;
        if (md !== this.master) {
          this.master = md;
          for (const [dd, Od] of this.live) Od.fadeMs = 0, Od.gain = Od.rel * this.master, Od.howl.volume(Od.gain, dd)
        }
      }
      stopCore() {
        for (const Od of [...this.core.values()]) {
          var dd;
          null === (dd = this.live.get(Od)) || void 0 === dd || dd.howl.stop(Od)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [dd, Od] of [...this.live]) Od.howl.stop(dd), this.forget(dd);
        this.core.clear()
      }
      gameSound(dd, Od, md) {
        const Wd = {
          stop: () => (this.live.has(Od) && dd.stop(Od), Wd),
          fade: (dd, md, Fd) => {
            var Rd, Xd;
            const Kd = this.level > 0 ? md / this.level : md > 0 && null !== (Rd = null === (Xd = this.live.get(Od)) || void 0 === Xd ? void 0 : Xd.rel) && void 0 !== Rd ? Rd : 0;
            return this.fade(Od, Kd, Fd, !1), Wd
          },
          rate: md => {
            const Fd = this.live.get(Od);
            return Fd && (Fd.rate = function(dd) {
              return dd > 0 && dd < 1 / 0 ? dd : 1
            }(md), dd.rate(Fd.rate, Od)), Wd
          },
          getVolume: () => {
            var dd, md;
            return (null !== (dd = null === (md = this.live.get(Od)) || void 0 === md ? void 0 : md.rel) && void 0 !== dd ? dd : 0) * this.level
          },
          getRelativeVolume: () => {
            var dd, md;
            return null !== (dd = null === (md = this.live.get(Od)) || void 0 === md ? void 0 : md.rel) && void 0 !== dd ? dd : 0
          },
          setRelativeVolume: dd => (this.setRel(Od, dd), Wd),
          setPannerAttr: Fd => {
            if (md && this.live.has(Od)) {
              const md = {
                ...PO,
                refDistance: yO.i
              };
              for (const [dd, Od] of Object.entries(Fd)) "number" !== typeof Od && "string" !== typeof Od || (md[dd] = Od);
              dd.pannerAttr({
                coneOuterAngle: md.coneOuterAngle
              }, Od), dd.pannerAttr(md, Od)
            }
            return Wd
          },
          setPosition: Fd => (md && this.live.has(Od) && Number.isFinite(Fd[0] + Fd[1] + Fd[2]) && dd.pos(Fd[2], Fd[1], Fd[0], Od), Wd)
        };
        return Wd
      }
      startSpatial(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        const td = this.howl(dd, !0);
        let od = null;
        if (!Fd) {
          if (this.failed.has(td)) return null;
          const md = EO[dd] === jO ? null : (0, uO.i)(aO[dd]),
            Wd = (0, uO.e)(DO(Od), Math.sqrt(vd), hd);
          if (od = new eO(md, Wd, this.now(), td, this.voiceHost), !this.voices.admit(od)) return null
        }
        const Nd = this.start(dd, !0, Od, md, Wd, Fd, Qd);
        return od && (od.id = Nd.id, od.direct = "loaded" === td.state() && !td._playLock), td.pannerAttr({
          coneOuterAngle: 360
        }, Nd.id), td.pannerAttr({
          ...PO,
          refDistance: hd
        }, Nd.id), td.pos(Kd, Xd, Rd, Nd.id), !Fd && this.posed && (0, sO.g)() && (0, sO.d)(gO[EO[dd]], aO[dd], Rd - this.pose[2], Kd - this.pose[0]), Nd
      }
      aliveVoice(dd) {
        const Od = this.live.get(dd);
        if (!Od) return;
        const md = Od.howl._soundById(dd);
        if (md && !md._ended) return Od;
        this.forget(dd)
      }
      earDistSq(dd, Od, md) {
        if (!this.posed) return 0;
        const Wd = dd - this.pose[2],
          Fd = Od - this.pose[1],
          Rd = md - this.pose[0];
        return Wd * Wd + Fd * Fd + Rd * Rd
      }
      start(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = DO(md),
          hd = this.howl(dd, Od);
        "unloaded" === hd.state() && (hd.load(), null !== Xd && this.loadPick(Xd, Od));
        const vd = hd.play(BO.b),
          Qd = Kd * this.master;
        return hd.volume(Qd, vd), this.live.set(vd, {
          howl: hd,
          rel: Kd,
          gain: Qd,
          fadeFrom: Qd,
          fadeAt: 0,
          fadeMs: 0,
          rate: Fd,
          handle: Wd,
          spatial: Od,
          stopTimer: void 0
        }), 0 !== Wd && this.core.set(Wd, vd), 1 !== Fd && hd.rate(Fd, vd), Rd && hd.loop(!0, vd), {
          howl: hd,
          id: vd
        }
      }
      loadPick(dd, Od) {
        let [md, Wd] = dd;
        for (let Rd = md; Rd < md + Wd; Rd++) {
          var Fd;
          const dd = this.howl(Rd, Od);
          "unloaded" === dd.state() && "loading" !== (null === (Fd = this.howls.get(lO(Rd, !Od))) || void 0 === Fd ? void 0 : Fd.state()) && dd.load()
        }
      }
      howl(dd, Od) {
        const md = lO(dd, Od);
        let Wd = this.howls.get(md);
        if (!Wd) {
          const Fd = this.createHowl(aO[dd], Od);
          Fd.on("end", (dd => {
            Fd.loop(dd) || this.forget(dd)
          })), Fd.on("stop", (dd => {
            this.forget(dd)
          })), Fd.on("play", (dd => {
            this.live.has(dd) && this.started.add(dd)
          })), Fd.on("loaderror", (dd => {
            if ("loaded" !== Fd.state()) {
              this.failed.add(Fd);
              for (const [dd, Od] of this.live) Od.howl === Fd && this.forget(dd)
            } else "number" === typeof dd && this.forget(dd)
          })), this.howls.set(md, Fd), Wd = Fd
        }
        return Wd
      }
      setRel(dd, Od) {
        const md = this.live.get(dd);
        md && (CO(md), md.fadeMs = 0, md.rel = DO(Od), md.gain = md.rel * this.master, md.howl.volume(md.gain, dd))
      }
      fade(dd, Od, md, Wd) {
        const Fd = this.live.get(dd);
        if (!Fd) return;
        CO(Fd);
        const {
          howl: Rd
        } = Fd, Xd = this.gainNow(Fd);
        Fd.rel = DO(Od), Fd.gain = Fd.rel * this.master;
        const Kd = md > 0 ? Math.min(md, 65535) : 0,
          hd = 0 === Kd || Xd === Fd.gain;
        Fd.fadeMs = hd ? 0 : Kd, hd ? Rd.volume(Fd.gain, dd) : (Fd.fadeFrom = Xd, Fd.fadeAt = this.now(), Rd.fade(Xd, Fd.gain, Kd, dd)), Wd && (hd ? Rd.stop(dd) : Fd.stopTimer = setTimeout((() => {
          Fd.stopTimer = void 0, Rd.stop(dd)
        }), Kd))
      }
      gainNow(dd) {
        if (dd.fadeMs > 0) {
          const Od = (this.now() - dd.fadeAt) / dd.fadeMs;
          if (Od < 1) return dd.fadeFrom + (dd.gain - dd.fadeFrom) * Math.max(0, Od);
          dd.fadeMs = 0
        }
        return dd.gain
      }
      forget(dd) {
        this.started.delete(dd);
        const Od = this.live.get(dd);
        Od && (CO(Od), this.live.delete(dd), 0 !== Od.handle && this.core.get(Od.handle) === dd && this.core.delete(Od.handle))
      }
    }

    function lO(dd, Od) {
      return 2 * dd + (Od ? 1 : 0)
    }

    function CO(dd) {
      void 0 !== dd.stopTimer && (clearTimeout(dd.stopTimer), dd.stopTimer = void 0)
    }
    var ZO = md(42567),
      kO = md(40714);
    class fO {
      constructor(dd, Od, md, Wd) {
        this.key = dd, this.model = Od, this.host = Wd, this.Mt = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.HXd = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Aq = !1, this.Mt = Math.max(1, Math.ceil(md)), this.records = new Float32Array(this.Mt * NO.b), this.isDirty = new Uint8Array(this.Mt), this.tail = new Uint8Array(this.Mt * qd.wc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Wd.cmd())
      }
      setOrigin(dd, Od, md) {
        this.origin[0] = dd, this.origin[1] = Od, this.origin[2] = md
      }
      markDirty(dd) {
        !this.Aq && dd >= 0 && dd < this.Mt && dd < qd.wc.Max && this.dH(dd, dd + 1)
      }
      commit(dd) {
        if (this.Aq) return;
        (dd = Math.min(Math.max(Math.floor(dd), 0), this.Mt, qd.wc.Max)) > this.count && this.dH(this.count, dd), this.count = dd;
        const {
          origin: Od,
          sentOrigin: md,
          dirtyList: Wd
        } = this, Fd = this.HXd !== dd, Rd = md[0] !== Od[0] || md[1] !== Od[1] || md[2] !== Od[2];
        if (0 === Wd.length && !Fd && !Rd) return;
        const Xd = this.host.cmd();
        if (!Xd || !this.make(Xd)) return;
        const Kd = Wd.length,
          {
            records: hd,
            tailView: vd
          } = this;
        for (let Qd = 0; Qd < Kd; Qd++) {
          const dd = Wd[Qd],
            Od = dd * NO.b,
            md = Qd * qd.wc.Bytes,
            Fd = 0 !== hd[Od + NO.f] ? qd.wc.Hidden : 0;
          vd.setUint32(md, (dd | Fd) >>> 0, !0), vd.setFloat32(md + 4, hd[Od], !0), vd.setFloat32(md + 8, hd[Od + 1], !0), vd.setFloat32(md + 12, hd[Od + 2], !0)
        }
        if ((0, qd.$e)(Xd, 0, this.key, dd, Od, Kd, this.tailOf(Kd))) {
          for (let dd = 0; dd < Kd; dd++) this.isDirty[Wd[dd]] = 0;
          Wd.length = 0, this.HXd = dd, md[0] = Od[0], md[1] = Od[1], md[2] = Od[2]
        }
      }
      grow(dd) {
        (dd = Math.ceil(dd)) <= this.Mt || this.Aq || (this.records = (0, kO.c)(this.records, new Float32Array(dd * NO.b)), this.isDirty = (0, kO.c)(this.isDirty, new Uint8Array(dd)), this.tail = new Uint8Array(dd * qd.wc.Bytes), this.tailView = new DataView(this.tail.buffer), this.Mt = dd)
      }
      dispose() {
        this.Aq || (this.Aq = !0, this.host.Aq(this, this.made ? this.key : null))
      }
      make(dd) {
        if (!this.made && dd) {
          const {
            item: Od,
            scale: md,
            yaw: Wd
          } = this.model;
          this.made = (0, qd.bf)(dd, 0, this.key, Od, md, Wd)
        }
        return this.made
      }
      tailOf(dd) {
        const Od = dd * qd.wc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Od || (this.tailCut = this.tail.subarray(0, Od)), this.tailCut
      }
      dH(dd, Od) {
        const {
          dirtyList: md,
          isDirty: Wd
        } = this;
        for (let Fd = dd; Fd < Od; Fd++) 0 === Wd[Fd] && (Wd[Fd] = 1, md.push(Fd))
      }
    }
    var MO = md(699),
      dm = md(45365);
    const Om = new TextEncoder,
      mm = new Uint8Array(0),
      Wm = [0, 0, 0];
    class Fm {
      constructor(dd, Od) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: dd,
          serverId: Od,
          owes: dd => {
            this.owing.add(dd)
          },
          settled: (dd, Od) => {
            this.owing.delete(dd), Od && this.live.delete(dd)
          }
        }
      }
      create(dd, Od) {
        return md = dd, MO.q.includes(md) ? this.add({
          lifeform: Qd.h.indexOf(dd)
        }, Od) : null;
        var md
      }
      createCosmetic(dd, Od) {
        const md = dm.COSMETIC_MODEL_KEYS.get(dd);
        return void 0 === md ? null : this.add({
          attachment: md
        }, Od)
      }
      add(dd, Od) {
        const md = new Rm(++this.keys, dd, Od, this.host);
        return this.live.add(md), md
      }
      disposeAll() {
        for (const dd of [...this.live]) dd.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const dd = this.host.cmd();
        for (const Od of this.owing)
          if (!Od.sync(dd)) return
      }
    }
    class Rm {
      constructor(dd, Od, md, Wd) {
        this.key = dd, this.source = Od, this.scale = md, this.host = Wd, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = mm, this.perch = null, this.owed = 1, this.Aq = !1, this.sync()
      }
      setPose(dd, Od) {
        this.Aq || (this.feet[0] = dd[0], this.feet[1] = dd[1], this.feet[2] = dd[2], this.yaw = Od, this.owed |= 2, this.sync())
      }
      setVisible(dd) {
        this.Aq || dd === this.visible || (this.visible = dd, this.owed |= 4, this.sync())
      }
      setClip(dd) {
        this.Aq || dd === this.clip || (this.clip = dd, this.clipBytes = null === dd ? mm : Om.encode(dd), this.owed |= 16, this.sync())
      }
      setPerch(dd) {
        this.Aq || (this.perch = dd, this.owed |= 32, this.sync())
      }
      dispose() {
        this.Aq || (this.Aq = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(dd) ? (this.host.settled(this, this.Aq), !0) : (this.host.owes(this), !1)
      }
      write(dd) {
        if (!dd) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, qd.lf)(dd, 0, this.key, this.source.lifeform, this.scale) : (0, qd.Ie)(dd, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: Od,
          perch: md
        } = this, Wd = (2 & Od ? qd.Tc.Pose : 0) | (4 & Od ? qd.Tc.Visible : 0) | (16 & Od ? qd.Tc.Clip : 0) | (32 & Od ? qd.Tc.Perch : 0);
        if (0 !== Wd) {
          var Fd, Rd;
          if (!(0, qd.jf)(dd, 0, this.key, Wd, this.visible ? 1 : 0, md ? 1 : 0, this.feet, this.yaw, md ? this.host.serverId(md.qm) : 0, null !== (Fd = null === md || void 0 === md ? void 0 : md.offset) && void 0 !== Fd ? Fd : Wm, null !== (Rd = null === md || void 0 === md ? void 0 : md.yaw) && void 0 !== Rd ? Rd : 0, 16 & Od ? this.clipBytes : mm)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, qd.ff)(dd, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Xm = md(42965);

    function Km(dd, Od, md, Wd) {
      return (0, Xm.d)(), (0, qd.bg)(dd, Od, md, Wd)
    }
    var hm = md(40732),
      Qm = md(42555),
      tm = md(42972);
    const om = [0, 0, 0],
      Nm = [0, 0, 0],
      qm = [0, 0, 0],
      Hm = [0, 0, 0],
      ym = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      bm = [0, 0, 0],
      Tm = [0, 0],
      pm = [1, 1, 1],
      Ym = 1 / 3;
    const gm = qO.g;

    function wm(dd) {
      const Od = qO.d[dd],
        md = Od && qO.g[Od.mainMultiblock];
      return md && {
        main: md,
        x: Od.compX,
        y: Od.compY,
        z: Od.compZ
      }
    }

    function am(dd) {
      if (null === dd || void 0 === dd) return qd.$c;
      const Od = +dd;
      return Number.isInteger(Od) && Od >= -2147483648 && Od <= 2147483647 && String(Od) === String(dd) ? Od : qd.$c
    }

    function Em(dd, Od, md) {
      return (0, qd.ng)(dd, 0, Od, null !== md && void 0 !== md ? md : Number.NaN)
    }
    class Jm {
      constructor(dd) {
        this.deps = dd, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new hm.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (dd => {
          var Od, md;
          null === (Od = (md = this.deps).setLocalOptions) || void 0 === Od || Od.call(md, dd)
        })), this.mobModels = new Fm((() => this.deps.cmd()), am), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Aq: (dd, Od) => {
            this.livePools.delete(dd), null !== Od && (this.owedFrees.push(Od), this.flushOwed())
          }
        }, this.api = dd.api, this.live = dd.live, this.chunks = dd.chunks, this.items = dd.items, this.tables = dd.tables
      }
      isLocal(dd) {
        return null !== dd && void 0 !== dd && +dd === this.api.localId
      }
      assertLocal(dd, Od) {
        if (!this.isLocal(dd)) throw new Error(`Attempted to ${Od} for a player that is not the local player`)
      }
      hY(dd) {
        const Od = this.api.hY(dd);
        if (!Od) throw new Error(`Entity ${dd} has no replicated position`);
        return Od
      }
      checkValid(dd) {
        return !!this.deps.isSessionLive() && (null === dd || void 0 === dd || this.api.checkValid(dd))
      }
      isAlive(dd) {
        return !1 !== this.api.isAlive(dd)
      }
      getItemStat(dd, Od, md) {
        return this.isLocal(dd) || null !== dd && "Player" === this.api.getEntityType(dd) ? this.tables.getItemStat(Od, md) : this.tables.getDefaultItemStat(Od, md)
      }
      getClientOption(dd, Od) {
        return this.assertLocal(dd, "get a client option"), this.tables.getClientOption(Od)
      }
      openShop(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(dd, "open shop"), Xd.j.lQ("showShopFromServer", {
          toggle: Od,
          AO: md
        }, !0)
      }
      sendMessage(dd, Od, md) {
        this.assertLocal(dd, "send a message");
        const Wd = "string" === typeof Od ? [{
          str: Od,
          style: md
        }] : Od;
        Xd.j.lQ("chat", {
          content: Wd
        }, !0)
      }
      getEntityType(dd) {
        return this.api.getEntityType(dd)
      }
      getEntityName(dd) {
        const Od = am(dd);
        return Od === qd.$c ? void 0 : (0, ZO.f)(this.api, Od)
      }
      hasEffect(dd, Od) {
        const md = am(dd);
        return md !== qd.$c && (0, ZO.d)(this.api, md, Od)
      }
      getMetaInfo(dd) {
        return this.tables.getMetaInfo(dd)
      }
      getPlayerDbId(dd) {
        return this.assertLocal(dd, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(dd, Od, md) {
        if (!this.chunks.dataCleared(dd, Od, md)) return (0, ZO.c)(this.api, dd, Od, md)
      }
      nS(dd, Od, md, Wd) {
        this.setBlockId(dd, Od, md, this.tables.getItemId(Wd))
      }
      setOtherEntitySetting(dd, Od, md, Wd) {
        if (!this.isLocal(dd)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(qd.od, md)) throw new Error(`Unknown other-entity setting ${md}`);
        const Fd = qd.od[md],
          Rd = am(Od);
        if (Rd === qd.$c || !this.deps.beforeWrite()) return;
        const Xd = (0, zd.e)(Wd);
        if (Xd.length > 16384) throw new Error(`The other-entity setting ${md}'s value is over 16384 bytes`);
        const Kd = this.api.memoryView(Uint8Array, this.api.scratch(), Xd.length, "set_other_entity_setting's value");
        Kd && (Kd.set(Xd), this.api.queries.setOtherEntitySetting(Rd, Fd, Xd.length))
      }
      getPositionView(dd) {
        return this.live.position(+dd)
      }
      readDrawnPosition(dd, Od) {
        return this.api.readDrawnPosition(am(dd), Od)
      }
      getDrawnHeading(dd) {
        const Od = this.drawnEntity(dd);
        if (!Od) return null;
        if (1 === qd.vb.headingIsDrawn(Od, 0)) return qd.vb.heading(Od, 0);
        const md = this.api.apiView;
        return this.isLocal(dd) && 0 === (qd.q.playerFlags(md, 0) & qd.Md.FreeCam) ? qd.q.heading(md, 0) : null
      }
      getDrawnEyeHeight(dd) {
        const Od = this.drawnEntity(dd),
          md = Od ? qd.vb.eyeHeight(Od, 0) : 0;
        return md > 0 ? md : null
      }
      drawnEntity(dd) {
        const Od = am(dd);
        return Od === qd.$c || this.api.queries.directorEntity(Od) < qd.vb.BYTES ? null : this.api.scratchData(qd.vb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(dd) {
        const Od = am(dd);
        return Od !== qd.$c && 1 === this.api.queries.entityDrawn(Od)
      }
      getPlayerIds() {
        return tm.f.ids()
      }
      getPlayerCosmetics(dd) {
        var Od;
        return null !== (Od = (0, tm.i)(dd)) && void 0 !== Od ? Od : null
      }
      getLocalPlayerMovement() {
        const dd = qd.q.playerFlags(this.api.apiView, 0);
        return 0 === (dd & qd.Md.Replay) && this.api.readDrawnPosition(this.api.localId, qm) ? {
          onGround: 0 !== (dd & qd.Md.OnGround),
          jumpHeld: 0 !== (dd & qd.Md.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, HO.v)(this.deps.localPhysicsType())
      }
      NWd(dd) {
        return this.isLocal(dd) ? this.items.jK() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var dd, Od;
        return "Gun" === (null === (dd = this.aliveHeld()) || void 0 === dd || null === (Od = dd.typeObj) || void 0 === Od ? void 0 : Od.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.jK()
      }
      isCrosshairShown() {
        var dd, Od;
        const md = (0, bO.c)(Wd.e.get("crosshairGameView"), Wd.e.get("crosshairShownOverride"));
        if (null !== md) return md;
        const Fd = null === (dd = this.aliveHeld()) || void 0 === dd ? void 0 : dd.typeObj,
          Rd = "Gun" === (null === Fd || void 0 === Fd ? void 0 : Fd.type),
          Xd = Rd || !0 === (null === Fd || void 0 === Fd ? void 0 : Fd.showsAimingUi),
          Kd = 0 === (qd.q.playerFlags(this.api.apiView, 0) & qd.Md.ZoomFirstPerson),
          hd = null !== (Od = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Od ? Od : null;
        return (0, bO.j)({
          gun: Rd,
          aimable: Xd
        }, Kd, (0, TO.b)(), hd)
      }
      setCrosshairShown(dd) {
        Wd.e.set({
          crosshairShownOverride: dd
        })
      }
      getInventoryFreeSlotCount(dd) {
        return this.isLocal(dd) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(dd) {
        return this.isLocal(dd) ? this.items.selectedSlot : null
      }
      getItemSlot(dd, Od) {
        return this.isLocal(dd) ? this.items.slot(Od) : null
      }
      swapInventorySlots(dd, Od) {
        return this.items.swap(dd, Od)
      }
      isPlayerCrouching(dd) {
        if (this.isLocal(dd)) return 0 !== (qd.q.playerFlags(this.api.apiView, 0) & qd.Md.Crouching);
        const Od = am(dd);
        return Od !== qd.$c && 1 === this.api.queries.entityCrouching(Od)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (qd.q.playerFlags(this.api.apiView, 0) & qd.Md.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.nOd()
      }
      getActionRay() {
        const dd = this.api.apiView;
        for (let Od = 0; Od < 3; Od++) ym.origin[Od] = qd.q.Omd(dd, 0, Od), ym.direction[Od] = qd.q.actionDir(dd, 0, Od);
        return ym
      }
      canModifyBlockAt(dd, Od, md) {
        return 1 === this.api.queries.canModify(dd, Od, md)
      }
      isSolidToPlayerBlockId(dd) {
        return this.tables.isSolidBlockId(dd) && !this.chunks.isWalkThrough(dd)
      }
      blockNameToBlockId(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(dd, Od)
      }
      blockIdToBlockName(dd) {
        return this.tables.nameOfId(dd)
      }
      Bmd(dd, Od, md, Wd, Fd) {
        return 1 === this.api.queries.terrainBlocked(Wd, dd, Od, md, am(null !== Fd && void 0 !== Fd ? Fd : null))
      }
      getChunkVersion(dd, Od, md) {
        return this.chunks.version(dd, Od, md)
      }
      scanBlocks(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        return this.chunks.scan(dd, Od, md, Wd, Fd, Rd, Xd, Kd)
      }
      readColumnTops(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        this.chunks.columnTops(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd)
      }
      isBlockInLoadedChunk(dd, Od, md) {
        return this.chunks.isLoaded(dd, Od, md)
      }
      getBlockId(dd, Od, md) {
        return this.chunks.XK(dd, Od, md)
      }
      playSound(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(dd)) return null;
        const Xd = this.playSoundFrom(Od, md, Fd, Rd);
        return 1 === Wd ? Xd : Xd.rate(Wd)
      }
      preloadSounds(dd) {
        var Od, md;
        null === (Od = (md = this.deps).preloadSounds) || void 0 === Od || Od.call(md, dd)
      }
      playSoundFrom(dd, Od, md, Wd) {
        var Fd, Rd;
        const Xd = this.deps.playSound;
        if (!Xd) return AO.d;
        const Kd = null === md || void 0 === md ? void 0 : md.mW,
          hd = null !== (Fd = null === md || void 0 === md ? void 0 : md.maxHearDist) && void 0 !== Fd ? Fd : yO.f,
          vd = null !== (Rd = null === md || void 0 === md ? void 0 : md.refDistance) && void 0 !== Rd ? Rd : yO.i;
        let Qd = null;
        if (Array.isArray(Kd)) om[0] = Kd[0], om[1] = Kd[1], om[2] = Kd[2], Qd = om;
        else if (void 0 !== Kd && null !== Kd) {
          const dd = am(Kd);
          if (!this.api.isLocal(dd)) {
            if (!this.api.readPosition(dd, om)) return AO.d;
            Qd = om
          }
        }
        return Xd(dd, Od, Qd, Qd && this.ear(), hd, vd, Wd)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Nm)) Nm[1] += zO;
        else {
          const dd = this.api.apiView;
          if (0 === qd.q.viewProj(dd, 0, 3) && 0 === qd.q.viewProj(dd, 0, 7) && 0 === qd.q.viewProj(dd, 0, 11)) return null;
          for (let Od = 0; Od < 3; Od++) Nm[Od] = qd.q.eye(dd, 0, Od)
        }
        return Number.isFinite(Nm[0] + Nm[1] + Nm[2]) ? Nm : null
      }
      setBlockId(dd, Od, md, Wd) {
        if (!Number.isInteger(Wd) || Wd < 0 || Wd > 65535) throw new Error(`Invalid block id ${Wd}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(dd, Od, md)) return;
        const Fd = Math.floor(dd),
          Rd = Math.floor(Od),
          Xd = Math.floor(md),
          Kd = this.predictedCells(Fd, Rd, Xd, Wd);
        if (1 === this.api.queries.nS(Fd, Rd, Xd, Wd)) {
          for (let dd = 0; dd < Kd.length; dd += 5) this.chunks.setOverlay(Kd[dd], Kd[dd + 1], Kd[dd + 2], Kd[dd + 3], 1 === Kd[dd + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(dd, Od) {
        return this.deps.particles.create(dd, Od)
      }
      playParticleEffect(dd) {
        this.deps.particles.playEffect(dd)
      }
      burstParticlePreset(dd, Od, md) {
        this.deps.particles.burstPreset(dd, Od, md)
      }
      createGameMesh(dd, Od, md) {
        const Wd = ++this.meshKeys,
          Fd = this.deps.cmd();
        if (!Fd) return Wd;
        const {
          look: Rd,
          colour: Xd
        } = function(dd) {
          switch (dd.kind) {
            case void 0:
            case "flatEmissive":
              return dd.onTop ? {
                look: qd.ec.FlatOnTop,
                colour: [...dd.rgb, dd.alpha]
              } : dd.opaque ? {
                look: qd.ec.FlatOpaque,
                colour: [...dd.rgb, 1]
              } : {
                look: qd.ec.Flat,
                colour: [...dd.rgb, dd.alpha]
              };
            case "chevronPath":
              return {
                look: qd.ec.Chevrons, colour: [...(0, pO.b)(dd.colour), dd.alpha]
              };
            case "furnaceFire":
              return {
                look: qd.ec.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Od), Kd = Math.floor(dd.positions.length / 3), hd = function(dd, Od) {
          const md = Math.floor(dd.positions.length / 3),
            Wd = dd.indices.length,
            Fd = md * (Od ? 5 : 3),
            Rd = new Uint8Array(4 * (Fd + Wd)),
            Xd = new DataView(Rd.buffer);
          for (let vd = 0; vd < 3 * md; vd++) Xd.setFloat32(4 * vd, dd.positions[vd], !0);
          if (Od) {
            var Kd;
            const Od = null !== (Kd = dd.uvs) && void 0 !== Kd ? Kd : [];
            for (let dd = 0; dd < 2 * md; dd++) {
              var hd;
              Xd.setFloat32(4 * (3 * md + dd), null !== (hd = Od[dd]) && void 0 !== hd ? hd : 0, !0)
            }
          }
          for (let vd = 0; vd < Wd; vd++) Xd.setUint32(4 * (Fd + vd), dd.indices[vd], !0);
          return Rd
        }(dd, (0, NO.i)(Od));
        return (0, qd.Se)(Fd, 0, Wd, Rd, Xd, md, Kd, dd.indices.length, hd) && this.liveMeshes.add(Wd), Wd
      }
      setGameMesh(dd, Od) {
        var md;
        const Wd = this.deps.cmd();
        if (!Wd) return;
        let Fd = 0;
        Od.anchor && (Fd |= qd.fc.Anchor, bm[0] = Od.anchor[0], bm[1] = Od.anchor[1], bm[2] = Od.anchor[2]), void 0 !== Od.visible && (Fd |= qd.fc.Visible), Od.uvOffset && (Fd |= qd.fc.UvOffset, Tm[0] = Od.uvOffset[0], Tm[1] = Od.uvOffset[1]);
        const Rd = null !== (md = Od.visibility) && void 0 !== md ? md : 1;
        void 0 !== Od.visibility && (Fd |= qd.fc.Visibility), Od.scale && (Fd |= qd.fc.Scale, pm[0] = Od.scale[0], pm[1] = Od.scale[1], pm[2] = Od.scale[2]), 0 !== Fd && (0, qd.We)(Wd, 0, dd, Fd, Od.visible ? 1 : 0, bm, Tm, Rd, pm)
      }
      disposeGameMesh(dd) {
        const Od = this.deps.cmd();
        Od && !(0, qd.Ue)(Od, 0, dd) || this.liveMeshes.delete(dd)
      }
      hasPackModel(dd) {
        var Od, md, Wd;
        return null !== (Od = null === (md = (Wd = this.deps).hasPackModel) || void 0 === md ? void 0 : md.call(Wd, dd)) && void 0 !== Od && Od
      }
      disposeGameOutput() {
        const dd = dd => {
          try {
            dd()
          } catch (Od) {
            console.error("Error freeing client game output", Od)
          }
        };
        for (const Od of [...this.liveMeshes]) dd((() => {
          this.disposeGameMesh(Od)
        }));
        for (const Od of [...this.livePools]) dd((() => {
          Od.dispose()
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
      createInstancePool(dd, Od) {
        const md = this.tables.idOf(dd.item);
        if (void 0 === md) return null;
        const Wd = new fO(++this.poolKeys, {
          item: md,
          scale: dd.scale,
          yaw: dd.yaw
        }, Od, this.poolHost);
        return this.livePools.add(Wd), Wd
      }
      createMobModel(dd, Od) {
        return this.mobModels.create(dd, Od)
      }
      createCosmeticModel(dd, Od) {
        return this.mobModels.createCosmetic(dd, Od)
      }
      setRouteChevrons(dd) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !dd || 0 === dd.cells.length) return;
        const Od = `${dd.colour} ${dd.alpha}`;
        Od !== this.routeLook && (this.routeLook = Od, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(dd) {
          const [Od, md, Wd] = dd[0].pos, Fd = [], Rd = [], Xd = [];
          return dd.forEach(((dd, Kd) => {
            let {
              pos: hd,
              way: [vd, Qd]
            } = dd;
            const td = hd[0] - Od + .5,
              od = hd[1] - md + .04,
              Nd = hd[2] - Wd + .5,
              [qd, Hd] = [.35 * -Qd, .35 * vd],
              [yd, bd] = [Kd * Ym, (Kd + 1) * Ym],
              Td = Fd.length / 3;
            Fd.push(td - .5 * vd + qd, od, Nd - .5 * Qd + Hd), Fd.push(td - .5 * vd - qd, od, Nd - .5 * Qd - Hd), Fd.push(td + .5 * vd + qd, od, Nd + .5 * Qd + Hd), Fd.push(td + .5 * vd - qd, od, Nd + .5 * Qd - Hd), Rd.push(0, yd, 1, yd, 0, bd, 1, bd), Xd.push(Td, Td + 1, Td + 2, Td + 1, Td + 3, Td + 2)
          })), {
            positions: Fd,
            uvs: Rd,
            indices: Xd
          }
        }(dd.cells), {
          kind: "chevronPath",
          colour: dd.colour,
          alpha: dd.alpha
        }, dd.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(dd) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(dd, 250) / 1e3 * 1.2 * Ym) % 1, this.setRouteSlide())
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
        const Od = this.deps.cmd();
        if (!Od) return dd.length = 0, void(this.pendingFar = void 0);
        let md = 0;
        for (; md < dd.length && (0, qd.af)(Od, 0, dd[md]);) md++;
        dd.splice(0, md);
        const Wd = this.pendingStyle;
        if (void 0 !== Wd) {
          (Wd ? (0, qd.og)(Od, 0, Wd.width, Wd.alpha, 1, Wd.endAtSolidFace ? 1 : 0) : (0, qd.og)(Od, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Fd = this.pendingFar;
        void 0 !== Fd && (0, qd.jg)(Od, 0, null !== Fd && void 0 !== Fd ? Fd : 0, null === Fd ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(dd, Od) {
        const md = this.deps.cmd(),
          Wd = am(dd);
        md && Wd !== qd.$c && (0, qd.xg)(md, 0, Wd, Od)
      }
      setFacingTolerance(dd, Od) {
        const md = this.deps.cmd(),
          Wd = am(dd);
        md && Wd !== qd.$c && Em(md, Wd, Od)
      }
      forEachEntity(dd) {
        const {
          api: Od
        } = this;
        for (let md = 0; md < Od.idStr.length; md++) {
          const Wd = Od.idStr[md];
          null === Wd || gd(Od.kinds[md]) || dd(Wd)
        }
      }
      getEntityInfo(dd) {
        return this.deps.entityInfo.get(dd)
      }
      isEntityInteractable(dd) {
        const Od = am(dd);
        return Od !== qd.$c && 1 === this.api.queries.entityInteractable(Od)
      }
      isLocalPlayer(dd) {
        return this.isLocal(dd)
      }
      getLineOwner(dd) {
        var Od;
        const md = null === (Od = this.deps.entityInfo.get(dd)) || void 0 === Od ? void 0 : Od.meshOpts;
        if (!md) return null;
        try {
          const {
            lineToEId: dd
          } = JSON.parse(md);
          return null !== dd && void 0 !== dd ? dd : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const dd = this.api.apiView;
        return Hm[0] = qd.q.eye(dd, 0, 0), Hm[1] = qd.q.eye(dd, 0, 1), Hm[2] = qd.q.eye(dd, 0, 2), Hm
      }
      getCameraFar() {
        return qd.q.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(dd) {
        null !== dd && (this.farSet = !0), this.pendingFar = dd, this.flushOwed()
      }
      turnCamera(dd, Od) {
        this.cameraTurn.turn(dd, Od)
      }
      clearPickupDelay(dd) {
        const Od = this.deps.cmd(),
          md = am(dd);
        Od && md !== qd.$c && (0, qd.Ce)(Od, 0, md)
      }
      sendChat(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = this.deps.sendCmd();
        return null !== md && Km(md, 0, Qm.c.Chat, (0, zd.e)((0, Qm.l)({
          tX: dd,
          oX: Od
        })))
      }
      sendCommand(dd) {
        dd.length <= 119 && this.sendChat(`/${dd}`)
      }
      predictedCells(dd, Od, md, Wd) {
        const Fd = this.chunks,
          Rd = [],
          Xd = (dd, Od, md, Wd, Fd) => {
            Rd.push(dd, Od, md, Wd, this.tables.blockRootId(Fd) === this.tables.blockRootId(Wd) ? 0 : 1)
          },
          Kd = Fd.XK(dd, Od, md),
          hd = wm(Kd);
        if (hd) {
          const [Wd, Rd, vd] = [dd - hd.x, Od - hd.y, md - hd.z], Qd = gm[Fd.XK(Wd, Rd, vd)], td = null === Qd || void 0 === Qd ? void 0 : Qd.positions.some((dd => dd.id === Kd && dd.x === hd.x && dd.y === hd.y && dd.z === hd.z));
          for (const dd of (td && Qd ? Qd : hd.main).positions) Fd.XK(Wd + dd.x, Rd + dd.y, vd + dd.z) === dd.id && Xd(Wd + dd.x, Rd + dd.y, vd + dd.z, 0, dd.id)
        }
        const vd = wm(Wd);
        if (vd)
          for (const td of vd.main.positions) {
            const [Wd, Rd, Kd] = [dd + td.x - vd.x, Od + td.y - vd.y, md + td.z - vd.z];
            Xd(Wd, Rd, Kd, td.id, Fd.XK(Wd, Rd, Kd))
          } else Xd(dd, Od, md, Wd, Kd);
        const Qd = this.tables;
        if ((0 !== Qd.attachedTopOf(Kd) || 0 !== Qd.attachedTopOf(Wd)) && Fd.isLoaded(dd, Od + 1, md)) {
          let hd = Fd.XK(dd, Od + 1, md);
          for (let Wd = 0; Wd < Rd.length; Wd += 5) Rd[Wd] === dd && Rd[Wd + 1] === Od + 1 && Rd[Wd + 2] === md && (hd = Rd[Wd + 3]);
          const vd = this.attachedTopWrite(Kd, Wd, hd);
          void 0 !== vd && Xd(dd, Od + 1, md, vd, hd)
        }
        return Rd
      }
      attachedTopWrite(dd, Od, md) {
        const Wd = this.tables,
          Fd = Wd.attachedTopOf(dd),
          Rd = Wd.attachedTopOf(Od),
          Xd = 0 !== Fd && 0 !== md && Wd.blockRootId(md) === Wd.blockRootId(Fd);
        return 0 !== Fd && 0 !== Rd && Wd.blockRootId(dd) === Wd.blockRootId(Od) ? Xd && md !== Rd ? Rd : void 0 : 0 === Rd || !Xd && 0 !== md ? Xd ? 0 : void 0 : Rd
      }
    }
    const Um = qd.tc + qd.uc * qd.Ac.BYTES,
      xm = 2147483647,
      Bm = new TextDecoder,
      Sm = new TextEncoder,
      sm = Object.freeze({
        qK: 0,
        IQ: null,
        amountAddedToSlot: 0
      }),
      um = new Proxy({}, {
        get: () => () => qd.md
      });

    function Vm(dd) {
      return Number.isInteger(dd) && dd >= 0 && dd <= 65535
    }

    function im(dd) {
      return Number.isInteger(dd) && dd >= 0 && dd <= 4294967295
    }
    class Am {
      constructor(dd) {
        this.deps = dd, this.cF = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(qd.uc), this.ids = new Uint16Array(qd.uc), this.amounts = new Uint16Array(qd.uc), this.attrRead = new Float64Array(qd.uc).fill(-1), this.stale = new Uint16Array(qd.uc), this.staleVersion = new Uint32Array(qd.uc), this.instances = new Uint32Array(qd.uc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var Od;
        return Number.isInteger(dd) && dd >= 0 && dd < this.len && 0 !== this.ids[dd] && null !== (Od = this.facades[dd]) && void 0 !== Od ? Od : null
      }
      jK() {
        return this.slot(this.selected)
      }
      playerItems() {
        const dd = [];
        for (let Od = 0; Od < Math.min(qd.ud, this.len); Od++) dd.push(this.slot(Od));
        return dd
      }
      freeSlots() {
        let dd = 0;
        for (let Od = 0; Od < Math.min(qd.ud - qd.j, this.len); Od++) 0 === this.ids[Od] && dd++;
        return dd
      }
      amountOf(dd) {
        let Od = 0;
        for (let Wd = 0; Wd < Math.min(qd.ud, this.len); Wd++) {
          const Fd = this.slot(Wd);
          var md;
          if ((null === Fd || void 0 === Fd ? void 0 : Fd.name) === dd) Od += null !== (md = Fd.amount) && void 0 !== md ? md : 1
        }
        return Od
      }
      instance(dd) {
        var Od;
        return null !== (Od = this.instances[dd]) && void 0 !== Od ? Od : 0
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
          for (const md of [...this.listeners]) try {
            md()
          } catch (Od) {
            dd(Od)
          }
        }
      }
      chestOpened(dd, Od, md) {
        this.cF[0] = dd, this.cF[1] = Od, this.cF[2] = md, this.version++
      }
      refresh() {
        const dd = this.deps.api.apiView,
          Od = qd.q.inventoryViewPtr(dd, 0),
          md = qd.q.inventoryVersion(dd, 0),
          Wd = qd.q.selectedSlot(dd, 0);
        Wd !== this.selected && (this.selected = Wd, this.version++);
        const Fd = qd.q.slotIcon(dd, 0);
        if (Fd !== this.slotIconId && (this.slotIconId = Fd, this.iconChanged = !0), Od === this.viewPtr && md === this.viewVersion) return;
        this.viewPtr = Od, this.viewVersion = md;
        const Rd = this.deps.api.memoryData(Od, Um, 4, "the inventory view"),
          Xd = Rd ? Math.min(Rd.getUint32(0, !0), qd.uc) : 0;
        Xd !== this.len && (this.len = Xd, this.version++);
        let Kd = 0;
        for (let hd = 0; hd < qd.uc; hd++) {
          const dd = qd.tc + hd * qd.Ac.BYTES,
            Od = null !== Rd && hd < Xd ? qd.Ac.item(Rd, dd) : 0;
          if (0 === Od || null === Rd) {
            0 !== this.ids[hd] && (this.ids[hd] = 0, this.attrRead[hd] = -1, this.instances[hd]++, this.version++);
            continue
          }
          const md = qd.Ac.amount(Rd, dd),
            Wd = qd.Ac.attrVersion(Rd, dd);
          Od === this.ids[hd] && md === this.amounts[hd] || this.fill(hd, Od, md), Wd !== this.attrRead[hd] && (this.stale[Kd] = hd, this.staleVersion[Kd] = Wd, Kd++)
        }
        Kd > 0 && this.fetchAttributes(Kd)
      }
      fill(dd, Od, md) {
        const {
          tables: Wd
        } = this.deps, Fd = Od !== this.ids[dd];
        let Rd = this.facades[dd];
        Rd || (Rd = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[dd] = Rd), Fd && (Rd.name = Wd.nameOfId(Od), Rd.typeObj = Wd.itemType(Od), Rd.attributes = {
          customAttributes: {}
        }, this.attrRead[dd] = -1, this.instances[dd]++), Rd.amount = 0 === md ? null : md, this.ids[dd] = Od, this.amounts[dd] = md, this.version++
      }
      fetchAttributes(dd) {
        const {
          api: Od,
          onError: md
        } = this.deps, Wd = Od.memoryView(Uint16Array, Od.scratch(), dd, "item_attributes_batch's slots");
        if (!Wd) return void this.markRead(dd);
        Wd.set(this.stale.subarray(0, dd));
        const Fd = Od.queries.itemAttributesBatch(dd),
          Rd = 4294967295 === Fd ? null : Od.memoryData(Od.scratch(), Fd, 4, "item_attributes_batch's answer");
        if (!Rd) return void this.markRead(dd);
        const Xd = new Uint8Array(Rd.buffer, Rd.byteOffset, Fd);
        for (let hd = 0; hd + 8 <= Fd;) {
          const dd = Rd.getUint16(hd, !0),
            Od = Rd.getUint32(hd + 4, !0),
            Wd = Xd.subarray(hd + 8, hd + 8 + Od);
          hd += 8 + (0, od.ve)(Od);
          const Fd = this.facades[dd];
          if (Fd && 0 !== this.ids[dd] && 0 !== Od) {
            try {
              Fd.attributes = JSON.parse(Bm.decode(Wd))
            } catch (Kd) {
              md(Kd)
            }
            this.version++
          }
        }
        this.markRead(dd)
      }
      markRead(dd) {
        for (let Od = 0; Od < dd; Od++) this.attrRead[this.stale[Od]] = this.staleVersion[Od]
      }
      swap(dd, Od) {
        return Vm(dd) && Vm(Od) && this.settle(this.queries().invSwap(dd, Od))
      }
      move(dd, Od, md) {
        return Vm(dd) && Vm(Od) && im(md) && this.settle(this.queries().invMove(dd, Od, md))
      }
      quickMove(dd, Od, md, Wd) {
        var Fd, Rd;
        if (!Vm(dd) || !Vm(Od) || !Vm(md) || null !== Wd && !im(Wd)) return null;
        const Xd = this.queries().invQuickMove(dd, Od, md, null === Wd ? -1 : Math.min(Wd, xm)),
          Kd = Xd === qd.md ? qd.Sb : null !== (Fd = null === (Rd = this.extras()) || void 0 === Rd ? void 0 : Rd[1]) && void 0 !== Fd ? Fd : qd.Sb;
        return this.settle(Xd), Kd === qd.Sb ? null : Kd
      }
      remove(dd, Od, md) {
        return Vm(dd) && im(Od) && this.settle(this.queries().invRemove(dd, Od, md ? 1 : 0))
      }
      selectSlot(dd) {
        return Vm(dd) && this.settle(this.queries().selectSlot(dd))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(dd, Od, md) {
        if (!Vm(dd) || !Number.isInteger(Od)) return !1;
        const [Wd, Fd, Rd] = md;
        return this.settle(this.queries().invEnchant(dd, Od, Math.floor(Wd), Math.floor(Fd), Math.floor(Rd)))
      }
      craft(dd, Od, md) {
        let Wd;
        try {
          Wd = this.deps.tables.getItemId(dd)
        } catch {
          return sm
        }
        if (!Vm(Od) || null !== md && (Number.isNaN(md) || md < 0)) return sm;
        const Fd = null === md || md > xm ? -1 : Math.floor(md),
          Rd = this.queries().craft(Wd, Od, Fd);
        let Xd = sm;
        const Kd = Rd === qd.md ? null : this.extras();
        if (Kd) {
          const [dd, Od, md] = Kd;
          Xd = {
            qK: dd,
            IQ: Od === qd.Sb ? null : Od,
            amountAddedToSlot: md
          }
        }
        return this.settle(Rd), Xd
      }
      salvage(dd, Od, md) {
        let Wd;
        try {
          Wd = this.deps.tables.getItemId(Od)
        } catch {
          return !1
        }
        return Vm(dd) && Number.isInteger(md) && this.settle(this.queries().salvage(dd, Wd, Math.max(Math.min(md, xm), -xm)))
      }
      craftingView(dd, Od, md) {
        var Wd;
        if (this.stopped) return null;
        const {
          api: Fd,
          onError: Rd
        } = this.deps, Xd = dd ? Sm.encode(dd) : null;
        if (null !== Xd) {
          if (Xd.length > 1024) return Rd(new Error(`The crafting station ${dd}'s name is over 1024 bytes`)), null;
          const Od = Fd.memoryView(Uint8Array, Fd.scratch(), Xd.length, "crafting_view's station");
          if (!Od) return null;
          Od.set(Xd)
        }
        const Kd = Vm(Od) && Vm(md),
          hd = Fd.queries.craftingView(null !== (Wd = null === Xd || void 0 === Xd ? void 0 : Xd.length) && void 0 !== Wd ? Wd : 0, Kd ? Od : 0, Kd ? md : 0);
        return hd < qd.lb.BYTES ? (Fd.reportCorruption(`crafting_view's answer of ${hd} bytes`), null) : Fd.memoryData(Fd.scratch(), hd, 1, "crafting_view's answer")
      }
      queries() {
        var dd, Od;
        return !1 === (null === (dd = (Od = this.deps).beforeOp) || void 0 === dd ? void 0 : dd.call(Od)) ? (this.stopped = !0, um) : this.deps.api.queries
      }
      extras() {
        const {
          api: dd
        } = this.deps;
        return dd.memoryView(Uint32Array, dd.scratch(), 3, "a sync query's extra words")
      }
      settle(dd) {
        if (dd === qd.jd)(0, Xm.d)();
        else if (dd !== qd.md) {
          const Od = this.deps.cmd();
          Od && function(dd, Od, md) {
            return (0, Xm.d)(), (0, qd.Lg)(dd, Od, md)
          }(Od, 0, dd) || this.deps.onError(new Error(`Sync op ${dd}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), dd !== qd.md
      }
    }
    const rm = 1 / .6,
      Gm = [0, 1, 0],
      nm = [0, 0, 0],
      Lm = new Uint8Array(0),
      Pm = 1.2 * YO.i.Hb,
      zm = new TextEncoder,
      cm = [0, 0, 0],
      jm = [0, 0, 0],
      Dm = new Map;

    function em(dd) {
      let Od = Dm.get(dd);
      return Od || (Dm.size >= 64 && Dm.clear(), Od = zm.encode(`{"emitRate":${dd}}`), Dm.set(dd, Od)), Od
    }

    function Im(dd) {
      return Number.isFinite(dd) && dd > 0 ? dd : 0
    }

    function lm(dd, Od) {
      for (let md = 0; md < 3; md++) {
        const Wd = Math.abs(Od[md]);
        cm[md] = dd[md] - Wd, jm[md] = 2 * Wd
      }
      return Number.isFinite(cm[0] + cm[1] + cm[2] + jm[0] + jm[1] + jm[2])
    }

    function Cm(dd, Od) {
      return "pos1" === dd || "pos2" === dd ? void 0 : Od
    }

    function Zm(dd, Od, md) {
      return dd.length > qd.Id.MaxOpts ? (md(new Error(`${Od}'s particle opts are over ${qd.Id.MaxOpts} bytes of JSON`)), null) : dd
    }
    const km = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class fm {
      constructor(dd) {
        this.deps = dd, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(dd, Od) {
        var md;
        const Wd = this.sink(),
          Fd = null !== (md = Od.half) && void 0 !== md ? md : nm;
        if (!Wd || this.live >= qd.Id.MaxLiveKeys || this.nextKey > qd.Id.MaxKey || !lm(Od.pos, Fd)) return km;
        const Rd = this.nextKey,
          Xd = Zm(function(dd) {
            var Od, md, Wd;
            const Fd = JSON.stringify({
              texture: "string" === typeof dd.texture ? dd.texture : "smokePuff",
              Mt: dd.Mt,
              minLifeTime: dd.minLifeTime,
              maxLifeTime: dd.maxLifeTime,
              minSize: dd.minSize,
              maxSize: dd.maxSize,
              minEmitPower: dd.minEmitPower,
              maxEmitPower: dd.maxEmitPower,
              emitRate: Im(dd.emitRate),
              gravity: null !== (Od = dd.gravity) && void 0 !== Od ? Od : nm,
              dir1: null !== (md = dd.dir1) && void 0 !== md ? md : Gm,
              dir2: null !== (Wd = dd.dir2) && void 0 !== Wd ? Wd : Gm,
              colorGradients: dd.colorGradients,
              blendMode: dd.blendMode
            });
            return zm.encode(Fd)
          }(dd), "createParticles", this.deps.onError);
        return Xd && (0, qd.uf)(Wd, 0, Rd, 0, qd.Id.PresetNone, 0, cm, jm, Xd) ? (this.nextKey++, this.live++, this.started = !0, new Mm(this, this.session, Rd, dd, Fd)) : km
      }
      playEffect(dd) {
        const Od = this.sink(),
          {
            pos1: md,
            pos2: Wd
          } = dd;
        if (!Od || !md || !Wd) return;
        for (let Rd = 0; Rd < 3; Rd++) cm[Rd] = Math.min(md[Rd], Wd[Rd]), jm[Rd] = Math.abs(Wd[Rd] - md[Rd]);
        if (!Number.isFinite(cm[0] + cm[1] + cm[2] + jm[0] + jm[1] + jm[2])) return;
        const Fd = Zm(zm.encode(JSON.stringify(dd, Cm)), "playParticleEffect", this.deps.onError);
        Fd && (0, qd.pf)(Od, 0, 0, qd.Id.PresetNone, qd.Id.HasBox, 0, cm, jm, Fd)
      }
      burstPreset(dd, Od, md) {
        const Wd = this.sink(),
          Fd = Math.min(Math.floor(md), qd.Id.MaxBurst);
        if (!Wd || !Object.hasOwn(qd.ic, dd) || !(Fd > 0)) return;
        const Rd = Pm;
        for (let Xd = 0; Xd < 3; Xd++) cm[Xd] = Od[Xd] - Rd / 2, jm[Xd] = Rd;
        Number.isFinite(cm[0] + cm[1] + cm[2]) && (0, qd.pf)(Wd, 0, 0, qd.ic[dd], qd.Id.HasBox, Fd, cm, jm, Lm)
      }
      sessionEnded() {
        this.session++;
        const dd = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !dd || (0, qd.yf)(dd, 0)
      }
      sinkFor(dd) {
        return dd === this.session ? this.deps.cmd() : null
      }
      stop(dd, Od) {
        const md = this.sinkFor(dd);
        md && (0, qd.Bf)(md, 0, Od) && this.live--
      }
    }
    class Mm {
      constructor(dd, Od, md, Wd, Fd) {
        this.owner = dd, this.session = Od, this.key = md, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Fd[0]), Math.abs(Fd[1]), Math.abs(Fd[2])], this.rate = Im(Wd.emitRate), this.emitted = this.rate > 0;
        const Rd = Wd.maxLifeTime * rm * 1e3 + 250;
        this.stopDelayMs = Rd >= 0 ? Math.min(Rd, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(dd, Od) {
        const md = this.sink();
        if (md) {
          if (Od)
            for (let dd = 0; dd < 3; dd++) this.half[dd] = Math.abs(Od[dd]);
          lm(dd, this.half) && (0, qd.Ff)(md, 0, this.key, qd.Id.HasBox, cm, jm, Lm)
        }
      }
      setEmitRate(dd) {
        const Od = this.sink(),
          md = Im(dd);
        Od && md !== this.rate && (0, qd.Ff)(Od, 0, this.key, 0, nm, nm, em(md)) && (this.rate = md, this.emitted ||= md > 0)
      }
      emit(dd) {
        const Od = this.sink(),
          md = Math.min(Math.floor(dd), qd.Id.MaxBurst);
        Od && md > 0 && (0, qd.pf)(Od, 0, this.key, qd.Id.PresetNone, 0, md, nm, nm, Lm) && (this.emitted = !0)
      }
      emitPoints(dd, Od, md) {
        const Wd = this.sink(),
          Fd = Math.min(Math.floor(md), qd.Id.MaxPoints, Math.floor(Od.length / 4));
        if (!Wd || !(Fd > 0) || !Number.isFinite(dd[0] + dd[1] + dd[2])) return;
        const Rd = new Uint8Array(Od.buffer, Od.byteOffset, Fd * qd.Id.PointBytes);
        (0, qd.qf)(Wd, 0, this.key, Fd, dd, Rd) && (this.emitted = !0)
      }
      setDirections(dd, Od) {
        const md = this.sink();
        if (!md || !Number.isFinite(dd[0] + dd[1] + dd[2] + Od[0] + Od[1] + Od[2])) return;
        const Wd = zm.encode(JSON.stringify({
          dir1: [dd[0], dd[1], dd[2]],
          dir2: [Od[0], Od[1], Od[2]]
        }));
        (0, qd.Ff)(md, 0, this.key, 0, nm, nm, Wd)
      }
      stop() {
        const dd = this.sink();
        this.stopped = !0, dd && (this.emitted ? (this.rate > 0 && (0, qd.Ff)(dd, 0, this.key, 0, nm, nm, em(0)), setTimeout((() => {
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
    const dW = MO.t,
      OW = new TextDecoder;

    function mW(dd, Od) {
      const {
        serverIds: md,
        kinds: Wd
      } = dd;
      let Fd = 0;
      for (let Rd = 0; Rd < md.length; Rd++) {
        const dd = md[Rd];
        if (dd !== qd.$c && !gd(Wd[Rd])) {
          if (Fd === Od.length) {
            const dd = new Int32Array(Math.max(64, 2 * Fd));
            dd.set(Od), Od = dd
          }
          Od[Fd++] = dd
        }
      }
      return {
        ids: Od,
        count: Fd
      }
    }

    function WW(dd, Od) {
      return dd.length >= Od ? dd : new Int32Array(Math.max(Od, 2 * dd.length))
    }

    function FW(dd, Od, md, Wd) {
      for (let Fd = 0; Fd < md; Fd += 4096) {
        const Rd = Math.min(4096, md - Fd),
          Xd = dd.memoryView(Int32Array, dd.scratch(), Rd, "entity_info_batch's ids");
        if (!Xd) return !1;
        Xd.set(Od.subarray(Fd, Fd + Rd));
        const Kd = dd.queries.entityInfoBatch(Rd),
          hd = 4294967295 === Kd ? null : dd.memoryData(dd.scratch(), Kd, 4, "entity_info_batch's records");
        if (!hd) return !1;
        for (let dd = 0; dd + qd.$b.BYTES <= Kd;) {
          const Od = qd.$b.len(hd, dd);
          Wd(qd.$b.serverId(hd, dd), RW(hd, dd, Od)), dd += qd.$b.BYTES + (0, od.ve)(Od)
        }
      }
      return !0
    }

    function RW(dd, Od, md) {
      var Wd, Fd, Rd;
      const Xd = qd.$b.kind(dd, Od),
        Kd = 0 === Xd ? null : wd(Xd);
      if (null === Kd) return null;
      const hd = qd.$b.variation(dd, Od),
        vd = qd.$b.pose(dd, Od),
        Qd = qd.$b.meta(dd, Od),
        td = qd.$b.mesh(dd, Od),
        od = 0 !== (qd.$b.flags(dd, Od) & qd.Yb.HasOpts),
        Nd = dW[Kd];
      return Object.freeze({
        type: Kd,
        variation: hd === qd.gd ? void 0 : null !== (Wd = null !== (Fd = null === Nd || void 0 === Nd ? void 0 : Nd[hd]) && void 0 !== Fd ? Fd : null === Nd || void 0 === Nd ? void 0 : Nd[0]) && void 0 !== Wd ? Wd : "default",
        pose: vd === qd.rc ? void 0 : null !== (Rd = qd.Lb[vd]) && void 0 !== Rd ? Rd : qd.Lb[0],
        metaInfo: Qd === qd.rc ? void 0 : qd.Qc[Qd],
        meshKind: td === qd.rc ? void 0 : qd.Oc[td],
        meshOpts: od ? OW.decode(new Uint8Array(dd.buffer, dd.byteOffset + Od + qd.$b.BYTES, md)) : void 0
      })
    }
    const XW = 1,
      KW = 2;
    class hW {
      constructor(dd) {
        this.deps = dd, this.wanted = 0, this.jK = !1, this.refused = !1
      }
      get on() {
        return this.jK
      }
      want(dd, Od) {
        this.wanted = Od ? this.wanted | dd : this.wanted & ~dd;
        const md = 0 !== this.wanted;
        if (md === this.jK) return;
        const Wd = this.deps.cmd();
        null !== Wd ? (0, qd.Pg)(Wd, 0, md ? 1 : 0) ? (this.jK = md, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.jK = !1
      }
    }
    class vW {
      constructor(dd) {
        this.deps = dd, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(dd) {
        var Od;
        return this.complete || this.fill(), null !== (Od = this.entries.get("string" === typeof dd ? dd : String(dd))) && void 0 !== Od ? Od : null
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
            api: Od
          } = this.deps;
          let md = 0;
          const Wd = this.ids = WW(this.ids, dd);
          for (let Fd = 0; Fd < dd; Fd++) {
            const dd = this.pending[Fd],
              Rd = Od.indexById.get(dd);
            void 0 === Rd || gd(Od.kinds[Rd]) ? this.entries.delete(String(dd)) : Wd[md++] = dd
          }
          md > 0 && !this.batch(Wd, md) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(XW, !1)
      }
      fill() {
        const {
          api: dd
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: dd
          } = this.deps, Od = dd.on;
          dd.want(XW, !0), !Od && dd.on && (this.refill = this.midFrame)
        }
        const {
          ids: Od,
          count: md
        } = mW(dd, this.ids);
        this.ids = Od, md > 0 && !this.batch(Od, md) && (this.refill = !0)
      }
      batch(dd, Od) {
        return FW(this.deps.api, dd, Od, ((dd, Od) => {
          null === Od ? this.entries.delete(String(dd)) : this.entries.set(String(dd), Od)
        }))
      }
    }
    var QW = md(5571);

    function tW(dd) {
      if ("message" !== dd.type || dd.tX !== QW.hc.NewClientOptions || dd.payloadKind !== od.mc.Msgpack) return null;
      const Od = (0, zd.b)(dd.payload);
      if (null === Od || "object" !== typeof Od || Array.isArray(Od)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Od
    }
    var oW = md(1300),
      NW = md(38280);

    function qW(dd, Od, md, Wd, Fd, Rd, Kd) {
      var hd, vd, Qd;
      switch (dd) {
        case qd.qe.ToggleMenu: {
          const dd = qd.L[Od];
          Xd.j.lQ("toggleMenu", void 0 === dd ? "inventory" : `inventory|${dd}`);
          break
        }
        case qd.qe.EditBoard:
          Xd.j.lQ("EditBoard", {
            pos: 0 === Od ? null : md
          });
          break;
        case qd.qe.EditCodeBlock:
        case qd.qe.ViewCodeBlock:
          Xd.j.lQ("EditCodeBlock", {
            pos: md,
            canChangePos: dd === qd.qe.EditCodeBlock
          });
          break;
        case qd.qe.EditCustomLobbyBlock:
          Xd.j.lQ("EditCustomLobbyBlock", {
            pos: md
          });
          break;
        case qd.qe.OpenIronChest:
          Xd.j.lQ("OpenIronChest", {
            pos: md
          });
          break;
        case qd.qe.EditNameTag:
          Xd.j.lQ("EditNameTag", null !== (hd = null === (vd = Fd.jK()) || void 0 === vd || null === (Qd = vd.attributes.customAttributes) || void 0 === Qd ? void 0 : Qd.text) && void 0 !== hd ? hd : "");
          break;
        case qd.qe.EditBook: {
          var td, od, Hd;
          const dd = null === (td = Fd.jK()) || void 0 === td ? void 0 : td.attributes;
          Xd.j.lQ("EditBook", {
            pages: (0, oW.O)(null === dd || void 0 === dd || null === (od = dd.customAttributes) || void 0 === od ? void 0 : od.pages),
            title: null !== (Hd = null === dd || void 0 === dd ? void 0 : dd.customDisplayName) && void 0 !== Hd ? Hd : "Title",
            isPublished: !(null === dd || void 0 === dd || !dd.customDescription)
          });
          break
        }
        case qd.qe.CantChangeBlock:
          ! function(dd, Od) {
            const md = Od.getClientOption("cantChangeError"),
              Wd = Od.getClientOption(dd ? "cantBuildError" : "cantBreakError"),
              Fd = dd ? md : Wd;
            (Od.getClientOption("canChange") || Fd || "You cannot modify this block" !== md) && Xd.j.lQ("showBottomMessage", {
              message: Wd || md,
              type: "Error"
            })
          }(1 === Od, Rd);
          break;
        case qd.qe.MiddleBarStart:
          Xd.j.lQ("middleScreenBarInitiate", {
            duration: Wd,
            qR: 1 === md[0],
            horizBarRemOffset: Od
          });
          break;
        case qd.qe.MiddleBarStop:
          Xd.j.lQ("middleScreenBarRemove");
          break;
        case qd.qe.Hitmarker:
          Xd.j.lQ("localGunHitmarker", {
            rO: 1 === Od
          });
          break;
        case qd.qe.ShotsLeft:
          Xd.j.lQ("localPlayerNewShotsLeft", Wd);
          break;
        case qd.qe.AimingOverlay:
          Xd.j.lQ("aimingOverlay", 3 === (3 & Od) ? "sniper" : "none");
          break;
        case qd.qe.BottomMessage:
          Xd.j.lQ("showBottomMessage", JSON.parse(Kd()));
          break;
        case qd.qe.Crosshair:
          Fd.inaccuracy = (0, cd.c)(Wd), (0, NW.d)().crosshairAccuracy(Fd.inaccuracy);
          break;
        case qd.qe.ChargeStage:
          break;
        case qd.qe.EmoteWheelClose:
          Xd.j.lQ("requestEmoteWheelClose");
          break;
        case qd.qe.BlockMined:
          Xd.j.lQ("localBlockMined");
          break;
        default:
          throw new Nd.d(`UiEvent of no kind: what ${dd}`)
      }
    }
    var HW = md(39557),
      yW = md(35541),
      bW = md(2121),
      TW = md(38359),
      pW = md(35549),
      YW = md(5558);
    const gW = 10,
      wW = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      aW = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      EW = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function JW(dd, Od) {
      let md, Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Rd = () => (md = (0, bW.l)(md, Od()), md);
      return {
        current: Rd,
        watch(Od) {
          const md = () => {
              Od(Rd())
            },
            Xd = [dd.watch(md)];
          return null !== Wd && Xd.push((0, bW.o)((dd => {
            dd.some(Wd) && md()
          }))), null !== Fd && Xd.push(Fd(md)), () => {
            for (const dd of Xd) dd()
          }
        }
      }
    }

    function UW(dd) {
      return dd && {
        name: dd.name,
        amount: dd.amount,
        attributes: dd.attributes
      }
    }
    const xW = new WeakMap;

    function BW(dd) {
      let Od = xW.get(dd);
      return void 0 === Od && (Od = (0, pW.creativeItemIds)().map((Od => ({
        name: dd.nameOfId(Od),
        amount: dd.isStackableId(Od) ? 1 : null,
        attributes: (0, HW.c)("Gun" === (0, pW.itemTypeOf)(Od) ? {
          type: "Gun",
          clipSize: (0, pW.clipSizeOf)(Od)
        } : void 0)
      }))), xW.set(dd, Od)), Od
    }

    function SW(dd, Od, md, Wd) {
      const Fd = Od => (dd.flush(Wd), Od),
        Rd = md => {
          var Wd, Fd, Rd, Xd, Kd, hd, vd;
          const Qd = dd.slot(md);
          if (!Qd) return null;
          const {
            rootName: td,
            metaStr: od
          } = Od.getMetaInfo(Qd.name);
          return {
            name: Qd.name,
            amount: Qd.amount,
            attributes: Qd.attributes,
            instance: dd.instance(md),
            displayName: null !== (Wd = Qd.attributes.customDisplayName) && void 0 !== Wd ? Wd : Od.getDisplayName(td),
            requiresAmmo: "RequiresAmmo" === od,
            clipSize: null !== (Fd = null !== (Rd = null === (Xd = Qd.attributes.customAttributes) || void 0 === Xd || null === (Kd = Xd.gunStats) || void 0 === Kd ? void 0 : Kd.clipSize) && void 0 !== Rd ? Rd : null === (hd = Od.getGunStats(td)) || void 0 === hd ? void 0 : hd.clipSize) && void 0 !== Fd ? Fd : null === (vd = Qd.typeObj) || void 0 === vd ? void 0 : vd.clipSize
          }
        },
        Kd = function(dd, Od) {
          let md = null,
            Wd = {
              focus: null,
              recipes: [],
              detail: null
            },
            Fd = -1;
          const Rd = new Set;
          return {
            read() {
              var Rd, Xd;
              if (null === md) return null !== Wd.focus && (Wd = {
                ...Wd,
                focus: null
              }), Wd;
              if (Wd.focus === md && Fd === dd.changes) return Wd;
              if (Fd = dd.changes, 0 === dd.length) return Wd = {
                focus: md,
                recipes: [],
                detail: null
              }, Wd;
              let Kd = 0;
              if (null !== md.recipe) try {
                Kd = Od.getItemId(md.recipe.name)
              } catch {}
              const hd = dd.craftingView(md.station, Kd, null !== (Rd = null === (Xd = md.recipe) || void 0 === Xd ? void 0 : Xd.NK) && void 0 !== Rd ? Rd : 0);
              return Wd = null === hd ? {
                focus: md,
                recipes: [],
                detail: null
              } : function(dd, Od, md) {
                let Wd = qd.lb.BYTES;
                const Fd = [];
                for (let Qd = qd.lb.recipes(dd, 0); Qd > 0; Qd--) {
                  const md = qd.eb.flags(dd, Wd),
                    Rd = {
                      name: Od.nameOfId(qd.eb.item(dd, Wd)),
                      NK: qd.eb.recipe(dd, Wd),
                      requires: [],
                      produces: qd.eb.produces(dd, Wd),
                      haveIngredients: 0 !== (md & qd.ab.HaveIngredients),
                      listed: 0 !== (md & qd.ab.Listed)
                    };
                  let Xd = qd.eb.requires(dd, Wd);
                  for (Wd += qd.eb.BYTES; Xd > 0; Xd--) {
                    const md = qd.hb.items(dd, Wd);
                    Rd.requires.push({
                      items: VW(dd, Wd + qd.hb.BYTES, md, Od),
                      amt: qd.hb.amount(dd, Wd)
                    }), Wd += qd.hb.BYTES + 2 * md
                  }
                  Fd.push(Rd)
                }
                const Rd = qd.lb.flags(dd, 0);
                if (null === md.recipe || 0 === (Rd & qd.kb.Detail)) return {
                  focus: md,
                  recipes: Fd,
                  detail: null
                };
                const Xd = {},
                  Kd = {};
                for (let Qd = qd.lb.ingredients(dd, 0); Qd > 0; Qd--) {
                  const md = qd._.item(dd, Wd),
                    Fd = qd._.from(dd, Wd),
                    Rd = qd._.amount(dd, Wd);
                  Wd += qd._.BYTES;
                  const hd = Fd === qd.I ? null : VW(dd, Wd, Fd, Od);
                  if (null !== hd && (Wd += 2 * Fd), 0 === md) continue;
                  const vd = Od.nameOfId(md);
                  Xd[vd] = Rd, null !== hd && (Kd[vd] = hd)
                }
                const {
                  name: hd,
                  NK: vd
                } = md.recipe;
                return {
                  focus: md,
                  recipes: Fd,
                  detail: {
                    name: hd,
                    NK: vd,
                    craftAllTimes: qd.lb.craftAllTimes(dd, 0),
                    roomForOne: 0 !== (Rd & qd.kb.RoomForOne),
                    resultStackable: Boolean(Od.getItemStat(hd, "stackable")),
                    amounts: Xd,
                    ingredientsCraftedFrom: Kd
                  }
                }
              }(hd, Od, md), Wd
            },
            setFocus(dd) {
              md = dd;
              for (const Od of [...Rd]) Od()
            },
            watchFocus: dd => (Rd.add(dd), () => {
              Rd.delete(dd)
            })
          }
        }(dd, Od);
      return {
        states: {
          inventory: JW(dd, (() => {
            const md = dd.length;
            if (0 === md) return wW;
            const Wd = [];
            for (let Od = 0; Od < qd.ud; Od++) Wd.push(UW(dd.slot(Od)));
            const Fd = dd.slotIcon,
              Rd = Wd[dd.selectedSlot];
            0 !== Fd && Rd && (Wd[dd.selectedSlot] = {
              ...Rd,
              icon: Od.nameOfId(Fd)
            });
            const Xd = !0 === Od.getClientOption("creative");
            let Kd = [],
              hd = null;
            if (md > qd.ud) {
              for (let Od = qd.ud; Od < md; Od++) Kd.push(UW(dd.slot(Od)));
              hd = {
                type: null,
                pos: [...dd.cF],
                numSlots: md - qd.ud,
                ironChest: null
              }
            } else Xd && (Kd = BW(Od));
            return {
              player: Wd,
              chestOrCreative: Kd,
              chest: hd,
              creative: Xd,
              selectedSlot: dd.selectedSlot,
              freeSlots: dd.freeSlots()
            }
          }), (0, bW.h)("creative")),
          hotbar: JW(dd, (() => {
            if (0 === dd.length) return aW;
            const Od = [];
            for (let dd = 0; dd < gW; dd++) Od.push(Rd(dd));
            return {
              items: Od,
              ammo: dd.amountOf("Ammo"),
              selectedSlot: dd.selectedSlot
            }
          }), (0, bW.f)("DisplayName", "GunStats")),
          crafting: JW(dd, Kd.read, null, Kd.watchFocus),
          heldItemAim: JW(dd, (() => {
            var Od;
            if (!md()) return EW;
            const Wd = null === (Od = dd.jK()) || void 0 === Od ? void 0 : Od.typeObj,
              Fd = "Gun" === (null === Wd || void 0 === Wd ? void 0 : Wd.type);
            return {
              gun: Fd,
              aimable: Fd || !0 === (null === Wd || void 0 === Wd ? void 0 : Wd.showsAimingUi),
              chargeName: "Chargeable" === (null === Wd || void 0 === Wd ? void 0 : Wd.type) ? Wd.name : null
            }
          }), null, (dd => function(dd, Od) {
            let md = dd();
            return (0, YW.A)((() => {
              const Wd = dd();
              Wd !== md && (md = Wd, Od(Wd))
            }))
          }(md, dd)))
        },
        events: {
          hotbarSlotRequested: (0, bW.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, bW.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, bW.c)("numkeyPressed"),
          inventoryDropRequested: (0, bW.c)("DropInvenItem"),
          chestToggled: (0, bW.c)("chestToggleFromServer"),
          chestRefreshed: (0, bW.c)("chestRefreshedFromServer", uW),
          inventorySynced: (0, bW.c)("syncedInvenFromServer", uW),
          enchantingTableOpened: (0, bW.c)("enchantingTable", (dd => {
            let {
              position: md,
              XK: Wd
            } = dd;
            return {
              position: [...md],
              blockName: Od.getMetaInfo(Wd).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Od) {
            dd.selectSlot(Od), dd.flush(Wd)
          },
          removeInventoryItem(Od) {
            let {
              slot: md,
              amount: Wd,
              drop: Rd
            } = Od;
            return Fd(dd.remove(md, Wd, Rd))
          },
          swapInventorySlots(Od) {
            let {
              a: md,
              b: Wd
            } = Od;
            return Fd(dd.swap(md, Wd))
          },
          moveInventoryItem(Od) {
            let {
              from: md,
              to: Wd,
              amount: Rd
            } = Od;
            return Fd(dd.move(md, Wd, Rd))
          },
          quickMoveInventoryItem(Od) {
            let {
              slot: md,
              start: Wd,
              end: Rd,
              amount: Xd
            } = Od;
            return Fd(dd.quickMove(md, Wd, Rd, Xd))
          },
          closeChest() {
            dd.closeChest(), dd.flush(Wd), Xd.j.lQ("chestClosedByPlayer")
          },
          focusCrafting(dd) {
            Kd.setFocus(dd)
          },
          craftRecipe(Od) {
            let {
              name: md,
              NK: Wd,
              times: Rd
            } = Od;
            return Fd(dd.craft(md, Wd, Rd))
          },
          salvageItem(Od) {
            let {
              slot: md,
              name: Wd,
              amount: Rd
            } = Od;
            return Fd(dd.salvage(md, Wd, Rd))
          },
          enchantItem(Od) {
            let {
              slot: md,
              level: Wd,
              tablePos: Fd
            } = Od;
            dd.enchant(md, Wd, Fd)
          }
        },
        queries: {
          enchantingOffer(md) {
            let {
              slot: Wd,
              blockName: Fd
            } = md;
            return function(dd, Od, md, Wd) {
              const Fd = dd.slot(md);
              if (!Fd || !Od.getClientOption("canCraft") || !(0, yW.m)(Wd) || (0, yW.l)(Fd.attributes)) return sW;
              const Rd = (0, pW.enchantmentPerksOf)(Od.getItemId(Fd.name));
              if (0 === Rd.length) return sW;
              const Xd = [];
              for (let Kd = 0; Kd < TW.f; Kd++) {
                const {
                  commonProb: dd,
                  uncommonProb: Od,
                  rareProb: md,
                  epicProb: Fd,
                  legendaryProb: Rd,
                  level: hd
                } = (0, yW.c)(Wd, Kd);
                Xd.push({
                  level: hd,
                  odds: [dd, Od, md, Fd, Rd].map((dd => 100 * dd))
                })
              }
              return {
                perks: [...Rd],
                options: Xd
              }
            }(dd, Od, Wd, Fd)
          }
        }
      }
    }
    const sW = Object.freeze({
      perks: [],
      options: []
    });

    function uW() {
      return null
    }

    function VW(dd, Od, md, Wd) {
      const Fd = [];
      for (let Rd = 0; Rd < md; Rd++) {
        const md = dd.getUint16(Od + 2 * Rd, !0);
        0 !== md && Fd.push(Wd.nameOfId(md))
      }
      return Fd
    }
    class iW {
      constructor(dd) {
        this.api = dd, this.positions = new Map, this.targeted = {
          K9: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Uy: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(dd) {
        let Od = this.positions.get(dd);
        return Od || (this.api.checkValid(dd) || this.api.isLocal(dd) ? (Od = [NaN, NaN, NaN], this.api.readPosition(dd, Od), this.positions.set(dd, Od), Od) : null)
      }
      nOd() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Od, md] of this.positions) this.api.readPosition(Od, md) || this.api.checkValid(Od) || this.api.isLocal(Od) || this.positions.delete(Od);
        const dd = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (qd.q.playerFlags(dd, 0) & qd.Md.Breaking) && qd.q.breakingProgress(dd, 0) >= 0, this.isBreaking)
          for (let Od = 0; Od < 3; Od++) this.breaking[Od] = qd.q.breakingPos(dd, 0, Od)
      }
      refreshTarget() {
        const dd = this.api.apiView,
          Od = qd.q.targetBlockId(dd, 0);
        if (this.hasTarget = Od !== qd.dd, this.hasTarget) {
          const md = this.targeted;
          md.K9 = Od;
          for (let Od = 0; Od < 3; Od++) md.position[Od] = qd.q.targetBlock(dd, 0, Od), md.normal[Od] = qd.q.targetNormal(dd, 0, Od), md.Uy[Od] = qd.q.targetAdjacent(dd, 0, Od)
        }
      }
      despawned(dd) {
        const Od = this.positions.get(dd);
        Od && !this.api.isLocal(dd) && (Od.fill(NaN), this.positions.delete(dd))
      }
    }
    var AW = md(42593),
      rW = md(42573),
      GW = md(37915),
      nW = md(38006);
    const LW = 1,
      PW = 2;
    class zW {
      constructor() {
        this.game = new nW.g, this.client = new nW.g, this.jK = 0, this.movesFly = null
      }
      setGame(dd) {
        if (null === dd || "object" !== typeof dd) return !1;
        const {
          key: Od,
          value: md
        } = dd;
        return "string" === typeof Od && (this.game.setBooleanType(Od, Boolean(md)), !0)
      }
      setClient(dd, Od) {
        this.client.setBooleanType(dd, Od)
      }
      clearGame() {
        this.game = new nW.g, this.movesFly = null
      }
      setMovesFly(dd) {
        this.movesFly = dd
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? LW : 0) | (this.client._getTotalBooleanVal() ? PW : 0)
      }
      write(dd) {
        const Od = this.perms(),
          {
            movesFly: md
          } = this;
        if (Od === this.jK && null === md) return !0;
        let Wd = qd.cc.Keep;
        return null !== md && (Wd = md ? qd.cc.On : qd.cc.Off), !(!dd || !(0, qd.Oe)(dd, 0, Wd, Od, md ? 1 : 0)) && (this.jK = Od, this.movesFly = null, !0)
      }
    }
    class cW {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = dd, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Kd.b,
          get y() {
            return Od()
          }
        }
      }
      get hasView() {
        const dd = this.api.apiView,
          Od = qd.q.viewProj;
        return 0 !== Od(dd, 0, 3) || 0 !== Od(dd, 0, 7) || 0 !== Od(dd, 0, 11) || 0 !== Od(dd, 0, 15)
      }
      get cameraPosition() {
        const dd = this.api.apiView,
          {
            eye: Od
          } = this;
        for (let md = 0; md < 3; md++) Od[md] = qd.q.eye(dd, 0, md);
        return Od
      }
      get cameraDirection() {
        const dd = this.api.apiView,
          Od = qd.q.viewProj,
          md = Od(dd, 0, 3),
          Wd = Od(dd, 0, 7),
          Fd = Od(dd, 0, 11),
          Rd = Math.hypot(md, Wd, Fd),
          {
            forward: Xd
          } = this;
        return Rd > 0 && (Xd[0] = md / Rd, Xd[1] = Wd / Rd, Xd[2] = Fd / Rd), Xd
      }
      get cameraHeading() {
        return qd.q.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return qd.q.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return qd.q.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return qd.q.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(dd) {
        this.clip(dd);
        const {
          clipX: Od,
          clipY: md,
          clipW: Wd
        } = this;
        if (Wd > 0) {
          const dd = Od / Wd * 50,
            Fd = -md / Wd * 50;
          return Math.abs(dd) <= this.screenBandPct.x && Math.abs(Fd) <= this.screenBandPct.y ? {
            x: 50 + dd,
            y: 50 + Fd
          } : this.clampToBand(dd, Fd)
        }
        const Fd = this.cameraPosition,
          Rd = Math.hypot(dd[0] - Fd[0], dd[1] - Fd[1], dd[2] - Fd[2]),
          Xd = this.api.apiView,
          Kd = qd.q.viewProj,
          hd = Rd > 0 ? Od / Rd : 0,
          vd = Rd > 0 ? -md / Rd : 0,
          Qd = Math.hypot(Kd(Xd, 0, 1), Kd(Xd, 0, 5), Kd(Xd, 0, 9)),
          td = hd / Math.hypot(Kd(Xd, 0, 0), Kd(Xd, 0, 4), Kd(Xd, 0, 8)),
          od = vd / Qd,
          Nd = !(Math.abs(td) >= .001 || Math.abs(od) >= .001);
        return this.clampToBand(hd, Nd ? -(Qd || 1) : vd)
      }
      projectDirectionToScreenPos(dd) {
        if (!this.hasView) return;
        const Od = this.cameraPosition,
          md = this.along;
        for (let Wd = 0; Wd < 3; Wd++) md[Wd] = Od[Wd] + 10 * dd[Wd];
        return this.projectWorldPosToScreenPos(md)
      }
      projectWorldPosToViewport(dd) {
        this.clip(dd);
        const {
          clipX: Od,
          clipY: md,
          clipW: Wd
        } = this;
        return Wd > 0 ? {
          x: 50 + Od / Wd * 50,
          y: 50 - md / Wd * 50
        } : null
      }
      clip(dd) {
        const Od = this.api.apiView,
          md = dd[0] - qd.q.origin(Od, 0, 0),
          Wd = dd[1] - qd.q.origin(Od, 0, 1),
          Fd = dd[2] - qd.q.origin(Od, 0, 2),
          Rd = qd.q.viewProj;
        this.clipX = Rd(Od, 0, 0) * md + Rd(Od, 0, 4) * Wd + Rd(Od, 0, 8) * Fd + Rd(Od, 0, 12), this.clipY = Rd(Od, 0, 1) * md + Rd(Od, 0, 5) * Wd + Rd(Od, 0, 9) * Fd + Rd(Od, 0, 13), this.clipW = Rd(Od, 0, 3) * md + Rd(Od, 0, 7) * Wd + Rd(Od, 0, 11) * Fd + Rd(Od, 0, 15)
      }
      clampToBand(dd, Od) {
        return (0, Kd.f)(dd, Od, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var jW = md(5588);
    const DW = new TextEncoder,
      eW = new Uint8Array(qd.P * qd.O);
    class IW {
      constructor() {
        this.buttons = [], this.jK = !0
      }
      set(dd) {
        this.buttons = dd, this.jK = !1
      }
      attached() {
        this.jK = 0 === this.buttons.length
      }
      write(dd) {
        if (this.jK) return;
        const Od = new Uint8Array(qd.P),
          md = new Uint8Array(qd.P);
        let Wd = 0,
          Fd = 0;
        for (const {
            id: Rd,
            keycode: Xd
          }
          of this.buttons) {
          if (Wd === qd.P) break;
          const {
            read: dd,
            written: Kd
          } = DW.encodeInto(Rd, eW.subarray(Fd, Fd + qd.O));
          if (dd < Rd.length) continue;
          const hd = jW.m[Xd];
          Od[Wd] = "number" === typeof hd ? hd : 0, md[Wd] = Kd, Wd++, Fd += Kd
        }
        this.jK = (0, qd.ye)(dd, 0, Wd, Od, md, eW.subarray(0, Fd))
      }
    }

    function lW(dd, Od, md) {
      const Wd = DW.encode(Od);
      return Wd.length <= qd.O && function(dd, Od, md, Wd) {
        return (0, Xm.d)(), (0, qd.Hf)(dd, Od, md, Wd)
      }(dd, 0, md ? 1 : 0, Wd)
    }
    var CW = md(40831);
    const ZW = new TextDecoder,
      kW = new TextEncoder,
      fW = new Uint8Array(0),
      MW = [0, 0, 0],
      dF = {
        off: qd.Pd.Off,
        key: qd.Pd.Key,
        touch: qd.Pd.Touch
      };
    class OF {
      constructor(dd) {
        var Od;
        this.options = dd, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new IW, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = xd.q.DEFAULT, this.pendingZoom = null, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new zW, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Wt = dd => {
          if ((0, Nd.j)(dd)) throw dd;
          this.onError(dd)
        }, this.api = dd.api, this.tables = dd.tables, this.onError = null !== (Od = dd.onError) && void 0 !== Od ? Od : dd => {
          console.error("Error in client game callback", dd)
        }, this.renderFrame = new cW(this.api, dd.screenBandY), this.live = new iW(this.api), this.chunks = new oO(this.api.memory, (() => this.api.apiView)), this.items = new Am({
          api: this.api,
          tables: dd.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: dd.beforeOp
        });
        const md = () => this.stopped() ? null : this.cmd,
          Wd = () => this.sessionLive;
        this.entityInfoWatch = new hW({
          cmd: md,
          onError: this.onError
        }), this.entityInfo = new vW({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Wd
        }), this.particles = new fm({
          cmd: md,
          isSessionLive: Wd,
          onError: this.onError
        }), this.clientApi = new Jm({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: dd.tables,
          cmd: md,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Wd,
          beforeWrite: () => {
            var Od;
            if (this.stopped()) return !1;
            const md = this.generation;
            return !1 !== (null === (Od = dd.beforeWrite) || void 0 === Od ? void 0 : Od.call(dd)) && md === this.generation
          },
          playerDbId: () => {
            const dd = this.session;
            if (null === dd) throw new Error("No game session has started, so the local player has no DB id");
            return dd.playerDbId
          },
          playSound: dd.playSound,
          preloadSounds: dd.preloadSounds,
          setLocalOptions: dd.setLocalOptions,
          hasPackModel: dd.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new Zd({
          api: this.api,
          reportError: Od => {
            var md;
            this.Wt(Od), null === (md = dd.reportCameraFault) || void 0 === md || md.call(dd, Od)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: dd.cameraScreen,
          showFacing: dd.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= SW(this.items, this.tables, (() => this.localPlayerAlive()), this.Wt), this.itemSources
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
        const Od = this.sessionLive ? this.sendCmd() : null;
        return null !== Od && (md = Od, Wd = 0, Fd = dd[0], Rd = dd[1], Xd = dd[2], (0, Xm.d)(), (0, qd.Ee)(md, Wd, Fd, Rd, Xd));
        var md, Wd, Fd, Rd, Xd
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(dd) {
        const Od = this.liveCmd();
        return null === Od ? (this.pendingZoom = dd, !1) : (this.pendingZoom = null, (0, qd.Ig)(Od, 0, dd, 1))
      }
      qB(dd) {
        const Od = this.stopped() ? null : this.cmd;
        return null !== Od && (0, qd.Bg)(Od, 0, dd ? 1 : 0)
      }
      respawn() {
        const dd = this.sessionLive ? this.sendCmd() : null;
        return null !== dd && (Od = dd, md = 0, (0, Xm.d)(), (0, qd.Wf)(Od, md));
        var Od, md
      }
      bindCustomButtonKeys(dd) {
        this.customButtons.set(dd)
      }
      pressCustomButton(dd, Od) {
        const md = this.sessionLive ? this.sendCmd() : null;
        return null !== md && lW(md, dd, Od)
      }
      padMove(dd, Od, md, Wd, Fd, Rd) {
        const Xd = this.liveCmd();
        return null !== Xd && (0, qd.mf)(Xd, 0, dd, Od, md, Wd, Fd, Rd)
      }
      thirdPersonFor(dd) {
        const Od = this.liveCmd();
        return null !== Od && (0, qd.Og)(Od, 0, null !== dd && void 0 !== dd ? dd : 1 / 0)
      }
      send(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Wd && Km(Wd, md ? od.pd : 0, dd, (0, zd.e)(Od))
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
        const Od = () => dd.isStopped;
        this.stopped = Od, this.cmd = dd.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const md = this.api.apiView;
        this.overflowGen = qd.q.eventOverflowGen(md, 0), this.resyncOwed = 0 !== qd.q.eventOverflowMask(md, 0), dd.setGameHost(this), dd.setEventWalker((dd => {
          this.api.walk(dd, this, Od)
        }))
      }
      watchPromptPick(dd) {
        this.promptWatch = dd, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : mF(qd.q.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? qd.xc.None : qd.q.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : qd.q.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === dd || dd >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, dd, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(dd) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(dd)
      }
      netEvent(dd) {
        "connection" === dd.type ? dd.phase === od.C.Activated && dd.conn !== this.activeConn && dd.conn > this.closedThrough ? (this.endSession(), this.activeConn = dd.conn, this.endGameGrants(), this.dropGameCamera()) : dd.phase !== od.C.Left && dd.phase !== od.C.Closed || dd.conn !== this.activeConn ? dd.phase === od.C.Resumed && 0 !== this.activeConn && dd.conn > this.closedThrough && (this.activeConn = dd.conn) : this.closeGame() : dd.conn === this.activeConn && 0 !== dd.conn && (dd.tX === rW.u ? this.gunHit(dd.payload) : dd.tX === QW.hc.EditItemCraftingRecipes || dd.tX === rW.U ? this.items.touch() : (this.serverOptions(dd), this.gameMessage(dd)));
        const Od = this.options.onNetEvent;
        Od && this.guard((() => {
          Od(dd)
        }))
      }
      serverOptions(dd) {
        const Od = this.options.serverOptions,
          md = Od ? this.decoded(tW, dd) : null;
        if (Od && md) {
          this.guard((() => {
            Od.applyNewClientOptions(md)
          }));
          const dd = md.holdThirdPerson;
          void 0 !== dd && (this.thirdPersonWanted = dd, this.writeOwedThirdPerson())
        }
      }
      gameMessage(dd) {
        let Od = null;
        try {
          Od = function(dd) {
            if ("message" !== dd.type || dd.tX !== QW.hc.GameCodeMessage || dd.payloadKind !== od.mc.Msgpack) return null;
            const Od = (0, zd.b)(dd.payload);
            if (null === Od || "object" !== typeof Od || "string" !== typeof Od.messageType) throw new Error("GameCodeMessage without a messageType");
            return Od
          }(dd)
        } catch (md) {
          this.sessionLive && this.onError(md)
        }
        if (Od) {
          const {
            messageType: dd,
            data: md
          } = Od;
          if ((0, ud.f)(dd)) return void this.guard((() => {
            (0, ud.d)(dd, md)
          }));
          "freeCamPerms" === dd && this.freeCam.setGame(md) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Od => {
            Od.onReceivedMessageFromServer(dd, md)
          }))
        }
      }
      decoded(dd, Od) {
        try {
          return dd(Od)
        } catch (md) {
          return this.onError(md), null
        }
      }
      setClientFreeCameraGrant(dd, Od) {
        this.freeCam.setClient(dd, Od), this.writeFreeCam()
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
      writeOwedThirdPerson() {
        const dd = this.thirdPersonWanted;
        dd !== this.thirdPersonHeld && this.thirdPersonFor(dd ? void 0 : 0) && (this.thirdPersonHeld = dd)
      }
      writeOwedHighlight() {
        const dd = this.liveCmd();
        if (null === dd || !this.highlightOwed) return;
        const Od = this.highlight;
        this.highlightOwed = null === Od ? !(0, qd.Xe)(dd, 0, MW, MW, 0) : !(0, qd.Xe)(dd, 0, Od.pos, Od.normal, 1)
      }
      localPlayerBound(dd) {
        var Od, md;
        if (0 === this.activeConn || this.sessionLive && dd === this.boundId) return;
        const Wd = this.sessionLive;
        let Fd, Rd, Xd, Kd;
        this.endSession(), Wd && this.restartGameCamera();
        try {
          var hd;
          this.session = null;
          const dd = this.options.sessionInfo(this.activeConn);
          if (this.session = dd, !dd) return;
          Fd = dd.gameNameWithVariation, Rd = null !== (hd = (0, Bd.Bb)(Fd)) && void 0 !== hd ? hd : void 0, Xd = (0, Sd.w)(dd.lobbyName), Kd = (0, Sd.K)(dd.lobbyName)
        } catch (Td) {
          return void this.onError(Td)
        }
        const vd = {
          localPlayerId: String(dd)
        };
        let Qd = {},
          td = [];
        try {
          var od, Nd;
          Qd = null !== (od = null === (Nd = this.options.gameFactory((0, Bd.Gb)(Fd))) || void 0 === Nd ? void 0 : Nd(Kd, Xd, Rd, vd)) && void 0 !== od ? od : {}
        } catch (Td) {
          this.Wt(Td)
        }
        try {
          var qd, Hd;
          td = (0, sd.e)(null === (qd = (Hd = this.options).defaultPlugins) || void 0 === qd ? void 0 : qd.call(Hd, Kd, Xd, Rd, vd), Qd.plugins)
        } catch (Td) {
          this.Wt(Td)
        }
        const yd = [Qd, ...td];
        this.owners = yd, this.tickers = yd.filter((dd => void 0 !== dd.Et)), this.renderers = yd.filter((dd => void 0 !== dd.onAfterRender)), this.receivers = yd.filter((dd => void 0 !== dd.onReceivedMessageFromServer)), this.writeAltVeto(yd), this.writeHooks(yd), this.writePublicLobby(Kd), this.writeLocalDbId(null !== (Od = null === (md = this.session) || void 0 === md ? void 0 : md.playerDbId) && void 0 !== Od ? Od : null), this.boundId = dd, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(yd, (dd => {
          var Od;
          null === (Od = dd.onCreate) || void 0 === Od || Od.call(dd, this.clientApi)
        }));
        const bd = this.generation;
        setTimeout((() => {
          bd === this.generation && !0 === this.tables.getClientOption("creative") && BW(this.tables)
        }), 0)
      }
      chunkSlot(dd, Od, md, Wd, Fd, Rd) {
        this.chunks.apply(dd, Od, md, Wd, Fd, Rd)
      }
      entityAdded(dd) {
        var Od;
        this.entityInfo.stale(dd), null === (Od = this.options.replayEntities) || void 0 === Od || Od.entityAdded(dd)
      }
      entityInfoChanged(dd) {
        var Od;
        this.entityInfo.stale(dd), null === (Od = this.options.replayEntities) || void 0 === Od || Od.entityInfoChanged(dd)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const dd = performance.now();
          this.round(this.tickers, WF), (0, YW.e)(performance.now() - dd)
        }
      }
      afterWalk(dd) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight(), this.writeOwedThirdPerson();
        const Od = this.options.replayEntities;
        Od && this.guard((() => {
          this.entityInfoWatch.want(KW, Od.wantsWatch), Od.flush(this.entityInfoWatch.on)
        }));
        const md = this.api.apiView,
          Wd = qd.q.frameMs(md, 0);
        GW.o.frame(Wd, qd.q.heading(md, 0), qd.q.pitch(md, 0), GW.l[dd]);
        const Fd = (0, YW.l)(dd, Wd);
        if (null !== Fd) {
          const dd = this.renderFrame;
          this.guard((() => {
            (0, NW.d)().turnDamageIndicators(dd.cameraHeading), (0, NW.d)().turnSoundCues(dd.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Fd)
          })), this.round(this.renderers, (Od => {
            Od.onAfterRender(Fd, dd)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Fd)
        } catch (Xd) {
          this.Wt(Xd)
        }
        this.showZoom(), this.items.flush(this.Wt), this.writePromptWatch(), this.writeCustomButtons();
        const Rd = this.ticks;
        this.ticks = 0, (0, YW.i)(Rd, dd, Fd, this.Wt)
      }
      entityRemoved(dd) {
        this.live.despawned(dd), this.entityInfo.removed(dd)
      }
      ackEventOverflow() {
        const dd = this.api.apiView,
          Od = qd.q.eventOverflowGen(dd, 0),
          md = Od - this.overflowGen >>> 0;
        if (0 === md && !this.resyncOwed) return;
        this.overflowGen = Od;
        const Wd = qd.q.eventOverflowMask(dd, 0),
          Fd = this.cmd;
        0 === Wd || null === Fd || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, qd.Le)(Fd, 0, Wd);
        const Rd = this.options.onEventOverflow;
        0 !== md && Rd && this.guard((() => {
          Rd(Wd, md)
        }))
      }
      gameCall(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        if (dd === qd.pc.Director) try {
          return this.scriptedCamera.call(Od, md, Wd, Fd, Rd, Xd)
        } catch (vd) {
          return this.Wt(vd), qd.ob.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return dd === qd.pc.AltVeto ? qd.l.Allow : 0;
        try {
          return this.callGames(dd, Od, md, Wd, Fd, Rd, Xd, Kd)
        } catch (vd) {
          throw (0, Nd.j)(vd) && (this.fault = vd), vd
        }
      }
      takeFault() {
        const dd = this.fault;
        return this.fault = void 0, dd
      }
      callGames(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: hd
        } = this.options, vd = String(this.boundId);
        switch (dd) {
          case qd.pc.AltVeto:
          case qd.pc.AltAction: {
            const Kd = 0 !== Xd,
              [Qd, td, od] = Kd ? [Od, md, Wd] : [void 0, void 0, void 0],
              Nd = Kd ? hd.nameOfId(Fd) : "Air",
              Hd = mF(Rd);
            if (dd === qd.pc.AltAction) return this.first((dd => {
              var Od;
              return null === (Od = dd.onPlayerAltAction) || void 0 === Od ? void 0 : Od.call(dd, vd, Qd, td, od, Nd, Hd)
            })), 0;
            const yd = this.first((dd => {
              var Od;
              return null === (Od = dd.onPlayerAttemptAltAction) || void 0 === Od ? void 0 : Od.call(dd, vd, Qd, td, od, Nd, Hd)
            }));
            return "preventAction" === yd ? qd.l.Prevent : "preventPlacement" === yd ? qd.l.PreventPlacement : qd.l.Allow
          }
          case qd.pc.Click: {
            const dd = Kd,
              Qd = 0 !== (dd & qd.Y.Alt),
              td = 0 !== (dd & qd.Y.HasPos),
              od = td ? hd.nameOfId(Fd) : "Air",
              [Nd, Hd, yd] = td ? [Od, md, Wd] : [null, null, null],
              bd = mF(Rd),
              Td = 0 !== (dd & qd.Y.Up),
              pd = mF(Xd);
            if (0 === (dd & qd.Y.AttackOnly) && this.first((dd => {
                var Od, md;
                return Td ? null === (Od = dd.onPlayerClickUp) || void 0 === Od ? void 0 : Od.call(dd, vd, Qd, Nd, Hd, yd, od, bd) : null === (md = dd.onPlayerClick) || void 0 === md ? void 0 : md.call(dd, vd, Qd, Nd, Hd, yd, od, bd)
              })), !Td && !Qd && null !== pd) {
              const dd = this.clientApi.getPositionView(pd),
                Od = dd ? [dd[0], dd[1], dd[2]] : [0, 0, 0];
              this.first((dd => {
                var md;
                return null === (md = dd.onPlayerAttackEntity) || void 0 === md ? void 0 : md.call(dd, vd, pd, Od)
              }))
            }
            return 0
          }
          case qd.pc.ChangeBlock: {
            const dd = hd.nameOfId(Fd),
              Xd = hd.nameOfId(Rd);
            return this.first((Fd => {
              var Rd;
              return null === (Rd = Fd.onPlayerChangeBlock) || void 0 === Rd ? void 0 : Rd.call(Fd, vd, Od, md, Wd, dd, Xd)
            })), 0
          }
          case qd.pc.DropItem: {
            const dd = hd.nameOfId(Od);
            return this.first((Od => {
              var Fd;
              return null === (Fd = Od.onPlayerDropItem) || void 0 === Fd ? void 0 : Fd.call(Od, vd, dd, md, Wd)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${dd}`)), 0
        }
      }
      changeBlockFail(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = Fd === qd.Uc ? null : ZW.decode(this.api.eventBytes(Rd, Math.min(Fd, Xd)));
        this.failures.push({
          yO: [dd, Od, md],
          bO: Wd,
          pO: Kd
        })
      }
      changeBlockFailEnd() {
        const dd = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Od => {
          var md;
          null === (md = Od.onChangeBlockFail) || void 0 === md || md.call(Od, dd)
        })), this.lQ("blockChangeRefused", null), this.lQ("EditBoard", {
          pos: null
        }), this.lQ("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(dd, Od, md, Wd, Fd, Rd) {
        dd === qd.Bc.ChestOpened ? this.items.chestOpened(md, Wd, Fd) : dd !== qd.Bc.Synced && dd !== qd.Bc.ChestClosed && dd !== qd.Bc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(dd, Od, md, Wd) {
            switch (dd) {
              case qd.Bc.Synced:
                Xd.j.lQ("syncedInvenFromServer");
                break;
              case qd.Bc.ChestOpened:
              case qd.Bc.ChestClosed:
                Xd.j.lQ("chestToggleFromServer", dd === qd.Bc.ChestOpened, !0);
                break;
              case qd.Bc.ChestRefreshed:
                Xd.j.lQ("chestRefreshedFromServer");
                break;
              case qd.Bc.EnchantingTable:
                Xd.j.lQ("enchantingTable", {
                  XK: Wd,
                  position: md
                });
                break;
              case qd.Bc.HotbarRequest:
                Xd.j.lQ("setSelectedInventorySlotI", Od, !0);
                break;
              case qd.Bc.Scrolled:
                Xd.j.lQ("ScrollInventorySlot", Od);
                break;
              case qd.Bc.NumberKey:
                Xd.j.lQ("numkeyPressed", Od + 1);
                break;
              case qd.Bc.DropRequested:
                Xd.j.lQ("DropInvenItem", 0 !== Od);
                break;
              default:
                throw new Nd.d(`InventoryEvent of no kind: what ${dd}`)
            }
          }(dd, Od, [md, Wd, Fd], Rd)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(dd, Od, md, Wd) {
        this.lQ("shotPlayer", {
          playerId: String(dd),
          damage: Od,
          wasCrit: 0 !== Wd,
          distance: md
        })
      }
      localHurt(dd, Od) {
        this.lQ("closeShopOnDamaged", null), this.guard((() => {
          Xd.j.lQ("damagedByOtherPlayer", {
            wF: null,
            direction: Number.isNaN(Od) ? null : Od,
            rF: dd
          })
        }))
      }
      attackHit(dd, Od, md, Wd, Fd) {
        this.guard((() => {
          Xd.j.lQ("yourAttackHit", {
            rO: Wd,
            screenPos: this.renderFrame.projectDirectionToScreenPos([dd, Od, md]),
            hitSelf: Fd
          })
        }))
      }
      physicsType(dd) {
        this.localPhysicsType = dd, this.lQ("PlayerPhysicsTypeUpdate", dd)
      }
      vehicleEffect(dd, Od, md, Wd, Fd) {
        this.guard((() => {
          dd === od.Fd.UPDATE ? (0, Ad.j)(Od, {
            icon: md,
            level: Wd,
            displayName: null,
            durationMs: Fd
          }) : Vd.e.remove(Od)
        }))
      }
      zoomChanged(dd) {
        this.zoom = dd, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.lQ("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.lQ("showBottomMessage", CW.e)
      }
      showZoom() {
        const dd = this.scriptedCamera.holdsView();
        !this.zoomUnshown || dd && this.zoomHeld || (this.zoomUnshown = !1, this.lQ("cameraZoomSet", this.zoom)), this.zoomHeld = dd
      }
      gunHit(dd) {
        this.guard((() => {
          const {
            wF: Od,
            aF: md
          } = (0, AW.b)(rW.u, dd);
          Xd.j.lQ("damagedByOtherPlayer", {
            wF: Od,
            direction: md
          })
        }))
      }
      uiEvent(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        this.guard((() => {
          qW(dd, Od, [md, Wd, Fd], Rd, this.items, this.options.tables, (() => ZW.decode(this.api.eventBytes(Xd, Kd))))
        }))
      }
      writeAltVeto(dd) {
        const Od = this.cmd;
        if (!Od) return;
        let md;
        try {
          md = function(dd, Od) {
            const md = new Set;
            let Wd = !1;
            for (const Fd of dd)
              if (Fd.onPlayerAttemptAltAction) {
                if (Wd = !0, !Fd.altVetoBlocks) return {
                  mode: qd.re.All,
                  roots: []
                };
                for (const dd of Fd.altVetoBlocks) md.add(Od.getMetaInfo(dd).rootId)
              } return Wd ? md.size > qd.Kc ? {
              mode: qd.re.All,
              roots: []
            } : {
              mode: qd.re.Filter,
              roots: [...md]
            } : {
              mode: qd.re.Off,
              roots: []
            }
          }(dd, this.options.tables)
        } catch (Fd) {
          this.onError(Fd), md = {
            mode: qd.re.All,
            roots: []
          }
        }
        if (md.mode === qd.re.Off && !this.vetoSet) return;
        const Wd = new Uint8Array(new Uint32Array(md.roots).buffer);
        (0, qd.fg)(Od, 0, md.mode, md.roots.length, Wd) ? this.vetoSet = md.mode !== qd.re.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(dd) {
        const Od = this.cmd;
        if (!Od) return;
        const md = function(dd) {
          let Od = 0;
          for (const md of dd) md.onPlayerAltAction && (Od |= 1 << qd.pc.AltAction), (md.onPlayerClick || md.onPlayerClickUp || md.onPlayerAttackEntity) && (Od |= 1 << qd.pc.Click), md.onPlayerChangeBlock && (Od |= 1 << qd.pc.ChangeBlock), md.onPlayerDropItem && (Od |= 1 << qd.pc.DropItem);
          return Od
        }(dd);
        (0 !== md || this.hooksSet) && ((0, qd.qg)(Od, 0, md) ? this.hooksSet = 0 !== md : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const dd = this.cmd;
        dd && !this.stopped() && this.customButtons.write(dd)
      }
      writePromptWatch() {
        const dd = this.cmd,
          Od = this.promptWatch;
        Od !== this.promptWatchSent && dd && !this.stopped() && (0, qd.Rg)(dd, 0, dF[Od]) && (this.promptWatchSent = Od)
      }
      writePublicLobby(dd) {
        const Od = this.cmd;
        Od && dd !== this.writtenPublicLobby && ((0, qd.Fg)(Od, 0, dd ? 1 : 0) ? this.writtenPublicLobby = dd : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(dd) {
        const Od = this.cmd;
        Od && ((0, qd.ug)(Od, 0, null === dd ? 0 : 1, null === dd ? fW : kW.encode(dd)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(dd) {
        const Od = this.generation;
        for (const Wd of this.owners) {
          if (Od !== this.generation) break;
          try {
            const Od = dd(Wd);
            if (void 0 !== Od) return Od
          } catch (md) {
            this.Wt(md)
          }
        }
      }
      lQ(dd, Od) {
        this.guard((() => {
          Xd.j.lQ(dd, Od)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (dd) {
          this.Wt(dd)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (dd) {
          this.Wt(dd)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = xd.q.DEFAULT, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1;
        const dd = this.owners;
        let Od;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Wd) {
          Od = Wd
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Wd) {
          Od ??= Wd
        }
        this.round(dd, FF, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Wd) {
          Od ??= Wd
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Wd) {
          Od ??= Wd
        }
        const md = this.options.onSessionEnd;
        if (md) try {
          md()
        } catch (Wd) {
          this.onError(Wd)
        }
        void 0 !== Od && this.Wt(Od)
      }
      round(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = this.generation;
        for (const Rd of dd) {
          if (Wd !== this.generation) break;
          try {
            Od(Rd)
          } catch (Fd) {
            md ? this.onError(Fd) : this.Wt(Fd)
          }
        }
      }
      guard(dd) {
        try {
          dd()
        } catch (Od) {
          this.Wt(Od)
        }
      }
    }

    function mF(dd) {
      return dd === qd.Xc ? null : String(dd)
    }

    function WF(dd) {
      dd.Et(od.wd)
    }

    function FF(dd) {
      var Od;
      null === (Od = dd.onClose) || void 0 === Od || Od.call(dd)
    }

    function RF(dd, Od) {
      dd.watch((() => {
        const md = function(dd) {
          const Od = [],
            md = Math.min(gW, dd.length);
          for (let Fd = 0; Fd < md; Fd++) {
            var Wd;
            const md = null === (Wd = dd.slot(Fd)) || void 0 === Wd ? void 0 : Wd.typeObj,
              Rd = md ? (0, pW.gunTypeOf)(md.id) : void 0;
            void 0 !== Rd && Od.push(JO[Rd])
          }
          return Od
        }(dd);
        md.length > 0 && (Od.preload(md.flatMap((dd => LO(dd)))), Od.preload(LO(UO)))
      }))
    }
    var XF = md(37955),
      KF = md(5641),
      hF = md(37942),
      vF = md(37989);

    function QF(dd) {
      const Od = (0, XF.countDecodesAs)(new KF.Howl({
          src: [...(0, hF.t)(dd).src],
          pool: 15,
          preload: !1
        }), "sound"),
        md = Od.load.bind(Od);
      return Od.load = () => (Od._preload = !0, (0, vF.g)(dd), md()), Od
    }

    function tF(dd, Od, md) {
      const Wd = dd.listener;
      if (Wd.positionX) oF(Wd.positionX, Od, md, 0), oF(Wd.positionY, Od, md, 1), oF(Wd.positionZ, Od, md, 2), oF(Wd.forwardX, Od, md, 3), oF(Wd.forwardY, Od, md, 4), oF(Wd.forwardZ, Od, md, 5), oF(Wd.upX, Od, md, 6), oF(Wd.upY, Od, md, 7), oF(Wd.upZ, Od, md, 8);
      else {
        let dd = !1;
        for (let Wd = 0; Wd < 9; Wd++) dd ||= Od[Wd] !== md[Wd];
        dd && (Wd.setPosition(Od[0], Od[1], Od[2]), Wd.setOrientation(Od[3], Od[4], Od[5], Od[6], Od[7], Od[8]), md.set(Od))
      }
    }

    function oF(dd, Od, md, Wd) {
      Od[Wd] !== md[Wd] && (dd.value = Od[Wd], md[Wd] = Od[Wd])
    }
    class NF {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(dd) {
        this.pose.set(dd);
        const Od = KF.Howler.ctx;
        return !!Od && (Od !== this.watchedCtx && (this.watchedCtx = Od, this.written.fill(Number.NaN), Od.addEventListener("statechange", (() => {
          "running" === Od.state && tF(Od, this.pose, this.written)
        }))), "running" === Od.state && tF(Od, dd, this.written), !0)
      }
    }
    var qF = md(38218),
      HF = md(40812);
    let yF = null,
      bF = null;

    function TF() {
      return null === yF && (yF = document.createElement("div"), yF.className = "WasmCameraLayer", yF.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(yF)), yF
    }

    function pF() {
      return bF ??= new HF.c(new qF.e(TF)), bF
    }

    function YF() {
      var dd;
      null === (dd = bF) || void 0 === dd || dd.clear(), gF(null)
    }

    function gF(dd) {
      Wd.e.get("scriptedCameraFacing") !== dd && Wd.e.set({
        scriptedCameraFacing: dd
      })
    }
    var wF = md(5819),
      aF = md(5769),
      EF = md(40849),
      JF = md(42993),
      UF = md(4509);
    const xF = Object.entries(qd.lc).reduce(((dd, Od) => {
      let [md, Wd] = Od;
      return dd[Wd] = md, dd
    }), []);

    function BF(dd, Od) {
      var md;
      return 0 !== ((null !== (md = dd.itemFlags[Od]) && void 0 !== md ? md : 0) & qd.Cc.Stackable)
    }
    const SF = /^(0|[1-9][0-9]*)$/,
      sF = {
        displayName: (dd, Od) => (0, pW.displayNameOf)(Od),
        description: (dd, Od) => (0, pW.descriptionOf)(Od),
        type: (dd, Od) => (0, pW.itemTypeOf)(Od),
        clipSize: (dd, Od) => (0, pW.clipSizeOf)(Od),
        armourReduction: (dd, Od) => (0, pW.armourReductionOf)(Od),
        scopeType: (dd, Od) => (0, pW.scopeTypeOf)(Od),
        stackable: BF,
        harvestType: (dd, Od) => xF[dd.blockHarvestTypes[Od]],
        harvestLevel: (dd, Od) => {
          const md = dd.blockHarvestLevels[Od];
          return md === qd.Ec ? void 0 : md
        },
        harvests: (dd, Od) => {
          var md;
          const Wd = null !== (md = dd.itemHarvests[Od]) && void 0 !== md ? md : 0;
          return 0 !== Wd ? xF[Wd] : void 0 === (0, pW.harvestsNullLevelOf)(Od) ? void 0 : null
        },
        level: (dd, Od) => {
          var md, Wd;
          const Fd = null !== (md = dd.itemLevels[Od]) && void 0 !== md ? md : qd.Ec;
          return Fd !== qd.Ec ? Fd : null !== (Wd = (0, pW.harvestsNullLevelOf)(Od)) && void 0 !== Wd ? Wd : void 0
        }
      };

    function uF(dd, Od, md) {
      return iF(new Uint8Array(Math.floor(dd.length / Od)), dd, Od, md)
    }

    function VF(dd, Od, md) {
      return iF(new Uint16Array(Math.floor(dd.length / Od)), dd, Od, md)
    }

    function iF(dd, Od, md, Wd) {
      const Fd = new DataView(Od.buffer, Od.byteOffset, Od.byteLength);
      for (let Rd = 0; Rd < dd.length; Rd++) dd[Rd] = Wd(Fd, Rd * md);
      return dd
    }
    class AF {
      constructor(dd, Od) {
        this.options = Od, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = dd => {
          const Od = this.idOf(dd);
          if (void 0 === Od) throw new Error(`No item is named ${dd}, an item's root`);
          return Od
        };
        const md = Od => {
            const md = Od();
            return new Uint8Array(dd.memory().buffer, dd.scratch(), md).slice()
          },
          Wd = (new TextDecoder).decode(md((() => dd.queries.itemNames()))).split("\n"),
          Fd = md((() => dd.queries.blockProps())),
          Rd = md((() => dd.queries.itemProps()));
        this.props = {
          blockFlags: uF(Fd, qd.C.BYTES, qd.C.flags),
          blockHarvestTypes: uF(Fd, qd.C.BYTES, qd.C.harvestType),
          blockHarvestLevels: uF(Fd, qd.C.BYTES, qd.C.harvestLevel),
          blockAttachedTops: VF(Fd, qd.C.BYTES, qd.C.attachedTop),
          itemFlags: uF(Rd, qd.Dc.BYTES, qd.Dc.flags),
          itemHarvests: uF(Rd, qd.Dc.BYTES, qd.Dc.harvests),
          itemLevels: uF(Rd, qd.Dc.BYTES, qd.Dc.level)
        }, (0, UF.k)(Object.freeze(Wd)), (0, JF.f)()
      }
      idOf(dd) {
        if ("number" === typeof dd) return void 0 === (0, UF.h)(dd) ? void 0 : dd;
        const Od = (0, UF.d)(dd);
        return void 0 === Od && SF.test(dd) ? void 0 === (0, UF.h)(+dd) ? void 0 : +dd : Od
      }
      getMetaInfo(dd) {
        if (!dd || dd === wF.e) return wF.f;
        const Od = this.idOf(dd);
        if (void 0 === Od) throw new Error(`Item ${dd} not found in registry`);
        return this.metaOf(Od)
      }
      blockRootId(dd) {
        return 0 !== dd && void 0 !== (0, UF.h)(dd) ? this.metaOf(dd).rootId : dd
      }
      metaOf(dd) {
        return this.metas[dd] ??= (0, aF.m)((0, UF.h)(dd), dd, this.rootIdOf, (0, pW.rootMetaDescOf)(dd))
      }
      getItemId(dd) {
        if (!dd || dd === wF.e) return 0;
        const Od = this.idOf(dd);
        if (void 0 === Od) throw new Error(`Invalid block name. You sent ${dd}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Od
      }
      getItemName(dd) {
        if (!dd || dd === wF.e) return wF.e;
        const Od = this.idOf(dd);
        if (void 0 === Od) throw new Error(`Item ${dd} not found in registry`);
        return (0, UF.h)(Od)
      }
      blockNameToBlockId(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (dd === wF.e) return 0;
        let md = this.idOf(dd);
        if (void 0 === md || !this.isBlockId(md)) {
          const Od = dd.indexOf("|"),
            Wd = Od > 0 ? (0, UF.d)(dd.slice(0, Od)) : void 0;
          md = void 0 !== Wd && this.isBlockId(Wd) && (0, pW.rootMetaDescOf)(Wd) === dd ? Wd : void 0
        }
        if (void 0 !== md) return md;
        if (!Od) throw new Error(`Invalid block name. You sent ${dd}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(dd) {
        return dd > 0 && dd < this.props.blockFlags.length
      }
      nameOfId(dd) {
        return 0 !== dd && (0, UF.h)(dd) || wF.e
      }
      itemType(dd) {
        const Od = dd ? this.idOf(dd) : void 0;
        if (!Od) return null;
        let md = this.types.get(Od);
        return void 0 === md && (md = Object.freeze({
          id: Od,
          name: (0, UF.h)(Od),
          meta: this.getMetaInfo(Od),
          stackable: BF(this.props, Od),
          type: (0, pW.itemTypeNameOf)(Od),
          clipSize: (0, pW.clipSizeOf)(Od),
          scopeType: (0, pW.scopeTypeOf)(Od),
          showsAimingUi: (0, pW.showsAimingUi)(Od)
        }), this.types.set(Od, md)), md
      }
      getItemStat(dd, Od) {
        if (EF.b.has(Od)) {
          const md = "minChargeStateToUse" === Od ? this.getMetaInfo(dd).rootName : this.getItemName(dd),
            Wd = this.options.get((0, EF.d)(md, Od));
          if (null !== Wd && void 0 !== Wd) return Wd
        }
        return this.defaultStat(dd, Od, this.statOf(Od))
      }
      getDisplayName(dd) {
        return this.getItemStat(dd, "displayName")
      }
      getDefaultItemStat(dd, Od) {
        return this.defaultStat(dd, Od, this.statOf(Od))
      }
      statOf(dd) {
        const Od = sF[dd];
        return void 0 === Od && function(dd, Od) {
          throw new Error(`ClientApi.${dd} is not available yet in the wasm client (${Od})`)
        }(`getItemStat("${dd}")`, `a table of the stat: the wasm client answers ${Object.keys(sF).join(", ")}`), Od
      }
      defaultStat(dd, Od, md) {
        const Wd = this.idOf(dd),
          Fd = void 0 === Wd ? void 0 : md(this.props, Wd);
        return null !== Fd && void 0 !== Fd || "displayName" !== Od ? Fd : this.getItemName(dd)
      }
      getClientOption(dd) {
        return this.options.get(dd)
      }
      getGunStats(dd) {
        return this.getClientOption(`${dd}GunStats`)
      }
      watchClientOption(dd, Od) {
        return this.options.subscribe(dd, Od)
      }
      isSolidBlockId(dd) {
        var Od;
        return 0 !== ((null !== (Od = this.props.blockFlags[dd]) && void 0 !== Od ? Od : 0) & qd.y.Solid)
      }
      isStackableId(dd) {
        return BF(this.props, dd)
      }
      isFluidBlockId(dd) {
        var Od;
        return 0 !== ((null !== (Od = this.props.blockFlags[dd]) && void 0 !== Od ? Od : 0) & qd.y.Fluid)
      }
      canPlaceOverBlockId(dd) {
        var Od;
        return 0 !== ((null !== (Od = this.props.blockFlags[dd]) && void 0 !== Od ? Od : 0) & qd.y.PlaceOver)
      }
      attachedTopOf(dd) {
        var Od;
        return null !== (Od = this.props.blockAttachedTops[dd]) && void 0 !== Od ? Od : 0
      }
      isDroplessBlockId(dd) {
        return (0, pW.dropsNothing)(dd)
      }
    }

    function rF(dd, Od) {
      const md = new Map;
      return (Wd, Fd) => {
        const Rd = Od.idOf(Wd),
          Xd = void 0 === Rd ? null : (Wd => {
            let Fd = md.get(Wd);
            if (void 0 === Fd) {
              const Rd = dd.queries.salvageRecipe(Wd),
                Xd = new DataView(dd.memory().buffer, dd.scratch(), Rd),
                Kd = [];
              for (let dd = 0; dd + qd.ae.BYTES <= Rd; dd += qd.ae.BYTES) Kd.push(Object.freeze({
                item: Od.nameOfId(qd.ae.item(Xd, dd)),
                amt: qd.ae.amount(Xd, dd)
              }));
              Fd = 0 === Kd.length ? null : Object.freeze(Kd), md.set(Wd, Fd)
            }
            return Fd
          })(Rd);
        if (null === Xd || void 0 === Fd) return Xd;
        const Kd = Fd <= 0 ? 1 : Fd;
        return Xd.map((dd => {
          let {
            item: Od,
            amt: md
          } = dd;
          return {
            item: Od,
            amt: md * Kd
          }
        }))
      }
    }
    var GF = md(42733),
      nF = md(38491),
      LF = md(38480),
      PF = md(38483),
      zF = md(38121),
      cF = md(42827),
      jF = md(55017);
    const DF = -1,
      eF = new Uint8Array(0),
      IF = new TextEncoder;

    function lF(dd) {
      if (null === dd) return null;
      const Od = IF.encode(dd);
      return Od.byteLength < od.Ec ? Od : Od.subarray(0, od.Ec - 1)
    }
    class CF {
      constructor(dd) {
        this.deps = dd, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = DF, this.keyframesSettled = !1, this.reloadFrom = DF
      }
      reloadKeyframes() {
        var dd, Od;
        this.keyframesVersion = DF, this.reloadFrom = null !== (dd = null === (Od = this.view()) || void 0 === Od ? void 0 : Od.version) && void 0 !== dd ? dd : DF
      }
      setPlayback(dd) {
        const Od = 1 === this.deps.core.aXd(dd);
        return Od && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = DF, this.reloadFrom = DF), Od
      }
      async open(dd, Od) {
        const md = await this.deps.replay.open(dd, Od);
        return "opening" === md && (this.reloadKeyframes(), this.deps.recorder.prefetch()), md
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(dd)), Od)
      }
      setSpeed(dd) {
        this.deps.replay.setSpeed(dd)
      }
      setCameraMode(dd) {
        this.deps.replay.setCameraMode(jF.d.indexOf(dd))
      }
      view() {
        var dd;
        const Od = qd.q.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Od) return this.lastView = null, null;
        const md = new DataView(this.deps.buffer(), Od, qd.Sd.BYTES),
          Wd = qd.Sd.version(md, 0),
          Fd = this.lastView;
        if (null !== Fd && Fd.version === Wd) return Fd;
        const Rd = qd.Sd.markIn(md, 0),
          Xd = {
            version: Wd,
            state: qd.Sd.state(md, 0),
            cameraMode: null !== (dd = jF.d[qd.Sd.cameraMode(md, 0)]) && void 0 !== dd ? dd : "recording",
            Et: qd.Sd.Et(md, 0),
            totalTicks: qd.Sd.totalTicks(md, 0),
            speed: qd.Sd.speed(md, 0),
            mark: Rd === qd.Rd ? null : {
              inTick: Rd,
              outTick: qd.Sd.markOut(md, 0)
            },
            editVersion: qd.Sd.editVersion(md, 0)
          };
        return this.lastView = Xd, Xd
      }
      keyframes() {
        const dd = this.view();
        if (null === dd) return [];
        dd.version !== this.reloadFrom && (this.reloadFrom = DF);
        const Od = this.reloadFrom === DF && dd.state !== od.ld.Cropping && dd.state !== od.ld.None,
          md = Od ? dd.editVersion : dd.version;
        if (md === this.keyframesVersion && Od === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Wd
        } = this.deps, Fd = Wd.EXd(), Rd = Wd.hb(), Xd = [];
        if (0 !== Rd && Fd > 0) {
          const dd = new DataView(this.deps.buffer(), Rd, Fd * od.tc);
          for (let Od = 0; Od < Fd; Od++) {
            const md = Od * od.tc,
              Wd = Od => dd.getFloat64(md + Od, !0);
            Xd.push({
              Et: dd.getUint32(md + od.Bc, !0),
              position: [Wd(od.xc), Wd(od.xc + 8), Wd(od.xc + 16)],
              direction: [Wd(od.vc), Wd(od.vc + 8), Wd(od.vc + 16)],
              easing: [Wd(od.wc), Wd(od.wc + 8), Wd(od.wc + 16), Wd(od.wc + 24)]
            })
          }
        }
        return this.keyframesVersion = md, this.keyframesSettled = Od, this.lastKeyframes = Xd, Xd
      }
      addKeyframe() {
        const dd = this.deps.apiView(),
          Od = [qd.q.eye(dd, 0, 0), qd.q.eye(dd, 0, 1), qd.q.eye(dd, 0, 2)];
        return this.deps.replay.addKeyframe(Od, function(dd, Od) {
          const md = Math.cos(Od);
          return [md * Math.sin(dd), -Math.sin(Od), md * Math.cos(dd)]
        }(qd.q.heading(dd, 0), qd.q.pitch(dd, 0)))
      }
      setKeyframe(dd) {
        return this.deps.replay.setKeyframe(dd.Et, Float64Array.from([...dd.position, ...dd.direction, ...dd.easing]))
      }
      moveKeyframe(dd, Od) {
        return this.deps.replay.moveKeyframe(dd, Od)
      }
      deleteKeyframes(dd, Od) {
        return this.deps.replay.deleteKeyframes(dd, Od)
      }
      setMark(dd) {
        var Od, md;
        return this.deps.replay.setMark(null !== (Od = null === dd || void 0 === dd ? void 0 : dd.inTick) && void 0 !== Od ? Od : -1, null !== (md = null === dd || void 0 === dd ? void 0 : dd.outTick) && void 0 !== md ? md : -1)
      }
      crop(dd, Od) {
        const md = this.deps.replay.crop(dd, Od);
        return md && this.reloadKeyframes(), md
      }
      save(dd) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(dd)
      }
      recorderControl(dd) {
        this.deps.recorder.control(dd)
      }
      recorderPrefs(dd, Od) {
        this.deps.recorder.prefs(dd, Od)
      }
      recorderOption(dd, Od) {
        const md = this.deps.cmd();
        return null !== md && (0, qd.Pf)(md, 0, dd, null === Od ? eF : IF.encode(Od))
      }
      recordFlyingText(dd, Od, md, Wd) {
        const Fd = this.deps.cmd(),
          Rd = Math.max(0, Math.min(4294967295, Math.round(Wd)));
        return null !== Fd && (0, qd.Kf)(Fd, 0, Od, md, Rd, IF.encode(dd))
      }
      recordPlayerKilled(dd, Od, md, Wd) {
        const Fd = this.deps.cmd();
        return null !== Fd && (0, qd.Sf)(Fd, 0, dd, Od, Math.max(0, md), IF.encode(Wd))
      }
      recordKillfeed(dd, Od, md) {
        var Wd, Fd;
        const Rd = this.deps.cmd(),
          Xd = function(dd) {
            const Od = dd.reduce(((dd, Od) => {
                var md;
                return dd + QW.rb + (null !== (md = null === Od || void 0 === Od ? void 0 : Od.byteLength) && void 0 !== md ? md : 0)
              }), 0),
              md = new Uint8Array(Od),
              Wd = new DataView(md.buffer);
            let Fd = 0;
            for (const Xd of dd) {
              var Rd;
              Wd.setUint16(Fd, null !== (Rd = null === Xd || void 0 === Xd ? void 0 : Xd.byteLength) && void 0 !== Rd ? Rd : od.Ec, !0), Fd += QW.rb, null !== Xd && (md.set(Xd, Fd), Fd += Xd.byteLength)
            }
            return md
          }([lF(dd.name), lF(dd.colour), lF(Od.name), lF(Od.colour), lF(md)]);
        return null !== Rd && (0, qd.Of)(Rd, 0, null !== (Wd = dd.id) && void 0 !== Wd ? Wd : qd.$c, null !== (Fd = Od.id) && void 0 !== Fd ? Fd : qd.$c, Xd)
      }
      recorderSession(dd, Od) {
        this.deps.recorder.session({
          session: Od,
          lobbyType: dd.lobbyType,
          game: dd.gameNameWithVariation,
          lobby: dd.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.JXd()
      }
      filePartDone(dd, Od) {
        this.deps.recorder.filePartDone(dd, Od)
      }
      fileDone(dd) {
        this.deps.recorder.fileDone(dd)
      }
    }
    const ZF = -2147483648;
    class kF {
      constructor(dd) {
        var Od;
        this.deps = dd, this.state = TW.c, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.heldOptions = new Map, this.now = null !== (Od = dd.now) && void 0 !== Od ? Od : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var dd, Od, md;
        return null === (dd = null === (Od = (md = this.deps).live) || void 0 === Od ? void 0 : Od.call(md)) || void 0 === dd || dd
      }
      activated(dd) {
        var Od, md;
        this.live && (this.viewerShown(!0 === (null === (Od = (md = this.deps).viewerOpen) || void 0 === Od ? void 0 : Od.call(md))), this.deps.client.recorderSession(dd, (0, jF.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var dd, Od;
        this.live && (this.state.recording || !0 !== (null === (dd = (Od = this.deps).viewerOpen) || void 0 === dd ? void 0 : dd.call(Od))) ? (this.releaseOptions(), this.deps.client.recorderControl(od.Yc.ToggleRecording)) : this.deps.notify(PF.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(od.Yc.SaveClip) : this.deps.notify(PF.c.clippingNotOn)
      }
      viewerShown(dd) {
        this.live && this.deps.client.recorderControl(dd ? od.Yc.ViewerOpened : od.Yc.ViewerClosed)
      }
      setPrefs(dd, Od) {
        this.live && (dd && this.releaseOptions(), this.deps.client.recorderPrefs(dd, Od))
      }
      setAllOptions(dd) {
        var Od;
        this.live && (null === (Od = this.heldOptions) || void 0 === Od || Od.clear(), dd.forEach(((dd, Od) => {
          this.sendOption(Od, dd)
        })))
      }
      setOption(dd, Od) {
        this.live && (this.heldOptions ? this.heldOptions.set(dd, Od) : this.sendOption(dd, Od))
      }
      releaseOptions() {
        const dd = this.heldOptions;
        if (dd) {
          this.heldOptions = null;
          for (const [Od, md] of dd) this.sendOption(Od, md)
        }
      }
      sendOption(dd, Od) {
        var md;
        this.deps.client.recorderOption(dd, void 0 === Od || null === Od ? null : null !== (md = JSON.stringify(Od)) && void 0 !== md ? md : null)
      }
      recordFlyingText(dd, Od, md, Wd) {
        this.live && this.deps.client.recordFlyingText(dd, Od, md, Wd)
      }
      recordPlayerKilled(dd, Od, md, Wd) {
        this.live && this.deps.client.recordPlayerKilled(dd, Od, md, Wd)
      }
      recordKillfeed(dd, Od, md) {
        this.live && this.deps.client.recordKillfeed(dd, Od, md)
      }
      Et() {
        let dd = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, dd = {
            ...dd,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Od = Math.floor((this.now() - this.recordingSince) / 1e3);
          Od !== dd.seconds && (dd = {
            ...dd,
            seconds: Od
          })
        }
        this.set(dd)
      }
      onEvent(dd) {
        var Od, md;
        const {
          notify: Wd
        } = this.deps, Fd = PF.c;
        switch (dd.what) {
          case od.Vc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Wd(Fd.recordingStarted);
            break;
          case od.Vc.RecordingStopped:
            this.stopRecording(), Wd(Fd.recordingStopped), this.saveState(od.gd.Recording, "saving");
            break;
          case od.Vc.RecordingDiscarded:
            this.stopRecording(), Wd(Fd.recordingDiscarded);
            break;
          case od.Vc.RecordingTurnedOff:
            this.stopRecording(), Wd(Fd.recordingTurnedOff);
            break;
          case od.Vc.LimitReached:
            Wd(Fd.limitReached);
            break;
          case od.Vc.ClipSaved:
            this.saveState(od.gd.Clip, "saving");
            break;
          case od.Vc.ClipEmpty:
            Wd(Fd.clipEmpty);
            break;
          case od.Vc.ClippingNotOn:
            Wd(Fd.clippingNotOn);
            break;
          case od.Vc.Disallowed:
            Wd(Fd.disallowed);
            break;
          case od.Vc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case od.Vc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case od.Vc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case od.Vc.SaveBusy:
            null === (Od = (md = this.deps).onSaveState) || void 0 === Od || Od.call(md, dd.kind, "busy"), Wd(Fd.saveBusy);
            break;
          case od.Vc.CloseViewerFirst:
            Wd(Fd.closeViewerFirst)
        }
      }
      fileReady(dd, Od) {
        this.deps.download(Od), this.saveState(dd, "done"), this.deps.notify(dd === od.gd.Clip ? PF.c.clipSaved : PF.c.recordingSaved)
      }
      failed(dd) {
        this.saveState(dd, "failed"), this.deps.notify(dd === od.gd.Clip ? PF.c.clipFailed : PF.c.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(TW.c)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(dd, Od) {
        var md, Wd;
        null === (md = (Wd = this.deps).onSaveState) || void 0 === md || md.call(Wd, dd, Od)
      }
      set(dd) {
        dd !== this.state && (this.state = dd, this.deps.onState(dd))
      }
    }
    const fF = new TextDecoder;

    function MF(dd, Od, md, Wd) {
      const Fd = [];
      for (let Rd = 0; Rd < Wd; Rd++) {
        if (Od + QW.rb > md) return null;
        const Wd = dd.getUint16(Od, !0);
        if (Od += QW.rb, Wd !== od.Ec) {
          if (Od + Wd > md) return null;
          Fd.push(fF.decode(new Uint8Array(dd.buffer, dd.byteOffset + Od, Wd))), Od += Wd
        } else Fd.push(null)
      }
      return Od === md ? Fd : null
    }

    function dR(dd, Od) {
      let md = new DataView(new ArrayBuffer(0)),
        Wd = !0;
      const Fd = {
        replayFailed: (Od, md, Wd) => {
          dd.replayFailed({
            reason: Od,
            code: md,
            version: Wd
          })
        },
        replayOption: (Od, Fd, Rd, Xd) => {
          const Kd = function(dd, Od, md, Wd) {
            switch (Od) {
              case od.hd.Cleared:
                return 0 === Wd ? null : void 0;
              case od.hd.Text:
                return fF.decode(new Uint8Array(dd.buffer, dd.byteOffset + md, Wd));
              case od.hd.Int:
                return Wd === Int32Array.BYTES_PER_ELEMENT ? dd.getInt32(md, !0) : void 0;
              case od.hd.Double:
                return Wd === Float64Array.BYTES_PER_ELEMENT ? dd.getFloat64(md, !0) : void 0;
              default:
                return
            }
          }(md, Fd, Rd, Xd);
          void 0 !== Kd ? dd.replayOption({
            key: Od,
            value: Kd
          }) : Wd = !1
        },
        replayUiEvent: (Od, Fd, Rd, Xd, Kd, hd) => {
          const vd = function(dd, Od, md, Wd, Fd, Rd, Xd) {
            const Kd = Rd + Xd;
            switch (Od) {
              case od.kd.FlyingText: {
                const Xd = MF(dd, Rd, Kd, 1);
                return null !== Xd && null !== Xd[0] ? {
                  what: Od,
                  CR: md,
                  lR: Wd,
                  angle: Fd,
                  contentJson: Xd[0]
                } : null
              }
              case od.kd.PlayerKilled: {
                const Wd = MF(dd, Rd, Kd, 3);
                return Wd ? {
                  what: Od,
                  killstreak: md,
                  dead: Wd[0],
                  killer: Wd[1],
                  withItem: Wd[2]
                } : null
              }
              case od.kd.Killfeed: {
                const md = MF(dd, Rd, Kd, 7);
                return md ? {
                  what: Od,
                  killerId: md[0],
                  killerName: md[1],
                  killerColour: md[2],
                  victimId: md[3],
                  victimName: md[4],
                  victimColour: md[5],
                  withItem: md[6]
                } : null
              }
              default:
                return null
            }
          }(md, Od, Fd, Rd, Xd, Kd, hd);
          null !== vd ? dd.replayUiEvent(vd) : Wd = !1
        },
        replayFilePart: (md, Fd, Rd, Xd) => {
          const Kd = Od();
          Rd + Xd > Kd.byteLength ? Wd = !1 : dd.filePart(md, Fd, new Uint8Array(Kd, Rd, Xd).slice())
        },
        replayFileReady: (Od, md, Wd, Fd) => {
          dd.fileReady({
            save: Od,
            kind: md,
            parts: Wd,
            bytes: Fd
          })
        },
        recorderEvent: (Od, md, Wd) => {
          dd.recorderEvent({
            what: Od,
            kind: md,
            save: Wd
          })
        },
        replayOpened: (Od, Wd, Fd) => {
          dd.replayOpened(fF.decode(new Uint8Array(md.buffer, md.byteOffset + Wd, Fd)))
        }
      };
      return (dd, Od, Rd, Xd) => !(dd < od.Z.ReplayFailed || dd > od.Z.RecorderEvent) && (md = Od, Wd = !0, (0, qd.we)(dd, Od, Rd, Xd, Fd) && Wd)
    }

    function OR(dd) {
      let Od = null;
      const md = dR(dd, (() => {
        if (null === Od) throw new Error("a recorder event read outside recorderEventReader's call");
        return Od.buffer
      }));
      return (dd, Wd) => {
        Od = Wd;
        try {
          ! function(dd, Od) {
            const md = dd.slice(),
              Wd = new DataView(md.buffer);
            for (let Fd = 0; Fd < md.byteLength;) {
              if (Fd + od.W > md.byteLength) throw new Error(`the recorder module's events end mid-head at ${Fd}`);
              const dd = Wd.getUint32(Fd, !0),
                Rd = 65535 & dd,
                Xd = dd >>> 16,
                Kd = Fd + od.W;
              if (Kd + Xd > md.byteLength || !Od(Rd, Wd, Kd, Xd)) throw new Error(`the recorder module wrote a malformed event ${Rd} (${Xd} bytes) at ${Fd}`);
              Fd = Kd + (0, od.ve)(Xd)
            }
          }(dd, md)
        } finally {
          Od = null
        }
      }
    }
    class mR {
      constructor(dd, Od) {
        this.acks = dd, this.handlers = Od, this.parts = new Map
      }
      onPart(dd, Od, md) {
        let Wd = this.parts.get(dd);
        Wd || (Wd = [], this.parts.set(dd, Wd)), Wd[Od] = md, this.acks.filePartDone(dd, Od)
      }
      onReady(dd) {
        var Od;
        const md = null !== (Od = this.parts.get(dd.save)) && void 0 !== Od ? Od : [];
        this.parts.delete(dd.save);
        const Wd = function(dd, Od, md) {
          if (dd.length !== Od) return null;
          let Wd = 0;
          for (let Xd = 0; Xd < Od; Xd++) {
            if (void 0 === dd[Xd]) return null;
            Wd += dd[Xd].byteLength
          }
          if (Wd !== md) return null;
          if (1 === Od) return dd[0];
          const Fd = new Uint8Array(md);
          let Rd = 0;
          for (const Xd of dd) Fd.set(Xd, Rd), Rd += Xd.byteLength;
          return Fd
        }(md, dd.parts, dd.bytes);
        this.acks.fileDone(dd.save), null === Wd ? this.handlers.fileIncomplete(dd.save, dd.kind) : this.handlers.fileReady(dd.save, dd.kind, Wd)
      }
      onDiscarded(dd) {
        this.parts.delete(dd)
      }
    }

    function WR() {
      return md.e(73).then((() => md(64753)))
    }
    class FR {
      constructor(dd) {
        this.deps = dd, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Od
        } = dd;
        this.recorder = new kF({
          client: Od,
          live: () => {
            var dd;
            return !0 !== (null === (dd = this.viewer) || void 0 === dd ? void 0 : dd.inPlayback)
          },
          viewerOpen: dd.viewerOpen,
          notify: dd.notify,
          download: Od => {
            var md;
            null === (md = dd.download) || void 0 === md || md.call(dd, Od)
          },
          onState: dd.onRecorderState,
          onSaveState: dd.onSaveState
        }), this.parts = new mR(Od, {
          fileReady: (dd, Od, md) => {
            var Wd;
            Od === od.gd.Edited ? null === (Wd = this.viewer) || void 0 === Wd || Wd.saveDone(md) : this.recorder.fileReady(Od, md)
          },
          fileIncomplete: (dd, Od) => {
            this.saveFailed(Od)
          }
        });
        const md = {
          replayFailed: dd => {
            var Od;
            null === (Od = this.viewer) || void 0 === Od || Od.onFailed(dd)
          },
          replayOption: Od => {
            var md;
            null === (md = dd.onReplayOption) || void 0 === md || md.call(dd, Od)
          },
          replayUiEvent: Od => {
            var md;
            null === (md = dd.onReplayUiEvent) || void 0 === md || md.call(dd, Od)
          },
          filePart: (dd, Od, md) => {
            this.parts.onPart(dd, Od, md)
          },
          fileReady: dd => {
            this.parts.onReady(dd)
          },
          replayOpened: Od => {
            var md;
            null === (md = dd.onReplayOpened) || void 0 === md || md.call(dd, Od)
          },
          recorderEvent: dd => {
            var Od;
            switch (dd.what) {
              case od.Vc.FileDiscarded:
                this.parts.onDiscarded(dd.save);
                break;
              case od.Vc.SaveFailed:
                this.saveFailed(dd.kind);
                break;
              case od.Vc.SaveBusy:
                if (null !== (Od = this.viewer) && void 0 !== Od && Od.savePending) {
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
        this.sink = function(dd, Od) {
          return {
            onReplayEvent: dR(dd, Od)
          }
        }(md, dd.buffer), this.recorderEvents = OR(md)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var dd;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (dd = this.deps.loadViewer) && void 0 !== dd ? dd : WR)().catch((dd => {
          throw this.viewerChunk = null, dd
        })), this.viewerChunk.then((dd => (this.viewer ??= new dd.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var dd, Od;
            null === (dd = (Od = this.deps).onViewerChange) || void 0 === dd || dd.call(Od)
          }
        }), this.viewer))))
      }
      activated(dd) {
        this.recorder.activated(dd)
      }
      afterFrame(dd) {
        try {
          dd > 0 && this.recorder.Et()
        } finally {
          var Od;
          null === (Od = this.viewer) || void 0 === Od || Od.afterFrame()
        }
      }
      end() {
        var dd;
        null === (dd = this.viewer) || void 0 === dd || dd.end()
      }
      saveFailed(dd) {
        var Od;
        dd === od.gd.Edited ? null === (Od = this.viewer) || void 0 === Od || Od.saveFailed(!1) : this.recorder.failed(dd)
      }
    }
    var RR = md(42578),
      XR = md(42602),
      KR = md(5580),
      hR = md(42904);
    class vR {
      constructor(dd) {
        this.deps = dd, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(dd, Od) {
        if (!this.deps.live() || 0 === dd && 0 === Od) return;
        const md = (0, cd.k)(0, performance.now()),
          Wd = this.deps.dragScale();
        (0, hR.g)((() => {
          (0, cd.p)(od.vb.MouseDown, 0, 0, 0, md), (0, cd.p)(od.vb.MouseMove, 0, dd * Wd, Od * Wd, 0), (0, cd.p)(od.vb.MouseUp, 0, 0, 0, md)
        }))
      }
      move(dd) {
        var Od, md;
        this.analogue[0] = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.x) && void 0 !== Od ? Od : 0, this.analogue[1] = null !== (md = null === dd || void 0 === dd ? void 0 : dd.y) && void 0 !== md ? md : 0, this.send()
      }
      holdVertical(dd, Od) {
        const md = "freeCamUp" === dd ? qd.dc.Up : qd.dc.Down;
        this.keys = Od ? this.keys | md : this.keys & ~md, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const dd = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== dd && !(0, qd.Qe)(dd, 0, this.analogue, this.keys)
      }
    }
    var QR = md(4802),
      tR = md(819),
      oR = md(320),
      NR = md(107),
      qR = md(35467),
      HR = md(807),
      yR = md(10017);

    function bR() {
      const dd = Wd.e.get("clientEscMenuOptions"),
        Od = (0, tR.t)(dd);
      return {
        mouse: (0, NR.isMobile)() ? Od : dd.mouseSensitivity,
        touch: Od,
        fovPercent: dd.cameraFOV
      }
    }

    function TR() {
      const dd = Wd.e.get("clientEscMenuOptions"),
        Od = Wd.e.get("isTouchScreen") ? (0, tR.t)(dd) : dd.mouseSensitivity,
        md = bR().mouse;
      return md > 0 ? Od / md : 1
    }

    function pR(dd) {
      const Od = () => {
        dd.setSoundPrefs(Wd.e.get("soundVolume"), Wd.e.get("soundOnFromAd"))
      };
      let md = null;
      const Fd = () => {
        const {
          showFog: Od,
          enableLighting: Fd,
          fogChunkDistance: Rd,
          chunkFadeIn: Xd
        } = Wd.e.get("clientEscMenuOptions"), Kd = {
          showFog: Od,
          lighting: Fd,
          fogChunks: Rd,
          chunkFade: Xd,
          cellLight: (0, QR.j)("cellLight") ? (0, QR.j)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        md && (0, od.be)(md) === (0, od.be)(Kd) && md.fogChunks === Rd || (md = Kd, dd.setEnvPrefs(md))
      };
      let Rd = null;
      const Kd = () => {
        const Od = function() {
          const dd = Wd.e.get("clientEscMenuOptions");
          return {
            nametagsHidden: Wd.e.get("areNametagsHidden"),
            crouchToggle: dd.crouchIsToggle,
            bhopDisabled: dd.disableBunnyHopping,
            disableBobbing: dd.disableBobbing,
            ezTowering: dd.ezTowering ? (0, oR.h)() : null,
            ezBridging: dd.ezBridging,
            showChunkBorders: dd.showChunkBorders,
            touchWalk: !(0, yR.e)(),
            edgeGuard: dd.touchEdgeGuard,
            edgeGuardLong: (0, HR.e)(),
            nametagCutDistance: (0, qR.d)()
          }
        }();
        (0, Bd.fe)(Rd, Od) || (Rd = Od, dd.setUiPrefs(Od))
      };
      let hd = null;
      const vd = () => {
        const Od = bR();
        (0, Bd.fe)(hd, Od) || (hd = Od, dd.setLookPrefs(Od))
      };
      Od(), Fd(), Kd(), vd();
      const Qd = [(0, Xd.l)("appManagerUpdated|soundVolume", Od), (0, Xd.l)("appManagerUpdated|soundOnFromAd", Od), (0, Xd.l)("appManagerUpdated|clientEscMenuOptions", (() => {
        Fd(), Kd(), vd()
      })), (0, Xd.l)(yR.b, Kd), (0, Xd.l)("appManagerUpdated|enabledDebugFeatures", Fd), (0, Xd.l)("appManagerUpdated|areNametagsHidden", Kd), (0, Xd.l)("appManagerUpdated|showDistantNametags", Kd)];
      return () => {
        for (const dd of Qd) dd()
      }
    }
    var YR = md(42876),
      gR = md(42883);
    var wR = (0, gR.d)("lend"),
      aR = (0, gR.d)("starting"),
      ER = (0, gR.d)("generation"),
      JR = (0, gR.d)("end");
    class UR {
      constructor(dd) {
        this.deps = dd, Object.defineProperty(this, JR, {
          value: xR
        }), Object.defineProperty(this, wR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aR, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ER, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, YR.b)(this, wR)[wR] || (0, YR.b)(this, aR)[aR]
      }
      async start(dd) {
        if (this.active) return "busy";
        const Od = (0, YR.b)(this, ER)[ER];
        (0, YR.b)(this, aR)[aR] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, YR.b)(this, aR)[aR] = !1
        }
        if (Od !== (0, YR.b)(this, ER)[ER]) return "refused";
        const md = this.deps.beginSave();
        if (!md) return "refused";
        const Wd = Number(BigInt.asUintN(32, dd)),
          Fd = Number(BigInt.asUintN(32, dd >> 32n));
        let Rd = "refused";
        return this.deps.recorderCall(((dd, Od) => {
          const Xd = md.editState,
            Kd = dd.stage(Xd.length);
          0 !== Kd ? (new Uint8Array(Od.buffer, Kd, Xd.length).set(Xd), dd.UXd(md.headLen, Wd, Fd) && (Rd = "sealing")) : Rd = "tooLarge"
        }), !0), "sealing" !== Rd ? (md.end(), Rd) : ((0, YR.b)(this, wR)[wR] = md, "sealing")
      }
      beforeRecorderStep() {
        const dd = (0, YR.b)(this, wR)[wR];
        if (!dd) return null;
        let Od = -1,
          md = 0;
        if (!this.deps.recorderCall((dd => {
            Od = dd.xXd(), Od > 0 && (md = dd.BXd())
          }))) return (0, YR.b)(this, JR)[JR](dd, "stopped");
        if (Od < 0) return (0, YR.b)(this, JR)[JR](dd, "read");
        if (0 === Od) return null;
        const Wd = dd.head(md, Od);
        let Fd = !1;
        if (Wd && this.deps.recorderCall(((dd, md) => {
            const Rd = dd.stage(Od);
            0 !== Rd && (new Uint8Array(md.buffer, Rd, Od).set(Wd), Fd = !0)
          }), !0), Fd) return null;
        const Rd = dd.givenUp();
        this.deps.recorderCall((dd => {
          dd.SXd()
        }));
        const Xd = (0, YR.b)(this, JR)[JR](dd, Rd ? "givenUp" : "stopped");
        return Rd && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Xd
      }
      stop() {
        (0, YR.b)(this, ER)[ER]++;
        const dd = (0, YR.b)(this, wR)[wR];
        dd && (this.deps.recorderCall((dd => {
          dd.SXd()
        })), (0, YR.b)(this, JR)[JR](dd, "stopped"))
      }
    }

    function xR(dd, Od) {
      return (0, YR.b)(this, wR)[wR] = null, dd.end(), Od
    }

    function BR(dd, Od) {
      const md = new Uint8Array(4),
        Wd = new DataView(md.buffer);
      return Wd.setUint8(0, dd ? 1 : 0), Wd.setUint16(2, Math.max(0, Math.min(65535, Math.round(Od))), !0), md
    }

    function SR(dd, Od) {
      return dd > function(dd) {
        return 16777216 + 314572.8 * Math.max(0, dd)
      }(Od) + 33554432
    }
    let sR = null;

    function uR(dd) {
      return sR ??= async function(dd) {
        const Od = dd.loadInFlight();
        Od && await Od.catch((() => {}));
        if (dd.trapped()) return "trapped";
        if (dd.busy() || !SR(dd.memoryBytes(), dd.clipSeconds())) return "kQ";
        dd.unload();
        let md = !1;
        try {
          md = await dd.load()
        } catch {
          md = !1
        }
        if (!md) return dd.trapped() ? "trapped" : dd.Aq() ? "Aq" : "failed";
        return "recycled"
      }(dd).finally((() => {
        sR = null
      })), sR
    }
    const VR = "Replay recording couldn't load, so try again.",
      iR = "Replay recording stopped working, so reload the page to record replays again.",
      AR = new Set([od.Yc.ToggleRecording, od.Yc.SaveClip]);
    var rR = (0, gR.d)("bindings"),
      GR = (0, gR.d)("module"),
      nR = (0, gR.d)("memory"),
      LR = (0, gR.d)("trapped"),
      PR = (0, gR.d)("Aq"),
      zR = (0, gR.d)("recycleDue"),
      cR = (0, gR.d)("loading"),
      jR = (0, gR.d)("generation"),
      DR = (0, gR.d)("viewDrawn"),
      eR = (0, gR.d)("clip"),
      IR = (0, gR.d)("session"),
      lR = (0, gR.d)("control"),
      CR = (0, gR.d)("deferred"),
      ZR = (0, gR.d)("coreU8"),
      kR = (0, gR.d)("coreU32"),
      fR = (0, gR.d)("moduleU8"),
      MR = (0, gR.d)("edited"),
      dX = (0, gR.d)("sendSession"),
      OX = (0, gR.d)("checkNotInEvents"),
      mX = (0, gR.d)("clipping"),
      WX = (0, gR.d)("busy"),
      FX = (0, gR.d)("use"),
      RX = (0, gR.d)("ensureLoaded"),
      XX = (0, gR.d)("loadOnce"),
      KX = (0, gR.d)("recycleAfterStep"),
      hX = (0, gR.d)("settleRecycle"),
      vX = (0, gR.d)("load"),
      QX = (0, gR.d)("attach"),
      tX = (0, gR.d)("resendHeld"),
      oX = (0, gR.d)("recycle"),
      NX = (0, gR.d)("send"),
      qX = (0, gR.d)("unload"),
      HX = (0, gR.d)("dropModule"),
      yX = (0, gR.d)("coreBytes"),
      bX = (0, gR.d)("coreWords"),
      TX = (0, gR.d)("moduleBytes"),
      pX = (0, gR.d)("loadFailed"),
      YX = (0, gR.d)("call"),
      gX = (0, gR.d)("guard"),
      wX = (0, gR.d)("trapOn");
    class aX {
      constructor(dd) {
        this.deps = dd, Object.defineProperty(this, wX, {
          value: lX
        }), Object.defineProperty(this, gX, {
          value: IX
        }), Object.defineProperty(this, YX, {
          value: eX
        }), Object.defineProperty(this, pX, {
          value: DX
        }), Object.defineProperty(this, TX, {
          value: jX
        }), Object.defineProperty(this, bX, {
          value: cX
        }), Object.defineProperty(this, yX, {
          value: zX
        }), Object.defineProperty(this, HX, {
          value: PX
        }), Object.defineProperty(this, qX, {
          value: LX
        }), Object.defineProperty(this, NX, {
          value: nX
        }), Object.defineProperty(this, oX, {
          value: GX
        }), Object.defineProperty(this, tX, {
          value: rX
        }), Object.defineProperty(this, QX, {
          value: AX
        }), Object.defineProperty(this, vX, {
          value: iX
        }), Object.defineProperty(this, hX, {
          value: VX
        }), Object.defineProperty(this, KX, {
          value: uX
        }), Object.defineProperty(this, XX, {
          value: sX
        }), Object.defineProperty(this, RX, {
          value: SX
        }), Object.defineProperty(this, FX, {
          value: BX
        }), Object.defineProperty(this, WX, {
          value: xX
        }), Object.defineProperty(this, mX, {
          value: UX
        }), Object.defineProperty(this, OX, {
          value: JX
        }), Object.defineProperty(this, dX, {
          value: EX
        }), Object.defineProperty(this, rR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, LR, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, PR, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, zR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jR, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, DR, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, eR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, CR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fR, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MR, {
          writable: !0,
          value: void 0
        }), (0, YR.b)(this, MR)[MR] = new UR({
          ensureLoaded: () => (0, YR.b)(this, RX)[RX](),
          recorderCall: (dd, Od) => {
            Od && (0, YR.b)(this, OX)[OX]("an edited save's stage");
            const md = (0, YR.b)(this, YX)[YX](((Od, md) => (dd(Od, md), !0)));
            return null !== md && void 0 !== md && md
          },
          beginSave: dd.beginSave,
          givenUp: dd.givenUp
        })
      }
      get active() {
        return null !== (0, YR.b)(this, GR)[GR]
      }
      get trapped() {
        return (0, YR.b)(this, LR)[LR]
      }
      get loading() {
        return null !== (0, YR.b)(this, cR)[cR]
      }
      prefetch() {
        (0, YR.b)(this, PR)[PR] || (0, YR.b)(this, LR)[LR] || (0, YR.b)(this, GR)[GR] || (0, YR.b)(this, cR)[cR] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, YR.b)(this, DR)[DR] = !0, (0, YR.b)(this, mX)[mX]() && (0, YR.b)(this, FX)[FX]()
      }
      prefs(dd, Od) {
        (0, YR.b)(this, eR)[eR] = {
          on: dd,
          seconds: Od
        }, (0, YR.b)(this, NX)[NX](od.Rc.Prefs, BR(dd, Od)), dd && (0, YR.b)(this, DR)[DR] && (0, YR.b)(this, FX)[FX]()
      }
      control(dd) {
        const Od = function(dd) {
          return new Uint8Array([dd, 0, 0, 0])
        }(dd);
        if (AR.has(dd)) {
          if (!(0, YR.b)(this, LR)[LR]) return (0, YR.b)(this, GR)[GR] ? void(0, YR.b)(this, NX)[NX](od.Rc.Control, Od) : ((0, YR.b)(this, lR)[lR] = Od, void(0, YR.b)(this, FX)[FX]());
          this.deps.failed(iR)
        } else(0, YR.b)(this, PR)[PR] || this.deps.coreCommand(od.Rc.Control, Od)
      }
      session(dd) {
        (0, YR.b)(this, IR)[IR] = dd, (0, YR.b)(this, dX)[dX](dd)
      }
      filePartDone(dd, Od) {
        (0, YR.b)(this, NX)[NX](od.Rc.FilePartDone, function(dd, Od) {
          const md = new Uint8Array(8),
            Wd = new DataView(md.buffer);
          return Wd.setUint32(0, dd, !0), Wd.setUint32(4, Od, !0), md
        }(dd, Od))
      }
      fileDone(dd) {
        return (0, YR.b)(this, NX)[NX](od.Rc.FileDone, function(dd) {
          const Od = new Uint8Array(4);
          return new DataView(Od.buffer).setUint32(0, dd, !0), Od
        }(dd)), (0, YR.b)(this, KX)[KX]()
      }
      saveEdited(dd) {
        return (0, YR.b)(this, OX)[OX]("saveEdited"), (0, YR.b)(this, MR)[MR].start(dd)
      }
      afterFrame() {
        if (!(0, YR.b)(this, GR)[GR]) return;
        "read" === (0, YR.b)(this, MR)[MR].beforeRecorderStep() && (0, YR.b)(this, KX)[KX]();
        const dd = (0, YR.b)(this, zR)[zR];
        (0, YR.b)(this, zR)[zR] = null;
        const Od = (0, YR.b)(this, GR)[GR],
          md = (0, YR.b)(this, nR)[nR];
        if (!Od || !md) return void(null === dd || void 0 === dd || dd.resolve((0, YR.b)(this, LR)[LR] ? "trapped" : "kQ"));
        const {
          core: Wd
        } = this.deps, Fd = Wd.VXd(2);
        let Rd, Xd, Kd, hd, vd = 0,
          Qd = 0;
        if (0 !== Fd) {
          var td, od;
          const dd = (0, YR.b)(this, bX)[bX]();
          vd = null !== (td = dd[Fd >>> 2]) && void 0 !== td ? td : 0, Qd = null !== (od = dd[1 + (Fd >>> 2)]) && void 0 !== od ? od : 0
        }
        try {
          if (Qd > 0) {
            const dd = Od.feed(Qd);
            0 !== dd && (0, YR.b)(this, TX)[TX](md).set((0, YR.b)(this, yX)[yX]().subarray(vd, vd + Qd), dd)
          }
          Rd = Od.step(), Xd = Od.iXd(), Kd = Od.AXd(), hd = Od.rXd()
        } catch (Nd) {
          if (!(0, YR.b)(this, wX)[wX](Nd)) throw null === dd || void 0 === dd || dd.resolve("kQ"), Nd;
          return void(null === dd || void 0 === dd || dd.resolve("trapped"))
        }
        if (Rd > 0) {
          const dd = Wd.GXd(2, Rd);
          0 !== dd && (0, YR.b)(this, yX)[yX]().set((0, YR.b)(this, TX)[TX](md).subarray(Xd, Xd + Rd), dd)
        }
        if (Kd > 0) {
          (0, YR.b)(this, CR)[CR] = [];
          try {
            this.deps.events(new Uint8Array(md.buffer, hd, Kd), md)
          } catch (Nd) {
            throw null === dd || void 0 === dd || dd.resolve("kQ"), Nd
          } finally {
            const dd = (0, YR.b)(this, CR)[CR];
            (0, YR.b)(this, CR)[CR] = null;
            for (const [Od, md] of dd)(0, YR.b)(this, NX)[NX](Od, md)
          }
        }
        if (!(0, YR.b)(this, mX)[mX]() && !(0, YR.b)(this, WX)[WX]()) return (0, YR.b)(this, qX)[qX](), void(null === dd || void 0 === dd || dd.resolve("kQ"));
        null === dd || void 0 === dd || dd.resolve((0, YR.b)(this, oX)[oX]())
      }
      dispose() {
        (0, YR.b)(this, PR)[PR] = !0, (0, YR.b)(this, qX)[qX]()
      }
    }

    function EX(dd) {
      (0, YR.b)(this, NX)[NX](od.Rc.Session, function(dd) {
        const Od = new TextEncoder,
          md = Od.encode(dd.game).subarray(0, 65535),
          Wd = Od.encode(dd.lobby).subarray(0, 65535),
          Fd = new Uint8Array(22 + md.length + 2 + Wd.length),
          Rd = new DataView(Fd.buffer);
        Rd.setFloat64(0, dd.unixMs, !0), Rd.setBigUint64(8, BigInt.asUintN(64, dd.session), !0), Rd.setUint8(16, dd.lobbyType);
        let Xd = 20;
        for (const Kd of [md, Wd]) Rd.setUint16(Xd, Kd.length, !0), Fd.set(Kd, Xd + 2), Xd += 2 + Kd.length;
        return Fd
      }({
        ...dd,
        unixMs: this.deps.unixNow()
      }))
    }

    function JX(dd) {
      false
    }

    function UX() {
      var dd, Od;
      return null !== (dd = null === (Od = (0, YR.b)(this, eR)[eR]) || void 0 === Od ? void 0 : Od.on) && void 0 !== dd && dd
    }

    function xX() {
      const dd = (0, YR.b)(this, GR)[GR];
      let Od = !0;
      if (dd) try {
        Od = dd.busy()
      } catch (md) {
        if (!(0, YR.b)(this, wX)[wX](md)) throw md
      }
      return Od || (0, YR.b)(this, MR)[MR].active
    }
    async function BX() {
      !(0, YR.b)(this, PR)[PR] && this.deps.allowed() ? await (0, YR.b)(this, RX)[RX]() : (0, YR.b)(this, lR)[lR] = null
    }

    function SX() {
      return (0, YR.b)(this, LR)[LR] || (0, YR.b)(this, PR)[PR] ? Promise.resolve(!1) : (0, YR.b)(this, GR)[GR] ? Promise.resolve(!0) : ((0, YR.b)(this, cR)[cR] ??= (0, YR.b)(this, XX)[XX](), (0, YR.b)(this, cR)[cR])
    }
    async function sX() {
      let dd = !1;
      try {
        return dd = await (0, YR.b)(this, vX)[vX](), dd
      } finally {
        dd || ((0, YR.b)(this, lR)[lR] = null), (0, YR.b)(this, cR)[cR] = null
      }
    }

    function uX() {
      if (!(0, YR.b)(this, GR)[GR]) return Promise.resolve((0, YR.b)(this, LR)[LR] ? "trapped" : "kQ");
      if (!(0, YR.b)(this, zR)[zR]) {
        let dd = () => {};
        const Od = new Promise((Od => {
          dd = Od
        }));
        (0, YR.b)(this, zR)[zR] = {
          promise: Od,
          resolve: dd
        }
      }
      return (0, YR.b)(this, zR)[zR].promise
    }

    function VX(dd) {
      const Od = (0, YR.b)(this, zR)[zR];
      (0, YR.b)(this, zR)[zR] = null, null === Od || void 0 === Od || Od.resolve(dd)
    }
    async function iX() {
      let dd = (0, YR.b)(this, rR)[rR];
      if (!dd) {
        const Od = (0, YR.b)(this, jR)[jR];
        try {
          dd = await this.deps.load()
        } catch (md) {
          return Od === (0, YR.b)(this, jR)[jR] && await (0, YR.b)(this, pX)[pX](md), !1
        }
        if (Od !== (0, YR.b)(this, jR)[jR]) return this.deps.unload(), !1;
        const Wd = dd,
          Fd = (0, YR.b)(this, gX)[gX]((() => Wd.nXd()));
        if (void 0 === Fd) return !1;
        const Rd = this.deps.core.LXd();
        if (Fd !== Rd) return await (0, YR.b)(this, pX)[pX](new Error(`recorder port version ${Fd}, the core's ${Rd}`)), !1;
        (0, YR.b)(this, rR)[rR] = dd
      }
      const Od = dd;
      try {
        if (!(0, YR.b)(this, gX)[gX]((() => ((0, YR.b)(this, GR)[GR] = new Od.PXd, (0, YR.b)(this, nR)[nR] = Od.sXd(), !0)))) return !1;
        (0, YR.b)(this, tX)[tX]();
        const dd = (0, YR.b)(this, lR)[lR];
        return (0, YR.b)(this, lR)[lR] = null, dd && (0, YR.b)(this, NX)[NX](od.Rc.Control, dd), (0, YR.b)(this, QX)[QX]()
      } catch (md) {
        return (0, YR.b)(this, qX)[qX](), await (0, YR.b)(this, pX)[pX](md), !1
      }
    }

    function AX() {
      return this.deps.core.zXd(0), 1 === this.deps.core.zXd(1) || ((0, YR.b)(this, qX)[qX](), this.deps.failed(VR), !1)
    }

    function rX() {
      (0, YR.b)(this, eR)[eR] && (0, YR.b)(this, NX)[NX](od.Rc.Prefs, BR((0, YR.b)(this, eR)[eR].on, (0, YR.b)(this, eR)[eR].seconds)), (0, YR.b)(this, IR)[IR] && (0, YR.b)(this, dX)[dX]((0, YR.b)(this, IR)[IR])
    }

    function GX() {
      return uR({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var dd, Od;
          return null !== (dd = null === (Od = (0, YR.b)(this, eR)[eR]) || void 0 === Od ? void 0 : Od.seconds) && void 0 !== dd ? dd : 0
        },
        trapped: () => (0, YR.b)(this, LR)[LR],
        busy: () => (0, YR.b)(this, WX)[WX](),
        loadInFlight: () => (0, YR.b)(this, cR)[cR],
        Aq: () => (0, YR.b)(this, PR)[PR],
        unload: () => {
          (0, YR.b)(this, qX)[qX]()
        },
        load: () => (0, YR.b)(this, RX)[RX]()
      })
    }

    function nX(dd, Od) {
      (0, YR.b)(this, CR)[CR] ? (0, YR.b)(this, CR)[CR].push([dd, Od]): (0, YR.b)(this, YX)[YX](((md, Wd) => {
        const Fd = md.uXd(Od.length);
        0 !== Fd && (new Uint8Array(Wd.buffer, Fd, Od.length).set(Od), md.command(dd, Od.length))
      }))
    }

    function LX() {
      (0, YR.b)(this, jR)[jR]++, (0, YR.b)(this, hX)[hX]("kQ"), (0, YR.b)(this, MR)[MR].stop(), this.deps.core.zXd(0), (0, YR.b)(this, HX)[HX](), (0, YR.b)(this, LR)[LR] || ((0, YR.b)(this, rR)[rR] = null, this.deps.unload())
    }

    function PX() {
      (0, YR.b)(this, YX)[YX]((dd => {
        dd.free()
      })), (0, YR.b)(this, GR)[GR] = null, (0, YR.b)(this, nR)[nR] = null, (0, YR.b)(this, fR)[fR] = null
    }

    function zX() {
      var dd;
      const Od = this.deps.coreBuffer();
      return (null === (dd = (0, YR.b)(this, ZR)[ZR]) || void 0 === dd ? void 0 : dd.buffer) !== Od && ((0, YR.b)(this, ZR)[ZR] = new Uint8Array(Od)), (0, YR.b)(this, ZR)[ZR]
    }

    function cX() {
      var dd;
      const Od = this.deps.coreBuffer();
      return (null === (dd = (0, YR.b)(this, kR)[kR]) || void 0 === dd ? void 0 : dd.buffer) !== Od && ((0, YR.b)(this, kR)[kR] = new Uint32Array(Od, 0, Od.byteLength >>> 2)), (0, YR.b)(this, kR)[kR]
    }

    function jX(dd) {
      var Od;
      const md = dd.buffer;
      return (null === (Od = (0, YR.b)(this, fR)[fR]) || void 0 === Od ? void 0 : Od.buffer) !== md && ((0, YR.b)(this, fR)[fR] = new Uint8Array(md)), (0, YR.b)(this, fR)[fR]
    }
    async function DX(dd) {
      await this.deps.staleOr(dd, (() => {
        this.deps.failed(VR)
      }))
    }

    function eX(dd) {
      const Od = (0, YR.b)(this, GR)[GR],
        md = (0, YR.b)(this, nR)[nR];
      if (Od && md) return (0, YR.b)(this, gX)[gX]((() => dd(Od, md)))
    }

    function IX(dd) {
      if (!(0, YR.b)(this, LR)[LR]) try {
        return dd()
      } catch (Od) {
        if (!(0, YR.b)(this, wX)[wX](Od)) throw Od;
        return
      }
    }

    function lX(dd) {
      return dd instanceof WebAssembly.RuntimeError && ((0, YR.b)(this, LR)[LR] = !0, (0, YR.b)(this, GR)[GR] = null, (0, YR.b)(this, nR)[nR] = null, (0, YR.b)(this, fR)[fR] = null, (0, YR.b)(this, rR)[rR] = null, (0, YR.b)(this, lR)[lR] = null, (0, YR.b)(this, hX)[hX]("trapped"), this.deps.core.zXd(0), (0, YR.b)(this, MR)[MR].stop(), this.deps.crash(this.deps.markTrapped(dd)), this.deps.failed(iR), !0)
    }
    var CX = md(40251);
    const ZX = new Map([
      ["skyblock", () => md.e(60).then((() => md(40249)))]
    ]);

    function kX(dd) {
      const Od = ZX.get(dd);
      return Od ? Od().then((() => {
        const Od = (0, CX.e)(dd);
        if (!Od) throw new Error(`${dd}'s replay hook module registered no hook`);
        return Od
      })) : null
    }
    class fX {
      constructor(dd) {
        this.deps = dd, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(dd) {
        if (this.pending.clear(), dd === this.game && null !== this.hook) return void(this.all = !0);
        const Od = ++this.generation;
        this.game = dd, this.hook = null, this.all = !1;
        const md = this.deps.loadHook(dd);
        null === md || void 0 === md || md.then((dd => {
          Od === this.generation && (this.hook = dd, this.all = !0)
        }), (dd => {
          Od === this.generation && this.deps.onError(dd)
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
          hook: Od
        } = this;
        if (null === Od || !dd || !this.all && 0 === this.pending.size) return;
        const md = this.deps.cmd();
        if (null === md) return;
        const {
          api: Wd
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: dd,
            count: Od
          } = mW(Wd, this.ids);
          this.ids = dd;
          for (let md = 0; md < Od; md++) this.pending.set(dd[md], !0)
        }
        const Fd = this.ids = WW(this.ids, this.pending.size);
        let Rd = 0;
        for (const vd of this.pending.keys()) Fd[Rd++] = vd;
        const Xd = [],
          Kd = FW(Wd, Fd, Rd, ((dd, Od) => {
            null !== Od && Xd.push({
              serverId: dd,
              info: Od,
              spawned: !0 === this.pending.get(dd)
            })
          }));
        if (Kd) {
          this.pending.clear();
          for (const {
              serverId: dd,
              info: Wd,
              spawned: Fd
            }
            of Xd) try {
            Od(Wd, {
              setFacingTolerance: Od => {
                null === Od && Fd || Em(md, dd, Od) || this.pending.set(dd, Fd)
              }
            })
          } catch (hd) {
            this.deps.onError(hd)
          }
        }
      }
    }
    var MX = (0, gR.d)("bindings"),
      dK = (0, gR.d)("module"),
      OK = (0, gR.d)("memory"),
      mK = (0, gR.d)("trapped"),
      WK = (0, gR.d)("generation"),
      FK = (0, gR.d)("loading"),
      RK = (0, gR.d)("lend"),
      XK = (0, gR.d)("givenUp"),
      KK = (0, gR.d)("afterSave"),
      hK = (0, gR.d)("opens"),
      vK = (0, gR.d)("saveAskedAt"),
      QK = (0, gR.d)("unload"),
      tK = (0, gR.d)("dropModule"),
      oK = (0, gR.d)("loadFailed"),
      NK = (0, gR.d)("saveReadsBody"),
      qK = (0, gR.d)("command"),
      HK = (0, gR.d)("call"),
      yK = (0, gR.d)("guard"),
      bK = (0, gR.d)("trapOn");
    class TK {
      constructor(dd) {
        this.deps = dd, Object.defineProperty(this, bK, {
          value: UK
        }), Object.defineProperty(this, yK, {
          value: JK
        }), Object.defineProperty(this, HK, {
          value: EK
        }), Object.defineProperty(this, qK, {
          value: aK
        }), Object.defineProperty(this, NK, {
          get: wK,
          set: void 0
        }), Object.defineProperty(this, oK, {
          value: gK
        }), Object.defineProperty(this, tK, {
          value: YK
        }), Object.defineProperty(this, QK, {
          value: pK
        }), Object.defineProperty(this, MX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, OK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mK, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, WK, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, FK, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, RK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hK, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, vK, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, YR.b)(this, dK)[dK] && null === (0, YR.b)(this, KK)[KK]
      }
      async open(dd, Od) {
        if ((0, YR.b)(this, mK)[mK]) return od.fd.ModuleTrap;
        let md = (0, YR.b)(this, MX)[MX];
        if (!md) {
          const dd = (0, YR.b)(this, WK)[WK];
          (0, YR.b)(this, FK)[FK]++;
          try {
            md = await this.deps.load()
          } catch (Fd) {
            return (0, YR.b)(this, FK)[FK]--, dd !== (0, YR.b)(this, WK)[WK] ? "stopped" : (0, YR.b)(this, oK)[oK](Fd, Od)
          }
          if ((0, YR.b)(this, FK)[FK]--, dd !== (0, YR.b)(this, WK)[WK]) return (0, YR.b)(this, MX)[MX] || 0 !== (0, YR.b)(this, FK)[FK] || (0, YR.b)(this, mK)[mK] || this.deps.unload(), "stopped";
          if ((0, YR.b)(this, mK)[mK]) return od.fd.ModuleTrap;
          const Wd = md.nXd(),
            Rd = this.deps.core.LXd();
          if (Wd !== Rd) return (0, YR.b)(this, oK)[oK](new Error(`replay port version ${Wd}, the core's ${Rd}`), Od);
          (0, YR.b)(this, MX)[MX] = md
        }
        if (!(0, YR.b)(this, dK)[dK]) {
          const dd = md;
          if (!(0, YR.b)(this, yK)[yK]((() => {
              (0, YR.b)(this, dK)[dK] = new dd.cXd, (0, YR.b)(this, OK)[OK] = dd.jXd()
            }))) return od.fd.ModuleTrap
        }
        let Wd = !1;
        return (0, YR.b)(this, HK)[HK](((Od, md) => {
          null !== (0, YR.b)(this, KK)[KK] && Od.step(0, 0);
          const Fd = Od.stage(dd.length);
          0 !== Fd && (new Uint8Array(md.buffer, Fd, dd.length).set(dd), Od.open(), (0, YR.b)(this, XK)[XK] = (0, YR.b)(this, RK)[RK], (0, YR.b)(this, KK)[KK] = null, (0, YR.b)(this, hK)[hK]++, Wd = !0)
        })) ? Wd ? "opening" : od.fd.TooLarge : od.fd.ModuleTrap
      }
      beforeFrame(dd) {
        const Od = (0, YR.b)(this, dK)[dK],
          md = (0, YR.b)(this, OK)[OK];
        if (!Od || !md || null !== (0, YR.b)(this, KK)[KK]) return;
        const {
          core: Wd
        } = this.deps, Fd = Wd.DXd(dd);
        if (Fd < 0) return;
        const Rd = Math.floor(Fd);
        let Xd, Kd;
        try {
          Xd = Od.step(Rd, Fd - Rd), Kd = Od.iXd()
        } catch (vd) {
          return void(0, YR.b)(this, bK)[bK](vd)
        }
        const hd = Wd.GXd(1, Xd);
        if (0 === hd) {
          const dd = (0, YR.b)(this, HK)[HK]((dd => {
            dd.close()
          }));
          if (!dd) return;
          return (0, YR.b)(this, NK)[NK] ? (0, YR.b)(this, KK)[KK] = "drop" : (0, YR.b)(this, tK)[tK](), void Wd.eXd(od.fd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), hd, Xd).set(new Uint8Array(md.buffer, Kd, Xd))
      }
      play() {
        (0, YR.b)(this, qK)[qK]((dd => {
          dd.play()
        }))
      }
      pause() {
        (0, YR.b)(this, qK)[qK]((dd => {
          dd.pause()
        }))
      }
      seek(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, YR.b)(this, qK)[qK]((md => {
          md.seek(dd, Od)
        }))
      }
      setMark(dd, Od) {
        return (0, YR.b)(this, qK)[qK]((md => {
          md.IXd(dd, Od)
        }))
      }
      addKeyframe(dd, Od) {
        return (0, YR.b)(this, qK)[qK]((md => {
          md.lXd(dd[0], dd[1], dd[2], Od[0], Od[1], Od[2])
        }))
      }
      setKeyframe(dd, Od) {
        return (0, YR.b)(this, qK)[qK]((md => {
          md.CXd(dd, Od)
        }))
      }
      moveKeyframe(dd, Od) {
        return (0, YR.b)(this, qK)[qK]((md => {
          md.ZXd(dd, Od)
        }))
      }
      deleteKeyframes(dd, Od) {
        return (0, YR.b)(this, qK)[qK]((md => {
          md.fXd(dd, Od)
        }))
      }
      crop(dd, Od) {
        return null === (0, YR.b)(this, RK)[RK] && (0, YR.b)(this, qK)[qK]((md => {
          md.crop(dd, Od)
        }))
      }
      beginSave() {
        const dd = (0, YR.b)(this, vK)[vK];
        if ((0, YR.b)(this, vK)[vK] = null, null !== dd && dd !== (0, YR.b)(this, hK)[hK]) return null;
        let Od = 0,
          md = null;
        if ((0, YR.b)(this, HK)[HK](((dd, Wd) => {
            Od = dd.save(), 0 !== Od && (md = new Uint8Array(Wd.buffer, dd.MXd(), dd.dKd()).slice())
          })), 0 === Od || !md) return null;
        const Wd = {
          headLen: Od,
          editState: md,
          givenUp: () => (0, YR.b)(this, XK)[XK] === Wd,
          head: (dd, Od) => {
            if ((0, YR.b)(this, RK)[RK] !== Wd || !(0, YR.b)(this, NK)[NK]) return null;
            let md = null;
            return (0, YR.b)(this, HK)[HK](((Wd, Fd) => {
              const Rd = Wd.OKd();
              0 !== Rd && dd >= 0 && Od >= 0 && dd + Od <= Rd && (md = new Uint8Array(Fd.buffer, Wd.mKd() + dd, Od))
            })), md
          },
          end: () => {
            if ((0, YR.b)(this, RK)[RK] !== Wd) return;
            (0, YR.b)(this, RK)[RK] = null, (0, YR.b)(this, XK)[XK] = null, (0, YR.b)(this, HK)[HK]((dd => {
              dd.WKd()
            }));
            const dd = (0, YR.b)(this, KK)[KK];
            (0, YR.b)(this, KK)[KK] = null, "unload" === dd ? (0, YR.b)(this, QK)[QK]() : "drop" === dd && (0, YR.b)(this, tK)[tK]()
          }
        };
        return (0, YR.b)(this, RK)[RK] = Wd, Wd
      }
      askSave() {
        (0, YR.b)(this, vK)[vK] = (0, YR.b)(this, hK)[hK]
      }
      setSpeed(dd) {
        (0, YR.b)(this, qK)[qK]((Od => {
          Od.FKd(dd)
        }))
      }
      setCameraMode(dd) {
        (0, YR.b)(this, qK)[qK]((Od => {
          Od.RKd(dd)
        }))
      }
      close() {
        (0, YR.b)(this, qK)[qK]((dd => {
          dd.close()
        }))
      }
      stop() {
        (0, YR.b)(this, WK)[WK]++, (0, YR.b)(this, NK)[NK] && ((0, YR.b)(this, HK)[HK]((dd => {
          dd.close()
        })), (0, YR.b)(this, dK)[dK]) ? (0, YR.b)(this, KK)[KK] = "unload" : (0, YR.b)(this, QK)[QK]()
      }
    }

    function pK() {
      (0, YR.b)(this, tK)[tK](), (0, YR.b)(this, mK)[mK] || ((0, YR.b)(this, MX)[MX] = null, this.deps.unload())
    }

    function YK() {
      (0, YR.b)(this, HK)[HK]((dd => {
        dd.free()
      })), (0, YR.b)(this, dK)[dK] = null, (0, YR.b)(this, OK)[OK] = null
    }
    async function gK(dd, Od) {
      return await this.deps.staleOr(dd, (() => {}), {
        beforeReload: Od
      }) ? "reloading" : od.fd.ModuleLoad
    }

    function wK() {
      return null !== (0, YR.b)(this, RK)[RK] && (0, YR.b)(this, XK)[XK] !== (0, YR.b)(this, RK)[RK]
    }

    function aK(dd) {
      return null === (0, YR.b)(this, KK)[KK] && (0, YR.b)(this, HK)[HK](dd)
    }

    function EK(dd) {
      const Od = (0, YR.b)(this, dK)[dK],
        md = (0, YR.b)(this, OK)[OK];
      return !(!Od || !md) && (0, YR.b)(this, yK)[yK]((() => {
        dd(Od, md)
      }))
    }

    function JK(dd) {
      if ((0, YR.b)(this, mK)[mK]) return !1;
      try {
        return dd(), !0
      } catch (Od) {
        return (0, YR.b)(this, bK)[bK](Od), !1
      }
    }

    function UK(dd) {
      if (!(dd instanceof WebAssembly.RuntimeError)) throw dd;
      (0, YR.b)(this, mK)[mK] = !0, (0, YR.b)(this, dK)[dK] = null, (0, YR.b)(this, OK)[OK] = null, (0, YR.b)(this, MX)[MX] = null, this.deps.crash(this.deps.markTrapped(dd)), this.deps.core.eXd(od.fd.ModuleTrap)
    }
    var xK = md(7415),
      BK = md(42986);
    const SK = "[bloxd-wasm-client]";
    const sK = String(ZF);

    function uK(dd) {
      return null === dd || dd === sK ? void 0 : dd
    }

    function VK(dd) {
      var Od, md, Wd, Fd, Rd, Kd, hd;
      switch (dd.what) {
        case od.kd.FlyingText: {
          let Od;
          try {
            Od = JSON.parse(dd.contentJson)
          } catch (vd) {
            return void console.warn(`${SK} a replay's flying text isn't JSON`, vd)
          }
          Xd.j.lQ("forceFlyingMiddleMessage", {
            content: Od,
            lR: dd.lR,
            angle: dd.angle,
            CR: dd.CR
          });
          break
        }
        case od.kd.PlayerKilled:
          (0, BK.h)({
            kind: "killed",
            body: {
              deadEId: null !== (Od = uK(dd.dead)) && void 0 !== Od ? Od : "",
              killerEId: uK(dd.killer),
              withItem: null !== (md = dd.withItem) && void 0 !== md ? md : "",
              killstreak: dd.killstreak
            }
          });
          break;
        case od.kd.Killfeed:
          (0, BK.h)({
            kind: "custom",
            body: {
              killer: {
                eId: uK(dd.killerId),
                name: null !== (Wd = dd.killerName) && void 0 !== Wd ? Wd : void 0,
                colour: null !== (Fd = dd.killerColour) && void 0 !== Fd ? Fd : void 0
              },
              victim: {
                eId: uK(dd.victimId),
                name: null !== (Rd = dd.victimName) && void 0 !== Rd ? Rd : void 0,
                colour: null !== (Kd = dd.victimColour) && void 0 !== Kd ? Kd : void 0
              },
              withItem: null !== (hd = dd.withItem) && void 0 !== hd ? hd : ""
            }
          })
      }
    }
    const iK = "[bloxd-wasm-client]";

    function AK(dd) {
      if (void 0 === dd || null === dd || "" === dd) return null;
      const Od = Number(dd);
      return Number.isInteger(Od) && Od > ZF && Od <= 2147483647 ? Od : null
    }

    function rK(dd) {
      return {
        id: AK(dd.eId),
        name: "string" === typeof dd.name ? dd.name : null,
        colour: "string" === typeof dd.colour ? dd.colour : null
      }
    }

    function GK(dd) {
      const Od = (0, XR.k)(QW.hc.PlayerKilled, (Od => {
          var md, Wd;
          const Fd = (0, RR.k)(Od);
          if (!(0, RR.d)(Fd)) return;
          const {
            deadEId: Rd,
            killerEId: Xd,
            withItem: Kd,
            killstreak: hd
          } = Fd;
          dd.recordPlayerKilled(null !== (md = AK(Rd)) && void 0 !== md ? md : ZF, null !== (Wd = AK(Xd)) && void 0 !== Wd ? Wd : ZF, "number" === typeof hd ? hd : 0, "string" === typeof Kd ? Kd : "")
        })),
        md = (0, XR.k)(QW.hc.CustomKillfeed, (Od => {
          const md = (0, RR.k)(Od);
          if (!(0, RR.d)(md) || !(0, RR.d)(md.killer) || !(0, RR.d)(md.victim)) return;
          const {
            killer: Wd,
            victim: Fd,
            withItem: Rd
          } = md;
          dd.recordKillfeed(rK(Wd), rK(Fd), "string" === typeof Rd ? Rd : null)
        }));
      return () => {
        Od(), md()
      }
    }

    function nK(dd) {
      let Od = null;
      const md = () => {
        const {
          enableClipping: md,
          clipDurationSeconds: Fd
        } = Wd.e.get("clientEscMenuOptions"), Rd = `${md}:${Fd}`;
        Rd !== Od && (Od = Rd, dd.recorder.setPrefs(md, Fd))
      };
      return md(), (0, Xd.l)("appManagerUpdated|clientEscMenuOptions", md)
    }
    const LK = "replayModule",
      PK = "recorderModule";

    function zK(dd, Od, md) {
      return function() {
        return dd.isStopped ? md : Od(...arguments)
      }
    }
    const cK = {
      open: () => Promise.reject(new Error(PF.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function jK() {
      return md.e(77).then((() => md(64962)))
    }

    function DK(dd) {
      (0, PF.e)({
        text: dd,
        type: "Error"
      })
    }
    class eK {
      constructor(dd) {
        this.deps = dd, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Od,
          api: Wd,
          core: Fd
        } = dd, Rd = () => dd.memory().buffer, Xd = () => Od.isStopped ? null : Od.rings.cmd, Kd = zK(Od, ((dd, Od) => Fd.GXd(dd, Od)), 0), hd = () => Fd.LXd();
        let vd = null;
        this.replay = new TK({
          core: {
            DXd: zK(Od, (dd => Fd.DXd(dd)), -1),
            GXd: Kd,
            LXd: hd,
            eXd: zK(Od, (dd => {
              Fd.eXd(dd)
            }), void 0)
          },
          coreBuffer: Rd,
          load: async () => (vd = await md.e(78).then((() => md(64969))), vd.loadReplayModule()),
          unload: () => {
            var dd;
            null === (dd = vd) || void 0 === dd || dd.unloadReplayModule()
          },
          markTrapped: dd => vd ? vd.markReplayTrapped(dd) : new Error(String(dd)),
          staleOr: (Od, md, Wd) => dd.staleOr(LK, Od, md, Wd),
          crash: Od => {
            dd.reportFault(LK, Od)
          }
        });
        let Qd = null;
        this.recorder = new aX({
          core: {
            zXd: zK(Od, (dd => Fd.zXd(dd)), 0),
            VXd: zK(Od, (dd => Fd.VXd(dd)), 0),
            GXd: Kd,
            LXd: hd
          },
          coreCommand: (dd, Od) => {
            var md, Wd;
            return null !== (md = null === (Wd = Xd()) || void 0 === Wd ? void 0 : Wd.writeCmd(dd, 0, Od)) && void 0 !== md && md
          },
          coreBuffer: Rd,
          load: async () => (Qd = await jK(), Qd.loadRecorderModule()),
          prefetch: () => {
            jK().then((dd => dd.prefetchRecorderModule())).catch((dd => {
              console.warn(`${iK} the recorder module didn't prefetch, so a save loads it:`, dd)
            }))
          },
          unload: () => {
            var dd;
            null === (dd = Qd) || void 0 === dd || dd.unloadRecorderModule()
          },
          markTrapped: dd => Qd ? Qd.markRecorderTrapped(dd) : new Error(String(dd)),
          memoryBytes: () => {
            var dd, Od;
            return null !== (dd = null === (Od = Qd) || void 0 === Od ? void 0 : Od.recorderMemoryBytes()) && void 0 !== dd ? dd : 0
          },
          staleOr: (Od, md) => dd.staleOr(PK, Od, md),
          crash: Od => {
            dd.reportFault(PK, Od)
          },
          allowed: () => !0 === dd.options.get("canRecordReplays"),
          failed: dd => {
            this.runtime.recorder.stopped(), DK(dd)
          },
          events: (dd, Od) => {
            this.runtime.recorderEvents(dd, Od)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: DK,
          unixNow: () => Date.now()
        });
        const td = new CF({
          core: {
            aXd: zK(Od, (dd => Fd.aXd(dd)), 0),
            JXd: zK(Od, (() => {
              Fd.JXd()
            }), void 0),
            hb: zK(Od, (() => Fd.hb()), 0),
            EXd: zK(Od, (() => Fd.EXd()), 0)
          },
          buffer: Rd,
          apiView: () => Wd.apiView,
          cmd: Xd,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new fX({
          api: Wd,
          cmd: Xd,
          loadHook: kX,
          onError: dd => {
            console.warn(`${iK} the recorded game's replay hooks:`, dd)
          }
        });
        const od = new FR({
          client: td,
          buffer: Rd,
          setHoldDraws: dd => {
            Od.setHoldDraws(dd)
          },
          notify: PF.e,
          onRecorderState: () => {
            var dd;
            null === (dd = (0, cF.i)()) || void 0 === dd || dd.recorderChanged()
          },
          onViewerChange: () => {
            var dd;
            null === (dd = (0, cF.i)()) || void 0 === dd || dd.viewerChanged()
          },
          onReplayOption: Od => {
            ! function(dd, Od) {
              var md, Wd;
              const Fd = QW.pb[Od.key];
              if (void 0 === Fd) return;
              let Rd = null !== (md = Od.value) && void 0 !== md ? md : JSON.parse(JSON.stringify(null !== (Wd = xK.c[Fd]) && void 0 !== Wd ? Wd : null));
              if (null !== Od.value && Od.key < QW.Mb.Environment && "string" === typeof Rd) try {
                Rd = JSON.parse(Rd)
              } catch (Xd) {
                return void console.warn(`${SK} a replay's ${Fd} isn't JSON`, Xd)
              }
              dd.applyNewClientOptions({
                [Fd]: Rd
              })
            }(dd.options, Od)
          },
          onReplayUiEvent: VK,
          onReplayOpened: Od => {
            this.entityHooks.opened((0, Bd.Gb)(Od)), dd.replayShaderPack(Od)
          },
          meshPending: () => {
            var dd, md;
            return null !== (dd = null === (md = Od.lastHeader) || void 0 === md ? void 0 : md.renderPending) && void 0 !== dd ? dd : 0
          },
          viewerOpen: zF.b,
          download: dd => {
            (0, nF.j)(dd)
          }
        });
        this.runtime = od, Wd.replay = od.sink, (0, cF.x)(od);
        const Nd = new vR({
          live: () => {
            var dd;
            return !Od.isStopped && !0 === (null === (dd = od.currentViewer) || void 0 === dd ? void 0 : dd.inPlayback)
          },
          cmd: Xd,
          dragScale: TR
        });
        this.freecam = Nd, (0, cF.t)(Nd), this.recordedOptions = function(dd, Od) {
          const md = QW.pb,
            Wd = md.map(((md, Wd) => Od.subscribe(md, (Od => {
              dd.setOption(Wd, Od)
            }))));
          return {
            sendAll() {
              dd.setAllOptions(md.map((dd => Od.get(dd))))
            },
            stop() {
              for (const dd of Wd) dd()
            }
          }
        }(od.recorder, dd.options), this.stops = [(0, YW.n)((dd => {
          Nd.flush();
          try {
            this.replay.beforeFrame(dd)
          } catch (Od) {
            this.deps.reportFault("replayFrame", Od)
          }
        })), (0, YW.B)(((dd, Od) => {
          try {
            this.recorder.afterFrame(), Od && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (md) {
            this.deps.reportFault("recorderFrame", md)
          }
          try {
            od.afterFrame(dd)
          } catch (md) {
            this.deps.reportFault("replayRuntime", md)
          }
        })), nK(od), () => {
          this.recordedOptions.stop()
        }, GK(od.recorder), (0, KR.h)((dd => {
          let {
            action: Od,
            down: md
          } = dd;
          var Wd;
          md && (null === (Wd = (0, cF.i)()) || void 0 === Wd || Wd.keyDown(Od))
        }))];
        const qd = () => {
          const dd = od.currentViewer;
          return !0 === (null === dd || void 0 === dd ? void 0 : dd.isOpen) ? dd : null
        };
        (0, LF.f)({
          open: (dd, Od) => this.open(dd, Od),
          replayKey: () => {
            var dd, Od;
            return null !== (dd = null === (Od = qd()) || void 0 === Od ? void 0 : Od.id) && void 0 !== dd ? dd : null
          },
          saveRefusal: () => {
            var dd, Od;
            return null !== (dd = null === (Od = qd()) || void 0 === Od ? void 0 : Od.saveRefusal) && void 0 !== dd ? dd : null
          },
          encode: () => {
            var dd, Od;
            return null !== (dd = null === (Od = qd()) || void 0 === Od ? void 0 : Od.save()) && void 0 !== dd ? dd : Promise.resolve(null)
          },
          fileHandle: () => {
            var dd, Od;
            return null !== (dd = null === (Od = od.currentViewer) || void 0 === Od ? void 0 : Od.fileHandle) && void 0 !== dd ? dd : null
          },
          markSaved: (dd, Od) => {
            var md;
            null === (md = od.currentViewer) || void 0 === md || md.markSaved(dd, Od)
          }
        })
      }
      netEvent(dd) {
        if ("connection" === dd.type)
          if (dd.phase === od.C.Activated) {
            this.activeConn = dd.conn;
            const Od = this.deps.sessionInfo(dd.conn);
            null !== Od && (this.runtime.activated({
              lobbyType: (0, Sd.w)(Od.lobbyName),
              gameNameWithVariation: Od.gameNameWithVariation,
              lobbyName: Od.lobbyName
            }), this.recordedOptions.sendAll())
          } else dd.phase !== od.C.Left && dd.phase !== od.C.Closed || dd.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const dd of this.stops) dd();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, cF.m)() === this.runtime && (0, cF.x)(null), (0, cF.j)() === this.freecam && (0, cF.t)(null), (0, LF.f)(cK), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(dd, Od) {
        const {
          running: md
        } = this.deps;
        if (md.isStopped) throw new Error(PF.c.coreStopped.text);
        if (dd.byteLength > 67108864) throw new Error(PF.c.cantOpen.text);
        let Wd;
        try {
          Wd = await async function(dd) {
            const Od = await dd.loadViewer();
            return Od.inPlayback || (0, YW.O)().leaveGame(null), Od
          }(this.runtime)
        } catch (Fd) {
          throw console.warn(`${iK} the replay viewer didn't load`, Fd), new Error(PF.c.viewerLoadFailed.text)
        }
        if (md.isStopped) throw new Error(PF.c.coreStopped.text);
        await Wd.open(dd, Od)
      }
    }
    var IK = md(2116);

    function lK(dd, Od) {
      const {
        aux: md,
        payload: Wd
      } = function(dd) {
        return {
          aux: dd.reset ? od.ec.ResetFirst : 0,
          payload: ZK(dd.changes)
        }
      }(Od);
      dd.queueOptions(md, Wd) && (Od.reset && IK.e.reset(), IK.e.apply(Od.changes))
    }
    const CK = new TextEncoder;

    function ZK(dd) {
      const Od = new kK;
      return MK(Od, dd), Od.bytes()
    }
    class kK {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(dd) {
        if (this.len + dd <= this.buf.length) return;
        const Od = new Uint8Array(Math.max(2 * this.buf.length, this.len + dd));
        Od.set(this.buf.subarray(0, this.len)), this.buf = Od, this.view = new DataView(Od.buffer)
      }
      u8(dd) {
        this.room(1), this.buf[this.len++] = dd
      }
      tagged(dd, Od, md) {
        this.room(1 + Od), this.buf[this.len++] = dd, 1 === Od ? this.view.setUint8(this.len, md) : 2 === Od ? this.view.setUint16(this.len, md) : this.view.setUint32(this.len, md), this.len += Od
      }
      signed(dd, Od, md) {
        this.room(1 + Od), this.buf[this.len++] = dd, 1 === Od ? this.view.setInt8(this.len, md) : 2 === Od ? this.view.setInt16(this.len, md) : this.view.setInt32(this.len, md), this.len += Od
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

    function fK(dd, Od, md, Wd, Fd, Rd, Xd) {
      Od < Wd ? dd.u8(md | Od) : null !== Fd && Od < 256 ? dd.tagged(Fd, 1, Od) : Od < 65536 ? dd.tagged(Rd, 2, Od) : dd.tagged(Xd, 4, Od)
    }

    function MK(dd, Od) {
      switch (typeof Od) {
        case "undefined":
          return void dd.raw(dh);
        case "boolean":
          return void dd.u8(Od ? 195 : 194);
        case "number":
          return void
          function(dd, Od) {
            Od >>> 0 === Od ? Od < 128 ? dd.u8(Od) : Od < 256 ? dd.tagged(204, 1, Od) : Od < 65536 ? dd.tagged(205, 2, Od) : dd.tagged(206, 4, Od) : (Od | 0) === Od ? Od >= -32 ? dd.u8(255 & Od) : Od >= -128 ? dd.signed(208, 1, Od) : Od >= -32768 ? dd.signed(209, 2, Od) : dd.signed(210, 4, Od) : dd.f64(Od)
          }(dd, Od);
        case "string": {
          const md = CK.encode(Od);
          return fK(dd, md.length, 160, 32, 217, 218, 219), void dd.raw(md)
        }
        case "object":
          break;
        default:
          return void dd.u8(192)
      }
      if (null === Od) dd.u8(192);
      else if (Array.isArray(Od)) {
        fK(dd, Od.length, 144, 16, null, 220, 221);
        for (const md of Od) MK(dd, md)
      } else if (Od instanceof Uint8Array) fK(dd, Od.length, 0, 0, 196, 197, 198), dd.raw(Od);
      else {
        const md = Object.keys(Od);
        fK(dd, md.length, 128, 0, null, 222, 223);
        for (const Wd of md) MK(dd, Wd), MK(dd, Od[Wd])
      }
    }
    const dh = new Uint8Array([212, 0, 0]);
    var Oh = md(37722),
      mh = md(37829),
      Wh = md(42929),
      Fh = md(42963),
      Rh = md(2425);
    const Xh = [1e3, 3e3, 9e3];
    class Kh {
      constructor(dd) {
        this.host = dd, this.sets = new Map, this.table = [], this.generation = 0, this.Aq = !1
      }
      onEvent(dd) {
        const Od = function(dd) {
          if (dd.byteLength !== od.td) return null;
          const Od = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
          return {
            want: Od.getUint16(0, !0),
            release: Od.getUint16(2, !0)
          }
        }(dd);
        Od && !this.Aq && (Od.release !== od.ud && this.release(Od.release), Od.want !== od.ud && this.want(Od.want))
      }
      reset(dd) {
        if (!this.Aq) {
          for (const [dd, Od] of this.sets) "ready" === Od.state && this.releaseAll(Od.distinct), this.sets.delete(dd);
          this.table = dd, this.generation++
        }
      }
      dispose() {
        if (this.Aq) return;
        this.Aq = !0, this.generation++, this.table = [];
        const dd = [...this.sets.values()];
        this.sets.clear();
        let Od = null;
        for (const Wd of dd)
          for (const dd of "ready" === Wd.state ? Wd.distinct : []) try {
            this.host.MFd(dd)
          } catch (md) {
            Od ??= {
              error: md
            }
          }
        if (Od) throw Od.error
      }
      isReady(dd) {
        var Od;
        return "ready" === (null === (Od = this.sets.get(dd)) || void 0 === Od ? void 0 : Od.state)
      }
      want(dd) {
        const Od = this.sets.get(dd);
        if ("loading" === (null === Od || void 0 === Od ? void 0 : Od.state)) return Od.wanted = !0, void this.capAnswer(dd, Od);
        if ("ready" === (null === Od || void 0 === Od ? void 0 : Od.state)) return void this.host.sendReady(vh(dd, Od.images, Od.size));
        const md = this.table[dd];
        if (!md || 1 !== md.urls.length && md.urls.length !== QW.bc.CubeFaces) return this.host.sendReady(Qh(dd)), void this.host.onLoadFailed(dd, "", new Error(`no image set ${dd}`));
        const Wd = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(dd, Wd), this.load(dd, md, Wd, this.generation, 0), this.capAnswer(dd, Wd)
      }
      capAnswer(dd, Od) {
        this.host.wait(4e3, (() => {
          this.sets.get(dd) === Od && Od.wanted && this.host.sendReady(Qh(dd))
        }))
      }
      load(dd, Od, md, Wd, Fd) {
        const Rd = [...new Set(Od.urls)];
        Promise.allSettled(Rd.map((dd => this.host.loadImage(dd, Od.orientation)))).then((Xd => {
          const Kd = Xd.flatMap((dd => "fulfilled" === dd.status ? [dd.value] : [])),
            hd = Wd === this.generation && this.sets.get(dd) === md,
            vd = Xd.findIndex((dd => "rejected" === dd.status));
          if (!hd || !md.wanted) return this.Aq ? void this.releaseAfterDispose(Kd.map(hh)) : (this.releaseAll(Kd.map(hh)), void(hd && this.sets.delete(dd)));
          vd < 0 ? this.loaded(dd, Od, Rd, Kd) : (this.releaseAll(Kd.map(hh)), this.host.sendReady(Qh(dd)), Fd < Xh.length ? this.host.wait(Xh[Fd], (() => {
            Wd === this.generation && this.sets.get(dd) === md && (md.wanted ? this.load(dd, Od, md, Wd, Fd + 1) : this.sets.delete(dd))
          })) : (this.sets.delete(dd), this.host.onLoadFailed(dd, Rd[vd], Xd[vd].reason)))
        }))
      }
      loaded(dd, Od, md, Wd) {
        const [Fd] = Wd, Rd = [Fd.width, Fd.height], Xd = Wd.every((dd => dd.width === Rd[0] && dd.height === Rd[1])), Kd = Od.urls.length === QW.bc.CubeFaces;
        if (!Xd || Rd[0] <= 0 || Rd[1] <= 0 || Rd[0] > 65535 || Rd[1] > 65535 || Kd && Rd[0] !== Rd[1]) {
          this.releaseAll(Wd.map(hh)), this.sets.delete(dd), this.host.sendReady(Qh(dd));
          const md = Wd.map((dd => `${dd.width}x${dd.height}`));
          return void this.host.onLoadFailed(dd, Od.urls[0], new Error(`set ${dd}'s images can't make its texture: ${md.join(", ")}`))
        }
        const hd = Od.urls.map((dd => Wd[md.indexOf(dd)].id)),
          vd = Wd.map(hh);
        this.sets.set(dd, {
          state: "ready",
          images: hd,
          distinct: vd,
          size: Rd
        }), this.host.sendReady(vh(dd, hd, Rd))
      }
      release(dd) {
        const Od = this.sets.get(dd);
        "loading" === (null === Od || void 0 === Od ? void 0 : Od.state) ? Od.wanted = !1: "ready" === (null === Od || void 0 === Od ? void 0 : Od.state) && (this.releaseAll(Od.distinct), this.sets.delete(dd))
      }
      releaseAll(dd) {
        for (const Od of dd) this.host.MFd(Od)
      }
      releaseAfterDispose(dd) {
        for (const Od of dd) try {
          this.host.MFd(Od)
        } catch {}
      }
    }

    function hh(dd) {
      return dd.id
    }

    function vh(dd, Od, md) {
      const Wd = new Uint8Array(QW.bc.SkyImagesReadyBytes),
        Fd = new DataView(Wd.buffer);
      return Fd.setUint16(0, dd, !0), Fd.setUint16(2, Od.length, !0), Fd.setUint16(4, md[0], !0), Fd.setUint16(6, md[1], !0), Od.slice(0, QW.bc.CubeFaces).forEach(((dd, Od) => {
        Fd.setUint32(8 + 4 * Od, dd, !0)
      })), Wd
    }

    function Qh(dd) {
      const Od = new Uint8Array(QW.bc.SkyImagesReadyBytes),
        md = new DataView(Od.buffer);
      return md.setUint16(0, dd, !0), md.setUint16(2, QW.bc.Failed, !0), Od
    }
    let th = Promise.resolve();
    async function oh(dd, Od) {
      let md;
      try {
        md = await (0, Rh.J)(dd)
      } catch (Rd) {
        throw new Wh.e("fetch", dd, {
          cause: Rd
        })
      }
      const Wd = th.then((() => async function(dd, Od) {
        const md = new Blob([dd.slice()]);
        let Wd = await createImageBitmap(md, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Od
        });
        const Fd = 1024 / Math.max(Wd.width, Wd.height);
        if (Fd < 1) {
          const dd = Wd;
          try {
            Wd = await createImageBitmap(dd, {
              resizeWidth: Math.max(1, Math.round(dd.width * Fd)),
              resizeHeight: Math.max(1, Math.round(dd.height * Fd)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            dd.close()
          }
        }
        return Wd
      }(md, Od)));
      let Fd;
      th = Wd.catch((() => {}));
      try {
        Fd = await Wd
      } catch (Rd) {
        throw new Wh.e("decode", dd, {
          cause: Rd
        })
      }
      return {
        id: (0, Wh.n)(Fd),
        width: Fd.width,
        height: Fd.height
      }
    }
    var Nh = md(2337),
      qh = md(35354),
      Hh = md(40828);
    const yh = Nh.e.length,
      bh = new Set([...Nh.e, "earth"]);

    function Th(dd) {
      const Od = [],
        md = [],
        Wd = (dd, Wd) => {
          if ("custom" === Wd.type) {
            md.push({
              id: dd,
              kind: QW.bc.KindCustom,
              set: Od.length,
              earth: null
            });
            const Fd = [Wd.px, Wd.py, Wd.pz, Wd.nx, Wd.ny, Wd.nz];
            Od.push({
              urls: (0, Hh.e)(Fd),
              orientation: "none"
            })
          } else md.push({
            id: dd,
            kind: QW.bc.KindEarth,
            set: 0,
            earth: Wd
          })
        };
      Nh.e.forEach(((Od, md) => {
        var Fd;
        Wd(md, null !== (Fd = ph(dd[Od])) && void 0 !== Fd ? Fd : qh.k[Od])
      }));
      const Fd = ph(dd.earth);
      "earth" === (null === Fd || void 0 === Fd ? void 0 : Fd.type) && Wd(yh, Fd);
      const Rd = new TextEncoder,
        Xd = [],
        Kd = [];
      for (const [Nd, qd] of Object.entries(dd)) {
        const dd = bh.has(Nd) ? null : ph(qd);
        if (null === dd) continue;
        const Od = Rd.encode(Nd);
        Od.length > 255 ? Kd.push(`Ignoring texture pack skybox ${Nd}, whose name is over 255 bytes`) : Xd.length === QW.bc.MaxAdded ? Kd.push(`Ignoring texture pack skybox ${Nd}, past the ${QW.bc.MaxAdded} skies a pack can add`) : (Xd.push(Od), Wd(QW.bc.AddedId, dd))
      }
      const hd = Od.length;
      Od.push({
        urls: qh.d.map((dd => qh.h + dd)),
        orientation: "none"
      }), Od.push({
        urls: [qh.i],
        orientation: "flipY"
      }), Od.push({
        urls: [qh.c],
        orientation: "flipY"
      });
      const vd = QW.bc.SkyTableHeaderBytes + md.length * QW.bc.SkyTableEntryBytes,
        Qd = new Uint8Array(vd + Xd.reduce(((dd, Od) => dd + 1 + Od.length), 0)),
        td = new DataView(Qd.buffer);
      td.setUint16(0, hd, !0), td.setUint16(2, hd + 1, !0), td.setUint16(4, hd + 2, !0), td.setUint16(6, md.length, !0), md.forEach(((dd, Od) => {
        const md = QW.bc.SkyTableHeaderBytes + Od * QW.bc.SkyTableEntryBytes;
        td.setUint16(md, dd.id, !0), td.setUint8(md + 2, dd.kind);
        const Wd = md + 4;
        dd.earth ? function(dd, Od, md) {
          const Wd = dd;
          let Fd = 0,
            Rd = 0;
          for (const [Xd, Kd] of Yh) {
            const dd = Wd[Xd];
            "number" === typeof dd && Number.isFinite(dd) && (Od.setFloat32(md + 4 * Kd, dd, !0), Fd |= 1 << Kd)
          }
          for (const [Xd, Kd, hd] of gh) {
            const dd = Wd[Xd];
            Array.isArray(dd) && 3 === dd.length && dd.every((dd => "number" === typeof dd && Number.isFinite(dd))) && (dd.forEach(((dd, Wd) => {
              Od.setFloat32(md + hd + 4 * Wd, dd, !0)
            })), Fd |= Kd)
          }
          wh.forEach(((dd, Rd) => {
            let [Xd, Kd] = dd;
            const hd = Wd[Xd];
            "number" === typeof hd && Number.isFinite(hd) && (Od.setFloat32(md + QW.t.CameraOffsetAt + 4 * Rd, hd, !0), Fd |= Kd)
          }));
          for (const [Xd, Kd] of ah) {
            const dd = Wd[Xd];
            null !== dd && void 0 !== dd && (Fd |= Kd, dd && (Rd |= Kd >>> 14))
          }
          Od.setUint32(md + QW.t.PresentAt, Fd, !0), Od.setUint8(md + QW.t.FlagsAt, Rd)
        }(dd.earth, td, Wd) : td.setUint16(Wd, dd.set, !0)
      }));
      let od = vd;
      for (const Nd of Xd) Qd[od] = Nd.length, Qd.set(Nd, od + 1), od += 1 + Nd.length;
      return {
        payload: Qd,
        sets: Od,
        leftOut: Kd
      }
    }

    function ph(dd) {
      if ("object" !== typeof dd || null === dd) return null;
      const Od = dd;
      if ("earth" === Od.type) return dd;
      return "custom" === Od.type && ["px", "py", "pz", "nx", "ny", "nz"].every((dd => {
        const md = Od[dd];
        return "string" === typeof md && md.length > 0
      })) ? dd : null
    }
    const Yh = [
        ["inclination", QW.t.Inclination],
        ["turbidity", QW.t.Turbidity],
        ["luminance", QW.t.Luminance],
        ["rayleigh", QW.t.Rayleigh],
        ["mieCoefficient", QW.t.MieCoefficient],
        ["mieDirectionalG", QW.t.MieDirectionalG],
        ["distance", QW.t.Distance],
        ["azimuth", QW.t.Azimuth]
      ],
      gh = [
        ["sunPosition", QW.t.SunPosition, QW.t.SunPositionAt],
        ["up", QW.t.Up, QW.t.UpAt],
        ["vertexTint", QW.t.VertexTint, QW.t.VertexTintAt]
      ],
      wh = [
        ["xCameraOffset", QW.t.CameraOffsetX],
        ["yCameraOffset", QW.t.CameraOffsetY],
        ["zCameraOffset", QW.t.CameraOffsetZ]
      ],
      ah = [
        ["useSunPosition", QW.t.UseSunPosition],
        ["dithering", QW.t.Dithering],
        ["infiniteDistance", QW.t.InfiniteDistance]
      ];

    function Eh(dd, Od, md) {
      const Wd = new Uh({
        writeCmd: dd,
        warn: Od,
        followPack: Jh(md, Od)
      });
      return Wd.start(), Wd
    }

    function Jh(dd, Od) {
      return md => {
        let Wd = () => {};
        const Fd = dd((dd => {
          Wd(), Wd = () => {}, null !== dd ? Wd = dd.subscribe((dd => {
            md(function(dd, Od, md) {
              if ("object" !== typeof dd || null === dd) return null;
              const Wd = dd.skyBoxes;
              if ("object" !== typeof Wd || null === Wd) return null;
              if ("player" === Od) return Wd;
              return Object.fromEntries(Object.entries(Wd).filter((dd => {
                let [Od, Wd] = dd;
                return !! function(dd) {
                  if ("object" !== typeof dd || null === dd) return !1;
                  return "earth" === dd.type || Object.entries(dd).every((dd => {
                    let [Od, md] = dd;
                    return "type" === Od || ("" === (Wd = md) || null !== function(dd) {
                      var Od, md, Wd;
                      return "string" !== typeof dd ? null : null !== (Od = null === (md = xh.exec(dd)) || void 0 === md || null === (Wd = md.groups) || void 0 === Wd ? void 0 : Wd.base64) && void 0 !== Od ? Od : null
                    }(Wd));
                    var Wd
                  }))
                }(Wd) || (md(`Ignoring texture pack skybox ${Od}, whose faces are not all data URLs`, null), !1)
              })))
            }(dd.pack, null === dd.gameSource ? "player" : "customGame", Od))
          })) : md(null)
        }));
        return () => {
          Fd(), Wd()
        }
      }
    }
    class Uh {
      constructor(dd) {
        var Od, md, Wd;
        this.host = dd, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Aq = !1, this.wait = null !== (Od = dd.wait) && void 0 !== Od ? Od : (dd, Od) => {
          setTimeout(Od, dd)
        }, this.loader = new Kh({
          loadImage: null !== (md = dd.loadImage) && void 0 !== md ? md : oh,
          MFd: null !== (Wd = dd.MFd) && void 0 !== Wd ? Wd : Wh.q,
          sendReady: dd => {
            this.queue.push({
              kind: QW.bc.SkyImagesReady,
              payload: dd
            })
          },
          onLoadFailed: (Od, md, Wd) => {
            dd.warn(`sky image set ${Od} (${md}) didn't load: the last sky stays`, Wd)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Fh.b, (() => {
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
        this.Aq = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(dd) {
        if (this.Aq) return;
        const Od = Th(dd);
        if (!(this.written && (md = this.written, Wd = Od, md.payload.length === Wd.payload.length && md.payload.every(((dd, Od) => dd === Wd.payload[Od])) && md.sets.length === Wd.sets.length && md.sets.every(((dd, Od) => {
            const md = Wd.sets[Od];
            return dd.orientation === md.orientation && dd.urls.length === md.urls.length && dd.urls.every(((dd, Od) => dd === md.urls[Od]))
          }))))) {
          var md, Wd;
          for (const dd of Od.leftOut) this.host.warn(dd, null);
          this.written = Od, this.loader.reset(Od.sets), this.queue = this.queue.filter((dd => dd.kind !== QW.bc.SkyImagesReady)), this.queue.push({
            kind: QW.bc.SkyTable,
            payload: Od.payload
          })
        }
      }
    }
    const xh = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Bh = md(2968),
      Sh = md(2963),
      sh = md(329),
      uh = md(202),
      Vh = md(3881),
      ih = md(3890),
      Ah = md(302),
      rh = md(310),
      Gh = md(3970),
      nh = md(3990),
      Lh = md(4004),
      Ph = md(127),
      zh = md(4087),
      ch = md(4081),
      jh = md(373),
      Dh = md(42807);
    class eh {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, XR.k)(rW.O, (dd => {
          this.onReply((0, RR.h)(rW.O, dd), performance.now())
        }))
      }
      onFrame(dd, Od) {
        null === this.id ? this.id = dd : dd !== this.id && (this.id = dd, this.sentMs = document.hidden ? null : Od)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(dd, Od) {
        dd === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Od - this.sentMs), this.sentMs = null)
      }
      take() {
        const dd = this.roundTripMs;
        return this.roundTripMs = null, dd
      }
      stop() {
        this.stopReplies()
      }
    }
    class Ih {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(dd, Od, md, Wd) {
        const Fd = dd - this.sampled >>> 0,
          Rd = Od - this.timed >>> 0,
          Xd = md - this.frameUs >>> 0,
          Kd = this.primed;
        return this.sampled = dd, this.timed = Od, this.frameUs = md, this.primed = !0, !(!Kd || Fd > 64 || Rd > 64) && (Wd && Xd <= 1e6 * Rd && (this.windowTimed += Rd, this.windowUs += Xd), Wd && Fd > 0)
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
    const lh = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Ch {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(dd, Od) {
        const md = Math.min(4096, this.count + Od);
        this.samples.fill(dd, this.count, md), this.count = md
      }
      clear() {
        this.count = 0
      }
      take() {
        const dd = this.count;
        if (this.count = 0, dd < 30) return lh;
        const Od = this.samples.subarray(0, dd).sort(),
          md = md => Od[Math.min(dd - 1, Math.floor(md * dd))];
        return {
          lagP50Ms: md(.5),
          lagP90Ms: md(.9)
        }
      }
    }
    class Zh {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Ch
      }
      onFrame(dd, Od) {
        const md = dd.headerWord(QW.I.Pacing),
          Wd = dd.headerWord(QW.I.PacingLagUs),
          Fd = (md >>> QW.Z.LagsShift) - (this.word >>> QW.Z.LagsShift) & QW.Z.CountMask,
          Rd = Fd > 0 ? (Wd - this.lagUs >>> 0) / Fd / 1e3 : 0,
          Xd = this.primed && Fd <= 64 && Rd <= 6e4;
        this.word = md, this.lagUs = Wd, this.primed = !0, Xd && Od && Fd > 0 && 0 !== (md & QW.Z.Defaulted) && this.lags.add(Rd, Fd)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(dd) {
        return dd ? this.lags.take() : (this.lags.clear(), lh)
      }
    }
    var kh = md(3955),
      fh = md(35473),
      Mh = md(3973),
      dv = md(42861),
      Ov = md(35471),
      mv = md(3895),
      Wv = md(3976);
    const Fv = {
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

    function Rv(dd) {
      return new Xv(dd)
    }
    class Xv {
      constructor(dd) {
        this.shell = dd, this.tracker = new ih.b, this.gpu = new Ih, this.pacing = new Zh, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new eh, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new kh.d(this.tracker, ((dd, Od, md, Wd) => {
          this.shell.mainStalled(dd, Od, md, Wd)
        }), (dd => this.shell.Zx(dd))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, fh.e)(dd.backend, dd.canvas, dd.adapterVendor), this.tracker.start((() => !dd.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, mv.c)("wasm", (() => {
          const {
            n: Od,
            sampleCount: md
          } = (0, dv.f)();
          return `${dd.backend}, quality steps aim at up to ${Wv.e.target.maxFps} fps, pixel n ${Od}, msaa ${md}`
        }), (Od => {
          Od.setLoadCounts(dd.readLoadCounts), this.frameDebug = Od
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(dd) {
        var Od;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(dd), null === (Od = this.frameDebug) || void 0 === Od || Od.animationFrame()
      }
      sendsWent(dd, Od, md) {
        this.ping.onFrame(dd.headerWord(QW.I.PingSent), Od), this.sendsStartMs = Od, this.sendsEndMs = md
      }
      frameRan(dd, Od, md, Wd) {
        var Fd;
        this.ping.onFrame(dd.headerWord(QW.I.PingSent), md);
        const Rd = this.tracker;
        this.pacing.onFrame(dd, Rd.isSampling());
        const Xd = dd.headerWord(QW.I.TickUs) / 1e3 + (0, YW.S)();
        var Kd;
        (Rd.FY(Xd), null === (Fd = this.frameDebug) || void 0 === Fd || Fd.wasmFrame(dd, Od, md, Wd, Rd.isSampling(), Xd), null !== this.game) && (null === (Kd = this.frameDebug) || void 0 === Kd || Kd.inGame());
        const hd = this.sendsStartMs >= Od ? this.sendsEndMs - this.sendsStartMs : 0,
          vd = Math.max(0, md - Od - Xd - hd);
        if ("drawn" !== Wd) return void("paced" === Wd ? (this.pacedCpuMs += vd, this.mainStall.paced()) : "skipped" === Wd && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(Od), Rd.onFrameStart(Od);
        this.gpu.onFrame(dd.headerWord(QW.I.GpuSampled), dd.headerWord(QW.I.GpuTimed), dd.headerWord(QW.I.GpuFrameUs), Rd.isSampling()) && Rd.onGpuSampleStarted(), Rd.onFrameCpu(vd + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Od)
      }
      framePaced() {
        var dd;
        this.mainStall.paced(), null === (dd = this.frameDebug) || void 0 === dd || dd.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const dd of this.timers) clearInterval(dd);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const dd = this.shell.joinedGame();
        if (dd !== this.game) {
          var Od;
          if (this.game = dd, null !== dd) null === (Od = this.frameDebug) || void 0 === Od || Od.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== dd
      }
      countFpsFrame(dd) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = dd
        }
        this.fpsFrames++;
        const Od = dd - this.fpsSpanStartMs;
        if (!(Od < Lh.b)) {
          if (!document.hidden) {
            const dd = 1e3 * this.fpsFrames / Od;
            this.firstSpanFps ??= dd, this.initialFps = this.firstSpanFps, this.fpsOverTime = dd
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = dd
        }
      }
      flush() {
        const dd = this.followGame(),
          {
            cpuFrameMs: Od,
            refreshHz: md,
            cpuBottleneck: Fd,
            frameIntervalCv: Rd,
            ...Xd
          } = this.tracker.snapshotAndReset(),
          Kd = this.shell.inGame(),
          hd = Kd && this.inGameAtLastFlush,
          vd = hd ? Xd : (0, Vh.i)(Xd),
          Qd = this.pacing.snapshotAndReset(hd);
        if (this.inGameAtLastFlush = Kd, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !dd || !this.shell.canSend()) return;
        const td = performance.now(),
          Nd = (0, nh.z)((0, nh.x)(td), this.unsentPage),
          Hd = function(dd, Od, md, Fd, Rd, Xd, Kd, hd) {
            var vd, Qd, td, od, Nd;
            const qd = {},
              {
                canvas: Hd
              } = dd,
              yd = (0, Gh.h)({
                refreshHz: Od.refreshHz,
                msaa: dd.msaa(),
                autoMsaaOff: (0, Ov.d)()
              });
            for (const bd of (0, Sh.e)()) {
              const Td = bd.name;
              let pd;
              if ((0, sh.M)(Td)) pd = (0, nh.d)(Td);
              else if ((0, nh.j)(Td)) pd = hd[Td];
              else if ((0, Gh.i)(Td)) pd = yd[Td];
              else switch (Td) {
                case "fps":
                  pd = Fd;
                  break;
                case "Wh":
                  pd = Rd;
                  break;
                case "hh":
                  pd = (0, Mh.A)((0, dv.f)().n);
                  break;
                case "Qh":
                  pd = Math.max(Hd.width, Hd.height);
                  break;
                case "Nh":
                  pd = Math.min(Hd.width, Hd.height);
                  break;
                case "qh":
                  pd = navigator.hardwareConcurrency || null;
                  break;
                case "Hh":
                  pd = (0, NR.getWebGpuSupported)();
                  break;
                case "yh":
                  pd = null === dd.fallbackReason ? null : Fv[dd.fallbackReason];
                  break;
                case "bh":
                  pd = Od.cpuFrameMs;
                  break;
                case "Th":
                  pd = Od.refreshHz;
                  break;
                case "ph":
                  pd = Od.cpuBottleneck;
                  break;
                case "Yh":
                  pd = Od.frameIntervalCv;
                  break;
                case "gh":
                  pd = Od.frameMs;
                  break;
                case "wh":
                  pd = Od.tickMs;
                  break;
                case "Bh":
                  pd = Od.mainBusyShare;
                  break;
                case "Sh":
                  pd = Od.mainProbeDelayMs;
                  break;
                case "ah":
                  pd = Od.longAnimationFramesPerMin;
                  break;
                case "Eh":
                  pd = Od.longAnimationFrameTimeShare;
                  break;
                case "Jh":
                  pd = Od.longAnimationFrameScriptShare;
                  break;
                case "Uh":
                  pd = Od.framesOver50msPerMin;
                  break;
                case "xh":
                  pd = Od.framesOver100msPerMin;
                  break;
                case "sh":
                  pd = Od.gpuPassMs;
                  break;
                case "uh":
                  pd = Od.gpuSubmitToDoneMs;
                  break;
                case "Vh":
                  pd = md.lagP50Ms;
                  break;
                case "ih":
                  pd = md.lagP90Ms;
                  break;
                case "Ch":
                  pd = (0, Bh.l)(Xd);
                  break;
                case "Kh":
                  pd = Kd;
                  break;
                case "Ah":
                case "rh":
                case "Gh":
                case "nh":
                case "Lh":
                case "Ph":
                case "zh":
                case "jh":
                case "Dh":
                case "eh":
                case "Ih":
                case "Zh":
                case "kh":
                case "fh":
                case "Mh":
                  pd = null;
                  break;
                case "Nv":
                  pd = (0, NR.getPlatformType)();
                  break;
                case "qv":
                  pd = (0, NR.getGpuVendor)();
                  break;
                case "Hv":
                  pd = Dh.e[dd.backend];
                  break;
                case "yv":
                  pd = (0, Ph.e)();
                  break;
                case "bv":
                  pd = (0, NR.getOperatingSystem)();
                  break;
                case "Tv":
                  pd = (0, NR.getTrafficSource)();
                  break;
                case "pv":
                  pd = null !== (vd = Wd.e.get("gameEntrySource")) && void 0 !== vd ? vd : uh.f;
                  break;
                case "Yv":
                  pd = null !== (Qd = Od.frameLimiter) && void 0 !== Qd ? Qd : uh.f;
                  break;
                case "gv":
                  pd = (0, Ah.g)();
                  break;
                case "wv":
                  pd = null !== (td = (0, rh.d)()) && void 0 !== td ? td : uh.f;
                  break;
                case "av":
                  pd = (0, Ah.c)(Hd.width, Hd.height);
                  break;
                case "Ev":
                  pd = (0, Sh.f)(-(new Date).getTimezoneOffset());
                  break;
                case "sv":
                  pd = null !== (od = dd.fallbackReason) && void 0 !== od ? od : uh.f;
                  break;
                case "iv":
                  pd = "ready";
                  break;
                case "Av":
                  pd = (0, NR.getSoftwareRenderer)();
                  break;
                case "Uv":
                  pd = (0, zh.d)();
                  break;
                case "xv":
                  pd = (0, ch.h)().replayState;
                  break;
                case "Bv":
                  pd = (0, ch.h)().replaySelection;
                  break;
                case "Sv":
                  pd = null !== dd.shaderPackReach() ? "true" : "false";
                  break;
                case "rv":
                  pd = null !== (Nd = dd.shaderPackReach()) && void 0 !== Nd && Nd.sceneDepth ? "true" : "false";
                  break;
                case "Gv": {
                  const Od = dd.shaderPackReach();
                  pd = null !== Od && void 0 !== Od && Od.sunShadow ? "all" : null !== Od && void 0 !== Od && Od.airShadow ? "air" : "none";
                  break
                }
                case "nv":
                  pd = jh.F;
                  break;
                case "ev":
                  pd = (0, nh.m)();
                  break;
                case "Jv": {
                  const Od = dd.lH();
                  pd = null === Od ? uh.f : String(Od);
                  break
                }
                case "uv":
                case "Vv":
                  pd = uh.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Td}`)
              }
              if (void 0 === pd) throw new Error(`Metric ${Td} has no value`);
              qd[Td] = pd
            }
            return qd
          }(this.shell, {
            cpuFrameMs: Od,
            refreshHz: md,
            cpuBottleneck: Fd,
            frameIntervalCv: Rd,
            ...vd
          }, Qd, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Nd);
        if (! function(dd, Od, md) {
            return (0, Xm.d)(), dd(qd.m.Send, Od, md)
          }(this.shell.writeCmd, od.pd, function(dd) {
            const Od = (0, zd.e)((0, Qm.g)(dd)),
              md = new Uint8Array(qd.ee.BYTES + Od.length);
            return new DataView(md.buffer).setUint16(0, Qm.c.AnalyticsUpdate, !0), md.set(Od, qd.ee.BYTES), md
          }(Hd))) return this.unsentPage = Nd, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Bh.h), (0, nh.t)(Hd, "wasm", td)
      }
    }
    var Kv = md(41306);

    function hv(dd, Od, md) {
      const Wd = new Map;
      return (0, Kv.d)(((dd, md, Wd) => Od.XK(dd, md, Wd)), ((Od, md, Fd) => {
        const Rd = `${Od},${md},${Fd}`;
        return Wd.has(Rd) || Wd.set(Rd, (0, ZO.c)(dd, Od, md, Fd)), Wd.get(Rd)
      }), md)
    }
    var vv = md(41310),
      Qv = md(42856);

    function tv(dd) {
      const Od = null !== dd && 0 !== (qd.q.playerFlags(dd.api.apiView, 0) & qd.Md.CursorAim);
      Od !== (0, Qv.n)() && (0, Qv.H)(Od, null !== dd)
    }

    function ov(dd) {
      return (0, AW.b)(rW.D, dd)
    }
    var Nv = md(42991);
    const qv = new Rd.g((dd => md(55023)(`./${dd}/${dd}Client`)));
    let Hv = null,
      yv = null;
    async function bv(dd) {
      Hv ??= md.e(33).then((() => md(40744))).then((dd => {
        yv = dd.createDefaultClientPlugins
      }), (dd => {
        throw Hv = null, dd
      })), await Promise.all([qv.load(dd), Hv])
    }

    function Tv(dd) {
      dd.load(new IO(QF, new NF))
    }
    let pv = !1;
    const Yv = new WeakMap;

    function gv(dd) {
      try {
        dd()
      } catch (Od) {
        console.error("[bloxd-wasm-client] a session-end step failed", Od)
      }
    }

    function wv(dd, Od) {
      ! function() {
        var dd, Od;
        KF.Howler.volume();
        const md = KF.Howler;
        null === (dd = md._autoResume) || void 0 === dd || dd.call(md), null === (Od = md._autoSuspend) || void 0 === Od || Od.call(md)
      }();
      const md = new Yd(Od.core, Od.memory, Od.audio);
      let Rd;
      try {
        Rd = new AF(md, Od.options)
      } catch (od) {
        return dd.crash(GF.z, od), null
      }(0, hd.e)(rF(md, Rd));
      const Qd = new eK({
        running: dd,
        api: md,
        core: Od.core,
        memory: Od.memory,
        staleOr: Od.staleOr,
        reportFault: Od.reportReplayFault,
        options: Od.options,
        sessionInfo: Od.sessionInfo,
        replayShaderPack: Od.replayShaderPack
      });
      (0, YW.F)();
      const td = new OF({
        api: md,
        tables: Rd,
        sessionInfo: Od.sessionInfo,
        gameFactory: dd => qv.loadedFactory(dd),
        defaultPlugins: (dd, Od, md, Wd) => {
          if (null === yv) throw new Error("The default plugins started before they loaded");
          return yv(dd, Od, md, Wd)
        },
        serverOptions: Od.options,
        onNetEvent: dd => {
          Qd.netEvent(dd), Od.onNetEvent(dd)
        },
        setLocalOptions: Od => {
          lK(dd, {
            changes: Od,
            reset: !1
          })
        },
        playSound: (dd, md, Wd, Fd, Rd, Xd, Kd) => Od.audio.playGame(dd, md, Wd, Fd, Rd, Xd, Kd),
        preloadSounds: dd => {
          Od.audio.preload(function(dd) {
            const Od = [];
            for (const md of dd) {
              const dd = rO(md);
              if (null !== dd)
                for (let md = dd[0]; md < dd[0] + dd[1]; md++) Od.push(md)
            }
            return Od
          }(dd))
        },
        onSessionEnd: () => {
          gv(Fd.q), gv(YF), gv((() => {
            Wd.e.set({
              openInGameMenuName: null
            })
          })), gv((() => {
            Od.audio.endSession()
          }))
        },
        beforeWrite: Od.beforeWrite,
        beforeOp: Od.beforeOp,
        cameraScreen: pF,
        showCameraFacing: gF,
        reportCameraFault: Od.reportCameraFault,
        onEventOverflow: Od.onEventOverflow,
        screenBandY: Kd.m,
        replayEntities: Qd.entityHooks,
        hasPackModel: Od.hasPackModel
      });
      return td.attach(dd), Yv.set(td, Qd), RF(td.items, Od.audio),
        function(dd) {
          dd.setClientFreeCameraGrant("isDev", !1);
          const Od = Od => {
            dd.setClientFreeCameraGrant("hasDeveloperRank", Od.playerHasRank("developer"))
          };
          (0, Xd.l)("userContextUpdated", Od)
        }(td), pv || (pv = !0, (0, Xd.l)("appManagerUpdated|openInGameMenuName", (dd => {
          !dd && (0, vd.q)().includes(vd.e) && (0, vd.u)(vd.e)
        }))), td
    }

    function av(dd) {
      try {
        dd.closeGame()
      } finally {
        var Od;
        null === (Od = Yv.get(dd)) || void 0 === Od || Od.stop(), Yv.delete(dd)
      }
    }
  },
  42861: (dd, Od, md) => {
    md.d(Od, {
      e: () => wd,
      f: () => od,
      h: () => pd,
      l: () => gd,
      n: () => Yd,
      o: () => Ed
    });
    var Wd = md(200),
      Fd = md(29),
      Rd = md(32),
      Xd = md(3973),
      Kd = md(1361),
      hd = md(35471),
      vd = md(339),
      Qd = md(107),
      td = md(191);

    function od() {
      var dd;
      const Od = (0, Xd.K)(),
        md = function(dd, Od) {
          return {
            sampleCount: dd.antiAliasing ? 4 : 1,
            n: (0, Xd.y)(dd.pixelScale, Od),
            pixelated: (0, Xd.u)(dd.pixelSmoothing)
          }
        }(Fd.e.get("clientEscMenuOptions"), Od);
      return md.sampleCount > 1 && (0, hd.d)() && (md.sampleCount = 1), md.n = null !== (dd = (0, hd.m)()) && void 0 !== dd ? dd : md.n, Wd.l.includes((0, Qd.getSoftwareRenderer)()) && (md.sampleCount = 1, md.n = Math.max(md.n, (0, Xd.y)(td.r.pixelScale, Od))), md
    }
    let Nd = null,
      qd = null;
    const Hd = new Set;
    let yd = null;

    function bd() {
      for (const dd of Hd) dd()
    }

    function Td() {
      if (null === Nd) {
        const dd = document.createElement("div");
        dd.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", dd.setAttribute("aria-hidden", "true"), document.body.append(dd), qd = dd, Nd = new Xd.b(dd, bd)
      }
      return Nd
    }

    function pd(dd) {
      const Od = (0, Xd.m)(),
        [md, Wd] = Td().size(Od);
      return (0, Xd.i)(md, Wd, Od, dd.n)
    }

    function Yd(dd) {
      var Od, md, Wd, Fd;
      const Rd = (0, Xd.m)(),
        [hd, vd] = Td().size(Rd);
      if (hd <= 0 || vd <= 0) return null;
      const Qd = (0, Xd.i)(hd, vd, Rd, od().n);
      return (0, Xd.e)(dd, Qd), dd.style.left = `${null!==(Od=null===(md=yd)||void 0===md?void 0:md.rect.left)&&void 0!==Od?Od:0}px`, dd.style.top = `${null!==(Wd=null===(Fd=yd)||void 0===Fd?void 0:Fd.rect.top)&&void 0!==Wd?Wd:0}px`, (0, Kd.cb)(dd.style, yd), Qd
    }

    function gd(dd) {
      yd = dd, Td(), (0, Kd.Z)(qd.style, dd, ""), bd()
    }

    function wd(dd, Od) {
      dd.style.imageRendering = (0, Xd.O)(Od.pixelated)
    }

    function Ed(dd, Od) {
      const md = (0, Rd.l)("appManagerUpdated|clientEscMenuOptions", (() => {
          wd(dd, od()), Od()
        })),
        Wd = (0, hd.A)(Od),
        Fd = (0, vd.m)(Od);
      return Td(), Hd.add(Od), () => {
        md(), Wd(), Fd(), Hd.delete(Od)
      }
    }
  },
  42929: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      f: () => Hd,
      g: () => hd,
      j: () => Yd,
      n: () => pd,
      q: () => gd
    });
    var Wd = md(2425);
    const Fd = 8388608,
      Rd = 1e3,
      Xd = 3e4;
    class Kd extends Error {
      constructor(dd, Od, md) {
        super(`${"fetch"===dd?"fetching":"decoding"} ${Od} failed`, md), this.stage = dd, this.source = Od, this.name = "ShellImageError"
      }
    }
    async function hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.J,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return Qd(await vd(dd, Od), "string" === typeof dd ? dd : null, md)
    }
    async function vd(dd, Od) {
      if ("string" !== typeof dd) return dd;
      try {
        return await Od(dd)
      } catch (md) {
        throw new Kd("fetch", dd, {
          cause: md
        })
      }
    }
    async function Qd(dd, Od, md) {
      try {
        const Od = new Blob([dd.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(Od, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: md
        })
      } catch (Wd) {
        throw new Kd("decode", null !== Od && void 0 !== Od ? Od : `${dd.byteLength} bytes`, {
          cause: Wd
        })
      }
    }
    let td = null;
    const od = new Map;
    let Nd = 1;
    const qd = new Map;

    function Hd(dd) {
      var Od;
      if (td = dd, null !== dd) {
        null === (Od = dd.ORd) || void 0 === Od || Od.call(dd, Td);
        for (const [Od, md] of od) yd(dd, Od, md);
        od.clear()
      }
    }

    function yd(dd, Od, md) {
      qd.has(Od) && void 0 !== dd.dRd ? dd.dRd(Od, md) : dd.fFd(Od, md)
    }

    function bd(dd, Od) {
      td ? yd(td, dd, Od) : od.set(dd, Od)
    }

    function Td(dd) {
      const Od = qd.get(dd);
      void 0 === Od || Od.decoding || (Od.decoding = !0, Qd(Od.bytes, Od.url, Od.orientation).then((md => {
        Od.decoding = !1, qd.get(dd) === Od ? (Od.failures = 0, bd(dd, md)) : md.close()
      }), (md => {
        Od.decoding = !1, Od.failures++, 1 === Od.failures && console.warn(`shellImages: decoding image ${dd} again failed; trying again until it decodes`, md), setTimeout((() => {
          Td(dd)
        }), Math.min(Rd * 2 ** (Od.failures - 1), Xd))
      })))
    }

    function pd(dd) {
      const Od = Nd++;
      return bd(Od, dd), Od
    }
    async function Yd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.J,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        Rd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Xd = "string" === typeof dd ? dd : null,
        Kd = await vd(dd, Od),
        hd = await Qd(Kd, Xd, md),
        {
          width: td,
          height: od
        } = hd,
        Hd = Nd++;
      return Rd && td * od * 4 >= Fd && qd.set(Hd, {
        bytes: Kd.slice(),
        url: Xd,
        orientation: md,
        decoding: !1,
        failures: 0
      }), bd(Hd, hd), {
        id: Hd,
        width: td,
        height: od
      }
    }

    function gd(dd) {
      var Od;
      qd.delete(dd);
      const md = od.get(dd);
      if (md) return md.close(), void od.delete(dd);
      null === (Od = td) || void 0 === Od || Od.MFd(dd)
    }
  },
  37659: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => vd,
      f: () => Xd,
      h: () => td
    });
    var Wd = md(37644),
      Fd = md(15);
    const Rd = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Xd(dd) {
      if (dd instanceof WebAssembly.RuntimeError) return !0;
      const Od = dd instanceof Error ? dd.stack : void 0;
      return "string" === typeof Od && Rd.test(Od)
    }

    function Kd(dd, Od, md) {
      var Fd;
      const Xd = dd instanceof Error ? dd.name : "thrown",
        Kd = (dd instanceof Error && null !== (Fd = dd.stack) && void 0 !== Fd ? Fd : "").split("\n").filter((dd => Rd.test(dd))).slice(0, 8).map((dd => dd.trim())),
        hd = null === Od ? "wasm memory unknown" : `wasm memory ${Math.round(Od/2**20)} MB`,
        vd = null === md.panic ? "" : `, panic: ${(0,Wd.l)(md.panic)}`,
        Qd = `${Xd}: ${dd instanceof Error?dd.message:String(dd)}`;
      return `${(0,Wd.q)(md.kind,md.refusedBytes)} ${Qd} (${hd})${vd}${Kd.length>0?` | ${Kd.join(" < ")}`:""}`
    }
    const hd = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function vd(dd) {
      var Od;
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(dd instanceof Error) || !hd.test(dd.message)) return {};
      if (!("detached" in md)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Fd.K)(null === (Od = (0, Fd.C)(md, "detached")) || void 0 === Od ? void 0 : Od.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Qd = 500;

    function td(dd) {
      let Od = "[object Object]";
      try {
        Od = String(dd)
      } catch {}
      if ("[object Object]" !== Od) return Od;
      try {
        var md, Wd;
        return null !== (md = null === (Wd = JSON.stringify(dd)) || void 0 === Wd ? void 0 : Wd.slice(0, Qd)) && void 0 !== md ? md : Od
      } catch {
        return Od
      }
    }
  },
  55023: (dd, Od, md) => {
    var Wd = {
      "./bedwars/bedwarsClient": [40870, 9],
      "./bridgeBattle/bridgeBattleClient": [40874, 10],
      "./buildAFactory2/buildAFactory2Client": [40016, 89, 86, 87, 258, 275, 11],
      "./classic/classicClient": [40879, 12],
      "./classic/smp2/smp2Client": [40884, 13],
      "./clutch/clutchClient": [40896, 14],
      "./containmentBreach/containmentBreachClient": [40900, 15],
      "./cooking/cookingClient": [41042, 16],
      "./defusal/defusalClient": [41051, 17],
      "./frontline/frontlineClient": [41058, 89, 86, 87, 18],
      "./goalRush/goalRushClient": [41077, 19],
      "./greenville/greenvilleClient": [41083, 181, 226, 20],
      "./hideseek/hideseekClient": [41108, 21],
      "./luckyBedwars/luckyBedwarsClient": [41110, 22],
      "./murderMystery/murderMysteryClient": [41115, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [41121, 24],
      "./oneBlock/oneBlockClient": [41127, 25],
      "./plots/plotsClient": [41151, 26],
      "./pvpCiv/pvpCivClient": [41228, 27],
      "./secretSanta/secretSantaClient": [41232, 28],
      "./shooting/shootingClient": [41241, 282, 29],
      "./skyIslands/skyIslandsClient": [41250, 30],
      "./skyblock/skyblockClient": [40070, 89, 267, 258, 181, 249, 31],
      "./tsunami/tsunamiClient": [41259, 32]
    };

    function Fd(dd) {
      if (!md.o(Wd, dd)) return Promise.resolve().then((() => {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }));
      var Od = Wd[dd],
        Fd = Od[0];
      return Promise.all(Od.slice(1).map(md.e)).then((() => md(Fd)))
    }
    Fd.keys = () => Object.keys(Wd), Fd.id = 55023, dd.exports = Fd
  },
  37644: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      h: () => Rd,
      l: () => hd,
      m: () => Xd,
      q: () => Fd
    });
    const Wd = /^alloc_failed (\d+) bytes$/;

    function Fd(dd, Od) {
      return Rd(dd, Od) ? `trap=alloc_failed ${Od} bytes` : `trap=${dd}`
    }

    function Rd(dd, Od) {
      return "unreachable" === dd && Od > 0
    }

    function Xd(dd, Od, md) {
      const Wd = function(dd) {
        return dd instanceof WebAssembly.RuntimeError ? /unreachable/i.test(dd.message) ? "unreachable" : /out of bounds/i.test(dd.message) ? "out_of_bounds" : "runtime_error" : (dd instanceof RangeError || dd instanceof Error && "InternalError" === dd.name) && /call stack|recursion/i.test(dd.message) ? "stack_overflow" : "js_error"
      }(dd);
      if ("unreachable" !== Wd) return {
        kind: Wd,
        panic: null,
        refusedBytes: 0
      };
      const Fd = Od(),
        Rd = md();
      return {
        kind: Wd,
        panic: Rd > 0 ? null : Fd,
        refusedBytes: Rd
      }
    }
    const Kd = 300;

    function hd(dd) {
      return dd.replace(/\s*\n\s*/g, " / ").slice(0, Kd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);