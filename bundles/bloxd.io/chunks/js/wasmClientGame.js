export const id = 53;
export const ids = [53];
export const modules = {
  38560: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      c: () => Wb
    });
    var kb = sb(26);

    function Wb(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function ab(bb, cb) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([sb.e(105), sb.e(106), sb.e(101), sb.e(103), sb.e(210)]).then((() => sb(41138))).then((sb => {
        let {
          runClientGameMessage: kb
        } = sb;
        kb(bb, cb)
      })).catch((cb => {
        console.error(`Game message ${bb} failed`, cb)
      })) : kb.j.QQ("showPetUi", cb) : kb.j.QQ("refetchCode")
    }
  },
  41939: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => Wb
    });
    const kb = ["recording", "freecam", "keyframe"];

    function Wb() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  40231: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub
    });
    const kb = 1 << 20,
      Wb = 1 << 21,
      ab = 1024,
      Tb = 2048;

    function Ub(bb, cb, sb) {
      const Ub = bb + kb,
        Ib = cb + ab,
        Hb = sb + kb;
      return Ub < 0 || Ub >= Wb || Hb < 0 || Hb >= Wb || Ib < 0 || Ib >= Tb ? -1 : (Ub * Wb + Hb) * Tb + Ib
    }
  },
  40223: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      i: () => Tb,
      j: () => Wb,
      l: () => ab,
      n: () => fb,
      p: () => Hb,
      q: () => Ib,
      r: () => Ub
    });
    sb(3230);
    sb(40231);

    function kb(bb) {}

    function Wb(bb) {}

    function ab(bb) {}

    function Tb(bb) {}

    function Ub(bb) {}

    function Ib(bb, cb, sb) {}

    function Hb(bb) {}

    function fb(bb) {}
  },
  8847: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub,
      f: () => Ib
    });
    var kb = sb(19);
    const Wb = 24,
      ab = "farNametags",
      Tb = 1e5;

    function Ub() {
      var bb;
      return null === (bb = kb.d.get("showDistantNametags")) || void 0 === bb || bb
    }

    function Ib() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(ab),
          cb = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(cb) && cb >= 0 ? Math.min(cb, Tb) : null
      }()) && void 0 !== bb ? bb : Ub() ? 0 : Wb
    }
  },
  41933: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      blockIdOf: () => iI.b,
      clearWasmCameraScreen: () => bW,
      creativeItemIds: () => sk.creativeItemIds,
      decodeMapSettings: () => KI,
      drainTextRerasters: () => DU.b,
      enchantmentPerksOf: () => sk.enchantmentPerksOf,
      endGameHost: () => RI,
      followCursorAim: () => GI,
      followMenuPrefs: () => FW,
      loadAudio: () => AI,
      loadClientGame: () => dI,
      loadTextIcons: () => DU.f,
      rasterText: () => PU.c,
      readBoardToEdit: () => EI,
      setTextHost: () => DU.j,
      setTextLocalPlayer: () => DU.n,
      showInCreativeInvenOf: () => sk.showInCreativeInvenOf,
      startGameHost: () => SI,
      startShellAnalytics: () => yI,
      startSkyFeed: () => pU,
      textChanged: () => DU.p,
      warmText: () => PU.d,
      wasmCameraScreen: () => pk
    });
    sb(36164);
    var kb = sb(19),
      Wb = sb(36394),
      ab = sb(38721),
      Tb = sb(26),
      Ub = sb(3177),
      Ib = sb(36388),
      Hb = sb(1287),
      fb = sb(620),
      Mb = sb(37838),
      Xb = sb(4512),
      nb = sb(40070),
      mb = sb(40002);
    const lb = mb.vb / 4,
      Qb = mb.k.PlaySound,
      eb = mb.k.SoundReset,
      Cb = Xb.P.ReplayFailed,
      Nb = Xb.P.RecorderEvent;
    class Vb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = bb, this.memory = cb, this.audio = sb, this.serverIds = new Int32Array(256).fill(mb.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(mb.n.BYTES)), this.renderPtr = 0, this.GM = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new mb.L(bb, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.wkb(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(bb, cb) {
        const sb = this.eventView();
        return new Uint8Array(sb.buffer, sb.byteOffset + bb, cb)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return mb.n.localId(this.apiView, 0)
      }
      localDeaths() {
        return mb.n.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const bb = this.apiView,
          cb = mb.n.entRenderPtr(bb, 0),
          sb = mb.n.entVisPtr(bb, 0),
          kb = mb.n.entCapacity(bb, 0);
        if (cb !== this.renderPtr || sb !== this.visPtr || kb !== this.GM || this.renderBuffer !== this.buffer) {
          this.renderPtr = cb, this.visPtr = sb, this.GM = kb, this.renderBuffer = this.buffer;
          const bb = this.memoryView(Float32Array, cb, kb * lb, "the render array"),
            Wb = this.memoryView(Uint8Array, sb, kb, "the visibility array");
          this.renderCapacity = bb && Wb ? kb : 0, this.render = bb && Wb ? bb : new Float32Array(0), this.vis = bb && Wb ? Wb : new Uint8Array(0)
        }
      }
      memoryView(bb, cb, sb, kb) {
        try {
          return (0, nb.u)(bb, this.memory().buffer, cb, sb, kb)
        } catch (Wb) {
          return this.keepCorruption(Wb), null
        }
      }
      memoryData(bb, cb, sb, kb) {
        try {
          return (0, nb.g)(this.memory().buffer, bb, cb, sb, kb)
        } catch (Wb) {
          return this.keepCorruption(Wb), null
        }
      }
      reportCorruption(bb) {
        this.keepCorruption(new nb.e(bb))
      }
      keepCorruption(bb) {
        if (!(bb instanceof nb.e)) throw bb;
        this.corruption ??= bb
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(bb, cb, sb) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: kb,
          len: Wb
        } = bb;
        this.eventsPtr = kb, this.eventsLen = Wb, this.eventsBuffer = null;
        const ab = this.eventView();
        for (let Hb = 0; Hb < Wb;) {
          const bb = ab.getUint32(Hb, !0),
            sb = 65535 & bb,
            kb = bb >>> 16,
            Wb = Hb + Xb.M;
          if (sb === mb.k.EntitySpawned) {
            var Tb;
            if (kb !== mb.zb.BYTES) throw Jb(sb, Hb, kb);
            const bb = mb.zb.serverId(ab, Wb);
            this.spawned(bb, mb.zb.index(ab, Wb), mb.zb.kind(ab, Wb)), null === (Tb = cb.entityAdded) || void 0 === Tb || Tb.call(cb, bb)
          } else if ((sb === mb.k.ChunkSlot || sb === mb.k.EntityInfoChanged) && !(0, mb.pe)(sb, ab, Wb, kb, cb)) throw Jb(sb, Hb, kb);
          Hb = Wb + (0, Xb.ze)(kb)
        }
        try {
          var Ub;
          null === (Ub = cb.afterPrescan) || void 0 === Ub || Ub.call(cb), this.throwCorruption(), !sb() && this.dispatch(bb, cb, sb) && (this.throwCorruption(), this.applyListener(), cb.afterWalk(bb.kind)), this.throwCorruption()
        } catch (Ib) {
          throw Ib instanceof nb.e && (this.corruption ??= Ib), Ib
        } finally {
          sb() || null !== this.corruption || this.applyDespawns(Wb, cb)
        }
      }
      applyDespawns(bb, cb) {
        const sb = this.eventView();
        for (let Wb = 0; Wb < bb;) {
          const bb = sb.getUint32(Wb, !0),
            ab = Wb + Xb.M;
          if ((65535 & bb) === mb.k.EntityDespawned && bb >>> 16 === mb.zb.BYTES) {
            const bb = mb.zb.serverId(sb, ab);
            var kb;
            if (this.despawned(bb, mb.zb.index(sb, ab))) null === (kb = cb.entityRemoved) || void 0 === kb || kb.call(cb, bb)
          }
          Wb = ab + (0, Xb.ze)(bb >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(bb, cb, sb) {
        const {
          len: kb,
          net: Wb,
          netOffsets: ab
        } = bb;
        let Tb = this.eventView(),
          Ub = 0;
        for (let ub = 0; ub < kb;) {
          const bb = Tb.getUint32(ub, !0),
            kb = 65535 & bb,
            Yb = bb >>> 16,
            gb = ub + Xb.M;
          let Bb = !1;
          if (Ub < Wb.length && ab[Ub] === ub) cb.netEvent(Wb[Ub]), Ub++, Bb = !0;
          else if (kb === Xb.P.LocalPlayerBound) {
            var Ib;
            if (Yb !== Xb.Bb) throw Jb(kb, ub, Yb);
            null === (Ib = cb.localPlayerBound) || void 0 === Ib || Ib.call(cb, Tb.getInt32(gb, !0)), Bb = !0
          } else if (kb === Xb.P.LocalHurt) {
            var Hb;
            if (Yb !== Xb.yb) throw Jb(kb, ub, Yb);
            null === (Hb = cb.localHurt) || void 0 === Hb || Hb.call(cb, Tb.getInt32(gb, !0), Tb.getFloat32(gb + 4, !0), Tb.getUint32(gb + 8, !0)), Bb = !0
          } else if (kb === Xb.P.AttackHit) {
            var fb;
            if (Yb !== Xb.c) throw Jb(kb, ub, Yb);
            const bb = Tb.getFloat32(gb, !0),
              sb = Tb.getFloat32(gb + 4, !0),
              Wb = Tb.getFloat32(gb + 8, !0),
              ab = Tb.getUint32(gb + 12, !0);
            null === (fb = cb.attackHit) || void 0 === fb || fb.call(cb, bb, sb, Wb, 0 !== (ab & Xb.i.Crit), 0 !== (ab & Xb.i.HitSelf))
          } else if (kb === Xb.P.PhysicsType) {
            var Mb;
            if (Yb !== Xb.fc) throw Jb(kb, ub, Yb);
            null === (Mb = cb.physicsType) || void 0 === Mb || Mb.call(cb, Tb.getUint32(gb, !0), Tb.getInt32(gb + 4, !0)), Bb = !0
          } else if (kb === Xb.P.VehicleEffect) {
            var nb;
            const bb = hb(Tb, gb, Yb);
            if (null === bb) throw Jb(kb, ub, Yb);
            null === (nb = cb.vehicleEffect) || void 0 === nb || nb.call(cb, bb.op, bb.name, bb.icon, bb.level, bb.durationMs), Bb = !0
          } else if (kb === Xb.P.ZoomChanged) {
            var lb;
            if (Yb !== Xb.fe) throw Jb(kb, ub, Yb);
            null === (lb = cb.zoomChanged) || void 0 === lb || lb.call(cb, Tb.getFloat32(gb, !0), Tb.getUint8(gb + 4)), Bb = !0
          } else if (kb === Xb.P.ZoomDisabled) {
            var Vb;
            if (0 !== Yb) throw Jb(kb, ub, Yb);
            null === (Vb = cb.zoomDisabled) || void 0 === Vb || Vb.call(cb), Bb = !0
          } else if (kb === Xb.P.GameCamera) {
            var Lb;
            null === (Lb = cb.gameCamera) || void 0 === Lb || Lb.call(cb, new Uint8Array(Tb.buffer, Tb.byteOffset + gb, Yb).slice()), Bb = !0
          } else if (kb === mb.k.ChunkSlot || kb === mb.k.EntityInfoChanged);
          else if (kb >= Qb && kb <= eb) {
            if (this.audio && !this.audio.onAudioEvent(kb, Tb, gb, Yb)) throw Jb(kb, ub, Yb)
          } else if (kb >= Cb && kb <= Nb) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(kb, Tb, gb, Yb)) throw Jb(kb, ub, Yb);
              Bb = !0
            }
          } else if (kb >= mb.nd && kb <= mb.rd && kb !== Xb.P.EnvLighting) {
            if (!(0, mb.pe)(kb, Tb, gb, Yb, cb)) throw Jb(kb, ub, Yb);
            Bb = !0
          }
          if (Bb) {
            if (sb()) return !1;
            Tb = this.eventView()
          }
          ub = gb + (0, Xb.ze)(Yb)
        }
        return !sb()
      }
      applyListener() {
        var bb;
        if (!this.audio) return;
        const cb = mb.n.audioViewPtr(this.apiView, 0),
          sb = this.memory().buffer;
        let kb = this.audioView;
        (null === (bb = kb) || void 0 === bb ? void 0 : bb.buffer) === sb && kb.byteOffset === cb || (kb = (0, nb.g)(sb, cb, mb.q.BYTES, 8, "the audio view"), this.audioView = kb), kb && this.audio.applyListener(kb)
      }
      indexOf(bb) {
        return this.indexById.get("number" === typeof bb ? bb : +bb)
      }
      isLocal(bb) {
        return bb !== mb.ad && bb === mb.n.localId(this.apiView, 0)
      }
      aN(bb) {
        const cb = [0, 0, 0];
        return this.readPosition("number" === typeof bb ? bb : +bb, cb) ? cb : null
      }
      readPosition(bb, cb) {
        const sb = this.apiView;
        if (void 0 !== this.indexById.get(bb) && this.isLocal(bb)) {
          for (let bb = 0; bb < 3; bb++) cb[bb] = mb.n.localPos(sb, 0, bb);
          return !0
        }
        return this.readDrawnPosition(bb, cb)
      }
      readDrawnPosition(bb, cb) {
        const sb = this.apiView,
          kb = this.indexById.get(bb);
        if (void 0 === kb || kb >= this.renderCapacity) return cb[0] = cb[1] = cb[2] = NaN, !1;
        const Wb = kb * lb;
        for (let ab = 0; ab < 3; ab++) cb[ab] = this.render[Wb + ab] + mb.n.origin(sb, 0, ab);
        return !0
      }
      checkValid(bb) {
        return void 0 !== this.indexOf(bb)
      }
      isAlive(bb) {
        const cb = this.indexOf(bb);
        if (void 0 === cb) return null;
        if (this.ensureViews(), cb >= this.renderCapacity) return null;
        const sb = this.vis[cb];
        return 0 === sb ? null : 0 !== (sb & mb.oe.Alive)
      }
      getEntityType(bb) {
        const cb = this.indexOf(bb);
        return void 0 === cb ? this.isLocal("number" === typeof bb ? bb : +bb) ? "Player" : null : ub(this.kinds[cb])
      }
      spawned(bb, cb, sb) {
        if (cb >= 1048576) throw new nb.e(`entity ${bb} spawned at index ${cb}`);
        this.ensureIndex(cb), this.serverIds[cb] === bb && null !== this.idStr[cb] || (this.idStr[cb] = String(bb)), this.serverIds[cb] = bb, this.kinds[cb] = sb, this.indexById.set(bb, cb)
      }
      despawned(bb, cb) {
        let sb = !1;
        return this.indexById.get(bb) === cb && (this.indexById.delete(bb), sb = !0), cb < this.serverIds.length && this.serverIds[cb] === bb && (this.serverIds[cb] = mb.ad, this.kinds[cb] = 0, this.idStr[cb] = null), sb
      }
      ensureIndex(bb) {
        const cb = this.serverIds.length;
        if (bb < cb) return;
        let sb = 2 * cb;
        for (; sb <= bb;) sb *= 2;
        const kb = new Int32Array(sb).fill(mb.ad);
        kb.set(this.serverIds), this.serverIds = kb;
        const Wb = new Uint16Array(sb);
        Wb.set(this.kinds), this.kinds = Wb;
        for (let ab = cb; ab < sb; ab++) this.idStr.push(null)
      }
      eventView() {
        const bb = this.memory().buffer;
        return bb !== this.eventsBuffer && (this.eventsBuffer = bb, this.events = new DataView(bb, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const bb = this.memory().buffer;
        this.buffer = bb, this.viewPtr < 0 && (this.viewPtr = this.core.rkb()), this.view = new DataView(bb, this.viewPtr, mb.n.BYTES), this.rereadDirectory()
      }
    }

    function Lb(bb) {
      return bb >>> mb.b === mb.m.Item
    }

    function ub(bb) {
      var cb, sb;
      const kb = bb & mb.d;
      switch (bb >>> mb.b) {
        case mb.m.Lifeform:
          return null !== (cb = fb.m[kb]) && void 0 !== cb ? cb : null;
        case mb.m.Throwable:
          return null !== (sb = Mb.f[kb]) && void 0 !== sb ? sb : null;
        case mb.m.Mesh:
          return "Mesh";
        case mb.m.Audio:
          return "AudioEntity";
        case mb.m.Item:
          return "Item";
        default:
          return null
      }
    }
    const Yb = new TextDecoder;

    function hb(bb, cb, sb) {
      if (sb < Xb.Ld.HEAD_BYTES) return null;
      const kb = bb.getUint32(cb, !0),
        Wb = bb.getUint32(cb + 20, !0),
        ab = bb.getUint32(cb + 24, !0),
        Tb = Xb.Ld.HEAD_BYTES + (0, Xb.ze)(Wb);
      if (kb !== Xb.Ld.UPDATE && kb !== Xb.Ld.REMOVE || Wb > sb || Tb + ab > sb) return null;
      const Ub = (sb, kb) => Yb.decode(new Uint8Array(bb.buffer, bb.byteOffset + cb + sb, kb)),
        Ib = bb.getFloat64(cb + 12, !0);
      return {
        op: kb,
        level: bb.getFloat64(cb + 4, !0),
        durationMs: Number.isNaN(Ib) ? null : Ib,
        name: Ub(Xb.Ld.HEAD_BYTES, Wb),
        icon: Ub(Tb, ab)
      }
    }

    function Jb(bb, cb, sb) {
      return new nb.e(`event ${bb} at ${cb} of ${sb} bytes`)
    }
    var gb = sb(344),
      Bb = sb(1235),
      tb = sb(38560),
      yb = sb(1889),
      Pb = sb(40143),
      Db = sb(1832),
      Eb = sb(38744),
      ib = sb(38776),
      Ob = sb(38756),
      Gb = sb(40054),
      Kb = sb(2310),
      Zb = sb(38735),
      zb = sb(38769);
    const qb = Math.max(mb.nb.BYTES, mb.fb.BYTES, mb.ib.BYTES);

    function db(bb) {
      if (!(0, zb.d)(bb)) return null;
      const cb = Number(bb);
      return (0 | cb) === cb ? cb : null
    }
    class Ab {
      constructor(bb) {
        this.api = bb, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Zb.o)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.ia = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = mb.ad, this.localName = String(mb.ad), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.ia = null;
        const bb = this.api.queries.directorView() >= mb.nb.BYTES ? this.scratchView() : null;
        null !== bb && (this.defaultFov = (0, Db.r)(mb.nb.fov(bb, 0)), this.baseFov = (0, Db.r)(mb.nb.baseFov(bb, 0)), this.aspect = mb.nb.aspect(bb, 0), this.bodyHeading = mb.nb.bodyHeading(bb, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(bb) {
        this.viewHeading = bb
      }
      get localPlayerId() {
        const bb = mb.n.localId(this.api.apiView, 0);
        return bb !== this.localId && (this.localId = bb, this.localName = String(bb)), this.localName
      }
      getEntityPosition(bb) {
        return this.readEntity(bb) ? this.entityFeet : null
      }
      getEntityAimPoint(bb) {
        return this.readEntity(bb) ? this.entityAim : null
      }
      getEntityHeading(bb) {
        const cb = db(bb);
        if (null === cb) return null;
        const sb = mb.n.localId(this.api.apiView, 0);
        return cb === sb && sb !== mb.ad ? this.viewHeading : this.readEntity(bb) ? this.entityHeading : null
      }
      raycastTerrain(bb, cb, sb) {
        const kb = this.api.queries.cameraSweep(bb[0], bb[1], bb[2], cb[0], cb[1], cb[2], sb);
        return kb < sb - 1e-6 ? kb : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const bb = this.defaultPose;
        bb.fov = this.defaultFov;
        const cb = this.api.queries.directorDefaultPose() >= mb.fb.BYTES ? this.scratchView() : null;
        if (null === cb) return bb;
        for (let sb = 0; sb < 3; sb++) bb.position[sb] = mb.fb.eye(cb, 0, sb);
        return bb.heading = mb.fb.heading(cb, 0), bb.pitch = mb.fb.pitch(cb, 0), bb
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
        const cb = db(bb);
        if (null === cb) return !1;
        if (cb === this.ia) return this.entityLive;
        this.ia = cb;
        const sb = this.api.queries.directorEntity(cb) >= mb.ib.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== sb, null === sb) return !1;
        for (let kb = 0; kb < 3; kb++) this.entityFeet[kb] = mb.ib.feet(sb, 0, kb), this.entityAim[kb] = this.entityFeet[kb];
        return this.entityAim[1] += mb.ib.eyeHeight(sb, 0), this.entityHeading = mb.ib.heading(sb, 0), !0
      }
      scratchView() {
        const bb = this.api.scratch(),
          cb = this.api.memory().buffer,
          sb = this.scratch;
        return null !== sb && sb.buffer === cb && sb.byteOffset === bb ? sb : (this.scratch = this.api.memoryData(bb, qb, 8, "the director's record"), this.scratch)
      }
    }
    const wb = {
        mode: "default"
      },
      rb = {
        show: () => {},
        clear: () => {}
      };

    function ob() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Sb {
      constructor(bb) {
        this.options = bb, this.fX = void 0, this.director = void 0, this.latest = wb, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          Eu: 0,
          bY: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.ml = new Int32Array(3 * mb.Vd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * mb.Vd), this.fX = new Ab(bb.api), this.director = new Ob.d(this.fX)
      }
      settingsChanged(bb) {
        let cb = wb;
        if (bb.length > 0) try {
          cb = (0, Gb.d)(bb)
        } catch {}
        this.latest = cb, this.pending = cb
      }
      call(bb, cb, sb, kb, Wb, ab) {
        var Tb, Ub;
        let Ib;
        this.holding = !1;
        try {
          Ib = this.answer(bb, cb, sb, kb, Wb, ab)
        } catch (Xb) {
          var Hb, fb;
          throw this.answeredPose = !1, null === (Hb = (fb = this.options).showFacing) || void 0 === Hb || Hb.call(fb, null), Xb
        }
        const Mb = this.answeredPose && 0 === (kb & mb.mb.Held);
        return this.answeredPose = Ib !== mb.eb.None, this.holding = this.answeredPose && !Mb, null === (Tb = (Ub = this.options).showFacing) || void 0 === Tb || Tb.call(Ub, this.holding ? this.facing : null), Ib
      }
      holdsView() {
        return this.holding
      }
      answer(bb, cb, sb, kb, Wb, ab) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          fX: Tb
        } = this;
        Tb.readView();
        if (0 !== (kb & mb.mb.Held) || Tb.setViewHeading((0, Eb.q)(Tb.bodyHeading)), void 0 !== this.pending) {
          const bb = this.pending;
          this.pending = void 0, this.director.setSettings(bb), this.syncShownSettings()
        }
        this.readLook((0, Kb.f)(cb), (0, Kb.f)(sb), kb, (0, Kb.f)(Wb), (0, Kb.f)(ab));
        const Ub = this.director.update(bb / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Ub) return mb.eb.None;
        const [Ib, Hb, fb] = Ub.position;
        if (0 === this.options.api.queries.directorPose(Ib, Hb, fb, (0, Eb.q)(Ub.heading), (0, Eb.f)(Ub.pitch), (0, Db.i)(Ub.fov))) return mb.eb.None;
        if ("default" === this.director.getSettings().mode) return mb.eb.Pose;
        switch (this.facing) {
          case "camera":
            return mb.eb.FaceCamera;
          case "cursor":
            return mb.eb.FaceCursor;
          default:
            return mb.eb.FaceMovement
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
        var bb, cb;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Ob.d(this.fX), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (bb = (cb = this.options).showFacing) || void 0 === bb || bb.call(cb, null), this.setCentres(0)
      }
      syncShownSettings() {
        const bb = this.director.getSettings();
        if (bb === this.shownSettings) return;
        this.shownSettings = bb;
        const cb = (0, ib.e)(bb);
        this.facing = cb.facing, this.mouseTurns = cb.mouseTurns
      }
      readLook(bb, cb, sb, kb, Wb) {
        const ab = this.look,
          Tb = 0 !== (sb & mb.mb.LookPointed);
        if (null === this.mouseTurns && !Tb) return ab.Eu = 0, ab.bY = 0, void(ab.pointedAt = void 0);
        let Ub;
        Tb && (this.pointedAt.heading = kb, this.pointedAt.pitch = Wb, Ub = this.pointedAt);
        const {
          fX: Ib
        } = this;
        Ib.setViewHeading((0, ib.b)(Ib.getViewHeading(), bb, cb, Ub, "look" === this.mouseTurns, ab))
      }
      writeCentres(bb) {
        const cb = this.next,
          sb = Math.min(bb.length, mb.Vd);
        for (let kb = 0; kb < sb; kb++)
          for (let sb = 0; sb < 3; sb++) cb[3 * kb + sb] = Math.floor(bb[kb][sb] / mb.u);
        this.setCentres(sb)
      }
      setCentres(bb) {
        const {
          ml: cb,
          next: sb
        } = this;
        let kb = bb === this.centresLen;
        for (let Wb = 0; kb && Wb < 3 * bb; Wb++) kb = cb[Wb] === sb[Wb];
        kb || (cb.fill(0), cb.set(sb.subarray(0, 3 * bb)), this.centresLen = bb, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const bb = this.options.cmd();
        null !== bb && (0, mb.Ef)(bb, 0, this.ml, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var bb, cb, sb;
        return null !== (bb = null === (cb = (sb = this.options).screen) || void 0 === cb ? void 0 : cb.call(sb)) && void 0 !== bb ? bb : rb
      }
      hidden() {
        var bb;
        return (null !== (bb = this.options.isPageHidden) && void 0 !== bb ? bb : ob)()
      }
      now() {
        var bb, cb, sb;
        return null !== (bb = null === (cb = (sb = this.options).now) || void 0 === cb ? void 0 : cb.call(sb)) && void 0 !== bb ? bb : performance.now()
      }
    }
    var Rb = sb(40231);
    const vb = mb.u * mb.u * mb.u,
      Fb = Math.log2(mb.u),
      xb = mb.u - 1,
      jb = mb.C.BYTES / 4,
      pb = new Uint16Array(vb);

    function bc(bb, cb, sb) {
      return bb * mb.u * mb.u + cb * mb.u + sb
    }
    class cc {
      constructor(bb) {
        this.chunk = bb
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(bb, cb, sb) {
        return bc(bb, cb, sb)
      }
    }
    class sc {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class kc {
      constructor(bb, cb, sb, kb) {
        this.table = bb, this.slot = cb, this.generation = sb, this.epoch = kb, this.zX = new cc(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = pb, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Xl() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get dn() {
        const bb = this.gameVoxels(),
          cb = this.layers ??= new Uint16Array(mb.u);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let sb = 0; 0 !== this.staleLayers; sb++) {
          const kb = 1 << sb;
          0 !== (this.staleLayers & kb) && (this.staleLayers &= ~kb, cb[sb] = Wc(bb, sb))
        }
        return cb
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const bb = this.voxelData(),
          cb = this.writes;
        if (null === cb || 0 === cb.ids.size) return bb;
        if (cb.from !== bb) {
          const sb = cb.patched ??= new Uint16Array(vb);
          sb.set(bb);
          for (const [bb, kb] of cb.ids) sb[bb] = kb;
          cb.from = bb
        }
        return cb.patched
      }
      written(bb) {
        var cb;
        return null === (cb = this.writes) || void 0 === cb ? void 0 : cb.ids.get(bb)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(bb, cb, sb) {
        const kb = this.writes ??= new sc;
        kb.ids.set(bb, cb), sb && kb.cleared.add(bb), null !== kb.from && (kb.patched[bb] = cb);
        const Wb = 1 << (bb >> Fb & xb);
        kb.layers |= Wb, this.staleLayers |= Wb, this.writeCount++
      }
      clearWrites() {
        const bb = this.writes;
        null !== bb && (this.staleLayers |= bb.layers, bb.ids.clear(), bb.cleared.clear(), bb.layers = 0, bb.from = null)
      }
      dataCleared(bb) {
        var cb;
        return !0 === (null === (cb = this.writes) || void 0 === cb ? void 0 : cb.cleared.has(bb))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const bb = this.table.slotWords(),
          cb = this.slot * jb;
        if (this.epoch !== this.table.epoch || cb + jb > bb.length || 0 === bb[cb + 3] || bb[cb + 2] !== this.generation) return this.data = pb, this.dataPtr = 0, pb;
        this.version = bb[cb + 1];
        const sb = bb[cb + 0],
          kb = bb.buffer;
        return sb === this.dataPtr && kb === this.dataBuffer || (this.dataPtr = sb, this.dataBuffer = kb, this.data = this.table.voxelsAt(kb, sb)), this.data
      }
    }

    function Wc(bb, cb) {
      const sb = bb[cb * mb.u];
      for (let kb = 0; kb < mb.u; kb++) {
        const Wb = bc(kb, cb, 0);
        for (let cb = 0; cb < mb.u; cb++)
          if (bb[Wb + cb] !== sb) return 65535
      }
      return sb
    }
    const ac = new Uint32Array(0);

    function Tc(bb, cb, sb) {
      return bc(bb & xb, cb & xb, sb & xb)
    }
    class Uc {
      constructor(bb, cb) {
        this.memory = bb, this.apiView = cb, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = ac, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = ac, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(bb, cb, sb, kb, Wb, ab) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, ab === mb.F.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (ab !== mb.F.Stored && ab !== mb.F.Unloaded) throw new nb.e(`ChunkSlot flags ${ab}`);
        const Tb = (0, Rb.c)(bb, cb, sb);
        if (Tb < 0) return;
        if (ab === mb.F.Unloaded) return void this.chunks.delete(Tb);
        const Ub = this.chunks.get(Tb);
        (null === Ub || void 0 === Ub ? void 0 : Ub.slot) === kb && Ub.generation === Wb || this.chunks.set(Tb, new kc(this, kb, Wb, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const bb = this.apiView(),
          cb = mb.n.chunkSlotsPtr(bb, 0),
          sb = mb.n.chunkSlotsLen(bb, 0);
        cb === this.slotsPtr && sb === this.slotsLen || (this.slotsPtr = cb, this.slotsLen = sb, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const bb = this.apiView(),
          cb = mb.n.walkThroughPtr(bb, 0),
          sb = mb.n.walkThroughLen(bb, 0);
        cb === this.walkPtr && sb === this.walkLen || (this.walkPtr = cb, this.walkLen = sb, this.walkBuffer = null, this.walkWords())
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
        var cb;
        bb !== this.slotsBuffer && (this.slotsBuffer = bb, this.slots = null !== (cb = (0, nb.u)(Uint32Array, bb, this.slotsPtr, this.slotsLen * jb, "the chunk directory")) && void 0 !== cb ? cb : ac);
        return this.slots
      }
      voxelsAt(bb, cb) {
        try {
          var sb;
          return null !== (sb = (0, nb.u)(Uint16Array, bb, cb, vb, "a chunk's voxels")) && void 0 !== sb ? sb : pb
        } catch (kb) {
          if (!(kb instanceof nb.e)) throw kb;
          return this.corruption ??= kb, pb
        }
      }
      chunk(bb, cb, sb) {
        var kb;
        return null !== (kb = this.chunks.get((0, Rb.c)(bb, cb, sb))) && void 0 !== kb ? kb : null
      }
      isLoaded(bb, cb, sb) {
        return void 0 !== this.chunkAt(Math.floor(bb), Math.floor(cb), Math.floor(sb))
      }
      Jf(bb, cb, sb) {
        var kb;
        const Wb = Math.floor(bb),
          ab = Math.floor(cb),
          Tb = Math.floor(sb),
          Ub = this.chunkAt(Wb, ab, Tb);
        if (!Ub) return 0;
        const Ib = Tc(Wb, ab, Tb);
        return null !== (kb = Ub.written(Ib)) && void 0 !== kb ? kb : Ub.voxelData()[Ib]
      }
      setOverlay(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ab = this.chunkAt(bb, cb, sb);
        return !!ab && (ab.hasWrites() || this.written.push(ab), ab.write(Tc(bb, cb, sb), kb, Wb), !0)
      }
      version(bb, cb, sb) {
        var kb, Wb;
        return null !== (kb = null === (Wb = this.chunks.get((0, Rb.c)(bb, cb, sb))) || void 0 === Wb ? void 0 : Wb.Xl) && void 0 !== kb ? kb : null
      }
      scan(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        const Ib = mb.u;
        let Hb = 0;
        for (let fb = Math.floor(cb / Ib); fb * Ib < Wb; fb++) {
          const Mb = fb * Ib,
            Xb = Math.min(Wb - Mb, Ib);
          for (let Wb = Math.floor(bb / Ib); Wb * Ib < kb; Wb++) {
            const nb = Wb * Ib,
              mb = Math.min(kb - nb, Ib);
            for (let kb = Math.floor(sb / Ib); kb * Ib < ab; kb++) {
              const lb = this.chunks.get((0, Rb.c)(Wb, fb, kb));
              if (!lb) continue;
              const Qb = kb * Ib,
                eb = Math.max(sb - Qb, 0),
                Cb = Math.min(ab - Qb, Ib),
                Nb = lb.dn,
                Vb = lb.gameVoxels();
              for (let sb = Math.max(cb - Mb, 0); sb < Xb; sb++) {
                const cb = Nb[sb];
                if (65535 === cb || 0 !== Tb[cb]) {
                  Hb++;
                  for (let cb = Math.max(bb - nb, 0); cb < mb; cb++) {
                    const bb = bc(cb, sb, 0);
                    for (let kb = eb; kb < Cb; kb++) {
                      const Wb = Vb[bb + kb];
                      0 !== Tb[Wb] && Ub.push(nb + cb, Mb + sb, Qb + kb, Wb)
                    }
                  }
                }
              }
            }
          }
        }
        return Hb
      }
      dataCleared(bb, cb, sb) {
        var kb;
        const Wb = Math.floor(bb),
          ab = Math.floor(cb),
          Tb = Math.floor(sb);
        return !0 === (null === (kb = this.chunkAt(Wb, ab, Tb)) || void 0 === kb ? void 0 : kb.dataCleared(Tc(Wb, ab, Tb)))
      }
      isWalkThrough(bb) {
        if (!Number.isInteger(bb) || bb < 0 || bb > 65535) return !1;
        const cb = this.walkWords(),
          sb = bb >>> 5;
        return sb < cb.length && 1 === (cb[sb] >>> (31 & bb) & 1)
      }
      walkWords() {
        const bb = this.memory().buffer;
        var cb;
        bb !== this.walkBuffer && (this.walkBuffer = bb, this.walk = null !== (cb = (0, nb.u)(Uint32Array, bb, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== cb ? cb : ac);
        return this.walk
      }
      chunkAt(bb, cb, sb) {
        if ((0 | bb) !== bb || (0 | cb) !== cb || (0 | sb) !== sb) return;
        const kb = (0, Rb.c)(bb >> Fb, cb >> Fb, sb >> Fb);
        return kb !== this.lastKey && (this.lastKey = kb, this.lastChunk = this.chunks.get(kb)), this.lastChunk
      }
    }
    var Ic = sb(38117),
      Hc = sb(37403),
      fc = sb(36372),
      Mc = sb(36258),
      Xc = sb(8867),
      nc = sb(38684),
      mc = sb(223);
    const lc = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      Qc = [
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
      ec = Qc.map((bb => {
        let [cb] = bb;
        return cb
      })),
      Cc = Uint8Array.from(Qc, (bb => {
        let [, cb] = bb;
        return cb
      })),
      Nc = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Vc = 8;
    var Lc = sb(36367),
      uc = sb(287);
    const Yc = 2 ** lc.length - 1;
    class hc {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uc.b;
        this.sheet = bb, this.onError = cb, this.idle = sb, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = bb => {
          this.cancelIdle = null;
          try {
            if (bb.timeRemaining() >= 1) {
              let bb = this.queue.shift();
              for (; void 0 !== bb && !this.load(bb);) bb = this.queue.shift()
            }
          } catch (cb) {
            this.onError(cb)
          } finally {
            this.schedule()
          }
        }
      }
      preload(bb) {
        const cb = bb & Yc & ~this.asked;
        if (0 !== cb) {
          this.asked |= cb;
          for (let bb = 0; bb < lc.length; bb++) cb & 1 << bb && this.queue.push(bb);
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
        const cb = this.sheet(bb, !1),
          sb = this.sheet(bb, !0),
          [kb, Wb] = "unloaded" === cb.state() && "unloaded" !== sb.state() ? [sb, cb] : [cb, sb],
          ab = this.gen,
          Tb = () => {
            try {
              ab === this.gen && "unloaded" === Wb.state() && Wb.load()
            } catch (bb) {
              this.onError(bb)
            }
          },
          Ub = kb.state();
        return "unloaded" === Ub ? (kb.once("load", Tb), kb.load(), !0) : "unloaded" === Wb.state() && ("loading" === Ub ? (kb.once("load", Tb), !1) : (Wb.load(), !0))
      }
    }
    var Jc = sb(40342);
    const gc = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Bc = mc.e.JC * mc.e.playerEyeToHeightRatio,
      tc = [0, 0, -1, 0, 1, 0],
      yc = lc.indexOf("note");

    function Pc(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }

    function Dc(bb) {
      var cb;
      let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const kb = function(bb) {
        let cb = 0,
          sb = ec.length;
        for (; cb < sb;) {
          const kb = cb + sb >>> 1;
          ec[kb] < bb ? cb = kb + 1 : sb = kb
        }
        return cb
      }(bb);
      if ("" === bb || null === (cb = ec[kb]) || void 0 === cb || !cb.startsWith(bb)) return -1;
      if (ec[kb] === bb) return kb;
      let Wb = kb + 1;
      for (; Wb < ec.length && ec[Wb].startsWith(bb);) Wb++;
      return kb + Math.floor(sb() * (Wb - kb))
    }
    class Ec {
      constructor(bb, cb, sb, kb, Wb) {
        this.group = bb, this.loudness = cb, this.startMs = sb, this.howl = kb, this.host = Wb, this.id = 0, this.direct = !1
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
    class ic {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          kb = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = bb, this.listener = cb, this.now = sb, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Lc.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: bb => this.aliveVoice(bb),
          started: bb => this.started.has(bb),
          drop: bb => {
            var cb;
            null === (cb = this.live.get(bb)) || void 0 === cb || cb.howl.stop(bb), this.forget(bb)
          }
        }, this.handlers = {
          playSound: (bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) => {
            if (kb >= ec.length) return;
            const Hb = 0 !== (Wb & mb.fe.Loop);
            Wb & mb.fe.TwoD ? this.start(kb, !1, Tb, ab, Ub, Hb) : this.startSpatial(kb, Tb, ab, Ub, Hb, bb, cb, sb, Ib, this.earDistSq(bb, cb, sb))
          },
          soundPos: (bb, cb, sb, kb) => {
            const Wb = this.core.get(kb);
            var ab;
            void 0 !== Wb && (null === (ab = this.live.get(Wb)) || void 0 === ab || ab.howl.pos(sb, cb, bb, Wb))
          },
          soundSet: (bb, cb, sb, kb) => {
            const Wb = this.core.get(bb),
              ab = void 0 === Wb ? void 0 : this.live.get(Wb);
            void 0 !== Wb && ab && (this.setRel(Wb, cb), ab.rate = sb, ab.howl.rate(sb, Wb), ab.spatial && ab.howl.pannerAttr({
              refDistance: kb
            }, Wb))
          },
          soundFade: (bb, cb, sb, kb) => {
            const Wb = this.core.get(bb);
            void 0 !== Wb && this.fade(Wb, cb, sb, 0 !== (kb & mb.ce.StopAfter))
          },
          soundStop: bb => {
            const cb = this.core.get(bb);
            var sb;
            void 0 !== cb && (null === (sb = this.live.get(cb)) || void 0 === sb || sb.howl.stop(cb), this.forget(cb))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new hc(((bb, cb) => this.sheet(bb, cb)), (bb => {
          this.errors++, console.error("Audio preload failed", bb)
        }), kb)
      }
      prepare() {
        for (let bb = 0; bb < lc.length; bb++) this.sheet(bb, !1), this.sheet(bb, !0)
      }
      preload(bb) {
        this.loader.preload(bb)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(bb, cb, sb, kb) {
        if (bb < mb.k.PlaySound || bb > mb.k.SoundReset) return !1;
        try {
          return (0, mb.pe)(bb, cb, sb, kb, this.handlers)
        } catch (Wb) {
          return this.errors++, console.error("Audio event failed", Wb), !0
        }
      }
      applyListener(bb) {
        const cb = this.nextPose;
        for (let kb = 0; kb < 3; kb++) cb[2 - kb] = mb.q.listener(bb, 0, kb), cb[5 - kb] = mb.q.forward(bb, 0, kb), cb[8 - kb] = mb.q.up(bb, 0, kb);
        0 === cb[3] && 0 === cb[4] && 0 === cb[5] && cb.set(this.posed ? this.pose.subarray(3) : tc, 3);
        for (let kb = 0; kb < 9; kb++)
          if (!Number.isFinite(cb[kb])) return;
        const sb = this.pose;
        if (this.posed) {
          let bb = !0;
          for (let kb = 0; kb < 9 && bb; kb++) bb = cb[kb] === sb[kb];
          if (bb) return
        }
        this.listener.apply(cb) && (sb.set(cb), this.posed = !0)
      }
      playGame(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = Dc(bb);
        if (Ub < 0) return Jc.b;
        if (!sb) {
          const {
            howl: bb,
            id: sb
          } = this.start(Ub, !1, cb, 0, 1, Tb);
          return this.gameSound(bb, sb, !1)
        }
        const Ib = sb[0],
          Hb = sb[1] + Bc,
          fb = sb[2];
        if (!Number.isFinite(Ib) || !Number.isFinite(Hb) || !Number.isFinite(fb)) return Jc.b;
        let Mb;
        if (kb) {
          const bb = Ib - kb[0],
            cb = Hb - kb[1],
            sb = fb - kb[2];
          if (Mb = bb * bb + cb * cb + sb * sb, Mb > Wb * Wb) return Jc.b
        } else Mb = this.earDistSq(Ib, Hb, fb);
        const Xb = this.startSpatial(Ub, cb, 0, 1, Tb, Ib, Hb, fb, ab, Mb);
        return Xb ? this.gameSound(Xb.howl, Xb.id, !0) : Jc.b
      }
      setMaster(bb, cb) {
        this.level = Pc(bb);
        const sb = cb ? this.level : 0;
        if (sb !== this.master) {
          this.master = sb;
          for (const [bb, cb] of this.live) cb.fadeMs = 0, cb.gain = cb.rel * this.master, cb.howl.volume(cb.gain, bb)
        }
      }
      stopCore() {
        for (const cb of [...this.core.values()]) {
          var bb;
          null === (bb = this.live.get(cb)) || void 0 === bb || bb.howl.stop(cb)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [bb, cb] of [...this.live]) cb.howl.stop(bb), this.forget(bb);
        this.core.clear()
      }
      gameSound(bb, cb, sb) {
        const kb = {
          stop: () => (this.live.has(cb) && bb.stop(cb), kb),
          fade: (bb, sb, Wb) => {
            var ab, Tb;
            const Ub = this.level > 0 ? sb / this.level : sb > 0 && null !== (ab = null === (Tb = this.live.get(cb)) || void 0 === Tb ? void 0 : Tb.rel) && void 0 !== ab ? ab : 0;
            return this.fade(cb, Ub, Wb, !1), kb
          },
          rate: sb => {
            const Wb = this.live.get(cb);
            return Wb && (Wb.rate = function(bb) {
              return bb > 0 && bb < 1 / 0 ? bb : 1
            }(sb), bb.rate(Wb.rate, cb)), kb
          },
          getVolume: () => {
            var bb, sb;
            return (null !== (bb = null === (sb = this.live.get(cb)) || void 0 === sb ? void 0 : sb.rel) && void 0 !== bb ? bb : 0) * this.level
          },
          getRelativeVolume: () => {
            var bb, sb;
            return null !== (bb = null === (sb = this.live.get(cb)) || void 0 === sb ? void 0 : sb.rel) && void 0 !== bb ? bb : 0
          },
          setRelativeVolume: bb => (this.setRel(cb, bb), kb),
          setPannerAttr: Wb => {
            if (sb && this.live.has(cb)) {
              const sb = {
                ...gc,
                refDistance: fc.l
              };
              for (const [bb, cb] of Object.entries(Wb)) "number" !== typeof cb && "string" !== typeof cb || (sb[bb] = cb);
              bb.pannerAttr({
                coneOuterAngle: sb.coneOuterAngle
              }, cb), bb.pannerAttr(sb, cb)
            }
            return kb
          },
          setPosition: Wb => (sb && this.live.has(cb) && Number.isFinite(Wb[0] + Wb[1] + Wb[2]) && bb.pos(Wb[2], Wb[1], Wb[0], cb), kb)
        };
        return kb
      }
      startSpatial(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        const fb = this.sheet(Cc[bb], !0);
        let Mb = null;
        if (!Wb) {
          if (this.failed.has(fb)) return null;
          const sb = Cc[bb] === yc ? null : (0, Lc.e)(ec[bb]),
            kb = (0, Lc.d)(Pc(cb), Math.sqrt(Hb), Ib);
          if (Mb = new Ec(sb, kb, this.now(), fb, this.voiceHost), !this.voices.admit(Mb)) return null
        }
        const Xb = this.start(bb, !0, cb, sb, kb, Wb);
        return Mb && (Mb.id = Xb.id, Mb.direct = "loaded" === fb.state() && !fb._playLock), fb.pannerAttr({
          coneOuterAngle: 360
        }, Xb.id), fb.pannerAttr({
          ...gc,
          refDistance: Ib
        }, Xb.id), fb.pos(Ub, Tb, ab, Xb.id), Xb
      }
      aliveVoice(bb) {
        const cb = this.live.get(bb);
        if (!cb) return;
        const sb = cb.howl._soundById(bb);
        if (sb && !sb._ended) return cb;
        this.forget(bb)
      }
      earDistSq(bb, cb, sb) {
        if (!this.posed) return 0;
        const kb = bb - this.pose[2],
          Wb = cb - this.pose[1],
          ab = sb - this.pose[0];
        return kb * kb + Wb * Wb + ab * ab
      }
      start(bb, cb, sb, kb, Wb, ab) {
        const Tb = Pc(sb),
          Ub = this.sheet(Cc[bb], cb);
        "unloaded" === Ub.state() && Ub.load();
        const Ib = Ub.play(ec[bb]),
          Hb = Tb * this.master;
        return Ub.volume(Hb, Ib), this.live.set(Ib, {
          howl: Ub,
          rel: Tb,
          gain: Hb,
          fadeFrom: Hb,
          fadeAt: 0,
          fadeMs: 0,
          rate: Wb,
          handle: kb,
          spatial: cb,
          stopTimer: void 0
        }), 0 !== kb && this.core.set(kb, Ib), 1 !== Wb && Ub.rate(Wb, Ib), ab && Ub.loop(!0, Ib), {
          howl: Ub,
          id: Ib
        }
      }
      sheet(bb, cb) {
        const sb = 2 * bb + (cb ? 1 : 0);
        let kb = this.sheets.get(sb);
        if (!kb) {
          const Wb = this.createHowl(lc[bb], cb);
          Wb.on("end", (bb => {
            Wb.loop(bb) || this.forget(bb)
          })), Wb.on("stop", (bb => {
            this.forget(bb)
          })), Wb.on("play", (bb => {
            this.live.has(bb) && this.started.add(bb)
          })), Wb.on("loaderror", (bb => {
            if ("loaded" !== Wb.state()) {
              this.failed.add(Wb);
              for (const [bb, cb] of this.live) cb.howl === Wb && this.forget(bb)
            } else "number" === typeof bb && this.forget(bb)
          })), this.sheets.set(sb, Wb), kb = Wb
        }
        return kb
      }
      setRel(bb, cb) {
        const sb = this.live.get(bb);
        sb && (Oc(sb), sb.fadeMs = 0, sb.rel = Pc(cb), sb.gain = sb.rel * this.master, sb.howl.volume(sb.gain, bb))
      }
      fade(bb, cb, sb, kb) {
        const Wb = this.live.get(bb);
        if (!Wb) return;
        Oc(Wb);
        const {
          howl: ab
        } = Wb, Tb = this.gainNow(Wb);
        Wb.rel = Pc(cb), Wb.gain = Wb.rel * this.master;
        const Ub = sb > 0 ? Math.min(sb, 65535) : 0,
          Ib = 0 === Ub || Tb === Wb.gain;
        Wb.fadeMs = Ib ? 0 : Ub, Ib ? ab.volume(Wb.gain, bb) : (Wb.fadeFrom = Tb, Wb.fadeAt = this.now(), ab.fade(Tb, Wb.gain, Ub, bb)), kb && (Ib ? ab.stop(bb) : Wb.stopTimer = setTimeout((() => {
          Wb.stopTimer = void 0, ab.stop(bb)
        }), Ub))
      }
      gainNow(bb) {
        if (bb.fadeMs > 0) {
          const cb = (this.now() - bb.fadeAt) / bb.fadeMs;
          if (cb < 1) return bb.fadeFrom + (bb.gain - bb.fadeFrom) * Math.max(0, cb);
          bb.fadeMs = 0
        }
        return bb.gain
      }
      forget(bb) {
        this.started.delete(bb);
        const cb = this.live.get(bb);
        cb && (Oc(cb), this.live.delete(bb), 0 !== cb.handle && this.core.get(cb.handle) === bb && this.core.delete(cb.handle))
      }
    }

    function Oc(bb) {
      void 0 !== bb.stopTimer && (clearTimeout(bb.stopTimer), bb.stopTimer = void 0)
    }
    var Gc = sb(40035),
      Kc = sb(38691);
    class Zc {
      constructor(bb, cb, sb, kb) {
        this.key = bb, this.model = cb, this.host = kb, this.GM = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.xkb = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Em = !1, this.GM = Math.max(1, Math.ceil(sb)), this.records = new Float32Array(this.GM * Ic.b), this.isDirty = new Uint8Array(this.GM), this.tail = new Uint8Array(this.GM * mb.rc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(kb.cmd())
      }
      setOrigin(bb, cb, sb) {
        this.origin[0] = bb, this.origin[1] = cb, this.origin[2] = sb
      }
      markDirty(bb) {
        !this.Em && bb >= 0 && bb < this.GM && bb < mb.rc.Max && this.sl(bb, bb + 1)
      }
      commit(bb) {
        if (this.Em) return;
        (bb = Math.min(Math.max(Math.floor(bb), 0), this.GM, mb.rc.Max)) > this.count && this.sl(this.count, bb), this.count = bb;
        const {
          origin: cb,
          sentOrigin: sb,
          dirtyList: kb
        } = this, Wb = this.xkb !== bb, ab = sb[0] !== cb[0] || sb[1] !== cb[1] || sb[2] !== cb[2];
        if (0 === kb.length && !Wb && !ab) return;
        const Tb = this.host.cmd();
        if (!Tb || !this.make(Tb)) return;
        const Ub = kb.length,
          {
            records: Ib,
            tailView: Hb
          } = this;
        for (let fb = 0; fb < Ub; fb++) {
          const bb = kb[fb],
            cb = bb * Ic.b,
            sb = fb * mb.rc.Bytes,
            Wb = 0 !== Ib[cb + Ic.e] ? mb.rc.Hidden : 0;
          Hb.setUint32(sb, (bb | Wb) >>> 0, !0), Hb.setFloat32(sb + 4, Ib[cb], !0), Hb.setFloat32(sb + 8, Ib[cb + 1], !0), Hb.setFloat32(sb + 12, Ib[cb + 2], !0)
        }
        if ((0, mb.Pe)(Tb, 0, this.key, bb, cb, Ub, this.tailOf(Ub))) {
          for (let bb = 0; bb < Ub; bb++) this.isDirty[kb[bb]] = 0;
          kb.length = 0, this.xkb = bb, sb[0] = cb[0], sb[1] = cb[1], sb[2] = cb[2]
        }
      }
      grow(bb) {
        (bb = Math.ceil(bb)) <= this.GM || this.Em || (this.records = (0, Kc.c)(this.records, new Float32Array(bb * Ic.b)), this.isDirty = (0, Kc.c)(this.isDirty, new Uint8Array(bb)), this.tail = new Uint8Array(bb * mb.rc.Bytes), this.tailView = new DataView(this.tail.buffer), this.GM = bb)
      }
      dispose() {
        this.Em || (this.Em = !0, this.host.Em(this, this.made ? this.key : null))
      }
      make(bb) {
        if (!this.made && bb) {
          const {
            item: cb,
            scale: sb,
            yaw: kb
          } = this.model;
          this.made = (0, mb.Te)(bb, 0, this.key, cb, sb, kb)
        }
        return this.made
      }
      tailOf(bb) {
        const cb = bb * mb.rc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === cb || (this.tailCut = this.tail.subarray(0, cb)), this.tailCut
      }
      sl(bb, cb) {
        const {
          dirtyList: sb,
          isDirty: kb
        } = this;
        for (let Wb = bb; Wb < cb; Wb++) 0 === kb[Wb] && (kb[Wb] = 1, sb.push(Wb))
      }
    }
    var zc = sb(624);
    class qc {
      constructor(bb) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: bb,
          owes: bb => {
            this.owing.add(bb)
          },
          settled: (bb, cb) => {
            this.owing.delete(bb), cb && this.live.delete(bb)
          }
        }
      }
      create(bb, cb) {
        if (sb = bb, !zc.l.includes(sb)) return null;
        var sb;
        const kb = new dc(++this.keys, fb.m.indexOf(bb), cb, this.host);
        return this.live.add(kb), kb
      }
      disposeAll() {
        for (const bb of [...this.live]) bb.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const bb = this.host.cmd();
        for (const cb of this.owing)
          if (!cb.sync(bb)) return
      }
    }
    class dc {
      constructor(bb, cb, sb, kb) {
        this.key = bb, this.lifeform = cb, this.scale = sb, this.host = kb, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Em = !1, this.sync()
      }
      setPose(bb, cb) {
        this.Em || (this.feet[0] = bb[0], this.feet[1] = bb[1], this.feet[2] = bb[2], this.yaw = cb, this.owed |= 2, this.sync())
      }
      setVisible(bb) {
        this.Em || bb === this.visible || (this.visible = bb, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Em || (this.Em = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(bb) ? (this.host.settled(this, this.Em), !0) : (this.host.owes(this), !1)
      }
      write(bb) {
        if (!bb) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, mb.Ze)(bb, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const cb = (2 & this.owed ? mb.Tc.Pose : 0) | (4 & this.owed ? mb.Tc.Visible : 0);
        if (0 !== cb) {
          if (!(0, mb.Xe)(bb, 0, this.key, cb, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, mb.Ue)(bb, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Ac = sb(40488);

    function wc(bb, cb, sb, kb) {
      return (0, Ac.e)(), (0, mb.Gf)(bb, cb, sb, kb)
    }
    var rc = sb(38696),
      oc = sb(40020);
    const Sc = [0, 0, 0],
      Rc = [0, 0, 0],
      vc = [0, 0, 0],
      Fc = [0, 0, 0],
      xc = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      jc = [0, 0, 0],
      pc = [0, 0],
      bs = [1, 1, 1],
      cs = 1 / 3;
    const ss = Hc.f;

    function ks(bb) {
      const cb = Hc.d[bb],
        sb = cb && Hc.f[cb.mainMultiblock];
      return sb && {
        main: sb,
        x: cb.compX,
        y: cb.compY,
        z: cb.compZ
      }
    }

    function Ws(bb) {
      if (null === bb || void 0 === bb) return mb.ad;
      const cb = +bb;
      return Number.isInteger(cb) && cb >= -2147483648 && cb <= 2147483647 && String(cb) === String(bb) ? cb : mb.ad
    }

    function as(bb, cb, sb) {
      return (0, mb.Of)(bb, 0, cb, null !== sb && void 0 !== sb ? sb : Number.NaN)
    }
    class Ts {
      constructor(bb) {
        this.deps = bb, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new rc.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (bb => {
          var cb, sb;
          null === (cb = (sb = this.deps).setLocalOptions) || void 0 === cb || cb.call(sb, bb)
        })), this.mobModels = new qc((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Em: (bb, cb) => {
            this.livePools.delete(bb), null !== cb && (this.owedFrees.push(cb), this.flushOwed())
          }
        }, this.api = bb.api, this.live = bb.live, this.chunks = bb.chunks, this.items = bb.items, this.tables = bb.tables
      }
      isLocal(bb) {
        return null !== bb && void 0 !== bb && +bb === this.api.localId
      }
      assertLocal(bb, cb) {
        if (!this.isLocal(bb)) throw new Error(`Attempted to ${cb} for a player that is not the local player`)
      }
      aN(bb) {
        const cb = this.api.aN(bb);
        if (!cb) throw new Error(`Entity ${bb} has no replicated position`);
        return cb
      }
      checkValid(bb) {
        return !!this.deps.isSessionLive() && (null === bb || void 0 === bb || this.api.checkValid(bb))
      }
      isAlive(bb) {
        return !1 !== this.api.isAlive(bb)
      }
      getItemStat(bb, cb, sb) {
        return this.isLocal(bb) || null !== bb && "Player" === this.api.getEntityType(bb) ? this.tables.getItemStat(cb, sb) : this.tables.getDefaultItemStat(cb, sb)
      }
      getClientOption(bb, cb) {
        return this.assertLocal(bb, "get a client option"), this.tables.getClientOption(cb)
      }
      openShop(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(bb, "open shop"), Tb.j.QQ("showShopFromServer", {
          toggle: cb,
          Lc: sb
        }, !0)
      }
      sendMessage(bb, cb, sb) {
        this.assertLocal(bb, "send a message");
        const kb = "string" === typeof cb ? [{
          str: cb,
          style: sb
        }] : cb;
        Tb.j.QQ("chat", {
          content: kb
        }, !0)
      }
      getEntityType(bb) {
        return this.api.getEntityType(bb)
      }
      getEntityName(bb) {
        const cb = Ws(bb);
        return cb === mb.ad ? void 0 : (0, Gc.j)(this.api, cb)
      }
      hasEffect(bb, cb) {
        const sb = Ws(bb);
        return sb !== mb.ad && (0, Gc.g)(this.api, sb, cb)
      }
      getMetaInfo(bb) {
        return this.tables.getMetaInfo(bb)
      }
      getPlayerDbId(bb) {
        return this.assertLocal(bb, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(bb, cb, sb) {
        if (!this.chunks.dataCleared(bb, cb, sb)) return (0, Gc.e)(this.api, bb, cb, sb)
      }
      Tu(bb, cb, sb, kb) {
        this.setBlockId(bb, cb, sb, this.tables.getItemId(kb))
      }
      setOtherEntitySetting(bb, cb, sb, kb) {
        if (!this.isLocal(bb)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(mb.md, sb)) throw new Error(`Unknown other-entity setting ${sb}`);
        const Wb = mb.md[sb],
          ab = Ws(cb);
        if (ab === mb.ad || !this.deps.beforeWrite()) return;
        const Tb = (0, Gb.f)(kb);
        if (Tb.length > 16384) throw new Error(`The other-entity setting ${sb}'s value is over 16384 bytes`);
        const Ub = this.api.memoryView(Uint8Array, this.api.scratch(), Tb.length, "set_other_entity_setting's value");
        Ub && (Ub.set(Tb), this.api.queries.setOtherEntitySetting(ab, Wb, Tb.length))
      }
      getPositionView(bb) {
        return this.live.position(+bb)
      }
      readDrawnPosition(bb, cb) {
        return this.api.readDrawnPosition(Ws(bb), cb)
      }
      getDrawnHeading(bb) {
        const cb = Ws(bb),
          sb = (cb === mb.ad ? 0 : this.api.queries.directorEntity(cb)) >= mb.ib.BYTES ? this.api.memoryData(this.api.scratch(), mb.ib.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!sb) return null;
        if (1 === mb.ib.headingIsDrawn(sb, 0)) return mb.ib.heading(sb, 0);
        const kb = this.api.apiView;
        return this.isLocal(bb) && 0 === (mb.n.playerFlags(kb, 0) & mb.Nd.FreeCam) ? mb.n.heading(kb, 0) : null
      }
      getLocalPlayerMovement() {
        const bb = mb.n.playerFlags(this.api.apiView, 0);
        return 0 === (bb & mb.Nd.Replay) && this.api.readDrawnPosition(this.api.localId, vc) ? {
          onGround: 0 !== (bb & mb.Nd.OnGround),
          jumpHeld: 0 !== (bb & mb.Nd.JumpHeld)
        } : null
      }
      Xcb(bb) {
        return this.isLocal(bb) ? this.items.qU() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var bb, cb;
        return "Gun" === (null === (bb = this.aliveHeld()) || void 0 === bb || null === (cb = bb.typeObj) || void 0 === cb ? void 0 : cb.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.qU()
      }
      isCrosshairShown() {
        var bb, cb;
        const sb = (0, Mc.e)(kb.d.get("crosshairGameView"), kb.d.get("crosshairShownOverride"));
        if (null !== sb) return sb;
        const Wb = null === (bb = this.aliveHeld()) || void 0 === bb ? void 0 : bb.typeObj,
          ab = "Gun" === (null === Wb || void 0 === Wb ? void 0 : Wb.type),
          Tb = ab || !0 === (null === Wb || void 0 === Wb ? void 0 : Wb.showsAimingUi),
          Ub = 0 === (mb.n.playerFlags(this.api.apiView, 0) & mb.Nd.ZoomFirstPerson),
          Ib = null !== (cb = this.tables.getClientOption("gunshotOrigin")) && void 0 !== cb ? cb : null;
        return (0, Mc.k)({
          gun: ab,
          aimable: Tb
        }, Ub, (0, Xc.c)(), Ib)
      }
      setCrosshairShown(bb) {
        kb.d.set({
          crosshairShownOverride: bb
        })
      }
      getInventoryFreeSlotCount(bb) {
        return this.isLocal(bb) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(bb) {
        return this.isLocal(bb) ? this.items.selectedSlot : null
      }
      getItemSlot(bb, cb) {
        return this.isLocal(bb) ? this.items.slot(cb) : null
      }
      swapInventorySlots(bb, cb) {
        return this.items.swap(bb, cb)
      }
      isPlayerCrouching(bb) {
        if (this.isLocal(bb)) return 0 !== (mb.n.playerFlags(this.api.apiView, 0) & mb.Nd.Crouching);
        const cb = Ws(bb);
        return cb !== mb.ad && 1 === this.api.queries.entityCrouching(cb)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (mb.n.playerFlags(this.api.apiView, 0) & mb.Nd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.E_()
      }
      getActionRay() {
        const bb = this.api.apiView;
        for (let cb = 0; cb < 3; cb++) xc.origin[cb] = mb.n.kbb(bb, 0, cb), xc.direction[cb] = mb.n.actionDir(bb, 0, cb);
        return xc
      }
      canModifyBlockAt(bb, cb, sb) {
        return 1 === this.api.queries.canModify(bb, cb, sb)
      }
      isSolidToPlayerBlockId(bb) {
        return this.tables.isSolidBlockId(bb) && !this.chunks.isWalkThrough(bb)
      }
      blockNameToBlockId(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(bb, cb)
      }
      blockIdToBlockName(bb) {
        return this.tables.nameOfId(bb)
      }
      ybb(bb, cb, sb, kb, Wb) {
        return 1 === this.api.queries.terrainBlocked(kb, bb, cb, sb, Ws(null !== Wb && void 0 !== Wb ? Wb : null))
      }
      getChunkVersion(bb, cb, sb) {
        return this.chunks.version(bb, cb, sb)
      }
      scanBlocks(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        return this.chunks.scan(bb, cb, sb, kb, Wb, ab, Tb, Ub)
      }
      isBlockInLoadedChunk(bb, cb, sb) {
        return this.chunks.isLoaded(bb, cb, sb)
      }
      getBlockId(bb, cb, sb) {
        return this.chunks.Jf(bb, cb, sb)
      }
      playSound(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(bb)) return null;
        const Tb = this.playSoundFrom(cb, sb, Wb, ab);
        return 1 === kb ? Tb : Tb.rate(kb)
      }
      playSoundFrom(bb, cb, sb, kb) {
        var Wb, ab;
        const Tb = this.deps.playSound;
        if (!Tb) return Jc.b;
        const Ub = null === sb || void 0 === sb ? void 0 : sb.ca,
          Ib = null !== (Wb = null === sb || void 0 === sb ? void 0 : sb.maxHearDist) && void 0 !== Wb ? Wb : fc.h,
          Hb = null !== (ab = null === sb || void 0 === sb ? void 0 : sb.refDistance) && void 0 !== ab ? ab : fc.l;
        let fb = null;
        if (Array.isArray(Ub)) Sc[0] = Ub[0], Sc[1] = Ub[1], Sc[2] = Ub[2], fb = Sc;
        else if (void 0 !== Ub && null !== Ub) {
          const bb = Ws(Ub);
          if (!this.api.isLocal(bb)) {
            if (!this.api.readPosition(bb, Sc)) return Jc.b;
            fb = Sc
          }
        }
        return Tb(bb, cb, fb, fb && this.ear(), Ib, Hb, kb)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Rc)) Rc[1] += Bc;
        else {
          const bb = this.api.apiView;
          if (0 === mb.n.viewProj(bb, 0, 3) && 0 === mb.n.viewProj(bb, 0, 7) && 0 === mb.n.viewProj(bb, 0, 11)) return null;
          for (let cb = 0; cb < 3; cb++) Rc[cb] = mb.n.eye(bb, 0, cb)
        }
        return Number.isFinite(Rc[0] + Rc[1] + Rc[2]) ? Rc : null
      }
      setBlockId(bb, cb, sb, kb) {
        if (!Number.isInteger(kb) || kb < 0 || kb > 65535) throw new Error(`Invalid block id ${kb}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(bb, cb, sb)) return;
        const Wb = Math.floor(bb),
          ab = Math.floor(cb),
          Tb = Math.floor(sb),
          Ub = this.predictedCells(Wb, ab, Tb, kb);
        if (1 === this.api.queries.Tu(Wb, ab, Tb, kb)) {
          for (let bb = 0; bb < Ub.length; bb += 5) this.chunks.setOverlay(Ub[bb], Ub[bb + 1], Ub[bb + 2], Ub[bb + 3], 1 === Ub[bb + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(bb, cb) {
        return this.deps.particles.create(bb, cb)
      }
      playParticleEffect(bb) {
        this.deps.particles.playEffect(bb)
      }
      burstParticlePreset(bb, cb, sb) {
        this.deps.particles.burstPreset(bb, cb, sb)
      }
      createGameMesh(bb, cb, sb) {
        const kb = ++this.meshKeys,
          Wb = this.deps.cmd();
        if (!Wb) return kb;
        const {
          look: ab,
          colour: Tb
        } = function(bb) {
          switch (bb.kind) {
            case void 0:
            case "flatEmissive":
              return bb.onTop ? {
                look: mb.Qb.FlatOnTop,
                colour: [...bb.rgb, bb.alpha]
              } : bb.opaque ? {
                look: mb.Qb.FlatOpaque,
                colour: [...bb.rgb, 1]
              } : {
                look: mb.Qb.Flat,
                colour: [...bb.rgb, bb.alpha]
              };
            case "chevronPath":
              return {
                look: mb.Qb.Chevrons, colour: [...(0, nc.c)(bb.colour), bb.alpha]
              };
            case "furnaceFire":
              return {
                look: mb.Qb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(cb), Ub = Math.floor(bb.positions.length / 3), Ib = function(bb, cb) {
          const sb = Math.floor(bb.positions.length / 3),
            kb = bb.indices.length,
            Wb = sb * (cb ? 5 : 3),
            ab = new Uint8Array(4 * (Wb + kb)),
            Tb = new DataView(ab.buffer);
          for (let Hb = 0; Hb < 3 * sb; Hb++) Tb.setFloat32(4 * Hb, bb.positions[Hb], !0);
          if (cb) {
            var Ub;
            const cb = null !== (Ub = bb.uvs) && void 0 !== Ub ? Ub : [];
            for (let bb = 0; bb < 2 * sb; bb++) {
              var Ib;
              Tb.setFloat32(4 * (3 * sb + bb), null !== (Ib = cb[bb]) && void 0 !== Ib ? Ib : 0, !0)
            }
          }
          for (let Hb = 0; Hb < kb; Hb++) Tb.setUint32(4 * (Wb + Hb), bb.indices[Hb], !0);
          return ab
        }(bb, (0, Ic.g)(cb));
        return (0, mb.He)(Wb, 0, kb, ab, Tb, sb, Ub, bb.indices.length, Ib) && this.liveMeshes.add(kb), kb
      }
      setGameMesh(bb, cb) {
        var sb;
        const kb = this.deps.cmd();
        if (!kb) return;
        let Wb = 0;
        cb.anchor && (Wb |= mb.Ub.Anchor, jc[0] = cb.anchor[0], jc[1] = cb.anchor[1], jc[2] = cb.anchor[2]), void 0 !== cb.visible && (Wb |= mb.Ub.Visible), cb.uvOffset && (Wb |= mb.Ub.UvOffset, pc[0] = cb.uvOffset[0], pc[1] = cb.uvOffset[1]);
        const ab = null !== (sb = cb.visibility) && void 0 !== sb ? sb : 1;
        void 0 !== cb.visibility && (Wb |= mb.Ub.Visibility), cb.scale && (Wb |= mb.Ub.Scale, bs[0] = cb.scale[0], bs[1] = cb.scale[1], bs[2] = cb.scale[2]), 0 !== Wb && (0, mb.Me)(kb, 0, bb, Wb, cb.visible ? 1 : 0, jc, pc, ab, bs)
      }
      disposeGameMesh(bb) {
        const cb = this.deps.cmd();
        cb && !(0, mb.Ie)(cb, 0, bb) || this.liveMeshes.delete(bb)
      }
      hasPackModel(bb) {
        var cb, sb, kb;
        return null !== (cb = null === (sb = (kb = this.deps).hasPackModel) || void 0 === sb ? void 0 : sb.call(kb, bb)) && void 0 !== cb && cb
      }
      disposeGameOutput() {
        const bb = bb => {
          try {
            bb()
          } catch (cb) {
            console.error("Error freeing client game output", cb)
          }
        };
        for (const cb of [...this.liveMeshes]) bb((() => {
          this.disposeGameMesh(cb)
        }));
        for (const cb of [...this.livePools]) bb((() => {
          cb.dispose()
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
      createInstancePool(bb, cb) {
        const sb = this.tables.idOf(bb.item);
        if (void 0 === sb) return null;
        const kb = new Zc(++this.poolKeys, {
          item: sb,
          scale: bb.scale,
          yaw: bb.yaw
        }, cb, this.poolHost);
        return this.livePools.add(kb), kb
      }
      createMobModel(bb, cb) {
        return this.mobModels.create(bb, cb)
      }
      setRouteChevrons(bb) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !bb || 0 === bb.cells.length) return;
        const cb = `${bb.colour} ${bb.alpha}`;
        cb !== this.routeLook && (this.routeLook = cb, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(bb) {
          const [cb, sb, kb] = bb[0].pos, Wb = [], ab = [], Tb = [];
          return bb.forEach(((bb, Ub) => {
            let {
              pos: Ib,
              way: [Hb, fb]
            } = bb;
            const Mb = Ib[0] - cb + .5,
              Xb = Ib[1] - sb + .04,
              nb = Ib[2] - kb + .5,
              [mb, lb] = [.35 * -fb, .35 * Hb],
              [Qb, eb] = [Ub * cs, (Ub + 1) * cs],
              Cb = Wb.length / 3;
            Wb.push(Mb - .5 * Hb + mb, Xb, nb - .5 * fb + lb), Wb.push(Mb - .5 * Hb - mb, Xb, nb - .5 * fb - lb), Wb.push(Mb + .5 * Hb + mb, Xb, nb + .5 * fb + lb), Wb.push(Mb + .5 * Hb - mb, Xb, nb + .5 * fb - lb), ab.push(0, Qb, 1, Qb, 0, eb, 1, eb), Tb.push(Cb, Cb + 1, Cb + 2, Cb + 1, Cb + 3, Cb + 2)
          })), {
            positions: Wb,
            uvs: ab,
            indices: Tb
          }
        }(bb.cells), {
          kind: "chevronPath",
          colour: bb.colour,
          alpha: bb.alpha
        }, bb.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(bb) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(bb, 250) / 1e3 * 1.2 * cs) % 1, this.setRouteSlide())
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
        const cb = this.deps.cmd();
        if (!cb) return bb.length = 0, void(this.pendingFar = void 0);
        let sb = 0;
        for (; sb < bb.length && (0, mb.Re)(cb, 0, bb[sb]);) sb++;
        bb.splice(0, sb);
        const kb = this.pendingStyle;
        if (void 0 !== kb) {
          (kb ? (0, mb.Rf)(cb, 0, kb.width, kb.alpha, 1, kb.endAtSolidFace ? 1 : 0) : (0, mb.Rf)(cb, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Wb = this.pendingFar;
        void 0 !== Wb && (0, mb.Kf)(cb, 0, null !== Wb && void 0 !== Wb ? Wb : 0, null === Wb ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(bb, cb) {
        const sb = this.deps.cmd(),
          kb = Ws(bb);
        sb && kb !== mb.ad && (0, mb.$f)(sb, 0, kb, cb)
      }
      setFacingTolerance(bb, cb) {
        const sb = this.deps.cmd(),
          kb = Ws(bb);
        sb && kb !== mb.ad && as(sb, kb, cb)
      }
      forEachEntity(bb) {
        const {
          api: cb
        } = this;
        for (let sb = 0; sb < cb.idStr.length; sb++) {
          const kb = cb.idStr[sb];
          null === kb || Lb(cb.kinds[sb]) || bb(kb)
        }
      }
      getEntityInfo(bb) {
        return this.deps.entityInfo.get(bb)
      }
      isEntityInteractable(bb) {
        const cb = Ws(bb);
        return cb !== mb.ad && 1 === this.api.queries.entityInteractable(cb)
      }
      isLocalPlayer(bb) {
        return this.isLocal(bb)
      }
      getLineOwner(bb) {
        var cb;
        const sb = null === (cb = this.deps.entityInfo.get(bb)) || void 0 === cb ? void 0 : cb.meshOpts;
        if (!sb) return null;
        try {
          const {
            lineToEId: bb
          } = JSON.parse(sb);
          return null !== bb && void 0 !== bb ? bb : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const bb = this.api.apiView;
        return Fc[0] = mb.n.eye(bb, 0, 0), Fc[1] = mb.n.eye(bb, 0, 1), Fc[2] = mb.n.eye(bb, 0, 2), Fc
      }
      getCameraFar() {
        return mb.n.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(bb) {
        null !== bb && (this.farSet = !0), this.pendingFar = bb, this.flushOwed()
      }
      turnCamera(bb, cb) {
        this.cameraTurn.turn(bb, cb)
      }
      clearPickupDelay(bb) {
        const cb = this.deps.cmd(),
          sb = Ws(bb);
        cb && sb !== mb.ad && (0, mb.se)(cb, 0, sb)
      }
      sendChat(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = this.deps.sendCmd();
        sb && wc(sb, 0, oc.c.Chat, (0, Gb.f)((0, oc.m)({
          jT: bb,
          pT: cb
        })))
      }
      sendCommand(bb) {
        bb.length <= 119 && this.sendChat(`/${bb}`)
      }
      predictedCells(bb, cb, sb, kb) {
        const Wb = this.chunks,
          ab = [],
          Tb = (bb, cb, sb, kb, Wb) => {
            ab.push(bb, cb, sb, kb, this.tables.blockRootId(Wb) === this.tables.blockRootId(kb) ? 0 : 1)
          },
          Ub = Wb.Jf(bb, cb, sb),
          Ib = ks(Ub);
        if (Ib) {
          const [kb, ab, Hb] = [bb - Ib.x, cb - Ib.y, sb - Ib.z], fb = ss[Wb.Jf(kb, ab, Hb)], Mb = null === fb || void 0 === fb ? void 0 : fb.positions.some((bb => bb.id === Ub && bb.x === Ib.x && bb.y === Ib.y && bb.z === Ib.z));
          for (const bb of (Mb && fb ? fb : Ib.main).positions) Wb.Jf(kb + bb.x, ab + bb.y, Hb + bb.z) === bb.id && Tb(kb + bb.x, ab + bb.y, Hb + bb.z, 0, bb.id)
        }
        const Hb = ks(kb);
        if (Hb)
          for (const Mb of Hb.main.positions) {
            const [kb, ab, Ub] = [bb + Mb.x - Hb.x, cb + Mb.y - Hb.y, sb + Mb.z - Hb.z];
            Tb(kb, ab, Ub, Mb.id, Wb.Jf(kb, ab, Ub))
          } else Tb(bb, cb, sb, kb, Ub);
        const fb = this.tables;
        if ((0 !== fb.attachedTopOf(Ub) || 0 !== fb.attachedTopOf(kb)) && Wb.isLoaded(bb, cb + 1, sb)) {
          let Ib = Wb.Jf(bb, cb + 1, sb);
          for (let kb = 0; kb < ab.length; kb += 5) ab[kb] === bb && ab[kb + 1] === cb + 1 && ab[kb + 2] === sb && (Ib = ab[kb + 3]);
          const Hb = this.attachedTopWrite(Ub, kb, Ib);
          void 0 !== Hb && Tb(bb, cb + 1, sb, Hb, Ib)
        }
        return ab
      }
      attachedTopWrite(bb, cb, sb) {
        const kb = this.tables,
          Wb = kb.attachedTopOf(bb),
          ab = kb.attachedTopOf(cb),
          Tb = 0 !== Wb && 0 !== sb && kb.blockRootId(sb) === kb.blockRootId(Wb);
        return 0 !== Wb && 0 !== ab && kb.blockRootId(bb) === kb.blockRootId(cb) ? Tb && sb !== ab ? ab : void 0 : 0 === ab || !Tb && 0 !== sb ? Tb ? 0 : void 0 : ab
      }
    }
    const Us = mb.lc + mb.nc * mb.wc.BYTES,
      Is = 2147483647,
      Hs = new TextDecoder,
      fs = new TextEncoder,
      Ms = Object.freeze({
        tf: 0,
        TM: null,
        amountAddedToSlot: 0
      }),
      Xs = new Proxy({}, {
        get: () => () => mb.ld
      });

    function ns(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 65535
    }

    function ms(bb) {
      return Number.isInteger(bb) && bb >= 0 && bb <= 4294967295
    }
    class ls {
      constructor(bb) {
        this.deps = bb, this.XT = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(mb.nc), this.ids = new Uint16Array(mb.nc), this.amounts = new Uint16Array(mb.nc), this.attrRead = new Float64Array(mb.nc).fill(-1), this.stale = new Uint16Array(mb.nc), this.staleVersion = new Uint32Array(mb.nc), this.instances = new Uint32Array(mb.nc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var cb;
        return Number.isInteger(bb) && bb >= 0 && bb < this.len && 0 !== this.ids[bb] && null !== (cb = this.facades[bb]) && void 0 !== cb ? cb : null
      }
      qU() {
        return this.slot(this.selected)
      }
      playerItems() {
        const bb = [];
        for (let cb = 0; cb < Math.min(mb.ud, this.len); cb++) bb.push(this.slot(cb));
        return bb
      }
      freeSlots() {
        let bb = 0;
        for (let cb = 0; cb < Math.min(mb.ud - mb.g, this.len); cb++) 0 === this.ids[cb] && bb++;
        return bb
      }
      amountOf(bb) {
        let cb = 0;
        for (let kb = 0; kb < Math.min(mb.ud, this.len); kb++) {
          const Wb = this.slot(kb);
          var sb;
          if ((null === Wb || void 0 === Wb ? void 0 : Wb.name) === bb) cb += null !== (sb = Wb.amount) && void 0 !== sb ? sb : 1
        }
        return cb
      }
      instance(bb) {
        var cb;
        return null !== (cb = this.instances[bb]) && void 0 !== cb ? cb : 0
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
          for (const sb of [...this.listeners]) try {
            sb()
          } catch (cb) {
            bb(cb)
          }
        }
      }
      chestOpened(bb, cb, sb) {
        this.XT[0] = bb, this.XT[1] = cb, this.XT[2] = sb, this.version++
      }
      refresh() {
        const bb = this.deps.api.apiView,
          cb = mb.n.inventoryViewPtr(bb, 0),
          sb = mb.n.inventoryVersion(bb, 0),
          kb = mb.n.selectedSlot(bb, 0);
        kb !== this.selected && (this.selected = kb, this.version++);
        const Wb = mb.n.slotIcon(bb, 0);
        if (Wb !== this.slotIconId && (this.slotIconId = Wb, this.iconChanged = !0), cb === this.viewPtr && sb === this.viewVersion) return;
        this.viewPtr = cb, this.viewVersion = sb;
        const ab = this.deps.api.memoryData(cb, Us, 4, "the inventory view"),
          Tb = ab ? Math.min(ab.getUint32(0, !0), mb.nc) : 0;
        Tb !== this.len && (this.len = Tb, this.version++);
        let Ub = 0;
        for (let Ib = 0; Ib < mb.nc; Ib++) {
          const bb = mb.lc + Ib * mb.wc.BYTES,
            cb = null !== ab && Ib < Tb ? mb.wc.item(ab, bb) : 0;
          if (0 === cb || null === ab) {
            0 !== this.ids[Ib] && (this.ids[Ib] = 0, this.attrRead[Ib] = -1, this.instances[Ib]++, this.version++);
            continue
          }
          const sb = mb.wc.amount(ab, bb),
            kb = mb.wc.attrVersion(ab, bb);
          cb === this.ids[Ib] && sb === this.amounts[Ib] || this.fill(Ib, cb, sb), kb !== this.attrRead[Ib] && (this.stale[Ub] = Ib, this.staleVersion[Ub] = kb, Ub++)
        }
        Ub > 0 && this.fetchAttributes(Ub)
      }
      fill(bb, cb, sb) {
        const {
          tables: kb
        } = this.deps, Wb = cb !== this.ids[bb];
        let ab = this.facades[bb];
        ab || (ab = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[bb] = ab), Wb && (ab.name = kb.nameOfId(cb), ab.typeObj = kb.itemType(cb), ab.attributes = {
          customAttributes: {}
        }, this.attrRead[bb] = -1, this.instances[bb]++), ab.amount = 0 === sb ? null : sb, this.ids[bb] = cb, this.amounts[bb] = sb, this.version++
      }
      fetchAttributes(bb) {
        const {
          api: cb,
          onError: sb
        } = this.deps, kb = cb.memoryView(Uint16Array, cb.scratch(), bb, "item_attributes_batch's slots");
        if (!kb) return void this.markRead(bb);
        kb.set(this.stale.subarray(0, bb));
        const Wb = cb.queries.itemAttributesBatch(bb),
          ab = 4294967295 === Wb ? null : cb.memoryData(cb.scratch(), Wb, 4, "item_attributes_batch's answer");
        if (!ab) return void this.markRead(bb);
        const Tb = new Uint8Array(ab.buffer, ab.byteOffset, Wb);
        for (let Ib = 0; Ib + 8 <= Wb;) {
          const bb = ab.getUint16(Ib, !0),
            cb = ab.getUint32(Ib + 4, !0),
            kb = Tb.subarray(Ib + 8, Ib + 8 + cb);
          Ib += 8 + (0, Xb.ze)(cb);
          const Wb = this.facades[bb];
          if (Wb && 0 !== this.ids[bb] && 0 !== cb) {
            try {
              Wb.attributes = JSON.parse(Hs.decode(kb))
            } catch (Ub) {
              sb(Ub)
            }
            this.version++
          }
        }
        this.markRead(bb)
      }
      markRead(bb) {
        for (let cb = 0; cb < bb; cb++) this.attrRead[this.stale[cb]] = this.staleVersion[cb]
      }
      swap(bb, cb) {
        return ns(bb) && ns(cb) && this.settle(this.queries().invSwap(bb, cb))
      }
      move(bb, cb, sb) {
        return ns(bb) && ns(cb) && ms(sb) && this.settle(this.queries().invMove(bb, cb, sb))
      }
      quickMove(bb, cb, sb, kb) {
        var Wb, ab;
        if (!ns(bb) || !ns(cb) || !ns(sb) || null !== kb && !ms(kb)) return null;
        const Tb = this.queries().invQuickMove(bb, cb, sb, null === kb ? -1 : Math.min(kb, Is)),
          Ub = Tb === mb.ld ? mb.wb : null !== (Wb = null === (ab = this.extras()) || void 0 === ab ? void 0 : ab[1]) && void 0 !== Wb ? Wb : mb.wb;
        return this.settle(Tb), Ub === mb.wb ? null : Ub
      }
      remove(bb, cb, sb) {
        return ns(bb) && ms(cb) && this.settle(this.queries().invRemove(bb, cb, sb ? 1 : 0))
      }
      selectSlot(bb) {
        return ns(bb) && this.settle(this.queries().selectSlot(bb))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(bb, cb, sb) {
        if (!ns(bb) || !Number.isInteger(cb)) return !1;
        const [kb, Wb, ab] = sb;
        return this.settle(this.queries().invEnchant(bb, cb, Math.floor(kb), Math.floor(Wb), Math.floor(ab)))
      }
      craft(bb, cb, sb) {
        let kb;
        try {
          kb = this.deps.tables.getItemId(bb)
        } catch {
          return Ms
        }
        if (!ns(cb) || null !== sb && (Number.isNaN(sb) || sb < 0)) return Ms;
        const Wb = null === sb || sb > Is ? -1 : Math.floor(sb),
          ab = this.queries().craft(kb, cb, Wb);
        let Tb = Ms;
        const Ub = ab === mb.ld ? null : this.extras();
        if (Ub) {
          const [bb, cb, sb] = Ub;
          Tb = {
            tf: bb,
            TM: cb === mb.wb ? null : cb,
            amountAddedToSlot: sb
          }
        }
        return this.settle(ab), Tb
      }
      salvage(bb, cb, sb) {
        let kb;
        try {
          kb = this.deps.tables.getItemId(cb)
        } catch {
          return !1
        }
        return ns(bb) && Number.isInteger(sb) && this.settle(this.queries().salvage(bb, kb, Math.max(Math.min(sb, Is), -Is)))
      }
      craftingView(bb, cb, sb) {
        var kb;
        if (this.stopped) return null;
        const {
          api: Wb,
          onError: ab
        } = this.deps, Tb = bb ? fs.encode(bb) : null;
        if (null !== Tb) {
          if (Tb.length > 1024) return ab(new Error(`The crafting station ${bb}'s name is over 1024 bytes`)), null;
          const cb = Wb.memoryView(Uint8Array, Wb.scratch(), Tb.length, "crafting_view's station");
          if (!cb) return null;
          cb.set(Tb)
        }
        const Ub = ns(cb) && ns(sb),
          Ib = Wb.queries.craftingView(null !== (kb = null === Tb || void 0 === Tb ? void 0 : Tb.length) && void 0 !== kb ? kb : 0, Ub ? cb : 0, Ub ? sb : 0);
        return Ib < mb.db.BYTES ? (Wb.reportCorruption(`crafting_view's answer of ${Ib} bytes`), null) : Wb.memoryData(Wb.scratch(), Ib, 1, "crafting_view's answer")
      }
      queries() {
        var bb, cb;
        return !1 === (null === (bb = (cb = this.deps).beforeOp) || void 0 === bb ? void 0 : bb.call(cb)) ? (this.stopped = !0, Xs) : this.deps.api.queries
      }
      extras() {
        const {
          api: bb
        } = this.deps;
        return bb.memoryView(Uint32Array, bb.scratch(), 3, "a sync query's extra words")
      }
      settle(bb) {
        if (bb === mb.hd)(0, Ac.e)();
        else if (bb !== mb.ld) {
          const cb = this.deps.cmd();
          cb && function(bb, cb, sb) {
            return (0, Ac.e)(), (0, mb.mg)(bb, cb, sb)
          }(cb, 0, bb) || this.deps.onError(new Error(`Sync op ${bb}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), bb !== mb.ld
      }
    }
    const Qs = 1 / .6,
      es = [0, 1, 0],
      Cs = [0, 0, 0],
      Ns = new Uint8Array(0),
      Vs = 1.2 * mc.e.YC,
      Ls = new TextEncoder,
      us = [0, 0, 0],
      Ys = [0, 0, 0],
      hs = new Map;

    function gs(bb) {
      let cb = hs.get(bb);
      return cb || (hs.size >= 64 && hs.clear(), cb = Ls.encode(`{"emitRate":${bb}}`), hs.set(bb, cb)), cb
    }

    function Bs(bb) {
      return Number.isFinite(bb) && bb > 0 ? bb : 0
    }

    function ts(bb, cb) {
      for (let sb = 0; sb < 3; sb++) {
        const kb = Math.abs(cb[sb]);
        us[sb] = bb[sb] - kb, Ys[sb] = 2 * kb
      }
      return Number.isFinite(us[0] + us[1] + us[2] + Ys[0] + Ys[1] + Ys[2])
    }

    function ys(bb, cb) {
      return "pos1" === bb || "pos2" === bb ? void 0 : cb
    }

    function Ps(bb, cb, sb) {
      return bb.length > mb.Md.MaxOpts ? (sb(new Error(`${cb}'s particle opts are over ${mb.Md.MaxOpts} bytes of JSON`)), null) : bb
    }
    const Ds = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Es {
      constructor(bb) {
        this.deps = bb, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(bb, cb) {
        var sb;
        const kb = this.sink(),
          Wb = null !== (sb = cb.half) && void 0 !== sb ? sb : Cs;
        if (!kb || this.live >= mb.Md.MaxLiveKeys || this.nextKey > mb.Md.MaxKey || !ts(cb.pos, Wb)) return Ds;
        const ab = this.nextKey,
          Tb = Ps(function(bb) {
            var cb, sb, kb;
            const Wb = JSON.stringify({
              texture: "string" === typeof bb.texture ? bb.texture : "smokePuff",
              GM: bb.GM,
              minLifeTime: bb.minLifeTime,
              maxLifeTime: bb.maxLifeTime,
              minSize: bb.minSize,
              maxSize: bb.maxSize,
              minEmitPower: bb.minEmitPower,
              maxEmitPower: bb.maxEmitPower,
              emitRate: Bs(bb.emitRate),
              gravity: null !== (cb = bb.gravity) && void 0 !== cb ? cb : Cs,
              dir1: null !== (sb = bb.dir1) && void 0 !== sb ? sb : es,
              dir2: null !== (kb = bb.dir2) && void 0 !== kb ? kb : es,
              colorGradients: bb.colorGradients,
              blendMode: bb.blendMode
            });
            return Ls.encode(Wb)
          }(bb), "createParticles", this.deps.onError);
        return Tb && (0, mb.kf)(kb, 0, ab, 0, mb.Md.PresetNone, 0, us, Ys, Tb) ? (this.nextKey++, this.live++, this.started = !0, new is(this, this.session, ab, bb, Wb)) : Ds
      }
      playEffect(bb) {
        const cb = this.sink(),
          {
            pos1: sb,
            pos2: kb
          } = bb;
        if (!cb || !sb || !kb) return;
        for (let ab = 0; ab < 3; ab++) us[ab] = Math.min(sb[ab], kb[ab]), Ys[ab] = Math.abs(kb[ab] - sb[ab]);
        if (!Number.isFinite(us[0] + us[1] + us[2] + Ys[0] + Ys[1] + Ys[2])) return;
        const Wb = Ps(Ls.encode(JSON.stringify(bb, ys)), "playParticleEffect", this.deps.onError);
        Wb && (0, mb.ef)(cb, 0, 0, mb.Md.PresetNone, mb.Md.HasBox, 0, us, Ys, Wb)
      }
      burstPreset(bb, cb, sb) {
        const kb = this.sink(),
          Wb = Math.min(Math.floor(sb), mb.Md.MaxBurst);
        if (!kb || !Object.hasOwn(mb.Xb, bb) || !(Wb > 0)) return;
        const ab = Vs;
        for (let Tb = 0; Tb < 3; Tb++) us[Tb] = cb[Tb] - ab / 2, Ys[Tb] = ab;
        Number.isFinite(us[0] + us[1] + us[2]) && (0, mb.ef)(kb, 0, 0, mb.Xb[bb], mb.Md.HasBox, Wb, us, Ys, Ns)
      }
      sessionEnded() {
        this.session++;
        const bb = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !bb || (0, mb.mf)(bb, 0)
      }
      sinkFor(bb) {
        return bb === this.session ? this.deps.cmd() : null
      }
      stop(bb, cb) {
        const sb = this.sinkFor(bb);
        sb && (0, mb.of)(sb, 0, cb) && this.live--
      }
    }
    class is {
      constructor(bb, cb, sb, kb, Wb) {
        this.owner = bb, this.session = cb, this.key = sb, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Wb[0]), Math.abs(Wb[1]), Math.abs(Wb[2])], this.rate = Bs(kb.emitRate), this.emitted = this.rate > 0;
        const ab = kb.maxLifeTime * Qs * 1e3 + 250;
        this.stopDelayMs = ab >= 0 ? Math.min(ab, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(bb, cb) {
        const sb = this.sink();
        if (sb) {
          if (cb)
            for (let bb = 0; bb < 3; bb++) this.half[bb] = Math.abs(cb[bb]);
          ts(bb, this.half) && (0, mb.pf)(sb, 0, this.key, mb.Md.HasBox, us, Ys, Ns)
        }
      }
      setEmitRate(bb) {
        const cb = this.sink(),
          sb = Bs(bb);
        cb && sb !== this.rate && (0, mb.pf)(cb, 0, this.key, 0, Cs, Cs, gs(sb)) && (this.rate = sb, this.emitted ||= sb > 0)
      }
      emit(bb) {
        const cb = this.sink(),
          sb = Math.min(Math.floor(bb), mb.Md.MaxBurst);
        cb && sb > 0 && (0, mb.ef)(cb, 0, this.key, mb.Md.PresetNone, 0, sb, Cs, Cs, Ns) && (this.emitted = !0)
      }
      emitPoints(bb, cb, sb) {
        const kb = this.sink(),
          Wb = Math.min(Math.floor(sb), mb.Md.MaxPoints, Math.floor(cb.length / 4));
        if (!kb || !(Wb > 0) || !Number.isFinite(bb[0] + bb[1] + bb[2])) return;
        const ab = new Uint8Array(cb.buffer, cb.byteOffset, Wb * mb.Md.PointBytes);
        (0, mb.hf)(kb, 0, this.key, Wb, bb, ab) && (this.emitted = !0)
      }
      setDirections(bb, cb) {
        const sb = this.sink();
        if (!sb || !Number.isFinite(bb[0] + bb[1] + bb[2] + cb[0] + cb[1] + cb[2])) return;
        const kb = Ls.encode(JSON.stringify({
          dir1: [bb[0], bb[1], bb[2]],
          dir2: [cb[0], cb[1], cb[2]]
        }));
        (0, mb.pf)(sb, 0, this.key, 0, Cs, Cs, kb)
      }
      stop() {
        const bb = this.sink();
        this.stopped = !0, bb && (this.emitted ? (this.rate > 0 && (0, mb.pf)(bb, 0, this.key, 0, Cs, Cs, gs(0)), setTimeout((() => {
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
    const Os = zc.o,
      Gs = new TextDecoder;

    function Ks(bb, cb) {
      const {
        serverIds: sb,
        kinds: kb
      } = bb;
      let Wb = 0;
      for (let ab = 0; ab < sb.length; ab++) {
        const bb = sb[ab];
        if (bb !== mb.ad && !Lb(kb[ab])) {
          if (Wb === cb.length) {
            const bb = new Int32Array(Math.max(64, 2 * Wb));
            bb.set(cb), cb = bb
          }
          cb[Wb++] = bb
        }
      }
      return {
        ids: cb,
        count: Wb
      }
    }

    function Zs(bb, cb) {
      return bb.length >= cb ? bb : new Int32Array(Math.max(cb, 2 * bb.length))
    }

    function zs(bb, cb, sb, kb) {
      for (let Wb = 0; Wb < sb; Wb += 4096) {
        const ab = Math.min(4096, sb - Wb),
          Tb = bb.memoryView(Int32Array, bb.scratch(), ab, "entity_info_batch's ids");
        if (!Tb) return !1;
        Tb.set(cb.subarray(Wb, Wb + ab));
        const Ub = bb.queries.entityInfoBatch(ab),
          Ib = 4294967295 === Ub ? null : bb.memoryData(bb.scratch(), Ub, 4, "entity_info_batch's records");
        if (!Ib) return !1;
        for (let bb = 0; bb + mb.Fb.BYTES <= Ub;) {
          const cb = mb.Fb.len(Ib, bb);
          kb(mb.Fb.serverId(Ib, bb), qs(Ib, bb, cb)), bb += mb.Fb.BYTES + (0, Xb.ze)(cb)
        }
      }
      return !0
    }

    function qs(bb, cb, sb) {
      var kb, Wb, ab;
      const Tb = mb.Fb.kind(bb, cb),
        Ub = 0 === Tb ? null : ub(Tb);
      if (null === Ub) return null;
      const Ib = mb.Fb.variation(bb, cb),
        Hb = mb.Fb.pose(bb, cb),
        fb = mb.Fb.meta(bb, cb),
        Mb = mb.Fb.mesh(bb, cb),
        Xb = 0 !== (mb.Fb.flags(bb, cb) & mb.Bb.HasOpts),
        nb = Os[Ub];
      return Object.freeze({
        type: Ub,
        variation: Ib === mb.ed ? void 0 : null !== (kb = null !== (Wb = null === nb || void 0 === nb ? void 0 : nb[Ib]) && void 0 !== Wb ? Wb : null === nb || void 0 === nb ? void 0 : nb[0]) && void 0 !== kb ? kb : "default",
        pose: Hb === mb.hc ? void 0 : null !== (ab = mb.tb[Hb]) && void 0 !== ab ? ab : mb.tb[0],
        metaInfo: fb === mb.hc ? void 0 : mb.Rc[fb],
        meshKind: Mb === mb.hc ? void 0 : mb.Pc[Mb],
        meshOpts: Xb ? Gs.decode(new Uint8Array(bb.buffer, bb.byteOffset + cb + mb.Fb.BYTES, sb)) : void 0
      })
    }
    const ds = 1,
      As = 2;
    class ws {
      constructor(bb) {
        this.deps = bb, this.wanted = 0, this.qU = !1, this.refused = !1
      }
      get on() {
        return this.qU
      }
      want(bb, cb) {
        this.wanted = cb ? this.wanted | bb : this.wanted & ~bb;
        const sb = 0 !== this.wanted;
        if (sb === this.qU) return;
        const kb = this.deps.cmd();
        null !== kb ? (0, mb.sg)(kb, 0, sb ? 1 : 0) ? (this.qU = sb, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.qU = !1
      }
    }
    class rs {
      constructor(bb) {
        this.deps = bb, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(bb) {
        var cb;
        return this.complete || this.fill(), null !== (cb = this.entries.get("string" === typeof bb ? bb : String(bb))) && void 0 !== cb ? cb : null
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
            api: cb
          } = this.deps;
          let sb = 0;
          const kb = this.ids = Zs(this.ids, bb);
          for (let Wb = 0; Wb < bb; Wb++) {
            const bb = this.pending[Wb],
              ab = cb.indexById.get(bb);
            void 0 === ab || Lb(cb.kinds[ab]) ? this.entries.delete(String(bb)) : kb[sb++] = bb
          }
          sb > 0 && !this.batch(kb, sb) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(ds, !1)
      }
      fill() {
        const {
          api: bb
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: bb
          } = this.deps, cb = bb.on;
          bb.want(ds, !0), !cb && bb.on && (this.refill = this.midFrame)
        }
        const {
          ids: cb,
          count: sb
        } = Ks(bb, this.ids);
        this.ids = cb, sb > 0 && !this.batch(cb, sb) && (this.refill = !0)
      }
      batch(bb, cb) {
        return zs(this.deps.api, bb, cb, ((bb, cb) => {
          null === cb ? this.entries.delete(String(bb)) : this.entries.set(String(bb), cb)
        }))
      }
    }
    var os = sb(4517);

    function Ss(bb) {
      if ("message" !== bb.type || bb.jT !== os.Yb.NewClientOptions || bb.payloadKind !== Xb.lc.Msgpack) return null;
      const cb = (0, Gb.d)(bb.payload);
      if (null === cb || "object" !== typeof cb || Array.isArray(cb)) throw new Error("NewClientOptions whose body isn't an object of options");
      return cb
    }
    var Rs = sb(1253),
      vs = sb(36263);

    function Fs(bb, cb, sb, kb, Wb, ab, Ub) {
      var Ib, Hb, fb;
      switch (bb) {
        case mb.ie.ToggleMenu: {
          const bb = mb.x[cb];
          Tb.j.QQ("toggleMenu", void 0 === bb ? "inventory" : `inventory|${bb}`);
          break
        }
        case mb.ie.EditBoard:
          Tb.j.QQ("EditBoard", {
            pos: 0 === cb ? null : sb
          });
          break;
        case mb.ie.EditCodeBlock:
        case mb.ie.ViewCodeBlock:
          Tb.j.QQ("EditCodeBlock", {
            pos: sb,
            canChangePos: bb === mb.ie.EditCodeBlock
          });
          break;
        case mb.ie.EditCustomLobbyBlock:
          Tb.j.QQ("EditCustomLobbyBlock", {
            pos: sb
          });
          break;
        case mb.ie.OpenIronChest:
          Tb.j.QQ("OpenIronChest", {
            pos: sb
          });
          break;
        case mb.ie.EditNameTag:
          Tb.j.QQ("EditNameTag", null !== (Ib = null === (Hb = Wb.qU()) || void 0 === Hb || null === (fb = Hb.attributes.customAttributes) || void 0 === fb ? void 0 : fb.text) && void 0 !== Ib ? Ib : "");
          break;
        case mb.ie.EditBook: {
          var Mb, Xb, lb;
          const bb = null === (Mb = Wb.qU()) || void 0 === Mb ? void 0 : Mb.attributes;
          Tb.j.QQ("EditBook", {
            pages: (0, Rs.K)(null === bb || void 0 === bb || null === (Xb = bb.customAttributes) || void 0 === Xb ? void 0 : Xb.pages),
            title: null !== (lb = null === bb || void 0 === bb ? void 0 : bb.customDisplayName) && void 0 !== lb ? lb : "Title",
            isPublished: !(null === bb || void 0 === bb || !bb.customDescription)
          });
          break
        }
        case mb.ie.CantChangeBlock:
          ! function(bb, cb) {
            const sb = cb.getClientOption("cantChangeError"),
              kb = cb.getClientOption(bb ? "cantBuildError" : "cantBreakError"),
              Wb = bb ? sb : kb;
            (cb.getClientOption("canChange") || Wb || "You cannot modify this block" !== sb) && Tb.j.QQ("showBottomMessage", {
              message: kb || sb,
              type: "Error"
            })
          }(1 === cb, ab);
          break;
        case mb.ie.MiddleBarStart:
          Tb.j.QQ("middleScreenBarInitiate", {
            duration: kb,
            Ek: 1 === sb[0],
            horizBarRemOffset: cb
          });
          break;
        case mb.ie.MiddleBarStop:
          Tb.j.QQ("middleScreenBarRemove");
          break;
        case mb.ie.Hitmarker:
          Tb.j.QQ("localGunHitmarker", {
            Cs: 1 === cb
          });
          break;
        case mb.ie.ShotsLeft:
          Tb.j.QQ("localPlayerNewShotsLeft", kb);
          break;
        case mb.ie.AimingOverlay:
          Tb.j.QQ("aimingOverlay", 3 === (3 & cb) ? "sniper" : "none");
          break;
        case mb.ie.BottomMessage:
          Tb.j.QQ("showBottomMessage", JSON.parse(Ub()));
          break;
        case mb.ie.Crosshair:
          Wb.inaccuracy = (0, Kb.f)(kb), (0, vs.e)().crosshairAccuracy(Wb.inaccuracy);
          break;
        case mb.ie.ChargeStage:
          break;
        case mb.ie.EmoteWheelClose:
          Tb.j.QQ("requestEmoteWheelClose");
          break;
        case mb.ie.BlockMined:
          Tb.j.QQ("localBlockMined");
          break;
        default:
          throw new nb.e(`UiEvent of no kind: what ${bb}`)
      }
    }
    var xs = sb(37591),
      ps = sb(8930),
      bk = sb(1907),
      ck = sb(36381),
      sk = sb(8942),
      kk = sb(4498);
    const Wk = 10,
      ak = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      Tk = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Uk = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Ik(bb, cb) {
      let sb, kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const ab = () => (sb = (0, bk.m)(sb, cb()), sb);
      return {
        current: ab,
        watch(cb) {
          const sb = () => {
              cb(ab())
            },
            Tb = [bb.watch(sb)];
          return null !== kb && Tb.push((0, bk.p)((bb => {
            bb.some(kb) && sb()
          }))), null !== Wb && Tb.push(Wb(sb)), () => {
            for (const bb of Tb) bb()
          }
        }
      }
    }

    function Hk(bb) {
      return bb && {
        name: bb.name,
        amount: bb.amount,
        attributes: bb.attributes
      }
    }
    const fk = new WeakMap;

    function Mk(bb) {
      let cb = fk.get(bb);
      return void 0 === cb && (cb = (0, sk.creativeItemIds)().map((cb => ({
        name: bb.nameOfId(cb),
        amount: bb.isStackableId(cb) ? 1 : null,
        attributes: (0, xs.d)("Gun" === (0, sk.itemTypeOf)(cb) ? {
          type: "Gun",
          clipSize: (0, sk.clipSizeOf)(cb)
        } : void 0)
      }))), fk.set(bb, cb)), cb
    }

    function Xk(bb, cb, sb, kb) {
      const Wb = cb => (bb.flush(kb), cb),
        ab = sb => {
          var kb, Wb, ab, Tb, Ub, Ib, Hb;
          const fb = bb.slot(sb);
          if (!fb) return null;
          const {
            rootName: Mb,
            metaStr: Xb
          } = cb.getMetaInfo(fb.name);
          return {
            name: fb.name,
            amount: fb.amount,
            attributes: fb.attributes,
            instance: bb.instance(sb),
            displayName: null !== (kb = fb.attributes.customDisplayName) && void 0 !== kb ? kb : cb.getDisplayName(Mb),
            requiresAmmo: "RequiresAmmo" === Xb,
            clipSize: null !== (Wb = null !== (ab = null === (Tb = fb.attributes.customAttributes) || void 0 === Tb || null === (Ub = Tb.gunStats) || void 0 === Ub ? void 0 : Ub.clipSize) && void 0 !== ab ? ab : null === (Ib = cb.getGunStats(Mb)) || void 0 === Ib ? void 0 : Ib.clipSize) && void 0 !== Wb ? Wb : null === (Hb = fb.typeObj) || void 0 === Hb ? void 0 : Hb.clipSize
          }
        },
        Ub = function(bb, cb) {
          let sb = null,
            kb = {
              focus: null,
              recipes: [],
              detail: null
            },
            Wb = -1;
          const ab = new Set;
          return {
            read() {
              var ab, Tb;
              if (null === sb) return null !== kb.focus && (kb = {
                ...kb,
                focus: null
              }), kb;
              if (kb.focus === sb && Wb === bb.changes) return kb;
              if (Wb = bb.changes, 0 === bb.length) return kb = {
                focus: sb,
                recipes: [],
                detail: null
              }, kb;
              let Ub = 0;
              if (null !== sb.recipe) try {
                Ub = cb.getItemId(sb.recipe.name)
              } catch {}
              const Ib = bb.craftingView(sb.station, Ub, null !== (ab = null === (Tb = sb.recipe) || void 0 === Tb ? void 0 : Tb.Bf) && void 0 !== ab ? ab : 0);
              return kb = null === Ib ? {
                focus: sb,
                recipes: [],
                detail: null
              } : function(bb, cb, sb) {
                let kb = mb.db.BYTES;
                const Wb = [];
                for (let fb = mb.db.recipes(bb, 0); fb > 0; fb--) {
                  const sb = mb.T.flags(bb, kb),
                    ab = {
                      name: cb.nameOfId(mb.T.item(bb, kb)),
                      Bf: mb.T.recipe(bb, kb),
                      requires: [],
                      produces: mb.T.produces(bb, kb),
                      haveIngredients: 0 !== (sb & mb.R.HaveIngredients),
                      listed: 0 !== (sb & mb.R.Listed)
                    };
                  let Tb = mb.T.requires(bb, kb);
                  for (kb += mb.T.BYTES; Tb > 0; Tb--) {
                    const sb = mb.X.items(bb, kb);
                    ab.requires.push({
                      items: lk(bb, kb + mb.X.BYTES, sb, cb),
                      amt: mb.X.amount(bb, kb)
                    }), kb += mb.X.BYTES + 2 * sb
                  }
                  Wb.push(ab)
                }
                const ab = mb.db.flags(bb, 0);
                if (null === sb.recipe || 0 === (ab & mb.$.Detail)) return {
                  focus: sb,
                  recipes: Wb,
                  detail: null
                };
                const Tb = {},
                  Ub = {};
                for (let fb = mb.db.ingredients(bb, 0); fb > 0; fb--) {
                  const sb = mb.N.item(bb, kb),
                    Wb = mb.N.from(bb, kb),
                    ab = mb.N.amount(bb, kb);
                  kb += mb.N.BYTES;
                  const Ib = Wb === mb.v ? null : lk(bb, kb, Wb, cb);
                  if (null !== Ib && (kb += 2 * Wb), 0 === sb) continue;
                  const Hb = cb.nameOfId(sb);
                  Tb[Hb] = ab, null !== Ib && (Ub[Hb] = Ib)
                }
                const {
                  name: Ib,
                  Bf: Hb
                } = sb.recipe;
                return {
                  focus: sb,
                  recipes: Wb,
                  detail: {
                    name: Ib,
                    Bf: Hb,
                    craftAllTimes: mb.db.craftAllTimes(bb, 0),
                    roomForOne: 0 !== (ab & mb.$.RoomForOne),
                    resultStackable: Boolean(cb.getItemStat(Ib, "stackable")),
                    amounts: Tb,
                    ingredientsCraftedFrom: Ub
                  }
                }
              }(Ib, cb, sb), kb
            },
            setFocus(bb) {
              sb = bb;
              for (const cb of [...ab]) cb()
            },
            watchFocus: bb => (ab.add(bb), () => {
              ab.delete(bb)
            })
          }
        }(bb, cb);
      return {
        states: {
          inventory: Ik(bb, (() => {
            const sb = bb.length;
            if (0 === sb) return ak;
            const kb = [];
            for (let cb = 0; cb < mb.ud; cb++) kb.push(Hk(bb.slot(cb)));
            const Wb = bb.slotIcon,
              ab = kb[bb.selectedSlot];
            0 !== Wb && ab && (kb[bb.selectedSlot] = {
              ...ab,
              icon: cb.nameOfId(Wb)
            });
            const Tb = !0 === cb.getClientOption("creative");
            let Ub = [],
              Ib = null;
            if (sb > mb.ud) {
              for (let cb = mb.ud; cb < sb; cb++) Ub.push(Hk(bb.slot(cb)));
              Ib = {
                type: null,
                pos: [...bb.XT],
                numSlots: sb - mb.ud,
                ironChest: null
              }
            } else Tb && (Ub = Mk(cb));
            return {
              player: kb,
              chestOrCreative: Ub,
              chest: Ib,
              creative: Tb,
              selectedSlot: bb.selectedSlot,
              freeSlots: bb.freeSlots()
            }
          }), (0, bk.j)("creative")),
          hotbar: Ik(bb, (() => {
            if (0 === bb.length) return Tk;
            const cb = [];
            for (let bb = 0; bb < Wk; bb++) cb.push(ab(bb));
            return {
              items: cb,
              ammo: bb.amountOf("Ammo"),
              selectedSlot: bb.selectedSlot
            }
          }), (0, bk.g)("DisplayName", "GunStats")),
          crafting: Ik(bb, Ub.read, null, Ub.watchFocus),
          heldItemAim: Ik(bb, (() => {
            var cb;
            if (!sb()) return Uk;
            const kb = null === (cb = bb.qU()) || void 0 === cb ? void 0 : cb.typeObj,
              Wb = "Gun" === (null === kb || void 0 === kb ? void 0 : kb.type);
            return {
              gun: Wb,
              aimable: Wb || !0 === (null === kb || void 0 === kb ? void 0 : kb.showsAimingUi),
              chargeName: "Chargeable" === (null === kb || void 0 === kb ? void 0 : kb.type) ? kb.name : null
            }
          }), null, (bb => function(bb, cb) {
            let sb = bb();
            return (0, kk.C)((() => {
              const kb = bb();
              kb !== sb && (sb = kb, cb(kb))
            }))
          }(sb, bb)))
        },
        events: {
          hotbarSlotRequested: (0, bk.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, bk.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, bk.b)("numkeyPressed"),
          inventoryDropRequested: (0, bk.b)("DropInvenItem"),
          chestToggled: (0, bk.b)("chestToggleFromServer"),
          chestRefreshed: (0, bk.b)("chestRefreshedFromServer", mk),
          inventorySynced: (0, bk.b)("syncedInvenFromServer", mk),
          enchantingTableOpened: (0, bk.b)("enchantingTable", (bb => {
            let {
              position: sb,
              Jf: kb
            } = bb;
            return {
              position: [...sb],
              blockName: cb.getMetaInfo(kb).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(cb) {
            bb.selectSlot(cb), bb.flush(kb)
          },
          removeInventoryItem(cb) {
            let {
              slot: sb,
              amount: kb,
              drop: ab
            } = cb;
            return Wb(bb.remove(sb, kb, ab))
          },
          swapInventorySlots(cb) {
            let {
              a: sb,
              b: kb
            } = cb;
            return Wb(bb.swap(sb, kb))
          },
          moveInventoryItem(cb) {
            let {
              from: sb,
              to: kb,
              amount: ab
            } = cb;
            return Wb(bb.move(sb, kb, ab))
          },
          quickMoveInventoryItem(cb) {
            let {
              slot: sb,
              start: kb,
              end: ab,
              amount: Tb
            } = cb;
            return Wb(bb.quickMove(sb, kb, ab, Tb))
          },
          closeChest() {
            bb.closeChest(), bb.flush(kb), Tb.j.QQ("chestClosedByPlayer")
          },
          focusCrafting(bb) {
            Ub.setFocus(bb)
          },
          craftRecipe(cb) {
            let {
              name: sb,
              Bf: kb,
              times: ab
            } = cb;
            return Wb(bb.craft(sb, kb, ab))
          },
          salvageItem(cb) {
            let {
              slot: sb,
              name: kb,
              amount: ab
            } = cb;
            return Wb(bb.salvage(sb, kb, ab))
          },
          enchantItem(cb) {
            let {
              slot: sb,
              level: kb,
              tablePos: Wb
            } = cb;
            bb.enchant(sb, kb, Wb)
          }
        },
        queries: {
          enchantingOffer(sb) {
            let {
              slot: kb,
              blockName: Wb
            } = sb;
            return function(bb, cb, sb, kb) {
              const Wb = bb.slot(sb);
              if (!Wb || !cb.getClientOption("canCraft") || !(0, ps.u)(kb) || (0, ps.q)(Wb.attributes)) return nk;
              const ab = (0, sk.enchantmentPerksOf)(cb.getItemId(Wb.name));
              if (0 === ab.length) return nk;
              const Tb = [];
              for (let Ub = 0; Ub < ck.c; Ub++) {
                const {
                  commonProb: bb,
                  uncommonProb: cb,
                  rareProb: sb,
                  epicProb: Wb,
                  legendaryProb: ab,
                  level: Ib
                } = (0, ps.g)(kb, Ub);
                Tb.push({
                  level: Ib,
                  odds: [bb, cb, sb, Wb, ab].map((bb => 100 * bb))
                })
              }
              return {
                perks: [...ab],
                options: Tb
              }
            }(bb, cb, kb, Wb)
          }
        }
      }
    }
    const nk = Object.freeze({
      perks: [],
      options: []
    });

    function mk() {
      return null
    }

    function lk(bb, cb, sb, kb) {
      const Wb = [];
      for (let ab = 0; ab < sb; ab++) {
        const sb = bb.getUint16(cb + 2 * ab, !0);
        0 !== sb && Wb.push(kb.nameOfId(sb))
      }
      return Wb
    }
    class Qk {
      constructor(bb) {
        this.api = bb, this.positions = new Map, this.targeted = {
          kS: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          LQ: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(bb) {
        let cb = this.positions.get(bb);
        return cb || (this.api.checkValid(bb) || this.api.isLocal(bb) ? (cb = [NaN, NaN, NaN], this.api.readPosition(bb, cb), this.positions.set(bb, cb), cb) : null)
      }
      E_() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [cb, sb] of this.positions) this.api.readPosition(cb, sb) || this.api.checkValid(cb) || this.api.isLocal(cb) || this.positions.delete(cb);
        const bb = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (mb.n.playerFlags(bb, 0) & mb.Nd.Breaking) && mb.n.breakingProgress(bb, 0) >= 0, this.isBreaking)
          for (let cb = 0; cb < 3; cb++) this.breaking[cb] = mb.n.breakingPos(bb, 0, cb)
      }
      refreshTarget() {
        const bb = this.api.apiView,
          cb = mb.n.targetBlockId(bb, 0);
        if (this.hasTarget = cb !== mb.cd, this.hasTarget) {
          const sb = this.targeted;
          sb.kS = cb;
          for (let cb = 0; cb < 3; cb++) sb.position[cb] = mb.n.targetBlock(bb, 0, cb), sb.normal[cb] = mb.n.targetNormal(bb, 0, cb), sb.LQ[cb] = mb.n.targetAdjacent(bb, 0, cb)
        }
      }
      despawned(bb) {
        const cb = this.positions.get(bb);
        cb && !this.api.isLocal(bb) && (cb.fill(NaN), this.positions.delete(bb))
      }
    }
    var ek = sb(40060),
      Ck = sb(40043),
      Nk = sb(36374);
    const Vk = 1,
      Lk = 2;
    class uk {
      constructor() {
        this.game = new Nk.e, this.client = new Nk.e, this.qU = 0, this.movesFly = null
      }
      setGame(bb) {
        if (null === bb || "object" !== typeof bb) return !1;
        const {
          key: cb,
          value: sb
        } = bb;
        return "string" === typeof cb && (this.game.setBooleanType(cb, Boolean(sb)), !0)
      }
      setClient(bb, cb) {
        this.client.setBooleanType(bb, cb)
      }
      clearGame() {
        this.game = new Nk.e, this.movesFly = null
      }
      setMovesFly(bb) {
        this.movesFly = bb
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Vk : 0) | (this.client._getTotalBooleanVal() ? Lk : 0)
      }
      write(bb) {
        const cb = this.perms(),
          {
            movesFly: sb
          } = this;
        if (cb === this.qU && null === sb) return !0;
        let kb = mb.Jb.Keep;
        return null !== sb && (kb = sb ? mb.Jb.On : mb.Jb.Off), !(!bb || !(0, mb.Be)(bb, 0, kb, cb, sb ? 1 : 0)) && (this.qU = cb, this.movesFly = null, !0)
      }
    }
    class Yk {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = bb, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Ub.e,
          get y() {
            return cb()
          }
        }
      }
      get hasView() {
        const bb = this.api.apiView,
          cb = mb.n.viewProj;
        return 0 !== cb(bb, 0, 3) || 0 !== cb(bb, 0, 7) || 0 !== cb(bb, 0, 11) || 0 !== cb(bb, 0, 15)
      }
      get cameraPosition() {
        const bb = this.api.apiView,
          {
            eye: cb
          } = this;
        for (let sb = 0; sb < 3; sb++) cb[sb] = mb.n.eye(bb, 0, sb);
        return cb
      }
      get cameraDirection() {
        const bb = this.api.apiView,
          cb = mb.n.viewProj,
          sb = cb(bb, 0, 3),
          kb = cb(bb, 0, 7),
          Wb = cb(bb, 0, 11),
          ab = Math.hypot(sb, kb, Wb),
          {
            forward: Tb
          } = this;
        return ab > 0 && (Tb[0] = sb / ab, Tb[1] = kb / ab, Tb[2] = Wb / ab), Tb
      }
      get cameraHeading() {
        return mb.n.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return mb.n.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return mb.n.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return mb.n.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(bb) {
        this.clip(bb);
        const {
          clipX: cb,
          clipY: sb,
          clipW: kb
        } = this;
        if (kb > 0) {
          const bb = cb / kb * 50,
            Wb = -sb / kb * 50;
          return Math.abs(bb) <= this.screenBandPct.x && Math.abs(Wb) <= this.screenBandPct.y ? {
            x: 50 + bb,
            y: 50 + Wb
          } : this.clampToBand(bb, Wb)
        }
        const Wb = this.cameraPosition,
          ab = Math.hypot(bb[0] - Wb[0], bb[1] - Wb[1], bb[2] - Wb[2]),
          Tb = this.api.apiView,
          Ub = mb.n.viewProj,
          Ib = ab > 0 ? cb / ab : 0,
          Hb = ab > 0 ? -sb / ab : 0,
          fb = Math.hypot(Ub(Tb, 0, 1), Ub(Tb, 0, 5), Ub(Tb, 0, 9)),
          Mb = Ib / Math.hypot(Ub(Tb, 0, 0), Ub(Tb, 0, 4), Ub(Tb, 0, 8)),
          Xb = Hb / fb,
          nb = !(Math.abs(Mb) >= .001 || Math.abs(Xb) >= .001);
        return this.clampToBand(Ib, nb ? -(fb || 1) : Hb)
      }
      projectDirectionToScreenPos(bb) {
        if (!this.hasView) return;
        const cb = this.cameraPosition,
          sb = this.along;
        for (let kb = 0; kb < 3; kb++) sb[kb] = cb[kb] + 10 * bb[kb];
        return this.projectWorldPosToScreenPos(sb)
      }
      projectWorldPosToViewport(bb) {
        this.clip(bb);
        const {
          clipX: cb,
          clipY: sb,
          clipW: kb
        } = this;
        return kb > 0 ? {
          x: 50 + cb / kb * 50,
          y: 50 - sb / kb * 50
        } : null
      }
      clip(bb) {
        const cb = this.api.apiView,
          sb = bb[0] - mb.n.origin(cb, 0, 0),
          kb = bb[1] - mb.n.origin(cb, 0, 1),
          Wb = bb[2] - mb.n.origin(cb, 0, 2),
          ab = mb.n.viewProj;
        this.clipX = ab(cb, 0, 0) * sb + ab(cb, 0, 4) * kb + ab(cb, 0, 8) * Wb + ab(cb, 0, 12), this.clipY = ab(cb, 0, 1) * sb + ab(cb, 0, 5) * kb + ab(cb, 0, 9) * Wb + ab(cb, 0, 13), this.clipW = ab(cb, 0, 3) * sb + ab(cb, 0, 7) * kb + ab(cb, 0, 11) * Wb + ab(cb, 0, 15)
      }
      clampToBand(bb, cb) {
        return (0, Ub.i)(bb, cb, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var hk = sb(4530);
    const Jk = new TextEncoder,
      gk = new Uint8Array(mb.B * mb.A);
    class Bk {
      constructor() {
        this.buttons = [], this.qU = !0
      }
      set(bb) {
        this.buttons = bb, this.qU = !1
      }
      attached() {
        this.qU = 0 === this.buttons.length
      }
      write(bb) {
        if (this.qU) return;
        const cb = new Uint8Array(mb.B),
          sb = new Uint8Array(mb.B);
        let kb = 0,
          Wb = 0;
        for (const {
            id: ab,
            keycode: Tb
          }
          of this.buttons) {
          if (kb === mb.B) break;
          const {
            read: bb,
            written: Ub
          } = Jk.encodeInto(ab, gk.subarray(Wb, Wb + mb.A));
          if (bb < ab.length) continue;
          const Ib = hk.i[Tb];
          cb[kb] = "number" === typeof Ib ? Ib : 0, sb[kb] = Ub, kb++, Wb += Ub
        }
        this.qU = (0, mb.qe)(bb, 0, kb, cb, sb, gk.subarray(0, Wb))
      }
    }

    function tk(bb, cb, sb) {
      const kb = Jk.encode(cb);
      return kb.length <= mb.A && function(bb, cb, sb, kb) {
        return (0, Ac.e)(), (0, mb.tf)(bb, cb, sb, kb)
      }(bb, 0, sb ? 1 : 0, kb)
    }
    const yk = new TextDecoder,
      Pk = new TextEncoder,
      Dk = new Uint8Array(0),
      Ek = [0, 0, 0],
      ik = {
        off: mb.Rd.Off,
        key: mb.Rd.Key,
        touch: mb.Rd.Touch
      };
    class Ok {
      constructor(bb) {
        var cb;
        this.options = bb, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new Bk, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new uk, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.lm = bb => {
          if ((0, nb.i)(bb)) throw bb;
          this.onError(bb)
        }, this.api = bb.api, this.tables = bb.tables, this.onError = null !== (cb = bb.onError) && void 0 !== cb ? cb : bb => {
          console.error("Error in client game callback", bb)
        }, this.renderFrame = new Yk(this.api, bb.screenBandY), this.live = new Qk(this.api), this.chunks = new Uc(this.api.memory, (() => this.api.apiView)), this.items = new ls({
          api: this.api,
          tables: bb.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: bb.beforeOp
        });
        const sb = () => this.stopped() ? null : this.cmd,
          kb = () => this.sessionLive;
        this.entityInfoWatch = new ws({
          cmd: sb,
          onError: this.onError
        }), this.entityInfo = new rs({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: kb
        }), this.particles = new Es({
          cmd: sb,
          isSessionLive: kb,
          onError: this.onError
        }), this.clientApi = new Ts({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: bb.tables,
          cmd: sb,
          sendCmd: () => this.sendCmd(),
          isSessionLive: kb,
          beforeWrite: () => {
            var cb;
            if (this.stopped()) return !1;
            const sb = this.generation;
            return !1 !== (null === (cb = bb.beforeWrite) || void 0 === cb ? void 0 : cb.call(bb)) && sb === this.generation
          },
          playerDbId: () => {
            const bb = this.session;
            if (null === bb) throw new Error("No game session has started, so the local player has no DB id");
            return bb.playerDbId
          },
          playSound: bb.playSound,
          setLocalOptions: bb.setLocalOptions,
          hasPackModel: bb.hasPackModel
        }), this.scriptedCamera = new Sb({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: bb.cameraScreen,
          showFacing: bb.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Xk(this.items, this.tables, (() => this.localPlayerAlive()), this.lm), this.itemSources
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
        const cb = this.sessionLive ? this.sendCmd() : null;
        return null !== cb && (sb = cb, kb = 0, Wb = bb[0], ab = bb[1], Tb = bb[2], (0, Ac.e)(), (0, mb.ve)(sb, kb, Wb, ab, Tb));
        var sb, kb, Wb, ab, Tb
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(bb) {
        const cb = this.liveCmd();
        return null === cb ? (this.pendingZoom = bb, !1) : (this.pendingZoom = null, (0, mb.ig)(cb, 0, bb, 1))
      }
      fL(bb) {
        const cb = this.stopped() ? null : this.cmd;
        return null !== cb && (0, mb.ag)(cb, 0, bb ? 1 : 0)
      }
      respawn() {
        const bb = this.sessionLive ? this.sendCmd() : null;
        return null !== bb && (cb = bb, sb = 0, (0, Ac.e)(), (0, mb.Df)(cb, sb));
        var cb, sb
      }
      bindCustomButtonKeys(bb) {
        this.customButtons.set(bb)
      }
      pressCustomButton(bb, cb) {
        const sb = this.sessionLive ? this.sendCmd() : null;
        return null !== sb && tk(sb, bb, cb)
      }
      padMove(bb, cb, sb, kb, Wb, ab) {
        const Tb = this.liveCmd();
        return null !== Tb && (0, mb.bf)(Tb, 0, bb, cb, sb, kb, Wb, ab)
      }
      thirdPersonFor(bb) {
        const cb = this.liveCmd();
        return null !== cb && (0, mb.qg)(cb, 0, null !== bb && void 0 !== bb ? bb : 1 / 0)
      }
      send(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== kb && wc(kb, sb ? Xb.xd : 0, bb, (0, Gb.f)(cb))
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
        const cb = () => bb.isStopped;
        this.stopped = cb, this.cmd = bb.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const sb = this.api.apiView;
        this.overflowGen = mb.n.eventOverflowGen(sb, 0), this.resyncOwed = 0 !== mb.n.eventOverflowMask(sb, 0), bb.setGameHost(this), bb.setEventWalker((bb => {
          this.api.walk(bb, this, cb)
        }))
      }
      watchPromptPick(bb) {
        this.promptWatch = bb, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Gk(mb.n.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? mb.uc.None : mb.n.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : mb.n.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === bb || bb >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, bb, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(bb) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(bb)
      }
      netEvent(bb) {
        "connection" === bb.type ? bb.phase === Xb.x.Activated && bb.conn !== this.activeConn && bb.conn > this.closedThrough ? (this.endSession(), this.activeConn = bb.conn, this.endGameGrants(), this.dropGameCamera()) : bb.phase !== Xb.x.Left && bb.phase !== Xb.x.Closed || bb.conn !== this.activeConn ? bb.phase === Xb.x.Resumed && 0 !== this.activeConn && bb.conn > this.closedThrough && (this.activeConn = bb.conn) : this.closeGame() : bb.conn === this.activeConn && 0 !== bb.conn && (bb.jT === Ck.A ? this.gunHit(bb.payload) : bb.jT === os.Yb.EditItemCraftingRecipes || bb.jT === Ck.X ? this.items.touch() : (this.serverOptions(bb), this.gameMessage(bb)));
        const cb = this.options.onNetEvent;
        cb && this.guard((() => {
          cb(bb)
        }))
      }
      serverOptions(bb) {
        const cb = this.options.serverOptions,
          sb = cb ? this.decoded(Ss, bb) : null;
        cb && sb && this.guard((() => {
          cb.applyNewClientOptions(sb)
        }))
      }
      gameMessage(bb) {
        let cb = null;
        try {
          cb = function(bb) {
            if ("message" !== bb.type || bb.jT !== os.Yb.GameCodeMessage || bb.payloadKind !== Xb.lc.Msgpack) return null;
            const cb = (0, Gb.d)(bb.payload);
            if (null === cb || "object" !== typeof cb || "string" !== typeof cb.messageType) throw new Error("GameCodeMessage without a messageType");
            return cb
          }(bb)
        } catch (sb) {
          this.sessionLive && this.onError(sb)
        }
        if (cb) {
          const {
            messageType: bb,
            data: sb
          } = cb;
          if ((0, tb.c)(bb)) return void this.guard((() => {
            (0, tb.b)(bb, sb)
          }));
          "freeCamPerms" === bb && this.freeCam.setGame(sb) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (cb => {
            cb.onReceivedMessageFromServer(bb, sb)
          }))
        }
      }
      decoded(bb, cb) {
        try {
          return bb(cb)
        } catch (sb) {
          return this.onError(sb), null
        }
      }
      setClientFreeCameraGrant(bb, cb) {
        this.freeCam.setClient(bb, cb), this.writeFreeCam()
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
        const cb = this.highlight;
        this.highlightOwed = null === cb ? !(0, mb.Ne)(bb, 0, Ek, Ek, 0) : !(0, mb.Ne)(bb, 0, cb.pos, cb.normal, 1)
      }
      localPlayerBound(bb) {
        var cb, sb;
        if (0 === this.activeConn || this.sessionLive && bb === this.boundId) return;
        const kb = this.sessionLive;
        let Wb, ab, Tb, Ub;
        this.endSession(), kb && this.restartGameCamera();
        try {
          var Ib;
          this.session = null;
          const bb = this.options.sessionInfo(this.activeConn);
          if (this.session = bb, !bb) return;
          Wb = bb.gameNameWithVariation, ab = null !== (Ib = (0, gb.Qb)(Wb)) && void 0 !== Ib ? Ib : void 0, Tb = (0, Bb.r)(bb.lobbyName), Ub = (0, Bb.F)(bb.lobbyName)
        } catch (Cb) {
          return void this.onError(Cb)
        }
        const Hb = {
          localPlayerId: String(bb)
        };
        let fb = {},
          Mb = {};
        try {
          var Xb, nb;
          fb = null !== (Xb = null === (nb = this.options.gameFactory((0, gb.Wb)(Wb))) || void 0 === nb ? void 0 : nb(Ub, Tb, ab, Hb)) && void 0 !== Xb ? Xb : {}
        } catch (Cb) {
          this.lm(Cb)
        }
        try {
          var mb, lb;
          Mb = {
            ...null === (mb = (lb = this.options).defaultPlugins) || void 0 === mb ? void 0 : mb.call(lb, Ub, Tb, ab, Hb),
            ...fb.plugins
          }
        } catch (Cb) {
          this.lm(Cb)
        }
        const Qb = [fb, ...Object.values(Mb)];
        this.owners = Qb, this.tickers = Qb.filter((bb => void 0 !== bb.aX)), this.renderers = Qb.filter((bb => void 0 !== bb.onAfterRender)), this.receivers = Qb.filter((bb => void 0 !== bb.onReceivedMessageFromServer)), this.writeAltVeto(Qb), this.writeHooks(Qb), this.writePublicLobby(Ub), this.writeLocalDbId(null !== (cb = null === (sb = this.session) || void 0 === sb ? void 0 : sb.playerDbId) && void 0 !== cb ? cb : null), this.boundId = bb, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(Qb, (bb => {
          var cb;
          null === (cb = bb.onCreate) || void 0 === cb || cb.call(bb, this.clientApi)
        }));
        const eb = this.generation;
        setTimeout((() => {
          eb === this.generation && !0 === this.tables.getClientOption("creative") && Mk(this.tables)
        }), 0)
      }
      chunkSlot(bb, cb, sb, kb, Wb, ab) {
        this.chunks.apply(bb, cb, sb, kb, Wb, ab)
      }
      entityAdded(bb) {
        var cb;
        this.entityInfo.stale(bb), null === (cb = this.options.replayEntities) || void 0 === cb || cb.entityAdded(bb)
      }
      entityInfoChanged(bb) {
        var cb;
        this.entityInfo.stale(bb), null === (cb = this.options.replayEntities) || void 0 === cb || cb.entityInfoChanged(bb)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const bb = performance.now();
          this.round(this.tickers, Kk), (0, kk.c)(performance.now() - bb)
        }
      }
      afterWalk(bb) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const cb = this.options.replayEntities;
        cb && this.guard((() => {
          this.entityInfoWatch.want(As, cb.wantsWatch), cb.flush(this.entityInfoWatch.on)
        }));
        const sb = (0, kk.o)(bb, mb.n.frameMs(this.api.apiView, 0));
        if (null !== sb) {
          const bb = this.renderFrame;
          this.guard((() => {
            (0, vs.e)().turnDamageIndicators(bb.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(sb)
          })), this.round(this.renderers, (cb => {
            cb.onAfterRender(sb, bb)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== sb)
        } catch (Wb) {
          this.lm(Wb)
        }
        this.showZoom(), this.items.flush(this.lm), this.writePromptWatch(), this.writeCustomButtons();
        const kb = this.ticks;
        this.ticks = 0, (0, kk.k)(kb, bb, sb, this.lm)
      }
      entityRemoved(bb) {
        this.live.despawned(bb), this.entityInfo.removed(bb)
      }
      ackEventOverflow() {
        const bb = this.api.apiView,
          cb = mb.n.eventOverflowGen(bb, 0),
          sb = cb - this.overflowGen >>> 0;
        if (0 === sb && !this.resyncOwed) return;
        this.overflowGen = cb;
        const kb = mb.n.eventOverflowMask(bb, 0),
          Wb = this.cmd;
        0 === kb || null === Wb || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, mb.xe)(Wb, 0, kb);
        const ab = this.options.onEventOverflow;
        0 !== sb && ab && this.guard((() => {
          ab(kb, sb)
        }))
      }
      gameCall(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        if (bb === mb.dc.Director) try {
          return this.scriptedCamera.call(cb, sb, kb, Wb, ab, Tb)
        } catch (Hb) {
          return this.lm(Hb), mb.eb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return bb === mb.dc.AltVeto ? mb.h.Allow : 0;
        try {
          return this.callGames(bb, cb, sb, kb, Wb, ab, Tb, Ub)
        } catch (Hb) {
          throw (0, nb.i)(Hb) && (this.fault = Hb), Hb
        }
      }
      takeFault() {
        const bb = this.fault;
        return this.fault = void 0, bb
      }
      callGames(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Ib
        } = this.options, Hb = String(this.boundId);
        switch (bb) {
          case mb.dc.AltVeto:
          case mb.dc.AltAction: {
            const Ub = 0 !== Tb,
              [fb, Mb, Xb] = Ub ? [cb, sb, kb] : [void 0, void 0, void 0],
              nb = Ub ? Ib.nameOfId(Wb) : "Air",
              lb = Gk(ab);
            if (bb === mb.dc.AltAction) return this.first((bb => {
              var cb;
              return null === (cb = bb.onPlayerAltAction) || void 0 === cb ? void 0 : cb.call(bb, Hb, fb, Mb, Xb, nb, lb)
            })), 0;
            const Qb = this.first((bb => {
              var cb;
              return null === (cb = bb.onPlayerAttemptAltAction) || void 0 === cb ? void 0 : cb.call(bb, Hb, fb, Mb, Xb, nb, lb)
            }));
            return "preventAction" === Qb ? mb.h.Prevent : "preventPlacement" === Qb ? mb.h.PreventPlacement : mb.h.Allow
          }
          case mb.dc.Click: {
            const bb = Ub,
              fb = 0 !== (bb & mb.H.Alt),
              Mb = 0 !== (bb & mb.H.HasPos),
              Xb = Mb ? Ib.nameOfId(Wb) : "Air",
              [nb, lb, Qb] = Mb ? [cb, sb, kb] : [null, null, null],
              eb = Gk(ab),
              Cb = 0 !== (bb & mb.H.Up),
              Nb = Gk(Tb);
            if (0 === (bb & mb.H.AttackOnly) && this.first((bb => {
                var cb, sb;
                return Cb ? null === (cb = bb.onPlayerClickUp) || void 0 === cb ? void 0 : cb.call(bb, Hb, fb, nb, lb, Qb, Xb, eb) : null === (sb = bb.onPlayerClick) || void 0 === sb ? void 0 : sb.call(bb, Hb, fb, nb, lb, Qb, Xb, eb)
              })), !Cb && !fb && null !== Nb) {
              const bb = this.clientApi.getPositionView(Nb),
                cb = bb ? [bb[0], bb[1], bb[2]] : [0, 0, 0];
              this.first((bb => {
                var sb;
                return null === (sb = bb.onPlayerAttackEntity) || void 0 === sb ? void 0 : sb.call(bb, Hb, Nb, cb)
              }))
            }
            return 0
          }
          case mb.dc.ChangeBlock: {
            const bb = Ib.nameOfId(Wb),
              Tb = Ib.nameOfId(ab);
            return this.first((Wb => {
              var ab;
              return null === (ab = Wb.onPlayerChangeBlock) || void 0 === ab ? void 0 : ab.call(Wb, Hb, cb, sb, kb, bb, Tb)
            })), 0
          }
          case mb.dc.DropItem: {
            const bb = Ib.nameOfId(cb);
            return this.first((cb => {
              var Wb;
              return null === (Wb = cb.onPlayerDropItem) || void 0 === Wb ? void 0 : Wb.call(cb, Hb, bb, sb, kb)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${bb}`)), 0
        }
      }
      changeBlockFail(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = Wb === mb.Vc ? null : yk.decode(this.api.eventBytes(ab, Math.min(Wb, Tb)));
        this.failures.push({
          TT: [bb, cb, sb],
          UT: kb,
          IT: Ub
        })
      }
      changeBlockFailEnd() {
        const bb = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (cb => {
          var sb;
          null === (sb = cb.onChangeBlockFail) || void 0 === sb || sb.call(cb, bb)
        })), this.QQ("EditBoard", {
          pos: null
        }), this.QQ("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(bb, cb, sb, kb, Wb, ab) {
        bb === mb.xc.ChestOpened ? this.items.chestOpened(sb, kb, Wb) : bb !== mb.xc.Synced && bb !== mb.xc.ChestClosed && bb !== mb.xc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(bb, cb, sb, kb) {
            switch (bb) {
              case mb.xc.Synced:
                Tb.j.QQ("syncedInvenFromServer");
                break;
              case mb.xc.ChestOpened:
              case mb.xc.ChestClosed:
                Tb.j.QQ("chestToggleFromServer", bb === mb.xc.ChestOpened, !0);
                break;
              case mb.xc.ChestRefreshed:
                Tb.j.QQ("chestRefreshedFromServer");
                break;
              case mb.xc.EnchantingTable:
                Tb.j.QQ("enchantingTable", {
                  Jf: kb,
                  position: sb
                });
                break;
              case mb.xc.HotbarRequest:
                Tb.j.QQ("setSelectedInventorySlotI", cb, !0);
                break;
              case mb.xc.Scrolled:
                Tb.j.QQ("ScrollInventorySlot", cb);
                break;
              case mb.xc.NumberKey:
                Tb.j.QQ("numkeyPressed", cb + 1);
                break;
              case mb.xc.DropRequested:
                Tb.j.QQ("DropInvenItem", 0 !== cb);
                break;
              default:
                throw new nb.e(`InventoryEvent of no kind: what ${bb}`)
            }
          }(bb, cb, [sb, kb, Wb], ab)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(bb, cb, sb, kb) {
        this.QQ("shotPlayer", {
          playerId: String(bb),
          damage: cb,
          wasCrit: 0 !== kb,
          distance: sb
        })
      }
      localHurt(bb, cb) {
        this.QQ("closeShopOnDamaged", null), this.guard((() => {
          Tb.j.QQ("damagedByOtherPlayer", {
            Vk: null,
            direction: Number.isNaN(cb) ? null : cb,
            SW: bb
          })
        }))
      }
      attackHit(bb, cb, sb, kb, Wb) {
        this.guard((() => {
          Tb.j.QQ("yourAttackHit", {
            Cs: kb,
            screenPos: this.renderFrame.projectDirectionToScreenPos([bb, cb, sb]),
            hitSelf: Wb
          })
        }))
      }
      physicsType(bb) {
        this.QQ("PlayerPhysicsTypeUpdate", bb)
      }
      vehicleEffect(bb, cb, sb, kb, Wb) {
        this.guard((() => {
          bb === Xb.Ld.UPDATE ? (0, Pb.j)(cb, {
            icon: sb,
            level: kb,
            displayName: null,
            durationMs: Wb
          }) : yb.b.remove(cb)
        }))
      }
      zoomChanged(bb) {
        this.zoom = bb, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.QQ("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const bb = this.scriptedCamera.holdsView();
        !this.zoomUnshown || bb && this.zoomHeld || (this.zoomUnshown = !1, this.QQ("cameraZoomSet", this.zoom)), this.zoomHeld = bb
      }
      gunHit(bb) {
        this.guard((() => {
          const {
            Vk: cb,
            Lk: sb
          } = (0, ek.e)(Ck.A, bb);
          Tb.j.QQ("damagedByOtherPlayer", {
            Vk: cb,
            direction: sb
          })
        }))
      }
      uiEvent(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        this.guard((() => {
          Fs(bb, cb, [sb, kb, Wb], ab, this.items, this.options.tables, (() => yk.decode(this.api.eventBytes(Tb, Ub))))
        }))
      }
      writeAltVeto(bb) {
        const cb = this.cmd;
        if (!cb) return;
        let sb;
        try {
          sb = function(bb, cb) {
            const sb = new Set;
            let kb = !1;
            for (const Wb of bb)
              if (Wb.onPlayerAttemptAltAction) {
                if (kb = !0, !Wb.altVetoBlocks) return {
                  mode: mb.ke.All,
                  roots: []
                };
                for (const bb of Wb.altVetoBlocks) sb.add(cb.getMetaInfo(bb).rootId)
              } return kb ? sb.size > mb.Lc ? {
              mode: mb.ke.All,
              roots: []
            } : {
              mode: mb.ke.Filter,
              roots: [...sb]
            } : {
              mode: mb.ke.Off,
              roots: []
            }
          }(bb, this.options.tables)
        } catch (Wb) {
          this.onError(Wb), sb = {
            mode: mb.ke.All,
            roots: []
          }
        }
        if (sb.mode === mb.ke.Off && !this.vetoSet) return;
        const kb = new Uint8Array(new Uint32Array(sb.roots).buffer);
        (0, mb.Hf)(cb, 0, sb.mode, sb.roots.length, kb) ? this.vetoSet = sb.mode !== mb.ke.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(bb) {
        const cb = this.cmd;
        if (!cb) return;
        const sb = function(bb) {
          let cb = 0;
          for (const sb of bb) sb.onPlayerAltAction && (cb |= 1 << mb.dc.AltAction), (sb.onPlayerClick || sb.onPlayerClickUp || sb.onPlayerAttackEntity) && (cb |= 1 << mb.dc.Click), sb.onPlayerChangeBlock && (cb |= 1 << mb.dc.ChangeBlock), sb.onPlayerDropItem && (cb |= 1 << mb.dc.DropItem);
          return cb
        }(bb);
        (0 !== sb || this.hooksSet) && ((0, mb.Uf)(cb, 0, sb) ? this.hooksSet = 0 !== sb : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const bb = this.cmd;
        bb && !this.stopped() && this.customButtons.write(bb)
      }
      writePromptWatch() {
        const bb = this.cmd,
          cb = this.promptWatch;
        cb !== this.promptWatchSent && bb && !this.stopped() && (0, mb.vg)(bb, 0, ik[cb]) && (this.promptWatchSent = cb)
      }
      writePublicLobby(bb) {
        const cb = this.cmd;
        cb && bb !== this.writtenPublicLobby && ((0, mb.eg)(cb, 0, bb ? 1 : 0) ? this.writtenPublicLobby = bb : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(bb) {
        const cb = this.cmd;
        cb && ((0, mb.Yf)(cb, 0, null === bb ? 0 : 1, null === bb ? Dk : Pk.encode(bb)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(bb) {
        const cb = this.generation;
        for (const kb of this.owners) {
          if (cb !== this.generation) break;
          try {
            const cb = bb(kb);
            if (void 0 !== cb) return cb
          } catch (sb) {
            this.lm(sb)
          }
        }
      }
      QQ(bb, cb) {
        this.guard((() => {
          Tb.j.QQ(bb, cb)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (bb) {
          this.lm(bb)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (bb) {
          this.lm(bb)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const bb = this.owners;
        let cb;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (kb) {
          cb = kb
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (kb) {
          cb ??= kb
        }
        this.round(bb, Zk, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (kb) {
          cb ??= kb
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (kb) {
          cb ??= kb
        }
        const sb = this.options.onSessionEnd;
        if (sb) try {
          sb()
        } catch (kb) {
          this.onError(kb)
        }
        void 0 !== cb && this.lm(cb)
      }
      round(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = this.generation;
        for (const ab of bb) {
          if (kb !== this.generation) break;
          try {
            cb(ab)
          } catch (Wb) {
            sb ? this.onError(Wb) : this.lm(Wb)
          }
        }
      }
      guard(bb) {
        try {
          bb()
        } catch (cb) {
          this.lm(cb)
        }
      }
    }

    function Gk(bb) {
      return bb === mb.Yc ? null : String(bb)
    }

    function Kk(bb) {
      bb.aX(Xb.Gd)
    }

    function Zk(bb) {
      var cb;
      null === (cb = bb.onClose) || void 0 === cb || cb.call(bb)
    }

    function zk(bb, cb) {
      bb.watch((() => {
        const sb = function(bb) {
          let cb = 0;
          const sb = Math.min(Wk, bb.length);
          for (let Wb = 0; Wb < sb; Wb++) {
            var kb;
            const sb = null === (kb = bb.slot(Wb)) || void 0 === kb ? void 0 : kb.typeObj,
              ab = sb ? (0, sk.gunTypeOf)(sb.id) : void 0;
            void 0 !== ab && (cb |= 1 << Nc[ab])
          }
          return cb
        }(bb);
        0 !== sb && (cb.preload(sb), cb.preload(1 << Vc))
      }))
    }
    var qk = sb(4579),
      dk = sb(36359);

    function Ak(bb) {
      const cb = new qk.Howl({
          ...(0, dk.f)(bb),
          pool: 15,
          preload: !1
        }),
        sb = cb.load.bind(cb);
      return cb.load = () => (cb._preload = !0, sb()), cb
    }

    function wk(bb, cb, sb) {
      const kb = bb.listener;
      if (kb.positionX) rk(kb.positionX, cb, sb, 0), rk(kb.positionY, cb, sb, 1), rk(kb.positionZ, cb, sb, 2), rk(kb.forwardX, cb, sb, 3), rk(kb.forwardY, cb, sb, 4), rk(kb.forwardZ, cb, sb, 5), rk(kb.upX, cb, sb, 6), rk(kb.upY, cb, sb, 7), rk(kb.upZ, cb, sb, 8);
      else {
        let bb = !1;
        for (let kb = 0; kb < 9; kb++) bb ||= cb[kb] !== sb[kb];
        bb && (kb.setPosition(cb[0], cb[1], cb[2]), kb.setOrientation(cb[3], cb[4], cb[5], cb[6], cb[7], cb[8]), sb.set(cb))
      }
    }

    function rk(bb, cb, sb, kb) {
      cb[kb] !== sb[kb] && (bb.value = cb[kb], sb[kb] = cb[kb])
    }
    class Sk {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(bb) {
        this.pose.set(bb);
        const cb = qk.Howler.ctx;
        return !!cb && (cb !== this.watchedCtx && (this.watchedCtx = cb, this.written.fill(Number.NaN), cb.addEventListener("statechange", (() => {
          "running" === cb.state && wk(cb, this.pose, this.written)
        }))), "running" === cb.state && wk(cb, bb, this.written), !0)
      }
    }
    var Rk = sb(36219),
      vk = sb(38781);
    let Fk = null,
      xk = null;

    function jk() {
      return null === Fk && (Fk = document.createElement("div"), Fk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(Fk)), Fk
    }

    function pk() {
      return xk ??= new vk.d(new Rk.e(jk)), xk
    }

    function bW() {
      var bb;
      null === (bb = xk) || void 0 === bb || bb.clear(), cW(null)
    }

    function cW(bb) {
      kb.d.get("scriptedCameraFacing") !== bb && kb.d.set({
        scriptedCameraFacing: bb
      })
    }
    var sW = sb(9103),
      kW = sb(9064),
      WW = sb(38801),
      aW = sb(40168),
      TW = sb(3050);
    const UW = Object.entries(mb.$b).reduce(((bb, cb) => {
      let [sb, kb] = cb;
      return bb[kb] = sb, bb
    }), []);

    function IW(bb, cb) {
      var sb;
      return 0 !== ((null !== (sb = bb.itemFlags[cb]) && void 0 !== sb ? sb : 0) & mb.Ac.Stackable)
    }
    const HW = /^(0|[1-9][0-9]*)$/,
      fW = {
        displayName: (bb, cb) => (0, sk.displayNameOf)(cb),
        description: (bb, cb) => (0, sk.descriptionOf)(cb),
        type: (bb, cb) => (0, sk.itemTypeOf)(cb),
        clipSize: (bb, cb) => (0, sk.clipSizeOf)(cb),
        armourReduction: (bb, cb) => (0, sk.armourReductionOf)(cb),
        scopeType: (bb, cb) => (0, sk.scopeTypeOf)(cb),
        stackable: IW,
        harvestType: (bb, cb) => UW[bb.blockHarvestTypes[cb]],
        harvestLevel: (bb, cb) => {
          const sb = bb.blockHarvestLevels[cb];
          return sb === mb.Fc ? void 0 : sb
        },
        harvests: (bb, cb) => {
          var sb;
          const kb = null !== (sb = bb.itemHarvests[cb]) && void 0 !== sb ? sb : 0;
          return 0 !== kb ? UW[kb] : void 0 === (0, sk.harvestsNullLevelOf)(cb) ? void 0 : null
        },
        level: (bb, cb) => {
          var sb, kb;
          const Wb = null !== (sb = bb.itemLevels[cb]) && void 0 !== sb ? sb : mb.Fc;
          return Wb !== mb.Fc ? Wb : null !== (kb = (0, sk.harvestsNullLevelOf)(cb)) && void 0 !== kb ? kb : void 0
        }
      };

    function MW(bb, cb, sb) {
      return nW(new Uint8Array(Math.floor(bb.length / cb)), bb, cb, sb)
    }

    function XW(bb, cb, sb) {
      return nW(new Uint16Array(Math.floor(bb.length / cb)), bb, cb, sb)
    }

    function nW(bb, cb, sb, kb) {
      const Wb = new DataView(cb.buffer, cb.byteOffset, cb.byteLength);
      for (let ab = 0; ab < bb.length; ab++) bb[ab] = kb(Wb, ab * sb);
      return bb
    }
    class mW {
      constructor(bb, cb) {
        this.options = cb, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = bb => {
          const cb = this.idOf(bb);
          if (void 0 === cb) throw new Error(`No item is named ${bb}, an item's root`);
          return cb
        };
        const sb = cb => {
            const sb = cb();
            return new Uint8Array(bb.memory().buffer, bb.scratch(), sb).slice()
          },
          kb = (new TextDecoder).decode(sb((() => bb.queries.itemNames()))).split("\n"),
          Wb = sb((() => bb.queries.blockProps())),
          ab = sb((() => bb.queries.itemProps()));
        this.props = {
          blockFlags: MW(Wb, mb.s.BYTES, mb.s.flags),
          blockHarvestTypes: MW(Wb, mb.s.BYTES, mb.s.harvestType),
          blockHarvestLevels: MW(Wb, mb.s.BYTES, mb.s.harvestLevel),
          blockAttachedTops: XW(Wb, mb.s.BYTES, mb.s.attachedTop),
          itemFlags: MW(ab, mb.Ec.BYTES, mb.Ec.flags),
          itemHarvests: MW(ab, mb.Ec.BYTES, mb.Ec.harvests),
          itemLevels: MW(ab, mb.Ec.BYTES, mb.Ec.level)
        }, (0, TW.l)(Object.freeze(kb)), (0, aW.g)()
      }
      idOf(bb) {
        if ("number" === typeof bb) return void 0 === (0, TW.f)(bb) ? void 0 : bb;
        const cb = (0, TW.b)(bb);
        return void 0 === cb && HW.test(bb) ? void 0 === (0, TW.f)(+bb) ? void 0 : +bb : cb
      }
      getMetaInfo(bb) {
        if (!bb || bb === sW.c) return sW.f;
        const cb = this.idOf(bb);
        if (void 0 === cb) throw new Error(`Item ${bb} not found in registry`);
        return this.metaOf(cb)
      }
      blockRootId(bb) {
        return 0 !== bb && void 0 !== (0, TW.f)(bb) ? this.metaOf(bb).rootId : bb
      }
      metaOf(bb) {
        return this.metas[bb] ??= (0, kW.k)((0, TW.f)(bb), bb, this.rootIdOf, (0, sk.rootMetaDescOf)(bb))
      }
      getItemId(bb) {
        if (!bb || bb === sW.c) return 0;
        const cb = this.idOf(bb);
        if (void 0 === cb) throw new Error(`Invalid block name. You sent ${bb}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return cb
      }
      getItemName(bb) {
        if (!bb || bb === sW.c) return sW.c;
        const cb = this.idOf(bb);
        if (void 0 === cb) throw new Error(`Item ${bb} not found in registry`);
        return (0, TW.f)(cb)
      }
      blockNameToBlockId(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (bb === sW.c) return 0;
        let sb = this.idOf(bb);
        if (void 0 === sb || !this.isBlockId(sb)) {
          const cb = bb.indexOf("|"),
            kb = cb > 0 ? (0, TW.b)(bb.slice(0, cb)) : void 0;
          sb = void 0 !== kb && this.isBlockId(kb) && (0, sk.rootMetaDescOf)(kb) === bb ? kb : void 0
        }
        if (void 0 !== sb) return sb;
        if (!cb) throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(bb) {
        return bb > 0 && bb < this.props.blockFlags.length
      }
      nameOfId(bb) {
        return 0 !== bb && (0, TW.f)(bb) || sW.c
      }
      itemType(bb) {
        const cb = bb ? this.idOf(bb) : void 0;
        if (!cb) return null;
        let sb = this.types.get(cb);
        return void 0 === sb && (sb = Object.freeze({
          id: cb,
          name: (0, TW.f)(cb),
          meta: this.getMetaInfo(cb),
          stackable: IW(this.props, cb),
          type: (0, sk.itemTypeNameOf)(cb),
          clipSize: (0, sk.clipSizeOf)(cb),
          scopeType: (0, sk.scopeTypeOf)(cb),
          showsAimingUi: (0, sk.showsAimingUi)(cb)
        }), this.types.set(cb, sb)), sb
      }
      getItemStat(bb, cb) {
        if (WW.c.has(cb)) {
          const sb = "minChargeStateToUse" === cb ? this.getMetaInfo(bb).rootName : this.getItemName(bb),
            kb = this.options.get((0, WW.f)(sb, cb));
          if (null !== kb && void 0 !== kb) return kb
        }
        return this.defaultStat(bb, cb, this.statOf(cb))
      }
      getDisplayName(bb) {
        return this.getItemStat(bb, "displayName")
      }
      getDefaultItemStat(bb, cb) {
        return this.defaultStat(bb, cb, this.statOf(cb))
      }
      statOf(bb) {
        const cb = fW[bb];
        return void 0 === cb && function(bb, cb) {
          throw new Error(`ClientApi.${bb} is not available yet in the wasm client (${cb})`)
        }(`getItemStat("${bb}")`, `a table of the stat: the wasm client answers ${Object.keys(fW).join(", ")}`), cb
      }
      defaultStat(bb, cb, sb) {
        const kb = this.idOf(bb),
          Wb = void 0 === kb ? void 0 : sb(this.props, kb);
        return null !== Wb && void 0 !== Wb || "displayName" !== cb ? Wb : this.getItemName(bb)
      }
      getClientOption(bb) {
        return this.options.get(bb)
      }
      getGunStats(bb) {
        return this.getClientOption(`${bb}GunStats`)
      }
      watchClientOption(bb, cb) {
        return this.options.subscribe(bb, cb)
      }
      isSolidBlockId(bb) {
        var cb;
        return 0 !== ((null !== (cb = this.props.blockFlags[bb]) && void 0 !== cb ? cb : 0) & mb.r.Solid)
      }
      isStackableId(bb) {
        return IW(this.props, bb)
      }
      isFluidBlockId(bb) {
        var cb;
        return 0 !== ((null !== (cb = this.props.blockFlags[bb]) && void 0 !== cb ? cb : 0) & mb.r.Fluid)
      }
      canPlaceOverBlockId(bb) {
        var cb;
        return 0 !== ((null !== (cb = this.props.blockFlags[bb]) && void 0 !== cb ? cb : 0) & mb.r.PlaceOver)
      }
      attachedTopOf(bb) {
        var cb;
        return null !== (cb = this.props.blockAttachedTops[bb]) && void 0 !== cb ? cb : 0
      }
      isDroplessBlockId(bb) {
        return (0, sk.dropsNothing)(bb)
      }
    }

    function lW(bb, cb) {
      const sb = new Map;
      return (kb, Wb) => {
        const ab = cb.idOf(kb),
          Tb = void 0 === ab ? null : (kb => {
            let Wb = sb.get(kb);
            if (void 0 === Wb) {
              const ab = bb.queries.salvageRecipe(kb),
                Tb = new DataView(bb.memory().buffer, bb.scratch(), ab),
                Ub = [];
              for (let bb = 0; bb + mb.ae.BYTES <= ab; bb += mb.ae.BYTES) Ub.push(Object.freeze({
                item: cb.nameOfId(mb.ae.item(Tb, bb)),
                amt: mb.ae.amount(Tb, bb)
              }));
              Wb = 0 === Ub.length ? null : Object.freeze(Ub), sb.set(kb, Wb)
            }
            return Wb
          })(ab);
        if (null === Tb || void 0 === Wb) return Tb;
        const Ub = Wb <= 0 ? 1 : Wb;
        return Tb.map((bb => {
          let {
            item: cb,
            amt: sb
          } = bb;
          return {
            item: cb,
            amt: sb * Ub
          }
        }))
      }
    }
    var QW = sb(40350),
      eW = sb(36527),
      CW = sb(36511),
      NW = sb(36564),
      VW = sb(36151),
      LW = sb(40120),
      uW = sb(41939);
    const YW = -1,
      hW = new Uint8Array(0),
      JW = new TextEncoder;

    function gW(bb) {
      if (null === bb) return null;
      const cb = JW.encode(bb);
      return cb.byteLength < Xb.Lc ? cb : cb.subarray(0, Xb.Lc - 1)
    }
    class BW {
      constructor(bb) {
        this.deps = bb, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = YW, this.keyframesSettled = !1, this.reloadFrom = YW
      }
      reloadKeyframes() {
        var bb, cb;
        this.keyframesVersion = YW, this.reloadFrom = null !== (bb = null === (cb = this.view()) || void 0 === cb ? void 0 : cb.version) && void 0 !== bb ? bb : YW
      }
      setPlayback(bb) {
        const cb = 1 === this.deps.core.WWb(bb);
        return cb && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = YW, this.reloadFrom = YW), cb
      }
      async open(bb) {
        const cb = await this.deps.replay.open(bb);
        return "opening" === cb && (this.reloadKeyframes(), this.deps.recorder.prefetch()), cb
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(bb)), cb)
      }
      setSpeed(bb) {
        this.deps.replay.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.replay.setCameraMode(uW.b.indexOf(bb))
      }
      view() {
        var bb;
        const cb = mb.n.replayViewPtr(this.deps.apiView(), 0);
        if (0 === cb) return this.lastView = null, null;
        const sb = new DataView(this.deps.buffer(), cb, mb.Ud.BYTES),
          kb = mb.Ud.version(sb, 0),
          Wb = this.lastView;
        if (null !== Wb && Wb.version === kb) return Wb;
        const ab = mb.Ud.markIn(sb, 0),
          Tb = {
            version: kb,
            state: mb.Ud.state(sb, 0),
            cameraMode: null !== (bb = uW.b[mb.Ud.cameraMode(sb, 0)]) && void 0 !== bb ? bb : "recording",
            aX: mb.Ud.aX(sb, 0),
            totalTicks: mb.Ud.totalTicks(sb, 0),
            speed: mb.Ud.speed(sb, 0),
            mark: ab === mb.Sd ? null : {
              inTick: ab,
              outTick: mb.Ud.markOut(sb, 0)
            },
            editVersion: mb.Ud.editVersion(sb, 0)
          };
        return this.lastView = Tb, Tb
      }
      keyframes() {
        const bb = this.view();
        if (null === bb) return [];
        bb.version !== this.reloadFrom && (this.reloadFrom = YW);
        const cb = this.reloadFrom === YW && bb.state !== Xb.ud.Cropping && bb.state !== Xb.ud.None,
          sb = cb ? bb.editVersion : bb.version;
        if (sb === this.keyframesVersion && cb === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: kb
        } = this.deps, Wb = kb.aWb(), ab = kb.OQ(), Tb = [];
        if (0 !== ab && Wb > 0) {
          const bb = new DataView(this.deps.buffer(), ab, Wb * Xb.wc);
          for (let cb = 0; cb < Wb; cb++) {
            const sb = cb * Xb.wc,
              kb = cb => bb.getFloat64(sb + cb, !0);
            Tb.push({
              aX: bb.getUint32(sb + Xb.Hc, !0),
              position: [kb(Xb.Fc), kb(Xb.Fc + 8), kb(Xb.Fc + 16)],
              direction: [kb(Xb.yc), kb(Xb.yc + 8), kb(Xb.yc + 16)],
              easing: [kb(Xb.Bc), kb(Xb.Bc + 8), kb(Xb.Bc + 16), kb(Xb.Bc + 24)]
            })
          }
        }
        return this.keyframesVersion = sb, this.keyframesSettled = cb, this.lastKeyframes = Tb, Tb
      }
      addKeyframe() {
        const bb = this.deps.apiView(),
          cb = [mb.n.eye(bb, 0, 0), mb.n.eye(bb, 0, 1), mb.n.eye(bb, 0, 2)];
        return this.deps.replay.addKeyframe(cb, function(bb, cb) {
          const sb = Math.cos(cb);
          return [sb * Math.sin(bb), -Math.sin(cb), sb * Math.cos(bb)]
        }(mb.n.heading(bb, 0), mb.n.pitch(bb, 0)))
      }
      setKeyframe(bb) {
        return this.deps.replay.setKeyframe(bb.aX, Float64Array.from([...bb.position, ...bb.direction, ...bb.easing]))
      }
      moveKeyframe(bb, cb) {
        return this.deps.replay.moveKeyframe(bb, cb)
      }
      deleteKeyframes(bb, cb) {
        return this.deps.replay.deleteKeyframes(bb, cb)
      }
      setMark(bb) {
        var cb, sb;
        return this.deps.replay.setMark(null !== (cb = null === bb || void 0 === bb ? void 0 : bb.inTick) && void 0 !== cb ? cb : -1, null !== (sb = null === bb || void 0 === bb ? void 0 : bb.outTick) && void 0 !== sb ? sb : -1)
      }
      crop(bb, cb) {
        const sb = this.deps.replay.crop(bb, cb);
        return sb && this.reloadKeyframes(), sb
      }
      save(bb) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(bb)
      }
      recorderControl(bb) {
        this.deps.recorder.control(bb)
      }
      recorderPrefs(bb, cb) {
        this.deps.recorder.prefs(bb, cb)
      }
      recorderOption(bb, cb) {
        const sb = this.deps.cmd();
        return null !== sb && (0, mb.zf)(sb, 0, bb, null === cb ? hW : JW.encode(cb))
      }
      recordFlyingText(bb, cb, sb, kb) {
        const Wb = this.deps.cmd(),
          ab = Math.max(0, Math.min(4294967295, Math.round(kb)));
        return null !== Wb && (0, mb.uf)(Wb, 0, cb, sb, ab, JW.encode(bb))
      }
      recordPlayerKilled(bb, cb, sb, kb) {
        const Wb = this.deps.cmd();
        return null !== Wb && (0, mb.Bf)(Wb, 0, bb, cb, Math.max(0, sb), JW.encode(kb))
      }
      recordKillfeed(bb, cb, sb) {
        var kb, Wb;
        const ab = this.deps.cmd(),
          Tb = function(bb) {
            const cb = bb.reduce(((bb, cb) => {
                var sb;
                return bb + os.hb + (null !== (sb = null === cb || void 0 === cb ? void 0 : cb.byteLength) && void 0 !== sb ? sb : 0)
              }), 0),
              sb = new Uint8Array(cb),
              kb = new DataView(sb.buffer);
            let Wb = 0;
            for (const Tb of bb) {
              var ab;
              kb.setUint16(Wb, null !== (ab = null === Tb || void 0 === Tb ? void 0 : Tb.byteLength) && void 0 !== ab ? ab : Xb.Lc, !0), Wb += os.hb, null !== Tb && (sb.set(Tb, Wb), Wb += Tb.byteLength)
            }
            return sb
          }([gW(bb.name), gW(bb.colour), gW(cb.name), gW(cb.colour), gW(sb)]);
        return null !== ab && (0, mb.xf)(ab, 0, null !== (kb = bb.id) && void 0 !== kb ? kb : mb.ad, null !== (Wb = cb.id) && void 0 !== Wb ? Wb : mb.ad, Tb)
      }
      recorderSession(bb, cb) {
        this.deps.recorder.session({
          session: cb,
          lobbyType: bb.lobbyType,
          game: bb.gameNameWithVariation,
          lobby: bb.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.TWb()
      }
      filePartDone(bb, cb) {
        this.deps.recorder.filePartDone(bb, cb)
      }
      fileDone(bb) {
        this.deps.recorder.fileDone(bb)
      }
    }
    const tW = -2147483648;
    class yW {
      constructor(bb) {
        var cb;
        this.deps = bb, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (cb = bb.now) && void 0 !== cb ? cb : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var bb, cb, sb;
        return null === (bb = null === (cb = (sb = this.deps).live) || void 0 === cb ? void 0 : cb.call(sb)) || void 0 === bb || bb
      }
      activated(bb) {
        var cb, sb;
        this.live && (this.viewerShown(!0 === (null === (cb = (sb = this.deps).viewerOpen) || void 0 === cb ? void 0 : cb.call(sb))), this.deps.client.recorderSession(bb, (0, uW.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var bb, cb;
        this.live && (this.state.recording || !0 !== (null === (bb = (cb = this.deps).viewerOpen) || void 0 === bb ? void 0 : bb.call(cb))) ? this.deps.client.recorderControl(Xb.$c.ToggleRecording) : this.deps.notify(NW.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Xb.$c.SaveClip) : this.deps.notify(NW.d.clippingNotOn)
      }
      viewerShown(bb) {
        this.live && this.deps.client.recorderControl(bb ? Xb.$c.ViewerOpened : Xb.$c.ViewerClosed)
      }
      setPrefs(bb, cb) {
        this.live && this.deps.client.recorderPrefs(bb, cb)
      }
      setOption(bb, cb) {
        this.live && this.deps.client.recorderOption(bb, cb)
      }
      recordFlyingText(bb, cb, sb, kb) {
        this.live && this.deps.client.recordFlyingText(bb, cb, sb, kb)
      }
      recordPlayerKilled(bb, cb, sb, kb) {
        this.live && this.deps.client.recordPlayerKilled(bb, cb, sb, kb)
      }
      recordKillfeed(bb, cb, sb) {
        this.live && this.deps.client.recordKillfeed(bb, cb, sb)
      }
      aX() {
        let bb = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, bb = {
            ...bb,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const cb = Math.floor((this.now() - this.recordingSince) / 1e3);
          cb !== bb.seconds && (bb = {
            ...bb,
            seconds: cb
          })
        }
        this.set(bb)
      }
      onEvent(bb) {
        var cb, sb;
        const {
          notify: kb
        } = this.deps, Wb = NW.d;
        switch (bb.what) {
          case Xb.Xc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), kb(Wb.recordingStarted);
            break;
          case Xb.Xc.RecordingStopped:
            this.stopRecording(), kb(Wb.recordingStopped), this.saveState(Xb.md.Recording, "saving");
            break;
          case Xb.Xc.RecordingDiscarded:
            this.stopRecording(), kb(Wb.recordingDiscarded);
            break;
          case Xb.Xc.RecordingTurnedOff:
            this.stopRecording(), kb(Wb.recordingTurnedOff);
            break;
          case Xb.Xc.LimitReached:
            kb(Wb.limitReached);
            break;
          case Xb.Xc.ClipSaved:
            this.saveState(Xb.md.Clip, "saving");
            break;
          case Xb.Xc.ClipEmpty:
            kb(Wb.clipEmpty);
            break;
          case Xb.Xc.ClippingNotOn:
            kb(Wb.clippingNotOn);
            break;
          case Xb.Xc.Disallowed:
            kb(Wb.disallowed);
            break;
          case Xb.Xc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Xb.Xc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Xb.Xc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Xb.Xc.SaveBusy:
            null === (cb = (sb = this.deps).onSaveState) || void 0 === cb || cb.call(sb, bb.kind, "busy"), kb(Wb.saveBusy);
            break;
          case Xb.Xc.CloseViewerFirst:
            kb(Wb.closeViewerFirst)
        }
      }
      fileReady(bb, cb) {
        this.deps.download(cb), this.saveState(bb, "done"), this.deps.notify(bb === Xb.md.Clip ? NW.d.clipSaved : NW.d.recordingSaved)
      }
      failed(bb) {
        this.saveState(bb, "failed"), this.deps.notify(bb === Xb.md.Clip ? NW.d.clipFailed : NW.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(bb, cb) {
        var sb, kb;
        null === (sb = (kb = this.deps).onSaveState) || void 0 === sb || sb.call(kb, bb, cb)
      }
      set(bb) {
        bb !== this.state && (this.state = bb, this.deps.onState(bb))
      }
    }
    const PW = new TextDecoder;

    function DW(bb, cb, sb, kb) {
      const Wb = [];
      for (let ab = 0; ab < kb; ab++) {
        if (cb + os.hb > sb) return null;
        const kb = bb.getUint16(cb, !0);
        if (cb += os.hb, kb !== Xb.Lc) {
          if (cb + kb > sb) return null;
          Wb.push(PW.decode(new Uint8Array(bb.buffer, bb.byteOffset + cb, kb))), cb += kb
        } else Wb.push(null)
      }
      return cb === sb ? Wb : null
    }

    function EW(bb, cb) {
      let sb = new DataView(new ArrayBuffer(0)),
        kb = !0;
      const Wb = {
        replayFailed: (cb, sb) => {
          bb.replayFailed({
            reason: cb,
            code: sb
          })
        },
        replayOption: (cb, Wb, ab, Tb) => {
          const Ub = function(bb, cb, sb, kb) {
            switch (cb) {
              case Xb.pd.Cleared:
                return 0 === kb ? null : void 0;
              case Xb.pd.Text:
                return PW.decode(new Uint8Array(bb.buffer, bb.byteOffset + sb, kb));
              case Xb.pd.Int:
                return kb === Int32Array.BYTES_PER_ELEMENT ? bb.getInt32(sb, !0) : void 0;
              case Xb.pd.Double:
                return kb === Float64Array.BYTES_PER_ELEMENT ? bb.getFloat64(sb, !0) : void 0;
              default:
                return
            }
          }(sb, Wb, ab, Tb);
          void 0 !== Ub ? bb.replayOption({
            key: cb,
            value: Ub
          }) : kb = !1
        },
        replayUiEvent: (cb, Wb, ab, Tb, Ub, Ib) => {
          const Hb = function(bb, cb, sb, kb, Wb, ab, Tb) {
            const Ub = ab + Tb;
            switch (cb) {
              case Xb.td.FlyingText: {
                const Tb = DW(bb, ab, Ub, 1);
                return null !== Tb && null !== Tb[0] ? {
                  what: cb,
                  kT: sb,
                  sT: kb,
                  angle: Wb,
                  contentJson: Tb[0]
                } : null
              }
              case Xb.td.PlayerKilled: {
                const kb = DW(bb, ab, Ub, 3);
                return kb ? {
                  what: cb,
                  killstreak: sb,
                  dead: kb[0],
                  killer: kb[1],
                  withItem: kb[2]
                } : null
              }
              case Xb.td.Killfeed: {
                const sb = DW(bb, ab, Ub, 7);
                return sb ? {
                  what: cb,
                  killerId: sb[0],
                  killerName: sb[1],
                  killerColour: sb[2],
                  victimId: sb[3],
                  victimName: sb[4],
                  victimColour: sb[5],
                  withItem: sb[6]
                } : null
              }
              default:
                return null
            }
          }(sb, cb, Wb, ab, Tb, Ub, Ib);
          null !== Hb ? bb.replayUiEvent(Hb) : kb = !1
        },
        replayFilePart: (sb, Wb, ab, Tb) => {
          const Ub = cb();
          ab + Tb > Ub.byteLength ? kb = !1 : bb.filePart(sb, Wb, new Uint8Array(Ub, ab, Tb).slice())
        },
        replayFileReady: (cb, sb, kb, Wb) => {
          bb.fileReady({
            save: cb,
            kind: sb,
            parts: kb,
            bytes: Wb
          })
        },
        recorderEvent: (cb, sb, kb) => {
          bb.recorderEvent({
            what: cb,
            kind: sb,
            save: kb
          })
        },
        replayOpened: (cb, kb, Wb) => {
          bb.replayOpened(PW.decode(new Uint8Array(sb.buffer, sb.byteOffset + kb, Wb)))
        }
      };
      return (bb, cb, ab, Tb) => !(bb < Xb.P.ReplayFailed || bb > Xb.P.RecorderEvent) && (sb = cb, kb = !0, (0, mb.pe)(bb, cb, ab, Tb, Wb) && kb)
    }

    function iW(bb) {
      let cb = null;
      const sb = EW(bb, (() => {
        if (null === cb) throw new Error("a recorder event read outside recorderEventReader's call");
        return cb.buffer
      }));
      return (bb, kb) => {
        cb = kb;
        try {
          ! function(bb, cb) {
            const sb = bb.slice(),
              kb = new DataView(sb.buffer);
            for (let Wb = 0; Wb < sb.byteLength;) {
              if (Wb + Xb.M > sb.byteLength) throw new Error(`the recorder module's events end mid-head at ${Wb}`);
              const bb = kb.getUint32(Wb, !0),
                ab = 65535 & bb,
                Tb = bb >>> 16,
                Ub = Wb + Xb.M;
              if (Ub + Tb > sb.byteLength || !cb(ab, kb, Ub, Tb)) throw new Error(`the recorder module wrote a malformed event ${ab} (${Tb} bytes) at ${Wb}`);
              Wb = Ub + (0, Xb.ze)(Tb)
            }
          }(bb, sb)
        } finally {
          cb = null
        }
      }
    }
    class OW {
      constructor(bb, cb) {
        this.acks = bb, this.handlers = cb, this.parts = new Map
      }
      onPart(bb, cb, sb) {
        let kb = this.parts.get(bb);
        kb || (kb = [], this.parts.set(bb, kb)), kb[cb] = sb, this.acks.filePartDone(bb, cb)
      }
      onReady(bb) {
        var cb;
        const sb = null !== (cb = this.parts.get(bb.save)) && void 0 !== cb ? cb : [];
        this.parts.delete(bb.save);
        const kb = function(bb, cb, sb) {
          if (bb.length !== cb) return null;
          let kb = 0;
          for (let Tb = 0; Tb < cb; Tb++) {
            if (void 0 === bb[Tb]) return null;
            kb += bb[Tb].byteLength
          }
          if (kb !== sb) return null;
          if (1 === cb) return bb[0];
          const Wb = new Uint8Array(sb);
          let ab = 0;
          for (const Tb of bb) Wb.set(Tb, ab), ab += Tb.byteLength;
          return Wb
        }(sb, bb.parts, bb.bytes);
        this.acks.fileDone(bb.save), null === kb ? this.handlers.fileIncomplete(bb.save, bb.kind) : this.handlers.fileReady(bb.save, bb.kind, kb)
      }
      onDiscarded(bb) {
        this.parts.delete(bb)
      }
    }

    function GW() {
      return sb.e(57).then((() => sb(41968)))
    }
    class KW {
      constructor(bb) {
        this.deps = bb, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: cb
        } = bb;
        this.recorder = new yW({
          client: cb,
          live: () => {
            var bb;
            return !0 !== (null === (bb = this.viewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          viewerOpen: bb.viewerOpen,
          notify: bb.notify,
          download: cb => {
            var sb;
            null === (sb = bb.download) || void 0 === sb || sb.call(bb, cb)
          },
          onState: bb.onRecorderState,
          onSaveState: bb.onSaveState
        }), this.parts = new OW(cb, {
          fileReady: (bb, cb, sb) => {
            var kb;
            cb === Xb.md.Edited ? null === (kb = this.viewer) || void 0 === kb || kb.saveDone(sb) : this.recorder.fileReady(cb, sb)
          },
          fileIncomplete: (bb, cb) => {
            this.saveFailed(cb)
          }
        });
        const sb = {
          replayFailed: bb => {
            var cb;
            null === (cb = this.viewer) || void 0 === cb || cb.onFailed(bb)
          },
          replayOption: cb => {
            var sb;
            null === (sb = bb.onReplayOption) || void 0 === sb || sb.call(bb, cb)
          },
          replayUiEvent: cb => {
            var sb;
            null === (sb = bb.onReplayUiEvent) || void 0 === sb || sb.call(bb, cb)
          },
          filePart: (bb, cb, sb) => {
            this.parts.onPart(bb, cb, sb)
          },
          fileReady: bb => {
            this.parts.onReady(bb)
          },
          replayOpened: cb => {
            var sb;
            null === (sb = bb.onReplayOpened) || void 0 === sb || sb.call(bb, cb)
          },
          recorderEvent: bb => {
            var cb;
            switch (bb.what) {
              case Xb.Xc.FileDiscarded:
                this.parts.onDiscarded(bb.save);
                break;
              case Xb.Xc.SaveFailed:
                this.saveFailed(bb.kind);
                break;
              case Xb.Xc.SaveBusy:
                if (null !== (cb = this.viewer) && void 0 !== cb && cb.savePending) {
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
        this.sink = function(bb, cb) {
          return {
            onReplayEvent: EW(bb, cb)
          }
        }(sb, bb.buffer), this.recorderEvents = iW(sb)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var bb;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (bb = this.deps.loadViewer) && void 0 !== bb ? bb : GW)().catch((bb => {
          throw this.viewerChunk = null, bb
        })), this.viewerChunk.then((bb => (this.viewer ??= new bb.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var bb, cb;
            null === (bb = (cb = this.deps).onViewerChange) || void 0 === bb || bb.call(cb)
          }
        }), this.viewer))))
      }
      activated(bb) {
        this.recorder.activated(bb)
      }
      afterFrame(bb) {
        try {
          bb > 0 && this.recorder.aX()
        } finally {
          var cb;
          null === (cb = this.viewer) || void 0 === cb || cb.afterFrame()
        }
      }
      end() {
        var bb;
        null === (bb = this.viewer) || void 0 === bb || bb.end()
      }
      saveFailed(bb) {
        var cb;
        bb === Xb.md.Edited ? null === (cb = this.viewer) || void 0 === cb || cb.saveFailed(!1) : this.recorder.failed(bb)
      }
    }
    var ZW = sb(40047),
      zW = sb(40066),
      qW = sb(4523),
      dW = sb(40420);
    class AW {
      constructor(bb) {
        this.deps = bb, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(bb, cb) {
        if (!this.deps.live() || 0 === bb && 0 === cb) return;
        const sb = (0, Kb.m)(0, performance.now()),
          kb = this.deps.dragScale();
        (0, dW.i)((() => {
          (0, Kb.r)(Xb.qb.MouseDown, 0, 0, 0, sb), (0, Kb.r)(Xb.qb.MouseMove, 0, bb * kb, cb * kb, 0), (0, Kb.r)(Xb.qb.MouseUp, 0, 0, 0, sb)
        }))
      }
      move(bb) {
        var cb, sb;
        this.analogue[0] = null !== (cb = null === bb || void 0 === bb ? void 0 : bb.x) && void 0 !== cb ? cb : 0, this.analogue[1] = null !== (sb = null === bb || void 0 === bb ? void 0 : bb.y) && void 0 !== sb ? sb : 0, this.send()
      }
      holdVertical(bb, cb) {
        const sb = "freeCamUp" === bb ? mb.Nb.Up : mb.Nb.Down;
        this.keys = cb ? this.keys | sb : this.keys & ~sb, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const bb = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== bb && !(0, mb.Fe)(bb, 0, this.analogue, this.keys)
      }
    }
    var wW = sb(727),
      rW = sb(316),
      oW = sb(117),
      SW = sb(8847);

    function RW() {
      const bb = kb.d.get("clientEscMenuOptions"),
        cb = (0, wW.k)(bb);
      return {
        mouse: (0, oW.isMobile)() ? cb : bb.mouseSensitivity,
        touch: cb,
        fovPercent: bb.cameraFOV
      }
    }

    function vW() {
      const bb = kb.d.get("clientEscMenuOptions"),
        cb = kb.d.get("isTouchScreen") ? (0, wW.k)(bb) : bb.mouseSensitivity,
        sb = RW().mouse;
      return sb > 0 ? cb / sb : 1
    }

    function FW(bb) {
      const cb = () => {
        bb.setSoundPrefs(kb.d.get("soundVolume"), kb.d.get("soundOnFromAd"))
      };
      let sb = null;
      const Wb = () => {
        const {
          showFog: cb,
          enableLighting: Wb,
          fogChunkDistance: ab,
          chunkFadeIn: Tb
        } = kb.d.get("clientEscMenuOptions"), Ub = {
          showFog: cb,
          lighting: Wb,
          fogChunks: ab,
          chunkFade: Tb
        };
        sb && (0, Xb.he)(sb) === (0, Xb.he)(Ub) && sb.fogChunks === ab || (sb = Ub, bb.setEnvPrefs(sb))
      };
      let ab = null;
      const Ub = () => {
        const cb = function() {
          const bb = kb.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: kb.d.get("areNametagsHidden"),
            crouchToggle: bb.crouchIsToggle,
            bhopDisabled: bb.disableBunnyHopping,
            disableBobbing: bb.disableBobbing,
            ezTowering: bb.ezTowering && (0, rW.f)(),
            ezBridging: bb.ezBridging,
            showChunkBorders: bb.showChunkBorders,
            nametagCutDistance: (0, SW.f)()
          }
        }();
        (0, gb.qe)(ab, cb) || (ab = cb, bb.setUiPrefs(cb))
      };
      let Ib = null;
      const Hb = () => {
        const cb = RW();
        (0, gb.qe)(Ib, cb) || (Ib = cb, bb.setLookPrefs(cb))
      };
      cb(), Wb(), Ub(), Hb();
      const fb = [(0, Tb.l)("appManagerUpdated|soundVolume", cb), (0, Tb.l)("appManagerUpdated|soundOnFromAd", cb), (0, Tb.l)("appManagerUpdated|clientEscMenuOptions", (() => {
        Wb(), Ub(), Hb()
      })), (0, Tb.l)("appManagerUpdated|areNametagsHidden", Ub), (0, Tb.l)("appManagerUpdated|showDistantNametags", Ub)];
      return () => {
        for (const bb of fb) bb()
      }
    }
    var xW = sb(40359),
      jW = sb(40363);
    var pW = (0, jW.c)("lend"),
      ba = (0, jW.c)("starting"),
      ca = (0, jW.c)("generation"),
      sa = (0, jW.c)("end");
    class ka {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, sa, {
          value: Wa
        }), Object.defineProperty(this, pW, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ba, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ca, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, xW.e)(this, pW)[pW] || (0, xW.e)(this, ba)[ba]
      }
      async start(bb) {
        if (this.active) return "busy";
        const cb = (0, xW.e)(this, ca)[ca];
        (0, xW.e)(this, ba)[ba] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, xW.e)(this, ba)[ba] = !1
        }
        if (cb !== (0, xW.e)(this, ca)[ca]) return "refused";
        const sb = this.deps.beginSave();
        if (!sb) return "refused";
        const kb = Number(BigInt.asUintN(32, bb)),
          Wb = Number(BigInt.asUintN(32, bb >> 32n));
        let ab = "refused";
        return this.deps.recorderCall(((bb, cb) => {
          const Tb = sb.editState,
            Ub = bb.stage(Tb.length);
          0 !== Ub ? (new Uint8Array(cb.buffer, Ub, Tb.length).set(Tb), bb.UWb(sb.headLen, kb, Wb) && (ab = "sealing")) : ab = "tooLarge"
        }), !0), "sealing" !== ab ? (sb.end(), ab) : ((0, xW.e)(this, pW)[pW] = sb, "sealing")
      }
      beforeRecorderStep() {
        const bb = (0, xW.e)(this, pW)[pW];
        if (!bb) return null;
        let cb = -1,
          sb = 0;
        if (!this.deps.recorderCall((bb => {
            cb = bb.IWb(), cb > 0 && (sb = bb.HWb())
          }))) return (0, xW.e)(this, sa)[sa](bb, "stopped");
        if (cb < 0) return (0, xW.e)(this, sa)[sa](bb, "read");
        if (0 === cb) return null;
        const kb = bb.head(sb, cb);
        let Wb = !1;
        if (kb && this.deps.recorderCall(((bb, sb) => {
            const ab = bb.stage(cb);
            0 !== ab && (new Uint8Array(sb.buffer, ab, cb).set(kb), Wb = !0)
          }), !0), Wb) return null;
        const ab = bb.givenUp();
        this.deps.recorderCall((bb => {
          bb.fWb()
        }));
        const Tb = (0, xW.e)(this, sa)[sa](bb, ab ? "givenUp" : "stopped");
        return ab && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Tb
      }
      stop() {
        (0, xW.e)(this, ca)[ca]++;
        const bb = (0, xW.e)(this, pW)[pW];
        bb && (this.deps.recorderCall((bb => {
          bb.fWb()
        })), (0, xW.e)(this, sa)[sa](bb, "stopped"))
      }
    }

    function Wa(bb, cb) {
      return (0, xW.e)(this, pW)[pW] = null, bb.end(), cb
    }

    function aa(bb, cb) {
      const sb = new Uint8Array(4),
        kb = new DataView(sb.buffer);
      return kb.setUint8(0, bb ? 1 : 0), kb.setUint16(2, Math.max(0, Math.min(65535, Math.round(cb))), !0), sb
    }

    function Ta(bb, cb) {
      return bb > function(bb) {
        return 16777216 + 314572.8 * Math.max(0, bb)
      }(cb) + 33554432
    }
    let Ua = null;

    function Ia(bb) {
      return Ua ??= async function(bb) {
        const cb = bb.loadInFlight();
        cb && await cb.catch((() => {}));
        if (bb.trapped()) return "trapped";
        if (bb.busy() || !Ta(bb.memoryBytes(), bb.clipSeconds())) return "vn";
        bb.unload();
        let sb = !1;
        try {
          sb = await bb.load()
        } catch {
          sb = !1
        }
        if (!sb) return bb.trapped() ? "trapped" : bb.Em() ? "Em" : "failed";
        return "recycled"
      }(bb).finally((() => {
        Ua = null
      })), Ua
    }
    const Ha = "Replay recording couldn't load, so try again.",
      fa = new Set([Xb.$c.ToggleRecording, Xb.$c.SaveClip]);
    var Ma = (0, jW.c)("bindings"),
      Xa = (0, jW.c)("module"),
      na = (0, jW.c)("memory"),
      ma = (0, jW.c)("trapped"),
      la = (0, jW.c)("Em"),
      Qa = (0, jW.c)("recycleDue"),
      ea = (0, jW.c)("loading"),
      Ca = (0, jW.c)("generation"),
      Na = (0, jW.c)("viewDrawn"),
      Va = (0, jW.c)("clip"),
      La = (0, jW.c)("session"),
      ua = (0, jW.c)("control"),
      Ya = (0, jW.c)("deferred"),
      ha = (0, jW.c)("coreU8"),
      Ja = (0, jW.c)("coreU32"),
      ga = (0, jW.c)("moduleU8"),
      Ba = (0, jW.c)("edited"),
      ta = (0, jW.c)("sendSession"),
      ya = (0, jW.c)("checkNotInEvents"),
      Pa = (0, jW.c)("clipping"),
      Da = (0, jW.c)("busy"),
      Ea = (0, jW.c)("use"),
      ia = (0, jW.c)("ensureLoaded"),
      Oa = (0, jW.c)("loadOnce"),
      Ga = (0, jW.c)("recycleAfterStep"),
      Ka = (0, jW.c)("settleRecycle"),
      Za = (0, jW.c)("load"),
      za = (0, jW.c)("attach"),
      qa = (0, jW.c)("resendHeld"),
      da = (0, jW.c)("recycle"),
      Aa = (0, jW.c)("send"),
      wa = (0, jW.c)("unload"),
      ra = (0, jW.c)("dropModule"),
      oa = (0, jW.c)("coreBytes"),
      Sa = (0, jW.c)("coreWords"),
      Ra = (0, jW.c)("moduleBytes"),
      va = (0, jW.c)("loadFailed"),
      Fa = (0, jW.c)("call"),
      xa = (0, jW.c)("guard"),
      ja = (0, jW.c)("trapOn");
    class pa {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, ja, {
          value: uT
        }), Object.defineProperty(this, xa, {
          value: LT
        }), Object.defineProperty(this, Fa, {
          value: VT
        }), Object.defineProperty(this, va, {
          value: NT
        }), Object.defineProperty(this, Ra, {
          value: CT
        }), Object.defineProperty(this, Sa, {
          value: eT
        }), Object.defineProperty(this, oa, {
          value: QT
        }), Object.defineProperty(this, ra, {
          value: lT
        }), Object.defineProperty(this, wa, {
          value: mT
        }), Object.defineProperty(this, Aa, {
          value: nT
        }), Object.defineProperty(this, da, {
          value: XT
        }), Object.defineProperty(this, qa, {
          value: MT
        }), Object.defineProperty(this, za, {
          value: fT
        }), Object.defineProperty(this, Za, {
          value: HT
        }), Object.defineProperty(this, Ka, {
          value: IT
        }), Object.defineProperty(this, Ga, {
          value: UT
        }), Object.defineProperty(this, Oa, {
          value: TT
        }), Object.defineProperty(this, ia, {
          value: aT
        }), Object.defineProperty(this, Ea, {
          value: WT
        }), Object.defineProperty(this, Da, {
          value: kT
        }), Object.defineProperty(this, Pa, {
          value: sT
        }), Object.defineProperty(this, ya, {
          value: cT
        }), Object.defineProperty(this, ta, {
          value: bT
        }), Object.defineProperty(this, Ma, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, na, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ma, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, la, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Qa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ea, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ca, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Na, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Va, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, La, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ua, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ya, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ha, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ja, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ga, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ba, {
          writable: !0,
          value: void 0
        }), (0, xW.e)(this, Ba)[Ba] = new ka({
          ensureLoaded: () => (0, xW.e)(this, ia)[ia](),
          recorderCall: (bb, cb) => {
            cb && (0, xW.e)(this, ya)[ya]("an edited save's stage");
            const sb = (0, xW.e)(this, Fa)[Fa](((cb, sb) => (bb(cb, sb), !0)));
            return null !== sb && void 0 !== sb && sb
          },
          beginSave: bb.beginSave,
          givenUp: bb.givenUp
        })
      }
      get active() {
        return null !== (0, xW.e)(this, Xa)[Xa]
      }
      get trapped() {
        return (0, xW.e)(this, ma)[ma]
      }
      get loading() {
        return null !== (0, xW.e)(this, ea)[ea]
      }
      prefetch() {
        (0, xW.e)(this, la)[la] || (0, xW.e)(this, ma)[ma] || (0, xW.e)(this, Xa)[Xa] || (0, xW.e)(this, ea)[ea] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, xW.e)(this, Na)[Na] = !0, (0, xW.e)(this, Pa)[Pa]() && (0, xW.e)(this, Ea)[Ea]()
      }
      prefs(bb, cb) {
        (0, xW.e)(this, Va)[Va] = {
          on: bb,
          seconds: cb
        }, (0, xW.e)(this, Aa)[Aa](Xb.Vc.Prefs, aa(bb, cb)), bb && (0, xW.e)(this, Na)[Na] && (0, xW.e)(this, Ea)[Ea]()
      }
      control(bb) {
        const cb = function(bb) {
          return new Uint8Array([bb, 0, 0, 0])
        }(bb);
        if (fa.has(bb)) return (0, xW.e)(this, Xa)[Xa] ? void(0, xW.e)(this, Aa)[Aa](Xb.Vc.Control, cb) : ((0, xW.e)(this, ua)[ua] = cb, void(0, xW.e)(this, Ea)[Ea]());
        (0, xW.e)(this, la)[la] || this.deps.coreCommand(Xb.Vc.Control, cb)
      }
      session(bb) {
        (0, xW.e)(this, La)[La] = bb, (0, xW.e)(this, ta)[ta](bb)
      }
      filePartDone(bb, cb) {
        (0, xW.e)(this, Aa)[Aa](Xb.Vc.FilePartDone, function(bb, cb) {
          const sb = new Uint8Array(8),
            kb = new DataView(sb.buffer);
          return kb.setUint32(0, bb, !0), kb.setUint32(4, cb, !0), sb
        }(bb, cb))
      }
      fileDone(bb) {
        return (0, xW.e)(this, Aa)[Aa](Xb.Vc.FileDone, function(bb) {
          const cb = new Uint8Array(4);
          return new DataView(cb.buffer).setUint32(0, bb, !0), cb
        }(bb)), (0, xW.e)(this, Ga)[Ga]()
      }
      saveEdited(bb) {
        return (0, xW.e)(this, ya)[ya]("saveEdited"), (0, xW.e)(this, Ba)[Ba].start(bb)
      }
      afterFrame() {
        if (!(0, xW.e)(this, Xa)[Xa]) return;
        "read" === (0, xW.e)(this, Ba)[Ba].beforeRecorderStep() && (0, xW.e)(this, Ga)[Ga]();
        const bb = (0, xW.e)(this, Qa)[Qa];
        (0, xW.e)(this, Qa)[Qa] = null;
        const cb = (0, xW.e)(this, Xa)[Xa],
          sb = (0, xW.e)(this, na)[na];
        if (!cb || !sb) return void(null === bb || void 0 === bb || bb.resolve((0, xW.e)(this, ma)[ma] ? "trapped" : "vn"));
        const {
          core: kb
        } = this.deps, Wb = kb.nWb(2);
        let ab, Tb, Ub, Ib, Hb = 0,
          fb = 0;
        if (0 !== Wb) {
          var Mb, Xb;
          const bb = (0, xW.e)(this, Sa)[Sa]();
          Hb = null !== (Mb = bb[Wb >>> 2]) && void 0 !== Mb ? Mb : 0, fb = null !== (Xb = bb[1 + (Wb >>> 2)]) && void 0 !== Xb ? Xb : 0
        }
        try {
          if (fb > 0) {
            const bb = cb.feed(fb);
            0 !== bb && (0, xW.e)(this, Ra)[Ra](sb).set((0, xW.e)(this, oa)[oa]().subarray(Hb, Hb + fb), bb)
          }
          ab = cb.step(), Tb = cb.mWb(), Ub = cb.lWb(), Ib = cb.QWb()
        } catch (nb) {
          if (!(0, xW.e)(this, ja)[ja](nb)) throw null === bb || void 0 === bb || bb.resolve("vn"), nb;
          return void(null === bb || void 0 === bb || bb.resolve("trapped"))
        }
        if (ab > 0) {
          const bb = kb.eWb(2, ab);
          0 !== bb && (0, xW.e)(this, oa)[oa]().set((0, xW.e)(this, Ra)[Ra](sb).subarray(Tb, Tb + ab), bb)
        }
        if (Ub > 0) {
          (0, xW.e)(this, Ya)[Ya] = [];
          try {
            this.deps.events(new Uint8Array(sb.buffer, Ib, Ub), sb)
          } catch (nb) {
            throw null === bb || void 0 === bb || bb.resolve("vn"), nb
          } finally {
            const bb = (0, xW.e)(this, Ya)[Ya];
            (0, xW.e)(this, Ya)[Ya] = null;
            for (const [cb, sb] of bb)(0, xW.e)(this, Aa)[Aa](cb, sb)
          }
        }
        if (!(0, xW.e)(this, Pa)[Pa]() && !(0, xW.e)(this, Da)[Da]()) return (0, xW.e)(this, wa)[wa](), void(null === bb || void 0 === bb || bb.resolve("vn"));
        null === bb || void 0 === bb || bb.resolve((0, xW.e)(this, da)[da]())
      }
      dispose() {
        (0, xW.e)(this, la)[la] = !0, (0, xW.e)(this, wa)[wa]()
      }
    }

    function bT(bb) {
      (0, xW.e)(this, Aa)[Aa](Xb.Vc.Session, function(bb) {
        const cb = new TextEncoder,
          sb = cb.encode(bb.game).subarray(0, 65535),
          kb = cb.encode(bb.lobby).subarray(0, 65535),
          Wb = new Uint8Array(22 + sb.length + 2 + kb.length),
          ab = new DataView(Wb.buffer);
        ab.setFloat64(0, bb.unixMs, !0), ab.setBigUint64(8, BigInt.asUintN(64, bb.session), !0), ab.setUint8(16, bb.lobbyType);
        let Tb = 20;
        for (const Ub of [sb, kb]) ab.setUint16(Tb, Ub.length, !0), Wb.set(Ub, Tb + 2), Tb += 2 + Ub.length;
        return Wb
      }({
        ...bb,
        unixMs: this.deps.unixNow()
      }))
    }

    function cT(bb) {
      false
    }

    function sT() {
      var bb, cb;
      return null !== (bb = null === (cb = (0, xW.e)(this, Va)[Va]) || void 0 === cb ? void 0 : cb.on) && void 0 !== bb && bb
    }

    function kT() {
      const bb = (0, xW.e)(this, Xa)[Xa];
      let cb = !0;
      if (bb) try {
        cb = bb.busy()
      } catch (sb) {
        if (!(0, xW.e)(this, ja)[ja](sb)) throw sb
      }
      return cb || (0, xW.e)(this, Ba)[Ba].active
    }
    async function WT() {
      !(0, xW.e)(this, la)[la] && this.deps.allowed() ? await (0, xW.e)(this, ia)[ia]() : (0, xW.e)(this, ua)[ua] = null
    }

    function aT() {
      return (0, xW.e)(this, ma)[ma] || (0, xW.e)(this, la)[la] ? Promise.resolve(!1) : (0, xW.e)(this, Xa)[Xa] ? Promise.resolve(!0) : ((0, xW.e)(this, ea)[ea] ??= (0, xW.e)(this, Oa)[Oa](), (0, xW.e)(this, ea)[ea])
    }
    async function TT() {
      let bb = !1;
      try {
        return bb = await (0, xW.e)(this, Za)[Za](), bb
      } finally {
        bb || ((0, xW.e)(this, ua)[ua] = null), (0, xW.e)(this, ea)[ea] = null
      }
    }

    function UT() {
      if (!(0, xW.e)(this, Xa)[Xa]) return Promise.resolve((0, xW.e)(this, ma)[ma] ? "trapped" : "vn");
      if (!(0, xW.e)(this, Qa)[Qa]) {
        let bb = () => {};
        const cb = new Promise((cb => {
          bb = cb
        }));
        (0, xW.e)(this, Qa)[Qa] = {
          promise: cb,
          resolve: bb
        }
      }
      return (0, xW.e)(this, Qa)[Qa].promise
    }

    function IT(bb) {
      const cb = (0, xW.e)(this, Qa)[Qa];
      (0, xW.e)(this, Qa)[Qa] = null, null === cb || void 0 === cb || cb.resolve(bb)
    }
    async function HT() {
      let bb = (0, xW.e)(this, Ma)[Ma];
      if (!bb) {
        const cb = (0, xW.e)(this, Ca)[Ca];
        try {
          bb = await this.deps.load()
        } catch (sb) {
          return cb === (0, xW.e)(this, Ca)[Ca] && await (0, xW.e)(this, va)[va](sb), !1
        }
        if (cb !== (0, xW.e)(this, Ca)[Ca]) return this.deps.unload(), !1;
        const kb = bb,
          Wb = (0, xW.e)(this, xa)[xa]((() => kb.CWb()));
        if (void 0 === Wb) return !1;
        const ab = this.deps.core.NWb();
        if (Wb !== ab) return await (0, xW.e)(this, va)[va](new Error(`recorder port version ${Wb}, the core's ${ab}`)), !1;
        (0, xW.e)(this, Ma)[Ma] = bb
      }
      const cb = bb;
      try {
        if (!(0, xW.e)(this, xa)[xa]((() => ((0, xW.e)(this, Xa)[Xa] = new cb.VWb, (0, xW.e)(this, na)[na] = cb.MWb(), !0)))) return !1;
        (0, xW.e)(this, qa)[qa]();
        const bb = (0, xW.e)(this, ua)[ua];
        return (0, xW.e)(this, ua)[ua] = null, bb && (0, xW.e)(this, Aa)[Aa](Xb.Vc.Control, bb), (0, xW.e)(this, za)[za]()
      } catch (sb) {
        return (0, xW.e)(this, wa)[wa](), await (0, xW.e)(this, va)[va](sb), !1
      }
    }

    function fT() {
      return this.deps.core.LWb(0), 1 === this.deps.core.LWb(1) || ((0, xW.e)(this, wa)[wa](), this.deps.failed(Ha), !1)
    }

    function MT() {
      (0, xW.e)(this, Va)[Va] && (0, xW.e)(this, Aa)[Aa](Xb.Vc.Prefs, aa((0, xW.e)(this, Va)[Va].on, (0, xW.e)(this, Va)[Va].seconds)), (0, xW.e)(this, La)[La] && (0, xW.e)(this, ta)[ta]((0, xW.e)(this, La)[La])
    }

    function XT() {
      return Ia({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var bb, cb;
          return null !== (bb = null === (cb = (0, xW.e)(this, Va)[Va]) || void 0 === cb ? void 0 : cb.seconds) && void 0 !== bb ? bb : 0
        },
        trapped: () => (0, xW.e)(this, ma)[ma],
        busy: () => (0, xW.e)(this, Da)[Da](),
        loadInFlight: () => (0, xW.e)(this, ea)[ea],
        Em: () => (0, xW.e)(this, la)[la],
        unload: () => {
          (0, xW.e)(this, wa)[wa]()
        },
        load: () => (0, xW.e)(this, ia)[ia]()
      })
    }

    function nT(bb, cb) {
      (0, xW.e)(this, Ya)[Ya] ? (0, xW.e)(this, Ya)[Ya].push([bb, cb]): (0, xW.e)(this, Fa)[Fa](((sb, kb) => {
        const Wb = sb.XWb(cb.length);
        0 !== Wb && (new Uint8Array(kb.buffer, Wb, cb.length).set(cb), sb.command(bb, cb.length))
      }))
    }

    function mT() {
      (0, xW.e)(this, Ca)[Ca]++, (0, xW.e)(this, Ka)[Ka]("vn"), (0, xW.e)(this, Ba)[Ba].stop(), this.deps.core.LWb(0), (0, xW.e)(this, ra)[ra](), (0, xW.e)(this, ma)[ma] || ((0, xW.e)(this, Ma)[Ma] = null, this.deps.unload())
    }

    function lT() {
      (0, xW.e)(this, Fa)[Fa]((bb => {
        bb.free()
      })), (0, xW.e)(this, Xa)[Xa] = null, (0, xW.e)(this, na)[na] = null, (0, xW.e)(this, ga)[ga] = null
    }

    function QT() {
      var bb;
      const cb = this.deps.coreBuffer();
      return (null === (bb = (0, xW.e)(this, ha)[ha]) || void 0 === bb ? void 0 : bb.buffer) !== cb && ((0, xW.e)(this, ha)[ha] = new Uint8Array(cb)), (0, xW.e)(this, ha)[ha]
    }

    function eT() {
      var bb;
      const cb = this.deps.coreBuffer();
      return (null === (bb = (0, xW.e)(this, Ja)[Ja]) || void 0 === bb ? void 0 : bb.buffer) !== cb && ((0, xW.e)(this, Ja)[Ja] = new Uint32Array(cb, 0, cb.byteLength >>> 2)), (0, xW.e)(this, Ja)[Ja]
    }

    function CT(bb) {
      var cb;
      const sb = bb.buffer;
      return (null === (cb = (0, xW.e)(this, ga)[ga]) || void 0 === cb ? void 0 : cb.buffer) !== sb && ((0, xW.e)(this, ga)[ga] = new Uint8Array(sb)), (0, xW.e)(this, ga)[ga]
    }
    async function NT(bb) {
      await this.deps.staleOr(bb, (() => {
        this.deps.failed(Ha)
      }))
    }

    function VT(bb) {
      const cb = (0, xW.e)(this, Xa)[Xa],
        sb = (0, xW.e)(this, na)[na];
      if (cb && sb) return (0, xW.e)(this, xa)[xa]((() => bb(cb, sb)))
    }

    function LT(bb) {
      if (!(0, xW.e)(this, ma)[ma]) try {
        return bb()
      } catch (cb) {
        if (!(0, xW.e)(this, ja)[ja](cb)) throw cb;
        return
      }
    }

    function uT(bb) {
      return bb instanceof WebAssembly.RuntimeError && ((0, xW.e)(this, ma)[ma] = !0, (0, xW.e)(this, Xa)[Xa] = null, (0, xW.e)(this, na)[na] = null, (0, xW.e)(this, ga)[ga] = null, (0, xW.e)(this, Ma)[Ma] = null, (0, xW.e)(this, ua)[ua] = null, (0, xW.e)(this, Ka)[Ka]("trapped"), this.deps.core.LWb(0), (0, xW.e)(this, Ba)[Ba].stop(), this.deps.crash(this.deps.markTrapped(bb)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var YT = sb(38253);
    const hT = new Map([
      ["skyblock", () => sb.e(49).then((() => sb(38245)))]
    ]);

    function JT(bb) {
      const cb = hT.get(bb);
      return cb ? cb().then((() => {
        const cb = (0, YT.c)(bb);
        if (!cb) throw new Error(`${bb}'s replay hook module registered no hook`);
        return cb
      })) : null
    }
    class gT {
      constructor(bb) {
        this.deps = bb, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(bb) {
        if (this.pending.clear(), bb === this.game && null !== this.hook) return void(this.all = !0);
        const cb = ++this.generation;
        this.game = bb, this.hook = null, this.all = !1;
        const sb = this.deps.loadHook(bb);
        null === sb || void 0 === sb || sb.then((bb => {
          cb === this.generation && (this.hook = bb, this.all = !0)
        }), (bb => {
          cb === this.generation && this.deps.onError(bb)
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
          hook: cb
        } = this;
        if (null === cb || !bb || !this.all && 0 === this.pending.size) return;
        const sb = this.deps.cmd();
        if (null === sb) return;
        const {
          api: kb
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: bb,
            count: cb
          } = Ks(kb, this.ids);
          this.ids = bb;
          for (let sb = 0; sb < cb; sb++) this.pending.set(bb[sb], !0)
        }
        const Wb = this.ids = Zs(this.ids, this.pending.size);
        let ab = 0;
        for (const Hb of this.pending.keys()) Wb[ab++] = Hb;
        const Tb = [],
          Ub = zs(kb, Wb, ab, ((bb, cb) => {
            null !== cb && Tb.push({
              serverId: bb,
              info: cb,
              spawned: !0 === this.pending.get(bb)
            })
          }));
        if (Ub) {
          this.pending.clear();
          for (const {
              serverId: bb,
              info: kb,
              spawned: Wb
            }
            of Tb) try {
            cb(kb, {
              setFacingTolerance: cb => {
                null === cb && Wb || as(sb, bb, cb) || this.pending.set(bb, Wb)
              }
            })
          } catch (Ib) {
            this.deps.onError(Ib)
          }
        }
      }
    }
    var BT = (0, jW.c)("bindings"),
      tT = (0, jW.c)("module"),
      yT = (0, jW.c)("memory"),
      PT = (0, jW.c)("trapped"),
      DT = (0, jW.c)("generation"),
      ET = (0, jW.c)("loading"),
      iT = (0, jW.c)("lend"),
      OT = (0, jW.c)("givenUp"),
      GT = (0, jW.c)("afterSave"),
      KT = (0, jW.c)("opens"),
      ZT = (0, jW.c)("saveAskedAt"),
      zT = (0, jW.c)("unload"),
      qT = (0, jW.c)("dropModule"),
      dT = (0, jW.c)("loadFailed"),
      AT = (0, jW.c)("saveReadsBody"),
      wT = (0, jW.c)("command"),
      rT = (0, jW.c)("call"),
      oT = (0, jW.c)("guard"),
      ST = (0, jW.c)("trapOn");
    class RT {
      constructor(bb) {
        this.deps = bb, Object.defineProperty(this, ST, {
          value: sU
        }), Object.defineProperty(this, oT, {
          value: cU
        }), Object.defineProperty(this, rT, {
          value: bU
        }), Object.defineProperty(this, wT, {
          value: pT
        }), Object.defineProperty(this, AT, {
          get: jT,
          set: void 0
        }), Object.defineProperty(this, dT, {
          value: xT
        }), Object.defineProperty(this, qT, {
          value: FT
        }), Object.defineProperty(this, zT, {
          value: vT
        }), Object.defineProperty(this, BT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, PT, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, DT, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ET, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, iT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, OT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GT, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KT, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ZT, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, xW.e)(this, tT)[tT] && null === (0, xW.e)(this, GT)[GT]
      }
      async open(bb) {
        if ((0, xW.e)(this, PT)[PT]) return Xb.id.ModuleTrap;
        let cb = (0, xW.e)(this, BT)[BT];
        if (!cb) {
          const bb = (0, xW.e)(this, DT)[DT];
          (0, xW.e)(this, ET)[ET]++;
          try {
            cb = await this.deps.load()
          } catch (kb) {
            return (0, xW.e)(this, ET)[ET]--, bb !== (0, xW.e)(this, DT)[DT] ? "stopped" : (0, xW.e)(this, dT)[dT](kb)
          }
          if ((0, xW.e)(this, ET)[ET]--, bb !== (0, xW.e)(this, DT)[DT]) return (0, xW.e)(this, BT)[BT] || 0 !== (0, xW.e)(this, ET)[ET] || (0, xW.e)(this, PT)[PT] || this.deps.unload(), "stopped";
          if ((0, xW.e)(this, PT)[PT]) return Xb.id.ModuleTrap;
          const sb = cb.CWb(),
            Wb = this.deps.core.NWb();
          if (sb !== Wb) return (0, xW.e)(this, dT)[dT](new Error(`replay port version ${sb}, the core's ${Wb}`));
          (0, xW.e)(this, BT)[BT] = cb
        }
        if (!(0, xW.e)(this, tT)[tT]) {
          const bb = cb;
          if (!(0, xW.e)(this, oT)[oT]((() => {
              (0, xW.e)(this, tT)[tT] = new bb.uWb, (0, xW.e)(this, yT)[yT] = bb.hWb()
            }))) return Xb.id.ModuleTrap
        }
        let sb = !1;
        return (0, xW.e)(this, rT)[rT](((cb, kb) => {
          null !== (0, xW.e)(this, GT)[GT] && cb.step(0, 0);
          const Wb = cb.stage(bb.length);
          0 !== Wb && (new Uint8Array(kb.buffer, Wb, bb.length).set(bb), cb.open(), (0, xW.e)(this, OT)[OT] = (0, xW.e)(this, iT)[iT], (0, xW.e)(this, GT)[GT] = null, (0, xW.e)(this, KT)[KT]++, sb = !0)
        })) ? sb ? "opening" : Xb.id.TooLarge : Xb.id.ModuleTrap
      }
      beforeFrame(bb) {
        const cb = (0, xW.e)(this, tT)[tT],
          sb = (0, xW.e)(this, yT)[yT];
        if (!cb || !sb || null !== (0, xW.e)(this, GT)[GT]) return;
        const {
          core: kb
        } = this.deps, Wb = kb.JWb(bb);
        if (Wb < 0) return;
        const ab = Math.floor(Wb);
        let Tb, Ub;
        try {
          Tb = cb.step(ab, Wb - ab), Ub = cb.mWb()
        } catch (Hb) {
          return void(0, xW.e)(this, ST)[ST](Hb)
        }
        const Ib = kb.eWb(1, Tb);
        if (0 === Ib) {
          const bb = (0, xW.e)(this, rT)[rT]((bb => {
            bb.close()
          }));
          if (!bb) return;
          return (0, xW.e)(this, AT)[AT] ? (0, xW.e)(this, GT)[GT] = "drop" : (0, xW.e)(this, qT)[qT](), void kb.gWb(Xb.id.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Ib, Tb).set(new Uint8Array(sb.buffer, Ub, Tb))
      }
      play() {
        (0, xW.e)(this, wT)[wT]((bb => {
          bb.play()
        }))
      }
      pause() {
        (0, xW.e)(this, wT)[wT]((bb => {
          bb.pause()
        }))
      }
      seek(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, xW.e)(this, wT)[wT]((sb => {
          sb.seek(bb, cb)
        }))
      }
      setMark(bb, cb) {
        return (0, xW.e)(this, wT)[wT]((sb => {
          sb.BWb(bb, cb)
        }))
      }
      addKeyframe(bb, cb) {
        return (0, xW.e)(this, wT)[wT]((sb => {
          sb.tWb(bb[0], bb[1], bb[2], cb[0], cb[1], cb[2])
        }))
      }
      setKeyframe(bb, cb) {
        return (0, xW.e)(this, wT)[wT]((sb => {
          sb.yWb(bb, cb)
        }))
      }
      moveKeyframe(bb, cb) {
        return (0, xW.e)(this, wT)[wT]((sb => {
          sb.PWb(bb, cb)
        }))
      }
      deleteKeyframes(bb, cb) {
        return (0, xW.e)(this, wT)[wT]((sb => {
          sb.DWb(bb, cb)
        }))
      }
      crop(bb, cb) {
        return null === (0, xW.e)(this, iT)[iT] && (0, xW.e)(this, wT)[wT]((sb => {
          sb.crop(bb, cb)
        }))
      }
      beginSave() {
        const bb = (0, xW.e)(this, ZT)[ZT];
        if ((0, xW.e)(this, ZT)[ZT] = null, null !== bb && bb !== (0, xW.e)(this, KT)[KT]) return null;
        let cb = 0,
          sb = null;
        if ((0, xW.e)(this, rT)[rT](((bb, kb) => {
            cb = bb.save(), 0 !== cb && (sb = new Uint8Array(kb.buffer, bb.EWb(), bb.iWb()).slice())
          })), 0 === cb || !sb) return null;
        const kb = {
          headLen: cb,
          editState: sb,
          givenUp: () => (0, xW.e)(this, OT)[OT] === kb,
          head: (bb, cb) => {
            if ((0, xW.e)(this, iT)[iT] !== kb || !(0, xW.e)(this, AT)[AT]) return null;
            let sb = null;
            return (0, xW.e)(this, rT)[rT](((kb, Wb) => {
              const ab = kb.OWb();
              0 !== ab && bb >= 0 && cb >= 0 && bb + cb <= ab && (sb = new Uint8Array(Wb.buffer, kb.GWb() + bb, cb))
            })), sb
          },
          end: () => {
            if ((0, xW.e)(this, iT)[iT] !== kb) return;
            (0, xW.e)(this, iT)[iT] = null, (0, xW.e)(this, OT)[OT] = null, (0, xW.e)(this, rT)[rT]((bb => {
              bb.KWb()
            }));
            const bb = (0, xW.e)(this, GT)[GT];
            (0, xW.e)(this, GT)[GT] = null, "unload" === bb ? (0, xW.e)(this, zT)[zT]() : "drop" === bb && (0, xW.e)(this, qT)[qT]()
          }
        };
        return (0, xW.e)(this, iT)[iT] = kb, kb
      }
      askSave() {
        (0, xW.e)(this, ZT)[ZT] = (0, xW.e)(this, KT)[KT]
      }
      setSpeed(bb) {
        (0, xW.e)(this, wT)[wT]((cb => {
          cb.ZWb(bb)
        }))
      }
      setCameraMode(bb) {
        (0, xW.e)(this, wT)[wT]((cb => {
          cb.zWb(bb)
        }))
      }
      close() {
        (0, xW.e)(this, wT)[wT]((bb => {
          bb.close()
        }))
      }
      stop() {
        (0, xW.e)(this, DT)[DT]++, (0, xW.e)(this, AT)[AT] && ((0, xW.e)(this, rT)[rT]((bb => {
          bb.close()
        })), (0, xW.e)(this, tT)[tT]) ? (0, xW.e)(this, GT)[GT] = "unload" : (0, xW.e)(this, zT)[zT]()
      }
    }

    function vT() {
      (0, xW.e)(this, qT)[qT](), (0, xW.e)(this, PT)[PT] || ((0, xW.e)(this, BT)[BT] = null, this.deps.unload())
    }

    function FT() {
      (0, xW.e)(this, rT)[rT]((bb => {
        bb.free()
      })), (0, xW.e)(this, tT)[tT] = null, (0, xW.e)(this, yT)[yT] = null
    }
    async function xT(bb) {
      return await this.deps.staleOr(bb, (() => {})) ? "reloading" : Xb.id.ModuleLoad
    }

    function jT() {
      return null !== (0, xW.e)(this, iT)[iT] && (0, xW.e)(this, OT)[OT] !== (0, xW.e)(this, iT)[iT]
    }

    function pT(bb) {
      return null === (0, xW.e)(this, GT)[GT] && (0, xW.e)(this, rT)[rT](bb)
    }

    function bU(bb) {
      const cb = (0, xW.e)(this, tT)[tT],
        sb = (0, xW.e)(this, yT)[yT];
      return !(!cb || !sb) && (0, xW.e)(this, oT)[oT]((() => {
        bb(cb, sb)
      }))
    }

    function cU(bb) {
      if ((0, xW.e)(this, PT)[PT]) return !1;
      try {
        return bb(), !0
      } catch (cb) {
        return (0, xW.e)(this, ST)[ST](cb), !1
      }
    }

    function sU(bb) {
      if (!(bb instanceof WebAssembly.RuntimeError)) throw bb;
      (0, xW.e)(this, PT)[PT] = !0, (0, xW.e)(this, tT)[tT] = null, (0, xW.e)(this, yT)[yT] = null, (0, xW.e)(this, BT)[BT] = null, this.deps.crash(this.deps.markTrapped(bb)), this.deps.core.gWb(Xb.id.ModuleTrap)
    }
    var kU = sb(6136),
      WU = sb(40154);
    const aU = "[bloxd-wasm-client]";
    const TU = String(tW);

    function UU(bb) {
      return null === bb || bb === TU ? void 0 : bb
    }

    function IU(bb) {
      var cb, sb, kb, Wb, ab, Ub, Ib;
      switch (bb.what) {
        case Xb.td.FlyingText: {
          let cb;
          try {
            cb = JSON.parse(bb.contentJson)
          } catch (Hb) {
            return void console.warn(`${aU} a replay's flying text isn't JSON`, Hb)
          }
          Tb.j.QQ("forceFlyingMiddleMessage", {
            content: cb,
            sT: bb.sT,
            angle: bb.angle,
            kT: bb.kT
          });
          break
        }
        case Xb.td.PlayerKilled:
          (0, WU.f)({
            kind: "killed",
            body: {
              deadEId: null !== (cb = UU(bb.dead)) && void 0 !== cb ? cb : "",
              killerEId: UU(bb.killer),
              withItem: null !== (sb = bb.withItem) && void 0 !== sb ? sb : "",
              killstreak: bb.killstreak
            }
          });
          break;
        case Xb.td.Killfeed:
          (0, WU.f)({
            kind: "custom",
            body: {
              killer: {
                eId: UU(bb.killerId),
                name: null !== (kb = bb.killerName) && void 0 !== kb ? kb : void 0,
                colour: null !== (Wb = bb.killerColour) && void 0 !== Wb ? Wb : void 0
              },
              victim: {
                eId: UU(bb.victimId),
                name: null !== (ab = bb.victimName) && void 0 !== ab ? ab : void 0,
                colour: null !== (Ub = bb.victimColour) && void 0 !== Ub ? Ub : void 0
              },
              withItem: null !== (Ib = bb.withItem) && void 0 !== Ib ? Ib : ""
            }
          })
      }
    }
    const HU = "[bloxd-wasm-client]";

    function fU(bb) {
      if (void 0 === bb || null === bb || "" === bb) return null;
      const cb = Number(bb);
      return Number.isInteger(cb) && cb > tW && cb <= 2147483647 ? cb : null
    }

    function MU(bb) {
      return {
        id: fU(bb.eId),
        name: "string" === typeof bb.name ? bb.name : null,
        colour: "string" === typeof bb.colour ? bb.colour : null
      }
    }

    function XU(bb) {
      const cb = (0, zW.k)(os.Yb.PlayerKilled, (cb => {
          var sb, kb;
          const Wb = (0, ZW.j)(cb);
          if (!(0, ZW.c)(Wb)) return;
          const {
            deadEId: ab,
            killerEId: Tb,
            withItem: Ub,
            killstreak: Ib
          } = Wb;
          bb.recordPlayerKilled(null !== (sb = fU(ab)) && void 0 !== sb ? sb : tW, null !== (kb = fU(Tb)) && void 0 !== kb ? kb : tW, "number" === typeof Ib ? Ib : 0, "string" === typeof Ub ? Ub : "")
        })),
        sb = (0, zW.k)(os.Yb.CustomKillfeed, (cb => {
          const sb = (0, ZW.j)(cb);
          if (!(0, ZW.c)(sb) || !(0, ZW.c)(sb.killer) || !(0, ZW.c)(sb.victim)) return;
          const {
            killer: kb,
            victim: Wb,
            withItem: ab
          } = sb;
          bb.recordKillfeed(MU(kb), MU(Wb), "string" === typeof ab ? ab : null)
        }));
      return () => {
        cb(), sb()
      }
    }

    function nU(bb) {
      var cb;
      return void 0 === bb || null === bb ? null : null !== (cb = JSON.stringify(bb)) && void 0 !== cb ? cb : null
    }

    function mU(bb) {
      let cb = null;
      const sb = () => {
        const {
          enableClipping: sb,
          clipDurationSeconds: Wb
        } = kb.d.get("clientEscMenuOptions"), ab = `${sb}:${Wb}`;
        ab !== cb && (cb = ab, bb.recorder.setPrefs(sb, Wb))
      };
      return sb(), (0, Tb.l)("appManagerUpdated|clientEscMenuOptions", sb)
    }
    const lU = "replayModule",
      QU = "recorderModule";

    function eU(bb, cb, sb) {
      return function() {
        return bb.isStopped ? sb : cb(...arguments)
      }
    }
    const CU = {
      open: () => Promise.reject(new Error(NW.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function NU() {
      return sb.e(61).then((() => sb(60894)))
    }

    function VU(bb) {
      (0, NW.h)({
        text: bb,
        type: "Error"
      })
    }
    class LU {
      constructor(bb) {
        this.deps = bb, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: cb,
          api: kb,
          core: Wb
        } = bb, ab = () => bb.memory().buffer, Tb = () => cb.isStopped ? null : cb.rings.cmd, Ub = eU(cb, ((bb, cb) => Wb.eWb(bb, cb)), 0), Ib = () => Wb.NWb();
        let Hb = null;
        this.replay = new RT({
          core: {
            JWb: eU(cb, (bb => Wb.JWb(bb)), -1),
            eWb: Ub,
            NWb: Ib,
            gWb: eU(cb, (bb => {
              Wb.gWb(bb)
            }), void 0)
          },
          coreBuffer: ab,
          load: async () => (Hb = await sb.e(62).then((() => sb(60899))), Hb.loadReplayModule()),
          unload: () => {
            var bb;
            null === (bb = Hb) || void 0 === bb || bb.unloadReplayModule()
          },
          markTrapped: bb => Hb ? Hb.markReplayTrapped(bb) : new Error(String(bb)),
          staleOr: (cb, sb) => bb.staleOr(lU, cb, sb),
          crash: cb => {
            bb.reportFault(lU, cb)
          }
        });
        let fb = null;
        this.recorder = new pa({
          core: {
            LWb: eU(cb, (bb => Wb.LWb(bb)), 0),
            nWb: eU(cb, (bb => Wb.nWb(bb)), 0),
            eWb: Ub,
            NWb: Ib
          },
          coreCommand: (bb, cb) => {
            var sb, kb;
            return null !== (sb = null === (kb = Tb()) || void 0 === kb ? void 0 : kb.writeCmd(bb, 0, cb)) && void 0 !== sb && sb
          },
          coreBuffer: ab,
          load: async () => (fb = await NU(), fb.loadRecorderModule()),
          prefetch: () => {
            NU().then((bb => bb.prefetchRecorderModule())).catch((bb => {
              console.warn(`${HU} the recorder module didn't prefetch, so a save loads it:`, bb)
            }))
          },
          unload: () => {
            var bb;
            null === (bb = fb) || void 0 === bb || bb.unloadRecorderModule()
          },
          markTrapped: bb => fb ? fb.markRecorderTrapped(bb) : new Error(String(bb)),
          memoryBytes: () => {
            var bb, cb;
            return null !== (bb = null === (cb = fb) || void 0 === cb ? void 0 : cb.recorderMemoryBytes()) && void 0 !== bb ? bb : 0
          },
          staleOr: (cb, sb) => bb.staleOr(QU, cb, sb),
          crash: cb => {
            bb.reportFault(QU, cb)
          },
          allowed: () => !0 === bb.options.get("canRecordReplays"),
          failed: VU,
          events: (bb, cb) => {
            this.runtime.recorderEvents(bb, cb)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: VU,
          unixNow: () => Date.now()
        });
        const Mb = new BW({
          core: {
            WWb: eU(cb, (bb => Wb.WWb(bb)), 0),
            TWb: eU(cb, (() => {
              Wb.TWb()
            }), void 0),
            OQ: eU(cb, (() => Wb.OQ()), 0),
            aWb: eU(cb, (() => Wb.aWb()), 0)
          },
          buffer: ab,
          apiView: () => kb.apiView,
          cmd: Tb,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new gT({
          api: kb,
          cmd: Tb,
          loadHook: JT,
          onError: bb => {
            console.warn(`${HU} the recorded game's replay hooks:`, bb)
          }
        });
        const Xb = new KW({
          client: Mb,
          buffer: ab,
          setHoldDraws: bb => {
            cb.setHoldDraws(bb)
          },
          notify: NW.h,
          onRecorderState: () => {
            var bb;
            null === (bb = (0, LW.f)()) || void 0 === bb || bb.recorderChanged()
          },
          onViewerChange: () => {
            var bb;
            null === (bb = (0, LW.f)()) || void 0 === bb || bb.viewerChanged()
          },
          onReplayOption: cb => {
            ! function(bb, cb) {
              var sb, kb;
              const Wb = os.fb[cb.key];
              if (void 0 === Wb) return;
              let ab = null !== (sb = cb.value) && void 0 !== sb ? sb : JSON.parse(JSON.stringify(null !== (kb = kU.b[Wb]) && void 0 !== kb ? kb : null));
              if (null !== cb.value && cb.key < os.Eb.Environment && "string" === typeof ab) try {
                ab = JSON.parse(ab)
              } catch (Tb) {
                return void console.warn(`${aU} a replay's ${Wb} isn't JSON`, Tb)
              }
              bb.applyNewClientOptions({
                [Wb]: ab
              })
            }(bb.options, cb)
          },
          onReplayUiEvent: IU,
          onReplayOpened: cb => {
            this.entityHooks.opened((0, gb.Wb)(cb)), bb.replayShaderPack(cb)
          },
          meshPending: () => {
            var bb, sb;
            return null !== (bb = null === (sb = cb.lastHeader) || void 0 === sb ? void 0 : sb.renderPending) && void 0 !== bb ? bb : 0
          },
          viewerOpen: VW.b,
          download: bb => {
            (0, eW.i)(bb)
          }
        });
        this.runtime = Xb, kb.replay = Xb.sink, (0, LW.s)(Xb);
        const nb = new AW({
          live: () => {
            var bb;
            return !cb.isStopped && !0 === (null === (bb = Xb.currentViewer) || void 0 === bb ? void 0 : bb.inPlayback)
          },
          cmd: Tb,
          dragScale: vW
        });
        this.freecam = nb, (0, LW.r)(nb), this.recordedOptions = function(bb, cb) {
          const sb = os.fb,
            kb = sb.map(((sb, kb) => cb.subscribe(sb, (cb => {
              bb.setOption(kb, nU(cb))
            }))));
          return {
            sendAll() {
              sb.forEach(((sb, kb) => {
                bb.setOption(kb, nU(cb.get(sb)))
              }))
            },
            stop() {
              for (const bb of kb) bb()
            }
          }
        }(Xb.recorder, bb.options), this.stops = [(0, kk.r)((bb => {
          nb.flush();
          try {
            this.replay.beforeFrame(bb)
          } catch (cb) {
            this.deps.reportFault("replayFrame", cb)
          }
        })), (0, kk.G)(((bb, cb) => {
          try {
            this.recorder.afterFrame(), cb && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (sb) {
            this.deps.reportFault("recorderFrame", sb)
          }
          try {
            Xb.afterFrame(bb)
          } catch (sb) {
            this.deps.reportFault("replayRuntime", sb)
          }
        })), mU(Xb), () => {
          this.recordedOptions.stop()
        }, XU(Xb.recorder), (0, qW.i)((bb => {
          let {
            action: cb,
            down: sb
          } = bb;
          var kb;
          sb && (null === (kb = (0, LW.f)()) || void 0 === kb || kb.keyDown(cb))
        }))];
        const mb = () => {
          const bb = Xb.currentViewer;
          return !0 === (null === bb || void 0 === bb ? void 0 : bb.isOpen) ? bb : null
        };
        (0, CW.e)({
          open: (bb, cb) => this.open(bb, cb),
          replayKey: () => {
            var bb, cb;
            return null !== (bb = null === (cb = mb()) || void 0 === cb ? void 0 : cb.id) && void 0 !== bb ? bb : null
          },
          saveRefusal: () => {
            var bb, cb;
            return null !== (bb = null === (cb = mb()) || void 0 === cb ? void 0 : cb.saveRefusal) && void 0 !== bb ? bb : null
          },
          encode: () => {
            var bb, cb;
            return null !== (bb = null === (cb = mb()) || void 0 === cb ? void 0 : cb.save()) && void 0 !== bb ? bb : Promise.resolve(null)
          },
          fileHandle: () => {
            var bb, cb;
            return null !== (bb = null === (cb = Xb.currentViewer) || void 0 === cb ? void 0 : cb.fileHandle) && void 0 !== bb ? bb : null
          },
          markSaved: (bb, cb) => {
            var sb;
            null === (sb = Xb.currentViewer) || void 0 === sb || sb.markSaved(bb, cb)
          }
        })
      }
      netEvent(bb) {
        if ("connection" === bb.type)
          if (bb.phase === Xb.x.Activated) {
            this.activeConn = bb.conn;
            const cb = this.deps.sessionInfo(bb.conn);
            null !== cb && (this.runtime.activated({
              lobbyType: (0, Bb.r)(cb.lobbyName),
              gameNameWithVariation: cb.gameNameWithVariation,
              lobbyName: cb.lobbyName
            }), this.recordedOptions.sendAll())
          } else bb.phase !== Xb.x.Left && bb.phase !== Xb.x.Closed || bb.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const bb of this.stops) bb();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, LW.l)() === this.runtime && (0, LW.s)(null), (0, LW.h)() === this.freecam && (0, LW.r)(null), (0, CW.e)(CU), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(bb, cb) {
        const {
          running: sb
        } = this.deps;
        if (sb.isStopped) throw new Error(NW.d.coreStopped.text);
        if (bb.byteLength > 67108864) throw new Error(NW.d.cantOpen.text);
        let kb;
        try {
          kb = await async function(bb) {
            const cb = await bb.loadViewer();
            return cb.inPlayback || (0, kk.N)().leaveGame(null), cb
          }(this.runtime)
        } catch (Wb) {
          throw console.warn(`${HU} the replay viewer didn't load`, Wb), new Error(NW.d.viewerLoadFailed.text)
        }
        if (sb.isStopped) throw new Error(NW.d.coreStopped.text);
        await kb.open(bb, cb)
      }
    }
    var uU = sb(1895);

    function YU(bb, cb) {
      const {
        aux: sb,
        payload: kb
      } = function(bb) {
        return {
          aux: bb.reset ? Xb.cc.ResetFirst : 0,
          payload: JU(bb.changes)
        }
      }(cb);
      bb.queueOptions(sb, kb) && (cb.reset && uU.e.reset(), uU.e.apply(cb.changes))
    }
    const hU = new TextEncoder;

    function JU(bb) {
      const cb = new gU;
      return tU(cb, bb), cb.bytes()
    }
    class gU {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(bb) {
        if (this.len + bb <= this.buf.length) return;
        const cb = new Uint8Array(Math.max(2 * this.buf.length, this.len + bb));
        cb.set(this.buf.subarray(0, this.len)), this.buf = cb, this.view = new DataView(cb.buffer)
      }
      u8(bb) {
        this.room(1), this.buf[this.len++] = bb
      }
      tagged(bb, cb, sb) {
        this.room(1 + cb), this.buf[this.len++] = bb, 1 === cb ? this.view.setUint8(this.len, sb) : 2 === cb ? this.view.setUint16(this.len, sb) : this.view.setUint32(this.len, sb), this.len += cb
      }
      signed(bb, cb, sb) {
        this.room(1 + cb), this.buf[this.len++] = bb, 1 === cb ? this.view.setInt8(this.len, sb) : 2 === cb ? this.view.setInt16(this.len, sb) : this.view.setInt32(this.len, sb), this.len += cb
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

    function BU(bb, cb, sb, kb, Wb, ab, Tb) {
      cb < kb ? bb.u8(sb | cb) : null !== Wb && cb < 256 ? bb.tagged(Wb, 1, cb) : cb < 65536 ? bb.tagged(ab, 2, cb) : bb.tagged(Tb, 4, cb)
    }

    function tU(bb, cb) {
      switch (typeof cb) {
        case "undefined":
          return void bb.raw(yU);
        case "boolean":
          return void bb.u8(cb ? 195 : 194);
        case "number":
          return void
          function(bb, cb) {
            cb >>> 0 === cb ? cb < 128 ? bb.u8(cb) : cb < 256 ? bb.tagged(204, 1, cb) : cb < 65536 ? bb.tagged(205, 2, cb) : bb.tagged(206, 4, cb) : (cb | 0) === cb ? cb >= -32 ? bb.u8(255 & cb) : cb >= -128 ? bb.signed(208, 1, cb) : cb >= -32768 ? bb.signed(209, 2, cb) : bb.signed(210, 4, cb) : bb.f64(cb)
          }(bb, cb);
        case "string": {
          const sb = hU.encode(cb);
          return BU(bb, sb.length, 160, 32, 217, 218, 219), void bb.raw(sb)
        }
        case "object":
          break;
        default:
          return void bb.u8(192)
      }
      if (null === cb) bb.u8(192);
      else if (Array.isArray(cb)) {
        BU(bb, cb.length, 144, 16, null, 220, 221);
        for (const sb of cb) tU(bb, sb)
      } else if (cb instanceof Uint8Array) BU(bb, cb.length, 0, 0, 196, 197, 198), bb.raw(cb);
      else {
        const sb = Object.keys(cb);
        BU(bb, sb.length, 128, 0, null, 222, 223);
        for (const kb of sb) tU(bb, kb), tU(bb, cb[kb])
      }
    }
    const yU = new Uint8Array([212, 0, 0]);
    var PU = sb(41941),
      DU = sb(41947),
      EU = sb(40447),
      iU = sb(40482),
      OU = sb(3505);
    const GU = [1e3, 3e3, 9e3];
    class KU {
      constructor(bb) {
        this.host = bb, this.sets = new Map, this.table = [], this.generation = 0, this.Em = !1
      }
      onEvent(bb) {
        const cb = function(bb) {
          if (bb.byteLength !== Xb.Bd) return null;
          const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
          return {
            want: cb.getUint16(0, !0),
            release: cb.getUint16(2, !0)
          }
        }(bb);
        cb && !this.Em && (cb.release !== Xb.Cd && this.release(cb.release), cb.want !== Xb.Cd && this.want(cb.want))
      }
      reset(bb) {
        if (!this.Em) {
          for (const [bb, cb] of this.sets) "ready" === cb.state && this.releaseAll(cb.distinct), this.sets.delete(bb);
          this.table = bb, this.generation++
        }
      }
      dispose() {
        if (this.Em) return;
        this.Em = !0, this.generation++, this.table = [];
        const bb = [...this.sets.values()];
        this.sets.clear();
        let cb = null;
        for (const kb of bb)
          for (const bb of "ready" === kb.state ? kb.distinct : []) try {
            this.host.Ysb(bb)
          } catch (sb) {
            cb ??= {
              error: sb
            }
          }
        if (cb) throw cb.error
      }
      isReady(bb) {
        var cb;
        return "ready" === (null === (cb = this.sets.get(bb)) || void 0 === cb ? void 0 : cb.state)
      }
      want(bb) {
        const cb = this.sets.get(bb);
        if ("loading" === (null === cb || void 0 === cb ? void 0 : cb.state)) return cb.wanted = !0, void this.capAnswer(bb, cb);
        if ("ready" === (null === cb || void 0 === cb ? void 0 : cb.state)) return void this.host.sendReady(zU(bb, cb.images, cb.size));
        const sb = this.table[bb];
        if (!sb || 1 !== sb.urls.length && sb.urls.length !== os.Vb.CubeFaces) return this.host.sendReady(qU(bb)), void this.host.onLoadFailed(bb, "", new Error(`no image set ${bb}`));
        const kb = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(bb, kb), this.load(bb, sb, kb, this.generation, 0), this.capAnswer(bb, kb)
      }
      capAnswer(bb, cb) {
        this.host.wait(4e3, (() => {
          this.sets.get(bb) === cb && cb.wanted && this.host.sendReady(qU(bb))
        }))
      }
      load(bb, cb, sb, kb, Wb) {
        const ab = [...new Set(cb.urls)];
        Promise.allSettled(ab.map((bb => this.host.loadImage(bb, cb.orientation)))).then((Tb => {
          const Ub = Tb.flatMap((bb => "fulfilled" === bb.status ? [bb.value] : [])),
            Ib = kb === this.generation && this.sets.get(bb) === sb,
            Hb = Tb.findIndex((bb => "rejected" === bb.status));
          if (!Ib || !sb.wanted) return this.Em ? void this.releaseAfterDispose(Ub.map(ZU)) : (this.releaseAll(Ub.map(ZU)), void(Ib && this.sets.delete(bb)));
          Hb < 0 ? this.loaded(bb, cb, ab, Ub) : (this.releaseAll(Ub.map(ZU)), this.host.sendReady(qU(bb)), Wb < GU.length ? this.host.wait(GU[Wb], (() => {
            kb === this.generation && this.sets.get(bb) === sb && (sb.wanted ? this.load(bb, cb, sb, kb, Wb + 1) : this.sets.delete(bb))
          })) : (this.sets.delete(bb), this.host.onLoadFailed(bb, ab[Hb], Tb[Hb].reason)))
        }))
      }
      loaded(bb, cb, sb, kb) {
        const [Wb] = kb, ab = [Wb.width, Wb.height], Tb = kb.every((bb => bb.width === ab[0] && bb.height === ab[1])), Ub = cb.urls.length === os.Vb.CubeFaces;
        if (!Tb || ab[0] <= 0 || ab[1] <= 0 || ab[0] > 65535 || ab[1] > 65535 || Ub && ab[0] !== ab[1]) {
          this.releaseAll(kb.map(ZU)), this.sets.delete(bb), this.host.sendReady(qU(bb));
          const sb = kb.map((bb => `${bb.width}x${bb.height}`));
          return void this.host.onLoadFailed(bb, cb.urls[0], new Error(`set ${bb}'s images can't make its texture: ${sb.join(", ")}`))
        }
        const Ib = cb.urls.map((bb => kb[sb.indexOf(bb)].id)),
          Hb = kb.map(ZU);
        this.sets.set(bb, {
          state: "ready",
          images: Ib,
          distinct: Hb,
          size: ab
        }), this.host.sendReady(zU(bb, Ib, ab))
      }
      release(bb) {
        const cb = this.sets.get(bb);
        "loading" === (null === cb || void 0 === cb ? void 0 : cb.state) ? cb.wanted = !1: "ready" === (null === cb || void 0 === cb ? void 0 : cb.state) && (this.releaseAll(cb.distinct), this.sets.delete(bb))
      }
      releaseAll(bb) {
        for (const cb of bb) this.host.Ysb(cb)
      }
      releaseAfterDispose(bb) {
        for (const cb of bb) try {
          this.host.Ysb(cb)
        } catch {}
      }
    }

    function ZU(bb) {
      return bb.id
    }

    function zU(bb, cb, sb) {
      const kb = new Uint8Array(os.Vb.SkyImagesReadyBytes),
        Wb = new DataView(kb.buffer);
      return Wb.setUint16(0, bb, !0), Wb.setUint16(2, cb.length, !0), Wb.setUint16(4, sb[0], !0), Wb.setUint16(6, sb[1], !0), cb.slice(0, os.Vb.CubeFaces).forEach(((bb, cb) => {
        Wb.setUint32(8 + 4 * cb, bb, !0)
      })), kb
    }

    function qU(bb) {
      const cb = new Uint8Array(os.Vb.SkyImagesReadyBytes),
        sb = new DataView(cb.buffer);
      return sb.setUint16(0, bb, !0), sb.setUint16(2, os.Vb.Failed, !0), cb
    }
    let dU = Promise.resolve();
    async function AU(bb, cb) {
      let sb;
      try {
        sb = await (0, OU.C)(bb)
      } catch (ab) {
        throw new EU.e("fetch", bb, {
          cause: ab
        })
      }
      const kb = dU.then((() => async function(bb, cb) {
        const sb = new Blob([bb.slice()]);
        let kb = await createImageBitmap(sb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: cb
        });
        const Wb = 1024 / Math.max(kb.width, kb.height);
        if (Wb < 1) {
          const bb = kb;
          try {
            kb = await createImageBitmap(bb, {
              resizeWidth: Math.max(1, Math.round(bb.width * Wb)),
              resizeHeight: Math.max(1, Math.round(bb.height * Wb)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            bb.close()
          }
        }
        return kb
      }(sb, cb)));
      let Wb;
      dU = kb.catch((() => {}));
      try {
        Wb = await kb
      } catch (ab) {
        throw new EU.e("decode", bb, {
          cause: ab
        })
      }
      return {
        id: (0, EU.n)(Wb),
        width: Wb.width,
        height: Wb.height
      }
    }
    var wU = sb(2916),
      rU = sb(33936);
    const oU = wU.d.length;

    function SU(bb) {
      const cb = [],
        sb = [];
      wU.d.forEach(((kb, Wb) => {
        var ab;
        const Tb = null !== (ab = RU(bb[kb])) && void 0 !== ab ? ab : rU.o[kb];
        "custom" === Tb.type ? (sb.push({
          id: Wb,
          kind: os.Vb.KindCustom,
          set: cb.length,
          earth: null
        }), cb.push({
          urls: [Tb.px, Tb.py, Tb.pz, Tb.nx, Tb.ny, Tb.nz],
          orientation: "none"
        })) : sb.push({
          id: Wb,
          kind: os.Vb.KindEarth,
          set: 0,
          earth: Tb
        })
      }));
      const kb = RU(bb.earth);
      "earth" === (null === kb || void 0 === kb ? void 0 : kb.type) && sb.push({
        id: oU,
        kind: os.Vb.KindEarth,
        set: 0,
        earth: kb
      });
      const Wb = cb.length;
      cb.push({
        urls: rU.f.map((bb => rU.j + bb)),
        orientation: "none"
      }), cb.push({
        urls: [rU.n],
        orientation: "flipY"
      }), cb.push({
        urls: [rU.d],
        orientation: "flipY"
      });
      const ab = new Uint8Array(os.Vb.SkyTableHeaderBytes + sb.length * os.Vb.SkyTableEntryBytes),
        Tb = new DataView(ab.buffer);
      return Tb.setUint16(0, Wb, !0), Tb.setUint16(2, Wb + 1, !0), Tb.setUint16(4, Wb + 2, !0), Tb.setUint16(6, sb.length, !0), sb.forEach(((bb, cb) => {
        const sb = os.Vb.SkyTableHeaderBytes + cb * os.Vb.SkyTableEntryBytes;
        Tb.setUint16(sb, bb.id, !0), Tb.setUint8(sb + 2, bb.kind);
        const kb = sb + 4;
        bb.earth ? function(bb, cb, sb) {
          const kb = bb;
          let Wb = 0,
            ab = 0;
          for (const [Tb, Ub] of vU) {
            const bb = kb[Tb];
            "number" === typeof bb && Number.isFinite(bb) && (cb.setFloat32(sb + 4 * Ub, bb, !0), Wb |= 1 << Ub)
          }
          for (const [Tb, Ub, Ib] of FU) {
            const bb = kb[Tb];
            Array.isArray(bb) && 3 === bb.length && bb.every((bb => "number" === typeof bb && Number.isFinite(bb))) && (bb.forEach(((bb, kb) => {
              cb.setFloat32(sb + Ib + 4 * kb, bb, !0)
            })), Wb |= Ub)
          }
          xU.forEach(((bb, ab) => {
            let [Tb, Ub] = bb;
            const Ib = kb[Tb];
            "number" === typeof Ib && Number.isFinite(Ib) && (cb.setFloat32(sb + os.k.CameraOffsetAt + 4 * ab, Ib, !0), Wb |= Ub)
          }));
          for (const [Tb, Ub] of jU) {
            const bb = kb[Tb];
            null !== bb && void 0 !== bb && (Wb |= Ub, bb && (ab |= Ub >>> 14))
          }
          cb.setUint32(sb + os.k.PresentAt, Wb, !0), cb.setUint8(sb + os.k.FlagsAt, ab)
        }(bb.earth, Tb, kb) : Tb.setUint16(kb, bb.set, !0)
      })), {
        payload: ab,
        sets: cb
      }
    }

    function RU(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const cb = bb;
      if ("earth" === cb.type) return bb;
      return "custom" === cb.type && ["px", "py", "pz", "nx", "ny", "nz"].every((bb => {
        const sb = cb[bb];
        return "string" === typeof sb && sb.length > 0
      })) ? bb : null
    }
    const vU = [
        ["inclination", os.k.Inclination],
        ["turbidity", os.k.Turbidity],
        ["luminance", os.k.Luminance],
        ["rayleigh", os.k.Rayleigh],
        ["mieCoefficient", os.k.MieCoefficient],
        ["mieDirectionalG", os.k.MieDirectionalG],
        ["distance", os.k.Distance],
        ["azimuth", os.k.Azimuth]
      ],
      FU = [
        ["sunPosition", os.k.SunPosition, os.k.SunPositionAt],
        ["up", os.k.Up, os.k.UpAt],
        ["vertexTint", os.k.VertexTint, os.k.VertexTintAt]
      ],
      xU = [
        ["xCameraOffset", os.k.CameraOffsetX],
        ["yCameraOffset", os.k.CameraOffsetY],
        ["zCameraOffset", os.k.CameraOffsetZ]
      ],
      jU = [
        ["useSunPosition", os.k.UseSunPosition],
        ["dithering", os.k.Dithering],
        ["infiniteDistance", os.k.InfiniteDistance]
      ];

    function pU(bb, cb, sb) {
      const kb = new cI({
        writeCmd: bb,
        warn: cb,
        followPack: bI(sb, cb)
      });
      return kb.start(), kb
    }

    function bI(bb, cb) {
      return sb => {
        let kb = () => {};
        const Wb = bb((bb => {
          kb(), kb = () => {}, null !== bb ? kb = bb.subscribe((bb => {
            sb(function(bb, cb, sb) {
              if ("object" !== typeof bb || null === bb) return null;
              const kb = bb.skyBoxes;
              if ("object" !== typeof kb || null === kb) return null;
              if ("player" === cb) return kb;
              return Object.fromEntries(Object.entries(kb).filter((bb => {
                let [cb, kb] = bb;
                return !! function(bb) {
                  if ("object" !== typeof bb || null === bb) return !1;
                  return "earth" === bb.type || Object.entries(bb).every((bb => {
                    let [cb, sb] = bb;
                    return "type" === cb || ("" === (kb = sb) || null !== function(bb) {
                      var cb, sb, kb;
                      return "string" !== typeof bb ? null : null !== (cb = null === (sb = sI.exec(bb)) || void 0 === sb || null === (kb = sb.groups) || void 0 === kb ? void 0 : kb.base64) && void 0 !== cb ? cb : null
                    }(kb));
                    var kb
                  }))
                }(kb) || (sb(`Ignoring texture pack skybox ${cb}, whose faces are not all data URLs`, null), !1)
              })))
            }(bb.pack, null === bb.gameSource ? "player" : "customGame", cb))
          })) : sb(null)
        }));
        return () => {
          Wb(), kb()
        }
      }
    }
    class cI {
      constructor(bb) {
        var cb, sb, kb;
        this.host = bb, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Em = !1, this.wait = null !== (cb = bb.wait) && void 0 !== cb ? cb : (bb, cb) => {
          setTimeout(cb, bb)
        }, this.loader = new KU({
          loadImage: null !== (sb = bb.loadImage) && void 0 !== sb ? sb : AU,
          Ysb: null !== (kb = bb.Ysb) && void 0 !== kb ? kb : EU.o,
          sendReady: bb => {
            this.queue.push({
              kind: os.Vb.SkyImagesReady,
              payload: bb
            })
          },
          onLoadFailed: (cb, sb, kb) => {
            bb.warn(`sky image set ${cb} (${sb}) didn't load: the last sky stays`, kb)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(iU.d, (() => {
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
        this.Em = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(bb) {
        if (this.Em) return;
        const cb = SU(bb);
        var sb, kb;
        this.written && (sb = this.written, kb = cb, sb.payload.length === kb.payload.length && sb.payload.every(((bb, cb) => bb === kb.payload[cb])) && sb.sets.length === kb.sets.length && sb.sets.every(((bb, cb) => {
          const sb = kb.sets[cb];
          return bb.orientation === sb.orientation && bb.urls.length === sb.urls.length && bb.urls.every(((bb, cb) => bb === sb.urls[cb]))
        }))) || (this.written = cb, this.loader.reset(cb.sets), this.queue = this.queue.filter((bb => bb.kind !== os.Vb.SkyImagesReady)), this.queue.push({
          kind: os.Vb.SkyTable,
          payload: cb.payload
        }))
      }
    }
    const sI = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var kI = sb(2664),
      WI = sb(2740),
      aI = sb(324),
      TI = sb(211),
      UI = sb(2666),
      II = sb(2668),
      HI = sb(297),
      fI = sb(301),
      MI = sb(2689),
      XI = sb(2699),
      nI = sb(2714),
      mI = sb(137),
      lI = sb(312),
      QI = sb(40248);
    class eI {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, zW.k)(Ck.S, (bb => {
          this.onReply((0, ZW.g)(Ck.S, bb), performance.now())
        }))
      }
      onFrame(bb, cb) {
        null === this.id ? this.id = bb : bb !== this.id && (this.id = bb, this.sentMs = document.hidden ? null : cb)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(bb, cb) {
        bb === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(cb - this.sentMs), this.sentMs = null)
      }
      take() {
        const bb = this.roundTripMs;
        return this.roundTripMs = null, bb
      }
      stop() {
        this.stopReplies()
      }
    }
    class CI {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(bb, cb, sb, kb) {
        const Wb = bb - this.sampled >>> 0,
          ab = cb - this.timed >>> 0,
          Tb = sb - this.frameUs >>> 0,
          Ub = this.primed;
        return this.sampled = bb, this.timed = cb, this.frameUs = sb, this.primed = !0, !(!Ub || Wb > 64 || ab > 64) && (kb && Tb <= 1e6 * ab && (this.windowTimed += ab, this.windowUs += Tb), kb && Wb > 0)
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
    const NI = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class VI {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(bb, cb) {
        const sb = Math.min(4096, this.count + cb);
        this.samples.fill(bb, this.count, sb), this.count = sb
      }
      clear() {
        this.count = 0
      }
      take(bb) {
        const cb = this.count;
        if (this.count = 0, cb < 30) return null;
        const sb = this.samples.subarray(0, cb).sort();
        return bb.map((bb => sb[Math.min(cb - 1, Math.floor(bb * cb))]))
      }
    }
    class LI {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new VI, this.inJoin = !1, this.rose = !1, this.joinLags = new VI, this.joinLagP90Ms = null
      }
      onFrame(bb, cb, sb, kb, Wb) {
        const ab = bb.headerWord(os.y.Pacing),
          Tb = bb.headerWord(os.y.PacingLagUs),
          Ub = (ab >>> os.L.LagsShift) - (this.word >>> os.L.LagsShift) & os.L.CountMask,
          Ib = (ab >>> os.L.SwitchesShift) - (this.word >>> os.L.SwitchesShift) & os.L.CountMask,
          Hb = Ub > 0 ? (Tb - this.lagUs >>> 0) / Ub / 1e3 : 0,
          fb = this.primed && Ub <= 64 && Ib <= 2 && Hb <= 6e4;
        if (this.rose = 0 !== (ab & ~this.word & os.L.Joining), this.word = ab, this.lagUs = Tb, this.primed = !0, 0 !== (ab & os.L.Tiered)) {
          if (0 !== (ab & os.L.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && fb && kb && Ub > 0 && this.joinLags.add(Hb, Ub);
          else if (this.inJoin) {
            var Mb, Xb;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Mb = null === (Xb = this.joinLags.take([.9])) || void 0 === Xb ? void 0 : Xb[0]) && void 0 !== Mb ? Mb : null
          }
          if (Wb) {
            if (fb && (this.switches += Ib, Ub > 0 && this.lags.add(Hb, Ub)), sb) {
              if (this.lastDrawnMs >= 0 && cb - this.lastDrawnMs <= 250) {
                const bb = cb - this.lastDrawnMs;
                this.tieredMs += bb, (ab & os.L.AheadMask) > 0 && (this.pacedMs += bb)
              }
              this.lastDrawnMs = cb
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(bb) {
        const cb = this.takeWindow(),
          sb = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, bb ? {
          ...cb,
          joinLagP90Ms: sb
        } : {
          ...NI,
          joinLagP90Ms: sb
        }
      }
      unsent(bb) {
        this.joinLagP90Ms ??= bb.joinLagP90Ms
      }
      takeWindow() {
        var bb, cb;
        const sb = this.tieredMs >= 2e3,
          kb = this.lags.take([.5, .9]),
          Wb = {
            pacedShare: sb ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: sb ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (bb = null === kb || void 0 === kb ? void 0 : kb[0]) && void 0 !== bb ? bb : null,
            lagP90Ms: null !== (cb = null === kb || void 0 === kb ? void 0 : kb[1]) && void 0 !== cb ? cb : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, Wb
      }
    }
    var uI = sb(8857),
      YI = sb(2644),
      hI = sb(40335),
      JI = sb(8849),
      gI = sb(2674),
      BI = sb(2661);
    const tI = {
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

    function yI(bb) {
      return new PI(bb)
    }
    class PI {
      constructor(bb) {
        this.shell = bb, this.tracker = new II.b, this.gpu = new CI, this.pacing = new LI, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new eI, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, uI.c)(bb.backend, bb.canvas, bb.adapterVendor), this.tracker.start((() => !bb.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, gI.e)("wasm", (() => {
          const {
            n: cb,
            sampleCount: sb
          } = (0, hI.d)();
          return `${bb.backend}, quality steps aim at up to ${BI.c.target.maxFps} fps, pixel n ${cb}, msaa ${sb}`
        }), (bb => {
          this.frameDebug = bb
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(bb) {
        var cb;
        this.tracker.onAnimationFrame(bb), null === (cb = this.frameDebug) || void 0 === cb || cb.animationFrame()
      }
      frameRan(bb, cb, sb, kb) {
        var Wb;
        this.ping.onFrame(bb.headerWord(os.y.PingSent), sb);
        const ab = this.tracker;
        this.pacing.onFrame(bb, cb, "drawn" === kb, !document.hidden, ab.isSampling());
        const Tb = bb.headerWord(os.y.TickUs) / 1e3 + (0, kk.P)();
        ab.RC(Tb), null === (Wb = this.frameDebug) || void 0 === Wb || Wb.wasmFrame(bb, cb, sb, "drawn" === kb, ab.isSampling(), Tb, (0, JI.f)());
        const Ub = Math.max(0, sb - cb - Tb);
        if ("drawn" !== kb) return void("paced" === kb && (this.pacedCpuMs += Ub));
        this.followGame(), ab.onFrameStart(cb);
        this.gpu.onFrame(bb.headerWord(os.y.GpuSampled), bb.headerWord(os.y.GpuTimed), bb.headerWord(os.y.GpuFrameUs), ab.isSampling()) && ab.onGpuSampleStarted(), ab.onFrameCpu(Ub + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(cb)
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
        const cb = bb - this.fpsSpanStartMs;
        if (!(cb < nI.c)) {
          if (!document.hidden) {
            const bb = 1e3 * this.fpsFrames / cb;
            this.firstSpanFps ??= bb, this.initialFps = this.firstSpanFps, this.fpsOverTime = bb
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = bb
        }
      }
      flush() {
        const bb = this.followGame(),
          {
            cpuFrameMs: cb,
            refreshHz: sb,
            cpuBottleneck: Wb,
            frameIntervalCv: ab,
            ...Tb
          } = this.tracker.snapshotAndReset(),
          Ub = this.shell.inGame(),
          Ib = Ub && this.inGameAtLastFlush,
          Hb = Ib ? Tb : UI.c,
          fb = this.pacing.snapshotAndReset(Ib);
        if (this.inGameAtLastFlush = Ub, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !bb) return void this.pacing.unsent(fb);
        const Mb = performance.now(),
          nb = (0, XI.q)((0, XI.p)(Mb), this.unsentPage),
          lb = function(bb, cb, sb, Wb, ab, Tb, Ub, Ib) {
            var Hb, fb, Mb, Xb;
            const nb = {},
              {
                canvas: mb
              } = bb,
              lb = (0, MI.d)({
                refreshHz: cb.refreshHz,
                msaa: bb.msaa(),
                autoMsaaOff: (0, JI.c)()
              });
            for (const Qb of (0, WI.e)()) {
              const eb = Qb.name;
              let Cb;
              if ((0, aI.m)(eb)) Cb = (0, XI.c)(eb);
              else if ((0, XI.e)(eb)) Cb = Ib[eb];
              else if ((0, MI.h)(eb)) Cb = lb[eb];
              else switch (eb) {
                case "fps":
                  Cb = Wb;
                  break;
                case "vU":
                  Cb = ab;
                  break;
                case "bI":
                  Cb = (0, YI.y)((0, hI.d)().n);
                  break;
                case "cI":
                  Cb = Math.max(mb.width, mb.height);
                  break;
                case "sI":
                  Cb = Math.min(mb.width, mb.height);
                  break;
                case "kI":
                  Cb = navigator.hardwareConcurrency || null;
                  break;
                case "WI":
                  Cb = (0, oW.getWebGpuSupported)();
                  break;
                case "aI":
                  Cb = null === bb.fallbackReason ? null : tI[bb.fallbackReason];
                  break;
                case "TI":
                  Cb = cb.cpuFrameMs;
                  break;
                case "UI":
                  Cb = cb.refreshHz;
                  break;
                case "II":
                  Cb = cb.cpuBottleneck;
                  break;
                case "HI":
                  Cb = cb.frameIntervalCv;
                  break;
                case "fI":
                  Cb = cb.frameMs;
                  break;
                case "MI":
                  Cb = cb.tickMs;
                  break;
                case "lI":
                  Cb = cb.mainBusyShare;
                  break;
                case "QI":
                  Cb = cb.mainProbeDelayMs;
                  break;
                case "XI":
                  Cb = cb.longAnimationFramesPerMin;
                  break;
                case "nI":
                  Cb = cb.longAnimationFrameTimeShare;
                  break;
                case "mI":
                  Cb = cb.longAnimationFrameScriptShare;
                  break;
                case "eI":
                  Cb = cb.gpuPassMs;
                  break;
                case "CI":
                  Cb = cb.gpuSubmitToDoneMs;
                  break;
                case "NI":
                  Cb = sb.pacedShare;
                  break;
                case "VI":
                  Cb = sb.switchesPerHour;
                  break;
                case "LI":
                  Cb = sb.lagP50Ms;
                  break;
                case "uI":
                  Cb = sb.lagP90Ms;
                  break;
                case "YI":
                  Cb = sb.joinLagP90Ms;
                  break;
                case "KI":
                  Cb = (0, kI.j)(Tb);
                  break;
                case "pU":
                  Cb = Ub;
                  break;
                case "hI":
                case "JI":
                case "gI":
                case "BI":
                case "tI":
                case "yI":
                case "DI":
                case "EI":
                case "iI":
                case "OI":
                case "GI":
                case "ZI":
                case "zI":
                case "qI":
                case "dI":
                  Cb = null;
                  break;
                case "cH":
                  Cb = (0, oW.getPlatformType)();
                  break;
                case "sH":
                  Cb = (0, oW.getGpuVendor)();
                  break;
                case "kH":
                  Cb = QI.d[bb.backend];
                  break;
                case "WH":
                  Cb = (0, mI.c)();
                  break;
                case "aH":
                  Cb = (0, oW.getOperatingSystem)();
                  break;
                case "TH":
                  Cb = (0, oW.getTrafficSource)();
                  break;
                case "UH":
                  Cb = null !== (Hb = kb.d.get("gameEntrySource")) && void 0 !== Hb ? Hb : TI.g;
                  break;
                case "IH":
                  Cb = cb.frameLimiter;
                  break;
                case "HH":
                  Cb = (0, HI.i)();
                  break;
                case "fH":
                  Cb = null !== (fb = (0, fI.b)()) && void 0 !== fb ? fb : TI.g;
                  break;
                case "MH":
                  Cb = (0, HI.b)(mb.width, mb.height);
                  break;
                case "XH":
                  Cb = (0, WI.f)(-(new Date).getTimezoneOffset());
                  break;
                case "lH":
                  Cb = null !== (Mb = bb.fallbackReason) && void 0 !== Mb ? Mb : TI.g;
                  break;
                case "CH":
                  Cb = "ready";
                  break;
                case "NH":
                  Cb = (0, oW.getSoftwareRenderer)();
                  break;
                case "mH":
                  Cb = null !== bb.shaderPackReach() ? "true" : "false";
                  break;
                case "VH":
                  Cb = null !== (Xb = bb.shaderPackReach()) && void 0 !== Xb && Xb.sceneDepth ? "true" : "false";
                  break;
                case "LH": {
                  const cb = bb.shaderPackReach();
                  Cb = null !== cb && void 0 !== cb && cb.sunShadow ? "all" : null !== cb && void 0 !== cb && cb.airShadow ? "air" : "none";
                  break
                }
                case "uH":
                  Cb = lI.x;
                  break;
                case "nH":
                case "QH":
                case "eH":
                  Cb = TI.g;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${eb}`)
              }
              if (void 0 === Cb) throw new Error(`Metric ${eb} has no value`);
              nb[eb] = Cb
            }
            return nb
          }(this.shell, {
            cpuFrameMs: cb,
            refreshHz: sb,
            cpuBottleneck: Wb,
            frameIntervalCv: ab,
            ...Hb
          }, fb, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), nb);
        if (! function(bb, cb, sb) {
            return (0, Ac.e)(), bb(mb.j.Send, cb, sb)
          }(this.shell.writeCmd, Xb.xd, function(bb) {
            const cb = (0, Gb.f)((0, oc.e)(bb)),
              sb = new Uint8Array(mb.be.BYTES + cb.length);
            return new DataView(sb.buffer).setUint16(0, oc.c.AnalyticsUpdate, !0), sb.set(cb, mb.be.BYTES), sb
          }(lb))) return this.unsentPage = nb, this.pacing.unsent(fb), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, kI.f), (0, XI.l)(lb, "wasm", Mb)
      }
    }
    var DI = sb(39188);

    function EI(bb, cb, sb) {
      const kb = new Map;
      return (0, DI.c)(((bb, sb, kb) => cb.Jf(bb, sb, kb)), ((cb, sb, Wb) => {
        const ab = `${cb},${sb},${Wb}`;
        return kb.has(ab) || kb.set(ab, (0, Gc.e)(bb, cb, sb, Wb)), kb.get(ab)
      }), sb)
    }
    var iI = sb(39193),
      OI = sb(40150);

    function GI(bb) {
      const cb = null !== bb && 0 !== (mb.n.playerFlags(bb.api.apiView, 0) & mb.Nd.CursorAim);
      cb !== (0, OI.q)() && (0, OI.L)(cb, null !== bb)
    }

    function KI(bb) {
      return (0, ek.e)(Ck.M, bb)
    }
    const ZI = new ab.f((bb => sb(41951)(`./${bb}/${bb}Client`)));
    let zI = null,
      qI = null;
    async function dI(bb) {
      zI ??= sb.e(27).then((() => sb(38713))).then((bb => {
        qI = bb.createDefaultClientPlugins
      }), (bb => {
        throw zI = null, bb
      })), await Promise.all([ZI.load(bb), zI])
    }

    function AI(bb) {
      bb.load(new ic(Ak, new Sk))
    }
    let wI = !1;
    const rI = new WeakMap;

    function oI(bb) {
      try {
        bb()
      } catch (cb) {
        console.error("[bloxd-wasm-client] a session-end step failed", cb)
      }
    }

    function SI(bb, cb) {
      ! function() {
        var bb, cb;
        qk.Howler.volume();
        const sb = qk.Howler;
        null === (bb = sb._autoResume) || void 0 === bb || bb.call(sb), null === (cb = sb._autoSuspend) || void 0 === cb || cb.call(sb)
      }(), cb.audio.prepare();
      const sb = new Vb(cb.core, cb.memory, cb.audio);
      let ab;
      try {
        ab = new mW(sb, cb.options)
      } catch (Xb) {
        return bb.crash(QW.A, Xb), null
      }(0, Ib.g)(lW(sb, ab));
      const fb = new LU({
        running: bb,
        api: sb,
        core: cb.core,
        memory: cb.memory,
        staleOr: cb.staleOr,
        reportFault: cb.reportReplayFault,
        options: cb.options,
        sessionInfo: cb.sessionInfo,
        replayShaderPack: cb.replayShaderPack
      });
      (0, kk.H)();
      const Mb = new Ok({
        api: sb,
        tables: ab,
        sessionInfo: cb.sessionInfo,
        gameFactory: bb => ZI.loadedFactory(bb),
        defaultPlugins: (bb, cb, sb, kb) => {
          if (null === qI) throw new Error("The default plugins started before they loaded");
          return qI(bb, cb, sb, kb)
        },
        serverOptions: cb.options,
        onNetEvent: bb => {
          fb.netEvent(bb), cb.onNetEvent(bb)
        },
        setLocalOptions: cb => {
          YU(bb, {
            changes: cb,
            reset: !1
          })
        },
        playSound: (bb, sb, kb, Wb, ab, Tb, Ub) => cb.audio.playGame(bb, sb, kb, Wb, ab, Tb, Ub),
        onSessionEnd: () => {
          oI(Wb.n), oI(bW), oI((() => {
            kb.d.set({
              openInGameMenuName: null
            })
          })), oI((() => {
            cb.audio.cancelPreload()
          }))
        },
        beforeWrite: cb.beforeWrite,
        beforeOp: cb.beforeOp,
        cameraScreen: pk,
        showCameraFacing: cW,
        onEventOverflow: cb.onEventOverflow,
        screenBandY: Ub.p,
        replayEntities: fb.entityHooks,
        hasPackModel: cb.hasPackModel
      });
      return Mb.attach(bb), rI.set(Mb, fb), zk(Mb.items, cb.audio),
        function(bb) {
          bb.setClientFreeCameraGrant("isDev", !1);
          const cb = cb => {
            bb.setClientFreeCameraGrant("hasDeveloperRank", cb.playerHasRank("developer"))
          };
          (0, Tb.l)("userContextUpdated", cb)
        }(Mb), wI || (wI = !0, (0, Tb.l)("appManagerUpdated|openInGameMenuName", (bb => {
          !bb && (0, Hb.j)().includes(Hb.b) && (0, Hb.k)(Hb.b)
        }))), Mb
    }

    function RI(bb) {
      try {
        bb.closeGame()
      } finally {
        var cb;
        null === (cb = rI.get(bb)) || void 0 === cb || cb.stop(), rI.delete(bb)
      }
    }
  },
  40248: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    const kb = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40259: (bb, cb, sb) => {
    function kb() {
      return sb(40263)
    }

    function Wb() {
      return sb(40271)
    }

    function ab(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    sb.d(cb, {
      e: () => ab,
      f: () => kb,
      g: () => Wb
    })
  },
  35945: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => ab,
      h: () => Ib
    });
    var kb = sb(35941);
    const Wb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function ab(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const cb = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof cb && Wb.test(cb)
    }

    function Tb(bb, cb, sb) {
      var ab;
      const Tb = bb instanceof Error ? bb.name : "thrown",
        Ub = (bb instanceof Error && null !== (ab = bb.stack) && void 0 !== ab ? ab : "").split("\n").filter((bb => Wb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        Ib = null === cb ? "wasm memory unknown" : `wasm memory ${Math.round(cb/2**20)} MB`,
        Hb = null === sb.panic ? "" : `, panic: ${(0,kb.k)(sb.panic)}`,
        fb = `${Tb}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,kb.p)(sb.kind,sb.refusedBytes)} ${fb} (${Ib})${Hb}${Ub.length>0?` | ${Ub.join(" < ")}`:""}`
    }
    const Ub = 500;

    function Ib(bb) {
      let cb = "[object Object]";
      try {
        cb = String(bb)
      } catch {}
      if ("[object Object]" !== cb) return cb;
      try {
        var sb, kb;
        return null !== (sb = null === (kb = JSON.stringify(bb)) || void 0 === kb ? void 0 : kb.slice(0, Ub)) && void 0 !== sb ? sb : cb
      } catch {
        return cb
      }
    }
  },
  41951: (bb, cb, sb) => {
    var kb = {
      "./bedwars/bedwarsClient": [38826, 9],
      "./bridgeBattle/bridgeBattleClient": [38835, 10],
      "./buildAFactory2/buildAFactory2Client": [38099, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [38841, 12],
      "./clutch/clutchClient": [38850, 13],
      "./containmentBreach/containmentBreachClient": [38855, 14],
      "./cooking/cookingClient": [38991, 15],
      "./defusal/defusalClient": [38998, 16],
      "./frontline/frontlineClient": [39007, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [39010, 18],
      "./luckyBedwars/luckyBedwarsClient": [39019, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39021, 20],
      "./oneBlock/oneBlockClient": [39023, 21],
      "./plots/plotsClient": [39032, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [39116, 23],
      "./skyIslands/skyIslandsClient": [39123, 24],
      "./skyblock/skyblockClient": [38132, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [39126, 26]
    };

    function Wb(bb) {
      if (!sb.o(kb, bb)) return Promise.resolve().then((() => {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }));
      var cb = kb[bb],
        Wb = cb[0];
      return Promise.all(cb.slice(1).map(sb.e)).then((() => sb(Wb)))
    }
    Wb.keys = () => Object.keys(kb), Wb.id = 41951, bb.exports = Wb
  },
  40263: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40271: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35941: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb,
      g: () => ab,
      k: () => Ib,
      m: () => Tb,
      p: () => Wb
    });
    const kb = /^alloc_failed (\d+) bytes$/;

    function Wb(bb, cb) {
      return ab(bb, cb) ? `trap=alloc_failed ${cb} bytes` : `trap=${bb}`
    }

    function ab(bb, cb) {
      return "unreachable" === bb && cb > 0
    }

    function Tb(bb, cb, sb) {
      const kb = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== kb) return {
        kind: kb,
        panic: null,
        refusedBytes: 0
      };
      const Wb = cb(),
        ab = sb();
      return {
        kind: kb,
        panic: ab > 0 ? null : Wb,
        refusedBytes: ab
      }
    }
    const Ub = 300;

    function Ib(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, Ub)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);