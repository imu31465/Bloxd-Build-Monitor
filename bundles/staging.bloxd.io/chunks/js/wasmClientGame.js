export const id = 56;
export const ids = [56];
export const modules = {
  42201: (kk, ek, ik) => {
    var Dk = {
      "./bedwars/bedwarsClient": [38832, 9],
      "./bridgeBattle/bridgeBattleClient": [38838, 10],
      "./buildAFactory2/buildAFactory2Client": [38073, 75, 74, 73, 223, 241, 11],
      "./classic/classicClient": [38847, 12],
      "./clutch/clutchClient": [38850, 13],
      "./containmentBreach/containmentBreachClient": [38859, 14],
      "./cooking/cookingClient": [38993, 15],
      "./defusal/defusalClient": [38996, 16],
      "./frontline/frontlineClient": [39003, 75, 74, 73, 17],
      "./goalRush/goalRushClient": [39006, 18],
      "./luckyBedwars/luckyBedwarsClient": [39009, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39012, 20],
      "./oneBlock/oneBlockClient": [39018, 21],
      "./plots/plotsClient": [39021, 239, 244, 22],
      "./pvpCiv/pvpCivClient": [39102, 23],
      "./skyIslands/skyIslandsClient": [39105, 24],
      "./skyblock/skyblockClient": [38100, 75, 223, 192, 25],
      "./tsunami/tsunamiClient": [39109, 26]
    };

    function fk(kk) {
      if (!ik.o(Dk, kk)) return Promise.resolve().then((() => {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }));
      var ek = Dk[kk],
        fk = ek[0];
      return Promise.all(ek.slice(1).map(ik.e)).then((() => ik(fk)))
    }
    fk.keys = () => Object.keys(Dk), fk.id = 42201, kk.exports = fk
  },
  38606: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    var Dk = ik(26);

    function fk(kk) {
      return "refetchCode" === kk || "devDownloadJson" === kk || kk.startsWith("Plugin")
    }

    function Sk(kk, ek) {
      "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([ik.e(107), ik.e(108), ik.e(103), ik.e(105), ik.e(215)]).then((() => ik(41313))).then((ik => {
        let {
          runClientGameMessage: Dk
        } = ik;
        Dk(kk, ek)
      })).catch((ek => {
        console.error(`Game message ${kk} failed`, ek)
      })) : Dk.j.tm("showPetUi", ek) : Dk.j.tm("refetchCode")
    }
  },
  42183: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      f: () => fk
    });
    const Dk = ["recording", "freecam", "keyframe"];

    function fk() {
      const kk = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(kk[1]) << 32n | BigInt(kk[0])
    }
  },
  33701: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      h: () => Pk
    });
    var Dk = ik(22);
    const fk = 24,
      Sk = "farNametags",
      bk = 1e5;

    function rk() {
      var kk;
      return null === (kk = Dk.b.get("showDistantNametags")) || void 0 === kk || kk
    }

    function Pk() {
      var kk;
      return null !== (kk = function() {
        const kk = new URLSearchParams(window.location.search).get(Sk),
          ek = null === kk || "" === kk ? NaN : Number(kk);
        return Number.isFinite(ek) && ek >= 0 ? Math.min(ek, bk) : null
      }()) && void 0 !== kk ? kk : rk() ? 0 : fk
    }
  },
  42177: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      blockIdOf: () => oP.d,
      clearWasmCameraScreen: () => Sf,
      creativeItemIds: () => SD.creativeItemIds,
      decodeMapSettings: () => gP,
      drainTextRerasters: () => ar.c,
      enchantmentPerksOf: () => SD.enchantmentPerksOf,
      endGameHost: () => bm,
      followCursorAim: () => OP,
      followMenuPrefs: () => iS,
      loadAudio: () => em,
      loadClientGame: () => km,
      loadTextIcons: () => ar.f,
      rasterText: () => hr.e,
      readBoardToEdit: () => TP,
      readDrawCensus: () => GP.f,
      setTextHost: () => ar.l,
      setTextLocalPlayer: () => ar.n,
      showInCreativeInvenOf: () => SD.showInCreativeInvenOf,
      startGameHost: () => Sm,
      startShellAnalytics: () => XP,
      startSkyFeed: () => rP,
      textChanged: () => ar.s,
      warmText: () => hr.i,
      wasmCameraScreen: () => ff
    });
    ik(36030);
    var Dk = ik(22),
      fk = ik(36396),
      Sk = ik(38734),
      bk = ik(26),
      rk = ik(3365),
      Pk = ik(36391),
      mk = ik(1273),
      Mk = ik(585),
      Kk = ik(37818),
      xk = ik(4735),
      nk = ik(40221),
      Uk = ik(40157);
    const Hk = Uk.yb / 4,
      wk = Uk.p.PlaySound,
      lk = Uk.p.SoundReset,
      pk = xk.ib.ReplayFailed,
      yk = xk.ib.RecorderEvent;
    class Yk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = kk, this.memory = ek, this.audio = ik, this.serverIds = new Int32Array(256).fill(Uk.Sc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Uk.t.BYTES)), this.renderPtr = 0, this.vK = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new Uk.N(kk, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.GDk(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(kk, ek) {
        const ik = this.eventView();
        return new Uint8Array(ik.buffer, ik.byteOffset + kk, ek)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Uk.t.localId(this.apiView, 0)
      }
      localDeaths() {
        return Uk.t.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const kk = this.apiView,
          ek = Uk.t.entRenderPtr(kk, 0),
          ik = Uk.t.entVisPtr(kk, 0),
          Dk = Uk.t.entCapacity(kk, 0);
        if (ek !== this.renderPtr || ik !== this.visPtr || Dk !== this.vK || this.renderBuffer !== this.buffer) {
          this.renderPtr = ek, this.visPtr = ik, this.vK = Dk, this.renderBuffer = this.buffer;
          const kk = this.memoryView(Float32Array, ek, Dk * Hk, "the render array"),
            fk = this.memoryView(Uint8Array, ik, Dk, "the visibility array");
          this.renderCapacity = kk && fk ? Dk : 0, this.render = kk && fk ? kk : new Float32Array(0), this.vis = kk && fk ? fk : new Uint8Array(0)
        }
      }
      memoryView(kk, ek, ik, Dk) {
        try {
          return (0, nk.n)(kk, this.memory().buffer, ek, ik, Dk)
        } catch (fk) {
          return this.keepCorruption(fk), null
        }
      }
      memoryData(kk, ek, ik, Dk) {
        try {
          return (0, nk.g)(this.memory().buffer, kk, ek, ik, Dk)
        } catch (fk) {
          return this.keepCorruption(fk), null
        }
      }
      reportCorruption(kk) {
        this.keepCorruption(new nk.c(kk))
      }
      keepCorruption(kk) {
        if (!(kk instanceof nk.c)) throw kk;
        this.corruption ??= kk
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(kk, ek, ik) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Dk,
          len: fk
        } = kk;
        this.eventsPtr = Dk, this.eventsLen = fk, this.eventsBuffer = null;
        const Sk = this.eventView();
        for (let mk = 0; mk < fk;) {
          const kk = Sk.getUint32(mk, !0),
            ik = 65535 & kk,
            Dk = kk >>> 16,
            fk = mk + xk.eb;
          if (ik === Uk.p.EntitySpawned) {
            var bk;
            if (Dk !== Uk.Db.BYTES) throw sk(ik, mk, Dk);
            const kk = Uk.Db.serverId(Sk, fk);
            this.spawned(kk, Uk.Db.index(Sk, fk), Uk.Db.kind(Sk, fk)), null === (bk = ek.entityAdded) || void 0 === bk || bk.call(ek, kk)
          } else if ((ik === Uk.p.ChunkSlot || ik === Uk.p.EntityInfoChanged) && !(0, Uk.ae)(ik, Sk, fk, Dk, ek)) throw sk(ik, mk, Dk);
          mk = fk + (0, xk.Ie)(Dk)
        }
        try {
          var rk;
          null === (rk = ek.afterPrescan) || void 0 === rk || rk.call(ek), this.throwCorruption(), !ik() && this.dispatch(kk, ek, ik) && (this.throwCorruption(), this.applyListener(), ek.afterWalk(kk.kind)), this.throwCorruption()
        } catch (Pk) {
          throw Pk instanceof nk.c && (this.corruption ??= Pk), Pk
        } finally {
          ik() || null !== this.corruption || this.applyDespawns(fk, ek)
        }
      }
      applyDespawns(kk, ek) {
        const ik = this.eventView();
        for (let fk = 0; fk < kk;) {
          const kk = ik.getUint32(fk, !0),
            Sk = fk + xk.eb;
          if ((65535 & kk) === Uk.p.EntityDespawned && kk >>> 16 === Uk.Db.BYTES) {
            const kk = Uk.Db.serverId(ik, Sk);
            var Dk;
            if (this.despawned(kk, Uk.Db.index(ik, Sk))) null === (Dk = ek.entityRemoved) || void 0 === Dk || Dk.call(ek, kk)
          }
          fk = Sk + (0, xk.Ie)(kk >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(kk, ek, ik) {
        const {
          len: Dk,
          net: fk,
          netOffsets: Sk
        } = kk;
        let bk = this.eventView(),
          rk = 0;
        for (let Ck = 0; Ck < Dk;) {
          const kk = bk.getUint32(Ck, !0),
            Dk = 65535 & kk,
            Ak = kk >>> 16,
            dk = Ck + xk.eb;
          let Vk = !1;
          if (rk < fk.length && Sk[rk] === Ck) ek.netEvent(fk[rk]), rk++, Vk = !0;
          else if (Dk === xk.ib.LocalPlayerBound) {
            var Pk;
            if (Ak !== xk.Tb) throw sk(Dk, Ck, Ak);
            null === (Pk = ek.localPlayerBound) || void 0 === Pk || Pk.call(ek, bk.getInt32(dk, !0)), Vk = !0
          } else if (Dk === xk.ib.LocalHurt) {
            var mk;
            if (Ak !== xk.Rb) throw sk(Dk, Ck, Ak);
            null === (mk = ek.localHurt) || void 0 === mk || mk.call(ek, bk.getInt32(dk, !0), bk.getFloat32(dk + 4, !0), bk.getUint32(dk + 8, !0)), Vk = !0
          } else if (Dk === xk.ib.AttackHit) {
            var Mk;
            if (Ak !== xk.d) throw sk(Dk, Ck, Ak);
            const kk = bk.getFloat32(dk, !0),
              ik = bk.getFloat32(dk + 4, !0),
              fk = bk.getFloat32(dk + 8, !0),
              Sk = bk.getUint32(dk + 12, !0);
            null === (Mk = ek.attackHit) || void 0 === Mk || Mk.call(ek, kk, ik, fk, 0 !== (Sk & xk.n.Crit), 0 !== (Sk & xk.n.HitSelf))
          } else if (Dk === xk.ib.PhysicsType) {
            var Kk;
            if (Ak !== xk.vc) throw sk(Dk, Ck, Ak);
            null === (Kk = ek.physicsType) || void 0 === Kk || Kk.call(ek, bk.getUint32(dk, !0), bk.getInt32(dk + 4, !0)), Vk = !0
          } else if (Dk === xk.ib.VehicleEffect) {
            var nk;
            const kk = jk(bk, dk, Ak);
            if (null === kk) throw sk(Dk, Ck, Ak);
            null === (nk = ek.vehicleEffect) || void 0 === nk || nk.call(ek, kk.op, kk.name, kk.icon, kk.level, kk.durationMs), Vk = !0
          } else if (Dk === xk.ib.ZoomChanged) {
            var Hk;
            if (Ak !== xk.je) throw sk(Dk, Ck, Ak);
            null === (Hk = ek.zoomChanged) || void 0 === Hk || Hk.call(ek, bk.getFloat32(dk, !0), bk.getUint8(dk + 4)), Vk = !0
          } else if (Dk === xk.ib.ZoomDisabled) {
            var Yk;
            if (0 !== Ak) throw sk(Dk, Ck, Ak);
            null === (Yk = ek.zoomDisabled) || void 0 === Yk || Yk.call(ek), Vk = !0
          } else if (Dk === xk.ib.GameCamera) {
            var Lk;
            null === (Lk = ek.gameCamera) || void 0 === Lk || Lk.call(ek, new Uint8Array(bk.buffer, bk.byteOffset + dk, Ak).slice()), Vk = !0
          } else if (Dk === Uk.p.ChunkSlot || Dk === Uk.p.EntityInfoChanged);
          else if (Dk >= wk && Dk <= lk) {
            if (this.audio && !this.audio.onAudioEvent(Dk, bk, dk, Ak)) throw sk(Dk, Ck, Ak)
          } else if (Dk >= pk && Dk <= yk) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Dk, bk, dk, Ak)) throw sk(Dk, Ck, Ak);
              Vk = !0
            }
          } else if (Dk >= Uk.gd && Dk <= Uk.hd && Dk !== xk.ib.EnvLighting) {
            if (!(0, Uk.ae)(Dk, bk, dk, Ak, ek)) throw sk(Dk, Ck, Ak);
            Vk = !0
          }
          if (Vk) {
            if (ik()) return !1;
            bk = this.eventView()
          }
          Ck = dk + (0, xk.Ie)(Ak)
        }
        return !ik()
      }
      applyListener() {
        var kk;
        if (!this.audio) return;
        const ek = Uk.t.audioViewPtr(this.apiView, 0),
          ik = this.memory().buffer;
        let Dk = this.audioView;
        (null === (kk = Dk) || void 0 === kk ? void 0 : kk.buffer) === ik && Dk.byteOffset === ek || (Dk = (0, nk.g)(ik, ek, Uk.v.BYTES, 8, "the audio view"), this.audioView = Dk), Dk && this.audio.applyListener(Dk)
      }
      indexOf(kk) {
        return this.indexById.get("number" === typeof kk ? kk : +kk)
      }
      isLocal(kk) {
        return kk !== Uk.Sc && kk === Uk.t.localId(this.apiView, 0)
      }
      vy(kk) {
        const ek = [0, 0, 0];
        return this.readPosition("number" === typeof kk ? kk : +kk, ek) ? ek : null
      }
      readPosition(kk, ek) {
        const ik = this.apiView;
        if (void 0 !== this.indexById.get(kk) && this.isLocal(kk)) {
          for (let kk = 0; kk < 3; kk++) ek[kk] = Uk.t.localPos(ik, 0, kk);
          return !0
        }
        return this.readDrawnPosition(kk, ek)
      }
      readDrawnPosition(kk, ek) {
        const ik = this.apiView,
          Dk = this.indexById.get(kk);
        if (void 0 === Dk || Dk >= this.renderCapacity) return ek[0] = ek[1] = ek[2] = NaN, !1;
        const fk = Dk * Hk;
        for (let Sk = 0; Sk < 3; Sk++) ek[Sk] = this.render[fk + Sk] + Uk.t.origin(ik, 0, Sk);
        return !0
      }
      checkValid(kk) {
        return void 0 !== this.indexOf(kk)
      }
      isAlive(kk) {
        const ek = this.indexOf(kk);
        if (void 0 === ek) return null;
        if (this.ensureViews(), ek >= this.renderCapacity) return null;
        const ik = this.vis[ek];
        return 0 === ik ? null : 0 !== (ik & Uk.Yd.Alive)
      }
      getEntityType(kk) {
        const ek = this.indexOf(kk);
        return void 0 === ek ? this.isLocal("number" === typeof kk ? kk : +kk) ? "Player" : null : Ck(this.kinds[ek])
      }
      spawned(kk, ek, ik) {
        if (ek >= 1048576) throw new nk.c(`entity ${kk} spawned at index ${ek}`);
        this.ensureIndex(ek), this.serverIds[ek] === kk && null !== this.idStr[ek] || (this.idStr[ek] = String(kk)), this.serverIds[ek] = kk, this.kinds[ek] = ik, this.indexById.set(kk, ek)
      }
      despawned(kk, ek) {
        let ik = !1;
        return this.indexById.get(kk) === ek && (this.indexById.delete(kk), ik = !0), ek < this.serverIds.length && this.serverIds[ek] === kk && (this.serverIds[ek] = Uk.Sc, this.kinds[ek] = 0, this.idStr[ek] = null), ik
      }
      ensureIndex(kk) {
        const ek = this.serverIds.length;
        if (kk < ek) return;
        let ik = 2 * ek;
        for (; ik <= kk;) ik *= 2;
        const Dk = new Int32Array(ik).fill(Uk.Sc);
        Dk.set(this.serverIds), this.serverIds = Dk;
        const fk = new Uint16Array(ik);
        fk.set(this.kinds), this.kinds = fk;
        for (let Sk = ek; Sk < ik; Sk++) this.idStr.push(null)
      }
      eventView() {
        const kk = this.memory().buffer;
        return kk !== this.eventsBuffer && (this.eventsBuffer = kk, this.events = new DataView(kk, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const kk = this.memory().buffer;
        this.buffer = kk, this.viewPtr < 0 && (this.viewPtr = this.core.NDk()), this.view = new DataView(kk, this.viewPtr, Uk.t.BYTES), this.rereadDirectory()
      }
    }

    function Lk(kk) {
      return kk >>> Uk.c === Uk.s.Item
    }

    function Ck(kk) {
      var ek, ik;
      const Dk = kk & Uk.e;
      switch (kk >>> Uk.c) {
        case Uk.s.Lifeform:
          return null !== (ek = Mk.n[Dk]) && void 0 !== ek ? ek : null;
        case Uk.s.Throwable:
          return null !== (ik = Kk.m[Dk]) && void 0 !== ik ? ik : null;
        case Uk.s.Mesh:
          return "Mesh";
        case Uk.s.Audio:
          return "AudioEntity";
        case Uk.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const Ak = new TextDecoder;

    function jk(kk, ek, ik) {
      if (ik < xk.Rd.HEAD_BYTES) return null;
      const Dk = kk.getUint32(ek, !0),
        fk = kk.getUint32(ek + 20, !0),
        Sk = kk.getUint32(ek + 24, !0),
        bk = xk.Rd.HEAD_BYTES + (0, xk.Ie)(fk);
      if (Dk !== xk.Rd.UPDATE && Dk !== xk.Rd.REMOVE || fk > ik || bk + Sk > ik) return null;
      const rk = (ik, Dk) => Ak.decode(new Uint8Array(kk.buffer, kk.byteOffset + ek + ik, Dk)),
        Pk = kk.getFloat64(ek + 12, !0);
      return {
        op: Dk,
        level: kk.getFloat64(ek + 4, !0),
        durationMs: Number.isNaN(Pk) ? null : Pk,
        name: rk(xk.Rd.HEAD_BYTES, fk),
        icon: rk(bk, Sk)
      }
    }

    function sk(kk, ek, ik) {
      return new nk.c(`event ${kk} at ${ek} of ${ik} bytes`)
    }
    var dk = ik(314),
      Vk = ik(1207),
      Fk = ik(38606),
      uk = ik(1905),
      qk = ik(40599),
      Ik = ik(1850),
      zk = ik(38752),
      Qk = ik(38773),
      vk = ik(38758),
      Ek = ik(40201),
      hk = ik(2395),
      ak = ik(38745),
      Wk = ik(38764);
    const tk = Math.max(Uk.mb.BYTES, Uk.db.BYTES, Uk.fb.BYTES);

    function Xk(kk) {
      if (!(0, Wk.e)(kk)) return null;
      const ek = Number(kk);
      return (0 | ek) === ek ? ek : null
    }
    class Bk {
      constructor(kk) {
        this.api = kk, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, ak.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Ai = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = Uk.Sc, this.localName = String(Uk.Sc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.Ai = null;
        const kk = this.api.queries.directorView() >= Uk.mb.BYTES ? this.scratchView() : null;
        null !== kk && (this.defaultFov = (0, Ik.C)(Uk.mb.fov(kk, 0)), this.baseFov = (0, Ik.C)(Uk.mb.baseFov(kk, 0)), this.aspect = Uk.mb.aspect(kk, 0), this.bodyHeading = Uk.mb.bodyHeading(kk, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(kk) {
        this.viewHeading = kk
      }
      get localPlayerId() {
        const kk = Uk.t.localId(this.api.apiView, 0);
        return kk !== this.localId && (this.localId = kk, this.localName = String(kk)), this.localName
      }
      getEntityPosition(kk) {
        return this.readEntity(kk) ? this.entityFeet : null
      }
      getEntityAimPoint(kk) {
        return this.readEntity(kk) ? this.entityAim : null
      }
      getEntityHeading(kk) {
        const ek = Xk(kk);
        if (null === ek) return null;
        const ik = Uk.t.localId(this.api.apiView, 0);
        return ek === ik && ik !== Uk.Sc ? this.viewHeading : this.readEntity(kk) ? this.entityHeading : null
      }
      raycastTerrain(kk, ek, ik) {
        const Dk = this.api.queries.cameraSweep(kk[0], kk[1], kk[2], ek[0], ek[1], ek[2], ik);
        return Dk < ik - 1e-6 ? Dk : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const kk = this.defaultPose;
        kk.fov = this.defaultFov;
        const ek = this.api.queries.directorDefaultPose() >= Uk.db.BYTES ? this.scratchView() : null;
        if (null === ek) return kk;
        for (let ik = 0; ik < 3; ik++) kk.position[ik] = Uk.db.eye(ek, 0, ik);
        return kk.heading = Uk.db.heading(ek, 0), kk.pitch = Uk.db.pitch(ek, 0), kk
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
        const ek = Xk(kk);
        if (null === ek) return !1;
        if (ek === this.Ai) return this.entityLive;
        this.Ai = ek;
        const ik = this.api.queries.directorEntity(ek) >= Uk.fb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== ik, null === ik) return !1;
        for (let Dk = 0; Dk < 3; Dk++) this.entityFeet[Dk] = Uk.fb.feet(ik, 0, Dk), this.entityAim[Dk] = this.entityFeet[Dk];
        return this.entityAim[1] += Uk.fb.eyeHeight(ik, 0), this.entityHeading = Uk.fb.heading(ik, 0), !0
      }
      scratchView() {
        const kk = this.api.scratch(),
          ek = this.api.memory().buffer,
          ik = this.scratch;
        return null !== ik && ik.buffer === ek && ik.byteOffset === kk ? ik : (this.scratch = this.api.memoryData(kk, tk, 8, "the director's record"), this.scratch)
      }
    }
    const ck = {
        mode: "default"
      },
      Tk = {
        show: () => {},
        clear: () => {}
      };

    function Zk() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Ok {
      constructor(kk) {
        this.options = kk, this.Ux = void 0, this.director = void 0, this.latest = ck, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          SF: 0,
          mF: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.ci = new Int32Array(3 * Uk.Fd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Uk.Fd), this.Ux = new Bk(kk.api), this.director = new vk.c(this.Ux)
      }
      settingsChanged(kk) {
        let ek = ck;
        if (kk.length > 0) try {
          ek = (0, Ek.b)(kk)
        } catch {}
        this.latest = ek, this.pending = ek
      }
      call(kk, ek, ik, Dk, fk, Sk) {
        var bk, rk;
        let Pk;
        this.holding = !1;
        try {
          Pk = this.answer(kk, ek, ik, Dk, fk, Sk)
        } catch (xk) {
          var mk, Mk;
          throw this.answeredPose = !1, null === (mk = (Mk = this.options).showFacing) || void 0 === mk || mk.call(Mk, null), xk
        }
        const Kk = this.answeredPose && 0 === (Dk & Uk.jb.Held);
        return this.answeredPose = Pk !== Uk.$.None, this.holding = this.answeredPose && !Kk, null === (bk = (rk = this.options).showFacing) || void 0 === bk || bk.call(rk, this.holding ? this.facing : null), Pk
      }
      holdsView() {
        return this.holding
      }
      answer(kk, ek, ik, Dk, fk, Sk) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Ux: bk
        } = this;
        bk.readView();
        if (0 !== (Dk & Uk.jb.Held) || bk.setViewHeading((0, zk.q)(bk.bodyHeading)), void 0 !== this.pending) {
          const kk = this.pending;
          this.pending = void 0, this.director.setSettings(kk), this.syncShownSettings()
        }
        this.readLook((0, hk.f)(ek), (0, hk.f)(ik), Dk, (0, hk.f)(fk), (0, hk.f)(Sk));
        const rk = this.director.update(kk / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !rk) return Uk.$.None;
        const [Pk, mk, Mk] = rk.position;
        if (0 === this.options.api.queries.directorPose(Pk, mk, Mk, (0, zk.q)(rk.heading), (0, zk.h)(rk.pitch), (0, Ik.h)(rk.fov))) return Uk.$.None;
        if ("default" === this.director.getSettings().mode) return Uk.$.Pose;
        switch (this.facing) {
          case "camera":
            return Uk.$.FaceCamera;
          case "cursor":
            return Uk.$.FaceCursor;
          default:
            return Uk.$.FaceMovement
        }
      }
      afterFrame(kk) {
        kk ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = ck, this.idle()
      }
      restart() {
        const kk = this.holding;
        this.idle(), this.holding = kk
      }
      idle() {
        var kk, ek;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new vk.c(this.Ux), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (kk = (ek = this.options).showFacing) || void 0 === kk || kk.call(ek, null), this.setCentres(0)
      }
      syncShownSettings() {
        const kk = this.director.getSettings();
        if (kk === this.shownSettings) return;
        this.shownSettings = kk;
        const ek = (0, Qk.f)(kk);
        this.facing = ek.facing, this.mouseTurns = ek.mouseTurns
      }
      readLook(kk, ek, ik, Dk, fk) {
        const Sk = this.look,
          bk = 0 !== (ik & Uk.jb.LookPointed);
        if (null === this.mouseTurns && !bk) return Sk.SF = 0, Sk.mF = 0, void(Sk.pointedAt = void 0);
        let rk;
        bk && (this.pointedAt.heading = Dk, this.pointedAt.pitch = fk, rk = this.pointedAt);
        const {
          Ux: Pk
        } = this;
        Pk.setViewHeading((0, Qk.b)(Pk.getViewHeading(), kk, ek, rk, "look" === this.mouseTurns, Sk))
      }
      writeCentres(kk) {
        const ek = this.next,
          ik = Math.min(kk.length, Uk.Fd);
        for (let Dk = 0; Dk < ik; Dk++)
          for (let ik = 0; ik < 3; ik++) ek[3 * Dk + ik] = Math.floor(kk[Dk][ik] / Uk.A);
        this.setCentres(ik)
      }
      setCentres(kk) {
        const {
          ci: ek,
          next: ik
        } = this;
        let Dk = kk === this.centresLen;
        for (let fk = 0; Dk && fk < 3 * kk; fk++) Dk = ek[fk] === ik[fk];
        Dk || (ek.fill(0), ek.set(ik.subarray(0, 3 * kk)), this.centresLen = kk, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const kk = this.options.cmd();
        null !== kk && (0, Uk.jf)(kk, 0, this.ci, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var kk, ek, ik;
        return null !== (kk = null === (ek = (ik = this.options).screen) || void 0 === ek ? void 0 : ek.call(ik)) && void 0 !== kk ? kk : Tk
      }
      hidden() {
        var kk;
        return (null !== (kk = this.options.isPageHidden) && void 0 !== kk ? kk : Zk)()
      }
      now() {
        var kk, ek, ik;
        return null !== (kk = null === (ek = (ik = this.options).now) || void 0 === ek ? void 0 : ek.call(ik)) && void 0 !== kk ? kk : performance.now()
      }
    }
    var gk = ik(40364);
    const Gk = Uk.A * Uk.A * Uk.A,
      Nk = Math.log2(Uk.A),
      Rk = Uk.A - 1,
      Jk = Uk.K.BYTES / 4,
      ke = new Uint16Array(Gk);

    function ee(kk, ek, ik) {
      return kk * Uk.A * Uk.A + ek * Uk.A + ik
    }
    class ie {
      constructor(kk) {
        this.chunk = kk
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(kk, ek, ik) {
        return ee(kk, ek, ik)
      }
    }
    class De {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class fe {
      constructor(kk, ek, ik, Dk) {
        this.table = kk, this.slot = ek, this.generation = ik, this.epoch = Dk, this.gx = new ie(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = ke, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get HH() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get kU() {
        const kk = this.gameVoxels(),
          ek = this.layers ??= new Uint16Array(Uk.A);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let ik = 0; 0 !== this.staleLayers; ik++) {
          const Dk = 1 << ik;
          0 !== (this.staleLayers & Dk) && (this.staleLayers &= ~Dk, ek[ik] = Se(kk, ik))
        }
        return ek
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const kk = this.voxelData(),
          ek = this.writes;
        if (null === ek || 0 === ek.ids.size) return kk;
        if (ek.from !== kk) {
          const ik = ek.patched ??= new Uint16Array(Gk);
          ik.set(kk);
          for (const [kk, Dk] of ek.ids) ik[kk] = Dk;
          ek.from = kk
        }
        return ek.patched
      }
      written(kk) {
        var ek;
        return null === (ek = this.writes) || void 0 === ek ? void 0 : ek.ids.get(kk)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(kk, ek, ik) {
        const Dk = this.writes ??= new De;
        Dk.ids.set(kk, ek), ik && Dk.cleared.add(kk), null !== Dk.from && (Dk.patched[kk] = ek);
        const fk = 1 << (kk >> Nk & Rk);
        Dk.layers |= fk, this.staleLayers |= fk, this.writeCount++
      }
      clearWrites() {
        const kk = this.writes;
        null !== kk && (this.staleLayers |= kk.layers, kk.ids.clear(), kk.cleared.clear(), kk.layers = 0, kk.from = null)
      }
      dataCleared(kk) {
        var ek;
        return !0 === (null === (ek = this.writes) || void 0 === ek ? void 0 : ek.cleared.has(kk))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const kk = this.table.slotWords(),
          ek = this.slot * Jk;
        if (this.epoch !== this.table.epoch || ek + Jk > kk.length || 0 === kk[ek + 3] || kk[ek + 2] !== this.generation) return this.data = ke, this.dataPtr = 0, ke;
        this.version = kk[ek + 1];
        const ik = kk[ek + 0],
          Dk = kk.buffer;
        return ik === this.dataPtr && Dk === this.dataBuffer || (this.dataPtr = ik, this.dataBuffer = Dk, this.data = this.table.voxelsAt(Dk, ik)), this.data
      }
    }

    function Se(kk, ek) {
      const ik = kk[ek * Uk.A];
      for (let Dk = 0; Dk < Uk.A; Dk++) {
        const fk = ee(Dk, ek, 0);
        for (let ek = 0; ek < Uk.A; ek++)
          if (kk[fk + ek] !== ik) return 65535
      }
      return ik
    }
    const be = new Uint32Array(0);

    function re(kk, ek, ik) {
      return ee(kk & Rk, ek & Rk, ik & Rk)
    }
    class Pe {
      constructor(kk, ek) {
        this.memory = kk, this.apiView = ek, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = be, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = be, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(kk, ek, ik, Dk, fk, Sk) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Sk === Uk.L.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Sk !== Uk.L.Stored && Sk !== Uk.L.Unloaded) throw new nk.c(`ChunkSlot flags ${Sk}`);
        const bk = (0, gk.b)(kk, ek, ik);
        if (bk < 0) return;
        if (Sk === Uk.L.Unloaded) return void this.chunks.delete(bk);
        const rk = this.chunks.get(bk);
        (null === rk || void 0 === rk ? void 0 : rk.slot) === Dk && rk.generation === fk || this.chunks.set(bk, new fe(this, Dk, fk, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const kk = this.apiView(),
          ek = Uk.t.chunkSlotsPtr(kk, 0),
          ik = Uk.t.chunkSlotsLen(kk, 0);
        ek === this.slotsPtr && ik === this.slotsLen || (this.slotsPtr = ek, this.slotsLen = ik, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const kk = this.apiView(),
          ek = Uk.t.walkThroughPtr(kk, 0),
          ik = Uk.t.walkThroughLen(kk, 0);
        ek === this.walkPtr && ik === this.walkLen || (this.walkPtr = ek, this.walkLen = ik, this.walkBuffer = null, this.walkWords())
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
        var ek;
        kk !== this.slotsBuffer && (this.slotsBuffer = kk, this.slots = null !== (ek = (0, nk.n)(Uint32Array, kk, this.slotsPtr, this.slotsLen * Jk, "the chunk directory")) && void 0 !== ek ? ek : be);
        return this.slots
      }
      voxelsAt(kk, ek) {
        try {
          var ik;
          return null !== (ik = (0, nk.n)(Uint16Array, kk, ek, Gk, "a chunk's voxels")) && void 0 !== ik ? ik : ke
        } catch (Dk) {
          if (!(Dk instanceof nk.c)) throw Dk;
          return this.corruption ??= Dk, ke
        }
      }
      chunk(kk, ek, ik) {
        var Dk;
        return null !== (Dk = this.chunks.get((0, gk.b)(kk, ek, ik))) && void 0 !== Dk ? Dk : null
      }
      isLoaded(kk, ek, ik) {
        return void 0 !== this.chunkAt(Math.floor(kk), Math.floor(ek), Math.floor(ik))
      }
      wP(kk, ek, ik) {
        var Dk;
        const fk = Math.floor(kk),
          Sk = Math.floor(ek),
          bk = Math.floor(ik),
          rk = this.chunkAt(fk, Sk, bk);
        if (!rk) return 0;
        const Pk = re(fk, Sk, bk);
        return null !== (Dk = rk.written(Pk)) && void 0 !== Dk ? Dk : rk.voxelData()[Pk]
      }
      setOverlay(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Sk = this.chunkAt(kk, ek, ik);
        return !!Sk && (Sk.hasWrites() || this.written.push(Sk), Sk.write(re(kk, ek, ik), Dk, fk), !0)
      }
      version(kk, ek, ik) {
        var Dk, fk;
        return null !== (Dk = null === (fk = this.chunks.get((0, gk.b)(kk, ek, ik))) || void 0 === fk ? void 0 : fk.HH) && void 0 !== Dk ? Dk : null
      }
      scan(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        const Pk = Uk.A;
        let mk = 0;
        for (let Mk = Math.floor(ek / Pk); Mk * Pk < fk; Mk++) {
          const Kk = Mk * Pk,
            xk = Math.min(fk - Kk, Pk);
          for (let fk = Math.floor(kk / Pk); fk * Pk < Dk; fk++) {
            const nk = fk * Pk,
              Uk = Math.min(Dk - nk, Pk);
            for (let Dk = Math.floor(ik / Pk); Dk * Pk < Sk; Dk++) {
              const Hk = this.chunks.get((0, gk.b)(fk, Mk, Dk));
              if (!Hk) continue;
              const wk = Dk * Pk,
                lk = Math.max(ik - wk, 0),
                pk = Math.min(Sk - wk, Pk),
                yk = Hk.kU,
                Yk = Hk.gameVoxels();
              for (let ik = Math.max(ek - Kk, 0); ik < xk; ik++) {
                const ek = yk[ik];
                if (65535 === ek || 0 !== bk[ek]) {
                  mk++;
                  for (let ek = Math.max(kk - nk, 0); ek < Uk; ek++) {
                    const kk = ee(ek, ik, 0);
                    for (let Dk = lk; Dk < pk; Dk++) {
                      const fk = Yk[kk + Dk];
                      0 !== bk[fk] && rk.push(nk + ek, Kk + ik, wk + Dk, fk)
                    }
                  }
                }
              }
            }
          }
        }
        return mk
      }
      dataCleared(kk, ek, ik) {
        var Dk;
        const fk = Math.floor(kk),
          Sk = Math.floor(ek),
          bk = Math.floor(ik);
        return !0 === (null === (Dk = this.chunkAt(fk, Sk, bk)) || void 0 === Dk ? void 0 : Dk.dataCleared(re(fk, Sk, bk)))
      }
      isWalkThrough(kk) {
        if (!Number.isInteger(kk) || kk < 0 || kk > 65535) return !1;
        const ek = this.walkWords(),
          ik = kk >>> 5;
        return ik < ek.length && 1 === (ek[ik] >>> (31 & kk) & 1)
      }
      walkWords() {
        const kk = this.memory().buffer;
        var ek;
        kk !== this.walkBuffer && (this.walkBuffer = kk, this.walk = null !== (ek = (0, nk.n)(Uint32Array, kk, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ek ? ek : be);
        return this.walk
      }
      chunkAt(kk, ek, ik) {
        if ((0 | kk) !== kk || (0 | ek) !== ek || (0 | ik) !== ik) return;
        const Dk = (0, gk.b)(kk >> Nk, ek >> Nk, ik >> Nk);
        return Dk !== this.lastKey && (this.lastKey = Dk, this.lastChunk = this.chunks.get(Dk)), this.lastChunk
      }
    }
    var me = ik(38088),
      Me = ik(37402),
      Ke = ik(36370),
      xe = ik(36164),
      ne = ik(33723),
      Ue = ik(38704),
      He = ik(189);
    const we = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      le = [
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
      pe = le.map((kk => {
        let [ek] = kk;
        return ek
      })),
      ye = Uint8Array.from(le, (kk => {
        let [, ek] = kk;
        return ek
      })),
      Ye = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Le = 8;
    var Ce = ik(36346),
      Ae = ik(36354),
      je = ik(36351),
      se = ik(247);
    class de {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : se.c;
        this.sheet = kk, this.onError = ek, this.idle = ik, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = kk => {
          this.cancelIdle = null;
          try {
            if (kk.timeRemaining() >= 1) {
              let kk = this.queue.shift();
              for (; void 0 !== kk && !this.load(kk);) kk = this.queue.shift()
            }
          } catch (ek) {
            this.onError(ek)
          } finally {
            this.schedule()
          }
        }
      }
      preload(kk) {
        const ek = [...kk].sort(((kk, ek) => kk - ek));
        for (const ik of ek) this.asked.has(ik) || (this.asked.add(ik), this.queue.push(ik));
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
        const ek = this.sheet(kk, !1),
          ik = this.sheet(kk, !0),
          [Dk, fk] = "unloaded" === ek.state() && "unloaded" !== ik.state() ? [ik, ek] : [ek, ik],
          Sk = this.gen,
          bk = () => {
            try {
              Sk === this.gen && "unloaded" === fk.state() && fk.load()
            } catch (kk) {
              this.onError(kk)
            }
          },
          rk = Dk.state();
        return "unloaded" === rk ? (Dk.once("load", bk), Dk.load(), !0) : "unloaded" === fk.state() && ("loading" === rk ? (Dk.once("load", bk), !1) : (fk.load(), !0))
      }
    }
    var Ve = ik(40483);
    const Fe = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      ue = He.g.Qp * He.g.playerEyeToHeightRatio,
      qe = [0, 0, -1, 0, 1, 0],
      Ie = we.indexOf("note");

    function ze(kk) {
      return kk >= 0 ? Math.min(1, kk) : 0
    }

    function Qe(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Dk = function(kk) {
        let ek = 0,
          ik = pe.length;
        for (; ek < ik;) {
          const Dk = ek + ik >>> 1;
          pe[Dk] < kk ? ek = Dk + 1 : ik = Dk
        }
        return ek
      }(kk);
      if ("" === kk || null === (ek = pe[Dk]) || void 0 === ek || !ek.startsWith(kk)) return -1;
      if (pe[Dk] === kk) return Dk;
      let fk = Dk + 1;
      for (; fk < pe.length && pe[fk].startsWith(kk);) fk++;
      return Dk + Math.floor(ik() * (fk - Dk))
    }
    class ve {
      constructor(kk, ek, ik, Dk, fk) {
        this.group = kk, this.loudness = ek, this.startMs = ik, this.howl = Dk, this.host = fk, this.id = 0, this.direct = !1
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
    class Ee {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = kk, this.listener = ek, this.now = ik, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(we.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new je.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: kk => this.aliveVoice(kk),
          started: kk => this.started.has(kk),
          drop: kk => {
            var ek;
            null === (ek = this.live.get(kk)) || void 0 === ek || ek.howl.stop(kk), this.forget(kk)
          }
        }, this.handlers = {
          playSound: (kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) => {
            if (Dk >= pe.length) return;
            const mk = 0 !== (fk & Uk.Rd.Loop);
            fk & Uk.Rd.TwoD ? this.start(Dk, !1, bk, Sk, rk, mk) : this.startSpatial(Dk, bk, Sk, rk, mk, kk, ek, ik, Pk, this.earDistSq(kk, ek, ik))
          },
          soundPos: (kk, ek, ik, Dk) => {
            const fk = this.core.get(Dk);
            var Sk;
            void 0 !== fk && (null === (Sk = this.live.get(fk)) || void 0 === Sk || Sk.howl.pos(ik, ek, kk, fk))
          },
          soundSet: (kk, ek, ik, Dk) => {
            const fk = this.core.get(kk),
              Sk = void 0 === fk ? void 0 : this.live.get(fk);
            void 0 !== fk && Sk && (this.setRel(fk, ek), Sk.rate = ik, Sk.howl.rate(ik, fk), Sk.spatial && Sk.howl.pannerAttr({
              refDistance: Dk
            }, fk))
          },
          soundFade: (kk, ek, ik, Dk) => {
            const fk = this.core.get(kk);
            void 0 !== fk && this.fade(fk, ek, ik, 0 !== (Dk & Uk.Od.StopAfter))
          },
          soundStop: kk => {
            const ek = this.core.get(kk);
            var ik;
            void 0 !== ek && (null === (ik = this.live.get(ek)) || void 0 === ik || ik.howl.stop(ek), this.forget(ek))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new de(((kk, ek) => this.sheet(kk, ek)), (kk => {
          this.errors++, console.error("Audio preload failed", kk)
        }), Dk)
      }
      prepare() {
        for (let kk = 0; kk < we.length; kk++) this.prepareSheet(kk)
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
        for (let kk = 0; kk < we.length; kk++) {
          if (Ae.c.has(we[kk])) continue;
          const ek = [];
          for (const Dk of [!1, !0]) {
            const ik = he(kk, Dk),
              fk = this.sheets.get(ik);
            void 0 !== fk && "loading" !== fk.state() && ek.push({
              key: ik,
              howl: fk
            })
          }
          if (!ek.some((kk => {
              let {
                howl: ek
              } = kk;
              return "loaded" === ek.state()
            }))) continue;
          this.unloading[kk] += ek.length;
          const ik = () => {
            this.unloading[kk]--, 0 === this.unloading[kk] && this.prepareSheet(kk)
          };
          for (const {
              key: kk,
              howl: Dk
            }
            of ek) this.sheets.delete(kk), "loaded" === Dk.state() ? (0, Ce.b)(Dk, ik) : (Dk.unload(), ik())
        }
      }
      onAudioEvent(kk, ek, ik, Dk) {
        if (kk < Uk.p.PlaySound || kk > Uk.p.SoundReset) return !1;
        try {
          return (0, Uk.ae)(kk, ek, ik, Dk, this.handlers)
        } catch (fk) {
          return this.errors++, console.error("Audio event failed", fk), !0
        }
      }
      applyListener(kk) {
        const ek = this.nextPose;
        for (let Dk = 0; Dk < 3; Dk++) ek[2 - Dk] = Uk.v.listener(kk, 0, Dk), ek[5 - Dk] = Uk.v.forward(kk, 0, Dk), ek[8 - Dk] = Uk.v.up(kk, 0, Dk);
        0 === ek[3] && 0 === ek[4] && 0 === ek[5] && ek.set(this.posed ? this.pose.subarray(3) : qe, 3);
        for (let Dk = 0; Dk < 9; Dk++)
          if (!Number.isFinite(ek[Dk])) return;
        const ik = this.pose;
        if (this.posed) {
          let kk = !0;
          for (let Dk = 0; Dk < 9 && kk; Dk++) kk = ek[Dk] === ik[Dk];
          if (kk) return
        }
        this.listener.apply(ek) && (ik.set(ek), this.posed = !0)
      }
      playGame(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = Qe(kk);
        if (rk < 0) return Ve.e;
        if (!ik) {
          const {
            howl: kk,
            id: ik
          } = this.start(rk, !1, ek, 0, 1, bk);
          return this.gameSound(kk, ik, !1)
        }
        const Pk = ik[0],
          mk = ik[1] + ue,
          Mk = ik[2];
        if (!Number.isFinite(Pk) || !Number.isFinite(mk) || !Number.isFinite(Mk)) return Ve.e;
        let Kk;
        if (Dk) {
          const kk = Pk - Dk[0],
            ek = mk - Dk[1],
            ik = Mk - Dk[2];
          if (Kk = kk * kk + ek * ek + ik * ik, Kk > fk * fk) return Ve.e
        } else Kk = this.earDistSq(Pk, mk, Mk);
        const xk = this.startSpatial(rk, ek, 0, 1, bk, Pk, mk, Mk, Sk, Kk);
        return xk ? this.gameSound(xk.howl, xk.id, !0) : Ve.e
      }
      setMaster(kk, ek) {
        this.level = ze(kk);
        const ik = ek ? this.level : 0;
        if (ik !== this.master) {
          this.master = ik;
          for (const [kk, ek] of this.live) ek.fadeMs = 0, ek.gain = ek.rel * this.master, ek.howl.volume(ek.gain, kk)
        }
      }
      stopCore() {
        for (const ek of [...this.core.values()]) {
          var kk;
          null === (kk = this.live.get(ek)) || void 0 === kk || kk.howl.stop(ek)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [kk, ek] of [...this.live]) ek.howl.stop(kk), this.forget(kk);
        this.core.clear()
      }
      gameSound(kk, ek, ik) {
        const Dk = {
          stop: () => (this.live.has(ek) && kk.stop(ek), Dk),
          fade: (kk, ik, fk) => {
            var Sk, bk;
            const rk = this.level > 0 ? ik / this.level : ik > 0 && null !== (Sk = null === (bk = this.live.get(ek)) || void 0 === bk ? void 0 : bk.rel) && void 0 !== Sk ? Sk : 0;
            return this.fade(ek, rk, fk, !1), Dk
          },
          rate: ik => {
            const fk = this.live.get(ek);
            return fk && (fk.rate = function(kk) {
              return kk > 0 && kk < 1 / 0 ? kk : 1
            }(ik), kk.rate(fk.rate, ek)), Dk
          },
          getVolume: () => {
            var kk, ik;
            return (null !== (kk = null === (ik = this.live.get(ek)) || void 0 === ik ? void 0 : ik.rel) && void 0 !== kk ? kk : 0) * this.level
          },
          getRelativeVolume: () => {
            var kk, ik;
            return null !== (kk = null === (ik = this.live.get(ek)) || void 0 === ik ? void 0 : ik.rel) && void 0 !== kk ? kk : 0
          },
          setRelativeVolume: kk => (this.setRel(ek, kk), Dk),
          setPannerAttr: fk => {
            if (ik && this.live.has(ek)) {
              const ik = {
                ...Fe,
                refDistance: Ke.k
              };
              for (const [kk, ek] of Object.entries(fk)) "number" !== typeof ek && "string" !== typeof ek || (ik[kk] = ek);
              kk.pannerAttr({
                coneOuterAngle: ik.coneOuterAngle
              }, ek), kk.pannerAttr(ik, ek)
            }
            return Dk
          },
          setPosition: fk => (ik && this.live.has(ek) && Number.isFinite(fk[0] + fk[1] + fk[2]) && kk.pos(fk[2], fk[1], fk[0], ek), Dk)
        };
        return Dk
      }
      startSpatial(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        const Mk = this.sheet(ye[kk], !0);
        let Kk = null;
        if (!fk) {
          if (this.failed.has(Mk)) return null;
          const ik = ye[kk] === Ie ? null : (0, je.e)(pe[kk]),
            Dk = (0, je.d)(ze(ek), Math.sqrt(mk), Pk);
          if (Kk = new ve(ik, Dk, this.now(), Mk, this.voiceHost), !this.voices.admit(Kk)) return null
        }
        const xk = this.start(kk, !0, ek, ik, Dk, fk);
        return Kk && (Kk.id = xk.id, Kk.direct = "loaded" === Mk.state() && !Mk._playLock), Mk.pannerAttr({
          coneOuterAngle: 360
        }, xk.id), Mk.pannerAttr({
          ...Fe,
          refDistance: Pk
        }, xk.id), Mk.pos(rk, bk, Sk, xk.id), xk
      }
      aliveVoice(kk) {
        const ek = this.live.get(kk);
        if (!ek) return;
        const ik = ek.howl._soundById(kk);
        if (ik && !ik._ended) return ek;
        this.forget(kk)
      }
      earDistSq(kk, ek, ik) {
        if (!this.posed) return 0;
        const Dk = kk - this.pose[2],
          fk = ek - this.pose[1],
          Sk = ik - this.pose[0];
        return Dk * Dk + fk * fk + Sk * Sk
      }
      start(kk, ek, ik, Dk, fk, Sk) {
        const bk = ze(ik),
          rk = this.sheet(ye[kk], ek);
        "unloaded" === rk.state() && rk.load();
        const Pk = rk.play(pe[kk]),
          mk = bk * this.master;
        return rk.volume(mk, Pk), this.live.set(Pk, {
          howl: rk,
          rel: bk,
          gain: mk,
          fadeFrom: mk,
          fadeAt: 0,
          fadeMs: 0,
          rate: fk,
          handle: Dk,
          spatial: ek,
          stopTimer: void 0
        }), 0 !== Dk && this.core.set(Dk, Pk), 1 !== fk && rk.rate(fk, Pk), Sk && rk.loop(!0, Pk), {
          howl: rk,
          id: Pk
        }
      }
      sheet(kk, ek) {
        const ik = he(kk, ek);
        let Dk = this.sheets.get(ik);
        if (!Dk) {
          const fk = this.createHowl(we[kk], ek);
          fk.on("end", (kk => {
            fk.loop(kk) || this.forget(kk)
          })), fk.on("stop", (kk => {
            this.forget(kk)
          })), fk.on("play", (kk => {
            this.live.has(kk) && this.started.add(kk)
          })), fk.on("loaderror", (kk => {
            if ("loaded" !== fk.state()) {
              this.failed.add(fk);
              for (const [kk, ek] of this.live) ek.howl === fk && this.forget(kk)
            } else "number" === typeof kk && this.forget(kk)
          })), this.sheets.set(ik, fk), Dk = fk
        }
        return Dk
      }
      setRel(kk, ek) {
        const ik = this.live.get(kk);
        ik && (ae(ik), ik.fadeMs = 0, ik.rel = ze(ek), ik.gain = ik.rel * this.master, ik.howl.volume(ik.gain, kk))
      }
      fade(kk, ek, ik, Dk) {
        const fk = this.live.get(kk);
        if (!fk) return;
        ae(fk);
        const {
          howl: Sk
        } = fk, bk = this.gainNow(fk);
        fk.rel = ze(ek), fk.gain = fk.rel * this.master;
        const rk = ik > 0 ? Math.min(ik, 65535) : 0,
          Pk = 0 === rk || bk === fk.gain;
        fk.fadeMs = Pk ? 0 : rk, Pk ? Sk.volume(fk.gain, kk) : (fk.fadeFrom = bk, fk.fadeAt = this.now(), Sk.fade(bk, fk.gain, rk, kk)), Dk && (Pk ? Sk.stop(kk) : fk.stopTimer = setTimeout((() => {
          fk.stopTimer = void 0, Sk.stop(kk)
        }), rk))
      }
      gainNow(kk) {
        if (kk.fadeMs > 0) {
          const ek = (this.now() - kk.fadeAt) / kk.fadeMs;
          if (ek < 1) return kk.fadeFrom + (kk.gain - kk.fadeFrom) * Math.max(0, ek);
          kk.fadeMs = 0
        }
        return kk.gain
      }
      forget(kk) {
        this.started.delete(kk);
        const ek = this.live.get(kk);
        ek && (ae(ek), this.live.delete(kk), 0 !== ek.handle && this.core.get(ek.handle) === kk && this.core.delete(ek.handle))
      }
    }

    function he(kk, ek) {
      return 2 * kk + (ek ? 1 : 0)
    }

    function ae(kk) {
      void 0 !== kk.stopTimer && (clearTimeout(kk.stopTimer), kk.stopTimer = void 0)
    }
    var We = ik(40186),
      te = ik(38707);
    class Xe {
      constructor(kk, ek, ik, Dk) {
        this.key = kk, this.model = ek, this.host = Dk, this.vK = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.Dfk = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.aU = !1, this.vK = Math.max(1, Math.ceil(ik)), this.records = new Float32Array(this.vK * me.b), this.isDirty = new Uint8Array(this.vK), this.tail = new Uint8Array(this.vK * Uk.gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Dk.cmd())
      }
      setOrigin(kk, ek, ik) {
        this.origin[0] = kk, this.origin[1] = ek, this.origin[2] = ik
      }
      markDirty(kk) {
        !this.aU && kk >= 0 && kk < this.vK && kk < Uk.gc.Max && this.bH(kk, kk + 1)
      }
      commit(kk) {
        if (this.aU) return;
        (kk = Math.min(Math.max(Math.floor(kk), 0), this.vK, Uk.gc.Max)) > this.count && this.bH(this.count, kk), this.count = kk;
        const {
          origin: ek,
          sentOrigin: ik,
          dirtyList: Dk
        } = this, fk = this.Dfk !== kk, Sk = ik[0] !== ek[0] || ik[1] !== ek[1] || ik[2] !== ek[2];
        if (0 === Dk.length && !fk && !Sk) return;
        const bk = this.host.cmd();
        if (!bk || !this.make(bk)) return;
        const rk = Dk.length,
          {
            records: Pk,
            tailView: mk
          } = this;
        for (let Mk = 0; Mk < rk; Mk++) {
          const kk = Dk[Mk],
            ek = kk * me.b,
            ik = Mk * Uk.gc.Bytes,
            fk = 0 !== Pk[ek + me.d] ? Uk.gc.Hidden : 0;
          mk.setUint32(ik, (kk | fk) >>> 0, !0), mk.setFloat32(ik + 4, Pk[ek], !0), mk.setFloat32(ik + 8, Pk[ek + 1], !0), mk.setFloat32(ik + 12, Pk[ek + 2], !0)
        }
        if ((0, Uk.Ce)(bk, 0, this.key, kk, ek, rk, this.tailOf(rk))) {
          for (let kk = 0; kk < rk; kk++) this.isDirty[Dk[kk]] = 0;
          Dk.length = 0, this.Dfk = kk, ik[0] = ek[0], ik[1] = ek[1], ik[2] = ek[2]
        }
      }
      grow(kk) {
        (kk = Math.ceil(kk)) <= this.vK || this.aU || (this.records = (0, te.c)(this.records, new Float32Array(kk * me.b)), this.isDirty = (0, te.c)(this.isDirty, new Uint8Array(kk)), this.tail = new Uint8Array(kk * Uk.gc.Bytes), this.tailView = new DataView(this.tail.buffer), this.vK = kk)
      }
      dispose() {
        this.aU || (this.aU = !0, this.host.aU(this, this.made ? this.key : null))
      }
      make(kk) {
        if (!this.made && kk) {
          const {
            item: ek,
            scale: ik,
            yaw: Dk
          } = this.model;
          this.made = (0, Uk.Fe)(kk, 0, this.key, ek, ik, Dk)
        }
        return this.made
      }
      tailOf(kk) {
        const ek = kk * Uk.gc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === ek || (this.tailCut = this.tail.subarray(0, ek)), this.tailCut
      }
      bH(kk, ek) {
        const {
          dirtyList: ik,
          isDirty: Dk
        } = this;
        for (let fk = kk; fk < ek; fk++) 0 === Dk[fk] && (Dk[fk] = 1, ik.push(fk))
      }
    }
    var Be = ik(591);
    class ce {
      constructor(kk) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: kk,
          owes: kk => {
            this.owing.add(kk)
          },
          settled: (kk, ek) => {
            this.owing.delete(kk), ek && this.live.delete(kk)
          }
        }
      }
      create(kk, ek) {
        if (ik = kk, !Be.m.includes(ik)) return null;
        var ik;
        const Dk = new Te(++this.keys, Mk.n.indexOf(kk), ek, this.host);
        return this.live.add(Dk), Dk
      }
      disposeAll() {
        for (const kk of [...this.live]) kk.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const kk = this.host.cmd();
        for (const ek of this.owing)
          if (!ek.sync(kk)) return
      }
    }
    class Te {
      constructor(kk, ek, ik, Dk) {
        this.key = kk, this.lifeform = ek, this.scale = ik, this.host = Dk, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.aU = !1, this.sync()
      }
      setPose(kk, ek) {
        this.aU || (this.feet[0] = kk[0], this.feet[1] = kk[1], this.feet[2] = kk[2], this.yaw = ek, this.owed |= 2, this.sync())
      }
      setVisible(kk) {
        this.aU || kk === this.visible || (this.visible = kk, this.owed |= 4, this.sync())
      }
      dispose() {
        this.aU || (this.aU = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(kk) ? (this.host.settled(this, this.aU), !0) : (this.host.owes(this), !1)
      }
      write(kk) {
        if (!kk) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, Uk.Me)(kk, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const ek = (2 & this.owed ? Uk.Hc.Pose : 0) | (4 & this.owed ? Uk.Hc.Visible : 0);
        if (0 !== ek) {
          if (!(0, Uk.Le)(kk, 0, this.key, ek, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, Uk.He)(kk, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var oe = ik(40587);

    function Ze(kk, ek, ik, Dk) {
      return (0, oe.b)(), (0, Uk.kf)(kk, ek, ik, Dk)
    }
    var Oe = ik(38710),
      ge = ik(40172);
    const Ge = [0, 0, 0],
      Ne = [0, 0, 0],
      Re = [0, 0, 0],
      Je = [0, 0, 0],
      ki = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      ei = [0, 0, 0],
      ii = [0, 0],
      Di = [1, 1, 1],
      fi = 1 / 3;
    const Si = Me.h;

    function bi(kk) {
      const ek = Me.e[kk],
        ik = ek && Me.h[ek.mainMultiblock];
      return ik && {
        main: ik,
        x: ek.compX,
        y: ek.compY,
        z: ek.compZ
      }
    }

    function ri(kk) {
      if (null === kk || void 0 === kk) return Uk.Sc;
      const ek = +kk;
      return Number.isInteger(ek) && ek >= -2147483648 && ek <= 2147483647 && String(ek) === String(kk) ? ek : Uk.Sc
    }

    function Pi(kk, ek, ik) {
      return (0, Uk.tf)(kk, 0, ek, null !== ik && void 0 !== ik ? ik : Number.NaN)
    }
    class mi {
      constructor(kk) {
        this.deps = kk, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Oe.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (kk => {
          var ek, ik;
          null === (ek = (ik = this.deps).setLocalOptions) || void 0 === ek || ek.call(ik, kk)
        })), this.mobModels = new ce((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          aU: (kk, ek) => {
            this.livePools.delete(kk), null !== ek && (this.owedFrees.push(ek), this.flushOwed())
          }
        }, this.api = kk.api, this.live = kk.live, this.chunks = kk.chunks, this.items = kk.items, this.tables = kk.tables
      }
      isLocal(kk) {
        return null !== kk && void 0 !== kk && +kk === this.api.localId
      }
      assertLocal(kk, ek) {
        if (!this.isLocal(kk)) throw new Error(`Attempted to ${ek} for a player that is not the local player`)
      }
      vy(kk) {
        const ek = this.api.vy(kk);
        if (!ek) throw new Error(`Entity ${kk} has no replicated position`);
        return ek
      }
      checkValid(kk) {
        return !!this.deps.isSessionLive() && (null === kk || void 0 === kk || this.api.checkValid(kk))
      }
      isAlive(kk) {
        return !1 !== this.api.isAlive(kk)
      }
      getItemStat(kk, ek, ik) {
        return this.isLocal(kk) || null !== kk && "Player" === this.api.getEntityType(kk) ? this.tables.getItemStat(ek, ik) : this.tables.getDefaultItemStat(ek, ik)
      }
      getClientOption(kk, ek) {
        return this.assertLocal(kk, "get a client option"), this.tables.getClientOption(ek)
      }
      openShop(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(kk, "open shop"), bk.j.tm("showShopFromServer", {
          toggle: ek,
          Db: ik
        }, !0)
      }
      sendMessage(kk, ek, ik) {
        this.assertLocal(kk, "send a message");
        const Dk = "string" === typeof ek ? [{
          str: ek,
          style: ik
        }] : ek;
        bk.j.tm("chat", {
          content: Dk
        }, !0)
      }
      getEntityType(kk) {
        return this.api.getEntityType(kk)
      }
      getEntityName(kk) {
        const ek = ri(kk);
        return ek === Uk.Sc ? void 0 : (0, We.e)(this.api, ek)
      }
      hasEffect(kk, ek) {
        const ik = ri(kk);
        return ik !== Uk.Sc && (0, We.d)(this.api, ik, ek)
      }
      getMetaInfo(kk) {
        return this.tables.getMetaInfo(kk)
      }
      getPlayerDbId(kk) {
        return this.assertLocal(kk, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(kk, ek, ik) {
        if (!this.chunks.dataCleared(kk, ek, ik)) return (0, We.c)(this.api, kk, ek, ik)
      }
      RV(kk, ek, ik, Dk) {
        this.setBlockId(kk, ek, ik, this.tables.getItemId(Dk))
      }
      setOtherEntitySetting(kk, ek, ik, Dk) {
        if (!this.isLocal(kk)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Uk.cd, ik)) throw new Error(`Unknown other-entity setting ${ik}`);
        const fk = Uk.cd[ik],
          Sk = ri(ek);
        if (Sk === Uk.Sc || !this.deps.beforeWrite()) return;
        const bk = (0, Ek.c)(Dk);
        if (bk.length > 16384) throw new Error(`The other-entity setting ${ik}'s value is over 16384 bytes`);
        const rk = this.api.memoryView(Uint8Array, this.api.scratch(), bk.length, "set_other_entity_setting's value");
        rk && (rk.set(bk), this.api.queries.setOtherEntitySetting(Sk, fk, bk.length))
      }
      getPositionView(kk) {
        return this.live.position(+kk)
      }
      readDrawnPosition(kk, ek) {
        return this.api.readDrawnPosition(ri(kk), ek)
      }
      getDrawnHeading(kk) {
        const ek = ri(kk),
          ik = (ek === Uk.Sc ? 0 : this.api.queries.directorEntity(ek)) >= Uk.fb.BYTES ? this.api.memoryData(this.api.scratch(), Uk.fb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!ik) return null;
        if (1 === Uk.fb.headingIsDrawn(ik, 0)) return Uk.fb.heading(ik, 0);
        const Dk = this.api.apiView;
        return this.isLocal(kk) && 0 === (Uk.t.playerFlags(Dk, 0) & Uk.yd.FreeCam) ? Uk.t.heading(Dk, 0) : null
      }
      getLocalPlayerMovement() {
        const kk = Uk.t.playerFlags(this.api.apiView, 0);
        return 0 === (kk & Uk.yd.Replay) && this.api.readDrawnPosition(this.api.localId, Re) ? {
          onGround: 0 !== (kk & Uk.yd.OnGround),
          jumpHeld: 0 !== (kk & Uk.yd.JumpHeld)
        } : null
      }
      jek(kk) {
        return this.isLocal(kk) ? this.items.XM() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var kk, ek;
        return "Gun" === (null === (kk = this.aliveHeld()) || void 0 === kk || null === (ek = kk.typeObj) || void 0 === ek ? void 0 : ek.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.XM()
      }
      isCrosshairShown() {
        var kk, ek;
        const ik = (0, xe.b)(Dk.b.get("crosshairGameView"), Dk.b.get("crosshairShownOverride"));
        if (null !== ik) return ik;
        const fk = null === (kk = this.aliveHeld()) || void 0 === kk ? void 0 : kk.typeObj,
          Sk = "Gun" === (null === fk || void 0 === fk ? void 0 : fk.type),
          bk = Sk || !0 === (null === fk || void 0 === fk ? void 0 : fk.showsAimingUi),
          rk = 0 === (Uk.t.playerFlags(this.api.apiView, 0) & Uk.yd.ZoomFirstPerson),
          Pk = null !== (ek = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ek ? ek : null;
        return (0, xe.f)({
          gun: Sk,
          aimable: bk
        }, rk, (0, ne.e)(), Pk)
      }
      setCrosshairShown(kk) {
        Dk.b.set({
          crosshairShownOverride: kk
        })
      }
      getInventoryFreeSlotCount(kk) {
        return this.isLocal(kk) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(kk) {
        return this.isLocal(kk) ? this.items.selectedSlot : null
      }
      getItemSlot(kk, ek) {
        return this.isLocal(kk) ? this.items.slot(ek) : null
      }
      swapInventorySlots(kk, ek) {
        return this.items.swap(kk, ek)
      }
      isPlayerCrouching(kk) {
        if (this.isLocal(kk)) return 0 !== (Uk.t.playerFlags(this.api.apiView, 0) & Uk.yd.Crouching);
        const ek = ri(kk);
        return ek !== Uk.Sc && 1 === this.api.queries.entityCrouching(ek)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Uk.t.playerFlags(this.api.apiView, 0) & Uk.yd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.bkk()
      }
      getActionRay() {
        const kk = this.api.apiView;
        for (let ek = 0; ek < 3; ek++) ki.origin[ek] = Uk.t.Ykk(kk, 0, ek), ki.direction[ek] = Uk.t.actionDir(kk, 0, ek);
        return ki
      }
      canModifyBlockAt(kk, ek, ik) {
        return 1 === this.api.queries.canModify(kk, ek, ik)
      }
      isSolidToPlayerBlockId(kk) {
        return this.tables.isSolidBlockId(kk) && !this.chunks.isWalkThrough(kk)
      }
      blockNameToBlockId(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(kk, ek)
      }
      blockIdToBlockName(kk) {
        return this.tables.nameOfId(kk)
      }
      okk(kk, ek, ik, Dk, fk) {
        return 1 === this.api.queries.terrainBlocked(Dk, kk, ek, ik, ri(null !== fk && void 0 !== fk ? fk : null))
      }
      getChunkVersion(kk, ek, ik) {
        return this.chunks.version(kk, ek, ik)
      }
      scanBlocks(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        return this.chunks.scan(kk, ek, ik, Dk, fk, Sk, bk, rk)
      }
      isBlockInLoadedChunk(kk, ek, ik) {
        return this.chunks.isLoaded(kk, ek, ik)
      }
      getBlockId(kk, ek, ik) {
        return this.chunks.wP(kk, ek, ik)
      }
      playSound(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(kk)) return null;
        const bk = this.playSoundFrom(ek, ik, fk, Sk);
        return 1 === Dk ? bk : bk.rate(Dk)
      }
      preloadSounds(kk) {
        var ek, ik;
        null === (ek = (ik = this.deps).preloadSounds) || void 0 === ek || ek.call(ik, kk)
      }
      playSoundFrom(kk, ek, ik, Dk) {
        var fk, Sk;
        const bk = this.deps.playSound;
        if (!bk) return Ve.e;
        const rk = null === ik || void 0 === ik ? void 0 : ik.ze,
          Pk = null !== (fk = null === ik || void 0 === ik ? void 0 : ik.maxHearDist) && void 0 !== fk ? fk : Ke.h,
          mk = null !== (Sk = null === ik || void 0 === ik ? void 0 : ik.refDistance) && void 0 !== Sk ? Sk : Ke.k;
        let Mk = null;
        if (Array.isArray(rk)) Ge[0] = rk[0], Ge[1] = rk[1], Ge[2] = rk[2], Mk = Ge;
        else if (void 0 !== rk && null !== rk) {
          const kk = ri(rk);
          if (!this.api.isLocal(kk)) {
            if (!this.api.readPosition(kk, Ge)) return Ve.e;
            Mk = Ge
          }
        }
        return bk(kk, ek, Mk, Mk && this.ear(), Pk, mk, Dk)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Ne)) Ne[1] += ue;
        else {
          const kk = this.api.apiView;
          if (0 === Uk.t.viewProj(kk, 0, 3) && 0 === Uk.t.viewProj(kk, 0, 7) && 0 === Uk.t.viewProj(kk, 0, 11)) return null;
          for (let ek = 0; ek < 3; ek++) Ne[ek] = Uk.t.eye(kk, 0, ek)
        }
        return Number.isFinite(Ne[0] + Ne[1] + Ne[2]) ? Ne : null
      }
      setBlockId(kk, ek, ik, Dk) {
        if (!Number.isInteger(Dk) || Dk < 0 || Dk > 65535) throw new Error(`Invalid block id ${Dk}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(kk, ek, ik)) return;
        const fk = Math.floor(kk),
          Sk = Math.floor(ek),
          bk = Math.floor(ik),
          rk = this.predictedCells(fk, Sk, bk, Dk);
        if (1 === this.api.queries.RV(fk, Sk, bk, Dk)) {
          for (let kk = 0; kk < rk.length; kk += 5) this.chunks.setOverlay(rk[kk], rk[kk + 1], rk[kk + 2], rk[kk + 3], 1 === rk[kk + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(kk, ek) {
        return this.deps.particles.create(kk, ek)
      }
      playParticleEffect(kk) {
        this.deps.particles.playEffect(kk)
      }
      burstParticlePreset(kk, ek, ik) {
        this.deps.particles.burstPreset(kk, ek, ik)
      }
      createGameMesh(kk, ek, ik) {
        const Dk = ++this.meshKeys,
          fk = this.deps.cmd();
        if (!fk) return Dk;
        const {
          look: Sk,
          colour: bk
        } = function(kk) {
          switch (kk.kind) {
            case void 0:
            case "flatEmissive":
              return kk.onTop ? {
                look: Uk.Ob.FlatOnTop,
                colour: [...kk.rgb, kk.alpha]
              } : kk.opaque ? {
                look: Uk.Ob.FlatOpaque,
                colour: [...kk.rgb, 1]
              } : {
                look: Uk.Ob.Flat,
                colour: [...kk.rgb, kk.alpha]
              };
            case "chevronPath":
              return {
                look: Uk.Ob.Chevrons, colour: [...(0, Ue.b)(kk.colour), kk.alpha]
              };
            case "furnaceFire":
              return {
                look: Uk.Ob.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(ek), rk = Math.floor(kk.positions.length / 3), Pk = function(kk, ek) {
          const ik = Math.floor(kk.positions.length / 3),
            Dk = kk.indices.length,
            fk = ik * (ek ? 5 : 3),
            Sk = new Uint8Array(4 * (fk + Dk)),
            bk = new DataView(Sk.buffer);
          for (let mk = 0; mk < 3 * ik; mk++) bk.setFloat32(4 * mk, kk.positions[mk], !0);
          if (ek) {
            var rk;
            const ek = null !== (rk = kk.uvs) && void 0 !== rk ? rk : [];
            for (let kk = 0; kk < 2 * ik; kk++) {
              var Pk;
              bk.setFloat32(4 * (3 * ik + kk), null !== (Pk = ek[kk]) && void 0 !== Pk ? Pk : 0, !0)
            }
          }
          for (let mk = 0; mk < Dk; mk++) bk.setUint32(4 * (fk + mk), kk.indices[mk], !0);
          return Sk
        }(kk, (0, me.e)(ek));
        return (0, Uk.ve)(fk, 0, Dk, Sk, bk, ik, rk, kk.indices.length, Pk) && this.liveMeshes.add(Dk), Dk
      }
      setGameMesh(kk, ek) {
        var ik;
        const Dk = this.deps.cmd();
        if (!Dk) return;
        let fk = 0;
        ek.anchor && (fk |= Uk.Pb.Anchor, ei[0] = ek.anchor[0], ei[1] = ek.anchor[1], ei[2] = ek.anchor[2]), void 0 !== ek.visible && (fk |= Uk.Pb.Visible), ek.uvOffset && (fk |= Uk.Pb.UvOffset, ii[0] = ek.uvOffset[0], ii[1] = ek.uvOffset[1]);
        const Sk = null !== (ik = ek.visibility) && void 0 !== ik ? ik : 1;
        void 0 !== ek.visibility && (fk |= Uk.Pb.Visibility), ek.scale && (fk |= Uk.Pb.Scale, Di[0] = ek.scale[0], Di[1] = ek.scale[1], Di[2] = ek.scale[2]), 0 !== fk && (0, Uk.Ae)(Dk, 0, kk, fk, ek.visible ? 1 : 0, ei, ii, Sk, Di)
      }
      disposeGameMesh(kk) {
        const ek = this.deps.cmd();
        ek && !(0, Uk.ye)(ek, 0, kk) || this.liveMeshes.delete(kk)
      }
      hasPackModel(kk) {
        var ek, ik, Dk;
        return null !== (ek = null === (ik = (Dk = this.deps).hasPackModel) || void 0 === ik ? void 0 : ik.call(Dk, kk)) && void 0 !== ek && ek
      }
      disposeGameOutput() {
        const kk = kk => {
          try {
            kk()
          } catch (ek) {
            console.error("Error freeing client game output", ek)
          }
        };
        for (const ek of [...this.liveMeshes]) kk((() => {
          this.disposeGameMesh(ek)
        }));
        for (const ek of [...this.livePools]) kk((() => {
          ek.dispose()
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
      createInstancePool(kk, ek) {
        const ik = this.tables.idOf(kk.item);
        if (void 0 === ik) return null;
        const Dk = new Xe(++this.poolKeys, {
          item: ik,
          scale: kk.scale,
          yaw: kk.yaw
        }, ek, this.poolHost);
        return this.livePools.add(Dk), Dk
      }
      createMobModel(kk, ek) {
        return this.mobModels.create(kk, ek)
      }
      setRouteChevrons(kk) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !kk || 0 === kk.cells.length) return;
        const ek = `${kk.colour} ${kk.alpha}`;
        ek !== this.routeLook && (this.routeLook = ek, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(kk) {
          const [ek, ik, Dk] = kk[0].pos, fk = [], Sk = [], bk = [];
          return kk.forEach(((kk, rk) => {
            let {
              pos: Pk,
              way: [mk, Mk]
            } = kk;
            const Kk = Pk[0] - ek + .5,
              xk = Pk[1] - ik + .04,
              nk = Pk[2] - Dk + .5,
              [Uk, Hk] = [.35 * -Mk, .35 * mk],
              [wk, lk] = [rk * fi, (rk + 1) * fi],
              pk = fk.length / 3;
            fk.push(Kk - .5 * mk + Uk, xk, nk - .5 * Mk + Hk), fk.push(Kk - .5 * mk - Uk, xk, nk - .5 * Mk - Hk), fk.push(Kk + .5 * mk + Uk, xk, nk + .5 * Mk + Hk), fk.push(Kk + .5 * mk - Uk, xk, nk + .5 * Mk - Hk), Sk.push(0, wk, 1, wk, 0, lk, 1, lk), bk.push(pk, pk + 1, pk + 2, pk + 1, pk + 3, pk + 2)
          })), {
            positions: fk,
            uvs: Sk,
            indices: bk
          }
        }(kk.cells), {
          kind: "chevronPath",
          colour: kk.colour,
          alpha: kk.alpha
        }, kk.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(kk) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(kk, 250) / 1e3 * 1.2 * fi) % 1, this.setRouteSlide())
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
        const ek = this.deps.cmd();
        if (!ek) return kk.length = 0, void(this.pendingFar = void 0);
        let ik = 0;
        for (; ik < kk.length && (0, Uk.Ee)(ek, 0, kk[ik]);) ik++;
        kk.splice(0, ik);
        const Dk = this.pendingStyle;
        if (void 0 !== Dk) {
          (Dk ? (0, Uk.vf)(ek, 0, Dk.width, Dk.alpha, 1, Dk.endAtSolidFace ? 1 : 0) : (0, Uk.vf)(ek, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const fk = this.pendingFar;
        void 0 !== fk && (0, Uk.qf)(ek, 0, null !== fk && void 0 !== fk ? fk : 0, null === fk ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(kk, ek) {
        const ik = this.deps.cmd(),
          Dk = ri(kk);
        ik && Dk !== Uk.Sc && (0, Uk.Hf)(ik, 0, Dk, ek)
      }
      setFacingTolerance(kk, ek) {
        const ik = this.deps.cmd(),
          Dk = ri(kk);
        ik && Dk !== Uk.Sc && Pi(ik, Dk, ek)
      }
      forEachEntity(kk) {
        const {
          api: ek
        } = this;
        for (let ik = 0; ik < ek.idStr.length; ik++) {
          const Dk = ek.idStr[ik];
          null === Dk || Lk(ek.kinds[ik]) || kk(Dk)
        }
      }
      getEntityInfo(kk) {
        return this.deps.entityInfo.get(kk)
      }
      isEntityInteractable(kk) {
        const ek = ri(kk);
        return ek !== Uk.Sc && 1 === this.api.queries.entityInteractable(ek)
      }
      isLocalPlayer(kk) {
        return this.isLocal(kk)
      }
      getLineOwner(kk) {
        var ek;
        const ik = null === (ek = this.deps.entityInfo.get(kk)) || void 0 === ek ? void 0 : ek.meshOpts;
        if (!ik) return null;
        try {
          const {
            lineToEId: kk
          } = JSON.parse(ik);
          return null !== kk && void 0 !== kk ? kk : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const kk = this.api.apiView;
        return Je[0] = Uk.t.eye(kk, 0, 0), Je[1] = Uk.t.eye(kk, 0, 1), Je[2] = Uk.t.eye(kk, 0, 2), Je
      }
      getCameraFar() {
        return Uk.t.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(kk) {
        null !== kk && (this.farSet = !0), this.pendingFar = kk, this.flushOwed()
      }
      turnCamera(kk, ek) {
        this.cameraTurn.turn(kk, ek)
      }
      clearPickupDelay(kk) {
        const ek = this.deps.cmd(),
          ik = ri(kk);
        ek && ik !== Uk.Sc && (0, Uk.ge)(ek, 0, ik)
      }
      sendChat(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = this.deps.sendCmd();
        ik && Ze(ik, 0, ge.e.Chat, (0, Ek.c)((0, ge.j)({
          hM: kk,
          aM: ek
        })))
      }
      sendCommand(kk) {
        kk.length <= 119 && this.sendChat(`/${kk}`)
      }
      predictedCells(kk, ek, ik, Dk) {
        const fk = this.chunks,
          Sk = [],
          bk = (kk, ek, ik, Dk, fk) => {
            Sk.push(kk, ek, ik, Dk, this.tables.blockRootId(fk) === this.tables.blockRootId(Dk) ? 0 : 1)
          },
          rk = fk.wP(kk, ek, ik),
          Pk = bi(rk);
        if (Pk) {
          const [Dk, Sk, mk] = [kk - Pk.x, ek - Pk.y, ik - Pk.z], Mk = Si[fk.wP(Dk, Sk, mk)], Kk = null === Mk || void 0 === Mk ? void 0 : Mk.positions.some((kk => kk.id === rk && kk.x === Pk.x && kk.y === Pk.y && kk.z === Pk.z));
          for (const kk of (Kk && Mk ? Mk : Pk.main).positions) fk.wP(Dk + kk.x, Sk + kk.y, mk + kk.z) === kk.id && bk(Dk + kk.x, Sk + kk.y, mk + kk.z, 0, kk.id)
        }
        const mk = bi(Dk);
        if (mk)
          for (const Kk of mk.main.positions) {
            const [Dk, Sk, rk] = [kk + Kk.x - mk.x, ek + Kk.y - mk.y, ik + Kk.z - mk.z];
            bk(Dk, Sk, rk, Kk.id, fk.wP(Dk, Sk, rk))
          } else bk(kk, ek, ik, Dk, rk);
        const Mk = this.tables;
        if ((0 !== Mk.attachedTopOf(rk) || 0 !== Mk.attachedTopOf(Dk)) && fk.isLoaded(kk, ek + 1, ik)) {
          let Pk = fk.wP(kk, ek + 1, ik);
          for (let Dk = 0; Dk < Sk.length; Dk += 5) Sk[Dk] === kk && Sk[Dk + 1] === ek + 1 && Sk[Dk + 2] === ik && (Pk = Sk[Dk + 3]);
          const mk = this.attachedTopWrite(rk, Dk, Pk);
          void 0 !== mk && bk(kk, ek + 1, ik, mk, Pk)
        }
        return Sk
      }
      attachedTopWrite(kk, ek, ik) {
        const Dk = this.tables,
          fk = Dk.attachedTopOf(kk),
          Sk = Dk.attachedTopOf(ek),
          bk = 0 !== fk && 0 !== ik && Dk.blockRootId(ik) === Dk.blockRootId(fk);
        return 0 !== fk && 0 !== Sk && Dk.blockRootId(kk) === Dk.blockRootId(ek) ? bk && ik !== Sk ? Sk : void 0 : 0 === Sk || !bk && 0 !== ik ? bk ? 0 : void 0 : Sk
      }
    }
    const Mi = Uk.bc + Uk.ec * Uk.kc.BYTES,
      Ki = 2147483647,
      xi = new TextDecoder,
      ni = new TextEncoder,
      Ui = Object.freeze({
        EM: 0,
        vr: null,
        amountAddedToSlot: 0
      }),
      Hi = new Proxy({}, {
        get: () => () => Uk.ad
      });

    function wi(kk) {
      return Number.isInteger(kk) && kk >= 0 && kk <= 65535
    }

    function li(kk) {
      return Number.isInteger(kk) && kk >= 0 && kk <= 4294967295
    }
    class yi {
      constructor(kk) {
        this.deps = kk, this.le = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Uk.ec), this.ids = new Uint16Array(Uk.ec), this.amounts = new Uint16Array(Uk.ec), this.attrRead = new Float64Array(Uk.ec).fill(-1), this.stale = new Uint16Array(Uk.ec), this.staleVersion = new Uint32Array(Uk.ec), this.instances = new Uint32Array(Uk.ec), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
        var ek;
        return Number.isInteger(kk) && kk >= 0 && kk < this.len && 0 !== this.ids[kk] && null !== (ek = this.facades[kk]) && void 0 !== ek ? ek : null
      }
      XM() {
        return this.slot(this.selected)
      }
      playerItems() {
        const kk = [];
        for (let ek = 0; ek < Math.min(Uk.id, this.len); ek++) kk.push(this.slot(ek));
        return kk
      }
      freeSlots() {
        let kk = 0;
        for (let ek = 0; ek < Math.min(Uk.id - Uk.i, this.len); ek++) 0 === this.ids[ek] && kk++;
        return kk
      }
      amountOf(kk) {
        let ek = 0;
        for (let Dk = 0; Dk < Math.min(Uk.id, this.len); Dk++) {
          const fk = this.slot(Dk);
          var ik;
          if ((null === fk || void 0 === fk ? void 0 : fk.name) === kk) ek += null !== (ik = fk.amount) && void 0 !== ik ? ik : 1
        }
        return ek
      }
      instance(kk) {
        var ek;
        return null !== (ek = this.instances[kk]) && void 0 !== ek ? ek : 0
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
          for (const ik of [...this.listeners]) try {
            ik()
          } catch (ek) {
            kk(ek)
          }
        }
      }
      chestOpened(kk, ek, ik) {
        this.le[0] = kk, this.le[1] = ek, this.le[2] = ik, this.version++
      }
      refresh() {
        const kk = this.deps.api.apiView,
          ek = Uk.t.inventoryViewPtr(kk, 0),
          ik = Uk.t.inventoryVersion(kk, 0),
          Dk = Uk.t.selectedSlot(kk, 0);
        Dk !== this.selected && (this.selected = Dk, this.version++);
        const fk = Uk.t.slotIcon(kk, 0);
        if (fk !== this.slotIconId && (this.slotIconId = fk, this.iconChanged = !0), ek === this.viewPtr && ik === this.viewVersion) return;
        this.viewPtr = ek, this.viewVersion = ik;
        const Sk = this.deps.api.memoryData(ek, Mi, 4, "the inventory view"),
          bk = Sk ? Math.min(Sk.getUint32(0, !0), Uk.ec) : 0;
        bk !== this.len && (this.len = bk, this.version++);
        let rk = 0;
        for (let Pk = 0; Pk < Uk.ec; Pk++) {
          const kk = Uk.bc + Pk * Uk.kc.BYTES,
            ek = null !== Sk && Pk < bk ? Uk.kc.item(Sk, kk) : 0;
          if (0 === ek || null === Sk) {
            0 !== this.ids[Pk] && (this.ids[Pk] = 0, this.attrRead[Pk] = -1, this.instances[Pk]++, this.version++);
            continue
          }
          const ik = Uk.kc.amount(Sk, kk),
            Dk = Uk.kc.attrVersion(Sk, kk);
          ek === this.ids[Pk] && ik === this.amounts[Pk] || this.fill(Pk, ek, ik), Dk !== this.attrRead[Pk] && (this.stale[rk] = Pk, this.staleVersion[rk] = Dk, rk++)
        }
        rk > 0 && this.fetchAttributes(rk)
      }
      fill(kk, ek, ik) {
        const {
          tables: Dk
        } = this.deps, fk = ek !== this.ids[kk];
        let Sk = this.facades[kk];
        Sk || (Sk = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[kk] = Sk), fk && (Sk.name = Dk.nameOfId(ek), Sk.typeObj = Dk.itemType(ek), Sk.attributes = {
          customAttributes: {}
        }, this.attrRead[kk] = -1, this.instances[kk]++), Sk.amount = 0 === ik ? null : ik, this.ids[kk] = ek, this.amounts[kk] = ik, this.version++
      }
      fetchAttributes(kk) {
        const {
          api: ek,
          onError: ik
        } = this.deps, Dk = ek.memoryView(Uint16Array, ek.scratch(), kk, "item_attributes_batch's slots");
        if (!Dk) return void this.markRead(kk);
        Dk.set(this.stale.subarray(0, kk));
        const fk = ek.queries.itemAttributesBatch(kk),
          Sk = 4294967295 === fk ? null : ek.memoryData(ek.scratch(), fk, 4, "item_attributes_batch's answer");
        if (!Sk) return void this.markRead(kk);
        const bk = new Uint8Array(Sk.buffer, Sk.byteOffset, fk);
        for (let Pk = 0; Pk + 8 <= fk;) {
          const kk = Sk.getUint16(Pk, !0),
            ek = Sk.getUint32(Pk + 4, !0),
            Dk = bk.subarray(Pk + 8, Pk + 8 + ek);
          Pk += 8 + (0, xk.Ie)(ek);
          const fk = this.facades[kk];
          if (fk && 0 !== this.ids[kk] && 0 !== ek) {
            try {
              fk.attributes = JSON.parse(xi.decode(Dk))
            } catch (rk) {
              ik(rk)
            }
            this.version++
          }
        }
        this.markRead(kk)
      }
      markRead(kk) {
        for (let ek = 0; ek < kk; ek++) this.attrRead[this.stale[ek]] = this.staleVersion[ek]
      }
      swap(kk, ek) {
        return wi(kk) && wi(ek) && this.settle(this.queries().invSwap(kk, ek))
      }
      move(kk, ek, ik) {
        return wi(kk) && wi(ek) && li(ik) && this.settle(this.queries().invMove(kk, ek, ik))
      }
      quickMove(kk, ek, ik, Dk) {
        var fk, Sk;
        if (!wi(kk) || !wi(ek) || !wi(ik) || null !== Dk && !li(Dk)) return null;
        const bk = this.queries().invQuickMove(kk, ek, ik, null === Dk ? -1 : Math.min(Dk, Ki)),
          rk = bk === Uk.ad ? Uk.Ab : null !== (fk = null === (Sk = this.extras()) || void 0 === Sk ? void 0 : Sk[1]) && void 0 !== fk ? fk : Uk.Ab;
        return this.settle(bk), rk === Uk.Ab ? null : rk
      }
      remove(kk, ek, ik) {
        return wi(kk) && li(ek) && this.settle(this.queries().invRemove(kk, ek, ik ? 1 : 0))
      }
      selectSlot(kk) {
        return wi(kk) && this.settle(this.queries().selectSlot(kk))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(kk, ek, ik) {
        if (!wi(kk) || !Number.isInteger(ek)) return !1;
        const [Dk, fk, Sk] = ik;
        return this.settle(this.queries().invEnchant(kk, ek, Math.floor(Dk), Math.floor(fk), Math.floor(Sk)))
      }
      craft(kk, ek, ik) {
        let Dk;
        try {
          Dk = this.deps.tables.getItemId(kk)
        } catch {
          return Ui
        }
        if (!wi(ek) || null !== ik && (Number.isNaN(ik) || ik < 0)) return Ui;
        const fk = null === ik || ik > Ki ? -1 : Math.floor(ik),
          Sk = this.queries().craft(Dk, ek, fk);
        let bk = Ui;
        const rk = Sk === Uk.ad ? null : this.extras();
        if (rk) {
          const [kk, ek, ik] = rk;
          bk = {
            EM: kk,
            vr: ek === Uk.Ab ? null : ek,
            amountAddedToSlot: ik
          }
        }
        return this.settle(Sk), bk
      }
      salvage(kk, ek, ik) {
        let Dk;
        try {
          Dk = this.deps.tables.getItemId(ek)
        } catch {
          return !1
        }
        return wi(kk) && Number.isInteger(ik) && this.settle(this.queries().salvage(kk, Dk, Math.max(Math.min(ik, Ki), -Ki)))
      }
      craftingView(kk, ek, ik) {
        var Dk;
        if (this.stopped) return null;
        const {
          api: fk,
          onError: Sk
        } = this.deps, bk = kk ? ni.encode(kk) : null;
        if (null !== bk) {
          if (bk.length > 1024) return Sk(new Error(`The crafting station ${kk}'s name is over 1024 bytes`)), null;
          const ek = fk.memoryView(Uint8Array, fk.scratch(), bk.length, "crafting_view's station");
          if (!ek) return null;
          ek.set(bk)
        }
        const rk = wi(ek) && wi(ik),
          Pk = fk.queries.craftingView(null !== (Dk = null === bk || void 0 === bk ? void 0 : bk.length) && void 0 !== Dk ? Dk : 0, rk ? ek : 0, rk ? ik : 0);
        return Pk < Uk.Z.BYTES ? (fk.reportCorruption(`crafting_view's answer of ${Pk} bytes`), null) : fk.memoryData(fk.scratch(), Pk, 1, "crafting_view's answer")
      }
      queries() {
        var kk, ek;
        return !1 === (null === (kk = (ek = this.deps).beforeOp) || void 0 === kk ? void 0 : kk.call(ek)) ? (this.stopped = !0, Hi) : this.deps.api.queries
      }
      extras() {
        const {
          api: kk
        } = this.deps;
        return kk.memoryView(Uint32Array, kk.scratch(), 3, "a sync query's extra words")
      }
      settle(kk) {
        if (kk === Uk.Yc)(0, oe.b)();
        else if (kk !== Uk.ad) {
          const ek = this.deps.cmd();
          ek && function(kk, ek, ik) {
            return (0, oe.b)(), (0, Uk.Of)(kk, ek, ik)
          }(ek, 0, kk) || this.deps.onError(new Error(`Sync op ${kk}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), kk !== Uk.ad
      }
    }
    const Yi = 1 / .6,
      Li = [0, 1, 0],
      Ci = [0, 0, 0],
      Ai = new Uint8Array(0),
      ji = 1.2 * He.g.zp,
      si = new TextEncoder,
      di = [0, 0, 0],
      Vi = [0, 0, 0],
      Fi = new Map;

    function ui(kk) {
      let ek = Fi.get(kk);
      return ek || (Fi.size >= 64 && Fi.clear(), ek = si.encode(`{"emitRate":${kk}}`), Fi.set(kk, ek)), ek
    }

    function qi(kk) {
      return Number.isFinite(kk) && kk > 0 ? kk : 0
    }

    function Ii(kk, ek) {
      for (let ik = 0; ik < 3; ik++) {
        const Dk = Math.abs(ek[ik]);
        di[ik] = kk[ik] - Dk, Vi[ik] = 2 * Dk
      }
      return Number.isFinite(di[0] + di[1] + di[2] + Vi[0] + Vi[1] + Vi[2])
    }

    function zi(kk, ek) {
      return "pos1" === kk || "pos2" === kk ? void 0 : ek
    }

    function Qi(kk, ek, ik) {
      return kk.length > Uk.vd.MaxOpts ? (ik(new Error(`${ek}'s particle opts are over ${Uk.vd.MaxOpts} bytes of JSON`)), null) : kk
    }
    const vi = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Ei {
      constructor(kk) {
        this.deps = kk, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(kk, ek) {
        var ik;
        const Dk = this.sink(),
          fk = null !== (ik = ek.half) && void 0 !== ik ? ik : Ci;
        if (!Dk || this.live >= Uk.vd.MaxLiveKeys || this.nextKey > Uk.vd.MaxKey || !Ii(ek.pos, fk)) return vi;
        const Sk = this.nextKey,
          bk = Qi(function(kk) {
            var ek, ik, Dk;
            const fk = JSON.stringify({
              texture: "string" === typeof kk.texture ? kk.texture : "smokePuff",
              vK: kk.vK,
              minLifeTime: kk.minLifeTime,
              maxLifeTime: kk.maxLifeTime,
              minSize: kk.minSize,
              maxSize: kk.maxSize,
              minEmitPower: kk.minEmitPower,
              maxEmitPower: kk.maxEmitPower,
              emitRate: qi(kk.emitRate),
              gravity: null !== (ek = kk.gravity) && void 0 !== ek ? ek : Ci,
              dir1: null !== (ik = kk.dir1) && void 0 !== ik ? ik : Li,
              dir2: null !== (Dk = kk.dir2) && void 0 !== Dk ? Dk : Li,
              colorGradients: kk.colorGradients,
              blendMode: kk.blendMode
            });
            return si.encode(fk)
          }(kk), "createParticles", this.deps.onError);
        return bk && (0, Uk.Ue)(Dk, 0, Sk, 0, Uk.vd.PresetNone, 0, di, Vi, bk) ? (this.nextKey++, this.live++, this.started = !0, new ai(this, this.session, Sk, kk, fk)) : vi
      }
      playEffect(kk) {
        const ek = this.sink(),
          {
            pos1: ik,
            pos2: Dk
          } = kk;
        if (!ek || !ik || !Dk) return;
        for (let Sk = 0; Sk < 3; Sk++) di[Sk] = Math.min(ik[Sk], Dk[Sk]), Vi[Sk] = Math.abs(Dk[Sk] - ik[Sk]);
        if (!Number.isFinite(di[0] + di[1] + di[2] + Vi[0] + Vi[1] + Vi[2])) return;
        const fk = Qi(si.encode(JSON.stringify(kk, zi)), "playParticleEffect", this.deps.onError);
        fk && (0, Uk.Pe)(ek, 0, 0, Uk.vd.PresetNone, Uk.vd.HasBox, 0, di, Vi, fk)
      }
      burstPreset(kk, ek, ik) {
        const Dk = this.sink(),
          fk = Math.min(Math.floor(ik), Uk.vd.MaxBurst);
        if (!Dk || !Object.hasOwn(Uk.Tb, kk) || !(fk > 0)) return;
        const Sk = ji;
        for (let bk = 0; bk < 3; bk++) di[bk] = ek[bk] - Sk / 2, Vi[bk] = Sk;
        Number.isFinite(di[0] + di[1] + di[2]) && (0, Uk.Pe)(Dk, 0, 0, Uk.Tb[kk], Uk.vd.HasBox, fk, di, Vi, Ai)
      }
      sessionEnded() {
        this.session++;
        const kk = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !kk || (0, Uk.We)(kk, 0)
      }
      sinkFor(kk) {
        return kk === this.session ? this.deps.cmd() : null
      }
      stop(kk, ek) {
        const ik = this.sinkFor(kk);
        ik && (0, Uk.Xe)(ik, 0, ek) && this.live--
      }
    }
    class ai {
      constructor(kk, ek, ik, Dk, fk) {
        this.owner = kk, this.session = ek, this.key = ik, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(fk[0]), Math.abs(fk[1]), Math.abs(fk[2])], this.rate = qi(Dk.emitRate), this.emitted = this.rate > 0;
        const Sk = Dk.maxLifeTime * Yi * 1e3 + 250;
        this.stopDelayMs = Sk >= 0 ? Math.min(Sk, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(kk, ek) {
        const ik = this.sink();
        if (ik) {
          if (ek)
            for (let kk = 0; kk < 3; kk++) this.half[kk] = Math.abs(ek[kk]);
          Ii(kk, this.half) && (0, Uk._e)(ik, 0, this.key, Uk.vd.HasBox, di, Vi, Ai)
        }
      }
      setEmitRate(kk) {
        const ek = this.sink(),
          ik = qi(kk);
        ek && ik !== this.rate && (0, Uk._e)(ek, 0, this.key, 0, Ci, Ci, ui(ik)) && (this.rate = ik, this.emitted ||= ik > 0)
      }
      emit(kk) {
        const ek = this.sink(),
          ik = Math.min(Math.floor(kk), Uk.vd.MaxBurst);
        ek && ik > 0 && (0, Uk.Pe)(ek, 0, this.key, Uk.vd.PresetNone, 0, ik, Ci, Ci, Ai) && (this.emitted = !0)
      }
      emitPoints(kk, ek, ik) {
        const Dk = this.sink(),
          fk = Math.min(Math.floor(ik), Uk.vd.MaxPoints, Math.floor(ek.length / 4));
        if (!Dk || !(fk > 0) || !Number.isFinite(kk[0] + kk[1] + kk[2])) return;
        const Sk = new Uint8Array(ek.buffer, ek.byteOffset, fk * Uk.vd.PointBytes);
        (0, Uk.Te)(Dk, 0, this.key, fk, kk, Sk) && (this.emitted = !0)
      }
      setDirections(kk, ek) {
        const ik = this.sink();
        if (!ik || !Number.isFinite(kk[0] + kk[1] + kk[2] + ek[0] + ek[1] + ek[2])) return;
        const Dk = si.encode(JSON.stringify({
          dir1: [kk[0], kk[1], kk[2]],
          dir2: [ek[0], ek[1], ek[2]]
        }));
        (0, Uk._e)(ik, 0, this.key, 0, Ci, Ci, Dk)
      }
      stop() {
        const kk = this.sink();
        this.stopped = !0, kk && (this.emitted ? (this.rate > 0 && (0, Uk._e)(kk, 0, this.key, 0, Ci, Ci, ui(0)), setTimeout((() => {
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
    const Wi = Be.q,
      ti = new TextDecoder;

    function Xi(kk, ek) {
      const {
        serverIds: ik,
        kinds: Dk
      } = kk;
      let fk = 0;
      for (let Sk = 0; Sk < ik.length; Sk++) {
        const kk = ik[Sk];
        if (kk !== Uk.Sc && !Lk(Dk[Sk])) {
          if (fk === ek.length) {
            const kk = new Int32Array(Math.max(64, 2 * fk));
            kk.set(ek), ek = kk
          }
          ek[fk++] = kk
        }
      }
      return {
        ids: ek,
        count: fk
      }
    }

    function Bi(kk, ek) {
      return kk.length >= ek ? kk : new Int32Array(Math.max(ek, 2 * kk.length))
    }

    function ci(kk, ek, ik, Dk) {
      for (let fk = 0; fk < ik; fk += 4096) {
        const Sk = Math.min(4096, ik - fk),
          bk = kk.memoryView(Int32Array, kk.scratch(), Sk, "entity_info_batch's ids");
        if (!bk) return !1;
        bk.set(ek.subarray(fk, fk + Sk));
        const rk = kk.queries.entityInfoBatch(Sk),
          Pk = 4294967295 === rk ? null : kk.memoryData(kk.scratch(), rk, 4, "entity_info_batch's records");
        if (!Pk) return !1;
        for (let kk = 0; kk + Uk.Ib.BYTES <= rk;) {
          const ek = Uk.Ib.len(Pk, kk);
          Dk(Uk.Ib.serverId(Pk, kk), Ti(Pk, kk, ek)), kk += Uk.Ib.BYTES + (0, xk.Ie)(ek)
        }
      }
      return !0
    }

    function Ti(kk, ek, ik) {
      var Dk, fk, Sk;
      const bk = Uk.Ib.kind(kk, ek),
        rk = 0 === bk ? null : Ck(bk);
      if (null === rk) return null;
      const Pk = Uk.Ib.variation(kk, ek),
        mk = Uk.Ib.pose(kk, ek),
        Mk = Uk.Ib.meta(kk, ek),
        Kk = Uk.Ib.mesh(kk, ek),
        xk = 0 !== (Uk.Ib.flags(kk, ek) & Uk.Fb.HasOpts),
        nk = Wi[rk];
      return Object.freeze({
        type: rk,
        variation: Pk === Uk.Wc ? void 0 : null !== (Dk = null !== (fk = null === nk || void 0 === nk ? void 0 : nk[Pk]) && void 0 !== fk ? fk : null === nk || void 0 === nk ? void 0 : nk[0]) && void 0 !== Dk ? Dk : "default",
        pose: mk === Uk.Zb ? void 0 : null !== (Sk = Uk.vb[mk]) && void 0 !== Sk ? Sk : Uk.vb[0],
        metaInfo: Mk === Uk.Zb ? void 0 : Uk.Ec[Mk],
        meshKind: Kk === Uk.Zb ? void 0 : Uk.Dc[Kk],
        meshOpts: xk ? ti.decode(new Uint8Array(kk.buffer, kk.byteOffset + ek + Uk.Ib.BYTES, ik)) : void 0
      })
    }
    const oi = 1,
      Zi = 2;
    class Oi {
      constructor(kk) {
        this.deps = kk, this.wanted = 0, this.XM = !1, this.refused = !1
      }
      get on() {
        return this.XM
      }
      want(kk, ek) {
        this.wanted = ek ? this.wanted | kk : this.wanted & ~kk;
        const ik = 0 !== this.wanted;
        if (ik === this.XM) return;
        const Dk = this.deps.cmd();
        null !== Dk ? (0, Uk.Vf)(Dk, 0, ik ? 1 : 0) ? (this.XM = ik, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.XM = !1
      }
    }
    class gi {
      constructor(kk) {
        this.deps = kk, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(kk) {
        var ek;
        return this.complete || this.fill(), null !== (ek = this.entries.get("string" === typeof kk ? kk : String(kk))) && void 0 !== ek ? ek : null
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
            api: ek
          } = this.deps;
          let ik = 0;
          const Dk = this.ids = Bi(this.ids, kk);
          for (let fk = 0; fk < kk; fk++) {
            const kk = this.pending[fk],
              Sk = ek.indexById.get(kk);
            void 0 === Sk || Lk(ek.kinds[Sk]) ? this.entries.delete(String(kk)) : Dk[ik++] = kk
          }
          ik > 0 && !this.batch(Dk, ik) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(oi, !1)
      }
      fill() {
        const {
          api: kk
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: kk
          } = this.deps, ek = kk.on;
          kk.want(oi, !0), !ek && kk.on && (this.refill = this.midFrame)
        }
        const {
          ids: ek,
          count: ik
        } = Xi(kk, this.ids);
        this.ids = ek, ik > 0 && !this.batch(ek, ik) && (this.refill = !0)
      }
      batch(kk, ek) {
        return ci(this.deps.api, kk, ek, ((kk, ek) => {
          null === ek ? this.entries.delete(String(kk)) : this.entries.set(String(kk), ek)
        }))
      }
    }
    var Gi = ik(4741);

    function Ni(kk) {
      if ("message" !== kk.type || kk.hM !== Gi.tc.NewClientOptions || kk.payloadKind !== xk.zc.Msgpack) return null;
      const ek = (0, Ek.b)(kk.payload);
      if (null === ek || "object" !== typeof ek || Array.isArray(ek)) throw new Error("NewClientOptions whose body isn't an object of options");
      return ek
    }
    var Ri = ik(1218),
      Ji = ik(36167);

    function kD(kk, ek, ik, Dk, fk, Sk, rk) {
      var Pk, mk, Mk;
      switch (kk) {
        case Uk.Sd.ToggleMenu: {
          const kk = Uk.C[ek];
          bk.j.tm("toggleMenu", void 0 === kk ? "inventory" : `inventory|${kk}`);
          break
        }
        case Uk.Sd.EditBoard:
          bk.j.tm("EditBoard", {
            pos: 0 === ek ? null : ik
          });
          break;
        case Uk.Sd.EditCodeBlock:
        case Uk.Sd.ViewCodeBlock:
          bk.j.tm("EditCodeBlock", {
            pos: ik,
            canChangePos: kk === Uk.Sd.EditCodeBlock
          });
          break;
        case Uk.Sd.EditCustomLobbyBlock:
          bk.j.tm("EditCustomLobbyBlock", {
            pos: ik
          });
          break;
        case Uk.Sd.OpenIronChest:
          bk.j.tm("OpenIronChest", {
            pos: ik
          });
          break;
        case Uk.Sd.EditNameTag:
          bk.j.tm("EditNameTag", null !== (Pk = null === (mk = fk.XM()) || void 0 === mk || null === (Mk = mk.attributes.customAttributes) || void 0 === Mk ? void 0 : Mk.text) && void 0 !== Pk ? Pk : "");
          break;
        case Uk.Sd.EditBook: {
          var Kk, xk, Hk;
          const kk = null === (Kk = fk.XM()) || void 0 === Kk ? void 0 : Kk.attributes;
          bk.j.tm("EditBook", {
            pages: (0, Ri.S)(null === kk || void 0 === kk || null === (xk = kk.customAttributes) || void 0 === xk ? void 0 : xk.pages),
            title: null !== (Hk = null === kk || void 0 === kk ? void 0 : kk.customDisplayName) && void 0 !== Hk ? Hk : "Title",
            isPublished: !(null === kk || void 0 === kk || !kk.customDescription)
          });
          break
        }
        case Uk.Sd.CantChangeBlock:
          ! function(kk, ek) {
            const ik = ek.getClientOption("cantChangeError"),
              Dk = ek.getClientOption(kk ? "cantBuildError" : "cantBreakError"),
              fk = kk ? ik : Dk;
            (ek.getClientOption("canChange") || fk || "You cannot modify this block" !== ik) && bk.j.tm("showBottomMessage", {
              message: Dk || ik,
              type: "Error"
            })
          }(1 === ek, Sk);
          break;
        case Uk.Sd.MiddleBarStart:
          bk.j.tm("middleScreenBarInitiate", {
            duration: Dk,
            he: 1 === ik[0],
            horizBarRemOffset: ek
          });
          break;
        case Uk.Sd.MiddleBarStop:
          bk.j.tm("middleScreenBarRemove");
          break;
        case Uk.Sd.Hitmarker:
          bk.j.tm("localGunHitmarker", {
            tS: 1 === ek
          });
          break;
        case Uk.Sd.ShotsLeft:
          bk.j.tm("localPlayerNewShotsLeft", Dk);
          break;
        case Uk.Sd.AimingOverlay:
          bk.j.tm("aimingOverlay", 3 === (3 & ek) ? "sniper" : "none");
          break;
        case Uk.Sd.BottomMessage:
          bk.j.tm("showBottomMessage", JSON.parse(rk()));
          break;
        case Uk.Sd.Crosshair:
          fk.inaccuracy = (0, hk.f)(Dk), (0, Ji.d)().crosshairAccuracy(fk.inaccuracy);
          break;
        case Uk.Sd.ChargeStage:
          break;
        case Uk.Sd.EmoteWheelClose:
          bk.j.tm("requestEmoteWheelClose");
          break;
        case Uk.Sd.BlockMined:
          bk.j.tm("localBlockMined");
          break;
        default:
          throw new nk.c(`UiEvent of no kind: what ${kk}`)
      }
    }
    var eD = ik(37586),
      iD = ik(33774),
      DD = ik(1920),
      fD = ik(36382),
      SD = ik(33784),
      bD = ik(4721);
    const rD = 10,
      PD = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      mD = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      MD = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function KD(kk, ek) {
      let ik, Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Sk = () => (ik = (0, DD.r)(ik, ek()), ik);
      return {
        current: Sk,
        watch(ek) {
          const ik = () => {
              ek(Sk())
            },
            bk = [kk.watch(ik)];
          return null !== Dk && bk.push((0, DD.t)((kk => {
            kk.some(Dk) && ik()
          }))), null !== fk && bk.push(fk(ik)), () => {
            for (const kk of bk) kk()
          }
        }
      }
    }

    function xD(kk) {
      return kk && {
        name: kk.name,
        amount: kk.amount,
        attributes: kk.attributes
      }
    }
    const nD = new WeakMap;

    function UD(kk) {
      let ek = nD.get(kk);
      return void 0 === ek && (ek = (0, SD.creativeItemIds)().map((ek => ({
        name: kk.nameOfId(ek),
        amount: kk.isStackableId(ek) ? 1 : null,
        attributes: (0, eD.c)("Gun" === (0, SD.itemTypeOf)(ek) ? {
          type: "Gun",
          clipSize: (0, SD.clipSizeOf)(ek)
        } : void 0)
      }))), nD.set(kk, ek)), ek
    }

    function HD(kk, ek, ik, Dk) {
      const fk = ek => (kk.flush(Dk), ek),
        Sk = ik => {
          var Dk, fk, Sk, bk, rk, Pk, mk;
          const Mk = kk.slot(ik);
          if (!Mk) return null;
          const {
            rootName: Kk,
            metaStr: xk
          } = ek.getMetaInfo(Mk.name);
          return {
            name: Mk.name,
            amount: Mk.amount,
            attributes: Mk.attributes,
            instance: kk.instance(ik),
            displayName: null !== (Dk = Mk.attributes.customDisplayName) && void 0 !== Dk ? Dk : ek.getDisplayName(Kk),
            requiresAmmo: "RequiresAmmo" === xk,
            clipSize: null !== (fk = null !== (Sk = null === (bk = Mk.attributes.customAttributes) || void 0 === bk || null === (rk = bk.gunStats) || void 0 === rk ? void 0 : rk.clipSize) && void 0 !== Sk ? Sk : null === (Pk = ek.getGunStats(Kk)) || void 0 === Pk ? void 0 : Pk.clipSize) && void 0 !== fk ? fk : null === (mk = Mk.typeObj) || void 0 === mk ? void 0 : mk.clipSize
          }
        },
        rk = function(kk, ek) {
          let ik = null,
            Dk = {
              focus: null,
              recipes: [],
              detail: null
            },
            fk = -1;
          const Sk = new Set;
          return {
            read() {
              var Sk, bk;
              if (null === ik) return null !== Dk.focus && (Dk = {
                ...Dk,
                focus: null
              }), Dk;
              if (Dk.focus === ik && fk === kk.changes) return Dk;
              if (fk = kk.changes, 0 === kk.length) return Dk = {
                focus: ik,
                recipes: [],
                detail: null
              }, Dk;
              let rk = 0;
              if (null !== ik.recipe) try {
                rk = ek.getItemId(ik.recipe.name)
              } catch {}
              const Pk = kk.craftingView(ik.station, rk, null !== (Sk = null === (bk = ik.recipe) || void 0 === bk ? void 0 : bk.vM) && void 0 !== Sk ? Sk : 0);
              return Dk = null === Pk ? {
                focus: ik,
                recipes: [],
                detail: null
              } : function(kk, ek, ik) {
                let Dk = Uk.Z.BYTES;
                const fk = [];
                for (let Mk = Uk.Z.recipes(kk, 0); Mk > 0; Mk--) {
                  const ik = Uk.U.flags(kk, Dk),
                    Sk = {
                      name: ek.nameOfId(Uk.U.item(kk, Dk)),
                      vM: Uk.U.recipe(kk, Dk),
                      requires: [],
                      produces: Uk.U.produces(kk, Dk),
                      haveIngredients: 0 !== (ik & Uk.Q.HaveIngredients),
                      listed: 0 !== (ik & Uk.Q.Listed)
                    };
                  let bk = Uk.U.requires(kk, Dk);
                  for (Dk += Uk.U.BYTES; bk > 0; bk--) {
                    const ik = Uk.X.items(kk, Dk);
                    Sk.requires.push({
                      items: pD(kk, Dk + Uk.X.BYTES, ik, ek),
                      amt: Uk.X.amount(kk, Dk)
                    }), Dk += Uk.X.BYTES + 2 * ik
                  }
                  fk.push(Sk)
                }
                const Sk = Uk.Z.flags(kk, 0);
                if (null === ik.recipe || 0 === (Sk & Uk.Y.Detail)) return {
                  focus: ik,
                  recipes: fk,
                  detail: null
                };
                const bk = {},
                  rk = {};
                for (let Mk = Uk.Z.ingredients(kk, 0); Mk > 0; Mk--) {
                  const ik = Uk.O.item(kk, Dk),
                    fk = Uk.O.from(kk, Dk),
                    Sk = Uk.O.amount(kk, Dk);
                  Dk += Uk.O.BYTES;
                  const Pk = fk === Uk.B ? null : pD(kk, Dk, fk, ek);
                  if (null !== Pk && (Dk += 2 * fk), 0 === ik) continue;
                  const mk = ek.nameOfId(ik);
                  bk[mk] = Sk, null !== Pk && (rk[mk] = Pk)
                }
                const {
                  name: Pk,
                  vM: mk
                } = ik.recipe;
                return {
                  focus: ik,
                  recipes: fk,
                  detail: {
                    name: Pk,
                    vM: mk,
                    craftAllTimes: Uk.Z.craftAllTimes(kk, 0),
                    roomForOne: 0 !== (Sk & Uk.Y.RoomForOne),
                    resultStackable: Boolean(ek.getItemStat(Pk, "stackable")),
                    amounts: bk,
                    ingredientsCraftedFrom: rk
                  }
                }
              }(Pk, ek, ik), Dk
            },
            setFocus(kk) {
              ik = kk;
              for (const ek of [...Sk]) ek()
            },
            watchFocus: kk => (Sk.add(kk), () => {
              Sk.delete(kk)
            })
          }
        }(kk, ek);
      return {
        states: {
          inventory: KD(kk, (() => {
            const ik = kk.length;
            if (0 === ik) return PD;
            const Dk = [];
            for (let ek = 0; ek < Uk.id; ek++) Dk.push(xD(kk.slot(ek)));
            const fk = kk.slotIcon,
              Sk = Dk[kk.selectedSlot];
            0 !== fk && Sk && (Dk[kk.selectedSlot] = {
              ...Sk,
              icon: ek.nameOfId(fk)
            });
            const bk = !0 === ek.getClientOption("creative");
            let rk = [],
              Pk = null;
            if (ik > Uk.id) {
              for (let ek = Uk.id; ek < ik; ek++) rk.push(xD(kk.slot(ek)));
              Pk = {
                type: null,
                pos: [...kk.le],
                numSlots: ik - Uk.id,
                ironChest: null
              }
            } else bk && (rk = UD(ek));
            return {
              player: Dk,
              chestOrCreative: rk,
              chest: Pk,
              creative: bk,
              selectedSlot: kk.selectedSlot,
              freeSlots: kk.freeSlots()
            }
          }), (0, DD.o)("creative")),
          hotbar: KD(kk, (() => {
            if (0 === kk.length) return mD;
            const ek = [];
            for (let kk = 0; kk < rD; kk++) ek.push(Sk(kk));
            return {
              items: ek,
              ammo: kk.amountOf("Ammo"),
              selectedSlot: kk.selectedSlot
            }
          }), (0, DD.k)("DisplayName", "GunStats")),
          crafting: KD(kk, rk.read, null, rk.watchFocus),
          heldItemAim: KD(kk, (() => {
            var ek;
            if (!ik()) return MD;
            const Dk = null === (ek = kk.XM()) || void 0 === ek ? void 0 : ek.typeObj,
              fk = "Gun" === (null === Dk || void 0 === Dk ? void 0 : Dk.type);
            return {
              gun: fk,
              aimable: fk || !0 === (null === Dk || void 0 === Dk ? void 0 : Dk.showsAimingUi),
              chargeName: "Chargeable" === (null === Dk || void 0 === Dk ? void 0 : Dk.type) ? Dk.name : null
            }
          }), null, (kk => function(kk, ek) {
            let ik = kk();
            return (0, bD.x)((() => {
              const Dk = kk();
              Dk !== ik && (ik = Dk, ek(Dk))
            }))
          }(ik, kk)))
        },
        events: {
          hotbarSlotRequested: (0, DD.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, DD.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, DD.d)("numkeyPressed"),
          inventoryDropRequested: (0, DD.d)("DropInvenItem"),
          chestToggled: (0, DD.d)("chestToggleFromServer"),
          chestRefreshed: (0, DD.d)("chestRefreshedFromServer", lD),
          inventorySynced: (0, DD.d)("syncedInvenFromServer", lD),
          enchantingTableOpened: (0, DD.d)("enchantingTable", (kk => {
            let {
              position: ik,
              wP: Dk
            } = kk;
            return {
              position: [...ik],
              blockName: ek.getMetaInfo(Dk).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(ek) {
            kk.selectSlot(ek), kk.flush(Dk)
          },
          removeInventoryItem(ek) {
            let {
              slot: ik,
              amount: Dk,
              drop: Sk
            } = ek;
            return fk(kk.remove(ik, Dk, Sk))
          },
          swapInventorySlots(ek) {
            let {
              a: ik,
              b: Dk
            } = ek;
            return fk(kk.swap(ik, Dk))
          },
          moveInventoryItem(ek) {
            let {
              from: ik,
              to: Dk,
              amount: Sk
            } = ek;
            return fk(kk.move(ik, Dk, Sk))
          },
          quickMoveInventoryItem(ek) {
            let {
              slot: ik,
              start: Dk,
              end: Sk,
              amount: bk
            } = ek;
            return fk(kk.quickMove(ik, Dk, Sk, bk))
          },
          closeChest() {
            kk.closeChest(), kk.flush(Dk), bk.j.tm("chestClosedByPlayer")
          },
          focusCrafting(kk) {
            rk.setFocus(kk)
          },
          craftRecipe(ek) {
            let {
              name: ik,
              vM: Dk,
              times: Sk
            } = ek;
            return fk(kk.craft(ik, Dk, Sk))
          },
          salvageItem(ek) {
            let {
              slot: ik,
              name: Dk,
              amount: Sk
            } = ek;
            return fk(kk.salvage(ik, Dk, Sk))
          },
          enchantItem(ek) {
            let {
              slot: ik,
              level: Dk,
              tablePos: fk
            } = ek;
            kk.enchant(ik, Dk, fk)
          }
        },
        queries: {
          enchantingOffer(ik) {
            let {
              slot: Dk,
              blockName: fk
            } = ik;
            return function(kk, ek, ik, Dk) {
              const fk = kk.slot(ik);
              if (!fk || !ek.getClientOption("canCraft") || !(0, iD.l)(Dk) || (0, iD.k)(fk.attributes)) return wD;
              const Sk = (0, SD.enchantmentPerksOf)(ek.getItemId(fk.name));
              if (0 === Sk.length) return wD;
              const bk = [];
              for (let rk = 0; rk < fD.e; rk++) {
                const {
                  commonProb: kk,
                  uncommonProb: ek,
                  rareProb: ik,
                  epicProb: fk,
                  legendaryProb: Sk,
                  level: Pk
                } = (0, iD.f)(Dk, rk);
                bk.push({
                  level: Pk,
                  odds: [kk, ek, ik, fk, Sk].map((kk => 100 * kk))
                })
              }
              return {
                perks: [...Sk],
                options: bk
              }
            }(kk, ek, Dk, fk)
          }
        }
      }
    }
    const wD = Object.freeze({
      perks: [],
      options: []
    });

    function lD() {
      return null
    }

    function pD(kk, ek, ik, Dk) {
      const fk = [];
      for (let Sk = 0; Sk < ik; Sk++) {
        const ik = kk.getUint16(ek + 2 * Sk, !0);
        0 !== ik && fk.push(Dk.nameOfId(ik))
      }
      return fk
    }
    class yD {
      constructor(kk) {
        this.api = kk, this.positions = new Map, this.targeted = {
          PJ: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          gr: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(kk) {
        let ek = this.positions.get(kk);
        return ek || (this.api.checkValid(kk) || this.api.isLocal(kk) ? (ek = [NaN, NaN, NaN], this.api.readPosition(kk, ek), this.positions.set(kk, ek), ek) : null)
      }
      bkk() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [ek, ik] of this.positions) this.api.readPosition(ek, ik) || this.api.checkValid(ek) || this.api.isLocal(ek) || this.positions.delete(ek);
        const kk = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Uk.t.playerFlags(kk, 0) & Uk.yd.Breaking) && Uk.t.breakingProgress(kk, 0) >= 0, this.isBreaking)
          for (let ek = 0; ek < 3; ek++) this.breaking[ek] = Uk.t.breakingPos(kk, 0, ek)
      }
      refreshTarget() {
        const kk = this.api.apiView,
          ek = Uk.t.targetBlockId(kk, 0);
        if (this.hasTarget = ek !== Uk.Vc, this.hasTarget) {
          const ik = this.targeted;
          ik.PJ = ek;
          for (let ek = 0; ek < 3; ek++) ik.position[ek] = Uk.t.targetBlock(kk, 0, ek), ik.normal[ek] = Uk.t.targetNormal(kk, 0, ek), ik.gr[ek] = Uk.t.targetAdjacent(kk, 0, ek)
        }
      }
      despawned(kk) {
        const ek = this.positions.get(kk);
        ek && !this.api.isLocal(kk) && (ek.fill(NaN), this.positions.delete(kk))
      }
    }
    var YD = ik(40210),
      LD = ik(40191),
      CD = ik(36376);
    const AD = 1,
      jD = 2;
    class sD {
      constructor() {
        this.game = new CD.g, this.client = new CD.g, this.XM = 0, this.movesFly = null
      }
      setGame(kk) {
        if (null === kk || "object" !== typeof kk) return !1;
        const {
          key: ek,
          value: ik
        } = kk;
        return "string" === typeof ek && (this.game.setBooleanType(ek, Boolean(ik)), !0)
      }
      setClient(kk, ek) {
        this.client.setBooleanType(kk, ek)
      }
      clearGame() {
        this.game = new CD.g, this.movesFly = null
      }
      setMovesFly(kk) {
        this.movesFly = kk
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? AD : 0) | (this.client._getTotalBooleanVal() ? jD : 0)
      }
      write(kk) {
        const ek = this.perms(),
          {
            movesFly: ik
          } = this;
        if (ek === this.XM && null === ik) return !0;
        let Dk = Uk.Jb.Keep;
        return null !== ik && (Dk = ik ? Uk.Jb.On : Uk.Jb.Off), !(!kk || !(0, Uk.oe)(kk, 0, Dk, ek, ik ? 1 : 0)) && (this.XM = ek, this.movesFly = null, !0)
      }
    }
    class dD {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = kk, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: rk.c,
          get y() {
            return ek()
          }
        }
      }
      get hasView() {
        const kk = this.api.apiView,
          ek = Uk.t.viewProj;
        return 0 !== ek(kk, 0, 3) || 0 !== ek(kk, 0, 7) || 0 !== ek(kk, 0, 11) || 0 !== ek(kk, 0, 15)
      }
      get cameraPosition() {
        const kk = this.api.apiView,
          {
            eye: ek
          } = this;
        for (let ik = 0; ik < 3; ik++) ek[ik] = Uk.t.eye(kk, 0, ik);
        return ek
      }
      get cameraDirection() {
        const kk = this.api.apiView,
          ek = Uk.t.viewProj,
          ik = ek(kk, 0, 3),
          Dk = ek(kk, 0, 7),
          fk = ek(kk, 0, 11),
          Sk = Math.hypot(ik, Dk, fk),
          {
            forward: bk
          } = this;
        return Sk > 0 && (bk[0] = ik / Sk, bk[1] = Dk / Sk, bk[2] = fk / Sk), bk
      }
      get cameraHeading() {
        return Uk.t.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Uk.t.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Uk.t.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Uk.t.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(kk) {
        this.clip(kk);
        const {
          clipX: ek,
          clipY: ik,
          clipW: Dk
        } = this;
        if (Dk > 0) {
          const kk = ek / Dk * 50,
            fk = -ik / Dk * 50;
          return Math.abs(kk) <= this.screenBandPct.x && Math.abs(fk) <= this.screenBandPct.y ? {
            x: 50 + kk,
            y: 50 + fk
          } : this.clampToBand(kk, fk)
        }
        const fk = this.cameraPosition,
          Sk = Math.hypot(kk[0] - fk[0], kk[1] - fk[1], kk[2] - fk[2]),
          bk = this.api.apiView,
          rk = Uk.t.viewProj,
          Pk = Sk > 0 ? ek / Sk : 0,
          mk = Sk > 0 ? -ik / Sk : 0,
          Mk = Math.hypot(rk(bk, 0, 1), rk(bk, 0, 5), rk(bk, 0, 9)),
          Kk = Pk / Math.hypot(rk(bk, 0, 0), rk(bk, 0, 4), rk(bk, 0, 8)),
          xk = mk / Mk,
          nk = !(Math.abs(Kk) >= .001 || Math.abs(xk) >= .001);
        return this.clampToBand(Pk, nk ? -(Mk || 1) : mk)
      }
      projectDirectionToScreenPos(kk) {
        if (!this.hasView) return;
        const ek = this.cameraPosition,
          ik = this.along;
        for (let Dk = 0; Dk < 3; Dk++) ik[Dk] = ek[Dk] + 10 * kk[Dk];
        return this.projectWorldPosToScreenPos(ik)
      }
      projectWorldPosToViewport(kk) {
        this.clip(kk);
        const {
          clipX: ek,
          clipY: ik,
          clipW: Dk
        } = this;
        return Dk > 0 ? {
          x: 50 + ek / Dk * 50,
          y: 50 - ik / Dk * 50
        } : null
      }
      clip(kk) {
        const ek = this.api.apiView,
          ik = kk[0] - Uk.t.origin(ek, 0, 0),
          Dk = kk[1] - Uk.t.origin(ek, 0, 1),
          fk = kk[2] - Uk.t.origin(ek, 0, 2),
          Sk = Uk.t.viewProj;
        this.clipX = Sk(ek, 0, 0) * ik + Sk(ek, 0, 4) * Dk + Sk(ek, 0, 8) * fk + Sk(ek, 0, 12), this.clipY = Sk(ek, 0, 1) * ik + Sk(ek, 0, 5) * Dk + Sk(ek, 0, 9) * fk + Sk(ek, 0, 13), this.clipW = Sk(ek, 0, 3) * ik + Sk(ek, 0, 7) * Dk + Sk(ek, 0, 11) * fk + Sk(ek, 0, 15)
      }
      clampToBand(kk, ek) {
        return (0, rk.g)(kk, ek, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var VD = ik(4750);
    const FD = new TextEncoder,
      uD = new Uint8Array(Uk.H * Uk.E);
    class qD {
      constructor() {
        this.buttons = [], this.XM = !0
      }
      set(kk) {
        this.buttons = kk, this.XM = !1
      }
      attached() {
        this.XM = 0 === this.buttons.length
      }
      write(kk) {
        if (this.XM) return;
        const ek = new Uint8Array(Uk.H),
          ik = new Uint8Array(Uk.H);
        let Dk = 0,
          fk = 0;
        for (const {
            id: Sk,
            keycode: bk
          }
          of this.buttons) {
          if (Dk === Uk.H) break;
          const {
            read: kk,
            written: rk
          } = FD.encodeInto(Sk, uD.subarray(fk, fk + Uk.E));
          if (kk < Sk.length) continue;
          const Pk = VD.n[bk];
          ek[Dk] = "number" === typeof Pk ? Pk : 0, ik[Dk] = rk, Dk++, fk += rk
        }
        this.XM = (0, Uk.de)(kk, 0, Dk, ek, ik, uD.subarray(0, fk))
      }
    }

    function ID(kk, ek, ik) {
      const Dk = FD.encode(ek);
      return Dk.length <= Uk.E && function(kk, ek, ik, Dk) {
        return (0, oe.b)(), (0, Uk.cf)(kk, ek, ik, Dk)
      }(kk, 0, ik ? 1 : 0, Dk)
    }
    const zD = new TextDecoder,
      QD = new TextEncoder,
      vD = new Uint8Array(0),
      ED = [0, 0, 0],
      hD = {
        off: Uk.zd.Off,
        key: Uk.zd.Key,
        touch: Uk.zd.Touch
      };
    class aD {
      constructor(kk) {
        var ek;
        this.options = kk, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new qD, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new sD, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.CU = kk => {
          if ((0, nk.h)(kk)) throw kk;
          this.onError(kk)
        }, this.api = kk.api, this.tables = kk.tables, this.onError = null !== (ek = kk.onError) && void 0 !== ek ? ek : kk => {
          console.error("Error in client game callback", kk)
        }, this.renderFrame = new dD(this.api, kk.screenBandY), this.live = new yD(this.api), this.chunks = new Pe(this.api.memory, (() => this.api.apiView)), this.items = new yi({
          api: this.api,
          tables: kk.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: kk.beforeOp
        });
        const ik = () => this.stopped() ? null : this.cmd,
          Dk = () => this.sessionLive;
        this.entityInfoWatch = new Oi({
          cmd: ik,
          onError: this.onError
        }), this.entityInfo = new gi({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Dk
        }), this.particles = new Ei({
          cmd: ik,
          isSessionLive: Dk,
          onError: this.onError
        }), this.clientApi = new mi({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: kk.tables,
          cmd: ik,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Dk,
          beforeWrite: () => {
            var ek;
            if (this.stopped()) return !1;
            const ik = this.generation;
            return !1 !== (null === (ek = kk.beforeWrite) || void 0 === ek ? void 0 : ek.call(kk)) && ik === this.generation
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
        }), this.scriptedCamera = new Ok({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: kk.cameraScreen,
          showFacing: kk.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= HD(this.items, this.tables, (() => this.localPlayerAlive()), this.CU), this.itemSources
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
        const ek = this.sessionLive ? this.sendCmd() : null;
        return null !== ek && (ik = ek, Dk = 0, fk = kk[0], Sk = kk[1], bk = kk[2], (0, oe.b)(), (0, Uk.ke)(ik, Dk, fk, Sk, bk));
        var ik, Dk, fk, Sk, bk
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(kk) {
        const ek = this.liveCmd();
        return null === ek ? (this.pendingZoom = kk, !1) : (this.pendingZoom = null, (0, Uk.Nf)(ek, 0, kk, 1))
      }
      VV(kk) {
        const ek = this.stopped() ? null : this.cmd;
        return null !== ek && (0, Uk.Jf)(ek, 0, kk ? 1 : 0)
      }
      respawn() {
        const kk = this.sessionLive ? this.sendCmd() : null;
        return null !== kk && (ek = kk, ik = 0, (0, oe.b)(), (0, Uk.if)(ek, ik));
        var ek, ik
      }
      bindCustomButtonKeys(kk) {
        this.customButtons.set(kk)
      }
      pressCustomButton(kk, ek) {
        const ik = this.sessionLive ? this.sendCmd() : null;
        return null !== ik && ID(ik, kk, ek)
      }
      padMove(kk, ek, ik, Dk, fk, Sk) {
        const bk = this.liveCmd();
        return null !== bk && (0, Uk.Ne)(bk, 0, kk, ek, ik, Dk, fk, Sk)
      }
      thirdPersonFor(kk) {
        const ek = this.liveCmd();
        return null !== ek && (0, Uk.Rf)(ek, 0, null !== kk && void 0 !== kk ? kk : 1 / 0)
      }
      send(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Dk && Ze(Dk, ik ? xk.Ad : 0, kk, (0, Ek.c)(ek))
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
        const ek = () => kk.isStopped;
        this.stopped = ek, this.cmd = kk.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const ik = this.api.apiView;
        this.overflowGen = Uk.t.eventOverflowGen(ik, 0), this.resyncOwed = 0 !== Uk.t.eventOverflowMask(ik, 0), kk.setGameHost(this), kk.setEventWalker((kk => {
          this.api.walk(kk, this, ek)
        }))
      }
      watchPromptPick(kk) {
        this.promptWatch = kk, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : WD(Uk.t.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Uk.ic.None : Uk.t.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Uk.t.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === kk || kk >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, kk, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(kk) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(kk)
      }
      netEvent(kk) {
        "connection" === kk.type ? kk.phase === xk.K.Activated && kk.conn !== this.activeConn && kk.conn > this.closedThrough ? (this.endSession(), this.activeConn = kk.conn, this.endGameGrants(), this.dropGameCamera()) : kk.phase !== xk.K.Left && kk.phase !== xk.K.Closed || kk.conn !== this.activeConn ? kk.phase === xk.K.Resumed && 0 !== this.activeConn && kk.conn > this.closedThrough && (this.activeConn = kk.conn) : this.closeGame() : kk.conn === this.activeConn && 0 !== kk.conn && (kk.hM === LD.w ? this.gunHit(kk.payload) : kk.hM === Gi.tc.EditItemCraftingRecipes || kk.hM === LD.T ? this.items.touch() : (this.serverOptions(kk), this.gameMessage(kk)));
        const ek = this.options.onNetEvent;
        ek && this.guard((() => {
          ek(kk)
        }))
      }
      serverOptions(kk) {
        const ek = this.options.serverOptions,
          ik = ek ? this.decoded(Ni, kk) : null;
        ek && ik && this.guard((() => {
          ek.applyNewClientOptions(ik)
        }))
      }
      gameMessage(kk) {
        let ek = null;
        try {
          ek = function(kk) {
            if ("message" !== kk.type || kk.hM !== Gi.tc.GameCodeMessage || kk.payloadKind !== xk.zc.Msgpack) return null;
            const ek = (0, Ek.b)(kk.payload);
            if (null === ek || "object" !== typeof ek || "string" !== typeof ek.messageType) throw new Error("GameCodeMessage without a messageType");
            return ek
          }(kk)
        } catch (ik) {
          this.sessionLive && this.onError(ik)
        }
        if (ek) {
          const {
            messageType: kk,
            data: ik
          } = ek;
          if ((0, Fk.f)(kk)) return void this.guard((() => {
            (0, Fk.c)(kk, ik)
          }));
          "freeCamPerms" === kk && this.freeCam.setGame(ik) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (ek => {
            ek.onReceivedMessageFromServer(kk, ik)
          }))
        }
      }
      decoded(kk, ek) {
        try {
          return kk(ek)
        } catch (ik) {
          return this.onError(ik), null
        }
      }
      setClientFreeCameraGrant(kk, ek) {
        this.freeCam.setClient(kk, ek), this.writeFreeCam()
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
        const ek = this.highlight;
        this.highlightOwed = null === ek ? !(0, Uk.Be)(kk, 0, ED, ED, 0) : !(0, Uk.Be)(kk, 0, ek.pos, ek.normal, 1)
      }
      localPlayerBound(kk) {
        var ek, ik;
        if (0 === this.activeConn || this.sessionLive && kk === this.boundId) return;
        const Dk = this.sessionLive;
        let fk, Sk, bk, rk;
        this.endSession(), Dk && this.restartGameCamera();
        try {
          var Pk;
          this.session = null;
          const kk = this.options.sessionInfo(this.activeConn);
          if (this.session = kk, !kk) return;
          fk = kk.gameNameWithVariation, Sk = null !== (Pk = (0, dk.yb)(fk)) && void 0 !== Pk ? Pk : void 0, bk = (0, Vk.u)(kk.lobbyName), rk = (0, Vk.I)(kk.lobbyName)
        } catch (pk) {
          return void this.onError(pk)
        }
        const mk = {
          localPlayerId: String(kk)
        };
        let Mk = {},
          Kk = {};
        try {
          var xk, nk;
          Mk = null !== (xk = null === (nk = this.options.gameFactory((0, dk.Db)(fk))) || void 0 === nk ? void 0 : nk(rk, bk, Sk, mk)) && void 0 !== xk ? xk : {}
        } catch (pk) {
          this.CU(pk)
        }
        try {
          var Uk, Hk;
          Kk = {
            ...null === (Uk = (Hk = this.options).defaultPlugins) || void 0 === Uk ? void 0 : Uk.call(Hk, rk, bk, Sk, mk),
            ...Mk.plugins
          }
        } catch (pk) {
          this.CU(pk)
        }
        const wk = [Mk, ...Object.values(Kk)];
        this.owners = wk, this.tickers = wk.filter((kk => void 0 !== kk.Px)), this.renderers = wk.filter((kk => void 0 !== kk.onAfterRender)), this.receivers = wk.filter((kk => void 0 !== kk.onReceivedMessageFromServer)), this.writeAltVeto(wk), this.writeHooks(wk), this.writePublicLobby(rk), this.writeLocalDbId(null !== (ek = null === (ik = this.session) || void 0 === ik ? void 0 : ik.playerDbId) && void 0 !== ek ? ek : null), this.boundId = kk, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(wk, (kk => {
          var ek;
          null === (ek = kk.onCreate) || void 0 === ek || ek.call(kk, this.clientApi)
        }));
        const lk = this.generation;
        setTimeout((() => {
          lk === this.generation && !0 === this.tables.getClientOption("creative") && UD(this.tables)
        }), 0)
      }
      chunkSlot(kk, ek, ik, Dk, fk, Sk) {
        this.chunks.apply(kk, ek, ik, Dk, fk, Sk)
      }
      entityAdded(kk) {
        var ek;
        this.entityInfo.stale(kk), null === (ek = this.options.replayEntities) || void 0 === ek || ek.entityAdded(kk)
      }
      entityInfoChanged(kk) {
        var ek;
        this.entityInfo.stale(kk), null === (ek = this.options.replayEntities) || void 0 === ek || ek.entityInfoChanged(kk)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const kk = performance.now();
          this.round(this.tickers, tD), (0, bD.c)(performance.now() - kk)
        }
      }
      afterWalk(kk) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const ek = this.options.replayEntities;
        ek && this.guard((() => {
          this.entityInfoWatch.want(Zi, ek.wantsWatch), ek.flush(this.entityInfoWatch.on)
        }));
        const ik = (0, bD.l)(kk, Uk.t.frameMs(this.api.apiView, 0));
        if (null !== ik) {
          const kk = this.renderFrame;
          this.guard((() => {
            (0, Ji.d)().turnDamageIndicators(kk.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(ik)
          })), this.round(this.renderers, (ek => {
            ek.onAfterRender(ik, kk)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== ik)
        } catch (fk) {
          this.CU(fk)
        }
        this.showZoom(), this.items.flush(this.CU), this.writePromptWatch(), this.writeCustomButtons();
        const Dk = this.ticks;
        this.ticks = 0, (0, bD.j)(Dk, kk, ik, this.CU)
      }
      entityRemoved(kk) {
        this.live.despawned(kk), this.entityInfo.removed(kk)
      }
      ackEventOverflow() {
        const kk = this.api.apiView,
          ek = Uk.t.eventOverflowGen(kk, 0),
          ik = ek - this.overflowGen >>> 0;
        if (0 === ik && !this.resyncOwed) return;
        this.overflowGen = ek;
        const Dk = Uk.t.eventOverflowMask(kk, 0),
          fk = this.cmd;
        0 === Dk || null === fk || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Uk.ne)(fk, 0, Dk);
        const Sk = this.options.onEventOverflow;
        0 !== ik && Sk && this.guard((() => {
          Sk(Dk, ik)
        }))
      }
      gameCall(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        if (kk === Uk.Xb.Director) try {
          return this.scriptedCamera.call(ek, ik, Dk, fk, Sk, bk)
        } catch (mk) {
          return this.CU(mk), Uk.$.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return kk === Uk.Xb.AltVeto ? Uk.j.Allow : 0;
        try {
          return this.callGames(kk, ek, ik, Dk, fk, Sk, bk, rk)
        } catch (mk) {
          throw (0, nk.h)(mk) && (this.fault = mk), mk
        }
      }
      takeFault() {
        const kk = this.fault;
        return this.fault = void 0, kk
      }
      callGames(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Pk
        } = this.options, mk = String(this.boundId);
        switch (kk) {
          case Uk.Xb.AltVeto:
          case Uk.Xb.AltAction: {
            const rk = 0 !== bk,
              [Mk, Kk, xk] = rk ? [ek, ik, Dk] : [void 0, void 0, void 0],
              nk = rk ? Pk.nameOfId(fk) : "Air",
              Hk = WD(Sk);
            if (kk === Uk.Xb.AltAction) return this.first((kk => {
              var ek;
              return null === (ek = kk.onPlayerAltAction) || void 0 === ek ? void 0 : ek.call(kk, mk, Mk, Kk, xk, nk, Hk)
            })), 0;
            const wk = this.first((kk => {
              var ek;
              return null === (ek = kk.onPlayerAttemptAltAction) || void 0 === ek ? void 0 : ek.call(kk, mk, Mk, Kk, xk, nk, Hk)
            }));
            return "preventAction" === wk ? Uk.j.Prevent : "preventPlacement" === wk ? Uk.j.PreventPlacement : Uk.j.Allow
          }
          case Uk.Xb.Click: {
            const kk = rk,
              Mk = 0 !== (kk & Uk.M.Alt),
              Kk = 0 !== (kk & Uk.M.HasPos),
              xk = Kk ? Pk.nameOfId(fk) : "Air",
              [nk, Hk, wk] = Kk ? [ek, ik, Dk] : [null, null, null],
              lk = WD(Sk),
              pk = 0 !== (kk & Uk.M.Up),
              yk = WD(bk);
            if (0 === (kk & Uk.M.AttackOnly) && this.first((kk => {
                var ek, ik;
                return pk ? null === (ek = kk.onPlayerClickUp) || void 0 === ek ? void 0 : ek.call(kk, mk, Mk, nk, Hk, wk, xk, lk) : null === (ik = kk.onPlayerClick) || void 0 === ik ? void 0 : ik.call(kk, mk, Mk, nk, Hk, wk, xk, lk)
              })), !pk && !Mk && null !== yk) {
              const kk = this.clientApi.getPositionView(yk),
                ek = kk ? [kk[0], kk[1], kk[2]] : [0, 0, 0];
              this.first((kk => {
                var ik;
                return null === (ik = kk.onPlayerAttackEntity) || void 0 === ik ? void 0 : ik.call(kk, mk, yk, ek)
              }))
            }
            return 0
          }
          case Uk.Xb.ChangeBlock: {
            const kk = Pk.nameOfId(fk),
              bk = Pk.nameOfId(Sk);
            return this.first((fk => {
              var Sk;
              return null === (Sk = fk.onPlayerChangeBlock) || void 0 === Sk ? void 0 : Sk.call(fk, mk, ek, ik, Dk, kk, bk)
            })), 0
          }
          case Uk.Xb.DropItem: {
            const kk = Pk.nameOfId(ek);
            return this.first((ek => {
              var fk;
              return null === (fk = ek.onPlayerDropItem) || void 0 === fk ? void 0 : fk.call(ek, mk, kk, ik, Dk)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${kk}`)), 0
        }
      }
      changeBlockFail(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = fk === Uk.Kc ? null : zD.decode(this.api.eventBytes(Sk, Math.min(fk, bk)));
        this.failures.push({
          CD: [kk, ek, ik],
          AD: Dk,
          jD: rk
        })
      }
      changeBlockFailEnd() {
        const kk = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (ek => {
          var ik;
          null === (ik = ek.onChangeBlockFail) || void 0 === ik || ik.call(ek, kk)
        })), this.tm("EditBoard", {
          pos: null
        }), this.tm("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(kk, ek, ik, Dk, fk, Sk) {
        kk === Uk.mc.ChestOpened ? this.items.chestOpened(ik, Dk, fk) : kk !== Uk.mc.Synced && kk !== Uk.mc.ChestClosed && kk !== Uk.mc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(kk, ek, ik, Dk) {
            switch (kk) {
              case Uk.mc.Synced:
                bk.j.tm("syncedInvenFromServer");
                break;
              case Uk.mc.ChestOpened:
              case Uk.mc.ChestClosed:
                bk.j.tm("chestToggleFromServer", kk === Uk.mc.ChestOpened, !0);
                break;
              case Uk.mc.ChestRefreshed:
                bk.j.tm("chestRefreshedFromServer");
                break;
              case Uk.mc.EnchantingTable:
                bk.j.tm("enchantingTable", {
                  wP: Dk,
                  position: ik
                });
                break;
              case Uk.mc.HotbarRequest:
                bk.j.tm("setSelectedInventorySlotI", ek, !0);
                break;
              case Uk.mc.Scrolled:
                bk.j.tm("ScrollInventorySlot", ek);
                break;
              case Uk.mc.NumberKey:
                bk.j.tm("numkeyPressed", ek + 1);
                break;
              case Uk.mc.DropRequested:
                bk.j.tm("DropInvenItem", 0 !== ek);
                break;
              default:
                throw new nk.c(`InventoryEvent of no kind: what ${kk}`)
            }
          }(kk, ek, [ik, Dk, fk], Sk)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(kk, ek, ik, Dk) {
        this.tm("shotPlayer", {
          playerId: String(kk),
          damage: ek,
          wasCrit: 0 !== Dk,
          distance: ik
        })
      }
      localHurt(kk, ek) {
        this.tm("closeShopOnDamaged", null), this.guard((() => {
          bk.j.tm("damagedByOtherPlayer", {
            MS: null,
            direction: Number.isNaN(ek) ? null : ek,
            Ub: kk
          })
        }))
      }
      attackHit(kk, ek, ik, Dk, fk) {
        this.guard((() => {
          bk.j.tm("yourAttackHit", {
            tS: Dk,
            screenPos: this.renderFrame.projectDirectionToScreenPos([kk, ek, ik]),
            hitSelf: fk
          })
        }))
      }
      physicsType(kk) {
        this.tm("PlayerPhysicsTypeUpdate", kk)
      }
      vehicleEffect(kk, ek, ik, Dk, fk) {
        this.guard((() => {
          kk === xk.Rd.UPDATE ? (0, qk.i)(ek, {
            icon: ik,
            level: Dk,
            displayName: null,
            durationMs: fk
          }) : uk.e.remove(ek)
        }))
      }
      zoomChanged(kk) {
        this.zoom = kk, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.tm("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const kk = this.scriptedCamera.holdsView();
        !this.zoomUnshown || kk && this.zoomHeld || (this.zoomUnshown = !1, this.tm("cameraZoomSet", this.zoom)), this.zoomHeld = kk
      }
      gunHit(kk) {
        this.guard((() => {
          const {
            MS: ek,
            KS: ik
          } = (0, YD.d)(LD.w, kk);
          bk.j.tm("damagedByOtherPlayer", {
            MS: ek,
            direction: ik
          })
        }))
      }
      uiEvent(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        this.guard((() => {
          kD(kk, ek, [ik, Dk, fk], Sk, this.items, this.options.tables, (() => zD.decode(this.api.eventBytes(bk, rk))))
        }))
      }
      writeAltVeto(kk) {
        const ek = this.cmd;
        if (!ek) return;
        let ik;
        try {
          ik = function(kk, ek) {
            const ik = new Set;
            let Dk = !1;
            for (const fk of kk)
              if (fk.onPlayerAttemptAltAction) {
                if (Dk = !0, !fk.altVetoBlocks) return {
                  mode: Uk.Ud.All,
                  roots: []
                };
                for (const kk of fk.altVetoBlocks) ik.add(ek.getMetaInfo(kk).rootId)
              } return Dk ? ik.size > Uk.zc ? {
              mode: Uk.Ud.All,
              roots: []
            } : {
              mode: Uk.Ud.Filter,
              roots: [...ik]
            } : {
              mode: Uk.Ud.Off,
              roots: []
            }
          }(kk, this.options.tables)
        } catch (fk) {
          this.onError(fk), ik = {
            mode: Uk.Ud.All,
            roots: []
          }
        }
        if (ik.mode === Uk.Ud.Off && !this.vetoSet) return;
        const Dk = new Uint8Array(new Uint32Array(ik.roots).buffer);
        (0, Uk.of)(ek, 0, ik.mode, ik.roots.length, Dk) ? this.vetoSet = ik.mode !== Uk.Ud.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(kk) {
        const ek = this.cmd;
        if (!ek) return;
        const ik = function(kk) {
          let ek = 0;
          for (const ik of kk) ik.onPlayerAltAction && (ek |= 1 << Uk.Xb.AltAction), (ik.onPlayerClick || ik.onPlayerClickUp || ik.onPlayerAttackEntity) && (ek |= 1 << Uk.Xb.Click), ik.onPlayerChangeBlock && (ek |= 1 << Uk.Xb.ChangeBlock), ik.onPlayerDropItem && (ek |= 1 << Uk.Xb.DropItem);
          return ek
        }(kk);
        (0 !== ik || this.hooksSet) && ((0, Uk.zf)(ek, 0, ik) ? this.hooksSet = 0 !== ik : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const kk = this.cmd;
        kk && !this.stopped() && this.customButtons.write(kk)
      }
      writePromptWatch() {
        const kk = this.cmd,
          ek = this.promptWatch;
        ek !== this.promptWatchSent && kk && !this.stopped() && (0, Uk.Wf)(kk, 0, hD[ek]) && (this.promptWatchSent = ek)
      }
      writePublicLobby(kk) {
        const ek = this.cmd;
        ek && kk !== this.writtenPublicLobby && ((0, Uk.Kf)(ek, 0, kk ? 1 : 0) ? this.writtenPublicLobby = kk : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(kk) {
        const ek = this.cmd;
        ek && ((0, Uk.Df)(ek, 0, null === kk ? 0 : 1, null === kk ? vD : QD.encode(kk)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(kk) {
        const ek = this.generation;
        for (const Dk of this.owners) {
          if (ek !== this.generation) break;
          try {
            const ek = kk(Dk);
            if (void 0 !== ek) return ek
          } catch (ik) {
            this.CU(ik)
          }
        }
      }
      tm(kk, ek) {
        this.guard((() => {
          bk.j.tm(kk, ek)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (kk) {
          this.CU(kk)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (kk) {
          this.CU(kk)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const kk = this.owners;
        let ek;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Dk) {
          ek = Dk
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Dk) {
          ek ??= Dk
        }
        this.round(kk, XD, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Dk) {
          ek ??= Dk
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Dk) {
          ek ??= Dk
        }
        const ik = this.options.onSessionEnd;
        if (ik) try {
          ik()
        } catch (Dk) {
          this.onError(Dk)
        }
        void 0 !== ek && this.CU(ek)
      }
      round(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = this.generation;
        for (const Sk of kk) {
          if (Dk !== this.generation) break;
          try {
            ek(Sk)
          } catch (fk) {
            ik ? this.onError(fk) : this.CU(fk)
          }
        }
      }
      guard(kk) {
        try {
          kk()
        } catch (ek) {
          this.CU(ek)
        }
      }
    }

    function WD(kk) {
      return kk === Uk.Oc ? null : String(kk)
    }

    function tD(kk) {
      kk.Px(xk.Hd)
    }

    function XD(kk) {
      var ek;
      null === (ek = kk.onClose) || void 0 === ek || ek.call(kk)
    }

    function BD(kk, ek) {
      kk.watch((() => {
        const ik = function(kk) {
          const ek = [],
            ik = Math.min(rD, kk.length);
          for (let fk = 0; fk < ik; fk++) {
            var Dk;
            const ik = null === (Dk = kk.slot(fk)) || void 0 === Dk ? void 0 : Dk.typeObj,
              Sk = ik ? (0, SD.gunTypeOf)(ik.id) : void 0;
            void 0 !== Sk && ek.push(Ye[Sk])
          }
          return ek
        }(kk);
        ik.length > 0 && (ek.preload(ik), ek.preload([Le]))
      }))
    }
    var cD = ik(35966),
      TD = ik(4799),
      oD = ik(36341),
      ZD = ik(36361);

    function OD(kk) {
      const ek = (0, cD.countDecodesAs)(new TD.Howl({
          ...(0, oD.j)(kk),
          pool: 15,
          preload: !1
        }), "sheet"),
        ik = ek.load.bind(ek);
      return ek.load = () => (ek._preload = !0, (0, ZD.c)(kk), ik()), ek
    }

    function gD(kk, ek, ik) {
      const Dk = kk.listener;
      if (Dk.positionX) GD(Dk.positionX, ek, ik, 0), GD(Dk.positionY, ek, ik, 1), GD(Dk.positionZ, ek, ik, 2), GD(Dk.forwardX, ek, ik, 3), GD(Dk.forwardY, ek, ik, 4), GD(Dk.forwardZ, ek, ik, 5), GD(Dk.upX, ek, ik, 6), GD(Dk.upY, ek, ik, 7), GD(Dk.upZ, ek, ik, 8);
      else {
        let kk = !1;
        for (let Dk = 0; Dk < 9; Dk++) kk ||= ek[Dk] !== ik[Dk];
        kk && (Dk.setPosition(ek[0], ek[1], ek[2]), Dk.setOrientation(ek[3], ek[4], ek[5], ek[6], ek[7], ek[8]), ik.set(ek))
      }
    }

    function GD(kk, ek, ik, Dk) {
      ek[Dk] !== ik[Dk] && (kk.value = ek[Dk], ik[Dk] = ek[Dk])
    }
    class ND {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(kk) {
        this.pose.set(kk);
        const ek = TD.Howler.ctx;
        return !!ek && (ek !== this.watchedCtx && (this.watchedCtx = ek, this.written.fill(Number.NaN), ek.addEventListener("statechange", (() => {
          "running" === ek.state && gD(ek, this.pose, this.written)
        }))), "running" === ek.state && gD(ek, kk, this.written), !0)
      }
    }
    var RD = ik(36104),
      JD = ik(38781);
    let kf = null,
      ef = null;

    function Df() {
      return null === kf && (kf = document.createElement("div"), kf.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(kf)), kf
    }

    function ff() {
      return ef ??= new JD.e(new RD.b(Df)), ef
    }

    function Sf() {
      var kk;
      null === (kk = ef) || void 0 === kk || kk.clear(), bf(null)
    }

    function bf(kk) {
      Dk.b.get("scriptedCameraFacing") !== kk && Dk.b.set({
        scriptedCameraFacing: kk
      })
    }
    var rf = ik(9105),
      Pf = ik(9063),
      mf = ik(38805),
      Mf = ik(40617),
      Kf = ik(3261);
    const xf = Object.entries(Uk.Ub).reduce(((kk, ek) => {
      let [ik, Dk] = ek;
      return kk[Dk] = ik, kk
    }), []);

    function nf(kk, ek) {
      var ik;
      return 0 !== ((null !== (ik = kk.itemFlags[ek]) && void 0 !== ik ? ik : 0) & Uk.nc.Stackable)
    }
    const Uf = /^(0|[1-9][0-9]*)$/,
      Hf = {
        displayName: (kk, ek) => (0, SD.displayNameOf)(ek),
        description: (kk, ek) => (0, SD.descriptionOf)(ek),
        type: (kk, ek) => (0, SD.itemTypeOf)(ek),
        clipSize: (kk, ek) => (0, SD.clipSizeOf)(ek),
        armourReduction: (kk, ek) => (0, SD.armourReductionOf)(ek),
        scopeType: (kk, ek) => (0, SD.scopeTypeOf)(ek),
        stackable: nf,
        harvestType: (kk, ek) => xf[kk.blockHarvestTypes[ek]],
        harvestLevel: (kk, ek) => {
          const ik = kk.blockHarvestLevels[ek];
          return ik === Uk.vc ? void 0 : ik
        },
        harvests: (kk, ek) => {
          var ik;
          const Dk = null !== (ik = kk.itemHarvests[ek]) && void 0 !== ik ? ik : 0;
          return 0 !== Dk ? xf[Dk] : void 0 === (0, SD.harvestsNullLevelOf)(ek) ? void 0 : null
        },
        level: (kk, ek) => {
          var ik, Dk;
          const fk = null !== (ik = kk.itemLevels[ek]) && void 0 !== ik ? ik : Uk.vc;
          return fk !== Uk.vc ? fk : null !== (Dk = (0, SD.harvestsNullLevelOf)(ek)) && void 0 !== Dk ? Dk : void 0
        }
      };

    function wf(kk, ek, ik) {
      return pf(new Uint8Array(Math.floor(kk.length / ek)), kk, ek, ik)
    }

    function lf(kk, ek, ik) {
      return pf(new Uint16Array(Math.floor(kk.length / ek)), kk, ek, ik)
    }

    function pf(kk, ek, ik, Dk) {
      const fk = new DataView(ek.buffer, ek.byteOffset, ek.byteLength);
      for (let Sk = 0; Sk < kk.length; Sk++) kk[Sk] = Dk(fk, Sk * ik);
      return kk
    }
    class yf {
      constructor(kk, ek) {
        this.options = ek, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = kk => {
          const ek = this.idOf(kk);
          if (void 0 === ek) throw new Error(`No item is named ${kk}, an item's root`);
          return ek
        };
        const ik = ek => {
            const ik = ek();
            return new Uint8Array(kk.memory().buffer, kk.scratch(), ik).slice()
          },
          Dk = (new TextDecoder).decode(ik((() => kk.queries.itemNames()))).split("\n"),
          fk = ik((() => kk.queries.blockProps())),
          Sk = ik((() => kk.queries.itemProps()));
        this.props = {
          blockFlags: wf(fk, Uk.x.BYTES, Uk.x.flags),
          blockHarvestTypes: wf(fk, Uk.x.BYTES, Uk.x.harvestType),
          blockHarvestLevels: wf(fk, Uk.x.BYTES, Uk.x.harvestLevel),
          blockAttachedTops: lf(fk, Uk.x.BYTES, Uk.x.attachedTop),
          itemFlags: wf(Sk, Uk.rc.BYTES, Uk.rc.flags),
          itemHarvests: wf(Sk, Uk.rc.BYTES, Uk.rc.harvests),
          itemLevels: wf(Sk, Uk.rc.BYTES, Uk.rc.level)
        }, (0, Kf.m)(Object.freeze(Dk)), (0, Mf.f)()
      }
      idOf(kk) {
        if ("number" === typeof kk) return void 0 === (0, Kf.h)(kk) ? void 0 : kk;
        const ek = (0, Kf.e)(kk);
        return void 0 === ek && Uf.test(kk) ? void 0 === (0, Kf.h)(+kk) ? void 0 : +kk : ek
      }
      getMetaInfo(kk) {
        if (!kk || kk === rf.c) return rf.e;
        const ek = this.idOf(kk);
        if (void 0 === ek) throw new Error(`Item ${kk} not found in registry`);
        return this.metaOf(ek)
      }
      blockRootId(kk) {
        return 0 !== kk && void 0 !== (0, Kf.h)(kk) ? this.metaOf(kk).rootId : kk
      }
      metaOf(kk) {
        return this.metas[kk] ??= (0, Pf.l)((0, Kf.h)(kk), kk, this.rootIdOf, (0, SD.rootMetaDescOf)(kk))
      }
      getItemId(kk) {
        if (!kk || kk === rf.c) return 0;
        const ek = this.idOf(kk);
        if (void 0 === ek) throw new Error(`Invalid block name. You sent ${kk}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return ek
      }
      getItemName(kk) {
        if (!kk || kk === rf.c) return rf.c;
        const ek = this.idOf(kk);
        if (void 0 === ek) throw new Error(`Item ${kk} not found in registry`);
        return (0, Kf.h)(ek)
      }
      blockNameToBlockId(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (kk === rf.c) return 0;
        let ik = this.idOf(kk);
        if (void 0 === ik || !this.isBlockId(ik)) {
          const ek = kk.indexOf("|"),
            Dk = ek > 0 ? (0, Kf.e)(kk.slice(0, ek)) : void 0;
          ik = void 0 !== Dk && this.isBlockId(Dk) && (0, SD.rootMetaDescOf)(Dk) === kk ? Dk : void 0
        }
        if (void 0 !== ik) return ik;
        if (!ek) throw new Error(`Invalid block name. You sent ${kk}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(kk) {
        return kk > 0 && kk < this.props.blockFlags.length
      }
      nameOfId(kk) {
        return 0 !== kk && (0, Kf.h)(kk) || rf.c
      }
      itemType(kk) {
        const ek = kk ? this.idOf(kk) : void 0;
        if (!ek) return null;
        let ik = this.types.get(ek);
        return void 0 === ik && (ik = Object.freeze({
          id: ek,
          name: (0, Kf.h)(ek),
          meta: this.getMetaInfo(ek),
          stackable: nf(this.props, ek),
          type: (0, SD.itemTypeNameOf)(ek),
          clipSize: (0, SD.clipSizeOf)(ek),
          scopeType: (0, SD.scopeTypeOf)(ek),
          showsAimingUi: (0, SD.showsAimingUi)(ek)
        }), this.types.set(ek, ik)), ik
      }
      getItemStat(kk, ek) {
        if (mf.d.has(ek)) {
          const ik = "minChargeStateToUse" === ek ? this.getMetaInfo(kk).rootName : this.getItemName(kk),
            Dk = this.options.get((0, mf.e)(ik, ek));
          if (null !== Dk && void 0 !== Dk) return Dk
        }
        return this.defaultStat(kk, ek, this.statOf(ek))
      }
      getDisplayName(kk) {
        return this.getItemStat(kk, "displayName")
      }
      getDefaultItemStat(kk, ek) {
        return this.defaultStat(kk, ek, this.statOf(ek))
      }
      statOf(kk) {
        const ek = Hf[kk];
        return void 0 === ek && function(kk, ek) {
          throw new Error(`ClientApi.${kk} is not available yet in the wasm client (${ek})`)
        }(`getItemStat("${kk}")`, `a table of the stat: the wasm client answers ${Object.keys(Hf).join(", ")}`), ek
      }
      defaultStat(kk, ek, ik) {
        const Dk = this.idOf(kk),
          fk = void 0 === Dk ? void 0 : ik(this.props, Dk);
        return null !== fk && void 0 !== fk || "displayName" !== ek ? fk : this.getItemName(kk)
      }
      getClientOption(kk) {
        return this.options.get(kk)
      }
      getGunStats(kk) {
        return this.getClientOption(`${kk}GunStats`)
      }
      watchClientOption(kk, ek) {
        return this.options.subscribe(kk, ek)
      }
      isSolidBlockId(kk) {
        var ek;
        return 0 !== ((null !== (ek = this.props.blockFlags[kk]) && void 0 !== ek ? ek : 0) & Uk.w.Solid)
      }
      isStackableId(kk) {
        return nf(this.props, kk)
      }
      isFluidBlockId(kk) {
        var ek;
        return 0 !== ((null !== (ek = this.props.blockFlags[kk]) && void 0 !== ek ? ek : 0) & Uk.w.Fluid)
      }
      canPlaceOverBlockId(kk) {
        var ek;
        return 0 !== ((null !== (ek = this.props.blockFlags[kk]) && void 0 !== ek ? ek : 0) & Uk.w.PlaceOver)
      }
      attachedTopOf(kk) {
        var ek;
        return null !== (ek = this.props.blockAttachedTops[kk]) && void 0 !== ek ? ek : 0
      }
      isDroplessBlockId(kk) {
        return (0, SD.dropsNothing)(kk)
      }
    }

    function Yf(kk, ek) {
      const ik = new Map;
      return (Dk, fk) => {
        const Sk = ek.idOf(Dk),
          bk = void 0 === Sk ? null : (Dk => {
            let fk = ik.get(Dk);
            if (void 0 === fk) {
              const Sk = kk.queries.salvageRecipe(Dk),
                bk = new DataView(kk.memory().buffer, kk.scratch(), Sk),
                rk = [];
              for (let kk = 0; kk + Uk.Hd.BYTES <= Sk; kk += Uk.Hd.BYTES) rk.push(Object.freeze({
                item: ek.nameOfId(Uk.Hd.item(bk, kk)),
                amt: Uk.Hd.amount(bk, kk)
              }));
              fk = 0 === rk.length ? null : Object.freeze(rk), ik.set(Dk, fk)
            }
            return fk
          })(Sk);
        if (null === bk || void 0 === fk) return bk;
        const rk = fk <= 0 ? 1 : fk;
        return bk.map((kk => {
          let {
            item: ek,
            amt: ik
          } = kk;
          return {
            item: ek,
            amt: ik * rk
          }
        }))
      }
    }
    var Lf = ik(40350),
      Cf = ik(36546),
      Af = ik(36535),
      jf = ik(36539),
      sf = ik(36018),
      df = ik(40262),
      Vf = ik(42183);
    const Ff = -1,
      uf = new Uint8Array(0),
      qf = new TextEncoder;

    function If(kk) {
      if (null === kk) return null;
      const ek = qf.encode(kk);
      return ek.byteLength < xk.Vc ? ek : ek.subarray(0, xk.Vc - 1)
    }
    class zf {
      constructor(kk) {
        this.deps = kk, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Ff, this.keyframesSettled = !1, this.reloadFrom = Ff
      }
      reloadKeyframes() {
        var kk, ek;
        this.keyframesVersion = Ff, this.reloadFrom = null !== (kk = null === (ek = this.view()) || void 0 === ek ? void 0 : ek.version) && void 0 !== kk ? kk : Ff
      }
      setPlayback(kk) {
        const ek = 1 === this.deps.core.Mfk(kk);
        return ek && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = Ff, this.reloadFrom = Ff), ek
      }
      async open(kk, ek) {
        const ik = await this.deps.replay.open(kk, ek);
        return "opening" === ik && (this.reloadKeyframes(), this.deps.recorder.prefetch()), ik
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(kk)), ek)
      }
      setSpeed(kk) {
        this.deps.replay.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.replay.setCameraMode(Vf.d.indexOf(kk))
      }
      view() {
        var kk;
        const ek = Uk.t.replayViewPtr(this.deps.apiView(), 0);
        if (0 === ek) return this.lastView = null, null;
        const ik = new DataView(this.deps.buffer(), ek, Uk.Bd.BYTES),
          Dk = Uk.Bd.version(ik, 0),
          fk = this.lastView;
        if (null !== fk && fk.version === Dk) return fk;
        const Sk = Uk.Bd.markIn(ik, 0),
          bk = {
            version: Dk,
            state: Uk.Bd.state(ik, 0),
            cameraMode: null !== (kk = Vf.d[Uk.Bd.cameraMode(ik, 0)]) && void 0 !== kk ? kk : "recording",
            Px: Uk.Bd.Px(ik, 0),
            totalTicks: Uk.Bd.totalTicks(ik, 0),
            speed: Uk.Bd.speed(ik, 0),
            mark: Sk === Uk.Ad ? null : {
              inTick: Sk,
              outTick: Uk.Bd.markOut(ik, 0)
            },
            editVersion: Uk.Bd.editVersion(ik, 0)
          };
        return this.lastView = bk, bk
      }
      keyframes() {
        const kk = this.view();
        if (null === kk) return [];
        kk.version !== this.reloadFrom && (this.reloadFrom = Ff);
        const ek = this.reloadFrom === Ff && kk.state !== xk.xd.Cropping && kk.state !== xk.xd.None,
          ik = ek ? kk.editVersion : kk.version;
        if (ik === this.keyframesVersion && ek === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Dk
        } = this.deps, fk = Dk.Kfk(), Sk = Dk.Ow(), bk = [];
        if (0 !== Sk && fk > 0) {
          const kk = new DataView(this.deps.buffer(), Sk, fk * xk.Ic);
          for (let ek = 0; ek < fk; ek++) {
            const ik = ek * xk.Ic,
              Dk = ek => kk.getFloat64(ik + ek, !0);
            bk.push({
              Px: kk.getUint32(ik + xk.Tc, !0),
              position: [Dk(xk.Qc), Dk(xk.Qc + 8), Dk(xk.Qc + 16)],
              direction: [Dk(xk.Jc), Dk(xk.Jc + 8), Dk(xk.Jc + 16)],
              easing: [Dk(xk.Mc), Dk(xk.Mc + 8), Dk(xk.Mc + 16), Dk(xk.Mc + 24)]
            })
          }
        }
        return this.keyframesVersion = ik, this.keyframesSettled = ek, this.lastKeyframes = bk, bk
      }
      addKeyframe() {
        const kk = this.deps.apiView(),
          ek = [Uk.t.eye(kk, 0, 0), Uk.t.eye(kk, 0, 1), Uk.t.eye(kk, 0, 2)];
        return this.deps.replay.addKeyframe(ek, function(kk, ek) {
          const ik = Math.cos(ek);
          return [ik * Math.sin(kk), -Math.sin(ek), ik * Math.cos(kk)]
        }(Uk.t.heading(kk, 0), Uk.t.pitch(kk, 0)))
      }
      setKeyframe(kk) {
        return this.deps.replay.setKeyframe(kk.Px, Float64Array.from([...kk.position, ...kk.direction, ...kk.easing]))
      }
      moveKeyframe(kk, ek) {
        return this.deps.replay.moveKeyframe(kk, ek)
      }
      deleteKeyframes(kk, ek) {
        return this.deps.replay.deleteKeyframes(kk, ek)
      }
      setMark(kk) {
        var ek, ik;
        return this.deps.replay.setMark(null !== (ek = null === kk || void 0 === kk ? void 0 : kk.inTick) && void 0 !== ek ? ek : -1, null !== (ik = null === kk || void 0 === kk ? void 0 : kk.outTick) && void 0 !== ik ? ik : -1)
      }
      crop(kk, ek) {
        const ik = this.deps.replay.crop(kk, ek);
        return ik && this.reloadKeyframes(), ik
      }
      save(kk) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(kk)
      }
      recorderControl(kk) {
        this.deps.recorder.control(kk)
      }
      recorderPrefs(kk, ek) {
        this.deps.recorder.prefs(kk, ek)
      }
      recorderOption(kk, ek) {
        const ik = this.deps.cmd();
        return null !== ik && (0, Uk.gf)(ik, 0, kk, null === ek ? uf : qf.encode(ek))
      }
      recordFlyingText(kk, ek, ik, Dk) {
        const fk = this.deps.cmd(),
          Sk = Math.max(0, Math.min(4294967295, Math.round(Dk)));
        return null !== fk && (0, Uk.df)(fk, 0, ek, ik, Sk, qf.encode(kk))
      }
      recordPlayerKilled(kk, ek, ik, Dk) {
        const fk = this.deps.cmd();
        return null !== fk && (0, Uk.hf)(fk, 0, kk, ek, Math.max(0, ik), qf.encode(Dk))
      }
      recordKillfeed(kk, ek, ik) {
        var Dk, fk;
        const Sk = this.deps.cmd(),
          bk = function(kk) {
            const ek = kk.reduce(((kk, ek) => {
                var ik;
                return kk + Gi.Bb + (null !== (ik = null === ek || void 0 === ek ? void 0 : ek.byteLength) && void 0 !== ik ? ik : 0)
              }), 0),
              ik = new Uint8Array(ek),
              Dk = new DataView(ik.buffer);
            let fk = 0;
            for (const bk of kk) {
              var Sk;
              Dk.setUint16(fk, null !== (Sk = null === bk || void 0 === bk ? void 0 : bk.byteLength) && void 0 !== Sk ? Sk : xk.Vc, !0), fk += Gi.Bb, null !== bk && (ik.set(bk, fk), fk += bk.byteLength)
            }
            return ik
          }([If(kk.name), If(kk.colour), If(ek.name), If(ek.colour), If(ik)]);
        return null !== Sk && (0, Uk.ef)(Sk, 0, null !== (Dk = kk.id) && void 0 !== Dk ? Dk : Uk.Sc, null !== (fk = ek.id) && void 0 !== fk ? fk : Uk.Sc, bk)
      }
      recorderSession(kk, ek) {
        this.deps.recorder.session({
          session: ek,
          lobbyType: kk.lobbyType,
          game: kk.gameNameWithVariation,
          lobby: kk.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.xfk()
      }
      filePartDone(kk, ek) {
        this.deps.recorder.filePartDone(kk, ek)
      }
      fileDone(kk) {
        this.deps.recorder.fileDone(kk)
      }
    }
    const Qf = -2147483648;
    class vf {
      constructor(kk) {
        var ek;
        this.deps = kk, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (ek = kk.now) && void 0 !== ek ? ek : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var kk, ek, ik;
        return null === (kk = null === (ek = (ik = this.deps).live) || void 0 === ek ? void 0 : ek.call(ik)) || void 0 === kk || kk
      }
      activated(kk) {
        var ek, ik;
        this.live && (this.viewerShown(!0 === (null === (ek = (ik = this.deps).viewerOpen) || void 0 === ek ? void 0 : ek.call(ik))), this.deps.client.recorderSession(kk, (0, Vf.f)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var kk, ek;
        this.live && (this.state.recording || !0 !== (null === (kk = (ek = this.deps).viewerOpen) || void 0 === kk ? void 0 : kk.call(ek))) ? this.deps.client.recorderControl(xk.hd.ToggleRecording) : this.deps.notify(jf.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(xk.hd.SaveClip) : this.deps.notify(jf.e.clippingNotOn)
      }
      viewerShown(kk) {
        this.live && this.deps.client.recorderControl(kk ? xk.hd.ViewerOpened : xk.hd.ViewerClosed)
      }
      setPrefs(kk, ek) {
        this.live && this.deps.client.recorderPrefs(kk, ek)
      }
      setOption(kk, ek) {
        this.live && this.deps.client.recorderOption(kk, ek)
      }
      recordFlyingText(kk, ek, ik, Dk) {
        this.live && this.deps.client.recordFlyingText(kk, ek, ik, Dk)
      }
      recordPlayerKilled(kk, ek, ik, Dk) {
        this.live && this.deps.client.recordPlayerKilled(kk, ek, ik, Dk)
      }
      recordKillfeed(kk, ek, ik) {
        this.live && this.deps.client.recordKillfeed(kk, ek, ik)
      }
      Px() {
        let kk = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, kk = {
            ...kk,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const ek = Math.floor((this.now() - this.recordingSince) / 1e3);
          ek !== kk.seconds && (kk = {
            ...kk,
            seconds: ek
          })
        }
        this.set(kk)
      }
      onEvent(kk) {
        var ek, ik;
        const {
          notify: Dk
        } = this.deps, fk = jf.e;
        switch (kk.what) {
          case xk.dd.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Dk(fk.recordingStarted);
            break;
          case xk.dd.RecordingStopped:
            this.stopRecording(), Dk(fk.recordingStopped), this.saveState(xk.qd.Recording, "saving");
            break;
          case xk.dd.RecordingDiscarded:
            this.stopRecording(), Dk(fk.recordingDiscarded);
            break;
          case xk.dd.RecordingTurnedOff:
            this.stopRecording(), Dk(fk.recordingTurnedOff);
            break;
          case xk.dd.LimitReached:
            Dk(fk.limitReached);
            break;
          case xk.dd.ClipSaved:
            this.saveState(xk.qd.Clip, "saving");
            break;
          case xk.dd.ClipEmpty:
            Dk(fk.clipEmpty);
            break;
          case xk.dd.ClippingNotOn:
            Dk(fk.clippingNotOn);
            break;
          case xk.dd.Disallowed:
            Dk(fk.disallowed);
            break;
          case xk.dd.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case xk.dd.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case xk.dd.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case xk.dd.SaveBusy:
            null === (ek = (ik = this.deps).onSaveState) || void 0 === ek || ek.call(ik, kk.kind, "busy"), Dk(fk.saveBusy);
            break;
          case xk.dd.CloseViewerFirst:
            Dk(fk.closeViewerFirst)
        }
      }
      fileReady(kk, ek) {
        this.deps.download(ek), this.saveState(kk, "done"), this.deps.notify(kk === xk.qd.Clip ? jf.e.clipSaved : jf.e.recordingSaved)
      }
      failed(kk) {
        this.saveState(kk, "failed"), this.deps.notify(kk === xk.qd.Clip ? jf.e.clipFailed : jf.e.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(kk, ek) {
        var ik, Dk;
        null === (ik = (Dk = this.deps).onSaveState) || void 0 === ik || ik.call(Dk, kk, ek)
      }
      set(kk) {
        kk !== this.state && (this.state = kk, this.deps.onState(kk))
      }
    }
    const Ef = new TextDecoder;

    function hf(kk, ek, ik, Dk) {
      const fk = [];
      for (let Sk = 0; Sk < Dk; Sk++) {
        if (ek + Gi.Bb > ik) return null;
        const Dk = kk.getUint16(ek, !0);
        if (ek += Gi.Bb, Dk !== xk.Vc) {
          if (ek + Dk > ik) return null;
          fk.push(Ef.decode(new Uint8Array(kk.buffer, kk.byteOffset + ek, Dk))), ek += Dk
        } else fk.push(null)
      }
      return ek === ik ? fk : null
    }

    function af(kk, ek) {
      let ik = new DataView(new ArrayBuffer(0)),
        Dk = !0;
      const fk = {
        replayFailed: (ek, ik, Dk) => {
          kk.replayFailed({
            reason: ek,
            code: ik,
            version: Dk
          })
        },
        replayOption: (ek, fk, Sk, bk) => {
          const rk = function(kk, ek, ik, Dk) {
            switch (ek) {
              case xk.ud.Cleared:
                return 0 === Dk ? null : void 0;
              case xk.ud.Text:
                return Ef.decode(new Uint8Array(kk.buffer, kk.byteOffset + ik, Dk));
              case xk.ud.Int:
                return Dk === Int32Array.BYTES_PER_ELEMENT ? kk.getInt32(ik, !0) : void 0;
              case xk.ud.Double:
                return Dk === Float64Array.BYTES_PER_ELEMENT ? kk.getFloat64(ik, !0) : void 0;
              default:
                return
            }
          }(ik, fk, Sk, bk);
          void 0 !== rk ? kk.replayOption({
            key: ek,
            value: rk
          }) : Dk = !1
        },
        replayUiEvent: (ek, fk, Sk, bk, rk, Pk) => {
          const mk = function(kk, ek, ik, Dk, fk, Sk, bk) {
            const rk = Sk + bk;
            switch (ek) {
              case xk.vd.FlyingText: {
                const bk = hf(kk, Sk, rk, 1);
                return null !== bk && null !== bk[0] ? {
                  what: ek,
                  xe: ik,
                  Ke: Dk,
                  angle: fk,
                  contentJson: bk[0]
                } : null
              }
              case xk.vd.PlayerKilled: {
                const Dk = hf(kk, Sk, rk, 3);
                return Dk ? {
                  what: ek,
                  killstreak: ik,
                  dead: Dk[0],
                  killer: Dk[1],
                  withItem: Dk[2]
                } : null
              }
              case xk.vd.Killfeed: {
                const ik = hf(kk, Sk, rk, 7);
                return ik ? {
                  what: ek,
                  killerId: ik[0],
                  killerName: ik[1],
                  killerColour: ik[2],
                  victimId: ik[3],
                  victimName: ik[4],
                  victimColour: ik[5],
                  withItem: ik[6]
                } : null
              }
              default:
                return null
            }
          }(ik, ek, fk, Sk, bk, rk, Pk);
          null !== mk ? kk.replayUiEvent(mk) : Dk = !1
        },
        replayFilePart: (ik, fk, Sk, bk) => {
          const rk = ek();
          Sk + bk > rk.byteLength ? Dk = !1 : kk.filePart(ik, fk, new Uint8Array(rk, Sk, bk).slice())
        },
        replayFileReady: (ek, ik, Dk, fk) => {
          kk.fileReady({
            save: ek,
            kind: ik,
            parts: Dk,
            bytes: fk
          })
        },
        recorderEvent: (ek, ik, Dk) => {
          kk.recorderEvent({
            what: ek,
            kind: ik,
            save: Dk
          })
        },
        replayOpened: (ek, Dk, fk) => {
          kk.replayOpened(Ef.decode(new Uint8Array(ik.buffer, ik.byteOffset + Dk, fk)))
        }
      };
      return (kk, ek, Sk, bk) => !(kk < xk.ib.ReplayFailed || kk > xk.ib.RecorderEvent) && (ik = ek, Dk = !0, (0, Uk.ae)(kk, ek, Sk, bk, fk) && Dk)
    }

    function Wf(kk) {
      let ek = null;
      const ik = af(kk, (() => {
        if (null === ek) throw new Error("a recorder event read outside recorderEventReader's call");
        return ek.buffer
      }));
      return (kk, Dk) => {
        ek = Dk;
        try {
          ! function(kk, ek) {
            const ik = kk.slice(),
              Dk = new DataView(ik.buffer);
            for (let fk = 0; fk < ik.byteLength;) {
              if (fk + xk.eb > ik.byteLength) throw new Error(`the recorder module's events end mid-head at ${fk}`);
              const kk = Dk.getUint32(fk, !0),
                Sk = 65535 & kk,
                bk = kk >>> 16,
                rk = fk + xk.eb;
              if (rk + bk > ik.byteLength || !ek(Sk, Dk, rk, bk)) throw new Error(`the recorder module wrote a malformed event ${Sk} (${bk} bytes) at ${fk}`);
              fk = rk + (0, xk.Ie)(bk)
            }
          }(kk, ik)
        } finally {
          ek = null
        }
      }
    }
    class tf {
      constructor(kk, ek) {
        this.acks = kk, this.handlers = ek, this.parts = new Map
      }
      onPart(kk, ek, ik) {
        let Dk = this.parts.get(kk);
        Dk || (Dk = [], this.parts.set(kk, Dk)), Dk[ek] = ik, this.acks.filePartDone(kk, ek)
      }
      onReady(kk) {
        var ek;
        const ik = null !== (ek = this.parts.get(kk.save)) && void 0 !== ek ? ek : [];
        this.parts.delete(kk.save);
        const Dk = function(kk, ek, ik) {
          if (kk.length !== ek) return null;
          let Dk = 0;
          for (let bk = 0; bk < ek; bk++) {
            if (void 0 === kk[bk]) return null;
            Dk += kk[bk].byteLength
          }
          if (Dk !== ik) return null;
          if (1 === ek) return kk[0];
          const fk = new Uint8Array(ik);
          let Sk = 0;
          for (const bk of kk) fk.set(bk, Sk), Sk += bk.byteLength;
          return fk
        }(ik, kk.parts, kk.bytes);
        this.acks.fileDone(kk.save), null === Dk ? this.handlers.fileIncomplete(kk.save, kk.kind) : this.handlers.fileReady(kk.save, kk.kind, Dk)
      }
      onDiscarded(kk) {
        this.parts.delete(kk)
      }
    }

    function Xf() {
      return ik.e(60).then((() => ik(59994)))
    }
    class Bf {
      constructor(kk) {
        this.deps = kk, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: ek
        } = kk;
        this.recorder = new vf({
          client: ek,
          live: () => {
            var kk;
            return !0 !== (null === (kk = this.viewer) || void 0 === kk ? void 0 : kk.inPlayback)
          },
          viewerOpen: kk.viewerOpen,
          notify: kk.notify,
          download: ek => {
            var ik;
            null === (ik = kk.download) || void 0 === ik || ik.call(kk, ek)
          },
          onState: kk.onRecorderState,
          onSaveState: kk.onSaveState
        }), this.parts = new tf(ek, {
          fileReady: (kk, ek, ik) => {
            var Dk;
            ek === xk.qd.Edited ? null === (Dk = this.viewer) || void 0 === Dk || Dk.saveDone(ik) : this.recorder.fileReady(ek, ik)
          },
          fileIncomplete: (kk, ek) => {
            this.saveFailed(ek)
          }
        });
        const ik = {
          replayFailed: kk => {
            var ek;
            null === (ek = this.viewer) || void 0 === ek || ek.onFailed(kk)
          },
          replayOption: ek => {
            var ik;
            null === (ik = kk.onReplayOption) || void 0 === ik || ik.call(kk, ek)
          },
          replayUiEvent: ek => {
            var ik;
            null === (ik = kk.onReplayUiEvent) || void 0 === ik || ik.call(kk, ek)
          },
          filePart: (kk, ek, ik) => {
            this.parts.onPart(kk, ek, ik)
          },
          fileReady: kk => {
            this.parts.onReady(kk)
          },
          replayOpened: ek => {
            var ik;
            null === (ik = kk.onReplayOpened) || void 0 === ik || ik.call(kk, ek)
          },
          recorderEvent: kk => {
            var ek;
            switch (kk.what) {
              case xk.dd.FileDiscarded:
                this.parts.onDiscarded(kk.save);
                break;
              case xk.dd.SaveFailed:
                this.saveFailed(kk.kind);
                break;
              case xk.dd.SaveBusy:
                if (null !== (ek = this.viewer) && void 0 !== ek && ek.savePending) {
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
        this.sink = function(kk, ek) {
          return {
            onReplayEvent: af(kk, ek)
          }
        }(ik, kk.buffer), this.recorderEvents = Wf(ik)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var kk;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (kk = this.deps.loadViewer) && void 0 !== kk ? kk : Xf)().catch((kk => {
          throw this.viewerChunk = null, kk
        })), this.viewerChunk.then((kk => (this.viewer ??= new kk.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var kk, ek;
            null === (kk = (ek = this.deps).onViewerChange) || void 0 === kk || kk.call(ek)
          }
        }), this.viewer))))
      }
      activated(kk) {
        this.recorder.activated(kk)
      }
      afterFrame(kk) {
        try {
          kk > 0 && this.recorder.Px()
        } finally {
          var ek;
          null === (ek = this.viewer) || void 0 === ek || ek.afterFrame()
        }
      }
      end() {
        var kk;
        null === (kk = this.viewer) || void 0 === kk || kk.end()
      }
      saveFailed(kk) {
        var ek;
        kk === xk.qd.Edited ? null === (ek = this.viewer) || void 0 === ek || ek.saveFailed(!1) : this.recorder.failed(kk)
      }
    }
    var Tf = ik(40196),
      of = ik(40218),
      Zf = ik(4745),
      Of = ik(40505);
    class gf {
      constructor(kk) {
        this.deps = kk, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(kk, ek) {
        if (!this.deps.live() || 0 === kk && 0 === ek) return;
        const ik = (0, hk.o)(0, performance.now()),
          Dk = this.deps.dragScale();
        (0, Of.h)((() => {
          (0, hk.s)(xk.Hb.MouseDown, 0, 0, 0, ik), (0, hk.s)(xk.Hb.MouseMove, 0, kk * Dk, ek * Dk, 0), (0, hk.s)(xk.Hb.MouseUp, 0, 0, 0, ik)
        }))
      }
      move(kk) {
        var ek, ik;
        this.analogue[0] = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.x) && void 0 !== ek ? ek : 0, this.analogue[1] = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.y) && void 0 !== ik ? ik : 0, this.send()
      }
      holdVertical(kk, ek) {
        const ik = "freeCamUp" === kk ? Uk.Lb.Up : Uk.Lb.Down;
        this.keys = ek ? this.keys | ik : this.keys & ~ik, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const kk = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== kk && !(0, Uk.re)(kk, 0, this.analogue, this.keys)
      }
    }
    var Gf = ik(711),
      Nf = ik(284),
      Rf = ik(99),
      Jf = ik(33701);

    function kS() {
      const kk = Dk.b.get("clientEscMenuOptions"),
        ek = (0, Gf.i)(kk);
      return {
        mouse: (0, Rf.isMobile)() ? ek : kk.mouseSensitivity,
        touch: ek,
        fovPercent: kk.cameraFOV
      }
    }

    function eS() {
      const kk = Dk.b.get("clientEscMenuOptions"),
        ek = Dk.b.get("isTouchScreen") ? (0, Gf.i)(kk) : kk.mouseSensitivity,
        ik = kS().mouse;
      return ik > 0 ? ek / ik : 1
    }

    function iS(kk) {
      const ek = () => {
        kk.setSoundPrefs(Dk.b.get("soundVolume"), Dk.b.get("soundOnFromAd"))
      };
      let ik = null;
      const fk = () => {
        const {
          showFog: ek,
          enableLighting: fk,
          fogChunkDistance: Sk,
          chunkFadeIn: bk
        } = Dk.b.get("clientEscMenuOptions"), rk = {
          showFog: ek,
          lighting: fk,
          fogChunks: Sk,
          chunkFade: bk
        };
        ik && (0, xk.ne)(ik) === (0, xk.ne)(rk) && ik.fogChunks === Sk || (ik = rk, kk.setEnvPrefs(ik))
      };
      let Sk = null;
      const rk = () => {
        const ek = function() {
          const kk = Dk.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: Dk.b.get("areNametagsHidden"),
            crouchToggle: kk.crouchIsToggle,
            bhopDisabled: kk.disableBunnyHopping,
            disableBobbing: kk.disableBobbing,
            ezTowering: kk.ezTowering && (0, Nf.g)(),
            ezBridging: kk.ezBridging,
            showChunkBorders: kk.showChunkBorders,
            nametagCutDistance: (0, Jf.h)()
          }
        }();
        (0, dk.Sd)(Sk, ek) || (Sk = ek, kk.setUiPrefs(ek))
      };
      let Pk = null;
      const mk = () => {
        const ek = kS();
        (0, dk.Sd)(Pk, ek) || (Pk = ek, kk.setLookPrefs(ek))
      };
      ek(), fk(), rk(), mk();
      const Mk = [(0, bk.k)("appManagerUpdated|soundVolume", ek), (0, bk.k)("appManagerUpdated|soundOnFromAd", ek), (0, bk.k)("appManagerUpdated|clientEscMenuOptions", (() => {
        fk(), rk(), mk()
      })), (0, bk.k)("appManagerUpdated|areNametagsHidden", rk), (0, bk.k)("appManagerUpdated|showDistantNametags", rk)];
      return () => {
        for (const kk of Mk) kk()
      }
    }
    var DS = ik(40489),
      fS = ik(40492);
    var SS = (0, fS.d)("lend"),
      bS = (0, fS.d)("starting"),
      rS = (0, fS.d)("generation"),
      PS = (0, fS.d)("end");
    class mS {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, PS, {
          value: MS
        }), Object.defineProperty(this, SS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, rS, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, DS.e)(this, SS)[SS] || (0, DS.e)(this, bS)[bS]
      }
      async start(kk) {
        if (this.active) return "busy";
        const ek = (0, DS.e)(this, rS)[rS];
        (0, DS.e)(this, bS)[bS] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, DS.e)(this, bS)[bS] = !1
        }
        if (ek !== (0, DS.e)(this, rS)[rS]) return "refused";
        const ik = this.deps.beginSave();
        if (!ik) return "refused";
        const Dk = Number(BigInt.asUintN(32, kk)),
          fk = Number(BigInt.asUintN(32, kk >> 32n));
        let Sk = "refused";
        return this.deps.recorderCall(((kk, ek) => {
          const bk = ik.editState,
            rk = kk.stage(bk.length);
          0 !== rk ? (new Uint8Array(ek.buffer, rk, bk.length).set(bk), kk.nfk(ik.headLen, Dk, fk) && (Sk = "sealing")) : Sk = "tooLarge"
        }), !0), "sealing" !== Sk ? (ik.end(), Sk) : ((0, DS.e)(this, SS)[SS] = ik, "sealing")
      }
      beforeRecorderStep() {
        const kk = (0, DS.e)(this, SS)[SS];
        if (!kk) return null;
        let ek = -1,
          ik = 0;
        if (!this.deps.recorderCall((kk => {
            ek = kk.Ufk(), ek > 0 && (ik = kk.Hfk())
          }))) return (0, DS.e)(this, PS)[PS](kk, "stopped");
        if (ek < 0) return (0, DS.e)(this, PS)[PS](kk, "read");
        if (0 === ek) return null;
        const Dk = kk.head(ik, ek);
        let fk = !1;
        if (Dk && this.deps.recorderCall(((kk, ik) => {
            const Sk = kk.stage(ek);
            0 !== Sk && (new Uint8Array(ik.buffer, Sk, ek).set(Dk), fk = !0)
          }), !0), fk) return null;
        const Sk = kk.givenUp();
        this.deps.recorderCall((kk => {
          kk.wfk()
        }));
        const bk = (0, DS.e)(this, PS)[PS](kk, Sk ? "givenUp" : "stopped");
        return Sk && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), bk
      }
      stop() {
        (0, DS.e)(this, rS)[rS]++;
        const kk = (0, DS.e)(this, SS)[SS];
        kk && (this.deps.recorderCall((kk => {
          kk.wfk()
        })), (0, DS.e)(this, PS)[PS](kk, "stopped"))
      }
    }

    function MS(kk, ek) {
      return (0, DS.e)(this, SS)[SS] = null, kk.end(), ek
    }

    function KS(kk, ek) {
      const ik = new Uint8Array(4),
        Dk = new DataView(ik.buffer);
      return Dk.setUint8(0, kk ? 1 : 0), Dk.setUint16(2, Math.max(0, Math.min(65535, Math.round(ek))), !0), ik
    }

    function xS(kk, ek) {
      return kk > function(kk) {
        return 16777216 + 314572.8 * Math.max(0, kk)
      }(ek) + 33554432
    }
    let nS = null;

    function US(kk) {
      return nS ??= async function(kk) {
        const ek = kk.loadInFlight();
        ek && await ek.catch((() => {}));
        if (kk.trapped()) return "trapped";
        if (kk.busy() || !xS(kk.memoryBytes(), kk.clipSeconds())) return "fU";
        kk.unload();
        let ik = !1;
        try {
          ik = await kk.load()
        } catch {
          ik = !1
        }
        if (!ik) return kk.trapped() ? "trapped" : kk.aU() ? "aU" : "failed";
        return "recycled"
      }(kk).finally((() => {
        nS = null
      })), nS
    }
    const HS = "Replay recording couldn't load, so try again.",
      wS = new Set([xk.hd.ToggleRecording, xk.hd.SaveClip]);
    var lS = (0, fS.d)("bindings"),
      pS = (0, fS.d)("module"),
      yS = (0, fS.d)("memory"),
      YS = (0, fS.d)("trapped"),
      LS = (0, fS.d)("aU"),
      CS = (0, fS.d)("recycleDue"),
      AS = (0, fS.d)("loading"),
      jS = (0, fS.d)("generation"),
      sS = (0, fS.d)("viewDrawn"),
      dS = (0, fS.d)("clip"),
      VS = (0, fS.d)("session"),
      FS = (0, fS.d)("control"),
      uS = (0, fS.d)("deferred"),
      qS = (0, fS.d)("coreU8"),
      IS = (0, fS.d)("coreU32"),
      zS = (0, fS.d)("moduleU8"),
      QS = (0, fS.d)("edited"),
      vS = (0, fS.d)("sendSession"),
      ES = (0, fS.d)("checkNotInEvents"),
      hS = (0, fS.d)("clipping"),
      aS = (0, fS.d)("busy"),
      WS = (0, fS.d)("use"),
      tS = (0, fS.d)("ensureLoaded"),
      XS = (0, fS.d)("loadOnce"),
      BS = (0, fS.d)("recycleAfterStep"),
      cS = (0, fS.d)("settleRecycle"),
      TS = (0, fS.d)("load"),
      oS = (0, fS.d)("attach"),
      ZS = (0, fS.d)("resendHeld"),
      OS = (0, fS.d)("recycle"),
      gS = (0, fS.d)("send"),
      GS = (0, fS.d)("unload"),
      NS = (0, fS.d)("dropModule"),
      RS = (0, fS.d)("coreBytes"),
      JS = (0, fS.d)("coreWords"),
      kb = (0, fS.d)("moduleBytes"),
      eb = (0, fS.d)("loadFailed"),
      ib = (0, fS.d)("call"),
      Db = (0, fS.d)("guard"),
      fb = (0, fS.d)("trapOn");
    class Sb {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, fb, {
          value: Fb
        }), Object.defineProperty(this, Db, {
          value: Vb
        }), Object.defineProperty(this, ib, {
          value: db
        }), Object.defineProperty(this, eb, {
          value: sb
        }), Object.defineProperty(this, kb, {
          value: jb
        }), Object.defineProperty(this, JS, {
          value: Ab
        }), Object.defineProperty(this, RS, {
          value: Cb
        }), Object.defineProperty(this, NS, {
          value: Lb
        }), Object.defineProperty(this, GS, {
          value: Yb
        }), Object.defineProperty(this, gS, {
          value: yb
        }), Object.defineProperty(this, OS, {
          value: pb
        }), Object.defineProperty(this, ZS, {
          value: lb
        }), Object.defineProperty(this, oS, {
          value: wb
        }), Object.defineProperty(this, TS, {
          value: Hb
        }), Object.defineProperty(this, cS, {
          value: Ub
        }), Object.defineProperty(this, BS, {
          value: nb
        }), Object.defineProperty(this, XS, {
          value: xb
        }), Object.defineProperty(this, tS, {
          value: Kb
        }), Object.defineProperty(this, WS, {
          value: Mb
        }), Object.defineProperty(this, aS, {
          value: mb
        }), Object.defineProperty(this, hS, {
          value: Pb
        }), Object.defineProperty(this, ES, {
          value: rb
        }), Object.defineProperty(this, vS, {
          value: bb
        }), Object.defineProperty(this, lS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, YS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, LS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, CS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, AS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jS, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, sS, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, dS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, VS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, FS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zS, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QS, {
          writable: !0,
          value: void 0
        }), (0, DS.e)(this, QS)[QS] = new mS({
          ensureLoaded: () => (0, DS.e)(this, tS)[tS](),
          recorderCall: (kk, ek) => {
            ek && (0, DS.e)(this, ES)[ES]("an edited save's stage");
            const ik = (0, DS.e)(this, ib)[ib](((ek, ik) => (kk(ek, ik), !0)));
            return null !== ik && void 0 !== ik && ik
          },
          beginSave: kk.beginSave,
          givenUp: kk.givenUp
        })
      }
      get active() {
        return null !== (0, DS.e)(this, pS)[pS]
      }
      get trapped() {
        return (0, DS.e)(this, YS)[YS]
      }
      get loading() {
        return null !== (0, DS.e)(this, AS)[AS]
      }
      prefetch() {
        (0, DS.e)(this, LS)[LS] || (0, DS.e)(this, YS)[YS] || (0, DS.e)(this, pS)[pS] || (0, DS.e)(this, AS)[AS] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, DS.e)(this, sS)[sS] = !0, (0, DS.e)(this, hS)[hS]() && (0, DS.e)(this, WS)[WS]()
      }
      prefs(kk, ek) {
        (0, DS.e)(this, dS)[dS] = {
          on: kk,
          seconds: ek
        }, (0, DS.e)(this, gS)[gS](xk.ad.Prefs, KS(kk, ek)), kk && (0, DS.e)(this, sS)[sS] && (0, DS.e)(this, WS)[WS]()
      }
      control(kk) {
        const ek = function(kk) {
          return new Uint8Array([kk, 0, 0, 0])
        }(kk);
        if (wS.has(kk)) return (0, DS.e)(this, pS)[pS] ? void(0, DS.e)(this, gS)[gS](xk.ad.Control, ek) : ((0, DS.e)(this, FS)[FS] = ek, void(0, DS.e)(this, WS)[WS]());
        (0, DS.e)(this, LS)[LS] || this.deps.coreCommand(xk.ad.Control, ek)
      }
      session(kk) {
        (0, DS.e)(this, VS)[VS] = kk, (0, DS.e)(this, vS)[vS](kk)
      }
      filePartDone(kk, ek) {
        (0, DS.e)(this, gS)[gS](xk.ad.FilePartDone, function(kk, ek) {
          const ik = new Uint8Array(8),
            Dk = new DataView(ik.buffer);
          return Dk.setUint32(0, kk, !0), Dk.setUint32(4, ek, !0), ik
        }(kk, ek))
      }
      fileDone(kk) {
        return (0, DS.e)(this, gS)[gS](xk.ad.FileDone, function(kk) {
          const ek = new Uint8Array(4);
          return new DataView(ek.buffer).setUint32(0, kk, !0), ek
        }(kk)), (0, DS.e)(this, BS)[BS]()
      }
      saveEdited(kk) {
        return (0, DS.e)(this, ES)[ES]("saveEdited"), (0, DS.e)(this, QS)[QS].start(kk)
      }
      afterFrame() {
        if (!(0, DS.e)(this, pS)[pS]) return;
        "read" === (0, DS.e)(this, QS)[QS].beforeRecorderStep() && (0, DS.e)(this, BS)[BS]();
        const kk = (0, DS.e)(this, CS)[CS];
        (0, DS.e)(this, CS)[CS] = null;
        const ek = (0, DS.e)(this, pS)[pS],
          ik = (0, DS.e)(this, yS)[yS];
        if (!ek || !ik) return void(null === kk || void 0 === kk || kk.resolve((0, DS.e)(this, YS)[YS] ? "trapped" : "fU"));
        const {
          core: Dk
        } = this.deps, fk = Dk.yfk(2);
        let Sk, bk, rk, Pk, mk = 0,
          Mk = 0;
        if (0 !== fk) {
          var Kk, xk;
          const kk = (0, DS.e)(this, JS)[JS]();
          mk = null !== (Kk = kk[fk >>> 2]) && void 0 !== Kk ? Kk : 0, Mk = null !== (xk = kk[1 + (fk >>> 2)]) && void 0 !== xk ? xk : 0
        }
        try {
          if (Mk > 0) {
            const kk = ek.feed(Mk);
            0 !== kk && (0, DS.e)(this, kb)[kb](ik).set((0, DS.e)(this, RS)[RS]().subarray(mk, mk + Mk), kk)
          }
          Sk = ek.step(), bk = ek.Yfk(), rk = ek.Lfk(), Pk = ek.Cfk()
        } catch (nk) {
          if (!(0, DS.e)(this, fb)[fb](nk)) throw null === kk || void 0 === kk || kk.resolve("fU"), nk;
          return void(null === kk || void 0 === kk || kk.resolve("trapped"))
        }
        if (Sk > 0) {
          const kk = Dk.Afk(2, Sk);
          0 !== kk && (0, DS.e)(this, RS)[RS]().set((0, DS.e)(this, kb)[kb](ik).subarray(bk, bk + Sk), kk)
        }
        if (rk > 0) {
          (0, DS.e)(this, uS)[uS] = [];
          try {
            this.deps.events(new Uint8Array(ik.buffer, Pk, rk), ik)
          } catch (nk) {
            throw null === kk || void 0 === kk || kk.resolve("fU"), nk
          } finally {
            const kk = (0, DS.e)(this, uS)[uS];
            (0, DS.e)(this, uS)[uS] = null;
            for (const [ek, ik] of kk)(0, DS.e)(this, gS)[gS](ek, ik)
          }
        }
        if (!(0, DS.e)(this, hS)[hS]() && !(0, DS.e)(this, aS)[aS]()) return (0, DS.e)(this, GS)[GS](), void(null === kk || void 0 === kk || kk.resolve("fU"));
        null === kk || void 0 === kk || kk.resolve((0, DS.e)(this, OS)[OS]())
      }
      dispose() {
        (0, DS.e)(this, LS)[LS] = !0, (0, DS.e)(this, GS)[GS]()
      }
    }

    function bb(kk) {
      (0, DS.e)(this, gS)[gS](xk.ad.Session, function(kk) {
        const ek = new TextEncoder,
          ik = ek.encode(kk.game).subarray(0, 65535),
          Dk = ek.encode(kk.lobby).subarray(0, 65535),
          fk = new Uint8Array(22 + ik.length + 2 + Dk.length),
          Sk = new DataView(fk.buffer);
        Sk.setFloat64(0, kk.unixMs, !0), Sk.setBigUint64(8, BigInt.asUintN(64, kk.session), !0), Sk.setUint8(16, kk.lobbyType);
        let bk = 20;
        for (const rk of [ik, Dk]) Sk.setUint16(bk, rk.length, !0), fk.set(rk, bk + 2), bk += 2 + rk.length;
        return fk
      }({
        ...kk,
        unixMs: this.deps.unixNow()
      }))
    }

    function rb(kk) {
      false
    }

    function Pb() {
      var kk, ek;
      return null !== (kk = null === (ek = (0, DS.e)(this, dS)[dS]) || void 0 === ek ? void 0 : ek.on) && void 0 !== kk && kk
    }

    function mb() {
      const kk = (0, DS.e)(this, pS)[pS];
      let ek = !0;
      if (kk) try {
        ek = kk.busy()
      } catch (ik) {
        if (!(0, DS.e)(this, fb)[fb](ik)) throw ik
      }
      return ek || (0, DS.e)(this, QS)[QS].active
    }
    async function Mb() {
      !(0, DS.e)(this, LS)[LS] && this.deps.allowed() ? await (0, DS.e)(this, tS)[tS]() : (0, DS.e)(this, FS)[FS] = null
    }

    function Kb() {
      return (0, DS.e)(this, YS)[YS] || (0, DS.e)(this, LS)[LS] ? Promise.resolve(!1) : (0, DS.e)(this, pS)[pS] ? Promise.resolve(!0) : ((0, DS.e)(this, AS)[AS] ??= (0, DS.e)(this, XS)[XS](), (0, DS.e)(this, AS)[AS])
    }
    async function xb() {
      let kk = !1;
      try {
        return kk = await (0, DS.e)(this, TS)[TS](), kk
      } finally {
        kk || ((0, DS.e)(this, FS)[FS] = null), (0, DS.e)(this, AS)[AS] = null
      }
    }

    function nb() {
      if (!(0, DS.e)(this, pS)[pS]) return Promise.resolve((0, DS.e)(this, YS)[YS] ? "trapped" : "fU");
      if (!(0, DS.e)(this, CS)[CS]) {
        let kk = () => {};
        const ek = new Promise((ek => {
          kk = ek
        }));
        (0, DS.e)(this, CS)[CS] = {
          promise: ek,
          resolve: kk
        }
      }
      return (0, DS.e)(this, CS)[CS].promise
    }

    function Ub(kk) {
      const ek = (0, DS.e)(this, CS)[CS];
      (0, DS.e)(this, CS)[CS] = null, null === ek || void 0 === ek || ek.resolve(kk)
    }
    async function Hb() {
      let kk = (0, DS.e)(this, lS)[lS];
      if (!kk) {
        const ek = (0, DS.e)(this, jS)[jS];
        try {
          kk = await this.deps.load()
        } catch (ik) {
          return ek === (0, DS.e)(this, jS)[jS] && await (0, DS.e)(this, eb)[eb](ik), !1
        }
        if (ek !== (0, DS.e)(this, jS)[jS]) return this.deps.unload(), !1;
        const Dk = kk,
          fk = (0, DS.e)(this, Db)[Db]((() => Dk.jfk()));
        if (void 0 === fk) return !1;
        const Sk = this.deps.core.sfk();
        if (fk !== Sk) return await (0, DS.e)(this, eb)[eb](new Error(`recorder port version ${fk}, the core's ${Sk}`)), !1;
        (0, DS.e)(this, lS)[lS] = kk
      }
      const ek = kk;
      try {
        if (!(0, DS.e)(this, Db)[Db]((() => ((0, DS.e)(this, pS)[pS] = new ek.dfk, (0, DS.e)(this, yS)[yS] = ek.lfk(), !0)))) return !1;
        (0, DS.e)(this, ZS)[ZS]();
        const kk = (0, DS.e)(this, FS)[FS];
        return (0, DS.e)(this, FS)[FS] = null, kk && (0, DS.e)(this, gS)[gS](xk.ad.Control, kk), (0, DS.e)(this, oS)[oS]()
      } catch (ik) {
        return (0, DS.e)(this, GS)[GS](), await (0, DS.e)(this, eb)[eb](ik), !1
      }
    }

    function wb() {
      return this.deps.core.Vfk(0), 1 === this.deps.core.Vfk(1) || ((0, DS.e)(this, GS)[GS](), this.deps.failed(HS), !1)
    }

    function lb() {
      (0, DS.e)(this, dS)[dS] && (0, DS.e)(this, gS)[gS](xk.ad.Prefs, KS((0, DS.e)(this, dS)[dS].on, (0, DS.e)(this, dS)[dS].seconds)), (0, DS.e)(this, VS)[VS] && (0, DS.e)(this, vS)[vS]((0, DS.e)(this, VS)[VS])
    }

    function pb() {
      return US({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var kk, ek;
          return null !== (kk = null === (ek = (0, DS.e)(this, dS)[dS]) || void 0 === ek ? void 0 : ek.seconds) && void 0 !== kk ? kk : 0
        },
        trapped: () => (0, DS.e)(this, YS)[YS],
        busy: () => (0, DS.e)(this, aS)[aS](),
        loadInFlight: () => (0, DS.e)(this, AS)[AS],
        aU: () => (0, DS.e)(this, LS)[LS],
        unload: () => {
          (0, DS.e)(this, GS)[GS]()
        },
        load: () => (0, DS.e)(this, tS)[tS]()
      })
    }

    function yb(kk, ek) {
      (0, DS.e)(this, uS)[uS] ? (0, DS.e)(this, uS)[uS].push([kk, ek]): (0, DS.e)(this, ib)[ib](((ik, Dk) => {
        const fk = ik.pfk(ek.length);
        0 !== fk && (new Uint8Array(Dk.buffer, fk, ek.length).set(ek), ik.command(kk, ek.length))
      }))
    }

    function Yb() {
      (0, DS.e)(this, jS)[jS]++, (0, DS.e)(this, cS)[cS]("fU"), (0, DS.e)(this, QS)[QS].stop(), this.deps.core.Vfk(0), (0, DS.e)(this, NS)[NS](), (0, DS.e)(this, YS)[YS] || ((0, DS.e)(this, lS)[lS] = null, this.deps.unload())
    }

    function Lb() {
      (0, DS.e)(this, ib)[ib]((kk => {
        kk.free()
      })), (0, DS.e)(this, pS)[pS] = null, (0, DS.e)(this, yS)[yS] = null, (0, DS.e)(this, zS)[zS] = null
    }

    function Cb() {
      var kk;
      const ek = this.deps.coreBuffer();
      return (null === (kk = (0, DS.e)(this, qS)[qS]) || void 0 === kk ? void 0 : kk.buffer) !== ek && ((0, DS.e)(this, qS)[qS] = new Uint8Array(ek)), (0, DS.e)(this, qS)[qS]
    }

    function Ab() {
      var kk;
      const ek = this.deps.coreBuffer();
      return (null === (kk = (0, DS.e)(this, IS)[IS]) || void 0 === kk ? void 0 : kk.buffer) !== ek && ((0, DS.e)(this, IS)[IS] = new Uint32Array(ek, 0, ek.byteLength >>> 2)), (0, DS.e)(this, IS)[IS]
    }

    function jb(kk) {
      var ek;
      const ik = kk.buffer;
      return (null === (ek = (0, DS.e)(this, zS)[zS]) || void 0 === ek ? void 0 : ek.buffer) !== ik && ((0, DS.e)(this, zS)[zS] = new Uint8Array(ik)), (0, DS.e)(this, zS)[zS]
    }
    async function sb(kk) {
      await this.deps.staleOr(kk, (() => {
        this.deps.failed(HS)
      }))
    }

    function db(kk) {
      const ek = (0, DS.e)(this, pS)[pS],
        ik = (0, DS.e)(this, yS)[yS];
      if (ek && ik) return (0, DS.e)(this, Db)[Db]((() => kk(ek, ik)))
    }

    function Vb(kk) {
      if (!(0, DS.e)(this, YS)[YS]) try {
        return kk()
      } catch (ek) {
        if (!(0, DS.e)(this, fb)[fb](ek)) throw ek;
        return
      }
    }

    function Fb(kk) {
      return kk instanceof WebAssembly.RuntimeError && ((0, DS.e)(this, YS)[YS] = !0, (0, DS.e)(this, pS)[pS] = null, (0, DS.e)(this, yS)[yS] = null, (0, DS.e)(this, zS)[zS] = null, (0, DS.e)(this, lS)[lS] = null, (0, DS.e)(this, FS)[FS] = null, (0, DS.e)(this, cS)[cS]("trapped"), this.deps.core.Vfk(0), (0, DS.e)(this, QS)[QS].stop(), this.deps.crash(this.deps.markTrapped(kk)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var ub = ik(38231);
    const qb = new Map([
      ["skyblock", () => ik.e(51).then((() => ik(38228)))]
    ]);

    function Ib(kk) {
      const ek = qb.get(kk);
      return ek ? ek().then((() => {
        const ek = (0, ub.d)(kk);
        if (!ek) throw new Error(`${kk}'s replay hook module registered no hook`);
        return ek
      })) : null
    }
    class zb {
      constructor(kk) {
        this.deps = kk, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(kk) {
        if (this.pending.clear(), kk === this.game && null !== this.hook) return void(this.all = !0);
        const ek = ++this.generation;
        this.game = kk, this.hook = null, this.all = !1;
        const ik = this.deps.loadHook(kk);
        null === ik || void 0 === ik || ik.then((kk => {
          ek === this.generation && (this.hook = kk, this.all = !0)
        }), (kk => {
          ek === this.generation && this.deps.onError(kk)
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
          hook: ek
        } = this;
        if (null === ek || !kk || !this.all && 0 === this.pending.size) return;
        const ik = this.deps.cmd();
        if (null === ik) return;
        const {
          api: Dk
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: kk,
            count: ek
          } = Xi(Dk, this.ids);
          this.ids = kk;
          for (let ik = 0; ik < ek; ik++) this.pending.set(kk[ik], !0)
        }
        const fk = this.ids = Bi(this.ids, this.pending.size);
        let Sk = 0;
        for (const mk of this.pending.keys()) fk[Sk++] = mk;
        const bk = [],
          rk = ci(Dk, fk, Sk, ((kk, ek) => {
            null !== ek && bk.push({
              serverId: kk,
              info: ek,
              spawned: !0 === this.pending.get(kk)
            })
          }));
        if (rk) {
          this.pending.clear();
          for (const {
              serverId: kk,
              info: Dk,
              spawned: fk
            }
            of bk) try {
            ek(Dk, {
              setFacingTolerance: ek => {
                null === ek && fk || Pi(ik, kk, ek) || this.pending.set(kk, fk)
              }
            })
          } catch (Pk) {
            this.deps.onError(Pk)
          }
        }
      }
    }
    var Qb = (0, fS.d)("bindings"),
      vb = (0, fS.d)("module"),
      Eb = (0, fS.d)("memory"),
      hb = (0, fS.d)("trapped"),
      ab = (0, fS.d)("generation"),
      Wb = (0, fS.d)("loading"),
      tb = (0, fS.d)("lend"),
      Xb = (0, fS.d)("givenUp"),
      Bb = (0, fS.d)("afterSave"),
      cb = (0, fS.d)("opens"),
      Tb = (0, fS.d)("saveAskedAt"),
      ob = (0, fS.d)("unload"),
      Zb = (0, fS.d)("dropModule"),
      Ob = (0, fS.d)("loadFailed"),
      gb = (0, fS.d)("saveReadsBody"),
      Gb = (0, fS.d)("command"),
      Nb = (0, fS.d)("call"),
      Rb = (0, fS.d)("guard"),
      Jb = (0, fS.d)("trapOn");
    class kr {
      constructor(kk) {
        this.deps = kk, Object.defineProperty(this, Jb, {
          value: Pr
        }), Object.defineProperty(this, Rb, {
          value: rr
        }), Object.defineProperty(this, Nb, {
          value: br
        }), Object.defineProperty(this, Gb, {
          value: Sr
        }), Object.defineProperty(this, gb, {
          get: fr,
          set: void 0
        }), Object.defineProperty(this, Ob, {
          value: Dr
        }), Object.defineProperty(this, Zb, {
          value: ir
        }), Object.defineProperty(this, ob, {
          value: er
        }), Object.defineProperty(this, Qb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Eb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hb, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ab, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Wb, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, tb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Bb, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cb, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Tb, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, DS.e)(this, vb)[vb] && null === (0, DS.e)(this, Bb)[Bb]
      }
      async open(kk, ek) {
        if ((0, DS.e)(this, hb)[hb]) return xk.nd.ModuleTrap;
        let ik = (0, DS.e)(this, Qb)[Qb];
        if (!ik) {
          const kk = (0, DS.e)(this, ab)[ab];
          (0, DS.e)(this, Wb)[Wb]++;
          try {
            ik = await this.deps.load()
          } catch (fk) {
            return (0, DS.e)(this, Wb)[Wb]--, kk !== (0, DS.e)(this, ab)[ab] ? "stopped" : (0, DS.e)(this, Ob)[Ob](fk, ek)
          }
          if ((0, DS.e)(this, Wb)[Wb]--, kk !== (0, DS.e)(this, ab)[ab]) return (0, DS.e)(this, Qb)[Qb] || 0 !== (0, DS.e)(this, Wb)[Wb] || (0, DS.e)(this, hb)[hb] || this.deps.unload(), "stopped";
          if ((0, DS.e)(this, hb)[hb]) return xk.nd.ModuleTrap;
          const Dk = ik.jfk(),
            Sk = this.deps.core.sfk();
          if (Dk !== Sk) return (0, DS.e)(this, Ob)[Ob](new Error(`replay port version ${Dk}, the core's ${Sk}`), ek);
          (0, DS.e)(this, Qb)[Qb] = ik
        }
        if (!(0, DS.e)(this, vb)[vb]) {
          const kk = ik;
          if (!(0, DS.e)(this, Rb)[Rb]((() => {
              (0, DS.e)(this, vb)[vb] = new kk.Ffk, (0, DS.e)(this, Eb)[Eb] = kk.ufk()
            }))) return xk.nd.ModuleTrap
        }
        let Dk = !1;
        return (0, DS.e)(this, Nb)[Nb](((ek, ik) => {
          null !== (0, DS.e)(this, Bb)[Bb] && ek.step(0, 0);
          const fk = ek.stage(kk.length);
          0 !== fk && (new Uint8Array(ik.buffer, fk, kk.length).set(kk), ek.open(), (0, DS.e)(this, Xb)[Xb] = (0, DS.e)(this, tb)[tb], (0, DS.e)(this, Bb)[Bb] = null, (0, DS.e)(this, cb)[cb]++, Dk = !0)
        })) ? Dk ? "opening" : xk.nd.TooLarge : xk.nd.ModuleTrap
      }
      beforeFrame(kk) {
        const ek = (0, DS.e)(this, vb)[vb],
          ik = (0, DS.e)(this, Eb)[Eb];
        if (!ek || !ik || null !== (0, DS.e)(this, Bb)[Bb]) return;
        const {
          core: Dk
        } = this.deps, fk = Dk.qfk(kk);
        if (fk < 0) return;
        const Sk = Math.floor(fk);
        let bk, rk;
        try {
          bk = ek.step(Sk, fk - Sk), rk = ek.Yfk()
        } catch (mk) {
          return void(0, DS.e)(this, Jb)[Jb](mk)
        }
        const Pk = Dk.Afk(1, bk);
        if (0 === Pk) {
          const kk = (0, DS.e)(this, Nb)[Nb]((kk => {
            kk.close()
          }));
          if (!kk) return;
          return (0, DS.e)(this, gb)[gb] ? (0, DS.e)(this, Bb)[Bb] = "drop" : (0, DS.e)(this, Zb)[Zb](), void Dk.Ifk(xk.nd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Pk, bk).set(new Uint8Array(ik.buffer, rk, bk))
      }
      play() {
        (0, DS.e)(this, Gb)[Gb]((kk => {
          kk.play()
        }))
      }
      pause() {
        (0, DS.e)(this, Gb)[Gb]((kk => {
          kk.pause()
        }))
      }
      seek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, DS.e)(this, Gb)[Gb]((ik => {
          ik.seek(kk, ek)
        }))
      }
      setMark(kk, ek) {
        return (0, DS.e)(this, Gb)[Gb]((ik => {
          ik.zfk(kk, ek)
        }))
      }
      addKeyframe(kk, ek) {
        return (0, DS.e)(this, Gb)[Gb]((ik => {
          ik.Qfk(kk[0], kk[1], kk[2], ek[0], ek[1], ek[2])
        }))
      }
      setKeyframe(kk, ek) {
        return (0, DS.e)(this, Gb)[Gb]((ik => {
          ik.vfk(kk, ek)
        }))
      }
      moveKeyframe(kk, ek) {
        return (0, DS.e)(this, Gb)[Gb]((ik => {
          ik.Efk(kk, ek)
        }))
      }
      deleteKeyframes(kk, ek) {
        return (0, DS.e)(this, Gb)[Gb]((ik => {
          ik.hfk(kk, ek)
        }))
      }
      crop(kk, ek) {
        return null === (0, DS.e)(this, tb)[tb] && (0, DS.e)(this, Gb)[Gb]((ik => {
          ik.crop(kk, ek)
        }))
      }
      beginSave() {
        const kk = (0, DS.e)(this, Tb)[Tb];
        if ((0, DS.e)(this, Tb)[Tb] = null, null !== kk && kk !== (0, DS.e)(this, cb)[cb]) return null;
        let ek = 0,
          ik = null;
        if ((0, DS.e)(this, Nb)[Nb](((kk, Dk) => {
            ek = kk.save(), 0 !== ek && (ik = new Uint8Array(Dk.buffer, kk.Wfk(), kk.tfk()).slice())
          })), 0 === ek || !ik) return null;
        const Dk = {
          headLen: ek,
          editState: ik,
          givenUp: () => (0, DS.e)(this, Xb)[Xb] === Dk,
          head: (kk, ek) => {
            if ((0, DS.e)(this, tb)[tb] !== Dk || !(0, DS.e)(this, gb)[gb]) return null;
            let ik = null;
            return (0, DS.e)(this, Nb)[Nb](((Dk, fk) => {
              const Sk = Dk.Xfk();
              0 !== Sk && kk >= 0 && ek >= 0 && kk + ek <= Sk && (ik = new Uint8Array(fk.buffer, Dk.Bfk() + kk, ek))
            })), ik
          },
          end: () => {
            if ((0, DS.e)(this, tb)[tb] !== Dk) return;
            (0, DS.e)(this, tb)[tb] = null, (0, DS.e)(this, Xb)[Xb] = null, (0, DS.e)(this, Nb)[Nb]((kk => {
              kk.cfk()
            }));
            const kk = (0, DS.e)(this, Bb)[Bb];
            (0, DS.e)(this, Bb)[Bb] = null, "unload" === kk ? (0, DS.e)(this, ob)[ob]() : "drop" === kk && (0, DS.e)(this, Zb)[Zb]()
          }
        };
        return (0, DS.e)(this, tb)[tb] = Dk, Dk
      }
      askSave() {
        (0, DS.e)(this, Tb)[Tb] = (0, DS.e)(this, cb)[cb]
      }
      setSpeed(kk) {
        (0, DS.e)(this, Gb)[Gb]((ek => {
          ek.Tfk(kk)
        }))
      }
      setCameraMode(kk) {
        (0, DS.e)(this, Gb)[Gb]((ek => {
          ek.ofk(kk)
        }))
      }
      close() {
        (0, DS.e)(this, Gb)[Gb]((kk => {
          kk.close()
        }))
      }
      stop() {
        (0, DS.e)(this, ab)[ab]++, (0, DS.e)(this, gb)[gb] && ((0, DS.e)(this, Nb)[Nb]((kk => {
          kk.close()
        })), (0, DS.e)(this, vb)[vb]) ? (0, DS.e)(this, Bb)[Bb] = "unload" : (0, DS.e)(this, ob)[ob]()
      }
    }

    function er() {
      (0, DS.e)(this, Zb)[Zb](), (0, DS.e)(this, hb)[hb] || ((0, DS.e)(this, Qb)[Qb] = null, this.deps.unload())
    }

    function ir() {
      (0, DS.e)(this, Nb)[Nb]((kk => {
        kk.free()
      })), (0, DS.e)(this, vb)[vb] = null, (0, DS.e)(this, Eb)[Eb] = null
    }
    async function Dr(kk, ek) {
      return await this.deps.staleOr(kk, (() => {}), {
        beforeReload: ek
      }) ? "reloading" : xk.nd.ModuleLoad
    }

    function fr() {
      return null !== (0, DS.e)(this, tb)[tb] && (0, DS.e)(this, Xb)[Xb] !== (0, DS.e)(this, tb)[tb]
    }

    function Sr(kk) {
      return null === (0, DS.e)(this, Bb)[Bb] && (0, DS.e)(this, Nb)[Nb](kk)
    }

    function br(kk) {
      const ek = (0, DS.e)(this, vb)[vb],
        ik = (0, DS.e)(this, Eb)[Eb];
      return !(!ek || !ik) && (0, DS.e)(this, Rb)[Rb]((() => {
        kk(ek, ik)
      }))
    }

    function rr(kk) {
      if ((0, DS.e)(this, hb)[hb]) return !1;
      try {
        return kk(), !0
      } catch (ek) {
        return (0, DS.e)(this, Jb)[Jb](ek), !1
      }
    }

    function Pr(kk) {
      if (!(kk instanceof WebAssembly.RuntimeError)) throw kk;
      (0, DS.e)(this, hb)[hb] = !0, (0, DS.e)(this, vb)[vb] = null, (0, DS.e)(this, Eb)[Eb] = null, (0, DS.e)(this, Qb)[Qb] = null, this.deps.crash(this.deps.markTrapped(kk)), this.deps.core.Ifk(xk.nd.ModuleTrap)
    }
    var mr = ik(6333),
      Mr = ik(40606);
    const Kr = "[bloxd-wasm-client]";
    const xr = String(Qf);

    function nr(kk) {
      return null === kk || kk === xr ? void 0 : kk
    }

    function Ur(kk) {
      var ek, ik, Dk, fk, Sk, rk, Pk;
      switch (kk.what) {
        case xk.vd.FlyingText: {
          let ek;
          try {
            ek = JSON.parse(kk.contentJson)
          } catch (mk) {
            return void console.warn(`${Kr} a replay's flying text isn't JSON`, mk)
          }
          bk.j.tm("forceFlyingMiddleMessage", {
            content: ek,
            Ke: kk.Ke,
            angle: kk.angle,
            xe: kk.xe
          });
          break
        }
        case xk.vd.PlayerKilled:
          (0, Mr.f)({
            kind: "killed",
            body: {
              deadEId: null !== (ek = nr(kk.dead)) && void 0 !== ek ? ek : "",
              killerEId: nr(kk.killer),
              withItem: null !== (ik = kk.withItem) && void 0 !== ik ? ik : "",
              killstreak: kk.killstreak
            }
          });
          break;
        case xk.vd.Killfeed:
          (0, Mr.f)({
            kind: "custom",
            body: {
              killer: {
                eId: nr(kk.killerId),
                name: null !== (Dk = kk.killerName) && void 0 !== Dk ? Dk : void 0,
                colour: null !== (fk = kk.killerColour) && void 0 !== fk ? fk : void 0
              },
              victim: {
                eId: nr(kk.victimId),
                name: null !== (Sk = kk.victimName) && void 0 !== Sk ? Sk : void 0,
                colour: null !== (rk = kk.victimColour) && void 0 !== rk ? rk : void 0
              },
              withItem: null !== (Pk = kk.withItem) && void 0 !== Pk ? Pk : ""
            }
          })
      }
    }
    const Hr = "[bloxd-wasm-client]";

    function wr(kk) {
      if (void 0 === kk || null === kk || "" === kk) return null;
      const ek = Number(kk);
      return Number.isInteger(ek) && ek > Qf && ek <= 2147483647 ? ek : null
    }

    function lr(kk) {
      return {
        id: wr(kk.eId),
        name: "string" === typeof kk.name ? kk.name : null,
        colour: "string" === typeof kk.colour ? kk.colour : null
      }
    }

    function pr(kk) {
      const ek = (0, of.m)(Gi.tc.PlayerKilled, (ek => {
          var ik, Dk;
          const fk = (0, Tf.k)(ek);
          if (!(0, Tf.e)(fk)) return;
          const {
            deadEId: Sk,
            killerEId: bk,
            withItem: rk,
            killstreak: Pk
          } = fk;
          kk.recordPlayerKilled(null !== (ik = wr(Sk)) && void 0 !== ik ? ik : Qf, null !== (Dk = wr(bk)) && void 0 !== Dk ? Dk : Qf, "number" === typeof Pk ? Pk : 0, "string" === typeof rk ? rk : "")
        })),
        ik = (0, of.m)(Gi.tc.CustomKillfeed, (ek => {
          const ik = (0, Tf.k)(ek);
          if (!(0, Tf.e)(ik) || !(0, Tf.e)(ik.killer) || !(0, Tf.e)(ik.victim)) return;
          const {
            killer: Dk,
            victim: fk,
            withItem: Sk
          } = ik;
          kk.recordKillfeed(lr(Dk), lr(fk), "string" === typeof Sk ? Sk : null)
        }));
      return () => {
        ek(), ik()
      }
    }

    function yr(kk) {
      var ek;
      return void 0 === kk || null === kk ? null : null !== (ek = JSON.stringify(kk)) && void 0 !== ek ? ek : null
    }

    function Yr(kk) {
      let ek = null;
      const ik = () => {
        const {
          enableClipping: ik,
          clipDurationSeconds: fk
        } = Dk.b.get("clientEscMenuOptions"), Sk = `${ik}:${fk}`;
        Sk !== ek && (ek = Sk, kk.recorder.setPrefs(ik, fk))
      };
      return ik(), (0, bk.k)("appManagerUpdated|clientEscMenuOptions", ik)
    }
    const Lr = "replayModule",
      Cr = "recorderModule";

    function Ar(kk, ek, ik) {
      return function() {
        return kk.isStopped ? ik : ek(...arguments)
      }
    }
    const jr = {
      open: () => Promise.reject(new Error(jf.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function sr() {
      return ik.e(64).then((() => ik(60865)))
    }

    function dr(kk) {
      (0, jf.i)({
        text: kk,
        type: "Error"
      })
    }
    class Vr {
      constructor(kk) {
        this.deps = kk, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: ek,
          api: Dk,
          core: fk
        } = kk, Sk = () => kk.memory().buffer, bk = () => ek.isStopped ? null : ek.rings.cmd, rk = Ar(ek, ((kk, ek) => fk.Afk(kk, ek)), 0), Pk = () => fk.sfk();
        let mk = null;
        this.replay = new kr({
          core: {
            qfk: Ar(ek, (kk => fk.qfk(kk)), -1),
            Afk: rk,
            sfk: Pk,
            Ifk: Ar(ek, (kk => {
              fk.Ifk(kk)
            }), void 0)
          },
          coreBuffer: Sk,
          load: async () => (mk = await ik.e(65).then((() => ik(60873))), mk.loadReplayModule()),
          unload: () => {
            var kk;
            null === (kk = mk) || void 0 === kk || kk.unloadReplayModule()
          },
          markTrapped: kk => mk ? mk.markReplayTrapped(kk) : new Error(String(kk)),
          staleOr: (ek, ik, Dk) => kk.staleOr(Lr, ek, ik, Dk),
          crash: ek => {
            kk.reportFault(Lr, ek)
          }
        });
        let Mk = null;
        this.recorder = new Sb({
          core: {
            Vfk: Ar(ek, (kk => fk.Vfk(kk)), 0),
            yfk: Ar(ek, (kk => fk.yfk(kk)), 0),
            Afk: rk,
            sfk: Pk
          },
          coreCommand: (kk, ek) => {
            var ik, Dk;
            return null !== (ik = null === (Dk = bk()) || void 0 === Dk ? void 0 : Dk.writeCmd(kk, 0, ek)) && void 0 !== ik && ik
          },
          coreBuffer: Sk,
          load: async () => (Mk = await sr(), Mk.loadRecorderModule()),
          prefetch: () => {
            sr().then((kk => kk.prefetchRecorderModule())).catch((kk => {
              console.warn(`${Hr} the recorder module didn't prefetch, so a save loads it:`, kk)
            }))
          },
          unload: () => {
            var kk;
            null === (kk = Mk) || void 0 === kk || kk.unloadRecorderModule()
          },
          markTrapped: kk => Mk ? Mk.markRecorderTrapped(kk) : new Error(String(kk)),
          memoryBytes: () => {
            var kk, ek;
            return null !== (kk = null === (ek = Mk) || void 0 === ek ? void 0 : ek.recorderMemoryBytes()) && void 0 !== kk ? kk : 0
          },
          staleOr: (ek, ik) => kk.staleOr(Cr, ek, ik),
          crash: ek => {
            kk.reportFault(Cr, ek)
          },
          allowed: () => !0 === kk.options.get("canRecordReplays"),
          failed: dr,
          events: (kk, ek) => {
            this.runtime.recorderEvents(kk, ek)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: dr,
          unixNow: () => Date.now()
        });
        const Kk = new zf({
          core: {
            Mfk: Ar(ek, (kk => fk.Mfk(kk)), 0),
            xfk: Ar(ek, (() => {
              fk.xfk()
            }), void 0),
            Ow: Ar(ek, (() => fk.Ow()), 0),
            Kfk: Ar(ek, (() => fk.Kfk()), 0)
          },
          buffer: Sk,
          apiView: () => Dk.apiView,
          cmd: bk,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new zb({
          api: Dk,
          cmd: bk,
          loadHook: Ib,
          onError: kk => {
            console.warn(`${Hr} the recorded game's replay hooks:`, kk)
          }
        });
        const xk = new Bf({
          client: Kk,
          buffer: Sk,
          setHoldDraws: kk => {
            ek.setHoldDraws(kk)
          },
          notify: jf.i,
          onRecorderState: () => {
            var kk;
            null === (kk = (0, df.h)()) || void 0 === kk || kk.recorderChanged()
          },
          onViewerChange: () => {
            var kk;
            null === (kk = (0, df.h)()) || void 0 === kk || kk.viewerChanged()
          },
          onReplayOption: ek => {
            ! function(kk, ek) {
              var ik, Dk;
              const fk = Gi.Ab[ek.key];
              if (void 0 === fk) return;
              let Sk = null !== (ik = ek.value) && void 0 !== ik ? ik : JSON.parse(JSON.stringify(null !== (Dk = mr.b[fk]) && void 0 !== Dk ? Dk : null));
              if (null !== ek.value && ek.key < Gi._b.Environment && "string" === typeof Sk) try {
                Sk = JSON.parse(Sk)
              } catch (bk) {
                return void console.warn(`${Kr} a replay's ${fk} isn't JSON`, bk)
              }
              kk.applyNewClientOptions({
                [fk]: Sk
              })
            }(kk.options, ek)
          },
          onReplayUiEvent: Ur,
          onReplayOpened: ek => {
            this.entityHooks.opened((0, dk.Db)(ek)), kk.replayShaderPack(ek)
          },
          meshPending: () => {
            var kk, ik;
            return null !== (kk = null === (ik = ek.lastHeader) || void 0 === ik ? void 0 : ik.renderPending) && void 0 !== kk ? kk : 0
          },
          viewerOpen: sf.c,
          download: kk => {
            (0, Cf.l)(kk)
          }
        });
        this.runtime = xk, Dk.replay = xk.sink, (0, df.t)(xk);
        const nk = new gf({
          live: () => {
            var kk;
            return !ek.isStopped && !0 === (null === (kk = xk.currentViewer) || void 0 === kk ? void 0 : kk.inPlayback)
          },
          cmd: bk,
          dragScale: eS
        });
        this.freecam = nk, (0, df.s)(nk), this.recordedOptions = function(kk, ek) {
          const ik = Gi.Ab,
            Dk = ik.map(((ik, Dk) => ek.subscribe(ik, (ek => {
              kk.setOption(Dk, yr(ek))
            }))));
          return {
            sendAll() {
              ik.forEach(((ik, Dk) => {
                kk.setOption(Dk, yr(ek.get(ik)))
              }))
            },
            stop() {
              for (const kk of Dk) kk()
            }
          }
        }(xk.recorder, kk.options), this.stops = [(0, bD.n)((kk => {
          nk.flush();
          try {
            this.replay.beforeFrame(kk)
          } catch (ek) {
            this.deps.reportFault("replayFrame", ek)
          }
        })), (0, bD.y)(((kk, ek) => {
          try {
            this.recorder.afterFrame(), ek && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (ik) {
            this.deps.reportFault("recorderFrame", ik)
          }
          try {
            xk.afterFrame(kk)
          } catch (ik) {
            this.deps.reportFault("replayRuntime", ik)
          }
        })), Yr(xk), () => {
          this.recordedOptions.stop()
        }, pr(xk.recorder), (0, Zf.j)((kk => {
          let {
            action: ek,
            down: ik
          } = kk;
          var Dk;
          ik && (null === (Dk = (0, df.h)()) || void 0 === Dk || Dk.keyDown(ek))
        }))];
        const Uk = () => {
          const kk = xk.currentViewer;
          return !0 === (null === kk || void 0 === kk ? void 0 : kk.isOpen) ? kk : null
        };
        (0, Af.f)({
          open: (kk, ek) => this.open(kk, ek),
          replayKey: () => {
            var kk, ek;
            return null !== (kk = null === (ek = Uk()) || void 0 === ek ? void 0 : ek.id) && void 0 !== kk ? kk : null
          },
          saveRefusal: () => {
            var kk, ek;
            return null !== (kk = null === (ek = Uk()) || void 0 === ek ? void 0 : ek.saveRefusal) && void 0 !== kk ? kk : null
          },
          encode: () => {
            var kk, ek;
            return null !== (kk = null === (ek = Uk()) || void 0 === ek ? void 0 : ek.save()) && void 0 !== kk ? kk : Promise.resolve(null)
          },
          fileHandle: () => {
            var kk, ek;
            return null !== (kk = null === (ek = xk.currentViewer) || void 0 === ek ? void 0 : ek.fileHandle) && void 0 !== kk ? kk : null
          },
          markSaved: (kk, ek) => {
            var ik;
            null === (ik = xk.currentViewer) || void 0 === ik || ik.markSaved(kk, ek)
          }
        })
      }
      netEvent(kk) {
        if ("connection" === kk.type)
          if (kk.phase === xk.K.Activated) {
            this.activeConn = kk.conn;
            const ek = this.deps.sessionInfo(kk.conn);
            null !== ek && (this.runtime.activated({
              lobbyType: (0, Vk.u)(ek.lobbyName),
              gameNameWithVariation: ek.gameNameWithVariation,
              lobbyName: ek.lobbyName
            }), this.recordedOptions.sendAll())
          } else kk.phase !== xk.K.Left && kk.phase !== xk.K.Closed || kk.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const kk of this.stops) kk();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, df.n)() === this.runtime && (0, df.t)(null), (0, df.j)() === this.freecam && (0, df.s)(null), (0, Af.f)(jr), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(kk, ek) {
        const {
          running: ik
        } = this.deps;
        if (ik.isStopped) throw new Error(jf.e.coreStopped.text);
        if (kk.byteLength > 67108864) throw new Error(jf.e.cantOpen.text);
        let Dk;
        try {
          Dk = await async function(kk) {
            const ek = await kk.loadViewer();
            return ek.inPlayback || (0, bD.J)().leaveGame(null), ek
          }(this.runtime)
        } catch (fk) {
          throw console.warn(`${Hr} the replay viewer didn't load`, fk), new Error(jf.e.viewerLoadFailed.text)
        }
        if (ik.isStopped) throw new Error(jf.e.coreStopped.text);
        await Dk.open(kk, ek)
      }
    }
    var Fr = ik(1911);

    function ur(kk, ek) {
      const {
        aux: ik,
        payload: Dk
      } = function(kk) {
        return {
          aux: kk.reset ? xk.sc.ResetFirst : 0,
          payload: Ir(kk.changes)
        }
      }(ek);
      kk.queueOptions(ik, Dk) && (ek.reset && Fr.c.reset(), Fr.c.apply(ek.changes))
    }
    const qr = new TextEncoder;

    function Ir(kk) {
      const ek = new zr;
      return vr(ek, kk), ek.bytes()
    }
    class zr {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(kk) {
        if (this.len + kk <= this.buf.length) return;
        const ek = new Uint8Array(Math.max(2 * this.buf.length, this.len + kk));
        ek.set(this.buf.subarray(0, this.len)), this.buf = ek, this.view = new DataView(ek.buffer)
      }
      u8(kk) {
        this.room(1), this.buf[this.len++] = kk
      }
      tagged(kk, ek, ik) {
        this.room(1 + ek), this.buf[this.len++] = kk, 1 === ek ? this.view.setUint8(this.len, ik) : 2 === ek ? this.view.setUint16(this.len, ik) : this.view.setUint32(this.len, ik), this.len += ek
      }
      signed(kk, ek, ik) {
        this.room(1 + ek), this.buf[this.len++] = kk, 1 === ek ? this.view.setInt8(this.len, ik) : 2 === ek ? this.view.setInt16(this.len, ik) : this.view.setInt32(this.len, ik), this.len += ek
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

    function Qr(kk, ek, ik, Dk, fk, Sk, bk) {
      ek < Dk ? kk.u8(ik | ek) : null !== fk && ek < 256 ? kk.tagged(fk, 1, ek) : ek < 65536 ? kk.tagged(Sk, 2, ek) : kk.tagged(bk, 4, ek)
    }

    function vr(kk, ek) {
      switch (typeof ek) {
        case "undefined":
          return void kk.raw(Er);
        case "boolean":
          return void kk.u8(ek ? 195 : 194);
        case "number":
          return void
          function(kk, ek) {
            ek >>> 0 === ek ? ek < 128 ? kk.u8(ek) : ek < 256 ? kk.tagged(204, 1, ek) : ek < 65536 ? kk.tagged(205, 2, ek) : kk.tagged(206, 4, ek) : (ek | 0) === ek ? ek >= -32 ? kk.u8(255 & ek) : ek >= -128 ? kk.signed(208, 1, ek) : ek >= -32768 ? kk.signed(209, 2, ek) : kk.signed(210, 4, ek) : kk.f64(ek)
          }(kk, ek);
        case "string": {
          const ik = qr.encode(ek);
          return Qr(kk, ik.length, 160, 32, 217, 218, 219), void kk.raw(ik)
        }
        case "object":
          break;
        default:
          return void kk.u8(192)
      }
      if (null === ek) kk.u8(192);
      else if (Array.isArray(ek)) {
        Qr(kk, ek.length, 144, 16, null, 220, 221);
        for (const ik of ek) vr(kk, ik)
      } else if (ek instanceof Uint8Array) Qr(kk, ek.length, 0, 0, 196, 197, 198), kk.raw(ek);
      else {
        const ik = Object.keys(ek);
        Qr(kk, ik.length, 128, 0, null, 222, 223);
        for (const Dk of ik) vr(kk, Dk), vr(kk, ek[Dk])
      }
    }
    const Er = new Uint8Array([212, 0, 0]);
    var hr = ik(42192),
      ar = ik(42199),
      Wr = ik(40541),
      tr = ik(40581),
      Xr = ik(2823);
    const Br = [1e3, 3e3, 9e3];
    class cr {
      constructor(kk) {
        this.host = kk, this.sets = new Map, this.table = [], this.generation = 0, this.aU = !1
      }
      onEvent(kk) {
        const ek = function(kk) {
          if (kk.byteLength !== xk.Cd) return null;
          const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
          return {
            want: ek.getUint16(0, !0),
            release: ek.getUint16(2, !0)
          }
        }(kk);
        ek && !this.aU && (ek.release !== xk.Ed && this.release(ek.release), ek.want !== xk.Ed && this.want(ek.want))
      }
      reset(kk) {
        if (!this.aU) {
          for (const [kk, ek] of this.sets) "ready" === ek.state && this.releaseAll(ek.distinct), this.sets.delete(kk);
          this.table = kk, this.generation++
        }
      }
      dispose() {
        if (this.aU) return;
        this.aU = !0, this.generation++, this.table = [];
        const kk = [...this.sets.values()];
        this.sets.clear();
        let ek = null;
        for (const Dk of kk)
          for (const kk of "ready" === Dk.state ? Dk.distinct : []) try {
            this.host.zik(kk)
          } catch (ik) {
            ek ??= {
              error: ik
            }
          }
        if (ek) throw ek.error
      }
      isReady(kk) {
        var ek;
        return "ready" === (null === (ek = this.sets.get(kk)) || void 0 === ek ? void 0 : ek.state)
      }
      want(kk) {
        const ek = this.sets.get(kk);
        if ("loading" === (null === ek || void 0 === ek ? void 0 : ek.state)) return ek.wanted = !0, void this.capAnswer(kk, ek);
        if ("ready" === (null === ek || void 0 === ek ? void 0 : ek.state)) return void this.host.sendReady(or(kk, ek.images, ek.size));
        const ik = this.table[kk];
        if (!ik || 1 !== ik.urls.length && ik.urls.length !== Gi.oc.CubeFaces) return this.host.sendReady(Zr(kk)), void this.host.onLoadFailed(kk, "", new Error(`no image set ${kk}`));
        const Dk = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(kk, Dk), this.load(kk, ik, Dk, this.generation, 0), this.capAnswer(kk, Dk)
      }
      capAnswer(kk, ek) {
        this.host.wait(4e3, (() => {
          this.sets.get(kk) === ek && ek.wanted && this.host.sendReady(Zr(kk))
        }))
      }
      load(kk, ek, ik, Dk, fk) {
        const Sk = [...new Set(ek.urls)];
        Promise.allSettled(Sk.map((kk => this.host.loadImage(kk, ek.orientation)))).then((bk => {
          const rk = bk.flatMap((kk => "fulfilled" === kk.status ? [kk.value] : [])),
            Pk = Dk === this.generation && this.sets.get(kk) === ik,
            mk = bk.findIndex((kk => "rejected" === kk.status));
          if (!Pk || !ik.wanted) return this.aU ? void this.releaseAfterDispose(rk.map(Tr)) : (this.releaseAll(rk.map(Tr)), void(Pk && this.sets.delete(kk)));
          mk < 0 ? this.loaded(kk, ek, Sk, rk) : (this.releaseAll(rk.map(Tr)), this.host.sendReady(Zr(kk)), fk < Br.length ? this.host.wait(Br[fk], (() => {
            Dk === this.generation && this.sets.get(kk) === ik && (ik.wanted ? this.load(kk, ek, ik, Dk, fk + 1) : this.sets.delete(kk))
          })) : (this.sets.delete(kk), this.host.onLoadFailed(kk, Sk[mk], bk[mk].reason)))
        }))
      }
      loaded(kk, ek, ik, Dk) {
        const [fk] = Dk, Sk = [fk.width, fk.height], bk = Dk.every((kk => kk.width === Sk[0] && kk.height === Sk[1])), rk = ek.urls.length === Gi.oc.CubeFaces;
        if (!bk || Sk[0] <= 0 || Sk[1] <= 0 || Sk[0] > 65535 || Sk[1] > 65535 || rk && Sk[0] !== Sk[1]) {
          this.releaseAll(Dk.map(Tr)), this.sets.delete(kk), this.host.sendReady(Zr(kk));
          const ik = Dk.map((kk => `${kk.width}x${kk.height}`));
          return void this.host.onLoadFailed(kk, ek.urls[0], new Error(`set ${kk}'s images can't make its texture: ${ik.join(", ")}`))
        }
        const Pk = ek.urls.map((kk => Dk[ik.indexOf(kk)].id)),
          mk = Dk.map(Tr);
        this.sets.set(kk, {
          state: "ready",
          images: Pk,
          distinct: mk,
          size: Sk
        }), this.host.sendReady(or(kk, Pk, Sk))
      }
      release(kk) {
        const ek = this.sets.get(kk);
        "loading" === (null === ek || void 0 === ek ? void 0 : ek.state) ? ek.wanted = !1: "ready" === (null === ek || void 0 === ek ? void 0 : ek.state) && (this.releaseAll(ek.distinct), this.sets.delete(kk))
      }
      releaseAll(kk) {
        for (const ek of kk) this.host.zik(ek)
      }
      releaseAfterDispose(kk) {
        for (const ek of kk) try {
          this.host.zik(ek)
        } catch {}
      }
    }

    function Tr(kk) {
      return kk.id
    }

    function or(kk, ek, ik) {
      const Dk = new Uint8Array(Gi.oc.SkyImagesReadyBytes),
        fk = new DataView(Dk.buffer);
      return fk.setUint16(0, kk, !0), fk.setUint16(2, ek.length, !0), fk.setUint16(4, ik[0], !0), fk.setUint16(6, ik[1], !0), ek.slice(0, Gi.oc.CubeFaces).forEach(((kk, ek) => {
        fk.setUint32(8 + 4 * ek, kk, !0)
      })), Dk
    }

    function Zr(kk) {
      const ek = new Uint8Array(Gi.oc.SkyImagesReadyBytes),
        ik = new DataView(ek.buffer);
      return ik.setUint16(0, kk, !0), ik.setUint16(2, Gi.oc.Failed, !0), ek
    }
    let Or = Promise.resolve();
    async function gr(kk, ek) {
      let ik;
      try {
        ik = await (0, Xr.M)(kk)
      } catch (Sk) {
        throw new Wr.d("fetch", kk, {
          cause: Sk
        })
      }
      const Dk = Or.then((() => async function(kk, ek) {
        const ik = new Blob([kk.slice()]);
        let Dk = await createImageBitmap(ik, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ek
        });
        const fk = 1024 / Math.max(Dk.width, Dk.height);
        if (fk < 1) {
          const kk = Dk;
          try {
            Dk = await createImageBitmap(kk, {
              resizeWidth: Math.max(1, Math.round(kk.width * fk)),
              resizeHeight: Math.max(1, Math.round(kk.height * fk)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            kk.close()
          }
        }
        return Dk
      }(ik, ek)));
      let fk;
      Or = Dk.catch((() => {}));
      try {
        fk = await Dk
      } catch (Sk) {
        throw new Wr.d("decode", kk, {
          cause: Sk
        })
      }
      return {
        id: (0, Wr.n)(fk),
        width: fk.width,
        height: fk.height
      }
    }
    var Gr = ik(2107),
      Nr = ik(33615),
      Rr = ik(38793);
    const Jr = Gr.g.length,
      kP = new Set([...Gr.g, "earth"]);

    function eP(kk) {
      const ek = [],
        ik = [],
        Dk = (kk, Dk) => {
          if ("custom" === Dk.type) {
            ik.push({
              id: kk,
              kind: Gi.oc.KindCustom,
              set: ek.length,
              earth: null
            });
            const fk = [Dk.px, Dk.py, Dk.pz, Dk.nx, Dk.ny, Dk.nz];
            ek.push({
              urls: (0, Rr.g)(fk),
              orientation: "none"
            })
          } else ik.push({
            id: kk,
            kind: Gi.oc.KindEarth,
            set: 0,
            earth: Dk
          })
        };
      Gr.g.forEach(((ek, ik) => {
        var fk;
        Dk(ik, null !== (fk = iP(kk[ek])) && void 0 !== fk ? fk : Nr.p[ek])
      }));
      const fk = iP(kk.earth);
      "earth" === (null === fk || void 0 === fk ? void 0 : fk.type) && Dk(Jr, fk);
      const Sk = new TextEncoder,
        bk = [],
        rk = [];
      for (const [nk, Uk] of Object.entries(kk)) {
        const kk = kP.has(nk) ? null : iP(Uk);
        if (null === kk) continue;
        const ek = Sk.encode(nk);
        ek.length > 255 ? rk.push(`Ignoring texture pack skybox ${nk}, whose name is over 255 bytes`) : bk.length === Gi.oc.MaxAdded ? rk.push(`Ignoring texture pack skybox ${nk}, past the ${Gi.oc.MaxAdded} skies a pack can add`) : (bk.push(ek), Dk(Gi.oc.AddedId, kk))
      }
      const Pk = ek.length;
      ek.push({
        urls: Nr.f.map((kk => Nr.i + kk)),
        orientation: "none"
      }), ek.push({
        urls: [Nr.m],
        orientation: "flipY"
      }), ek.push({
        urls: [Nr.e],
        orientation: "flipY"
      });
      const mk = Gi.oc.SkyTableHeaderBytes + ik.length * Gi.oc.SkyTableEntryBytes,
        Mk = new Uint8Array(mk + bk.reduce(((kk, ek) => kk + 1 + ek.length), 0)),
        Kk = new DataView(Mk.buffer);
      Kk.setUint16(0, Pk, !0), Kk.setUint16(2, Pk + 1, !0), Kk.setUint16(4, Pk + 2, !0), Kk.setUint16(6, ik.length, !0), ik.forEach(((kk, ek) => {
        const ik = Gi.oc.SkyTableHeaderBytes + ek * Gi.oc.SkyTableEntryBytes;
        Kk.setUint16(ik, kk.id, !0), Kk.setUint8(ik + 2, kk.kind);
        const Dk = ik + 4;
        kk.earth ? function(kk, ek, ik) {
          const Dk = kk;
          let fk = 0,
            Sk = 0;
          for (const [bk, rk] of DP) {
            const kk = Dk[bk];
            "number" === typeof kk && Number.isFinite(kk) && (ek.setFloat32(ik + 4 * rk, kk, !0), fk |= 1 << rk)
          }
          for (const [bk, rk, Pk] of fP) {
            const kk = Dk[bk];
            Array.isArray(kk) && 3 === kk.length && kk.every((kk => "number" === typeof kk && Number.isFinite(kk))) && (kk.forEach(((kk, Dk) => {
              ek.setFloat32(ik + Pk + 4 * Dk, kk, !0)
            })), fk |= rk)
          }
          SP.forEach(((kk, Sk) => {
            let [bk, rk] = kk;
            const Pk = Dk[bk];
            "number" === typeof Pk && Number.isFinite(Pk) && (ek.setFloat32(ik + Gi.y.CameraOffsetAt + 4 * Sk, Pk, !0), fk |= rk)
          }));
          for (const [bk, rk] of bP) {
            const kk = Dk[bk];
            null !== kk && void 0 !== kk && (fk |= rk, kk && (Sk |= rk >>> 14))
          }
          ek.setUint32(ik + Gi.y.PresentAt, fk, !0), ek.setUint8(ik + Gi.y.FlagsAt, Sk)
        }(kk.earth, Kk, Dk) : Kk.setUint16(Dk, kk.set, !0)
      }));
      let xk = mk;
      for (const nk of bk) Mk[xk] = nk.length, Mk.set(nk, xk + 1), xk += 1 + nk.length;
      return {
        payload: Mk,
        sets: ek,
        leftOut: rk
      }
    }

    function iP(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const ek = kk;
      if ("earth" === ek.type) return kk;
      return "custom" === ek.type && ["px", "py", "pz", "nx", "ny", "nz"].every((kk => {
        const ik = ek[kk];
        return "string" === typeof ik && ik.length > 0
      })) ? kk : null
    }
    const DP = [
        ["inclination", Gi.y.Inclination],
        ["turbidity", Gi.y.Turbidity],
        ["luminance", Gi.y.Luminance],
        ["rayleigh", Gi.y.Rayleigh],
        ["mieCoefficient", Gi.y.MieCoefficient],
        ["mieDirectionalG", Gi.y.MieDirectionalG],
        ["distance", Gi.y.Distance],
        ["azimuth", Gi.y.Azimuth]
      ],
      fP = [
        ["sunPosition", Gi.y.SunPosition, Gi.y.SunPositionAt],
        ["up", Gi.y.Up, Gi.y.UpAt],
        ["vertexTint", Gi.y.VertexTint, Gi.y.VertexTintAt]
      ],
      SP = [
        ["xCameraOffset", Gi.y.CameraOffsetX],
        ["yCameraOffset", Gi.y.CameraOffsetY],
        ["zCameraOffset", Gi.y.CameraOffsetZ]
      ],
      bP = [
        ["useSunPosition", Gi.y.UseSunPosition],
        ["dithering", Gi.y.Dithering],
        ["infiniteDistance", Gi.y.InfiniteDistance]
      ];

    function rP(kk, ek, ik) {
      const Dk = new mP({
        writeCmd: kk,
        warn: ek,
        followPack: PP(ik, ek)
      });
      return Dk.start(), Dk
    }

    function PP(kk, ek) {
      return ik => {
        let Dk = () => {};
        const fk = kk((kk => {
          Dk(), Dk = () => {}, null !== kk ? Dk = kk.subscribe((kk => {
            ik(function(kk, ek, ik) {
              if ("object" !== typeof kk || null === kk) return null;
              const Dk = kk.skyBoxes;
              if ("object" !== typeof Dk || null === Dk) return null;
              if ("player" === ek) return Dk;
              return Object.fromEntries(Object.entries(Dk).filter((kk => {
                let [ek, Dk] = kk;
                return !! function(kk) {
                  if ("object" !== typeof kk || null === kk) return !1;
                  return "earth" === kk.type || Object.entries(kk).every((kk => {
                    let [ek, ik] = kk;
                    return "type" === ek || ("" === (Dk = ik) || null !== function(kk) {
                      var ek, ik, Dk;
                      return "string" !== typeof kk ? null : null !== (ek = null === (ik = MP.exec(kk)) || void 0 === ik || null === (Dk = ik.groups) || void 0 === Dk ? void 0 : Dk.base64) && void 0 !== ek ? ek : null
                    }(Dk));
                    var Dk
                  }))
                }(Dk) || (ik(`Ignoring texture pack skybox ${ek}, whose faces are not all data URLs`, null), !1)
              })))
            }(kk.pack, null === kk.gameSource ? "player" : "customGame", ek))
          })) : ik(null)
        }));
        return () => {
          fk(), Dk()
        }
      }
    }
    class mP {
      constructor(kk) {
        var ek, ik, Dk;
        this.host = kk, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.aU = !1, this.wait = null !== (ek = kk.wait) && void 0 !== ek ? ek : (kk, ek) => {
          setTimeout(ek, kk)
        }, this.loader = new cr({
          loadImage: null !== (ik = kk.loadImage) && void 0 !== ik ? ik : gr,
          zik: null !== (Dk = kk.zik) && void 0 !== Dk ? Dk : Wr.p,
          sendReady: kk => {
            this.queue.push({
              kind: Gi.oc.SkyImagesReady,
              payload: kk
            })
          },
          onLoadFailed: (ek, ik, Dk) => {
            kk.warn(`sky image set ${ek} (${ik}) didn't load: the last sky stays`, Dk)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(tr.b, (() => {
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
        this.aU = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(kk) {
        if (this.aU) return;
        const ek = eP(kk);
        if (!(this.written && (ik = this.written, Dk = ek, ik.payload.length === Dk.payload.length && ik.payload.every(((kk, ek) => kk === Dk.payload[ek])) && ik.sets.length === Dk.sets.length && ik.sets.every(((kk, ek) => {
            const ik = Dk.sets[ek];
            return kk.orientation === ik.orientation && kk.urls.length === ik.urls.length && kk.urls.every(((kk, ek) => kk === ik.urls[ek]))
          }))))) {
          var ik, Dk;
          for (const kk of ek.leftOut) this.host.warn(kk, null);
          this.written = ek, this.loader.reset(ek.sets), this.queue = this.queue.filter((kk => kk.kind !== Gi.oc.SkyImagesReady)), this.queue.push({
            kind: Gi.oc.SkyTable,
            payload: ek.payload
          })
        }
      }
    }
    const MP = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var KP = ik(2738),
      xP = ik(2932),
      nP = ik(286),
      UP = ik(176),
      HP = ik(2743),
      wP = ik(2745),
      lP = ik(259),
      pP = ik(267),
      yP = ik(2842),
      YP = ik(2852),
      LP = ik(2864),
      CP = ik(111),
      AP = ik(280),
      jP = ik(40415);
    class sP {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, of.m)(LD.P, (kk => {
          this.onReply((0, Tf.i)(LD.P, kk), performance.now())
        }))
      }
      onFrame(kk, ek) {
        null === this.id ? this.id = kk : kk !== this.id && (this.id = kk, this.sentMs = document.hidden ? null : ek)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(kk, ek) {
        kk === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(ek - this.sentMs), this.sentMs = null)
      }
      take() {
        const kk = this.roundTripMs;
        return this.roundTripMs = null, kk
      }
      stop() {
        this.stopReplies()
      }
    }
    class dP {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(kk, ek, ik, Dk) {
        const fk = kk - this.sampled >>> 0,
          Sk = ek - this.timed >>> 0,
          bk = ik - this.frameUs >>> 0,
          rk = this.primed;
        return this.sampled = kk, this.timed = ek, this.frameUs = ik, this.primed = !0, !(!rk || fk > 64 || Sk > 64) && (Dk && bk <= 1e6 * Sk && (this.windowTimed += Sk, this.windowUs += bk), Dk && fk > 0)
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
    const VP = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class FP {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(kk, ek) {
        const ik = Math.min(4096, this.count + ek);
        this.samples.fill(kk, this.count, ik), this.count = ik
      }
      clear() {
        this.count = 0
      }
      take() {
        const kk = this.count;
        if (this.count = 0, kk < 30) return VP;
        const ek = this.samples.subarray(0, kk).sort(),
          ik = ik => ek[Math.min(kk - 1, Math.floor(ik * kk))];
        return {
          lagP50Ms: ik(.5),
          lagP90Ms: ik(.9)
        }
      }
    }
    class uP {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new FP
      }
      onFrame(kk, ek) {
        const ik = kk.headerWord(Gi.L.Pacing),
          Dk = kk.headerWord(Gi.L.PacingLagUs),
          fk = (ik >>> Gi.fb.LagsShift) - (this.word >>> Gi.fb.LagsShift) & Gi.fb.CountMask,
          Sk = fk > 0 ? (Dk - this.lagUs >>> 0) / fk / 1e3 : 0,
          bk = this.primed && fk <= 64 && Sk <= 6e4;
        this.word = ik, this.lagUs = Dk, this.primed = !0, bk && ek && fk > 0 && 0 !== (ik & Gi.fb.Defaulted) && this.lags.add(Sk, fk)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(kk) {
        return kk ? this.lags.take() : (this.lags.clear(), VP)
      }
    }
    var qP = ik(694);

    function IP() {
      return Date.now() - performance.now()
    }
    class zP {
      constructor() {
        this.rafs = 0, this.XM = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = IP(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, qP.f)(), this.onBlur = () => {
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
        (0 === this.XM || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.XM++, this.heldAtRaf = this.rafs
      }
      words(kk) {
        const ek = kk ? this.rafs - 1 : this.rafs;
        return function(kk) {
          let ek = 0 === kk.rafs ? "raf:none" : "raf:some";
          return kk.XM > 0 && (ek += " pace:held"), kk.heldRunMs > 1e4 && (ek += " pace:stalled"), kk.blurred && (ek += " blur"), kk.resumed && (ek += " resumed"), kk.embedded && (ek += " embedded"), kk.clockGainMs > 2e3 && (ek += " clockjump"), ek
        }({
          clockGainMs: IP() - this.startClockOffsetMs,
          rafs: ek,
          XM: this.XM,
          heldRunMs: this.XM > 0 && this.heldAtRaf === ek ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(kk) {
        this.rafs = 0, this.XM = 0, this.heldAtRaf = -1, this.startMs = kk, this.startClockOffsetMs = IP(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var QP = ik(33714),
      vP = ik(2727),
      EP = ik(40475),
      hP = ik(33707),
      aP = ik(2749),
      WP = ik(2730);
    const tP = {
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

    function XP(kk) {
      return new BP(kk)
    }
    class BP {
      constructor(kk) {
        this.shell = kk, this.tracker = new wP.b, this.gpu = new dP, this.pacing = new uP, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new sP, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new zP, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, QP.b)(kk.backend, kk.canvas, kk.adapterVendor), this.tracker.start((() => !kk.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, aP.d)("wasm", (() => {
          const {
            n: ek,
            sampleCount: ik
          } = (0, EP.g)();
          return `${kk.backend}, quality steps aim at up to ${WP.b.target.maxFps} fps, pixel n ${ek}, msaa ${ik}`
        }), (ek => {
          ek.setLoadCounts(kk.readLoadCounts), this.frameDebug = ek
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(kk) {
        var ek;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(kk), null === (ek = this.frameDebug) || void 0 === ek || ek.animationFrame()
      }
      sendsWent(kk, ek, ik) {
        this.ping.onFrame(kk.headerWord(Gi.L.PingSent), ek), this.sendsStartMs = ek, this.sendsEndMs = ik
      }
      frameRan(kk, ek, ik, Dk) {
        var fk;
        this.ping.onFrame(kk.headerWord(Gi.L.PingSent), ik);
        const Sk = this.tracker;
        this.pacing.onFrame(kk, Sk.isSampling());
        const bk = kk.headerWord(Gi.L.TickUs) / 1e3 + (0, bD.K)();
        var rk;
        (Sk.Iy(bk), null === (fk = this.frameDebug) || void 0 === fk || fk.wasmFrame(kk, ek, ik, Dk, Sk.isSampling(), bk), null !== this.game) && (null === (rk = this.frameDebug) || void 0 === rk || rk.inGame());
        const Pk = this.sendsStartMs >= ek ? this.sendsEndMs - this.sendsStartMs : 0,
          mk = Math.max(0, ik - ek - bk - Pk);
        if ("drawn" !== Dk) return void("paced" === Dk ? (this.pacedCpuMs += mk, this.stallGap.paced()) : "skipped" === Dk && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(ek, !0), Sk.onFrameStart(ek);
        this.gpu.onFrame(kk.headerWord(Gi.L.GpuSampled), kk.headerWord(Gi.L.GpuTimed), kk.headerWord(Gi.L.GpuFrameUs), Sk.isSampling()) && Sk.onGpuSampleStarted(), Sk.onFrameCpu(mk + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(ek)
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
          var ek;
          if (this.game = kk, null !== kk) null === (ek = this.frameDebug) || void 0 === ek || ek.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== kk
      }
      checkMainStall(kk, ek) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const ik = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          Dk = this.lastDrawnMs < 0 ? 0 : kk - this.lastDrawnMs;
        this.lastDrawnMs = kk;
        const fk = !this.stallPending && Dk > 5e3,
          Sk = fk ? this.stallGap.words(ek) : "";
        this.stallGap.restart(kk), this.stallPending || (fk ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(Dk, ik.blockingSinceMark(), Sk)
        }), 0)) : ik.markFrame(kk))
      }
      countFpsFrame(kk) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = kk
        }
        this.fpsFrames++;
        const ek = kk - this.fpsSpanStartMs;
        if (!(ek < LP.d)) {
          if (!document.hidden) {
            const kk = 1e3 * this.fpsFrames / ek;
            this.firstSpanFps ??= kk, this.initialFps = this.firstSpanFps, this.fpsOverTime = kk
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = kk
        }
      }
      flush() {
        const kk = this.followGame(),
          {
            cpuFrameMs: ek,
            refreshHz: ik,
            cpuBottleneck: fk,
            frameIntervalCv: Sk,
            ...bk
          } = this.tracker.snapshotAndReset(),
          rk = this.shell.inGame(),
          Pk = rk && this.inGameAtLastFlush,
          mk = Pk ? bk : (0, HP.g)(bk),
          Mk = this.pacing.snapshotAndReset(Pk);
        if (this.inGameAtLastFlush = rk, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !kk) return;
        const Kk = performance.now(),
          nk = (0, YP.w)((0, YP.t)(Kk), this.unsentPage),
          Hk = function(kk, ek, ik, fk, Sk, bk, rk, Pk) {
            var mk, Mk, Kk, xk, nk;
            const Uk = {},
              {
                canvas: Hk
              } = kk,
              wk = (0, yP.e)({
                refreshHz: ek.refreshHz,
                msaa: kk.msaa(),
                autoMsaaOff: (0, hP.b)()
              });
            for (const lk of (0, xP.i)()) {
              const pk = lk.name;
              let yk;
              if ((0, nP.s)(pk)) yk = (0, YP.e)(pk);
              else if ((0, YP.m)(pk)) yk = Pk[pk];
              else if ((0, yP.f)(pk)) yk = wk[pk];
              else switch (pk) {
                case "fps":
                  yk = fk;
                  break;
                case "GP":
                  yk = Sk;
                  break;
                case "im":
                  yk = (0, vP.D)((0, EP.g)().n);
                  break;
                case "Dm":
                  yk = Math.max(Hk.width, Hk.height);
                  break;
                case "fm":
                  yk = Math.min(Hk.width, Hk.height);
                  break;
                case "Sm":
                  yk = navigator.hardwareConcurrency || null;
                  break;
                case "bm":
                  yk = (0, Rf.getWebGpuSupported)();
                  break;
                case "rm":
                  yk = null === kk.fallbackReason ? null : tP[kk.fallbackReason];
                  break;
                case "Pm":
                  yk = ek.cpuFrameMs;
                  break;
                case "Mm":
                  yk = ek.refreshHz;
                  break;
                case "Km":
                  yk = ek.cpuBottleneck;
                  break;
                case "xm":
                  yk = ek.frameIntervalCv;
                  break;
                case "nm":
                  yk = ek.frameMs;
                  break;
                case "Um":
                  yk = ek.tickMs;
                  break;
                case "pm":
                  yk = ek.mainBusyShare;
                  break;
                case "ym":
                  yk = ek.mainProbeDelayMs;
                  break;
                case "Hm":
                  yk = ek.longAnimationFramesPerMin;
                  break;
                case "wm":
                  yk = ek.longAnimationFrameTimeShare;
                  break;
                case "lm":
                  yk = ek.longAnimationFrameScriptShare;
                  break;
                case "Ym":
                  yk = ek.gpuPassMs;
                  break;
                case "Lm":
                  yk = ek.gpuSubmitToDoneMs;
                  break;
                case "Cm":
                  yk = ik.lagP50Ms;
                  break;
                case "Am":
                  yk = ik.lagP90Ms;
                  break;
                case "hm":
                  yk = (0, KP.h)(bk);
                  break;
                case "km":
                  yk = rk;
                  break;
                case "jm":
                case "sm":
                case "dm":
                case "Vm":
                case "Fm":
                case "um":
                case "qm":
                case "Im":
                case "zm":
                case "Qm":
                case "Em":
                case "am":
                case "Wm":
                case "Xm":
                case "Bm":
                  yk = null;
                  break;
                case "fM":
                  yk = (0, Rf.getPlatformType)();
                  break;
                case "SM":
                  yk = (0, Rf.getGpuVendor)();
                  break;
                case "bM":
                  yk = jP.e[kk.backend];
                  break;
                case "rM":
                  yk = (0, CP.d)();
                  break;
                case "PM":
                  yk = (0, Rf.getOperatingSystem)();
                  break;
                case "mM":
                  yk = (0, Rf.getTrafficSource)();
                  break;
                case "MM":
                  yk = null !== (mk = Dk.b.get("gameEntrySource")) && void 0 !== mk ? mk : UP.f;
                  break;
                case "KM":
                  yk = null !== (Mk = ek.frameLimiter) && void 0 !== Mk ? Mk : UP.f;
                  break;
                case "xM":
                  yk = (0, lP.g)();
                  break;
                case "nM":
                  yk = null !== (Kk = (0, pP.c)()) && void 0 !== Kk ? Kk : UP.f;
                  break;
                case "UM":
                  yk = (0, lP.b)(Hk.width, Hk.height);
                  break;
                case "HM":
                  yk = (0, xP.l)(-(new Date).getTimezoneOffset());
                  break;
                case "pM":
                  yk = null !== (xk = kk.fallbackReason) && void 0 !== xk ? xk : UP.f;
                  break;
                case "LM":
                  yk = "ready";
                  break;
                case "CM":
                  yk = (0, Rf.getSoftwareRenderer)();
                  break;
                case "lM":
                  yk = null !== kk.shaderPackReach() ? "true" : "false";
                  break;
                case "AM":
                  yk = null !== (nk = kk.shaderPackReach()) && void 0 !== nk && nk.sceneDepth ? "true" : "false";
                  break;
                case "jM": {
                  const ek = kk.shaderPackReach();
                  yk = null !== ek && void 0 !== ek && ek.sunShadow ? "all" : null !== ek && void 0 !== ek && ek.airShadow ? "air" : "none";
                  break
                }
                case "sM":
                  yk = AP.B;
                  break;
                case "wM":
                case "yM":
                case "YM":
                  yk = UP.f;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${pk}`)
              }
              if (void 0 === yk) throw new Error(`Metric ${pk} has no value`);
              Uk[pk] = yk
            }
            return Uk
          }(this.shell, {
            cpuFrameMs: ek,
            refreshHz: ik,
            cpuBottleneck: fk,
            frameIntervalCv: Sk,
            ...mk
          }, Mk, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), nk);
        if (! function(kk, ek, ik) {
            return (0, oe.b)(), kk(Uk.m.Send, ek, ik)
          }(this.shell.writeCmd, xk.Ad, function(kk) {
            const ek = (0, Ek.c)((0, ge.g)(kk)),
              ik = new Uint8Array(Uk.Kd.BYTES + ek.length);
            return new DataView(ik.buffer).setUint16(0, ge.e.AnalyticsUpdate, !0), ik.set(ek, Uk.Kd.BYTES), ik
          }(Hk))) return this.unsentPage = nk, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, KP.f), (0, YP.s)(Hk, "wasm", Kk)
      }
    }
    var cP = ik(39171);

    function TP(kk, ek, ik) {
      const Dk = new Map;
      return (0, cP.b)(((kk, ik, Dk) => ek.wP(kk, ik, Dk)), ((ek, ik, fk) => {
        const Sk = `${ek},${ik},${fk}`;
        return Dk.has(Sk) || Dk.set(Sk, (0, We.c)(kk, ek, ik, fk)), Dk.get(Sk)
      }), ik)
    }
    var oP = ik(39173),
      ZP = ik(40466);

    function OP(kk) {
      const ek = null !== kk && 0 !== (Uk.t.playerFlags(kk.api.apiView, 0) & Uk.yd.CursorAim);
      ek !== (0, ZP.m)() && (0, ZP.B)(ek, null !== kk)
    }

    function gP(kk) {
      return (0, YD.d)(LD.H, kk)
    }
    var GP = ik(40608);
    const NP = new Sk.d((kk => ik(42201)(`./${kk}/${kk}Client`)));
    let RP = null,
      JP = null;
    async function km(kk) {
      RP ??= ik.e(27).then((() => ik(38719))).then((kk => {
        JP = kk.createDefaultClientPlugins
      }), (kk => {
        throw RP = null, kk
      })), await Promise.all([NP.load(kk), RP])
    }

    function em(kk) {
      kk.load(new Ee(OD, new ND))
    }
    let im = !1;
    const Dm = new WeakMap;

    function fm(kk) {
      try {
        kk()
      } catch (ek) {
        console.error("[bloxd-wasm-client] a session-end step failed", ek)
      }
    }

    function Sm(kk, ek) {
      ! function() {
        var kk, ek;
        TD.Howler.volume();
        const ik = TD.Howler;
        null === (kk = ik._autoResume) || void 0 === kk || kk.call(ik), null === (ek = ik._autoSuspend) || void 0 === ek || ek.call(ik)
      }(), ek.audio.prepare();
      const ik = new Yk(ek.core, ek.memory, ek.audio);
      let Sk;
      try {
        Sk = new yf(ik, ek.options)
      } catch (xk) {
        return kk.crash(Lf.u, xk), null
      }(0, Pk.d)(Yf(ik, Sk));
      const Mk = new Vr({
        running: kk,
        api: ik,
        core: ek.core,
        memory: ek.memory,
        staleOr: ek.staleOr,
        reportFault: ek.reportReplayFault,
        options: ek.options,
        sessionInfo: ek.sessionInfo,
        replayShaderPack: ek.replayShaderPack
      });
      (0, bD.A)();
      const Kk = new aD({
        api: ik,
        tables: Sk,
        sessionInfo: ek.sessionInfo,
        gameFactory: kk => NP.loadedFactory(kk),
        defaultPlugins: (kk, ek, ik, Dk) => {
          if (null === JP) throw new Error("The default plugins started before they loaded");
          return JP(kk, ek, ik, Dk)
        },
        serverOptions: ek.options,
        onNetEvent: kk => {
          Mk.netEvent(kk), ek.onNetEvent(kk)
        },
        setLocalOptions: ek => {
          ur(kk, {
            changes: ek,
            reset: !1
          })
        },
        playSound: (kk, ik, Dk, fk, Sk, bk, rk) => ek.audio.playGame(kk, ik, Dk, fk, Sk, bk, rk),
        preloadSounds: kk => {
          ek.audio.preload(function(kk) {
            const ek = [];
            for (const ik of kk) {
              const kk = Qe(ik);
              kk >= 0 && ek.push(ye[kk])
            }
            return ek
          }(kk))
        },
        onSessionEnd: () => {
          fm(fk.n), fm(Sf), fm((() => {
            Dk.b.set({
              openInGameMenuName: null
            })
          })), fm((() => {
            ek.audio.endSession()
          }))
        },
        beforeWrite: ek.beforeWrite,
        beforeOp: ek.beforeOp,
        cameraScreen: ff,
        showCameraFacing: bf,
        onEventOverflow: ek.onEventOverflow,
        screenBandY: rk.k,
        replayEntities: Mk.entityHooks,
        hasPackModel: ek.hasPackModel
      });
      return Kk.attach(kk), Dm.set(Kk, Mk), BD(Kk.items, ek.audio),
        function(kk) {
          kk.setClientFreeCameraGrant("isDev", !1);
          const ek = ek => {
            kk.setClientFreeCameraGrant("hasDeveloperRank", ek.playerHasRank("developer"))
          };
          (0, bk.k)("userContextUpdated", ek)
        }(Kk), im || (im = !0, (0, bk.k)("appManagerUpdated|openInGameMenuName", (kk => {
          !kk && (0, mk.l)().includes(mk.c) && (0, mk.p)(mk.c)
        }))), Kk
    }

    function bm(kk) {
      try {
        kk.closeGame()
      } finally {
        var ek;
        null === (ek = Dm.get(kk)) || void 0 === ek || ek.stop(), Dm.delete(kk)
      }
    }
  },
  35843: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      f: () => mk,
      i: () => bk,
      j: () => Kk
    });
    var Dk = ik(35836),
      fk = ik(11);
    const Sk = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function bk(kk) {
      if (kk instanceof WebAssembly.RuntimeError) return !0;
      const ek = kk instanceof Error ? kk.stack : void 0;
      return "string" === typeof ek && Sk.test(ek)
    }

    function rk(kk, ek, ik) {
      var fk;
      const bk = kk instanceof Error ? kk.name : "thrown",
        rk = (kk instanceof Error && null !== (fk = kk.stack) && void 0 !== fk ? fk : "").split("\n").filter((kk => Sk.test(kk))).slice(0, 8).map((kk => kk.trim())),
        Pk = null === ek ? "wasm memory unknown" : `wasm memory ${Math.round(ek/2**20)} MB`,
        mk = null === ik.panic ? "" : `, panic: ${(0,Dk.g)(ik.panic)}`,
        Mk = `${bk}: ${kk instanceof Error?kk.message:String(kk)}`;
      return `${(0,Dk.l)(ik.kind,ik.refusedBytes)} ${Mk} (${Pk})${mk}${rk.length>0?` | ${rk.join(" < ")}`:""}`
    }
    const Pk = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function mk(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(kk instanceof Error) || !Pk.test(kk.message)) return {};
      if (!("detached" in ik)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, fk.Q)(null === (ek = (0, fk.J)(ik, "detached")) || void 0 === ek ? void 0 : ek.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Mk = 500;

    function Kk(kk) {
      let ek = "[object Object]";
      try {
        ek = String(kk)
      } catch {}
      if ("[object Object]" !== ek) return ek;
      try {
        var ik, Dk;
        return null !== (ik = null === (Dk = JSON.stringify(kk)) || void 0 === Dk ? void 0 : Dk.slice(0, Mk)) && void 0 !== ik ? ik : ek
      } catch {
        return ek
      }
    }
  },
  35836: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk,
      f: () => Sk,
      g: () => Pk,
      h: () => bk,
      l: () => fk
    });
    const Dk = /^alloc_failed (\d+) bytes$/;

    function fk(kk, ek) {
      return Sk(kk, ek) ? `trap=alloc_failed ${ek} bytes` : `trap=${kk}`
    }

    function Sk(kk, ek) {
      return "unreachable" === kk && ek > 0
    }

    function bk(kk, ek, ik) {
      const Dk = function(kk) {
        return kk instanceof WebAssembly.RuntimeError ? /unreachable/i.test(kk.message) ? "unreachable" : /out of bounds/i.test(kk.message) ? "out_of_bounds" : "runtime_error" : (kk instanceof RangeError || kk instanceof Error && "InternalError" === kk.name) && /call stack|recursion/i.test(kk.message) ? "stack_overflow" : "js_error"
      }(kk);
      if ("unreachable" !== Dk) return {
        kind: Dk,
        panic: null,
        refusedBytes: 0
      };
      const fk = ek(),
        Sk = ik();
      return {
        kind: Dk,
        panic: Sk > 0 ? null : fk,
        refusedBytes: Sk
      }
    }
    const rk = 300;

    function Pk(kk) {
      return kk.replace(/\s*\n\s*/g, " / ").slice(0, rk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);