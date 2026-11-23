export const id = 56;
export const ids = [56];
export const modules = {
  39016: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      c: () => Tk
    });
    var Xk = Ik(34);

    function Tk(kk) {
      return "refetchCode" === kk || "devDownloadJson" === kk || kk.startsWith("Plugin")
    }

    function ik(kk, Fk) {
      "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([Ik.e(107), Ik.e(108), Ik.e(103), Ik.e(105), Ik.e(214)]).then((() => Ik(41734))).then((Ik => {
        let {
          runClientGameMessage: Xk
        } = Ik;
        Xk(kk, Fk)
      })).catch((Fk => {
        console.error(`Game message ${kk} failed`, Fk)
      })) : Xk.g.GL("showPetUi", Fk) : Xk.g.GL("refetchCode")
    }
  },
  42586: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      h: () => Tk
    });
    const Xk = ["recording", "freecam", "keyframe"];

    function Tk() {
      const kk = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(kk[1]) << 32n | BigInt(kk[0])
    }
  },
  34091: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      f: () => ak
    });
    var Xk = Ik(25);
    const Tk = 24,
      ik = "farNametags",
      yk = 1e5;

    function lk() {
      var kk;
      return null === (kk = Xk.d.get("showDistantNametags")) || void 0 === kk || kk
    }

    function ak() {
      var kk;
      return null !== (kk = function() {
        const kk = new URLSearchParams(window.location.search).get(ik),
          Fk = null === kk || "" === kk ? NaN : Number(kk);
        return Number.isFinite(Fk) && Fk >= 0 ? Math.min(Fk, yk) : null
      }()) && void 0 !== kk ? kk : lk() ? 0 : Tk
    }
  },
  42580: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      blockIdOf: () => da.b,
      clearWasmCameraScreen: () => IT,
      creativeItemIds: () => XX.creativeItemIds,
      decodeMapSettings: () => ga,
      drainTextRerasters: () => Ul.d,
      enchantmentPerksOf: () => XX.enchantmentPerksOf,
      endGameHost: () => iq,
      followCursorAim: () => Aa,
      followMenuPrefs: () => MT,
      loadAudio: () => kq,
      loadClientGame: () => Ma,
      loadTextIcons: () => Ul.f,
      rasterText: () => Rl.e,
      readBoardToEdit: () => Ba,
      readDrawCensus: () => ma.g,
      setTextHost: () => Ul.n,
      setTextLocalPlayer: () => Ul.p,
      showInCreativeInvenOf: () => XX.showInCreativeInvenOf,
      startGameHost: () => Tq,
      startShellAnalytics: () => ca,
      startSkyFeed: () => ya,
      textChanged: () => Ul.u,
      warmText: () => Rl.h,
      wasmCameraScreen: () => FT
    });
    Ik(36502);
    var Xk = Ik(25),
      Tk = Ik(36848),
      ik = Ik(39162),
      yk = Ik(34),
      lk = Ik(3344),
      ak = Ik(36840),
      qk = Ik(1270),
      Lk = Ik(614),
      tk = Ik(38213),
      Zk = Ik(4797),
      jk = Ik(40641),
      ek = Ik(40583);
    const wk = ek.Gb / 4,
      Hk = ek.r.PlaySound,
      Jk = ek.r.SoundReset,
      xk = Zk.X.ReplayFailed,
      Pk = Zk.X.RecorderEvent;
    class Kk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = kk, this.memory = Fk, this.audio = Ik, this.serverIds = new Int32Array(256).fill(ek.Yc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(ek.y.BYTES)), this.renderPtr = 0, this.St = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new ek.$(kk, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.ZTk(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(kk, Fk) {
        const Ik = this.eventView();
        return new Uint8Array(Ik.buffer, Ik.byteOffset + kk, Fk)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return ek.y.localId(this.apiView, 0)
      }
      localDeaths() {
        return ek.y.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const kk = this.apiView,
          Fk = ek.y.entRenderPtr(kk, 0),
          Ik = ek.y.entVisPtr(kk, 0),
          Xk = ek.y.entCapacity(kk, 0);
        if (Fk !== this.renderPtr || Ik !== this.visPtr || Xk !== this.St || this.renderBuffer !== this.buffer) {
          this.renderPtr = Fk, this.visPtr = Ik, this.St = Xk, this.renderBuffer = this.buffer;
          const kk = this.memoryView(Float32Array, Fk, Xk * wk, "the render array"),
            Tk = this.memoryView(Uint8Array, Ik, Xk, "the visibility array");
          this.renderCapacity = kk && Tk ? Xk : 0, this.render = kk && Tk ? kk : new Float32Array(0), this.vis = kk && Tk ? Tk : new Uint8Array(0)
        }
      }
      memoryView(kk, Fk, Ik, Xk) {
        try {
          return (0, jk.l)(kk, this.memory().buffer, Fk, Ik, Xk)
        } catch (Tk) {
          return this.keepCorruption(Tk), null
        }
      }
      memoryData(kk, Fk, Ik, Xk) {
        try {
          return (0, jk.e)(this.memory().buffer, kk, Fk, Ik, Xk)
        } catch (Tk) {
          return this.keepCorruption(Tk), null
        }
      }
      reportCorruption(kk) {
        this.keepCorruption(new jk.b(kk))
      }
      keepCorruption(kk) {
        if (!(kk instanceof jk.b)) throw kk;
        this.corruption ??= kk
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(kk, Fk, Ik) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Xk,
          len: Tk
        } = kk;
        this.eventsPtr = Xk, this.eventsLen = Tk, this.eventsBuffer = null;
        const ik = this.eventView();
        for (let qk = 0; qk < Tk;) {
          const kk = ik.getUint32(qk, !0),
            Ik = 65535 & kk,
            Xk = kk >>> 16,
            Tk = qk + Zk.W;
          if (Ik === ek.r.EntitySpawned) {
            var yk;
            if (Xk !== ek.Lb.BYTES) throw Sk(Ik, qk, Xk);
            const kk = ek.Lb.serverId(ik, Tk);
            this.spawned(kk, ek.Lb.index(ik, Tk), ek.Lb.kind(ik, Tk)), null === (yk = Fk.entityAdded) || void 0 === yk || yk.call(Fk, kk)
          } else if ((Ik === ek.r.ChunkSlot || Ik === ek.r.EntityInfoChanged) && !(0, ek.pe)(Ik, ik, Tk, Xk, Fk)) throw Sk(Ik, qk, Xk);
          qk = Tk + (0, Zk.pe)(Xk)
        }
        try {
          var lk;
          null === (lk = Fk.afterPrescan) || void 0 === lk || lk.call(Fk), this.throwCorruption(), !Ik() && this.dispatch(kk, Fk, Ik) && (this.throwCorruption(), this.applyListener(), Fk.afterWalk(kk.kind)), this.throwCorruption()
        } catch (ak) {
          throw ak instanceof jk.b && (this.corruption ??= ak), ak
        } finally {
          Ik() || null !== this.corruption || this.applyDespawns(Tk, Fk)
        }
      }
      applyDespawns(kk, Fk) {
        const Ik = this.eventView();
        for (let Tk = 0; Tk < kk;) {
          const kk = Ik.getUint32(Tk, !0),
            ik = Tk + Zk.W;
          if ((65535 & kk) === ek.r.EntityDespawned && kk >>> 16 === ek.Lb.BYTES) {
            const kk = ek.Lb.serverId(Ik, ik);
            var Xk;
            if (this.despawned(kk, ek.Lb.index(Ik, ik))) null === (Xk = Fk.entityRemoved) || void 0 === Xk || Xk.call(Fk, kk)
          }
          Tk = ik + (0, Zk.pe)(kk >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(kk, Fk, Ik) {
        const {
          len: Xk,
          net: Tk,
          netOffsets: ik
        } = kk;
        let yk = this.eventView(),
          lk = 0;
        for (let sk = 0; sk < Xk;) {
          const kk = yk.getUint32(sk, !0),
            Xk = 65535 & kk,
            Vk = kk >>> 16,
            vk = sk + Zk.W;
          let Ek = !1;
          if (lk < Tk.length && ik[lk] === sk) Fk.netEvent(Tk[lk]), lk++, Ek = !0;
          else if (Xk === Zk.X.LocalPlayerBound) {
            var ak;
            if (Vk !== Zk.Fb) throw Sk(Xk, sk, Vk);
            null === (ak = Fk.localPlayerBound) || void 0 === ak || ak.call(Fk, yk.getInt32(vk, !0)), Ek = !0
          } else if (Xk === Zk.X.LocalHurt) {
            var qk;
            if (Vk !== Zk.Cb) throw Sk(Xk, sk, Vk);
            null === (qk = Fk.localHurt) || void 0 === qk || qk.call(Fk, yk.getInt32(vk, !0), yk.getFloat32(vk + 4, !0), yk.getUint32(vk + 8, !0)), Ek = !0
          } else if (Xk === Zk.X.AttackHit) {
            var Lk;
            if (Vk !== Zk.e) throw Sk(Xk, sk, Vk);
            const kk = yk.getFloat32(vk, !0),
              Ik = yk.getFloat32(vk + 4, !0),
              Tk = yk.getFloat32(vk + 8, !0),
              ik = yk.getUint32(vk + 12, !0);
            null === (Lk = Fk.attackHit) || void 0 === Lk || Lk.call(Fk, kk, Ik, Tk, 0 !== (ik & Zk.l.Crit), 0 !== (ik & Zk.l.HitSelf))
          } else if (Xk === Zk.X.PhysicsType) {
            var tk;
            if (Vk !== Zk.bc) throw Sk(Xk, sk, Vk);
            null === (tk = Fk.physicsType) || void 0 === tk || tk.call(Fk, yk.getUint32(vk, !0), yk.getInt32(vk + 4, !0)), Ek = !0
          } else if (Xk === Zk.X.VehicleEffect) {
            var jk;
            const kk = zk(yk, vk, Vk);
            if (null === kk) throw Sk(Xk, sk, Vk);
            null === (jk = Fk.vehicleEffect) || void 0 === jk || jk.call(Fk, kk.op, kk.name, kk.icon, kk.level, kk.durationMs), Ek = !0
          } else if (Xk === Zk.X.ZoomChanged) {
            var wk;
            if (Vk !== Zk.Yd) throw Sk(Xk, sk, Vk);
            null === (wk = Fk.zoomChanged) || void 0 === wk || wk.call(Fk, yk.getFloat32(vk, !0), yk.getUint8(vk + 4)), Ek = !0
          } else if (Xk === Zk.X.ZoomDisabled) {
            var Kk;
            if (0 !== Vk) throw Sk(Xk, sk, Vk);
            null === (Kk = Fk.zoomDisabled) || void 0 === Kk || Kk.call(Fk), Ek = !0
          } else if (Xk === Zk.X.GameCamera) {
            var Qk;
            null === (Qk = Fk.gameCamera) || void 0 === Qk || Qk.call(Fk, new Uint8Array(yk.buffer, yk.byteOffset + vk, Vk).slice()), Ek = !0
          } else if (Xk === ek.r.ChunkSlot || Xk === ek.r.EntityInfoChanged);
          else if (Xk >= Hk && Xk <= Jk) {
            if (this.audio && !this.audio.onAudioEvent(Xk, yk, vk, Vk)) throw Sk(Xk, sk, Vk)
          } else if (Xk >= xk && Xk <= Pk) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Xk, yk, vk, Vk)) throw Sk(Xk, sk, Vk);
              Ek = !0
            }
          } else if (Xk >= ek.md && Xk <= ek.pd && Xk !== Zk.X.EnvLighting) {
            if (!(0, ek.pe)(Xk, yk, vk, Vk, Fk)) throw Sk(Xk, sk, Vk);
            Ek = !0
          }
          if (Ek) {
            if (Ik()) return !1;
            yk = this.eventView()
          }
          sk = vk + (0, Zk.pe)(Vk)
        }
        return !Ik()
      }
      applyListener() {
        var kk;
        if (!this.audio) return;
        const Fk = ek.y.audioViewPtr(this.apiView, 0),
          Ik = this.memory().buffer;
        let Xk = this.audioView;
        (null === (kk = Xk) || void 0 === kk ? void 0 : kk.buffer) === Ik && Xk.byteOffset === Fk || (Xk = (0, jk.e)(Ik, Fk, ek.C.BYTES, 8, "the audio view"), this.audioView = Xk), Xk && this.audio.applyListener(Xk)
      }
      indexOf(kk) {
        return this.indexById.get("number" === typeof kk ? kk : +kk)
      }
      isLocal(kk) {
        return kk !== ek.Yc && kk === ek.y.localId(this.apiView, 0)
      }
      OJ(kk) {
        const Fk = [0, 0, 0];
        return this.readPosition("number" === typeof kk ? kk : +kk, Fk) ? Fk : null
      }
      readPosition(kk, Fk) {
        const Ik = this.apiView;
        if (void 0 !== this.indexById.get(kk) && this.isLocal(kk)) {
          for (let kk = 0; kk < 3; kk++) Fk[kk] = ek.y.localPos(Ik, 0, kk);
          return !0
        }
        return this.readDrawnPosition(kk, Fk)
      }
      readDrawnPosition(kk, Fk) {
        const Ik = this.apiView,
          Xk = this.indexById.get(kk);
        if (void 0 === Xk || Xk >= this.renderCapacity) return Fk[0] = Fk[1] = Fk[2] = NaN, !1;
        const Tk = Xk * wk;
        for (let ik = 0; ik < 3; ik++) Fk[ik] = this.render[Tk + ik] + ek.y.origin(Ik, 0, ik);
        return !0
      }
      checkValid(kk) {
        return void 0 !== this.indexOf(kk)
      }
      isAlive(kk) {
        const Fk = this.indexOf(kk);
        if (void 0 === Fk) return null;
        if (this.ensureViews(), Fk >= this.renderCapacity) return null;
        const Ik = this.vis[Fk];
        return 0 === Ik ? null : 0 !== (Ik & ek.me.Alive)
      }
      getEntityType(kk) {
        const Fk = this.indexOf(kk);
        return void 0 === Fk ? this.isLocal("number" === typeof kk ? kk : +kk) ? "Player" : null : sk(this.kinds[Fk])
      }
      spawned(kk, Fk, Ik) {
        if (Fk >= 1048576) throw new jk.b(`entity ${kk} spawned at index ${Fk}`);
        this.ensureIndex(Fk), this.serverIds[Fk] === kk && null !== this.idStr[Fk] || (this.idStr[Fk] = String(kk)), this.serverIds[Fk] = kk, this.kinds[Fk] = Ik, this.indexById.set(kk, Fk)
      }
      despawned(kk, Fk) {
        let Ik = !1;
        return this.indexById.get(kk) === Fk && (this.indexById.delete(kk), Ik = !0), Fk < this.serverIds.length && this.serverIds[Fk] === kk && (this.serverIds[Fk] = ek.Yc, this.kinds[Fk] = 0, this.idStr[Fk] = null), Ik
      }
      ensureIndex(kk) {
        const Fk = this.serverIds.length;
        if (kk < Fk) return;
        let Ik = 2 * Fk;
        for (; Ik <= kk;) Ik *= 2;
        const Xk = new Int32Array(Ik).fill(ek.Yc);
        Xk.set(this.serverIds), this.serverIds = Xk;
        const Tk = new Uint16Array(Ik);
        Tk.set(this.kinds), this.kinds = Tk;
        for (let ik = Fk; ik < Ik; ik++) this.idStr.push(null)
      }
      eventView() {
        const kk = this.memory().buffer;
        return kk !== this.eventsBuffer && (this.eventsBuffer = kk, this.events = new DataView(kk, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const kk = this.memory().buffer;
        this.buffer = kk, this.viewPtr < 0 && (this.viewPtr = this.core.jTk()), this.view = new DataView(kk, this.viewPtr, ek.y.BYTES), this.rereadDirectory()
      }
    }

    function Qk(kk) {
      return kk >>> ek.d === ek.v.Item
    }

    function sk(kk) {
      var Fk, Ik;
      const Xk = kk & ek.h;
      switch (kk >>> ek.d) {
        case ek.v.Lifeform:
          return null !== (Fk = Lk.m[Xk]) && void 0 !== Fk ? Fk : null;
        case ek.v.Throwable:
          return null !== (Ik = tk.l[Xk]) && void 0 !== Ik ? Ik : null;
        case ek.v.Mesh:
          return "Mesh";
        case ek.v.Audio:
          return "AudioEntity";
        case ek.v.Item:
          return "Item";
        default:
          return null
      }
    }
    const Vk = new TextDecoder;

    function zk(kk, Fk, Ik) {
      if (Ik < Zk.Fd.HEAD_BYTES) return null;
      const Xk = kk.getUint32(Fk, !0),
        Tk = kk.getUint32(Fk + 20, !0),
        ik = kk.getUint32(Fk + 24, !0),
        yk = Zk.Fd.HEAD_BYTES + (0, Zk.pe)(Tk);
      if (Xk !== Zk.Fd.UPDATE && Xk !== Zk.Fd.REMOVE || Tk > Ik || yk + ik > Ik) return null;
      const lk = (Ik, Xk) => Vk.decode(new Uint8Array(kk.buffer, kk.byteOffset + Fk + Ik, Xk)),
        ak = kk.getFloat64(Fk + 12, !0);
      return {
        op: Xk,
        level: kk.getFloat64(Fk + 4, !0),
        durationMs: Number.isNaN(ak) ? null : ak,
        name: lk(Zk.Fd.HEAD_BYTES, Tk),
        icon: lk(yk, ik)
      }
    }

    function Sk(kk, Fk, Ik) {
      return new jk.b(`event ${kk} at ${Fk} of ${Ik} bytes`)
    }
    var vk = Ik(337),
      Ek = Ik(1217),
      Ok = Ik(39016),
      nk = Ik(1891),
      Gk = Ik(41029),
      pk = Ik(1844),
      uk = Ik(39183),
      bk = Ik(39217),
      Rk = Ik(39196),
      Uk = Ik(40623),
      Ck = Ik(2338),
      Nk = Ik(39180),
      ck = Ik(39209);
    const Wk = Math.max(ek.wb.BYTES, ek.qb.BYTES, ek.tb.BYTES);

    function fk(kk) {
      if (!(0, ck.g)(kk)) return null;
      const Fk = Number(kk);
      return (0 | Fk) === Fk ? Fk : null
    }
    class Bk {
      constructor(kk) {
        this.api = kk, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Nk.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.AT = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = ek.Yc, this.localName = String(ek.Yc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.AT = null;
        const kk = this.api.queries.directorView() >= ek.wb.BYTES ? this.scratchView() : null;
        null !== kk && (this.defaultFov = (0, pk.A)(ek.wb.fov(kk, 0)), this.baseFov = (0, pk.A)(ek.wb.baseFov(kk, 0)), this.aspect = ek.wb.aspect(kk, 0), this.bodyHeading = ek.wb.bodyHeading(kk, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(kk) {
        this.viewHeading = kk
      }
      get localPlayerId() {
        const kk = ek.y.localId(this.api.apiView, 0);
        return kk !== this.localId && (this.localId = kk, this.localName = String(kk)), this.localName
      }
      getEntityPosition(kk) {
        return this.readEntity(kk) ? this.entityFeet : null
      }
      getEntityAimPoint(kk) {
        return this.readEntity(kk) ? this.entityAim : null
      }
      getEntityHeading(kk) {
        const Fk = fk(kk);
        if (null === Fk) return null;
        const Ik = ek.y.localId(this.api.apiView, 0);
        return Fk === Ik && Ik !== ek.Yc ? this.viewHeading : this.readEntity(kk) ? this.entityHeading : null
      }
      raycastTerrain(kk, Fk, Ik) {
        const Xk = this.api.queries.cameraSweep(kk[0], kk[1], kk[2], Fk[0], Fk[1], Fk[2], Ik);
        return Xk < Ik - 1e-6 ? Xk : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const kk = this.defaultPose;
        kk.fov = this.defaultFov;
        const Fk = this.api.queries.directorDefaultPose() >= ek.qb.BYTES ? this.scratchView() : null;
        if (null === Fk) return kk;
        for (let Ik = 0; Ik < 3; Ik++) kk.position[Ik] = ek.qb.eye(Fk, 0, Ik);
        return kk.heading = ek.qb.heading(Fk, 0), kk.pitch = ek.qb.pitch(Fk, 0), kk
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
        const Fk = fk(kk);
        if (null === Fk) return !1;
        if (Fk === this.AT) return this.entityLive;
        this.AT = Fk;
        const Ik = this.api.queries.directorEntity(Fk) >= ek.tb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== Ik, null === Ik) return !1;
        for (let Xk = 0; Xk < 3; Xk++) this.entityFeet[Xk] = ek.tb.feet(Ik, 0, Xk), this.entityAim[Xk] = this.entityFeet[Xk];
        return this.entityAim[1] += ek.tb.eyeHeight(Ik, 0), this.entityHeading = ek.tb.heading(Ik, 0), !0
      }
      scratchView() {
        const kk = this.api.scratch(),
          Fk = this.api.memory().buffer,
          Ik = this.scratch;
        return null !== Ik && Ik.buffer === Fk && Ik.byteOffset === kk ? Ik : (this.scratch = this.api.memoryData(kk, Wk, 8, "the director's record"), this.scratch)
      }
    }
    const dk = {
        mode: "default"
      },
      Yk = {
        show: () => {},
        clear: () => {}
      };

    function Ak() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class gk {
      constructor(kk) {
        this.options = kk, this.XZ = void 0, this.director = void 0, this.latest = dk, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          JG: 0,
          xG: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.By = new Int32Array(3 * ek.Od), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * ek.Od), this.XZ = new Bk(kk.api), this.director = new Rk.b(this.XZ)
      }
      settingsChanged(kk) {
        let Fk = dk;
        if (kk.length > 0) try {
          Fk = (0, Uk.b)(kk)
        } catch {}
        this.latest = Fk, this.pending = Fk
      }
      call(kk, Fk, Ik, Xk, Tk, ik) {
        var yk, lk;
        let ak;
        this.holding = !1;
        try {
          ak = this.answer(kk, Fk, Ik, Xk, Tk, ik)
        } catch (Zk) {
          var qk, Lk;
          throw this.answeredPose = !1, null === (qk = (Lk = this.options).showFacing) || void 0 === qk || qk.call(Lk, null), Zk
        }
        const tk = this.answeredPose && 0 === (Xk & ek.vb.Held);
        return this.answeredPose = ak !== ek.nb.None, this.holding = this.answeredPose && !tk, null === (yk = (lk = this.options).showFacing) || void 0 === yk || yk.call(lk, this.holding ? this.facing : null), ak
      }
      holdsView() {
        return this.holding
      }
      answer(kk, Fk, Ik, Xk, Tk, ik) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          XZ: yk
        } = this;
        yk.readView();
        if (0 !== (Xk & ek.vb.Held) || yk.setViewHeading((0, uk.y)(yk.bodyHeading)), void 0 !== this.pending) {
          const kk = this.pending;
          this.pending = void 0, this.director.setSettings(kk), this.syncShownSettings()
        }
        this.readLook((0, Ck.d)(Fk), (0, Ck.d)(Ik), Xk, (0, Ck.d)(Tk), (0, Ck.d)(ik));
        const lk = this.director.update(kk / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !lk) return ek.nb.None;
        const [ak, qk, Lk] = lk.position;
        if (0 === this.options.api.queries.directorPose(ak, qk, Lk, (0, uk.y)(lk.heading), (0, uk.k)(lk.pitch), (0, pk.k)(lk.fov))) return ek.nb.None;
        if ("default" === this.director.getSettings().mode) return ek.nb.Pose;
        switch (this.facing) {
          case "camera":
            return ek.nb.FaceCamera;
          case "cursor":
            return ek.nb.FaceCursor;
          default:
            return ek.nb.FaceMovement
        }
      }
      afterFrame(kk) {
        kk ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = dk, this.idle()
      }
      restart() {
        const kk = this.holding;
        this.idle(), this.holding = kk
      }
      idle() {
        var kk, Fk;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Rk.b(this.XZ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (kk = (Fk = this.options).showFacing) || void 0 === kk || kk.call(Fk, null), this.setCentres(0)
      }
      syncShownSettings() {
        const kk = this.director.getSettings();
        if (kk === this.shownSettings) return;
        this.shownSettings = kk;
        const Fk = (0, bk.e)(kk);
        this.facing = Fk.facing, this.mouseTurns = Fk.mouseTurns
      }
      readLook(kk, Fk, Ik, Xk, Tk) {
        const ik = this.look,
          yk = 0 !== (Ik & ek.vb.LookPointed);
        if (null === this.mouseTurns && !yk) return ik.JG = 0, ik.xG = 0, void(ik.pointedAt = void 0);
        let lk;
        yk && (this.pointedAt.heading = Xk, this.pointedAt.pitch = Tk, lk = this.pointedAt);
        const {
          XZ: ak
        } = this;
        ak.setViewHeading((0, bk.c)(ak.getViewHeading(), kk, Fk, lk, "look" === this.mouseTurns, ik))
      }
      writeCentres(kk) {
        const Fk = this.next,
          Ik = Math.min(kk.length, ek.Od);
        for (let Xk = 0; Xk < Ik; Xk++)
          for (let Ik = 0; Ik < 3; Ik++) Fk[3 * Xk + Ik] = Math.floor(kk[Xk][Ik] / ek.H);
        this.setCentres(Ik)
      }
      setCentres(kk) {
        const {
          By: Fk,
          next: Ik
        } = this;
        let Xk = kk === this.centresLen;
        for (let Tk = 0; Xk && Tk < 3 * kk; Tk++) Xk = Fk[Tk] === Ik[Tk];
        Xk || (Fk.fill(0), Fk.set(Ik.subarray(0, 3 * kk)), this.centresLen = kk, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const kk = this.options.cmd();
        null !== kk && (0, ek.Pf)(kk, 0, this.By, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var kk, Fk, Ik;
        return null !== (kk = null === (Fk = (Ik = this.options).screen) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : Yk
      }
      hidden() {
        var kk;
        return (null !== (kk = this.options.isPageHidden) && void 0 !== kk ? kk : Ak)()
      }
      now() {
        var kk, Fk, Ik;
        return null !== (kk = null === (Fk = (Ik = this.options).now) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : performance.now()
      }
    }
    var mk = Ik(40781);
    const hk = ek.H * ek.H * ek.H,
      rk = Math.log2(ek.H),
      Dk = ek.H - 1,
      Mk = ek.V.BYTES / 4,
      kF = new Uint16Array(hk);

    function FF(kk, Fk, Ik) {
      return kk * ek.H * ek.H + Fk * ek.H + Ik
    }
    class IF {
      constructor(kk) {
        this.chunk = kk
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(kk, Fk, Ik) {
        return FF(kk, Fk, Ik)
      }
    }
    class XF {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class TF {
      constructor(kk, Fk, Ik, Xk) {
        this.table = kk, this.slot = Fk, this.generation = Ik, this.epoch = Xk, this.GZ = new IF(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = kF, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get Me() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get vj() {
        const kk = this.gameVoxels(),
          Fk = this.layers ??= new Uint16Array(ek.H);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Ik = 0; 0 !== this.staleLayers; Ik++) {
          const Xk = 1 << Ik;
          0 !== (this.staleLayers & Xk) && (this.staleLayers &= ~Xk, Fk[Ik] = iF(kk, Ik))
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
          const Ik = Fk.patched ??= new Uint16Array(hk);
          Ik.set(kk);
          for (const [kk, Xk] of Fk.ids) Ik[kk] = Xk;
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
      write(kk, Fk, Ik) {
        const Xk = this.writes ??= new XF;
        Xk.ids.set(kk, Fk), Ik && Xk.cleared.add(kk), null !== Xk.from && (Xk.patched[kk] = Fk);
        const Tk = 1 << (kk >> rk & Dk);
        Xk.layers |= Tk, this.staleLayers |= Tk, this.writeCount++
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
          Fk = this.slot * Mk;
        if (this.epoch !== this.table.epoch || Fk + Mk > kk.length || 0 === kk[Fk + 3] || kk[Fk + 2] !== this.generation) return this.data = kF, this.dataPtr = 0, kF;
        this.version = kk[Fk + 1];
        const Ik = kk[Fk + 0],
          Xk = kk.buffer;
        return Ik === this.dataPtr && Xk === this.dataBuffer || (this.dataPtr = Ik, this.dataBuffer = Xk, this.data = this.table.voxelsAt(Xk, Ik)), this.data
      }
    }

    function iF(kk, Fk) {
      const Ik = kk[Fk * ek.H];
      for (let Xk = 0; Xk < ek.H; Xk++) {
        const Tk = FF(Xk, Fk, 0);
        for (let Fk = 0; Fk < ek.H; Fk++)
          if (kk[Tk + Fk] !== Ik) return 65535
      }
      return Ik
    }
    const yF = new Uint32Array(0);

    function lF(kk, Fk, Ik) {
      return FF(kk & Dk, Fk & Dk, Ik & Dk)
    }
    class aF {
      constructor(kk, Fk) {
        this.memory = kk, this.apiView = Fk, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = yF, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = yF, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(kk, Fk, Ik, Xk, Tk, ik) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, ik === ek.W.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (ik !== ek.W.Stored && ik !== ek.W.Unloaded) throw new jk.b(`ChunkSlot flags ${ik}`);
        const yk = (0, mk.c)(kk, Fk, Ik);
        if (yk < 0) return;
        if (ik === ek.W.Unloaded) return void this.chunks.delete(yk);
        const lk = this.chunks.get(yk);
        (null === lk || void 0 === lk ? void 0 : lk.slot) === Xk && lk.generation === Tk || this.chunks.set(yk, new TF(this, Xk, Tk, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const kk = this.apiView(),
          Fk = ek.y.chunkSlotsPtr(kk, 0),
          Ik = ek.y.chunkSlotsLen(kk, 0);
        Fk === this.slotsPtr && Ik === this.slotsLen || (this.slotsPtr = Fk, this.slotsLen = Ik, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const kk = this.apiView(),
          Fk = ek.y.walkThroughPtr(kk, 0),
          Ik = ek.y.walkThroughLen(kk, 0);
        Fk === this.walkPtr && Ik === this.walkLen || (this.walkPtr = Fk, this.walkLen = Ik, this.walkBuffer = null, this.walkWords())
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
        kk !== this.slotsBuffer && (this.slotsBuffer = kk, this.slots = null !== (Fk = (0, jk.l)(Uint32Array, kk, this.slotsPtr, this.slotsLen * Mk, "the chunk directory")) && void 0 !== Fk ? Fk : yF);
        return this.slots
      }
      voxelsAt(kk, Fk) {
        try {
          var Ik;
          return null !== (Ik = (0, jk.l)(Uint16Array, kk, Fk, hk, "a chunk's voxels")) && void 0 !== Ik ? Ik : kF
        } catch (Xk) {
          if (!(Xk instanceof jk.b)) throw Xk;
          return this.corruption ??= Xk, kF
        }
      }
      chunk(kk, Fk, Ik) {
        var Xk;
        return null !== (Xk = this.chunks.get((0, mk.c)(kk, Fk, Ik))) && void 0 !== Xk ? Xk : null
      }
      isLoaded(kk, Fk, Ik) {
        return void 0 !== this.chunkAt(Math.floor(kk), Math.floor(Fk), Math.floor(Ik))
      }
      iL(kk, Fk, Ik) {
        var Xk;
        const Tk = Math.floor(kk),
          ik = Math.floor(Fk),
          yk = Math.floor(Ik),
          lk = this.chunkAt(Tk, ik, yk);
        if (!lk) return 0;
        const ak = lF(Tk, ik, yk);
        return null !== (Xk = lk.written(ak)) && void 0 !== Xk ? Xk : lk.voxelData()[ak]
      }
      setOverlay(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ik = this.chunkAt(kk, Fk, Ik);
        return !!ik && (ik.hasWrites() || this.written.push(ik), ik.write(lF(kk, Fk, Ik), Xk, Tk), !0)
      }
      version(kk, Fk, Ik) {
        var Xk, Tk;
        return null !== (Xk = null === (Tk = this.chunks.get((0, mk.c)(kk, Fk, Ik))) || void 0 === Tk ? void 0 : Tk.Me) && void 0 !== Xk ? Xk : null
      }
      scan(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        const ak = ek.H;
        let qk = 0;
        for (let Lk = Math.floor(Fk / ak); Lk * ak < Tk; Lk++) {
          const tk = Lk * ak,
            Zk = Math.min(Tk - tk, ak);
          for (let Tk = Math.floor(kk / ak); Tk * ak < Xk; Tk++) {
            const jk = Tk * ak,
              ek = Math.min(Xk - jk, ak);
            for (let Xk = Math.floor(Ik / ak); Xk * ak < ik; Xk++) {
              const wk = this.chunks.get((0, mk.c)(Tk, Lk, Xk));
              if (!wk) continue;
              const Hk = Xk * ak,
                Jk = Math.max(Ik - Hk, 0),
                xk = Math.min(ik - Hk, ak),
                Pk = wk.vj,
                Kk = wk.gameVoxels();
              for (let Ik = Math.max(Fk - tk, 0); Ik < Zk; Ik++) {
                const Fk = Pk[Ik];
                if (65535 === Fk || 0 !== yk[Fk]) {
                  qk++;
                  for (let Fk = Math.max(kk - jk, 0); Fk < ek; Fk++) {
                    const kk = FF(Fk, Ik, 0);
                    for (let Xk = Jk; Xk < xk; Xk++) {
                      const Tk = Kk[kk + Xk];
                      0 !== yk[Tk] && lk.push(jk + Fk, tk + Ik, Hk + Xk, Tk)
                    }
                  }
                }
              }
            }
          }
        }
        return qk
      }
      dataCleared(kk, Fk, Ik) {
        var Xk;
        const Tk = Math.floor(kk),
          ik = Math.floor(Fk),
          yk = Math.floor(Ik);
        return !0 === (null === (Xk = this.chunkAt(Tk, ik, yk)) || void 0 === Xk ? void 0 : Xk.dataCleared(lF(Tk, ik, yk)))
      }
      isWalkThrough(kk) {
        if (!Number.isInteger(kk) || kk < 0 || kk > 65535) return !1;
        const Fk = this.walkWords(),
          Ik = kk >>> 5;
        return Ik < Fk.length && 1 === (Fk[Ik] >>> (31 & kk) & 1)
      }
      walkWords() {
        const kk = this.memory().buffer;
        var Fk;
        kk !== this.walkBuffer && (this.walkBuffer = kk, this.walk = null !== (Fk = (0, jk.l)(Uint32Array, kk, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Fk ? Fk : yF);
        return this.walk
      }
      chunkAt(kk, Fk, Ik) {
        if ((0 | kk) !== kk || (0 | Fk) !== Fk || (0 | Ik) !== Ik) return;
        const Xk = (0, mk.c)(kk >> rk, Fk >> rk, Ik >> rk);
        return Xk !== this.lastKey && (this.lastKey = Xk, this.lastChunk = this.chunks.get(Xk)), this.lastChunk
      }
    }
    var qF = Ik(38501),
      LF = Ik(37811),
      tF = Ik(36816),
      ZF = Ik(36618),
      jF = Ik(34119),
      eF = Ik(39121),
      wF = Ik(187);
    const HF = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      JF = [
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
      xF = JF.map((kk => {
        let [Fk] = kk;
        return Fk
      })),
      PF = Uint8Array.from(JF, (kk => {
        let [, Fk] = kk;
        return Fk
      })),
      KF = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      QF = 8;
    var sF = Ik(36777),
      VF = Ik(36796),
      zF = Ik(36789),
      SF = Ik(243);
    class oF {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SF.b;
        this.sheet = kk, this.onError = Fk, this.idle = Ik, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = kk => {
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
        const Fk = [...kk].sort(((kk, Fk) => kk - Fk));
        for (const Ik of Fk) this.asked.has(Ik) || (this.asked.add(Ik), this.queue.push(Ik));
        this.schedule()
      }
      cancel() {
        var kk;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (kk = this.cancelIdle) || void 0 === kk || kk.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(kk) {
        const Fk = this.sheet(kk, !1),
          Ik = this.sheet(kk, !0),
          [Xk, Tk] = "unloaded" === Fk.state() && "unloaded" !== Ik.state() ? [Ik, Fk] : [Fk, Ik],
          ik = this.gen,
          yk = () => {
            try {
              ik === this.gen && "unloaded" === Tk.state() && Tk.load()
            } catch (kk) {
              this.onError(kk)
            }
          },
          lk = Xk.state();
        return "unloaded" === lk ? (Xk.once("load", yk), Xk.load(), !0) : "unloaded" === Tk.state() && ("loading" === lk ? (Xk.once("load", yk), !1) : (Tk.load(), !0))
      }
    }
    var vF = Ik(40900);
    const EF = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      OF = wF.f.NH * wF.f.playerEyeToHeightRatio,
      nF = [0, 0, -1, 0, 1, 0],
      GF = HF.indexOf("note");

    function pF(kk) {
      return kk >= 0 ? Math.min(1, kk) : 0
    }

    function uF(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Xk = function(kk) {
        let Fk = 0,
          Ik = xF.length;
        for (; Fk < Ik;) {
          const Xk = Fk + Ik >>> 1;
          xF[Xk] < kk ? Fk = Xk + 1 : Ik = Xk
        }
        return Fk
      }(kk);
      if ("" === kk || null === (Fk = xF[Xk]) || void 0 === Fk || !Fk.startsWith(kk)) return -1;
      if (xF[Xk] === kk) return Xk;
      let Tk = Xk + 1;
      for (; Tk < xF.length && xF[Tk].startsWith(kk);) Tk++;
      return Xk + Math.floor(Ik() * (Tk - Xk))
    }
    class bF {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.group = kk, this.loudness = Fk, this.startMs = Ik, this.howl = Xk, this.host = Tk, this.id = 0, this.direct = !1
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
    class RF {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = kk, this.listener = Fk, this.now = Ik, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(HF.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new zF.e, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: kk => this.aliveVoice(kk),
          started: kk => this.started.has(kk),
          drop: kk => {
            var Fk;
            null === (Fk = this.live.get(kk)) || void 0 === Fk || Fk.howl.stop(kk), this.forget(kk)
          }
        }, this.handlers = {
          playSound: (kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) => {
            if (Xk >= xF.length) return;
            const qk = 0 !== (Tk & ek.ee.Loop);
            Tk & ek.ee.TwoD ? this.start(Xk, !1, yk, ik, lk, qk) : this.startSpatial(Xk, yk, ik, lk, qk, kk, Fk, Ik, ak, this.earDistSq(kk, Fk, Ik))
          },
          soundPos: (kk, Fk, Ik, Xk) => {
            const Tk = this.core.get(Xk);
            var ik;
            void 0 !== Tk && (null === (ik = this.live.get(Tk)) || void 0 === ik || ik.howl.pos(Ik, Fk, kk, Tk))
          },
          soundSet: (kk, Fk, Ik, Xk) => {
            const Tk = this.core.get(kk),
              ik = void 0 === Tk ? void 0 : this.live.get(Tk);
            void 0 !== Tk && ik && (this.setRel(Tk, Fk), ik.rate = Ik, ik.howl.rate(Ik, Tk), ik.spatial && ik.howl.pannerAttr({
              refDistance: Xk
            }, Tk))
          },
          soundFade: (kk, Fk, Ik, Xk) => {
            const Tk = this.core.get(kk);
            void 0 !== Tk && this.fade(Tk, Fk, Ik, 0 !== (Xk & ek.be.StopAfter))
          },
          soundStop: kk => {
            const Fk = this.core.get(kk);
            var Ik;
            void 0 !== Fk && (null === (Ik = this.live.get(Fk)) || void 0 === Ik || Ik.howl.stop(Fk), this.forget(Fk))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new oF(((kk, Fk) => this.sheet(kk, Fk)), (kk => {
          this.errors++, console.error("Audio preload failed", kk)
        }), Xk)
      }
      prepare() {
        for (let kk = 0; kk < HF.length; kk++) this.prepareSheet(kk)
      }
      prepareSheet(kk) {
        this.sheet(kk, !1), this.sheet(kk, !0)
      }
      preload(kk) {
        this.loader.preload(kk)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let kk = 0; kk < HF.length; kk++) {
          if (VF.e.has(HF[kk])) continue;
          const Fk = [];
          for (const Xk of [!1, !0]) {
            const Ik = UF(kk, Xk),
              Tk = this.sheets.get(Ik);
            void 0 !== Tk && "loading" !== Tk.state() && Fk.push({
              key: Ik,
              howl: Tk
            })
          }
          if (!Fk.some((kk => {
              let {
                howl: Fk
              } = kk;
              return "loaded" === Fk.state()
            }))) continue;
          this.unloading[kk] += Fk.length;
          const Ik = () => {
            this.unloading[kk]--, 0 === this.unloading[kk] && this.prepareSheet(kk)
          };
          for (const {
              key: kk,
              howl: Xk
            }
            of Fk) this.sheets.delete(kk), "loaded" === Xk.state() ? (0, sF.c)(Xk, Ik) : (Xk.unload(), Ik())
        }
      }
      onAudioEvent(kk, Fk, Ik, Xk) {
        if (kk < ek.r.PlaySound || kk > ek.r.SoundReset) return !1;
        try {
          return (0, ek.pe)(kk, Fk, Ik, Xk, this.handlers)
        } catch (Tk) {
          return this.errors++, console.error("Audio event failed", Tk), !0
        }
      }
      applyListener(kk) {
        const Fk = this.nextPose;
        for (let Xk = 0; Xk < 3; Xk++) Fk[2 - Xk] = ek.C.listener(kk, 0, Xk), Fk[5 - Xk] = ek.C.forward(kk, 0, Xk), Fk[8 - Xk] = ek.C.up(kk, 0, Xk);
        0 === Fk[3] && 0 === Fk[4] && 0 === Fk[5] && Fk.set(this.posed ? this.pose.subarray(3) : nF, 3);
        for (let Xk = 0; Xk < 9; Xk++)
          if (!Number.isFinite(Fk[Xk])) return;
        const Ik = this.pose;
        if (this.posed) {
          let kk = !0;
          for (let Xk = 0; Xk < 9 && kk; Xk++) kk = Fk[Xk] === Ik[Xk];
          if (kk) return
        }
        this.listener.apply(Fk) && (Ik.set(Fk), this.posed = !0)
      }
      playGame(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = uF(kk);
        if (lk < 0) return vF.d;
        if (!Ik) {
          const {
            howl: kk,
            id: Ik
          } = this.start(lk, !1, Fk, 0, 1, yk);
          return this.gameSound(kk, Ik, !1)
        }
        const ak = Ik[0],
          qk = Ik[1] + OF,
          Lk = Ik[2];
        if (!Number.isFinite(ak) || !Number.isFinite(qk) || !Number.isFinite(Lk)) return vF.d;
        let tk;
        if (Xk) {
          const kk = ak - Xk[0],
            Fk = qk - Xk[1],
            Ik = Lk - Xk[2];
          if (tk = kk * kk + Fk * Fk + Ik * Ik, tk > Tk * Tk) return vF.d
        } else tk = this.earDistSq(ak, qk, Lk);
        const Zk = this.startSpatial(lk, Fk, 0, 1, yk, ak, qk, Lk, ik, tk);
        return Zk ? this.gameSound(Zk.howl, Zk.id, !0) : vF.d
      }
      setMaster(kk, Fk) {
        this.level = pF(kk);
        const Ik = Fk ? this.level : 0;
        if (Ik !== this.master) {
          this.master = Ik;
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
      gameSound(kk, Fk, Ik) {
        const Xk = {
          stop: () => (this.live.has(Fk) && kk.stop(Fk), Xk),
          fade: (kk, Ik, Tk) => {
            var ik, yk;
            const lk = this.level > 0 ? Ik / this.level : Ik > 0 && null !== (ik = null === (yk = this.live.get(Fk)) || void 0 === yk ? void 0 : yk.rel) && void 0 !== ik ? ik : 0;
            return this.fade(Fk, lk, Tk, !1), Xk
          },
          rate: Ik => {
            const Tk = this.live.get(Fk);
            return Tk && (Tk.rate = function(kk) {
              return kk > 0 && kk < 1 / 0 ? kk : 1
            }(Ik), kk.rate(Tk.rate, Fk)), Xk
          },
          getVolume: () => {
            var kk, Ik;
            return (null !== (kk = null === (Ik = this.live.get(Fk)) || void 0 === Ik ? void 0 : Ik.rel) && void 0 !== kk ? kk : 0) * this.level
          },
          getRelativeVolume: () => {
            var kk, Ik;
            return null !== (kk = null === (Ik = this.live.get(Fk)) || void 0 === Ik ? void 0 : Ik.rel) && void 0 !== kk ? kk : 0
          },
          setRelativeVolume: kk => (this.setRel(Fk, kk), Xk),
          setPannerAttr: Tk => {
            if (Ik && this.live.has(Fk)) {
              const Ik = {
                ...EF,
                refDistance: tF.f
              };
              for (const [kk, Fk] of Object.entries(Tk)) "number" !== typeof Fk && "string" !== typeof Fk || (Ik[kk] = Fk);
              kk.pannerAttr({
                coneOuterAngle: Ik.coneOuterAngle
              }, Fk), kk.pannerAttr(Ik, Fk)
            }
            return Xk
          },
          setPosition: Tk => (Ik && this.live.has(Fk) && Number.isFinite(Tk[0] + Tk[1] + Tk[2]) && kk.pos(Tk[2], Tk[1], Tk[0], Fk), Xk)
        };
        return Xk
      }
      startSpatial(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        const Lk = this.sheet(PF[kk], !0);
        let tk = null;
        if (!Tk) {
          if (this.failed.has(Lk)) return null;
          const Ik = PF[kk] === GF ? null : (0, zF.k)(xF[kk]),
            Xk = (0, zF.g)(pF(Fk), Math.sqrt(qk), ak);
          if (tk = new bF(Ik, Xk, this.now(), Lk, this.voiceHost), !this.voices.admit(tk)) return null
        }
        const Zk = this.start(kk, !0, Fk, Ik, Xk, Tk);
        return tk && (tk.id = Zk.id, tk.direct = "loaded" === Lk.state() && !Lk._playLock), Lk.pannerAttr({
          coneOuterAngle: 360
        }, Zk.id), Lk.pannerAttr({
          ...EF,
          refDistance: ak
        }, Zk.id), Lk.pos(lk, yk, ik, Zk.id), Zk
      }
      aliveVoice(kk) {
        const Fk = this.live.get(kk);
        if (!Fk) return;
        const Ik = Fk.howl._soundById(kk);
        if (Ik && !Ik._ended) return Fk;
        this.forget(kk)
      }
      earDistSq(kk, Fk, Ik) {
        if (!this.posed) return 0;
        const Xk = kk - this.pose[2],
          Tk = Fk - this.pose[1],
          ik = Ik - this.pose[0];
        return Xk * Xk + Tk * Tk + ik * ik
      }
      start(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = pF(Ik),
          lk = this.sheet(PF[kk], Fk);
        "unloaded" === lk.state() && lk.load();
        const ak = lk.play(xF[kk]),
          qk = yk * this.master;
        return lk.volume(qk, ak), this.live.set(ak, {
          howl: lk,
          rel: yk,
          gain: qk,
          fadeFrom: qk,
          fadeAt: 0,
          fadeMs: 0,
          rate: Tk,
          handle: Xk,
          spatial: Fk,
          stopTimer: void 0
        }), 0 !== Xk && this.core.set(Xk, ak), 1 !== Tk && lk.rate(Tk, ak), ik && lk.loop(!0, ak), {
          howl: lk,
          id: ak
        }
      }
      sheet(kk, Fk) {
        const Ik = UF(kk, Fk);
        let Xk = this.sheets.get(Ik);
        if (!Xk) {
          const Tk = this.createHowl(HF[kk], Fk);
          Tk.on("end", (kk => {
            Tk.loop(kk) || this.forget(kk)
          })), Tk.on("stop", (kk => {
            this.forget(kk)
          })), Tk.on("play", (kk => {
            this.live.has(kk) && this.started.add(kk)
          })), Tk.on("loaderror", (kk => {
            if ("loaded" !== Tk.state()) {
              this.failed.add(Tk);
              for (const [kk, Fk] of this.live) Fk.howl === Tk && this.forget(kk)
            } else "number" === typeof kk && this.forget(kk)
          })), this.sheets.set(Ik, Tk), Xk = Tk
        }
        return Xk
      }
      setRel(kk, Fk) {
        const Ik = this.live.get(kk);
        Ik && (CF(Ik), Ik.fadeMs = 0, Ik.rel = pF(Fk), Ik.gain = Ik.rel * this.master, Ik.howl.volume(Ik.gain, kk))
      }
      fade(kk, Fk, Ik, Xk) {
        const Tk = this.live.get(kk);
        if (!Tk) return;
        CF(Tk);
        const {
          howl: ik
        } = Tk, yk = this.gainNow(Tk);
        Tk.rel = pF(Fk), Tk.gain = Tk.rel * this.master;
        const lk = Ik > 0 ? Math.min(Ik, 65535) : 0,
          ak = 0 === lk || yk === Tk.gain;
        Tk.fadeMs = ak ? 0 : lk, ak ? ik.volume(Tk.gain, kk) : (Tk.fadeFrom = yk, Tk.fadeAt = this.now(), ik.fade(yk, Tk.gain, lk, kk)), Xk && (ak ? ik.stop(kk) : Tk.stopTimer = setTimeout((() => {
          Tk.stopTimer = void 0, ik.stop(kk)
        }), lk))
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
        Fk && (CF(Fk), this.live.delete(kk), 0 !== Fk.handle && this.core.get(Fk.handle) === kk && this.core.delete(Fk.handle))
      }
    }

    function UF(kk, Fk) {
      return 2 * kk + (Fk ? 1 : 0)
    }

    function CF(kk) {
      void 0 !== kk.stopTimer && (clearTimeout(kk.stopTimer), kk.stopTimer = void 0)
    }
    var NF = Ik(40604),
      cF = Ik(39129);
    class WF {
      constructor(kk, Fk, Ik, Xk) {
        this.key = kk, this.model = Fk, this.host = Xk, this.St = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.PTk = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.ee = !1, this.St = Math.max(1, Math.ceil(Ik)), this.records = new Float32Array(this.St * qF.d), this.isDirty = new Uint8Array(this.St), this.tail = new Uint8Array(this.St * ek.lc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Xk.cmd())
      }
      setOrigin(kk, Fk, Ik) {
        this.origin[0] = kk, this.origin[1] = Fk, this.origin[2] = Ik
      }
      markDirty(kk) {
        !this.ee && kk >= 0 && kk < this.St && kk < ek.lc.Max && this.Ne(kk, kk + 1)
      }
      commit(kk) {
        if (this.ee) return;
        (kk = Math.min(Math.max(Math.floor(kk), 0), this.St, ek.lc.Max)) > this.count && this.Ne(this.count, kk), this.count = kk;
        const {
          origin: Fk,
          sentOrigin: Ik,
          dirtyList: Xk
        } = this, Tk = this.PTk !== kk, ik = Ik[0] !== Fk[0] || Ik[1] !== Fk[1] || Ik[2] !== Fk[2];
        if (0 === Xk.length && !Tk && !ik) return;
        const yk = this.host.cmd();
        if (!yk || !this.make(yk)) return;
        const lk = Xk.length,
          {
            records: ak,
            tailView: qk
          } = this;
        for (let Lk = 0; Lk < lk; Lk++) {
          const kk = Xk[Lk],
            Fk = kk * qF.d,
            Ik = Lk * ek.lc.Bytes,
            Tk = 0 !== ak[Fk + qF.e] ? ek.lc.Hidden : 0;
          qk.setUint32(Ik, (kk | Tk) >>> 0, !0), qk.setFloat32(Ik + 4, ak[Fk], !0), qk.setFloat32(Ik + 8, ak[Fk + 1], !0), qk.setFloat32(Ik + 12, ak[Fk + 2], !0)
        }
        if ((0, ek.Xe)(yk, 0, this.key, kk, Fk, lk, this.tailOf(lk))) {
          for (let kk = 0; kk < lk; kk++) this.isDirty[Xk[kk]] = 0;
          Xk.length = 0, this.PTk = kk, Ik[0] = Fk[0], Ik[1] = Fk[1], Ik[2] = Fk[2]
        }
      }
      grow(kk) {
        (kk = Math.ceil(kk)) <= this.St || this.ee || (this.records = (0, cF.c)(this.records, new Float32Array(kk * qF.d)), this.isDirty = (0, cF.c)(this.isDirty, new Uint8Array(kk)), this.tail = new Uint8Array(kk * ek.lc.Bytes), this.tailView = new DataView(this.tail.buffer), this.St = kk)
      }
      dispose() {
        this.ee || (this.ee = !0, this.host.ee(this, this.made ? this.key : null))
      }
      make(kk) {
        if (!this.made && kk) {
          const {
            item: Fk,
            scale: Ik,
            yaw: Xk
          } = this.model;
          this.made = (0, ek.df)(kk, 0, this.key, Fk, Ik, Xk)
        }
        return this.made
      }
      tailOf(kk) {
        const Fk = kk * ek.lc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Fk || (this.tailCut = this.tail.subarray(0, Fk)), this.tailCut
      }
      Ne(kk, Fk) {
        const {
          dirtyList: Ik,
          isDirty: Xk
        } = this;
        for (let Tk = kk; Tk < Fk; Tk++) 0 === Xk[Tk] && (Xk[Tk] = 1, Ik.push(Tk))
      }
    }
    var fF = Ik(621);
    class BF {
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
        if (Ik = kk, !fF.n.includes(Ik)) return null;
        var Ik;
        const Xk = new dF(++this.keys, Lk.m.indexOf(kk), Fk, this.host);
        return this.live.add(Xk), Xk
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
    class dF {
      constructor(kk, Fk, Ik, Xk) {
        this.key = kk, this.lifeform = Fk, this.scale = Ik, this.host = Xk, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.ee = !1, this.sync()
      }
      setPose(kk, Fk) {
        this.ee || (this.feet[0] = kk[0], this.feet[1] = kk[1], this.feet[2] = kk[2], this.yaw = Fk, this.owed |= 2, this.sync())
      }
      setVisible(kk) {
        this.ee || kk === this.visible || (this.visible = kk, this.owed |= 4, this.sync())
      }
      dispose() {
        this.ee || (this.ee = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(kk) ? (this.host.settled(this, this.ee), !0) : (this.host.owes(this), !1)
      }
      write(kk) {
        if (!kk) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, ek.kf)(kk, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Fk = (2 & this.owed ? ek.Pc.Pose : 0) | (4 & this.owed ? ek.Pc.Visible : 0);
        if (0 !== Fk) {
          if (!(0, ek.if)(kk, 0, this.key, Fk, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, ek.ff)(kk, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var YF = Ik(41009);

    function AF(kk, Fk, Ik, Xk) {
      return (0, YF.d)(), (0, ek.Sf)(kk, Fk, Ik, Xk)
    }
    var gF = Ik(39134),
      mF = Ik(40598);
    const hF = [0, 0, 0],
      rF = [0, 0, 0],
      DF = [0, 0, 0],
      MF = [0, 0, 0],
      kI = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      FI = [0, 0, 0],
      II = [0, 0],
      XI = [1, 1, 1],
      TI = 1 / 3;
    const iI = LF.d;

    function yI(kk) {
      const Fk = LF.b[kk],
        Ik = Fk && LF.d[Fk.mainMultiblock];
      return Ik && {
        main: Ik,
        x: Fk.compX,
        y: Fk.compY,
        z: Fk.compZ
      }
    }

    function lI(kk) {
      if (null === kk || void 0 === kk) return ek.Yc;
      const Fk = +kk;
      return Number.isInteger(Fk) && Fk >= -2147483648 && Fk <= 2147483647 && String(Fk) === String(kk) ? Fk : ek.Yc
    }

    function aI(kk, Fk, Ik) {
      return (0, ek.Zf)(kk, 0, Fk, null !== Ik && void 0 !== Ik ? Ik : Number.NaN)
    }
    class qI {
      constructor(kk) {
        this.deps = kk, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new gF.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (kk => {
          var Fk, Ik;
          null === (Fk = (Ik = this.deps).setLocalOptions) || void 0 === Fk || Fk.call(Ik, kk)
        })), this.mobModels = new BF((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          ee: (kk, Fk) => {
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
      OJ(kk) {
        const Fk = this.api.OJ(kk);
        if (!Fk) throw new Error(`Entity ${kk} has no replicated position`);
        return Fk
      }
      checkValid(kk) {
        return !!this.deps.isSessionLive() && (null === kk || void 0 === kk || this.api.checkValid(kk))
      }
      isAlive(kk) {
        return !1 !== this.api.isAlive(kk)
      }
      getItemStat(kk, Fk, Ik) {
        return this.isLocal(kk) || null !== kk && "Player" === this.api.getEntityType(kk) ? this.tables.getItemStat(Fk, Ik) : this.tables.getDefaultItemStat(Fk, Ik)
      }
      getClientOption(kk, Fk) {
        return this.assertLocal(kk, "get a client option"), this.tables.getClientOption(Fk)
      }
      openShop(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(kk, "open shop"), yk.g.GL("showShopFromServer", {
          toggle: Fk,
          ET: Ik
        }, !0)
      }
      sendMessage(kk, Fk, Ik) {
        this.assertLocal(kk, "send a message");
        const Xk = "string" === typeof Fk ? [{
          str: Fk,
          style: Ik
        }] : Fk;
        yk.g.GL("chat", {
          content: Xk
        }, !0)
      }
      getEntityType(kk) {
        return this.api.getEntityType(kk)
      }
      getEntityName(kk) {
        const Fk = lI(kk);
        return Fk === ek.Yc ? void 0 : (0, NF.l)(this.api, Fk)
      }
      hasEffect(kk, Fk) {
        const Ik = lI(kk);
        return Ik !== ek.Yc && (0, NF.i)(this.api, Ik, Fk)
      }
      getMetaInfo(kk) {
        return this.tables.getMetaInfo(kk)
      }
      getPlayerDbId(kk) {
        return this.assertLocal(kk, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(kk, Fk, Ik) {
        if (!this.chunks.dataCleared(kk, Fk, Ik)) return (0, NF.e)(this.api, kk, Fk, Ik)
      }
      lG(kk, Fk, Ik, Xk) {
        this.setBlockId(kk, Fk, Ik, this.tables.getItemId(Xk))
      }
      setOtherEntitySetting(kk, Fk, Ik, Xk) {
        if (!this.isLocal(kk)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(ek.jd, Ik)) throw new Error(`Unknown other-entity setting ${Ik}`);
        const Tk = ek.jd[Ik],
          ik = lI(Fk);
        if (ik === ek.Yc || !this.deps.beforeWrite()) return;
        const yk = (0, Uk.c)(Xk);
        if (yk.length > 16384) throw new Error(`The other-entity setting ${Ik}'s value is over 16384 bytes`);
        const lk = this.api.memoryView(Uint8Array, this.api.scratch(), yk.length, "set_other_entity_setting's value");
        lk && (lk.set(yk), this.api.queries.setOtherEntitySetting(ik, Tk, yk.length))
      }
      getPositionView(kk) {
        return this.live.position(+kk)
      }
      readDrawnPosition(kk, Fk) {
        return this.api.readDrawnPosition(lI(kk), Fk)
      }
      getDrawnHeading(kk) {
        const Fk = lI(kk),
          Ik = (Fk === ek.Yc ? 0 : this.api.queries.directorEntity(Fk)) >= ek.tb.BYTES ? this.api.memoryData(this.api.scratch(), ek.tb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!Ik) return null;
        if (1 === ek.tb.headingIsDrawn(Ik, 0)) return ek.tb.heading(Ik, 0);
        const Xk = this.api.apiView;
        return this.isLocal(kk) && 0 === (ek.y.playerFlags(Xk, 0) & ek.Ed.FreeCam) ? ek.y.heading(Xk, 0) : null
      }
      getLocalPlayerMovement() {
        const kk = ek.y.playerFlags(this.api.apiView, 0);
        return 0 === (kk & ek.Ed.Replay) && this.api.readDrawnPosition(this.api.localId, DF) ? {
          onGround: 0 !== (kk & ek.Ed.OnGround),
          jumpHeld: 0 !== (kk & ek.Ed.JumpHeld)
        } : null
      }
      BFk(kk) {
        return this.isLocal(kk) ? this.items.eq() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var kk, Fk;
        return "Gun" === (null === (kk = this.aliveHeld()) || void 0 === kk || null === (Fk = kk.typeObj) || void 0 === Fk ? void 0 : Fk.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.eq()
      }
      isCrosshairShown() {
        var kk, Fk;
        const Ik = (0, ZF.e)(Xk.d.get("crosshairGameView"), Xk.d.get("crosshairShownOverride"));
        if (null !== Ik) return Ik;
        const Tk = null === (kk = this.aliveHeld()) || void 0 === kk ? void 0 : kk.typeObj,
          ik = "Gun" === (null === Tk || void 0 === Tk ? void 0 : Tk.type),
          yk = ik || !0 === (null === Tk || void 0 === Tk ? void 0 : Tk.showsAimingUi),
          lk = 0 === (ek.y.playerFlags(this.api.apiView, 0) & ek.Ed.ZoomFirstPerson),
          ak = null !== (Fk = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Fk ? Fk : null;
        return (0, ZF.k)({
          gun: ik,
          aimable: yk
        }, lk, (0, jF.b)(), ak)
      }
      setCrosshairShown(kk) {
        Xk.d.set({
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
        if (this.isLocal(kk)) return 0 !== (ek.y.playerFlags(this.api.apiView, 0) & ek.Ed.Crouching);
        const Fk = lI(kk);
        return Fk !== ek.Yc && 1 === this.api.queries.entityCrouching(Fk)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (ek.y.playerFlags(this.api.apiView, 0) & ek.Ed.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Vkk()
      }
      getActionRay() {
        const kk = this.api.apiView;
        for (let Fk = 0; Fk < 3; Fk++) kI.origin[Fk] = ek.y.ckk(kk, 0, Fk), kI.direction[Fk] = ek.y.actionDir(kk, 0, Fk);
        return kI
      }
      canModifyBlockAt(kk, Fk, Ik) {
        return 1 === this.api.queries.canModify(kk, Fk, Ik)
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
      tFk(kk, Fk, Ik, Xk, Tk) {
        return 1 === this.api.queries.terrainBlocked(Xk, kk, Fk, Ik, lI(null !== Tk && void 0 !== Tk ? Tk : null))
      }
      getChunkVersion(kk, Fk, Ik) {
        return this.chunks.version(kk, Fk, Ik)
      }
      scanBlocks(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        return this.chunks.scan(kk, Fk, Ik, Xk, Tk, ik, yk, lk)
      }
      isBlockInLoadedChunk(kk, Fk, Ik) {
        return this.chunks.isLoaded(kk, Fk, Ik)
      }
      getBlockId(kk, Fk, Ik) {
        return this.chunks.iL(kk, Fk, Ik)
      }
      playSound(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(kk)) return null;
        const yk = this.playSoundFrom(Fk, Ik, Tk, ik);
        return 1 === Xk ? yk : yk.rate(Xk)
      }
      preloadSounds(kk) {
        var Fk, Ik;
        null === (Fk = (Ik = this.deps).preloadSounds) || void 0 === Fk || Fk.call(Ik, kk)
      }
      playSoundFrom(kk, Fk, Ik, Xk) {
        var Tk, ik;
        const yk = this.deps.playSound;
        if (!yk) return vF.d;
        const lk = null === Ik || void 0 === Ik ? void 0 : Ik.rX,
          ak = null !== (Tk = null === Ik || void 0 === Ik ? void 0 : Ik.maxHearDist) && void 0 !== Tk ? Tk : tF.e,
          qk = null !== (ik = null === Ik || void 0 === Ik ? void 0 : Ik.refDistance) && void 0 !== ik ? ik : tF.f;
        let Lk = null;
        if (Array.isArray(lk)) hF[0] = lk[0], hF[1] = lk[1], hF[2] = lk[2], Lk = hF;
        else if (void 0 !== lk && null !== lk) {
          const kk = lI(lk);
          if (!this.api.isLocal(kk)) {
            if (!this.api.readPosition(kk, hF)) return vF.d;
            Lk = hF
          }
        }
        return yk(kk, Fk, Lk, Lk && this.ear(), ak, qk, Xk)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, rF)) rF[1] += OF;
        else {
          const kk = this.api.apiView;
          if (0 === ek.y.viewProj(kk, 0, 3) && 0 === ek.y.viewProj(kk, 0, 7) && 0 === ek.y.viewProj(kk, 0, 11)) return null;
          for (let Fk = 0; Fk < 3; Fk++) rF[Fk] = ek.y.eye(kk, 0, Fk)
        }
        return Number.isFinite(rF[0] + rF[1] + rF[2]) ? rF : null
      }
      setBlockId(kk, Fk, Ik, Xk) {
        if (!Number.isInteger(Xk) || Xk < 0 || Xk > 65535) throw new Error(`Invalid block id ${Xk}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(kk, Fk, Ik)) return;
        const Tk = Math.floor(kk),
          ik = Math.floor(Fk),
          yk = Math.floor(Ik),
          lk = this.predictedCells(Tk, ik, yk, Xk);
        if (1 === this.api.queries.lG(Tk, ik, yk, Xk)) {
          for (let kk = 0; kk < lk.length; kk += 5) this.chunks.setOverlay(lk[kk], lk[kk + 1], lk[kk + 2], lk[kk + 3], 1 === lk[kk + 4]);
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
      burstParticlePreset(kk, Fk, Ik) {
        this.deps.particles.burstPreset(kk, Fk, Ik)
      }
      createGameMesh(kk, Fk, Ik) {
        const Xk = ++this.meshKeys,
          Tk = this.deps.cmd();
        if (!Tk) return Xk;
        const {
          look: ik,
          colour: yk
        } = function(kk) {
          switch (kk.kind) {
            case void 0:
            case "flatEmissive":
              return kk.onTop ? {
                look: ek.Wb.FlatOnTop,
                colour: [...kk.rgb, kk.alpha]
              } : kk.opaque ? {
                look: ek.Wb.FlatOpaque,
                colour: [...kk.rgb, 1]
              } : {
                look: ek.Wb.Flat,
                colour: [...kk.rgb, kk.alpha]
              };
            case "chevronPath":
              return {
                look: ek.Wb.Chevrons, colour: [...(0, eF.d)(kk.colour), kk.alpha]
              };
            case "furnaceFire":
              return {
                look: ek.Wb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Fk), lk = Math.floor(kk.positions.length / 3), ak = function(kk, Fk) {
          const Ik = Math.floor(kk.positions.length / 3),
            Xk = kk.indices.length,
            Tk = Ik * (Fk ? 5 : 3),
            ik = new Uint8Array(4 * (Tk + Xk)),
            yk = new DataView(ik.buffer);
          for (let qk = 0; qk < 3 * Ik; qk++) yk.setFloat32(4 * qk, kk.positions[qk], !0);
          if (Fk) {
            var lk;
            const Fk = null !== (lk = kk.uvs) && void 0 !== lk ? lk : [];
            for (let kk = 0; kk < 2 * Ik; kk++) {
              var ak;
              yk.setFloat32(4 * (3 * Ik + kk), null !== (ak = Fk[kk]) && void 0 !== ak ? ak : 0, !0)
            }
          }
          for (let qk = 0; qk < Xk; qk++) yk.setUint32(4 * (Tk + qk), kk.indices[qk], !0);
          return ik
        }(kk, (0, qF.g)(Fk));
        return (0, ek.Le)(Tk, 0, Xk, ik, yk, Ik, lk, kk.indices.length, ak) && this.liveMeshes.add(Xk), Xk
      }
      setGameMesh(kk, Fk) {
        var Ik;
        const Xk = this.deps.cmd();
        if (!Xk) return;
        let Tk = 0;
        Fk.anchor && (Tk |= ek.Xb.Anchor, FI[0] = Fk.anchor[0], FI[1] = Fk.anchor[1], FI[2] = Fk.anchor[2]), void 0 !== Fk.visible && (Tk |= ek.Xb.Visible), Fk.uvOffset && (Tk |= ek.Xb.UvOffset, II[0] = Fk.uvOffset[0], II[1] = Fk.uvOffset[1]);
        const ik = null !== (Ik = Fk.visibility) && void 0 !== Ik ? Ik : 1;
        void 0 !== Fk.visibility && (Tk |= ek.Xb.Visibility), Fk.scale && (Tk |= ek.Xb.Scale, XI[0] = Fk.scale[0], XI[1] = Fk.scale[1], XI[2] = Fk.scale[2]), 0 !== Tk && (0, ek.Pe)(Xk, 0, kk, Tk, Fk.visible ? 1 : 0, FI, II, ik, XI)
      }
      disposeGameMesh(kk) {
        const Fk = this.deps.cmd();
        Fk && !(0, ek.Oe)(Fk, 0, kk) || this.liveMeshes.delete(kk)
      }
      hasPackModel(kk) {
        var Fk, Ik, Xk;
        return null !== (Fk = null === (Ik = (Xk = this.deps).hasPackModel) || void 0 === Ik ? void 0 : Ik.call(Xk, kk)) && void 0 !== Fk && Fk
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
        const Ik = this.tables.idOf(kk.item);
        if (void 0 === Ik) return null;
        const Xk = new WF(++this.poolKeys, {
          item: Ik,
          scale: kk.scale,
          yaw: kk.yaw
        }, Fk, this.poolHost);
        return this.livePools.add(Xk), Xk
      }
      createMobModel(kk, Fk) {
        return this.mobModels.create(kk, Fk)
      }
      setRouteChevrons(kk) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !kk || 0 === kk.cells.length) return;
        const Fk = `${kk.colour} ${kk.alpha}`;
        Fk !== this.routeLook && (this.routeLook = Fk, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(kk) {
          const [Fk, Ik, Xk] = kk[0].pos, Tk = [], ik = [], yk = [];
          return kk.forEach(((kk, lk) => {
            let {
              pos: ak,
              way: [qk, Lk]
            } = kk;
            const tk = ak[0] - Fk + .5,
              Zk = ak[1] - Ik + .04,
              jk = ak[2] - Xk + .5,
              [ek, wk] = [.35 * -Lk, .35 * qk],
              [Hk, Jk] = [lk * TI, (lk + 1) * TI],
              xk = Tk.length / 3;
            Tk.push(tk - .5 * qk + ek, Zk, jk - .5 * Lk + wk), Tk.push(tk - .5 * qk - ek, Zk, jk - .5 * Lk - wk), Tk.push(tk + .5 * qk + ek, Zk, jk + .5 * Lk + wk), Tk.push(tk + .5 * qk - ek, Zk, jk + .5 * Lk - wk), ik.push(0, Hk, 1, Hk, 0, Jk, 1, Jk), yk.push(xk, xk + 1, xk + 2, xk + 1, xk + 3, xk + 2)
          })), {
            positions: Tk,
            uvs: ik,
            indices: yk
          }
        }(kk.cells), {
          kind: "chevronPath",
          colour: kk.colour,
          alpha: kk.alpha
        }, kk.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(kk) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(kk, 250) / 1e3 * 1.2 * TI) % 1, this.setRouteSlide())
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
        let Ik = 0;
        for (; Ik < kk.length && (0, ek.$e)(Fk, 0, kk[Ik]);) Ik++;
        kk.splice(0, Ik);
        const Xk = this.pendingStyle;
        if (void 0 !== Xk) {
          (Xk ? (0, ek.$f)(Fk, 0, Xk.width, Xk.alpha, 1, Xk.endAtSolidFace ? 1 : 0) : (0, ek.$f)(Fk, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Tk = this.pendingFar;
        void 0 !== Tk && (0, ek.Wf)(Fk, 0, null !== Tk && void 0 !== Tk ? Tk : 0, null === Tk ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(kk, Fk) {
        const Ik = this.deps.cmd(),
          Xk = lI(kk);
        Ik && Xk !== ek.Yc && (0, ek.eg)(Ik, 0, Xk, Fk)
      }
      setFacingTolerance(kk, Fk) {
        const Ik = this.deps.cmd(),
          Xk = lI(kk);
        Ik && Xk !== ek.Yc && aI(Ik, Xk, Fk)
      }
      forEachEntity(kk) {
        const {
          api: Fk
        } = this;
        for (let Ik = 0; Ik < Fk.idStr.length; Ik++) {
          const Xk = Fk.idStr[Ik];
          null === Xk || Qk(Fk.kinds[Ik]) || kk(Xk)
        }
      }
      getEntityInfo(kk) {
        return this.deps.entityInfo.get(kk)
      }
      isEntityInteractable(kk) {
        const Fk = lI(kk);
        return Fk !== ek.Yc && 1 === this.api.queries.entityInteractable(Fk)
      }
      isLocalPlayer(kk) {
        return this.isLocal(kk)
      }
      getLineOwner(kk) {
        var Fk;
        const Ik = null === (Fk = this.deps.entityInfo.get(kk)) || void 0 === Fk ? void 0 : Fk.meshOpts;
        if (!Ik) return null;
        try {
          const {
            lineToEId: kk
          } = JSON.parse(Ik);
          return null !== kk && void 0 !== kk ? kk : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const kk = this.api.apiView;
        return MF[0] = ek.y.eye(kk, 0, 0), MF[1] = ek.y.eye(kk, 0, 1), MF[2] = ek.y.eye(kk, 0, 2), MF
      }
      getCameraFar() {
        return ek.y.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(kk) {
        null !== kk && (this.farSet = !0), this.pendingFar = kk, this.flushOwed()
      }
      turnCamera(kk, Fk) {
        this.cameraTurn.turn(kk, Fk)
      }
      clearPickupDelay(kk) {
        const Fk = this.deps.cmd(),
          Ik = lI(kk);
        Fk && Ik !== ek.Yc && (0, ek.ve)(Fk, 0, Ik)
      }
      sendChat(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = this.deps.sendCmd();
        Ik && AF(Ik, 0, mF.e.Chat, (0, Uk.c)((0, mF.m)({
          oq: kk,
          vq: Fk
        })))
      }
      sendCommand(kk) {
        kk.length <= 119 && this.sendChat(`/${kk}`)
      }
      predictedCells(kk, Fk, Ik, Xk) {
        const Tk = this.chunks,
          ik = [],
          yk = (kk, Fk, Ik, Xk, Tk) => {
            ik.push(kk, Fk, Ik, Xk, this.tables.blockRootId(Tk) === this.tables.blockRootId(Xk) ? 0 : 1)
          },
          lk = Tk.iL(kk, Fk, Ik),
          ak = yI(lk);
        if (ak) {
          const [Xk, ik, qk] = [kk - ak.x, Fk - ak.y, Ik - ak.z], Lk = iI[Tk.iL(Xk, ik, qk)], tk = null === Lk || void 0 === Lk ? void 0 : Lk.positions.some((kk => kk.id === lk && kk.x === ak.x && kk.y === ak.y && kk.z === ak.z));
          for (const kk of (tk && Lk ? Lk : ak.main).positions) Tk.iL(Xk + kk.x, ik + kk.y, qk + kk.z) === kk.id && yk(Xk + kk.x, ik + kk.y, qk + kk.z, 0, kk.id)
        }
        const qk = yI(Xk);
        if (qk)
          for (const tk of qk.main.positions) {
            const [Xk, ik, lk] = [kk + tk.x - qk.x, Fk + tk.y - qk.y, Ik + tk.z - qk.z];
            yk(Xk, ik, lk, tk.id, Tk.iL(Xk, ik, lk))
          } else yk(kk, Fk, Ik, Xk, lk);
        const Lk = this.tables;
        if ((0 !== Lk.attachedTopOf(lk) || 0 !== Lk.attachedTopOf(Xk)) && Tk.isLoaded(kk, Fk + 1, Ik)) {
          let ak = Tk.iL(kk, Fk + 1, Ik);
          for (let Xk = 0; Xk < ik.length; Xk += 5) ik[Xk] === kk && ik[Xk + 1] === Fk + 1 && ik[Xk + 2] === Ik && (ak = ik[Xk + 3]);
          const qk = this.attachedTopWrite(lk, Xk, ak);
          void 0 !== qk && yk(kk, Fk + 1, Ik, qk, ak)
        }
        return ik
      }
      attachedTopWrite(kk, Fk, Ik) {
        const Xk = this.tables,
          Tk = Xk.attachedTopOf(kk),
          ik = Xk.attachedTopOf(Fk),
          yk = 0 !== Tk && 0 !== Ik && Xk.blockRootId(Ik) === Xk.blockRootId(Tk);
        return 0 !== Tk && 0 !== ik && Xk.blockRootId(kk) === Xk.blockRootId(Fk) ? yk && Ik !== ik ? ik : void 0 : 0 === ik || !yk && 0 !== Ik ? yk ? 0 : void 0 : ik
      }
    }
    const LI = ek.gc + ek.kc * ek.rc.BYTES,
      tI = 2147483647,
      ZI = new TextDecoder,
      jI = new TextEncoder,
      eI = Object.freeze({
        il: 0,
        jy: null,
        amountAddedToSlot: 0
      }),
      wI = new Proxy({}, {
        get: () => () => ek.id
      });

    function HI(kk) {
      return Number.isInteger(kk) && kk >= 0 && kk <= 65535
    }

    function JI(kk) {
      return Number.isInteger(kk) && kk >= 0 && kk <= 4294967295
    }
    class xI {
      constructor(kk) {
        this.deps = kk, this.EX = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(ek.kc), this.ids = new Uint16Array(ek.kc), this.amounts = new Uint16Array(ek.kc), this.attrRead = new Float64Array(ek.kc).fill(-1), this.stale = new Uint16Array(ek.kc), this.staleVersion = new Uint32Array(ek.kc), this.instances = new Uint32Array(ek.kc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      eq() {
        return this.slot(this.selected)
      }
      playerItems() {
        const kk = [];
        for (let Fk = 0; Fk < Math.min(ek.sd, this.len); Fk++) kk.push(this.slot(Fk));
        return kk
      }
      freeSlots() {
        let kk = 0;
        for (let Fk = 0; Fk < Math.min(ek.sd - ek.i, this.len); Fk++) 0 === this.ids[Fk] && kk++;
        return kk
      }
      amountOf(kk) {
        let Fk = 0;
        for (let Xk = 0; Xk < Math.min(ek.sd, this.len); Xk++) {
          const Tk = this.slot(Xk);
          var Ik;
          if ((null === Tk || void 0 === Tk ? void 0 : Tk.name) === kk) Fk += null !== (Ik = Tk.amount) && void 0 !== Ik ? Ik : 1
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
          for (const Ik of [...this.listeners]) try {
            Ik()
          } catch (Fk) {
            kk(Fk)
          }
        }
      }
      chestOpened(kk, Fk, Ik) {
        this.EX[0] = kk, this.EX[1] = Fk, this.EX[2] = Ik, this.version++
      }
      refresh() {
        const kk = this.deps.api.apiView,
          Fk = ek.y.inventoryViewPtr(kk, 0),
          Ik = ek.y.inventoryVersion(kk, 0),
          Xk = ek.y.selectedSlot(kk, 0);
        Xk !== this.selected && (this.selected = Xk, this.version++);
        const Tk = ek.y.slotIcon(kk, 0);
        if (Tk !== this.slotIconId && (this.slotIconId = Tk, this.iconChanged = !0), Fk === this.viewPtr && Ik === this.viewVersion) return;
        this.viewPtr = Fk, this.viewVersion = Ik;
        const ik = this.deps.api.memoryData(Fk, LI, 4, "the inventory view"),
          yk = ik ? Math.min(ik.getUint32(0, !0), ek.kc) : 0;
        yk !== this.len && (this.len = yk, this.version++);
        let lk = 0;
        for (let ak = 0; ak < ek.kc; ak++) {
          const kk = ek.gc + ak * ek.rc.BYTES,
            Fk = null !== ik && ak < yk ? ek.rc.item(ik, kk) : 0;
          if (0 === Fk || null === ik) {
            0 !== this.ids[ak] && (this.ids[ak] = 0, this.attrRead[ak] = -1, this.instances[ak]++, this.version++);
            continue
          }
          const Ik = ek.rc.amount(ik, kk),
            Xk = ek.rc.attrVersion(ik, kk);
          Fk === this.ids[ak] && Ik === this.amounts[ak] || this.fill(ak, Fk, Ik), Xk !== this.attrRead[ak] && (this.stale[lk] = ak, this.staleVersion[lk] = Xk, lk++)
        }
        lk > 0 && this.fetchAttributes(lk)
      }
      fill(kk, Fk, Ik) {
        const {
          tables: Xk
        } = this.deps, Tk = Fk !== this.ids[kk];
        let ik = this.facades[kk];
        ik || (ik = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[kk] = ik), Tk && (ik.name = Xk.nameOfId(Fk), ik.typeObj = Xk.itemType(Fk), ik.attributes = {
          customAttributes: {}
        }, this.attrRead[kk] = -1, this.instances[kk]++), ik.amount = 0 === Ik ? null : Ik, this.ids[kk] = Fk, this.amounts[kk] = Ik, this.version++
      }
      fetchAttributes(kk) {
        const {
          api: Fk,
          onError: Ik
        } = this.deps, Xk = Fk.memoryView(Uint16Array, Fk.scratch(), kk, "item_attributes_batch's slots");
        if (!Xk) return void this.markRead(kk);
        Xk.set(this.stale.subarray(0, kk));
        const Tk = Fk.queries.itemAttributesBatch(kk),
          ik = 4294967295 === Tk ? null : Fk.memoryData(Fk.scratch(), Tk, 4, "item_attributes_batch's answer");
        if (!ik) return void this.markRead(kk);
        const yk = new Uint8Array(ik.buffer, ik.byteOffset, Tk);
        for (let ak = 0; ak + 8 <= Tk;) {
          const kk = ik.getUint16(ak, !0),
            Fk = ik.getUint32(ak + 4, !0),
            Xk = yk.subarray(ak + 8, ak + 8 + Fk);
          ak += 8 + (0, Zk.pe)(Fk);
          const Tk = this.facades[kk];
          if (Tk && 0 !== this.ids[kk] && 0 !== Fk) {
            try {
              Tk.attributes = JSON.parse(ZI.decode(Xk))
            } catch (lk) {
              Ik(lk)
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
        return HI(kk) && HI(Fk) && this.settle(this.queries().invSwap(kk, Fk))
      }
      move(kk, Fk, Ik) {
        return HI(kk) && HI(Fk) && JI(Ik) && this.settle(this.queries().invMove(kk, Fk, Ik))
      }
      quickMove(kk, Fk, Ik, Xk) {
        var Tk, ik;
        if (!HI(kk) || !HI(Fk) || !HI(Ik) || null !== Xk && !JI(Xk)) return null;
        const yk = this.queries().invQuickMove(kk, Fk, Ik, null === Xk ? -1 : Math.min(Xk, tI)),
          lk = yk === ek.id ? ek.Kb : null !== (Tk = null === (ik = this.extras()) || void 0 === ik ? void 0 : ik[1]) && void 0 !== Tk ? Tk : ek.Kb;
        return this.settle(yk), lk === ek.Kb ? null : lk
      }
      remove(kk, Fk, Ik) {
        return HI(kk) && JI(Fk) && this.settle(this.queries().invRemove(kk, Fk, Ik ? 1 : 0))
      }
      selectSlot(kk) {
        return HI(kk) && this.settle(this.queries().selectSlot(kk))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(kk, Fk, Ik) {
        if (!HI(kk) || !Number.isInteger(Fk)) return !1;
        const [Xk, Tk, ik] = Ik;
        return this.settle(this.queries().invEnchant(kk, Fk, Math.floor(Xk), Math.floor(Tk), Math.floor(ik)))
      }
      craft(kk, Fk, Ik) {
        let Xk;
        try {
          Xk = this.deps.tables.getItemId(kk)
        } catch {
          return eI
        }
        if (!HI(Fk) || null !== Ik && (Number.isNaN(Ik) || Ik < 0)) return eI;
        const Tk = null === Ik || Ik > tI ? -1 : Math.floor(Ik),
          ik = this.queries().craft(Xk, Fk, Tk);
        let yk = eI;
        const lk = ik === ek.id ? null : this.extras();
        if (lk) {
          const [kk, Fk, Ik] = lk;
          yk = {
            il: kk,
            jy: Fk === ek.Kb ? null : Fk,
            amountAddedToSlot: Ik
          }
        }
        return this.settle(ik), yk
      }
      salvage(kk, Fk, Ik) {
        let Xk;
        try {
          Xk = this.deps.tables.getItemId(Fk)
        } catch {
          return !1
        }
        return HI(kk) && Number.isInteger(Ik) && this.settle(this.queries().salvage(kk, Xk, Math.max(Math.min(Ik, tI), -tI)))
      }
      craftingView(kk, Fk, Ik) {
        var Xk;
        if (this.stopped) return null;
        const {
          api: Tk,
          onError: ik
        } = this.deps, yk = kk ? jI.encode(kk) : null;
        if (null !== yk) {
          if (yk.length > 1024) return ik(new Error(`The crafting station ${kk}'s name is over 1024 bytes`)), null;
          const Fk = Tk.memoryView(Uint8Array, Tk.scratch(), yk.length, "crafting_view's station");
          if (!Fk) return null;
          Fk.set(yk)
        }
        const lk = HI(Fk) && HI(Ik),
          ak = Tk.queries.craftingView(null !== (Xk = null === yk || void 0 === yk ? void 0 : yk.length) && void 0 !== Xk ? Xk : 0, lk ? Fk : 0, lk ? Ik : 0);
        return ak < ek.kb.BYTES ? (Tk.reportCorruption(`crafting_view's answer of ${ak} bytes`), null) : Tk.memoryData(Tk.scratch(), ak, 1, "crafting_view's answer")
      }
      queries() {
        var kk, Fk;
        return !1 === (null === (kk = (Fk = this.deps).beforeOp) || void 0 === kk ? void 0 : kk.call(Fk)) ? (this.stopped = !0, wI) : this.deps.api.queries
      }
      extras() {
        const {
          api: kk
        } = this.deps;
        return kk.memoryView(Uint32Array, kk.scratch(), 3, "a sync query's extra words")
      }
      settle(kk) {
        if (kk === ek.gd)(0, YF.d)();
        else if (kk !== ek.id) {
          const Fk = this.deps.cmd();
          Fk && function(kk, Fk, Ik) {
            return (0, YF.d)(), (0, ek.og)(kk, Fk, Ik)
          }(Fk, 0, kk) || this.deps.onError(new Error(`Sync op ${kk}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), kk !== ek.id
      }
    }
    const PI = 1 / .6,
      KI = [0, 1, 0],
      QI = [0, 0, 0],
      sI = new Uint8Array(0),
      VI = 1.2 * wF.f.CH,
      zI = new TextEncoder,
      SI = [0, 0, 0],
      oI = [0, 0, 0],
      vI = new Map;

    function EI(kk) {
      let Fk = vI.get(kk);
      return Fk || (vI.size >= 64 && vI.clear(), Fk = zI.encode(`{"emitRate":${kk}}`), vI.set(kk, Fk)), Fk
    }

    function OI(kk) {
      return Number.isFinite(kk) && kk > 0 ? kk : 0
    }

    function nI(kk, Fk) {
      for (let Ik = 0; Ik < 3; Ik++) {
        const Xk = Math.abs(Fk[Ik]);
        SI[Ik] = kk[Ik] - Xk, oI[Ik] = 2 * Xk
      }
      return Number.isFinite(SI[0] + SI[1] + SI[2] + oI[0] + oI[1] + oI[2])
    }

    function GI(kk, Fk) {
      return "pos1" === kk || "pos2" === kk ? void 0 : Fk
    }

    function pI(kk, Fk, Ik) {
      return kk.length > ek.Bd.MaxOpts ? (Ik(new Error(`${Fk}'s particle opts are over ${ek.Bd.MaxOpts} bytes of JSON`)), null) : kk
    }
    const uI = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class bI {
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
        var Ik;
        const Xk = this.sink(),
          Tk = null !== (Ik = Fk.half) && void 0 !== Ik ? Ik : QI;
        if (!Xk || this.live >= ek.Bd.MaxLiveKeys || this.nextKey > ek.Bd.MaxKey || !nI(Fk.pos, Tk)) return uI;
        const ik = this.nextKey,
          yk = pI(function(kk) {
            var Fk, Ik, Xk;
            const Tk = JSON.stringify({
              texture: "string" === typeof kk.texture ? kk.texture : "smokePuff",
              St: kk.St,
              minLifeTime: kk.minLifeTime,
              maxLifeTime: kk.maxLifeTime,
              minSize: kk.minSize,
              maxSize: kk.maxSize,
              minEmitPower: kk.minEmitPower,
              maxEmitPower: kk.maxEmitPower,
              emitRate: OI(kk.emitRate),
              gravity: null !== (Fk = kk.gravity) && void 0 !== Fk ? Fk : QI,
              dir1: null !== (Ik = kk.dir1) && void 0 !== Ik ? Ik : KI,
              dir2: null !== (Xk = kk.dir2) && void 0 !== Xk ? Xk : KI,
              colorGradients: kk.colorGradients,
              blendMode: kk.blendMode
            });
            return zI.encode(Tk)
          }(kk), "createParticles", this.deps.onError);
        return yk && (0, ek.rf)(Xk, 0, ik, 0, ek.Bd.PresetNone, 0, SI, oI, yk) ? (this.nextKey++, this.live++, this.started = !0, new RI(this, this.session, ik, kk, Tk)) : uI
      }
      playEffect(kk) {
        const Fk = this.sink(),
          {
            pos1: Ik,
            pos2: Xk
          } = kk;
        if (!Fk || !Ik || !Xk) return;
        for (let ik = 0; ik < 3; ik++) SI[ik] = Math.min(Ik[ik], Xk[ik]), oI[ik] = Math.abs(Xk[ik] - Ik[ik]);
        if (!Number.isFinite(SI[0] + SI[1] + SI[2] + oI[0] + oI[1] + oI[2])) return;
        const Tk = pI(zI.encode(JSON.stringify(kk, GI)), "playParticleEffect", this.deps.onError);
        Tk && (0, ek.of)(Fk, 0, 0, ek.Bd.PresetNone, ek.Bd.HasBox, 0, SI, oI, Tk)
      }
      burstPreset(kk, Fk, Ik) {
        const Xk = this.sink(),
          Tk = Math.min(Math.floor(Ik), ek.Bd.MaxBurst);
        if (!Xk || !Object.hasOwn(ek.Zb, kk) || !(Tk > 0)) return;
        const ik = VI;
        for (let yk = 0; yk < 3; yk++) SI[yk] = Fk[yk] - ik / 2, oI[yk] = ik;
        Number.isFinite(SI[0] + SI[1] + SI[2]) && (0, ek.of)(Xk, 0, 0, ek.Zb[kk], ek.Bd.HasBox, Tk, SI, oI, sI)
      }
      sessionEnded() {
        this.session++;
        const kk = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !kk || (0, ek.vf)(kk, 0)
      }
      sinkFor(kk) {
        return kk === this.session ? this.deps.cmd() : null
      }
      stop(kk, Fk) {
        const Ik = this.sinkFor(kk);
        Ik && (0, ek.zf)(Ik, 0, Fk) && this.live--
      }
    }
    class RI {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.owner = kk, this.session = Fk, this.key = Ik, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Tk[0]), Math.abs(Tk[1]), Math.abs(Tk[2])], this.rate = OI(Xk.emitRate), this.emitted = this.rate > 0;
        const ik = Xk.maxLifeTime * PI * 1e3 + 250;
        this.stopDelayMs = ik >= 0 ? Math.min(ik, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(kk, Fk) {
        const Ik = this.sink();
        if (Ik) {
          if (Fk)
            for (let kk = 0; kk < 3; kk++) this.half[kk] = Math.abs(Fk[kk]);
          nI(kk, this.half) && (0, ek.Bf)(Ik, 0, this.key, ek.Bd.HasBox, SI, oI, sI)
        }
      }
      setEmitRate(kk) {
        const Fk = this.sink(),
          Ik = OI(kk);
        Fk && Ik !== this.rate && (0, ek.Bf)(Fk, 0, this.key, 0, QI, QI, EI(Ik)) && (this.rate = Ik, this.emitted ||= Ik > 0)
      }
      emit(kk) {
        const Fk = this.sink(),
          Ik = Math.min(Math.floor(kk), ek.Bd.MaxBurst);
        Fk && Ik > 0 && (0, ek.of)(Fk, 0, this.key, ek.Bd.PresetNone, 0, Ik, QI, QI, sI) && (this.emitted = !0)
      }
      emitPoints(kk, Fk, Ik) {
        const Xk = this.sink(),
          Tk = Math.min(Math.floor(Ik), ek.Bd.MaxPoints, Math.floor(Fk.length / 4));
        if (!Xk || !(Tk > 0) || !Number.isFinite(kk[0] + kk[1] + kk[2])) return;
        const ik = new Uint8Array(Fk.buffer, Fk.byteOffset, Tk * ek.Bd.PointBytes);
        (0, ek.pf)(Xk, 0, this.key, Tk, kk, ik) && (this.emitted = !0)
      }
      setDirections(kk, Fk) {
        const Ik = this.sink();
        if (!Ik || !Number.isFinite(kk[0] + kk[1] + kk[2] + Fk[0] + Fk[1] + Fk[2])) return;
        const Xk = zI.encode(JSON.stringify({
          dir1: [kk[0], kk[1], kk[2]],
          dir2: [Fk[0], Fk[1], Fk[2]]
        }));
        (0, ek.Bf)(Ik, 0, this.key, 0, QI, QI, Xk)
      }
      stop() {
        const kk = this.sink();
        this.stopped = !0, kk && (this.emitted ? (this.rate > 0 && (0, ek.Bf)(kk, 0, this.key, 0, QI, QI, EI(0)), setTimeout((() => {
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
    const UI = fF.q,
      CI = new TextDecoder;

    function NI(kk, Fk) {
      const {
        serverIds: Ik,
        kinds: Xk
      } = kk;
      let Tk = 0;
      for (let ik = 0; ik < Ik.length; ik++) {
        const kk = Ik[ik];
        if (kk !== ek.Yc && !Qk(Xk[ik])) {
          if (Tk === Fk.length) {
            const kk = new Int32Array(Math.max(64, 2 * Tk));
            kk.set(Fk), Fk = kk
          }
          Fk[Tk++] = kk
        }
      }
      return {
        ids: Fk,
        count: Tk
      }
    }

    function cI(kk, Fk) {
      return kk.length >= Fk ? kk : new Int32Array(Math.max(Fk, 2 * kk.length))
    }

    function WI(kk, Fk, Ik, Xk) {
      for (let Tk = 0; Tk < Ik; Tk += 4096) {
        const ik = Math.min(4096, Ik - Tk),
          yk = kk.memoryView(Int32Array, kk.scratch(), ik, "entity_info_batch's ids");
        if (!yk) return !1;
        yk.set(Fk.subarray(Tk, Tk + ik));
        const lk = kk.queries.entityInfoBatch(ik),
          ak = 4294967295 === lk ? null : kk.memoryData(kk.scratch(), lk, 4, "entity_info_batch's records");
        if (!ak) return !1;
        for (let kk = 0; kk + ek.Rb.BYTES <= lk;) {
          const Fk = ek.Rb.len(ak, kk);
          Xk(ek.Rb.serverId(ak, kk), fI(ak, kk, Fk)), kk += ek.Rb.BYTES + (0, Zk.pe)(Fk)
        }
      }
      return !0
    }

    function fI(kk, Fk, Ik) {
      var Xk, Tk, ik;
      const yk = ek.Rb.kind(kk, Fk),
        lk = 0 === yk ? null : sk(yk);
      if (null === lk) return null;
      const ak = ek.Rb.variation(kk, Fk),
        qk = ek.Rb.pose(kk, Fk),
        Lk = ek.Rb.meta(kk, Fk),
        tk = ek.Rb.mesh(kk, Fk),
        Zk = 0 !== (ek.Rb.flags(kk, Fk) & ek.Ob.HasOpts),
        jk = UI[lk];
      return Object.freeze({
        type: lk,
        variation: ak === ek.cd ? void 0 : null !== (Xk = null !== (Tk = null === jk || void 0 === jk ? void 0 : jk[ak]) && void 0 !== Tk ? Tk : null === jk || void 0 === jk ? void 0 : jk[0]) && void 0 !== Xk ? Xk : "default",
        pose: qk === ek.dc ? void 0 : null !== (ik = ek.Fb[qk]) && void 0 !== ik ? ik : ek.Fb[0],
        metaInfo: Lk === ek.dc ? void 0 : ek.Mc[Lk],
        meshKind: tk === ek.dc ? void 0 : ek.Jc[tk],
        meshOpts: Zk ? CI.decode(new Uint8Array(kk.buffer, kk.byteOffset + Fk + ek.Rb.BYTES, Ik)) : void 0
      })
    }
    const BI = 1,
      dI = 2;
    class YI {
      constructor(kk) {
        this.deps = kk, this.wanted = 0, this.eq = !1, this.refused = !1
      }
      get on() {
        return this.eq
      }
      want(kk, Fk) {
        this.wanted = Fk ? this.wanted | kk : this.wanted & ~kk;
        const Ik = 0 !== this.wanted;
        if (Ik === this.eq) return;
        const Xk = this.deps.cmd();
        null !== Xk ? (0, ek.tg)(Xk, 0, Ik ? 1 : 0) ? (this.eq = Ik, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.eq = !1
      }
    }
    class AI {
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
          let Ik = 0;
          const Xk = this.ids = cI(this.ids, kk);
          for (let Tk = 0; Tk < kk; Tk++) {
            const kk = this.pending[Tk],
              ik = Fk.indexById.get(kk);
            void 0 === ik || Qk(Fk.kinds[ik]) ? this.entries.delete(String(kk)) : Xk[Ik++] = kk
          }
          Ik > 0 && !this.batch(Xk, Ik) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(BI, !1)
      }
      fill() {
        const {
          api: kk
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: kk
          } = this.deps, Fk = kk.on;
          kk.want(BI, !0), !Fk && kk.on && (this.refill = this.midFrame)
        }
        const {
          ids: Fk,
          count: Ik
        } = NI(kk, this.ids);
        this.ids = Fk, Ik > 0 && !this.batch(Fk, Ik) && (this.refill = !0)
      }
      batch(kk, Fk) {
        return WI(this.deps.api, kk, Fk, ((kk, Fk) => {
          null === Fk ? this.entries.delete(String(kk)) : this.entries.set(String(kk), Fk)
        }))
      }
    }
    var gI = Ik(4799);

    function mI(kk) {
      if ("message" !== kk.type || kk.oq !== gI.sc.NewClientOptions || kk.payloadKind !== Zk.fc.Msgpack) return null;
      const Fk = (0, Uk.b)(kk.payload);
      if (null === Fk || "object" !== typeof Fk || Array.isArray(Fk)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Fk
    }
    var hI = Ik(1231),
      rI = Ik(36620);

    function DI(kk, Fk, Ik, Xk, Tk, ik, lk) {
      var ak, qk, Lk;
      switch (kk) {
        case ek.he.ToggleMenu: {
          const kk = ek.M[Fk];
          yk.g.GL("toggleMenu", void 0 === kk ? "inventory" : `inventory|${kk}`);
          break
        }
        case ek.he.EditBoard:
          yk.g.GL("EditBoard", {
            pos: 0 === Fk ? null : Ik
          });
          break;
        case ek.he.EditCodeBlock:
        case ek.he.ViewCodeBlock:
          yk.g.GL("EditCodeBlock", {
            pos: Ik,
            canChangePos: kk === ek.he.EditCodeBlock
          });
          break;
        case ek.he.EditCustomLobbyBlock:
          yk.g.GL("EditCustomLobbyBlock", {
            pos: Ik
          });
          break;
        case ek.he.OpenIronChest:
          yk.g.GL("OpenIronChest", {
            pos: Ik
          });
          break;
        case ek.he.EditNameTag:
          yk.g.GL("EditNameTag", null !== (ak = null === (qk = Tk.eq()) || void 0 === qk || null === (Lk = qk.attributes.customAttributes) || void 0 === Lk ? void 0 : Lk.text) && void 0 !== ak ? ak : "");
          break;
        case ek.he.EditBook: {
          var tk, Zk, wk;
          const kk = null === (tk = Tk.eq()) || void 0 === tk ? void 0 : tk.attributes;
          yk.g.GL("EditBook", {
            pages: (0, hI.V)(null === kk || void 0 === kk || null === (Zk = kk.customAttributes) || void 0 === Zk ? void 0 : Zk.pages),
            title: null !== (wk = null === kk || void 0 === kk ? void 0 : kk.customDisplayName) && void 0 !== wk ? wk : "Title",
            isPublished: !(null === kk || void 0 === kk || !kk.customDescription)
          });
          break
        }
        case ek.he.CantChangeBlock:
          ! function(kk, Fk) {
            const Ik = Fk.getClientOption("cantChangeError"),
              Xk = Fk.getClientOption(kk ? "cantBuildError" : "cantBreakError"),
              Tk = kk ? Ik : Xk;
            (Fk.getClientOption("canChange") || Tk || "You cannot modify this block" !== Ik) && yk.g.GL("showBottomMessage", {
              message: Xk || Ik,
              type: "Error"
            })
          }(1 === Fk, ik);
          break;
        case ek.he.MiddleBarStart:
          yk.g.GL("middleScreenBarInitiate", {
            duration: Xk,
            fX: 1 === Ik[0],
            horizBarRemOffset: Fk
          });
          break;
        case ek.he.MiddleBarStop:
          yk.g.GL("middleScreenBarRemove");
          break;
        case ek.he.Hitmarker:
          yk.g.GL("localGunHitmarker", {
            KX: 1 === Fk
          });
          break;
        case ek.he.ShotsLeft:
          yk.g.GL("localPlayerNewShotsLeft", Xk);
          break;
        case ek.he.AimingOverlay:
          yk.g.GL("aimingOverlay", 3 === (3 & Fk) ? "sniper" : "none");
          break;
        case ek.he.BottomMessage:
          yk.g.GL("showBottomMessage", JSON.parse(lk()));
          break;
        case ek.he.Crosshair:
          Tk.inaccuracy = (0, Ck.d)(Xk), (0, rI.c)().crosshairAccuracy(Tk.inaccuracy);
          break;
        case ek.he.ChargeStage:
          break;
        case ek.he.EmoteWheelClose:
          yk.g.GL("requestEmoteWheelClose");
          break;
        case ek.he.BlockMined:
          yk.g.GL("localBlockMined");
          break;
        default:
          throw new jk.b(`UiEvent of no kind: what ${kk}`)
      }
    }
    var MI = Ik(38e3),
      kX = Ik(34180),
      FX = Ik(1905),
      IX = Ik(36833),
      XX = Ik(34193),
      TX = Ik(4792);
    const iX = 10,
      yX = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      lX = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      aX = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function qX(kk, Fk) {
      let Ik, Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const ik = () => (Ik = (0, FX.q)(Ik, Fk()), Ik);
      return {
        current: ik,
        watch(Fk) {
          const Ik = () => {
              Fk(ik())
            },
            yk = [kk.watch(Ik)];
          return null !== Xk && yk.push((0, FX.s)((kk => {
            kk.some(Xk) && Ik()
          }))), null !== Tk && yk.push(Tk(Ik)), () => {
            for (const kk of yk) kk()
          }
        }
      }
    }

    function LX(kk) {
      return kk && {
        name: kk.name,
        amount: kk.amount,
        attributes: kk.attributes
      }
    }
    const tX = new WeakMap;

    function ZX(kk) {
      let Fk = tX.get(kk);
      return void 0 === Fk && (Fk = (0, XX.creativeItemIds)().map((Fk => ({
        name: kk.nameOfId(Fk),
        amount: kk.isStackableId(Fk) ? 1 : null,
        attributes: (0, MI.b)("Gun" === (0, XX.itemTypeOf)(Fk) ? {
          type: "Gun",
          clipSize: (0, XX.clipSizeOf)(Fk)
        } : void 0)
      }))), tX.set(kk, Fk)), Fk
    }

    function jX(kk, Fk, Ik, Xk) {
      const Tk = Fk => (kk.flush(Xk), Fk),
        ik = Ik => {
          var Xk, Tk, ik, yk, lk, ak, qk;
          const Lk = kk.slot(Ik);
          if (!Lk) return null;
          const {
            rootName: tk,
            metaStr: Zk
          } = Fk.getMetaInfo(Lk.name);
          return {
            name: Lk.name,
            amount: Lk.amount,
            attributes: Lk.attributes,
            instance: kk.instance(Ik),
            displayName: null !== (Xk = Lk.attributes.customDisplayName) && void 0 !== Xk ? Xk : Fk.getDisplayName(tk),
            requiresAmmo: "RequiresAmmo" === Zk,
            clipSize: null !== (Tk = null !== (ik = null === (yk = Lk.attributes.customAttributes) || void 0 === yk || null === (lk = yk.gunStats) || void 0 === lk ? void 0 : lk.clipSize) && void 0 !== ik ? ik : null === (ak = Fk.getGunStats(tk)) || void 0 === ak ? void 0 : ak.clipSize) && void 0 !== Tk ? Tk : null === (qk = Lk.typeObj) || void 0 === qk ? void 0 : qk.clipSize
          }
        },
        lk = function(kk, Fk) {
          let Ik = null,
            Xk = {
              focus: null,
              recipes: [],
              detail: null
            },
            Tk = -1;
          const ik = new Set;
          return {
            read() {
              var ik, yk;
              if (null === Ik) return null !== Xk.focus && (Xk = {
                ...Xk,
                focus: null
              }), Xk;
              if (Xk.focus === Ik && Tk === kk.changes) return Xk;
              if (Tk = kk.changes, 0 === kk.length) return Xk = {
                focus: Ik,
                recipes: [],
                detail: null
              }, Xk;
              let lk = 0;
              if (null !== Ik.recipe) try {
                lk = Fk.getItemId(Ik.recipe.name)
              } catch {}
              const ak = kk.craftingView(Ik.station, lk, null !== (ik = null === (yk = Ik.recipe) || void 0 === yk ? void 0 : yk.Tl) && void 0 !== ik ? ik : 0);
              return Xk = null === ak ? {
                focus: Ik,
                recipes: [],
                detail: null
              } : function(kk, Fk, Ik) {
                let Xk = ek.kb.BYTES;
                const Tk = [];
                for (let Lk = ek.kb.recipes(kk, 0); Lk > 0; Lk--) {
                  const Ik = ek.eb.flags(kk, Xk),
                    ik = {
                      name: Fk.nameOfId(ek.eb.item(kk, Xk)),
                      Tl: ek.eb.recipe(kk, Xk),
                      requires: [],
                      produces: ek.eb.produces(kk, Xk),
                      haveIngredients: 0 !== (Ik & ek.bb.HaveIngredients),
                      listed: 0 !== (Ik & ek.bb.Listed)
                    };
                  let yk = ek.eb.requires(kk, Xk);
                  for (Xk += ek.eb.BYTES; yk > 0; yk--) {
                    const Ik = ek.hb.items(kk, Xk);
                    ik.requires.push({
                      items: HX(kk, Xk + ek.hb.BYTES, Ik, Fk),
                      amt: ek.hb.amount(kk, Xk)
                    }), Xk += ek.hb.BYTES + 2 * Ik
                  }
                  Tk.push(ik)
                }
                const ik = ek.kb.flags(kk, 0);
                if (null === Ik.recipe || 0 === (ik & ek.jb.Detail)) return {
                  focus: Ik,
                  recipes: Tk,
                  detail: null
                };
                const yk = {},
                  lk = {};
                for (let Lk = ek.kb.ingredients(kk, 0); Lk > 0; Lk--) {
                  const Ik = ek.ab.item(kk, Xk),
                    Tk = ek.ab.from(kk, Xk),
                    ik = ek.ab.amount(kk, Xk);
                  Xk += ek.ab.BYTES;
                  const ak = Tk === ek.K ? null : HX(kk, Xk, Tk, Fk);
                  if (null !== ak && (Xk += 2 * Tk), 0 === Ik) continue;
                  const qk = Fk.nameOfId(Ik);
                  yk[qk] = ik, null !== ak && (lk[qk] = ak)
                }
                const {
                  name: ak,
                  Tl: qk
                } = Ik.recipe;
                return {
                  focus: Ik,
                  recipes: Tk,
                  detail: {
                    name: ak,
                    Tl: qk,
                    craftAllTimes: ek.kb.craftAllTimes(kk, 0),
                    roomForOne: 0 !== (ik & ek.jb.RoomForOne),
                    resultStackable: Boolean(Fk.getItemStat(ak, "stackable")),
                    amounts: yk,
                    ingredientsCraftedFrom: lk
                  }
                }
              }(ak, Fk, Ik), Xk
            },
            setFocus(kk) {
              Ik = kk;
              for (const Fk of [...ik]) Fk()
            },
            watchFocus: kk => (ik.add(kk), () => {
              ik.delete(kk)
            })
          }
        }(kk, Fk);
      return {
        states: {
          inventory: qX(kk, (() => {
            const Ik = kk.length;
            if (0 === Ik) return yX;
            const Xk = [];
            for (let Fk = 0; Fk < ek.sd; Fk++) Xk.push(LX(kk.slot(Fk)));
            const Tk = kk.slotIcon,
              ik = Xk[kk.selectedSlot];
            0 !== Tk && ik && (Xk[kk.selectedSlot] = {
              ...ik,
              icon: Fk.nameOfId(Tk)
            });
            const yk = !0 === Fk.getClientOption("creative");
            let lk = [],
              ak = null;
            if (Ik > ek.sd) {
              for (let Fk = ek.sd; Fk < Ik; Fk++) lk.push(LX(kk.slot(Fk)));
              ak = {
                type: null,
                pos: [...kk.EX],
                numSlots: Ik - ek.sd,
                ironChest: null
              }
            } else yk && (lk = ZX(Fk));
            return {
              player: Xk,
              chestOrCreative: lk,
              chest: ak,
              creative: yk,
              selectedSlot: kk.selectedSlot,
              freeSlots: kk.freeSlots()
            }
          }), (0, FX.n)("creative")),
          hotbar: qX(kk, (() => {
            if (0 === kk.length) return lX;
            const Fk = [];
            for (let kk = 0; kk < iX; kk++) Fk.push(ik(kk));
            return {
              items: Fk,
              ammo: kk.amountOf("Ammo"),
              selectedSlot: kk.selectedSlot
            }
          }), (0, FX.j)("DisplayName", "GunStats")),
          crafting: qX(kk, lk.read, null, lk.watchFocus),
          heldItemAim: qX(kk, (() => {
            var Fk;
            if (!Ik()) return aX;
            const Xk = null === (Fk = kk.eq()) || void 0 === Fk ? void 0 : Fk.typeObj,
              Tk = "Gun" === (null === Xk || void 0 === Xk ? void 0 : Xk.type);
            return {
              gun: Tk,
              aimable: Tk || !0 === (null === Xk || void 0 === Xk ? void 0 : Xk.showsAimingUi),
              chargeName: "Chargeable" === (null === Xk || void 0 === Xk ? void 0 : Xk.type) ? Xk.name : null
            }
          }), null, (kk => function(kk, Fk) {
            let Ik = kk();
            return (0, TX.y)((() => {
              const Xk = kk();
              Xk !== Ik && (Ik = Xk, Fk(Xk))
            }))
          }(Ik, kk)))
        },
        events: {
          hotbarSlotRequested: (0, FX.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, FX.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, FX.c)("numkeyPressed"),
          inventoryDropRequested: (0, FX.c)("DropInvenItem"),
          chestToggled: (0, FX.c)("chestToggleFromServer"),
          chestRefreshed: (0, FX.c)("chestRefreshedFromServer", wX),
          inventorySynced: (0, FX.c)("syncedInvenFromServer", wX),
          enchantingTableOpened: (0, FX.c)("enchantingTable", (kk => {
            let {
              position: Ik,
              iL: Xk
            } = kk;
            return {
              position: [...Ik],
              blockName: Fk.getMetaInfo(Xk).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Fk) {
            kk.selectSlot(Fk), kk.flush(Xk)
          },
          removeInventoryItem(Fk) {
            let {
              slot: Ik,
              amount: Xk,
              drop: ik
            } = Fk;
            return Tk(kk.remove(Ik, Xk, ik))
          },
          swapInventorySlots(Fk) {
            let {
              a: Ik,
              b: Xk
            } = Fk;
            return Tk(kk.swap(Ik, Xk))
          },
          moveInventoryItem(Fk) {
            let {
              from: Ik,
              to: Xk,
              amount: ik
            } = Fk;
            return Tk(kk.move(Ik, Xk, ik))
          },
          quickMoveInventoryItem(Fk) {
            let {
              slot: Ik,
              start: Xk,
              end: ik,
              amount: yk
            } = Fk;
            return Tk(kk.quickMove(Ik, Xk, ik, yk))
          },
          closeChest() {
            kk.closeChest(), kk.flush(Xk), yk.g.GL("chestClosedByPlayer")
          },
          focusCrafting(kk) {
            lk.setFocus(kk)
          },
          craftRecipe(Fk) {
            let {
              name: Ik,
              Tl: Xk,
              times: ik
            } = Fk;
            return Tk(kk.craft(Ik, Xk, ik))
          },
          salvageItem(Fk) {
            let {
              slot: Ik,
              name: Xk,
              amount: ik
            } = Fk;
            return Tk(kk.salvage(Ik, Xk, ik))
          },
          enchantItem(Fk) {
            let {
              slot: Ik,
              level: Xk,
              tablePos: Tk
            } = Fk;
            kk.enchant(Ik, Xk, Tk)
          }
        },
        queries: {
          enchantingOffer(Ik) {
            let {
              slot: Xk,
              blockName: Tk
            } = Ik;
            return function(kk, Fk, Ik, Xk) {
              const Tk = kk.slot(Ik);
              if (!Tk || !Fk.getClientOption("canCraft") || !(0, kX.r)(Xk) || (0, kX.n)(Tk.attributes)) return eX;
              const ik = (0, XX.enchantmentPerksOf)(Fk.getItemId(Tk.name));
              if (0 === ik.length) return eX;
              const yk = [];
              for (let lk = 0; lk < IX.b; lk++) {
                const {
                  commonProb: kk,
                  uncommonProb: Fk,
                  rareProb: Ik,
                  epicProb: Tk,
                  legendaryProb: ik,
                  level: ak
                } = (0, kX.h)(Xk, lk);
                yk.push({
                  level: ak,
                  odds: [kk, Fk, Ik, Tk, ik].map((kk => 100 * kk))
                })
              }
              return {
                perks: [...ik],
                options: yk
              }
            }(kk, Fk, Xk, Tk)
          }
        }
      }
    }
    const eX = Object.freeze({
      perks: [],
      options: []
    });

    function wX() {
      return null
    }

    function HX(kk, Fk, Ik, Xk) {
      const Tk = [];
      for (let ik = 0; ik < Ik; ik++) {
        const Ik = kk.getUint16(Fk + 2 * ik, !0);
        0 !== Ik && Tk.push(Xk.nameOfId(Ik))
      }
      return Tk
    }
    class JX {
      constructor(kk) {
        this.api = kk, this.positions = new Map, this.targeted = {
          YM: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          gq: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(kk) {
        let Fk = this.positions.get(kk);
        return Fk || (this.api.checkValid(kk) || this.api.isLocal(kk) ? (Fk = [NaN, NaN, NaN], this.api.readPosition(kk, Fk), this.positions.set(kk, Fk), Fk) : null)
      }
      Vkk() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Fk, Ik] of this.positions) this.api.readPosition(Fk, Ik) || this.api.checkValid(Fk) || this.api.isLocal(Fk) || this.positions.delete(Fk);
        const kk = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (ek.y.playerFlags(kk, 0) & ek.Ed.Breaking) && ek.y.breakingProgress(kk, 0) >= 0, this.isBreaking)
          for (let Fk = 0; Fk < 3; Fk++) this.breaking[Fk] = ek.y.breakingPos(kk, 0, Fk)
      }
      refreshTarget() {
        const kk = this.api.apiView,
          Fk = ek.y.targetBlockId(kk, 0);
        if (this.hasTarget = Fk !== ek._c, this.hasTarget) {
          const Ik = this.targeted;
          Ik.YM = Fk;
          for (let Fk = 0; Fk < 3; Fk++) Ik.position[Fk] = ek.y.targetBlock(kk, 0, Fk), Ik.normal[Fk] = ek.y.targetNormal(kk, 0, Fk), Ik.gq[Fk] = ek.y.targetAdjacent(kk, 0, Fk)
        }
      }
      despawned(kk) {
        const Fk = this.positions.get(kk);
        Fk && !this.api.isLocal(kk) && (Fk.fill(NaN), this.positions.delete(kk))
      }
    }
    var xX = Ik(40629),
      PX = Ik(40609),
      KX = Ik(36824);
    const QX = 1,
      sX = 2;
    class VX {
      constructor() {
        this.game = new KX.h, this.client = new KX.h, this.eq = 0, this.movesFly = null
      }
      setGame(kk) {
        if (null === kk || "object" !== typeof kk) return !1;
        const {
          key: Fk,
          value: Ik
        } = kk;
        return "string" === typeof Fk && (this.game.setBooleanType(Fk, Boolean(Ik)), !0)
      }
      setClient(kk, Fk) {
        this.client.setBooleanType(kk, Fk)
      }
      clearGame() {
        this.game = new KX.h, this.movesFly = null
      }
      setMovesFly(kk) {
        this.movesFly = kk
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? QX : 0) | (this.client._getTotalBooleanVal() ? sX : 0)
      }
      write(kk) {
        const Fk = this.perms(),
          {
            movesFly: Ik
          } = this;
        if (Fk === this.eq && null === Ik) return !0;
        let Xk = ek.Tb.Keep;
        return null !== Ik && (Xk = Ik ? ek.Tb.On : ek.Tb.Off), !(!kk || !(0, ek.De)(kk, 0, Xk, Fk, Ik ? 1 : 0)) && (this.eq = Fk, this.movesFly = null, !0)
      }
    }
    class zX {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = kk, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: lk.d,
          get y() {
            return Fk()
          }
        }
      }
      get hasView() {
        const kk = this.api.apiView,
          Fk = ek.y.viewProj;
        return 0 !== Fk(kk, 0, 3) || 0 !== Fk(kk, 0, 7) || 0 !== Fk(kk, 0, 11) || 0 !== Fk(kk, 0, 15)
      }
      get cameraPosition() {
        const kk = this.api.apiView,
          {
            eye: Fk
          } = this;
        for (let Ik = 0; Ik < 3; Ik++) Fk[Ik] = ek.y.eye(kk, 0, Ik);
        return Fk
      }
      get cameraDirection() {
        const kk = this.api.apiView,
          Fk = ek.y.viewProj,
          Ik = Fk(kk, 0, 3),
          Xk = Fk(kk, 0, 7),
          Tk = Fk(kk, 0, 11),
          ik = Math.hypot(Ik, Xk, Tk),
          {
            forward: yk
          } = this;
        return ik > 0 && (yk[0] = Ik / ik, yk[1] = Xk / ik, yk[2] = Tk / ik), yk
      }
      get cameraHeading() {
        return ek.y.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return ek.y.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return ek.y.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return ek.y.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(kk) {
        this.clip(kk);
        const {
          clipX: Fk,
          clipY: Ik,
          clipW: Xk
        } = this;
        if (Xk > 0) {
          const kk = Fk / Xk * 50,
            Tk = -Ik / Xk * 50;
          return Math.abs(kk) <= this.screenBandPct.x && Math.abs(Tk) <= this.screenBandPct.y ? {
            x: 50 + kk,
            y: 50 + Tk
          } : this.clampToBand(kk, Tk)
        }
        const Tk = this.cameraPosition,
          ik = Math.hypot(kk[0] - Tk[0], kk[1] - Tk[1], kk[2] - Tk[2]),
          yk = this.api.apiView,
          lk = ek.y.viewProj,
          ak = ik > 0 ? Fk / ik : 0,
          qk = ik > 0 ? -Ik / ik : 0,
          Lk = Math.hypot(lk(yk, 0, 1), lk(yk, 0, 5), lk(yk, 0, 9)),
          tk = ak / Math.hypot(lk(yk, 0, 0), lk(yk, 0, 4), lk(yk, 0, 8)),
          Zk = qk / Lk,
          jk = !(Math.abs(tk) >= .001 || Math.abs(Zk) >= .001);
        return this.clampToBand(ak, jk ? -(Lk || 1) : qk)
      }
      projectDirectionToScreenPos(kk) {
        if (!this.hasView) return;
        const Fk = this.cameraPosition,
          Ik = this.along;
        for (let Xk = 0; Xk < 3; Xk++) Ik[Xk] = Fk[Xk] + 10 * kk[Xk];
        return this.projectWorldPosToScreenPos(Ik)
      }
      projectWorldPosToViewport(kk) {
        this.clip(kk);
        const {
          clipX: Fk,
          clipY: Ik,
          clipW: Xk
        } = this;
        return Xk > 0 ? {
          x: 50 + Fk / Xk * 50,
          y: 50 - Ik / Xk * 50
        } : null
      }
      clip(kk) {
        const Fk = this.api.apiView,
          Ik = kk[0] - ek.y.origin(Fk, 0, 0),
          Xk = kk[1] - ek.y.origin(Fk, 0, 1),
          Tk = kk[2] - ek.y.origin(Fk, 0, 2),
          ik = ek.y.viewProj;
        this.clipX = ik(Fk, 0, 0) * Ik + ik(Fk, 0, 4) * Xk + ik(Fk, 0, 8) * Tk + ik(Fk, 0, 12), this.clipY = ik(Fk, 0, 1) * Ik + ik(Fk, 0, 5) * Xk + ik(Fk, 0, 9) * Tk + ik(Fk, 0, 13), this.clipW = ik(Fk, 0, 3) * Ik + ik(Fk, 0, 7) * Xk + ik(Fk, 0, 11) * Tk + ik(Fk, 0, 15)
      }
      clampToBand(kk, Fk) {
        return (0, lk.g)(kk, Fk, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var SX = Ik(4810);
    const oX = new TextEncoder,
      vX = new Uint8Array(ek.T * ek.P);
    class EX {
      constructor() {
        this.buttons = [], this.eq = !0
      }
      set(kk) {
        this.buttons = kk, this.eq = !1
      }
      attached() {
        this.eq = 0 === this.buttons.length
      }
      write(kk) {
        if (this.eq) return;
        const Fk = new Uint8Array(ek.T),
          Ik = new Uint8Array(ek.T);
        let Xk = 0,
          Tk = 0;
        for (const {
            id: ik,
            keycode: yk
          }
          of this.buttons) {
          if (Xk === ek.T) break;
          const {
            read: kk,
            written: lk
          } = oX.encodeInto(ik, vX.subarray(Tk, Tk + ek.P));
          if (kk < ik.length) continue;
          const ak = SX.o[yk];
          Fk[Xk] = "number" === typeof ak ? ak : 0, Ik[Xk] = lk, Xk++, Tk += lk
        }
        this.eq = (0, ek.te)(kk, 0, Xk, Fk, Ik, vX.subarray(0, Tk))
      }
    }

    function OX(kk, Fk, Ik) {
      const Xk = oX.encode(Fk);
      return Xk.length <= ek.P && function(kk, Fk, Ik, Xk) {
        return (0, YF.d)(), (0, ek.Df)(kk, Fk, Ik, Xk)
      }(kk, 0, Ik ? 1 : 0, Xk)
    }
    const nX = new TextDecoder,
      GX = new TextEncoder,
      pX = new Uint8Array(0),
      uX = [0, 0, 0],
      bX = {
        off: ek.Id.Off,
        key: ek.Id.Key,
        touch: ek.Id.Touch
      };
    class RX {
      constructor(kk) {
        var Fk;
        this.options = kk, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new EX, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new VX, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Mj = kk => {
          if ((0, jk.f)(kk)) throw kk;
          this.onError(kk)
        }, this.api = kk.api, this.tables = kk.tables, this.onError = null !== (Fk = kk.onError) && void 0 !== Fk ? Fk : kk => {
          console.error("Error in client game callback", kk)
        }, this.renderFrame = new zX(this.api, kk.screenBandY), this.live = new JX(this.api), this.chunks = new aF(this.api.memory, (() => this.api.apiView)), this.items = new xI({
          api: this.api,
          tables: kk.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: kk.beforeOp
        });
        const Ik = () => this.stopped() ? null : this.cmd,
          Xk = () => this.sessionLive;
        this.entityInfoWatch = new YI({
          cmd: Ik,
          onError: this.onError
        }), this.entityInfo = new AI({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Xk
        }), this.particles = new bI({
          cmd: Ik,
          isSessionLive: Xk,
          onError: this.onError
        }), this.clientApi = new qI({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: kk.tables,
          cmd: Ik,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Xk,
          beforeWrite: () => {
            var Fk;
            if (this.stopped()) return !1;
            const Ik = this.generation;
            return !1 !== (null === (Fk = kk.beforeWrite) || void 0 === Fk ? void 0 : Fk.call(kk)) && Ik === this.generation
          },
          playerDbId: () => {
            const kk = this.session;
            if (null === kk) throw new Error("No game session has started, so the local player has no DB id");
            return kk.playerDbId
          },
          playSound: kk.playSound,
          preloadSounds: kk.preloadSounds,
          setLocalOptions: kk.setLocalOptions,
          hasPackModel: kk.hasPackModel
        }), this.scriptedCamera = new gk({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: kk.cameraScreen,
          showFacing: kk.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= jX(this.items, this.tables, (() => this.localPlayerAlive()), this.Mj), this.itemSources
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
        return null !== Fk && (Ik = Fk, Xk = 0, Tk = kk[0], ik = kk[1], yk = kk[2], (0, YF.d)(), (0, ek.ye)(Ik, Xk, Tk, ik, yk));
        var Ik, Xk, Tk, ik, yk
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(kk) {
        const Fk = this.liveCmd();
        return null === Fk ? (this.pendingZoom = kk, !1) : (this.pendingZoom = null, (0, ek.lg)(Fk, 0, kk, 1))
      }
      sE(kk) {
        const Fk = this.stopped() ? null : this.cmd;
        return null !== Fk && (0, ek.ig)(Fk, 0, kk ? 1 : 0)
      }
      respawn() {
        const kk = this.sessionLive ? this.sendCmd() : null;
        return null !== kk && (Fk = kk, Ik = 0, (0, YF.d)(), (0, ek.Of)(Fk, Ik));
        var Fk, Ik
      }
      bindCustomButtonKeys(kk) {
        this.customButtons.set(kk)
      }
      pressCustomButton(kk, Fk) {
        const Ik = this.sessionLive ? this.sendCmd() : null;
        return null !== Ik && OX(Ik, kk, Fk)
      }
      padMove(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = this.liveCmd();
        return null !== yk && (0, ek.nf)(yk, 0, kk, Fk, Ik, Xk, Tk, ik)
      }
      thirdPersonFor(kk) {
        const Fk = this.liveCmd();
        return null !== Fk && (0, ek.qg)(Fk, 0, null !== kk && void 0 !== kk ? kk : 1 / 0)
      }
      send(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Xk && AF(Xk, Ik ? Zk.od : 0, kk, (0, Uk.c)(Fk))
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
        const Ik = this.api.apiView;
        this.overflowGen = ek.y.eventOverflowGen(Ik, 0), this.resyncOwed = 0 !== ek.y.eventOverflowMask(Ik, 0), kk.setGameHost(this), kk.setEventWalker((kk => {
          this.api.walk(kk, this, Fk)
        }))
      }
      watchPromptPick(kk) {
        this.promptWatch = kk, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : UX(ek.y.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? ek.pc.None : ek.y.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : ek.y.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === kk || kk >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, kk, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(kk) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(kk)
      }
      netEvent(kk) {
        "connection" === kk.type ? kk.phase === Zk.I.Activated && kk.conn !== this.activeConn && kk.conn > this.closedThrough ? (this.endSession(), this.activeConn = kk.conn, this.endGameGrants(), this.dropGameCamera()) : kk.phase !== Zk.I.Left && kk.phase !== Zk.I.Closed || kk.conn !== this.activeConn ? kk.phase === Zk.I.Resumed && 0 !== this.activeConn && kk.conn > this.closedThrough && (this.activeConn = kk.conn) : this.closeGame() : kk.conn === this.activeConn && 0 !== kk.conn && (kk.oq === PX.s ? this.gunHit(kk.payload) : kk.oq === gI.sc.EditItemCraftingRecipes || kk.oq === PX.N ? this.items.touch() : (this.serverOptions(kk), this.gameMessage(kk)));
        const Fk = this.options.onNetEvent;
        Fk && this.guard((() => {
          Fk(kk)
        }))
      }
      serverOptions(kk) {
        const Fk = this.options.serverOptions,
          Ik = Fk ? this.decoded(mI, kk) : null;
        Fk && Ik && this.guard((() => {
          Fk.applyNewClientOptions(Ik)
        }))
      }
      gameMessage(kk) {
        let Fk = null;
        try {
          Fk = function(kk) {
            if ("message" !== kk.type || kk.oq !== gI.sc.GameCodeMessage || kk.payloadKind !== Zk.fc.Msgpack) return null;
            const Fk = (0, Uk.b)(kk.payload);
            if (null === Fk || "object" !== typeof Fk || "string" !== typeof Fk.messageType) throw new Error("GameCodeMessage without a messageType");
            return Fk
          }(kk)
        } catch (Ik) {
          this.sessionLive && this.onError(Ik)
        }
        if (Fk) {
          const {
            messageType: kk,
            data: Ik
          } = Fk;
          if ((0, Ok.c)(kk)) return void this.guard((() => {
            (0, Ok.b)(kk, Ik)
          }));
          "freeCamPerms" === kk && this.freeCam.setGame(Ik) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Fk => {
            Fk.onReceivedMessageFromServer(kk, Ik)
          }))
        }
      }
      decoded(kk, Fk) {
        try {
          return kk(Fk)
        } catch (Ik) {
          return this.onError(Ik), null
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
        this.highlightOwed = null === Fk ? !(0, ek.Te)(kk, 0, uX, uX, 0) : !(0, ek.Te)(kk, 0, Fk.pos, Fk.normal, 1)
      }
      localPlayerBound(kk) {
        var Fk, Ik;
        if (0 === this.activeConn || this.sessionLive && kk === this.boundId) return;
        const Xk = this.sessionLive;
        let Tk, ik, yk, lk;
        this.endSession(), Xk && this.restartGameCamera();
        try {
          var ak;
          this.session = null;
          const kk = this.options.sessionInfo(this.activeConn);
          if (this.session = kk, !kk) return;
          Tk = kk.gameNameWithVariation, ik = null !== (ak = (0, vk.Xb)(Tk)) && void 0 !== ak ? ak : void 0, yk = (0, Ek.x)(kk.lobbyName), lk = (0, Ek.K)(kk.lobbyName)
        } catch (xk) {
          return void this.onError(xk)
        }
        const qk = {
          localPlayerId: String(kk)
        };
        let Lk = {},
          tk = {};
        try {
          var Zk, jk;
          Lk = null !== (Zk = null === (jk = this.options.gameFactory((0, vk.dc)(Tk))) || void 0 === jk ? void 0 : jk(lk, yk, ik, qk)) && void 0 !== Zk ? Zk : {}
        } catch (xk) {
          this.Mj(xk)
        }
        try {
          var ek, wk;
          tk = {
            ...null === (ek = (wk = this.options).defaultPlugins) || void 0 === ek ? void 0 : ek.call(wk, lk, yk, ik, qk),
            ...Lk.plugins
          }
        } catch (xk) {
          this.Mj(xk)
        }
        const Hk = [Lk, ...Object.values(tk)];
        this.owners = Hk, this.tickers = Hk.filter((kk => void 0 !== kk.Dt)), this.renderers = Hk.filter((kk => void 0 !== kk.onAfterRender)), this.receivers = Hk.filter((kk => void 0 !== kk.onReceivedMessageFromServer)), this.writeAltVeto(Hk), this.writeHooks(Hk), this.writePublicLobby(lk), this.writeLocalDbId(null !== (Fk = null === (Ik = this.session) || void 0 === Ik ? void 0 : Ik.playerDbId) && void 0 !== Fk ? Fk : null), this.boundId = kk, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(Hk, (kk => {
          var Fk;
          null === (Fk = kk.onCreate) || void 0 === Fk || Fk.call(kk, this.clientApi)
        }));
        const Jk = this.generation;
        setTimeout((() => {
          Jk === this.generation && !0 === this.tables.getClientOption("creative") && ZX(this.tables)
        }), 0)
      }
      chunkSlot(kk, Fk, Ik, Xk, Tk, ik) {
        this.chunks.apply(kk, Fk, Ik, Xk, Tk, ik)
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
          this.round(this.tickers, CX), (0, TX.c)(performance.now() - kk)
        }
      }
      afterWalk(kk) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const Fk = this.options.replayEntities;
        Fk && this.guard((() => {
          this.entityInfoWatch.want(dI, Fk.wantsWatch), Fk.flush(this.entityInfoWatch.on)
        }));
        const Ik = (0, TX.l)(kk, ek.y.frameMs(this.api.apiView, 0));
        if (null !== Ik) {
          const kk = this.renderFrame;
          this.guard((() => {
            (0, rI.c)().turnDamageIndicators(kk.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Ik)
          })), this.round(this.renderers, (Fk => {
            Fk.onAfterRender(Ik, kk)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Ik)
        } catch (Tk) {
          this.Mj(Tk)
        }
        this.showZoom(), this.items.flush(this.Mj), this.writePromptWatch(), this.writeCustomButtons();
        const Xk = this.ticks;
        this.ticks = 0, (0, TX.k)(Xk, kk, Ik, this.Mj)
      }
      entityRemoved(kk) {
        this.live.despawned(kk), this.entityInfo.removed(kk)
      }
      ackEventOverflow() {
        const kk = this.api.apiView,
          Fk = ek.y.eventOverflowGen(kk, 0),
          Ik = Fk - this.overflowGen >>> 0;
        if (0 === Ik && !this.resyncOwed) return;
        this.overflowGen = Fk;
        const Xk = ek.y.eventOverflowMask(kk, 0),
          Tk = this.cmd;
        0 === Xk || null === Tk || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, ek.Ae)(Tk, 0, Xk);
        const ik = this.options.onEventOverflow;
        0 !== Ik && ik && this.guard((() => {
          ik(Xk, Ik)
        }))
      }
      gameCall(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        if (kk === ek.cc.Director) try {
          return this.scriptedCamera.call(Fk, Ik, Xk, Tk, ik, yk)
        } catch (qk) {
          return this.Mj(qk), ek.nb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return kk === ek.cc.AltVeto ? ek.k.Allow : 0;
        try {
          return this.callGames(kk, Fk, Ik, Xk, Tk, ik, yk, lk)
        } catch (qk) {
          throw (0, jk.f)(qk) && (this.fault = qk), qk
        }
      }
      takeFault() {
        const kk = this.fault;
        return this.fault = void 0, kk
      }
      callGames(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: ak
        } = this.options, qk = String(this.boundId);
        switch (kk) {
          case ek.cc.AltVeto:
          case ek.cc.AltAction: {
            const lk = 0 !== yk,
              [Lk, tk, Zk] = lk ? [Fk, Ik, Xk] : [void 0, void 0, void 0],
              jk = lk ? ak.nameOfId(Tk) : "Air",
              wk = UX(ik);
            if (kk === ek.cc.AltAction) return this.first((kk => {
              var Fk;
              return null === (Fk = kk.onPlayerAltAction) || void 0 === Fk ? void 0 : Fk.call(kk, qk, Lk, tk, Zk, jk, wk)
            })), 0;
            const Hk = this.first((kk => {
              var Fk;
              return null === (Fk = kk.onPlayerAttemptAltAction) || void 0 === Fk ? void 0 : Fk.call(kk, qk, Lk, tk, Zk, jk, wk)
            }));
            return "preventAction" === Hk ? ek.k.Prevent : "preventPlacement" === Hk ? ek.k.PreventPlacement : ek.k.Allow
          }
          case ek.cc.Click: {
            const kk = lk,
              Lk = 0 !== (kk & ek.X.Alt),
              tk = 0 !== (kk & ek.X.HasPos),
              Zk = tk ? ak.nameOfId(Tk) : "Air",
              [jk, wk, Hk] = tk ? [Fk, Ik, Xk] : [null, null, null],
              Jk = UX(ik),
              xk = 0 !== (kk & ek.X.Up),
              Pk = UX(yk);
            if (0 === (kk & ek.X.AttackOnly) && this.first((kk => {
                var Fk, Ik;
                return xk ? null === (Fk = kk.onPlayerClickUp) || void 0 === Fk ? void 0 : Fk.call(kk, qk, Lk, jk, wk, Hk, Zk, Jk) : null === (Ik = kk.onPlayerClick) || void 0 === Ik ? void 0 : Ik.call(kk, qk, Lk, jk, wk, Hk, Zk, Jk)
              })), !xk && !Lk && null !== Pk) {
              const kk = this.clientApi.getPositionView(Pk),
                Fk = kk ? [kk[0], kk[1], kk[2]] : [0, 0, 0];
              this.first((kk => {
                var Ik;
                return null === (Ik = kk.onPlayerAttackEntity) || void 0 === Ik ? void 0 : Ik.call(kk, qk, Pk, Fk)
              }))
            }
            return 0
          }
          case ek.cc.ChangeBlock: {
            const kk = ak.nameOfId(Tk),
              yk = ak.nameOfId(ik);
            return this.first((Tk => {
              var ik;
              return null === (ik = Tk.onPlayerChangeBlock) || void 0 === ik ? void 0 : ik.call(Tk, qk, Fk, Ik, Xk, kk, yk)
            })), 0
          }
          case ek.cc.DropItem: {
            const kk = ak.nameOfId(Fk);
            return this.first((Fk => {
              var Tk;
              return null === (Tk = Fk.onPlayerDropItem) || void 0 === Tk ? void 0 : Tk.call(Fk, qk, kk, Ik, Xk)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${kk}`)), 0
        }
      }
      changeBlockFail(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = Tk === ek.Sc ? null : nX.decode(this.api.eventBytes(ik, Math.min(Tk, yk)));
        this.failures.push({
          Ui: [kk, Fk, Ik],
          Ci: Xk,
          Ni: lk
        })
      }
      changeBlockFailEnd() {
        const kk = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Fk => {
          var Ik;
          null === (Ik = Fk.onChangeBlockFail) || void 0 === Ik || Ik.call(Fk, kk)
        })), this.GL("EditBoard", {
          pos: null
        }), this.GL("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(kk, Fk, Ik, Xk, Tk, ik) {
        kk === ek.tc.ChestOpened ? this.items.chestOpened(Ik, Xk, Tk) : kk !== ek.tc.Synced && kk !== ek.tc.ChestClosed && kk !== ek.tc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(kk, Fk, Ik, Xk) {
            switch (kk) {
              case ek.tc.Synced:
                yk.g.GL("syncedInvenFromServer");
                break;
              case ek.tc.ChestOpened:
              case ek.tc.ChestClosed:
                yk.g.GL("chestToggleFromServer", kk === ek.tc.ChestOpened, !0);
                break;
              case ek.tc.ChestRefreshed:
                yk.g.GL("chestRefreshedFromServer");
                break;
              case ek.tc.EnchantingTable:
                yk.g.GL("enchantingTable", {
                  iL: Xk,
                  position: Ik
                });
                break;
              case ek.tc.HotbarRequest:
                yk.g.GL("setSelectedInventorySlotI", Fk, !0);
                break;
              case ek.tc.Scrolled:
                yk.g.GL("ScrollInventorySlot", Fk);
                break;
              case ek.tc.NumberKey:
                yk.g.GL("numkeyPressed", Fk + 1);
                break;
              case ek.tc.DropRequested:
                yk.g.GL("DropInvenItem", 0 !== Fk);
                break;
              default:
                throw new jk.b(`InventoryEvent of no kind: what ${kk}`)
            }
          }(kk, Fk, [Ik, Xk, Tk], ik)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(kk, Fk, Ik, Xk) {
        this.GL("shotPlayer", {
          playerId: String(kk),
          damage: Fk,
          wasCrit: 0 !== Xk,
          distance: Ik
        })
      }
      localHurt(kk, Fk) {
        this.GL("closeShopOnDamaged", null), this.guard((() => {
          yk.g.GL("damagedByOtherPlayer", {
            Mk: null,
            direction: Number.isNaN(Fk) ? null : Fk,
            ui: kk
          })
        }))
      }
      attackHit(kk, Fk, Ik, Xk, Tk) {
        this.guard((() => {
          yk.g.GL("yourAttackHit", {
            KX: Xk,
            screenPos: this.renderFrame.projectDirectionToScreenPos([kk, Fk, Ik]),
            hitSelf: Tk
          })
        }))
      }
      physicsType(kk) {
        this.GL("PlayerPhysicsTypeUpdate", kk)
      }
      vehicleEffect(kk, Fk, Ik, Xk, Tk) {
        this.guard((() => {
          kk === Zk.Fd.UPDATE ? (0, Gk.m)(Fk, {
            icon: Ik,
            level: Xk,
            displayName: null,
            durationMs: Tk
          }) : nk.e.remove(Fk)
        }))
      }
      zoomChanged(kk) {
        this.zoom = kk, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.GL("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const kk = this.scriptedCamera.holdsView();
        !this.zoomUnshown || kk && this.zoomHeld || (this.zoomUnshown = !1, this.GL("cameraZoomSet", this.zoom)), this.zoomHeld = kk
      }
      gunHit(kk) {
        this.guard((() => {
          const {
            Mk: Fk,
            kF: Ik
          } = (0, xX.d)(PX.s, kk);
          yk.g.GL("damagedByOtherPlayer", {
            Mk: Fk,
            direction: Ik
          })
        }))
      }
      uiEvent(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        this.guard((() => {
          DI(kk, Fk, [Ik, Xk, Tk], ik, this.items, this.options.tables, (() => nX.decode(this.api.eventBytes(yk, lk))))
        }))
      }
      writeAltVeto(kk) {
        const Fk = this.cmd;
        if (!Fk) return;
        let Ik;
        try {
          Ik = function(kk, Fk) {
            const Ik = new Set;
            let Xk = !1;
            for (const Tk of kk)
              if (Tk.onPlayerAttemptAltAction) {
                if (Xk = !0, !Tk.altVetoBlocks) return {
                  mode: ek.le.All,
                  roots: []
                };
                for (const kk of Tk.altVetoBlocks) Ik.add(Fk.getMetaInfo(kk).rootId)
              } return Xk ? Ik.size > ek.Fc ? {
              mode: ek.le.All,
              roots: []
            } : {
              mode: ek.le.Filter,
              roots: [...Ik]
            } : {
              mode: ek.le.Off,
              roots: []
            }
          }(kk, this.options.tables)
        } catch (Tk) {
          this.onError(Tk), Ik = {
            mode: ek.le.All,
            roots: []
          }
        }
        if (Ik.mode === ek.le.Off && !this.vetoSet) return;
        const Xk = new Uint8Array(new Uint32Array(Ik.roots).buffer);
        (0, ek.Vf)(Fk, 0, Ik.mode, Ik.roots.length, Xk) ? this.vetoSet = Ik.mode !== ek.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
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
        const Ik = function(kk) {
          let Fk = 0;
          for (const Ik of kk) Ik.onPlayerAltAction && (Fk |= 1 << ek.cc.AltAction), (Ik.onPlayerClick || Ik.onPlayerClickUp || Ik.onPlayerAttackEntity) && (Fk |= 1 << ek.cc.Click), Ik.onPlayerChangeBlock && (Fk |= 1 << ek.cc.ChangeBlock), Ik.onPlayerDropItem && (Fk |= 1 << ek.cc.DropItem);
          return Fk
        }(kk);
        (0 !== Ik || this.hooksSet) && ((0, ek.ag)(Fk, 0, Ik) ? this.hooksSet = 0 !== Ik : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const kk = this.cmd;
        kk && !this.stopped() && this.customButtons.write(kk)
      }
      writePromptWatch() {
        const kk = this.cmd,
          Fk = this.promptWatch;
        Fk !== this.promptWatchSent && kk && !this.stopped() && (0, ek.wg)(kk, 0, bX[Fk]) && (this.promptWatchSent = Fk)
      }
      writePublicLobby(kk) {
        const Fk = this.cmd;
        Fk && kk !== this.writtenPublicLobby && ((0, ek.kg)(Fk, 0, kk ? 1 : 0) ? this.writtenPublicLobby = kk : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(kk) {
        const Fk = this.cmd;
        Fk && ((0, ek.bg)(Fk, 0, null === kk ? 0 : 1, null === kk ? pX : GX.encode(kk)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(kk) {
        const Fk = this.generation;
        for (const Xk of this.owners) {
          if (Fk !== this.generation) break;
          try {
            const Fk = kk(Xk);
            if (void 0 !== Fk) return Fk
          } catch (Ik) {
            this.Mj(Ik)
          }
        }
      }
      GL(kk, Fk) {
        this.guard((() => {
          yk.g.GL(kk, Fk)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (kk) {
          this.Mj(kk)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (kk) {
          this.Mj(kk)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const kk = this.owners;
        let Fk;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Xk) {
          Fk = Xk
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Xk) {
          Fk ??= Xk
        }
        this.round(kk, NX, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Xk) {
          Fk ??= Xk
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Xk) {
          Fk ??= Xk
        }
        const Ik = this.options.onSessionEnd;
        if (Ik) try {
          Ik()
        } catch (Xk) {
          this.onError(Xk)
        }
        void 0 !== Fk && this.Mj(Fk)
      }
      round(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = this.generation;
        for (const ik of kk) {
          if (Xk !== this.generation) break;
          try {
            Fk(ik)
          } catch (Tk) {
            Ik ? this.onError(Tk) : this.Mj(Tk)
          }
        }
      }
      guard(kk) {
        try {
          kk()
        } catch (Fk) {
          this.Mj(Fk)
        }
      }
    }

    function UX(kk) {
      return kk === ek.Wc ? null : String(kk)
    }

    function CX(kk) {
      kk.Dt(Zk.yd)
    }

    function NX(kk) {
      var Fk;
      null === (Fk = kk.onClose) || void 0 === Fk || Fk.call(kk)
    }

    function cX(kk, Fk) {
      kk.watch((() => {
        const Ik = function(kk) {
          const Fk = [],
            Ik = Math.min(iX, kk.length);
          for (let Tk = 0; Tk < Ik; Tk++) {
            var Xk;
            const Ik = null === (Xk = kk.slot(Tk)) || void 0 === Xk ? void 0 : Xk.typeObj,
              ik = Ik ? (0, XX.gunTypeOf)(Ik.id) : void 0;
            void 0 !== ik && Fk.push(KF[ik])
          }
          return Fk
        }(kk);
        Ik.length > 0 && (Fk.preload(Ik), Fk.preload([QF]))
      }))
    }
    var WX = Ik(36432),
      fX = Ik(4857),
      BX = Ik(36772),
      dX = Ik(36803);

    function YX(kk) {
      const Fk = (0, WX.countDecodesAs)(new fX.Howl({
          ...(0, BX.g)(kk),
          pool: 15,
          preload: !1
        }), "sheet"),
        Ik = Fk.load.bind(Fk);
      return Fk.load = () => (Fk._preload = !0, (0, dX.e)(kk), Ik()), Fk
    }

    function AX(kk, Fk, Ik) {
      const Xk = kk.listener;
      if (Xk.positionX) gX(Xk.positionX, Fk, Ik, 0), gX(Xk.positionY, Fk, Ik, 1), gX(Xk.positionZ, Fk, Ik, 2), gX(Xk.forwardX, Fk, Ik, 3), gX(Xk.forwardY, Fk, Ik, 4), gX(Xk.forwardZ, Fk, Ik, 5), gX(Xk.upX, Fk, Ik, 6), gX(Xk.upY, Fk, Ik, 7), gX(Xk.upZ, Fk, Ik, 8);
      else {
        let kk = !1;
        for (let Xk = 0; Xk < 9; Xk++) kk ||= Fk[Xk] !== Ik[Xk];
        kk && (Xk.setPosition(Fk[0], Fk[1], Fk[2]), Xk.setOrientation(Fk[3], Fk[4], Fk[5], Fk[6], Fk[7], Fk[8]), Ik.set(Fk))
      }
    }

    function gX(kk, Fk, Ik, Xk) {
      Fk[Xk] !== Ik[Xk] && (kk.value = Fk[Xk], Ik[Xk] = Fk[Xk])
    }
    class mX {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(kk) {
        this.pose.set(kk);
        const Fk = fX.Howler.ctx;
        return !!Fk && (Fk !== this.watchedCtx && (this.watchedCtx = Fk, this.written.fill(Number.NaN), Fk.addEventListener("statechange", (() => {
          "running" === Fk.state && AX(Fk, this.pose, this.written)
        }))), "running" === Fk.state && AX(Fk, kk, this.written), !0)
      }
    }
    var hX = Ik(36562),
      rX = Ik(39221);
    let DX = null,
      MX = null;

    function kT() {
      return null === DX && (DX = document.createElement("div"), DX.className = "WasmCameraLayer", DX.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(DX)), DX
    }

    function FT() {
      return MX ??= new rX.d(new hX.e(kT)), MX
    }

    function IT() {
      var kk;
      null === (kk = MX) || void 0 === kk || kk.clear(), XT(null)
    }

    function XT(kk) {
      Xk.d.get("scriptedCameraFacing") !== kk && Xk.d.set({
        scriptedCameraFacing: kk
      })
    }
    var TT = Ik(9278),
      iT = Ik(9237),
      yT = Ik(39243),
      lT = Ik(41050),
      aT = Ik(3229);
    const qT = Object.entries(ek.bc).reduce(((kk, Fk) => {
      let [Ik, Xk] = Fk;
      return kk[Xk] = Ik, kk
    }), []);

    function LT(kk, Fk) {
      var Ik;
      return 0 !== ((null !== (Ik = kk.itemFlags[Fk]) && void 0 !== Ik ? Ik : 0) & ek.vc.Stackable)
    }
    const tT = /^(0|[1-9][0-9]*)$/,
      ZT = {
        displayName: (kk, Fk) => (0, XX.displayNameOf)(Fk),
        description: (kk, Fk) => (0, XX.descriptionOf)(Fk),
        type: (kk, Fk) => (0, XX.itemTypeOf)(Fk),
        clipSize: (kk, Fk) => (0, XX.clipSizeOf)(Fk),
        armourReduction: (kk, Fk) => (0, XX.armourReductionOf)(Fk),
        scopeType: (kk, Fk) => (0, XX.scopeTypeOf)(Fk),
        stackable: LT,
        harvestType: (kk, Fk) => qT[kk.blockHarvestTypes[Fk]],
        harvestLevel: (kk, Fk) => {
          const Ik = kk.blockHarvestLevels[Fk];
          return Ik === ek.Ac ? void 0 : Ik
        },
        harvests: (kk, Fk) => {
          var Ik;
          const Xk = null !== (Ik = kk.itemHarvests[Fk]) && void 0 !== Ik ? Ik : 0;
          return 0 !== Xk ? qT[Xk] : void 0 === (0, XX.harvestsNullLevelOf)(Fk) ? void 0 : null
        },
        level: (kk, Fk) => {
          var Ik, Xk;
          const Tk = null !== (Ik = kk.itemLevels[Fk]) && void 0 !== Ik ? Ik : ek.Ac;
          return Tk !== ek.Ac ? Tk : null !== (Xk = (0, XX.harvestsNullLevelOf)(Fk)) && void 0 !== Xk ? Xk : void 0
        }
      };

    function jT(kk, Fk, Ik) {
      return wT(new Uint8Array(Math.floor(kk.length / Fk)), kk, Fk, Ik)
    }

    function eT(kk, Fk, Ik) {
      return wT(new Uint16Array(Math.floor(kk.length / Fk)), kk, Fk, Ik)
    }

    function wT(kk, Fk, Ik, Xk) {
      const Tk = new DataView(Fk.buffer, Fk.byteOffset, Fk.byteLength);
      for (let ik = 0; ik < kk.length; ik++) kk[ik] = Xk(Tk, ik * Ik);
      return kk
    }
    class HT {
      constructor(kk, Fk) {
        this.options = Fk, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = kk => {
          const Fk = this.idOf(kk);
          if (void 0 === Fk) throw new Error(`No item is named ${kk}, an item's root`);
          return Fk
        };
        const Ik = Fk => {
            const Ik = Fk();
            return new Uint8Array(kk.memory().buffer, kk.scratch(), Ik).slice()
          },
          Xk = (new TextDecoder).decode(Ik((() => kk.queries.itemNames()))).split("\n"),
          Tk = Ik((() => kk.queries.blockProps())),
          ik = Ik((() => kk.queries.itemProps()));
        this.props = {
          blockFlags: jT(Tk, ek.E.BYTES, ek.E.flags),
          blockHarvestTypes: jT(Tk, ek.E.BYTES, ek.E.harvestType),
          blockHarvestLevels: jT(Tk, ek.E.BYTES, ek.E.harvestLevel),
          blockAttachedTops: eT(Tk, ek.E.BYTES, ek.E.attachedTop),
          itemFlags: jT(ik, ek.zc.BYTES, ek.zc.flags),
          itemHarvests: jT(ik, ek.zc.BYTES, ek.zc.harvests),
          itemLevels: jT(ik, ek.zc.BYTES, ek.zc.level)
        }, (0, aT.o)(Object.freeze(Xk)), (0, lT.g)()
      }
      idOf(kk) {
        if ("number" === typeof kk) return void 0 === (0, aT.i)(kk) ? void 0 : kk;
        const Fk = (0, aT.e)(kk);
        return void 0 === Fk && tT.test(kk) ? void 0 === (0, aT.i)(+kk) ? void 0 : +kk : Fk
      }
      getMetaInfo(kk) {
        if (!kk || kk === TT.c) return TT.g;
        const Fk = this.idOf(kk);
        if (void 0 === Fk) throw new Error(`Item ${kk} not found in registry`);
        return this.metaOf(Fk)
      }
      blockRootId(kk) {
        return 0 !== kk && void 0 !== (0, aT.i)(kk) ? this.metaOf(kk).rootId : kk
      }
      metaOf(kk) {
        return this.metas[kk] ??= (0, iT.j)((0, aT.i)(kk), kk, this.rootIdOf, (0, XX.rootMetaDescOf)(kk))
      }
      getItemId(kk) {
        if (!kk || kk === TT.c) return 0;
        const Fk = this.idOf(kk);
        if (void 0 === Fk) throw new Error(`Invalid block name. You sent ${kk}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Fk
      }
      getItemName(kk) {
        if (!kk || kk === TT.c) return TT.c;
        const Fk = this.idOf(kk);
        if (void 0 === Fk) throw new Error(`Item ${kk} not found in registry`);
        return (0, aT.i)(Fk)
      }
      blockNameToBlockId(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (kk === TT.c) return 0;
        let Ik = this.idOf(kk);
        if (void 0 === Ik || !this.isBlockId(Ik)) {
          const Fk = kk.indexOf("|"),
            Xk = Fk > 0 ? (0, aT.e)(kk.slice(0, Fk)) : void 0;
          Ik = void 0 !== Xk && this.isBlockId(Xk) && (0, XX.rootMetaDescOf)(Xk) === kk ? Xk : void 0
        }
        if (void 0 !== Ik) return Ik;
        if (!Fk) throw new Error(`Invalid block name. You sent ${kk}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(kk) {
        return kk > 0 && kk < this.props.blockFlags.length
      }
      nameOfId(kk) {
        return 0 !== kk && (0, aT.i)(kk) || TT.c
      }
      itemType(kk) {
        const Fk = kk ? this.idOf(kk) : void 0;
        if (!Fk) return null;
        let Ik = this.types.get(Fk);
        return void 0 === Ik && (Ik = Object.freeze({
          id: Fk,
          name: (0, aT.i)(Fk),
          meta: this.getMetaInfo(Fk),
          stackable: LT(this.props, Fk),
          type: (0, XX.itemTypeNameOf)(Fk),
          clipSize: (0, XX.clipSizeOf)(Fk),
          scopeType: (0, XX.scopeTypeOf)(Fk),
          showsAimingUi: (0, XX.showsAimingUi)(Fk)
        }), this.types.set(Fk, Ik)), Ik
      }
      getItemStat(kk, Fk) {
        if (yT.e.has(Fk)) {
          const Ik = "minChargeStateToUse" === Fk ? this.getMetaInfo(kk).rootName : this.getItemName(kk),
            Xk = this.options.get((0, yT.g)(Ik, Fk));
          if (null !== Xk && void 0 !== Xk) return Xk
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
        const Fk = ZT[kk];
        return void 0 === Fk && function(kk, Fk) {
          throw new Error(`ClientApi.${kk} is not available yet in the wasm client (${Fk})`)
        }(`getItemStat("${kk}")`, `a table of the stat: the wasm client answers ${Object.keys(ZT).join(", ")}`), Fk
      }
      defaultStat(kk, Fk, Ik) {
        const Xk = this.idOf(kk),
          Tk = void 0 === Xk ? void 0 : Ik(this.props, Xk);
        return null !== Tk && void 0 !== Tk || "displayName" !== Fk ? Tk : this.getItemName(kk)
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
        return 0 !== ((null !== (Fk = this.props.blockFlags[kk]) && void 0 !== Fk ? Fk : 0) & ek.D.Solid)
      }
      isStackableId(kk) {
        return LT(this.props, kk)
      }
      isFluidBlockId(kk) {
        var Fk;
        return 0 !== ((null !== (Fk = this.props.blockFlags[kk]) && void 0 !== Fk ? Fk : 0) & ek.D.Fluid)
      }
      canPlaceOverBlockId(kk) {
        var Fk;
        return 0 !== ((null !== (Fk = this.props.blockFlags[kk]) && void 0 !== Fk ? Fk : 0) & ek.D.PlaceOver)
      }
      attachedTopOf(kk) {
        var Fk;
        return null !== (Fk = this.props.blockAttachedTops[kk]) && void 0 !== Fk ? Fk : 0
      }
      isDroplessBlockId(kk) {
        return (0, XX.dropsNothing)(kk)
      }
    }

    function JT(kk, Fk) {
      const Ik = new Map;
      return (Xk, Tk) => {
        const ik = Fk.idOf(Xk),
          yk = void 0 === ik ? null : (Xk => {
            let Tk = Ik.get(Xk);
            if (void 0 === Tk) {
              const ik = kk.queries.salvageRecipe(Xk),
                yk = new DataView(kk.memory().buffer, kk.scratch(), ik),
                lk = [];
              for (let kk = 0; kk + ek.Vd.BYTES <= ik; kk += ek.Vd.BYTES) lk.push(Object.freeze({
                item: Fk.nameOfId(ek.Vd.item(yk, kk)),
                amt: ek.Vd.amount(yk, kk)
              }));
              Tk = 0 === lk.length ? null : Object.freeze(lk), Ik.set(Xk, Tk)
            }
            return Tk
          })(ik);
        if (null === yk || void 0 === Tk) return yk;
        const lk = Tk <= 0 ? 1 : Tk;
        return yk.map((kk => {
          let {
            item: Fk,
            amt: Ik
          } = kk;
          return {
            item: Fk,
            amt: Ik * lk
          }
        }))
      }
    }
    var xT = Ik(40776),
      PT = Ik(36997),
      KT = Ik(36979),
      QT = Ik(36985),
      sT = Ik(36498),
      VT = Ik(40685),
      zT = Ik(42586);
    const ST = -1,
      oT = new Uint8Array(0),
      vT = new TextEncoder;

    function ET(kk) {
      if (null === kk) return null;
      const Fk = vT.encode(kk);
      return Fk.byteLength < Zk.Hc ? Fk : Fk.subarray(0, Zk.Hc - 1)
    }
    class OT {
      constructor(kk) {
        this.deps = kk, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ST, this.keyframesSettled = !1, this.reloadFrom = ST
      }
      reloadKeyframes() {
        var kk, Fk;
        this.keyframesVersion = ST, this.reloadFrom = null !== (kk = null === (Fk = this.view()) || void 0 === Fk ? void 0 : Fk.version) && void 0 !== kk ? kk : ST
      }
      setPlayback(kk) {
        const Fk = 1 === this.deps.core.oTk(kk);
        return Fk && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = ST, this.reloadFrom = ST), Fk
      }
      async open(kk, Fk) {
        const Ik = await this.deps.replay.open(kk, Fk);
        return "opening" === Ik && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Ik
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
        this.deps.replay.setCameraMode(zT.d.indexOf(kk))
      }
      view() {
        var kk;
        const Fk = ek.y.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Fk) return this.lastView = null, null;
        const Ik = new DataView(this.deps.buffer(), Fk, ek.Nd.BYTES),
          Xk = ek.Nd.version(Ik, 0),
          Tk = this.lastView;
        if (null !== Tk && Tk.version === Xk) return Tk;
        const ik = ek.Nd.markIn(Ik, 0),
          yk = {
            version: Xk,
            state: ek.Nd.state(Ik, 0),
            cameraMode: null !== (kk = zT.d[ek.Nd.cameraMode(Ik, 0)]) && void 0 !== kk ? kk : "recording",
            Dt: ek.Nd.Dt(Ik, 0),
            totalTicks: ek.Nd.totalTicks(Ik, 0),
            speed: ek.Nd.speed(Ik, 0),
            mark: ik === ek.Kd ? null : {
              inTick: ik,
              outTick: ek.Nd.markOut(Ik, 0)
            },
            editVersion: ek.Nd.editVersion(Ik, 0)
          };
        return this.lastView = yk, yk
      }
      keyframes() {
        const kk = this.view();
        if (null === kk) return [];
        kk.version !== this.reloadFrom && (this.reloadFrom = ST);
        const Fk = this.reloadFrom === ST && kk.state !== Zk.kd.Cropping && kk.state !== Zk.kd.None,
          Ik = Fk ? kk.editVersion : kk.version;
        if (Ik === this.keyframesVersion && Fk === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Xk
        } = this.deps, Tk = Xk.vTk(), ik = Xk.GH(), yk = [];
        if (0 !== ik && Tk > 0) {
          const kk = new DataView(this.deps.buffer(), ik, Tk * Zk.rc);
          for (let Fk = 0; Fk < Tk; Fk++) {
            const Ik = Fk * Zk.rc,
              Xk = Fk => kk.getFloat64(Ik + Fk, !0);
            yk.push({
              Dt: kk.getUint32(Ik + Zk.Gc, !0),
              position: [Xk(Zk.Cc), Xk(Zk.Cc + 8), Xk(Zk.Cc + 16)],
              direction: [Xk(Zk.uc), Xk(Zk.uc + 8), Xk(Zk.uc + 16)],
              easing: [Xk(Zk.yc), Xk(Zk.yc + 8), Xk(Zk.yc + 16), Xk(Zk.yc + 24)]
            })
          }
        }
        return this.keyframesVersion = Ik, this.keyframesSettled = Fk, this.lastKeyframes = yk, yk
      }
      addKeyframe() {
        const kk = this.deps.apiView(),
          Fk = [ek.y.eye(kk, 0, 0), ek.y.eye(kk, 0, 1), ek.y.eye(kk, 0, 2)];
        return this.deps.replay.addKeyframe(Fk, function(kk, Fk) {
          const Ik = Math.cos(Fk);
          return [Ik * Math.sin(kk), -Math.sin(Fk), Ik * Math.cos(kk)]
        }(ek.y.heading(kk, 0), ek.y.pitch(kk, 0)))
      }
      setKeyframe(kk) {
        return this.deps.replay.setKeyframe(kk.Dt, Float64Array.from([...kk.position, ...kk.direction, ...kk.easing]))
      }
      moveKeyframe(kk, Fk) {
        return this.deps.replay.moveKeyframe(kk, Fk)
      }
      deleteKeyframes(kk, Fk) {
        return this.deps.replay.deleteKeyframes(kk, Fk)
      }
      setMark(kk) {
        var Fk, Ik;
        return this.deps.replay.setMark(null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.inTick) && void 0 !== Fk ? Fk : -1, null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.outTick) && void 0 !== Ik ? Ik : -1)
      }
      crop(kk, Fk) {
        const Ik = this.deps.replay.crop(kk, Fk);
        return Ik && this.reloadKeyframes(), Ik
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
        const Ik = this.deps.cmd();
        return null !== Ik && (0, ek.Kf)(Ik, 0, kk, null === Fk ? oT : vT.encode(Fk))
      }
      recordFlyingText(kk, Fk, Ik, Xk) {
        const Tk = this.deps.cmd(),
          ik = Math.max(0, Math.min(4294967295, Math.round(Xk)));
        return null !== Tk && (0, ek.Ff)(Tk, 0, Fk, Ik, ik, vT.encode(kk))
      }
      recordPlayerKilled(kk, Fk, Ik, Xk) {
        const Tk = this.deps.cmd();
        return null !== Tk && (0, ek.Lf)(Tk, 0, kk, Fk, Math.max(0, Ik), vT.encode(Xk))
      }
      recordKillfeed(kk, Fk, Ik) {
        var Xk, Tk;
        const ik = this.deps.cmd(),
          yk = function(kk) {
            const Fk = kk.reduce(((kk, Fk) => {
                var Ik;
                return kk + gI.Cb + (null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.byteLength) && void 0 !== Ik ? Ik : 0)
              }), 0),
              Ik = new Uint8Array(Fk),
              Xk = new DataView(Ik.buffer);
            let Tk = 0;
            for (const yk of kk) {
              var ik;
              Xk.setUint16(Tk, null !== (ik = null === yk || void 0 === yk ? void 0 : yk.byteLength) && void 0 !== ik ? ik : Zk.Hc, !0), Tk += gI.Cb, null !== yk && (Ik.set(yk, Tk), Tk += yk.byteLength)
            }
            return Ik
          }([ET(kk.name), ET(kk.colour), ET(Fk.name), ET(Fk.colour), ET(Ik)]);
        return null !== ik && (0, ek.Hf)(ik, 0, null !== (Xk = kk.id) && void 0 !== Xk ? Xk : ek.Yc, null !== (Tk = Fk.id) && void 0 !== Tk ? Tk : ek.Yc, yk)
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
        this.deps.core.ETk()
      }
      filePartDone(kk, Fk) {
        this.deps.recorder.filePartDone(kk, Fk)
      }
      fileDone(kk) {
        this.deps.recorder.fileDone(kk)
      }
    }
    const nT = -2147483648;
    class GT {
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
        var kk, Fk, Ik;
        return null === (kk = null === (Fk = (Ik = this.deps).live) || void 0 === Fk ? void 0 : Fk.call(Ik)) || void 0 === kk || kk
      }
      activated(kk) {
        var Fk, Ik;
        this.live && (this.viewerShown(!0 === (null === (Fk = (Ik = this.deps).viewerOpen) || void 0 === Fk ? void 0 : Fk.call(Ik))), this.deps.client.recorderSession(kk, (0, zT.h)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var kk, Fk;
        this.live && (this.state.recording || !0 !== (null === (kk = (Fk = this.deps).viewerOpen) || void 0 === kk ? void 0 : kk.call(Fk))) ? this.deps.client.recorderControl(Zk.Uc.ToggleRecording) : this.deps.notify(QT.b.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Zk.Uc.SaveClip) : this.deps.notify(QT.b.clippingNotOn)
      }
      viewerShown(kk) {
        this.live && this.deps.client.recorderControl(kk ? Zk.Uc.ViewerOpened : Zk.Uc.ViewerClosed)
      }
      setPrefs(kk, Fk) {
        this.live && this.deps.client.recorderPrefs(kk, Fk)
      }
      setOption(kk, Fk) {
        this.live && this.deps.client.recorderOption(kk, Fk)
      }
      recordFlyingText(kk, Fk, Ik, Xk) {
        this.live && this.deps.client.recordFlyingText(kk, Fk, Ik, Xk)
      }
      recordPlayerKilled(kk, Fk, Ik, Xk) {
        this.live && this.deps.client.recordPlayerKilled(kk, Fk, Ik, Xk)
      }
      recordKillfeed(kk, Fk, Ik) {
        this.live && this.deps.client.recordKillfeed(kk, Fk, Ik)
      }
      Dt() {
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
        var Fk, Ik;
        const {
          notify: Xk
        } = this.deps, Tk = QT.b;
        switch (kk.what) {
          case Zk.Sc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Xk(Tk.recordingStarted);
            break;
          case Zk.Sc.RecordingStopped:
            this.stopRecording(), Xk(Tk.recordingStopped), this.saveState(Zk.cd.Recording, "saving");
            break;
          case Zk.Sc.RecordingDiscarded:
            this.stopRecording(), Xk(Tk.recordingDiscarded);
            break;
          case Zk.Sc.RecordingTurnedOff:
            this.stopRecording(), Xk(Tk.recordingTurnedOff);
            break;
          case Zk.Sc.LimitReached:
            Xk(Tk.limitReached);
            break;
          case Zk.Sc.ClipSaved:
            this.saveState(Zk.cd.Clip, "saving");
            break;
          case Zk.Sc.ClipEmpty:
            Xk(Tk.clipEmpty);
            break;
          case Zk.Sc.ClippingNotOn:
            Xk(Tk.clippingNotOn);
            break;
          case Zk.Sc.Disallowed:
            Xk(Tk.disallowed);
            break;
          case Zk.Sc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Zk.Sc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Zk.Sc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Zk.Sc.SaveBusy:
            null === (Fk = (Ik = this.deps).onSaveState) || void 0 === Fk || Fk.call(Ik, kk.kind, "busy"), Xk(Tk.saveBusy);
            break;
          case Zk.Sc.CloseViewerFirst:
            Xk(Tk.closeViewerFirst)
        }
      }
      fileReady(kk, Fk) {
        this.deps.download(Fk), this.saveState(kk, "done"), this.deps.notify(kk === Zk.cd.Clip ? QT.b.clipSaved : QT.b.recordingSaved)
      }
      failed(kk) {
        this.saveState(kk, "failed"), this.deps.notify(kk === Zk.cd.Clip ? QT.b.clipFailed : QT.b.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(kk, Fk) {
        var Ik, Xk;
        null === (Ik = (Xk = this.deps).onSaveState) || void 0 === Ik || Ik.call(Xk, kk, Fk)
      }
      set(kk) {
        kk !== this.state && (this.state = kk, this.deps.onState(kk))
      }
    }
    const pT = new TextDecoder;

    function uT(kk, Fk, Ik, Xk) {
      const Tk = [];
      for (let ik = 0; ik < Xk; ik++) {
        if (Fk + gI.Cb > Ik) return null;
        const Xk = kk.getUint16(Fk, !0);
        if (Fk += gI.Cb, Xk !== Zk.Hc) {
          if (Fk + Xk > Ik) return null;
          Tk.push(pT.decode(new Uint8Array(kk.buffer, kk.byteOffset + Fk, Xk))), Fk += Xk
        } else Tk.push(null)
      }
      return Fk === Ik ? Tk : null
    }

    function bT(kk, Fk) {
      let Ik = new DataView(new ArrayBuffer(0)),
        Xk = !0;
      const Tk = {
        replayFailed: (Fk, Ik, Xk) => {
          kk.replayFailed({
            reason: Fk,
            code: Ik,
            version: Xk
          })
        },
        replayOption: (Fk, Tk, ik, yk) => {
          const lk = function(kk, Fk, Ik, Xk) {
            switch (Fk) {
              case Zk.fd.Cleared:
                return 0 === Xk ? null : void 0;
              case Zk.fd.Text:
                return pT.decode(new Uint8Array(kk.buffer, kk.byteOffset + Ik, Xk));
              case Zk.fd.Int:
                return Xk === Int32Array.BYTES_PER_ELEMENT ? kk.getInt32(Ik, !0) : void 0;
              case Zk.fd.Double:
                return Xk === Float64Array.BYTES_PER_ELEMENT ? kk.getFloat64(Ik, !0) : void 0;
              default:
                return
            }
          }(Ik, Tk, ik, yk);
          void 0 !== lk ? kk.replayOption({
            key: Fk,
            value: lk
          }) : Xk = !1
        },
        replayUiEvent: (Fk, Tk, ik, yk, lk, ak) => {
          const qk = function(kk, Fk, Ik, Xk, Tk, ik, yk) {
            const lk = ik + yk;
            switch (Fk) {
              case Zk.hd.FlyingText: {
                const yk = uT(kk, ik, lk, 1);
                return null !== yk && null !== yk[0] ? {
                  what: Fk,
                  Si: Ik,
                  zi: Xk,
                  angle: Tk,
                  contentJson: yk[0]
                } : null
              }
              case Zk.hd.PlayerKilled: {
                const Xk = uT(kk, ik, lk, 3);
                return Xk ? {
                  what: Fk,
                  killstreak: Ik,
                  dead: Xk[0],
                  killer: Xk[1],
                  withItem: Xk[2]
                } : null
              }
              case Zk.hd.Killfeed: {
                const Ik = uT(kk, ik, lk, 7);
                return Ik ? {
                  what: Fk,
                  killerId: Ik[0],
                  killerName: Ik[1],
                  killerColour: Ik[2],
                  victimId: Ik[3],
                  victimName: Ik[4],
                  victimColour: Ik[5],
                  withItem: Ik[6]
                } : null
              }
              default:
                return null
            }
          }(Ik, Fk, Tk, ik, yk, lk, ak);
          null !== qk ? kk.replayUiEvent(qk) : Xk = !1
        },
        replayFilePart: (Ik, Tk, ik, yk) => {
          const lk = Fk();
          ik + yk > lk.byteLength ? Xk = !1 : kk.filePart(Ik, Tk, new Uint8Array(lk, ik, yk).slice())
        },
        replayFileReady: (Fk, Ik, Xk, Tk) => {
          kk.fileReady({
            save: Fk,
            kind: Ik,
            parts: Xk,
            bytes: Tk
          })
        },
        recorderEvent: (Fk, Ik, Xk) => {
          kk.recorderEvent({
            what: Fk,
            kind: Ik,
            save: Xk
          })
        },
        replayOpened: (Fk, Xk, Tk) => {
          kk.replayOpened(pT.decode(new Uint8Array(Ik.buffer, Ik.byteOffset + Xk, Tk)))
        }
      };
      return (kk, Fk, ik, yk) => !(kk < Zk.X.ReplayFailed || kk > Zk.X.RecorderEvent) && (Ik = Fk, Xk = !0, (0, ek.pe)(kk, Fk, ik, yk, Tk) && Xk)
    }

    function RT(kk) {
      let Fk = null;
      const Ik = bT(kk, (() => {
        if (null === Fk) throw new Error("a recorder event read outside recorderEventReader's call");
        return Fk.buffer
      }));
      return (kk, Xk) => {
        Fk = Xk;
        try {
          ! function(kk, Fk) {
            const Ik = kk.slice(),
              Xk = new DataView(Ik.buffer);
            for (let Tk = 0; Tk < Ik.byteLength;) {
              if (Tk + Zk.W > Ik.byteLength) throw new Error(`the recorder module's events end mid-head at ${Tk}`);
              const kk = Xk.getUint32(Tk, !0),
                ik = 65535 & kk,
                yk = kk >>> 16,
                lk = Tk + Zk.W;
              if (lk + yk > Ik.byteLength || !Fk(ik, Xk, lk, yk)) throw new Error(`the recorder module wrote a malformed event ${ik} (${yk} bytes) at ${Tk}`);
              Tk = lk + (0, Zk.pe)(yk)
            }
          }(kk, Ik)
        } finally {
          Fk = null
        }
      }
    }
    class UT {
      constructor(kk, Fk) {
        this.acks = kk, this.handlers = Fk, this.parts = new Map
      }
      onPart(kk, Fk, Ik) {
        let Xk = this.parts.get(kk);
        Xk || (Xk = [], this.parts.set(kk, Xk)), Xk[Fk] = Ik, this.acks.filePartDone(kk, Fk)
      }
      onReady(kk) {
        var Fk;
        const Ik = null !== (Fk = this.parts.get(kk.save)) && void 0 !== Fk ? Fk : [];
        this.parts.delete(kk.save);
        const Xk = function(kk, Fk, Ik) {
          if (kk.length !== Fk) return null;
          let Xk = 0;
          for (let yk = 0; yk < Fk; yk++) {
            if (void 0 === kk[yk]) return null;
            Xk += kk[yk].byteLength
          }
          if (Xk !== Ik) return null;
          if (1 === Fk) return kk[0];
          const Tk = new Uint8Array(Ik);
          let ik = 0;
          for (const yk of kk) Tk.set(yk, ik), ik += yk.byteLength;
          return Tk
        }(Ik, kk.parts, kk.bytes);
        this.acks.fileDone(kk.save), null === Xk ? this.handlers.fileIncomplete(kk.save, kk.kind) : this.handlers.fileReady(kk.save, kk.kind, Xk)
      }
      onDiscarded(kk) {
        this.parts.delete(kk)
      }
    }

    function CT() {
      return Ik.e(60).then((() => Ik(60609)))
    }
    class NT {
      constructor(kk) {
        this.deps = kk, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Fk
        } = kk;
        this.recorder = new GT({
          client: Fk,
          live: () => {
            var kk;
            return !0 !== (null === (kk = this.viewer) || void 0 === kk ? void 0 : kk.inPlayback)
          },
          viewerOpen: kk.viewerOpen,
          notify: kk.notify,
          download: Fk => {
            var Ik;
            null === (Ik = kk.download) || void 0 === Ik || Ik.call(kk, Fk)
          },
          onState: kk.onRecorderState,
          onSaveState: kk.onSaveState
        }), this.parts = new UT(Fk, {
          fileReady: (kk, Fk, Ik) => {
            var Xk;
            Fk === Zk.cd.Edited ? null === (Xk = this.viewer) || void 0 === Xk || Xk.saveDone(Ik) : this.recorder.fileReady(Fk, Ik)
          },
          fileIncomplete: (kk, Fk) => {
            this.saveFailed(Fk)
          }
        });
        const Ik = {
          replayFailed: kk => {
            var Fk;
            null === (Fk = this.viewer) || void 0 === Fk || Fk.onFailed(kk)
          },
          replayOption: Fk => {
            var Ik;
            null === (Ik = kk.onReplayOption) || void 0 === Ik || Ik.call(kk, Fk)
          },
          replayUiEvent: Fk => {
            var Ik;
            null === (Ik = kk.onReplayUiEvent) || void 0 === Ik || Ik.call(kk, Fk)
          },
          filePart: (kk, Fk, Ik) => {
            this.parts.onPart(kk, Fk, Ik)
          },
          fileReady: kk => {
            this.parts.onReady(kk)
          },
          replayOpened: Fk => {
            var Ik;
            null === (Ik = kk.onReplayOpened) || void 0 === Ik || Ik.call(kk, Fk)
          },
          recorderEvent: kk => {
            var Fk;
            switch (kk.what) {
              case Zk.Sc.FileDiscarded:
                this.parts.onDiscarded(kk.save);
                break;
              case Zk.Sc.SaveFailed:
                this.saveFailed(kk.kind);
                break;
              case Zk.Sc.SaveBusy:
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
            onReplayEvent: bT(kk, Fk)
          }
        }(Ik, kk.buffer), this.recorderEvents = RT(Ik)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var kk;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (kk = this.deps.loadViewer) && void 0 !== kk ? kk : CT)().catch((kk => {
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
          kk > 0 && this.recorder.Dt()
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
        kk === Zk.cd.Edited ? null === (Fk = this.viewer) || void 0 === Fk || Fk.saveFailed(!1) : this.recorder.failed(kk)
      }
    }
    var cT = Ik(40614),
      WT = Ik(40636),
      fT = Ik(4801),
      BT = Ik(40930);
    class dT {
      constructor(kk) {
        this.deps = kk, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(kk, Fk) {
        if (!this.deps.live() || 0 === kk && 0 === Fk) return;
        const Ik = (0, Ck.l)(0, performance.now()),
          Xk = this.deps.dragScale();
        (0, BT.h)((() => {
          (0, Ck.q)(Zk.rb.MouseDown, 0, 0, 0, Ik), (0, Ck.q)(Zk.rb.MouseMove, 0, kk * Xk, Fk * Xk, 0), (0, Ck.q)(Zk.rb.MouseUp, 0, 0, 0, Ik)
        }))
      }
      move(kk) {
        var Fk, Ik;
        this.analogue[0] = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.x) && void 0 !== Fk ? Fk : 0, this.analogue[1] = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.y) && void 0 !== Ik ? Ik : 0, this.send()
      }
      holdVertical(kk, Fk) {
        const Ik = "freeCamUp" === kk ? ek.Ub.Up : ek.Ub.Down;
        this.keys = Fk ? this.keys | Ik : this.keys & ~Ik, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const kk = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== kk && !(0, ek.He)(kk, 0, this.analogue, this.keys)
      }
    }
    var YT = Ik(3511),
      AT = Ik(737),
      gT = Ik(272),
      mT = Ik(95),
      hT = Ik(34091);

    function rT() {
      const kk = Xk.d.get("clientEscMenuOptions"),
        Fk = (0, AT.l)(kk);
      return {
        mouse: (0, mT.isMobile)() ? Fk : kk.mouseSensitivity,
        touch: Fk,
        fovPercent: kk.cameraFOV
      }
    }

    function DT() {
      const kk = Xk.d.get("clientEscMenuOptions"),
        Fk = Xk.d.get("isTouchScreen") ? (0, AT.l)(kk) : kk.mouseSensitivity,
        Ik = rT().mouse;
      return Ik > 0 ? Fk / Ik : 1
    }

    function MT(kk) {
      const Fk = () => {
        kk.setSoundPrefs(Xk.d.get("soundVolume"), Xk.d.get("soundOnFromAd"))
      };
      let Ik = null;
      const Tk = () => {
        const {
          showFog: Fk,
          enableLighting: Tk,
          fogChunkDistance: ik,
          chunkFadeIn: yk
        } = Xk.d.get("clientEscMenuOptions"), lk = {
          showFog: Fk,
          lighting: Tk,
          fogChunks: ik,
          chunkFade: yk,
          cellLight: (0, YT.j)("cellLight") ? (0, YT.j)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        Ik && (0, Zk.be)(Ik) === (0, Zk.be)(lk) && Ik.fogChunks === ik || (Ik = lk, kk.setEnvPrefs(Ik))
      };
      let ik = null;
      const lk = () => {
        const Fk = function() {
          const kk = Xk.d.get("clientEscMenuOptions");
          return {
            nametagsHidden: Xk.d.get("areNametagsHidden"),
            crouchToggle: kk.crouchIsToggle,
            bhopDisabled: kk.disableBunnyHopping,
            disableBobbing: kk.disableBobbing,
            ezTowering: kk.ezTowering && (0, gT.d)(),
            ezBridging: kk.ezBridging,
            showChunkBorders: kk.showChunkBorders,
            nametagCutDistance: (0, hT.f)()
          }
        }();
        (0, vk.ce)(ik, Fk) || (ik = Fk, kk.setUiPrefs(Fk))
      };
      let ak = null;
      const qk = () => {
        const Fk = rT();
        (0, vk.ce)(ak, Fk) || (ak = Fk, kk.setLookPrefs(Fk))
      };
      Fk(), Tk(), lk(), qk();
      const Lk = [(0, yk.i)("appManagerUpdated|soundVolume", Fk), (0, yk.i)("appManagerUpdated|soundOnFromAd", Fk), (0, yk.i)("appManagerUpdated|clientEscMenuOptions", (() => {
        Tk(), lk(), qk()
      })), (0, yk.i)("appManagerUpdated|enabledDebugFeatures", Tk), (0, yk.i)("appManagerUpdated|areNametagsHidden", lk), (0, yk.i)("appManagerUpdated|showDistantNametags", lk)];
      return () => {
        for (const kk of Lk) kk()
      }
    }
    var ki = Ik(40905),
      Fi = Ik(40914);
    var Ii = (0, Fi.c)("lend"),
      Xi = (0, Fi.c)("starting"),
      Ti = (0, Fi.c)("generation"),
      ii = (0, Fi.c)("end");
    class yi {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, ii, {
          value: li
        }), Object.defineProperty(this, Ii, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xi, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ti, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, ki.c)(this, Ii)[Ii] || (0, ki.c)(this, Xi)[Xi]
      }
      async start(kk) {
        if (this.active) return "busy";
        const Fk = (0, ki.c)(this, Ti)[Ti];
        (0, ki.c)(this, Xi)[Xi] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, ki.c)(this, Xi)[Xi] = !1
        }
        if (Fk !== (0, ki.c)(this, Ti)[Ti]) return "refused";
        const Ik = this.deps.beginSave();
        if (!Ik) return "refused";
        const Xk = Number(BigInt.asUintN(32, kk)),
          Tk = Number(BigInt.asUintN(32, kk >> 32n));
        let ik = "refused";
        return this.deps.recorderCall(((kk, Fk) => {
          const yk = Ik.editState,
            lk = kk.stage(yk.length);
          0 !== lk ? (new Uint8Array(Fk.buffer, lk, yk.length).set(yk), kk.OTk(Ik.headLen, Xk, Tk) && (ik = "sealing")) : ik = "tooLarge"
        }), !0), "sealing" !== ik ? (Ik.end(), ik) : ((0, ki.c)(this, Ii)[Ii] = Ik, "sealing")
      }
      beforeRecorderStep() {
        const kk = (0, ki.c)(this, Ii)[Ii];
        if (!kk) return null;
        let Fk = -1,
          Ik = 0;
        if (!this.deps.recorderCall((kk => {
            Fk = kk.nTk(), Fk > 0 && (Ik = kk.GTk())
          }))) return (0, ki.c)(this, ii)[ii](kk, "stopped");
        if (Fk < 0) return (0, ki.c)(this, ii)[ii](kk, "read");
        if (0 === Fk) return null;
        const Xk = kk.head(Ik, Fk);
        let Tk = !1;
        if (Xk && this.deps.recorderCall(((kk, Ik) => {
            const ik = kk.stage(Fk);
            0 !== ik && (new Uint8Array(Ik.buffer, ik, Fk).set(Xk), Tk = !0)
          }), !0), Tk) return null;
        const ik = kk.givenUp();
        this.deps.recorderCall((kk => {
          kk.pTk()
        }));
        const yk = (0, ki.c)(this, ii)[ii](kk, ik ? "givenUp" : "stopped");
        return ik && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), yk
      }
      stop() {
        (0, ki.c)(this, Ti)[Ti]++;
        const kk = (0, ki.c)(this, Ii)[Ii];
        kk && (this.deps.recorderCall((kk => {
          kk.pTk()
        })), (0, ki.c)(this, ii)[ii](kk, "stopped"))
      }
    }

    function li(kk, Fk) {
      return (0, ki.c)(this, Ii)[Ii] = null, kk.end(), Fk
    }

    function ai(kk, Fk) {
      const Ik = new Uint8Array(4),
        Xk = new DataView(Ik.buffer);
      return Xk.setUint8(0, kk ? 1 : 0), Xk.setUint16(2, Math.max(0, Math.min(65535, Math.round(Fk))), !0), Ik
    }

    function qi(kk, Fk) {
      return kk > function(kk) {
        return 16777216 + 314572.8 * Math.max(0, kk)
      }(Fk) + 33554432
    }
    let Li = null;

    function ti(kk) {
      return Li ??= async function(kk) {
        const Fk = kk.loadInFlight();
        Fk && await Fk.catch((() => {}));
        if (kk.trapped()) return "trapped";
        if (kk.busy() || !qi(kk.memoryBytes(), kk.clipSeconds())) return "Gj";
        kk.unload();
        let Ik = !1;
        try {
          Ik = await kk.load()
        } catch {
          Ik = !1
        }
        if (!Ik) return kk.trapped() ? "trapped" : kk.ee() ? "ee" : "failed";
        return "recycled"
      }(kk).finally((() => {
        Li = null
      })), Li
    }
    const Zi = "Replay recording couldn't load, so try again.",
      ji = new Set([Zk.Uc.ToggleRecording, Zk.Uc.SaveClip]);
    var ei = (0, Fi.c)("bindings"),
      wi = (0, Fi.c)("module"),
      Hi = (0, Fi.c)("memory"),
      Ji = (0, Fi.c)("trapped"),
      xi = (0, Fi.c)("ee"),
      Pi = (0, Fi.c)("recycleDue"),
      Ki = (0, Fi.c)("loading"),
      Qi = (0, Fi.c)("generation"),
      si = (0, Fi.c)("viewDrawn"),
      Vi = (0, Fi.c)("clip"),
      zi = (0, Fi.c)("session"),
      Si = (0, Fi.c)("control"),
      oi = (0, Fi.c)("deferred"),
      vi = (0, Fi.c)("coreU8"),
      Ei = (0, Fi.c)("coreU32"),
      Oi = (0, Fi.c)("moduleU8"),
      ni = (0, Fi.c)("edited"),
      Gi = (0, Fi.c)("sendSession"),
      ui = (0, Fi.c)("checkNotInEvents"),
      bi = (0, Fi.c)("clipping"),
      Ri = (0, Fi.c)("busy"),
      Ui = (0, Fi.c)("use"),
      Ci = (0, Fi.c)("ensureLoaded"),
      Ni = (0, Fi.c)("loadOnce"),
      ci = (0, Fi.c)("recycleAfterStep"),
      Wi = (0, Fi.c)("settleRecycle"),
      fi = (0, Fi.c)("load"),
      Bi = (0, Fi.c)("attach"),
      di = (0, Fi.c)("resendHeld"),
      Yi = (0, Fi.c)("recycle"),
      Ai = (0, Fi.c)("send"),
      gi = (0, Fi.c)("unload"),
      mi = (0, Fi.c)("dropModule"),
      ri = (0, Fi.c)("coreBytes"),
      Di = (0, Fi.c)("coreWords"),
      Mi = (0, Fi.c)("moduleBytes"),
      ky = (0, Fi.c)("loadFailed"),
      Fy = (0, Fi.c)("call"),
      Iy = (0, Fi.c)("guard"),
      Xy = (0, Fi.c)("trapOn");
    class Ty {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, Xy, {
          value: vy
        }), Object.defineProperty(this, Iy, {
          value: oy
        }), Object.defineProperty(this, Fy, {
          value: Sy
        }), Object.defineProperty(this, ky, {
          value: zy
        }), Object.defineProperty(this, Mi, {
          value: Vy
        }), Object.defineProperty(this, Di, {
          value: sy
        }), Object.defineProperty(this, ri, {
          value: Qy
        }), Object.defineProperty(this, mi, {
          value: Ky
        }), Object.defineProperty(this, gi, {
          value: Py
        }), Object.defineProperty(this, Ai, {
          value: xy
        }), Object.defineProperty(this, Yi, {
          value: Jy
        }), Object.defineProperty(this, di, {
          value: Hy
        }), Object.defineProperty(this, Bi, {
          value: wy
        }), Object.defineProperty(this, fi, {
          value: ey
        }), Object.defineProperty(this, Wi, {
          value: jy
        }), Object.defineProperty(this, ci, {
          value: Zy
        }), Object.defineProperty(this, Ni, {
          value: ty
        }), Object.defineProperty(this, Ci, {
          value: Ly
        }), Object.defineProperty(this, Ui, {
          value: qy
        }), Object.defineProperty(this, Ri, {
          value: ay
        }), Object.defineProperty(this, bi, {
          value: ly
        }), Object.defineProperty(this, ui, {
          value: yy
        }), Object.defineProperty(this, Gi, {
          value: iy
        }), Object.defineProperty(this, ei, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Hi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ji, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, xi, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Pi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ki, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qi, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, si, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Vi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Si, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ei, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Oi, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ni, {
          writable: !0,
          value: void 0
        }), (0, ki.c)(this, ni)[ni] = new yi({
          ensureLoaded: () => (0, ki.c)(this, Ci)[Ci](),
          recorderCall: (kk, Fk) => {
            Fk && (0, ki.c)(this, ui)[ui]("an edited save's stage");
            const Ik = (0, ki.c)(this, Fy)[Fy](((Fk, Ik) => (kk(Fk, Ik), !0)));
            return null !== Ik && void 0 !== Ik && Ik
          },
          beginSave: kk.beginSave,
          givenUp: kk.givenUp
        })
      }
      get active() {
        return null !== (0, ki.c)(this, wi)[wi]
      }
      get trapped() {
        return (0, ki.c)(this, Ji)[Ji]
      }
      get loading() {
        return null !== (0, ki.c)(this, Ki)[Ki]
      }
      prefetch() {
        (0, ki.c)(this, xi)[xi] || (0, ki.c)(this, Ji)[Ji] || (0, ki.c)(this, wi)[wi] || (0, ki.c)(this, Ki)[Ki] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, ki.c)(this, si)[si] = !0, (0, ki.c)(this, bi)[bi]() && (0, ki.c)(this, Ui)[Ui]()
      }
      prefs(kk, Fk) {
        (0, ki.c)(this, Vi)[Vi] = {
          on: kk,
          seconds: Fk
        }, (0, ki.c)(this, Ai)[Ai](Zk.Pc.Prefs, ai(kk, Fk)), kk && (0, ki.c)(this, si)[si] && (0, ki.c)(this, Ui)[Ui]()
      }
      control(kk) {
        const Fk = function(kk) {
          return new Uint8Array([kk, 0, 0, 0])
        }(kk);
        if (ji.has(kk)) return (0, ki.c)(this, wi)[wi] ? void(0, ki.c)(this, Ai)[Ai](Zk.Pc.Control, Fk) : ((0, ki.c)(this, Si)[Si] = Fk, void(0, ki.c)(this, Ui)[Ui]());
        (0, ki.c)(this, xi)[xi] || this.deps.coreCommand(Zk.Pc.Control, Fk)
      }
      session(kk) {
        (0, ki.c)(this, zi)[zi] = kk, (0, ki.c)(this, Gi)[Gi](kk)
      }
      filePartDone(kk, Fk) {
        (0, ki.c)(this, Ai)[Ai](Zk.Pc.FilePartDone, function(kk, Fk) {
          const Ik = new Uint8Array(8),
            Xk = new DataView(Ik.buffer);
          return Xk.setUint32(0, kk, !0), Xk.setUint32(4, Fk, !0), Ik
        }(kk, Fk))
      }
      fileDone(kk) {
        return (0, ki.c)(this, Ai)[Ai](Zk.Pc.FileDone, function(kk) {
          const Fk = new Uint8Array(4);
          return new DataView(Fk.buffer).setUint32(0, kk, !0), Fk
        }(kk)), (0, ki.c)(this, ci)[ci]()
      }
      saveEdited(kk) {
        return (0, ki.c)(this, ui)[ui]("saveEdited"), (0, ki.c)(this, ni)[ni].start(kk)
      }
      afterFrame() {
        if (!(0, ki.c)(this, wi)[wi]) return;
        "read" === (0, ki.c)(this, ni)[ni].beforeRecorderStep() && (0, ki.c)(this, ci)[ci]();
        const kk = (0, ki.c)(this, Pi)[Pi];
        (0, ki.c)(this, Pi)[Pi] = null;
        const Fk = (0, ki.c)(this, wi)[wi],
          Ik = (0, ki.c)(this, Hi)[Hi];
        if (!Fk || !Ik) return void(null === kk || void 0 === kk || kk.resolve((0, ki.c)(this, Ji)[Ji] ? "trapped" : "Gj"));
        const {
          core: Xk
        } = this.deps, Tk = Xk.RTk(2);
        let ik, yk, lk, ak, qk = 0,
          Lk = 0;
        if (0 !== Tk) {
          var tk, Zk;
          const kk = (0, ki.c)(this, Di)[Di]();
          qk = null !== (tk = kk[Tk >>> 2]) && void 0 !== tk ? tk : 0, Lk = null !== (Zk = kk[1 + (Tk >>> 2)]) && void 0 !== Zk ? Zk : 0
        }
        try {
          if (Lk > 0) {
            const kk = Fk.feed(Lk);
            0 !== kk && (0, ki.c)(this, Mi)[Mi](Ik).set((0, ki.c)(this, ri)[ri]().subarray(qk, qk + Lk), kk)
          }
          ik = Fk.step(), yk = Fk.UTk(), lk = Fk.CTk(), ak = Fk.NTk()
        } catch (jk) {
          if (!(0, ki.c)(this, Xy)[Xy](jk)) throw null === kk || void 0 === kk || kk.resolve("Gj"), jk;
          return void(null === kk || void 0 === kk || kk.resolve("trapped"))
        }
        if (ik > 0) {
          const kk = Xk.cTk(2, ik);
          0 !== kk && (0, ki.c)(this, ri)[ri]().set((0, ki.c)(this, Mi)[Mi](Ik).subarray(yk, yk + ik), kk)
        }
        if (lk > 0) {
          (0, ki.c)(this, oi)[oi] = [];
          try {
            this.deps.events(new Uint8Array(Ik.buffer, ak, lk), Ik)
          } catch (jk) {
            throw null === kk || void 0 === kk || kk.resolve("Gj"), jk
          } finally {
            const kk = (0, ki.c)(this, oi)[oi];
            (0, ki.c)(this, oi)[oi] = null;
            for (const [Fk, Ik] of kk)(0, ki.c)(this, Ai)[Ai](Fk, Ik)
          }
        }
        if (!(0, ki.c)(this, bi)[bi]() && !(0, ki.c)(this, Ri)[Ri]()) return (0, ki.c)(this, gi)[gi](), void(null === kk || void 0 === kk || kk.resolve("Gj"));
        null === kk || void 0 === kk || kk.resolve((0, ki.c)(this, Yi)[Yi]())
      }
      dispose() {
        (0, ki.c)(this, xi)[xi] = !0, (0, ki.c)(this, gi)[gi]()
      }
    }

    function iy(kk) {
      (0, ki.c)(this, Ai)[Ai](Zk.Pc.Session, function(kk) {
        const Fk = new TextEncoder,
          Ik = Fk.encode(kk.game).subarray(0, 65535),
          Xk = Fk.encode(kk.lobby).subarray(0, 65535),
          Tk = new Uint8Array(22 + Ik.length + 2 + Xk.length),
          ik = new DataView(Tk.buffer);
        ik.setFloat64(0, kk.unixMs, !0), ik.setBigUint64(8, BigInt.asUintN(64, kk.session), !0), ik.setUint8(16, kk.lobbyType);
        let yk = 20;
        for (const lk of [Ik, Xk]) ik.setUint16(yk, lk.length, !0), Tk.set(lk, yk + 2), yk += 2 + lk.length;
        return Tk
      }({
        ...kk,
        unixMs: this.deps.unixNow()
      }))
    }

    function yy(kk) {
      false
    }

    function ly() {
      var kk, Fk;
      return null !== (kk = null === (Fk = (0, ki.c)(this, Vi)[Vi]) || void 0 === Fk ? void 0 : Fk.on) && void 0 !== kk && kk
    }

    function ay() {
      const kk = (0, ki.c)(this, wi)[wi];
      let Fk = !0;
      if (kk) try {
        Fk = kk.busy()
      } catch (Ik) {
        if (!(0, ki.c)(this, Xy)[Xy](Ik)) throw Ik
      }
      return Fk || (0, ki.c)(this, ni)[ni].active
    }
    async function qy() {
      !(0, ki.c)(this, xi)[xi] && this.deps.allowed() ? await (0, ki.c)(this, Ci)[Ci]() : (0, ki.c)(this, Si)[Si] = null
    }

    function Ly() {
      return (0, ki.c)(this, Ji)[Ji] || (0, ki.c)(this, xi)[xi] ? Promise.resolve(!1) : (0, ki.c)(this, wi)[wi] ? Promise.resolve(!0) : ((0, ki.c)(this, Ki)[Ki] ??= (0, ki.c)(this, Ni)[Ni](), (0, ki.c)(this, Ki)[Ki])
    }
    async function ty() {
      let kk = !1;
      try {
        return kk = await (0, ki.c)(this, fi)[fi](), kk
      } finally {
        kk || ((0, ki.c)(this, Si)[Si] = null), (0, ki.c)(this, Ki)[Ki] = null
      }
    }

    function Zy() {
      if (!(0, ki.c)(this, wi)[wi]) return Promise.resolve((0, ki.c)(this, Ji)[Ji] ? "trapped" : "Gj");
      if (!(0, ki.c)(this, Pi)[Pi]) {
        let kk = () => {};
        const Fk = new Promise((Fk => {
          kk = Fk
        }));
        (0, ki.c)(this, Pi)[Pi] = {
          promise: Fk,
          resolve: kk
        }
      }
      return (0, ki.c)(this, Pi)[Pi].promise
    }

    function jy(kk) {
      const Fk = (0, ki.c)(this, Pi)[Pi];
      (0, ki.c)(this, Pi)[Pi] = null, null === Fk || void 0 === Fk || Fk.resolve(kk)
    }
    async function ey() {
      let kk = (0, ki.c)(this, ei)[ei];
      if (!kk) {
        const Fk = (0, ki.c)(this, Qi)[Qi];
        try {
          kk = await this.deps.load()
        } catch (Ik) {
          return Fk === (0, ki.c)(this, Qi)[Qi] && await (0, ki.c)(this, ky)[ky](Ik), !1
        }
        if (Fk !== (0, ki.c)(this, Qi)[Qi]) return this.deps.unload(), !1;
        const Xk = kk,
          Tk = (0, ki.c)(this, Iy)[Iy]((() => Xk.WTk()));
        if (void 0 === Tk) return !1;
        const ik = this.deps.core.fTk();
        if (Tk !== ik) return await (0, ki.c)(this, ky)[ky](new Error(`recorder port version ${Tk}, the core's ${ik}`)), !1;
        (0, ki.c)(this, ei)[ei] = kk
      }
      const Fk = kk;
      try {
        if (!(0, ki.c)(this, Iy)[Iy]((() => ((0, ki.c)(this, wi)[wi] = new Fk.BTk, (0, ki.c)(this, Hi)[Hi] = Fk.uTk(), !0)))) return !1;
        (0, ki.c)(this, di)[di]();
        const kk = (0, ki.c)(this, Si)[Si];
        return (0, ki.c)(this, Si)[Si] = null, kk && (0, ki.c)(this, Ai)[Ai](Zk.Pc.Control, kk), (0, ki.c)(this, Bi)[Bi]()
      } catch (Ik) {
        return (0, ki.c)(this, gi)[gi](), await (0, ki.c)(this, ky)[ky](Ik), !1
      }
    }

    function wy() {
      return this.deps.core.dTk(0), 1 === this.deps.core.dTk(1) || ((0, ki.c)(this, gi)[gi](), this.deps.failed(Zi), !1)
    }

    function Hy() {
      (0, ki.c)(this, Vi)[Vi] && (0, ki.c)(this, Ai)[Ai](Zk.Pc.Prefs, ai((0, ki.c)(this, Vi)[Vi].on, (0, ki.c)(this, Vi)[Vi].seconds)), (0, ki.c)(this, zi)[zi] && (0, ki.c)(this, Gi)[Gi]((0, ki.c)(this, zi)[zi])
    }

    function Jy() {
      return ti({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var kk, Fk;
          return null !== (kk = null === (Fk = (0, ki.c)(this, Vi)[Vi]) || void 0 === Fk ? void 0 : Fk.seconds) && void 0 !== kk ? kk : 0
        },
        trapped: () => (0, ki.c)(this, Ji)[Ji],
        busy: () => (0, ki.c)(this, Ri)[Ri](),
        loadInFlight: () => (0, ki.c)(this, Ki)[Ki],
        ee: () => (0, ki.c)(this, xi)[xi],
        unload: () => {
          (0, ki.c)(this, gi)[gi]()
        },
        load: () => (0, ki.c)(this, Ci)[Ci]()
      })
    }

    function xy(kk, Fk) {
      (0, ki.c)(this, oi)[oi] ? (0, ki.c)(this, oi)[oi].push([kk, Fk]): (0, ki.c)(this, Fy)[Fy](((Ik, Xk) => {
        const Tk = Ik.bTk(Fk.length);
        0 !== Tk && (new Uint8Array(Xk.buffer, Tk, Fk.length).set(Fk), Ik.command(kk, Fk.length))
      }))
    }

    function Py() {
      (0, ki.c)(this, Qi)[Qi]++, (0, ki.c)(this, Wi)[Wi]("Gj"), (0, ki.c)(this, ni)[ni].stop(), this.deps.core.dTk(0), (0, ki.c)(this, mi)[mi](), (0, ki.c)(this, Ji)[Ji] || ((0, ki.c)(this, ei)[ei] = null, this.deps.unload())
    }

    function Ky() {
      (0, ki.c)(this, Fy)[Fy]((kk => {
        kk.free()
      })), (0, ki.c)(this, wi)[wi] = null, (0, ki.c)(this, Hi)[Hi] = null, (0, ki.c)(this, Oi)[Oi] = null
    }

    function Qy() {
      var kk;
      const Fk = this.deps.coreBuffer();
      return (null === (kk = (0, ki.c)(this, vi)[vi]) || void 0 === kk ? void 0 : kk.buffer) !== Fk && ((0, ki.c)(this, vi)[vi] = new Uint8Array(Fk)), (0, ki.c)(this, vi)[vi]
    }

    function sy() {
      var kk;
      const Fk = this.deps.coreBuffer();
      return (null === (kk = (0, ki.c)(this, Ei)[Ei]) || void 0 === kk ? void 0 : kk.buffer) !== Fk && ((0, ki.c)(this, Ei)[Ei] = new Uint32Array(Fk, 0, Fk.byteLength >>> 2)), (0, ki.c)(this, Ei)[Ei]
    }

    function Vy(kk) {
      var Fk;
      const Ik = kk.buffer;
      return (null === (Fk = (0, ki.c)(this, Oi)[Oi]) || void 0 === Fk ? void 0 : Fk.buffer) !== Ik && ((0, ki.c)(this, Oi)[Oi] = new Uint8Array(Ik)), (0, ki.c)(this, Oi)[Oi]
    }
    async function zy(kk) {
      await this.deps.staleOr(kk, (() => {
        this.deps.failed(Zi)
      }))
    }

    function Sy(kk) {
      const Fk = (0, ki.c)(this, wi)[wi],
        Ik = (0, ki.c)(this, Hi)[Hi];
      if (Fk && Ik) return (0, ki.c)(this, Iy)[Iy]((() => kk(Fk, Ik)))
    }

    function oy(kk) {
      if (!(0, ki.c)(this, Ji)[Ji]) try {
        return kk()
      } catch (Fk) {
        if (!(0, ki.c)(this, Xy)[Xy](Fk)) throw Fk;
        return
      }
    }

    function vy(kk) {
      return kk instanceof WebAssembly.RuntimeError && ((0, ki.c)(this, Ji)[Ji] = !0, (0, ki.c)(this, wi)[wi] = null, (0, ki.c)(this, Hi)[Hi] = null, (0, ki.c)(this, Oi)[Oi] = null, (0, ki.c)(this, ei)[ei] = null, (0, ki.c)(this, Si)[Si] = null, (0, ki.c)(this, Wi)[Wi]("trapped"), this.deps.core.dTk(0), (0, ki.c)(this, ni)[ni].stop(), this.deps.crash(this.deps.markTrapped(kk)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Ey = Ik(38632);
    const Oy = new Map([
      ["skyblock", () => Ik.e(51).then((() => Ik(38623)))]
    ]);

    function ny(kk) {
      const Fk = Oy.get(kk);
      return Fk ? Fk().then((() => {
        const Fk = (0, Ey.c)(kk);
        if (!Fk) throw new Error(`${kk}'s replay hook module registered no hook`);
        return Fk
      })) : null
    }
    class Gy {
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
        const Ik = this.deps.loadHook(kk);
        null === Ik || void 0 === Ik || Ik.then((kk => {
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
        const Ik = this.deps.cmd();
        if (null === Ik) return;
        const {
          api: Xk
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: kk,
            count: Fk
          } = NI(Xk, this.ids);
          this.ids = kk;
          for (let Ik = 0; Ik < Fk; Ik++) this.pending.set(kk[Ik], !0)
        }
        const Tk = this.ids = cI(this.ids, this.pending.size);
        let ik = 0;
        for (const qk of this.pending.keys()) Tk[ik++] = qk;
        const yk = [],
          lk = WI(Xk, Tk, ik, ((kk, Fk) => {
            null !== Fk && yk.push({
              serverId: kk,
              info: Fk,
              spawned: !0 === this.pending.get(kk)
            })
          }));
        if (lk) {
          this.pending.clear();
          for (const {
              serverId: kk,
              info: Xk,
              spawned: Tk
            }
            of yk) try {
            Fk(Xk, {
              setFacingTolerance: Fk => {
                null === Fk && Tk || aI(Ik, kk, Fk) || this.pending.set(kk, Tk)
              }
            })
          } catch (ak) {
            this.deps.onError(ak)
          }
        }
      }
    }
    var py = (0, Fi.c)("bindings"),
      uy = (0, Fi.c)("module"),
      by = (0, Fi.c)("memory"),
      Ry = (0, Fi.c)("trapped"),
      Uy = (0, Fi.c)("generation"),
      Cy = (0, Fi.c)("loading"),
      Ny = (0, Fi.c)("lend"),
      cy = (0, Fi.c)("givenUp"),
      Wy = (0, Fi.c)("afterSave"),
      fy = (0, Fi.c)("opens"),
      By = (0, Fi.c)("saveAskedAt"),
      dy = (0, Fi.c)("unload"),
      Yy = (0, Fi.c)("dropModule"),
      Ay = (0, Fi.c)("loadFailed"),
      gy = (0, Fi.c)("saveReadsBody"),
      my = (0, Fi.c)("command"),
      hy = (0, Fi.c)("call"),
      ry = (0, Fi.c)("guard"),
      Dy = (0, Fi.c)("trapOn");
    class My {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, Dy, {
          value: ll
        }), Object.defineProperty(this, ry, {
          value: yl
        }), Object.defineProperty(this, hy, {
          value: il
        }), Object.defineProperty(this, my, {
          value: Tl
        }), Object.defineProperty(this, gy, {
          get: Xl,
          set: void 0
        }), Object.defineProperty(this, Ay, {
          value: Il
        }), Object.defineProperty(this, Yy, {
          value: Fl
        }), Object.defineProperty(this, dy, {
          value: kl
        }), Object.defineProperty(this, py, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, by, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ry, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Uy, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Cy, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Ny, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Wy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fy, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, By, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, ki.c)(this, uy)[uy] && null === (0, ki.c)(this, Wy)[Wy]
      }
      async open(kk, Fk) {
        if ((0, ki.c)(this, Ry)[Ry]) return Zk.ad.ModuleTrap;
        let Ik = (0, ki.c)(this, py)[py];
        if (!Ik) {
          const kk = (0, ki.c)(this, Uy)[Uy];
          (0, ki.c)(this, Cy)[Cy]++;
          try {
            Ik = await this.deps.load()
          } catch (Tk) {
            return (0, ki.c)(this, Cy)[Cy]--, kk !== (0, ki.c)(this, Uy)[Uy] ? "stopped" : (0, ki.c)(this, Ay)[Ay](Tk, Fk)
          }
          if ((0, ki.c)(this, Cy)[Cy]--, kk !== (0, ki.c)(this, Uy)[Uy]) return (0, ki.c)(this, py)[py] || 0 !== (0, ki.c)(this, Cy)[Cy] || (0, ki.c)(this, Ry)[Ry] || this.deps.unload(), "stopped";
          if ((0, ki.c)(this, Ry)[Ry]) return Zk.ad.ModuleTrap;
          const Xk = Ik.WTk(),
            ik = this.deps.core.fTk();
          if (Xk !== ik) return (0, ki.c)(this, Ay)[Ay](new Error(`replay port version ${Xk}, the core's ${ik}`), Fk);
          (0, ki.c)(this, py)[py] = Ik
        }
        if (!(0, ki.c)(this, uy)[uy]) {
          const kk = Ik;
          if (!(0, ki.c)(this, ry)[ry]((() => {
              (0, ki.c)(this, uy)[uy] = new kk.YTk, (0, ki.c)(this, by)[by] = kk.ATk()
            }))) return Zk.ad.ModuleTrap
        }
        let Xk = !1;
        return (0, ki.c)(this, hy)[hy](((Fk, Ik) => {
          null !== (0, ki.c)(this, Wy)[Wy] && Fk.step(0, 0);
          const Tk = Fk.stage(kk.length);
          0 !== Tk && (new Uint8Array(Ik.buffer, Tk, kk.length).set(kk), Fk.open(), (0, ki.c)(this, cy)[cy] = (0, ki.c)(this, Ny)[Ny], (0, ki.c)(this, Wy)[Wy] = null, (0, ki.c)(this, fy)[fy]++, Xk = !0)
        })) ? Xk ? "opening" : Zk.ad.TooLarge : Zk.ad.ModuleTrap
      }
      beforeFrame(kk) {
        const Fk = (0, ki.c)(this, uy)[uy],
          Ik = (0, ki.c)(this, by)[by];
        if (!Fk || !Ik || null !== (0, ki.c)(this, Wy)[Wy]) return;
        const {
          core: Xk
        } = this.deps, Tk = Xk.gTk(kk);
        if (Tk < 0) return;
        const ik = Math.floor(Tk);
        let yk, lk;
        try {
          yk = Fk.step(ik, Tk - ik), lk = Fk.UTk()
        } catch (qk) {
          return void(0, ki.c)(this, Dy)[Dy](qk)
        }
        const ak = Xk.cTk(1, yk);
        if (0 === ak) {
          const kk = (0, ki.c)(this, hy)[hy]((kk => {
            kk.close()
          }));
          if (!kk) return;
          return (0, ki.c)(this, gy)[gy] ? (0, ki.c)(this, Wy)[Wy] = "drop" : (0, ki.c)(this, Yy)[Yy](), void Xk.mTk(Zk.ad.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), ak, yk).set(new Uint8Array(Ik.buffer, lk, yk))
      }
      play() {
        (0, ki.c)(this, my)[my]((kk => {
          kk.play()
        }))
      }
      pause() {
        (0, ki.c)(this, my)[my]((kk => {
          kk.pause()
        }))
      }
      seek(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, ki.c)(this, my)[my]((Ik => {
          Ik.seek(kk, Fk)
        }))
      }
      setMark(kk, Fk) {
        return (0, ki.c)(this, my)[my]((Ik => {
          Ik.hTk(kk, Fk)
        }))
      }
      addKeyframe(kk, Fk) {
        return (0, ki.c)(this, my)[my]((Ik => {
          Ik.rTk(kk[0], kk[1], kk[2], Fk[0], Fk[1], Fk[2])
        }))
      }
      setKeyframe(kk, Fk) {
        return (0, ki.c)(this, my)[my]((Ik => {
          Ik.DTk(kk, Fk)
        }))
      }
      moveKeyframe(kk, Fk) {
        return (0, ki.c)(this, my)[my]((Ik => {
          Ik.MTk(kk, Fk)
        }))
      }
      deleteKeyframes(kk, Fk) {
        return (0, ki.c)(this, my)[my]((Ik => {
          Ik.kik(kk, Fk)
        }))
      }
      crop(kk, Fk) {
        return null === (0, ki.c)(this, Ny)[Ny] && (0, ki.c)(this, my)[my]((Ik => {
          Ik.crop(kk, Fk)
        }))
      }
      beginSave() {
        const kk = (0, ki.c)(this, By)[By];
        if ((0, ki.c)(this, By)[By] = null, null !== kk && kk !== (0, ki.c)(this, fy)[fy]) return null;
        let Fk = 0,
          Ik = null;
        if ((0, ki.c)(this, hy)[hy](((kk, Xk) => {
            Fk = kk.save(), 0 !== Fk && (Ik = new Uint8Array(Xk.buffer, kk.Fik(), kk.Iik()).slice())
          })), 0 === Fk || !Ik) return null;
        const Xk = {
          headLen: Fk,
          editState: Ik,
          givenUp: () => (0, ki.c)(this, cy)[cy] === Xk,
          head: (kk, Fk) => {
            if ((0, ki.c)(this, Ny)[Ny] !== Xk || !(0, ki.c)(this, gy)[gy]) return null;
            let Ik = null;
            return (0, ki.c)(this, hy)[hy](((Xk, Tk) => {
              const ik = Xk.Xik();
              0 !== ik && kk >= 0 && Fk >= 0 && kk + Fk <= ik && (Ik = new Uint8Array(Tk.buffer, Xk.Tik() + kk, Fk))
            })), Ik
          },
          end: () => {
            if ((0, ki.c)(this, Ny)[Ny] !== Xk) return;
            (0, ki.c)(this, Ny)[Ny] = null, (0, ki.c)(this, cy)[cy] = null, (0, ki.c)(this, hy)[hy]((kk => {
              kk.iik()
            }));
            const kk = (0, ki.c)(this, Wy)[Wy];
            (0, ki.c)(this, Wy)[Wy] = null, "unload" === kk ? (0, ki.c)(this, dy)[dy]() : "drop" === kk && (0, ki.c)(this, Yy)[Yy]()
          }
        };
        return (0, ki.c)(this, Ny)[Ny] = Xk, Xk
      }
      askSave() {
        (0, ki.c)(this, By)[By] = (0, ki.c)(this, fy)[fy]
      }
      setSpeed(kk) {
        (0, ki.c)(this, my)[my]((Fk => {
          Fk.yik(kk)
        }))
      }
      setCameraMode(kk) {
        (0, ki.c)(this, my)[my]((Fk => {
          Fk.lik(kk)
        }))
      }
      close() {
        (0, ki.c)(this, my)[my]((kk => {
          kk.close()
        }))
      }
      stop() {
        (0, ki.c)(this, Uy)[Uy]++, (0, ki.c)(this, gy)[gy] && ((0, ki.c)(this, hy)[hy]((kk => {
          kk.close()
        })), (0, ki.c)(this, uy)[uy]) ? (0, ki.c)(this, Wy)[Wy] = "unload" : (0, ki.c)(this, dy)[dy]()
      }
    }

    function kl() {
      (0, ki.c)(this, Yy)[Yy](), (0, ki.c)(this, Ry)[Ry] || ((0, ki.c)(this, py)[py] = null, this.deps.unload())
    }

    function Fl() {
      (0, ki.c)(this, hy)[hy]((kk => {
        kk.free()
      })), (0, ki.c)(this, uy)[uy] = null, (0, ki.c)(this, by)[by] = null
    }
    async function Il(kk, Fk) {
      return await this.deps.staleOr(kk, (() => {}), {
        beforeReload: Fk
      }) ? "reloading" : Zk.ad.ModuleLoad
    }

    function Xl() {
      return null !== (0, ki.c)(this, Ny)[Ny] && (0, ki.c)(this, cy)[cy] !== (0, ki.c)(this, Ny)[Ny]
    }

    function Tl(kk) {
      return null === (0, ki.c)(this, Wy)[Wy] && (0, ki.c)(this, hy)[hy](kk)
    }

    function il(kk) {
      const Fk = (0, ki.c)(this, uy)[uy],
        Ik = (0, ki.c)(this, by)[by];
      return !(!Fk || !Ik) && (0, ki.c)(this, ry)[ry]((() => {
        kk(Fk, Ik)
      }))
    }

    function yl(kk) {
      if ((0, ki.c)(this, Ry)[Ry]) return !1;
      try {
        return kk(), !0
      } catch (Fk) {
        return (0, ki.c)(this, Dy)[Dy](Fk), !1
      }
    }

    function ll(kk) {
      if (!(kk instanceof WebAssembly.RuntimeError)) throw kk;
      (0, ki.c)(this, Ry)[Ry] = !0, (0, ki.c)(this, uy)[uy] = null, (0, ki.c)(this, by)[by] = null, (0, ki.c)(this, py)[py] = null, this.deps.crash(this.deps.markTrapped(kk)), this.deps.core.mTk(Zk.ad.ModuleTrap)
    }
    var al = Ik(6481),
      ql = Ik(41045);
    const Ll = "[bloxd-wasm-client]";
    const tl = String(nT);

    function Zl(kk) {
      return null === kk || kk === tl ? void 0 : kk
    }

    function jl(kk) {
      var Fk, Ik, Xk, Tk, ik, lk, ak;
      switch (kk.what) {
        case Zk.hd.FlyingText: {
          let Fk;
          try {
            Fk = JSON.parse(kk.contentJson)
          } catch (qk) {
            return void console.warn(`${Ll} a replay's flying text isn't JSON`, qk)
          }
          yk.g.GL("forceFlyingMiddleMessage", {
            content: Fk,
            zi: kk.zi,
            angle: kk.angle,
            Si: kk.Si
          });
          break
        }
        case Zk.hd.PlayerKilled:
          (0, ql.i)({
            kind: "killed",
            body: {
              deadEId: null !== (Fk = Zl(kk.dead)) && void 0 !== Fk ? Fk : "",
              killerEId: Zl(kk.killer),
              withItem: null !== (Ik = kk.withItem) && void 0 !== Ik ? Ik : "",
              killstreak: kk.killstreak
            }
          });
          break;
        case Zk.hd.Killfeed:
          (0, ql.i)({
            kind: "custom",
            body: {
              killer: {
                eId: Zl(kk.killerId),
                name: null !== (Xk = kk.killerName) && void 0 !== Xk ? Xk : void 0,
                colour: null !== (Tk = kk.killerColour) && void 0 !== Tk ? Tk : void 0
              },
              victim: {
                eId: Zl(kk.victimId),
                name: null !== (ik = kk.victimName) && void 0 !== ik ? ik : void 0,
                colour: null !== (lk = kk.victimColour) && void 0 !== lk ? lk : void 0
              },
              withItem: null !== (ak = kk.withItem) && void 0 !== ak ? ak : ""
            }
          })
      }
    }
    const el = "[bloxd-wasm-client]";

    function wl(kk) {
      if (void 0 === kk || null === kk || "" === kk) return null;
      const Fk = Number(kk);
      return Number.isInteger(Fk) && Fk > nT && Fk <= 2147483647 ? Fk : null
    }

    function Hl(kk) {
      return {
        id: wl(kk.eId),
        name: "string" === typeof kk.name ? kk.name : null,
        colour: "string" === typeof kk.colour ? kk.colour : null
      }
    }

    function Jl(kk) {
      const Fk = (0, WT.l)(gI.sc.PlayerKilled, (Fk => {
          var Ik, Xk;
          const Tk = (0, cT.g)(Fk);
          if (!(0, cT.c)(Tk)) return;
          const {
            deadEId: ik,
            killerEId: yk,
            withItem: lk,
            killstreak: ak
          } = Tk;
          kk.recordPlayerKilled(null !== (Ik = wl(ik)) && void 0 !== Ik ? Ik : nT, null !== (Xk = wl(yk)) && void 0 !== Xk ? Xk : nT, "number" === typeof ak ? ak : 0, "string" === typeof lk ? lk : "")
        })),
        Ik = (0, WT.l)(gI.sc.CustomKillfeed, (Fk => {
          const Ik = (0, cT.g)(Fk);
          if (!(0, cT.c)(Ik) || !(0, cT.c)(Ik.killer) || !(0, cT.c)(Ik.victim)) return;
          const {
            killer: Xk,
            victim: Tk,
            withItem: ik
          } = Ik;
          kk.recordKillfeed(Hl(Xk), Hl(Tk), "string" === typeof ik ? ik : null)
        }));
      return () => {
        Fk(), Ik()
      }
    }

    function xl(kk) {
      var Fk;
      return void 0 === kk || null === kk ? null : null !== (Fk = JSON.stringify(kk)) && void 0 !== Fk ? Fk : null
    }

    function Pl(kk) {
      let Fk = null;
      const Ik = () => {
        const {
          enableClipping: Ik,
          clipDurationSeconds: Tk
        } = Xk.d.get("clientEscMenuOptions"), ik = `${Ik}:${Tk}`;
        ik !== Fk && (Fk = ik, kk.recorder.setPrefs(Ik, Tk))
      };
      return Ik(), (0, yk.i)("appManagerUpdated|clientEscMenuOptions", Ik)
    }
    const Kl = "replayModule",
      Ql = "recorderModule";

    function sl(kk, Fk, Ik) {
      return function() {
        return kk.isStopped ? Ik : Fk(...arguments)
      }
    }
    const Vl = {
      open: () => Promise.reject(new Error(QT.b.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function zl() {
      return Ik.e(64).then((() => Ik(61456)))
    }

    function Sl(kk) {
      (0, QT.e)({
        text: kk,
        type: "Error"
      })
    }
    class ol {
      constructor(kk) {
        this.deps = kk, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Fk,
          api: Xk,
          core: Tk
        } = kk, ik = () => kk.memory().buffer, yk = () => Fk.isStopped ? null : Fk.rings.cmd, lk = sl(Fk, ((kk, Fk) => Tk.cTk(kk, Fk)), 0), ak = () => Tk.fTk();
        let qk = null;
        this.replay = new My({
          core: {
            gTk: sl(Fk, (kk => Tk.gTk(kk)), -1),
            cTk: lk,
            fTk: ak,
            mTk: sl(Fk, (kk => {
              Tk.mTk(kk)
            }), void 0)
          },
          coreBuffer: ik,
          load: async () => (qk = await Ik.e(65).then((() => Ik(61470))), qk.loadReplayModule()),
          unload: () => {
            var kk;
            null === (kk = qk) || void 0 === kk || kk.unloadReplayModule()
          },
          markTrapped: kk => qk ? qk.markReplayTrapped(kk) : new Error(String(kk)),
          staleOr: (Fk, Ik, Xk) => kk.staleOr(Kl, Fk, Ik, Xk),
          crash: Fk => {
            kk.reportFault(Kl, Fk)
          }
        });
        let Lk = null;
        this.recorder = new Ty({
          core: {
            dTk: sl(Fk, (kk => Tk.dTk(kk)), 0),
            RTk: sl(Fk, (kk => Tk.RTk(kk)), 0),
            cTk: lk,
            fTk: ak
          },
          coreCommand: (kk, Fk) => {
            var Ik, Xk;
            return null !== (Ik = null === (Xk = yk()) || void 0 === Xk ? void 0 : Xk.writeCmd(kk, 0, Fk)) && void 0 !== Ik && Ik
          },
          coreBuffer: ik,
          load: async () => (Lk = await zl(), Lk.loadRecorderModule()),
          prefetch: () => {
            zl().then((kk => kk.prefetchRecorderModule())).catch((kk => {
              console.warn(`${el} the recorder module didn't prefetch, so a save loads it:`, kk)
            }))
          },
          unload: () => {
            var kk;
            null === (kk = Lk) || void 0 === kk || kk.unloadRecorderModule()
          },
          markTrapped: kk => Lk ? Lk.markRecorderTrapped(kk) : new Error(String(kk)),
          memoryBytes: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = Lk) || void 0 === Fk ? void 0 : Fk.recorderMemoryBytes()) && void 0 !== kk ? kk : 0
          },
          staleOr: (Fk, Ik) => kk.staleOr(Ql, Fk, Ik),
          crash: Fk => {
            kk.reportFault(Ql, Fk)
          },
          allowed: () => !0 === kk.options.get("canRecordReplays"),
          failed: Sl,
          events: (kk, Fk) => {
            this.runtime.recorderEvents(kk, Fk)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Sl,
          unixNow: () => Date.now()
        });
        const tk = new OT({
          core: {
            oTk: sl(Fk, (kk => Tk.oTk(kk)), 0),
            ETk: sl(Fk, (() => {
              Tk.ETk()
            }), void 0),
            GH: sl(Fk, (() => Tk.GH()), 0),
            vTk: sl(Fk, (() => Tk.vTk()), 0)
          },
          buffer: ik,
          apiView: () => Xk.apiView,
          cmd: yk,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Gy({
          api: Xk,
          cmd: yk,
          loadHook: ny,
          onError: kk => {
            console.warn(`${el} the recorded game's replay hooks:`, kk)
          }
        });
        const Zk = new NT({
          client: tk,
          buffer: ik,
          setHoldDraws: kk => {
            Fk.setHoldDraws(kk)
          },
          notify: QT.e,
          onRecorderState: () => {
            var kk;
            null === (kk = (0, VT.f)()) || void 0 === kk || kk.recorderChanged()
          },
          onViewerChange: () => {
            var kk;
            null === (kk = (0, VT.f)()) || void 0 === kk || kk.viewerChanged()
          },
          onReplayOption: Fk => {
            ! function(kk, Fk) {
              var Ik, Xk;
              const Tk = gI.yb[Fk.key];
              if (void 0 === Tk) return;
              let ik = null !== (Ik = Fk.value) && void 0 !== Ik ? Ik : JSON.parse(JSON.stringify(null !== (Xk = al.e[Tk]) && void 0 !== Xk ? Xk : null));
              if (null !== Fk.value && Fk.key < gI._b.Environment && "string" === typeof ik) try {
                ik = JSON.parse(ik)
              } catch (yk) {
                return void console.warn(`${Ll} a replay's ${Tk} isn't JSON`, yk)
              }
              kk.applyNewClientOptions({
                [Tk]: ik
              })
            }(kk.options, Fk)
          },
          onReplayUiEvent: jl,
          onReplayOpened: Fk => {
            this.entityHooks.opened((0, vk.dc)(Fk)), kk.replayShaderPack(Fk)
          },
          meshPending: () => {
            var kk, Ik;
            return null !== (kk = null === (Ik = Fk.lastHeader) || void 0 === Ik ? void 0 : Ik.renderPending) && void 0 !== kk ? kk : 0
          },
          viewerOpen: sT.c,
          download: kk => {
            (0, PT.j)(kk)
          }
        });
        this.runtime = Zk, Xk.replay = Zk.sink, (0, VT.r)(Zk);
        const jk = new dT({
          live: () => {
            var kk;
            return !Fk.isStopped && !0 === (null === (kk = Zk.currentViewer) || void 0 === kk ? void 0 : kk.inPlayback)
          },
          cmd: yk,
          dragScale: DT
        });
        this.freecam = jk, (0, VT.q)(jk), this.recordedOptions = function(kk, Fk) {
          const Ik = gI.yb,
            Xk = Ik.map(((Ik, Xk) => Fk.subscribe(Ik, (Fk => {
              kk.setOption(Xk, xl(Fk))
            }))));
          return {
            sendAll() {
              Ik.forEach(((Ik, Xk) => {
                kk.setOption(Xk, xl(Fk.get(Ik)))
              }))
            },
            stop() {
              for (const kk of Xk) kk()
            }
          }
        }(Zk.recorder, kk.options), this.stops = [(0, TX.o)((kk => {
          jk.flush();
          try {
            this.replay.beforeFrame(kk)
          } catch (Fk) {
            this.deps.reportFault("replayFrame", Fk)
          }
        })), (0, TX.z)(((kk, Fk) => {
          try {
            this.recorder.afterFrame(), Fk && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Ik) {
            this.deps.reportFault("recorderFrame", Ik)
          }
          try {
            Zk.afterFrame(kk)
          } catch (Ik) {
            this.deps.reportFault("replayRuntime", Ik)
          }
        })), Pl(Zk), () => {
          this.recordedOptions.stop()
        }, Jl(Zk.recorder), (0, fT.g)((kk => {
          let {
            action: Fk,
            down: Ik
          } = kk;
          var Xk;
          Ik && (null === (Xk = (0, VT.f)()) || void 0 === Xk || Xk.keyDown(Fk))
        }))];
        const ek = () => {
          const kk = Zk.currentViewer;
          return !0 === (null === kk || void 0 === kk ? void 0 : kk.isOpen) ? kk : null
        };
        (0, KT.h)({
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
            return null !== (kk = null === (Fk = Zk.currentViewer) || void 0 === Fk ? void 0 : Fk.fileHandle) && void 0 !== kk ? kk : null
          },
          markSaved: (kk, Fk) => {
            var Ik;
            null === (Ik = Zk.currentViewer) || void 0 === Ik || Ik.markSaved(kk, Fk)
          }
        })
      }
      netEvent(kk) {
        if ("connection" === kk.type)
          if (kk.phase === Zk.I.Activated) {
            this.activeConn = kk.conn;
            const Fk = this.deps.sessionInfo(kk.conn);
            null !== Fk && (this.runtime.activated({
              lobbyType: (0, Ek.x)(Fk.lobbyName),
              gameNameWithVariation: Fk.gameNameWithVariation,
              lobbyName: Fk.lobbyName
            }), this.recordedOptions.sendAll())
          } else kk.phase !== Zk.I.Left && kk.phase !== Zk.I.Closed || kk.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const kk of this.stops) kk();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, VT.j)() === this.runtime && (0, VT.r)(null), (0, VT.g)() === this.freecam && (0, VT.q)(null), (0, KT.h)(Vl), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(kk, Fk) {
        const {
          running: Ik
        } = this.deps;
        if (Ik.isStopped) throw new Error(QT.b.coreStopped.text);
        if (kk.byteLength > 67108864) throw new Error(QT.b.cantOpen.text);
        let Xk;
        try {
          Xk = await async function(kk) {
            const Fk = await kk.loadViewer();
            return Fk.inPlayback || (0, TX.I)().leaveGame(null), Fk
          }(this.runtime)
        } catch (Tk) {
          throw console.warn(`${el} the replay viewer didn't load`, Tk), new Error(QT.b.viewerLoadFailed.text)
        }
        if (Ik.isStopped) throw new Error(QT.b.coreStopped.text);
        await Xk.open(kk, Fk)
      }
    }
    var vl = Ik(1894);

    function El(kk, Fk) {
      const {
        aux: Ik,
        payload: Xk
      } = function(kk) {
        return {
          aux: kk.reset ? Zk.Zb.ResetFirst : 0,
          payload: nl(kk.changes)
        }
      }(Fk);
      kk.queueOptions(Ik, Xk) && (Fk.reset && vl.e.reset(), vl.e.apply(Fk.changes))
    }
    const Ol = new TextEncoder;

    function nl(kk) {
      const Fk = new Gl;
      return ul(Fk, kk), Fk.bytes()
    }
    class Gl {
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
      tagged(kk, Fk, Ik) {
        this.room(1 + Fk), this.buf[this.len++] = kk, 1 === Fk ? this.view.setUint8(this.len, Ik) : 2 === Fk ? this.view.setUint16(this.len, Ik) : this.view.setUint32(this.len, Ik), this.len += Fk
      }
      signed(kk, Fk, Ik) {
        this.room(1 + Fk), this.buf[this.len++] = kk, 1 === Fk ? this.view.setInt8(this.len, Ik) : 2 === Fk ? this.view.setInt16(this.len, Ik) : this.view.setInt32(this.len, Ik), this.len += Fk
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

    function pl(kk, Fk, Ik, Xk, Tk, ik, yk) {
      Fk < Xk ? kk.u8(Ik | Fk) : null !== Tk && Fk < 256 ? kk.tagged(Tk, 1, Fk) : Fk < 65536 ? kk.tagged(ik, 2, Fk) : kk.tagged(yk, 4, Fk)
    }

    function ul(kk, Fk) {
      switch (typeof Fk) {
        case "undefined":
          return void kk.raw(bl);
        case "boolean":
          return void kk.u8(Fk ? 195 : 194);
        case "number":
          return void
          function(kk, Fk) {
            Fk >>> 0 === Fk ? Fk < 128 ? kk.u8(Fk) : Fk < 256 ? kk.tagged(204, 1, Fk) : Fk < 65536 ? kk.tagged(205, 2, Fk) : kk.tagged(206, 4, Fk) : (Fk | 0) === Fk ? Fk >= -32 ? kk.u8(255 & Fk) : Fk >= -128 ? kk.signed(208, 1, Fk) : Fk >= -32768 ? kk.signed(209, 2, Fk) : kk.signed(210, 4, Fk) : kk.f64(Fk)
          }(kk, Fk);
        case "string": {
          const Ik = Ol.encode(Fk);
          return pl(kk, Ik.length, 160, 32, 217, 218, 219), void kk.raw(Ik)
        }
        case "object":
          break;
        default:
          return void kk.u8(192)
      }
      if (null === Fk) kk.u8(192);
      else if (Array.isArray(Fk)) {
        pl(kk, Fk.length, 144, 16, null, 220, 221);
        for (const Ik of Fk) ul(kk, Ik)
      } else if (Fk instanceof Uint8Array) pl(kk, Fk.length, 0, 0, 196, 197, 198), kk.raw(Fk);
      else {
        const Ik = Object.keys(Fk);
        pl(kk, Ik.length, 128, 0, null, 222, 223);
        for (const Xk of Ik) ul(kk, Xk), ul(kk, Fk[Xk])
      }
    }
    const bl = new Uint8Array([212, 0, 0]);
    var Rl = Ik(42590),
      Ul = Ik(42599),
      Cl = Ik(40957),
      Nl = Ik(41003),
      cl = Ik(2803);
    const Wl = [1e3, 3e3, 9e3];
    class fl {
      constructor(kk) {
        this.host = kk, this.sets = new Map, this.table = [], this.generation = 0, this.ee = !1
      }
      onEvent(kk) {
        const Fk = function(kk) {
          if (kk.byteLength !== Zk.rd) return null;
          const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
          return {
            want: Fk.getUint16(0, !0),
            release: Fk.getUint16(2, !0)
          }
        }(kk);
        Fk && !this.ee && (Fk.release !== Zk.ud && this.release(Fk.release), Fk.want !== Zk.ud && this.want(Fk.want))
      }
      reset(kk) {
        if (!this.ee) {
          for (const [kk, Fk] of this.sets) "ready" === Fk.state && this.releaseAll(Fk.distinct), this.sets.delete(kk);
          this.table = kk, this.generation++
        }
      }
      dispose() {
        if (this.ee) return;
        this.ee = !0, this.generation++, this.table = [];
        const kk = [...this.sets.values()];
        this.sets.clear();
        let Fk = null;
        for (const Xk of kk)
          for (const kk of "ready" === Xk.state ? Xk.distinct : []) try {
            this.host.mIk(kk)
          } catch (Ik) {
            Fk ??= {
              error: Ik
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
        if ("ready" === (null === Fk || void 0 === Fk ? void 0 : Fk.state)) return void this.host.sendReady(dl(kk, Fk.images, Fk.size));
        const Ik = this.table[kk];
        if (!Ik || 1 !== Ik.urls.length && Ik.urls.length !== gI.lc.CubeFaces) return this.host.sendReady(Yl(kk)), void this.host.onLoadFailed(kk, "", new Error(`no image set ${kk}`));
        const Xk = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(kk, Xk), this.load(kk, Ik, Xk, this.generation, 0), this.capAnswer(kk, Xk)
      }
      capAnswer(kk, Fk) {
        this.host.wait(4e3, (() => {
          this.sets.get(kk) === Fk && Fk.wanted && this.host.sendReady(Yl(kk))
        }))
      }
      load(kk, Fk, Ik, Xk, Tk) {
        const ik = [...new Set(Fk.urls)];
        Promise.allSettled(ik.map((kk => this.host.loadImage(kk, Fk.orientation)))).then((yk => {
          const lk = yk.flatMap((kk => "fulfilled" === kk.status ? [kk.value] : [])),
            ak = Xk === this.generation && this.sets.get(kk) === Ik,
            qk = yk.findIndex((kk => "rejected" === kk.status));
          if (!ak || !Ik.wanted) return this.ee ? void this.releaseAfterDispose(lk.map(Bl)) : (this.releaseAll(lk.map(Bl)), void(ak && this.sets.delete(kk)));
          qk < 0 ? this.loaded(kk, Fk, ik, lk) : (this.releaseAll(lk.map(Bl)), this.host.sendReady(Yl(kk)), Tk < Wl.length ? this.host.wait(Wl[Tk], (() => {
            Xk === this.generation && this.sets.get(kk) === Ik && (Ik.wanted ? this.load(kk, Fk, Ik, Xk, Tk + 1) : this.sets.delete(kk))
          })) : (this.sets.delete(kk), this.host.onLoadFailed(kk, ik[qk], yk[qk].reason)))
        }))
      }
      loaded(kk, Fk, Ik, Xk) {
        const [Tk] = Xk, ik = [Tk.width, Tk.height], yk = Xk.every((kk => kk.width === ik[0] && kk.height === ik[1])), lk = Fk.urls.length === gI.lc.CubeFaces;
        if (!yk || ik[0] <= 0 || ik[1] <= 0 || ik[0] > 65535 || ik[1] > 65535 || lk && ik[0] !== ik[1]) {
          this.releaseAll(Xk.map(Bl)), this.sets.delete(kk), this.host.sendReady(Yl(kk));
          const Ik = Xk.map((kk => `${kk.width}x${kk.height}`));
          return void this.host.onLoadFailed(kk, Fk.urls[0], new Error(`set ${kk}'s images can't make its texture: ${Ik.join(", ")}`))
        }
        const ak = Fk.urls.map((kk => Xk[Ik.indexOf(kk)].id)),
          qk = Xk.map(Bl);
        this.sets.set(kk, {
          state: "ready",
          images: ak,
          distinct: qk,
          size: ik
        }), this.host.sendReady(dl(kk, ak, ik))
      }
      release(kk) {
        const Fk = this.sets.get(kk);
        "loading" === (null === Fk || void 0 === Fk ? void 0 : Fk.state) ? Fk.wanted = !1: "ready" === (null === Fk || void 0 === Fk ? void 0 : Fk.state) && (this.releaseAll(Fk.distinct), this.sets.delete(kk))
      }
      releaseAll(kk) {
        for (const Fk of kk) this.host.mIk(Fk)
      }
      releaseAfterDispose(kk) {
        for (const Fk of kk) try {
          this.host.mIk(Fk)
        } catch {}
      }
    }

    function Bl(kk) {
      return kk.id
    }

    function dl(kk, Fk, Ik) {
      const Xk = new Uint8Array(gI.lc.SkyImagesReadyBytes),
        Tk = new DataView(Xk.buffer);
      return Tk.setUint16(0, kk, !0), Tk.setUint16(2, Fk.length, !0), Tk.setUint16(4, Ik[0], !0), Tk.setUint16(6, Ik[1], !0), Fk.slice(0, gI.lc.CubeFaces).forEach(((kk, Fk) => {
        Tk.setUint32(8 + 4 * Fk, kk, !0)
      })), Xk
    }

    function Yl(kk) {
      const Fk = new Uint8Array(gI.lc.SkyImagesReadyBytes),
        Ik = new DataView(Fk.buffer);
      return Ik.setUint16(0, kk, !0), Ik.setUint16(2, gI.lc.Failed, !0), Fk
    }
    let Al = Promise.resolve();
    async function gl(kk, Fk) {
      let Ik;
      try {
        Ik = await (0, cl.K)(kk)
      } catch (ik) {
        throw new Cl.e("fetch", kk, {
          cause: ik
        })
      }
      const Xk = Al.then((() => async function(kk, Fk) {
        const Ik = new Blob([kk.slice()]);
        let Xk = await createImageBitmap(Ik, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Fk
        });
        const Tk = 1024 / Math.max(Xk.width, Xk.height);
        if (Tk < 1) {
          const kk = Xk;
          try {
            Xk = await createImageBitmap(kk, {
              resizeWidth: Math.max(1, Math.round(kk.width * Tk)),
              resizeHeight: Math.max(1, Math.round(kk.height * Tk)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            kk.close()
          }
        }
        return Xk
      }(Ik, Fk)));
      let Tk;
      Al = Xk.catch((() => {}));
      try {
        Tk = await Xk
      } catch (ik) {
        throw new Cl.e("decode", kk, {
          cause: ik
        })
      }
      return {
        id: (0, Cl.o)(Tk),
        width: Tk.width,
        height: Tk.height
      }
    }
    var ml = Ik(2071),
      hl = Ik(34008),
      rl = Ik(39230);
    const Dl = ml.d.length,
      Ml = new Set([...ml.d, "earth"]);

    function ka(kk) {
      const Fk = [],
        Ik = [],
        Xk = (kk, Xk) => {
          if ("custom" === Xk.type) {
            Ik.push({
              id: kk,
              kind: gI.lc.KindCustom,
              set: Fk.length,
              earth: null
            });
            const Tk = [Xk.px, Xk.py, Xk.pz, Xk.nx, Xk.ny, Xk.nz];
            Fk.push({
              urls: (0, rl.f)(Tk),
              orientation: "none"
            })
          } else Ik.push({
            id: kk,
            kind: gI.lc.KindEarth,
            set: 0,
            earth: Xk
          })
        };
      ml.d.forEach(((Fk, Ik) => {
        var Tk;
        Xk(Ik, null !== (Tk = Fa(kk[Fk])) && void 0 !== Tk ? Tk : hl.q[Fk])
      }));
      const Tk = Fa(kk.earth);
      "earth" === (null === Tk || void 0 === Tk ? void 0 : Tk.type) && Xk(Dl, Tk);
      const ik = new TextEncoder,
        yk = [],
        lk = [];
      for (const [jk, ek] of Object.entries(kk)) {
        const kk = Ml.has(jk) ? null : Fa(ek);
        if (null === kk) continue;
        const Fk = ik.encode(jk);
        Fk.length > 255 ? lk.push(`Ignoring texture pack skybox ${jk}, whose name is over 255 bytes`) : yk.length === gI.lc.MaxAdded ? lk.push(`Ignoring texture pack skybox ${jk}, past the ${gI.lc.MaxAdded} skies a pack can add`) : (yk.push(Fk), Xk(gI.lc.AddedId, kk))
      }
      const ak = Fk.length;
      Fk.push({
        urls: hl.h.map((kk => hl.l + kk)),
        orientation: "none"
      }), Fk.push({
        urls: [hl.n],
        orientation: "flipY"
      }), Fk.push({
        urls: [hl.d],
        orientation: "flipY"
      });
      const qk = gI.lc.SkyTableHeaderBytes + Ik.length * gI.lc.SkyTableEntryBytes,
        Lk = new Uint8Array(qk + yk.reduce(((kk, Fk) => kk + 1 + Fk.length), 0)),
        tk = new DataView(Lk.buffer);
      tk.setUint16(0, ak, !0), tk.setUint16(2, ak + 1, !0), tk.setUint16(4, ak + 2, !0), tk.setUint16(6, Ik.length, !0), Ik.forEach(((kk, Fk) => {
        const Ik = gI.lc.SkyTableHeaderBytes + Fk * gI.lc.SkyTableEntryBytes;
        tk.setUint16(Ik, kk.id, !0), tk.setUint8(Ik + 2, kk.kind);
        const Xk = Ik + 4;
        kk.earth ? function(kk, Fk, Ik) {
          const Xk = kk;
          let Tk = 0,
            ik = 0;
          for (const [yk, lk] of Ia) {
            const kk = Xk[yk];
            "number" === typeof kk && Number.isFinite(kk) && (Fk.setFloat32(Ik + 4 * lk, kk, !0), Tk |= 1 << lk)
          }
          for (const [yk, lk, ak] of Xa) {
            const kk = Xk[yk];
            Array.isArray(kk) && 3 === kk.length && kk.every((kk => "number" === typeof kk && Number.isFinite(kk))) && (kk.forEach(((kk, Xk) => {
              Fk.setFloat32(Ik + ak + 4 * Xk, kk, !0)
            })), Tk |= lk)
          }
          Ta.forEach(((kk, ik) => {
            let [yk, lk] = kk;
            const ak = Xk[yk];
            "number" === typeof ak && Number.isFinite(ak) && (Fk.setFloat32(Ik + gI.w.CameraOffsetAt + 4 * ik, ak, !0), Tk |= lk)
          }));
          for (const [yk, lk] of ia) {
            const kk = Xk[yk];
            null !== kk && void 0 !== kk && (Tk |= lk, kk && (ik |= lk >>> 14))
          }
          Fk.setUint32(Ik + gI.w.PresentAt, Tk, !0), Fk.setUint8(Ik + gI.w.FlagsAt, ik)
        }(kk.earth, tk, Xk) : tk.setUint16(Xk, kk.set, !0)
      }));
      let Zk = qk;
      for (const jk of yk) Lk[Zk] = jk.length, Lk.set(jk, Zk + 1), Zk += 1 + jk.length;
      return {
        payload: Lk,
        sets: Fk,
        leftOut: lk
      }
    }

    function Fa(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const Fk = kk;
      if ("earth" === Fk.type) return kk;
      return "custom" === Fk.type && ["px", "py", "pz", "nx", "ny", "nz"].every((kk => {
        const Ik = Fk[kk];
        return "string" === typeof Ik && Ik.length > 0
      })) ? kk : null
    }
    const Ia = [
        ["inclination", gI.w.Inclination],
        ["turbidity", gI.w.Turbidity],
        ["luminance", gI.w.Luminance],
        ["rayleigh", gI.w.Rayleigh],
        ["mieCoefficient", gI.w.MieCoefficient],
        ["mieDirectionalG", gI.w.MieDirectionalG],
        ["distance", gI.w.Distance],
        ["azimuth", gI.w.Azimuth]
      ],
      Xa = [
        ["sunPosition", gI.w.SunPosition, gI.w.SunPositionAt],
        ["up", gI.w.Up, gI.w.UpAt],
        ["vertexTint", gI.w.VertexTint, gI.w.VertexTintAt]
      ],
      Ta = [
        ["xCameraOffset", gI.w.CameraOffsetX],
        ["yCameraOffset", gI.w.CameraOffsetY],
        ["zCameraOffset", gI.w.CameraOffsetZ]
      ],
      ia = [
        ["useSunPosition", gI.w.UseSunPosition],
        ["dithering", gI.w.Dithering],
        ["infiniteDistance", gI.w.InfiniteDistance]
      ];

    function ya(kk, Fk, Ik) {
      const Xk = new aa({
        writeCmd: kk,
        warn: Fk,
        followPack: la(Ik, Fk)
      });
      return Xk.start(), Xk
    }

    function la(kk, Fk) {
      return Ik => {
        let Xk = () => {};
        const Tk = kk((kk => {
          Xk(), Xk = () => {}, null !== kk ? Xk = kk.subscribe((kk => {
            Ik(function(kk, Fk, Ik) {
              if ("object" !== typeof kk || null === kk) return null;
              const Xk = kk.skyBoxes;
              if ("object" !== typeof Xk || null === Xk) return null;
              if ("player" === Fk) return Xk;
              return Object.fromEntries(Object.entries(Xk).filter((kk => {
                let [Fk, Xk] = kk;
                return !! function(kk) {
                  if ("object" !== typeof kk || null === kk) return !1;
                  return "earth" === kk.type || Object.entries(kk).every((kk => {
                    let [Fk, Ik] = kk;
                    return "type" === Fk || ("" === (Xk = Ik) || null !== function(kk) {
                      var Fk, Ik, Xk;
                      return "string" !== typeof kk ? null : null !== (Fk = null === (Ik = qa.exec(kk)) || void 0 === Ik || null === (Xk = Ik.groups) || void 0 === Xk ? void 0 : Xk.base64) && void 0 !== Fk ? Fk : null
                    }(Xk));
                    var Xk
                  }))
                }(Xk) || (Ik(`Ignoring texture pack skybox ${Fk}, whose faces are not all data URLs`, null), !1)
              })))
            }(kk.pack, null === kk.gameSource ? "player" : "customGame", Fk))
          })) : Ik(null)
        }));
        return () => {
          Tk(), Xk()
        }
      }
    }
    class aa {
      constructor(kk) {
        var Fk, Ik, Xk;
        this.host = kk, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.ee = !1, this.wait = null !== (Fk = kk.wait) && void 0 !== Fk ? Fk : (kk, Fk) => {
          setTimeout(Fk, kk)
        }, this.loader = new fl({
          loadImage: null !== (Ik = kk.loadImage) && void 0 !== Ik ? Ik : gl,
          mIk: null !== (Xk = kk.mIk) && void 0 !== Xk ? Xk : Cl.p,
          sendReady: kk => {
            this.queue.push({
              kind: gI.lc.SkyImagesReady,
              payload: kk
            })
          },
          onLoadFailed: (Fk, Ik, Xk) => {
            kk.warn(`sky image set ${Fk} (${Ik}) didn't load: the last sky stays`, Xk)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Nl.c, (() => {
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
        this.ee = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(kk) {
        if (this.ee) return;
        const Fk = ka(kk);
        if (!(this.written && (Ik = this.written, Xk = Fk, Ik.payload.length === Xk.payload.length && Ik.payload.every(((kk, Fk) => kk === Xk.payload[Fk])) && Ik.sets.length === Xk.sets.length && Ik.sets.every(((kk, Fk) => {
            const Ik = Xk.sets[Fk];
            return kk.orientation === Ik.orientation && kk.urls.length === Ik.urls.length && kk.urls.every(((kk, Fk) => kk === Ik.urls[Fk]))
          }))))) {
          var Ik, Xk;
          for (const kk of Fk.leftOut) this.host.warn(kk, null);
          this.written = Fk, this.loader.reset(Fk.sets), this.queue = this.queue.filter((kk => kk.kind !== gI.lc.SkyImagesReady)), this.queue.push({
            kind: gI.lc.SkyTable,
            payload: Fk.payload
          })
        }
      }
    }
    const qa = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var La = Ik(2722),
      ta = Ik(2913),
      Za = Ik(275),
      ja = Ik(170),
      ea = Ik(2724),
      wa = Ik(2732),
      Ha = Ik(253),
      Ja = Ik(260),
      xa = Ik(2822),
      Pa = Ik(2839),
      Ka = Ik(2845),
      Qa = Ik(111),
      sa = Ik(309),
      Va = Ik(40834);
    class za {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, WT.l)(PX.H, (kk => {
          this.onReply((0, cT.e)(PX.H, kk), performance.now())
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
    class Sa {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(kk, Fk, Ik, Xk) {
        const Tk = kk - this.sampled >>> 0,
          ik = Fk - this.timed >>> 0,
          yk = Ik - this.frameUs >>> 0,
          lk = this.primed;
        return this.sampled = kk, this.timed = Fk, this.frameUs = Ik, this.primed = !0, !(!lk || Tk > 64 || ik > 64) && (Xk && yk <= 1e6 * ik && (this.windowTimed += ik, this.windowUs += yk), Xk && Tk > 0)
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
    const oa = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class va {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(kk, Fk) {
        const Ik = Math.min(4096, this.count + Fk);
        this.samples.fill(kk, this.count, Ik), this.count = Ik
      }
      clear() {
        this.count = 0
      }
      take() {
        const kk = this.count;
        if (this.count = 0, kk < 30) return oa;
        const Fk = this.samples.subarray(0, kk).sort(),
          Ik = Ik => Fk[Math.min(kk - 1, Math.floor(Ik * kk))];
        return {
          lagP50Ms: Ik(.5),
          lagP90Ms: Ik(.9)
        }
      }
    }
    class Ea {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new va
      }
      onFrame(kk, Fk) {
        const Ik = kk.headerWord(gI.F.Pacing),
          Xk = kk.headerWord(gI.F.PacingLagUs),
          Tk = (Ik >>> gI.cb.LagsShift) - (this.word >>> gI.cb.LagsShift) & gI.cb.CountMask,
          ik = Tk > 0 ? (Xk - this.lagUs >>> 0) / Tk / 1e3 : 0,
          yk = this.primed && Tk <= 64 && ik <= 6e4;
        this.word = Ik, this.lagUs = Xk, this.primed = !0, yk && Fk && Tk > 0 && 0 !== (Ik & gI.cb.Defaulted) && this.lags.add(ik, Tk)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(kk) {
        return kk ? this.lags.take() : (this.lags.clear(), oa)
      }
    }
    var Oa = Ik(297);

    function na() {
      return Date.now() - performance.now()
    }
    class Ga {
      constructor() {
        this.rafs = 0, this.eq = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = na(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, Oa.f)(), this.onBlur = () => {
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
        (0 === this.eq || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.eq++, this.heldAtRaf = this.rafs
      }
      words(kk) {
        const Fk = kk ? this.rafs - 1 : this.rafs;
        return function(kk) {
          let Fk = 0 === kk.rafs ? "raf:none" : "raf:some";
          return kk.eq > 0 && (Fk += " pace:held"), kk.heldRunMs > 1e4 && (Fk += " pace:stalled"), kk.blurred && (Fk += " blur"), kk.resumed && (Fk += " resumed"), kk.embedded && (Fk += " embedded"), kk.clockGainMs > 2e3 && (Fk += " clockjump"), Fk
        }({
          clockGainMs: na() - this.startClockOffsetMs,
          rafs: Fk,
          eq: this.eq,
          heldRunMs: this.eq > 0 && this.heldAtRaf === Fk ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(kk) {
        this.rafs = 0, this.eq = 0, this.heldAtRaf = -1, this.startMs = kk, this.startClockOffsetMs = na(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var pa = Ik(34104),
      ua = Ik(2830),
      ba = Ik(40896),
      Ra = Ik(34095),
      Ua = Ik(2741),
      Ca = Ik(2835);
    const Na = {
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

    function ca(kk) {
      return new Wa(kk)
    }
    class Wa {
      constructor(kk) {
        this.shell = kk, this.tracker = new wa.d, this.gpu = new Sa, this.pacing = new Ea, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new za, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new Ga, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, pa.d)(kk.backend, kk.canvas, kk.adapterVendor), this.tracker.start((() => !kk.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Ua.d)("wasm", (() => {
          const {
            n: Fk,
            sampleCount: Ik
          } = (0, ba.d)();
          return `${kk.backend}, quality steps aim at up to ${Ca.e.target.maxFps} fps, pixel n ${Fk}, msaa ${Ik}`
        }), (Fk => {
          Fk.setLoadCounts(kk.readLoadCounts), this.frameDebug = Fk
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(kk) {
        var Fk;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(kk), null === (Fk = this.frameDebug) || void 0 === Fk || Fk.animationFrame()
      }
      sendsWent(kk, Fk, Ik) {
        this.ping.onFrame(kk.headerWord(gI.F.PingSent), Fk), this.sendsStartMs = Fk, this.sendsEndMs = Ik
      }
      frameRan(kk, Fk, Ik, Xk) {
        var Tk;
        this.ping.onFrame(kk.headerWord(gI.F.PingSent), Ik);
        const ik = this.tracker;
        this.pacing.onFrame(kk, ik.isSampling());
        const yk = kk.headerWord(gI.F.TickUs) / 1e3 + (0, TX.L)();
        var lk;
        (ik.VJ(yk), null === (Tk = this.frameDebug) || void 0 === Tk || Tk.wasmFrame(kk, Fk, Ik, Xk, ik.isSampling(), yk), null !== this.game) && (null === (lk = this.frameDebug) || void 0 === lk || lk.inGame());
        const ak = this.sendsStartMs >= Fk ? this.sendsEndMs - this.sendsStartMs : 0,
          qk = Math.max(0, Ik - Fk - yk - ak);
        if ("drawn" !== Xk) return void("paced" === Xk ? (this.pacedCpuMs += qk, this.stallGap.paced()) : "skipped" === Xk && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(Fk, !0), ik.onFrameStart(Fk);
        this.gpu.onFrame(kk.headerWord(gI.F.GpuSampled), kk.headerWord(gI.F.GpuTimed), kk.headerWord(gI.F.GpuFrameUs), ik.isSampling()) && ik.onGpuSampleStarted(), ik.onFrameCpu(qk + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Fk)
      }
      framePaced() {
        var kk;
        this.stallGap.paced(), null === (kk = this.frameDebug) || void 0 === kk || kk.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const kk of this.timers) clearInterval(kk);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const kk = this.shell.joinedGame();
        if (kk !== this.game) {
          var Fk;
          if (this.game = kk, null !== kk) null === (Fk = this.frameDebug) || void 0 === Fk || Fk.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== kk
      }
      checkMainStall(kk, Fk) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const Ik = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          Xk = this.lastDrawnMs < 0 ? 0 : kk - this.lastDrawnMs;
        this.lastDrawnMs = kk;
        const Tk = !this.stallPending && Xk > 5e3,
          ik = Tk ? this.stallGap.words(Fk) : "";
        this.stallGap.restart(kk), this.stallPending || (Tk ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(Xk, Ik.blockingSinceMark(), ik)
        }), 0)) : Ik.markFrame(kk))
      }
      countFpsFrame(kk) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = kk
        }
        this.fpsFrames++;
        const Fk = kk - this.fpsSpanStartMs;
        if (!(Fk < Ka.c)) {
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
            refreshHz: Ik,
            cpuBottleneck: Tk,
            frameIntervalCv: ik,
            ...yk
          } = this.tracker.snapshotAndReset(),
          lk = this.shell.inGame(),
          ak = lk && this.inGameAtLastFlush,
          qk = ak ? yk : (0, ea.d)(yk),
          Lk = this.pacing.snapshotAndReset(ak);
        if (this.inGameAtLastFlush = lk, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !kk) return;
        const tk = performance.now(),
          jk = (0, Pa.u)((0, Pa.r)(tk), this.unsentPage),
          wk = function(kk, Fk, Ik, Tk, ik, yk, lk, ak) {
            var qk, Lk, tk, Zk, jk;
            const ek = {},
              {
                canvas: wk
              } = kk,
              Hk = (0, xa.j)({
                refreshHz: Fk.refreshHz,
                msaa: kk.msaa(),
                autoMsaaOff: (0, Ra.e)()
              });
            for (const Jk of (0, ta.g)()) {
              const xk = Jk.name;
              let Pk;
              if ((0, Za.w)(xk)) Pk = (0, Pa.b)(xk);
              else if ((0, Pa.i)(xk)) Pk = ak[xk];
              else if ((0, xa.k)(xk)) Pk = Hk[xk];
              else switch (xk) {
                case "fps":
                  Pk = Tk;
                  break;
                case "Ll":
                  Pk = ik;
                  break;
                case "wl":
                  Pk = (0, ua.E)((0, ba.d)().n);
                  break;
                case "Hl":
                  Pk = Math.max(wk.width, wk.height);
                  break;
                case "Jl":
                  Pk = Math.min(wk.width, wk.height);
                  break;
                case "xl":
                  Pk = navigator.hardwareConcurrency || null;
                  break;
                case "Pl":
                  Pk = (0, mT.getWebGpuSupported)();
                  break;
                case "Kl":
                  Pk = null === kk.fallbackReason ? null : Na[kk.fallbackReason];
                  break;
                case "Ql":
                  Pk = Fk.cpuFrameMs;
                  break;
                case "sl":
                  Pk = Fk.refreshHz;
                  break;
                case "Vl":
                  Pk = Fk.cpuBottleneck;
                  break;
                case "zl":
                  Pk = Fk.frameIntervalCv;
                  break;
                case "Sl":
                  Pk = Fk.frameMs;
                  break;
                case "ol":
                  Pk = Fk.tickMs;
                  break;
                case "nl":
                  Pk = Fk.mainBusyShare;
                  break;
                case "Gl":
                  Pk = Fk.mainProbeDelayMs;
                  break;
                case "vl":
                  Pk = Fk.longAnimationFramesPerMin;
                  break;
                case "El":
                  Pk = Fk.longAnimationFrameTimeShare;
                  break;
                case "Ol":
                  Pk = Fk.longAnimationFrameScriptShare;
                  break;
                case "pl":
                  Pk = Fk.gpuPassMs;
                  break;
                case "ul":
                  Pk = Fk.gpuSubmitToDoneMs;
                  break;
                case "bl":
                  Pk = Ik.lagP50Ms;
                  break;
                case "Rl":
                  Pk = Ik.lagP90Ms;
                  break;
                case "ml":
                  Pk = (0, La.l)(yk);
                  break;
                case "el":
                  Pk = lk;
                  break;
                case "Ul":
                case "Cl":
                case "Nl":
                case "cl":
                case "Wl":
                case "fl":
                case "Bl":
                case "dl":
                case "Yl":
                case "Al":
                case "gl":
                case "hl":
                case "rl":
                case "Dl":
                case "Ml":
                  Pk = null;
                  break;
                case "ea":
                  Pk = (0, mT.getPlatformType)();
                  break;
                case "Ha":
                  Pk = (0, mT.getGpuVendor)();
                  break;
                case "Ja":
                  Pk = Va.e[kk.backend];
                  break;
                case "xa":
                  Pk = (0, Qa.e)();
                  break;
                case "Pa":
                  Pk = (0, mT.getOperatingSystem)();
                  break;
                case "Ka":
                  Pk = (0, mT.getTrafficSource)();
                  break;
                case "Qa":
                  Pk = null !== (qk = Xk.d.get("gameEntrySource")) && void 0 !== qk ? qk : ja.d;
                  break;
                case "sa":
                  Pk = null !== (Lk = Fk.frameLimiter) && void 0 !== Lk ? Lk : ja.d;
                  break;
                case "Va":
                  Pk = (0, Ha.h)();
                  break;
                case "za":
                  Pk = null !== (tk = (0, Ja.d)()) && void 0 !== tk ? tk : ja.d;
                  break;
                case "Sa":
                  Pk = (0, Ha.c)(wk.width, wk.height);
                  break;
                case "oa":
                  Pk = (0, ta.j)(-(new Date).getTimezoneOffset());
                  break;
                case "Oa":
                  Pk = null !== (Zk = kk.fallbackReason) && void 0 !== Zk ? Zk : ja.d;
                  break;
                case "ua":
                  Pk = "ready";
                  break;
                case "ba":
                  Pk = (0, mT.getSoftwareRenderer)();
                  break;
                case "Ea":
                  Pk = null !== kk.shaderPackReach() ? "true" : "false";
                  break;
                case "Ra":
                  Pk = null !== (jk = kk.shaderPackReach()) && void 0 !== jk && jk.sceneDepth ? "true" : "false";
                  break;
                case "Ua": {
                  const Fk = kk.shaderPackReach();
                  Pk = null !== Fk && void 0 !== Fk && Fk.sunShadow ? "all" : null !== Fk && void 0 !== Fk && Fk.airShadow ? "air" : "none";
                  break
                }
                case "Ca":
                  Pk = sa.C;
                  break;
                case "va": {
                  const Fk = kk.Nw();
                  Pk = null === Fk ? ja.d : String(Fk);
                  break
                }
                case "na":
                case "Ga":
                  Pk = ja.d;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${xk}`)
              }
              if (void 0 === Pk) throw new Error(`Metric ${xk} has no value`);
              ek[xk] = Pk
            }
            return ek
          }(this.shell, {
            cpuFrameMs: Fk,
            refreshHz: Ik,
            cpuBottleneck: Tk,
            frameIntervalCv: ik,
            ...qk
          }, Lk, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), jk);
        if (! function(kk, Fk, Ik) {
            return (0, YF.d)(), kk(ek.n.Send, Fk, Ik)
          }(this.shell.writeCmd, Zk.od, function(kk) {
            const Fk = (0, Uk.c)((0, mF.i)(kk)),
              Ik = new Uint8Array(ek.Zd.BYTES + Fk.length);
            return new DataView(Ik.buffer).setUint16(0, mF.e.AnalyticsUpdate, !0), Ik.set(Fk, ek.Zd.BYTES), Ik
          }(wk))) return this.unsentPage = jk, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, La.i), (0, Pa.o)(wk, "wasm", tk)
      }
    }
    var fa = Ik(39603);

    function Ba(kk, Fk, Ik) {
      const Xk = new Map;
      return (0, fa.d)(((kk, Ik, Xk) => Fk.iL(kk, Ik, Xk)), ((Fk, Ik, Tk) => {
        const ik = `${Fk},${Ik},${Tk}`;
        return Xk.has(ik) || Xk.set(ik, (0, NF.e)(kk, Fk, Ik, Tk)), Xk.get(ik)
      }), Ik)
    }
    var da = Ik(39610),
      Ya = Ik(40891);

    function Aa(kk) {
      const Fk = null !== kk && 0 !== (ek.y.playerFlags(kk.api.apiView, 0) & ek.Ed.CursorAim);
      Fk !== (0, Ya.n)() && (0, Ya.I)(Fk, null !== kk)
    }

    function ga(kk) {
      return (0, xX.d)(PX.B, kk)
    }
    var ma = Ik(41047);
    const ha = new ik.i((kk => Ik(42608)(`./${kk}/${kk}Client`)));
    let ra = null,
      Da = null;
    async function Ma(kk) {
      ra ??= Ik.e(27).then((() => Ik(39149))).then((kk => {
        Da = kk.createDefaultClientPlugins
      }), (kk => {
        throw ra = null, kk
      })), await Promise.all([ha.load(kk), ra])
    }

    function kq(kk) {
      kk.load(new RF(YX, new mX))
    }
    let Fq = !1;
    const Iq = new WeakMap;

    function Xq(kk) {
      try {
        kk()
      } catch (Fk) {
        console.error("[bloxd-wasm-client] a session-end step failed", Fk)
      }
    }

    function Tq(kk, Fk) {
      ! function() {
        var kk, Fk;
        fX.Howler.volume();
        const Ik = fX.Howler;
        null === (kk = Ik._autoResume) || void 0 === kk || kk.call(Ik), null === (Fk = Ik._autoSuspend) || void 0 === Fk || Fk.call(Ik)
      }(), Fk.audio.prepare();
      const Ik = new Kk(Fk.core, Fk.memory, Fk.audio);
      let ik;
      try {
        ik = new HT(Ik, Fk.options)
      } catch (Zk) {
        return kk.crash(xT.t, Zk), null
      }(0, ak.e)(JT(Ik, ik));
      const Lk = new ol({
        running: kk,
        api: Ik,
        core: Fk.core,
        memory: Fk.memory,
        staleOr: Fk.staleOr,
        reportFault: Fk.reportReplayFault,
        options: Fk.options,
        sessionInfo: Fk.sessionInfo,
        replayShaderPack: Fk.replayShaderPack
      });
      (0, TX.A)();
      const tk = new RX({
        api: Ik,
        tables: ik,
        sessionInfo: Fk.sessionInfo,
        gameFactory: kk => ha.loadedFactory(kk),
        defaultPlugins: (kk, Fk, Ik, Xk) => {
          if (null === Da) throw new Error("The default plugins started before they loaded");
          return Da(kk, Fk, Ik, Xk)
        },
        serverOptions: Fk.options,
        onNetEvent: kk => {
          Lk.netEvent(kk), Fk.onNetEvent(kk)
        },
        setLocalOptions: Fk => {
          El(kk, {
            changes: Fk,
            reset: !1
          })
        },
        playSound: (kk, Ik, Xk, Tk, ik, yk, lk) => Fk.audio.playGame(kk, Ik, Xk, Tk, ik, yk, lk),
        preloadSounds: kk => {
          Fk.audio.preload(function(kk) {
            const Fk = [];
            for (const Ik of kk) {
              const kk = uF(Ik);
              kk >= 0 && Fk.push(PF[kk])
            }
            return Fk
          }(kk))
        },
        onSessionEnd: () => {
          Xq(Tk.m), Xq(IT), Xq((() => {
            Xk.d.set({
              openInGameMenuName: null
            })
          })), Xq((() => {
            Fk.audio.endSession()
          }))
        },
        beforeWrite: Fk.beforeWrite,
        beforeOp: Fk.beforeOp,
        cameraScreen: FT,
        showCameraFacing: XT,
        onEventOverflow: Fk.onEventOverflow,
        screenBandY: lk.j,
        replayEntities: Lk.entityHooks,
        hasPackModel: Fk.hasPackModel
      });
      return tk.attach(kk), Iq.set(tk, Lk), cX(tk.items, Fk.audio),
        function(kk) {
          kk.setClientFreeCameraGrant("isDev", !1);
          const Fk = Fk => {
            kk.setClientFreeCameraGrant("hasDeveloperRank", Fk.playerHasRank("developer"))
          };
          (0, yk.i)("userContextUpdated", Fk)
        }(tk), Fq || (Fq = !0, (0, yk.i)("appManagerUpdated|openInGameMenuName", (kk => {
          !kk && (0, qk.j)().includes(qk.c) && (0, qk.l)(qk.c)
        }))), tk
    }

    function iq(kk) {
      try {
        kk.closeGame()
      } finally {
        var Fk;
        null === (Fk = Iq.get(kk)) || void 0 === Fk || Fk.stop(), Iq.delete(kk)
      }
    }
  },
  42608: (kk, Fk, Ik) => {
    var Xk = {
      "./bedwars/bedwarsClient": [39277, 9],
      "./bridgeBattle/bridgeBattleClient": [39283, 10],
      "./buildAFactory2/buildAFactory2Client": [38483, 75, 74, 73, 225, 243, 11],
      "./classic/classicClient": [39288, 12],
      "./clutch/clutchClient": [39294, 13],
      "./containmentBreach/containmentBreachClient": [39299, 14],
      "./cooking/cookingClient": [39432, 15],
      "./defusal/defusalClient": [39438, 16],
      "./frontline/frontlineClient": [39445, 75, 74, 73, 17],
      "./goalRush/goalRushClient": [39450, 18],
      "./luckyBedwars/luckyBedwarsClient": [39453, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39456, 20],
      "./oneBlock/oneBlockClient": [39458, 21],
      "./plots/plotsClient": [39460, 241, 248, 22],
      "./pvpCiv/pvpCivClient": [39536, 23],
      "./skyIslands/skyIslandsClient": [39543, 24],
      "./skyblock/skyblockClient": [38518, 75, 225, 190, 25],
      "./tsunami/tsunamiClient": [39547, 26]
    };

    function Tk(kk) {
      if (!Ik.o(Xk, kk)) return Promise.resolve().then((() => {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }));
      var Fk = Xk[kk],
        Tk = Fk[0];
      return Promise.all(Fk.slice(1).map(Ik.e)).then((() => Ik(Tk)))
    }
    Tk.keys = () => Object.keys(Xk), Tk.id = 42608, kk.exports = Tk
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);