export const id = 69;
export const ids = [69];
export const modules = {
  40341: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Hb
    });
    var eb = Mb(29);

    function Hb(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function pb(bb, wb) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([Mb.e(128), Mb.e(129), Mb.e(118), Mb.e(120), Mb.e(248)]).then((() => Mb(53958))).then((Mb => {
        let {
          runClientGameMessage: eb
        } = Mb;
        eb(bb, wb)
      })).catch((wb => {
        console.error(`Game message ${bb} failed`, wb)
      })) : eb.k.iI("showPetUi", wb) : eb.k.iI("refetchCode")
    }
  },
  10207: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => Vb,
      k: () => gb,
      o: () => lb
    });
    var eb = Mb(29);
    const Hb = "touchSprintChanged";
    let pb = !0;

    function Vb() {
      return pb
    }

    function gb(bb) {
      bb !== pb && (pb = bb, eb.k.iI(Hb, bb))
    }

    function lb(bb, wb) {
      return null !== bb && null !== wb && bb > wb
    }
  },
  54816: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      f: () => Hb
    });
    const eb = ["recording", "freecam", "keyframe"];

    function Hb() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  35266: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      d: () => lb
    });
    var eb = Mb(26);
    const Hb = 24,
      pb = "farNametags",
      Vb = 1e5;

    function gb() {
      var bb;
      return null === (bb = eb.c.get("showDistantNametags")) || void 0 === bb || bb
    }

    function lb() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(pb),
          wb = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(wb) && wb >= 0 ? Math.min(wb, Vb) : null
      }()) && void 0 !== bb ? bb : gb() ? 0 : Hb
    }
  },
  54811: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      blockIdOf: () => lL.d,
      clearWasmCameraScreen: () => sH,
      creativeItemIds: () => Be.creativeItemIds,
      decodeMapSettings: () => OL,
      drainTextRerasters: () => wl.c,
      enchantmentPerksOf: () => Be.enchantmentPerksOf,
      endGameHost: () => XL,
      followCursorAim: () => IL,
      followMenuPrefs: () => Bp,
      loadAudio: () => BL,
      loadClientGame: () => FL,
      loadTextIcons: () => wl.e,
      rasterText: () => bl.g,
      readBoardToEdit: () => gL,
      readDrawCensus: () => UL.d,
      setTextHost: () => wl.n,
      setTextLocalPlayer: () => wl.r,
      showInCreativeInvenOf: () => Be.showInCreativeInvenOf,
      startGameHost: () => zL,
      startShellAnalytics: () => HL,
      startSkyFeed: () => xl,
      textChanged: () => wl.x,
      warmText: () => bl.l,
      wasmCameraScreen: () => BH
    });
    Mb(37791);
    var eb = Mb(26),
      Hb = Mb(38032),
      pb = Mb(40517),
      Vb = Mb(29),
      gb = Mb(4788),
      lb = Mb(38024),
      Lb = Mb(1373),
      Ib = Mb(648),
      Ob = Mb(39463),
      Ub = Mb(5678),
      tb = Mb(42303),
      Cb = Mb(42253);
    const Eb = Cb.zb / 4,
      Fb = Cb.l.PlaySound,
      Bb = Cb.l.SoundReset,
      sb = Ub.W.ReplayFailed,
      mb = Ub.W.RecorderEvent;
    class hb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = bb, this.memory = wb, this.audio = Mb, this.serverIds = new Int32Array(256).fill(Cb.Sc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Cb.q.BYTES)), this.renderPtr = 0, this.qO = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new Cb.T(bb, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.LVb(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(bb, wb) {
        const Mb = this.eventView();
        return new Uint8Array(Mb.buffer, Mb.byteOffset + bb, wb)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Cb.q.localId(this.apiView, 0)
      }
      localDeaths() {
        return Cb.q.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const bb = this.apiView,
          wb = Cb.q.entRenderPtr(bb, 0),
          Mb = Cb.q.entVisPtr(bb, 0),
          eb = Cb.q.entCapacity(bb, 0);
        if (wb !== this.renderPtr || Mb !== this.visPtr || eb !== this.qO || this.renderBuffer !== this.buffer) {
          this.renderPtr = wb, this.visPtr = Mb, this.qO = eb, this.renderBuffer = this.buffer;
          const bb = this.memoryView(Float32Array, wb, eb * Eb, "the render array"),
            Hb = this.memoryView(Uint8Array, Mb, eb, "the visibility array");
          this.renderCapacity = bb && Hb ? eb : 0, this.render = bb && Hb ? bb : new Float32Array(0), this.vis = bb && Hb ? Hb : new Uint8Array(0)
        }
      }
      memoryView(bb, wb, Mb, eb) {
        try {
          return (0, tb.o)(bb, this.memory().buffer, wb, Mb, eb)
        } catch (Hb) {
          return this.keepCorruption(Hb), null
        }
      }
      memoryData(bb, wb, Mb, eb) {
        try {
          return (0, tb.e)(this.memory().buffer, bb, wb, Mb, eb)
        } catch (Hb) {
          return this.keepCorruption(Hb), null
        }
      }
      scratchData(bb, wb) {
        const Mb = this.scratch(),
          eb = this.scratchView;
        return (null === eb || void 0 === eb ? void 0 : eb.buffer) === this.memory().buffer && eb.byteOffset === Mb && eb.byteLength >= bb ? eb : (this.scratchView = this.memoryData(Mb, bb, 8, wb), this.scratchView)
      }
      reportCorruption(bb) {
        this.keepCorruption(new tb.d(bb))
      }
      keepCorruption(bb) {
        if (!(bb instanceof tb.d)) throw bb;
        this.corruption ??= bb
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(bb, wb, Mb) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: eb,
          len: Hb
        } = bb;
        this.eventsPtr = eb, this.eventsLen = Hb, this.eventsBuffer = null;
        const pb = this.eventView();
        for (let Lb = 0; Lb < Hb;) {
          const bb = pb.getUint32(Lb, !0),
            Mb = 65535 & bb,
            eb = bb >>> 16,
            Hb = Lb + Ub.V;
          if (Mb === Cb.l.EntitySpawned) {
            var Vb;
            if (eb !== Cb.Gb.BYTES) throw Kb(Mb, Lb, eb);
            const bb = Cb.Gb.serverId(pb, Hb);
            this.spawned(bb, Cb.Gb.index(pb, Hb), Cb.Gb.kind(pb, Hb)), null === (Vb = wb.entityAdded) || void 0 === Vb || Vb.call(wb, bb)
          } else if ((Mb === Cb.l.ChunkSlot || Mb === Cb.l.EntityInfoChanged) && !(0, Cb.de)(Mb, pb, Hb, eb, wb)) throw Kb(Mb, Lb, eb);
          Lb = Hb + (0, Ub.Be)(eb)
        }
        try {
          var gb;
          null === (gb = wb.afterPrescan) || void 0 === gb || gb.call(wb), this.throwCorruption(), !Mb() && this.dispatch(bb, wb, Mb) && (this.throwCorruption(), this.applyListener(), wb.afterWalk(bb.kind)), this.throwCorruption()
        } catch (lb) {
          throw lb instanceof tb.d && (this.corruption ??= lb), lb
        } finally {
          Mb() || null !== this.corruption || this.applyDespawns(Hb, wb)
        }
      }
      applyDespawns(bb, wb) {
        const Mb = this.eventView();
        for (let Hb = 0; Hb < bb;) {
          const bb = Mb.getUint32(Hb, !0),
            pb = Hb + Ub.V;
          if ((65535 & bb) === Cb.l.EntityDespawned && bb >>> 16 === Cb.Gb.BYTES) {
            const bb = Cb.Gb.serverId(Mb, pb);
            var eb;
            if (this.despawned(bb, Cb.Gb.index(Mb, pb))) null === (eb = wb.entityRemoved) || void 0 === eb || eb.call(wb, bb)
          }
          Hb = pb + (0, Ub.Be)(bb >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(bb, wb, Mb) {
        const {
          len: eb,
          net: Hb,
          netOffsets: pb
        } = bb;
        let Vb = this.eventView(),
          gb = 0;
        for (let xb = 0; xb < eb;) {
          const bb = Vb.getUint32(xb, !0),
            eb = 65535 & bb,
            rb = bb >>> 16,
            Rb = xb + Ub.V;
          let Db = !1;
          if (gb < Hb.length && pb[gb] === xb) wb.netEvent(Hb[gb]), gb++, Db = !0;
          else if (eb === Ub.W.LocalPlayerBound) {
            var lb;
            if (rb !== Ub.Fb) throw Kb(eb, xb, rb);
            null === (lb = wb.localPlayerBound) || void 0 === lb || lb.call(wb, Vb.getInt32(Rb, !0)), Db = !0
          } else if (eb === Ub.W.LocalHurt) {
            var Lb;
            if (rb !== Ub.Db) throw Kb(eb, xb, rb);
            null === (Lb = wb.localHurt) || void 0 === Lb || Lb.call(wb, Vb.getInt32(Rb, !0), Vb.getFloat32(Rb + 4, !0), Vb.getUint32(Rb + 8, !0)), Db = !0
          } else if (eb === Ub.W.AttackHit) {
            var Ib;
            if (rb !== Ub.e) throw Kb(eb, xb, rb);
            const bb = Vb.getFloat32(Rb, !0),
              Mb = Vb.getFloat32(Rb + 4, !0),
              Hb = Vb.getFloat32(Rb + 8, !0),
              pb = Vb.getUint32(Rb + 12, !0);
            null === (Ib = wb.attackHit) || void 0 === Ib || Ib.call(wb, bb, Mb, Hb, 0 !== (pb & Ub.k.Crit), 0 !== (pb & Ub.k.HitSelf))
          } else if (eb === Ub.W.PhysicsType) {
            var Ob;
            if (rb !== Ub.fc) throw Kb(eb, xb, rb);
            null === (Ob = wb.physicsType) || void 0 === Ob || Ob.call(wb, Vb.getUint32(Rb, !0), Vb.getInt32(Rb + 4, !0)), Db = !0
          } else if (eb === Ub.W.VehicleEffect) {
            var tb;
            const bb = jb(Vb, Rb, rb);
            if (null === bb) throw Kb(eb, xb, rb);
            null === (tb = wb.vehicleEffect) || void 0 === tb || tb.call(wb, bb.op, bb.name, bb.icon, bb.level, bb.durationMs), Db = !0
          } else if (eb === Ub.W.ZoomChanged) {
            var Eb;
            if (rb !== Ub.ce) throw Kb(eb, xb, rb);
            null === (Eb = wb.zoomChanged) || void 0 === Eb || Eb.call(wb, Vb.getFloat32(Rb, !0), Vb.getUint8(Rb + 4)), Db = !0
          } else if (eb === Ub.W.ZoomDisabled) {
            var hb;
            if (0 !== rb) throw Kb(eb, xb, rb);
            null === (hb = wb.zoomDisabled) || void 0 === hb || hb.call(wb), Db = !0
          } else if (eb === Ub.W.BhopDisabled) {
            var zb;
            if (0 !== rb) throw Kb(eb, xb, rb);
            null === (zb = wb.bhopDisabled) || void 0 === zb || zb.call(wb), Db = !0
          } else if (eb === Ub.W.GameCamera) {
            var Xb;
            null === (Xb = wb.gameCamera) || void 0 === Xb || Xb.call(wb, new Uint8Array(Vb.buffer, Vb.byteOffset + Rb, rb).slice()), Db = !0
          } else if (eb === Cb.l.ChunkSlot || eb === Cb.l.EntityInfoChanged);
          else if (eb >= Fb && eb <= Bb) {
            if (this.audio && !this.audio.onAudioEvent(eb, Vb, Rb, rb)) throw Kb(eb, xb, rb)
          } else if (eb >= sb && eb <= mb) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(eb, Vb, Rb, rb)) throw Kb(eb, xb, rb);
              Db = !0
            }
          } else if (eb >= Cb.hd && eb <= Cb.ld && eb !== Ub.W.EnvLighting) {
            if (!(0, Cb.de)(eb, Vb, Rb, rb, wb)) throw Kb(eb, xb, rb);
            Db = !0
          }
          if (Db) {
            if (Mb()) return !1;
            Vb = this.eventView()
          }
          xb = Rb + (0, Ub.Be)(rb)
        }
        return !Mb()
      }
      applyListener() {
        var bb;
        if (!this.audio) return;
        const wb = Cb.q.audioViewPtr(this.apiView, 0),
          Mb = this.memory().buffer;
        let eb = this.audioView;
        (null === (bb = eb) || void 0 === bb ? void 0 : bb.buffer) === Mb && eb.byteOffset === wb || (eb = (0, tb.e)(Mb, wb, Cb.t.BYTES, 8, "the audio view"), this.audioView = eb), eb && this.audio.applyListener(eb)
      }
      indexOf(bb) {
        return this.indexById.get("number" === typeof bb ? bb : +bb)
      }
      isLocal(bb) {
        return bb !== Cb.Sc && bb === Cb.q.localId(this.apiView, 0)
      }
      Qm(bb) {
        const wb = [0, 0, 0];
        return this.readPosition("number" === typeof bb ? bb : +bb, wb) ? wb : null
      }
      readPosition(bb, wb) {
        const Mb = this.apiView;
        if (void 0 !== this.indexById.get(bb) && this.isLocal(bb)) {
          for (let bb = 0; bb < 3; bb++) wb[bb] = Cb.q.localPos(Mb, 0, bb);
          return !0
        }
        return this.readDrawnPosition(bb, wb)
      }
      readDrawnPosition(bb, wb) {
        const Mb = this.apiView,
          eb = this.indexById.get(bb);
        if (void 0 === eb || eb >= this.renderCapacity) return wb[0] = wb[1] = wb[2] = NaN, !1;
        const Hb = eb * Eb;
        for (let pb = 0; pb < 3; pb++) wb[pb] = this.render[Hb + pb] + Cb.q.origin(Mb, 0, pb);
        return !0
      }
      checkValid(bb) {
        return void 0 !== this.indexOf(bb)
      }
      isAlive(bb) {
        const wb = this.indexOf(bb);
        if (void 0 === wb) return null;
        if (this.ensureViews(), wb >= this.renderCapacity) return null;
        const Mb = this.vis[wb];
        return 0 === Mb ? null : 0 !== (Mb & Cb.be.Alive)
      }
      getEntityType(bb) {
        const wb = this.indexOf(bb);
        return void 0 === wb ? this.isLocal("number" === typeof bb ? bb : +bb) ? "Player" : null : Xb(this.kinds[wb])
      }
      spawned(bb, wb, Mb) {
        if (wb >= 1048576) throw new tb.d(`entity ${bb} spawned at index ${wb}`);
        this.ensureIndex(wb), this.serverIds[wb] === bb && null !== this.idStr[wb] || (this.idStr[wb] = String(bb)), this.serverIds[wb] = bb, this.kinds[wb] = Mb, this.indexById.set(bb, wb)
      }
      despawned(bb, wb) {
        let Mb = !1;
        return this.indexById.get(bb) === wb && (this.indexById.delete(bb), Mb = !0), wb < this.serverIds.length && this.serverIds[wb] === bb && (this.serverIds[wb] = Cb.Sc, this.kinds[wb] = 0, this.idStr[wb] = null), Mb
      }
      ensureIndex(bb) {
        const wb = this.serverIds.length;
        if (bb < wb) return;
        let Mb = 2 * wb;
        for (; Mb <= bb;) Mb *= 2;
        const eb = new Int32Array(Mb).fill(Cb.Sc);
        eb.set(this.serverIds), this.serverIds = eb;
        const Hb = new Uint16Array(Mb);
        Hb.set(this.kinds), this.kinds = Hb;
        for (let pb = wb; pb < Mb; pb++) this.idStr.push(null)
      }
      eventView() {
        const bb = this.memory().buffer;
        return bb !== this.eventsBuffer && (this.eventsBuffer = bb, this.events = new DataView(bb, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const bb = this.memory().buffer;
        this.buffer = bb, this.viewPtr < 0 && (this.viewPtr = this.core.IVb()), this.view = new DataView(bb, this.viewPtr, Cb.q.BYTES), this.rereadDirectory()
      }
    }

    function zb(bb) {
      return bb >>> Cb.b === Cb.o.Item
    }

    function Xb(bb) {
      var wb, Mb;
      const eb = bb & Cb.d;
      switch (bb >>> Cb.b) {
        case Cb.o.Lifeform:
          return null !== (wb = Ib.j[eb]) && void 0 !== wb ? wb : null;
        case Cb.o.Throwable:
          return null !== (Mb = Ob.n[eb]) && void 0 !== Mb ? Mb : null;
        case Cb.o.Mesh:
          return "Mesh";
        case Cb.o.Audio:
          return "AudioEntity";
        case Cb.o.Item:
          return "Item";
        default:
          return null
      }
    }
    const xb = new TextDecoder;

    function jb(bb, wb, Mb) {
      if (Mb < Ub.Fd.HEAD_BYTES) return null;
      const eb = bb.getUint32(wb, !0),
        Hb = bb.getUint32(wb + 20, !0),
        pb = bb.getUint32(wb + 24, !0),
        Vb = Ub.Fd.HEAD_BYTES + (0, Ub.Be)(Hb);
      if (eb !== Ub.Fd.UPDATE && eb !== Ub.Fd.REMOVE || Hb > Mb || Vb + pb > Mb) return null;
      const gb = (Mb, eb) => xb.decode(new Uint8Array(bb.buffer, bb.byteOffset + wb + Mb, eb)),
        lb = bb.getFloat64(wb + 12, !0);
      return {
        op: eb,
        level: bb.getFloat64(wb + 4, !0),
        durationMs: Number.isNaN(lb) ? null : lb,
        name: gb(Ub.Fd.HEAD_BYTES, Hb),
        icon: gb(Vb, pb)
      }
    }

    function Kb(bb, wb, Mb) {
      return new tb.d(`event ${bb} at ${wb} of ${Mb} bytes`)
    }
    var rb = Mb(7634),
      Rb = Mb(382),
      Db = Mb(1301),
      cb = Mb(40514),
      Yb = Mb(40341),
      Zb = Mb(2153),
      fb = Mb(42688),
      Ab = Mb(2107),
      Wb = Mb(37947),
      Jb = Mb(40555),
      Sb = Mb(40542),
      Nb = Mb(40530),
      vb = Mb(42284),
      Qb = Mb(3479),
      Gb = Mb(40553);

    function qb(bb) {
      if (!(0, Gb.f)(bb)) return null;
      const wb = Number(bb);
      return (0 | wb) === wb ? wb : null
    }
    class ab {
      constructor(bb) {
        this.api = bb, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Nb.o)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.IM = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = Cb.Sc, this.localName = String(Cb.Sc)
      }
      readView() {
        this.defaultPoseRead = !1, this.IM = null;
        const bb = this.api.queries.directorView() >= Cb.qb.BYTES ? this.api.scratchData(Cb.qb.BYTES, "the director's view") : null;
        null !== bb && (this.defaultFov = (0, Ab.E)(Cb.qb.fov(bb, 0)), this.baseFov = (0, Ab.E)(Cb.qb.baseFov(bb, 0)), this.aspect = Cb.qb.aspect(bb, 0), this.bodyHeading = Cb.qb.bodyHeading(bb, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(bb) {
        this.viewHeading = bb
      }
      get localPlayerId() {
        const bb = Cb.q.localId(this.api.apiView, 0);
        return bb !== this.localId && (this.localId = bb, this.localName = String(bb)), this.localName
      }
      getEntityPosition(bb) {
        return this.readEntity(bb) ? this.entityFeet : null
      }
      getEntityAimPoint(bb) {
        return this.readEntity(bb) ? this.entityAim : null
      }
      getEntityHeading(bb) {
        const wb = qb(bb);
        if (null === wb) return null;
        const Mb = Cb.q.localId(this.api.apiView, 0);
        return wb === Mb && Mb !== Cb.Sc ? this.viewHeading : this.readEntity(bb) ? this.entityHeading : null
      }
      getEntityPitch(bb) {
        return this.readEntity(bb) ? this.entityPitch : null
      }
      getEntityLookHeading(bb) {
        return this.readEntity(bb) ? this.entityLookHeading : null
      }
      raycastTerrain(bb, wb, Mb) {
        const eb = this.api.queries.cameraSweep(bb[0], bb[1], bb[2], wb[0], wb[1], wb[2], Mb);
        return eb < Mb - 1e-6 ? eb : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const bb = this.defaultPose;
        bb.fov = this.defaultFov;
        const wb = this.api.queries.directorDefaultPose() >= Cb.jb.BYTES ? this.api.scratchData(Cb.jb.BYTES, "the director's default pose") : null;
        if (null === wb) return bb;
        for (let Mb = 0; Mb < 3; Mb++) bb.position[Mb] = Cb.jb.eye(wb, 0, Mb);
        return bb.heading = Cb.jb.heading(wb, 0), bb.pitch = Cb.jb.pitch(wb, 0), bb
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
      readEntity(bb) {
        const wb = qb(bb);
        if (null === wb) return !1;
        if (wb === this.IM) return this.entityLive;
        this.IM = wb;
        const Mb = this.api.queries.directorEntity(wb) >= Cb.kb.BYTES ? this.api.scratchData(Cb.kb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== Mb, null === Mb) return !1;
        for (let pb = 0; pb < 3; pb++) this.entityFeet[pb] = Cb.kb.feet(Mb, 0, pb), this.entityAim[pb] = this.entityFeet[pb];
        this.entityAim[1] += Cb.kb.eyeHeight(Mb, 0), this.entityHeading = Cb.kb.heading(Mb, 0);
        const eb = Cb.kb.pitch(Mb, 0);
        this.entityPitch = Number.isNaN(eb) ? null : eb;
        const Hb = Cb.kb.lookHeading(Mb, 0);
        return this.entityLookHeading = Number.isNaN(Hb) ? null : Hb, !0
      }
    }
    const ib = {
        mode: "default"
      },
      ub = {
        show: () => {},
        clear: () => {}
      };

    function db() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Pb {
      constructor(bb) {
        this.options = bb, this.XO = void 0, this.director = void 0, this.latest = ib, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          DW: 0,
          cW: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = Cb.ib.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.wF = new Int32Array(3 * Cb.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Cb.Md), this.XO = new ab(bb.api), this.director = new Sb.b(this.XO)
      }
      settingsChanged(bb) {
        let wb = ib;
        if (bb.length > 0) try {
          wb = (0, vb.d)(bb)
        } catch {}
        this.latest = wb, this.pending = wb
      }
      call(bb, wb, Mb, eb, Hb, pb) {
        var Vb, gb;
        this.holding = !1;
        const lb = this.answeredPose && 0 === (eb & Cb.nb.Held);
        let Lb;
        try {
          Lb = this.answer(bb, wb, Mb, eb, Hb, pb), this.threw = !1
        } catch (Ib) {
          this.options.reportError(Ib);
          Lb = !this.threw && this.answeredPose && !lb ? this.sendLastPose() : Cb.ib.None, this.threw = !0
        }
        return this.answeredPose = Lb !== Cb.ib.None, this.holding = this.answeredPose && !lb, null === (Vb = (gb = this.options).showFacing) || void 0 === Vb || Vb.call(gb, this.holding ? this.facing : null), Lb
      }
      holdsView() {
        return this.holding
      }
      answer(bb, wb, Mb, eb, Hb, pb) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          XO: Vb
        } = this;
        Vb.readView();
        if (0 !== (eb & Cb.nb.Held) || Vb.setViewHeading((0, Wb.u)(Vb.bodyHeading)), void 0 !== this.pending) {
          const bb = this.pending;
          this.pending = void 0, this.director.setSettings(bb), this.syncShownSettings()
        }
        this.readLook((0, Qb.e)(wb), (0, Qb.e)(Mb), eb, (0, Qb.e)(Hb), (0, Qb.e)(pb));
        const gb = this.director.update(bb / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !gb) return Cb.ib.None;
        const lb = this.lastPose;
        return (0, Nb.k)(gb.position, lb.position), lb.heading = (0, Wb.u)(gb.heading), lb.pitch = (0, Wb.f)(gb.pitch), lb.fovRadians = (0, Ab.o)(gb.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return Cb.ib.Pose;
        switch (this.facing) {
          case "camera":
            return Cb.ib.FaceCamera;
          case "cursor":
            return Cb.ib.FaceCursor;
          default:
            return Cb.ib.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: bb,
          heading: wb,
          pitch: Mb,
          fovRadians: eb
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(bb[0], bb[1], bb[2], wb, Mb, eb) ? Cb.ib.None : this.lastAnswer
      }
      afterFrame(bb) {
        bb ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = ib, this.idle()
      }
      restart() {
        const bb = this.holding;
        this.idle(), this.holding = bb
      }
      idle() {
        var bb, wb;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Sb.b(this.XO), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (bb = (wb = this.options).showFacing) || void 0 === bb || bb.call(wb, null), this.setCentres(0)
      }
      syncShownSettings() {
        const bb = this.director.getSettings();
        if (bb === this.shownSettings) return;
        this.shownSettings = bb;
        const wb = (0, Jb.f)(bb);
        this.facing = wb.facing, this.mouseTurns = wb.mouseTurns
      }
      readLook(bb, wb, Mb, eb, Hb) {
        const pb = this.look,
          Vb = 0 !== (Mb & Cb.nb.LookPointed);
        if (null === this.mouseTurns && !Vb) return pb.DW = 0, pb.cW = 0, void(pb.pointedAt = void 0);
        let gb;
        Vb && (this.pointedAt.heading = eb, this.pointedAt.pitch = Hb, gb = this.pointedAt);
        const {
          XO: lb
        } = this;
        lb.setViewHeading((0, Jb.e)(lb.getViewHeading(), bb, wb, gb, "look" === this.mouseTurns, pb))
      }
      writeCentres(bb) {
        const wb = this.next,
          Mb = Math.min(bb.length, Cb.Md);
        for (let eb = 0; eb < Mb; eb++)
          for (let Mb = 0; Mb < 3; Mb++) wb[3 * eb + Mb] = Math.floor(bb[eb][Mb] / Cb.y);
        this.setCentres(Mb)
      }
      setCentres(bb) {
        const {
          wF: wb,
          next: Mb
        } = this;
        let eb = bb === this.centresLen;
        for (let Hb = 0; eb && Hb < 3 * bb; Hb++) eb = wb[Hb] === Mb[Hb];
        eb || (wb.fill(0), wb.set(Mb.subarray(0, 3 * bb)), this.centresLen = bb, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const bb = this.options.cmd();
        null !== bb && (0, Cb.wf)(bb, 0, this.wF, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var bb, wb, Mb;
        return null !== (bb = null === (wb = (Mb = this.options).screen) || void 0 === wb ? void 0 : wb.call(Mb)) && void 0 !== bb ? bb : ub
      }
      hidden() {
        var bb;
        return (null !== (bb = this.options.isPageHidden) && void 0 !== bb ? bb : db)()
      }
      now() {
        var bb, wb, Mb;
        return null !== (bb = null === (wb = (Mb = this.options).now) || void 0 === wb ? void 0 : wb.call(Mb)) && void 0 !== bb ? bb : performance.now()
      }
    }
    var nb = Mb(40446),
      yb = Mb(42413);
    const ob = Cb.y * Cb.y * Cb.y,
      Tb = Math.log2(Cb.y),
      kb = Cb.y - 1,
      bw = 65535,
      ww = Cb.L.BYTES / 4,
      Mw = new Uint16Array(ob);

    function ew(bb, wb, Mb) {
      return bb * Cb.y * Cb.y + wb * Cb.y + Mb
    }
    class Hw {
      constructor(bb) {
        this.chunk = bb
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(bb, wb, Mb) {
        return ew(bb, wb, Mb)
      }
    }
    class pw {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Vw {
      constructor(bb, wb, Mb, eb) {
        this.table = bb, this.slot = wb, this.generation = Mb, this.epoch = eb, this.GU = new Hw(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Mw, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get dC() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get vt() {
        const bb = this.gameVoxels(),
          wb = this.layers ??= new Uint16Array(Cb.y);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Mb = 0; 0 !== this.staleLayers; Mb++) {
          const eb = 1 << Mb;
          0 !== (this.staleLayers & eb) && (this.staleLayers &= ~eb, wb[Mb] = gw(bb, Mb))
        }
        return wb
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const bb = this.voxelData(),
          wb = this.writes;
        if (null === wb || 0 === wb.ids.size) return bb;
        if (wb.from !== bb) {
          const Mb = wb.patched ??= new Uint16Array(ob);
          Mb.set(bb);
          for (const [bb, eb] of wb.ids) Mb[bb] = eb;
          wb.from = bb
        }
        return wb.patched
      }
      written(bb) {
        var wb;
        return null === (wb = this.writes) || void 0 === wb ? void 0 : wb.ids.get(bb)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(bb, wb, Mb) {
        const eb = this.writes ??= new pw;
        eb.ids.set(bb, wb), Mb && eb.cleared.add(bb), null !== eb.from && (eb.patched[bb] = wb);
        const Hb = 1 << (bb >> Tb & kb);
        eb.layers |= Hb, this.staleLayers |= Hb, this.writeCount++
      }
      clearWrites() {
        const bb = this.writes;
        null !== bb && (this.staleLayers |= bb.layers, bb.ids.clear(), bb.cleared.clear(), bb.layers = 0, bb.from = null)
      }
      dataCleared(bb) {
        var wb;
        return !0 === (null === (wb = this.writes) || void 0 === wb ? void 0 : wb.cleared.has(bb))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const bb = this.table.slotWords(),
          wb = this.slot * ww;
        if (this.epoch !== this.table.epoch || wb + ww > bb.length || 0 === bb[wb + 3] || bb[wb + 2] !== this.generation) return this.data = Mw, this.dataPtr = 0, Mw;
        this.version = bb[wb + 1];
        const Mb = bb[wb + 0],
          eb = bb.buffer;
        return Mb === this.dataPtr && eb === this.dataBuffer || (this.dataPtr = Mb, this.dataBuffer = eb, this.data = this.table.voxelsAt(eb, Mb)), this.data
      }
    }

    function gw(bb, wb) {
      const Mb = bb[wb * Cb.y];
      for (let eb = 0; eb < Cb.y; eb++) {
        const Hb = ew(eb, wb, 0);
        for (let wb = 0; wb < Cb.y; wb++)
          if (bb[Hb + wb] !== Mb) return bw
      }
      return Mb
    }
    const lw = new Uint32Array(0);

    function Lw(bb, wb, Mb) {
      return ew(bb & kb, wb & kb, Mb & kb)
    }
    class Iw {
      constructor(bb, wb) {
        this.memory = bb, this.apiView = wb, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = lw, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = lw, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(bb, wb, Mb, eb, Hb, pb) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, pb === Cb.M.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (pb !== Cb.M.Stored && pb !== Cb.M.Unloaded) throw new tb.d(`ChunkSlot flags ${pb}`);
        const Vb = (0, yb.e)(bb, wb, Mb);
        if (Vb < 0) return;
        if (pb === Cb.M.Unloaded) return void this.chunks.delete(Vb);
        const gb = this.chunks.get(Vb);
        (null === gb || void 0 === gb ? void 0 : gb.slot) === eb && gb.generation === Hb || this.chunks.set(Vb, new Vw(this, eb, Hb, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const bb = this.apiView(),
          wb = Cb.q.chunkSlotsPtr(bb, 0),
          Mb = Cb.q.chunkSlotsLen(bb, 0);
        wb === this.slotsPtr && Mb === this.slotsLen || (this.slotsPtr = wb, this.slotsLen = Mb, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const bb = this.apiView(),
          wb = Cb.q.walkThroughPtr(bb, 0),
          Mb = Cb.q.walkThroughLen(bb, 0);
        wb === this.walkPtr && Mb === this.walkLen || (this.walkPtr = wb, this.walkLen = Mb, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const bb of this.written) bb.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const bb = this.memory().buffer;
        var wb;
        bb !== this.slotsBuffer && (this.slotsBuffer = bb, this.slots = null !== (wb = (0, tb.o)(Uint32Array, bb, this.slotsPtr, this.slotsLen * ww, "the chunk directory")) && void 0 !== wb ? wb : lw);
        return this.slots
      }
      voxelsAt(bb, wb) {
        try {
          var Mb;
          return null !== (Mb = (0, tb.o)(Uint16Array, bb, wb, ob, "a chunk's voxels")) && void 0 !== Mb ? Mb : Mw
        } catch (eb) {
          if (!(eb instanceof tb.d)) throw eb;
          return this.corruption ??= eb, Mw
        }
      }
      chunk(bb, wb, Mb) {
        var eb;
        return null !== (eb = this.chunks.get((0, yb.e)(bb, wb, Mb))) && void 0 !== eb ? eb : null
      }
      isLoaded(bb, wb, Mb) {
        return void 0 !== this.chunkAt(Math.floor(bb), Math.floor(wb), Math.floor(Mb))
      }
      Lg(bb, wb, Mb) {
        var eb;
        const Hb = Math.floor(bb),
          pb = Math.floor(wb),
          Vb = Math.floor(Mb),
          gb = this.chunkAt(Hb, pb, Vb);
        if (!gb) return 0;
        const lb = Lw(Hb, pb, Vb);
        return null !== (eb = gb.written(lb)) && void 0 !== eb ? eb : gb.voxelData()[lb]
      }
      setOverlay(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pb = this.chunkAt(bb, wb, Mb);
        return !!pb && (pb.hasWrites() || this.written.push(pb), pb.write(Lw(bb, wb, Mb), eb, Hb), !0)
      }
      version(bb, wb, Mb) {
        var eb, Hb;
        return null !== (eb = null === (Hb = this.chunks.get((0, yb.e)(bb, wb, Mb))) || void 0 === Hb ? void 0 : Hb.dC) && void 0 !== eb ? eb : null
      }
      scan(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        const lb = Cb.y;
        let Lb = 0;
        for (let Ib = Math.floor(wb / lb); Ib * lb < Hb; Ib++) {
          const Ob = Ib * lb,
            Ub = Math.min(Hb - Ob, lb);
          for (let Hb = Math.floor(bb / lb); Hb * lb < eb; Hb++) {
            const tb = Hb * lb,
              Cb = Math.min(eb - tb, lb);
            for (let eb = Math.floor(Mb / lb); eb * lb < pb; eb++) {
              const Eb = this.chunks.get((0, yb.e)(Hb, Ib, eb));
              if (!Eb) continue;
              const Fb = eb * lb,
                Bb = Math.max(Mb - Fb, 0),
                sb = Math.min(pb - Fb, lb),
                mb = Eb.vt,
                hb = Eb.gameVoxels();
              for (let Mb = Math.max(wb - Ob, 0); Mb < Ub; Mb++) {
                const wb = mb[Mb];
                if (wb === bw || 0 !== Vb[wb]) {
                  Lb++;
                  for (let wb = Math.max(bb - tb, 0); wb < Cb; wb++) {
                    const bb = ew(wb, Mb, 0);
                    for (let eb = Bb; eb < sb; eb++) {
                      const Hb = hb[bb + eb];
                      0 !== Vb[Hb] && gb.push(tb + wb, Ob + Mb, Fb + eb, Hb)
                    }
                  }
                }
              }
            }
          }
        }
        return Lb
      }
      columnTops(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        (0, nb.c)(((bb, wb, Mb) => {
          var eb;
          return null !== (eb = this.chunks.get((0, yb.e)(bb, wb, Mb))) && void 0 !== eb ? eb : null
        }), bw, bb, wb, Mb, eb, Hb, pb, Vb, gb, lb)
      }
      dataCleared(bb, wb, Mb) {
        var eb;
        const Hb = Math.floor(bb),
          pb = Math.floor(wb),
          Vb = Math.floor(Mb);
        return !0 === (null === (eb = this.chunkAt(Hb, pb, Vb)) || void 0 === eb ? void 0 : eb.dataCleared(Lw(Hb, pb, Vb)))
      }
      isWalkThrough(bb) {
        if (!Number.isInteger(bb) || bb < 0 || bb > 65535) return !1;
        const wb = this.walkWords(),
          Mb = bb >>> 5;
        return Mb < wb.length && 1 === (wb[Mb] >>> (31 & bb) & 1)
      }
      walkWords() {
        const bb = this.memory().buffer;
        var wb;
        bb !== this.walkBuffer && (this.walkBuffer = bb, this.walk = null !== (wb = (0, tb.o)(Uint32Array, bb, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== wb ? wb : lw);
        return this.walk
      }
      chunkAt(bb, wb, Mb) {
        if ((0 | bb) !== bb || (0 | wb) !== wb || (0 | Mb) !== Mb) return;
        const eb = (0, yb.e)(bb >> Tb, wb >> Tb, Mb >> Tb);
        return eb !== this.lastKey && (this.lastKey = eb, this.lastChunk = this.chunks.get(eb)), this.lastChunk
      }
    }
    var Ow = Mb(39744),
      Uw = Mb(39047),
      tw = Mb(39443),
      Cw = Mb(37691),
      Ew = Mb(37933),
      Fw = Mb(35289),
      Bw = Mb(40451),
      sw = Mb(225);
    const mw = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      hw = [
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
      zw = hw.map((bb => {
        let [wb] = bb;
        return wb
      })),
      Xw = Uint8Array.from(hw, (bb => {
        let [, wb] = bb;
        return wb
      })),
      xw = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      jw = 8,
      Kw = [
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
    var rw = Mb(37634),
      Rw = Mb(37659),
      Dw = Mb(37687),
      Yw = Mb(37653),
      Zw = Mb(294);
    class fw {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zw.b;
        this.sound = bb, this.onError = wb, this.idle = Mb, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = bb => {
          this.cancelIdle = null;
          try {
            if (bb.timeRemaining() >= 1) {
              let bb = this.queue.shift();
              for (; void 0 !== bb && !this.load(bb);) bb = this.queue.shift()
            }
          } catch (wb) {
            this.onError(wb)
          } finally {
            this.schedule()
          }
        }
      }
      preload(bb) {
        const wb = [...bb].sort(((bb, wb) => bb - wb));
        for (const Mb of wb) this.asked.has(Mb) || (this.asked.add(Mb), this.queue.push(Mb));
        this.schedule()
      }
      cancel() {
        var bb;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (bb = this.cancelIdle) || void 0 === bb || bb.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(bb) {
        const wb = this.sound(bb, !1),
          Mb = this.sound(bb, !0),
          [eb, Hb] = "unloaded" === wb.state() && "unloaded" !== Mb.state() ? [Mb, wb] : [wb, Mb],
          pb = this.gen,
          Vb = () => {
            try {
              pb === this.gen && "unloaded" === Hb.state() && Hb.load()
            } catch (bb) {
              this.onError(bb)
            }
          },
          gb = eb.state();
        return "unloaded" === gb ? (eb.once("load", Vb), eb.load(), !0) : "unloaded" === Hb.state() && ("loading" === gb ? (eb.once("load", Vb), !1) : (Hb.load(), !0))
      }
    }
    var Aw = Mb(42575);

    function Ww(bb) {
      var wb;
      const Mb = function(bb) {
        let wb = 0,
          Mb = zw.length;
        for (; wb < Mb;) {
          const eb = wb + Mb >>> 1;
          zw[eb] < bb ? wb = eb + 1 : Mb = eb
        }
        return wb
      }(bb);
      if ("" === bb || null === (wb = zw[Mb]) || void 0 === wb || !wb.startsWith(bb)) return null;
      if (zw[Mb] === bb) return [Mb, 1];
      let eb = Mb + 1;
      for (; eb < zw.length && zw[eb].startsWith(bb);) eb++;
      return [Mb, eb - Mb]
    }

    function Jw(bb) {
      let [wb, Mb] = bb, eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === Mb ? wb : wb + Math.floor(eb() * Mb)
    }

    function Sw(bb) {
      for (const wb of Kw)
        if (wb[0] <= bb && bb < wb[0] + wb[1]) return wb;
      return null
    }

    function Nw(bb) {
      const wb = [];
      for (let Mb = 0; Mb < Xw.length; Mb++) Xw[Mb] === bb && wb.push(Mb);
      return wb
    }
    const vw = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Qw = sw.e.oF * sw.e.playerEyeToHeightRatio,
      Gw = [0, 0, -1, 0, 1, 0],
      qw = mw.indexOf("note");

    function aw(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }
    class iw {
      constructor(bb, wb, Mb, eb, Hb) {
        this.group = bb, this.loudness = wb, this.startMs = Mb, this.howl = eb, this.host = Hb, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const bb = this.host.alive(this.id);
        return bb ? 1e3 * this.howl.duration(this.id) / bb.rate : 0
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
    class uw {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          eb = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = bb, this.listener = wb, this.now = Mb, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Yw.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: bb => this.aliveVoice(bb),
          started: bb => this.started.has(bb),
          drop: bb => {
            var wb;
            null === (wb = this.live.get(bb)) || void 0 === wb || wb.howl.stop(bb), this.forget(bb)
          }
        }, this.handlers = {
          playSound: (bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) => {
            if (eb >= zw.length) return;
            const Lb = 0 !== (Hb & Cb.Ud.Loop);
            Hb & Cb.Ud.TwoD ? this.start(eb, !1, Vb, pb, gb, Lb, Sw(eb)) : this.startSpatial(eb, Vb, pb, gb, Lb, bb, wb, Mb, lb, this.earDistSq(bb, wb, Mb), Sw(eb))
          },
          soundPos: (bb, wb, Mb, eb) => {
            const Hb = this.core.get(eb);
            var pb;
            void 0 !== Hb && (null === (pb = this.live.get(Hb)) || void 0 === pb || pb.howl.pos(Mb, wb, bb, Hb))
          },
          soundSet: (bb, wb, Mb, eb) => {
            const Hb = this.core.get(bb),
              pb = void 0 === Hb ? void 0 : this.live.get(Hb);
            void 0 !== Hb && pb && (this.setRel(Hb, wb), pb.rate = Mb, pb.howl.rate(Mb, Hb), pb.spatial && pb.howl.pannerAttr({
              refDistance: eb
            }, Hb))
          },
          soundFade: (bb, wb, Mb, eb) => {
            const Hb = this.core.get(bb);
            void 0 !== Hb && this.fade(Hb, wb, Mb, 0 !== (eb & Cb.Td.StopAfter))
          },
          soundStop: bb => {
            const wb = this.core.get(bb);
            var Mb;
            void 0 !== wb && (null === (Mb = this.live.get(wb)) || void 0 === Mb || Mb.howl.stop(wb), this.forget(wb))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new fw(((bb, wb) => this.howl(bb, wb)), (bb => {
          this.errors++, console.error("Audio preload failed", bb)
        }), eb)
      }
      preload(bb) {
        this.loader.preload(bb)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let bb = 0; bb < zw.length; bb++) {
          if (Rw.d.has(mw[Xw[bb]])) continue;
          const wb = [];
          for (const Mb of [!1, !0]) {
            const eb = dw(bb, Mb),
              Hb = this.howls.get(eb);
            void 0 !== Hb && "loading" !== Hb.state() && wb.push({
              key: eb,
              howl: Hb
            })
          }
          if (wb.some((bb => {
              let {
                howl: wb
              } = bb;
              return "loaded" === wb.state()
            })))
            for (const {
                key: bb,
                howl: Mb
              }
              of wb) this.howls.delete(bb), "loaded" === Mb.state() ? (0, rw.d)(Mb) : Mb.unload()
        }
      }
      onAudioEvent(bb, wb, Mb, eb) {
        if (bb < Cb.l.PlaySound || bb > Cb.l.SoundReset) return !1;
        try {
          return (0, Cb.de)(bb, wb, Mb, eb, this.handlers)
        } catch (Hb) {
          return this.errors++, console.error("Audio event failed", Hb), !0
        }
      }
      applyListener(bb) {
        const wb = this.nextPose;
        for (let eb = 0; eb < 3; eb++) wb[2 - eb] = Cb.t.listener(bb, 0, eb), wb[5 - eb] = Cb.t.forward(bb, 0, eb), wb[8 - eb] = Cb.t.up(bb, 0, eb);
        0 === wb[3] && 0 === wb[4] && 0 === wb[5] && wb.set(this.posed ? this.pose.subarray(3) : Gw, 3);
        for (let eb = 0; eb < 9; eb++)
          if (!Number.isFinite(wb[eb])) return;
        const Mb = this.pose;
        if (this.posed) {
          let bb = !0;
          for (let eb = 0; eb < 9 && bb; eb++) bb = wb[eb] === Mb[eb];
          if (bb) return
        }
        this.listener.apply(wb) && (Mb.set(wb), this.posed = !0)
      }
      playGame(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = Ww(bb);
        if (null === gb) return Aw.d;
        const lb = Jw(gb),
          Lb = gb[1] > 1 ? gb : null;
        if (!Mb) {
          const {
            howl: bb,
            id: Mb
          } = this.start(lb, !1, wb, 0, 1, Vb, Lb);
          return this.gameSound(bb, Mb, !1)
        }
        const Ib = Mb[0],
          Ob = Mb[1] + Qw,
          Ub = Mb[2];
        if (!Number.isFinite(Ib) || !Number.isFinite(Ob) || !Number.isFinite(Ub)) return Aw.d;
        let tb;
        if (eb) {
          const bb = Ib - eb[0],
            wb = Ob - eb[1],
            Mb = Ub - eb[2];
          if (tb = bb * bb + wb * wb + Mb * Mb, tb > Hb * Hb) return Aw.d
        } else tb = this.earDistSq(Ib, Ob, Ub);
        const Cb = this.startSpatial(lb, wb, 0, 1, Vb, Ib, Ob, Ub, pb, tb, Lb);
        return Cb ? this.gameSound(Cb.howl, Cb.id, !0) : Aw.d
      }
      setMaster(bb, wb) {
        this.level = aw(bb);
        const Mb = wb ? this.level : 0;
        if (Mb !== this.master) {
          this.master = Mb;
          for (const [bb, wb] of this.live) wb.fadeMs = 0, wb.gain = wb.rel * this.master, wb.howl.volume(wb.gain, bb)
        }
      }
      stopCore() {
        for (const wb of [...this.core.values()]) {
          var bb;
          null === (bb = this.live.get(wb)) || void 0 === bb || bb.howl.stop(wb)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [bb, wb] of [...this.live]) wb.howl.stop(bb), this.forget(bb);
        this.core.clear()
      }
      gameSound(bb, wb, Mb) {
        const eb = {
          stop: () => (this.live.has(wb) && bb.stop(wb), eb),
          fade: (bb, Mb, Hb) => {
            var pb, Vb;
            const gb = this.level > 0 ? Mb / this.level : Mb > 0 && null !== (pb = null === (Vb = this.live.get(wb)) || void 0 === Vb ? void 0 : Vb.rel) && void 0 !== pb ? pb : 0;
            return this.fade(wb, gb, Hb, !1), eb
          },
          rate: Mb => {
            const Hb = this.live.get(wb);
            return Hb && (Hb.rate = function(bb) {
              return bb > 0 && bb < 1 / 0 ? bb : 1
            }(Mb), bb.rate(Hb.rate, wb)), eb
          },
          getVolume: () => {
            var bb, Mb;
            return (null !== (bb = null === (Mb = this.live.get(wb)) || void 0 === Mb ? void 0 : Mb.rel) && void 0 !== bb ? bb : 0) * this.level
          },
          getRelativeVolume: () => {
            var bb, Mb;
            return null !== (bb = null === (Mb = this.live.get(wb)) || void 0 === Mb ? void 0 : Mb.rel) && void 0 !== bb ? bb : 0
          },
          setRelativeVolume: bb => (this.setRel(wb, bb), eb),
          setPannerAttr: Hb => {
            if (Mb && this.live.has(wb)) {
              const Mb = {
                ...vw,
                refDistance: Cw.j
              };
              for (const [bb, wb] of Object.entries(Hb)) "number" !== typeof wb && "string" !== typeof wb || (Mb[bb] = wb);
              bb.pannerAttr({
                coneOuterAngle: Mb.coneOuterAngle
              }, wb), bb.pannerAttr(Mb, wb)
            }
            return eb
          },
          setPosition: Hb => (Mb && this.live.has(wb) && Number.isFinite(Hb[0] + Hb[1] + Hb[2]) && bb.pos(Hb[2], Hb[1], Hb[0], wb), eb)
        };
        return eb
      }
      startSpatial(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        const Ob = this.howl(bb, !0);
        let Ub = null;
        if (!Hb) {
          if (this.failed.has(Ob)) return null;
          const Mb = Xw[bb] === qw ? null : (0, Yw.i)(zw[bb]),
            eb = (0, Yw.f)(aw(wb), Math.sqrt(Lb), lb);
          if (Ub = new iw(Mb, eb, this.now(), Ob, this.voiceHost), !this.voices.admit(Ub)) return null
        }
        const tb = this.start(bb, !0, wb, Mb, eb, Hb, Ib);
        return Ub && (Ub.id = tb.id, Ub.direct = "loaded" === Ob.state() && !Ob._playLock), Ob.pannerAttr({
          coneOuterAngle: 360
        }, tb.id), Ob.pannerAttr({
          ...vw,
          refDistance: lb
        }, tb.id), Ob.pos(gb, Vb, pb, tb.id), !Hb && this.posed && (0, Dw.e)() && (0, Dw.d)(mw[Xw[bb]], zw[bb], pb - this.pose[2], gb - this.pose[0]), tb
      }
      aliveVoice(bb) {
        const wb = this.live.get(bb);
        if (!wb) return;
        const Mb = wb.howl._soundById(bb);
        if (Mb && !Mb._ended) return wb;
        this.forget(bb)
      }
      earDistSq(bb, wb, Mb) {
        if (!this.posed) return 0;
        const eb = bb - this.pose[2],
          Hb = wb - this.pose[1],
          pb = Mb - this.pose[0];
        return eb * eb + Hb * Hb + pb * pb
      }
      start(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = aw(Mb),
          lb = this.howl(bb, wb);
        "unloaded" === lb.state() && (lb.load(), null !== Vb && this.loadPick(Vb, wb));
        const Lb = lb.play(rw.b),
          Ib = gb * this.master;
        return lb.volume(Ib, Lb), this.live.set(Lb, {
          howl: lb,
          rel: gb,
          gain: Ib,
          fadeFrom: Ib,
          fadeAt: 0,
          fadeMs: 0,
          rate: Hb,
          handle: eb,
          spatial: wb,
          stopTimer: void 0
        }), 0 !== eb && this.core.set(eb, Lb), 1 !== Hb && lb.rate(Hb, Lb), pb && lb.loop(!0, Lb), {
          howl: lb,
          id: Lb
        }
      }
      loadPick(bb, wb) {
        let [Mb, eb] = bb;
        for (let pb = Mb; pb < Mb + eb; pb++) {
          var Hb;
          const bb = this.howl(pb, wb);
          "unloaded" === bb.state() && "loading" !== (null === (Hb = this.howls.get(dw(pb, !wb))) || void 0 === Hb ? void 0 : Hb.state()) && bb.load()
        }
      }
      howl(bb, wb) {
        const Mb = dw(bb, wb);
        let eb = this.howls.get(Mb);
        if (!eb) {
          const Hb = this.createHowl(zw[bb], wb);
          Hb.on("end", (bb => {
            Hb.loop(bb) || this.forget(bb)
          })), Hb.on("stop", (bb => {
            this.forget(bb)
          })), Hb.on("play", (bb => {
            this.live.has(bb) && this.started.add(bb)
          })), Hb.on("loaderror", (bb => {
            if ("loaded" !== Hb.state()) {
              this.failed.add(Hb);
              for (const [bb, wb] of this.live) wb.howl === Hb && this.forget(bb)
            } else "number" === typeof bb && this.forget(bb)
          })), this.howls.set(Mb, Hb), eb = Hb
        }
        return eb
      }
      setRel(bb, wb) {
        const Mb = this.live.get(bb);
        Mb && (Pw(Mb), Mb.fadeMs = 0, Mb.rel = aw(wb), Mb.gain = Mb.rel * this.master, Mb.howl.volume(Mb.gain, bb))
      }
      fade(bb, wb, Mb, eb) {
        const Hb = this.live.get(bb);
        if (!Hb) return;
        Pw(Hb);
        const {
          howl: pb
        } = Hb, Vb = this.gainNow(Hb);
        Hb.rel = aw(wb), Hb.gain = Hb.rel * this.master;
        const gb = Mb > 0 ? Math.min(Mb, 65535) : 0,
          lb = 0 === gb || Vb === Hb.gain;
        Hb.fadeMs = lb ? 0 : gb, lb ? pb.volume(Hb.gain, bb) : (Hb.fadeFrom = Vb, Hb.fadeAt = this.now(), pb.fade(Vb, Hb.gain, gb, bb)), eb && (lb ? pb.stop(bb) : Hb.stopTimer = setTimeout((() => {
          Hb.stopTimer = void 0, pb.stop(bb)
        }), gb))
      }
      gainNow(bb) {
        if (bb.fadeMs > 0) {
          const wb = (this.now() - bb.fadeAt) / bb.fadeMs;
          if (wb < 1) return bb.fadeFrom + (bb.gain - bb.fadeFrom) * Math.max(0, wb);
          bb.fadeMs = 0
        }
        return bb.gain
      }
      forget(bb) {
        this.started.delete(bb);
        const wb = this.live.get(bb);
        wb && (Pw(wb), this.live.delete(bb), 0 !== wb.handle && this.core.get(wb.handle) === bb && this.core.delete(wb.handle))
      }
    }

    function dw(bb, wb) {
      return 2 * bb + (wb ? 1 : 0)
    }

    function Pw(bb) {
      void 0 !== bb.stopTimer && (clearTimeout(bb.stopTimer), bb.stopTimer = void 0)
    }
    var nw = Mb(42272),
      yw = Mb(40457);
    class ow {
      constructor(bb, wb, Mb, eb) {
        this.key = bb, this.model = wb, this.host = eb, this.qO = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.BVb = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.BC = !1, this.qO = Math.max(1, Math.ceil(Mb)), this.records = new Float32Array(this.qO * Ow.e), this.isDirty = new Uint8Array(this.qO), this.tail = new Uint8Array(this.qO * Cb.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(eb.cmd())
      }
      setOrigin(bb, wb, Mb) {
        this.origin[0] = bb, this.origin[1] = wb, this.origin[2] = Mb
      }
      markDirty(bb) {
        !this.BC && bb >= 0 && bb < this.qO && bb < Cb.jc.Max && this.JC(bb, bb + 1)
      }
      commit(bb) {
        if (this.BC) return;
        (bb = Math.min(Math.max(Math.floor(bb), 0), this.qO, Cb.jc.Max)) > this.count && this.JC(this.count, bb), this.count = bb;
        const {
          origin: wb,
          sentOrigin: Mb,
          dirtyList: eb
        } = this, Hb = this.BVb !== bb, pb = Mb[0] !== wb[0] || Mb[1] !== wb[1] || Mb[2] !== wb[2];
        if (0 === eb.length && !Hb && !pb) return;
        const Vb = this.host.cmd();
        if (!Vb || !this.make(Vb)) return;
        const gb = eb.length,
          {
            records: lb,
            tailView: Lb
          } = this;
        for (let Ib = 0; Ib < gb; Ib++) {
          const bb = eb[Ib],
            wb = bb * Ow.e,
            Mb = Ib * Cb.jc.Bytes,
            Hb = 0 !== lb[wb + Ow.h] ? Cb.jc.Hidden : 0;
          Lb.setUint32(Mb, (bb | Hb) >>> 0, !0), Lb.setFloat32(Mb + 4, lb[wb], !0), Lb.setFloat32(Mb + 8, lb[wb + 1], !0), Lb.setFloat32(Mb + 12, lb[wb + 2], !0)
        }
        if ((0, Cb.Je)(Vb, 0, this.key, bb, wb, gb, this.tailOf(gb))) {
          for (let bb = 0; bb < gb; bb++) this.isDirty[eb[bb]] = 0;
          eb.length = 0, this.BVb = bb, Mb[0] = wb[0], Mb[1] = wb[1], Mb[2] = wb[2]
        }
      }
      grow(bb) {
        (bb = Math.ceil(bb)) <= this.qO || this.BC || (this.records = (0, yw.c)(this.records, new Float32Array(bb * Ow.e)), this.isDirty = (0, yw.c)(this.isDirty, new Uint8Array(bb)), this.tail = new Uint8Array(bb * Cb.jc.Bytes), this.tailView = new DataView(this.tail.buffer), this.qO = bb)
      }
      dispose() {
        this.BC || (this.BC = !0, this.host.BC(this, this.made ? this.key : null))
      }
      make(bb) {
        if (!this.made && bb) {
          const {
            item: wb,
            scale: Mb,
            yaw: eb
          } = this.model;
          this.made = (0, Cb.Pe)(bb, 0, this.key, wb, Mb, eb)
        }
        return this.made
      }
      tailOf(bb) {
        const wb = bb * Cb.jc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === wb || (this.tailCut = this.tail.subarray(0, wb)), this.tailCut
      }
      JC(bb, wb) {
        const {
          dirtyList: Mb,
          isDirty: eb
        } = this;
        for (let Hb = bb; Hb < wb; Hb++) 0 === eb[Hb] && (eb[Hb] = 1, Mb.push(Hb))
      }
    }
    var Tw = Mb(655),
      kw = Mb(45181);
    const bM = new TextEncoder,
      wM = new Uint8Array(0),
      MM = [0, 0, 0];
    class eM {
      constructor(bb, wb) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: bb,
          serverId: wb,
          owes: bb => {
            this.owing.add(bb)
          },
          settled: (bb, wb) => {
            this.owing.delete(bb), wb && this.live.delete(bb)
          }
        }
      }
      create(bb, wb) {
        return Mb = bb, Tw.n.includes(Mb) ? this.add({
          lifeform: Ib.j.indexOf(bb)
        }, wb) : null;
        var Mb
      }
      createCosmetic(bb, wb) {
        const Mb = kw.COSMETIC_MODEL_KEYS.get(bb);
        return void 0 === Mb ? null : this.add({
          attachment: Mb
        }, wb)
      }
      add(bb, wb) {
        const Mb = new HM(++this.keys, bb, wb, this.host);
        return this.live.add(Mb), Mb
      }
      disposeAll() {
        for (const bb of [...this.live]) bb.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const bb = this.host.cmd();
        for (const wb of this.owing)
          if (!wb.sync(bb)) return
      }
    }
    class HM {
      constructor(bb, wb, Mb, eb) {
        this.key = bb, this.source = wb, this.scale = Mb, this.host = eb, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = wM, this.perch = null, this.owed = 1, this.BC = !1, this.sync()
      }
      setPose(bb, wb) {
        this.BC || (this.feet[0] = bb[0], this.feet[1] = bb[1], this.feet[2] = bb[2], this.yaw = wb, this.owed |= 2, this.sync())
      }
      setVisible(bb) {
        this.BC || bb === this.visible || (this.visible = bb, this.owed |= 4, this.sync())
      }
      setClip(bb) {
        this.BC || bb === this.clip || (this.clip = bb, this.clipBytes = null === bb ? wM : bM.encode(bb), this.owed |= 16, this.sync())
      }
      setPerch(bb) {
        this.BC || (this.perch = bb, this.owed |= 32, this.sync())
      }
      dispose() {
        this.BC || (this.BC = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(bb) ? (this.host.settled(this, this.BC), !0) : (this.host.owes(this), !1)
      }
      write(bb) {
        if (!bb) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, Cb.Ve)(bb, 0, this.key, this.source.lifeform, this.scale) : (0, Cb.pe)(bb, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: wb,
          perch: Mb
        } = this, eb = (2 & wb ? Cb.Mc.Pose : 0) | (4 & wb ? Cb.Mc.Visible : 0) | (16 & wb ? Cb.Mc.Clip : 0) | (32 & wb ? Cb.Mc.Perch : 0);
        if (0 !== eb) {
          var Hb, pb;
          if (!(0, Cb.Te)(bb, 0, this.key, eb, this.visible ? 1 : 0, Mb ? 1 : 0, this.feet, this.yaw, Mb ? this.host.serverId(Mb.IM) : 0, null !== (Hb = null === Mb || void 0 === Mb ? void 0 : Mb.offset) && void 0 !== Hb ? Hb : MM, null !== (pb = null === Mb || void 0 === Mb ? void 0 : Mb.yaw) && void 0 !== pb ? pb : 0, 16 & wb ? this.clipBytes : wM)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, Cb.Qe)(bb, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var pM = Mb(42673);

    function VM(bb, wb, Mb, eb) {
      return (0, pM.d)(), (0, Cb.zf)(bb, wb, Mb, eb)
    }
    var gM = Mb(40473),
      lM = Mb(42266),
      LM = Mb(42685);
    const IM = [0, 0, 0],
      OM = [0, 0, 0],
      UM = [0, 0, 0],
      tM = [0, 0, 0],
      CM = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      EM = [0, 0, 0],
      FM = [0, 0],
      BM = [1, 1, 1],
      sM = 1 / 3;
    const mM = Uw.h;

    function hM(bb) {
      const wb = Uw.d[bb],
        Mb = wb && Uw.h[wb.mainMultiblock];
      return Mb && {
        main: Mb,
        x: wb.compX,
        y: wb.compY,
        z: wb.compZ
      }
    }

    function zM(bb) {
      if (null === bb || void 0 === bb) return Cb.Sc;
      const wb = +bb;
      return Number.isInteger(wb) && wb >= -2147483648 && wb <= 2147483647 && String(wb) === String(bb) ? wb : Cb.Sc
    }

    function XM(bb, wb, Mb) {
      return (0, Cb.Lf)(bb, 0, wb, null !== Mb && void 0 !== Mb ? Mb : Number.NaN)
    }
    class xM {
      constructor(bb) {
        this.deps = bb, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new gM.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (bb => {
          var wb, Mb;
          null === (wb = (Mb = this.deps).setLocalOptions) || void 0 === wb || wb.call(Mb, bb)
        })), this.mobModels = new eM((() => this.deps.cmd()), zM), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          BC: (bb, wb) => {
            this.livePools.delete(bb), null !== wb && (this.owedFrees.push(wb), this.flushOwed())
          }
        }, this.api = bb.api, this.live = bb.live, this.chunks = bb.chunks, this.items = bb.items, this.tables = bb.tables
      }
      isLocal(bb) {
        return null !== bb && void 0 !== bb && +bb === this.api.localId
      }
      assertLocal(bb, wb) {
        if (!this.isLocal(bb)) throw new Error(`Attempted to ${wb} for a player that is not the local player`)
      }
      Qm(bb) {
        const wb = this.api.Qm(bb);
        if (!wb) throw new Error(`Entity ${bb} has no replicated position`);
        return wb
      }
      checkValid(bb) {
        return !!this.deps.isSessionLive() && (null === bb || void 0 === bb || this.api.checkValid(bb))
      }
      isAlive(bb) {
        return !1 !== this.api.isAlive(bb)
      }
      getItemStat(bb, wb, Mb) {
        return this.isLocal(bb) || null !== bb && "Player" === this.api.getEntityType(bb) ? this.tables.getItemStat(wb, Mb) : this.tables.getDefaultItemStat(wb, Mb)
      }
      getClientOption(bb, wb) {
        return this.assertLocal(bb, "get a client option"), this.tables.getClientOption(wb)
      }
      openShop(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(bb, "open shop"), Vb.k.iI("showShopFromServer", {
          toggle: wb,
          Zw: Mb
        }, !0)
      }
      sendMessage(bb, wb, Mb) {
        this.assertLocal(bb, "send a message");
        const eb = "string" === typeof wb ? [{
          str: wb,
          style: Mb
        }] : wb;
        Vb.k.iI("chat", {
          content: eb
        }, !0)
      }
      getEntityType(bb) {
        return this.api.getEntityType(bb)
      }
      getEntityName(bb) {
        const wb = zM(bb);
        return wb === Cb.Sc ? void 0 : (0, nw.l)(this.api, wb)
      }
      hasEffect(bb, wb) {
        const Mb = zM(bb);
        return Mb !== Cb.Sc && (0, nw.h)(this.api, Mb, wb)
      }
      getMetaInfo(bb) {
        return this.tables.getMetaInfo(bb)
      }
      getPlayerDbId(bb) {
        return this.assertLocal(bb, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(bb, wb, Mb) {
        if (!this.chunks.dataCleared(bb, wb, Mb)) return (0, nw.e)(this.api, bb, wb, Mb)
      }
      jW(bb, wb, Mb, eb) {
        this.setBlockId(bb, wb, Mb, this.tables.getItemId(eb))
      }
      setOtherEntitySetting(bb, wb, Mb, eb) {
        if (!this.isLocal(bb)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Cb.dd, Mb)) throw new Error(`Unknown other-entity setting ${Mb}`);
        const Hb = Cb.dd[Mb],
          pb = zM(wb);
        if (pb === Cb.Sc || !this.deps.beforeWrite()) return;
        const Vb = (0, vb.h)(eb);
        if (Vb.length > 16384) throw new Error(`The other-entity setting ${Mb}'s value is over 16384 bytes`);
        const gb = this.api.memoryView(Uint8Array, this.api.scratch(), Vb.length, "set_other_entity_setting's value");
        gb && (gb.set(Vb), this.api.queries.setOtherEntitySetting(pb, Hb, Vb.length))
      }
      getPositionView(bb) {
        return this.live.position(+bb)
      }
      readDrawnPosition(bb, wb) {
        return this.api.readDrawnPosition(zM(bb), wb)
      }
      getDrawnHeading(bb) {
        const wb = this.drawnEntity(bb);
        if (!wb) return null;
        if (1 === Cb.kb.headingIsDrawn(wb, 0)) return Cb.kb.heading(wb, 0);
        const Mb = this.api.apiView;
        return this.isLocal(bb) && 0 === (Cb.q.playerFlags(Mb, 0) & Cb.Ad.FreeCam) ? Cb.q.heading(Mb, 0) : null
      }
      getDrawnEyeHeight(bb) {
        const wb = this.drawnEntity(bb),
          Mb = wb ? Cb.kb.eyeHeight(wb, 0) : 0;
        return Mb > 0 ? Mb : null
      }
      drawnEntity(bb) {
        const wb = zM(bb);
        return wb === Cb.Sc || this.api.queries.directorEntity(wb) < Cb.kb.BYTES ? null : this.api.scratchData(Cb.kb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(bb) {
        const wb = zM(bb);
        return wb !== Cb.Sc && 1 === this.api.queries.entityDrawn(wb)
      }
      getPlayerIds() {
        return LM.f.ids()
      }
      getPlayerCosmetics(bb) {
        var wb;
        return null !== (wb = (0, LM.h)(bb)) && void 0 !== wb ? wb : null
      }
      getLocalPlayerMovement() {
        const bb = Cb.q.playerFlags(this.api.apiView, 0);
        return 0 === (bb & Cb.Ad.Replay) && this.api.readDrawnPosition(this.api.localId, UM) ? {
          onGround: 0 !== (bb & Cb.Ad.OnGround),
          jumpHeld: 0 !== (bb & Cb.Ad.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, tw.v)(this.deps.localPhysicsType())
      }
      Leb(bb) {
        return this.isLocal(bb) ? this.items.dg() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var bb, wb;
        return "Gun" === (null === (bb = this.aliveHeld()) || void 0 === bb || null === (wb = bb.typeObj) || void 0 === wb ? void 0 : wb.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.dg()
      }
      isCrosshairShown() {
        var bb, wb;
        const Mb = (0, Ew.b)(eb.c.get("crosshairGameView"), eb.c.get("crosshairShownOverride"));
        if (null !== Mb) return Mb;
        const Hb = null === (bb = this.aliveHeld()) || void 0 === bb ? void 0 : bb.typeObj,
          pb = "Gun" === (null === Hb || void 0 === Hb ? void 0 : Hb.type),
          Vb = pb || !0 === (null === Hb || void 0 === Hb ? void 0 : Hb.showsAimingUi),
          gb = 0 === (Cb.q.playerFlags(this.api.apiView, 0) & Cb.Ad.ZoomFirstPerson),
          lb = null !== (wb = this.tables.getClientOption("gunshotOrigin")) && void 0 !== wb ? wb : null;
        return (0, Ew.i)({
          gun: pb,
          aimable: Vb
        }, gb, (0, Fw.e)(), lb)
      }
      setCrosshairShown(bb) {
        eb.c.set({
          crosshairShownOverride: bb
        })
      }
      getInventoryFreeSlotCount(bb) {
        return this.isLocal(bb) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(bb) {
        return this.isLocal(bb) ? this.items.selectedSlot : null
      }
      getItemSlot(bb, wb) {
        return this.isLocal(bb) ? this.items.slot(wb) : null
      }
      swapInventorySlots(bb, wb) {
        return this.items.swap(bb, wb)
      }
      isPlayerCrouching(bb) {
        if (this.isLocal(bb)) return 0 !== (Cb.q.playerFlags(this.api.apiView, 0) & Cb.Ad.Crouching);
        const wb = zM(bb);
        return wb !== Cb.Sc && 1 === this.api.queries.entityCrouching(wb)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Cb.q.playerFlags(this.api.apiView, 0) & Cb.Ad.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.awb()
      }
      getActionRay() {
        const bb = this.api.apiView;
        for (let wb = 0; wb < 3; wb++) CM.origin[wb] = Cb.q.pMb(bb, 0, wb), CM.direction[wb] = Cb.q.actionDir(bb, 0, wb);
        return CM
      }
      canModifyBlockAt(bb, wb, Mb) {
        return 1 === this.api.queries.canModify(bb, wb, Mb)
      }
      isSolidToPlayerBlockId(bb) {
        return this.tables.isSolidBlockId(bb) && !this.chunks.isWalkThrough(bb)
      }
      blockNameToBlockId(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(bb, wb)
      }
      blockIdToBlockName(bb) {
        return this.tables.nameOfId(bb)
      }
      DMb(bb, wb, Mb, eb, Hb) {
        return 1 === this.api.queries.terrainBlocked(eb, bb, wb, Mb, zM(null !== Hb && void 0 !== Hb ? Hb : null))
      }
      getChunkVersion(bb, wb, Mb) {
        return this.chunks.version(bb, wb, Mb)
      }
      scanBlocks(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        return this.chunks.scan(bb, wb, Mb, eb, Hb, pb, Vb, gb)
      }
      readColumnTops(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        this.chunks.columnTops(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb)
      }
      isBlockInLoadedChunk(bb, wb, Mb) {
        return this.chunks.isLoaded(bb, wb, Mb)
      }
      getBlockId(bb, wb, Mb) {
        return this.chunks.Lg(bb, wb, Mb)
      }
      playSound(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(bb)) return null;
        const Vb = this.playSoundFrom(wb, Mb, Hb, pb);
        return 1 === eb ? Vb : Vb.rate(eb)
      }
      preloadSounds(bb) {
        var wb, Mb;
        null === (wb = (Mb = this.deps).preloadSounds) || void 0 === wb || wb.call(Mb, bb)
      }
      playSoundFrom(bb, wb, Mb, eb) {
        var Hb, pb;
        const Vb = this.deps.playSound;
        if (!Vb) return Aw.d;
        const gb = null === Mb || void 0 === Mb ? void 0 : Mb.yM,
          lb = null !== (Hb = null === Mb || void 0 === Mb ? void 0 : Mb.maxHearDist) && void 0 !== Hb ? Hb : Cw.f,
          Lb = null !== (pb = null === Mb || void 0 === Mb ? void 0 : Mb.refDistance) && void 0 !== pb ? pb : Cw.j;
        let Ib = null;
        if (Array.isArray(gb)) IM[0] = gb[0], IM[1] = gb[1], IM[2] = gb[2], Ib = IM;
        else if (void 0 !== gb && null !== gb) {
          const bb = zM(gb);
          if (!this.api.isLocal(bb)) {
            if (!this.api.readPosition(bb, IM)) return Aw.d;
            Ib = IM
          }
        }
        return Vb(bb, wb, Ib, Ib && this.ear(), lb, Lb, eb)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, OM)) OM[1] += Qw;
        else {
          const bb = this.api.apiView;
          if (0 === Cb.q.viewProj(bb, 0, 3) && 0 === Cb.q.viewProj(bb, 0, 7) && 0 === Cb.q.viewProj(bb, 0, 11)) return null;
          for (let wb = 0; wb < 3; wb++) OM[wb] = Cb.q.eye(bb, 0, wb)
        }
        return Number.isFinite(OM[0] + OM[1] + OM[2]) ? OM : null
      }
      setBlockId(bb, wb, Mb, eb) {
        if (!Number.isInteger(eb) || eb < 0 || eb > 65535) throw new Error(`Invalid block id ${eb}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(bb, wb, Mb)) return;
        const Hb = Math.floor(bb),
          pb = Math.floor(wb),
          Vb = Math.floor(Mb),
          gb = this.predictedCells(Hb, pb, Vb, eb);
        if (1 === this.api.queries.jW(Hb, pb, Vb, eb)) {
          for (let bb = 0; bb < gb.length; bb += 5) this.chunks.setOverlay(gb[bb], gb[bb + 1], gb[bb + 2], gb[bb + 3], 1 === gb[bb + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(bb, wb) {
        return this.deps.particles.create(bb, wb)
      }
      playParticleEffect(bb) {
        this.deps.particles.playEffect(bb)
      }
      burstParticlePreset(bb, wb, Mb) {
        this.deps.particles.burstPreset(bb, wb, Mb)
      }
      createGameMesh(bb, wb, Mb) {
        const eb = ++this.meshKeys,
          Hb = this.deps.cmd();
        if (!Hb) return eb;
        const {
          look: pb,
          colour: Vb
        } = function(bb) {
          switch (bb.kind) {
            case void 0:
            case "flatEmissive":
              return bb.onTop ? {
                look: Cb.Ub.FlatOnTop,
                colour: [...bb.rgb, bb.alpha]
              } : bb.opaque ? {
                look: Cb.Ub.FlatOpaque,
                colour: [...bb.rgb, 1]
              } : {
                look: Cb.Ub.Flat,
                colour: [...bb.rgb, bb.alpha]
              };
            case "chevronPath":
              return {
                look: Cb.Ub.Chevrons, colour: [...(0, Bw.e)(bb.colour), bb.alpha]
              };
            case "furnaceFire":
              return {
                look: Cb.Ub.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(wb), gb = Math.floor(bb.positions.length / 3), lb = function(bb, wb) {
          const Mb = Math.floor(bb.positions.length / 3),
            eb = bb.indices.length,
            Hb = Mb * (wb ? 5 : 3),
            pb = new Uint8Array(4 * (Hb + eb)),
            Vb = new DataView(pb.buffer);
          for (let Lb = 0; Lb < 3 * Mb; Lb++) Vb.setFloat32(4 * Lb, bb.positions[Lb], !0);
          if (wb) {
            var gb;
            const wb = null !== (gb = bb.uvs) && void 0 !== gb ? gb : [];
            for (let bb = 0; bb < 2 * Mb; bb++) {
              var lb;
              Vb.setFloat32(4 * (3 * Mb + bb), null !== (lb = wb[bb]) && void 0 !== lb ? lb : 0, !0)
            }
          }
          for (let Lb = 0; Lb < eb; Lb++) Vb.setUint32(4 * (Hb + Lb), bb.indices[Lb], !0);
          return pb
        }(bb, (0, Ow.i)(wb));
        return (0, Cb.ze)(Hb, 0, eb, pb, Vb, Mb, gb, bb.indices.length, lb) && this.liveMeshes.add(eb), eb
      }
      setGameMesh(bb, wb) {
        var Mb;
        const eb = this.deps.cmd();
        if (!eb) return;
        let Hb = 0;
        wb.anchor && (Hb |= Cb.Vb.Anchor, EM[0] = wb.anchor[0], EM[1] = wb.anchor[1], EM[2] = wb.anchor[2]), void 0 !== wb.visible && (Hb |= Cb.Vb.Visible), wb.uvOffset && (Hb |= Cb.Vb.UvOffset, FM[0] = wb.uvOffset[0], FM[1] = wb.uvOffset[1]);
        const pb = null !== (Mb = wb.visibility) && void 0 !== Mb ? Mb : 1;
        void 0 !== wb.visibility && (Hb |= Cb.Vb.Visibility), wb.scale && (Hb |= Cb.Vb.Scale, BM[0] = wb.scale[0], BM[1] = wb.scale[1], BM[2] = wb.scale[2]), 0 !== Hb && (0, Cb.De)(eb, 0, bb, Hb, wb.visible ? 1 : 0, EM, FM, pb, BM)
      }
      disposeGameMesh(bb) {
        const wb = this.deps.cmd();
        wb && !(0, Cb.Ce)(wb, 0, bb) || this.liveMeshes.delete(bb)
      }
      hasPackModel(bb) {
        var wb, Mb, eb;
        return null !== (wb = null === (Mb = (eb = this.deps).hasPackModel) || void 0 === Mb ? void 0 : Mb.call(eb, bb)) && void 0 !== wb && wb
      }
      disposeGameOutput() {
        const bb = bb => {
          try {
            bb()
          } catch (wb) {
            console.error("Error freeing client game output", wb)
          }
        };
        for (const wb of [...this.liveMeshes]) bb((() => {
          this.disposeGameMesh(wb)
        }));
        for (const wb of [...this.livePools]) bb((() => {
          wb.dispose()
        }));
        bb((() => {
          this.mobModels.disposeAll()
        })), bb((() => {
          this.setGroundArrowStyle(null)
        })), bb((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), bb((() => {
          this.setCrosshairShown(null)
        })), bb((() => {
          this.cameraTurn.dispose()
        })), bb((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(bb, wb) {
        const Mb = this.tables.idOf(bb.item);
        if (void 0 === Mb) return null;
        const eb = new ow(++this.poolKeys, {
          item: Mb,
          scale: bb.scale,
          yaw: bb.yaw
        }, wb, this.poolHost);
        return this.livePools.add(eb), eb
      }
      createMobModel(bb, wb) {
        return this.mobModels.create(bb, wb)
      }
      createCosmeticModel(bb, wb) {
        return this.mobModels.createCosmetic(bb, wb)
      }
      setRouteChevrons(bb) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !bb || 0 === bb.cells.length) return;
        const wb = `${bb.colour} ${bb.alpha}`;
        wb !== this.routeLook && (this.routeLook = wb, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(bb) {
          const [wb, Mb, eb] = bb[0].pos, Hb = [], pb = [], Vb = [];
          return bb.forEach(((bb, gb) => {
            let {
              pos: lb,
              way: [Lb, Ib]
            } = bb;
            const Ob = lb[0] - wb + .5,
              Ub = lb[1] - Mb + .04,
              tb = lb[2] - eb + .5,
              [Cb, Eb] = [.35 * -Ib, .35 * Lb],
              [Fb, Bb] = [gb * sM, (gb + 1) * sM],
              sb = Hb.length / 3;
            Hb.push(Ob - .5 * Lb + Cb, Ub, tb - .5 * Ib + Eb), Hb.push(Ob - .5 * Lb - Cb, Ub, tb - .5 * Ib - Eb), Hb.push(Ob + .5 * Lb + Cb, Ub, tb + .5 * Ib + Eb), Hb.push(Ob + .5 * Lb - Cb, Ub, tb + .5 * Ib - Eb), pb.push(0, Fb, 1, Fb, 0, Bb, 1, Bb), Vb.push(sb, sb + 1, sb + 2, sb + 1, sb + 3, sb + 2)
          })), {
            positions: Hb,
            uvs: pb,
            indices: Vb
          }
        }(bb.cells), {
          kind: "chevronPath",
          colour: bb.colour,
          alpha: bb.alpha
        }, bb.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(bb) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(bb, 250) / 1e3 * 1.2 * sM) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(bb) {
        this.pendingStyle = bb, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const bb = this.owedFrees;
        if (0 === bb.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const wb = this.deps.cmd();
        if (!wb) return bb.length = 0, void(this.pendingFar = void 0);
        let Mb = 0;
        for (; Mb < bb.length && (0, Cb.Me)(wb, 0, bb[Mb]);) Mb++;
        bb.splice(0, Mb);
        const eb = this.pendingStyle;
        if (void 0 !== eb) {
          (eb ? (0, Cb.Pf)(wb, 0, eb.width, eb.alpha, 1, eb.endAtSolidFace ? 1 : 0) : (0, Cb.Pf)(wb, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Hb = this.pendingFar;
        void 0 !== Hb && (0, Cb.Hf)(wb, 0, null !== Hb && void 0 !== Hb ? Hb : 0, null === Hb ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(bb, wb) {
        const Mb = this.deps.cmd(),
          eb = zM(bb);
        Mb && eb !== Cb.Sc && (0, Cb.Yf)(Mb, 0, eb, wb)
      }
      setFacingTolerance(bb, wb) {
        const Mb = this.deps.cmd(),
          eb = zM(bb);
        Mb && eb !== Cb.Sc && XM(Mb, eb, wb)
      }
      forEachEntity(bb) {
        const {
          api: wb
        } = this;
        for (let Mb = 0; Mb < wb.idStr.length; Mb++) {
          const eb = wb.idStr[Mb];
          null === eb || zb(wb.kinds[Mb]) || bb(eb)
        }
      }
      getEntityInfo(bb) {
        return this.deps.entityInfo.get(bb)
      }
      isEntityInteractable(bb) {
        const wb = zM(bb);
        return wb !== Cb.Sc && 1 === this.api.queries.entityInteractable(wb)
      }
      isLocalPlayer(bb) {
        return this.isLocal(bb)
      }
      getLineOwner(bb) {
        var wb;
        const Mb = null === (wb = this.deps.entityInfo.get(bb)) || void 0 === wb ? void 0 : wb.meshOpts;
        if (!Mb) return null;
        try {
          const {
            lineToEId: bb
          } = JSON.parse(Mb);
          return null !== bb && void 0 !== bb ? bb : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const bb = this.api.apiView;
        return tM[0] = Cb.q.eye(bb, 0, 0), tM[1] = Cb.q.eye(bb, 0, 1), tM[2] = Cb.q.eye(bb, 0, 2), tM
      }
      getCameraFar() {
        return Cb.q.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(bb) {
        null !== bb && (this.farSet = !0), this.pendingFar = bb, this.flushOwed()
      }
      turnCamera(bb, wb) {
        this.cameraTurn.turn(bb, wb)
      }
      clearPickupDelay(bb) {
        const wb = this.deps.cmd(),
          Mb = zM(bb);
        wb && Mb !== Cb.Sc && (0, Cb.je)(wb, 0, Mb)
      }
      sendChat(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = this.deps.sendCmd();
        return null !== Mb && VM(Mb, 0, lM.c.Chat, (0, vb.h)((0, lM.i)({
          tV: bb,
          CV: wb
        })))
      }
      sendCommand(bb) {
        bb.length <= 119 && this.sendChat(`/${bb}`)
      }
      predictedCells(bb, wb, Mb, eb) {
        const Hb = this.chunks,
          pb = [],
          Vb = (bb, wb, Mb, eb, Hb) => {
            pb.push(bb, wb, Mb, eb, this.tables.blockRootId(Hb) === this.tables.blockRootId(eb) ? 0 : 1)
          },
          gb = Hb.Lg(bb, wb, Mb),
          lb = hM(gb);
        if (lb) {
          const [eb, pb, Lb] = [bb - lb.x, wb - lb.y, Mb - lb.z], Ib = mM[Hb.Lg(eb, pb, Lb)], Ob = null === Ib || void 0 === Ib ? void 0 : Ib.positions.some((bb => bb.id === gb && bb.x === lb.x && bb.y === lb.y && bb.z === lb.z));
          for (const bb of (Ob && Ib ? Ib : lb.main).positions) Hb.Lg(eb + bb.x, pb + bb.y, Lb + bb.z) === bb.id && Vb(eb + bb.x, pb + bb.y, Lb + bb.z, 0, bb.id)
        }
        const Lb = hM(eb);
        if (Lb)
          for (const Ob of Lb.main.positions) {
            const [eb, pb, gb] = [bb + Ob.x - Lb.x, wb + Ob.y - Lb.y, Mb + Ob.z - Lb.z];
            Vb(eb, pb, gb, Ob.id, Hb.Lg(eb, pb, gb))
          } else Vb(bb, wb, Mb, eb, gb);
        const Ib = this.tables;
        if ((0 !== Ib.attachedTopOf(gb) || 0 !== Ib.attachedTopOf(eb)) && Hb.isLoaded(bb, wb + 1, Mb)) {
          let lb = Hb.Lg(bb, wb + 1, Mb);
          for (let eb = 0; eb < pb.length; eb += 5) pb[eb] === bb && pb[eb + 1] === wb + 1 && pb[eb + 2] === Mb && (lb = pb[eb + 3]);
          const Lb = this.attachedTopWrite(gb, eb, lb);
          void 0 !== Lb && Vb(bb, wb + 1, Mb, Lb, lb)
        }
        return pb
      }
      attachedTopWrite(bb, wb, Mb) {
        const eb = this.tables,
          Hb = eb.attachedTopOf(bb),
          pb = eb.attachedTopOf(wb),
          Vb = 0 !== Hb && 0 !== Mb && eb.blockRootId(Mb) === eb.blockRootId(Hb);
        return 0 !== Hb && 0 !== pb && eb.blockRootId(bb) === eb.blockRootId(wb) ? Vb && Mb !== pb ? pb : void 0 : 0 === pb || !Vb && 0 !== Mb ? Vb ? 0 : void 0 : pb
      }
    }
    const jM = Cb.hc + Cb.ic * Cb.pc.BYTES,
      KM = 2147483647,
      rM = new TextDecoder,
      RM = new TextEncoder,
      DM = Object.freeze({
        Bg: 0,
        aI: null,
        amountAddedToSlot: 0
      }),
      cM = new Proxy({}, {
        get: () => () => Cb.ad
      });

    function YM(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 65535
    }

    function ZM(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 4294967295
    }
    class fM {
      constructor(bb) {
        this.deps = bb, this.aH = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Cb.ic), this.ids = new Uint16Array(Cb.ic), this.amounts = new Uint16Array(Cb.ic), this.attrRead = new Float64Array(Cb.ic).fill(-1), this.stale = new Uint16Array(Cb.ic), this.staleVersion = new Uint32Array(Cb.ic), this.instances = new Uint32Array(Cb.ic), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(bb) {
        var wb;
        return Number.isInteger(bb) && bb >= 0 && bb < this.len && 0 !== this.ids[bb] && null !== (wb = this.facades[bb]) && void 0 !== wb ? wb : null
      }
      dg() {
        return this.slot(this.selected)
      }
      playerItems() {
        const bb = [];
        for (let wb = 0; wb < Math.min(Cb.nd, this.len); wb++) bb.push(this.slot(wb));
        return bb
      }
      freeSlots() {
        let bb = 0;
        for (let wb = 0; wb < Math.min(Cb.nd - Cb.e, this.len); wb++) 0 === this.ids[wb] && bb++;
        return bb
      }
      amountOf(bb) {
        let wb = 0;
        for (let eb = 0; eb < Math.min(Cb.nd, this.len); eb++) {
          const Hb = this.slot(eb);
          var Mb;
          if ((null === Hb || void 0 === Hb ? void 0 : Hb.name) === bb) wb += null !== (Mb = Hb.amount) && void 0 !== Mb ? Mb : 1
        }
        return wb
      }
      instance(bb) {
        var wb;
        return null !== (wb = this.instances[bb]) && void 0 !== wb ? wb : 0
      }
      watch(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      touch() {
        this.version++
      }
      flush(bb) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const Mb of [...this.listeners]) try {
            Mb()
          } catch (wb) {
            bb(wb)
          }
        }
      }
      chestOpened(bb, wb, Mb) {
        this.aH[0] = bb, this.aH[1] = wb, this.aH[2] = Mb, this.version++
      }
      refresh() {
        const bb = this.deps.api.apiView,
          wb = Cb.q.inventoryViewPtr(bb, 0),
          Mb = Cb.q.inventoryVersion(bb, 0),
          eb = Cb.q.selectedSlot(bb, 0);
        eb !== this.selected && (this.selected = eb, this.version++);
        const Hb = Cb.q.slotIcon(bb, 0);
        if (Hb !== this.slotIconId && (this.slotIconId = Hb, this.iconChanged = !0), wb === this.viewPtr && Mb === this.viewVersion) return;
        this.viewPtr = wb, this.viewVersion = Mb;
        const pb = this.deps.api.memoryData(wb, jM, 4, "the inventory view"),
          Vb = pb ? Math.min(pb.getUint32(0, !0), Cb.ic) : 0;
        Vb !== this.len && (this.len = Vb, this.version++);
        let gb = 0;
        for (let lb = 0; lb < Cb.ic; lb++) {
          const bb = Cb.hc + lb * Cb.pc.BYTES,
            wb = null !== pb && lb < Vb ? Cb.pc.item(pb, bb) : 0;
          if (0 === wb || null === pb) {
            0 !== this.ids[lb] && (this.ids[lb] = 0, this.attrRead[lb] = -1, this.instances[lb]++, this.version++);
            continue
          }
          const Mb = Cb.pc.amount(pb, bb),
            eb = Cb.pc.attrVersion(pb, bb);
          wb === this.ids[lb] && Mb === this.amounts[lb] || this.fill(lb, wb, Mb), eb !== this.attrRead[lb] && (this.stale[gb] = lb, this.staleVersion[gb] = eb, gb++)
        }
        gb > 0 && this.fetchAttributes(gb)
      }
      fill(bb, wb, Mb) {
        const {
          tables: eb
        } = this.deps, Hb = wb !== this.ids[bb];
        let pb = this.facades[bb];
        pb || (pb = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[bb] = pb), Hb && (pb.name = eb.nameOfId(wb), pb.typeObj = eb.itemType(wb), pb.attributes = {
          customAttributes: {}
        }, this.attrRead[bb] = -1, this.instances[bb]++), pb.amount = 0 === Mb ? null : Mb, this.ids[bb] = wb, this.amounts[bb] = Mb, this.version++
      }
      fetchAttributes(bb) {
        const {
          api: wb,
          onError: Mb
        } = this.deps, eb = wb.memoryView(Uint16Array, wb.scratch(), bb, "item_attributes_batch's slots");
        if (!eb) return void this.markRead(bb);
        eb.set(this.stale.subarray(0, bb));
        const Hb = wb.queries.itemAttributesBatch(bb),
          pb = 4294967295 === Hb ? null : wb.memoryData(wb.scratch(), Hb, 4, "item_attributes_batch's answer");
        if (!pb) return void this.markRead(bb);
        const Vb = new Uint8Array(pb.buffer, pb.byteOffset, Hb);
        for (let lb = 0; lb + 8 <= Hb;) {
          const bb = pb.getUint16(lb, !0),
            wb = pb.getUint32(lb + 4, !0),
            eb = Vb.subarray(lb + 8, lb + 8 + wb);
          lb += 8 + (0, Ub.Be)(wb);
          const Hb = this.facades[bb];
          if (Hb && 0 !== this.ids[bb] && 0 !== wb) {
            try {
              Hb.attributes = JSON.parse(rM.decode(eb))
            } catch (gb) {
              Mb(gb)
            }
            this.version++
          }
        }
        this.markRead(bb)
      }
      markRead(bb) {
        for (let wb = 0; wb < bb; wb++) this.attrRead[this.stale[wb]] = this.staleVersion[wb]
      }
      swap(bb, wb) {
        return YM(bb) && YM(wb) && this.settle(this.queries().invSwap(bb, wb))
      }
      move(bb, wb, Mb) {
        return YM(bb) && YM(wb) && ZM(Mb) && this.settle(this.queries().invMove(bb, wb, Mb))
      }
      quickMove(bb, wb, Mb, eb) {
        var Hb, pb;
        if (!YM(bb) || !YM(wb) || !YM(Mb) || null !== eb && !ZM(eb)) return null;
        const Vb = this.queries().invQuickMove(bb, wb, Mb, null === eb ? -1 : Math.min(eb, KM)),
          gb = Vb === Cb.ad ? Cb.Db : null !== (Hb = null === (pb = this.extras()) || void 0 === pb ? void 0 : pb[1]) && void 0 !== Hb ? Hb : Cb.Db;
        return this.settle(Vb), gb === Cb.Db ? null : gb
      }
      remove(bb, wb, Mb) {
        return YM(bb) && ZM(wb) && this.settle(this.queries().invRemove(bb, wb, Mb ? 1 : 0))
      }
      selectSlot(bb) {
        return YM(bb) && this.settle(this.queries().selectSlot(bb))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(bb, wb, Mb) {
        if (!YM(bb) || !Number.isInteger(wb)) return !1;
        const [eb, Hb, pb] = Mb;
        return this.settle(this.queries().invEnchant(bb, wb, Math.floor(eb), Math.floor(Hb), Math.floor(pb)))
      }
      craft(bb, wb, Mb) {
        let eb;
        try {
          eb = this.deps.tables.getItemId(bb)
        } catch {
          return DM
        }
        if (!YM(wb) || null !== Mb && (Number.isNaN(Mb) || Mb < 0)) return DM;
        const Hb = null === Mb || Mb > KM ? -1 : Math.floor(Mb),
          pb = this.queries().craft(eb, wb, Hb);
        let Vb = DM;
        const gb = pb === Cb.ad ? null : this.extras();
        if (gb) {
          const [bb, wb, Mb] = gb;
          Vb = {
            Bg: bb,
            aI: wb === Cb.Db ? null : wb,
            amountAddedToSlot: Mb
          }
        }
        return this.settle(pb), Vb
      }
      salvage(bb, wb, Mb) {
        let eb;
        try {
          eb = this.deps.tables.getItemId(wb)
        } catch {
          return !1
        }
        return YM(bb) && Number.isInteger(Mb) && this.settle(this.queries().salvage(bb, eb, Math.max(Math.min(Mb, KM), -KM)))
      }
      craftingView(bb, wb, Mb) {
        var eb;
        if (this.stopped) return null;
        const {
          api: Hb,
          onError: pb
        } = this.deps, Vb = bb ? RM.encode(bb) : null;
        if (null !== Vb) {
          if (Vb.length > 1024) return pb(new Error(`The crafting station ${bb}'s name is over 1024 bytes`)), null;
          const wb = Hb.memoryView(Uint8Array, Hb.scratch(), Vb.length, "crafting_view's station");
          if (!wb) return null;
          wb.set(Vb)
        }
        const gb = YM(wb) && YM(Mb),
          lb = Hb.queries.craftingView(null !== (eb = null === Vb || void 0 === Vb ? void 0 : Vb.length) && void 0 !== eb ? eb : 0, gb ? wb : 0, gb ? Mb : 0);
        return lb < Cb.fb.BYTES ? (Hb.reportCorruption(`crafting_view's answer of ${lb} bytes`), null) : Hb.memoryData(Hb.scratch(), lb, 1, "crafting_view's answer")
      }
      queries() {
        var bb, wb;
        return !1 === (null === (bb = (wb = this.deps).beforeOp) || void 0 === bb ? void 0 : bb.call(wb)) ? (this.stopped = !0, cM) : this.deps.api.queries
      }
      extras() {
        const {
          api: bb
        } = this.deps;
        return bb.memoryView(Uint32Array, bb.scratch(), 3, "a sync query's extra words")
      }
      settle(bb) {
        if (bb === Cb.Yc)(0, pM.d)();
        else if (bb !== Cb.ad) {
          const wb = this.deps.cmd();
          wb && function(bb, wb, Mb) {
            return (0, pM.d)(), (0, Cb.hg)(bb, wb, Mb)
          }(wb, 0, bb) || this.deps.onError(new Error(`Sync op ${bb}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), bb !== Cb.ad
      }
    }
    const AM = 1 / .6,
      WM = [0, 1, 0],
      JM = [0, 0, 0],
      SM = new Uint8Array(0),
      NM = 1.2 * sw.e.yF,
      vM = new TextEncoder,
      QM = [0, 0, 0],
      GM = [0, 0, 0],
      qM = new Map;

    function aM(bb) {
      let wb = qM.get(bb);
      return wb || (qM.size >= 64 && qM.clear(), wb = vM.encode(`{"emitRate":${bb}}`), qM.set(bb, wb)), wb
    }

    function iM(bb) {
      return Number.isFinite(bb) && bb > 0 ? bb : 0
    }

    function uM(bb, wb) {
      for (let Mb = 0; Mb < 3; Mb++) {
        const eb = Math.abs(wb[Mb]);
        QM[Mb] = bb[Mb] - eb, GM[Mb] = 2 * eb
      }
      return Number.isFinite(QM[0] + QM[1] + QM[2] + GM[0] + GM[1] + GM[2])
    }

    function dM(bb, wb) {
      return "pos1" === bb || "pos2" === bb ? void 0 : wb
    }

    function PM(bb, wb, Mb) {
      return bb.length > Cb.yd.MaxOpts ? (Mb(new Error(`${wb}'s particle opts are over ${Cb.yd.MaxOpts} bytes of JSON`)), null) : bb
    }
    const nM = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class yM {
      constructor(bb) {
        this.deps = bb, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(bb, wb) {
        var Mb;
        const eb = this.sink(),
          Hb = null !== (Mb = wb.half) && void 0 !== Mb ? Mb : JM;
        if (!eb || this.live >= Cb.yd.MaxLiveKeys || this.nextKey > Cb.yd.MaxKey || !uM(wb.pos, Hb)) return nM;
        const pb = this.nextKey,
          Vb = PM(function(bb) {
            var wb, Mb, eb;
            const Hb = JSON.stringify({
              texture: "string" === typeof bb.texture ? bb.texture : "smokePuff",
              qO: bb.qO,
              minLifeTime: bb.minLifeTime,
              maxLifeTime: bb.maxLifeTime,
              minSize: bb.minSize,
              maxSize: bb.maxSize,
              minEmitPower: bb.minEmitPower,
              maxEmitPower: bb.maxEmitPower,
              emitRate: iM(bb.emitRate),
              gravity: null !== (wb = bb.gravity) && void 0 !== wb ? wb : JM,
              dir1: null !== (Mb = bb.dir1) && void 0 !== Mb ? Mb : WM,
              dir2: null !== (eb = bb.dir2) && void 0 !== eb ? eb : WM,
              colorGradients: bb.colorGradients,
              blendMode: bb.blendMode
            });
            return vM.encode(Hb)
          }(bb), "createParticles", this.deps.onError);
        return Vb && (0, Cb.bf)(eb, 0, pb, 0, Cb.yd.PresetNone, 0, QM, GM, Vb) ? (this.nextKey++, this.live++, this.started = !0, new oM(this, this.session, pb, bb, Hb)) : nM
      }
      playEffect(bb) {
        const wb = this.sink(),
          {
            pos1: Mb,
            pos2: eb
          } = bb;
        if (!wb || !Mb || !eb) return;
        for (let pb = 0; pb < 3; pb++) QM[pb] = Math.min(Mb[pb], eb[pb]), GM[pb] = Math.abs(eb[pb] - Mb[pb]);
        if (!Number.isFinite(QM[0] + QM[1] + QM[2] + GM[0] + GM[1] + GM[2])) return;
        const Hb = PM(vM.encode(JSON.stringify(bb, dM)), "playParticleEffect", this.deps.onError);
        Hb && (0, Cb.Ye)(wb, 0, 0, Cb.yd.PresetNone, Cb.yd.HasBox, 0, QM, GM, Hb)
      }
      burstPreset(bb, wb, Mb) {
        const eb = this.sink(),
          Hb = Math.min(Math.floor(Mb), Cb.yd.MaxBurst);
        if (!eb || !Object.hasOwn(Cb.Zb, bb) || !(Hb > 0)) return;
        const pb = NM;
        for (let Vb = 0; Vb < 3; Vb++) QM[Vb] = wb[Vb] - pb / 2, GM[Vb] = pb;
        Number.isFinite(QM[0] + QM[1] + QM[2]) && (0, Cb.Ye)(eb, 0, 0, Cb.Zb[bb], Cb.yd.HasBox, Hb, QM, GM, SM)
      }
      sessionEnded() {
        this.session++;
        const bb = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !bb || (0, Cb.df)(bb, 0)
      }
      sinkFor(bb) {
        return bb === this.session ? this.deps.cmd() : null
      }
      stop(bb, wb) {
        const Mb = this.sinkFor(bb);
        Mb && (0, Cb.gf)(Mb, 0, wb) && this.live--
      }
    }
    class oM {
      constructor(bb, wb, Mb, eb, Hb) {
        this.owner = bb, this.session = wb, this.key = Mb, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Hb[0]), Math.abs(Hb[1]), Math.abs(Hb[2])], this.rate = iM(eb.emitRate), this.emitted = this.rate > 0;
        const pb = eb.maxLifeTime * AM * 1e3 + 250;
        this.stopDelayMs = pb >= 0 ? Math.min(pb, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(bb, wb) {
        const Mb = this.sink();
        if (Mb) {
          if (wb)
            for (let bb = 0; bb < 3; bb++) this.half[bb] = Math.abs(wb[bb]);
          uM(bb, this.half) && (0, Cb.if)(Mb, 0, this.key, Cb.yd.HasBox, QM, GM, SM)
        }
      }
      setEmitRate(bb) {
        const wb = this.sink(),
          Mb = iM(bb);
        wb && Mb !== this.rate && (0, Cb.if)(wb, 0, this.key, 0, JM, JM, aM(Mb)) && (this.rate = Mb, this.emitted ||= Mb > 0)
      }
      emit(bb) {
        const wb = this.sink(),
          Mb = Math.min(Math.floor(bb), Cb.yd.MaxBurst);
        wb && Mb > 0 && (0, Cb.Ye)(wb, 0, this.key, Cb.yd.PresetNone, 0, Mb, JM, JM, SM) && (this.emitted = !0)
      }
      emitPoints(bb, wb, Mb) {
        const eb = this.sink(),
          Hb = Math.min(Math.floor(Mb), Cb.yd.MaxPoints, Math.floor(wb.length / 4));
        if (!eb || !(Hb > 0) || !Number.isFinite(bb[0] + bb[1] + bb[2])) return;
        const pb = new Uint8Array(wb.buffer, wb.byteOffset, Hb * Cb.yd.PointBytes);
        (0, Cb.$e)(eb, 0, this.key, Hb, bb, pb) && (this.emitted = !0)
      }
      setDirections(bb, wb) {
        const Mb = this.sink();
        if (!Mb || !Number.isFinite(bb[0] + bb[1] + bb[2] + wb[0] + wb[1] + wb[2])) return;
        const eb = vM.encode(JSON.stringify({
          dir1: [bb[0], bb[1], bb[2]],
          dir2: [wb[0], wb[1], wb[2]]
        }));
        (0, Cb.if)(Mb, 0, this.key, 0, JM, JM, eb)
      }
      stop() {
        const bb = this.sink();
        this.stopped = !0, bb && (this.emitted ? (this.rate > 0 && (0, Cb.if)(bb, 0, this.key, 0, JM, JM, aM(0)), setTimeout((() => {
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
    const TM = Tw.o,
      kM = new TextDecoder;

    function be(bb, wb) {
      const {
        serverIds: Mb,
        kinds: eb
      } = bb;
      let Hb = 0;
      for (let pb = 0; pb < Mb.length; pb++) {
        const bb = Mb[pb];
        if (bb !== Cb.Sc && !zb(eb[pb])) {
          if (Hb === wb.length) {
            const bb = new Int32Array(Math.max(64, 2 * Hb));
            bb.set(wb), wb = bb
          }
          wb[Hb++] = bb
        }
      }
      return {
        ids: wb,
        count: Hb
      }
    }

    function we(bb, wb) {
      return bb.length >= wb ? bb : new Int32Array(Math.max(wb, 2 * bb.length))
    }

    function Me(bb, wb, Mb, eb) {
      for (let Hb = 0; Hb < Mb; Hb += 4096) {
        const pb = Math.min(4096, Mb - Hb),
          Vb = bb.memoryView(Int32Array, bb.scratch(), pb, "entity_info_batch's ids");
        if (!Vb) return !1;
        Vb.set(wb.subarray(Hb, Hb + pb));
        const gb = bb.queries.entityInfoBatch(pb),
          lb = 4294967295 === gb ? null : bb.memoryData(bb.scratch(), gb, 4, "entity_info_batch's records");
        if (!lb) return !1;
        for (let bb = 0; bb + Cb.Mb.BYTES <= gb;) {
          const wb = Cb.Mb.len(lb, bb);
          eb(Cb.Mb.serverId(lb, bb), ee(lb, bb, wb)), bb += Cb.Mb.BYTES + (0, Ub.Be)(wb)
        }
      }
      return !0
    }

    function ee(bb, wb, Mb) {
      var eb, Hb, pb;
      const Vb = Cb.Mb.kind(bb, wb),
        gb = 0 === Vb ? null : Xb(Vb);
      if (null === gb) return null;
      const lb = Cb.Mb.variation(bb, wb),
        Lb = Cb.Mb.pose(bb, wb),
        Ib = Cb.Mb.meta(bb, wb),
        Ob = Cb.Mb.mesh(bb, wb),
        Ub = 0 !== (Cb.Mb.flags(bb, wb) & Cb.Kb.HasOpts),
        tb = TM[gb];
      return Object.freeze({
        type: gb,
        variation: lb === Cb.Wc ? void 0 : null !== (eb = null !== (Hb = null === tb || void 0 === tb ? void 0 : tb[lb]) && void 0 !== Hb ? Hb : null === tb || void 0 === tb ? void 0 : tb[0]) && void 0 !== eb ? eb : "default",
        pose: Lb === Cb.fc ? void 0 : null !== (pb = Cb.yb[Lb]) && void 0 !== pb ? pb : Cb.yb[0],
        metaInfo: Ib === Cb.fc ? void 0 : Cb.Ic[Ib],
        meshKind: Ob === Cb.fc ? void 0 : Cb.Gc[Ob],
        meshOpts: Ub ? kM.decode(new Uint8Array(bb.buffer, bb.byteOffset + wb + Cb.Mb.BYTES, Mb)) : void 0
      })
    }
    const He = 1,
      pe = 2;
    class Ve {
      constructor(bb) {
        this.deps = bb, this.wanted = 0, this.dg = !1, this.refused = !1
      }
      get on() {
        return this.dg
      }
      want(bb, wb) {
        this.wanted = wb ? this.wanted | bb : this.wanted & ~bb;
        const Mb = 0 !== this.wanted;
        if (Mb === this.dg) return;
        const eb = this.deps.cmd();
        null !== eb ? (0, Cb.mg)(eb, 0, Mb ? 1 : 0) ? (this.dg = Mb, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.dg = !1
      }
    }
    class ge {
      constructor(bb) {
        this.deps = bb, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(bb) {
        var wb;
        return this.complete || this.fill(), null !== (wb = this.entries.get("string" === typeof bb ? bb : String(bb))) && void 0 !== wb ? wb : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(bb) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const bb = new Int32Array(2 * this.pending.length);
            bb.set(this.pending), this.pending = bb
          }
          this.pending[this.pendingCount++] = bb
        }
      }
      removed(bb) {
        this.entries.size > 0 && this.entries.delete(String(bb))
      }
      refresh() {
        const bb = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (bb > 0 && this.complete) {
          const {
            api: wb
          } = this.deps;
          let Mb = 0;
          const eb = this.ids = we(this.ids, bb);
          for (let Hb = 0; Hb < bb; Hb++) {
            const bb = this.pending[Hb],
              pb = wb.indexById.get(bb);
            void 0 === pb || zb(wb.kinds[pb]) ? this.entries.delete(String(bb)) : eb[Mb++] = bb
          }
          Mb > 0 && !this.batch(eb, Mb) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(He, !1)
      }
      fill() {
        const {
          api: bb
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: bb
          } = this.deps, wb = bb.on;
          bb.want(He, !0), !wb && bb.on && (this.refill = this.midFrame)
        }
        const {
          ids: wb,
          count: Mb
        } = be(bb, this.ids);
        this.ids = wb, Mb > 0 && !this.batch(wb, Mb) && (this.refill = !0)
      }
      batch(bb, wb) {
        return Me(this.deps.api, bb, wb, ((bb, wb) => {
          null === wb ? this.entries.delete(String(bb)) : this.entries.set(String(bb), wb)
        }))
      }
    }
    var le = Mb(5685);

    function Le(bb) {
      if ("message" !== bb.type || bb.tV !== le.nc.NewClientOptions || bb.payloadKind !== Ub.hc.Msgpack) return null;
      const wb = (0, vb.d)(bb.payload);
      if (null === wb || "object" !== typeof wb || Array.isArray(wb)) throw new Error("NewClientOptions whose body isn't an object of options");
      return wb
    }
    var Ie = Mb(1313),
      Oe = Mb(37936);

    function Ue(bb, wb, Mb, eb, Hb, pb, gb) {
      var lb, Lb, Ib;
      switch (bb) {
        case Cb.Yd.ToggleMenu: {
          const bb = Cb.E[wb];
          Vb.k.iI("toggleMenu", void 0 === bb ? "inventory" : `inventory|${bb}`);
          break
        }
        case Cb.Yd.EditBoard:
          Vb.k.iI("EditBoard", {
            pos: 0 === wb ? null : Mb
          });
          break;
        case Cb.Yd.EditCodeBlock:
        case Cb.Yd.ViewCodeBlock:
          Vb.k.iI("EditCodeBlock", {
            pos: Mb,
            canChangePos: bb === Cb.Yd.EditCodeBlock
          });
          break;
        case Cb.Yd.EditCustomLobbyBlock:
          Vb.k.iI("EditCustomLobbyBlock", {
            pos: Mb
          });
          break;
        case Cb.Yd.OpenIronChest:
          Vb.k.iI("OpenIronChest", {
            pos: Mb
          });
          break;
        case Cb.Yd.EditNameTag:
          Vb.k.iI("EditNameTag", null !== (lb = null === (Lb = Hb.dg()) || void 0 === Lb || null === (Ib = Lb.attributes.customAttributes) || void 0 === Ib ? void 0 : Ib.text) && void 0 !== lb ? lb : "");
          break;
        case Cb.Yd.EditBook: {
          var Ob, Ub, Eb;
          const bb = null === (Ob = Hb.dg()) || void 0 === Ob ? void 0 : Ob.attributes;
          Vb.k.iI("EditBook", {
            pages: (0, Ie.Q)(null === bb || void 0 === bb || null === (Ub = bb.customAttributes) || void 0 === Ub ? void 0 : Ub.pages),
            title: null !== (Eb = null === bb || void 0 === bb ? void 0 : bb.customDisplayName) && void 0 !== Eb ? Eb : "Title",
            isPublished: !(null === bb || void 0 === bb || !bb.customDescription)
          });
          break
        }
        case Cb.Yd.CantChangeBlock:
          ! function(bb, wb) {
            const Mb = wb.getClientOption("cantChangeError"),
              eb = wb.getClientOption(bb ? "cantBuildError" : "cantBreakError"),
              Hb = bb ? Mb : eb;
            (wb.getClientOption("canChange") || Hb || "You cannot modify this block" !== Mb) && Vb.k.iI("showBottomMessage", {
              message: eb || Mb,
              type: "Error"
            })
          }(1 === wb, pb);
          break;
        case Cb.Yd.MiddleBarStart:
          Vb.k.iI("middleScreenBarInitiate", {
            duration: eb,
            Cp: 1 === Mb[0],
            horizBarRemOffset: wb
          });
          break;
        case Cb.Yd.MiddleBarStop:
          Vb.k.iI("middleScreenBarRemove");
          break;
        case Cb.Yd.Hitmarker:
          Vb.k.iI("localGunHitmarker", {
            fw: 1 === wb
          });
          break;
        case Cb.Yd.ShotsLeft:
          Vb.k.iI("localPlayerNewShotsLeft", eb);
          break;
        case Cb.Yd.AimingOverlay:
          Vb.k.iI("aimingOverlay", 3 === (3 & wb) ? "sniper" : "none");
          break;
        case Cb.Yd.BottomMessage:
          Vb.k.iI("showBottomMessage", JSON.parse(gb()));
          break;
        case Cb.Yd.Crosshair:
          Hb.inaccuracy = (0, Qb.e)(eb), (0, Oe.b)().crosshairAccuracy(Hb.inaccuracy);
          break;
        case Cb.Yd.ChargeStage:
          break;
        case Cb.Yd.EmoteWheelClose:
          Vb.k.iI("requestEmoteWheelClose");
          break;
        case Cb.Yd.BlockMined:
          Vb.k.iI("localBlockMined");
          break;
        default:
          throw new tb.d(`UiEvent of no kind: what ${bb}`)
      }
    }
    var te = Mb(39239),
      Ce = Mb(35329),
      Ee = Mb(2175),
      Fe = Mb(38019),
      Be = Mb(35334),
      se = Mb(5672);
    const me = 10,
      he = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      ze = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Xe = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function xe(bb, wb) {
      let Mb, eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const pb = () => (Mb = (0, Ee.m)(Mb, wb()), Mb);
      return {
        current: pb,
        watch(wb) {
          const Mb = () => {
              wb(pb())
            },
            Vb = [bb.watch(Mb)];
          return null !== eb && Vb.push((0, Ee.o)((bb => {
            bb.some(eb) && Mb()
          }))), null !== Hb && Vb.push(Hb(Mb)), () => {
            for (const bb of Vb) bb()
          }
        }
      }
    }

    function je(bb) {
      return bb && {
        name: bb.name,
        amount: bb.amount,
        attributes: bb.attributes
      }
    }
    const Ke = new WeakMap;

    function re(bb) {
      let wb = Ke.get(bb);
      return void 0 === wb && (wb = (0, Be.creativeItemIds)().map((wb => ({
        name: bb.nameOfId(wb),
        amount: bb.isStackableId(wb) ? 1 : null,
        attributes: (0, te.c)("Gun" === (0, Be.itemTypeOf)(wb) ? {
          type: "Gun",
          clipSize: (0, Be.clipSizeOf)(wb)
        } : void 0)
      }))), Ke.set(bb, wb)), wb
    }

    function Re(bb, wb, Mb, eb) {
      const Hb = wb => (bb.flush(eb), wb),
        pb = Mb => {
          var eb, Hb, pb, Vb, gb, lb, Lb;
          const Ib = bb.slot(Mb);
          if (!Ib) return null;
          const {
            rootName: Ob,
            metaStr: Ub
          } = wb.getMetaInfo(Ib.name);
          return {
            name: Ib.name,
            amount: Ib.amount,
            attributes: Ib.attributes,
            instance: bb.instance(Mb),
            displayName: null !== (eb = Ib.attributes.customDisplayName) && void 0 !== eb ? eb : wb.getDisplayName(Ob),
            requiresAmmo: "RequiresAmmo" === Ub,
            clipSize: null !== (Hb = null !== (pb = null === (Vb = Ib.attributes.customAttributes) || void 0 === Vb || null === (gb = Vb.gunStats) || void 0 === gb ? void 0 : gb.clipSize) && void 0 !== pb ? pb : null === (lb = wb.getGunStats(Ob)) || void 0 === lb ? void 0 : lb.clipSize) && void 0 !== Hb ? Hb : null === (Lb = Ib.typeObj) || void 0 === Lb ? void 0 : Lb.clipSize
          }
        },
        gb = function(bb, wb) {
          let Mb = null,
            eb = {
              focus: null,
              recipes: [],
              detail: null
            },
            Hb = -1;
          const pb = new Set;
          return {
            read() {
              var pb, Vb;
              if (null === Mb) return null !== eb.focus && (eb = {
                ...eb,
                focus: null
              }), eb;
              if (eb.focus === Mb && Hb === bb.changes) return eb;
              if (Hb = bb.changes, 0 === bb.length) return eb = {
                focus: Mb,
                recipes: [],
                detail: null
              }, eb;
              let gb = 0;
              if (null !== Mb.recipe) try {
                gb = wb.getItemId(Mb.recipe.name)
              } catch {}
              const lb = bb.craftingView(Mb.station, gb, null !== (pb = null === (Vb = Mb.recipe) || void 0 === Vb ? void 0 : Vb.Fg) && void 0 !== pb ? pb : 0);
              return eb = null === lb ? {
                focus: Mb,
                recipes: [],
                detail: null
              } : function(bb, wb, Mb) {
                let eb = Cb.fb.BYTES;
                const Hb = [];
                for (let Ib = Cb.fb.recipes(bb, 0); Ib > 0; Ib--) {
                  const Mb = Cb._.flags(bb, eb),
                    pb = {
                      name: wb.nameOfId(Cb._.item(bb, eb)),
                      Fg: Cb._.recipe(bb, eb),
                      requires: [],
                      produces: Cb._.produces(bb, eb),
                      haveIngredients: 0 !== (Mb & Cb.W.HaveIngredients),
                      listed: 0 !== (Mb & Cb.W.Listed)
                    };
                  let Vb = Cb._.requires(bb, eb);
                  for (eb += Cb._.BYTES; Vb > 0; Vb--) {
                    const Mb = Cb.ab.items(bb, eb);
                    pb.requires.push({
                      items: Ye(bb, eb + Cb.ab.BYTES, Mb, wb),
                      amt: Cb.ab.amount(bb, eb)
                    }), eb += Cb.ab.BYTES + 2 * Mb
                  }
                  Hb.push(pb)
                }
                const pb = Cb.fb.flags(bb, 0);
                if (null === Mb.recipe || 0 === (pb & Cb.db.Detail)) return {
                  focus: Mb,
                  recipes: Hb,
                  detail: null
                };
                const Vb = {},
                  gb = {};
                for (let Ib = Cb.fb.ingredients(bb, 0); Ib > 0; Ib--) {
                  const Mb = Cb.U.item(bb, eb),
                    Hb = Cb.U.from(bb, eb),
                    pb = Cb.U.amount(bb, eb);
                  eb += Cb.U.BYTES;
                  const lb = Hb === Cb.B ? null : Ye(bb, eb, Hb, wb);
                  if (null !== lb && (eb += 2 * Hb), 0 === Mb) continue;
                  const Lb = wb.nameOfId(Mb);
                  Vb[Lb] = pb, null !== lb && (gb[Lb] = lb)
                }
                const {
                  name: lb,
                  Fg: Lb
                } = Mb.recipe;
                return {
                  focus: Mb,
                  recipes: Hb,
                  detail: {
                    name: lb,
                    Fg: Lb,
                    craftAllTimes: Cb.fb.craftAllTimes(bb, 0),
                    roomForOne: 0 !== (pb & Cb.db.RoomForOne),
                    resultStackable: Boolean(wb.getItemStat(lb, "stackable")),
                    amounts: Vb,
                    ingredientsCraftedFrom: gb
                  }
                }
              }(lb, wb, Mb), eb
            },
            setFocus(bb) {
              Mb = bb;
              for (const wb of [...pb]) wb()
            },
            watchFocus: bb => (pb.add(bb), () => {
              pb.delete(bb)
            })
          }
        }(bb, wb);
      return {
        states: {
          inventory: xe(bb, (() => {
            const Mb = bb.length;
            if (0 === Mb) return he;
            const eb = [];
            for (let wb = 0; wb < Cb.nd; wb++) eb.push(je(bb.slot(wb)));
            const Hb = bb.slotIcon,
              pb = eb[bb.selectedSlot];
            0 !== Hb && pb && (eb[bb.selectedSlot] = {
              ...pb,
              icon: wb.nameOfId(Hb)
            });
            const Vb = !0 === wb.getClientOption("creative");
            let gb = [],
              lb = null;
            if (Mb > Cb.nd) {
              for (let wb = Cb.nd; wb < Mb; wb++) gb.push(je(bb.slot(wb)));
              lb = {
                type: null,
                pos: [...bb.aH],
                numSlots: Mb - Cb.nd,
                ironChest: null
              }
            } else Vb && (gb = re(wb));
            return {
              player: eb,
              chestOrCreative: gb,
              chest: lb,
              creative: Vb,
              selectedSlot: bb.selectedSlot,
              freeSlots: bb.freeSlots()
            }
          }), (0, Ee.i)("creative")),
          hotbar: xe(bb, (() => {
            if (0 === bb.length) return ze;
            const wb = [];
            for (let bb = 0; bb < me; bb++) wb.push(pb(bb));
            return {
              items: wb,
              ammo: bb.amountOf("Ammo"),
              selectedSlot: bb.selectedSlot
            }
          }), (0, Ee.e)("DisplayName", "GunStats")),
          crafting: xe(bb, gb.read, null, gb.watchFocus),
          heldItemAim: xe(bb, (() => {
            var wb;
            if (!Mb()) return Xe;
            const eb = null === (wb = bb.dg()) || void 0 === wb ? void 0 : wb.typeObj,
              Hb = "Gun" === (null === eb || void 0 === eb ? void 0 : eb.type);
            return {
              gun: Hb,
              aimable: Hb || !0 === (null === eb || void 0 === eb ? void 0 : eb.showsAimingUi),
              chargeName: "Chargeable" === (null === eb || void 0 === eb ? void 0 : eb.type) ? eb.name : null
            }
          }), null, (bb => function(bb, wb) {
            let Mb = bb();
            return (0, se.x)((() => {
              const eb = bb();
              eb !== Mb && (Mb = eb, wb(eb))
            }))
          }(Mb, bb)))
        },
        events: {
          hotbarSlotRequested: (0, Ee.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Ee.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, Ee.c)("numkeyPressed"),
          inventoryDropRequested: (0, Ee.c)("DropInvenItem"),
          chestToggled: (0, Ee.c)("chestToggleFromServer"),
          chestRefreshed: (0, Ee.c)("chestRefreshedFromServer", ce),
          inventorySynced: (0, Ee.c)("syncedInvenFromServer", ce),
          enchantingTableOpened: (0, Ee.c)("enchantingTable", (bb => {
            let {
              position: Mb,
              Lg: eb
            } = bb;
            return {
              position: [...Mb],
              blockName: wb.getMetaInfo(eb).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(wb) {
            bb.selectSlot(wb), bb.flush(eb)
          },
          removeInventoryItem(wb) {
            let {
              slot: Mb,
              amount: eb,
              drop: pb
            } = wb;
            return Hb(bb.remove(Mb, eb, pb))
          },
          swapInventorySlots(wb) {
            let {
              a: Mb,
              b: eb
            } = wb;
            return Hb(bb.swap(Mb, eb))
          },
          moveInventoryItem(wb) {
            let {
              from: Mb,
              to: eb,
              amount: pb
            } = wb;
            return Hb(bb.move(Mb, eb, pb))
          },
          quickMoveInventoryItem(wb) {
            let {
              slot: Mb,
              start: eb,
              end: pb,
              amount: Vb
            } = wb;
            return Hb(bb.quickMove(Mb, eb, pb, Vb))
          },
          closeChest() {
            bb.closeChest(), bb.flush(eb), Vb.k.iI("chestClosedByPlayer")
          },
          focusCrafting(bb) {
            gb.setFocus(bb)
          },
          craftRecipe(wb) {
            let {
              name: Mb,
              Fg: eb,
              times: pb
            } = wb;
            return Hb(bb.craft(Mb, eb, pb))
          },
          salvageItem(wb) {
            let {
              slot: Mb,
              name: eb,
              amount: pb
            } = wb;
            return Hb(bb.salvage(Mb, eb, pb))
          },
          enchantItem(wb) {
            let {
              slot: Mb,
              level: eb,
              tablePos: Hb
            } = wb;
            bb.enchant(Mb, eb, Hb)
          }
        },
        queries: {
          enchantingOffer(Mb) {
            let {
              slot: eb,
              blockName: Hb
            } = Mb;
            return function(bb, wb, Mb, eb) {
              const Hb = bb.slot(Mb);
              if (!Hb || !wb.getClientOption("canCraft") || !(0, Ce.s)(eb) || (0, Ce.p)(Hb.attributes)) return De;
              const pb = (0, Be.enchantmentPerksOf)(wb.getItemId(Hb.name));
              if (0 === pb.length) return De;
              const Vb = [];
              for (let gb = 0; gb < Fe.d; gb++) {
                const {
                  commonProb: bb,
                  uncommonProb: wb,
                  rareProb: Mb,
                  epicProb: Hb,
                  legendaryProb: pb,
                  level: lb
                } = (0, Ce.g)(eb, gb);
                Vb.push({
                  level: lb,
                  odds: [bb, wb, Mb, Hb, pb].map((bb => 100 * bb))
                })
              }
              return {
                perks: [...pb],
                options: Vb
              }
            }(bb, wb, eb, Hb)
          }
        }
      }
    }
    const De = Object.freeze({
      perks: [],
      options: []
    });

    function ce() {
      return null
    }

    function Ye(bb, wb, Mb, eb) {
      const Hb = [];
      for (let pb = 0; pb < Mb; pb++) {
        const Mb = bb.getUint16(wb + 2 * pb, !0);
        0 !== Mb && Hb.push(eb.nameOfId(Mb))
      }
      return Hb
    }
    class Ze {
      constructor(bb) {
        this.api = bb, this.positions = new Map, this.targeted = {
          X3: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          VF: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(bb) {
        let wb = this.positions.get(bb);
        return wb || (this.api.checkValid(bb) || this.api.isLocal(bb) ? (wb = [NaN, NaN, NaN], this.api.readPosition(bb, wb), this.positions.set(bb, wb), wb) : null)
      }
      awb() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [wb, Mb] of this.positions) this.api.readPosition(wb, Mb) || this.api.checkValid(wb) || this.api.isLocal(wb) || this.positions.delete(wb);
        const bb = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Cb.q.playerFlags(bb, 0) & Cb.Ad.Breaking) && Cb.q.breakingProgress(bb, 0) >= 0, this.isBreaking)
          for (let wb = 0; wb < 3; wb++) this.breaking[wb] = Cb.q.breakingPos(bb, 0, wb)
      }
      refreshTarget() {
        const bb = this.api.apiView,
          wb = Cb.q.targetBlockId(bb, 0);
        if (this.hasTarget = wb !== Cb.Tc, this.hasTarget) {
          const Mb = this.targeted;
          Mb.X3 = wb;
          for (let wb = 0; wb < 3; wb++) Mb.position[wb] = Cb.q.targetBlock(bb, 0, wb), Mb.normal[wb] = Cb.q.targetNormal(bb, 0, wb), Mb.VF[wb] = Cb.q.targetAdjacent(bb, 0, wb)
        }
      }
      despawned(bb) {
        const wb = this.positions.get(bb);
        wb && !this.api.isLocal(bb) && (wb.fill(NaN), this.positions.delete(bb))
      }
    }
    var fe = Mb(42293),
      Ae = Mb(42274),
      We = Mb(37602),
      Je = Mb(37695);
    const Se = 1,
      Ne = 2;
    class ve {
      constructor() {
        this.game = new Je.d, this.client = new Je.d, this.dg = 0, this.movesFly = null
      }
      setGame(bb) {
        if (null === bb || "object" !== typeof bb) return !1;
        const {
          key: wb,
          value: Mb
        } = bb;
        return "string" === typeof wb && (this.game.setBooleanType(wb, Boolean(Mb)), !0)
      }
      setClient(bb, wb) {
        this.client.setBooleanType(bb, wb)
      }
      clearGame() {
        this.game = new Je.d, this.movesFly = null
      }
      setMovesFly(bb) {
        this.movesFly = bb
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Se : 0) | (this.client._getTotalBooleanVal() ? Ne : 0)
      }
      write(bb) {
        const wb = this.perms(),
          {
            movesFly: Mb
          } = this;
        if (wb === this.dg && null === Mb) return !0;
        let eb = Cb.Nb.Keep;
        return null !== Mb && (eb = Mb ? Cb.Nb.On : Cb.Nb.Off), !(!bb || !(0, Cb.te)(bb, 0, eb, wb, Mb ? 1 : 0)) && (this.dg = wb, this.movesFly = null, !0)
      }
    }
    class Qe {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = bb, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: gb.c,
          get y() {
            return wb()
          }
        }
      }
      get hasView() {
        const bb = this.api.apiView,
          wb = Cb.q.viewProj;
        return 0 !== wb(bb, 0, 3) || 0 !== wb(bb, 0, 7) || 0 !== wb(bb, 0, 11) || 0 !== wb(bb, 0, 15)
      }
      get cameraPosition() {
        const bb = this.api.apiView,
          {
            eye: wb
          } = this;
        for (let Mb = 0; Mb < 3; Mb++) wb[Mb] = Cb.q.eye(bb, 0, Mb);
        return wb
      }
      get cameraDirection() {
        const bb = this.api.apiView,
          wb = Cb.q.viewProj,
          Mb = wb(bb, 0, 3),
          eb = wb(bb, 0, 7),
          Hb = wb(bb, 0, 11),
          pb = Math.hypot(Mb, eb, Hb),
          {
            forward: Vb
          } = this;
        return pb > 0 && (Vb[0] = Mb / pb, Vb[1] = eb / pb, Vb[2] = Hb / pb), Vb
      }
      get cameraHeading() {
        return Cb.q.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Cb.q.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Cb.q.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Cb.q.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(bb) {
        this.clip(bb);
        const {
          clipX: wb,
          clipY: Mb,
          clipW: eb
        } = this;
        if (eb > 0) {
          const bb = wb / eb * 50,
            Hb = -Mb / eb * 50;
          return Math.abs(bb) <= this.screenBandPct.x && Math.abs(Hb) <= this.screenBandPct.y ? {
            x: 50 + bb,
            y: 50 + Hb
          } : this.clampToBand(bb, Hb)
        }
        const Hb = this.cameraPosition,
          pb = Math.hypot(bb[0] - Hb[0], bb[1] - Hb[1], bb[2] - Hb[2]),
          Vb = this.api.apiView,
          gb = Cb.q.viewProj,
          lb = pb > 0 ? wb / pb : 0,
          Lb = pb > 0 ? -Mb / pb : 0,
          Ib = Math.hypot(gb(Vb, 0, 1), gb(Vb, 0, 5), gb(Vb, 0, 9)),
          Ob = lb / Math.hypot(gb(Vb, 0, 0), gb(Vb, 0, 4), gb(Vb, 0, 8)),
          Ub = Lb / Ib,
          tb = !(Math.abs(Ob) >= .001 || Math.abs(Ub) >= .001);
        return this.clampToBand(lb, tb ? -(Ib || 1) : Lb)
      }
      projectDirectionToScreenPos(bb) {
        if (!this.hasView) return;
        const wb = this.cameraPosition,
          Mb = this.along;
        for (let eb = 0; eb < 3; eb++) Mb[eb] = wb[eb] + 10 * bb[eb];
        return this.projectWorldPosToScreenPos(Mb)
      }
      projectWorldPosToViewport(bb) {
        this.clip(bb);
        const {
          clipX: wb,
          clipY: Mb,
          clipW: eb
        } = this;
        return eb > 0 ? {
          x: 50 + wb / eb * 50,
          y: 50 - Mb / eb * 50
        } : null
      }
      clip(bb) {
        const wb = this.api.apiView,
          Mb = bb[0] - Cb.q.origin(wb, 0, 0),
          eb = bb[1] - Cb.q.origin(wb, 0, 1),
          Hb = bb[2] - Cb.q.origin(wb, 0, 2),
          pb = Cb.q.viewProj;
        this.clipX = pb(wb, 0, 0) * Mb + pb(wb, 0, 4) * eb + pb(wb, 0, 8) * Hb + pb(wb, 0, 12), this.clipY = pb(wb, 0, 1) * Mb + pb(wb, 0, 5) * eb + pb(wb, 0, 9) * Hb + pb(wb, 0, 13), this.clipW = pb(wb, 0, 3) * Mb + pb(wb, 0, 7) * eb + pb(wb, 0, 11) * Hb + pb(wb, 0, 15)
      }
      clampToBand(bb, wb) {
        return (0, gb.f)(bb, wb, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Ge = Mb(5701);
    const qe = new TextEncoder,
      ae = new Uint8Array(Cb.J * Cb.H);
    class ie {
      constructor() {
        this.buttons = [], this.dg = !0
      }
      set(bb) {
        this.buttons = bb, this.dg = !1
      }
      attached() {
        this.dg = 0 === this.buttons.length
      }
      write(bb) {
        if (this.dg) return;
        const wb = new Uint8Array(Cb.J),
          Mb = new Uint8Array(Cb.J);
        let eb = 0,
          Hb = 0;
        for (const {
            id: pb,
            keycode: Vb
          }
          of this.buttons) {
          if (eb === Cb.J) break;
          const {
            read: bb,
            written: gb
          } = qe.encodeInto(pb, ae.subarray(Hb, Hb + Cb.H));
          if (bb < pb.length) continue;
          const lb = Ge.k[Vb];
          wb[eb] = "number" === typeof lb ? lb : 0, Mb[eb] = gb, eb++, Hb += gb
        }
        this.dg = (0, Cb.ge)(bb, 0, eb, wb, Mb, ae.subarray(0, Hb))
      }
    }

    function ue(bb, wb, Mb) {
      const eb = qe.encode(wb);
      return eb.length <= Cb.H && function(bb, wb, Mb, eb) {
        return (0, pM.d)(), (0, Cb.mf)(bb, wb, Mb, eb)
      }(bb, 0, Mb ? 1 : 0, eb)
    }
    var de = Mb(40586);
    const Pe = new TextDecoder,
      ne = new TextEncoder,
      ye = new Uint8Array(0),
      oe = [0, 0, 0],
      Te = {
        off: Cb.Ed.Off,
        key: Cb.Ed.Key,
        touch: Cb.Ed.Touch
      };
    class ke {
      constructor(bb) {
        var wb;
        this.options = bb, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new ie, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = rb.r.DEFAULT, this.pendingZoom = null, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new ve, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.bO = bb => {
          if ((0, tb.i)(bb)) throw bb;
          this.onError(bb)
        }, this.api = bb.api, this.tables = bb.tables, this.onError = null !== (wb = bb.onError) && void 0 !== wb ? wb : bb => {
          console.error("Error in client game callback", bb)
        }, this.renderFrame = new Qe(this.api, bb.screenBandY), this.live = new Ze(this.api), this.chunks = new Iw(this.api.memory, (() => this.api.apiView)), this.items = new fM({
          api: this.api,
          tables: bb.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: bb.beforeOp
        });
        const Mb = () => this.stopped() ? null : this.cmd,
          eb = () => this.sessionLive;
        this.entityInfoWatch = new Ve({
          cmd: Mb,
          onError: this.onError
        }), this.entityInfo = new ge({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: eb
        }), this.particles = new yM({
          cmd: Mb,
          isSessionLive: eb,
          onError: this.onError
        }), this.clientApi = new xM({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: bb.tables,
          cmd: Mb,
          sendCmd: () => this.sendCmd(),
          isSessionLive: eb,
          beforeWrite: () => {
            var wb;
            if (this.stopped()) return !1;
            const Mb = this.generation;
            return !1 !== (null === (wb = bb.beforeWrite) || void 0 === wb ? void 0 : wb.call(bb)) && Mb === this.generation
          },
          playerDbId: () => {
            const bb = this.session;
            if (null === bb) throw new Error("No game session has started, so the local player has no DB id");
            return bb.playerDbId
          },
          playSound: bb.playSound,
          preloadSounds: bb.preloadSounds,
          setLocalOptions: bb.setLocalOptions,
          hasPackModel: bb.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new Pb({
          api: this.api,
          reportError: wb => {
            var Mb;
            this.bO(wb), null === (Mb = bb.reportCameraFault) || void 0 === Mb || Mb.call(bb, wb)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: bb.cameraScreen,
          showFacing: bb.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Re(this.items, this.tables, (() => this.localPlayerAlive()), this.bO), this.itemSources
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
      clickCodeBlock(bb) {
        const wb = this.sessionLive ? this.sendCmd() : null;
        return null !== wb && (Mb = wb, eb = 0, Hb = bb[0], pb = bb[1], Vb = bb[2], (0, pM.d)(), (0, Cb.me)(Mb, eb, Hb, pb, Vb));
        var Mb, eb, Hb, pb, Vb
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(bb) {
        const wb = this.liveCmd();
        return null === wb ? (this.pendingZoom = bb, !1) : (this.pendingZoom = null, (0, Cb.eg)(wb, 0, bb, 1))
      }
      RZ(bb) {
        const wb = this.stopped() ? null : this.cmd;
        return null !== wb && (0, Cb.Zf)(wb, 0, bb ? 1 : 0)
      }
      respawn() {
        const bb = this.sessionLive ? this.sendCmd() : null;
        return null !== bb && (wb = bb, Mb = 0, (0, pM.d)(), (0, Cb.uf)(wb, Mb));
        var wb, Mb
      }
      bindCustomButtonKeys(bb) {
        this.customButtons.set(bb)
      }
      pressCustomButton(bb, wb) {
        const Mb = this.sessionLive ? this.sendCmd() : null;
        return null !== Mb && ue(Mb, bb, wb)
      }
      padMove(bb, wb, Mb, eb, Hb, pb) {
        const Vb = this.liveCmd();
        return null !== Vb && (0, Cb.Xe)(Vb, 0, bb, wb, Mb, eb, Hb, pb)
      }
      thirdPersonFor(bb) {
        const wb = this.liveCmd();
        return null !== wb && (0, Cb.jg)(wb, 0, null !== bb && void 0 !== bb ? bb : 1 / 0)
      }
      send(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== eb && VM(eb, Mb ? Ub.od : 0, bb, (0, vb.h)(wb))
      }
      socketAttached(bb) {
        this.openSocket = bb, this.socketLeftSinceAttach = !1
      }
      socketDetached(bb) {
        this.openSocket === bb && (this.openSocket = 0)
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
      attach(bb) {
        const wb = () => bb.isStopped;
        this.stopped = wb, this.cmd = bb.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const Mb = this.api.apiView;
        this.overflowGen = Cb.q.eventOverflowGen(Mb, 0), this.resyncOwed = 0 !== Cb.q.eventOverflowMask(Mb, 0), bb.setGameHost(this), bb.setEventWalker((bb => {
          this.api.walk(bb, this, wb)
        }))
      }
      watchPromptPick(bb) {
        this.promptWatch = bb, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : bH(Cb.q.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Cb.mc.None : Cb.q.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Cb.q.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === bb || bb >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, bb, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(bb) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(bb)
      }
      netEvent(bb) {
        "connection" === bb.type ? bb.phase === Ub.B.Activated && bb.conn !== this.activeConn && bb.conn > this.closedThrough ? (this.endSession(), this.activeConn = bb.conn, this.endGameGrants(), this.dropGameCamera()) : bb.phase !== Ub.B.Left && bb.phase !== Ub.B.Closed || bb.conn !== this.activeConn ? bb.phase === Ub.B.Resumed && 0 !== this.activeConn && bb.conn > this.closedThrough && (this.activeConn = bb.conn) : this.closeGame() : bb.conn === this.activeConn && 0 !== bb.conn && (bb.tV === Ae.t ? this.gunHit(bb.payload) : bb.tV === le.nc.EditItemCraftingRecipes || bb.tV === Ae.Q ? this.items.touch() : (this.serverOptions(bb), this.gameMessage(bb)));
        const wb = this.options.onNetEvent;
        wb && this.guard((() => {
          wb(bb)
        }))
      }
      serverOptions(bb) {
        const wb = this.options.serverOptions,
          Mb = wb ? this.decoded(Le, bb) : null;
        if (wb && Mb) {
          this.guard((() => {
            wb.applyNewClientOptions(Mb)
          }));
          const bb = Mb.holdThirdPerson;
          void 0 !== bb && (this.thirdPersonWanted = bb, this.writeOwedThirdPerson())
        }
      }
      gameMessage(bb) {
        let wb = null;
        try {
          wb = function(bb) {
            if ("message" !== bb.type || bb.tV !== le.nc.GameCodeMessage || bb.payloadKind !== Ub.hc.Msgpack) return null;
            const wb = (0, vb.d)(bb.payload);
            if (null === wb || "object" !== typeof wb || "string" !== typeof wb.messageType) throw new Error("GameCodeMessage without a messageType");
            return wb
          }(bb)
        } catch (Mb) {
          this.sessionLive && this.onError(Mb)
        }
        if (wb) {
          const {
            messageType: bb,
            data: Mb
          } = wb;
          if ((0, Yb.e)(bb)) return void this.guard((() => {
            (0, Yb.c)(bb, Mb)
          }));
          "freeCamPerms" === bb && this.freeCam.setGame(Mb) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (wb => {
            wb.onReceivedMessageFromServer(bb, Mb)
          }))
        }
      }
      decoded(bb, wb) {
        try {
          return bb(wb)
        } catch (Mb) {
          return this.onError(Mb), null
        }
      }
      setClientFreeCameraGrant(bb, wb) {
        this.freeCam.setClient(bb, wb), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(bb) {
        this.freeCam.setMovesFly(bb), this.writeFreeCam()
      }
      setBlockHighlight(bb) {
        this.highlight = bb, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedThirdPerson() {
        const bb = this.thirdPersonWanted;
        bb !== this.thirdPersonHeld && this.thirdPersonFor(bb ? void 0 : 0) && (this.thirdPersonHeld = bb)
      }
      writeOwedHighlight() {
        const bb = this.liveCmd();
        if (null === bb || !this.highlightOwed) return;
        const wb = this.highlight;
        this.highlightOwed = null === wb ? !(0, Cb.He)(bb, 0, oe, oe, 0) : !(0, Cb.He)(bb, 0, wb.pos, wb.normal, 1)
      }
      localPlayerBound(bb) {
        var wb, Mb;
        if (0 === this.activeConn || this.sessionLive && bb === this.boundId) return;
        const eb = this.sessionLive;
        let Hb, pb, Vb, gb;
        this.endSession(), eb && this.restartGameCamera();
        try {
          var lb;
          this.session = null;
          const bb = this.options.sessionInfo(this.activeConn);
          if (this.session = bb, !bb) return;
          Hb = bb.gameNameWithVariation, pb = null !== (lb = (0, Rb.Sb)(Hb)) && void 0 !== lb ? lb : void 0, Vb = (0, Db.o)(bb.lobbyName), gb = (0, Db.E)(bb.lobbyName)
        } catch (sb) {
          return void this.onError(sb)
        }
        const Lb = {
          localPlayerId: String(bb)
        };
        let Ib = {},
          Ob = [];
        try {
          var Ub, tb;
          Ib = null !== (Ub = null === (tb = this.options.gameFactory((0, Rb.Zb)(Hb))) || void 0 === tb ? void 0 : tb(gb, Vb, pb, Lb)) && void 0 !== Ub ? Ub : {}
        } catch (sb) {
          this.bO(sb)
        }
        try {
          var Cb, Eb;
          Ob = (0, cb.d)(null === (Cb = (Eb = this.options).defaultPlugins) || void 0 === Cb ? void 0 : Cb.call(Eb, gb, Vb, pb, Lb), Ib.plugins)
        } catch (sb) {
          this.bO(sb)
        }
        const Fb = [Ib, ...Ob];
        this.owners = Fb, this.tickers = Fb.filter((bb => void 0 !== bb.sO)), this.renderers = Fb.filter((bb => void 0 !== bb.onAfterRender)), this.receivers = Fb.filter((bb => void 0 !== bb.onReceivedMessageFromServer)), this.writeAltVeto(Fb), this.writeHooks(Fb), this.writePublicLobby(gb), this.writeLocalDbId(null !== (wb = null === (Mb = this.session) || void 0 === Mb ? void 0 : Mb.playerDbId) && void 0 !== wb ? wb : null), this.boundId = bb, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(Fb, (bb => {
          var wb;
          null === (wb = bb.onCreate) || void 0 === wb || wb.call(bb, this.clientApi)
        }));
        const Bb = this.generation;
        setTimeout((() => {
          Bb === this.generation && !0 === this.tables.getClientOption("creative") && re(this.tables)
        }), 0)
      }
      chunkSlot(bb, wb, Mb, eb, Hb, pb) {
        this.chunks.apply(bb, wb, Mb, eb, Hb, pb)
      }
      entityAdded(bb) {
        var wb;
        this.entityInfo.stale(bb), null === (wb = this.options.replayEntities) || void 0 === wb || wb.entityAdded(bb)
      }
      entityInfoChanged(bb) {
        var wb;
        this.entityInfo.stale(bb), null === (wb = this.options.replayEntities) || void 0 === wb || wb.entityInfoChanged(bb)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const bb = performance.now();
          this.round(this.tickers, wH), (0, se.b)(performance.now() - bb)
        }
      }
      afterWalk(bb) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight(), this.writeOwedThirdPerson();
        const wb = this.options.replayEntities;
        wb && this.guard((() => {
          this.entityInfoWatch.want(pe, wb.wantsWatch), wb.flush(this.entityInfoWatch.on)
        }));
        const Mb = this.api.apiView,
          eb = Cb.q.frameMs(Mb, 0);
        We.l.frame(eb, Cb.q.heading(Mb, 0), Cb.q.pitch(Mb, 0), We.g[bb]);
        const Hb = (0, se.l)(bb, eb);
        if (null !== Hb) {
          const bb = this.renderFrame;
          this.guard((() => {
            (0, Oe.b)().turnDamageIndicators(bb.cameraHeading), (0, Oe.b)().turnSoundCues(bb.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Hb)
          })), this.round(this.renderers, (wb => {
            wb.onAfterRender(Hb, bb)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Hb)
        } catch (Vb) {
          this.bO(Vb)
        }
        this.showZoom(), this.items.flush(this.bO), this.writePromptWatch(), this.writeCustomButtons();
        const pb = this.ticks;
        this.ticks = 0, (0, se.i)(pb, bb, Hb, this.bO)
      }
      entityRemoved(bb) {
        this.live.despawned(bb), this.entityInfo.removed(bb)
      }
      ackEventOverflow() {
        const bb = this.api.apiView,
          wb = Cb.q.eventOverflowGen(bb, 0),
          Mb = wb - this.overflowGen >>> 0;
        if (0 === Mb && !this.resyncOwed) return;
        this.overflowGen = wb;
        const eb = Cb.q.eventOverflowMask(bb, 0),
          Hb = this.cmd;
        0 === eb || null === Hb || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Cb.se)(Hb, 0, eb);
        const pb = this.options.onEventOverflow;
        0 !== Mb && pb && this.guard((() => {
          pb(eb, Mb)
        }))
      }
      gameCall(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        if (bb === Cb.dc.Director) try {
          return this.scriptedCamera.call(wb, Mb, eb, Hb, pb, Vb)
        } catch (Lb) {
          return this.bO(Lb), Cb.ib.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return bb === Cb.dc.AltVeto ? Cb.g.Allow : 0;
        try {
          return this.callGames(bb, wb, Mb, eb, Hb, pb, Vb, gb)
        } catch (Lb) {
          throw (0, tb.i)(Lb) && (this.fault = Lb), Lb
        }
      }
      takeFault() {
        const bb = this.fault;
        return this.fault = void 0, bb
      }
      callGames(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: lb
        } = this.options, Lb = String(this.boundId);
        switch (bb) {
          case Cb.dc.AltVeto:
          case Cb.dc.AltAction: {
            const gb = 0 !== Vb,
              [Ib, Ob, Ub] = gb ? [wb, Mb, eb] : [void 0, void 0, void 0],
              tb = gb ? lb.nameOfId(Hb) : "Air",
              Eb = bH(pb);
            if (bb === Cb.dc.AltAction) return this.first((bb => {
              var wb;
              return null === (wb = bb.onPlayerAltAction) || void 0 === wb ? void 0 : wb.call(bb, Lb, Ib, Ob, Ub, tb, Eb)
            })), 0;
            const Fb = this.first((bb => {
              var wb;
              return null === (wb = bb.onPlayerAttemptAltAction) || void 0 === wb ? void 0 : wb.call(bb, Lb, Ib, Ob, Ub, tb, Eb)
            }));
            return "preventAction" === Fb ? Cb.g.Prevent : "preventPlacement" === Fb ? Cb.g.PreventPlacement : Cb.g.Allow
          }
          case Cb.dc.Click: {
            const bb = gb,
              Ib = 0 !== (bb & Cb.P.Alt),
              Ob = 0 !== (bb & Cb.P.HasPos),
              Ub = Ob ? lb.nameOfId(Hb) : "Air",
              [tb, Eb, Fb] = Ob ? [wb, Mb, eb] : [null, null, null],
              Bb = bH(pb),
              sb = 0 !== (bb & Cb.P.Up),
              mb = bH(Vb);
            if (0 === (bb & Cb.P.AttackOnly) && this.first((bb => {
                var wb, Mb;
                return sb ? null === (wb = bb.onPlayerClickUp) || void 0 === wb ? void 0 : wb.call(bb, Lb, Ib, tb, Eb, Fb, Ub, Bb) : null === (Mb = bb.onPlayerClick) || void 0 === Mb ? void 0 : Mb.call(bb, Lb, Ib, tb, Eb, Fb, Ub, Bb)
              })), !sb && !Ib && null !== mb) {
              const bb = this.clientApi.getPositionView(mb),
                wb = bb ? [bb[0], bb[1], bb[2]] : [0, 0, 0];
              this.first((bb => {
                var Mb;
                return null === (Mb = bb.onPlayerAttackEntity) || void 0 === Mb ? void 0 : Mb.call(bb, Lb, mb, wb)
              }))
            }
            return 0
          }
          case Cb.dc.ChangeBlock: {
            const bb = lb.nameOfId(Hb),
              Vb = lb.nameOfId(pb);
            return this.first((Hb => {
              var pb;
              return null === (pb = Hb.onPlayerChangeBlock) || void 0 === pb ? void 0 : pb.call(Hb, Lb, wb, Mb, eb, bb, Vb)
            })), 0
          }
          case Cb.dc.DropItem: {
            const bb = lb.nameOfId(wb);
            return this.first((wb => {
              var Hb;
              return null === (Hb = wb.onPlayerDropItem) || void 0 === Hb ? void 0 : Hb.call(wb, Lb, bb, Mb, eb)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${bb}`)), 0
        }
      }
      changeBlockFail(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = Hb === Cb.Oc ? null : Pe.decode(this.api.eventBytes(pb, Math.min(Hb, Vb)));
        this.failures.push({
          Uw: [bb, wb, Mb],
          tw: eb,
          Cw: gb
        })
      }
      changeBlockFailEnd() {
        const bb = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (wb => {
          var Mb;
          null === (Mb = wb.onChangeBlockFail) || void 0 === Mb || Mb.call(wb, bb)
        })), this.iI("blockChangeRefused", null), this.iI("EditBoard", {
          pos: null
        }), this.iI("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(bb, wb, Mb, eb, Hb, pb) {
        bb === Cb.qc.ChestOpened ? this.items.chestOpened(Mb, eb, Hb) : bb !== Cb.qc.Synced && bb !== Cb.qc.ChestClosed && bb !== Cb.qc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(bb, wb, Mb, eb) {
            switch (bb) {
              case Cb.qc.Synced:
                Vb.k.iI("syncedInvenFromServer");
                break;
              case Cb.qc.ChestOpened:
              case Cb.qc.ChestClosed:
                Vb.k.iI("chestToggleFromServer", bb === Cb.qc.ChestOpened, !0);
                break;
              case Cb.qc.ChestRefreshed:
                Vb.k.iI("chestRefreshedFromServer");
                break;
              case Cb.qc.EnchantingTable:
                Vb.k.iI("enchantingTable", {
                  Lg: eb,
                  position: Mb
                });
                break;
              case Cb.qc.HotbarRequest:
                Vb.k.iI("setSelectedInventorySlotI", wb, !0);
                break;
              case Cb.qc.Scrolled:
                Vb.k.iI("ScrollInventorySlot", wb);
                break;
              case Cb.qc.NumberKey:
                Vb.k.iI("numkeyPressed", wb + 1);
                break;
              case Cb.qc.DropRequested:
                Vb.k.iI("DropInvenItem", 0 !== wb);
                break;
              default:
                throw new tb.d(`InventoryEvent of no kind: what ${bb}`)
            }
          }(bb, wb, [Mb, eb, Hb], pb)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(bb, wb, Mb, eb) {
        this.iI("shotPlayer", {
          playerId: String(bb),
          damage: wb,
          wasCrit: 0 !== eb,
          distance: Mb
        })
      }
      localHurt(bb, wb) {
        this.iI("closeShopOnDamaged", null), this.guard((() => {
          Vb.k.iI("damagedByOtherPlayer", {
            xH: null,
            direction: Number.isNaN(wb) ? null : wb,
            SH: bb
          })
        }))
      }
      attackHit(bb, wb, Mb, eb, Hb) {
        this.guard((() => {
          Vb.k.iI("yourAttackHit", {
            fw: eb,
            screenPos: this.renderFrame.projectDirectionToScreenPos([bb, wb, Mb]),
            hitSelf: Hb
          })
        }))
      }
      physicsType(bb) {
        this.localPhysicsType = bb, this.iI("PlayerPhysicsTypeUpdate", bb)
      }
      vehicleEffect(bb, wb, Mb, eb, Hb) {
        this.guard((() => {
          bb === Ub.Fd.UPDATE ? (0, fb.j)(wb, {
            icon: Mb,
            level: eb,
            displayName: null,
            durationMs: Hb
          }) : Zb.d.remove(wb)
        }))
      }
      zoomChanged(bb) {
        this.zoom = bb, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.iI("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.iI("showBottomMessage", de.e)
      }
      showZoom() {
        const bb = this.scriptedCamera.holdsView();
        !this.zoomUnshown || bb && this.zoomHeld || (this.zoomUnshown = !1, this.iI("cameraZoomSet", this.zoom)), this.zoomHeld = bb
      }
      gunHit(bb) {
        this.guard((() => {
          const {
            xH: wb,
            jH: Mb
          } = (0, fe.c)(Ae.t, bb);
          Vb.k.iI("damagedByOtherPlayer", {
            xH: wb,
            direction: Mb
          })
        }))
      }
      uiEvent(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        this.guard((() => {
          Ue(bb, wb, [Mb, eb, Hb], pb, this.items, this.options.tables, (() => Pe.decode(this.api.eventBytes(Vb, gb))))
        }))
      }
      writeAltVeto(bb) {
        const wb = this.cmd;
        if (!wb) return;
        let Mb;
        try {
          Mb = function(bb, wb) {
            const Mb = new Set;
            let eb = !1;
            for (const Hb of bb)
              if (Hb.onPlayerAttemptAltAction) {
                if (eb = !0, !Hb.altVetoBlocks) return {
                  mode: Cb.ae.All,
                  roots: []
                };
                for (const bb of Hb.altVetoBlocks) Mb.add(wb.getMetaInfo(bb).rootId)
              } return eb ? Mb.size > Cb.Dc ? {
              mode: Cb.ae.All,
              roots: []
            } : {
              mode: Cb.ae.Filter,
              roots: [...Mb]
            } : {
              mode: Cb.ae.Off,
              roots: []
            }
          }(bb, this.options.tables)
        } catch (Hb) {
          this.onError(Hb), Mb = {
            mode: Cb.ae.All,
            roots: []
          }
        }
        if (Mb.mode === Cb.ae.Off && !this.vetoSet) return;
        const eb = new Uint8Array(new Uint32Array(Mb.roots).buffer);
        (0, Cb.Df)(wb, 0, Mb.mode, Mb.roots.length, eb) ? this.vetoSet = Mb.mode !== Cb.ae.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(bb) {
        const wb = this.cmd;
        if (!wb) return;
        const Mb = function(bb) {
          let wb = 0;
          for (const Mb of bb) Mb.onPlayerAltAction && (wb |= 1 << Cb.dc.AltAction), (Mb.onPlayerClick || Mb.onPlayerClickUp || Mb.onPlayerAttackEntity) && (wb |= 1 << Cb.dc.Click), Mb.onPlayerChangeBlock && (wb |= 1 << Cb.dc.ChangeBlock), Mb.onPlayerDropItem && (wb |= 1 << Cb.dc.DropItem);
          return wb
        }(bb);
        (0 !== Mb || this.hooksSet) && ((0, Cb.Qf)(wb, 0, Mb) ? this.hooksSet = 0 !== Mb : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const bb = this.cmd;
        bb && !this.stopped() && this.customButtons.write(bb)
      }
      writePromptWatch() {
        const bb = this.cmd,
          wb = this.promptWatch;
        wb !== this.promptWatchSent && bb && !this.stopped() && (0, Cb.ng)(bb, 0, Te[wb]) && (this.promptWatchSent = wb)
      }
      writePublicLobby(bb) {
        const wb = this.cmd;
        wb && bb !== this.writtenPublicLobby && ((0, Cb.bg)(wb, 0, bb ? 1 : 0) ? this.writtenPublicLobby = bb : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(bb) {
        const wb = this.cmd;
        wb && ((0, Cb.Uf)(wb, 0, null === bb ? 0 : 1, null === bb ? ye : ne.encode(bb)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(bb) {
        const wb = this.generation;
        for (const eb of this.owners) {
          if (wb !== this.generation) break;
          try {
            const wb = bb(eb);
            if (void 0 !== wb) return wb
          } catch (Mb) {
            this.bO(Mb)
          }
        }
      }
      iI(bb, wb) {
        this.guard((() => {
          Vb.k.iI(bb, wb)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (bb) {
          this.bO(bb)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (bb) {
          this.bO(bb)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = rb.r.DEFAULT, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1;
        const bb = this.owners;
        let wb;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (eb) {
          wb = eb
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (eb) {
          wb ??= eb
        }
        this.round(bb, MH, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (eb) {
          wb ??= eb
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (eb) {
          wb ??= eb
        }
        const Mb = this.options.onSessionEnd;
        if (Mb) try {
          Mb()
        } catch (eb) {
          this.onError(eb)
        }
        void 0 !== wb && this.bO(wb)
      }
      round(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = this.generation;
        for (const pb of bb) {
          if (eb !== this.generation) break;
          try {
            wb(pb)
          } catch (Hb) {
            Mb ? this.onError(Hb) : this.bO(Hb)
          }
        }
      }
      guard(bb) {
        try {
          bb()
        } catch (wb) {
          this.bO(wb)
        }
      }
    }

    function bH(bb) {
      return bb === Cb.Pc ? null : String(bb)
    }

    function wH(bb) {
      bb.sO(Ub.xd)
    }

    function MH(bb) {
      var wb;
      null === (wb = bb.onClose) || void 0 === wb || wb.call(bb)
    }

    function eH(bb, wb) {
      bb.watch((() => {
        const Mb = function(bb) {
          const wb = [],
            Mb = Math.min(me, bb.length);
          for (let Hb = 0; Hb < Mb; Hb++) {
            var eb;
            const Mb = null === (eb = bb.slot(Hb)) || void 0 === eb ? void 0 : eb.typeObj,
              pb = Mb ? (0, Be.gunTypeOf)(Mb.id) : void 0;
            void 0 !== pb && wb.push(xw[pb])
          }
          return wb
        }(bb);
        Mb.length > 0 && (wb.preload(Mb.flatMap((bb => Nw(bb)))), wb.preload(Nw(jw)))
      }))
    }
    var HH = Mb(37641),
      pH = Mb(5766),
      VH = Mb(37630),
      gH = Mb(37677);

    function lH(bb) {
      const wb = (0, HH.countDecodesAs)(new pH.Howl({
          src: [...(0, VH.v)(bb).src],
          pool: 15,
          preload: !1
        }), "sound"),
        Mb = wb.load.bind(wb);
      return wb.load = () => (wb._preload = !0, (0, gH.f)(bb), Mb()), wb
    }

    function LH(bb, wb, Mb) {
      const eb = bb.listener;
      if (eb.positionX) IH(eb.positionX, wb, Mb, 0), IH(eb.positionY, wb, Mb, 1), IH(eb.positionZ, wb, Mb, 2), IH(eb.forwardX, wb, Mb, 3), IH(eb.forwardY, wb, Mb, 4), IH(eb.forwardZ, wb, Mb, 5), IH(eb.upX, wb, Mb, 6), IH(eb.upY, wb, Mb, 7), IH(eb.upZ, wb, Mb, 8);
      else {
        let bb = !1;
        for (let eb = 0; eb < 9; eb++) bb ||= wb[eb] !== Mb[eb];
        bb && (eb.setPosition(wb[0], wb[1], wb[2]), eb.setOrientation(wb[3], wb[4], wb[5], wb[6], wb[7], wb[8]), Mb.set(wb))
      }
    }

    function IH(bb, wb, Mb, eb) {
      wb[eb] !== Mb[eb] && (bb.value = wb[eb], Mb[eb] = wb[eb])
    }
    class OH {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(bb) {
        this.pose.set(bb);
        const wb = pH.Howler.ctx;
        return !!wb && (wb !== this.watchedCtx && (this.watchedCtx = wb, this.written.fill(Number.NaN), wb.addEventListener("statechange", (() => {
          "running" === wb.state && LH(wb, this.pose, this.written)
        }))), "running" === wb.state && LH(wb, bb, this.written), !0)
      }
    }
    var UH = Mb(37865),
      tH = Mb(40564);
    let CH = null,
      EH = null;

    function FH() {
      return null === CH && (CH = document.createElement("div"), CH.className = "WasmCameraLayer", CH.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(CH)), CH
    }

    function BH() {
      return EH ??= new tH.d(new UH.f(FH)), EH
    }

    function sH() {
      var bb;
      null === (bb = EH) || void 0 === bb || bb.clear(), mH(null)
    }

    function mH(bb) {
      eb.c.get("scriptedCameraFacing") !== bb && eb.c.set({
        scriptedCameraFacing: bb
      })
    }
    var hH = Mb(5967),
      zH = Mb(5914),
      XH = Mb(40602),
      xH = Mb(42714),
      jH = Mb(4659);
    const KH = Object.entries(Cb.$b).reduce(((bb, wb) => {
      let [Mb, eb] = wb;
      return bb[eb] = Mb, bb
    }), []);

    function rH(bb, wb) {
      var Mb;
      return 0 !== ((null !== (Mb = bb.itemFlags[wb]) && void 0 !== Mb ? Mb : 0) & Cb.tc.Stackable)
    }
    const RH = /^(0|[1-9][0-9]*)$/,
      DH = {
        displayName: (bb, wb) => (0, Be.displayNameOf)(wb),
        description: (bb, wb) => (0, Be.descriptionOf)(wb),
        type: (bb, wb) => (0, Be.itemTypeOf)(wb),
        clipSize: (bb, wb) => (0, Be.clipSizeOf)(wb),
        armourReduction: (bb, wb) => (0, Be.armourReductionOf)(wb),
        scopeType: (bb, wb) => (0, Be.scopeTypeOf)(wb),
        stackable: rH,
        harvestType: (bb, wb) => KH[bb.blockHarvestTypes[wb]],
        harvestLevel: (bb, wb) => {
          const Mb = bb.blockHarvestLevels[wb];
          return Mb === Cb.xc ? void 0 : Mb
        },
        harvests: (bb, wb) => {
          var Mb;
          const eb = null !== (Mb = bb.itemHarvests[wb]) && void 0 !== Mb ? Mb : 0;
          return 0 !== eb ? KH[eb] : void 0 === (0, Be.harvestsNullLevelOf)(wb) ? void 0 : null
        },
        level: (bb, wb) => {
          var Mb, eb;
          const Hb = null !== (Mb = bb.itemLevels[wb]) && void 0 !== Mb ? Mb : Cb.xc;
          return Hb !== Cb.xc ? Hb : null !== (eb = (0, Be.harvestsNullLevelOf)(wb)) && void 0 !== eb ? eb : void 0
        }
      };

    function cH(bb, wb, Mb) {
      return ZH(new Uint8Array(Math.floor(bb.length / wb)), bb, wb, Mb)
    }

    function YH(bb, wb, Mb) {
      return ZH(new Uint16Array(Math.floor(bb.length / wb)), bb, wb, Mb)
    }

    function ZH(bb, wb, Mb, eb) {
      const Hb = new DataView(wb.buffer, wb.byteOffset, wb.byteLength);
      for (let pb = 0; pb < bb.length; pb++) bb[pb] = eb(Hb, pb * Mb);
      return bb
    }
    class fH {
      constructor(bb, wb) {
        this.options = wb, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = bb => {
          const wb = this.idOf(bb);
          if (void 0 === wb) throw new Error(`No item is named ${bb}, an item's root`);
          return wb
        };
        const Mb = wb => {
            const Mb = wb();
            return new Uint8Array(bb.memory().buffer, bb.scratch(), Mb).slice()
          },
          eb = (new TextDecoder).decode(Mb((() => bb.queries.itemNames()))).split("\n"),
          Hb = Mb((() => bb.queries.blockProps())),
          pb = Mb((() => bb.queries.itemProps()));
        this.props = {
          blockFlags: cH(Hb, Cb.v.BYTES, Cb.v.flags),
          blockHarvestTypes: cH(Hb, Cb.v.BYTES, Cb.v.harvestType),
          blockHarvestLevels: cH(Hb, Cb.v.BYTES, Cb.v.harvestLevel),
          blockAttachedTops: YH(Hb, Cb.v.BYTES, Cb.v.attachedTop),
          itemFlags: cH(pb, Cb.vc.BYTES, Cb.vc.flags),
          itemHarvests: cH(pb, Cb.vc.BYTES, Cb.vc.harvests),
          itemLevels: cH(pb, Cb.vc.BYTES, Cb.vc.level)
        }, (0, jH.l)(Object.freeze(eb)), (0, xH.g)()
      }
      idOf(bb) {
        if ("number" === typeof bb) return void 0 === (0, jH.g)(bb) ? void 0 : bb;
        const wb = (0, jH.c)(bb);
        return void 0 === wb && RH.test(bb) ? void 0 === (0, jH.g)(+bb) ? void 0 : +bb : wb
      }
      getMetaInfo(bb) {
        if (!bb || bb === hH.d) return hH.g;
        const wb = this.idOf(bb);
        if (void 0 === wb) throw new Error(`Item ${bb} not found in registry`);
        return this.metaOf(wb)
      }
      blockRootId(bb) {
        return 0 !== bb && void 0 !== (0, jH.g)(bb) ? this.metaOf(bb).rootId : bb
      }
      metaOf(bb) {
        return this.metas[bb] ??= (0, zH.k)((0, jH.g)(bb), bb, this.rootIdOf, (0, Be.rootMetaDescOf)(bb))
      }
      getItemId(bb) {
        if (!bb || bb === hH.d) return 0;
        const wb = this.idOf(bb);
        if (void 0 === wb) throw new Error(`Invalid block name. You sent ${bb}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return wb
      }
      getItemName(bb) {
        if (!bb || bb === hH.d) return hH.d;
        const wb = this.idOf(bb);
        if (void 0 === wb) throw new Error(`Item ${bb} not found in registry`);
        return (0, jH.g)(wb)
      }
      blockNameToBlockId(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (bb === hH.d) return 0;
        let Mb = this.idOf(bb);
        if (void 0 === Mb || !this.isBlockId(Mb)) {
          const wb = bb.indexOf("|"),
            eb = wb > 0 ? (0, jH.c)(bb.slice(0, wb)) : void 0;
          Mb = void 0 !== eb && this.isBlockId(eb) && (0, Be.rootMetaDescOf)(eb) === bb ? eb : void 0
        }
        if (void 0 !== Mb) return Mb;
        if (!wb) throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(bb) {
        return bb > 0 && bb < this.props.blockFlags.length
      }
      nameOfId(bb) {
        return 0 !== bb && (0, jH.g)(bb) || hH.d
      }
      itemType(bb) {
        const wb = bb ? this.idOf(bb) : void 0;
        if (!wb) return null;
        let Mb = this.types.get(wb);
        return void 0 === Mb && (Mb = Object.freeze({
          id: wb,
          name: (0, jH.g)(wb),
          meta: this.getMetaInfo(wb),
          stackable: rH(this.props, wb),
          type: (0, Be.itemTypeNameOf)(wb),
          clipSize: (0, Be.clipSizeOf)(wb),
          scopeType: (0, Be.scopeTypeOf)(wb),
          showsAimingUi: (0, Be.showsAimingUi)(wb)
        }), this.types.set(wb, Mb)), Mb
      }
      getItemStat(bb, wb) {
        if (XH.c.has(wb)) {
          const Mb = "minChargeStateToUse" === wb ? this.getMetaInfo(bb).rootName : this.getItemName(bb),
            eb = this.options.get((0, XH.f)(Mb, wb));
          if (null !== eb && void 0 !== eb) return eb
        }
        return this.defaultStat(bb, wb, this.statOf(wb))
      }
      getDisplayName(bb) {
        return this.getItemStat(bb, "displayName")
      }
      getDefaultItemStat(bb, wb) {
        return this.defaultStat(bb, wb, this.statOf(wb))
      }
      statOf(bb) {
        const wb = DH[bb];
        return void 0 === wb && function(bb, wb) {
          throw new Error(`ClientApi.${bb} is not available yet in the wasm client (${wb})`)
        }(`getItemStat("${bb}")`, `a table of the stat: the wasm client answers ${Object.keys(DH).join(", ")}`), wb
      }
      defaultStat(bb, wb, Mb) {
        const eb = this.idOf(bb),
          Hb = void 0 === eb ? void 0 : Mb(this.props, eb);
        return null !== Hb && void 0 !== Hb || "displayName" !== wb ? Hb : this.getItemName(bb)
      }
      getClientOption(bb) {
        return this.options.get(bb)
      }
      getGunStats(bb) {
        return this.getClientOption(`${bb}GunStats`)
      }
      watchClientOption(bb, wb) {
        return this.options.subscribe(bb, wb)
      }
      isSolidBlockId(bb) {
        var wb;
        return 0 !== ((null !== (wb = this.props.blockFlags[bb]) && void 0 !== wb ? wb : 0) & Cb.u.Solid)
      }
      isStackableId(bb) {
        return rH(this.props, bb)
      }
      isFluidBlockId(bb) {
        var wb;
        return 0 !== ((null !== (wb = this.props.blockFlags[bb]) && void 0 !== wb ? wb : 0) & Cb.u.Fluid)
      }
      canPlaceOverBlockId(bb) {
        var wb;
        return 0 !== ((null !== (wb = this.props.blockFlags[bb]) && void 0 !== wb ? wb : 0) & Cb.u.PlaceOver)
      }
      attachedTopOf(bb) {
        var wb;
        return null !== (wb = this.props.blockAttachedTops[bb]) && void 0 !== wb ? wb : 0
      }
      isDroplessBlockId(bb) {
        return (0, Be.dropsNothing)(bb)
      }
    }

    function AH(bb, wb) {
      const Mb = new Map;
      return (eb, Hb) => {
        const pb = wb.idOf(eb),
          Vb = void 0 === pb ? null : (eb => {
            let Hb = Mb.get(eb);
            if (void 0 === Hb) {
              const pb = bb.queries.salvageRecipe(eb),
                Vb = new DataView(bb.memory().buffer, bb.scratch(), pb),
                gb = [];
              for (let bb = 0; bb + Cb.Pd.BYTES <= pb; bb += Cb.Pd.BYTES) gb.push(Object.freeze({
                item: wb.nameOfId(Cb.Pd.item(Vb, bb)),
                amt: Cb.Pd.amount(Vb, bb)
              }));
              Hb = 0 === gb.length ? null : Object.freeze(gb), Mb.set(eb, Hb)
            }
            return Hb
          })(pb);
        if (null === Vb || void 0 === Hb) return Vb;
        const gb = Hb <= 0 ? 1 : Hb;
        return Vb.map((bb => {
          let {
            item: wb,
            amt: Mb
          } = bb;
          return {
            item: wb,
            amt: Mb * gb
          }
        }))
      }
    }
    var WH = Mb(42454),
      JH = Mb(38167),
      SH = Mb(38147),
      NH = Mb(38155),
      vH = Mb(37781),
      QH = Mb(42535),
      GH = Mb(54816);
    const qH = -1,
      aH = new Uint8Array(0),
      iH = new TextEncoder;

    function uH(bb) {
      if (null === bb) return null;
      const wb = iH.encode(bb);
      return wb.byteLength < Ub.Cc ? wb : wb.subarray(0, Ub.Cc - 1)
    }
    class dH {
      constructor(bb) {
        this.deps = bb, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = qH, this.keyframesSettled = !1, this.reloadFrom = qH
      }
      reloadKeyframes() {
        var bb, wb;
        this.keyframesVersion = qH, this.reloadFrom = null !== (bb = null === (wb = this.view()) || void 0 === wb ? void 0 : wb.version) && void 0 !== bb ? bb : qH
      }
      setPlayback(bb) {
        const wb = 1 === this.deps.core.KVb(bb);
        return wb && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = qH, this.reloadFrom = qH), wb
      }
      async open(bb, wb) {
        const Mb = await this.deps.replay.open(bb, wb);
        return "opening" === Mb && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Mb
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(bb)), wb)
      }
      setSpeed(bb) {
        this.deps.replay.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.replay.setCameraMode(GH.c.indexOf(bb))
      }
      view() {
        var bb;
        const wb = Cb.q.replayViewPtr(this.deps.apiView(), 0);
        if (0 === wb) return this.lastView = null, null;
        const Mb = new DataView(this.deps.buffer(), wb, Cb.Id.BYTES),
          eb = Cb.Id.version(Mb, 0),
          Hb = this.lastView;
        if (null !== Hb && Hb.version === eb) return Hb;
        const pb = Cb.Id.markIn(Mb, 0),
          Vb = {
            version: eb,
            state: Cb.Id.state(Mb, 0),
            cameraMode: null !== (bb = GH.c[Cb.Id.cameraMode(Mb, 0)]) && void 0 !== bb ? bb : "recording",
            sO: Cb.Id.sO(Mb, 0),
            totalTicks: Cb.Id.totalTicks(Mb, 0),
            speed: Cb.Id.speed(Mb, 0),
            mark: pb === Cb.Gd ? null : {
              inTick: pb,
              outTick: Cb.Id.markOut(Mb, 0)
            },
            editVersion: Cb.Id.editVersion(Mb, 0)
          };
        return this.lastView = Vb, Vb
      }
      keyframes() {
        const bb = this.view();
        if (null === bb) return [];
        bb.version !== this.reloadFrom && (this.reloadFrom = qH);
        const wb = this.reloadFrom === qH && bb.state !== Ub.md.Cropping && bb.state !== Ub.md.None,
          Mb = wb ? bb.editVersion : bb.version;
        if (Mb === this.keyframesVersion && wb === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: eb
        } = this.deps, Hb = eb.rVb(), pb = eb.aF(), Vb = [];
        if (0 !== pb && Hb > 0) {
          const bb = new DataView(this.deps.buffer(), pb, Hb * Ub.oc);
          for (let wb = 0; wb < Hb; wb++) {
            const Mb = wb * Ub.oc,
              eb = wb => bb.getFloat64(Mb + wb, !0);
            Vb.push({
              sO: bb.getUint32(Mb + Ub.Ac, !0),
              position: [eb(Ub.wc), eb(Ub.wc + 8), eb(Ub.wc + 16)],
              direction: [eb(Ub.rc), eb(Ub.rc + 8), eb(Ub.rc + 16)],
              easing: [eb(Ub.tc), eb(Ub.tc + 8), eb(Ub.tc + 16), eb(Ub.tc + 24)]
            })
          }
        }
        return this.keyframesVersion = Mb, this.keyframesSettled = wb, this.lastKeyframes = Vb, Vb
      }
      addKeyframe() {
        const bb = this.deps.apiView(),
          wb = [Cb.q.eye(bb, 0, 0), Cb.q.eye(bb, 0, 1), Cb.q.eye(bb, 0, 2)];
        return this.deps.replay.addKeyframe(wb, function(bb, wb) {
          const Mb = Math.cos(wb);
          return [Mb * Math.sin(bb), -Math.sin(wb), Mb * Math.cos(bb)]
        }(Cb.q.heading(bb, 0), Cb.q.pitch(bb, 0)))
      }
      setKeyframe(bb) {
        return this.deps.replay.setKeyframe(bb.sO, Float64Array.from([...bb.position, ...bb.direction, ...bb.easing]))
      }
      moveKeyframe(bb, wb) {
        return this.deps.replay.moveKeyframe(bb, wb)
      }
      deleteKeyframes(bb, wb) {
        return this.deps.replay.deleteKeyframes(bb, wb)
      }
      setMark(bb) {
        var wb, Mb;
        return this.deps.replay.setMark(null !== (wb = null === bb || void 0 === bb ? void 0 : bb.inTick) && void 0 !== wb ? wb : -1, null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.outTick) && void 0 !== Mb ? Mb : -1)
      }
      crop(bb, wb) {
        const Mb = this.deps.replay.crop(bb, wb);
        return Mb && this.reloadKeyframes(), Mb
      }
      save(bb) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(bb)
      }
      recorderControl(bb) {
        this.deps.recorder.control(bb)
      }
      recorderPrefs(bb, wb) {
        this.deps.recorder.prefs(bb, wb)
      }
      recorderOption(bb, wb) {
        const Mb = this.deps.cmd();
        return null !== Mb && (0, Cb.rf)(Mb, 0, bb, null === wb ? aH : iH.encode(wb))
      }
      recordFlyingText(bb, wb, Mb, eb) {
        const Hb = this.deps.cmd(),
          pb = Math.max(0, Math.min(4294967295, Math.round(eb)));
        return null !== Hb && (0, Cb.nf)(Hb, 0, wb, Mb, pb, iH.encode(bb))
      }
      recordPlayerKilled(bb, wb, Mb, eb) {
        const Hb = this.deps.cmd();
        return null !== Hb && (0, Cb.sf)(Hb, 0, bb, wb, Math.max(0, Mb), iH.encode(eb))
      }
      recordKillfeed(bb, wb, Mb) {
        var eb, Hb;
        const pb = this.deps.cmd(),
          Vb = function(bb) {
            const wb = bb.reduce(((bb, wb) => {
                var Mb;
                return bb + le.yb + (null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.byteLength) && void 0 !== Mb ? Mb : 0)
              }), 0),
              Mb = new Uint8Array(wb),
              eb = new DataView(Mb.buffer);
            let Hb = 0;
            for (const Vb of bb) {
              var pb;
              eb.setUint16(Hb, null !== (pb = null === Vb || void 0 === Vb ? void 0 : Vb.byteLength) && void 0 !== pb ? pb : Ub.Cc, !0), Hb += le.yb, null !== Vb && (Mb.set(Vb, Hb), Hb += Vb.byteLength)
            }
            return Mb
          }([uH(bb.name), uH(bb.colour), uH(wb.name), uH(wb.colour), uH(Mb)]);
        return null !== pb && (0, Cb.qf)(pb, 0, null !== (eb = bb.id) && void 0 !== eb ? eb : Cb.Sc, null !== (Hb = wb.id) && void 0 !== Hb ? Hb : Cb.Sc, Vb)
      }
      recorderSession(bb, wb) {
        this.deps.recorder.session({
          session: wb,
          lobbyType: bb.lobbyType,
          game: bb.gameNameWithVariation,
          lobby: bb.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.RVb()
      }
      filePartDone(bb, wb) {
        this.deps.recorder.filePartDone(bb, wb)
      }
      fileDone(bb) {
        this.deps.recorder.fileDone(bb)
      }
    }
    const PH = -2147483648;
    class nH {
      constructor(bb) {
        var wb;
        this.deps = bb, this.state = Fe.c, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.heldOptions = new Map, this.now = null !== (wb = bb.now) && void 0 !== wb ? wb : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var bb, wb, Mb;
        return null === (bb = null === (wb = (Mb = this.deps).live) || void 0 === wb ? void 0 : wb.call(Mb)) || void 0 === bb || bb
      }
      activated(bb) {
        var wb, Mb;
        this.live && (this.viewerShown(!0 === (null === (wb = (Mb = this.deps).viewerOpen) || void 0 === wb ? void 0 : wb.call(Mb))), this.deps.client.recorderSession(bb, (0, GH.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var bb, wb;
        this.live && (this.state.recording || !0 !== (null === (bb = (wb = this.deps).viewerOpen) || void 0 === bb ? void 0 : bb.call(wb))) ? (this.releaseOptions(), this.deps.client.recorderControl(Ub.Tc.ToggleRecording)) : this.deps.notify(NH.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Ub.Tc.SaveClip) : this.deps.notify(NH.b.clippingNotOn)
      }
      viewerShown(bb) {
        this.live && this.deps.client.recorderControl(bb ? Ub.Tc.ViewerOpened : Ub.Tc.ViewerClosed)
      }
      setPrefs(bb, wb) {
        this.live && (bb && this.releaseOptions(), this.deps.client.recorderPrefs(bb, wb))
      }
      setAllOptions(bb) {
        var wb;
        this.live && (null === (wb = this.heldOptions) || void 0 === wb || wb.clear(), bb.forEach(((bb, wb) => {
          this.sendOption(wb, bb)
        })))
      }
      setOption(bb, wb) {
        this.live && (this.heldOptions ? this.heldOptions.set(bb, wb) : this.sendOption(bb, wb))
      }
      releaseOptions() {
        const bb = this.heldOptions;
        if (bb) {
          this.heldOptions = null;
          for (const [wb, Mb] of bb) this.sendOption(wb, Mb)
        }
      }
      sendOption(bb, wb) {
        var Mb;
        this.deps.client.recorderOption(bb, void 0 === wb || null === wb ? null : null !== (Mb = JSON.stringify(wb)) && void 0 !== Mb ? Mb : null)
      }
      recordFlyingText(bb, wb, Mb, eb) {
        this.live && this.deps.client.recordFlyingText(bb, wb, Mb, eb)
      }
      recordPlayerKilled(bb, wb, Mb, eb) {
        this.live && this.deps.client.recordPlayerKilled(bb, wb, Mb, eb)
      }
      recordKillfeed(bb, wb, Mb) {
        this.live && this.deps.client.recordKillfeed(bb, wb, Mb)
      }
      sO() {
        let bb = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, bb = {
            ...bb,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const wb = Math.floor((this.now() - this.recordingSince) / 1e3);
          wb !== bb.seconds && (bb = {
            ...bb,
            seconds: wb
          })
        }
        this.set(bb)
      }
      onEvent(bb) {
        var wb, Mb;
        const {
          notify: eb
        } = this.deps, Hb = NH.b;
        switch (bb.what) {
          case Ub.Rc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), eb(Hb.recordingStarted);
            break;
          case Ub.Rc.RecordingStopped:
            this.stopRecording(), eb(Hb.recordingStopped), this.saveState(Ub.cd.Recording, "saving");
            break;
          case Ub.Rc.RecordingDiscarded:
            this.stopRecording(), eb(Hb.recordingDiscarded);
            break;
          case Ub.Rc.RecordingTurnedOff:
            this.stopRecording(), eb(Hb.recordingTurnedOff);
            break;
          case Ub.Rc.LimitReached:
            eb(Hb.limitReached);
            break;
          case Ub.Rc.ClipSaved:
            this.saveState(Ub.cd.Clip, "saving");
            break;
          case Ub.Rc.ClipEmpty:
            eb(Hb.clipEmpty);
            break;
          case Ub.Rc.ClippingNotOn:
            eb(Hb.clippingNotOn);
            break;
          case Ub.Rc.Disallowed:
            eb(Hb.disallowed);
            break;
          case Ub.Rc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Ub.Rc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Ub.Rc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Ub.Rc.SaveBusy:
            null === (wb = (Mb = this.deps).onSaveState) || void 0 === wb || wb.call(Mb, bb.kind, "busy"), eb(Hb.saveBusy);
            break;
          case Ub.Rc.CloseViewerFirst:
            eb(Hb.closeViewerFirst)
        }
      }
      fileReady(bb, wb) {
        this.deps.download(wb), this.saveState(bb, "done"), this.deps.notify(bb === Ub.cd.Clip ? NH.b.clipSaved : NH.b.recordingSaved)
      }
      failed(bb) {
        this.saveState(bb, "failed"), this.deps.notify(bb === Ub.cd.Clip ? NH.b.clipFailed : NH.b.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(Fe.c)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(bb, wb) {
        var Mb, eb;
        null === (Mb = (eb = this.deps).onSaveState) || void 0 === Mb || Mb.call(eb, bb, wb)
      }
      set(bb) {
        bb !== this.state && (this.state = bb, this.deps.onState(bb))
      }
    }
    const yH = new TextDecoder;

    function oH(bb, wb, Mb, eb) {
      const Hb = [];
      for (let pb = 0; pb < eb; pb++) {
        if (wb + le.yb > Mb) return null;
        const eb = bb.getUint16(wb, !0);
        if (wb += le.yb, eb !== Ub.Cc) {
          if (wb + eb > Mb) return null;
          Hb.push(yH.decode(new Uint8Array(bb.buffer, bb.byteOffset + wb, eb))), wb += eb
        } else Hb.push(null)
      }
      return wb === Mb ? Hb : null
    }

    function TH(bb, wb) {
      let Mb = new DataView(new ArrayBuffer(0)),
        eb = !0;
      const Hb = {
        replayFailed: (wb, Mb, eb) => {
          bb.replayFailed({
            reason: wb,
            code: Mb,
            version: eb
          })
        },
        replayOption: (wb, Hb, pb, Vb) => {
          const gb = function(bb, wb, Mb, eb) {
            switch (wb) {
              case Ub.gd.Cleared:
                return 0 === eb ? null : void 0;
              case Ub.gd.Text:
                return yH.decode(new Uint8Array(bb.buffer, bb.byteOffset + Mb, eb));
              case Ub.gd.Int:
                return eb === Int32Array.BYTES_PER_ELEMENT ? bb.getInt32(Mb, !0) : void 0;
              case Ub.gd.Double:
                return eb === Float64Array.BYTES_PER_ELEMENT ? bb.getFloat64(Mb, !0) : void 0;
              default:
                return
            }
          }(Mb, Hb, pb, Vb);
          void 0 !== gb ? bb.replayOption({
            key: wb,
            value: gb
          }) : eb = !1
        },
        replayUiEvent: (wb, Hb, pb, Vb, gb, lb) => {
          const Lb = function(bb, wb, Mb, eb, Hb, pb, Vb) {
            const gb = pb + Vb;
            switch (wb) {
              case Ub.jd.FlyingText: {
                const Vb = oH(bb, pb, gb, 1);
                return null !== Vb && null !== Vb[0] ? {
                  what: wb,
                  np: Mb,
                  Pp: eb,
                  angle: Hb,
                  contentJson: Vb[0]
                } : null
              }
              case Ub.jd.PlayerKilled: {
                const eb = oH(bb, pb, gb, 3);
                return eb ? {
                  what: wb,
                  killstreak: Mb,
                  dead: eb[0],
                  killer: eb[1],
                  withItem: eb[2]
                } : null
              }
              case Ub.jd.Killfeed: {
                const Mb = oH(bb, pb, gb, 7);
                return Mb ? {
                  what: wb,
                  killerId: Mb[0],
                  killerName: Mb[1],
                  killerColour: Mb[2],
                  victimId: Mb[3],
                  victimName: Mb[4],
                  victimColour: Mb[5],
                  withItem: Mb[6]
                } : null
              }
              default:
                return null
            }
          }(Mb, wb, Hb, pb, Vb, gb, lb);
          null !== Lb ? bb.replayUiEvent(Lb) : eb = !1
        },
        replayFilePart: (Mb, Hb, pb, Vb) => {
          const gb = wb();
          pb + Vb > gb.byteLength ? eb = !1 : bb.filePart(Mb, Hb, new Uint8Array(gb, pb, Vb).slice())
        },
        replayFileReady: (wb, Mb, eb, Hb) => {
          bb.fileReady({
            save: wb,
            kind: Mb,
            parts: eb,
            bytes: Hb
          })
        },
        recorderEvent: (wb, Mb, eb) => {
          bb.recorderEvent({
            what: wb,
            kind: Mb,
            save: eb
          })
        },
        replayOpened: (wb, eb, Hb) => {
          bb.replayOpened(yH.decode(new Uint8Array(Mb.buffer, Mb.byteOffset + eb, Hb)))
        }
      };
      return (bb, wb, pb, Vb) => !(bb < Ub.W.ReplayFailed || bb > Ub.W.RecorderEvent) && (Mb = wb, eb = !0, (0, Cb.de)(bb, wb, pb, Vb, Hb) && eb)
    }

    function kH(bb) {
      let wb = null;
      const Mb = TH(bb, (() => {
        if (null === wb) throw new Error("a recorder event read outside recorderEventReader's call");
        return wb.buffer
      }));
      return (bb, eb) => {
        wb = eb;
        try {
          ! function(bb, wb) {
            const Mb = bb.slice(),
              eb = new DataView(Mb.buffer);
            for (let Hb = 0; Hb < Mb.byteLength;) {
              if (Hb + Ub.V > Mb.byteLength) throw new Error(`the recorder module's events end mid-head at ${Hb}`);
              const bb = eb.getUint32(Hb, !0),
                pb = 65535 & bb,
                Vb = bb >>> 16,
                gb = Hb + Ub.V;
              if (gb + Vb > Mb.byteLength || !wb(pb, eb, gb, Vb)) throw new Error(`the recorder module wrote a malformed event ${pb} (${Vb} bytes) at ${Hb}`);
              Hb = gb + (0, Ub.Be)(Vb)
            }
          }(bb, Mb)
        } finally {
          wb = null
        }
      }
    }
    class bp {
      constructor(bb, wb) {
        this.acks = bb, this.handlers = wb, this.parts = new Map
      }
      onPart(bb, wb, Mb) {
        let eb = this.parts.get(bb);
        eb || (eb = [], this.parts.set(bb, eb)), eb[wb] = Mb, this.acks.filePartDone(bb, wb)
      }
      onReady(bb) {
        var wb;
        const Mb = null !== (wb = this.parts.get(bb.save)) && void 0 !== wb ? wb : [];
        this.parts.delete(bb.save);
        const eb = function(bb, wb, Mb) {
          if (bb.length !== wb) return null;
          let eb = 0;
          for (let Vb = 0; Vb < wb; Vb++) {
            if (void 0 === bb[Vb]) return null;
            eb += bb[Vb].byteLength
          }
          if (eb !== Mb) return null;
          if (1 === wb) return bb[0];
          const Hb = new Uint8Array(Mb);
          let pb = 0;
          for (const Vb of bb) Hb.set(Vb, pb), pb += Vb.byteLength;
          return Hb
        }(Mb, bb.parts, bb.bytes);
        this.acks.fileDone(bb.save), null === eb ? this.handlers.fileIncomplete(bb.save, bb.kind) : this.handlers.fileReady(bb.save, bb.kind, eb)
      }
      onDiscarded(bb) {
        this.parts.delete(bb)
      }
    }

    function wp() {
      return Mb.e(73).then((() => Mb(64396)))
    }
    class Mp {
      constructor(bb) {
        this.deps = bb, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: wb
        } = bb;
        this.recorder = new nH({
          client: wb,
          live: () => {
            var bb;
            return !0 !== (null === (bb = this.viewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          viewerOpen: bb.viewerOpen,
          notify: bb.notify,
          download: wb => {
            var Mb;
            null === (Mb = bb.download) || void 0 === Mb || Mb.call(bb, wb)
          },
          onState: bb.onRecorderState,
          onSaveState: bb.onSaveState
        }), this.parts = new bp(wb, {
          fileReady: (bb, wb, Mb) => {
            var eb;
            wb === Ub.cd.Edited ? null === (eb = this.viewer) || void 0 === eb || eb.saveDone(Mb) : this.recorder.fileReady(wb, Mb)
          },
          fileIncomplete: (bb, wb) => {
            this.saveFailed(wb)
          }
        });
        const Mb = {
          replayFailed: bb => {
            var wb;
            null === (wb = this.viewer) || void 0 === wb || wb.onFailed(bb)
          },
          replayOption: wb => {
            var Mb;
            null === (Mb = bb.onReplayOption) || void 0 === Mb || Mb.call(bb, wb)
          },
          replayUiEvent: wb => {
            var Mb;
            null === (Mb = bb.onReplayUiEvent) || void 0 === Mb || Mb.call(bb, wb)
          },
          filePart: (bb, wb, Mb) => {
            this.parts.onPart(bb, wb, Mb)
          },
          fileReady: bb => {
            this.parts.onReady(bb)
          },
          replayOpened: wb => {
            var Mb;
            null === (Mb = bb.onReplayOpened) || void 0 === Mb || Mb.call(bb, wb)
          },
          recorderEvent: bb => {
            var wb;
            switch (bb.what) {
              case Ub.Rc.FileDiscarded:
                this.parts.onDiscarded(bb.save);
                break;
              case Ub.Rc.SaveFailed:
                this.saveFailed(bb.kind);
                break;
              case Ub.Rc.SaveBusy:
                if (null !== (wb = this.viewer) && void 0 !== wb && wb.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(bb);
                break;
              default:
                this.recorder.onEvent(bb)
            }
          }
        };
        this.sink = function(bb, wb) {
          return {
            onReplayEvent: TH(bb, wb)
          }
        }(Mb, bb.buffer), this.recorderEvents = kH(Mb)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var bb;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (bb = this.deps.loadViewer) && void 0 !== bb ? bb : wp)().catch((bb => {
          throw this.viewerChunk = null, bb
        })), this.viewerChunk.then((bb => (this.viewer ??= new bb.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var bb, wb;
            null === (bb = (wb = this.deps).onViewerChange) || void 0 === bb || bb.call(wb)
          }
        }), this.viewer))))
      }
      activated(bb) {
        this.recorder.activated(bb)
      }
      afterFrame(bb) {
        try {
          bb > 0 && this.recorder.sO()
        } finally {
          var wb;
          null === (wb = this.viewer) || void 0 === wb || wb.afterFrame()
        }
      }
      end() {
        var bb;
        null === (bb = this.viewer) || void 0 === bb || bb.end()
      }
      saveFailed(bb) {
        var wb;
        bb === Ub.cd.Edited ? null === (wb = this.viewer) || void 0 === wb || wb.saveFailed(!1) : this.recorder.failed(bb)
      }
    }
    var ep = Mb(42277),
      Hp = Mb(42295),
      pp = Mb(5693),
      Vp = Mb(42611);
    class gp {
      constructor(bb) {
        this.deps = bb, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(bb, wb) {
        if (!this.deps.live() || 0 === bb && 0 === wb) return;
        const Mb = (0, Qb.o)(0, performance.now()),
          eb = this.deps.dragScale();
        (0, Vp.i)((() => {
          (0, Qb.q)(Ub.qb.MouseDown, 0, 0, 0, Mb), (0, Qb.q)(Ub.qb.MouseMove, 0, bb * eb, wb * eb, 0), (0, Qb.q)(Ub.qb.MouseUp, 0, 0, 0, Mb)
        }))
      }
      move(bb) {
        var wb, Mb;
        this.analogue[0] = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.x) && void 0 !== wb ? wb : 0, this.analogue[1] = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.y) && void 0 !== Mb ? Mb : 0, this.send()
      }
      holdVertical(bb, wb) {
        const Mb = "freeCamUp" === bb ? Cb.Qb.Up : Cb.Qb.Down;
        this.keys = wb ? this.keys | Mb : this.keys & ~Mb, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const bb = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== bb && !(0, Cb.xe)(bb, 0, this.analogue, this.keys)
      }
    }
    var lp = Mb(4950),
      Lp = Mb(803),
      Ip = Mb(318),
      Op = Mb(110),
      Up = Mb(35266),
      tp = Mb(782),
      Cp = Mb(10207);

    function Ep() {
      const bb = eb.c.get("clientEscMenuOptions"),
        wb = (0, Lp.w)(bb);
      return {
        mouse: (0, Op.isMobile)() ? wb : bb.mouseSensitivity,
        touch: wb,
        fovPercent: bb.cameraFOV
      }
    }

    function Fp() {
      const bb = eb.c.get("clientEscMenuOptions"),
        wb = eb.c.get("isTouchScreen") ? (0, Lp.w)(bb) : bb.mouseSensitivity,
        Mb = Ep().mouse;
      return Mb > 0 ? wb / Mb : 1
    }

    function Bp(bb) {
      const wb = () => {
        bb.setSoundPrefs(eb.c.get("soundVolume"), eb.c.get("soundOnFromAd"))
      };
      let Mb = null;
      const Hb = () => {
        const {
          showFog: wb,
          enableLighting: Hb,
          fogChunkDistance: pb,
          chunkFadeIn: Vb
        } = eb.c.get("clientEscMenuOptions"), gb = {
          showFog: wb,
          lighting: Hb,
          fogChunks: pb,
          chunkFade: Vb,
          cellLight: (0, lp.i)("cellLight") ? (0, lp.i)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        Mb && (0, Ub.ie)(Mb) === (0, Ub.ie)(gb) && Mb.fogChunks === pb || (Mb = gb, bb.setEnvPrefs(Mb))
      };
      let pb = null;
      const gb = () => {
        const wb = function() {
          const bb = eb.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: eb.c.get("areNametagsHidden"),
            crouchToggle: bb.crouchIsToggle,
            bhopDisabled: bb.disableBunnyHopping,
            disableBobbing: bb.disableBobbing,
            ezTowering: bb.ezTowering ? (0, Ip.f)() : null,
            ezBridging: bb.ezBridging,
            showChunkBorders: bb.showChunkBorders,
            touchWalk: !(0, Cp.g)(),
            edgeGuard: bb.touchEdgeGuard,
            edgeGuardLong: (0, tp.e)(),
            nametagCutDistance: (0, Up.d)()
          }
        }();
        (0, Rb.ie)(pb, wb) || (pb = wb, bb.setUiPrefs(wb))
      };
      let lb = null;
      const Lb = () => {
        const wb = Ep();
        (0, Rb.ie)(lb, wb) || (lb = wb, bb.setLookPrefs(wb))
      };
      wb(), Hb(), gb(), Lb();
      const Ib = [(0, Vb.o)("appManagerUpdated|soundVolume", wb), (0, Vb.o)("appManagerUpdated|soundOnFromAd", wb), (0, Vb.o)("appManagerUpdated|clientEscMenuOptions", (() => {
        Hb(), gb(), Lb()
      })), (0, Vb.o)(Cp.d, gb), (0, Vb.o)("appManagerUpdated|enabledDebugFeatures", Hb), (0, Vb.o)("appManagerUpdated|areNametagsHidden", gb), (0, Vb.o)("appManagerUpdated|showDistantNametags", gb)];
      return () => {
        for (const bb of Ib) bb()
      }
    }
    var sp = Mb(42583),
      mp = Mb(42592);
    var hp = (0, mp.c)("lend"),
      zp = (0, mp.c)("starting"),
      Xp = (0, mp.c)("generation"),
      xp = (0, mp.c)("end");
    class jp {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, xp, {
          value: Kp
        }), Object.defineProperty(this, hp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zp, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Xp, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, sp.d)(this, hp)[hp] || (0, sp.d)(this, zp)[zp]
      }
      async start(bb) {
        if (this.active) return "busy";
        const wb = (0, sp.d)(this, Xp)[Xp];
        (0, sp.d)(this, zp)[zp] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, sp.d)(this, zp)[zp] = !1
        }
        if (wb !== (0, sp.d)(this, Xp)[Xp]) return "refused";
        const Mb = this.deps.beginSave();
        if (!Mb) return "refused";
        const eb = Number(BigInt.asUintN(32, bb)),
          Hb = Number(BigInt.asUintN(32, bb >> 32n));
        let pb = "refused";
        return this.deps.recorderCall(((bb, wb) => {
          const Vb = Mb.editState,
            gb = bb.stage(Vb.length);
          0 !== gb ? (new Uint8Array(wb.buffer, gb, Vb.length).set(Vb), bb.DVb(Mb.headLen, eb, Hb) && (pb = "sealing")) : pb = "tooLarge"
        }), !0), "sealing" !== pb ? (Mb.end(), pb) : ((0, sp.d)(this, hp)[hp] = Mb, "sealing")
      }
      beforeRecorderStep() {
        const bb = (0, sp.d)(this, hp)[hp];
        if (!bb) return null;
        let wb = -1,
          Mb = 0;
        if (!this.deps.recorderCall((bb => {
            wb = bb.cVb(), wb > 0 && (Mb = bb.YVb())
          }))) return (0, sp.d)(this, xp)[xp](bb, "stopped");
        if (wb < 0) return (0, sp.d)(this, xp)[xp](bb, "read");
        if (0 === wb) return null;
        const eb = bb.head(Mb, wb);
        let Hb = !1;
        if (eb && this.deps.recorderCall(((bb, Mb) => {
            const pb = bb.stage(wb);
            0 !== pb && (new Uint8Array(Mb.buffer, pb, wb).set(eb), Hb = !0)
          }), !0), Hb) return null;
        const pb = bb.givenUp();
        this.deps.recorderCall((bb => {
          bb.ZVb()
        }));
        const Vb = (0, sp.d)(this, xp)[xp](bb, pb ? "givenUp" : "stopped");
        return pb && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Vb
      }
      stop() {
        (0, sp.d)(this, Xp)[Xp]++;
        const bb = (0, sp.d)(this, hp)[hp];
        bb && (this.deps.recorderCall((bb => {
          bb.ZVb()
        })), (0, sp.d)(this, xp)[xp](bb, "stopped"))
      }
    }

    function Kp(bb, wb) {
      return (0, sp.d)(this, hp)[hp] = null, bb.end(), wb
    }

    function rp(bb, wb) {
      const Mb = new Uint8Array(4),
        eb = new DataView(Mb.buffer);
      return eb.setUint8(0, bb ? 1 : 0), eb.setUint16(2, Math.max(0, Math.min(65535, Math.round(wb))), !0), Mb
    }

    function Rp(bb, wb) {
      return bb > function(bb) {
        return 16777216 + 314572.8 * Math.max(0, bb)
      }(wb) + 33554432
    }
    let Dp = null;

    function cp(bb) {
      return Dp ??= async function(bb) {
        const wb = bb.loadInFlight();
        wb && await wb.catch((() => {}));
        if (bb.trapped()) return "trapped";
        if (bb.busy() || !Rp(bb.memoryBytes(), bb.clipSeconds())) return "nI";
        bb.unload();
        let Mb = !1;
        try {
          Mb = await bb.load()
        } catch {
          Mb = !1
        }
        if (!Mb) return bb.trapped() ? "trapped" : bb.BC() ? "BC" : "failed";
        return "recycled"
      }(bb).finally((() => {
        Dp = null
      })), Dp
    }
    const Yp = "Replay recording couldn't load, so try again.",
      Zp = "Replay recording stopped working, so reload the page to record replays again.",
      fp = new Set([Ub.Tc.ToggleRecording, Ub.Tc.SaveClip]);
    var Ap = (0, mp.c)("bindings"),
      Wp = (0, mp.c)("module"),
      Jp = (0, mp.c)("memory"),
      Sp = (0, mp.c)("trapped"),
      Np = (0, mp.c)("BC"),
      vp = (0, mp.c)("recycleDue"),
      Qp = (0, mp.c)("loading"),
      Gp = (0, mp.c)("generation"),
      qp = (0, mp.c)("viewDrawn"),
      ap = (0, mp.c)("clip"),
      ip = (0, mp.c)("session"),
      dp = (0, mp.c)("control"),
      Pp = (0, mp.c)("deferred"),
      np = (0, mp.c)("coreU8"),
      yp = (0, mp.c)("coreU32"),
      op = (0, mp.c)("moduleU8"),
      Tp = (0, mp.c)("edited"),
      kp = (0, mp.c)("sendSession"),
      bV = (0, mp.c)("checkNotInEvents"),
      wV = (0, mp.c)("clipping"),
      MV = (0, mp.c)("busy"),
      eV = (0, mp.c)("use"),
      HV = (0, mp.c)("ensureLoaded"),
      pV = (0, mp.c)("loadOnce"),
      VV = (0, mp.c)("recycleAfterStep"),
      gV = (0, mp.c)("settleRecycle"),
      lV = (0, mp.c)("load"),
      LV = (0, mp.c)("attach"),
      IV = (0, mp.c)("resendHeld"),
      OV = (0, mp.c)("recycle"),
      UV = (0, mp.c)("send"),
      tV = (0, mp.c)("unload"),
      CV = (0, mp.c)("dropModule"),
      EV = (0, mp.c)("coreBytes"),
      FV = (0, mp.c)("coreWords"),
      BV = (0, mp.c)("moduleBytes"),
      sV = (0, mp.c)("loadFailed"),
      mV = (0, mp.c)("call"),
      hV = (0, mp.c)("guard"),
      zV = (0, mp.c)("trapOn");
    class XV {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, zV, {
          value: dV
        }), Object.defineProperty(this, hV, {
          value: uV
        }), Object.defineProperty(this, mV, {
          value: iV
        }), Object.defineProperty(this, sV, {
          value: aV
        }), Object.defineProperty(this, BV, {
          value: qV
        }), Object.defineProperty(this, FV, {
          value: GV
        }), Object.defineProperty(this, EV, {
          value: QV
        }), Object.defineProperty(this, CV, {
          value: vV
        }), Object.defineProperty(this, tV, {
          value: NV
        }), Object.defineProperty(this, UV, {
          value: SV
        }), Object.defineProperty(this, OV, {
          value: JV
        }), Object.defineProperty(this, IV, {
          value: WV
        }), Object.defineProperty(this, LV, {
          value: AV
        }), Object.defineProperty(this, lV, {
          value: fV
        }), Object.defineProperty(this, gV, {
          value: ZV
        }), Object.defineProperty(this, VV, {
          value: YV
        }), Object.defineProperty(this, pV, {
          value: cV
        }), Object.defineProperty(this, HV, {
          value: DV
        }), Object.defineProperty(this, eV, {
          value: RV
        }), Object.defineProperty(this, MV, {
          value: rV
        }), Object.defineProperty(this, wV, {
          value: KV
        }), Object.defineProperty(this, bV, {
          value: jV
        }), Object.defineProperty(this, kp, {
          value: xV
        }), Object.defineProperty(this, Ap, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Wp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Jp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Sp, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Np, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, vp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Gp, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, qp, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ap, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ip, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Pp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, np, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yp, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, op, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Tp, {
          writable: !0,
          value: void 0
        }), (0, sp.d)(this, Tp)[Tp] = new jp({
          ensureLoaded: () => (0, sp.d)(this, HV)[HV](),
          recorderCall: (bb, wb) => {
            wb && (0, sp.d)(this, bV)[bV]("an edited save's stage");
            const Mb = (0, sp.d)(this, mV)[mV](((wb, Mb) => (bb(wb, Mb), !0)));
            return null !== Mb && void 0 !== Mb && Mb
          },
          beginSave: bb.beginSave,
          givenUp: bb.givenUp
        })
      }
      get active() {
        return null !== (0, sp.d)(this, Wp)[Wp]
      }
      get trapped() {
        return (0, sp.d)(this, Sp)[Sp]
      }
      get loading() {
        return null !== (0, sp.d)(this, Qp)[Qp]
      }
      prefetch() {
        (0, sp.d)(this, Np)[Np] || (0, sp.d)(this, Sp)[Sp] || (0, sp.d)(this, Wp)[Wp] || (0, sp.d)(this, Qp)[Qp] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, sp.d)(this, qp)[qp] = !0, (0, sp.d)(this, wV)[wV]() && (0, sp.d)(this, eV)[eV]()
      }
      prefs(bb, wb) {
        (0, sp.d)(this, ap)[ap] = {
          on: bb,
          seconds: wb
        }, (0, sp.d)(this, UV)[UV](Ub.Nc.Prefs, rp(bb, wb)), bb && (0, sp.d)(this, qp)[qp] && (0, sp.d)(this, eV)[eV]()
      }
      control(bb) {
        const wb = function(bb) {
          return new Uint8Array([bb, 0, 0, 0])
        }(bb);
        if (fp.has(bb)) {
          if (!(0, sp.d)(this, Sp)[Sp]) return (0, sp.d)(this, Wp)[Wp] ? void(0, sp.d)(this, UV)[UV](Ub.Nc.Control, wb) : ((0, sp.d)(this, dp)[dp] = wb, void(0, sp.d)(this, eV)[eV]());
          this.deps.failed(Zp)
        } else(0, sp.d)(this, Np)[Np] || this.deps.coreCommand(Ub.Nc.Control, wb)
      }
      session(bb) {
        (0, sp.d)(this, ip)[ip] = bb, (0, sp.d)(this, kp)[kp](bb)
      }
      filePartDone(bb, wb) {
        (0, sp.d)(this, UV)[UV](Ub.Nc.FilePartDone, function(bb, wb) {
          const Mb = new Uint8Array(8),
            eb = new DataView(Mb.buffer);
          return eb.setUint32(0, bb, !0), eb.setUint32(4, wb, !0), Mb
        }(bb, wb))
      }
      fileDone(bb) {
        return (0, sp.d)(this, UV)[UV](Ub.Nc.FileDone, function(bb) {
          const wb = new Uint8Array(4);
          return new DataView(wb.buffer).setUint32(0, bb, !0), wb
        }(bb)), (0, sp.d)(this, VV)[VV]()
      }
      saveEdited(bb) {
        return (0, sp.d)(this, bV)[bV]("saveEdited"), (0, sp.d)(this, Tp)[Tp].start(bb)
      }
      afterFrame() {
        if (!(0, sp.d)(this, Wp)[Wp]) return;
        "read" === (0, sp.d)(this, Tp)[Tp].beforeRecorderStep() && (0, sp.d)(this, VV)[VV]();
        const bb = (0, sp.d)(this, vp)[vp];
        (0, sp.d)(this, vp)[vp] = null;
        const wb = (0, sp.d)(this, Wp)[Wp],
          Mb = (0, sp.d)(this, Jp)[Jp];
        if (!wb || !Mb) return void(null === bb || void 0 === bb || bb.resolve((0, sp.d)(this, Sp)[Sp] ? "trapped" : "nI"));
        const {
          core: eb
        } = this.deps, Hb = eb.JVb(2);
        let pb, Vb, gb, lb, Lb = 0,
          Ib = 0;
        if (0 !== Hb) {
          var Ob, Ub;
          const bb = (0, sp.d)(this, FV)[FV]();
          Lb = null !== (Ob = bb[Hb >>> 2]) && void 0 !== Ob ? Ob : 0, Ib = null !== (Ub = bb[1 + (Hb >>> 2)]) && void 0 !== Ub ? Ub : 0
        }
        try {
          if (Ib > 0) {
            const bb = wb.feed(Ib);
            0 !== bb && (0, sp.d)(this, BV)[BV](Mb).set((0, sp.d)(this, EV)[EV]().subarray(Lb, Lb + Ib), bb)
          }
          pb = wb.step(), Vb = wb.SVb(), gb = wb.NVb(), lb = wb.vVb()
        } catch (tb) {
          if (!(0, sp.d)(this, zV)[zV](tb)) throw null === bb || void 0 === bb || bb.resolve("nI"), tb;
          return void(null === bb || void 0 === bb || bb.resolve("trapped"))
        }
        if (pb > 0) {
          const bb = eb.QVb(2, pb);
          0 !== bb && (0, sp.d)(this, EV)[EV]().set((0, sp.d)(this, BV)[BV](Mb).subarray(Vb, Vb + pb), bb)
        }
        if (gb > 0) {
          (0, sp.d)(this, Pp)[Pp] = [];
          try {
            this.deps.events(new Uint8Array(Mb.buffer, lb, gb), Mb)
          } catch (tb) {
            throw null === bb || void 0 === bb || bb.resolve("nI"), tb
          } finally {
            const bb = (0, sp.d)(this, Pp)[Pp];
            (0, sp.d)(this, Pp)[Pp] = null;
            for (const [wb, Mb] of bb)(0, sp.d)(this, UV)[UV](wb, Mb)
          }
        }
        if (!(0, sp.d)(this, wV)[wV]() && !(0, sp.d)(this, MV)[MV]()) return (0, sp.d)(this, tV)[tV](), void(null === bb || void 0 === bb || bb.resolve("nI"));
        null === bb || void 0 === bb || bb.resolve((0, sp.d)(this, OV)[OV]())
      }
      dispose() {
        (0, sp.d)(this, Np)[Np] = !0, (0, sp.d)(this, tV)[tV]()
      }
    }

    function xV(bb) {
      (0, sp.d)(this, UV)[UV](Ub.Nc.Session, function(bb) {
        const wb = new TextEncoder,
          Mb = wb.encode(bb.game).subarray(0, 65535),
          eb = wb.encode(bb.lobby).subarray(0, 65535),
          Hb = new Uint8Array(22 + Mb.length + 2 + eb.length),
          pb = new DataView(Hb.buffer);
        pb.setFloat64(0, bb.unixMs, !0), pb.setBigUint64(8, BigInt.asUintN(64, bb.session), !0), pb.setUint8(16, bb.lobbyType);
        let Vb = 20;
        for (const gb of [Mb, eb]) pb.setUint16(Vb, gb.length, !0), Hb.set(gb, Vb + 2), Vb += 2 + gb.length;
        return Hb
      }({
        ...bb,
        unixMs: this.deps.unixNow()
      }))
    }

    function jV(bb) {
      false
    }

    function KV() {
      var bb, wb;
      return null !== (bb = null === (wb = (0, sp.d)(this, ap)[ap]) || void 0 === wb ? void 0 : wb.on) && void 0 !== bb && bb
    }

    function rV() {
      const bb = (0, sp.d)(this, Wp)[Wp];
      let wb = !0;
      if (bb) try {
        wb = bb.busy()
      } catch (Mb) {
        if (!(0, sp.d)(this, zV)[zV](Mb)) throw Mb
      }
      return wb || (0, sp.d)(this, Tp)[Tp].active
    }
    async function RV() {
      !(0, sp.d)(this, Np)[Np] && this.deps.allowed() ? await (0, sp.d)(this, HV)[HV]() : (0, sp.d)(this, dp)[dp] = null
    }

    function DV() {
      return (0, sp.d)(this, Sp)[Sp] || (0, sp.d)(this, Np)[Np] ? Promise.resolve(!1) : (0, sp.d)(this, Wp)[Wp] ? Promise.resolve(!0) : ((0, sp.d)(this, Qp)[Qp] ??= (0, sp.d)(this, pV)[pV](), (0, sp.d)(this, Qp)[Qp])
    }
    async function cV() {
      let bb = !1;
      try {
        return bb = await (0, sp.d)(this, lV)[lV](), bb
      } finally {
        bb || ((0, sp.d)(this, dp)[dp] = null), (0, sp.d)(this, Qp)[Qp] = null
      }
    }

    function YV() {
      if (!(0, sp.d)(this, Wp)[Wp]) return Promise.resolve((0, sp.d)(this, Sp)[Sp] ? "trapped" : "nI");
      if (!(0, sp.d)(this, vp)[vp]) {
        let bb = () => {};
        const wb = new Promise((wb => {
          bb = wb
        }));
        (0, sp.d)(this, vp)[vp] = {
          promise: wb,
          resolve: bb
        }
      }
      return (0, sp.d)(this, vp)[vp].promise
    }

    function ZV(bb) {
      const wb = (0, sp.d)(this, vp)[vp];
      (0, sp.d)(this, vp)[vp] = null, null === wb || void 0 === wb || wb.resolve(bb)
    }
    async function fV() {
      let bb = (0, sp.d)(this, Ap)[Ap];
      if (!bb) {
        const wb = (0, sp.d)(this, Gp)[Gp];
        try {
          bb = await this.deps.load()
        } catch (Mb) {
          return wb === (0, sp.d)(this, Gp)[Gp] && await (0, sp.d)(this, sV)[sV](Mb), !1
        }
        if (wb !== (0, sp.d)(this, Gp)[Gp]) return this.deps.unload(), !1;
        const eb = bb,
          Hb = (0, sp.d)(this, hV)[hV]((() => eb.GVb()));
        if (void 0 === Hb) return !1;
        const pb = this.deps.core.qVb();
        if (Hb !== pb) return await (0, sp.d)(this, sV)[sV](new Error(`recorder port version ${Hb}, the core's ${pb}`)), !1;
        (0, sp.d)(this, Ap)[Ap] = bb
      }
      const wb = bb;
      try {
        if (!(0, sp.d)(this, hV)[hV]((() => ((0, sp.d)(this, Wp)[Wp] = new wb.aVb, (0, sp.d)(this, Jp)[Jp] = wb.AVb(), !0)))) return !1;
        (0, sp.d)(this, IV)[IV]();
        const bb = (0, sp.d)(this, dp)[dp];
        return (0, sp.d)(this, dp)[dp] = null, bb && (0, sp.d)(this, UV)[UV](Ub.Nc.Control, bb), (0, sp.d)(this, LV)[LV]()
      } catch (Mb) {
        return (0, sp.d)(this, tV)[tV](), await (0, sp.d)(this, sV)[sV](Mb), !1
      }
    }

    function AV() {
      return this.deps.core.iVb(0), 1 === this.deps.core.iVb(1) || ((0, sp.d)(this, tV)[tV](), this.deps.failed(Yp), !1)
    }

    function WV() {
      (0, sp.d)(this, ap)[ap] && (0, sp.d)(this, UV)[UV](Ub.Nc.Prefs, rp((0, sp.d)(this, ap)[ap].on, (0, sp.d)(this, ap)[ap].seconds)), (0, sp.d)(this, ip)[ip] && (0, sp.d)(this, kp)[kp]((0, sp.d)(this, ip)[ip])
    }

    function JV() {
      return cp({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var bb, wb;
          return null !== (bb = null === (wb = (0, sp.d)(this, ap)[ap]) || void 0 === wb ? void 0 : wb.seconds) && void 0 !== bb ? bb : 0
        },
        trapped: () => (0, sp.d)(this, Sp)[Sp],
        busy: () => (0, sp.d)(this, MV)[MV](),
        loadInFlight: () => (0, sp.d)(this, Qp)[Qp],
        BC: () => (0, sp.d)(this, Np)[Np],
        unload: () => {
          (0, sp.d)(this, tV)[tV]()
        },
        load: () => (0, sp.d)(this, HV)[HV]()
      })
    }

    function SV(bb, wb) {
      (0, sp.d)(this, Pp)[Pp] ? (0, sp.d)(this, Pp)[Pp].push([bb, wb]): (0, sp.d)(this, mV)[mV](((Mb, eb) => {
        const Hb = Mb.WVb(wb.length);
        0 !== Hb && (new Uint8Array(eb.buffer, Hb, wb.length).set(wb), Mb.command(bb, wb.length))
      }))
    }

    function NV() {
      (0, sp.d)(this, Gp)[Gp]++, (0, sp.d)(this, gV)[gV]("nI"), (0, sp.d)(this, Tp)[Tp].stop(), this.deps.core.iVb(0), (0, sp.d)(this, CV)[CV](), (0, sp.d)(this, Sp)[Sp] || ((0, sp.d)(this, Ap)[Ap] = null, this.deps.unload())
    }

    function vV() {
      (0, sp.d)(this, mV)[mV]((bb => {
        bb.free()
      })), (0, sp.d)(this, Wp)[Wp] = null, (0, sp.d)(this, Jp)[Jp] = null, (0, sp.d)(this, op)[op] = null
    }

    function QV() {
      var bb;
      const wb = this.deps.coreBuffer();
      return (null === (bb = (0, sp.d)(this, np)[np]) || void 0 === bb ? void 0 : bb.buffer) !== wb && ((0, sp.d)(this, np)[np] = new Uint8Array(wb)), (0, sp.d)(this, np)[np]
    }

    function GV() {
      var bb;
      const wb = this.deps.coreBuffer();
      return (null === (bb = (0, sp.d)(this, yp)[yp]) || void 0 === bb ? void 0 : bb.buffer) !== wb && ((0, sp.d)(this, yp)[yp] = new Uint32Array(wb, 0, wb.byteLength >>> 2)), (0, sp.d)(this, yp)[yp]
    }

    function qV(bb) {
      var wb;
      const Mb = bb.buffer;
      return (null === (wb = (0, sp.d)(this, op)[op]) || void 0 === wb ? void 0 : wb.buffer) !== Mb && ((0, sp.d)(this, op)[op] = new Uint8Array(Mb)), (0, sp.d)(this, op)[op]
    }
    async function aV(bb) {
      await this.deps.staleOr(bb, (() => {
        this.deps.failed(Yp)
      }))
    }

    function iV(bb) {
      const wb = (0, sp.d)(this, Wp)[Wp],
        Mb = (0, sp.d)(this, Jp)[Jp];
      if (wb && Mb) return (0, sp.d)(this, hV)[hV]((() => bb(wb, Mb)))
    }

    function uV(bb) {
      if (!(0, sp.d)(this, Sp)[Sp]) try {
        return bb()
      } catch (wb) {
        if (!(0, sp.d)(this, zV)[zV](wb)) throw wb;
        return
      }
    }

    function dV(bb) {
      return bb instanceof WebAssembly.RuntimeError && ((0, sp.d)(this, Sp)[Sp] = !0, (0, sp.d)(this, Wp)[Wp] = null, (0, sp.d)(this, Jp)[Jp] = null, (0, sp.d)(this, op)[op] = null, (0, sp.d)(this, Ap)[Ap] = null, (0, sp.d)(this, dp)[dp] = null, (0, sp.d)(this, gV)[gV]("trapped"), this.deps.core.iVb(0), (0, sp.d)(this, Tp)[Tp].stop(), this.deps.crash(this.deps.markTrapped(bb)), this.deps.failed(Zp), !0)
    }
    var PV = Mb(39953);
    const nV = new Map([
      ["skyblock", () => Mb.e(60).then((() => Mb(39948)))]
    ]);

    function yV(bb) {
      const wb = nV.get(bb);
      return wb ? wb().then((() => {
        const wb = (0, PV.c)(bb);
        if (!wb) throw new Error(`${bb}'s replay hook module registered no hook`);
        return wb
      })) : null
    }
    class oV {
      constructor(bb) {
        this.deps = bb, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(bb) {
        if (this.pending.clear(), bb === this.game && null !== this.hook) return void(this.all = !0);
        const wb = ++this.generation;
        this.game = bb, this.hook = null, this.all = !1;
        const Mb = this.deps.loadHook(bb);
        null === Mb || void 0 === Mb || Mb.then((bb => {
          wb === this.generation && (this.hook = bb, this.all = !0)
        }), (bb => {
          wb === this.generation && this.deps.onError(bb)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(bb) {
        null === this.hook || this.all || this.pending.set(bb, !0)
      }
      entityInfoChanged(bb) {
        null === this.hook || this.all || this.pending.has(bb) || this.pending.set(bb, !1)
      }
      flush(bb) {
        const {
          hook: wb
        } = this;
        if (null === wb || !bb || !this.all && 0 === this.pending.size) return;
        const Mb = this.deps.cmd();
        if (null === Mb) return;
        const {
          api: eb
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: bb,
            count: wb
          } = be(eb, this.ids);
          this.ids = bb;
          for (let Mb = 0; Mb < wb; Mb++) this.pending.set(bb[Mb], !0)
        }
        const Hb = this.ids = we(this.ids, this.pending.size);
        let pb = 0;
        for (const Lb of this.pending.keys()) Hb[pb++] = Lb;
        const Vb = [],
          gb = Me(eb, Hb, pb, ((bb, wb) => {
            null !== wb && Vb.push({
              serverId: bb,
              info: wb,
              spawned: !0 === this.pending.get(bb)
            })
          }));
        if (gb) {
          this.pending.clear();
          for (const {
              serverId: bb,
              info: eb,
              spawned: Hb
            }
            of Vb) try {
            wb(eb, {
              setFacingTolerance: wb => {
                null === wb && Hb || XM(Mb, bb, wb) || this.pending.set(bb, Hb)
              }
            })
          } catch (lb) {
            this.deps.onError(lb)
          }
        }
      }
    }
    var TV = (0, mp.c)("bindings"),
      kV = (0, mp.c)("module"),
      bg = (0, mp.c)("memory"),
      wg = (0, mp.c)("trapped"),
      Mg = (0, mp.c)("generation"),
      eg = (0, mp.c)("loading"),
      Hg = (0, mp.c)("lend"),
      pg = (0, mp.c)("givenUp"),
      Vg = (0, mp.c)("afterSave"),
      gg = (0, mp.c)("opens"),
      lg = (0, mp.c)("saveAskedAt"),
      Lg = (0, mp.c)("unload"),
      Ig = (0, mp.c)("dropModule"),
      Og = (0, mp.c)("loadFailed"),
      Ug = (0, mp.c)("saveReadsBody"),
      tg = (0, mp.c)("command"),
      Cg = (0, mp.c)("call"),
      Eg = (0, mp.c)("guard"),
      Fg = (0, mp.c)("trapOn");
    class Bg {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, Fg, {
          value: Kg
        }), Object.defineProperty(this, Eg, {
          value: jg
        }), Object.defineProperty(this, Cg, {
          value: xg
        }), Object.defineProperty(this, tg, {
          value: Xg
        }), Object.defineProperty(this, Ug, {
          get: zg,
          set: void 0
        }), Object.defineProperty(this, Og, {
          value: hg
        }), Object.defineProperty(this, Ig, {
          value: mg
        }), Object.defineProperty(this, Lg, {
          value: sg
        }), Object.defineProperty(this, TV, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, kV, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wg, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Mg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, eg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Hg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Vg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, lg, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, sp.d)(this, kV)[kV] && null === (0, sp.d)(this, Vg)[Vg]
      }
      async open(bb, wb) {
        if ((0, sp.d)(this, wg)[wg]) return Ub.ad.ModuleTrap;
        let Mb = (0, sp.d)(this, TV)[TV];
        if (!Mb) {
          const bb = (0, sp.d)(this, Mg)[Mg];
          (0, sp.d)(this, eg)[eg]++;
          try {
            Mb = await this.deps.load()
          } catch (Hb) {
            return (0, sp.d)(this, eg)[eg]--, bb !== (0, sp.d)(this, Mg)[Mg] ? "stopped" : (0, sp.d)(this, Og)[Og](Hb, wb)
          }
          if ((0, sp.d)(this, eg)[eg]--, bb !== (0, sp.d)(this, Mg)[Mg]) return (0, sp.d)(this, TV)[TV] || 0 !== (0, sp.d)(this, eg)[eg] || (0, sp.d)(this, wg)[wg] || this.deps.unload(), "stopped";
          if ((0, sp.d)(this, wg)[wg]) return Ub.ad.ModuleTrap;
          const eb = Mb.GVb(),
            pb = this.deps.core.qVb();
          if (eb !== pb) return (0, sp.d)(this, Og)[Og](new Error(`replay port version ${eb}, the core's ${pb}`), wb);
          (0, sp.d)(this, TV)[TV] = Mb
        }
        if (!(0, sp.d)(this, kV)[kV]) {
          const bb = Mb;
          if (!(0, sp.d)(this, Eg)[Eg]((() => {
              (0, sp.d)(this, kV)[kV] = new bb.uVb, (0, sp.d)(this, bg)[bg] = bb.dVb()
            }))) return Ub.ad.ModuleTrap
        }
        let eb = !1;
        return (0, sp.d)(this, Cg)[Cg](((wb, Mb) => {
          null !== (0, sp.d)(this, Vg)[Vg] && wb.step(0, 0);
          const Hb = wb.stage(bb.length);
          0 !== Hb && (new Uint8Array(Mb.buffer, Hb, bb.length).set(bb), wb.open(), (0, sp.d)(this, pg)[pg] = (0, sp.d)(this, Hg)[Hg], (0, sp.d)(this, Vg)[Vg] = null, (0, sp.d)(this, gg)[gg]++, eb = !0)
        })) ? eb ? "opening" : Ub.ad.TooLarge : Ub.ad.ModuleTrap
      }
      beforeFrame(bb) {
        const wb = (0, sp.d)(this, kV)[kV],
          Mb = (0, sp.d)(this, bg)[bg];
        if (!wb || !Mb || null !== (0, sp.d)(this, Vg)[Vg]) return;
        const {
          core: eb
        } = this.deps, Hb = eb.PVb(bb);
        if (Hb < 0) return;
        const pb = Math.floor(Hb);
        let Vb, gb;
        try {
          Vb = wb.step(pb, Hb - pb), gb = wb.SVb()
        } catch (Lb) {
          return void(0, sp.d)(this, Fg)[Fg](Lb)
        }
        const lb = eb.QVb(1, Vb);
        if (0 === lb) {
          const bb = (0, sp.d)(this, Cg)[Cg]((bb => {
            bb.close()
          }));
          if (!bb) return;
          return (0, sp.d)(this, Ug)[Ug] ? (0, sp.d)(this, Vg)[Vg] = "drop" : (0, sp.d)(this, Ig)[Ig](), void eb.nVb(Ub.ad.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), lb, Vb).set(new Uint8Array(Mb.buffer, gb, Vb))
      }
      play() {
        (0, sp.d)(this, tg)[tg]((bb => {
          bb.play()
        }))
      }
      pause() {
        (0, sp.d)(this, tg)[tg]((bb => {
          bb.pause()
        }))
      }
      seek(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, sp.d)(this, tg)[tg]((Mb => {
          Mb.seek(bb, wb)
        }))
      }
      setMark(bb, wb) {
        return (0, sp.d)(this, tg)[tg]((Mb => {
          Mb.yVb(bb, wb)
        }))
      }
      addKeyframe(bb, wb) {
        return (0, sp.d)(this, tg)[tg]((Mb => {
          Mb.oVb(bb[0], bb[1], bb[2], wb[0], wb[1], wb[2])
        }))
      }
      setKeyframe(bb, wb) {
        return (0, sp.d)(this, tg)[tg]((Mb => {
          Mb.TVb(bb, wb)
        }))
      }
      moveKeyframe(bb, wb) {
        return (0, sp.d)(this, tg)[tg]((Mb => {
          Mb.kVb(bb, wb)
        }))
      }
      deleteKeyframes(bb, wb) {
        return (0, sp.d)(this, tg)[tg]((Mb => {
          Mb.bgb(bb, wb)
        }))
      }
      crop(bb, wb) {
        return null === (0, sp.d)(this, Hg)[Hg] && (0, sp.d)(this, tg)[tg]((Mb => {
          Mb.crop(bb, wb)
        }))
      }
      beginSave() {
        const bb = (0, sp.d)(this, lg)[lg];
        if ((0, sp.d)(this, lg)[lg] = null, null !== bb && bb !== (0, sp.d)(this, gg)[gg]) return null;
        let wb = 0,
          Mb = null;
        if ((0, sp.d)(this, Cg)[Cg](((bb, eb) => {
            wb = bb.save(), 0 !== wb && (Mb = new Uint8Array(eb.buffer, bb.wgb(), bb.Mgb()).slice())
          })), 0 === wb || !Mb) return null;
        const eb = {
          headLen: wb,
          editState: Mb,
          givenUp: () => (0, sp.d)(this, pg)[pg] === eb,
          head: (bb, wb) => {
            if ((0, sp.d)(this, Hg)[Hg] !== eb || !(0, sp.d)(this, Ug)[Ug]) return null;
            let Mb = null;
            return (0, sp.d)(this, Cg)[Cg](((eb, Hb) => {
              const pb = eb.egb();
              0 !== pb && bb >= 0 && wb >= 0 && bb + wb <= pb && (Mb = new Uint8Array(Hb.buffer, eb.Hgb() + bb, wb))
            })), Mb
          },
          end: () => {
            if ((0, sp.d)(this, Hg)[Hg] !== eb) return;
            (0, sp.d)(this, Hg)[Hg] = null, (0, sp.d)(this, pg)[pg] = null, (0, sp.d)(this, Cg)[Cg]((bb => {
              bb.pgb()
            }));
            const bb = (0, sp.d)(this, Vg)[Vg];
            (0, sp.d)(this, Vg)[Vg] = null, "unload" === bb ? (0, sp.d)(this, Lg)[Lg]() : "drop" === bb && (0, sp.d)(this, Ig)[Ig]()
          }
        };
        return (0, sp.d)(this, Hg)[Hg] = eb, eb
      }
      askSave() {
        (0, sp.d)(this, lg)[lg] = (0, sp.d)(this, gg)[gg]
      }
      setSpeed(bb) {
        (0, sp.d)(this, tg)[tg]((wb => {
          wb.Vgb(bb)
        }))
      }
      setCameraMode(bb) {
        (0, sp.d)(this, tg)[tg]((wb => {
          wb.ggb(bb)
        }))
      }
      close() {
        (0, sp.d)(this, tg)[tg]((bb => {
          bb.close()
        }))
      }
      stop() {
        (0, sp.d)(this, Mg)[Mg]++, (0, sp.d)(this, Ug)[Ug] && ((0, sp.d)(this, Cg)[Cg]((bb => {
          bb.close()
        })), (0, sp.d)(this, kV)[kV]) ? (0, sp.d)(this, Vg)[Vg] = "unload" : (0, sp.d)(this, Lg)[Lg]()
      }
    }

    function sg() {
      (0, sp.d)(this, Ig)[Ig](), (0, sp.d)(this, wg)[wg] || ((0, sp.d)(this, TV)[TV] = null, this.deps.unload())
    }

    function mg() {
      (0, sp.d)(this, Cg)[Cg]((bb => {
        bb.free()
      })), (0, sp.d)(this, kV)[kV] = null, (0, sp.d)(this, bg)[bg] = null
    }
    async function hg(bb, wb) {
      return await this.deps.staleOr(bb, (() => {}), {
        beforeReload: wb
      }) ? "reloading" : Ub.ad.ModuleLoad
    }

    function zg() {
      return null !== (0, sp.d)(this, Hg)[Hg] && (0, sp.d)(this, pg)[pg] !== (0, sp.d)(this, Hg)[Hg]
    }

    function Xg(bb) {
      return null === (0, sp.d)(this, Vg)[Vg] && (0, sp.d)(this, Cg)[Cg](bb)
    }

    function xg(bb) {
      const wb = (0, sp.d)(this, kV)[kV],
        Mb = (0, sp.d)(this, bg)[bg];
      return !(!wb || !Mb) && (0, sp.d)(this, Eg)[Eg]((() => {
        bb(wb, Mb)
      }))
    }

    function jg(bb) {
      if ((0, sp.d)(this, wg)[wg]) return !1;
      try {
        return bb(), !0
      } catch (wb) {
        return (0, sp.d)(this, Fg)[Fg](wb), !1
      }
    }

    function Kg(bb) {
      if (!(bb instanceof WebAssembly.RuntimeError)) throw bb;
      (0, sp.d)(this, wg)[wg] = !0, (0, sp.d)(this, kV)[kV] = null, (0, sp.d)(this, bg)[bg] = null, (0, sp.d)(this, TV)[TV] = null, this.deps.crash(this.deps.markTrapped(bb)), this.deps.core.nVb(Ub.ad.ModuleTrap)
    }
    var rg = Mb(7639),
      Rg = Mb(42699);
    const Dg = "[bloxd-wasm-client]";
    const cg = String(PH);

    function Yg(bb) {
      return null === bb || bb === cg ? void 0 : bb
    }

    function Zg(bb) {
      var wb, Mb, eb, Hb, pb, gb, lb;
      switch (bb.what) {
        case Ub.jd.FlyingText: {
          let wb;
          try {
            wb = JSON.parse(bb.contentJson)
          } catch (Lb) {
            return void console.warn(`${Dg} a replay's flying text isn't JSON`, Lb)
          }
          Vb.k.iI("forceFlyingMiddleMessage", {
            content: wb,
            Pp: bb.Pp,
            angle: bb.angle,
            np: bb.np
          });
          break
        }
        case Ub.jd.PlayerKilled:
          (0, Rg.e)({
            kind: "killed",
            body: {
              deadEId: null !== (wb = Yg(bb.dead)) && void 0 !== wb ? wb : "",
              killerEId: Yg(bb.killer),
              withItem: null !== (Mb = bb.withItem) && void 0 !== Mb ? Mb : "",
              killstreak: bb.killstreak
            }
          });
          break;
        case Ub.jd.Killfeed:
          (0, Rg.e)({
            kind: "custom",
            body: {
              killer: {
                eId: Yg(bb.killerId),
                name: null !== (eb = bb.killerName) && void 0 !== eb ? eb : void 0,
                colour: null !== (Hb = bb.killerColour) && void 0 !== Hb ? Hb : void 0
              },
              victim: {
                eId: Yg(bb.victimId),
                name: null !== (pb = bb.victimName) && void 0 !== pb ? pb : void 0,
                colour: null !== (gb = bb.victimColour) && void 0 !== gb ? gb : void 0
              },
              withItem: null !== (lb = bb.withItem) && void 0 !== lb ? lb : ""
            }
          })
      }
    }
    const fg = "[bloxd-wasm-client]";

    function Ag(bb) {
      if (void 0 === bb || null === bb || "" === bb) return null;
      const wb = Number(bb);
      return Number.isInteger(wb) && wb > PH && wb <= 2147483647 ? wb : null
    }

    function Wg(bb) {
      return {
        id: Ag(bb.eId),
        name: "string" === typeof bb.name ? bb.name : null,
        colour: "string" === typeof bb.colour ? bb.colour : null
      }
    }

    function Jg(bb) {
      const wb = (0, Hp.m)(le.nc.PlayerKilled, (wb => {
          var Mb, eb;
          const Hb = (0, ep.g)(wb);
          if (!(0, ep.c)(Hb)) return;
          const {
            deadEId: pb,
            killerEId: Vb,
            withItem: gb,
            killstreak: lb
          } = Hb;
          bb.recordPlayerKilled(null !== (Mb = Ag(pb)) && void 0 !== Mb ? Mb : PH, null !== (eb = Ag(Vb)) && void 0 !== eb ? eb : PH, "number" === typeof lb ? lb : 0, "string" === typeof gb ? gb : "")
        })),
        Mb = (0, Hp.m)(le.nc.CustomKillfeed, (wb => {
          const Mb = (0, ep.g)(wb);
          if (!(0, ep.c)(Mb) || !(0, ep.c)(Mb.killer) || !(0, ep.c)(Mb.victim)) return;
          const {
            killer: eb,
            victim: Hb,
            withItem: pb
          } = Mb;
          bb.recordKillfeed(Wg(eb), Wg(Hb), "string" === typeof pb ? pb : null)
        }));
      return () => {
        wb(), Mb()
      }
    }

    function Sg(bb) {
      let wb = null;
      const Mb = () => {
        const {
          enableClipping: Mb,
          clipDurationSeconds: Hb
        } = eb.c.get("clientEscMenuOptions"), pb = `${Mb}:${Hb}`;
        pb !== wb && (wb = pb, bb.recorder.setPrefs(Mb, Hb))
      };
      return Mb(), (0, Vb.o)("appManagerUpdated|clientEscMenuOptions", Mb)
    }
    const Ng = "replayModule",
      vg = "recorderModule";

    function Qg(bb, wb, Mb) {
      return function() {
        return bb.isStopped ? Mb : wb(...arguments)
      }
    }
    const Gg = {
      open: () => Promise.reject(new Error(NH.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function qg() {
      return Mb.e(77).then((() => Mb(64601)))
    }

    function ag(bb) {
      (0, NH.e)({
        text: bb,
        type: "Error"
      })
    }
    class ig {
      constructor(bb) {
        this.deps = bb, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: wb,
          api: eb,
          core: Hb
        } = bb, pb = () => bb.memory().buffer, Vb = () => wb.isStopped ? null : wb.rings.cmd, gb = Qg(wb, ((bb, wb) => Hb.QVb(bb, wb)), 0), lb = () => Hb.qVb();
        let Lb = null;
        this.replay = new Bg({
          core: {
            PVb: Qg(wb, (bb => Hb.PVb(bb)), -1),
            QVb: gb,
            qVb: lb,
            nVb: Qg(wb, (bb => {
              Hb.nVb(bb)
            }), void 0)
          },
          coreBuffer: pb,
          load: async () => (Lb = await Mb.e(78).then((() => Mb(64615))), Lb.loadReplayModule()),
          unload: () => {
            var bb;
            null === (bb = Lb) || void 0 === bb || bb.unloadReplayModule()
          },
          markTrapped: bb => Lb ? Lb.markReplayTrapped(bb) : new Error(String(bb)),
          staleOr: (wb, Mb, eb) => bb.staleOr(Ng, wb, Mb, eb),
          crash: wb => {
            bb.reportFault(Ng, wb)
          }
        });
        let Ib = null;
        this.recorder = new XV({
          core: {
            iVb: Qg(wb, (bb => Hb.iVb(bb)), 0),
            JVb: Qg(wb, (bb => Hb.JVb(bb)), 0),
            QVb: gb,
            qVb: lb
          },
          coreCommand: (bb, wb) => {
            var Mb, eb;
            return null !== (Mb = null === (eb = Vb()) || void 0 === eb ? void 0 : eb.writeCmd(bb, 0, wb)) && void 0 !== Mb && Mb
          },
          coreBuffer: pb,
          load: async () => (Ib = await qg(), Ib.loadRecorderModule()),
          prefetch: () => {
            qg().then((bb => bb.prefetchRecorderModule())).catch((bb => {
              console.warn(`${fg} the recorder module didn't prefetch, so a save loads it:`, bb)
            }))
          },
          unload: () => {
            var bb;
            null === (bb = Ib) || void 0 === bb || bb.unloadRecorderModule()
          },
          markTrapped: bb => Ib ? Ib.markRecorderTrapped(bb) : new Error(String(bb)),
          memoryBytes: () => {
            var bb, wb;
            return null !== (bb = null === (wb = Ib) || void 0 === wb ? void 0 : wb.recorderMemoryBytes()) && void 0 !== bb ? bb : 0
          },
          staleOr: (wb, Mb) => bb.staleOr(vg, wb, Mb),
          crash: wb => {
            bb.reportFault(vg, wb)
          },
          allowed: () => !0 === bb.options.get("canRecordReplays"),
          failed: bb => {
            this.runtime.recorder.stopped(), ag(bb)
          },
          events: (bb, wb) => {
            this.runtime.recorderEvents(bb, wb)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: ag,
          unixNow: () => Date.now()
        });
        const Ob = new dH({
          core: {
            KVb: Qg(wb, (bb => Hb.KVb(bb)), 0),
            RVb: Qg(wb, (() => {
              Hb.RVb()
            }), void 0),
            aF: Qg(wb, (() => Hb.aF()), 0),
            rVb: Qg(wb, (() => Hb.rVb()), 0)
          },
          buffer: pb,
          apiView: () => eb.apiView,
          cmd: Vb,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new oV({
          api: eb,
          cmd: Vb,
          loadHook: yV,
          onError: bb => {
            console.warn(`${fg} the recorded game's replay hooks:`, bb)
          }
        });
        const Ub = new Mp({
          client: Ob,
          buffer: pb,
          setHoldDraws: bb => {
            wb.setHoldDraws(bb)
          },
          notify: NH.e,
          onRecorderState: () => {
            var bb;
            null === (bb = (0, QH.e)()) || void 0 === bb || bb.recorderChanged()
          },
          onViewerChange: () => {
            var bb;
            null === (bb = (0, QH.e)()) || void 0 === bb || bb.viewerChanged()
          },
          onReplayOption: wb => {
            ! function(bb, wb) {
              var Mb, eb;
              const Hb = le.wb[wb.key];
              if (void 0 === Hb) return;
              let pb = null !== (Mb = wb.value) && void 0 !== Mb ? Mb : JSON.parse(JSON.stringify(null !== (eb = rg.b[Hb]) && void 0 !== eb ? eb : null));
              if (null !== wb.value && wb.key < le.Wb.Environment && "string" === typeof pb) try {
                pb = JSON.parse(pb)
              } catch (Vb) {
                return void console.warn(`${Dg} a replay's ${Hb} isn't JSON`, Vb)
              }
              bb.applyNewClientOptions({
                [Hb]: pb
              })
            }(bb.options, wb)
          },
          onReplayUiEvent: Zg,
          onReplayOpened: wb => {
            this.entityHooks.opened((0, Rb.Zb)(wb)), bb.replayShaderPack(wb)
          },
          meshPending: () => {
            var bb, Mb;
            return null !== (bb = null === (Mb = wb.lastHeader) || void 0 === Mb ? void 0 : Mb.renderPending) && void 0 !== bb ? bb : 0
          },
          viewerOpen: vH.e,
          download: bb => {
            (0, JH.f)(bb)
          }
        });
        this.runtime = Ub, eb.replay = Ub.sink, (0, QH.s)(Ub);
        const tb = new gp({
          live: () => {
            var bb;
            return !wb.isStopped && !0 === (null === (bb = Ub.currentViewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          cmd: Vb,
          dragScale: Fp
        });
        this.freecam = tb, (0, QH.p)(tb), this.recordedOptions = function(bb, wb) {
          const Mb = le.wb,
            eb = Mb.map(((Mb, eb) => wb.subscribe(Mb, (wb => {
              bb.setOption(eb, wb)
            }))));
          return {
            sendAll() {
              bb.setAllOptions(Mb.map((bb => wb.get(bb))))
            },
            stop() {
              for (const bb of eb) bb()
            }
          }
        }(Ub.recorder, bb.options), this.stops = [(0, se.m)((bb => {
          tb.flush();
          try {
            this.replay.beforeFrame(bb)
          } catch (wb) {
            this.deps.reportFault("replayFrame", wb)
          }
        })), (0, se.A)(((bb, wb) => {
          try {
            this.recorder.afterFrame(), wb && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Mb) {
            this.deps.reportFault("recorderFrame", Mb)
          }
          try {
            Ub.afterFrame(bb)
          } catch (Mb) {
            this.deps.reportFault("replayRuntime", Mb)
          }
        })), Sg(Ub), () => {
          this.recordedOptions.stop()
        }, Jg(Ub.recorder), (0, pp.k)((bb => {
          let {
            action: wb,
            down: Mb
          } = bb;
          var eb;
          Mb && (null === (eb = (0, QH.e)()) || void 0 === eb || eb.keyDown(wb))
        }))];
        const Cb = () => {
          const bb = Ub.currentViewer;
          return !0 === (null === bb || void 0 === bb ? void 0 : bb.isOpen) ? bb : null
        };
        (0, SH.g)({
          open: (bb, wb) => this.open(bb, wb),
          replayKey: () => {
            var bb, wb;
            return null !== (bb = null === (wb = Cb()) || void 0 === wb ? void 0 : wb.id) && void 0 !== bb ? bb : null
          },
          saveRefusal: () => {
            var bb, wb;
            return null !== (bb = null === (wb = Cb()) || void 0 === wb ? void 0 : wb.saveRefusal) && void 0 !== bb ? bb : null
          },
          encode: () => {
            var bb, wb;
            return null !== (bb = null === (wb = Cb()) || void 0 === wb ? void 0 : wb.save()) && void 0 !== bb ? bb : Promise.resolve(null)
          },
          fileHandle: () => {
            var bb, wb;
            return null !== (bb = null === (wb = Ub.currentViewer) || void 0 === wb ? void 0 : wb.fileHandle) && void 0 !== bb ? bb : null
          },
          markSaved: (bb, wb) => {
            var Mb;
            null === (Mb = Ub.currentViewer) || void 0 === Mb || Mb.markSaved(bb, wb)
          }
        })
      }
      netEvent(bb) {
        if ("connection" === bb.type)
          if (bb.phase === Ub.B.Activated) {
            this.activeConn = bb.conn;
            const wb = this.deps.sessionInfo(bb.conn);
            null !== wb && (this.runtime.activated({
              lobbyType: (0, Db.o)(wb.lobbyName),
              gameNameWithVariation: wb.gameNameWithVariation,
              lobbyName: wb.lobbyName
            }), this.recordedOptions.sendAll())
          } else bb.phase !== Ub.B.Left && bb.phase !== Ub.B.Closed || bb.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const bb of this.stops) bb();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, QH.m)() === this.runtime && (0, QH.s)(null), (0, QH.i)() === this.freecam && (0, QH.p)(null), (0, SH.g)(Gg), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(bb, wb) {
        const {
          running: Mb
        } = this.deps;
        if (Mb.isStopped) throw new Error(NH.b.coreStopped.text);
        if (bb.byteLength > 67108864) throw new Error(NH.b.cantOpen.text);
        let eb;
        try {
          eb = await async function(bb) {
            const wb = await bb.loadViewer();
            return wb.inPlayback || (0, se.O)().leaveGame(null), wb
          }(this.runtime)
        } catch (Hb) {
          throw console.warn(`${fg} the replay viewer didn't load`, Hb), new Error(NH.b.viewerLoadFailed.text)
        }
        if (Mb.isStopped) throw new Error(NH.b.coreStopped.text);
        await eb.open(bb, wb)
      }
    }
    var ug = Mb(2167);

    function dg(bb, wb) {
      const {
        aux: Mb,
        payload: eb
      } = function(bb) {
        return {
          aux: bb.reset ? Ub.bc.ResetFirst : 0,
          payload: ng(bb.changes)
        }
      }(wb);
      bb.queueOptions(Mb, eb) && (wb.reset && ug.c.reset(), ug.c.apply(wb.changes))
    }
    const Pg = new TextEncoder;

    function ng(bb) {
      const wb = new yg;
      return Tg(wb, bb), wb.bytes()
    }
    class yg {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(bb) {
        if (this.len + bb <= this.buf.length) return;
        const wb = new Uint8Array(Math.max(2 * this.buf.length, this.len + bb));
        wb.set(this.buf.subarray(0, this.len)), this.buf = wb, this.view = new DataView(wb.buffer)
      }
      u8(bb) {
        this.room(1), this.buf[this.len++] = bb
      }
      tagged(bb, wb, Mb) {
        this.room(1 + wb), this.buf[this.len++] = bb, 1 === wb ? this.view.setUint8(this.len, Mb) : 2 === wb ? this.view.setUint16(this.len, Mb) : this.view.setUint32(this.len, Mb), this.len += wb
      }
      signed(bb, wb, Mb) {
        this.room(1 + wb), this.buf[this.len++] = bb, 1 === wb ? this.view.setInt8(this.len, Mb) : 2 === wb ? this.view.setInt16(this.len, Mb) : this.view.setInt32(this.len, Mb), this.len += wb
      }
      f64(bb) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, bb), this.len += 8
      }
      raw(bb) {
        this.room(bb.length), this.buf.set(bb, this.len), this.len += bb.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function og(bb, wb, Mb, eb, Hb, pb, Vb) {
      wb < eb ? bb.u8(Mb | wb) : null !== Hb && wb < 256 ? bb.tagged(Hb, 1, wb) : wb < 65536 ? bb.tagged(pb, 2, wb) : bb.tagged(Vb, 4, wb)
    }

    function Tg(bb, wb) {
      switch (typeof wb) {
        case "undefined":
          return void bb.raw(kg);
        case "boolean":
          return void bb.u8(wb ? 195 : 194);
        case "number":
          return void
          function(bb, wb) {
            wb >>> 0 === wb ? wb < 128 ? bb.u8(wb) : wb < 256 ? bb.tagged(204, 1, wb) : wb < 65536 ? bb.tagged(205, 2, wb) : bb.tagged(206, 4, wb) : (wb | 0) === wb ? wb >= -32 ? bb.u8(255 & wb) : wb >= -128 ? bb.signed(208, 1, wb) : wb >= -32768 ? bb.signed(209, 2, wb) : bb.signed(210, 4, wb) : bb.f64(wb)
          }(bb, wb);
        case "string": {
          const Mb = Pg.encode(wb);
          return og(bb, Mb.length, 160, 32, 217, 218, 219), void bb.raw(Mb)
        }
        case "object":
          break;
        default:
          return void bb.u8(192)
      }
      if (null === wb) bb.u8(192);
      else if (Array.isArray(wb)) {
        og(bb, wb.length, 144, 16, null, 220, 221);
        for (const Mb of wb) Tg(bb, Mb)
      } else if (wb instanceof Uint8Array) og(bb, wb.length, 0, 0, 196, 197, 198), bb.raw(wb);
      else {
        const Mb = Object.keys(wb);
        og(bb, Mb.length, 128, 0, null, 222, 223);
        for (const eb of Mb) Tg(bb, eb), Tg(bb, wb[eb])
      }
    }
    const kg = new Uint8Array([212, 0, 0]);
    var bl = Mb(37452),
      wl = Mb(37528),
      Ml = Mb(42633),
      el = Mb(42665),
      Hl = Mb(2471);
    const pl = [1e3, 3e3, 9e3];
    class Vl {
      constructor(bb) {
        this.host = bb, this.sets = new Map, this.table = [], this.generation = 0, this.BC = !1
      }
      onEvent(bb) {
        const wb = function(bb) {
          if (bb.byteLength !== Ub.sd) return null;
          const wb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
          return {
            want: wb.getUint16(0, !0),
            release: wb.getUint16(2, !0)
          }
        }(bb);
        wb && !this.BC && (wb.release !== Ub.vd && this.release(wb.release), wb.want !== Ub.vd && this.want(wb.want))
      }
      reset(bb) {
        if (!this.BC) {
          for (const [bb, wb] of this.sets) "ready" === wb.state && this.releaseAll(wb.distinct), this.sets.delete(bb);
          this.table = bb, this.generation++
        }
      }
      dispose() {
        if (this.BC) return;
        this.BC = !0, this.generation++, this.table = [];
        const bb = [...this.sets.values()];
        this.sets.clear();
        let wb = null;
        for (const eb of bb)
          for (const bb of "ready" === eb.state ? eb.distinct : []) try {
            this.host.bpb(bb)
          } catch (Mb) {
            wb ??= {
              error: Mb
            }
          }
        if (wb) throw wb.error
      }
      isReady(bb) {
        var wb;
        return "ready" === (null === (wb = this.sets.get(bb)) || void 0 === wb ? void 0 : wb.state)
      }
      want(bb) {
        const wb = this.sets.get(bb);
        if ("loading" === (null === wb || void 0 === wb ? void 0 : wb.state)) return wb.wanted = !0, void this.capAnswer(bb, wb);
        if ("ready" === (null === wb || void 0 === wb ? void 0 : wb.state)) return void this.host.sendReady(ll(bb, wb.images, wb.size));
        const Mb = this.table[bb];
        if (!Mb || 1 !== Mb.urls.length && Mb.urls.length !== le.jc.CubeFaces) return this.host.sendReady(Ll(bb)), void this.host.onLoadFailed(bb, "", new Error(`no image set ${bb}`));
        const eb = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(bb, eb), this.load(bb, Mb, eb, this.generation, 0), this.capAnswer(bb, eb)
      }
      capAnswer(bb, wb) {
        this.host.wait(4e3, (() => {
          this.sets.get(bb) === wb && wb.wanted && this.host.sendReady(Ll(bb))
        }))
      }
      load(bb, wb, Mb, eb, Hb) {
        const pb = [...new Set(wb.urls)];
        Promise.allSettled(pb.map((bb => this.host.loadImage(bb, wb.orientation)))).then((Vb => {
          const gb = Vb.flatMap((bb => "fulfilled" === bb.status ? [bb.value] : [])),
            lb = eb === this.generation && this.sets.get(bb) === Mb,
            Lb = Vb.findIndex((bb => "rejected" === bb.status));
          if (!lb || !Mb.wanted) return this.BC ? void this.releaseAfterDispose(gb.map(gl)) : (this.releaseAll(gb.map(gl)), void(lb && this.sets.delete(bb)));
          Lb < 0 ? this.loaded(bb, wb, pb, gb) : (this.releaseAll(gb.map(gl)), this.host.sendReady(Ll(bb)), Hb < pl.length ? this.host.wait(pl[Hb], (() => {
            eb === this.generation && this.sets.get(bb) === Mb && (Mb.wanted ? this.load(bb, wb, Mb, eb, Hb + 1) : this.sets.delete(bb))
          })) : (this.sets.delete(bb), this.host.onLoadFailed(bb, pb[Lb], Vb[Lb].reason)))
        }))
      }
      loaded(bb, wb, Mb, eb) {
        const [Hb] = eb, pb = [Hb.width, Hb.height], Vb = eb.every((bb => bb.width === pb[0] && bb.height === pb[1])), gb = wb.urls.length === le.jc.CubeFaces;
        if (!Vb || pb[0] <= 0 || pb[1] <= 0 || pb[0] > 65535 || pb[1] > 65535 || gb && pb[0] !== pb[1]) {
          this.releaseAll(eb.map(gl)), this.sets.delete(bb), this.host.sendReady(Ll(bb));
          const Mb = eb.map((bb => `${bb.width}x${bb.height}`));
          return void this.host.onLoadFailed(bb, wb.urls[0], new Error(`set ${bb}'s images can't make its texture: ${Mb.join(", ")}`))
        }
        const lb = wb.urls.map((bb => eb[Mb.indexOf(bb)].id)),
          Lb = eb.map(gl);
        this.sets.set(bb, {
          state: "ready",
          images: lb,
          distinct: Lb,
          size: pb
        }), this.host.sendReady(ll(bb, lb, pb))
      }
      release(bb) {
        const wb = this.sets.get(bb);
        "loading" === (null === wb || void 0 === wb ? void 0 : wb.state) ? wb.wanted = !1: "ready" === (null === wb || void 0 === wb ? void 0 : wb.state) && (this.releaseAll(wb.distinct), this.sets.delete(bb))
      }
      releaseAll(bb) {
        for (const wb of bb) this.host.bpb(wb)
      }
      releaseAfterDispose(bb) {
        for (const wb of bb) try {
          this.host.bpb(wb)
        } catch {}
      }
    }

    function gl(bb) {
      return bb.id
    }

    function ll(bb, wb, Mb) {
      const eb = new Uint8Array(le.jc.SkyImagesReadyBytes),
        Hb = new DataView(eb.buffer);
      return Hb.setUint16(0, bb, !0), Hb.setUint16(2, wb.length, !0), Hb.setUint16(4, Mb[0], !0), Hb.setUint16(6, Mb[1], !0), wb.slice(0, le.jc.CubeFaces).forEach(((bb, wb) => {
        Hb.setUint32(8 + 4 * wb, bb, !0)
      })), eb
    }

    function Ll(bb) {
      const wb = new Uint8Array(le.jc.SkyImagesReadyBytes),
        Mb = new DataView(wb.buffer);
      return Mb.setUint16(0, bb, !0), Mb.setUint16(2, le.jc.Failed, !0), wb
    }
    let Il = Promise.resolve();
    async function Ol(bb, wb) {
      let Mb;
      try {
        Mb = await (0, Hl.C)(bb)
      } catch (pb) {
        throw new Ml.c("fetch", bb, {
          cause: pb
        })
      }
      const eb = Il.then((() => async function(bb, wb) {
        const Mb = new Blob([bb.slice()]);
        let eb = await createImageBitmap(Mb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: wb
        });
        const Hb = 1024 / Math.max(eb.width, eb.height);
        if (Hb < 1) {
          const bb = eb;
          try {
            eb = await createImageBitmap(bb, {
              resizeWidth: Math.max(1, Math.round(bb.width * Hb)),
              resizeHeight: Math.max(1, Math.round(bb.height * Hb)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            bb.close()
          }
        }
        return eb
      }(Mb, wb)));
      let Hb;
      Il = eb.catch((() => {}));
      try {
        Hb = await eb
      } catch (pb) {
        throw new Ml.c("decode", bb, {
          cause: pb
        })
      }
      return {
        id: (0, Ml.o)(Hb),
        width: Hb.width,
        height: Hb.height
      }
    }
    var Ul = Mb(2380),
      tl = Mb(35144),
      Cl = Mb(40577);
    const El = Ul.f.length,
      Fl = new Set([...Ul.f, "earth"]);

    function Bl(bb) {
      const wb = [],
        Mb = [],
        eb = (bb, eb) => {
          if ("custom" === eb.type) {
            Mb.push({
              id: bb,
              kind: le.jc.KindCustom,
              set: wb.length,
              earth: null
            });
            const Hb = [eb.px, eb.py, eb.pz, eb.nx, eb.ny, eb.nz];
            wb.push({
              urls: (0, Cl.d)(Hb),
              orientation: "none"
            })
          } else Mb.push({
            id: bb,
            kind: le.jc.KindEarth,
            set: 0,
            earth: eb
          })
        };
      Ul.f.forEach(((wb, Mb) => {
        var Hb;
        eb(Mb, null !== (Hb = sl(bb[wb])) && void 0 !== Hb ? Hb : tl.n[wb])
      }));
      const Hb = sl(bb.earth);
      "earth" === (null === Hb || void 0 === Hb ? void 0 : Hb.type) && eb(El, Hb);
      const pb = new TextEncoder,
        Vb = [],
        gb = [];
      for (const [tb, Cb] of Object.entries(bb)) {
        const bb = Fl.has(tb) ? null : sl(Cb);
        if (null === bb) continue;
        const wb = pb.encode(tb);
        wb.length > 255 ? gb.push(`Ignoring texture pack skybox ${tb}, whose name is over 255 bytes`) : Vb.length === le.jc.MaxAdded ? gb.push(`Ignoring texture pack skybox ${tb}, past the ${le.jc.MaxAdded} skies a pack can add`) : (Vb.push(wb), eb(le.jc.AddedId, bb))
      }
      const lb = wb.length;
      wb.push({
        urls: tl.f.map((bb => tl.i + bb)),
        orientation: "none"
      }), wb.push({
        urls: [tl.j],
        orientation: "flipY"
      }), wb.push({
        urls: [tl.b],
        orientation: "flipY"
      });
      const Lb = le.jc.SkyTableHeaderBytes + Mb.length * le.jc.SkyTableEntryBytes,
        Ib = new Uint8Array(Lb + Vb.reduce(((bb, wb) => bb + 1 + wb.length), 0)),
        Ob = new DataView(Ib.buffer);
      Ob.setUint16(0, lb, !0), Ob.setUint16(2, lb + 1, !0), Ob.setUint16(4, lb + 2, !0), Ob.setUint16(6, Mb.length, !0), Mb.forEach(((bb, wb) => {
        const Mb = le.jc.SkyTableHeaderBytes + wb * le.jc.SkyTableEntryBytes;
        Ob.setUint16(Mb, bb.id, !0), Ob.setUint8(Mb + 2, bb.kind);
        const eb = Mb + 4;
        bb.earth ? function(bb, wb, Mb) {
          const eb = bb;
          let Hb = 0,
            pb = 0;
          for (const [Vb, gb] of ml) {
            const bb = eb[Vb];
            "number" === typeof bb && Number.isFinite(bb) && (wb.setFloat32(Mb + 4 * gb, bb, !0), Hb |= 1 << gb)
          }
          for (const [Vb, gb, lb] of hl) {
            const bb = eb[Vb];
            Array.isArray(bb) && 3 === bb.length && bb.every((bb => "number" === typeof bb && Number.isFinite(bb))) && (bb.forEach(((bb, eb) => {
              wb.setFloat32(Mb + lb + 4 * eb, bb, !0)
            })), Hb |= gb)
          }
          zl.forEach(((bb, pb) => {
            let [Vb, gb] = bb;
            const lb = eb[Vb];
            "number" === typeof lb && Number.isFinite(lb) && (wb.setFloat32(Mb + le.x.CameraOffsetAt + 4 * pb, lb, !0), Hb |= gb)
          }));
          for (const [Vb, gb] of Xl) {
            const bb = eb[Vb];
            null !== bb && void 0 !== bb && (Hb |= gb, bb && (pb |= gb >>> 14))
          }
          wb.setUint32(Mb + le.x.PresentAt, Hb, !0), wb.setUint8(Mb + le.x.FlagsAt, pb)
        }(bb.earth, Ob, eb) : Ob.setUint16(eb, bb.set, !0)
      }));
      let Ub = Lb;
      for (const tb of Vb) Ib[Ub] = tb.length, Ib.set(tb, Ub + 1), Ub += 1 + tb.length;
      return {
        payload: Ib,
        sets: wb,
        leftOut: gb
      }
    }

    function sl(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const wb = bb;
      if ("earth" === wb.type) return bb;
      return "custom" === wb.type && ["px", "py", "pz", "nx", "ny", "nz"].every((bb => {
        const Mb = wb[bb];
        return "string" === typeof Mb && Mb.length > 0
      })) ? bb : null
    }
    const ml = [
        ["inclination", le.x.Inclination],
        ["turbidity", le.x.Turbidity],
        ["luminance", le.x.Luminance],
        ["rayleigh", le.x.Rayleigh],
        ["mieCoefficient", le.x.MieCoefficient],
        ["mieDirectionalG", le.x.MieDirectionalG],
        ["distance", le.x.Distance],
        ["azimuth", le.x.Azimuth]
      ],
      hl = [
        ["sunPosition", le.x.SunPosition, le.x.SunPositionAt],
        ["up", le.x.Up, le.x.UpAt],
        ["vertexTint", le.x.VertexTint, le.x.VertexTintAt]
      ],
      zl = [
        ["xCameraOffset", le.x.CameraOffsetX],
        ["yCameraOffset", le.x.CameraOffsetY],
        ["zCameraOffset", le.x.CameraOffsetZ]
      ],
      Xl = [
        ["useSunPosition", le.x.UseSunPosition],
        ["dithering", le.x.Dithering],
        ["infiniteDistance", le.x.InfiniteDistance]
      ];

    function xl(bb, wb, Mb) {
      const eb = new Kl({
        writeCmd: bb,
        warn: wb,
        followPack: jl(Mb, wb)
      });
      return eb.start(), eb
    }

    function jl(bb, wb) {
      return Mb => {
        let eb = () => {};
        const Hb = bb((bb => {
          eb(), eb = () => {}, null !== bb ? eb = bb.subscribe((bb => {
            Mb(function(bb, wb, Mb) {
              if ("object" !== typeof bb || null === bb) return null;
              const eb = bb.skyBoxes;
              if ("object" !== typeof eb || null === eb) return null;
              if ("player" === wb) return eb;
              return Object.fromEntries(Object.entries(eb).filter((bb => {
                let [wb, eb] = bb;
                return !! function(bb) {
                  if ("object" !== typeof bb || null === bb) return !1;
                  return "earth" === bb.type || Object.entries(bb).every((bb => {
                    let [wb, Mb] = bb;
                    return "type" === wb || ("" === (eb = Mb) || null !== function(bb) {
                      var wb, Mb, eb;
                      return "string" !== typeof bb ? null : null !== (wb = null === (Mb = rl.exec(bb)) || void 0 === Mb || null === (eb = Mb.groups) || void 0 === eb ? void 0 : eb.base64) && void 0 !== wb ? wb : null
                    }(eb));
                    var eb
                  }))
                }(eb) || (Mb(`Ignoring texture pack skybox ${wb}, whose faces are not all data URLs`, null), !1)
              })))
            }(bb.pack, null === bb.gameSource ? "player" : "customGame", wb))
          })) : Mb(null)
        }));
        return () => {
          Hb(), eb()
        }
      }
    }
    class Kl {
      constructor(bb) {
        var wb, Mb, eb;
        this.host = bb, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.BC = !1, this.wait = null !== (wb = bb.wait) && void 0 !== wb ? wb : (bb, wb) => {
          setTimeout(wb, bb)
        }, this.loader = new Vl({
          loadImage: null !== (Mb = bb.loadImage) && void 0 !== Mb ? Mb : Ol,
          bpb: null !== (eb = bb.bpb) && void 0 !== eb ? eb : Ml.p,
          sendReady: bb => {
            this.queue.push({
              kind: le.jc.SkyImagesReady,
              payload: bb
            })
          },
          onLoadFailed: (wb, Mb, eb) => {
            bb.warn(`sky image set ${wb} (${Mb}) didn't load: the last sky stays`, eb)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(el.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((bb => {
          this.write(null !== bb && void 0 !== bb ? bb : {})
        }))
      }
      onEvent(bb) {
        this.loader.onEvent(bb)
      }
      drain() {
        if (0 === this.queue.length) return;
        let bb = 0;
        for (; bb < this.queue.length && this.host.writeCmd(this.queue[bb].kind, 0, this.queue[bb].payload);) bb++;
        bb > 0 && this.queue.splice(0, bb)
      }
      dispose() {
        this.BC = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(bb) {
        if (this.BC) return;
        const wb = Bl(bb);
        if (!(this.written && (Mb = this.written, eb = wb, Mb.payload.length === eb.payload.length && Mb.payload.every(((bb, wb) => bb === eb.payload[wb])) && Mb.sets.length === eb.sets.length && Mb.sets.every(((bb, wb) => {
            const Mb = eb.sets[wb];
            return bb.orientation === Mb.orientation && bb.urls.length === Mb.urls.length && bb.urls.every(((bb, wb) => bb === Mb.urls[wb]))
          }))))) {
          var Mb, eb;
          for (const bb of wb.leftOut) this.host.warn(bb, null);
          this.written = wb, this.loader.reset(wb.sets), this.queue = this.queue.filter((bb => bb.kind !== le.jc.SkyImagesReady)), this.queue.push({
            kind: le.jc.SkyTable,
            payload: wb.payload
          })
        }
      }
    }
    const rl = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Rl = Mb(3042),
      Dl = Mb(3037),
      cl = Mb(328),
      Yl = Mb(211),
      Zl = Mb(4037),
      fl = Mb(4050),
      Al = Mb(303),
      Wl = Mb(309),
      Jl = Mb(4137),
      Sl = Mb(4171),
      Nl = Mb(4183),
      vl = Mb(126),
      Ql = Mb(4260),
      Gl = Mb(4252),
      ql = Mb(361),
      al = Mb(42525);
    class il {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Hp.m)(Ae.J, (bb => {
          this.onReply((0, ep.d)(Ae.J, bb), performance.now())
        }))
      }
      onFrame(bb, wb) {
        null === this.id ? this.id = bb : bb !== this.id && (this.id = bb, this.sentMs = document.hidden ? null : wb)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(bb, wb) {
        bb === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(wb - this.sentMs), this.sentMs = null)
      }
      take() {
        const bb = this.roundTripMs;
        return this.roundTripMs = null, bb
      }
      stop() {
        this.stopReplies()
      }
    }
    class ul {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(bb, wb, Mb, eb) {
        const Hb = bb - this.sampled >>> 0,
          pb = wb - this.timed >>> 0,
          Vb = Mb - this.frameUs >>> 0,
          gb = this.primed;
        return this.sampled = bb, this.timed = wb, this.frameUs = Mb, this.primed = !0, !(!gb || Hb > 64 || pb > 64) && (eb && Vb <= 1e6 * pb && (this.windowTimed += pb, this.windowUs += Vb), eb && Hb > 0)
      }
      reset() {}
      snapshotAndReset() {
        const bb = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: bb,
          submitToDoneMs: null
        }
      }
    }
    const dl = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class Pl {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(bb, wb) {
        const Mb = Math.min(4096, this.count + wb);
        this.samples.fill(bb, this.count, Mb), this.count = Mb
      }
      clear() {
        this.count = 0
      }
      take() {
        const bb = this.count;
        if (this.count = 0, bb < 30) return dl;
        const wb = this.samples.subarray(0, bb).sort(),
          Mb = Mb => wb[Math.min(bb - 1, Math.floor(Mb * bb))];
        return {
          lagP50Ms: Mb(.5),
          lagP90Ms: Mb(.9)
        }
      }
    }
    class nl {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new Pl
      }
      onFrame(bb, wb) {
        const Mb = bb.headerWord(le.L.Pacing),
          eb = bb.headerWord(le.L.PacingLagUs),
          Hb = (Mb >>> le.hb.LagsShift) - (this.word >>> le.hb.LagsShift) & le.hb.CountMask,
          pb = Hb > 0 ? (eb - this.lagUs >>> 0) / Hb / 1e3 : 0,
          Vb = this.primed && Hb <= 64 && pb <= 6e4;
        this.word = Mb, this.lagUs = eb, this.primed = !0, Vb && wb && Hb > 0 && 0 !== (Mb & le.hb.Defaulted) && this.lags.add(pb, Hb)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(bb) {
        return bb ? this.lags.take() : (this.lags.clear(), dl)
      }
    }
    var yl = Mb(4124),
      ol = Mb(35276),
      Tl = Mb(4139),
      kl = Mb(42567),
      bL = Mb(35270),
      wL = Mb(4054),
      ML = Mb(4145);
    const eL = {
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

    function HL(bb) {
      return new pL(bb)
    }
    class pL {
      constructor(bb) {
        this.shell = bb, this.tracker = new fl.b, this.gpu = new ul, this.pacing = new nl, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new il, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new yl.b(this.tracker, ((bb, wb, Mb, eb) => {
          this.shell.mainStalled(bb, wb, Mb, eb)
        }), (bb => this.shell.sZ(bb))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, ol.d)(bb.backend, bb.canvas, bb.adapterVendor), this.tracker.start((() => !bb.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, wL.c)("wasm", (() => {
          const {
            n: wb,
            sampleCount: Mb
          } = (0, kl.e)();
          return `${bb.backend}, quality steps aim at up to ${ML.d.target.maxFps} fps, pixel n ${wb}, msaa ${Mb}`
        }), (wb => {
          wb.setLoadCounts(bb.readLoadCounts), this.frameDebug = wb
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(bb) {
        var wb;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(bb), null === (wb = this.frameDebug) || void 0 === wb || wb.animationFrame()
      }
      sendsWent(bb, wb, Mb) {
        this.ping.onFrame(bb.headerWord(le.L.PingSent), wb), this.sendsStartMs = wb, this.sendsEndMs = Mb
      }
      frameRan(bb, wb, Mb, eb) {
        var Hb;
        this.ping.onFrame(bb.headerWord(le.L.PingSent), Mb);
        const pb = this.tracker;
        this.pacing.onFrame(bb, pb.isSampling());
        const Vb = bb.headerWord(le.L.TickUs) / 1e3 + (0, se.R)();
        var gb;
        (pb.Wm(Vb), null === (Hb = this.frameDebug) || void 0 === Hb || Hb.wasmFrame(bb, wb, Mb, eb, pb.isSampling(), Vb), null !== this.game) && (null === (gb = this.frameDebug) || void 0 === gb || gb.inGame());
        const lb = this.sendsStartMs >= wb ? this.sendsEndMs - this.sendsStartMs : 0,
          Lb = Math.max(0, Mb - wb - Vb - lb);
        if ("drawn" !== eb) return void("paced" === eb ? (this.pacedCpuMs += Lb, this.mainStall.paced()) : "skipped" === eb && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(wb), pb.onFrameStart(wb);
        this.gpu.onFrame(bb.headerWord(le.L.GpuSampled), bb.headerWord(le.L.GpuTimed), bb.headerWord(le.L.GpuFrameUs), pb.isSampling()) && pb.onGpuSampleStarted(), pb.onFrameCpu(Lb + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(wb)
      }
      framePaced() {
        var bb;
        this.mainStall.paced(), null === (bb = this.frameDebug) || void 0 === bb || bb.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const bb of this.timers) clearInterval(bb);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const bb = this.shell.joinedGame();
        if (bb !== this.game) {
          var wb;
          if (this.game = bb, null !== bb) null === (wb = this.frameDebug) || void 0 === wb || wb.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== bb
      }
      countFpsFrame(bb) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = bb
        }
        this.fpsFrames++;
        const wb = bb - this.fpsSpanStartMs;
        if (!(wb < Nl.b)) {
          if (!document.hidden) {
            const bb = 1e3 * this.fpsFrames / wb;
            this.firstSpanFps ??= bb, this.initialFps = this.firstSpanFps, this.fpsOverTime = bb
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = bb
        }
      }
      flush() {
        const bb = this.followGame(),
          {
            cpuFrameMs: wb,
            refreshHz: Mb,
            cpuBottleneck: Hb,
            frameIntervalCv: pb,
            ...Vb
          } = this.tracker.snapshotAndReset(),
          gb = this.shell.inGame(),
          lb = gb && this.inGameAtLastFlush,
          Lb = lb ? Vb : (0, Zl.f)(Vb),
          Ib = this.pacing.snapshotAndReset(lb);
        if (this.inGameAtLastFlush = gb, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !bb || !this.shell.canSend()) return;
        const Ob = performance.now(),
          tb = (0, Sl.v)((0, Sl.s)(Ob), this.unsentPage),
          Eb = function(bb, wb, Mb, Hb, pb, Vb, gb, lb) {
            var Lb, Ib, Ob, Ub, tb;
            const Cb = {},
              {
                canvas: Eb
              } = bb,
              Fb = (0, Jl.k)({
                refreshHz: wb.refreshHz,
                msaa: bb.msaa(),
                autoMsaaOff: (0, bL.c)()
              });
            for (const Bb of (0, Dl.g)()) {
              const sb = Bb.name;
              let mb;
              if ((0, cl.E)(sb)) mb = (0, Sl.b)(sb);
              else if ((0, Sl.i)(sb)) mb = lb[sb];
              else if ((0, Jl.l)(sb)) mb = Fb[sb];
              else switch (sb) {
                case "fps":
                  mb = Hb;
                  break;
                case "Vl":
                  mb = pb;
                  break;
                case "Ul":
                  mb = (0, Tl.B)((0, kl.e)().n);
                  break;
                case "tl":
                  mb = Math.max(Eb.width, Eb.height);
                  break;
                case "Cl":
                  mb = Math.min(Eb.width, Eb.height);
                  break;
                case "El":
                  mb = navigator.hardwareConcurrency || null;
                  break;
                case "Fl":
                  mb = (0, Op.getWebGpuSupported)();
                  break;
                case "Bl":
                  mb = null === bb.fallbackReason ? null : eL[bb.fallbackReason];
                  break;
                case "sl":
                  mb = wb.cpuFrameMs;
                  break;
                case "ml":
                  mb = wb.refreshHz;
                  break;
                case "hl":
                  mb = wb.cpuBottleneck;
                  break;
                case "zl":
                  mb = wb.frameIntervalCv;
                  break;
                case "Xl":
                  mb = wb.frameMs;
                  break;
                case "xl":
                  mb = wb.tickMs;
                  break;
                case "cl":
                  mb = wb.mainBusyShare;
                  break;
                case "Yl":
                  mb = wb.mainProbeDelayMs;
                  break;
                case "jl":
                  mb = wb.longAnimationFramesPerMin;
                  break;
                case "Kl":
                  mb = wb.longAnimationFrameTimeShare;
                  break;
                case "rl":
                  mb = wb.longAnimationFrameScriptShare;
                  break;
                case "Rl":
                  mb = wb.framesOver50msPerMin;
                  break;
                case "Dl":
                  mb = wb.framesOver100msPerMin;
                  break;
                case "Zl":
                  mb = wb.gpuPassMs;
                  break;
                case "fl":
                  mb = wb.gpuSubmitToDoneMs;
                  break;
                case "Al":
                  mb = Mb.lagP50Ms;
                  break;
                case "Wl":
                  mb = Mb.lagP90Ms;
                  break;
                case "Pl":
                  mb = (0, Rl.j)(Vb);
                  break;
                case "Ol":
                  mb = gb;
                  break;
                case "Jl":
                case "Sl":
                case "Nl":
                case "vl":
                case "Ql":
                case "Gl":
                case "ql":
                case "al":
                case "il":
                case "ul":
                case "dl":
                case "nl":
                case "yl":
                case "ol":
                case "Tl":
                  mb = null;
                  break;
                case "UL":
                  mb = (0, Op.getPlatformType)();
                  break;
                case "tL":
                  mb = (0, Op.getGpuVendor)();
                  break;
                case "CL":
                  mb = al.b[bb.backend];
                  break;
                case "EL":
                  mb = (0, vl.e)();
                  break;
                case "FL":
                  mb = (0, Op.getOperatingSystem)();
                  break;
                case "BL":
                  mb = (0, Op.getTrafficSource)();
                  break;
                case "sL":
                  mb = null !== (Lb = eb.c.get("gameEntrySource")) && void 0 !== Lb ? Lb : Yl.f;
                  break;
                case "mL":
                  mb = null !== (Ib = wb.frameLimiter) && void 0 !== Ib ? Ib : Yl.f;
                  break;
                case "hL":
                  mb = (0, Al.k)();
                  break;
                case "zL":
                  mb = null !== (Ob = (0, Wl.e)()) && void 0 !== Ob ? Ob : Yl.f;
                  break;
                case "XL":
                  mb = (0, Al.d)(Eb.width, Eb.height);
                  break;
                case "xL":
                  mb = (0, Dl.j)(-(new Date).getTimezoneOffset());
                  break;
                case "cL":
                  mb = null !== (Ub = bb.fallbackReason) && void 0 !== Ub ? Ub : Yl.f;
                  break;
                case "fL":
                  mb = "ready";
                  break;
                case "AL":
                  mb = (0, Op.getSoftwareRenderer)();
                  break;
                case "KL":
                  mb = (0, Ql.c)();
                  break;
                case "rL":
                  mb = (0, Gl.d)().replayState;
                  break;
                case "RL":
                  mb = (0, Gl.d)().replaySelection;
                  break;
                case "DL":
                  mb = null !== bb.shaderPackReach() ? "true" : "false";
                  break;
                case "WL":
                  mb = null !== (tb = bb.shaderPackReach()) && void 0 !== tb && tb.sceneDepth ? "true" : "false";
                  break;
                case "JL": {
                  const wb = bb.shaderPackReach();
                  mb = null !== wb && void 0 !== wb && wb.sunShadow ? "all" : null !== wb && void 0 !== wb && wb.airShadow ? "air" : "none";
                  break
                }
                case "NL":
                  mb = ql.z;
                  break;
                case "uL":
                  mb = (0, Sl.m)();
                  break;
                case "jL": {
                  const wb = bb.YE();
                  mb = null === wb ? Yl.f : String(wb);
                  break
                }
                case "YL":
                case "ZL":
                  mb = Yl.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${sb}`)
              }
              if (void 0 === mb) throw new Error(`Metric ${sb} has no value`);
              Cb[sb] = mb
            }
            return Cb
          }(this.shell, {
            cpuFrameMs: wb,
            refreshHz: Mb,
            cpuBottleneck: Hb,
            frameIntervalCv: pb,
            ...Lb
          }, Ib, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), tb);
        if (! function(bb, wb, Mb) {
            return (0, pM.d)(), bb(Cb.k.Send, wb, Mb)
          }(this.shell.writeCmd, Ub.od, function(bb) {
            const wb = (0, vb.h)((0, lM.f)(bb)),
              Mb = new Uint8Array(Cb.Qd.BYTES + wb.length);
            return new DataView(Mb.buffer).setUint16(0, lM.c.AnalyticsUpdate, !0), Mb.set(wb, Cb.Qd.BYTES), Mb
          }(Eb))) return this.unsentPage = tb, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Rl.f), (0, Sl.o)(Eb, "wasm", Ob)
      }
    }
    var VL = Mb(41085);

    function gL(bb, wb, Mb) {
      const eb = new Map;
      return (0, VL.c)(((bb, Mb, eb) => wb.Lg(bb, Mb, eb)), ((wb, Mb, Hb) => {
        const pb = `${wb},${Mb},${Hb}`;
        return eb.has(pb) || eb.set(pb, (0, nw.e)(bb, wb, Mb, Hb)), eb.get(pb)
      }), Mb)
    }
    var lL = Mb(41089),
      LL = Mb(42561);

    function IL(bb) {
      const wb = null !== bb && 0 !== (Cb.q.playerFlags(bb.api.apiView, 0) & Cb.Ad.CursorAim);
      wb !== (0, LL.k)() && (0, LL.F)(wb, null !== bb)
    }

    function OL(bb) {
      return (0, fe.c)(Ae.E, bb)
    }
    var UL = Mb(42705);
    const tL = new pb.e((bb => Mb(54825)(`./${bb}/${bb}Client`)));
    let CL = null,
      EL = null;
    async function FL(bb) {
      CL ??= Mb.e(33).then((() => Mb(40488))).then((bb => {
        EL = bb.createDefaultClientPlugins
      }), (bb => {
        throw CL = null, bb
      })), await Promise.all([tL.load(bb), CL])
    }

    function BL(bb) {
      bb.load(new uw(lH, new OH))
    }
    let sL = !1;
    const mL = new WeakMap;

    function hL(bb) {
      try {
        bb()
      } catch (wb) {
        console.error("[bloxd-wasm-client] a session-end step failed", wb)
      }
    }

    function zL(bb, wb) {
      ! function() {
        var bb, wb;
        pH.Howler.volume();
        const Mb = pH.Howler;
        null === (bb = Mb._autoResume) || void 0 === bb || bb.call(Mb), null === (wb = Mb._autoSuspend) || void 0 === wb || wb.call(Mb)
      }();
      const Mb = new hb(wb.core, wb.memory, wb.audio);
      let pb;
      try {
        pb = new fH(Mb, wb.options)
      } catch (Ub) {
        return bb.crash(WH.D, Ub), null
      }(0, lb.g)(AH(Mb, pb));
      const Ib = new ig({
        running: bb,
        api: Mb,
        core: wb.core,
        memory: wb.memory,
        staleOr: wb.staleOr,
        reportFault: wb.reportReplayFault,
        options: wb.options,
        sessionInfo: wb.sessionInfo,
        replayShaderPack: wb.replayShaderPack
      });
      (0, se.E)();
      const Ob = new ke({
        api: Mb,
        tables: pb,
        sessionInfo: wb.sessionInfo,
        gameFactory: bb => tL.loadedFactory(bb),
        defaultPlugins: (bb, wb, Mb, eb) => {
          if (null === EL) throw new Error("The default plugins started before they loaded");
          return EL(bb, wb, Mb, eb)
        },
        serverOptions: wb.options,
        onNetEvent: bb => {
          Ib.netEvent(bb), wb.onNetEvent(bb)
        },
        setLocalOptions: wb => {
          dg(bb, {
            changes: wb,
            reset: !1
          })
        },
        playSound: (bb, Mb, eb, Hb, pb, Vb, gb) => wb.audio.playGame(bb, Mb, eb, Hb, pb, Vb, gb),
        preloadSounds: bb => {
          wb.audio.preload(function(bb) {
            const wb = [];
            for (const Mb of bb) {
              const bb = Ww(Mb);
              if (null !== bb)
                for (let Mb = bb[0]; Mb < bb[0] + bb[1]; Mb++) wb.push(Mb)
            }
            return wb
          }(bb))
        },
        onSessionEnd: () => {
          hL(Hb.m), hL(sH), hL((() => {
            eb.c.set({
              openInGameMenuName: null
            })
          })), hL((() => {
            wb.audio.endSession()
          }))
        },
        beforeWrite: wb.beforeWrite,
        beforeOp: wb.beforeOp,
        cameraScreen: BH,
        showCameraFacing: mH,
        reportCameraFault: wb.reportCameraFault,
        onEventOverflow: wb.onEventOverflow,
        screenBandY: gb.j,
        replayEntities: Ib.entityHooks,
        hasPackModel: wb.hasPackModel
      });
      return Ob.attach(bb), mL.set(Ob, Ib), eH(Ob.items, wb.audio),
        function(bb) {
          bb.setClientFreeCameraGrant("isDev", !1);
          const wb = wb => {
            bb.setClientFreeCameraGrant("hasDeveloperRank", wb.playerHasRank("developer"))
          };
          (0, Vb.o)("userContextUpdated", wb)
        }(Ob), sL || (sL = !0, (0, Vb.o)("appManagerUpdated|openInGameMenuName", (bb => {
          !bb && (0, Lb.u)().includes(Lb.e) && (0, Lb.w)(Lb.e)
        }))), Ob
    }

    function XL(bb) {
      try {
        bb.closeGame()
      } finally {
        var wb;
        null === (wb = mL.get(bb)) || void 0 === wb || wb.stop(), mL.delete(bb)
      }
    }
  },
  42567: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Xb,
      e: () => Ub,
      g: () => mb,
      j: () => zb,
      m: () => hb,
      o: () => xb
    });
    var eb = Mb(205),
      Hb = Mb(26),
      pb = Mb(29),
      Vb = Mb(4139),
      gb = Mb(1391),
      lb = Mb(35270),
      Lb = Mb(332),
      Ib = Mb(110),
      Ob = Mb(200);

    function Ub() {
      var bb;
      const wb = (0, Vb.J)(),
        Mb = function(bb, wb) {
          return {
            sampleCount: bb.antiAliasing ? 4 : 1,
            n: (0, Vb.x)(bb.pixelScale, wb),
            pixelated: (0, Vb.t)(bb.pixelSmoothing)
          }
        }(Hb.c.get("clientEscMenuOptions"), wb);
      return Mb.sampleCount > 1 && (0, lb.c)() && (Mb.sampleCount = 1), Mb.n = null !== (bb = (0, lb.n)()) && void 0 !== bb ? bb : Mb.n, eb.i.includes((0, Ib.getSoftwareRenderer)()) && (Mb.sampleCount = 1, Mb.n = Math.max(Mb.n, (0, Vb.x)(Ob.r.pixelScale, wb))), Mb
    }
    let tb = null,
      Cb = null;
    const Eb = new Set;
    let Fb = null;

    function Bb() {
      for (const bb of Eb) bb()
    }

    function sb() {
      if (null === tb) {
        const bb = document.createElement("div");
        bb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", bb.setAttribute("aria-hidden", "true"), document.body.append(bb), Cb = bb, tb = new Vb.b(bb, Bb)
      }
      return tb
    }

    function mb(bb) {
      const wb = (0, Vb.k)(),
        [Mb, eb] = sb().size(wb);
      return (0, Vb.f)(Mb, eb, wb, bb.n)
    }

    function hb(bb) {
      var wb, Mb, eb, Hb;
      const pb = (0, Vb.k)(),
        [lb, Lb] = sb().size(pb);
      if (lb <= 0 || Lb <= 0) return null;
      const Ib = (0, Vb.f)(lb, Lb, pb, Ub().n);
      return (0, Vb.d)(bb, Ib), bb.style.left = `${null!==(wb=null===(Mb=Fb)||void 0===Mb?void 0:Mb.rect.left)&&void 0!==wb?wb:0}px`, bb.style.top = `${null!==(eb=null===(Hb=Fb)||void 0===Hb?void 0:Hb.rect.top)&&void 0!==eb?eb:0}px`, (0, gb.V)(bb.style, Fb), Ib
    }

    function zb(bb) {
      Fb = bb, sb(), (0, gb.M)(Cb.style, bb, ""), Bb()
    }

    function Xb(bb, wb) {
      bb.style.imageRendering = (0, Vb.L)(wb.pixelated)
    }

    function xb(bb, wb) {
      const Mb = (0, pb.o)("appManagerUpdated|clientEscMenuOptions", (() => {
          Xb(bb, Ub()), wb()
        })),
        eb = (0, lb.z)(wb),
        Hb = (0, Lb.r)(wb);
      return sb(), Eb.add(wb), () => {
        Mb(), eb(), Hb(), Eb.delete(wb)
      }
    }
  },
  42633: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      g: () => Eb,
      j: () => lb,
      l: () => hb,
      o: () => mb,
      p: () => zb
    });
    var eb = Mb(2471);
    const Hb = 8388608,
      pb = 1e3,
      Vb = 3e4;
    class gb extends Error {
      constructor(bb, wb, Mb) {
        super(`${"fetch"===bb?"fetching":"decoding"} ${wb} failed`, Mb), this.stage = bb, this.source = wb, this.name = "ShellImageError"
      }
    }
    async function lb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.C,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return Ib(await Lb(bb, wb), "string" === typeof bb ? bb : null, Mb)
    }
    async function Lb(bb, wb) {
      if ("string" !== typeof bb) return bb;
      try {
        return await wb(bb)
      } catch (Mb) {
        throw new gb("fetch", bb, {
          cause: Mb
        })
      }
    }
    async function Ib(bb, wb, Mb) {
      try {
        const wb = new Blob([bb.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(wb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Mb
        })
      } catch (eb) {
        throw new gb("decode", null !== wb && void 0 !== wb ? wb : `${bb.byteLength} bytes`, {
          cause: eb
        })
      }
    }
    let Ob = null;
    const Ub = new Map;
    let tb = 1;
    const Cb = new Map;

    function Eb(bb) {
      var wb;
      if (Ob = bb, null !== bb) {
        null === (wb = bb.Mpb) || void 0 === wb || wb.call(bb, sb);
        for (const [wb, Mb] of Ub) Fb(bb, wb, Mb);
        Ub.clear()
      }
    }

    function Fb(bb, wb, Mb) {
      Cb.has(wb) && void 0 !== bb.wpb ? bb.wpb(wb, Mb) : bb.kHb(wb, Mb)
    }

    function Bb(bb, wb) {
      Ob ? Fb(Ob, bb, wb) : Ub.set(bb, wb)
    }

    function sb(bb) {
      const wb = Cb.get(bb);
      void 0 === wb || wb.decoding || (wb.decoding = !0, Ib(wb.bytes, wb.url, wb.orientation).then((Mb => {
        wb.decoding = !1, Cb.get(bb) === wb ? (wb.failures = 0, Bb(bb, Mb)) : Mb.close()
      }), (Mb => {
        wb.decoding = !1, wb.failures++, 1 === wb.failures && console.warn(`shellImages: decoding image ${bb} again failed; trying again until it decodes`, Mb), setTimeout((() => {
          sb(bb)
        }), Math.min(pb * 2 ** (wb.failures - 1), Vb))
      })))
    }

    function mb(bb) {
      const wb = tb++;
      return Bb(wb, bb), wb
    }
    async function hb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.C,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        pb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Vb = "string" === typeof bb ? bb : null,
        gb = await Lb(bb, wb),
        lb = await Ib(gb, Vb, Mb),
        {
          width: Ob,
          height: Ub
        } = lb,
        Eb = tb++;
      return pb && Ob * Ub * 4 >= Hb && Cb.set(Eb, {
        bytes: gb.slice(),
        url: Vb,
        orientation: Mb,
        decoding: !1,
        failures: 0
      }), Bb(Eb, lb), {
        id: Eb,
        width: Ob,
        height: Ub
      }
    }

    function zb(bb) {
      var wb;
      Cb.delete(bb);
      const Mb = Ub.get(bb);
      if (Mb) return Mb.close(), void Ub.delete(bb);
      null === (wb = Ob) || void 0 === wb || wb.bpb(bb)
    }
  },
  37406: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      g: () => Lb,
      h: () => Vb,
      j: () => Ob
    });
    var eb = Mb(37398),
      Hb = Mb(13);
    const pb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Vb(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const wb = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof wb && pb.test(wb)
    }

    function gb(bb, wb, Mb) {
      var Hb;
      const Vb = bb instanceof Error ? bb.name : "thrown",
        gb = (bb instanceof Error && null !== (Hb = bb.stack) && void 0 !== Hb ? Hb : "").split("\n").filter((bb => pb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        lb = null === wb ? "wasm memory unknown" : `wasm memory ${Math.round(wb/2**20)} MB`,
        Lb = null === Mb.panic ? "" : `, panic: ${(0,eb.h)(Mb.panic)}`,
        Ib = `${Vb}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,eb.o)(Mb.kind,Mb.refusedBytes)} ${Ib} (${lb})${Lb}${gb.length>0?` | ${gb.join(" < ")}`:""}`
    }
    const lb = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Lb(bb) {
      var wb;
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(bb instanceof Error) || !lb.test(bb.message)) return {};
      if (!("detached" in Mb)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Hb.T)(null === (wb = (0, Hb.J)(Mb, "detached")) || void 0 === wb ? void 0 : wb.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Ib = 500;

    function Ob(bb) {
      let wb = "[object Object]";
      try {
        wb = String(bb)
      } catch {}
      if ("[object Object]" !== wb) return wb;
      try {
        var Mb, eb;
        return null !== (Mb = null === (eb = JSON.stringify(bb)) || void 0 === eb ? void 0 : eb.slice(0, Ib)) && void 0 !== Mb ? Mb : wb
      } catch {
        return wb
      }
    }
  },
  54825: (bb, wb, Mb) => {
    var eb = {
      "./bedwars/bedwarsClient": [40628, 9],
      "./bridgeBattle/bridgeBattleClient": [40635, 10],
      "./buildAFactory2/buildAFactory2Client": [39707, 89, 86, 87, 258, 275, 11],
      "./classic/classicClient": [40640, 12],
      "./classic/smp2/smp2Client": [40645, 13],
      "./clutch/clutchClient": [40664, 14],
      "./containmentBreach/containmentBreachClient": [40672, 15],
      "./cooking/cookingClient": [40811, 16],
      "./defusal/defusalClient": [40813, 17],
      "./frontline/frontlineClient": [40819, 89, 86, 87, 18],
      "./goalRush/goalRushClient": [40844, 19],
      "./greenville/greenvilleClient": [40848, 181, 226, 20],
      "./hideseek/hideseekClient": [40889, 21],
      "./luckyBedwars/luckyBedwarsClient": [40897, 22],
      "./murderMystery/murderMysteryClient": [40906, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40914, 24],
      "./oneBlock/oneBlockClient": [40919, 25],
      "./plots/plotsClient": [40935, 26],
      "./pvpCiv/pvpCivClient": [41001, 27],
      "./secretSanta/secretSantaClient": [41004, 28],
      "./shooting/shootingClient": [41009, 282, 29],
      "./skyIslands/skyIslandsClient": [41011, 30],
      "./skyblock/skyblockClient": [39763, 89, 267, 258, 181, 249, 31],
      "./tsunami/tsunamiClient": [41019, 32]
    };

    function Hb(bb) {
      if (!Mb.o(eb, bb)) return Promise.resolve().then((() => {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }));
      var wb = eb[bb],
        Hb = wb[0];
      return Promise.all(wb.slice(1).map(Mb.e)).then((() => Mb(Hb)))
    }
    Hb.keys = () => Object.keys(eb), Hb.id = 54825, bb.exports = Hb
  },
  37398: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      d: () => pb,
      h: () => lb,
      k: () => Vb,
      o: () => Hb
    });
    const eb = /^alloc_failed (\d+) bytes$/;

    function Hb(bb, wb) {
      return pb(bb, wb) ? `trap=alloc_failed ${wb} bytes` : `trap=${bb}`
    }

    function pb(bb, wb) {
      return "unreachable" === bb && wb > 0
    }

    function Vb(bb, wb, Mb) {
      const eb = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== eb) return {
        kind: eb,
        panic: null,
        refusedBytes: 0
      };
      const Hb = wb(),
        pb = Mb();
      return {
        kind: eb,
        panic: pb > 0 ? null : Hb,
        refusedBytes: pb
      }
    }
    const gb = 300;

    function lb(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, gb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);