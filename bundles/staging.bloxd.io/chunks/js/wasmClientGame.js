export const id = 53;
export const ids = [53];
export const modules = {
  38296: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      e: () => Mb
    });
    var Ab = Ub(22);

    function Mb(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function Tb(bb, ab) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([Ub.e(105), Ub.e(106), Ub.e(101), Ub.e(103), Ub.e(210)]).then((() => Ub(40856))).then((Ub => {
        let {
          runClientGameMessage: Ab
        } = Ub;
        Ab(bb, ab)
      })).catch((ab => {
        console.error(`Game message ${bb} failed`, ab)
      })) : Ab.m.IR("showPetUi", ab) : Ab.m.IR("refetchCode")
    }
  },
  41671: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      c: () => Mb
    });
    const Ab = ["recording", "freecam", "keyframe"];

    function Mb() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  39929: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    const Ab = 1 << 20,
      Mb = 1 << 21,
      Tb = 1024,
      Eb = 2048;

    function Yb(bb, ab, Ub) {
      const Yb = bb + Ab,
        Bb = ab + Tb,
        eb = Ub + Ab;
      return Yb < 0 || Yb >= Mb || eb < 0 || eb >= Mb || Bb < 0 || Bb >= Eb ? -1 : (Yb * Mb + eb) * Eb + Bb
    }
  },
  39921: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab,
      e: () => Eb,
      i: () => Mb,
      k: () => Tb,
      l: () => vb,
      p: () => eb,
      t: () => Bb,
      w: () => Yb
    });
    Ub(3138);
    Ub(39929);

    function Ab(bb) {}

    function Mb(bb) {}

    function Tb(bb) {}

    function Eb(bb) {}

    function Yb(bb) {}

    function Bb(bb, ab, Ub) {}

    function eb(bb) {}

    function vb(bb) {}
  },
  8820: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      e: () => Bb
    });
    var Ab = Ub(19);
    const Mb = 24,
      Tb = "farNametags",
      Eb = 1e5;

    function Yb() {
      var bb;
      return null === (bb = Ab.c.get("showDistantNametags")) || void 0 === bb || bb
    }

    function Bb() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(Tb),
          ab = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(ab) && ab >= 0 ? Math.min(ab, Eb) : null
      }()) && void 0 !== bb ? bb : Yb() ? 0 : Mb
    }
  },
  41666: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      blockIdOf: () => dB.e,
      clearWasmCameraScreen: () => JA,
      creativeItemIds: () => bA.creativeItemIds,
      decodeMapSettings: () => GB,
      drainTextRerasters: () => HY.d,
      enchantmentPerksOf: () => bA.enchantmentPerksOf,
      endGameHost: () => sB,
      followCursorAim: () => hB,
      followMenuPrefs: () => CM,
      loadAudio: () => KB,
      loadClientGame: () => rB,
      loadTextIcons: () => HY.g,
      rasterText: () => WY.d,
      readBoardToEdit: () => IB,
      setTextHost: () => HY.l,
      setTextLocalPlayer: () => HY.n,
      showInCreativeInvenOf: () => bA.showInCreativeInvenOf,
      startGameHost: () => wB,
      startShellAnalytics: () => NB,
      startSkyFeed: () => cY,
      textChanged: () => HY.s,
      warmText: () => WY.g,
      wasmCameraScreen: () => cA
    });
    Ub(35946);
    var Ab = Ub(19),
      Mb = Ub(36137),
      Tb = Ub(38439),
      Eb = Ub(22),
      Yb = Ub(3079),
      Bb = Ub(36133),
      eb = Ub(1216),
      vb = Ub(580),
      Lb = Ub(37562),
      Pb = Ub(4479),
      Xb = Ub(39764),
      jb = Ub(39701);
    const Rb = jb.Hb / 4,
      kb = jb.q.PlaySound,
      yb = jb.q.SoundReset,
      Zb = Pb.V.ReplayFailed,
      Db = Pb.V.RecorderEvent;
    class zb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = bb, this.memory = ab, this.audio = Ub, this.serverIds = new Int32Array(256).fill(jb.Tc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(jb.t.BYTES)), this.renderPtr = 0, this.PL = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new jb.T(bb, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.sAb(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(bb, ab) {
        const Ub = this.eventView();
        return new Uint8Array(Ub.buffer, Ub.byteOffset + bb, ab)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return jb.t.localId(this.apiView, 0)
      }
      localDeaths() {
        return jb.t.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const bb = this.apiView,
          ab = jb.t.entRenderPtr(bb, 0),
          Ub = jb.t.entVisPtr(bb, 0),
          Ab = jb.t.entCapacity(bb, 0);
        if (ab !== this.renderPtr || Ub !== this.visPtr || Ab !== this.PL || this.renderBuffer !== this.buffer) {
          this.renderPtr = ab, this.visPtr = Ub, this.PL = Ab, this.renderBuffer = this.buffer;
          const bb = this.memoryView(Float32Array, ab, Ab * Rb, "the render array"),
            Mb = this.memoryView(Uint8Array, Ub, Ab, "the visibility array");
          this.renderCapacity = bb && Mb ? Ab : 0, this.render = bb && Mb ? bb : new Float32Array(0), this.vis = bb && Mb ? Mb : new Uint8Array(0)
        }
      }
      memoryView(bb, ab, Ub, Ab) {
        try {
          return (0, Xb.p)(bb, this.memory().buffer, ab, Ub, Ab)
        } catch (Mb) {
          return this.keepCorruption(Mb), null
        }
      }
      memoryData(bb, ab, Ub, Ab) {
        try {
          return (0, Xb.f)(this.memory().buffer, bb, ab, Ub, Ab)
        } catch (Mb) {
          return this.keepCorruption(Mb), null
        }
      }
      reportCorruption(bb) {
        this.keepCorruption(new Xb.e(bb))
      }
      keepCorruption(bb) {
        if (!(bb instanceof Xb.e)) throw bb;
        this.corruption ??= bb
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(bb, ab, Ub) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Ab,
          len: Mb
        } = bb;
        this.eventsPtr = Ab, this.eventsLen = Mb, this.eventsBuffer = null;
        const Tb = this.eventView();
        for (let eb = 0; eb < Mb;) {
          const bb = Tb.getUint32(eb, !0),
            Ub = 65535 & bb,
            Ab = bb >>> 16,
            Mb = eb + Pb.R;
          if (Ub === jb.q.EntitySpawned) {
            var Eb;
            if (Ab !== jb.Lb.BYTES) throw pb(Ub, eb, Ab);
            const bb = jb.Lb.serverId(Tb, Mb);
            this.spawned(bb, jb.Lb.index(Tb, Mb), jb.Lb.kind(Tb, Mb)), null === (Eb = ab.entityAdded) || void 0 === Eb || Eb.call(ab, bb)
          } else if ((Ub === jb.q.ChunkSlot || Ub === jb.q.EntityInfoChanged) && !(0, jb.je)(Ub, Tb, Mb, Ab, ab)) throw pb(Ub, eb, Ab);
          eb = Mb + (0, Pb.ae)(Ab)
        }
        try {
          var Yb;
          null === (Yb = ab.afterPrescan) || void 0 === Yb || Yb.call(ab), this.throwCorruption(), !Ub() && this.dispatch(bb, ab, Ub) && (this.throwCorruption(), this.applyListener(), ab.afterWalk(bb.kind)), this.throwCorruption()
        } catch (Bb) {
          throw Bb instanceof Xb.e && (this.corruption ??= Bb), Bb
        } finally {
          Ub() || null !== this.corruption || this.applyDespawns(Mb, ab)
        }
      }
      applyDespawns(bb, ab) {
        const Ub = this.eventView();
        for (let Mb = 0; Mb < bb;) {
          const bb = Ub.getUint32(Mb, !0),
            Tb = Mb + Pb.R;
          if ((65535 & bb) === jb.q.EntityDespawned && bb >>> 16 === jb.Lb.BYTES) {
            const bb = jb.Lb.serverId(Ub, Tb);
            var Ab;
            if (this.despawned(bb, jb.Lb.index(Ub, Tb))) null === (Ab = ab.entityRemoved) || void 0 === Ab || Ab.call(ab, bb)
          }
          Mb = Tb + (0, Pb.ae)(bb >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(bb, ab, Ub) {
        const {
          len: Ab,
          net: Mb,
          netOffsets: Tb
        } = bb;
        let Eb = this.eventView(),
          Yb = 0;
        for (let ib = 0; ib < Ab;) {
          const bb = Eb.getUint32(ib, !0),
            Ab = 65535 & bb,
            fb = bb >>> 16,
            Nb = ib + Pb.R;
          let Wb = !1;
          if (Yb < Mb.length && Tb[Yb] === ib) ab.netEvent(Mb[Yb]), Yb++, Wb = !0;
          else if (Ab === Pb.V.LocalPlayerBound) {
            var Bb;
            if (fb !== Pb.xb) throw pb(Ab, ib, fb);
            null === (Bb = ab.localPlayerBound) || void 0 === Bb || Bb.call(ab, Eb.getInt32(Nb, !0)), Wb = !0
          } else if (Ab === Pb.V.LocalHurt) {
            var eb;
            if (fb !== Pb.wb) throw pb(Ab, ib, fb);
            null === (eb = ab.localHurt) || void 0 === eb || eb.call(ab, Eb.getInt32(Nb, !0), Eb.getFloat32(Nb + 4, !0), Eb.getUint32(Nb + 8, !0)), Wb = !0
          } else if (Ab === Pb.V.AttackHit) {
            var vb;
            if (fb !== Pb.c) throw pb(Ab, ib, fb);
            const bb = Eb.getFloat32(Nb, !0),
              Ub = Eb.getFloat32(Nb + 4, !0),
              Mb = Eb.getFloat32(Nb + 8, !0),
              Tb = Eb.getUint32(Nb + 12, !0);
            null === (vb = ab.attackHit) || void 0 === vb || vb.call(ab, bb, Ub, Mb, 0 !== (Tb & Pb.j.Crit), 0 !== (Tb & Pb.j.HitSelf))
          } else if (Ab === Pb.V.PhysicsType) {
            var Lb;
            if (fb !== Pb.Tb) throw pb(Ab, ib, fb);
            null === (Lb = ab.physicsType) || void 0 === Lb || Lb.call(ab, Eb.getUint32(Nb, !0), Eb.getInt32(Nb + 4, !0)), Wb = !0
          } else if (Ab === Pb.V.VehicleEffect) {
            var Xb;
            const bb = mb(Eb, Nb, fb);
            if (null === bb) throw pb(Ab, ib, fb);
            null === (Xb = ab.vehicleEffect) || void 0 === Xb || Xb.call(ab, bb.op, bb.name, bb.icon, bb.level, bb.durationMs), Wb = !0
          } else if (Ab === Pb.V.ZoomChanged) {
            var Rb;
            if (fb !== Pb.Gd) throw pb(Ab, ib, fb);
            null === (Rb = ab.zoomChanged) || void 0 === Rb || Rb.call(ab, Eb.getFloat32(Nb, !0), Eb.getUint8(Nb + 4)), Wb = !0
          } else if (Ab === Pb.V.ZoomDisabled) {
            var zb;
            if (0 !== fb) throw pb(Ab, ib, fb);
            null === (zb = ab.zoomDisabled) || void 0 === zb || zb.call(ab), Wb = !0
          } else if (Ab === Pb.V.GameCamera) {
            var xb;
            null === (xb = ab.gameCamera) || void 0 === xb || xb.call(ab, new Uint8Array(Eb.buffer, Eb.byteOffset + Nb, fb).slice()), Wb = !0
          } else if (Ab === jb.q.ChunkSlot || Ab === jb.q.EntityInfoChanged);
          else if (Ab >= kb && Ab <= yb) {
            if (this.audio && !this.audio.onAudioEvent(Ab, Eb, Nb, fb)) throw pb(Ab, ib, fb)
          } else if (Ab >= Zb && Ab <= Db) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Ab, Eb, Nb, fb)) throw pb(Ab, ib, fb);
              Wb = !0
            }
          } else if (Ab >= jb.hd && Ab <= jb.jd && Ab !== Pb.V.EnvLighting) {
            if (!(0, jb.je)(Ab, Eb, Nb, fb, ab)) throw pb(Ab, ib, fb);
            Wb = !0
          }
          if (Wb) {
            if (Ub()) return !1;
            Eb = this.eventView()
          }
          ib = Nb + (0, Pb.ae)(fb)
        }
        return !Ub()
      }
      applyListener() {
        var bb;
        if (!this.audio) return;
        const ab = jb.t.audioViewPtr(this.apiView, 0),
          Ub = this.memory().buffer;
        let Ab = this.audioView;
        (null === (bb = Ab) || void 0 === bb ? void 0 : bb.buffer) === Ub && Ab.byteOffset === ab || (Ab = (0, Xb.f)(Ub, ab, jb.w.BYTES, 8, "the audio view"), this.audioView = Ab), Ab && this.audio.applyListener(Ab)
      }
      indexOf(bb) {
        return this.indexById.get("number" === typeof bb ? bb : +bb)
      }
      isLocal(bb) {
        return bb !== jb.Tc && bb === jb.t.localId(this.apiView, 0)
      }
      eZ(bb) {
        const ab = [0, 0, 0];
        return this.readPosition("number" === typeof bb ? bb : +bb, ab) ? ab : null
      }
      readPosition(bb, ab) {
        const Ub = this.apiView;
        if (void 0 !== this.indexById.get(bb) && this.isLocal(bb)) {
          for (let bb = 0; bb < 3; bb++) ab[bb] = jb.t.localPos(Ub, 0, bb);
          return !0
        }
        return this.readDrawnPosition(bb, ab)
      }
      readDrawnPosition(bb, ab) {
        const Ub = this.apiView,
          Ab = this.indexById.get(bb);
        if (void 0 === Ab || Ab >= this.renderCapacity) return ab[0] = ab[1] = ab[2] = NaN, !1;
        const Mb = Ab * Rb;
        for (let Tb = 0; Tb < 3; Tb++) ab[Tb] = this.render[Mb + Tb] + jb.t.origin(Ub, 0, Tb);
        return !0
      }
      checkValid(bb) {
        return void 0 !== this.indexOf(bb)
      }
      isAlive(bb) {
        const ab = this.indexOf(bb);
        if (void 0 === ab) return null;
        if (this.ensureViews(), ab >= this.renderCapacity) return null;
        const Ub = this.vis[ab];
        return 0 === Ub ? null : 0 !== (Ub & jb.ge.Alive)
      }
      getEntityType(bb) {
        const ab = this.indexOf(bb);
        return void 0 === ab ? this.isLocal("number" === typeof bb ? bb : +bb) ? "Player" : null : ib(this.kinds[ab])
      }
      spawned(bb, ab, Ub) {
        if (ab >= 1048576) throw new Xb.e(`entity ${bb} spawned at index ${ab}`);
        this.ensureIndex(ab), this.serverIds[ab] === bb && null !== this.idStr[ab] || (this.idStr[ab] = String(bb)), this.serverIds[ab] = bb, this.kinds[ab] = Ub, this.indexById.set(bb, ab)
      }
      despawned(bb, ab) {
        let Ub = !1;
        return this.indexById.get(bb) === ab && (this.indexById.delete(bb), Ub = !0), ab < this.serverIds.length && this.serverIds[ab] === bb && (this.serverIds[ab] = jb.Tc, this.kinds[ab] = 0, this.idStr[ab] = null), Ub
      }
      ensureIndex(bb) {
        const ab = this.serverIds.length;
        if (bb < ab) return;
        let Ub = 2 * ab;
        for (; Ub <= bb;) Ub *= 2;
        const Ab = new Int32Array(Ub).fill(jb.Tc);
        Ab.set(this.serverIds), this.serverIds = Ab;
        const Mb = new Uint16Array(Ub);
        Mb.set(this.kinds), this.kinds = Mb;
        for (let Tb = ab; Tb < Ub; Tb++) this.idStr.push(null)
      }
      eventView() {
        const bb = this.memory().buffer;
        return bb !== this.eventsBuffer && (this.eventsBuffer = bb, this.events = new DataView(bb, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const bb = this.memory().buffer;
        this.buffer = bb, this.viewPtr < 0 && (this.viewPtr = this.core.gAb()), this.view = new DataView(bb, this.viewPtr, jb.t.BYTES), this.rereadDirectory()
      }
    }

    function xb(bb) {
      return bb >>> jb.e === jb.r.Item
    }

    function ib(bb) {
      var ab, Ub;
      const Ab = bb & jb.h;
      switch (bb >>> jb.e) {
        case jb.r.Lifeform:
          return null !== (ab = vb.n[Ab]) && void 0 !== ab ? ab : null;
        case jb.r.Throwable:
          return null !== (Ub = Lb.f[Ab]) && void 0 !== Ub ? Ub : null;
        case jb.r.Mesh:
          return "Mesh";
        case jb.r.Audio:
          return "AudioEntity";
        case jb.r.Item:
          return "Item";
        default:
          return null
      }
    }
    const fb = new TextDecoder;

    function mb(bb, ab, Ub) {
      if (Ub < Pb.nd.HEAD_BYTES) return null;
      const Ab = bb.getUint32(ab, !0),
        Mb = bb.getUint32(ab + 20, !0),
        Tb = bb.getUint32(ab + 24, !0),
        Eb = Pb.nd.HEAD_BYTES + (0, Pb.ae)(Mb);
      if (Ab !== Pb.nd.UPDATE && Ab !== Pb.nd.REMOVE || Mb > Ub || Eb + Tb > Ub) return null;
      const Yb = (Ub, Ab) => fb.decode(new Uint8Array(bb.buffer, bb.byteOffset + ab + Ub, Ab)),
        Bb = bb.getFloat64(ab + 12, !0);
      return {
        op: Ab,
        level: bb.getFloat64(ab + 4, !0),
        durationMs: Number.isNaN(Bb) ? null : Bb,
        name: Yb(Pb.nd.HEAD_BYTES, Mb),
        icon: Yb(Eb, Tb)
      }
    }

    function pb(bb, ab, Ub) {
      return new Xb.e(`event ${bb} at ${ab} of ${Ub} bytes`)
    }
    var Nb = Ub(325),
      Wb = Ub(1162),
      Hb = Ub(38296),
      Ib = Ub(1840),
      db = Ub(39822),
      Fb = Ub(1786),
      hb = Ub(38456),
      Gb = Ub(38481),
      Qb = Ub(38467),
      qb = Ub(39751),
      ub = Ub(2260),
      rb = Ub(38454),
      Kb = Ub(38475);
    const ob = Math.max(jb.yb.BYTES, jb.pb.BYTES, jb.tb.BYTES);

    function lb(bb) {
      if (!(0, Kb.f)(bb)) return null;
      const ab = Number(bb);
      return (0 | ab) === ab ? ab : null
    }
    class tb {
      constructor(bb) {
        this.api = bb, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, rb.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.YT = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = jb.Tc, this.localName = String(jb.Tc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.YT = null;
        const bb = this.api.queries.directorView() >= jb.yb.BYTES ? this.scratchView() : null;
        null !== bb && (this.defaultFov = (0, Fb.x)(jb.yb.fov(bb, 0)), this.baseFov = (0, Fb.x)(jb.yb.baseFov(bb, 0)), this.aspect = jb.yb.aspect(bb, 0), this.bodyHeading = jb.yb.bodyHeading(bb, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(bb) {
        this.viewHeading = bb
      }
      get localPlayerId() {
        const bb = jb.t.localId(this.api.apiView, 0);
        return bb !== this.localId && (this.localId = bb, this.localName = String(bb)), this.localName
      }
      getEntityPosition(bb) {
        return this.readEntity(bb) ? this.entityFeet : null
      }
      getEntityAimPoint(bb) {
        return this.readEntity(bb) ? this.entityAim : null
      }
      getEntityHeading(bb) {
        const ab = lb(bb);
        if (null === ab) return null;
        const Ub = jb.t.localId(this.api.apiView, 0);
        return ab === Ub && Ub !== jb.Tc ? this.viewHeading : this.readEntity(bb) ? this.entityHeading : null
      }
      raycastTerrain(bb, ab, Ub) {
        const Ab = this.api.queries.cameraSweep(bb[0], bb[1], bb[2], ab[0], ab[1], ab[2], Ub);
        return Ab < Ub - 1e-6 ? Ab : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const bb = this.defaultPose;
        bb.fov = this.defaultFov;
        const ab = this.api.queries.directorDefaultPose() >= jb.pb.BYTES ? this.scratchView() : null;
        if (null === ab) return bb;
        for (let Ub = 0; Ub < 3; Ub++) bb.position[Ub] = jb.pb.eye(ab, 0, Ub);
        return bb.heading = jb.pb.heading(ab, 0), bb.pitch = jb.pb.pitch(ab, 0), bb
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
        const ab = lb(bb);
        if (null === ab) return !1;
        if (ab === this.YT) return this.entityLive;
        this.YT = ab;
        const Ub = this.api.queries.directorEntity(ab) >= jb.tb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== Ub, null === Ub) return !1;
        for (let Ab = 0; Ab < 3; Ab++) this.entityFeet[Ab] = jb.tb.feet(Ub, 0, Ab), this.entityAim[Ab] = this.entityFeet[Ab];
        return this.entityAim[1] += jb.tb.eyeHeight(Ub, 0), this.entityHeading = jb.tb.heading(Ub, 0), !0
      }
      scratchView() {
        const bb = this.api.scratch(),
          ab = this.api.memory().buffer,
          Ub = this.scratch;
        return null !== Ub && Ub.buffer === ab && Ub.byteOffset === bb ? Ub : (this.scratch = this.api.memoryData(bb, ob, 8, "the director's record"), this.scratch)
      }
    }
    const wb = {
        mode: "default"
      },
      sb = {
        show: () => {},
        clear: () => {}
      };

    function gb() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Cb {
      constructor(bb) {
        this.options = bb, this.lL = void 0, this.director = void 0, this.latest = wb, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          XN: 0,
          kN: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.ge = new Int32Array(3 * jb.Kd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * jb.Kd), this.lL = new tb(bb.api), this.director = new Qb.b(this.lL)
      }
      settingsChanged(bb) {
        let ab = wb;
        if (bb.length > 0) try {
          ab = (0, qb.c)(bb)
        } catch {}
        this.latest = ab, this.pending = ab
      }
      call(bb, ab, Ub, Ab, Mb, Tb) {
        var Eb, Yb;
        let Bb;
        this.holding = !1;
        try {
          Bb = this.answer(bb, ab, Ub, Ab, Mb, Tb)
        } catch (Pb) {
          var eb, vb;
          throw this.answeredPose = !1, null === (eb = (vb = this.options).showFacing) || void 0 === eb || eb.call(vb, null), Pb
        }
        const Lb = this.answeredPose && 0 === (Ab & jb.ub.Held);
        return this.answeredPose = Bb !== jb.lb.None, this.holding = this.answeredPose && !Lb, null === (Eb = (Yb = this.options).showFacing) || void 0 === Eb || Eb.call(Yb, this.holding ? this.facing : null), Bb
      }
      holdsView() {
        return this.holding
      }
      answer(bb, ab, Ub, Ab, Mb, Tb) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          lL: Eb
        } = this;
        Eb.readView();
        if (0 !== (Ab & jb.ub.Held) || Eb.setViewHeading((0, hb.t)(Eb.bodyHeading)), void 0 !== this.pending) {
          const bb = this.pending;
          this.pending = void 0, this.director.setSettings(bb), this.syncShownSettings()
        }
        this.readLook((0, ub.c)(ab), (0, ub.c)(Ub), Ab, (0, ub.c)(Mb), (0, ub.c)(Tb));
        const Yb = this.director.update(bb / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Yb) return jb.lb.None;
        const [Bb, eb, vb] = Yb.position;
        if (0 === this.options.api.queries.directorPose(Bb, eb, vb, (0, hb.t)(Yb.heading), (0, hb.h)(Yb.pitch), (0, Fb.i)(Yb.fov))) return jb.lb.None;
        if ("default" === this.director.getSettings().mode) return jb.lb.Pose;
        switch (this.facing) {
          case "camera":
            return jb.lb.FaceCamera;
          case "cursor":
            return jb.lb.FaceCursor;
          default:
            return jb.lb.FaceMovement
        }
      }
      afterFrame(bb) {
        bb ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = wb, this.idle()
      }
      restart() {
        const bb = this.holding;
        this.idle(), this.holding = bb
      }
      idle() {
        var bb, ab;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Qb.b(this.lL), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (bb = (ab = this.options).showFacing) || void 0 === bb || bb.call(ab, null), this.setCentres(0)
      }
      syncShownSettings() {
        const bb = this.director.getSettings();
        if (bb === this.shownSettings) return;
        this.shownSettings = bb;
        const ab = (0, Gb.g)(bb);
        this.facing = ab.facing, this.mouseTurns = ab.mouseTurns
      }
      readLook(bb, ab, Ub, Ab, Mb) {
        const Tb = this.look,
          Eb = 0 !== (Ub & jb.ub.LookPointed);
        if (null === this.mouseTurns && !Eb) return Tb.XN = 0, Tb.kN = 0, void(Tb.pointedAt = void 0);
        let Yb;
        Eb && (this.pointedAt.heading = Ab, this.pointedAt.pitch = Mb, Yb = this.pointedAt);
        const {
          lL: Bb
        } = this;
        Bb.setViewHeading((0, Gb.c)(Bb.getViewHeading(), bb, ab, Yb, "look" === this.mouseTurns, Tb))
      }
      writeCentres(bb) {
        const ab = this.next,
          Ub = Math.min(bb.length, jb.Kd);
        for (let Ab = 0; Ab < Ub; Ab++)
          for (let Ub = 0; Ub < 3; Ub++) ab[3 * Ab + Ub] = Math.floor(bb[Ab][Ub] / jb.z);
        this.setCentres(Ub)
      }
      setCentres(bb) {
        const {
          ge: ab,
          next: Ub
        } = this;
        let Ab = bb === this.centresLen;
        for (let Mb = 0; Ab && Mb < 3 * bb; Mb++) Ab = ab[Mb] === Ub[Mb];
        Ab || (ab.fill(0), ab.set(Ub.subarray(0, 3 * bb)), this.centresLen = bb, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const bb = this.options.cmd();
        null !== bb && (0, jb.zf)(bb, 0, this.ge, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var bb, ab, Ub;
        return null !== (bb = null === (ab = (Ub = this.options).screen) || void 0 === ab ? void 0 : ab.call(Ub)) && void 0 !== bb ? bb : sb
      }
      hidden() {
        var bb;
        return (null !== (bb = this.options.isPageHidden) && void 0 !== bb ? bb : gb)()
      }
      now() {
        var bb, ab, Ub;
        return null !== (bb = null === (ab = (Ub = this.options).now) || void 0 === ab ? void 0 : ab.call(Ub)) && void 0 !== bb ? bb : performance.now()
      }
    }
    var Vb = Ub(39929);
    const Ob = jb.z * jb.z * jb.z,
      cb = Math.log2(jb.z),
      Jb = jb.z - 1,
      nb = jb.N.BYTES / 4,
      Sb = new Uint16Array(Ob);

    function ba(bb, ab, Ub) {
      return bb * jb.z * jb.z + ab * jb.z + Ub
    }
    class aa {
      constructor(bb) {
        this.chunk = bb
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(bb, ab, Ub) {
        return ba(bb, ab, Ub)
      }
    }
    class Ua {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Aa {
      constructor(bb, ab, Ub, Ab) {
        this.table = bb, this.slot = ab, this.generation = Ub, this.epoch = Ab, this.RP = new aa(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Sb, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Nj() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get LX() {
        const bb = this.gameVoxels(),
          ab = this.layers ??= new Uint16Array(jb.z);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Ub = 0; 0 !== this.staleLayers; Ub++) {
          const Ab = 1 << Ub;
          0 !== (this.staleLayers & Ab) && (this.staleLayers &= ~Ab, ab[Ub] = Ma(bb, Ub))
        }
        return ab
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const bb = this.voxelData(),
          ab = this.writes;
        if (null === ab || 0 === ab.ids.size) return bb;
        if (ab.from !== bb) {
          const Ub = ab.patched ??= new Uint16Array(Ob);
          Ub.set(bb);
          for (const [bb, Ab] of ab.ids) Ub[bb] = Ab;
          ab.from = bb
        }
        return ab.patched
      }
      written(bb) {
        var ab;
        return null === (ab = this.writes) || void 0 === ab ? void 0 : ab.ids.get(bb)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(bb, ab, Ub) {
        const Ab = this.writes ??= new Ua;
        Ab.ids.set(bb, ab), Ub && Ab.cleared.add(bb), null !== Ab.from && (Ab.patched[bb] = ab);
        const Mb = 1 << (bb >> cb & Jb);
        Ab.layers |= Mb, this.staleLayers |= Mb, this.writeCount++
      }
      clearWrites() {
        const bb = this.writes;
        null !== bb && (this.staleLayers |= bb.layers, bb.ids.clear(), bb.cleared.clear(), bb.layers = 0, bb.from = null)
      }
      dataCleared(bb) {
        var ab;
        return !0 === (null === (ab = this.writes) || void 0 === ab ? void 0 : ab.cleared.has(bb))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const bb = this.table.slotWords(),
          ab = this.slot * nb;
        if (this.epoch !== this.table.epoch || ab + nb > bb.length || 0 === bb[ab + 3] || bb[ab + 2] !== this.generation) return this.data = Sb, this.dataPtr = 0, Sb;
        this.version = bb[ab + 1];
        const Ub = bb[ab + 0],
          Ab = bb.buffer;
        return Ub === this.dataPtr && Ab === this.dataBuffer || (this.dataPtr = Ub, this.dataBuffer = Ab, this.data = this.table.voxelsAt(Ab, Ub)), this.data
      }
    }

    function Ma(bb, ab) {
      const Ub = bb[ab * jb.z];
      for (let Ab = 0; Ab < jb.z; Ab++) {
        const Mb = ba(Ab, ab, 0);
        for (let ab = 0; ab < jb.z; ab++)
          if (bb[Mb + ab] !== Ub) return 65535
      }
      return Ub
    }
    const Ta = new Uint32Array(0);

    function Ea(bb, ab, Ub) {
      return ba(bb & Jb, ab & Jb, Ub & Jb)
    }
    class Ya {
      constructor(bb, ab) {
        this.memory = bb, this.apiView = ab, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Ta, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Ta, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(bb, ab, Ub, Ab, Mb, Tb) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Tb === jb.O.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Tb !== jb.O.Stored && Tb !== jb.O.Unloaded) throw new Xb.e(`ChunkSlot flags ${Tb}`);
        const Eb = (0, Vb.d)(bb, ab, Ub);
        if (Eb < 0) return;
        if (Tb === jb.O.Unloaded) return void this.chunks.delete(Eb);
        const Yb = this.chunks.get(Eb);
        (null === Yb || void 0 === Yb ? void 0 : Yb.slot) === Ab && Yb.generation === Mb || this.chunks.set(Eb, new Aa(this, Ab, Mb, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const bb = this.apiView(),
          ab = jb.t.chunkSlotsPtr(bb, 0),
          Ub = jb.t.chunkSlotsLen(bb, 0);
        ab === this.slotsPtr && Ub === this.slotsLen || (this.slotsPtr = ab, this.slotsLen = Ub, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const bb = this.apiView(),
          ab = jb.t.walkThroughPtr(bb, 0),
          Ub = jb.t.walkThroughLen(bb, 0);
        ab === this.walkPtr && Ub === this.walkLen || (this.walkPtr = ab, this.walkLen = Ub, this.walkBuffer = null, this.walkWords())
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
        var ab;
        bb !== this.slotsBuffer && (this.slotsBuffer = bb, this.slots = null !== (ab = (0, Xb.p)(Uint32Array, bb, this.slotsPtr, this.slotsLen * nb, "the chunk directory")) && void 0 !== ab ? ab : Ta);
        return this.slots
      }
      voxelsAt(bb, ab) {
        try {
          var Ub;
          return null !== (Ub = (0, Xb.p)(Uint16Array, bb, ab, Ob, "a chunk's voxels")) && void 0 !== Ub ? Ub : Sb
        } catch (Ab) {
          if (!(Ab instanceof Xb.e)) throw Ab;
          return this.corruption ??= Ab, Sb
        }
      }
      chunk(bb, ab, Ub) {
        var Ab;
        return null !== (Ab = this.chunks.get((0, Vb.d)(bb, ab, Ub))) && void 0 !== Ab ? Ab : null
      }
      isLoaded(bb, ab, Ub) {
        return void 0 !== this.chunkAt(Math.floor(bb), Math.floor(ab), Math.floor(Ub))
      }
      Av(bb, ab, Ub) {
        var Ab;
        const Mb = Math.floor(bb),
          Tb = Math.floor(ab),
          Eb = Math.floor(Ub),
          Yb = this.chunkAt(Mb, Tb, Eb);
        if (!Yb) return 0;
        const Bb = Ea(Mb, Tb, Eb);
        return null !== (Ab = Yb.written(Bb)) && void 0 !== Ab ? Ab : Yb.voxelData()[Bb]
      }
      setOverlay(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Tb = this.chunkAt(bb, ab, Ub);
        return !!Tb && (Tb.hasWrites() || this.written.push(Tb), Tb.write(Ea(bb, ab, Ub), Ab, Mb), !0)
      }
      version(bb, ab, Ub) {
        var Ab, Mb;
        return null !== (Ab = null === (Mb = this.chunks.get((0, Vb.d)(bb, ab, Ub))) || void 0 === Mb ? void 0 : Mb.Nj) && void 0 !== Ab ? Ab : null
      }
      scan(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        const Bb = jb.z;
        let eb = 0;
        for (let vb = Math.floor(ab / Bb); vb * Bb < Mb; vb++) {
          const Lb = vb * Bb,
            Pb = Math.min(Mb - Lb, Bb);
          for (let Mb = Math.floor(bb / Bb); Mb * Bb < Ab; Mb++) {
            const Xb = Mb * Bb,
              jb = Math.min(Ab - Xb, Bb);
            for (let Ab = Math.floor(Ub / Bb); Ab * Bb < Tb; Ab++) {
              const Rb = this.chunks.get((0, Vb.d)(Mb, vb, Ab));
              if (!Rb) continue;
              const kb = Ab * Bb,
                yb = Math.max(Ub - kb, 0),
                Zb = Math.min(Tb - kb, Bb),
                Db = Rb.LX,
                zb = Rb.gameVoxels();
              for (let Ub = Math.max(ab - Lb, 0); Ub < Pb; Ub++) {
                const ab = Db[Ub];
                if (65535 === ab || 0 !== Eb[ab]) {
                  eb++;
                  for (let ab = Math.max(bb - Xb, 0); ab < jb; ab++) {
                    const bb = ba(ab, Ub, 0);
                    for (let Ab = yb; Ab < Zb; Ab++) {
                      const Mb = zb[bb + Ab];
                      0 !== Eb[Mb] && Yb.push(Xb + ab, Lb + Ub, kb + Ab, Mb)
                    }
                  }
                }
              }
            }
          }
        }
        return eb
      }
      dataCleared(bb, ab, Ub) {
        var Ab;
        const Mb = Math.floor(bb),
          Tb = Math.floor(ab),
          Eb = Math.floor(Ub);
        return !0 === (null === (Ab = this.chunkAt(Mb, Tb, Eb)) || void 0 === Ab ? void 0 : Ab.dataCleared(Ea(Mb, Tb, Eb)))
      }
      isWalkThrough(bb) {
        if (!Number.isInteger(bb) || bb < 0 || bb > 65535) return !1;
        const ab = this.walkWords(),
          Ub = bb >>> 5;
        return Ub < ab.length && 1 === (ab[Ub] >>> (31 & bb) & 1)
      }
      walkWords() {
        const bb = this.memory().buffer;
        var ab;
        bb !== this.walkBuffer && (this.walkBuffer = bb, this.walk = null !== (ab = (0, Xb.p)(Uint32Array, bb, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ab ? ab : Ta);
        return this.walk
      }
      chunkAt(bb, ab, Ub) {
        if ((0 | bb) !== bb || (0 | ab) !== ab || (0 | Ub) !== Ub) return;
        const Ab = (0, Vb.d)(bb >> cb, ab >> cb, Ub >> cb);
        return Ab !== this.lastKey && (this.lastKey = Ab, this.lastChunk = this.chunks.get(Ab)), this.lastChunk
      }
    }
    var Ba = Ub(37837),
      ea = Ub(37155),
      va = Ub(36122),
      La = Ub(36034),
      Pa = Ub(8836),
      Xa = Ub(38401),
      ja = Ub(205);
    const Ra = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      ka = [
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
      ya = ka.map((bb => {
        let [ab] = bb;
        return ab
      })),
      Za = Uint8Array.from(ka, (bb => {
        let [, ab] = bb;
        return ab
      })),
      Da = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      za = 8;
    var xa = Ub(36117),
      ia = Ub(263);
    const fa = 2 ** Ra.length - 1;
    class ma {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ia.b;
        this.sheet = bb, this.onError = ab, this.idle = Ub, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = bb => {
          this.cancelIdle = null;
          try {
            if (bb.timeRemaining() >= 1) {
              let bb = this.queue.shift();
              for (; void 0 !== bb && !this.load(bb);) bb = this.queue.shift()
            }
          } catch (ab) {
            this.onError(ab)
          } finally {
            this.schedule()
          }
        }
      }
      preload(bb) {
        const ab = bb & fa & ~this.asked;
        if (0 !== ab) {
          this.asked |= ab;
          for (let bb = 0; bb < Ra.length; bb++) ab & 1 << bb && this.queue.push(bb);
          this.schedule()
        }
      }
      cancel() {
        var bb;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (bb = this.cancelIdle) || void 0 === bb || bb.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(bb) {
        const ab = this.sheet(bb, !1),
          Ub = this.sheet(bb, !0),
          [Ab, Mb] = "unloaded" === ab.state() && "unloaded" !== Ub.state() ? [Ub, ab] : [ab, Ub],
          Tb = this.gen,
          Eb = () => {
            try {
              Tb === this.gen && "unloaded" === Mb.state() && Mb.load()
            } catch (bb) {
              this.onError(bb)
            }
          },
          Yb = Ab.state();
        return "unloaded" === Yb ? (Ab.once("load", Eb), Ab.load(), !0) : "unloaded" === Mb.state() && ("loading" === Yb ? (Ab.once("load", Eb), !1) : (Mb.load(), !0))
      }
    }
    var pa = Ub(40024);
    const Na = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Wa = ja.c.Py * ja.c.playerEyeToHeightRatio,
      Ha = [0, 0, -1, 0, 1, 0],
      Ia = Ra.indexOf("note");

    function da(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }

    function Fa(bb) {
      var ab;
      let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Ab = function(bb) {
        let ab = 0,
          Ub = ya.length;
        for (; ab < Ub;) {
          const Ab = ab + Ub >>> 1;
          ya[Ab] < bb ? ab = Ab + 1 : Ub = Ab
        }
        return ab
      }(bb);
      if ("" === bb || null === (ab = ya[Ab]) || void 0 === ab || !ab.startsWith(bb)) return -1;
      if (ya[Ab] === bb) return Ab;
      let Mb = Ab + 1;
      for (; Mb < ya.length && ya[Mb].startsWith(bb);) Mb++;
      return Ab + Math.floor(Ub() * (Mb - Ab))
    }
    class ha {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.group = bb, this.loudness = ab, this.startMs = Ub, this.howl = Ab, this.host = Mb, this.id = 0, this.direct = !1
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
    class Ga {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = bb, this.listener = ab, this.now = Ub, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new xa.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: bb => this.aliveVoice(bb),
          started: bb => this.started.has(bb),
          drop: bb => {
            var ab;
            null === (ab = this.live.get(bb)) || void 0 === ab || ab.howl.stop(bb), this.forget(bb)
          }
        }, this.handlers = {
          playSound: (bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) => {
            if (Ab >= ya.length) return;
            const eb = 0 !== (Mb & jb.Zd.Loop);
            Mb & jb.Zd.TwoD ? this.start(Ab, !1, Eb, Tb, Yb, eb) : this.startSpatial(Ab, Eb, Tb, Yb, eb, bb, ab, Ub, Bb, this.earDistSq(bb, ab, Ub))
          },
          soundPos: (bb, ab, Ub, Ab) => {
            const Mb = this.core.get(Ab);
            var Tb;
            void 0 !== Mb && (null === (Tb = this.live.get(Mb)) || void 0 === Tb || Tb.howl.pos(Ub, ab, bb, Mb))
          },
          soundSet: (bb, ab, Ub, Ab) => {
            const Mb = this.core.get(bb),
              Tb = void 0 === Mb ? void 0 : this.live.get(Mb);
            void 0 !== Mb && Tb && (this.setRel(Mb, ab), Tb.rate = Ub, Tb.howl.rate(Ub, Mb), Tb.spatial && Tb.howl.pannerAttr({
              refDistance: Ab
            }, Mb))
          },
          soundFade: (bb, ab, Ub, Ab) => {
            const Mb = this.core.get(bb);
            void 0 !== Mb && this.fade(Mb, ab, Ub, 0 !== (Ab & jb.Xd.StopAfter))
          },
          soundStop: bb => {
            const ab = this.core.get(bb);
            var Ub;
            void 0 !== ab && (null === (Ub = this.live.get(ab)) || void 0 === Ub || Ub.howl.stop(ab), this.forget(ab))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new ma(((bb, ab) => this.sheet(bb, ab)), (bb => {
          this.errors++, console.error("Audio preload failed", bb)
        }), Ab)
      }
      prepare() {
        for (let bb = 0; bb < Ra.length; bb++) this.sheet(bb, !1), this.sheet(bb, !0)
      }
      preload(bb) {
        this.loader.preload(bb)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(bb, ab, Ub, Ab) {
        if (bb < jb.q.PlaySound || bb > jb.q.SoundReset) return !1;
        try {
          return (0, jb.je)(bb, ab, Ub, Ab, this.handlers)
        } catch (Mb) {
          return this.errors++, console.error("Audio event failed", Mb), !0
        }
      }
      applyListener(bb) {
        const ab = this.nextPose;
        for (let Ab = 0; Ab < 3; Ab++) ab[2 - Ab] = jb.w.listener(bb, 0, Ab), ab[5 - Ab] = jb.w.forward(bb, 0, Ab), ab[8 - Ab] = jb.w.up(bb, 0, Ab);
        0 === ab[3] && 0 === ab[4] && 0 === ab[5] && ab.set(this.posed ? this.pose.subarray(3) : Ha, 3);
        for (let Ab = 0; Ab < 9; Ab++)
          if (!Number.isFinite(ab[Ab])) return;
        const Ub = this.pose;
        if (this.posed) {
          let bb = !0;
          for (let Ab = 0; Ab < 9 && bb; Ab++) bb = ab[Ab] === Ub[Ab];
          if (bb) return
        }
        this.listener.apply(ab) && (Ub.set(ab), this.posed = !0)
      }
      playGame(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = Fa(bb);
        if (Yb < 0) return pa.b;
        if (!Ub) {
          const {
            howl: bb,
            id: Ub
          } = this.start(Yb, !1, ab, 0, 1, Eb);
          return this.gameSound(bb, Ub, !1)
        }
        const Bb = Ub[0],
          eb = Ub[1] + Wa,
          vb = Ub[2];
        if (!Number.isFinite(Bb) || !Number.isFinite(eb) || !Number.isFinite(vb)) return pa.b;
        let Lb;
        if (Ab) {
          const bb = Bb - Ab[0],
            ab = eb - Ab[1],
            Ub = vb - Ab[2];
          if (Lb = bb * bb + ab * ab + Ub * Ub, Lb > Mb * Mb) return pa.b
        } else Lb = this.earDistSq(Bb, eb, vb);
        const Pb = this.startSpatial(Yb, ab, 0, 1, Eb, Bb, eb, vb, Tb, Lb);
        return Pb ? this.gameSound(Pb.howl, Pb.id, !0) : pa.b
      }
      setMaster(bb, ab) {
        this.level = da(bb);
        const Ub = ab ? this.level : 0;
        if (Ub !== this.master) {
          this.master = Ub;
          for (const [bb, ab] of this.live) ab.fadeMs = 0, ab.gain = ab.rel * this.master, ab.howl.volume(ab.gain, bb)
        }
      }
      stopCore() {
        for (const ab of [...this.core.values()]) {
          var bb;
          null === (bb = this.live.get(ab)) || void 0 === bb || bb.howl.stop(ab)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [bb, ab] of [...this.live]) ab.howl.stop(bb), this.forget(bb);
        this.core.clear()
      }
      gameSound(bb, ab, Ub) {
        const Ab = {
          stop: () => (this.live.has(ab) && bb.stop(ab), Ab),
          fade: (bb, Ub, Mb) => {
            var Tb, Eb;
            const Yb = this.level > 0 ? Ub / this.level : Ub > 0 && null !== (Tb = null === (Eb = this.live.get(ab)) || void 0 === Eb ? void 0 : Eb.rel) && void 0 !== Tb ? Tb : 0;
            return this.fade(ab, Yb, Mb, !1), Ab
          },
          rate: Ub => {
            const Mb = this.live.get(ab);
            return Mb && (Mb.rate = function(bb) {
              return bb > 0 && bb < 1 / 0 ? bb : 1
            }(Ub), bb.rate(Mb.rate, ab)), Ab
          },
          getVolume: () => {
            var bb, Ub;
            return (null !== (bb = null === (Ub = this.live.get(ab)) || void 0 === Ub ? void 0 : Ub.rel) && void 0 !== bb ? bb : 0) * this.level
          },
          getRelativeVolume: () => {
            var bb, Ub;
            return null !== (bb = null === (Ub = this.live.get(ab)) || void 0 === Ub ? void 0 : Ub.rel) && void 0 !== bb ? bb : 0
          },
          setRelativeVolume: bb => (this.setRel(ab, bb), Ab),
          setPannerAttr: Mb => {
            if (Ub && this.live.has(ab)) {
              const Ub = {
                ...Na,
                refDistance: va.i
              };
              for (const [bb, ab] of Object.entries(Mb)) "number" !== typeof ab && "string" !== typeof ab || (Ub[bb] = ab);
              bb.pannerAttr({
                coneOuterAngle: Ub.coneOuterAngle
              }, ab), bb.pannerAttr(Ub, ab)
            }
            return Ab
          },
          setPosition: Mb => (Ub && this.live.has(ab) && Number.isFinite(Mb[0] + Mb[1] + Mb[2]) && bb.pos(Mb[2], Mb[1], Mb[0], ab), Ab)
        };
        return Ab
      }
      startSpatial(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        const vb = this.sheet(Za[bb], !0);
        let Lb = null;
        if (!Mb) {
          if (this.failed.has(vb)) return null;
          const Ub = Za[bb] === Ia ? null : (0, xa.i)(ya[bb]),
            Ab = (0, xa.g)(da(ab), Math.sqrt(eb), Bb);
          if (Lb = new ha(Ub, Ab, this.now(), vb, this.voiceHost), !this.voices.admit(Lb)) return null
        }
        const Pb = this.start(bb, !0, ab, Ub, Ab, Mb);
        return Lb && (Lb.id = Pb.id, Lb.direct = "loaded" === vb.state() && !vb._playLock), vb.pannerAttr({
          coneOuterAngle: 360
        }, Pb.id), vb.pannerAttr({
          ...Na,
          refDistance: Bb
        }, Pb.id), vb.pos(Yb, Eb, Tb, Pb.id), Pb
      }
      aliveVoice(bb) {
        const ab = this.live.get(bb);
        if (!ab) return;
        const Ub = ab.howl._soundById(bb);
        if (Ub && !Ub._ended) return ab;
        this.forget(bb)
      }
      earDistSq(bb, ab, Ub) {
        if (!this.posed) return 0;
        const Ab = bb - this.pose[2],
          Mb = ab - this.pose[1],
          Tb = Ub - this.pose[0];
        return Ab * Ab + Mb * Mb + Tb * Tb
      }
      start(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = da(Ub),
          Yb = this.sheet(Za[bb], ab);
        "unloaded" === Yb.state() && Yb.load();
        const Bb = Yb.play(ya[bb]),
          eb = Eb * this.master;
        return Yb.volume(eb, Bb), this.live.set(Bb, {
          howl: Yb,
          rel: Eb,
          gain: eb,
          fadeFrom: eb,
          fadeAt: 0,
          fadeMs: 0,
          rate: Mb,
          handle: Ab,
          spatial: ab,
          stopTimer: void 0
        }), 0 !== Ab && this.core.set(Ab, Bb), 1 !== Mb && Yb.rate(Mb, Bb), Tb && Yb.loop(!0, Bb), {
          howl: Yb,
          id: Bb
        }
      }
      sheet(bb, ab) {
        const Ub = 2 * bb + (ab ? 1 : 0);
        let Ab = this.sheets.get(Ub);
        if (!Ab) {
          const Mb = this.createHowl(Ra[bb], ab);
          Mb.on("end", (bb => {
            Mb.loop(bb) || this.forget(bb)
          })), Mb.on("stop", (bb => {
            this.forget(bb)
          })), Mb.on("play", (bb => {
            this.live.has(bb) && this.started.add(bb)
          })), Mb.on("loaderror", (bb => {
            if ("loaded" !== Mb.state()) {
              this.failed.add(Mb);
              for (const [bb, ab] of this.live) ab.howl === Mb && this.forget(bb)
            } else "number" === typeof bb && this.forget(bb)
          })), this.sheets.set(Ub, Mb), Ab = Mb
        }
        return Ab
      }
      setRel(bb, ab) {
        const Ub = this.live.get(bb);
        Ub && (Qa(Ub), Ub.fadeMs = 0, Ub.rel = da(ab), Ub.gain = Ub.rel * this.master, Ub.howl.volume(Ub.gain, bb))
      }
      fade(bb, ab, Ub, Ab) {
        const Mb = this.live.get(bb);
        if (!Mb) return;
        Qa(Mb);
        const {
          howl: Tb
        } = Mb, Eb = this.gainNow(Mb);
        Mb.rel = da(ab), Mb.gain = Mb.rel * this.master;
        const Yb = Ub > 0 ? Math.min(Ub, 65535) : 0,
          Bb = 0 === Yb || Eb === Mb.gain;
        Mb.fadeMs = Bb ? 0 : Yb, Bb ? Tb.volume(Mb.gain, bb) : (Mb.fadeFrom = Eb, Mb.fadeAt = this.now(), Tb.fade(Eb, Mb.gain, Yb, bb)), Ab && (Bb ? Tb.stop(bb) : Mb.stopTimer = setTimeout((() => {
          Mb.stopTimer = void 0, Tb.stop(bb)
        }), Yb))
      }
      gainNow(bb) {
        if (bb.fadeMs > 0) {
          const ab = (this.now() - bb.fadeAt) / bb.fadeMs;
          if (ab < 1) return bb.fadeFrom + (bb.gain - bb.fadeFrom) * Math.max(0, ab);
          bb.fadeMs = 0
        }
        return bb.gain
      }
      forget(bb) {
        this.started.delete(bb);
        const ab = this.live.get(bb);
        ab && (Qa(ab), this.live.delete(bb), 0 !== ab.handle && this.core.get(ab.handle) === bb && this.core.delete(ab.handle))
      }
    }

    function Qa(bb) {
      void 0 !== bb.stopTimer && (clearTimeout(bb.stopTimer), bb.stopTimer = void 0)
    }
    var qa = Ub(39731),
      ua = Ub(38409);
    class ra {
      constructor(bb, ab, Ub, Ab) {
        this.key = bb, this.model = ab, this.host = Ab, this.PL = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.nAb = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.cX = !1, this.PL = Math.max(1, Math.ceil(Ub)), this.records = new Float32Array(this.PL * Ba.c), this.isDirty = new Uint8Array(this.PL), this.tail = new Uint8Array(this.PL * jb.mc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Ab.cmd())
      }
      setOrigin(bb, ab, Ub) {
        this.origin[0] = bb, this.origin[1] = ab, this.origin[2] = Ub
      }
      markDirty(bb) {
        !this.cX && bb >= 0 && bb < this.PL && bb < jb.mc.Max && this.yj(bb, bb + 1)
      }
      commit(bb) {
        if (this.cX) return;
        (bb = Math.min(Math.max(Math.floor(bb), 0), this.PL, jb.mc.Max)) > this.count && this.yj(this.count, bb), this.count = bb;
        const {
          origin: ab,
          sentOrigin: Ub,
          dirtyList: Ab
        } = this, Mb = this.nAb !== bb, Tb = Ub[0] !== ab[0] || Ub[1] !== ab[1] || Ub[2] !== ab[2];
        if (0 === Ab.length && !Mb && !Tb) return;
        const Eb = this.host.cmd();
        if (!Eb || !this.make(Eb)) return;
        const Yb = Ab.length,
          {
            records: Bb,
            tailView: eb
          } = this;
        for (let vb = 0; vb < Yb; vb++) {
          const bb = Ab[vb],
            ab = bb * Ba.c,
            Ub = vb * jb.mc.Bytes,
            Mb = 0 !== Bb[ab + Ba.f] ? jb.mc.Hidden : 0;
          eb.setUint32(Ub, (bb | Mb) >>> 0, !0), eb.setFloat32(Ub + 4, Bb[ab], !0), eb.setFloat32(Ub + 8, Bb[ab + 1], !0), eb.setFloat32(Ub + 12, Bb[ab + 2], !0)
        }
        if ((0, jb.Ie)(Eb, 0, this.key, bb, ab, Yb, this.tailOf(Yb))) {
          for (let bb = 0; bb < Yb; bb++) this.isDirty[Ab[bb]] = 0;
          Ab.length = 0, this.nAb = bb, Ub[0] = ab[0], Ub[1] = ab[1], Ub[2] = ab[2]
        }
      }
      grow(bb) {
        (bb = Math.ceil(bb)) <= this.PL || this.cX || (this.records = (0, ua.e)(this.records, new Float32Array(bb * Ba.c)), this.isDirty = (0, ua.e)(this.isDirty, new Uint8Array(bb)), this.tail = new Uint8Array(bb * jb.mc.Bytes), this.tailView = new DataView(this.tail.buffer), this.PL = bb)
      }
      dispose() {
        this.cX || (this.cX = !0, this.host.cX(this, this.made ? this.key : null))
      }
      make(bb) {
        if (!this.made && bb) {
          const {
            item: ab,
            scale: Ub,
            yaw: Ab
          } = this.model;
          this.made = (0, jb.Oe)(bb, 0, this.key, ab, Ub, Ab)
        }
        return this.made
      }
      tailOf(bb) {
        const ab = bb * jb.mc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === ab || (this.tailCut = this.tail.subarray(0, ab)), this.tailCut
      }
      yj(bb, ab) {
        const {
          dirtyList: Ub,
          isDirty: Ab
        } = this;
        for (let Mb = bb; Mb < ab; Mb++) 0 === Ab[Mb] && (Ab[Mb] = 1, Ub.push(Mb))
      }
    }
    var Ka = Ub(583);
    class oa {
      constructor(bb) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: bb,
          owes: bb => {
            this.owing.add(bb)
          },
          settled: (bb, ab) => {
            this.owing.delete(bb), ab && this.live.delete(bb)
          }
        }
      }
      create(bb, ab) {
        if (Ub = bb, !Ka.n.includes(Ub)) return null;
        var Ub;
        const Ab = new la(++this.keys, vb.n.indexOf(bb), ab, this.host);
        return this.live.add(Ab), Ab
      }
      disposeAll() {
        for (const bb of [...this.live]) bb.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const bb = this.host.cmd();
        for (const ab of this.owing)
          if (!ab.sync(bb)) return
      }
    }
    class la {
      constructor(bb, ab, Ub, Ab) {
        this.key = bb, this.lifeform = ab, this.scale = Ub, this.host = Ab, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.cX = !1, this.sync()
      }
      setPose(bb, ab) {
        this.cX || (this.feet[0] = bb[0], this.feet[1] = bb[1], this.feet[2] = bb[2], this.yaw = ab, this.owed |= 2, this.sync())
      }
      setVisible(bb) {
        this.cX || bb === this.visible || (this.visible = bb, this.owed |= 4, this.sync())
      }
      dispose() {
        this.cX || (this.cX = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(bb) ? (this.host.settled(this, this.cX), !0) : (this.host.owes(this), !1)
      }
      write(bb) {
        if (!bb) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, jb.Ye)(bb, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const ab = (2 & this.owed ? jb.Lc.Pose : 0) | (4 & this.owed ? jb.Lc.Visible : 0);
        if (0 !== ab) {
          if (!(0, jb.Ue)(bb, 0, this.key, ab, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, jb.Se)(bb, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var ta = Ub(40168);

    function wa(bb, ab, Ub, Ab) {
      return (0, ta.c)(), (0, jb.Df)(bb, ab, Ub, Ab)
    }
    var sa = Ub(38417),
      ga = Ub(39716);
    const Ca = [0, 0, 0],
      Va = [0, 0, 0],
      Oa = [0, 0, 0],
      ca = [0, 0, 0],
      Ja = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      na = [0, 0, 0],
      Sa = [0, 0],
      bU = [1, 1, 1],
      aU = 1 / 3;
    const UU = ea.h;

    function AU(bb) {
      const ab = ea.d[bb],
        Ub = ab && ea.h[ab.mainMultiblock];
      return Ub && {
        main: Ub,
        x: ab.compX,
        y: ab.compY,
        z: ab.compZ
      }
    }

    function MU(bb) {
      if (null === bb || void 0 === bb) return jb.Tc;
      const ab = +bb;
      return Number.isInteger(ab) && ab >= -2147483648 && ab <= 2147483647 && String(ab) === String(bb) ? ab : jb.Tc
    }

    function TU(bb, ab, Ub) {
      return (0, jb.Nf)(bb, 0, ab, null !== Ub && void 0 !== Ub ? Ub : Number.NaN)
    }
    class EU {
      constructor(bb) {
        this.deps = bb, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new sa.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (bb => {
          var ab, Ub;
          null === (ab = (Ub = this.deps).setLocalOptions) || void 0 === ab || ab.call(Ub, bb)
        })), this.mobModels = new oa((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          cX: (bb, ab) => {
            this.livePools.delete(bb), null !== ab && (this.owedFrees.push(ab), this.flushOwed())
          }
        }, this.api = bb.api, this.live = bb.live, this.chunks = bb.chunks, this.items = bb.items, this.tables = bb.tables
      }
      isLocal(bb) {
        return null !== bb && void 0 !== bb && +bb === this.api.localId
      }
      assertLocal(bb, ab) {
        if (!this.isLocal(bb)) throw new Error(`Attempted to ${ab} for a player that is not the local player`)
      }
      eZ(bb) {
        const ab = this.api.eZ(bb);
        if (!ab) throw new Error(`Entity ${bb} has no replicated position`);
        return ab
      }
      checkValid(bb) {
        return !!this.deps.isSessionLive() && (null === bb || void 0 === bb || this.api.checkValid(bb))
      }
      isAlive(bb) {
        return !1 !== this.api.isAlive(bb)
      }
      getItemStat(bb, ab, Ub) {
        return this.isLocal(bb) || null !== bb && "Player" === this.api.getEntityType(bb) ? this.tables.getItemStat(ab, Ub) : this.tables.getDefaultItemStat(ab, Ub)
      }
      getClientOption(bb, ab) {
        return this.assertLocal(bb, "get a client option"), this.tables.getClientOption(ab)
      }
      openShop(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(bb, "open shop"), Eb.m.IR("showShopFromServer", {
          toggle: ab,
          Da: Ub
        }, !0)
      }
      sendMessage(bb, ab, Ub) {
        this.assertLocal(bb, "send a message");
        const Ab = "string" === typeof ab ? [{
          str: ab,
          style: Ub
        }] : ab;
        Eb.m.IR("chat", {
          content: Ab
        }, !0)
      }
      getEntityType(bb) {
        return this.api.getEntityType(bb)
      }
      getEntityName(bb) {
        const ab = MU(bb);
        return ab === jb.Tc ? void 0 : (0, qa.f)(this.api, ab)
      }
      hasEffect(bb, ab) {
        const Ub = MU(bb);
        return Ub !== jb.Tc && (0, qa.e)(this.api, Ub, ab)
      }
      getMetaInfo(bb) {
        return this.tables.getMetaInfo(bb)
      }
      getPlayerDbId(bb) {
        return this.assertLocal(bb, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(bb, ab, Ub) {
        if (!this.chunks.dataCleared(bb, ab, Ub)) return (0, qa.d)(this.api, bb, ab, Ub)
      }
      Qp(bb, ab, Ub, Ab) {
        this.setBlockId(bb, ab, Ub, this.tables.getItemId(Ab))
      }
      setOtherEntitySetting(bb, ab, Ub, Ab) {
        if (!this.isLocal(bb)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(jb.dd, Ub)) throw new Error(`Unknown other-entity setting ${Ub}`);
        const Mb = jb.dd[Ub],
          Tb = MU(ab);
        if (Tb === jb.Tc || !this.deps.beforeWrite()) return;
        const Eb = (0, qb.d)(Ab);
        if (Eb.length > 16384) throw new Error(`The other-entity setting ${Ub}'s value is over 16384 bytes`);
        const Yb = this.api.memoryView(Uint8Array, this.api.scratch(), Eb.length, "set_other_entity_setting's value");
        Yb && (Yb.set(Eb), this.api.queries.setOtherEntitySetting(Tb, Mb, Eb.length))
      }
      getPositionView(bb) {
        return this.live.position(+bb)
      }
      readDrawnPosition(bb, ab) {
        return this.api.readDrawnPosition(MU(bb), ab)
      }
      getDrawnHeading(bb) {
        const ab = MU(bb),
          Ub = (ab === jb.Tc ? 0 : this.api.queries.directorEntity(ab)) >= jb.tb.BYTES ? this.api.memoryData(this.api.scratch(), jb.tb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!Ub) return null;
        if (1 === jb.tb.headingIsDrawn(Ub, 0)) return jb.tb.heading(Ub, 0);
        const Ab = this.api.apiView;
        return this.isLocal(bb) && 0 === (jb.t.playerFlags(Ab, 0) & jb.Ed.FreeCam) ? jb.t.heading(Ab, 0) : null
      }
      getLocalPlayerMovement() {
        const bb = jb.t.playerFlags(this.api.apiView, 0);
        return 0 === (bb & jb.Ed.Replay) && this.api.readDrawnPosition(this.api.localId, Oa) ? {
          onGround: 0 !== (bb & jb.Ed.OnGround),
          jumpHeld: 0 !== (bb & jb.Ed.JumpHeld)
        } : null
      }
      vab(bb) {
        return this.isLocal(bb) ? this.items.PY() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var bb, ab;
        return "Gun" === (null === (bb = this.aliveHeld()) || void 0 === bb || null === (ab = bb.typeObj) || void 0 === ab ? void 0 : ab.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.PY()
      }
      isCrosshairShown() {
        var bb, ab;
        const Ub = (0, La.e)(Ab.c.get("crosshairGameView"), Ab.c.get("crosshairShownOverride"));
        if (null !== Ub) return Ub;
        const Mb = null === (bb = this.aliveHeld()) || void 0 === bb ? void 0 : bb.typeObj,
          Tb = "Gun" === (null === Mb || void 0 === Mb ? void 0 : Mb.type),
          Eb = Tb || !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.showsAimingUi),
          Yb = 0 === (jb.t.playerFlags(this.api.apiView, 0) & jb.Ed.ZoomFirstPerson),
          Bb = null !== (ab = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ab ? ab : null;
        return (0, La.k)({
          gun: Tb,
          aimable: Eb
        }, Yb, (0, Pa.e)(), Bb)
      }
      setCrosshairShown(bb) {
        Ab.c.set({
          crosshairShownOverride: bb
        })
      }
      getInventoryFreeSlotCount(bb) {
        return this.isLocal(bb) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(bb) {
        return this.isLocal(bb) ? this.items.selectedSlot : null
      }
      getItemSlot(bb, ab) {
        return this.isLocal(bb) ? this.items.slot(ab) : null
      }
      swapInventorySlots(bb, ab) {
        return this.items.swap(bb, ab)
      }
      isPlayerCrouching(bb) {
        if (this.isLocal(bb)) return 0 !== (jb.t.playerFlags(this.api.apiView, 0) & jb.Ed.Crouching);
        const ab = MU(bb);
        return ab !== jb.Tc && 1 === this.api.queries.entityCrouching(ab)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (jb.t.playerFlags(this.api.apiView, 0) & jb.Ed.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.i_()
      }
      getActionRay() {
        const bb = this.api.apiView;
        for (let ab = 0; ab < 3; ab++) Ja.origin[ab] = jb.t.S_(bb, 0, ab), Ja.direction[ab] = jb.t.actionDir(bb, 0, ab);
        return Ja
      }
      canModifyBlockAt(bb, ab, Ub) {
        return 1 === this.api.queries.canModify(bb, ab, Ub)
      }
      isSolidToPlayerBlockId(bb) {
        return this.tables.isSolidBlockId(bb) && !this.chunks.isWalkThrough(bb)
      }
      blockNameToBlockId(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(bb, ab)
      }
      blockIdToBlockName(bb) {
        return this.tables.nameOfId(bb)
      }
      Wbb(bb, ab, Ub, Ab, Mb) {
        return 1 === this.api.queries.terrainBlocked(Ab, bb, ab, Ub, MU(null !== Mb && void 0 !== Mb ? Mb : null))
      }
      getChunkVersion(bb, ab, Ub) {
        return this.chunks.version(bb, ab, Ub)
      }
      scanBlocks(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        return this.chunks.scan(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb)
      }
      isBlockInLoadedChunk(bb, ab, Ub) {
        return this.chunks.isLoaded(bb, ab, Ub)
      }
      getBlockId(bb, ab, Ub) {
        return this.chunks.Av(bb, ab, Ub)
      }
      playSound(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(bb)) return null;
        const Eb = this.playSoundFrom(ab, Ub, Mb, Tb);
        return 1 === Ab ? Eb : Eb.rate(Ab)
      }
      playSoundFrom(bb, ab, Ub, Ab) {
        var Mb, Tb;
        const Eb = this.deps.playSound;
        if (!Eb) return pa.b;
        const Yb = null === Ub || void 0 === Ub ? void 0 : Ub.HM,
          Bb = null !== (Mb = null === Ub || void 0 === Ub ? void 0 : Ub.maxHearDist) && void 0 !== Mb ? Mb : va.g,
          eb = null !== (Tb = null === Ub || void 0 === Ub ? void 0 : Ub.refDistance) && void 0 !== Tb ? Tb : va.i;
        let vb = null;
        if (Array.isArray(Yb)) Ca[0] = Yb[0], Ca[1] = Yb[1], Ca[2] = Yb[2], vb = Ca;
        else if (void 0 !== Yb && null !== Yb) {
          const bb = MU(Yb);
          if (!this.api.isLocal(bb)) {
            if (!this.api.readPosition(bb, Ca)) return pa.b;
            vb = Ca
          }
        }
        return Eb(bb, ab, vb, vb && this.ear(), Bb, eb, Ab)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Va)) Va[1] += Wa;
        else {
          const bb = this.api.apiView;
          if (0 === jb.t.viewProj(bb, 0, 3) && 0 === jb.t.viewProj(bb, 0, 7) && 0 === jb.t.viewProj(bb, 0, 11)) return null;
          for (let ab = 0; ab < 3; ab++) Va[ab] = jb.t.eye(bb, 0, ab)
        }
        return Number.isFinite(Va[0] + Va[1] + Va[2]) ? Va : null
      }
      setBlockId(bb, ab, Ub, Ab) {
        if (!Number.isInteger(Ab) || Ab < 0 || Ab > 65535) throw new Error(`Invalid block id ${Ab}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(bb, ab, Ub)) return;
        const Mb = Math.floor(bb),
          Tb = Math.floor(ab),
          Eb = Math.floor(Ub),
          Yb = this.predictedCells(Mb, Tb, Eb, Ab);
        if (1 === this.api.queries.Qp(Mb, Tb, Eb, Ab)) {
          for (let bb = 0; bb < Yb.length; bb += 5) this.chunks.setOverlay(Yb[bb], Yb[bb + 1], Yb[bb + 2], Yb[bb + 3], 1 === Yb[bb + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(bb, ab) {
        return this.deps.particles.create(bb, ab)
      }
      playParticleEffect(bb) {
        this.deps.particles.playEffect(bb)
      }
      burstParticlePreset(bb, ab, Ub) {
        this.deps.particles.burstPreset(bb, ab, Ub)
      }
      createGameMesh(bb, ab, Ub) {
        const Ab = ++this.meshKeys,
          Mb = this.deps.cmd();
        if (!Mb) return Ab;
        const {
          look: Tb,
          colour: Eb
        } = function(bb) {
          switch (bb.kind) {
            case void 0:
            case "flatEmissive":
              return bb.onTop ? {
                look: jb.Vb.FlatOnTop,
                colour: [...bb.rgb, bb.alpha]
              } : bb.opaque ? {
                look: jb.Vb.FlatOpaque,
                colour: [...bb.rgb, 1]
              } : {
                look: jb.Vb.Flat,
                colour: [...bb.rgb, bb.alpha]
              };
            case "chevronPath":
              return {
                look: jb.Vb.Chevrons, colour: [...(0, Xa.b)(bb.colour), bb.alpha]
              };
            case "furnaceFire":
              return {
                look: jb.Vb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(ab), Yb = Math.floor(bb.positions.length / 3), Bb = function(bb, ab) {
          const Ub = Math.floor(bb.positions.length / 3),
            Ab = bb.indices.length,
            Mb = Ub * (ab ? 5 : 3),
            Tb = new Uint8Array(4 * (Mb + Ab)),
            Eb = new DataView(Tb.buffer);
          for (let eb = 0; eb < 3 * Ub; eb++) Eb.setFloat32(4 * eb, bb.positions[eb], !0);
          if (ab) {
            var Yb;
            const ab = null !== (Yb = bb.uvs) && void 0 !== Yb ? Yb : [];
            for (let bb = 0; bb < 2 * Ub; bb++) {
              var Bb;
              Eb.setFloat32(4 * (3 * Ub + bb), null !== (Bb = ab[bb]) && void 0 !== Bb ? Bb : 0, !0)
            }
          }
          for (let eb = 0; eb < Ab; eb++) Eb.setUint32(4 * (Mb + eb), bb.indices[eb], !0);
          return Tb
        }(bb, (0, Ba.i)(ab));
        return (0, jb.Be)(Mb, 0, Ab, Tb, Eb, Ub, Yb, bb.indices.length, Bb) && this.liveMeshes.add(Ab), Ab
      }
      setGameMesh(bb, ab) {
        var Ub;
        const Ab = this.deps.cmd();
        if (!Ab) return;
        let Mb = 0;
        ab.anchor && (Mb |= jb.Xb.Anchor, na[0] = ab.anchor[0], na[1] = ab.anchor[1], na[2] = ab.anchor[2]), void 0 !== ab.visible && (Mb |= jb.Xb.Visible), ab.uvOffset && (Mb |= jb.Xb.UvOffset, Sa[0] = ab.uvOffset[0], Sa[1] = ab.uvOffset[1]);
        const Tb = null !== (Ub = ab.visibility) && void 0 !== Ub ? Ub : 1;
        void 0 !== ab.visibility && (Mb |= jb.Xb.Visibility), ab.scale && (Mb |= jb.Xb.Scale, bU[0] = ab.scale[0], bU[1] = ab.scale[1], bU[2] = ab.scale[2]), 0 !== Mb && (0, jb.Ee)(Ab, 0, bb, Mb, ab.visible ? 1 : 0, na, Sa, Tb, bU)
      }
      disposeGameMesh(bb) {
        const ab = this.deps.cmd();
        ab && !(0, jb.Ce)(ab, 0, bb) || this.liveMeshes.delete(bb)
      }
      hasPackModel(bb) {
        var ab, Ub, Ab;
        return null !== (ab = null === (Ub = (Ab = this.deps).hasPackModel) || void 0 === Ub ? void 0 : Ub.call(Ab, bb)) && void 0 !== ab && ab
      }
      disposeGameOutput() {
        const bb = bb => {
          try {
            bb()
          } catch (ab) {
            console.error("Error freeing client game output", ab)
          }
        };
        for (const ab of [...this.liveMeshes]) bb((() => {
          this.disposeGameMesh(ab)
        }));
        for (const ab of [...this.livePools]) bb((() => {
          ab.dispose()
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
      createInstancePool(bb, ab) {
        const Ub = this.tables.idOf(bb.item);
        if (void 0 === Ub) return null;
        const Ab = new ra(++this.poolKeys, {
          item: Ub,
          scale: bb.scale,
          yaw: bb.yaw
        }, ab, this.poolHost);
        return this.livePools.add(Ab), Ab
      }
      createMobModel(bb, ab) {
        return this.mobModels.create(bb, ab)
      }
      setRouteChevrons(bb) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !bb || 0 === bb.cells.length) return;
        const ab = `${bb.colour} ${bb.alpha}`;
        ab !== this.routeLook && (this.routeLook = ab, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(bb) {
          const [ab, Ub, Ab] = bb[0].pos, Mb = [], Tb = [], Eb = [];
          return bb.forEach(((bb, Yb) => {
            let {
              pos: Bb,
              way: [eb, vb]
            } = bb;
            const Lb = Bb[0] - ab + .5,
              Pb = Bb[1] - Ub + .04,
              Xb = Bb[2] - Ab + .5,
              [jb, Rb] = [.35 * -vb, .35 * eb],
              [kb, yb] = [Yb * aU, (Yb + 1) * aU],
              Zb = Mb.length / 3;
            Mb.push(Lb - .5 * eb + jb, Pb, Xb - .5 * vb + Rb), Mb.push(Lb - .5 * eb - jb, Pb, Xb - .5 * vb - Rb), Mb.push(Lb + .5 * eb + jb, Pb, Xb + .5 * vb + Rb), Mb.push(Lb + .5 * eb - jb, Pb, Xb + .5 * vb - Rb), Tb.push(0, kb, 1, kb, 0, yb, 1, yb), Eb.push(Zb, Zb + 1, Zb + 2, Zb + 1, Zb + 3, Zb + 2)
          })), {
            positions: Mb,
            uvs: Tb,
            indices: Eb
          }
        }(bb.cells), {
          kind: "chevronPath",
          colour: bb.colour,
          alpha: bb.alpha
        }, bb.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(bb) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(bb, 250) / 1e3 * 1.2 * aU) % 1, this.setRouteSlide())
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
        const ab = this.deps.cmd();
        if (!ab) return bb.length = 0, void(this.pendingFar = void 0);
        let Ub = 0;
        for (; Ub < bb.length && (0, jb.Me)(ab, 0, bb[Ub]);) Ub++;
        bb.splice(0, Ub);
        const Ab = this.pendingStyle;
        if (void 0 !== Ab) {
          (Ab ? (0, jb.Rf)(ab, 0, Ab.width, Ab.alpha, 1, Ab.endAtSolidFace ? 1 : 0) : (0, jb.Rf)(ab, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Mb = this.pendingFar;
        void 0 !== Mb && (0, jb.Jf)(ab, 0, null !== Mb && void 0 !== Mb ? Mb : 0, null === Mb ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(bb, ab) {
        const Ub = this.deps.cmd(),
          Ab = MU(bb);
        Ub && Ab !== jb.Tc && (0, jb.Yf)(Ub, 0, Ab, ab)
      }
      setFacingTolerance(bb, ab) {
        const Ub = this.deps.cmd(),
          Ab = MU(bb);
        Ub && Ab !== jb.Tc && TU(Ub, Ab, ab)
      }
      forEachEntity(bb) {
        const {
          api: ab
        } = this;
        for (let Ub = 0; Ub < ab.idStr.length; Ub++) {
          const Ab = ab.idStr[Ub];
          null === Ab || xb(ab.kinds[Ub]) || bb(Ab)
        }
      }
      getEntityInfo(bb) {
        return this.deps.entityInfo.get(bb)
      }
      isEntityInteractable(bb) {
        const ab = MU(bb);
        return ab !== jb.Tc && 1 === this.api.queries.entityInteractable(ab)
      }
      isLocalPlayer(bb) {
        return this.isLocal(bb)
      }
      getLineOwner(bb) {
        var ab;
        const Ub = null === (ab = this.deps.entityInfo.get(bb)) || void 0 === ab ? void 0 : ab.meshOpts;
        if (!Ub) return null;
        try {
          const {
            lineToEId: bb
          } = JSON.parse(Ub);
          return null !== bb && void 0 !== bb ? bb : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const bb = this.api.apiView;
        return ca[0] = jb.t.eye(bb, 0, 0), ca[1] = jb.t.eye(bb, 0, 1), ca[2] = jb.t.eye(bb, 0, 2), ca
      }
      getCameraFar() {
        return jb.t.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(bb) {
        null !== bb && (this.farSet = !0), this.pendingFar = bb, this.flushOwed()
      }
      turnCamera(bb, ab) {
        this.cameraTurn.turn(bb, ab)
      }
      clearPickupDelay(bb) {
        const ab = this.deps.cmd(),
          Ub = MU(bb);
        ab && Ub !== jb.Tc && (0, jb.oe)(ab, 0, Ub)
      }
      sendChat(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = this.deps.sendCmd();
        Ub && wa(Ub, 0, ga.c.Chat, (0, qb.d)((0, ga.m)({
          fE: bb,
          mE: ab
        })))
      }
      sendCommand(bb) {
        bb.length <= 119 && this.sendChat(`/${bb}`)
      }
      predictedCells(bb, ab, Ub, Ab) {
        const Mb = this.chunks,
          Tb = [],
          Eb = (bb, ab, Ub, Ab, Mb) => {
            Tb.push(bb, ab, Ub, Ab, this.tables.blockRootId(Mb) === this.tables.blockRootId(Ab) ? 0 : 1)
          },
          Yb = Mb.Av(bb, ab, Ub),
          Bb = AU(Yb);
        if (Bb) {
          const [Ab, Tb, eb] = [bb - Bb.x, ab - Bb.y, Ub - Bb.z], vb = UU[Mb.Av(Ab, Tb, eb)], Lb = null === vb || void 0 === vb ? void 0 : vb.positions.some((bb => bb.id === Yb && bb.x === Bb.x && bb.y === Bb.y && bb.z === Bb.z));
          for (const bb of (Lb && vb ? vb : Bb.main).positions) Mb.Av(Ab + bb.x, Tb + bb.y, eb + bb.z) === bb.id && Eb(Ab + bb.x, Tb + bb.y, eb + bb.z, 0, bb.id)
        }
        const eb = AU(Ab);
        if (eb)
          for (const Lb of eb.main.positions) {
            const [Ab, Tb, Yb] = [bb + Lb.x - eb.x, ab + Lb.y - eb.y, Ub + Lb.z - eb.z];
            Eb(Ab, Tb, Yb, Lb.id, Mb.Av(Ab, Tb, Yb))
          } else Eb(bb, ab, Ub, Ab, Yb);
        const vb = this.tables;
        if ((0 !== vb.attachedTopOf(Yb) || 0 !== vb.attachedTopOf(Ab)) && Mb.isLoaded(bb, ab + 1, Ub)) {
          let Bb = Mb.Av(bb, ab + 1, Ub);
          for (let Ab = 0; Ab < Tb.length; Ab += 5) Tb[Ab] === bb && Tb[Ab + 1] === ab + 1 && Tb[Ab + 2] === Ub && (Bb = Tb[Ab + 3]);
          const eb = this.attachedTopWrite(Yb, Ab, Bb);
          void 0 !== eb && Eb(bb, ab + 1, Ub, eb, Bb)
        }
        return Tb
      }
      attachedTopWrite(bb, ab, Ub) {
        const Ab = this.tables,
          Mb = Ab.attachedTopOf(bb),
          Tb = Ab.attachedTopOf(ab),
          Eb = 0 !== Mb && 0 !== Ub && Ab.blockRootId(Ub) === Ab.blockRootId(Mb);
        return 0 !== Mb && 0 !== Tb && Ab.blockRootId(bb) === Ab.blockRootId(ab) ? Eb && Ub !== Tb ? Tb : void 0 : 0 === Tb || !Eb && 0 !== Ub ? Eb ? 0 : void 0 : Tb
      }
    }
    const YU = jb.hc + jb.lc * jb.qc.BYTES,
      BU = 2147483647,
      eU = new TextDecoder,
      vU = new TextEncoder,
      LU = Object.freeze({
        Ev: 0,
        Qv: null,
        amountAddedToSlot: 0
      }),
      PU = new Proxy({}, {
        get: () => () => jb.ad
      });

    function XU(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 65535
    }

    function jU(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 4294967295
    }
    class RU {
      constructor(bb) {
        this.deps = bb, this.uT = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(jb.lc), this.ids = new Uint16Array(jb.lc), this.amounts = new Uint16Array(jb.lc), this.attrRead = new Float64Array(jb.lc).fill(-1), this.stale = new Uint16Array(jb.lc), this.staleVersion = new Uint32Array(jb.lc), this.instances = new Uint32Array(jb.lc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var ab;
        return Number.isInteger(bb) && bb >= 0 && bb < this.len && 0 !== this.ids[bb] && null !== (ab = this.facades[bb]) && void 0 !== ab ? ab : null
      }
      PY() {
        return this.slot(this.selected)
      }
      playerItems() {
        const bb = [];
        for (let ab = 0; ab < Math.min(jb.md, this.len); ab++) bb.push(this.slot(ab));
        return bb
      }
      freeSlots() {
        let bb = 0;
        for (let ab = 0; ab < Math.min(jb.md - jb.l, this.len); ab++) 0 === this.ids[ab] && bb++;
        return bb
      }
      amountOf(bb) {
        let ab = 0;
        for (let Ab = 0; Ab < Math.min(jb.md, this.len); Ab++) {
          const Mb = this.slot(Ab);
          var Ub;
          if ((null === Mb || void 0 === Mb ? void 0 : Mb.name) === bb) ab += null !== (Ub = Mb.amount) && void 0 !== Ub ? Ub : 1
        }
        return ab
      }
      instance(bb) {
        var ab;
        return null !== (ab = this.instances[bb]) && void 0 !== ab ? ab : 0
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
          for (const Ub of [...this.listeners]) try {
            Ub()
          } catch (ab) {
            bb(ab)
          }
        }
      }
      chestOpened(bb, ab, Ub) {
        this.uT[0] = bb, this.uT[1] = ab, this.uT[2] = Ub, this.version++
      }
      refresh() {
        const bb = this.deps.api.apiView,
          ab = jb.t.inventoryViewPtr(bb, 0),
          Ub = jb.t.inventoryVersion(bb, 0),
          Ab = jb.t.selectedSlot(bb, 0);
        Ab !== this.selected && (this.selected = Ab, this.version++);
        const Mb = jb.t.slotIcon(bb, 0);
        if (Mb !== this.slotIconId && (this.slotIconId = Mb, this.iconChanged = !0), ab === this.viewPtr && Ub === this.viewVersion) return;
        this.viewPtr = ab, this.viewVersion = Ub;
        const Tb = this.deps.api.memoryData(ab, YU, 4, "the inventory view"),
          Eb = Tb ? Math.min(Tb.getUint32(0, !0), jb.lc) : 0;
        Eb !== this.len && (this.len = Eb, this.version++);
        let Yb = 0;
        for (let Bb = 0; Bb < jb.lc; Bb++) {
          const bb = jb.hc + Bb * jb.qc.BYTES,
            ab = null !== Tb && Bb < Eb ? jb.qc.item(Tb, bb) : 0;
          if (0 === ab || null === Tb) {
            0 !== this.ids[Bb] && (this.ids[Bb] = 0, this.attrRead[Bb] = -1, this.instances[Bb]++, this.version++);
            continue
          }
          const Ub = jb.qc.amount(Tb, bb),
            Ab = jb.qc.attrVersion(Tb, bb);
          ab === this.ids[Bb] && Ub === this.amounts[Bb] || this.fill(Bb, ab, Ub), Ab !== this.attrRead[Bb] && (this.stale[Yb] = Bb, this.staleVersion[Yb] = Ab, Yb++)
        }
        Yb > 0 && this.fetchAttributes(Yb)
      }
      fill(bb, ab, Ub) {
        const {
          tables: Ab
        } = this.deps, Mb = ab !== this.ids[bb];
        let Tb = this.facades[bb];
        Tb || (Tb = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[bb] = Tb), Mb && (Tb.name = Ab.nameOfId(ab), Tb.typeObj = Ab.itemType(ab), Tb.attributes = {
          customAttributes: {}
        }, this.attrRead[bb] = -1, this.instances[bb]++), Tb.amount = 0 === Ub ? null : Ub, this.ids[bb] = ab, this.amounts[bb] = Ub, this.version++
      }
      fetchAttributes(bb) {
        const {
          api: ab,
          onError: Ub
        } = this.deps, Ab = ab.memoryView(Uint16Array, ab.scratch(), bb, "item_attributes_batch's slots");
        if (!Ab) return void this.markRead(bb);
        Ab.set(this.stale.subarray(0, bb));
        const Mb = ab.queries.itemAttributesBatch(bb),
          Tb = 4294967295 === Mb ? null : ab.memoryData(ab.scratch(), Mb, 4, "item_attributes_batch's answer");
        if (!Tb) return void this.markRead(bb);
        const Eb = new Uint8Array(Tb.buffer, Tb.byteOffset, Mb);
        for (let Bb = 0; Bb + 8 <= Mb;) {
          const bb = Tb.getUint16(Bb, !0),
            ab = Tb.getUint32(Bb + 4, !0),
            Ab = Eb.subarray(Bb + 8, Bb + 8 + ab);
          Bb += 8 + (0, Pb.ae)(ab);
          const Mb = this.facades[bb];
          if (Mb && 0 !== this.ids[bb] && 0 !== ab) {
            try {
              Mb.attributes = JSON.parse(eU.decode(Ab))
            } catch (Yb) {
              Ub(Yb)
            }
            this.version++
          }
        }
        this.markRead(bb)
      }
      markRead(bb) {
        for (let ab = 0; ab < bb; ab++) this.attrRead[this.stale[ab]] = this.staleVersion[ab]
      }
      swap(bb, ab) {
        return XU(bb) && XU(ab) && this.settle(this.queries().invSwap(bb, ab))
      }
      move(bb, ab, Ub) {
        return XU(bb) && XU(ab) && jU(Ub) && this.settle(this.queries().invMove(bb, ab, Ub))
      }
      quickMove(bb, ab, Ub, Ab) {
        var Mb, Tb;
        if (!XU(bb) || !XU(ab) || !XU(Ub) || null !== Ab && !jU(Ab)) return null;
        const Eb = this.queries().invQuickMove(bb, ab, Ub, null === Ab ? -1 : Math.min(Ab, BU)),
          Yb = Eb === jb.ad ? jb.Jb : null !== (Mb = null === (Tb = this.extras()) || void 0 === Tb ? void 0 : Tb[1]) && void 0 !== Mb ? Mb : jb.Jb;
        return this.settle(Eb), Yb === jb.Jb ? null : Yb
      }
      remove(bb, ab, Ub) {
        return XU(bb) && jU(ab) && this.settle(this.queries().invRemove(bb, ab, Ub ? 1 : 0))
      }
      selectSlot(bb) {
        return XU(bb) && this.settle(this.queries().selectSlot(bb))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(bb, ab, Ub) {
        if (!XU(bb) || !Number.isInteger(ab)) return !1;
        const [Ab, Mb, Tb] = Ub;
        return this.settle(this.queries().invEnchant(bb, ab, Math.floor(Ab), Math.floor(Mb), Math.floor(Tb)))
      }
      craft(bb, ab, Ub) {
        let Ab;
        try {
          Ab = this.deps.tables.getItemId(bb)
        } catch {
          return LU
        }
        if (!XU(ab) || null !== Ub && (Number.isNaN(Ub) || Ub < 0)) return LU;
        const Mb = null === Ub || Ub > BU ? -1 : Math.floor(Ub),
          Tb = this.queries().craft(Ab, ab, Mb);
        let Eb = LU;
        const Yb = Tb === jb.ad ? null : this.extras();
        if (Yb) {
          const [bb, ab, Ub] = Yb;
          Eb = {
            Ev: bb,
            Qv: ab === jb.Jb ? null : ab,
            amountAddedToSlot: Ub
          }
        }
        return this.settle(Tb), Eb
      }
      salvage(bb, ab, Ub) {
        let Ab;
        try {
          Ab = this.deps.tables.getItemId(ab)
        } catch {
          return !1
        }
        return XU(bb) && Number.isInteger(Ub) && this.settle(this.queries().salvage(bb, Ab, Math.max(Math.min(Ub, BU), -BU)))
      }
      craftingView(bb, ab, Ub) {
        var Ab;
        if (this.stopped) return null;
        const {
          api: Mb,
          onError: Tb
        } = this.deps, Eb = bb ? vU.encode(bb) : null;
        if (null !== Eb) {
          if (Eb.length > 1024) return Tb(new Error(`The crafting station ${bb}'s name is over 1024 bytes`)), null;
          const ab = Mb.memoryView(Uint8Array, Mb.scratch(), Eb.length, "crafting_view's station");
          if (!ab) return null;
          ab.set(Eb)
        }
        const Yb = XU(ab) && XU(Ub),
          Bb = Mb.queries.craftingView(null !== (Ab = null === Eb || void 0 === Eb ? void 0 : Eb.length) && void 0 !== Ab ? Ab : 0, Yb ? ab : 0, Yb ? Ub : 0);
        return Bb < jb.ib.BYTES ? (Mb.reportCorruption(`crafting_view's answer of ${Bb} bytes`), null) : Mb.memoryData(Mb.scratch(), Bb, 1, "crafting_view's answer")
      }
      queries() {
        var bb, ab;
        return !1 === (null === (bb = (ab = this.deps).beforeOp) || void 0 === bb ? void 0 : bb.call(ab)) ? (this.stopped = !0, PU) : this.deps.api.queries
      }
      extras() {
        const {
          api: bb
        } = this.deps;
        return bb.memoryView(Uint32Array, bb.scratch(), 3, "a sync query's extra words")
      }
      settle(bb) {
        if (bb === jb._c)(0, ta.c)();
        else if (bb !== jb.ad) {
          const ab = this.deps.cmd();
          ab && function(bb, ab, Ub) {
            return (0, ta.c)(), (0, jb.ig)(bb, ab, Ub)
          }(ab, 0, bb) || this.deps.onError(new Error(`Sync op ${bb}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), bb !== jb.ad
      }
    }
    const kU = 1 / .6,
      yU = [0, 1, 0],
      ZU = [0, 0, 0],
      DU = new Uint8Array(0),
      zU = 1.2 * ja.c.vy,
      xU = new TextEncoder,
      iU = [0, 0, 0],
      fU = [0, 0, 0],
      mU = new Map;

    function pU(bb) {
      let ab = mU.get(bb);
      return ab || (mU.size >= 64 && mU.clear(), ab = xU.encode(`{"emitRate":${bb}}`), mU.set(bb, ab)), ab
    }

    function NU(bb) {
      return Number.isFinite(bb) && bb > 0 ? bb : 0
    }

    function WU(bb, ab) {
      for (let Ub = 0; Ub < 3; Ub++) {
        const Ab = Math.abs(ab[Ub]);
        iU[Ub] = bb[Ub] - Ab, fU[Ub] = 2 * Ab
      }
      return Number.isFinite(iU[0] + iU[1] + iU[2] + fU[0] + fU[1] + fU[2])
    }

    function HU(bb, ab) {
      return "pos1" === bb || "pos2" === bb ? void 0 : ab
    }

    function IU(bb, ab, Ub) {
      return bb.length > jb.Ad.MaxOpts ? (Ub(new Error(`${ab}'s particle opts are over ${jb.Ad.MaxOpts} bytes of JSON`)), null) : bb
    }
    const dU = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class FU {
      constructor(bb) {
        this.deps = bb, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(bb, ab) {
        var Ub;
        const Ab = this.sink(),
          Mb = null !== (Ub = ab.half) && void 0 !== Ub ? Ub : ZU;
        if (!Ab || this.live >= jb.Ad.MaxLiveKeys || this.nextKey > jb.Ad.MaxKey || !WU(ab.pos, Mb)) return dU;
        const Tb = this.nextKey,
          Eb = IU(function(bb) {
            var ab, Ub, Ab;
            const Mb = JSON.stringify({
              texture: "string" === typeof bb.texture ? bb.texture : "smokePuff",
              PL: bb.PL,
              minLifeTime: bb.minLifeTime,
              maxLifeTime: bb.maxLifeTime,
              minSize: bb.minSize,
              maxSize: bb.maxSize,
              minEmitPower: bb.minEmitPower,
              maxEmitPower: bb.maxEmitPower,
              emitRate: NU(bb.emitRate),
              gravity: null !== (ab = bb.gravity) && void 0 !== ab ? ab : ZU,
              dir1: null !== (Ub = bb.dir1) && void 0 !== Ub ? Ub : yU,
              dir2: null !== (Ab = bb.dir2) && void 0 !== Ab ? Ab : yU,
              colorGradients: bb.colorGradients,
              blendMode: bb.blendMode
            });
            return xU.encode(Mb)
          }(bb), "createParticles", this.deps.onError);
        return Eb && (0, jb.ef)(Ab, 0, Tb, 0, jb.Ad.PresetNone, 0, iU, fU, Eb) ? (this.nextKey++, this.live++, this.started = !0, new hU(this, this.session, Tb, bb, Mb)) : dU
      }
      playEffect(bb) {
        const ab = this.sink(),
          {
            pos1: Ub,
            pos2: Ab
          } = bb;
        if (!ab || !Ub || !Ab) return;
        for (let Tb = 0; Tb < 3; Tb++) iU[Tb] = Math.min(Ub[Tb], Ab[Tb]), fU[Tb] = Math.abs(Ab[Tb] - Ub[Tb]);
        if (!Number.isFinite(iU[0] + iU[1] + iU[2] + fU[0] + fU[1] + fU[2])) return;
        const Mb = IU(xU.encode(JSON.stringify(bb, HU)), "playParticleEffect", this.deps.onError);
        Mb && (0, jb.$e)(ab, 0, 0, jb.Ad.PresetNone, jb.Ad.HasBox, 0, iU, fU, Mb)
      }
      burstPreset(bb, ab, Ub) {
        const Ab = this.sink(),
          Mb = Math.min(Math.floor(Ub), jb.Ad.MaxBurst);
        if (!Ab || !Object.hasOwn(jb._b, bb) || !(Mb > 0)) return;
        const Tb = zU;
        for (let Eb = 0; Eb < 3; Eb++) iU[Eb] = ab[Eb] - Tb / 2, fU[Eb] = Tb;
        Number.isFinite(iU[0] + iU[1] + iU[2]) && (0, jb.$e)(Ab, 0, 0, jb._b[bb], jb.Ad.HasBox, Mb, iU, fU, DU)
      }
      sessionEnded() {
        this.session++;
        const bb = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !bb || (0, jb.ff)(bb, 0)
      }
      sinkFor(bb) {
        return bb === this.session ? this.deps.cmd() : null
      }
      stop(bb, ab) {
        const Ub = this.sinkFor(bb);
        Ub && (0, jb.jf)(Ub, 0, ab) && this.live--
      }
    }
    class hU {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.owner = bb, this.session = ab, this.key = Ub, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Mb[0]), Math.abs(Mb[1]), Math.abs(Mb[2])], this.rate = NU(Ab.emitRate), this.emitted = this.rate > 0;
        const Tb = Ab.maxLifeTime * kU * 1e3 + 250;
        this.stopDelayMs = Tb >= 0 ? Math.min(Tb, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(bb, ab) {
        const Ub = this.sink();
        if (Ub) {
          if (ab)
            for (let bb = 0; bb < 3; bb++) this.half[bb] = Math.abs(ab[bb]);
          WU(bb, this.half) && (0, jb.kf)(Ub, 0, this.key, jb.Ad.HasBox, iU, fU, DU)
        }
      }
      setEmitRate(bb) {
        const ab = this.sink(),
          Ub = NU(bb);
        ab && Ub !== this.rate && (0, jb.kf)(ab, 0, this.key, 0, ZU, ZU, pU(Ub)) && (this.rate = Ub, this.emitted ||= Ub > 0)
      }
      emit(bb) {
        const ab = this.sink(),
          Ub = Math.min(Math.floor(bb), jb.Ad.MaxBurst);
        ab && Ub > 0 && (0, jb.$e)(ab, 0, this.key, jb.Ad.PresetNone, 0, Ub, ZU, ZU, DU) && (this.emitted = !0)
      }
      emitPoints(bb, ab, Ub) {
        const Ab = this.sink(),
          Mb = Math.min(Math.floor(Ub), jb.Ad.MaxPoints, Math.floor(ab.length / 4));
        if (!Ab || !(Mb > 0) || !Number.isFinite(bb[0] + bb[1] + bb[2])) return;
        const Tb = new Uint8Array(ab.buffer, ab.byteOffset, Mb * jb.Ad.PointBytes);
        (0, jb.df)(Ab, 0, this.key, Mb, bb, Tb) && (this.emitted = !0)
      }
      setDirections(bb, ab) {
        const Ub = this.sink();
        if (!Ub || !Number.isFinite(bb[0] + bb[1] + bb[2] + ab[0] + ab[1] + ab[2])) return;
        const Ab = xU.encode(JSON.stringify({
          dir1: [bb[0], bb[1], bb[2]],
          dir2: [ab[0], ab[1], ab[2]]
        }));
        (0, jb.kf)(Ub, 0, this.key, 0, ZU, ZU, Ab)
      }
      stop() {
        const bb = this.sink();
        this.stopped = !0, bb && (this.emitted ? (this.rate > 0 && (0, jb.kf)(bb, 0, this.key, 0, ZU, ZU, pU(0)), setTimeout((() => {
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
    const GU = Ka.o,
      QU = new TextDecoder;

    function qU(bb, ab) {
      const {
        serverIds: Ub,
        kinds: Ab
      } = bb;
      let Mb = 0;
      for (let Tb = 0; Tb < Ub.length; Tb++) {
        const bb = Ub[Tb];
        if (bb !== jb.Tc && !xb(Ab[Tb])) {
          if (Mb === ab.length) {
            const bb = new Int32Array(Math.max(64, 2 * Mb));
            bb.set(ab), ab = bb
          }
          ab[Mb++] = bb
        }
      }
      return {
        ids: ab,
        count: Mb
      }
    }

    function uU(bb, ab) {
      return bb.length >= ab ? bb : new Int32Array(Math.max(ab, 2 * bb.length))
    }

    function rU(bb, ab, Ub, Ab) {
      for (let Mb = 0; Mb < Ub; Mb += 4096) {
        const Tb = Math.min(4096, Ub - Mb),
          Eb = bb.memoryView(Int32Array, bb.scratch(), Tb, "entity_info_batch's ids");
        if (!Eb) return !1;
        Eb.set(ab.subarray(Mb, Mb + Tb));
        const Yb = bb.queries.entityInfoBatch(Tb),
          Bb = 4294967295 === Yb ? null : bb.memoryData(bb.scratch(), Yb, 4, "entity_info_batch's records");
        if (!Bb) return !1;
        for (let bb = 0; bb + jb.Pb.BYTES <= Yb;) {
          const ab = jb.Pb.len(Bb, bb);
          Ab(jb.Pb.serverId(Bb, bb), KU(Bb, bb, ab)), bb += jb.Pb.BYTES + (0, Pb.ae)(ab)
        }
      }
      return !0
    }

    function KU(bb, ab, Ub) {
      var Ab, Mb, Tb;
      const Eb = jb.Pb.kind(bb, ab),
        Yb = 0 === Eb ? null : ib(Eb);
      if (null === Yb) return null;
      const Bb = jb.Pb.variation(bb, ab),
        eb = jb.Pb.pose(bb, ab),
        vb = jb.Pb.meta(bb, ab),
        Lb = jb.Pb.mesh(bb, ab),
        Pb = 0 !== (jb.Pb.flags(bb, ab) & jb.Mb.HasOpts),
        Xb = GU[Yb];
      return Object.freeze({
        type: Yb,
        variation: Bb === jb.Zc ? void 0 : null !== (Ab = null !== (Mb = null === Xb || void 0 === Xb ? void 0 : Xb[Bb]) && void 0 !== Mb ? Mb : null === Xb || void 0 === Xb ? void 0 : Xb[0]) && void 0 !== Ab ? Ab : "default",
        pose: eb === jb.dc ? void 0 : null !== (Tb = jb.Fb[eb]) && void 0 !== Tb ? Tb : jb.Fb[0],
        metaInfo: vb === jb.dc ? void 0 : jb.Ic[vb],
        meshKind: Lb === jb.dc ? void 0 : jb.Gc[Lb],
        meshOpts: Pb ? QU.decode(new Uint8Array(bb.buffer, bb.byteOffset + ab + jb.Pb.BYTES, Ub)) : void 0
      })
    }
    const oU = 1,
      lU = 2;
    class tU {
      constructor(bb) {
        this.deps = bb, this.wanted = 0, this.PY = !1, this.refused = !1
      }
      get on() {
        return this.PY
      }
      want(bb, ab) {
        this.wanted = ab ? this.wanted | bb : this.wanted & ~bb;
        const Ub = 0 !== this.wanted;
        if (Ub === this.PY) return;
        const Ab = this.deps.cmd();
        null !== Ab ? (0, jb.og)(Ab, 0, Ub ? 1 : 0) ? (this.PY = Ub, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.PY = !1
      }
    }
    class wU {
      constructor(bb) {
        this.deps = bb, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(bb) {
        var ab;
        return this.complete || this.fill(), null !== (ab = this.entries.get("string" === typeof bb ? bb : String(bb))) && void 0 !== ab ? ab : null
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
            api: ab
          } = this.deps;
          let Ub = 0;
          const Ab = this.ids = uU(this.ids, bb);
          for (let Mb = 0; Mb < bb; Mb++) {
            const bb = this.pending[Mb],
              Tb = ab.indexById.get(bb);
            void 0 === Tb || xb(ab.kinds[Tb]) ? this.entries.delete(String(bb)) : Ab[Ub++] = bb
          }
          Ub > 0 && !this.batch(Ab, Ub) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(oU, !1)
      }
      fill() {
        const {
          api: bb
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: bb
          } = this.deps, ab = bb.on;
          bb.want(oU, !0), !ab && bb.on && (this.refill = this.midFrame)
        }
        const {
          ids: ab,
          count: Ub
        } = qU(bb, this.ids);
        this.ids = ab, Ub > 0 && !this.batch(ab, Ub) && (this.refill = !0)
      }
      batch(bb, ab) {
        return rU(this.deps.api, bb, ab, ((bb, ab) => {
          null === ab ? this.entries.delete(String(bb)) : this.entries.set(String(bb), ab)
        }))
      }
    }
    var sU = Ub(4485);

    function gU(bb) {
      if ("message" !== bb.type || bb.fE !== sU.Tb.NewClientOptions || bb.payloadKind !== Pb._b.Msgpack) return null;
      const ab = (0, qb.c)(bb.payload);
      if (null === ab || "object" !== typeof ab || Array.isArray(ab)) throw new Error("NewClientOptions whose body isn't an object of options");
      return ab
    }
    var CU = Ub(1189),
      VU = Ub(36038);

    function OU(bb, ab, Ub, Ab, Mb, Tb, Yb) {
      var Bb, eb, vb;
      switch (bb) {
        case jb.$d.ToggleMenu: {
          const bb = jb.G[ab];
          Eb.m.IR("toggleMenu", void 0 === bb ? "inventory" : `inventory|${bb}`);
          break
        }
        case jb.$d.EditBoard:
          Eb.m.IR("EditBoard", {
            pos: 0 === ab ? null : Ub
          });
          break;
        case jb.$d.EditCodeBlock:
        case jb.$d.ViewCodeBlock:
          Eb.m.IR("EditCodeBlock", {
            pos: Ub,
            canChangePos: bb === jb.$d.EditCodeBlock
          });
          break;
        case jb.$d.EditCustomLobbyBlock:
          Eb.m.IR("EditCustomLobbyBlock", {
            pos: Ub
          });
          break;
        case jb.$d.OpenIronChest:
          Eb.m.IR("OpenIronChest", {
            pos: Ub
          });
          break;
        case jb.$d.EditNameTag:
          Eb.m.IR("EditNameTag", null !== (Bb = null === (eb = Mb.PY()) || void 0 === eb || null === (vb = eb.attributes.customAttributes) || void 0 === vb ? void 0 : vb.text) && void 0 !== Bb ? Bb : "");
          break;
        case jb.$d.EditBook: {
          var Lb, Pb, Rb;
          const bb = null === (Lb = Mb.PY()) || void 0 === Lb ? void 0 : Lb.attributes;
          Eb.m.IR("EditBook", {
            pages: (0, CU.K)(null === bb || void 0 === bb || null === (Pb = bb.customAttributes) || void 0 === Pb ? void 0 : Pb.pages),
            title: null !== (Rb = null === bb || void 0 === bb ? void 0 : bb.customDisplayName) && void 0 !== Rb ? Rb : "Title",
            isPublished: !(null === bb || void 0 === bb || !bb.customDescription)
          });
          break
        }
        case jb.$d.CantChangeBlock:
          ! function(bb, ab) {
            const Ub = ab.getClientOption("cantChangeError"),
              Ab = ab.getClientOption(bb ? "cantBuildError" : "cantBreakError"),
              Mb = bb ? Ub : Ab;
            (ab.getClientOption("canChange") || Mb || "You cannot modify this block" !== Ub) && Eb.m.IR("showBottomMessage", {
              message: Ab || Ub,
              type: "Error"
            })
          }(1 === ab, Tb);
          break;
        case jb.$d.MiddleBarStart:
          Eb.m.IR("middleScreenBarInitiate", {
            duration: Ab,
            vA: 1 === Ub[0],
            horizBarRemOffset: ab
          });
          break;
        case jb.$d.MiddleBarStop:
          Eb.m.IR("middleScreenBarRemove");
          break;
        case jb.$d.Hitmarker:
          Eb.m.IR("localGunHitmarker", {
            BU: 1 === ab
          });
          break;
        case jb.$d.ShotsLeft:
          Eb.m.IR("localPlayerNewShotsLeft", Ab);
          break;
        case jb.$d.AimingOverlay:
          Eb.m.IR("aimingOverlay", 3 === (3 & ab) ? "sniper" : "none");
          break;
        case jb.$d.BottomMessage:
          Eb.m.IR("showBottomMessage", JSON.parse(Yb()));
          break;
        case jb.$d.Crosshair:
          Mb.inaccuracy = (0, ub.c)(Ab), (0, VU.c)().crosshairAccuracy(Mb.inaccuracy);
          break;
        case jb.$d.ChargeStage:
          break;
        case jb.$d.EmoteWheelClose:
          Eb.m.IR("requestEmoteWheelClose");
          break;
        case jb.$d.BlockMined:
          Eb.m.IR("localBlockMined");
          break;
        default:
          throw new Xb.e(`UiEvent of no kind: what ${bb}`)
      }
    }
    var cU = Ub(37343),
      JU = Ub(8914),
      nU = Ub(1852),
      SU = Ub(36127),
      bA = Ub(8922),
      aA = Ub(4469);
    const UA = 10,
      AA = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      MA = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      TA = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function EA(bb, ab) {
      let Ub, Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Tb = () => (Ub = (0, nU.q)(Ub, ab()), Ub);
      return {
        current: Tb,
        watch(ab) {
          const Ub = () => {
              ab(Tb())
            },
            Eb = [bb.watch(Ub)];
          return null !== Ab && Eb.push((0, nU.r)((bb => {
            bb.some(Ab) && Ub()
          }))), null !== Mb && Eb.push(Mb(Ub)), () => {
            for (const bb of Eb) bb()
          }
        }
      }
    }

    function YA(bb) {
      return bb && {
        name: bb.name,
        amount: bb.amount,
        attributes: bb.attributes
      }
    }
    const BA = new WeakMap;

    function eA(bb) {
      let ab = BA.get(bb);
      return void 0 === ab && (ab = (0, bA.creativeItemIds)().map((ab => ({
        name: bb.nameOfId(ab),
        amount: bb.isStackableId(ab) ? 1 : null,
        attributes: (0, cU.e)("Gun" === (0, bA.itemTypeOf)(ab) ? {
          type: "Gun",
          clipSize: (0, bA.clipSizeOf)(ab)
        } : void 0)
      }))), BA.set(bb, ab)), ab
    }

    function vA(bb, ab, Ub, Ab) {
      const Mb = ab => (bb.flush(Ab), ab),
        Tb = Ub => {
          var Ab, Mb, Tb, Eb, Yb, Bb, eb;
          const vb = bb.slot(Ub);
          if (!vb) return null;
          const {
            rootName: Lb,
            metaStr: Pb
          } = ab.getMetaInfo(vb.name);
          return {
            name: vb.name,
            amount: vb.amount,
            attributes: vb.attributes,
            instance: bb.instance(Ub),
            displayName: null !== (Ab = vb.attributes.customDisplayName) && void 0 !== Ab ? Ab : ab.getDisplayName(Lb),
            requiresAmmo: "RequiresAmmo" === Pb,
            clipSize: null !== (Mb = null !== (Tb = null === (Eb = vb.attributes.customAttributes) || void 0 === Eb || null === (Yb = Eb.gunStats) || void 0 === Yb ? void 0 : Yb.clipSize) && void 0 !== Tb ? Tb : null === (Bb = ab.getGunStats(Lb)) || void 0 === Bb ? void 0 : Bb.clipSize) && void 0 !== Mb ? Mb : null === (eb = vb.typeObj) || void 0 === eb ? void 0 : eb.clipSize
          }
        },
        Yb = function(bb, ab) {
          let Ub = null,
            Ab = {
              focus: null,
              recipes: [],
              detail: null
            },
            Mb = -1;
          const Tb = new Set;
          return {
            read() {
              var Tb, Eb;
              if (null === Ub) return null !== Ab.focus && (Ab = {
                ...Ab,
                focus: null
              }), Ab;
              if (Ab.focus === Ub && Mb === bb.changes) return Ab;
              if (Mb = bb.changes, 0 === bb.length) return Ab = {
                focus: Ub,
                recipes: [],
                detail: null
              }, Ab;
              let Yb = 0;
              if (null !== Ub.recipe) try {
                Yb = ab.getItemId(Ub.recipe.name)
              } catch {}
              const Bb = bb.craftingView(Ub.station, Yb, null !== (Tb = null === (Eb = Ub.recipe) || void 0 === Eb ? void 0 : Eb.Tv) && void 0 !== Tb ? Tb : 0);
              return Ab = null === Bb ? {
                focus: Ub,
                recipes: [],
                detail: null
              } : function(bb, ab, Ub) {
                let Ab = jb.ib.BYTES;
                const Mb = [];
                for (let vb = jb.ib.recipes(bb, 0); vb > 0; vb--) {
                  const Ub = jb.bb.flags(bb, Ab),
                    Tb = {
                      name: ab.nameOfId(jb.bb.item(bb, Ab)),
                      Tv: jb.bb.recipe(bb, Ab),
                      requires: [],
                      produces: jb.bb.produces(bb, Ab),
                      haveIngredients: 0 !== (Ub & jb._.HaveIngredients),
                      listed: 0 !== (Ub & jb._.Listed)
                    };
                  let Eb = jb.bb.requires(bb, Ab);
                  for (Ab += jb.bb.BYTES; Eb > 0; Eb--) {
                    const Ub = jb.eb.items(bb, Ab);
                    Tb.requires.push({
                      items: XA(bb, Ab + jb.eb.BYTES, Ub, ab),
                      amt: jb.eb.amount(bb, Ab)
                    }), Ab += jb.eb.BYTES + 2 * Ub
                  }
                  Mb.push(Tb)
                }
                const Tb = jb.ib.flags(bb, 0);
                if (null === Ub.recipe || 0 === (Tb & jb.gb.Detail)) return {
                  focus: Ub,
                  recipes: Mb,
                  detail: null
                };
                const Eb = {},
                  Yb = {};
                for (let vb = jb.ib.ingredients(bb, 0); vb > 0; vb--) {
                  const Ub = jb.X.item(bb, Ab),
                    Mb = jb.X.from(bb, Ab),
                    Tb = jb.X.amount(bb, Ab);
                  Ab += jb.X.BYTES;
                  const Bb = Mb === jb.D ? null : XA(bb, Ab, Mb, ab);
                  if (null !== Bb && (Ab += 2 * Mb), 0 === Ub) continue;
                  const eb = ab.nameOfId(Ub);
                  Eb[eb] = Tb, null !== Bb && (Yb[eb] = Bb)
                }
                const {
                  name: Bb,
                  Tv: eb
                } = Ub.recipe;
                return {
                  focus: Ub,
                  recipes: Mb,
                  detail: {
                    name: Bb,
                    Tv: eb,
                    craftAllTimes: jb.ib.craftAllTimes(bb, 0),
                    roomForOne: 0 !== (Tb & jb.gb.RoomForOne),
                    resultStackable: Boolean(ab.getItemStat(Bb, "stackable")),
                    amounts: Eb,
                    ingredientsCraftedFrom: Yb
                  }
                }
              }(Bb, ab, Ub), Ab
            },
            setFocus(bb) {
              Ub = bb;
              for (const ab of [...Tb]) ab()
            },
            watchFocus: bb => (Tb.add(bb), () => {
              Tb.delete(bb)
            })
          }
        }(bb, ab);
      return {
        states: {
          inventory: EA(bb, (() => {
            const Ub = bb.length;
            if (0 === Ub) return AA;
            const Ab = [];
            for (let ab = 0; ab < jb.md; ab++) Ab.push(YA(bb.slot(ab)));
            const Mb = bb.slotIcon,
              Tb = Ab[bb.selectedSlot];
            0 !== Mb && Tb && (Ab[bb.selectedSlot] = {
              ...Tb,
              icon: ab.nameOfId(Mb)
            });
            const Eb = !0 === ab.getClientOption("creative");
            let Yb = [],
              Bb = null;
            if (Ub > jb.md) {
              for (let ab = jb.md; ab < Ub; ab++) Yb.push(YA(bb.slot(ab)));
              Bb = {
                type: null,
                pos: [...bb.uT],
                numSlots: Ub - jb.md,
                ironChest: null
              }
            } else Eb && (Yb = eA(ab));
            return {
              player: Ab,
              chestOrCreative: Yb,
              chest: Bb,
              creative: Eb,
              selectedSlot: bb.selectedSlot,
              freeSlots: bb.freeSlots()
            }
          }), (0, nU.i)("creative")),
          hotbar: EA(bb, (() => {
            if (0 === bb.length) return MA;
            const ab = [];
            for (let bb = 0; bb < UA; bb++) ab.push(Tb(bb));
            return {
              items: ab,
              ammo: bb.amountOf("Ammo"),
              selectedSlot: bb.selectedSlot
            }
          }), (0, nU.e)("DisplayName", "GunStats")),
          crafting: EA(bb, Yb.read, null, Yb.watchFocus),
          heldItemAim: EA(bb, (() => {
            var ab;
            if (!Ub()) return TA;
            const Ab = null === (ab = bb.PY()) || void 0 === ab ? void 0 : ab.typeObj,
              Mb = "Gun" === (null === Ab || void 0 === Ab ? void 0 : Ab.type);
            return {
              gun: Mb,
              aimable: Mb || !0 === (null === Ab || void 0 === Ab ? void 0 : Ab.showsAimingUi),
              chargeName: "Chargeable" === (null === Ab || void 0 === Ab ? void 0 : Ab.type) ? Ab.name : null
            }
          }), null, (bb => function(bb, ab) {
            let Ub = bb();
            return (0, aA.x)((() => {
              const Ab = bb();
              Ab !== Ub && (Ub = Ab, ab(Ab))
            }))
          }(Ub, bb)))
        },
        events: {
          hotbarSlotRequested: (0, nU.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, nU.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, nU.b)("numkeyPressed"),
          inventoryDropRequested: (0, nU.b)("DropInvenItem"),
          chestToggled: (0, nU.b)("chestToggleFromServer"),
          chestRefreshed: (0, nU.b)("chestRefreshedFromServer", PA),
          inventorySynced: (0, nU.b)("syncedInvenFromServer", PA),
          enchantingTableOpened: (0, nU.b)("enchantingTable", (bb => {
            let {
              position: Ub,
              Av: Ab
            } = bb;
            return {
              position: [...Ub],
              blockName: ab.getMetaInfo(Ab).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(ab) {
            bb.selectSlot(ab), bb.flush(Ab)
          },
          removeInventoryItem(ab) {
            let {
              slot: Ub,
              amount: Ab,
              drop: Tb
            } = ab;
            return Mb(bb.remove(Ub, Ab, Tb))
          },
          swapInventorySlots(ab) {
            let {
              a: Ub,
              b: Ab
            } = ab;
            return Mb(bb.swap(Ub, Ab))
          },
          moveInventoryItem(ab) {
            let {
              from: Ub,
              to: Ab,
              amount: Tb
            } = ab;
            return Mb(bb.move(Ub, Ab, Tb))
          },
          quickMoveInventoryItem(ab) {
            let {
              slot: Ub,
              start: Ab,
              end: Tb,
              amount: Eb
            } = ab;
            return Mb(bb.quickMove(Ub, Ab, Tb, Eb))
          },
          closeChest() {
            bb.closeChest(), bb.flush(Ab), Eb.m.IR("chestClosedByPlayer")
          },
          focusCrafting(bb) {
            Yb.setFocus(bb)
          },
          craftRecipe(ab) {
            let {
              name: Ub,
              Tv: Ab,
              times: Tb
            } = ab;
            return Mb(bb.craft(Ub, Ab, Tb))
          },
          salvageItem(ab) {
            let {
              slot: Ub,
              name: Ab,
              amount: Tb
            } = ab;
            return Mb(bb.salvage(Ub, Ab, Tb))
          },
          enchantItem(ab) {
            let {
              slot: Ub,
              level: Ab,
              tablePos: Mb
            } = ab;
            bb.enchant(Ub, Ab, Mb)
          }
        },
        queries: {
          enchantingOffer(Ub) {
            let {
              slot: Ab,
              blockName: Mb
            } = Ub;
            return function(bb, ab, Ub, Ab) {
              const Mb = bb.slot(Ub);
              if (!Mb || !ab.getClientOption("canCraft") || !(0, JU.n)(Ab) || (0, JU.m)(Mb.attributes)) return LA;
              const Tb = (0, bA.enchantmentPerksOf)(ab.getItemId(Mb.name));
              if (0 === Tb.length) return LA;
              const Eb = [];
              for (let Yb = 0; Yb < SU.d; Yb++) {
                const {
                  commonProb: bb,
                  uncommonProb: ab,
                  rareProb: Ub,
                  epicProb: Mb,
                  legendaryProb: Tb,
                  level: Bb
                } = (0, JU.f)(Ab, Yb);
                Eb.push({
                  level: Bb,
                  odds: [bb, ab, Ub, Mb, Tb].map((bb => 100 * bb))
                })
              }
              return {
                perks: [...Tb],
                options: Eb
              }
            }(bb, ab, Ab, Mb)
          }
        }
      }
    }
    const LA = Object.freeze({
      perks: [],
      options: []
    });

    function PA() {
      return null
    }

    function XA(bb, ab, Ub, Ab) {
      const Mb = [];
      for (let Tb = 0; Tb < Ub; Tb++) {
        const Ub = bb.getUint16(ab + 2 * Tb, !0);
        0 !== Ub && Mb.push(Ab.nameOfId(Ub))
      }
      return Mb
    }
    class jA {
      constructor(bb) {
        this.api = bb, this.positions = new Map, this.targeted = {
          xV: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          nX: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(bb) {
        let ab = this.positions.get(bb);
        return ab || (this.api.checkValid(bb) || this.api.isLocal(bb) ? (ab = [NaN, NaN, NaN], this.api.readPosition(bb, ab), this.positions.set(bb, ab), ab) : null)
      }
      i_() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [ab, Ub] of this.positions) this.api.readPosition(ab, Ub) || this.api.checkValid(ab) || this.api.isLocal(ab) || this.positions.delete(ab);
        const bb = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (jb.t.playerFlags(bb, 0) & jb.Ed.Breaking) && jb.t.breakingProgress(bb, 0) >= 0, this.isBreaking)
          for (let ab = 0; ab < 3; ab++) this.breaking[ab] = jb.t.breakingPos(bb, 0, ab)
      }
      refreshTarget() {
        const bb = this.api.apiView,
          ab = jb.t.targetBlockId(bb, 0);
        if (this.hasTarget = ab !== jb.Wc, this.hasTarget) {
          const Ub = this.targeted;
          Ub.xV = ab;
          for (let ab = 0; ab < 3; ab++) Ub.position[ab] = jb.t.targetBlock(bb, 0, ab), Ub.normal[ab] = jb.t.targetNormal(bb, 0, ab), Ub.nX[ab] = jb.t.targetAdjacent(bb, 0, ab)
        }
      }
      despawned(bb) {
        const ab = this.positions.get(bb);
        ab && !this.api.isLocal(bb) && (ab.fill(NaN), this.positions.delete(bb))
      }
    }
    var RA = Ub(39758),
      kA = Ub(39740),
      yA = Ub(36125);
    const ZA = 1,
      DA = 2;
    class zA {
      constructor() {
        this.game = new yA.e, this.client = new yA.e, this.PY = 0, this.movesFly = null
      }
      setGame(bb) {
        if (null === bb || "object" !== typeof bb) return !1;
        const {
          key: ab,
          value: Ub
        } = bb;
        return "string" === typeof ab && (this.game.setBooleanType(ab, Boolean(Ub)), !0)
      }
      setClient(bb, ab) {
        this.client.setBooleanType(bb, ab)
      }
      clearGame() {
        this.game = new yA.e, this.movesFly = null
      }
      setMovesFly(bb) {
        this.movesFly = bb
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? ZA : 0) | (this.client._getTotalBooleanVal() ? DA : 0)
      }
      write(bb) {
        const ab = this.perms(),
          {
            movesFly: Ub
          } = this;
        if (ab === this.PY && null === Ub) return !0;
        let Ab = jb.Qb.Keep;
        return null !== Ub && (Ab = Ub ? jb.Qb.On : jb.Qb.Off), !(!bb || !(0, jb.ve)(bb, 0, Ab, ab, Ub ? 1 : 0)) && (this.PY = ab, this.movesFly = null, !0)
      }
    }
    class xA {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = bb, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Yb.c,
          get y() {
            return ab()
          }
        }
      }
      get hasView() {
        const bb = this.api.apiView,
          ab = jb.t.viewProj;
        return 0 !== ab(bb, 0, 3) || 0 !== ab(bb, 0, 7) || 0 !== ab(bb, 0, 11) || 0 !== ab(bb, 0, 15)
      }
      get cameraPosition() {
        const bb = this.api.apiView,
          {
            eye: ab
          } = this;
        for (let Ub = 0; Ub < 3; Ub++) ab[Ub] = jb.t.eye(bb, 0, Ub);
        return ab
      }
      get cameraDirection() {
        const bb = this.api.apiView,
          ab = jb.t.viewProj,
          Ub = ab(bb, 0, 3),
          Ab = ab(bb, 0, 7),
          Mb = ab(bb, 0, 11),
          Tb = Math.hypot(Ub, Ab, Mb),
          {
            forward: Eb
          } = this;
        return Tb > 0 && (Eb[0] = Ub / Tb, Eb[1] = Ab / Tb, Eb[2] = Mb / Tb), Eb
      }
      get cameraHeading() {
        return jb.t.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return jb.t.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return jb.t.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return jb.t.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(bb) {
        this.clip(bb);
        const {
          clipX: ab,
          clipY: Ub,
          clipW: Ab
        } = this;
        if (Ab > 0) {
          const bb = ab / Ab * 50,
            Mb = -Ub / Ab * 50;
          return Math.abs(bb) <= this.screenBandPct.x && Math.abs(Mb) <= this.screenBandPct.y ? {
            x: 50 + bb,
            y: 50 + Mb
          } : this.clampToBand(bb, Mb)
        }
        const Mb = this.cameraPosition,
          Tb = Math.hypot(bb[0] - Mb[0], bb[1] - Mb[1], bb[2] - Mb[2]),
          Eb = this.api.apiView,
          Yb = jb.t.viewProj,
          Bb = Tb > 0 ? ab / Tb : 0,
          eb = Tb > 0 ? -Ub / Tb : 0,
          vb = Math.hypot(Yb(Eb, 0, 1), Yb(Eb, 0, 5), Yb(Eb, 0, 9)),
          Lb = Bb / Math.hypot(Yb(Eb, 0, 0), Yb(Eb, 0, 4), Yb(Eb, 0, 8)),
          Pb = eb / vb,
          Xb = !(Math.abs(Lb) >= .001 || Math.abs(Pb) >= .001);
        return this.clampToBand(Bb, Xb ? -(vb || 1) : eb)
      }
      projectDirectionToScreenPos(bb) {
        if (!this.hasView) return;
        const ab = this.cameraPosition,
          Ub = this.along;
        for (let Ab = 0; Ab < 3; Ab++) Ub[Ab] = ab[Ab] + 10 * bb[Ab];
        return this.projectWorldPosToScreenPos(Ub)
      }
      projectWorldPosToViewport(bb) {
        this.clip(bb);
        const {
          clipX: ab,
          clipY: Ub,
          clipW: Ab
        } = this;
        return Ab > 0 ? {
          x: 50 + ab / Ab * 50,
          y: 50 - Ub / Ab * 50
        } : null
      }
      clip(bb) {
        const ab = this.api.apiView,
          Ub = bb[0] - jb.t.origin(ab, 0, 0),
          Ab = bb[1] - jb.t.origin(ab, 0, 1),
          Mb = bb[2] - jb.t.origin(ab, 0, 2),
          Tb = jb.t.viewProj;
        this.clipX = Tb(ab, 0, 0) * Ub + Tb(ab, 0, 4) * Ab + Tb(ab, 0, 8) * Mb + Tb(ab, 0, 12), this.clipY = Tb(ab, 0, 1) * Ub + Tb(ab, 0, 5) * Ab + Tb(ab, 0, 9) * Mb + Tb(ab, 0, 13), this.clipW = Tb(ab, 0, 3) * Ub + Tb(ab, 0, 7) * Ab + Tb(ab, 0, 11) * Mb + Tb(ab, 0, 15)
      }
      clampToBand(bb, ab) {
        return (0, Yb.f)(bb, ab, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var iA = Ub(4494);
    const fA = new TextEncoder,
      mA = new Uint8Array(jb.M * jb.I);
    class pA {
      constructor() {
        this.buttons = [], this.PY = !0
      }
      set(bb) {
        this.buttons = bb, this.PY = !1
      }
      attached() {
        this.PY = 0 === this.buttons.length
      }
      write(bb) {
        if (this.PY) return;
        const ab = new Uint8Array(jb.M),
          Ub = new Uint8Array(jb.M);
        let Ab = 0,
          Mb = 0;
        for (const {
            id: Tb,
            keycode: Eb
          }
          of this.buttons) {
          if (Ab === jb.M) break;
          const {
            read: bb,
            written: Yb
          } = fA.encodeInto(Tb, mA.subarray(Mb, Mb + jb.I));
          if (bb < Tb.length) continue;
          const Bb = iA.h[Eb];
          ab[Ab] = "number" === typeof Bb ? Bb : 0, Ub[Ab] = Yb, Ab++, Mb += Yb
        }
        this.PY = (0, jb.ke)(bb, 0, Ab, ab, Ub, mA.subarray(0, Mb))
      }
    }

    function NA(bb, ab, Ub) {
      const Ab = fA.encode(ab);
      return Ab.length <= jb.I && function(bb, ab, Ub, Ab) {
        return (0, ta.c)(), (0, jb.nf)(bb, ab, Ub, Ab)
      }(bb, 0, Ub ? 1 : 0, Ab)
    }
    const WA = new TextDecoder,
      HA = new TextEncoder,
      IA = new Uint8Array(0),
      dA = [0, 0, 0],
      FA = {
        off: jb.Gd.Off,
        key: jb.Gd.Key,
        touch: jb.Gd.Touch
      };
    class hA {
      constructor(bb) {
        var ab;
        this.options = bb, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new pA, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new zA, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.GX = bb => {
          if ((0, Xb.g)(bb)) throw bb;
          this.onError(bb)
        }, this.api = bb.api, this.tables = bb.tables, this.onError = null !== (ab = bb.onError) && void 0 !== ab ? ab : bb => {
          console.error("Error in client game callback", bb)
        }, this.renderFrame = new xA(this.api, bb.screenBandY), this.live = new jA(this.api), this.chunks = new Ya(this.api.memory, (() => this.api.apiView)), this.items = new RU({
          api: this.api,
          tables: bb.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: bb.beforeOp
        });
        const Ub = () => this.stopped() ? null : this.cmd,
          Ab = () => this.sessionLive;
        this.entityInfoWatch = new tU({
          cmd: Ub,
          onError: this.onError
        }), this.entityInfo = new wU({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Ab
        }), this.particles = new FU({
          cmd: Ub,
          isSessionLive: Ab,
          onError: this.onError
        }), this.clientApi = new EU({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: bb.tables,
          cmd: Ub,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Ab,
          beforeWrite: () => {
            var ab;
            if (this.stopped()) return !1;
            const Ub = this.generation;
            return !1 !== (null === (ab = bb.beforeWrite) || void 0 === ab ? void 0 : ab.call(bb)) && Ub === this.generation
          },
          playerDbId: () => {
            const bb = this.session;
            if (null === bb) throw new Error("No game session has started, so the local player has no DB id");
            return bb.playerDbId
          },
          playSound: bb.playSound,
          setLocalOptions: bb.setLocalOptions,
          hasPackModel: bb.hasPackModel
        }), this.scriptedCamera = new Cb({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: bb.cameraScreen,
          showFacing: bb.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= vA(this.items, this.tables, (() => this.localPlayerAlive()), this.GX), this.itemSources
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
        const ab = this.sessionLive ? this.sendCmd() : null;
        return null !== ab && (Ub = ab, Ab = 0, Mb = bb[0], Tb = bb[1], Eb = bb[2], (0, ta.c)(), (0, jb.pe)(Ub, Ab, Mb, Tb, Eb));
        var Ub, Ab, Mb, Tb, Eb
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(bb) {
        const ab = this.liveCmd();
        return null === ab ? (this.pendingZoom = bb, !1) : (this.pendingZoom = null, (0, jb.eg)(ab, 0, bb, 1))
      }
      Wm(bb) {
        const ab = this.stopped() ? null : this.cmd;
        return null !== ab && (0, jb.$f)(ab, 0, bb ? 1 : 0)
      }
      respawn() {
        const bb = this.sessionLive ? this.sendCmd() : null;
        return null !== bb && (ab = bb, Ub = 0, (0, ta.c)(), (0, jb.yf)(ab, Ub));
        var ab, Ub
      }
      bindCustomButtonKeys(bb) {
        this.customButtons.set(bb)
      }
      pressCustomButton(bb, ab) {
        const Ub = this.sessionLive ? this.sendCmd() : null;
        return null !== Ub && NA(Ub, bb, ab)
      }
      padMove(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = this.liveCmd();
        return null !== Eb && (0, jb.Ze)(Eb, 0, bb, ab, Ub, Ab, Mb, Tb)
      }
      thirdPersonFor(bb) {
        const ab = this.liveCmd();
        return null !== ab && (0, jb.mg)(ab, 0, null !== bb && void 0 !== bb ? bb : 1 / 0)
      }
      send(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Ab && wa(Ab, Ub ? Pb.bd : 0, bb, (0, qb.d)(ab))
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
        const ab = () => bb.isStopped;
        this.stopped = ab, this.cmd = bb.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const Ub = this.api.apiView;
        this.overflowGen = jb.t.eventOverflowGen(Ub, 0), this.resyncOwed = 0 !== jb.t.eventOverflowMask(Ub, 0), bb.setGameHost(this), bb.setEventWalker((bb => {
          this.api.walk(bb, this, ab)
        }))
      }
      watchPromptPick(bb) {
        this.promptWatch = bb, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : GA(jb.t.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? jb.pc.None : jb.t.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : jb.t.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === bb || bb >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, bb, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(bb) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(bb)
      }
      netEvent(bb) {
        "connection" === bb.type ? bb.phase === Pb.C.Activated && bb.conn !== this.activeConn && bb.conn > this.closedThrough ? (this.endSession(), this.activeConn = bb.conn, this.endGameGrants(), this.dropGameCamera()) : bb.phase !== Pb.C.Left && bb.phase !== Pb.C.Closed || bb.conn !== this.activeConn ? bb.phase === Pb.C.Resumed && 0 !== this.activeConn && bb.conn > this.closedThrough && (this.activeConn = bb.conn) : this.closeGame() : bb.conn === this.activeConn && 0 !== bb.conn && (bb.fE === kA.o ? this.gunHit(bb.payload) : bb.fE === sU.Tb.EditItemCraftingRecipes || bb.fE === kA.Q ? this.items.touch() : (this.serverOptions(bb), this.gameMessage(bb)));
        const ab = this.options.onNetEvent;
        ab && this.guard((() => {
          ab(bb)
        }))
      }
      serverOptions(bb) {
        const ab = this.options.serverOptions,
          Ub = ab ? this.decoded(gU, bb) : null;
        ab && Ub && this.guard((() => {
          ab.applyNewClientOptions(Ub)
        }))
      }
      gameMessage(bb) {
        let ab = null;
        try {
          ab = function(bb) {
            if ("message" !== bb.type || bb.fE !== sU.Tb.GameCodeMessage || bb.payloadKind !== Pb._b.Msgpack) return null;
            const ab = (0, qb.c)(bb.payload);
            if (null === ab || "object" !== typeof ab || "string" !== typeof ab.messageType) throw new Error("GameCodeMessage without a messageType");
            return ab
          }(bb)
        } catch (Ub) {
          this.sessionLive && this.onError(Ub)
        }
        if (ab) {
          const {
            messageType: bb,
            data: Ub
          } = ab;
          if ((0, Hb.e)(bb)) return void this.guard((() => {
            (0, Hb.c)(bb, Ub)
          }));
          "freeCamPerms" === bb && this.freeCam.setGame(Ub) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (ab => {
            ab.onReceivedMessageFromServer(bb, Ub)
          }))
        }
      }
      decoded(bb, ab) {
        try {
          return bb(ab)
        } catch (Ub) {
          return this.onError(Ub), null
        }
      }
      setClientFreeCameraGrant(bb, ab) {
        this.freeCam.setClient(bb, ab), this.writeFreeCam()
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
      writeOwedHighlight() {
        const bb = this.liveCmd();
        if (null === bb || !this.highlightOwed) return;
        const ab = this.highlight;
        this.highlightOwed = null === ab ? !(0, jb.He)(bb, 0, dA, dA, 0) : !(0, jb.He)(bb, 0, ab.pos, ab.normal, 1)
      }
      localPlayerBound(bb) {
        var ab, Ub;
        if (0 === this.activeConn || this.sessionLive && bb === this.boundId) return;
        const Ab = this.sessionLive;
        let Mb, Tb, Eb, Yb;
        this.endSession(), Ab && this.restartGameCamera();
        try {
          var Bb;
          this.session = null;
          const bb = this.options.sessionInfo(this.activeConn);
          if (this.session = bb, !bb) return;
          Mb = bb.gameNameWithVariation, Tb = null !== (Bb = (0, Nb.Bb)(Mb)) && void 0 !== Bb ? Bb : void 0, Eb = (0, Wb.x)(bb.lobbyName), Yb = (0, Wb.R)(bb.lobbyName)
        } catch (Zb) {
          return void this.onError(Zb)
        }
        const eb = {
          localPlayerId: String(bb)
        };
        let vb = {},
          Lb = {};
        try {
          var Pb, Xb;
          vb = null !== (Pb = null === (Xb = this.options.gameFactory((0, Nb.Gb)(Mb))) || void 0 === Xb ? void 0 : Xb(Yb, Eb, Tb, eb)) && void 0 !== Pb ? Pb : {}
        } catch (Zb) {
          this.GX(Zb)
        }
        try {
          var jb, Rb;
          Lb = {
            ...null === (jb = (Rb = this.options).defaultPlugins) || void 0 === jb ? void 0 : jb.call(Rb, Yb, Eb, Tb, eb),
            ...vb.plugins
          }
        } catch (Zb) {
          this.GX(Zb)
        }
        const kb = [vb, ...Object.values(Lb)];
        this.owners = kb, this.tickers = kb.filter((bb => void 0 !== bb.qL)), this.renderers = kb.filter((bb => void 0 !== bb.onAfterRender)), this.receivers = kb.filter((bb => void 0 !== bb.onReceivedMessageFromServer)), this.writeAltVeto(kb), this.writeHooks(kb), this.writePublicLobby(Yb), this.writeLocalDbId(null !== (ab = null === (Ub = this.session) || void 0 === Ub ? void 0 : Ub.playerDbId) && void 0 !== ab ? ab : null), this.boundId = bb, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(kb, (bb => {
          var ab;
          null === (ab = bb.onCreate) || void 0 === ab || ab.call(bb, this.clientApi)
        }));
        const yb = this.generation;
        setTimeout((() => {
          yb === this.generation && !0 === this.tables.getClientOption("creative") && eA(this.tables)
        }), 0)
      }
      chunkSlot(bb, ab, Ub, Ab, Mb, Tb) {
        this.chunks.apply(bb, ab, Ub, Ab, Mb, Tb)
      }
      entityAdded(bb) {
        var ab;
        this.entityInfo.stale(bb), null === (ab = this.options.replayEntities) || void 0 === ab || ab.entityAdded(bb)
      }
      entityInfoChanged(bb) {
        var ab;
        this.entityInfo.stale(bb), null === (ab = this.options.replayEntities) || void 0 === ab || ab.entityInfoChanged(bb)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const bb = performance.now();
          this.round(this.tickers, QA), (0, aA.e)(performance.now() - bb)
        }
      }
      afterWalk(bb) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const ab = this.options.replayEntities;
        ab && this.guard((() => {
          this.entityInfoWatch.want(lU, ab.wantsWatch), ab.flush(this.entityInfoWatch.on)
        }));
        const Ub = (0, aA.k)(bb, jb.t.frameMs(this.api.apiView, 0));
        if (null !== Ub) {
          const bb = this.renderFrame;
          this.guard((() => {
            (0, VU.c)().turnDamageIndicators(bb.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Ub)
          })), this.round(this.renderers, (ab => {
            ab.onAfterRender(Ub, bb)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Ub)
        } catch (Mb) {
          this.GX(Mb)
        }
        this.showZoom(), this.items.flush(this.GX), this.writePromptWatch(), this.writeCustomButtons();
        const Ab = this.ticks;
        this.ticks = 0, (0, aA.h)(Ab, bb, Ub, this.GX)
      }
      entityRemoved(bb) {
        this.live.despawned(bb), this.entityInfo.removed(bb)
      }
      ackEventOverflow() {
        const bb = this.api.apiView,
          ab = jb.t.eventOverflowGen(bb, 0),
          Ub = ab - this.overflowGen >>> 0;
        if (0 === Ub && !this.resyncOwed) return;
        this.overflowGen = ab;
        const Ab = jb.t.eventOverflowMask(bb, 0),
          Mb = this.cmd;
        0 === Ab || null === Mb || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, jb.te)(Mb, 0, Ab);
        const Tb = this.options.onEventOverflow;
        0 !== Ub && Tb && this.guard((() => {
          Tb(Ab, Ub)
        }))
      }
      gameCall(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        if (bb === jb.cc.Director) try {
          return this.scriptedCamera.call(ab, Ub, Ab, Mb, Tb, Eb)
        } catch (eb) {
          return this.GX(eb), jb.lb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return bb === jb.cc.AltVeto ? jb.n.Allow : 0;
        try {
          return this.callGames(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb)
        } catch (eb) {
          throw (0, Xb.g)(eb) && (this.fault = eb), eb
        }
      }
      takeFault() {
        const bb = this.fault;
        return this.fault = void 0, bb
      }
      callGames(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Bb
        } = this.options, eb = String(this.boundId);
        switch (bb) {
          case jb.cc.AltVeto:
          case jb.cc.AltAction: {
            const Yb = 0 !== Eb,
              [vb, Lb, Pb] = Yb ? [ab, Ub, Ab] : [void 0, void 0, void 0],
              Xb = Yb ? Bb.nameOfId(Mb) : "Air",
              Rb = GA(Tb);
            if (bb === jb.cc.AltAction) return this.first((bb => {
              var ab;
              return null === (ab = bb.onPlayerAltAction) || void 0 === ab ? void 0 : ab.call(bb, eb, vb, Lb, Pb, Xb, Rb)
            })), 0;
            const kb = this.first((bb => {
              var ab;
              return null === (ab = bb.onPlayerAttemptAltAction) || void 0 === ab ? void 0 : ab.call(bb, eb, vb, Lb, Pb, Xb, Rb)
            }));
            return "preventAction" === kb ? jb.n.Prevent : "preventPlacement" === kb ? jb.n.PreventPlacement : jb.n.Allow
          }
          case jb.cc.Click: {
            const bb = Yb,
              vb = 0 !== (bb & jb.P.Alt),
              Lb = 0 !== (bb & jb.P.HasPos),
              Pb = Lb ? Bb.nameOfId(Mb) : "Air",
              [Xb, Rb, kb] = Lb ? [ab, Ub, Ab] : [null, null, null],
              yb = GA(Tb),
              Zb = 0 !== (bb & jb.P.Up),
              Db = GA(Eb);
            if (0 === (bb & jb.P.AttackOnly) && this.first((bb => {
                var ab, Ub;
                return Zb ? null === (ab = bb.onPlayerClickUp) || void 0 === ab ? void 0 : ab.call(bb, eb, vb, Xb, Rb, kb, Pb, yb) : null === (Ub = bb.onPlayerClick) || void 0 === Ub ? void 0 : Ub.call(bb, eb, vb, Xb, Rb, kb, Pb, yb)
              })), !Zb && !vb && null !== Db) {
              const bb = this.clientApi.getPositionView(Db),
                ab = bb ? [bb[0], bb[1], bb[2]] : [0, 0, 0];
              this.first((bb => {
                var Ub;
                return null === (Ub = bb.onPlayerAttackEntity) || void 0 === Ub ? void 0 : Ub.call(bb, eb, Db, ab)
              }))
            }
            return 0
          }
          case jb.cc.ChangeBlock: {
            const bb = Bb.nameOfId(Mb),
              Eb = Bb.nameOfId(Tb);
            return this.first((Mb => {
              var Tb;
              return null === (Tb = Mb.onPlayerChangeBlock) || void 0 === Tb ? void 0 : Tb.call(Mb, eb, ab, Ub, Ab, bb, Eb)
            })), 0
          }
          case jb.cc.DropItem: {
            const bb = Bb.nameOfId(ab);
            return this.first((ab => {
              var Mb;
              return null === (Mb = ab.onPlayerDropItem) || void 0 === Mb ? void 0 : Mb.call(ab, eb, bb, Ub, Ab)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${bb}`)), 0
        }
      }
      changeBlockFail(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = Mb === jb.Nc ? null : WA.decode(this.api.eventBytes(Tb, Math.min(Mb, Eb)));
        this.failures.push({
          dT: [bb, ab, Ub],
          FT: Ab,
          hT: Yb
        })
      }
      changeBlockFailEnd() {
        const bb = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (ab => {
          var Ub;
          null === (Ub = ab.onChangeBlockFail) || void 0 === Ub || Ub.call(ab, bb)
        })), this.IR("EditBoard", {
          pos: null
        }), this.IR("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(bb, ab, Ub, Ab, Mb, Tb) {
        bb === jb.sc.ChestOpened ? this.items.chestOpened(Ub, Ab, Mb) : bb !== jb.sc.Synced && bb !== jb.sc.ChestClosed && bb !== jb.sc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(bb, ab, Ub, Ab) {
            switch (bb) {
              case jb.sc.Synced:
                Eb.m.IR("syncedInvenFromServer");
                break;
              case jb.sc.ChestOpened:
              case jb.sc.ChestClosed:
                Eb.m.IR("chestToggleFromServer", bb === jb.sc.ChestOpened, !0);
                break;
              case jb.sc.ChestRefreshed:
                Eb.m.IR("chestRefreshedFromServer");
                break;
              case jb.sc.EnchantingTable:
                Eb.m.IR("enchantingTable", {
                  Av: Ab,
                  position: Ub
                });
                break;
              case jb.sc.HotbarRequest:
                Eb.m.IR("setSelectedInventorySlotI", ab, !0);
                break;
              case jb.sc.Scrolled:
                Eb.m.IR("ScrollInventorySlot", ab);
                break;
              case jb.sc.NumberKey:
                Eb.m.IR("numkeyPressed", ab + 1);
                break;
              case jb.sc.DropRequested:
                Eb.m.IR("DropInvenItem", 0 !== ab);
                break;
              default:
                throw new Xb.e(`InventoryEvent of no kind: what ${bb}`)
            }
          }(bb, ab, [Ub, Ab, Mb], Tb)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(bb, ab, Ub, Ab) {
        this.IR("shotPlayer", {
          playerId: String(bb),
          damage: ab,
          wasCrit: 0 !== Ab,
          distance: Ub
        })
      }
      localHurt(bb, ab) {
        this.IR("closeShopOnDamaged", null), this.guard((() => {
          Eb.m.IR("damagedByOtherPlayer", {
            nU: null,
            direction: Number.isNaN(ab) ? null : ab,
            zM: bb
          })
        }))
      }
      attackHit(bb, ab, Ub, Ab, Mb) {
        this.guard((() => {
          Eb.m.IR("yourAttackHit", {
            BU: Ab,
            screenPos: this.renderFrame.projectDirectionToScreenPos([bb, ab, Ub]),
            hitSelf: Mb
          })
        }))
      }
      physicsType(bb) {
        this.IR("PlayerPhysicsTypeUpdate", bb)
      }
      vehicleEffect(bb, ab, Ub, Ab, Mb) {
        this.guard((() => {
          bb === Pb.nd.UPDATE ? (0, db.j)(ab, {
            icon: Ub,
            level: Ab,
            displayName: null,
            durationMs: Mb
          }) : Ib.c.remove(ab)
        }))
      }
      zoomChanged(bb) {
        this.zoom = bb, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.IR("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const bb = this.scriptedCamera.holdsView();
        !this.zoomUnshown || bb && this.zoomHeld || (this.zoomUnshown = !1, this.IR("cameraZoomSet", this.zoom)), this.zoomHeld = bb
      }
      gunHit(bb) {
        this.guard((() => {
          const {
            nU: ab,
            SU: Ub
          } = (0, RA.c)(kA.o, bb);
          Eb.m.IR("damagedByOtherPlayer", {
            nU: ab,
            direction: Ub
          })
        }))
      }
      uiEvent(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        this.guard((() => {
          OU(bb, ab, [Ub, Ab, Mb], Tb, this.items, this.options.tables, (() => WA.decode(this.api.eventBytes(Eb, Yb))))
        }))
      }
      writeAltVeto(bb) {
        const ab = this.cmd;
        if (!ab) return;
        let Ub;
        try {
          Ub = function(bb, ab) {
            const Ub = new Set;
            let Ab = !1;
            for (const Mb of bb)
              if (Mb.onPlayerAttemptAltAction) {
                if (Ab = !0, !Mb.altVetoBlocks) return {
                  mode: jb.de.All,
                  roots: []
                };
                for (const bb of Mb.altVetoBlocks) Ub.add(ab.getMetaInfo(bb).rootId)
              } return Ab ? Ub.size > jb.Dc ? {
              mode: jb.de.All,
              roots: []
            } : {
              mode: jb.de.Filter,
              roots: [...Ub]
            } : {
              mode: jb.de.Off,
              roots: []
            }
          }(bb, this.options.tables)
        } catch (Mb) {
          this.onError(Mb), Ub = {
            mode: jb.de.All,
            roots: []
          }
        }
        if (Ub.mode === jb.de.Off && !this.vetoSet) return;
        const Ab = new Uint8Array(new Uint32Array(Ub.roots).buffer);
        (0, jb.Hf)(ab, 0, Ub.mode, Ub.roots.length, Ab) ? this.vetoSet = Ub.mode !== jb.de.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(bb) {
        const ab = this.cmd;
        if (!ab) return;
        const Ub = function(bb) {
          let ab = 0;
          for (const Ub of bb) Ub.onPlayerAltAction && (ab |= 1 << jb.cc.AltAction), (Ub.onPlayerClick || Ub.onPlayerClickUp || Ub.onPlayerAttackEntity) && (ab |= 1 << jb.cc.Click), Ub.onPlayerChangeBlock && (ab |= 1 << jb.cc.ChangeBlock), Ub.onPlayerDropItem && (ab |= 1 << jb.cc.DropItem);
          return ab
        }(bb);
        (0 !== Ub || this.hooksSet) && ((0, jb.Sf)(ab, 0, Ub) ? this.hooksSet = 0 !== Ub : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const bb = this.cmd;
        bb && !this.stopped() && this.customButtons.write(bb)
      }
      writePromptWatch() {
        const bb = this.cmd,
          ab = this.promptWatch;
        ab !== this.promptWatchSent && bb && !this.stopped() && (0, jb.sg)(bb, 0, FA[ab]) && (this.promptWatchSent = ab)
      }
      writePublicLobby(bb) {
        const ab = this.cmd;
        ab && bb !== this.writtenPublicLobby && ((0, jb.cg)(ab, 0, bb ? 1 : 0) ? this.writtenPublicLobby = bb : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(bb) {
        const ab = this.cmd;
        ab && ((0, jb.Vf)(ab, 0, null === bb ? 0 : 1, null === bb ? IA : HA.encode(bb)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(bb) {
        const ab = this.generation;
        for (const Ab of this.owners) {
          if (ab !== this.generation) break;
          try {
            const ab = bb(Ab);
            if (void 0 !== ab) return ab
          } catch (Ub) {
            this.GX(Ub)
          }
        }
      }
      IR(bb, ab) {
        this.guard((() => {
          Eb.m.IR(bb, ab)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (bb) {
          this.GX(bb)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (bb) {
          this.GX(bb)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const bb = this.owners;
        let ab;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Ab) {
          ab = Ab
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Ab) {
          ab ??= Ab
        }
        this.round(bb, qA, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Ab) {
          ab ??= Ab
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Ab) {
          ab ??= Ab
        }
        const Ub = this.options.onSessionEnd;
        if (Ub) try {
          Ub()
        } catch (Ab) {
          this.onError(Ab)
        }
        void 0 !== ab && this.GX(ab)
      }
      round(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = this.generation;
        for (const Tb of bb) {
          if (Ab !== this.generation) break;
          try {
            ab(Tb)
          } catch (Mb) {
            Ub ? this.onError(Mb) : this.GX(Mb)
          }
        }
      }
      guard(bb) {
        try {
          bb()
        } catch (ab) {
          this.GX(ab)
        }
      }
    }

    function GA(bb) {
      return bb === jb.Qc ? null : String(bb)
    }

    function QA(bb) {
      bb.qL(Pb.gd)
    }

    function qA(bb) {
      var ab;
      null === (ab = bb.onClose) || void 0 === ab || ab.call(bb)
    }

    function uA(bb, ab) {
      bb.watch((() => {
        const Ub = function(bb) {
          let ab = 0;
          const Ub = Math.min(UA, bb.length);
          for (let Mb = 0; Mb < Ub; Mb++) {
            var Ab;
            const Ub = null === (Ab = bb.slot(Mb)) || void 0 === Ab ? void 0 : Ab.typeObj,
              Tb = Ub ? (0, bA.gunTypeOf)(Ub.id) : void 0;
            void 0 !== Tb && (ab |= 1 << Da[Tb])
          }
          return ab
        }(bb);
        0 !== Ub && (ab.preload(Ub), ab.preload(1 << za))
      }))
    }
    var rA = Ub(4546),
      KA = Ub(36108);

    function oA(bb) {
      const ab = new rA.Howl({
          ...(0, KA.i)(bb),
          pool: 15,
          preload: !1
        }),
        Ub = ab.load.bind(ab);
      return ab.load = () => (ab._preload = !0, Ub()), ab
    }

    function lA(bb, ab, Ub) {
      const Ab = bb.listener;
      if (Ab.positionX) tA(Ab.positionX, ab, Ub, 0), tA(Ab.positionY, ab, Ub, 1), tA(Ab.positionZ, ab, Ub, 2), tA(Ab.forwardX, ab, Ub, 3), tA(Ab.forwardY, ab, Ub, 4), tA(Ab.forwardZ, ab, Ub, 5), tA(Ab.upX, ab, Ub, 6), tA(Ab.upY, ab, Ub, 7), tA(Ab.upZ, ab, Ub, 8);
      else {
        let bb = !1;
        for (let Ab = 0; Ab < 9; Ab++) bb ||= ab[Ab] !== Ub[Ab];
        bb && (Ab.setPosition(ab[0], ab[1], ab[2]), Ab.setOrientation(ab[3], ab[4], ab[5], ab[6], ab[7], ab[8]), Ub.set(ab))
      }
    }

    function tA(bb, ab, Ub, Ab) {
      ab[Ab] !== Ub[Ab] && (bb.value = ab[Ab], Ub[Ab] = ab[Ab])
    }
    class wA {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(bb) {
        this.pose.set(bb);
        const ab = rA.Howler.ctx;
        return !!ab && (ab !== this.watchedCtx && (this.watchedCtx = ab, this.written.fill(Number.NaN), ab.addEventListener("statechange", (() => {
          "running" === ab.state && lA(ab, this.pose, this.written)
        }))), "running" === ab.state && lA(ab, bb, this.written), !0)
      }
    }
    var sA = Ub(35990),
      gA = Ub(38487);
    let CA = null,
      VA = null;

    function OA() {
      return null === CA && (CA = document.createElement("div"), CA.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(CA)), CA
    }

    function cA() {
      return VA ??= new gA.d(new sA.b(OA)), VA
    }

    function JA() {
      var bb;
      null === (bb = VA) || void 0 === bb || bb.clear(), nA(null)
    }

    function nA(bb) {
      Ab.c.get("scriptedCameraFacing") !== bb && Ab.c.set({
        scriptedCameraFacing: bb
      })
    }
    var SA = Ub(9094),
      bM = Ub(9043),
      aM = Ub(38506),
      UM = Ub(39859),
      AM = Ub(2989);
    const MM = Object.entries(jb.ac).reduce(((bb, ab) => {
      let [Ub, Ab] = ab;
      return bb[Ab] = Ub, bb
    }), []);

    function TM(bb, ab) {
      var Ub;
      return 0 !== ((null !== (Ub = bb.itemFlags[ab]) && void 0 !== Ub ? Ub : 0) & jb.tc.Stackable)
    }
    const EM = /^(0|[1-9][0-9]*)$/,
      YM = {
        displayName: (bb, ab) => (0, bA.displayNameOf)(ab),
        description: (bb, ab) => (0, bA.descriptionOf)(ab),
        type: (bb, ab) => (0, bA.itemTypeOf)(ab),
        clipSize: (bb, ab) => (0, bA.clipSizeOf)(ab),
        armourReduction: (bb, ab) => (0, bA.armourReductionOf)(ab),
        scopeType: (bb, ab) => (0, bA.scopeTypeOf)(ab),
        stackable: TM,
        harvestType: (bb, ab) => MM[bb.blockHarvestTypes[ab]],
        harvestLevel: (bb, ab) => {
          const Ub = bb.blockHarvestLevels[ab];
          return Ub === jb.xc ? void 0 : Ub
        },
        harvests: (bb, ab) => {
          var Ub;
          const Ab = null !== (Ub = bb.itemHarvests[ab]) && void 0 !== Ub ? Ub : 0;
          return 0 !== Ab ? MM[Ab] : void 0 === (0, bA.harvestsNullLevelOf)(ab) ? void 0 : null
        },
        level: (bb, ab) => {
          var Ub, Ab;
          const Mb = null !== (Ub = bb.itemLevels[ab]) && void 0 !== Ub ? Ub : jb.xc;
          return Mb !== jb.xc ? Mb : null !== (Ab = (0, bA.harvestsNullLevelOf)(ab)) && void 0 !== Ab ? Ab : void 0
        }
      };

    function BM(bb, ab, Ub) {
      return vM(new Uint8Array(Math.floor(bb.length / ab)), bb, ab, Ub)
    }

    function eM(bb, ab, Ub) {
      return vM(new Uint16Array(Math.floor(bb.length / ab)), bb, ab, Ub)
    }

    function vM(bb, ab, Ub, Ab) {
      const Mb = new DataView(ab.buffer, ab.byteOffset, ab.byteLength);
      for (let Tb = 0; Tb < bb.length; Tb++) bb[Tb] = Ab(Mb, Tb * Ub);
      return bb
    }
    class LM {
      constructor(bb, ab) {
        this.options = ab, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = bb => {
          const ab = this.idOf(bb);
          if (void 0 === ab) throw new Error(`No item is named ${bb}, an item's root`);
          return ab
        };
        const Ub = ab => {
            const Ub = ab();
            return new Uint8Array(bb.memory().buffer, bb.scratch(), Ub).slice()
          },
          Ab = (new TextDecoder).decode(Ub((() => bb.queries.itemNames()))).split("\n"),
          Mb = Ub((() => bb.queries.blockProps())),
          Tb = Ub((() => bb.queries.itemProps()));
        this.props = {
          blockFlags: BM(Mb, jb.y.BYTES, jb.y.flags),
          blockHarvestTypes: BM(Mb, jb.y.BYTES, jb.y.harvestType),
          blockHarvestLevels: BM(Mb, jb.y.BYTES, jb.y.harvestLevel),
          blockAttachedTops: eM(Mb, jb.y.BYTES, jb.y.attachedTop),
          itemFlags: BM(Tb, jb.uc.BYTES, jb.uc.flags),
          itemHarvests: BM(Tb, jb.uc.BYTES, jb.uc.harvests),
          itemLevels: BM(Tb, jb.uc.BYTES, jb.uc.level)
        }, (0, AM.p)(Object.freeze(Ab)), (0, UM.h)()
      }
      idOf(bb) {
        if ("number" === typeof bb) return void 0 === (0, AM.h)(bb) ? void 0 : bb;
        const ab = (0, AM.d)(bb);
        return void 0 === ab && EM.test(bb) ? void 0 === (0, AM.h)(+bb) ? void 0 : +bb : ab
      }
      getMetaInfo(bb) {
        if (!bb || bb === SA.c) return SA.f;
        const ab = this.idOf(bb);
        if (void 0 === ab) throw new Error(`Item ${bb} not found in registry`);
        return this.metaOf(ab)
      }
      blockRootId(bb) {
        return 0 !== bb && void 0 !== (0, AM.h)(bb) ? this.metaOf(bb).rootId : bb
      }
      metaOf(bb) {
        return this.metas[bb] ??= (0, bM.n)((0, AM.h)(bb), bb, this.rootIdOf, (0, bA.rootMetaDescOf)(bb))
      }
      getItemId(bb) {
        if (!bb || bb === SA.c) return 0;
        const ab = this.idOf(bb);
        if (void 0 === ab) throw new Error(`Invalid block name. You sent ${bb}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return ab
      }
      getItemName(bb) {
        if (!bb || bb === SA.c) return SA.c;
        const ab = this.idOf(bb);
        if (void 0 === ab) throw new Error(`Item ${bb} not found in registry`);
        return (0, AM.h)(ab)
      }
      blockNameToBlockId(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (bb === SA.c) return 0;
        let Ub = this.idOf(bb);
        if (void 0 === Ub || !this.isBlockId(Ub)) {
          const ab = bb.indexOf("|"),
            Ab = ab > 0 ? (0, AM.d)(bb.slice(0, ab)) : void 0;
          Ub = void 0 !== Ab && this.isBlockId(Ab) && (0, bA.rootMetaDescOf)(Ab) === bb ? Ab : void 0
        }
        if (void 0 !== Ub) return Ub;
        if (!ab) throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(bb) {
        return bb > 0 && bb < this.props.blockFlags.length
      }
      nameOfId(bb) {
        return 0 !== bb && (0, AM.h)(bb) || SA.c
      }
      itemType(bb) {
        const ab = bb ? this.idOf(bb) : void 0;
        if (!ab) return null;
        let Ub = this.types.get(ab);
        return void 0 === Ub && (Ub = Object.freeze({
          id: ab,
          name: (0, AM.h)(ab),
          meta: this.getMetaInfo(ab),
          stackable: TM(this.props, ab),
          type: (0, bA.itemTypeNameOf)(ab),
          clipSize: (0, bA.clipSizeOf)(ab),
          scopeType: (0, bA.scopeTypeOf)(ab),
          showsAimingUi: (0, bA.showsAimingUi)(ab)
        }), this.types.set(ab, Ub)), Ub
      }
      getItemStat(bb, ab) {
        if (aM.b.has(ab)) {
          const Ub = "minChargeStateToUse" === ab ? this.getMetaInfo(bb).rootName : this.getItemName(bb),
            Ab = this.options.get((0, aM.e)(Ub, ab));
          if (null !== Ab && void 0 !== Ab) return Ab
        }
        return this.defaultStat(bb, ab, this.statOf(ab))
      }
      getDisplayName(bb) {
        return this.getItemStat(bb, "displayName")
      }
      getDefaultItemStat(bb, ab) {
        return this.defaultStat(bb, ab, this.statOf(ab))
      }
      statOf(bb) {
        const ab = YM[bb];
        return void 0 === ab && function(bb, ab) {
          throw new Error(`ClientApi.${bb} is not available yet in the wasm client (${ab})`)
        }(`getItemStat("${bb}")`, `a table of the stat: the wasm client answers ${Object.keys(YM).join(", ")}`), ab
      }
      defaultStat(bb, ab, Ub) {
        const Ab = this.idOf(bb),
          Mb = void 0 === Ab ? void 0 : Ub(this.props, Ab);
        return null !== Mb && void 0 !== Mb || "displayName" !== ab ? Mb : this.getItemName(bb)
      }
      getClientOption(bb) {
        return this.options.get(bb)
      }
      getGunStats(bb) {
        return this.getClientOption(`${bb}GunStats`)
      }
      watchClientOption(bb, ab) {
        return this.options.subscribe(bb, ab)
      }
      isSolidBlockId(bb) {
        var ab;
        return 0 !== ((null !== (ab = this.props.blockFlags[bb]) && void 0 !== ab ? ab : 0) & jb.x.Solid)
      }
      isStackableId(bb) {
        return TM(this.props, bb)
      }
      isFluidBlockId(bb) {
        var ab;
        return 0 !== ((null !== (ab = this.props.blockFlags[bb]) && void 0 !== ab ? ab : 0) & jb.x.Fluid)
      }
      canPlaceOverBlockId(bb) {
        var ab;
        return 0 !== ((null !== (ab = this.props.blockFlags[bb]) && void 0 !== ab ? ab : 0) & jb.x.PlaceOver)
      }
      attachedTopOf(bb) {
        var ab;
        return null !== (ab = this.props.blockAttachedTops[bb]) && void 0 !== ab ? ab : 0
      }
      isDroplessBlockId(bb) {
        return (0, bA.dropsNothing)(bb)
      }
    }

    function PM(bb, ab) {
      const Ub = new Map;
      return (Ab, Mb) => {
        const Tb = ab.idOf(Ab),
          Eb = void 0 === Tb ? null : (Ab => {
            let Mb = Ub.get(Ab);
            if (void 0 === Mb) {
              const Tb = bb.queries.salvageRecipe(Ab),
                Eb = new DataView(bb.memory().buffer, bb.scratch(), Tb),
                Yb = [];
              for (let bb = 0; bb + jb.Sd.BYTES <= Tb; bb += jb.Sd.BYTES) Yb.push(Object.freeze({
                item: ab.nameOfId(jb.Sd.item(Eb, bb)),
                amt: jb.Sd.amount(Eb, bb)
              }));
              Mb = 0 === Yb.length ? null : Object.freeze(Yb), Ub.set(Ab, Mb)
            }
            return Mb
          })(Tb);
        if (null === Eb || void 0 === Mb) return Eb;
        const Yb = Mb <= 0 ? 1 : Mb;
        return Eb.map((bb => {
          let {
            item: ab,
            amt: Ub
          } = bb;
          return {
            item: ab,
            amt: Ub * Yb
          }
        }))
      }
    }
    var XM = Ub(40032),
      jM = Ub(36283),
      RM = Ub(36271),
      kM = Ub(36321),
      yM = Ub(35935),
      ZM = Ub(39803),
      DM = Ub(41671);
    const zM = -1,
      xM = new Uint8Array(0),
      iM = new TextEncoder;

    function fM(bb) {
      if (null === bb) return null;
      const ab = iM.encode(bb);
      return ab.byteLength < Pb.vc ? ab : ab.subarray(0, Pb.vc - 1)
    }
    class mM {
      constructor(bb) {
        this.deps = bb, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = zM, this.keyframesSettled = !1, this.reloadFrom = zM
      }
      reloadKeyframes() {
        var bb, ab;
        this.keyframesVersion = zM, this.reloadFrom = null !== (bb = null === (ab = this.view()) || void 0 === ab ? void 0 : ab.version) && void 0 !== bb ? bb : zM
      }
      setPlayback(bb) {
        const ab = 1 === this.deps.core.TMb(bb);
        return ab && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = zM, this.reloadFrom = zM), ab
      }
      async open(bb) {
        const ab = await this.deps.replay.open(bb);
        return "opening" === ab && (this.reloadKeyframes(), this.deps.recorder.prefetch()), ab
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(bb)), ab)
      }
      setSpeed(bb) {
        this.deps.replay.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.replay.setCameraMode(DM.b.indexOf(bb))
      }
      view() {
        var bb;
        const ab = jb.t.replayViewPtr(this.deps.apiView(), 0);
        if (0 === ab) return this.lastView = null, null;
        const Ub = new DataView(this.deps.buffer(), ab, jb.Jd.BYTES),
          Ab = jb.Jd.version(Ub, 0),
          Mb = this.lastView;
        if (null !== Mb && Mb.version === Ab) return Mb;
        const Tb = jb.Jd.markIn(Ub, 0),
          Eb = {
            version: Ab,
            state: jb.Jd.state(Ub, 0),
            cameraMode: null !== (bb = DM.b[jb.Jd.cameraMode(Ub, 0)]) && void 0 !== bb ? bb : "recording",
            qL: jb.Jd.qL(Ub, 0),
            totalTicks: jb.Jd.totalTicks(Ub, 0),
            speed: jb.Jd.speed(Ub, 0),
            mark: Tb === jb.Hd ? null : {
              inTick: Tb,
              outTick: jb.Jd.markOut(Ub, 0)
            },
            editVersion: jb.Jd.editVersion(Ub, 0)
          };
        return this.lastView = Eb, Eb
      }
      keyframes() {
        const bb = this.view();
        if (null === bb) return [];
        bb.version !== this.reloadFrom && (this.reloadFrom = zM);
        const ab = this.reloadFrom === zM && bb.state !== Pb.$c.Cropping && bb.state !== Pb.$c.None,
          Ub = ab ? bb.editVersion : bb.version;
        if (Ub === this.keyframesVersion && ab === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Ab
        } = this.deps, Mb = Ab.EMb(), Tb = Ab.Bk(), Eb = [];
        if (0 !== Tb && Mb > 0) {
          const bb = new DataView(this.deps.buffer(), Tb, Mb * Pb.ic);
          for (let ab = 0; ab < Mb; ab++) {
            const Ub = ab * Pb.ic,
              Ab = ab => bb.getFloat64(Ub + ab, !0);
            Eb.push({
              qL: bb.getUint32(Ub + Pb.sc, !0),
              position: [Ab(Pb.qc), Ab(Pb.qc + 8), Ab(Pb.qc + 16)],
              direction: [Ab(Pb.kc), Ab(Pb.kc + 8), Ab(Pb.kc + 16)],
              easing: [Ab(Pb.oc), Ab(Pb.oc + 8), Ab(Pb.oc + 16), Ab(Pb.oc + 24)]
            })
          }
        }
        return this.keyframesVersion = Ub, this.keyframesSettled = ab, this.lastKeyframes = Eb, Eb
      }
      addKeyframe() {
        const bb = this.deps.apiView(),
          ab = [jb.t.eye(bb, 0, 0), jb.t.eye(bb, 0, 1), jb.t.eye(bb, 0, 2)];
        return this.deps.replay.addKeyframe(ab, function(bb, ab) {
          const Ub = Math.cos(ab);
          return [Ub * Math.sin(bb), -Math.sin(ab), Ub * Math.cos(bb)]
        }(jb.t.heading(bb, 0), jb.t.pitch(bb, 0)))
      }
      setKeyframe(bb) {
        return this.deps.replay.setKeyframe(bb.qL, Float64Array.from([...bb.position, ...bb.direction, ...bb.easing]))
      }
      moveKeyframe(bb, ab) {
        return this.deps.replay.moveKeyframe(bb, ab)
      }
      deleteKeyframes(bb, ab) {
        return this.deps.replay.deleteKeyframes(bb, ab)
      }
      setMark(bb) {
        var ab, Ub;
        return this.deps.replay.setMark(null !== (ab = null === bb || void 0 === bb ? void 0 : bb.inTick) && void 0 !== ab ? ab : -1, null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.outTick) && void 0 !== Ub ? Ub : -1)
      }
      crop(bb, ab) {
        const Ub = this.deps.replay.crop(bb, ab);
        return Ub && this.reloadKeyframes(), Ub
      }
      save(bb) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(bb)
      }
      recorderControl(bb) {
        this.deps.recorder.control(bb)
      }
      recorderPrefs(bb, ab) {
        this.deps.recorder.prefs(bb, ab)
      }
      recorderOption(bb, ab) {
        const Ub = this.deps.cmd();
        return null !== Ub && (0, jb.uf)(Ub, 0, bb, null === ab ? xM : iM.encode(ab))
      }
      recordFlyingText(bb, ab, Ub, Ab) {
        const Mb = this.deps.cmd(),
          Tb = Math.max(0, Math.min(4294967295, Math.round(Ab)));
        return null !== Mb && (0, jb.rf)(Mb, 0, ab, Ub, Tb, iM.encode(bb))
      }
      recordPlayerKilled(bb, ab, Ub, Ab) {
        const Mb = this.deps.cmd();
        return null !== Mb && (0, jb.wf)(Mb, 0, bb, ab, Math.max(0, Ub), iM.encode(Ab))
      }
      recordKillfeed(bb, ab, Ub) {
        var Ab, Mb;
        const Tb = this.deps.cmd(),
          Eb = function(bb) {
            const ab = bb.reduce(((bb, ab) => {
                var Ub;
                return bb + sU.jb + (null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.byteLength) && void 0 !== Ub ? Ub : 0)
              }), 0),
              Ub = new Uint8Array(ab),
              Ab = new DataView(Ub.buffer);
            let Mb = 0;
            for (const Eb of bb) {
              var Tb;
              Ab.setUint16(Mb, null !== (Tb = null === Eb || void 0 === Eb ? void 0 : Eb.byteLength) && void 0 !== Tb ? Tb : Pb.vc, !0), Mb += sU.jb, null !== Eb && (Ub.set(Eb, Mb), Mb += Eb.byteLength)
            }
            return Ub
          }([fM(bb.name), fM(bb.colour), fM(ab.name), fM(ab.colour), fM(Ub)]);
        return null !== Tb && (0, jb.sf)(Tb, 0, null !== (Ab = bb.id) && void 0 !== Ab ? Ab : jb.Tc, null !== (Mb = ab.id) && void 0 !== Mb ? Mb : jb.Tc, Eb)
      }
      recorderSession(bb, ab) {
        this.deps.recorder.session({
          session: ab,
          lobbyType: bb.lobbyType,
          game: bb.gameNameWithVariation,
          lobby: bb.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.YMb()
      }
      filePartDone(bb, ab) {
        this.deps.recorder.filePartDone(bb, ab)
      }
      fileDone(bb) {
        this.deps.recorder.fileDone(bb)
      }
    }
    const pM = -2147483648;
    class NM {
      constructor(bb) {
        var ab;
        this.deps = bb, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (ab = bb.now) && void 0 !== ab ? ab : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var bb, ab, Ub;
        return null === (bb = null === (ab = (Ub = this.deps).live) || void 0 === ab ? void 0 : ab.call(Ub)) || void 0 === bb || bb
      }
      activated(bb) {
        var ab, Ub;
        this.live && (this.viewerShown(!0 === (null === (ab = (Ub = this.deps).viewerOpen) || void 0 === ab ? void 0 : ab.call(Ub))), this.deps.client.recorderSession(bb, (0, DM.c)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var bb, ab;
        this.live && (this.state.recording || !0 !== (null === (bb = (ab = this.deps).viewerOpen) || void 0 === bb ? void 0 : bb.call(ab))) ? this.deps.client.recorderControl(Pb.Mc.ToggleRecording) : this.deps.notify(kM.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Pb.Mc.SaveClip) : this.deps.notify(kM.c.clippingNotOn)
      }
      viewerShown(bb) {
        this.live && this.deps.client.recorderControl(bb ? Pb.Mc.ViewerOpened : Pb.Mc.ViewerClosed)
      }
      setPrefs(bb, ab) {
        this.live && this.deps.client.recorderPrefs(bb, ab)
      }
      setOption(bb, ab) {
        this.live && this.deps.client.recorderOption(bb, ab)
      }
      recordFlyingText(bb, ab, Ub, Ab) {
        this.live && this.deps.client.recordFlyingText(bb, ab, Ub, Ab)
      }
      recordPlayerKilled(bb, ab, Ub, Ab) {
        this.live && this.deps.client.recordPlayerKilled(bb, ab, Ub, Ab)
      }
      recordKillfeed(bb, ab, Ub) {
        this.live && this.deps.client.recordKillfeed(bb, ab, Ub)
      }
      qL() {
        let bb = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, bb = {
            ...bb,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const ab = Math.floor((this.now() - this.recordingSince) / 1e3);
          ab !== bb.seconds && (bb = {
            ...bb,
            seconds: ab
          })
        }
        this.set(bb)
      }
      onEvent(bb) {
        var ab, Ub;
        const {
          notify: Ab
        } = this.deps, Mb = kM.c;
        switch (bb.what) {
          case Pb.Ic.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Ab(Mb.recordingStarted);
            break;
          case Pb.Ic.RecordingStopped:
            this.stopRecording(), Ab(Mb.recordingStopped), this.saveState(Pb.Vc.Recording, "saving");
            break;
          case Pb.Ic.RecordingDiscarded:
            this.stopRecording(), Ab(Mb.recordingDiscarded);
            break;
          case Pb.Ic.RecordingTurnedOff:
            this.stopRecording(), Ab(Mb.recordingTurnedOff);
            break;
          case Pb.Ic.LimitReached:
            Ab(Mb.limitReached);
            break;
          case Pb.Ic.ClipSaved:
            this.saveState(Pb.Vc.Clip, "saving");
            break;
          case Pb.Ic.ClipEmpty:
            Ab(Mb.clipEmpty);
            break;
          case Pb.Ic.ClippingNotOn:
            Ab(Mb.clippingNotOn);
            break;
          case Pb.Ic.Disallowed:
            Ab(Mb.disallowed);
            break;
          case Pb.Ic.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Pb.Ic.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Pb.Ic.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Pb.Ic.SaveBusy:
            null === (ab = (Ub = this.deps).onSaveState) || void 0 === ab || ab.call(Ub, bb.kind, "busy"), Ab(Mb.saveBusy);
            break;
          case Pb.Ic.CloseViewerFirst:
            Ab(Mb.closeViewerFirst)
        }
      }
      fileReady(bb, ab) {
        this.deps.download(ab), this.saveState(bb, "done"), this.deps.notify(bb === Pb.Vc.Clip ? kM.c.clipSaved : kM.c.recordingSaved)
      }
      failed(bb) {
        this.saveState(bb, "failed"), this.deps.notify(bb === Pb.Vc.Clip ? kM.c.clipFailed : kM.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(bb, ab) {
        var Ub, Ab;
        null === (Ub = (Ab = this.deps).onSaveState) || void 0 === Ub || Ub.call(Ab, bb, ab)
      }
      set(bb) {
        bb !== this.state && (this.state = bb, this.deps.onState(bb))
      }
    }
    const WM = new TextDecoder;

    function HM(bb, ab, Ub, Ab) {
      const Mb = [];
      for (let Tb = 0; Tb < Ab; Tb++) {
        if (ab + sU.jb > Ub) return null;
        const Ab = bb.getUint16(ab, !0);
        if (ab += sU.jb, Ab !== Pb.vc) {
          if (ab + Ab > Ub) return null;
          Mb.push(WM.decode(new Uint8Array(bb.buffer, bb.byteOffset + ab, Ab))), ab += Ab
        } else Mb.push(null)
      }
      return ab === Ub ? Mb : null
    }

    function IM(bb, ab) {
      let Ub = new DataView(new ArrayBuffer(0)),
        Ab = !0;
      const Mb = {
        replayFailed: (ab, Ub) => {
          bb.replayFailed({
            reason: ab,
            code: Ub
          })
        },
        replayOption: (ab, Mb, Tb, Eb) => {
          const Yb = function(bb, ab, Ub, Ab) {
            switch (ab) {
              case Pb.Wc.Cleared:
                return 0 === Ab ? null : void 0;
              case Pb.Wc.Text:
                return WM.decode(new Uint8Array(bb.buffer, bb.byteOffset + Ub, Ab));
              case Pb.Wc.Int:
                return Ab === Int32Array.BYTES_PER_ELEMENT ? bb.getInt32(Ub, !0) : void 0;
              case Pb.Wc.Double:
                return Ab === Float64Array.BYTES_PER_ELEMENT ? bb.getFloat64(Ub, !0) : void 0;
              default:
                return
            }
          }(Ub, Mb, Tb, Eb);
          void 0 !== Yb ? bb.replayOption({
            key: ab,
            value: Yb
          }) : Ab = !1
        },
        replayUiEvent: (ab, Mb, Tb, Eb, Yb, Bb) => {
          const eb = function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
            const Yb = Tb + Eb;
            switch (ab) {
              case Pb._c.FlyingText: {
                const Eb = HM(bb, Tb, Yb, 1);
                return null !== Eb && null !== Eb[0] ? {
                  what: ab,
                  WT: Ub,
                  NT: Ab,
                  angle: Mb,
                  contentJson: Eb[0]
                } : null
              }
              case Pb._c.PlayerKilled: {
                const Ab = HM(bb, Tb, Yb, 3);
                return Ab ? {
                  what: ab,
                  killstreak: Ub,
                  dead: Ab[0],
                  killer: Ab[1],
                  withItem: Ab[2]
                } : null
              }
              case Pb._c.Killfeed: {
                const Ub = HM(bb, Tb, Yb, 7);
                return Ub ? {
                  what: ab,
                  killerId: Ub[0],
                  killerName: Ub[1],
                  killerColour: Ub[2],
                  victimId: Ub[3],
                  victimName: Ub[4],
                  victimColour: Ub[5],
                  withItem: Ub[6]
                } : null
              }
              default:
                return null
            }
          }(Ub, ab, Mb, Tb, Eb, Yb, Bb);
          null !== eb ? bb.replayUiEvent(eb) : Ab = !1
        },
        replayFilePart: (Ub, Mb, Tb, Eb) => {
          const Yb = ab();
          Tb + Eb > Yb.byteLength ? Ab = !1 : bb.filePart(Ub, Mb, new Uint8Array(Yb, Tb, Eb).slice())
        },
        replayFileReady: (ab, Ub, Ab, Mb) => {
          bb.fileReady({
            save: ab,
            kind: Ub,
            parts: Ab,
            bytes: Mb
          })
        },
        recorderEvent: (ab, Ub, Ab) => {
          bb.recorderEvent({
            what: ab,
            kind: Ub,
            save: Ab
          })
        },
        replayOpened: (ab, Ab, Mb) => {
          bb.replayOpened(WM.decode(new Uint8Array(Ub.buffer, Ub.byteOffset + Ab, Mb)))
        }
      };
      return (bb, ab, Tb, Eb) => !(bb < Pb.V.ReplayFailed || bb > Pb.V.RecorderEvent) && (Ub = ab, Ab = !0, (0, jb.je)(bb, ab, Tb, Eb, Mb) && Ab)
    }

    function dM(bb) {
      let ab = null;
      const Ub = IM(bb, (() => {
        if (null === ab) throw new Error("a recorder event read outside recorderEventReader's call");
        return ab.buffer
      }));
      return (bb, Ab) => {
        ab = Ab;
        try {
          ! function(bb, ab) {
            const Ub = bb.slice(),
              Ab = new DataView(Ub.buffer);
            for (let Mb = 0; Mb < Ub.byteLength;) {
              if (Mb + Pb.R > Ub.byteLength) throw new Error(`the recorder module's events end mid-head at ${Mb}`);
              const bb = Ab.getUint32(Mb, !0),
                Tb = 65535 & bb,
                Eb = bb >>> 16,
                Yb = Mb + Pb.R;
              if (Yb + Eb > Ub.byteLength || !ab(Tb, Ab, Yb, Eb)) throw new Error(`the recorder module wrote a malformed event ${Tb} (${Eb} bytes) at ${Mb}`);
              Mb = Yb + (0, Pb.ae)(Eb)
            }
          }(bb, Ub)
        } finally {
          ab = null
        }
      }
    }
    class FM {
      constructor(bb, ab) {
        this.acks = bb, this.handlers = ab, this.parts = new Map
      }
      onPart(bb, ab, Ub) {
        let Ab = this.parts.get(bb);
        Ab || (Ab = [], this.parts.set(bb, Ab)), Ab[ab] = Ub, this.acks.filePartDone(bb, ab)
      }
      onReady(bb) {
        var ab;
        const Ub = null !== (ab = this.parts.get(bb.save)) && void 0 !== ab ? ab : [];
        this.parts.delete(bb.save);
        const Ab = function(bb, ab, Ub) {
          if (bb.length !== ab) return null;
          let Ab = 0;
          for (let Eb = 0; Eb < ab; Eb++) {
            if (void 0 === bb[Eb]) return null;
            Ab += bb[Eb].byteLength
          }
          if (Ab !== Ub) return null;
          if (1 === ab) return bb[0];
          const Mb = new Uint8Array(Ub);
          let Tb = 0;
          for (const Eb of bb) Mb.set(Eb, Tb), Tb += Eb.byteLength;
          return Mb
        }(Ub, bb.parts, bb.bytes);
        this.acks.fileDone(bb.save), null === Ab ? this.handlers.fileIncomplete(bb.save, bb.kind) : this.handlers.fileReady(bb.save, bb.kind, Ab)
      }
      onDiscarded(bb) {
        this.parts.delete(bb)
      }
    }

    function hM() {
      return Ub.e(57).then((() => Ub(41700)))
    }
    class GM {
      constructor(bb) {
        this.deps = bb, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: ab
        } = bb;
        this.recorder = new NM({
          client: ab,
          live: () => {
            var bb;
            return !0 !== (null === (bb = this.viewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          viewerOpen: bb.viewerOpen,
          notify: bb.notify,
          download: ab => {
            var Ub;
            null === (Ub = bb.download) || void 0 === Ub || Ub.call(bb, ab)
          },
          onState: bb.onRecorderState,
          onSaveState: bb.onSaveState
        }), this.parts = new FM(ab, {
          fileReady: (bb, ab, Ub) => {
            var Ab;
            ab === Pb.Vc.Edited ? null === (Ab = this.viewer) || void 0 === Ab || Ab.saveDone(Ub) : this.recorder.fileReady(ab, Ub)
          },
          fileIncomplete: (bb, ab) => {
            this.saveFailed(ab)
          }
        });
        const Ub = {
          replayFailed: bb => {
            var ab;
            null === (ab = this.viewer) || void 0 === ab || ab.onFailed(bb)
          },
          replayOption: ab => {
            var Ub;
            null === (Ub = bb.onReplayOption) || void 0 === Ub || Ub.call(bb, ab)
          },
          replayUiEvent: ab => {
            var Ub;
            null === (Ub = bb.onReplayUiEvent) || void 0 === Ub || Ub.call(bb, ab)
          },
          filePart: (bb, ab, Ub) => {
            this.parts.onPart(bb, ab, Ub)
          },
          fileReady: bb => {
            this.parts.onReady(bb)
          },
          replayOpened: ab => {
            var Ub;
            null === (Ub = bb.onReplayOpened) || void 0 === Ub || Ub.call(bb, ab)
          },
          recorderEvent: bb => {
            var ab;
            switch (bb.what) {
              case Pb.Ic.FileDiscarded:
                this.parts.onDiscarded(bb.save);
                break;
              case Pb.Ic.SaveFailed:
                this.saveFailed(bb.kind);
                break;
              case Pb.Ic.SaveBusy:
                if (null !== (ab = this.viewer) && void 0 !== ab && ab.savePending) {
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
        this.sink = function(bb, ab) {
          return {
            onReplayEvent: IM(bb, ab)
          }
        }(Ub, bb.buffer), this.recorderEvents = dM(Ub)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var bb;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (bb = this.deps.loadViewer) && void 0 !== bb ? bb : hM)().catch((bb => {
          throw this.viewerChunk = null, bb
        })), this.viewerChunk.then((bb => (this.viewer ??= new bb.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var bb, ab;
            null === (bb = (ab = this.deps).onViewerChange) || void 0 === bb || bb.call(ab)
          }
        }), this.viewer))))
      }
      activated(bb) {
        this.recorder.activated(bb)
      }
      afterFrame(bb) {
        try {
          bb > 0 && this.recorder.qL()
        } finally {
          var ab;
          null === (ab = this.viewer) || void 0 === ab || ab.afterFrame()
        }
      }
      end() {
        var bb;
        null === (bb = this.viewer) || void 0 === bb || bb.end()
      }
      saveFailed(bb) {
        var ab;
        bb === Pb.Vc.Edited ? null === (ab = this.viewer) || void 0 === ab || ab.saveFailed(!1) : this.recorder.failed(bb)
      }
    }
    var QM = Ub(39742),
      qM = Ub(39762),
      uM = Ub(4487),
      rM = Ub(40110);
    class KM {
      constructor(bb) {
        this.deps = bb, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(bb, ab) {
        if (!this.deps.live() || 0 === bb && 0 === ab) return;
        const Ub = (0, ub.l)(0, performance.now()),
          Ab = this.deps.dragScale();
        (0, rM.j)((() => {
          (0, ub.o)(Pb.rb.MouseDown, 0, 0, 0, Ub), (0, ub.o)(Pb.rb.MouseMove, 0, bb * Ab, ab * Ab, 0), (0, ub.o)(Pb.rb.MouseUp, 0, 0, 0, Ub)
        }))
      }
      move(bb) {
        var ab, Ub;
        this.analogue[0] = null !== (ab = null === bb || void 0 === bb ? void 0 : bb.x) && void 0 !== ab ? ab : 0, this.analogue[1] = null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.y) && void 0 !== Ub ? Ub : 0, this.send()
      }
      holdVertical(bb, ab) {
        const Ub = "freeCamUp" === bb ? jb.Sb.Up : jb.Sb.Down;
        this.keys = ab ? this.keys | Ub : this.keys & ~Ub, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const bb = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== bb && !(0, jb.ye)(bb, 0, this.analogue, this.keys)
      }
    }
    var oM = Ub(686),
      lM = Ub(294),
      tM = Ub(101),
      wM = Ub(8820);

    function sM() {
      const bb = Ab.c.get("clientEscMenuOptions"),
        ab = (0, oM.o)(bb);
      return {
        mouse: (0, tM.isMobile)() ? ab : bb.mouseSensitivity,
        touch: ab,
        fovPercent: bb.cameraFOV
      }
    }

    function gM() {
      const bb = Ab.c.get("clientEscMenuOptions"),
        ab = Ab.c.get("isTouchScreen") ? (0, oM.o)(bb) : bb.mouseSensitivity,
        Ub = sM().mouse;
      return Ub > 0 ? ab / Ub : 1
    }

    function CM(bb) {
      const ab = () => {
        bb.setSoundPrefs(Ab.c.get("soundVolume"), Ab.c.get("soundOnFromAd"))
      };
      let Ub = null;
      const Mb = () => {
        const {
          showFog: ab,
          enableLighting: Mb,
          fogChunkDistance: Tb,
          chunkFadeIn: Eb
        } = Ab.c.get("clientEscMenuOptions"), Yb = {
          showFog: ab,
          lighting: Mb,
          fogChunks: Tb,
          chunkFade: Eb
        };
        Ub && (0, Pb.Md)(Ub) === (0, Pb.Md)(Yb) && Ub.fogChunks === Tb || (Ub = Yb, bb.setEnvPrefs(Ub))
      };
      let Tb = null;
      const Yb = () => {
        const ab = function() {
          const bb = Ab.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: Ab.c.get("areNametagsHidden"),
            crouchToggle: bb.crouchIsToggle,
            bhopDisabled: bb.disableBunnyHopping,
            disableBobbing: bb.disableBobbing,
            ezTowering: bb.ezTowering && (0, lM.d)(),
            ezBridging: bb.ezBridging,
            showChunkBorders: bb.showChunkBorders,
            nametagCutDistance: (0, wM.e)()
          }
        }();
        (0, Nb.Td)(Tb, ab) || (Tb = ab, bb.setUiPrefs(ab))
      };
      let Bb = null;
      const eb = () => {
        const ab = sM();
        (0, Nb.Td)(Bb, ab) || (Bb = ab, bb.setLookPrefs(ab))
      };
      ab(), Mb(), Yb(), eb();
      const vb = [(0, Eb.n)("appManagerUpdated|soundVolume", ab), (0, Eb.n)("appManagerUpdated|soundOnFromAd", ab), (0, Eb.n)("appManagerUpdated|clientEscMenuOptions", (() => {
        Mb(), Yb(), eb()
      })), (0, Eb.n)("appManagerUpdated|areNametagsHidden", Yb), (0, Eb.n)("appManagerUpdated|showDistantNametags", Yb)];
      return () => {
        for (const bb of vb) bb()
      }
    }
    var VM = Ub(40039),
      OM = Ub(40044);
    var cM = (0, OM.e)("lend"),
      JM = (0, OM.e)("starting"),
      nM = (0, OM.e)("generation"),
      SM = (0, OM.e)("end");
    class bT {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, SM, {
          value: aT
        }), Object.defineProperty(this, cM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, JM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, nM, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, VM.c)(this, cM)[cM] || (0, VM.c)(this, JM)[JM]
      }
      async start(bb) {
        if (this.active) return "busy";
        const ab = (0, VM.c)(this, nM)[nM];
        (0, VM.c)(this, JM)[JM] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, VM.c)(this, JM)[JM] = !1
        }
        if (ab !== (0, VM.c)(this, nM)[nM]) return "refused";
        const Ub = this.deps.beginSave();
        if (!Ub) return "refused";
        const Ab = Number(BigInt.asUintN(32, bb)),
          Mb = Number(BigInt.asUintN(32, bb >> 32n));
        let Tb = "refused";
        return this.deps.recorderCall(((bb, ab) => {
          const Eb = Ub.editState,
            Yb = bb.stage(Eb.length);
          0 !== Yb ? (new Uint8Array(ab.buffer, Yb, Eb.length).set(Eb), bb.BMb(Ub.headLen, Ab, Mb) && (Tb = "sealing")) : Tb = "tooLarge"
        }), !0), "sealing" !== Tb ? (Ub.end(), Tb) : ((0, VM.c)(this, cM)[cM] = Ub, "sealing")
      }
      beforeRecorderStep() {
        const bb = (0, VM.c)(this, cM)[cM];
        if (!bb) return null;
        let ab = -1,
          Ub = 0;
        if (!this.deps.recorderCall((bb => {
            ab = bb.eMb(), ab > 0 && (Ub = bb.vMb())
          }))) return (0, VM.c)(this, SM)[SM](bb, "stopped");
        if (ab < 0) return (0, VM.c)(this, SM)[SM](bb, "read");
        if (0 === ab) return null;
        const Ab = bb.head(Ub, ab);
        let Mb = !1;
        if (Ab && this.deps.recorderCall(((bb, Ub) => {
            const Tb = bb.stage(ab);
            0 !== Tb && (new Uint8Array(Ub.buffer, Tb, ab).set(Ab), Mb = !0)
          }), !0), Mb) return null;
        const Tb = bb.givenUp();
        this.deps.recorderCall((bb => {
          bb.LMb()
        }));
        const Eb = (0, VM.c)(this, SM)[SM](bb, Tb ? "givenUp" : "stopped");
        return Tb && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Eb
      }
      stop() {
        (0, VM.c)(this, nM)[nM]++;
        const bb = (0, VM.c)(this, cM)[cM];
        bb && (this.deps.recorderCall((bb => {
          bb.LMb()
        })), (0, VM.c)(this, SM)[SM](bb, "stopped"))
      }
    }

    function aT(bb, ab) {
      return (0, VM.c)(this, cM)[cM] = null, bb.end(), ab
    }

    function UT(bb, ab) {
      const Ub = new Uint8Array(4),
        Ab = new DataView(Ub.buffer);
      return Ab.setUint8(0, bb ? 1 : 0), Ab.setUint16(2, Math.max(0, Math.min(65535, Math.round(ab))), !0), Ub
    }

    function AT(bb, ab) {
      return bb > function(bb) {
        return 16777216 + 314572.8 * Math.max(0, bb)
      }(ab) + 33554432
    }
    let MT = null;

    function TT(bb) {
      return MT ??= async function(bb) {
        const ab = bb.loadInFlight();
        ab && await ab.catch((() => {}));
        if (bb.trapped()) return "trapped";
        if (bb.busy() || !AT(bb.memoryBytes(), bb.clipSeconds())) return "RX";
        bb.unload();
        let Ub = !1;
        try {
          Ub = await bb.load()
        } catch {
          Ub = !1
        }
        if (!Ub) return bb.trapped() ? "trapped" : bb.cX() ? "cX" : "failed";
        return "recycled"
      }(bb).finally((() => {
        MT = null
      })), MT
    }
    const ET = "Replay recording couldn't load, so try again.",
      YT = new Set([Pb.Mc.ToggleRecording, Pb.Mc.SaveClip]);
    var BT = (0, OM.e)("bindings"),
      eT = (0, OM.e)("module"),
      vT = (0, OM.e)("memory"),
      LT = (0, OM.e)("trapped"),
      PT = (0, OM.e)("cX"),
      XT = (0, OM.e)("recycleDue"),
      jT = (0, OM.e)("loading"),
      RT = (0, OM.e)("generation"),
      kT = (0, OM.e)("viewDrawn"),
      yT = (0, OM.e)("clip"),
      ZT = (0, OM.e)("session"),
      DT = (0, OM.e)("control"),
      zT = (0, OM.e)("deferred"),
      xT = (0, OM.e)("coreU8"),
      iT = (0, OM.e)("coreU32"),
      fT = (0, OM.e)("moduleU8"),
      mT = (0, OM.e)("edited"),
      pT = (0, OM.e)("sendSession"),
      NT = (0, OM.e)("checkNotInEvents"),
      WT = (0, OM.e)("clipping"),
      HT = (0, OM.e)("busy"),
      IT = (0, OM.e)("use"),
      dT = (0, OM.e)("ensureLoaded"),
      FT = (0, OM.e)("loadOnce"),
      hT = (0, OM.e)("recycleAfterStep"),
      GT = (0, OM.e)("settleRecycle"),
      QT = (0, OM.e)("load"),
      qT = (0, OM.e)("attach"),
      uT = (0, OM.e)("resendHeld"),
      rT = (0, OM.e)("recycle"),
      KT = (0, OM.e)("send"),
      oT = (0, OM.e)("unload"),
      lT = (0, OM.e)("dropModule"),
      tT = (0, OM.e)("coreBytes"),
      wT = (0, OM.e)("coreWords"),
      sT = (0, OM.e)("moduleBytes"),
      gT = (0, OM.e)("loadFailed"),
      CT = (0, OM.e)("call"),
      VT = (0, OM.e)("guard"),
      OT = (0, OM.e)("trapOn");
    class cT {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, OT, {
          value: DE
        }), Object.defineProperty(this, VT, {
          value: ZE
        }), Object.defineProperty(this, CT, {
          value: yE
        }), Object.defineProperty(this, gT, {
          value: kE
        }), Object.defineProperty(this, sT, {
          value: RE
        }), Object.defineProperty(this, wT, {
          value: jE
        }), Object.defineProperty(this, tT, {
          value: XE
        }), Object.defineProperty(this, lT, {
          value: PE
        }), Object.defineProperty(this, oT, {
          value: LE
        }), Object.defineProperty(this, KT, {
          value: vE
        }), Object.defineProperty(this, rT, {
          value: eE
        }), Object.defineProperty(this, uT, {
          value: BE
        }), Object.defineProperty(this, qT, {
          value: YE
        }), Object.defineProperty(this, QT, {
          value: EE
        }), Object.defineProperty(this, GT, {
          value: TE
        }), Object.defineProperty(this, hT, {
          value: ME
        }), Object.defineProperty(this, FT, {
          value: AE
        }), Object.defineProperty(this, dT, {
          value: UE
        }), Object.defineProperty(this, IT, {
          value: aE
        }), Object.defineProperty(this, HT, {
          value: bE
        }), Object.defineProperty(this, WT, {
          value: ST
        }), Object.defineProperty(this, NT, {
          value: nT
        }), Object.defineProperty(this, pT, {
          value: JT
        }), Object.defineProperty(this, BT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, LT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, PT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, XT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, RT, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, kT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, yT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mT, {
          writable: !0,
          value: void 0
        }), (0, VM.c)(this, mT)[mT] = new bT({
          ensureLoaded: () => (0, VM.c)(this, dT)[dT](),
          recorderCall: (bb, ab) => {
            ab && (0, VM.c)(this, NT)[NT]("an edited save's stage");
            const Ub = (0, VM.c)(this, CT)[CT](((ab, Ub) => (bb(ab, Ub), !0)));
            return null !== Ub && void 0 !== Ub && Ub
          },
          beginSave: bb.beginSave,
          givenUp: bb.givenUp
        })
      }
      get active() {
        return null !== (0, VM.c)(this, eT)[eT]
      }
      get trapped() {
        return (0, VM.c)(this, LT)[LT]
      }
      get loading() {
        return null !== (0, VM.c)(this, jT)[jT]
      }
      prefetch() {
        (0, VM.c)(this, PT)[PT] || (0, VM.c)(this, LT)[LT] || (0, VM.c)(this, eT)[eT] || (0, VM.c)(this, jT)[jT] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, VM.c)(this, kT)[kT] = !0, (0, VM.c)(this, WT)[WT]() && (0, VM.c)(this, IT)[IT]()
      }
      prefs(bb, ab) {
        (0, VM.c)(this, yT)[yT] = {
          on: bb,
          seconds: ab
        }, (0, VM.c)(this, KT)[KT](Pb.Fc.Prefs, UT(bb, ab)), bb && (0, VM.c)(this, kT)[kT] && (0, VM.c)(this, IT)[IT]()
      }
      control(bb) {
        const ab = function(bb) {
          return new Uint8Array([bb, 0, 0, 0])
        }(bb);
        if (YT.has(bb)) return (0, VM.c)(this, eT)[eT] ? void(0, VM.c)(this, KT)[KT](Pb.Fc.Control, ab) : ((0, VM.c)(this, DT)[DT] = ab, void(0, VM.c)(this, IT)[IT]());
        (0, VM.c)(this, PT)[PT] || this.deps.coreCommand(Pb.Fc.Control, ab)
      }
      session(bb) {
        (0, VM.c)(this, ZT)[ZT] = bb, (0, VM.c)(this, pT)[pT](bb)
      }
      filePartDone(bb, ab) {
        (0, VM.c)(this, KT)[KT](Pb.Fc.FilePartDone, function(bb, ab) {
          const Ub = new Uint8Array(8),
            Ab = new DataView(Ub.buffer);
          return Ab.setUint32(0, bb, !0), Ab.setUint32(4, ab, !0), Ub
        }(bb, ab))
      }
      fileDone(bb) {
        return (0, VM.c)(this, KT)[KT](Pb.Fc.FileDone, function(bb) {
          const ab = new Uint8Array(4);
          return new DataView(ab.buffer).setUint32(0, bb, !0), ab
        }(bb)), (0, VM.c)(this, hT)[hT]()
      }
      saveEdited(bb) {
        return (0, VM.c)(this, NT)[NT]("saveEdited"), (0, VM.c)(this, mT)[mT].start(bb)
      }
      afterFrame() {
        if (!(0, VM.c)(this, eT)[eT]) return;
        "read" === (0, VM.c)(this, mT)[mT].beforeRecorderStep() && (0, VM.c)(this, hT)[hT]();
        const bb = (0, VM.c)(this, XT)[XT];
        (0, VM.c)(this, XT)[XT] = null;
        const ab = (0, VM.c)(this, eT)[eT],
          Ub = (0, VM.c)(this, vT)[vT];
        if (!ab || !Ub) return void(null === bb || void 0 === bb || bb.resolve((0, VM.c)(this, LT)[LT] ? "trapped" : "RX"));
        const {
          core: Ab
        } = this.deps, Mb = Ab.jMb(2);
        let Tb, Eb, Yb, Bb, eb = 0,
          vb = 0;
        if (0 !== Mb) {
          var Lb, Pb;
          const bb = (0, VM.c)(this, wT)[wT]();
          eb = null !== (Lb = bb[Mb >>> 2]) && void 0 !== Lb ? Lb : 0, vb = null !== (Pb = bb[1 + (Mb >>> 2)]) && void 0 !== Pb ? Pb : 0
        }
        try {
          if (vb > 0) {
            const bb = ab.feed(vb);
            0 !== bb && (0, VM.c)(this, sT)[sT](Ub).set((0, VM.c)(this, tT)[tT]().subarray(eb, eb + vb), bb)
          }
          Tb = ab.step(), Eb = ab.RMb(), Yb = ab.kMb(), Bb = ab.yMb()
        } catch (Xb) {
          if (!(0, VM.c)(this, OT)[OT](Xb)) throw null === bb || void 0 === bb || bb.resolve("RX"), Xb;
          return void(null === bb || void 0 === bb || bb.resolve("trapped"))
        }
        if (Tb > 0) {
          const bb = Ab.ZMb(2, Tb);
          0 !== bb && (0, VM.c)(this, tT)[tT]().set((0, VM.c)(this, sT)[sT](Ub).subarray(Eb, Eb + Tb), bb)
        }
        if (Yb > 0) {
          (0, VM.c)(this, zT)[zT] = [];
          try {
            this.deps.events(new Uint8Array(Ub.buffer, Bb, Yb), Ub)
          } catch (Xb) {
            throw null === bb || void 0 === bb || bb.resolve("RX"), Xb
          } finally {
            const bb = (0, VM.c)(this, zT)[zT];
            (0, VM.c)(this, zT)[zT] = null;
            for (const [ab, Ub] of bb)(0, VM.c)(this, KT)[KT](ab, Ub)
          }
        }
        if (!(0, VM.c)(this, WT)[WT]() && !(0, VM.c)(this, HT)[HT]()) return (0, VM.c)(this, oT)[oT](), void(null === bb || void 0 === bb || bb.resolve("RX"));
        null === bb || void 0 === bb || bb.resolve((0, VM.c)(this, rT)[rT]())
      }
      dispose() {
        (0, VM.c)(this, PT)[PT] = !0, (0, VM.c)(this, oT)[oT]()
      }
    }

    function JT(bb) {
      (0, VM.c)(this, KT)[KT](Pb.Fc.Session, function(bb) {
        const ab = new TextEncoder,
          Ub = ab.encode(bb.game).subarray(0, 65535),
          Ab = ab.encode(bb.lobby).subarray(0, 65535),
          Mb = new Uint8Array(22 + Ub.length + 2 + Ab.length),
          Tb = new DataView(Mb.buffer);
        Tb.setFloat64(0, bb.unixMs, !0), Tb.setBigUint64(8, BigInt.asUintN(64, bb.session), !0), Tb.setUint8(16, bb.lobbyType);
        let Eb = 20;
        for (const Yb of [Ub, Ab]) Tb.setUint16(Eb, Yb.length, !0), Mb.set(Yb, Eb + 2), Eb += 2 + Yb.length;
        return Mb
      }({
        ...bb,
        unixMs: this.deps.unixNow()
      }))
    }

    function nT(bb) {
      false
    }

    function ST() {
      var bb, ab;
      return null !== (bb = null === (ab = (0, VM.c)(this, yT)[yT]) || void 0 === ab ? void 0 : ab.on) && void 0 !== bb && bb
    }

    function bE() {
      const bb = (0, VM.c)(this, eT)[eT];
      let ab = !0;
      if (bb) try {
        ab = bb.busy()
      } catch (Ub) {
        if (!(0, VM.c)(this, OT)[OT](Ub)) throw Ub
      }
      return ab || (0, VM.c)(this, mT)[mT].active
    }
    async function aE() {
      !(0, VM.c)(this, PT)[PT] && this.deps.allowed() ? await (0, VM.c)(this, dT)[dT]() : (0, VM.c)(this, DT)[DT] = null
    }

    function UE() {
      return (0, VM.c)(this, LT)[LT] || (0, VM.c)(this, PT)[PT] ? Promise.resolve(!1) : (0, VM.c)(this, eT)[eT] ? Promise.resolve(!0) : ((0, VM.c)(this, jT)[jT] ??= (0, VM.c)(this, FT)[FT](), (0, VM.c)(this, jT)[jT])
    }
    async function AE() {
      let bb = !1;
      try {
        return bb = await (0, VM.c)(this, QT)[QT](), bb
      } finally {
        bb || ((0, VM.c)(this, DT)[DT] = null), (0, VM.c)(this, jT)[jT] = null
      }
    }

    function ME() {
      if (!(0, VM.c)(this, eT)[eT]) return Promise.resolve((0, VM.c)(this, LT)[LT] ? "trapped" : "RX");
      if (!(0, VM.c)(this, XT)[XT]) {
        let bb = () => {};
        const ab = new Promise((ab => {
          bb = ab
        }));
        (0, VM.c)(this, XT)[XT] = {
          promise: ab,
          resolve: bb
        }
      }
      return (0, VM.c)(this, XT)[XT].promise
    }

    function TE(bb) {
      const ab = (0, VM.c)(this, XT)[XT];
      (0, VM.c)(this, XT)[XT] = null, null === ab || void 0 === ab || ab.resolve(bb)
    }
    async function EE() {
      let bb = (0, VM.c)(this, BT)[BT];
      if (!bb) {
        const ab = (0, VM.c)(this, RT)[RT];
        try {
          bb = await this.deps.load()
        } catch (Ub) {
          return ab === (0, VM.c)(this, RT)[RT] && await (0, VM.c)(this, gT)[gT](Ub), !1
        }
        if (ab !== (0, VM.c)(this, RT)[RT]) return this.deps.unload(), !1;
        const Ab = bb,
          Mb = (0, VM.c)(this, VT)[VT]((() => Ab.DMb()));
        if (void 0 === Mb) return !1;
        const Tb = this.deps.core.zMb();
        if (Mb !== Tb) return await (0, VM.c)(this, gT)[gT](new Error(`recorder port version ${Mb}, the core's ${Tb}`)), !1;
        (0, VM.c)(this, BT)[BT] = bb
      }
      const ab = bb;
      try {
        if (!(0, VM.c)(this, VT)[VT]((() => ((0, VM.c)(this, eT)[eT] = new ab.xMb, (0, VM.c)(this, vT)[vT] = ab.PMb(), !0)))) return !1;
        (0, VM.c)(this, uT)[uT]();
        const bb = (0, VM.c)(this, DT)[DT];
        return (0, VM.c)(this, DT)[DT] = null, bb && (0, VM.c)(this, KT)[KT](Pb.Fc.Control, bb), (0, VM.c)(this, qT)[qT]()
      } catch (Ub) {
        return (0, VM.c)(this, oT)[oT](), await (0, VM.c)(this, gT)[gT](Ub), !1
      }
    }

    function YE() {
      return this.deps.core.iMb(0), 1 === this.deps.core.iMb(1) || ((0, VM.c)(this, oT)[oT](), this.deps.failed(ET), !1)
    }

    function BE() {
      (0, VM.c)(this, yT)[yT] && (0, VM.c)(this, KT)[KT](Pb.Fc.Prefs, UT((0, VM.c)(this, yT)[yT].on, (0, VM.c)(this, yT)[yT].seconds)), (0, VM.c)(this, ZT)[ZT] && (0, VM.c)(this, pT)[pT]((0, VM.c)(this, ZT)[ZT])
    }

    function eE() {
      return TT({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var bb, ab;
          return null !== (bb = null === (ab = (0, VM.c)(this, yT)[yT]) || void 0 === ab ? void 0 : ab.seconds) && void 0 !== bb ? bb : 0
        },
        trapped: () => (0, VM.c)(this, LT)[LT],
        busy: () => (0, VM.c)(this, HT)[HT](),
        loadInFlight: () => (0, VM.c)(this, jT)[jT],
        cX: () => (0, VM.c)(this, PT)[PT],
        unload: () => {
          (0, VM.c)(this, oT)[oT]()
        },
        load: () => (0, VM.c)(this, dT)[dT]()
      })
    }

    function vE(bb, ab) {
      (0, VM.c)(this, zT)[zT] ? (0, VM.c)(this, zT)[zT].push([bb, ab]): (0, VM.c)(this, CT)[CT](((Ub, Ab) => {
        const Mb = Ub.XMb(ab.length);
        0 !== Mb && (new Uint8Array(Ab.buffer, Mb, ab.length).set(ab), Ub.command(bb, ab.length))
      }))
    }

    function LE() {
      (0, VM.c)(this, RT)[RT]++, (0, VM.c)(this, GT)[GT]("RX"), (0, VM.c)(this, mT)[mT].stop(), this.deps.core.iMb(0), (0, VM.c)(this, lT)[lT](), (0, VM.c)(this, LT)[LT] || ((0, VM.c)(this, BT)[BT] = null, this.deps.unload())
    }

    function PE() {
      (0, VM.c)(this, CT)[CT]((bb => {
        bb.free()
      })), (0, VM.c)(this, eT)[eT] = null, (0, VM.c)(this, vT)[vT] = null, (0, VM.c)(this, fT)[fT] = null
    }

    function XE() {
      var bb;
      const ab = this.deps.coreBuffer();
      return (null === (bb = (0, VM.c)(this, xT)[xT]) || void 0 === bb ? void 0 : bb.buffer) !== ab && ((0, VM.c)(this, xT)[xT] = new Uint8Array(ab)), (0, VM.c)(this, xT)[xT]
    }

    function jE() {
      var bb;
      const ab = this.deps.coreBuffer();
      return (null === (bb = (0, VM.c)(this, iT)[iT]) || void 0 === bb ? void 0 : bb.buffer) !== ab && ((0, VM.c)(this, iT)[iT] = new Uint32Array(ab, 0, ab.byteLength >>> 2)), (0, VM.c)(this, iT)[iT]
    }

    function RE(bb) {
      var ab;
      const Ub = bb.buffer;
      return (null === (ab = (0, VM.c)(this, fT)[fT]) || void 0 === ab ? void 0 : ab.buffer) !== Ub && ((0, VM.c)(this, fT)[fT] = new Uint8Array(Ub)), (0, VM.c)(this, fT)[fT]
    }
    async function kE(bb) {
      await this.deps.staleOr(bb, (() => {
        this.deps.failed(ET)
      }))
    }

    function yE(bb) {
      const ab = (0, VM.c)(this, eT)[eT],
        Ub = (0, VM.c)(this, vT)[vT];
      if (ab && Ub) return (0, VM.c)(this, VT)[VT]((() => bb(ab, Ub)))
    }

    function ZE(bb) {
      if (!(0, VM.c)(this, LT)[LT]) try {
        return bb()
      } catch (ab) {
        if (!(0, VM.c)(this, OT)[OT](ab)) throw ab;
        return
      }
    }

    function DE(bb) {
      return bb instanceof WebAssembly.RuntimeError && ((0, VM.c)(this, LT)[LT] = !0, (0, VM.c)(this, eT)[eT] = null, (0, VM.c)(this, vT)[vT] = null, (0, VM.c)(this, fT)[fT] = null, (0, VM.c)(this, BT)[BT] = null, (0, VM.c)(this, DT)[DT] = null, (0, VM.c)(this, GT)[GT]("trapped"), this.deps.core.iMb(0), (0, VM.c)(this, mT)[mT].stop(), this.deps.crash(this.deps.markTrapped(bb)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var zE = Ub(37955);
    const xE = new Map([
      ["skyblock", () => Ub.e(49).then((() => Ub(37953)))]
    ]);

    function iE(bb) {
      const ab = xE.get(bb);
      return ab ? ab().then((() => {
        const ab = (0, zE.d)(bb);
        if (!ab) throw new Error(`${bb}'s replay hook module registered no hook`);
        return ab
      })) : null
    }
    class fE {
      constructor(bb) {
        this.deps = bb, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(bb) {
        if (this.pending.clear(), bb === this.game && null !== this.hook) return void(this.all = !0);
        const ab = ++this.generation;
        this.game = bb, this.hook = null, this.all = !1;
        const Ub = this.deps.loadHook(bb);
        null === Ub || void 0 === Ub || Ub.then((bb => {
          ab === this.generation && (this.hook = bb, this.all = !0)
        }), (bb => {
          ab === this.generation && this.deps.onError(bb)
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
          hook: ab
        } = this;
        if (null === ab || !bb || !this.all && 0 === this.pending.size) return;
        const Ub = this.deps.cmd();
        if (null === Ub) return;
        const {
          api: Ab
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: bb,
            count: ab
          } = qU(Ab, this.ids);
          this.ids = bb;
          for (let Ub = 0; Ub < ab; Ub++) this.pending.set(bb[Ub], !0)
        }
        const Mb = this.ids = uU(this.ids, this.pending.size);
        let Tb = 0;
        for (const eb of this.pending.keys()) Mb[Tb++] = eb;
        const Eb = [],
          Yb = rU(Ab, Mb, Tb, ((bb, ab) => {
            null !== ab && Eb.push({
              serverId: bb,
              info: ab,
              spawned: !0 === this.pending.get(bb)
            })
          }));
        if (Yb) {
          this.pending.clear();
          for (const {
              serverId: bb,
              info: Ab,
              spawned: Mb
            }
            of Eb) try {
            ab(Ab, {
              setFacingTolerance: ab => {
                null === ab && Mb || TU(Ub, bb, ab) || this.pending.set(bb, Mb)
              }
            })
          } catch (Bb) {
            this.deps.onError(Bb)
          }
        }
      }
    }
    var mE = (0, OM.e)("bindings"),
      pE = (0, OM.e)("module"),
      NE = (0, OM.e)("memory"),
      WE = (0, OM.e)("trapped"),
      HE = (0, OM.e)("generation"),
      IE = (0, OM.e)("loading"),
      dE = (0, OM.e)("lend"),
      FE = (0, OM.e)("givenUp"),
      hE = (0, OM.e)("afterSave"),
      GE = (0, OM.e)("opens"),
      QE = (0, OM.e)("saveAskedAt"),
      qE = (0, OM.e)("unload"),
      uE = (0, OM.e)("dropModule"),
      rE = (0, OM.e)("loadFailed"),
      KE = (0, OM.e)("saveReadsBody"),
      oE = (0, OM.e)("command"),
      lE = (0, OM.e)("call"),
      tE = (0, OM.e)("guard"),
      wE = (0, OM.e)("trapOn");
    class sE {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, wE, {
          value: SE
        }), Object.defineProperty(this, tE, {
          value: nE
        }), Object.defineProperty(this, lE, {
          value: JE
        }), Object.defineProperty(this, oE, {
          value: cE
        }), Object.defineProperty(this, KE, {
          get: OE,
          set: void 0
        }), Object.defineProperty(this, rE, {
          value: VE
        }), Object.defineProperty(this, uE, {
          value: CE
        }), Object.defineProperty(this, qE, {
          value: gE
        }), Object.defineProperty(this, mE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, WE, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, HE, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, IE, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, dE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, FE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hE, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GE, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, QE, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, VM.c)(this, pE)[pE] && null === (0, VM.c)(this, hE)[hE]
      }
      async open(bb) {
        if ((0, VM.c)(this, WE)[WE]) return Pb.Sc.ModuleTrap;
        let ab = (0, VM.c)(this, mE)[mE];
        if (!ab) {
          const bb = (0, VM.c)(this, HE)[HE];
          (0, VM.c)(this, IE)[IE]++;
          try {
            ab = await this.deps.load()
          } catch (Ab) {
            return (0, VM.c)(this, IE)[IE]--, bb !== (0, VM.c)(this, HE)[HE] ? "stopped" : (0, VM.c)(this, rE)[rE](Ab)
          }
          if ((0, VM.c)(this, IE)[IE]--, bb !== (0, VM.c)(this, HE)[HE]) return (0, VM.c)(this, mE)[mE] || 0 !== (0, VM.c)(this, IE)[IE] || (0, VM.c)(this, WE)[WE] || this.deps.unload(), "stopped";
          if ((0, VM.c)(this, WE)[WE]) return Pb.Sc.ModuleTrap;
          const Ub = ab.DMb(),
            Mb = this.deps.core.zMb();
          if (Ub !== Mb) return (0, VM.c)(this, rE)[rE](new Error(`replay port version ${Ub}, the core's ${Mb}`));
          (0, VM.c)(this, mE)[mE] = ab
        }
        if (!(0, VM.c)(this, pE)[pE]) {
          const bb = ab;
          if (!(0, VM.c)(this, tE)[tE]((() => {
              (0, VM.c)(this, pE)[pE] = new bb.fMb, (0, VM.c)(this, NE)[NE] = bb.mMb()
            }))) return Pb.Sc.ModuleTrap
        }
        let Ub = !1;
        return (0, VM.c)(this, lE)[lE](((ab, Ab) => {
          null !== (0, VM.c)(this, hE)[hE] && ab.step(0, 0);
          const Mb = ab.stage(bb.length);
          0 !== Mb && (new Uint8Array(Ab.buffer, Mb, bb.length).set(bb), ab.open(), (0, VM.c)(this, FE)[FE] = (0, VM.c)(this, dE)[dE], (0, VM.c)(this, hE)[hE] = null, (0, VM.c)(this, GE)[GE]++, Ub = !0)
        })) ? Ub ? "opening" : Pb.Sc.TooLarge : Pb.Sc.ModuleTrap
      }
      beforeFrame(bb) {
        const ab = (0, VM.c)(this, pE)[pE],
          Ub = (0, VM.c)(this, NE)[NE];
        if (!ab || !Ub || null !== (0, VM.c)(this, hE)[hE]) return;
        const {
          core: Ab
        } = this.deps, Mb = Ab.pMb(bb);
        if (Mb < 0) return;
        const Tb = Math.floor(Mb);
        let Eb, Yb;
        try {
          Eb = ab.step(Tb, Mb - Tb), Yb = ab.RMb()
        } catch (eb) {
          return void(0, VM.c)(this, wE)[wE](eb)
        }
        const Bb = Ab.ZMb(1, Eb);
        if (0 === Bb) {
          const bb = (0, VM.c)(this, lE)[lE]((bb => {
            bb.close()
          }));
          if (!bb) return;
          return (0, VM.c)(this, KE)[KE] ? (0, VM.c)(this, hE)[hE] = "drop" : (0, VM.c)(this, uE)[uE](), void Ab.NMb(Pb.Sc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Bb, Eb).set(new Uint8Array(Ub.buffer, Yb, Eb))
      }
      play() {
        (0, VM.c)(this, oE)[oE]((bb => {
          bb.play()
        }))
      }
      pause() {
        (0, VM.c)(this, oE)[oE]((bb => {
          bb.pause()
        }))
      }
      seek(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, VM.c)(this, oE)[oE]((Ub => {
          Ub.seek(bb, ab)
        }))
      }
      setMark(bb, ab) {
        return (0, VM.c)(this, oE)[oE]((Ub => {
          Ub.WMb(bb, ab)
        }))
      }
      addKeyframe(bb, ab) {
        return (0, VM.c)(this, oE)[oE]((Ub => {
          Ub.HMb(bb[0], bb[1], bb[2], ab[0], ab[1], ab[2])
        }))
      }
      setKeyframe(bb, ab) {
        return (0, VM.c)(this, oE)[oE]((Ub => {
          Ub.IMb(bb, ab)
        }))
      }
      moveKeyframe(bb, ab) {
        return (0, VM.c)(this, oE)[oE]((Ub => {
          Ub.dMb(bb, ab)
        }))
      }
      deleteKeyframes(bb, ab) {
        return (0, VM.c)(this, oE)[oE]((Ub => {
          Ub.FMb(bb, ab)
        }))
      }
      crop(bb, ab) {
        return null === (0, VM.c)(this, dE)[dE] && (0, VM.c)(this, oE)[oE]((Ub => {
          Ub.crop(bb, ab)
        }))
      }
      beginSave() {
        const bb = (0, VM.c)(this, QE)[QE];
        if ((0, VM.c)(this, QE)[QE] = null, null !== bb && bb !== (0, VM.c)(this, GE)[GE]) return null;
        let ab = 0,
          Ub = null;
        if ((0, VM.c)(this, lE)[lE](((bb, Ab) => {
            ab = bb.save(), 0 !== ab && (Ub = new Uint8Array(Ab.buffer, bb.hMb(), bb.GMb()).slice())
          })), 0 === ab || !Ub) return null;
        const Ab = {
          headLen: ab,
          editState: Ub,
          givenUp: () => (0, VM.c)(this, FE)[FE] === Ab,
          head: (bb, ab) => {
            if ((0, VM.c)(this, dE)[dE] !== Ab || !(0, VM.c)(this, KE)[KE]) return null;
            let Ub = null;
            return (0, VM.c)(this, lE)[lE](((Ab, Mb) => {
              const Tb = Ab.QMb();
              0 !== Tb && bb >= 0 && ab >= 0 && bb + ab <= Tb && (Ub = new Uint8Array(Mb.buffer, Ab.qMb() + bb, ab))
            })), Ub
          },
          end: () => {
            if ((0, VM.c)(this, dE)[dE] !== Ab) return;
            (0, VM.c)(this, dE)[dE] = null, (0, VM.c)(this, FE)[FE] = null, (0, VM.c)(this, lE)[lE]((bb => {
              bb.uMb()
            }));
            const bb = (0, VM.c)(this, hE)[hE];
            (0, VM.c)(this, hE)[hE] = null, "unload" === bb ? (0, VM.c)(this, qE)[qE]() : "drop" === bb && (0, VM.c)(this, uE)[uE]()
          }
        };
        return (0, VM.c)(this, dE)[dE] = Ab, Ab
      }
      askSave() {
        (0, VM.c)(this, QE)[QE] = (0, VM.c)(this, GE)[GE]
      }
      setSpeed(bb) {
        (0, VM.c)(this, oE)[oE]((ab => {
          ab.rMb(bb)
        }))
      }
      setCameraMode(bb) {
        (0, VM.c)(this, oE)[oE]((ab => {
          ab.KMb(bb)
        }))
      }
      close() {
        (0, VM.c)(this, oE)[oE]((bb => {
          bb.close()
        }))
      }
      stop() {
        (0, VM.c)(this, HE)[HE]++, (0, VM.c)(this, KE)[KE] && ((0, VM.c)(this, lE)[lE]((bb => {
          bb.close()
        })), (0, VM.c)(this, pE)[pE]) ? (0, VM.c)(this, hE)[hE] = "unload" : (0, VM.c)(this, qE)[qE]()
      }
    }

    function gE() {
      (0, VM.c)(this, uE)[uE](), (0, VM.c)(this, WE)[WE] || ((0, VM.c)(this, mE)[mE] = null, this.deps.unload())
    }

    function CE() {
      (0, VM.c)(this, lE)[lE]((bb => {
        bb.free()
      })), (0, VM.c)(this, pE)[pE] = null, (0, VM.c)(this, NE)[NE] = null
    }
    async function VE(bb) {
      return await this.deps.staleOr(bb, (() => {})) ? "reloading" : Pb.Sc.ModuleLoad
    }

    function OE() {
      return null !== (0, VM.c)(this, dE)[dE] && (0, VM.c)(this, FE)[FE] !== (0, VM.c)(this, dE)[dE]
    }

    function cE(bb) {
      return null === (0, VM.c)(this, hE)[hE] && (0, VM.c)(this, lE)[lE](bb)
    }

    function JE(bb) {
      const ab = (0, VM.c)(this, pE)[pE],
        Ub = (0, VM.c)(this, NE)[NE];
      return !(!ab || !Ub) && (0, VM.c)(this, tE)[tE]((() => {
        bb(ab, Ub)
      }))
    }

    function nE(bb) {
      if ((0, VM.c)(this, WE)[WE]) return !1;
      try {
        return bb(), !0
      } catch (ab) {
        return (0, VM.c)(this, wE)[wE](ab), !1
      }
    }

    function SE(bb) {
      if (!(bb instanceof WebAssembly.RuntimeError)) throw bb;
      (0, VM.c)(this, WE)[WE] = !0, (0, VM.c)(this, pE)[pE] = null, (0, VM.c)(this, NE)[NE] = null, (0, VM.c)(this, mE)[mE] = null, this.deps.crash(this.deps.markTrapped(bb)), this.deps.core.NMb(Pb.Sc.ModuleTrap)
    }
    var bY = Ub(6099),
      aY = Ub(39841);
    const UY = "[bloxd-wasm-client]";
    const AY = String(pM);

    function MY(bb) {
      return null === bb || bb === AY ? void 0 : bb
    }

    function TY(bb) {
      var ab, Ub, Ab, Mb, Tb, Yb, Bb;
      switch (bb.what) {
        case Pb._c.FlyingText: {
          let ab;
          try {
            ab = JSON.parse(bb.contentJson)
          } catch (eb) {
            return void console.warn(`${UY} a replay's flying text isn't JSON`, eb)
          }
          Eb.m.IR("forceFlyingMiddleMessage", {
            content: ab,
            NT: bb.NT,
            angle: bb.angle,
            WT: bb.WT
          });
          break
        }
        case Pb._c.PlayerKilled:
          (0, aY.g)({
            kind: "killed",
            body: {
              deadEId: null !== (ab = MY(bb.dead)) && void 0 !== ab ? ab : "",
              killerEId: MY(bb.killer),
              withItem: null !== (Ub = bb.withItem) && void 0 !== Ub ? Ub : "",
              killstreak: bb.killstreak
            }
          });
          break;
        case Pb._c.Killfeed:
          (0, aY.g)({
            kind: "custom",
            body: {
              killer: {
                eId: MY(bb.killerId),
                name: null !== (Ab = bb.killerName) && void 0 !== Ab ? Ab : void 0,
                colour: null !== (Mb = bb.killerColour) && void 0 !== Mb ? Mb : void 0
              },
              victim: {
                eId: MY(bb.victimId),
                name: null !== (Tb = bb.victimName) && void 0 !== Tb ? Tb : void 0,
                colour: null !== (Yb = bb.victimColour) && void 0 !== Yb ? Yb : void 0
              },
              withItem: null !== (Bb = bb.withItem) && void 0 !== Bb ? Bb : ""
            }
          })
      }
    }
    const EY = "[bloxd-wasm-client]";

    function YY(bb) {
      if (void 0 === bb || null === bb || "" === bb) return null;
      const ab = Number(bb);
      return Number.isInteger(ab) && ab > pM && ab <= 2147483647 ? ab : null
    }

    function BY(bb) {
      return {
        id: YY(bb.eId),
        name: "string" === typeof bb.name ? bb.name : null,
        colour: "string" === typeof bb.colour ? bb.colour : null
      }
    }

    function eY(bb) {
      const ab = (0, qM.k)(sU.Tb.PlayerKilled, (ab => {
          var Ub, Ab;
          const Mb = (0, QM.i)(ab);
          if (!(0, QM.e)(Mb)) return;
          const {
            deadEId: Tb,
            killerEId: Eb,
            withItem: Yb,
            killstreak: Bb
          } = Mb;
          bb.recordPlayerKilled(null !== (Ub = YY(Tb)) && void 0 !== Ub ? Ub : pM, null !== (Ab = YY(Eb)) && void 0 !== Ab ? Ab : pM, "number" === typeof Bb ? Bb : 0, "string" === typeof Yb ? Yb : "")
        })),
        Ub = (0, qM.k)(sU.Tb.CustomKillfeed, (ab => {
          const Ub = (0, QM.i)(ab);
          if (!(0, QM.e)(Ub) || !(0, QM.e)(Ub.killer) || !(0, QM.e)(Ub.victim)) return;
          const {
            killer: Ab,
            victim: Mb,
            withItem: Tb
          } = Ub;
          bb.recordKillfeed(BY(Ab), BY(Mb), "string" === typeof Tb ? Tb : null)
        }));
      return () => {
        ab(), Ub()
      }
    }

    function vY(bb) {
      var ab;
      return void 0 === bb || null === bb ? null : null !== (ab = JSON.stringify(bb)) && void 0 !== ab ? ab : null
    }

    function LY(bb) {
      let ab = null;
      const Ub = () => {
        const {
          enableClipping: Ub,
          clipDurationSeconds: Mb
        } = Ab.c.get("clientEscMenuOptions"), Tb = `${Ub}:${Mb}`;
        Tb !== ab && (ab = Tb, bb.recorder.setPrefs(Ub, Mb))
      };
      return Ub(), (0, Eb.n)("appManagerUpdated|clientEscMenuOptions", Ub)
    }
    const PY = "replayModule",
      XY = "recorderModule";

    function jY(bb, ab, Ub) {
      return function() {
        return bb.isStopped ? Ub : ab(...arguments)
      }
    }
    const RY = {
      open: () => Promise.reject(new Error(kM.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function kY() {
      return Ub.e(61).then((() => Ub(60595)))
    }

    function yY(bb) {
      (0, kM.d)({
        text: bb,
        type: "Error"
      })
    }
    class ZY {
      constructor(bb) {
        this.deps = bb, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: ab,
          api: Ab,
          core: Mb
        } = bb, Tb = () => bb.memory().buffer, Eb = () => ab.isStopped ? null : ab.rings.cmd, Yb = jY(ab, ((bb, ab) => Mb.ZMb(bb, ab)), 0), Bb = () => Mb.zMb();
        let eb = null;
        this.replay = new sE({
          core: {
            pMb: jY(ab, (bb => Mb.pMb(bb)), -1),
            ZMb: Yb,
            zMb: Bb,
            NMb: jY(ab, (bb => {
              Mb.NMb(bb)
            }), void 0)
          },
          coreBuffer: Tb,
          load: async () => (eb = await Ub.e(62).then((() => Ub(60607))), eb.loadReplayModule()),
          unload: () => {
            var bb;
            null === (bb = eb) || void 0 === bb || bb.unloadReplayModule()
          },
          markTrapped: bb => eb ? eb.markReplayTrapped(bb) : new Error(String(bb)),
          staleOr: (ab, Ub) => bb.staleOr(PY, ab, Ub),
          crash: ab => {
            bb.reportFault(PY, ab)
          }
        });
        let vb = null;
        this.recorder = new cT({
          core: {
            iMb: jY(ab, (bb => Mb.iMb(bb)), 0),
            jMb: jY(ab, (bb => Mb.jMb(bb)), 0),
            ZMb: Yb,
            zMb: Bb
          },
          coreCommand: (bb, ab) => {
            var Ub, Ab;
            return null !== (Ub = null === (Ab = Eb()) || void 0 === Ab ? void 0 : Ab.writeCmd(bb, 0, ab)) && void 0 !== Ub && Ub
          },
          coreBuffer: Tb,
          load: async () => (vb = await kY(), vb.loadRecorderModule()),
          prefetch: () => {
            kY().then((bb => bb.prefetchRecorderModule())).catch((bb => {
              console.warn(`${EY} the recorder module didn't prefetch, so a save loads it:`, bb)
            }))
          },
          unload: () => {
            var bb;
            null === (bb = vb) || void 0 === bb || bb.unloadRecorderModule()
          },
          markTrapped: bb => vb ? vb.markRecorderTrapped(bb) : new Error(String(bb)),
          memoryBytes: () => {
            var bb, ab;
            return null !== (bb = null === (ab = vb) || void 0 === ab ? void 0 : ab.recorderMemoryBytes()) && void 0 !== bb ? bb : 0
          },
          staleOr: (ab, Ub) => bb.staleOr(XY, ab, Ub),
          crash: ab => {
            bb.reportFault(XY, ab)
          },
          allowed: () => !0 === bb.options.get("canRecordReplays"),
          failed: yY,
          events: (bb, ab) => {
            this.runtime.recorderEvents(bb, ab)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: yY,
          unixNow: () => Date.now()
        });
        const Lb = new mM({
          core: {
            TMb: jY(ab, (bb => Mb.TMb(bb)), 0),
            YMb: jY(ab, (() => {
              Mb.YMb()
            }), void 0),
            Bk: jY(ab, (() => Mb.Bk()), 0),
            EMb: jY(ab, (() => Mb.EMb()), 0)
          },
          buffer: Tb,
          apiView: () => Ab.apiView,
          cmd: Eb,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new fE({
          api: Ab,
          cmd: Eb,
          loadHook: iE,
          onError: bb => {
            console.warn(`${EY} the recorded game's replay hooks:`, bb)
          }
        });
        const Pb = new GM({
          client: Lb,
          buffer: Tb,
          setHoldDraws: bb => {
            ab.setHoldDraws(bb)
          },
          notify: kM.d,
          onRecorderState: () => {
            var bb;
            null === (bb = (0, ZM.e)()) || void 0 === bb || bb.recorderChanged()
          },
          onViewerChange: () => {
            var bb;
            null === (bb = (0, ZM.e)()) || void 0 === bb || bb.viewerChanged()
          },
          onReplayOption: ab => {
            ! function(bb, ab) {
              var Ub, Ab;
              const Mb = sU.gb[ab.key];
              if (void 0 === Mb) return;
              let Tb = null !== (Ub = ab.value) && void 0 !== Ub ? Ub : JSON.parse(JSON.stringify(null !== (Ab = bY.b[Mb]) && void 0 !== Ab ? Ab : null));
              if (null !== ab.value && ab.key < sU.Db.Environment && "string" === typeof Tb) try {
                Tb = JSON.parse(Tb)
              } catch (Eb) {
                return void console.warn(`${UY} a replay's ${Mb} isn't JSON`, Eb)
              }
              bb.applyNewClientOptions({
                [Mb]: Tb
              })
            }(bb.options, ab)
          },
          onReplayUiEvent: TY,
          onReplayOpened: ab => {
            this.entityHooks.opened((0, Nb.Gb)(ab)), bb.replayShaderPack(ab)
          },
          meshPending: () => {
            var bb, Ub;
            return null !== (bb = null === (Ub = ab.lastHeader) || void 0 === Ub ? void 0 : Ub.renderPending) && void 0 !== bb ? bb : 0
          },
          viewerOpen: yM.e,
          download: bb => {
            (0, jM.h)(bb)
          }
        });
        this.runtime = Pb, Ab.replay = Pb.sink, (0, ZM.t)(Pb);
        const Xb = new KM({
          live: () => {
            var bb;
            return !ab.isStopped && !0 === (null === (bb = Pb.currentViewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          cmd: Eb,
          dragScale: gM
        });
        this.freecam = Xb, (0, ZM.p)(Xb), this.recordedOptions = function(bb, ab) {
          const Ub = sU.gb,
            Ab = Ub.map(((Ub, Ab) => ab.subscribe(Ub, (ab => {
              bb.setOption(Ab, vY(ab))
            }))));
          return {
            sendAll() {
              Ub.forEach(((Ub, Ab) => {
                bb.setOption(Ab, vY(ab.get(Ub)))
              }))
            },
            stop() {
              for (const bb of Ab) bb()
            }
          }
        }(Pb.recorder, bb.options), this.stops = [(0, aA.n)((bb => {
          Xb.flush();
          try {
            this.replay.beforeFrame(bb)
          } catch (ab) {
            this.deps.reportFault("replayFrame", ab)
          }
        })), (0, aA.B)(((bb, ab) => {
          try {
            this.recorder.afterFrame(), ab && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Ub) {
            this.deps.reportFault("recorderFrame", Ub)
          }
          try {
            Pb.afterFrame(bb)
          } catch (Ub) {
            this.deps.reportFault("replayRuntime", Ub)
          }
        })), LY(Pb), () => {
          this.recordedOptions.stop()
        }, eY(Pb.recorder), (0, uM.l)((bb => {
          let {
            action: ab,
            down: Ub
          } = bb;
          var Ab;
          Ub && (null === (Ab = (0, ZM.e)()) || void 0 === Ab || Ab.keyDown(ab))
        }))];
        const jb = () => {
          const bb = Pb.currentViewer;
          return !0 === (null === bb || void 0 === bb ? void 0 : bb.isOpen) ? bb : null
        };
        (0, RM.e)({
          open: (bb, ab) => this.open(bb, ab),
          replayKey: () => {
            var bb, ab;
            return null !== (bb = null === (ab = jb()) || void 0 === ab ? void 0 : ab.id) && void 0 !== bb ? bb : null
          },
          saveRefusal: () => {
            var bb, ab;
            return null !== (bb = null === (ab = jb()) || void 0 === ab ? void 0 : ab.saveRefusal) && void 0 !== bb ? bb : null
          },
          encode: () => {
            var bb, ab;
            return null !== (bb = null === (ab = jb()) || void 0 === ab ? void 0 : ab.save()) && void 0 !== bb ? bb : Promise.resolve(null)
          },
          fileHandle: () => {
            var bb, ab;
            return null !== (bb = null === (ab = Pb.currentViewer) || void 0 === ab ? void 0 : ab.fileHandle) && void 0 !== bb ? bb : null
          },
          markSaved: (bb, ab) => {
            var Ub;
            null === (Ub = Pb.currentViewer) || void 0 === Ub || Ub.markSaved(bb, ab)
          }
        })
      }
      netEvent(bb) {
        if ("connection" === bb.type)
          if (bb.phase === Pb.C.Activated) {
            this.activeConn = bb.conn;
            const ab = this.deps.sessionInfo(bb.conn);
            null !== ab && (this.runtime.activated({
              lobbyType: (0, Wb.x)(ab.lobbyName),
              gameNameWithVariation: ab.gameNameWithVariation,
              lobbyName: ab.lobbyName
            }), this.recordedOptions.sendAll())
          } else bb.phase !== Pb.C.Left && bb.phase !== Pb.C.Closed || bb.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const bb of this.stops) bb();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, ZM.k)() === this.runtime && (0, ZM.t)(null), (0, ZM.h)() === this.freecam && (0, ZM.p)(null), (0, RM.e)(RY), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(bb, ab) {
        const {
          running: Ub
        } = this.deps;
        if (Ub.isStopped) throw new Error(kM.c.coreStopped.text);
        if (bb.byteLength > 67108864) throw new Error(kM.c.cantOpen.text);
        let Ab;
        try {
          Ab = await async function(bb) {
            const ab = await bb.loadViewer();
            return ab.inPlayback || (0, aA.K)().leaveGame(null), ab
          }(this.runtime)
        } catch (Mb) {
          throw console.warn(`${EY} the replay viewer didn't load`, Mb), new Error(kM.c.viewerLoadFailed.text)
        }
        if (Ub.isStopped) throw new Error(kM.c.coreStopped.text);
        await Ab.open(bb, ab)
      }
    }
    var DY = Ub(1844);

    function zY(bb, ab) {
      const {
        aux: Ub,
        payload: Ab
      } = function(bb) {
        return {
          aux: bb.reset ? Pb.Qb.ResetFirst : 0,
          payload: iY(bb.changes)
        }
      }(ab);
      bb.queueOptions(Ub, Ab) && (ab.reset && DY.e.reset(), DY.e.apply(ab.changes))
    }
    const xY = new TextEncoder;

    function iY(bb) {
      const ab = new fY;
      return pY(ab, bb), ab.bytes()
    }
    class fY {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(bb) {
        if (this.len + bb <= this.buf.length) return;
        const ab = new Uint8Array(Math.max(2 * this.buf.length, this.len + bb));
        ab.set(this.buf.subarray(0, this.len)), this.buf = ab, this.view = new DataView(ab.buffer)
      }
      u8(bb) {
        this.room(1), this.buf[this.len++] = bb
      }
      tagged(bb, ab, Ub) {
        this.room(1 + ab), this.buf[this.len++] = bb, 1 === ab ? this.view.setUint8(this.len, Ub) : 2 === ab ? this.view.setUint16(this.len, Ub) : this.view.setUint32(this.len, Ub), this.len += ab
      }
      signed(bb, ab, Ub) {
        this.room(1 + ab), this.buf[this.len++] = bb, 1 === ab ? this.view.setInt8(this.len, Ub) : 2 === ab ? this.view.setInt16(this.len, Ub) : this.view.setInt32(this.len, Ub), this.len += ab
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

    function mY(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      ab < Ab ? bb.u8(Ub | ab) : null !== Mb && ab < 256 ? bb.tagged(Mb, 1, ab) : ab < 65536 ? bb.tagged(Tb, 2, ab) : bb.tagged(Eb, 4, ab)
    }

    function pY(bb, ab) {
      switch (typeof ab) {
        case "undefined":
          return void bb.raw(NY);
        case "boolean":
          return void bb.u8(ab ? 195 : 194);
        case "number":
          return void
          function(bb, ab) {
            ab >>> 0 === ab ? ab < 128 ? bb.u8(ab) : ab < 256 ? bb.tagged(204, 1, ab) : ab < 65536 ? bb.tagged(205, 2, ab) : bb.tagged(206, 4, ab) : (ab | 0) === ab ? ab >= -32 ? bb.u8(255 & ab) : ab >= -128 ? bb.signed(208, 1, ab) : ab >= -32768 ? bb.signed(209, 2, ab) : bb.signed(210, 4, ab) : bb.f64(ab)
          }(bb, ab);
        case "string": {
          const Ub = xY.encode(ab);
          return mY(bb, Ub.length, 160, 32, 217, 218, 219), void bb.raw(Ub)
        }
        case "object":
          break;
        default:
          return void bb.u8(192)
      }
      if (null === ab) bb.u8(192);
      else if (Array.isArray(ab)) {
        mY(bb, ab.length, 144, 16, null, 220, 221);
        for (const Ub of ab) pY(bb, Ub)
      } else if (ab instanceof Uint8Array) mY(bb, ab.length, 0, 0, 196, 197, 198), bb.raw(ab);
      else {
        const Ub = Object.keys(ab);
        mY(bb, Ub.length, 128, 0, null, 222, 223);
        for (const Ab of Ub) pY(bb, Ab), pY(bb, ab[Ab])
      }
    }
    const NY = new Uint8Array([212, 0, 0]);
    var WY = Ub(41673),
      HY = Ub(41682),
      IY = Ub(40136),
      dY = Ub(40161),
      FY = Ub(3382);
    const hY = [1e3, 3e3, 9e3];
    class GY {
      constructor(bb) {
        this.host = bb, this.sets = new Map, this.table = [], this.generation = 0, this.cX = !1
      }
      onEvent(bb) {
        const ab = function(bb) {
          if (bb.byteLength !== Pb.cd) return null;
          const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
          return {
            want: ab.getUint16(0, !0),
            release: ab.getUint16(2, !0)
          }
        }(bb);
        ab && !this.cX && (ab.release !== Pb.ed && this.release(ab.release), ab.want !== Pb.ed && this.want(ab.want))
      }
      reset(bb) {
        if (!this.cX) {
          for (const [bb, ab] of this.sets) "ready" === ab.state && this.releaseAll(ab.distinct), this.sets.delete(bb);
          this.table = bb, this.generation++
        }
      }
      dispose() {
        if (this.cX) return;
        this.cX = !0, this.generation++, this.table = [];
        const bb = [...this.sets.values()];
        this.sets.clear();
        let ab = null;
        for (const Ab of bb)
          for (const bb of "ready" === Ab.state ? Ab.distinct : []) try {
            this.host.mUb(bb)
          } catch (Ub) {
            ab ??= {
              error: Ub
            }
          }
        if (ab) throw ab.error
      }
      isReady(bb) {
        var ab;
        return "ready" === (null === (ab = this.sets.get(bb)) || void 0 === ab ? void 0 : ab.state)
      }
      want(bb) {
        const ab = this.sets.get(bb);
        if ("loading" === (null === ab || void 0 === ab ? void 0 : ab.state)) return ab.wanted = !0, void this.capAnswer(bb, ab);
        if ("ready" === (null === ab || void 0 === ab ? void 0 : ab.state)) return void this.host.sendReady(qY(bb, ab.images, ab.size));
        const Ub = this.table[bb];
        if (!Ub || 1 !== Ub.urls.length && Ub.urls.length !== sU.Pb.CubeFaces) return this.host.sendReady(uY(bb)), void this.host.onLoadFailed(bb, "", new Error(`no image set ${bb}`));
        const Ab = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(bb, Ab), this.load(bb, Ub, Ab, this.generation, 0), this.capAnswer(bb, Ab)
      }
      capAnswer(bb, ab) {
        this.host.wait(4e3, (() => {
          this.sets.get(bb) === ab && ab.wanted && this.host.sendReady(uY(bb))
        }))
      }
      load(bb, ab, Ub, Ab, Mb) {
        const Tb = [...new Set(ab.urls)];
        Promise.allSettled(Tb.map((bb => this.host.loadImage(bb, ab.orientation)))).then((Eb => {
          const Yb = Eb.flatMap((bb => "fulfilled" === bb.status ? [bb.value] : [])),
            Bb = Ab === this.generation && this.sets.get(bb) === Ub,
            eb = Eb.findIndex((bb => "rejected" === bb.status));
          if (!Bb || !Ub.wanted) return this.cX ? void this.releaseAfterDispose(Yb.map(QY)) : (this.releaseAll(Yb.map(QY)), void(Bb && this.sets.delete(bb)));
          eb < 0 ? this.loaded(bb, ab, Tb, Yb) : (this.releaseAll(Yb.map(QY)), this.host.sendReady(uY(bb)), Mb < hY.length ? this.host.wait(hY[Mb], (() => {
            Ab === this.generation && this.sets.get(bb) === Ub && (Ub.wanted ? this.load(bb, ab, Ub, Ab, Mb + 1) : this.sets.delete(bb))
          })) : (this.sets.delete(bb), this.host.onLoadFailed(bb, Tb[eb], Eb[eb].reason)))
        }))
      }
      loaded(bb, ab, Ub, Ab) {
        const [Mb] = Ab, Tb = [Mb.width, Mb.height], Eb = Ab.every((bb => bb.width === Tb[0] && bb.height === Tb[1])), Yb = ab.urls.length === sU.Pb.CubeFaces;
        if (!Eb || Tb[0] <= 0 || Tb[1] <= 0 || Tb[0] > 65535 || Tb[1] > 65535 || Yb && Tb[0] !== Tb[1]) {
          this.releaseAll(Ab.map(QY)), this.sets.delete(bb), this.host.sendReady(uY(bb));
          const Ub = Ab.map((bb => `${bb.width}x${bb.height}`));
          return void this.host.onLoadFailed(bb, ab.urls[0], new Error(`set ${bb}'s images can't make its texture: ${Ub.join(", ")}`))
        }
        const Bb = ab.urls.map((bb => Ab[Ub.indexOf(bb)].id)),
          eb = Ab.map(QY);
        this.sets.set(bb, {
          state: "ready",
          images: Bb,
          distinct: eb,
          size: Tb
        }), this.host.sendReady(qY(bb, Bb, Tb))
      }
      release(bb) {
        const ab = this.sets.get(bb);
        "loading" === (null === ab || void 0 === ab ? void 0 : ab.state) ? ab.wanted = !1: "ready" === (null === ab || void 0 === ab ? void 0 : ab.state) && (this.releaseAll(ab.distinct), this.sets.delete(bb))
      }
      releaseAll(bb) {
        for (const ab of bb) this.host.mUb(ab)
      }
      releaseAfterDispose(bb) {
        for (const ab of bb) try {
          this.host.mUb(ab)
        } catch {}
      }
    }

    function QY(bb) {
      return bb.id
    }

    function qY(bb, ab, Ub) {
      const Ab = new Uint8Array(sU.Pb.SkyImagesReadyBytes),
        Mb = new DataView(Ab.buffer);
      return Mb.setUint16(0, bb, !0), Mb.setUint16(2, ab.length, !0), Mb.setUint16(4, Ub[0], !0), Mb.setUint16(6, Ub[1], !0), ab.slice(0, sU.Pb.CubeFaces).forEach(((bb, ab) => {
        Mb.setUint32(8 + 4 * ab, bb, !0)
      })), Ab
    }

    function uY(bb) {
      const ab = new Uint8Array(sU.Pb.SkyImagesReadyBytes),
        Ub = new DataView(ab.buffer);
      return Ub.setUint16(0, bb, !0), Ub.setUint16(2, sU.Pb.Failed, !0), ab
    }
    let rY = Promise.resolve();
    async function KY(bb, ab) {
      let Ub;
      try {
        Ub = await (0, FY.E)(bb)
      } catch (Tb) {
        throw new IY.e("fetch", bb, {
          cause: Tb
        })
      }
      const Ab = rY.then((() => async function(bb, ab) {
        const Ub = new Blob([bb.slice()]);
        let Ab = await createImageBitmap(Ub, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ab
        });
        const Mb = 1024 / Math.max(Ab.width, Ab.height);
        if (Mb < 1) {
          const bb = Ab;
          try {
            Ab = await createImageBitmap(bb, {
              resizeWidth: Math.max(1, Math.round(bb.width * Mb)),
              resizeHeight: Math.max(1, Math.round(bb.height * Mb)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            bb.close()
          }
        }
        return Ab
      }(Ub, ab)));
      let Mb;
      rY = Ab.catch((() => {}));
      try {
        Mb = await Ab
      } catch (Tb) {
        throw new IY.e("decode", bb, {
          cause: Tb
        })
      }
      return {
        id: (0, IY.o)(Mb),
        width: Mb.width,
        height: Mb.height
      }
    }
    var oY = Ub(2890),
      lY = Ub(33696);
    const tY = oY.d.length;

    function wY(bb) {
      const ab = [],
        Ub = [];
      oY.d.forEach(((Ab, Mb) => {
        var Tb;
        const Eb = null !== (Tb = sY(bb[Ab])) && void 0 !== Tb ? Tb : lY.k[Ab];
        "custom" === Eb.type ? (Ub.push({
          id: Mb,
          kind: sU.Pb.KindCustom,
          set: ab.length,
          earth: null
        }), ab.push({
          urls: [Eb.px, Eb.py, Eb.pz, Eb.nx, Eb.ny, Eb.nz],
          orientation: "none"
        })) : Ub.push({
          id: Mb,
          kind: sU.Pb.KindEarth,
          set: 0,
          earth: Eb
        })
      }));
      const Ab = sY(bb.earth);
      "earth" === (null === Ab || void 0 === Ab ? void 0 : Ab.type) && Ub.push({
        id: tY,
        kind: sU.Pb.KindEarth,
        set: 0,
        earth: Ab
      });
      const Mb = ab.length;
      ab.push({
        urls: lY.f.map((bb => lY.g + bb)),
        orientation: "none"
      }), ab.push({
        urls: [lY.h],
        orientation: "flipY"
      }), ab.push({
        urls: [lY.d],
        orientation: "flipY"
      });
      const Tb = new Uint8Array(sU.Pb.SkyTableHeaderBytes + Ub.length * sU.Pb.SkyTableEntryBytes),
        Eb = new DataView(Tb.buffer);
      return Eb.setUint16(0, Mb, !0), Eb.setUint16(2, Mb + 1, !0), Eb.setUint16(4, Mb + 2, !0), Eb.setUint16(6, Ub.length, !0), Ub.forEach(((bb, ab) => {
        const Ub = sU.Pb.SkyTableHeaderBytes + ab * sU.Pb.SkyTableEntryBytes;
        Eb.setUint16(Ub, bb.id, !0), Eb.setUint8(Ub + 2, bb.kind);
        const Ab = Ub + 4;
        bb.earth ? function(bb, ab, Ub) {
          const Ab = bb;
          let Mb = 0,
            Tb = 0;
          for (const [Eb, Yb] of gY) {
            const bb = Ab[Eb];
            "number" === typeof bb && Number.isFinite(bb) && (ab.setFloat32(Ub + 4 * Yb, bb, !0), Mb |= 1 << Yb)
          }
          for (const [Eb, Yb, Bb] of CY) {
            const bb = Ab[Eb];
            Array.isArray(bb) && 3 === bb.length && bb.every((bb => "number" === typeof bb && Number.isFinite(bb))) && (bb.forEach(((bb, Ab) => {
              ab.setFloat32(Ub + Bb + 4 * Ab, bb, !0)
            })), Mb |= Yb)
          }
          VY.forEach(((bb, Tb) => {
            let [Eb, Yb] = bb;
            const Bb = Ab[Eb];
            "number" === typeof Bb && Number.isFinite(Bb) && (ab.setFloat32(Ub + sU.p.CameraOffsetAt + 4 * Tb, Bb, !0), Mb |= Yb)
          }));
          for (const [Eb, Yb] of OY) {
            const bb = Ab[Eb];
            null !== bb && void 0 !== bb && (Mb |= Yb, bb && (Tb |= Yb >>> 14))
          }
          ab.setUint32(Ub + sU.p.PresentAt, Mb, !0), ab.setUint8(Ub + sU.p.FlagsAt, Tb)
        }(bb.earth, Eb, Ab) : Eb.setUint16(Ab, bb.set, !0)
      })), {
        payload: Tb,
        sets: ab
      }
    }

    function sY(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const ab = bb;
      if ("earth" === ab.type) return bb;
      return "custom" === ab.type && ["px", "py", "pz", "nx", "ny", "nz"].every((bb => {
        const Ub = ab[bb];
        return "string" === typeof Ub && Ub.length > 0
      })) ? bb : null
    }
    const gY = [
        ["inclination", sU.p.Inclination],
        ["turbidity", sU.p.Turbidity],
        ["luminance", sU.p.Luminance],
        ["rayleigh", sU.p.Rayleigh],
        ["mieCoefficient", sU.p.MieCoefficient],
        ["mieDirectionalG", sU.p.MieDirectionalG],
        ["distance", sU.p.Distance],
        ["azimuth", sU.p.Azimuth]
      ],
      CY = [
        ["sunPosition", sU.p.SunPosition, sU.p.SunPositionAt],
        ["up", sU.p.Up, sU.p.UpAt],
        ["vertexTint", sU.p.VertexTint, sU.p.VertexTintAt]
      ],
      VY = [
        ["xCameraOffset", sU.p.CameraOffsetX],
        ["yCameraOffset", sU.p.CameraOffsetY],
        ["zCameraOffset", sU.p.CameraOffsetZ]
      ],
      OY = [
        ["useSunPosition", sU.p.UseSunPosition],
        ["dithering", sU.p.Dithering],
        ["infiniteDistance", sU.p.InfiniteDistance]
      ];

    function cY(bb, ab, Ub) {
      const Ab = new nY({
        writeCmd: bb,
        warn: ab,
        followPack: JY(Ub, ab)
      });
      return Ab.start(), Ab
    }

    function JY(bb, ab) {
      return Ub => {
        let Ab = () => {};
        const Mb = bb((bb => {
          Ab(), Ab = () => {}, null !== bb ? Ab = bb.subscribe((bb => {
            Ub(function(bb, ab, Ub) {
              if ("object" !== typeof bb || null === bb) return null;
              const Ab = bb.skyBoxes;
              if ("object" !== typeof Ab || null === Ab) return null;
              if ("player" === ab) return Ab;
              return Object.fromEntries(Object.entries(Ab).filter((bb => {
                let [ab, Ab] = bb;
                return !! function(bb) {
                  if ("object" !== typeof bb || null === bb) return !1;
                  return "earth" === bb.type || Object.entries(bb).every((bb => {
                    let [ab, Ub] = bb;
                    return "type" === ab || ("" === (Ab = Ub) || null !== function(bb) {
                      var ab, Ub, Ab;
                      return "string" !== typeof bb ? null : null !== (ab = null === (Ub = SY.exec(bb)) || void 0 === Ub || null === (Ab = Ub.groups) || void 0 === Ab ? void 0 : Ab.base64) && void 0 !== ab ? ab : null
                    }(Ab));
                    var Ab
                  }))
                }(Ab) || (Ub(`Ignoring texture pack skybox ${ab}, whose faces are not all data URLs`, null), !1)
              })))
            }(bb.pack, null === bb.gameSource ? "player" : "customGame", ab))
          })) : Ub(null)
        }));
        return () => {
          Mb(), Ab()
        }
      }
    }
    class nY {
      constructor(bb) {
        var ab, Ub, Ab;
        this.host = bb, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.cX = !1, this.wait = null !== (ab = bb.wait) && void 0 !== ab ? ab : (bb, ab) => {
          setTimeout(ab, bb)
        }, this.loader = new GY({
          loadImage: null !== (Ub = bb.loadImage) && void 0 !== Ub ? Ub : KY,
          mUb: null !== (Ab = bb.mUb) && void 0 !== Ab ? Ab : IY.s,
          sendReady: bb => {
            this.queue.push({
              kind: sU.Pb.SkyImagesReady,
              payload: bb
            })
          },
          onLoadFailed: (ab, Ub, Ab) => {
            bb.warn(`sky image set ${ab} (${Ub}) didn't load: the last sky stays`, Ab)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(dY.b, (() => {
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
        this.cX = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(bb) {
        if (this.cX) return;
        const ab = wY(bb);
        var Ub, Ab;
        this.written && (Ub = this.written, Ab = ab, Ub.payload.length === Ab.payload.length && Ub.payload.every(((bb, ab) => bb === Ab.payload[ab])) && Ub.sets.length === Ab.sets.length && Ub.sets.every(((bb, ab) => {
          const Ub = Ab.sets[ab];
          return bb.orientation === Ub.orientation && bb.urls.length === Ub.urls.length && bb.urls.every(((bb, ab) => bb === Ub.urls[ab]))
        }))) || (this.written = ab, this.loader.reset(ab.sets), this.queue = this.queue.filter((bb => bb.kind !== sU.Pb.SkyImagesReady)), this.queue.push({
          kind: sU.Pb.SkyTable,
          payload: ab.payload
        }))
      }
    }
    const SY = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var bB = Ub(2594),
      aB = Ub(2698),
      UB = Ub(297),
      AB = Ub(188),
      MB = Ub(2603),
      TB = Ub(2609),
      EB = Ub(275),
      YB = Ub(283),
      BB = Ub(2626),
      eB = Ub(2639),
      vB = Ub(2646),
      LB = Ub(116),
      PB = Ub(292),
      XB = Ub(39946);
    class jB {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, qM.k)(kA.K, (bb => {
          this.onReply((0, QM.f)(kA.K, bb), performance.now())
        }))
      }
      onFrame(bb, ab) {
        null === this.id ? this.id = bb : bb !== this.id && (this.id = bb, this.sentMs = document.hidden ? null : ab)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(bb, ab) {
        bb === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(ab - this.sentMs), this.sentMs = null)
      }
      take() {
        const bb = this.roundTripMs;
        return this.roundTripMs = null, bb
      }
      stop() {
        this.stopReplies()
      }
    }
    class RB {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(bb, ab, Ub, Ab) {
        const Mb = bb - this.sampled >>> 0,
          Tb = ab - this.timed >>> 0,
          Eb = Ub - this.frameUs >>> 0,
          Yb = this.primed;
        return this.sampled = bb, this.timed = ab, this.frameUs = Ub, this.primed = !0, !(!Yb || Mb > 64 || Tb > 64) && (Ab && Eb <= 1e6 * Tb && (this.windowTimed += Tb, this.windowUs += Eb), Ab && Mb > 0)
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
    const kB = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class yB {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(bb, ab) {
        const Ub = Math.min(4096, this.count + ab);
        this.samples.fill(bb, this.count, Ub), this.count = Ub
      }
      clear() {
        this.count = 0
      }
      take(bb) {
        const ab = this.count;
        if (this.count = 0, ab < 30) return null;
        const Ub = this.samples.subarray(0, ab).sort();
        return bb.map((bb => Ub[Math.min(ab - 1, Math.floor(bb * ab))]))
      }
    }
    class ZB {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new yB, this.inJoin = !1, this.rose = !1, this.joinLags = new yB, this.joinLagP90Ms = null
      }
      onFrame(bb, ab, Ub, Ab, Mb) {
        const Tb = bb.headerWord(sU.F.Pacing),
          Eb = bb.headerWord(sU.F.PacingLagUs),
          Yb = (Tb >>> sU.O.LagsShift) - (this.word >>> sU.O.LagsShift) & sU.O.CountMask,
          Bb = (Tb >>> sU.O.SwitchesShift) - (this.word >>> sU.O.SwitchesShift) & sU.O.CountMask,
          eb = Yb > 0 ? (Eb - this.lagUs >>> 0) / Yb / 1e3 : 0,
          vb = this.primed && Yb <= 64 && Bb <= 2 && eb <= 6e4;
        if (this.rose = 0 !== (Tb & ~this.word & sU.O.Joining), this.word = Tb, this.lagUs = Eb, this.primed = !0, 0 !== (Tb & sU.O.Tiered)) {
          if (0 !== (Tb & sU.O.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && vb && Ab && Yb > 0 && this.joinLags.add(eb, Yb);
          else if (this.inJoin) {
            var Lb, Pb;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Lb = null === (Pb = this.joinLags.take([.9])) || void 0 === Pb ? void 0 : Pb[0]) && void 0 !== Lb ? Lb : null
          }
          if (Mb) {
            if (vb && (this.switches += Bb, Yb > 0 && this.lags.add(eb, Yb)), Ub) {
              if (this.lastDrawnMs >= 0 && ab - this.lastDrawnMs <= 250) {
                const bb = ab - this.lastDrawnMs;
                this.tieredMs += bb, (Tb & sU.O.AheadMask) > 0 && (this.pacedMs += bb)
              }
              this.lastDrawnMs = ab
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(bb) {
        const ab = this.takeWindow(),
          Ub = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, bb ? {
          ...ab,
          joinLagP90Ms: Ub
        } : {
          ...kB,
          joinLagP90Ms: Ub
        }
      }
      unsent(bb) {
        this.joinLagP90Ms ??= bb.joinLagP90Ms
      }
      takeWindow() {
        var bb, ab;
        const Ub = this.tieredMs >= 2e3,
          Ab = this.lags.take([.5, .9]),
          Mb = {
            pacedShare: Ub ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: Ub ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (bb = null === Ab || void 0 === Ab ? void 0 : Ab[0]) && void 0 !== bb ? bb : null,
            lagP90Ms: null !== (ab = null === Ab || void 0 === Ab ? void 0 : Ab[1]) && void 0 !== ab ? ab : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Mb
      }
    }
    var DB = Ub(8829),
      zB = Ub(2579),
      xB = Ub(40020),
      iB = Ub(8822),
      fB = Ub(2618),
      mB = Ub(2592);
    const pB = {
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

    function NB(bb) {
      return new WB(bb)
    }
    class WB {
      constructor(bb) {
        this.shell = bb, this.tracker = new TB.b, this.gpu = new RB, this.pacing = new ZB, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new jB, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, DB.d)(bb.backend, bb.canvas, bb.adapterVendor), this.tracker.start((() => !bb.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, fB.b)("wasm", (() => {
          const {
            n: ab,
            sampleCount: Ub
          } = (0, xB.h)();
          return `${bb.backend}, quality steps aim at up to ${mB.d.target.maxFps} fps, pixel n ${ab}, msaa ${Ub}`
        }), (bb => {
          this.frameDebug = bb
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(bb) {
        var ab;
        this.tracker.onAnimationFrame(bb), null === (ab = this.frameDebug) || void 0 === ab || ab.animationFrame()
      }
      frameRan(bb, ab, Ub, Ab) {
        var Mb;
        this.ping.onFrame(bb.headerWord(sU.F.PingSent), Ub);
        const Tb = this.tracker;
        this.pacing.onFrame(bb, ab, "drawn" === Ab, !document.hidden, Tb.isSampling());
        const Eb = bb.headerWord(sU.F.TickUs) / 1e3 + (0, aA.O)();
        Tb.Sy(Eb), null === (Mb = this.frameDebug) || void 0 === Mb || Mb.wasmFrame(bb, ab, Ub, "drawn" === Ab, Tb.isSampling(), Eb, (0, iB.e)());
        const Yb = Math.max(0, Ub - ab - Eb);
        if ("drawn" !== Ab) return void("paced" === Ab && (this.pacedCpuMs += Yb));
        this.followGame(), Tb.onFrameStart(ab);
        this.gpu.onFrame(bb.headerWord(sU.F.GpuSampled), bb.headerWord(sU.F.GpuTimed), bb.headerWord(sU.F.GpuFrameUs), Tb.isSampling()) && Tb.onGpuSampleStarted(), Tb.onFrameCpu(Yb + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(ab)
      }
      stop() {
        for (const bb of this.timers) clearInterval(bb);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const bb = this.shell.joinedGame();
        return bb !== this.game && (this.game = bb, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== bb
      }
      countFpsFrame(bb) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = bb
        }
        this.fpsFrames++;
        const ab = bb - this.fpsSpanStartMs;
        if (!(ab < vB.e)) {
          if (!document.hidden) {
            const bb = 1e3 * this.fpsFrames / ab;
            this.firstSpanFps ??= bb, this.initialFps = this.firstSpanFps, this.fpsOverTime = bb
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = bb
        }
      }
      flush() {
        const bb = this.followGame(),
          {
            cpuFrameMs: ab,
            refreshHz: Ub,
            cpuBottleneck: Mb,
            frameIntervalCv: Tb,
            ...Eb
          } = this.tracker.snapshotAndReset(),
          Yb = this.shell.inGame(),
          Bb = Yb && this.inGameAtLastFlush,
          eb = Bb ? Eb : MB.h,
          vb = this.pacing.snapshotAndReset(Bb);
        if (this.inGameAtLastFlush = Yb, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !bb) return void this.pacing.unsent(vb);
        const Lb = performance.now(),
          Xb = (0, eB.r)((0, eB.p)(Lb), this.unsentPage),
          Rb = function(bb, ab, Ub, Mb, Tb, Eb, Yb, Bb) {
            var eb, vb, Lb, Pb;
            const Xb = {},
              {
                canvas: jb
              } = bb,
              Rb = (0, BB.e)({
                refreshHz: ab.refreshHz,
                msaa: bb.msaa(),
                autoMsaaOff: (0, iB.d)()
              });
            for (const kb of (0, aB.g)()) {
              const yb = kb.name;
              let Zb;
              if ((0, UB.r)(yb)) Zb = (0, eB.d)(yb);
              else if ((0, eB.i)(yb)) Zb = Bb[yb];
              else if ((0, BB.h)(yb)) Zb = Rb[yb];
              else switch (yb) {
                case "fps":
                  Zb = Mb;
                  break;
                case "zY":
                  Zb = Tb;
                  break;
                case "pY":
                  Zb = (0, zB.B)((0, xB.h)().n);
                  break;
                case "NY":
                  Zb = Math.max(jb.width, jb.height);
                  break;
                case "WY":
                  Zb = Math.min(jb.width, jb.height);
                  break;
                case "HY":
                  Zb = navigator.hardwareConcurrency || null;
                  break;
                case "IY":
                  Zb = (0, tM.getWebGpuSupported)();
                  break;
                case "dY":
                  Zb = null === bb.fallbackReason ? null : pB[bb.fallbackReason];
                  break;
                case "FY":
                  Zb = ab.cpuFrameMs;
                  break;
                case "hY":
                  Zb = ab.refreshHz;
                  break;
                case "GY":
                  Zb = ab.cpuBottleneck;
                  break;
                case "QY":
                  Zb = ab.frameIntervalCv;
                  break;
                case "qY":
                  Zb = ab.frameMs;
                  break;
                case "uY":
                  Zb = ab.tickMs;
                  break;
                case "lY":
                  Zb = ab.mainBusyShare;
                  break;
                case "tY":
                  Zb = ab.mainProbeDelayMs;
                  break;
                case "rY":
                  Zb = ab.longAnimationFramesPerMin;
                  break;
                case "KY":
                  Zb = ab.longAnimationFrameTimeShare;
                  break;
                case "oY":
                  Zb = ab.longAnimationFrameScriptShare;
                  break;
                case "wY":
                  Zb = ab.gpuPassMs;
                  break;
                case "sY":
                  Zb = ab.gpuSubmitToDoneMs;
                  break;
                case "gY":
                  Zb = Ub.pacedShare;
                  break;
                case "CY":
                  Zb = Ub.switchesPerHour;
                  break;
                case "VY":
                  Zb = Ub.lagP50Ms;
                  break;
                case "OY":
                  Zb = Ub.lagP90Ms;
                  break;
                case "cY":
                  Zb = Ub.joinLagP90Ms;
                  break;
                case "vB":
                  Zb = (0, bB.j)(Eb);
                  break;
                case "mY":
                  Zb = Yb;
                  break;
                case "JY":
                case "SY":
                case "bB":
                case "aB":
                case "UB":
                case "AB":
                case "TB":
                case "EB":
                case "YB":
                case "BB":
                case "eB":
                case "LB":
                case "PB":
                case "XB":
                case "jB":
                  Zb = null;
                  break;
                case "WB":
                  Zb = (0, tM.getPlatformType)();
                  break;
                case "HB":
                  Zb = (0, tM.getGpuVendor)();
                  break;
                case "IB":
                  Zb = XB.e[bb.backend];
                  break;
                case "dB":
                  Zb = (0, LB.b)();
                  break;
                case "FB":
                  Zb = (0, tM.getOperatingSystem)();
                  break;
                case "hB":
                  Zb = (0, tM.getTrafficSource)();
                  break;
                case "GB":
                  Zb = null !== (eb = Ab.c.get("gameEntrySource")) && void 0 !== eb ? eb : AB.g;
                  break;
                case "QB":
                  Zb = ab.frameLimiter;
                  break;
                case "qB":
                  Zb = (0, EB.i)();
                  break;
                case "uB":
                  Zb = null !== (vb = (0, YB.c)()) && void 0 !== vb ? vb : AB.g;
                  break;
                case "rB":
                  Zb = (0, EB.b)(jb.width, jb.height);
                  break;
                case "oB":
                  Zb = (0, aB.k)(-(new Date).getTimezoneOffset());
                  break;
                case "wB":
                  Zb = null !== (Lb = bb.fallbackReason) && void 0 !== Lb ? Lb : AB.g;
                  break;
                case "CB":
                  Zb = "ready";
                  break;
                case "VB":
                  Zb = (0, tM.getSoftwareRenderer)();
                  break;
                case "tB":
                  Zb = null !== bb.shaderPackReach() ? "true" : "false";
                  break;
                case "OB":
                  Zb = null !== (Pb = bb.shaderPackReach()) && void 0 !== Pb && Pb.sceneDepth ? "true" : "false";
                  break;
                case "cB": {
                  const ab = bb.shaderPackReach();
                  Zb = null !== ab && void 0 !== ab && ab.sunShadow ? "all" : null !== ab && void 0 !== ab && ab.airShadow ? "air" : "none";
                  break
                }
                case "JB":
                  Zb = PB.w;
                  break;
                case "lB":
                case "sB":
                case "gB":
                  Zb = AB.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${yb}`)
              }
              if (void 0 === Zb) throw new Error(`Metric ${yb} has no value`);
              Xb[yb] = Zb
            }
            return Xb
          }(this.shell, {
            cpuFrameMs: ab,
            refreshHz: Ub,
            cpuBottleneck: Mb,
            frameIntervalCv: Tb,
            ...eb
          }, vb, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Xb);
        if (! function(bb, ab, Ub) {
            return (0, ta.c)(), bb(jb.p.Send, ab, Ub)
          }(this.shell.writeCmd, Pb.bd, function(bb) {
            const ab = (0, qb.d)((0, ga.f)(bb)),
              Ub = new Uint8Array(jb.Ud.BYTES + ab.length);
            return new DataView(Ub.buffer).setUint16(0, ga.c.AnalyticsUpdate, !0), Ub.set(ab, jb.Ud.BYTES), Ub
          }(Rb))) return this.unsentPage = Xb, this.pacing.unsent(vb), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, bB.h), (0, eB.o)(Rb, "wasm", Lb)
      }
    }
    var HB = Ub(38838);

    function IB(bb, ab, Ub) {
      const Ab = new Map;
      return (0, HB.c)(((bb, Ub, Ab) => ab.Av(bb, Ub, Ab)), ((ab, Ub, Mb) => {
        const Tb = `${ab},${Ub},${Mb}`;
        return Ab.has(Tb) || Ab.set(Tb, (0, qa.d)(bb, ab, Ub, Mb)), Ab.get(Tb)
      }), Ub)
    }
    var dB = Ub(38845),
      FB = Ub(39834);

    function hB(bb) {
      const ab = null !== bb && 0 !== (jb.t.playerFlags(bb.api.apiView, 0) & jb.Ed.CursorAim);
      ab !== (0, FB.s)() && (0, FB.K)(ab, null !== bb)
    }

    function GB(bb) {
      return (0, RA.c)(kA.B, bb)
    }
    const QB = new Tb.f((bb => Ub(41687)(`./${bb}/${bb}Client`)));
    let qB = null,
      uB = null;
    async function rB(bb) {
      qB ??= Ub.e(27).then((() => Ub(38428))).then((bb => {
        uB = bb.createDefaultClientPlugins
      }), (bb => {
        throw qB = null, bb
      })), await Promise.all([QB.load(bb), qB])
    }

    function KB(bb) {
      bb.load(new Ga(oA, new wA))
    }
    let oB = !1;
    const lB = new WeakMap;

    function tB(bb) {
      try {
        bb()
      } catch (ab) {
        console.error("[bloxd-wasm-client] a session-end step failed", ab)
      }
    }

    function wB(bb, ab) {
      ! function() {
        var bb, ab;
        rA.Howler.volume();
        const Ub = rA.Howler;
        null === (bb = Ub._autoResume) || void 0 === bb || bb.call(Ub), null === (ab = Ub._autoSuspend) || void 0 === ab || ab.call(Ub)
      }(), ab.audio.prepare();
      const Ub = new zb(ab.core, ab.memory, ab.audio);
      let Tb;
      try {
        Tb = new LM(Ub, ab.options)
      } catch (Pb) {
        return bb.crash(XM.u, Pb), null
      }(0, Bb.g)(PM(Ub, Tb));
      const vb = new ZY({
        running: bb,
        api: Ub,
        core: ab.core,
        memory: ab.memory,
        staleOr: ab.staleOr,
        reportFault: ab.reportReplayFault,
        options: ab.options,
        sessionInfo: ab.sessionInfo,
        replayShaderPack: ab.replayShaderPack
      });
      (0, aA.E)();
      const Lb = new hA({
        api: Ub,
        tables: Tb,
        sessionInfo: ab.sessionInfo,
        gameFactory: bb => QB.loadedFactory(bb),
        defaultPlugins: (bb, ab, Ub, Ab) => {
          if (null === uB) throw new Error("The default plugins started before they loaded");
          return uB(bb, ab, Ub, Ab)
        },
        serverOptions: ab.options,
        onNetEvent: bb => {
          vb.netEvent(bb), ab.onNetEvent(bb)
        },
        setLocalOptions: ab => {
          zY(bb, {
            changes: ab,
            reset: !1
          })
        },
        playSound: (bb, Ub, Ab, Mb, Tb, Eb, Yb) => ab.audio.playGame(bb, Ub, Ab, Mb, Tb, Eb, Yb),
        onSessionEnd: () => {
          tB(Mb.n), tB(JA), tB((() => {
            Ab.c.set({
              openInGameMenuName: null
            })
          })), tB((() => {
            ab.audio.cancelPreload()
          }))
        },
        beforeWrite: ab.beforeWrite,
        beforeOp: ab.beforeOp,
        cameraScreen: cA,
        showCameraFacing: nA,
        onEventOverflow: ab.onEventOverflow,
        screenBandY: Yb.i,
        replayEntities: vb.entityHooks,
        hasPackModel: ab.hasPackModel
      });
      return Lb.attach(bb), lB.set(Lb, vb), uA(Lb.items, ab.audio),
        function(bb) {
          bb.setClientFreeCameraGrant("isDev", !1);
          const ab = ab => {
            bb.setClientFreeCameraGrant("hasDeveloperRank", ab.playerHasRank("developer"))
          };
          (0, Eb.n)("userContextUpdated", ab)
        }(Lb), oB || (oB = !0, (0, Eb.n)("appManagerUpdated|openInGameMenuName", (bb => {
          !bb && (0, eb.f)().includes(eb.b) && (0, eb.g)(eb.b)
        }))), Lb
    }

    function sB(bb) {
      try {
        bb.closeGame()
      } finally {
        var ab;
        null === (ab = lB.get(bb)) || void 0 === ab || ab.stop(), lB.delete(bb)
      }
    }
  },
  39946: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    const Ab = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39961: (bb, ab, Ub) => {
    function Ab() {
      return Ub(39967)
    }

    function Mb() {
      return Ub(39976)
    }

    function Tb(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    Ub.d(ab, {
      e: () => Tb,
      g: () => Ab,
      k: () => Mb
    })
  },
  35745: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      d: () => Tb,
      e: () => Bb
    });
    var Ab = Ub(35739);
    const Mb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Tb(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const ab = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof ab && Mb.test(ab)
    }

    function Eb(bb, ab, Ub) {
      var Tb;
      const Eb = bb instanceof Error ? bb.name : "thrown",
        Yb = (bb instanceof Error && null !== (Tb = bb.stack) && void 0 !== Tb ? Tb : "").split("\n").filter((bb => Mb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        Bb = null === ab ? "wasm memory unknown" : `wasm memory ${Math.round(ab/2**20)} MB`,
        eb = null === Ub.panic ? "" : `, panic: ${(0,Ab.f)(Ub.panic)}`,
        vb = `${Eb}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,Ab.i)(Ub.kind,Ub.refusedBytes)} ${vb} (${Bb})${eb}${Yb.length>0?` | ${Yb.join(" < ")}`:""}`
    }
    const Yb = 500;

    function Bb(bb) {
      let ab = "[object Object]";
      try {
        ab = String(bb)
      } catch {}
      if ("[object Object]" !== ab) return ab;
      try {
        var Ub, Ab;
        return null !== (Ub = null === (Ab = JSON.stringify(bb)) || void 0 === Ab ? void 0 : Ab.slice(0, Yb)) && void 0 !== Ub ? Ub : ab
      } catch {
        return ab
      }
    }
  },
  41687: (bb, ab, Ub) => {
    var Ab = {
      "./bedwars/bedwarsClient": [38530, 9],
      "./bridgeBattle/bridgeBattleClient": [38532, 10],
      "./buildAFactory2/buildAFactory2Client": [37822, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [38535, 12],
      "./clutch/clutchClient": [38537, 13],
      "./containmentBreach/containmentBreachClient": [38541, 14],
      "./cooking/cookingClient": [38642, 15],
      "./defusal/defusalClient": [38645, 16],
      "./frontline/frontlineClient": [38651, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [38657, 18],
      "./luckyBedwars/luckyBedwarsClient": [38662, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [38671, 20],
      "./oneBlock/oneBlockClient": [38673, 21],
      "./plots/plotsClient": [38679, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [38772, 23],
      "./skyIslands/skyIslandsClient": [38777, 24],
      "./skyblock/skyblockClient": [37852, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [38780, 26]
    };

    function Mb(bb) {
      if (!Ub.o(Ab, bb)) return Promise.resolve().then((() => {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }));
      var ab = Ab[bb],
        Mb = ab[0];
      return Promise.all(ab.slice(1).map(Ub.e)).then((() => Ub(Mb)))
    }
    Mb.keys = () => Object.keys(Ab), Mb.id = 41687, bb.exports = Mb
  },
  39967: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39976: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35739: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      e: () => Tb,
      f: () => Bb,
      h: () => Eb,
      i: () => Mb
    });
    const Ab = /^alloc_failed (\d+) bytes$/;

    function Mb(bb, ab) {
      return Tb(bb, ab) ? `trap=alloc_failed ${ab} bytes` : `trap=${bb}`
    }

    function Tb(bb, ab) {
      return "unreachable" === bb && ab > 0
    }

    function Eb(bb, ab, Ub) {
      const Ab = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== Ab) return {
        kind: Ab,
        panic: null,
        refusedBytes: 0
      };
      const Mb = ab(),
        Tb = Ub();
      return {
        kind: Ab,
        panic: Tb > 0 ? null : Mb,
        refusedBytes: Tb
      }
    }
    const Yb = 300;

    function Bb(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, Yb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);