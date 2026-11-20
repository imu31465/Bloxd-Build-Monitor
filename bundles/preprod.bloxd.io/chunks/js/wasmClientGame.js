export const id = 54;
export const ids = [54];
export const modules = {
  42363: (qq, Eq, gq) => {
    var Yq = {
      "./bedwars/bedwarsClient": [39206, 9],
      "./bridgeBattle/bridgeBattleClient": [39212, 10],
      "./buildAFactory2/buildAFactory2Client": [38469, 73, 72, 71, 220, 237, 11],
      "./classic/classicClient": [39221, 12],
      "./clutch/clutchClient": [39229, 13],
      "./containmentBreach/containmentBreachClient": [39232, 14],
      "./cooking/cookingClient": [39331, 15],
      "./defusal/defusalClient": [39340, 16],
      "./frontline/frontlineClient": [39349, 73, 72, 71, 17],
      "./goalRush/goalRushClient": [39353, 18],
      "./luckyBedwars/luckyBedwarsClient": [39359, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39364, 20],
      "./oneBlock/oneBlockClient": [39368, 21],
      "./plots/plotsClient": [39374, 236, 240, 22],
      "./pvpCiv/pvpCivClient": [39445, 23],
      "./skyIslands/skyIslandsClient": [39449, 24],
      "./skyblock/skyblockClient": [38492, 73, 220, 191, 25],
      "./tsunami/tsunamiClient": [39455, 26]
    };

    function lq(qq) {
      if (!gq.o(Yq, qq)) return Promise.resolve().then((() => {
        var Eq = new Error("Cannot find module '" + qq + "'");
        throw Eq.code = "MODULE_NOT_FOUND", Eq
      }));
      var Eq = Yq[qq],
        lq = Eq[0];
      return Promise.all(Eq.slice(1).map(gq.e)).then((() => gq(lq)))
    }
    lq.keys = () => Object.keys(Yq), lq.id = 42363, qq.exports = lq
  },
  38935: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      h: () => lq
    });
    var Yq = gq(31);

    function lq(qq) {
      return "refetchCode" === qq || "devDownloadJson" === qq || qq.startsWith("Plugin")
    }

    function Oq(qq, Eq) {
      "refetchCode" !== qq ? "Plugin|MobAiPlugin|ShowPetUi" !== qq ? Promise.all([gq.e(106), gq.e(107), gq.e(102), gq.e(104), gq.e(211)]).then((() => gq(41495))).then((gq => {
        let {
          runClientGameMessage: Yq
        } = gq;
        Yq(qq, Eq)
      })).catch((Eq => {
        console.error(`Game message ${qq} failed`, Eq)
      })) : Yq.i.TV("showPetUi", Eq) : Yq.i.TV("refetchCode")
    }
  },
  42344: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      i: () => lq
    });
    const Yq = ["recording", "freecam", "keyframe"];

    function lq() {
      const qq = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(qq[1]) << 32n | BigInt(qq[0])
    }
  },
  40523: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq
    });
    const Yq = 1 << 20,
      lq = 1 << 21,
      Oq = 1024,
      mq = 2048;

    function xq(qq, Eq, gq) {
      const xq = qq + Yq,
        Aq = Eq + Oq,
        cq = gq + Yq;
      return xq < 0 || xq >= lq || cq < 0 || cq >= lq || Aq < 0 || Aq >= mq ? -1 : (xq * lq + cq) * mq + Aq
    }
  },
  40515: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      h: () => mq,
      i: () => lq,
      k: () => Oq,
      l: () => uq,
      p: () => cq,
      s: () => Aq,
      v: () => xq
    });
    gq(3328);
    gq(40523);

    function Yq(qq) {}

    function lq(qq) {}

    function Oq(qq) {}

    function mq(qq) {}

    function xq(qq) {}

    function Aq(qq, Eq, gq) {}

    function cq(qq) {}

    function uq(qq) {}
  },
  9189: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      g: () => Aq
    });
    var Yq = gq(24);
    const lq = 24,
      Oq = "farNametags",
      mq = 1e5;

    function xq() {
      var qq;
      return null === (qq = Yq.b.get("showDistantNametags")) || void 0 === qq || qq
    }

    function Aq() {
      var qq;
      return null !== (qq = function() {
        const qq = new URLSearchParams(window.location.search).get(Oq),
          Eq = null === qq || "" === qq ? NaN : Number(qq);
        return Number.isFinite(Eq) && Eq >= 0 ? Math.min(Eq, mq) : null
      }()) && void 0 !== qq ? qq : xq() ? 0 : lq
    }
  },
  42335: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      blockIdOf: () => SA.e,
      clearWasmCameraScreen: () => El,
      creativeItemIds: () => gY.creativeItemIds,
      decodeMapSettings: () => LA,
      drainTextRerasters: () => Tx.c,
      enchantmentPerksOf: () => gY.enchantmentPerksOf,
      endGameHost: () => IA,
      followCursorAim: () => GA,
      followMenuPrefs: () => Il,
      loadAudio: () => sA,
      loadClientGame: () => FA,
      loadTextIcons: () => Tx.e,
      rasterText: () => Mx.b,
      readBoardToEdit: () => zA,
      readDrawCensus: () => JA.f,
      setTextHost: () => Tx.j,
      setTextLocalPlayer: () => Tx.k,
      showInCreativeInvenOf: () => gY.showInCreativeInvenOf,
      startGameHost: () => CA,
      startShellAnalytics: () => fA,
      startSkyFeed: () => EA,
      textChanged: () => Tx.s,
      warmText: () => Mx.e,
      wasmCameraScreen: () => ql
    });
    gq(36549);
    var Yq = gq(24),
      lq = gq(36859),
      Oq = gq(39102),
      mq = gq(31),
      xq = gq(3265),
      Aq = gq(36851),
      cq = gq(1274),
      uq = gq(583),
      Bq = gq(38216),
      Wq = gq(4622),
      Nq = gq(40369),
      aq = gq(40318);
    const Vq = aq.Gb / 4,
      dq = aq.o.PlaySound,
      jq = aq.o.SoundReset,
      Hq = Wq.S.ReplayFailed,
      oq = Wq.S.RecorderEvent;
    class Pq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = qq, this.memory = Eq, this.audio = gq, this.serverIds = new Int32Array(256).fill(aq.gd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(aq.t.BYTES)), this.renderPtr = 0, this.WB = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new aq.X(qq, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.flq(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(qq, Eq) {
        const gq = this.eventView();
        return new Uint8Array(gq.buffer, gq.byteOffset + qq, Eq)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return aq.t.localId(this.apiView, 0)
      }
      localDeaths() {
        return aq.t.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const qq = this.apiView,
          Eq = aq.t.entRenderPtr(qq, 0),
          gq = aq.t.entVisPtr(qq, 0),
          Yq = aq.t.entCapacity(qq, 0);
        if (Eq !== this.renderPtr || gq !== this.visPtr || Yq !== this.WB || this.renderBuffer !== this.buffer) {
          this.renderPtr = Eq, this.visPtr = gq, this.WB = Yq, this.renderBuffer = this.buffer;
          const qq = this.memoryView(Float32Array, Eq, Yq * Vq, "the render array"),
            lq = this.memoryView(Uint8Array, gq, Yq, "the visibility array");
          this.renderCapacity = qq && lq ? Yq : 0, this.render = qq && lq ? qq : new Float32Array(0), this.vis = qq && lq ? lq : new Uint8Array(0)
        }
      }
      memoryView(qq, Eq, gq, Yq) {
        try {
          return (0, Nq.v)(qq, this.memory().buffer, Eq, gq, Yq)
        } catch (lq) {
          return this.keepCorruption(lq), null
        }
      }
      memoryData(qq, Eq, gq, Yq) {
        try {
          return (0, Nq.g)(this.memory().buffer, qq, Eq, gq, Yq)
        } catch (lq) {
          return this.keepCorruption(lq), null
        }
      }
      reportCorruption(qq) {
        this.keepCorruption(new Nq.d(qq))
      }
      keepCorruption(qq) {
        if (!(qq instanceof Nq.d)) throw qq;
        this.corruption ??= qq
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(qq, Eq, gq) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Yq,
          len: lq
        } = qq;
        this.eventsPtr = Yq, this.eventsLen = lq, this.eventsBuffer = null;
        const Oq = this.eventView();
        for (let cq = 0; cq < lq;) {
          const qq = Oq.getUint32(cq, !0),
            gq = 65535 & qq,
            Yq = qq >>> 16,
            lq = cq + Wq.P;
          if (gq === aq.o.EntitySpawned) {
            var mq;
            if (Yq !== aq.Mb.BYTES) throw vq(gq, cq, Yq);
            const qq = aq.Mb.serverId(Oq, lq);
            this.spawned(qq, aq.Mb.index(Oq, lq), aq.Mb.kind(Oq, lq)), null === (mq = Eq.entityAdded) || void 0 === mq || mq.call(Eq, qq)
          } else if ((gq === aq.o.ChunkSlot || gq === aq.o.EntityInfoChanged) && !(0, aq.me)(gq, Oq, lq, Yq, Eq)) throw vq(gq, cq, Yq);
          cq = lq + (0, Wq.Ce)(Yq)
        }
        try {
          var xq;
          null === (xq = Eq.afterPrescan) || void 0 === xq || xq.call(Eq), this.throwCorruption(), !gq() && this.dispatch(qq, Eq, gq) && (this.throwCorruption(), this.applyListener(), Eq.afterWalk(qq.kind)), this.throwCorruption()
        } catch (Aq) {
          throw Aq instanceof Nq.d && (this.corruption ??= Aq), Aq
        } finally {
          gq() || null !== this.corruption || this.applyDespawns(lq, Eq)
        }
      }
      applyDespawns(qq, Eq) {
        const gq = this.eventView();
        for (let lq = 0; lq < qq;) {
          const qq = gq.getUint32(lq, !0),
            Oq = lq + Wq.P;
          if ((65535 & qq) === aq.o.EntityDespawned && qq >>> 16 === aq.Mb.BYTES) {
            const qq = aq.Mb.serverId(gq, Oq);
            var Yq;
            if (this.despawned(qq, aq.Mb.index(gq, Oq))) null === (Yq = Eq.entityRemoved) || void 0 === Yq || Yq.call(Eq, qq)
          }
          lq = Oq + (0, Wq.Ce)(qq >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(qq, Eq, gq) {
        const {
          len: Yq,
          net: lq,
          netOffsets: Oq
        } = qq;
        let mq = this.eventView(),
          xq = 0;
        for (let yq = 0; yq < Yq;) {
          const qq = mq.getUint32(yq, !0),
            Yq = 65535 & qq,
            tq = qq >>> 16,
            hq = yq + Wq.P;
          let nq = !1;
          if (xq < lq.length && Oq[xq] === yq) Eq.netEvent(lq[xq]), xq++, nq = !0;
          else if (Yq === Wq.S.LocalPlayerBound) {
            var Aq;
            if (tq !== Wq.Eb) throw vq(Yq, yq, tq);
            null === (Aq = Eq.localPlayerBound) || void 0 === Aq || Aq.call(Eq, mq.getInt32(hq, !0)), nq = !0
          } else if (Yq === Wq.S.LocalHurt) {
            var cq;
            if (tq !== Wq.Ab) throw vq(Yq, yq, tq);
            null === (cq = Eq.localHurt) || void 0 === cq || cq.call(Eq, mq.getInt32(hq, !0), mq.getFloat32(hq + 4, !0), mq.getUint32(hq + 8, !0)), nq = !0
          } else if (Yq === Wq.S.AttackHit) {
            var uq;
            if (tq !== Wq.c) throw vq(Yq, yq, tq);
            const qq = mq.getFloat32(hq, !0),
              gq = mq.getFloat32(hq + 4, !0),
              lq = mq.getFloat32(hq + 8, !0),
              Oq = mq.getUint32(hq + 12, !0);
            null === (uq = Eq.attackHit) || void 0 === uq || uq.call(Eq, qq, gq, lq, 0 !== (Oq & Wq.g.Crit), 0 !== (Oq & Wq.g.HitSelf))
          } else if (Yq === Wq.S.PhysicsType) {
            var Bq;
            if (tq !== Wq.bc) throw vq(Yq, yq, tq);
            null === (Bq = Eq.physicsType) || void 0 === Bq || Bq.call(Eq, mq.getUint32(hq, !0), mq.getInt32(hq + 4, !0)), nq = !0
          } else if (Yq === Wq.S.VehicleEffect) {
            var Nq;
            const qq = rq(mq, hq, tq);
            if (null === qq) throw vq(Yq, yq, tq);
            null === (Nq = Eq.vehicleEffect) || void 0 === Nq || Nq.call(Eq, qq.op, qq.name, qq.icon, qq.level, qq.durationMs), nq = !0
          } else if (Yq === Wq.S.ZoomChanged) {
            var Vq;
            if (tq !== Wq.je) throw vq(Yq, yq, tq);
            null === (Vq = Eq.zoomChanged) || void 0 === Vq || Vq.call(Eq, mq.getFloat32(hq, !0), mq.getUint8(hq + 4)), nq = !0
          } else if (Yq === Wq.S.ZoomDisabled) {
            var Pq;
            if (0 !== tq) throw vq(Yq, yq, tq);
            null === (Pq = Eq.zoomDisabled) || void 0 === Pq || Pq.call(Eq), nq = !0
          } else if (Yq === Wq.S.GameCamera) {
            var Qq;
            null === (Qq = Eq.gameCamera) || void 0 === Qq || Qq.call(Eq, new Uint8Array(mq.buffer, mq.byteOffset + hq, tq).slice()), nq = !0
          } else if (Yq === aq.o.ChunkSlot || Yq === aq.o.EntityInfoChanged);
          else if (Yq >= dq && Yq <= jq) {
            if (this.audio && !this.audio.onAudioEvent(Yq, mq, hq, tq)) throw vq(Yq, yq, tq)
          } else if (Yq >= Hq && Yq <= oq) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Yq, mq, hq, tq)) throw vq(Yq, yq, tq);
              nq = !0
            }
          } else if (Yq >= aq.vd && Yq <= aq.xd && Yq !== Wq.S.EnvLighting) {
            if (!(0, aq.me)(Yq, mq, hq, tq, Eq)) throw vq(Yq, yq, tq);
            nq = !0
          }
          if (nq) {
            if (gq()) return !1;
            mq = this.eventView()
          }
          yq = hq + (0, Wq.Ce)(tq)
        }
        return !gq()
      }
      applyListener() {
        var qq;
        if (!this.audio) return;
        const Eq = aq.t.audioViewPtr(this.apiView, 0),
          gq = this.memory().buffer;
        let Yq = this.audioView;
        (null === (qq = Yq) || void 0 === qq ? void 0 : qq.buffer) === gq && Yq.byteOffset === Eq || (Yq = (0, Nq.g)(gq, Eq, aq.u.BYTES, 8, "the audio view"), this.audioView = Yq), Yq && this.audio.applyListener(Yq)
      }
      indexOf(qq) {
        return this.indexById.get("number" === typeof qq ? qq : +qq)
      }
      isLocal(qq) {
        return qq !== aq.gd && qq === aq.t.localId(this.apiView, 0)
      }
      Py(qq) {
        const Eq = [0, 0, 0];
        return this.readPosition("number" === typeof qq ? qq : +qq, Eq) ? Eq : null
      }
      readPosition(qq, Eq) {
        const gq = this.apiView;
        if (void 0 !== this.indexById.get(qq) && this.isLocal(qq)) {
          for (let qq = 0; qq < 3; qq++) Eq[qq] = aq.t.localPos(gq, 0, qq);
          return !0
        }
        return this.readDrawnPosition(qq, Eq)
      }
      readDrawnPosition(qq, Eq) {
        const gq = this.apiView,
          Yq = this.indexById.get(qq);
        if (void 0 === Yq || Yq >= this.renderCapacity) return Eq[0] = Eq[1] = Eq[2] = NaN, !1;
        const lq = Yq * Vq;
        for (let Oq = 0; Oq < 3; Oq++) Eq[Oq] = this.render[lq + Oq] + aq.t.origin(gq, 0, Oq);
        return !0
      }
      checkValid(qq) {
        return void 0 !== this.indexOf(qq)
      }
      isAlive(qq) {
        const Eq = this.indexOf(qq);
        if (void 0 === Eq) return null;
        if (this.ensureViews(), Eq >= this.renderCapacity) return null;
        const gq = this.vis[Eq];
        return 0 === gq ? null : 0 !== (gq & aq.le.Alive)
      }
      getEntityType(qq) {
        const Eq = this.indexOf(qq);
        return void 0 === Eq ? this.isLocal("number" === typeof qq ? qq : +qq) ? "Player" : null : yq(this.kinds[Eq])
      }
      spawned(qq, Eq, gq) {
        if (Eq >= 1048576) throw new Nq.d(`entity ${qq} spawned at index ${Eq}`);
        this.ensureIndex(Eq), this.serverIds[Eq] === qq && null !== this.idStr[Eq] || (this.idStr[Eq] = String(qq)), this.serverIds[Eq] = qq, this.kinds[Eq] = gq, this.indexById.set(qq, Eq)
      }
      despawned(qq, Eq) {
        let gq = !1;
        return this.indexById.get(qq) === Eq && (this.indexById.delete(qq), gq = !0), Eq < this.serverIds.length && this.serverIds[Eq] === qq && (this.serverIds[Eq] = aq.gd, this.kinds[Eq] = 0, this.idStr[Eq] = null), gq
      }
      ensureIndex(qq) {
        const Eq = this.serverIds.length;
        if (qq < Eq) return;
        let gq = 2 * Eq;
        for (; gq <= qq;) gq *= 2;
        const Yq = new Int32Array(gq).fill(aq.gd);
        Yq.set(this.serverIds), this.serverIds = Yq;
        const lq = new Uint16Array(gq);
        lq.set(this.kinds), this.kinds = lq;
        for (let Oq = Eq; Oq < gq; Oq++) this.idStr.push(null)
      }
      eventView() {
        const qq = this.memory().buffer;
        return qq !== this.eventsBuffer && (this.eventsBuffer = qq, this.events = new DataView(qq, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const qq = this.memory().buffer;
        this.buffer = qq, this.viewPtr < 0 && (this.viewPtr = this.core.Mlq()), this.view = new DataView(qq, this.viewPtr, aq.t.BYTES), this.rereadDirectory()
      }
    }

    function Qq(qq) {
      return qq >>> aq.b === aq.q.Item
    }

    function yq(qq) {
      var Eq, gq;
      const Yq = qq & aq.c;
      switch (qq >>> aq.b) {
        case aq.q.Lifeform:
          return null !== (Eq = uq.m[Yq]) && void 0 !== Eq ? Eq : null;
        case aq.q.Throwable:
          return null !== (gq = Bq.i[Yq]) && void 0 !== gq ? gq : null;
        case aq.q.Mesh:
          return "Mesh";
        case aq.q.Audio:
          return "AudioEntity";
        case aq.q.Item:
          return "Item";
        default:
          return null
      }
    }
    const tq = new TextDecoder;

    function rq(qq, Eq, gq) {
      if (gq < Wq.Kd.HEAD_BYTES) return null;
      const Yq = qq.getUint32(Eq, !0),
        lq = qq.getUint32(Eq + 20, !0),
        Oq = qq.getUint32(Eq + 24, !0),
        mq = Wq.Kd.HEAD_BYTES + (0, Wq.Ce)(lq);
      if (Yq !== Wq.Kd.UPDATE && Yq !== Wq.Kd.REMOVE || lq > gq || mq + Oq > gq) return null;
      const xq = (gq, Yq) => tq.decode(new Uint8Array(qq.buffer, qq.byteOffset + Eq + gq, Yq)),
        Aq = qq.getFloat64(Eq + 12, !0);
      return {
        op: Yq,
        level: qq.getFloat64(Eq + 4, !0),
        durationMs: Number.isNaN(Aq) ? null : Aq,
        name: xq(Wq.Kd.HEAD_BYTES, lq),
        icon: xq(mq, Oq)
      }
    }

    function vq(qq, Eq, gq) {
      return new Nq.d(`event ${qq} at ${Eq} of ${gq} bytes`)
    }
    var hq = gq(307),
      nq = gq(1214),
      bq = gq(38935),
      iq = gq(1921),
      Zq = gq(40428),
      fq = gq(1870),
      Mq = gq(39118),
      Tq = gq(39147),
      zq = gq(39129),
      Sq = gq(40353),
      pq = gq(2364),
      Gq = gq(39115),
      Lq = gq(39141);
    const Jq = Math.max(aq.wb.BYTES, aq.ob.BYTES, aq.sb.BYTES);

    function kq(qq) {
      if (!(0, Lq.c)(qq)) return null;
      const Eq = Number(qq);
      return (0 | Eq) === Eq ? Eq : null
    }
    class Rq {
      constructor(qq) {
        this.api = qq, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Gq.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.xq = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = aq.gd, this.localName = String(aq.gd), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.xq = null;
        const qq = this.api.queries.directorView() >= aq.wb.BYTES ? this.scratchView() : null;
        null !== qq && (this.defaultFov = (0, fq.D)(aq.wb.fov(qq, 0)), this.baseFov = (0, fq.D)(aq.wb.baseFov(qq, 0)), this.aspect = aq.wb.aspect(qq, 0), this.bodyHeading = aq.wb.bodyHeading(qq, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(qq) {
        this.viewHeading = qq
      }
      get localPlayerId() {
        const qq = aq.t.localId(this.api.apiView, 0);
        return qq !== this.localId && (this.localId = qq, this.localName = String(qq)), this.localName
      }
      getEntityPosition(qq) {
        return this.readEntity(qq) ? this.entityFeet : null
      }
      getEntityAimPoint(qq) {
        return this.readEntity(qq) ? this.entityAim : null
      }
      getEntityHeading(qq) {
        const Eq = kq(qq);
        if (null === Eq) return null;
        const gq = aq.t.localId(this.api.apiView, 0);
        return Eq === gq && gq !== aq.gd ? this.viewHeading : this.readEntity(qq) ? this.entityHeading : null
      }
      raycastTerrain(qq, Eq, gq) {
        const Yq = this.api.queries.cameraSweep(qq[0], qq[1], qq[2], Eq[0], Eq[1], Eq[2], gq);
        return Yq < gq - 1e-6 ? Yq : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const qq = this.defaultPose;
        qq.fov = this.defaultFov;
        const Eq = this.api.queries.directorDefaultPose() >= aq.ob.BYTES ? this.scratchView() : null;
        if (null === Eq) return qq;
        for (let gq = 0; gq < 3; gq++) qq.position[gq] = aq.ob.eye(Eq, 0, gq);
        return qq.heading = aq.ob.heading(Eq, 0), qq.pitch = aq.ob.pitch(Eq, 0), qq
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
      readEntity(qq) {
        const Eq = kq(qq);
        if (null === Eq) return !1;
        if (Eq === this.xq) return this.entityLive;
        this.xq = Eq;
        const gq = this.api.queries.directorEntity(Eq) >= aq.sb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== gq, null === gq) return !1;
        for (let Yq = 0; Yq < 3; Yq++) this.entityFeet[Yq] = aq.sb.feet(gq, 0, Yq), this.entityAim[Yq] = this.entityFeet[Yq];
        return this.entityAim[1] += aq.sb.eyeHeight(gq, 0), this.entityHeading = aq.sb.heading(gq, 0), !0
      }
      scratchView() {
        const qq = this.api.scratch(),
          Eq = this.api.memory().buffer,
          gq = this.scratch;
        return null !== gq && gq.buffer === Eq && gq.byteOffset === qq ? gq : (this.scratch = this.api.memoryData(qq, Jq, 8, "the director's record"), this.scratch)
      }
    }
    const Uq = {
        mode: "default"
      },
      Fq = {
        show: () => {},
        clear: () => {}
      };

    function sq() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Xq {
      constructor(qq) {
        this.options = qq, this.kB = void 0, this.director = void 0, this.latest = Uq, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          VJ: 0,
          dJ: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.bu = new Int32Array(3 * aq.Wd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * aq.Wd), this.kB = new Rq(qq.api), this.director = new zq.b(this.kB)
      }
      settingsChanged(qq) {
        let Eq = Uq;
        if (qq.length > 0) try {
          Eq = (0, Sq.e)(qq)
        } catch {}
        this.latest = Eq, this.pending = Eq
      }
      call(qq, Eq, gq, Yq, lq, Oq) {
        var mq, xq;
        let Aq;
        this.holding = !1;
        try {
          Aq = this.answer(qq, Eq, gq, Yq, lq, Oq)
        } catch (Wq) {
          var cq, uq;
          throw this.answeredPose = !1, null === (cq = (uq = this.options).showFacing) || void 0 === cq || cq.call(uq, null), Wq
        }
        const Bq = this.answeredPose && 0 === (Yq & aq.tb.Held);
        return this.answeredPose = Aq !== aq.nb.None, this.holding = this.answeredPose && !Bq, null === (mq = (xq = this.options).showFacing) || void 0 === mq || mq.call(xq, this.holding ? this.facing : null), Aq
      }
      holdsView() {
        return this.holding
      }
      answer(qq, Eq, gq, Yq, lq, Oq) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          kB: mq
        } = this;
        mq.readView();
        if (0 !== (Yq & aq.tb.Held) || mq.setViewHeading((0, Mq.v)(mq.bodyHeading)), void 0 !== this.pending) {
          const qq = this.pending;
          this.pending = void 0, this.director.setSettings(qq), this.syncShownSettings()
        }
        this.readLook((0, pq.e)(Eq), (0, pq.e)(gq), Yq, (0, pq.e)(lq), (0, pq.e)(Oq));
        const xq = this.director.update(qq / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !xq) return aq.nb.None;
        const [Aq, cq, uq] = xq.position;
        if (0 === this.options.api.queries.directorPose(Aq, cq, uq, (0, Mq.v)(xq.heading), (0, Mq.k)(xq.pitch), (0, fq.j)(xq.fov))) return aq.nb.None;
        if ("default" === this.director.getSettings().mode) return aq.nb.Pose;
        switch (this.facing) {
          case "camera":
            return aq.nb.FaceCamera;
          case "cursor":
            return aq.nb.FaceCursor;
          default:
            return aq.nb.FaceMovement
        }
      }
      afterFrame(qq) {
        qq ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = Uq, this.idle()
      }
      restart() {
        const qq = this.holding;
        this.idle(), this.holding = qq
      }
      idle() {
        var qq, Eq;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new zq.b(this.kB), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (qq = (Eq = this.options).showFacing) || void 0 === qq || qq.call(Eq, null), this.setCentres(0)
      }
      syncShownSettings() {
        const qq = this.director.getSettings();
        if (qq === this.shownSettings) return;
        this.shownSettings = qq;
        const Eq = (0, Tq.f)(qq);
        this.facing = Eq.facing, this.mouseTurns = Eq.mouseTurns
      }
      readLook(qq, Eq, gq, Yq, lq) {
        const Oq = this.look,
          mq = 0 !== (gq & aq.tb.LookPointed);
        if (null === this.mouseTurns && !mq) return Oq.VJ = 0, Oq.dJ = 0, void(Oq.pointedAt = void 0);
        let xq;
        mq && (this.pointedAt.heading = Yq, this.pointedAt.pitch = lq, xq = this.pointedAt);
        const {
          kB: Aq
        } = this;
        Aq.setViewHeading((0, Tq.c)(Aq.getViewHeading(), qq, Eq, xq, "look" === this.mouseTurns, Oq))
      }
      writeCentres(qq) {
        const Eq = this.next,
          gq = Math.min(qq.length, aq.Wd);
        for (let Yq = 0; Yq < gq; Yq++)
          for (let gq = 0; gq < 3; gq++) Eq[3 * Yq + gq] = Math.floor(qq[Yq][gq] / aq.B);
        this.setCentres(gq)
      }
      setCentres(qq) {
        const {
          bu: Eq,
          next: gq
        } = this;
        let Yq = qq === this.centresLen;
        for (let lq = 0; Yq && lq < 3 * qq; lq++) Yq = Eq[lq] === gq[lq];
        Yq || (Eq.fill(0), Eq.set(gq.subarray(0, 3 * qq)), this.centresLen = qq, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const qq = this.options.cmd();
        null !== qq && (0, aq.Hf)(qq, 0, this.bu, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var qq, Eq, gq;
        return null !== (qq = null === (Eq = (gq = this.options).screen) || void 0 === Eq ? void 0 : Eq.call(gq)) && void 0 !== qq ? qq : Fq
      }
      hidden() {
        var qq;
        return (null !== (qq = this.options.isPageHidden) && void 0 !== qq ? qq : sq)()
      }
      now() {
        var qq, Eq, gq;
        return null !== (qq = null === (Eq = (gq = this.options).now) || void 0 === Eq ? void 0 : Eq.call(gq)) && void 0 !== qq ? qq : performance.now()
      }
    }
    var wq = gq(40523);
    const Kq = aq.B * aq.B * aq.B,
      Cq = Math.log2(aq.B),
      Iq = aq.B - 1,
      eq = aq.R.BYTES / 4,
      Dq = new Uint16Array(Kq);

    function qE(qq, Eq, gq) {
      return qq * aq.B * aq.B + Eq * aq.B + gq
    }
    class EE {
      constructor(qq) {
        this.chunk = qq
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(qq, Eq, gq) {
        return qE(qq, Eq, gq)
      }
    }
    class gE {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class YE {
      constructor(qq, Eq, gq, Yq) {
        this.table = qq, this.slot = Eq, this.generation = gq, this.epoch = Yq, this.dW = new EE(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Dq, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get ba() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get NN() {
        const qq = this.gameVoxels(),
          Eq = this.layers ??= new Uint16Array(aq.B);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let gq = 0; 0 !== this.staleLayers; gq++) {
          const Yq = 1 << gq;
          0 !== (this.staleLayers & Yq) && (this.staleLayers &= ~Yq, Eq[gq] = lE(qq, gq))
        }
        return Eq
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const qq = this.voxelData(),
          Eq = this.writes;
        if (null === Eq || 0 === Eq.ids.size) return qq;
        if (Eq.from !== qq) {
          const gq = Eq.patched ??= new Uint16Array(Kq);
          gq.set(qq);
          for (const [qq, Yq] of Eq.ids) gq[qq] = Yq;
          Eq.from = qq
        }
        return Eq.patched
      }
      written(qq) {
        var Eq;
        return null === (Eq = this.writes) || void 0 === Eq ? void 0 : Eq.ids.get(qq)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(qq, Eq, gq) {
        const Yq = this.writes ??= new gE;
        Yq.ids.set(qq, Eq), gq && Yq.cleared.add(qq), null !== Yq.from && (Yq.patched[qq] = Eq);
        const lq = 1 << (qq >> Cq & Iq);
        Yq.layers |= lq, this.staleLayers |= lq, this.writeCount++
      }
      clearWrites() {
        const qq = this.writes;
        null !== qq && (this.staleLayers |= qq.layers, qq.ids.clear(), qq.cleared.clear(), qq.layers = 0, qq.from = null)
      }
      dataCleared(qq) {
        var Eq;
        return !0 === (null === (Eq = this.writes) || void 0 === Eq ? void 0 : Eq.cleared.has(qq))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const qq = this.table.slotWords(),
          Eq = this.slot * eq;
        if (this.epoch !== this.table.epoch || Eq + eq > qq.length || 0 === qq[Eq + 3] || qq[Eq + 2] !== this.generation) return this.data = Dq, this.dataPtr = 0, Dq;
        this.version = qq[Eq + 1];
        const gq = qq[Eq + 0],
          Yq = qq.buffer;
        return gq === this.dataPtr && Yq === this.dataBuffer || (this.dataPtr = gq, this.dataBuffer = Yq, this.data = this.table.voxelsAt(Yq, gq)), this.data
      }
    }

    function lE(qq, Eq) {
      const gq = qq[Eq * aq.B];
      for (let Yq = 0; Yq < aq.B; Yq++) {
        const lq = qE(Yq, Eq, 0);
        for (let Eq = 0; Eq < aq.B; Eq++)
          if (qq[lq + Eq] !== gq) return 65535
      }
      return gq
    }
    const OE = new Uint32Array(0);

    function mE(qq, Eq, gq) {
      return qE(qq & Iq, Eq & Iq, gq & Iq)
    }
    class xE {
      constructor(qq, Eq) {
        this.memory = qq, this.apiView = Eq, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = OE, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = OE, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(qq, Eq, gq, Yq, lq, Oq) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Oq === aq.T.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Oq !== aq.T.Stored && Oq !== aq.T.Unloaded) throw new Nq.d(`ChunkSlot flags ${Oq}`);
        const mq = (0, wq.d)(qq, Eq, gq);
        if (mq < 0) return;
        if (Oq === aq.T.Unloaded) return void this.chunks.delete(mq);
        const xq = this.chunks.get(mq);
        (null === xq || void 0 === xq ? void 0 : xq.slot) === Yq && xq.generation === lq || this.chunks.set(mq, new YE(this, Yq, lq, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const qq = this.apiView(),
          Eq = aq.t.chunkSlotsPtr(qq, 0),
          gq = aq.t.chunkSlotsLen(qq, 0);
        Eq === this.slotsPtr && gq === this.slotsLen || (this.slotsPtr = Eq, this.slotsLen = gq, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const qq = this.apiView(),
          Eq = aq.t.walkThroughPtr(qq, 0),
          gq = aq.t.walkThroughLen(qq, 0);
        Eq === this.walkPtr && gq === this.walkLen || (this.walkPtr = Eq, this.walkLen = gq, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const qq of this.written) qq.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const qq = this.memory().buffer;
        var Eq;
        qq !== this.slotsBuffer && (this.slotsBuffer = qq, this.slots = null !== (Eq = (0, Nq.v)(Uint32Array, qq, this.slotsPtr, this.slotsLen * eq, "the chunk directory")) && void 0 !== Eq ? Eq : OE);
        return this.slots
      }
      voxelsAt(qq, Eq) {
        try {
          var gq;
          return null !== (gq = (0, Nq.v)(Uint16Array, qq, Eq, Kq, "a chunk's voxels")) && void 0 !== gq ? gq : Dq
        } catch (Yq) {
          if (!(Yq instanceof Nq.d)) throw Yq;
          return this.corruption ??= Yq, Dq
        }
      }
      chunk(qq, Eq, gq) {
        var Yq;
        return null !== (Yq = this.chunks.get((0, wq.d)(qq, Eq, gq))) && void 0 !== Yq ? Yq : null
      }
      isLoaded(qq, Eq, gq) {
        return void 0 !== this.chunkAt(Math.floor(qq), Math.floor(Eq), Math.floor(gq))
      }
      lc(qq, Eq, gq) {
        var Yq;
        const lq = Math.floor(qq),
          Oq = Math.floor(Eq),
          mq = Math.floor(gq),
          xq = this.chunkAt(lq, Oq, mq);
        if (!xq) return 0;
        const Aq = mE(lq, Oq, mq);
        return null !== (Yq = xq.written(Aq)) && void 0 !== Yq ? Yq : xq.voxelData()[Aq]
      }
      setOverlay(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Oq = this.chunkAt(qq, Eq, gq);
        return !!Oq && (Oq.hasWrites() || this.written.push(Oq), Oq.write(mE(qq, Eq, gq), Yq, lq), !0)
      }
      version(qq, Eq, gq) {
        var Yq, lq;
        return null !== (Yq = null === (lq = this.chunks.get((0, wq.d)(qq, Eq, gq))) || void 0 === lq ? void 0 : lq.ba) && void 0 !== Yq ? Yq : null
      }
      scan(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        const Aq = aq.B;
        let cq = 0;
        for (let uq = Math.floor(Eq / Aq); uq * Aq < lq; uq++) {
          const Bq = uq * Aq,
            Wq = Math.min(lq - Bq, Aq);
          for (let lq = Math.floor(qq / Aq); lq * Aq < Yq; lq++) {
            const Nq = lq * Aq,
              aq = Math.min(Yq - Nq, Aq);
            for (let Yq = Math.floor(gq / Aq); Yq * Aq < Oq; Yq++) {
              const Vq = this.chunks.get((0, wq.d)(lq, uq, Yq));
              if (!Vq) continue;
              const dq = Yq * Aq,
                jq = Math.max(gq - dq, 0),
                Hq = Math.min(Oq - dq, Aq),
                oq = Vq.NN,
                Pq = Vq.gameVoxels();
              for (let gq = Math.max(Eq - Bq, 0); gq < Wq; gq++) {
                const Eq = oq[gq];
                if (65535 === Eq || 0 !== mq[Eq]) {
                  cq++;
                  for (let Eq = Math.max(qq - Nq, 0); Eq < aq; Eq++) {
                    const qq = qE(Eq, gq, 0);
                    for (let Yq = jq; Yq < Hq; Yq++) {
                      const lq = Pq[qq + Yq];
                      0 !== mq[lq] && xq.push(Nq + Eq, Bq + gq, dq + Yq, lq)
                    }
                  }
                }
              }
            }
          }
        }
        return cq
      }
      dataCleared(qq, Eq, gq) {
        var Yq;
        const lq = Math.floor(qq),
          Oq = Math.floor(Eq),
          mq = Math.floor(gq);
        return !0 === (null === (Yq = this.chunkAt(lq, Oq, mq)) || void 0 === Yq ? void 0 : Yq.dataCleared(mE(lq, Oq, mq)))
      }
      isWalkThrough(qq) {
        if (!Number.isInteger(qq) || qq < 0 || qq > 65535) return !1;
        const Eq = this.walkWords(),
          gq = qq >>> 5;
        return gq < Eq.length && 1 === (Eq[gq] >>> (31 & qq) & 1)
      }
      walkWords() {
        const qq = this.memory().buffer;
        var Eq;
        qq !== this.walkBuffer && (this.walkBuffer = qq, this.walk = null !== (Eq = (0, Nq.v)(Uint32Array, qq, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Eq ? Eq : OE);
        return this.walk
      }
      chunkAt(qq, Eq, gq) {
        if ((0 | qq) !== qq || (0 | Eq) !== Eq || (0 | gq) !== gq) return;
        const Yq = (0, wq.d)(qq >> Cq, Eq >> Cq, gq >> Cq);
        return Yq !== this.lastKey && (this.lastKey = Yq, this.lastChunk = this.chunks.get(Yq)), this.lastChunk
      }
    }
    var AE = gq(38477),
      cE = gq(37796),
      uE = gq(36832),
      BE = gq(36674),
      WE = gq(9207),
      NE = gq(39077),
      aE = gq(190);
    const VE = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      dE = [
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
      jE = dE.map((qq => {
        let [Eq] = qq;
        return Eq
      })),
      HE = Uint8Array.from(dE, (qq => {
        let [, Eq] = qq;
        return Eq
      })),
      oE = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      PE = 8;
    var QE = gq(36802),
      yE = gq(36815),
      tE = gq(36813),
      rE = gq(248);
    class vE {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rE.e;
        this.sheet = qq, this.onError = Eq, this.idle = gq, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = qq => {
          this.cancelIdle = null;
          try {
            if (qq.timeRemaining() >= 1) {
              let qq = this.queue.shift();
              for (; void 0 !== qq && !this.load(qq);) qq = this.queue.shift()
            }
          } catch (Eq) {
            this.onError(Eq)
          } finally {
            this.schedule()
          }
        }
      }
      preload(qq) {
        const Eq = [...qq].sort(((qq, Eq) => qq - Eq));
        for (const gq of Eq) this.asked.has(gq) || (this.asked.add(gq), this.queue.push(gq));
        this.schedule()
      }
      cancel() {
        var qq;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (qq = this.cancelIdle) || void 0 === qq || qq.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(qq) {
        const Eq = this.sheet(qq, !1),
          gq = this.sheet(qq, !0),
          [Yq, lq] = "unloaded" === Eq.state() && "unloaded" !== gq.state() ? [gq, Eq] : [Eq, gq],
          Oq = this.gen,
          mq = () => {
            try {
              Oq === this.gen && "unloaded" === lq.state() && lq.load()
            } catch (qq) {
              this.onError(qq)
            }
          },
          xq = Yq.state();
        return "unloaded" === xq ? (Yq.once("load", mq), Yq.load(), !0) : "unloaded" === lq.state() && ("loading" === xq ? (Yq.once("load", mq), !1) : (lq.load(), !0))
      }
    }
    var hE = gq(40650);
    const nE = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      bE = aE.c.UH * aE.c.playerEyeToHeightRatio,
      iE = [0, 0, -1, 0, 1, 0],
      ZE = VE.indexOf("note");

    function fE(qq) {
      return qq >= 0 ? Math.min(1, qq) : 0
    }

    function ME(qq) {
      var Eq;
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const Yq = function(qq) {
        let Eq = 0,
          gq = jE.length;
        for (; Eq < gq;) {
          const Yq = Eq + gq >>> 1;
          jE[Yq] < qq ? Eq = Yq + 1 : gq = Yq
        }
        return Eq
      }(qq);
      if ("" === qq || null === (Eq = jE[Yq]) || void 0 === Eq || !Eq.startsWith(qq)) return -1;
      if (jE[Yq] === qq) return Yq;
      let lq = Yq + 1;
      for (; lq < jE.length && jE[lq].startsWith(qq);) lq++;
      return Yq + Math.floor(gq() * (lq - Yq))
    }
    class TE {
      constructor(qq, Eq, gq, Yq, lq) {
        this.group = qq, this.loudness = Eq, this.startMs = gq, this.howl = Yq, this.host = lq, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const qq = this.host.alive(this.id);
        return qq ? 1e3 * this.howl.duration(this.id) / qq.rate : 0
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
    class zE {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = qq, this.listener = Eq, this.now = gq, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(VE.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new tE.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: qq => this.aliveVoice(qq),
          started: qq => this.started.has(qq),
          drop: qq => {
            var Eq;
            null === (Eq = this.live.get(qq)) || void 0 === Eq || Eq.howl.stop(qq), this.forget(qq)
          }
        }, this.handlers = {
          playSound: (qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) => {
            if (Yq >= jE.length) return;
            const cq = 0 !== (lq & aq.ge.Loop);
            lq & aq.ge.TwoD ? this.start(Yq, !1, mq, Oq, xq, cq) : this.startSpatial(Yq, mq, Oq, xq, cq, qq, Eq, gq, Aq, this.earDistSq(qq, Eq, gq))
          },
          soundPos: (qq, Eq, gq, Yq) => {
            const lq = this.core.get(Yq);
            var Oq;
            void 0 !== lq && (null === (Oq = this.live.get(lq)) || void 0 === Oq || Oq.howl.pos(gq, Eq, qq, lq))
          },
          soundSet: (qq, Eq, gq, Yq) => {
            const lq = this.core.get(qq),
              Oq = void 0 === lq ? void 0 : this.live.get(lq);
            void 0 !== lq && Oq && (this.setRel(lq, Eq), Oq.rate = gq, Oq.howl.rate(gq, lq), Oq.spatial && Oq.howl.pannerAttr({
              refDistance: Yq
            }, lq))
          },
          soundFade: (qq, Eq, gq, Yq) => {
            const lq = this.core.get(qq);
            void 0 !== lq && this.fade(lq, Eq, gq, 0 !== (Yq & aq.fe.StopAfter))
          },
          soundStop: qq => {
            const Eq = this.core.get(qq);
            var gq;
            void 0 !== Eq && (null === (gq = this.live.get(Eq)) || void 0 === gq || gq.howl.stop(Eq), this.forget(Eq))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new vE(((qq, Eq) => this.sheet(qq, Eq)), (qq => {
          this.errors++, console.error("Audio preload failed", qq)
        }), Yq)
      }
      prepare() {
        for (let qq = 0; qq < VE.length; qq++) this.prepareSheet(qq)
      }
      prepareSheet(qq) {
        this.sheet(qq, !1), this.sheet(qq, !0)
      }
      preload(qq) {
        this.loader.preload(qq)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let qq = 0; qq < VE.length; qq++) {
          if (yE.e.has(VE[qq])) continue;
          const Eq = [];
          for (const Yq of [!1, !0]) {
            const gq = SE(qq, Yq),
              lq = this.sheets.get(gq);
            void 0 !== lq && "loading" !== lq.state() && Eq.push({
              key: gq,
              howl: lq
            })
          }
          if (!Eq.some((qq => {
              let {
                howl: Eq
              } = qq;
              return "loaded" === Eq.state()
            }))) continue;
          this.unloading[qq] += Eq.length;
          const gq = () => {
            this.unloading[qq]--, 0 === this.unloading[qq] && this.prepareSheet(qq)
          };
          for (const {
              key: qq,
              howl: Yq
            }
            of Eq) this.sheets.delete(qq), "loaded" === Yq.state() ? (0, QE.d)(Yq, gq) : (Yq.unload(), gq())
        }
      }
      onAudioEvent(qq, Eq, gq, Yq) {
        if (qq < aq.o.PlaySound || qq > aq.o.SoundReset) return !1;
        try {
          return (0, aq.me)(qq, Eq, gq, Yq, this.handlers)
        } catch (lq) {
          return this.errors++, console.error("Audio event failed", lq), !0
        }
      }
      applyListener(qq) {
        const Eq = this.nextPose;
        for (let Yq = 0; Yq < 3; Yq++) Eq[2 - Yq] = aq.u.listener(qq, 0, Yq), Eq[5 - Yq] = aq.u.forward(qq, 0, Yq), Eq[8 - Yq] = aq.u.up(qq, 0, Yq);
        0 === Eq[3] && 0 === Eq[4] && 0 === Eq[5] && Eq.set(this.posed ? this.pose.subarray(3) : iE, 3);
        for (let Yq = 0; Yq < 9; Yq++)
          if (!Number.isFinite(Eq[Yq])) return;
        const gq = this.pose;
        if (this.posed) {
          let qq = !0;
          for (let Yq = 0; Yq < 9 && qq; Yq++) qq = Eq[Yq] === gq[Yq];
          if (qq) return
        }
        this.listener.apply(Eq) && (gq.set(Eq), this.posed = !0)
      }
      playGame(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = ME(qq);
        if (xq < 0) return hE.e;
        if (!gq) {
          const {
            howl: qq,
            id: gq
          } = this.start(xq, !1, Eq, 0, 1, mq);
          return this.gameSound(qq, gq, !1)
        }
        const Aq = gq[0],
          cq = gq[1] + bE,
          uq = gq[2];
        if (!Number.isFinite(Aq) || !Number.isFinite(cq) || !Number.isFinite(uq)) return hE.e;
        let Bq;
        if (Yq) {
          const qq = Aq - Yq[0],
            Eq = cq - Yq[1],
            gq = uq - Yq[2];
          if (Bq = qq * qq + Eq * Eq + gq * gq, Bq > lq * lq) return hE.e
        } else Bq = this.earDistSq(Aq, cq, uq);
        const Wq = this.startSpatial(xq, Eq, 0, 1, mq, Aq, cq, uq, Oq, Bq);
        return Wq ? this.gameSound(Wq.howl, Wq.id, !0) : hE.e
      }
      setMaster(qq, Eq) {
        this.level = fE(qq);
        const gq = Eq ? this.level : 0;
        if (gq !== this.master) {
          this.master = gq;
          for (const [qq, Eq] of this.live) Eq.fadeMs = 0, Eq.gain = Eq.rel * this.master, Eq.howl.volume(Eq.gain, qq)
        }
      }
      stopCore() {
        for (const Eq of [...this.core.values()]) {
          var qq;
          null === (qq = this.live.get(Eq)) || void 0 === qq || qq.howl.stop(Eq)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [qq, Eq] of [...this.live]) Eq.howl.stop(qq), this.forget(qq);
        this.core.clear()
      }
      gameSound(qq, Eq, gq) {
        const Yq = {
          stop: () => (this.live.has(Eq) && qq.stop(Eq), Yq),
          fade: (qq, gq, lq) => {
            var Oq, mq;
            const xq = this.level > 0 ? gq / this.level : gq > 0 && null !== (Oq = null === (mq = this.live.get(Eq)) || void 0 === mq ? void 0 : mq.rel) && void 0 !== Oq ? Oq : 0;
            return this.fade(Eq, xq, lq, !1), Yq
          },
          rate: gq => {
            const lq = this.live.get(Eq);
            return lq && (lq.rate = function(qq) {
              return qq > 0 && qq < 1 / 0 ? qq : 1
            }(gq), qq.rate(lq.rate, Eq)), Yq
          },
          getVolume: () => {
            var qq, gq;
            return (null !== (qq = null === (gq = this.live.get(Eq)) || void 0 === gq ? void 0 : gq.rel) && void 0 !== qq ? qq : 0) * this.level
          },
          getRelativeVolume: () => {
            var qq, gq;
            return null !== (qq = null === (gq = this.live.get(Eq)) || void 0 === gq ? void 0 : gq.rel) && void 0 !== qq ? qq : 0
          },
          setRelativeVolume: qq => (this.setRel(Eq, qq), Yq),
          setPannerAttr: lq => {
            if (gq && this.live.has(Eq)) {
              const gq = {
                ...nE,
                refDistance: uE.f
              };
              for (const [qq, Eq] of Object.entries(lq)) "number" !== typeof Eq && "string" !== typeof Eq || (gq[qq] = Eq);
              qq.pannerAttr({
                coneOuterAngle: gq.coneOuterAngle
              }, Eq), qq.pannerAttr(gq, Eq)
            }
            return Yq
          },
          setPosition: lq => (gq && this.live.has(Eq) && Number.isFinite(lq[0] + lq[1] + lq[2]) && qq.pos(lq[2], lq[1], lq[0], Eq), Yq)
        };
        return Yq
      }
      startSpatial(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        const uq = this.sheet(HE[qq], !0);
        let Bq = null;
        if (!lq) {
          if (this.failed.has(uq)) return null;
          const gq = HE[qq] === ZE ? null : (0, tE.g)(jE[qq]),
            Yq = (0, tE.f)(fE(Eq), Math.sqrt(cq), Aq);
          if (Bq = new TE(gq, Yq, this.now(), uq, this.voiceHost), !this.voices.admit(Bq)) return null
        }
        const Wq = this.start(qq, !0, Eq, gq, Yq, lq);
        return Bq && (Bq.id = Wq.id, Bq.direct = "loaded" === uq.state() && !uq._playLock), uq.pannerAttr({
          coneOuterAngle: 360
        }, Wq.id), uq.pannerAttr({
          ...nE,
          refDistance: Aq
        }, Wq.id), uq.pos(xq, mq, Oq, Wq.id), Wq
      }
      aliveVoice(qq) {
        const Eq = this.live.get(qq);
        if (!Eq) return;
        const gq = Eq.howl._soundById(qq);
        if (gq && !gq._ended) return Eq;
        this.forget(qq)
      }
      earDistSq(qq, Eq, gq) {
        if (!this.posed) return 0;
        const Yq = qq - this.pose[2],
          lq = Eq - this.pose[1],
          Oq = gq - this.pose[0];
        return Yq * Yq + lq * lq + Oq * Oq
      }
      start(qq, Eq, gq, Yq, lq, Oq) {
        const mq = fE(gq),
          xq = this.sheet(HE[qq], Eq);
        "unloaded" === xq.state() && xq.load();
        const Aq = xq.play(jE[qq]),
          cq = mq * this.master;
        return xq.volume(cq, Aq), this.live.set(Aq, {
          howl: xq,
          rel: mq,
          gain: cq,
          fadeFrom: cq,
          fadeAt: 0,
          fadeMs: 0,
          rate: lq,
          handle: Yq,
          spatial: Eq,
          stopTimer: void 0
        }), 0 !== Yq && this.core.set(Yq, Aq), 1 !== lq && xq.rate(lq, Aq), Oq && xq.loop(!0, Aq), {
          howl: xq,
          id: Aq
        }
      }
      sheet(qq, Eq) {
        const gq = SE(qq, Eq);
        let Yq = this.sheets.get(gq);
        if (!Yq) {
          const lq = this.createHowl(VE[qq], Eq);
          lq.on("end", (qq => {
            lq.loop(qq) || this.forget(qq)
          })), lq.on("stop", (qq => {
            this.forget(qq)
          })), lq.on("play", (qq => {
            this.live.has(qq) && this.started.add(qq)
          })), lq.on("loaderror", (qq => {
            if ("loaded" !== lq.state()) {
              this.failed.add(lq);
              for (const [qq, Eq] of this.live) Eq.howl === lq && this.forget(qq)
            } else "number" === typeof qq && this.forget(qq)
          })), this.sheets.set(gq, lq), Yq = lq
        }
        return Yq
      }
      setRel(qq, Eq) {
        const gq = this.live.get(qq);
        gq && (pE(gq), gq.fadeMs = 0, gq.rel = fE(Eq), gq.gain = gq.rel * this.master, gq.howl.volume(gq.gain, qq))
      }
      fade(qq, Eq, gq, Yq) {
        const lq = this.live.get(qq);
        if (!lq) return;
        pE(lq);
        const {
          howl: Oq
        } = lq, mq = this.gainNow(lq);
        lq.rel = fE(Eq), lq.gain = lq.rel * this.master;
        const xq = gq > 0 ? Math.min(gq, 65535) : 0,
          Aq = 0 === xq || mq === lq.gain;
        lq.fadeMs = Aq ? 0 : xq, Aq ? Oq.volume(lq.gain, qq) : (lq.fadeFrom = mq, lq.fadeAt = this.now(), Oq.fade(mq, lq.gain, xq, qq)), Yq && (Aq ? Oq.stop(qq) : lq.stopTimer = setTimeout((() => {
          lq.stopTimer = void 0, Oq.stop(qq)
        }), xq))
      }
      gainNow(qq) {
        if (qq.fadeMs > 0) {
          const Eq = (this.now() - qq.fadeAt) / qq.fadeMs;
          if (Eq < 1) return qq.fadeFrom + (qq.gain - qq.fadeFrom) * Math.max(0, Eq);
          qq.fadeMs = 0
        }
        return qq.gain
      }
      forget(qq) {
        this.started.delete(qq);
        const Eq = this.live.get(qq);
        Eq && (pE(Eq), this.live.delete(qq), 0 !== Eq.handle && this.core.get(Eq.handle) === qq && this.core.delete(Eq.handle))
      }
    }

    function SE(qq, Eq) {
      return 2 * qq + (Eq ? 1 : 0)
    }

    function pE(qq) {
      void 0 !== qq.stopTimer && (clearTimeout(qq.stopTimer), qq.stopTimer = void 0)
    }
    var GE = gq(40334),
      LE = gq(39080);
    class JE {
      constructor(qq, Eq, gq, Yq) {
        this.key = qq, this.model = Eq, this.host = Yq, this.WB = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.Llq = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.eN = !1, this.WB = Math.max(1, Math.ceil(gq)), this.records = new Float32Array(this.WB * AE.e), this.isDirty = new Uint8Array(this.WB), this.tail = new Uint8Array(this.WB * aq.tc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Yq.cmd())
      }
      setOrigin(qq, Eq, gq) {
        this.origin[0] = qq, this.origin[1] = Eq, this.origin[2] = gq
      }
      markDirty(qq) {
        !this.eN && qq >= 0 && qq < this.WB && qq < aq.tc.Max && this.Ha(qq, qq + 1)
      }
      commit(qq) {
        if (this.eN) return;
        (qq = Math.min(Math.max(Math.floor(qq), 0), this.WB, aq.tc.Max)) > this.count && this.Ha(this.count, qq), this.count = qq;
        const {
          origin: Eq,
          sentOrigin: gq,
          dirtyList: Yq
        } = this, lq = this.Llq !== qq, Oq = gq[0] !== Eq[0] || gq[1] !== Eq[1] || gq[2] !== Eq[2];
        if (0 === Yq.length && !lq && !Oq) return;
        const mq = this.host.cmd();
        if (!mq || !this.make(mq)) return;
        const xq = Yq.length,
          {
            records: Aq,
            tailView: cq
          } = this;
        for (let uq = 0; uq < xq; uq++) {
          const qq = Yq[uq],
            Eq = qq * AE.e,
            gq = uq * aq.tc.Bytes,
            lq = 0 !== Aq[Eq + AE.g] ? aq.tc.Hidden : 0;
          cq.setUint32(gq, (qq | lq) >>> 0, !0), cq.setFloat32(gq + 4, Aq[Eq], !0), cq.setFloat32(gq + 8, Aq[Eq + 1], !0), cq.setFloat32(gq + 12, Aq[Eq + 2], !0)
        }
        if ((0, aq.Oe)(mq, 0, this.key, qq, Eq, xq, this.tailOf(xq))) {
          for (let qq = 0; qq < xq; qq++) this.isDirty[Yq[qq]] = 0;
          Yq.length = 0, this.Llq = qq, gq[0] = Eq[0], gq[1] = Eq[1], gq[2] = Eq[2]
        }
      }
      grow(qq) {
        (qq = Math.ceil(qq)) <= this.WB || this.eN || (this.records = (0, LE.c)(this.records, new Float32Array(qq * AE.e)), this.isDirty = (0, LE.c)(this.isDirty, new Uint8Array(qq)), this.tail = new Uint8Array(qq * aq.tc.Bytes), this.tailView = new DataView(this.tail.buffer), this.WB = qq)
      }
      dispose() {
        this.eN || (this.eN = !0, this.host.eN(this, this.made ? this.key : null))
      }
      make(qq) {
        if (!this.made && qq) {
          const {
            item: Eq,
            scale: gq,
            yaw: Yq
          } = this.model;
          this.made = (0, aq.Qe)(qq, 0, this.key, Eq, gq, Yq)
        }
        return this.made
      }
      tailOf(qq) {
        const Eq = qq * aq.tc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Eq || (this.tailCut = this.tail.subarray(0, Eq)), this.tailCut
      }
      Ha(qq, Eq) {
        const {
          dirtyList: gq,
          isDirty: Yq
        } = this;
        for (let lq = qq; lq < Eq; lq++) 0 === Yq[lq] && (Yq[lq] = 1, gq.push(lq))
      }
    }
    var kE = gq(590);
    class RE {
      constructor(qq) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: qq,
          owes: qq => {
            this.owing.add(qq)
          },
          settled: (qq, Eq) => {
            this.owing.delete(qq), Eq && this.live.delete(qq)
          }
        }
      }
      create(qq, Eq) {
        if (gq = qq, !kE.j.includes(gq)) return null;
        var gq;
        const Yq = new UE(++this.keys, uq.m.indexOf(qq), Eq, this.host);
        return this.live.add(Yq), Yq
      }
      disposeAll() {
        for (const qq of [...this.live]) qq.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const qq = this.host.cmd();
        for (const Eq of this.owing)
          if (!Eq.sync(qq)) return
      }
    }
    class UE {
      constructor(qq, Eq, gq, Yq) {
        this.key = qq, this.lifeform = Eq, this.scale = gq, this.host = Yq, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.eN = !1, this.sync()
      }
      setPose(qq, Eq) {
        this.eN || (this.feet[0] = qq[0], this.feet[1] = qq[1], this.feet[2] = qq[2], this.yaw = Eq, this.owed |= 2, this.sync())
      }
      setVisible(qq) {
        this.eN || qq === this.visible || (this.visible = qq, this.owed |= 4, this.sync())
      }
      dispose() {
        this.eN || (this.eN = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(qq) ? (this.host.settled(this, this.eN), !0) : (this.host.owes(this), !1)
      }
      write(qq) {
        if (!qq) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, aq.Ye)(qq, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Eq = (2 & this.owed ? aq.Zc.Pose : 0) | (4 & this.owed ? aq.Zc.Visible : 0);
        if (0 !== Eq) {
          if (!(0, aq.We)(qq, 0, this.key, Eq, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, aq.Ue)(qq, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var FE = gq(40788);

    function sE(qq, Eq, gq, Yq) {
      return (0, FE.b)(), (0, aq.Kf)(qq, Eq, gq, Yq)
    }
    var XE = gq(39082),
      wE = gq(40329);
    const KE = [0, 0, 0],
      CE = [0, 0, 0],
      IE = [0, 0, 0],
      eE = [0, 0, 0],
      DE = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      qg = [0, 0, 0],
      Eg = [0, 0],
      gg = [1, 1, 1],
      Yg = 1 / 3;
    const lg = cE.f;

    function Og(qq) {
      const Eq = cE.c[qq],
        gq = Eq && cE.f[Eq.mainMultiblock];
      return gq && {
        main: gq,
        x: Eq.compX,
        y: Eq.compY,
        z: Eq.compZ
      }
    }

    function mg(qq) {
      if (null === qq || void 0 === qq) return aq.gd;
      const Eq = +qq;
      return Number.isInteger(Eq) && Eq >= -2147483648 && Eq <= 2147483647 && String(Eq) === String(qq) ? Eq : aq.gd
    }

    function xg(qq, Eq, gq) {
      return (0, aq.Tf)(qq, 0, Eq, null !== gq && void 0 !== gq ? gq : Number.NaN)
    }
    class Ag {
      constructor(qq) {
        this.deps = qq, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new XE.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (qq => {
          var Eq, gq;
          null === (Eq = (gq = this.deps).setLocalOptions) || void 0 === Eq || Eq.call(gq, qq)
        })), this.mobModels = new RE((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          eN: (qq, Eq) => {
            this.livePools.delete(qq), null !== Eq && (this.owedFrees.push(Eq), this.flushOwed())
          }
        }, this.api = qq.api, this.live = qq.live, this.chunks = qq.chunks, this.items = qq.items, this.tables = qq.tables
      }
      isLocal(qq) {
        return null !== qq && void 0 !== qq && +qq === this.api.localId
      }
      assertLocal(qq, Eq) {
        if (!this.isLocal(qq)) throw new Error(`Attempted to ${Eq} for a player that is not the local player`)
      }
      Py(qq) {
        const Eq = this.api.Py(qq);
        if (!Eq) throw new Error(`Entity ${qq} has no replicated position`);
        return Eq
      }
      checkValid(qq) {
        return !!this.deps.isSessionLive() && (null === qq || void 0 === qq || this.api.checkValid(qq))
      }
      isAlive(qq) {
        return !1 !== this.api.isAlive(qq)
      }
      getItemStat(qq, Eq, gq) {
        return this.isLocal(qq) || null !== qq && "Player" === this.api.getEntityType(qq) ? this.tables.getItemStat(Eq, gq) : this.tables.getDefaultItemStat(Eq, gq)
      }
      getClientOption(qq, Eq) {
        return this.assertLocal(qq, "get a client option"), this.tables.getClientOption(Eq)
      }
      openShop(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(qq, "open shop"), mq.i.TV("showShopFromServer", {
          toggle: Eq,
          kg: gq
        }, !0)
      }
      sendMessage(qq, Eq, gq) {
        this.assertLocal(qq, "send a message");
        const Yq = "string" === typeof Eq ? [{
          str: Eq,
          style: gq
        }] : Eq;
        mq.i.TV("chat", {
          content: Yq
        }, !0)
      }
      getEntityType(qq) {
        return this.api.getEntityType(qq)
      }
      getEntityName(qq) {
        const Eq = mg(qq);
        return Eq === aq.gd ? void 0 : (0, GE.f)(this.api, Eq)
      }
      hasEffect(qq, Eq) {
        const gq = mg(qq);
        return gq !== aq.gd && (0, GE.e)(this.api, gq, Eq)
      }
      getMetaInfo(qq) {
        return this.tables.getMetaInfo(qq)
      }
      getPlayerDbId(qq) {
        return this.assertLocal(qq, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(qq, Eq, gq) {
        if (!this.chunks.dataCleared(qq, Eq, gq)) return (0, GE.d)(this.api, qq, Eq, gq)
      }
      xJ(qq, Eq, gq, Yq) {
        this.setBlockId(qq, Eq, gq, this.tables.getItemId(Yq))
      }
      setOtherEntitySetting(qq, Eq, gq, Yq) {
        if (!this.isLocal(qq)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(aq.sd, gq)) throw new Error(`Unknown other-entity setting ${gq}`);
        const lq = aq.sd[gq],
          Oq = mg(Eq);
        if (Oq === aq.gd || !this.deps.beforeWrite()) return;
        const mq = (0, Sq.h)(Yq);
        if (mq.length > 16384) throw new Error(`The other-entity setting ${gq}'s value is over 16384 bytes`);
        const xq = this.api.memoryView(Uint8Array, this.api.scratch(), mq.length, "set_other_entity_setting's value");
        xq && (xq.set(mq), this.api.queries.setOtherEntitySetting(Oq, lq, mq.length))
      }
      getPositionView(qq) {
        return this.live.position(+qq)
      }
      readDrawnPosition(qq, Eq) {
        return this.api.readDrawnPosition(mg(qq), Eq)
      }
      getDrawnHeading(qq) {
        const Eq = mg(qq),
          gq = (Eq === aq.gd ? 0 : this.api.queries.directorEntity(Eq)) >= aq.sb.BYTES ? this.api.memoryData(this.api.scratch(), aq.sb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!gq) return null;
        if (1 === aq.sb.headingIsDrawn(gq, 0)) return aq.sb.heading(gq, 0);
        const Yq = this.api.apiView;
        return this.isLocal(qq) && 0 === (aq.t.playerFlags(Yq, 0) & aq.Pd.FreeCam) ? aq.t.heading(Yq, 0) : null
      }
      getLocalPlayerMovement() {
        const qq = aq.t.playerFlags(this.api.apiView, 0);
        return 0 === (qq & aq.Pd.Replay) && this.api.readDrawnPosition(this.api.localId, IE) ? {
          onGround: 0 !== (qq & aq.Pd.OnGround),
          jumpHeld: 0 !== (qq & aq.Pd.JumpHeld)
        } : null
      }
      Ngq(qq) {
        return this.isLocal(qq) ? this.items.Fc() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var qq, Eq;
        return "Gun" === (null === (qq = this.aliveHeld()) || void 0 === qq || null === (Eq = qq.typeObj) || void 0 === Eq ? void 0 : Eq.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Fc()
      }
      isCrosshairShown() {
        var qq, Eq;
        const gq = (0, BE.b)(Yq.b.get("crosshairGameView"), Yq.b.get("crosshairShownOverride"));
        if (null !== gq) return gq;
        const lq = null === (qq = this.aliveHeld()) || void 0 === qq ? void 0 : qq.typeObj,
          Oq = "Gun" === (null === lq || void 0 === lq ? void 0 : lq.type),
          mq = Oq || !0 === (null === lq || void 0 === lq ? void 0 : lq.showsAimingUi),
          xq = 0 === (aq.t.playerFlags(this.api.apiView, 0) & aq.Pd.ZoomFirstPerson),
          Aq = null !== (Eq = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Eq ? Eq : null;
        return (0, BE.j)({
          gun: Oq,
          aimable: mq
        }, xq, (0, WE.b)(), Aq)
      }
      setCrosshairShown(qq) {
        Yq.b.set({
          crosshairShownOverride: qq
        })
      }
      getInventoryFreeSlotCount(qq) {
        return this.isLocal(qq) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(qq) {
        return this.isLocal(qq) ? this.items.selectedSlot : null
      }
      getItemSlot(qq, Eq) {
        return this.isLocal(qq) ? this.items.slot(Eq) : null
      }
      swapInventorySlots(qq, Eq) {
        return this.items.swap(qq, Eq)
      }
      isPlayerCrouching(qq) {
        if (this.isLocal(qq)) return 0 !== (aq.t.playerFlags(this.api.apiView, 0) & aq.Pd.Crouching);
        const Eq = mg(qq);
        return Eq !== aq.gd && 1 === this.api.queries.entityCrouching(Eq)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (aq.t.playerFlags(this.api.apiView, 0) & aq.Pd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Kqq()
      }
      getActionRay() {
        const qq = this.api.apiView;
        for (let Eq = 0; Eq < 3; Eq++) DE.origin[Eq] = aq.t.cEq(qq, 0, Eq), DE.direction[Eq] = aq.t.actionDir(qq, 0, Eq);
        return DE
      }
      canModifyBlockAt(qq, Eq, gq) {
        return 1 === this.api.queries.canModify(qq, Eq, gq)
      }
      isSolidToPlayerBlockId(qq) {
        return this.tables.isSolidBlockId(qq) && !this.chunks.isWalkThrough(qq)
      }
      blockNameToBlockId(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(qq, Eq)
      }
      blockIdToBlockName(qq) {
        return this.tables.nameOfId(qq)
      }
      MEq(qq, Eq, gq, Yq, lq) {
        return 1 === this.api.queries.terrainBlocked(Yq, qq, Eq, gq, mg(null !== lq && void 0 !== lq ? lq : null))
      }
      getChunkVersion(qq, Eq, gq) {
        return this.chunks.version(qq, Eq, gq)
      }
      scanBlocks(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        return this.chunks.scan(qq, Eq, gq, Yq, lq, Oq, mq, xq)
      }
      isBlockInLoadedChunk(qq, Eq, gq) {
        return this.chunks.isLoaded(qq, Eq, gq)
      }
      getBlockId(qq, Eq, gq) {
        return this.chunks.lc(qq, Eq, gq)
      }
      playSound(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(qq)) return null;
        const mq = this.playSoundFrom(Eq, gq, lq, Oq);
        return 1 === Yq ? mq : mq.rate(Yq)
      }
      preloadSounds(qq) {
        var Eq, gq;
        null === (Eq = (gq = this.deps).preloadSounds) || void 0 === Eq || Eq.call(gq, qq)
      }
      playSoundFrom(qq, Eq, gq, Yq) {
        var lq, Oq;
        const mq = this.deps.playSound;
        if (!mq) return hE.e;
        const xq = null === gq || void 0 === gq ? void 0 : gq.DE,
          Aq = null !== (lq = null === gq || void 0 === gq ? void 0 : gq.maxHearDist) && void 0 !== lq ? lq : uE.c,
          cq = null !== (Oq = null === gq || void 0 === gq ? void 0 : gq.refDistance) && void 0 !== Oq ? Oq : uE.f;
        let uq = null;
        if (Array.isArray(xq)) KE[0] = xq[0], KE[1] = xq[1], KE[2] = xq[2], uq = KE;
        else if (void 0 !== xq && null !== xq) {
          const qq = mg(xq);
          if (!this.api.isLocal(qq)) {
            if (!this.api.readPosition(qq, KE)) return hE.e;
            uq = KE
          }
        }
        return mq(qq, Eq, uq, uq && this.ear(), Aq, cq, Yq)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, CE)) CE[1] += bE;
        else {
          const qq = this.api.apiView;
          if (0 === aq.t.viewProj(qq, 0, 3) && 0 === aq.t.viewProj(qq, 0, 7) && 0 === aq.t.viewProj(qq, 0, 11)) return null;
          for (let Eq = 0; Eq < 3; Eq++) CE[Eq] = aq.t.eye(qq, 0, Eq)
        }
        return Number.isFinite(CE[0] + CE[1] + CE[2]) ? CE : null
      }
      setBlockId(qq, Eq, gq, Yq) {
        if (!Number.isInteger(Yq) || Yq < 0 || Yq > 65535) throw new Error(`Invalid block id ${Yq}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(qq, Eq, gq)) return;
        const lq = Math.floor(qq),
          Oq = Math.floor(Eq),
          mq = Math.floor(gq),
          xq = this.predictedCells(lq, Oq, mq, Yq);
        if (1 === this.api.queries.xJ(lq, Oq, mq, Yq)) {
          for (let qq = 0; qq < xq.length; qq += 5) this.chunks.setOverlay(xq[qq], xq[qq + 1], xq[qq + 2], xq[qq + 3], 1 === xq[qq + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(qq, Eq) {
        return this.deps.particles.create(qq, Eq)
      }
      playParticleEffect(qq) {
        this.deps.particles.playEffect(qq)
      }
      burstParticlePreset(qq, Eq, gq) {
        this.deps.particles.burstPreset(qq, Eq, gq)
      }
      createGameMesh(qq, Eq, gq) {
        const Yq = ++this.meshKeys,
          lq = this.deps.cmd();
        if (!lq) return Yq;
        const {
          look: Oq,
          colour: mq
        } = function(qq) {
          switch (qq.kind) {
            case void 0:
            case "flatEmissive":
              return qq.onTop ? {
                look: aq.$b.FlatOnTop,
                colour: [...qq.rgb, qq.alpha]
              } : qq.opaque ? {
                look: aq.$b.FlatOpaque,
                colour: [...qq.rgb, 1]
              } : {
                look: aq.$b.Flat,
                colour: [...qq.rgb, qq.alpha]
              };
            case "chevronPath":
              return {
                look: aq.$b.Chevrons, colour: [...(0, NE.d)(qq.colour), qq.alpha]
              };
            case "furnaceFire":
              return {
                look: aq.$b.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Eq), xq = Math.floor(qq.positions.length / 3), Aq = function(qq, Eq) {
          const gq = Math.floor(qq.positions.length / 3),
            Yq = qq.indices.length,
            lq = gq * (Eq ? 5 : 3),
            Oq = new Uint8Array(4 * (lq + Yq)),
            mq = new DataView(Oq.buffer);
          for (let cq = 0; cq < 3 * gq; cq++) mq.setFloat32(4 * cq, qq.positions[cq], !0);
          if (Eq) {
            var xq;
            const Eq = null !== (xq = qq.uvs) && void 0 !== xq ? xq : [];
            for (let qq = 0; qq < 2 * gq; qq++) {
              var Aq;
              mq.setFloat32(4 * (3 * gq + qq), null !== (Aq = Eq[qq]) && void 0 !== Aq ? Aq : 0, !0)
            }
          }
          for (let cq = 0; cq < Yq; cq++) mq.setUint32(4 * (lq + cq), qq.indices[cq], !0);
          return Oq
        }(qq, (0, AE.h)(Eq));
        return (0, aq.Ce)(lq, 0, Yq, Oq, mq, gq, xq, qq.indices.length, Aq) && this.liveMeshes.add(Yq), Yq
      }
      setGameMesh(qq, Eq) {
        var gq;
        const Yq = this.deps.cmd();
        if (!Yq) return;
        let lq = 0;
        Eq.anchor && (lq |= aq.cc.Anchor, qg[0] = Eq.anchor[0], qg[1] = Eq.anchor[1], qg[2] = Eq.anchor[2]), void 0 !== Eq.visible && (lq |= aq.cc.Visible), Eq.uvOffset && (lq |= aq.cc.UvOffset, Eg[0] = Eq.uvOffset[0], Eg[1] = Eq.uvOffset[1]);
        const Oq = null !== (gq = Eq.visibility) && void 0 !== gq ? gq : 1;
        void 0 !== Eq.visibility && (lq |= aq.cc.Visibility), Eq.scale && (lq |= aq.cc.Scale, gg[0] = Eq.scale[0], gg[1] = Eq.scale[1], gg[2] = Eq.scale[2]), 0 !== lq && (0, aq.Je)(Yq, 0, qq, lq, Eq.visible ? 1 : 0, qg, Eg, Oq, gg)
      }
      disposeGameMesh(qq) {
        const Eq = this.deps.cmd();
        Eq && !(0, aq.Fe)(Eq, 0, qq) || this.liveMeshes.delete(qq)
      }
      hasPackModel(qq) {
        var Eq, gq, Yq;
        return null !== (Eq = null === (gq = (Yq = this.deps).hasPackModel) || void 0 === gq ? void 0 : gq.call(Yq, qq)) && void 0 !== Eq && Eq
      }
      disposeGameOutput() {
        const qq = qq => {
          try {
            qq()
          } catch (Eq) {
            console.error("Error freeing client game output", Eq)
          }
        };
        for (const Eq of [...this.liveMeshes]) qq((() => {
          this.disposeGameMesh(Eq)
        }));
        for (const Eq of [...this.livePools]) qq((() => {
          Eq.dispose()
        }));
        qq((() => {
          this.mobModels.disposeAll()
        })), qq((() => {
          this.setGroundArrowStyle(null)
        })), qq((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), qq((() => {
          this.setCrosshairShown(null)
        })), qq((() => {
          this.cameraTurn.dispose()
        })), qq((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(qq, Eq) {
        const gq = this.tables.idOf(qq.item);
        if (void 0 === gq) return null;
        const Yq = new JE(++this.poolKeys, {
          item: gq,
          scale: qq.scale,
          yaw: qq.yaw
        }, Eq, this.poolHost);
        return this.livePools.add(Yq), Yq
      }
      createMobModel(qq, Eq) {
        return this.mobModels.create(qq, Eq)
      }
      setRouteChevrons(qq) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !qq || 0 === qq.cells.length) return;
        const Eq = `${qq.colour} ${qq.alpha}`;
        Eq !== this.routeLook && (this.routeLook = Eq, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(qq) {
          const [Eq, gq, Yq] = qq[0].pos, lq = [], Oq = [], mq = [];
          return qq.forEach(((qq, xq) => {
            let {
              pos: Aq,
              way: [cq, uq]
            } = qq;
            const Bq = Aq[0] - Eq + .5,
              Wq = Aq[1] - gq + .04,
              Nq = Aq[2] - Yq + .5,
              [aq, Vq] = [.35 * -uq, .35 * cq],
              [dq, jq] = [xq * Yg, (xq + 1) * Yg],
              Hq = lq.length / 3;
            lq.push(Bq - .5 * cq + aq, Wq, Nq - .5 * uq + Vq), lq.push(Bq - .5 * cq - aq, Wq, Nq - .5 * uq - Vq), lq.push(Bq + .5 * cq + aq, Wq, Nq + .5 * uq + Vq), lq.push(Bq + .5 * cq - aq, Wq, Nq + .5 * uq - Vq), Oq.push(0, dq, 1, dq, 0, jq, 1, jq), mq.push(Hq, Hq + 1, Hq + 2, Hq + 1, Hq + 3, Hq + 2)
          })), {
            positions: lq,
            uvs: Oq,
            indices: mq
          }
        }(qq.cells), {
          kind: "chevronPath",
          colour: qq.colour,
          alpha: qq.alpha
        }, qq.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(qq) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(qq, 250) / 1e3 * 1.2 * Yg) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(qq) {
        this.pendingStyle = qq, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const qq = this.owedFrees;
        if (0 === qq.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Eq = this.deps.cmd();
        if (!Eq) return qq.length = 0, void(this.pendingFar = void 0);
        let gq = 0;
        for (; gq < qq.length && (0, aq.Pe)(Eq, 0, qq[gq]);) gq++;
        qq.splice(0, gq);
        const Yq = this.pendingStyle;
        if (void 0 !== Yq) {
          (Yq ? (0, aq.Vf)(Eq, 0, Yq.width, Yq.alpha, 1, Yq.endAtSolidFace ? 1 : 0) : (0, aq.Vf)(Eq, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const lq = this.pendingFar;
        void 0 !== lq && (0, aq.Pf)(Eq, 0, null !== lq && void 0 !== lq ? lq : 0, null === lq ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(qq, Eq) {
        const gq = this.deps.cmd(),
          Yq = mg(qq);
        gq && Yq !== aq.gd && (0, aq.fg)(gq, 0, Yq, Eq)
      }
      setFacingTolerance(qq, Eq) {
        const gq = this.deps.cmd(),
          Yq = mg(qq);
        gq && Yq !== aq.gd && xg(gq, Yq, Eq)
      }
      forEachEntity(qq) {
        const {
          api: Eq
        } = this;
        for (let gq = 0; gq < Eq.idStr.length; gq++) {
          const Yq = Eq.idStr[gq];
          null === Yq || Qq(Eq.kinds[gq]) || qq(Yq)
        }
      }
      getEntityInfo(qq) {
        return this.deps.entityInfo.get(qq)
      }
      isEntityInteractable(qq) {
        const Eq = mg(qq);
        return Eq !== aq.gd && 1 === this.api.queries.entityInteractable(Eq)
      }
      isLocalPlayer(qq) {
        return this.isLocal(qq)
      }
      getLineOwner(qq) {
        var Eq;
        const gq = null === (Eq = this.deps.entityInfo.get(qq)) || void 0 === Eq ? void 0 : Eq.meshOpts;
        if (!gq) return null;
        try {
          const {
            lineToEId: qq
          } = JSON.parse(gq);
          return null !== qq && void 0 !== qq ? qq : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const qq = this.api.apiView;
        return eE[0] = aq.t.eye(qq, 0, 0), eE[1] = aq.t.eye(qq, 0, 1), eE[2] = aq.t.eye(qq, 0, 2), eE
      }
      getCameraFar() {
        return aq.t.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(qq) {
        null !== qq && (this.farSet = !0), this.pendingFar = qq, this.flushOwed()
      }
      turnCamera(qq, Eq) {
        this.cameraTurn.turn(qq, Eq)
      }
      clearPickupDelay(qq) {
        const Eq = this.deps.cmd(),
          gq = mg(qq);
        Eq && gq !== aq.gd && (0, aq.qe)(Eq, 0, gq)
      }
      sendChat(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gq = this.deps.sendCmd();
        gq && sE(gq, 0, wE.b.Chat, (0, Sq.h)((0, wE.k)({
          Hc: qq,
          oc: Eq
        })))
      }
      sendCommand(qq) {
        qq.length <= 119 && this.sendChat(`/${qq}`)
      }
      predictedCells(qq, Eq, gq, Yq) {
        const lq = this.chunks,
          Oq = [],
          mq = (qq, Eq, gq, Yq, lq) => {
            Oq.push(qq, Eq, gq, Yq, this.tables.blockRootId(lq) === this.tables.blockRootId(Yq) ? 0 : 1)
          },
          xq = lq.lc(qq, Eq, gq),
          Aq = Og(xq);
        if (Aq) {
          const [Yq, Oq, cq] = [qq - Aq.x, Eq - Aq.y, gq - Aq.z], uq = lg[lq.lc(Yq, Oq, cq)], Bq = null === uq || void 0 === uq ? void 0 : uq.positions.some((qq => qq.id === xq && qq.x === Aq.x && qq.y === Aq.y && qq.z === Aq.z));
          for (const qq of (Bq && uq ? uq : Aq.main).positions) lq.lc(Yq + qq.x, Oq + qq.y, cq + qq.z) === qq.id && mq(Yq + qq.x, Oq + qq.y, cq + qq.z, 0, qq.id)
        }
        const cq = Og(Yq);
        if (cq)
          for (const Bq of cq.main.positions) {
            const [Yq, Oq, xq] = [qq + Bq.x - cq.x, Eq + Bq.y - cq.y, gq + Bq.z - cq.z];
            mq(Yq, Oq, xq, Bq.id, lq.lc(Yq, Oq, xq))
          } else mq(qq, Eq, gq, Yq, xq);
        const uq = this.tables;
        if ((0 !== uq.attachedTopOf(xq) || 0 !== uq.attachedTopOf(Yq)) && lq.isLoaded(qq, Eq + 1, gq)) {
          let Aq = lq.lc(qq, Eq + 1, gq);
          for (let Yq = 0; Yq < Oq.length; Yq += 5) Oq[Yq] === qq && Oq[Yq + 1] === Eq + 1 && Oq[Yq + 2] === gq && (Aq = Oq[Yq + 3]);
          const cq = this.attachedTopWrite(xq, Yq, Aq);
          void 0 !== cq && mq(qq, Eq + 1, gq, cq, Aq)
        }
        return Oq
      }
      attachedTopWrite(qq, Eq, gq) {
        const Yq = this.tables,
          lq = Yq.attachedTopOf(qq),
          Oq = Yq.attachedTopOf(Eq),
          mq = 0 !== lq && 0 !== gq && Yq.blockRootId(gq) === Yq.blockRootId(lq);
        return 0 !== lq && 0 !== Oq && Yq.blockRootId(qq) === Yq.blockRootId(Eq) ? mq && gq !== Oq ? Oq : void 0 : 0 === Oq || !mq && 0 !== gq ? mq ? 0 : void 0 : Oq
      }
    }
    const cg = aq.pc + aq.rc * aq.Ac.BYTES,
      ug = 2147483647,
      Bg = new TextDecoder,
      Wg = new TextEncoder,
      Ng = Object.freeze({
        ac: 0,
        eA: null,
        amountAddedToSlot: 0
      }),
      ag = new Proxy({}, {
        get: () => () => aq.rd
      });

    function Vg(qq) {
      return Number.isInteger(qq) && qq >= 0 && qq <= 65535
    }

    function dg(qq) {
      return Number.isInteger(qq) && qq >= 0 && qq <= 4294967295
    }
    class jg {
      constructor(qq) {
        this.deps = qq, this.Uq = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(aq.rc), this.ids = new Uint16Array(aq.rc), this.amounts = new Uint16Array(aq.rc), this.attrRead = new Float64Array(aq.rc).fill(-1), this.stale = new Uint16Array(aq.rc), this.staleVersion = new Uint32Array(aq.rc), this.instances = new Uint32Array(aq.rc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(qq) {
        var Eq;
        return Number.isInteger(qq) && qq >= 0 && qq < this.len && 0 !== this.ids[qq] && null !== (Eq = this.facades[qq]) && void 0 !== Eq ? Eq : null
      }
      Fc() {
        return this.slot(this.selected)
      }
      playerItems() {
        const qq = [];
        for (let Eq = 0; Eq < Math.min(aq.Bd, this.len); Eq++) qq.push(this.slot(Eq));
        return qq
      }
      freeSlots() {
        let qq = 0;
        for (let Eq = 0; Eq < Math.min(aq.Bd - aq.g, this.len); Eq++) 0 === this.ids[Eq] && qq++;
        return qq
      }
      amountOf(qq) {
        let Eq = 0;
        for (let Yq = 0; Yq < Math.min(aq.Bd, this.len); Yq++) {
          const lq = this.slot(Yq);
          var gq;
          if ((null === lq || void 0 === lq ? void 0 : lq.name) === qq) Eq += null !== (gq = lq.amount) && void 0 !== gq ? gq : 1
        }
        return Eq
      }
      instance(qq) {
        var Eq;
        return null !== (Eq = this.instances[qq]) && void 0 !== Eq ? Eq : 0
      }
      watch(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      touch() {
        this.version++
      }
      flush(qq) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const gq of [...this.listeners]) try {
            gq()
          } catch (Eq) {
            qq(Eq)
          }
        }
      }
      chestOpened(qq, Eq, gq) {
        this.Uq[0] = qq, this.Uq[1] = Eq, this.Uq[2] = gq, this.version++
      }
      refresh() {
        const qq = this.deps.api.apiView,
          Eq = aq.t.inventoryViewPtr(qq, 0),
          gq = aq.t.inventoryVersion(qq, 0),
          Yq = aq.t.selectedSlot(qq, 0);
        Yq !== this.selected && (this.selected = Yq, this.version++);
        const lq = aq.t.slotIcon(qq, 0);
        if (lq !== this.slotIconId && (this.slotIconId = lq, this.iconChanged = !0), Eq === this.viewPtr && gq === this.viewVersion) return;
        this.viewPtr = Eq, this.viewVersion = gq;
        const Oq = this.deps.api.memoryData(Eq, cg, 4, "the inventory view"),
          mq = Oq ? Math.min(Oq.getUint32(0, !0), aq.rc) : 0;
        mq !== this.len && (this.len = mq, this.version++);
        let xq = 0;
        for (let Aq = 0; Aq < aq.rc; Aq++) {
          const qq = aq.pc + Aq * aq.Ac.BYTES,
            Eq = null !== Oq && Aq < mq ? aq.Ac.item(Oq, qq) : 0;
          if (0 === Eq || null === Oq) {
            0 !== this.ids[Aq] && (this.ids[Aq] = 0, this.attrRead[Aq] = -1, this.instances[Aq]++, this.version++);
            continue
          }
          const gq = aq.Ac.amount(Oq, qq),
            Yq = aq.Ac.attrVersion(Oq, qq);
          Eq === this.ids[Aq] && gq === this.amounts[Aq] || this.fill(Aq, Eq, gq), Yq !== this.attrRead[Aq] && (this.stale[xq] = Aq, this.staleVersion[xq] = Yq, xq++)
        }
        xq > 0 && this.fetchAttributes(xq)
      }
      fill(qq, Eq, gq) {
        const {
          tables: Yq
        } = this.deps, lq = Eq !== this.ids[qq];
        let Oq = this.facades[qq];
        Oq || (Oq = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[qq] = Oq), lq && (Oq.name = Yq.nameOfId(Eq), Oq.typeObj = Yq.itemType(Eq), Oq.attributes = {
          customAttributes: {}
        }, this.attrRead[qq] = -1, this.instances[qq]++), Oq.amount = 0 === gq ? null : gq, this.ids[qq] = Eq, this.amounts[qq] = gq, this.version++
      }
      fetchAttributes(qq) {
        const {
          api: Eq,
          onError: gq
        } = this.deps, Yq = Eq.memoryView(Uint16Array, Eq.scratch(), qq, "item_attributes_batch's slots");
        if (!Yq) return void this.markRead(qq);
        Yq.set(this.stale.subarray(0, qq));
        const lq = Eq.queries.itemAttributesBatch(qq),
          Oq = 4294967295 === lq ? null : Eq.memoryData(Eq.scratch(), lq, 4, "item_attributes_batch's answer");
        if (!Oq) return void this.markRead(qq);
        const mq = new Uint8Array(Oq.buffer, Oq.byteOffset, lq);
        for (let Aq = 0; Aq + 8 <= lq;) {
          const qq = Oq.getUint16(Aq, !0),
            Eq = Oq.getUint32(Aq + 4, !0),
            Yq = mq.subarray(Aq + 8, Aq + 8 + Eq);
          Aq += 8 + (0, Wq.Ce)(Eq);
          const lq = this.facades[qq];
          if (lq && 0 !== this.ids[qq] && 0 !== Eq) {
            try {
              lq.attributes = JSON.parse(Bg.decode(Yq))
            } catch (xq) {
              gq(xq)
            }
            this.version++
          }
        }
        this.markRead(qq)
      }
      markRead(qq) {
        for (let Eq = 0; Eq < qq; Eq++) this.attrRead[this.stale[Eq]] = this.staleVersion[Eq]
      }
      swap(qq, Eq) {
        return Vg(qq) && Vg(Eq) && this.settle(this.queries().invSwap(qq, Eq))
      }
      move(qq, Eq, gq) {
        return Vg(qq) && Vg(Eq) && dg(gq) && this.settle(this.queries().invMove(qq, Eq, gq))
      }
      quickMove(qq, Eq, gq, Yq) {
        var lq, Oq;
        if (!Vg(qq) || !Vg(Eq) || !Vg(gq) || null !== Yq && !dg(Yq)) return null;
        const mq = this.queries().invQuickMove(qq, Eq, gq, null === Yq ? -1 : Math.min(Yq, ug)),
          xq = mq === aq.rd ? aq.Ib : null !== (lq = null === (Oq = this.extras()) || void 0 === Oq ? void 0 : Oq[1]) && void 0 !== lq ? lq : aq.Ib;
        return this.settle(mq), xq === aq.Ib ? null : xq
      }
      remove(qq, Eq, gq) {
        return Vg(qq) && dg(Eq) && this.settle(this.queries().invRemove(qq, Eq, gq ? 1 : 0))
      }
      selectSlot(qq) {
        return Vg(qq) && this.settle(this.queries().selectSlot(qq))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(qq, Eq, gq) {
        if (!Vg(qq) || !Number.isInteger(Eq)) return !1;
        const [Yq, lq, Oq] = gq;
        return this.settle(this.queries().invEnchant(qq, Eq, Math.floor(Yq), Math.floor(lq), Math.floor(Oq)))
      }
      craft(qq, Eq, gq) {
        let Yq;
        try {
          Yq = this.deps.tables.getItemId(qq)
        } catch {
          return Ng
        }
        if (!Vg(Eq) || null !== gq && (Number.isNaN(gq) || gq < 0)) return Ng;
        const lq = null === gq || gq > ug ? -1 : Math.floor(gq),
          Oq = this.queries().craft(Yq, Eq, lq);
        let mq = Ng;
        const xq = Oq === aq.rd ? null : this.extras();
        if (xq) {
          const [qq, Eq, gq] = xq;
          mq = {
            ac: qq,
            eA: Eq === aq.Ib ? null : Eq,
            amountAddedToSlot: gq
          }
        }
        return this.settle(Oq), mq
      }
      salvage(qq, Eq, gq) {
        let Yq;
        try {
          Yq = this.deps.tables.getItemId(Eq)
        } catch {
          return !1
        }
        return Vg(qq) && Number.isInteger(gq) && this.settle(this.queries().salvage(qq, Yq, Math.max(Math.min(gq, ug), -ug)))
      }
      craftingView(qq, Eq, gq) {
        var Yq;
        if (this.stopped) return null;
        const {
          api: lq,
          onError: Oq
        } = this.deps, mq = qq ? Wg.encode(qq) : null;
        if (null !== mq) {
          if (mq.length > 1024) return Oq(new Error(`The crafting station ${qq}'s name is over 1024 bytes`)), null;
          const Eq = lq.memoryView(Uint8Array, lq.scratch(), mq.length, "crafting_view's station");
          if (!Eq) return null;
          Eq.set(mq)
        }
        const xq = Vg(Eq) && Vg(gq),
          Aq = lq.queries.craftingView(null !== (Yq = null === mq || void 0 === mq ? void 0 : mq.length) && void 0 !== Yq ? Yq : 0, xq ? Eq : 0, xq ? gq : 0);
        return Aq < aq.mb.BYTES ? (lq.reportCorruption(`crafting_view's answer of ${Aq} bytes`), null) : lq.memoryData(lq.scratch(), Aq, 1, "crafting_view's answer")
      }
      queries() {
        var qq, Eq;
        return !1 === (null === (qq = (Eq = this.deps).beforeOp) || void 0 === qq ? void 0 : qq.call(Eq)) ? (this.stopped = !0, ag) : this.deps.api.queries
      }
      extras() {
        const {
          api: qq
        } = this.deps;
        return qq.memoryView(Uint32Array, qq.scratch(), 3, "a sync query's extra words")
      }
      settle(qq) {
        if (qq === aq.od)(0, FE.b)();
        else if (qq !== aq.rd) {
          const Eq = this.deps.cmd();
          Eq && function(qq, Eq, gq) {
            return (0, FE.b)(), (0, aq.qg)(qq, Eq, gq)
          }(Eq, 0, qq) || this.deps.onError(new Error(`Sync op ${qq}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), qq !== aq.rd
      }
    }
    const Hg = 1 / .6,
      og = [0, 1, 0],
      Pg = [0, 0, 0],
      Qg = new Uint8Array(0),
      yg = 1.2 * aE.c.ZH,
      tg = new TextEncoder,
      rg = [0, 0, 0],
      vg = [0, 0, 0],
      hg = new Map;

    function ng(qq) {
      let Eq = hg.get(qq);
      return Eq || (hg.size >= 64 && hg.clear(), Eq = tg.encode(`{"emitRate":${qq}}`), hg.set(qq, Eq)), Eq
    }

    function bg(qq) {
      return Number.isFinite(qq) && qq > 0 ? qq : 0
    }

    function ig(qq, Eq) {
      for (let gq = 0; gq < 3; gq++) {
        const Yq = Math.abs(Eq[gq]);
        rg[gq] = qq[gq] - Yq, vg[gq] = 2 * Yq
      }
      return Number.isFinite(rg[0] + rg[1] + rg[2] + vg[0] + vg[1] + vg[2])
    }

    function Zg(qq, Eq) {
      return "pos1" === qq || "pos2" === qq ? void 0 : Eq
    }

    function fg(qq, Eq, gq) {
      return qq.length > aq.Md.MaxOpts ? (gq(new Error(`${Eq}'s particle opts are over ${aq.Md.MaxOpts} bytes of JSON`)), null) : qq
    }
    const Mg = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Tg {
      constructor(qq) {
        this.deps = qq, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(qq, Eq) {
        var gq;
        const Yq = this.sink(),
          lq = null !== (gq = Eq.half) && void 0 !== gq ? gq : Pg;
        if (!Yq || this.live >= aq.Md.MaxLiveKeys || this.nextKey > aq.Md.MaxKey || !ig(Eq.pos, lq)) return Mg;
        const Oq = this.nextKey,
          mq = fg(function(qq) {
            var Eq, gq, Yq;
            const lq = JSON.stringify({
              texture: "string" === typeof qq.texture ? qq.texture : "smokePuff",
              WB: qq.WB,
              minLifeTime: qq.minLifeTime,
              maxLifeTime: qq.maxLifeTime,
              minSize: qq.minSize,
              maxSize: qq.maxSize,
              minEmitPower: qq.minEmitPower,
              maxEmitPower: qq.maxEmitPower,
              emitRate: bg(qq.emitRate),
              gravity: null !== (Eq = qq.gravity) && void 0 !== Eq ? Eq : Pg,
              dir1: null !== (gq = qq.dir1) && void 0 !== gq ? gq : og,
              dir2: null !== (Yq = qq.dir2) && void 0 !== Yq ? Yq : og,
              colorGradients: qq.colorGradients,
              blendMode: qq.blendMode
            });
            return tg.encode(lq)
          }(qq), "createParticles", this.deps.onError);
        return mq && (0, aq.gf)(Yq, 0, Oq, 0, aq.Md.PresetNone, 0, rg, vg, mq) ? (this.nextKey++, this.live++, this.started = !0, new zg(this, this.session, Oq, qq, lq)) : Mg
      }
      playEffect(qq) {
        const Eq = this.sink(),
          {
            pos1: gq,
            pos2: Yq
          } = qq;
        if (!Eq || !gq || !Yq) return;
        for (let Oq = 0; Oq < 3; Oq++) rg[Oq] = Math.min(gq[Oq], Yq[Oq]), vg[Oq] = Math.abs(Yq[Oq] - gq[Oq]);
        if (!Number.isFinite(rg[0] + rg[1] + rg[2] + vg[0] + vg[1] + vg[2])) return;
        const lq = fg(tg.encode(JSON.stringify(qq, Zg)), "playParticleEffect", this.deps.onError);
        lq && (0, aq.af)(Eq, 0, 0, aq.Md.PresetNone, aq.Md.HasBox, 0, rg, vg, lq)
      }
      burstPreset(qq, Eq, gq) {
        const Yq = this.sink(),
          lq = Math.min(Math.floor(gq), aq.Md.MaxBurst);
        if (!Yq || !Object.hasOwn(aq.gc, qq) || !(lq > 0)) return;
        const Oq = yg;
        for (let mq = 0; mq < 3; mq++) rg[mq] = Eq[mq] - Oq / 2, vg[mq] = Oq;
        Number.isFinite(rg[0] + rg[1] + rg[2]) && (0, aq.af)(Yq, 0, 0, aq.gc[qq], aq.Md.HasBox, lq, rg, vg, Qg)
      }
      sessionEnded() {
        this.session++;
        const qq = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !qq || (0, aq.kf)(qq, 0)
      }
      sinkFor(qq) {
        return qq === this.session ? this.deps.cmd() : null
      }
      stop(qq, Eq) {
        const gq = this.sinkFor(qq);
        gq && (0, aq.of)(gq, 0, Eq) && this.live--
      }
    }
    class zg {
      constructor(qq, Eq, gq, Yq, lq) {
        this.owner = qq, this.session = Eq, this.key = gq, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(lq[0]), Math.abs(lq[1]), Math.abs(lq[2])], this.rate = bg(Yq.emitRate), this.emitted = this.rate > 0;
        const Oq = Yq.maxLifeTime * Hg * 1e3 + 250;
        this.stopDelayMs = Oq >= 0 ? Math.min(Oq, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(qq, Eq) {
        const gq = this.sink();
        if (gq) {
          if (Eq)
            for (let qq = 0; qq < 3; qq++) this.half[qq] = Math.abs(Eq[qq]);
          ig(qq, this.half) && (0, aq.sf)(gq, 0, this.key, aq.Md.HasBox, rg, vg, Qg)
        }
      }
      setEmitRate(qq) {
        const Eq = this.sink(),
          gq = bg(qq);
        Eq && gq !== this.rate && (0, aq.sf)(Eq, 0, this.key, 0, Pg, Pg, ng(gq)) && (this.rate = gq, this.emitted ||= gq > 0)
      }
      emit(qq) {
        const Eq = this.sink(),
          gq = Math.min(Math.floor(qq), aq.Md.MaxBurst);
        Eq && gq > 0 && (0, aq.af)(Eq, 0, this.key, aq.Md.PresetNone, 0, gq, Pg, Pg, Qg) && (this.emitted = !0)
      }
      emitPoints(qq, Eq, gq) {
        const Yq = this.sink(),
          lq = Math.min(Math.floor(gq), aq.Md.MaxPoints, Math.floor(Eq.length / 4));
        if (!Yq || !(lq > 0) || !Number.isFinite(qq[0] + qq[1] + qq[2])) return;
        const Oq = new Uint8Array(Eq.buffer, Eq.byteOffset, lq * aq.Md.PointBytes);
        (0, aq.cf)(Yq, 0, this.key, lq, qq, Oq) && (this.emitted = !0)
      }
      setDirections(qq, Eq) {
        const gq = this.sink();
        if (!gq || !Number.isFinite(qq[0] + qq[1] + qq[2] + Eq[0] + Eq[1] + Eq[2])) return;
        const Yq = tg.encode(JSON.stringify({
          dir1: [qq[0], qq[1], qq[2]],
          dir2: [Eq[0], Eq[1], Eq[2]]
        }));
        (0, aq.sf)(gq, 0, this.key, 0, Pg, Pg, Yq)
      }
      stop() {
        const qq = this.sink();
        this.stopped = !0, qq && (this.emitted ? (this.rate > 0 && (0, aq.sf)(qq, 0, this.key, 0, Pg, Pg, ng(0)), setTimeout((() => {
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
    const Sg = kE.l,
      pg = new TextDecoder;

    function Gg(qq, Eq) {
      const {
        serverIds: gq,
        kinds: Yq
      } = qq;
      let lq = 0;
      for (let Oq = 0; Oq < gq.length; Oq++) {
        const qq = gq[Oq];
        if (qq !== aq.gd && !Qq(Yq[Oq])) {
          if (lq === Eq.length) {
            const qq = new Int32Array(Math.max(64, 2 * lq));
            qq.set(Eq), Eq = qq
          }
          Eq[lq++] = qq
        }
      }
      return {
        ids: Eq,
        count: lq
      }
    }

    function Lg(qq, Eq) {
      return qq.length >= Eq ? qq : new Int32Array(Math.max(Eq, 2 * qq.length))
    }

    function Jg(qq, Eq, gq, Yq) {
      for (let lq = 0; lq < gq; lq += 4096) {
        const Oq = Math.min(4096, gq - lq),
          mq = qq.memoryView(Int32Array, qq.scratch(), Oq, "entity_info_batch's ids");
        if (!mq) return !1;
        mq.set(Eq.subarray(lq, lq + Oq));
        const xq = qq.queries.entityInfoBatch(Oq),
          Aq = 4294967295 === xq ? null : qq.memoryData(qq.scratch(), xq, 4, "entity_info_batch's records");
        if (!Aq) return !1;
        for (let qq = 0; qq + aq.Rb.BYTES <= xq;) {
          const Eq = aq.Rb.len(Aq, qq);
          Yq(aq.Rb.serverId(Aq, qq), kg(Aq, qq, Eq)), qq += aq.Rb.BYTES + (0, Wq.Ce)(Eq)
        }
      }
      return !0
    }

    function kg(qq, Eq, gq) {
      var Yq, lq, Oq;
      const mq = aq.Rb.kind(qq, Eq),
        xq = 0 === mq ? null : yq(mq);
      if (null === xq) return null;
      const Aq = aq.Rb.variation(qq, Eq),
        cq = aq.Rb.pose(qq, Eq),
        uq = aq.Rb.meta(qq, Eq),
        Bq = aq.Rb.mesh(qq, Eq),
        Wq = 0 !== (aq.Rb.flags(qq, Eq) & aq.Qb.HasOpts),
        Nq = Sg[xq];
      return Object.freeze({
        type: xq,
        variation: Aq === aq.ld ? void 0 : null !== (Yq = null !== (lq = null === Nq || void 0 === Nq ? void 0 : Nq[Aq]) && void 0 !== lq ? lq : null === Nq || void 0 === Nq ? void 0 : Nq[0]) && void 0 !== Yq ? Yq : "default",
        pose: cq === aq.oc ? void 0 : null !== (Oq = aq.Fb[cq]) && void 0 !== Oq ? Oq : aq.Fb[0],
        metaInfo: uq === aq.oc ? void 0 : aq.Vc[uq],
        meshKind: Bq === aq.oc ? void 0 : aq.Tc[Bq],
        meshOpts: Wq ? pg.decode(new Uint8Array(qq.buffer, qq.byteOffset + Eq + aq.Rb.BYTES, gq)) : void 0
      })
    }
    const Rg = 1,
      Ug = 2;
    class Fg {
      constructor(qq) {
        this.deps = qq, this.wanted = 0, this.Fc = !1, this.refused = !1
      }
      get on() {
        return this.Fc
      }
      want(qq, Eq) {
        this.wanted = Eq ? this.wanted | qq : this.wanted & ~qq;
        const gq = 0 !== this.wanted;
        if (gq === this.Fc) return;
        const Yq = this.deps.cmd();
        null !== Yq ? (0, aq.vg)(Yq, 0, gq ? 1 : 0) ? (this.Fc = gq, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Fc = !1
      }
    }
    class sg {
      constructor(qq) {
        this.deps = qq, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(qq) {
        var Eq;
        return this.complete || this.fill(), null !== (Eq = this.entries.get("string" === typeof qq ? qq : String(qq))) && void 0 !== Eq ? Eq : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(qq) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const qq = new Int32Array(2 * this.pending.length);
            qq.set(this.pending), this.pending = qq
          }
          this.pending[this.pendingCount++] = qq
        }
      }
      removed(qq) {
        this.entries.size > 0 && this.entries.delete(String(qq))
      }
      refresh() {
        const qq = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (qq > 0 && this.complete) {
          const {
            api: Eq
          } = this.deps;
          let gq = 0;
          const Yq = this.ids = Lg(this.ids, qq);
          for (let lq = 0; lq < qq; lq++) {
            const qq = this.pending[lq],
              Oq = Eq.indexById.get(qq);
            void 0 === Oq || Qq(Eq.kinds[Oq]) ? this.entries.delete(String(qq)) : Yq[gq++] = qq
          }
          gq > 0 && !this.batch(Yq, gq) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Rg, !1)
      }
      fill() {
        const {
          api: qq
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: qq
          } = this.deps, Eq = qq.on;
          qq.want(Rg, !0), !Eq && qq.on && (this.refill = this.midFrame)
        }
        const {
          ids: Eq,
          count: gq
        } = Gg(qq, this.ids);
        this.ids = Eq, gq > 0 && !this.batch(Eq, gq) && (this.refill = !0)
      }
      batch(qq, Eq) {
        return Jg(this.deps.api, qq, Eq, ((qq, Eq) => {
          null === Eq ? this.entries.delete(String(qq)) : this.entries.set(String(qq), Eq)
        }))
      }
    }
    var Xg = gq(4625);

    function wg(qq) {
      if ("message" !== qq.type || qq.Hc !== Xg.ec.NewClientOptions || qq.payloadKind !== Wq.hc.Msgpack) return null;
      const Eq = (0, Sq.e)(qq.payload);
      if (null === Eq || "object" !== typeof Eq || Array.isArray(Eq)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Eq
    }
    var Kg = gq(1226),
      Cg = gq(36681);

    function Ig(qq, Eq, gq, Yq, lq, Oq, xq) {
      var Aq, cq, uq;
      switch (qq) {
        case aq.ie.ToggleMenu: {
          const qq = aq.J[Eq];
          mq.i.TV("toggleMenu", void 0 === qq ? "inventory" : `inventory|${qq}`);
          break
        }
        case aq.ie.EditBoard:
          mq.i.TV("EditBoard", {
            pos: 0 === Eq ? null : gq
          });
          break;
        case aq.ie.EditCodeBlock:
        case aq.ie.ViewCodeBlock:
          mq.i.TV("EditCodeBlock", {
            pos: gq,
            canChangePos: qq === aq.ie.EditCodeBlock
          });
          break;
        case aq.ie.EditCustomLobbyBlock:
          mq.i.TV("EditCustomLobbyBlock", {
            pos: gq
          });
          break;
        case aq.ie.OpenIronChest:
          mq.i.TV("OpenIronChest", {
            pos: gq
          });
          break;
        case aq.ie.EditNameTag:
          mq.i.TV("EditNameTag", null !== (Aq = null === (cq = lq.Fc()) || void 0 === cq || null === (uq = cq.attributes.customAttributes) || void 0 === uq ? void 0 : uq.text) && void 0 !== Aq ? Aq : "");
          break;
        case aq.ie.EditBook: {
          var Bq, Wq, Vq;
          const qq = null === (Bq = lq.Fc()) || void 0 === Bq ? void 0 : Bq.attributes;
          mq.i.TV("EditBook", {
            pages: (0, Kg.U)(null === qq || void 0 === qq || null === (Wq = qq.customAttributes) || void 0 === Wq ? void 0 : Wq.pages),
            title: null !== (Vq = null === qq || void 0 === qq ? void 0 : qq.customDisplayName) && void 0 !== Vq ? Vq : "Title",
            isPublished: !(null === qq || void 0 === qq || !qq.customDescription)
          });
          break
        }
        case aq.ie.CantChangeBlock:
          ! function(qq, Eq) {
            const gq = Eq.getClientOption("cantChangeError"),
              Yq = Eq.getClientOption(qq ? "cantBuildError" : "cantBreakError"),
              lq = qq ? gq : Yq;
            (Eq.getClientOption("canChange") || lq || "You cannot modify this block" !== gq) && mq.i.TV("showBottomMessage", {
              message: Yq || gq,
              type: "Error"
            })
          }(1 === Eq, Oq);
          break;
        case aq.ie.MiddleBarStart:
          mq.i.TV("middleScreenBarInitiate", {
            duration: Yq,
            uE: 1 === gq[0],
            horizBarRemOffset: Eq
          });
          break;
        case aq.ie.MiddleBarStop:
          mq.i.TV("middleScreenBarRemove");
          break;
        case aq.ie.Hitmarker:
          mq.i.TV("localGunHitmarker", {
            vq: 1 === Eq
          });
          break;
        case aq.ie.ShotsLeft:
          mq.i.TV("localPlayerNewShotsLeft", Yq);
          break;
        case aq.ie.AimingOverlay:
          mq.i.TV("aimingOverlay", 3 === (3 & Eq) ? "sniper" : "none");
          break;
        case aq.ie.BottomMessage:
          mq.i.TV("showBottomMessage", JSON.parse(xq()));
          break;
        case aq.ie.Crosshair:
          lq.inaccuracy = (0, pq.e)(Yq), (0, Cg.d)().crosshairAccuracy(lq.inaccuracy);
          break;
        case aq.ie.ChargeStage:
          break;
        case aq.ie.EmoteWheelClose:
          mq.i.TV("requestEmoteWheelClose");
          break;
        case aq.ie.BlockMined:
          mq.i.TV("localBlockMined");
          break;
        default:
          throw new Nq.d(`UiEvent of no kind: what ${qq}`)
      }
    }
    var eg = gq(37972),
      Dg = gq(9292),
      qY = gq(1933),
      EY = gq(36849),
      gY = gq(9301),
      YY = gq(4608);
    const lY = 10,
      OY = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      mY = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      xY = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function AY(qq, Eq) {
      let gq, Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Oq = () => (gq = (0, qY.m)(gq, Eq()), gq);
      return {
        current: Oq,
        watch(Eq) {
          const gq = () => {
              Eq(Oq())
            },
            mq = [qq.watch(gq)];
          return null !== Yq && mq.push((0, qY.o)((qq => {
            qq.some(Yq) && gq()
          }))), null !== lq && mq.push(lq(gq)), () => {
            for (const qq of mq) qq()
          }
        }
      }
    }

    function cY(qq) {
      return qq && {
        name: qq.name,
        amount: qq.amount,
        attributes: qq.attributes
      }
    }
    const uY = new WeakMap;

    function BY(qq) {
      let Eq = uY.get(qq);
      return void 0 === Eq && (Eq = (0, gY.creativeItemIds)().map((Eq => ({
        name: qq.nameOfId(Eq),
        amount: qq.isStackableId(Eq) ? 1 : null,
        attributes: (0, eg.c)("Gun" === (0, gY.itemTypeOf)(Eq) ? {
          type: "Gun",
          clipSize: (0, gY.clipSizeOf)(Eq)
        } : void 0)
      }))), uY.set(qq, Eq)), Eq
    }

    function WY(qq, Eq, gq, Yq) {
      const lq = Eq => (qq.flush(Yq), Eq),
        Oq = gq => {
          var Yq, lq, Oq, mq, xq, Aq, cq;
          const uq = qq.slot(gq);
          if (!uq) return null;
          const {
            rootName: Bq,
            metaStr: Wq
          } = Eq.getMetaInfo(uq.name);
          return {
            name: uq.name,
            amount: uq.amount,
            attributes: uq.attributes,
            instance: qq.instance(gq),
            displayName: null !== (Yq = uq.attributes.customDisplayName) && void 0 !== Yq ? Yq : Eq.getDisplayName(Bq),
            requiresAmmo: "RequiresAmmo" === Wq,
            clipSize: null !== (lq = null !== (Oq = null === (mq = uq.attributes.customAttributes) || void 0 === mq || null === (xq = mq.gunStats) || void 0 === xq ? void 0 : xq.clipSize) && void 0 !== Oq ? Oq : null === (Aq = Eq.getGunStats(Bq)) || void 0 === Aq ? void 0 : Aq.clipSize) && void 0 !== lq ? lq : null === (cq = uq.typeObj) || void 0 === cq ? void 0 : cq.clipSize
          }
        },
        xq = function(qq, Eq) {
          let gq = null,
            Yq = {
              focus: null,
              recipes: [],
              detail: null
            },
            lq = -1;
          const Oq = new Set;
          return {
            read() {
              var Oq, mq;
              if (null === gq) return null !== Yq.focus && (Yq = {
                ...Yq,
                focus: null
              }), Yq;
              if (Yq.focus === gq && lq === qq.changes) return Yq;
              if (lq = qq.changes, 0 === qq.length) return Yq = {
                focus: gq,
                recipes: [],
                detail: null
              }, Yq;
              let xq = 0;
              if (null !== gq.recipe) try {
                xq = Eq.getItemId(gq.recipe.name)
              } catch {}
              const Aq = qq.craftingView(gq.station, xq, null !== (Oq = null === (mq = gq.recipe) || void 0 === mq ? void 0 : mq.Nc) && void 0 !== Oq ? Oq : 0);
              return Yq = null === Aq ? {
                focus: gq,
                recipes: [],
                detail: null
              } : function(qq, Eq, gq) {
                let Yq = aq.mb.BYTES;
                const lq = [];
                for (let uq = aq.mb.recipes(qq, 0); uq > 0; uq--) {
                  const gq = aq.db.flags(qq, Yq),
                    Oq = {
                      name: Eq.nameOfId(aq.db.item(qq, Yq)),
                      Nc: aq.db.recipe(qq, Yq),
                      requires: [],
                      produces: aq.db.produces(qq, Yq),
                      haveIngredients: 0 !== (gq & aq.ab.HaveIngredients),
                      listed: 0 !== (gq & aq.ab.Listed)
                    };
                  let mq = aq.db.requires(qq, Yq);
                  for (Yq += aq.db.BYTES; mq > 0; mq--) {
                    const gq = aq.fb.items(qq, Yq);
                    Oq.requires.push({
                      items: VY(qq, Yq + aq.fb.BYTES, gq, Eq),
                      amt: aq.fb.amount(qq, Yq)
                    }), Yq += aq.fb.BYTES + 2 * gq
                  }
                  lq.push(Oq)
                }
                const Oq = aq.mb.flags(qq, 0);
                if (null === gq.recipe || 0 === (Oq & aq.jb.Detail)) return {
                  focus: gq,
                  recipes: lq,
                  detail: null
                };
                const mq = {},
                  xq = {};
                for (let uq = aq.mb.ingredients(qq, 0); uq > 0; uq--) {
                  const gq = aq.Z.item(qq, Yq),
                    lq = aq.Z.from(qq, Yq),
                    Oq = aq.Z.amount(qq, Yq);
                  Yq += aq.Z.BYTES;
                  const Aq = lq === aq.F ? null : VY(qq, Yq, lq, Eq);
                  if (null !== Aq && (Yq += 2 * lq), 0 === gq) continue;
                  const cq = Eq.nameOfId(gq);
                  mq[cq] = Oq, null !== Aq && (xq[cq] = Aq)
                }
                const {
                  name: Aq,
                  Nc: cq
                } = gq.recipe;
                return {
                  focus: gq,
                  recipes: lq,
                  detail: {
                    name: Aq,
                    Nc: cq,
                    craftAllTimes: aq.mb.craftAllTimes(qq, 0),
                    roomForOne: 0 !== (Oq & aq.jb.RoomForOne),
                    resultStackable: Boolean(Eq.getItemStat(Aq, "stackable")),
                    amounts: mq,
                    ingredientsCraftedFrom: xq
                  }
                }
              }(Aq, Eq, gq), Yq
            },
            setFocus(qq) {
              gq = qq;
              for (const Eq of [...Oq]) Eq()
            },
            watchFocus: qq => (Oq.add(qq), () => {
              Oq.delete(qq)
            })
          }
        }(qq, Eq);
      return {
        states: {
          inventory: AY(qq, (() => {
            const gq = qq.length;
            if (0 === gq) return OY;
            const Yq = [];
            for (let Eq = 0; Eq < aq.Bd; Eq++) Yq.push(cY(qq.slot(Eq)));
            const lq = qq.slotIcon,
              Oq = Yq[qq.selectedSlot];
            0 !== lq && Oq && (Yq[qq.selectedSlot] = {
              ...Oq,
              icon: Eq.nameOfId(lq)
            });
            const mq = !0 === Eq.getClientOption("creative");
            let xq = [],
              Aq = null;
            if (gq > aq.Bd) {
              for (let Eq = aq.Bd; Eq < gq; Eq++) xq.push(cY(qq.slot(Eq)));
              Aq = {
                type: null,
                pos: [...qq.Uq],
                numSlots: gq - aq.Bd,
                ironChest: null
              }
            } else mq && (xq = BY(Eq));
            return {
              player: Yq,
              chestOrCreative: xq,
              chest: Aq,
              creative: mq,
              selectedSlot: qq.selectedSlot,
              freeSlots: qq.freeSlots()
            }
          }), (0, qY.h)("creative")),
          hotbar: AY(qq, (() => {
            if (0 === qq.length) return mY;
            const Eq = [];
            for (let qq = 0; qq < lY; qq++) Eq.push(Oq(qq));
            return {
              items: Eq,
              ammo: qq.amountOf("Ammo"),
              selectedSlot: qq.selectedSlot
            }
          }), (0, qY.f)("DisplayName", "GunStats")),
          crafting: AY(qq, xq.read, null, xq.watchFocus),
          heldItemAim: AY(qq, (() => {
            var Eq;
            if (!gq()) return xY;
            const Yq = null === (Eq = qq.Fc()) || void 0 === Eq ? void 0 : Eq.typeObj,
              lq = "Gun" === (null === Yq || void 0 === Yq ? void 0 : Yq.type);
            return {
              gun: lq,
              aimable: lq || !0 === (null === Yq || void 0 === Yq ? void 0 : Yq.showsAimingUi),
              chargeName: "Chargeable" === (null === Yq || void 0 === Yq ? void 0 : Yq.type) ? Yq.name : null
            }
          }), null, (qq => function(qq, Eq) {
            let gq = qq();
            return (0, YY.x)((() => {
              const Yq = qq();
              Yq !== gq && (gq = Yq, Eq(Yq))
            }))
          }(gq, qq)))
        },
        events: {
          hotbarSlotRequested: (0, qY.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, qY.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, qY.c)("numkeyPressed"),
          inventoryDropRequested: (0, qY.c)("DropInvenItem"),
          chestToggled: (0, qY.c)("chestToggleFromServer"),
          chestRefreshed: (0, qY.c)("chestRefreshedFromServer", aY),
          inventorySynced: (0, qY.c)("syncedInvenFromServer", aY),
          enchantingTableOpened: (0, qY.c)("enchantingTable", (qq => {
            let {
              position: gq,
              lc: Yq
            } = qq;
            return {
              position: [...gq],
              blockName: Eq.getMetaInfo(Yq).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Eq) {
            qq.selectSlot(Eq), qq.flush(Yq)
          },
          removeInventoryItem(Eq) {
            let {
              slot: gq,
              amount: Yq,
              drop: Oq
            } = Eq;
            return lq(qq.remove(gq, Yq, Oq))
          },
          swapInventorySlots(Eq) {
            let {
              a: gq,
              b: Yq
            } = Eq;
            return lq(qq.swap(gq, Yq))
          },
          moveInventoryItem(Eq) {
            let {
              from: gq,
              to: Yq,
              amount: Oq
            } = Eq;
            return lq(qq.move(gq, Yq, Oq))
          },
          quickMoveInventoryItem(Eq) {
            let {
              slot: gq,
              start: Yq,
              end: Oq,
              amount: mq
            } = Eq;
            return lq(qq.quickMove(gq, Yq, Oq, mq))
          },
          closeChest() {
            qq.closeChest(), qq.flush(Yq), mq.i.TV("chestClosedByPlayer")
          },
          focusCrafting(qq) {
            xq.setFocus(qq)
          },
          craftRecipe(Eq) {
            let {
              name: gq,
              Nc: Yq,
              times: Oq
            } = Eq;
            return lq(qq.craft(gq, Yq, Oq))
          },
          salvageItem(Eq) {
            let {
              slot: gq,
              name: Yq,
              amount: Oq
            } = Eq;
            return lq(qq.salvage(gq, Yq, Oq))
          },
          enchantItem(Eq) {
            let {
              slot: gq,
              level: Yq,
              tablePos: lq
            } = Eq;
            qq.enchant(gq, Yq, lq)
          }
        },
        queries: {
          enchantingOffer(gq) {
            let {
              slot: Yq,
              blockName: lq
            } = gq;
            return function(qq, Eq, gq, Yq) {
              const lq = qq.slot(gq);
              if (!lq || !Eq.getClientOption("canCraft") || !(0, Dg.r)(Yq) || (0, Dg.q)(lq.attributes)) return NY;
              const Oq = (0, gY.enchantmentPerksOf)(Eq.getItemId(lq.name));
              if (0 === Oq.length) return NY;
              const mq = [];
              for (let xq = 0; xq < EY.b; xq++) {
                const {
                  commonProb: qq,
                  uncommonProb: Eq,
                  rareProb: gq,
                  epicProb: lq,
                  legendaryProb: Oq,
                  level: Aq
                } = (0, Dg.h)(Yq, xq);
                mq.push({
                  level: Aq,
                  odds: [qq, Eq, gq, lq, Oq].map((qq => 100 * qq))
                })
              }
              return {
                perks: [...Oq],
                options: mq
              }
            }(qq, Eq, Yq, lq)
          }
        }
      }
    }
    const NY = Object.freeze({
      perks: [],
      options: []
    });

    function aY() {
      return null
    }

    function VY(qq, Eq, gq, Yq) {
      const lq = [];
      for (let Oq = 0; Oq < gq; Oq++) {
        const gq = qq.getUint16(Eq + 2 * Oq, !0);
        0 !== gq && lq.push(Yq.nameOfId(gq))
      }
      return lq
    }
    class dY {
      constructor(qq) {
        this.api = qq, this.positions = new Map, this.targeted = {
          Y_: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          MV: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(qq) {
        let Eq = this.positions.get(qq);
        return Eq || (this.api.checkValid(qq) || this.api.isLocal(qq) ? (Eq = [NaN, NaN, NaN], this.api.readPosition(qq, Eq), this.positions.set(qq, Eq), Eq) : null)
      }
      Kqq() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Eq, gq] of this.positions) this.api.readPosition(Eq, gq) || this.api.checkValid(Eq) || this.api.isLocal(Eq) || this.positions.delete(Eq);
        const qq = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (aq.t.playerFlags(qq, 0) & aq.Pd.Breaking) && aq.t.breakingProgress(qq, 0) >= 0, this.isBreaking)
          for (let Eq = 0; Eq < 3; Eq++) this.breaking[Eq] = aq.t.breakingPos(qq, 0, Eq)
      }
      refreshTarget() {
        const qq = this.api.apiView,
          Eq = aq.t.targetBlockId(qq, 0);
        if (this.hasTarget = Eq !== aq.id, this.hasTarget) {
          const gq = this.targeted;
          gq.Y_ = Eq;
          for (let Eq = 0; Eq < 3; Eq++) gq.position[Eq] = aq.t.targetBlock(qq, 0, Eq), gq.normal[Eq] = aq.t.targetNormal(qq, 0, Eq), gq.MV[Eq] = aq.t.targetAdjacent(qq, 0, Eq)
        }
      }
      despawned(qq) {
        const Eq = this.positions.get(qq);
        Eq && !this.api.isLocal(qq) && (Eq.fill(NaN), this.positions.delete(qq))
      }
    }
    var jY = gq(40359),
      HY = gq(40343),
      oY = gq(36841);
    const PY = 1,
      QY = 2;
    class yY {
      constructor() {
        this.game = new oY.f, this.client = new oY.f, this.Fc = 0, this.movesFly = null
      }
      setGame(qq) {
        if (null === qq || "object" !== typeof qq) return !1;
        const {
          key: Eq,
          value: gq
        } = qq;
        return "string" === typeof Eq && (this.game.setBooleanType(Eq, Boolean(gq)), !0)
      }
      setClient(qq, Eq) {
        this.client.setBooleanType(qq, Eq)
      }
      clearGame() {
        this.game = new oY.f, this.movesFly = null
      }
      setMovesFly(qq) {
        this.movesFly = qq
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? PY : 0) | (this.client._getTotalBooleanVal() ? QY : 0)
      }
      write(qq) {
        const Eq = this.perms(),
          {
            movesFly: gq
          } = this;
        if (Eq === this.Fc && null === gq) return !0;
        let Yq = aq.Vb.Keep;
        return null !== gq && (Yq = gq ? aq.Vb.On : aq.Vb.Off), !(!qq || !(0, aq.ye)(qq, 0, Yq, Eq, gq ? 1 : 0)) && (this.Fc = Eq, this.movesFly = null, !0)
      }
    }
    class tY {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = qq, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: xq.c,
          get y() {
            return Eq()
          }
        }
      }
      get hasView() {
        const qq = this.api.apiView,
          Eq = aq.t.viewProj;
        return 0 !== Eq(qq, 0, 3) || 0 !== Eq(qq, 0, 7) || 0 !== Eq(qq, 0, 11) || 0 !== Eq(qq, 0, 15)
      }
      get cameraPosition() {
        const qq = this.api.apiView,
          {
            eye: Eq
          } = this;
        for (let gq = 0; gq < 3; gq++) Eq[gq] = aq.t.eye(qq, 0, gq);
        return Eq
      }
      get cameraDirection() {
        const qq = this.api.apiView,
          Eq = aq.t.viewProj,
          gq = Eq(qq, 0, 3),
          Yq = Eq(qq, 0, 7),
          lq = Eq(qq, 0, 11),
          Oq = Math.hypot(gq, Yq, lq),
          {
            forward: mq
          } = this;
        return Oq > 0 && (mq[0] = gq / Oq, mq[1] = Yq / Oq, mq[2] = lq / Oq), mq
      }
      get cameraHeading() {
        return aq.t.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return aq.t.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return aq.t.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return aq.t.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(qq) {
        this.clip(qq);
        const {
          clipX: Eq,
          clipY: gq,
          clipW: Yq
        } = this;
        if (Yq > 0) {
          const qq = Eq / Yq * 50,
            lq = -gq / Yq * 50;
          return Math.abs(qq) <= this.screenBandPct.x && Math.abs(lq) <= this.screenBandPct.y ? {
            x: 50 + qq,
            y: 50 + lq
          } : this.clampToBand(qq, lq)
        }
        const lq = this.cameraPosition,
          Oq = Math.hypot(qq[0] - lq[0], qq[1] - lq[1], qq[2] - lq[2]),
          mq = this.api.apiView,
          xq = aq.t.viewProj,
          Aq = Oq > 0 ? Eq / Oq : 0,
          cq = Oq > 0 ? -gq / Oq : 0,
          uq = Math.hypot(xq(mq, 0, 1), xq(mq, 0, 5), xq(mq, 0, 9)),
          Bq = Aq / Math.hypot(xq(mq, 0, 0), xq(mq, 0, 4), xq(mq, 0, 8)),
          Wq = cq / uq,
          Nq = !(Math.abs(Bq) >= .001 || Math.abs(Wq) >= .001);
        return this.clampToBand(Aq, Nq ? -(uq || 1) : cq)
      }
      projectDirectionToScreenPos(qq) {
        if (!this.hasView) return;
        const Eq = this.cameraPosition,
          gq = this.along;
        for (let Yq = 0; Yq < 3; Yq++) gq[Yq] = Eq[Yq] + 10 * qq[Yq];
        return this.projectWorldPosToScreenPos(gq)
      }
      projectWorldPosToViewport(qq) {
        this.clip(qq);
        const {
          clipX: Eq,
          clipY: gq,
          clipW: Yq
        } = this;
        return Yq > 0 ? {
          x: 50 + Eq / Yq * 50,
          y: 50 - gq / Yq * 50
        } : null
      }
      clip(qq) {
        const Eq = this.api.apiView,
          gq = qq[0] - aq.t.origin(Eq, 0, 0),
          Yq = qq[1] - aq.t.origin(Eq, 0, 1),
          lq = qq[2] - aq.t.origin(Eq, 0, 2),
          Oq = aq.t.viewProj;
        this.clipX = Oq(Eq, 0, 0) * gq + Oq(Eq, 0, 4) * Yq + Oq(Eq, 0, 8) * lq + Oq(Eq, 0, 12), this.clipY = Oq(Eq, 0, 1) * gq + Oq(Eq, 0, 5) * Yq + Oq(Eq, 0, 9) * lq + Oq(Eq, 0, 13), this.clipW = Oq(Eq, 0, 3) * gq + Oq(Eq, 0, 7) * Yq + Oq(Eq, 0, 11) * lq + Oq(Eq, 0, 15)
      }
      clampToBand(qq, Eq) {
        return (0, xq.e)(qq, Eq, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var rY = gq(4629);
    const vY = new TextEncoder,
      hY = new Uint8Array(aq.P * aq.L);
    class nY {
      constructor() {
        this.buttons = [], this.Fc = !0
      }
      set(qq) {
        this.buttons = qq, this.Fc = !1
      }
      attached() {
        this.Fc = 0 === this.buttons.length
      }
      write(qq) {
        if (this.Fc) return;
        const Eq = new Uint8Array(aq.P),
          gq = new Uint8Array(aq.P);
        let Yq = 0,
          lq = 0;
        for (const {
            id: Oq,
            keycode: mq
          }
          of this.buttons) {
          if (Yq === aq.P) break;
          const {
            read: qq,
            written: xq
          } = vY.encodeInto(Oq, hY.subarray(lq, lq + aq.L));
          if (qq < Oq.length) continue;
          const Aq = rY.l[mq];
          Eq[Yq] = "number" === typeof Aq ? Aq : 0, gq[Yq] = xq, Yq++, lq += xq
        }
        this.Fc = (0, aq.ne)(qq, 0, Yq, Eq, gq, hY.subarray(0, lq))
      }
    }

    function bY(qq, Eq, gq) {
      const Yq = vY.encode(Eq);
      return Yq.length <= aq.L && function(qq, Eq, gq, Yq) {
        return (0, FE.b)(), (0, aq.tf)(qq, Eq, gq, Yq)
      }(qq, 0, gq ? 1 : 0, Yq)
    }
    const iY = new TextDecoder,
      ZY = new TextEncoder,
      fY = new Uint8Array(0),
      MY = [0, 0, 0],
      TY = {
        off: aq.Rd.Off,
        key: aq.Rd.Key,
        touch: aq.Rd.Touch
      };
    class zY {
      constructor(qq) {
        var Eq;
        this.options = qq, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new nY, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new yY, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.SN = qq => {
          if ((0, Nq.k)(qq)) throw qq;
          this.onError(qq)
        }, this.api = qq.api, this.tables = qq.tables, this.onError = null !== (Eq = qq.onError) && void 0 !== Eq ? Eq : qq => {
          console.error("Error in client game callback", qq)
        }, this.renderFrame = new tY(this.api, qq.screenBandY), this.live = new dY(this.api), this.chunks = new xE(this.api.memory, (() => this.api.apiView)), this.items = new jg({
          api: this.api,
          tables: qq.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: qq.beforeOp
        });
        const gq = () => this.stopped() ? null : this.cmd,
          Yq = () => this.sessionLive;
        this.entityInfoWatch = new Fg({
          cmd: gq,
          onError: this.onError
        }), this.entityInfo = new sg({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Yq
        }), this.particles = new Tg({
          cmd: gq,
          isSessionLive: Yq,
          onError: this.onError
        }), this.clientApi = new Ag({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: qq.tables,
          cmd: gq,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Yq,
          beforeWrite: () => {
            var Eq;
            if (this.stopped()) return !1;
            const gq = this.generation;
            return !1 !== (null === (Eq = qq.beforeWrite) || void 0 === Eq ? void 0 : Eq.call(qq)) && gq === this.generation
          },
          playerDbId: () => {
            const qq = this.session;
            if (null === qq) throw new Error("No game session has started, so the local player has no DB id");
            return qq.playerDbId
          },
          playSound: qq.playSound,
          preloadSounds: qq.preloadSounds,
          setLocalOptions: qq.setLocalOptions,
          hasPackModel: qq.hasPackModel
        }), this.scriptedCamera = new Xq({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: qq.cameraScreen,
          showFacing: qq.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= WY(this.items, this.tables, (() => this.localPlayerAlive()), this.SN), this.itemSources
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
      clickCodeBlock(qq) {
        const Eq = this.sessionLive ? this.sendCmd() : null;
        return null !== Eq && (gq = Eq, Yq = 0, lq = qq[0], Oq = qq[1], mq = qq[2], (0, FE.b)(), (0, aq.ue)(gq, Yq, lq, Oq, mq));
        var gq, Yq, lq, Oq, mq
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(qq) {
        const Eq = this.liveCmd();
        return null === Eq ? (this.pendingZoom = qq, !1) : (this.pendingZoom = null, (0, aq.pg)(Eq, 0, qq, 1))
      }
      uL(qq) {
        const Eq = this.stopped() ? null : this.cmd;
        return null !== Eq && (0, aq.jg)(Eq, 0, qq ? 1 : 0)
      }
      respawn() {
        const qq = this.sessionLive ? this.sendCmd() : null;
        return null !== qq && (Eq = qq, gq = 0, (0, FE.b)(), (0, aq.Gf)(Eq, gq));
        var Eq, gq
      }
      bindCustomButtonKeys(qq) {
        this.customButtons.set(qq)
      }
      pressCustomButton(qq, Eq) {
        const gq = this.sessionLive ? this.sendCmd() : null;
        return null !== gq && bY(gq, qq, Eq)
      }
      padMove(qq, Eq, gq, Yq, lq, Oq) {
        const mq = this.liveCmd();
        return null !== mq && (0, aq._e)(mq, 0, qq, Eq, gq, Yq, lq, Oq)
      }
      thirdPersonFor(qq) {
        const Eq = this.liveCmd();
        return null !== Eq && (0, aq.tg)(Eq, 0, null !== qq && void 0 !== qq ? qq : 1 / 0)
      }
      send(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Yq && sE(Yq, gq ? Wq.vd : 0, qq, (0, Sq.h)(Eq))
      }
      socketAttached(qq) {
        this.openSocket = qq, this.socketLeftSinceAttach = !1
      }
      socketDetached(qq) {
        this.openSocket === qq && (this.openSocket = 0)
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
      attach(qq) {
        const Eq = () => qq.isStopped;
        this.stopped = Eq, this.cmd = qq.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const gq = this.api.apiView;
        this.overflowGen = aq.t.eventOverflowGen(gq, 0), this.resyncOwed = 0 !== aq.t.eventOverflowMask(gq, 0), qq.setGameHost(this), qq.setEventWalker((qq => {
          this.api.walk(qq, this, Eq)
        }))
      }
      watchPromptPick(qq) {
        this.promptWatch = qq, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : SY(aq.t.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? aq.xc.None : aq.t.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : aq.t.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === qq || qq >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, qq, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(qq) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(qq)
      }
      netEvent(qq) {
        "connection" === qq.type ? qq.phase === Wq.u.Activated && qq.conn !== this.activeConn && qq.conn > this.closedThrough ? (this.endSession(), this.activeConn = qq.conn, this.endGameGrants(), this.dropGameCamera()) : qq.phase !== Wq.u.Left && qq.phase !== Wq.u.Closed || qq.conn !== this.activeConn ? qq.phase === Wq.u.Resumed && 0 !== this.activeConn && qq.conn > this.closedThrough && (this.activeConn = qq.conn) : this.closeGame() : qq.conn === this.activeConn && 0 !== qq.conn && (qq.Hc === HY.t ? this.gunHit(qq.payload) : qq.Hc === Xg.ec.EditItemCraftingRecipes || qq.Hc === HY.K ? this.items.touch() : (this.serverOptions(qq), this.gameMessage(qq)));
        const Eq = this.options.onNetEvent;
        Eq && this.guard((() => {
          Eq(qq)
        }))
      }
      serverOptions(qq) {
        const Eq = this.options.serverOptions,
          gq = Eq ? this.decoded(wg, qq) : null;
        Eq && gq && this.guard((() => {
          Eq.applyNewClientOptions(gq)
        }))
      }
      gameMessage(qq) {
        let Eq = null;
        try {
          Eq = function(qq) {
            if ("message" !== qq.type || qq.Hc !== Xg.ec.GameCodeMessage || qq.payloadKind !== Wq.hc.Msgpack) return null;
            const Eq = (0, Sq.e)(qq.payload);
            if (null === Eq || "object" !== typeof Eq || "string" !== typeof Eq.messageType) throw new Error("GameCodeMessage without a messageType");
            return Eq
          }(qq)
        } catch (gq) {
          this.sessionLive && this.onError(gq)
        }
        if (Eq) {
          const {
            messageType: qq,
            data: gq
          } = Eq;
          if ((0, bq.h)(qq)) return void this.guard((() => {
            (0, bq.d)(qq, gq)
          }));
          "freeCamPerms" === qq && this.freeCam.setGame(gq) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Eq => {
            Eq.onReceivedMessageFromServer(qq, gq)
          }))
        }
      }
      decoded(qq, Eq) {
        try {
          return qq(Eq)
        } catch (gq) {
          return this.onError(gq), null
        }
      }
      setClientFreeCameraGrant(qq, Eq) {
        this.freeCam.setClient(qq, Eq), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(qq) {
        this.freeCam.setMovesFly(qq), this.writeFreeCam()
      }
      setBlockHighlight(qq) {
        this.highlight = qq, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const qq = this.liveCmd();
        if (null === qq || !this.highlightOwed) return;
        const Eq = this.highlight;
        this.highlightOwed = null === Eq ? !(0, aq.Ke)(qq, 0, MY, MY, 0) : !(0, aq.Ke)(qq, 0, Eq.pos, Eq.normal, 1)
      }
      localPlayerBound(qq) {
        var Eq, gq;
        if (0 === this.activeConn || this.sessionLive && qq === this.boundId) return;
        const Yq = this.sessionLive;
        let lq, Oq, mq, xq;
        this.endSession(), Yq && this.restartGameCamera();
        try {
          var Aq;
          this.session = null;
          const qq = this.options.sessionInfo(this.activeConn);
          if (this.session = qq, !qq) return;
          lq = qq.gameNameWithVariation, Oq = null !== (Aq = (0, hq.Tb)(lq)) && void 0 !== Aq ? Aq : void 0, mq = (0, nq.t)(qq.lobbyName), xq = (0, nq.N)(qq.lobbyName)
        } catch (Hq) {
          return void this.onError(Hq)
        }
        const cq = {
          localPlayerId: String(qq)
        };
        let uq = {},
          Bq = {};
        try {
          var Wq, Nq;
          uq = null !== (Wq = null === (Nq = this.options.gameFactory((0, hq.Yb)(lq))) || void 0 === Nq ? void 0 : Nq(xq, mq, Oq, cq)) && void 0 !== Wq ? Wq : {}
        } catch (Hq) {
          this.SN(Hq)
        }
        try {
          var aq, Vq;
          Bq = {
            ...null === (aq = (Vq = this.options).defaultPlugins) || void 0 === aq ? void 0 : aq.call(Vq, xq, mq, Oq, cq),
            ...uq.plugins
          }
        } catch (Hq) {
          this.SN(Hq)
        }
        const dq = [uq, ...Object.values(Bq)];
        this.owners = dq, this.tickers = dq.filter((qq => void 0 !== qq.SB)), this.renderers = dq.filter((qq => void 0 !== qq.onAfterRender)), this.receivers = dq.filter((qq => void 0 !== qq.onReceivedMessageFromServer)), this.writeAltVeto(dq), this.writeHooks(dq), this.writePublicLobby(xq), this.writeLocalDbId(null !== (Eq = null === (gq = this.session) || void 0 === gq ? void 0 : gq.playerDbId) && void 0 !== Eq ? Eq : null), this.boundId = qq, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(dq, (qq => {
          var Eq;
          null === (Eq = qq.onCreate) || void 0 === Eq || Eq.call(qq, this.clientApi)
        }));
        const jq = this.generation;
        setTimeout((() => {
          jq === this.generation && !0 === this.tables.getClientOption("creative") && BY(this.tables)
        }), 0)
      }
      chunkSlot(qq, Eq, gq, Yq, lq, Oq) {
        this.chunks.apply(qq, Eq, gq, Yq, lq, Oq)
      }
      entityAdded(qq) {
        var Eq;
        this.entityInfo.stale(qq), null === (Eq = this.options.replayEntities) || void 0 === Eq || Eq.entityAdded(qq)
      }
      entityInfoChanged(qq) {
        var Eq;
        this.entityInfo.stale(qq), null === (Eq = this.options.replayEntities) || void 0 === Eq || Eq.entityInfoChanged(qq)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const qq = performance.now();
          this.round(this.tickers, pY), (0, YY.e)(performance.now() - qq)
        }
      }
      afterWalk(qq) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const Eq = this.options.replayEntities;
        Eq && this.guard((() => {
          this.entityInfoWatch.want(Ug, Eq.wantsWatch), Eq.flush(this.entityInfoWatch.on)
        }));
        const gq = (0, YY.l)(qq, aq.t.frameMs(this.api.apiView, 0));
        if (null !== gq) {
          const qq = this.renderFrame;
          this.guard((() => {
            (0, Cg.d)().turnDamageIndicators(qq.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(gq)
          })), this.round(this.renderers, (Eq => {
            Eq.onAfterRender(gq, qq)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== gq)
        } catch (lq) {
          this.SN(lq)
        }
        this.showZoom(), this.items.flush(this.SN), this.writePromptWatch(), this.writeCustomButtons();
        const Yq = this.ticks;
        this.ticks = 0, (0, YY.h)(Yq, qq, gq, this.SN)
      }
      entityRemoved(qq) {
        this.live.despawned(qq), this.entityInfo.removed(qq)
      }
      ackEventOverflow() {
        const qq = this.api.apiView,
          Eq = aq.t.eventOverflowGen(qq, 0),
          gq = Eq - this.overflowGen >>> 0;
        if (0 === gq && !this.resyncOwed) return;
        this.overflowGen = Eq;
        const Yq = aq.t.eventOverflowMask(qq, 0),
          lq = this.cmd;
        0 === Yq || null === lq || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, aq.xe)(lq, 0, Yq);
        const Oq = this.options.onEventOverflow;
        0 !== gq && Oq && this.guard((() => {
          Oq(Yq, gq)
        }))
      }
      gameCall(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        if (qq === aq.nc.Director) try {
          return this.scriptedCamera.call(Eq, gq, Yq, lq, Oq, mq)
        } catch (cq) {
          return this.SN(cq), aq.nb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return qq === aq.nc.AltVeto ? aq.j.Allow : 0;
        try {
          return this.callGames(qq, Eq, gq, Yq, lq, Oq, mq, xq)
        } catch (cq) {
          throw (0, Nq.k)(cq) && (this.fault = cq), cq
        }
      }
      takeFault() {
        const qq = this.fault;
        return this.fault = void 0, qq
      }
      callGames(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Aq
        } = this.options, cq = String(this.boundId);
        switch (qq) {
          case aq.nc.AltVeto:
          case aq.nc.AltAction: {
            const xq = 0 !== mq,
              [uq, Bq, Wq] = xq ? [Eq, gq, Yq] : [void 0, void 0, void 0],
              Nq = xq ? Aq.nameOfId(lq) : "Air",
              Vq = SY(Oq);
            if (qq === aq.nc.AltAction) return this.first((qq => {
              var Eq;
              return null === (Eq = qq.onPlayerAltAction) || void 0 === Eq ? void 0 : Eq.call(qq, cq, uq, Bq, Wq, Nq, Vq)
            })), 0;
            const dq = this.first((qq => {
              var Eq;
              return null === (Eq = qq.onPlayerAttemptAltAction) || void 0 === Eq ? void 0 : Eq.call(qq, cq, uq, Bq, Wq, Nq, Vq)
            }));
            return "preventAction" === dq ? aq.j.Prevent : "preventPlacement" === dq ? aq.j.PreventPlacement : aq.j.Allow
          }
          case aq.nc.Click: {
            const qq = xq,
              uq = 0 !== (qq & aq.U.Alt),
              Bq = 0 !== (qq & aq.U.HasPos),
              Wq = Bq ? Aq.nameOfId(lq) : "Air",
              [Nq, Vq, dq] = Bq ? [Eq, gq, Yq] : [null, null, null],
              jq = SY(Oq),
              Hq = 0 !== (qq & aq.U.Up),
              oq = SY(mq);
            if (0 === (qq & aq.U.AttackOnly) && this.first((qq => {
                var Eq, gq;
                return Hq ? null === (Eq = qq.onPlayerClickUp) || void 0 === Eq ? void 0 : Eq.call(qq, cq, uq, Nq, Vq, dq, Wq, jq) : null === (gq = qq.onPlayerClick) || void 0 === gq ? void 0 : gq.call(qq, cq, uq, Nq, Vq, dq, Wq, jq)
              })), !Hq && !uq && null !== oq) {
              const qq = this.clientApi.getPositionView(oq),
                Eq = qq ? [qq[0], qq[1], qq[2]] : [0, 0, 0];
              this.first((qq => {
                var gq;
                return null === (gq = qq.onPlayerAttackEntity) || void 0 === gq ? void 0 : gq.call(qq, cq, oq, Eq)
              }))
            }
            return 0
          }
          case aq.nc.ChangeBlock: {
            const qq = Aq.nameOfId(lq),
              mq = Aq.nameOfId(Oq);
            return this.first((lq => {
              var Oq;
              return null === (Oq = lq.onPlayerChangeBlock) || void 0 === Oq ? void 0 : Oq.call(lq, cq, Eq, gq, Yq, qq, mq)
            })), 0
          }
          case aq.nc.DropItem: {
            const qq = Aq.nameOfId(Eq);
            return this.first((Eq => {
              var lq;
              return null === (lq = Eq.onPlayerDropItem) || void 0 === lq ? void 0 : lq.call(Eq, cq, qq, gq, Yq)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${qq}`)), 0
        }
      }
      changeBlockFail(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = lq === aq.ad ? null : iY.decode(this.api.eventBytes(Oq, Math.min(lq, mq)));
        this.failures.push({
          MO: [qq, Eq, gq],
          TO: Yq,
          zO: xq
        })
      }
      changeBlockFailEnd() {
        const qq = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Eq => {
          var gq;
          null === (gq = Eq.onChangeBlockFail) || void 0 === gq || gq.call(Eq, qq)
        })), this.TV("EditBoard", {
          pos: null
        }), this.TV("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(qq, Eq, gq, Yq, lq, Oq) {
        qq === aq.Cc.ChestOpened ? this.items.chestOpened(gq, Yq, lq) : qq !== aq.Cc.Synced && qq !== aq.Cc.ChestClosed && qq !== aq.Cc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(qq, Eq, gq, Yq) {
            switch (qq) {
              case aq.Cc.Synced:
                mq.i.TV("syncedInvenFromServer");
                break;
              case aq.Cc.ChestOpened:
              case aq.Cc.ChestClosed:
                mq.i.TV("chestToggleFromServer", qq === aq.Cc.ChestOpened, !0);
                break;
              case aq.Cc.ChestRefreshed:
                mq.i.TV("chestRefreshedFromServer");
                break;
              case aq.Cc.EnchantingTable:
                mq.i.TV("enchantingTable", {
                  lc: Yq,
                  position: gq
                });
                break;
              case aq.Cc.HotbarRequest:
                mq.i.TV("setSelectedInventorySlotI", Eq, !0);
                break;
              case aq.Cc.Scrolled:
                mq.i.TV("ScrollInventorySlot", Eq);
                break;
              case aq.Cc.NumberKey:
                mq.i.TV("numkeyPressed", Eq + 1);
                break;
              case aq.Cc.DropRequested:
                mq.i.TV("DropInvenItem", 0 !== Eq);
                break;
              default:
                throw new Nq.d(`InventoryEvent of no kind: what ${qq}`)
            }
          }(qq, Eq, [gq, Yq, lq], Oq)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(qq, Eq, gq, Yq) {
        this.TV("shotPlayer", {
          playerId: String(qq),
          damage: Eq,
          wasCrit: 0 !== Yq,
          distance: gq
        })
      }
      localHurt(qq, Eq) {
        this.TV("closeShopOnDamaged", null), this.guard((() => {
          mq.i.TV("damagedByOtherPlayer", {
            jY: null,
            direction: Number.isNaN(Eq) ? null : Eq,
            Mq: qq
          })
        }))
      }
      attackHit(qq, Eq, gq, Yq, lq) {
        this.guard((() => {
          mq.i.TV("yourAttackHit", {
            vq: Yq,
            screenPos: this.renderFrame.projectDirectionToScreenPos([qq, Eq, gq]),
            hitSelf: lq
          })
        }))
      }
      physicsType(qq) {
        this.TV("PlayerPhysicsTypeUpdate", qq)
      }
      vehicleEffect(qq, Eq, gq, Yq, lq) {
        this.guard((() => {
          qq === Wq.Kd.UPDATE ? (0, Zq.h)(Eq, {
            icon: gq,
            level: Yq,
            displayName: null,
            durationMs: lq
          }) : iq.b.remove(Eq)
        }))
      }
      zoomChanged(qq) {
        this.zoom = qq, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.TV("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const qq = this.scriptedCamera.holdsView();
        !this.zoomUnshown || qq && this.zoomHeld || (this.zoomUnshown = !1, this.TV("cameraZoomSet", this.zoom)), this.zoomHeld = qq
      }
      gunHit(qq) {
        this.guard((() => {
          const {
            jY: Eq,
            HY: gq
          } = (0, jY.e)(HY.t, qq);
          mq.i.TV("damagedByOtherPlayer", {
            jY: Eq,
            direction: gq
          })
        }))
      }
      uiEvent(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        this.guard((() => {
          Ig(qq, Eq, [gq, Yq, lq], Oq, this.items, this.options.tables, (() => iY.decode(this.api.eventBytes(mq, xq))))
        }))
      }
      writeAltVeto(qq) {
        const Eq = this.cmd;
        if (!Eq) return;
        let gq;
        try {
          gq = function(qq, Eq) {
            const gq = new Set;
            let Yq = !1;
            for (const lq of qq)
              if (lq.onPlayerAttemptAltAction) {
                if (Yq = !0, !lq.altVetoBlocks) return {
                  mode: aq.ke.All,
                  roots: []
                };
                for (const qq of lq.altVetoBlocks) gq.add(Eq.getMetaInfo(qq).rootId)
              } return Yq ? gq.size > aq.Pc ? {
              mode: aq.ke.All,
              roots: []
            } : {
              mode: aq.ke.Filter,
              roots: [...gq]
            } : {
              mode: aq.ke.Off,
              roots: []
            }
          }(qq, this.options.tables)
        } catch (lq) {
          this.onError(lq), gq = {
            mode: aq.ke.All,
            roots: []
          }
        }
        if (gq.mode === aq.ke.Off && !this.vetoSet) return;
        const Yq = new Uint8Array(new Uint32Array(gq.roots).buffer);
        (0, aq.Of)(Eq, 0, gq.mode, gq.roots.length, Yq) ? this.vetoSet = gq.mode !== aq.ke.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(qq) {
        const Eq = this.cmd;
        if (!Eq) return;
        const gq = function(qq) {
          let Eq = 0;
          for (const gq of qq) gq.onPlayerAltAction && (Eq |= 1 << aq.nc.AltAction), (gq.onPlayerClick || gq.onPlayerClickUp || gq.onPlayerAttackEntity) && (Eq |= 1 << aq.nc.Click), gq.onPlayerChangeBlock && (Eq |= 1 << aq.nc.ChangeBlock), gq.onPlayerDropItem && (Eq |= 1 << aq.nc.DropItem);
          return Eq
        }(qq);
        (0 !== gq || this.hooksSet) && ((0, aq.Zf)(Eq, 0, gq) ? this.hooksSet = 0 !== gq : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const qq = this.cmd;
        qq && !this.stopped() && this.customButtons.write(qq)
      }
      writePromptWatch() {
        const qq = this.cmd,
          Eq = this.promptWatch;
        Eq !== this.promptWatchSent && qq && !this.stopped() && (0, aq.yg)(qq, 0, TY[Eq]) && (this.promptWatchSent = Eq)
      }
      writePublicLobby(qq) {
        const Eq = this.cmd;
        Eq && qq !== this.writtenPublicLobby && ((0, aq.ng)(Eq, 0, qq ? 1 : 0) ? this.writtenPublicLobby = qq : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(qq) {
        const Eq = this.cmd;
        Eq && ((0, aq.bg)(Eq, 0, null === qq ? 0 : 1, null === qq ? fY : ZY.encode(qq)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(qq) {
        const Eq = this.generation;
        for (const Yq of this.owners) {
          if (Eq !== this.generation) break;
          try {
            const Eq = qq(Yq);
            if (void 0 !== Eq) return Eq
          } catch (gq) {
            this.SN(gq)
          }
        }
      }
      TV(qq, Eq) {
        this.guard((() => {
          mq.i.TV(qq, Eq)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (qq) {
          this.SN(qq)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (qq) {
          this.SN(qq)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const qq = this.owners;
        let Eq;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Yq) {
          Eq = Yq
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Yq) {
          Eq ??= Yq
        }
        this.round(qq, GY, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Yq) {
          Eq ??= Yq
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Yq) {
          Eq ??= Yq
        }
        const gq = this.options.onSessionEnd;
        if (gq) try {
          gq()
        } catch (Yq) {
          this.onError(Yq)
        }
        void 0 !== Eq && this.SN(Eq)
      }
      round(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = this.generation;
        for (const Oq of qq) {
          if (Yq !== this.generation) break;
          try {
            Eq(Oq)
          } catch (lq) {
            gq ? this.onError(lq) : this.SN(lq)
          }
        }
      }
      guard(qq) {
        try {
          qq()
        } catch (Eq) {
          this.SN(Eq)
        }
      }
    }

    function SY(qq) {
      return qq === aq.dd ? null : String(qq)
    }

    function pY(qq) {
      qq.SB(Wq.Bd)
    }

    function GY(qq) {
      var Eq;
      null === (Eq = qq.onClose) || void 0 === Eq || Eq.call(qq)
    }

    function LY(qq, Eq) {
      qq.watch((() => {
        const gq = function(qq) {
          const Eq = [],
            gq = Math.min(lY, qq.length);
          for (let lq = 0; lq < gq; lq++) {
            var Yq;
            const gq = null === (Yq = qq.slot(lq)) || void 0 === Yq ? void 0 : Yq.typeObj,
              Oq = gq ? (0, gY.gunTypeOf)(gq.id) : void 0;
            void 0 !== Oq && Eq.push(oE[Oq])
          }
          return Eq
        }(qq);
        gq.length > 0 && (Eq.preload(gq), Eq.preload([PE]))
      }))
    }
    var JY = gq(36493),
      kY = gq(4684),
      RY = gq(36796),
      UY = gq(36821);

    function FY(qq) {
      const Eq = (0, JY.countDecodesAs)(new kY.Howl({
          ...(0, RY.g)(qq),
          pool: 15,
          preload: !1
        }), "sheet"),
        gq = Eq.load.bind(Eq);
      return Eq.load = () => (Eq._preload = !0, (0, UY.c)(qq), gq()), Eq
    }

    function sY(qq, Eq, gq) {
      const Yq = qq.listener;
      if (Yq.positionX) XY(Yq.positionX, Eq, gq, 0), XY(Yq.positionY, Eq, gq, 1), XY(Yq.positionZ, Eq, gq, 2), XY(Yq.forwardX, Eq, gq, 3), XY(Yq.forwardY, Eq, gq, 4), XY(Yq.forwardZ, Eq, gq, 5), XY(Yq.upX, Eq, gq, 6), XY(Yq.upY, Eq, gq, 7), XY(Yq.upZ, Eq, gq, 8);
      else {
        let qq = !1;
        for (let Yq = 0; Yq < 9; Yq++) qq ||= Eq[Yq] !== gq[Yq];
        qq && (Yq.setPosition(Eq[0], Eq[1], Eq[2]), Yq.setOrientation(Eq[3], Eq[4], Eq[5], Eq[6], Eq[7], Eq[8]), gq.set(Eq))
      }
    }

    function XY(qq, Eq, gq, Yq) {
      Eq[Yq] !== gq[Yq] && (qq.value = Eq[Yq], gq[Yq] = Eq[Yq])
    }
    class wY {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(qq) {
        this.pose.set(qq);
        const Eq = kY.Howler.ctx;
        return !!Eq && (Eq !== this.watchedCtx && (this.watchedCtx = Eq, this.written.fill(Number.NaN), Eq.addEventListener("statechange", (() => {
          "running" === Eq.state && sY(Eq, this.pose, this.written)
        }))), "running" === Eq.state && sY(Eq, qq, this.written), !0)
      }
    }
    var KY = gq(36619),
      CY = gq(39155);
    let IY = null,
      eY = null;

    function DY() {
      return null === IY && (IY = document.createElement("div"), IY.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(IY)), IY
    }

    function ql() {
      return eY ??= new CY.c(new KY.e(DY)), eY
    }

    function El() {
      var qq;
      null === (qq = eY) || void 0 === qq || qq.clear(), gl(null)
    }

    function gl(qq) {
      Yq.b.get("scriptedCameraFacing") !== qq && Yq.b.set({
        scriptedCameraFacing: qq
      })
    }
    var Yl = gq(9464),
      ll = gq(9433),
      Ol = gq(39174),
      ml = gq(40466),
      xl = gq(3166);
    const Al = Object.entries(aq.jc).reduce(((qq, Eq) => {
      let [gq, Yq] = Eq;
      return qq[Yq] = gq, qq
    }), []);

    function cl(qq, Eq) {
      var gq;
      return 0 !== ((null !== (gq = qq.itemFlags[Eq]) && void 0 !== gq ? gq : 0) & aq.Gc.Stackable)
    }
    const ul = /^(0|[1-9][0-9]*)$/,
      Bl = {
        displayName: (qq, Eq) => (0, gY.displayNameOf)(Eq),
        description: (qq, Eq) => (0, gY.descriptionOf)(Eq),
        type: (qq, Eq) => (0, gY.itemTypeOf)(Eq),
        clipSize: (qq, Eq) => (0, gY.clipSizeOf)(Eq),
        armourReduction: (qq, Eq) => (0, gY.armourReductionOf)(Eq),
        scopeType: (qq, Eq) => (0, gY.scopeTypeOf)(Eq),
        stackable: cl,
        harvestType: (qq, Eq) => Al[qq.blockHarvestTypes[Eq]],
        harvestLevel: (qq, Eq) => {
          const gq = qq.blockHarvestLevels[Eq];
          return gq === aq.Kc ? void 0 : gq
        },
        harvests: (qq, Eq) => {
          var gq;
          const Yq = null !== (gq = qq.itemHarvests[Eq]) && void 0 !== gq ? gq : 0;
          return 0 !== Yq ? Al[Yq] : void 0 === (0, gY.harvestsNullLevelOf)(Eq) ? void 0 : null
        },
        level: (qq, Eq) => {
          var gq, Yq;
          const lq = null !== (gq = qq.itemLevels[Eq]) && void 0 !== gq ? gq : aq.Kc;
          return lq !== aq.Kc ? lq : null !== (Yq = (0, gY.harvestsNullLevelOf)(Eq)) && void 0 !== Yq ? Yq : void 0
        }
      };

    function Wl(qq, Eq, gq) {
      return al(new Uint8Array(Math.floor(qq.length / Eq)), qq, Eq, gq)
    }

    function Nl(qq, Eq, gq) {
      return al(new Uint16Array(Math.floor(qq.length / Eq)), qq, Eq, gq)
    }

    function al(qq, Eq, gq, Yq) {
      const lq = new DataView(Eq.buffer, Eq.byteOffset, Eq.byteLength);
      for (let Oq = 0; Oq < qq.length; Oq++) qq[Oq] = Yq(lq, Oq * gq);
      return qq
    }
    class Vl {
      constructor(qq, Eq) {
        this.options = Eq, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = qq => {
          const Eq = this.idOf(qq);
          if (void 0 === Eq) throw new Error(`No item is named ${qq}, an item's root`);
          return Eq
        };
        const gq = Eq => {
            const gq = Eq();
            return new Uint8Array(qq.memory().buffer, qq.scratch(), gq).slice()
          },
          Yq = (new TextDecoder).decode(gq((() => qq.queries.itemNames()))).split("\n"),
          lq = gq((() => qq.queries.blockProps())),
          Oq = gq((() => qq.queries.itemProps()));
        this.props = {
          blockFlags: Wl(lq, aq.y.BYTES, aq.y.flags),
          blockHarvestTypes: Wl(lq, aq.y.BYTES, aq.y.harvestType),
          blockHarvestLevels: Wl(lq, aq.y.BYTES, aq.y.harvestLevel),
          blockAttachedTops: Nl(lq, aq.y.BYTES, aq.y.attachedTop),
          itemFlags: Wl(Oq, aq.Ic.BYTES, aq.Ic.flags),
          itemHarvests: Wl(Oq, aq.Ic.BYTES, aq.Ic.harvests),
          itemLevels: Wl(Oq, aq.Ic.BYTES, aq.Ic.level)
        }, (0, xl.m)(Object.freeze(Yq)), (0, ml.f)()
      }
      idOf(qq) {
        if ("number" === typeof qq) return void 0 === (0, xl.h)(qq) ? void 0 : qq;
        const Eq = (0, xl.e)(qq);
        return void 0 === Eq && ul.test(qq) ? void 0 === (0, xl.h)(+qq) ? void 0 : +qq : Eq
      }
      getMetaInfo(qq) {
        if (!qq || qq === Yl.b) return Yl.d;
        const Eq = this.idOf(qq);
        if (void 0 === Eq) throw new Error(`Item ${qq} not found in registry`);
        return this.metaOf(Eq)
      }
      blockRootId(qq) {
        return 0 !== qq && void 0 !== (0, xl.h)(qq) ? this.metaOf(qq).rootId : qq
      }
      metaOf(qq) {
        return this.metas[qq] ??= (0, ll.k)((0, xl.h)(qq), qq, this.rootIdOf, (0, gY.rootMetaDescOf)(qq))
      }
      getItemId(qq) {
        if (!qq || qq === Yl.b) return 0;
        const Eq = this.idOf(qq);
        if (void 0 === Eq) throw new Error(`Invalid block name. You sent ${qq}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Eq
      }
      getItemName(qq) {
        if (!qq || qq === Yl.b) return Yl.b;
        const Eq = this.idOf(qq);
        if (void 0 === Eq) throw new Error(`Item ${qq} not found in registry`);
        return (0, xl.h)(Eq)
      }
      blockNameToBlockId(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (qq === Yl.b) return 0;
        let gq = this.idOf(qq);
        if (void 0 === gq || !this.isBlockId(gq)) {
          const Eq = qq.indexOf("|"),
            Yq = Eq > 0 ? (0, xl.e)(qq.slice(0, Eq)) : void 0;
          gq = void 0 !== Yq && this.isBlockId(Yq) && (0, gY.rootMetaDescOf)(Yq) === qq ? Yq : void 0
        }
        if (void 0 !== gq) return gq;
        if (!Eq) throw new Error(`Invalid block name. You sent ${qq}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(qq) {
        return qq > 0 && qq < this.props.blockFlags.length
      }
      nameOfId(qq) {
        return 0 !== qq && (0, xl.h)(qq) || Yl.b
      }
      itemType(qq) {
        const Eq = qq ? this.idOf(qq) : void 0;
        if (!Eq) return null;
        let gq = this.types.get(Eq);
        return void 0 === gq && (gq = Object.freeze({
          id: Eq,
          name: (0, xl.h)(Eq),
          meta: this.getMetaInfo(Eq),
          stackable: cl(this.props, Eq),
          type: (0, gY.itemTypeNameOf)(Eq),
          clipSize: (0, gY.clipSizeOf)(Eq),
          scopeType: (0, gY.scopeTypeOf)(Eq),
          showsAimingUi: (0, gY.showsAimingUi)(Eq)
        }), this.types.set(Eq, gq)), gq
      }
      getItemStat(qq, Eq) {
        if (Ol.b.has(Eq)) {
          const gq = "minChargeStateToUse" === Eq ? this.getMetaInfo(qq).rootName : this.getItemName(qq),
            Yq = this.options.get((0, Ol.c)(gq, Eq));
          if (null !== Yq && void 0 !== Yq) return Yq
        }
        return this.defaultStat(qq, Eq, this.statOf(Eq))
      }
      getDisplayName(qq) {
        return this.getItemStat(qq, "displayName")
      }
      getDefaultItemStat(qq, Eq) {
        return this.defaultStat(qq, Eq, this.statOf(Eq))
      }
      statOf(qq) {
        const Eq = Bl[qq];
        return void 0 === Eq && function(qq, Eq) {
          throw new Error(`ClientApi.${qq} is not available yet in the wasm client (${Eq})`)
        }(`getItemStat("${qq}")`, `a table of the stat: the wasm client answers ${Object.keys(Bl).join(", ")}`), Eq
      }
      defaultStat(qq, Eq, gq) {
        const Yq = this.idOf(qq),
          lq = void 0 === Yq ? void 0 : gq(this.props, Yq);
        return null !== lq && void 0 !== lq || "displayName" !== Eq ? lq : this.getItemName(qq)
      }
      getClientOption(qq) {
        return this.options.get(qq)
      }
      getGunStats(qq) {
        return this.getClientOption(`${qq}GunStats`)
      }
      watchClientOption(qq, Eq) {
        return this.options.subscribe(qq, Eq)
      }
      isSolidBlockId(qq) {
        var Eq;
        return 0 !== ((null !== (Eq = this.props.blockFlags[qq]) && void 0 !== Eq ? Eq : 0) & aq.x.Solid)
      }
      isStackableId(qq) {
        return cl(this.props, qq)
      }
      isFluidBlockId(qq) {
        var Eq;
        return 0 !== ((null !== (Eq = this.props.blockFlags[qq]) && void 0 !== Eq ? Eq : 0) & aq.x.Fluid)
      }
      canPlaceOverBlockId(qq) {
        var Eq;
        return 0 !== ((null !== (Eq = this.props.blockFlags[qq]) && void 0 !== Eq ? Eq : 0) & aq.x.PlaceOver)
      }
      attachedTopOf(qq) {
        var Eq;
        return null !== (Eq = this.props.blockAttachedTops[qq]) && void 0 !== Eq ? Eq : 0
      }
      isDroplessBlockId(qq) {
        return (0, gY.dropsNothing)(qq)
      }
    }

    function dl(qq, Eq) {
      const gq = new Map;
      return (Yq, lq) => {
        const Oq = Eq.idOf(Yq),
          mq = void 0 === Oq ? null : (Yq => {
            let lq = gq.get(Yq);
            if (void 0 === lq) {
              const Oq = qq.queries.salvageRecipe(Yq),
                mq = new DataView(qq.memory().buffer, qq.scratch(), Oq),
                xq = [];
              for (let qq = 0; qq + aq.be.BYTES <= Oq; qq += aq.be.BYTES) xq.push(Object.freeze({
                item: Eq.nameOfId(aq.be.item(mq, qq)),
                amt: aq.be.amount(mq, qq)
              }));
              lq = 0 === xq.length ? null : Object.freeze(xq), gq.set(Yq, lq)
            }
            return lq
          })(Oq);
        if (null === mq || void 0 === lq) return mq;
        const xq = lq <= 0 ? 1 : lq;
        return mq.map((qq => {
          let {
            item: Eq,
            amt: gq
          } = qq;
          return {
            item: Eq,
            amt: gq * xq
          }
        }))
      }
    }
    var jl = gq(40659),
      Hl = gq(37004),
      ol = gq(36989),
      Pl = gq(37033),
      Ql = gq(36543),
      yl = gq(40409),
      tl = gq(42344);
    const rl = -1,
      vl = new Uint8Array(0),
      hl = new TextEncoder;

    function nl(qq) {
      if (null === qq) return null;
      const Eq = hl.encode(qq);
      return Eq.byteLength < Wq.Kc ? Eq : Eq.subarray(0, Wq.Kc - 1)
    }
    class bl {
      constructor(qq) {
        this.deps = qq, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = rl, this.keyframesSettled = !1, this.reloadFrom = rl
      }
      reloadKeyframes() {
        var qq, Eq;
        this.keyframesVersion = rl, this.reloadFrom = null !== (qq = null === (Eq = this.view()) || void 0 === Eq ? void 0 : Eq.version) && void 0 !== qq ? qq : rl
      }
      setPlayback(qq) {
        const Eq = 1 === this.deps.core.Xlq(qq);
        return Eq && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = rl, this.reloadFrom = rl), Eq
      }
      async open(qq) {
        const Eq = await this.deps.replay.open(qq);
        return "opening" === Eq && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Eq
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(qq)), Eq)
      }
      setSpeed(qq) {
        this.deps.replay.setSpeed(qq)
      }
      setCameraMode(qq) {
        this.deps.replay.setCameraMode(tl.e.indexOf(qq))
      }
      view() {
        var qq;
        const Eq = aq.t.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Eq) return this.lastView = null, null;
        const gq = new DataView(this.deps.buffer(), Eq, aq.Td.BYTES),
          Yq = aq.Td.version(gq, 0),
          lq = this.lastView;
        if (null !== lq && lq.version === Yq) return lq;
        const Oq = aq.Td.markIn(gq, 0),
          mq = {
            version: Yq,
            state: aq.Td.state(gq, 0),
            cameraMode: null !== (qq = tl.e[aq.Td.cameraMode(gq, 0)]) && void 0 !== qq ? qq : "recording",
            SB: aq.Td.SB(gq, 0),
            totalTicks: aq.Td.totalTicks(gq, 0),
            speed: aq.Td.speed(gq, 0),
            mark: Oq === aq.Sd ? null : {
              inTick: Oq,
              outTick: aq.Td.markOut(gq, 0)
            },
            editVersion: aq.Td.editVersion(gq, 0)
          };
        return this.lastView = mq, mq
      }
      keyframes() {
        const qq = this.view();
        if (null === qq) return [];
        qq.version !== this.reloadFrom && (this.reloadFrom = rl);
        const Eq = this.reloadFrom === rl && qq.state !== Wq.rd.Cropping && qq.state !== Wq.rd.None,
          gq = Eq ? qq.editVersion : qq.version;
        if (gq === this.keyframesVersion && Eq === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Yq
        } = this.deps, lq = Yq.wlq(), Oq = Yq.yd(), mq = [];
        if (0 !== Oq && lq > 0) {
          const qq = new DataView(this.deps.buffer(), Oq, lq * Wq.uc);
          for (let Eq = 0; Eq < lq; Eq++) {
            const gq = Eq * Wq.uc,
              Yq = Eq => qq.getFloat64(gq + Eq, !0);
            mq.push({
              SB: qq.getUint32(gq + Wq.Ic, !0),
              position: [Yq(Wq.Ec), Yq(Wq.Ec + 8), Yq(Wq.Ec + 16)],
              direction: [Yq(Wq.xc), Yq(Wq.xc + 8), Yq(Wq.xc + 16)],
              easing: [Yq(Wq.Ac), Yq(Wq.Ac + 8), Yq(Wq.Ac + 16), Yq(Wq.Ac + 24)]
            })
          }
        }
        return this.keyframesVersion = gq, this.keyframesSettled = Eq, this.lastKeyframes = mq, mq
      }
      addKeyframe() {
        const qq = this.deps.apiView(),
          Eq = [aq.t.eye(qq, 0, 0), aq.t.eye(qq, 0, 1), aq.t.eye(qq, 0, 2)];
        return this.deps.replay.addKeyframe(Eq, function(qq, Eq) {
          const gq = Math.cos(Eq);
          return [gq * Math.sin(qq), -Math.sin(Eq), gq * Math.cos(qq)]
        }(aq.t.heading(qq, 0), aq.t.pitch(qq, 0)))
      }
      setKeyframe(qq) {
        return this.deps.replay.setKeyframe(qq.SB, Float64Array.from([...qq.position, ...qq.direction, ...qq.easing]))
      }
      moveKeyframe(qq, Eq) {
        return this.deps.replay.moveKeyframe(qq, Eq)
      }
      deleteKeyframes(qq, Eq) {
        return this.deps.replay.deleteKeyframes(qq, Eq)
      }
      setMark(qq) {
        var Eq, gq;
        return this.deps.replay.setMark(null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.inTick) && void 0 !== Eq ? Eq : -1, null !== (gq = null === qq || void 0 === qq ? void 0 : qq.outTick) && void 0 !== gq ? gq : -1)
      }
      crop(qq, Eq) {
        const gq = this.deps.replay.crop(qq, Eq);
        return gq && this.reloadKeyframes(), gq
      }
      save(qq) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(qq)
      }
      recorderControl(qq) {
        this.deps.recorder.control(qq)
      }
      recorderPrefs(qq, Eq) {
        this.deps.recorder.prefs(qq, Eq)
      }
      recorderOption(qq, Eq) {
        const gq = this.deps.cmd();
        return null !== gq && (0, aq.Cf)(gq, 0, qq, null === Eq ? vl : hl.encode(Eq))
      }
      recordFlyingText(qq, Eq, gq, Yq) {
        const lq = this.deps.cmd(),
          Oq = Math.max(0, Math.min(4294967295, Math.round(Yq)));
        return null !== lq && (0, aq.xf)(lq, 0, Eq, gq, Oq, hl.encode(qq))
      }
      recordPlayerKilled(qq, Eq, gq, Yq) {
        const lq = this.deps.cmd();
        return null !== lq && (0, aq.Df)(lq, 0, qq, Eq, Math.max(0, gq), hl.encode(Yq))
      }
      recordKillfeed(qq, Eq, gq) {
        var Yq, lq;
        const Oq = this.deps.cmd(),
          mq = function(qq) {
            const Eq = qq.reduce(((qq, Eq) => {
                var gq;
                return qq + Xg.mb + (null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.byteLength) && void 0 !== gq ? gq : 0)
              }), 0),
              gq = new Uint8Array(Eq),
              Yq = new DataView(gq.buffer);
            let lq = 0;
            for (const mq of qq) {
              var Oq;
              Yq.setUint16(lq, null !== (Oq = null === mq || void 0 === mq ? void 0 : mq.byteLength) && void 0 !== Oq ? Oq : Wq.Kc, !0), lq += Xg.mb, null !== mq && (gq.set(mq, lq), lq += mq.byteLength)
            }
            return gq
          }([nl(qq.name), nl(qq.colour), nl(Eq.name), nl(Eq.colour), nl(gq)]);
        return null !== Oq && (0, aq.Bf)(Oq, 0, null !== (Yq = qq.id) && void 0 !== Yq ? Yq : aq.gd, null !== (lq = Eq.id) && void 0 !== lq ? lq : aq.gd, mq)
      }
      recorderSession(qq, Eq) {
        this.deps.recorder.session({
          session: Eq,
          lobbyType: qq.lobbyType,
          game: qq.gameNameWithVariation,
          lobby: qq.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.Klq()
      }
      filePartDone(qq, Eq) {
        this.deps.recorder.filePartDone(qq, Eq)
      }
      fileDone(qq) {
        this.deps.recorder.fileDone(qq)
      }
    }
    const il = -2147483648;
    class Zl {
      constructor(qq) {
        var Eq;
        this.deps = qq, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Eq = qq.now) && void 0 !== Eq ? Eq : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var qq, Eq, gq;
        return null === (qq = null === (Eq = (gq = this.deps).live) || void 0 === Eq ? void 0 : Eq.call(gq)) || void 0 === qq || qq
      }
      activated(qq) {
        var Eq, gq;
        this.live && (this.viewerShown(!0 === (null === (Eq = (gq = this.deps).viewerOpen) || void 0 === Eq ? void 0 : Eq.call(gq))), this.deps.client.recorderSession(qq, (0, tl.i)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var qq, Eq;
        this.live && (this.state.recording || !0 !== (null === (qq = (Eq = this.deps).viewerOpen) || void 0 === qq ? void 0 : qq.call(Eq))) ? this.deps.client.recorderControl(Wq._c.ToggleRecording) : this.deps.notify(Pl.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Wq._c.SaveClip) : this.deps.notify(Pl.d.clippingNotOn)
      }
      viewerShown(qq) {
        this.live && this.deps.client.recorderControl(qq ? Wq._c.ViewerOpened : Wq._c.ViewerClosed)
      }
      setPrefs(qq, Eq) {
        this.live && this.deps.client.recorderPrefs(qq, Eq)
      }
      setOption(qq, Eq) {
        this.live && this.deps.client.recorderOption(qq, Eq)
      }
      recordFlyingText(qq, Eq, gq, Yq) {
        this.live && this.deps.client.recordFlyingText(qq, Eq, gq, Yq)
      }
      recordPlayerKilled(qq, Eq, gq, Yq) {
        this.live && this.deps.client.recordPlayerKilled(qq, Eq, gq, Yq)
      }
      recordKillfeed(qq, Eq, gq) {
        this.live && this.deps.client.recordKillfeed(qq, Eq, gq)
      }
      SB() {
        let qq = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, qq = {
            ...qq,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Eq = Math.floor((this.now() - this.recordingSince) / 1e3);
          Eq !== qq.seconds && (qq = {
            ...qq,
            seconds: Eq
          })
        }
        this.set(qq)
      }
      onEvent(qq) {
        var Eq, gq;
        const {
          notify: Yq
        } = this.deps, lq = Pl.d;
        switch (qq.what) {
          case Wq.Xc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Yq(lq.recordingStarted);
            break;
          case Wq.Xc.RecordingStopped:
            this.stopRecording(), Yq(lq.recordingStopped), this.saveState(Wq.id.Recording, "saving");
            break;
          case Wq.Xc.RecordingDiscarded:
            this.stopRecording(), Yq(lq.recordingDiscarded);
            break;
          case Wq.Xc.RecordingTurnedOff:
            this.stopRecording(), Yq(lq.recordingTurnedOff);
            break;
          case Wq.Xc.LimitReached:
            Yq(lq.limitReached);
            break;
          case Wq.Xc.ClipSaved:
            this.saveState(Wq.id.Clip, "saving");
            break;
          case Wq.Xc.ClipEmpty:
            Yq(lq.clipEmpty);
            break;
          case Wq.Xc.ClippingNotOn:
            Yq(lq.clippingNotOn);
            break;
          case Wq.Xc.Disallowed:
            Yq(lq.disallowed);
            break;
          case Wq.Xc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Wq.Xc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Wq.Xc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Wq.Xc.SaveBusy:
            null === (Eq = (gq = this.deps).onSaveState) || void 0 === Eq || Eq.call(gq, qq.kind, "busy"), Yq(lq.saveBusy);
            break;
          case Wq.Xc.CloseViewerFirst:
            Yq(lq.closeViewerFirst)
        }
      }
      fileReady(qq, Eq) {
        this.deps.download(Eq), this.saveState(qq, "done"), this.deps.notify(qq === Wq.id.Clip ? Pl.d.clipSaved : Pl.d.recordingSaved)
      }
      failed(qq) {
        this.saveState(qq, "failed"), this.deps.notify(qq === Wq.id.Clip ? Pl.d.clipFailed : Pl.d.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(qq, Eq) {
        var gq, Yq;
        null === (gq = (Yq = this.deps).onSaveState) || void 0 === gq || gq.call(Yq, qq, Eq)
      }
      set(qq) {
        qq !== this.state && (this.state = qq, this.deps.onState(qq))
      }
    }
    const fl = new TextDecoder;

    function Ml(qq, Eq, gq, Yq) {
      const lq = [];
      for (let Oq = 0; Oq < Yq; Oq++) {
        if (Eq + Xg.mb > gq) return null;
        const Yq = qq.getUint16(Eq, !0);
        if (Eq += Xg.mb, Yq !== Wq.Kc) {
          if (Eq + Yq > gq) return null;
          lq.push(fl.decode(new Uint8Array(qq.buffer, qq.byteOffset + Eq, Yq))), Eq += Yq
        } else lq.push(null)
      }
      return Eq === gq ? lq : null
    }

    function Tl(qq, Eq) {
      let gq = new DataView(new ArrayBuffer(0)),
        Yq = !0;
      const lq = {
        replayFailed: (Eq, gq) => {
          qq.replayFailed({
            reason: Eq,
            code: gq
          })
        },
        replayOption: (Eq, lq, Oq, mq) => {
          const xq = function(qq, Eq, gq, Yq) {
            switch (Eq) {
              case Wq.ld.Cleared:
                return 0 === Yq ? null : void 0;
              case Wq.ld.Text:
                return fl.decode(new Uint8Array(qq.buffer, qq.byteOffset + gq, Yq));
              case Wq.ld.Int:
                return Yq === Int32Array.BYTES_PER_ELEMENT ? qq.getInt32(gq, !0) : void 0;
              case Wq.ld.Double:
                return Yq === Float64Array.BYTES_PER_ELEMENT ? qq.getFloat64(gq, !0) : void 0;
              default:
                return
            }
          }(gq, lq, Oq, mq);
          void 0 !== xq ? qq.replayOption({
            key: Eq,
            value: xq
          }) : Yq = !1
        },
        replayUiEvent: (Eq, lq, Oq, mq, xq, Aq) => {
          const cq = function(qq, Eq, gq, Yq, lq, Oq, mq) {
            const xq = Oq + mq;
            switch (Eq) {
              case Wq.pd.FlyingText: {
                const mq = Ml(qq, Oq, xq, 1);
                return null !== mq && null !== mq[0] ? {
                  what: Eq,
                  ng: gq,
                  hg: Yq,
                  angle: lq,
                  contentJson: mq[0]
                } : null
              }
              case Wq.pd.PlayerKilled: {
                const Yq = Ml(qq, Oq, xq, 3);
                return Yq ? {
                  what: Eq,
                  killstreak: gq,
                  dead: Yq[0],
                  killer: Yq[1],
                  withItem: Yq[2]
                } : null
              }
              case Wq.pd.Killfeed: {
                const gq = Ml(qq, Oq, xq, 7);
                return gq ? {
                  what: Eq,
                  killerId: gq[0],
                  killerName: gq[1],
                  killerColour: gq[2],
                  victimId: gq[3],
                  victimName: gq[4],
                  victimColour: gq[5],
                  withItem: gq[6]
                } : null
              }
              default:
                return null
            }
          }(gq, Eq, lq, Oq, mq, xq, Aq);
          null !== cq ? qq.replayUiEvent(cq) : Yq = !1
        },
        replayFilePart: (gq, lq, Oq, mq) => {
          const xq = Eq();
          Oq + mq > xq.byteLength ? Yq = !1 : qq.filePart(gq, lq, new Uint8Array(xq, Oq, mq).slice())
        },
        replayFileReady: (Eq, gq, Yq, lq) => {
          qq.fileReady({
            save: Eq,
            kind: gq,
            parts: Yq,
            bytes: lq
          })
        },
        recorderEvent: (Eq, gq, Yq) => {
          qq.recorderEvent({
            what: Eq,
            kind: gq,
            save: Yq
          })
        },
        replayOpened: (Eq, Yq, lq) => {
          qq.replayOpened(fl.decode(new Uint8Array(gq.buffer, gq.byteOffset + Yq, lq)))
        }
      };
      return (qq, Eq, Oq, mq) => !(qq < Wq.S.ReplayFailed || qq > Wq.S.RecorderEvent) && (gq = Eq, Yq = !0, (0, aq.me)(qq, Eq, Oq, mq, lq) && Yq)
    }

    function zl(qq) {
      let Eq = null;
      const gq = Tl(qq, (() => {
        if (null === Eq) throw new Error("a recorder event read outside recorderEventReader's call");
        return Eq.buffer
      }));
      return (qq, Yq) => {
        Eq = Yq;
        try {
          ! function(qq, Eq) {
            const gq = qq.slice(),
              Yq = new DataView(gq.buffer);
            for (let lq = 0; lq < gq.byteLength;) {
              if (lq + Wq.P > gq.byteLength) throw new Error(`the recorder module's events end mid-head at ${lq}`);
              const qq = Yq.getUint32(lq, !0),
                Oq = 65535 & qq,
                mq = qq >>> 16,
                xq = lq + Wq.P;
              if (xq + mq > gq.byteLength || !Eq(Oq, Yq, xq, mq)) throw new Error(`the recorder module wrote a malformed event ${Oq} (${mq} bytes) at ${lq}`);
              lq = xq + (0, Wq.Ce)(mq)
            }
          }(qq, gq)
        } finally {
          Eq = null
        }
      }
    }
    class Sl {
      constructor(qq, Eq) {
        this.acks = qq, this.handlers = Eq, this.parts = new Map
      }
      onPart(qq, Eq, gq) {
        let Yq = this.parts.get(qq);
        Yq || (Yq = [], this.parts.set(qq, Yq)), Yq[Eq] = gq, this.acks.filePartDone(qq, Eq)
      }
      onReady(qq) {
        var Eq;
        const gq = null !== (Eq = this.parts.get(qq.save)) && void 0 !== Eq ? Eq : [];
        this.parts.delete(qq.save);
        const Yq = function(qq, Eq, gq) {
          if (qq.length !== Eq) return null;
          let Yq = 0;
          for (let mq = 0; mq < Eq; mq++) {
            if (void 0 === qq[mq]) return null;
            Yq += qq[mq].byteLength
          }
          if (Yq !== gq) return null;
          if (1 === Eq) return qq[0];
          const lq = new Uint8Array(gq);
          let Oq = 0;
          for (const mq of qq) lq.set(mq, Oq), Oq += mq.byteLength;
          return lq
        }(gq, qq.parts, qq.bytes);
        this.acks.fileDone(qq.save), null === Yq ? this.handlers.fileIncomplete(qq.save, qq.kind) : this.handlers.fileReady(qq.save, qq.kind, Yq)
      }
      onDiscarded(qq) {
        this.parts.delete(qq)
      }
    }

    function pl() {
      return gq.e(58).then((() => gq(42375)))
    }
    class Gl {
      constructor(qq) {
        this.deps = qq, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Eq
        } = qq;
        this.recorder = new Zl({
          client: Eq,
          live: () => {
            var qq;
            return !0 !== (null === (qq = this.viewer) || void 0 === qq ? void 0 : qq.inPlayback)
          },
          viewerOpen: qq.viewerOpen,
          notify: qq.notify,
          download: Eq => {
            var gq;
            null === (gq = qq.download) || void 0 === gq || gq.call(qq, Eq)
          },
          onState: qq.onRecorderState,
          onSaveState: qq.onSaveState
        }), this.parts = new Sl(Eq, {
          fileReady: (qq, Eq, gq) => {
            var Yq;
            Eq === Wq.id.Edited ? null === (Yq = this.viewer) || void 0 === Yq || Yq.saveDone(gq) : this.recorder.fileReady(Eq, gq)
          },
          fileIncomplete: (qq, Eq) => {
            this.saveFailed(Eq)
          }
        });
        const gq = {
          replayFailed: qq => {
            var Eq;
            null === (Eq = this.viewer) || void 0 === Eq || Eq.onFailed(qq)
          },
          replayOption: Eq => {
            var gq;
            null === (gq = qq.onReplayOption) || void 0 === gq || gq.call(qq, Eq)
          },
          replayUiEvent: Eq => {
            var gq;
            null === (gq = qq.onReplayUiEvent) || void 0 === gq || gq.call(qq, Eq)
          },
          filePart: (qq, Eq, gq) => {
            this.parts.onPart(qq, Eq, gq)
          },
          fileReady: qq => {
            this.parts.onReady(qq)
          },
          replayOpened: Eq => {
            var gq;
            null === (gq = qq.onReplayOpened) || void 0 === gq || gq.call(qq, Eq)
          },
          recorderEvent: qq => {
            var Eq;
            switch (qq.what) {
              case Wq.Xc.FileDiscarded:
                this.parts.onDiscarded(qq.save);
                break;
              case Wq.Xc.SaveFailed:
                this.saveFailed(qq.kind);
                break;
              case Wq.Xc.SaveBusy:
                if (null !== (Eq = this.viewer) && void 0 !== Eq && Eq.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(qq);
                break;
              default:
                this.recorder.onEvent(qq)
            }
          }
        };
        this.sink = function(qq, Eq) {
          return {
            onReplayEvent: Tl(qq, Eq)
          }
        }(gq, qq.buffer), this.recorderEvents = zl(gq)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var qq;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (qq = this.deps.loadViewer) && void 0 !== qq ? qq : pl)().catch((qq => {
          throw this.viewerChunk = null, qq
        })), this.viewerChunk.then((qq => (this.viewer ??= new qq.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var qq, Eq;
            null === (qq = (Eq = this.deps).onViewerChange) || void 0 === qq || qq.call(Eq)
          }
        }), this.viewer))))
      }
      activated(qq) {
        this.recorder.activated(qq)
      }
      afterFrame(qq) {
        try {
          qq > 0 && this.recorder.SB()
        } finally {
          var Eq;
          null === (Eq = this.viewer) || void 0 === Eq || Eq.afterFrame()
        }
      }
      end() {
        var qq;
        null === (qq = this.viewer) || void 0 === qq || qq.end()
      }
      saveFailed(qq) {
        var Eq;
        qq === Wq.id.Edited ? null === (Eq = this.viewer) || void 0 === Eq || Eq.saveFailed(!1) : this.recorder.failed(qq)
      }
    }
    var Ll = gq(40350),
      Jl = gq(40366),
      kl = gq(4627),
      Rl = gq(40739);
    class Ul {
      constructor(qq) {
        this.deps = qq, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(qq, Eq) {
        if (!this.deps.live() || 0 === qq && 0 === Eq) return;
        const gq = (0, pq.q)(0, performance.now()),
          Yq = this.deps.dragScale();
        (0, Rl.g)((() => {
          (0, pq.u)(Wq.sb.MouseDown, 0, 0, 0, gq), (0, pq.u)(Wq.sb.MouseMove, 0, qq * Yq, Eq * Yq, 0), (0, pq.u)(Wq.sb.MouseUp, 0, 0, 0, gq)
        }))
      }
      move(qq) {
        var Eq, gq;
        this.analogue[0] = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.x) && void 0 !== Eq ? Eq : 0, this.analogue[1] = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.y) && void 0 !== gq ? gq : 0, this.send()
      }
      holdVertical(qq, Eq) {
        const gq = "freeCamUp" === qq ? aq.Yb.Up : aq.Yb.Down;
        this.keys = Eq ? this.keys | gq : this.keys & ~gq, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const qq = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== qq && !(0, aq.ze)(qq, 0, this.analogue, this.keys)
      }
    }
    var Fl = gq(700),
      sl = gq(278),
      Xl = gq(96),
      wl = gq(9189);

    function Kl() {
      const qq = Yq.b.get("clientEscMenuOptions"),
        Eq = (0, Fl.j)(qq);
      return {
        mouse: (0, Xl.isMobile)() ? Eq : qq.mouseSensitivity,
        touch: Eq,
        fovPercent: qq.cameraFOV
      }
    }

    function Cl() {
      const qq = Yq.b.get("clientEscMenuOptions"),
        Eq = Yq.b.get("isTouchScreen") ? (0, Fl.j)(qq) : qq.mouseSensitivity,
        gq = Kl().mouse;
      return gq > 0 ? Eq / gq : 1
    }

    function Il(qq) {
      const Eq = () => {
        qq.setSoundPrefs(Yq.b.get("soundVolume"), Yq.b.get("soundOnFromAd"))
      };
      let gq = null;
      const lq = () => {
        const {
          showFog: Eq,
          enableLighting: lq,
          fogChunkDistance: Oq,
          chunkFadeIn: mq
        } = Yq.b.get("clientEscMenuOptions"), xq = {
          showFog: Eq,
          lighting: lq,
          fogChunks: Oq,
          chunkFade: mq
        };
        gq && (0, Wq.re)(gq) === (0, Wq.re)(xq) && gq.fogChunks === Oq || (gq = xq, qq.setEnvPrefs(gq))
      };
      let Oq = null;
      const xq = () => {
        const Eq = function() {
          const qq = Yq.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: Yq.b.get("areNametagsHidden"),
            crouchToggle: qq.crouchIsToggle,
            bhopDisabled: qq.disableBunnyHopping,
            disableBobbing: qq.disableBobbing,
            ezTowering: qq.ezTowering && (0, sl.f)(),
            ezBridging: qq.ezBridging,
            showChunkBorders: qq.showChunkBorders,
            nametagCutDistance: (0, wl.g)()
          }
        }();
        (0, hq.be)(Oq, Eq) || (Oq = Eq, qq.setUiPrefs(Eq))
      };
      let Aq = null;
      const cq = () => {
        const Eq = Kl();
        (0, hq.be)(Aq, Eq) || (Aq = Eq, qq.setLookPrefs(Eq))
      };
      Eq(), lq(), xq(), cq();
      const uq = [(0, mq.k)("appManagerUpdated|soundVolume", Eq), (0, mq.k)("appManagerUpdated|soundOnFromAd", Eq), (0, mq.k)("appManagerUpdated|clientEscMenuOptions", (() => {
        lq(), xq(), cq()
      })), (0, mq.k)("appManagerUpdated|areNametagsHidden", xq), (0, mq.k)("appManagerUpdated|showDistantNametags", xq)];
      return () => {
        for (const qq of uq) qq()
      }
    }
    var el = gq(40671),
      Dl = gq(40676);
    var qO = (0, Dl.d)("lend"),
      EO = (0, Dl.d)("starting"),
      gO = (0, Dl.d)("generation"),
      YO = (0, Dl.d)("end");
    class lO {
      constructor(qq) {
        this.deps = qq, Object.defineProperty(this, YO, {
          value: OO
        }), Object.defineProperty(this, qO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, EO, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, gO, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, el.d)(this, qO)[qO] || (0, el.d)(this, EO)[EO]
      }
      async start(qq) {
        if (this.active) return "busy";
        const Eq = (0, el.d)(this, gO)[gO];
        (0, el.d)(this, EO)[EO] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, el.d)(this, EO)[EO] = !1
        }
        if (Eq !== (0, el.d)(this, gO)[gO]) return "refused";
        const gq = this.deps.beginSave();
        if (!gq) return "refused";
        const Yq = Number(BigInt.asUintN(32, qq)),
          lq = Number(BigInt.asUintN(32, qq >> 32n));
        let Oq = "refused";
        return this.deps.recorderCall(((qq, Eq) => {
          const mq = gq.editState,
            xq = qq.stage(mq.length);
          0 !== xq ? (new Uint8Array(Eq.buffer, xq, mq.length).set(mq), qq.Clq(gq.headLen, Yq, lq) && (Oq = "sealing")) : Oq = "tooLarge"
        }), !0), "sealing" !== Oq ? (gq.end(), Oq) : ((0, el.d)(this, qO)[qO] = gq, "sealing")
      }
      beforeRecorderStep() {
        const qq = (0, el.d)(this, qO)[qO];
        if (!qq) return null;
        let Eq = -1,
          gq = 0;
        if (!this.deps.recorderCall((qq => {
            Eq = qq.Ilq(), Eq > 0 && (gq = qq.elq())
          }))) return (0, el.d)(this, YO)[YO](qq, "stopped");
        if (Eq < 0) return (0, el.d)(this, YO)[YO](qq, "read");
        if (0 === Eq) return null;
        const Yq = qq.head(gq, Eq);
        let lq = !1;
        if (Yq && this.deps.recorderCall(((qq, gq) => {
            const Oq = qq.stage(Eq);
            0 !== Oq && (new Uint8Array(gq.buffer, Oq, Eq).set(Yq), lq = !0)
          }), !0), lq) return null;
        const Oq = qq.givenUp();
        this.deps.recorderCall((qq => {
          qq.Dlq()
        }));
        const mq = (0, el.d)(this, YO)[YO](qq, Oq ? "givenUp" : "stopped");
        return Oq && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), mq
      }
      stop() {
        (0, el.d)(this, gO)[gO]++;
        const qq = (0, el.d)(this, qO)[qO];
        qq && (this.deps.recorderCall((qq => {
          qq.Dlq()
        })), (0, el.d)(this, YO)[YO](qq, "stopped"))
      }
    }

    function OO(qq, Eq) {
      return (0, el.d)(this, qO)[qO] = null, qq.end(), Eq
    }

    function mO(qq, Eq) {
      const gq = new Uint8Array(4),
        Yq = new DataView(gq.buffer);
      return Yq.setUint8(0, qq ? 1 : 0), Yq.setUint16(2, Math.max(0, Math.min(65535, Math.round(Eq))), !0), gq
    }

    function xO(qq, Eq) {
      return qq > function(qq) {
        return 16777216 + 314572.8 * Math.max(0, qq)
      }(Eq) + 33554432
    }
    let AO = null;

    function cO(qq) {
      return AO ??= async function(qq) {
        const Eq = qq.loadInFlight();
        Eq && await Eq.catch((() => {}));
        if (qq.trapped()) return "trapped";
        if (qq.busy() || !xO(qq.memoryBytes(), qq.clipSeconds())) return "jN";
        qq.unload();
        let gq = !1;
        try {
          gq = await qq.load()
        } catch {
          gq = !1
        }
        if (!gq) return qq.trapped() ? "trapped" : qq.eN() ? "eN" : "failed";
        return "recycled"
      }(qq).finally((() => {
        AO = null
      })), AO
    }
    const uO = "Replay recording couldn't load, so try again.",
      BO = new Set([Wq._c.ToggleRecording, Wq._c.SaveClip]);
    var WO = (0, Dl.d)("bindings"),
      NO = (0, Dl.d)("module"),
      aO = (0, Dl.d)("memory"),
      VO = (0, Dl.d)("trapped"),
      dO = (0, Dl.d)("eN"),
      jO = (0, Dl.d)("recycleDue"),
      HO = (0, Dl.d)("loading"),
      oO = (0, Dl.d)("generation"),
      PO = (0, Dl.d)("viewDrawn"),
      QO = (0, Dl.d)("clip"),
      yO = (0, Dl.d)("session"),
      tO = (0, Dl.d)("control"),
      rO = (0, Dl.d)("deferred"),
      vO = (0, Dl.d)("coreU8"),
      hO = (0, Dl.d)("coreU32"),
      nO = (0, Dl.d)("moduleU8"),
      bO = (0, Dl.d)("edited"),
      iO = (0, Dl.d)("sendSession"),
      ZO = (0, Dl.d)("checkNotInEvents"),
      fO = (0, Dl.d)("clipping"),
      MO = (0, Dl.d)("busy"),
      TO = (0, Dl.d)("use"),
      zO = (0, Dl.d)("ensureLoaded"),
      SO = (0, Dl.d)("loadOnce"),
      pO = (0, Dl.d)("recycleAfterStep"),
      GO = (0, Dl.d)("settleRecycle"),
      LO = (0, Dl.d)("load"),
      JO = (0, Dl.d)("attach"),
      kO = (0, Dl.d)("resendHeld"),
      RO = (0, Dl.d)("recycle"),
      UO = (0, Dl.d)("send"),
      FO = (0, Dl.d)("unload"),
      sO = (0, Dl.d)("dropModule"),
      XO = (0, Dl.d)("coreBytes"),
      wO = (0, Dl.d)("coreWords"),
      KO = (0, Dl.d)("moduleBytes"),
      CO = (0, Dl.d)("loadFailed"),
      IO = (0, Dl.d)("call"),
      eO = (0, Dl.d)("guard"),
      DO = (0, Dl.d)("trapOn");
    class qm {
      constructor(qq) {
        this.deps = qq, Object.defineProperty(this, DO, {
          value: tm
        }), Object.defineProperty(this, eO, {
          value: ym
        }), Object.defineProperty(this, IO, {
          value: Qm
        }), Object.defineProperty(this, CO, {
          value: Pm
        }), Object.defineProperty(this, KO, {
          value: om
        }), Object.defineProperty(this, wO, {
          value: Hm
        }), Object.defineProperty(this, XO, {
          value: jm
        }), Object.defineProperty(this, sO, {
          value: dm
        }), Object.defineProperty(this, FO, {
          value: Vm
        }), Object.defineProperty(this, UO, {
          value: am
        }), Object.defineProperty(this, RO, {
          value: Nm
        }), Object.defineProperty(this, kO, {
          value: Wm
        }), Object.defineProperty(this, JO, {
          value: Bm
        }), Object.defineProperty(this, LO, {
          value: um
        }), Object.defineProperty(this, GO, {
          value: cm
        }), Object.defineProperty(this, pO, {
          value: Am
        }), Object.defineProperty(this, SO, {
          value: xm
        }), Object.defineProperty(this, zO, {
          value: mm
        }), Object.defineProperty(this, TO, {
          value: Om
        }), Object.defineProperty(this, MO, {
          value: lm
        }), Object.defineProperty(this, fO, {
          value: Ym
        }), Object.defineProperty(this, ZO, {
          value: gm
        }), Object.defineProperty(this, iO, {
          value: Em
        }), Object.defineProperty(this, WO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, VO, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, dO, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, jO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, HO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oO, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, PO, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, QO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nO, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bO, {
          writable: !0,
          value: void 0
        }), (0, el.d)(this, bO)[bO] = new lO({
          ensureLoaded: () => (0, el.d)(this, zO)[zO](),
          recorderCall: (qq, Eq) => {
            Eq && (0, el.d)(this, ZO)[ZO]("an edited save's stage");
            const gq = (0, el.d)(this, IO)[IO](((Eq, gq) => (qq(Eq, gq), !0)));
            return null !== gq && void 0 !== gq && gq
          },
          beginSave: qq.beginSave,
          givenUp: qq.givenUp
        })
      }
      get active() {
        return null !== (0, el.d)(this, NO)[NO]
      }
      get trapped() {
        return (0, el.d)(this, VO)[VO]
      }
      get loading() {
        return null !== (0, el.d)(this, HO)[HO]
      }
      prefetch() {
        (0, el.d)(this, dO)[dO] || (0, el.d)(this, VO)[VO] || (0, el.d)(this, NO)[NO] || (0, el.d)(this, HO)[HO] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, el.d)(this, PO)[PO] = !0, (0, el.d)(this, fO)[fO]() && (0, el.d)(this, TO)[TO]()
      }
      prefs(qq, Eq) {
        (0, el.d)(this, QO)[QO] = {
          on: qq,
          seconds: Eq
        }, (0, el.d)(this, UO)[UO](Wq.Uc.Prefs, mO(qq, Eq)), qq && (0, el.d)(this, PO)[PO] && (0, el.d)(this, TO)[TO]()
      }
      control(qq) {
        const Eq = function(qq) {
          return new Uint8Array([qq, 0, 0, 0])
        }(qq);
        if (BO.has(qq)) return (0, el.d)(this, NO)[NO] ? void(0, el.d)(this, UO)[UO](Wq.Uc.Control, Eq) : ((0, el.d)(this, tO)[tO] = Eq, void(0, el.d)(this, TO)[TO]());
        (0, el.d)(this, dO)[dO] || this.deps.coreCommand(Wq.Uc.Control, Eq)
      }
      session(qq) {
        (0, el.d)(this, yO)[yO] = qq, (0, el.d)(this, iO)[iO](qq)
      }
      filePartDone(qq, Eq) {
        (0, el.d)(this, UO)[UO](Wq.Uc.FilePartDone, function(qq, Eq) {
          const gq = new Uint8Array(8),
            Yq = new DataView(gq.buffer);
          return Yq.setUint32(0, qq, !0), Yq.setUint32(4, Eq, !0), gq
        }(qq, Eq))
      }
      fileDone(qq) {
        return (0, el.d)(this, UO)[UO](Wq.Uc.FileDone, function(qq) {
          const Eq = new Uint8Array(4);
          return new DataView(Eq.buffer).setUint32(0, qq, !0), Eq
        }(qq)), (0, el.d)(this, pO)[pO]()
      }
      saveEdited(qq) {
        return (0, el.d)(this, ZO)[ZO]("saveEdited"), (0, el.d)(this, bO)[bO].start(qq)
      }
      afterFrame() {
        if (!(0, el.d)(this, NO)[NO]) return;
        "read" === (0, el.d)(this, bO)[bO].beforeRecorderStep() && (0, el.d)(this, pO)[pO]();
        const qq = (0, el.d)(this, jO)[jO];
        (0, el.d)(this, jO)[jO] = null;
        const Eq = (0, el.d)(this, NO)[NO],
          gq = (0, el.d)(this, aO)[aO];
        if (!Eq || !gq) return void(null === qq || void 0 === qq || qq.resolve((0, el.d)(this, VO)[VO] ? "trapped" : "jN"));
        const {
          core: Yq
        } = this.deps, lq = Yq.gOq(2);
        let Oq, mq, xq, Aq, cq = 0,
          uq = 0;
        if (0 !== lq) {
          var Bq, Wq;
          const qq = (0, el.d)(this, wO)[wO]();
          cq = null !== (Bq = qq[lq >>> 2]) && void 0 !== Bq ? Bq : 0, uq = null !== (Wq = qq[1 + (lq >>> 2)]) && void 0 !== Wq ? Wq : 0
        }
        try {
          if (uq > 0) {
            const qq = Eq.feed(uq);
            0 !== qq && (0, el.d)(this, KO)[KO](gq).set((0, el.d)(this, XO)[XO]().subarray(cq, cq + uq), qq)
          }
          Oq = Eq.step(), mq = Eq.YOq(), xq = Eq.lOq(), Aq = Eq.OOq()
        } catch (Nq) {
          if (!(0, el.d)(this, DO)[DO](Nq)) throw null === qq || void 0 === qq || qq.resolve("jN"), Nq;
          return void(null === qq || void 0 === qq || qq.resolve("trapped"))
        }
        if (Oq > 0) {
          const qq = Yq.mOq(2, Oq);
          0 !== qq && (0, el.d)(this, XO)[XO]().set((0, el.d)(this, KO)[KO](gq).subarray(mq, mq + Oq), qq)
        }
        if (xq > 0) {
          (0, el.d)(this, rO)[rO] = [];
          try {
            this.deps.events(new Uint8Array(gq.buffer, Aq, xq), gq)
          } catch (Nq) {
            throw null === qq || void 0 === qq || qq.resolve("jN"), Nq
          } finally {
            const qq = (0, el.d)(this, rO)[rO];
            (0, el.d)(this, rO)[rO] = null;
            for (const [Eq, gq] of qq)(0, el.d)(this, UO)[UO](Eq, gq)
          }
        }
        if (!(0, el.d)(this, fO)[fO]() && !(0, el.d)(this, MO)[MO]()) return (0, el.d)(this, FO)[FO](), void(null === qq || void 0 === qq || qq.resolve("jN"));
        null === qq || void 0 === qq || qq.resolve((0, el.d)(this, RO)[RO]())
      }
      dispose() {
        (0, el.d)(this, dO)[dO] = !0, (0, el.d)(this, FO)[FO]()
      }
    }

    function Em(qq) {
      (0, el.d)(this, UO)[UO](Wq.Uc.Session, function(qq) {
        const Eq = new TextEncoder,
          gq = Eq.encode(qq.game).subarray(0, 65535),
          Yq = Eq.encode(qq.lobby).subarray(0, 65535),
          lq = new Uint8Array(22 + gq.length + 2 + Yq.length),
          Oq = new DataView(lq.buffer);
        Oq.setFloat64(0, qq.unixMs, !0), Oq.setBigUint64(8, BigInt.asUintN(64, qq.session), !0), Oq.setUint8(16, qq.lobbyType);
        let mq = 20;
        for (const xq of [gq, Yq]) Oq.setUint16(mq, xq.length, !0), lq.set(xq, mq + 2), mq += 2 + xq.length;
        return lq
      }({
        ...qq,
        unixMs: this.deps.unixNow()
      }))
    }

    function gm(qq) {
      false
    }

    function Ym() {
      var qq, Eq;
      return null !== (qq = null === (Eq = (0, el.d)(this, QO)[QO]) || void 0 === Eq ? void 0 : Eq.on) && void 0 !== qq && qq
    }

    function lm() {
      const qq = (0, el.d)(this, NO)[NO];
      let Eq = !0;
      if (qq) try {
        Eq = qq.busy()
      } catch (gq) {
        if (!(0, el.d)(this, DO)[DO](gq)) throw gq
      }
      return Eq || (0, el.d)(this, bO)[bO].active
    }
    async function Om() {
      !(0, el.d)(this, dO)[dO] && this.deps.allowed() ? await (0, el.d)(this, zO)[zO]() : (0, el.d)(this, tO)[tO] = null
    }

    function mm() {
      return (0, el.d)(this, VO)[VO] || (0, el.d)(this, dO)[dO] ? Promise.resolve(!1) : (0, el.d)(this, NO)[NO] ? Promise.resolve(!0) : ((0, el.d)(this, HO)[HO] ??= (0, el.d)(this, SO)[SO](), (0, el.d)(this, HO)[HO])
    }
    async function xm() {
      let qq = !1;
      try {
        return qq = await (0, el.d)(this, LO)[LO](), qq
      } finally {
        qq || ((0, el.d)(this, tO)[tO] = null), (0, el.d)(this, HO)[HO] = null
      }
    }

    function Am() {
      if (!(0, el.d)(this, NO)[NO]) return Promise.resolve((0, el.d)(this, VO)[VO] ? "trapped" : "jN");
      if (!(0, el.d)(this, jO)[jO]) {
        let qq = () => {};
        const Eq = new Promise((Eq => {
          qq = Eq
        }));
        (0, el.d)(this, jO)[jO] = {
          promise: Eq,
          resolve: qq
        }
      }
      return (0, el.d)(this, jO)[jO].promise
    }

    function cm(qq) {
      const Eq = (0, el.d)(this, jO)[jO];
      (0, el.d)(this, jO)[jO] = null, null === Eq || void 0 === Eq || Eq.resolve(qq)
    }
    async function um() {
      let qq = (0, el.d)(this, WO)[WO];
      if (!qq) {
        const Eq = (0, el.d)(this, oO)[oO];
        try {
          qq = await this.deps.load()
        } catch (gq) {
          return Eq === (0, el.d)(this, oO)[oO] && await (0, el.d)(this, CO)[CO](gq), !1
        }
        if (Eq !== (0, el.d)(this, oO)[oO]) return this.deps.unload(), !1;
        const Yq = qq,
          lq = (0, el.d)(this, eO)[eO]((() => Yq.xOq()));
        if (void 0 === lq) return !1;
        const Oq = this.deps.core.AOq();
        if (lq !== Oq) return await (0, el.d)(this, CO)[CO](new Error(`recorder port version ${lq}, the core's ${Oq}`)), !1;
        (0, el.d)(this, WO)[WO] = qq
      }
      const Eq = qq;
      try {
        if (!(0, el.d)(this, eO)[eO]((() => ((0, el.d)(this, NO)[NO] = new Eq.cOq, (0, el.d)(this, aO)[aO] = Eq.qOq(), !0)))) return !1;
        (0, el.d)(this, kO)[kO]();
        const qq = (0, el.d)(this, tO)[tO];
        return (0, el.d)(this, tO)[tO] = null, qq && (0, el.d)(this, UO)[UO](Wq.Uc.Control, qq), (0, el.d)(this, JO)[JO]()
      } catch (gq) {
        return (0, el.d)(this, FO)[FO](), await (0, el.d)(this, CO)[CO](gq), !1
      }
    }

    function Bm() {
      return this.deps.core.uOq(0), 1 === this.deps.core.uOq(1) || ((0, el.d)(this, FO)[FO](), this.deps.failed(uO), !1)
    }

    function Wm() {
      (0, el.d)(this, QO)[QO] && (0, el.d)(this, UO)[UO](Wq.Uc.Prefs, mO((0, el.d)(this, QO)[QO].on, (0, el.d)(this, QO)[QO].seconds)), (0, el.d)(this, yO)[yO] && (0, el.d)(this, iO)[iO]((0, el.d)(this, yO)[yO])
    }

    function Nm() {
      return cO({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var qq, Eq;
          return null !== (qq = null === (Eq = (0, el.d)(this, QO)[QO]) || void 0 === Eq ? void 0 : Eq.seconds) && void 0 !== qq ? qq : 0
        },
        trapped: () => (0, el.d)(this, VO)[VO],
        busy: () => (0, el.d)(this, MO)[MO](),
        loadInFlight: () => (0, el.d)(this, HO)[HO],
        eN: () => (0, el.d)(this, dO)[dO],
        unload: () => {
          (0, el.d)(this, FO)[FO]()
        },
        load: () => (0, el.d)(this, zO)[zO]()
      })
    }

    function am(qq, Eq) {
      (0, el.d)(this, rO)[rO] ? (0, el.d)(this, rO)[rO].push([qq, Eq]): (0, el.d)(this, IO)[IO](((gq, Yq) => {
        const lq = gq.EOq(Eq.length);
        0 !== lq && (new Uint8Array(Yq.buffer, lq, Eq.length).set(Eq), gq.command(qq, Eq.length))
      }))
    }

    function Vm() {
      (0, el.d)(this, oO)[oO]++, (0, el.d)(this, GO)[GO]("jN"), (0, el.d)(this, bO)[bO].stop(), this.deps.core.uOq(0), (0, el.d)(this, sO)[sO](), (0, el.d)(this, VO)[VO] || ((0, el.d)(this, WO)[WO] = null, this.deps.unload())
    }

    function dm() {
      (0, el.d)(this, IO)[IO]((qq => {
        qq.free()
      })), (0, el.d)(this, NO)[NO] = null, (0, el.d)(this, aO)[aO] = null, (0, el.d)(this, nO)[nO] = null
    }

    function jm() {
      var qq;
      const Eq = this.deps.coreBuffer();
      return (null === (qq = (0, el.d)(this, vO)[vO]) || void 0 === qq ? void 0 : qq.buffer) !== Eq && ((0, el.d)(this, vO)[vO] = new Uint8Array(Eq)), (0, el.d)(this, vO)[vO]
    }

    function Hm() {
      var qq;
      const Eq = this.deps.coreBuffer();
      return (null === (qq = (0, el.d)(this, hO)[hO]) || void 0 === qq ? void 0 : qq.buffer) !== Eq && ((0, el.d)(this, hO)[hO] = new Uint32Array(Eq, 0, Eq.byteLength >>> 2)), (0, el.d)(this, hO)[hO]
    }

    function om(qq) {
      var Eq;
      const gq = qq.buffer;
      return (null === (Eq = (0, el.d)(this, nO)[nO]) || void 0 === Eq ? void 0 : Eq.buffer) !== gq && ((0, el.d)(this, nO)[nO] = new Uint8Array(gq)), (0, el.d)(this, nO)[nO]
    }
    async function Pm(qq) {
      await this.deps.staleOr(qq, (() => {
        this.deps.failed(uO)
      }))
    }

    function Qm(qq) {
      const Eq = (0, el.d)(this, NO)[NO],
        gq = (0, el.d)(this, aO)[aO];
      if (Eq && gq) return (0, el.d)(this, eO)[eO]((() => qq(Eq, gq)))
    }

    function ym(qq) {
      if (!(0, el.d)(this, VO)[VO]) try {
        return qq()
      } catch (Eq) {
        if (!(0, el.d)(this, DO)[DO](Eq)) throw Eq;
        return
      }
    }

    function tm(qq) {
      return qq instanceof WebAssembly.RuntimeError && ((0, el.d)(this, VO)[VO] = !0, (0, el.d)(this, NO)[NO] = null, (0, el.d)(this, aO)[aO] = null, (0, el.d)(this, nO)[nO] = null, (0, el.d)(this, WO)[WO] = null, (0, el.d)(this, tO)[tO] = null, (0, el.d)(this, GO)[GO]("trapped"), this.deps.core.uOq(0), (0, el.d)(this, bO)[bO].stop(), this.deps.crash(this.deps.markTrapped(qq)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var rm = gq(38625);
    const hm = new Map([
      ["skyblock", () => gq.e(50).then((() => gq(38619)))]
    ]);

    function nm(qq) {
      const Eq = hm.get(qq);
      return Eq ? Eq().then((() => {
        const Eq = (0, rm.c)(qq);
        if (!Eq) throw new Error(`${qq}'s replay hook module registered no hook`);
        return Eq
      })) : null
    }
    class bm {
      constructor(qq) {
        this.deps = qq, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(qq) {
        if (this.pending.clear(), qq === this.game && null !== this.hook) return void(this.all = !0);
        const Eq = ++this.generation;
        this.game = qq, this.hook = null, this.all = !1;
        const gq = this.deps.loadHook(qq);
        null === gq || void 0 === gq || gq.then((qq => {
          Eq === this.generation && (this.hook = qq, this.all = !0)
        }), (qq => {
          Eq === this.generation && this.deps.onError(qq)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(qq) {
        null === this.hook || this.all || this.pending.set(qq, !0)
      }
      entityInfoChanged(qq) {
        null === this.hook || this.all || this.pending.has(qq) || this.pending.set(qq, !1)
      }
      flush(qq) {
        const {
          hook: Eq
        } = this;
        if (null === Eq || !qq || !this.all && 0 === this.pending.size) return;
        const gq = this.deps.cmd();
        if (null === gq) return;
        const {
          api: Yq
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: qq,
            count: Eq
          } = Gg(Yq, this.ids);
          this.ids = qq;
          for (let gq = 0; gq < Eq; gq++) this.pending.set(qq[gq], !0)
        }
        const lq = this.ids = Lg(this.ids, this.pending.size);
        let Oq = 0;
        for (const cq of this.pending.keys()) lq[Oq++] = cq;
        const mq = [],
          xq = Jg(Yq, lq, Oq, ((qq, Eq) => {
            null !== Eq && mq.push({
              serverId: qq,
              info: Eq,
              spawned: !0 === this.pending.get(qq)
            })
          }));
        if (xq) {
          this.pending.clear();
          for (const {
              serverId: qq,
              info: Yq,
              spawned: lq
            }
            of mq) try {
            Eq(Yq, {
              setFacingTolerance: Eq => {
                null === Eq && lq || xg(gq, qq, Eq) || this.pending.set(qq, lq)
              }
            })
          } catch (Aq) {
            this.deps.onError(Aq)
          }
        }
      }
    }
    var im = (0, Dl.d)("bindings"),
      Zm = (0, Dl.d)("module"),
      fm = (0, Dl.d)("memory"),
      Mm = (0, Dl.d)("trapped"),
      Tm = (0, Dl.d)("generation"),
      zm = (0, Dl.d)("loading"),
      Sm = (0, Dl.d)("lend"),
      pm = (0, Dl.d)("givenUp"),
      Gm = (0, Dl.d)("afterSave"),
      Lm = (0, Dl.d)("opens"),
      Jm = (0, Dl.d)("saveAskedAt"),
      km = (0, Dl.d)("unload"),
      Rm = (0, Dl.d)("dropModule"),
      Um = (0, Dl.d)("loadFailed"),
      Fm = (0, Dl.d)("saveReadsBody"),
      sm = (0, Dl.d)("command"),
      Xm = (0, Dl.d)("call"),
      wm = (0, Dl.d)("guard"),
      Km = (0, Dl.d)("trapOn");
    class Cm {
      constructor(qq) {
        this.deps = qq, Object.defineProperty(this, Km, {
          value: lx
        }), Object.defineProperty(this, wm, {
          value: Yx
        }), Object.defineProperty(this, Xm, {
          value: gx
        }), Object.defineProperty(this, sm, {
          value: Ex
        }), Object.defineProperty(this, Fm, {
          get: qx,
          set: void 0
        }), Object.defineProperty(this, Um, {
          value: Dm
        }), Object.defineProperty(this, Rm, {
          value: em
        }), Object.defineProperty(this, km, {
          value: Im
        }), Object.defineProperty(this, im, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Zm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Mm, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Tm, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, zm, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Sm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, pm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Gm, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Lm, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Jm, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, el.d)(this, Zm)[Zm] && null === (0, el.d)(this, Gm)[Gm]
      }
      async open(qq) {
        if ((0, el.d)(this, Mm)[Mm]) return Wq.gd.ModuleTrap;
        let Eq = (0, el.d)(this, im)[im];
        if (!Eq) {
          const qq = (0, el.d)(this, Tm)[Tm];
          (0, el.d)(this, zm)[zm]++;
          try {
            Eq = await this.deps.load()
          } catch (Yq) {
            return (0, el.d)(this, zm)[zm]--, qq !== (0, el.d)(this, Tm)[Tm] ? "stopped" : (0, el.d)(this, Um)[Um](Yq)
          }
          if ((0, el.d)(this, zm)[zm]--, qq !== (0, el.d)(this, Tm)[Tm]) return (0, el.d)(this, im)[im] || 0 !== (0, el.d)(this, zm)[zm] || (0, el.d)(this, Mm)[Mm] || this.deps.unload(), "stopped";
          if ((0, el.d)(this, Mm)[Mm]) return Wq.gd.ModuleTrap;
          const gq = Eq.xOq(),
            lq = this.deps.core.AOq();
          if (gq !== lq) return (0, el.d)(this, Um)[Um](new Error(`replay port version ${gq}, the core's ${lq}`));
          (0, el.d)(this, im)[im] = Eq
        }
        if (!(0, el.d)(this, Zm)[Zm]) {
          const qq = Eq;
          if (!(0, el.d)(this, wm)[wm]((() => {
              (0, el.d)(this, Zm)[Zm] = new qq.BOq, (0, el.d)(this, fm)[fm] = qq.WOq()
            }))) return Wq.gd.ModuleTrap
        }
        let gq = !1;
        return (0, el.d)(this, Xm)[Xm](((Eq, Yq) => {
          null !== (0, el.d)(this, Gm)[Gm] && Eq.step(0, 0);
          const lq = Eq.stage(qq.length);
          0 !== lq && (new Uint8Array(Yq.buffer, lq, qq.length).set(qq), Eq.open(), (0, el.d)(this, pm)[pm] = (0, el.d)(this, Sm)[Sm], (0, el.d)(this, Gm)[Gm] = null, (0, el.d)(this, Lm)[Lm]++, gq = !0)
        })) ? gq ? "opening" : Wq.gd.TooLarge : Wq.gd.ModuleTrap
      }
      beforeFrame(qq) {
        const Eq = (0, el.d)(this, Zm)[Zm],
          gq = (0, el.d)(this, fm)[fm];
        if (!Eq || !gq || null !== (0, el.d)(this, Gm)[Gm]) return;
        const {
          core: Yq
        } = this.deps, lq = Yq.NOq(qq);
        if (lq < 0) return;
        const Oq = Math.floor(lq);
        let mq, xq;
        try {
          mq = Eq.step(Oq, lq - Oq), xq = Eq.YOq()
        } catch (cq) {
          return void(0, el.d)(this, Km)[Km](cq)
        }
        const Aq = Yq.mOq(1, mq);
        if (0 === Aq) {
          const qq = (0, el.d)(this, Xm)[Xm]((qq => {
            qq.close()
          }));
          if (!qq) return;
          return (0, el.d)(this, Fm)[Fm] ? (0, el.d)(this, Gm)[Gm] = "drop" : (0, el.d)(this, Rm)[Rm](), void Yq.aOq(Wq.gd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Aq, mq).set(new Uint8Array(gq.buffer, xq, mq))
      }
      play() {
        (0, el.d)(this, sm)[sm]((qq => {
          qq.play()
        }))
      }
      pause() {
        (0, el.d)(this, sm)[sm]((qq => {
          qq.pause()
        }))
      }
      seek(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, el.d)(this, sm)[sm]((gq => {
          gq.seek(qq, Eq)
        }))
      }
      setMark(qq, Eq) {
        return (0, el.d)(this, sm)[sm]((gq => {
          gq.VOq(qq, Eq)
        }))
      }
      addKeyframe(qq, Eq) {
        return (0, el.d)(this, sm)[sm]((gq => {
          gq.dOq(qq[0], qq[1], qq[2], Eq[0], Eq[1], Eq[2])
        }))
      }
      setKeyframe(qq, Eq) {
        return (0, el.d)(this, sm)[sm]((gq => {
          gq.jOq(qq, Eq)
        }))
      }
      moveKeyframe(qq, Eq) {
        return (0, el.d)(this, sm)[sm]((gq => {
          gq.HOq(qq, Eq)
        }))
      }
      deleteKeyframes(qq, Eq) {
        return (0, el.d)(this, sm)[sm]((gq => {
          gq.oOq(qq, Eq)
        }))
      }
      crop(qq, Eq) {
        return null === (0, el.d)(this, Sm)[Sm] && (0, el.d)(this, sm)[sm]((gq => {
          gq.crop(qq, Eq)
        }))
      }
      beginSave() {
        const qq = (0, el.d)(this, Jm)[Jm];
        if ((0, el.d)(this, Jm)[Jm] = null, null !== qq && qq !== (0, el.d)(this, Lm)[Lm]) return null;
        let Eq = 0,
          gq = null;
        if ((0, el.d)(this, Xm)[Xm](((qq, Yq) => {
            Eq = qq.save(), 0 !== Eq && (gq = new Uint8Array(Yq.buffer, qq.POq(), qq.QOq()).slice())
          })), 0 === Eq || !gq) return null;
        const Yq = {
          headLen: Eq,
          editState: gq,
          givenUp: () => (0, el.d)(this, pm)[pm] === Yq,
          head: (qq, Eq) => {
            if ((0, el.d)(this, Sm)[Sm] !== Yq || !(0, el.d)(this, Fm)[Fm]) return null;
            let gq = null;
            return (0, el.d)(this, Xm)[Xm](((Yq, lq) => {
              const Oq = Yq.yOq();
              0 !== Oq && qq >= 0 && Eq >= 0 && qq + Eq <= Oq && (gq = new Uint8Array(lq.buffer, Yq.tOq() + qq, Eq))
            })), gq
          },
          end: () => {
            if ((0, el.d)(this, Sm)[Sm] !== Yq) return;
            (0, el.d)(this, Sm)[Sm] = null, (0, el.d)(this, pm)[pm] = null, (0, el.d)(this, Xm)[Xm]((qq => {
              qq.rOq()
            }));
            const qq = (0, el.d)(this, Gm)[Gm];
            (0, el.d)(this, Gm)[Gm] = null, "unload" === qq ? (0, el.d)(this, km)[km]() : "drop" === qq && (0, el.d)(this, Rm)[Rm]()
          }
        };
        return (0, el.d)(this, Sm)[Sm] = Yq, Yq
      }
      askSave() {
        (0, el.d)(this, Jm)[Jm] = (0, el.d)(this, Lm)[Lm]
      }
      setSpeed(qq) {
        (0, el.d)(this, sm)[sm]((Eq => {
          Eq.vOq(qq)
        }))
      }
      setCameraMode(qq) {
        (0, el.d)(this, sm)[sm]((Eq => {
          Eq.hOq(qq)
        }))
      }
      close() {
        (0, el.d)(this, sm)[sm]((qq => {
          qq.close()
        }))
      }
      stop() {
        (0, el.d)(this, Tm)[Tm]++, (0, el.d)(this, Fm)[Fm] && ((0, el.d)(this, Xm)[Xm]((qq => {
          qq.close()
        })), (0, el.d)(this, Zm)[Zm]) ? (0, el.d)(this, Gm)[Gm] = "unload" : (0, el.d)(this, km)[km]()
      }
    }

    function Im() {
      (0, el.d)(this, Rm)[Rm](), (0, el.d)(this, Mm)[Mm] || ((0, el.d)(this, im)[im] = null, this.deps.unload())
    }

    function em() {
      (0, el.d)(this, Xm)[Xm]((qq => {
        qq.free()
      })), (0, el.d)(this, Zm)[Zm] = null, (0, el.d)(this, fm)[fm] = null
    }
    async function Dm(qq) {
      return await this.deps.staleOr(qq, (() => {})) ? "reloading" : Wq.gd.ModuleLoad
    }

    function qx() {
      return null !== (0, el.d)(this, Sm)[Sm] && (0, el.d)(this, pm)[pm] !== (0, el.d)(this, Sm)[Sm]
    }

    function Ex(qq) {
      return null === (0, el.d)(this, Gm)[Gm] && (0, el.d)(this, Xm)[Xm](qq)
    }

    function gx(qq) {
      const Eq = (0, el.d)(this, Zm)[Zm],
        gq = (0, el.d)(this, fm)[fm];
      return !(!Eq || !gq) && (0, el.d)(this, wm)[wm]((() => {
        qq(Eq, gq)
      }))
    }

    function Yx(qq) {
      if ((0, el.d)(this, Mm)[Mm]) return !1;
      try {
        return qq(), !0
      } catch (Eq) {
        return (0, el.d)(this, Km)[Km](Eq), !1
      }
    }

    function lx(qq) {
      if (!(qq instanceof WebAssembly.RuntimeError)) throw qq;
      (0, el.d)(this, Mm)[Mm] = !0, (0, el.d)(this, Zm)[Zm] = null, (0, el.d)(this, fm)[fm] = null, (0, el.d)(this, im)[im] = null, this.deps.crash(this.deps.markTrapped(qq)), this.deps.core.aOq(Wq.gd.ModuleTrap)
    }
    var Ox = gq(6354),
      mx = gq(40448);
    const xx = "[bloxd-wasm-client]";
    const Ax = String(il);

    function cx(qq) {
      return null === qq || qq === Ax ? void 0 : qq
    }

    function ux(qq) {
      var Eq, gq, Yq, lq, Oq, xq, Aq;
      switch (qq.what) {
        case Wq.pd.FlyingText: {
          let Eq;
          try {
            Eq = JSON.parse(qq.contentJson)
          } catch (cq) {
            return void console.warn(`${xx} a replay's flying text isn't JSON`, cq)
          }
          mq.i.TV("forceFlyingMiddleMessage", {
            content: Eq,
            hg: qq.hg,
            angle: qq.angle,
            ng: qq.ng
          });
          break
        }
        case Wq.pd.PlayerKilled:
          (0, mx.g)({
            kind: "killed",
            body: {
              deadEId: null !== (Eq = cx(qq.dead)) && void 0 !== Eq ? Eq : "",
              killerEId: cx(qq.killer),
              withItem: null !== (gq = qq.withItem) && void 0 !== gq ? gq : "",
              killstreak: qq.killstreak
            }
          });
          break;
        case Wq.pd.Killfeed:
          (0, mx.g)({
            kind: "custom",
            body: {
              killer: {
                eId: cx(qq.killerId),
                name: null !== (Yq = qq.killerName) && void 0 !== Yq ? Yq : void 0,
                colour: null !== (lq = qq.killerColour) && void 0 !== lq ? lq : void 0
              },
              victim: {
                eId: cx(qq.victimId),
                name: null !== (Oq = qq.victimName) && void 0 !== Oq ? Oq : void 0,
                colour: null !== (xq = qq.victimColour) && void 0 !== xq ? xq : void 0
              },
              withItem: null !== (Aq = qq.withItem) && void 0 !== Aq ? Aq : ""
            }
          })
      }
    }
    const Bx = "[bloxd-wasm-client]";

    function Wx(qq) {
      if (void 0 === qq || null === qq || "" === qq) return null;
      const Eq = Number(qq);
      return Number.isInteger(Eq) && Eq > il && Eq <= 2147483647 ? Eq : null
    }

    function Nx(qq) {
      return {
        id: Wx(qq.eId),
        name: "string" === typeof qq.name ? qq.name : null,
        colour: "string" === typeof qq.colour ? qq.colour : null
      }
    }

    function ax(qq) {
      const Eq = (0, Jl.l)(Xg.ec.PlayerKilled, (Eq => {
          var gq, Yq;
          const lq = (0, Ll.e)(Eq);
          if (!(0, Ll.b)(lq)) return;
          const {
            deadEId: Oq,
            killerEId: mq,
            withItem: xq,
            killstreak: Aq
          } = lq;
          qq.recordPlayerKilled(null !== (gq = Wx(Oq)) && void 0 !== gq ? gq : il, null !== (Yq = Wx(mq)) && void 0 !== Yq ? Yq : il, "number" === typeof Aq ? Aq : 0, "string" === typeof xq ? xq : "")
        })),
        gq = (0, Jl.l)(Xg.ec.CustomKillfeed, (Eq => {
          const gq = (0, Ll.e)(Eq);
          if (!(0, Ll.b)(gq) || !(0, Ll.b)(gq.killer) || !(0, Ll.b)(gq.victim)) return;
          const {
            killer: Yq,
            victim: lq,
            withItem: Oq
          } = gq;
          qq.recordKillfeed(Nx(Yq), Nx(lq), "string" === typeof Oq ? Oq : null)
        }));
      return () => {
        Eq(), gq()
      }
    }

    function Vx(qq) {
      var Eq;
      return void 0 === qq || null === qq ? null : null !== (Eq = JSON.stringify(qq)) && void 0 !== Eq ? Eq : null
    }

    function dx(qq) {
      let Eq = null;
      const gq = () => {
        const {
          enableClipping: gq,
          clipDurationSeconds: lq
        } = Yq.b.get("clientEscMenuOptions"), Oq = `${gq}:${lq}`;
        Oq !== Eq && (Eq = Oq, qq.recorder.setPrefs(gq, lq))
      };
      return gq(), (0, mq.k)("appManagerUpdated|clientEscMenuOptions", gq)
    }
    const jx = "replayModule",
      Hx = "recorderModule";

    function ox(qq, Eq, gq) {
      return function() {
        return qq.isStopped ? gq : Eq(...arguments)
      }
    }
    const Px = {
      open: () => Promise.reject(new Error(Pl.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Qx() {
      return gq.e(62).then((() => gq(61439)))
    }

    function yx(qq) {
      (0, Pl.f)({
        text: qq,
        type: "Error"
      })
    }
    class tx {
      constructor(qq) {
        this.deps = qq, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Eq,
          api: Yq,
          core: lq
        } = qq, Oq = () => qq.memory().buffer, mq = () => Eq.isStopped ? null : Eq.rings.cmd, xq = ox(Eq, ((qq, Eq) => lq.mOq(qq, Eq)), 0), Aq = () => lq.AOq();
        let cq = null;
        this.replay = new Cm({
          core: {
            NOq: ox(Eq, (qq => lq.NOq(qq)), -1),
            mOq: xq,
            AOq: Aq,
            aOq: ox(Eq, (qq => {
              lq.aOq(qq)
            }), void 0)
          },
          coreBuffer: Oq,
          load: async () => (cq = await gq.e(63).then((() => gq(61454))), cq.loadReplayModule()),
          unload: () => {
            var qq;
            null === (qq = cq) || void 0 === qq || qq.unloadReplayModule()
          },
          markTrapped: qq => cq ? cq.markReplayTrapped(qq) : new Error(String(qq)),
          staleOr: (Eq, gq) => qq.staleOr(jx, Eq, gq),
          crash: Eq => {
            qq.reportFault(jx, Eq)
          }
        });
        let uq = null;
        this.recorder = new qm({
          core: {
            uOq: ox(Eq, (qq => lq.uOq(qq)), 0),
            gOq: ox(Eq, (qq => lq.gOq(qq)), 0),
            mOq: xq,
            AOq: Aq
          },
          coreCommand: (qq, Eq) => {
            var gq, Yq;
            return null !== (gq = null === (Yq = mq()) || void 0 === Yq ? void 0 : Yq.writeCmd(qq, 0, Eq)) && void 0 !== gq && gq
          },
          coreBuffer: Oq,
          load: async () => (uq = await Qx(), uq.loadRecorderModule()),
          prefetch: () => {
            Qx().then((qq => qq.prefetchRecorderModule())).catch((qq => {
              console.warn(`${Bx} the recorder module didn't prefetch, so a save loads it:`, qq)
            }))
          },
          unload: () => {
            var qq;
            null === (qq = uq) || void 0 === qq || qq.unloadRecorderModule()
          },
          markTrapped: qq => uq ? uq.markRecorderTrapped(qq) : new Error(String(qq)),
          memoryBytes: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = uq) || void 0 === Eq ? void 0 : Eq.recorderMemoryBytes()) && void 0 !== qq ? qq : 0
          },
          staleOr: (Eq, gq) => qq.staleOr(Hx, Eq, gq),
          crash: Eq => {
            qq.reportFault(Hx, Eq)
          },
          allowed: () => !0 === qq.options.get("canRecordReplays"),
          failed: yx,
          events: (qq, Eq) => {
            this.runtime.recorderEvents(qq, Eq)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: yx,
          unixNow: () => Date.now()
        });
        const Bq = new bl({
          core: {
            Xlq: ox(Eq, (qq => lq.Xlq(qq)), 0),
            Klq: ox(Eq, (() => {
              lq.Klq()
            }), void 0),
            yd: ox(Eq, (() => lq.yd()), 0),
            wlq: ox(Eq, (() => lq.wlq()), 0)
          },
          buffer: Oq,
          apiView: () => Yq.apiView,
          cmd: mq,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new bm({
          api: Yq,
          cmd: mq,
          loadHook: nm,
          onError: qq => {
            console.warn(`${Bx} the recorded game's replay hooks:`, qq)
          }
        });
        const Wq = new Gl({
          client: Bq,
          buffer: Oq,
          setHoldDraws: qq => {
            Eq.setHoldDraws(qq)
          },
          notify: Pl.f,
          onRecorderState: () => {
            var qq;
            null === (qq = (0, yl.f)()) || void 0 === qq || qq.recorderChanged()
          },
          onViewerChange: () => {
            var qq;
            null === (qq = (0, yl.f)()) || void 0 === qq || qq.viewerChanged()
          },
          onReplayOption: Eq => {
            ! function(qq, Eq) {
              var gq, Yq;
              const lq = Xg.kb[Eq.key];
              if (void 0 === lq) return;
              let Oq = null !== (gq = Eq.value) && void 0 !== gq ? gq : JSON.parse(JSON.stringify(null !== (Yq = Ox.e[lq]) && void 0 !== Yq ? Yq : null));
              if (null !== Eq.value && Eq.key < Xg.Lb.Environment && "string" === typeof Oq) try {
                Oq = JSON.parse(Oq)
              } catch (mq) {
                return void console.warn(`${xx} a replay's ${lq} isn't JSON`, mq)
              }
              qq.applyNewClientOptions({
                [lq]: Oq
              })
            }(qq.options, Eq)
          },
          onReplayUiEvent: ux,
          onReplayOpened: Eq => {
            this.entityHooks.opened((0, hq.Yb)(Eq)), qq.replayShaderPack(Eq)
          },
          meshPending: () => {
            var qq, gq;
            return null !== (qq = null === (gq = Eq.lastHeader) || void 0 === gq ? void 0 : gq.renderPending) && void 0 !== qq ? qq : 0
          },
          viewerOpen: Ql.e,
          download: qq => {
            (0, Hl.h)(qq)
          }
        });
        this.runtime = Wq, Yq.replay = Wq.sink, (0, yl.s)(Wq);
        const Nq = new Ul({
          live: () => {
            var qq;
            return !Eq.isStopped && !0 === (null === (qq = Wq.currentViewer) || void 0 === qq ? void 0 : qq.inPlayback)
          },
          cmd: mq,
          dragScale: Cl
        });
        this.freecam = Nq, (0, yl.o)(Nq), this.recordedOptions = function(qq, Eq) {
          const gq = Xg.kb,
            Yq = gq.map(((gq, Yq) => Eq.subscribe(gq, (Eq => {
              qq.setOption(Yq, Vx(Eq))
            }))));
          return {
            sendAll() {
              gq.forEach(((gq, Yq) => {
                qq.setOption(Yq, Vx(Eq.get(gq)))
              }))
            },
            stop() {
              for (const qq of Yq) qq()
            }
          }
        }(Wq.recorder, qq.options), this.stops = [(0, YY.m)((qq => {
          Nq.flush();
          try {
            this.replay.beforeFrame(qq)
          } catch (Eq) {
            this.deps.reportFault("replayFrame", Eq)
          }
        })), (0, YY.y)(((qq, Eq) => {
          try {
            this.recorder.afterFrame(), Eq && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (gq) {
            this.deps.reportFault("recorderFrame", gq)
          }
          try {
            Wq.afterFrame(qq)
          } catch (gq) {
            this.deps.reportFault("replayRuntime", gq)
          }
        })), dx(Wq), () => {
          this.recordedOptions.stop()
        }, ax(Wq.recorder), (0, kl.h)((qq => {
          let {
            action: Eq,
            down: gq
          } = qq;
          var Yq;
          gq && (null === (Yq = (0, yl.f)()) || void 0 === Yq || Yq.keyDown(Eq))
        }))];
        const aq = () => {
          const qq = Wq.currentViewer;
          return !0 === (null === qq || void 0 === qq ? void 0 : qq.isOpen) ? qq : null
        };
        (0, ol.f)({
          open: (qq, Eq) => this.open(qq, Eq),
          replayKey: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = aq()) || void 0 === Eq ? void 0 : Eq.id) && void 0 !== qq ? qq : null
          },
          saveRefusal: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = aq()) || void 0 === Eq ? void 0 : Eq.saveRefusal) && void 0 !== qq ? qq : null
          },
          encode: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = aq()) || void 0 === Eq ? void 0 : Eq.save()) && void 0 !== qq ? qq : Promise.resolve(null)
          },
          fileHandle: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = Wq.currentViewer) || void 0 === Eq ? void 0 : Eq.fileHandle) && void 0 !== qq ? qq : null
          },
          markSaved: (qq, Eq) => {
            var gq;
            null === (gq = Wq.currentViewer) || void 0 === gq || gq.markSaved(qq, Eq)
          }
        })
      }
      netEvent(qq) {
        if ("connection" === qq.type)
          if (qq.phase === Wq.u.Activated) {
            this.activeConn = qq.conn;
            const Eq = this.deps.sessionInfo(qq.conn);
            null !== Eq && (this.runtime.activated({
              lobbyType: (0, nq.t)(Eq.lobbyName),
              gameNameWithVariation: Eq.gameNameWithVariation,
              lobbyName: Eq.lobbyName
            }), this.recordedOptions.sendAll())
          } else qq.phase !== Wq.u.Left && qq.phase !== Wq.u.Closed || qq.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const qq of this.stops) qq();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, yl.l)() === this.runtime && (0, yl.s)(null), (0, yl.i)() === this.freecam && (0, yl.o)(null), (0, ol.f)(Px), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(qq, Eq) {
        const {
          running: gq
        } = this.deps;
        if (gq.isStopped) throw new Error(Pl.d.coreStopped.text);
        if (qq.byteLength > 67108864) throw new Error(Pl.d.cantOpen.text);
        let Yq;
        try {
          Yq = await async function(qq) {
            const Eq = await qq.loadViewer();
            return Eq.inPlayback || (0, YY.M)().leaveGame(null), Eq
          }(this.runtime)
        } catch (lq) {
          throw console.warn(`${Bx} the replay viewer didn't load`, lq), new Error(Pl.d.viewerLoadFailed.text)
        }
        if (gq.isStopped) throw new Error(Pl.d.coreStopped.text);
        await Yq.open(qq, Eq)
      }
    }
    var rx = gq(1926);

    function vx(qq, Eq) {
      const {
        aux: gq,
        payload: Yq
      } = function(qq) {
        return {
          aux: qq.reset ? Wq._b.ResetFirst : 0,
          payload: nx(qq.changes)
        }
      }(Eq);
      qq.queueOptions(gq, Yq) && (Eq.reset && rx.c.reset(), rx.c.apply(Eq.changes))
    }
    const hx = new TextEncoder;

    function nx(qq) {
      const Eq = new bx;
      return Zx(Eq, qq), Eq.bytes()
    }
    class bx {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(qq) {
        if (this.len + qq <= this.buf.length) return;
        const Eq = new Uint8Array(Math.max(2 * this.buf.length, this.len + qq));
        Eq.set(this.buf.subarray(0, this.len)), this.buf = Eq, this.view = new DataView(Eq.buffer)
      }
      u8(qq) {
        this.room(1), this.buf[this.len++] = qq
      }
      tagged(qq, Eq, gq) {
        this.room(1 + Eq), this.buf[this.len++] = qq, 1 === Eq ? this.view.setUint8(this.len, gq) : 2 === Eq ? this.view.setUint16(this.len, gq) : this.view.setUint32(this.len, gq), this.len += Eq
      }
      signed(qq, Eq, gq) {
        this.room(1 + Eq), this.buf[this.len++] = qq, 1 === Eq ? this.view.setInt8(this.len, gq) : 2 === Eq ? this.view.setInt16(this.len, gq) : this.view.setInt32(this.len, gq), this.len += Eq
      }
      f64(qq) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, qq), this.len += 8
      }
      raw(qq) {
        this.room(qq.length), this.buf.set(qq, this.len), this.len += qq.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function ix(qq, Eq, gq, Yq, lq, Oq, mq) {
      Eq < Yq ? qq.u8(gq | Eq) : null !== lq && Eq < 256 ? qq.tagged(lq, 1, Eq) : Eq < 65536 ? qq.tagged(Oq, 2, Eq) : qq.tagged(mq, 4, Eq)
    }

    function Zx(qq, Eq) {
      switch (typeof Eq) {
        case "undefined":
          return void qq.raw(fx);
        case "boolean":
          return void qq.u8(Eq ? 195 : 194);
        case "number":
          return void
          function(qq, Eq) {
            Eq >>> 0 === Eq ? Eq < 128 ? qq.u8(Eq) : Eq < 256 ? qq.tagged(204, 1, Eq) : Eq < 65536 ? qq.tagged(205, 2, Eq) : qq.tagged(206, 4, Eq) : (Eq | 0) === Eq ? Eq >= -32 ? qq.u8(255 & Eq) : Eq >= -128 ? qq.signed(208, 1, Eq) : Eq >= -32768 ? qq.signed(209, 2, Eq) : qq.signed(210, 4, Eq) : qq.f64(Eq)
          }(qq, Eq);
        case "string": {
          const gq = hx.encode(Eq);
          return ix(qq, gq.length, 160, 32, 217, 218, 219), void qq.raw(gq)
        }
        case "object":
          break;
        default:
          return void qq.u8(192)
      }
      if (null === Eq) qq.u8(192);
      else if (Array.isArray(Eq)) {
        ix(qq, Eq.length, 144, 16, null, 220, 221);
        for (const gq of Eq) Zx(qq, gq)
      } else if (Eq instanceof Uint8Array) ix(qq, Eq.length, 0, 0, 196, 197, 198), qq.raw(Eq);
      else {
        const gq = Object.keys(Eq);
        ix(qq, gq.length, 128, 0, null, 222, 223);
        for (const Yq of gq) Zx(qq, Yq), Zx(qq, Eq[Yq])
      }
    }
    const fx = new Uint8Array([212, 0, 0]);
    var Mx = gq(42352),
      Tx = gq(42356),
      zx = gq(40760),
      Sx = gq(40786),
      px = gq(2805);
    const Gx = [1e3, 3e3, 9e3];
    class Lx {
      constructor(qq) {
        this.host = qq, this.sets = new Map, this.table = [], this.generation = 0, this.eN = !1
      }
      onEvent(qq) {
        const Eq = function(qq) {
          if (qq.byteLength !== Wq.yd) return null;
          const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
          return {
            want: Eq.getUint16(0, !0),
            release: Eq.getUint16(2, !0)
          }
        }(qq);
        Eq && !this.eN && (Eq.release !== Wq.zd && this.release(Eq.release), Eq.want !== Wq.zd && this.want(Eq.want))
      }
      reset(qq) {
        if (!this.eN) {
          for (const [qq, Eq] of this.sets) "ready" === Eq.state && this.releaseAll(Eq.distinct), this.sets.delete(qq);
          this.table = qq, this.generation++
        }
      }
      dispose() {
        if (this.eN) return;
        this.eN = !0, this.generation++, this.table = [];
        const qq = [...this.sets.values()];
        this.sets.clear();
        let Eq = null;
        for (const Yq of qq)
          for (const qq of "ready" === Yq.state ? Yq.distinct : []) try {
            this.host.jYq(qq)
          } catch (gq) {
            Eq ??= {
              error: gq
            }
          }
        if (Eq) throw Eq.error
      }
      isReady(qq) {
        var Eq;
        return "ready" === (null === (Eq = this.sets.get(qq)) || void 0 === Eq ? void 0 : Eq.state)
      }
      want(qq) {
        const Eq = this.sets.get(qq);
        if ("loading" === (null === Eq || void 0 === Eq ? void 0 : Eq.state)) return Eq.wanted = !0, void this.capAnswer(qq, Eq);
        if ("ready" === (null === Eq || void 0 === Eq ? void 0 : Eq.state)) return void this.host.sendReady(kx(qq, Eq.images, Eq.size));
        const gq = this.table[qq];
        if (!gq || 1 !== gq.urls.length && gq.urls.length !== Xg._b.CubeFaces) return this.host.sendReady(Rx(qq)), void this.host.onLoadFailed(qq, "", new Error(`no image set ${qq}`));
        const Yq = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(qq, Yq), this.load(qq, gq, Yq, this.generation, 0), this.capAnswer(qq, Yq)
      }
      capAnswer(qq, Eq) {
        this.host.wait(4e3, (() => {
          this.sets.get(qq) === Eq && Eq.wanted && this.host.sendReady(Rx(qq))
        }))
      }
      load(qq, Eq, gq, Yq, lq) {
        const Oq = [...new Set(Eq.urls)];
        Promise.allSettled(Oq.map((qq => this.host.loadImage(qq, Eq.orientation)))).then((mq => {
          const xq = mq.flatMap((qq => "fulfilled" === qq.status ? [qq.value] : [])),
            Aq = Yq === this.generation && this.sets.get(qq) === gq,
            cq = mq.findIndex((qq => "rejected" === qq.status));
          if (!Aq || !gq.wanted) return this.eN ? void this.releaseAfterDispose(xq.map(Jx)) : (this.releaseAll(xq.map(Jx)), void(Aq && this.sets.delete(qq)));
          cq < 0 ? this.loaded(qq, Eq, Oq, xq) : (this.releaseAll(xq.map(Jx)), this.host.sendReady(Rx(qq)), lq < Gx.length ? this.host.wait(Gx[lq], (() => {
            Yq === this.generation && this.sets.get(qq) === gq && (gq.wanted ? this.load(qq, Eq, gq, Yq, lq + 1) : this.sets.delete(qq))
          })) : (this.sets.delete(qq), this.host.onLoadFailed(qq, Oq[cq], mq[cq].reason)))
        }))
      }
      loaded(qq, Eq, gq, Yq) {
        const [lq] = Yq, Oq = [lq.width, lq.height], mq = Yq.every((qq => qq.width === Oq[0] && qq.height === Oq[1])), xq = Eq.urls.length === Xg._b.CubeFaces;
        if (!mq || Oq[0] <= 0 || Oq[1] <= 0 || Oq[0] > 65535 || Oq[1] > 65535 || xq && Oq[0] !== Oq[1]) {
          this.releaseAll(Yq.map(Jx)), this.sets.delete(qq), this.host.sendReady(Rx(qq));
          const gq = Yq.map((qq => `${qq.width}x${qq.height}`));
          return void this.host.onLoadFailed(qq, Eq.urls[0], new Error(`set ${qq}'s images can't make its texture: ${gq.join(", ")}`))
        }
        const Aq = Eq.urls.map((qq => Yq[gq.indexOf(qq)].id)),
          cq = Yq.map(Jx);
        this.sets.set(qq, {
          state: "ready",
          images: Aq,
          distinct: cq,
          size: Oq
        }), this.host.sendReady(kx(qq, Aq, Oq))
      }
      release(qq) {
        const Eq = this.sets.get(qq);
        "loading" === (null === Eq || void 0 === Eq ? void 0 : Eq.state) ? Eq.wanted = !1: "ready" === (null === Eq || void 0 === Eq ? void 0 : Eq.state) && (this.releaseAll(Eq.distinct), this.sets.delete(qq))
      }
      releaseAll(qq) {
        for (const Eq of qq) this.host.jYq(Eq)
      }
      releaseAfterDispose(qq) {
        for (const Eq of qq) try {
          this.host.jYq(Eq)
        } catch {}
      }
    }

    function Jx(qq) {
      return qq.id
    }

    function kx(qq, Eq, gq) {
      const Yq = new Uint8Array(Xg._b.SkyImagesReadyBytes),
        lq = new DataView(Yq.buffer);
      return lq.setUint16(0, qq, !0), lq.setUint16(2, Eq.length, !0), lq.setUint16(4, gq[0], !0), lq.setUint16(6, gq[1], !0), Eq.slice(0, Xg._b.CubeFaces).forEach(((qq, Eq) => {
        lq.setUint32(8 + 4 * Eq, qq, !0)
      })), Yq
    }

    function Rx(qq) {
      const Eq = new Uint8Array(Xg._b.SkyImagesReadyBytes),
        gq = new DataView(Eq.buffer);
      return gq.setUint16(0, qq, !0), gq.setUint16(2, Xg._b.Failed, !0), Eq
    }
    let Ux = Promise.resolve();
    async function Fx(qq, Eq) {
      let gq;
      try {
        gq = await (0, px.P)(qq)
      } catch (Oq) {
        throw new zx.b("fetch", qq, {
          cause: Oq
        })
      }
      const Yq = Ux.then((() => async function(qq, Eq) {
        const gq = new Blob([qq.slice()]);
        let Yq = await createImageBitmap(gq, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Eq
        });
        const lq = 1024 / Math.max(Yq.width, Yq.height);
        if (lq < 1) {
          const qq = Yq;
          try {
            Yq = await createImageBitmap(qq, {
              resizeWidth: Math.max(1, Math.round(qq.width * lq)),
              resizeHeight: Math.max(1, Math.round(qq.height * lq)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            qq.close()
          }
        }
        return Yq
      }(gq, Eq)));
      let lq;
      Ux = Yq.catch((() => {}));
      try {
        lq = await Yq
      } catch (Oq) {
        throw new zx.b("decode", qq, {
          cause: Oq
        })
      }
      return {
        id: (0, zx.n)(lq),
        width: lq.width,
        height: lq.height
      }
    }
    var sx = gq(3067),
      Xx = gq(34293);
    const wx = sx.d.length;

    function Kx(qq) {
      const Eq = [],
        gq = [];
      sx.d.forEach(((Yq, lq) => {
        var Oq;
        const mq = null !== (Oq = Cx(qq[Yq])) && void 0 !== Oq ? Oq : Xx.k[Yq];
        "custom" === mq.type ? (gq.push({
          id: lq,
          kind: Xg._b.KindCustom,
          set: Eq.length,
          earth: null
        }), Eq.push({
          urls: [mq.px, mq.py, mq.pz, mq.nx, mq.ny, mq.nz],
          orientation: "none"
        })) : gq.push({
          id: lq,
          kind: Xg._b.KindEarth,
          set: 0,
          earth: mq
        })
      }));
      const Yq = Cx(qq.earth);
      "earth" === (null === Yq || void 0 === Yq ? void 0 : Yq.type) && gq.push({
        id: wx,
        kind: Xg._b.KindEarth,
        set: 0,
        earth: Yq
      });
      const lq = Eq.length;
      Eq.push({
        urls: Xx.f.map((qq => Xx.g + qq)),
        orientation: "none"
      }), Eq.push({
        urls: [Xx.j],
        orientation: "flipY"
      }), Eq.push({
        urls: [Xx.b],
        orientation: "flipY"
      });
      const Oq = new Uint8Array(Xg._b.SkyTableHeaderBytes + gq.length * Xg._b.SkyTableEntryBytes),
        mq = new DataView(Oq.buffer);
      return mq.setUint16(0, lq, !0), mq.setUint16(2, lq + 1, !0), mq.setUint16(4, lq + 2, !0), mq.setUint16(6, gq.length, !0), gq.forEach(((qq, Eq) => {
        const gq = Xg._b.SkyTableHeaderBytes + Eq * Xg._b.SkyTableEntryBytes;
        mq.setUint16(gq, qq.id, !0), mq.setUint8(gq + 2, qq.kind);
        const Yq = gq + 4;
        qq.earth ? function(qq, Eq, gq) {
          const Yq = qq;
          let lq = 0,
            Oq = 0;
          for (const [mq, xq] of Ix) {
            const qq = Yq[mq];
            "number" === typeof qq && Number.isFinite(qq) && (Eq.setFloat32(gq + 4 * xq, qq, !0), lq |= 1 << xq)
          }
          for (const [mq, xq, Aq] of ex) {
            const qq = Yq[mq];
            Array.isArray(qq) && 3 === qq.length && qq.every((qq => "number" === typeof qq && Number.isFinite(qq))) && (qq.forEach(((qq, Yq) => {
              Eq.setFloat32(gq + Aq + 4 * Yq, qq, !0)
            })), lq |= xq)
          }
          Dx.forEach(((qq, Oq) => {
            let [mq, xq] = qq;
            const Aq = Yq[mq];
            "number" === typeof Aq && Number.isFinite(Aq) && (Eq.setFloat32(gq + Xg.q.CameraOffsetAt + 4 * Oq, Aq, !0), lq |= xq)
          }));
          for (const [mq, xq] of qA) {
            const qq = Yq[mq];
            null !== qq && void 0 !== qq && (lq |= xq, qq && (Oq |= xq >>> 14))
          }
          Eq.setUint32(gq + Xg.q.PresentAt, lq, !0), Eq.setUint8(gq + Xg.q.FlagsAt, Oq)
        }(qq.earth, mq, Yq) : mq.setUint16(Yq, qq.set, !0)
      })), {
        payload: Oq,
        sets: Eq
      }
    }

    function Cx(qq) {
      if ("object" !== typeof qq || null === qq) return null;
      const Eq = qq;
      if ("earth" === Eq.type) return qq;
      return "custom" === Eq.type && ["px", "py", "pz", "nx", "ny", "nz"].every((qq => {
        const gq = Eq[qq];
        return "string" === typeof gq && gq.length > 0
      })) ? qq : null
    }
    const Ix = [
        ["inclination", Xg.q.Inclination],
        ["turbidity", Xg.q.Turbidity],
        ["luminance", Xg.q.Luminance],
        ["rayleigh", Xg.q.Rayleigh],
        ["mieCoefficient", Xg.q.MieCoefficient],
        ["mieDirectionalG", Xg.q.MieDirectionalG],
        ["distance", Xg.q.Distance],
        ["azimuth", Xg.q.Azimuth]
      ],
      ex = [
        ["sunPosition", Xg.q.SunPosition, Xg.q.SunPositionAt],
        ["up", Xg.q.Up, Xg.q.UpAt],
        ["vertexTint", Xg.q.VertexTint, Xg.q.VertexTintAt]
      ],
      Dx = [
        ["xCameraOffset", Xg.q.CameraOffsetX],
        ["yCameraOffset", Xg.q.CameraOffsetY],
        ["zCameraOffset", Xg.q.CameraOffsetZ]
      ],
      qA = [
        ["useSunPosition", Xg.q.UseSunPosition],
        ["dithering", Xg.q.Dithering],
        ["infiniteDistance", Xg.q.InfiniteDistance]
      ];

    function EA(qq, Eq, gq) {
      const Yq = new YA({
        writeCmd: qq,
        warn: Eq,
        followPack: gA(gq, Eq)
      });
      return Yq.start(), Yq
    }

    function gA(qq, Eq) {
      return gq => {
        let Yq = () => {};
        const lq = qq((qq => {
          Yq(), Yq = () => {}, null !== qq ? Yq = qq.subscribe((qq => {
            gq(function(qq, Eq, gq) {
              if ("object" !== typeof qq || null === qq) return null;
              const Yq = qq.skyBoxes;
              if ("object" !== typeof Yq || null === Yq) return null;
              if ("player" === Eq) return Yq;
              return Object.fromEntries(Object.entries(Yq).filter((qq => {
                let [Eq, Yq] = qq;
                return !! function(qq) {
                  if ("object" !== typeof qq || null === qq) return !1;
                  return "earth" === qq.type || Object.entries(qq).every((qq => {
                    let [Eq, gq] = qq;
                    return "type" === Eq || ("" === (Yq = gq) || null !== function(qq) {
                      var Eq, gq, Yq;
                      return "string" !== typeof qq ? null : null !== (Eq = null === (gq = lA.exec(qq)) || void 0 === gq || null === (Yq = gq.groups) || void 0 === Yq ? void 0 : Yq.base64) && void 0 !== Eq ? Eq : null
                    }(Yq));
                    var Yq
                  }))
                }(Yq) || (gq(`Ignoring texture pack skybox ${Eq}, whose faces are not all data URLs`, null), !1)
              })))
            }(qq.pack, null === qq.gameSource ? "player" : "customGame", Eq))
          })) : gq(null)
        }));
        return () => {
          lq(), Yq()
        }
      }
    }
    class YA {
      constructor(qq) {
        var Eq, gq, Yq;
        this.host = qq, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.eN = !1, this.wait = null !== (Eq = qq.wait) && void 0 !== Eq ? Eq : (qq, Eq) => {
          setTimeout(Eq, qq)
        }, this.loader = new Lx({
          loadImage: null !== (gq = qq.loadImage) && void 0 !== gq ? gq : Fx,
          jYq: null !== (Yq = qq.jYq) && void 0 !== Yq ? Yq : zx.r,
          sendReady: qq => {
            this.queue.push({
              kind: Xg._b.SkyImagesReady,
              payload: qq
            })
          },
          onLoadFailed: (Eq, gq, Yq) => {
            qq.warn(`sky image set ${Eq} (${gq}) didn't load: the last sky stays`, Yq)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Sx.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((qq => {
          this.write(null !== qq && void 0 !== qq ? qq : {})
        }))
      }
      onEvent(qq) {
        this.loader.onEvent(qq)
      }
      drain() {
        if (0 === this.queue.length) return;
        let qq = 0;
        for (; qq < this.queue.length && this.host.writeCmd(this.queue[qq].kind, 0, this.queue[qq].payload);) qq++;
        qq > 0 && this.queue.splice(0, qq)
      }
      dispose() {
        this.eN = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(qq) {
        if (this.eN) return;
        const Eq = Kx(qq);
        var gq, Yq;
        this.written && (gq = this.written, Yq = Eq, gq.payload.length === Yq.payload.length && gq.payload.every(((qq, Eq) => qq === Yq.payload[Eq])) && gq.sets.length === Yq.sets.length && gq.sets.every(((qq, Eq) => {
          const gq = Yq.sets[Eq];
          return qq.orientation === gq.orientation && qq.urls.length === gq.urls.length && qq.urls.every(((qq, Eq) => qq === gq.urls[Eq]))
        }))) || (this.written = Eq, this.loader.reset(Eq.sets), this.queue = this.queue.filter((qq => qq.kind !== Xg._b.SkyImagesReady)), this.queue.push({
          kind: Xg._b.SkyTable,
          payload: Eq.payload
        }))
      }
    }
    const lA = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var OA = gq(2717),
      mA = gq(2900),
      xA = gq(284),
      AA = gq(181),
      cA = gq(2719),
      uA = gq(2725),
      BA = gq(260),
      WA = gq(263),
      NA = gq(2821),
      aA = gq(2839),
      VA = gq(2845),
      dA = gq(114),
      jA = gq(275),
      HA = gq(40548);
    class oA {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Jl.l)(HY.B, (qq => {
          this.onReply((0, Ll.d)(HY.B, qq), performance.now())
        }))
      }
      onFrame(qq, Eq) {
        null === this.id ? this.id = qq : qq !== this.id && (this.id = qq, this.sentMs = document.hidden ? null : Eq)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(qq, Eq) {
        qq === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Eq - this.sentMs), this.sentMs = null)
      }
      take() {
        const qq = this.roundTripMs;
        return this.roundTripMs = null, qq
      }
      stop() {
        this.stopReplies()
      }
    }
    class PA {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(qq, Eq, gq, Yq) {
        const lq = qq - this.sampled >>> 0,
          Oq = Eq - this.timed >>> 0,
          mq = gq - this.frameUs >>> 0,
          xq = this.primed;
        return this.sampled = qq, this.timed = Eq, this.frameUs = gq, this.primed = !0, !(!xq || lq > 64 || Oq > 64) && (Yq && mq <= 1e6 * Oq && (this.windowTimed += Oq, this.windowUs += mq), Yq && lq > 0)
      }
      reset() {}
      snapshotAndReset() {
        const qq = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: qq,
          submitToDoneMs: null
        }
      }
    }
    const QA = {
      pacedShare: null,
      switchesPerHour: null,
      lagP50Ms: null,
      lagP90Ms: null,
      joinLagP90Ms: null
    };
    class yA {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(qq, Eq) {
        const gq = Math.min(4096, this.count + Eq);
        this.samples.fill(qq, this.count, gq), this.count = gq
      }
      clear() {
        this.count = 0
      }
      take(qq) {
        const Eq = this.count;
        if (this.count = 0, Eq < 30) return null;
        const gq = this.samples.subarray(0, Eq).sort();
        return qq.map((qq => gq[Math.min(Eq - 1, Math.floor(qq * Eq))]))
      }
    }
    class tA {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new yA, this.inJoin = !1, this.rose = !1, this.joinLags = new yA, this.joinLagP90Ms = null
      }
      onFrame(qq, Eq, gq, Yq, lq) {
        const Oq = qq.headerWord(Xg.C.Pacing),
          mq = qq.headerWord(Xg.C.PacingLagUs),
          xq = (Oq >>> Xg.T.LagsShift) - (this.word >>> Xg.T.LagsShift) & Xg.T.CountMask,
          Aq = (Oq >>> Xg.T.SwitchesShift) - (this.word >>> Xg.T.SwitchesShift) & Xg.T.CountMask,
          cq = xq > 0 ? (mq - this.lagUs >>> 0) / xq / 1e3 : 0,
          uq = this.primed && xq <= 64 && Aq <= 2 && cq <= 6e4;
        if (this.rose = 0 !== (Oq & ~this.word & Xg.T.Joining), this.word = Oq, this.lagUs = mq, this.primed = !0, 0 !== (Oq & Xg.T.Tiered)) {
          if (0 !== (Oq & Xg.T.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && uq && Yq && xq > 0 && this.joinLags.add(cq, xq);
          else if (this.inJoin) {
            var Bq, Wq;
            this.inJoin = !1, this.joinLagP90Ms = null !== (Bq = null === (Wq = this.joinLags.take([.9])) || void 0 === Wq ? void 0 : Wq[0]) && void 0 !== Bq ? Bq : null
          }
          if (lq) {
            if (uq && (this.switches += Aq, xq > 0 && this.lags.add(cq, xq)), gq) {
              if (this.lastDrawnMs >= 0 && Eq - this.lastDrawnMs <= 250) {
                const qq = Eq - this.lastDrawnMs;
                this.tieredMs += qq, (Oq & Xg.T.AheadMask) > 0 && (this.pacedMs += qq)
              }
              this.lastDrawnMs = Eq
            }
          } else this.lastDrawnMs = -1
        } else this.lastDrawnMs = -1
      }
      onJoin() {
        this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
      }
      snapshotAndReset(qq) {
        const Eq = this.takeWindow(),
          gq = this.joinLagP90Ms;
        return this.joinLagP90Ms = null, qq ? {
          ...Eq,
          joinLagP90Ms: gq
        } : {
          ...QA,
          joinLagP90Ms: gq
        }
      }
      unsent(qq) {
        this.joinLagP90Ms ??= qq.joinLagP90Ms
      }
      takeWindow() {
        var qq, Eq;
        const gq = this.tieredMs >= 2e3,
          Yq = this.lags.take([.5, .9]),
          lq = {
            pacedShare: gq ? this.pacedMs / this.tieredMs : null,
            switchesPerHour: gq ? 36e5 * this.switches / this.tieredMs : null,
            lagP50Ms: null !== (qq = null === Yq || void 0 === Yq ? void 0 : Yq[0]) && void 0 !== qq ? qq : null,
            lagP90Ms: null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq[1]) && void 0 !== Eq ? Eq : null
          };
        return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, lq
      }
    }
    var rA = gq(9197),
      vA = gq(2700),
      hA = gq(40645),
      nA = gq(9191),
      bA = gq(2728),
      iA = gq(2714);
    const ZA = {
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

    function fA(qq) {
      return new MA(qq)
    }
    class MA {
      constructor(qq) {
        this.shell = qq, this.tracker = new uA.e, this.gpu = new PA, this.pacing = new tA, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new oA, this.pacedCpuMs = 0, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now()), this.lastDrawnMs = -1
        }, (0, rA.c)(qq.backend, qq.canvas, qq.adapterVendor), this.tracker.start((() => !qq.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, bA.b)("wasm", (() => {
          const {
            n: Eq,
            sampleCount: gq
          } = (0, hA.h)();
          return `${qq.backend}, quality steps aim at up to ${iA.d.target.maxFps} fps, pixel n ${Eq}, msaa ${gq}`
        }), (Eq => {
          Eq.setLoadCounts(qq.readLoadCounts), this.frameDebug = Eq
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(qq) {
        var Eq;
        this.tracker.onAnimationFrame(qq), null === (Eq = this.frameDebug) || void 0 === Eq || Eq.animationFrame()
      }
      frameRan(qq, Eq, gq, Yq) {
        var lq;
        this.ping.onFrame(qq.headerWord(Xg.C.PingSent), gq);
        const Oq = this.tracker;
        this.pacing.onFrame(qq, Eq, "drawn" === Yq, !document.hidden, Oq.isSampling());
        const mq = qq.headerWord(Xg.C.TickUs) / 1e3 + (0, YY.N)();
        var xq;
        (Oq.Wy(mq), null === (lq = this.frameDebug) || void 0 === lq || lq.wasmFrame(qq, Eq, gq, Yq, Oq.isSampling(), mq), null !== this.game) && (null === (xq = this.frameDebug) || void 0 === xq || xq.inGame());
        const Aq = Math.max(0, gq - Eq - mq);
        if ("drawn" !== Yq) return void("paced" === Yq ? this.pacedCpuMs += Aq : "skipped" === Yq && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(Eq), Oq.onFrameStart(Eq);
        this.gpu.onFrame(qq.headerWord(Xg.C.GpuSampled), qq.headerWord(Xg.C.GpuTimed), qq.headerWord(Xg.C.GpuFrameUs), Oq.isSampling()) && Oq.onGpuSampleStarted(), Oq.onFrameCpu(Aq + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Eq)
      }
      framePaced() {
        var qq;
        null === (qq = this.frameDebug) || void 0 === qq || qq.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const qq of this.timers) clearInterval(qq);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.ping.stop()
      }
      followGame() {
        const qq = this.shell.joinedGame();
        if (qq !== this.game) {
          var Eq;
          if (this.game = qq, null !== qq) null === (Eq = this.frameDebug) || void 0 === Eq || Eq.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== qq
      }
      checkMainStall(qq) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const Eq = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          gq = this.lastDrawnMs < 0 ? 0 : qq - this.lastDrawnMs;
        this.lastDrawnMs = qq, this.stallPending || (gq <= 5e3 ? Eq.markFrame(qq) : (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(gq, Eq.blockingSinceMark())
        }), 0)))
      }
      countFpsFrame(qq) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = qq
        }
        this.fpsFrames++;
        const Eq = qq - this.fpsSpanStartMs;
        if (!(Eq < VA.b)) {
          if (!document.hidden) {
            const qq = 1e3 * this.fpsFrames / Eq;
            this.firstSpanFps ??= qq, this.initialFps = this.firstSpanFps, this.fpsOverTime = qq
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = qq
        }
      }
      flush() {
        const qq = this.followGame(),
          {
            cpuFrameMs: Eq,
            refreshHz: gq,
            cpuBottleneck: lq,
            frameIntervalCv: Oq,
            ...mq
          } = this.tracker.snapshotAndReset(),
          xq = this.shell.inGame(),
          Aq = xq && this.inGameAtLastFlush,
          cq = Aq ? mq : cA.e,
          uq = this.pacing.snapshotAndReset(Aq);
        if (this.inGameAtLastFlush = xq, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !qq) return void this.pacing.unsent(uq);
        const Bq = performance.now(),
          Nq = (0, aA.r)((0, aA.p)(Bq), this.unsentPage),
          Vq = function(qq, Eq, gq, lq, Oq, mq, xq, Aq) {
            var cq, uq, Bq, Wq;
            const Nq = {},
              {
                canvas: aq
              } = qq,
              Vq = (0, NA.d)({
                refreshHz: Eq.refreshHz,
                msaa: qq.msaa(),
                autoMsaaOff: (0, nA.e)()
              });
            for (const dq of (0, mA.e)()) {
              const jq = dq.name;
              let Hq;
              if ((0, xA.p)(jq)) Hq = (0, aA.b)(jq);
              else if ((0, aA.i)(jq)) Hq = Aq[jq];
              else if ((0, NA.e)(jq)) Hq = Vq[jq];
              else switch (jq) {
                case "fps":
                  Hq = lq;
                  break;
                case "Zm":
                  Hq = Oq;
                  break;
                case "Sm":
                  Hq = (0, vA.w)((0, hA.h)().n);
                  break;
                case "pm":
                  Hq = Math.max(aq.width, aq.height);
                  break;
                case "Gm":
                  Hq = Math.min(aq.width, aq.height);
                  break;
                case "Lm":
                  Hq = navigator.hardwareConcurrency || null;
                  break;
                case "Jm":
                  Hq = (0, Xl.getWebGpuSupported)();
                  break;
                case "km":
                  Hq = null === qq.fallbackReason ? null : ZA[qq.fallbackReason];
                  break;
                case "Rm":
                  Hq = Eq.cpuFrameMs;
                  break;
                case "Um":
                  Hq = Eq.refreshHz;
                  break;
                case "Fm":
                  Hq = Eq.cpuBottleneck;
                  break;
                case "sm":
                  Hq = Eq.frameIntervalCv;
                  break;
                case "Xm":
                  Hq = Eq.frameMs;
                  break;
                case "wm":
                  Hq = Eq.tickMs;
                  break;
                case "Dm":
                  Hq = Eq.mainBusyShare;
                  break;
                case "qx":
                  Hq = Eq.mainProbeDelayMs;
                  break;
                case "Km":
                  Hq = Eq.longAnimationFramesPerMin;
                  break;
                case "Cm":
                  Hq = Eq.longAnimationFrameTimeShare;
                  break;
                case "Im":
                  Hq = Eq.longAnimationFrameScriptShare;
                  break;
                case "Ex":
                  Hq = Eq.gpuPassMs;
                  break;
                case "gx":
                  Hq = Eq.gpuSubmitToDoneMs;
                  break;
                case "Yx":
                  Hq = gq.pacedShare;
                  break;
                case "lx":
                  Hq = gq.switchesPerHour;
                  break;
                case "Ox":
                  Hq = gq.lagP50Ms;
                  break;
                case "mx":
                  Hq = gq.lagP90Ms;
                  break;
                case "Ax":
                  Hq = gq.joinLagP90Ms;
                  break;
                case "hx":
                  Hq = (0, OA.g)(mq);
                  break;
                case "zm":
                  Hq = xq;
                  break;
                case "Bx":
                case "Wx":
                case "Nx":
                case "Vx":
                case "jx":
                case "Hx":
                case "Px":
                case "Qx":
                case "yx":
                case "tx":
                case "vx":
                case "nx":
                case "bx":
                case "ix":
                case "Zx":
                  Hq = null;
                  break;
                case "Xx":
                  Hq = (0, Xl.getPlatformType)();
                  break;
                case "wx":
                  Hq = (0, Xl.getGpuVendor)();
                  break;
                case "Kx":
                  Hq = HA.d[qq.backend];
                  break;
                case "Cx":
                  Hq = (0, dA.d)();
                  break;
                case "Ix":
                  Hq = (0, Xl.getOperatingSystem)();
                  break;
                case "Dx":
                  Hq = (0, Xl.getTrafficSource)();
                  break;
                case "qA":
                  Hq = null !== (cq = Yq.b.get("gameEntrySource")) && void 0 !== cq ? cq : AA.d;
                  break;
                case "EA":
                  Hq = Eq.frameLimiter;
                  break;
                case "gA":
                  Hq = (0, BA.l)();
                  break;
                case "YA":
                  Hq = null !== (uq = (0, WA.b)()) && void 0 !== uq ? uq : AA.d;
                  break;
                case "lA":
                  Hq = (0, BA.d)(aq.width, aq.height);
                  break;
                case "OA":
                  Hq = (0, mA.f)(-(new Date).getTimezoneOffset());
                  break;
                case "AA":
                  Hq = null !== (Bq = qq.fallbackReason) && void 0 !== Bq ? Bq : AA.d;
                  break;
                case "BA":
                  Hq = "ready";
                  break;
                case "WA":
                  Hq = (0, Xl.getSoftwareRenderer)();
                  break;
                case "xA":
                  Hq = null !== qq.shaderPackReach() ? "true" : "false";
                  break;
                case "NA":
                  Hq = null !== (Wq = qq.shaderPackReach()) && void 0 !== Wq && Wq.sceneDepth ? "true" : "false";
                  break;
                case "aA": {
                  const Eq = qq.shaderPackReach();
                  Hq = null !== Eq && void 0 !== Eq && Eq.sunShadow ? "all" : null !== Eq && void 0 !== Eq && Eq.airShadow ? "air" : "none";
                  break
                }
                case "VA":
                  Hq = jA.z;
                  break;
                case "mA":
                case "cA":
                case "uA":
                  Hq = AA.d;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${jq}`)
              }
              if (void 0 === Hq) throw new Error(`Metric ${jq} has no value`);
              Nq[jq] = Hq
            }
            return Nq
          }(this.shell, {
            cpuFrameMs: Eq,
            refreshHz: gq,
            cpuBottleneck: lq,
            frameIntervalCv: Oq,
            ...cq
          }, uq, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Nq);
        if (! function(qq, Eq, gq) {
            return (0, FE.b)(), qq(aq.k.Send, Eq, gq)
          }(this.shell.writeCmd, Wq.vd, function(qq) {
            const Eq = (0, Sq.h)((0, wE.f)(qq)),
              gq = new Uint8Array(aq.ee.BYTES + Eq.length);
            return new DataView(gq.buffer).setUint16(0, wE.b.AnalyticsUpdate, !0), gq.set(Eq, aq.ee.BYTES), gq
          }(Vq))) return this.unsentPage = Nq, this.pacing.unsent(uq), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, OA.e), (0, aA.o)(Vq, "wasm", Bq)
      }
    }
    var TA = gq(39516);

    function zA(qq, Eq, gq) {
      const Yq = new Map;
      return (0, TA.b)(((qq, gq, Yq) => Eq.lc(qq, gq, Yq)), ((Eq, gq, lq) => {
        const Oq = `${Eq},${gq},${lq}`;
        return Yq.has(Oq) || Yq.set(Oq, (0, GE.d)(qq, Eq, gq, lq)), Yq.get(Oq)
      }), gq)
    }
    var SA = gq(39523),
      pA = gq(40434);

    function GA(qq) {
      const Eq = null !== qq && 0 !== (aq.t.playerFlags(qq.api.apiView, 0) & aq.Pd.CursorAim);
      Eq !== (0, pA.k)() && (0, pA.F)(Eq, null !== qq)
    }

    function LA(qq) {
      return (0, jY.e)(HY.x, qq)
    }
    var JA = gq(40462);
    const kA = new Oq.f((qq => gq(42363)(`./${qq}/${qq}Client`)));
    let RA = null,
      UA = null;
    async function FA(qq) {
      RA ??= gq.e(27).then((() => gq(39093))).then((qq => {
        UA = qq.createDefaultClientPlugins
      }), (qq => {
        throw RA = null, qq
      })), await Promise.all([kA.load(qq), RA])
    }

    function sA(qq) {
      qq.load(new zE(FY, new wY))
    }
    let XA = !1;
    const wA = new WeakMap;

    function KA(qq) {
      try {
        qq()
      } catch (Eq) {
        console.error("[bloxd-wasm-client] a session-end step failed", Eq)
      }
    }

    function CA(qq, Eq) {
      ! function() {
        var qq, Eq;
        kY.Howler.volume();
        const gq = kY.Howler;
        null === (qq = gq._autoResume) || void 0 === qq || qq.call(gq), null === (Eq = gq._autoSuspend) || void 0 === Eq || Eq.call(gq)
      }(), Eq.audio.prepare();
      const gq = new Pq(Eq.core, Eq.memory, Eq.audio);
      let Oq;
      try {
        Oq = new Vl(gq, Eq.options)
      } catch (Wq) {
        return qq.crash(jl.B, Wq), null
      }(0, Aq.c)(dl(gq, Oq));
      const uq = new tx({
        running: qq,
        api: gq,
        core: Eq.core,
        memory: Eq.memory,
        staleOr: Eq.staleOr,
        reportFault: Eq.reportReplayFault,
        options: Eq.options,
        sessionInfo: Eq.sessionInfo,
        replayShaderPack: Eq.replayShaderPack
      });
      (0, YY.B)();
      const Bq = new zY({
        api: gq,
        tables: Oq,
        sessionInfo: Eq.sessionInfo,
        gameFactory: qq => kA.loadedFactory(qq),
        defaultPlugins: (qq, Eq, gq, Yq) => {
          if (null === UA) throw new Error("The default plugins started before they loaded");
          return UA(qq, Eq, gq, Yq)
        },
        serverOptions: Eq.options,
        onNetEvent: qq => {
          uq.netEvent(qq), Eq.onNetEvent(qq)
        },
        setLocalOptions: Eq => {
          vx(qq, {
            changes: Eq,
            reset: !1
          })
        },
        playSound: (qq, gq, Yq, lq, Oq, mq, xq) => Eq.audio.playGame(qq, gq, Yq, lq, Oq, mq, xq),
        preloadSounds: qq => {
          Eq.audio.preload(function(qq) {
            const Eq = [];
            for (const gq of qq) {
              const qq = ME(gq);
              qq >= 0 && Eq.push(HE[qq])
            }
            return Eq
          }(qq))
        },
        onSessionEnd: () => {
          KA(lq.s), KA(El), KA((() => {
            Yq.b.set({
              openInGameMenuName: null
            })
          })), KA((() => {
            Eq.audio.endSession()
          }))
        },
        beforeWrite: Eq.beforeWrite,
        beforeOp: Eq.beforeOp,
        cameraScreen: ql,
        showCameraFacing: gl,
        onEventOverflow: Eq.onEventOverflow,
        screenBandY: xq.l,
        replayEntities: uq.entityHooks,
        hasPackModel: Eq.hasPackModel
      });
      return Bq.attach(qq), wA.set(Bq, uq), LY(Bq.items, Eq.audio),
        function(qq) {
          qq.setClientFreeCameraGrant("isDev", !1);
          const Eq = Eq => {
            qq.setClientFreeCameraGrant("hasDeveloperRank", Eq.playerHasRank("developer"))
          };
          (0, mq.k)("userContextUpdated", Eq)
        }(Bq), XA || (XA = !0, (0, mq.k)("appManagerUpdated|openInGameMenuName", (qq => {
          !qq && (0, cq.i)().includes(cq.d) && (0, cq.j)(cq.d)
        }))), Bq
    }

    function IA(qq) {
      try {
        qq.closeGame()
      } finally {
        var Eq;
        null === (Eq = wA.get(qq)) || void 0 === Eq || Eq.stop(), wA.delete(qq)
      }
    }
  },
  40548: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40559: (qq, Eq, gq) => {
    function Yq() {
      return gq(40565)
    }

    function lq() {
      return gq(40573)
    }

    function Oq(qq) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(qq)
    }
    gq.d(Eq, {
      c: () => Oq,
      e: () => Yq,
      g: () => lq
    })
  },
  36356: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      e: () => cq,
      i: () => mq,
      j: () => Bq
    });
    var Yq = gq(36345),
      lq = gq(15);
    const Oq = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function mq(qq) {
      if (qq instanceof WebAssembly.RuntimeError) return !0;
      const Eq = qq instanceof Error ? qq.stack : void 0;
      return "string" === typeof Eq && Oq.test(Eq)
    }

    function xq(qq, Eq, gq) {
      var lq;
      const mq = qq instanceof Error ? qq.name : "thrown",
        xq = (qq instanceof Error && null !== (lq = qq.stack) && void 0 !== lq ? lq : "").split("\n").filter((qq => Oq.test(qq))).slice(0, 8).map((qq => qq.trim())),
        Aq = null === Eq ? "wasm memory unknown" : `wasm memory ${Math.round(Eq/2**20)} MB`,
        cq = null === gq.panic ? "" : `, panic: ${(0,Yq.j)(gq.panic)}`,
        uq = `${mq}: ${qq instanceof Error?qq.message:String(qq)}`;
      return `${(0,Yq.l)(gq.kind,gq.refusedBytes)} ${uq} (${Aq})${cq}${xq.length>0?` | ${xq.join(" < ")}`:""}`
    }
    const Aq = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function cq(qq) {
      var Eq;
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(qq instanceof Error) || !Aq.test(qq.message)) return {};
      if (!("detached" in gq)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, lq.V)(null === (Eq = (0, lq.P)(gq, "detached")) || void 0 === Eq ? void 0 : Eq.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const uq = 500;

    function Bq(qq) {
      let Eq = "[object Object]";
      try {
        Eq = String(qq)
      } catch {}
      if ("[object Object]" !== Eq) return Eq;
      try {
        var gq, Yq;
        return null !== (gq = null === (Yq = JSON.stringify(qq)) || void 0 === Yq ? void 0 : Yq.slice(0, uq)) && void 0 !== gq ? gq : Eq
      } catch {
        return Eq
      }
    }
  },
  40565: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40573: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36345: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      g: () => Oq,
      j: () => Aq,
      k: () => mq,
      l: () => lq
    });
    const Yq = /^alloc_failed (\d+) bytes$/;

    function lq(qq, Eq) {
      return Oq(qq, Eq) ? `trap=alloc_failed ${Eq} bytes` : `trap=${qq}`
    }

    function Oq(qq, Eq) {
      return "unreachable" === qq && Eq > 0
    }

    function mq(qq, Eq, gq) {
      const Yq = function(qq) {
        return qq instanceof WebAssembly.RuntimeError ? /unreachable/i.test(qq.message) ? "unreachable" : /out of bounds/i.test(qq.message) ? "out_of_bounds" : "runtime_error" : (qq instanceof RangeError || qq instanceof Error && "InternalError" === qq.name) && /call stack|recursion/i.test(qq.message) ? "stack_overflow" : "js_error"
      }(qq);
      if ("unreachable" !== Yq) return {
        kind: Yq,
        panic: null,
        refusedBytes: 0
      };
      const lq = Eq(),
        Oq = gq();
      return {
        kind: Yq,
        panic: Oq > 0 ? null : lq,
        refusedBytes: Oq
      }
    }
    const xq = 300;

    function Aq(qq) {
      return qq.replace(/\s*\n\s*/g, " / ").slice(0, xq)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);