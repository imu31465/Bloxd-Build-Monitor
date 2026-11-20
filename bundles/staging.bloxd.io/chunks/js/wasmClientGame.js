export const id = 54;
export const ids = [54];
export const modules = {
  38607: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => Ob
    });
    var Bb = hb(16);

    function Ob(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function Gb(bb, ub) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([hb.e(106), hb.e(107), hb.e(102), hb.e(104), hb.e(211)]).then((() => hb(41199))).then((hb => {
        let {
          runClientGameMessage: Bb
        } = hb;
        Bb(bb, ub)
      })).catch((ub => {
        console.error(`Game message ${bb} failed`, ub)
      })) : Bb.i.vp("showPetUi", ub) : Bb.i.vp("refetchCode")
    }
  },
  42002: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb,
      f: () => Ob
    });
    const Bb = ["recording", "freecam", "keyframe"];

    function Ob() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  40244: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb
    });
    const Bb = 1 << 20,
      Ob = 1 << 21,
      Gb = 1024,
      Ub = 2048;

    function Lb(bb, ub, hb) {
      const Lb = bb + Bb,
        Yb = ub + Gb,
        Sb = hb + Bb;
      return Lb < 0 || Lb >= Ob || Sb < 0 || Sb >= Ob || Yb < 0 || Yb >= Ub ? -1 : (Lb * Ob + Sb) * Ub + Yb
    }
  },
  40238: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      h: () => Ub,
      i: () => Ob,
      m: () => Gb,
      p: () => ab,
      t: () => Sb,
      u: () => Yb,
      y: () => Lb
    });
    hb(3244);
    hb(40244);

    function Bb(bb) {}

    function Ob(bb) {}

    function Gb(bb) {}

    function Ub(bb) {}

    function Lb(bb) {}

    function Yb(bb, ub, hb) {}

    function Sb(bb) {}

    function ab(bb) {}
  },
  8996: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      g: () => Yb
    });
    var Bb = hb(13);
    const Ob = 24,
      Gb = "farNametags",
      Ub = 1e5;

    function Lb() {
      var bb;
      return null === (bb = Bb.d.get("showDistantNametags")) || void 0 === bb || bb
    }

    function Yb() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(Gb),
          ub = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(ub) && ub >= 0 ? Math.min(ub, Ub) : null
      }()) && void 0 !== bb ? bb : Lb() ? 0 : Ob
    }
  },
  41994: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      blockIdOf: () => eY.d,
      clearWasmCameraScreen: () => uO,
      creativeItemIds: () => hB.creativeItemIds,
      decodeMapSettings: () => MY,
      drainTextRerasters: () => tL.d,
      enchantmentPerksOf: () => hB.enchantmentPerksOf,
      endGameHost: () => TY,
      followCursorAim: () => sY,
      followMenuPrefs: () => cO,
      loadAudio: () => yY,
      loadClientGame: () => EY,
      loadTextIcons: () => tL.g,
      rasterText: () => vL.e,
      readBoardToEdit: () => JY,
      readDrawCensus: () => mY.d,
      setTextHost: () => tL.o,
      setTextLocalPlayer: () => tL.r,
      showInCreativeInvenOf: () => hB.showInCreativeInvenOf,
      startGameHost: () => kY,
      startShellAnalytics: () => iY,
      startSkyFeed: () => bY,
      textChanged: () => tL.u,
      warmText: () => vL.h,
      wasmCameraScreen: () => bO
    });
    hb(36123);
    var Bb = hb(13),
      Ob = hb(36459),
      Gb = hb(38777),
      Ub = hb(16),
      Lb = hb(3174),
      Yb = hb(36452),
      Sb = hb(1184),
      ab = hb(571),
      Hb = hb(37840),
      wb = hb(4555),
      Zb = hb(40095),
      Xb = hb(40035);
    const pb = Xb.Eb / 4,
      ob = Xb.m.PlaySound,
      Ab = Xb.m.SoundReset,
      lb = wb.V.ReplayFailed,
      Kb = wb.V.RecorderEvent;
    class Wb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = bb, this.memory = ub, this.audio = hb, this.serverIds = new Int32Array(256).fill(Xb.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Xb.o.BYTES)), this.renderPtr = 0, this.LH = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new Xb.W(bb, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.lOb(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(bb, ub) {
        const hb = this.eventView();
        return new Uint8Array(hb.buffer, hb.byteOffset + bb, ub)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Xb.o.localId(this.apiView, 0)
      }
      localDeaths() {
        return Xb.o.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const bb = this.apiView,
          ub = Xb.o.entRenderPtr(bb, 0),
          hb = Xb.o.entVisPtr(bb, 0),
          Bb = Xb.o.entCapacity(bb, 0);
        if (ub !== this.renderPtr || hb !== this.visPtr || Bb !== this.LH || this.renderBuffer !== this.buffer) {
          this.renderPtr = ub, this.visPtr = hb, this.LH = Bb, this.renderBuffer = this.buffer;
          const bb = this.memoryView(Float32Array, ub, Bb * pb, "the render array"),
            Ob = this.memoryView(Uint8Array, hb, Bb, "the visibility array");
          this.renderCapacity = bb && Ob ? Bb : 0, this.render = bb && Ob ? bb : new Float32Array(0), this.vis = bb && Ob ? Ob : new Uint8Array(0)
        }
      }
      memoryView(bb, ub, hb, Bb) {
        try {
          return (0, Zb.t)(bb, this.memory().buffer, ub, hb, Bb)
        } catch (Ob) {
          return this.keepCorruption(Ob), null
        }
      }
      memoryData(bb, ub, hb, Bb) {
        try {
          return (0, Zb.e)(this.memory().buffer, bb, ub, hb, Bb)
        } catch (Ob) {
          return this.keepCorruption(Ob), null
        }
      }
      reportCorruption(bb) {
        this.keepCorruption(new Zb.d(bb))
      }
      keepCorruption(bb) {
        if (!(bb instanceof Zb.d)) throw bb;
        this.corruption ??= bb
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(bb, ub, hb) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Bb,
          len: Ob
        } = bb;
        this.eventsPtr = Bb, this.eventsLen = Ob, this.eventsBuffer = null;
        const Gb = this.eventView();
        for (let Sb = 0; Sb < Ob;) {
          const bb = Gb.getUint32(Sb, !0),
            hb = 65535 & bb,
            Bb = bb >>> 16,
            Ob = Sb + wb.U;
          if (hb === Xb.m.EntitySpawned) {
            var Ub;
            if (Bb !== Xb.Kb.BYTES) throw nb(hb, Sb, Bb);
            const bb = Xb.Kb.serverId(Gb, Ob);
            this.spawned(bb, Xb.Kb.index(Gb, Ob), Xb.Kb.kind(Gb, Ob)), null === (Ub = ub.entityAdded) || void 0 === Ub || Ub.call(ub, bb)
          } else if ((hb === Xb.m.ChunkSlot || hb === Xb.m.EntityInfoChanged) && !(0, Xb.ce)(hb, Gb, Ob, Bb, ub)) throw nb(hb, Sb, Bb);
          Sb = Ob + (0, wb.Xd)(Bb)
        }
        try {
          var Lb;
          null === (Lb = ub.afterPrescan) || void 0 === Lb || Lb.call(ub), this.throwCorruption(), !hb() && this.dispatch(bb, ub, hb) && (this.throwCorruption(), this.applyListener(), ub.afterWalk(bb.kind)), this.throwCorruption()
        } catch (Yb) {
          throw Yb instanceof Zb.d && (this.corruption ??= Yb), Yb
        } finally {
          hb() || null !== this.corruption || this.applyDespawns(Ob, ub)
        }
      }
      applyDespawns(bb, ub) {
        const hb = this.eventView();
        for (let Ob = 0; Ob < bb;) {
          const bb = hb.getUint32(Ob, !0),
            Gb = Ob + wb.U;
          if ((65535 & bb) === Xb.m.EntityDespawned && bb >>> 16 === Xb.Kb.BYTES) {
            const bb = Xb.Kb.serverId(hb, Gb);
            var Bb;
            if (this.despawned(bb, Xb.Kb.index(hb, Gb))) null === (Bb = ub.entityRemoved) || void 0 === Bb || Bb.call(ub, bb)
          }
          Ob = Gb + (0, wb.Xd)(bb >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(bb, ub, hb) {
        const {
          len: Bb,
          net: Ob,
          netOffsets: Gb
        } = bb;
        let Ub = this.eventView(),
          Lb = 0;
        for (let db = 0; db < Bb;) {
          const bb = Ub.getUint32(db, !0),
            Bb = 65535 & bb,
            rb = bb >>> 16,
            Db = db + wb.U;
          let xb = !1;
          if (Lb < Ob.length && Gb[Lb] === db) ub.netEvent(Ob[Lb]), Lb++, xb = !0;
          else if (Bb === wb.V.LocalPlayerBound) {
            var Yb;
            if (rb !== wb.zb) throw nb(Bb, db, rb);
            null === (Yb = ub.localPlayerBound) || void 0 === Yb || Yb.call(ub, Ub.getInt32(Db, !0)), xb = !0
          } else if (Bb === wb.V.LocalHurt) {
            var Sb;
            if (rb !== wb.yb) throw nb(Bb, db, rb);
            null === (Sb = ub.localHurt) || void 0 === Sb || Sb.call(ub, Ub.getInt32(Db, !0), Ub.getFloat32(Db + 4, !0), Ub.getUint32(Db + 8, !0)), xb = !0
          } else if (Bb === wb.V.AttackHit) {
            var ab;
            if (rb !== wb.c) throw nb(Bb, db, rb);
            const bb = Ub.getFloat32(Db, !0),
              hb = Ub.getFloat32(Db + 4, !0),
              Ob = Ub.getFloat32(Db + 8, !0),
              Gb = Ub.getUint32(Db + 12, !0);
            null === (ab = ub.attackHit) || void 0 === ab || ab.call(ub, bb, hb, Ob, 0 !== (Gb & wb.k.Crit), 0 !== (Gb & wb.k.HitSelf))
          } else if (Bb === wb.V.PhysicsType) {
            var Hb;
            if (rb !== wb.Ub) throw nb(Bb, db, rb);
            null === (Hb = ub.physicsType) || void 0 === Hb || Hb.call(ub, Ub.getUint32(Db, !0), Ub.getInt32(Db + 4, !0)), xb = !0
          } else if (Bb === wb.V.VehicleEffect) {
            var Zb;
            const bb = jb(Ub, Db, rb);
            if (null === bb) throw nb(Bb, db, rb);
            null === (Zb = ub.vehicleEffect) || void 0 === Zb || Zb.call(ub, bb.op, bb.name, bb.icon, bb.level, bb.durationMs), xb = !0
          } else if (Bb === wb.V.ZoomChanged) {
            var pb;
            if (rb !== wb.Ld) throw nb(Bb, db, rb);
            null === (pb = ub.zoomChanged) || void 0 === pb || pb.call(ub, Ub.getFloat32(Db, !0), Ub.getUint8(Db + 4)), xb = !0
          } else if (Bb === wb.V.ZoomDisabled) {
            var Wb;
            if (0 !== rb) throw nb(Bb, db, rb);
            null === (Wb = ub.zoomDisabled) || void 0 === Wb || Wb.call(ub), xb = !0
          } else if (Bb === wb.V.GameCamera) {
            var Cb;
            null === (Cb = ub.gameCamera) || void 0 === Cb || Cb.call(ub, new Uint8Array(Ub.buffer, Ub.byteOffset + Db, rb).slice()), xb = !0
          } else if (Bb === Xb.m.ChunkSlot || Bb === Xb.m.EntityInfoChanged);
          else if (Bb >= ob && Bb <= Ab) {
            if (this.audio && !this.audio.onAudioEvent(Bb, Ub, Db, rb)) throw nb(Bb, db, rb)
          } else if (Bb >= lb && Bb <= Kb) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Bb, Ub, Db, rb)) throw nb(Bb, db, rb);
              xb = !0
            }
          } else if (Bb >= Xb.rd && Bb <= Xb.sd && Bb !== wb.V.EnvLighting) {
            if (!(0, Xb.ce)(Bb, Ub, Db, rb, ub)) throw nb(Bb, db, rb);
            xb = !0
          }
          if (xb) {
            if (hb()) return !1;
            Ub = this.eventView()
          }
          db = Db + (0, wb.Xd)(rb)
        }
        return !hb()
      }
      applyListener() {
        var bb;
        if (!this.audio) return;
        const ub = Xb.o.audioViewPtr(this.apiView, 0),
          hb = this.memory().buffer;
        let Bb = this.audioView;
        (null === (bb = Bb) || void 0 === bb ? void 0 : bb.buffer) === hb && Bb.byteOffset === ub || (Bb = (0, Zb.e)(hb, ub, Xb.s.BYTES, 8, "the audio view"), this.audioView = Bb), Bb && this.audio.applyListener(Bb)
      }
      indexOf(bb) {
        return this.indexById.get("number" === typeof bb ? bb : +bb)
      }
      isLocal(bb) {
        return bb !== Xb.ad && bb === Xb.o.localId(this.apiView, 0)
      }
      iK(bb) {
        const ub = [0, 0, 0];
        return this.readPosition("number" === typeof bb ? bb : +bb, ub) ? ub : null
      }
      readPosition(bb, ub) {
        const hb = this.apiView;
        if (void 0 !== this.indexById.get(bb) && this.isLocal(bb)) {
          for (let bb = 0; bb < 3; bb++) ub[bb] = Xb.o.localPos(hb, 0, bb);
          return !0
        }
        return this.readDrawnPosition(bb, ub)
      }
      readDrawnPosition(bb, ub) {
        const hb = this.apiView,
          Bb = this.indexById.get(bb);
        if (void 0 === Bb || Bb >= this.renderCapacity) return ub[0] = ub[1] = ub[2] = NaN, !1;
        const Ob = Bb * pb;
        for (let Gb = 0; Gb < 3; Gb++) ub[Gb] = this.render[Ob + Gb] + Xb.o.origin(hb, 0, Gb);
        return !0
      }
      checkValid(bb) {
        return void 0 !== this.indexOf(bb)
      }
      isAlive(bb) {
        const ub = this.indexOf(bb);
        if (void 0 === ub) return null;
        if (this.ensureViews(), ub >= this.renderCapacity) return null;
        const hb = this.vis[ub];
        return 0 === hb ? null : 0 !== (hb & Xb.$d.Alive)
      }
      getEntityType(bb) {
        const ub = this.indexOf(bb);
        return void 0 === ub ? this.isLocal("number" === typeof bb ? bb : +bb) ? "Player" : null : db(this.kinds[ub])
      }
      spawned(bb, ub, hb) {
        if (ub >= 1048576) throw new Zb.d(`entity ${bb} spawned at index ${ub}`);
        this.ensureIndex(ub), this.serverIds[ub] === bb && null !== this.idStr[ub] || (this.idStr[ub] = String(bb)), this.serverIds[ub] = bb, this.kinds[ub] = hb, this.indexById.set(bb, ub)
      }
      despawned(bb, ub) {
        let hb = !1;
        return this.indexById.get(bb) === ub && (this.indexById.delete(bb), hb = !0), ub < this.serverIds.length && this.serverIds[ub] === bb && (this.serverIds[ub] = Xb.ad, this.kinds[ub] = 0, this.idStr[ub] = null), hb
      }
      ensureIndex(bb) {
        const ub = this.serverIds.length;
        if (bb < ub) return;
        let hb = 2 * ub;
        for (; hb <= bb;) hb *= 2;
        const Bb = new Int32Array(hb).fill(Xb.ad);
        Bb.set(this.serverIds), this.serverIds = Bb;
        const Ob = new Uint16Array(hb);
        Ob.set(this.kinds), this.kinds = Ob;
        for (let Gb = ub; Gb < hb; Gb++) this.idStr.push(null)
      }
      eventView() {
        const bb = this.memory().buffer;
        return bb !== this.eventsBuffer && (this.eventsBuffer = bb, this.events = new DataView(bb, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const bb = this.memory().buffer;
        this.buffer = bb, this.viewPtr < 0 && (this.viewPtr = this.core.KOb()), this.view = new DataView(bb, this.viewPtr, Xb.o.BYTES), this.rereadDirectory()
      }
    }

    function Cb(bb) {
      return bb >>> Xb.c === Xb.n.Item
    }

    function db(bb) {
      var ub, hb;
      const Bb = bb & Xb.d;
      switch (bb >>> Xb.c) {
        case Xb.n.Lifeform:
          return null !== (ub = ab.i[Bb]) && void 0 !== ub ? ub : null;
        case Xb.n.Throwable:
          return null !== (hb = Hb.l[Bb]) && void 0 !== hb ? hb : null;
        case Xb.n.Mesh:
          return "Mesh";
        case Xb.n.Audio:
          return "AudioEntity";
        case Xb.n.Item:
          return "Item";
        default:
          return null
      }
    }
    const rb = new TextDecoder;

    function jb(bb, ub, hb) {
      if (hb < wb.od.HEAD_BYTES) return null;
      const Bb = bb.getUint32(ub, !0),
        Ob = bb.getUint32(ub + 20, !0),
        Gb = bb.getUint32(ub + 24, !0),
        Ub = wb.od.HEAD_BYTES + (0, wb.Xd)(Ob);
      if (Bb !== wb.od.UPDATE && Bb !== wb.od.REMOVE || Ob > hb || Ub + Gb > hb) return null;
      const Lb = (hb, Bb) => rb.decode(new Uint8Array(bb.buffer, bb.byteOffset + ub + hb, Bb)),
        Yb = bb.getFloat64(ub + 12, !0);
      return {
        op: Bb,
        level: bb.getFloat64(ub + 4, !0),
        durationMs: Number.isNaN(Yb) ? null : Yb,
        name: Lb(wb.od.HEAD_BYTES, Ob),
        icon: Lb(Ub, Gb)
      }
    }

    function nb(bb, ub, hb) {
      return new Zb.d(`event ${bb} at ${ub} of ${hb} bytes`)
    }
    var Db = hb(314),
      xb = hb(1124),
      zb = hb(38607),
      gb = hb(1829),
      ib = hb(40143),
      vb = hb(1784),
      tb = hb(38798),
      Jb = hb(38825),
      eb = hb(38810),
      Nb = hb(40071),
      sb = hb(2276),
      Mb = hb(38791),
      mb = hb(38816);
    const Ib = Math.max(Xb.ub.BYTES, Xb.mb.BYTES, Xb.qb.BYTES);

    function Pb(bb) {
      if (!(0, mb.c)(bb)) return null;
      const ub = Number(bb);
      return (0 | ub) === ub ? ub : null
    }
    class qb {
      constructor(bb) {
        this.api = bb, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Mb.g)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Ub = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = Xb.ad, this.localName = String(Xb.ad), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.Ub = null;
        const bb = this.api.queries.directorView() >= Xb.ub.BYTES ? this.scratchView() : null;
        null !== bb && (this.defaultFov = (0, vb.y)(Xb.ub.fov(bb, 0)), this.baseFov = (0, vb.y)(Xb.ub.baseFov(bb, 0)), this.aspect = Xb.ub.aspect(bb, 0), this.bodyHeading = Xb.ub.bodyHeading(bb, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(bb) {
        this.viewHeading = bb
      }
      get localPlayerId() {
        const bb = Xb.o.localId(this.api.apiView, 0);
        return bb !== this.localId && (this.localId = bb, this.localName = String(bb)), this.localName
      }
      getEntityPosition(bb) {
        return this.readEntity(bb) ? this.entityFeet : null
      }
      getEntityAimPoint(bb) {
        return this.readEntity(bb) ? this.entityAim : null
      }
      getEntityHeading(bb) {
        const ub = Pb(bb);
        if (null === ub) return null;
        const hb = Xb.o.localId(this.api.apiView, 0);
        return ub === hb && hb !== Xb.ad ? this.viewHeading : this.readEntity(bb) ? this.entityHeading : null
      }
      raycastTerrain(bb, ub, hb) {
        const Bb = this.api.queries.cameraSweep(bb[0], bb[1], bb[2], ub[0], ub[1], ub[2], hb);
        return Bb < hb - 1e-6 ? Bb : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const bb = this.defaultPose;
        bb.fov = this.defaultFov;
        const ub = this.api.queries.directorDefaultPose() >= Xb.mb.BYTES ? this.scratchView() : null;
        if (null === ub) return bb;
        for (let hb = 0; hb < 3; hb++) bb.position[hb] = Xb.mb.eye(ub, 0, hb);
        return bb.heading = Xb.mb.heading(ub, 0), bb.pitch = Xb.mb.pitch(ub, 0), bb
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
        const ub = Pb(bb);
        if (null === ub) return !1;
        if (ub === this.Ub) return this.entityLive;
        this.Ub = ub;
        const hb = this.api.queries.directorEntity(ub) >= Xb.qb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== hb, null === hb) return !1;
        for (let Bb = 0; Bb < 3; Bb++) this.entityFeet[Bb] = Xb.qb.feet(hb, 0, Bb), this.entityAim[Bb] = this.entityFeet[Bb];
        return this.entityAim[1] += Xb.qb.eyeHeight(hb, 0), this.entityHeading = Xb.qb.heading(hb, 0), !0
      }
      scratchView() {
        const bb = this.api.scratch(),
          ub = this.api.memory().buffer,
          hb = this.scratch;
        return null !== hb && hb.buffer === ub && hb.byteOffset === bb ? hb : (this.scratch = this.api.memoryData(bb, Ib, 8, "the director's record"), this.scratch)
      }
    }
    const Eb = {
        mode: "default"
      },
      yb = {
        show: () => {},
        clear: () => {}
      };

    function Vb() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Fb {
      constructor(bb) {
        this.options = bb, this.eH = void 0, this.director = void 0, this.latest = Eb, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          MJ: 0,
          mJ: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.nZ = new Int32Array(3 * Xb.Kd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Xb.Kd), this.eH = new qb(bb.api), this.director = new eb.c(this.eH)
      }
      settingsChanged(bb) {
        let ub = Eb;
        if (bb.length > 0) try {
          ub = (0, Nb.e)(bb)
        } catch {}
        this.latest = ub, this.pending = ub
      }
      call(bb, ub, hb, Bb, Ob, Gb) {
        var Ub, Lb;
        let Yb;
        this.holding = !1;
        try {
          Yb = this.answer(bb, ub, hb, Bb, Ob, Gb)
        } catch (wb) {
          var Sb, ab;
          throw this.answeredPose = !1, null === (Sb = (ab = this.options).showFacing) || void 0 === Sb || Sb.call(ab, null), wb
        }
        const Hb = this.answeredPose && 0 === (Bb & Xb.sb.Held);
        return this.answeredPose = Yb !== Xb.kb.None, this.holding = this.answeredPose && !Hb, null === (Ub = (Lb = this.options).showFacing) || void 0 === Ub || Ub.call(Lb, this.holding ? this.facing : null), Yb
      }
      holdsView() {
        return this.holding
      }
      answer(bb, ub, hb, Bb, Ob, Gb) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          eH: Ub
        } = this;
        Ub.readView();
        if (0 !== (Bb & Xb.sb.Held) || Ub.setViewHeading((0, tb.y)(Ub.bodyHeading)), void 0 !== this.pending) {
          const bb = this.pending;
          this.pending = void 0, this.director.setSettings(bb), this.syncShownSettings()
        }
        this.readLook((0, sb.g)(ub), (0, sb.g)(hb), Bb, (0, sb.g)(Ob), (0, sb.g)(Gb));
        const Lb = this.director.update(bb / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Lb) return Xb.kb.None;
        const [Yb, Sb, ab] = Lb.position;
        if (0 === this.options.api.queries.directorPose(Yb, Sb, ab, (0, tb.y)(Lb.heading), (0, tb.i)(Lb.pitch), (0, vb.k)(Lb.fov))) return Xb.kb.None;
        if ("default" === this.director.getSettings().mode) return Xb.kb.Pose;
        switch (this.facing) {
          case "camera":
            return Xb.kb.FaceCamera;
          case "cursor":
            return Xb.kb.FaceCursor;
          default:
            return Xb.kb.FaceMovement
        }
      }
      afterFrame(bb) {
        bb ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Eb, this.idle()
      }
      restart() {
        const bb = this.holding;
        this.idle(), this.holding = bb
      }
      idle() {
        var bb, ub;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new eb.c(this.eH), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (bb = (ub = this.options).showFacing) || void 0 === bb || bb.call(ub, null), this.setCentres(0)
      }
      syncShownSettings() {
        const bb = this.director.getSettings();
        if (bb === this.shownSettings) return;
        this.shownSettings = bb;
        const ub = (0, Jb.e)(bb);
        this.facing = ub.facing, this.mouseTurns = ub.mouseTurns
      }
      readLook(bb, ub, hb, Bb, Ob) {
        const Gb = this.look,
          Ub = 0 !== (hb & Xb.sb.LookPointed);
        if (null === this.mouseTurns && !Ub) return Gb.MJ = 0, Gb.mJ = 0, void(Gb.pointedAt = void 0);
        let Lb;
        Ub && (this.pointedAt.heading = Bb, this.pointedAt.pitch = Ob, Lb = this.pointedAt);
        const {
          eH: Yb
        } = this;
        Yb.setViewHeading((0, Jb.d)(Yb.getViewHeading(), bb, ub, Lb, "look" === this.mouseTurns, Gb))
      }
      writeCentres(bb) {
        const ub = this.next,
          hb = Math.min(bb.length, Xb.Kd);
        for (let Bb = 0; Bb < hb; Bb++)
          for (let hb = 0; hb < 3; hb++) ub[3 * Bb + hb] = Math.floor(bb[Bb][hb] / Xb.A);
        this.setCentres(hb)
      }
      setCentres(bb) {
        const {
          nZ: ub,
          next: hb
        } = this;
        let Bb = bb === this.centresLen;
        for (let Ob = 0; Bb && Ob < 3 * bb; Ob++) Bb = ub[Ob] === hb[Ob];
        Bb || (ub.fill(0), ub.set(hb.subarray(0, 3 * bb)), this.centresLen = bb, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const bb = this.options.cmd();
        null !== bb && (0, Xb.zf)(bb, 0, this.nZ, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var bb, ub, hb;
        return null !== (bb = null === (ub = (hb = this.options).screen) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : yb
      }
      hidden() {
        var bb;
        return (null !== (bb = this.options.isPageHidden) && void 0 !== bb ? bb : Vb)()
      }
      now() {
        var bb, ub, hb;
        return null !== (bb = null === (ub = (hb = this.options).now) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : performance.now()
      }
    }
    var fb = hb(40244);
    const kb = Xb.A * Xb.A * Xb.A,
      Tb = Math.log2(Xb.A),
      cb = Xb.A - 1,
      Qb = Xb.O.BYTES / 4,
      Rb = new Uint16Array(kb);

    function bu(bb, ub, hb) {
      return bb * Xb.A * Xb.A + ub * Xb.A + hb
    }
    class uu {
      constructor(bb) {
        this.chunk = bb
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(bb, ub, hb) {
        return bu(bb, ub, hb)
      }
    }
    class hu {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Bu {
      constructor(bb, ub, hb, Bb) {
        this.table = bb, this.slot = ub, this.generation = hb, this.epoch = Bb, this.Sw = new uu(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Rb, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get dX() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get LZ() {
        const bb = this.gameVoxels(),
          ub = this.layers ??= new Uint16Array(Xb.A);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let hb = 0; 0 !== this.staleLayers; hb++) {
          const Bb = 1 << hb;
          0 !== (this.staleLayers & Bb) && (this.staleLayers &= ~Bb, ub[hb] = Ou(bb, hb))
        }
        return ub
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const bb = this.voxelData(),
          ub = this.writes;
        if (null === ub || 0 === ub.ids.size) return bb;
        if (ub.from !== bb) {
          const hb = ub.patched ??= new Uint16Array(kb);
          hb.set(bb);
          for (const [bb, Bb] of ub.ids) hb[bb] = Bb;
          ub.from = bb
        }
        return ub.patched
      }
      written(bb) {
        var ub;
        return null === (ub = this.writes) || void 0 === ub ? void 0 : ub.ids.get(bb)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(bb, ub, hb) {
        const Bb = this.writes ??= new hu;
        Bb.ids.set(bb, ub), hb && Bb.cleared.add(bb), null !== Bb.from && (Bb.patched[bb] = ub);
        const Ob = 1 << (bb >> Tb & cb);
        Bb.layers |= Ob, this.staleLayers |= Ob, this.writeCount++
      }
      clearWrites() {
        const bb = this.writes;
        null !== bb && (this.staleLayers |= bb.layers, bb.ids.clear(), bb.cleared.clear(), bb.layers = 0, bb.from = null)
      }
      dataCleared(bb) {
        var ub;
        return !0 === (null === (ub = this.writes) || void 0 === ub ? void 0 : ub.cleared.has(bb))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const bb = this.table.slotWords(),
          ub = this.slot * Qb;
        if (this.epoch !== this.table.epoch || ub + Qb > bb.length || 0 === bb[ub + 3] || bb[ub + 2] !== this.generation) return this.data = Rb, this.dataPtr = 0, Rb;
        this.version = bb[ub + 1];
        const hb = bb[ub + 0],
          Bb = bb.buffer;
        return hb === this.dataPtr && Bb === this.dataBuffer || (this.dataPtr = hb, this.dataBuffer = Bb, this.data = this.table.voxelsAt(Bb, hb)), this.data
      }
    }

    function Ou(bb, ub) {
      const hb = bb[ub * Xb.A];
      for (let Bb = 0; Bb < Xb.A; Bb++) {
        const Ob = bu(Bb, ub, 0);
        for (let ub = 0; ub < Xb.A; ub++)
          if (bb[Ob + ub] !== hb) return 65535
      }
      return hb
    }
    const Gu = new Uint32Array(0);

    function Uu(bb, ub, hb) {
      return bu(bb & cb, ub & cb, hb & cb)
    }
    class Lu {
      constructor(bb, ub) {
        this.memory = bb, this.apiView = ub, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Gu, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Gu, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(bb, ub, hb, Bb, Ob, Gb) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Gb === Xb.P.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Gb !== Xb.P.Stored && Gb !== Xb.P.Unloaded) throw new Zb.d(`ChunkSlot flags ${Gb}`);
        const Ub = (0, fb.d)(bb, ub, hb);
        if (Ub < 0) return;
        if (Gb === Xb.P.Unloaded) return void this.chunks.delete(Ub);
        const Lb = this.chunks.get(Ub);
        (null === Lb || void 0 === Lb ? void 0 : Lb.slot) === Bb && Lb.generation === Ob || this.chunks.set(Ub, new Bu(this, Bb, Ob, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const bb = this.apiView(),
          ub = Xb.o.chunkSlotsPtr(bb, 0),
          hb = Xb.o.chunkSlotsLen(bb, 0);
        ub === this.slotsPtr && hb === this.slotsLen || (this.slotsPtr = ub, this.slotsLen = hb, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const bb = this.apiView(),
          ub = Xb.o.walkThroughPtr(bb, 0),
          hb = Xb.o.walkThroughLen(bb, 0);
        ub === this.walkPtr && hb === this.walkLen || (this.walkPtr = ub, this.walkLen = hb, this.walkBuffer = null, this.walkWords())
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
        var ub;
        bb !== this.slotsBuffer && (this.slotsBuffer = bb, this.slots = null !== (ub = (0, Zb.t)(Uint32Array, bb, this.slotsPtr, this.slotsLen * Qb, "the chunk directory")) && void 0 !== ub ? ub : Gu);
        return this.slots
      }
      voxelsAt(bb, ub) {
        try {
          var hb;
          return null !== (hb = (0, Zb.t)(Uint16Array, bb, ub, kb, "a chunk's voxels")) && void 0 !== hb ? hb : Rb
        } catch (Bb) {
          if (!(Bb instanceof Zb.d)) throw Bb;
          return this.corruption ??= Bb, Rb
        }
      }
      chunk(bb, ub, hb) {
        var Bb;
        return null !== (Bb = this.chunks.get((0, fb.d)(bb, ub, hb))) && void 0 !== Bb ? Bb : null
      }
      isLoaded(bb, ub, hb) {
        return void 0 !== this.chunkAt(Math.floor(bb), Math.floor(ub), Math.floor(hb))
      }
      bS(bb, ub, hb) {
        var Bb;
        const Ob = Math.floor(bb),
          Gb = Math.floor(ub),
          Ub = Math.floor(hb),
          Lb = this.chunkAt(Ob, Gb, Ub);
        if (!Lb) return 0;
        const Yb = Uu(Ob, Gb, Ub);
        return null !== (Bb = Lb.written(Yb)) && void 0 !== Bb ? Bb : Lb.voxelData()[Yb]
      }
      setOverlay(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Gb = this.chunkAt(bb, ub, hb);
        return !!Gb && (Gb.hasWrites() || this.written.push(Gb), Gb.write(Uu(bb, ub, hb), Bb, Ob), !0)
      }
      version(bb, ub, hb) {
        var Bb, Ob;
        return null !== (Bb = null === (Ob = this.chunks.get((0, fb.d)(bb, ub, hb))) || void 0 === Ob ? void 0 : Ob.dX) && void 0 !== Bb ? Bb : null
      }
      scan(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        const Yb = Xb.A;
        let Sb = 0;
        for (let ab = Math.floor(ub / Yb); ab * Yb < Ob; ab++) {
          const Hb = ab * Yb,
            wb = Math.min(Ob - Hb, Yb);
          for (let Ob = Math.floor(bb / Yb); Ob * Yb < Bb; Ob++) {
            const Zb = Ob * Yb,
              Xb = Math.min(Bb - Zb, Yb);
            for (let Bb = Math.floor(hb / Yb); Bb * Yb < Gb; Bb++) {
              const pb = this.chunks.get((0, fb.d)(Ob, ab, Bb));
              if (!pb) continue;
              const ob = Bb * Yb,
                Ab = Math.max(hb - ob, 0),
                lb = Math.min(Gb - ob, Yb),
                Kb = pb.LZ,
                Wb = pb.gameVoxels();
              for (let hb = Math.max(ub - Hb, 0); hb < wb; hb++) {
                const ub = Kb[hb];
                if (65535 === ub || 0 !== Ub[ub]) {
                  Sb++;
                  for (let ub = Math.max(bb - Zb, 0); ub < Xb; ub++) {
                    const bb = bu(ub, hb, 0);
                    for (let Bb = Ab; Bb < lb; Bb++) {
                      const Ob = Wb[bb + Bb];
                      0 !== Ub[Ob] && Lb.push(Zb + ub, Hb + hb, ob + Bb, Ob)
                    }
                  }
                }
              }
            }
          }
        }
        return Sb
      }
      dataCleared(bb, ub, hb) {
        var Bb;
        const Ob = Math.floor(bb),
          Gb = Math.floor(ub),
          Ub = Math.floor(hb);
        return !0 === (null === (Bb = this.chunkAt(Ob, Gb, Ub)) || void 0 === Bb ? void 0 : Bb.dataCleared(Uu(Ob, Gb, Ub)))
      }
      isWalkThrough(bb) {
        if (!Number.isInteger(bb) || bb < 0 || bb > 65535) return !1;
        const ub = this.walkWords(),
          hb = bb >>> 5;
        return hb < ub.length && 1 === (ub[hb] >>> (31 & bb) & 1)
      }
      walkWords() {
        const bb = this.memory().buffer;
        var ub;
        bb !== this.walkBuffer && (this.walkBuffer = bb, this.walk = null !== (ub = (0, Zb.t)(Uint32Array, bb, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ub ? ub : Gu);
        return this.walk
      }
      chunkAt(bb, ub, hb) {
        if ((0 | bb) !== bb || (0 | ub) !== ub || (0 | hb) !== hb) return;
        const Bb = (0, fb.d)(bb >> Tb, ub >> Tb, hb >> Tb);
        return Bb !== this.lastKey && (this.lastKey = Bb, this.lastChunk = this.chunks.get(Bb)), this.lastChunk
      }
    }
    var Yu = hb(38128),
      Su = hb(37420),
      au = hb(36430),
      Hu = hb(36231),
      wu = hb(9023),
      Zu = hb(38750),
      Xu = hb(191);
    const pu = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      ou = [
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
      Au = ou.map((bb => {
        let [ub] = bb;
        return ub
      })),
      lu = Uint8Array.from(ou, (bb => {
        let [, ub] = bb;
        return ub
      })),
      Ku = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Wu = 8;
    var Cu = hb(36396),
      du = hb(36418),
      ru = hb(36411),
      ju = hb(248);
    class nu {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ju.e;
        this.sheet = bb, this.onError = ub, this.idle = hb, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = bb => {
          this.cancelIdle = null;
          try {
            if (bb.timeRemaining() >= 1) {
              let bb = this.queue.shift();
              for (; void 0 !== bb && !this.load(bb);) bb = this.queue.shift()
            }
          } catch (ub) {
            this.onError(ub)
          } finally {
            this.schedule()
          }
        }
      }
      preload(bb) {
        const ub = [...bb].sort(((bb, ub) => bb - ub));
        for (const hb of ub) this.asked.has(hb) || (this.asked.add(hb), this.queue.push(hb));
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
        const ub = this.sheet(bb, !1),
          hb = this.sheet(bb, !0),
          [Bb, Ob] = "unloaded" === ub.state() && "unloaded" !== hb.state() ? [hb, ub] : [ub, hb],
          Gb = this.gen,
          Ub = () => {
            try {
              Gb === this.gen && "unloaded" === Ob.state() && Ob.load()
            } catch (bb) {
              this.onError(bb)
            }
          },
          Lb = Bb.state();
        return "unloaded" === Lb ? (Bb.once("load", Ub), Bb.load(), !0) : "unloaded" === Ob.state() && ("loading" === Lb ? (Bb.once("load", Ub), !1) : (Ob.load(), !0))
      }
    }
    var Du = hb(40347);
    const xu = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      zu = Xu.e.Tl * Xu.e.playerEyeToHeightRatio,
      gu = [0, 0, -1, 0, 1, 0],
      iu = pu.indexOf("note");

    function vu(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }

    function tu(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Bb = function(bb) {
        let ub = 0,
          hb = Au.length;
        for (; ub < hb;) {
          const Bb = ub + hb >>> 1;
          Au[Bb] < bb ? ub = Bb + 1 : hb = Bb
        }
        return ub
      }(bb);
      if ("" === bb || null === (ub = Au[Bb]) || void 0 === ub || !ub.startsWith(bb)) return -1;
      if (Au[Bb] === bb) return Bb;
      let Ob = Bb + 1;
      for (; Ob < Au.length && Au[Ob].startsWith(bb);) Ob++;
      return Bb + Math.floor(hb() * (Ob - Bb))
    }
    class Ju {
      constructor(bb, ub, hb, Bb, Ob) {
        this.group = bb, this.loudness = ub, this.startMs = hb, this.howl = Bb, this.host = Ob, this.id = 0, this.direct = !1
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
    class eu {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = bb, this.listener = ub, this.now = hb, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(pu.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new ru.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: bb => this.aliveVoice(bb),
          started: bb => this.started.has(bb),
          drop: bb => {
            var ub;
            null === (ub = this.live.get(bb)) || void 0 === ub || ub.howl.stop(bb), this.forget(bb)
          }
        }, this.handlers = {
          playSound: (bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) => {
            if (Bb >= Au.length) return;
            const Sb = 0 !== (Ob & Xb.Vd.Loop);
            Ob & Xb.Vd.TwoD ? this.start(Bb, !1, Ub, Gb, Lb, Sb) : this.startSpatial(Bb, Ub, Gb, Lb, Sb, bb, ub, hb, Yb, this.earDistSq(bb, ub, hb))
          },
          soundPos: (bb, ub, hb, Bb) => {
            const Ob = this.core.get(Bb);
            var Gb;
            void 0 !== Ob && (null === (Gb = this.live.get(Ob)) || void 0 === Gb || Gb.howl.pos(hb, ub, bb, Ob))
          },
          soundSet: (bb, ub, hb, Bb) => {
            const Ob = this.core.get(bb),
              Gb = void 0 === Ob ? void 0 : this.live.get(Ob);
            void 0 !== Ob && Gb && (this.setRel(Ob, ub), Gb.rate = hb, Gb.howl.rate(hb, Ob), Gb.spatial && Gb.howl.pannerAttr({
              refDistance: Bb
            }, Ob))
          },
          soundFade: (bb, ub, hb, Bb) => {
            const Ob = this.core.get(bb);
            void 0 !== Ob && this.fade(Ob, ub, hb, 0 !== (Bb & Xb.Ud.StopAfter))
          },
          soundStop: bb => {
            const ub = this.core.get(bb);
            var hb;
            void 0 !== ub && (null === (hb = this.live.get(ub)) || void 0 === hb || hb.howl.stop(ub), this.forget(ub))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new nu(((bb, ub) => this.sheet(bb, ub)), (bb => {
          this.errors++, console.error("Audio preload failed", bb)
        }), Bb)
      }
      prepare() {
        for (let bb = 0; bb < pu.length; bb++) this.prepareSheet(bb)
      }
      prepareSheet(bb) {
        this.sheet(bb, !1), this.sheet(bb, !0)
      }
      preload(bb) {
        this.loader.preload(bb)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let bb = 0; bb < pu.length; bb++) {
          if (du.b.has(pu[bb])) continue;
          const ub = [];
          for (const Bb of [!1, !0]) {
            const hb = Nu(bb, Bb),
              Ob = this.sheets.get(hb);
            void 0 !== Ob && "loading" !== Ob.state() && ub.push({
              key: hb,
              howl: Ob
            })
          }
          if (!ub.some((bb => {
              let {
                howl: ub
              } = bb;
              return "loaded" === ub.state()
            }))) continue;
          this.unloading[bb] += ub.length;
          const hb = () => {
            this.unloading[bb]--, 0 === this.unloading[bb] && this.prepareSheet(bb)
          };
          for (const {
              key: bb,
              howl: Bb
            }
            of ub) this.sheets.delete(bb), "loaded" === Bb.state() ? (0, Cu.d)(Bb, hb) : (Bb.unload(), hb())
        }
      }
      onAudioEvent(bb, ub, hb, Bb) {
        if (bb < Xb.m.PlaySound || bb > Xb.m.SoundReset) return !1;
        try {
          return (0, Xb.ce)(bb, ub, hb, Bb, this.handlers)
        } catch (Ob) {
          return this.errors++, console.error("Audio event failed", Ob), !0
        }
      }
      applyListener(bb) {
        const ub = this.nextPose;
        for (let Bb = 0; Bb < 3; Bb++) ub[2 - Bb] = Xb.s.listener(bb, 0, Bb), ub[5 - Bb] = Xb.s.forward(bb, 0, Bb), ub[8 - Bb] = Xb.s.up(bb, 0, Bb);
        0 === ub[3] && 0 === ub[4] && 0 === ub[5] && ub.set(this.posed ? this.pose.subarray(3) : gu, 3);
        for (let Bb = 0; Bb < 9; Bb++)
          if (!Number.isFinite(ub[Bb])) return;
        const hb = this.pose;
        if (this.posed) {
          let bb = !0;
          for (let Bb = 0; Bb < 9 && bb; Bb++) bb = ub[Bb] === hb[Bb];
          if (bb) return
        }
        this.listener.apply(ub) && (hb.set(ub), this.posed = !0)
      }
      playGame(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = tu(bb);
        if (Lb < 0) return Du.c;
        if (!hb) {
          const {
            howl: bb,
            id: hb
          } = this.start(Lb, !1, ub, 0, 1, Ub);
          return this.gameSound(bb, hb, !1)
        }
        const Yb = hb[0],
          Sb = hb[1] + zu,
          ab = hb[2];
        if (!Number.isFinite(Yb) || !Number.isFinite(Sb) || !Number.isFinite(ab)) return Du.c;
        let Hb;
        if (Bb) {
          const bb = Yb - Bb[0],
            ub = Sb - Bb[1],
            hb = ab - Bb[2];
          if (Hb = bb * bb + ub * ub + hb * hb, Hb > Ob * Ob) return Du.c
        } else Hb = this.earDistSq(Yb, Sb, ab);
        const wb = this.startSpatial(Lb, ub, 0, 1, Ub, Yb, Sb, ab, Gb, Hb);
        return wb ? this.gameSound(wb.howl, wb.id, !0) : Du.c
      }
      setMaster(bb, ub) {
        this.level = vu(bb);
        const hb = ub ? this.level : 0;
        if (hb !== this.master) {
          this.master = hb;
          for (const [bb, ub] of this.live) ub.fadeMs = 0, ub.gain = ub.rel * this.master, ub.howl.volume(ub.gain, bb)
        }
      }
      stopCore() {
        for (const ub of [...this.core.values()]) {
          var bb;
          null === (bb = this.live.get(ub)) || void 0 === bb || bb.howl.stop(ub)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [bb, ub] of [...this.live]) ub.howl.stop(bb), this.forget(bb);
        this.core.clear()
      }
      gameSound(bb, ub, hb) {
        const Bb = {
          stop: () => (this.live.has(ub) && bb.stop(ub), Bb),
          fade: (bb, hb, Ob) => {
            var Gb, Ub;
            const Lb = this.level > 0 ? hb / this.level : hb > 0 && null !== (Gb = null === (Ub = this.live.get(ub)) || void 0 === Ub ? void 0 : Ub.rel) && void 0 !== Gb ? Gb : 0;
            return this.fade(ub, Lb, Ob, !1), Bb
          },
          rate: hb => {
            const Ob = this.live.get(ub);
            return Ob && (Ob.rate = function(bb) {
              return bb > 0 && bb < 1 / 0 ? bb : 1
            }(hb), bb.rate(Ob.rate, ub)), Bb
          },
          getVolume: () => {
            var bb, hb;
            return (null !== (bb = null === (hb = this.live.get(ub)) || void 0 === hb ? void 0 : hb.rel) && void 0 !== bb ? bb : 0) * this.level
          },
          getRelativeVolume: () => {
            var bb, hb;
            return null !== (bb = null === (hb = this.live.get(ub)) || void 0 === hb ? void 0 : hb.rel) && void 0 !== bb ? bb : 0
          },
          setRelativeVolume: bb => (this.setRel(ub, bb), Bb),
          setPannerAttr: Ob => {
            if (hb && this.live.has(ub)) {
              const hb = {
                ...xu,
                refDistance: au.d
              };
              for (const [bb, ub] of Object.entries(Ob)) "number" !== typeof ub && "string" !== typeof ub || (hb[bb] = ub);
              bb.pannerAttr({
                coneOuterAngle: hb.coneOuterAngle
              }, ub), bb.pannerAttr(hb, ub)
            }
            return Bb
          },
          setPosition: Ob => (hb && this.live.has(ub) && Number.isFinite(Ob[0] + Ob[1] + Ob[2]) && bb.pos(Ob[2], Ob[1], Ob[0], ub), Bb)
        };
        return Bb
      }
      startSpatial(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        const ab = this.sheet(lu[bb], !0);
        let Hb = null;
        if (!Ob) {
          if (this.failed.has(ab)) return null;
          const hb = lu[bb] === iu ? null : (0, ru.h)(Au[bb]),
            Bb = (0, ru.f)(vu(ub), Math.sqrt(Sb), Yb);
          if (Hb = new Ju(hb, Bb, this.now(), ab, this.voiceHost), !this.voices.admit(Hb)) return null
        }
        const wb = this.start(bb, !0, ub, hb, Bb, Ob);
        return Hb && (Hb.id = wb.id, Hb.direct = "loaded" === ab.state() && !ab._playLock), ab.pannerAttr({
          coneOuterAngle: 360
        }, wb.id), ab.pannerAttr({
          ...xu,
          refDistance: Yb
        }, wb.id), ab.pos(Lb, Ub, Gb, wb.id), wb
      }
      aliveVoice(bb) {
        const ub = this.live.get(bb);
        if (!ub) return;
        const hb = ub.howl._soundById(bb);
        if (hb && !hb._ended) return ub;
        this.forget(bb)
      }
      earDistSq(bb, ub, hb) {
        if (!this.posed) return 0;
        const Bb = bb - this.pose[2],
          Ob = ub - this.pose[1],
          Gb = hb - this.pose[0];
        return Bb * Bb + Ob * Ob + Gb * Gb
      }
      start(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = vu(hb),
          Lb = this.sheet(lu[bb], ub);
        "unloaded" === Lb.state() && Lb.load();
        const Yb = Lb.play(Au[bb]),
          Sb = Ub * this.master;
        return Lb.volume(Sb, Yb), this.live.set(Yb, {
          howl: Lb,
          rel: Ub,
          gain: Sb,
          fadeFrom: Sb,
          fadeAt: 0,
          fadeMs: 0,
          rate: Ob,
          handle: Bb,
          spatial: ub,
          stopTimer: void 0
        }), 0 !== Bb && this.core.set(Bb, Yb), 1 !== Ob && Lb.rate(Ob, Yb), Gb && Lb.loop(!0, Yb), {
          howl: Lb,
          id: Yb
        }
      }
      sheet(bb, ub) {
        const hb = Nu(bb, ub);
        let Bb = this.sheets.get(hb);
        if (!Bb) {
          const Ob = this.createHowl(pu[bb], ub);
          Ob.on("end", (bb => {
            Ob.loop(bb) || this.forget(bb)
          })), Ob.on("stop", (bb => {
            this.forget(bb)
          })), Ob.on("play", (bb => {
            this.live.has(bb) && this.started.add(bb)
          })), Ob.on("loaderror", (bb => {
            if ("loaded" !== Ob.state()) {
              this.failed.add(Ob);
              for (const [bb, ub] of this.live) ub.howl === Ob && this.forget(bb)
            } else "number" === typeof bb && this.forget(bb)
          })), this.sheets.set(hb, Ob), Bb = Ob
        }
        return Bb
      }
      setRel(bb, ub) {
        const hb = this.live.get(bb);
        hb && (su(hb), hb.fadeMs = 0, hb.rel = vu(ub), hb.gain = hb.rel * this.master, hb.howl.volume(hb.gain, bb))
      }
      fade(bb, ub, hb, Bb) {
        const Ob = this.live.get(bb);
        if (!Ob) return;
        su(Ob);
        const {
          howl: Gb
        } = Ob, Ub = this.gainNow(Ob);
        Ob.rel = vu(ub), Ob.gain = Ob.rel * this.master;
        const Lb = hb > 0 ? Math.min(hb, 65535) : 0,
          Yb = 0 === Lb || Ub === Ob.gain;
        Ob.fadeMs = Yb ? 0 : Lb, Yb ? Gb.volume(Ob.gain, bb) : (Ob.fadeFrom = Ub, Ob.fadeAt = this.now(), Gb.fade(Ub, Ob.gain, Lb, bb)), Bb && (Yb ? Gb.stop(bb) : Ob.stopTimer = setTimeout((() => {
          Ob.stopTimer = void 0, Gb.stop(bb)
        }), Lb))
      }
      gainNow(bb) {
        if (bb.fadeMs > 0) {
          const ub = (this.now() - bb.fadeAt) / bb.fadeMs;
          if (ub < 1) return bb.fadeFrom + (bb.gain - bb.fadeFrom) * Math.max(0, ub);
          bb.fadeMs = 0
        }
        return bb.gain
      }
      forget(bb) {
        this.started.delete(bb);
        const ub = this.live.get(bb);
        ub && (su(ub), this.live.delete(bb), 0 !== ub.handle && this.core.get(ub.handle) === bb && this.core.delete(ub.handle))
      }
    }

    function Nu(bb, ub) {
      return 2 * bb + (ub ? 1 : 0)
    }

    function su(bb) {
      void 0 !== bb.stopTimer && (clearTimeout(bb.stopTimer), bb.stopTimer = void 0)
    }
    var Mu = hb(40061),
      mu = hb(38752);
    class Iu {
      constructor(bb, ub, hb, Bb) {
        this.key = bb, this.model = ub, this.host = Bb, this.LH = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.nOb = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.FZ = !1, this.LH = Math.max(1, Math.ceil(hb)), this.records = new Float32Array(this.LH * Yu.d), this.isDirty = new Uint8Array(this.LH), this.tail = new Uint8Array(this.LH * Xb.mc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Bb.cmd())
      }
      setOrigin(bb, ub, hb) {
        this.origin[0] = bb, this.origin[1] = ub, this.origin[2] = hb
      }
      markDirty(bb) {
        !this.FZ && bb >= 0 && bb < this.LH && bb < Xb.mc.Max && this.ZX(bb, bb + 1)
      }
      commit(bb) {
        if (this.FZ) return;
        (bb = Math.min(Math.max(Math.floor(bb), 0), this.LH, Xb.mc.Max)) > this.count && this.ZX(this.count, bb), this.count = bb;
        const {
          origin: ub,
          sentOrigin: hb,
          dirtyList: Bb
        } = this, Ob = this.nOb !== bb, Gb = hb[0] !== ub[0] || hb[1] !== ub[1] || hb[2] !== ub[2];
        if (0 === Bb.length && !Ob && !Gb) return;
        const Ub = this.host.cmd();
        if (!Ub || !this.make(Ub)) return;
        const Lb = Bb.length,
          {
            records: Yb,
            tailView: Sb
          } = this;
        for (let ab = 0; ab < Lb; ab++) {
          const bb = Bb[ab],
            ub = bb * Yu.d,
            hb = ab * Xb.mc.Bytes,
            Ob = 0 !== Yb[ub + Yu.h] ? Xb.mc.Hidden : 0;
          Sb.setUint32(hb, (bb | Ob) >>> 0, !0), Sb.setFloat32(hb + 4, Yb[ub], !0), Sb.setFloat32(hb + 8, Yb[ub + 1], !0), Sb.setFloat32(hb + 12, Yb[ub + 2], !0)
        }
        if ((0, Xb.Ee)(Ub, 0, this.key, bb, ub, Lb, this.tailOf(Lb))) {
          for (let bb = 0; bb < Lb; bb++) this.isDirty[Bb[bb]] = 0;
          Bb.length = 0, this.nOb = bb, hb[0] = ub[0], hb[1] = ub[1], hb[2] = ub[2]
        }
      }
      grow(bb) {
        (bb = Math.ceil(bb)) <= this.LH || this.FZ || (this.records = (0, mu.c)(this.records, new Float32Array(bb * Yu.d)), this.isDirty = (0, mu.c)(this.isDirty, new Uint8Array(bb)), this.tail = new Uint8Array(bb * Xb.mc.Bytes), this.tailView = new DataView(this.tail.buffer), this.LH = bb)
      }
      dispose() {
        this.FZ || (this.FZ = !0, this.host.FZ(this, this.made ? this.key : null))
      }
      make(bb) {
        if (!this.made && bb) {
          const {
            item: ub,
            scale: hb,
            yaw: Bb
          } = this.model;
          this.made = (0, Xb.Je)(bb, 0, this.key, ub, hb, Bb)
        }
        return this.made
      }
      tailOf(bb) {
        const ub = bb * Xb.mc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === ub || (this.tailCut = this.tail.subarray(0, ub)), this.tailCut
      }
      ZX(bb, ub) {
        const {
          dirtyList: hb,
          isDirty: Bb
        } = this;
        for (let Ob = bb; Ob < ub; Ob++) 0 === Bb[Ob] && (Bb[Ob] = 1, hb.push(Ob))
      }
    }
    var Pu = hb(580);
    class qu {
      constructor(bb) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: bb,
          owes: bb => {
            this.owing.add(bb)
          },
          settled: (bb, ub) => {
            this.owing.delete(bb), ub && this.live.delete(bb)
          }
        }
      }
      create(bb, ub) {
        if (hb = bb, !Pu.k.includes(hb)) return null;
        var hb;
        const Bb = new Eu(++this.keys, ab.i.indexOf(bb), ub, this.host);
        return this.live.add(Bb), Bb
      }
      disposeAll() {
        for (const bb of [...this.live]) bb.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const bb = this.host.cmd();
        for (const ub of this.owing)
          if (!ub.sync(bb)) return
      }
    }
    class Eu {
      constructor(bb, ub, hb, Bb) {
        this.key = bb, this.lifeform = ub, this.scale = hb, this.host = Bb, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.FZ = !1, this.sync()
      }
      setPose(bb, ub) {
        this.FZ || (this.feet[0] = bb[0], this.feet[1] = bb[1], this.feet[2] = bb[2], this.yaw = ub, this.owed |= 2, this.sync())
      }
      setVisible(bb) {
        this.FZ || bb === this.visible || (this.visible = bb, this.owed |= 4, this.sync())
      }
      dispose() {
        this.FZ || (this.FZ = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(bb) ? (this.host.settled(this, this.FZ), !0) : (this.host.owes(this), !1)
      }
      write(bb) {
        if (!bb) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, Xb.Te)(bb, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const ub = (2 & this.owed ? Xb.Sc.Pose : 0) | (4 & this.owed ? Xb.Sc.Visible : 0);
        if (0 !== ub) {
          if (!(0, Xb.Pe)(bb, 0, this.key, ub, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, Xb.Ne)(bb, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var yu = hb(40489);

    function Vu(bb, ub, hb, Bb) {
      return (0, yu.e)(), (0, Xb.Bf)(bb, ub, hb, Bb)
    }
    var Fu = hb(38755),
      fu = hb(40052);
    const ku = [0, 0, 0],
      Tu = [0, 0, 0],
      cu = [0, 0, 0],
      Qu = [0, 0, 0],
      Ru = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      bh = [0, 0, 0],
      uh = [0, 0],
      hh = [1, 1, 1],
      Bh = 1 / 3;
    const Oh = Su.g;

    function Gh(bb) {
      const ub = Su.d[bb],
        hb = ub && Su.g[ub.mainMultiblock];
      return hb && {
        main: hb,
        x: ub.compX,
        y: ub.compY,
        z: ub.compZ
      }
    }

    function Uh(bb) {
      if (null === bb || void 0 === bb) return Xb.ad;
      const ub = +bb;
      return Number.isInteger(ub) && ub >= -2147483648 && ub <= 2147483647 && String(ub) === String(bb) ? ub : Xb.ad
    }

    function Lh(bb, ub, hb) {
      return (0, Xb.Gf)(bb, 0, ub, null !== hb && void 0 !== hb ? hb : Number.NaN)
    }
    class Yh {
      constructor(bb) {
        this.deps = bb, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Fu.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (bb => {
          var ub, hb;
          null === (ub = (hb = this.deps).setLocalOptions) || void 0 === ub || ub.call(hb, bb)
        })), this.mobModels = new qu((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          FZ: (bb, ub) => {
            this.livePools.delete(bb), null !== ub && (this.owedFrees.push(ub), this.flushOwed())
          }
        }, this.api = bb.api, this.live = bb.live, this.chunks = bb.chunks, this.items = bb.items, this.tables = bb.tables
      }
      isLocal(bb) {
        return null !== bb && void 0 !== bb && +bb === this.api.localId
      }
      assertLocal(bb, ub) {
        if (!this.isLocal(bb)) throw new Error(`Attempted to ${ub} for a player that is not the local player`)
      }
      iK(bb) {
        const ub = this.api.iK(bb);
        if (!ub) throw new Error(`Entity ${bb} has no replicated position`);
        return ub
      }
      checkValid(bb) {
        return !!this.deps.isSessionLive() && (null === bb || void 0 === bb || this.api.checkValid(bb))
      }
      isAlive(bb) {
        return !1 !== this.api.isAlive(bb)
      }
      getItemStat(bb, ub, hb) {
        return this.isLocal(bb) || null !== bb && "Player" === this.api.getEntityType(bb) ? this.tables.getItemStat(ub, hb) : this.tables.getDefaultItemStat(ub, hb)
      }
      getClientOption(bb, ub) {
        return this.assertLocal(bb, "get a client option"), this.tables.getClientOption(ub)
      }
      openShop(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(bb, "open shop"), Ub.i.vp("showShopFromServer", {
          toggle: ub,
          kh: hb
        }, !0)
      }
      sendMessage(bb, ub, hb) {
        this.assertLocal(bb, "send a message");
        const Bb = "string" === typeof ub ? [{
          str: ub,
          style: hb
        }] : ub;
        Ub.i.vp("chat", {
          content: Bb
        }, !0)
      }
      getEntityType(bb) {
        return this.api.getEntityType(bb)
      }
      getEntityName(bb) {
        const ub = Uh(bb);
        return ub === Xb.ad ? void 0 : (0, Mu.i)(this.api, ub)
      }
      hasEffect(bb, ub) {
        const hb = Uh(bb);
        return hb !== Xb.ad && (0, Mu.e)(this.api, hb, ub)
      }
      getMetaInfo(bb) {
        return this.tables.getMetaInfo(bb)
      }
      getPlayerDbId(bb) {
        return this.assertLocal(bb, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(bb, ub, hb) {
        if (!this.chunks.dataCleared(bb, ub, hb)) return (0, Mu.b)(this.api, bb, ub, hb)
      }
      vJ(bb, ub, hb, Bb) {
        this.setBlockId(bb, ub, hb, this.tables.getItemId(Bb))
      }
      setOtherEntitySetting(bb, ub, hb, Bb) {
        if (!this.isLocal(bb)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Xb.nd, hb)) throw new Error(`Unknown other-entity setting ${hb}`);
        const Ob = Xb.nd[hb],
          Gb = Uh(ub);
        if (Gb === Xb.ad || !this.deps.beforeWrite()) return;
        const Ub = (0, Nb.h)(Bb);
        if (Ub.length > 16384) throw new Error(`The other-entity setting ${hb}'s value is over 16384 bytes`);
        const Lb = this.api.memoryView(Uint8Array, this.api.scratch(), Ub.length, "set_other_entity_setting's value");
        Lb && (Lb.set(Ub), this.api.queries.setOtherEntitySetting(Gb, Ob, Ub.length))
      }
      getPositionView(bb) {
        return this.live.position(+bb)
      }
      readDrawnPosition(bb, ub) {
        return this.api.readDrawnPosition(Uh(bb), ub)
      }
      getDrawnHeading(bb) {
        const ub = Uh(bb),
          hb = (ub === Xb.ad ? 0 : this.api.queries.directorEntity(ub)) >= Xb.qb.BYTES ? this.api.memoryData(this.api.scratch(), Xb.qb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!hb) return null;
        if (1 === Xb.qb.headingIsDrawn(hb, 0)) return Xb.qb.heading(hb, 0);
        const Bb = this.api.apiView;
        return this.isLocal(bb) && 0 === (Xb.o.playerFlags(Bb, 0) & Xb.Ad.FreeCam) ? Xb.o.heading(Bb, 0) : null
      }
      getLocalPlayerMovement() {
        const bb = Xb.o.playerFlags(this.api.apiView, 0);
        return 0 === (bb & Xb.Ad.Replay) && this.api.readDrawnPosition(this.api.localId, cu) ? {
          onGround: 0 !== (bb & Xb.Ad.OnGround),
          jumpHeld: 0 !== (bb & Xb.Ad.JumpHeld)
        } : null
      }
      cub(bb) {
        return this.isLocal(bb) ? this.items.MS() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var bb, ub;
        return "Gun" === (null === (bb = this.aliveHeld()) || void 0 === bb || null === (ub = bb.typeObj) || void 0 === ub ? void 0 : ub.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.MS()
      }
      isCrosshairShown() {
        var bb, ub;
        const hb = (0, Hu.e)(Bb.d.get("crosshairGameView"), Bb.d.get("crosshairShownOverride"));
        if (null !== hb) return hb;
        const Ob = null === (bb = this.aliveHeld()) || void 0 === bb ? void 0 : bb.typeObj,
          Gb = "Gun" === (null === Ob || void 0 === Ob ? void 0 : Ob.type),
          Ub = Gb || !0 === (null === Ob || void 0 === Ob ? void 0 : Ob.showsAimingUi),
          Lb = 0 === (Xb.o.playerFlags(this.api.apiView, 0) & Xb.Ad.ZoomFirstPerson),
          Yb = null !== (ub = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ub ? ub : null;
        return (0, Hu.j)({
          gun: Gb,
          aimable: Ub
        }, Lb, (0, wu.d)(), Yb)
      }
      setCrosshairShown(bb) {
        Bb.d.set({
          crosshairShownOverride: bb
        })
      }
      getInventoryFreeSlotCount(bb) {
        return this.isLocal(bb) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(bb) {
        return this.isLocal(bb) ? this.items.selectedSlot : null
      }
      getItemSlot(bb, ub) {
        return this.isLocal(bb) ? this.items.slot(ub) : null
      }
      swapInventorySlots(bb, ub) {
        return this.items.swap(bb, ub)
      }
      isPlayerCrouching(bb) {
        if (this.isLocal(bb)) return 0 !== (Xb.o.playerFlags(this.api.apiView, 0) & Xb.Ad.Crouching);
        const ub = Uh(bb);
        return ub !== Xb.ad && 1 === this.api.queries.entityCrouching(ub)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Xb.o.playerFlags(this.api.apiView, 0) & Xb.Ad.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.rbb()
      }
      getActionRay() {
        const bb = this.api.apiView;
        for (let ub = 0; ub < 3; ub++) Ru.origin[ub] = Xb.o.Ibb(bb, 0, ub), Ru.direction[ub] = Xb.o.actionDir(bb, 0, ub);
        return Ru
      }
      canModifyBlockAt(bb, ub, hb) {
        return 1 === this.api.queries.canModify(bb, ub, hb)
      }
      isSolidToPlayerBlockId(bb) {
        return this.tables.isSolidBlockId(bb) && !this.chunks.isWalkThrough(bb)
      }
      blockNameToBlockId(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(bb, ub)
      }
      blockIdToBlockName(bb) {
        return this.tables.nameOfId(bb)
      }
      Xub(bb, ub, hb, Bb, Ob) {
        return 1 === this.api.queries.terrainBlocked(Bb, bb, ub, hb, Uh(null !== Ob && void 0 !== Ob ? Ob : null))
      }
      getChunkVersion(bb, ub, hb) {
        return this.chunks.version(bb, ub, hb)
      }
      scanBlocks(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        return this.chunks.scan(bb, ub, hb, Bb, Ob, Gb, Ub, Lb)
      }
      isBlockInLoadedChunk(bb, ub, hb) {
        return this.chunks.isLoaded(bb, ub, hb)
      }
      getBlockId(bb, ub, hb) {
        return this.chunks.bS(bb, ub, hb)
      }
      playSound(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(bb)) return null;
        const Ub = this.playSoundFrom(ub, hb, Ob, Gb);
        return 1 === Bb ? Ub : Ub.rate(Bb)
      }
      preloadSounds(bb) {
        var ub, hb;
        null === (ub = (hb = this.deps).preloadSounds) || void 0 === ub || ub.call(hb, bb)
      }
      playSoundFrom(bb, ub, hb, Bb) {
        var Ob, Gb;
        const Ub = this.deps.playSound;
        if (!Ub) return Du.c;
        const Lb = null === hb || void 0 === hb ? void 0 : hb.Oh,
          Yb = null !== (Ob = null === hb || void 0 === hb ? void 0 : hb.maxHearDist) && void 0 !== Ob ? Ob : au.c,
          Sb = null !== (Gb = null === hb || void 0 === hb ? void 0 : hb.refDistance) && void 0 !== Gb ? Gb : au.d;
        let ab = null;
        if (Array.isArray(Lb)) ku[0] = Lb[0], ku[1] = Lb[1], ku[2] = Lb[2], ab = ku;
        else if (void 0 !== Lb && null !== Lb) {
          const bb = Uh(Lb);
          if (!this.api.isLocal(bb)) {
            if (!this.api.readPosition(bb, ku)) return Du.c;
            ab = ku
          }
        }
        return Ub(bb, ub, ab, ab && this.ear(), Yb, Sb, Bb)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Tu)) Tu[1] += zu;
        else {
          const bb = this.api.apiView;
          if (0 === Xb.o.viewProj(bb, 0, 3) && 0 === Xb.o.viewProj(bb, 0, 7) && 0 === Xb.o.viewProj(bb, 0, 11)) return null;
          for (let ub = 0; ub < 3; ub++) Tu[ub] = Xb.o.eye(bb, 0, ub)
        }
        return Number.isFinite(Tu[0] + Tu[1] + Tu[2]) ? Tu : null
      }
      setBlockId(bb, ub, hb, Bb) {
        if (!Number.isInteger(Bb) || Bb < 0 || Bb > 65535) throw new Error(`Invalid block id ${Bb}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(bb, ub, hb)) return;
        const Ob = Math.floor(bb),
          Gb = Math.floor(ub),
          Ub = Math.floor(hb),
          Lb = this.predictedCells(Ob, Gb, Ub, Bb);
        if (1 === this.api.queries.vJ(Ob, Gb, Ub, Bb)) {
          for (let bb = 0; bb < Lb.length; bb += 5) this.chunks.setOverlay(Lb[bb], Lb[bb + 1], Lb[bb + 2], Lb[bb + 3], 1 === Lb[bb + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(bb, ub) {
        return this.deps.particles.create(bb, ub)
      }
      playParticleEffect(bb) {
        this.deps.particles.playEffect(bb)
      }
      burstParticlePreset(bb, ub, hb) {
        this.deps.particles.burstPreset(bb, ub, hb)
      }
      createGameMesh(bb, ub, hb) {
        const Bb = ++this.meshKeys,
          Ob = this.deps.cmd();
        if (!Ob) return Bb;
        const {
          look: Gb,
          colour: Ub
        } = function(bb) {
          switch (bb.kind) {
            case void 0:
            case "flatEmissive":
              return bb.onTop ? {
                look: Xb.Wb.FlatOnTop,
                colour: [...bb.rgb, bb.alpha]
              } : bb.opaque ? {
                look: Xb.Wb.FlatOpaque,
                colour: [...bb.rgb, 1]
              } : {
                look: Xb.Wb.Flat,
                colour: [...bb.rgb, bb.alpha]
              };
            case "chevronPath":
              return {
                look: Xb.Wb.Chevrons, colour: [...(0, Zu.d)(bb.colour), bb.alpha]
              };
            case "furnaceFire":
              return {
                look: Xb.Wb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(ub), Lb = Math.floor(bb.positions.length / 3), Yb = function(bb, ub) {
          const hb = Math.floor(bb.positions.length / 3),
            Bb = bb.indices.length,
            Ob = hb * (ub ? 5 : 3),
            Gb = new Uint8Array(4 * (Ob + Bb)),
            Ub = new DataView(Gb.buffer);
          for (let Sb = 0; Sb < 3 * hb; Sb++) Ub.setFloat32(4 * Sb, bb.positions[Sb], !0);
          if (ub) {
            var Lb;
            const ub = null !== (Lb = bb.uvs) && void 0 !== Lb ? Lb : [];
            for (let bb = 0; bb < 2 * hb; bb++) {
              var Yb;
              Ub.setFloat32(4 * (3 * hb + bb), null !== (Yb = ub[bb]) && void 0 !== Yb ? Yb : 0, !0)
            }
          }
          for (let Sb = 0; Sb < Bb; Sb++) Ub.setUint32(4 * (Ob + Sb), bb.indices[Sb], !0);
          return Gb
        }(bb, (0, Yu.k)(ub));
        return (0, Xb.se)(Ob, 0, Bb, Gb, Ub, hb, Lb, bb.indices.length, Yb) && this.liveMeshes.add(Bb), Bb
      }
      setGameMesh(bb, ub) {
        var hb;
        const Bb = this.deps.cmd();
        if (!Bb) return;
        let Ob = 0;
        ub.anchor && (Ob |= Xb.Xb.Anchor, bh[0] = ub.anchor[0], bh[1] = ub.anchor[1], bh[2] = ub.anchor[2]), void 0 !== ub.visible && (Ob |= Xb.Xb.Visible), ub.uvOffset && (Ob |= Xb.Xb.UvOffset, uh[0] = ub.uvOffset[0], uh[1] = ub.uvOffset[1]);
        const Gb = null !== (hb = ub.visibility) && void 0 !== hb ? hb : 1;
        void 0 !== ub.visibility && (Ob |= Xb.Xb.Visibility), ub.scale && (Ob |= Xb.Xb.Scale, hh[0] = ub.scale[0], hh[1] = ub.scale[1], hh[2] = ub.scale[2]), 0 !== Ob && (0, Xb.xe)(Bb, 0, bb, Ob, ub.visible ? 1 : 0, bh, uh, Gb, hh)
      }
      disposeGameMesh(bb) {
        const ub = this.deps.cmd();
        ub && !(0, Xb.te)(ub, 0, bb) || this.liveMeshes.delete(bb)
      }
      hasPackModel(bb) {
        var ub, hb, Bb;
        return null !== (ub = null === (hb = (Bb = this.deps).hasPackModel) || void 0 === hb ? void 0 : hb.call(Bb, bb)) && void 0 !== ub && ub
      }
      disposeGameOutput() {
        const bb = bb => {
          try {
            bb()
          } catch (ub) {
            console.error("Error freeing client game output", ub)
          }
        };
        for (const ub of [...this.liveMeshes]) bb((() => {
          this.disposeGameMesh(ub)
        }));
        for (const ub of [...this.livePools]) bb((() => {
          ub.dispose()
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
      createInstancePool(bb, ub) {
        const hb = this.tables.idOf(bb.item);
        if (void 0 === hb) return null;
        const Bb = new Iu(++this.poolKeys, {
          item: hb,
          scale: bb.scale,
          yaw: bb.yaw
        }, ub, this.poolHost);
        return this.livePools.add(Bb), Bb
      }
      createMobModel(bb, ub) {
        return this.mobModels.create(bb, ub)
      }
      setRouteChevrons(bb) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !bb || 0 === bb.cells.length) return;
        const ub = `${bb.colour} ${bb.alpha}`;
        ub !== this.routeLook && (this.routeLook = ub, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(bb) {
          const [ub, hb, Bb] = bb[0].pos, Ob = [], Gb = [], Ub = [];
          return bb.forEach(((bb, Lb) => {
            let {
              pos: Yb,
              way: [Sb, ab]
            } = bb;
            const Hb = Yb[0] - ub + .5,
              wb = Yb[1] - hb + .04,
              Zb = Yb[2] - Bb + .5,
              [Xb, pb] = [.35 * -ab, .35 * Sb],
              [ob, Ab] = [Lb * Bh, (Lb + 1) * Bh],
              lb = Ob.length / 3;
            Ob.push(Hb - .5 * Sb + Xb, wb, Zb - .5 * ab + pb), Ob.push(Hb - .5 * Sb - Xb, wb, Zb - .5 * ab - pb), Ob.push(Hb + .5 * Sb + Xb, wb, Zb + .5 * ab + pb), Ob.push(Hb + .5 * Sb - Xb, wb, Zb + .5 * ab - pb), Gb.push(0, ob, 1, ob, 0, Ab, 1, Ab), Ub.push(lb, lb + 1, lb + 2, lb + 1, lb + 3, lb + 2)
          })), {
            positions: Ob,
            uvs: Gb,
            indices: Ub
          }
        }(bb.cells), {
          kind: "chevronPath",
          colour: bb.colour,
          alpha: bb.alpha
        }, bb.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(bb) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(bb, 250) / 1e3 * 1.2 * Bh) % 1, this.setRouteSlide())
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
        const ub = this.deps.cmd();
        if (!ub) return bb.length = 0, void(this.pendingFar = void 0);
        let hb = 0;
        for (; hb < bb.length && (0, Xb.Ge)(ub, 0, bb[hb]);) hb++;
        bb.splice(0, hb);
        const Bb = this.pendingStyle;
        if (void 0 !== Bb) {
          (Bb ? (0, Xb.Hf)(ub, 0, Bb.width, Bb.alpha, 1, Bb.endAtSolidFace ? 1 : 0) : (0, Xb.Hf)(ub, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Ob = this.pendingFar;
        void 0 !== Ob && (0, Xb.Ff)(ub, 0, null !== Ob && void 0 !== Ob ? Ob : 0, null === Ob ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(bb, ub) {
        const hb = this.deps.cmd(),
          Bb = Uh(bb);
        hb && Bb !== Xb.ad && (0, Xb.Nf)(hb, 0, Bb, ub)
      }
      setFacingTolerance(bb, ub) {
        const hb = this.deps.cmd(),
          Bb = Uh(bb);
        hb && Bb !== Xb.ad && Lh(hb, Bb, ub)
      }
      forEachEntity(bb) {
        const {
          api: ub
        } = this;
        for (let hb = 0; hb < ub.idStr.length; hb++) {
          const Bb = ub.idStr[hb];
          null === Bb || Cb(ub.kinds[hb]) || bb(Bb)
        }
      }
      getEntityInfo(bb) {
        return this.deps.entityInfo.get(bb)
      }
      isEntityInteractable(bb) {
        const ub = Uh(bb);
        return ub !== Xb.ad && 1 === this.api.queries.entityInteractable(ub)
      }
      isLocalPlayer(bb) {
        return this.isLocal(bb)
      }
      getLineOwner(bb) {
        var ub;
        const hb = null === (ub = this.deps.entityInfo.get(bb)) || void 0 === ub ? void 0 : ub.meshOpts;
        if (!hb) return null;
        try {
          const {
            lineToEId: bb
          } = JSON.parse(hb);
          return null !== bb && void 0 !== bb ? bb : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const bb = this.api.apiView;
        return Qu[0] = Xb.o.eye(bb, 0, 0), Qu[1] = Xb.o.eye(bb, 0, 1), Qu[2] = Xb.o.eye(bb, 0, 2), Qu
      }
      getCameraFar() {
        return Xb.o.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(bb) {
        null !== bb && (this.farSet = !0), this.pendingFar = bb, this.flushOwed()
      }
      turnCamera(bb, ub) {
        this.cameraTurn.turn(bb, ub)
      }
      clearPickupDelay(bb) {
        const ub = this.deps.cmd(),
          hb = Uh(bb);
        ub && hb !== Xb.ad && (0, Xb.ie)(ub, 0, hb)
      }
      sendChat(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = this.deps.sendCmd();
        hb && Vu(hb, 0, fu.e.Chat, (0, Nb.h)((0, fu.m)({
          XS: bb,
          pS: ub
        })))
      }
      sendCommand(bb) {
        bb.length <= 119 && this.sendChat(`/${bb}`)
      }
      predictedCells(bb, ub, hb, Bb) {
        const Ob = this.chunks,
          Gb = [],
          Ub = (bb, ub, hb, Bb, Ob) => {
            Gb.push(bb, ub, hb, Bb, this.tables.blockRootId(Ob) === this.tables.blockRootId(Bb) ? 0 : 1)
          },
          Lb = Ob.bS(bb, ub, hb),
          Yb = Gh(Lb);
        if (Yb) {
          const [Bb, Gb, Sb] = [bb - Yb.x, ub - Yb.y, hb - Yb.z], ab = Oh[Ob.bS(Bb, Gb, Sb)], Hb = null === ab || void 0 === ab ? void 0 : ab.positions.some((bb => bb.id === Lb && bb.x === Yb.x && bb.y === Yb.y && bb.z === Yb.z));
          for (const bb of (Hb && ab ? ab : Yb.main).positions) Ob.bS(Bb + bb.x, Gb + bb.y, Sb + bb.z) === bb.id && Ub(Bb + bb.x, Gb + bb.y, Sb + bb.z, 0, bb.id)
        }
        const Sb = Gh(Bb);
        if (Sb)
          for (const Hb of Sb.main.positions) {
            const [Bb, Gb, Lb] = [bb + Hb.x - Sb.x, ub + Hb.y - Sb.y, hb + Hb.z - Sb.z];
            Ub(Bb, Gb, Lb, Hb.id, Ob.bS(Bb, Gb, Lb))
          } else Ub(bb, ub, hb, Bb, Lb);
        const ab = this.tables;
        if ((0 !== ab.attachedTopOf(Lb) || 0 !== ab.attachedTopOf(Bb)) && Ob.isLoaded(bb, ub + 1, hb)) {
          let Yb = Ob.bS(bb, ub + 1, hb);
          for (let Bb = 0; Bb < Gb.length; Bb += 5) Gb[Bb] === bb && Gb[Bb + 1] === ub + 1 && Gb[Bb + 2] === hb && (Yb = Gb[Bb + 3]);
          const Sb = this.attachedTopWrite(Lb, Bb, Yb);
          void 0 !== Sb && Ub(bb, ub + 1, hb, Sb, Yb)
        }
        return Gb
      }
      attachedTopWrite(bb, ub, hb) {
        const Bb = this.tables,
          Ob = Bb.attachedTopOf(bb),
          Gb = Bb.attachedTopOf(ub),
          Ub = 0 !== Ob && 0 !== hb && Bb.blockRootId(hb) === Bb.blockRootId(Ob);
        return 0 !== Ob && 0 !== Gb && Bb.blockRootId(bb) === Bb.blockRootId(ub) ? Ub && hb !== Gb ? Gb : void 0 : 0 === Gb || !Ub && 0 !== hb ? Ub ? 0 : void 0 : Gb
      }
    }
    const Sh = Xb.fc + Xb.ic * Xb.sc.BYTES,
      ah = 2147483647,
      Hh = new TextDecoder,
      wh = new TextEncoder,
      Zh = Object.freeze({
        aS: 0,
        fY: null,
        amountAddedToSlot: 0
      }),
      Xh = new Proxy({}, {
        get: () => () => Xb.jd
      });

    function ph(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 65535
    }

    function oh(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 4294967295
    }
    class Ah {
      constructor(bb) {
        this.deps = bb, this.Fb = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Xb.ic), this.ids = new Uint16Array(Xb.ic), this.amounts = new Uint16Array(Xb.ic), this.attrRead = new Float64Array(Xb.ic).fill(-1), this.stale = new Uint16Array(Xb.ic), this.staleVersion = new Uint32Array(Xb.ic), this.instances = new Uint32Array(Xb.ic), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var ub;
        return Number.isInteger(bb) && bb >= 0 && bb < this.len && 0 !== this.ids[bb] && null !== (ub = this.facades[bb]) && void 0 !== ub ? ub : null
      }
      MS() {
        return this.slot(this.selected)
      }
      playerItems() {
        const bb = [];
        for (let ub = 0; ub < Math.min(Xb.td, this.len); ub++) bb.push(this.slot(ub));
        return bb
      }
      freeSlots() {
        let bb = 0;
        for (let ub = 0; ub < Math.min(Xb.td - Xb.f, this.len); ub++) 0 === this.ids[ub] && bb++;
        return bb
      }
      amountOf(bb) {
        let ub = 0;
        for (let Bb = 0; Bb < Math.min(Xb.td, this.len); Bb++) {
          const Ob = this.slot(Bb);
          var hb;
          if ((null === Ob || void 0 === Ob ? void 0 : Ob.name) === bb) ub += null !== (hb = Ob.amount) && void 0 !== hb ? hb : 1
        }
        return ub
      }
      instance(bb) {
        var ub;
        return null !== (ub = this.instances[bb]) && void 0 !== ub ? ub : 0
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
          for (const hb of [...this.listeners]) try {
            hb()
          } catch (ub) {
            bb(ub)
          }
        }
      }
      chestOpened(bb, ub, hb) {
        this.Fb[0] = bb, this.Fb[1] = ub, this.Fb[2] = hb, this.version++
      }
      refresh() {
        const bb = this.deps.api.apiView,
          ub = Xb.o.inventoryViewPtr(bb, 0),
          hb = Xb.o.inventoryVersion(bb, 0),
          Bb = Xb.o.selectedSlot(bb, 0);
        Bb !== this.selected && (this.selected = Bb, this.version++);
        const Ob = Xb.o.slotIcon(bb, 0);
        if (Ob !== this.slotIconId && (this.slotIconId = Ob, this.iconChanged = !0), ub === this.viewPtr && hb === this.viewVersion) return;
        this.viewPtr = ub, this.viewVersion = hb;
        const Gb = this.deps.api.memoryData(ub, Sh, 4, "the inventory view"),
          Ub = Gb ? Math.min(Gb.getUint32(0, !0), Xb.ic) : 0;
        Ub !== this.len && (this.len = Ub, this.version++);
        let Lb = 0;
        for (let Yb = 0; Yb < Xb.ic; Yb++) {
          const bb = Xb.fc + Yb * Xb.sc.BYTES,
            ub = null !== Gb && Yb < Ub ? Xb.sc.item(Gb, bb) : 0;
          if (0 === ub || null === Gb) {
            0 !== this.ids[Yb] && (this.ids[Yb] = 0, this.attrRead[Yb] = -1, this.instances[Yb]++, this.version++);
            continue
          }
          const hb = Xb.sc.amount(Gb, bb),
            Bb = Xb.sc.attrVersion(Gb, bb);
          ub === this.ids[Yb] && hb === this.amounts[Yb] || this.fill(Yb, ub, hb), Bb !== this.attrRead[Yb] && (this.stale[Lb] = Yb, this.staleVersion[Lb] = Bb, Lb++)
        }
        Lb > 0 && this.fetchAttributes(Lb)
      }
      fill(bb, ub, hb) {
        const {
          tables: Bb
        } = this.deps, Ob = ub !== this.ids[bb];
        let Gb = this.facades[bb];
        Gb || (Gb = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[bb] = Gb), Ob && (Gb.name = Bb.nameOfId(ub), Gb.typeObj = Bb.itemType(ub), Gb.attributes = {
          customAttributes: {}
        }, this.attrRead[bb] = -1, this.instances[bb]++), Gb.amount = 0 === hb ? null : hb, this.ids[bb] = ub, this.amounts[bb] = hb, this.version++
      }
      fetchAttributes(bb) {
        const {
          api: ub,
          onError: hb
        } = this.deps, Bb = ub.memoryView(Uint16Array, ub.scratch(), bb, "item_attributes_batch's slots");
        if (!Bb) return void this.markRead(bb);
        Bb.set(this.stale.subarray(0, bb));
        const Ob = ub.queries.itemAttributesBatch(bb),
          Gb = 4294967295 === Ob ? null : ub.memoryData(ub.scratch(), Ob, 4, "item_attributes_batch's answer");
        if (!Gb) return void this.markRead(bb);
        const Ub = new Uint8Array(Gb.buffer, Gb.byteOffset, Ob);
        for (let Yb = 0; Yb + 8 <= Ob;) {
          const bb = Gb.getUint16(Yb, !0),
            ub = Gb.getUint32(Yb + 4, !0),
            Bb = Ub.subarray(Yb + 8, Yb + 8 + ub);
          Yb += 8 + (0, wb.Xd)(ub);
          const Ob = this.facades[bb];
          if (Ob && 0 !== this.ids[bb] && 0 !== ub) {
            try {
              Ob.attributes = JSON.parse(Hh.decode(Bb))
            } catch (Lb) {
              hb(Lb)
            }
            this.version++
          }
        }
        this.markRead(bb)
      }
      markRead(bb) {
        for (let ub = 0; ub < bb; ub++) this.attrRead[this.stale[ub]] = this.staleVersion[ub]
      }
      swap(bb, ub) {
        return ph(bb) && ph(ub) && this.settle(this.queries().invSwap(bb, ub))
      }
      move(bb, ub, hb) {
        return ph(bb) && ph(ub) && oh(hb) && this.settle(this.queries().invMove(bb, ub, hb))
      }
      quickMove(bb, ub, hb, Bb) {
        var Ob, Gb;
        if (!ph(bb) || !ph(ub) || !ph(hb) || null !== Bb && !oh(Bb)) return null;
        const Ub = this.queries().invQuickMove(bb, ub, hb, null === Bb ? -1 : Math.min(Bb, ah)),
          Lb = Ub === Xb.jd ? Xb.Hb : null !== (Ob = null === (Gb = this.extras()) || void 0 === Gb ? void 0 : Gb[1]) && void 0 !== Ob ? Ob : Xb.Hb;
        return this.settle(Ub), Lb === Xb.Hb ? null : Lb
      }
      remove(bb, ub, hb) {
        return ph(bb) && oh(ub) && this.settle(this.queries().invRemove(bb, ub, hb ? 1 : 0))
      }
      selectSlot(bb) {
        return ph(bb) && this.settle(this.queries().selectSlot(bb))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(bb, ub, hb) {
        if (!ph(bb) || !Number.isInteger(ub)) return !1;
        const [Bb, Ob, Gb] = hb;
        return this.settle(this.queries().invEnchant(bb, ub, Math.floor(Bb), Math.floor(Ob), Math.floor(Gb)))
      }
      craft(bb, ub, hb) {
        let Bb;
        try {
          Bb = this.deps.tables.getItemId(bb)
        } catch {
          return Zh
        }
        if (!ph(ub) || null !== hb && (Number.isNaN(hb) || hb < 0)) return Zh;
        const Ob = null === hb || hb > ah ? -1 : Math.floor(hb),
          Gb = this.queries().craft(Bb, ub, Ob);
        let Ub = Zh;
        const Lb = Gb === Xb.jd ? null : this.extras();
        if (Lb) {
          const [bb, ub, hb] = Lb;
          Ub = {
            aS: bb,
            fY: ub === Xb.Hb ? null : ub,
            amountAddedToSlot: hb
          }
        }
        return this.settle(Gb), Ub
      }
      salvage(bb, ub, hb) {
        let Bb;
        try {
          Bb = this.deps.tables.getItemId(ub)
        } catch {
          return !1
        }
        return ph(bb) && Number.isInteger(hb) && this.settle(this.queries().salvage(bb, Bb, Math.max(Math.min(hb, ah), -ah)))
      }
      craftingView(bb, ub, hb) {
        var Bb;
        if (this.stopped) return null;
        const {
          api: Ob,
          onError: Gb
        } = this.deps, Ub = bb ? wh.encode(bb) : null;
        if (null !== Ub) {
          if (Ub.length > 1024) return Gb(new Error(`The crafting station ${bb}'s name is over 1024 bytes`)), null;
          const ub = Ob.memoryView(Uint8Array, Ob.scratch(), Ub.length, "crafting_view's station");
          if (!ub) return null;
          ub.set(Ub)
        }
        const Lb = ph(ub) && ph(hb),
          Yb = Ob.queries.craftingView(null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.length) && void 0 !== Bb ? Bb : 0, Lb ? ub : 0, Lb ? hb : 0);
        return Yb < Xb.gb.BYTES ? (Ob.reportCorruption(`crafting_view's answer of ${Yb} bytes`), null) : Ob.memoryData(Ob.scratch(), Yb, 1, "crafting_view's answer")
      }
      queries() {
        var bb, ub;
        return !1 === (null === (bb = (ub = this.deps).beforeOp) || void 0 === bb ? void 0 : bb.call(ub)) ? (this.stopped = !0, Xh) : this.deps.api.queries
      }
      extras() {
        const {
          api: bb
        } = this.deps;
        return bb.memoryView(Uint32Array, bb.scratch(), 3, "a sync query's extra words")
      }
      settle(bb) {
        if (bb === Xb.id)(0, yu.e)();
        else if (bb !== Xb.jd) {
          const ub = this.deps.cmd();
          ub && function(bb, ub, hb) {
            return (0, yu.e)(), (0, Xb.Xf)(bb, ub, hb)
          }(ub, 0, bb) || this.deps.onError(new Error(`Sync op ${bb}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), bb !== Xb.jd
      }
    }
    const lh = 1 / .6,
      Kh = [0, 1, 0],
      Wh = [0, 0, 0],
      Ch = new Uint8Array(0),
      dh = 1.2 * Xu.e.Vl,
      rh = new TextEncoder,
      jh = [0, 0, 0],
      nh = [0, 0, 0],
      Dh = new Map;

    function xh(bb) {
      let ub = Dh.get(bb);
      return ub || (Dh.size >= 64 && Dh.clear(), ub = rh.encode(`{"emitRate":${bb}}`), Dh.set(bb, ub)), ub
    }

    function zh(bb) {
      return Number.isFinite(bb) && bb > 0 ? bb : 0
    }

    function gh(bb, ub) {
      for (let hb = 0; hb < 3; hb++) {
        const Bb = Math.abs(ub[hb]);
        jh[hb] = bb[hb] - Bb, nh[hb] = 2 * Bb
      }
      return Number.isFinite(jh[0] + jh[1] + jh[2] + nh[0] + nh[1] + nh[2])
    }

    function ih(bb, ub) {
      return "pos1" === bb || "pos2" === bb ? void 0 : ub
    }

    function vh(bb, ub, hb) {
      return bb.length > Xb.zd.MaxOpts ? (hb(new Error(`${ub}'s particle opts are over ${Xb.zd.MaxOpts} bytes of JSON`)), null) : bb
    }
    const th = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Jh {
      constructor(bb) {
        this.deps = bb, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(bb, ub) {
        var hb;
        const Bb = this.sink(),
          Ob = null !== (hb = ub.half) && void 0 !== hb ? hb : Wh;
        if (!Bb || this.live >= Xb.zd.MaxLiveKeys || this.nextKey > Xb.zd.MaxKey || !gh(ub.pos, Ob)) return th;
        const Gb = this.nextKey,
          Ub = vh(function(bb) {
            var ub, hb, Bb;
            const Ob = JSON.stringify({
              texture: "string" === typeof bb.texture ? bb.texture : "smokePuff",
              LH: bb.LH,
              minLifeTime: bb.minLifeTime,
              maxLifeTime: bb.maxLifeTime,
              minSize: bb.minSize,
              maxSize: bb.maxSize,
              minEmitPower: bb.minEmitPower,
              maxEmitPower: bb.maxEmitPower,
              emitRate: zh(bb.emitRate),
              gravity: null !== (ub = bb.gravity) && void 0 !== ub ? ub : Wh,
              dir1: null !== (hb = bb.dir1) && void 0 !== hb ? hb : Kh,
              dir2: null !== (Bb = bb.dir2) && void 0 !== Bb ? Bb : Kh,
              colorGradients: bb.colorGradients,
              blendMode: bb.blendMode
            });
            return rh.encode(Ob)
          }(bb), "createParticles", this.deps.onError);
        return Ub && (0, Xb._e)(Bb, 0, Gb, 0, Xb.zd.PresetNone, 0, jh, nh, Ub) ? (this.nextKey++, this.live++, this.started = !0, new eh(this, this.session, Gb, bb, Ob)) : th
      }
      playEffect(bb) {
        const ub = this.sink(),
          {
            pos1: hb,
            pos2: Bb
          } = bb;
        if (!ub || !hb || !Bb) return;
        for (let Gb = 0; Gb < 3; Gb++) jh[Gb] = Math.min(hb[Gb], Bb[Gb]), nh[Gb] = Math.abs(Bb[Gb] - hb[Gb]);
        if (!Number.isFinite(jh[0] + jh[1] + jh[2] + nh[0] + nh[1] + nh[2])) return;
        const Ob = vh(rh.encode(JSON.stringify(bb, ih)), "playParticleEffect", this.deps.onError);
        Ob && (0, Xb.We)(ub, 0, 0, Xb.zd.PresetNone, Xb.zd.HasBox, 0, jh, nh, Ob)
      }
      burstPreset(bb, ub, hb) {
        const Bb = this.sink(),
          Ob = Math.min(Math.floor(hb), Xb.zd.MaxBurst);
        if (!Bb || !Object.hasOwn(Xb.Yb, bb) || !(Ob > 0)) return;
        const Gb = dh;
        for (let Ub = 0; Ub < 3; Ub++) jh[Ub] = ub[Ub] - Gb / 2, nh[Ub] = Gb;
        Number.isFinite(jh[0] + jh[1] + jh[2]) && (0, Xb.We)(Bb, 0, 0, Xb.Yb[bb], Xb.zd.HasBox, Ob, jh, nh, Ch)
      }
      sessionEnded() {
        this.session++;
        const bb = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !bb || (0, Xb.$e)(bb, 0)
      }
      sinkFor(bb) {
        return bb === this.session ? this.deps.cmd() : null
      }
      stop(bb, ub) {
        const hb = this.sinkFor(bb);
        hb && (0, Xb.df)(hb, 0, ub) && this.live--
      }
    }
    class eh {
      constructor(bb, ub, hb, Bb, Ob) {
        this.owner = bb, this.session = ub, this.key = hb, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Ob[0]), Math.abs(Ob[1]), Math.abs(Ob[2])], this.rate = zh(Bb.emitRate), this.emitted = this.rate > 0;
        const Gb = Bb.maxLifeTime * lh * 1e3 + 250;
        this.stopDelayMs = Gb >= 0 ? Math.min(Gb, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(bb, ub) {
        const hb = this.sink();
        if (hb) {
          if (ub)
            for (let bb = 0; bb < 3; bb++) this.half[bb] = Math.abs(ub[bb]);
          gh(bb, this.half) && (0, Xb.gf)(hb, 0, this.key, Xb.zd.HasBox, jh, nh, Ch)
        }
      }
      setEmitRate(bb) {
        const ub = this.sink(),
          hb = zh(bb);
        ub && hb !== this.rate && (0, Xb.gf)(ub, 0, this.key, 0, Wh, Wh, xh(hb)) && (this.rate = hb, this.emitted ||= hb > 0)
      }
      emit(bb) {
        const ub = this.sink(),
          hb = Math.min(Math.floor(bb), Xb.zd.MaxBurst);
        ub && hb > 0 && (0, Xb.We)(ub, 0, this.key, Xb.zd.PresetNone, 0, hb, Wh, Wh, Ch) && (this.emitted = !0)
      }
      emitPoints(bb, ub, hb) {
        const Bb = this.sink(),
          Ob = Math.min(Math.floor(hb), Xb.zd.MaxPoints, Math.floor(ub.length / 4));
        if (!Bb || !(Ob > 0) || !Number.isFinite(bb[0] + bb[1] + bb[2])) return;
        const Gb = new Uint8Array(ub.buffer, ub.byteOffset, Ob * Xb.zd.PointBytes);
        (0, Xb.Ye)(Bb, 0, this.key, Ob, bb, Gb) && (this.emitted = !0)
      }
      setDirections(bb, ub) {
        const hb = this.sink();
        if (!hb || !Number.isFinite(bb[0] + bb[1] + bb[2] + ub[0] + ub[1] + ub[2])) return;
        const Bb = rh.encode(JSON.stringify({
          dir1: [bb[0], bb[1], bb[2]],
          dir2: [ub[0], ub[1], ub[2]]
        }));
        (0, Xb.gf)(hb, 0, this.key, 0, Wh, Wh, Bb)
      }
      stop() {
        const bb = this.sink();
        this.stopped = !0, bb && (this.emitted ? (this.rate > 0 && (0, Xb.gf)(bb, 0, this.key, 0, Wh, Wh, xh(0)), setTimeout((() => {
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
    const Nh = Pu.n,
      sh = new TextDecoder;

    function Mh(bb, ub) {
      const {
        serverIds: hb,
        kinds: Bb
      } = bb;
      let Ob = 0;
      for (let Gb = 0; Gb < hb.length; Gb++) {
        const bb = hb[Gb];
        if (bb !== Xb.ad && !Cb(Bb[Gb])) {
          if (Ob === ub.length) {
            const bb = new Int32Array(Math.max(64, 2 * Ob));
            bb.set(ub), ub = bb
          }
          ub[Ob++] = bb
        }
      }
      return {
        ids: ub,
        count: Ob
      }
    }

    function mh(bb, ub) {
      return bb.length >= ub ? bb : new Int32Array(Math.max(ub, 2 * bb.length))
    }

    function Ih(bb, ub, hb, Bb) {
      for (let Ob = 0; Ob < hb; Ob += 4096) {
        const Gb = Math.min(4096, hb - Ob),
          Ub = bb.memoryView(Int32Array, bb.scratch(), Gb, "entity_info_batch's ids");
        if (!Ub) return !1;
        Ub.set(ub.subarray(Ob, Ob + Gb));
        const Lb = bb.queries.entityInfoBatch(Gb),
          Yb = 4294967295 === Lb ? null : bb.memoryData(bb.scratch(), Lb, 4, "entity_info_batch's records");
        if (!Yb) return !1;
        for (let bb = 0; bb + Xb.Pb.BYTES <= Lb;) {
          const ub = Xb.Pb.len(Yb, bb);
          Bb(Xb.Pb.serverId(Yb, bb), Ph(Yb, bb, ub)), bb += Xb.Pb.BYTES + (0, wb.Xd)(ub)
        }
      }
      return !0
    }

    function Ph(bb, ub, hb) {
      var Bb, Ob, Gb;
      const Ub = Xb.Pb.kind(bb, ub),
        Lb = 0 === Ub ? null : db(Ub);
      if (null === Lb) return null;
      const Yb = Xb.Pb.variation(bb, ub),
        Sb = Xb.Pb.pose(bb, ub),
        ab = Xb.Pb.meta(bb, ub),
        Hb = Xb.Pb.mesh(bb, ub),
        wb = 0 !== (Xb.Pb.flags(bb, ub) & Xb.Ob.HasOpts),
        Zb = Nh[Lb];
      return Object.freeze({
        type: Lb,
        variation: Yb === Xb.ed ? void 0 : null !== (Bb = null !== (Ob = null === Zb || void 0 === Zb ? void 0 : Zb[Yb]) && void 0 !== Ob ? Ob : null === Zb || void 0 === Zb ? void 0 : Zb[0]) && void 0 !== Bb ? Bb : "default",
        pose: Sb === Xb.dc ? void 0 : null !== (Gb = Xb.Db[Sb]) && void 0 !== Gb ? Gb : Xb.Db[0],
        metaInfo: ab === Xb.dc ? void 0 : Xb.Oc[ab],
        meshKind: Hb === Xb.dc ? void 0 : Xb.Lc[Hb],
        meshOpts: wb ? sh.decode(new Uint8Array(bb.buffer, bb.byteOffset + ub + Xb.Pb.BYTES, hb)) : void 0
      })
    }
    const qh = 1,
      Eh = 2;
    class yh {
      constructor(bb) {
        this.deps = bb, this.wanted = 0, this.MS = !1, this.refused = !1
      }
      get on() {
        return this.MS
      }
      want(bb, ub) {
        this.wanted = ub ? this.wanted | bb : this.wanted & ~bb;
        const hb = 0 !== this.wanted;
        if (hb === this.MS) return;
        const Bb = this.deps.cmd();
        null !== Bb ? (0, Xb.$f)(Bb, 0, hb ? 1 : 0) ? (this.MS = hb, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.MS = !1
      }
    }
    class Vh {
      constructor(bb) {
        this.deps = bb, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(bb) {
        var ub;
        return this.complete || this.fill(), null !== (ub = this.entries.get("string" === typeof bb ? bb : String(bb))) && void 0 !== ub ? ub : null
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
            api: ub
          } = this.deps;
          let hb = 0;
          const Bb = this.ids = mh(this.ids, bb);
          for (let Ob = 0; Ob < bb; Ob++) {
            const bb = this.pending[Ob],
              Gb = ub.indexById.get(bb);
            void 0 === Gb || Cb(ub.kinds[Gb]) ? this.entries.delete(String(bb)) : Bb[hb++] = bb
          }
          hb > 0 && !this.batch(Bb, hb) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(qh, !1)
      }
      fill() {
        const {
          api: bb
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: bb
          } = this.deps, ub = bb.on;
          bb.want(qh, !0), !ub && bb.on && (this.refill = this.midFrame)
        }
        const {
          ids: ub,
          count: hb
        } = Mh(bb, this.ids);
        this.ids = ub, hb > 0 && !this.batch(ub, hb) && (this.refill = !0)
      }
      batch(bb, ub) {
        return Ih(this.deps.api, bb, ub, ((bb, ub) => {
          null === ub ? this.entries.delete(String(bb)) : this.entries.set(String(bb), ub)
        }))
      }
    }
    var Fh = hb(4564);

    function fh(bb) {
      if ("message" !== bb.type || bb.XS !== Fh.fc.NewClientOptions || bb.payloadKind !== wb.Zb.Msgpack) return null;
      const ub = (0, Nb.e)(bb.payload);
      if (null === ub || "object" !== typeof ub || Array.isArray(ub)) throw new Error("NewClientOptions whose body isn't an object of options");
      return ub
    }
    var kh = hb(1133),
      Th = hb(36234);

    function ch(bb, ub, hb, Bb, Ob, Gb, Lb) {
      var Yb, Sb, ab;
      switch (bb) {
        case Xb.Xd.ToggleMenu: {
          const bb = Xb.G[ub];
          Ub.i.vp("toggleMenu", void 0 === bb ? "inventory" : `inventory|${bb}`);
          break
        }
        case Xb.Xd.EditBoard:
          Ub.i.vp("EditBoard", {
            pos: 0 === ub ? null : hb
          });
          break;
        case Xb.Xd.EditCodeBlock:
        case Xb.Xd.ViewCodeBlock:
          Ub.i.vp("EditCodeBlock", {
            pos: hb,
            canChangePos: bb === Xb.Xd.EditCodeBlock
          });
          break;
        case Xb.Xd.EditCustomLobbyBlock:
          Ub.i.vp("EditCustomLobbyBlock", {
            pos: hb
          });
          break;
        case Xb.Xd.OpenIronChest:
          Ub.i.vp("OpenIronChest", {
            pos: hb
          });
          break;
        case Xb.Xd.EditNameTag:
          Ub.i.vp("EditNameTag", null !== (Yb = null === (Sb = Ob.MS()) || void 0 === Sb || null === (ab = Sb.attributes.customAttributes) || void 0 === ab ? void 0 : ab.text) && void 0 !== Yb ? Yb : "");
          break;
        case Xb.Xd.EditBook: {
          var Hb, wb, pb;
          const bb = null === (Hb = Ob.MS()) || void 0 === Hb ? void 0 : Hb.attributes;
          Ub.i.vp("EditBook", {
            pages: (0, kh.X)(null === bb || void 0 === bb || null === (wb = bb.customAttributes) || void 0 === wb ? void 0 : wb.pages),
            title: null !== (pb = null === bb || void 0 === bb ? void 0 : bb.customDisplayName) && void 0 !== pb ? pb : "Title",
            isPublished: !(null === bb || void 0 === bb || !bb.customDescription)
          });
          break
        }
        case Xb.Xd.CantChangeBlock:
          ! function(bb, ub) {
            const hb = ub.getClientOption("cantChangeError"),
              Bb = ub.getClientOption(bb ? "cantBuildError" : "cantBreakError"),
              Ob = bb ? hb : Bb;
            (ub.getClientOption("canChange") || Ob || "You cannot modify this block" !== hb) && Ub.i.vp("showBottomMessage", {
              message: Bb || hb,
              type: "Error"
            })
          }(1 === ub, Gb);
          break;
        case Xb.Xd.MiddleBarStart:
          Ub.i.vp("middleScreenBarInitiate", {
            duration: Bb,
            Zu: 1 === hb[0],
            horizBarRemOffset: ub
          });
          break;
        case Xb.Xd.MiddleBarStop:
          Ub.i.vp("middleScreenBarRemove");
          break;
        case Xb.Xd.Hitmarker:
          Ub.i.vp("localGunHitmarker", {
            Db: 1 === ub
          });
          break;
        case Xb.Xd.ShotsLeft:
          Ub.i.vp("localPlayerNewShotsLeft", Bb);
          break;
        case Xb.Xd.AimingOverlay:
          Ub.i.vp("aimingOverlay", 3 === (3 & ub) ? "sniper" : "none");
          break;
        case Xb.Xd.BottomMessage:
          Ub.i.vp("showBottomMessage", JSON.parse(Lb()));
          break;
        case Xb.Xd.Crosshair:
          Ob.inaccuracy = (0, sb.g)(Bb), (0, Th.c)().crosshairAccuracy(Ob.inaccuracy);
          break;
        case Xb.Xd.ChargeStage:
          break;
        case Xb.Xd.EmoteWheelClose:
          Ub.i.vp("requestEmoteWheelClose");
          break;
        case Xb.Xd.BlockMined:
          Ub.i.vp("localBlockMined");
          break;
        default:
          throw new Zb.d(`UiEvent of no kind: what ${bb}`)
      }
    }
    var Qh = hb(37598),
      Rh = hb(9097),
      bB = hb(1850),
      uB = hb(36445),
      hB = hb(9106),
      BB = hb(4545);
    const OB = 10,
      GB = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      UB = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      LB = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function YB(bb, ub) {
      let hb, Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Gb = () => (hb = (0, bB.o)(hb, ub()), hb);
      return {
        current: Gb,
        watch(ub) {
          const hb = () => {
              ub(Gb())
            },
            Ub = [bb.watch(hb)];
          return null !== Bb && Ub.push((0, bB.s)((bb => {
            bb.some(Bb) && hb()
          }))), null !== Ob && Ub.push(Ob(hb)), () => {
            for (const bb of Ub) bb()
          }
        }
      }
    }

    function SB(bb) {
      return bb && {
        name: bb.name,
        amount: bb.amount,
        attributes: bb.attributes
      }
    }
    const aB = new WeakMap;

    function HB(bb) {
      let ub = aB.get(bb);
      return void 0 === ub && (ub = (0, hB.creativeItemIds)().map((ub => ({
        name: bb.nameOfId(ub),
        amount: bb.isStackableId(ub) ? 1 : null,
        attributes: (0, Qh.d)("Gun" === (0, hB.itemTypeOf)(ub) ? {
          type: "Gun",
          clipSize: (0, hB.clipSizeOf)(ub)
        } : void 0)
      }))), aB.set(bb, ub)), ub
    }

    function wB(bb, ub, hb, Bb) {
      const Ob = ub => (bb.flush(Bb), ub),
        Gb = hb => {
          var Bb, Ob, Gb, Ub, Lb, Yb, Sb;
          const ab = bb.slot(hb);
          if (!ab) return null;
          const {
            rootName: Hb,
            metaStr: wb
          } = ub.getMetaInfo(ab.name);
          return {
            name: ab.name,
            amount: ab.amount,
            attributes: ab.attributes,
            instance: bb.instance(hb),
            displayName: null !== (Bb = ab.attributes.customDisplayName) && void 0 !== Bb ? Bb : ub.getDisplayName(Hb),
            requiresAmmo: "RequiresAmmo" === wb,
            clipSize: null !== (Ob = null !== (Gb = null === (Ub = ab.attributes.customAttributes) || void 0 === Ub || null === (Lb = Ub.gunStats) || void 0 === Lb ? void 0 : Lb.clipSize) && void 0 !== Gb ? Gb : null === (Yb = ub.getGunStats(Hb)) || void 0 === Yb ? void 0 : Yb.clipSize) && void 0 !== Ob ? Ob : null === (Sb = ab.typeObj) || void 0 === Sb ? void 0 : Sb.clipSize
          }
        },
        Lb = function(bb, ub) {
          let hb = null,
            Bb = {
              focus: null,
              recipes: [],
              detail: null
            },
            Ob = -1;
          const Gb = new Set;
          return {
            read() {
              var Gb, Ub;
              if (null === hb) return null !== Bb.focus && (Bb = {
                ...Bb,
                focus: null
              }), Bb;
              if (Bb.focus === hb && Ob === bb.changes) return Bb;
              if (Ob = bb.changes, 0 === bb.length) return Bb = {
                focus: hb,
                recipes: [],
                detail: null
              }, Bb;
              let Lb = 0;
              if (null !== hb.recipe) try {
                Lb = ub.getItemId(hb.recipe.name)
              } catch {}
              const Yb = bb.craftingView(hb.station, Lb, null !== (Gb = null === (Ub = hb.recipe) || void 0 === Ub ? void 0 : Ub.SS) && void 0 !== Gb ? Gb : 0);
              return Bb = null === Yb ? {
                focus: hb,
                recipes: [],
                detail: null
              } : function(bb, ub, hb) {
                let Bb = Xb.gb.BYTES;
                const Ob = [];
                for (let ab = Xb.gb.recipes(bb, 0); ab > 0; ab--) {
                  const hb = Xb.bb.flags(bb, Bb),
                    Gb = {
                      name: ub.nameOfId(Xb.bb.item(bb, Bb)),
                      SS: Xb.bb.recipe(bb, Bb),
                      requires: [],
                      produces: Xb.bb.produces(bb, Bb),
                      haveIngredients: 0 !== (hb & Xb._.HaveIngredients),
                      listed: 0 !== (hb & Xb._.Listed)
                    };
                  let Ub = Xb.bb.requires(bb, Bb);
                  for (Bb += Xb.bb.BYTES; Ub > 0; Ub--) {
                    const hb = Xb.cb.items(bb, Bb);
                    Gb.requires.push({
                      items: pB(bb, Bb + Xb.cb.BYTES, hb, ub),
                      amt: Xb.cb.amount(bb, Bb)
                    }), Bb += Xb.cb.BYTES + 2 * hb
                  }
                  Ob.push(Gb)
                }
                const Gb = Xb.gb.flags(bb, 0);
                if (null === hb.recipe || 0 === (Gb & Xb.db.Detail)) return {
                  focus: hb,
                  recipes: Ob,
                  detail: null
                };
                const Ub = {},
                  Lb = {};
                for (let ab = Xb.gb.ingredients(bb, 0); ab > 0; ab--) {
                  const hb = Xb.Z.item(bb, Bb),
                    Ob = Xb.Z.from(bb, Bb),
                    Gb = Xb.Z.amount(bb, Bb);
                  Bb += Xb.Z.BYTES;
                  const Yb = Ob === Xb.D ? null : pB(bb, Bb, Ob, ub);
                  if (null !== Yb && (Bb += 2 * Ob), 0 === hb) continue;
                  const Sb = ub.nameOfId(hb);
                  Ub[Sb] = Gb, null !== Yb && (Lb[Sb] = Yb)
                }
                const {
                  name: Yb,
                  SS: Sb
                } = hb.recipe;
                return {
                  focus: hb,
                  recipes: Ob,
                  detail: {
                    name: Yb,
                    SS: Sb,
                    craftAllTimes: Xb.gb.craftAllTimes(bb, 0),
                    roomForOne: 0 !== (Gb & Xb.db.RoomForOne),
                    resultStackable: Boolean(ub.getItemStat(Yb, "stackable")),
                    amounts: Ub,
                    ingredientsCraftedFrom: Lb
                  }
                }
              }(Yb, ub, hb), Bb
            },
            setFocus(bb) {
              hb = bb;
              for (const ub of [...Gb]) ub()
            },
            watchFocus: bb => (Gb.add(bb), () => {
              Gb.delete(bb)
            })
          }
        }(bb, ub);
      return {
        states: {
          inventory: YB(bb, (() => {
            const hb = bb.length;
            if (0 === hb) return GB;
            const Bb = [];
            for (let ub = 0; ub < Xb.td; ub++) Bb.push(SB(bb.slot(ub)));
            const Ob = bb.slotIcon,
              Gb = Bb[bb.selectedSlot];
            0 !== Ob && Gb && (Bb[bb.selectedSlot] = {
              ...Gb,
              icon: ub.nameOfId(Ob)
            });
            const Ub = !0 === ub.getClientOption("creative");
            let Lb = [],
              Yb = null;
            if (hb > Xb.td) {
              for (let ub = Xb.td; ub < hb; ub++) Lb.push(SB(bb.slot(ub)));
              Yb = {
                type: null,
                pos: [...bb.Fb],
                numSlots: hb - Xb.td,
                ironChest: null
              }
            } else Ub && (Lb = HB(ub));
            return {
              player: Bb,
              chestOrCreative: Lb,
              chest: Yb,
              creative: Ub,
              selectedSlot: bb.selectedSlot,
              freeSlots: bb.freeSlots()
            }
          }), (0, bB.k)("creative")),
          hotbar: YB(bb, (() => {
            if (0 === bb.length) return UB;
            const ub = [];
            for (let bb = 0; bb < OB; bb++) ub.push(Gb(bb));
            return {
              items: ub,
              ammo: bb.amountOf("Ammo"),
              selectedSlot: bb.selectedSlot
            }
          }), (0, bB.j)("DisplayName", "GunStats")),
          crafting: YB(bb, Lb.read, null, Lb.watchFocus),
          heldItemAim: YB(bb, (() => {
            var ub;
            if (!hb()) return LB;
            const Bb = null === (ub = bb.MS()) || void 0 === ub ? void 0 : ub.typeObj,
              Ob = "Gun" === (null === Bb || void 0 === Bb ? void 0 : Bb.type);
            return {
              gun: Ob,
              aimable: Ob || !0 === (null === Bb || void 0 === Bb ? void 0 : Bb.showsAimingUi),
              chargeName: "Chargeable" === (null === Bb || void 0 === Bb ? void 0 : Bb.type) ? Bb.name : null
            }
          }), null, (bb => function(bb, ub) {
            let hb = bb();
            return (0, BB.x)((() => {
              const Bb = bb();
              Bb !== hb && (hb = Bb, ub(Bb))
            }))
          }(hb, bb)))
        },
        events: {
          hotbarSlotRequested: (0, bB.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, bB.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, bB.e)("numkeyPressed"),
          inventoryDropRequested: (0, bB.e)("DropInvenItem"),
          chestToggled: (0, bB.e)("chestToggleFromServer"),
          chestRefreshed: (0, bB.e)("chestRefreshedFromServer", XB),
          inventorySynced: (0, bB.e)("syncedInvenFromServer", XB),
          enchantingTableOpened: (0, bB.e)("enchantingTable", (bb => {
            let {
              position: hb,
              bS: Bb
            } = bb;
            return {
              position: [...hb],
              blockName: ub.getMetaInfo(Bb).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(ub) {
            bb.selectSlot(ub), bb.flush(Bb)
          },
          removeInventoryItem(ub) {
            let {
              slot: hb,
              amount: Bb,
              drop: Gb
            } = ub;
            return Ob(bb.remove(hb, Bb, Gb))
          },
          swapInventorySlots(ub) {
            let {
              a: hb,
              b: Bb
            } = ub;
            return Ob(bb.swap(hb, Bb))
          },
          moveInventoryItem(ub) {
            let {
              from: hb,
              to: Bb,
              amount: Gb
            } = ub;
            return Ob(bb.move(hb, Bb, Gb))
          },
          quickMoveInventoryItem(ub) {
            let {
              slot: hb,
              start: Bb,
              end: Gb,
              amount: Ub
            } = ub;
            return Ob(bb.quickMove(hb, Bb, Gb, Ub))
          },
          closeChest() {
            bb.closeChest(), bb.flush(Bb), Ub.i.vp("chestClosedByPlayer")
          },
          focusCrafting(bb) {
            Lb.setFocus(bb)
          },
          craftRecipe(ub) {
            let {
              name: hb,
              SS: Bb,
              times: Gb
            } = ub;
            return Ob(bb.craft(hb, Bb, Gb))
          },
          salvageItem(ub) {
            let {
              slot: hb,
              name: Bb,
              amount: Gb
            } = ub;
            return Ob(bb.salvage(hb, Bb, Gb))
          },
          enchantItem(ub) {
            let {
              slot: hb,
              level: Bb,
              tablePos: Ob
            } = ub;
            bb.enchant(hb, Bb, Ob)
          }
        },
        queries: {
          enchantingOffer(hb) {
            let {
              slot: Bb,
              blockName: Ob
            } = hb;
            return function(bb, ub, hb, Bb) {
              const Ob = bb.slot(hb);
              if (!Ob || !ub.getClientOption("canCraft") || !(0, Rh.q)(Bb) || (0, Rh.o)(Ob.attributes)) return ZB;
              const Gb = (0, hB.enchantmentPerksOf)(ub.getItemId(Ob.name));
              if (0 === Gb.length) return ZB;
              const Ub = [];
              for (let Lb = 0; Lb < uB.e; Lb++) {
                const {
                  commonProb: bb,
                  uncommonProb: ub,
                  rareProb: hb,
                  epicProb: Ob,
                  legendaryProb: Gb,
                  level: Yb
                } = (0, Rh.g)(Bb, Lb);
                Ub.push({
                  level: Yb,
                  odds: [bb, ub, hb, Ob, Gb].map((bb => 100 * bb))
                })
              }
              return {
                perks: [...Gb],
                options: Ub
              }
            }(bb, ub, Bb, Ob)
          }
        }
      }
    }
    const ZB = Object.freeze({
      perks: [],
      options: []
    });

    function XB() {
      return null
    }

    function pB(bb, ub, hb, Bb) {
      const Ob = [];
      for (let Gb = 0; Gb < hb; Gb++) {
        const hb = bb.getUint16(ub + 2 * Gb, !0);
        0 !== hb && Ob.push(Bb.nameOfId(hb))
      }
      return Ob
    }
    class oB {
      constructor(bb) {
        this.api = bb, this.positions = new Map, this.targeted = {
          vR: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          gp: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(bb) {
        let ub = this.positions.get(bb);
        return ub || (this.api.checkValid(bb) || this.api.isLocal(bb) ? (ub = [NaN, NaN, NaN], this.api.readPosition(bb, ub), this.positions.set(bb, ub), ub) : null)
      }
      rbb() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [ub, hb] of this.positions) this.api.readPosition(ub, hb) || this.api.checkValid(ub) || this.api.isLocal(ub) || this.positions.delete(ub);
        const bb = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Xb.o.playerFlags(bb, 0) & Xb.Ad.Breaking) && Xb.o.breakingProgress(bb, 0) >= 0, this.isBreaking)
          for (let ub = 0; ub < 3; ub++) this.breaking[ub] = Xb.o.breakingPos(bb, 0, ub)
      }
      refreshTarget() {
        const bb = this.api.apiView,
          ub = Xb.o.targetBlockId(bb, 0);
        if (this.hasTarget = ub !== Xb.dd, this.hasTarget) {
          const hb = this.targeted;
          hb.vR = ub;
          for (let ub = 0; ub < 3; ub++) hb.position[ub] = Xb.o.targetBlock(bb, 0, ub), hb.normal[ub] = Xb.o.targetNormal(bb, 0, ub), hb.gp[ub] = Xb.o.targetAdjacent(bb, 0, ub)
        }
      }
      despawned(bb) {
        const ub = this.positions.get(bb);
        ub && !this.api.isLocal(bb) && (ub.fill(NaN), this.positions.delete(bb))
      }
    }
    var AB = hb(40079),
      lB = hb(40063),
      KB = hb(36437);
    const WB = 1,
      CB = 2;
    class dB {
      constructor() {
        this.game = new KB.d, this.client = new KB.d, this.MS = 0, this.movesFly = null
      }
      setGame(bb) {
        if (null === bb || "object" !== typeof bb) return !1;
        const {
          key: ub,
          value: hb
        } = bb;
        return "string" === typeof ub && (this.game.setBooleanType(ub, Boolean(hb)), !0)
      }
      setClient(bb, ub) {
        this.client.setBooleanType(bb, ub)
      }
      clearGame() {
        this.game = new KB.d, this.movesFly = null
      }
      setMovesFly(bb) {
        this.movesFly = bb
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? WB : 0) | (this.client._getTotalBooleanVal() ? CB : 0)
      }
      write(bb) {
        const ub = this.perms(),
          {
            movesFly: hb
          } = this;
        if (ub === this.MS && null === hb) return !0;
        let Bb = Xb.Qb.Keep;
        return null !== hb && (Bb = hb ? Xb.Qb.On : Xb.Qb.Off), !(!bb || !(0, Xb.oe)(bb, 0, Bb, ub, hb ? 1 : 0)) && (this.MS = ub, this.movesFly = null, !0)
      }
    }
    class rB {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = bb, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Lb.e,
          get y() {
            return ub()
          }
        }
      }
      get hasView() {
        const bb = this.api.apiView,
          ub = Xb.o.viewProj;
        return 0 !== ub(bb, 0, 3) || 0 !== ub(bb, 0, 7) || 0 !== ub(bb, 0, 11) || 0 !== ub(bb, 0, 15)
      }
      get cameraPosition() {
        const bb = this.api.apiView,
          {
            eye: ub
          } = this;
        for (let hb = 0; hb < 3; hb++) ub[hb] = Xb.o.eye(bb, 0, hb);
        return ub
      }
      get cameraDirection() {
        const bb = this.api.apiView,
          ub = Xb.o.viewProj,
          hb = ub(bb, 0, 3),
          Bb = ub(bb, 0, 7),
          Ob = ub(bb, 0, 11),
          Gb = Math.hypot(hb, Bb, Ob),
          {
            forward: Ub
          } = this;
        return Gb > 0 && (Ub[0] = hb / Gb, Ub[1] = Bb / Gb, Ub[2] = Ob / Gb), Ub
      }
      get cameraHeading() {
        return Xb.o.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Xb.o.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Xb.o.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Xb.o.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(bb) {
        this.clip(bb);
        const {
          clipX: ub,
          clipY: hb,
          clipW: Bb
        } = this;
        if (Bb > 0) {
          const bb = ub / Bb * 50,
            Ob = -hb / Bb * 50;
          return Math.abs(bb) <= this.screenBandPct.x && Math.abs(Ob) <= this.screenBandPct.y ? {
            x: 50 + bb,
            y: 50 + Ob
          } : this.clampToBand(bb, Ob)
        }
        const Ob = this.cameraPosition,
          Gb = Math.hypot(bb[0] - Ob[0], bb[1] - Ob[1], bb[2] - Ob[2]),
          Ub = this.api.apiView,
          Lb = Xb.o.viewProj,
          Yb = Gb > 0 ? ub / Gb : 0,
          Sb = Gb > 0 ? -hb / Gb : 0,
          ab = Math.hypot(Lb(Ub, 0, 1), Lb(Ub, 0, 5), Lb(Ub, 0, 9)),
          Hb = Yb / Math.hypot(Lb(Ub, 0, 0), Lb(Ub, 0, 4), Lb(Ub, 0, 8)),
          wb = Sb / ab,
          Zb = !(Math.abs(Hb) >= .001 || Math.abs(wb) >= .001);
        return this.clampToBand(Yb, Zb ? -(ab || 1) : Sb)
      }
      projectDirectionToScreenPos(bb) {
        if (!this.hasView) return;
        const ub = this.cameraPosition,
          hb = this.along;
        for (let Bb = 0; Bb < 3; Bb++) hb[Bb] = ub[Bb] + 10 * bb[Bb];
        return this.projectWorldPosToScreenPos(hb)
      }
      projectWorldPosToViewport(bb) {
        this.clip(bb);
        const {
          clipX: ub,
          clipY: hb,
          clipW: Bb
        } = this;
        return Bb > 0 ? {
          x: 50 + ub / Bb * 50,
          y: 50 - hb / Bb * 50
        } : null
      }
      clip(bb) {
        const ub = this.api.apiView,
          hb = bb[0] - Xb.o.origin(ub, 0, 0),
          Bb = bb[1] - Xb.o.origin(ub, 0, 1),
          Ob = bb[2] - Xb.o.origin(ub, 0, 2),
          Gb = Xb.o.viewProj;
        this.clipX = Gb(ub, 0, 0) * hb + Gb(ub, 0, 4) * Bb + Gb(ub, 0, 8) * Ob + Gb(ub, 0, 12), this.clipY = Gb(ub, 0, 1) * hb + Gb(ub, 0, 5) * Bb + Gb(ub, 0, 9) * Ob + Gb(ub, 0, 13), this.clipW = Gb(ub, 0, 3) * hb + Gb(ub, 0, 7) * Bb + Gb(ub, 0, 11) * Ob + Gb(ub, 0, 15)
      }
      clampToBand(bb, ub) {
        return (0, Lb.i)(bb, ub, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var jB = hb(4575);
    const nB = new TextEncoder,
      DB = new Uint8Array(Xb.M * Xb.I);
    class xB {
      constructor() {
        this.buttons = [], this.MS = !0
      }
      set(bb) {
        this.buttons = bb, this.MS = !1
      }
      attached() {
        this.MS = 0 === this.buttons.length
      }
      write(bb) {
        if (this.MS) return;
        const ub = new Uint8Array(Xb.M),
          hb = new Uint8Array(Xb.M);
        let Bb = 0,
          Ob = 0;
        for (const {
            id: Gb,
            keycode: Ub
          }
          of this.buttons) {
          if (Bb === Xb.M) break;
          const {
            read: bb,
            written: Lb
          } = nB.encodeInto(Gb, DB.subarray(Ob, Ob + Xb.I));
          if (bb < Gb.length) continue;
          const Yb = jB.k[Ub];
          ub[Bb] = "number" === typeof Yb ? Yb : 0, hb[Bb] = Lb, Bb++, Ob += Lb
        }
        this.MS = (0, Xb.fe)(bb, 0, Bb, ub, hb, DB.subarray(0, Ob))
      }
    }

    function zB(bb, ub, hb) {
      const Bb = nB.encode(ub);
      return Bb.length <= Xb.I && function(bb, ub, hb, Bb) {
        return (0, yu.e)(), (0, Xb.hf)(bb, ub, hb, Bb)
      }(bb, 0, hb ? 1 : 0, Bb)
    }
    const gB = new TextDecoder,
      iB = new TextEncoder,
      vB = new Uint8Array(0),
      tB = [0, 0, 0],
      JB = {
        off: Xb.Bd.Off,
        key: Xb.Bd.Key,
        touch: Xb.Bd.Touch
      };
    class eB {
      constructor(bb) {
        var ub;
        this.options = bb, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new xB, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new dB, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.iZ = bb => {
          if ((0, Zb.h)(bb)) throw bb;
          this.onError(bb)
        }, this.api = bb.api, this.tables = bb.tables, this.onError = null !== (ub = bb.onError) && void 0 !== ub ? ub : bb => {
          console.error("Error in client game callback", bb)
        }, this.renderFrame = new rB(this.api, bb.screenBandY), this.live = new oB(this.api), this.chunks = new Lu(this.api.memory, (() => this.api.apiView)), this.items = new Ah({
          api: this.api,
          tables: bb.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: bb.beforeOp
        });
        const hb = () => this.stopped() ? null : this.cmd,
          Bb = () => this.sessionLive;
        this.entityInfoWatch = new yh({
          cmd: hb,
          onError: this.onError
        }), this.entityInfo = new Vh({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Bb
        }), this.particles = new Jh({
          cmd: hb,
          isSessionLive: Bb,
          onError: this.onError
        }), this.clientApi = new Yh({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: bb.tables,
          cmd: hb,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Bb,
          beforeWrite: () => {
            var ub;
            if (this.stopped()) return !1;
            const hb = this.generation;
            return !1 !== (null === (ub = bb.beforeWrite) || void 0 === ub ? void 0 : ub.call(bb)) && hb === this.generation
          },
          playerDbId: () => {
            const bb = this.session;
            if (null === bb) throw new Error("No game session has started, so the local player has no DB id");
            return bb.playerDbId
          },
          playSound: bb.playSound,
          preloadSounds: bb.preloadSounds,
          setLocalOptions: bb.setLocalOptions,
          hasPackModel: bb.hasPackModel
        }), this.scriptedCamera = new Fb({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: bb.cameraScreen,
          showFacing: bb.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= wB(this.items, this.tables, (() => this.localPlayerAlive()), this.iZ), this.itemSources
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
        const ub = this.sessionLive ? this.sendCmd() : null;
        return null !== ub && (hb = ub, Bb = 0, Ob = bb[0], Gb = bb[1], Ub = bb[2], (0, yu.e)(), (0, Xb.le)(hb, Bb, Ob, Gb, Ub));
        var hb, Bb, Ob, Gb, Ub
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(bb) {
        const ub = this.liveCmd();
        return null === ub ? (this.pendingZoom = bb, !1) : (this.pendingZoom = null, (0, Xb.Vf)(ub, 0, bb, 1))
      }
      OJ(bb) {
        const ub = this.stopped() ? null : this.cmd;
        return null !== ub && (0, Xb.Rf)(ub, 0, bb ? 1 : 0)
      }
      respawn() {
        const bb = this.sessionLive ? this.sendCmd() : null;
        return null !== bb && (ub = bb, hb = 0, (0, yu.e)(), (0, Xb.xf)(ub, hb));
        var ub, hb
      }
      bindCustomButtonKeys(bb) {
        this.customButtons.set(bb)
      }
      pressCustomButton(bb, ub) {
        const hb = this.sessionLive ? this.sendCmd() : null;
        return null !== hb && zB(hb, bb, ub)
      }
      padMove(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = this.liveCmd();
        return null !== Ub && (0, Xb.Ue)(Ub, 0, bb, ub, hb, Bb, Ob, Gb)
      }
      thirdPersonFor(bb) {
        const ub = this.liveCmd();
        return null !== ub && (0, Xb._f)(ub, 0, null !== bb && void 0 !== bb ? bb : 1 / 0)
      }
      send(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Bb && Vu(Bb, hb ? wb.Yc : 0, bb, (0, Nb.h)(ub))
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
        const ub = () => bb.isStopped;
        this.stopped = ub, this.cmd = bb.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const hb = this.api.apiView;
        this.overflowGen = Xb.o.eventOverflowGen(hb, 0), this.resyncOwed = 0 !== Xb.o.eventOverflowMask(hb, 0), bb.setGameHost(this), bb.setEventWalker((bb => {
          this.api.walk(bb, this, ub)
        }))
      }
      watchPromptPick(bb) {
        this.promptWatch = bb, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : NB(Xb.o.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Xb.oc.None : Xb.o.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Xb.o.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === bb || bb >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, bb, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(bb) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(bb)
      }
      netEvent(bb) {
        "connection" === bb.type ? bb.phase === wb.E.Activated && bb.conn !== this.activeConn && bb.conn > this.closedThrough ? (this.endSession(), this.activeConn = bb.conn, this.endGameGrants(), this.dropGameCamera()) : bb.phase !== wb.E.Left && bb.phase !== wb.E.Closed || bb.conn !== this.activeConn ? bb.phase === wb.E.Resumed && 0 !== this.activeConn && bb.conn > this.closedThrough && (this.activeConn = bb.conn) : this.closeGame() : bb.conn === this.activeConn && 0 !== bb.conn && (bb.XS === lB.s ? this.gunHit(bb.payload) : bb.XS === Fh.fc.EditItemCraftingRecipes || bb.XS === lB.R ? this.items.touch() : (this.serverOptions(bb), this.gameMessage(bb)));
        const ub = this.options.onNetEvent;
        ub && this.guard((() => {
          ub(bb)
        }))
      }
      serverOptions(bb) {
        const ub = this.options.serverOptions,
          hb = ub ? this.decoded(fh, bb) : null;
        ub && hb && this.guard((() => {
          ub.applyNewClientOptions(hb)
        }))
      }
      gameMessage(bb) {
        let ub = null;
        try {
          ub = function(bb) {
            if ("message" !== bb.type || bb.XS !== Fh.fc.GameCodeMessage || bb.payloadKind !== wb.Zb.Msgpack) return null;
            const ub = (0, Nb.e)(bb.payload);
            if (null === ub || "object" !== typeof ub || "string" !== typeof ub.messageType) throw new Error("GameCodeMessage without a messageType");
            return ub
          }(bb)
        } catch (hb) {
          this.sessionLive && this.onError(hb)
        }
        if (ub) {
          const {
            messageType: bb,
            data: hb
          } = ub;
          if ((0, zb.e)(bb)) return void this.guard((() => {
            (0, zb.b)(bb, hb)
          }));
          "freeCamPerms" === bb && this.freeCam.setGame(hb) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (ub => {
            ub.onReceivedMessageFromServer(bb, hb)
          }))
        }
      }
      decoded(bb, ub) {
        try {
          return bb(ub)
        } catch (hb) {
          return this.onError(hb), null
        }
      }
      setClientFreeCameraGrant(bb, ub) {
        this.freeCam.setClient(bb, ub), this.writeFreeCam()
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
        const ub = this.highlight;
        this.highlightOwed = null === ub ? !(0, Xb.Ae)(bb, 0, tB, tB, 0) : !(0, Xb.Ae)(bb, 0, ub.pos, ub.normal, 1)
      }
      localPlayerBound(bb) {
        var ub, hb;
        if (0 === this.activeConn || this.sessionLive && bb === this.boundId) return;
        const Bb = this.sessionLive;
        let Ob, Gb, Ub, Lb;
        this.endSession(), Bb && this.restartGameCamera();
        try {
          var Yb;
          this.session = null;
          const bb = this.options.sessionInfo(this.activeConn);
          if (this.session = bb, !bb) return;
          Ob = bb.gameNameWithVariation, Gb = null !== (Yb = (0, Db.Tb)(Ob)) && void 0 !== Yb ? Yb : void 0, Ub = (0, xb.A)(bb.lobbyName), Lb = (0, xb.X)(bb.lobbyName)
        } catch (lb) {
          return void this.onError(lb)
        }
        const Sb = {
          localPlayerId: String(bb)
        };
        let ab = {},
          Hb = {};
        try {
          var wb, Zb;
          ab = null !== (wb = null === (Zb = this.options.gameFactory((0, Db.Xb)(Ob))) || void 0 === Zb ? void 0 : Zb(Lb, Ub, Gb, Sb)) && void 0 !== wb ? wb : {}
        } catch (lb) {
          this.iZ(lb)
        }
        try {
          var Xb, pb;
          Hb = {
            ...null === (Xb = (pb = this.options).defaultPlugins) || void 0 === Xb ? void 0 : Xb.call(pb, Lb, Ub, Gb, Sb),
            ...ab.plugins
          }
        } catch (lb) {
          this.iZ(lb)
        }
        const ob = [ab, ...Object.values(Hb)];
        this.owners = ob, this.tickers = ob.filter((bb => void 0 !== bb.gH)), this.renderers = ob.filter((bb => void 0 !== bb.onAfterRender)), this.receivers = ob.filter((bb => void 0 !== bb.onReceivedMessageFromServer)), this.writeAltVeto(ob), this.writeHooks(ob), this.writePublicLobby(Lb), this.writeLocalDbId(null !== (ub = null === (hb = this.session) || void 0 === hb ? void 0 : hb.playerDbId) && void 0 !== ub ? ub : null), this.boundId = bb, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(ob, (bb => {
          var ub;
          null === (ub = bb.onCreate) || void 0 === ub || ub.call(bb, this.clientApi)
        }));
        const Ab = this.generation;
        setTimeout((() => {
          Ab === this.generation && !0 === this.tables.getClientOption("creative") && HB(this.tables)
        }), 0)
      }
      chunkSlot(bb, ub, hb, Bb, Ob, Gb) {
        this.chunks.apply(bb, ub, hb, Bb, Ob, Gb)
      }
      entityAdded(bb) {
        var ub;
        this.entityInfo.stale(bb), null === (ub = this.options.replayEntities) || void 0 === ub || ub.entityAdded(bb)
      }
      entityInfoChanged(bb) {
        var ub;
        this.entityInfo.stale(bb), null === (ub = this.options.replayEntities) || void 0 === ub || ub.entityInfoChanged(bb)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const bb = performance.now();
          this.round(this.tickers, sB), (0, BB.e)(performance.now() - bb)
        }
      }
      afterWalk(bb) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const ub = this.options.replayEntities;
        ub && this.guard((() => {
          this.entityInfoWatch.want(Eh, ub.wantsWatch), ub.flush(this.entityInfoWatch.on)
        }));
        const hb = (0, BB.k)(bb, Xb.o.frameMs(this.api.apiView, 0));
        if (null !== hb) {
          const bb = this.renderFrame;
          this.guard((() => {
            (0, Th.c)().turnDamageIndicators(bb.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(hb)
          })), this.round(this.renderers, (ub => {
            ub.onAfterRender(hb, bb)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== hb)
        } catch (Ob) {
          this.iZ(Ob)
        }
        this.showZoom(), this.items.flush(this.iZ), this.writePromptWatch(), this.writeCustomButtons();
        const Bb = this.ticks;
        this.ticks = 0, (0, BB.h)(Bb, bb, hb, this.iZ)
      }
      entityRemoved(bb) {
        this.live.despawned(bb), this.entityInfo.removed(bb)
      }
      ackEventOverflow() {
        const bb = this.api.apiView,
          ub = Xb.o.eventOverflowGen(bb, 0),
          hb = ub - this.overflowGen >>> 0;
        if (0 === hb && !this.resyncOwed) return;
        this.overflowGen = ub;
        const Bb = Xb.o.eventOverflowMask(bb, 0),
          Ob = this.cmd;
        0 === Bb || null === Ob || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Xb.ne)(Ob, 0, Bb);
        const Gb = this.options.onEventOverflow;
        0 !== hb && Gb && this.guard((() => {
          Gb(Bb, hb)
        }))
      }
      gameCall(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        if (bb === Xb.ac.Director) try {
          return this.scriptedCamera.call(ub, hb, Bb, Ob, Gb, Ub)
        } catch (Sb) {
          return this.iZ(Sb), Xb.kb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return bb === Xb.ac.AltVeto ? Xb.h.Allow : 0;
        try {
          return this.callGames(bb, ub, hb, Bb, Ob, Gb, Ub, Lb)
        } catch (Sb) {
          throw (0, Zb.h)(Sb) && (this.fault = Sb), Sb
        }
      }
      takeFault() {
        const bb = this.fault;
        return this.fault = void 0, bb
      }
      callGames(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Yb
        } = this.options, Sb = String(this.boundId);
        switch (bb) {
          case Xb.ac.AltVeto:
          case Xb.ac.AltAction: {
            const Lb = 0 !== Ub,
              [ab, Hb, wb] = Lb ? [ub, hb, Bb] : [void 0, void 0, void 0],
              Zb = Lb ? Yb.nameOfId(Ob) : "Air",
              pb = NB(Gb);
            if (bb === Xb.ac.AltAction) return this.first((bb => {
              var ub;
              return null === (ub = bb.onPlayerAltAction) || void 0 === ub ? void 0 : ub.call(bb, Sb, ab, Hb, wb, Zb, pb)
            })), 0;
            const ob = this.first((bb => {
              var ub;
              return null === (ub = bb.onPlayerAttemptAltAction) || void 0 === ub ? void 0 : ub.call(bb, Sb, ab, Hb, wb, Zb, pb)
            }));
            return "preventAction" === ob ? Xb.h.Prevent : "preventPlacement" === ob ? Xb.h.PreventPlacement : Xb.h.Allow
          }
          case Xb.ac.Click: {
            const bb = Lb,
              ab = 0 !== (bb & Xb.S.Alt),
              Hb = 0 !== (bb & Xb.S.HasPos),
              wb = Hb ? Yb.nameOfId(Ob) : "Air",
              [Zb, pb, ob] = Hb ? [ub, hb, Bb] : [null, null, null],
              Ab = NB(Gb),
              lb = 0 !== (bb & Xb.S.Up),
              Kb = NB(Ub);
            if (0 === (bb & Xb.S.AttackOnly) && this.first((bb => {
                var ub, hb;
                return lb ? null === (ub = bb.onPlayerClickUp) || void 0 === ub ? void 0 : ub.call(bb, Sb, ab, Zb, pb, ob, wb, Ab) : null === (hb = bb.onPlayerClick) || void 0 === hb ? void 0 : hb.call(bb, Sb, ab, Zb, pb, ob, wb, Ab)
              })), !lb && !ab && null !== Kb) {
              const bb = this.clientApi.getPositionView(Kb),
                ub = bb ? [bb[0], bb[1], bb[2]] : [0, 0, 0];
              this.first((bb => {
                var hb;
                return null === (hb = bb.onPlayerAttackEntity) || void 0 === hb ? void 0 : hb.call(bb, Sb, Kb, ub)
              }))
            }
            return 0
          }
          case Xb.ac.ChangeBlock: {
            const bb = Yb.nameOfId(Ob),
              Ub = Yb.nameOfId(Gb);
            return this.first((Ob => {
              var Gb;
              return null === (Gb = Ob.onPlayerChangeBlock) || void 0 === Gb ? void 0 : Gb.call(Ob, Sb, ub, hb, Bb, bb, Ub)
            })), 0
          }
          case Xb.ac.DropItem: {
            const bb = Yb.nameOfId(ub);
            return this.first((ub => {
              var Ob;
              return null === (Ob = ub.onPlayerDropItem) || void 0 === Ob ? void 0 : Ob.call(ub, Sb, bb, hb, Bb)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${bb}`)), 0
        }
      }
      changeBlockFail(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = Ob === Xb.Wc ? null : gB.decode(this.api.eventBytes(Gb, Math.min(Ob, Ub)));
        this.failures.push({
          qG: [bb, ub, hb],
          EG: Bb,
          yG: Lb
        })
      }
      changeBlockFailEnd() {
        const bb = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (ub => {
          var hb;
          null === (hb = ub.onChangeBlockFail) || void 0 === hb || hb.call(ub, bb)
        })), this.vp("EditBoard", {
          pos: null
        }), this.vp("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(bb, ub, hb, Bb, Ob, Gb) {
        bb === Xb.uc.ChestOpened ? this.items.chestOpened(hb, Bb, Ob) : bb !== Xb.uc.Synced && bb !== Xb.uc.ChestClosed && bb !== Xb.uc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(bb, ub, hb, Bb) {
            switch (bb) {
              case Xb.uc.Synced:
                Ub.i.vp("syncedInvenFromServer");
                break;
              case Xb.uc.ChestOpened:
              case Xb.uc.ChestClosed:
                Ub.i.vp("chestToggleFromServer", bb === Xb.uc.ChestOpened, !0);
                break;
              case Xb.uc.ChestRefreshed:
                Ub.i.vp("chestRefreshedFromServer");
                break;
              case Xb.uc.EnchantingTable:
                Ub.i.vp("enchantingTable", {
                  bS: Bb,
                  position: hb
                });
                break;
              case Xb.uc.HotbarRequest:
                Ub.i.vp("setSelectedInventorySlotI", ub, !0);
                break;
              case Xb.uc.Scrolled:
                Ub.i.vp("ScrollInventorySlot", ub);
                break;
              case Xb.uc.NumberKey:
                Ub.i.vp("numkeyPressed", ub + 1);
                break;
              case Xb.uc.DropRequested:
                Ub.i.vp("DropInvenItem", 0 !== ub);
                break;
              default:
                throw new Zb.d(`InventoryEvent of no kind: what ${bb}`)
            }
          }(bb, ub, [hb, Bb, Ob], Gb)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(bb, ub, hb, Bb) {
        this.vp("shotPlayer", {
          playerId: String(bb),
          damage: ub,
          wasCrit: 0 !== Bb,
          distance: hb
        })
      }
      localHurt(bb, ub) {
        this.vp("closeShopOnDamaged", null), this.guard((() => {
          Ub.i.vp("damagedByOtherPlayer", {
            DB: null,
            direction: Number.isNaN(ub) ? null : ub,
            eb: bb
          })
        }))
      }
      attackHit(bb, ub, hb, Bb, Ob) {
        this.guard((() => {
          Ub.i.vp("yourAttackHit", {
            Db: Bb,
            screenPos: this.renderFrame.projectDirectionToScreenPos([bb, ub, hb]),
            hitSelf: Ob
          })
        }))
      }
      physicsType(bb) {
        this.vp("PlayerPhysicsTypeUpdate", bb)
      }
      vehicleEffect(bb, ub, hb, Bb, Ob) {
        this.guard((() => {
          bb === wb.od.UPDATE ? (0, ib.f)(ub, {
            icon: hb,
            level: Bb,
            displayName: null,
            durationMs: Ob
          }) : gb.c.remove(ub)
        }))
      }
      zoomChanged(bb) {
        this.zoom = bb, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.vp("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const bb = this.scriptedCamera.holdsView();
        !this.zoomUnshown || bb && this.zoomHeld || (this.zoomUnshown = !1, this.vp("cameraZoomSet", this.zoom)), this.zoomHeld = bb
      }
      gunHit(bb) {
        this.guard((() => {
          const {
            DB: ub,
            xB: hb
          } = (0, AB.c)(lB.s, bb);
          Ub.i.vp("damagedByOtherPlayer", {
            DB: ub,
            direction: hb
          })
        }))
      }
      uiEvent(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        this.guard((() => {
          ch(bb, ub, [hb, Bb, Ob], Gb, this.items, this.options.tables, (() => gB.decode(this.api.eventBytes(Ub, Lb))))
        }))
      }
      writeAltVeto(bb) {
        const ub = this.cmd;
        if (!ub) return;
        let hb;
        try {
          hb = function(bb, ub) {
            const hb = new Set;
            let Bb = !1;
            for (const Ob of bb)
              if (Ob.onPlayerAttemptAltAction) {
                if (Bb = !0, !Ob.altVetoBlocks) return {
                  mode: Xb._d.All,
                  roots: []
                };
                for (const bb of Ob.altVetoBlocks) hb.add(ub.getMetaInfo(bb).rootId)
              } return Bb ? hb.size > Xb.Jc ? {
              mode: Xb._d.All,
              roots: []
            } : {
              mode: Xb._d.Filter,
              roots: [...hb]
            } : {
              mode: Xb._d.Off,
              roots: []
            }
          }(bb, this.options.tables)
        } catch (Ob) {
          this.onError(Ob), hb = {
            mode: Xb._d.All,
            roots: []
          }
        }
        if (hb.mode === Xb._d.Off && !this.vetoSet) return;
        const Bb = new Uint8Array(new Uint32Array(hb.roots).buffer);
        (0, Xb.Cf)(ub, 0, hb.mode, hb.roots.length, Bb) ? this.vetoSet = hb.mode !== Xb._d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(bb) {
        const ub = this.cmd;
        if (!ub) return;
        const hb = function(bb) {
          let ub = 0;
          for (const hb of bb) hb.onPlayerAltAction && (ub |= 1 << Xb.ac.AltAction), (hb.onPlayerClick || hb.onPlayerClickUp || hb.onPlayerAttackEntity) && (ub |= 1 << Xb.ac.Click), hb.onPlayerChangeBlock && (ub |= 1 << Xb.ac.ChangeBlock), hb.onPlayerDropItem && (ub |= 1 << Xb.ac.DropItem);
          return ub
        }(bb);
        (0 !== hb || this.hooksSet) && ((0, Xb.If)(ub, 0, hb) ? this.hooksSet = 0 !== hb : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const bb = this.cmd;
        bb && !this.stopped() && this.customButtons.write(bb)
      }
      writePromptWatch() {
        const bb = this.cmd,
          ub = this.promptWatch;
        ub !== this.promptWatchSent && bb && !this.stopped() && (0, Xb.cg)(bb, 0, JB[ub]) && (this.promptWatchSent = ub)
      }
      writePublicLobby(bb) {
        const ub = this.cmd;
        ub && bb !== this.writtenPublicLobby && ((0, Xb.Uf)(ub, 0, bb ? 1 : 0) ? this.writtenPublicLobby = bb : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(bb) {
        const ub = this.cmd;
        ub && ((0, Xb.Jf)(ub, 0, null === bb ? 0 : 1, null === bb ? vB : iB.encode(bb)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(bb) {
        const ub = this.generation;
        for (const Bb of this.owners) {
          if (ub !== this.generation) break;
          try {
            const ub = bb(Bb);
            if (void 0 !== ub) return ub
          } catch (hb) {
            this.iZ(hb)
          }
        }
      }
      vp(bb, ub) {
        this.guard((() => {
          Ub.i.vp(bb, ub)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (bb) {
          this.iZ(bb)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (bb) {
          this.iZ(bb)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const bb = this.owners;
        let ub;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Bb) {
          ub = Bb
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Bb) {
          ub ??= Bb
        }
        this.round(bb, MB, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Bb) {
          ub ??= Bb
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Bb) {
          ub ??= Bb
        }
        const hb = this.options.onSessionEnd;
        if (hb) try {
          hb()
        } catch (Bb) {
          this.onError(Bb)
        }
        void 0 !== ub && this.iZ(ub)
      }
      round(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = this.generation;
        for (const Gb of bb) {
          if (Bb !== this.generation) break;
          try {
            ub(Gb)
          } catch (Ob) {
            hb ? this.onError(Ob) : this.iZ(Ob)
          }
        }
      }
      guard(bb) {
        try {
          bb()
        } catch (ub) {
          this.iZ(ub)
        }
      }
    }

    function NB(bb) {
      return bb === Xb.Zc ? null : String(bb)
    }

    function sB(bb) {
      bb.gH(wb.ed)
    }

    function MB(bb) {
      var ub;
      null === (ub = bb.onClose) || void 0 === ub || ub.call(bb)
    }

    function mB(bb, ub) {
      bb.watch((() => {
        const hb = function(bb) {
          const ub = [],
            hb = Math.min(OB, bb.length);
          for (let Ob = 0; Ob < hb; Ob++) {
            var Bb;
            const hb = null === (Bb = bb.slot(Ob)) || void 0 === Bb ? void 0 : Bb.typeObj,
              Gb = hb ? (0, hB.gunTypeOf)(hb.id) : void 0;
            void 0 !== Gb && ub.push(Ku[Gb])
          }
          return ub
        }(bb);
        hb.length > 0 && (ub.preload(hb), ub.preload([Wu]))
      }))
    }
    var IB = hb(36044),
      PB = hb(4626),
      qB = hb(36393),
      EB = hb(36423);

    function yB(bb) {
      const ub = (0, IB.countDecodesAs)(new PB.Howl({
          ...(0, qB.k)(bb),
          pool: 15,
          preload: !1
        }), "sheet"),
        hb = ub.load.bind(ub);
      return ub.load = () => (ub._preload = !0, (0, EB.b)(bb), hb()), ub
    }

    function VB(bb, ub, hb) {
      const Bb = bb.listener;
      if (Bb.positionX) FB(Bb.positionX, ub, hb, 0), FB(Bb.positionY, ub, hb, 1), FB(Bb.positionZ, ub, hb, 2), FB(Bb.forwardX, ub, hb, 3), FB(Bb.forwardY, ub, hb, 4), FB(Bb.forwardZ, ub, hb, 5), FB(Bb.upX, ub, hb, 6), FB(Bb.upY, ub, hb, 7), FB(Bb.upZ, ub, hb, 8);
      else {
        let bb = !1;
        for (let Bb = 0; Bb < 9; Bb++) bb ||= ub[Bb] !== hb[Bb];
        bb && (Bb.setPosition(ub[0], ub[1], ub[2]), Bb.setOrientation(ub[3], ub[4], ub[5], ub[6], ub[7], ub[8]), hb.set(ub))
      }
    }

    function FB(bb, ub, hb, Bb) {
      ub[Bb] !== hb[Bb] && (bb.value = ub[Bb], hb[Bb] = ub[Bb])
    }
    class fB {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(bb) {
        this.pose.set(bb);
        const ub = PB.Howler.ctx;
        return !!ub && (ub !== this.watchedCtx && (this.watchedCtx = ub, this.written.fill(Number.NaN), ub.addEventListener("statechange", (() => {
          "running" === ub.state && VB(ub, this.pose, this.written)
        }))), "running" === ub.state && VB(ub, bb, this.written), !0)
      }
    }
    var kB = hb(36183),
      TB = hb(38828);
    let cB = null,
      QB = null;

    function RB() {
      return null === cB && (cB = document.createElement("div"), cB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(cB)), cB
    }

    function bO() {
      return QB ??= new TB.d(new kB.e(RB)), QB
    }

    function uO() {
      var bb;
      null === (bb = QB) || void 0 === bb || bb.clear(), hO(null)
    }

    function hO(bb) {
      Bb.d.get("scriptedCameraFacing") !== bb && Bb.d.set({
        scriptedCameraFacing: bb
      })
    }
    var BO = hb(9280),
      OO = hb(9235),
      GO = hb(38853),
      UO = hb(40173),
      LO = hb(3063);
    const YO = Object.entries(Xb.Zb).reduce(((bb, ub) => {
      let [hb, Bb] = ub;
      return bb[Bb] = hb, bb
    }), []);

    function SO(bb, ub) {
      var hb;
      return 0 !== ((null !== (hb = bb.itemFlags[ub]) && void 0 !== hb ? hb : 0) & Xb.yc.Stackable)
    }
    const aO = /^(0|[1-9][0-9]*)$/,
      HO = {
        displayName: (bb, ub) => (0, hB.displayNameOf)(ub),
        description: (bb, ub) => (0, hB.descriptionOf)(ub),
        type: (bb, ub) => (0, hB.itemTypeOf)(ub),
        clipSize: (bb, ub) => (0, hB.clipSizeOf)(ub),
        armourReduction: (bb, ub) => (0, hB.armourReductionOf)(ub),
        scopeType: (bb, ub) => (0, hB.scopeTypeOf)(ub),
        stackable: SO,
        harvestType: (bb, ub) => YO[bb.blockHarvestTypes[ub]],
        harvestLevel: (bb, ub) => {
          const hb = bb.blockHarvestLevels[ub];
          return hb === Xb.Fc ? void 0 : hb
        },
        harvests: (bb, ub) => {
          var hb;
          const Bb = null !== (hb = bb.itemHarvests[ub]) && void 0 !== hb ? hb : 0;
          return 0 !== Bb ? YO[Bb] : void 0 === (0, hB.harvestsNullLevelOf)(ub) ? void 0 : null
        },
        level: (bb, ub) => {
          var hb, Bb;
          const Ob = null !== (hb = bb.itemLevels[ub]) && void 0 !== hb ? hb : Xb.Fc;
          return Ob !== Xb.Fc ? Ob : null !== (Bb = (0, hB.harvestsNullLevelOf)(ub)) && void 0 !== Bb ? Bb : void 0
        }
      };

    function wO(bb, ub, hb) {
      return XO(new Uint8Array(Math.floor(bb.length / ub)), bb, ub, hb)
    }

    function ZO(bb, ub, hb) {
      return XO(new Uint16Array(Math.floor(bb.length / ub)), bb, ub, hb)
    }

    function XO(bb, ub, hb, Bb) {
      const Ob = new DataView(ub.buffer, ub.byteOffset, ub.byteLength);
      for (let Gb = 0; Gb < bb.length; Gb++) bb[Gb] = Bb(Ob, Gb * hb);
      return bb
    }
    class pO {
      constructor(bb, ub) {
        this.options = ub, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = bb => {
          const ub = this.idOf(bb);
          if (void 0 === ub) throw new Error(`No item is named ${bb}, an item's root`);
          return ub
        };
        const hb = ub => {
            const hb = ub();
            return new Uint8Array(bb.memory().buffer, bb.scratch(), hb).slice()
          },
          Bb = (new TextDecoder).decode(hb((() => bb.queries.itemNames()))).split("\n"),
          Ob = hb((() => bb.queries.blockProps())),
          Gb = hb((() => bb.queries.itemProps()));
        this.props = {
          blockFlags: wO(Ob, Xb.x.BYTES, Xb.x.flags),
          blockHarvestTypes: wO(Ob, Xb.x.BYTES, Xb.x.harvestType),
          blockHarvestLevels: wO(Ob, Xb.x.BYTES, Xb.x.harvestLevel),
          blockAttachedTops: ZO(Ob, Xb.x.BYTES, Xb.x.attachedTop),
          itemFlags: wO(Gb, Xb.Bc.BYTES, Xb.Bc.flags),
          itemHarvests: wO(Gb, Xb.Bc.BYTES, Xb.Bc.harvests),
          itemLevels: wO(Gb, Xb.Bc.BYTES, Xb.Bc.level)
        }, (0, LO.h)(Object.freeze(Bb)), (0, UO.i)()
      }
      idOf(bb) {
        if ("number" === typeof bb) return void 0 === (0, LO.f)(bb) ? void 0 : bb;
        const ub = (0, LO.e)(bb);
        return void 0 === ub && aO.test(bb) ? void 0 === (0, LO.f)(+bb) ? void 0 : +bb : ub
      }
      getMetaInfo(bb) {
        if (!bb || bb === BO.e) return BO.g;
        const ub = this.idOf(bb);
        if (void 0 === ub) throw new Error(`Item ${bb} not found in registry`);
        return this.metaOf(ub)
      }
      blockRootId(bb) {
        return 0 !== bb && void 0 !== (0, LO.f)(bb) ? this.metaOf(bb).rootId : bb
      }
      metaOf(bb) {
        return this.metas[bb] ??= (0, OO.l)((0, LO.f)(bb), bb, this.rootIdOf, (0, hB.rootMetaDescOf)(bb))
      }
      getItemId(bb) {
        if (!bb || bb === BO.e) return 0;
        const ub = this.idOf(bb);
        if (void 0 === ub) throw new Error(`Invalid block name. You sent ${bb}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return ub
      }
      getItemName(bb) {
        if (!bb || bb === BO.e) return BO.e;
        const ub = this.idOf(bb);
        if (void 0 === ub) throw new Error(`Item ${bb} not found in registry`);
        return (0, LO.f)(ub)
      }
      blockNameToBlockId(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (bb === BO.e) return 0;
        let hb = this.idOf(bb);
        if (void 0 === hb || !this.isBlockId(hb)) {
          const ub = bb.indexOf("|"),
            Bb = ub > 0 ? (0, LO.e)(bb.slice(0, ub)) : void 0;
          hb = void 0 !== Bb && this.isBlockId(Bb) && (0, hB.rootMetaDescOf)(Bb) === bb ? Bb : void 0
        }
        if (void 0 !== hb) return hb;
        if (!ub) throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(bb) {
        return bb > 0 && bb < this.props.blockFlags.length
      }
      nameOfId(bb) {
        return 0 !== bb && (0, LO.f)(bb) || BO.e
      }
      itemType(bb) {
        const ub = bb ? this.idOf(bb) : void 0;
        if (!ub) return null;
        let hb = this.types.get(ub);
        return void 0 === hb && (hb = Object.freeze({
          id: ub,
          name: (0, LO.f)(ub),
          meta: this.getMetaInfo(ub),
          stackable: SO(this.props, ub),
          type: (0, hB.itemTypeNameOf)(ub),
          clipSize: (0, hB.clipSizeOf)(ub),
          scopeType: (0, hB.scopeTypeOf)(ub),
          showsAimingUi: (0, hB.showsAimingUi)(ub)
        }), this.types.set(ub, hb)), hb
      }
      getItemStat(bb, ub) {
        if (GO.c.has(ub)) {
          const hb = "minChargeStateToUse" === ub ? this.getMetaInfo(bb).rootName : this.getItemName(bb),
            Bb = this.options.get((0, GO.e)(hb, ub));
          if (null !== Bb && void 0 !== Bb) return Bb
        }
        return this.defaultStat(bb, ub, this.statOf(ub))
      }
      getDisplayName(bb) {
        return this.getItemStat(bb, "displayName")
      }
      getDefaultItemStat(bb, ub) {
        return this.defaultStat(bb, ub, this.statOf(ub))
      }
      statOf(bb) {
        const ub = HO[bb];
        return void 0 === ub && function(bb, ub) {
          throw new Error(`ClientApi.${bb} is not available yet in the wasm client (${ub})`)
        }(`getItemStat("${bb}")`, `a table of the stat: the wasm client answers ${Object.keys(HO).join(", ")}`), ub
      }
      defaultStat(bb, ub, hb) {
        const Bb = this.idOf(bb),
          Ob = void 0 === Bb ? void 0 : hb(this.props, Bb);
        return null !== Ob && void 0 !== Ob || "displayName" !== ub ? Ob : this.getItemName(bb)
      }
      getClientOption(bb) {
        return this.options.get(bb)
      }
      getGunStats(bb) {
        return this.getClientOption(`${bb}GunStats`)
      }
      watchClientOption(bb, ub) {
        return this.options.subscribe(bb, ub)
      }
      isSolidBlockId(bb) {
        var ub;
        return 0 !== ((null !== (ub = this.props.blockFlags[bb]) && void 0 !== ub ? ub : 0) & Xb.v.Solid)
      }
      isStackableId(bb) {
        return SO(this.props, bb)
      }
      isFluidBlockId(bb) {
        var ub;
        return 0 !== ((null !== (ub = this.props.blockFlags[bb]) && void 0 !== ub ? ub : 0) & Xb.v.Fluid)
      }
      canPlaceOverBlockId(bb) {
        var ub;
        return 0 !== ((null !== (ub = this.props.blockFlags[bb]) && void 0 !== ub ? ub : 0) & Xb.v.PlaceOver)
      }
      attachedTopOf(bb) {
        var ub;
        return null !== (ub = this.props.blockAttachedTops[bb]) && void 0 !== ub ? ub : 0
      }
      isDroplessBlockId(bb) {
        return (0, hB.dropsNothing)(bb)
      }
    }

    function oO(bb, ub) {
      const hb = new Map;
      return (Bb, Ob) => {
        const Gb = ub.idOf(Bb),
          Ub = void 0 === Gb ? null : (Bb => {
            let Ob = hb.get(Bb);
            if (void 0 === Ob) {
              const Gb = bb.queries.salvageRecipe(Bb),
                Ub = new DataView(bb.memory().buffer, bb.scratch(), Gb),
                Lb = [];
              for (let bb = 0; bb + Xb.Sd.BYTES <= Gb; bb += Xb.Sd.BYTES) Lb.push(Object.freeze({
                item: ub.nameOfId(Xb.Sd.item(Ub, bb)),
                amt: Xb.Sd.amount(Ub, bb)
              }));
              Ob = 0 === Lb.length ? null : Object.freeze(Lb), hb.set(Bb, Ob)
            }
            return Ob
          })(Gb);
        if (null === Ub || void 0 === Ob) return Ub;
        const Lb = Ob <= 0 ? 1 : Ob;
        return Ub.map((bb => {
          let {
            item: ub,
            amt: hb
          } = bb;
          return {
            item: ub,
            amt: hb * Lb
          }
        }))
      }
    }
    var AO = hb(40351),
      lO = hb(36612),
      KO = hb(36600),
      WO = hb(36644),
      CO = hb(36113),
      dO = hb(40133),
      rO = hb(42002);
    const jO = -1,
      nO = new Uint8Array(0),
      DO = new TextEncoder;

    function xO(bb) {
      if (null === bb) return null;
      const ub = DO.encode(bb);
      return ub.byteLength < wb.uc ? ub : ub.subarray(0, wb.uc - 1)
    }
    class zO {
      constructor(bb) {
        this.deps = bb, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = jO, this.keyframesSettled = !1, this.reloadFrom = jO
      }
      reloadKeyframes() {
        var bb, ub;
        this.keyframesVersion = jO, this.reloadFrom = null !== (bb = null === (ub = this.view()) || void 0 === ub ? void 0 : ub.version) && void 0 !== bb ? bb : jO
      }
      setPlayback(bb) {
        const ub = 1 === this.deps.core.JOb(bb);
        return ub && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = jO, this.reloadFrom = jO), ub
      }
      async open(bb) {
        const ub = await this.deps.replay.open(bb);
        return "opening" === ub && (this.reloadKeyframes(), this.deps.recorder.prefetch()), ub
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(bb)), ub)
      }
      setSpeed(bb) {
        this.deps.replay.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.replay.setCameraMode(rO.e.indexOf(bb))
      }
      view() {
        var bb;
        const ub = Xb.o.replayViewPtr(this.deps.apiView(), 0);
        if (0 === ub) return this.lastView = null, null;
        const hb = new DataView(this.deps.buffer(), ub, Xb.Hd.BYTES),
          Bb = Xb.Hd.version(hb, 0),
          Ob = this.lastView;
        if (null !== Ob && Ob.version === Bb) return Ob;
        const Gb = Xb.Hd.markIn(hb, 0),
          Ub = {
            version: Bb,
            state: Xb.Hd.state(hb, 0),
            cameraMode: null !== (bb = rO.e[Xb.Hd.cameraMode(hb, 0)]) && void 0 !== bb ? bb : "recording",
            gH: Xb.Hd.gH(hb, 0),
            totalTicks: Xb.Hd.totalTicks(hb, 0),
            speed: Xb.Hd.speed(hb, 0),
            mark: Gb === Xb.Dd ? null : {
              inTick: Gb,
              outTick: Xb.Hd.markOut(hb, 0)
            },
            editVersion: Xb.Hd.editVersion(hb, 0)
          };
        return this.lastView = Ub, Ub
      }
      keyframes() {
        const bb = this.view();
        if (null === bb) return [];
        bb.version !== this.reloadFrom && (this.reloadFrom = jO);
        const ub = this.reloadFrom === jO && bb.state !== wb.Xc.Cropping && bb.state !== wb.Xc.None,
          hb = ub ? bb.editVersion : bb.version;
        if (hb === this.keyframesVersion && ub === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Bb
        } = this.deps, Ob = Bb.eOb(), Gb = Bb.Ao(), Ub = [];
        if (0 !== Gb && Ob > 0) {
          const bb = new DataView(this.deps.buffer(), Gb, Ob * wb.lc);
          for (let ub = 0; ub < Ob; ub++) {
            const hb = ub * wb.lc,
              Bb = ub => bb.getFloat64(hb + ub, !0);
            Ub.push({
              gH: bb.getUint32(hb + wb.tc, !0),
              position: [Bb(wb.qc), Bb(wb.qc + 8), Bb(wb.qc + 16)],
              direction: [Bb(wb.nc), Bb(wb.nc + 8), Bb(wb.nc + 16)],
              easing: [Bb(wb.oc), Bb(wb.oc + 8), Bb(wb.oc + 16), Bb(wb.oc + 24)]
            })
          }
        }
        return this.keyframesVersion = hb, this.keyframesSettled = ub, this.lastKeyframes = Ub, Ub
      }
      addKeyframe() {
        const bb = this.deps.apiView(),
          ub = [Xb.o.eye(bb, 0, 0), Xb.o.eye(bb, 0, 1), Xb.o.eye(bb, 0, 2)];
        return this.deps.replay.addKeyframe(ub, function(bb, ub) {
          const hb = Math.cos(ub);
          return [hb * Math.sin(bb), -Math.sin(ub), hb * Math.cos(bb)]
        }(Xb.o.heading(bb, 0), Xb.o.pitch(bb, 0)))
      }
      setKeyframe(bb) {
        return this.deps.replay.setKeyframe(bb.gH, Float64Array.from([...bb.position, ...bb.direction, ...bb.easing]))
      }
      moveKeyframe(bb, ub) {
        return this.deps.replay.moveKeyframe(bb, ub)
      }
      deleteKeyframes(bb, ub) {
        return this.deps.replay.deleteKeyframes(bb, ub)
      }
      setMark(bb) {
        var ub, hb;
        return this.deps.replay.setMark(null !== (ub = null === bb || void 0 === bb ? void 0 : bb.inTick) && void 0 !== ub ? ub : -1, null !== (hb = null === bb || void 0 === bb ? void 0 : bb.outTick) && void 0 !== hb ? hb : -1)
      }
      crop(bb, ub) {
        const hb = this.deps.replay.crop(bb, ub);
        return hb && this.reloadKeyframes(), hb
      }
      save(bb) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(bb)
      }
      recorderControl(bb) {
        this.deps.recorder.control(bb)
      }
      recorderPrefs(bb, ub) {
        this.deps.recorder.prefs(bb, ub)
      }
      recorderOption(bb, ub) {
        const hb = this.deps.cmd();
        return null !== hb && (0, Xb.rf)(hb, 0, bb, null === ub ? nO : DO.encode(ub))
      }
      recordFlyingText(bb, ub, hb, Bb) {
        const Ob = this.deps.cmd(),
          Gb = Math.max(0, Math.min(4294967295, Math.round(Bb)));
        return null !== Ob && (0, Xb.kf)(Ob, 0, ub, hb, Gb, DO.encode(bb))
      }
      recordPlayerKilled(bb, ub, hb, Bb) {
        const Ob = this.deps.cmd();
        return null !== Ob && (0, Xb.tf)(Ob, 0, bb, ub, Math.max(0, hb), DO.encode(Bb))
      }
      recordKillfeed(bb, ub, hb) {
        var Bb, Ob;
        const Gb = this.deps.cmd(),
          Ub = function(bb) {
            const ub = bb.reduce(((bb, ub) => {
                var hb;
                return bb + Fh.ob + (null !== (hb = null === ub || void 0 === ub ? void 0 : ub.byteLength) && void 0 !== hb ? hb : 0)
              }), 0),
              hb = new Uint8Array(ub),
              Bb = new DataView(hb.buffer);
            let Ob = 0;
            for (const Ub of bb) {
              var Gb;
              Bb.setUint16(Ob, null !== (Gb = null === Ub || void 0 === Ub ? void 0 : Ub.byteLength) && void 0 !== Gb ? Gb : wb.uc, !0), Ob += Fh.ob, null !== Ub && (hb.set(Ub, Ob), Ob += Ub.byteLength)
            }
            return hb
          }([xO(bb.name), xO(bb.colour), xO(ub.name), xO(ub.colour), xO(hb)]);
        return null !== Gb && (0, Xb.nf)(Gb, 0, null !== (Bb = bb.id) && void 0 !== Bb ? Bb : Xb.ad, null !== (Ob = ub.id) && void 0 !== Ob ? Ob : Xb.ad, Ub)
      }
      recorderSession(bb, ub) {
        this.deps.recorder.session({
          session: ub,
          lobbyType: bb.lobbyType,
          game: bb.gameNameWithVariation,
          lobby: bb.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.NOb()
      }
      filePartDone(bb, ub) {
        this.deps.recorder.filePartDone(bb, ub)
      }
      fileDone(bb) {
        this.deps.recorder.fileDone(bb)
      }
    }
    const gO = -2147483648;
    class iO {
      constructor(bb) {
        var ub;
        this.deps = bb, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (ub = bb.now) && void 0 !== ub ? ub : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var bb, ub, hb;
        return null === (bb = null === (ub = (hb = this.deps).live) || void 0 === ub ? void 0 : ub.call(hb)) || void 0 === bb || bb
      }
      activated(bb) {
        var ub, hb;
        this.live && (this.viewerShown(!0 === (null === (ub = (hb = this.deps).viewerOpen) || void 0 === ub ? void 0 : ub.call(hb))), this.deps.client.recorderSession(bb, (0, rO.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var bb, ub;
        this.live && (this.state.recording || !0 !== (null === (bb = (ub = this.deps).viewerOpen) || void 0 === bb ? void 0 : bb.call(ub))) ? this.deps.client.recorderControl(wb.Hc.ToggleRecording) : this.deps.notify(WO.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(wb.Hc.SaveClip) : this.deps.notify(WO.e.clippingNotOn)
      }
      viewerShown(bb) {
        this.live && this.deps.client.recorderControl(bb ? wb.Hc.ViewerOpened : wb.Hc.ViewerClosed)
      }
      setPrefs(bb, ub) {
        this.live && this.deps.client.recorderPrefs(bb, ub)
      }
      setOption(bb, ub) {
        this.live && this.deps.client.recorderOption(bb, ub)
      }
      recordFlyingText(bb, ub, hb, Bb) {
        this.live && this.deps.client.recordFlyingText(bb, ub, hb, Bb)
      }
      recordPlayerKilled(bb, ub, hb, Bb) {
        this.live && this.deps.client.recordPlayerKilled(bb, ub, hb, Bb)
      }
      recordKillfeed(bb, ub, hb) {
        this.live && this.deps.client.recordKillfeed(bb, ub, hb)
      }
      gH() {
        let bb = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, bb = {
            ...bb,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const ub = Math.floor((this.now() - this.recordingSince) / 1e3);
          ub !== bb.seconds && (bb = {
            ...bb,
            seconds: ub
          })
        }
        this.set(bb)
      }
      onEvent(bb) {
        var ub, hb;
        const {
          notify: Bb
        } = this.deps, Ob = WO.e;
        switch (bb.what) {
          case wb.Fc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Bb(Ob.recordingStarted);
            break;
          case wb.Fc.RecordingStopped:
            this.stopRecording(), Bb(Ob.recordingStopped), this.saveState(wb.Oc.Recording, "saving");
            break;
          case wb.Fc.RecordingDiscarded:
            this.stopRecording(), Bb(Ob.recordingDiscarded);
            break;
          case wb.Fc.RecordingTurnedOff:
            this.stopRecording(), Bb(Ob.recordingTurnedOff);
            break;
          case wb.Fc.LimitReached:
            Bb(Ob.limitReached);
            break;
          case wb.Fc.ClipSaved:
            this.saveState(wb.Oc.Clip, "saving");
            break;
          case wb.Fc.ClipEmpty:
            Bb(Ob.clipEmpty);
            break;
          case wb.Fc.ClippingNotOn:
            Bb(Ob.clippingNotOn);
            break;
          case wb.Fc.Disallowed:
            Bb(Ob.disallowed);
            break;
          case wb.Fc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case wb.Fc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case wb.Fc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case wb.Fc.SaveBusy:
            null === (ub = (hb = this.deps).onSaveState) || void 0 === ub || ub.call(hb, bb.kind, "busy"), Bb(Ob.saveBusy);
            break;
          case wb.Fc.CloseViewerFirst:
            Bb(Ob.closeViewerFirst)
        }
      }
      fileReady(bb, ub) {
        this.deps.download(ub), this.saveState(bb, "done"), this.deps.notify(bb === wb.Oc.Clip ? WO.e.clipSaved : WO.e.recordingSaved)
      }
      failed(bb) {
        this.saveState(bb, "failed"), this.deps.notify(bb === wb.Oc.Clip ? WO.e.clipFailed : WO.e.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(bb, ub) {
        var hb, Bb;
        null === (hb = (Bb = this.deps).onSaveState) || void 0 === hb || hb.call(Bb, bb, ub)
      }
      set(bb) {
        bb !== this.state && (this.state = bb, this.deps.onState(bb))
      }
    }
    const vO = new TextDecoder;

    function tO(bb, ub, hb, Bb) {
      const Ob = [];
      for (let Gb = 0; Gb < Bb; Gb++) {
        if (ub + Fh.ob > hb) return null;
        const Bb = bb.getUint16(ub, !0);
        if (ub += Fh.ob, Bb !== wb.uc) {
          if (ub + Bb > hb) return null;
          Ob.push(vO.decode(new Uint8Array(bb.buffer, bb.byteOffset + ub, Bb))), ub += Bb
        } else Ob.push(null)
      }
      return ub === hb ? Ob : null
    }

    function JO(bb, ub) {
      let hb = new DataView(new ArrayBuffer(0)),
        Bb = !0;
      const Ob = {
        replayFailed: (ub, hb) => {
          bb.replayFailed({
            reason: ub,
            code: hb
          })
        },
        replayOption: (ub, Ob, Gb, Ub) => {
          const Lb = function(bb, ub, hb, Bb) {
            switch (ub) {
              case wb.Pc.Cleared:
                return 0 === Bb ? null : void 0;
              case wb.Pc.Text:
                return vO.decode(new Uint8Array(bb.buffer, bb.byteOffset + hb, Bb));
              case wb.Pc.Int:
                return Bb === Int32Array.BYTES_PER_ELEMENT ? bb.getInt32(hb, !0) : void 0;
              case wb.Pc.Double:
                return Bb === Float64Array.BYTES_PER_ELEMENT ? bb.getFloat64(hb, !0) : void 0;
              default:
                return
            }
          }(hb, Ob, Gb, Ub);
          void 0 !== Lb ? bb.replayOption({
            key: ub,
            value: Lb
          }) : Bb = !1
        },
        replayUiEvent: (ub, Ob, Gb, Ub, Lb, Yb) => {
          const Sb = function(bb, ub, hb, Bb, Ob, Gb, Ub) {
            const Lb = Gb + Ub;
            switch (ub) {
              case wb.Tc.FlyingText: {
                const Ub = tO(bb, Gb, Lb, 1);
                return null !== Ub && null !== Ub[0] ? {
                  what: ub,
                  Nh: hb,
                  eh: Bb,
                  angle: Ob,
                  contentJson: Ub[0]
                } : null
              }
              case wb.Tc.PlayerKilled: {
                const Bb = tO(bb, Gb, Lb, 3);
                return Bb ? {
                  what: ub,
                  killstreak: hb,
                  dead: Bb[0],
                  killer: Bb[1],
                  withItem: Bb[2]
                } : null
              }
              case wb.Tc.Killfeed: {
                const hb = tO(bb, Gb, Lb, 7);
                return hb ? {
                  what: ub,
                  killerId: hb[0],
                  killerName: hb[1],
                  killerColour: hb[2],
                  victimId: hb[3],
                  victimName: hb[4],
                  victimColour: hb[5],
                  withItem: hb[6]
                } : null
              }
              default:
                return null
            }
          }(hb, ub, Ob, Gb, Ub, Lb, Yb);
          null !== Sb ? bb.replayUiEvent(Sb) : Bb = !1
        },
        replayFilePart: (hb, Ob, Gb, Ub) => {
          const Lb = ub();
          Gb + Ub > Lb.byteLength ? Bb = !1 : bb.filePart(hb, Ob, new Uint8Array(Lb, Gb, Ub).slice())
        },
        replayFileReady: (ub, hb, Bb, Ob) => {
          bb.fileReady({
            save: ub,
            kind: hb,
            parts: Bb,
            bytes: Ob
          })
        },
        recorderEvent: (ub, hb, Bb) => {
          bb.recorderEvent({
            what: ub,
            kind: hb,
            save: Bb
          })
        },
        replayOpened: (ub, Bb, Ob) => {
          bb.replayOpened(vO.decode(new Uint8Array(hb.buffer, hb.byteOffset + Bb, Ob)))
        }
      };
      return (bb, ub, Gb, Ub) => !(bb < wb.V.ReplayFailed || bb > wb.V.RecorderEvent) && (hb = ub, Bb = !0, (0, Xb.ce)(bb, ub, Gb, Ub, Ob) && Bb)
    }

    function eO(bb) {
      let ub = null;
      const hb = JO(bb, (() => {
        if (null === ub) throw new Error("a recorder event read outside recorderEventReader's call");
        return ub.buffer
      }));
      return (bb, Bb) => {
        ub = Bb;
        try {
          ! function(bb, ub) {
            const hb = bb.slice(),
              Bb = new DataView(hb.buffer);
            for (let Ob = 0; Ob < hb.byteLength;) {
              if (Ob + wb.U > hb.byteLength) throw new Error(`the recorder module's events end mid-head at ${Ob}`);
              const bb = Bb.getUint32(Ob, !0),
                Gb = 65535 & bb,
                Ub = bb >>> 16,
                Lb = Ob + wb.U;
              if (Lb + Ub > hb.byteLength || !ub(Gb, Bb, Lb, Ub)) throw new Error(`the recorder module wrote a malformed event ${Gb} (${Ub} bytes) at ${Ob}`);
              Ob = Lb + (0, wb.Xd)(Ub)
            }
          }(bb, hb)
        } finally {
          ub = null
        }
      }
    }
    class NO {
      constructor(bb, ub) {
        this.acks = bb, this.handlers = ub, this.parts = new Map
      }
      onPart(bb, ub, hb) {
        let Bb = this.parts.get(bb);
        Bb || (Bb = [], this.parts.set(bb, Bb)), Bb[ub] = hb, this.acks.filePartDone(bb, ub)
      }
      onReady(bb) {
        var ub;
        const hb = null !== (ub = this.parts.get(bb.save)) && void 0 !== ub ? ub : [];
        this.parts.delete(bb.save);
        const Bb = function(bb, ub, hb) {
          if (bb.length !== ub) return null;
          let Bb = 0;
          for (let Ub = 0; Ub < ub; Ub++) {
            if (void 0 === bb[Ub]) return null;
            Bb += bb[Ub].byteLength
          }
          if (Bb !== hb) return null;
          if (1 === ub) return bb[0];
          const Ob = new Uint8Array(hb);
          let Gb = 0;
          for (const Ub of bb) Ob.set(Ub, Gb), Gb += Ub.byteLength;
          return Ob
        }(hb, bb.parts, bb.bytes);
        this.acks.fileDone(bb.save), null === Bb ? this.handlers.fileIncomplete(bb.save, bb.kind) : this.handlers.fileReady(bb.save, bb.kind, Bb)
      }
      onDiscarded(bb) {
        this.parts.delete(bb)
      }
    }

    function sO() {
      return hb.e(58).then((() => hb(42033)))
    }
    class MO {
      constructor(bb) {
        this.deps = bb, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: ub
        } = bb;
        this.recorder = new iO({
          client: ub,
          live: () => {
            var bb;
            return !0 !== (null === (bb = this.viewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          viewerOpen: bb.viewerOpen,
          notify: bb.notify,
          download: ub => {
            var hb;
            null === (hb = bb.download) || void 0 === hb || hb.call(bb, ub)
          },
          onState: bb.onRecorderState,
          onSaveState: bb.onSaveState
        }), this.parts = new NO(ub, {
          fileReady: (bb, ub, hb) => {
            var Bb;
            ub === wb.Oc.Edited ? null === (Bb = this.viewer) || void 0 === Bb || Bb.saveDone(hb) : this.recorder.fileReady(ub, hb)
          },
          fileIncomplete: (bb, ub) => {
            this.saveFailed(ub)
          }
        });
        const hb = {
          replayFailed: bb => {
            var ub;
            null === (ub = this.viewer) || void 0 === ub || ub.onFailed(bb)
          },
          replayOption: ub => {
            var hb;
            null === (hb = bb.onReplayOption) || void 0 === hb || hb.call(bb, ub)
          },
          replayUiEvent: ub => {
            var hb;
            null === (hb = bb.onReplayUiEvent) || void 0 === hb || hb.call(bb, ub)
          },
          filePart: (bb, ub, hb) => {
            this.parts.onPart(bb, ub, hb)
          },
          fileReady: bb => {
            this.parts.onReady(bb)
          },
          replayOpened: ub => {
            var hb;
            null === (hb = bb.onReplayOpened) || void 0 === hb || hb.call(bb, ub)
          },
          recorderEvent: bb => {
            var ub;
            switch (bb.what) {
              case wb.Fc.FileDiscarded:
                this.parts.onDiscarded(bb.save);
                break;
              case wb.Fc.SaveFailed:
                this.saveFailed(bb.kind);
                break;
              case wb.Fc.SaveBusy:
                if (null !== (ub = this.viewer) && void 0 !== ub && ub.savePending) {
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
        this.sink = function(bb, ub) {
          return {
            onReplayEvent: JO(bb, ub)
          }
        }(hb, bb.buffer), this.recorderEvents = eO(hb)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var bb;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (bb = this.deps.loadViewer) && void 0 !== bb ? bb : sO)().catch((bb => {
          throw this.viewerChunk = null, bb
        })), this.viewerChunk.then((bb => (this.viewer ??= new bb.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var bb, ub;
            null === (bb = (ub = this.deps).onViewerChange) || void 0 === bb || bb.call(ub)
          }
        }), this.viewer))))
      }
      activated(bb) {
        this.recorder.activated(bb)
      }
      afterFrame(bb) {
        try {
          bb > 0 && this.recorder.gH()
        } finally {
          var ub;
          null === (ub = this.viewer) || void 0 === ub || ub.afterFrame()
        }
      }
      end() {
        var bb;
        null === (bb = this.viewer) || void 0 === bb || bb.end()
      }
      saveFailed(bb) {
        var ub;
        bb === wb.Oc.Edited ? null === (ub = this.viewer) || void 0 === ub || ub.saveFailed(!1) : this.recorder.failed(bb)
      }
    }
    var mO = hb(40066),
      IO = hb(40087),
      PO = hb(4570),
      qO = hb(40424);
    class EO {
      constructor(bb) {
        this.deps = bb, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(bb, ub) {
        if (!this.deps.live() || 0 === bb && 0 === ub) return;
        const hb = (0, sb.t)(0, performance.now()),
          Bb = this.deps.dragScale();
        (0, qO.g)((() => {
          (0, sb.y)(wb.mb.MouseDown, 0, 0, 0, hb), (0, sb.y)(wb.mb.MouseMove, 0, bb * Bb, ub * Bb, 0), (0, sb.y)(wb.mb.MouseUp, 0, 0, 0, hb)
        }))
      }
      move(bb) {
        var ub, hb;
        this.analogue[0] = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.x) && void 0 !== ub ? ub : 0, this.analogue[1] = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.y) && void 0 !== hb ? hb : 0, this.send()
      }
      holdVertical(bb, ub) {
        const hb = "freeCamUp" === bb ? Xb.Tb.Up : Xb.Tb.Down;
        this.keys = ub ? this.keys | hb : this.keys & ~hb, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const bb = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== bb && !(0, Xb.qe)(bb, 0, this.analogue, this.keys)
      }
    }
    var yO = hb(670),
      VO = hb(275),
      FO = hb(86),
      fO = hb(8996);

    function kO() {
      const bb = Bb.d.get("clientEscMenuOptions"),
        ub = (0, yO.l)(bb);
      return {
        mouse: (0, FO.isMobile)() ? ub : bb.mouseSensitivity,
        touch: ub,
        fovPercent: bb.cameraFOV
      }
    }

    function TO() {
      const bb = Bb.d.get("clientEscMenuOptions"),
        ub = Bb.d.get("isTouchScreen") ? (0, yO.l)(bb) : bb.mouseSensitivity,
        hb = kO().mouse;
      return hb > 0 ? ub / hb : 1
    }

    function cO(bb) {
      const ub = () => {
        bb.setSoundPrefs(Bb.d.get("soundVolume"), Bb.d.get("soundOnFromAd"))
      };
      let hb = null;
      const Ob = () => {
        const {
          showFog: ub,
          enableLighting: Ob,
          fogChunkDistance: Gb,
          chunkFadeIn: Ub
        } = Bb.d.get("clientEscMenuOptions"), Lb = {
          showFog: ub,
          lighting: Ob,
          fogChunks: Gb,
          chunkFade: Ub
        };
        hb && (0, wb.Nd)(hb) === (0, wb.Nd)(Lb) && hb.fogChunks === Gb || (hb = Lb, bb.setEnvPrefs(hb))
      };
      let Gb = null;
      const Lb = () => {
        const ub = function() {
          const bb = Bb.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: Bb.d.get("areNametagsHidden"),
            crouchToggle: bb.crouchIsToggle,
            bhopDisabled: bb.disableBunnyHopping,
            disableBobbing: bb.disableBobbing,
            ezTowering: bb.ezTowering && (0, VO.c)(),
            ezBridging: bb.ezBridging,
            showChunkBorders: bb.showChunkBorders,
            nametagCutDistance: (0, fO.g)()
          }
        }();
        (0, Db.Xd)(Gb, ub) || (Gb = ub, bb.setUiPrefs(ub))
      };
      let Yb = null;
      const Sb = () => {
        const ub = kO();
        (0, Db.Xd)(Yb, ub) || (Yb = ub, bb.setLookPrefs(ub))
      };
      ub(), Ob(), Lb(), Sb();
      const ab = [(0, Ub.l)("appManagerUpdated|soundVolume", ub), (0, Ub.l)("appManagerUpdated|soundOnFromAd", ub), (0, Ub.l)("appManagerUpdated|clientEscMenuOptions", (() => {
        Ob(), Lb(), Sb()
      })), (0, Ub.l)("appManagerUpdated|areNametagsHidden", Lb), (0, Ub.l)("appManagerUpdated|showDistantNametags", Lb)];
      return () => {
        for (const bb of ab) bb()
      }
    }
    var QO = hb(40358),
      RO = hb(40362);
    var bG = (0, RO.b)("lend"),
      uG = (0, RO.b)("starting"),
      hG = (0, RO.b)("generation"),
      BG = (0, RO.b)("end");
    class OG {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, BG, {
          value: GG
        }), Object.defineProperty(this, bG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uG, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, hG, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, QO.e)(this, bG)[bG] || (0, QO.e)(this, uG)[uG]
      }
      async start(bb) {
        if (this.active) return "busy";
        const ub = (0, QO.e)(this, hG)[hG];
        (0, QO.e)(this, uG)[uG] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, QO.e)(this, uG)[uG] = !1
        }
        if (ub !== (0, QO.e)(this, hG)[hG]) return "refused";
        const hb = this.deps.beginSave();
        if (!hb) return "refused";
        const Bb = Number(BigInt.asUintN(32, bb)),
          Ob = Number(BigInt.asUintN(32, bb >> 32n));
        let Gb = "refused";
        return this.deps.recorderCall(((bb, ub) => {
          const Ub = hb.editState,
            Lb = bb.stage(Ub.length);
          0 !== Lb ? (new Uint8Array(ub.buffer, Lb, Ub.length).set(Ub), bb.sOb(hb.headLen, Bb, Ob) && (Gb = "sealing")) : Gb = "tooLarge"
        }), !0), "sealing" !== Gb ? (hb.end(), Gb) : ((0, QO.e)(this, bG)[bG] = hb, "sealing")
      }
      beforeRecorderStep() {
        const bb = (0, QO.e)(this, bG)[bG];
        if (!bb) return null;
        let ub = -1,
          hb = 0;
        if (!this.deps.recorderCall((bb => {
            ub = bb.MOb(), ub > 0 && (hb = bb.mOb())
          }))) return (0, QO.e)(this, BG)[BG](bb, "stopped");
        if (ub < 0) return (0, QO.e)(this, BG)[BG](bb, "read");
        if (0 === ub) return null;
        const Bb = bb.head(hb, ub);
        let Ob = !1;
        if (Bb && this.deps.recorderCall(((bb, hb) => {
            const Gb = bb.stage(ub);
            0 !== Gb && (new Uint8Array(hb.buffer, Gb, ub).set(Bb), Ob = !0)
          }), !0), Ob) return null;
        const Gb = bb.givenUp();
        this.deps.recorderCall((bb => {
          bb.IOb()
        }));
        const Ub = (0, QO.e)(this, BG)[BG](bb, Gb ? "givenUp" : "stopped");
        return Gb && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Ub
      }
      stop() {
        (0, QO.e)(this, hG)[hG]++;
        const bb = (0, QO.e)(this, bG)[bG];
        bb && (this.deps.recorderCall((bb => {
          bb.IOb()
        })), (0, QO.e)(this, BG)[BG](bb, "stopped"))
      }
    }

    function GG(bb, ub) {
      return (0, QO.e)(this, bG)[bG] = null, bb.end(), ub
    }

    function UG(bb, ub) {
      const hb = new Uint8Array(4),
        Bb = new DataView(hb.buffer);
      return Bb.setUint8(0, bb ? 1 : 0), Bb.setUint16(2, Math.max(0, Math.min(65535, Math.round(ub))), !0), hb
    }

    function LG(bb, ub) {
      return bb > function(bb) {
        return 16777216 + 314572.8 * Math.max(0, bb)
      }(ub) + 33554432
    }
    let YG = null;

    function SG(bb) {
      return YG ??= async function(bb) {
        const ub = bb.loadInFlight();
        ub && await ub.catch((() => {}));
        if (bb.trapped()) return "trapped";
        if (bb.busy() || !LG(bb.memoryBytes(), bb.clipSeconds())) return "HZ";
        bb.unload();
        let hb = !1;
        try {
          hb = await bb.load()
        } catch {
          hb = !1
        }
        if (!hb) return bb.trapped() ? "trapped" : bb.FZ() ? "FZ" : "failed";
        return "recycled"
      }(bb).finally((() => {
        YG = null
      })), YG
    }
    const aG = "Replay recording couldn't load, so try again.",
      HG = new Set([wb.Hc.ToggleRecording, wb.Hc.SaveClip]);
    var wG = (0, RO.b)("bindings"),
      ZG = (0, RO.b)("module"),
      XG = (0, RO.b)("memory"),
      pG = (0, RO.b)("trapped"),
      oG = (0, RO.b)("FZ"),
      AG = (0, RO.b)("recycleDue"),
      lG = (0, RO.b)("loading"),
      KG = (0, RO.b)("generation"),
      WG = (0, RO.b)("viewDrawn"),
      CG = (0, RO.b)("clip"),
      dG = (0, RO.b)("session"),
      rG = (0, RO.b)("control"),
      jG = (0, RO.b)("deferred"),
      nG = (0, RO.b)("coreU8"),
      DG = (0, RO.b)("coreU32"),
      xG = (0, RO.b)("moduleU8"),
      zG = (0, RO.b)("edited"),
      gG = (0, RO.b)("sendSession"),
      iG = (0, RO.b)("checkNotInEvents"),
      vG = (0, RO.b)("clipping"),
      tG = (0, RO.b)("busy"),
      JG = (0, RO.b)("use"),
      eG = (0, RO.b)("ensureLoaded"),
      NG = (0, RO.b)("loadOnce"),
      sG = (0, RO.b)("recycleAfterStep"),
      MG = (0, RO.b)("settleRecycle"),
      mG = (0, RO.b)("load"),
      IG = (0, RO.b)("attach"),
      PG = (0, RO.b)("resendHeld"),
      qG = (0, RO.b)("recycle"),
      EG = (0, RO.b)("send"),
      yG = (0, RO.b)("unload"),
      VG = (0, RO.b)("dropModule"),
      FG = (0, RO.b)("coreBytes"),
      fG = (0, RO.b)("coreWords"),
      kG = (0, RO.b)("moduleBytes"),
      TG = (0, RO.b)("loadFailed"),
      cG = (0, RO.b)("call"),
      QG = (0, RO.b)("guard"),
      RG = (0, RO.b)("trapOn");
    class bU {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, RG, {
          value: rU
        }), Object.defineProperty(this, QG, {
          value: dU
        }), Object.defineProperty(this, cG, {
          value: CU
        }), Object.defineProperty(this, TG, {
          value: WU
        }), Object.defineProperty(this, kG, {
          value: KU
        }), Object.defineProperty(this, fG, {
          value: lU
        }), Object.defineProperty(this, FG, {
          value: AU
        }), Object.defineProperty(this, VG, {
          value: oU
        }), Object.defineProperty(this, yG, {
          value: pU
        }), Object.defineProperty(this, EG, {
          value: XU
        }), Object.defineProperty(this, qG, {
          value: ZU
        }), Object.defineProperty(this, PG, {
          value: wU
        }), Object.defineProperty(this, IG, {
          value: HU
        }), Object.defineProperty(this, mG, {
          value: aU
        }), Object.defineProperty(this, MG, {
          value: SU
        }), Object.defineProperty(this, sG, {
          value: YU
        }), Object.defineProperty(this, NG, {
          value: LU
        }), Object.defineProperty(this, eG, {
          value: UU
        }), Object.defineProperty(this, JG, {
          value: GU
        }), Object.defineProperty(this, tG, {
          value: OU
        }), Object.defineProperty(this, vG, {
          value: BU
        }), Object.defineProperty(this, iG, {
          value: hU
        }), Object.defineProperty(this, gG, {
          value: uU
        }), Object.defineProperty(this, wG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pG, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, oG, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, AG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KG, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, WG, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, CG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, DG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xG, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zG, {
          writable: !0,
          value: void 0
        }), (0, QO.e)(this, zG)[zG] = new OG({
          ensureLoaded: () => (0, QO.e)(this, eG)[eG](),
          recorderCall: (bb, ub) => {
            ub && (0, QO.e)(this, iG)[iG]("an edited save's stage");
            const hb = (0, QO.e)(this, cG)[cG](((ub, hb) => (bb(ub, hb), !0)));
            return null !== hb && void 0 !== hb && hb
          },
          beginSave: bb.beginSave,
          givenUp: bb.givenUp
        })
      }
      get active() {
        return null !== (0, QO.e)(this, ZG)[ZG]
      }
      get trapped() {
        return (0, QO.e)(this, pG)[pG]
      }
      get loading() {
        return null !== (0, QO.e)(this, lG)[lG]
      }
      prefetch() {
        (0, QO.e)(this, oG)[oG] || (0, QO.e)(this, pG)[pG] || (0, QO.e)(this, ZG)[ZG] || (0, QO.e)(this, lG)[lG] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, QO.e)(this, WG)[WG] = !0, (0, QO.e)(this, vG)[vG]() && (0, QO.e)(this, JG)[JG]()
      }
      prefs(bb, ub) {
        (0, QO.e)(this, CG)[CG] = {
          on: bb,
          seconds: ub
        }, (0, QO.e)(this, EG)[EG](wb.Cc.Prefs, UG(bb, ub)), bb && (0, QO.e)(this, WG)[WG] && (0, QO.e)(this, JG)[JG]()
      }
      control(bb) {
        const ub = function(bb) {
          return new Uint8Array([bb, 0, 0, 0])
        }(bb);
        if (HG.has(bb)) return (0, QO.e)(this, ZG)[ZG] ? void(0, QO.e)(this, EG)[EG](wb.Cc.Control, ub) : ((0, QO.e)(this, rG)[rG] = ub, void(0, QO.e)(this, JG)[JG]());
        (0, QO.e)(this, oG)[oG] || this.deps.coreCommand(wb.Cc.Control, ub)
      }
      session(bb) {
        (0, QO.e)(this, dG)[dG] = bb, (0, QO.e)(this, gG)[gG](bb)
      }
      filePartDone(bb, ub) {
        (0, QO.e)(this, EG)[EG](wb.Cc.FilePartDone, function(bb, ub) {
          const hb = new Uint8Array(8),
            Bb = new DataView(hb.buffer);
          return Bb.setUint32(0, bb, !0), Bb.setUint32(4, ub, !0), hb
        }(bb, ub))
      }
      fileDone(bb) {
        return (0, QO.e)(this, EG)[EG](wb.Cc.FileDone, function(bb) {
          const ub = new Uint8Array(4);
          return new DataView(ub.buffer).setUint32(0, bb, !0), ub
        }(bb)), (0, QO.e)(this, sG)[sG]()
      }
      saveEdited(bb) {
        return (0, QO.e)(this, iG)[iG]("saveEdited"), (0, QO.e)(this, zG)[zG].start(bb)
      }
      afterFrame() {
        if (!(0, QO.e)(this, ZG)[ZG]) return;
        "read" === (0, QO.e)(this, zG)[zG].beforeRecorderStep() && (0, QO.e)(this, sG)[sG]();
        const bb = (0, QO.e)(this, AG)[AG];
        (0, QO.e)(this, AG)[AG] = null;
        const ub = (0, QO.e)(this, ZG)[ZG],
          hb = (0, QO.e)(this, XG)[XG];
        if (!ub || !hb) return void(null === bb || void 0 === bb || bb.resolve((0, QO.e)(this, pG)[pG] ? "trapped" : "HZ"));
        const {
          core: Bb
        } = this.deps, Ob = Bb.EOb(2);
        let Gb, Ub, Lb, Yb, Sb = 0,
          ab = 0;
        if (0 !== Ob) {
          var Hb, wb;
          const bb = (0, QO.e)(this, fG)[fG]();
          Sb = null !== (Hb = bb[Ob >>> 2]) && void 0 !== Hb ? Hb : 0, ab = null !== (wb = bb[1 + (Ob >>> 2)]) && void 0 !== wb ? wb : 0
        }
        try {
          if (ab > 0) {
            const bb = ub.feed(ab);
            0 !== bb && (0, QO.e)(this, kG)[kG](hb).set((0, QO.e)(this, FG)[FG]().subarray(Sb, Sb + ab), bb)
          }
          Gb = ub.step(), Ub = ub.yOb(), Lb = ub.VOb(), Yb = ub.FOb()
        } catch (Zb) {
          if (!(0, QO.e)(this, RG)[RG](Zb)) throw null === bb || void 0 === bb || bb.resolve("HZ"), Zb;
          return void(null === bb || void 0 === bb || bb.resolve("trapped"))
        }
        if (Gb > 0) {
          const bb = Bb.fOb(2, Gb);
          0 !== bb && (0, QO.e)(this, FG)[FG]().set((0, QO.e)(this, kG)[kG](hb).subarray(Ub, Ub + Gb), bb)
        }
        if (Lb > 0) {
          (0, QO.e)(this, jG)[jG] = [];
          try {
            this.deps.events(new Uint8Array(hb.buffer, Yb, Lb), hb)
          } catch (Zb) {
            throw null === bb || void 0 === bb || bb.resolve("HZ"), Zb
          } finally {
            const bb = (0, QO.e)(this, jG)[jG];
            (0, QO.e)(this, jG)[jG] = null;
            for (const [ub, hb] of bb)(0, QO.e)(this, EG)[EG](ub, hb)
          }
        }
        if (!(0, QO.e)(this, vG)[vG]() && !(0, QO.e)(this, tG)[tG]()) return (0, QO.e)(this, yG)[yG](), void(null === bb || void 0 === bb || bb.resolve("HZ"));
        null === bb || void 0 === bb || bb.resolve((0, QO.e)(this, qG)[qG]())
      }
      dispose() {
        (0, QO.e)(this, oG)[oG] = !0, (0, QO.e)(this, yG)[yG]()
      }
    }

    function uU(bb) {
      (0, QO.e)(this, EG)[EG](wb.Cc.Session, function(bb) {
        const ub = new TextEncoder,
          hb = ub.encode(bb.game).subarray(0, 65535),
          Bb = ub.encode(bb.lobby).subarray(0, 65535),
          Ob = new Uint8Array(22 + hb.length + 2 + Bb.length),
          Gb = new DataView(Ob.buffer);
        Gb.setFloat64(0, bb.unixMs, !0), Gb.setBigUint64(8, BigInt.asUintN(64, bb.session), !0), Gb.setUint8(16, bb.lobbyType);
        let Ub = 20;
        for (const Lb of [hb, Bb]) Gb.setUint16(Ub, Lb.length, !0), Ob.set(Lb, Ub + 2), Ub += 2 + Lb.length;
        return Ob
      }({
        ...bb,
        unixMs: this.deps.unixNow()
      }))
    }

    function hU(bb) {
      false
    }

    function BU() {
      var bb, ub;
      return null !== (bb = null === (ub = (0, QO.e)(this, CG)[CG]) || void 0 === ub ? void 0 : ub.on) && void 0 !== bb && bb
    }

    function OU() {
      const bb = (0, QO.e)(this, ZG)[ZG];
      let ub = !0;
      if (bb) try {
        ub = bb.busy()
      } catch (hb) {
        if (!(0, QO.e)(this, RG)[RG](hb)) throw hb
      }
      return ub || (0, QO.e)(this, zG)[zG].active
    }
    async function GU() {
      !(0, QO.e)(this, oG)[oG] && this.deps.allowed() ? await (0, QO.e)(this, eG)[eG]() : (0, QO.e)(this, rG)[rG] = null
    }

    function UU() {
      return (0, QO.e)(this, pG)[pG] || (0, QO.e)(this, oG)[oG] ? Promise.resolve(!1) : (0, QO.e)(this, ZG)[ZG] ? Promise.resolve(!0) : ((0, QO.e)(this, lG)[lG] ??= (0, QO.e)(this, NG)[NG](), (0, QO.e)(this, lG)[lG])
    }
    async function LU() {
      let bb = !1;
      try {
        return bb = await (0, QO.e)(this, mG)[mG](), bb
      } finally {
        bb || ((0, QO.e)(this, rG)[rG] = null), (0, QO.e)(this, lG)[lG] = null
      }
    }

    function YU() {
      if (!(0, QO.e)(this, ZG)[ZG]) return Promise.resolve((0, QO.e)(this, pG)[pG] ? "trapped" : "HZ");
      if (!(0, QO.e)(this, AG)[AG]) {
        let bb = () => {};
        const ub = new Promise((ub => {
          bb = ub
        }));
        (0, QO.e)(this, AG)[AG] = {
          promise: ub,
          resolve: bb
        }
      }
      return (0, QO.e)(this, AG)[AG].promise
    }

    function SU(bb) {
      const ub = (0, QO.e)(this, AG)[AG];
      (0, QO.e)(this, AG)[AG] = null, null === ub || void 0 === ub || ub.resolve(bb)
    }
    async function aU() {
      let bb = (0, QO.e)(this, wG)[wG];
      if (!bb) {
        const ub = (0, QO.e)(this, KG)[KG];
        try {
          bb = await this.deps.load()
        } catch (hb) {
          return ub === (0, QO.e)(this, KG)[KG] && await (0, QO.e)(this, TG)[TG](hb), !1
        }
        if (ub !== (0, QO.e)(this, KG)[KG]) return this.deps.unload(), !1;
        const Bb = bb,
          Ob = (0, QO.e)(this, QG)[QG]((() => Bb.kOb()));
        if (void 0 === Ob) return !1;
        const Gb = this.deps.core.TOb();
        if (Ob !== Gb) return await (0, QO.e)(this, TG)[TG](new Error(`recorder port version ${Ob}, the core's ${Gb}`)), !1;
        (0, QO.e)(this, wG)[wG] = bb
      }
      const ub = bb;
      try {
        if (!(0, QO.e)(this, QG)[QG]((() => ((0, QO.e)(this, ZG)[ZG] = new ub.cOb, (0, QO.e)(this, XG)[XG] = ub.POb(), !0)))) return !1;
        (0, QO.e)(this, PG)[PG]();
        const bb = (0, QO.e)(this, rG)[rG];
        return (0, QO.e)(this, rG)[rG] = null, bb && (0, QO.e)(this, EG)[EG](wb.Cc.Control, bb), (0, QO.e)(this, IG)[IG]()
      } catch (hb) {
        return (0, QO.e)(this, yG)[yG](), await (0, QO.e)(this, TG)[TG](hb), !1
      }
    }

    function HU() {
      return this.deps.core.QOb(0), 1 === this.deps.core.QOb(1) || ((0, QO.e)(this, yG)[yG](), this.deps.failed(aG), !1)
    }

    function wU() {
      (0, QO.e)(this, CG)[CG] && (0, QO.e)(this, EG)[EG](wb.Cc.Prefs, UG((0, QO.e)(this, CG)[CG].on, (0, QO.e)(this, CG)[CG].seconds)), (0, QO.e)(this, dG)[dG] && (0, QO.e)(this, gG)[gG]((0, QO.e)(this, dG)[dG])
    }

    function ZU() {
      return SG({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var bb, ub;
          return null !== (bb = null === (ub = (0, QO.e)(this, CG)[CG]) || void 0 === ub ? void 0 : ub.seconds) && void 0 !== bb ? bb : 0
        },
        trapped: () => (0, QO.e)(this, pG)[pG],
        busy: () => (0, QO.e)(this, tG)[tG](),
        loadInFlight: () => (0, QO.e)(this, lG)[lG],
        FZ: () => (0, QO.e)(this, oG)[oG],
        unload: () => {
          (0, QO.e)(this, yG)[yG]()
        },
        load: () => (0, QO.e)(this, eG)[eG]()
      })
    }

    function XU(bb, ub) {
      (0, QO.e)(this, jG)[jG] ? (0, QO.e)(this, jG)[jG].push([bb, ub]): (0, QO.e)(this, cG)[cG](((hb, Bb) => {
        const Ob = hb.qOb(ub.length);
        0 !== Ob && (new Uint8Array(Bb.buffer, Ob, ub.length).set(ub), hb.command(bb, ub.length))
      }))
    }

    function pU() {
      (0, QO.e)(this, KG)[KG]++, (0, QO.e)(this, MG)[MG]("HZ"), (0, QO.e)(this, zG)[zG].stop(), this.deps.core.QOb(0), (0, QO.e)(this, VG)[VG](), (0, QO.e)(this, pG)[pG] || ((0, QO.e)(this, wG)[wG] = null, this.deps.unload())
    }

    function oU() {
      (0, QO.e)(this, cG)[cG]((bb => {
        bb.free()
      })), (0, QO.e)(this, ZG)[ZG] = null, (0, QO.e)(this, XG)[XG] = null, (0, QO.e)(this, xG)[xG] = null
    }

    function AU() {
      var bb;
      const ub = this.deps.coreBuffer();
      return (null === (bb = (0, QO.e)(this, nG)[nG]) || void 0 === bb ? void 0 : bb.buffer) !== ub && ((0, QO.e)(this, nG)[nG] = new Uint8Array(ub)), (0, QO.e)(this, nG)[nG]
    }

    function lU() {
      var bb;
      const ub = this.deps.coreBuffer();
      return (null === (bb = (0, QO.e)(this, DG)[DG]) || void 0 === bb ? void 0 : bb.buffer) !== ub && ((0, QO.e)(this, DG)[DG] = new Uint32Array(ub, 0, ub.byteLength >>> 2)), (0, QO.e)(this, DG)[DG]
    }

    function KU(bb) {
      var ub;
      const hb = bb.buffer;
      return (null === (ub = (0, QO.e)(this, xG)[xG]) || void 0 === ub ? void 0 : ub.buffer) !== hb && ((0, QO.e)(this, xG)[xG] = new Uint8Array(hb)), (0, QO.e)(this, xG)[xG]
    }
    async function WU(bb) {
      await this.deps.staleOr(bb, (() => {
        this.deps.failed(aG)
      }))
    }

    function CU(bb) {
      const ub = (0, QO.e)(this, ZG)[ZG],
        hb = (0, QO.e)(this, XG)[XG];
      if (ub && hb) return (0, QO.e)(this, QG)[QG]((() => bb(ub, hb)))
    }

    function dU(bb) {
      if (!(0, QO.e)(this, pG)[pG]) try {
        return bb()
      } catch (ub) {
        if (!(0, QO.e)(this, RG)[RG](ub)) throw ub;
        return
      }
    }

    function rU(bb) {
      return bb instanceof WebAssembly.RuntimeError && ((0, QO.e)(this, pG)[pG] = !0, (0, QO.e)(this, ZG)[ZG] = null, (0, QO.e)(this, XG)[XG] = null, (0, QO.e)(this, xG)[xG] = null, (0, QO.e)(this, wG)[wG] = null, (0, QO.e)(this, rG)[rG] = null, (0, QO.e)(this, MG)[MG]("trapped"), this.deps.core.QOb(0), (0, QO.e)(this, zG)[zG].stop(), this.deps.crash(this.deps.markTrapped(bb)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var jU = hb(38264);
    const nU = new Map([
      ["skyblock", () => hb.e(50).then((() => hb(38255)))]
    ]);

    function DU(bb) {
      const ub = nU.get(bb);
      return ub ? ub().then((() => {
        const ub = (0, jU.b)(bb);
        if (!ub) throw new Error(`${bb}'s replay hook module registered no hook`);
        return ub
      })) : null
    }
    class xU {
      constructor(bb) {
        this.deps = bb, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(bb) {
        if (this.pending.clear(), bb === this.game && null !== this.hook) return void(this.all = !0);
        const ub = ++this.generation;
        this.game = bb, this.hook = null, this.all = !1;
        const hb = this.deps.loadHook(bb);
        null === hb || void 0 === hb || hb.then((bb => {
          ub === this.generation && (this.hook = bb, this.all = !0)
        }), (bb => {
          ub === this.generation && this.deps.onError(bb)
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
          hook: ub
        } = this;
        if (null === ub || !bb || !this.all && 0 === this.pending.size) return;
        const hb = this.deps.cmd();
        if (null === hb) return;
        const {
          api: Bb
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: bb,
            count: ub
          } = Mh(Bb, this.ids);
          this.ids = bb;
          for (let hb = 0; hb < ub; hb++) this.pending.set(bb[hb], !0)
        }
        const Ob = this.ids = mh(this.ids, this.pending.size);
        let Gb = 0;
        for (const Sb of this.pending.keys()) Ob[Gb++] = Sb;
        const Ub = [],
          Lb = Ih(Bb, Ob, Gb, ((bb, ub) => {
            null !== ub && Ub.push({
              serverId: bb,
              info: ub,
              spawned: !0 === this.pending.get(bb)
            })
          }));
        if (Lb) {
          this.pending.clear();
          for (const {
              serverId: bb,
              info: Bb,
              spawned: Ob
            }
            of Ub) try {
            ub(Bb, {
              setFacingTolerance: ub => {
                null === ub && Ob || Lh(hb, bb, ub) || this.pending.set(bb, Ob)
              }
            })
          } catch (Yb) {
            this.deps.onError(Yb)
          }
        }
      }
    }
    var zU = (0, RO.b)("bindings"),
      gU = (0, RO.b)("module"),
      iU = (0, RO.b)("memory"),
      vU = (0, RO.b)("trapped"),
      tU = (0, RO.b)("generation"),
      JU = (0, RO.b)("loading"),
      eU = (0, RO.b)("lend"),
      NU = (0, RO.b)("givenUp"),
      sU = (0, RO.b)("afterSave"),
      MU = (0, RO.b)("opens"),
      mU = (0, RO.b)("saveAskedAt"),
      IU = (0, RO.b)("unload"),
      PU = (0, RO.b)("dropModule"),
      qU = (0, RO.b)("loadFailed"),
      EU = (0, RO.b)("saveReadsBody"),
      yU = (0, RO.b)("command"),
      VU = (0, RO.b)("call"),
      FU = (0, RO.b)("guard"),
      fU = (0, RO.b)("trapOn");
    class kU {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, fU, {
          value: BL
        }), Object.defineProperty(this, FU, {
          value: hL
        }), Object.defineProperty(this, VU, {
          value: uL
        }), Object.defineProperty(this, yU, {
          value: bL
        }), Object.defineProperty(this, EU, {
          get: RU,
          set: void 0
        }), Object.defineProperty(this, qU, {
          value: QU
        }), Object.defineProperty(this, PU, {
          value: cU
        }), Object.defineProperty(this, IU, {
          value: TU
        }), Object.defineProperty(this, zU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vU, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, tU, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, JU, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, eU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MU, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, mU, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, QO.e)(this, gU)[gU] && null === (0, QO.e)(this, sU)[sU]
      }
      async open(bb) {
        if ((0, QO.e)(this, vU)[vU]) return wb.Mc.ModuleTrap;
        let ub = (0, QO.e)(this, zU)[zU];
        if (!ub) {
          const bb = (0, QO.e)(this, tU)[tU];
          (0, QO.e)(this, JU)[JU]++;
          try {
            ub = await this.deps.load()
          } catch (Bb) {
            return (0, QO.e)(this, JU)[JU]--, bb !== (0, QO.e)(this, tU)[tU] ? "stopped" : (0, QO.e)(this, qU)[qU](Bb)
          }
          if ((0, QO.e)(this, JU)[JU]--, bb !== (0, QO.e)(this, tU)[tU]) return (0, QO.e)(this, zU)[zU] || 0 !== (0, QO.e)(this, JU)[JU] || (0, QO.e)(this, vU)[vU] || this.deps.unload(), "stopped";
          if ((0, QO.e)(this, vU)[vU]) return wb.Mc.ModuleTrap;
          const hb = ub.kOb(),
            Ob = this.deps.core.TOb();
          if (hb !== Ob) return (0, QO.e)(this, qU)[qU](new Error(`replay port version ${hb}, the core's ${Ob}`));
          (0, QO.e)(this, zU)[zU] = ub
        }
        if (!(0, QO.e)(this, gU)[gU]) {
          const bb = ub;
          if (!(0, QO.e)(this, FU)[FU]((() => {
              (0, QO.e)(this, gU)[gU] = new bb.ROb, (0, QO.e)(this, iU)[iU] = bb.bGb()
            }))) return wb.Mc.ModuleTrap
        }
        let hb = !1;
        return (0, QO.e)(this, VU)[VU](((ub, Bb) => {
          null !== (0, QO.e)(this, sU)[sU] && ub.step(0, 0);
          const Ob = ub.stage(bb.length);
          0 !== Ob && (new Uint8Array(Bb.buffer, Ob, bb.length).set(bb), ub.open(), (0, QO.e)(this, NU)[NU] = (0, QO.e)(this, eU)[eU], (0, QO.e)(this, sU)[sU] = null, (0, QO.e)(this, MU)[MU]++, hb = !0)
        })) ? hb ? "opening" : wb.Mc.TooLarge : wb.Mc.ModuleTrap
      }
      beforeFrame(bb) {
        const ub = (0, QO.e)(this, gU)[gU],
          hb = (0, QO.e)(this, iU)[iU];
        if (!ub || !hb || null !== (0, QO.e)(this, sU)[sU]) return;
        const {
          core: Bb
        } = this.deps, Ob = Bb.uGb(bb);
        if (Ob < 0) return;
        const Gb = Math.floor(Ob);
        let Ub, Lb;
        try {
          Ub = ub.step(Gb, Ob - Gb), Lb = ub.yOb()
        } catch (Sb) {
          return void(0, QO.e)(this, fU)[fU](Sb)
        }
        const Yb = Bb.fOb(1, Ub);
        if (0 === Yb) {
          const bb = (0, QO.e)(this, VU)[VU]((bb => {
            bb.close()
          }));
          if (!bb) return;
          return (0, QO.e)(this, EU)[EU] ? (0, QO.e)(this, sU)[sU] = "drop" : (0, QO.e)(this, PU)[PU](), void Bb.hGb(wb.Mc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Yb, Ub).set(new Uint8Array(hb.buffer, Lb, Ub))
      }
      play() {
        (0, QO.e)(this, yU)[yU]((bb => {
          bb.play()
        }))
      }
      pause() {
        (0, QO.e)(this, yU)[yU]((bb => {
          bb.pause()
        }))
      }
      seek(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, QO.e)(this, yU)[yU]((hb => {
          hb.seek(bb, ub)
        }))
      }
      setMark(bb, ub) {
        return (0, QO.e)(this, yU)[yU]((hb => {
          hb.BGb(bb, ub)
        }))
      }
      addKeyframe(bb, ub) {
        return (0, QO.e)(this, yU)[yU]((hb => {
          hb.OGb(bb[0], bb[1], bb[2], ub[0], ub[1], ub[2])
        }))
      }
      setKeyframe(bb, ub) {
        return (0, QO.e)(this, yU)[yU]((hb => {
          hb.GGb(bb, ub)
        }))
      }
      moveKeyframe(bb, ub) {
        return (0, QO.e)(this, yU)[yU]((hb => {
          hb.UGb(bb, ub)
        }))
      }
      deleteKeyframes(bb, ub) {
        return (0, QO.e)(this, yU)[yU]((hb => {
          hb.LGb(bb, ub)
        }))
      }
      crop(bb, ub) {
        return null === (0, QO.e)(this, eU)[eU] && (0, QO.e)(this, yU)[yU]((hb => {
          hb.crop(bb, ub)
        }))
      }
      beginSave() {
        const bb = (0, QO.e)(this, mU)[mU];
        if ((0, QO.e)(this, mU)[mU] = null, null !== bb && bb !== (0, QO.e)(this, MU)[MU]) return null;
        let ub = 0,
          hb = null;
        if ((0, QO.e)(this, VU)[VU](((bb, Bb) => {
            ub = bb.save(), 0 !== ub && (hb = new Uint8Array(Bb.buffer, bb.YGb(), bb.SGb()).slice())
          })), 0 === ub || !hb) return null;
        const Bb = {
          headLen: ub,
          editState: hb,
          givenUp: () => (0, QO.e)(this, NU)[NU] === Bb,
          head: (bb, ub) => {
            if ((0, QO.e)(this, eU)[eU] !== Bb || !(0, QO.e)(this, EU)[EU]) return null;
            let hb = null;
            return (0, QO.e)(this, VU)[VU](((Bb, Ob) => {
              const Gb = Bb.aGb();
              0 !== Gb && bb >= 0 && ub >= 0 && bb + ub <= Gb && (hb = new Uint8Array(Ob.buffer, Bb.HGb() + bb, ub))
            })), hb
          },
          end: () => {
            if ((0, QO.e)(this, eU)[eU] !== Bb) return;
            (0, QO.e)(this, eU)[eU] = null, (0, QO.e)(this, NU)[NU] = null, (0, QO.e)(this, VU)[VU]((bb => {
              bb.wGb()
            }));
            const bb = (0, QO.e)(this, sU)[sU];
            (0, QO.e)(this, sU)[sU] = null, "unload" === bb ? (0, QO.e)(this, IU)[IU]() : "drop" === bb && (0, QO.e)(this, PU)[PU]()
          }
        };
        return (0, QO.e)(this, eU)[eU] = Bb, Bb
      }
      askSave() {
        (0, QO.e)(this, mU)[mU] = (0, QO.e)(this, MU)[MU]
      }
      setSpeed(bb) {
        (0, QO.e)(this, yU)[yU]((ub => {
          ub.ZGb(bb)
        }))
      }
      setCameraMode(bb) {
        (0, QO.e)(this, yU)[yU]((ub => {
          ub.XGb(bb)
        }))
      }
      close() {
        (0, QO.e)(this, yU)[yU]((bb => {
          bb.close()
        }))
      }
      stop() {
        (0, QO.e)(this, tU)[tU]++, (0, QO.e)(this, EU)[EU] && ((0, QO.e)(this, VU)[VU]((bb => {
          bb.close()
        })), (0, QO.e)(this, gU)[gU]) ? (0, QO.e)(this, sU)[sU] = "unload" : (0, QO.e)(this, IU)[IU]()
      }
    }

    function TU() {
      (0, QO.e)(this, PU)[PU](), (0, QO.e)(this, vU)[vU] || ((0, QO.e)(this, zU)[zU] = null, this.deps.unload())
    }

    function cU() {
      (0, QO.e)(this, VU)[VU]((bb => {
        bb.free()
      })), (0, QO.e)(this, gU)[gU] = null, (0, QO.e)(this, iU)[iU] = null
    }
    async function QU(bb) {
      return await this.deps.staleOr(bb, (() => {})) ? "reloading" : wb.Mc.ModuleLoad
    }

    function RU() {
      return null !== (0, QO.e)(this, eU)[eU] && (0, QO.e)(this, NU)[NU] !== (0, QO.e)(this, eU)[eU]
    }

    function bL(bb) {
      return null === (0, QO.e)(this, sU)[sU] && (0, QO.e)(this, VU)[VU](bb)
    }

    function uL(bb) {
      const ub = (0, QO.e)(this, gU)[gU],
        hb = (0, QO.e)(this, iU)[iU];
      return !(!ub || !hb) && (0, QO.e)(this, FU)[FU]((() => {
        bb(ub, hb)
      }))
    }

    function hL(bb) {
      if ((0, QO.e)(this, vU)[vU]) return !1;
      try {
        return bb(), !0
      } catch (ub) {
        return (0, QO.e)(this, fU)[fU](ub), !1
      }
    }

    function BL(bb) {
      if (!(bb instanceof WebAssembly.RuntimeError)) throw bb;
      (0, QO.e)(this, vU)[vU] = !0, (0, QO.e)(this, gU)[gU] = null, (0, QO.e)(this, iU)[iU] = null, (0, QO.e)(this, zU)[zU] = null, this.deps.crash(this.deps.markTrapped(bb)), this.deps.core.hGb(wb.Mc.ModuleTrap)
    }
    var OL = hb(6216),
      GL = hb(40159);
    const UL = "[bloxd-wasm-client]";
    const LL = String(gO);

    function YL(bb) {
      return null === bb || bb === LL ? void 0 : bb
    }

    function SL(bb) {
      var ub, hb, Bb, Ob, Gb, Lb, Yb;
      switch (bb.what) {
        case wb.Tc.FlyingText: {
          let ub;
          try {
            ub = JSON.parse(bb.contentJson)
          } catch (Sb) {
            return void console.warn(`${UL} a replay's flying text isn't JSON`, Sb)
          }
          Ub.i.vp("forceFlyingMiddleMessage", {
            content: ub,
            eh: bb.eh,
            angle: bb.angle,
            Nh: bb.Nh
          });
          break
        }
        case wb.Tc.PlayerKilled:
          (0, GL.f)({
            kind: "killed",
            body: {
              deadEId: null !== (ub = YL(bb.dead)) && void 0 !== ub ? ub : "",
              killerEId: YL(bb.killer),
              withItem: null !== (hb = bb.withItem) && void 0 !== hb ? hb : "",
              killstreak: bb.killstreak
            }
          });
          break;
        case wb.Tc.Killfeed:
          (0, GL.f)({
            kind: "custom",
            body: {
              killer: {
                eId: YL(bb.killerId),
                name: null !== (Bb = bb.killerName) && void 0 !== Bb ? Bb : void 0,
                colour: null !== (Ob = bb.killerColour) && void 0 !== Ob ? Ob : void 0
              },
              victim: {
                eId: YL(bb.victimId),
                name: null !== (Gb = bb.victimName) && void 0 !== Gb ? Gb : void 0,
                colour: null !== (Lb = bb.victimColour) && void 0 !== Lb ? Lb : void 0
              },
              withItem: null !== (Yb = bb.withItem) && void 0 !== Yb ? Yb : ""
            }
          })
      }
    }
    const aL = "[bloxd-wasm-client]";

    function HL(bb) {
      if (void 0 === bb || null === bb || "" === bb) return null;
      const ub = Number(bb);
      return Number.isInteger(ub) && ub > gO && ub <= 2147483647 ? ub : null
    }

    function wL(bb) {
      return {
        id: HL(bb.eId),
        name: "string" === typeof bb.name ? bb.name : null,
        colour: "string" === typeof bb.colour ? bb.colour : null
      }
    }

    function ZL(bb) {
      const ub = (0, IO.n)(Fh.fc.PlayerKilled, (ub => {
          var hb, Bb;
          const Ob = (0, mO.i)(ub);
          if (!(0, mO.d)(Ob)) return;
          const {
            deadEId: Gb,
            killerEId: Ub,
            withItem: Lb,
            killstreak: Yb
          } = Ob;
          bb.recordPlayerKilled(null !== (hb = HL(Gb)) && void 0 !== hb ? hb : gO, null !== (Bb = HL(Ub)) && void 0 !== Bb ? Bb : gO, "number" === typeof Yb ? Yb : 0, "string" === typeof Lb ? Lb : "")
        })),
        hb = (0, IO.n)(Fh.fc.CustomKillfeed, (ub => {
          const hb = (0, mO.i)(ub);
          if (!(0, mO.d)(hb) || !(0, mO.d)(hb.killer) || !(0, mO.d)(hb.victim)) return;
          const {
            killer: Bb,
            victim: Ob,
            withItem: Gb
          } = hb;
          bb.recordKillfeed(wL(Bb), wL(Ob), "string" === typeof Gb ? Gb : null)
        }));
      return () => {
        ub(), hb()
      }
    }

    function XL(bb) {
      var ub;
      return void 0 === bb || null === bb ? null : null !== (ub = JSON.stringify(bb)) && void 0 !== ub ? ub : null
    }

    function pL(bb) {
      let ub = null;
      const hb = () => {
        const {
          enableClipping: hb,
          clipDurationSeconds: Ob
        } = Bb.d.get("clientEscMenuOptions"), Gb = `${hb}:${Ob}`;
        Gb !== ub && (ub = Gb, bb.recorder.setPrefs(hb, Ob))
      };
      return hb(), (0, Ub.l)("appManagerUpdated|clientEscMenuOptions", hb)
    }
    const oL = "replayModule",
      AL = "recorderModule";

    function lL(bb, ub, hb) {
      return function() {
        return bb.isStopped ? hb : ub(...arguments)
      }
    }
    const KL = {
      open: () => Promise.reject(new Error(WO.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function WL() {
      return hb.e(62).then((() => hb(60910)))
    }

    function CL(bb) {
      (0, WO.f)({
        text: bb,
        type: "Error"
      })
    }
    class dL {
      constructor(bb) {
        this.deps = bb, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: ub,
          api: Bb,
          core: Ob
        } = bb, Gb = () => bb.memory().buffer, Ub = () => ub.isStopped ? null : ub.rings.cmd, Lb = lL(ub, ((bb, ub) => Ob.fOb(bb, ub)), 0), Yb = () => Ob.TOb();
        let Sb = null;
        this.replay = new kU({
          core: {
            uGb: lL(ub, (bb => Ob.uGb(bb)), -1),
            fOb: Lb,
            TOb: Yb,
            hGb: lL(ub, (bb => {
              Ob.hGb(bb)
            }), void 0)
          },
          coreBuffer: Gb,
          load: async () => (Sb = await hb.e(63).then((() => hb(60922))), Sb.loadReplayModule()),
          unload: () => {
            var bb;
            null === (bb = Sb) || void 0 === bb || bb.unloadReplayModule()
          },
          markTrapped: bb => Sb ? Sb.markReplayTrapped(bb) : new Error(String(bb)),
          staleOr: (ub, hb) => bb.staleOr(oL, ub, hb),
          crash: ub => {
            bb.reportFault(oL, ub)
          }
        });
        let ab = null;
        this.recorder = new bU({
          core: {
            QOb: lL(ub, (bb => Ob.QOb(bb)), 0),
            EOb: lL(ub, (bb => Ob.EOb(bb)), 0),
            fOb: Lb,
            TOb: Yb
          },
          coreCommand: (bb, ub) => {
            var hb, Bb;
            return null !== (hb = null === (Bb = Ub()) || void 0 === Bb ? void 0 : Bb.writeCmd(bb, 0, ub)) && void 0 !== hb && hb
          },
          coreBuffer: Gb,
          load: async () => (ab = await WL(), ab.loadRecorderModule()),
          prefetch: () => {
            WL().then((bb => bb.prefetchRecorderModule())).catch((bb => {
              console.warn(`${aL} the recorder module didn't prefetch, so a save loads it:`, bb)
            }))
          },
          unload: () => {
            var bb;
            null === (bb = ab) || void 0 === bb || bb.unloadRecorderModule()
          },
          markTrapped: bb => ab ? ab.markRecorderTrapped(bb) : new Error(String(bb)),
          memoryBytes: () => {
            var bb, ub;
            return null !== (bb = null === (ub = ab) || void 0 === ub ? void 0 : ub.recorderMemoryBytes()) && void 0 !== bb ? bb : 0
          },
          staleOr: (ub, hb) => bb.staleOr(AL, ub, hb),
          crash: ub => {
            bb.reportFault(AL, ub)
          },
          allowed: () => !0 === bb.options.get("canRecordReplays"),
          failed: CL,
          events: (bb, ub) => {
            this.runtime.recorderEvents(bb, ub)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: CL,
          unixNow: () => Date.now()
        });
        const Hb = new zO({
          core: {
            JOb: lL(ub, (bb => Ob.JOb(bb)), 0),
            NOb: lL(ub, (() => {
              Ob.NOb()
            }), void 0),
            Ao: lL(ub, (() => Ob.Ao()), 0),
            eOb: lL(ub, (() => Ob.eOb()), 0)
          },
          buffer: Gb,
          apiView: () => Bb.apiView,
          cmd: Ub,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new xU({
          api: Bb,
          cmd: Ub,
          loadHook: DU,
          onError: bb => {
            console.warn(`${aL} the recorded game's replay hooks:`, bb)
          }
        });
        const wb = new MO({
          client: Hb,
          buffer: Gb,
          setHoldDraws: bb => {
            ub.setHoldDraws(bb)
          },
          notify: WO.f,
          onRecorderState: () => {
            var bb;
            null === (bb = (0, dO.f)()) || void 0 === bb || bb.recorderChanged()
          },
          onViewerChange: () => {
            var bb;
            null === (bb = (0, dO.f)()) || void 0 === bb || bb.viewerChanged()
          },
          onReplayOption: ub => {
            ! function(bb, ub) {
              var hb, Bb;
              const Ob = Fh.mb[ub.key];
              if (void 0 === Ob) return;
              let Gb = null !== (hb = ub.value) && void 0 !== hb ? hb : JSON.parse(JSON.stringify(null !== (Bb = OL.d[Ob]) && void 0 !== Bb ? Bb : null));
              if (null !== ub.value && ub.key < Fh.Lb.Environment && "string" === typeof Gb) try {
                Gb = JSON.parse(Gb)
              } catch (Ub) {
                return void console.warn(`${UL} a replay's ${Ob} isn't JSON`, Ub)
              }
              bb.applyNewClientOptions({
                [Ob]: Gb
              })
            }(bb.options, ub)
          },
          onReplayUiEvent: SL,
          onReplayOpened: ub => {
            this.entityHooks.opened((0, Db.Xb)(ub)), bb.replayShaderPack(ub)
          },
          meshPending: () => {
            var bb, hb;
            return null !== (bb = null === (hb = ub.lastHeader) || void 0 === hb ? void 0 : hb.renderPending) && void 0 !== bb ? bb : 0
          },
          viewerOpen: CO.c,
          download: bb => {
            (0, lO.k)(bb)
          }
        });
        this.runtime = wb, Bb.replay = wb.sink, (0, dO.w)(wb);
        const Zb = new EO({
          live: () => {
            var bb;
            return !ub.isStopped && !0 === (null === (bb = wb.currentViewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          cmd: Ub,
          dragScale: TO
        });
        this.freecam = Zb, (0, dO.s)(Zb), this.recordedOptions = function(bb, ub) {
          const hb = Fh.mb,
            Bb = hb.map(((hb, Bb) => ub.subscribe(hb, (ub => {
              bb.setOption(Bb, XL(ub))
            }))));
          return {
            sendAll() {
              hb.forEach(((hb, Bb) => {
                bb.setOption(Bb, XL(ub.get(hb)))
              }))
            },
            stop() {
              for (const bb of Bb) bb()
            }
          }
        }(wb.recorder, bb.options), this.stops = [(0, BB.o)((bb => {
          Zb.flush();
          try {
            this.replay.beforeFrame(bb)
          } catch (ub) {
            this.deps.reportFault("replayFrame", ub)
          }
        })), (0, BB.A)(((bb, ub) => {
          try {
            this.recorder.afterFrame(), ub && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (hb) {
            this.deps.reportFault("recorderFrame", hb)
          }
          try {
            wb.afterFrame(bb)
          } catch (hb) {
            this.deps.reportFault("replayRuntime", hb)
          }
        })), pL(wb), () => {
          this.recordedOptions.stop()
        }, ZL(wb.recorder), (0, PO.e)((bb => {
          let {
            action: ub,
            down: hb
          } = bb;
          var Bb;
          hb && (null === (Bb = (0, dO.f)()) || void 0 === Bb || Bb.keyDown(ub))
        }))];
        const Xb = () => {
          const bb = wb.currentViewer;
          return !0 === (null === bb || void 0 === bb ? void 0 : bb.isOpen) ? bb : null
        };
        (0, KO.h)({
          open: (bb, ub) => this.open(bb, ub),
          replayKey: () => {
            var bb, ub;
            return null !== (bb = null === (ub = Xb()) || void 0 === ub ? void 0 : ub.id) && void 0 !== bb ? bb : null
          },
          saveRefusal: () => {
            var bb, ub;
            return null !== (bb = null === (ub = Xb()) || void 0 === ub ? void 0 : ub.saveRefusal) && void 0 !== bb ? bb : null
          },
          encode: () => {
            var bb, ub;
            return null !== (bb = null === (ub = Xb()) || void 0 === ub ? void 0 : ub.save()) && void 0 !== bb ? bb : Promise.resolve(null)
          },
          fileHandle: () => {
            var bb, ub;
            return null !== (bb = null === (ub = wb.currentViewer) || void 0 === ub ? void 0 : ub.fileHandle) && void 0 !== bb ? bb : null
          },
          markSaved: (bb, ub) => {
            var hb;
            null === (hb = wb.currentViewer) || void 0 === hb || hb.markSaved(bb, ub)
          }
        })
      }
      netEvent(bb) {
        if ("connection" === bb.type)
          if (bb.phase === wb.E.Activated) {
            this.activeConn = bb.conn;
            const ub = this.deps.sessionInfo(bb.conn);
            null !== ub && (this.runtime.activated({
              lobbyType: (0, xb.A)(ub.lobbyName),
              gameNameWithVariation: ub.gameNameWithVariation,
              lobbyName: ub.lobbyName
            }), this.recordedOptions.sendAll())
          } else bb.phase !== wb.E.Left && bb.phase !== wb.E.Closed || bb.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const bb of this.stops) bb();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, dO.m)() === this.runtime && (0, dO.w)(null), (0, dO.i)() === this.freecam && (0, dO.s)(null), (0, KO.h)(KL), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(bb, ub) {
        const {
          running: hb
        } = this.deps;
        if (hb.isStopped) throw new Error(WO.e.coreStopped.text);
        if (bb.byteLength > 67108864) throw new Error(WO.e.cantOpen.text);
        let Bb;
        try {
          Bb = await async function(bb) {
            const ub = await bb.loadViewer();
            return ub.inPlayback || (0, BB.K)().leaveGame(null), ub
          }(this.runtime)
        } catch (Ob) {
          throw console.warn(`${aL} the replay viewer didn't load`, Ob), new Error(WO.e.viewerLoadFailed.text)
        }
        if (hb.isStopped) throw new Error(WO.e.coreStopped.text);
        await Bb.open(bb, ub)
      }
    }
    var rL = hb(1836);

    function jL(bb, ub) {
      const {
        aux: hb,
        payload: Bb
      } = function(bb) {
        return {
          aux: bb.reset ? wb.Qb.ResetFirst : 0,
          payload: DL(bb.changes)
        }
      }(ub);
      bb.queueOptions(hb, Bb) && (ub.reset && rL.b.reset(), rL.b.apply(ub.changes))
    }
    const nL = new TextEncoder;

    function DL(bb) {
      const ub = new xL;
      return gL(ub, bb), ub.bytes()
    }
    class xL {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(bb) {
        if (this.len + bb <= this.buf.length) return;
        const ub = new Uint8Array(Math.max(2 * this.buf.length, this.len + bb));
        ub.set(this.buf.subarray(0, this.len)), this.buf = ub, this.view = new DataView(ub.buffer)
      }
      u8(bb) {
        this.room(1), this.buf[this.len++] = bb
      }
      tagged(bb, ub, hb) {
        this.room(1 + ub), this.buf[this.len++] = bb, 1 === ub ? this.view.setUint8(this.len, hb) : 2 === ub ? this.view.setUint16(this.len, hb) : this.view.setUint32(this.len, hb), this.len += ub
      }
      signed(bb, ub, hb) {
        this.room(1 + ub), this.buf[this.len++] = bb, 1 === ub ? this.view.setInt8(this.len, hb) : 2 === ub ? this.view.setInt16(this.len, hb) : this.view.setInt32(this.len, hb), this.len += ub
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

    function zL(bb, ub, hb, Bb, Ob, Gb, Ub) {
      ub < Bb ? bb.u8(hb | ub) : null !== Ob && ub < 256 ? bb.tagged(Ob, 1, ub) : ub < 65536 ? bb.tagged(Gb, 2, ub) : bb.tagged(Ub, 4, ub)
    }

    function gL(bb, ub) {
      switch (typeof ub) {
        case "undefined":
          return void bb.raw(iL);
        case "boolean":
          return void bb.u8(ub ? 195 : 194);
        case "number":
          return void
          function(bb, ub) {
            ub >>> 0 === ub ? ub < 128 ? bb.u8(ub) : ub < 256 ? bb.tagged(204, 1, ub) : ub < 65536 ? bb.tagged(205, 2, ub) : bb.tagged(206, 4, ub) : (ub | 0) === ub ? ub >= -32 ? bb.u8(255 & ub) : ub >= -128 ? bb.signed(208, 1, ub) : ub >= -32768 ? bb.signed(209, 2, ub) : bb.signed(210, 4, ub) : bb.f64(ub)
          }(bb, ub);
        case "string": {
          const hb = nL.encode(ub);
          return zL(bb, hb.length, 160, 32, 217, 218, 219), void bb.raw(hb)
        }
        case "object":
          break;
        default:
          return void bb.u8(192)
      }
      if (null === ub) bb.u8(192);
      else if (Array.isArray(ub)) {
        zL(bb, ub.length, 144, 16, null, 220, 221);
        for (const hb of ub) gL(bb, hb)
      } else if (ub instanceof Uint8Array) zL(bb, ub.length, 0, 0, 196, 197, 198), bb.raw(ub);
      else {
        const hb = Object.keys(ub);
        zL(bb, hb.length, 128, 0, null, 222, 223);
        for (const Bb of hb) gL(bb, Bb), gL(bb, ub[Bb])
      }
    }
    const iL = new Uint8Array([212, 0, 0]);
    var vL = hb(42006),
      tL = hb(42008),
      JL = hb(40452),
      eL = hb(40483),
      NL = hb(2688);
    const sL = [1e3, 3e3, 9e3];
    class ML {
      constructor(bb) {
        this.host = bb, this.sets = new Map, this.table = [], this.generation = 0, this.FZ = !1
      }
      onEvent(bb) {
        const ub = function(bb) {
          if (bb.byteLength !== wb.$c) return null;
          const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
          return {
            want: ub.getUint16(0, !0),
            release: ub.getUint16(2, !0)
          }
        }(bb);
        ub && !this.FZ && (ub.release !== wb.dd && this.release(ub.release), ub.want !== wb.dd && this.want(ub.want))
      }
      reset(bb) {
        if (!this.FZ) {
          for (const [bb, ub] of this.sets) "ready" === ub.state && this.releaseAll(ub.distinct), this.sets.delete(bb);
          this.table = bb, this.generation++
        }
      }
      dispose() {
        if (this.FZ) return;
        this.FZ = !0, this.generation++, this.table = [];
        const bb = [...this.sets.values()];
        this.sets.clear();
        let ub = null;
        for (const Bb of bb)
          for (const bb of "ready" === Bb.state ? Bb.distinct : []) try {
            this.host.hBb(bb)
          } catch (hb) {
            ub ??= {
              error: hb
            }
          }
        if (ub) throw ub.error
      }
      isReady(bb) {
        var ub;
        return "ready" === (null === (ub = this.sets.get(bb)) || void 0 === ub ? void 0 : ub.state)
      }
      want(bb) {
        const ub = this.sets.get(bb);
        if ("loading" === (null === ub || void 0 === ub ? void 0 : ub.state)) return ub.wanted = !0, void this.capAnswer(bb, ub);
        if ("ready" === (null === ub || void 0 === ub ? void 0 : ub.state)) return void this.host.sendReady(IL(bb, ub.images, ub.size));
        const hb = this.table[bb];
        if (!hb || 1 !== hb.urls.length && hb.urls.length !== Fh._b.CubeFaces) return this.host.sendReady(PL(bb)), void this.host.onLoadFailed(bb, "", new Error(`no image set ${bb}`));
        const Bb = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(bb, Bb), this.load(bb, hb, Bb, this.generation, 0), this.capAnswer(bb, Bb)
      }
      capAnswer(bb, ub) {
        this.host.wait(4e3, (() => {
          this.sets.get(bb) === ub && ub.wanted && this.host.sendReady(PL(bb))
        }))
      }
      load(bb, ub, hb, Bb, Ob) {
        const Gb = [...new Set(ub.urls)];
        Promise.allSettled(Gb.map((bb => this.host.loadImage(bb, ub.orientation)))).then((Ub => {
          const Lb = Ub.flatMap((bb => "fulfilled" === bb.status ? [bb.value] : [])),
            Yb = Bb === this.generation && this.sets.get(bb) === hb,
            Sb = Ub.findIndex((bb => "rejected" === bb.status));
          if (!Yb || !hb.wanted) return this.FZ ? void this.releaseAfterDispose(Lb.map(mL)) : (this.releaseAll(Lb.map(mL)), void(Yb && this.sets.delete(bb)));
          Sb < 0 ? this.loaded(bb, ub, Gb, Lb) : (this.releaseAll(Lb.map(mL)), this.host.sendReady(PL(bb)), Ob < sL.length ? this.host.wait(sL[Ob], (() => {
            Bb === this.generation && this.sets.get(bb) === hb && (hb.wanted ? this.load(bb, ub, hb, Bb, Ob + 1) : this.sets.delete(bb))
          })) : (this.sets.delete(bb), this.host.onLoadFailed(bb, Gb[Sb], Ub[Sb].reason)))
        }))
      }
      loaded(bb, ub, hb, Bb) {
        const [Ob] = Bb, Gb = [Ob.width, Ob.height], Ub = Bb.every((bb => bb.width === Gb[0] && bb.height === Gb[1])), Lb = ub.urls.length === Fh._b.CubeFaces;
        if (!Ub || Gb[0] <= 0 || Gb[1] <= 0 || Gb[0] > 65535 || Gb[1] > 65535 || Lb && Gb[0] !== Gb[1]) {
          this.releaseAll(Bb.map(mL)), this.sets.delete(bb), this.host.sendReady(PL(bb));
          const hb = Bb.map((bb => `${bb.width}x${bb.height}`));
          return void this.host.onLoadFailed(bb, ub.urls[0], new Error(`set ${bb}'s images can't make its texture: ${hb.join(", ")}`))
        }
        const Yb = ub.urls.map((bb => Bb[hb.indexOf(bb)].id)),
          Sb = Bb.map(mL);
        this.sets.set(bb, {
          state: "ready",
          images: Yb,
          distinct: Sb,
          size: Gb
        }), this.host.sendReady(IL(bb, Yb, Gb))
      }
      release(bb) {
        const ub = this.sets.get(bb);
        "loading" === (null === ub || void 0 === ub ? void 0 : ub.state) ? ub.wanted = !1: "ready" === (null === ub || void 0 === ub ? void 0 : ub.state) && (this.releaseAll(ub.distinct), this.sets.delete(bb))
      }
      releaseAll(bb) {
        for (const ub of bb) this.host.hBb(ub)
      }
      releaseAfterDispose(bb) {
        for (const ub of bb) try {
          this.host.hBb(ub)
        } catch {}
      }
    }

    function mL(bb) {
      return bb.id
    }

    function IL(bb, ub, hb) {
      const Bb = new Uint8Array(Fh._b.SkyImagesReadyBytes),
        Ob = new DataView(Bb.buffer);
      return Ob.setUint16(0, bb, !0), Ob.setUint16(2, ub.length, !0), Ob.setUint16(4, hb[0], !0), Ob.setUint16(6, hb[1], !0), ub.slice(0, Fh._b.CubeFaces).forEach(((bb, ub) => {
        Ob.setUint32(8 + 4 * ub, bb, !0)
      })), Bb
    }

    function PL(bb) {
      const ub = new Uint8Array(Fh._b.SkyImagesReadyBytes),
        hb = new DataView(ub.buffer);
      return hb.setUint16(0, bb, !0), hb.setUint16(2, Fh._b.Failed, !0), ub
    }
    let qL = Promise.resolve();
    async function EL(bb, ub) {
      let hb;
      try {
        hb = await (0, NL.G)(bb)
      } catch (Gb) {
        throw new JL.c("fetch", bb, {
          cause: Gb
        })
      }
      const Bb = qL.then((() => async function(bb, ub) {
        const hb = new Blob([bb.slice()]);
        let Bb = await createImageBitmap(hb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ub
        });
        const Ob = 1024 / Math.max(Bb.width, Bb.height);
        if (Ob < 1) {
          const bb = Bb;
          try {
            Bb = await createImageBitmap(bb, {
              resizeWidth: Math.max(1, Math.round(bb.width * Ob)),
              resizeHeight: Math.max(1, Math.round(bb.height * Ob)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            bb.close()
          }
        }
        return Bb
      }(hb, ub)));
      let Ob;
      qL = Bb.catch((() => {}));
      try {
        Ob = await Bb
      } catch (Gb) {
        throw new JL.c("decode", bb, {
          cause: Gb
        })
      }
      return {
        id: (0, JL.l)(Ob),
        width: Ob.width,
        height: Ob.height
      }
    }
    var yL = hb(2951),
      VL = hb(33944);
    const FL = yL.d.length;

    function fL(bb) {
      const ub = [],
        hb = [];
      yL.d.forEach(((Bb, Ob) => {
        var Gb;
        const Ub = null !== (Gb = kL(bb[Bb])) && void 0 !== Gb ? Gb : VL.m[Bb];
        "custom" === Ub.type ? (hb.push({
          id: Ob,
          kind: Fh._b.KindCustom,
          set: ub.length,
          earth: null
        }), ub.push({
          urls: [Ub.px, Ub.py, Ub.pz, Ub.nx, Ub.ny, Ub.nz],
          orientation: "none"
        })) : hb.push({
          id: Ob,
          kind: Fh._b.KindEarth,
          set: 0,
          earth: Ub
        })
      }));
      const Bb = kL(bb.earth);
      "earth" === (null === Bb || void 0 === Bb ? void 0 : Bb.type) && hb.push({
        id: FL,
        kind: Fh._b.KindEarth,
        set: 0,
        earth: Bb
      });
      const Ob = ub.length;
      ub.push({
        urls: VL.e.map((bb => VL.f + bb)),
        orientation: "none"
      }), ub.push({
        urls: [VL.j],
        orientation: "flipY"
      }), ub.push({
        urls: [VL.d],
        orientation: "flipY"
      });
      const Gb = new Uint8Array(Fh._b.SkyTableHeaderBytes + hb.length * Fh._b.SkyTableEntryBytes),
        Ub = new DataView(Gb.buffer);
      return Ub.setUint16(0, Ob, !0), Ub.setUint16(2, Ob + 1, !0), Ub.setUint16(4, Ob + 2, !0), Ub.setUint16(6, hb.length, !0), hb.forEach(((bb, ub) => {
        const hb = Fh._b.SkyTableHeaderBytes + ub * Fh._b.SkyTableEntryBytes;
        Ub.setUint16(hb, bb.id, !0), Ub.setUint8(hb + 2, bb.kind);
        const Bb = hb + 4;
        bb.earth ? function(bb, ub, hb) {
          const Bb = bb;
          let Ob = 0,
            Gb = 0;
          for (const [Ub, Lb] of TL) {
            const bb = Bb[Ub];
            "number" === typeof bb && Number.isFinite(bb) && (ub.setFloat32(hb + 4 * Lb, bb, !0), Ob |= 1 << Lb)
          }
          for (const [Ub, Lb, Yb] of cL) {
            const bb = Bb[Ub];
            Array.isArray(bb) && 3 === bb.length && bb.every((bb => "number" === typeof bb && Number.isFinite(bb))) && (bb.forEach(((bb, Bb) => {
              ub.setFloat32(hb + Yb + 4 * Bb, bb, !0)
            })), Ob |= Lb)
          }
          QL.forEach(((bb, Gb) => {
            let [Ub, Lb] = bb;
            const Yb = Bb[Ub];
            "number" === typeof Yb && Number.isFinite(Yb) && (ub.setFloat32(hb + Fh.m.CameraOffsetAt + 4 * Gb, Yb, !0), Ob |= Lb)
          }));
          for (const [Ub, Lb] of RL) {
            const bb = Bb[Ub];
            null !== bb && void 0 !== bb && (Ob |= Lb, bb && (Gb |= Lb >>> 14))
          }
          ub.setUint32(hb + Fh.m.PresentAt, Ob, !0), ub.setUint8(hb + Fh.m.FlagsAt, Gb)
        }(bb.earth, Ub, Bb) : Ub.setUint16(Bb, bb.set, !0)
      })), {
        payload: Gb,
        sets: ub
      }
    }

    function kL(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const ub = bb;
      if ("earth" === ub.type) return bb;
      return "custom" === ub.type && ["px", "py", "pz", "nx", "ny", "nz"].every((bb => {
        const hb = ub[bb];
        return "string" === typeof hb && hb.length > 0
      })) ? bb : null
    }
    const TL = [
        ["inclination", Fh.m.Inclination],
        ["turbidity", Fh.m.Turbidity],
        ["luminance", Fh.m.Luminance],
        ["rayleigh", Fh.m.Rayleigh],
        ["mieCoefficient", Fh.m.MieCoefficient],
        ["mieDirectionalG", Fh.m.MieDirectionalG],
        ["distance", Fh.m.Distance],
        ["azimuth", Fh.m.Azimuth]
      ],
      cL = [
        ["sunPosition", Fh.m.SunPosition, Fh.m.SunPositionAt],
        ["up", Fh.m.Up, Fh.m.UpAt],
        ["vertexTint", Fh.m.VertexTint, Fh.m.VertexTintAt]
      ],
      QL = [
        ["xCameraOffset", Fh.m.CameraOffsetX],
        ["yCameraOffset", Fh.m.CameraOffsetY],
        ["zCameraOffset", Fh.m.CameraOffsetZ]
      ],
      RL = [
        ["useSunPosition", Fh.m.UseSunPosition],
        ["dithering", Fh.m.Dithering],
        ["infiniteDistance", Fh.m.InfiniteDistance]
      ];

    function bY(bb, ub, hb) {
      const Bb = new hY({
        writeCmd: bb,
        warn: ub,
        followPack: uY(hb, ub)
      });
      return Bb.start(), Bb
    }

    function uY(bb, ub) {
      return hb => {
        let Bb = () => {};
        const Ob = bb((bb => {
          Bb(), Bb = () => {}, null !== bb ? Bb = bb.subscribe((bb => {
            hb(function(bb, ub, hb) {
              if ("object" !== typeof bb || null === bb) return null;
              const Bb = bb.skyBoxes;
              if ("object" !== typeof Bb || null === Bb) return null;
              if ("player" === ub) return Bb;
              return Object.fromEntries(Object.entries(Bb).filter((bb => {
                let [ub, Bb] = bb;
                return !! function(bb) {
                  if ("object" !== typeof bb || null === bb) return !1;
                  return "earth" === bb.type || Object.entries(bb).every((bb => {
                    let [ub, hb] = bb;
                    return "type" === ub || ("" === (Bb = hb) || null !== function(bb) {
                      var ub, hb, Bb;
                      return "string" !== typeof bb ? null : null !== (ub = null === (hb = BY.exec(bb)) || void 0 === hb || null === (Bb = hb.groups) || void 0 === Bb ? void 0 : Bb.base64) && void 0 !== ub ? ub : null
                    }(Bb));
                    var Bb
                  }))
                }(Bb) || (hb(`Ignoring texture pack skybox ${ub}, whose faces are not all data URLs`, null), !1)
              })))
            }(bb.pack, null === bb.gameSource ? "player" : "customGame", ub))
          })) : hb(null)
        }));
        return () => {
          Ob(), Bb()
        }
      }
    }
    class hY {
      constructor(bb) {
        var ub, hb, Bb;
        this.host = bb, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.FZ = !1, this.wait = null !== (ub = bb.wait) && void 0 !== ub ? ub : (bb, ub) => {
          setTimeout(ub, bb)
        }, this.loader = new ML({
          loadImage: null !== (hb = bb.loadImage) && void 0 !== hb ? hb : EL,
          hBb: null !== (Bb = bb.hBb) && void 0 !== Bb ? Bb : JL.m,
          sendReady: bb => {
            this.queue.push({
              kind: Fh._b.SkyImagesReady,
              payload: bb
            })
          },
          onLoadFailed: (ub, hb, Bb) => {
            bb.warn(`sky image set ${ub} (${hb}) didn't load: the last sky stays`, Bb)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(eL.d, (() => {
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
        this.FZ = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(bb) {
        if (this.FZ) return;
        const ub = fL(bb);
        var hb, Bb;
        this.written && (hb = this.written, Bb = ub, hb.payload.length === Bb.payload.length && hb.payload.every(((bb, ub) => bb === Bb.payload[ub])) && hb.sets.length === Bb.sets.length && hb.sets.every(((bb, ub) => {
          const hb = Bb.sets[ub];
          return bb.orientation === hb.orientation && bb.urls.length === hb.urls.length && bb.urls.every(((bb, ub) => bb === hb.urls[ub]))
        }))) || (this.written = ub, this.loader.reset(ub.sets), this.queue = this.queue.filter((bb => bb.kind !== Fh._b.SkyImagesReady)), this.queue.push({
          kind: Fh._b.SkyTable,
          payload: ub.payload
        }))
      }
    }
    const BY = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var OY = hb(2616),
      GY = hb(2775),
      UY = hb(284),
      LY = hb(172),
      YY = hb(2621),
      SY = hb(2624),
      aY = hb(260),
      HY = hb(263),
      wY = hb(2702),
      ZY = hb(2717),
      XY = hb(2734),
      pY = hb(101),
      oY = hb(270),
      AY = hb(40267);
    class lY {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, IO.n)(lB.J, (bb => {
          this.onReply((0, mO.g)(lB.J, bb), performance.now())
        }))
      }
      onFrame(bb, ub) {
        null === this.id ? this.id = bb : bb !== this.id && (this.id = bb, this.sentMs = document.hidden ? null : ub)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(bb, ub) {
        bb === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(ub - this.sentMs), this.sentMs = null)
      }
      take() {
        const bb = this.roundTripMs;
        return this.roundTripMs = null, bb
      }
      stop() {
        this.stopReplies()
      }
    }
    class KY {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(bb, ub, hb, Bb) {
        const Ob = bb - this.sampled >>> 0,
          Gb = ub - this.timed >>> 0,
          Ub = hb - this.frameUs >>> 0,
          Lb = this.primed;
        return this.sampled = bb, this.timed = ub, this.frameUs = hb, this.primed = !0, !(!Lb || Ob > 64 || Gb > 64) && (Bb && Ub <= 1e6 * Gb && (this.windowTimed += Gb, this.windowUs += Ub), Bb && Ob > 0)
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
    const WY = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class CY {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(bb, ub) {
        const hb = Math.min(4096, this.count + ub);
        this.samples.fill(bb, this.count, hb), this.count = hb
      }
      clear() {
        this.count = 0
      }
      take(bb) {
        const ub = this.count;
        if (this.count = 0, ub < 30) return null;
        const hb = this.samples.subarray(0, ub).sort();
        return bb.map((bb => hb[Math.min(ub - 1, Math.floor(bb * ub))]))
      }
    }
    class dY {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new CY, this.inJoin = !1, this.rose = !1, this.joinLags = new CY, this.joinLagP90Ms = null
      }
      onFrame(bb, ub, hb, Bb, Ob) {
        const Gb = bb.headerWord(Fh.B.Pacing),
          Ub = bb.headerWord(Fh.B.PacingLagUs),
          Lb = (Gb >>> Fh.R.LagsShift) - (this.word >>> Fh.R.LagsShift) & Fh.R.CountMask,
          Yb = (Gb >>> Fh.R.SwitchesShift) - (this.word >>> Fh.R.SwitchesShift) & Fh.R.CountMask,
          Sb = Lb > 0 ? (Ub - this.lagUs >>> 0) / Lb / 1e3 : 0,
          ab = this.primed && Lb <= 64 && Yb <= 2 && Sb <= 6e4;
        if (this.rose = 0 !== (Gb & ~this.word & Fh.R.Joining), this.word = Gb, this.lagUs = Ub, this.primed = !0, 0 !== (Gb & Fh.R.Tiered)) {
          if (0 !== (Gb & Fh.R.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && ab && Bb && Lb > 0 && this.joinLags.add(Sb, Lb);
          else if (this.inJoin) {
            var Hb, wb;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Hb = null === (wb = this.joinLags.take([.9])) || void 0 === wb ? void 0 : wb[0]) && void 0 !== Hb ? Hb : null
          }
          if (Ob) {
            if (ab && (this.switches += Yb, Lb > 0 && this.lags.add(Sb, Lb)), hb) {
              if (this.lastDrawnMs >= 0 && ub - this.lastDrawnMs <= 250) {
                const bb = ub - this.lastDrawnMs;
                this.tieredMs += bb, (Gb & Fh.R.AheadMask) > 0 && (this.pacedMs += bb)
              }
              this.lastDrawnMs = ub
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(bb) {
        const ub = this.takeWindow(),
          hb = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, bb ? {
          ...ub,
          joinLagP90Ms: hb
        } : {
          ...WY,
          joinLagP90Ms: hb
        }
      }
      unsent(bb) {
        this.joinLagP90Ms ??= bb.joinLagP90Ms
      }
      takeWindow() {
        var bb, ub;
        const hb = this.tieredMs >= 2e3,
          Bb = this.lags.take([.5, .9]),
          Ob = {
            pacedShare: hb ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: hb ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (bb = null === Bb || void 0 === Bb ? void 0 : Bb[0]) && void 0 !== bb ? bb : null,
            lagP90Ms: null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== ub ? ub : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Ob
      }
    }
    var rY = hb(9008),
      jY = hb(2594),
      nY = hb(40338),
      DY = hb(9e3),
      xY = hb(2627),
      zY = hb(2608);
    const gY = {
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

    function iY(bb) {
      return new vY(bb)
    }
    class vY {
      constructor(bb) {
        this.shell = bb, this.tracker = new SY.b, this.gpu = new KY, this.pacing = new dY, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new lY, this.pacedCpuMs = 0, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now()), this.lastDrawnMs = -1
        }, (0, rY.c)(bb.backend, bb.canvas, bb.adapterVendor), this.tracker.start((() => !bb.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, xY.b)("wasm", (() => {
          const {
            n: ub,
            sampleCount: hb
          } = (0, nY.f)();
          return `${bb.backend}, quality steps aim at up to ${zY.b.target.maxFps} fps, pixel n ${ub}, msaa ${hb}`
        }), (ub => {
          ub.setLoadCounts(bb.readLoadCounts), this.frameDebug = ub
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(bb) {
        var ub;
        this.tracker.onAnimationFrame(bb), null === (ub = this.frameDebug) || void 0 === ub || ub.animationFrame()
      }
      frameRan(bb, ub, hb, Bb) {
        var Ob;
        this.ping.onFrame(bb.headerWord(Fh.B.PingSent), hb);
        const Gb = this.tracker;
        this.pacing.onFrame(bb, ub, "drawn" === Bb, !document.hidden, Gb.isSampling());
        const Ub = bb.headerWord(Fh.B.TickUs) / 1e3 + (0, BB.N)();
        var Lb;
        (Gb.jK(Ub), null === (Ob = this.frameDebug) || void 0 === Ob || Ob.wasmFrame(bb, ub, hb, Bb, Gb.isSampling(), Ub), null !== this.game) && (null === (Lb = this.frameDebug) || void 0 === Lb || Lb.inGame());
        const Yb = Math.max(0, hb - ub - Ub);
        if ("drawn" !== Bb) return void("paced" === Bb ? this.pacedCpuMs += Yb : "skipped" === Bb && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(ub), Gb.onFrameStart(ub);
        this.gpu.onFrame(bb.headerWord(Fh.B.GpuSampled), bb.headerWord(Fh.B.GpuTimed), bb.headerWord(Fh.B.GpuFrameUs), Gb.isSampling()) && Gb.onGpuSampleStarted(), Gb.onFrameCpu(Yb + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(ub)
      }
      framePaced() {
        var bb;
        null === (bb = this.frameDebug) || void 0 === bb || bb.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const bb of this.timers) clearInterval(bb);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.ping.stop()
      }
      followGame() {
        const bb = this.shell.joinedGame();
        if (bb !== this.game) {
          var ub;
          if (this.game = bb, null !== bb) null === (ub = this.frameDebug) || void 0 === ub || ub.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== bb
      }
      checkMainStall(bb) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const ub = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          hb = this.lastDrawnMs < 0 ? 0 : bb - this.lastDrawnMs;
        this.lastDrawnMs = bb, this.stallPending || (hb <= 5e3 ? ub.markFrame(bb) : (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(hb, ub.blockingSinceMark())
        }), 0)))
      }
      countFpsFrame(bb) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = bb
        }
        this.fpsFrames++;
        const ub = bb - this.fpsSpanStartMs;
        if (!(ub < XY.d)) {
          if (!document.hidden) {
            const bb = 1e3 * this.fpsFrames / ub;
            this.firstSpanFps ??= bb, this.initialFps = this.firstSpanFps, this.fpsOverTime = bb
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = bb
        }
      }
      flush() {
        const bb = this.followGame(),
          {
            cpuFrameMs: ub,
            refreshHz: hb,
            cpuBottleneck: Ob,
            frameIntervalCv: Gb,
            ...Ub
          } = this.tracker.snapshotAndReset(),
          Lb = this.shell.inGame(),
          Yb = Lb && this.inGameAtLastFlush,
          Sb = Yb ? Ub : YY.h,
          ab = this.pacing.snapshotAndReset(Yb);
        if (this.inGameAtLastFlush = Lb, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !bb) return void this.pacing.unsent(ab);
        const Hb = performance.now(),
          Zb = (0, ZY.o)((0, ZY.n)(Hb), this.unsentPage),
          pb = function(bb, ub, hb, Ob, Gb, Ub, Lb, Yb) {
            var Sb, ab, Hb, wb;
            const Zb = {},
              {
                canvas: Xb
              } = bb,
              pb = (0, wY.e)({
                refreshHz: ub.refreshHz,
                msaa: bb.msaa(),
                autoMsaaOff: (0, DY.c)()
              });
            for (const ob of (0, GY.f)()) {
              const Ab = ob.name;
              let lb;
              if ((0, UY.r)(Ab)) lb = (0, ZY.d)(Ab);
              else if ((0, ZY.i)(Ab)) lb = Yb[Ab];
              else if ((0, wY.h)(Ab)) lb = pb[Ab];
              else switch (Ab) {
                case "fps":
                  lb = Ob;
                  break;
                case "sU":
                  lb = Gb;
                  break;
                case "qU":
                  lb = (0, jY.x)((0, nY.f)().n);
                  break;
                case "EU":
                  lb = Math.max(Xb.width, Xb.height);
                  break;
                case "yU":
                  lb = Math.min(Xb.width, Xb.height);
                  break;
                case "VU":
                  lb = navigator.hardwareConcurrency || null;
                  break;
                case "FU":
                  lb = (0, FO.getWebGpuSupported)();
                  break;
                case "fU":
                  lb = null === bb.fallbackReason ? null : gY[bb.fallbackReason];
                  break;
                case "kU":
                  lb = ub.cpuFrameMs;
                  break;
                case "TU":
                  lb = ub.refreshHz;
                  break;
                case "cU":
                  lb = ub.cpuBottleneck;
                  break;
                case "QU":
                  lb = ub.frameIntervalCv;
                  break;
                case "RU":
                  lb = ub.frameMs;
                  break;
                case "bL":
                  lb = ub.tickMs;
                  break;
                case "OL":
                  lb = ub.mainBusyShare;
                  break;
                case "UL":
                  lb = ub.mainProbeDelayMs;
                  break;
                case "uL":
                  lb = ub.longAnimationFramesPerMin;
                  break;
                case "hL":
                  lb = ub.longAnimationFrameTimeShare;
                  break;
                case "BL":
                  lb = ub.longAnimationFrameScriptShare;
                  break;
                case "LL":
                  lb = ub.gpuPassMs;
                  break;
                case "YL":
                  lb = ub.gpuSubmitToDoneMs;
                  break;
                case "SL":
                  lb = hb.pacedShare;
                  break;
                case "aL":
                  lb = hb.switchesPerHour;
                  break;
                case "HL":
                  lb = hb.lagP50Ms;
                  break;
                case "wL":
                  lb = hb.lagP90Ms;
                  break;
                case "ZL":
                  lb = hb.joinLagP90Ms;
                  break;
                case "nL":
                  lb = (0, OY.h)(Ub);
                  break;
                case "PU":
                  lb = Lb;
                  break;
                case "XL":
                case "pL":
                case "oL":
                case "AL":
                case "lL":
                case "KL":
                case "WL":
                case "CL":
                case "dL":
                case "rL":
                case "jL":
                case "DL":
                case "xL":
                case "zL":
                case "gL":
                  lb = null;
                  break;
                case "EL":
                  lb = (0, FO.getPlatformType)();
                  break;
                case "yL":
                  lb = (0, FO.getGpuVendor)();
                  break;
                case "VL":
                  lb = AY.b[bb.backend];
                  break;
                case "FL":
                  lb = (0, pY.b)();
                  break;
                case "fL":
                  lb = (0, FO.getOperatingSystem)();
                  break;
                case "kL":
                  lb = (0, FO.getTrafficSource)();
                  break;
                case "TL":
                  lb = null !== (Sb = Bb.d.get("gameEntrySource")) && void 0 !== Sb ? Sb : LY.e;
                  break;
                case "cL":
                  lb = ub.frameLimiter;
                  break;
                case "QL":
                  lb = (0, aY.k)();
                  break;
                case "RL":
                  lb = null !== (ab = (0, HY.d)()) && void 0 !== ab ? ab : LY.e;
                  break;
                case "bY":
                  lb = (0, aY.e)(Xb.width, Xb.height);
                  break;
                case "uY":
                  lb = (0, GY.h)(-(new Date).getTimezoneOffset());
                  break;
                case "OY":
                  lb = null !== (Hb = bb.fallbackReason) && void 0 !== Hb ? Hb : LY.e;
                  break;
                case "LY":
                  lb = "ready";
                  break;
                case "YY":
                  lb = (0, FO.getSoftwareRenderer)();
                  break;
                case "BY":
                  lb = null !== bb.shaderPackReach() ? "true" : "false";
                  break;
                case "SY":
                  lb = null !== (wb = bb.shaderPackReach()) && void 0 !== wb && wb.sceneDepth ? "true" : "false";
                  break;
                case "aY": {
                  const ub = bb.shaderPackReach();
                  lb = null !== ub && void 0 !== ub && ub.sunShadow ? "all" : null !== ub && void 0 !== ub && ub.airShadow ? "air" : "none";
                  break
                }
                case "HY":
                  lb = oY.y;
                  break;
                case "hY":
                case "GY":
                case "UY":
                  lb = LY.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Ab}`)
              }
              if (void 0 === lb) throw new Error(`Metric ${Ab} has no value`);
              Zb[Ab] = lb
            }
            return Zb
          }(this.shell, {
            cpuFrameMs: ub,
            refreshHz: hb,
            cpuBottleneck: Ob,
            frameIntervalCv: Gb,
            ...Sb
          }, ab, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Zb);
        if (! function(bb, ub, hb) {
            return (0, yu.e)(), bb(Xb.i.Send, ub, hb)
          }(this.shell.writeCmd, wb.Yc, function(bb) {
            const ub = (0, Nb.h)((0, fu.f)(bb)),
              hb = new Uint8Array(Xb.Td.BYTES + ub.length);
            return new DataView(hb.buffer).setUint16(0, fu.e.AnalyticsUpdate, !0), hb.set(ub, Xb.Td.BYTES), hb
          }(pb))) return this.unsentPage = Zb, this.pacing.unsent(ab), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, OY.e), (0, ZY.m)(pb, "wasm", Hb)
      }
    }
    var tY = hb(39214);

    function JY(bb, ub, hb) {
      const Bb = new Map;
      return (0, tY.d)(((bb, hb, Bb) => ub.bS(bb, hb, Bb)), ((ub, hb, Ob) => {
        const Gb = `${ub},${hb},${Ob}`;
        return Bb.has(Gb) || Bb.set(Gb, (0, Mu.b)(bb, ub, hb, Ob)), Bb.get(Gb)
      }), hb)
    }
    var eY = hb(39218),
      NY = hb(40154);

    function sY(bb) {
      const ub = null !== bb && 0 !== (Xb.o.playerFlags(bb.api.apiView, 0) & Xb.Ad.CursorAim);
      ub !== (0, NY.t)() && (0, NY.N)(ub, null !== bb)
    }

    function MY(bb) {
      return (0, AB.c)(lB.B, bb)
    }
    var mY = hb(40171);
    const IY = new Gb.e((bb => hb(42014)(`./${bb}/${bb}Client`)));
    let PY = null,
      qY = null;
    async function EY(bb) {
      PY ??= hb.e(27).then((() => hb(38764))).then((bb => {
        qY = bb.createDefaultClientPlugins
      }), (bb => {
        throw PY = null, bb
      })), await Promise.all([IY.load(bb), PY])
    }

    function yY(bb) {
      bb.load(new eu(yB, new fB))
    }
    let VY = !1;
    const FY = new WeakMap;

    function fY(bb) {
      try {
        bb()
      } catch (ub) {
        console.error("[bloxd-wasm-client] a session-end step failed", ub)
      }
    }

    function kY(bb, ub) {
      ! function() {
        var bb, ub;
        PB.Howler.volume();
        const hb = PB.Howler;
        null === (bb = hb._autoResume) || void 0 === bb || bb.call(hb), null === (ub = hb._autoSuspend) || void 0 === ub || ub.call(hb)
      }(), ub.audio.prepare();
      const hb = new Wb(ub.core, ub.memory, ub.audio);
      let Gb;
      try {
        Gb = new pO(hb, ub.options)
      } catch (wb) {
        return bb.crash(AO.w, wb), null
      }(0, Yb.h)(oO(hb, Gb));
      const ab = new dL({
        running: bb,
        api: hb,
        core: ub.core,
        memory: ub.memory,
        staleOr: ub.staleOr,
        reportFault: ub.reportReplayFault,
        options: ub.options,
        sessionInfo: ub.sessionInfo,
        replayShaderPack: ub.replayShaderPack
      });
      (0, BB.D)();
      const Hb = new eB({
        api: hb,
        tables: Gb,
        sessionInfo: ub.sessionInfo,
        gameFactory: bb => IY.loadedFactory(bb),
        defaultPlugins: (bb, ub, hb, Bb) => {
          if (null === qY) throw new Error("The default plugins started before they loaded");
          return qY(bb, ub, hb, Bb)
        },
        serverOptions: ub.options,
        onNetEvent: bb => {
          ab.netEvent(bb), ub.onNetEvent(bb)
        },
        setLocalOptions: ub => {
          jL(bb, {
            changes: ub,
            reset: !1
          })
        },
        playSound: (bb, hb, Bb, Ob, Gb, Ub, Lb) => ub.audio.playGame(bb, hb, Bb, Ob, Gb, Ub, Lb),
        preloadSounds: bb => {
          ub.audio.preload(function(bb) {
            const ub = [];
            for (const hb of bb) {
              const bb = tu(hb);
              bb >= 0 && ub.push(lu[bb])
            }
            return ub
          }(bb))
        },
        onSessionEnd: () => {
          fY(Ob.k), fY(uO), fY((() => {
            Bb.d.set({
              openInGameMenuName: null
            })
          })), fY((() => {
            ub.audio.endSession()
          }))
        },
        beforeWrite: ub.beforeWrite,
        beforeOp: ub.beforeOp,
        cameraScreen: bO,
        showCameraFacing: hO,
        onEventOverflow: ub.onEventOverflow,
        screenBandY: Lb.o,
        replayEntities: ab.entityHooks,
        hasPackModel: ub.hasPackModel
      });
      return Hb.attach(bb), FY.set(Hb, ab), mB(Hb.items, ub.audio),
        function(bb) {
          bb.setClientFreeCameraGrant("isDev", !1);
          const ub = ub => {
            bb.setClientFreeCameraGrant("hasDeveloperRank", ub.playerHasRank("developer"))
          };
          (0, Ub.l)("userContextUpdated", ub)
        }(Hb), VY || (VY = !0, (0, Ub.l)("appManagerUpdated|openInGameMenuName", (bb => {
          !bb && (0, Sb.h)().includes(Sb.b) && (0, Sb.j)(Sb.b)
        }))), Hb
    }

    function TY(bb) {
      try {
        bb.closeGame()
      } finally {
        var ub;
        null === (ub = FY.get(bb)) || void 0 === ub || ub.stop(), FY.delete(bb)
      }
    }
  },
  40267: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    const Bb = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40278: (bb, ub, hb) => {
    function Bb() {
      return hb(40282)
    }

    function Ob() {
      return hb(40284)
    }

    function Gb(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    hb.d(ub, {
      e: () => Gb,
      h: () => Bb,
      i: () => Ob
    })
  },
  35925: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      f: () => Sb,
      i: () => Ub,
      l: () => Hb
    });
    var Bb = hb(35912),
      Ob = hb(6);
    const Gb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Ub(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const ub = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof ub && Gb.test(ub)
    }

    function Lb(bb, ub, hb) {
      var Ob;
      const Ub = bb instanceof Error ? bb.name : "thrown",
        Lb = (bb instanceof Error && null !== (Ob = bb.stack) && void 0 !== Ob ? Ob : "").split("\n").filter((bb => Gb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        Yb = null === ub ? "wasm memory unknown" : `wasm memory ${Math.round(ub/2**20)} MB`,
        Sb = null === hb.panic ? "" : `, panic: ${(0,Bb.f)(hb.panic)}`,
        ab = `${Ub}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,Bb.l)(hb.kind,hb.refusedBytes)} ${ab} (${Yb})${Sb}${Lb.length>0?` | ${Lb.join(" < ")}`:""}`
    }
    const Yb = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Sb(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(bb instanceof Error) || !Yb.test(bb.message)) return {};
      if (!("detached" in hb)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Ob.Q)(null === (ub = (0, Ob.K)(hb, "detached")) || void 0 === ub ? void 0 : ub.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const ab = 500;

    function Hb(bb) {
      let ub = "[object Object]";
      try {
        ub = String(bb)
      } catch {}
      if ("[object Object]" !== ub) return ub;
      try {
        var hb, Bb;
        return null !== (hb = null === (Bb = JSON.stringify(bb)) || void 0 === Bb ? void 0 : Bb.slice(0, ab)) && void 0 !== hb ? hb : ub
      } catch {
        return ub
      }
    }
  },
  42014: (bb, ub, hb) => {
    var Bb = {
      "./bedwars/bedwarsClient": [38878, 9],
      "./bridgeBattle/bridgeBattleClient": [38880, 10],
      "./buildAFactory2/buildAFactory2Client": [38117, 73, 72, 71, 220, 237, 11],
      "./classic/classicClient": [38882, 12],
      "./clutch/clutchClient": [38887, 13],
      "./containmentBreach/containmentBreachClient": [38892, 14],
      "./cooking/cookingClient": [39019, 15],
      "./defusal/defusalClient": [39025, 16],
      "./frontline/frontlineClient": [39032, 73, 72, 71, 17],
      "./goalRush/goalRushClient": [39039, 18],
      "./luckyBedwars/luckyBedwarsClient": [39046, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39048, 20],
      "./oneBlock/oneBlockClient": [39055, 21],
      "./plots/plotsClient": [39060, 236, 240, 22],
      "./pvpCiv/pvpCivClient": [39141, 23],
      "./skyIslands/skyIslandsClient": [39150, 24],
      "./skyblock/skyblockClient": [38144, 73, 220, 191, 25],
      "./tsunami/tsunamiClient": [39156, 26]
    };

    function Ob(bb) {
      if (!hb.o(Bb, bb)) return Promise.resolve().then((() => {
        var ub = new Error("Cannot find module '" + bb + "'");
        throw ub.code = "MODULE_NOT_FOUND", ub
      }));
      var ub = Bb[bb],
        Ob = ub[0];
      return Promise.all(ub.slice(1).map(hb.e)).then((() => hb(Ob)))
    }
    Ob.keys = () => Object.keys(Bb), Ob.id = 42014, bb.exports = Ob
  },
  40282: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40284: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35912: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      d: () => Gb,
      f: () => Yb,
      j: () => Ub,
      l: () => Ob
    });
    const Bb = /^alloc_failed (\d+) bytes$/;

    function Ob(bb, ub) {
      return Gb(bb, ub) ? `trap=alloc_failed ${ub} bytes` : `trap=${bb}`
    }

    function Gb(bb, ub) {
      return "unreachable" === bb && ub > 0
    }

    function Ub(bb, ub, hb) {
      const Bb = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== Bb) return {
        kind: Bb,
        panic: null,
        refusedBytes: 0
      };
      const Ob = ub(),
        Gb = hb();
      return {
        kind: Bb,
        panic: Gb > 0 ? null : Ob,
        refusedBytes: Gb
      }
    }
    const Lb = 300;

    function Yb(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, Lb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);