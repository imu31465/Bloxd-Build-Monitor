export const id = 53;
export const ids = [53];
export const modules = {
  38649: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      h: () => tk
    });
    var Rk = Bk(29);

    function tk(kk) {
      return "refetchCode" === kk || "devDownloadJson" === kk || kk.startsWith("Plugin")
    }

    function ak(kk, Fk) {
      "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([Bk.e(105), Bk.e(106), Bk.e(101), Bk.e(103), Bk.e(210)]).then((() => Bk(41158))).then((Bk => {
        let {
          runClientGameMessage: Rk
        } = Bk;
        Rk(kk, Fk)
      })).catch((Fk => {
        console.error(`Game message ${kk} failed`, Fk)
      })) : Rk.o.Hf("showPetUi", Fk) : Rk.o.Hf("refetchCode")
    }
  },
  41998: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      f: () => tk
    });
    const Rk = ["recording", "freecam", "keyframe"];

    function tk() {
      const kk = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(kk[1]) << 32n | BigInt(kk[0])
    }
  },
  40216: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk
    });
    const Rk = 1 << 20,
      tk = 1 << 21,
      ak = 1024,
      Xk = 2048;

    function bk(kk, Fk, Bk) {
      const bk = kk + Rk,
        wk = Fk + ak,
        dk = Bk + Rk;
      return bk < 0 || bk >= tk || dk < 0 || dk >= tk || wk < 0 || wk >= Xk ? -1 : (bk * tk + dk) * Xk + wk
    }
  },
  40207: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      h: () => Xk,
      l: () => tk,
      n: () => ak,
      p: () => sk,
      t: () => dk,
      w: () => wk,
      y: () => bk
    });
    Bk(3262);
    Bk(40216);

    function Rk(kk) {}

    function tk(kk) {}

    function ak(kk) {}

    function Xk(kk) {}

    function bk(kk) {}

    function wk(kk, Fk, Bk) {}

    function dk(kk) {}

    function sk(kk) {}
  },
  8918: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => wk
    });
    var Rk = Bk(22);
    const tk = 24,
      ak = "farNametags",
      Xk = 1e5;

    function bk() {
      var kk;
      return null === (kk = Rk.c.get("showDistantNametags")) || void 0 === kk || kk
    }

    function wk() {
      var kk;
      return null !== (kk = function() {
        const kk = new URLSearchParams(window.location.search).get(ak),
          Fk = null === kk || "" === kk ? NaN : Number(kk);
        return Number.isFinite(Fk) && Fk >= 0 ? Math.min(Fk, Xk) : null
      }()) && void 0 !== kk ? kk : bk() ? 0 : tk
    }
  },
  41991: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      blockIdOf: () => Uw.d,
      clearWasmCameraScreen: () => IR,
      creativeItemIds: () => FR.creativeItemIds,
      decodeMapSettings: () => rw,
      drainTextRerasters: () => Mb.d,
      enchantmentPerksOf: () => FR.enchantmentPerksOf,
      endGameHost: () => xw,
      followCursorAim: () => Tw,
      followMenuPrefs: () => jt,
      loadAudio: () => qw,
      loadClientGame: () => hw,
      loadTextIcons: () => Mb.h,
      rasterText: () => ub.b,
      readBoardToEdit: () => gw,
      setTextHost: () => Mb.o,
      setTextLocalPlayer: () => Mb.s,
      showInCreativeInvenOf: () => FR.showInCreativeInvenOf,
      startGameHost: () => Kw,
      startShellAnalytics: () => Hw,
      startSkyFeed: () => Ib,
      textChanged: () => Mb.z,
      warmText: () => ub.c,
      wasmCameraScreen: () => nR
    });
    Bk(36244);
    var Rk = Bk(22),
      tk = Bk(36483),
      ak = Bk(38768),
      Xk = Bk(29),
      bk = Bk(3202),
      wk = Bk(36480),
      dk = Bk(1239),
      sk = Bk(594),
      Vk = Bk(37875),
      Jk = Bk(4524),
      Ak = Bk(40065),
      ek = Bk(4e4);
    const yk = ek.Pb / 4,
      fk = ek.p.PlaySound,
      mk = ek.p.SoundReset,
      Wk = Jk.M.ReplayFailed,
      vk = Jk.M.RecorderEvent;
    class ik {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = kk, this.memory = Fk, this.audio = Bk, this.serverIds = new Int32Array(256).fill(ek.Yc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(ek.w.BYTES)), this.renderPtr = 0, this.KV = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new ek.bb(kk, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.lRk(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(kk, Fk) {
        const Bk = this.eventView();
        return new Uint8Array(Bk.buffer, Bk.byteOffset + kk, Fk)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return ek.w.localId(this.apiView, 0)
      }
      localDeaths() {
        return ek.w.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const kk = this.apiView,
          Fk = ek.w.entRenderPtr(kk, 0),
          Bk = ek.w.entVisPtr(kk, 0),
          Rk = ek.w.entCapacity(kk, 0);
        if (Fk !== this.renderPtr || Bk !== this.visPtr || Rk !== this.KV || this.renderBuffer !== this.buffer) {
          this.renderPtr = Fk, this.visPtr = Bk, this.KV = Rk, this.renderBuffer = this.buffer;
          const kk = this.memoryView(Float32Array, Fk, Rk * yk, "the render array"),
            tk = this.memoryView(Uint8Array, Bk, Rk, "the visibility array");
          this.renderCapacity = kk && tk ? Rk : 0, this.render = kk && tk ? kk : new Float32Array(0), this.vis = kk && tk ? tk : new Uint8Array(0)
        }
      }
      memoryView(kk, Fk, Bk, Rk) {
        try {
          return (0, Ak.t)(kk, this.memory().buffer, Fk, Bk, Rk)
        } catch (tk) {
          return this.keepCorruption(tk), null
        }
      }
      memoryData(kk, Fk, Bk, Rk) {
        try {
          return (0, Ak.f)(this.memory().buffer, kk, Fk, Bk, Rk)
        } catch (tk) {
          return this.keepCorruption(tk), null
        }
      }
      reportCorruption(kk) {
        this.keepCorruption(new Ak.c(kk))
      }
      keepCorruption(kk) {
        if (!(kk instanceof Ak.c)) throw kk;
        this.corruption ??= kk
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(kk, Fk, Bk) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Rk,
          len: tk
        } = kk;
        this.eventsPtr = Rk, this.eventsLen = tk, this.eventsBuffer = null;
        const ak = this.eventView();
        for (let dk = 0; dk < tk;) {
          const kk = ak.getUint32(dk, !0),
            Bk = 65535 & kk,
            Rk = kk >>> 16,
            tk = dk + Jk.K;
          if (Bk === ek.p.EntitySpawned) {
            var Xk;
            if (Rk !== ek.Wb.BYTES) throw Sk(Bk, dk, Rk);
            const kk = ek.Wb.serverId(ak, tk);
            this.spawned(kk, ek.Wb.index(ak, tk), ek.Wb.kind(ak, tk)), null === (Xk = Fk.entityAdded) || void 0 === Xk || Xk.call(Fk, kk)
          } else if ((Bk === ek.p.ChunkSlot || Bk === ek.p.EntityInfoChanged) && !(0, ek.ke)(Bk, ak, tk, Rk, Fk)) throw Sk(Bk, dk, Rk);
          dk = tk + (0, Jk.td)(Rk)
        }
        try {
          var bk;
          null === (bk = Fk.afterPrescan) || void 0 === bk || bk.call(Fk), this.throwCorruption(), !Bk() && this.dispatch(kk, Fk, Bk) && (this.throwCorruption(), this.applyListener(), Fk.afterWalk(kk.kind)), this.throwCorruption()
        } catch (wk) {
          throw wk instanceof Ak.c && (this.corruption ??= wk), wk
        } finally {
          Bk() || null !== this.corruption || this.applyDespawns(tk, Fk)
        }
      }
      applyDespawns(kk, Fk) {
        const Bk = this.eventView();
        for (let tk = 0; tk < kk;) {
          const kk = Bk.getUint32(tk, !0),
            ak = tk + Jk.K;
          if ((65535 & kk) === ek.p.EntityDespawned && kk >>> 16 === ek.Wb.BYTES) {
            const kk = ek.Wb.serverId(Bk, ak);
            var Rk;
            if (this.despawned(kk, ek.Wb.index(Bk, ak))) null === (Rk = Fk.entityRemoved) || void 0 === Rk || Rk.call(Fk, kk)
          }
          tk = ak + (0, Jk.td)(kk >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(kk, Fk, Bk) {
        const {
          len: Rk,
          net: tk,
          netOffsets: ak
        } = kk;
        let Xk = this.eventView(),
          bk = 0;
        for (let Lk = 0; Lk < Rk;) {
          const kk = Xk.getUint32(Lk, !0),
            Rk = 65535 & kk,
            Ok = kk >>> 16,
            Nk = Lk + Jk.K;
          let Hk = !1;
          if (bk < tk.length && ak[bk] === Lk) Fk.netEvent(tk[bk]), bk++, Hk = !0;
          else if (Rk === Jk.M.LocalPlayerBound) {
            var wk;
            if (Ok !== Jk.ob) throw Sk(Rk, Lk, Ok);
            null === (wk = Fk.localPlayerBound) || void 0 === wk || wk.call(Fk, Xk.getInt32(Nk, !0)), Hk = !0
          } else if (Rk === Jk.M.LocalHurt) {
            var dk;
            if (Ok !== Jk.mb) throw Sk(Rk, Lk, Ok);
            null === (dk = Fk.localHurt) || void 0 === dk || dk.call(Fk, Xk.getInt32(Nk, !0), Xk.getFloat32(Nk + 4, !0), Xk.getUint32(Nk + 8, !0)), Hk = !0
          } else if (Rk === Jk.M.AttackHit) {
            var sk;
            if (Ok !== Jk.e) throw Sk(Rk, Lk, Ok);
            const kk = Xk.getFloat32(Nk, !0),
              Bk = Xk.getFloat32(Nk + 4, !0),
              tk = Xk.getFloat32(Nk + 8, !0),
              ak = Xk.getUint32(Nk + 12, !0);
            null === (sk = Fk.attackHit) || void 0 === sk || sk.call(Fk, kk, Bk, tk, 0 !== (ak & Jk.k.Crit), 0 !== (ak & Jk.k.HitSelf))
          } else if (Rk === Jk.M.PhysicsType) {
            var Vk;
            if (Ok !== Jk.Ib) throw Sk(Rk, Lk, Ok);
            null === (Vk = Fk.physicsType) || void 0 === Vk || Vk.call(Fk, Xk.getUint32(Nk, !0), Xk.getInt32(Nk + 4, !0)), Hk = !0
          } else if (Rk === Jk.M.VehicleEffect) {
            var Ak;
            const kk = Ek(Xk, Nk, Ok);
            if (null === kk) throw Sk(Rk, Lk, Ok);
            null === (Ak = Fk.vehicleEffect) || void 0 === Ak || Ak.call(Fk, kk.op, kk.name, kk.icon, kk.level, kk.durationMs), Hk = !0
          } else if (Rk === Jk.M.ZoomChanged) {
            var yk;
            if (Ok !== Jk.gd) throw Sk(Rk, Lk, Ok);
            null === (yk = Fk.zoomChanged) || void 0 === yk || yk.call(Fk, Xk.getFloat32(Nk, !0), Xk.getUint8(Nk + 4)), Hk = !0
          } else if (Rk === Jk.M.ZoomDisabled) {
            var ik;
            if (0 !== Ok) throw Sk(Rk, Lk, Ok);
            null === (ik = Fk.zoomDisabled) || void 0 === ik || ik.call(Fk), Hk = !0
          } else if (Rk === Jk.M.GameCamera) {
            var Yk;
            null === (Yk = Fk.gameCamera) || void 0 === Yk || Yk.call(Fk, new Uint8Array(Xk.buffer, Xk.byteOffset + Nk, Ok).slice()), Hk = !0
          } else if (Rk === ek.p.ChunkSlot || Rk === ek.p.EntityInfoChanged);
          else if (Rk >= fk && Rk <= mk) {
            if (this.audio && !this.audio.onAudioEvent(Rk, Xk, Nk, Ok)) throw Sk(Rk, Lk, Ok)
          } else if (Rk >= Wk && Rk <= vk) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Rk, Xk, Nk, Ok)) throw Sk(Rk, Lk, Ok);
              Hk = !0
            }
          } else if (Rk >= ek.kd && Rk <= ek.nd && Rk !== Jk.M.EnvLighting) {
            if (!(0, ek.ke)(Rk, Xk, Nk, Ok, Fk)) throw Sk(Rk, Lk, Ok);
            Hk = !0
          }
          if (Hk) {
            if (Bk()) return !1;
            Xk = this.eventView()
          }
          Lk = Nk + (0, Jk.td)(Ok)
        }
        return !Bk()
      }
      applyListener() {
        var kk;
        if (!this.audio) return;
        const Fk = ek.w.audioViewPtr(this.apiView, 0),
          Bk = this.memory().buffer;
        let Rk = this.audioView;
        (null === (kk = Rk) || void 0 === kk ? void 0 : kk.buffer) === Bk && Rk.byteOffset === Fk || (Rk = (0, Ak.f)(Bk, Fk, ek.x.BYTES, 8, "the audio view"), this.audioView = Rk), Rk && this.audio.applyListener(Rk)
      }
      indexOf(kk) {
        return this.indexById.get("number" === typeof kk ? kk : +kk)
      }
      isLocal(kk) {
        return kk !== ek.Yc && kk === ek.w.localId(this.apiView, 0)
      }
      rW(kk) {
        const Fk = [0, 0, 0];
        return this.readPosition("number" === typeof kk ? kk : +kk, Fk) ? Fk : null
      }
      readPosition(kk, Fk) {
        const Bk = this.apiView;
        if (void 0 !== this.indexById.get(kk) && this.isLocal(kk)) {
          for (let kk = 0; kk < 3; kk++) Fk[kk] = ek.w.localPos(Bk, 0, kk);
          return !0
        }
        return this.readDrawnPosition(kk, Fk)
      }
      readDrawnPosition(kk, Fk) {
        const Bk = this.apiView,
          Rk = this.indexById.get(kk);
        if (void 0 === Rk || Rk >= this.renderCapacity) return Fk[0] = Fk[1] = Fk[2] = NaN, !1;
        const tk = Rk * yk;
        for (let ak = 0; ak < 3; ak++) Fk[ak] = this.render[tk + ak] + ek.w.origin(Bk, 0, ak);
        return !0
      }
      checkValid(kk) {
        return void 0 !== this.indexOf(kk)
      }
      isAlive(kk) {
        const Fk = this.indexOf(kk);
        if (void 0 === Fk) return null;
        if (this.ensureViews(), Fk >= this.renderCapacity) return null;
        const Bk = this.vis[Fk];
        return 0 === Bk ? null : 0 !== (Bk & ek.je.Alive)
      }
      getEntityType(kk) {
        const Fk = this.indexOf(kk);
        return void 0 === Fk ? this.isLocal("number" === typeof kk ? kk : +kk) ? "Player" : null : Lk(this.kinds[Fk])
      }
      spawned(kk, Fk, Bk) {
        if (Fk >= 1048576) throw new Ak.c(`entity ${kk} spawned at index ${Fk}`);
        this.ensureIndex(Fk), this.serverIds[Fk] === kk && null !== this.idStr[Fk] || (this.idStr[Fk] = String(kk)), this.serverIds[Fk] = kk, this.kinds[Fk] = Bk, this.indexById.set(kk, Fk)
      }
      despawned(kk, Fk) {
        let Bk = !1;
        return this.indexById.get(kk) === Fk && (this.indexById.delete(kk), Bk = !0), Fk < this.serverIds.length && this.serverIds[Fk] === kk && (this.serverIds[Fk] = ek.Yc, this.kinds[Fk] = 0, this.idStr[Fk] = null), Bk
      }
      ensureIndex(kk) {
        const Fk = this.serverIds.length;
        if (kk < Fk) return;
        let Bk = 2 * Fk;
        for (; Bk <= kk;) Bk *= 2;
        const Rk = new Int32Array(Bk).fill(ek.Yc);
        Rk.set(this.serverIds), this.serverIds = Rk;
        const tk = new Uint16Array(Bk);
        tk.set(this.kinds), this.kinds = tk;
        for (let ak = Fk; ak < Bk; ak++) this.idStr.push(null)
      }
      eventView() {
        const kk = this.memory().buffer;
        return kk !== this.eventsBuffer && (this.eventsBuffer = kk, this.events = new DataView(kk, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const kk = this.memory().buffer;
        this.buffer = kk, this.viewPtr < 0 && (this.viewPtr = this.core.nRk()), this.view = new DataView(kk, this.viewPtr, ek.w.BYTES), this.rereadDirectory()
      }
    }

    function Yk(kk) {
      return kk >>> ek.e === ek.t.Item
    }

    function Lk(kk) {
      var Fk, Bk;
      const Rk = kk & ek.g;
      switch (kk >>> ek.e) {
        case ek.t.Lifeform:
          return null !== (Fk = sk.i[Rk]) && void 0 !== Fk ? Fk : null;
        case ek.t.Throwable:
          return null !== (Bk = Vk.m[Rk]) && void 0 !== Bk ? Bk : null;
        case ek.t.Mesh:
          return "Mesh";
        case ek.t.Audio:
          return "AudioEntity";
        case ek.t.Item:
          return "Item";
        default:
          return null
      }
    }
    const Ok = new TextDecoder;

    function Ek(kk, Fk, Bk) {
      if (Bk < Jk.Sc.HEAD_BYTES) return null;
      const Rk = kk.getUint32(Fk, !0),
        tk = kk.getUint32(Fk + 20, !0),
        ak = kk.getUint32(Fk + 24, !0),
        Xk = Jk.Sc.HEAD_BYTES + (0, Jk.td)(tk);
      if (Rk !== Jk.Sc.UPDATE && Rk !== Jk.Sc.REMOVE || tk > Bk || Xk + ak > Bk) return null;
      const bk = (Bk, Rk) => Ok.decode(new Uint8Array(kk.buffer, kk.byteOffset + Fk + Bk, Rk)),
        wk = kk.getFloat64(Fk + 12, !0);
      return {
        op: Rk,
        level: kk.getFloat64(Fk + 4, !0),
        durationMs: Number.isNaN(wk) ? null : wk,
        name: bk(Jk.Sc.HEAD_BYTES, tk),
        icon: bk(Xk, ak)
      }
    }

    function Sk(kk, Fk, Bk) {
      return new Ak.c(`event ${kk} at ${Fk} of ${Bk} bytes`)
    }
    var Nk = Bk(291),
      Hk = Bk(1173),
      uk = Bk(38649),
      Mk = Bk(1861),
      gk = Bk(40109),
      Uk = Bk(1808),
      ck = Bk(38781),
      Gk = Bk(38809),
      Tk = Bk(38790),
      rk = Bk(40051),
      Dk = Bk(2305),
      zk = Bk(38777),
      Pk = Bk(38806);
    const hk = Math.max(ek.Fb.BYTES, ek.vb.BYTES, ek.zb.BYTES);

    function qk(kk) {
      if (!(0, Pk.g)(kk)) return null;
      const Fk = Number(kk);
      return (0 | Fk) === Fk ? Fk : null
    }
    class Ck {
      constructor(kk) {
        this.api = kk, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, zk.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.fa = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = ek.Yc, this.localName = String(ek.Yc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.fa = null;
        const kk = this.api.queries.directorView() >= ek.Fb.BYTES ? this.scratchView() : null;
        null !== kk && (this.defaultFov = (0, Uk.v)(ek.Fb.fov(kk, 0)), this.baseFov = (0, Uk.v)(ek.Fb.baseFov(kk, 0)), this.aspect = ek.Fb.aspect(kk, 0), this.bodyHeading = ek.Fb.bodyHeading(kk, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(kk) {
        this.viewHeading = kk
      }
      get localPlayerId() {
        const kk = ek.w.localId(this.api.apiView, 0);
        return kk !== this.localId && (this.localId = kk, this.localName = String(kk)), this.localName
      }
      getEntityPosition(kk) {
        return this.readEntity(kk) ? this.entityFeet : null
      }
      getEntityAimPoint(kk) {
        return this.readEntity(kk) ? this.entityAim : null
      }
      getEntityHeading(kk) {
        const Fk = qk(kk);
        if (null === Fk) return null;
        const Bk = ek.w.localId(this.api.apiView, 0);
        return Fk === Bk && Bk !== ek.Yc ? this.viewHeading : this.readEntity(kk) ? this.entityHeading : null
      }
      raycastTerrain(kk, Fk, Bk) {
        const Rk = this.api.queries.cameraSweep(kk[0], kk[1], kk[2], Fk[0], Fk[1], Fk[2], Bk);
        return Rk < Bk - 1e-6 ? Rk : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const kk = this.defaultPose;
        kk.fov = this.defaultFov;
        const Fk = this.api.queries.directorDefaultPose() >= ek.vb.BYTES ? this.scratchView() : null;
        if (null === Fk) return kk;
        for (let Bk = 0; Bk < 3; Bk++) kk.position[Bk] = ek.vb.eye(Fk, 0, Bk);
        return kk.heading = ek.vb.heading(Fk, 0), kk.pitch = ek.vb.pitch(Fk, 0), kk
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
      readEntity(kk) {
        const Fk = qk(kk);
        if (null === Fk) return !1;
        if (Fk === this.fa) return this.entityLive;
        this.fa = Fk;
        const Bk = this.api.queries.directorEntity(Fk) >= ek.zb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== Bk, null === Bk) return !1;
        for (let Rk = 0; Rk < 3; Rk++) this.entityFeet[Rk] = ek.zb.feet(Bk, 0, Rk), this.entityAim[Rk] = this.entityFeet[Rk];
        return this.entityAim[1] += ek.zb.eyeHeight(Bk, 0), this.entityHeading = ek.zb.heading(Bk, 0), !0
      }
      scratchView() {
        const kk = this.api.scratch(),
          Fk = this.api.memory().buffer,
          Bk = this.scratch;
        return null !== Bk && Bk.buffer === Fk && Bk.byteOffset === kk ? Bk : (this.scratch = this.api.memoryData(kk, hk, 8, "the director's record"), this.scratch)
      }
    }
    const Zk = {
        mode: "default"
      },
      pk = {
        show: () => {},
        clear: () => {}
      };

    function Kk() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class xk {
      constructor(kk) {
        this.options = kk, this.iJ = void 0, this.director = void 0, this.latest = Zk, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          ZE: 0,
          pE: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pa = new Int32Array(3 * ek.Nd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * ek.Nd), this.iJ = new Ck(kk.api), this.director = new Tk.e(this.iJ)
      }
      settingsChanged(kk) {
        let Fk = Zk;
        if (kk.length > 0) try {
          Fk = (0, rk.e)(kk)
        } catch {}
        this.latest = Fk, this.pending = Fk
      }
      call(kk, Fk, Bk, Rk, tk, ak) {
        var Xk, bk;
        let wk;
        this.holding = !1;
        try {
          wk = this.answer(kk, Fk, Bk, Rk, tk, ak)
        } catch (Jk) {
          var dk, sk;
          throw this.answeredPose = !1, null === (dk = (sk = this.options).showFacing) || void 0 === dk || dk.call(sk, null), Jk
        }
        const Vk = this.answeredPose && 0 === (Rk & ek.Db.Held);
        return this.answeredPose = wk !== ek.ub.None, this.holding = this.answeredPose && !Vk, null === (Xk = (bk = this.options).showFacing) || void 0 === Xk || Xk.call(bk, this.holding ? this.facing : null), wk
      }
      holdsView() {
        return this.holding
      }
      answer(kk, Fk, Bk, Rk, tk, ak) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          iJ: Xk
        } = this;
        Xk.readView();
        if (0 !== (Rk & ek.Db.Held) || Xk.setViewHeading((0, ck.x)(Xk.bodyHeading)), void 0 !== this.pending) {
          const kk = this.pending;
          this.pending = void 0, this.director.setSettings(kk), this.syncShownSettings()
        }
        this.readLook((0, Dk.c)(Fk), (0, Dk.c)(Bk), Rk, (0, Dk.c)(tk), (0, Dk.c)(ak));
        const bk = this.director.update(kk / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !bk) return ek.ub.None;
        const [wk, dk, sk] = bk.position;
        if (0 === this.options.api.queries.directorPose(wk, dk, sk, (0, ck.x)(bk.heading), (0, ck.h)(bk.pitch), (0, Uk.k)(bk.fov))) return ek.ub.None;
        if ("default" === this.director.getSettings().mode) return ek.ub.Pose;
        switch (this.facing) {
          case "camera":
            return ek.ub.FaceCamera;
          case "cursor":
            return ek.ub.FaceCursor;
          default:
            return ek.ub.FaceMovement
        }
      }
      afterFrame(kk) {
        kk ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Zk, this.idle()
      }
      restart() {
        const kk = this.holding;
        this.idle(), this.holding = kk
      }
      idle() {
        var kk, Fk;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Tk.e(this.iJ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (kk = (Fk = this.options).showFacing) || void 0 === kk || kk.call(Fk, null), this.setCentres(0)
      }
      syncShownSettings() {
        const kk = this.director.getSettings();
        if (kk === this.shownSettings) return;
        this.shownSettings = kk;
        const Fk = (0, Gk.c)(kk);
        this.facing = Fk.facing, this.mouseTurns = Fk.mouseTurns
      }
      readLook(kk, Fk, Bk, Rk, tk) {
        const ak = this.look,
          Xk = 0 !== (Bk & ek.Db.LookPointed);
        if (null === this.mouseTurns && !Xk) return ak.ZE = 0, ak.pE = 0, void(ak.pointedAt = void 0);
        let bk;
        Xk && (this.pointedAt.heading = Rk, this.pointedAt.pitch = tk, bk = this.pointedAt);
        const {
          iJ: wk
        } = this;
        wk.setViewHeading((0, Gk.b)(wk.getViewHeading(), kk, Fk, bk, "look" === this.mouseTurns, ak))
      }
      writeCentres(kk) {
        const Fk = this.next,
          Bk = Math.min(kk.length, ek.Nd);
        for (let Rk = 0; Rk < Bk; Rk++)
          for (let Bk = 0; Bk < 3; Bk++) Fk[3 * Rk + Bk] = Math.floor(kk[Rk][Bk] / ek.D);
        this.setCentres(Bk)
      }
      setCentres(kk) {
        const {
          pa: Fk,
          next: Bk
        } = this;
        let Rk = kk === this.centresLen;
        for (let tk = 0; Rk && tk < 3 * kk; tk++) Rk = Fk[tk] === Bk[tk];
        Rk || (Fk.fill(0), Fk.set(Bk.subarray(0, 3 * kk)), this.centresLen = kk, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const kk = this.options.cmd();
        null !== kk && (0, ek.zf)(kk, 0, this.pa, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var kk, Fk, Bk;
        return null !== (kk = null === (Fk = (Bk = this.options).screen) || void 0 === Fk ? void 0 : Fk.call(Bk)) && void 0 !== kk ? kk : pk
      }
      hidden() {
        var kk;
        return (null !== (kk = this.options.isPageHidden) && void 0 !== kk ? kk : Kk)()
      }
      now() {
        var kk, Fk, Bk;
        return null !== (kk = null === (Fk = (Bk = this.options).now) || void 0 === Fk ? void 0 : Fk.call(Bk)) && void 0 !== kk ? kk : performance.now()
      }
    }
    var jk = Bk(40216);
    const lk = ek.D * ek.D * ek.D,
      nk = Math.log2(ek.D),
      Ik = ek.D - 1,
      Qk = ek.T.BYTES / 4,
      kF = new Uint16Array(lk);

    function FF(kk, Fk, Bk) {
      return kk * ek.D * ek.D + Fk * ek.D + Bk
    }
    class BF {
      constructor(kk) {
        this.chunk = kk
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(kk, Fk, Bk) {
        return FF(kk, Fk, Bk)
      }
    }
    class RF {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class tF {
      constructor(kk, Fk, Bk, Rk) {
        this.table = kk, this.slot = Fk, this.generation = Bk, this.epoch = Rk, this.jJ = new BF(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = kF, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Wy() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get pA() {
        const kk = this.gameVoxels(),
          Fk = this.layers ??= new Uint16Array(ek.D);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Bk = 0; 0 !== this.staleLayers; Bk++) {
          const Rk = 1 << Bk;
          0 !== (this.staleLayers & Rk) && (this.staleLayers &= ~Rk, Fk[Bk] = aF(kk, Bk))
        }
        return Fk
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const kk = this.voxelData(),
          Fk = this.writes;
        if (null === Fk || 0 === Fk.ids.size) return kk;
        if (Fk.from !== kk) {
          const Bk = Fk.patched ??= new Uint16Array(lk);
          Bk.set(kk);
          for (const [kk, Rk] of Fk.ids) Bk[kk] = Rk;
          Fk.from = kk
        }
        return Fk.patched
      }
      written(kk) {
        var Fk;
        return null === (Fk = this.writes) || void 0 === Fk ? void 0 : Fk.ids.get(kk)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(kk, Fk, Bk) {
        const Rk = this.writes ??= new RF;
        Rk.ids.set(kk, Fk), Bk && Rk.cleared.add(kk), null !== Rk.from && (Rk.patched[kk] = Fk);
        const tk = 1 << (kk >> nk & Ik);
        Rk.layers |= tk, this.staleLayers |= tk, this.writeCount++
      }
      clearWrites() {
        const kk = this.writes;
        null !== kk && (this.staleLayers |= kk.layers, kk.ids.clear(), kk.cleared.clear(), kk.layers = 0, kk.from = null)
      }
      dataCleared(kk) {
        var Fk;
        return !0 === (null === (Fk = this.writes) || void 0 === Fk ? void 0 : Fk.cleared.has(kk))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const kk = this.table.slotWords(),
          Fk = this.slot * Qk;
        if (this.epoch !== this.table.epoch || Fk + Qk > kk.length || 0 === kk[Fk + 3] || kk[Fk + 2] !== this.generation) return this.data = kF, this.dataPtr = 0, kF;
        this.version = kk[Fk + 1];
        const Bk = kk[Fk + 0],
          Rk = kk.buffer;
        return Bk === this.dataPtr && Rk === this.dataBuffer || (this.dataPtr = Bk, this.dataBuffer = Rk, this.data = this.table.voxelsAt(Rk, Bk)), this.data
      }
    }

    function aF(kk, Fk) {
      const Bk = kk[Fk * ek.D];
      for (let Rk = 0; Rk < ek.D; Rk++) {
        const tk = FF(Rk, Fk, 0);
        for (let Fk = 0; Fk < ek.D; Fk++)
          if (kk[tk + Fk] !== Bk) return 65535
      }
      return Bk
    }
    const XF = new Uint32Array(0);

    function bF(kk, Fk, Bk) {
      return FF(kk & Ik, Fk & Ik, Bk & Ik)
    }
    class wF {
      constructor(kk, Fk) {
        this.memory = kk, this.apiView = Fk, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = XF, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = XF, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(kk, Fk, Bk, Rk, tk, ak) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, ak === ek.V.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (ak !== ek.V.Stored && ak !== ek.V.Unloaded) throw new Ak.c(`ChunkSlot flags ${ak}`);
        const Xk = (0, jk.e)(kk, Fk, Bk);
        if (Xk < 0) return;
        if (ak === ek.V.Unloaded) return void this.chunks.delete(Xk);
        const bk = this.chunks.get(Xk);
        (null === bk || void 0 === bk ? void 0 : bk.slot) === Rk && bk.generation === tk || this.chunks.set(Xk, new tF(this, Rk, tk, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const kk = this.apiView(),
          Fk = ek.w.chunkSlotsPtr(kk, 0),
          Bk = ek.w.chunkSlotsLen(kk, 0);
        Fk === this.slotsPtr && Bk === this.slotsLen || (this.slotsPtr = Fk, this.slotsLen = Bk, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const kk = this.apiView(),
          Fk = ek.w.walkThroughPtr(kk, 0),
          Bk = ek.w.walkThroughLen(kk, 0);
        Fk === this.walkPtr && Bk === this.walkLen || (this.walkPtr = Fk, this.walkLen = Bk, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const kk of this.written) kk.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const kk = this.memory().buffer;
        var Fk;
        kk !== this.slotsBuffer && (this.slotsBuffer = kk, this.slots = null !== (Fk = (0, Ak.t)(Uint32Array, kk, this.slotsPtr, this.slotsLen * Qk, "the chunk directory")) && void 0 !== Fk ? Fk : XF);
        return this.slots
      }
      voxelsAt(kk, Fk) {
        try {
          var Bk;
          return null !== (Bk = (0, Ak.t)(Uint16Array, kk, Fk, lk, "a chunk's voxels")) && void 0 !== Bk ? Bk : kF
        } catch (Rk) {
          if (!(Rk instanceof Ak.c)) throw Rk;
          return this.corruption ??= Rk, kF
        }
      }
      chunk(kk, Fk, Bk) {
        var Rk;
        return null !== (Rk = this.chunks.get((0, jk.e)(kk, Fk, Bk))) && void 0 !== Rk ? Rk : null
      }
      isLoaded(kk, Fk, Bk) {
        return void 0 !== this.chunkAt(Math.floor(kk), Math.floor(Fk), Math.floor(Bk))
      }
      Ts(kk, Fk, Bk) {
        var Rk;
        const tk = Math.floor(kk),
          ak = Math.floor(Fk),
          Xk = Math.floor(Bk),
          bk = this.chunkAt(tk, ak, Xk);
        if (!bk) return 0;
        const wk = bF(tk, ak, Xk);
        return null !== (Rk = bk.written(wk)) && void 0 !== Rk ? Rk : bk.voxelData()[wk]
      }
      setOverlay(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ak = this.chunkAt(kk, Fk, Bk);
        return !!ak && (ak.hasWrites() || this.written.push(ak), ak.write(bF(kk, Fk, Bk), Rk, tk), !0)
      }
      version(kk, Fk, Bk) {
        var Rk, tk;
        return null !== (Rk = null === (tk = this.chunks.get((0, jk.e)(kk, Fk, Bk))) || void 0 === tk ? void 0 : tk.Wy) && void 0 !== Rk ? Rk : null
      }
      scan(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        const wk = ek.D;
        let dk = 0;
        for (let sk = Math.floor(Fk / wk); sk * wk < tk; sk++) {
          const Vk = sk * wk,
            Jk = Math.min(tk - Vk, wk);
          for (let tk = Math.floor(kk / wk); tk * wk < Rk; tk++) {
            const Ak = tk * wk,
              ek = Math.min(Rk - Ak, wk);
            for (let Rk = Math.floor(Bk / wk); Rk * wk < ak; Rk++) {
              const yk = this.chunks.get((0, jk.e)(tk, sk, Rk));
              if (!yk) continue;
              const fk = Rk * wk,
                mk = Math.max(Bk - fk, 0),
                Wk = Math.min(ak - fk, wk),
                vk = yk.pA,
                ik = yk.gameVoxels();
              for (let Bk = Math.max(Fk - Vk, 0); Bk < Jk; Bk++) {
                const Fk = vk[Bk];
                if (65535 === Fk || 0 !== Xk[Fk]) {
                  dk++;
                  for (let Fk = Math.max(kk - Ak, 0); Fk < ek; Fk++) {
                    const kk = FF(Fk, Bk, 0);
                    for (let Rk = mk; Rk < Wk; Rk++) {
                      const tk = ik[kk + Rk];
                      0 !== Xk[tk] && bk.push(Ak + Fk, Vk + Bk, fk + Rk, tk)
                    }
                  }
                }
              }
            }
          }
        }
        return dk
      }
      dataCleared(kk, Fk, Bk) {
        var Rk;
        const tk = Math.floor(kk),
          ak = Math.floor(Fk),
          Xk = Math.floor(Bk);
        return !0 === (null === (Rk = this.chunkAt(tk, ak, Xk)) || void 0 === Rk ? void 0 : Rk.dataCleared(bF(tk, ak, Xk)))
      }
      isWalkThrough(kk) {
        if (!Number.isInteger(kk) || kk < 0 || kk > 65535) return !1;
        const Fk = this.walkWords(),
          Bk = kk >>> 5;
        return Bk < Fk.length && 1 === (Fk[Bk] >>> (31 & kk) & 1)
      }
      walkWords() {
        const kk = this.memory().buffer;
        var Fk;
        kk !== this.walkBuffer && (this.walkBuffer = kk, this.walk = null !== (Fk = (0, Ak.t)(Uint32Array, kk, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Fk ? Fk : XF);
        return this.walk
      }
      chunkAt(kk, Fk, Bk) {
        if ((0 | kk) !== kk || (0 | Fk) !== Fk || (0 | Bk) !== Bk) return;
        const Rk = (0, jk.e)(kk >> nk, Fk >> nk, Bk >> nk);
        return Rk !== this.lastKey && (this.lastKey = Rk, this.lastChunk = this.chunks.get(Rk)), this.lastChunk
      }
    }
    var dF = Bk(38146),
      sF = Bk(37497),
      VF = Bk(36466),
      JF = Bk(36355),
      AF = Bk(8941),
      eF = Bk(38741),
      yF = Bk(182);
    const fF = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mob", "note", "phoneAndMoney", "police", "random", "rpg", "step", "survivalFactory", "town"],
      mF = [
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
      WF = mF.map((kk => {
        let [Fk] = kk;
        return Fk
      })),
      vF = Uint8Array.from(mF, (kk => {
        let [, Fk] = kk;
        return Fk
      })),
      iF = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      YF = 8;
    var oF = Bk(36460),
      LF = Bk(236);
    const OF = 2 ** fF.length - 1;
    class EF {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LF.b;
        this.sheet = kk, this.onError = Fk, this.idle = Bk, this.queue = [], this.asked = 0, this.cancelIdle = null, this.gen = 0, this.onIdle = kk => {
          this.cancelIdle = null;
          try {
            if (kk.timeRemaining() >= 1) {
              let kk = this.queue.shift();
              for (; void 0 !== kk && !this.load(kk);) kk = this.queue.shift()
            }
          } catch (Fk) {
            this.onError(Fk)
          } finally {
            this.schedule()
          }
        }
      }
      preload(kk) {
        const Fk = kk & OF & ~this.asked;
        if (0 !== Fk) {
          this.asked |= Fk;
          for (let kk = 0; kk < fF.length; kk++) Fk & 1 << kk && this.queue.push(kk);
          this.schedule()
        }
      }
      cancel() {
        var kk;
        this.queue.length = 0, this.asked = 0, this.gen++, null === (kk = this.cancelIdle) || void 0 === kk || kk.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(kk) {
        const Fk = this.sheet(kk, !1),
          Bk = this.sheet(kk, !0),
          [Rk, tk] = "unloaded" === Fk.state() && "unloaded" !== Bk.state() ? [Bk, Fk] : [Fk, Bk],
          ak = this.gen,
          Xk = () => {
            try {
              ak === this.gen && "unloaded" === tk.state() && tk.load()
            } catch (kk) {
              this.onError(kk)
            }
          },
          bk = Rk.state();
        return "unloaded" === bk ? (Rk.once("load", Xk), Rk.load(), !0) : "unloaded" === tk.state() && ("loading" === bk ? (Rk.once("load", Xk), !1) : (tk.load(), !0))
      }
    }
    var SF = Bk(40322);
    const NF = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      HF = yF.h.FW * yF.h.playerEyeToHeightRatio,
      uF = [0, 0, -1, 0, 1, 0],
      MF = fF.indexOf("note");

    function gF(kk) {
      return kk >= 0 ? Math.min(1, kk) : 0
    }

    function UF(kk) {
      var Fk;
      let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Rk = function(kk) {
        let Fk = 0,
          Bk = WF.length;
        for (; Fk < Bk;) {
          const Rk = Fk + Bk >>> 1;
          WF[Rk] < kk ? Fk = Rk + 1 : Bk = Rk
        }
        return Fk
      }(kk);
      if ("" === kk || null === (Fk = WF[Rk]) || void 0 === Fk || !Fk.startsWith(kk)) return -1;
      if (WF[Rk] === kk) return Rk;
      let tk = Rk + 1;
      for (; tk < WF.length && WF[tk].startsWith(kk);) tk++;
      return Rk + Math.floor(Bk() * (tk - Rk))
    }
    class cF {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.group = kk, this.loudness = Fk, this.startMs = Bk, this.howl = Rk, this.host = tk, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const kk = this.host.alive(this.id);
        return kk ? 1e3 * this.howl.duration(this.id) / kk.rate : 0
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
    class GF {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = kk, this.listener = Fk, this.now = Bk, this.errors = 0, this.sheets = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new oF.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: kk => this.aliveVoice(kk),
          started: kk => this.started.has(kk),
          drop: kk => {
            var Fk;
            null === (Fk = this.live.get(kk)) || void 0 === Fk || Fk.howl.stop(kk), this.forget(kk)
          }
        }, this.handlers = {
          playSound: (kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) => {
            if (Rk >= WF.length) return;
            const dk = 0 !== (tk & ek.ae.Loop);
            tk & ek.ae.TwoD ? this.start(Rk, !1, Xk, ak, bk, dk) : this.startSpatial(Rk, Xk, ak, bk, dk, kk, Fk, Bk, wk, this.earDistSq(kk, Fk, Bk))
          },
          soundPos: (kk, Fk, Bk, Rk) => {
            const tk = this.core.get(Rk);
            var ak;
            void 0 !== tk && (null === (ak = this.live.get(tk)) || void 0 === ak || ak.howl.pos(Bk, Fk, kk, tk))
          },
          soundSet: (kk, Fk, Bk, Rk) => {
            const tk = this.core.get(kk),
              ak = void 0 === tk ? void 0 : this.live.get(tk);
            void 0 !== tk && ak && (this.setRel(tk, Fk), ak.rate = Bk, ak.howl.rate(Bk, tk), ak.spatial && ak.howl.pannerAttr({
              refDistance: Rk
            }, tk))
          },
          soundFade: (kk, Fk, Bk, Rk) => {
            const tk = this.core.get(kk);
            void 0 !== tk && this.fade(tk, Fk, Bk, 0 !== (Rk & ek.Yd.StopAfter))
          },
          soundStop: kk => {
            const Fk = this.core.get(kk);
            var Bk;
            void 0 !== Fk && (null === (Bk = this.live.get(Fk)) || void 0 === Bk || Bk.howl.stop(Fk), this.forget(Fk))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new EF(((kk, Fk) => this.sheet(kk, Fk)), (kk => {
          this.errors++, console.error("Audio preload failed", kk)
        }), Rk)
      }
      prepare() {
        for (let kk = 0; kk < fF.length; kk++) this.sheet(kk, !1), this.sheet(kk, !0)
      }
      preload(kk) {
        this.loader.preload(kk)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      onAudioEvent(kk, Fk, Bk, Rk) {
        if (kk < ek.p.PlaySound || kk > ek.p.SoundReset) return !1;
        try {
          return (0, ek.ke)(kk, Fk, Bk, Rk, this.handlers)
        } catch (tk) {
          return this.errors++, console.error("Audio event failed", tk), !0
        }
      }
      applyListener(kk) {
        const Fk = this.nextPose;
        for (let Rk = 0; Rk < 3; Rk++) Fk[2 - Rk] = ek.x.listener(kk, 0, Rk), Fk[5 - Rk] = ek.x.forward(kk, 0, Rk), Fk[8 - Rk] = ek.x.up(kk, 0, Rk);
        0 === Fk[3] && 0 === Fk[4] && 0 === Fk[5] && Fk.set(this.posed ? this.pose.subarray(3) : uF, 3);
        for (let Rk = 0; Rk < 9; Rk++)
          if (!Number.isFinite(Fk[Rk])) return;
        const Bk = this.pose;
        if (this.posed) {
          let kk = !0;
          for (let Rk = 0; Rk < 9 && kk; Rk++) kk = Fk[Rk] === Bk[Rk];
          if (kk) return
        }
        this.listener.apply(Fk) && (Bk.set(Fk), this.posed = !0)
      }
      playGame(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = UF(kk);
        if (bk < 0) return SF.d;
        if (!Bk) {
          const {
            howl: kk,
            id: Bk
          } = this.start(bk, !1, Fk, 0, 1, Xk);
          return this.gameSound(kk, Bk, !1)
        }
        const wk = Bk[0],
          dk = Bk[1] + HF,
          sk = Bk[2];
        if (!Number.isFinite(wk) || !Number.isFinite(dk) || !Number.isFinite(sk)) return SF.d;
        let Vk;
        if (Rk) {
          const kk = wk - Rk[0],
            Fk = dk - Rk[1],
            Bk = sk - Rk[2];
          if (Vk = kk * kk + Fk * Fk + Bk * Bk, Vk > tk * tk) return SF.d
        } else Vk = this.earDistSq(wk, dk, sk);
        const Jk = this.startSpatial(bk, Fk, 0, 1, Xk, wk, dk, sk, ak, Vk);
        return Jk ? this.gameSound(Jk.howl, Jk.id, !0) : SF.d
      }
      setMaster(kk, Fk) {
        this.level = gF(kk);
        const Bk = Fk ? this.level : 0;
        if (Bk !== this.master) {
          this.master = Bk;
          for (const [kk, Fk] of this.live) Fk.fadeMs = 0, Fk.gain = Fk.rel * this.master, Fk.howl.volume(Fk.gain, kk)
        }
      }
      stopCore() {
        for (const Fk of [...this.core.values()]) {
          var kk;
          null === (kk = this.live.get(Fk)) || void 0 === kk || kk.howl.stop(Fk)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [kk, Fk] of [...this.live]) Fk.howl.stop(kk), this.forget(kk);
        this.core.clear()
      }
      gameSound(kk, Fk, Bk) {
        const Rk = {
          stop: () => (this.live.has(Fk) && kk.stop(Fk), Rk),
          fade: (kk, Bk, tk) => {
            var ak, Xk;
            const bk = this.level > 0 ? Bk / this.level : Bk > 0 && null !== (ak = null === (Xk = this.live.get(Fk)) || void 0 === Xk ? void 0 : Xk.rel) && void 0 !== ak ? ak : 0;
            return this.fade(Fk, bk, tk, !1), Rk
          },
          rate: Bk => {
            const tk = this.live.get(Fk);
            return tk && (tk.rate = function(kk) {
              return kk > 0 && kk < 1 / 0 ? kk : 1
            }(Bk), kk.rate(tk.rate, Fk)), Rk
          },
          getVolume: () => {
            var kk, Bk;
            return (null !== (kk = null === (Bk = this.live.get(Fk)) || void 0 === Bk ? void 0 : Bk.rel) && void 0 !== kk ? kk : 0) * this.level
          },
          getRelativeVolume: () => {
            var kk, Bk;
            return null !== (kk = null === (Bk = this.live.get(Fk)) || void 0 === Bk ? void 0 : Bk.rel) && void 0 !== kk ? kk : 0
          },
          setRelativeVolume: kk => (this.setRel(Fk, kk), Rk),
          setPannerAttr: tk => {
            if (Bk && this.live.has(Fk)) {
              const Bk = {
                ...NF,
                refDistance: VF.g
              };
              for (const [kk, Fk] of Object.entries(tk)) "number" !== typeof Fk && "string" !== typeof Fk || (Bk[kk] = Fk);
              kk.pannerAttr({
                coneOuterAngle: Bk.coneOuterAngle
              }, Fk), kk.pannerAttr(Bk, Fk)
            }
            return Rk
          },
          setPosition: tk => (Bk && this.live.has(Fk) && Number.isFinite(tk[0] + tk[1] + tk[2]) && kk.pos(tk[2], tk[1], tk[0], Fk), Rk)
        };
        return Rk
      }
      startSpatial(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        const sk = this.sheet(vF[kk], !0);
        let Vk = null;
        if (!tk) {
          if (this.failed.has(sk)) return null;
          const Bk = vF[kk] === MF ? null : (0, oF.i)(WF[kk]),
            Rk = (0, oF.h)(gF(Fk), Math.sqrt(dk), wk);
          if (Vk = new cF(Bk, Rk, this.now(), sk, this.voiceHost), !this.voices.admit(Vk)) return null
        }
        const Jk = this.start(kk, !0, Fk, Bk, Rk, tk);
        return Vk && (Vk.id = Jk.id, Vk.direct = "loaded" === sk.state() && !sk._playLock), sk.pannerAttr({
          coneOuterAngle: 360
        }, Jk.id), sk.pannerAttr({
          ...NF,
          refDistance: wk
        }, Jk.id), sk.pos(bk, Xk, ak, Jk.id), Jk
      }
      aliveVoice(kk) {
        const Fk = this.live.get(kk);
        if (!Fk) return;
        const Bk = Fk.howl._soundById(kk);
        if (Bk && !Bk._ended) return Fk;
        this.forget(kk)
      }
      earDistSq(kk, Fk, Bk) {
        if (!this.posed) return 0;
        const Rk = kk - this.pose[2],
          tk = Fk - this.pose[1],
          ak = Bk - this.pose[0];
        return Rk * Rk + tk * tk + ak * ak
      }
      start(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = gF(Bk),
          bk = this.sheet(vF[kk], Fk);
        "unloaded" === bk.state() && bk.load();
        const wk = bk.play(WF[kk]),
          dk = Xk * this.master;
        return bk.volume(dk, wk), this.live.set(wk, {
          howl: bk,
          rel: Xk,
          gain: dk,
          fadeFrom: dk,
          fadeAt: 0,
          fadeMs: 0,
          rate: tk,
          handle: Rk,
          spatial: Fk,
          stopTimer: void 0
        }), 0 !== Rk && this.core.set(Rk, wk), 1 !== tk && bk.rate(tk, wk), ak && bk.loop(!0, wk), {
          howl: bk,
          id: wk
        }
      }
      sheet(kk, Fk) {
        const Bk = 2 * kk + (Fk ? 1 : 0);
        let Rk = this.sheets.get(Bk);
        if (!Rk) {
          const tk = this.createHowl(fF[kk], Fk);
          tk.on("end", (kk => {
            tk.loop(kk) || this.forget(kk)
          })), tk.on("stop", (kk => {
            this.forget(kk)
          })), tk.on("play", (kk => {
            this.live.has(kk) && this.started.add(kk)
          })), tk.on("loaderror", (kk => {
            if ("loaded" !== tk.state()) {
              this.failed.add(tk);
              for (const [kk, Fk] of this.live) Fk.howl === tk && this.forget(kk)
            } else "number" === typeof kk && this.forget(kk)
          })), this.sheets.set(Bk, tk), Rk = tk
        }
        return Rk
      }
      setRel(kk, Fk) {
        const Bk = this.live.get(kk);
        Bk && (TF(Bk), Bk.fadeMs = 0, Bk.rel = gF(Fk), Bk.gain = Bk.rel * this.master, Bk.howl.volume(Bk.gain, kk))
      }
      fade(kk, Fk, Bk, Rk) {
        const tk = this.live.get(kk);
        if (!tk) return;
        TF(tk);
        const {
          howl: ak
        } = tk, Xk = this.gainNow(tk);
        tk.rel = gF(Fk), tk.gain = tk.rel * this.master;
        const bk = Bk > 0 ? Math.min(Bk, 65535) : 0,
          wk = 0 === bk || Xk === tk.gain;
        tk.fadeMs = wk ? 0 : bk, wk ? ak.volume(tk.gain, kk) : (tk.fadeFrom = Xk, tk.fadeAt = this.now(), ak.fade(Xk, tk.gain, bk, kk)), Rk && (wk ? ak.stop(kk) : tk.stopTimer = setTimeout((() => {
          tk.stopTimer = void 0, ak.stop(kk)
        }), bk))
      }
      gainNow(kk) {
        if (kk.fadeMs > 0) {
          const Fk = (this.now() - kk.fadeAt) / kk.fadeMs;
          if (Fk < 1) return kk.fadeFrom + (kk.gain - kk.fadeFrom) * Math.max(0, Fk);
          kk.fadeMs = 0
        }
        return kk.gain
      }
      forget(kk) {
        this.started.delete(kk);
        const Fk = this.live.get(kk);
        Fk && (TF(Fk), this.live.delete(kk), 0 !== Fk.handle && this.core.get(Fk.handle) === kk && this.core.delete(Fk.handle))
      }
    }

    function TF(kk) {
      void 0 !== kk.stopTimer && (clearTimeout(kk.stopTimer), kk.stopTimer = void 0)
    }
    var rF = Bk(40029),
      DF = Bk(38746);
    class zF {
      constructor(kk, Fk, Bk, Rk) {
        this.key = kk, this.model = Fk, this.host = Rk, this.KV = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.Rtk = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.Te = !1, this.KV = Math.max(1, Math.ceil(Bk)), this.records = new Float32Array(this.KV * dF.c), this.isDirty = new Uint8Array(this.KV), this.tail = new Uint8Array(this.KV * ek.xc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Rk.cmd())
      }
      setOrigin(kk, Fk, Bk) {
        this.origin[0] = kk, this.origin[1] = Fk, this.origin[2] = Bk
      }
      markDirty(kk) {
        !this.Te && kk >= 0 && kk < this.KV && kk < ek.xc.Max && this.Xy(kk, kk + 1)
      }
      commit(kk) {
        if (this.Te) return;
        (kk = Math.min(Math.max(Math.floor(kk), 0), this.KV, ek.xc.Max)) > this.count && this.Xy(this.count, kk), this.count = kk;
        const {
          origin: Fk,
          sentOrigin: Bk,
          dirtyList: Rk
        } = this, tk = this.Rtk !== kk, ak = Bk[0] !== Fk[0] || Bk[1] !== Fk[1] || Bk[2] !== Fk[2];
        if (0 === Rk.length && !tk && !ak) return;
        const Xk = this.host.cmd();
        if (!Xk || !this.make(Xk)) return;
        const bk = Rk.length,
          {
            records: wk,
            tailView: dk
          } = this;
        for (let sk = 0; sk < bk; sk++) {
          const kk = Rk[sk],
            Fk = kk * dF.c,
            Bk = sk * ek.xc.Bytes,
            tk = 0 !== wk[Fk + dF.d] ? ek.xc.Hidden : 0;
          dk.setUint32(Bk, (kk | tk) >>> 0, !0), dk.setFloat32(Bk + 4, wk[Fk], !0), dk.setFloat32(Bk + 8, wk[Fk + 1], !0), dk.setFloat32(Bk + 12, wk[Fk + 2], !0)
        }
        if ((0, ek.Ge)(Xk, 0, this.key, kk, Fk, bk, this.tailOf(bk))) {
          for (let kk = 0; kk < bk; kk++) this.isDirty[Rk[kk]] = 0;
          Rk.length = 0, this.Rtk = kk, Bk[0] = Fk[0], Bk[1] = Fk[1], Bk[2] = Fk[2]
        }
      }
      grow(kk) {
        (kk = Math.ceil(kk)) <= this.KV || this.Te || (this.records = (0, DF.e)(this.records, new Float32Array(kk * dF.c)), this.isDirty = (0, DF.e)(this.isDirty, new Uint8Array(kk)), this.tail = new Uint8Array(kk * ek.xc.Bytes), this.tailView = new DataView(this.tail.buffer), this.KV = kk)
      }
      dispose() {
        this.Te || (this.Te = !0, this.host.Te(this, this.made ? this.key : null))
      }
      make(kk) {
        if (!this.made && kk) {
          const {
            item: Fk,
            scale: Bk,
            yaw: Rk
          } = this.model;
          this.made = (0, ek.Ke)(kk, 0, this.key, Fk, Bk, Rk)
        }
        return this.made
      }
      tailOf(kk) {
        const Fk = kk * ek.xc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Fk || (this.tailCut = this.tail.subarray(0, Fk)), this.tailCut
      }
      Xy(kk, Fk) {
        const {
          dirtyList: Bk,
          isDirty: Rk
        } = this;
        for (let tk = kk; tk < Fk; tk++) 0 === Rk[tk] && (Rk[tk] = 1, Bk.push(tk))
      }
    }
    var PF = Bk(597);
    class hF {
      constructor(kk) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: kk,
          owes: kk => {
            this.owing.add(kk)
          },
          settled: (kk, Fk) => {
            this.owing.delete(kk), Fk && this.live.delete(kk)
          }
        }
      }
      create(kk, Fk) {
        if (Bk = kk, !PF.p.includes(Bk)) return null;
        var Bk;
        const Rk = new qF(++this.keys, sk.i.indexOf(kk), Fk, this.host);
        return this.live.add(Rk), Rk
      }
      disposeAll() {
        for (const kk of [...this.live]) kk.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const kk = this.host.cmd();
        for (const Fk of this.owing)
          if (!Fk.sync(kk)) return
      }
    }
    class qF {
      constructor(kk, Fk, Bk, Rk) {
        this.key = kk, this.lifeform = Fk, this.scale = Bk, this.host = Rk, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Te = !1, this.sync()
      }
      setPose(kk, Fk) {
        this.Te || (this.feet[0] = kk[0], this.feet[1] = kk[1], this.feet[2] = kk[2], this.yaw = Fk, this.owed |= 2, this.sync())
      }
      setVisible(kk) {
        this.Te || kk === this.visible || (this.visible = kk, this.owed |= 4, this.sync())
      }
      dispose() {
        this.Te || (this.Te = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(kk) ? (this.host.settled(this, this.Te), !0) : (this.host.owes(this), !1)
      }
      write(kk) {
        if (!kk) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, ek.Se)(kk, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Fk = (2 & this.owed ? ek.Qc.Pose : 0) | (4 & this.owed ? ek.Qc.Visible : 0);
        if (0 !== Fk) {
          if (!(0, ek.Qe)(kk, 0, this.key, Fk, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, ek.Oe)(kk, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var CF = Bk(40481);

    function ZF(kk, Fk, Bk, Rk) {
      return (0, CF.e)(), (0, ek.Af)(kk, Fk, Bk, Rk)
    }
    var pF = Bk(38753),
      KF = Bk(40021);
    const xF = [0, 0, 0],
      jF = [0, 0, 0],
      lF = [0, 0, 0],
      nF = [0, 0, 0],
      IF = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      QF = [0, 0, 0],
      kB = [0, 0],
      FB = [1, 1, 1],
      BB = 1 / 3;
    const RB = sF.i;

    function tB(kk) {
      const Fk = sF.e[kk],
        Bk = Fk && sF.i[Fk.mainMultiblock];
      return Bk && {
        main: Bk,
        x: Fk.compX,
        y: Fk.compY,
        z: Fk.compZ
      }
    }

    function aB(kk) {
      if (null === kk || void 0 === kk) return ek.Yc;
      const Fk = +kk;
      return Number.isInteger(Fk) && Fk >= -2147483648 && Fk <= 2147483647 && String(Fk) === String(kk) ? Fk : ek.Yc
    }

    function XB(kk, Fk, Bk) {
      return (0, ek.If)(kk, 0, Fk, null !== Bk && void 0 !== Bk ? Bk : Number.NaN)
    }
    class bB {
      constructor(kk) {
        this.deps = kk, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new pF.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (kk => {
          var Fk, Bk;
          null === (Fk = (Bk = this.deps).setLocalOptions) || void 0 === Fk || Fk.call(Bk, kk)
        })), this.mobModels = new hF((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          Te: (kk, Fk) => {
            this.livePools.delete(kk), null !== Fk && (this.owedFrees.push(Fk), this.flushOwed())
          }
        }, this.api = kk.api, this.live = kk.live, this.chunks = kk.chunks, this.items = kk.items, this.tables = kk.tables
      }
      isLocal(kk) {
        return null !== kk && void 0 !== kk && +kk === this.api.localId
      }
      assertLocal(kk, Fk) {
        if (!this.isLocal(kk)) throw new Error(`Attempted to ${Fk} for a player that is not the local player`)
      }
      rW(kk) {
        const Fk = this.api.rW(kk);
        if (!Fk) throw new Error(`Entity ${kk} has no replicated position`);
        return Fk
      }
      checkValid(kk) {
        return !!this.deps.isSessionLive() && (null === kk || void 0 === kk || this.api.checkValid(kk))
      }
      isAlive(kk) {
        return !1 !== this.api.isAlive(kk)
      }
      getItemStat(kk, Fk, Bk) {
        return this.isLocal(kk) || null !== kk && "Player" === this.api.getEntityType(kk) ? this.tables.getItemStat(Fk, Bk) : this.tables.getDefaultItemStat(Fk, Bk)
      }
      getClientOption(kk, Fk) {
        return this.assertLocal(kk, "get a client option"), this.tables.getClientOption(Fk)
      }
      openShop(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(kk, "open shop"), Xk.o.Hf("showShopFromServer", {
          toggle: Fk,
          eF: Bk
        }, !0)
      }
      sendMessage(kk, Fk, Bk) {
        this.assertLocal(kk, "send a message");
        const Rk = "string" === typeof Fk ? [{
          str: Fk,
          style: Bk
        }] : Fk;
        Xk.o.Hf("chat", {
          content: Rk
        }, !0)
      }
      getEntityType(kk) {
        return this.api.getEntityType(kk)
      }
      getEntityName(kk) {
        const Fk = aB(kk);
        return Fk === ek.Yc ? void 0 : (0, rF.e)(this.api, Fk)
      }
      hasEffect(kk, Fk) {
        const Bk = aB(kk);
        return Bk !== ek.Yc && (0, rF.d)(this.api, Bk, Fk)
      }
      getMetaInfo(kk) {
        return this.tables.getMetaInfo(kk)
      }
      getPlayerDbId(kk) {
        return this.assertLocal(kk, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(kk, Fk, Bk) {
        if (!this.chunks.dataCleared(kk, Fk, Bk)) return (0, rF.c)(this.api, kk, Fk, Bk)
      }
      uE(kk, Fk, Bk, Rk) {
        this.setBlockId(kk, Fk, Bk, this.tables.getItemId(Rk))
      }
      setOtherEntitySetting(kk, Fk, Bk, Rk) {
        if (!this.isLocal(kk)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(ek.jd, Bk)) throw new Error(`Unknown other-entity setting ${Bk}`);
        const tk = ek.jd[Bk],
          ak = aB(Fk);
        if (ak === ek.Yc || !this.deps.beforeWrite()) return;
        const Xk = (0, rk.g)(Rk);
        if (Xk.length > 16384) throw new Error(`The other-entity setting ${Bk}'s value is over 16384 bytes`);
        const bk = this.api.memoryView(Uint8Array, this.api.scratch(), Xk.length, "set_other_entity_setting's value");
        bk && (bk.set(Xk), this.api.queries.setOtherEntitySetting(ak, tk, Xk.length))
      }
      getPositionView(kk) {
        return this.live.position(+kk)
      }
      readDrawnPosition(kk, Fk) {
        return this.api.readDrawnPosition(aB(kk), Fk)
      }
      getDrawnHeading(kk) {
        const Fk = aB(kk),
          Bk = (Fk === ek.Yc ? 0 : this.api.queries.directorEntity(Fk)) >= ek.zb.BYTES ? this.api.memoryData(this.api.scratch(), ek.zb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!Bk) return null;
        if (1 === ek.zb.headingIsDrawn(Bk, 0)) return ek.zb.heading(Bk, 0);
        const Rk = this.api.apiView;
        return this.isLocal(kk) && 0 === (ek.w.playerFlags(Rk, 0) & ek.Ed.FreeCam) ? ek.w.heading(Rk, 0) : null
      }
      getLocalPlayerMovement() {
        const kk = ek.w.playerFlags(this.api.apiView, 0);
        return 0 === (kk & ek.Ed.Replay) && this.api.readDrawnPosition(this.api.localId, lF) ? {
          onGround: 0 !== (kk & ek.Ed.OnGround),
          jumpHeld: 0 !== (kk & ek.Ed.JumpHeld)
        } : null
      }
      LFk(kk) {
        return this.isLocal(kk) ? this.items.Hb() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var kk, Fk;
        return "Gun" === (null === (kk = this.aliveHeld()) || void 0 === kk || null === (Fk = kk.typeObj) || void 0 === Fk ? void 0 : Fk.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Hb()
      }
      isCrosshairShown() {
        var kk, Fk;
        const Bk = (0, JF.b)(Rk.c.get("crosshairGameView"), Rk.c.get("crosshairShownOverride"));
        if (null !== Bk) return Bk;
        const tk = null === (kk = this.aliveHeld()) || void 0 === kk ? void 0 : kk.typeObj,
          ak = "Gun" === (null === tk || void 0 === tk ? void 0 : tk.type),
          Xk = ak || !0 === (null === tk || void 0 === tk ? void 0 : tk.showsAimingUi),
          bk = 0 === (ek.w.playerFlags(this.api.apiView, 0) & ek.Ed.ZoomFirstPerson),
          wk = null !== (Fk = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Fk ? Fk : null;
        return (0, JF.h)({
          gun: ak,
          aimable: Xk
        }, bk, (0, AF.e)(), wk)
      }
      setCrosshairShown(kk) {
        Rk.c.set({
          crosshairShownOverride: kk
        })
      }
      getInventoryFreeSlotCount(kk) {
        return this.isLocal(kk) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(kk) {
        return this.isLocal(kk) ? this.items.selectedSlot : null
      }
      getItemSlot(kk, Fk) {
        return this.isLocal(kk) ? this.items.slot(Fk) : null
      }
      swapInventorySlots(kk, Fk) {
        return this.items.swap(kk, Fk)
      }
      isPlayerCrouching(kk) {
        if (this.isLocal(kk)) return 0 !== (ek.w.playerFlags(this.api.apiView, 0) & ek.Ed.Crouching);
        const Fk = aB(kk);
        return Fk !== ek.Yc && 1 === this.api.queries.entityCrouching(Fk)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (ek.w.playerFlags(this.api.apiView, 0) & ek.Ed.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.tkk()
      }
      getActionRay() {
        const kk = this.api.apiView;
        for (let Fk = 0; Fk < 3; Fk++) IF.origin[Fk] = ek.w.vkk(kk, 0, Fk), IF.direction[Fk] = ek.w.actionDir(kk, 0, Fk);
        return IF
      }
      canModifyBlockAt(kk, Fk, Bk) {
        return 1 === this.api.queries.canModify(kk, Fk, Bk)
      }
      isSolidToPlayerBlockId(kk) {
        return this.tables.isSolidBlockId(kk) && !this.chunks.isWalkThrough(kk)
      }
      blockNameToBlockId(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(kk, Fk)
      }
      blockIdToBlockName(kk) {
        return this.tables.nameOfId(kk)
      }
      Zkk(kk, Fk, Bk, Rk, tk) {
        return 1 === this.api.queries.terrainBlocked(Rk, kk, Fk, Bk, aB(null !== tk && void 0 !== tk ? tk : null))
      }
      getChunkVersion(kk, Fk, Bk) {
        return this.chunks.version(kk, Fk, Bk)
      }
      scanBlocks(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        return this.chunks.scan(kk, Fk, Bk, Rk, tk, ak, Xk, bk)
      }
      isBlockInLoadedChunk(kk, Fk, Bk) {
        return this.chunks.isLoaded(kk, Fk, Bk)
      }
      getBlockId(kk, Fk, Bk) {
        return this.chunks.Ts(kk, Fk, Bk)
      }
      playSound(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(kk)) return null;
        const Xk = this.playSoundFrom(Fk, Bk, tk, ak);
        return 1 === Rk ? Xk : Xk.rate(Rk)
      }
      playSoundFrom(kk, Fk, Bk, Rk) {
        var tk, ak;
        const Xk = this.deps.playSound;
        if (!Xk) return SF.d;
        const bk = null === Bk || void 0 === Bk ? void 0 : Bk.gt,
          wk = null !== (tk = null === Bk || void 0 === Bk ? void 0 : Bk.maxHearDist) && void 0 !== tk ? tk : VF.d,
          dk = null !== (ak = null === Bk || void 0 === Bk ? void 0 : Bk.refDistance) && void 0 !== ak ? ak : VF.g;
        let sk = null;
        if (Array.isArray(bk)) xF[0] = bk[0], xF[1] = bk[1], xF[2] = bk[2], sk = xF;
        else if (void 0 !== bk && null !== bk) {
          const kk = aB(bk);
          if (!this.api.isLocal(kk)) {
            if (!this.api.readPosition(kk, xF)) return SF.d;
            sk = xF
          }
        }
        return Xk(kk, Fk, sk, sk && this.ear(), wk, dk, Rk)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, jF)) jF[1] += HF;
        else {
          const kk = this.api.apiView;
          if (0 === ek.w.viewProj(kk, 0, 3) && 0 === ek.w.viewProj(kk, 0, 7) && 0 === ek.w.viewProj(kk, 0, 11)) return null;
          for (let Fk = 0; Fk < 3; Fk++) jF[Fk] = ek.w.eye(kk, 0, Fk)
        }
        return Number.isFinite(jF[0] + jF[1] + jF[2]) ? jF : null
      }
      setBlockId(kk, Fk, Bk, Rk) {
        if (!Number.isInteger(Rk) || Rk < 0 || Rk > 65535) throw new Error(`Invalid block id ${Rk}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(kk, Fk, Bk)) return;
        const tk = Math.floor(kk),
          ak = Math.floor(Fk),
          Xk = Math.floor(Bk),
          bk = this.predictedCells(tk, ak, Xk, Rk);
        if (1 === this.api.queries.uE(tk, ak, Xk, Rk)) {
          for (let kk = 0; kk < bk.length; kk += 5) this.chunks.setOverlay(bk[kk], bk[kk + 1], bk[kk + 2], bk[kk + 3], 1 === bk[kk + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(kk, Fk) {
        return this.deps.particles.create(kk, Fk)
      }
      playParticleEffect(kk) {
        this.deps.particles.playEffect(kk)
      }
      burstParticlePreset(kk, Fk, Bk) {
        this.deps.particles.burstPreset(kk, Fk, Bk)
      }
      createGameMesh(kk, Fk, Bk) {
        const Rk = ++this.meshKeys,
          tk = this.deps.cmd();
        if (!tk) return Rk;
        const {
          look: ak,
          colour: Xk
        } = function(kk) {
          switch (kk.kind) {
            case void 0:
            case "flatEmissive":
              return kk.onTop ? {
                look: ek.gc.FlatOnTop,
                colour: [...kk.rgb, kk.alpha]
              } : kk.opaque ? {
                look: ek.gc.FlatOpaque,
                colour: [...kk.rgb, 1]
              } : {
                look: ek.gc.Flat,
                colour: [...kk.rgb, kk.alpha]
              };
            case "chevronPath":
              return {
                look: ek.gc.Chevrons, colour: [...(0, eF.d)(kk.colour), kk.alpha]
              };
            case "furnaceFire":
              return {
                look: ek.gc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Fk), bk = Math.floor(kk.positions.length / 3), wk = function(kk, Fk) {
          const Bk = Math.floor(kk.positions.length / 3),
            Rk = kk.indices.length,
            tk = Bk * (Fk ? 5 : 3),
            ak = new Uint8Array(4 * (tk + Rk)),
            Xk = new DataView(ak.buffer);
          for (let dk = 0; dk < 3 * Bk; dk++) Xk.setFloat32(4 * dk, kk.positions[dk], !0);
          if (Fk) {
            var bk;
            const Fk = null !== (bk = kk.uvs) && void 0 !== bk ? bk : [];
            for (let kk = 0; kk < 2 * Bk; kk++) {
              var wk;
              Xk.setFloat32(4 * (3 * Bk + kk), null !== (wk = Fk[kk]) && void 0 !== wk ? wk : 0, !0)
            }
          }
          for (let dk = 0; dk < Rk; dk++) Xk.setUint32(4 * (tk + dk), kk.indices[dk], !0);
          return ak
        }(kk, (0, dF.f)(Fk));
        return (0, ek.we)(tk, 0, Rk, ak, Xk, Bk, bk, kk.indices.length, wk) && this.liveMeshes.add(Rk), Rk
      }
      setGameMesh(kk, Fk) {
        var Bk;
        const Rk = this.deps.cmd();
        if (!Rk) return;
        let tk = 0;
        Fk.anchor && (tk |= ek.hc.Anchor, QF[0] = Fk.anchor[0], QF[1] = Fk.anchor[1], QF[2] = Fk.anchor[2]), void 0 !== Fk.visible && (tk |= ek.hc.Visible), Fk.uvOffset && (tk |= ek.hc.UvOffset, kB[0] = Fk.uvOffset[0], kB[1] = Fk.uvOffset[1]);
        const ak = null !== (Bk = Fk.visibility) && void 0 !== Bk ? Bk : 1;
        void 0 !== Fk.visibility && (tk |= ek.hc.Visibility), Fk.scale && (tk |= ek.hc.Scale, FB[0] = Fk.scale[0], FB[1] = Fk.scale[1], FB[2] = Fk.scale[2]), 0 !== tk && (0, ek.De)(Rk, 0, kk, tk, Fk.visible ? 1 : 0, QF, kB, ak, FB)
      }
      disposeGameMesh(kk) {
        const Fk = this.deps.cmd();
        Fk && !(0, ek.Ae)(Fk, 0, kk) || this.liveMeshes.delete(kk)
      }
      hasPackModel(kk) {
        var Fk, Bk, Rk;
        return null !== (Fk = null === (Bk = (Rk = this.deps).hasPackModel) || void 0 === Bk ? void 0 : Bk.call(Rk, kk)) && void 0 !== Fk && Fk
      }
      disposeGameOutput() {
        const kk = kk => {
          try {
            kk()
          } catch (Fk) {
            console.error("Error freeing client game output", Fk)
          }
        };
        for (const Fk of [...this.liveMeshes]) kk((() => {
          this.disposeGameMesh(Fk)
        }));
        for (const Fk of [...this.livePools]) kk((() => {
          Fk.dispose()
        }));
        kk((() => {
          this.mobModels.disposeAll()
        })), kk((() => {
          this.setGroundArrowStyle(null)
        })), kk((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), kk((() => {
          this.setCrosshairShown(null)
        })), kk((() => {
          this.cameraTurn.dispose()
        })), kk((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(kk, Fk) {
        const Bk = this.tables.idOf(kk.item);
        if (void 0 === Bk) return null;
        const Rk = new zF(++this.poolKeys, {
          item: Bk,
          scale: kk.scale,
          yaw: kk.yaw
        }, Fk, this.poolHost);
        return this.livePools.add(Rk), Rk
      }
      createMobModel(kk, Fk) {
        return this.mobModels.create(kk, Fk)
      }
      setRouteChevrons(kk) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !kk || 0 === kk.cells.length) return;
        const Fk = `${kk.colour} ${kk.alpha}`;
        Fk !== this.routeLook && (this.routeLook = Fk, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(kk) {
          const [Fk, Bk, Rk] = kk[0].pos, tk = [], ak = [], Xk = [];
          return kk.forEach(((kk, bk) => {
            let {
              pos: wk,
              way: [dk, sk]
            } = kk;
            const Vk = wk[0] - Fk + .5,
              Jk = wk[1] - Bk + .04,
              Ak = wk[2] - Rk + .5,
              [ek, yk] = [.35 * -sk, .35 * dk],
              [fk, mk] = [bk * BB, (bk + 1) * BB],
              Wk = tk.length / 3;
            tk.push(Vk - .5 * dk + ek, Jk, Ak - .5 * sk + yk), tk.push(Vk - .5 * dk - ek, Jk, Ak - .5 * sk - yk), tk.push(Vk + .5 * dk + ek, Jk, Ak + .5 * sk + yk), tk.push(Vk + .5 * dk - ek, Jk, Ak + .5 * sk - yk), ak.push(0, fk, 1, fk, 0, mk, 1, mk), Xk.push(Wk, Wk + 1, Wk + 2, Wk + 1, Wk + 3, Wk + 2)
          })), {
            positions: tk,
            uvs: ak,
            indices: Xk
          }
        }(kk.cells), {
          kind: "chevronPath",
          colour: kk.colour,
          alpha: kk.alpha
        }, kk.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(kk) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(kk, 250) / 1e3 * 1.2 * BB) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(kk) {
        this.pendingStyle = kk, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const kk = this.owedFrees;
        if (0 === kk.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Fk = this.deps.cmd();
        if (!Fk) return kk.length = 0, void(this.pendingFar = void 0);
        let Bk = 0;
        for (; Bk < kk.length && (0, ek.Ie)(Fk, 0, kk[Bk]);) Bk++;
        kk.splice(0, Bk);
        const Rk = this.pendingStyle;
        if (void 0 !== Rk) {
          (Rk ? (0, ek.Mf)(Fk, 0, Rk.width, Rk.alpha, 1, Rk.endAtSolidFace ? 1 : 0) : (0, ek.Mf)(Fk, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const tk = this.pendingFar;
        void 0 !== tk && (0, ek.Ef)(Fk, 0, null !== tk && void 0 !== tk ? tk : 0, null === tk ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(kk, Fk) {
        const Bk = this.deps.cmd(),
          Rk = aB(kk);
        Bk && Rk !== ek.Yc && (0, ek.Vf)(Bk, 0, Rk, Fk)
      }
      setFacingTolerance(kk, Fk) {
        const Bk = this.deps.cmd(),
          Rk = aB(kk);
        Bk && Rk !== ek.Yc && XB(Bk, Rk, Fk)
      }
      forEachEntity(kk) {
        const {
          api: Fk
        } = this;
        for (let Bk = 0; Bk < Fk.idStr.length; Bk++) {
          const Rk = Fk.idStr[Bk];
          null === Rk || Yk(Fk.kinds[Bk]) || kk(Rk)
        }
      }
      getEntityInfo(kk) {
        return this.deps.entityInfo.get(kk)
      }
      isEntityInteractable(kk) {
        const Fk = aB(kk);
        return Fk !== ek.Yc && 1 === this.api.queries.entityInteractable(Fk)
      }
      isLocalPlayer(kk) {
        return this.isLocal(kk)
      }
      getLineOwner(kk) {
        var Fk;
        const Bk = null === (Fk = this.deps.entityInfo.get(kk)) || void 0 === Fk ? void 0 : Fk.meshOpts;
        if (!Bk) return null;
        try {
          const {
            lineToEId: kk
          } = JSON.parse(Bk);
          return null !== kk && void 0 !== kk ? kk : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const kk = this.api.apiView;
        return nF[0] = ek.w.eye(kk, 0, 0), nF[1] = ek.w.eye(kk, 0, 1), nF[2] = ek.w.eye(kk, 0, 2), nF
      }
      getCameraFar() {
        return ek.w.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(kk) {
        null !== kk && (this.farSet = !0), this.pendingFar = kk, this.flushOwed()
      }
      turnCamera(kk, Fk) {
        this.cameraTurn.turn(kk, Fk)
      }
      clearPickupDelay(kk) {
        const Fk = this.deps.cmd(),
          Bk = aB(kk);
        Fk && Bk !== ek.Yc && (0, ek.oe)(Fk, 0, Bk)
      }
      sendChat(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = this.deps.sendCmd();
        Bk && ZF(Bk, 0, KF.b.Chat, (0, rk.g)((0, KF.k)({
          UX: kk,
          cX: Fk
        })))
      }
      sendCommand(kk) {
        kk.length <= 119 && this.sendChat(`/${kk}`)
      }
      predictedCells(kk, Fk, Bk, Rk) {
        const tk = this.chunks,
          ak = [],
          Xk = (kk, Fk, Bk, Rk, tk) => {
            ak.push(kk, Fk, Bk, Rk, this.tables.blockRootId(tk) === this.tables.blockRootId(Rk) ? 0 : 1)
          },
          bk = tk.Ts(kk, Fk, Bk),
          wk = tB(bk);
        if (wk) {
          const [Rk, ak, dk] = [kk - wk.x, Fk - wk.y, Bk - wk.z], sk = RB[tk.Ts(Rk, ak, dk)], Vk = null === sk || void 0 === sk ? void 0 : sk.positions.some((kk => kk.id === bk && kk.x === wk.x && kk.y === wk.y && kk.z === wk.z));
          for (const kk of (Vk && sk ? sk : wk.main).positions) tk.Ts(Rk + kk.x, ak + kk.y, dk + kk.z) === kk.id && Xk(Rk + kk.x, ak + kk.y, dk + kk.z, 0, kk.id)
        }
        const dk = tB(Rk);
        if (dk)
          for (const Vk of dk.main.positions) {
            const [Rk, ak, bk] = [kk + Vk.x - dk.x, Fk + Vk.y - dk.y, Bk + Vk.z - dk.z];
            Xk(Rk, ak, bk, Vk.id, tk.Ts(Rk, ak, bk))
          } else Xk(kk, Fk, Bk, Rk, bk);
        const sk = this.tables;
        if ((0 !== sk.attachedTopOf(bk) || 0 !== sk.attachedTopOf(Rk)) && tk.isLoaded(kk, Fk + 1, Bk)) {
          let wk = tk.Ts(kk, Fk + 1, Bk);
          for (let Rk = 0; Rk < ak.length; Rk += 5) ak[Rk] === kk && ak[Rk + 1] === Fk + 1 && ak[Rk + 2] === Bk && (wk = ak[Rk + 3]);
          const dk = this.attachedTopWrite(bk, Rk, wk);
          void 0 !== dk && Xk(kk, Fk + 1, Bk, dk, wk)
        }
        return ak
      }
      attachedTopWrite(kk, Fk, Bk) {
        const Rk = this.tables,
          tk = Rk.attachedTopOf(kk),
          ak = Rk.attachedTopOf(Fk),
          Xk = 0 !== tk && 0 !== Bk && Rk.blockRootId(Bk) === Rk.blockRootId(tk);
        return 0 !== tk && 0 !== ak && Rk.blockRootId(kk) === Rk.blockRootId(Fk) ? Xk && Bk !== ak ? ak : void 0 : 0 === ak || !Xk && 0 !== Bk ? Xk ? 0 : void 0 : ak
      }
    }
    const wB = ek.rc + ek.uc * ek.Ac.BYTES,
      dB = 2147483647,
      sB = new TextDecoder,
      VB = new TextEncoder,
      JB = Object.freeze({
        Ps: 0,
        fV: null,
        amountAddedToSlot: 0
      }),
      AB = new Proxy({}, {
        get: () => () => ek.fd
      });

    function eB(kk) {
      return Number.isInteger(kk) && kk >= 0 && kk <= 65535
    }

    function yB(kk) {
      return Number.isInteger(kk) && kk >= 0 && kk <= 4294967295
    }
    class fB {
      constructor(kk) {
        this.deps = kk, this.xa = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(ek.uc), this.ids = new Uint16Array(ek.uc), this.amounts = new Uint16Array(ek.uc), this.attrRead = new Float64Array(ek.uc).fill(-1), this.stale = new Uint16Array(ek.uc), this.staleVersion = new Uint32Array(ek.uc), this.instances = new Uint32Array(ek.uc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(kk) {
        var Fk;
        return Number.isInteger(kk) && kk >= 0 && kk < this.len && 0 !== this.ids[kk] && null !== (Fk = this.facades[kk]) && void 0 !== Fk ? Fk : null
      }
      Hb() {
        return this.slot(this.selected)
      }
      playerItems() {
        const kk = [];
        for (let Fk = 0; Fk < Math.min(ek.pd, this.len); Fk++) kk.push(this.slot(Fk));
        return kk
      }
      freeSlots() {
        let kk = 0;
        for (let Fk = 0; Fk < Math.min(ek.pd - ek.i, this.len); Fk++) 0 === this.ids[Fk] && kk++;
        return kk
      }
      amountOf(kk) {
        let Fk = 0;
        for (let Rk = 0; Rk < Math.min(ek.pd, this.len); Rk++) {
          const tk = this.slot(Rk);
          var Bk;
          if ((null === tk || void 0 === tk ? void 0 : tk.name) === kk) Fk += null !== (Bk = tk.amount) && void 0 !== Bk ? Bk : 1
        }
        return Fk
      }
      instance(kk) {
        var Fk;
        return null !== (Fk = this.instances[kk]) && void 0 !== Fk ? Fk : 0
      }
      watch(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      touch() {
        this.version++
      }
      flush(kk) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const Bk of [...this.listeners]) try {
            Bk()
          } catch (Fk) {
            kk(Fk)
          }
        }
      }
      chestOpened(kk, Fk, Bk) {
        this.xa[0] = kk, this.xa[1] = Fk, this.xa[2] = Bk, this.version++
      }
      refresh() {
        const kk = this.deps.api.apiView,
          Fk = ek.w.inventoryViewPtr(kk, 0),
          Bk = ek.w.inventoryVersion(kk, 0),
          Rk = ek.w.selectedSlot(kk, 0);
        Rk !== this.selected && (this.selected = Rk, this.version++);
        const tk = ek.w.slotIcon(kk, 0);
        if (tk !== this.slotIconId && (this.slotIconId = tk, this.iconChanged = !0), Fk === this.viewPtr && Bk === this.viewVersion) return;
        this.viewPtr = Fk, this.viewVersion = Bk;
        const ak = this.deps.api.memoryData(Fk, wB, 4, "the inventory view"),
          Xk = ak ? Math.min(ak.getUint32(0, !0), ek.uc) : 0;
        Xk !== this.len && (this.len = Xk, this.version++);
        let bk = 0;
        for (let wk = 0; wk < ek.uc; wk++) {
          const kk = ek.rc + wk * ek.Ac.BYTES,
            Fk = null !== ak && wk < Xk ? ek.Ac.item(ak, kk) : 0;
          if (0 === Fk || null === ak) {
            0 !== this.ids[wk] && (this.ids[wk] = 0, this.attrRead[wk] = -1, this.instances[wk]++, this.version++);
            continue
          }
          const Bk = ek.Ac.amount(ak, kk),
            Rk = ek.Ac.attrVersion(ak, kk);
          Fk === this.ids[wk] && Bk === this.amounts[wk] || this.fill(wk, Fk, Bk), Rk !== this.attrRead[wk] && (this.stale[bk] = wk, this.staleVersion[bk] = Rk, bk++)
        }
        bk > 0 && this.fetchAttributes(bk)
      }
      fill(kk, Fk, Bk) {
        const {
          tables: Rk
        } = this.deps, tk = Fk !== this.ids[kk];
        let ak = this.facades[kk];
        ak || (ak = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[kk] = ak), tk && (ak.name = Rk.nameOfId(Fk), ak.typeObj = Rk.itemType(Fk), ak.attributes = {
          customAttributes: {}
        }, this.attrRead[kk] = -1, this.instances[kk]++), ak.amount = 0 === Bk ? null : Bk, this.ids[kk] = Fk, this.amounts[kk] = Bk, this.version++
      }
      fetchAttributes(kk) {
        const {
          api: Fk,
          onError: Bk
        } = this.deps, Rk = Fk.memoryView(Uint16Array, Fk.scratch(), kk, "item_attributes_batch's slots");
        if (!Rk) return void this.markRead(kk);
        Rk.set(this.stale.subarray(0, kk));
        const tk = Fk.queries.itemAttributesBatch(kk),
          ak = 4294967295 === tk ? null : Fk.memoryData(Fk.scratch(), tk, 4, "item_attributes_batch's answer");
        if (!ak) return void this.markRead(kk);
        const Xk = new Uint8Array(ak.buffer, ak.byteOffset, tk);
        for (let wk = 0; wk + 8 <= tk;) {
          const kk = ak.getUint16(wk, !0),
            Fk = ak.getUint32(wk + 4, !0),
            Rk = Xk.subarray(wk + 8, wk + 8 + Fk);
          wk += 8 + (0, Jk.td)(Fk);
          const tk = this.facades[kk];
          if (tk && 0 !== this.ids[kk] && 0 !== Fk) {
            try {
              tk.attributes = JSON.parse(sB.decode(Rk))
            } catch (bk) {
              Bk(bk)
            }
            this.version++
          }
        }
        this.markRead(kk)
      }
      markRead(kk) {
        for (let Fk = 0; Fk < kk; Fk++) this.attrRead[this.stale[Fk]] = this.staleVersion[Fk]
      }
      swap(kk, Fk) {
        return eB(kk) && eB(Fk) && this.settle(this.queries().invSwap(kk, Fk))
      }
      move(kk, Fk, Bk) {
        return eB(kk) && eB(Fk) && yB(Bk) && this.settle(this.queries().invMove(kk, Fk, Bk))
      }
      quickMove(kk, Fk, Bk, Rk) {
        var tk, ak;
        if (!eB(kk) || !eB(Fk) || !eB(Bk) || null !== Rk && !yB(Rk)) return null;
        const Xk = this.queries().invQuickMove(kk, Fk, Bk, null === Rk ? -1 : Math.min(Rk, dB)),
          bk = Xk === ek.fd ? ek.Tb : null !== (tk = null === (ak = this.extras()) || void 0 === ak ? void 0 : ak[1]) && void 0 !== tk ? tk : ek.Tb;
        return this.settle(Xk), bk === ek.Tb ? null : bk
      }
      remove(kk, Fk, Bk) {
        return eB(kk) && yB(Fk) && this.settle(this.queries().invRemove(kk, Fk, Bk ? 1 : 0))
      }
      selectSlot(kk) {
        return eB(kk) && this.settle(this.queries().selectSlot(kk))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(kk, Fk, Bk) {
        if (!eB(kk) || !Number.isInteger(Fk)) return !1;
        const [Rk, tk, ak] = Bk;
        return this.settle(this.queries().invEnchant(kk, Fk, Math.floor(Rk), Math.floor(tk), Math.floor(ak)))
      }
      craft(kk, Fk, Bk) {
        let Rk;
        try {
          Rk = this.deps.tables.getItemId(kk)
        } catch {
          return JB
        }
        if (!eB(Fk) || null !== Bk && (Number.isNaN(Bk) || Bk < 0)) return JB;
        const tk = null === Bk || Bk > dB ? -1 : Math.floor(Bk),
          ak = this.queries().craft(Rk, Fk, tk);
        let Xk = JB;
        const bk = ak === ek.fd ? null : this.extras();
        if (bk) {
          const [kk, Fk, Bk] = bk;
          Xk = {
            Ps: kk,
            fV: Fk === ek.Tb ? null : Fk,
            amountAddedToSlot: Bk
          }
        }
        return this.settle(ak), Xk
      }
      salvage(kk, Fk, Bk) {
        let Rk;
        try {
          Rk = this.deps.tables.getItemId(Fk)
        } catch {
          return !1
        }
        return eB(kk) && Number.isInteger(Bk) && this.settle(this.queries().salvage(kk, Rk, Math.max(Math.min(Bk, dB), -dB)))
      }
      craftingView(kk, Fk, Bk) {
        var Rk;
        if (this.stopped) return null;
        const {
          api: tk,
          onError: ak
        } = this.deps, Xk = kk ? VB.encode(kk) : null;
        if (null !== Xk) {
          if (Xk.length > 1024) return ak(new Error(`The crafting station ${kk}'s name is over 1024 bytes`)), null;
          const Fk = tk.memoryView(Uint8Array, tk.scratch(), Xk.length, "crafting_view's station");
          if (!Fk) return null;
          Fk.set(Xk)
        }
        const bk = eB(Fk) && eB(Bk),
          wk = tk.queries.craftingView(null !== (Rk = null === Xk || void 0 === Xk ? void 0 : Xk.length) && void 0 !== Rk ? Rk : 0, bk ? Fk : 0, bk ? Bk : 0);
        return wk < ek.sb.BYTES ? (tk.reportCorruption(`crafting_view's answer of ${wk} bytes`), null) : tk.memoryData(tk.scratch(), wk, 1, "crafting_view's answer")
      }
      queries() {
        var kk, Fk;
        return !1 === (null === (kk = (Fk = this.deps).beforeOp) || void 0 === kk ? void 0 : kk.call(Fk)) ? (this.stopped = !0, AB) : this.deps.api.queries
      }
      extras() {
        const {
          api: kk
        } = this.deps;
        return kk.memoryView(Uint32Array, kk.scratch(), 3, "a sync query's extra words")
      }
      settle(kk) {
        if (kk === ek.bd)(0, CF.e)();
        else if (kk !== ek.fd) {
          const Fk = this.deps.cmd();
          Fk && function(kk, Fk, Bk) {
            return (0, CF.e)(), (0, ek.ig)(kk, Fk, Bk)
          }(Fk, 0, kk) || this.deps.onError(new Error(`Sync op ${kk}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), kk !== ek.fd
      }
    }
    const mB = 1 / .6,
      WB = [0, 1, 0],
      vB = [0, 0, 0],
      iB = new Uint8Array(0),
      YB = 1.2 * yF.h.Qm,
      oB = new TextEncoder,
      LB = [0, 0, 0],
      OB = [0, 0, 0],
      EB = new Map;

    function SB(kk) {
      let Fk = EB.get(kk);
      return Fk || (EB.size >= 64 && EB.clear(), Fk = oB.encode(`{"emitRate":${kk}}`), EB.set(kk, Fk)), Fk
    }

    function NB(kk) {
      return Number.isFinite(kk) && kk > 0 ? kk : 0
    }

    function HB(kk, Fk) {
      for (let Bk = 0; Bk < 3; Bk++) {
        const Rk = Math.abs(Fk[Bk]);
        LB[Bk] = kk[Bk] - Rk, OB[Bk] = 2 * Rk
      }
      return Number.isFinite(LB[0] + LB[1] + LB[2] + OB[0] + OB[1] + OB[2])
    }

    function uB(kk, Fk) {
      return "pos1" === kk || "pos2" === kk ? void 0 : Fk
    }

    function MB(kk, Fk, Bk) {
      return kk.length > ek.Bd.MaxOpts ? (Bk(new Error(`${Fk}'s particle opts are over ${ek.Bd.MaxOpts} bytes of JSON`)), null) : kk
    }
    const gB = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class UB {
      constructor(kk) {
        this.deps = kk, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(kk, Fk) {
        var Bk;
        const Rk = this.sink(),
          tk = null !== (Bk = Fk.half) && void 0 !== Bk ? Bk : vB;
        if (!Rk || this.live >= ek.Bd.MaxLiveKeys || this.nextKey > ek.Bd.MaxKey || !HB(Fk.pos, tk)) return gB;
        const ak = this.nextKey,
          Xk = MB(function(kk) {
            var Fk, Bk, Rk;
            const tk = JSON.stringify({
              texture: "string" === typeof kk.texture ? kk.texture : "smokePuff",
              KV: kk.KV,
              minLifeTime: kk.minLifeTime,
              maxLifeTime: kk.maxLifeTime,
              minSize: kk.minSize,
              maxSize: kk.maxSize,
              minEmitPower: kk.minEmitPower,
              maxEmitPower: kk.maxEmitPower,
              emitRate: NB(kk.emitRate),
              gravity: null !== (Fk = kk.gravity) && void 0 !== Fk ? Fk : vB,
              dir1: null !== (Bk = kk.dir1) && void 0 !== Bk ? Bk : WB,
              dir2: null !== (Rk = kk.dir2) && void 0 !== Rk ? Rk : WB,
              colorGradients: kk.colorGradients,
              blendMode: kk.blendMode
            });
            return oB.encode(tk)
          }(kk), "createParticles", this.deps.onError);
        return Xk && (0, ek.cf)(Rk, 0, ak, 0, ek.Bd.PresetNone, 0, LB, OB, Xk) ? (this.nextKey++, this.live++, this.started = !0, new cB(this, this.session, ak, kk, tk)) : gB
      }
      playEffect(kk) {
        const Fk = this.sink(),
          {
            pos1: Bk,
            pos2: Rk
          } = kk;
        if (!Fk || !Bk || !Rk) return;
        for (let ak = 0; ak < 3; ak++) LB[ak] = Math.min(Bk[ak], Rk[ak]), OB[ak] = Math.abs(Rk[ak] - Bk[ak]);
        if (!Number.isFinite(LB[0] + LB[1] + LB[2] + OB[0] + OB[1] + OB[2])) return;
        const tk = MB(oB.encode(JSON.stringify(kk, uB)), "playParticleEffect", this.deps.onError);
        tk && (0, ek.Xe)(Fk, 0, 0, ek.Bd.PresetNone, ek.Bd.HasBox, 0, LB, OB, tk)
      }
      burstPreset(kk, Fk, Bk) {
        const Rk = this.sink(),
          tk = Math.min(Math.floor(Bk), ek.Bd.MaxBurst);
        if (!Rk || !Object.hasOwn(ek.jc, kk) || !(tk > 0)) return;
        const ak = YB;
        for (let Xk = 0; Xk < 3; Xk++) LB[Xk] = Fk[Xk] - ak / 2, OB[Xk] = ak;
        Number.isFinite(LB[0] + LB[1] + LB[2]) && (0, ek.Xe)(Rk, 0, 0, ek.jc[kk], ek.Bd.HasBox, tk, LB, OB, iB)
      }
      sessionEnded() {
        this.session++;
        const kk = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !kk || (0, ek.gf)(kk, 0)
      }
      sinkFor(kk) {
        return kk === this.session ? this.deps.cmd() : null
      }
      stop(kk, Fk) {
        const Bk = this.sinkFor(kk);
        Bk && (0, ek.jf)(Bk, 0, Fk) && this.live--
      }
    }
    class cB {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.owner = kk, this.session = Fk, this.key = Bk, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(tk[0]), Math.abs(tk[1]), Math.abs(tk[2])], this.rate = NB(Rk.emitRate), this.emitted = this.rate > 0;
        const ak = Rk.maxLifeTime * mB * 1e3 + 250;
        this.stopDelayMs = ak >= 0 ? Math.min(ak, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(kk, Fk) {
        const Bk = this.sink();
        if (Bk) {
          if (Fk)
            for (let kk = 0; kk < 3; kk++) this.half[kk] = Math.abs(Fk[kk]);
          HB(kk, this.half) && (0, ek.mf)(Bk, 0, this.key, ek.Bd.HasBox, LB, OB, iB)
        }
      }
      setEmitRate(kk) {
        const Fk = this.sink(),
          Bk = NB(kk);
        Fk && Bk !== this.rate && (0, ek.mf)(Fk, 0, this.key, 0, vB, vB, SB(Bk)) && (this.rate = Bk, this.emitted ||= Bk > 0)
      }
      emit(kk) {
        const Fk = this.sink(),
          Bk = Math.min(Math.floor(kk), ek.Bd.MaxBurst);
        Fk && Bk > 0 && (0, ek.Xe)(Fk, 0, this.key, ek.Bd.PresetNone, 0, Bk, vB, vB, iB) && (this.emitted = !0)
      }
      emitPoints(kk, Fk, Bk) {
        const Rk = this.sink(),
          tk = Math.min(Math.floor(Bk), ek.Bd.MaxPoints, Math.floor(Fk.length / 4));
        if (!Rk || !(tk > 0) || !Number.isFinite(kk[0] + kk[1] + kk[2])) return;
        const ak = new Uint8Array(Fk.buffer, Fk.byteOffset, tk * ek.Bd.PointBytes);
        (0, ek._e)(Rk, 0, this.key, tk, kk, ak) && (this.emitted = !0)
      }
      setDirections(kk, Fk) {
        const Bk = this.sink();
        if (!Bk || !Number.isFinite(kk[0] + kk[1] + kk[2] + Fk[0] + Fk[1] + Fk[2])) return;
        const Rk = oB.encode(JSON.stringify({
          dir1: [kk[0], kk[1], kk[2]],
          dir2: [Fk[0], Fk[1], Fk[2]]
        }));
        (0, ek.mf)(Bk, 0, this.key, 0, vB, vB, Rk)
      }
      stop() {
        const kk = this.sink();
        this.stopped = !0, kk && (this.emitted ? (this.rate > 0 && (0, ek.mf)(kk, 0, this.key, 0, vB, vB, SB(0)), setTimeout((() => {
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
    const GB = PF.t,
      TB = new TextDecoder;

    function rB(kk, Fk) {
      const {
        serverIds: Bk,
        kinds: Rk
      } = kk;
      let tk = 0;
      for (let ak = 0; ak < Bk.length; ak++) {
        const kk = Bk[ak];
        if (kk !== ek.Yc && !Yk(Rk[ak])) {
          if (tk === Fk.length) {
            const kk = new Int32Array(Math.max(64, 2 * tk));
            kk.set(Fk), Fk = kk
          }
          Fk[tk++] = kk
        }
      }
      return {
        ids: Fk,
        count: tk
      }
    }

    function DB(kk, Fk) {
      return kk.length >= Fk ? kk : new Int32Array(Math.max(Fk, 2 * kk.length))
    }

    function zB(kk, Fk, Bk, Rk) {
      for (let tk = 0; tk < Bk; tk += 4096) {
        const ak = Math.min(4096, Bk - tk),
          Xk = kk.memoryView(Int32Array, kk.scratch(), ak, "entity_info_batch's ids");
        if (!Xk) return !1;
        Xk.set(Fk.subarray(tk, tk + ak));
        const bk = kk.queries.entityInfoBatch(ak),
          wk = 4294967295 === bk ? null : kk.memoryData(kk.scratch(), bk, 4, "entity_info_batch's records");
        if (!wk) return !1;
        for (let kk = 0; kk + ek.Yb.BYTES <= bk;) {
          const Fk = ek.Yb.len(wk, kk);
          Rk(ek.Yb.serverId(wk, kk), PB(wk, kk, Fk)), kk += ek.Yb.BYTES + (0, Jk.td)(Fk)
        }
      }
      return !0
    }

    function PB(kk, Fk, Bk) {
      var Rk, tk, ak;
      const Xk = ek.Yb.kind(kk, Fk),
        bk = 0 === Xk ? null : Lk(Xk);
      if (null === bk) return null;
      const wk = ek.Yb.variation(kk, Fk),
        dk = ek.Yb.pose(kk, Fk),
        sk = ek.Yb.meta(kk, Fk),
        Vk = ek.Yb.mesh(kk, Fk),
        Jk = 0 !== (ek.Yb.flags(kk, Fk) & ek.Xb.HasOpts),
        Ak = GB[bk];
      return Object.freeze({
        type: bk,
        variation: wk === ek.ad ? void 0 : null !== (Rk = null !== (tk = null === Ak || void 0 === Ak ? void 0 : Ak[wk]) && void 0 !== tk ? tk : null === Ak || void 0 === Ak ? void 0 : Ak[0]) && void 0 !== Rk ? Rk : "default",
        pose: dk === ek.oc ? void 0 : null !== (ak = ek.Mb[dk]) && void 0 !== ak ? ak : ek.Mb[0],
        metaInfo: sk === ek.oc ? void 0 : ek.Pc[sk],
        meshKind: Vk === ek.oc ? void 0 : ek.Nc[Vk],
        meshOpts: Jk ? TB.decode(new Uint8Array(kk.buffer, kk.byteOffset + Fk + ek.Yb.BYTES, Bk)) : void 0
      })
    }
    const hB = 1,
      qB = 2;
    class CB {
      constructor(kk) {
        this.deps = kk, this.wanted = 0, this.Hb = !1, this.refused = !1
      }
      get on() {
        return this.Hb
      }
      want(kk, Fk) {
        this.wanted = Fk ? this.wanted | kk : this.wanted & ~kk;
        const Bk = 0 !== this.wanted;
        if (Bk === this.Hb) return;
        const Rk = this.deps.cmd();
        null !== Rk ? (0, ek.lg)(Rk, 0, Bk ? 1 : 0) ? (this.Hb = Bk, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Hb = !1
      }
    }
    class ZB {
      constructor(kk) {
        this.deps = kk, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(kk) {
        var Fk;
        return this.complete || this.fill(), null !== (Fk = this.entries.get("string" === typeof kk ? kk : String(kk))) && void 0 !== Fk ? Fk : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(kk) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const kk = new Int32Array(2 * this.pending.length);
            kk.set(this.pending), this.pending = kk
          }
          this.pending[this.pendingCount++] = kk
        }
      }
      removed(kk) {
        this.entries.size > 0 && this.entries.delete(String(kk))
      }
      refresh() {
        const kk = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (kk > 0 && this.complete) {
          const {
            api: Fk
          } = this.deps;
          let Bk = 0;
          const Rk = this.ids = DB(this.ids, kk);
          for (let tk = 0; tk < kk; tk++) {
            const kk = this.pending[tk],
              ak = Fk.indexById.get(kk);
            void 0 === ak || Yk(Fk.kinds[ak]) ? this.entries.delete(String(kk)) : Rk[Bk++] = kk
          }
          Bk > 0 && !this.batch(Rk, Bk) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(hB, !1)
      }
      fill() {
        const {
          api: kk
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: kk
          } = this.deps, Fk = kk.on;
          kk.want(hB, !0), !Fk && kk.on && (this.refill = this.midFrame)
        }
        const {
          ids: Fk,
          count: Bk
        } = rB(kk, this.ids);
        this.ids = Fk, Bk > 0 && !this.batch(Fk, Bk) && (this.refill = !0)
      }
      batch(kk, Fk) {
        return zB(this.deps.api, kk, Fk, ((kk, Fk) => {
          null === Fk ? this.entries.delete(String(kk)) : this.entries.set(String(kk), Fk)
        }))
      }
    }
    var pB = Bk(4531);

    function KB(kk) {
      if ("message" !== kk.type || kk.UX !== pB.Tb.NewClientOptions || kk.payloadKind !== Jk.Nb.Msgpack) return null;
      const Fk = (0, rk.e)(kk.payload);
      if (null === Fk || "object" !== typeof Fk || Array.isArray(Fk)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Fk
    }
    var xB = Bk(1192),
      jB = Bk(36359);

    function lB(kk, Fk, Bk, Rk, tk, ak, bk) {
      var wk, dk, sk;
      switch (kk) {
        case ek.ee.ToggleMenu: {
          const kk = ek.K[Fk];
          Xk.o.Hf("toggleMenu", void 0 === kk ? "inventory" : `inventory|${kk}`);
          break
        }
        case ek.ee.EditBoard:
          Xk.o.Hf("EditBoard", {
            pos: 0 === Fk ? null : Bk
          });
          break;
        case ek.ee.EditCodeBlock:
        case ek.ee.ViewCodeBlock:
          Xk.o.Hf("EditCodeBlock", {
            pos: Bk,
            canChangePos: kk === ek.ee.EditCodeBlock
          });
          break;
        case ek.ee.EditCustomLobbyBlock:
          Xk.o.Hf("EditCustomLobbyBlock", {
            pos: Bk
          });
          break;
        case ek.ee.OpenIronChest:
          Xk.o.Hf("OpenIronChest", {
            pos: Bk
          });
          break;
        case ek.ee.EditNameTag:
          Xk.o.Hf("EditNameTag", null !== (wk = null === (dk = tk.Hb()) || void 0 === dk || null === (sk = dk.attributes.customAttributes) || void 0 === sk ? void 0 : sk.text) && void 0 !== wk ? wk : "");
          break;
        case ek.ee.EditBook: {
          var Vk, Jk, yk;
          const kk = null === (Vk = tk.Hb()) || void 0 === Vk ? void 0 : Vk.attributes;
          Xk.o.Hf("EditBook", {
            pages: (0, xB.O)(null === kk || void 0 === kk || null === (Jk = kk.customAttributes) || void 0 === Jk ? void 0 : Jk.pages),
            title: null !== (yk = null === kk || void 0 === kk ? void 0 : kk.customDisplayName) && void 0 !== yk ? yk : "Title",
            isPublished: !(null === kk || void 0 === kk || !kk.customDescription)
          });
          break
        }
        case ek.ee.CantChangeBlock:
          ! function(kk, Fk) {
            const Bk = Fk.getClientOption("cantChangeError"),
              Rk = Fk.getClientOption(kk ? "cantBuildError" : "cantBreakError"),
              tk = kk ? Bk : Rk;
            (Fk.getClientOption("canChange") || tk || "You cannot modify this block" !== Bk) && Xk.o.Hf("showBottomMessage", {
              message: Rk || Bk,
              type: "Error"
            })
          }(1 === Fk, ak);
          break;
        case ek.ee.MiddleBarStart:
          Xk.o.Hf("middleScreenBarInitiate", {
            duration: Rk,
            XR: 1 === Bk[0],
            horizBarRemOffset: Fk
          });
          break;
        case ek.ee.MiddleBarStop:
          Xk.o.Hf("middleScreenBarRemove");
          break;
        case ek.ee.Hitmarker:
          Xk.o.Hf("localGunHitmarker", {
            BB: 1 === Fk
          });
          break;
        case ek.ee.ShotsLeft:
          Xk.o.Hf("localPlayerNewShotsLeft", Rk);
          break;
        case ek.ee.AimingOverlay:
          Xk.o.Hf("aimingOverlay", 3 === (3 & Fk) ? "sniper" : "none");
          break;
        case ek.ee.BottomMessage:
          Xk.o.Hf("showBottomMessage", JSON.parse(bk()));
          break;
        case ek.ee.Crosshair:
          tk.inaccuracy = (0, Dk.c)(Rk), (0, jB.e)().crosshairAccuracy(tk.inaccuracy);
          break;
        case ek.ee.ChargeStage:
          break;
        case ek.ee.EmoteWheelClose:
          Xk.o.Hf("requestEmoteWheelClose");
          break;
        case ek.ee.BlockMined:
          Xk.o.Hf("localBlockMined");
          break;
        default:
          throw new Ak.c(`UiEvent of no kind: what ${kk}`)
      }
    }
    var nB = Bk(37678),
      IB = Bk(9015),
      QB = Bk(1873),
      kR = Bk(36474),
      FR = Bk(9022),
      BR = Bk(4511);
    const RR = 10,
      tR = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      aR = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      XR = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function bR(kk, Fk) {
      let Bk, Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const ak = () => (Bk = (0, QB.o)(Bk, Fk()), Bk);
      return {
        current: ak,
        watch(Fk) {
          const Bk = () => {
              Fk(ak())
            },
            Xk = [kk.watch(Bk)];
          return null !== Rk && Xk.push((0, QB.r)((kk => {
            kk.some(Rk) && Bk()
          }))), null !== tk && Xk.push(tk(Bk)), () => {
            for (const kk of Xk) kk()
          }
        }
      }
    }

    function wR(kk) {
      return kk && {
        name: kk.name,
        amount: kk.amount,
        attributes: kk.attributes
      }
    }
    const dR = new WeakMap;

    function sR(kk) {
      let Fk = dR.get(kk);
      return void 0 === Fk && (Fk = (0, FR.creativeItemIds)().map((Fk => ({
        name: kk.nameOfId(Fk),
        amount: kk.isStackableId(Fk) ? 1 : null,
        attributes: (0, nB.c)("Gun" === (0, FR.itemTypeOf)(Fk) ? {
          type: "Gun",
          clipSize: (0, FR.clipSizeOf)(Fk)
        } : void 0)
      }))), dR.set(kk, Fk)), Fk
    }

    function VR(kk, Fk, Bk, Rk) {
      const tk = Fk => (kk.flush(Rk), Fk),
        ak = Bk => {
          var Rk, tk, ak, Xk, bk, wk, dk;
          const sk = kk.slot(Bk);
          if (!sk) return null;
          const {
            rootName: Vk,
            metaStr: Jk
          } = Fk.getMetaInfo(sk.name);
          return {
            name: sk.name,
            amount: sk.amount,
            attributes: sk.attributes,
            instance: kk.instance(Bk),
            displayName: null !== (Rk = sk.attributes.customDisplayName) && void 0 !== Rk ? Rk : Fk.getDisplayName(Vk),
            requiresAmmo: "RequiresAmmo" === Jk,
            clipSize: null !== (tk = null !== (ak = null === (Xk = sk.attributes.customAttributes) || void 0 === Xk || null === (bk = Xk.gunStats) || void 0 === bk ? void 0 : bk.clipSize) && void 0 !== ak ? ak : null === (wk = Fk.getGunStats(Vk)) || void 0 === wk ? void 0 : wk.clipSize) && void 0 !== tk ? tk : null === (dk = sk.typeObj) || void 0 === dk ? void 0 : dk.clipSize
          }
        },
        bk = function(kk, Fk) {
          let Bk = null,
            Rk = {
              focus: null,
              recipes: [],
              detail: null
            },
            tk = -1;
          const ak = new Set;
          return {
            read() {
              var ak, Xk;
              if (null === Bk) return null !== Rk.focus && (Rk = {
                ...Rk,
                focus: null
              }), Rk;
              if (Rk.focus === Bk && tk === kk.changes) return Rk;
              if (tk = kk.changes, 0 === kk.length) return Rk = {
                focus: Bk,
                recipes: [],
                detail: null
              }, Rk;
              let bk = 0;
              if (null !== Bk.recipe) try {
                bk = Fk.getItemId(Bk.recipe.name)
              } catch {}
              const wk = kk.craftingView(Bk.station, bk, null !== (ak = null === (Xk = Bk.recipe) || void 0 === Xk ? void 0 : Xk.zs) && void 0 !== ak ? ak : 0);
              return Rk = null === wk ? {
                focus: Bk,
                recipes: [],
                detail: null
              } : function(kk, Fk, Bk) {
                let Rk = ek.sb.BYTES;
                const tk = [];
                for (let sk = ek.sb.recipes(kk, 0); sk > 0; sk--) {
                  const Bk = ek.jb.flags(kk, Rk),
                    ak = {
                      name: Fk.nameOfId(ek.jb.item(kk, Rk)),
                      zs: ek.jb.recipe(kk, Rk),
                      requires: [],
                      produces: ek.jb.produces(kk, Rk),
                      haveIngredients: 0 !== (Bk & ek.fb.HaveIngredients),
                      listed: 0 !== (Bk & ek.fb.Listed)
                    };
                  let Xk = ek.jb.requires(kk, Rk);
                  for (Rk += ek.jb.BYTES; Xk > 0; Xk--) {
                    const Bk = ek.nb.items(kk, Rk);
                    ak.requires.push({
                      items: eR(kk, Rk + ek.nb.BYTES, Bk, Fk),
                      amt: ek.nb.amount(kk, Rk)
                    }), Rk += ek.nb.BYTES + 2 * Bk
                  }
                  tk.push(ak)
                }
                const ak = ek.sb.flags(kk, 0);
                if (null === Bk.recipe || 0 === (ak & ek.pb.Detail)) return {
                  focus: Bk,
                  recipes: tk,
                  detail: null
                };
                const Xk = {},
                  bk = {};
                for (let sk = ek.sb.ingredients(kk, 0); sk > 0; sk--) {
                  const Bk = ek.db.item(kk, Rk),
                    tk = ek.db.from(kk, Rk),
                    ak = ek.db.amount(kk, Rk);
                  Rk += ek.db.BYTES;
                  const wk = tk === ek.H ? null : eR(kk, Rk, tk, Fk);
                  if (null !== wk && (Rk += 2 * tk), 0 === Bk) continue;
                  const dk = Fk.nameOfId(Bk);
                  Xk[dk] = ak, null !== wk && (bk[dk] = wk)
                }
                const {
                  name: wk,
                  zs: dk
                } = Bk.recipe;
                return {
                  focus: Bk,
                  recipes: tk,
                  detail: {
                    name: wk,
                    zs: dk,
                    craftAllTimes: ek.sb.craftAllTimes(kk, 0),
                    roomForOne: 0 !== (ak & ek.pb.RoomForOne),
                    resultStackable: Boolean(Fk.getItemStat(wk, "stackable")),
                    amounts: Xk,
                    ingredientsCraftedFrom: bk
                  }
                }
              }(wk, Fk, Bk), Rk
            },
            setFocus(kk) {
              Bk = kk;
              for (const Fk of [...ak]) Fk()
            },
            watchFocus: kk => (ak.add(kk), () => {
              ak.delete(kk)
            })
          }
        }(kk, Fk);
      return {
        states: {
          inventory: bR(kk, (() => {
            const Bk = kk.length;
            if (0 === Bk) return tR;
            const Rk = [];
            for (let Fk = 0; Fk < ek.pd; Fk++) Rk.push(wR(kk.slot(Fk)));
            const tk = kk.slotIcon,
              ak = Rk[kk.selectedSlot];
            0 !== tk && ak && (Rk[kk.selectedSlot] = {
              ...ak,
              icon: Fk.nameOfId(tk)
            });
            const Xk = !0 === Fk.getClientOption("creative");
            let bk = [],
              wk = null;
            if (Bk > ek.pd) {
              for (let Fk = ek.pd; Fk < Bk; Fk++) bk.push(wR(kk.slot(Fk)));
              wk = {
                type: null,
                pos: [...kk.xa],
                numSlots: Bk - ek.pd,
                ironChest: null
              }
            } else Xk && (bk = sR(Fk));
            return {
              player: Rk,
              chestOrCreative: bk,
              chest: wk,
              creative: Xk,
              selectedSlot: kk.selectedSlot,
              freeSlots: kk.freeSlots()
            }
          }), (0, QB.k)("creative")),
          hotbar: bR(kk, (() => {
            if (0 === kk.length) return aR;
            const Fk = [];
            for (let kk = 0; kk < RR; kk++) Fk.push(ak(kk));
            return {
              items: Fk,
              ammo: kk.amountOf("Ammo"),
              selectedSlot: kk.selectedSlot
            }
          }), (0, QB.h)("DisplayName", "GunStats")),
          crafting: bR(kk, bk.read, null, bk.watchFocus),
          heldItemAim: bR(kk, (() => {
            var Fk;
            if (!Bk()) return XR;
            const Rk = null === (Fk = kk.Hb()) || void 0 === Fk ? void 0 : Fk.typeObj,
              tk = "Gun" === (null === Rk || void 0 === Rk ? void 0 : Rk.type);
            return {
              gun: tk,
              aimable: tk || !0 === (null === Rk || void 0 === Rk ? void 0 : Rk.showsAimingUi),
              chargeName: "Chargeable" === (null === Rk || void 0 === Rk ? void 0 : Rk.type) ? Rk.name : null
            }
          }), null, (kk => function(kk, Fk) {
            let Bk = kk();
            return (0, BR.x)((() => {
              const Rk = kk();
              Rk !== Bk && (Bk = Rk, Fk(Rk))
            }))
          }(Bk, kk)))
        },
        events: {
          hotbarSlotRequested: (0, QB.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, QB.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, QB.c)("numkeyPressed"),
          inventoryDropRequested: (0, QB.c)("DropInvenItem"),
          chestToggled: (0, QB.c)("chestToggleFromServer"),
          chestRefreshed: (0, QB.c)("chestRefreshedFromServer", AR),
          inventorySynced: (0, QB.c)("syncedInvenFromServer", AR),
          enchantingTableOpened: (0, QB.c)("enchantingTable", (kk => {
            let {
              position: Bk,
              Ts: Rk
            } = kk;
            return {
              position: [...Bk],
              blockName: Fk.getMetaInfo(Rk).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Fk) {
            kk.selectSlot(Fk), kk.flush(Rk)
          },
          removeInventoryItem(Fk) {
            let {
              slot: Bk,
              amount: Rk,
              drop: ak
            } = Fk;
            return tk(kk.remove(Bk, Rk, ak))
          },
          swapInventorySlots(Fk) {
            let {
              a: Bk,
              b: Rk
            } = Fk;
            return tk(kk.swap(Bk, Rk))
          },
          moveInventoryItem(Fk) {
            let {
              from: Bk,
              to: Rk,
              amount: ak
            } = Fk;
            return tk(kk.move(Bk, Rk, ak))
          },
          quickMoveInventoryItem(Fk) {
            let {
              slot: Bk,
              start: Rk,
              end: ak,
              amount: Xk
            } = Fk;
            return tk(kk.quickMove(Bk, Rk, ak, Xk))
          },
          closeChest() {
            kk.closeChest(), kk.flush(Rk), Xk.o.Hf("chestClosedByPlayer")
          },
          focusCrafting(kk) {
            bk.setFocus(kk)
          },
          craftRecipe(Fk) {
            let {
              name: Bk,
              zs: Rk,
              times: ak
            } = Fk;
            return tk(kk.craft(Bk, Rk, ak))
          },
          salvageItem(Fk) {
            let {
              slot: Bk,
              name: Rk,
              amount: ak
            } = Fk;
            return tk(kk.salvage(Bk, Rk, ak))
          },
          enchantItem(Fk) {
            let {
              slot: Bk,
              level: Rk,
              tablePos: tk
            } = Fk;
            kk.enchant(Bk, Rk, tk)
          }
        },
        queries: {
          enchantingOffer(Bk) {
            let {
              slot: Rk,
              blockName: tk
            } = Bk;
            return function(kk, Fk, Bk, Rk) {
              const tk = kk.slot(Bk);
              if (!tk || !Fk.getClientOption("canCraft") || !(0, IB.r)(Rk) || (0, IB.n)(tk.attributes)) return JR;
              const ak = (0, FR.enchantmentPerksOf)(Fk.getItemId(tk.name));
              if (0 === ak.length) return JR;
              const Xk = [];
              for (let bk = 0; bk < kR.d; bk++) {
                const {
                  commonProb: kk,
                  uncommonProb: Fk,
                  rareProb: Bk,
                  epicProb: tk,
                  legendaryProb: ak,
                  level: wk
                } = (0, IB.e)(Rk, bk);
                Xk.push({
                  level: wk,
                  odds: [kk, Fk, Bk, tk, ak].map((kk => 100 * kk))
                })
              }
              return {
                perks: [...ak],
                options: Xk
              }
            }(kk, Fk, Rk, tk)
          }
        }
      }
    }
    const JR = Object.freeze({
      perks: [],
      options: []
    });

    function AR() {
      return null
    }

    function eR(kk, Fk, Bk, Rk) {
      const tk = [];
      for (let ak = 0; ak < Bk; ak++) {
        const Bk = kk.getUint16(Fk + 2 * ak, !0);
        0 !== Bk && tk.push(Rk.nameOfId(Bk))
      }
      return tk
    }
    class yR {
      constructor(kk) {
        this.api = kk, this.positions = new Map, this.targeted = {
          vx: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          rb: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(kk) {
        let Fk = this.positions.get(kk);
        return Fk || (this.api.checkValid(kk) || this.api.isLocal(kk) ? (Fk = [NaN, NaN, NaN], this.api.readPosition(kk, Fk), this.positions.set(kk, Fk), Fk) : null)
      }
      tkk() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Fk, Bk] of this.positions) this.api.readPosition(Fk, Bk) || this.api.checkValid(Fk) || this.api.isLocal(Fk) || this.positions.delete(Fk);
        const kk = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (ek.w.playerFlags(kk, 0) & ek.Ed.Breaking) && ek.w.breakingProgress(kk, 0) >= 0, this.isBreaking)
          for (let Fk = 0; Fk < 3; Fk++) this.breaking[Fk] = ek.w.breakingPos(kk, 0, Fk)
      }
      refreshTarget() {
        const kk = this.api.apiView,
          Fk = ek.w.targetBlockId(kk, 0);
        if (this.hasTarget = Fk !== ek._c, this.hasTarget) {
          const Bk = this.targeted;
          Bk.vx = Fk;
          for (let Fk = 0; Fk < 3; Fk++) Bk.position[Fk] = ek.w.targetBlock(kk, 0, Fk), Bk.normal[Fk] = ek.w.targetNormal(kk, 0, Fk), Bk.rb[Fk] = ek.w.targetAdjacent(kk, 0, Fk)
        }
      }
      despawned(kk) {
        const Fk = this.positions.get(kk);
        Fk && !this.api.isLocal(kk) && (Fk.fill(NaN), this.positions.delete(kk))
      }
    }
    var fR = Bk(40054),
      mR = Bk(40037),
      WR = Bk(36469);
    const vR = 1,
      iR = 2;
    class YR {
      constructor() {
        this.game = new WR.d, this.client = new WR.d, this.Hb = 0, this.movesFly = null
      }
      setGame(kk) {
        if (null === kk || "object" !== typeof kk) return !1;
        const {
          key: Fk,
          value: Bk
        } = kk;
        return "string" === typeof Fk && (this.game.setBooleanType(Fk, Boolean(Bk)), !0)
      }
      setClient(kk, Fk) {
        this.client.setBooleanType(kk, Fk)
      }
      clearGame() {
        this.game = new WR.d, this.movesFly = null
      }
      setMovesFly(kk) {
        this.movesFly = kk
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? vR : 0) | (this.client._getTotalBooleanVal() ? iR : 0)
      }
      write(kk) {
        const Fk = this.perms(),
          {
            movesFly: Bk
          } = this;
        if (Fk === this.Hb && null === Bk) return !0;
        let Rk = ek.ac.Keep;
        return null !== Bk && (Rk = Bk ? ek.ac.On : ek.ac.Off), !(!kk || !(0, ek.ue)(kk, 0, Rk, Fk, Bk ? 1 : 0)) && (this.Hb = Fk, this.movesFly = null, !0)
      }
    }
    class oR {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = kk, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: bk.c,
          get y() {
            return Fk()
          }
        }
      }
      get hasView() {
        const kk = this.api.apiView,
          Fk = ek.w.viewProj;
        return 0 !== Fk(kk, 0, 3) || 0 !== Fk(kk, 0, 7) || 0 !== Fk(kk, 0, 11) || 0 !== Fk(kk, 0, 15)
      }
      get cameraPosition() {
        const kk = this.api.apiView,
          {
            eye: Fk
          } = this;
        for (let Bk = 0; Bk < 3; Bk++) Fk[Bk] = ek.w.eye(kk, 0, Bk);
        return Fk
      }
      get cameraDirection() {
        const kk = this.api.apiView,
          Fk = ek.w.viewProj,
          Bk = Fk(kk, 0, 3),
          Rk = Fk(kk, 0, 7),
          tk = Fk(kk, 0, 11),
          ak = Math.hypot(Bk, Rk, tk),
          {
            forward: Xk
          } = this;
        return ak > 0 && (Xk[0] = Bk / ak, Xk[1] = Rk / ak, Xk[2] = tk / ak), Xk
      }
      get cameraHeading() {
        return ek.w.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return ek.w.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return ek.w.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return ek.w.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(kk) {
        this.clip(kk);
        const {
          clipX: Fk,
          clipY: Bk,
          clipW: Rk
        } = this;
        if (Rk > 0) {
          const kk = Fk / Rk * 50,
            tk = -Bk / Rk * 50;
          return Math.abs(kk) <= this.screenBandPct.x && Math.abs(tk) <= this.screenBandPct.y ? {
            x: 50 + kk,
            y: 50 + tk
          } : this.clampToBand(kk, tk)
        }
        const tk = this.cameraPosition,
          ak = Math.hypot(kk[0] - tk[0], kk[1] - tk[1], kk[2] - tk[2]),
          Xk = this.api.apiView,
          bk = ek.w.viewProj,
          wk = ak > 0 ? Fk / ak : 0,
          dk = ak > 0 ? -Bk / ak : 0,
          sk = Math.hypot(bk(Xk, 0, 1), bk(Xk, 0, 5), bk(Xk, 0, 9)),
          Vk = wk / Math.hypot(bk(Xk, 0, 0), bk(Xk, 0, 4), bk(Xk, 0, 8)),
          Jk = dk / sk,
          Ak = !(Math.abs(Vk) >= .001 || Math.abs(Jk) >= .001);
        return this.clampToBand(wk, Ak ? -(sk || 1) : dk)
      }
      projectDirectionToScreenPos(kk) {
        if (!this.hasView) return;
        const Fk = this.cameraPosition,
          Bk = this.along;
        for (let Rk = 0; Rk < 3; Rk++) Bk[Rk] = Fk[Rk] + 10 * kk[Rk];
        return this.projectWorldPosToScreenPos(Bk)
      }
      projectWorldPosToViewport(kk) {
        this.clip(kk);
        const {
          clipX: Fk,
          clipY: Bk,
          clipW: Rk
        } = this;
        return Rk > 0 ? {
          x: 50 + Fk / Rk * 50,
          y: 50 - Bk / Rk * 50
        } : null
      }
      clip(kk) {
        const Fk = this.api.apiView,
          Bk = kk[0] - ek.w.origin(Fk, 0, 0),
          Rk = kk[1] - ek.w.origin(Fk, 0, 1),
          tk = kk[2] - ek.w.origin(Fk, 0, 2),
          ak = ek.w.viewProj;
        this.clipX = ak(Fk, 0, 0) * Bk + ak(Fk, 0, 4) * Rk + ak(Fk, 0, 8) * tk + ak(Fk, 0, 12), this.clipY = ak(Fk, 0, 1) * Bk + ak(Fk, 0, 5) * Rk + ak(Fk, 0, 9) * tk + ak(Fk, 0, 13), this.clipW = ak(Fk, 0, 3) * Bk + ak(Fk, 0, 7) * Rk + ak(Fk, 0, 11) * tk + ak(Fk, 0, 15)
      }
      clampToBand(kk, Fk) {
        return (0, bk.d)(kk, Fk, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var LR = Bk(4541);
    const OR = new TextEncoder,
      ER = new Uint8Array(ek.R * ek.O);
    class SR {
      constructor() {
        this.buttons = [], this.Hb = !0
      }
      set(kk) {
        this.buttons = kk, this.Hb = !1
      }
      attached() {
        this.Hb = 0 === this.buttons.length
      }
      write(kk) {
        if (this.Hb) return;
        const Fk = new Uint8Array(ek.R),
          Bk = new Uint8Array(ek.R);
        let Rk = 0,
          tk = 0;
        for (const {
            id: ak,
            keycode: Xk
          }
          of this.buttons) {
          if (Rk === ek.R) break;
          const {
            read: kk,
            written: bk
          } = OR.encodeInto(ak, ER.subarray(tk, tk + ek.O));
          if (kk < ak.length) continue;
          const wk = LR.m[Xk];
          Fk[Rk] = "number" === typeof wk ? wk : 0, Bk[Rk] = bk, Rk++, tk += bk
        }
        this.Hb = (0, ek.me)(kk, 0, Rk, Fk, Bk, ER.subarray(0, tk))
      }
    }

    function NR(kk, Fk, Bk) {
      const Rk = OR.encode(Fk);
      return Rk.length <= ek.O && function(kk, Fk, Bk, Rk) {
        return (0, CF.e)(), (0, ek.nf)(kk, Fk, Bk, Rk)
      }(kk, 0, Bk ? 1 : 0, Rk)
    }
    const HR = new TextDecoder,
      uR = new TextEncoder,
      MR = new Uint8Array(0),
      gR = [0, 0, 0],
      UR = {
        off: ek.Id.Off,
        key: ek.Id.Key,
        touch: ek.Id.Touch
      };
    class cR {
      constructor(kk) {
        var Fk;
        this.options = kk, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new SR, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new YR, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.ve = kk => {
          if ((0, Ak.h)(kk)) throw kk;
          this.onError(kk)
        }, this.api = kk.api, this.tables = kk.tables, this.onError = null !== (Fk = kk.onError) && void 0 !== Fk ? Fk : kk => {
          console.error("Error in client game callback", kk)
        }, this.renderFrame = new oR(this.api, kk.screenBandY), this.live = new yR(this.api), this.chunks = new wF(this.api.memory, (() => this.api.apiView)), this.items = new fB({
          api: this.api,
          tables: kk.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: kk.beforeOp
        });
        const Bk = () => this.stopped() ? null : this.cmd,
          Rk = () => this.sessionLive;
        this.entityInfoWatch = new CB({
          cmd: Bk,
          onError: this.onError
        }), this.entityInfo = new ZB({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Rk
        }), this.particles = new UB({
          cmd: Bk,
          isSessionLive: Rk,
          onError: this.onError
        }), this.clientApi = new bB({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: kk.tables,
          cmd: Bk,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Rk,
          beforeWrite: () => {
            var Fk;
            if (this.stopped()) return !1;
            const Bk = this.generation;
            return !1 !== (null === (Fk = kk.beforeWrite) || void 0 === Fk ? void 0 : Fk.call(kk)) && Bk === this.generation
          },
          playerDbId: () => {
            const kk = this.session;
            if (null === kk) throw new Error("No game session has started, so the local player has no DB id");
            return kk.playerDbId
          },
          playSound: kk.playSound,
          setLocalOptions: kk.setLocalOptions,
          hasPackModel: kk.hasPackModel
        }), this.scriptedCamera = new xk({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: kk.cameraScreen,
          showFacing: kk.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= VR(this.items, this.tables, (() => this.localPlayerAlive()), this.ve), this.itemSources
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
      clickCodeBlock(kk) {
        const Fk = this.sessionLive ? this.sendCmd() : null;
        return null !== Fk && (Bk = Fk, Rk = 0, tk = kk[0], ak = kk[1], Xk = kk[2], (0, CF.e)(), (0, ek.se)(Bk, Rk, tk, ak, Xk));
        var Bk, Rk, tk, ak, Xk
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(kk) {
        const Fk = this.liveCmd();
        return null === Fk ? (this.pendingZoom = kk, !1) : (this.pendingZoom = null, (0, ek.fg)(Fk, 0, kk, 1))
      }
      lL(kk) {
        const Fk = this.stopped() ? null : this.cmd;
        return null !== Fk && (0, ek.Zf)(Fk, 0, kk ? 1 : 0)
      }
      respawn() {
        const kk = this.sessionLive ? this.sendCmd() : null;
        return null !== kk && (Fk = kk, Bk = 0, (0, CF.e)(), (0, ek.vf)(Fk, Bk));
        var Fk, Bk
      }
      bindCustomButtonKeys(kk) {
        this.customButtons.set(kk)
      }
      pressCustomButton(kk, Fk) {
        const Bk = this.sessionLive ? this.sendCmd() : null;
        return null !== Bk && NR(Bk, kk, Fk)
      }
      padMove(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = this.liveCmd();
        return null !== Xk && (0, ek.Ue)(Xk, 0, kk, Fk, Bk, Rk, tk, ak)
      }
      thirdPersonFor(kk) {
        const Fk = this.liveCmd();
        return null !== Fk && (0, ek.kg)(Fk, 0, null !== kk && void 0 !== kk ? kk : 1 / 0)
      }
      send(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Rk && ZF(Rk, Bk ? Jk.Ec : 0, kk, (0, rk.g)(Fk))
      }
      socketAttached(kk) {
        this.openSocket = kk, this.socketLeftSinceAttach = !1
      }
      socketDetached(kk) {
        this.openSocket === kk && (this.openSocket = 0)
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
      attach(kk) {
        const Fk = () => kk.isStopped;
        this.stopped = Fk, this.cmd = kk.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const Bk = this.api.apiView;
        this.overflowGen = ek.w.eventOverflowGen(Bk, 0), this.resyncOwed = 0 !== ek.w.eventOverflowMask(Bk, 0), kk.setGameHost(this), kk.setEventWalker((kk => {
          this.api.walk(kk, this, Fk)
        }))
      }
      watchPromptPick(kk) {
        this.promptWatch = kk, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : GR(ek.w.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? ek.yc.None : ek.w.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : ek.w.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === kk || kk >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, kk, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(kk) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(kk)
      }
      netEvent(kk) {
        "connection" === kk.type ? kk.phase === Jk.y.Activated && kk.conn !== this.activeConn && kk.conn > this.closedThrough ? (this.endSession(), this.activeConn = kk.conn, this.endGameGrants(), this.dropGameCamera()) : kk.phase !== Jk.y.Left && kk.phase !== Jk.y.Closed || kk.conn !== this.activeConn ? kk.phase === Jk.y.Resumed && 0 !== this.activeConn && kk.conn > this.closedThrough && (this.activeConn = kk.conn) : this.closeGame() : kk.conn === this.activeConn && 0 !== kk.conn && (kk.UX === mR.r ? this.gunHit(kk.payload) : kk.UX === pB.Tb.EditItemCraftingRecipes || kk.UX === mR.V ? this.items.touch() : (this.serverOptions(kk), this.gameMessage(kk)));
        const Fk = this.options.onNetEvent;
        Fk && this.guard((() => {
          Fk(kk)
        }))
      }
      serverOptions(kk) {
        const Fk = this.options.serverOptions,
          Bk = Fk ? this.decoded(KB, kk) : null;
        Fk && Bk && this.guard((() => {
          Fk.applyNewClientOptions(Bk)
        }))
      }
      gameMessage(kk) {
        let Fk = null;
        try {
          Fk = function(kk) {
            if ("message" !== kk.type || kk.UX !== pB.Tb.GameCodeMessage || kk.payloadKind !== Jk.Nb.Msgpack) return null;
            const Fk = (0, rk.e)(kk.payload);
            if (null === Fk || "object" !== typeof Fk || "string" !== typeof Fk.messageType) throw new Error("GameCodeMessage without a messageType");
            return Fk
          }(kk)
        } catch (Bk) {
          this.sessionLive && this.onError(Bk)
        }
        if (Fk) {
          const {
            messageType: kk,
            data: Bk
          } = Fk;
          if ((0, uk.h)(kk)) return void this.guard((() => {
            (0, uk.d)(kk, Bk)
          }));
          "freeCamPerms" === kk && this.freeCam.setGame(Bk) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Fk => {
            Fk.onReceivedMessageFromServer(kk, Bk)
          }))
        }
      }
      decoded(kk, Fk) {
        try {
          return kk(Fk)
        } catch (Bk) {
          return this.onError(Bk), null
        }
      }
      setClientFreeCameraGrant(kk, Fk) {
        this.freeCam.setClient(kk, Fk), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(kk) {
        this.freeCam.setMovesFly(kk), this.writeFreeCam()
      }
      setBlockHighlight(kk) {
        this.highlight = kk, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const kk = this.liveCmd();
        if (null === kk || !this.highlightOwed) return;
        const Fk = this.highlight;
        this.highlightOwed = null === Fk ? !(0, ek.Fe)(kk, 0, gR, gR, 0) : !(0, ek.Fe)(kk, 0, Fk.pos, Fk.normal, 1)
      }
      localPlayerBound(kk) {
        var Fk, Bk;
        if (0 === this.activeConn || this.sessionLive && kk === this.boundId) return;
        const Rk = this.sessionLive;
        let tk, ak, Xk, bk;
        this.endSession(), Rk && this.restartGameCamera();
        try {
          var wk;
          this.session = null;
          const kk = this.options.sessionInfo(this.activeConn);
          if (this.session = kk, !kk) return;
          tk = kk.gameNameWithVariation, ak = null !== (wk = (0, Nk.Rb)(tk)) && void 0 !== wk ? wk : void 0, Xk = (0, Hk.w)(kk.lobbyName), bk = (0, Hk.N)(kk.lobbyName)
        } catch (Wk) {
          return void this.onError(Wk)
        }
        const dk = {
          localPlayerId: String(kk)
        };
        let sk = {},
          Vk = {};
        try {
          var Jk, Ak;
          sk = null !== (Jk = null === (Ak = this.options.gameFactory((0, Nk.Vb)(tk))) || void 0 === Ak ? void 0 : Ak(bk, Xk, ak, dk)) && void 0 !== Jk ? Jk : {}
        } catch (Wk) {
          this.ve(Wk)
        }
        try {
          var ek, yk;
          Vk = {
            ...null === (ek = (yk = this.options).defaultPlugins) || void 0 === ek ? void 0 : ek.call(yk, bk, Xk, ak, dk),
            ...sk.plugins
          }
        } catch (Wk) {
          this.ve(Wk)
        }
        const fk = [sk, ...Object.values(Vk)];
        this.owners = fk, this.tickers = fk.filter((kk => void 0 !== kk.yJ)), this.renderers = fk.filter((kk => void 0 !== kk.onAfterRender)), this.receivers = fk.filter((kk => void 0 !== kk.onReceivedMessageFromServer)), this.writeAltVeto(fk), this.writeHooks(fk), this.writePublicLobby(bk), this.writeLocalDbId(null !== (Fk = null === (Bk = this.session) || void 0 === Bk ? void 0 : Bk.playerDbId) && void 0 !== Fk ? Fk : null), this.boundId = kk, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(fk, (kk => {
          var Fk;
          null === (Fk = kk.onCreate) || void 0 === Fk || Fk.call(kk, this.clientApi)
        }));
        const mk = this.generation;
        setTimeout((() => {
          mk === this.generation && !0 === this.tables.getClientOption("creative") && sR(this.tables)
        }), 0)
      }
      chunkSlot(kk, Fk, Bk, Rk, tk, ak) {
        this.chunks.apply(kk, Fk, Bk, Rk, tk, ak)
      }
      entityAdded(kk) {
        var Fk;
        this.entityInfo.stale(kk), null === (Fk = this.options.replayEntities) || void 0 === Fk || Fk.entityAdded(kk)
      }
      entityInfoChanged(kk) {
        var Fk;
        this.entityInfo.stale(kk), null === (Fk = this.options.replayEntities) || void 0 === Fk || Fk.entityInfoChanged(kk)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const kk = performance.now();
          this.round(this.tickers, TR), (0, BR.b)(performance.now() - kk)
        }
      }
      afterWalk(kk) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const Fk = this.options.replayEntities;
        Fk && this.guard((() => {
          this.entityInfoWatch.want(qB, Fk.wantsWatch), Fk.flush(this.entityInfoWatch.on)
        }));
        const Bk = (0, BR.l)(kk, ek.w.frameMs(this.api.apiView, 0));
        if (null !== Bk) {
          const kk = this.renderFrame;
          this.guard((() => {
            (0, jB.e)().turnDamageIndicators(kk.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Bk)
          })), this.round(this.renderers, (Fk => {
            Fk.onAfterRender(Bk, kk)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Bk)
        } catch (tk) {
          this.ve(tk)
        }
        this.showZoom(), this.items.flush(this.ve), this.writePromptWatch(), this.writeCustomButtons();
        const Rk = this.ticks;
        this.ticks = 0, (0, BR.h)(Rk, kk, Bk, this.ve)
      }
      entityRemoved(kk) {
        this.live.despawned(kk), this.entityInfo.removed(kk)
      }
      ackEventOverflow() {
        const kk = this.api.apiView,
          Fk = ek.w.eventOverflowGen(kk, 0),
          Bk = Fk - this.overflowGen >>> 0;
        if (0 === Bk && !this.resyncOwed) return;
        this.overflowGen = Fk;
        const Rk = ek.w.eventOverflowMask(kk, 0),
          tk = this.cmd;
        0 === Rk || null === tk || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, ek.te)(tk, 0, Rk);
        const ak = this.options.onEventOverflow;
        0 !== Bk && ak && this.guard((() => {
          ak(Rk, Bk)
        }))
      }
      gameCall(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        if (kk === ek.nc.Director) try {
          return this.scriptedCamera.call(Fk, Bk, Rk, tk, ak, Xk)
        } catch (dk) {
          return this.ve(dk), ek.ub.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return kk === ek.nc.AltVeto ? ek.j.Allow : 0;
        try {
          return this.callGames(kk, Fk, Bk, Rk, tk, ak, Xk, bk)
        } catch (dk) {
          throw (0, Ak.h)(dk) && (this.fault = dk), dk
        }
      }
      takeFault() {
        const kk = this.fault;
        return this.fault = void 0, kk
      }
      callGames(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: wk
        } = this.options, dk = String(this.boundId);
        switch (kk) {
          case ek.nc.AltVeto:
          case ek.nc.AltAction: {
            const bk = 0 !== Xk,
              [sk, Vk, Jk] = bk ? [Fk, Bk, Rk] : [void 0, void 0, void 0],
              Ak = bk ? wk.nameOfId(tk) : "Air",
              yk = GR(ak);
            if (kk === ek.nc.AltAction) return this.first((kk => {
              var Fk;
              return null === (Fk = kk.onPlayerAltAction) || void 0 === Fk ? void 0 : Fk.call(kk, dk, sk, Vk, Jk, Ak, yk)
            })), 0;
            const fk = this.first((kk => {
              var Fk;
              return null === (Fk = kk.onPlayerAttemptAltAction) || void 0 === Fk ? void 0 : Fk.call(kk, dk, sk, Vk, Jk, Ak, yk)
            }));
            return "preventAction" === fk ? ek.j.Prevent : "preventPlacement" === fk ? ek.j.PreventPlacement : ek.j.Allow
          }
          case ek.nc.Click: {
            const kk = bk,
              sk = 0 !== (kk & ek.Z.Alt),
              Vk = 0 !== (kk & ek.Z.HasPos),
              Jk = Vk ? wk.nameOfId(tk) : "Air",
              [Ak, yk, fk] = Vk ? [Fk, Bk, Rk] : [null, null, null],
              mk = GR(ak),
              Wk = 0 !== (kk & ek.Z.Up),
              vk = GR(Xk);
            if (0 === (kk & ek.Z.AttackOnly) && this.first((kk => {
                var Fk, Bk;
                return Wk ? null === (Fk = kk.onPlayerClickUp) || void 0 === Fk ? void 0 : Fk.call(kk, dk, sk, Ak, yk, fk, Jk, mk) : null === (Bk = kk.onPlayerClick) || void 0 === Bk ? void 0 : Bk.call(kk, dk, sk, Ak, yk, fk, Jk, mk)
              })), !Wk && !sk && null !== vk) {
              const kk = this.clientApi.getPositionView(vk),
                Fk = kk ? [kk[0], kk[1], kk[2]] : [0, 0, 0];
              this.first((kk => {
                var Bk;
                return null === (Bk = kk.onPlayerAttackEntity) || void 0 === Bk ? void 0 : Bk.call(kk, dk, vk, Fk)
              }))
            }
            return 0
          }
          case ek.nc.ChangeBlock: {
            const kk = wk.nameOfId(tk),
              Xk = wk.nameOfId(ak);
            return this.first((tk => {
              var ak;
              return null === (ak = tk.onPlayerChangeBlock) || void 0 === ak ? void 0 : ak.call(tk, dk, Fk, Bk, Rk, kk, Xk)
            })), 0
          }
          case ek.nc.DropItem: {
            const kk = wk.nameOfId(Fk);
            return this.first((Fk => {
              var tk;
              return null === (tk = Fk.onPlayerDropItem) || void 0 === tk ? void 0 : tk.call(Fk, dk, kk, Bk, Rk)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${kk}`)), 0
        }
      }
      changeBlockFail(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = tk === ek.Rc ? null : HR.decode(this.api.eventBytes(ak, Math.min(tk, Xk)));
        this.failures.push({
          Pa: [kk, Fk, Bk],
          ha: Rk,
          qa: bk
        })
      }
      changeBlockFailEnd() {
        const kk = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Fk => {
          var Bk;
          null === (Bk = Fk.onChangeBlockFail) || void 0 === Bk || Bk.call(Fk, kk)
        })), this.Hf("EditBoard", {
          pos: null
        }), this.Hf("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(kk, Fk, Bk, Rk, tk, ak) {
        kk === ek.Cc.ChestOpened ? this.items.chestOpened(Bk, Rk, tk) : kk !== ek.Cc.Synced && kk !== ek.Cc.ChestClosed && kk !== ek.Cc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(kk, Fk, Bk, Rk) {
            switch (kk) {
              case ek.Cc.Synced:
                Xk.o.Hf("syncedInvenFromServer");
                break;
              case ek.Cc.ChestOpened:
              case ek.Cc.ChestClosed:
                Xk.o.Hf("chestToggleFromServer", kk === ek.Cc.ChestOpened, !0);
                break;
              case ek.Cc.ChestRefreshed:
                Xk.o.Hf("chestRefreshedFromServer");
                break;
              case ek.Cc.EnchantingTable:
                Xk.o.Hf("enchantingTable", {
                  Ts: Rk,
                  position: Bk
                });
                break;
              case ek.Cc.HotbarRequest:
                Xk.o.Hf("setSelectedInventorySlotI", Fk, !0);
                break;
              case ek.Cc.Scrolled:
                Xk.o.Hf("ScrollInventorySlot", Fk);
                break;
              case ek.Cc.NumberKey:
                Xk.o.Hf("numkeyPressed", Fk + 1);
                break;
              case ek.Cc.DropRequested:
                Xk.o.Hf("DropInvenItem", 0 !== Fk);
                break;
              default:
                throw new Ak.c(`InventoryEvent of no kind: what ${kk}`)
            }
          }(kk, Fk, [Bk, Rk, tk], ak)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(kk, Fk, Bk, Rk) {
        this.Hf("shotPlayer", {
          playerId: String(kk),
          damage: Fk,
          wasCrit: 0 !== Rk,
          distance: Bk
        })
      }
      localHurt(kk, Fk) {
        this.Hf("closeShopOnDamaged", null), this.guard((() => {
          Xk.o.Hf("damagedByOtherPlayer", {
            xB: null,
            direction: Number.isNaN(Fk) ? null : Fk,
            Lt: kk
          })
        }))
      }
      attackHit(kk, Fk, Bk, Rk, tk) {
        this.guard((() => {
          Xk.o.Hf("yourAttackHit", {
            BB: Rk,
            screenPos: this.renderFrame.projectDirectionToScreenPos([kk, Fk, Bk]),
            hitSelf: tk
          })
        }))
      }
      physicsType(kk) {
        this.Hf("PlayerPhysicsTypeUpdate", kk)
      }
      vehicleEffect(kk, Fk, Bk, Rk, tk) {
        this.guard((() => {
          kk === Jk.Sc.UPDATE ? (0, gk.j)(Fk, {
            icon: Bk,
            level: Rk,
            displayName: null,
            durationMs: tk
          }) : Mk.d.remove(Fk)
        }))
      }
      zoomChanged(kk) {
        this.zoom = kk, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Hf("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const kk = this.scriptedCamera.holdsView();
        !this.zoomUnshown || kk && this.zoomHeld || (this.zoomUnshown = !1, this.Hf("cameraZoomSet", this.zoom)), this.zoomHeld = kk
      }
      gunHit(kk) {
        this.guard((() => {
          const {
            xB: Fk,
            jB: Bk
          } = (0, fR.d)(mR.r, kk);
          Xk.o.Hf("damagedByOtherPlayer", {
            xB: Fk,
            direction: Bk
          })
        }))
      }
      uiEvent(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        this.guard((() => {
          lB(kk, Fk, [Bk, Rk, tk], ak, this.items, this.options.tables, (() => HR.decode(this.api.eventBytes(Xk, bk))))
        }))
      }
      writeAltVeto(kk) {
        const Fk = this.cmd;
        if (!Fk) return;
        let Bk;
        try {
          Bk = function(kk, Fk) {
            const Bk = new Set;
            let Rk = !1;
            for (const tk of kk)
              if (tk.onPlayerAttemptAltAction) {
                if (Rk = !0, !tk.altVetoBlocks) return {
                  mode: ek.he.All,
                  roots: []
                };
                for (const kk of tk.altVetoBlocks) Bk.add(Fk.getMetaInfo(kk).rootId)
              } return Rk ? Bk.size > ek.Mc ? {
              mode: ek.he.All,
              roots: []
            } : {
              mode: ek.he.Filter,
              roots: [...Bk]
            } : {
              mode: ek.he.Off,
              roots: []
            }
          }(kk, this.options.tables)
        } catch (tk) {
          this.onError(tk), Bk = {
            mode: ek.he.All,
            roots: []
          }
        }
        if (Bk.mode === ek.he.Off && !this.vetoSet) return;
        const Rk = new Uint8Array(new Uint32Array(Bk.roots).buffer);
        (0, ek.Cf)(Fk, 0, Bk.mode, Bk.roots.length, Rk) ? this.vetoSet = Bk.mode !== ek.he.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(kk) {
        const Fk = this.cmd;
        if (!Fk) return;
        const Bk = function(kk) {
          let Fk = 0;
          for (const Bk of kk) Bk.onPlayerAltAction && (Fk |= 1 << ek.nc.AltAction), (Bk.onPlayerClick || Bk.onPlayerClickUp || Bk.onPlayerAttackEntity) && (Fk |= 1 << ek.nc.Click), Bk.onPlayerChangeBlock && (Fk |= 1 << ek.nc.ChangeBlock), Bk.onPlayerDropItem && (Fk |= 1 << ek.nc.DropItem);
          return Fk
        }(kk);
        (0 !== Bk || this.hooksSet) && ((0, ek.Of)(Fk, 0, Bk) ? this.hooksSet = 0 !== Bk : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const kk = this.cmd;
        kk && !this.stopped() && this.customButtons.write(kk)
      }
      writePromptWatch() {
        const kk = this.cmd,
          Fk = this.promptWatch;
        Fk !== this.promptWatchSent && kk && !this.stopped() && (0, ek.ng)(kk, 0, UR[Fk]) && (this.promptWatchSent = Fk)
      }
      writePublicLobby(kk) {
        const Fk = this.cmd;
        Fk && kk !== this.writtenPublicLobby && ((0, ek.bg)(Fk, 0, kk ? 1 : 0) ? this.writtenPublicLobby = kk : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(kk) {
        const Fk = this.cmd;
        Fk && ((0, ek.Rf)(Fk, 0, null === kk ? 0 : 1, null === kk ? MR : uR.encode(kk)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(kk) {
        const Fk = this.generation;
        for (const Rk of this.owners) {
          if (Fk !== this.generation) break;
          try {
            const Fk = kk(Rk);
            if (void 0 !== Fk) return Fk
          } catch (Bk) {
            this.ve(Bk)
          }
        }
      }
      Hf(kk, Fk) {
        this.guard((() => {
          Xk.o.Hf(kk, Fk)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (kk) {
          this.ve(kk)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (kk) {
          this.ve(kk)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const kk = this.owners;
        let Fk;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Rk) {
          Fk = Rk
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Rk) {
          Fk ??= Rk
        }
        this.round(kk, rR, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Rk) {
          Fk ??= Rk
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Rk) {
          Fk ??= Rk
        }
        const Bk = this.options.onSessionEnd;
        if (Bk) try {
          Bk()
        } catch (Rk) {
          this.onError(Rk)
        }
        void 0 !== Fk && this.ve(Fk)
      }
      round(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = this.generation;
        for (const ak of kk) {
          if (Rk !== this.generation) break;
          try {
            Fk(ak)
          } catch (tk) {
            Bk ? this.onError(tk) : this.ve(tk)
          }
        }
      }
      guard(kk) {
        try {
          kk()
        } catch (Fk) {
          this.ve(Fk)
        }
      }
    }

    function GR(kk) {
      return kk === ek.Uc ? null : String(kk)
    }

    function TR(kk) {
      kk.yJ(Jk.Lc)
    }

    function rR(kk) {
      var Fk;
      null === (Fk = kk.onClose) || void 0 === Fk || Fk.call(kk)
    }

    function DR(kk, Fk) {
      kk.watch((() => {
        const Bk = function(kk) {
          let Fk = 0;
          const Bk = Math.min(RR, kk.length);
          for (let tk = 0; tk < Bk; tk++) {
            var Rk;
            const Bk = null === (Rk = kk.slot(tk)) || void 0 === Rk ? void 0 : Rk.typeObj,
              ak = Bk ? (0, FR.gunTypeOf)(Bk.id) : void 0;
            void 0 !== ak && (Fk |= 1 << iF[ak])
          }
          return Fk
        }(kk);
        0 !== Bk && (Fk.preload(Bk), Fk.preload(1 << YF))
      }))
    }
    var zR = Bk(4575),
      PR = Bk(36445);

    function hR(kk) {
      const Fk = new zR.Howl({
          ...(0, PR.e)(kk),
          pool: 15,
          preload: !1
        }),
        Bk = Fk.load.bind(Fk);
      return Fk.load = () => (Fk._preload = !0, Bk()), Fk
    }

    function qR(kk, Fk, Bk) {
      const Rk = kk.listener;
      if (Rk.positionX) CR(Rk.positionX, Fk, Bk, 0), CR(Rk.positionY, Fk, Bk, 1), CR(Rk.positionZ, Fk, Bk, 2), CR(Rk.forwardX, Fk, Bk, 3), CR(Rk.forwardY, Fk, Bk, 4), CR(Rk.forwardZ, Fk, Bk, 5), CR(Rk.upX, Fk, Bk, 6), CR(Rk.upY, Fk, Bk, 7), CR(Rk.upZ, Fk, Bk, 8);
      else {
        let kk = !1;
        for (let Rk = 0; Rk < 9; Rk++) kk ||= Fk[Rk] !== Bk[Rk];
        kk && (Rk.setPosition(Fk[0], Fk[1], Fk[2]), Rk.setOrientation(Fk[3], Fk[4], Fk[5], Fk[6], Fk[7], Fk[8]), Bk.set(Fk))
      }
    }

    function CR(kk, Fk, Bk, Rk) {
      Fk[Rk] !== Bk[Rk] && (kk.value = Fk[Rk], Bk[Rk] = Fk[Rk])
    }
    class ZR {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(kk) {
        this.pose.set(kk);
        const Fk = zR.Howler.ctx;
        return !!Fk && (Fk !== this.watchedCtx && (this.watchedCtx = Fk, this.written.fill(Number.NaN), Fk.addEventListener("statechange", (() => {
          "running" === Fk.state && qR(Fk, this.pose, this.written)
        }))), "running" === Fk.state && qR(Fk, kk, this.written), !0)
      }
    }
    var pR = Bk(36298),
      KR = Bk(38812);
    let xR = null,
      jR = null;

    function lR() {
      return null === xR && (xR = document.createElement("div"), xR.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(xR)), xR
    }

    function nR() {
      return jR ??= new KR.b(new pR.d(lR)), jR
    }

    function IR() {
      var kk;
      null === (kk = jR) || void 0 === kk || kk.clear(), QR(null)
    }

    function QR(kk) {
      Rk.c.get("scriptedCameraFacing") !== kk && Rk.c.set({
        scriptedCameraFacing: kk
      })
    }
    var kt = Bk(9169),
      Ft = Bk(9127),
      Bt = Bk(38841),
      Rt = Bk(40154),
      tt = Bk(3090);
    const Xt = Object.entries(ek.mc).reduce(((kk, Fk) => {
      let [Bk, Rk] = Fk;
      return kk[Rk] = Bk, kk
    }), []);

    function bt(kk, Fk) {
      var Bk;
      return 0 !== ((null !== (Bk = kk.itemFlags[Fk]) && void 0 !== Bk ? Bk : 0) & ek.Ec.Stackable)
    }
    const wt = /^(0|[1-9][0-9]*)$/,
      dt = {
        displayName: (kk, Fk) => (0, FR.displayNameOf)(Fk),
        description: (kk, Fk) => (0, FR.descriptionOf)(Fk),
        type: (kk, Fk) => (0, FR.itemTypeOf)(Fk),
        clipSize: (kk, Fk) => (0, FR.clipSizeOf)(Fk),
        armourReduction: (kk, Fk) => (0, FR.armourReductionOf)(Fk),
        scopeType: (kk, Fk) => (0, FR.scopeTypeOf)(Fk),
        stackable: bt,
        harvestType: (kk, Fk) => Xt[kk.blockHarvestTypes[Fk]],
        harvestLevel: (kk, Fk) => {
          const Bk = kk.blockHarvestLevels[Fk];
          return Bk === ek.Jc ? void 0 : Bk
        },
        harvests: (kk, Fk) => {
          var Bk;
          const Rk = null !== (Bk = kk.itemHarvests[Fk]) && void 0 !== Bk ? Bk : 0;
          return 0 !== Rk ? Xt[Rk] : void 0 === (0, FR.harvestsNullLevelOf)(Fk) ? void 0 : null
        },
        level: (kk, Fk) => {
          var Bk, Rk;
          const tk = null !== (Bk = kk.itemLevels[Fk]) && void 0 !== Bk ? Bk : ek.Jc;
          return tk !== ek.Jc ? tk : null !== (Rk = (0, FR.harvestsNullLevelOf)(Fk)) && void 0 !== Rk ? Rk : void 0
        }
      };

    function st(kk, Fk, Bk) {
      return Jt(new Uint8Array(Math.floor(kk.length / Fk)), kk, Fk, Bk)
    }

    function Vt(kk, Fk, Bk) {
      return Jt(new Uint16Array(Math.floor(kk.length / Fk)), kk, Fk, Bk)
    }

    function Jt(kk, Fk, Bk, Rk) {
      const tk = new DataView(Fk.buffer, Fk.byteOffset, Fk.byteLength);
      for (let ak = 0; ak < kk.length; ak++) kk[ak] = Rk(tk, ak * Bk);
      return kk
    }
    class At {
      constructor(kk, Fk) {
        this.options = Fk, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = kk => {
          const Fk = this.idOf(kk);
          if (void 0 === Fk) throw new Error(`No item is named ${kk}, an item's root`);
          return Fk
        };
        const Bk = Fk => {
            const Bk = Fk();
            return new Uint8Array(kk.memory().buffer, kk.scratch(), Bk).slice()
          },
          Rk = (new TextDecoder).decode(Bk((() => kk.queries.itemNames()))).split("\n"),
          tk = Bk((() => kk.queries.blockProps())),
          ak = Bk((() => kk.queries.itemProps()));
        this.props = {
          blockFlags: st(tk, ek.C.BYTES, ek.C.flags),
          blockHarvestTypes: st(tk, ek.C.BYTES, ek.C.harvestType),
          blockHarvestLevels: st(tk, ek.C.BYTES, ek.C.harvestLevel),
          blockAttachedTops: Vt(tk, ek.C.BYTES, ek.C.attachedTop),
          itemFlags: st(ak, ek.Fc.BYTES, ek.Fc.flags),
          itemHarvests: st(ak, ek.Fc.BYTES, ek.Fc.harvests),
          itemLevels: st(ak, ek.Fc.BYTES, ek.Fc.level)
        }, (0, tt.l)(Object.freeze(Rk)), (0, Rt.g)()
      }
      idOf(kk) {
        if ("number" === typeof kk) return void 0 === (0, tt.f)(kk) ? void 0 : kk;
        const Fk = (0, tt.c)(kk);
        return void 0 === Fk && wt.test(kk) ? void 0 === (0, tt.f)(+kk) ? void 0 : +kk : Fk
      }
      getMetaInfo(kk) {
        if (!kk || kk === kt.c) return kt.d;
        const Fk = this.idOf(kk);
        if (void 0 === Fk) throw new Error(`Item ${kk} not found in registry`);
        return this.metaOf(Fk)
      }
      blockRootId(kk) {
        return 0 !== kk && void 0 !== (0, tt.f)(kk) ? this.metaOf(kk).rootId : kk
      }
      metaOf(kk) {
        return this.metas[kk] ??= (0, Ft.n)((0, tt.f)(kk), kk, this.rootIdOf, (0, FR.rootMetaDescOf)(kk))
      }
      getItemId(kk) {
        if (!kk || kk === kt.c) return 0;
        const Fk = this.idOf(kk);
        if (void 0 === Fk) throw new Error(`Invalid block name. You sent ${kk}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Fk
      }
      getItemName(kk) {
        if (!kk || kk === kt.c) return kt.c;
        const Fk = this.idOf(kk);
        if (void 0 === Fk) throw new Error(`Item ${kk} not found in registry`);
        return (0, tt.f)(Fk)
      }
      blockNameToBlockId(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (kk === kt.c) return 0;
        let Bk = this.idOf(kk);
        if (void 0 === Bk || !this.isBlockId(Bk)) {
          const Fk = kk.indexOf("|"),
            Rk = Fk > 0 ? (0, tt.c)(kk.slice(0, Fk)) : void 0;
          Bk = void 0 !== Rk && this.isBlockId(Rk) && (0, FR.rootMetaDescOf)(Rk) === kk ? Rk : void 0
        }
        if (void 0 !== Bk) return Bk;
        if (!Fk) throw new Error(`Invalid block name. You sent ${kk}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(kk) {
        return kk > 0 && kk < this.props.blockFlags.length
      }
      nameOfId(kk) {
        return 0 !== kk && (0, tt.f)(kk) || kt.c
      }
      itemType(kk) {
        const Fk = kk ? this.idOf(kk) : void 0;
        if (!Fk) return null;
        let Bk = this.types.get(Fk);
        return void 0 === Bk && (Bk = Object.freeze({
          id: Fk,
          name: (0, tt.f)(Fk),
          meta: this.getMetaInfo(Fk),
          stackable: bt(this.props, Fk),
          type: (0, FR.itemTypeNameOf)(Fk),
          clipSize: (0, FR.clipSizeOf)(Fk),
          scopeType: (0, FR.scopeTypeOf)(Fk),
          showsAimingUi: (0, FR.showsAimingUi)(Fk)
        }), this.types.set(Fk, Bk)), Bk
      }
      getItemStat(kk, Fk) {
        if (Bt.d.has(Fk)) {
          const Bk = "minChargeStateToUse" === Fk ? this.getMetaInfo(kk).rootName : this.getItemName(kk),
            Rk = this.options.get((0, Bt.h)(Bk, Fk));
          if (null !== Rk && void 0 !== Rk) return Rk
        }
        return this.defaultStat(kk, Fk, this.statOf(Fk))
      }
      getDisplayName(kk) {
        return this.getItemStat(kk, "displayName")
      }
      getDefaultItemStat(kk, Fk) {
        return this.defaultStat(kk, Fk, this.statOf(Fk))
      }
      statOf(kk) {
        const Fk = dt[kk];
        return void 0 === Fk && function(kk, Fk) {
          throw new Error(`ClientApi.${kk} is not available yet in the wasm client (${Fk})`)
        }(`getItemStat("${kk}")`, `a table of the stat: the wasm client answers ${Object.keys(dt).join(", ")}`), Fk
      }
      defaultStat(kk, Fk, Bk) {
        const Rk = this.idOf(kk),
          tk = void 0 === Rk ? void 0 : Bk(this.props, Rk);
        return null !== tk && void 0 !== tk || "displayName" !== Fk ? tk : this.getItemName(kk)
      }
      getClientOption(kk) {
        return this.options.get(kk)
      }
      getGunStats(kk) {
        return this.getClientOption(`${kk}GunStats`)
      }
      watchClientOption(kk, Fk) {
        return this.options.subscribe(kk, Fk)
      }
      isSolidBlockId(kk) {
        var Fk;
        return 0 !== ((null !== (Fk = this.props.blockFlags[kk]) && void 0 !== Fk ? Fk : 0) & ek.y.Solid)
      }
      isStackableId(kk) {
        return bt(this.props, kk)
      }
      isFluidBlockId(kk) {
        var Fk;
        return 0 !== ((null !== (Fk = this.props.blockFlags[kk]) && void 0 !== Fk ? Fk : 0) & ek.y.Fluid)
      }
      canPlaceOverBlockId(kk) {
        var Fk;
        return 0 !== ((null !== (Fk = this.props.blockFlags[kk]) && void 0 !== Fk ? Fk : 0) & ek.y.PlaceOver)
      }
      attachedTopOf(kk) {
        var Fk;
        return null !== (Fk = this.props.blockAttachedTops[kk]) && void 0 !== Fk ? Fk : 0
      }
      isDroplessBlockId(kk) {
        return (0, FR.dropsNothing)(kk)
      }
    }

    function et(kk, Fk) {
      const Bk = new Map;
      return (Rk, tk) => {
        const ak = Fk.idOf(Rk),
          Xk = void 0 === ak ? null : (Rk => {
            let tk = Bk.get(Rk);
            if (void 0 === tk) {
              const ak = kk.queries.salvageRecipe(Rk),
                Xk = new DataView(kk.memory().buffer, kk.scratch(), ak),
                bk = [];
              for (let kk = 0; kk + ek.Td.BYTES <= ak; kk += ek.Td.BYTES) bk.push(Object.freeze({
                item: Fk.nameOfId(ek.Td.item(Xk, kk)),
                amt: ek.Td.amount(Xk, kk)
              }));
              tk = 0 === bk.length ? null : Object.freeze(bk), Bk.set(Rk, tk)
            }
            return tk
          })(ak);
        if (null === Xk || void 0 === tk) return Xk;
        const bk = tk <= 0 ? 1 : tk;
        return Xk.map((kk => {
          let {
            item: Fk,
            amt: Bk
          } = kk;
          return {
            item: Fk,
            amt: Bk * bk
          }
        }))
      }
    }
    var yt = Bk(40330),
      ft = Bk(36623),
      mt = Bk(36616),
      Wt = Bk(36659),
      vt = Bk(36232),
      it = Bk(40097),
      Yt = Bk(41998);
    const ot = -1,
      Lt = new Uint8Array(0),
      Ot = new TextEncoder;

    function Et(kk) {
      if (null === kk) return null;
      const Fk = Ot.encode(kk);
      return Fk.byteLength < Jk.cc ? Fk : Fk.subarray(0, Jk.cc - 1)
    }
    class St {
      constructor(kk) {
        this.deps = kk, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ot, this.keyframesSettled = !1, this.reloadFrom = ot
      }
      reloadKeyframes() {
        var kk, Fk;
        this.keyframesVersion = ot, this.reloadFrom = null !== (kk = null === (Fk = this.view()) || void 0 === Fk ? void 0 : Fk.version) && void 0 !== kk ? kk : ot
      }
      setPlayback(kk) {
        const Fk = 1 === this.deps.core.stk(kk);
        return Fk && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ot, this.reloadFrom = ot), Fk
      }
      async open(kk) {
        const Fk = await this.deps.replay.open(kk);
        return "opening" === Fk && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Fk
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(kk)), Fk)
      }
      setSpeed(kk) {
        this.deps.replay.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.replay.setCameraMode(Yt.c.indexOf(kk))
      }
      view() {
        var kk;
        const Fk = ek.w.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Fk) return this.lastView = null, null;
        const Bk = new DataView(this.deps.buffer(), Fk, ek.Md.BYTES),
          Rk = ek.Md.version(Bk, 0),
          tk = this.lastView;
        if (null !== tk && tk.version === Rk) return tk;
        const ak = ek.Md.markIn(Bk, 0),
          Xk = {
            version: Rk,
            state: ek.Md.state(Bk, 0),
            cameraMode: null !== (kk = Yt.c[ek.Md.cameraMode(Bk, 0)]) && void 0 !== kk ? kk : "recording",
            yJ: ek.Md.yJ(Bk, 0),
            totalTicks: ek.Md.totalTicks(Bk, 0),
            speed: ek.Md.speed(Bk, 0),
            mark: ak === ek.Ld ? null : {
              inTick: ak,
              outTick: ek.Md.markOut(Bk, 0)
            },
            editVersion: ek.Md.editVersion(Bk, 0)
          };
        return this.lastView = Xk, Xk
      }
      keyframes() {
        const kk = this.view();
        if (null === kk) return [];
        kk.version !== this.reloadFrom && (this.reloadFrom = ot);
        const Fk = this.reloadFrom === ot && kk.state !== Jk.Cc.Cropping && kk.state !== Jk.Cc.None,
          Bk = Fk ? kk.editVersion : kk.version;
        if (Bk === this.keyframesVersion && Fk === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Rk
        } = this.deps, tk = Rk.Vtk(), ak = Rk.Tf(), Xk = [];
        if (0 !== ak && tk > 0) {
          const kk = new DataView(this.deps.buffer(), ak, tk * Jk.Sb);
          for (let Fk = 0; Fk < tk; Fk++) {
            const Bk = Fk * Jk.Sb,
              Rk = Fk => kk.getFloat64(Bk + Fk, !0);
            Xk.push({
              yJ: kk.getUint32(Bk + Jk._b, !0),
              position: [Rk(Jk.Zb), Rk(Jk.Zb + 8), Rk(Jk.Zb + 16)],
              direction: [Rk(Jk.Ub), Rk(Jk.Ub + 8), Rk(Jk.Ub + 16)],
              easing: [Rk(Jk.Yb), Rk(Jk.Yb + 8), Rk(Jk.Yb + 16), Rk(Jk.Yb + 24)]
            })
          }
        }
        return this.keyframesVersion = Bk, this.keyframesSettled = Fk, this.lastKeyframes = Xk, Xk
      }
      addKeyframe() {
        const kk = this.deps.apiView(),
          Fk = [ek.w.eye(kk, 0, 0), ek.w.eye(kk, 0, 1), ek.w.eye(kk, 0, 2)];
        return this.deps.replay.addKeyframe(Fk, function(kk, Fk) {
          const Bk = Math.cos(Fk);
          return [Bk * Math.sin(kk), -Math.sin(Fk), Bk * Math.cos(kk)]
        }(ek.w.heading(kk, 0), ek.w.pitch(kk, 0)))
      }
      setKeyframe(kk) {
        return this.deps.replay.setKeyframe(kk.yJ, Float64Array.from([...kk.position, ...kk.direction, ...kk.easing]))
      }
      moveKeyframe(kk, Fk) {
        return this.deps.replay.moveKeyframe(kk, Fk)
      }
      deleteKeyframes(kk, Fk) {
        return this.deps.replay.deleteKeyframes(kk, Fk)
      }
      setMark(kk) {
        var Fk, Bk;
        return this.deps.replay.setMark(null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.inTick) && void 0 !== Fk ? Fk : -1, null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.outTick) && void 0 !== Bk ? Bk : -1)
      }
      crop(kk, Fk) {
        const Bk = this.deps.replay.crop(kk, Fk);
        return Bk && this.reloadKeyframes(), Bk
      }
      save(kk) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(kk)
      }
      recorderControl(kk) {
        this.deps.recorder.control(kk)
      }
      recorderPrefs(kk, Fk) {
        this.deps.recorder.prefs(kk, Fk)
      }
      recorderOption(kk, Fk) {
        const Bk = this.deps.cmd();
        return null !== Bk && (0, ek.tf)(Bk, 0, kk, null === Fk ? Lt : Ot.encode(Fk))
      }
      recordFlyingText(kk, Fk, Bk, Rk) {
        const tk = this.deps.cmd(),
          ak = Math.max(0, Math.min(4294967295, Math.round(Rk)));
        return null !== tk && (0, ek.of)(tk, 0, Fk, Bk, ak, Ot.encode(kk))
      }
      recordPlayerKilled(kk, Fk, Bk, Rk) {
        const tk = this.deps.cmd();
        return null !== tk && (0, ek.uf)(tk, 0, kk, Fk, Math.max(0, Bk), Ot.encode(Rk))
      }
      recordKillfeed(kk, Fk, Bk) {
        var Rk, tk;
        const ak = this.deps.cmd(),
          Xk = function(kk) {
            const Fk = kk.reduce(((kk, Fk) => {
                var Bk;
                return kk + pB.fb + (null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.byteLength) && void 0 !== Bk ? Bk : 0)
              }), 0),
              Bk = new Uint8Array(Fk),
              Rk = new DataView(Bk.buffer);
            let tk = 0;
            for (const Xk of kk) {
              var ak;
              Rk.setUint16(tk, null !== (ak = null === Xk || void 0 === Xk ? void 0 : Xk.byteLength) && void 0 !== ak ? ak : Jk.cc, !0), tk += pB.fb, null !== Xk && (Bk.set(Xk, tk), tk += Xk.byteLength)
            }
            return Bk
          }([Et(kk.name), Et(kk.colour), Et(Fk.name), Et(Fk.colour), Et(Bk)]);
        return null !== ak && (0, ek.rf)(ak, 0, null !== (Rk = kk.id) && void 0 !== Rk ? Rk : ek.Yc, null !== (tk = Fk.id) && void 0 !== tk ? tk : ek.Yc, Xk)
      }
      recorderSession(kk, Fk) {
        this.deps.recorder.session({
          session: Fk,
          lobbyType: kk.lobbyType,
          game: kk.gameNameWithVariation,
          lobby: kk.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.Jtk()
      }
      filePartDone(kk, Fk) {
        this.deps.recorder.filePartDone(kk, Fk)
      }
      fileDone(kk) {
        this.deps.recorder.fileDone(kk)
      }
    }
    const Nt = -2147483648;
    class Ht {
      constructor(kk) {
        var Fk;
        this.deps = kk, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Fk = kk.now) && void 0 !== Fk ? Fk : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var kk, Fk, Bk;
        return null === (kk = null === (Fk = (Bk = this.deps).live) || void 0 === Fk ? void 0 : Fk.call(Bk)) || void 0 === kk || kk
      }
      activated(kk) {
        var Fk, Bk;
        this.live && (this.viewerShown(!0 === (null === (Fk = (Bk = this.deps).viewerOpen) || void 0 === Fk ? void 0 : Fk.call(Bk))), this.deps.client.recorderSession(kk, (0, Yt.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var kk, Fk;
        this.live && (this.state.recording || !0 !== (null === (kk = (Fk = this.deps).viewerOpen) || void 0 === kk ? void 0 : kk.call(Fk))) ? this.deps.client.recorderControl(Jk.mc.ToggleRecording) : this.deps.notify(Wt.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Jk.mc.SaveClip) : this.deps.notify(Wt.d.clippingNotOn)
      }
      viewerShown(kk) {
        this.live && this.deps.client.recorderControl(kk ? Jk.mc.ViewerOpened : Jk.mc.ViewerClosed)
      }
      setPrefs(kk, Fk) {
        this.live && this.deps.client.recorderPrefs(kk, Fk)
      }
      setOption(kk, Fk) {
        this.live && this.deps.client.recorderOption(kk, Fk)
      }
      recordFlyingText(kk, Fk, Bk, Rk) {
        this.live && this.deps.client.recordFlyingText(kk, Fk, Bk, Rk)
      }
      recordPlayerKilled(kk, Fk, Bk, Rk) {
        this.live && this.deps.client.recordPlayerKilled(kk, Fk, Bk, Rk)
      }
      recordKillfeed(kk, Fk, Bk) {
        this.live && this.deps.client.recordKillfeed(kk, Fk, Bk)
      }
      yJ() {
        let kk = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, kk = {
            ...kk,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Fk = Math.floor((this.now() - this.recordingSince) / 1e3);
          Fk !== kk.seconds && (kk = {
            ...kk,
            seconds: Fk
          })
        }
        this.set(kk)
      }
      onEvent(kk) {
        var Fk, Bk;
        const {
          notify: Rk
        } = this.deps, tk = Wt.d;
        switch (kk.what) {
          case Jk.jc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Rk(tk.recordingStarted);
            break;
          case Jk.jc.RecordingStopped:
            this.stopRecording(), Rk(tk.recordingStopped), this.saveState(Jk.wc.Recording, "saving");
            break;
          case Jk.jc.RecordingDiscarded:
            this.stopRecording(), Rk(tk.recordingDiscarded);
            break;
          case Jk.jc.RecordingTurnedOff:
            this.stopRecording(), Rk(tk.recordingTurnedOff);
            break;
          case Jk.jc.LimitReached:
            Rk(tk.limitReached);
            break;
          case Jk.jc.ClipSaved:
            this.saveState(Jk.wc.Clip, "saving");
            break;
          case Jk.jc.ClipEmpty:
            Rk(tk.clipEmpty);
            break;
          case Jk.jc.ClippingNotOn:
            Rk(tk.clippingNotOn);
            break;
          case Jk.jc.Disallowed:
            Rk(tk.disallowed);
            break;
          case Jk.jc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Jk.jc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Jk.jc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Jk.jc.SaveBusy:
            null === (Fk = (Bk = this.deps).onSaveState) || void 0 === Fk || Fk.call(Bk, kk.kind, "busy"), Rk(tk.saveBusy);
            break;
          case Jk.jc.CloseViewerFirst:
            Rk(tk.closeViewerFirst)
        }
      }
      fileReady(kk, Fk) {
        this.deps.download(Fk), this.saveState(kk, "done"), this.deps.notify(kk === Jk.wc.Clip ? Wt.d.clipSaved : Wt.d.recordingSaved)
      }
      failed(kk) {
        this.saveState(kk, "failed"), this.deps.notify(kk === Jk.wc.Clip ? Wt.d.clipFailed : Wt.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(kk, Fk) {
        var Bk, Rk;
        null === (Bk = (Rk = this.deps).onSaveState) || void 0 === Bk || Bk.call(Rk, kk, Fk)
      }
      set(kk) {
        kk !== this.state && (this.state = kk, this.deps.onState(kk))
      }
    }
    const ut = new TextDecoder;

    function Mt(kk, Fk, Bk, Rk) {
      const tk = [];
      for (let ak = 0; ak < Rk; ak++) {
        if (Fk + pB.fb > Bk) return null;
        const Rk = kk.getUint16(Fk, !0);
        if (Fk += pB.fb, Rk !== Jk.cc) {
          if (Fk + Rk > Bk) return null;
          tk.push(ut.decode(new Uint8Array(kk.buffer, kk.byteOffset + Fk, Rk))), Fk += Rk
        } else tk.push(null)
      }
      return Fk === Bk ? tk : null
    }

    function gt(kk, Fk) {
      let Bk = new DataView(new ArrayBuffer(0)),
        Rk = !0;
      const tk = {
        replayFailed: (Fk, Bk) => {
          kk.replayFailed({
            reason: Fk,
            code: Bk
          })
        },
        replayOption: (Fk, tk, ak, Xk) => {
          const bk = function(kk, Fk, Bk, Rk) {
            switch (Fk) {
              case Jk.xc.Cleared:
                return 0 === Rk ? null : void 0;
              case Jk.xc.Text:
                return ut.decode(new Uint8Array(kk.buffer, kk.byteOffset + Bk, Rk));
              case Jk.xc.Int:
                return Rk === Int32Array.BYTES_PER_ELEMENT ? kk.getInt32(Bk, !0) : void 0;
              case Jk.xc.Double:
                return Rk === Float64Array.BYTES_PER_ELEMENT ? kk.getFloat64(Bk, !0) : void 0;
              default:
                return
            }
          }(Bk, tk, ak, Xk);
          void 0 !== bk ? kk.replayOption({
            key: Fk,
            value: bk
          }) : Rk = !1
        },
        replayUiEvent: (Fk, tk, ak, Xk, bk, wk) => {
          const dk = function(kk, Fk, Bk, Rk, tk, ak, Xk) {
            const bk = ak + Xk;
            switch (Fk) {
              case Jk.Bc.FlyingText: {
                const Xk = Mt(kk, ak, bk, 1);
                return null !== Xk && null !== Xk[0] ? {
                  what: Fk,
                  ra: Bk,
                  Ta: Rk,
                  angle: tk,
                  contentJson: Xk[0]
                } : null
              }
              case Jk.Bc.PlayerKilled: {
                const Rk = Mt(kk, ak, bk, 3);
                return Rk ? {
                  what: Fk,
                  killstreak: Bk,
                  dead: Rk[0],
                  killer: Rk[1],
                  withItem: Rk[2]
                } : null
              }
              case Jk.Bc.Killfeed: {
                const Bk = Mt(kk, ak, bk, 7);
                return Bk ? {
                  what: Fk,
                  killerId: Bk[0],
                  killerName: Bk[1],
                  killerColour: Bk[2],
                  victimId: Bk[3],
                  victimName: Bk[4],
                  victimColour: Bk[5],
                  withItem: Bk[6]
                } : null
              }
              default:
                return null
            }
          }(Bk, Fk, tk, ak, Xk, bk, wk);
          null !== dk ? kk.replayUiEvent(dk) : Rk = !1
        },
        replayFilePart: (Bk, tk, ak, Xk) => {
          const bk = Fk();
          ak + Xk > bk.byteLength ? Rk = !1 : kk.filePart(Bk, tk, new Uint8Array(bk, ak, Xk).slice())
        },
        replayFileReady: (Fk, Bk, Rk, tk) => {
          kk.fileReady({
            save: Fk,
            kind: Bk,
            parts: Rk,
            bytes: tk
          })
        },
        recorderEvent: (Fk, Bk, Rk) => {
          kk.recorderEvent({
            what: Fk,
            kind: Bk,
            save: Rk
          })
        },
        replayOpened: (Fk, Rk, tk) => {
          kk.replayOpened(ut.decode(new Uint8Array(Bk.buffer, Bk.byteOffset + Rk, tk)))
        }
      };
      return (kk, Fk, ak, Xk) => !(kk < Jk.M.ReplayFailed || kk > Jk.M.RecorderEvent) && (Bk = Fk, Rk = !0, (0, ek.ke)(kk, Fk, ak, Xk, tk) && Rk)
    }

    function Ut(kk) {
      let Fk = null;
      const Bk = gt(kk, (() => {
        if (null === Fk) throw new Error("a recorder event read outside recorderEventReader's call");
        return Fk.buffer
      }));
      return (kk, Rk) => {
        Fk = Rk;
        try {
          ! function(kk, Fk) {
            const Bk = kk.slice(),
              Rk = new DataView(Bk.buffer);
            for (let tk = 0; tk < Bk.byteLength;) {
              if (tk + Jk.K > Bk.byteLength) throw new Error(`the recorder module's events end mid-head at ${tk}`);
              const kk = Rk.getUint32(tk, !0),
                ak = 65535 & kk,
                Xk = kk >>> 16,
                bk = tk + Jk.K;
              if (bk + Xk > Bk.byteLength || !Fk(ak, Rk, bk, Xk)) throw new Error(`the recorder module wrote a malformed event ${ak} (${Xk} bytes) at ${tk}`);
              tk = bk + (0, Jk.td)(Xk)
            }
          }(kk, Bk)
        } finally {
          Fk = null
        }
      }
    }
    class ct {
      constructor(kk, Fk) {
        this.acks = kk, this.handlers = Fk, this.parts = new Map
      }
      onPart(kk, Fk, Bk) {
        let Rk = this.parts.get(kk);
        Rk || (Rk = [], this.parts.set(kk, Rk)), Rk[Fk] = Bk, this.acks.filePartDone(kk, Fk)
      }
      onReady(kk) {
        var Fk;
        const Bk = null !== (Fk = this.parts.get(kk.save)) && void 0 !== Fk ? Fk : [];
        this.parts.delete(kk.save);
        const Rk = function(kk, Fk, Bk) {
          if (kk.length !== Fk) return null;
          let Rk = 0;
          for (let Xk = 0; Xk < Fk; Xk++) {
            if (void 0 === kk[Xk]) return null;
            Rk += kk[Xk].byteLength
          }
          if (Rk !== Bk) return null;
          if (1 === Fk) return kk[0];
          const tk = new Uint8Array(Bk);
          let ak = 0;
          for (const Xk of kk) tk.set(Xk, ak), ak += Xk.byteLength;
          return tk
        }(Bk, kk.parts, kk.bytes);
        this.acks.fileDone(kk.save), null === Rk ? this.handlers.fileIncomplete(kk.save, kk.kind) : this.handlers.fileReady(kk.save, kk.kind, Rk)
      }
      onDiscarded(kk) {
        this.parts.delete(kk)
      }
    }

    function Gt() {
      return Bk.e(57).then((() => Bk(42025)))
    }
    class Tt {
      constructor(kk) {
        this.deps = kk, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Fk
        } = kk;
        this.recorder = new Ht({
          client: Fk,
          live: () => {
            var kk;
            return !0 !== (null === (kk = this.viewer) || void 0 === kk ? void 0 : kk.inPlayback)
          },
          viewerOpen: kk.viewerOpen,
          notify: kk.notify,
          download: Fk => {
            var Bk;
            null === (Bk = kk.download) || void 0 === Bk || Bk.call(kk, Fk)
          },
          onState: kk.onRecorderState,
          onSaveState: kk.onSaveState
        }), this.parts = new ct(Fk, {
          fileReady: (kk, Fk, Bk) => {
            var Rk;
            Fk === Jk.wc.Edited ? null === (Rk = this.viewer) || void 0 === Rk || Rk.saveDone(Bk) : this.recorder.fileReady(Fk, Bk)
          },
          fileIncomplete: (kk, Fk) => {
            this.saveFailed(Fk)
          }
        });
        const Bk = {
          replayFailed: kk => {
            var Fk;
            null === (Fk = this.viewer) || void 0 === Fk || Fk.onFailed(kk)
          },
          replayOption: Fk => {
            var Bk;
            null === (Bk = kk.onReplayOption) || void 0 === Bk || Bk.call(kk, Fk)
          },
          replayUiEvent: Fk => {
            var Bk;
            null === (Bk = kk.onReplayUiEvent) || void 0 === Bk || Bk.call(kk, Fk)
          },
          filePart: (kk, Fk, Bk) => {
            this.parts.onPart(kk, Fk, Bk)
          },
          fileReady: kk => {
            this.parts.onReady(kk)
          },
          replayOpened: Fk => {
            var Bk;
            null === (Bk = kk.onReplayOpened) || void 0 === Bk || Bk.call(kk, Fk)
          },
          recorderEvent: kk => {
            var Fk;
            switch (kk.what) {
              case Jk.jc.FileDiscarded:
                this.parts.onDiscarded(kk.save);
                break;
              case Jk.jc.SaveFailed:
                this.saveFailed(kk.kind);
                break;
              case Jk.jc.SaveBusy:
                if (null !== (Fk = this.viewer) && void 0 !== Fk && Fk.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(kk);
                break;
              default:
                this.recorder.onEvent(kk)
            }
          }
        };
        this.sink = function(kk, Fk) {
          return {
            onReplayEvent: gt(kk, Fk)
          }
        }(Bk, kk.buffer), this.recorderEvents = Ut(Bk)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var kk;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (kk = this.deps.loadViewer) && void 0 !== kk ? kk : Gt)().catch((kk => {
          throw this.viewerChunk = null, kk
        })), this.viewerChunk.then((kk => (this.viewer ??= new kk.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var kk, Fk;
            null === (kk = (Fk = this.deps).onViewerChange) || void 0 === kk || kk.call(Fk)
          }
        }), this.viewer))))
      }
      activated(kk) {
        this.recorder.activated(kk)
      }
      afterFrame(kk) {
        try {
          kk > 0 && this.recorder.yJ()
        } finally {
          var Fk;
          null === (Fk = this.viewer) || void 0 === Fk || Fk.afterFrame()
        }
      }
      end() {
        var kk;
        null === (kk = this.viewer) || void 0 === kk || kk.end()
      }
      saveFailed(kk) {
        var Fk;
        kk === Jk.wc.Edited ? null === (Fk = this.viewer) || void 0 === Fk || Fk.saveFailed(!1) : this.recorder.failed(kk)
      }
    }
    var rt = Bk(40043),
      Dt = Bk(40063),
      zt = Bk(4533),
      Pt = Bk(40427);
    class ht {
      constructor(kk) {
        this.deps = kk, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(kk, Fk) {
        if (!this.deps.live() || 0 === kk && 0 === Fk) return;
        const Bk = (0, Dk.n)(0, performance.now()),
          Rk = this.deps.dragScale();
        (0, Pt.g)((() => {
          (0, Dk.u)(Jk.hb.MouseDown, 0, 0, 0, Bk), (0, Dk.u)(Jk.hb.MouseMove, 0, kk * Rk, Fk * Rk, 0), (0, Dk.u)(Jk.hb.MouseUp, 0, 0, 0, Bk)
        }))
      }
      move(kk) {
        var Fk, Bk;
        this.analogue[0] = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.x) && void 0 !== Fk ? Fk : 0, this.analogue[1] = null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.y) && void 0 !== Bk ? Bk : 0, this.send()
      }
      holdVertical(kk, Fk) {
        const Bk = "freeCamUp" === kk ? ek.cc.Up : ek.cc.Down;
        this.keys = Fk ? this.keys | Bk : this.keys & ~Bk, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const kk = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== kk && !(0, ek.ve)(kk, 0, this.analogue, this.keys)
      }
    }
    var qt = Bk(687),
      Ct = Bk(271),
      Zt = Bk(98),
      pt = Bk(8918);

    function Kt() {
      const kk = Rk.c.get("clientEscMenuOptions"),
        Fk = (0, qt.p)(kk);
      return {
        mouse: (0, Zt.isMobile)() ? Fk : kk.mouseSensitivity,
        touch: Fk,
        fovPercent: kk.cameraFOV
      }
    }

    function xt() {
      const kk = Rk.c.get("clientEscMenuOptions"),
        Fk = Rk.c.get("isTouchScreen") ? (0, qt.p)(kk) : kk.mouseSensitivity,
        Bk = Kt().mouse;
      return Bk > 0 ? Fk / Bk : 1
    }

    function jt(kk) {
      const Fk = () => {
        kk.setSoundPrefs(Rk.c.get("soundVolume"), Rk.c.get("soundOnFromAd"))
      };
      let Bk = null;
      const tk = () => {
        const {
          showFog: Fk,
          enableLighting: tk,
          fogChunkDistance: ak,
          chunkFadeIn: Xk
        } = Rk.c.get("clientEscMenuOptions"), bk = {
          showFog: Fk,
          lighting: tk,
          fogChunks: ak,
          chunkFade: Xk
        };
        Bk && (0, Jk.jd)(Bk) === (0, Jk.jd)(bk) && Bk.fogChunks === ak || (Bk = bk, kk.setEnvPrefs(Bk))
      };
      let ak = null;
      const bk = () => {
        const Fk = function() {
          const kk = Rk.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: Rk.c.get("areNametagsHidden"),
            crouchToggle: kk.crouchIsToggle,
            bhopDisabled: kk.disableBunnyHopping,
            disableBobbing: kk.disableBobbing,
            ezTowering: kk.ezTowering && (0, Ct.e)(),
            ezBridging: kk.ezBridging,
            showChunkBorders: kk.showChunkBorders,
            nametagCutDistance: (0, pt.e)()
          }
        }();
        (0, Nk.ge)(ak, Fk) || (ak = Fk, kk.setUiPrefs(Fk))
      };
      let wk = null;
      const dk = () => {
        const Fk = Kt();
        (0, Nk.ge)(wk, Fk) || (wk = Fk, kk.setLookPrefs(Fk))
      };
      Fk(), tk(), bk(), dk();
      const sk = [(0, Xk.p)("appManagerUpdated|soundVolume", Fk), (0, Xk.p)("appManagerUpdated|soundOnFromAd", Fk), (0, Xk.p)("appManagerUpdated|clientEscMenuOptions", (() => {
        tk(), bk(), dk()
      })), (0, Xk.p)("appManagerUpdated|areNametagsHidden", bk), (0, Xk.p)("appManagerUpdated|showDistantNametags", bk)];
      return () => {
        for (const kk of sk) kk()
      }
    }
    var lt = Bk(40342),
      nt = Bk(40346);
    var It = (0, nt.c)("lend"),
      Qt = (0, nt.c)("starting"),
      ka = (0, nt.c)("generation"),
      Fa = (0, nt.c)("end");
    class Ba {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, Fa, {
          value: Ra
        }), Object.defineProperty(this, It, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qt, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ka, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, lt.b)(this, It)[It] || (0, lt.b)(this, Qt)[Qt]
      }
      async start(kk) {
        if (this.active) return "busy";
        const Fk = (0, lt.b)(this, ka)[ka];
        (0, lt.b)(this, Qt)[Qt] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, lt.b)(this, Qt)[Qt] = !1
        }
        if (Fk !== (0, lt.b)(this, ka)[ka]) return "refused";
        const Bk = this.deps.beginSave();
        if (!Bk) return "refused";
        const Rk = Number(BigInt.asUintN(32, kk)),
          tk = Number(BigInt.asUintN(32, kk >> 32n));
        let ak = "refused";
        return this.deps.recorderCall(((kk, Fk) => {
          const Xk = Bk.editState,
            bk = kk.stage(Xk.length);
          0 !== bk ? (new Uint8Array(Fk.buffer, bk, Xk.length).set(Xk), kk.Atk(Bk.headLen, Rk, tk) && (ak = "sealing")) : ak = "tooLarge"
        }), !0), "sealing" !== ak ? (Bk.end(), ak) : ((0, lt.b)(this, It)[It] = Bk, "sealing")
      }
      beforeRecorderStep() {
        const kk = (0, lt.b)(this, It)[It];
        if (!kk) return null;
        let Fk = -1,
          Bk = 0;
        if (!this.deps.recorderCall((kk => {
            Fk = kk.etk(), Fk > 0 && (Bk = kk.ytk())
          }))) return (0, lt.b)(this, Fa)[Fa](kk, "stopped");
        if (Fk < 0) return (0, lt.b)(this, Fa)[Fa](kk, "read");
        if (0 === Fk) return null;
        const Rk = kk.head(Bk, Fk);
        let tk = !1;
        if (Rk && this.deps.recorderCall(((kk, Bk) => {
            const ak = kk.stage(Fk);
            0 !== ak && (new Uint8Array(Bk.buffer, ak, Fk).set(Rk), tk = !0)
          }), !0), tk) return null;
        const ak = kk.givenUp();
        this.deps.recorderCall((kk => {
          kk.ftk()
        }));
        const Xk = (0, lt.b)(this, Fa)[Fa](kk, ak ? "givenUp" : "stopped");
        return ak && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Xk
      }
      stop() {
        (0, lt.b)(this, ka)[ka]++;
        const kk = (0, lt.b)(this, It)[It];
        kk && (this.deps.recorderCall((kk => {
          kk.ftk()
        })), (0, lt.b)(this, Fa)[Fa](kk, "stopped"))
      }
    }

    function Ra(kk, Fk) {
      return (0, lt.b)(this, It)[It] = null, kk.end(), Fk
    }

    function ta(kk, Fk) {
      const Bk = new Uint8Array(4),
        Rk = new DataView(Bk.buffer);
      return Rk.setUint8(0, kk ? 1 : 0), Rk.setUint16(2, Math.max(0, Math.min(65535, Math.round(Fk))), !0), Bk
    }

    function aa(kk, Fk) {
      return kk > function(kk) {
        return 16777216 + 314572.8 * Math.max(0, kk)
      }(Fk) + 33554432
    }
    let Xa = null;

    function ba(kk) {
      return Xa ??= async function(kk) {
        const Fk = kk.loadInFlight();
        Fk && await Fk.catch((() => {}));
        if (kk.trapped()) return "trapped";
        if (kk.busy() || !aa(kk.memoryBytes(), kk.clipSeconds())) return "lA";
        kk.unload();
        let Bk = !1;
        try {
          Bk = await kk.load()
        } catch {
          Bk = !1
        }
        if (!Bk) return kk.trapped() ? "trapped" : kk.Te() ? "Te" : "failed";
        return "recycled"
      }(kk).finally((() => {
        Xa = null
      })), Xa
    }
    const wa = "Replay recording couldn't load, so try again.",
      da = new Set([Jk.mc.ToggleRecording, Jk.mc.SaveClip]);
    var sa = (0, nt.c)("bindings"),
      Va = (0, nt.c)("module"),
      Ja = (0, nt.c)("memory"),
      Aa = (0, nt.c)("trapped"),
      ea = (0, nt.c)("Te"),
      ya = (0, nt.c)("recycleDue"),
      fa = (0, nt.c)("loading"),
      ma = (0, nt.c)("generation"),
      Wa = (0, nt.c)("viewDrawn"),
      va = (0, nt.c)("clip"),
      ia = (0, nt.c)("session"),
      Ya = (0, nt.c)("control"),
      oa = (0, nt.c)("deferred"),
      La = (0, nt.c)("coreU8"),
      Oa = (0, nt.c)("coreU32"),
      Ea = (0, nt.c)("moduleU8"),
      Sa = (0, nt.c)("edited"),
      Na = (0, nt.c)("sendSession"),
      Ha = (0, nt.c)("checkNotInEvents"),
      ua = (0, nt.c)("clipping"),
      Ma = (0, nt.c)("busy"),
      ga = (0, nt.c)("use"),
      Ua = (0, nt.c)("ensureLoaded"),
      ca = (0, nt.c)("loadOnce"),
      Ga = (0, nt.c)("recycleAfterStep"),
      Ta = (0, nt.c)("settleRecycle"),
      ra = (0, nt.c)("load"),
      Da = (0, nt.c)("attach"),
      za = (0, nt.c)("resendHeld"),
      Pa = (0, nt.c)("recycle"),
      ha = (0, nt.c)("send"),
      qa = (0, nt.c)("unload"),
      Ca = (0, nt.c)("dropModule"),
      Za = (0, nt.c)("coreBytes"),
      pa = (0, nt.c)("coreWords"),
      Ka = (0, nt.c)("moduleBytes"),
      xa = (0, nt.c)("loadFailed"),
      ja = (0, nt.c)("call"),
      la = (0, nt.c)("guard"),
      na = (0, nt.c)("trapOn");
    class Ia {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, na, {
          value: YX
        }), Object.defineProperty(this, la, {
          value: iX
        }), Object.defineProperty(this, ja, {
          value: vX
        }), Object.defineProperty(this, xa, {
          value: WX
        }), Object.defineProperty(this, Ka, {
          value: mX
        }), Object.defineProperty(this, pa, {
          value: fX
        }), Object.defineProperty(this, Za, {
          value: yX
        }), Object.defineProperty(this, Ca, {
          value: eX
        }), Object.defineProperty(this, qa, {
          value: AX
        }), Object.defineProperty(this, ha, {
          value: JX
        }), Object.defineProperty(this, Pa, {
          value: VX
        }), Object.defineProperty(this, za, {
          value: sX
        }), Object.defineProperty(this, Da, {
          value: dX
        }), Object.defineProperty(this, ra, {
          value: wX
        }), Object.defineProperty(this, Ta, {
          value: bX
        }), Object.defineProperty(this, Ga, {
          value: XX
        }), Object.defineProperty(this, ca, {
          value: aX
        }), Object.defineProperty(this, Ua, {
          value: tX
        }), Object.defineProperty(this, ga, {
          value: RX
        }), Object.defineProperty(this, Ma, {
          value: BX
        }), Object.defineProperty(this, ua, {
          value: FX
        }), Object.defineProperty(this, Ha, {
          value: kX
        }), Object.defineProperty(this, Na, {
          value: Qa
        }), Object.defineProperty(this, sa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Va, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ja, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Aa, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ea, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ya, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ma, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Wa, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, va, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ia, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ya, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, La, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Oa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ea, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Sa, {
          writable: !0,
          value: void 0
        }), (0, lt.b)(this, Sa)[Sa] = new Ba({
          ensureLoaded: () => (0, lt.b)(this, Ua)[Ua](),
          recorderCall: (kk, Fk) => {
            Fk && (0, lt.b)(this, Ha)[Ha]("an edited save's stage");
            const Bk = (0, lt.b)(this, ja)[ja](((Fk, Bk) => (kk(Fk, Bk), !0)));
            return null !== Bk && void 0 !== Bk && Bk
          },
          beginSave: kk.beginSave,
          givenUp: kk.givenUp
        })
      }
      get active() {
        return null !== (0, lt.b)(this, Va)[Va]
      }
      get trapped() {
        return (0, lt.b)(this, Aa)[Aa]
      }
      get loading() {
        return null !== (0, lt.b)(this, fa)[fa]
      }
      prefetch() {
        (0, lt.b)(this, ea)[ea] || (0, lt.b)(this, Aa)[Aa] || (0, lt.b)(this, Va)[Va] || (0, lt.b)(this, fa)[fa] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, lt.b)(this, Wa)[Wa] = !0, (0, lt.b)(this, ua)[ua]() && (0, lt.b)(this, ga)[ga]()
      }
      prefs(kk, Fk) {
        (0, lt.b)(this, va)[va] = {
          on: kk,
          seconds: Fk
        }, (0, lt.b)(this, ha)[ha](Jk.ic.Prefs, ta(kk, Fk)), kk && (0, lt.b)(this, Wa)[Wa] && (0, lt.b)(this, ga)[ga]()
      }
      control(kk) {
        const Fk = function(kk) {
          return new Uint8Array([kk, 0, 0, 0])
        }(kk);
        if (da.has(kk)) return (0, lt.b)(this, Va)[Va] ? void(0, lt.b)(this, ha)[ha](Jk.ic.Control, Fk) : ((0, lt.b)(this, Ya)[Ya] = Fk, void(0, lt.b)(this, ga)[ga]());
        (0, lt.b)(this, ea)[ea] || this.deps.coreCommand(Jk.ic.Control, Fk)
      }
      session(kk) {
        (0, lt.b)(this, ia)[ia] = kk, (0, lt.b)(this, Na)[Na](kk)
      }
      filePartDone(kk, Fk) {
        (0, lt.b)(this, ha)[ha](Jk.ic.FilePartDone, function(kk, Fk) {
          const Bk = new Uint8Array(8),
            Rk = new DataView(Bk.buffer);
          return Rk.setUint32(0, kk, !0), Rk.setUint32(4, Fk, !0), Bk
        }(kk, Fk))
      }
      fileDone(kk) {
        return (0, lt.b)(this, ha)[ha](Jk.ic.FileDone, function(kk) {
          const Fk = new Uint8Array(4);
          return new DataView(Fk.buffer).setUint32(0, kk, !0), Fk
        }(kk)), (0, lt.b)(this, Ga)[Ga]()
      }
      saveEdited(kk) {
        return (0, lt.b)(this, Ha)[Ha]("saveEdited"), (0, lt.b)(this, Sa)[Sa].start(kk)
      }
      afterFrame() {
        if (!(0, lt.b)(this, Va)[Va]) return;
        "read" === (0, lt.b)(this, Sa)[Sa].beforeRecorderStep() && (0, lt.b)(this, Ga)[Ga]();
        const kk = (0, lt.b)(this, ya)[ya];
        (0, lt.b)(this, ya)[ya] = null;
        const Fk = (0, lt.b)(this, Va)[Va],
          Bk = (0, lt.b)(this, Ja)[Ja];
        if (!Fk || !Bk) return void(null === kk || void 0 === kk || kk.resolve((0, lt.b)(this, Aa)[Aa] ? "trapped" : "lA"));
        const {
          core: Rk
        } = this.deps, tk = Rk.vtk(2);
        let ak, Xk, bk, wk, dk = 0,
          sk = 0;
        if (0 !== tk) {
          var Vk, Jk;
          const kk = (0, lt.b)(this, pa)[pa]();
          dk = null !== (Vk = kk[tk >>> 2]) && void 0 !== Vk ? Vk : 0, sk = null !== (Jk = kk[1 + (tk >>> 2)]) && void 0 !== Jk ? Jk : 0
        }
        try {
          if (sk > 0) {
            const kk = Fk.feed(sk);
            0 !== kk && (0, lt.b)(this, Ka)[Ka](Bk).set((0, lt.b)(this, Za)[Za]().subarray(dk, dk + sk), kk)
          }
          ak = Fk.step(), Xk = Fk.itk(), bk = Fk.Ytk(), wk = Fk.otk()
        } catch (Ak) {
          if (!(0, lt.b)(this, na)[na](Ak)) throw null === kk || void 0 === kk || kk.resolve("lA"), Ak;
          return void(null === kk || void 0 === kk || kk.resolve("trapped"))
        }
        if (ak > 0) {
          const kk = Rk.Ltk(2, ak);
          0 !== kk && (0, lt.b)(this, Za)[Za]().set((0, lt.b)(this, Ka)[Ka](Bk).subarray(Xk, Xk + ak), kk)
        }
        if (bk > 0) {
          (0, lt.b)(this, oa)[oa] = [];
          try {
            this.deps.events(new Uint8Array(Bk.buffer, wk, bk), Bk)
          } catch (Ak) {
            throw null === kk || void 0 === kk || kk.resolve("lA"), Ak
          } finally {
            const kk = (0, lt.b)(this, oa)[oa];
            (0, lt.b)(this, oa)[oa] = null;
            for (const [Fk, Bk] of kk)(0, lt.b)(this, ha)[ha](Fk, Bk)
          }
        }
        if (!(0, lt.b)(this, ua)[ua]() && !(0, lt.b)(this, Ma)[Ma]()) return (0, lt.b)(this, qa)[qa](), void(null === kk || void 0 === kk || kk.resolve("lA"));
        null === kk || void 0 === kk || kk.resolve((0, lt.b)(this, Pa)[Pa]())
      }
      dispose() {
        (0, lt.b)(this, ea)[ea] = !0, (0, lt.b)(this, qa)[qa]()
      }
    }

    function Qa(kk) {
      (0, lt.b)(this, ha)[ha](Jk.ic.Session, function(kk) {
        const Fk = new TextEncoder,
          Bk = Fk.encode(kk.game).subarray(0, 65535),
          Rk = Fk.encode(kk.lobby).subarray(0, 65535),
          tk = new Uint8Array(22 + Bk.length + 2 + Rk.length),
          ak = new DataView(tk.buffer);
        ak.setFloat64(0, kk.unixMs, !0), ak.setBigUint64(8, BigInt.asUintN(64, kk.session), !0), ak.setUint8(16, kk.lobbyType);
        let Xk = 20;
        for (const bk of [Bk, Rk]) ak.setUint16(Xk, bk.length, !0), tk.set(bk, Xk + 2), Xk += 2 + bk.length;
        return tk
      }({
        ...kk,
        unixMs: this.deps.unixNow()
      }))
    }

    function kX(kk) {
      false
    }

    function FX() {
      var kk, Fk;
      return null !== (kk = null === (Fk = (0, lt.b)(this, va)[va]) || void 0 === Fk ? void 0 : Fk.on) && void 0 !== kk && kk
    }

    function BX() {
      const kk = (0, lt.b)(this, Va)[Va];
      let Fk = !0;
      if (kk) try {
        Fk = kk.busy()
      } catch (Bk) {
        if (!(0, lt.b)(this, na)[na](Bk)) throw Bk
      }
      return Fk || (0, lt.b)(this, Sa)[Sa].active
    }
    async function RX() {
      !(0, lt.b)(this, ea)[ea] && this.deps.allowed() ? await (0, lt.b)(this, Ua)[Ua]() : (0, lt.b)(this, Ya)[Ya] = null
    }

    function tX() {
      return (0, lt.b)(this, Aa)[Aa] || (0, lt.b)(this, ea)[ea] ? Promise.resolve(!1) : (0, lt.b)(this, Va)[Va] ? Promise.resolve(!0) : ((0, lt.b)(this, fa)[fa] ??= (0, lt.b)(this, ca)[ca](), (0, lt.b)(this, fa)[fa])
    }
    async function aX() {
      let kk = !1;
      try {
        return kk = await (0, lt.b)(this, ra)[ra](), kk
      } finally {
        kk || ((0, lt.b)(this, Ya)[Ya] = null), (0, lt.b)(this, fa)[fa] = null
      }
    }

    function XX() {
      if (!(0, lt.b)(this, Va)[Va]) return Promise.resolve((0, lt.b)(this, Aa)[Aa] ? "trapped" : "lA");
      if (!(0, lt.b)(this, ya)[ya]) {
        let kk = () => {};
        const Fk = new Promise((Fk => {
          kk = Fk
        }));
        (0, lt.b)(this, ya)[ya] = {
          promise: Fk,
          resolve: kk
        }
      }
      return (0, lt.b)(this, ya)[ya].promise
    }

    function bX(kk) {
      const Fk = (0, lt.b)(this, ya)[ya];
      (0, lt.b)(this, ya)[ya] = null, null === Fk || void 0 === Fk || Fk.resolve(kk)
    }
    async function wX() {
      let kk = (0, lt.b)(this, sa)[sa];
      if (!kk) {
        const Fk = (0, lt.b)(this, ma)[ma];
        try {
          kk = await this.deps.load()
        } catch (Bk) {
          return Fk === (0, lt.b)(this, ma)[ma] && await (0, lt.b)(this, xa)[xa](Bk), !1
        }
        if (Fk !== (0, lt.b)(this, ma)[ma]) return this.deps.unload(), !1;
        const Rk = kk,
          tk = (0, lt.b)(this, la)[la]((() => Rk.Otk()));
        if (void 0 === tk) return !1;
        const ak = this.deps.core.Etk();
        if (tk !== ak) return await (0, lt.b)(this, xa)[xa](new Error(`recorder port version ${tk}, the core's ${ak}`)), !1;
        (0, lt.b)(this, sa)[sa] = kk
      }
      const Fk = kk;
      try {
        if (!(0, lt.b)(this, la)[la]((() => ((0, lt.b)(this, Va)[Va] = new Fk.Stk, (0, lt.b)(this, Ja)[Ja] = Fk.mtk(), !0)))) return !1;
        (0, lt.b)(this, za)[za]();
        const kk = (0, lt.b)(this, Ya)[Ya];
        return (0, lt.b)(this, Ya)[Ya] = null, kk && (0, lt.b)(this, ha)[ha](Jk.ic.Control, kk), (0, lt.b)(this, Da)[Da]()
      } catch (Bk) {
        return (0, lt.b)(this, qa)[qa](), await (0, lt.b)(this, xa)[xa](Bk), !1
      }
    }

    function dX() {
      return this.deps.core.Ntk(0), 1 === this.deps.core.Ntk(1) || ((0, lt.b)(this, qa)[qa](), this.deps.failed(wa), !1)
    }

    function sX() {
      (0, lt.b)(this, va)[va] && (0, lt.b)(this, ha)[ha](Jk.ic.Prefs, ta((0, lt.b)(this, va)[va].on, (0, lt.b)(this, va)[va].seconds)), (0, lt.b)(this, ia)[ia] && (0, lt.b)(this, Na)[Na]((0, lt.b)(this, ia)[ia])
    }

    function VX() {
      return ba({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var kk, Fk;
          return null !== (kk = null === (Fk = (0, lt.b)(this, va)[va]) || void 0 === Fk ? void 0 : Fk.seconds) && void 0 !== kk ? kk : 0
        },
        trapped: () => (0, lt.b)(this, Aa)[Aa],
        busy: () => (0, lt.b)(this, Ma)[Ma](),
        loadInFlight: () => (0, lt.b)(this, fa)[fa],
        Te: () => (0, lt.b)(this, ea)[ea],
        unload: () => {
          (0, lt.b)(this, qa)[qa]()
        },
        load: () => (0, lt.b)(this, Ua)[Ua]()
      })
    }

    function JX(kk, Fk) {
      (0, lt.b)(this, oa)[oa] ? (0, lt.b)(this, oa)[oa].push([kk, Fk]): (0, lt.b)(this, ja)[ja](((Bk, Rk) => {
        const tk = Bk.Wtk(Fk.length);
        0 !== tk && (new Uint8Array(Rk.buffer, tk, Fk.length).set(Fk), Bk.command(kk, Fk.length))
      }))
    }

    function AX() {
      (0, lt.b)(this, ma)[ma]++, (0, lt.b)(this, Ta)[Ta]("lA"), (0, lt.b)(this, Sa)[Sa].stop(), this.deps.core.Ntk(0), (0, lt.b)(this, Ca)[Ca](), (0, lt.b)(this, Aa)[Aa] || ((0, lt.b)(this, sa)[sa] = null, this.deps.unload())
    }

    function eX() {
      (0, lt.b)(this, ja)[ja]((kk => {
        kk.free()
      })), (0, lt.b)(this, Va)[Va] = null, (0, lt.b)(this, Ja)[Ja] = null, (0, lt.b)(this, Ea)[Ea] = null
    }

    function yX() {
      var kk;
      const Fk = this.deps.coreBuffer();
      return (null === (kk = (0, lt.b)(this, La)[La]) || void 0 === kk ? void 0 : kk.buffer) !== Fk && ((0, lt.b)(this, La)[La] = new Uint8Array(Fk)), (0, lt.b)(this, La)[La]
    }

    function fX() {
      var kk;
      const Fk = this.deps.coreBuffer();
      return (null === (kk = (0, lt.b)(this, Oa)[Oa]) || void 0 === kk ? void 0 : kk.buffer) !== Fk && ((0, lt.b)(this, Oa)[Oa] = new Uint32Array(Fk, 0, Fk.byteLength >>> 2)), (0, lt.b)(this, Oa)[Oa]
    }

    function mX(kk) {
      var Fk;
      const Bk = kk.buffer;
      return (null === (Fk = (0, lt.b)(this, Ea)[Ea]) || void 0 === Fk ? void 0 : Fk.buffer) !== Bk && ((0, lt.b)(this, Ea)[Ea] = new Uint8Array(Bk)), (0, lt.b)(this, Ea)[Ea]
    }
    async function WX(kk) {
      await this.deps.staleOr(kk, (() => {
        this.deps.failed(wa)
      }))
    }

    function vX(kk) {
      const Fk = (0, lt.b)(this, Va)[Va],
        Bk = (0, lt.b)(this, Ja)[Ja];
      if (Fk && Bk) return (0, lt.b)(this, la)[la]((() => kk(Fk, Bk)))
    }

    function iX(kk) {
      if (!(0, lt.b)(this, Aa)[Aa]) try {
        return kk()
      } catch (Fk) {
        if (!(0, lt.b)(this, na)[na](Fk)) throw Fk;
        return
      }
    }

    function YX(kk) {
      return kk instanceof WebAssembly.RuntimeError && ((0, lt.b)(this, Aa)[Aa] = !0, (0, lt.b)(this, Va)[Va] = null, (0, lt.b)(this, Ja)[Ja] = null, (0, lt.b)(this, Ea)[Ea] = null, (0, lt.b)(this, sa)[sa] = null, (0, lt.b)(this, Ya)[Ya] = null, (0, lt.b)(this, Ta)[Ta]("trapped"), this.deps.core.Ntk(0), (0, lt.b)(this, Sa)[Sa].stop(), this.deps.crash(this.deps.markTrapped(kk)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var oX = Bk(38290);
    const LX = new Map([
      ["skyblock", () => Bk.e(49).then((() => Bk(38286)))]
    ]);

    function OX(kk) {
      const Fk = LX.get(kk);
      return Fk ? Fk().then((() => {
        const Fk = (0, oX.c)(kk);
        if (!Fk) throw new Error(`${kk}'s replay hook module registered no hook`);
        return Fk
      })) : null
    }
    class EX {
      constructor(kk) {
        this.deps = kk, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(kk) {
        if (this.pending.clear(), kk === this.game && null !== this.hook) return void(this.all = !0);
        const Fk = ++this.generation;
        this.game = kk, this.hook = null, this.all = !1;
        const Bk = this.deps.loadHook(kk);
        null === Bk || void 0 === Bk || Bk.then((kk => {
          Fk === this.generation && (this.hook = kk, this.all = !0)
        }), (kk => {
          Fk === this.generation && this.deps.onError(kk)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(kk) {
        null === this.hook || this.all || this.pending.set(kk, !0)
      }
      entityInfoChanged(kk) {
        null === this.hook || this.all || this.pending.has(kk) || this.pending.set(kk, !1)
      }
      flush(kk) {
        const {
          hook: Fk
        } = this;
        if (null === Fk || !kk || !this.all && 0 === this.pending.size) return;
        const Bk = this.deps.cmd();
        if (null === Bk) return;
        const {
          api: Rk
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: kk,
            count: Fk
          } = rB(Rk, this.ids);
          this.ids = kk;
          for (let Bk = 0; Bk < Fk; Bk++) this.pending.set(kk[Bk], !0)
        }
        const tk = this.ids = DB(this.ids, this.pending.size);
        let ak = 0;
        for (const dk of this.pending.keys()) tk[ak++] = dk;
        const Xk = [],
          bk = zB(Rk, tk, ak, ((kk, Fk) => {
            null !== Fk && Xk.push({
              serverId: kk,
              info: Fk,
              spawned: !0 === this.pending.get(kk)
            })
          }));
        if (bk) {
          this.pending.clear();
          for (const {
              serverId: kk,
              info: Rk,
              spawned: tk
            }
            of Xk) try {
            Fk(Rk, {
              setFacingTolerance: Fk => {
                null === Fk && tk || XB(Bk, kk, Fk) || this.pending.set(kk, tk)
              }
            })
          } catch (wk) {
            this.deps.onError(wk)
          }
        }
      }
    }
    var SX = (0, nt.c)("bindings"),
      NX = (0, nt.c)("module"),
      HX = (0, nt.c)("memory"),
      uX = (0, nt.c)("trapped"),
      MX = (0, nt.c)("generation"),
      gX = (0, nt.c)("loading"),
      UX = (0, nt.c)("lend"),
      cX = (0, nt.c)("givenUp"),
      GX = (0, nt.c)("afterSave"),
      TX = (0, nt.c)("opens"),
      rX = (0, nt.c)("saveAskedAt"),
      DX = (0, nt.c)("unload"),
      zX = (0, nt.c)("dropModule"),
      PX = (0, nt.c)("loadFailed"),
      hX = (0, nt.c)("saveReadsBody"),
      qX = (0, nt.c)("command"),
      CX = (0, nt.c)("call"),
      ZX = (0, nt.c)("guard"),
      pX = (0, nt.c)("trapOn");
    class KX {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, pX, {
          value: Fb
        }), Object.defineProperty(this, ZX, {
          value: kb
        }), Object.defineProperty(this, CX, {
          value: QX
        }), Object.defineProperty(this, qX, {
          value: IX
        }), Object.defineProperty(this, hX, {
          get: nX,
          set: void 0
        }), Object.defineProperty(this, PX, {
          value: lX
        }), Object.defineProperty(this, zX, {
          value: jX
        }), Object.defineProperty(this, DX, {
          value: xX
        }), Object.defineProperty(this, SX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uX, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, MX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, gX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, UX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GX, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, TX, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, rX, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, lt.b)(this, NX)[NX] && null === (0, lt.b)(this, GX)[GX]
      }
      async open(kk) {
        if ((0, lt.b)(this, uX)[uX]) return Jk.sc.ModuleTrap;
        let Fk = (0, lt.b)(this, SX)[SX];
        if (!Fk) {
          const kk = (0, lt.b)(this, MX)[MX];
          (0, lt.b)(this, gX)[gX]++;
          try {
            Fk = await this.deps.load()
          } catch (Rk) {
            return (0, lt.b)(this, gX)[gX]--, kk !== (0, lt.b)(this, MX)[MX] ? "stopped" : (0, lt.b)(this, PX)[PX](Rk)
          }
          if ((0, lt.b)(this, gX)[gX]--, kk !== (0, lt.b)(this, MX)[MX]) return (0, lt.b)(this, SX)[SX] || 0 !== (0, lt.b)(this, gX)[gX] || (0, lt.b)(this, uX)[uX] || this.deps.unload(), "stopped";
          if ((0, lt.b)(this, uX)[uX]) return Jk.sc.ModuleTrap;
          const Bk = Fk.Otk(),
            tk = this.deps.core.Etk();
          if (Bk !== tk) return (0, lt.b)(this, PX)[PX](new Error(`replay port version ${Bk}, the core's ${tk}`));
          (0, lt.b)(this, SX)[SX] = Fk
        }
        if (!(0, lt.b)(this, NX)[NX]) {
          const kk = Fk;
          if (!(0, lt.b)(this, ZX)[ZX]((() => {
              (0, lt.b)(this, NX)[NX] = new kk.Htk, (0, lt.b)(this, HX)[HX] = kk.utk()
            }))) return Jk.sc.ModuleTrap
        }
        let Bk = !1;
        return (0, lt.b)(this, CX)[CX](((Fk, Rk) => {
          null !== (0, lt.b)(this, GX)[GX] && Fk.step(0, 0);
          const tk = Fk.stage(kk.length);
          0 !== tk && (new Uint8Array(Rk.buffer, tk, kk.length).set(kk), Fk.open(), (0, lt.b)(this, cX)[cX] = (0, lt.b)(this, UX)[UX], (0, lt.b)(this, GX)[GX] = null, (0, lt.b)(this, TX)[TX]++, Bk = !0)
        })) ? Bk ? "opening" : Jk.sc.TooLarge : Jk.sc.ModuleTrap
      }
      beforeFrame(kk) {
        const Fk = (0, lt.b)(this, NX)[NX],
          Bk = (0, lt.b)(this, HX)[HX];
        if (!Fk || !Bk || null !== (0, lt.b)(this, GX)[GX]) return;
        const {
          core: Rk
        } = this.deps, tk = Rk.Mtk(kk);
        if (tk < 0) return;
        const ak = Math.floor(tk);
        let Xk, bk;
        try {
          Xk = Fk.step(ak, tk - ak), bk = Fk.itk()
        } catch (dk) {
          return void(0, lt.b)(this, pX)[pX](dk)
        }
        const wk = Rk.Ltk(1, Xk);
        if (0 === wk) {
          const kk = (0, lt.b)(this, CX)[CX]((kk => {
            kk.close()
          }));
          if (!kk) return;
          return (0, lt.b)(this, hX)[hX] ? (0, lt.b)(this, GX)[GX] = "drop" : (0, lt.b)(this, zX)[zX](), void Rk.gtk(Jk.sc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), wk, Xk).set(new Uint8Array(Bk.buffer, bk, Xk))
      }
      play() {
        (0, lt.b)(this, qX)[qX]((kk => {
          kk.play()
        }))
      }
      pause() {
        (0, lt.b)(this, qX)[qX]((kk => {
          kk.pause()
        }))
      }
      seek(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, lt.b)(this, qX)[qX]((Bk => {
          Bk.seek(kk, Fk)
        }))
      }
      setMark(kk, Fk) {
        return (0, lt.b)(this, qX)[qX]((Bk => {
          Bk.Utk(kk, Fk)
        }))
      }
      addKeyframe(kk, Fk) {
        return (0, lt.b)(this, qX)[qX]((Bk => {
          Bk.ctk(kk[0], kk[1], kk[2], Fk[0], Fk[1], Fk[2])
        }))
      }
      setKeyframe(kk, Fk) {
        return (0, lt.b)(this, qX)[qX]((Bk => {
          Bk.Gtk(kk, Fk)
        }))
      }
      moveKeyframe(kk, Fk) {
        return (0, lt.b)(this, qX)[qX]((Bk => {
          Bk.Ttk(kk, Fk)
        }))
      }
      deleteKeyframes(kk, Fk) {
        return (0, lt.b)(this, qX)[qX]((Bk => {
          Bk.rtk(kk, Fk)
        }))
      }
      crop(kk, Fk) {
        return null === (0, lt.b)(this, UX)[UX] && (0, lt.b)(this, qX)[qX]((Bk => {
          Bk.crop(kk, Fk)
        }))
      }
      beginSave() {
        const kk = (0, lt.b)(this, rX)[rX];
        if ((0, lt.b)(this, rX)[rX] = null, null !== kk && kk !== (0, lt.b)(this, TX)[TX]) return null;
        let Fk = 0,
          Bk = null;
        if ((0, lt.b)(this, CX)[CX](((kk, Rk) => {
            Fk = kk.save(), 0 !== Fk && (Bk = new Uint8Array(Rk.buffer, kk.Dtk(), kk.ztk()).slice())
          })), 0 === Fk || !Bk) return null;
        const Rk = {
          headLen: Fk,
          editState: Bk,
          givenUp: () => (0, lt.b)(this, cX)[cX] === Rk,
          head: (kk, Fk) => {
            if ((0, lt.b)(this, UX)[UX] !== Rk || !(0, lt.b)(this, hX)[hX]) return null;
            let Bk = null;
            return (0, lt.b)(this, CX)[CX](((Rk, tk) => {
              const ak = Rk.Ptk();
              0 !== ak && kk >= 0 && Fk >= 0 && kk + Fk <= ak && (Bk = new Uint8Array(tk.buffer, Rk.htk() + kk, Fk))
            })), Bk
          },
          end: () => {
            if ((0, lt.b)(this, UX)[UX] !== Rk) return;
            (0, lt.b)(this, UX)[UX] = null, (0, lt.b)(this, cX)[cX] = null, (0, lt.b)(this, CX)[CX]((kk => {
              kk.qtk()
            }));
            const kk = (0, lt.b)(this, GX)[GX];
            (0, lt.b)(this, GX)[GX] = null, "unload" === kk ? (0, lt.b)(this, DX)[DX]() : "drop" === kk && (0, lt.b)(this, zX)[zX]()
          }
        };
        return (0, lt.b)(this, UX)[UX] = Rk, Rk
      }
      askSave() {
        (0, lt.b)(this, rX)[rX] = (0, lt.b)(this, TX)[TX]
      }
      setSpeed(kk) {
        (0, lt.b)(this, qX)[qX]((Fk => {
          Fk.Ctk(kk)
        }))
      }
      setCameraMode(kk) {
        (0, lt.b)(this, qX)[qX]((Fk => {
          Fk.Ztk(kk)
        }))
      }
      close() {
        (0, lt.b)(this, qX)[qX]((kk => {
          kk.close()
        }))
      }
      stop() {
        (0, lt.b)(this, MX)[MX]++, (0, lt.b)(this, hX)[hX] && ((0, lt.b)(this, CX)[CX]((kk => {
          kk.close()
        })), (0, lt.b)(this, NX)[NX]) ? (0, lt.b)(this, GX)[GX] = "unload" : (0, lt.b)(this, DX)[DX]()
      }
    }

    function xX() {
      (0, lt.b)(this, zX)[zX](), (0, lt.b)(this, uX)[uX] || ((0, lt.b)(this, SX)[SX] = null, this.deps.unload())
    }

    function jX() {
      (0, lt.b)(this, CX)[CX]((kk => {
        kk.free()
      })), (0, lt.b)(this, NX)[NX] = null, (0, lt.b)(this, HX)[HX] = null
    }
    async function lX(kk) {
      return await this.deps.staleOr(kk, (() => {})) ? "reloading" : Jk.sc.ModuleLoad
    }

    function nX() {
      return null !== (0, lt.b)(this, UX)[UX] && (0, lt.b)(this, cX)[cX] !== (0, lt.b)(this, UX)[UX]
    }

    function IX(kk) {
      return null === (0, lt.b)(this, GX)[GX] && (0, lt.b)(this, CX)[CX](kk)
    }

    function QX(kk) {
      const Fk = (0, lt.b)(this, NX)[NX],
        Bk = (0, lt.b)(this, HX)[HX];
      return !(!Fk || !Bk) && (0, lt.b)(this, ZX)[ZX]((() => {
        kk(Fk, Bk)
      }))
    }

    function kb(kk) {
      if ((0, lt.b)(this, uX)[uX]) return !1;
      try {
        return kk(), !0
      } catch (Fk) {
        return (0, lt.b)(this, pX)[pX](Fk), !1
      }
    }

    function Fb(kk) {
      if (!(kk instanceof WebAssembly.RuntimeError)) throw kk;
      (0, lt.b)(this, uX)[uX] = !0, (0, lt.b)(this, NX)[NX] = null, (0, lt.b)(this, HX)[HX] = null, (0, lt.b)(this, SX)[SX] = null, this.deps.crash(this.deps.markTrapped(kk)), this.deps.core.gtk(Jk.sc.ModuleTrap)
    }
    var Bb = Bk(6171),
      Rb = Bk(40137);
    const tb = "[bloxd-wasm-client]";
    const ab = String(Nt);

    function Xb(kk) {
      return null === kk || kk === ab ? void 0 : kk
    }

    function bb(kk) {
      var Fk, Bk, Rk, tk, ak, bk, wk;
      switch (kk.what) {
        case Jk.Bc.FlyingText: {
          let Fk;
          try {
            Fk = JSON.parse(kk.contentJson)
          } catch (dk) {
            return void console.warn(`${tb} a replay's flying text isn't JSON`, dk)
          }
          Xk.o.Hf("forceFlyingMiddleMessage", {
            content: Fk,
            Ta: kk.Ta,
            angle: kk.angle,
            ra: kk.ra
          });
          break
        }
        case Jk.Bc.PlayerKilled:
          (0, Rb.i)({
            kind: "killed",
            body: {
              deadEId: null !== (Fk = Xb(kk.dead)) && void 0 !== Fk ? Fk : "",
              killerEId: Xb(kk.killer),
              withItem: null !== (Bk = kk.withItem) && void 0 !== Bk ? Bk : "",
              killstreak: kk.killstreak
            }
          });
          break;
        case Jk.Bc.Killfeed:
          (0, Rb.i)({
            kind: "custom",
            body: {
              killer: {
                eId: Xb(kk.killerId),
                name: null !== (Rk = kk.killerName) && void 0 !== Rk ? Rk : void 0,
                colour: null !== (tk = kk.killerColour) && void 0 !== tk ? tk : void 0
              },
              victim: {
                eId: Xb(kk.victimId),
                name: null !== (ak = kk.victimName) && void 0 !== ak ? ak : void 0,
                colour: null !== (bk = kk.victimColour) && void 0 !== bk ? bk : void 0
              },
              withItem: null !== (wk = kk.withItem) && void 0 !== wk ? wk : ""
            }
          })
      }
    }
    const wb = "[bloxd-wasm-client]";

    function db(kk) {
      if (void 0 === kk || null === kk || "" === kk) return null;
      const Fk = Number(kk);
      return Number.isInteger(Fk) && Fk > Nt && Fk <= 2147483647 ? Fk : null
    }

    function sb(kk) {
      return {
        id: db(kk.eId),
        name: "string" === typeof kk.name ? kk.name : null,
        colour: "string" === typeof kk.colour ? kk.colour : null
      }
    }

    function Vb(kk) {
      const Fk = (0, Dt.k)(pB.Tb.PlayerKilled, (Fk => {
          var Bk, Rk;
          const tk = (0, rt.j)(Fk);
          if (!(0, rt.e)(tk)) return;
          const {
            deadEId: ak,
            killerEId: Xk,
            withItem: bk,
            killstreak: wk
          } = tk;
          kk.recordPlayerKilled(null !== (Bk = db(ak)) && void 0 !== Bk ? Bk : Nt, null !== (Rk = db(Xk)) && void 0 !== Rk ? Rk : Nt, "number" === typeof wk ? wk : 0, "string" === typeof bk ? bk : "")
        })),
        Bk = (0, Dt.k)(pB.Tb.CustomKillfeed, (Fk => {
          const Bk = (0, rt.j)(Fk);
          if (!(0, rt.e)(Bk) || !(0, rt.e)(Bk.killer) || !(0, rt.e)(Bk.victim)) return;
          const {
            killer: Rk,
            victim: tk,
            withItem: ak
          } = Bk;
          kk.recordKillfeed(sb(Rk), sb(tk), "string" === typeof ak ? ak : null)
        }));
      return () => {
        Fk(), Bk()
      }
    }

    function Jb(kk) {
      var Fk;
      return void 0 === kk || null === kk ? null : null !== (Fk = JSON.stringify(kk)) && void 0 !== Fk ? Fk : null
    }

    function Ab(kk) {
      let Fk = null;
      const Bk = () => {
        const {
          enableClipping: Bk,
          clipDurationSeconds: tk
        } = Rk.c.get("clientEscMenuOptions"), ak = `${Bk}:${tk}`;
        ak !== Fk && (Fk = ak, kk.recorder.setPrefs(Bk, tk))
      };
      return Bk(), (0, Xk.p)("appManagerUpdated|clientEscMenuOptions", Bk)
    }
    const eb = "replayModule",
      yb = "recorderModule";

    function fb(kk, Fk, Bk) {
      return function() {
        return kk.isStopped ? Bk : Fk(...arguments)
      }
    }
    const mb = {
      open: () => Promise.reject(new Error(Wt.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Wb() {
      return Bk.e(61).then((() => Bk(61228)))
    }

    function vb(kk) {
      (0, Wt.f)({
        text: kk,
        type: "Error"
      })
    }
    class ib {
      constructor(kk) {
        this.deps = kk, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Fk,
          api: Rk,
          core: tk
        } = kk, ak = () => kk.memory().buffer, Xk = () => Fk.isStopped ? null : Fk.rings.cmd, bk = fb(Fk, ((kk, Fk) => tk.Ltk(kk, Fk)), 0), wk = () => tk.Etk();
        let dk = null;
        this.replay = new KX({
          core: {
            Mtk: fb(Fk, (kk => tk.Mtk(kk)), -1),
            Ltk: bk,
            Etk: wk,
            gtk: fb(Fk, (kk => {
              tk.gtk(kk)
            }), void 0)
          },
          coreBuffer: ak,
          load: async () => (dk = await Bk.e(62).then((() => Bk(61237))), dk.loadReplayModule()),
          unload: () => {
            var kk;
            null === (kk = dk) || void 0 === kk || kk.unloadReplayModule()
          },
          markTrapped: kk => dk ? dk.markReplayTrapped(kk) : new Error(String(kk)),
          staleOr: (Fk, Bk) => kk.staleOr(eb, Fk, Bk),
          crash: Fk => {
            kk.reportFault(eb, Fk)
          }
        });
        let sk = null;
        this.recorder = new Ia({
          core: {
            Ntk: fb(Fk, (kk => tk.Ntk(kk)), 0),
            vtk: fb(Fk, (kk => tk.vtk(kk)), 0),
            Ltk: bk,
            Etk: wk
          },
          coreCommand: (kk, Fk) => {
            var Bk, Rk;
            return null !== (Bk = null === (Rk = Xk()) || void 0 === Rk ? void 0 : Rk.writeCmd(kk, 0, Fk)) && void 0 !== Bk && Bk
          },
          coreBuffer: ak,
          load: async () => (sk = await Wb(), sk.loadRecorderModule()),
          prefetch: () => {
            Wb().then((kk => kk.prefetchRecorderModule())).catch((kk => {
              console.warn(`${wb} the recorder module didn't prefetch, so a save loads it:`, kk)
            }))
          },
          unload: () => {
            var kk;
            null === (kk = sk) || void 0 === kk || kk.unloadRecorderModule()
          },
          markTrapped: kk => sk ? sk.markRecorderTrapped(kk) : new Error(String(kk)),
          memoryBytes: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = sk) || void 0 === Fk ? void 0 : Fk.recorderMemoryBytes()) && void 0 !== kk ? kk : 0
          },
          staleOr: (Fk, Bk) => kk.staleOr(yb, Fk, Bk),
          crash: Fk => {
            kk.reportFault(yb, Fk)
          },
          allowed: () => !0 === kk.options.get("canRecordReplays"),
          failed: vb,
          events: (kk, Fk) => {
            this.runtime.recorderEvents(kk, Fk)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: vb,
          unixNow: () => Date.now()
        });
        const Vk = new St({
          core: {
            stk: fb(Fk, (kk => tk.stk(kk)), 0),
            Jtk: fb(Fk, (() => {
              tk.Jtk()
            }), void 0),
            Tf: fb(Fk, (() => tk.Tf()), 0),
            Vtk: fb(Fk, (() => tk.Vtk()), 0)
          },
          buffer: ak,
          apiView: () => Rk.apiView,
          cmd: Xk,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new EX({
          api: Rk,
          cmd: Xk,
          loadHook: OX,
          onError: kk => {
            console.warn(`${wb} the recorded game's replay hooks:`, kk)
          }
        });
        const Jk = new Tt({
          client: Vk,
          buffer: ak,
          setHoldDraws: kk => {
            Fk.setHoldDraws(kk)
          },
          notify: Wt.f,
          onRecorderState: () => {
            var kk;
            null === (kk = (0, it.d)()) || void 0 === kk || kk.recorderChanged()
          },
          onViewerChange: () => {
            var kk;
            null === (kk = (0, it.d)()) || void 0 === kk || kk.viewerChanged()
          },
          onReplayOption: Fk => {
            ! function(kk, Fk) {
              var Bk, Rk;
              const tk = pB.bb[Fk.key];
              if (void 0 === tk) return;
              let ak = null !== (Bk = Fk.value) && void 0 !== Bk ? Bk : JSON.parse(JSON.stringify(null !== (Rk = Bb.d[tk]) && void 0 !== Rk ? Rk : null));
              if (null !== Fk.value && Fk.key < pB.Cb.Environment && "string" === typeof ak) try {
                ak = JSON.parse(ak)
              } catch (Xk) {
                return void console.warn(`${tb} a replay's ${tk} isn't JSON`, Xk)
              }
              kk.applyNewClientOptions({
                [tk]: ak
              })
            }(kk.options, Fk)
          },
          onReplayUiEvent: bb,
          onReplayOpened: Fk => {
            this.entityHooks.opened((0, Nk.Vb)(Fk)), kk.replayShaderPack(Fk)
          },
          meshPending: () => {
            var kk, Bk;
            return null !== (kk = null === (Bk = Fk.lastHeader) || void 0 === Bk ? void 0 : Bk.renderPending) && void 0 !== kk ? kk : 0
          },
          viewerOpen: vt.d,
          download: kk => {
            (0, ft.f)(kk)
          }
        });
        this.runtime = Jk, Rk.replay = Jk.sink, (0, it.q)(Jk);
        const Ak = new ht({
          live: () => {
            var kk;
            return !Fk.isStopped && !0 === (null === (kk = Jk.currentViewer) || void 0 === kk ? void 0 : kk.inPlayback)
          },
          cmd: Xk,
          dragScale: xt
        });
        this.freecam = Ak, (0, it.m)(Ak), this.recordedOptions = function(kk, Fk) {
          const Bk = pB.bb,
            Rk = Bk.map(((Bk, Rk) => Fk.subscribe(Bk, (Fk => {
              kk.setOption(Rk, Jb(Fk))
            }))));
          return {
            sendAll() {
              Bk.forEach(((Bk, Rk) => {
                kk.setOption(Rk, Jb(Fk.get(Bk)))
              }))
            },
            stop() {
              for (const kk of Rk) kk()
            }
          }
        }(Jk.recorder, kk.options), this.stops = [(0, BR.m)((kk => {
          Ak.flush();
          try {
            this.replay.beforeFrame(kk)
          } catch (Fk) {
            this.deps.reportFault("replayFrame", Fk)
          }
        })), (0, BR.A)(((kk, Fk) => {
          try {
            this.recorder.afterFrame(), Fk && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Bk) {
            this.deps.reportFault("recorderFrame", Bk)
          }
          try {
            Jk.afterFrame(kk)
          } catch (Bk) {
            this.deps.reportFault("replayRuntime", Bk)
          }
        })), Ab(Jk), () => {
          this.recordedOptions.stop()
        }, Vb(Jk.recorder), (0, zt.l)((kk => {
          let {
            action: Fk,
            down: Bk
          } = kk;
          var Rk;
          Bk && (null === (Rk = (0, it.d)()) || void 0 === Rk || Rk.keyDown(Fk))
        }))];
        const ek = () => {
          const kk = Jk.currentViewer;
          return !0 === (null === kk || void 0 === kk ? void 0 : kk.isOpen) ? kk : null
        };
        (0, mt.h)({
          open: (kk, Fk) => this.open(kk, Fk),
          replayKey: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = ek()) || void 0 === Fk ? void 0 : Fk.id) && void 0 !== kk ? kk : null
          },
          saveRefusal: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = ek()) || void 0 === Fk ? void 0 : Fk.saveRefusal) && void 0 !== kk ? kk : null
          },
          encode: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = ek()) || void 0 === Fk ? void 0 : Fk.save()) && void 0 !== kk ? kk : Promise.resolve(null)
          },
          fileHandle: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = Jk.currentViewer) || void 0 === Fk ? void 0 : Fk.fileHandle) && void 0 !== kk ? kk : null
          },
          markSaved: (kk, Fk) => {
            var Bk;
            null === (Bk = Jk.currentViewer) || void 0 === Bk || Bk.markSaved(kk, Fk)
          }
        })
      }
      netEvent(kk) {
        if ("connection" === kk.type)
          if (kk.phase === Jk.y.Activated) {
            this.activeConn = kk.conn;
            const Fk = this.deps.sessionInfo(kk.conn);
            null !== Fk && (this.runtime.activated({
              lobbyType: (0, Hk.w)(Fk.lobbyName),
              gameNameWithVariation: Fk.gameNameWithVariation,
              lobbyName: Fk.lobbyName
            }), this.recordedOptions.sendAll())
          } else kk.phase !== Jk.y.Left && kk.phase !== Jk.y.Closed || kk.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const kk of this.stops) kk();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, it.i)() === this.runtime && (0, it.q)(null), (0, it.e)() === this.freecam && (0, it.m)(null), (0, mt.h)(mb), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(kk, Fk) {
        const {
          running: Bk
        } = this.deps;
        if (Bk.isStopped) throw new Error(Wt.d.coreStopped.text);
        if (kk.byteLength > 67108864) throw new Error(Wt.d.cantOpen.text);
        let Rk;
        try {
          Rk = await async function(kk) {
            const Fk = await kk.loadViewer();
            return Fk.inPlayback || (0, BR.J)().leaveGame(null), Fk
          }(this.runtime)
        } catch (tk) {
          throw console.warn(`${wb} the replay viewer didn't load`, tk), new Error(Wt.d.viewerLoadFailed.text)
        }
        if (Bk.isStopped) throw new Error(Wt.d.coreStopped.text);
        await Rk.open(kk, Fk)
      }
    }
    var Yb = Bk(1863);

    function ob(kk, Fk) {
      const {
        aux: Bk,
        payload: Rk
      } = function(kk) {
        return {
          aux: kk.reset ? Jk.Hb.ResetFirst : 0,
          payload: Ob(kk.changes)
        }
      }(Fk);
      kk.queueOptions(Bk, Rk) && (Fk.reset && Yb.b.reset(), Yb.b.apply(Fk.changes))
    }
    const Lb = new TextEncoder;

    function Ob(kk) {
      const Fk = new Eb;
      return Nb(Fk, kk), Fk.bytes()
    }
    class Eb {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(kk) {
        if (this.len + kk <= this.buf.length) return;
        const Fk = new Uint8Array(Math.max(2 * this.buf.length, this.len + kk));
        Fk.set(this.buf.subarray(0, this.len)), this.buf = Fk, this.view = new DataView(Fk.buffer)
      }
      u8(kk) {
        this.room(1), this.buf[this.len++] = kk
      }
      tagged(kk, Fk, Bk) {
        this.room(1 + Fk), this.buf[this.len++] = kk, 1 === Fk ? this.view.setUint8(this.len, Bk) : 2 === Fk ? this.view.setUint16(this.len, Bk) : this.view.setUint32(this.len, Bk), this.len += Fk
      }
      signed(kk, Fk, Bk) {
        this.room(1 + Fk), this.buf[this.len++] = kk, 1 === Fk ? this.view.setInt8(this.len, Bk) : 2 === Fk ? this.view.setInt16(this.len, Bk) : this.view.setInt32(this.len, Bk), this.len += Fk
      }
      f64(kk) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, kk), this.len += 8
      }
      raw(kk) {
        this.room(kk.length), this.buf.set(kk, this.len), this.len += kk.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Sb(kk, Fk, Bk, Rk, tk, ak, Xk) {
      Fk < Rk ? kk.u8(Bk | Fk) : null !== tk && Fk < 256 ? kk.tagged(tk, 1, Fk) : Fk < 65536 ? kk.tagged(ak, 2, Fk) : kk.tagged(Xk, 4, Fk)
    }

    function Nb(kk, Fk) {
      switch (typeof Fk) {
        case "undefined":
          return void kk.raw(Hb);
        case "boolean":
          return void kk.u8(Fk ? 195 : 194);
        case "number":
          return void
          function(kk, Fk) {
            Fk >>> 0 === Fk ? Fk < 128 ? kk.u8(Fk) : Fk < 256 ? kk.tagged(204, 1, Fk) : Fk < 65536 ? kk.tagged(205, 2, Fk) : kk.tagged(206, 4, Fk) : (Fk | 0) === Fk ? Fk >= -32 ? kk.u8(255 & Fk) : Fk >= -128 ? kk.signed(208, 1, Fk) : Fk >= -32768 ? kk.signed(209, 2, Fk) : kk.signed(210, 4, Fk) : kk.f64(Fk)
          }(kk, Fk);
        case "string": {
          const Bk = Lb.encode(Fk);
          return Sb(kk, Bk.length, 160, 32, 217, 218, 219), void kk.raw(Bk)
        }
        case "object":
          break;
        default:
          return void kk.u8(192)
      }
      if (null === Fk) kk.u8(192);
      else if (Array.isArray(Fk)) {
        Sb(kk, Fk.length, 144, 16, null, 220, 221);
        for (const Bk of Fk) Nb(kk, Bk)
      } else if (Fk instanceof Uint8Array) Sb(kk, Fk.length, 0, 0, 196, 197, 198), kk.raw(Fk);
      else {
        const Bk = Object.keys(Fk);
        Sb(kk, Bk.length, 128, 0, null, 222, 223);
        for (const Rk of Bk) Nb(kk, Rk), Nb(kk, Fk[Rk])
      }
    }
    const Hb = new Uint8Array([212, 0, 0]);
    var ub = Bk(42001),
      Mb = Bk(42007),
      gb = Bk(40440),
      Ub = Bk(40476),
      cb = Bk(3506);
    const Gb = [1e3, 3e3, 9e3];
    class Tb {
      constructor(kk) {
        this.host = kk, this.sets = new Map, this.table = [], this.generation = 0, this.Te = !1
      }
      onEvent(kk) {
        const Fk = function(kk) {
          if (kk.byteLength !== Jk.Gc) return null;
          const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
          return {
            want: Fk.getUint16(0, !0),
            release: Fk.getUint16(2, !0)
          }
        }(kk);
        Fk && !this.Te && (Fk.release !== Jk.Kc && this.release(Fk.release), Fk.want !== Jk.Kc && this.want(Fk.want))
      }
      reset(kk) {
        if (!this.Te) {
          for (const [kk, Fk] of this.sets) "ready" === Fk.state && this.releaseAll(Fk.distinct), this.sets.delete(kk);
          this.table = kk, this.generation++
        }
      }
      dispose() {
        if (this.Te) return;
        this.Te = !0, this.generation++, this.table = [];
        const kk = [...this.sets.values()];
        this.sets.clear();
        let Fk = null;
        for (const Rk of kk)
          for (const kk of "ready" === Rk.state ? Rk.distinct : []) try {
            this.host.HBk(kk)
          } catch (Bk) {
            Fk ??= {
              error: Bk
            }
          }
        if (Fk) throw Fk.error
      }
      isReady(kk) {
        var Fk;
        return "ready" === (null === (Fk = this.sets.get(kk)) || void 0 === Fk ? void 0 : Fk.state)
      }
      want(kk) {
        const Fk = this.sets.get(kk);
        if ("loading" === (null === Fk || void 0 === Fk ? void 0 : Fk.state)) return Fk.wanted = !0, void this.capAnswer(kk, Fk);
        if ("ready" === (null === Fk || void 0 === Fk ? void 0 : Fk.state)) return void this.host.sendReady(Db(kk, Fk.images, Fk.size));
        const Bk = this.table[kk];
        if (!Bk || 1 !== Bk.urls.length && Bk.urls.length !== pB.Ob.CubeFaces) return this.host.sendReady(zb(kk)), void this.host.onLoadFailed(kk, "", new Error(`no image set ${kk}`));
        const Rk = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(kk, Rk), this.load(kk, Bk, Rk, this.generation, 0), this.capAnswer(kk, Rk)
      }
      capAnswer(kk, Fk) {
        this.host.wait(4e3, (() => {
          this.sets.get(kk) === Fk && Fk.wanted && this.host.sendReady(zb(kk))
        }))
      }
      load(kk, Fk, Bk, Rk, tk) {
        const ak = [...new Set(Fk.urls)];
        Promise.allSettled(ak.map((kk => this.host.loadImage(kk, Fk.orientation)))).then((Xk => {
          const bk = Xk.flatMap((kk => "fulfilled" === kk.status ? [kk.value] : [])),
            wk = Rk === this.generation && this.sets.get(kk) === Bk,
            dk = Xk.findIndex((kk => "rejected" === kk.status));
          if (!wk || !Bk.wanted) return this.Te ? void this.releaseAfterDispose(bk.map(rb)) : (this.releaseAll(bk.map(rb)), void(wk && this.sets.delete(kk)));
          dk < 0 ? this.loaded(kk, Fk, ak, bk) : (this.releaseAll(bk.map(rb)), this.host.sendReady(zb(kk)), tk < Gb.length ? this.host.wait(Gb[tk], (() => {
            Rk === this.generation && this.sets.get(kk) === Bk && (Bk.wanted ? this.load(kk, Fk, Bk, Rk, tk + 1) : this.sets.delete(kk))
          })) : (this.sets.delete(kk), this.host.onLoadFailed(kk, ak[dk], Xk[dk].reason)))
        }))
      }
      loaded(kk, Fk, Bk, Rk) {
        const [tk] = Rk, ak = [tk.width, tk.height], Xk = Rk.every((kk => kk.width === ak[0] && kk.height === ak[1])), bk = Fk.urls.length === pB.Ob.CubeFaces;
        if (!Xk || ak[0] <= 0 || ak[1] <= 0 || ak[0] > 65535 || ak[1] > 65535 || bk && ak[0] !== ak[1]) {
          this.releaseAll(Rk.map(rb)), this.sets.delete(kk), this.host.sendReady(zb(kk));
          const Bk = Rk.map((kk => `${kk.width}x${kk.height}`));
          return void this.host.onLoadFailed(kk, Fk.urls[0], new Error(`set ${kk}'s images can't make its texture: ${Bk.join(", ")}`))
        }
        const wk = Fk.urls.map((kk => Rk[Bk.indexOf(kk)].id)),
          dk = Rk.map(rb);
        this.sets.set(kk, {
          state: "ready",
          images: wk,
          distinct: dk,
          size: ak
        }), this.host.sendReady(Db(kk, wk, ak))
      }
      release(kk) {
        const Fk = this.sets.get(kk);
        "loading" === (null === Fk || void 0 === Fk ? void 0 : Fk.state) ? Fk.wanted = !1: "ready" === (null === Fk || void 0 === Fk ? void 0 : Fk.state) && (this.releaseAll(Fk.distinct), this.sets.delete(kk))
      }
      releaseAll(kk) {
        for (const Fk of kk) this.host.HBk(Fk)
      }
      releaseAfterDispose(kk) {
        for (const Fk of kk) try {
          this.host.HBk(Fk)
        } catch {}
      }
    }

    function rb(kk) {
      return kk.id
    }

    function Db(kk, Fk, Bk) {
      const Rk = new Uint8Array(pB.Ob.SkyImagesReadyBytes),
        tk = new DataView(Rk.buffer);
      return tk.setUint16(0, kk, !0), tk.setUint16(2, Fk.length, !0), tk.setUint16(4, Bk[0], !0), tk.setUint16(6, Bk[1], !0), Fk.slice(0, pB.Ob.CubeFaces).forEach(((kk, Fk) => {
        tk.setUint32(8 + 4 * Fk, kk, !0)
      })), Rk
    }

    function zb(kk) {
      const Fk = new Uint8Array(pB.Ob.SkyImagesReadyBytes),
        Bk = new DataView(Fk.buffer);
      return Bk.setUint16(0, kk, !0), Bk.setUint16(2, pB.Ob.Failed, !0), Fk
    }
    let Pb = Promise.resolve();
    async function hb(kk, Fk) {
      let Bk;
      try {
        Bk = await (0, cb.N)(kk)
      } catch (ak) {
        throw new gb.c("fetch", kk, {
          cause: ak
        })
      }
      const Rk = Pb.then((() => async function(kk, Fk) {
        const Bk = new Blob([kk.slice()]);
        let Rk = await createImageBitmap(Bk, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Fk
        });
        const tk = 1024 / Math.max(Rk.width, Rk.height);
        if (tk < 1) {
          const kk = Rk;
          try {
            Rk = await createImageBitmap(kk, {
              resizeWidth: Math.max(1, Math.round(kk.width * tk)),
              resizeHeight: Math.max(1, Math.round(kk.height * tk)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            kk.close()
          }
        }
        return Rk
      }(Bk, Fk)));
      let tk;
      Pb = Rk.catch((() => {}));
      try {
        tk = await Rk
      } catch (ak) {
        throw new gb.c("decode", kk, {
          cause: ak
        })
      }
      return {
        id: (0, gb.q)(tk),
        width: tk.width,
        height: tk.height
      }
    }
    var qb = Bk(2954),
      Cb = Bk(34016);
    const Zb = qb.f.length;

    function pb(kk) {
      const Fk = [],
        Bk = [];
      qb.f.forEach(((Rk, tk) => {
        var ak;
        const Xk = null !== (ak = Kb(kk[Rk])) && void 0 !== ak ? ak : Cb.n[Rk];
        "custom" === Xk.type ? (Bk.push({
          id: tk,
          kind: pB.Ob.KindCustom,
          set: Fk.length,
          earth: null
        }), Fk.push({
          urls: [Xk.px, Xk.py, Xk.pz, Xk.nx, Xk.ny, Xk.nz],
          orientation: "none"
        })) : Bk.push({
          id: tk,
          kind: pB.Ob.KindEarth,
          set: 0,
          earth: Xk
        })
      }));
      const Rk = Kb(kk.earth);
      "earth" === (null === Rk || void 0 === Rk ? void 0 : Rk.type) && Bk.push({
        id: Zb,
        kind: pB.Ob.KindEarth,
        set: 0,
        earth: Rk
      });
      const tk = Fk.length;
      Fk.push({
        urls: Cb.g.map((kk => Cb.h + kk)),
        orientation: "none"
      }), Fk.push({
        urls: [Cb.l],
        orientation: "flipY"
      }), Fk.push({
        urls: [Cb.d],
        orientation: "flipY"
      });
      const ak = new Uint8Array(pB.Ob.SkyTableHeaderBytes + Bk.length * pB.Ob.SkyTableEntryBytes),
        Xk = new DataView(ak.buffer);
      return Xk.setUint16(0, tk, !0), Xk.setUint16(2, tk + 1, !0), Xk.setUint16(4, tk + 2, !0), Xk.setUint16(6, Bk.length, !0), Bk.forEach(((kk, Fk) => {
        const Bk = pB.Ob.SkyTableHeaderBytes + Fk * pB.Ob.SkyTableEntryBytes;
        Xk.setUint16(Bk, kk.id, !0), Xk.setUint8(Bk + 2, kk.kind);
        const Rk = Bk + 4;
        kk.earth ? function(kk, Fk, Bk) {
          const Rk = kk;
          let tk = 0,
            ak = 0;
          for (const [Xk, bk] of xb) {
            const kk = Rk[Xk];
            "number" === typeof kk && Number.isFinite(kk) && (Fk.setFloat32(Bk + 4 * bk, kk, !0), tk |= 1 << bk)
          }
          for (const [Xk, bk, wk] of jb) {
            const kk = Rk[Xk];
            Array.isArray(kk) && 3 === kk.length && kk.every((kk => "number" === typeof kk && Number.isFinite(kk))) && (kk.forEach(((kk, Rk) => {
              Fk.setFloat32(Bk + wk + 4 * Rk, kk, !0)
            })), tk |= bk)
          }
          lb.forEach(((kk, ak) => {
            let [Xk, bk] = kk;
            const wk = Rk[Xk];
            "number" === typeof wk && Number.isFinite(wk) && (Fk.setFloat32(Bk + pB.j.CameraOffsetAt + 4 * ak, wk, !0), tk |= bk)
          }));
          for (const [Xk, bk] of nb) {
            const kk = Rk[Xk];
            null !== kk && void 0 !== kk && (tk |= bk, kk && (ak |= bk >>> 14))
          }
          Fk.setUint32(Bk + pB.j.PresentAt, tk, !0), Fk.setUint8(Bk + pB.j.FlagsAt, ak)
        }(kk.earth, Xk, Rk) : Xk.setUint16(Rk, kk.set, !0)
      })), {
        payload: ak,
        sets: Fk
      }
    }

    function Kb(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const Fk = kk;
      if ("earth" === Fk.type) return kk;
      return "custom" === Fk.type && ["px", "py", "pz", "nx", "ny", "nz"].every((kk => {
        const Bk = Fk[kk];
        return "string" === typeof Bk && Bk.length > 0
      })) ? kk : null
    }
    const xb = [
        ["inclination", pB.j.Inclination],
        ["turbidity", pB.j.Turbidity],
        ["luminance", pB.j.Luminance],
        ["rayleigh", pB.j.Rayleigh],
        ["mieCoefficient", pB.j.MieCoefficient],
        ["mieDirectionalG", pB.j.MieDirectionalG],
        ["distance", pB.j.Distance],
        ["azimuth", pB.j.Azimuth]
      ],
      jb = [
        ["sunPosition", pB.j.SunPosition, pB.j.SunPositionAt],
        ["up", pB.j.Up, pB.j.UpAt],
        ["vertexTint", pB.j.VertexTint, pB.j.VertexTintAt]
      ],
      lb = [
        ["xCameraOffset", pB.j.CameraOffsetX],
        ["yCameraOffset", pB.j.CameraOffsetY],
        ["zCameraOffset", pB.j.CameraOffsetZ]
      ],
      nb = [
        ["useSunPosition", pB.j.UseSunPosition],
        ["dithering", pB.j.Dithering],
        ["infiniteDistance", pB.j.InfiniteDistance]
      ];

    function Ib(kk, Fk, Bk) {
      const Rk = new kw({
        writeCmd: kk,
        warn: Fk,
        followPack: Qb(Bk, Fk)
      });
      return Rk.start(), Rk
    }

    function Qb(kk, Fk) {
      return Bk => {
        let Rk = () => {};
        const tk = kk((kk => {
          Rk(), Rk = () => {}, null !== kk ? Rk = kk.subscribe((kk => {
            Bk(function(kk, Fk, Bk) {
              if ("object" !== typeof kk || null === kk) return null;
              const Rk = kk.skyBoxes;
              if ("object" !== typeof Rk || null === Rk) return null;
              if ("player" === Fk) return Rk;
              return Object.fromEntries(Object.entries(Rk).filter((kk => {
                let [Fk, Rk] = kk;
                return !! function(kk) {
                  if ("object" !== typeof kk || null === kk) return !1;
                  return "earth" === kk.type || Object.entries(kk).every((kk => {
                    let [Fk, Bk] = kk;
                    return "type" === Fk || ("" === (Rk = Bk) || null !== function(kk) {
                      var Fk, Bk, Rk;
                      return "string" !== typeof kk ? null : null !== (Fk = null === (Bk = Fw.exec(kk)) || void 0 === Bk || null === (Rk = Bk.groups) || void 0 === Rk ? void 0 : Rk.base64) && void 0 !== Fk ? Fk : null
                    }(Rk));
                    var Rk
                  }))
                }(Rk) || (Bk(`Ignoring texture pack skybox ${Fk}, whose faces are not all data URLs`, null), !1)
              })))
            }(kk.pack, null === kk.gameSource ? "player" : "customGame", Fk))
          })) : Bk(null)
        }));
        return () => {
          tk(), Rk()
        }
      }
    }
    class kw {
      constructor(kk) {
        var Fk, Bk, Rk;
        this.host = kk, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Te = !1, this.wait = null !== (Fk = kk.wait) && void 0 !== Fk ? Fk : (kk, Fk) => {
          setTimeout(Fk, kk)
        }, this.loader = new Tb({
          loadImage: null !== (Bk = kk.loadImage) && void 0 !== Bk ? Bk : hb,
          HBk: null !== (Rk = kk.HBk) && void 0 !== Rk ? Rk : gb.r,
          sendReady: kk => {
            this.queue.push({
              kind: pB.Ob.SkyImagesReady,
              payload: kk
            })
          },
          onLoadFailed: (Fk, Bk, Rk) => {
            kk.warn(`sky image set ${Fk} (${Bk}) didn't load: the last sky stays`, Rk)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Ub.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((kk => {
          this.write(null !== kk && void 0 !== kk ? kk : {})
        }))
      }
      onEvent(kk) {
        this.loader.onEvent(kk)
      }
      drain() {
        if (0 === this.queue.length) return;
        let kk = 0;
        for (; kk < this.queue.length && this.host.writeCmd(this.queue[kk].kind, 0, this.queue[kk].payload);) kk++;
        kk > 0 && this.queue.splice(0, kk)
      }
      dispose() {
        this.Te = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(kk) {
        if (this.Te) return;
        const Fk = pb(kk);
        var Bk, Rk;
        this.written && (Bk = this.written, Rk = Fk, Bk.payload.length === Rk.payload.length && Bk.payload.every(((kk, Fk) => kk === Rk.payload[Fk])) && Bk.sets.length === Rk.sets.length && Bk.sets.every(((kk, Fk) => {
          const Bk = Rk.sets[Fk];
          return kk.orientation === Bk.orientation && kk.urls.length === Bk.urls.length && kk.urls.every(((kk, Fk) => kk === Bk.urls[Fk]))
        }))) || (this.written = Fk, this.loader.reset(Fk.sets), this.queue = this.queue.filter((kk => kk.kind !== pB.Ob.SkyImagesReady)), this.queue.push({
          kind: pB.Ob.SkyTable,
          payload: Fk.payload
        }))
      }
    }
    const Fw = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var Bw = Bk(2683),
      Rw = Bk(2778),
      tw = Bk(273),
      aw = Bk(170),
      Xw = Bk(2689),
      bw = Bk(2694),
      ww = Bk(245),
      dw = Bk(252),
      sw = Bk(2720),
      Vw = Bk(2736),
      Jw = Bk(2751),
      Aw = Bk(112),
      ew = Bk(267),
      yw = Bk(40245);
    class fw {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Dt.k)(mR.L, (kk => {
          this.onReply((0, rt.f)(mR.L, kk), performance.now())
        }))
      }
      onFrame(kk, Fk) {
        null === this.id ? this.id = kk : kk !== this.id && (this.id = kk, this.sentMs = document.hidden ? null : Fk)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(kk, Fk) {
        kk === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Fk - this.sentMs), this.sentMs = null)
      }
      take() {
        const kk = this.roundTripMs;
        return this.roundTripMs = null, kk
      }
      stop() {
        this.stopReplies()
      }
    }
    class mw {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(kk, Fk, Bk, Rk) {
        const tk = kk - this.sampled >>> 0,
          ak = Fk - this.timed >>> 0,
          Xk = Bk - this.frameUs >>> 0,
          bk = this.primed;
        return this.sampled = kk, this.timed = Fk, this.frameUs = Bk, this.primed = !0, !(!bk || tk > 64 || ak > 64) && (Rk && Xk <= 1e6 * ak && (this.windowTimed += ak, this.windowUs += Xk), Rk && tk > 0)
      }
      reset() {}
      snapshotAndReset() {
        const kk = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: kk,
          submitToDoneMs: null
        }
      }
    }
    const Ww = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class vw {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(kk, Fk) {
        const Bk = Math.min(4096, this.count + Fk);
        this.samples.fill(kk, this.count, Bk), this.count = Bk
      }
      clear() {
        this.count = 0
      }
      take(kk) {
        const Fk = this.count;
        if (this.count = 0, Fk < 30) return null;
        const Bk = this.samples.subarray(0, Fk).sort();
        return kk.map((kk => Bk[Math.min(Fk - 1, Math.floor(kk * Fk))]))
      }
    }
    class iw {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new vw, this.inJoin = !1, this.rose = !1, this.joinLags = new vw, this.joinLagP90Ms = null
      }
      onFrame(kk, Fk, Bk, Rk, tk) {
        const ak = kk.headerWord(pB.z.Pacing),
          Xk = kk.headerWord(pB.z.PacingLagUs),
          bk = (ak >>> pB.H.LagsShift) - (this.word >>> pB.H.LagsShift) & pB.H.CountMask,
          wk = (ak >>> pB.H.SwitchesShift) - (this.word >>> pB.H.SwitchesShift) & pB.H.CountMask,
          dk = bk > 0 ? (Xk - this.lagUs >>> 0) / bk / 1e3 : 0,
          sk = this.primed && bk <= 64 && wk <= 2 && dk <= 6e4;
        if (this.rose = 0 !== (ak & ~this.word & pB.H.Joining), this.word = ak, this.lagUs = Xk, this.primed = !0, 0 !== (ak & pB.H.Tiered)) {
          if (0 !== (ak & pB.H.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && sk && Rk && bk > 0 && this.joinLags.add(dk, bk);
          else if (this.inJoin) {
            var Vk, Jk;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Vk = null === (Jk = this.joinLags.take([.9])) || void 0 === Jk ? void 0 : Jk[0]) && void 0 !== Vk ? Vk : null
          }
          if (tk) {
            if (sk && (this.switches += wk, bk > 0 && this.lags.add(dk, bk)), Bk) {
              if (this.lastDrawnMs >= 0 && Fk - this.lastDrawnMs <= 250) {
                const kk = Fk - this.lastDrawnMs;
                this.tieredMs += kk, (ak & pB.H.AheadMask) > 0 && (this.pacedMs += kk)
              }
              this.lastDrawnMs = Fk
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(kk) {
        const Fk = this.takeWindow(),
          Bk = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, kk ? {
          ...Fk,
          joinLagP90Ms: Bk
        } : {
          ...Ww,
          joinLagP90Ms: Bk
        }
      }
      unsent(kk) {
        this.joinLagP90Ms ??= kk.joinLagP90Ms
      }
      takeWindow() {
        var kk, Fk;
        const Bk = this.tieredMs >= 2e3,
          Rk = this.lags.take([.5, .9]),
          tk = {
            pacedShare: Bk ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: Bk ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (kk = null === Rk || void 0 === Rk ? void 0 : Rk[0]) && void 0 !== kk ? kk : null,
            lagP90Ms: null !== (Fk = null === Rk || void 0 === Rk ? void 0 : Rk[1]) && void 0 !== Fk ? Fk : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, tk
      }
    }
    var Yw = Bk(8932),
      ow = Bk(2660),
      Lw = Bk(40319),
      Ow = Bk(8926),
      Ew = Bk(2703),
      Sw = Bk(2677);
    const Nw = {
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

    function Hw(kk) {
      return new uw(kk)
    }
    class uw {
      constructor(kk) {
        this.shell = kk, this.tracker = new bw.c, this.gpu = new mw, this.pacing = new iw, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new fw, this.pacedCpuMs = 0, this.frameDebug = null, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, (0, Yw.c)(kk.backend, kk.canvas, kk.adapterVendor), this.tracker.start((() => !kk.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), (0, Ew.b)("wasm", (() => {
          const {
            n: Fk,
            sampleCount: Bk
          } = (0, Lw.h)();
          return `${kk.backend}, quality steps aim at up to ${Sw.e.target.maxFps} fps, pixel n ${Fk}, msaa ${Bk}`
        }), (kk => {
          this.frameDebug = kk
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(kk) {
        var Fk;
        this.tracker.onAnimationFrame(kk), null === (Fk = this.frameDebug) || void 0 === Fk || Fk.animationFrame()
      }
      frameRan(kk, Fk, Bk, Rk) {
        var tk;
        this.ping.onFrame(kk.headerWord(pB.z.PingSent), Bk);
        const ak = this.tracker;
        this.pacing.onFrame(kk, Fk, "drawn" === Rk, !document.hidden, ak.isSampling());
        const Xk = kk.headerWord(pB.z.TickUs) / 1e3 + (0, BR.N)();
        ak.EW(Xk), null === (tk = this.frameDebug) || void 0 === tk || tk.wasmFrame(kk, Fk, Bk, "drawn" === Rk, ak.isSampling(), Xk, (0, Ow.e)());
        const bk = Math.max(0, Bk - Fk - Xk);
        if ("drawn" !== Rk) return void("paced" === Rk && (this.pacedCpuMs += bk));
        this.followGame(), ak.onFrameStart(Fk);
        this.gpu.onFrame(kk.headerWord(pB.z.GpuSampled), kk.headerWord(pB.z.GpuTimed), kk.headerWord(pB.z.GpuFrameUs), ak.isSampling()) && ak.onGpuSampleStarted(), ak.onFrameCpu(bk + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Fk)
      }
      stop() {
        for (const kk of this.timers) clearInterval(kk);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), this.ping.stop()
      }
      followGame() {
        const kk = this.shell.joinedGame();
        return kk !== this.game && (this.game = kk, this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null), null !== kk
      }
      countFpsFrame(kk) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = kk
        }
        this.fpsFrames++;
        const Fk = kk - this.fpsSpanStartMs;
        if (!(Fk < Jw.b)) {
          if (!document.hidden) {
            const kk = 1e3 * this.fpsFrames / Fk;
            this.firstSpanFps ??= kk, this.initialFps = this.firstSpanFps, this.fpsOverTime = kk
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = kk
        }
      }
      flush() {
        const kk = this.followGame(),
          {
            cpuFrameMs: Fk,
            refreshHz: Bk,
            cpuBottleneck: tk,
            frameIntervalCv: ak,
            ...Xk
          } = this.tracker.snapshotAndReset(),
          bk = this.shell.inGame(),
          wk = bk && this.inGameAtLastFlush,
          dk = wk ? Xk : Xw.f,
          sk = this.pacing.snapshotAndReset(wk);
        if (this.inGameAtLastFlush = bk, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !kk) return void this.pacing.unsent(sk);
        const Vk = performance.now(),
          Ak = (0, Vw.q)((0, Vw.m)(Vk), this.unsentPage),
          yk = function(kk, Fk, Bk, tk, ak, Xk, bk, wk) {
            var dk, sk, Vk, Jk;
            const Ak = {},
              {
                canvas: ek
              } = kk,
              yk = (0, sw.c)({
                refreshHz: Fk.refreshHz,
                msaa: kk.msaa(),
                autoMsaaOff: (0, Ow.c)()
              });
            for (const fk of (0, Rw.d)()) {
              const mk = fk.name;
              let Wk;
              if ((0, tw.q)(mk)) Wk = (0, Vw.b)(mk);
              else if ((0, Vw.e)(mk)) Wk = wk[mk];
              else if ((0, sw.e)(mk)) Wk = yk[mk];
              else switch (mk) {
                case "fps":
                  Wk = tk;
                  break;
                case "Db":
                  Wk = ak;
                  break;
                case "Zb":
                  Wk = (0, ow.w)((0, Lw.h)().n);
                  break;
                case "pb":
                  Wk = Math.max(ek.width, ek.height);
                  break;
                case "Kb":
                  Wk = Math.min(ek.width, ek.height);
                  break;
                case "xb":
                  Wk = navigator.hardwareConcurrency || null;
                  break;
                case "jb":
                  Wk = (0, Zt.getWebGpuSupported)();
                  break;
                case "Ib":
                  Wk = null === kk.fallbackReason ? null : Nw[kk.fallbackReason];
                  break;
                case "Qb":
                  Wk = Fk.cpuFrameMs;
                  break;
                case "kw":
                  Wk = Fk.refreshHz;
                  break;
                case "Fw":
                  Wk = Fk.cpuBottleneck;
                  break;
                case "Bw":
                  Wk = Fk.frameIntervalCv;
                  break;
                case "Rw":
                  Wk = Fk.frameMs;
                  break;
                case "tw":
                  Wk = Fk.tickMs;
                  break;
                case "ww":
                  Wk = Fk.mainBusyShare;
                  break;
                case "dw":
                  Wk = Fk.mainProbeDelayMs;
                  break;
                case "aw":
                  Wk = Fk.longAnimationFramesPerMin;
                  break;
                case "Xw":
                  Wk = Fk.longAnimationFrameTimeShare;
                  break;
                case "bw":
                  Wk = Fk.longAnimationFrameScriptShare;
                  break;
                case "sw":
                  Wk = Fk.gpuPassMs;
                  break;
                case "Vw":
                  Wk = Fk.gpuSubmitToDoneMs;
                  break;
                case "Jw":
                  Wk = Bk.pacedShare;
                  break;
                case "Aw":
                  Wk = Bk.switchesPerHour;
                  break;
                case "ew":
                  Wk = Bk.lagP50Ms;
                  break;
                case "yw":
                  Wk = Bk.lagP90Ms;
                  break;
                case "fw":
                  Wk = Bk.joinLagP90Ms;
                  break;
                case "uw":
                  Wk = (0, Bw.h)(Xk);
                  break;
                case "Cb":
                  Wk = bk;
                  break;
                case "mw":
                case "Ww":
                case "iw":
                case "Yw":
                case "ow":
                case "Lw":
                case "Ow":
                case "Ew":
                case "Sw":
                case "Nw":
                case "Hw":
                case "Mw":
                case "gw":
                case "Uw":
                case "Gw":
                  Wk = null;
                  break;
                case "lw":
                  Wk = (0, Zt.getPlatformType)();
                  break;
                case "nw":
                  Wk = (0, Zt.getGpuVendor)();
                  break;
                case "Iw":
                  Wk = yw.e[kk.backend];
                  break;
                case "Qw":
                  Wk = (0, Aw.c)();
                  break;
                case "kd":
                  Wk = (0, Zt.getOperatingSystem)();
                  break;
                case "Fd":
                  Wk = (0, Zt.getTrafficSource)();
                  break;
                case "Bd":
                  Wk = null !== (dk = Rk.c.get("gameEntrySource")) && void 0 !== dk ? dk : aw.f;
                  break;
                case "Rd":
                  Wk = Fk.frameLimiter;
                  break;
                case "td":
                  Wk = (0, ww.i)();
                  break;
                case "ad":
                  Wk = null !== (sk = (0, dw.c)()) && void 0 !== sk ? sk : aw.f;
                  break;
                case "Xd":
                  Wk = (0, ww.d)(ek.width, ek.height);
                  break;
                case "bd":
                  Wk = (0, Rw.f)(-(new Date).getTimezoneOffset());
                  break;
                case "sd":
                  Wk = null !== (Vk = kk.fallbackReason) && void 0 !== Vk ? Vk : aw.f;
                  break;
                case "Ad":
                  Wk = "ready";
                  break;
                case "yd":
                  Wk = (0, Zt.getSoftwareRenderer)();
                  break;
                case "dd":
                  Wk = null !== kk.shaderPackReach() ? "true" : "false";
                  break;
                case "fd":
                  Wk = null !== (Jk = kk.shaderPackReach()) && void 0 !== Jk && Jk.sceneDepth ? "true" : "false";
                  break;
                case "Wd": {
                  const Fk = kk.shaderPackReach();
                  Wk = null !== Fk && void 0 !== Fk && Fk.sunShadow ? "all" : null !== Fk && void 0 !== Fk && Fk.airShadow ? "air" : "none";
                  break
                }
                case "vd":
                  Wk = ew.n;
                  break;
                case "wd":
                case "Vd":
                case "Jd":
                  Wk = aw.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${mk}`)
              }
              if (void 0 === Wk) throw new Error(`Metric ${mk} has no value`);
              Ak[mk] = Wk
            }
            return Ak
          }(this.shell, {
            cpuFrameMs: Fk,
            refreshHz: Bk,
            cpuBottleneck: tk,
            frameIntervalCv: ak,
            ...dk
          }, sk, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Ak);
        if (! function(kk, Fk, Bk) {
            return (0, CF.e)(), kk(ek.l.Send, Fk, Bk)
          }(this.shell.writeCmd, Jk.Ec, function(kk) {
            const Fk = (0, rk.g)((0, KF.f)(kk)),
              Bk = new Uint8Array(ek.Vd.BYTES + Fk.length);
            return new DataView(Bk.buffer).setUint16(0, KF.b.AnalyticsUpdate, !0), Bk.set(Fk, ek.Vd.BYTES), Bk
          }(yk))) return this.unsentPage = Ak, this.pacing.unsent(sk), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Bw.e), (0, Vw.k)(yk, "wasm", Vk)
      }
    }
    var Mw = Bk(39177);

    function gw(kk, Fk, Bk) {
      const Rk = new Map;
      return (0, Mw.b)(((kk, Bk, Rk) => Fk.Ts(kk, Bk, Rk)), ((Fk, Bk, tk) => {
        const ak = `${Fk},${Bk},${tk}`;
        return Rk.has(ak) || Rk.set(ak, (0, rF.c)(kk, Fk, Bk, tk)), Rk.get(ak)
      }), Bk)
    }
    var Uw = Bk(39181),
      Gw = Bk(40122);

    function Tw(kk) {
      const Fk = null !== kk && 0 !== (ek.w.playerFlags(kk.api.apiView, 0) & ek.Ed.CursorAim);
      Fk !== (0, Gw.n)() && (0, Gw.I)(Fk, null !== kk)
    }

    function rw(kk) {
      return (0, fR.d)(mR.D, kk)
    }
    const Dw = new ak.d((kk => Bk(42016)(`./${kk}/${kk}Client`)));
    let zw = null,
      Pw = null;
    async function hw(kk) {
      zw ??= Bk.e(27).then((() => Bk(38763))).then((kk => {
        Pw = kk.createDefaultClientPlugins
      }), (kk => {
        throw zw = null, kk
      })), await Promise.all([Dw.load(kk), zw])
    }

    function qw(kk) {
      kk.load(new GF(hR, new ZR))
    }
    let Cw = !1;
    const Zw = new WeakMap;

    function pw(kk) {
      try {
        kk()
      } catch (Fk) {
        console.error("[bloxd-wasm-client] a session-end step failed", Fk)
      }
    }

    function Kw(kk, Fk) {
      ! function() {
        var kk, Fk;
        zR.Howler.volume();
        const Bk = zR.Howler;
        null === (kk = Bk._autoResume) || void 0 === kk || kk.call(Bk), null === (Fk = Bk._autoSuspend) || void 0 === Fk || Fk.call(Bk)
      }(), Fk.audio.prepare();
      const Bk = new ik(Fk.core, Fk.memory, Fk.audio);
      let ak;
      try {
        ak = new At(Bk, Fk.options)
      } catch (Jk) {
        return kk.crash(yt.w, Jk), null
      }(0, wk.g)(et(Bk, ak));
      const sk = new ib({
        running: kk,
        api: Bk,
        core: Fk.core,
        memory: Fk.memory,
        staleOr: Fk.staleOr,
        reportFault: Fk.reportReplayFault,
        options: Fk.options,
        sessionInfo: Fk.sessionInfo,
        replayShaderPack: Fk.replayShaderPack
      });
      (0, BR.B)();
      const Vk = new cR({
        api: Bk,
        tables: ak,
        sessionInfo: Fk.sessionInfo,
        gameFactory: kk => Dw.loadedFactory(kk),
        defaultPlugins: (kk, Fk, Bk, Rk) => {
          if (null === Pw) throw new Error("The default plugins started before they loaded");
          return Pw(kk, Fk, Bk, Rk)
        },
        serverOptions: Fk.options,
        onNetEvent: kk => {
          sk.netEvent(kk), Fk.onNetEvent(kk)
        },
        setLocalOptions: Fk => {
          ob(kk, {
            changes: Fk,
            reset: !1
          })
        },
        playSound: (kk, Bk, Rk, tk, ak, Xk, bk) => Fk.audio.playGame(kk, Bk, Rk, tk, ak, Xk, bk),
        onSessionEnd: () => {
          pw(tk.q), pw(IR), pw((() => {
            Rk.c.set({
              openInGameMenuName: null
            })
          })), pw((() => {
            Fk.audio.cancelPreload()
          }))
        },
        beforeWrite: Fk.beforeWrite,
        beforeOp: Fk.beforeOp,
        cameraScreen: nR,
        showCameraFacing: QR,
        onEventOverflow: Fk.onEventOverflow,
        screenBandY: bk.h,
        replayEntities: sk.entityHooks,
        hasPackModel: Fk.hasPackModel
      });
      return Vk.attach(kk), Zw.set(Vk, sk), DR(Vk.items, Fk.audio),
        function(kk) {
          kk.setClientFreeCameraGrant("isDev", !1);
          const Fk = Fk => {
            kk.setClientFreeCameraGrant("hasDeveloperRank", Fk.playerHasRank("developer"))
          };
          (0, Xk.p)("userContextUpdated", Fk)
        }(Vk), Cw || (Cw = !0, (0, Xk.p)("appManagerUpdated|openInGameMenuName", (kk => {
          !kk && (0, dk.k)().includes(dk.e) && (0, dk.l)(dk.e)
        }))), Vk
    }

    function xw(kk) {
      try {
        kk.closeGame()
      } finally {
        var Fk;
        null === (Fk = Zw.get(kk)) || void 0 === Fk || Fk.stop(), Zw.delete(kk)
      }
    }
  },
  40245: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    const Rk = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40254: (kk, Fk, Bk) => {
    function Rk() {
      return Bk(40261)
    }

    function tk() {
      return Bk(40269)
    }

    function ak(kk) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(kk)
    }
    Bk.d(Fk, {
      d: () => ak,
      g: () => Rk,
      i: () => tk
    })
  },
  36019: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      f: () => ak,
      j: () => wk
    });
    var Rk = Bk(36011);
    const tk = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function ak(kk) {
      if (kk instanceof WebAssembly.RuntimeError) return !0;
      const Fk = kk instanceof Error ? kk.stack : void 0;
      return "string" === typeof Fk && tk.test(Fk)
    }

    function Xk(kk, Fk, Bk) {
      var ak;
      const Xk = kk instanceof Error ? kk.name : "thrown",
        bk = (kk instanceof Error && null !== (ak = kk.stack) && void 0 !== ak ? ak : "").split("\n").filter((kk => tk.test(kk))).slice(0, 8).map((kk => kk.trim())),
        wk = null === Fk ? "wasm memory unknown" : `wasm memory ${Math.round(Fk/2**20)} MB`,
        dk = null === Bk.panic ? "" : `, panic: ${(0,Rk.g)(Bk.panic)}`,
        sk = `${Xk}: ${kk instanceof Error?kk.message:String(kk)}`;
      return `${(0,Rk.n)(Bk.kind,Bk.refusedBytes)} ${sk} (${wk})${dk}${bk.length>0?` | ${bk.join(" < ")}`:""}`
    }
    const bk = 500;

    function wk(kk) {
      let Fk = "[object Object]";
      try {
        Fk = String(kk)
      } catch {}
      if ("[object Object]" !== Fk) return Fk;
      try {
        var Bk, Rk;
        return null !== (Bk = null === (Rk = JSON.stringify(kk)) || void 0 === Rk ? void 0 : Rk.slice(0, bk)) && void 0 !== Bk ? Bk : Fk
      } catch {
        return Fk
      }
    }
  },
  42016: (kk, Fk, Bk) => {
    var Rk = {
      "./bedwars/bedwarsClient": [38868, 9],
      "./bridgeBattle/bridgeBattleClient": [38873, 10],
      "./buildAFactory2/buildAFactory2Client": [38129, 72, 71, 70, 219, 235, 11],
      "./classic/classicClient": [38876, 12],
      "./clutch/clutchClient": [38883, 13],
      "./containmentBreach/containmentBreachClient": [38890, 14],
      "./cooking/cookingClient": [38995, 15],
      "./defusal/defusalClient": [39003, 16],
      "./frontline/frontlineClient": [39012, 72, 71, 70, 17],
      "./goalRush/goalRushClient": [39016, 18],
      "./luckyBedwars/luckyBedwarsClient": [39018, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39026, 20],
      "./oneBlock/oneBlockClient": [39035, 21],
      "./plots/plotsClient": [39041, 234, 238, 22],
      "./pvpCiv/pvpCivClient": [39106, 23],
      "./skyIslands/skyIslandsClient": [39109, 24],
      "./skyblock/skyblockClient": [38163, 72, 219, 190, 25],
      "./tsunami/tsunamiClient": [39114, 26]
    };

    function tk(kk) {
      if (!Bk.o(Rk, kk)) return Promise.resolve().then((() => {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }));
      var Fk = Rk[kk],
        tk = Fk[0];
      return Promise.all(Fk.slice(1).map(Bk.e)).then((() => Bk(tk)))
    }
    tk.keys = () => Object.keys(Rk), tk.id = 42016, kk.exports = tk
  },
  40261: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40269: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36011: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      e: () => ak,
      g: () => wk,
      j: () => Xk,
      n: () => tk
    });
    const Rk = /^alloc_failed (\d+) bytes$/;

    function tk(kk, Fk) {
      return ak(kk, Fk) ? `trap=alloc_failed ${Fk} bytes` : `trap=${kk}`
    }

    function ak(kk, Fk) {
      return "unreachable" === kk && Fk > 0
    }

    function Xk(kk, Fk, Bk) {
      const Rk = function(kk) {
        return kk instanceof WebAssembly.RuntimeError ? /unreachable/i.test(kk.message) ? "unreachable" : /out of bounds/i.test(kk.message) ? "out_of_bounds" : "runtime_error" : (kk instanceof RangeError || kk instanceof Error && "InternalError" === kk.name) && /call stack|recursion/i.test(kk.message) ? "stack_overflow" : "js_error"
      }(kk);
      if ("unreachable" !== Rk) return {
        kind: Rk,
        panic: null,
        refusedBytes: 0
      };
      const tk = Fk(),
        ak = Bk();
      return {
        kind: Rk,
        panic: ak > 0 ? null : tk,
        refusedBytes: ak
      }
    }
    const bk = 300;

    function wk(kk) {
      return kk.replace(/\s*\n\s*/g, " / ").slice(0, bk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);